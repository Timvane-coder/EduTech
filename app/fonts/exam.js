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

    // === DOCUMENT EXPORT METHODS ===

async exportToDOCXFile(examPaper, filename = 'chemistry_exam_paper.docx') {
        try {
            const doc = new Document({
                sections: [
                    // Cover Page Section
                    this.createCoverPageSection(examPaper),
                    // Question Sections
                    ...examPaper.questionSections.map(section => 
                        this.createQuestionSection(section, examPaper.formatting)
                    ),
                    // Closing Page
                    this.createClosingPageSection(examPaper.closingPage)
                ]
            });

            // Generate buffer
            const buffer = await Packer.toBuffer(doc);
            
            // Write to file
            fs.writeFileSync(filename, buffer);
            
            console.log(`\n✅ Exam paper saved to: ${filename}`);
            return filename;

        } catch (error) {
            console.error(`❌ Error creating DOCX file: ${error.message}`);
            throw error;
        }
    }

    createCoverPageSection(examPaper) {
        const { coverPage, metadata } = examPaper;
        
        return {
            properties: {
                page: {
                    margin: {
                        top: 1440, // 1 inch = 1440 twips
                        right: 1440,
                        bottom: 1440,
                        left: 1440
                    }
                }
            },
            children: [
                // School/Board Name
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

                // Exam Title
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

                // Subject Info Box
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

                // Exam Details Table
                this.createExamDetailsTable(coverPage.examDetails),

                // Spacing
                new Paragraph({ text: '', spacing: { after: 400 } }),

                // Candidate Information
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

                // Spacing
                new Paragraph({ text: '', spacing: { after: 400 } }),

                // Instructions Box
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

                // Warnings
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

    createExamDetailsTable(examDetails) {
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

    createQuestionSection(section, formatting) {
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
                // Section Header
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

                // Questions
                ...section.questions.flatMap(question => 
                    this.createQuestionParagraphs(question, formatting)
                )
            ]
        };
    }

    createQuestionParagraphs(question, formatting) {
        const paragraphs = [];

        // Question header with marks
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

        // Subparts if any
        if (question.subparts.length > 0) {
            question.subparts.forEach(subpart => {
                paragraphs.push(
                    new Paragraph({
                        children: [
                            new TextRun({ text: `   ${subpart.label}) `, bold: true }),
                            new TextRun({ text: subpart.question }),
                            new TextRun({ text: `\t[${subpart.marks}]`, bold: true })
                        ],
                        spacing: { after: 100 }
                    })
                );

                // Answer space
                const lines = this.getAnswerLines(subpart.marks, formatting.answerSpaceLines);
                for (let i = 0; i < lines; i++) {
                    paragraphs.push(
                        new Paragraph({
                            text: '_'.repeat(100),
                            spacing: { after: 100 }
                        })
                    );
                }
            });
        } else {
            // Answer space for non-subpart questions
            const lines = this.getAnswerLines(question.marks, formatting.answerSpaceLines);
            for (let i = 0; i < lines; i++) {
                paragraphs.push(
                    new Paragraph({
                        text: '_'.repeat(100),
                        spacing: { after: 100 }
                    })
                );
            }
        }

        // Spacing between questions
        paragraphs.push(new Paragraph({ text: '', spacing: { after: 400 } }));

        return paragraphs;
    }

    getAnswerLines(marks, baseLines) {
        if (marks <= 2) return Math.min(3, baseLines);
        if (marks <= 5) return baseLines;
        if (marks <= 8) return baseLines * 2;
        return baseLines * 3;
    }

    createClosingPageSection(closingPage) {
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
                // Spacing
                new Paragraph({ text: '', spacing: { after: 2000 } }),

                // End Message
                new Paragraph({
                    text: closingPage.endMessage.text,
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 1000 }
                }),

                // Examiner Details
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

                // Moderator
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

                // Copyright
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

    // Generate Marking Scheme File
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
                        // Title
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

                        // Guidelines
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

                        // Sections
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
                            ...section.questions.flatMap(q => [
                                new Paragraph({
                                    text: `Question ${q.number} - ${q.topic} [${q.totalMarks} marks]`,
                                    heading: HeadingLevel.HEADING_2,
                                    spacing: { after: 200 }
                                }),
                                ...q.markingPoints.flatMap(point => [
                                    new Paragraph({
                                        text: `${point.part} [${point.totalMarks} marks]`,
                                        bold: true,
                                        spacing: { after: 100 }
                                    }),
                                    ...point.breakdown.map(item => 
                                        new Paragraph({
                                            text: `• ${item.component}: ${item.marks} mark(s)`,
                                            spacing: { after: 50 },
                                            indent: { left: 720 }
                                        })
                                    )
                                ]),
                                new Paragraph({ text: '', spacing: { after: 400 } })
                            ])
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
    // PDF GENERATION WITH PDFKIT
    // ========================================================================

    async exportToPDFFile(examPaper, filename = 'chemistry_exam_paper.pdf') {
        return new Promise((resolve, reject) => {
            try {
                // Create PDF document
                const doc = new PDFDocument({
                    size: 'A4',
                    margins: {
                        top: 72,    // 1 inch
                        bottom: 72,
                        left: 72,
                        right: 72
                    },
                    info: {
                        Title: `${examPaper.metadata.subjectName} Examination`,
                        Author: examPaper.metadata.examBoard,
                        Subject: examPaper.metadata.subjectName,
                        Keywords: 'chemistry, exam, education'
                    }
                });

                // Pipe to file
                const stream = fs.createWriteStream(filename);
                doc.pipe(stream);

                // Generate Cover Page
                this.createPDFCoverPage(doc, examPaper);

                // Generate Question Sections
                examPaper.questionSections.forEach((section, index) => {
                    doc.addPage();
                    this.createPDFQuestionSection(doc, section, examPaper.formatting);
                });

                // Generate Closing Page
                doc.addPage();
                this.createPDFClosingPage(doc, examPaper.closingPage);

                // Finalize PDF
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

        // School/Board Header
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

        // Exam Title
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

        // Subject Info Box
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

        // Exam Details
        doc.moveDown(3);
        const detailsY = doc.y;
        
        coverPage.examDetails.forEach((detail, index) => {
            doc.fontSize(11)
               .font('Helvetica-Bold')
               .text(`${detail.label}:`, margin, detailsY + (index * 25), { continued: true })
               .font('Helvetica')
               .text(`  ${detail.value}`);
        });

        // Candidate Information
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

        // Instructions Box
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

        // Warnings
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

        // Section Header
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

        // Section Instructions
        doc.moveDown(1);
        doc.fontSize(10)
           .font('Helvetica-Oblique')
           .text(section.instructions, margin, doc.y, {
               width: pageWidth - (margin * 2)
           });

        doc.moveDown(1.5);

        // Questions
        section.questions.forEach((question, qIndex) => {
            // Check if we need a new page
            if (doc.y > doc.page.height - 200) {
                doc.addPage();
            }

            this.createPDFQuestion(doc, question, formatting, margin, pageWidth);
        });
    }

    createPDFQuestion(doc, question, formatting, margin, pageWidth) {
        const startY = doc.y;

        // Question header
        doc.fontSize(11)
           .font('Helvetica-Bold')
           .text(`${question.number}. `, margin, doc.y, { continued: true })
           .font('Helvetica')
           .text(question.problemText, { continued: true })
           .font('Helvetica-Bold')
           .text(`  [${question.marks} marks]`, { align: 'right' });

        doc.moveDown(0.8);

        // Subparts
        if (question.subparts.length > 0) {
            question.subparts.forEach(subpart => {
                doc.fontSize(10)
                   .font('Helvetica-Bold')
                   .text(`   ${subpart.label}) `, margin + 20, doc.y, { continued: true })
                   .font('Helvetica')
                   .text(subpart.question, { continued: true })
                   .font('Helvetica-Bold')
                   .text(`  [${subpart.marks}]`);

                doc.moveDown(0.5);

                // Answer lines
                const lines = this.getAnswerLines(subpart.marks, formatting.answerSpaceLines);
                for (let i = 0; i < lines; i++) {
                    if (doc.y > doc.page.height - 100) {
                        doc.addPage();
                    }
                    doc.fontSize(10)
                       .font('Helvetica')
                       .text('_'.repeat(85), margin + 20, doc.y);
                    doc.moveDown(0.6);
                }

                doc.moveDown(0.3);
            });
        } else {
            // Answer lines for non-subpart questions
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
        }

        doc.moveDown(1.5);
    }

    createPDFClosingPage(doc, closingPage) {
        const pageWidth = doc.page.width;
        const margin = 72;

        // Large spacing
        doc.moveDown(10);

        // End Message
        doc.fontSize(16)
           .font('Helvetica-Bold')
           .text(closingPage.endMessage.text, {
               align: 'center'
           });

        doc.moveDown(5);

        // Examiner Details
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

        // Moderator Details
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

        // Copyright
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

    // Generate Marking Scheme PDF
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

                // Title Page
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

                // Guidelines
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

                // Sections
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
                        if (doc.y > doc.page.height - 250) {
                            doc.addPage();
                        }

                        doc.fontSize(12)
                           .font('Helvetica-Bold')
                           .text(`Question ${q.number} - ${q.topic}`, margin, doc.y);

                        doc.fontSize(10)
                           .font('Helvetica')
                           .text(`Total Marks: ${q.totalMarks}`, margin, doc.y);

                        doc.moveDown(1);

                        q.markingPoints.forEach(point => {
                            doc.fontSize(10)
                               .font('Helvetica-Bold')
                               .text(`${point.part} [${point.totalMarks} marks]`, margin + 10, doc.y);

                            doc.moveDown(0.5);
                            doc.font('Helvetica');

                            point.breakdown.forEach(item => {
                                doc.text(`• ${item.component}: ${item.marks} mark(s)`, margin + 20, doc.y);
                                doc.moveDown(0.3);
                            });

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


// === TERMINAL DISPLAY METHODS ===

displayExamPaperPreview(examPaper) {
    console.log('\n' + '='.repeat(80));
    console.log('EXAMINATION PAPER PREVIEW');
    console.log('='.repeat(80) + '\n');
    
    // Metadata
    console.log(`📋 Exam Type: ${examPaper.metadata.examType}`);
    console.log(`📚 Subject: ${examPaper.metadata.subjectName} (${examPaper.metadata.subjectCode})`);
    console.log(`🎓 Grade Level: ${examPaper.metadata.gradeLevel}`);
    console.log(`📅 Date: ${examPaper.metadata.examDate}`);
    console.log(`⏱️  Duration: ${examPaper.metadata.duration}`);
    console.log(`💯 Total Marks: ${examPaper.metadata.totalMarks}`);
    console.log(`📄 Paper Size: ${examPaper.metadata.paperSize}`);
    console.log(`🔄 Orientation: ${examPaper.metadata.orientation}`);
    console.log(`🕐 Generated: ${new Date(examPaper.metadata.generatedAt).toLocaleString()}`);
    
    console.log('\n' + '-'.repeat(80));
    console.log('QUESTION STRUCTURE');
    console.log('-'.repeat(80) + '\n');
    
    // Sections summary
    examPaper.questionSections.forEach((section, index) => {
        console.log(`Section ${section.label}: ${section.title}`);
        console.log(`  Questions: ${section.questions.length}`);
        console.log(`  Total Marks: ${section.totalMarks}`);
        console.log(`  Difficulty: ${section.questions[0]?.difficulty || 'N/A'}`);
        console.log();
    });
    
    console.log('-'.repeat(80));
    console.log('SAMPLE QUESTIONS');
    console.log('-'.repeat(80) + '\n');
    
    // Display first question from each section
    examPaper.questionSections.forEach(section => {
        const firstQuestion = section.questions[0];
        if (firstQuestion) {
            console.log(`[Section ${section.label}] Question ${firstQuestion.number} (${firstQuestion.marks} marks)`);
            console.log(`Topic: ${firstQuestion.topic}`);
            console.log(`Problem: ${firstQuestion.problemText}`);
            
            if (firstQuestion.subparts.length > 0) {
                console.log('Subparts:');
                firstQuestion.subparts.forEach(subpart => {
                    console.log(`  ${subpart.label}) ${subpart.question} [${subpart.marks}]`);
                });
            }
            console.log();
        }
    });
    
    console.log('='.repeat(80));
    console.log('EXPORT OPTIONS');
    console.log('='.repeat(80) + '\n');
    console.log('✅ Exam Paper ready for export to DOCX/PDF');
    console.log('✅ Marking Scheme ready for separate export');
    console.log('✅ All formatting specifications applied');
    console.log('\n' + '='.repeat(80) + '\n');
}

displayMarkingSchemePreview(markingScheme) {
    console.log('\n' + '='.repeat(80));
    console.log('MARKING SCHEME PREVIEW - CONFIDENTIAL');
    console.log('='.repeat(80) + '\n');
    
    console.log(`⚠️  ${markingScheme.metadata.warning}`);
    console.log(`📋 ${markingScheme.metadata.title}`);
    console.log(`🔒 ${markingScheme.metadata.subtitle}`);
    console.log(`🕐 Generated: ${new Date(markingScheme.metadata.generatedDate).toLocaleString()}`);
    
    console.log('\n' + '-'.repeat(80));
    console.log('GENERAL GUIDELINES');
    console.log('-'.repeat(80) + '\n');
    
    markingScheme.generalGuidelines.forEach((guideline, index) => {
        console.log(`${index + 1}. ${guideline}`);
    });
    
    console.log('\n' + '-'.repeat(80));
    console.log('MARKING BREAKDOWN SUMMARY');
    console.log('-'.repeat(80) + '\n');
    
    markingScheme.sections.forEach(section => {
        console.log(`Section ${section.section}: ${section.title} (${section.totalMarks} marks)`);
        console.log(`  Questions: ${section.questions.length}`);
        
        // Show first question as example
        const firstQ = section.questions[0];
        if (firstQ) {
            console.log(`\n  Sample Question ${firstQ.number}:`);
            console.log(`  - Topic: ${firstQ.topic}`);
            console.log(`  - Total Marks: ${firstQ.totalMarks}`);
            console.log(`  - Marking Points: ${firstQ.markingPoints.length}`);
        }
        console.log();
    });
    
    console.log('='.repeat(80) + '\n');
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



// ========================================================================
    // PROBLEM GENERATOR INTEGRATION (From ChemistryProblemSolver)
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

        // Redox Chemistry Generators
        redox_stoichiometry: this.generateRelatedRedoxStoichiometry.bind(this),
        oxidation_states: this.generateRelatedOxidationStates.bind(this),
        half_reactions: this.generateRelatedHalfReactions.bind(this),
        electrochemistry: this.generateRelatedElectrochemistry.bind(this),
        galvanic_cells: this.generateRelatedGalvaniCells.bind(this),
        electrolysis: this.generateRelatedElectrolysis.bind(this),

        // Acid-Base Chemistry Generators
        acid_base_neutralization: this.generateRelatedAcidBase.bind(this),
        ph_calculations: this.generateRelatedpHCalculations.bind(this),
        buffers: this.generateRelatedBuffers.bind(this),
        titrations: this.generateRelatedTitrations.bind(this),
        polyprotic_acids: this.generateRelatedPolyproticAcids.bind(this),

        // Equilibrium Chemistry Generators
        equilibrium_constants: this.generateRelatedEquilibriumConstants.bind(this),
        le_chatelier: this.generateRelatedLeChatelir.bind(this),
        solubility_equilibria: this.generateRelatedSolubilityEquilibria.bind(this),
        complex_ions: this.generateRelatedComplexIons.bind(this),
        gas_equilibrium: this.generateRelatedGasEquilibrium.bind(this),

        // Kinetics & Thermodynamics Generators
        reaction_kinetics: this.generateRelatedReactionKinetics.bind(this),
        rate_laws: this.generateRelatedRateLaws.bind(this),
        activation_energy: this.generateRelatedActivationEnergy.bind(this),
        entropy: this.generateRelatedEntropy.bind(this),
        gibbs_free_energy: this.generateRelatedGibbsEnergy.bind(this),
        spontaneity: this.generateRelatedSpontaneity.bind(this),

        // Atomic Structure Generators
        atomic_structure: this.generateRelatedAtomicStructure.bind(this),
        quantum_numbers: this.generateRelatedQuantumNumbers.bind(this),
        electron_configuration: this.generateRelatedElectronConfiguration.bind(this),
        periodic_trends: this.generateRelatedPeriodicTrends.bind(this),
        bonding: this.generateRelatedBonding.bind(this),
        molecular_geometry: this.generateRelatedMolecularGeometry.bind(this),
        hybridization: this.generateRelatedHybridization.bind(this),

        // NEW: Chemical Bonding & Lewis Structures
        lewis_structures: this.generateRelatedLewisStructures.bind(this),
        vsepr_theory: this.generateRelatedVSEPR.bind(this),
        bond_polarity: this.generateRelatedBondPolarity.bind(this),
        intermolecular_forces: this.generateRelatedIntermolecularForces.bind(this),

        // NEW: States of Matter & Particle Theory
        states_of_matter: this.generateRelatedStatesOfMatter.bind(this),
        phase_changes: this.generateRelatedPhaseChanges.bind(this),
        gas_laws: this.generateRelatedGasLaws.bind(this),
        kinetic_molecular_theory: this.generateRelatedKineticMolecularTheory.bind(this),

        // NEW: Nuclear Chemistry
        radioactive_decay: this.generateRelatedRadioactiveDecay.bind(this),
        nuclear_equations: this.generateRelatedNuclearEquations.bind(this),
        half_life: this.generateRelatedHalfLife.bind(this),
        nuclear_reactions: this.generateRelatedNuclearReactions.bind(this),

        // NEW: Laboratory Chemistry
        lab_safety: this.generateRelatedLabSafety.bind(this),
        lab_apparatus: this.generateRelatedLabApparatus.bind(this),
        lab_techniques: this.generateRelatedLabTechniques.bind(this),
        experimental_design: this.generateRelatedExperimentalDesign.bind(this)
    };

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
        'experimental_design': 'Laboratory Chemistry'
    };
    return categories[type] || 'General Chemistry';
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


// === STOICHIOMETRY PROBLEM GENERATORS ===

generateRelatedMoleCalculations(originalProblem, originalSolution, options) {
    const relatedProblems = [];
    const originalParams = originalProblem.parameters;

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Different Compound Calculation',
        problem: `Calculate the number of moles in ${originalParams.mass || 25} g of carbon dioxide`,
        parameters: { mass: originalParams.mass || 25, compound: 'CO2', findMoles: true },
        type: 'mole_calculations',
        subparts: [
            'Define what a mole is and state Avogadro\'s number',
            'Calculate the molar mass of CO2',
            'Calculate the number of moles using the formula: n = mass/molar mass'
        ],
        helper: 'formula: n = m/M, where n = moles, m = mass (g), M = molar mass (g/mol)',
        realWorldContext: 'Atmospheric CO2 concentration measurements'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Moles to Mass Conversion',
        problem: `What mass of water contains ${(originalSolution.moles || 1).toFixed(2)} moles?`,
        parameters: { moles: originalSolution.moles || 1, compound: 'H2O', findMass: true },
        type: 'mole_calculations',
        subparts: [
            'Calculate the molar mass of H2O',
            'Use the formula m = n × M to find the mass',
            'Express your answer with appropriate significant figures'
        ],
        helper: 'formula: m = n × M',
        realWorldContext: 'Determining reagent quantities for synthesis'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Particle Count Calculation',
        problem: `How many molecules are in ${originalParams.mass * 1.5 || 37.5} g of glucose?`,
        parameters: { mass: originalParams.mass * 1.5 || 37.5, compound: 'C6H12O6', findParticles: true },
        type: 'mole_calculations',
        subparts: [
            'Calculate the molar mass of glucose (C6H12O6)',
            'Convert mass to moles',
            'Convert moles to number of molecules using Avogadro\'s number (6.022 × 10²³)'
        ],
        helper: 'formula: Number of particles = n × NA, where NA = 6.022 × 10²³',
        realWorldContext: 'Nanomaterial and biological system calculations'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Unit Conversion Challenge',
        problem: `Convert ${(originalParams.mass || 25) * 1000} mg to moles and particles`,
        parameters: { mass: (originalParams.mass || 25) / 1000, compound: 'NaCl', findMoles: true, findParticles: true },
        type: 'mole_calculations',
        subparts: [
            'Convert mg to g (1 g = 1000 mg)',
            'Calculate moles from grams',
            'Calculate the number of particles (formula units)'
        ],
        helper: 'conversion: 1 g = 1000 mg; 1 mole = 6.022 × 10²³ particles',
        realWorldContext: 'Medical dosage calculations'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Mole Calculation',
        problem: 'Calculate the number of moles in 18 g of water',
        parameters: { mass: 18, compound: 'H2O', findMoles: true },
        type: 'mole_calculations',
        subparts: [
            'Write the molecular formula of water',
            'Calculate the molar mass of water (H = 1, O = 16)',
            'Calculate the number of moles using n = m/M'
        ],
        helper: 'formula: n = m/M; Molar mass H2O = 18 g/mol',
        realWorldContext: 'Fundamental chemistry concept'
    });

    return relatedProblems;
}

generateRelatedEquationBalancing(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Combustion Reaction',
        problem: 'Balance: C3H8 + O2 → CO2 + H2O',
        parameters: { equation: 'C3H8 + O2 → CO2 + H2O', type: 'combustion' },
        type: 'equation_balancing',
        subparts: [
            'Identify the type of reaction (combustion)',
            'Balance carbon atoms first (3 CO2)',
            'Balance hydrogen atoms (4 H2O)',
            'Balance oxygen atoms last (5 O2)'
        ],
        helper: 'diagram: CxHy + O2 → x CO2 + (y/2) H2O',
        realWorldContext: 'Fuel combustion calculations'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Synthesis',
        problem: 'Balance: H2 + O2 → H2O',
        parameters: { equation: 'H2 + O2 → H2O', type: 'synthesis' },
        type: 'equation_balancing',
        subparts: [
            'Count atoms on each side of the equation',
            'Add coefficient 2 to H2O to balance hydrogen',
            'Add coefficient 2 to H2 to balance the equation',
            'Verify that all atoms are balanced'
        ],
        helper: 'tip: Balance H and O separately; Start with the compound containing most elements',
        realWorldContext: 'Basic chemical reactions'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Decomposition',
        problem: 'Balance: Al2(CO3)3 → Al2O3 + CO2',
        parameters: { equation: 'Al2(CO3)3 → Al2O3 + CO2', type: 'decomposition' },
        type: 'equation_balancing',
        subparts: [
            'Identify polyatomic ions in the reactant (CO3²⁻)',
            'Balance aluminum atoms (already balanced as 2)',
            'Balance carbonate groups (3 CO2)',
            'Verify oxygen balance (9 O on each side)'
        ],
        helper: 'polyatomic ion: CO3²⁻ (carbonate); Al2(CO3)3 → Al2O3 + 3 CO2',
        realWorldContext: 'Thermal decomposition processes'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Acid-Base Neutralization',
        problem: 'Balance: H3PO4 + Ca(OH)2 → Ca3(PO4)2 + H2O',
        parameters: { equation: 'H3PO4 + Ca(OH)2 → Ca3(PO4)2 + H2O', type: 'acid_base' },
        type: 'equation_balancing',
        subparts: [
            'Identify the acid (H3PO4) and base (Ca(OH)2)',
            'Balance phosphate groups first (2 H3PO4)',
            'Balance calcium atoms (3 Ca(OH)2)',
            'Balance hydrogen and oxygen (6 H2O)'
        ],
        helper: 'equation: 2 H3PO4 + 3 Ca(OH)2 → Ca3(PO4)2 + 6 H2O',
        realWorldContext: 'Water treatment processes'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Redox Reaction',
        problem: 'Balance: Fe + HCl → FeCl2 + H2',
        parameters: { equation: 'Fe + HCl → FeCl2 + H2', type: 'redox' },
        type: 'equation_balancing',
        subparts: [
            'Identify oxidation (Fe → Fe²⁺) and reduction (H⁺ → H2)',
            'Balance chlorine atoms (2 HCl)',
            'Balance hydrogen atoms (verify H2 formation)',
            'Check: Fe + 2 HCl → FeCl2 + H2'
        ],
        helper: 'oxidation: Fe → Fe²⁺ + 2e⁻; reduction: 2H⁺ + 2e⁻ → H2',
        realWorldContext: 'Metal-acid reactions'
    });

    return relatedProblems;
}

generateRelatedMassMassStoichiometry(originalProblem, originalSolution, options) {
    const relatedProblems = [];
    const originalParams = originalProblem.parameters;

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Combustion Stoichiometry',
        problem: `If ${originalParams.mass * 0.8 || 20} g of methane burns, how many grams of CO2 are produced?`,
        parameters: { equation: 'CH4 + 2O2 → CO2 + 2H2O', reactant: 'CH4', product: 'CO2', mass: originalParams.mass * 0.8 || 20 },
        type: 'mass_mass_stoichiometry',
        subparts: [
            'Write and balance the combustion equation',
            'Convert mass of CH4 to moles (M = 16 g/mol)',
            'Use mole ratio CH4:CO2 = 1:1 to find moles of CO2',
            'Convert moles of CO2 to grams (M = 44 g/mol)'
        ],
        helper: 'equation: CH4 + 2O2 → CO2 + 2H2O; Molar masses: CH4 = 16, CO2 = 44 g/mol',
        realWorldContext: 'Emissions calculations'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Water Synthesis',
        problem: 'How many grams of water from 4 g of hydrogen gas?',
        parameters: { equation: '2H2 + O2 → 2H2O', reactant: 'H2', product: 'H2O', mass: 4 },
        type: 'mass_mass_stoichiometry',
        subparts: [
            'Write and balance the equation: 2H2 + O2 → 2H2O',
            'Convert 4 g H2 to moles (M = 2 g/mol)',
            'Find moles of H2O using the 2:2 or 1:1 ratio',
            'Convert moles H2O to grams (M = 18 g/mol)'
        ],
        helper: 'equation: 2H2 + O2 → 2H2O; Molar masses: H2 = 2, H2O = 18 g/mol',
        realWorldContext: 'Fuel cell reactions'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Industrial Ammonia Production',
        problem: `Haber process: How many grams of NH3 from ${originalParams.mass * 1.2 || 30} g of N2?`,
        parameters: { equation: 'N2 + 3H2 → 2NH3', reactant: 'N2', product: 'NH3', mass: originalParams.mass * 1.2 || 30 },
        type: 'mass_mass_stoichiometry',
        subparts: [
            'State the Haber process equation: N2 + 3H2 → 2NH3',
            'Calculate moles of N2 (M = 28 g/mol)',
            'Apply mole ratio N2:NH3 = 1:2',
            'Calculate mass of NH3 produced (M = 17 g/mol)'
        ],
        helper: 'equation: N2 + 3H2 → 2NH3; Molar masses: N2 = 28, NH3 = 17 g/mol',
        realWorldContext: 'Fertilizer production'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Precipitation Formation',
        problem: `How many grams of AgCl precipitate from ${originalParams.mass * 0.6 || 15} g of AgNO3?`,
        parameters: { equation: 'AgNO3 + NaCl → AgCl + NaNO3', reactant: 'AgNO3', product: 'AgCl', mass: originalParams.mass * 0.6 || 15 },
        type: 'mass_mass_stoichiometry',
        subparts: [
            'Write the balanced equation',
            'Convert mass of AgNO3 to moles (M = 170 g/mol)',
            'Use 1:1 mole ratio to find moles of AgCl',
            'Convert to mass of AgCl (M = 143.5 g/mol)'
        ],
        helper: 'equation: AgNO3 + NaCl → AgCl↓ + NaNO3; Molar masses: AgNO3 = 170, AgCl = 143.5 g/mol',
        realWorldContext: 'Analytical chemistry'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Limestone Decomposition',
        problem: `When ${originalParams.mass * 2 || 50} g of CaCO3 decomposes, calculate product masses`,
        parameters: { equation: 'CaCO3 → CaO + CO2', reactant: 'CaCO3', products: ['CaO', 'CO2'], mass: originalParams.mass * 2 || 50 },
        type: 'mass_mass_stoichiometry',
        subparts: [
            'Write the decomposition equation: CaCO3 → CaO + CO2',
            'Calculate moles of CaCO3 (M = 100 g/mol)',
            'Find moles of each product using 1:1:1 ratio',
            'Calculate mass of both CaO (M = 56) and CO2 (M = 44 g/mol)'
        ],
        helper: 'equation: CaCO3(s) → CaO(s) + CO2(g); Molar masses: CaCO3 = 100, CaO = 56, CO2 = 44 g/mol',
        realWorldContext: 'Cement production'
    });

    return relatedProblems;
}

generateRelatedLimitingReagent(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Combustion with Limiting Reagent',
        problem: 'Limiting reagent when 16 g CH4 reacts with 48 g O2',
        parameters: { equation: 'CH4 + 2O2 → CO2 + 2H2O', reactants: { 'CH4': 16, 'O2': 48 } },
        type: 'limiting_reagent',
        subparts: [
            'Define limiting reagent',
            'Convert both reactant masses to moles (CH4: 16 g/mol, O2: 32 g/mol)',
            'Compare mole ratios with the balanced equation (1:2)',
            'Identify which reactant is limiting and calculate product mass'
        ],
        helper: 'equation: CH4 + 2O2 → CO2 + 2H2O; Required ratio = 1 mol CH4 : 2 mol O2',
        realWorldContext: 'Engine fuel-air optimization'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Water Formation',
        problem: 'Limiting reagent when 4 g H2 reacts with 32 g O2',
        parameters: { equation: '2H2 + O2 → 2H2O', reactants: { 'H2': 4, 'O2': 32 } },
        type: 'limiting_reagent',
        subparts: [
            'Calculate moles of H2 (M = 2 g/mol) and O2 (M = 32 g/mol)',
            'Determine the required mole ratio (2:1)',
            'Identify the limiting reagent',
            'Calculate theoretical yield of water'
        ],
        helper: 'equation: 2H2 + O2 → 2H2O; Required ratio = 2 mol H2 : 1 mol O2',
        realWorldContext: 'Fuel cell systems'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Industrial Reaction',
        problem: 'Limiting reagent: 100 g Fe2O3, 60 g Al',
        parameters: { equation: 'Fe2O3 + 2Al → 2Fe + Al2O3', reactants: { 'Fe2O3': 100, 'Al': 60 } },
        type: 'limiting_reagent',
        subparts: [
            'Define the thermite reaction and its use',
            'Convert both reactant masses to moles (Fe2O3: 160, Al: 27 g/mol)',
            'Apply mole ratio Fe2O3:Al = 1:2',
            'Identify limiting reagent and calculate mass of Fe produced'
        ],
        helper: 'equation: Fe2O3 + 2Al → 2Fe + Al2O3 (thermite); Molar masses: Fe2O3 = 160, Al = 27, Fe = 56 g/mol',
        realWorldContext: 'Thermite welding'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Neutralization Limiting Reagent',
        problem: 'Limiting reagent: 73 g HCl or 80 g NaOH',
        parameters: { equation: 'HCl + NaOH → NaCl + H2O', reactants: { 'HCl': 73, 'NaOH': 80 } },
        type: 'limiting_reagent',
        subparts: [
            'Calculate moles of HCl (M = 36.5 g/mol) and NaOH (M = 40 g/mol)',
            'Note the 1:1 mole ratio in neutralization',
            'Determine which is limiting',
            'Calculate mass of NaCl formed'
        ],
        helper: 'equation: HCl + NaOH → NaCl + H2O (1:1 ratio); Molar masses: HCl = 36.5, NaOH = 40 g/mol',
        realWorldContext: 'Waste neutralization'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Precipitation with Excess',
        problem: 'Limiting reagent and excess: 170 g AgNO3 + 117 g NaCl',
        parameters: { equation: 'AgNO3 + NaCl → AgCl + NaNO3', reactants: { 'AgNO3': 170, 'NaCl': 117 }, calculateExcess: true },
        type: 'limiting_reagent',
        subparts: [
            'Calculate moles of both reactants (AgNO3: 170, NaCl: 58.5 g/mol)',
            'Identify the limiting reagent using 1:1 ratio',
            'Calculate amount of excess reagent remaining',
            'Calculate mass of AgCl precipitate formed'
        ],
        helper: 'equation: AgNO3 + NaCl → AgCl↓ + NaNO3; Molar masses: AgNO3 = 170, NaCl = 58.5, AgCl = 143.5 g/mol',
        realWorldContext: 'Silver recovery'
    });

    return relatedProblems;
}

generateRelatedPercentYield(originalProblem, originalSolution, options) {
    const relatedProblems = [];
    const originalParams = originalProblem.parameters;

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Calculate Actual Yield',
        problem: `Theoretical yield ${originalParams.theoretical * 1.2 || 30} g, percent yield 78%, actual yield?`,
        parameters: { theoretical: originalParams.theoretical * 1.2 || 30, percentYield: 78, findActual: true },
        type: 'percent_yield',
        subparts: [
            'Define theoretical yield and actual yield',
            'Write the percent yield formula',
            'Calculate actual yield: actual = (% yield × theoretical)/100',
            'State your answer with appropriate units'
        ],
        helper: 'formula: % yield = (actual yield/theoretical yield) × 100%',
        realWorldContext: 'Pharmaceutical production'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Calculate Theoretical Yield',
        problem: `Actual yield ${originalParams.actual || 20} g, percent yield 85%, theoretical?`,
        parameters: { actual: originalParams.actual || 20, percentYield: 85, findTheoretical: true },
        type: 'percent_yield',
        subparts: [
            'Identify given values: actual yield and percent yield',
            'Rearrange formula to solve for theoretical yield',
            'Calculate: theoretical = (actual × 100)/% yield',
            'Interpret the result'
        ],
        helper: 'formula: theoretical yield = (actual yield × 100)/% yield',
        realWorldContext: 'Reaction efficiency analysis'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Low Yield Analysis',
        problem: 'Percent yield: theoretical = 50 g, actual = 35 g',
        parameters: { theoretical: 50, actual: 35 },
        type: 'percent_yield',
        subparts: [
            'Identify theoretical and actual yields',
            'Apply percent yield formula: (35/50) × 100%',
            'Calculate the percent yield',
            'List two reasons why yield might be less than 100%'
        ],
        helper: 'formula: % yield = (actual/theoretical) × 100%',
        realWorldContext: 'Organic synthesis'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multi-step Synthesis',
        problem: 'Overall yield: Step 1 (92%) → Step 2 (78%) → Step 3 (88%)',
        parameters: { multiStep: true, stepYields: [92, 78, 88] },
        type: 'percent_yield',
        subparts: [
            'Explain how yields combine in multi-step synthesis',
            'Convert percentages to decimals (0.92, 0.78, 0.88)',
            'Calculate overall yield: 0.92 × 0.78 × 0.88',
            'Convert back to percentage and discuss implications'
        ],
        helper: 'formula: overall yield = (yield₁ × yield₂ × yield₃ × ...)',
        realWorldContext: 'Complex pharmaceutical synthesis'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Optimization',
        problem: 'Compare Methods: A (82%), B (76%), C (91%)',
        parameters: { yields: { 'Method A': 82, 'Method B': 76, 'Method C': 91 }, comparison: true },
        type: 'percent_yield',
        subparts: [
            'Rank the methods by percent yield from highest to lowest',
            'Calculate the difference between best and worst methods',
            'Discuss three factors that might affect yield in different methods',
            'Recommend which method to use industrially'
        ],
        helper: false,
        realWorldContext: 'Industrial process optimization'
    });

    return relatedProblems;
}

generateRelatedGasStoichiometry(originalProblem, originalSolution, options) {
    const relatedProblems = [];
    const originalParams = originalProblem.parameters;

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Non-STP Gas',
        problem: `Gas volume in ${originalParams.volume * 0.8 || 20} L at 350 K and 1.5 atm`,
        parameters: { volume: originalParams.volume * 0.8 || 20, temperature: 350, pressure: 1.5, findMoles: true },
        type: 'gas_stoichiometry',
        subparts: [
            'State the ideal gas law equation',
            'Identify given values: P, V, T and R constant',
            'Rearrange to solve for n: n = PV/RT',
            'Calculate moles using R = 0.0821 L·atm/(mol·K)'
        ],
        helper: 'formula: PV = nRT where R = 0.0821 L·atm/(mol·K)',
        realWorldContext: 'Industrial reactor calculations'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'STP Gas Volume',
        problem: 'Volume of 2 moles of gas at STP',
        parameters: { moles: 2, temperature: 273.15, pressure: 1.0, findVolume: true },
        type: 'gas_stoichiometry',
        subparts: [
            'Define STP conditions (273.15 K or 0°C, 1 atm)',
            'State molar volume at STP (22.4 L/mol)',
            'Calculate volume: V = n × 22.4 L/mol',
            'State your answer'
        ],
        helper: 'At STP: 1 mole of any ideal gas = 22.4 L',
        realWorldContext: 'Standard laboratory conditions'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combustion Gas Stoichiometry',
        problem: `${originalParams.volume || 25} L of methane burns at STP, CO2 volume produced?`,
        parameters: { equation: 'CH4 + 2O2 → CO2 + 2H2O', volume: originalParams.volume || 25, findTargetVolume: true },
        type: 'gas_stoichiometry',
        subparts: [
            'Write and balance the combustion equation',
            'Apply Gay-Lussac\'s Law: volume ratios = mole ratios for gases',
            'Note the volume ratio CH4:CO2 = 1:1',
            'Calculate CO2 volume produced at STP'
        ],
        helper: 'Gay-Lussac\'s Law: Volume ratios = mole ratios for gases at same T and P',
        realWorldContext: 'Emission volume calculations'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Temperature Change',
        problem: 'Gas at 25°C heated to 100°C, pressure constant. New volume?',
        parameters: { initialTemp: 298.15, finalTemp: 373.15, pressure: 1.0, findFinalVolume: true },
        type: 'gas_stoichiometry',
        subparts: [
            'State Charles\' Law: V₁/T₁ = V₂/T₂',
            'Convert all temperatures to Kelvin',
            'Rearrange to solve for V₂: V₂ = V₁ × (T₂/T₁)',
            'Calculate the new volume'
        ],
        helper: 'Charles\' Law: V₁/T₁ = V₂/T₂ (at constant P and n)',
        realWorldContext: 'Thermal expansion'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Real Gas Behavior',
        problem: `CO2 at 50 atm, 300 K. Compare ideal vs real gas behavior`,
        parameters: { pressure: 50, temperature: 300, compound: 'CO2', compareIdealReal: true },
        type: 'gas_stoichiometry',
        subparts: [
            'State conditions where ideal gas law fails (high P, low T)',
            'Explain intermolecular forces become significant in real gases',
            'Discuss molecular volume becomes significant at high pressure',
            'Introduce van der Waals equation corrections'
        ],
        helper: 'van der Waals equation: (P + a/V²)(V - b) = RT; a corrects for attractions, b for volume',
        realWorldContext: 'High-pressure industrial calculations'
    });

    return relatedProblems;
}

generateRelatedSolutionStoichiometry(originalProblem, originalSolution, options) {
    const relatedProblems = [];
    const originalParams = originalProblem.parameters;

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Molarity Calculation',
        problem: `Molarity when ${(originalParams.moles || 0.5) * 1.5} mol in ${originalParams.volume * 0.8 || 400} mL`,
        parameters: { moles: (originalParams.moles || 0.5) * 1.5, volume: (originalParams.volume * 0.8 || 400) / 1000, findMolarity: true },
        type: 'solution_stoichiometry',
        subparts: [
            'Define molarity (M = moles/liters)',
            'Convert volume from mL to L',
            'Calculate molarity using M = n/V',
            'Express answer with proper units (M or mol/L)'
        ],
        helper: 'formula: M = n/V where M = molarity (mol/L), n = moles, V = volume (L)',
        realWorldContext: 'Standard solution preparation'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Dilution',
        problem: 'Dilute 100 mL of 2.0 M HCl to 500 mL. Final concentration?',
        parameters: { dilution: { M1: 2.0, V1: 0.1, V2: 0.5 } },
        type: 'solution_stoichiometry',
        subparts: [
            'State the dilution formula: M₁V₁ = M₂V₂',
            'Identify given values: M₁, V₁, V₂',
            'Solve for M₂: M₂ = (M₁V₁)/V₂',
            'Calculate the final molarity'
        ],
        helper: 'formula: M₁V₁ = M₂V₂ (dilution equation)',
        realWorldContext: 'Safe acid dilution'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Titration',
        problem: `${originalParams.volume * 2 || 50} mL HCl requires 32.5 mL of 0.15 M NaOH. [HCl]?`,
        parameters: { unknownVolume: (originalParams.volume * 2 || 50) / 1000, titrantVolume: 0.0325, titrantMolarity: 0.15, findUnknownMolarity: true },
        type: 'solution_stoichiometry',
        subparts: [
            'Write the neutralization equation: HCl + NaOH → NaCl + H2O',
            'Calculate moles of NaOH: n = M × V',
            'Use 1:1 mole ratio to find moles of HCl',
            'Calculate molarity of HCl: M = n/V'
        ],
        helper: 'formula: M₁V₁ = M₂V₂ for 1:1 reactions; n = M × V',
        realWorldContext: 'Pharmaceutical quality control'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Solution Preparation',
        problem: `Grams of NaCl needed for ${originalParams.volume * 4 || 1000} mL of 0.25 M solution`,
        parameters: { molarity: 0.25, volume: (originalParams.volume * 4 || 1000) / 1000, compound: 'NaCl', findMass: true },
        type: 'solution_stoichiometry',
        subparts: [
            'Calculate moles needed: n = M × V',
            'Find molar mass of NaCl (23 + 35.5 = 58.5 g/mol)',
            'Calculate mass: m = n × M',
            'State the preparation procedure'
        ],
        helper: 'formula: n = M × V, then m = n × molar mass; NaCl molar mass = 58.5 g/mol',
        realWorldContext: 'Saline solution preparation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Unit Conversion',
        problem: 'Convert 15% by mass H2SO4 (density 1.10 g/mL) to molarity',
        parameters: { massPercent: 15, density: 1.10, compound: 'H2SO4', convertToMolarity: true },
        type: 'solution_stoichiometry',
        subparts: [
            'Calculate mass of H2SO4 in 100 g solution (15 g)',
            'Find molar mass of H2SO4 (98 g/mol) and calculate moles',
            'Calculate volume of 100 g solution using density',
            'Calculate molarity: M = moles/L'
        ],
        helper: 'formula: M = (% × density × 10)/(molar mass); H2SO4 molar mass = 98 g/mol',
        realWorldContext: 'Industrial concentration conversions'
    });

    return relatedProblems;
}

generateRelatedThermochemical(originalProblem, originalSolution, options) {
    const relatedProblems = [];
    const originalParams = originalProblem.parameters;

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Combustion Enthalpy',
        problem: `Heat released when ${originalParams.amount * 1.5 || 3.75} mol CH4 burns (ΔH = -890 kJ/mol)`,
        parameters: { moles: originalParams.amount * 1.5 || 3.75, compound: 'CH4', enthalpy: -890, findHeatReleased: true },
        type: 'thermochemical_stoichiometry',
        subparts: [
            'Write the thermochemical equation: CH4 + 2O2 → CO2 + 2H2O, ΔH = -890 kJ',
            'Identify that ΔH is per mole of CH4',
            'Calculate heat: q = n × ΔH',
            'Note that negative value means heat is released (exothermic)'
        ],
        helper: 'formula: q = n × ΔH; negative ΔH means exothermic (heat released)',
        realWorldContext: 'Natural gas energy output'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Exothermic Reaction',
        problem: 'Heat released when 2 mol H2 burns in O2 (ΔH = -286 kJ/mol)',
        parameters: { moles: 2, equation: '2H2 + O2 → 2H2O', enthalpy: -286, findHeatReleased: true },
        type: 'thermochemical_stoichiometry',
        subparts: [
            'Define exothermic reaction',
            'Write equation: H2 + ½O2 → H2O, ΔH = -286 kJ/mol',
            'Calculate heat for 2 moles: q = 2 × (-286 kJ)',
            'State total heat released'
        ],
        helper: 'formula: q = n × ΔH; Exothermic: ΔH < 0, heat released',
        realWorldContext: 'Fuel cell calculations'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Endothermic Decomposition',
        problem: `Heat required for ${originalParams.amount * 2 || 5} mol CaCO3 (ΔH = +178 kJ/mol)`,
        parameters: { moles: originalParams.amount * 2 || 5, compound: 'CaCO3', enthalpy: 178, findHeatRequired: true, isEndothermic: true },
        type: 'thermochemical_stoichiometry',
        subparts: [
            'Define endothermic reaction',
            'Write equation: CaCO3 → CaO + CO2, ΔH = +178 kJ/mol',
            'Calculate heat required: q = n × ΔH',
            'Explain why heat must be supplied (positive ΔH)'
        ],
        helper: 'formula: q = n × ΔH; Endothermic: ΔH > 0, heat absorbed',
        realWorldContext: 'Cement kiln calculations'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Hess\'s Law',
        problem: 'Overall enthalpy for multi-step reaction',
        parameters: { steps: [{ equation: 'A + B → C', deltaH: -150 }, { equation: 'C + D → E', deltaH: -200 }], findOverallEnthalpy: true },
        type: 'thermochemical_stoichiometry',
        subparts: [
            'State Hess\'s Law: ΔH is independent of pathway',
            'Add the two equations to get overall equation',
            'Add the enthalpy changes: ΔH_total = ΔH₁ + ΔH₂',
            'Calculate: ΔH_total = -150 + (-200) = -350 kJ'
        ],
        helper: 'Hess\'s Law: ΔH_reaction = Σ ΔH_steps; Add enthalpies for sequential steps',
        realWorldContext: 'Reaction enthalpy prediction'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Calorimetry',
        problem: '25 g substance heated water 5°C in 100 g. Find reaction enthalpy.',
        parameters: { mass: 25, temperatureChange: 5, waterMass: 100, specificHeatWater: 4.18, findReactionEnthalpy: true },
        type: 'thermochemical_stoichiometry',
        subparts: [
            'Calculate heat absorbed by water: q = mcΔT',
            'Use: q = 100 g × 4.18 J/(g·°C) × 5°C',
            'This heat equals heat released by reaction',
            'Calculate enthalpy per gram or per mole of substance'
        ],
        helper: 'formula: q = mcΔT where c(water) = 4.18 J/(g·°C); Heat lost = heat gained',
        realWorldContext: 'Experimental enthalpy determination'
    });

    return relatedProblems;
}

generateRelatedEmpiricalFormula(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Percent Composition',
        problem: 'Empirical formula: 40% C, 6.7% H, 53.3% O',
        parameters: { composition: { 'C': 40, 'H': 6.7, 'O': 53.3 }, findEmpirical: true },
        type: 'empirical_formula',
        subparts: [
            'Convert percentages to grams (assume 100 g sample)',
            'Convert grams to moles using atomic masses (C=12, H=1, O=16)',
            'Divide all by smallest number of moles to get ratio',
            'Write empirical formula (multiply if needed to get whole numbers)'
        ],
        helper: 'Steps: % → g → mol → simplest ratio → empirical formula',
        realWorldContext: 'Unknown organic compound identification'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Two-Element Formula',
        problem: 'Empirical formula: 25% H, 75% C by mass',
        parameters: { composition: { 'H': 25, 'C': 75 }, findEmpirical: true },
        type: 'empirical_formula',
        subparts: [
            'Assume 100 g total: 25 g H, 75 g C',
            'Calculate moles: H = 25/1 = 25 mol, C = 75/12 = 6.25 mol',
            'Find ratio: H:C = 25:6.25 = 4:1',
            'Write empirical formula: CH4'
        ],
        helper: 'formula: moles = mass/atomic mass; then find simplest ratio',
        realWorldContext: 'Basic compound analysis'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combustion Analysis',
        problem: '4.8 g hydrocarbon → 14.4 g CO2 + 7.2 g H2O. Empirical formula?',
        parameters: { mass: 4.8, products: { 'CO2': 14.4, 'H2O': 7.2 }, findEmpirical: true, method: 'combustion' },
        type: 'empirical_formula',
        subparts: [
            'Calculate moles of C from CO2: mol C = mol CO2 = 14.4/44',
            'Calculate moles of H from H2O: mol H = 2 × mol H2O = 2 × (7.2/18)',
            'Find mass of C and H, subtract from total to find O mass',
            'Convert to mole ratio and determine empirical formula'
        ],
        helper: 'All C → CO2, all H → H2O; mol C = mol CO2, mol H = 2 × mol H2O',
        realWorldContext: 'Organic compound determination'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Molecular Formula',
        problem: 'Empirical CH2O, molar mass 180 g/mol. Molecular formula?',
        parameters: { empirical: 'CH2O', molarMass: 180, findMolecular: true },
        type: 'empirical_formula',
        subparts: [
            'Calculate empirical formula mass: CH2O = 12 + 2 + 16 = 30 g/mol',
            'Divide molecular mass by empirical mass: 180/30 = 6',
            'Multiply empirical formula by 6',
            'Molecular formula = C6H12O6'
        ],
        helper: 'formula: n = (molecular mass)/(empirical mass); Molecular formula = (empirical)n',
        realWorldContext: 'Converting empirical to molecular'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Nitrogen Compound',
        problem: '1.5 g compound → 1.6 g NO2. Molar mass 92 g/mol. Formula?',
        parameters: { mass: 1.5, products: { 'NO2': 1.6 }, molarMass: 92, hasNitrogen: true, findMolecular: true },
        type: 'empirical_formula',
        subparts: [
            'Calculate moles of N from NO2 produced',
            'Determine empirical formula from combustion data',
            'Calculate empirical formula mass',
            'Use molar mass to find molecular formula'
        ],
        helper: 'All N → NO2; mol N = mol NO2; Use molar mass to find molecular formula',
        realWorldContext: 'Nitrogen-containing compound analysis'
    });

    return relatedProblems;
}

// === ORGANIC CHEMISTRY PROBLEM GENERATORS ===

generateRelatedAlkanes(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alkane Naming',
        problem: 'Name the alkane with 5 carbon atoms in a straight chain',
        parameters: { carbons: 5, straightChain: true, findName: true },
        type: 'alkanes',
        subparts: [
            'State the general formula for alkanes: CnH2n+2',
            'Identify the prefix for 5 carbons (pent-)',
            'Add the suffix -ane for alkane',
            'Name: pentane, formula: C5H12'
        ],
        helper: 'Alkane prefixes: meth(1), eth(2), prop(3), but(4), pent(5), hex(6), hept(7), oct(8)',
        realWorldContext: 'Hydrocarbon identification in petroleum'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Alkane',
        problem: 'What is the molecular formula for methane?',
        parameters: { name: 'methane', findFormula: true },
        type: 'alkanes',
        subparts: [
            'Identify methane as the simplest alkane (1 carbon)',
            'Apply formula CnH2n+2 where n = 1',
            'Calculate: CH(2×1+2) = CH4',
            'State that CH4 is the main component of natural gas'
        ],
        helper: 'formula: CnH2n+2; For methane: n = 1, so CH4',
        realWorldContext: 'Natural gas composition'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Branched Alkane',
        problem: 'Structure and name of 2-methylbutane',
        parameters: { structure: '2-methylbutane', drawStructure: true },
        type: 'alkanes',
        subparts: [
            'Identify the parent chain (butane = 4 carbons)',
            'Locate the methyl branch on carbon 2',
            'Draw the structural formula',
            'Explain that this is an isomer of pentane (C5H12)'
        ],
        helper: 'diagram: CH3-CH(CH3)-CH2-CH3 (methyl group on carbon 2)',
        realWorldContext: 'Isomer identification'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Combustion of Alkanes',
        problem: 'Balance: C6H14 + O2 → CO2 + H2O',
        parameters: { formula: 'C6H14', combustion: true, findBalance: true },
        type: 'alkanes',
        subparts: [
            'Write the general combustion equation: CnH2n+2 + O2 → CO2 + H2O',
            'Balance C atoms: 6 CO2',
            'Balance H atoms: 7 H2O',
            'Balance O atoms: 9.5 O2 or multiply all by 2'
        ],
        helper: 'Balanced: 2 C6H14 + 19 O2 → 12 CO2 + 14 H2O',
        realWorldContext: 'Fuel combustion analysis'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Alkane Boiling Points',
        problem: 'Compare boiling points: pentane vs heptane',
        parameters: { compounds: ['C5H12', 'C7H16'], compareTrend: true },
        type: 'alkanes',
        subparts: [
            'State that boiling point increases with molecular size',
            'Explain: larger molecules have more electrons',
            'More electrons lead to stronger London dispersion forces',
            'Conclude: heptane has higher boiling point than pentane'
        ],
        helper: 'Trend: BP increases with chain length due to stronger London forces',
        realWorldContext: 'Intermolecular force effects'
    });

    return relatedProblems;
}

generateRelatedAlkenes(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alkene Nomenclature',
        problem: 'Name the alkene with double bond between C2 and C3 (4 carbons)',
        parameters: { carbons: 4, doubleBondPosition: '2-3', findName: true },
        type: 'alkenes',
        subparts: [
            'Identify the parent chain (4 carbons = but-)',
            'Note the double bond position (between C2 and C3)',
            'Number from the end giving lowest number to double bond',
            'Name: 2-butene or but-2-ene'
        ],
        helper: 'Alkene formula: CnH2n; Number chain to give double bond lowest number',
        realWorldContext: 'Unsaturated hydrocarbon naming'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Alkene',
        problem: 'Formula for ethene (ethylene)',
        parameters: { name: 'ethene', findFormula: true },
        type: 'alkenes',
        subparts: [
            'Identify ethene as the simplest alkene (2 carbons)',
            'Apply alkene formula: CnH2n where n = 2',
            'Calculate: C2H(2×2) = C2H4',
            'Draw structure: H2C=CH2'
        ],
        helper: 'Alkene formula: CnH2n; Ethene: C2H4',
        realWorldContext: 'Polymer precursor'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Cis-Trans Isomerism',
        problem: 'Draw cis and trans isomers of 2-butene',
        parameters: { compound: '2-butene', drawIsomers: true },
        type: 'alkenes',
        subparts: [
            'Explain that cis/trans isomers arise from restricted rotation around C=C',
            'Draw cis-2-butene: both CH3 groups on same side',
            'Draw trans-2-butene: CH3 groups on opposite sides',
            'Note that these are stereoisomers with different properties'
        ],
        helper: 'diagram: cis = groups on same side; trans = groups on opposite sides of C=C',
        realWorldContext: 'Stereochemistry importance'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Addition Reaction',
        problem: 'Product of H2 addition to ethene (hydrogenation)',
        parameters: { compound: 'C2H4', addCompound: 'H2', findProduct: true },
        type: 'alkenes',
        subparts: [
            'Write the reactants: C2H4 + H2',
            'Recognize this as an addition reaction',
            'Hydrogen adds across the double bond',
            'Product: C2H6 (ethane)'
        ],
        helper: 'equation: C2H4 + H2 → C2H6 (Ni catalyst, heat)',
        realWorldContext: 'Industrial hydrogenation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Markovnikov\'s Rule',
        problem: 'HBr addition to propene. Apply Markovnikov\'s Rule.',
        parameters: { compound: 'C3H6', addCompound: 'HBr', markovnikov: true, findProduct: true },
        type: 'alkenes',
        subparts: [
            'State Markovnikov\'s Rule: H adds to carbon with more H atoms',
            'Identify the structure: CH3-CH=CH2',
            'H adds to terminal carbon (CH2), Br to middle carbon (CH)',
            'Major product: CH3-CHBr-CH3 (2-bromopropane)'
        ],
        helper: 'Markovnikov: "Rich get richer" - H adds to C with more H already',
        realWorldContext: 'Organic reaction mechanisms'
    });

    return relatedProblems;
}

generateRelatedAlkynes(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alkyne Naming',
        problem: 'Name alkyne with triple bond between C1 and C2 (3 carbons)',
        parameters: { carbons: 3, tripleBondPosition: '1-2', findName: true },
        type: 'alkynes',
        subparts: [
            'Identify the parent chain (3 carbons = prop-)',
            'Note the triple bond position (starts at C1)',
            'Add suffix -yne for alkyne',
            'Name: propyne or prop-1-yne'
        ],
        helper: 'Alkyne formula: CnH2n-2; Suffix: -yne',
        realWorldContext: 'Unsaturated hydrocarbon classification'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Alkyne',
        problem: 'Formula for acetylene (ethyne)',
        parameters: { name: 'ethyne', findFormula: true },
        type: 'alkynes',
        subparts: [
            'Identify ethyne as the simplest alkyne (2 carbons)',
            'Apply alkyne formula: CnH2n-2 where n = 2',
            'Calculate: C2H(2×2-2) = C2H2',
            'Structure: HC≡CH'
        ],
        helper: 'Alkyne formula: CnH2n-2; Ethyne (acetylene): C2H2',
        realWorldContext: 'Welding gas applications'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Alkyne Reactivity',
        problem: 'Products of 2 mol H2 addition to propyne',
        parameters: { compound: 'C3H4', addCompound: 'H2', quantity: 2, findProduct: true },
        type: 'alkynes',
        subparts: [
            'First H2 addition: alkyne → alkene (C3H6)',
            'Second H2 addition: alkene → alkane (C3H8)',
            'Overall: C3H4 + 2H2 → C3H8',
            'Product: propane (fully saturated)'
        ],
        helper: 'diagram: C3H4 + H2 → C3H6 + H2 → C3H8 (two-step hydrogenation)',
        realWorldContext: 'Multiple hydrogenation steps'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alkyne vs Alkene',
        problem: 'Compare reactivity: alkyne vs alkene with H2',
        parameters: { compounds: ['alkyne', 'alkene'], property: 'reactivity' },
        type: 'alkynes',
        subparts: [
            'State that alkynes are more unsaturated than alkenes',
            'Alkynes can accept 2 moles of H2, alkenes only 1 mole',
            'Both undergo addition reactions',
            'Alkynes are generally more reactive due to triple bond'
        ],
        helper: 'Unsaturation: alkyne (2 π bonds) > alkene (1 π bond) > alkane (0 π bonds)',
        realWorldContext: 'Unsaturation effects'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Terminal Alkyne',
        problem: 'Terminal alkyne (C≡C-H) reacts with NaOH. Product?',
        parameters: { compound: 'C2H2', reagent: 'NaOH', findProduct: true, isTerminal: true },
        type: 'alkynes',
        subparts: [
            'Explain that terminal alkynes are weakly acidic',
            'The H on C≡C-H can be removed by strong base',
            'Reaction: HC≡CH + NaOH → HC≡C⁻Na⁺ + H2O',
            'Product: sodium acetylide (alkynide ion)'
        ],
        helper: 'Terminal alkynes are acidic (pKa ≈ 25); Strong bases deprotonate C≡C-H',
        realWorldContext: 'Alkyne acidity'
    });

    return relatedProblems;
}

generateRelatedAromatic(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Aromatic Substitution',
        problem: 'Product of Br2 addition to benzene with FeBr3 catalyst',
        parameters: { compound: 'C6H6', reagent: 'Br2', catalyst: 'FeBr3', reaction: 'substitution', findProduct: true },
        type: 'aromatic_compounds',
        subparts: [
            'Identify this as electrophilic aromatic substitution',
            'FeBr3 catalyst generates Br⁺ electrophile',
            'Br⁺ substitutes one H on benzene ring',
            'Product: bromobenzene (C6H5Br) + HBr'
        ],
        helper: 'equation: C6H6 + Br2 → C6H5Br + HBr (FeBr3 catalyst); Substitution, not addition',
        realWorldContext: 'Electrophilic aromatic substitution'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Benzene Structure',
        problem: 'Draw benzene resonance structures',
        parameters: { compound: 'benzene', drawResonance: true },
        type: 'aromatic_compounds',
        subparts: [
            'Draw hexagonal ring with alternating double bonds',
            'Draw second structure with double bonds in opposite positions',
            'Explain that actual structure is resonance hybrid',
            'All C-C bonds are equivalent (1.5 bond order)'
        ],
        helper: 'diagram: Two resonance structures; Reality: delocalized π electrons in ring',
        realWorldContext: 'Aromatic stability'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Directing Effects',
        problem: 'Predict product positions for chlorobenzene + HNO3/H2SO4',
        parameters: { compound: 'chlorobenzene', reagent: 'HNO3/H2SO4', directingGroup: 'Cl', findPositions: true },
        type: 'aromatic_compounds',
        subparts: [
            'Identify Cl as ortho/para director (electron-donating by resonance)',
            'Cl is also deactivating (electron-withdrawing by induction)',
            'Nitration will occur at ortho and para positions',
            'Products: 2-chloronitrobenzene and 4-chloronitrobenzene (major)'
        ],
        helper: 'Cl = ortho/para director (deactivating); NO2 adds at positions 2 and 4',
        realWorldContext: 'Substitution directing effects'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Aromatic Nomenclature',
        problem: 'Name: 1,3,5-trihydroxybenzene',
        parameters: { positions: [1, 3, 5], substituent: 'OH', findName: true },
        type: 'aromatic_compounds',
        subparts: [
            'Identify three OH groups on benzene ring',
            'Positions: 1, 3, and 5 (symmetric)',
            'IUPAC name: 1,3,5-trihydroxybenzene',
            'Common name: phloroglucinol'
        ],
        helper: 'diagram: Benzene ring with OH at positions 1, 3, and 5',
        realWorldContext: 'Complex aromatic compounds'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polycyclic Aromatics',
        problem: 'Structure and properties of naphthalene',
        parameters: { compound: 'naphthalene', drawStructure: true, analyzeProperties: true },
        type: 'aromatic_compounds',
        subparts: [
            'Draw structure: two fused benzene rings',
            'Formula: C10H8',
            'Describe aromatic stabilization across both rings',
            'Note: used in mothballs, undergoes electrophilic substitution'
        ],
        helper: 'diagram: Two fused benzene rings sharing one edge; Still aromatic',
        realWorldContext: 'Polycyclic aromatic hydrocarbons'
    });

    return relatedProblems;
}

generateRelatedFunctionalGroups(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alcohol Oxidation',
        problem: 'Oxidize ethanol with KMnO4. Product?',
        parameters: { compound: 'ethanol', reagent: 'KMnO4', findProduct: true },
        type: 'functional_groups',
        subparts: [
            'Identify ethanol as primary alcohol: CH3CH2OH',
            'Primary alcohols oxidize to aldehydes, then to carboxylic acids',
            'With strong oxidant like KMnO4, goes directly to acid',
            'Product: ethanoic acid (acetic acid), CH3COOH'
        ],
        helper: '1° alcohol → aldehyde → carboxylic acid; 2° alcohol → ketone',
        realWorldContext: 'Alcohol oxidation in synthesis'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Functional Group Identification',
        problem: 'Identify functional groups in CH3-CH2-OH (ethanol)',
        parameters: { compound: 'ethanol', identify: true },
        type: 'functional_groups',
        subparts: [
            'Identify the -OH group bonded to carbon',
            'This is the hydroxyl group',
            'Compound class: alcohol',
            'Specifically: primary alcohol (OH oncarbon bonded to one other carbon)'
        ],
        helper: 'Hydroxyl group: -OH; Alcohol classification: 1° (RCH2OH), 2° (R2CHOH), 3° (R3COH)',
        realWorldContext: 'Structure analysis'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Esterification',
        problem: 'Acetic acid + ethanol → ? (Fischer esterification)',
        parameters: { acid: 'acetic acid', alcohol: 'ethanol', reaction: 'esterification', findProduct: true },
        type: 'functional_groups',
        subparts: [
            'Write structures: CH3COOH + CH3CH2OH',
            'Acid-catalyzed condensation removes H2O',
            'Product: ethyl acetate (CH3COOCH2CH3)',
            'General: R-COOH + R\'-OH → R-COO-R\' + H2O'
        ],
        helper: 'equation: CH3COOH + CH3CH2OH → CH3COOCH2CH3 + H2O (H⁺ catalyst)',
        realWorldContext: 'Ester formation'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Carbonyl Chemistry',
        problem: 'Distinguish between aldehyde and ketone properties',
        parameters: { compounds: ['aldehyde', 'ketone'], property: 'reactivity' },
        type: 'functional_groups',
        subparts: [
            'Aldehyde: R-CHO (carbonyl at end of chain)',
            'Ketone: R-CO-R\' (carbonyl in middle of chain)',
            'Aldehydes are more reactive (less steric hindrance)',
            'Aldehydes oxidize easily to acids; ketones resist oxidation'
        ],
        helper: 'Structure: Aldehyde R-CHO vs Ketone R-CO-R\'; Aldehydes more reactive',
        realWorldContext: 'Carbonyl compound classification'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polyvalent Groups',
        problem: 'Compound with both -OH and -COOH groups. Properties?',
        parameters: { groups: ['-OH', '-COOH'], analyzeInteractions: true },
        type: 'functional_groups',
        subparts: [
            'Identify as hydroxy acid (e.g., lactic acid)',
            '-COOH is acidic (donates H⁺)',
            '-OH can form hydrogen bonds',
            'Both groups affect solubility, reactivity, and biological activity'
        ],
        helper: 'Example: lactic acid CH3CH(OH)COOH; Found in amino acids like serine',
        realWorldContext: 'Amino acids and hydroxy acids'
    });

    return relatedProblems;
}

generateRelatedIsomerism(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Structural Isomers',
        problem: 'Draw all structural isomers of C5H12',
        parameters: { formula: 'C5H12', isomerType: 'structural', findAllIsomers: true },
        type: 'isomerism',
        subparts: [
            'Draw straight chain: pentane (CH3CH2CH2CH2CH3)',
            'Draw branched: 2-methylbutane (CH3CH(CH3)CH2CH3)',
            'Draw branched: 2,2-dimethylpropane ((CH3)4C)',
            'Total: 3 structural isomers with different carbon skeletons'
        ],
        helper: 'diagram: 3 isomers - straight chain, one branch, two branches',
        realWorldContext: 'Pentane isomers in petroleum'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Isomerism',
        problem: 'Are butane and 2-methylpropane isomers?',
        parameters: { compound1: 'butane', compound2: '2-methylpropane', isIsomer: true },
        type: 'isomerism',
        subparts: [
            'Write molecular formula for butane: C4H10',
            'Write molecular formula for 2-methylpropane: C4H10',
            'Same molecular formula but different structures',
            'Yes, they are structural isomers (constitutional isomers)'
        ],
        helper: 'Isomers: same molecular formula, different structural arrangement',
        realWorldContext: 'Identifying molecular isomers'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Stereoisomerism',
        problem: 'Draw and label R/S configurations for 2-bromopentane',
        parameters: { compound: '2-bromopentane', assignConfiguration: true, rsSystem: true },
        type: 'isomerism',
        subparts: [
            'Identify chiral center at C-2 (4 different groups)',
            'Arrange groups by priority using Cahn-Ingold-Prelog rules',
            'Draw (R)-2-bromopentane (clockwise priority)',
            'Draw (S)-2-bromopentane (counterclockwise priority)'
        ],
        helper: 'Priority: Br > CH2CH2CH3 > CH3 > H; R = clockwise, S = counterclockwise',
        realWorldContext: 'Stereochemistry in pharmaceuticals'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Cis-Trans (Geometric)',
        problem: 'Cis and trans forms of 2-pentene',
        parameters: { compound: '2-pentene', isomerType: 'geometric', drawBoth: true },
        type: 'isomerism',
        subparts: [
            'Structure: CH3-CH=CH-CH2-CH3',
            'Cis: both larger groups (CH3 and CH2CH3) on same side',
            'Trans: larger groups on opposite sides of double bond',
            'These have different physical properties (bp, mp, polarity)'
        ],
        helper: 'diagram: cis = same side, trans = opposite sides of C=C bond',
        realWorldContext: 'Geometric isomerism in alkenes'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Enantiomers',
        problem: 'Chiral center in 2-butanol. Draw enantiomers.',
        parameters: { compound: '2-butanol', drawEnantiomers: true, identifyChiral: true },
        type: 'isomerism',
        subparts: [
            'Identify chiral center at C-2: CH3-CHOH-CH2-CH3',
            'Draw (R)-2-butanol (one mirror image)',
            'Draw (S)-2-butanol (other mirror image)',
            'Enantiomers: non-superimposable mirror images'
        ],
        helper: 'Enantiomers are optical isomers; rotate plane-polarized light in opposite directions',
        realWorldContext: 'Molecular chirality'
    });

    return relatedProblems;
}

generateRelatedOrganicReactions(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Substitution Reaction',
        problem: 'Bromoethane + KOH → ? (elimination or substitution)',
        parameters: { reactant: 'bromoethane', reagent: 'KOH', reaction: 'elimination', findProduct: true },
        type: 'organic_reactions',
        subparts: [
            'Identify reaction type: E2 elimination (strong base, heat)',
            'Bromoethane: CH3CH2Br',
            'KOH removes H from β-carbon and Br leaves',
            'Product: ethene (CH2=CH2) + KBr + H2O'
        ],
        helper: 'E2 elimination: Base removes β-H, leaving group departs, forms C=C',
        realWorldContext: 'E2 elimination mechanisms'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Addition Reaction',
        problem: 'Ethene + H2O → ? (hydration)',
        parameters: { reactant: 'ethene', reagent: 'H2O', reaction: 'addition', findProduct: true },
        type: 'organic_reactions',
        subparts: [
            'Identify as electrophilic addition to alkene',
            'Requires acid catalyst (H⁺)',
            'Water adds across double bond',
            'Product: ethanol (CH3CH2OH)'
        ],
        helper: 'equation: CH2=CH2 + H2O → CH3CH2OH (H⁺ catalyst)',
        realWorldContext: 'Alkene hydration'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Grignard Reaction',
        problem: 'CH3MgBr + acetaldehyde → ? (after workup with H2O)',
        parameters: { grignardReagent: 'CH3MgBr', electrophile: 'acetaldehyde', findProduct: true },
        type: 'organic_reactions',
        subparts: [
            'Grignard reagent acts as nucleophile (CH3⁻)',
            'Attacks carbonyl carbon of CH3CHO',
            'Forms alkoxide intermediate',
            'H2O workup gives 2-propanol (CH3CH(OH)CH3)'
        ],
        helper: 'Grignard: R-MgX + aldehyde → alcohol after H2O workup; Forms new C-C bond',
        realWorldContext: 'Carbon-carbon bond formation'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Oxidation-Reduction',
        problem: 'Cyclohexanol + H2CrO4 → ?',
        parameters: { reactant: 'cyclohexanol', oxidant: 'H2CrO4', findProduct: true },
        type: 'organic_reactions',
        subparts: [
            'Identify cyclohexanol as secondary alcohol',
            'Secondary alcohols oxidize to ketones',
            'Cannot oxidize further (no H on carbonyl carbon)',
            'Product: cyclohexanone'
        ],
        helper: '2° alcohol + oxidizing agent → ketone; Cannot oxidize further',
        realWorldContext: 'Cyclical alcohol oxidation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Aldol Condensation',
        problem: 'Two acetaldehyde molecules + NaOH → ?',
        parameters: { reactant: 'acetaldehyde', reaction: 'aldol', quantity: 2, findProduct: true },
        type: 'organic_reactions',
        subparts: [
            'Base removes α-hydrogen from one acetaldehyde',
            'Enolate ion attacks carbonyl of second acetaldehyde',
            'Forms β-hydroxy aldehyde (aldol)',
            'Dehydration gives crotonaldehyde (CH3CH=CHCHO)'
        ],
        helper: 'Aldol: 2 CH3CHO → CH3CH(OH)CH2CHO → CH3CH=CHCHO + H2O',
        realWorldContext: 'C-C bond formation in synthesis'
    });

    return relatedProblems;
}

generateRelatedNomenclature(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'IUPAC Naming',
        problem: 'Name: (CH3)2CH-CH2-CH3',
        parameters: { structure: '(CH3)2CH-CH2-CH3', findIUPACName: true },
        type: 'nomenclature',
        subparts: [
            'Identify longest carbon chain (4 carbons = butane)',
            'Locate methyl branch on carbon 2',
            'Number chain to give branch lowest number',
            'Name: 2-methylbutane'
        ],
        helper: 'Steps: 1) Find longest chain, 2) Number carbons, 3) Name branches, 4) Combine',
        realWorldContext: 'Systematic compound naming'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Naming',
        problem: 'Name the 3-carbon alkane',
        parameters: { carbons: 3, saturation: 'alkane', findName: true },
        type: 'nomenclature',
        subparts: [
            'Identify number of carbons: 3',
            'Use prefix: prop-',
            'Add suffix for alkane: -ane',
            'Name: propane (C3H8)'
        ],
        helper: 'Prefixes: meth(1), eth(2), prop(3), but(4); Suffix: -ane for alkanes',
        realWorldContext: 'Basic nomenclature'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Nomenclature',
        problem: 'Name: 4-bromo-2-methyl-1-pentene with correct numbering',
        parameters: { substituents: [{ name: 'bromo', position: 4 }, { name: 'methyl', position: 2 }], unsaturation: '1-pentene', findCorrectName: true },
        type: 'nomenclature',
        subparts: [
            'Number chain to give double bond lowest number (starts at C1)',
            'Identify substituents: bromo at C4, methyl at C2',
            'List substituents alphabetically',
            'Name: 4-bromo-2-methylpent-1-ene'
        ],
        helper: 'Priority: 1) Double/triple bonds get lowest #, 2) Alphabetical substituents, 3) Lowest # for substituents',
        realWorldContext: 'Complex compound naming'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Common Names',
        problem: 'IUPAC name for acetone',
        parameters: { commonName: 'acetone', findIUPACName: true },
        type: 'nomenclature',
        subparts: [
            'Identify structure: (CH3)2CO',
            'Three carbons with carbonyl in middle',
            'IUPAC: propanone (propan-2-one)',
            'Common name: acetone'
        ],
        helper: 'Ketone naming: alkanone; Acetone = propanone (3 carbons, C=O at C2)',
        realWorldContext: 'Common to IUPAC conversion'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Stereochemistry Nomenclature',
        problem: '(R)-2-bromobutane. Draw structure.',
        parameters: { name: '(R)-2-bromobutane', drawStructure: true, include3D: true },
        type: 'nomenclature',
        subparts: [
            'Draw butane chain: 4 carbons',
            'Place Br on carbon 2 (chiral center)',
            'Arrange groups in (R) configuration',
            'Use wedge-dash notation to show 3D structure'
        ],
        helper: '(R) = clockwise priority arrangement; Use wedge (out) and dash (in) bonds',
        realWorldContext: 'Stereochemical nomenclature'
    });

    return relatedProblems;
}

generateRelatedMechanisms(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'SN2 Mechanism',
        problem: 'Draw detailed SN2 mechanism: Br⁻ + CH3Br → CH3Br + Br⁻',
        parameters: { reaction: 'SN2', reactant: 'CH3Br', nucleophile: 'Br-', drawMechanism: true },
        type: 'reaction_mechanisms',
        subparts: [
            'Show nucleophile (Br⁻) approaching from backside',
            'Draw transition state with partial bonds',
            'Show inversion of configuration (Walden inversion)',
            'Note: one-step, bimolecular mechanism'
        ],
        helper: 'SN2: Backside attack, transition state, inversion; Rate = k[RX][Nu]',
        realWorldContext: 'Bimolecular substitution'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Mechanism Basics',
        problem: 'What are intermediates and transition states?',
        parameters: { concept: 'intermediates_vs_transition', explain: true },
        type: 'reaction_mechanisms',
        subparts: [
            'Intermediate: stable species between steps (energy minimum)',
            'Transition state: highest energy point (cannot be isolated)',
            'Intermediates can sometimes be detected',
            'Transition states last ~10⁻¹³ seconds'
        ],
        helper: 'Energy diagram: Intermediates = valleys, Transition states = peaks',
        realWorldContext: 'Reaction energy diagrams'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'E1 Mechanism',
        problem: 'E1 elimination mechanism for (CH3)3C-Br with H2O',
        parameters: { reaction: 'E1', reactant: '(CH3)3C-Br', solvent: 'H2O', drawMechanism: true },
        type: 'reaction_mechanisms',
        subparts: [
            'Step 1: Br⁻ leaves forming carbocation (slow, rate-determining)',
            'Step 2: H2O removes β-hydrogen (fast)',
            'Product: (CH3)2C=CH2 (isobutylene)',
            'Note: two-step, unimolecular mechanism'
        ],
        helper: 'E1: 1) Leaving group departs, 2) Base removes H; Rate = k[RX]',
        realWorldContext: 'Unimolecular elimination'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Mechanism Prediction',
        problem: 'Predict mechanism: 1° alkyl halide + strong nucleophile',
        parameters: { alkylHalideType: '1-degree', nucleophileStrength: 'strong', predictMechanism: true },
        type: 'reaction_mechanisms',
        subparts: [
            'Primary halides favor SN2 (less steric hindrance)',
            'Strong nucleophile promotes SN2',
            'SN1 unlikely (1° carbocation too unstable)',
            'Conclusion: SN2 mechanism expected'
        ],
        helper: '1° halides → SN2 (not SN1); 3° halides → SN1/E1; 2° halides → mixed',
        realWorldContext: 'Substrate effects on mechanism'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Radical Mechanism',
        problem: 'Free radical chlorination of methane mechanism',
        parameters: { reaction: 'radical_halogenation', reactant: 'CH4', halogen: 'Cl2', drawMechanism: true },
        type: 'reaction_mechanisms',
        subparts: [
            'Initiation: Cl2 → 2 Cl· (light or heat)',
            'Propagation: Cl· + CH4 → HCl + ·CH3, then ·CH3 + Cl2 → CH3Cl + Cl·',
            'Termination: radical-radical combinations',
            'Overall: CH4 + Cl2 → CH3Cl + HCl'
        ],
        helper: 'Radical chain: 1) Initiation, 2) Propagation (repeats), 3) Termination',
        realWorldContext: 'Radical chain reactions'
    });

    return relatedProblems;
}

generateRelatedPolymers(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Addition Polymerization',
        problem: 'Draw polymer from ethene (polyethylene) chain',
        parameters: { monomer: 'ethene', polymerType: 'addition', drawChain: true },
        type: 'polymers',
        subparts: [
            'Monomer: CH2=CH2 (ethene)',
            'Double bond opens and monomers link',
            'Repeating unit: -CH2-CH2-',
            'Draw: -[CH2-CH2]n- (polyethylene)'
        ],
        helper: 'Addition polymerization: n(CH2=CH2) → -[CH2-CH2]n-',
        realWorldContext: 'Plastic production'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Polymer',
        problem: 'What is the repeating unit of polyethylene?',
        parameters: { polymer: 'polyethylene', findRepeatingUnit: true },
        type: 'polymers',
        subparts: [
            'Identify polymer structure: long chain of -CH2- groups',
            'Find smallest repeating unit',
            'Repeating unit: -CH2-CH2- or just -CH2-',
            'Written as: -[CH2-CH2]n-'
        ],
        helper: 'Repeating unit shown in brackets with subscript n',
        realWorldContext: 'Polymer structure'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Condensation Polymerization',
        problem: 'Nylon 66 formation from hexanedioic acid and hexane-1,6-diamine',
        parameters: { reaction: 'condensation', acid: 'hexanedioic', amine: 'hexane-1,6-diamine', findProduct: true },
        type: 'polymers',
        subparts: [
            'Diacid: HOOC-(CH2)4-COOH',
            'Diamine: H2N-(CH2)6-NH2',
            'Condensation releases H2O, forms amide (-CONH-) links',
            'Product: -[OC-(CH2)4-CONH-(CH2)6-NH]n- (Nylon 66)'
        ],
        helper: 'Condensation: Acid + Amine → Amide + H2O; Forms polyamide (nylon)',
        realWorldContext: 'Polyamide synthesis'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Polymer Properties',
        problem: 'Compare: linear vs branched polyethylene properties',
        parameters: { polymers: ['linear PE', 'branched PE'], property: 'mechanical' },
        type: 'polymers',
        subparts: [
            'Linear PE (HDPE): chains pack tightly, higher density',
            'Branched PE (LDPE): branches prevent tight packing, lower density',
            'HDPE: stronger, higher melting point, more rigid',
            'LDPE: more flexible, lower melting point, used for films'
        ],
        helper: 'Linear chains → tight packing → higher density and strength',
        realWorldContext: 'Polymer structure-property relations'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Cross-linked Polymers',
        problem: 'How does cross-linking affect epoxy resin properties?',
        parameters: { polymer: 'epoxy', modification: 'cross-linking', analyzeEffects: true },
        type: 'polymers',
        subparts: [
            'Cross-links: covalent bonds between polymer chains',
            'Increases rigidity and strength',
            'Reduces flexibility and solubility',
            'Creates 3D network structure (thermoset)'
        ],
        helper: 'Cross-linking: Creates network, increases strength, prevents melting (thermoset)',
        realWorldContext: 'Advanced polymer materials'
    });

    return relatedProblems;
}

// === REDOX CHEMISTRY PROBLEM GENERATORS ===

generateRelatedRedoxStoichiometry(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Complex Redox Reaction',
        problem: 'Balance in acidic: MnO4⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺',
        parameters: { equation: 'MnO4- + Fe2+ → Mn2+ + Fe3+', medium: 'acidic', method: 'half-reaction', findBalance: true },
        type: 'redox_stoichiometry',
        subparts: [
            'Write half-reactions: MnO4⁻ → Mn²⁺ and Fe²⁺ → Fe³⁺',
            'Balance O with H2O, H with H⁺, charge with e⁻',
            'Multiply to equalize electrons (5 Fe²⁺ for 1 MnO4⁻)',
            'Balanced: MnO4⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H2O'
        ],
        helper: 'Half-reaction method: 1) Split, 2) Balance each, 3) Equalize e⁻, 4) Add',
        realWorldContext: 'Permanganate titrations'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Redox',
        problem: 'Balance: Fe + O2 → Fe2O3 using oxidation states',
        parameters: { equation: 'Fe + O2 → Fe2O3', method: 'oxidation_states', findBalance: true },
        type: 'redox_stoichiometry',
        subparts: [
            'Assign oxidation states: Fe: 0 → +3, O: 0 → -2',
            'Fe loses 3e⁻ each, O gains 2e⁻ each',
            'Balance electrons: 4 Fe (12e⁻ lost) and 3 O2 (12e⁻ gained)',
            'Balanced: 4Fe + 3O2 → 2Fe2O3'
        ],
        helper: 'Oxidation number method: Balance atoms, then electrons',
        realWorldContext: 'Rust formation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Basic Solution Redox',
        problem: 'Balance in basic: ClO⁻ + I⁻ → Cl⁻ + I2',
        parameters: { equation: 'ClO- + I- → Cl- + I2', medium: 'basic', method: 'half-reaction', findBalance: true },
        type: 'redox_stoichiometry',
        subparts: [
            'Balance as if acidic first',
            'Add OH⁻ to neutralize H⁺ (forms H2O)',
            'Cancel water molecules on both sides',
            'Balanced: ClO⁻ + 2I⁻ + H2O → Cl⁻ + I2 + 2OH⁻'
        ],
        helper: 'Basic solution: Balance in acid, then add OH⁻ = H⁺ to form H2O',
        realWorldContext: 'Disinfection reactions'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Disproportionation',
        problem: 'Balance Cl2 + NaOH → NaCl + NaClO + H2O (cold, dilute)',
        parameters: { equation: 'Cl2 + NaOH → NaCl + NaClO + H2O', disproportionation: true, findBalance: true },
        type: 'redox_stoichiometry',
        subparts: [
            'Identify disproportionation: Cl2 (0) → Cl⁻ (-1) and ClO⁻ (+1)',
            'Same element both oxidized and reduced',
            'Balance: Cl2 + 2NaOH → NaCl + NaClO + H2O',
            'Note: One Cl reduced, one Cl oxidized'
        ],
        helper: 'Disproportionation: Same element undergoes both oxidation and reduction',
        realWorldContext: 'Hypochlorous acid formation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Electron Transfer',
        problem: 'Electrons transferred when 2 mol permanganate oxidizes iron(II)',
        parameters: { moles: 2, oxidant: 'MnO4-', reductant: 'Fe2+', findElectronTransfer: true },
        type: 'redox_stoichiometry',
        subparts: [
            'Each MnO4⁻ gains 5 electrons (Mn: +7 → +2)',
            'Each Fe²⁺ loses 1 electron (Fe: +2 → +3)',
            'For 2 mol MnO4⁻: 2 × 5 = 10 mol electrons transferred',
            'This oxidizes 10 mol Fe²⁺ to Fe³⁺'
        ],
        helper: 'Electrons transferred = moles × change in oxidation number',
        realWorldContext: 'Electrochemistry calculations'
    });

    return relatedProblems;
}

generateRelatedOxidationStates(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Assign Oxidation States',
        problem: 'Determine oxidation state of each atom in H2SO4',
        parameters: { compound: 'H2SO4', assignAllStates: true },
        type: 'oxidation_states',
        subparts: [
            'Assign H: +1 (rule: H is +1 except in hydrides)',
            'Assign O: -2 (rule: O is -2 except in peroxides)',
            'Calculate S: 2(+1) + S + 4(-2) = 0',
            'S = +6'
        ],
        helper: 'Rules: H = +1, O = -2 (usually), sum = charge; H2SO4: H(+1), S(+6), O(-2)',
        realWorldContext: 'Sulfuric acid oxidation analysis'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Oxidation States',
        problem: 'What is oxidation state of Cl in NaCl?',
        parameters: { compound: 'NaCl', element: 'Cl', findState: true },
        type: 'oxidation_states',
        subparts: [
            'Identify NaCl as ionic compound',
            'Na is +1 (Group 1 metal)',
            'Compound is neutral, so Cl must be -1',
            'Oxidation state of Cl: -1'
        ],
        helper: 'Ionic compounds: oxidation state = ionic charge; Na⁺Cl⁻',
        realWorldContext: 'Ionic compound oxidation states'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Peroxide Exception',
        problem: 'Oxidation state of O in H2O2 vs H2O. Explain difference.',
        parameters: { compounds: ['H2O2', 'H2O'], element: 'O', compareStates: true },
        type: 'oxidation_states',
        subparts: [
            'In H2O: O = -2 (normal state)',
            'In H2O2: 2(+1) + 2(O) = 0, so O = -1',
            'Peroxides contain O-O bond',
            'Exception: O is -1 in peroxides, not -2'
        ],
        helper: 'O usually -2, but -1 in peroxides (O-O bond), -½ in superoxides',
        realWorldContext: 'Peroxide oxidation state exception'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Variable Oxidation States',
        problem: 'Manganese compounds: MnO2, KMnO4, MnSO4. Find Mn oxidation state in each.',
        parameters: { compounds: ['MnO2', 'KMnO4', 'MnSO4'], element: 'Mn', findAllStates: true },
        type: 'oxidation_states',
        subparts: [
            'MnO2: Mn + 2(-2) = 0, Mn = +4',
            'KMnO4: (+1) + Mn + 4(-2) = 0, Mn = +7',
            'MnSO4: Mn + (+6) + 4(-2) = 0, Mn = +2',
            'Mn can have multiple oxidation states: +2, +4, +7'
        ],
        helper: 'Transition metals have variable oxidation states; Mn: +2 to +7',
        realWorldContext: 'Transition metal oxidation states'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Ions',
        problem: 'Oxidation state of Cr in [Cr(NH3)6]³⁺',
        parameters: { complexIon: '[Cr(NH3)6]3+', findMetalState: true },
        type: 'oxidation_states',
        subparts: [
            'NH3 is neutral ligand (oxidation state = 0)',
            'Total charge of complex = +3',
            'Cr + 6(0) = +3',
            'Oxidation state of Cr: +3'
        ],
        helper: 'Complex ions: Oxidation state of metal = charge - sum of ligand charges',
        realWorldContext: 'Coordination compound oxidation states'
    });

    return relatedProblems;
}

generateRelatedHalfReactions(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Write Half-Reactions',
        problem: 'Zn + Cu²⁺ → Zn²⁺ + Cu. Write oxidation and reduction half-reactions.',
        parameters: { equation: 'Zn + Cu2+ → Zn2+ + Cu', writeHalfReactions: true },
        type: 'half_reactions',
        subparts: [
            'Oxidation half-reaction: Zn → Zn²⁺ + 2e⁻',
            'Reduction half-reaction: Cu²⁺ + 2e⁻ → Cu',
            'Electrons lost = electrons gained',
            'Add to get overall equation'
        ],
        helper: 'Oxidation: loses e⁻ (LEO); Reduction: gains e⁻ (GER)',
        realWorldContext: 'Metal displacement reaction'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Identify Oxidation',
        problem: 'In half-reaction Fe²⁺ → Fe³⁺ + e⁻, is this oxidation or reduction?',
        parameters: { halfReaction: 'Fe2+ → Fe3+ + e-', identify: true },
        type: 'half_reactions',
        subparts: [
            'Fe loses an electron',
            'Oxidation state increases: +2 → +3',
            'Loss of electrons = oxidation',
            'Answer: This is oxidation'
        ],
        helper: 'OIL RIG: Oxidation Is Loss (of e⁻), Reduction Is Gain (of e⁻)',
        realWorldContext: 'Electron transfer identification'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Balance in Acidic Solution',
        problem: 'Balance: MnO4⁻ → Mn²⁺ (acidic solution)',
        parameters: { halfReaction: 'MnO4- → Mn2+', medium: 'acidic', balance: true },
        type: 'half_reactions',
        subparts: [
            'Balance Mn (already balanced)',
            'Balance O with H2O: MnO4⁻ → Mn²⁺ + 4H2O',
            'Balance H with H⁺: MnO4⁻ + 8H⁺ → Mn²⁺ + 4H2O',
            'Balance charge with e⁻: MnO4⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H2O'
        ],
        helper: 'Acidic: 1) Balance atoms except O,H; 2) Add H2O for O; 3) Add H⁺ for H; 4) Add e⁻ for charge',
        realWorldContext: 'Permanganate reduction'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Balance in Basic Solution',
        problem: 'Balance: ClO⁻ → Cl⁻ (basic solution)',
        parameters: { halfReaction: 'ClO- → Cl-', medium: 'basic', balance: true },
        type: 'half_reactions',
        subparts: [
            'Balance as if acidic: ClO⁻ + 2H⁺ + 2e⁻ → Cl⁻ + H2O',
            'Add 2OH⁻ to both sides to neutralize H⁺',
            'Left: ClO⁻ + 2H2O + 2e⁻',
            'Simplified: ClO⁻ + H2O + 2e⁻ → Cl⁻ + 2OH⁻'
        ],
        helper: 'Basic: Balance in acid, then add OH⁻ to neutralize all H⁺',
        realWorldContext: 'Hypochlorite reduction'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combine Half-Reactions',
        problem: 'Oxidation: Fe²⁺ → Fe³⁺. Reduction: Cr2O7²⁻ → Cr³⁺ (acidic). Write overall equation.',
        parameters: { oxidation: 'Fe2+ → Fe3+', reduction: 'Cr2O72- → Cr3+', medium: 'acidic', combineReactions: true },
        type: 'half_reactions',
        subparts: [
            'Balance reduction: Cr2O7²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H2O',
            'Balance oxidation: Fe²⁺ → Fe³⁺ + e⁻',
            'Multiply oxidation by 6 to equalize electrons',
            'Overall: Cr2O7²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H2O'
        ],
        helper: 'Combine: Multiply to equalize e⁻, add half-reactions, cancel electrons',
        realWorldContext: 'Dichromate titration'
    });

    return relatedProblems;
}

generateRelatedElectrochemistry(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Standard Cell Potential',
        problem: 'Calculate E°cell for Zn|Zn²⁺||Cu²⁺|Cu. E°(Zn²⁺/Zn)=-0.76V, E°(Cu²⁺/Cu)=+0.34V',
        parameters: { anode: 'Zn', cathode: 'Cu', E_anode: -0.76, E_cathode: 0.34, calculateEcell: true },
        type: 'electrochemistry',
        subparts: [
            'Identify anode (oxidation at Zn) and cathode (reduction at Cu)',
            'E°cell = E°cathode - E°anode',
            'E°cell = 0.34 - (-0.76) = 1.10 V',
            'Positive E° means spontaneous reaction'
        ],
        helper: 'formula: E°cell = E°cathode - E°anode; Positive E° = spontaneous',
        realWorldContext: 'Daniell cell'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Anode vs Cathode',
        problem: 'In galvanic cell, which electrode is positive? Where does oxidation occur?',
        parameters: { cellType: 'galvanic', identifyElectrodes: true },
        type: 'electrochemistry',
        subparts: [
            'In galvanic cell, cathode is positive electrode',
            'Anode is negative electrode',
            'Oxidation occurs at anode (loses electrons)',
            'Reduction occurs at cathode (gains electrons)'
        ],
        helper: 'Galvanic: Anode (-) = oxidation; Cathode (+) = reduction',
        realWorldContext: 'Cell electrode identification'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Nernst Equation',
        problem: 'E°cell = 1.10V for Zn-Cu cell. Calculate Ecell when [Zn²⁺]=0.1M, [Cu²⁺]=1.0M at 298K.',
        parameters: { Ecell_standard: 1.10, concentrations: { 'Zn2+': 0.1, 'Cu2+': 1.0 }, temperature: 298, useNernst: true },
        type: 'electrochemistry',
        subparts: [
            'Nernst equation: E = E° - (RT/nF)lnQ',
            'At 298K: E = E° - (0.0592/n)logQ',
            'Q = [Zn²⁺]/[Cu²⁺] = 0.1/1.0 = 0.1',
            'E = 1.10 - (0.0592/2)log(0.1) = 1.10 + 0.030 = 1.13 V'
        ],
        helper: 'Nernst: E = E° - (0.0592/n)logQ at 25°C; Q = [products]/[reactants]',
        realWorldContext: 'Non-standard cell potentials'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Spontaneity',
        problem: 'If E°cell > 0, is reaction spontaneous? Relate to ΔG.',
        parameters: { concept: 'spontaneity', relateToGibbs: true },
        type: 'electrochemistry',
        subparts: [
            'Relationship: ΔG° = -nFE°',
            'If E° > 0, then ΔG° < 0',
            'Negative ΔG means spontaneous',
            'Conclusion: E° > 0 indicates spontaneous reaction'
        ],
        helper: 'formula: ΔG° = -nFE°; E° > 0 → ΔG° < 0 → spontaneous',
        realWorldContext: 'Thermodynamics of electrochemical cells'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Equilibrium Constant',
        problem: 'Calculate K for Zn + Cu²⁺ ⇌ Zn²⁺ + Cu from E°cell = 1.10V. (Use: E° = (RT/nF)lnK)',
        parameters: { Ecell: 1.10, n: 2, calculateK: true },
        type: 'electrochemistry',
        subparts: [
            'At 298K: E° = (0.0592/n)logK',
            'Rearrange: logK = nE°/0.0592',
            'logK = (2 × 1.10)/0.0592 = 37.2',
            'K = 10³⁷·² ≈ 1.6 × 10³⁷ (very large, very favorable)'
        ],
        helper: 'formula: logK = nE°/0.0592 at 25°C; Large K means very favorable',
        realWorldContext: 'Cell potential and equilibrium'
    });

    return relatedProblems;
}

generateRelatedGalvaniCells(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Cell Diagram',
        problem: 'Write cell notation for: Zn|Zn²⁺(1M)||Ag⁺(1M)|Ag',
        parameters: { anode: 'Zn', cathode: 'Ag', writeCellNotation: true },
        type: 'galvanic_cells',
        subparts: [
            'Anode (oxidation) on left: Zn|Zn²⁺',
            'Salt bridge indicated by ||',
            'Cathode (reduction) on right: Ag⁺|Ag',
            'Full notation: Zn(s)|Zn²⁺(aq)||Ag⁺(aq)|Ag(s)'
        ],
        helper: 'Cell notation: Anode|Anode solution||Cathode solution|Cathode',
        realWorldContext: 'Standard cell notation'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Electron Flow',
        problem: 'In Zn-Cu galvanic cell, which direction do electrons flow in external circuit?',
        parameters: { cell: 'Zn-Cu', identifyElectronFlow: true },
        type: 'galvanic_cells',
        subparts: [
            'Electrons are produced at anode (Zn)',
            'Electrons are consumed at cathode (Cu)',
            'Flow: from anode to cathode',
            'Direction: Zn → external wire → Cu'
        ],
        helper: 'Electrons flow: Anode → wire → Cathode (outside the cell)',
        realWorldContext: 'Current direction in cells'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Salt Bridge Function',
        problem: 'Why is salt bridge necessary in galvanic cell? What happens without it?',
        parameters: { component: 'salt bridge', explainFunction: true },
        type: 'galvanic_cells',
        subparts: [
            'Salt bridge maintains electrical neutrality',
            'Anions migrate to anode compartment (becomes positive)',
            'Cations migrate to cathode compartment (becomes negative)',
            'Without it: charge buildup stops electron flow'
        ],
        helper: 'Salt bridge: Completes circuit, prevents charge buildup, maintains neutrality',
        realWorldContext: 'Ionic circuit completion'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Concentration Cells',
        problem: 'Cu|Cu²⁺(0.01M)||Cu²⁺(1.0M)|Cu. Calculate Ecell.',
        parameters: { concentrationCell: true, metal: 'Cu', concentrations: [0.01, 1.0], calculateEcell: true },
        type: 'galvanic_cells',
        subparts: [
            'E° = 0 (same metal/ion at both electrodes)',
            'Use Nernst: E = -(0.0592/2)log([Cu²⁺]anode/[Cu²⁺]cathode)',
            'E = -(0.0592/2)log(0.01/1.0)',
            'E = -(0.0592/2)(-2) = 0.0592 V'
        ],
        helper: 'Concentration cell: E° = 0; Cell runs due to concentration difference',
        realWorldContext: 'Concentration-driven cells'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Battery Design',
        problem: 'Design galvanic cell with E°cell ≈ 3V. Choose appropriate half-reactions.',
        parameters: { targetVoltage: 3.0, designCell: true, selectHalfReactions: true },
        type: 'galvanic_cells',
        subparts: [
            'Need large difference in reduction potentials',
            'Choose strong oxidizer (high E°): Li⁺/Li (-3.04V) as anode',
            'Choose strong reducer (low E°): F2/F⁻ (+2.87V) as cathode',
            'E°cell = 2.87 - (-3.04) = 5.91V (or choose milder couple for 3V)'
        ],
        helper: 'High voltage: Large ΔE° between half-reactions; Li and F2 give highest',
        realWorldContext: 'Practical battery design'
    });

    return relatedProblems;
}

generateRelatedElectrolysis(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electrolysis Products',
        problem: 'Predict products at anode and cathode during electrolysis of molten NaCl.',
        parameters: { electrolyte: 'NaCl', state: 'molten', predictProducts: true },
        type: 'electrolysis',
        subparts: [
            'Cathode (reduction): Na⁺ + e⁻ → Na(l)',
            'Anode (oxidation): 2Cl⁻ → Cl2(g) + 2e⁻',
            'Products: sodium metal at cathode, chlorine gas at anode',
            'Overall: 2NaCl(l) → 2Na(l) + Cl2(g)'
        ],
        helper: 'Molten salt: Cations reduced at cathode, anions oxidized at anode',
        realWorldContext: 'Industrial chlorine production'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Electrolysis vs Galvanic',
        problem: 'What is main difference between electrolytic and galvanic cells?',
        parameters: { compare: ['electrolytic', 'galvanic'], identifyDifferences: true },
        type: 'electrolysis',
        subparts: [
            'Galvanic: spontaneous, produces electricity',
            'Electrolytic: non-spontaneous, requires electricity input',
            'Galvanic: ΔG < 0, E > 0',
            'Electrolytic: ΔG > 0, E < 0 (external voltage applied)'
        ],
        helper: 'Galvanic = battery (makes electricity); Electrolytic = uses electricity',
        realWorldContext: 'Cell type comparison'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Faraday\'s Laws',
        problem: 'How many grams of Cu deposited when 2.00 A current passes for 1.00 hour through CuSO4?',
        parameters: { current: 2.00, time: 3600, compound: 'CuSO4', metal: 'Cu', calculateMass: true },
        type: 'electrolysis',
        subparts: [
            'Calculate charge: Q = It = 2.00 A × 3600 s = 7200 C',
            'Calculate moles of e⁻: n = Q/F = 7200/96500 = 0.0746 mol e⁻',
            'Cu²⁺ + 2e⁻ → Cu, so mol Cu = 0.0746/2 = 0.0373 mol',
            'Mass Cu = 0.0373 × 63.5 = 2.37 g'
        ],
        helper: 'Faraday\'s Law: n(e⁻) = Q/F = It/F; F = 96,500 C/mol',
        realWorldContext: 'Electroplating calculations'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Water Electrolysis',
        problem: 'Electrolysis of water: 2H2O → 2H2 + O2. Where is H2 produced? O2?',
        parameters: { electrolyte: 'water', identifyProducts: true, explainElectrodes: true },
        type: 'electrolysis',
        subparts: [
            'Cathode (reduction): 2H2O + 2e⁻ → H2 + 2OH⁻',
            'Anode (oxidation): 2H2O → O2 + 4H⁺ + 4e⁻',
            'H2 produced at cathode (negative electrode)',
            'O2 produced at anode (positive electrode)'
        ],
        helper: 'Water: H2 at cathode (reduction), O2 at anode (oxidation); Ratio 2:1',
        realWorldContext: 'Hydrogen production'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multiple Deposits',
        problem: 'Same current through CuSO4 and AgNO3 in series. Compare masses deposited.',
        parameters: { seriesCells: true, compounds: ['CuSO4', 'AgNO3'], compareMasses: true },
        type: 'electrolysis',
        subparts: [
            'Same charge (Q) passes through both',
            'Cu: n = Q/2F (Cu²⁺ + 2e⁻); Ag: n = Q/F (Ag⁺ + e⁻)',
            'Mass Cu = (Q/2F) × 63.5; Mass Ag = (Q/F) × 108',
            'Ratio: mCu/mAg = (63.5/2)/108 = 31.75/108 ≈ 0.294'
        ],
        helper: 'Series cells: Same Q; Different n depends on charge of ion',
        realWorldContext: 'Faraday\'s law applications'
    });

    return relatedProblems;
}


// === CHEMICAL BONDING & LEWIS STRUCTURES (continued) ===

generateRelatedVSEPR(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'VSEPR Prediction',
        problem: 'Predict molecular geometry for NH3 (3 bonds, 1 lone pair)',
        parameters: { molecule: 'NH3', bondingPairs: 3, lonePairs: 1, predictShape: true },
        type: 'vsepr_theory',
        subparts: [
            'Count total electron pairs: 3 bonding + 1 lone = 4 pairs',
            'Electron geometry: tetrahedral (4 pairs)',
            'Molecular geometry: trigonal pyramidal (3 atoms)',
            'Bond angle: ~107° (less than 109.5° due to lone pair repulsion)'
        ],
        helper: 'VSEPR: 4 e⁻ pairs → tetrahedral arrangement; 1 lone pair → pyramidal shape',
        realWorldContext: 'Ammonia molecular shape'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic VSEPR',
        problem: 'What is the shape of CH4 (4 bonding pairs, 0 lone pairs)?',
        parameters: { molecule: 'CH4', bondingPairs: 4, lonePairs: 0, predictShape: true },
        type: 'vsepr_theory',
        subparts: [
            'Count electron pairs: 4 bonding pairs',
            'No lone pairs on central carbon',
            'Shape: tetrahedral',
            'Bond angles: 109.5° (perfect tetrahedral)'
        ],
        helper: '4 bonding pairs, 0 lone pairs → tetrahedral; All angles 109.5°',
        realWorldContext: 'Methane molecular geometry'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Effect of Lone Pairs',
        problem: 'Compare bond angles: CH4 (109.5°), NH3 (~107°), H2O (~104.5°). Explain trend.',
        parameters: { molecules: ['CH4', 'NH3', 'H2O'], compareBondAngles: true, explainLonePairEffect: true },
        type: 'vsepr_theory',
        subparts: [
            'All have tetrahedral electron geometry',
            'CH4: 0 lone pairs, NH3: 1 lone pair, H2O: 2 lone pairs',
            'Lone pairs repel more strongly than bonding pairs',
            'More lone pairs → smaller bond angles (LP-BP > BP-BP repulsion)'
        ],
        helper: 'Repulsion order: LP-LP > LP-BP > BP-BP; More lone pairs → smaller bond angles',
        realWorldContext: 'Lone pair repulsion effects'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'T-shaped Geometry',
        problem: 'Predict shape of ClF3 (3 bonding, 2 lone pairs)',
        parameters: { molecule: 'ClF3', bondingPairs: 3, lonePairs: 2, predictShape: true },
        type: 'vsepr_theory',
        subparts: [
            'Total electron pairs: 3 + 2 = 5',
            'Electron geometry: trigonal bipyramidal',
            'Lone pairs occupy equatorial positions (less repulsion)',
            'Molecular shape: T-shaped'
        ],
        helper: '5 e⁻ pairs: trigonal bipyramidal; 2 LP equatorial → T-shaped',
        realWorldContext: 'Complex molecular geometries'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Square Planar Geometry',
        problem: 'XeF4 has square planar shape. Electron pairs = 6. Why not octahedral?',
        parameters: { molecule: 'XeF4', electronPairs: 6, actualShape: 'square planar', explainDeviation: true },
        type: 'vsepr_theory',
        subparts: [
            'Total: 4 bonding + 2 lone pairs = 6 electron pairs',
            'Electron geometry: octahedral',
            'Two lone pairs positioned opposite each other (minimize repulsion)',
            'Molecular geometry: square planar (4 F atoms in plane)'
        ],
        helper: '6 e⁻ pairs: octahedral; 2 LP opposite → square planar shape',
        realWorldContext: 'Xenon compound geometries'
    });

    return relatedProblems;
}

generateRelatedBondPolarity(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electronegativity Difference',
        problem: 'HCl bond: H (2.1), Cl (3.0). Calculate ΔEN and classify bond type.',
        parameters: { bond: 'H-Cl', electronegativities: { H: 2.1, Cl: 3.0 }, classifyBond: true },
        type: 'bond_polarity',
        subparts: [
            'Calculate ΔEN: |3.0 - 2.1| = 0.9',
            'Classification: 0-0.4 = nonpolar covalent, 0.4-1.7 = polar covalent, >1.7 = ionic',
            'ΔEN = 0.9 → polar covalent',
            'Partial charges: Hδ+ - Clδ- (Cl is more electronegative)'
        ],
        helper: 'ΔEN ranges: <0.4 nonpolar, 0.4-1.7 polar covalent, >1.7 ionic',
        realWorldContext: 'Polar covalent bonding'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Polar vs Nonpolar',
        problem: 'Is O2 polar or nonpolar? Explain.',
        parameters: { molecule: 'O2', determinePolarityAndExplain: true },
        type: 'bond_polarity',
        subparts: [
            'O2 has O=O double bond',
            'Both atoms are identical (same electronegativity)',
            'ΔEN = 0 (no electronegativity difference)',
            'Nonpolar covalent bond; nonpolar molecule'
        ],
        helper: 'Same atoms → ΔEN = 0 → nonpolar; Examples: H2, O2, N2, Cl2',
        realWorldContext: 'Molecular polarity basics'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Molecular Polarity vs Bond Polarity',
        problem: 'CO2 has polar bonds but is nonpolar. CCl4 has polar bonds but is nonpolar. Explain.',
        parameters: { molecules: ['CO2', 'CCl4'], polarBondsNonpolarMolecule: true, explainSymmetry: true },
        type: 'bond_polarity',
        subparts: [
            'CO2: O=C=O linear, polar C=O bonds point opposite directions',
            'Bond dipoles cancel due to symmetry → nonpolar molecule',
            'CCl4: tetrahedral, four C-Cl bonds symmetrically arranged',
            'All dipoles cancel → nonpolar molecule despite polar bonds'
        ],
        helper: 'Molecular polarity: depends on bond polarity AND molecular geometry (symmetry)',
        realWorldContext: 'Symmetry and molecular polarity'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Dipole Moment',
        problem: 'Which has larger dipole moment: H2O or H2S? Explain.',
        parameters: { molecules: ['H2O', 'H2S'], compareDipoleMoments: true },
        type: 'bond_polarity',
        subparts: [
            'Both are bent molecules (similar geometry)',
            'O is more electronegative than S',
            'H2O has larger ΔEN for O-H bonds vs H-S bonds',
            'H2O has larger dipole moment (1.85 D vs 0.97 D for H2S)'
        ],
        helper: 'Dipole moment depends on: ΔEN (bond polarity) and geometry',
        realWorldContext: 'Dipole moment comparisons'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Partial Charges',
        problem: 'In NH3, assign δ+ and δ- charges. N (3.0), H (2.1).',
        parameters: { molecule: 'NH3', electronegativities: { N: 3.0, H: 2.1 }, assignPartialCharges: true },
        type: 'bond_polarity',
        subparts: [
            'N is more electronegative than H (3.0 > 2.1)',
            'N attracts bonding electrons more strongly',
            'N has partial negative charge (δ-)',
            'Each H has partial positive charge (δ+); Structure: (δ+)H3N(δ-)'
        ],
        helper: 'More electronegative atom gets δ-; Less electronegative gets δ+',
        realWorldContext: 'Partial charge distribution'
    });

    return relatedProblems;
}

generateRelatedIntermolecularForces(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Identify IMF Types',
        problem: 'What intermolecular forces exist in liquid HF?',
        parameters: { substance: 'HF', identifyAllForces: true },
        type: 'intermolecular_forces',
        subparts: [
            'HF is polar (H-F bond is very polar)',
            'Contains H bonded to F (highly electronegative)',
            'Forces present: London dispersion (all molecules)',
            'Dipole-dipole and hydrogen bonding (strongest IMF in HF)'
        ],
        helper: 'H-bonding occurs when H bonds to N, O, or F',
        realWorldContext: 'Hydrogen bonding in HF'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'London Dispersion',
        problem: 'Why do all molecules exhibit London dispersion forces?',
        parameters: { concept: 'London dispersion', explainUniversality: true },
        type: 'intermolecular_forces',
        subparts: [
            'All molecules have electrons',
            'Electrons are in constant motion',
            'Temporary/instantaneous dipoles form',
            'These induce dipoles in neighboring molecules (universal attraction)'
        ],
        helper: 'London forces: temporary dipoles; Present in ALL molecules',
        realWorldContext: 'Universal intermolecular forces'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Boiling Point Trends',
        problem: 'Rank by boiling point: CH4, NH3, H2O, HF. Explain.',
        parameters: { molecules: ['CH4', 'NH3', 'H2O', 'HF'], rankBoilingPoints: true, explainIMF: true },
        type: 'intermolecular_forces',
        subparts: [
            'CH4: only London forces (weakest, lowest bp: -162°C)',
            'NH3: H-bonding but 1 lone pair (bp: -33°C)',
            'H2O: H-bonding with 2 lone pairs (more H-bonds, bp: 100°C)',
            'HF: strongest H-bonding but linear (bp: 20°C); Order: CH4 < NH3 < HF < H2O'
        ],
        helper: 'IMF strength order: H-bonding > dipole-dipole > London; More H-bonds → higher bp',
        realWorldContext: 'IMF strength and physical properties'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Hydrogen Bonding',
        problem: 'Which can form hydrogen bonds: CH4, NH3, H2O, CH3OH?',
        parameters: { molecules: ['CH4', 'NH3', 'H2O', 'CH3OH'], identifyHBonding: true },
        type: 'intermolecular_forces',
        subparts: [
            'H-bonding requires H bonded to N, O, or F',
            'CH4: no N, O, or F → no H-bonding',
            'NH3: H-N bonds → can H-bond',
            'H2O: H-O bonds → can H-bond; CH3OH: H-O bonds → can H-bond'
        ],
        helper: 'H-bonding: H must be bonded to N, O, or F (highly electronegative)',
        realWorldContext: 'Hydrogen bonding criteria'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Solubility and IMF',
        problem: 'Explain why ethanol (C2H5OH) dissolves in water but hexane (C6H14) does not.',
        parameters: { solvent: 'water', solutes: ['ethanol', 'hexane'], explainSolubility: true },
        type: 'intermolecular_forces',
        subparts: [
            '"Like dissolves like" principle',
            'Ethanol has -OH group → can H-bond with water → soluble',
            'Hexane is nonpolar (only London forces) → cannot H-bond',
            'Hexane cannot overcome water\'s H-bonding network → insoluble'
        ],
        helper: 'Solubility: "Like dissolves like"; Polar dissolves polar, nonpolar dissolves nonpolar',
        realWorldContext: '"Like dissolves like" principle'
    });

    return relatedProblems;
}

// === STATES OF MATTER & PARTICLE THEORY ===

generateRelatedStatesOfMatter(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Particle Arrangement',
        problem: 'Describe particle arrangement and motion in solid, liquid, and gas states.',
        parameters: { compareAllStates: true, describeParticles: true },
        type: 'states_of_matter',
        subparts: [
            'Solid: particles in fixed positions, vibrate in place, closely packed',
            'Liquid: particles close together, slide past each other, more kinetic energy',
            'Gas: particles far apart, move randomly and rapidly, highest kinetic energy',
            'Trend: solid < liquid < gas in terms of particle motion and energy'
        ],
        helper: 'KE: Solid (vibrate) < Liquid (slide) < Gas (free movement)',
        realWorldContext: 'Kinetic molecular theory'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'State Identification',
        problem: 'A substance has fixed volume but takes shape of container. What state?',
        parameters: { properties: 'fixed volume, variable shape', identifyState: true },
        type: 'states_of_matter',
        subparts: [
            'Fixed volume means incompressible (particles close)',
            'Variable shape means particles can move',
            'This combination describes a liquid',
            'Liquids conform to container shape but maintain constant volume'
        ],
        helper: 'Solid: fixed shape & volume; Liquid: fixed volume, variable shape; Gas: both variable',
        realWorldContext: 'Properties of matter states'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Plasma State',
        problem: 'Describe plasma state. Give examples and explain ionization.',
        parameters: { state: 'plasma', explainProperties: true, giveExamples: true },
        type: 'states_of_matter',
        subparts: [
            'Plasma: ionized gas with free electrons and ions',
            'Formed at very high temperatures (electrons stripped from atoms)',
            'Conducts electricity (unlike regular gases)',
            'Examples: stars (sun), lightning, neon signs, flames'
        ],
        helper: 'Plasma: 4th state, ionized gas, high energy, conducts electricity',
        realWorldContext: 'Fourth state of matter'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Density Comparison',
        problem: 'Why is ice less dense than liquid water? (Explain molecular structure)',
        parameters: { substance: 'water', anomaly: 'ice floats', explainMolecular: true },
        type: 'states_of_matter',
        subparts: [
            'Water forms hydrogen bonds',
            'In ice: H-bonds create hexagonal crystal structure with spaces',
            'In liquid: H-bonds constantly break/reform, molecules closer',
            'Ice structure is more open → lower density → ice floats'
        ],
        helper: 'Ice: H-bonded hexagonal structure with open spaces → less dense than liquid',
        realWorldContext: 'Water density anomaly'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Supercritical Fluids',
        problem: 'What is supercritical CO2? Properties and applications?',
        parameters: { concept: 'supercritical fluid', substance: 'CO2', explainAndApply: true },
        type: 'states_of_matter',
        subparts: [
            'Above critical temperature and pressure: no distinct liquid/gas phases',
            'Supercritical CO2: T > 31°C, P > 73 atm',
            'Properties: diffuses like gas, dissolves like liquid',
            'Applications: decaffeination, dry cleaning, extraction'
        ],
        helper: 'Supercritical: T > Tc and P > Pc; Hybrid properties of gas and liquid',
        realWorldContext: 'Advanced states of matter'
    });

    return relatedProblems;
}

generateRelatedPhaseChanges(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Heating Curve',
        problem: 'Ice at -20°C heated to steam at 120°C. Sketch heating curve and label phases.',
        parameters: { substance: 'water', startTemp: -20, endTemp: 120, drawHeatingCurve: true },
        type: 'phase_changes',
        subparts: [
            'Segment 1: ice warms -20°C to 0°C (slope)',
            'Segment 2: melting at 0°C (horizontal plateau)',
            'Segment 3: liquid water warms 0°C to 100°C (slope)',
            'Segment 4: boiling at 100°C (horizontal); Segment 5: steam warms above 100°C'
        ],
        helper: 'Heating curve: slopes = temp change; plateaus = phase change (constant T)',
        realWorldContext: 'Water heating curve'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Endothermic vs Exothermic',
        problem: 'Is condensation endothermic or exothermic? Explain.',
        parameters: { phaseChange: 'condensation', identifyEnergyChange: true },
        type: 'phase_changes',
        subparts: [
            'Condensation: gas → liquid',
            'Particles slow down and come closer together',
            'Energy is released as particles lose kinetic energy',
            'Exothermic process (ΔH < 0)'
        ],
        helper: 'Energy: Melting/vaporization/sublimation = endo (+); Freezing/condensation/deposition = exo (-)',
        realWorldContext: 'Energy in phase transitions'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Heat Calculation',
        problem: 'Heat needed to convert 50g ice at 0°C to water at 0°C. (ΔHfus = 334 J/g)',
        parameters: { mass: 50, phaseChange: 'melting', heatOfFusion: 334, calculateEnergy: true },
        type: 'phase_changes',
        subparts: [
            'Phase change at constant temperature (0°C)',
            'Use formula: q = m × ΔHfus',
            'Calculate: q = 50 g × 334 J/g',
            'q = 16,700 J = 16.7 kJ (energy absorbed)'
        ],
        helper: 'formula: q = m × ΔHfus (fusion) or q = m × ΔHvap (vaporization)',
        realWorldContext: 'Latent heat of fusion'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sublimation',
        problem: 'Dry ice (solid CO2) sublimates. Explain and give another example.',
        parameters: { substance: 'CO2', phaseChange: 'sublimation', explainAndGiveExamples: true },
        type: 'phase_changes',
        subparts: [
            'Sublimation: solid → gas (skips liquid phase)',
            'Dry ice at room temp and pressure directly becomes gas',
            'Other examples: iodine crystals, naphthalene (mothballs)',
            'Occurs when vapor pressure > atmospheric pressure below melting point'
        ],
        helper: 'Sublimation: solid → gas; Examples: dry ice, iodine, snow in freezer',
        realWorldContext: 'Direct solid-to-gas transition'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Phase Diagram',
        problem: 'Interpret water phase diagram: triple point, critical point, phase boundaries.',
        parameters: { substance: 'water', interpretPhaseDiagram: true, labelKeyPoints: true },
        type: 'phase_changes',
        subparts: [
            'Triple point: all 3 phases coexist (0.01°C, 0.006 atm for water)',
            'Critical point: above this, no distinct liquid/gas (374°C, 218 atm)',
            'Phase boundaries: solid-liquid, liquid-gas, solid-gas',
            'Water anomaly: solid-liquid line has negative slope (ice melts under pressure)'
        ],
        helper: 'Phase diagram: Triple point (3 phases), Critical point (no phase distinction)',
        realWorldContext: 'Phase equilibrium diagrams'
    });

    return relatedProblems;
}

generateRelatedGasLaws(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Boyle\'s Law',
        problem: 'Gas at 2.0 atm in 5.0 L. Pressure at 10.0 L (constant T)?',
        parameters: { P1: 2.0, V1: 5.0, V2: 10.0, law: 'Boyle', findP2: true },
        type: 'gas_laws',
        subparts: [
            'State Boyle\'s Law: P₁V₁ = P₂V₂ (constant T, n)',
            'Substitute values: (2.0)(5.0) = P₂(10.0)',
            'Solve: P₂ = 10.0/10.0 = 1.0 atm',
            'Pressure decreased as volume increased (inverse relationship)'
        ],
        helper: 'Boyle\'s Law: P₁V₁ = P₂V₂; Inverse relationship at constant T',
        realWorldContext: 'Pressure-volume relationship'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Charles\' Law',
        problem: 'Gas at 300 K occupies 2.0 L. Volume at 600 K (constant P)?',
        parameters: { T1: 300, V1: 2.0, T2: 600, law: 'Charles', findV2: true },
        type: 'gas_laws',
        subparts: [
            'State Charles\' Law: V₁/T₁ = V₂/T₂ (constant P, n)',
            'Substitute: 2.0/300 = V₂/600',
            'Solve: V₂ = (2.0 × 600)/300 = 4.0 L',
            'Volume doubled as temperature doubled (direct relationship)'
        ],
        helper: 'Charles\' Law: V₁/T₁ = V₂/T₂; Direct relationship at constant P; T in Kelvin!',
        realWorldContext: 'Temperature-volume relationship'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combined Gas Law',
        problem: 'Gas: 1.5 atm, 300 K, 4.0 L → 2.0 atm, 450 K, ? L',
        parameters: { P1: 1.5, T1: 300, V1: 4.0, P2: 2.0, T2: 450, findV2: true },
        type: 'gas_laws',
        subparts: [
            'Combined Gas Law: (P₁V₁)/T₁ = (P₂V₂)/T₂',
            'Substitute: (1.5 × 4.0)/300 = (2.0 × V₂)/450',
            'Solve: V₂ = (1.5 × 4.0 × 450)/(300 × 2.0)',
            'V₂ = 4.5 L'
        ],
        helper: 'Combined: (P₁V₁)/T₁ = (P₂V₂)/T₂; All three variables change',
        realWorldContext: 'Multiple variable changes'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ideal Gas Law',
        problem: '0.5 mol gas at 298 K, 1.0 atm. Calculate volume. (R = 0.0821 L·atm/mol·K)',
        parameters: { n: 0.5, T: 298, P: 1.0, R: 0.0821, findV: true },
        type: 'gas_laws',
        subparts: [
            'Ideal Gas Law: PV = nRT',
            'Rearrange: V = nRT/P',
            'Substitute: V = (0.5 × 0.0821 × 298)/1.0',
            'V = 12.2 L'
        ],
        helper: 'Ideal Gas: PV = nRT; R = 0.0821 L·atm/(mol·K)',
        realWorldContext: 'Ideal gas equation application'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Gas Density',
        problem: 'Calculate density of CO2 at STP using ideal gas law.',
        parameters: { gas: 'CO2', conditions: 'STP', calculateDensity: true },
        type: 'gas_laws',
        subparts: [
            'At STP: 1 mole occupies 22.4 L',
            'Molar mass CO2 = 44 g/mol',
            'Density = mass/volume = 44 g / 22.4 L',
            'Density = 1.96 g/L'
        ],
        helper: 'Density = M/Vm where M = molar mass, Vm = molar volume (22.4 L at STP)',
        realWorldContext: 'Molar mass and gas density'
    });

    return relatedProblems;
}

generateRelatedKineticMolecularTheory(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'KMT Postulates',
        problem: 'State the 5 main postulates of kinetic molecular theory.',
        parameters: { concept: 'KMT postulates', listAndExplain: true },
        type: 'kinetic_molecular_theory',
        subparts: [
            '1) Gas particles are in constant random motion',
            '2) Particle volume is negligible compared to container volume',
            '3) No attractive/repulsive forces between particles',
            '4) Collisions are perfectly elastic; 5) Average KE ∝ absolute temperature'
        ],
        helper: 'KMT: constant motion, negligible volume, no forces, elastic collisions, KE ∝ T',
        realWorldContext: 'Theoretical foundation of gas behavior'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Temperature and KE',
        problem: 'How does increasing temperature affect average kinetic energy of gas molecules?',
        parameters: { variable: 'temperature', effect: 'kinetic energy', explainRelationship: true },
        type: 'kinetic_molecular_theory',
        subparts: [
            'KE is directly proportional to absolute temperature (Kelvin)',
            'KE = (3/2)kT where k = Boltzmann constant',
            'Higher T → higher average KE',
            'Molecules move faster at higher temperatures'
        ],
        helper: 'KE ∝ T (Kelvin); KE = (3/2)kT; Higher T → faster molecules',
        realWorldContext: 'Temperature-energy relationship'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Root Mean Square Speed',
        problem: 'Calculate rms speed of O2 at 298 K. (urms = √(3RT/M))',
        parameters: { gas: 'O2', temperature: 298, calculateRMS: true },
        type: 'kinetic_molecular_theory',
        subparts: [
            'Formula: urms = √(3RT/M)',
            'R = 8.314 J/(mol·K), M = 0.032 kg/mol (in kg!)',
            'urms = √(3 × 8.314 × 298 / 0.032)',
            'urms = 482 m/s'
        ],
        helper: 'formula: urms = √(3RT/M); R = 8.314 J/(mol·K); M in kg/mol',
        realWorldContext: 'Molecular speeds in gases'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Real vs Ideal Gases',
        problem: 'Under what conditions do real gases deviate from ideal behavior?',
        parameters: { concept: 'real gas deviations', identifyConditions: true },
        type: 'kinetic_molecular_theory',
        subparts: [
            'High pressure: molecules closer together (volume significant)',
            'Low temperature: molecules slower (attractive forces significant)',
            'Polar molecules: stronger intermolecular forces',
            'Large molecules: greater volume and surface area'
        ],
        helper: 'Real gas deviations: high P (volume matters), low T (forces matter)',
        realWorldContext: 'Limitations of ideal gas model'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Graham\'s Law',
        problem: 'Rate of effusion: He vs O2. Calculate ratio. (M_He = 4, M_O2 = 32)',
        parameters: { gas1: 'He', gas2: 'O2', molarMasses: { He: 4, O2: 32 }, calculateRatio: true },
        type: 'kinetic_molecular_theory',
        subparts: [
            'Graham\'s Law: rate₁/rate₂ = √(M₂/M₁)',
            'Lighter gas effuses faster',
            'rate(He)/rate(O2) = √(32/4) = √8',
            'Ratio = 2.83:1 (He effuses 2.83 times faster)'
        ],
        helper: 'Graham\'s: rate₁/rate₂ = √(M₂/M₁); Lighter molecules move faster',
        realWorldContext: 'Gas effusion and diffusion'
    });

    return relatedProblems;
}

// === NUCLEAR CHEMISTRY ===

generateRelatedRadioactiveDecay(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alpha Decay',
        problem: 'Uranium-238 undergoes alpha decay. Write nuclear equation.',
        parameters: { isotope: '238-U', decayType: 'alpha', writeEquation: true },
        type: 'radioactive_decay',
        subparts: [
            'Alpha particle: ⁴₂He (2 protons, 2 neutrons)',
            'U loses 4 mass units, 2 atomic number',
            'Mass: 238 - 4 = 234; Atomic #: 92 - 2 = 90 (Th)',
            'Equation: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He'
        ],
        helper: 'Alpha decay: ⁴₂He emitted; Mass -4, Atomic # -2',
        realWorldContext: 'Uranium decay series'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Identify Decay Type',
        problem: '¹⁴₆C → ¹⁴₇N + ⁰₋₁e. What type of decay?',
        parameters: { equation: 'C-14 → N-14 + electron', identifyDecayType: true },
        type: 'radioactive_decay',
        subparts: [
            'Particle emitted: ⁰₋₁e (beta particle/electron)',
            'Mass number unchanged (14 → 14)',
            'Atomic number increased by 1 (6 → 7)',
            'This is beta-minus (β⁻) decay'
        ],
        helper: 'Beta-minus: ⁰₋₁e emitted; Mass same, Atomic # +1',
        realWorldContext: 'Carbon-14 dating'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Beta-Plus Decay',
        problem: '¹¹₆C undergoes β⁺ decay (positron emission). Write equation.',
        parameters: { isotope: 'C-11', decayType: 'beta-plus', writeEquation: true },
        type: 'radioactive_decay',
        subparts: [
            'Positron: ⁰₊₁e (positive electron)',
            'Proton converts to neutron',
            'Mass unchanged: 11; Atomic # decreases: 6 - 1 = 5 (B)',
            'Equation: ¹¹₆C → ¹¹₅B + ⁰₊₁e'
        ],
        helper: 'Beta-plus: ⁰₊₁e (positron) emitted; Mass same, Atomic # -1',
        realWorldContext: 'PET scan isotopes'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Gamma Emission',
        problem: 'After alpha decay, ²³⁴Th is in excited state. Emits gamma ray. Does mass or charge change?',
        parameters: { isotope: 'Th-234', decayType: 'gamma', analyzeChanges: true },
        type: 'radioactive_decay',
        subparts: [
            'Gamma ray: ⁰₀γ (high-energy photon)',
            'No particles emitted, only energy',
            'Mass number unchanged',
            'Atomic number unchanged; nucleus goes to lower energy state'
        ],
        helper: 'Gamma: ⁰₀γ emitted; No change in mass or atomic number',
        realWorldContext: 'Nuclear energy levels'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Decay Series',
        problem: '²³⁸U → ²³⁴Th → ²³⁴Pa → ²³⁴U. Identify each decay type.',
        parameters: { decaySeries: ['U-238', 'Th-234', 'Pa-234', 'U-234'], identifyEachStep: true },
        type: 'radioactive_decay',
        subparts: [
            'U-238 → Th-234: mass -4, Z -2 → alpha decay',
            'Th-234 → Pa-234: mass same, Z +1 → beta-minus decay',
            'Pa-234 → U-234: mass same, Z -1 → beta-plus decay',
            'Complete series leads eventually to stable Pb-206'
        ],
        helper: 'Track changes: ΔMass and ΔZ determine decay type',
        realWorldContext: 'Natural decay chains'
    });

    return relatedProblems;
}

generateRelatedNuclearEquations(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Balance Nuclear Equation',
        problem: '²³⁵U + ¹n → ? + ⁹⁰Sr + 3¹n (fission)',
        parameters: { equation: 'U-235 + n → ? + Sr-90 + 3n', balanceEquation: true },
        type: 'nuclear_equations',
        subparts: [
            'Balance mass: 235 + 1 = A + 90 + 3(1), so A = 143',
            'Balance atomic number: 92 + 0 = Z + 38 + 0, so Z = 54',
            'Element with Z = 54 is Xe (xenon)',
            'Answer: ¹⁴³₅₄Xe'
        ],
        helper: 'Balance: Total mass (top) and total atomic # (bottom) on both sides',
        realWorldContext: 'Nuclear fission'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Complete the Equation',
        problem: '²⁷₁₃Al + ⁴₂He → ? + ¹₀n',
        parameters: { equation: 'Al-27 + He-4 → ? + n', findProduct: true },
        type: 'nuclear_equations',
        subparts: [
            'Balance mass: 27 + 4 = A + 1, so A = 30',
            'Balance atomic #: 13 + 2 = Z + 0, so Z = 15',
            'Element Z = 15 is P (phosphorus)',
            'Product: ³⁰₁₅P'
        ],
        helper: 'Conservation: mass number and atomic number must balance',
        realWorldContext: 'Nuclear bombardment'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Fusion Equation',
        problem: '²H + ³H → ⁴He + ?. Complete and calculate energy released.',
        parameters: { equation: 'H-2 + H-3 → He-4 + ?', fusion: true, calculateEnergy: true },
        type: 'nuclear_equations',
        subparts: [
            'Balance mass: 2 + 3 = 4 + A, so A = 1',
            'Balance Z: 1 + 1 = 2 + Z, so Z = 0',
            'Particle: ¹₀n (neutron)',
            'Energy from E = mc² using mass defect'
        ],
        helper: 'Fusion: Light nuclei combine; Releases energy; ²H + ³H → ⁴He + ¹n',
        realWorldContext: 'Nuclear fusion in stars'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Neutron Capture',
        problem: '²³⁸U + ¹n → ? (forms next heavier isotope)',
        parameters: { reactant: 'U-238', capture: 'neutron', findProduct: true },
        type: 'nuclear_equations',
        subparts: [
            'Neutron has no charge, mass = 1',
            'Mass increases: 238 + 1 = 239',
            'Atomic number unchanged: 92',
            'Product: ²³⁹₉₂U (Uranium-239)'
        ],
        helper: 'Neutron capture: ¹₀n absorbed; Mass +1, Z unchanged',
        realWorldContext: 'Breeder reactor reactions'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Transmutation',
        problem: 'Nitrogen bombarded with alpha particles produces oxygen and proton. Write equation.',
        parameters: { target: 'N-14', projectile: 'alpha', products: ['O-17', 'proton'], writeEquation: true },
        type: 'nuclear_equations',
        subparts: [
            'Reactants: ¹⁴₇N + ⁴₂He',
            'Products: ¹⁷₈O + ¹₁H',
            'Check balance: Mass: 14+4=17+1 ✓; Z: 7+2=8+1 ✓',
            'Equation: ¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H'
        ],
        helper: 'Transmutation: One element converts to another via nuclear reaction',
        realWorldContext: 'Artificial transmutation'
    });

    return relatedProblems;
}

generateRelatedHalfLife(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Half-Life Calculation',
        problem: 'C-14 half-life = 5730 years. After 11,460 years, what fraction remains?',
        parameters: { isotope: 'C-14', halfLife: 5730, time: 11460, findFraction: true },
        type: 'half_life',
        subparts: [
            'Calculate number of half-lives: n = time/t₁/₂',
            'n = 11,460/5730 = 2 half-lives',
            'Fraction remaining = (1/2)ⁿ = (1/2)² = 1/4',
            'Answer: 1/4 or 25% remains'
        ],
        helper: 'Fraction remaining = (1/2)ⁿ where n = time/half-life',
        realWorldContext: 'Radiocarbon dating'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Half-Life',
        problem: '100g of isotope with t½ = 10 days. How much remains after 30 days?',
        parameters: { initialAmount: 100, halfLife: 10, time: 30, findRemaining: true },
        type: 'half_life',
        subparts: [
            'Number of half-lives: n = 30/10 = 3',
            'After each half-life, amount halves',
            'After 1: 50g; After 2: 25g; After 3: 12.5g',
            'Answer: 12.5 g remains'
        ],
        helper: 'After n half-lives: Amount = Initial × (1/2)ⁿ',
        realWorldContext: 'Radioactive decay calculation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Age Determination',
        problem: 'Fossil has 6.25% of original C-14. Age of fossil? (t½ = 5730 years)',
        parameters: { percentRemaining: 6.25, halfLife: 5730, findAge: true },
        type: 'half_life',
        subparts: [
            '6.25% = 0.0625 = (1/2)ⁿ',
            'Solve: 0.0625 = 1/16 = (1/2)⁴',
            'So n = 4 half-lives',
            'Age = 4 × 5730 = 22,920 years'
        ],
        helper: 'Find n from: (1/2)ⁿ = fraction remaining; Age = n × t₁/₂',
        realWorldContext: 'Archaeological dating'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'First-Order Kinetics',
        problem: 'Derive relationship: N = N₀(1/2)^(t/t½) from first-order kinetics.',
        parameters: { derivation: 'half-life equation', showSteps: true },
        type: 'half_life',
        subparts: [
            'First-order: ln(N/N₀) = -kt',
            'At t = t₁/₂: N = N₀/2, so ln(1/2) = -kt₁/₂',
            'Therefore: k = ln(2)/t₁/₂',
            'Substitute: N = N₀e^(-kt) = N₀(1/2)^(t/t₁/₂)'
        ],
        helper: 'Radioactive decay follows first-order kinetics',
        realWorldContext: 'Mathematical basis of decay'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Decay Constant',
        problem: 'I-131 t½ = 8 days. Calculate decay constant λ. (λ = ln(2)/t½)',
        parameters: { isotope: 'I-131', halfLife: 8, calculateDecayConstant: true },
        type: 'half_life',
        subparts: [
            'Formula: λ = ln(2)/t₁/₂',
            'λ = 0.693/8 days',
            'λ = 0.0866 day⁻¹',
            'This means 8.66% decays per day'
        ],
        helper: 'Decay constant: λ = 0.693/t₁/₂; Units: (time)⁻¹',
        realWorldContext: 'Medical isotope calculations'
    });

    return relatedProblems;
}

generateRelatedNuclearReactions(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Fission vs Fusion',
        problem: 'Compare nuclear fission and fusion: mass change, products, energy release.',
        parameters: { compareReactionTypes: ['fission', 'fusion'], analyzeAll: true },
        type: 'nuclear_reactions',
        subparts: [
            'Fission: heavy nucleus splits → 2 medium nuclei + neutrons',
            'Fusion: light nuclei combine → heavier nucleus',
            'Both: mass decreases (mass defect → energy via E=mc²)',
            'Fusion releases more energy per nucleon; Fission easier to achieve on Earth'
        ],
        helper: 'Fission: heavy splits; Fusion: light combines; Both release energy',
        realWorldContext: 'Nuclear energy sources'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Chain Reaction',
        problem: 'Explain why U-235 fission can sustain chain reaction.',
        parameters: { isotope: 'U-235', concept: 'chain reaction', explain: true },
        type: 'nuclear_reactions',
        subparts: [
            'Each fission releases 2-3 neutrons',
            'These neutrons can cause more fissions',
            'If ≥1 neutron causes another fission, reaction sustains itself',
            'Critical mass needed to prevent neutron escape'
        ],
        helper: 'Chain reaction: Each fission produces neutrons that cause more fissions',
        realWorldContext: 'Nuclear reactor principles'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Mass-Energy Equivalence',
        problem: 'In fusion: ²H + ³H → ⁴He + ¹n. Mass defect = 0.019 amu. Energy released? (E=mc²)',
        parameters: { reaction: 'D-T fusion', massDefect: 0.019, calculateEnergy: true },
        type: 'nuclear_reactions',
        subparts: [
            'Convert amu to kg: 0.019 amu × 1.66×10⁻²⁷ kg/amu',
            'Δm = 3.15×10⁻²⁹ kg',
            'E = mc² = (3.15×10⁻²⁹)(3×10⁸)²',
            'E = 2.84×10⁻¹² J = 17.7 MeV per reaction'
        ],
        helper: 'E = mc²; 1 amu = 931.5 MeV; Mass defect → energy',
        realWorldContext: 'Einstein\'s equation in nuclear reactions'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Critical Mass',
        problem: 'What is critical mass? Why is it necessary for nuclear weapons?',
        parameters: { concept: 'critical mass', explainImportance: true },
        type: 'nuclear_reactions',
        subparts: [
            'Critical mass: minimum amount needed for sustained chain reaction',
            'Below critical: too many neutrons escape (surface area/volume ratio)',
            'At critical: exactly one neutron per fission causes another fission',
            'Weapons need supercritical mass for rapid, uncontrolled reaction'
        ],
        helper: 'Critical mass: minimum amount for self-sustaining chain reaction',
        realWorldContext: 'Nuclear chain reaction control'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Binding Energy',
        problem: 'Calculate binding energy per nucleon for Fe-56. Is it highly stable?',
        parameters: { isotope: 'Fe-56', calculateBindingEnergy: true, assessStability: true },
        type: 'nuclear_reactions',
        subparts: [
            'Fe-56: 26 protons, 30 neutrons',
            'Mass defect = (26mp + 30mn) - actual mass',
            'Binding energy from E = Δmc²',
            'BE/nucleon ≈ 8.8 MeV (peak of curve → most stable nucleus)'
        ],
        helper: 'Binding energy per nucleon: measure of stability; Fe-56 has maximum',
        realWorldContext: 'Nuclear stability'
    });

    return relatedProblems;
}

// === LABORATORY CHEMISTRY ===

generateRelatedLabSafety(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Acid Spill Response',
        problem: 'Concentrated HCl spilled on bench. Describe proper cleanup procedure.',
        parameters: { hazard: 'acid spill', chemical: 'HCl', describeProcedure: true },
        type: 'lab_safety',
        subparts: [
            'Alert others and ensure area is ventilated',
            'Wear appropriate PPE (goggles, gloves, lab coat)',
            'Neutralize with sodium bicarbonate or neutralizing agent',
            'Clean with absorbent material, dispose as hazardous waste'
        ],
        helper: 'Acid spill: Alert, ventilate, PPE, neutralize, clean, dispose properly',
        realWorldContext: 'Chemical spill management'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic PPE',
        problem: 'List essential personal protective equipment (PPE) for chemistry lab.',
        parameters: { concept: 'PPE', listAndExplain: true },
        type: 'lab_safety',
        subparts: [
            'Safety goggles (protect eyes from splashes)',
            'Lab coat (protect skin and clothing)',
            'Gloves (nitrile or latex for chemical resistance)',
            'Closed-toe shoes (protect feet from spills/dropped items)'
        ],
        helper: 'Minimum PPE: Goggles, lab coat, gloves, closed shoes',
        realWorldContext: 'Laboratory safety basics'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Chemical Compatibility',
        problem: 'Why should acids and bases be stored separately? What about oxidizers and reducers?',
        parameters: { concept: 'chemical storage', explainIncompatibilities: true },
        type: 'lab_safety',
        subparts: [
            'Acids + bases → violent exothermic reaction, heat, spattering',
            'Oxidizers + reducers → fire/explosion risk',
            'Incompatible chemicals should be segregated by hazard class',
            'Use secondary containment to prevent mixing if spilled'
        ],
        helper: 'Incompatibles: Acids/bases separate; Oxidizers/reducers separate; Flammables away from heat',
        realWorldContext: 'Safe chemical storage'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Fire Safety',
        problem: 'Ethanol catches fire in lab. Which fire extinguisher type? Water appropriate?',
        parameters: { hazard: 'flammable liquid fire', chemical: 'ethanol', selectExtinguisher: true },
        type: 'lab_safety',
        subparts: [
            'Ethanol = Class B fire (flammable liquid)',
            'Use CO2 or dry chemical extinguisher',
            'DO NOT use water (spreads fire, ethanol is miscible)',
            'If small, smother with fire blanket or watch glass'
        ],
        helper: 'Fire classes: A (ordinary), B (flammable liquid), C (electrical), D (metal)',
        realWorldContext: 'Laboratory fire response'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Waste Disposal',
        problem: 'Proper disposal methods: (1) chromium waste, (2) broken thermometer, (3) organic solvents.',
        parameters: { wastes: ['heavy metal', 'mercury', 'organic solvent'], describeDisposal: true },
        type: 'lab_safety',
        subparts: [
            'Chromium: heavy metal waste container (toxic, regulated)',
            'Mercury thermometer: special mercury waste container (highly toxic)',
            'Organic solvents: halogenated vs non-halogenated waste containers',
            'Never pour hazardous waste down drain or in regular trash'
        ],
        helper: 'Waste disposal: Segregate by type; Use designated containers; Follow regulations',
        realWorldContext: 'Hazardous waste management'
    });

    return relatedProblems;
}

generateRelatedLabApparatus(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Choosing Apparatus',
        problem: 'Prepare exactly 250.0 mL of 0.100 M NaCl. Which glassware?',
        parameters: { task: 'prepare precise solution', volume: 250, selectApparatus: true },
        type: 'lab_apparatus',
        subparts: [
            'Need precise volume: use 250 mL volumetric flask',
            'Weigh NaCl on analytical balance',
            'Dissolve in water, transfer to volumetric flask',
            'Fill to mark with water (bottom of meniscus at mark)'
        ],
        helper: 'Precise volume: volumetric flask; Precise mass: analytical balance',
        realWorldContext: 'Solution preparation'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Apparatus Functions',
        problem: 'What is difference between beaker and Erlenmeyer flask? When to use each?',
        parameters: { compare: ['beaker', 'Erlenmeyer flask'], explainUses: true },
        type: 'lab_apparatus',
        subparts: [
            'Beaker: cylindrical, flat bottom, for holding/mixing',
            'Erlenmeyer: conical, narrow neck, for mixing/heating',
            'Beaker: easier to pour, stir; Erlenmeyer: less spillage when swirling',
            'Erlenmeyer better for titrations (can swirl without splashing)'
        ],
        helper: 'Beaker: holding; Erlenmeyer: mixing/heating/titrating',
        realWorldContext: 'Basic glassware selection'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Precision and Accuracy',
        problem: 'Rank by precision: graduated cylinder, beaker, volumetric flask, burette. Explain.',
        parameters: { apparatus: ['graduated cylinder', 'beaker', 'volumetric flask', 'burette'], rankPrecision: true },
        type: 'lab_apparatus',
        subparts: [
            'Least precise: beaker (±5%)',
            'Graduated cylinder (±1%)',
            'Volumetric flask (±0.1%)',
            'Most precise: burette (±0.05%); used for drop-by-drop delivery'
        ],
        helper: 'Precision ranking: Burette > Vol. flask > Grad. cylinder > Beaker',
        realWorldContext: 'Measurement precision in lab'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Titration Setup',
        problem: 'Describe proper setup for acid-base titration. Which apparatus needed?',
        parameters: { experiment: 'acid-base titration', listApparatus: true, describeSetup: true },
        type: 'lab_apparatus',
        subparts: [
            'Burette (for titrant - base), clamp, ring stand',
            'Erlenmeyer flask (for analyte - acid) with indicator',
            'Pipette or volumetric flask (precise volume of analyte)',
            'White tile under flask (see color change clearly)'
        ],
        helper: 'Titration: Burette (titrant), Erlenmeyer (sample), pipette (precise transfer)',
        realWorldContext: 'Titration equipment'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Apparatus Limitations',
        problem: 'Why use pipette instead of graduated cylinder for transferring 25.00 mL?',
        parameters: { compare: ['pipette', 'graduated cylinder'], explainPrecisionDifference: true },
        type: 'lab_apparatus',
        subparts: [
            'Pipette designed for single volume (25.00 mL) with high precision',
            'Graduated cylinder measures range of volumes (lower precision)',
            'Pipette: ±0.03 mL; Graduated cylinder: ±0.2 mL',
            'For analytical work requiring accuracy, use pipette'
        ],
        helper: 'TC (to contain): flask; TD (to deliver): pipette, burette; Pipette more precise',
        realWorldContext: 'Precision glassware selection'
    });

    return relatedProblems;
}

generateRelatedLabTechniques(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Filtration Setup',
        problem: 'Describe gravity filtration setup. When is vacuum filtration preferred?',
        parameters: { technique: 'filtration', compareTypes: ['gravity', 'vacuum'], describeSetup: true },
        type: 'lab_techniques',
        subparts: [
            'Gravity: filter paper in funnel, slow, for small amounts',
            'Vacuum: Büchner funnel, vacuum flask, faster',
            'Vacuum preferred for: larger volumes, fine precipitates',
            'Gravity better for: gelatinous precipitates (clog vacuum)'
        ],
        helper: 'Gravity: slow, gentle; Vacuum: fast, efficient for volumes',
        realWorldContext: 'Solid-liquid separation'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Dilution Technique',
        problem: 'Describe how to safely dilute concentrated H2SO4 with water.',
        parameters: { technique: 'acid dilution', chemical: 'H2SO4', describeProcedure: true },
        type: 'lab_techniques',
        subparts: [
            'Rule: "Add acid to water" NEVER reverse',
            'Add concentrated acid slowly to water (not water to acid)',
            'Swirl constantly to dissipate heat',
            'Exothermic: adding water to acid can cause violent boiling/spattering'
        ],
        helper: 'Safety: "Do as you oughta, add acid to water"; Never reverse!',
        realWorldContext: 'Safe dilution practices'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Recrystallization',
        problem: 'Purify impure benzoic acid by recrystallization. Describe complete procedure.',
        parameters: { technique: 'recrystallization', compound: 'benzoic acid', describeFullProcedure: true },
        type: 'lab_techniques',
        subparts: [
            '1) Dissolve impure solid in minimum hot solvent',
            '2) Filter hot to remove insoluble impurities',
            '3) Cool slowly to allow crystallization (pure crystals form)',
            '4) Filter, wash crystals, dry; Impurities stay in solution'
        ],
        helper: 'Recrystallization: Hot dissolve, filter hot, cool slowly, filter cold',
        realWorldContext: 'Solid purification method'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Distillation Types',
        problem: 'Compare simple distillation and fractional distillation. When to use each?',
        parameters: { technique: 'distillation', compareTypes: ['simple', 'fractional'], explainApplications: true },
        type: 'lab_techniques',
        subparts: [
            'Simple distillation: large boiling point difference (>25°C)',
            'Fractional distillation: small bp difference (<25°C), uses fractionating column',
            'Fractionating column provides multiple vaporization-condensation cycles',
            'Examples: Simple (water/salt), Fractional (ethanol/water, petroleum)'
        ],
        helper: 'Simple: Δbp > 25°C; Fractional: Δbp < 25°C (better separation)',
        realWorldContext: 'Liquid separation techniques'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Extraction',
        problem: 'Extract organic compound from aqueous solution using separatory funnel. Describe steps.',
        parameters: { technique: 'liquid-liquid extraction', apparatus: 'separatory funnel', describeSteps: true },
        type: 'lab_techniques',
        subparts: [
            '1) Add aqueous solution and organic solvent to sep funnel',
            '2) Stopper and shake (vent pressure frequently)',
            '3) Let layers separate (organic on top if less dense, bottom if more dense)',
            '4) Drain bottom layer, collect top layer; Repeat for better extraction'
        ],
        helper: 'Extraction: Mix, shake (vent!), separate layers, drain; "Like dissolves like"',
        realWorldContext: 'Solvent extraction'
    });

    return relatedProblems;
}

generateRelatedExperimentalDesign(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Controlled Experiment',
        problem: 'Design experiment to test effect of temperature on reaction rate. Identify variables.',
        parameters: { investigation: 'temperature vs rate', identifyVariables: true, designExperiment: true },
        type: 'experimental_design',
        subparts: [
            'Independent variable: temperature (what you change)',
            'Dependent variable: reaction rate (what you measure)',
            'Controlled variables: concentration, volume, catalyst, pressure',
            'Method: Run reaction at different temps, measure time for completion'
        ],
        helper: 'Independent (cause) → Dependent (effect); Control all other variables',
        realWorldContext: 'Kinetics investigation'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Variables',
        problem: 'Define: independent variable, dependent variable, controlled variables.',
        parameters: { concept: 'experimental variables', defineAll: true },
        type: 'experimental_design',
        subparts: [
            'Independent: variable you deliberately change/manipulate',
            'Dependent: variable that responds/changes as result',
            'Controlled: variables kept constant to ensure fair test',
            'Example: temp (indep) affects rate (dep), keep concentration constant (control)'
        ],
        helper: 'IV = cause (manipulated); DV = effect (measured); CV = kept constant',
        realWorldContext: 'Scientific method basics'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Error Analysis',
        problem: 'Measured concentration: 0.105 M (actual: 0.100 M). Calculate % error. Suggest sources.',
        parameters: { measured: 0.105, actual: 0.100, calculateError: true, identifySources: true },
        type: 'experimental_design',
        subparts: [
            '% error = |measured - actual|/actual × 100%',
            '% error = |0.105 - 0.100|/0.100 × 100% = 5%',
            'Possible sources: impure reagents, volumetric errors, incomplete dissolution',
            'Other sources: calibration errors, temperature effects, procedural mistakes'
        ],
        helper: '% error = |experimental - accepted|/accepted × 100%; Identify systematic/random errors',
        realWorldContext: 'Accuracy and precision'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Data Collection',
        problem: 'Investigating solubility vs temperature. How many trials? What data to record?',
        parameters: { investigation: 'solubility vs temperature', planDataCollection: true },
        type: 'experimental_design',
        subparts: [
            'Minimum 3 trials at each temperature (calculate average, assess precision)',
            'Record: temperature (°C), mass of solute dissolved (g), volume of solvent (mL)',
            'Calculate solubility (g/100 mL) for each trial',
            'Create data table and graph (temp vs solubility)'
        ],
        helper: 'Multiple trials: assess precision; Record raw data and calculate derived quantities',
        realWorldContext: 'Experimental planning'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Hypothesis Testing',
        problem: 'Hypothesis: "Increasing concentration increases reaction rate." Design experiment to test.',
        parameters: { hypothesis: 'concentration vs rate', designExperiment: true, predictResults: true },
        type: 'experimental_design',
        subparts: [
            'Independent variable: concentration (vary systematically)',
            'Dependent variable: rate (measure time or product formation)',
            'Method: React solutions of different concentrations, measure time',
            'Expected: higher concentration → faster rate (shorter time or more product)'
        ],
        helper: 'Test hypothesis: manipulate IV, measure DV, control other variables, analyze data',
        realWorldContext: 'Scientific investigation'
    });

    return relatedProblems;
}


// === ACID-BASE CHEMISTRY (Complete with subparts and helpers) ===

generateRelatedAcidBase(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Strong Acid-Strong Base',
        problem: '50 mL of 0.2 M HCl + 50 mL of 0.2 M NaOH. Final pH?',
        parameters: { acid: 'HCl', base: 'NaOH', acidVolume: 50, baseVolume: 50, acidMolarity: 0.2, baseMolarity: 0.2, findpH: true },
        type: 'acid_base_neutralization',
        subparts: [
            'Calculate moles: HCl = 0.05 L × 0.2 M = 0.01 mol; NaOH = 0.01 mol',
            'Reaction: HCl + NaOH → NaCl + H2O (1:1 ratio)',
            'Equal moles → complete neutralization',
            'pH = 7 (neutral solution, only NaCl present)'
        ],
        helper: 'Strong acid + strong base (equal amounts) → pH = 7',
        realWorldContext: 'Complete neutralization'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'pH of Strong Acid',
        problem: '0.01 M HCl solution. pH?',
        parameters: { compound: 'HCl', molarity: 0.01, findpH: true },
        type: 'acid_base_neutralization',
        subparts: [
            'HCl is strong acid (100% dissociation)',
            '[H⁺] = 0.01 M = 1 × 10⁻² M',
            'pH = -log[H⁺] = -log(0.01)',
            'pH = 2'
        ],
        helper: 'Strong acid: [H⁺] = concentration; pH = -log[H⁺]',
        realWorldContext: 'Strong acid pH'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Weak Acid Neutralization',
        problem: '100 mL of 0.1 M CH3COOH + 50 mL of 0.1 M NaOH. pH at equivalence point?',
        parameters: { acid: 'CH3COOH', base: 'NaOH', acidVolume: 100, baseVolume: 50, acidMolarity: 0.1, baseMolarity: 0.1, equivalencePoint: true, findpH: true },
        type: 'acid_base_neutralization',
        subparts: [
            'Moles acid: 0.01 mol; Moles base: 0.005 mol',
            'After reaction: 0.005 mol CH3COOH and 0.005 mol CH3COO⁻ remain',
            'This is a buffer (weak acid + conjugate base)',
            'Use Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])'
        ],
        helper: 'Weak acid + strong base (partial) → buffer; Use Henderson-Hasselbalch',
        realWorldContext: 'Weak acid titration'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Excess Acid',
        problem: '30 mL of 0.2 M HCl + 20 mL of 0.2 M NaOH. pH?',
        parameters: { acid: 'HCl', base: 'NaOH', acidVolume: 30, baseVolume: 20, acidMolarity: 0.2, baseMolarity: 0.2, excessAcid: true, findpH: true },
        type: 'acid_base_neutralization',
        subparts: [
            'Moles HCl: 0.03 × 0.2 = 0.006 mol; Moles NaOH: 0.02 × 0.2 = 0.004 mol',
            'After neutralization: 0.006 - 0.004 = 0.002 mol HCl remains',
            'Total volume: 50 mL = 0.05 L',
            '[H⁺] = 0.002/0.05 = 0.04 M; pH = -log(0.04) = 1.4'
        ],
        helper: 'Excess reagent: Calculate remaining moles, divide by total volume',
        realWorldContext: 'Excess reagent calculations'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Buffer at Equivalence',
        problem: 'Weak base-strong acid titration: equivalence point pH below 7',
        parameters: { base: 'NH3', acid: 'HCl', equivalencePoint: true, acidic: true, analyzepH: true },
        type: 'acid_base_neutralization',
        subparts: [
            'At equivalence: all NH3 converted to NH4⁺',
            'NH4⁺ is weak acid (conjugate acid of weak base)',
            'NH4⁺ + H2O ⇌ NH3 + H3O⁺',
            'Solution is acidic, pH < 7'
        ],
        helper: 'Weak base + strong acid at equivalence → conjugate acid → pH < 7',
        realWorldContext: 'Salt hydrolysis at equivalence point'
    });

    return relatedProblems;
}

generateRelatedpHCalculations(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Weak Acid pH',
        problem: 'pH of 0.1 M CH3COOH (Ka = 1.8×10⁻⁵)',
        parameters: { acid: 'CH3COOH', molarity: 0.1, Ka: 1.8e-5, findpH: true },
        type: 'ph_calculations',
        subparts: [
            'Set up ICE table: [H⁺] = [A⁻] = x, [HA] = 0.1 - x',
            'Ka = x²/(0.1 - x) ≈ x²/0.1 (assuming x << 0.1)',
            'x² = 1.8×10⁻⁵ × 0.1 = 1.8×10⁻⁶',
            'x = [H⁺] = 1.34×10⁻³ M; pH = -log(1.34×10⁻³) = 2.87'
        ],
        helper: 'Weak acid: Ka = [H⁺][A⁻]/[HA]; Use ICE table and approximation',
        realWorldContext: 'Weak acid ionization'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Strong Acid pH',
        problem: '0.001 M HCl. pH?',
        parameters: { compound: 'HCl', molarity: 0.001, findpH: true },
        type: 'ph_calculations',
        subparts: [
            'Strong acid: 100% dissociation',
            '[H⁺] = 0.001 M = 1×10⁻³ M',
            'pH = -log[H⁺] = -log(1×10⁻³)',
            'pH = 3'
        ],
        helper: 'Strong acid: [H⁺] = M; pH = -log[H⁺]',
        realWorldContext: 'Simple pH calculation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Weak Base pOH',
        problem: 'pOH of 0.05 M NH3 (Kb = 1.8×10⁻⁵). Find pH.',
        parameters: { base: 'NH3', molarity: 0.05, Kb: 1.8e-5, findpOH: true, findpH: true },
        type: 'ph_calculations',
        subparts: [
            'Kb = [NH4⁺][OH⁻]/[NH3] = x²/0.05',
            'x² = 1.8×10⁻⁵ × 0.05 = 9×10⁻⁷',
            'x = [OH⁻] = 9.49×10⁻⁴ M; pOH = 3.02',
            'pH = 14 - pOH = 14 - 3.02 = 10.98'
        ],
        helper: 'Weak base: Kb = [BH⁺][OH⁻]/[B]; pH + pOH = 14',
        realWorldContext: 'Base pH calculations'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Salt Hydrolysis pH',
        problem: 'pH of 0.1 M NaF (F⁻ is conjugate base, HF Ka = 3.5×10⁻⁴)',
        parameters: { salt: 'NaF', molarity: 0.1, conjugateBaseKa: 3.5e-4, findpH: true },
        type: 'ph_calculations',
        subparts: [
            'F⁻ is conjugate base of HF (weak acid)',
            'Kb = Kw/Ka = 1×10⁻¹⁴/(3.5×10⁻⁴) = 2.86×10⁻¹¹',
            'Kb = x²/0.1; x = [OH⁻] = 1.69×10⁻⁶ M',
            'pOH = 5.77; pH = 14 - 5.77 = 8.23'
        ],
        helper: 'Conjugate base: Kb = Kw/Ka; Calculate [OH⁻], then pH',
        realWorldContext: 'Salt hydrolysis'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Henderson-Hasselbalch',
        problem: 'pH of buffer with 0.1 M CH3COOH and 0.15 M NaCH3COO (Ka = 1.8×10⁻⁵)',
        parameters: { acid: 'CH3COOH', acidMolarity: 0.1, base: 'CH3COO-', baseMolarity: 0.15, Ka: 1.8e-5, useHenderson: true, findpH: true },
        type: 'ph_calculations',
        subparts: [
            'pKa = -log(1.8×10⁻⁵) = 4.74',
            'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])',
            'pH = 4.74 + log(0.15/0.1)',
            'pH = 4.74 + 0.18 = 4.92'
        ],
        helper: 'Buffer: pH = pKa + log([base]/[acid]); Henderson-Hasselbalch equation',
        realWorldContext: 'Buffer pH prediction'
    });

    return relatedProblems;
}

generateRelatedBuffers(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Buffer Capacity',
        problem: 'Buffer with 0.5 M CH3COOH/0.5 M CH3COONa. Add 0.01 mol HCl to 1 L. pH change?',
        parameters: { bufferType: 'acetate', acidConc: 0.5, baseConc: 0.5, volume: 1, addHCl: 0.01, findpHChange: true },
        type: 'buffers',
        subparts: [
            'Initial pH: pH = pKa + log(0.5/0.5) = pKa = 4.74',
            'After adding HCl: [HA] increases by 0.01, [A⁻] decreases by 0.01',
            'New: [HA] = 0.51 M, [A⁻] = 0.49 M',
            'New pH = 4.74 + log(0.49/0.51) = 4.72; ΔpH = 0.02'
        ],
        helper: 'Buffer: Added H⁺ reacts with A⁻; Added OH⁻ reacts with HA',
        realWorldContext: 'Buffer resistance to pH change'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Buffer Preparation',
        problem: 'Prepare buffer pH 4.7 using CH3COOH (Ka = 1.8×10⁻⁵). Molar ratio needed?',
        parameters: { acid: 'CH3COOH', targetpH: 4.7, Ka: 1.8e-5, findRatio: true },
        type: 'buffers',
        subparts: [
            'pKa = -log(1.8×10⁻⁵) = 4.74',
            'Henderson-Hasselbalch: 4.7 = 4.74 + log([A⁻]/[HA])',
            'log([A⁻]/[HA]) = 4.7 - 4.74 = -0.04',
            '[A⁻]/[HA] = 10⁻⁰·⁰⁴ = 0.91:1 (need more acid than base)'
        ],
        helper: 'Buffer design: pH = pKa + log([base]/[acid]); Solve for ratio',
        realWorldContext: 'Buffer design'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Buffer Range',
        problem: 'What is buffer range? When does buffer fail?',
        parameters: { concept: 'buffer_range', explain: true, limits: true },
        type: 'buffers',
        subparts: [
            'Buffer range: pKa ± 1 (effective buffering)',
            'Optimal: when [acid] ≈ [base] (pH ≈ pKa)',
            'Fails when: too much acid/base added (one component depleted)',
            'Also fails when: ratio [A⁻]/[HA] > 10 or < 0.1'
        ],
        helper: 'Buffer range: pKa ± 1; Best at pH = pKa',
        realWorldContext: 'Buffer limitations'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Adding Strong Base',
        problem: 'Same buffer as Problem 1. Add 0.01 mol NaOH to 1 L. pH change?',
        parameters: { bufferType: 'acetate', acidConc: 0.5, baseConc: 0.5, volume: 1, addNaOH: 0.01, findpHChange: true },
        type: 'buffers',
        subparts: [
            'Initial pH: 4.74',
            'OH⁻ reacts with HA: [HA] decreases by 0.01, [A⁻] increases by 0.01',
            'New: [HA] = 0.49 M, [A⁻] = 0.51 M',
            'New pH = 4.74 + log(0.51/0.49) = 4.76; ΔpH = 0.02'
        ],
        helper: 'Base addition: Removes HA, creates A⁻',
        realWorldContext: 'Buffer behavior with base addition'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polyprotic Buffers',
        problem: 'Design buffer using phosphoric acid (H3PO4). Three possible pH ranges?',
        parameters: { acid: 'H3PO4', polyprotic: true, bufferRanges: true },
        type: 'buffers',
        subparts: [
            'H3PO4 has three pKa values: pKa1 = 2.15, pKa2 = 7.20, pKa3 = 12.35',
            'Buffer 1: H3PO4/H2PO4⁻ (pH 1-3)',
            'Buffer 2: H2PO4⁻/HPO4²⁻ (pH 6-8, physiological)',
            'Buffer 3: HPO4²⁻/PO4³⁻ (pH 11-13)'
        ],
        helper: 'Polyprotic acids: Can create buffers at multiple pH ranges (each pKa)',
        realWorldContext: 'Polyprotic acid buffers'
    });

    return relatedProblems;
}

generateRelatedTitrations(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Acid Titration',
        problem: '25 mL unknown HCl requires 32.5 mL of 0.150 M NaOH. Molarity of HCl?',
        parameters: { unknownVolume: 25, unknownCompound: 'HCl', titrantVolume: 32.5, titrantMolarity: 0.150, titrantCompound: 'NaOH', findUnknownMolarity: true },
        type: 'titrations',
        subparts: [
            'Moles of NaOH used: 0.0325 L × 0.150 M = 0.004875 mol',
            'Reaction: HCl + NaOH → NaCl + H2O (1:1 ratio)',
            'Moles HCl = moles NaOH = 0.004875 mol',
            'Molarity HCl = 0.004875 mol / 0.025 L = 0.195 M'
        ],
        helper: 'M₁V₁ = M₂V₂ for 1:1 reactions; Calculate moles from known, use stoichiometry',
        realWorldContext: 'Acid-base titration analysis'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Equivalence Point',
        problem: 'At equivalence point: moles acid = moles base. Why?',
        parameters: { concept: 'equivalence_point', explain: true },
        type: 'titrations',
        subparts: [
            'Equivalence point: stoichiometric amounts have reacted',
            'All acid neutralized by base (or vice versa)',
            'For 1:1 reaction: moles acid = moles base',
            'Different from endpoint (indicator changes color)'
        ],
        helper: 'Equivalence: stoichiometric completion; Endpoint: indicator changes',
        realWorldContext: 'Titration theory'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Redox Titration',
        problem: '25 mL of 0.05 M Fe²⁺ titrated with 0.02 M KMnO4. Volume KMnO4 needed? (MnO4⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H2O)',
        parameters: { unknownCompound: 'Fe2+', unknownVolume: 25, unknownMolarity: 0.05, titrant: 'KMnO4', titrantMolarity: 0.02, redoxTitration: true, molRatio: 5, findTitrantVolume: true },
        type: 'titrations',
        subparts: [
            'Moles Fe²⁺: 0.025 L × 0.05 M = 0.00125 mol',
            'Mole ratio: 5 Fe²⁺ : 1 MnO4⁻',
            'Moles MnO4⁻ needed: 0.00125/5 = 0.00025 mol',
            'Volume MnO4⁻: 0.00025 mol / 0.02 M = 0.0125 L = 12.5 mL'
        ],
        helper: 'Redox titration: Use balanced equation for mole ratio',
        realWorldContext: 'Permanganate redox titration'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Titration Curve',
        problem: 'Sketch titration curve: weak acid + strong base',
        parameters: { acidType: 'weak', baseType: 'strong', sketchCurve: true, labelFeatures: true },
        type: 'titrations',
        subparts: [
            'Initial pH: weak acid (pH 3-6)',
            'Buffer region: gradual pH increase (before equivalence)',
            'Equivalence point: pH > 7 (conjugate base present)',
            'After equivalence: excess base, rapid pH increase'
        ],
        helper: 'Weak acid/strong base curve: starts low, buffer region, equiv > 7, steep rise after',
        realWorldContext: 'Titration curve features'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Back Titration',
        problem: 'Sample contains unknown acid. Excess NaOH added (0.1 M, 50 mL), then backtitrated with 0.05 M HCl (32.5 mL used). Find original acid amount.',
        parameters: { backTitration: true, excessBase: 0.1, baseVolume: 50, titrantAcid: 0.05, titrantVolume: 32.5, findOriginalAcidAmount: true },
        type: 'titrations',
        subparts: [
            'Moles NaOH added: 0.05 L × 0.1 M = 0.005 mol',
            'Moles HCl used in back titration: 0.0325 L × 0.05 M = 0.001625 mol',
            'Moles NaOH remaining = moles HCl = 0.001625 mol',
            'Moles of original acid = 0.005 - 0.001625 = 0.003375 mol'
        ],
        helper: 'Back titration: Excess reagent added, then titrate excess; Subtract to find original',
        realWorldContext: 'Back titration analysis'
    });

    return relatedProblems;
}

generateRelatedPolyproticAcids(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Phosphoric Acid Ionization',
        problem: 'H3PO4 → H⁺ + H2PO4⁻ (Ka1); H2PO4⁻ → H⁺ + HPO4²⁻ (Ka2); HPO4²⁻ → H⁺ + PO4³⁻ (Ka3)',
        parameters: { acid: 'H3PO4', Ka1: 7.5e-3, Ka2: 6.2e-8, Ka3: 2.2e-13, showAllIonizations: true },
        type: 'polyprotic_acids',
        subparts: [
            'Ka1 = 7.5×10⁻³ (first ionization, strongest)',
            'Ka2 = 6.2×10⁻⁸ (second ionization, weaker)',
            'Ka3 = 2.2×10⁻¹³ (third ionization, weakest)',
            'Each successive Ka is smaller (harder to remove H⁺ from negative ion)'
        ],
        helper: 'Polyprotic: Ka1 > Ka2 > Ka3; Each ionization weaker than previous',
        realWorldContext: 'Phosphoric acid system'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'First Ionization Dominance',
        problem: 'H3PO4 pH dominated by first ionization. pH of 0.1 M H3PO4?',
        parameters: { acid: 'H3PO4', molarity: 0.1, Ka1: 7.5e-3, findpH: true },
        type: 'polyprotic_acids',
        subparts: [
            'Ka1 >> Ka2, Ka3, so only first ionization matters for pH',
            'Ka1 = x²/0.1; 7.5×10⁻³ = x²/0.1',
            'x² = 7.5×10⁻⁴; x = 0.0274 M',
            'pH = -log(0.0274) = 1.56'
        ],
        helper: 'Polyprotic pH: Usually only first ionization matters (Ka1 >> Ka2)',
        realWorldContext: 'First ionization dominance'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Intermediate Form Ratio',
        problem: '[HPO4²⁻]/[H2PO4⁻] ratio at pH 7.21 (H2PO4⁻ Ka2 = 6.2×10⁻⁸)',
        parameters: { acid: 'H3PO4', pH: 7.21, Ka2: 6.2e-8, findRatio: true },
        type: 'polyprotic_acids',
        subparts: [
            'pKa2 = -log(6.2×10⁻⁸) = 7.21',
            'Henderson-Hasselbalch: pH = pKa2 + log([HPO4²⁻]/[H2PO4⁻])',
            '7.21 = 7.21 + log(ratio)',
            'Ratio = 1:1 (at pKa, concentrations are equal)'
        ],
        helper: 'At pH = pKa: [A⁻] = [HA] (ratio = 1)',
        realWorldContext: 'Intermediate species domination'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Triprotic Titration',
        problem: '50 mL of 0.1 M H3PO4 titrated with 0.1 M NaOH. Three equivalence points?',
        parameters: { acid: 'H3PO4', acidVolume: 50, acidMolarity: 0.1, titrant: 'NaOH', titrantMolarity: 0.1, multipleEquivalencePoints: true, findAllpH: true },
        type: 'polyprotic_acids',
        subparts: [
            '1st equiv: 50 mL NaOH, pH = (pKa1 + pKa2)/2 ≈ 4.7',
            '2nd equiv: 100 mL NaOH, pH = (pKa2 + pKa3)/2 ≈ 9.8',
            '3rd equiv: 150 mL NaOH, pH > 12 (PO4³⁻ in water)',
            'Each H⁺ requires same volume of base'
        ],
        helper: 'Polyprotic titration: Multiple equiv points; pH at equiv = average of adjacent pKa values',
        realWorldContext: 'Polyprotic acid titration'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Amphiprotic Species',
        problem: 'pH of 0.1 M NaHCO3 (H2CO3: Ka1=4.3×10⁻⁷, Ka2=5.6×10⁻¹¹)',
        parameters: { species: 'HCO3-', molarity: 0.1, Ka1: 4.3e-7, Ka2: 5.6e-11, amphiprotic: true, findpH: true },
        type: 'polyprotic_acids',
        subparts: [
            'HCO3⁻ is amphiprotic (can act as acid or base)',
            'pH ≈ (pKa1 + pKa2)/2 (approximation for amphiprotic)',
            'pKa1 = 6.37, pKa2 = 10.25',
            'pH ≈ (6.37 + 10.25)/2 = 8.31'
        ],
        helper: 'Amphiprotic pH ≈ (pKa1 + pKa2)/2; Simplification for intermediate species',
        realWorldContext: 'Amphiprotic species pH'
    });

    return relatedProblems;
}

// === EQUILIBRIUM CHEMISTRY (Complete with subparts and helpers) ===

generateRelatedEquilibriumConstants(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Calculate Kc',
        problem: 'N2(g) + 3H2(g) ⇌ 2NH3(g). At equilibrium: [N2]=0.2 M, [H2]=0.5 M, [NH3]=0.3 M. Kc?',
        parameters: { equation: 'N2 + 3H2 ⇌ 2NH3', concentrations: { 'N2': 0.2, 'H2': 0.5, 'NH3': 0.3 }, findKc: true },
        type: 'equilibrium_constants',
        subparts: [
            'Write Kc expression: Kc = [NH3]²/([N2][H2]³)',
            'Substitute equilibrium concentrations',
            'Kc = (0.3)²/((0.2)(0.5)³)',
            'Kc = 0.09/(0.2 × 0.125) = 0.09/0.025 = 3.6'
        ],
        helper: 'Kc = [products]^coefficients/[reactants]^coefficients; Use equilibrium concentrations only',
        realWorldContext: 'Haber process equilibrium'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Equilibrium',
        problem: 'A ⇌ 2B. [A]=0.1 M, [B]=0.2 M at equilibrium. Kc?',
        parameters: { equation: 'A ⇌ 2B', concentrations: { 'A': 0.1, 'B': 0.2 }, findKc: true },
        type: 'equilibrium_constants',subparts: [
            'Write Kc expression: Kc = [B]²/[A]',
            'Substitute values: Kc = (0.2)²/0.1',
            'Kc = 0.04/0.1',
            'Kc = 0.4'
        ],
        helper: 'Kc = [products]/[reactants] with stoichiometric coefficients as exponents',
        realWorldContext: 'Basic equilibrium calculation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Equilibrium with ICE Table',
        problem: 'Initial: 0.5 M A. Equilibrium constant Kc = 4. Find equilibrium [A] and [B] for A ⇌ 2B',
        parameters: { equation: 'A ⇌ 2B', initialConcentration: { 'A': 0.5 }, Kc: 4, useICE: true, findEquilibriumConcentrations: true },
        type: 'equilibrium_constants',
        subparts: [
            'ICE table: Initial [A]=0.5, [B]=0; Change [A]=-x, [B]=+2x',
            'Equilibrium: [A]=0.5-x, [B]=2x',
            'Kc = (2x)²/(0.5-x) = 4',
            'Solve: 4x² = 4(0.5-x); 4x² + 4x - 2 = 0; x = 0.366; [A]=0.134 M, [B]=0.732 M'
        ],
        helper: 'ICE table: Initial, Change, Equilibrium; Set up Kc equation and solve for x',
        realWorldContext: 'ICE table applications'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Kp from Kc',
        problem: 'For N2 + 3H2 ⇌ 2NH3, Kc = 0.5 at 450°C. Calculate Kp.',
        parameters: { equation: 'N2 + 3H2 ⇌ 2NH3', Kc: 0.5, temperature: 723.15, findKp: true },
        type: 'equilibrium_constants',
        subparts: [
            'Relationship: Kp = Kc(RT)^Δn',
            'Δn = (moles gas products) - (moles gas reactants) = 2 - 4 = -2',
            'R = 0.0821 L·atm/(mol·K), T = 723 K',
            'Kp = 0.5 × (0.0821 × 723)^(-2) = 0.5/(59.36)² = 1.42×10⁻⁴'
        ],
        helper: 'Kp = Kc(RT)^Δn where Δn = change in moles of gas',
        realWorldContext: 'Gas equilibrium constants'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Reverse Reaction',
        problem: 'Forward: A + B ⇌ C, Kc = 10. What\'s Kc for C ⇌ A + B?',
        parameters: { equation: 'A + B ⇌ C', Kc: 10, findReverseKc: true },
        type: 'equilibrium_constants',
        subparts: [
            'Reverse reaction has inverted equilibrium expression',
            'Kreverse = 1/Kforward',
            'Kreverse = 1/10',
            'Kreverse = 0.1'
        ],
        helper: 'Reverse reaction: Kreverse = 1/Kforward',
        realWorldContext: 'Reverse reaction equilibrium'
    });

    return relatedProblems;
}

generateRelatedLeChatelir(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Pressure Effect',
        problem: 'N2 + 3H2 ⇌ 2NH3 (exothermic). Increase pressure. Shift direction?',
        parameters: { equation: 'N2 + 3H2 ⇌ 2NH3', exothermic: true, disturbance: 'increase pressure', predictShift: true },
        type: 'le_chatelier',
        subparts: [
            'Count moles of gas: Left: 1 + 3 = 4 mol; Right: 2 mol',
            'Increase pressure favors side with fewer gas moles',
            'Shifts RIGHT (toward products, NH3)',
            'More NH3 produced, equilibrium position shifts right'
        ],
        helper: 'Pressure increase: shifts to side with fewer gas moles',
        realWorldContext: 'Haber process optimization'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Temperature Effect',
        problem: 'Exothermic reaction. Increase T. Equilibrium shifts?',
        parameters: { reaction: 'exothermic', disturbance: 'increase temperature', predictShift: true },
        type: 'le_chatelier',
        subparts: [
            'Exothermic: heat is a product (A + B ⇌ C + heat)',
            'Increasing T adds heat',
            'Shifts LEFT (toward reactants) to consume heat',
            'K decreases with increasing T for exothermic reactions'
        ],
        helper: 'Exothermic: ↑T shifts left (K↓); Endothermic: ↑T shifts right (K↑)',
        realWorldContext: 'Temperature equilibrium effects'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Concentration Change',
        problem: 'CO + H2O ⇌ CO2 + H2. Add more CO. Effect on CO2 production?',
        parameters: { equation: 'CO + H2O ⇌ CO2 + H2', addReactant: 'CO', analyzeProducts: true },
        type: 'le_chatelier',
        subparts: [
            'Adding CO increases reactant concentration',
            'System shifts RIGHT to consume added CO',
            'More CO2 and H2 produced',
            'New equilibrium established with higher product concentrations'
        ],
        helper: 'Add reactant: shifts toward products; Add product: shifts toward reactants',
        realWorldContext: 'Water-gas shift reaction'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Catalyst Effect',
        problem: 'Does catalyst shift equilibrium position?',
        parameters: { concept: 'catalyst effect', explain: true },
        type: 'le_chatelier',
        subparts: [
            'Catalyst speeds up both forward and reverse reactions equally',
            'Reaches equilibrium faster, but same final position',
            'Does NOT change K or equilibrium concentrations',
            'Only changes rate, not position'
        ],
        helper: 'Catalyst: faster equilibrium, same position; Does NOT shift equilibrium',
        realWorldContext: 'Catalyst misconceptions'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combined Effects',
        problem: 'Exothermic: 2SO2 + O2 ⇌ 2SO3. Increase P and decrease T. Net effect?',
        parameters: { equation: '2SO2 + O2 ⇌ 2SO3', exothermic: true, changes: ['increase pressure', 'decrease temperature'], netEffect: true },
        type: 'le_chatelier',
        subparts: [
            'Pressure: 3 mol left → 2 mol right; ↑P shifts RIGHT',
            'Temperature: exothermic; ↓T shifts RIGHT (favors heat release)',
            'Both changes favor product formation',
            'Net: significant shift RIGHT, more SO3 produced'
        ],
        helper: 'Multiple stresses: analyze each separately, then combine effects',
        realWorldContext: 'Contact process optimization'
    });

    return relatedProblems;
}

generateRelatedSolubilityEquilibria(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Calculate Ksp',
        problem: 'AgCl(s) ⇌ Ag⁺ + Cl⁻. At saturation: [Ag⁺] = [Cl⁻] = 1.3×10⁻⁵ M. Ksp?',
        parameters: { compound: 'AgCl', ions: ['Ag+', 'Cl-'], ionConcentrations: [1.3e-5, 1.3e-5], findKsp: true },
        type: 'solubility_equilibria',
        subparts: [
            'Write Ksp expression: Ksp = [Ag⁺][Cl⁻]',
            'Substitute saturation concentrations',
            'Ksp = (1.3×10⁻⁵)(1.3×10⁻⁵)',
            'Ksp = 1.69×10⁻¹⁰'
        ],
        helper: 'Ksp = [products] only; Solid not included; Use saturation concentrations',
        realWorldContext: 'Silver chloride solubility'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Ksp',
        problem: '[Ba²⁺] in saturated BaSO4 solution. Ksp(BaSO4) = 1.1×10⁻¹⁰. Find [SO4²⁻].',
        parameters: { compound: 'BaSO4', Ksp: 1.1e-10, findAllConcentrations: true },
        type: 'solubility_equilibria',
        subparts: [
            'BaSO4(s) ⇌ Ba²⁺ + SO4²⁻',
            'Ksp = [Ba²⁺][SO4²⁻] = 1.1×10⁻¹⁰',
            'Let s = solubility; [Ba²⁺] = [SO4²⁻] = s',
            's² = 1.1×10⁻¹⁰; s = 1.05×10⁻⁵ M for both ions'
        ],
        helper: 'Equal ion concentrations when coefficients are 1:1',
        realWorldContext: 'Barium sulfate precipitation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Solubility with Common Ion',
        problem: 'AgCl solubility in 0.1 M NaCl. Ksp(AgCl) = 1.8×10⁻¹⁰',
        parameters: { compound: 'AgCl', Ksp: 1.8e-10, commonIon: 'Cl-', commonIonConc: 0.1, findSolubility: true },
        type: 'solubility_equilibria',
        subparts: [
            'Common ion Cl⁻ already at 0.1 M from NaCl',
            'AgCl(s) ⇌ Ag⁺ + Cl⁻; Let s = [Ag⁺]',
            '[Cl⁻] = 0.1 + s ≈ 0.1 (s is very small)',
            'Ksp = s(0.1) = 1.8×10⁻¹⁰; s = 1.8×10⁻⁹ M (much less than in pure water)'
        ],
        helper: 'Common ion effect: decreases solubility; [common ion] = initial + s',
        realWorldContext: 'Common ion effect'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Precipitation Prediction',
        problem: 'Mix: 100 mL of 0.001 M AgNO3 + 100 mL of 0.001 M NaCl. Will AgCl precipitate? Ksp = 1.8×10⁻¹⁰',
        parameters: { mixing: true, solution1: 'AgNO3', conc1: 0.001, volume1: 100, solution2: 'NaCl', conc2: 0.001, volume2: 100, Ksp: 1.8e-10, predictPrecipitation: true },
        type: 'solubility_equilibria',
        subparts: [
            'After mixing: [Ag⁺] = [Cl⁻] = 0.001/2 = 0.0005 M (diluted)',
            'Calculate Q: Q = [Ag⁺][Cl⁻] = (0.0005)² = 2.5×10⁻⁷',
            'Compare: Q = 2.5×10⁻⁷ > Ksp = 1.8×10⁻¹⁰',
            'Q > Ksp, so YES, AgCl will precipitate'
        ],
        helper: 'Q > Ksp: precipitate forms; Q < Ksp: no precipitate; Q = Ksp: saturated',
        realWorldContext: 'Precipitation criteria'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polyprotic Salt',
        problem: 'Ca3(PO4)2(s) ⇌ 3Ca²⁺ + 2PO4³⁻. Ksp expression and solubility in water',
        parameters: { compound: 'Ca3(PO4)2', polyvalent: true, writeKspExpression: true, findSolubility: true },
        type: 'solubility_equilibria',
        subparts: [
            'Ksp = [Ca²⁺]³[PO4³⁻]²',
            'Let s = solubility; [Ca²⁺] = 3s, [PO4³⁻] = 2s',
            'Ksp = (3s)³(2s)² = 27s³ × 4s² = 108s⁵',
            'Solve for s: s = (Ksp/108)^(1/5)'
        ],
        helper: 'Polyvalent: coefficients affect concentrations; [ion] = coefficient × solubility',
        realWorldContext: 'Multivalent salt solubility'
    });

    return relatedProblems;
}

generateRelatedComplexIons(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Complex Formation Constant',
        problem: '[Ag(NH3)2]⁺ formation: Ag⁺ + 2NH3 ⇌ [Ag(NH3)2]⁺. Kf = 1.7×10⁷',
        parameters: { complex: '[Ag(NH3)2]+', Kf: 1.7e7, equilibrium: true },
        type: 'complex_ions',
        subparts: [
            'Kf = [[Ag(NH3)2]⁺]/([Ag⁺][NH3]²)',
            'Large Kf (10⁷) means reaction strongly favors complex formation',
            'Nearly all Ag⁺ converts to complex in presence of excess NH3',
            'Used to dissolve AgCl: AgCl(s) + 2NH3 → [Ag(NH3)2]⁺ + Cl⁻'
        ],
        helper: 'Formation constant Kf: Large Kf = stable complex',
        realWorldContext: 'Silver-ammonia complex'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Complex Formation',
        problem: 'Cu²⁺ + 4NH3 ⇌ [Cu(NH3)4]²⁺. Kf = 2.0×10¹³. Explain strong complex formation.',
        parameters: { complex: '[Cu(NH3)4]2+', Kf: 2.0e13, strongComplex: true },
        type: 'complex_ions',
        subparts: [
            'Very large Kf (10¹³) indicates extremely stable complex',
            'Cu²⁺ has empty d orbitals that accept NH3 lone pairs',
            'Forms coordinate covalent bonds (dative bonds)',
            'Deep blue color of complex indicates strong ligand field'
        ],
        helper: 'Complex formation: Metal accepts electron pairs from ligands',
        realWorldContext: 'Copper-ammonia complex'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Solubility with Complexation',
        problem: 'AgCl insoluble but dissolves in NH3. Explain using Ksp and Kf.',
        parameters: { precipitate: 'AgCl', ligand: 'NH3', dissolveByComplexation: true, explainMechanism: true },
        type: 'complex_ions',
        subparts: [
            'AgCl(s) ⇌ Ag⁺ + Cl⁻ (Ksp = 1.8×10⁻¹⁰, very small)',
            'Ag⁺ + 2NH3 ⇌ [Ag(NH3)2]⁺ (Kf = 1.7×10⁷, very large)',
            'NH3 removes Ag⁺ from solution, shifts AgCl dissolution right',
            'Overall: AgCl(s) + 2NH3 → [Ag(NH3)2]⁺ + Cl⁻; K = Ksp × Kf'
        ],
        helper: 'Complex formation can increase solubility by removing free metal ions',
        realWorldContext: 'Complexation solubilization'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Coordination Number',
        problem: 'Coordination number of Ag⁺ in [Ag(NH3)2]⁺ and Cu²⁺ in [Cu(NH3)4]²⁺',
        parameters: { complexes: ['[Ag(NH3)2]+', '[Cu(NH3)4]2+'], findCoordinationNumbers: true },
        type: 'complex_ions',
        subparts: [
            'Coordination number = number of ligands directly bonded to metal',
            '[Ag(NH3)2]⁺: 2 NH3 ligands → coordination number = 2',
            '[Cu(NH3)4]²⁺: 4 NH3 ligands → coordination number = 4',
            'Common coordination numbers: 2, 4, 6'
        ],
        helper: 'Coordination number = number of ligand bonds to central metal',
        realWorldContext: 'Metal coordination'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Stepwise Complex Formation',
        problem: '[Fe(CN)6]⁴⁻ forms stepwise. K1 >> K2 >> K3... Explain.',
        parameters: { complex: '[Fe(CN)6]^4-', stepwiseFormation: true, explainTrend: true },
        type: 'complex_ions',
        subparts: [
            'Each CN⁻ adds sequentially: Fe²⁺ + CN⁻ ⇌ [Fe(CN)]⁺, etc.',
            'K1 is largest (adding to bare metal ion)',
            'Each subsequent K is smaller (adding to increasingly negative complex)',
            'Electrostatic repulsion makes later additions less favorable'
        ],
        helper: 'Stepwise formation: K1 > K2 > K3...; Overall Kf = K1 × K2 × K3...',
        realWorldContext: 'Stepwise complexation'
    });

    return relatedProblems;
}

generateRelatedGasEquilibrium(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Kp Calculation',
        problem: 'N2O4 ⇌ 2NO2. Partial pressures: P(N2O4)=2.0 atm, P(NO2)=1.0 atm. Kp?',
        parameters: { equation: 'N2O4 ⇌ 2NO2', partialPressures: { 'N2O4': 2.0, 'NO2': 1.0 }, findKp: true },
        type: 'gas_equilibrium',
        subparts: [
            'Write Kp expression: Kp = P(NO2)²/P(N2O4)',
            'Substitute partial pressures',
            'Kp = (1.0)²/2.0',
            'Kp = 0.5 atm'
        ],
        helper: 'Kp = (P products)^coeff/(P reactants)^coeff; Use partial pressures',
        realWorldContext: 'Nitrogen oxide equilibria'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Equilibrium Pressure',
        problem: 'H2 + I2 ⇌ 2HI. Initial: 1 atm H2, 1 atm I2. Kp = 50.5 at 448°C. Equilibrium pressures?',
        parameters: { equation: 'H2 + I2 ⇌ 2HI', Kp: 50.5, initialPressures: { 'H2': 1, 'I2': 1 }, findEquilibriumPressures: true },
        type: 'gas_equilibrium',
        subparts: [
            'ICE: Initial P(H2)=1, P(I2)=1, P(HI)=0',
            'Change: -x, -x, +2x; Equilibrium: 1-x, 1-x, 2x',
            'Kp = (2x)²/((1-x)(1-x)) = 50.5',
            'Solve: 4x²/(1-x)² = 50.5; x = 0.78; P(H2)=P(I2)=0.22 atm, P(HI)=1.56 atm'
        ],
        helper: 'Gas equilibrium: Use ICE table with partial pressures',
        realWorldContext: 'Hydrogen-iodine equilibrium'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Gas Equilibrium with Inert Gas',
        problem: 'Add inert Ar to: 2NO2 ⇌ N2O4 system at constant volume. Effect?',
        parameters: { equation: '2NO2 ⇌ N2O4', addInertGas: true, constantVolume: true, analyzeEffect: true },
        type: 'gas_equilibrium',
        subparts: [
            'At constant volume: partial pressures unchanged',
            'Inert gas doesn\'t participate in reaction',
            'Total pressure increases, but partial pressures same',
            'No effect on equilibrium position (Kp depends only on partial pressures)'
        ],
        helper: 'Inert gas: No effect at constant V; Shifts at constant P (dilution effect)',
        realWorldContext: 'Inert gas effects'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Degree of Dissociation',
        problem: 'N2O4(g) ⇌ 2NO2(g). 50% dissociation at 1 atm. Degree of dissociation α = ?',
        parameters: { dissociation: 0.5, initialPressure: 1, findDegreeOfDissociation: true },
        type: 'gas_equilibrium',
        subparts: [
            'Degree of dissociation α = fraction dissociated',
            'α = 0.5 means 50% of N2O4 dissociates',
            'Initial: 1 atm N2O4; After: 0.5 atm N2O4, 1.0 atm NO2',
            'Kp = (1.0)²/0.5 = 2.0 atm'
        ],
        helper: 'Degree of dissociation α: fraction converted; 0 ≤ α ≤ 1',
        realWorldContext: 'Partial dissociation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Equilibrium Pressure Calculation',
        problem: 'SO2 + 0.5O2 ⇌ SO3. Initial: 1 atm SO2, 1 atm O2. Kp = 25. Equilibrium SO3 pressure?',
        parameters: { equation: 'SO2 + 0.5O2 ⇌ SO3', Kp: 25, initialPressures: { 'SO2': 1, 'O2': 1 }, findProductPressure: true },
        type: 'gas_equilibrium',
        subparts: [
            'ICE: P(SO2)=1-x, P(O2)=1-0.5x, P(SO3)=x',
            'Kp = x/((1-x)(1-0.5x)^0.5) = 25',
            'Solve iteratively or approximate',
            'x ≈ 0.96 atm (SO3 at equilibrium)'
        ],
        helper: 'Fractional coefficients allowed in gas equilibria',
        realWorldContext: 'Contact process equilibrium'
    });

    return relatedProblems;
}




    // === MAIN RELATED PROBLEMS GENERATION METHOD ===

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

            return {
                originalProblem: originalProblem,
                relatedProblems: relatedProblems,
                totalProblems: relatedProblems.length,
                category: this.getCategoryFromType(problemType),
                generatedAt: new Date().toISOString()
            };

        } catch (error) {
            throw new Error(`Failed to generate related problems: ${error.message}`);
        }
    }








// === KINETICS & THERMODYNAMICS PROBLEM GENERATORS ===

generateRelatedReactionKinetics(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Rate Law Determination',
        problem: 'Experiments show: rate ∝ [A]^2[B]. What is reaction order?',
        parameters: { rateExpression: '[A]^2[B]', determineTotalOrder: true },
        type: 'reaction_kinetics',
        realWorldContext: 'Experimental rate law determination'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Rate',
        problem: 'First-order reaction: rate = k[A]. After 10 min, [A] drops 50%. Half-life?',
        parameters: { order: 'first', timeForHalf: 10, findHalfLife: true },
        type: 'reaction_kinetics',
        realWorldContext: 'First-order half-life'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Rate Law from Data',
        problem: 'Doubling [A] doubles rate. Doubling [B] quadruples rate. Rate law?',
        parameters: { concentrationEffects: [{ compound: 'A', effect: 'double' }, { compound: 'B', effect: 'quadruple' }], findRateLaw: true },
        type: 'reaction_kinetics',
        realWorldContext: 'Kinetic data analysis'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Integrated Rate Law',
        problem: 'First-order reaction: ln[A] = ln[A]0 - kt. [A]0 = 0.5 M, k = 0.1 min^-1. [A] at 5 min?',
        parameters: { order: 'first', initialConcentration: 0.5, rateConstant: 0.1, time: 5, findConcentration: true },
        type: 'reaction_kinetics',
        realWorldContext: 'Integrated rate equations'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Reaction Mechanism',
        problem: 'Slow step: A + B → C (rate-determining). Fast: C + D → E. Overall rate law?',
        parameters: { mechanism: [{ step: 'A + B → C', rate: 'slow' }, { step: 'C + D → E', rate: 'fast' }], deriveOverallRateLaw: true },
        type: 'reaction_kinetics',
        realWorldContext: 'Multi-step reaction kinetics'
    });

    return relatedProblems;
}

generateRelatedRateLaws(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Write Rate Law',
        problem: 'ClO- + I- → Products. Experiments: 2× [ClO-] doubles rate. 2× [I-] doubles rate. Rate law?',
        parameters: { concentrations: [{ compound: 'ClO-', effect: 'double' }, { compound: 'I-', effect: 'double' }], findRateLaw: true },
        type: 'rate_laws',
        realWorldContext: 'Rate law determination'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Zero-Order Reaction',
        problem: 'Rate is independent of concentration. What is half-life trend?',
        parameters: { order: 'zero', analyzeHalfLife: true },
        type: 'rate_laws',
        realWorldContext: 'Zero-order kinetics'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Rate Constant Units',
        problem: 'For rate = k[A]^2, what are units of k if rate is M/s?',
        parameters: { order: 'second', analyzeRateConstantUnits: true },
        type: 'rate_laws',
        realWorldContext: 'Dimensional analysis in kinetics'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Pseudo-First-Order',
        problem: '[B] >> [A] in A + B → Products. How does rate law simplify?',
        parameters: { pseudoFirstOrder: true, explainSimplification: true },
        type: 'rate_laws',
        realWorldContext: 'Pseudo-order kinetics'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Order from Graph',
        problem: 'Plot ln[A] vs t is linear. Plot 1/[A] vs t is curved. Reaction order?',
        parameters: { linearPlot: 'ln[A] vs t', curvedPlot: '1/[A] vs t', determineOrder: true },
        type: 'rate_laws',
        realWorldContext: 'Graphical kinetics analysis'
    });

    return relatedProblems;
}

generateRelatedActivationEnergy(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Arrhenius Equation',
        problem: 'ln(k2/k1) = (Ea/R)(1/T1 - 1/T2). k1=0.05 s^-1 at 25°C, Ea=50 kJ/mol. k at 35°C?',
        parameters: { k1: 0.05, T1: 298.15, Ea: 50000, T2: 308.15, findK2: true },
        type: 'activation_energy',
        realWorldContext: 'Temperature dependence of rate'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Catalyst Effect',
        problem: 'Catalyst lowers Ea from 100 kJ/mol to 50 kJ/mol. Rate increase factor at 300 K?',
        parameters: { Ea_uncatalyzed: 100000, Ea_catalyzed: 50000, temperature: 300, findRateFactor: true },
        type: 'activation_energy',
        realWorldContext: 'Catalysis effects on rates'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Energy Diagram',
        problem: 'Draw reaction energy diagram: reactants, Ea, transition state, products (endothermic)',
        parameters: { drawDiagram: true, reactionType: 'endothermic', labelComponents: true },
        type: 'activation_energy',
        realWorldContext: 'Reaction coordinate diagrams'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Rate Constant Dependence',
        problem: 'How does rate constant k depend on temperature and Ea?',
        parameters: { concept: 'k dependence', explainRelationships: true },
        type: 'activation_energy',
        realWorldContext: 'Arrhenius kinetics'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Pre-exponential Factor',
        problem: 'k = Ae^(-Ea/RT). What is A (pre-exponential factor) physically?',
        parameters: { concept: 'pre-exponential', explain: true },
        type: 'activation_energy',
        realWorldContext: 'Collision theory'
    });

    return relatedProblems;
}

generateRelatedEntropy(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Entropy Change',
        problem: 'Ice (s) → Water (l). ΔS is positive. Explain disorder increase.',
        parameters: { process: 'melting', identifyEntropySigns: true, explain: true },
        type: 'entropy',
        realWorldContext: 'Phase change entropy'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Entropy Disorder',
        problem: 'Which has more entropy: O2(g) or O2(s)? Why?',
        parameters: { compareStates: ['O2(g)', 'O2(s)'], orderEntropy: true },
        type: 'entropy',
        realWorldContext: 'State of matter entropy'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Entropy of Reaction',
        problem: 'N2(g) + O2(g) → 2NO(g). ΔS°rxn > 0? Explain particle perspective.',
        parameters: { equation: 'N2 + O2 → 2NO', predictEntropySign: true, explain: true },
        type: 'entropy',
        realWorldContext: 'Reaction entropy predictions'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Absolute Entropy',
        problem: 'S°(NH3,g) = 192 J/mol·K. What does this mean?',
        parameters: { compound: 'NH3', absoluteEntropy: 192, interpretation: true },
        type: 'entropy',
        realWorldContext: 'Third law of thermodynamics'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Universe Entropy',
        problem: 'ΔS_universe = ΔS_system + ΔS_surroundings. For spontaneous process?',
        parameters: { concept: 'universe entropy', spontaneity: true, explain: true },
        type: 'entropy',
        realWorldContext: 'Second law of thermodynamics'
    });

    return relatedProblems;
}

generateRelatedGibbsEnergy(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Calculate ΔG',
        problem: 'ΔH = -100 kJ, ΔS = 0.2 kJ/K at 298 K. ΔG? Spontaneous?',
        parameters: { deltaH: -100000, deltaS: 200, temperature: 298, findDeltaG: true, assessSpontaneity: true },
        type: 'gibbs_free_energy',
        realWorldContext: 'Spontaneity determination'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Entropy-Driven',
        problem: 'Exothermic (ΔH<0), ΔS>0. Always spontaneous?',
        parameters: { analyze: 'exothermic with positive entropy', allTemperatures: true },
        type: 'gibbs_free_energy',
        realWorldContext: 'Favorable conditions'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Temperature Effect on Spontaneity',
        problem: 'ΔH = +50 kJ, ΔS = +0.2 kJ/K. At what temperature does reaction become spontaneous?',
        parameters: { deltaH: 50000, deltaS: 200, deltaGZero: 0, findTemperature: true },
        type: 'gibbs_free_energy',
        realWorldContext: 'Temperature-dependent spontaneity'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'ΔG and Equilibrium',
        problem: 'ΔG° = 0 at equilibrium. Relate to K and Kp.',
        parameters: { concept: 'delta G at equilibrium', relateToK: true },
        type: 'gibbs_free_energy',
        realWorldContext: 'Thermodynamic-kinetic link'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Non-standard Conditions',
        problem: 'ΔG = ΔG° + RT ln Q. Non-spontaneous reaction can become spontaneous if Q is small?',
        parameters: { concept: 'reaction quotient', explainQEffect: true },
        type: 'gibbs_free_energy',
        realWorldContext: 'Driving force for reaction'
    });

    return relatedProblems;
}

generateRelatedSpontaneity(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sign of ΔH and ΔS',
        problem: 'For exothermic (ΔH<0), endothermic (ΔH>0) × ΔS>0, ΔS<0: which are always spontaneous?',
        parameters: { analyzeMatrix: true, alhEntropyTerms: true },
        type: 'spontaneity',
        realWorldContext: 'Spontaneity conditions'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Combustion',
        problem:'Combustion is always spontaneous. Explain using ΔH and ΔS.',
parameters: { process: 'combustion', expectedSigns: { ΔH: 'negative', ΔS: 'usually positive' } },
type: 'spontaneity',
realWorldContext: 'Combustion spontaneity'
});
relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Ice Melting',
        problem: 'Ice → Water at 0°C is at equilibrium. Above 0°C? Below 0°C?',
        parameters: { process: 'melting', analyzeTemperatureEffect: true },
        type: 'spontaneity',
        realWorldContext: 'Phase equilibrium'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Non-Spontaneous Forward',
        problem: 'Forward reaction non-spontaneous but reverse is. Explain.',
        parameters: { concept: 'reaction direction', predictFromGibbs: true },
        type: 'spontaneity',
        realWorldContext: 'Direction of reaction'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Coupled Reactions',
        problem: 'Reaction A: ΔG = +50 kJ (non-spont.). Reaction B: ΔG = -100 kJ. Couple A+B?',
        parameters: { coupledReactions: true, calculateOverallDeltaG: true, determineSpont: true },
        type: 'spontaneity',
        realWorldContext: 'Coupled biochemical reactions'
    });

    return relatedProblems;
}

// === ATOMIC STRUCTURE PROBLEM GENERATORS ===

generateRelatedAtomicStructure(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Atomic Nucleus',
        problem: 'How many protons, neutrons, electrons in Fe-56?',
        parameters: { element: 'Fe', massNumber: 56, findParticles: true },
        type: 'atomic_structure',
        realWorldContext: 'Isotope composition'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Atomic vs Subatomic',
        problem: 'Relative masses: proton ≈ neutron ≈ 2000 electrons. Why most mass in nucleus?',
        parameters: { concept: 'nuclear mass', explain: true },
        type: 'atomic_structure',
        realWorldContext: 'Atomic mass distribution'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Isotopes',
        problem: 'Cl-35 (75.8%) and Cl-37 (24.2%). Average atomic mass?',
        parameters: { isotopes: [{ mass: 35, abundance: 75.8 }, { mass: 37, abundance: 24.2 }], findAverageAtomicMass: true },
        type: 'atomic_structure',
        realWorldContext: 'Isotopic abundance calculations'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Rutherford Experiment',
        problem: 'What did Rutherford\'s alpha particle scattering reveal about atomic structure?',
        parameters: { experiment: 'Rutherford', interpretation: true },
        type: 'atomic_structure',
        realWorldContext: 'Nuclear model of atom'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Bohr Model Limitations',
        problem: 'Bohr model explains hydrogen but fails for multi-electron atoms. Why?',
        parameters: { concept: 'Bohr limitations', explanation: true },
        type: 'atomic_structure',
        realWorldContext: 'Quantum mechanical atoms'
    });

    return relatedProblems;
}

generateRelatedQuantumNumbers(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Valid Quantum Numbers',
        problem: 'Are n=2, l=2, ml=0 valid? Explain restrictions.',
        parameters: { n: 2, l: 2, ml: 0, assessValidity: true },
        type: 'quantum_numbers',
        realWorldContext: 'Quantum number constraints'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Quantum Number Ranges',
        problem: 'If n=3, what are possible values of l and ml?',
        parameters: { n: 3, findAllValidValues: true },
        type: 'quantum_numbers',
        realWorldContext: 'Quantum number relationships'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Spin Quantum Number',
        problem: 'Maximum electrons in 3d orbital using Pauli exclusion principle',
        parameters: { orbital: '3d', maxElectrons: true, explainPauli: true },
        type: 'quantum_numbers',
        realWorldContext: 'Electron spin and orbital capacity'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Orbital Identification',
        problem: 'n=4, l=1 corresponds to which orbital type?',
        parameters: { n: 4, l: 1, identifyOrbital: true },
        type: 'quantum_numbers',
        realWorldContext: 'Orbital notation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Quantum Numbers and Spectroscopy',
        problem: 'Electron transition from n=3 to n=1. Which quantum numbers change?',
        parameters: { initialState: { n: 3 }, finalState: { n: 1 }, analyzeTransition: true },
        type: 'quantum_numbers',
        realWorldContext: 'Spectral line origins'
    });

    return relatedProblems;
}

generateRelatedElectronConfiguration(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Write Configuration',
        problem: 'Electron configuration of Fe (Z=26). Ground state.',
        parameters: { element: 'Fe', atomicNumber: 26, findConfiguration: true },
        type: 'electron_configuration',
        realWorldContext: 'Transition metal configurations'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Configuration',
        problem: 'Electron configuration of Oxygen (Z=8)',
        parameters: { element: 'O', atomicNumber: 8, findConfiguration: true },
        type: 'electron_configuration',
        realWorldContext: 'p-block element'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Anomalous Configurations',
        problem: 'Cu expected [Ar]3d^9 4s^2 but actual is [Ar]3d^10 4s^1. Explain.',
        parameters: { element: 'Cu', expected: '[Ar]3d^9 4s^2', actual: '[Ar]3d^10 4s^1', explainAnomaly: true },
        type: 'electron_configuration',
        realWorldContext: 'Half-filled orbital stability'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Orbital Diagrams',
        problem: 'Orbital diagram for N (Z=7). Show unpaired electrons.',
        parameters: { element: 'N', atomicNumber: 7, drawOrbitalDiagram: true, unpairedElectrons: true },
        type: 'electron_configuration',
        realWorldContext: 'Hund\'s rule applications'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Ions Configuration',
        problem: 'Fe^3+ configuration. How many unpaired electrons?',
        parameters: { element: 'Fe', ionCharge: '+3', findConfiguration: true, countUnpaired: true },
        type: 'electron_configuration',
        realWorldContext: 'Transition metal ions'
    });

    return relatedProblems;
}

generateRelatedPeriodicTrends(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ionization Energy',
        problem: 'Which has higher first ionization energy: N or O? Explain.',
        parameters: { compare: ['N', 'O'], property: 'ionization energy', explain: true },
        type: 'periodic_trends',
        realWorldContext: 'Periodic table trends'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Atomic Radius',
        problem: 'Atomic radius increases down a group. Why?',
        parameters: { trend: 'atomic radius', direction: 'down group', explanation: true },
        type: 'periodic_trends',
        realWorldContext: 'Group periodicity'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Electronegativity',
        problem: 'Order by electronegativity: F, Cl, Br. Explain trend.',
        parameters: { elements: ['F', 'Cl', 'Br'], property: 'electronegativity', orderAndExplain: true },
        type: 'periodic_trends',
        realWorldContext: 'Chemical bond polarity'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Effective Nuclear Charge',
        problem: 'Zeff increases across a period but atomic radius decreases. Why?',
        parameters: { concept: 'effective nuclear charge', effectOnSize: true },
        type: 'periodic_trends',
        realWorldContext: 'Nuclear attraction effects'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Diagonal Relationships',
        problem: 'Li and Mg show diagonal relationship similarities. Why?',
        parameters: { elements: ['Li', 'Mg'], similarity: 'diagonal', explanation: true },
        type: 'periodic_trends',
        realWorldContext: 'Anomalous periodic behavior'
    });

    return relatedProblems;
}

generateRelatedBonding(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ionic vs Covalent',
        problem: 'NaCl is ionic, Cl2 is covalent. Explain electron distribution differences.',
        parameters: { compare: ['NaCl', 'Cl2'], bondTypes: ['ionic', 'covalent'], explain: true },
        type: 'bonding',
        realWorldContext: 'Bond character spectrum'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Electron Transfer',
        problem: 'Na and Cl form NaCl. Describe electron transfer.',
        parameters: { reaction: 'Na + Cl → NaCl', electrondTransfer: true },
        type: 'bonding',
        realWorldContext: 'Ionic bonding mechanism'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Bond Energy',
        problem: 'H-H bond (432 kJ/mol) vs F-F (155 kJ/mol). Explain difference.',
        parameters: { bonds: [{ bondType: 'H-H', energy: 432 }, { bondType: 'F-F', energy: 155 }], compareAndExplain: true },
        type: 'bonding',
        realWorldContext: 'Bond strength patterns'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electronegativity and Polarity',
        problem: 'Which bond is more polar: H-Cl or H-F? Use electronegativity.',
        parameters: { compare: ['H-Cl', 'H-F'], property: 'polarity', explanation: true },
        type: 'bonding',
        realWorldContext: 'Bond polarity determination'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Coordinate Covalent',
        problem: 'In [Ag(NH3)2]+, NH3 coordinates to Ag+. Describe bonding.',
        parameters: { complex: '[Ag(NH3)2]+', coordinateBonding: true, electronDonor: 'NH3', electronAcceptor: 'Ag+' },
        type: 'bonding',
        realWorldContext: 'Complex ion bonding'
    });

    return relatedProblems;
}

generateRelatedMolecularGeometry(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'VSEPR Prediction',
        problem: 'CH4: 4 bonding pairs, 0 lone pairs. Geometry?',
        parameters: { molecule: 'CH4', bondingPairs: 4, lonePairs: 0, predictGeometry: true },
        type: 'molecular_geometry',
        realWorldContext: 'Methane structure'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Geometry',
        problem: 'H2O: geometry and bond angle',
        parameters: { molecule: 'H2O', findGeometry: true, findBondAngle: true },
        type: 'molecular_geometry',
        realWorldContext: 'Water molecular structure'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Lone Pair Distortion',
        problem: 'NH3 vs CH4 geometry. Effect of lone pair on bond angles.',
        parameters: { compare: ['NH3', 'CH4'], lonePairEffect: true, compareBondAngles: true },
        type: 'molecular_geometry',
        realWorldContext: 'Lone pair repulsion'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Complex Geometry',
        problem: 'SF6: 6 bonding pairs, 0 lone pairs. Geometry?',
        parameters: { molecule: 'SF6', bondingPairs: 6, lonePairs: 0, predictGeometry: true },
        type: 'molecular_geometry',
        realWorldContext: 'Octahedral geometry'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polarity and Symmetry',
        problem: 'CO2 is nonpolar despite C-O bonds are polar. Explain.',
        parameters: { molecule: 'CO2', polarBonds: true, overallPolarity: 'nonpolar', explainSymmetry: true },
        type: 'molecular_geometry',
        realWorldContext: 'Molecular polarity'
    });

    return relatedProblems;
}

generateRelatedHybridization(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sp3 Hybridization',
        problem: 'Carbon in CH4 uses sp3 hybrid orbitals. Describe orbital overlap.',
        parameters: { molecule: 'CH4', hybridization: 'sp3', describeOrbitalOverlap: true },
        type: 'hybridization',
        realWorldContext: 'Methane bonding'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Identify Hybridization',
        problem: 'In H2O, oxygen hybridization is?',
        parameters: { molecule: 'H2O', element: 'O', findHybridization: true },
        type: 'hybridization',
        realWorldContext: 'Water bonding'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Sp2 vs Sp3',
        problem: 'Ethane vs Ethene carbon hybridization and geometry.',
        parameters: { compare: [{ molecule: 'ethane', hybridization: 'sp3' }, { molecule: 'ethene', hybridization: 'sp2' }], compareGeometries: true },
        type: 'hybridization',
        realWorldContext: 'Alkane vs alkene bonding'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sp Hybridization',
        problem: 'Acetylene (C2H2): carbon hybridization and geometry',
        parameters: { molecule: 'acetylene', findHybridization: true, predictGeometry: true },
        type: 'hybridization',
        realWorldContext: 'Triple bond geometry'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Molecular Orbital Formation',
        problem: 'Sp3 hybrids form 4 σ bonds in tetrahedral geometry. Explain orbital bonding.',
        parameters: { hybridization: 'sp3', numberBonds: 4, explainSigmaBonds: true },
        type: 'hybridization',
        realWorldContext: 'Sigma bond formation'
    });

    return relatedProblems;
}

// === UTILITY METHODS ===

calculateMolarMass(compound) {
    const atomicMasses = {
        'H': 1.008, 'C': 12.01, 'N': 14.01, 'O': 16.00,
        'S': 32.07, 'P': 30.97, 'Cl': 35.45, 'Na': 22.99,
        'K': 39.10, 'Ca': 40.08, 'Mg': 24.31, 'Al': 26.98,
        'Fe': 55.85, 'Cu': 63.55, 'Ag': 107.87, 'Ba': 137.33
    };

    let molarMass = 0;
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;

    while ((match = regex.exec(compound)) !== null) {
        const element = match[1];
        const count = match[2] ? parseInt(match[2]) : 1;
        if (atomicMasses[element]) {
            molarMass += atomicMasses[element] * count;
        }
    }

    return parseFloat(molarMass.toFixed(2));
}

getRandomCompound(excludeFormula = null, type = 'all') {
    let allCompounds = [];
    
    if (type === 'all' || type === 'simple') {
        allCompounds = allCompounds.concat(this.databases.compounds.simple_molecules);
    }
    if (type === 'all' || type === 'organic') {
        allCompounds = allCompounds.concat(this.databases.compounds.organic_compounds);
    }
    if (type === 'all' || type === 'ionic') {
        allCompounds = allCompounds.concat(this.databases.compounds.ionic_compounds);
    }

    const filtered = allCompounds.filter(c => c.formula !== excludeFormula);
    return filtered[Math.floor(Math.random() * filtered.length)];
 }


}


// ========================================================================
// UPDATED DEMONSTRATION FUNCTION WITH ACTUAL FILE GENERATION
// ========================================================================

async function demonstrateExamPaperGenerator() {
    console.log('╔═══════════════════════════════════════════════════════════════════╗');
    console.log('║   CHEMISTRY EXAMINATION PAPER GENERATOR - FILE CREATION           ║');
    console.log('╚═══════════════════════════════════════════════════════════════════╝\n');

    const generator = new ChemistryExamPaperGenerator();

    // Example 1: Generate a standard exam paper
    console.log('📝 Generating Standard Examination Paper...\n');

    const standardExamConfig = {
        // Header Information
        examBoard: 'National Examination Council',
        schoolName: 'Excellence Secondary School',
        examType: 'Mid-Term Examination',
        academicYear: '2024/2025',
        term: 'First Term',
        subjectName: 'Chemistry',
        subjectCode: 'CHEM-301',
        gradeLevel: 'Grade 11',
        examDate: 'November 25, 2024',
        duration: '2 hours 30 minutes',
        totalMarks: 100,
        
        // Paper Configuration
        topics: ['stoichiometry', 'organic_chemistry', 'acid_base_chemistry', 'redox_chemistry'],
        sectionConfiguration: {
            sectionA: { 
                difficulty: 'easier', 
                questionsCount: 7, 
                marksPercentage: 40 
            },
            sectionB: { 
                difficulty: 'similar', 
                questionsCount: 5, 
                marksPercentage: 35 
            },
            sectionC: { 
                difficulty: 'harder', 
                questionsCount: 3, 
                marksPercentage: 25 
            }
        },
        
        // Formatting
        paperSize: 'A4',
        orientation: 'Portrait',
        lineSpacing: 'comfortable',
        answerSpaceLines: 5,
        
        // Instructions
        instructions: [
            'Answer ALL questions in the spaces provided',
            'Write your Name, Class, and Index Number in the boxes above',
            'All working must be clearly shown for full credit',
            'Use black or blue pen only (pencil for diagrams)',
            'Scientific calculators are allowed',
            'Non-programmable calculators only',
            'Mobile phones and smart devices are strictly prohibited',
            'Show all units in your final answers'
        ],
        
        // Footer
        examinerName: 'Dr. Michael Johnson',
        examinerTitle: 'Head of Chemistry Department',
        moderatorName: 'Prof. Sarah Williams',
        copyrightYear: 2024,
        copyrightHolder: 'National Examination Council',
        
        // Export Options
        includeMarkingScheme: true,
        separateMarkingSchemeFile: true
    };

    const examPaper = generator.generateExaminationPaper(standardExamConfig);

    // Display preview
    generator.displayExamPaperPreview(examPaper);

    // Display marking scheme preview
    if (examPaper.markingScheme) {
        generator.displayMarkingSchemePreview(examPaper.markingScheme);
    }

    console.log('\n' + '═'.repeat(80));
    console.log('CREATING PHYSICAL FILES');
    console.log('═'.repeat(80) + '\n');

    try {
        // ===== CREATE DOCX FILES =====
        console.log('📄 Creating DOCX files...\n');
        
        await generator.exportToDOCXFile(
            examPaper, 
            'standard_chemistry_exam_paper.docx'
        );

        if (examPaper.markingScheme) {
            await generator.exportMarkingSchemeToDOCXFile(
                examPaper.markingScheme, 
                'standard_marking_scheme.docx'
            );
        }

        // ===== CREATE PDF FILES =====
        console.log('\n📕 Creating PDF files...\n');
        
        await generator.exportToPDFFile(
            examPaper, 
            'standard_chemistry_exam_paper.pdf'
        );

        if (examPaper.markingScheme) {
            await generator.exportMarkingSchemeToPDFFile(
                examPaper.markingScheme, 
                'standard_marking_scheme.pdf'
            );
        }

        console.log('\n' + '═'.repeat(80));
        console.log('STANDARD EXAM PAPER - FILES CREATED SUCCESSFULLY');
        console.log('═'.repeat(80) + '\n');
        console.log('📁 Files created in current directory:');
        console.log('   📘 standard_chemistry_exam_paper.docx');
        console.log('   📘 standard_marking_scheme.docx');
        console.log('   📕 standard_chemistry_exam_paper.pdf');
        console.log('   📕 standard_marking_scheme.pdf\n');

    } catch (error) {
        console.error('❌ Error creating files:', error.message);
    }

    // Example 2: Generate advanced exam paper
    console.log('\n' + '═'.repeat(80));
    console.log('📝 Generating Advanced Level Examination Paper...\n');

    const advancedExamConfig = {
        examBoard: 'Advanced Placement Board',
        schoolName: 'Science Excellence Academy',
        examType: 'Final Examination',
        academicYear: '2024/2025',
        term: 'Second Term',
        subjectName: 'Advanced Chemistry',
        subjectCode: 'AP-CHEM-401',
        gradeLevel: 'Grade 12',
        examDate: 'December 15, 2024',
        duration: '3 hours',
        totalMarks: 150,
        
        topics: [
            'stoichiometry', 
            'organic_chemistry', 
            'redox_chemistry', 
            'equilibrium',
            'thermodynamics',
            'kinetics'
        ],
        
        sectionConfiguration: {
            sectionA: { 
                difficulty: 'similar', 
                questionsCount: 5, 
                marksPercentage: 30 
            },
            sectionB: { 
                difficulty: 'harder', 
                questionsCount: 4, 
                marksPercentage: 40 
            },
            sectionC: { 
                difficulty: 'harder', 
                questionsCount: 3, 
                marksPercentage: 30 
            }
        },
        
        paperSize: 'A4',
        orientation: 'Portrait',
        lineSpacing: 'spacious',
        answerSpaceLines: 7,
        
        examinerName: 'Dr. Emily Chen',
        examinerTitle: 'AP Chemistry Coordinator',
        moderatorName: 'Prof. Robert Anderson',
        includeMarkingScheme: true
    };

    const advancedExamPaper = generator.generateExaminationPaper(advancedExamConfig);

    console.log('✅ Advanced exam paper generated successfully!');
    console.log(`   Total Questions: ${advancedExamPaper.questionSections.reduce((sum, sec) => sum + sec.questions.length, 0)}`);
    console.log(`   Total Marks: ${advancedExamPaper.metadata.totalMarks}`);
    console.log(`   Duration: ${advancedExamPaper.metadata.duration}\n`);

    try {
        // Create advanced exam files
        console.log('📄 Creating advanced exam files...\n');
        
        await generator.exportToDOCXFile(
            advancedExamPaper, 
            'advanced_chemistry_exam_paper.docx'
        );

        await generator.exportToPDFFile(
            advancedExamPaper, 
            'advanced_chemistry_exam_paper.pdf'
        );

        if (advancedExamPaper.markingScheme) {
            await generator.exportMarkingSchemeToDOCXFile(
                advancedExamPaper.markingScheme, 
                'advanced_marking_scheme.docx'
            );

            await generator.exportMarkingSchemeToPDFFile(
                advancedExamPaper.markingScheme, 
                'advanced_marking_scheme.pdf'
            );
        }

        console.log('\n' + '═'.repeat(80));
        console.log('ADVANCED EXAM PAPER - FILES CREATED SUCCESSFULLY');
        console.log('═'.repeat(80) + '\n');
        console.log('📁 Files created in current directory:');
        console.log('   📘 advanced_chemistry_exam_paper.docx');
        console.log('   📘 advanced_marking_scheme.docx');
        console.log('   📕 advanced_chemistry_exam_paper.pdf');
        console.log('   📕 advanced_marking_scheme.pdf\n');

    } catch (error) {
        console.error('❌ Error creating advanced files:', error.message);
    }

    // Final summary
    console.log('\n' + '═'.repeat(80));
    console.log('FEATURES SUMMARY');
    console.log('═'.repeat(80) + '\n');

    console.log('✅ Professional cover page with school branding');
    console.log('✅ Candidate information fields');
    console.log('✅ Clear instructions and warnings');
    console.log('✅ Multiple sections with different difficulty levels');
    console.log('✅ Questions with subparts and marks allocation');
    console.log('✅ Answer spaces with appropriate line counts');
    console.log('✅ Professional closing page with signatures');
    console.log('✅ Copyright and confidentiality notices');
    console.log('✅ Separate marking scheme with:');
    console.log('    - Expected answers');
    console.log('    - Detailed marking breakdown');
    console.log('    - Acceptable alternatives');
    console.log('    - Common errors and penalties');
    console.log('    - Partial credit guidelines');
    console.log('✅ All formatting specifications (A4, margins, fonts, spacing)');
    console.log('✅ Physical DOCX and PDF files created and ready to use!\n');

    console.log('═'.repeat(80));
    console.log('TOTAL FILES CREATED: 8');
    console.log('═'.repeat(80) + '\n');
    console.log('📊 Summary:');
    console.log('   • 2 Standard Exam Papers (DOCX + PDF)');
    console.log('   • 2 Standard Marking Schemes (DOCX + PDF)');
    console.log('   • 2 Advanced Exam Papers (DOCX + PDF)');
    console.log('   • 2 Advanced Marking Schemes (DOCX + PDF)\n');

    return {
        standardExamPaper: examPaper,
        advancedExamPaper: advancedExamPaper,
        filesCreated: [
            'standard_chemistry_exam_paper.docx',
            'standard_marking_scheme.docx',
            'standard_chemistry_exam_paper.pdf',
            'standard_marking_scheme.pdf',
            'advanced_chemistry_exam_paper.docx',
            'advanced_marking_scheme.docx',
            'advanced_chemistry_exam_paper.pdf',
            'advanced_marking_scheme.pdf'
        ]
    };
}

// ========================================================================
// RUN THE DEMONSTRATION
// ========================================================================

// IMPORTANT: Make this function async and use proper execution
(async () => {
    try {
        console.log('\n🚀 Starting Chemistry Exam Paper Generator...\n');
        
        const result = await demonstrateExamPaperGenerator();
        
        console.log('\n✨ All operations completed successfully!');
        console.log(`\n📦 Total files created: ${result.filesCreated.length}`);
        console.log('\n📂 Check your current directory for all exam papers and marking schemes.\n');
        
    } catch (error) {
        console.error('\n❌ Fatal error:', error.message);
        console.error(error.stack);
        process.exit(1);
    }
})();
