Here are all four generators updated with async diagram generation and BiologyDiagramsRenderer:
// ==================== HOMEOSTASIS & REGULATION GENERATORS ====================

generateRelatedHomeostasisDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Homeostasis - Definition and Importance',
        problem: 'Define homeostasis and explain why it is essential for survival. Give three examples of factors regulated by homeostasis.',
        parameters: {
            concept: 'homeostasis',
            examples: true
        },
        type: 'homeostasis',
        subparts: [
            'Homeostasis: maintaining stable internal conditions despite external changes',
            'Essential for survival because cells need specific conditions to function',
            'Example 1: Body temperature maintained at ~37°C (98.6°F)',
            'Example 2: Blood glucose maintained at 70-110 mg/dL',
            'Example 3: Blood pH maintained at ~7.4',
            'Other examples: water balance, blood pressure, oxygen levels'
        ],
        helper: 'Homeostasis = "staying the same"; Body constantly makes adjustments to maintain balance',
        realWorldContext: 'Understanding homeostasis is fundamental to health and disease',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'negativeFeedback',
            renderOptions: {
                title: 'Homeostasis - Negative Feedback Loop',
                showLabels: true,
                exampleType: 'general'
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `homeostasis_general_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Negative Feedback Loop - Basic Concept',
        problem: 'Draw a negative feedback loop diagram. Explain how negative feedback maintains homeostasis.',
        parameters: {
            feedbackType: 'negative',
            showMechanism: true
        },
        type: 'homeostasis',
        subparts: [
            'Negative feedback: response reverses/opposes the initial change',
            'Steps: 1) Stimulus (change detected), 2) Receptor detects change',
            '3) Control center processes information, 4) Effector produces response',
            '5) Response reverses the stimulus, 6) Return to set point',
            'Example: If body temperature rises → sweating cools body down',
            'Most common type of homeostatic regulation (~90% of mechanisms)'
        ],
        helper: 'Negative feedback = "turn off" signal; Like a thermostat turning off heat when temperature reaches set point',
        realWorldContext: 'Negative feedback is the most common regulatory mechanism in the body',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'negativeFeedback',
            renderOptions: {
                title: 'Negative Feedback Loop',
                showLabels: true,
                exampleType: 'general'
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `negative_feedback_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Thermoregulation - Temperature Control Mechanisms',
        problem: 'Draw and explain the mechanisms of thermoregulation. Show what happens when body temperature is too hot or too cold.',
        parameters: {
            regulationType: 'temperature',
            showBothConditions: true
        },
        type: 'homeostasis',
        subparts: [
            'Normal body temperature: ~37°C (98.6°F)',
            'When TOO HOT: Vasodilation (blood vessels widen near skin surface)',
            '  - Sweating (evaporative cooling)',
            '  - Decreased metabolic rate',
            '  - Behavioral responses (seek shade, remove clothing)',
            'When TOO COLD: Vasoconstriction (blood vessels narrow)',
            '  - Shivering (muscle contractions generate heat)',
            '  - Increased metabolic rate',
            '  - Behavioral responses (seek warmth, add clothing)',
            'Hypothalamus acts as the body\'s thermostat (control center)'
        ],
        helper: 'Hot = dissipate heat (vasodilation, sweating); Cold = conserve/generate heat (vasoconstriction, shivering)',
        realWorldContext: 'Understanding thermoregulation helps prevent heat stroke and hypothermia',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'thermoregulation',
            renderOptions: {
                title: 'Thermoregulation Mechanisms',
                showLabels: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `thermoregulation_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    return relatedProblems;
}

generateRelatedThermoregulationDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Thermoregulation in Different Organisms',
        problem: 'Compare thermoregulation in endotherms (warm-blooded) and ectotherms (cold-blooded). Give examples of each.',
        parameters: {
            compareOrganismTypes: true,
            showExamples: true
        },
        type: 'homeostasis',
        subparts: [
            'ENDOTHERMS (warm-blooded): Regulate temperature internally',
            '  - Maintain constant body temperature (~37-40°C)',
            '  - Generate heat through metabolism',
            '  - Examples: mammals (humans, dogs, bears), birds (eagles, penguins)',
            '  - Advantages: Active in various temperatures, can inhabit cold climates',
            '  - Disadvantages: High energy requirement (must eat more)',
            'ECTOTHERMS (cold-blooded): Regulate temperature externally',
            '  - Body temperature varies with environment',
            '  - Rely on behavioral thermoregulation (basking, seeking shade)',
            '  - Examples: reptiles (lizards, snakes), amphibians (frogs), fish, insects',
            '  - Advantages: Lower energy requirement',
            '  - Disadvantages: Activity limited by environmental temperature'
        ],
        helper: 'Endo = internal; Ecto = external; Thermos = heat',
        realWorldContext: 'Understanding why reptiles bask in sun and why mammals can live in Arctic',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'thermoregulation',
            renderOptions: {
                title: 'Thermoregulation Strategies',
                showLabels: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `thermoregulation_organisms_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Sweating and Evaporative Cooling',
        problem: 'Explain how sweating cools the body. Why does sweating work better in dry climates than humid climates?',
        parameters: {
            mechanism: 'evaporative cooling',
            environmentalFactors: true
        },
        type: 'homeostasis',
        subparts: [
            'Sweating mechanism: Sweat glands secrete water onto skin surface',
            'Evaporative cooling: When sweat evaporates, it absorbs heat energy from skin',
            'This heat absorption cools the body down',
            'In DRY CLIMATES: Sweat evaporates quickly → effective cooling',
            'In HUMID CLIMATES: Air already saturated with water → slow evaporation',
            '  - Sweat stays on skin instead of evaporating',
            '  - Less effective cooling (feel hotter and sticky)',
            'This is why humidity makes hot days feel worse'
        ],
        helper: 'Evaporation requires energy (heat) → takes heat from body → cooling effect',
        realWorldContext: 'Explains why 35°C in Arizona feels cooler than 30°C in Florida',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'thermoregulation',
            renderOptions: {
                title: 'Sweating and Evaporative Cooling',
                showLabels: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `sweating_evaporative_cooling_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Thermoregulation Disorders',
        problem: 'Describe heat stroke and hypothermia. What causes each condition and what are the symptoms?',
        parameters: {
            disorders: ['heat stroke', 'hypothermia'],
            showSymptoms: true,
            showTreatment: true
        },
        type: 'homeostasis',
        subparts: [
            'HEAT STROKE: Body temperature rises dangerously high (>40°C/104°F)',
            '  Causes: Prolonged exposure to high temperatures, dehydration, intense exercise',
            '  Symptoms: High body temp, red/hot/dry skin, confusion, rapid pulse, unconsciousness',
            '  Treatment: Cool body immediately (ice packs, cool water), seek medical help',
            '  Serious medical emergency - can cause organ damage or death',
            'HYPOTHERMIA: Body temperature drops dangerously low (<35°C/95°F)',
            '  Causes: Prolonged exposure to cold, wet clothing, cold water immersion',
            '  Symptoms: Shivering (stops at severe stage), confusion, drowsiness, slurred speech',
            '  Treatment: Warm body gradually, warm drinks, dry clothing, medical attention',
            '  Can lead to cardiac arrest if core temperature drops too low'
        ],
        helper: 'Both are failures of thermoregulation - body cannot maintain normal temperature',
        realWorldContext: 'Important for recognizing and treating temperature-related emergencies',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'thermoregulation',
            renderOptions: {
                title: 'Thermoregulation and Temperature Disorders',
                showLabels: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `thermoregulation_disorders_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    return relatedProblems;
}

generateRelatedOsmoregulationDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Osmoregulation and Water Balance',
        problem: 'Define osmoregulation. Explain how kidneys regulate water balance in the body.',
        parameters: {
            concept: 'osmoregulation',
            organ: 'kidneys',
            showMechanism: true
        },
        type: 'homeostasis',
        subparts: [
            'Osmoregulation: maintaining proper water and salt (electrolyte) balance',
            'Kidneys are the main organs for osmoregulation',
            'Functions: Filter blood, remove wastes, regulate water and salt levels',
            'When DEHYDRATED (low water):',
            '  - Pituitary releases ADH (antidiuretic hormone)',
            '  - Kidneys reabsorb MORE water',
            '  - Produce less, concentrated urine (dark yellow)',
            'When OVERHYDRATED (excess water):',
            '  - Less ADH released',
            '  - Kidneys reabsorb LESS water',
            '  - Produce more, dilute urine (clear/pale yellow)',
            'Maintains blood osmotic pressure and proper cell function'
        ],
        helper: 'Osmo = pressure; Regulation = control; ADH = "anti" urine hormone (reduces urine output)',
        realWorldContext: 'Explains why urine color indicates hydration status',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'waterBalance',
            renderOptions: {
                title: 'Osmoregulation - Water Balance',
                showLabels: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `osmoregulation_water_balance_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Nephron Structure and Function',
        problem: 'Draw a nephron and label its main parts. Explain the three main processes that occur in the nephron.',
        parameters: {
            structure: 'nephron',
            showProcesses: true
        },
        type: 'homeostasis',
        subparts: [
            'Nephron: functional unit of kidney (~1 million per kidney)',
            'Parts: Glomerulus, Bowman\'s capsule, Proximal tubule, Loop of Henle, Distal tubule, Collecting duct',
            'PROCESS 1 - FILTRATION (in glomerulus/Bowman\'s capsule):',
            '  - Blood pressure forces water, glucose, salts, wastes from blood into nephron',
            '  - Blood cells and large proteins stay in blood',
            'PROCESS 2 - REABSORPTION (in tubules):',
            '  - Useful substances (water, glucose, amino acids, salts) returned to blood',
            '  - 99% of filtered water is reabsorbed',
            'PROCESS 3 - SECRETION (in tubules):',
            '  - Additional wastes and excess ions actively transported into nephron',
            '  - Final product = urine (water + wastes)'
        ],
        helper: 'Filter → Reabsorb good stuff → Secrete extra wastes → Urine',
        realWorldContext: 'Understanding kidney function helps understand kidney disease and dialysis',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'nephron',
            renderOptions: {
                title: 'Nephron Structure and Function',
                showLabels: true
            },
            canvasSize: { width: 700, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `nephron_structure_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'ADH and Osmoregulation Mechanism',
        problem: 'Explain in detail how ADH (antidiuretic hormone) regulates water balance. What triggers ADH release and what are its effects?',
        parameters: {
            hormone: 'ADH',
            detailedMechanism: true,
            showFeedback: true
        },
        type: 'homeostasis',
        subparts: [
            'ADH (Antidiuretic Hormone) = Vasopressin',
            'Produced by: Hypothalamus, stored/released by: Posterior pituitary gland',
            'DEHYDRATION PATHWAY:',
            '  1. Blood osmotic pressure increases (more concentrated)',
            '  2. Osmoreceptors in hypothalamus detect this',
            '  3. Hypothalamus signals pituitary to release MORE ADH',
            '  4. ADH travels through blood to kidneys',
            '  5. ADH makes collecting duct more permeable to water',
            '  6. Kidneys reabsorb MORE water back into blood',
            '  7. Less, concentrated urine produced',
            '  8. Blood osmotic pressure decreases → negative feedback stops ADH release',
            'OVERHYDRATION: Opposite occurs (less ADH, more dilute urine)',
            'Diabetes insipidus: ADH deficiency → excessive urination and thirst'
        ],
        helper: 'ADH = "anti-diuretic" = reduces urine production; Diuretic = increases urine',
        realWorldContext: 'Alcohol inhibits ADH → more urination → dehydration → hangover',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'waterBalance',
            renderOptions: {
                title: 'ADH and Water Balance Regulation',
                showLabels: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `adh_mechanism_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    return relatedProblems;
}

generateRelatedBloodGlucoseDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Blood Glucose Regulation - Insulin and Glucagon',
        problem: 'Explain how insulin and glucagon work together to regulate blood glucose levels. Draw a diagram showing this regulation.',
        parameters: {
            hormones: ['insulin', 'glucagon'],
            showFeedback: true
        },
        type: 'homeostasis',
        subparts: [
            'Normal blood glucose: 70-110 mg/dL (fasting)',
            'Pancreas produces both hormones (islets of Langerhans):',
            '  - Beta cells produce INSULIN',
            '  - Alpha cells produce GLUCAGON',
            'When blood glucose is HIGH (after eating):',
            '  1. Beta cells release INSULIN',
            '  2. Insulin signals cells to take up glucose from blood',
            '  3. Liver converts glucose → glycogen (storage)',
            '  4. Blood glucose decreases',
            'When blood glucose is LOW (between meals, exercise):',
            '  1. Alpha cells release GLUCAGON',
            '  2. Glucagon signals liver to break down glycogen → glucose',
            '  3. Glucose released into blood',
            '  4. Blood glucose increases',
            'This is an example of antagonistic hormones (opposite effects)'
        ],
        helper: 'Insulin = lowers glucose (store it); Glucagon = raises glucose (release it)',
        realWorldContext: 'Understanding this helps explain diabetes and hypoglycemia',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'bloodGlucoseRegulation',
            renderOptions: {
                title: 'Blood Glucose Regulation',
                showLabels: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `blood_glucose_regulation_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Diabetes - Type 1 vs Type 2',
        problem: 'Compare Type 1 and Type 2 diabetes. What causes each type and how are they treated?',
        parameters: {
            diseaseComparison: true,
            types: ['type1', 'type2']
        },
        type: 'homeostasis',
        subparts: [
            'Both types: Result in high blood glucose (hyperglycemia)',
            'TYPE 1 DIABETES (Insulin-Dependent):',
            '  Cause: Autoimmune disease - immune system destroys beta cells',
            '  Result: NO insulin production',
            '  Onset: Usually childhood/young adult (juvenile diabetes)',
            '  Treatment: Must take insulin injections or pump',
            '  Percentage: ~10% of diabetes cases',
            'TYPE 2 DIABETES (Non-Insulin-Dependent):',
            '  Cause: Insulin resistance - cells don\'t respond to insulin properly',
            '  Result: Insulin produced but ineffective',
            '  Onset: Usually adults (linked to obesity, lifestyle)',
            '  Treatment: Diet, exercise, oral medications, sometimes insulin',
            '  Percentage: ~90% of diabetes cases',
            '  Often preventable/reversible with lifestyle changes'
        ],
        helper: 'Type 1 = no insulin; Type 2 = insulin not working properly',
        realWorldContext: 'Rising Type 2 diabetes rates linked to obesity epidemic',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'bloodGlucoseRegulation',
            renderOptions: {
                title: 'Blood Glucose Regulation and Diabetes',
                showLabels: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `diabetes_comparison_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Blood Glucose Regulation - Complete Feedback Loop',
        problem: 'Draw a complete negative feedback loop showing blood glucose regulation. Include the stimulus, receptors, control center, effectors, and response for both high and low blood glucose.',
        parameters: {
            completeFeedbackLoop: true,
            showBothPathways: true,
            detailedComponents: true
        },
        type: 'homeostasis',
        subparts: [
            'HIGH BLOOD GLUCOSE PATHWAY:',
            '  Stimulus: Blood glucose rises above 110 mg/dL (after meal)',
            '  Receptor: Beta cells in pancreas detect high glucose',
            '  Control Center: Pancreas (beta cells)',
            '  Effector: Insulin released into bloodstream',
            '  Response: Body cells take up glucose, liver stores glucose as glycogen',
            '  Result: Blood glucose decreases back to normal',
            '  Negative Feedback: Normal glucose stops insulin release',
            'LOW BLOOD GLUCOSE PATHWAY:',
            '  Stimulus: Blood glucose drops below 70 mg/dL (fasting, exercise)',
            '  Receptor: Alpha cells in pancreas detect low glucose',
            '  Control Center: Pancreas (alpha cells)',
            '  Effector: Glucagon released into bloodstream',
            '  Response: Liver breaks down glycogen to glucose, releases into blood',
            '  Result: Blood glucose increases back to normal',
            '  Negative Feedback: Normal glucose stops glucagon release',
            'Both pathways work antagonistically to maintain homeostasis'
        ],
        helper: 'Two opposite pathways balance each other like a seesaw',
        realWorldContext: 'This dual regulation ensures stable energy supply to brain and muscles',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'bloodGlucoseRegulation',
            renderOptions: {
                title: 'Blood Glucose Regulation - Complete Feedback Loops',
                showLabels: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `blood_glucose_feedback_complete_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    return relatedProblems;
}

generateRelatedFeedbackMechanismsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Negative vs Positive Feedback',
        problem: 'Compare negative feedback and positive feedback mechanisms. Give two examples of each.',
        parameters: {
            compareTypes: true,
            showExamples: true
        },
        type: 'homeostasis',
        subparts: [
            'NEGATIVE FEEDBACK (Most common - ~90% of mechanisms):',
            '  Definition: Response REVERSES/OPPOSES the original stimulus',
            '  Effect: Returns system to set point (maintains homeostasis)',
            '  Example 1: Body temperature - if too hot → sweat (cool down)',
            '  Example 2: Blood glucose - if too high → insulin (lower it)',
            '  Example 3: Blood pressure - if too high → vasodilation (decrease it)',
            '  Analogy: Thermostat turning off heat when temperature reaches set point',
            'POSITIVE FEEDBACK (Rare in homeostasis):',
            '  Definition: Response AMPLIFIES/ENHANCES the original stimulus',
            '  Effect: Moves system away from starting point (intensifies change)',
            '  Example 1: Childbirth - contractions → oxytocin → more contractions',
            '  Example 2: Blood clotting - platelet activation → more platelets',
            '  Example 3: Fruit ripening - ethylene gas triggers more ethylene',
            '  Analogy: Snowball rolling downhill getting bigger',
            'Key difference: Negative stabilizes, Positive amplifies'
        ],
        helper: 'Negative = stabilizing (most common); Positive = amplifying (less common)',
        realWorldContext: 'Understanding feedback helps explain body regulation and medical conditions',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'negativeFeedback',
            renderOptions: {
                title: 'Negative Feedback Mechanism',
                showLabels: true,
                exampleType: 'general'
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `feedback_mechanisms_comparison_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Positive Feedback - Childbirth Example',
        problem: 'Explain how positive feedback works during childbirth. Why is this one of the few cases where positive feedback is beneficial?',
        parameters: {
            feedbackType: 'positive',
            example: 'childbirth',
            showMechanism: true
        },
        type: 'homeostasis',
        subparts: [
            'CHILDBIRTH POSITIVE FEEDBACK LOOP:',
            '  1. Baby\'s head pushes against cervix (stimulus)',
            '  2. Stretch receptors in cervix detect pressure',
            '  3. Signal sent to brain (hypothalamus)',
            '  4. Pituitary gland releases OXYTOCIN hormone',
            '  5. Oxytocin causes uterus to contract MORE strongly',
            '  6. Stronger contractions push baby harder against cervix',
            '  7. This creates MORE stretch → MORE oxytocin → STRONGER contractions',
            '  8. Cycle continues, AMPLIFYING until baby is born',
            '  9. Birth of baby stops the stimulus → feedback loop ends',
            'Why beneficial here: Need to complete process quickly and effectively',
            'Negative feedback would STOP contractions (not helpful for birth)',
            'Positive feedback AMPLIFIES until goal achieved (baby delivered)'
        ],
        helper: 'Positive feedback = "keep going stronger until done"; Has a definite endpoint',
        realWorldContext: 'Oxytocin sometimes given to induce/speed labor (Pitocin)',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'negativeFeedback',
            renderOptions: {
                title: 'Positive Feedback - Childbirth',
                showLabels: true,
                exampleType: 'general'
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `positive_feedback_childbirth_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multiple Feedback Systems Working Together',
        problem: 'Explain how multiple feedback systems work together during exercise. Include thermoregulation, respiratory rate, and blood glucose regulation.',
        parameters: {
            multipleSystems: true,
            scenario: 'exercise',
            showIntegration: true
        },
        type: 'homeostasis',
        subparts: [
            'DURING EXERCISE - Multiple homeostatic systems activate:',
            '1. THERMOREGULATION:',
            '  - Muscles generate heat → body temperature rises',
            '  - Thermoreceptors detect increase',
            '  - Response: Vasodilation, sweating to cool down',
            '2. RESPIRATORY RATE:',
            '  - Muscles use O₂, produce CO₂ → blood CO₂ increases, pH drops',
            '  - Chemoreceptors in brain/arteries detect changes',
            '  - Response: Breathing rate increases (get more O₂, remove CO₂)',
            '3. HEART RATE:',
            '  - Muscles need more oxygen and glucose',
            '  - Response: Heart beats faster, blood pressure increases',
            '4. BLOOD GLUCOSE:',
            '  - Muscles consume glucose for energy → blood glucose drops',
            '  - Response: Glucagon released, liver releases stored glucose',
            '5. WATER BALANCE:',
            '  - Sweating causes water loss → dehydration risk',
            '  - Response: ADH released to conserve water, thirst mechanism',
            'All systems coordinated by nervous and endocrine systems',
            'This integration maintains homeostasis during stress'
        ],
        helper: 'Body adjusts multiple parameters simultaneously to meet exercise demands',
        realWorldContext: 'Understanding this explains why hydration and warm-up/cool-down are important',
        diagramInfo: {
            type: 'homeostasis',
            registryKey: 'negativeFeedback',
            renderOptions: {
                title: 'Multiple Feedback Systems During Exercise',
                showLabels: true,
                exampleType: 'general'
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `multiple_feedback_exercise_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    return relatedProblems;
}

