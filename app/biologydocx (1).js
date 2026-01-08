}

// ============== COMPREHENSIVE DOCUMENT GENERATION (UPDATED) ==============

async exportGenerateComprehensiveBiologyDocument() {
    console.log('Generating Comprehensive Biology Workbook with Cell Biology and Genetics...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Biology Workbook',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Complete Guide: Cell Biology and Genetics & Molecular Biology',
            spacing: { after: 150 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Cell Structure, Organelles, Membrane, Division, Transport, Metabolism, and Genetics',
            spacing: { after: 300 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Generated: ${new Date().toLocaleString()}`,
            spacing: { after: 600 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    // ============== TABLE OF CONTENTS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Table of Contents',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'PART A: CELL BIOLOGY',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    // Cell Biology TOC (existing from previous code)
    let problemNumber = 1;
    
    const cellStructureProblems = generateRelatedCellStructure();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part I: Cell Structure and Types (${cellStructureProblems.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    cellStructureProblems.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const membraneProblems = generateRelatedCellMembrane();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part II: Cell Membrane (${membraneProblems.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    membraneProblems.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const organellesProblems = generateRelatedOrganelles();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part III: Cell Organelles (${organellesProblems.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    organellesProblems.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const cellDivisionProblems = generateRelatedCellDivision();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part IV: Cell Division and Cell Cycle (${cellDivisionProblems.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    cellDivisionProblems.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const mitosisProblems = generateRelatedMitosisMeiosis();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part V: Mitosis and Meiosis (${mitosisProblems.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    mitosisProblems.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const transportProblems = generateRelatedCellTransport();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part VI: Cell Transport Mechanisms (${transportProblems.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    transportProblems.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const respirationProblems = generateRelatedCellularRespiration();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part VII: Cellular Respiration (${respirationProblems.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    respirationProblems.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const photosynthesisProblems = generateRelatedPhotosynthesis();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part VIII: Photosynthesis (${photosynthesisProblems.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    photosynthesisProblems.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    // ============== GENETICS TOC ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'PART B: GENETICS AND MOLECULAR BIOLOGY',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 }
        })
    );

    const mendelianProblems = generateRelatedMendelianGenetics();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part IX: Mendelian Genetics (${mendelianProblems.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    mendelianProblems.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const punnettProblems = generateRelatedPunnettSquares();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part X: Punnett Squares (${punnettProblems.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    punnettProblems.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const dnaStructProblems = generateRelatedDNAStructure();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part XI: DNA Structure (${dnaStructProblems.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    dnaStructProblems.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const dnaReplProblems = generateRelatedDNAReplication();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part XII: DNA Replication (${dnaReplProblems.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    dnaReplProblems.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const transcriptionProbs = generateRelatedTranscription();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part XIII: Transcription (${transcriptionProbs.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    transcriptionProbs.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const translationProbs = generateRelatedTranslation();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part XIV: Translation (${translationProbs.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    translationProbs.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const mutationProbs = generateRelatedMutations();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part XV: Mutations (${mutationProbs.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    mutationProbs.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const geneExprProbs = generateRelatedGeneExpression();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part XVI: Gene Expression (${geneExprProbs.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    geneExprProbs.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    const inheritProbs = generateRelatedInheritancePatterns();
    documentChildren.push(
        new docx.Paragraph({
            text: `Part XVII: Inheritance Patterns (${inheritProbs.length} Problems)`,
            spacing: { before: 100, after: 50 },
            indent: { left: 360 }
        })
    );
    inheritProbs.forEach((problem) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${problemNumber}. ${problem.scenario}`,
                spacing: { after: 50 },
                indent: { left: 720 }
            })
        );
        problemNumber++;
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );


     // SECTION B: PLANT BIOLOGY
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: PLANT BIOLOGY',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 200 }
        })
    );

    // Part IX: Plant Structure
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Plant Structure (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const plantStructureProblems = generateRelatedPlantStructure();
    plantStructureProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 43}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part X: Plant Transport
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Plant Transport (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const plantTransportProblems = generateRelatedPlantTransport();
    plantTransportProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 48}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XI: Plant Reproduction
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Plant Reproduction (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const plantReproductionProblems = generateRelatedPlantReproduction();
    plantReproductionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 53}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XII: Plant Hormones
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Plant Hormones (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const plantHormoneProblems = generateRelatedPlantHormones();
    plantHormoneProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 58}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XIII: Tropisms
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIII: Tropisms (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const tropismsProblems = generateRelatedTropisms();
    tropismsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 63}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XIV: Plant Anatomy
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIV: Plant Anatomy (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const plantAnatomyProblems = generateRelatedPlantAnatomy();
    plantAnatomyProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 68}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );

    // SECTION C: ECOLOGY
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION C: ECOLOGY',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 200 }
        })
    );

    // Part XV: Ecosystems
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XV: Ecosystems (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const ecosystemsProblems = generateRelatedEcosystems();
    ecosystemsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 73}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XVI: Food Webs
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XVI: Food Webs (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const foodWebsProblems = generateRelatedFoodWebs();
    foodWebsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 78}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XVII: Energy Flow
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XVII: Energy Flow (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const energyFlowProblems = generateRelatedEnergyFlow();
    energyFlowProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 83}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XVIII: Nutrient Cycles
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XVIII: Nutrient Cycles (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const nutrientCyclesProblems = generateRelatedNutrientCycles();
    nutrientCyclesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 88}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XIX: Population Dynamics
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIX: Population Dynamics (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const populationDynamicsProblems = generateRelatedPopulationDynamics();
    populationDynamicsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 93}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XX: Biomes
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XX: Biomes (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const biomesProblems = generateRelatedBiomes();
    biomesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 98}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XXI: Symbiosis
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XXI: Symbiosis (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const symbiosisProblems = generateRelatedSymbiosis();
    symbiosisProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 103}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });
    

     // Part XXII: Ecological Succession
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XXII: Ecological Succession (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const ecologicalSuccessionProblems = generateRelatedEcologicalSuccession();
    ecologicalSuccessionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 108}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });


    // SECTION B: HOMEOSTASIS AND REGULATION
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: HOMEOSTASIS AND REGULATION (25 Problems)',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    // Part IX: General Homeostasis
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: General Homeostasis (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const homeostasisProblems = generateRelatedHomeostasis();
    homeostasisProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 43}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part X: Thermoregulation
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Thermoregulation (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const thermoregulationProblems = generateRelatedThermoregulation();
    thermoregulationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 48}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XI: Osmoregulation
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Osmoregulation (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const osmoregulationProblems = generateRelatedOsmoregulation();
    osmoregulationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 53}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XII: Blood Glucose Regulation
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Blood Glucose Regulation (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const bloodGlucoseProblems = generateRelatedBloodGlucose();
    bloodGlucoseProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 58}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XIII: Feedback Mechanisms
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIII: Feedback Mechanisms (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const feedbackProblems = generateRelatedFeedbackMechanisms();
    feedbackProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 63}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );


    //============= Anatomy ========================================

    
    // Part IX: Circulatory System
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Human Anatomy - Circulatory System (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const circulatoryProblems = generateRelatedCirculatorySystem();
    circulatoryProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${43 + index}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part X: Respiratory System
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Human Anatomy - Respiratory System (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const respiratoryProblems = generateRelatedRespiratorySystem();
    respiratoryProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${48 + index}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XI: Digestive System
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Human Anatomy - Digestive System (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const digestiveProblems = generateRelatedDigestiveSystem();
    digestiveProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${53 + index}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XII: Nervous System
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Human Anatomy - Nervous System (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const nervousProblems = generateRelatedNervousSystem();
    nervousProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${58 + index}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XIII: Endocrine System
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIII: Human Anatomy - Endocrine System (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const endocrineProblems = generateRelatedEndocrineSystem();
    endocrineProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${63 + index}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XIV: Skeletal System
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIV: Human Anatomy - Skeletal System (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const skeletalProblems = generateRelatedSkeletalSystem();
    skeletalProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${68 + index}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XV: Muscular System
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XV: Human Anatomy - Muscular System (2 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const muscularProblems = generateRelatedMuscularSystem();
    muscularProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${73 + index}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XVI: Excretory System
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XVI: Human Anatomy - Excretory System (Problems TBD)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    


    // SECTION B: MICROBIOLOGY (27 problems)
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: MICROBIOLOGY (Problems 43-69)',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 200 }
        })
    );

    // Part IX: Bacteria
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Bacteria (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const bacteriaProblems = generateRelatedBacteria();
    bacteriaProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 43}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part X: Viruses
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Viruses (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const virusesProblems = generateRelatedViruses();
    virusesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 48}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XI: Fungi
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Fungi (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const fungiProblems = generateRelatedFungi();
    fungiProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 53}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XII: Protists
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Protists (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const protistsProblems = generateRelatedProtists();
    protistsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 58}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XIII: Microbial Growth
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIII: Microbial Growth (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const microbialGrowthProblems = generateRelatedMicrobialGrowth();
    microbialGrowthProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 63}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );


    // SECTION B: HEALTH, DISEASE, AND IMMUNOLOGY (Problems 43-72)
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: HEALTH, DISEASE, AND IMMUNOLOGY (30 Problems)',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    // Part IX: Immune System
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Immune System (Problems 43-47)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const immuneSystemProblems = generateRelatedImmuneSystem();
    immuneSystemProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 43}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part X: Pathogens
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Pathogens (Problems 48-52)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const pathogenProblems = generateRelatedPathogens();
    pathogenProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 48}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XI: Vaccines
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Vaccines and Immunization (Problems 53-57)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const vaccineProblems = generateRelatedVaccines();
    vaccineProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 53}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XII: Antibodies
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Antibodies (Problems 58-62)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const antibodyProblems = generateRelatedAntibodies();
    antibodyProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 58}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XIII: Diseases
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIII: Diseases and Disorders (Problems 63-67)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const diseaseProblems = generateRelatedDiseases();
    diseaseProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 63}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XIV: Immune Response
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIV: Immune Response (Problems 68-72)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const immuneResponseProblems = generateRelatedImmuneResponse();
    immuneResponseProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 68}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );


    // ============== TAXONOMY SECTION TOC ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: TAXONOMY AND CLASSIFICATION',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    // Part IX: Classification System
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Classification System (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const classificationProblems = generateRelatedClassificationSystem();
    classificationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 43}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part X: Phylogeny
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Phylogeny and Evolutionary Relationships (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const phylogenyProblems = generateRelatedPhylogeny();
    phylogenyProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 48}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XI: Domains and Kingdoms
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Domains and Kingdoms (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const domainsProblems = generateRelatedDomainsKingdoms();
    domainsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 53}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XII: Binomial Nomenclature
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Binomial Nomenclature (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const nomenclatureProblems = generateRelatedBinomialNomenclature();
    nomenclatureProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 57}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );


    
    // SECTION B: REPRODUCTION BIOLOGY
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: REPRODUCTION BIOLOGY (19 Problems)',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 200 }
        })
    );

    // Part IX: Asexual Reproduction
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Asexual Reproduction (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const asexualProblems = generateRelatedAsexualReproduction();
    asexualProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 43}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part X: Sexual Reproduction
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Sexual Reproduction (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const sexualProblems = generateRelatedSexualReproduction();
    sexualProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 48}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XI: Embryonic Development
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Embryonic Development (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const embryonicProblems = generateRelatedEmbryonicDevelopment();
    embryonicProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 53}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XII: Human Reproduction
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Human Reproduction (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const humanReproProblems = generateRelatedHumanReproduction();
    humanReproProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 58}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );


    // PART II: EVOLUTION SECTION
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: EVOLUTION (31 Problems)',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 200 }
        })
    );

    // Part IX: Natural Selection
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Natural Selection (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const naturalSelectionProblems = generateRelatedNaturalSelection();
    naturalSelectionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 43}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part X: Evolution Mechanisms
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Evolution Mechanisms (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const evolutionMechanismsProblems = generateRelatedEvolutionMechanisms();
    evolutionMechanismsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 49}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XI: Hardy-Weinberg
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Hardy-Weinberg Equilibrium (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const hardyWeinbergProblems = generateRelatedHardyWeinberg();
    hardyWeinbergProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 54}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XII: Speciation
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Speciation (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const speciationProblems = generateRelatedSpeciation();
    speciationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 59}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XIII: Evidence for Evolution
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIII: Evidence for Evolution (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const evidenceProblems = generateRelatedEvidenceEvolution();
    evidenceProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 64}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XIV: Adaptation
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIV: Adaptation and Fitness (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const adaptationProblems = generateRelatedAdaptation();
    adaptationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 69}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );


        // PART II - ENERGY IN LIVING SYSTEMS (Problems 43-69+)
    documentChildren.push(
        new docx.Paragraph({
            text: 'PART II: ENERGY IN LIVING SYSTEMS',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 200 }
        })
    );

    // Part II-A: ATP
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-A: ATP - The Universal Energy Currency (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const atpProblems = generateRelatedATP();
    atpProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 43}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part II-B: Glycolysis
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-B: Glycolysis (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const glycolysisProblems = generateRelatedGlycolysis();
    glycolysisProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 48}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part II-C: Krebs Cycle
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-C: Krebs Cycle (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const krebsProblems = generateRelatedKrebsCycle();
    krebsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 53}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part II-D: Electron Transport Chain
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-D: Electron Transport Chain (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const etcProblems = generateRelatedElectronTransport();
    etcProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 58}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part II-E: Fermentation
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-E: Fermentation (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const fermentationProblems = generateRelatedFermentation();
    fermentationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 63}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part II-F: Light Reactions
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-F: Light Reactions of Photosynthesis (2+ Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const lightReactionsProblems = generateRelatedLightReactions();
    lightReactionsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 68}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part II-G: Calvin Cycle (will be added when complete)
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-G: Calvin Cycle (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    // Note: generateRelatedCalvinCycle() needs to be completed
    documentChildren.push(
        new docx.Paragraph({
            text: '[Calvin Cycle problems to be added]',
            spacing: { after: 100 },
            indent: { left: 360 },
            italics: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );


    // ============== PART A: CELL BIOLOGY CONTENT (from previous code) ==============
    
    console.log('\n=== PART A: CELL BIOLOGY ===\n');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'PART A: CELL BIOLOGY',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    // Part I: Cell Structure
    console.log('Processing Part I: Cell Structure...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Cell Structure and Types',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const cellStructureSolved = solveCellStructureProblems();
    let currentProblemNum = 1;
    cellStructureSolved.forEach((solved) => {
        console.log(`  Adding Cell Structure Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part II: Cell Membrane
    console.log('Processing Part II: Cell Membrane...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Cell Membrane',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const membraneSolved = solveCellMembraneProblems();
    membraneSolved.forEach((solved) => {
        console.log(`  Adding Cell Membrane Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part III: Organelles
    console.log('Processing Part III: Cell Organelles...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Cell Organelles',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const organellesSolved = solveOrganellesProblems();
    organellesSolved.forEach((solved) => {
        console.log(`  Adding Organelles Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part IV: Cell Division
    console.log('Processing Part IV: Cell Division...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Cell Division and Cell Cycle',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const cellDivisionSolved = solveCellDivisionProblems();
    cellDivisionSolved.forEach((solved) => {
        console.log(`  Adding Cell Division Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part V: Mitosis and Meiosis
    console.log('Processing Part V: Mitosis and Meiosis...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Mitosis and Meiosis',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const mitosisSolved = solveMitosisMeiosisProblems();
    mitosisSolved.forEach((solved) => {
        console.log(`  Adding Mitosis/Meiosis Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part VI: Cell Transport
    console.log('Processing Part VI: Cell Transport...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Cell Transport Mechanisms',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const transportSolved = solveCellTransportProblems();
    transportSolved.forEach((solved) => {
        console.log(`  Adding Cell Transport Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part VII: Cellular Respiration
    console.log('Processing Part VII: Cellular Respiration...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Cellular Respiration',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const respirationSolved = solveCellularRespirationProblems();
    respirationSolved.forEach((solved) => {
        console.log(`  Adding Cellular Respiration Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part VIII: Photosynthesis
    console.log('Processing Part VIII: Photosynthesis...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Photosynthesis',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const photosynthesisSolved = solvePhotosynthesisProblems();
    photosynthesisSolved.forEach((solved) => {
        console.log(`  Adding Photosynthesis Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // ============== PART B: GENETICS AND MOLECULAR BIOLOGY ==============
    
    console.log('\n=== PART B: GENETICS AND MOLECULAR BIOLOGY ===\n');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'PART B: GENETICS AND MOLECULAR BIOLOGY',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    // Part IX: Mendelian Genetics
    console.log('Processing Part IX: Mendelian Genetics...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Mendelian Genetics',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const mendelianSolved = solveMendelianGeneticsProblems();
    mendelianSolved.forEach((solved) => {
        console.log(`  Adding Mendelian Genetics Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part X: Punnett Squares
    console.log('Processing Part X: Punnett Squares...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Punnett Squares',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const punnettSolved = solvePunnettSquaresProblems();
    punnettSolved.forEach((solved) => {
        console.log(`  Adding Punnett Squares Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part XI: DNA Structure
    console.log('Processing Part XI: DNA Structure...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: DNA Structure',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const dnaStructSolved = solveDNAStructureProblems();
    dnaStructSolved.forEach((solved) => {
        console.log(`  Adding DNA Structure Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part XII: DNA Replication
    console.log('Processing Part XII: DNA Replication...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: DNA Replication',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const dnaReplSolved = solveDNAReplicationProblems();
    dnaReplSolved.forEach((solved) => {
        console.log(`  Adding DNA Replication Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part XIII: Transcription
    console.log('Processing Part XIII: Transcription...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIII: Transcription',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const transcriptionSolved = solveTranscriptionProblems();
    transcriptionSolved.forEach((solved) => {
        console.log(`  Adding Transcription Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part XIV: Translation
    console.log('Processing Part XIV: Translation...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIV: Translation',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const translationSolved = solveTranslationProblems();
    translationSolved.forEach((solved) => {
        console.log(`  Adding Translation Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part XV: Mutations
    console.log('Processing Part XV: Mutations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XV: Mutations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const mutationsSolved = solveMutationsProblems();
    mutationsSolved.forEach((solved) => {
        console.log(`  Adding Mutations Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part XVI: Gene Expression
    console.log('Processing Part XVI: Gene Expression...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XVI: Gene Expression',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const geneExprSolved = solveGeneExpressionProblems();
    geneExprSolved.forEach((solved) => {
        console.log(`  Adding Gene Expression Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });

    // Part XVII: Inheritance Patterns
    console.log('Processing Part XVII: Inheritance Patterns...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XVII: Inheritance Patterns',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const inheritSolved = solveInheritancePatternsProblems();
    inheritSolved.forEach((solved) => {
        console.log(`  Adding Inheritance Patterns Problem ${currentProblemNum} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${currentProblemNum}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        currentProblemNum++;
    });




     // ============== SECTION B: PLANT BIOLOGY ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: PLANT BIOLOGY',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    // ============== PART IX: PLANT STRUCTURE ==============
    console.log('\nProcessing Part IX: Plant Structure...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Plant Structure',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const plantStructureSolved = solvePlantStructureProblems();
    plantStructureSolved.forEach((solved, index) => {
        console.log(`  Adding Plant Structure Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 43}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART X: PLANT TRANSPORT ==============
    console.log('\nProcessing Part X: Plant Transport...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Plant Transport',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const plantTransportSolved = solvePlantTransportProblems();
    plantTransportSolved.forEach((solved, index) => {
        console.log(`  Adding Plant Transport Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 48}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XI: PLANT REPRODUCTION ==============
    console.log('\nProcessing Part XI: Plant Reproduction...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Plant Reproduction',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const plantReproductionSolved = solvePlantReproductionProblems();
    plantReproductionSolved.forEach((solved, index) => {
        console.log(`  Adding Plant Reproduction Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 53}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XII: PLANT HORMONES ==============
    console.log('\nProcessing Part XII: Plant Hormones...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Plant Hormones',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const plantHormoneSolved = solvePlantHormoneProblems();
    plantHormoneSolved.forEach((solved, index) => {
        console.log(`  Adding Plant Hormone Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 58}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XIII: TROPISMS ==============
    console.log('\nProcessing Part XIII: Tropisms...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIII: Tropisms',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const tropismsSolved = solveTropismsProblems();
    tropismsSolved.forEach((solved, index) => {
        console.log(`  Adding Tropisms Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 63}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XIV: PLANT ANATOMY ==============
    console.log('\nProcessing Part XIV: Plant Anatomy...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIV: Plant Anatomy',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const plantAnatomySolved = solvePlantAnatomyProblems();
    plantAnatomySolved.forEach((solved, index) => {
        console.log(`  Adding Plant Anatomy Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 68}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });




     // ============== SECTION C: ECOLOGY ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION C: ECOLOGY',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    // ============== PART XV: ECOSYSTEMS ==============
    console.log('\nProcessing Part XV: Ecosystems...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XV: Ecosystems',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const ecosystemsSolved = solveEcosystemsProblems();
    ecosystemsSolved.forEach((solved, index) => {
        console.log(`  Adding Ecosystems Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 73}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XVI: FOOD WEBS ==============
    console.log('\nProcessing Part XVI: Food Webs...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XVI: Food Webs',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const foodWebsSolved = solveFoodWebsProblems();
    foodWebsSolved.forEach((solved, index) => {
        console.log(`  Adding Food Webs Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 78}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XVII: ENERGY FLOW ==============
    console.log('\nProcessing Part XVII: Energy Flow...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XVII: Energy Flow',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const energyFlowSolved = solveEnergyFlowProblems();
    energyFlowSolved.forEach((solved, index) => {
        console.log(`  Adding Energy Flow Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 83}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XVIII: NUTRIENT CYCLES ==============
    console.log('\nProcessing Part XVIII: Nutrient Cycles...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XVIII: Nutrient Cycles',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const nutrientCyclesSolved = solveNutrientCyclesProblems();
    nutrientCyclesSolved.forEach((solved, index) => {
        console.log(`  Adding Nutrient Cycles Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 88}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XIX: POPULATION DYNAMICS ==============
    console.log('\nProcessing Part XIX: Population Dynamics...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIX: Population Dynamics',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const populationDynamicsSolved = solvePopulationDynamicsProblems();
    populationDynamicsSolved.forEach((solved, index) => {
        console.log(`  Adding Population Dynamics Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 93}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XX: BIOMES ==============
    console.log('\nProcessing Part XX: Biomes...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XX: Biomes',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const biomesSolved = solveBiomesProblems();
    biomesSolved.forEach((solved, index) => {
        console.log(`  Adding Biomes Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 98}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XXI: SYMBIOSIS ==============
    console.log('\nProcessing Part XXI: Symbiosis...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XXI: Symbiosis',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const symbiosisSolved = solveSymbiosisProblems();
    symbiosisSolved.forEach((solved, index) => {
        console.log(`  Adding Symbiosis Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 103}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XXII: ECOLOGICAL SUCCESSION ==============
    console.log('\nProcessing Part XXII: Ecological Succession...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XXII: Ecological Succession',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const ecologicalSuccessionSolved = solveEcologicalSuccessionProblems();
    ecologicalSuccessionSolved.forEach((solved, index) => {
        console.log(`  Adding Ecological Succession Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 108}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });


        // [Code for Parts II-VIII same as before]

    // ============== SECTION B: EVOLUTION PROBLEMS ==============
    console.log('\n========== PROCESSING SECTION B: EVOLUTION ==========');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: EVOLUTION',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    // Part IX: Natural Selection
    console.log('\nProcessing Part IX: Natural Selection...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Natural Selection',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const naturalSelectionSolved = solveNaturalSelectionProblems();
    naturalSelectionSolved.forEach((solved, index) => {
        console.log(`  Adding Natural Selection Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 43}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part X: Evolution Mechanisms
    console.log('\nProcessing Part X: Evolution Mechanisms...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Evolution Mechanisms',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const evolutionMechanismsSolved = solveEvolutionMechanismsProblems();
    evolutionMechanismsSolved.forEach((solved, index) => {
        console.log(`  Adding Evolution Mechanisms Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 49}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part XI: Hardy-Weinberg
    console.log('\nProcessing Part XI: Hardy-Weinberg...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Hardy-Weinberg Equilibrium',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const hardyWeinbergSolved = solveHardyWeinbergProblems();
    hardyWeinbergSolved.forEach((solved, index) => {
        console.log(`  Adding Hardy-Weinberg Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 54}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part XII: Speciation
    console.log('\nProcessing Part XII: Speciation...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Speciation',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const speciationSolved = solveSpeciationProblems();
    speciationSolved.forEach((solved, index) => {
        console.log(`  Adding Speciation Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 59}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part XIII: Evidence for Evolution
    console.log('\nProcessing Part XIII: Evidence for Evolution...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIII: Evidence for Evolution',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const evidenceSolved = solveEvidenceEvolutionProblems();
    evidenceSolved.forEach((solved, index) => {
        console.log(`  Adding Evidence for Evolution Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 64}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part XIV: Adaptation
    console.log('\nProcessing Part XIV: Adaptation...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIV: Adaptation and Fitness',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before:400, after: 300 },
            pageBreakBefore: true
        })
    );

    const adaptationSolved = solveAdaptationProblems();
    adaptationSolved.forEach((solved, index) => {
        console.log(`  Adding Adaptation Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 69}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    
    // ============== SECTION B: REPRODUCTION BIOLOGY ==============
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: REPRODUCTION BIOLOGY',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 600, after: 400 },
            pageBreakBefore: true,
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Asexual & Sexual Reproduction, Embryonic Development, Human Reproductive Systems',
            spacing: { after: 400 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    // ============== PART IX: ASEXUAL REPRODUCTION ==============
    console.log('\nProcessing Part IX: Asexual Reproduction...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Asexual Reproduction',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const asexualSolved = solveAsexualReproductionProblems();
    asexualSolved.forEach((solved, index) => {
        console.log(`  Adding Asexual Reproduction Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 43}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART X: SEXUAL REPRODUCTION ==============
    console.log('\nProcessing Part X: Sexual Reproduction...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Sexual Reproduction',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const sexualSolved = solveSexualReproductionProblems();
    sexualSolved.forEach((solved, index) => {
        console.log(`  Adding Sexual Reproduction Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 48}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XI: EMBRYONIC DEVELOPMENT ==============
    console.log('\nProcessing Part XI: Embryonic Development...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Embryonic Development',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const embryonicSolved = solveEmbryonicDevelopmentProblems();
    embryonicSolved.forEach((solved, index) => {
        console.log(`  Adding Embryonic Development Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 53}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XII: HUMAN REPRODUCTION ==============
    console.log('\nProcessing Part XII: Human Reproduction...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Human Reproduction',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const humanReproSolved = solveHumanReproductionProblems();
    humanReproSolved.forEach((solved, index) => {
        console.log(`  Adding Human Reproduction Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 58}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });



    // ============== SECTION B: HOMEOSTASIS AND REGULATION PROBLEMS ==============

    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: HOMEOSTASIS AND REGULATION',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    // Part IX: General Homeostasis
    console.log('\nProcessing Part IX: General Homeostasis...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: General Homeostasis',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
     );


const homeostasisSolved = solveHomeostasisProblems();
homeostasisSolved.forEach((solved, index) => {
    console.log(`  Adding General Homeostasis Problem ${index + 1} to document...`);

    documentChildren.push(
        new docx.Paragraph({
            text: `Problem ${index + 43}: ${solved.problem.scenario}`,
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `${solved.problem.problem}`,
            spacing: { after: 200 },
            bold: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Difficulty: ${solved.problem.difficulty}`,
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Helper Tip: ${solved.problem.helper}`,
            spacing: { after: 200 },
            italics: true
        })
    );

    documentChildren.push(...generateProblemSections(solved.workbook));
});

// Part X: Thermoregulation
console.log('\nProcessing Part X: Thermoregulation...');
documentChildren.push(
    new docx.Paragraph({
        text: 'Part X: Thermoregulation',
        heading: docx.HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 300 },
        pageBreakBefore: true
    })
);

const thermoregulationSolved = solveThermoregulationProblems();
thermoregulationSolved.forEach((solved, index) => {
    console.log(`  Adding Thermoregulation Problem ${index + 1} to document...`);

    documentChildren.push(
        new docx.Paragraph({
            text: `Problem ${index + 48}: ${solved.problem.scenario}`,
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `${solved.problem.problem}`,
            spacing: { after: 200 },
            bold: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Difficulty: ${solved.problem.difficulty}`,
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Helper Tip: ${solved.problem.helper}`,
            spacing: { after: 200 },
            italics: true
        })
    );

    documentChildren.push(...generateProblemSections(solved.workbook));
});

// Part XI: Osmoregulation
console.log('\nProcessing Part XI: Osmoregulation...');
documentChildren.push(
    new docx.Paragraph({
        text: 'Part XI: Osmoregulation',
        heading: docx.HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 300 },
        pageBreakBefore: true
    })
);

const osmoregulationSolved = solveOsmoregulationProblems();
osmoregulationSolved.forEach((solved, index) => {
    console.log(`  Adding Osmoregulation Problem ${index + 1} to document...`);

    documentChildren.push(
        new docx.Paragraph({
            text: `Problem ${index + 53}: ${solved.problem.scenario}`,
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `${solved.problem.problem}`,
            spacing: { after: 200 },
            bold: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Difficulty: ${solved.problem.difficulty}`,
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Helper Tip: ${solved.problem.helper}`,
            spacing: { after: 200 },
            italics: true
        })
    );

    documentChildren.push(...generateProblemSections(solved.workbook));
});

// Part XII: Blood Glucose Regulation
console.log('\nProcessing Part XII: Blood Glucose Regulation...');
documentChildren.push(
    new docx.Paragraph({
        text: 'Part XII: Blood Glucose Regulation',
        heading: docx.HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 300 },
        pageBreakBefore: true
    })
);

const bloodGlucoseSolved = solveBloodGlucoseProblems();
bloodGlucoseSolved.forEach((solved, index) => {
    console.log(`  Adding Blood Glucose Problem ${index + 1} to document...`);

    documentChildren.push(
        new docx.Paragraph({
            text: `Problem ${index + 58}: ${solved.problem.scenario}`,
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `${solved.problem.problem}`,
            spacing: { after: 200 },
            bold: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Difficulty: ${solved.problem.difficulty}`,
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Helper Tip: ${solved.problem.helper}`,
            spacing: { after: 200 },
            italics: true
        })
    );

    documentChildren.push(...generateProblemSections(solved.workbook));
});

// Part XIII: Feedback Mechanisms
console.log('\nProcessing Part XIII: Feedback Mechanisms...');
documentChildren.push(
    new docx.Paragraph({
        text: 'Part XIII: Feedback Mechanisms',
        heading: docx.HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 300 },
        pageBreakBefore: true
    })
);

const feedbackSolved = solveFeedbackMechanismsProblems();
feedbackSolved.forEach((solved, index) => {
    console.log(`  Adding Feedback Mechanisms Problem ${index + 1} to document...`);

    documentChildren.push(
        new docx.Paragraph({
            text: `Problem ${index + 63}: ${solved.problem.scenario}`,
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `${solved.problem.problem}`,
            spacing: { after: 200 },
            bold: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Difficulty: ${solved.problem.difficulty}`,
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Helper Tip: ${solved.problem.helper}`,
            spacing: { after: 200 },
            italics: true
        })
    );

    documentChildren.push(...generateProblemSections(solved.workbook));
});


    // ============== PART II: ENERGY IN LIVING SYSTEMS ==============
    console.log('\nProcessing Part II: Energy in Living Systems...');

    documentChildren.push(
        new docx.Paragraph({
            text: 'PART II: ENERGY IN LIVING SYSTEMS',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    // Part II-A: ATP
    console.log('\nProcessing Part II-A: ATP...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-A: ATP - The Universal Energy Currency',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 }
        })
    );

    const atpSolved = solveATPProblems();
    atpSolved.forEach((solved, index) => {
        console.log(`  Adding ATP Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 43}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part II-B: Glycolysis
    console.log('\nProcessing Part II-B: Glycolysis...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-B: Glycolysis',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const glycolysisSolved = solveGlycolysisProblems();
    glycolysisSolved.forEach((solved, index) => {
        console.log(`  Adding Glycolysis Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 48}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part II-C: Krebs Cycle
    console.log('\nProcessing Part II-C: Krebs Cycle...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-C: Krebs Cycle',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const krebsSolved = solveKrebsCycleProblems();
    krebsSolved.forEach((solved, index) => {
        console.log(`  Adding Krebs Cycle Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 53}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part II-D: Electron Transport Chain
    console.log('\nProcessing Part II-D: Electron Transport Chain...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-D: Electron Transport Chain',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const etcSolved = solveElectronTransportProblems();
    etcSolved.forEach((solved, index) => {
        console.log(`  Adding Electron Transport Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 58}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part II-E: Fermentation
    console.log('\nProcessing Part II-E: Fermentation...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-E: Fermentation',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const fermentationSolved = solveFermentationProblems();
    fermentationSolved.forEach((solved, index) => {
        console.log(`  Adding Fermentation Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 63}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part II-F: Light Reactions
    console.log('\nProcessing Part II-F: Light Reactions...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-F: Light Reactions of Photosynthesis',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const lightReactionsSolved = solveLightReactionsProblems();
    lightReactionsSolved.forEach((solved, index) => {
        console.log(`  Adding Light Reactions Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 68}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part II-G: Calvin Cycle (when complete)
    console.log('\nProcessing Part II-G: Calvin Cycle...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II-G: Calvin Cycle',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const calvinCycleSolved = solveCalvinCycleProblems();
    calvinCycleSolved.forEach((solved, index) => {
        console.log(`  Adding Calvin Cycle Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 70}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_3,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

   
    
    // ============== PROCESS ALL MICROBIOLOGY PROBLEMS ==============

    console.log('\nProcessing SECTION B: MICROBIOLOGY...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: MICROBIOLOGY',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    // Part IX: Bacteria
    console.log('\nProcessing Part IX: Bacteria...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Bacteria',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const bacteriaSolved = solveBacteriaProblems();
    bacteriaSolved.forEach((solved, index) => {
        console.log(`  Adding Bacteria Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 43}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part X: Viruses
    console.log('\nProcessing Part X: Viruses...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Viruses',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const virusesSolved = solveVirusesProblems();
    virusesSolved.forEach((solved, index) => {
        console.log(`  Adding Viruses Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 48}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part XI: Fungi
    console.log('\nProcessing Part XI: Fungi...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Fungi',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const fungiSolved = solveFungiProblems();
    fungiSolved.forEach((solved, index) => {
        console.log(`  Adding Fungi Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 53}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part XII: Protists
    console.log('\nProcessing Part XII: Protists...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Protists',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const protistsSolved = solveProtistsProblems();
    protistsSolved.forEach((solved, index) => {
        console.log(`  Adding Protists Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 58}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part XIII: Microbial Growth
    console.log('\nProcessing Part XIII: Microbial Growth...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIII: Microbial Growth',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const microbialGrowthSolved = solveMicrobialGrowthProblems();
    microbialGrowthSolved.forEach((solved, index) => {
        console.log(`  Adding Microbial Growth Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 63}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== ADD THIS TO EXISTING generateComprehensiveBiologyDocument FUNCTION ==============
    //Add after the Cell Biology sections (after Part VIII: Photosynthesis)

    // ============== PART IX: HUMAN ANATOMY - CIRCULATORY SYSTEM ==============
    console.log('\nProcessing Part IX: Circulatory System...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Human Anatomy - Circulatory System',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const circulatorySolved = solveCirculatorySystemProblems();
     // Continue from cell biology problems

    circulatorySolved.forEach((solved, index) => {
        console.log(`  Adding Circulatory System Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${problemNumber}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        problemNumber++;
    });

    // ============== PART X: HUMAN ANATOMY - RESPIRATORY SYSTEM ==============
    console.log('\nProcessing Part X: Respiratory System...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Human Anatomy - Respiratory System',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const respiratorySolved = solveRespiratorySystemProblems();
    respiratorySolved.forEach((solved, index) => {
        console.log(`  Adding Respiratory System Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${problemNumber}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        problemNumber++;
    });

    // ============== PART XI: HUMAN ANATOMY - DIGESTIVE SYSTEM ==============
    console.log('\nProcessing Part XI: Digestive System...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Human Anatomy - Digestive System',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const digestiveSolved = solveDigestiveSystemProblems();
    digestiveSolved.forEach((solved, index) => {
        console.log(`  Adding Digestive System Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${problemNumber}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        problemNumber++;
    });

    // ============== PART XII: HUMAN ANATOMY - NERVOUS SYSTEM ==============
    console.log('\nProcessing Part XII: Nervous System...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Human Anatomy - Nervous System',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const nervousSolved = solveNervousSystemProblems();
    nervousSolved.forEach((solved, index) => {
        console.log(`  Adding Nervous System Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${problemNumber}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        problemNumber++;
    });

    // ============== PART XIII: HUMAN ANATOMY - ENDOCRINE SYSTEM ==============
    console.log('\nProcessing Part XIII: Endocrine System...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIII: Human Anatomy - Endocrine System',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const endocrineSolved = solveEndocrineSystemProblems();
    endocrineSolved.forEach((solved, index) => {
        console.log(`  Adding Endocrine System Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${problemNumber}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
        problemNumber++;
    });


    // ============== SECTION B: HEALTH, DISEASE, AND IMMUNOLOGY ==============
    
    console.log('\n=== SECTION B: HEALTH, DISEASE, AND IMMUNOLOGY ===');
    
    // Part IX: Immune System
    console.log('\nProcessing Part IX: Immune System...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: HEALTH, DISEASE, AND IMMUNOLOGY',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Immune System',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const immuneSystemSolved = solveImmuneSystemProblems();
    immuneSystemSolved.forEach((solved, index) => {
        console.log(`  Adding Immune System Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 43}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part X: Pathogens
    console.log('\nProcessing Part X: Pathogens...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Pathogens',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const pathogenSolved = solvePathogenProblems();
    pathogenSolved.forEach((solved, index) => {
        console.log(`  Adding Pathogen Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 48}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part XI: Vaccines
    console.log('\nProcessing Part XI: Vaccines and Immunization...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Vaccines and Immunization',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const vaccineSolved = solveVaccineProblems();
    vaccineSolved.forEach((solved, index) => {
        console.log(`  Adding Vaccine Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 53}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part XII: Antibodies
    console.log('\nProcessing Part XII: Antibodies...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Antibodies',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const antibodySolved = solveAntibodyProblems();
    antibodySolved.forEach((solved, index) => {
        console.log(`  Adding Antibody Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 58}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part XIII: Diseases
    console.log('\nProcessing Part XIII: Diseases and Disorders...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIII: Diseases and Disorders',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const diseaseSolved = solveDiseaseProblems();
    diseaseSolved.forEach((solved, index) => {
        console.log(`  Adding Disease Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 63}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Part XIV: Immune Response
    console.log('\nProcessing Part XIV: Immune Response...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XIV: Immune Response',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const immuneResponseSolved = solveImmuneResponseProblems();
    immuneResponseSolved.forEach((solved, index) => {
        console.log(`  Adding Immune Response Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 68}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });


    
    // ============== SECTION B: TAXONOMY AND CLASSIFICATION ==============
    
    console.log('\nProcessing SECTION B: TAXONOMY AND CLASSIFICATION...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: TAXONOMY AND CLASSIFICATION',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Understanding how scientists organize and name the diversity of life',
            spacing: { after: 400 },
            italics: true
        })
    );

    // ============== PART IX: CLASSIFICATION SYSTEM ==============
    console.log('\nProcessing Part IX: Classification System...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Classification System',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const classificationSolved = solveClassificationSystemProblems();
    classificationSolved.forEach((solved, index) => {
        console.log(`  Adding Classification System Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 43}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART X: PHYLOGENY ==============
    console.log('\nProcessing Part X: Phylogeny and Evolutionary Relationships...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Phylogeny and Evolutionary Relationships',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const phylogenySolved = solvePhylogenyProblems();
    phylogenySolved.forEach((solved, index) => {
        console.log(`  Adding Phylogeny Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 48}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XI: DOMAINS AND KINGDOMS ==============
    console.log('\nProcessing Part XI: Domains and Kingdoms...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Domains and Kingdoms',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const domainsSolved = solveDomainsKingdomsProblems();
    domainsSolved.forEach((solved, index) => {
        console.log(`  Adding Domains and Kingdoms Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 53}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XII: BINOMIAL NOMENCLATURE ==============
    console.log('\nProcessing Part XII: Binomial Nomenclature...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Binomial Nomenclature',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const nomenclatureSolved = solveBinomialNomenclatureProblems();
    nomenclatureSolved.forEach((solved, index) => {
        console.log(`  Adding Binomial Nomenclature Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 57}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });


    // ============== CREATE AND SAVE DOCUMENT ==============
    const doc = new docx.Document({
        sections: [{
            properties: {
                page: {
                    margin: {
                        top: 720,
                        right: 720,
                        bottom: 720,
                        left: 720
                    }
                }
            },
            children: documentChildren
        }]
    });

    // Save the document
    try {
        const buffer = await docx.Packer.toBuffer(doc);
        const filename = 'comprehensive_biology_workbook_complete.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);
        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE BIOLOGY DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log(`  • Total Problems: ${currentProblemNum - 1}`);
        console.log('\n📖 PART A - CELL BIOLOGY:');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE COMPREHENSIVE DOCUMENT GENERATION ==============

generateComprehensiveBiologyDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
