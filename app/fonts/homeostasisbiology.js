
// Enhanced Homeostasis and Regulation Workbook - Comprehensive Biological Content System
import * as math from 'mathjs';

export class EnhancedHomeostasisRegulationWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "biological";
        this.cellWidth = 200;
        this.cellHeight = 28;
        this.headerHeight = 35;
        this.contentHeight = 40;
        this.rowLabelWidth = 60;
        this.fontSize = 12;
        this.contentFontSize = 14;

        this.currentProblem = null;
        this.currentContent = null;
        this.contentSteps = [];
        this.currentWorkbook = null;
        this.diagramData = null;

        // Enhanced explanation options
        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        this.biologicalSymbols = this.initializeBiologicalSymbols();
        this.setThemeColors();
        this.initializeHomeostasisTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializeHomeostasisLessons();
    }

    setThemeColors() {
        const themes = {
            biological: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
                headerBg: '#2e7d32',
                headerText: '#ffffff',
                sectionBg: '#c8e6c9',
                sectionText: '#1b5e20',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e8f5e9',
                resultText: '#2e7d32',
                definitionBg: '#fff9c4',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#81c784',
                contentBg: '#e3f2fd',
                contentText: '#0d47a1',
                diagramBg: '#f3e5f5',
                structureBg: '#fce4ec'
            },
            scientific: {
                background: '#f8f9fa',
                gridColor: '#4682b4',
                headerBg: '#1565c0',
                headerText: '#ffffff',
                sectionBg: '#bbdefb',
                sectionText: '#0d47a1',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e1f5fe',
                resultText: '#01579b',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#e8eaf6',
                stepText: '#311b92',
                borderColor: '#42a5f5',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#fff9c4'
            }
        };

        this.colors = themes[this.theme] || themes.biological;
    }

    initializeBiologicalSymbols() {
        return {
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'arrow': '→',
            'doubleArrow': '↔',
            'plus': '⊕',
            'minus': '⊖',
            'micro': 'μ',
            'degree': '°',
            'celsius': '°C',
            'approximately': '≈',
            'infinity': '∞',
            'proportional': '∝',
            'increase': '↑',
            'decrease': '↓',
            'ATP': 'ATP',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'H2O': 'H₂O',
            'glucose': 'C₆H₁₂O₆',
            'Ca2+': 'Ca²⁺',
            'Na+': 'Na⁺',
            'K+': 'K⁺'
        };
    }

    initializeHomeostasisTopics() {
        this.homeostasisTopics = {
            // 1. General Homeostasis
            homeostasis_general: {
                patterns: [
                    /homeostasis/i,
                    /internal.*balance/i,
                    /steady.*state/i,
                    /dynamic.*equilibrium/i
                ],
                handler: this.handleHomeostasisGeneral.bind(this),
                name: 'Homeostasis Overview',
                category: 'homeostasis',
                description: 'General principles of homeostatic regulation'
            },

            // 2. Thermoregulation
            thermoregulation: {
                patterns: [
                    /thermoregulation|temperature.*regulation/i,
                    /body.*temperature|heat.*regulation/i,
                    /endotherm|ectotherm/i,
                    /hypothalamus.*temperature/i
                ],
                handler: this.handleThermoregulation.bind(this),
                name: 'Thermoregulation',
                category: 'temperature_control',
                description: 'Temperature regulation and control mechanisms'
            },

            // 3. Osmoregulation
            osmoregulation: {
                patterns: [
                    /osmoregulation|water.*balance/i,
                    /kidney|nephron/i,
                    /ADH|antidiuretic.*hormone/i,
                    /osmotic.*regulation/i
                ],
                handler: this.handleOsmoregulation.bind(this),
                name: 'Osmoregulation',
                category: 'water_balance',
                description: 'Water and salt balance regulation'
            },

            // 4. Blood Glucose Regulation
            blood_glucose: {
                patterns: [
                    /blood.*glucose|glucose.*regulation/i,
                    /insulin|glucagon/i,
                    /diabetes|blood.*sugar/i,
                    /pancreas.*regulation/i
                ],
                handler: this.handleBloodGlucose.bind(this),
                name: 'Blood Glucose Regulation',
                category: 'metabolic_regulation',
                description: 'Regulation of blood sugar levels'
            },

            // 5. Feedback Mechanisms
            feedback_mechanisms: {
                patterns: [
                    /feedback.*mechanism|negative.*feedback/i,
                    /positive.*feedback/i,
                    /control.*system|regulatory.*loop/i,
                    /set.*point/i
                ],
                handler: this.handleFeedbackMechanisms.bind(this),
                name: 'Feedback Mechanisms',
                category: 'control_systems',
                description: 'Positive and negative feedback loops'
            },

            // 6. Nervous System Regulation
            nervous_regulation: {
                patterns: [
                    /nervous.*regulation|neural.*control/i,
                    /autonomic.*nervous.*system/i,
                    /sympathetic|parasympathetic/i,
                    /reflex.*arc/i
                ],
                handler: this.handleNervousRegulation.bind(this),
                name: 'Nervous System Regulation',
                category: 'neural_control',
                description: 'Nervous system control of homeostasis'
            },

            // 7. Endocrine System Regulation
            endocrine_regulation: {
                patterns: [
                    /endocrine.*regulation|hormone.*control/i,
                    /hormone.*system/i,
                    /gland.*secretion/i,
                    /endocrine.*gland/i
                ],
                handler: this.handleEndocrineRegulation.bind(this),
                name: 'Endocrine System Regulation',
                category: 'hormonal_control',
                description: 'Hormonal control of homeostasis'
            },

            // 8. pH Regulation
            ph_regulation: {
                patterns: [
                    /pH.*regulation|acid.*base.*balance/i,
                    /buffer.*system/i,
                    /respiratory.*acidosis|metabolic.*alkalosis/i,
                    /blood.*pH/i
                ],
                handler: this.handlePHRegulation.bind(this),
                name: 'pH Regulation',
                category: 'chemical_balance',
                description: 'Regulation of blood and body pH'
            },

            // 9. Blood Pressure Regulation
            blood_pressure: {
                patterns: [
                    /blood.*pressure.*regulation/i,
                    /hypertension|hypotension/i,
                    /baroreceptor|renin.*angiotensin/i,
                    /cardiovascular.*regulation/i
                ],
                handler: this.handleBloodPressure.bind(this),
                name: 'Blood Pressure Regulation',
                category: 'cardiovascular_control',
                description: 'Regulation of blood pressure'
            },

            // 10. Calcium Regulation
            calcium_regulation: {
                patterns: [
                    /calcium.*regulation|calcium.*homeostasis/i,
                    /parathyroid.*hormone|calcitonin/i,
                    /bone.*calcium/i,
                    /hypercalcemia|hypocalcemia/i
                ],
                handler: this.handleCalciumRegulation.bind(this),
                name: 'Calcium Regulation',
                category: 'mineral_balance',
                description: 'Regulation of blood calcium levels'
            },

            // 11. Gas Exchange Regulation
            gas_exchange: {
                patterns: [
                    /gas.*exchange.*regulation/i,
                    /respiratory.*control|breathing.*regulation/i,
                    /oxygen.*carbon.*dioxide/i,
                    /chemoreceptor/i
                ],
                handler: this.handleGasExchange.bind(this),
                name: 'Gas Exchange Regulation',
                category: 'respiratory_control',
                description: 'Regulation of oxygen and CO₂ levels'
            },

            // 12. Stress Response
            stress_response: {
                patterns: [
                    /stress.*response|fight.*or.*flight/i,
                    /cortisol|adrenaline|epinephrine/i,
                    /HPA.*axis/i,
                    /acute.*stress|chronic.*stress/i
                ],
                handler: this.handleStressResponse.bind(this),
                name: 'Stress Response',
                category: 'adaptive_response',
                description: 'Physiological responses to stress'
            }
        };
    }

    initializeHomeostasisLessons() {
        this.lessons = {
            homeostasis_general: {
                title: "Introduction to Homeostasis",
                concepts: [
                    "Homeostasis maintains stable internal conditions",
                    "Dynamic equilibrium involves constant adjustments",
                    "Set points are target values for regulated variables",
                    "Sensors, control centers, and effectors work together"
                ],
                theory: "Homeostasis is the maintenance of relatively stable internal conditions despite changes in the external environment. It involves continuous monitoring and adjustment through feedback mechanisms.",
                keyDefinitions: {
                    "Homeostasis": "The maintenance of stable internal conditions in an organism",
                    "Set Point": "The target value for a regulated variable",
                    "Sensor (Receptor)": "Detects changes in the internal or external environment",
                    "Control Center": "Processes information and coordinates response",
                    "Effector": "Carries out the response to restore homeostasis",
                    "Dynamic Equilibrium": "Constant small adjustments to maintain stability"
                },
                mainCategories: [
                    "Components of homeostatic systems",
                    "Types of feedback mechanisms",
                    "Examples of homeostatic regulation",
                    "Consequences of homeostatic failure"
                ],
                applications: [
                    "Understanding disease mechanisms",
                    "Developing medical treatments",
                    "Predicting physiological responses",
                    "Athletic performance optimization"
                ]
            },

            thermoregulation: {
                title: "Temperature Regulation in Organisms",
                concepts: [
                    "Body temperature must be maintained within narrow ranges",
                    "Thermoregulation involves both behavioral and physiological mechanisms",
                    "Hypothalamus acts as the body's thermostat",
                    "Heat can be gained or lost through various mechanisms"
                ],
                theory: "Thermoregulation is the process by which organisms maintain optimal body temperature for metabolic function. Endotherms generate heat internally, while ectotherms rely on external heat sources.",
                keyDefinitions: {
                    "Thermoregulation": "The process of maintaining optimal body temperature",
                    "Endotherm": "Organism that generates heat internally (warm-blooded)",
                    "Ectotherm": "Organism that relies on external heat sources (cold-blooded)",
                    "Hypothalamus": "Brain region that serves as the body's thermostat",
                    "Vasoconstriction": "Narrowing of blood vessels to conserve heat",
                    "Vasodilation": "Widening of blood vessels to release heat",
                    "Thermoreceptors": "Sensors that detect temperature changes"
                },
                mainMechanisms: [
                    "Heat production (shivering, metabolism)",
                    "Heat conservation (vasoconstriction, piloerection)",
                    "Heat loss (vasodilation, sweating, panting)",
                    "Behavioral responses (seeking shade/warmth)"
                ],
                applications: [
                    "Treating hypothermia and hyperthermia",
                    "Understanding fever responses",
                    "Athletic performance in different climates",
                    "Climate change impacts on organisms"
                ]
            },

            osmoregulation: {
                title: "Water and Salt Balance Regulation",
                concepts: [
                    "Water and electrolyte balance must be maintained",
                    "Kidneys are primary organs of osmoregulation",
                    "ADH regulates water reabsorption",
                    "Osmotic concentration affects cell function"
                ],
                theory: "Osmoregulation is the control of water and solute concentrations in body fluids. It maintains proper osmotic pressure for cellular function and involves the kidneys, hormones, and behavioral responses.",
                keyDefinitions: {
                    "Osmoregulation": "The control of water and solute concentrations",
                    "Osmolarity": "Concentration of solutes in a solution",
                    "ADH (Antidiuretic Hormone)": "Hormone that increases water reabsorption in kidneys",
                    "Aldosterone": "Hormone that increases sodium reabsorption",
                    "Nephron": "Functional unit of the kidney",
                    "Dehydration": "Excessive water loss from the body",
                    "Overhydration": "Excessive water retention"
                },
                mainComponents: [
                    "Kidney structure and function",
                    "Hormone regulation (ADH, aldosterone)",
                    "Thirst mechanism",
                    "Electrolyte balance"
                ],
                applications: [
                    "Treating dehydration and electrolyte imbalances",
                    "Understanding kidney diseases",
                    "Managing diabetes insipidus",
                    "Athletic hydration strategies"
                ]
            },

            blood_glucose: {
                title: "Blood Glucose Regulation",
                concepts: [
                    "Blood glucose must be maintained within narrow range",
                    "Insulin lowers blood glucose",
                    "Glucagon raises blood glucose",
                    "Pancreas monitors and regulates blood glucose"
                ],
                theory: "Blood glucose regulation is crucial for cellular energy supply. The pancreas secretes insulin and glucagon in response to blood glucose levels, maintaining homeostasis through negative feedback.",
                keyDefinitions: {
                    "Blood Glucose": "Concentration of glucose in the blood",
                    "Insulin": "Hormone that lowers blood glucose by promoting uptake and storage",
                    "Glucagon": "Hormone that raises blood glucose by promoting breakdown of glycogen",
                    "Glycogenesis": "Formation of glycogen from glucose (storage)",
                    "Glycogenolysis": "Breakdown of glycogen to glucose (mobilization)",
                    "Gluconeogenesis": "Production of glucose from non-carbohydrate sources",
                    "Diabetes Mellitus": "Disease characterized by high blood glucose"
                },
                normalRange: {
                    fasting: "70-100 mg/dL",
                    postMeal: "<140 mg/dL",
                    hypoglycemia: "<70 mg/dL",
                    hyperglycemia: ">126 mg/dL (fasting)"
                },
                applications: [
                    "Managing diabetes",
                    "Understanding metabolic syndrome",
                    "Athletic nutrition and performance",
                    "Weight management strategies"
                ]
            },

            feedback_mechanisms: {
                title: "Feedback Mechanisms in Homeostasis",
                concepts: [
                    "Negative feedback maintains stability",
                    "Positive feedback amplifies responses",
                    "Most homeostatic systems use negative feedback",
                    "Feedback loops involve sensors, control centers, and effectors"
                ],
                theory: "Feedback mechanisms are control systems that regulate physiological variables. Negative feedback opposes changes to maintain stability, while positive feedback amplifies changes for specific purposes.",
                keyDefinitions: {
                    "Negative Feedback": "Response that opposes the initial stimulus, maintaining stability",
                    "Positive Feedback": "Response that amplifies the initial stimulus",
                    "Set Point": "Target value for a regulated variable",
                    "Sensor": "Detects changes in the regulated variable",
                    "Effector": "Produces response to the stimulus",
                    "Control Center": "Integrates information and coordinates response"
                },
                negativeFeedbackExamples: [
                    "Body temperature regulation",
                    "Blood glucose regulation",
                    "Blood pressure regulation",
                    "Thyroid hormone regulation"
                ],
                positiveFeedbackExamples: [
                    "Childbirth (oxytocin release)",
                    "Blood clotting cascade",
                    "Lactation (milk production)",
                    "Action potential generation"
                ],
                applications: [
                    "Understanding disease mechanisms",
                    "Drug development and dosing",
                    "Predicting physiological responses",
                    "Systems biology modeling"
                ]
            },

            nervous_regulation: {
                title: "Nervous System Control of Homeostasis",
                concepts: [
                    "Nervous system provides rapid homeostatic control",
                    "Autonomic nervous system regulates involuntary functions",
                    "Sympathetic system prepares for action",
                    "Parasympathetic system promotes rest and digestion"
                ],
                theory: "The nervous system, particularly the autonomic division, provides rapid, precise control of homeostatic functions. It works alongside the endocrine system but acts much faster.",
                keyDefinitions: {
                    "Autonomic Nervous System": "Division controlling involuntary functions",
                    "Sympathetic Division": "'Fight or flight' response system",
                    "Parasympathetic Division": "'Rest and digest' response system",
                    "Reflex Arc": "Rapid, automatic response to stimulus",
                    "Medulla Oblongata": "Brain region controlling vital functions",
                    "Hypothalamus": "Master regulator of homeostasis"
                },
                sympatheticEffects: [
                    "Increased heart rate and blood pressure",
                    "Dilated pupils",
                    "Bronchodilation",
                    "Decreased digestive activity",
                    "Glucose release"
                ],
                parasympatheticEffects: [
                    "Decreased heart rate",
                    "Constricted pupils",
                    "Bronchoconstriction",
                    "Increased digestive activity",
                    "Energy storage"
                ],
                applications: [
                    "Understanding stress responses",
                    "Managing anxiety disorders",
                    "Athletic performance",
                    "Cardiovascular health"
                ]
            },

            endocrine_regulation: {
                title: "Hormonal Control of Homeostasis",
                concepts: [
                    "Hormones provide slower, longer-lasting regulation",
                    "Endocrine glands secrete hormones into bloodstream",
                    "Hormones bind to specific receptors on target cells",
                    "Many hormones work through feedback mechanisms"
                ],
                theory: "The endocrine system uses chemical messengers (hormones) to regulate long-term homeostatic functions. It complements the nervous system but acts more slowly and produces longer-lasting effects.",
                keyDefinitions: {
                    "Hormone": "Chemical messenger secreted into bloodstream",
                    "Endocrine Gland": "Ductless gland that secretes hormones",
                    "Target Cell": "Cell with receptors for a specific hormone",
                    "Hypothalamus": "Links nervous and endocrine systems",
                    "Pituitary Gland": "'Master gland' that controls other endocrine glands",
                    "Negative Feedback": "Primary control mechanism for hormone secretion"
                },
                majorGlands: {
                    hypothalamus: "Regulates pituitary, body temperature, hunger, thirst",
                    pituitary: "Controls other endocrine glands, growth",
                    thyroid: "Metabolic rate, growth, development",
                    parathyroid: "Calcium homeostasis",
                    adrenal: "Stress response, electrolyte balance",
                    pancreas: "Blood glucose regulation",
                    gonads: "Reproductive hormones"
                },
                applications: [
                    "Treating hormonal disorders",
                    "Understanding puberty and development",
                    "Fertility treatments",
                    "Managing metabolic diseases"
                ]
            },

            ph_regulation: {
                title: "pH and Acid-Base Balance",
                concepts: [
                    "Blood pH must be maintained at ~7.4",
                    "Buffer systems resist pH changes",
                    "Respiratory system eliminates CO₂ (acid)",
                    "Kidneys excrete acids and regulate bicarbonate"
                ],
                theory: "pH regulation is critical for enzyme function and cellular metabolism. The body uses buffer systems, respiratory adjustments, and kidney function to maintain blood pH within narrow limits.",
                keyDefinitions: {
                    "pH": "Measure of hydrogen ion concentration (acidity/alkalinity)",
                    "Buffer": "Substance that resists pH changes",
                    "Acidosis": "Blood pH below 7.35 (too acidic)",
                    "Alkalosis": "Blood pH above 7.45 (too alkaline)",
                    "Bicarbonate Buffer": "Primary blood buffer system",
                    "Respiratory Compensation": "Adjusting breathing to regulate CO₂",
                    "Renal Compensation": "Kidney regulation of acid/base excretion"
                },
                bufferSystems: [
                    "Bicarbonate buffer (HCO₃⁻/H₂CO₃) - primary blood buffer",
                    "Phosphate buffer - important in urine and intracellular fluid",
                    "Protein buffers - hemoglobin and plasma proteins"
                ],
                normalRange: "7.35-7.45 (arterial blood)",
                applications: [
                    "Treating acid-base disorders",
                    "Managing respiratory diseases",
                    "Understanding kidney disease",
                    "Critical care medicine"
                ]
            },

            blood_pressure: {
                title: "Blood Pressure Regulation",
                concepts: [
                    "Blood pressure must be maintained for adequate tissue perfusion",
                    "Baroreceptors detect pressure changes",
                    "Multiple systems regulate blood pressure",
                    "Short-term and long-term mechanisms exist"
                ],
                theory: "Blood pressure regulation ensures adequate blood flow to tissues. It involves neural reflexes, hormonal systems, and kidney function, operating on different time scales.",
                keyDefinitions: {
                    "Blood Pressure": "Force of blood against arterial walls",
                    "Systolic Pressure": "Pressure during ventricular contraction",
                    "Diastolic Pressure": "Pressure during ventricular relaxation",
                    "Baroreceptor": "Pressure sensor in blood vessels",
                    "Renin-Angiotensin-Aldosterone System": "Hormonal system regulating pressure",
                    "Hypertension": "Abnormally high blood pressure",
                    "Hypotension": "Abnormally low blood pressure"
                },
                normalRange: {
                    systolic: "90-120 mmHg",
                    diastolic: "60-80 mmHg",
                    optimal: "120/80 mmHg"
                },
                regulatoryMechanisms: [
                    "Baroreceptor reflex (rapid, neural)",
                    "Renin-angiotensin-aldosterone system (hormonal)",
                    "ADH release (hormonal)",
                    "Kidney regulation of blood volume (long-term)"
                ],
                applications: [
                    "Managing hypertension",
                    "Treating shock and hypotension",
                    "Cardiovascular disease prevention",
                    "Athletic performance monitoring"
                ]
            },

            calcium_regulation: {
                title: "Calcium Homeostasis",
                concepts: [
                    "Blood calcium must be precisely regulated",
                    "Calcium is crucial for bones, muscle, and nerve function",
                    "PTH and calcitonin regulate calcium levels",
                    "Vitamin D is essential for calcium absorption"
                ],
                theory: "Calcium regulation is essential for multiple physiological processes. The parathyroid glands, thyroid gland, and kidneys work together to maintain blood calcium within narrow limits.",
                keyDefinitions: {
                    "Parathyroid Hormone (PTH)": "Hormone that increases blood calcium",
                    "Calcitonin": "Hormone that decreases blood calcium",
                    "Vitamin D": "Hormone-like vitamin that increases calcium absorption",
                    "Hypocalcemia": "Low blood calcium levels",
                    "Hypercalcemia": "High blood calcium levels",
                    "Osteoblast": "Bone-building cell",
                    "Osteoclast": "Bone-breaking cell"
                },
                normalRange: "8.5-10.5 mg/dL (total serum calcium)",
                calciumFunctions: [
                    "Bone structure and strength",
                    "Muscle contraction",
                    "Nerve impulse transmission",
                    "Blood clotting",
                    "Enzyme function",
                    "Cell signaling"
                ],
                applications: [
                    "Treating osteoporosis",
                    "Managing hyperparathyroidism",
                    "Preventing kidney stones",
                    "Bone health optimization"
                ]
            },

            gas_exchange: {
                title: "Regulation of Gas Exchange",
                concepts: [
                    "O₂ and CO₂ levels must be regulated",
                    "Chemoreceptors detect blood gas levels",
                    "Breathing rate and depth adjust gas exchange",
                    "Medulla oblongata controls breathing"
                ],
                theory: "Respiratory regulation maintains appropriate blood levels of oxygen and carbon dioxide. Chemoreceptors monitor these gases, and the medulla adjusts breathing to maintain homeostasis.",
                keyDefinitions: {
                    "Chemoreceptor": "Sensor that detects blood gas and pH levels",
                    "Central Chemoreceptors": "Detect CO₂/pH in cerebrospinal fluid",
                    "Peripheral Chemoreceptors": "Detect O₂, CO₂, and pH in blood",
                    "Hyperventilation": "Excessive breathing reducing CO₂",
                    "Hypoventilation": "Inadequate breathing increasing CO₂",
                    "Hypoxia": "Deficiency of oxygen",
                    "Hypercapnia": "Excess carbon dioxide"
                },
                normalValues: {
                    arterialO2: "75-100 mmHg",
                    arterialCO2: "35-45 mmHg",
                    bloodpH: "7.35-7.45"
                },
                regulationMechanisms: [
                    "Central chemoreceptors (respond to CO₂/pH)",
                    "Peripheral chemoreceptors (respond to O₂, CO₂, pH)",
                    "Medulla oblongata (respiratory control center)",
                    "Voluntary control from cerebral cortex"
                ],
                applications: [
                    "Managing respiratory diseases (COPD, asthma)",
                    "High altitude adaptation",
                    "Sleep apnea treatment",
                    "Athletic performance optimization"
                ]
            },

            stress_response: {
                title: "Physiological Stress Response",
                concepts: [
                    "Stress triggers coordinated physiological responses",
                    "Acute stress activates fight-or-flight response",
                    "Chronic stress can be harmful",
                    "HPA axis regulates long-term stress response"
                ],
                theory: "The stress response is a coordinated set of physiological changes that prepare the body to deal with threats. It involves the sympathetic nervous system (rapid) and HPA axis (sustained).",
                keyDefinitions: {
                    "Stress": "Any stimulus that threatens or appears to threaten homeostasis",
                    "Stressor": "Agent or stimulus causing stress",
                    "Fight-or-Flight Response": "Rapid sympathetic nervous system activation",
                    "HPA Axis": "Hypothalamic-Pituitary-Adrenal axis for prolonged stress",
                    "Cortisol": "Primary stress hormone from adrenal cortex",
                    "Epinephrine (Adrenaline)": "Rapid-acting stress hormone",
                    "Allostatic Load": "Cumulative wear from chronic stress"
                },
                acuteStressResponse: [
                    "Increased heart rate and blood pressure",
                    "Bronchodilation",
                    "Glucose mobilization",
                    "Increased alertness",
                    "Decreased digestive activity",
                    "Increased sweating"
                ],
                chronicStressEffects: [
                    "Immune suppression",
                    "Cardiovascular problems",
                    "Digestive issues",
                    "Mental health disorders",
                    "Sleep disturbances",
                    "Metabolic dysfunction"
                ],
                applications: [
                    "Stress management techniques",
                    "Treating anxiety disorders",
                    "Understanding PTSD",
                    "Workplace health optimization"
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            homeostasis_general: {
                'General Concepts': [
                    'Thinking homeostasis means everything stays exactly constant (it\'s dynamic equilibrium with small fluctuations)',
                    'Believing homeostasis is passive (it requires active energy and regulation)',
                    'Confusing homeostasis with adaptation (homeostasis is short-term, adaptation is long-term)'
                ],
                'Feedback Mechanisms': [
                    'Thinking all biological control uses negative feedback (some use positive feedback)',
                    'Believing feedback is instantaneous (there are time delays)',
                    'Confusing the sensor with the effector in feedback loops'
                ]
            },
            thermoregulation: {
                'Temperature Control': [
                    'Thinking fever is always harmful (it\'s usually a helpful immune response)',
                    'Believing sweating cools you down (it\'s the evaporation that cools)',
                    'Thinking shivering directly warms you (it\'s the muscle contraction generating heat)',
                    'Confusing endotherms with homeotherms (not all endotherms maintain constant temperature)'
                ],
                'Heat Transfer': [
                    'Thinking all heat loss is through sweating (radiation, convection, conduction also important)',
                    'Believing cold weather makes you sick (it\'s viruses, not temperature)',
                    'Thinking you lose most heat through your head (heat loss is proportional to surface area)'
                ]
            },
            osmoregulation: {
                'Water Balance': [
                    'Thinking kidneys only remove waste (they also regulate water and electrolytes)',
                    'Believing drinking more water is always better (overhydration can be dangerous)',
                    'Confusing dehydration with thirst (you can be dehydrated without feeling thirsty)'
                ],
                'Kidney Function': [
                    'Thinking kidneys filter blood once (blood passes through many times)',
                    'Believing all filtered material is excreted (most is reabsorbed)',
                    'Confusing filtration with secretion in the nephron'
                ]
            },
            blood_glucose: {
                'Glucose Regulation': [
                    'Thinking insulin and glucagon work the same way (they have opposite effects)',
                    'Believing sugar causes diabetes (Type 1 is autoimmune, Type 2 is complex)',
                    'Confusing glucose and glycogen (glucose is sugar, glycogen is storage form)',
                    'Thinking insulin "uses up" glucose (it promotes uptake and storage)'
                ],
                'Diabetes': [
                    'Thinking all diabetes is the same (Type 1 and Type 2 have different causes)',
                    'Believing diabetes can be cured (it can be managed, not cured)',
                    'Thinking diabetics can never eat sugar (they can, with proper management)'
                ]
            },
            feedback_mechanisms: {
                'Negative Feedback': [
                    'Thinking negative feedback means "bad" (it means opposing the stimulus)',
                    'Believing negative feedback eliminates all fluctuations (it minimizes them)',
                    'Confusing negative feedback with negative outcomes'
                ],
                'Positive Feedback': [
                    'Thinking positive feedback is rare in biology (it\'s used in specific situations)',
                    'Believing positive feedback maintains stability (it amplifies changes)',
                    'Confusing positive feedback with positive outcomes'
                ]
            },
            nervous_regulation: {
                'Autonomic System': [
                    'Thinking sympathetic is always active during stress only (it has baseline activity)',
                    'Believing parasympathetic is always relaxing (it also has active functions)',
                    'Confusing voluntary with involuntary control (autonomic is involuntary)'
                ],
                'Neural vs Hormonal': [
                    'Thinking nervous system is always faster (some reflexes take time)',
                    'Believing hormones and neurotransmitters are completely different (some molecules are both)',
                    'Confusing the speed with the duration of effects'
                ]
            },
            endocrine_regulation: {
                'Hormone Function': [
                    'Thinking hormones only affect one organ (many have multiple targets)',
                    'Believing all hormones work the same way (different mechanisms exist)',
                    'Confusing hormone levels with hormone effects (receptor sensitivity matters)'
                ],
                'Gland Function': [
                    'Thinking glands work independently (they\'re highly integrated)',
                    'Believing the pituitary controls everything (hypothalamus controls pituitary)',
                    'Confusing endocrine with exocrine glands (endocrine is ductless)'
                ]
            },
            ph_regulation: {
                'pH Concepts': [
                    'Thinking pH only matters in chemistry class (it\'s critical for life)',
                    'Believing blood pH can vary widely (it\'s tightly regulated 7.35-7.45)',
                    'Confusing acidic foods with blood acidity (stomach acid doesn\'t directly change blood pH)'
                ],
                'Buffer Systems': [
                    'Thinking buffers prevent all pH changes (they resist but don\'t prevent)',
                    'Believing lungs and kidneys work the same way (different mechanisms and time scales)',
                    'Confusing respiratory and metabolic acidosis/alkalosis'
                ]
            },
            blood_pressure: {
                'Pressure Regulation': [
                    'Thinking blood pressure is always constant (it varies throughout the day)',
                    'Believing high blood pressure always has symptoms (often "silent")',
                    'Confusing blood pressure with heart rate (related but different)'
                ],
                'Cardiovascular Health': [
                    'Thinking only the heart controls blood pressure (vessels and kidneys also crucial)',
                    'Believing stress is the only cause of hypertension (many factors involved)',
                    'Confusing systolic and diastolic pressure meanings'
                ]
            },
            calcium_regulation: {
                'Calcium Balance': [
                    'Thinking calcium is only for bones (also crucial for muscles, nerves, clotting)',
                    'Believing dietary calcium directly affects blood calcium (tightly regulated)',
                    'Confusing calcium in bones with calcium in blood (different pools)'
                ],
                'Vitamin D': [
                    'Thinking vitamin D is just a vitamin (it\'s actually a hormone)',
                    'Believing sun exposure alone is enough (depends on location, season, skin)',
                    'Confusing vitamin D with calcium (vitamin D helps absorb calcium)'
                ]
            },
            gas_exchange: {
                'Breathing Control': [
                    'Thinking we breathe because we need oxygen (CO₂ levels are primary stimulus)',
                    'Believing breathing is entirely automatic (there\'s voluntary control too)',
                    'Confusing hyperventilation with getting more oxygen (it reduces CO₂)'
                ],
                'Oxygen and CO₂': [
                    'Thinking oxygen and CO₂ work the same way (different sensors and effects)',
                    'Believing CO₂ is just waste (it\'s a crucial regulatory signal)',
                    'Confusing air composition with blood gas levels'
                ]
            },
            stress_response: {
                'Stress Mechanisms': [
                    'Thinking all stress is harmful (acute stress can be beneficial)',
                    'Believing stress response is only psychological (it\'s physiological)',
                    'Confusing stress with anxiety (related but distinct concepts)'
                ],
                'Hormones': [
                    'Thinking cortisol is always bad (it\'s essential, but chronic elevation is harmful)',
                    'Believing adrenaline and cortisol do the same thing (different time scales and effects)',
                    'Confusing fight-or-flight with HPA axis (rapid vs. sustained responses)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use side-by-side diagrams to highlight differences',
                effectiveness: 'High for comparing regulatory mechanisms'
            },
            analogy: {
                method: 'Relate homeostatic concepts to familiar control systems (thermostat, etc.)',
                effectiveness: 'High for abstract regulatory concepts'
            },
            step_by_step: {
                method: 'Break down feedback loops into sequential steps',
                effectiveness: 'High for understanding regulatory pathways'
            },
            contrast_table: {
                method: 'Create comparison tables showing key differences',
                effectiveness: 'High for distinguishing similar regulatory systems'
            },
            graph_interpretation: {
                method: 'Use graphs showing changes over time',
                effectiveness: 'High for understanding dynamic responses'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            mechanistic: {
                focus: 'How regulatory systems work',
                language: 'process-oriented and causal'
            },
            systemic: {
                focus: 'Integration of multiple regulatory systems',
                language: 'holistic and interconnected'
            },
            comparative: {
                focus: 'Similarities and differences between regulatory mechanisms',
                language: 'contrastive and analytical'
            },
            clinical: {
                focus: 'Health implications and disease states',
                language: 'medical and application-focused'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential information only',
                examples: 'concrete and familiar'
            },
            intermediate: {
                vocabulary: 'standard biological and medical terms',
                detail: 'main concepts with explanations',
                examples: 'mix of familiar and technical'
            },
            detailed: {
                vocabulary: 'full scientific and medical terminology',
                detail: 'comprehensive with mechanisms',
                examples: 'technical and research-based'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery approach',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    // MAIN HANDLER METHOD
    handleHomeostasisProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            this.currentProblem = this.parseHomeostasisProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getHomeostasisContent(this.currentProblem);
            this.contentSteps = this.generateHomeostasisContent(this.currentProblem, this.currentContent);
            this.generateHomeostasisDiagramData();
            this.generateHomeostasisWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process homeostasis topic: ${error.message}`);
        }
    }

    parseHomeostasisProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        for (const [type, config] of Object.entries(this.homeostasisTopics)) {
            if (type === topic || type === subTopic) {
                topicType = type;
                break;
            }
            
            for (const pattern of config.patterns) {
                if (pattern.test(topic) || (subTopic && pattern.test(subTopic))) {
                    topicType = type;
                    break;
                }
            }
            if (topicType) break;
        }

        if (!topicType) {
            throw new Error(`Unable to recognize homeostasis topic: ${topic}`);
        }

        return {
            originalTopic: topic,
            type: topicType,
            subTopic: subTopic,
            parameters: { ...parameters },
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    getHomeostasisContent(problem) {
        const handler = this.homeostasisTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for homeostasis topic: ${problem.type}`);
        }

        return handler(problem);
    }

    // TOPIC HANDLERS

    handleHomeostasisGeneral(problem) {
        return {
            topic: "Homeostasis: Maintaining Internal Balance",
            definition: "Homeostasis is the maintenance of relatively stable internal conditions despite changes in the external environment through coordinated physiological mechanisms.",
            
            coreComponents: [
                {
                    name: "Sensor (Receptor)",
                    function: "Detects changes in the regulated variable",
                    examples: ["Thermoreceptors (temperature)", "Baroreceptors (blood pressure)", "Chemoreceptors (blood gases)"],
                    location: "Throughout body in various organs and tissues"
                },
                {
                    name: "Control Center",
                    function: "Processes information from sensors and coordinates response",
                    examples: ["Hypothalamus (temperature)", "Medulla oblongata (breathing)", "Pancreas (blood glucose)"],
                    mechanism: "Compares actual value to set point and determines response"
                },
                {
                    name: "Effector",
                    function: "Carries out the response to restore homeostasis",
                    examples: ["Muscles (shivering)", "Sweat glands (cooling)", "Blood vessels (vasoconstriction)"],
                    action: "Produces physiological change to counteract disturbance"
                }
            ],

            keyPrinciples: {
                dynamicEquilibrium: {
                    description: "Homeostasis involves constant small adjustments, not absolute constancy",
                    analogy: "Like a tightrope walker constantly making small corrections to stay balanced",
                    implication: "Variables fluctuate within narrow ranges around set points"
                },
                setPoint: {
                    description: "Target value for a regulated variable",
                    examples: ["Body temperature ~37°C", "Blood pH ~7.4", "Blood glucose ~90 mg/dL"],
                    note: "Set points can be adjusted (e.g., fever raises temperature set point)"
                },
                feedbackControl: {
                    description: "Information about output affects input to the system",
                    types: ["Negative feedback (most common)", "Positive feedback (rare, specific purposes)"],
                    importance: "Allows self-correction and stability"
                },
                redundancy: {
                    description: "Multiple mechanisms often regulate the same variable",
                    advantage: "Provides backup and fine-tuning",
                    example: "Blood glucose regulated by insulin, glucagon, cortisol, epinephrine, growth hormone"
                }
            },

            typesOfRegulation: [
                {
                    type: "Neural Regulation",
                    characteristics: "Fast, precise, short-duration",
                    mechanism: "Electrical signals via nerves",
                    examples: ["Reflex responses", "Autonomic control", "Pain withdrawal"],
                    timeScale: "Milliseconds to seconds"
                },
                {
                    type: "Endocrine Regulation",
                    characteristics: "Slower, widespread, long-duration",
                    mechanism: "Chemical signals (hormones) via bloodstream",
                    examples: ["Growth hormone", "Thyroid hormones", "Insulin"],
                    timeScale: "Seconds to hours or days"
                },
                {
                    type: "Behavioral Regulation",
                    characteristics: "Voluntary or learned responses",
                    mechanism: "Conscious or unconscious behavioral changes",
                    examples: ["Seeking shade when hot", "Drinking when thirsty", "Eating when hungry"],
                    importance: "Reduces metabolic cost of physiological regulation"
                }
            ],

            regulatedVariables: [
                {
                    variable: "Body Temperature",
                    normalRange: "36.5-37.5°C (97.7-99.5°F)",
                    primaryRegulator: "Hypothalamus",
                    importance: "Optimal enzyme function"
                },
                {
                    variable: "Blood Glucose",
                    normalRange: "70-100 mg/dL (fasting)",
                    primaryRegulator: "Pancreas (insulin, glucagon)",
                    importance: "Cellular energy supply"
                },
                {
                    variable: "Blood pH",
                    normalRange: "7.35-7.45",
                    primaryRegulator: "Lungs and kidneys",
                    importance: "Enzyme function, protein structure"
                },
                {
                    variable: "Blood Pressure",
                    normalRange: "90-120/60-80 mmHg",
                    primaryRegulator: "Baroreceptors, RAAS, kidneys",
                    importance: "Tissue perfusion"
                },
                {
                    variable: "Blood Osmolarity",
                    normalRange: "280-300 mOsm/L",
                    primaryRegulator: "Kidneys, ADH, thirst",
                    importance: "Cell volume, function"
                },
                {
                    variable: "Blood Oxygen",
                    normalRange: "75-100 mmHg (arterial)",
                    primaryRegulator: "Respiratory control centers",
                    importance: "Cellular respiration"
                }
            ],

            homeostasisFailure: {
                causes: [
                    "Overwhelming stimulus (extreme temperature, injury)",
                    "Defective sensors (neuropathy)",
                    "Impaired control centers (brain injury)",
                    "Ineffective effectors (muscle weakness)",
                    "Disease affecting regulatory systems (diabetes, hypertension)"
                ],
                consequences: [
                    "Physiological dysfunction",
                    "Disease states",
                    "Organ damage",
                    "Death in severe cases"
                ],
                examples: [
                    "Diabetes: failure of blood glucose regulation",
                    "Hypertension: failure of blood pressure regulation",
                    "Heat stroke: failure of temperature regulation",
                    "Dehydration: failure of water balance"
                ]
            },

            category: 'homeostasis'
        };
    }

    handleThermoregulation(problem) {
        return {
            topic: "Thermoregulation: Temperature Control",
            definition: "Thermoregulation is the process by which organisms maintain optimal body temperature for metabolic function through physiological and behavioral mechanisms.",

            classification: {
                endotherms: {
                    description: "Generate heat internally through metabolism (warm-blooded)",
                    examples: ["Mammals", "Birds"],
                    advantages: ["Activity in cold environments", "Stable body temperature", "Constant enzyme function"],
                    disadvantages: ["High metabolic cost", "Large food requirements"],
                    mechanism: "Metabolic heat production, especially in brown fat and muscle"
                },
                ectotherms: {
                    description: "Rely on external heat sources (cold-blooded)",
                    examples: ["Reptiles", "Amphibians", "Fish", "Insects"],
                    advantages: ["Lower metabolic cost", "Less food required"],
                    disadvantages: ["Activity limited by temperature", "Must seek appropriate temperatures"],
                    mechanism: "Behavioral thermoregulation (basking, seeking shade)"
                }
            },

            controlSystem: {
                sensors: {
                    peripheral: {
                        location: "Skin, body surface",
                        function: "Detect external temperature changes",
                        response: "Rapid behavioral and physiological adjustments"
                    },
                    central: {
                        location: "Hypothalamus, spinal cord, abdominal organs",
                        function: "Monitor core body temperature",
                        response: "Activates regulatory mechanisms"
                    }
                },
                controlCenter: {
                    name: "Hypothalamus (preoptic area)",
                    function: "Acts as body's thermostat",
                    setPoint: "~37°C (98.6°F) for humans",
                    mechanism: "Integrates temperature information and activates appropriate effectors"
                },
                effectors: "Multiple systems for heat production, conservation, and loss"
            },

            heatProductionMechanisms: [
                {
                    mechanism: "Basal Metabolism",
                    description: "Heat from normal cellular metabolism",
                    contribution: "Constant baseline heat production",
                    organs: "All organs, especially liver, brain, heart"
                },
                {
                    mechanism: "Shivering Thermogenesis",
                    description: "Involuntary muscle contractions generate heat",
                    trigger: "Cold exposure",
                    effectiveness: "Can increase heat production 2-5 times",
                    duration: "Short-term (minutes to hours)"
                },
                {
                    mechanism: "Non-Shivering Thermogenesis",
                    description: "Heat production in brown adipose tissue",
                    trigger: "Cold exposure, especially chronic",
                    importance: "Major mechanism in infants, less in adults",
                    mechanism: "Mitochondria produce heat instead of ATP (uncoupling protein)"
                },
                {
                    mechanism: "Voluntary Muscle Activity",
                    description: "Exercise and movement generate heat",
                    contribution: "Can significantly increase body temperature",
                    example: "Running can increase metabolic rate 10-20 times"
                },
                {
                    mechanism: "Hormonal Enhancement",
                    description: "Thyroid hormones and epinephrine increase metabolic rate",
                    timeScale: "Longer-term adaptation to cold",
                    effect: "Increases baseline heat production"
                }
            ],

            heatConservationMechanisms: [
                {
                    mechanism: "Vasoconstriction",
                    description: "Narrowing of blood vessels in skin",
                    effect: "Reduces blood flow to surface, minimizes heat loss",
                    controlledBy: "Sympathetic nervous system",
                    visualEffect: "Pale skin"
                },
                {
                    mechanism: "Piloerection",
                    description: "Contraction of arrector pili muscles (goosebumps)",
                    humanEffect: "Minimal (vestigial response)",
                    animalEffect: "Traps air layer for insulation (fur)",
                    trigger: "Cold exposure or emotional response"
                },
                {
                    mechanism: "Behavioral Responses",
                    description: "Voluntary actions to conserve heat",
                    examples: ["Wearing warm clothing", "Seeking shelter", "Huddling", "Reducing activity"],
                    importance: "Very effective, reduces metabolic cost"
                },
                {
                    mechanism: "Countercurrent Exchange",
                    description: "Heat transfer between arterial and venous blood in limbs",
                    effect: "Warms returning blood, reduces heat loss from extremities",
                    location: "Arms, legs"
                },
                {
                    mechanism: "Reduced Surface Area",
                    description: "Curling up to minimize exposed surface",
                    effect: "Reduces heat loss by reducing surface area to volume ratio",
                    example: "Fetal position when cold"
                }
            ],

            heatLossMechanisms: [
                {
                    mechanism: "Vasodilation",
                    description: "Widening of blood vessels in skin",
                    effect: "Increases blood flow to surface, promotes heat loss",
                    controlledBy: "Reduced sympathetic activity",
                    visualEffect: "Flushed, red skin",
                    effectiveness: "Can increase heat loss 8-fold"
                },
                {
                    mechanism: "Sweating (Evaporation)",
                    description: "Secretion of sweat onto skin surface",
                    effect: "Evaporative cooling (most effective mechanism)",
                    maxRate: "1-2 liters/hour in extreme conditions",
                    energyCost: "~580 cal per mL of sweat evaporated",
                    limitation: "Ineffective in high humidity"
                },
                {
                    mechanism: "Panting",
                    description: "Rapid shallow breathing (in some animals)",
                    effect: "Evaporative cooling from respiratory surfaces",
                    examples: "Dogs, birds",
                    humanEquivalent: "Increased respiratory rate (minor effect)"
                },
                {
                    mechanism: "Behavioral Responses",
                    description: "Voluntary actions to lose heat",
                    examples: ["Removing clothing", "Seeking shade", "Reducing activity", "Seeking water/breeze"],
                    importance: "Very effective, energy-efficient"
                },
                {
                    mechanism: "Radiation",
                    description: "Emission of infrared heat from body surface",
                    contribution: "~60% of heat loss at rest in moderate temperature",
                    factors: "Surface temperature, environmental temperature"
                },
                {
                    mechanism: "Convection",
                    description: "Heat transfer to moving air or water",
                    contribution: "~15% of heat loss at rest",
                    factors: "Air/water movement, temperature difference"
                },
                {
                    mechanism: "Conduction",
                    description: "Direct heat transfer to objects in contact",
                    contribution: "~3% of heat loss at rest",
                    increased: "Sitting on cold surfaces, swimming in cold water"
                }
            ],

            temperatureExtremes: {
                hypothermia: {
                    definition: "Core body temperature below 35°C (95°F)",
                    causes: ["Cold exposure", "Wet conditions", "Inadequate clothing", "Exhaustion"],
                    stages: {
                        mild: "35-32°C: Shivering, confusion, increased heart rate",
                        moderate: "32-28°C: Violent shivering stops, confusion worsens, drowsiness",
                        severe: "Below 28°C: No shivering, unconsciousness, cardiac arrest risk"
                    },
                    treatment: ["Remove from cold", "Remove wet clothing", "Gradual rewarming", "Medical attention"],
                    prevention: ["Appropriate clothing", "Stay dry", "Maintain nutrition", "Avoid exhaustion"]
                },
                hyperthermia: {
                    definition: "Core body temperature above 38-40°C (100.4-104°F)",
                    types: {
                        heatExhaustion: {
                            temperature: "37-40°C",
                            symptoms: ["Heavy sweating", "Weakness", "Nausea", "Headache", "Dizziness"],
                            mechanism: "Excessive fluid/electrolyte loss",
                            treatment: ["Move to cool place", "Rehydrate", "Rest"]
                        },
                        heatStroke: {
                            temperature: "Above 40°C (104°F)",
                            symptoms: ["No sweating", "Confusion", "Seizures", "Unconsciousness"],
                            mechanism: "Thermoregulatory failure",
                            danger: "Life-threatening medical emergency",
                            treatment: ["Immediate cooling", "Emergency medical care"]
                        }
                    }
                },
                fever: {
                    definition: "Elevated body temperature due to raised hypothalamic set point",
                    range: "38-41°C (100.4-105.8°F)",
                    cause: "Infection or inflammation (pyrogens)",
                    purpose: "Enhances immune response, inhibits pathogen growth",
                    beneficial: "Moderate fever aids recovery",
                    dangerous: "Very high fever (>41°C) can damage tissues"
                }
            },

            clinicalApplications: [
                "Treating hypothermia and hyperthermia",
                "Managing fever during illness",
                "Surgical temperature management",
                "Neonatal thermoregulation",
                "Athletic performance in extreme temperatures",
                "Space exploration and diving",
                "Climate change health impacts"
            ],

            category: 'thermoregulation'
        };
    }

    handleOsmoregulation(problem) {
        return {
            topic: "Osmoregulation: Water and Salt Balance",
            definition: "Osmoregulation is the active control of water and solute concentrations in body fluids to maintain proper osmotic pressure for cellular function.",

            importance: [
                "Maintains cell volume and function",
                "Regulates blood pressure and volume",
                "Ensures proper ion concentrations for nerve and muscle function",
                "Maintains pH balance",
                "Enables waste removal"
            ],

            kidneyStructure: {
                overview: "Kidneys are the primary organs of osmoregulation in vertebrates",
                components: [
                    {
                        structure: "Nephron",
                        description: "Functional unit of kidney (~1 million per kidney)",
                        parts: ["Glomerulus", "Bowman's capsule", "Proximal convoluted tubule", "Loop of Henle", "Distal convoluted tubule", "Collecting duct"]
                    },
                    {
                        structure: "Renal Cortex",
                        description: "Outer region containing glomeruli and convoluted tubules",
                        function: "Filtration and initial reabsorption"
                    },
                    {
                        structure: "Renal Medulla",
                        description: "Inner region containing loops of Henle and collecting ducts",
                        function: "Concentration of urine, water reabsorption"
                    }
                ]
            },

            nephronProcesses: [
                {
                    process: "Filtration",
                    location: "Glomerulus and Bowman's capsule",
                    mechanism: "Blood pressure forces fluid from capillaries into nephron",
                    filtered: "Water, glucose, amino acids, ions, urea, small molecules",
                    notFiltered: "Blood cells, proteins, large molecules",
                    volume: "~180 liters/day filtered (99% reabsorbed)",
                    drivingForce: "Blood pressure (~60 mmHg)"
                },
                {
                    process: "Reabsorption",
                    location: "Throughout nephron tubule",
                    mechanism: "Active and passive transport from tubule back to blood",
                    reabsorbed: {
                        proximal: "~65% of water and Na+, all glucose and amino acids",
                        loopOfHenle: "~25% of water, Na+, Cl-",
                        distal: "Variable amounts (regulated by hormones)",
                        collecting: "Final water reabsorption (ADH-regulated)"
                    },
                    importance: "Reclaims valuable nutrients and regulates fluid balance"
                },
                {
                    process: "Secretion",
                    location: "Proximal and distal tubules",
                    mechanism: "Active transport from blood into tubule",
                    secreted: ["H+ ions (pH regulation)", "K+ ions", "Drugs and toxins", "Excess ions"],
                    importance: "Fine-tunes composition, removes wastes, regulates pH"
                },
                {
                    process: "Excretion",
                    location: "Collecting duct to ureter",
                    result: "Final urine composition",
                    volume: "~1-2 liters/day (varies with hydration)",
                    composition: "Water, urea, excess ions, metabolic wastes"
                }
            ],

            hormonalControl: [
                {
                    hormone: "ADH (Antidiuretic Hormone / Vasopressin)",
                    source: "Posterior pituitary (produced in hypothalamus)",
                    trigger: "Increased blood osmolarity or decreased blood volume",
                    targetOrgan: "Collecting ducts of nephron",
                    mechanism: "Increases water permeability by inserting aquaporin channels",
                    effect: "Increased water reabsorption → concentrated urine, diluted blood",
                    result: "Reduces urine volume, conserves water",
                    disorders: {
                        deficiency: "Diabetes insipidus (large volumes of dilute urine)",
                        excess: "SIADH (concentrated urine, diluted blood)"
                    }
                },
                {
                    hormone: "Aldosterone",
                    source: "Adrenal cortex",
                    trigger: "Low blood Na+, high blood K+, low blood pressure (via renin-angiotensin)",
                    targetOrgan: "Distal tubule and collecting duct",
                    mechanism: "Increases Na+ reabsorption and K+ secretion",
                    effect: "Na+ and water retained, K+ excreted",
                    result: "Increases blood volume and pressure",
                    pathway: "Renin-Angiotensin-Aldosterone System (RAAS)"
                },
                {
                    hormone: "ANP (Atrial Natriuretic Peptide)",
                    source: "Heart atria (when stretched by high blood volume)",
                    trigger: "Increased blood volume/pressure",
                    targetOrgan: "Kidneys, blood vessels",
                    mechanism: "Increases Na+ and water excretion, dilates blood vessels",
                    effect: "Opposes aldosterone and ADH",
                    result: "Decreases blood volume and pressure"
                }
            ],

            waterBalance: {
                intake: {
                    sources: ["Drinking fluids (~1500 mL/day)", "Food moisture (~700 mL/day)", "Metabolic water (~200 mL/day)"],
                    total: "~2400 mL/day (varies greatly)"
                },
                output: {
                    sources: ["Urine (~1500 mL/day)", "Feces (~100 mL/day)", "Sweat (~100 mL/day)", "Respiration (~400 mL/day)", "Skin evaporation (~300 mL/day)"],
                    total: "~2400 mL/day (matches intake)"
                },
                regulation: "Thirst mechanism and ADH maintain balance"
            },

            thirstMechanism: {
                triggers: [
                    "Increased blood osmolarity (detected by hypothalamus osmoreceptors)",
                    "Decreased blood volume (detected by baroreceptors)",
                    "Dry mouth (local sensation)",
                    "Angiotensin II (hormonal signal)"
                ],
                process: [
                    "Osmoreceptors or baroreceptors detect imbalance",
                    "Hypothalamus stimulates thirst sensation",
                    "Behavioral response: drinking",
                    "Water absorbed in digestive system",
                    "Blood osmolarity decreases, volume increases",
                    "Negative feedback inhibits thirst"
                ],
                note: "Thirst lags behind actual need; can be dehydrated without feeling thirsty"
            },

            osmoticChallenges: {
                dehydration: {
                    causes: ["Inadequate water intake", "Excessive sweating", "Diarrhea", "Vomiting", "Diabetes mellitus (osmotic diuresis)"],
                    effects: [
                        "Increased blood osmolarity",
                        "Decreased blood volume and pressure",
                        "Concentrated urine",
                        "Thirst",
                        "Dry mouth and skin",
                        "Fatigue, dizziness",
                        "Severe: confusion, organ failure"
                    ],
                    compensation: ["ADH release → water conservation", "Aldosterone release → Na+ conservation", "Thirst → increased drinking"],
                    treatment: "Fluid replacement (oral or intravenous)"
                },
                overhydration: {
                    causes: ["Excessive water intake", "Kidney failure", "SIADH (excess ADH)", "Certain medications"],
                    effects: [
                        "Decreased blood osmolarity (hyponatremia)",
                        "Increased blood volume",
                        "Dilute urine",
                        "Cell swelling (especially dangerous in brain)",
                        "Nausea, headache, confusion",
                        "Severe: seizures, coma, death"
                    ],
                    compensation: ["ADH suppression → water excretion", "ANP release → increased urine output"],
                    treatment: "Restrict fluid intake, address underlying cause, sometimes hypertonic saline"
                }
            },

            electrolyteBalance: {
                sodium: {
                    normalRange: "135-145 mEq/L",
                    functions: ["Primary extracellular cation", "Osmotic balance", "Nerve impulses", "Muscle contraction"],
                    regulation: "Aldosterone (reabsorption), ANP (excretion)",
                    imbalances: {
                        hyponatremia: "Low Na+ (<135): confusion, seizures, cell swelling",
                        hypernatremia: "High Na+ (>145): thirst, confusion, cell shrinkage"
                    }
                },
                potassium: {
                    normalRange: "3.5-5.0 mEq/L",
                    functions: ["Primary intracellular cation", "Nerve impulses", "Muscle contraction", "Heart rhythm"],
                    regulation: "Aldosterone (secretion), kidney adjustment",
                    imbalances: {
                        hypokalemia: "Low K+ (<3.5): muscle weakness, cardiac arrhythmias",
                        hyperkalemia: "High K+ (>5.0): cardiac arrhythmias, can be fatal"
                    }
                },
                calcium: {
                    normalRange: "8.5-10.5 mg/dL",
                    functions: ["Bone structure", "Muscle contraction", "Nerve function", "Blood clotting"],
                    regulation: "PTH, calcitonin, vitamin D (covered in calcium regulation topic)"
                },
                chloride: {
                    normalRange: "95-105 mEq/L",
                    functions: ["Primary extracellular anion", "Osmotic balance", "pH balance (Cl-/HCO3- exchange)"],
                    regulation: "Follows sodium movement"
                }
            },

            comparativeOsmoregulation: {
                freshwaterFish: {
                    challenge: "Water influx, ion loss (hypotonic environment)",
                    adaptations: [
                        "Large volumes of dilute urine",
                        "Don't drink water",
                        "Active uptake of ions through gills",
                        "Impermeable skin"
                    ]
                },
                marineFish: {
                    challenge: "Water loss, ion influx (hypertonic environment)",
                    adaptations: [
                        "Drink seawater",
                        "Small volumes of concentrated urine",
                        "Excrete excess salt through gills",
                        "Some urea retention (sharks)"
                    ]
                },
                terrestrialAnimals: {
                    challenge: "Water conservation",
                    adaptations: [
                        "Kidneys produce concentrated urine (loop of Henle)",
                        "Behavioral: seeking water, avoiding heat",
                        "Some animals concentrate urine extremely (desert rodents)",
                        "Metabolic water production"
                    ]
                }
            },

            clinicalApplications: [
                "Treating dehydration and overhydration",
                "Managing kidney disease and failure",
                "Dialysis (artificial kidney function)",
                "Treating diabetes insipidus",
                "Managing heart failure (fluid retention)",
                "Electrolyte replacement in illness or surgery",
                "Athletic hydration strategies",
                "Understanding diuretic medications"
            ],

            category: 'osmoregulation'
        };
    }

    handleBloodGlucose(problem) {
        return {
            topic: "Blood Glucose Regulation",
            definition: "Blood glucose regulation is the homeostatic process that maintains blood sugar levels within a narrow range to ensure adequate cellular energy supply while preventing damage from hyperglycemia.",

            importance: [
                "Glucose is primary fuel for cells, especially brain",
                "Brain requires constant glucose supply (can't store it)",
                "Excess glucose can damage blood vessels and nerves",
                "Maintains energy availability between meals",
                "Critical for physical and mental performance"
            ],

            normalRanges: {
                fasting: "70-100 mg/dL (3.9-5.6 mmol/L)",
                postMeal: "<140 mg/dL (<7.8 mmol/L) after 2 hours",
                random: "70-125 mg/dL",
                hypoglycemia: "Below 70 mg/dL",
                hyperglycemia: "Above 125 mg/dL (fasting) or 180 mg/dL (random)",
                diabeticRange: "126 mg/dL or higher (fasting, indicates diabetes)"
            },

            pancreaticControl: {
                structure: {
                    location: "Behind stomach",
                    dualFunction: "Exocrine (digestive enzymes) and endocrine (hormones)",
                    isletsOfLangerhans: "Clusters of endocrine cells (~1 million per pancreas)",
                    cellTypes: {
                        betaCells: "Produce insulin (~70% of islet cells)",
                        alphaCells: "Produce glucagon (~20% of islet cells)",
                        deltaCells: "Produce somatostatin (regulates alpha and beta cells)",
                        ppCells: "Produce pancreatic polypeptide"
                    }
                },
                monitoring: "Beta cells directly sense blood glucose levels (GLUT2 transporters)"
            },

            keyHormones: [
                {
                    hormone: "Insulin",
                    producedBy: "Beta cells of pancreatic islets",
                    trigger: "Elevated blood glucose (>100 mg/dL)",
                    targetCells: "Most cells (especially muscle, liver, adipose tissue)",
                    receptorType: "Tyrosine kinase receptor",
                    
                    effects: {
                        lowerBloodGlucose: [
                            "Increases glucose uptake by cells (via GLUT4 transporters)",
                            "Promotes glycogenesis (glucose → glycogen storage)",
                            "Inhibits glycogenolysis (glycogen breakdown)",
                            "Inhibits gluconeogenesis (glucose production from non-carbohydrates)",
                            "Promotes protein synthesis",
                            "Promotes fat storage (lipogenesis)"
                        ]
                    },
                    
                    mechanism: [
                        "High blood glucose detected by beta cells",
                        "Beta cells secrete insulin into bloodstream",
                        "Insulin binds to receptors on target cells",
                        "GLUT4 transporters move to cell membrane",
                        "Glucose enters cells",
                        "Blood glucose decreases",
                        "Negative feedback: insulin secretion decreases"
                    ],
                    
                    analogy: "Like a key unlocking cell doors to let glucose in",
                    timeScale: "Minutes to hours"
                },
                {
                    hormone: "Glucagon",
                    producedBy: "Alpha cells of pancreatic islets",
                    trigger: "Low blood glucose (<70 mg/dL)",
                    targetCells: "Primarily liver cells",
                    receptorType: "G-protein coupled receptor",
                    
                    effects: {
                        raiseBloodGlucose: [
                            "Promotes glycogenolysis (glycogen → glucose)",
                            "Promotes gluconeogenesis (making glucose from amino acids, lactate)",
                            "Inhibits glycogenesis (glucose storage)",
                            "Promotes fat breakdown (lipolysis)",
                            "Releases glucose into bloodstream"
                        ]
                    },
                    
                    mechanism: [
                        "Low blood glucose detected by alpha cells",
                        "Alpha cells secrete glucagon",
                        "Glucagon travels to liver",
                        "Liver breaks down glycogen and produces glucose",
                        "Glucose released into blood",
                        "Blood glucose increases",
                        "Negative feedback: glucagon secretion decreases"
                    ],
                    
                    analogy: "Like withdrawing money from a savings account",
                    timeScale: "Minutes to hours"
                }
            ],

            opposingActions: {
                description: "Insulin and glucagon have opposite effects, working together to maintain homeostasis",
                insulin: "Lowers blood glucose (hypoglycemic hormone)",
                glucagon: "Raises blood glucose (hyperglycemic hormone)",
                relationship: "Antagonistic but coordinated",
                balance: "Ratio of insulin to glucagon determines net effect"
            },

            metabolicPathways: [
                {
                    pathway: "Glycogenesis",
                    description: "Formation of glycogen from glucose (storage)",
                    location: "Liver and muscle",
                    trigger: "High blood glucose, insulin present",
                    capacity: "Liver: ~100g, Muscle: ~400g glycogen",
                    equation: "Many glucose molecules → Glycogen (branched polymer)"
                },
                {
                    pathway: "Glycogenolysis",
                    description: "Breakdown of glycogen to glucose (mobilization)",
                    location: "Liver (releases to blood), Muscle (uses internally)",
                    trigger: "Low blood glucose, glucagon or epinephrine present",
                    duration: "Can sustain for ~12-18 hours of fasting",
                    equation: "Glycogen → Many glucose molecules"
                },
                {
                    pathway: "Gluconeogenesis",
                    description: "Production of glucose from non-carbohydrate sources",
                    location: "Primarily liver, some in kidney",
                    trigger: "Prolonged fasting, glucagon or cortisol present",
                    sources: "Amino acids (from protein), lactate, glycerol (from fat)",
                    importance: "Maintains glucose during starvation",
                    equation: "Amino acids/Lactate/Glycerol → Glucose"
                },
                {
                    pathway: "Glycolysis",
                    description: "Breakdown of glucose for energy",
                    location: "All cells (cytoplasm)",
                    trigger: "Cellular energy demand",
                    result: "Produces ATP and pyruvate",
                    equation: "Glucose → 2 Pyruvate + 2 ATP + 2 NADH"
                }
            ],

            otherRegulatingHormones: [
                {
                    hormone: "Epinephrine (Adrenaline)",
                    source: "Adrenal medulla",
                    trigger: "Stress, exercise, hypoglycemia",
                    effect: "Raises blood glucose (glycogenolysis)",
                    mechanism: "Rapid mobilization for 'fight or flight'",
                    timeScale: "Seconds to minutes (rapid)"
                },
                {
                    hormone: "Cortisol",
                    source: "Adrenal cortex",
                    trigger: "Prolonged stress, low blood glucose",
                    effect: "Raises blood glucose (gluconeogenesis, insulin resistance)",
                    mechanism: "Promotes protein breakdown for glucose production",
                    timeScale: "Hours (slower, sustained)"
                },
                {
                    hormone: "Growth Hormone",
                    source: "Anterior pituitary",
                    trigger: "Low blood glucose, sleep, exercise",
                    effect: "Raises blood glucose (insulin resistance)",
                    mechanism: "Promotes fat use, spares glucose",
                    timeScale: "Hours"
                },
                {
                    hormone: "Thyroid Hormones (T3, T4)",
                    source: "Thyroid gland",
                    effect: "Increases metabolic rate and glucose absorption",
                    mechanism: "Affects overall metabolism",
                    timeScale: "Days to weeks"
                }
            ],

            feedingAndFastingStates: {
                fedState: {
                    timing: "During and after eating (0-4 hours post-meal)",
                    bloodGlucose: "Elevated (100-140 mg/dL)",
                    dominantHormone: "Insulin",
                    processes: [
                        "Glucose absorption from intestine",
                        "Glucose uptake by cells",
                        "Glycogenesis (storage)",
                        "Lipogenesis (fat storage)",
                        "Protein synthesis"
                    ],
                    purpose: "Store excess nutrients"
                },
                postAbsorptiveState: {
                    timing: "Between meals (4-12 hours after eating)",
                    bloodGlucose: "Normal (70-100 mg/dL)",
                    dominantHormone: "Glucagon",
                    processes: [
                        "Glycogenolysis (glycogen → glucose)",
                        "Glucose released from liver",
                        "Beginning of fat breakdown",
                        "Maintenance of blood glucose"
                    ],
                    purpose: "Maintain glucose between meals"
                },
                fastingState: {
                    timing: "Prolonged fasting (>12 hours)",
                    bloodGlucose: "Low-normal (70-85 mg/dL)",
                    dominantHormones: "Glucagon, cortisol",
                    processes: [
                        "Gluconeogenesis (making new glucose)",
                        "Lipolysis (fat breakdown)",
                        "Ketone body production",
                        "Protein catabolism (for gluconeogenesis)"
                    ],
                    purpose: "Provide glucose for brain, switch to fat metabolism"
                },
                starvation: {
                    timing: "Days to weeks without food",
                    bloodGlucose: "Low (50-70 mg/dL)",
                    adaptations: [
                        "Brain adapts to use ketone bodies (instead of glucose)",
                        "Severe muscle protein breakdown",
                        "Maximum fat utilization",
                        "Reduced metabolic rate"
                    ],
                    danger: "Muscle wasting, organ damage, eventually death"
                }
            },

            diabetesMellitus: {
                definition: "Disease characterized by chronically elevated blood glucose due to insulin deficiency or resistance",
                
                type1: {
                    name: "Type 1 Diabetes (Insulin-Dependent)",
                    cause: "Autoimmune destruction of pancreatic beta cells",
                    result: "Little or no insulin production",
                    onset: "Usually childhood or adolescence (can occur at any age)",
                    prevalence: "~5-10% of diabetes cases",
                    symptoms: [
                        "Hyperglycemia (high blood sugar)",
                        "Polyuria (excessive urination)",
                        "Polydipsia (excessive thirst)",
                        "Polyphagia (excessive hunger)",
                        "Weight loss",
                        "Ketoacidosis risk (dangerous)"
                    ],
                    treatment: [
                        "Insulin injections or pump (lifelong)",
                        "Blood glucose monitoring",
                        "Diet management",
                        "Exercise"
                    ],
                    mechanism: "Without insulin, cells can't take up glucose → high blood glucose, cells starving"
                },
                
                type2: {
                    name: "Type 2 Diabetes (Non-Insulin-Dependent)",
                    cause: "Insulin resistance (cells don't respond to insulin) and eventual beta cell dysfunction",
                    result: "Inadequate insulin effect despite normal or high insulin levels",
                    onset: "Usually adulthood (increasingly in children)",
                    prevalence: "~90-95% of diabetes cases",
                    riskFactors: ["Obesity", "Sedentary lifestyle", "Genetics", "Age", "Poor diet"],
                    symptoms: [
                        "Hyperglycemia (often milder than Type 1)",
                        "Fatigue",
                        "Slow wound healing",
                        "Frequent infections",
                        "Blurred vision",
                        "Often asymptomatic initially"
                    ],
                    treatment: [
                        "Lifestyle changes (diet, exercise, weight loss)",
                        "Oral medications (improve insulin sensitivity)",
                        "Sometimes insulin (in advanced cases)",
                        "Blood glucose monitoring"
                    ],
                    progression: "Beta cells eventually can't produce enough insulin to overcome resistance"
                },
                
                complications: {
                    acute: [
                        "Hypoglycemia (from medication/insulin)",
                        "Hyperglycemic crisis",
                        "Diabetic ketoacidosis (Type 1)",
                        "Hyperosmolar hyperglycemic state (Type 2)"
                    ],
                    chronic: [
                        "Cardiovascular disease",
                        "Nephropathy (kidney damage)",
                        "Retinopathy (eye damage, blindness)",
                        "Neuropathy (nerve damage)",
                        "Poor wound healing",
                        "Increased infection risk"
                    ]
                },
                
                gestationalDiabetes: {
                    description: "Diabetes developing during pregnancy",
                    cause: "Pregnancy hormones cause insulin resistance",
                    risks: "Complications for mother and baby",
                    resolution: "Usually resolves after delivery",
                    futureRisk: "Increased risk of Type 2 diabetes later"
                }
            },

            hypoglycemia: {
                definition: "Blood glucose below 70 mg/dL",
                causes: [
                    "Excess insulin (diabetic medication overdose)",
                    "Skipping meals",
                    "Excessive exercise without eating",
                    "Alcohol consumption",
                    "Rare: insulinoma (insulin-secreting tumor)"
                ],
                symptoms: {
                    mild: "Hunger, shakiness, sweating, anxiety, irritability",
                    moderate: "Confusion, difficulty concentrating, blurred vision, weakness",
                    severe: "Seizures, unconsciousness, death (if untreated)"
                },
                treatment: {
                    conscious: "Fast-acting carbohydrates (juice, glucose tablets, candy)",
                    unconscious: "Glucagon injection or IV glucose (medical emergency)"
                },
                bodyResponse: "Releases glucagon, epinephrine, cortisol to raise glucose"
            },

            clinicalApplications: [
                "Diabetes management and monitoring",
                "Designing insulin therapy regimens",
                "Athletic nutrition and performance",
                "Weight management strategies",
                "Hypoglycemia treatment protocols",
                "Understanding metabolic syndrome",
                "Nutritional counseling",
                "Drug development for diabetes"
            ],

            category: 'blood_glucose'
        };
    }

    handleFeedbackMechanisms(problem) {
        return {
            topic: "Feedback Mechanisms in Homeostatic Regulation",
            definition: "Feedback mechanisms are control systems that use information about the output of a process to regulate the input, maintaining stability or amplifying responses.",

            negativeFeedback: {
                definition: "A control mechanism where the response opposes or reduces the original stimulus, maintaining homeostasis",
                characteristics: [
                    "Most common type in biological systems",
                    "Maintains stability and equilibrium",
                    "Prevents excessive responses",
                    "Self-correcting system"
                ],
                
                components: {
                    stimulus: "Change in regulated variable from set point",
                    sensor: "Detects the change (receptor)",
                    controlCenter: "Processes information and determines response",
                    effector: "Carries out response",
                    response: "Opposes the original stimulus",
                    result: "Return toward set point"
                },
                
                analogy: "Like a thermostat regulating room temperature: too cold → heater on → warms up → heater off",
                
                examples: [
                    {
                        system: "Body Temperature Regulation",
                        stimulus: "Body temperature increases above 37°C",
                        sensor: "Thermoreceptors in hypothalamus and skin",
                        controlCenter: "Hypothalamus",
                        effector: "Sweat glands, blood vessels",
                        response: "Vasodilation and sweating increase heat loss",
                        result: "Body temperature decreases back to 37°C",
                        feedback: "Decreased temperature inhibits heat loss mechanisms"
                    },
                    {
                        system: "Blood Glucose Regulation",
                        stimulus: "Blood glucose rises after eating",
                        sensor: "Beta cells in pancreas",
                        controlCenter: "Pancreas",
                        effector: "Body cells (muscle, liver, adipose)",
                        response: "Insulin secreted → cells take up glucose",
                        result: "Blood glucose decreases",
                        feedback: "Lower glucose inhibits insulin secretion"
                    },
                    {
                        system: "Blood Pressure Regulation",
                        stimulus: "Blood pressure increases",
                        sensor: "Baroreceptors in carotid arteries and aorta",
                        controlCenter: "Cardiovascular control center in medulla",
                        effector: "Heart and blood vessels",
                        response: "Decreased heart rate, vasodilation",
                        result: "Blood pressure decreases",
                        feedback: "Lower pressure reduces inhibition of sympathetic system"
                    },
                    {
                        system: "Thyroid Hormone Regulation",
                        stimulus: "Low thyroid hormone (T3/T4) levels",
                        sensor: "Hypothalamus and pituitary",
                        controlCenter: "Hypothalamus → Pituitary",
                        effector: "Thyroid gland",
                        response: "TRH → TSH → Thyroid produces T3/T4",
                        result: "Thyroid hormone levels increase",
                        feedback: "High T3/T4 inhibits TRH and TSH release"
                    },
                    {
                        system: "Carbon Dioxide Regulation",
                        stimulus: "CO₂ levels increase in blood",
                        sensor: "Chemoreceptors in medulla and carotid/aortic bodies",
                        controlCenter: "Respiratory center in medulla",
                        effector: "Diaphragm and intercostal muscles",
                        response: "Increased breathing rate and depth",
                        result: "More CO₂ exhaled, levels decrease",
                        feedback: "Lower CO₂ reduces breathing stimulus"
                    },
                    {
                        system: "Calcium Regulation",
                        stimulus: "Blood calcium decreases",
                        sensor: "Parathyroid gland",
                        controlCenter: "Parathyroid gland",
                        effector: "Bones, kidneys, intestines",
                        response: "PTH released → Ca²⁺ released from bones, reabsorbed by kidneys, absorbed from intestines",
                        result: "Blood calcium increases",
                        feedback: "High calcium inhibits PTH secretion"
                    }
                ]
            },

            positiveFeedback: {
                definition: "A control mechanism where the response amplifies or enhances the original stimulus",
                characteristics: [
                    "Less common in biological systems",
                    "Destabilizing, moves away from equilibrium",
                    "Usually short-lived with built-in termination",
                    "Used for rapid, decisive responses"
                ],
                
                purpose: "Amplify responses that need to be completed quickly and decisively",
                
                termination: "Positive feedback loops have natural endpoints or are terminated by other mechanisms",
                
                examples: [
                    {
                        system: "Childbirth (Parturition)",
                        initialStimulus: "Baby's head pushes against cervix",
                        sensor: "Stretch receptors in cervix",
                        controlCenter: "Hypothalamus → Posterior pituitary",
                        effector: "Uterine smooth muscle",
                        response: "Oxytocin released → stronger contractions",
                        amplification: "Stronger contractions → more stretching → more oxytocin → even stronger contractions",
                        termination: "Baby delivered → stretching stops → oxytocin release stops",
                        importance: "Ensures complete, rapid delivery"
                    },
                    {
                        system: "Blood Clotting Cascade",
                        initialStimulus: "Blood vessel damage",
                        sensor: "Exposed collagen and tissue factor",
                        response: "Platelets adhere and activate clotting factors",
                        amplification: "Each clotting factor activates many molecules of the next factor → rapid amplification",
                        result: "Fibrin clot forms quickly",
                        termination: "Clot seals wound → cascade stops; anticlotting factors prevent excessive clotting",
                        importance: "Rapid response prevents blood loss"
                    },
                    {
                        system: "Lactation (Milk Production)",
                        initialStimulus: "Baby suckling",
                        sensor: "Mechanoreceptors in nipple",
                        controlCenter: "Hypothalamus → Posterior pituitary",
                        response: "Oxytocin released → milk ejection",
                        amplification: "More suckling → more oxytocin → more milk release → continued suckling",
                        termination: "Baby stops suckling → loop ends",
                        importance: "Ensures adequate milk delivery"
                    },
                    {
                        system: "Action Potential (Nerve Impulse)",
                        initialStimulus: "Membrane depolarization",
                        response: "Voltage-gated Na+ channels open",
                        amplification: "Na+ influx → more depolarization → more Na+ channels open → more Na+ influx",
                        result: "Rapid, all-or-none spike in voltage",
                        termination: "Na+ channels inactivate; K+ channels open and repolarize membrane",
                        importance: "Rapid, reliable signal transmission"
                    },
                    {
                        system: "Ovulation",
                        initialStimulus: "Rising estrogen levels from maturing follicle",
                        response: "Estrogen (at high levels) stimulates LH release",
                        amplification: "LH surge → more estrogen → more LH",
                        result: "Rapid LH spike triggers ovulation",
                        termination: "Ovulation occurs → corpus luteum forms → progesterone inhibits LH",
                        importance: "Precise timing of ovulation"
                    },
                    {
                        system: "Fruit Ripening (Ethylene)",
                        initialStimulus: "Ethylene gas produced by ripening fruit",
                        response: "Ethylene triggers ripening processes",
                        amplification: "Ripening produces more ethylene → accelerates ripening",
                        result: "Rapid, coordinated ripening",
                        termination: "Fruit fully ripe or overripe",
                        importance: "Coordinates ripening for seed dispersal"
                    }
                ]
            },

            comparison: {
                table: {
                    headers: ["Feature", "Negative Feedback", "Positive Feedback"],
                    data: [
                        ["Effect on stimulus", "Opposes/reduces", "Amplifies/enhances"],
                        ["Stability", "Maintains equilibrium", "Moves away from equilibrium"],
                        ["Frequency in biology", "Very common (most systems)", "Rare (specific purposes)"],
                        ["Duration", "Continuous, ongoing", "Short-lived, terminated"],
                        ["Purpose", "Maintain homeostasis", "Complete rapid, decisive processes"],
                        ["Example", "Temperature regulation", "Childbirth"],
                        ["Result", "System returns to set point", "System reaches endpoint then stops"]
                    ]
                },
                whenUsed: {
                    negativeFeedback: "When stability and constancy are needed",
                    positiveFeedback: "When rapid, complete responses are needed"
                }
            },

            feedbackLoopCharacteristics: {
                gainOfLoop: {
                    definition: "Magnitude of response relative to stimulus",
                    highGain: "Large response to small stimulus (sensitive system)",
                    lowGain: "Small response to large stimulus (less sensitive)",
                    biological: "Most homeostatic systems have moderate to high gain for effective regulation"
                },
                timeLag: {
                    definition: "Delay between stimulus and response",
                    short: "Rapid adjustment (e.g., nerve reflexes: milliseconds)",
                    long: "Slower adjustment (e.g., hormone systems: minutes to hours)",
                    consequence: "Time lag can cause oscillation around set point"
                },
                oscillation: {
                    description: "Fluctuations above and below set point",
                    cause: "Time lag in feedback response",
                    normal: "Small oscillations are normal (dynamic equilibrium)",
                    example: "Body temperature varies by ~0.5°C throughout day"
                }
            },

            feedForwardControl: {
                definition: "Anticipatory responses before actual disturbance occurs",
                difference: "Doesn't wait for deviation from set point; predicts and prevents",
                examples: [
                    "Salivation at sight/smell of food (before eating)",
                    "Increased heart rate before exercise (anticipatory)",
                    "Pupil constriction when moving from dark to light (anticipates bright light)"
                ],
                advantage: "Faster response, prevents disturbance",
                limitation: "Can't correct for unexpected changes"
            },

            integratedSystems: {
                description: "Most physiological variables are controlled by multiple, integrated feedback systems",
                example: "Blood pressure regulation",
                mechanisms: [
                    "Baroreceptor reflex (rapid, neural)",
                    "Renin-angiotensin-aldosterone system (slower, hormonal)",
                    "ADH release (hormonal)",
                    "Atrial natriuretic peptide (hormonal)",
                    "Kidney regulation of blood volume (long-term)"
                ],
                integration: "These systems work together on different time scales for precise control"
            },

            clinicalSignificance: [
                "Understanding disease as failure of feedback control",
                "Designing therapeutic interventions",
                "Predicting drug effects and side effects",
                "Understanding hormone replacement therapy",
                "Managing chronic diseases",
                "Optimizing athletic performance",
                "Developing artificial organs and prosthetics"
            ],

            category: 'feedback_mechanisms'
        };
    }

    handleNervousRegulation(problem) {
        return {
            topic: "Nervous System Regulation of Homeostasis",
            definition: "The nervous system provides rapid, precise control of homeostatic functions through electrical and chemical signals, coordinating immediate responses to internal and external changes.",

            characteristics: [
                "Rapid response (milliseconds to seconds)",
                "Precise targeting of specific cells/organs",
                "Short-duration effects",
                "Point-to-point communication",
                "Uses electrical signals (action potentials) and neurotransmitters"
            ],

            autonomicNervousSystem: {
                definition: "Division of nervous system controlling involuntary functions",
                function: "Regulates internal organs, glands, smooth muscle, cardiac muscle",
                control: "Involuntary (automatic, not under conscious control)",
                location: "Central control in hypothalamus, medulla oblongata, and spinal cord",
                
                divisions: {
                    sympathetic: {
                        name: "Sympathetic Division",
                        nickname: "'Fight or Flight' system",
                        activation: "Stress, danger, exercise, excitement",
                        origin: "Thoracolumbar region (T1-L2) of spinal cord",
                        neurotransmitter: "Norepinephrine (at target organs), acetylcholine (at ganglia)",
                        ganglia: "Close to spinal cord (sympathetic chain)",
                        
                        generalEffects: [
                            "Increases heart rate and force of contraction",
                            "Dilates bronchioles (easier breathing)",
                            "Dilates pupils (better vision)",
                            "Inhibits digestive activity",
                            "Stimulates glucose release from liver",
                            "Stimulates sweat glands",
                            "Constricts blood vessels in skin and digestive organs",
                            "Dilates blood vessels in skeletal muscles",
                            "Stimulates adrenal medulla (epinephrine release)",
                            "Inhibits bladder contraction",
                            "Promotes ejaculation"
                        ],
                        
                        purpose: "Prepares body for intense physical activity; mobilizes energy; prioritizes vital functions",
                        
                        specificOrgans: {
                            heart: "↑ Rate and force (via β1 receptors)",
                            lungs: "Bronchodilation (via β2 receptors)",
                            liver: "Glycogenolysis, glucose release",
                            bloodVessels: "Constriction in GI/skin (α receptors), dilation in muscle (β2 receptors)",
                            pupils: "Dilation (mydriasis)",
                            digestive: "↓ Motility and secretion",
                            bladder: "Relaxation of detrusor, contraction of sphincter",
                            sweatGlands: "Activation (cholinergic exception)"
                        }
                    },
                    
                    parasympathetic: {
                        name: "Parasympathetic Division",
                        nickname: "'Rest and Digest' system",
                        activation: "Rest, relaxation, after meals",
                        origin: "Craniosacral region (brainstem and S2-S4)",
                        neurotransmitter: "Acetylcholine (at ganglia and target organs)",
                        ganglia: "Close to or within target organs",
                        
                        generalEffects: [
                            "Decreases heart rate",
                            "Constricts bronchioles",
                            "Constricts pupils",
                            "Stimulates digestive activity",
                            "Stimulates salivation",
                            "Stimulates bile release",
                            "Promotes nutrient storage",
                            "Stimulates bladder contraction",
                            "Promotes erection",
                            "Decreases metabolic rate"
                        ],
                        
                        purpose: "Promotes recovery, digestion, energy storage; maintains normal body functions",
                        
                        specificOrgans: {
                            heart: "↓ Rate (via vagus nerve)",
                            lungs: "Bronchoconstriction",
                            digestive: "↑ Motility, secretion, peristalsis",
                            pupils: "Constriction (miosis)",
                            salivaryGlands: "Stimulation (watery saliva)",
                            bladder: "Contraction of detrusor, relaxation of sphincter",
                            pancreas: "Stimulates insulin release"
                        }
                    }
                },
                
                dualInnervation: {
                    description: "Most organs receive both sympathetic and parasympathetic input",
                    effect: "Allows precise, bidirectional control",
                    balance: "Autonomic tone - ongoing activity of both divisions",
                    example: "Heart rate controlled by balance: ↑ sympathetic = faster, ↑ parasympathetic = slower",
                    exceptions: [
                        "Sweat glands (only sympathetic)",
                        "Adrenal medulla (only sympathetic)",
                        "Most blood vessels (only sympathetic)",
                        "Arrector pili muscles (only sympathetic)"
                    ]
                },
                
                antagonisticEffects: "Generally have opposite effects on same organ, allowing fine-tuned control"
            },

            keyControlCenters: {
                hypothalamus: {
                    role: "Master regulator of homeostasis",
                    location: "Base of brain, above pituitary",
                    functions: [
                        "Temperature regulation (thermostat)",
                        "Hunger and satiety",
                        "Thirst and fluid balance",
                        "Sleep-wake cycles (circadian rhythms)",
                        "Emotional responses",
                        "Controls autonomic nervous system",
                        "Links nervous and endocrine systems (via pituitary)"
                    ],
                    connections: "Integrates sensory input and coordinates responses via autonomic output"
                },
                
                medullaOblongata: {
                    role: "Controls vital autonomic functions",
                    location: "Lower brainstem",
                    centers: {
                        cardiovascular: "Regulates heart rate and blood pressure",
                        respiratory: "Controls breathing rate and rhythm",
                        vomiting: "Coordinated vomiting reflex",
                        swallowing: "Coordinates swallowing",
                        coughing: "Cough reflex"
                    },
                    importance: "Damage can be fatal; controls life-sustaining functions"
                },
                
                pons: {
                    role: "Assists medulla in respiratory control",
                    location: "Middle brainstem",
                    function: "Fine-tunes breathing rhythm, prevents overinflation"
                },
                
                spinalCord: {
                    role: "Pathway for signals; coordinates reflexes",
                    location: "Vertebral column",
                    functions: [
                        "Transmits signals to/from brain",
                        "Coordinates spinal reflexes",
                        "Contains sympathetic preganglionic neurons (T1-L2)"
                    ]
                }
            },

            reflexArcs: {
                definition: "Rapid, automatic responses to stimuli",
                characteristics: "Fast, involuntary, protective",
                
                components: [
                    "Receptor (detects stimulus)",
                    "Sensory neuron (transmits to CNS)",
                    "Integration center (CNS - brain or spinal cord)",
                    "Motor neuron (transmits from CNS)",
                    "Effector (muscle or gland responds)"
                ],
                
                types: {
                    monosynapticReflex: {
                        description: "One synapse (sensory → motor)",
                        example: "Patellar (knee-jerk) reflex",
                        speed: "Fastest reflexes",
                        pathway: "Sensory neuron directly synapses with motor neuron"
                    },
                    polysynapticReflex: {
                        description: "Multiple synapses (includes interneurons)",
                        example: "Withdrawal reflex (pulling hand from hot object)",
                        speed: "Slightly slower but more complex",
                        pathway: "Sensory → interneuron(s) → motor neuron"
                    }
                },
                
                examples: [
                    {
                        reflex: "Withdrawal Reflex",
                        stimulus: "Pain (e.g., touching hot stove)",
                        response: "Rapid withdrawal of limb",
                        pathway: "Pain receptor → sensory neuron → interneurons → motor neurons → flexor muscles contract",
                        purpose: "Protective; removes body part from danger",
                        speed: "~50-100 milliseconds"
                    },
                    {
                        reflex: "Pupillary Light Reflex",
                        stimulus: "Bright light",
                        response: "Pupil constriction",
                        pathway: "Retina → optic nerve → midbrain → parasympathetic → pupillary constrictor",
                        purpose: "Protects retina from excess light",
                        bilateral: "Light in one eye causes both pupils to constrict"
                    },
                    {
                        reflex: "Baroreceptor Reflex",
                        stimulus: "Increased blood pressure",
                        response: "Decreased heart rate and vasodilation",
                        pathway: "Baroreceptors → medulla → ↓ sympathetic/↑ parasympathetic → heart and vessels",
                        purpose: "Maintains blood pressure homeostasis",
                        speed: "Seconds"
                    },
                    {
                        reflex: "Gag Reflex",
                        stimulus: "Object touching back of throat",
                        response: "Throat muscles contract; retching",
                        pathway: "Sensory (glossopharyngeal) → medulla → motor (vagus) → pharyngeal muscles",
                        purpose: "Prevents choking",
                        clinical: "Used to assess brainstem function"
                    }
                ]
            },

            specificHomeostasisExamples: {
                cardiovascularRegulation: {
                    shortTerm: {
                        mechanism: "Baroreceptor reflex",
                        sensors: "Baroreceptors in carotid sinus and aortic arch",
                        response: "↑ BP → ↑ parasympathetic/↓ sympathetic → ↓ heart rate, vasodilation → ↓ BP",
                        speed: "Seconds",
                        nerves: "Glossopharyngeal (CN IX) and vagus (CN X)"
                    },
                    longTerm: "Hormonal control (RAAS, ADH) and kidney function"
                },
                
                respiratoryRegulation: {
                    chemicalControl: {
                        primaryStimulus: "CO₂ levels (detected by central chemoreceptors in medulla)",
                        secondaryStimulus: "O₂ and pH (detected by peripheral chemoreceptors in carotid/aortic bodies)",
                        response: "↑ CO₂ → ↑ breathing rate/depth → ↓ CO₂",
                        medulla: "Sets basic rhythm",
                        pons: "Modifies rhythm"
                    },
                    voluntaryControl: "Cerebral cortex can override (breath holding, speaking)"
                },
                
                temperatureRegulation: {
                    sensors: "Peripheral (skin) and central (hypothalamus) thermoreceptors",
                    integration: "Hypothalamus preoptic area",
                    coldResponses: [
                        "Sympathetic → vasoconstriction (conserve heat)",
                        "Shivering (motor neurons → skeletal muscle)",
                        "↑ Metabolic rate (via thyroid axis)"
                    ],
                    heatResponses: [
                        "↓ Sympathetic → vasodilation (lose heat)",
                        "Sympathetic (cholinergic) → sweating",
                        "Behavioral (seeking shade)"
                    ]
                },
                
                digestiveRegulation: {
                    cephalicPhase: "Sight/smell of food → parasympathetic → salivation, gastric juice",
                    gastricPhase: "Food in stomach → local reflexes and vagal stimulation",
                    intestinalPhase: "Food in intestines → hormones and reflexes",
                    sympatheticEffect: "Inhibits digestion during stress ('blood to muscles, not gut')"
                }
            },

            neurotransmitters: {
                acetylcholine: {
                    locations: [
                        "All autonomic ganglia (both sympathetic and parasympathetic)",
                        "Parasympathetic postganglionic neurons",
                        "Sympathetic postganglionic to sweat glands",
                        "Somatic motor neurons (skeletal muscle)"
                    ],
                    receptors: {
                        nicotinic: "Ganglia, skeletal muscle (fast, excitatory)",
                        muscarinic: "Parasympathetic targets (varied effects)"
                    }
                },
                
                norepinephrine: {
                    locations: "Most sympathetic postganglionic neurons",
                    receptors: {
                        alpha1: "Vasoconstriction, pupil dilation",
                        alpha2: "Inhibits norepinephrine release (negative feedback)",
                        beta1: "↑ Heart rate and force",
                        beta2: "Bronchodilation, vasodilation in muscle",
                        beta3: "Lipolysis (fat breakdown)"
                    },
                    note: "Epinephrine from adrenal medulla has similar effects"
                }
            },

            nervousVsEndocrineControl: {
                comparison: {
                    speed: {
                        nervous: "Very fast (milliseconds to seconds)",
                        endocrine: "Slower (seconds to hours)"
                    },
                    duration: {
                        nervous: "Brief effects",
                        endocrine: "Prolonged effects"
                    },
                    targeting: {
                        nervous: "Precise, specific (point-to-point)",
                        endocrine: "Widespread (broadcast to all cells with receptors)"
                    },
                    mechanism: {
                        nervous: "Electrical signals and neurotransmitters",
                        endocrine: "Hormones in bloodstream"
                    },
                    examples: {
                        nervous: "Reflex responses, rapid heart rate changes",
                        endocrine: "Growth, metabolism, long-term stress response"
                    }
                },
                integration: "Often work together (neuroendocrine system); hypothalamus links both"
            },

            clinicalApplications: [
                "Understanding autonomic disorders (e.g., dysautonomia)",
                "Drug development (beta-blockers, anticholinergics)",
                "Managing hypertension and heart disease",
                "Treating anxiety and stress disorders",
                "Anesthesia (blocking autonomic responses)",
                "Understanding shock and trauma responses",
                "Neurological assessment (reflex testing)",
                "Managing chronic pain"
            ],

            category: 'nervous_regulation'
        };
    }

    handleEndocrineRegulation(problem) {
        return {
            topic: "Endocrine System Regulation of Homeostasis",
            definition: "The endocrine system uses hormones (chemical messengers) transported through the bloodstream to regulate long-term homeostatic functions, growth, metabolism, and reproduction.",

            characteristics: [
                "Slower response than nervous system (seconds to hours)",
                "Longer-lasting effects (hours to days)",
                "Widespread effects (all cells with appropriate receptors)",
                "Broadcast communication (hormones reach all parts of body)",
                "Amplification (one hormone molecule can trigger many responses)"
            ],

            hormoneBasics: {
                definition: "Chemical messengers secreted by endocrine glands into bloodstream",
                
                chemicalClasses: {
                    aminoAcidBased: {
                        types: ["Amino acid derivatives", "Peptides", "Proteins"],
                        examples: ["Epinephrine", "Insulin", "Growth hormone"],
                        properties: "Water-soluble, cannot cross cell membranes",
                        receptors: "Cell surface receptors",
                        mechanism: "Second messenger systems (cAMP, Ca²⁺, IP₃)",
                        speed: "Fast (seconds to minutes)"
                    },
                    steroids: {
                        derivedFrom: "Cholesterol",
                        examples: ["Cortisol", "Testosterone", "Estrogen", "Aldosterone"],
                        properties: "Lipid-soluble, can cross cell membranes",
                        receptors: "Intracellular receptors (cytoplasm or nucleus)",
                        mechanism: "Bind to nuclear receptors → alter gene transcription",
                        speed: "Slower (hours to days) but longer-lasting"
                    },
                    eicosanoids: {
                        derivedFrom: "Fatty acids (arachidonic acid)",
                        examples: ["Prostaglandins", "Leukotrienes"],
                        action: "Local (paracrine) rather than distant (endocrine)",
                        functions: "Inflammation, pain, fever, blood clotting"
                    }
                },
                
                mechanismsOfAction: {
                    waterSoluble: {
                        steps: [
                            "Hormone binds to receptor on cell membrane",
                            "Receptor activates G protein or enzyme",
                            "Second messenger produced (cAMP, IP₃, Ca²⁺, DAG)",
                            "Second messenger activates protein kinases",
                            "Protein kinases phosphorylate target proteins",
                            "Cellular response occurs"
                        ],
                        amplification: "One hormone → many second messengers → many activated enzymes",
                        examples: "Epinephrine, glucagon, insulin"
                    },
                    lipidSoluble: {
                        steps: [
                            "Hormone diffuses through cell membrane",
                            "Binds to intracellular receptor",
                            "Hormone-receptor complex enters nucleus",
                            "Complex binds to DNA (hormone response element)",
                            "Alters gene transcription",
                            "New proteins synthesized",
                            "Cellular response occurs"
                        ],
                        timeScale: "Hours (time for transcription and translation)",
                        examples: "Cortisol, thyroid hormones, sex steroids"
                    }
                },
                properties: {
                    specificity: "Only affect cells with appropriate receptors (target cells)",
                    potency: "Active at very low concentrations (nanomolar to picomolar)",
                    regulation: "Controlled by feedback mechanisms, usually negative feedback",
                    halfLife: "Varies from minutes to days; determines duration of effect",
                    metabolism: "Broken down by liver and kidneys"
                }
            },

            majorEndocrineGlands: [
                {
                    gland: "Hypothalamus",
                    location: "Base of brain, above pituitary",
                    type: "Neuroendocrine (links nervous and endocrine systems)",
                    hormones: [
                        {
                            name: "Releasing and Inhibiting Hormones",
                            examples: ["TRH", "CRH", "GnRH", "GHRH", "Dopamine (PIH)"],
                            targets: "Anterior pituitary",
                            function: "Control pituitary hormone secretion"
                        },
                        {
                            name: "Oxytocin and ADH",
                            production: "Made in hypothalamus, stored/released by posterior pituitary",
                            functions: "Oxytocin: labor, lactation; ADH: water retention"
                        }
                    ],
                    importance: "Master regulator; integrates nervous and endocrine control"
                },
                
                {
                    gland: "Pituitary Gland",
                    location: "Attached to hypothalamus",
                    nickname: "'Master gland' (though controlled by hypothalamus)",
                    divisions: {
                        anterior: {
                            hormones: [
                                {
                                    name: "Growth Hormone (GH)",
                                    targets: "Most tissues, especially bone and muscle",
                                    functions: "Growth, protein synthesis, fat breakdown",
                                    regulation: "GHRH (+), Somatostatin (-)",
                                    disorders: "Gigantism/acromegaly (excess), dwarfism (deficiency)"
                                },
                                {
                                    name: "Thyroid-Stimulating Hormone (TSH)",
                                    target: "Thyroid gland",
                                    function: "Stimulates thyroid hormone release",
                                    regulation: "TRH (+), T3/T4 (-)"
                                },
                                {
                                    name: "Adrenocorticotropic Hormone (ACTH)",
                                    target: "Adrenal cortex",
                                    function: "Stimulates cortisol release",
                                    regulation: "CRH (+), cortisol (-)"
                                },
                                {
                                    name: "Follicle-Stimulating Hormone (FSH) and Luteinizing Hormone (LH)",
                                    target: "Gonads (testes, ovaries)",
                                    functions: "Reproductive function, gamete production",
                                    regulation: "GnRH (+), sex steroids (-)"
                                },
                                {
                                    name: "Prolactin",
                                    target: "Mammary glands",
                                    function: "Milk production",
                                    regulation: "Dopamine (-), TRH (+)"
                                }
                            ]
                        },
                        posterior: {
                            note: "Stores and releases hormones made in hypothalamus",
                            hormones: [
                                {
                                    name: "Oxytocin",
                                    targets: "Uterus, mammary glands",
                                    functions: "Labor contractions, milk ejection, bonding",
                                    mechanism: "Positive feedback during labor"
                                },
                                {
                                    name: "ADH (Vasopressin)",
                                    target: "Kidneys (collecting ducts)",
                                    function: "Water reabsorption",
                                    regulation: "Blood osmolarity (+), blood volume (+)",
                                    covered: "In osmoregulation topic"
                                }
                            ]
                        }
                    }
                },
                
                {
                    gland: "Thyroid Gland",
                    location: "Anterior neck, wraps around trachea",
                    hormones: [
                        {
                            name: "Thyroid Hormones (T3 and T4)",
                            production: "Follicular cells",
                            requires: "Iodine",
                            functions: [
                                "Increases metabolic rate",
                                "Increases heat production",
                                "Essential for growth and development",
                                "Affects almost all tissues"
                            ],
                            regulation: {
                                axis: "Hypothalamus (TRH) → Pituitary (TSH) → Thyroid (T3/T4)",
                                feedback: "T3/T4 inhibit TRH and TSH (negative feedback)"
                            },
                            disorders: {
                                hyperthyroidism: "Excess T3/T4: weight loss, heat intolerance, rapid heart rate (Graves' disease)",
                                hypothyroidism: "Deficiency: weight gain, cold intolerance, fatigue (Hashimoto's, iodine deficiency)"
                            }
                        },
                        {
                            name: "Calcitonin",
                            production: "Parafollicular (C) cells",
                            function: "Lowers blood calcium (opposite of PTH)",
                            mechanism: "Inhibits osteoclasts, promotes calcium deposition in bone",
                            importance: "Minor role in humans compared to PTH",
                            covered: "In calcium regulation topic"
                        }
                    ]
                },
                
                {
                    gland: "Parathyroid Glands",
                    location: "Four small glands on posterior thyroid",
                    hormone: {
                        name: "Parathyroid Hormone (PTH)",
                        function: "Raises blood calcium",
                        mechanisms: [
                            "Stimulates osteoclasts (bone breakdown → Ca²⁺ release)",
                            "Increases kidney Ca²⁺ reabsorption",
                            "Activates vitamin D → increases intestinal Ca²⁺ absorption"
                        ],
                        regulation: "Low blood Ca²⁺ stimulates PTH release",
                        covered: "In calcium regulation topic"
                    }
                },
                
                {
                    gland: "Adrenal Glands",
                    location: "On top of each kidney",
                    structure: "Two distinct regions",
                    regions: {
                        cortex: {
                            description: "Outer region; produces steroid hormones",
                            zones: {
                                zonaGlomerulosa: {
                                    hormone: "Aldosterone (mineralocorticoid)",
                                    function: "Regulates Na⁺ and K⁺ balance",
                                    covered: "In osmoregulation topic"
                                },
                                zonaFasciculata: {
                                    hormone: "Cortisol (glucocorticoid)",
                                    functions: [
                                        "Increases blood glucose (gluconeogenesis)",
                                        "Anti-inflammatory",
                                        "Immunosuppressive",
                                        "Stress response"
                                    ],
                                    regulation: "CRH → ACTH → cortisol",
                                    covered: "In stress response topic"
                                },
                                zonaReticularis: {
                                    hormones: "Androgens (DHEA, androstenedione)",
                                    functions: "Converted to sex hormones; minor role"
                                }
                            }
                        },
                        medulla: {
                            description: "Inner region; neuroendocrine tissue",
                            hormones: "Epinephrine (adrenaline) and Norepinephrine",
                            trigger: "Sympathetic nervous system activation",
                            function: "Rapid stress response ('fight or flight')",
                            effects: [
                                "Increases heart rate and blood pressure",
                                "Bronchodilation",
                                "Glucose mobilization",
                                "Redirects blood flow to muscles"
                            ],
                            timeScale: "Seconds (rapid); complements sympathetic nervous system",
                            covered: "In stress response topic"
                        }
                    }
                },
                
                {
                    gland: "Pancreas",
                    location: "Behind stomach",
                    dualFunction: "Exocrine (digestive enzymes) and endocrine (hormones)",
                    endocrineComponent: "Islets of Langerhans",
                    hormones: [
                        {
                            name: "Insulin",
                            cells: "Beta cells",
                            function: "Lowers blood glucose",
                            covered: "In blood glucose regulation topic"
                        },
                        {
                            name: "Glucagon",
                            cells: "Alpha cells",
                            function: "Raises blood glucose",
                            covered: "In blood glucose regulation topic"
                        },
                        {
                            name: "Somatostatin",
                            cells: "Delta cells",
                            function: "Inhibits insulin and glucagon release (local regulation)"
                        }
                    ]
                },
                
                {
                    gland: "Gonads",
                    types: "Testes (male), Ovaries (female)",
                    hormones: {
                        testes: {
                            hormone: "Testosterone",
                            functions: [
                                "Male secondary sex characteristics",
                                "Spermatogenesis",
                                "Muscle and bone mass",
                                "Libido"
                            ],
                            regulation: "GnRH → LH/FSH → testosterone"
                        },
                        ovaries: {
                            hormones: "Estrogen and Progesterone",
                            functions: [
                                "Female secondary sex characteristics",
                                "Menstrual cycle regulation",
                                "Pregnancy maintenance (progesterone)",
                                "Bone health"
                            ],
                            regulation: "GnRH → LH/FSH → estrogen/progesterone"
                        }
                    },
                    feedback: "Negative feedback to hypothalamus and pituitary"
                },
                
                {
                    gland: "Pineal Gland",
                    location: "Brain (epithalamus)",
                    hormone: {
                        name: "Melatonin",
                        function: "Regulates sleep-wake cycles (circadian rhythms)",
                        production: "Increased in darkness, decreased in light",
                        effects: "Promotes sleep, seasonal reproduction in some animals"
                    }
                },
                
                {
                    gland: "Thymus",
                    location: "Upper chest, behind sternum",
                    hormone: {
                        name: "Thymosin",
                        function: "T-cell maturation (immune system development)",
                        ageRelated: "Large in children, shrinks after puberty"
                    }
                }
            ],

            hormonalAxes: {
                HPTAxis: {
                    name: "Hypothalamic-Pituitary-Thyroid Axis",
                    pathway: "Hypothalamus (TRH) → Anterior Pituitary (TSH) → Thyroid (T3/T4)",
                    feedback: "T3/T4 inhibit TRH and TSH release",
                    function: "Regulates metabolism and energy",
                    disorders: "Hypothyroidism, hyperthyroidism"
                },
                
                HPAAxis: {
                    name: "Hypothalamic-Pituitary-Adrenal Axis",
                    pathway: "Hypothalamus (CRH) → Anterior Pituitary (ACTH) → Adrenal Cortex (Cortisol)",
                    feedback: "Cortisol inhibits CRH and ACTH release",
                    function: "Stress response, metabolism",
                    covered: "In stress response topic"
                },
                
                HPGAxis: {
                    name: "Hypothalamic-Pituitary-Gonadal Axis",
                    pathway: "Hypothalamus (GnRH) → Anterior Pituitary (LH/FSH) → Gonads (Sex Steroids)",
                    feedback: "Sex steroids inhibit GnRH and LH/FSH release",
                    function: "Reproduction, sexual development"
                }
            },

            feedbackRegulation: {
                negativeFeedback: {
                    description: "Most common; hormone inhibits its own release",
                    examples: [
                        "T3/T4 → inhibit TSH and TRH",
                        "Cortisol → inhibits ACTH and CRH",
                        "Testosterone/estrogen → inhibit LH/FSH and GnRH"
                    ],
                    purpose: "Maintains stable hormone levels"
                },
                
                positiveFeedback: {
                    description: "Rare; hormone stimulates its own release",
                    examples: [
                        "Estrogen surge before ovulation → LH surge",
                        "Oxytocin during labor"
                    ],
                    purpose: "Produces rapid, decisive responses"
                }
            },

            hormonesInHomeostasis: {
                metabolism: {
                    hormones: ["Insulin", "Glucagon", "Thyroid hormones", "Cortisol", "Growth hormone"],
                    functions: "Regulate blood glucose, metabolic rate, energy storage/mobilization"
                },
                waterElectrolyteBalance: {
                    hormones: ["ADH", "Aldosterone", "ANP"],
                    functions: "Regulate water retention, Na⁺/K⁺ balance, blood volume"
                },
                calciumBalance: {
                    hormones: ["PTH", "Calcitonin", "Vitamin D (calcitriol)"],
                    functions: "Regulate blood calcium levels"
                },
                stressResponse: {
                    hormones: ["Epinephrine", "Norepinephrine", "Cortisol"],
                    functions: "Mobilize energy, increase alertness, suppress non-essential functions"
                },
                growth: {
                    hormones: ["Growth hormone", "Thyroid hormones", "Insulin", "Sex steroids"],
                    functions: "Promote tissue growth, bone elongation, protein synthesis"
                },
                reproduction: {
                    hormones: ["GnRH", "LH", "FSH", "Testosterone", "Estrogen", "Progesterone", "Oxytocin", "Prolactin"],
                    functions: "Control reproductive cycles, gamete production, pregnancy, lactation"
                }
            },

            clinicalApplications: [
                "Hormone replacement therapy (thyroid, insulin, sex hormones)",
                "Treating endocrine disorders (diabetes, Addison's, Cushing's)",
                "Contraception (hormonal birth control)",
                "Growth disorders (GHtherapy)",
                "Fertility treatments",
                "Managing menopause symptoms",
                "Stress-related disorders",
                "Metabolic syndrome and obesity",
                "Osteoporosis prevention and treatment",
                "Cancer therapy (hormone-sensitive cancers)"
            ],

            category: 'endocrine_regulation'
        };
    }

    handlePHRegulation(problem) {
        return {
            topic: "pH Regulation and Acid-Base Balance",
            definition: "pH regulation is the homeostatic process maintaining blood and body fluid pH within narrow limits (7.35-7.45) essential for enzyme function, protein structure, and cellular metabolism.",

            pHBasics: {
                definition: "pH is the measure of hydrogen ion (H⁺) concentration",
                scale: "0-14 scale (logarithmic)",
                neutral: "pH 7 (pure water)",
                acidic: "pH < 7 (more H⁺)",
                alkaline: "pH > 7 (less H⁺, more OH⁻)",
                logarithmic: "Each pH unit represents 10-fold change in H⁺ concentration",
                normalBloodpH: "7.35-7.45 (arterial blood)",
                narrowRange: "Even small deviations can be life-threatening"
            },

            importanceOfpH: [
                "Enzyme activity depends on specific pH (optimal pH for function)",
                "Protein structure and function affected by pH",
                "Membrane permeability influenced by pH",
                "Distribution of ions across membranes",
                "Oxygen binding to hemoglobin (Bohr effect)",
                "Electrolyte balance",
                "Hormone receptor binding"
            ],

            sourcesOfAcid: {
                metabolic: {
                    description: "Acids produced by cellular metabolism",
                    sources: [
                        "Lactic acid (from anaerobic metabolism)",
                        "Ketone bodies (from fat metabolism)",
                        "Phosphoric acid (from nucleic acid breakdown)",
                        "Sulfuric acid (from protein metabolism)"
                    ],
                    amount: "~50-100 mEq of non-volatile acids per day"
                },
                respiratory: {
                    description: "Carbon dioxide from cellular respiration",
                    reaction: "CO₂ + H₂O ↔ H₂CO₃ ↔ H⁺ + HCO₃⁻",
                    amount: "~15,000-20,000 mmol CO₂ per day (much larger than metabolic acids)",
                    volatile: "Can be eliminated by breathing (exhaling CO₂)"
                },
                dietary: {
                    description: "Foods that produce acids or bases when metabolized",
                    acidProducing: "Meat, cheese, eggs (contain sulfur and phosphorus)",
                    baseProducing: "Fruits, vegetables (contain organic salts)"
                }
            },

            bufferSystems: {
                definition: "Substances that resist pH changes by absorbing or releasing H⁺",
                characteristics: "First line of defense; respond in seconds",
                
                bicarbonateBuffer: {
                    name: "Bicarbonate Buffer System (H₂CO₃/HCO₃⁻)",
                    location: "Extracellular fluid (blood, interstitial fluid)",
                    importance: "Most important blood buffer (~53% of buffering capacity)",
                    reaction: "CO₂ + H₂O ↔ H₂CO₃ ↔ H⁺ + HCO₃⁻",
                    enzyme: "Carbonic anhydrase catalyzes CO₂ + H₂O ↔ H₂CO₃",
                    
                    mechanism: {
                        addAcid: "HCO₃⁻ + H⁺ → H₂CO₃ → CO₂ + H₂O (bicarbonate neutralizes acid)",
                        addBase: "H₂CO₃ → H⁺ + HCO₃⁻ (carbonic acid releases H⁺)",
                    },
                    
                    components: {
                        acid: "H₂CO₃ (carbonic acid) - regulated by lungs (CO₂)",
                        base: "HCO₃⁻ (bicarbonate) - regulated by kidneys"
                    },
                    
                    hendersonHasselbalch: {
                        equation: "pH = 6.1 + log([HCO₃⁻]/[H₂CO₃])",
                        simplified: "pH = 6.1 + log([HCO₃⁻]/(0.03 × PCO₂))",
                        normalRatio: "20:1 (HCO₃⁻:H₂CO₃) maintains pH 7.4",
                        importance: "Shows pH depends on ratio, not absolute amounts"
                    },
                    
                    advantage: "Components can be independently regulated (lungs vs kidneys)"
                },
                
                phosphateBuffer: {
                    name: "Phosphate Buffer System (H₂PO₄⁻/HPO₄²⁻)",
                    location: "Intracellular fluid, urine",
                    importance: "Important in urine (where concentration is high)",
                    reaction: "H₂PO₄⁻ ↔ H⁺ + HPO₄²⁻",
                    contribution: "~1% of blood buffering, but important in cells and urine"
                },
                
                proteinBuffers: {
                    name: "Protein Buffer Systems",
                    location: "Intracellular fluid, blood (plasma proteins, hemoglobin)",
                    importance: "Hemoglobin is major blood buffer (~35% of blood buffering)",
                    mechanism: "Amino acids with ionizable groups (histidine, lysine, arginine, aspartate, glutamate)",
                    
                    hemoglobin: {
                        description: "Most important blood protein buffer",
                        mechanism: "Can accept or donate H⁺ depending on pH",
                        advantage: "More effective when deoxygenated (in tissues)",
                        chlorideShift: "HCO₃⁻ exits RBCs as Cl⁻ enters (maintains charge balance)"
                    }
                },
                
                limitations: "Buffers don't eliminate acids/bases; they only minimize pH changes until lungs/kidneys restore balance"
            },

            respiratoryRegulation: {
                description: "Lungs regulate pH by controlling CO₂ elimination",
                timeScale: "Minutes to hours (faster than kidneys, slower than buffers)",
                effectiveness: "Can restore pH to normal within 1-3 minutes",
                
                mechanism: {
                    reaction: "CO₂ + H₂O ↔ H₂CO₃ ↔ H⁺ + HCO₃⁻",
                    principle: "Removing CO₂ shifts equilibrium left, reducing H⁺",
                    control: "Medulla oblongata respiratory center"
                },
                
                sensors: {
                    central: {
                        location: "Medulla oblongata",
                        detect: "CO₂ levels in cerebrospinal fluid (CSF)",
                        mechanism: "CO₂ crosses blood-brain barrier, forms H⁺ in CSF",
                        sensitivity: "Most important for normal breathing control"
                    },
                    peripheral: {
                        location: "Carotid and aortic bodies",
                        detect: "O₂, CO₂, and pH in blood",
                        sensitivity: "Respond strongly to low O₂ and low pH"
                    }
                },
                
                responses: {
                    acidosis: {
                        problem: "↑ H⁺ (or ↑ CO₂) → ↓ pH",
                        response: "Hyperventilation (↑ rate and depth)",
                        effect: "↑ CO₂ elimination → ↓ H₂CO₃ → ↓ H⁺ → pH rises",
                        example: "Exercise produces lactic acid → breathe faster"
                    },
                    alkalosis: {
                        problem: "↓ H⁺ (or ↓ CO₂) → ↑ pH",
                        response: "Hypoventilation (↓ rate and depth)",
                        effect: "↓ CO₂ elimination → ↑ H₂CO₃ → ↑ H⁺ → pH falls",
                        example: "Hyperventilation (anxiety) → breathe slower, or breathe into bag"
                    }
                },
                
                limitations: [
                    "Cannot eliminate non-volatile (metabolic) acids",
                    "Limited by need to maintain adequate O₂",
                    "Can only change pH by ~75% toward normal"
                ]
            },

            renalRegulation: {
                description: "Kidneys regulate pH by controlling H⁺ secretion and HCO₃⁻ reabsorption/production",
                timeScale: "Hours to days (slower than lungs, but more powerful)",
                effectiveness: "Can fully restore pH to normal; only way to eliminate metabolic acids",
                
                mechanisms: [
                    {
                        mechanism: "H⁺ Secretion",
                        location: "Proximal tubule, collecting duct",
                        process: "Active transport of H⁺ into tubule urine",
                        coupled: "Usually coupled with Na⁺ reabsorption (Na⁺/H⁺ exchanger)",
                        result: "Eliminates excess H⁺ from body",
                        maximalpH: "Can produce urine as acidic as pH 4.5"
                    },
                    {
                        mechanism: "HCO₃⁻ Reabsorption",
                        location: "Proximal tubule (85%), thick ascending limb, collecting duct",
                        importance: "Essential to conserve base (HCO₃⁻)",
                        process: [
                            "H⁺ secreted into tubule",
                            "H⁺ + HCO₃⁻ (in urine) → H₂CO₃ → CO₂ + H₂O",
                            "CO₂ diffuses back into cell",
                            "CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻",
                            "HCO₃⁻ transported into blood"
                        ],
                        result: "Nearly all filtered HCO₃⁻ (4500 mEq/day) is reabsorbed"
                    },
                    {
                        mechanism: "New HCO₃⁻ Production",
                        location: "Proximal tubule, collecting duct",
                        importance: "Replaces HCO₃⁻ used to buffer metabolic acids",
                        process: [
                            "Glutamine → NH₄⁺ + HCO₃⁻",
                            "NH₄⁺ excreted in urine (carries H⁺)",
                            "HCO₃⁻ added to blood"
                        ],
                        bufferingInUrine: "Phosphate and ammonia buffer H⁺ in urine"
                    }
                ],
                
                responses: {
                    acidosis: {
                        problem: "↑ H⁺ → ↓ pH",
                        responses: [
                            "↑ H⁺ secretion into urine",
                            "↑ HCO₃⁻ reabsorption",
                            "↑ NH₃ production (more H⁺ excreted as NH₄⁺)",
                            "↑ New HCO₃⁻ production"
                        ],
                        result: "More acidic urine; HCO₃⁻ returned to blood; pH rises"
                    },
                    alkalosis: {
                        problem: "↓ H⁺ → ↑ pH",
                        responses: [
                            "↓ H⁺ secretion",
                            "↓ HCO₃⁻ reabsorption (excess excreted)",
                            "↓ New HCO₃⁻ production"
                        ],
                        result: "More alkaline urine; HCO₃⁻ lost; pH falls"
                    }
                }
            },

            acidBaseDisorders: {
                classification: {
                    byOrigin: {
                        respiratory: "Caused by abnormal CO₂ levels (lung problems)",
                        metabolic: "Caused by abnormal HCO₃⁻ or metabolic acids (kidney, metabolic problems)"
                    },
                    byDirection: {
                        acidosis: "pH < 7.35 (too acidic)",
                        alkalosis: "pH > 7.45 (too alkaline)"
                    }
                },
                
                respiratoryAcidosis: {
                    definition: "pH < 7.35 due to CO₂ retention (hypoventilation)",
                    primaryProblem: "↑ PCO₂ (>45 mmHg)",
                    causes: [
                        "COPD (emphysema, chronic bronchitis)",
                        "Severe pneumonia",
                        "Respiratory depression (drugs, brain injury)",
                        "Airway obstruction",
                        "Severe asthma"
                    ],
                    compensation: {
                        mechanism: "Kidneys retain HCO₃⁻ and secrete H⁺",
                        timeScale: "Days",
                        bloodGases: "↑ PCO₂, ↑ HCO₃⁻ (if chronic)"
                    },
                    symptoms: "Confusion, drowsiness, headache (due to ↑ CO₂)",
                    treatment: "Improve ventilation; treat underlying cause"
                },
                
                respiratoryAlkalosis: {
                    definition: "pH > 7.45 due to excessive CO₂ elimination (hyperventilation)",
                    primaryProblem: "↓ PCO₂ (<35 mmHg)",
                    causes: [
                        "Anxiety, panic, pain (hyperventilation)",
                        "High altitude (low O₂ → hyperventilation)",
                        "Fever",
                        "Mechanical ventilation (over-ventilation)",
                        "Pulmonary embolism"
                    ],
                    compensation: {
                        mechanism: "Kidneys excrete HCO₃⁻ and retain H⁺",
                        timeScale: "Days",
                        bloodGases: "↓ PCO₂, ↓ HCO₃⁻ (if chronic)"
                    },
                    symptoms: "Lightheadedness, tingling, muscle spasms, confusion",
                    treatment: "Address cause; breathe into bag (rebreathes CO₂)"
                },
                
                metabolicAcidosis: {
                    definition: "pH < 7.35 due to loss of HCO₃⁻ or gain of metabolic acids",
                    primaryProblem: "↓ HCO₃⁻ (<22 mEq/L)",
                    causes: [
                        "Diabetic ketoacidosis (ketone acids)",
                        "Lactic acidosis (anaerobic metabolism, shock)",
                        "Kidney failure (can't excrete H⁺)",
                        "Diarrhea (loss of HCO₃⁻-rich fluid)",
                        "Poisoning (methanol, ethylene glycol)"
                    ],
                    compensation: {
                        mechanism: "Hyperventilation (blow off CO₂)",
                        timeScale: "Minutes to hours",
                        breathing: "Kussmaul breathing (deep, rapid)",
                        bloodGases: "↓ HCO₃⁻, ↓ PCO₂ (compensation)"
                    },
                    symptoms: "Rapid breathing, confusion, weakness, Kussmaul breathing",
                    treatment: "Treat underlying cause; sometimes NaHCO₃ (bicarbonate) IV"
                },
                
                metabolicAlkalosis: {
                    definition: "pH > 7.45 due to loss of H⁺ or gain of HCO₃⁻",
                    primaryProblem: "↑ HCO₃⁻ (>28 mEq/L)",
                    causes: [
                        "Vomiting (loss of stomach acid)",
                        "Diuretic use (K⁺ and H⁺ loss)",
                        "Excessive antacid use",
                        "Hyperaldosteronism (↑ H⁺ secretion)"
                    ],
                    compensation: {
                        mechanism: "Hypoventilation (retain CO₂)",
                        timeScale: "Minutes to hours",
                        limitation: "Limited by need for O₂",
                        bloodGases: "↑ HCO₃⁻, ↑ PCO₂ (mild compensation)"
                    },
                    symptoms: "Slow breathing, confusion, muscle twitching, arrhythmias",
                    treatment: "Treat underlying cause; replace K⁺ and Cl⁻; sometimes HCl IV"
                }
            },

            compensation: {
                definition: "Physiological response attempting to restore pH to normal",
                types: {
                    respiratory: "Lungs compensate for metabolic disorders (fast)",
                    metabolic: "Kidneys compensate for respiratory disorders (slow)"
                },
                rules: [
                    "Respiratory compensation for metabolic disorders: within hours",
                    "Metabolic compensation for respiratory disorders: 3-5 days",
                    "Compensation doesn't fully correct pH (rarely reaches complete normal)",
                    "Look at primary problem to determine disorder type"
                ],
                interpretation: {
                    respiratoryAcidosis: "↑ PCO₂, ↓ pH; compensation: ↑ HCO₃⁻",
                    respiratoryAlkalosis: "↓ PCO₂, ↑ pH; compensation: ↓ HCO₃⁻",
                    metabolicAcidosis: "↓ HCO₃⁻, ↓ pH; compensation: ↓ PCO₂",
                    metabolicAlkalosis: "↑ HCO₃⁻, ↑ pH; compensation: ↑ PCO₂"
                }
            },

            normalBloodGasValues: {
                arterial: {
                    pH: "7.35-7.45",
                    PCO2: "35-45 mmHg",
                    PO2: "75-100 mmHg",
                    HCO3: "22-28 mEq/L",
                    baseExcess: "-2 to +2 mEq/L"
                }
            },

            clinicalApplications: [
                "Diagnosing acid-base disorders (arterial blood gas analysis)",
                "Managing respiratory failure and ventilation",
                "Treating diabetic ketoacidosis",
                "Managing kidney disease",
                "Critical care medicine",
                "Anesthesia (maintaining pH during surgery)",
                "Understanding drug effects on pH",
                "Athletic performance (pH affects oxygen delivery)"
            ],

            category: 'ph_regulation'
        };
    }

    handleBloodPressure(problem) {
        return {
            topic: "Blood Pressure Regulation",
            definition: "Blood pressure regulation is the homeostatic control of arterial pressure to ensure adequate blood flow (perfusion) to all tissues while preventing damage from excessive pressure.",

            bloodPressureBasics: {
                definition: "Force exerted by blood against arterial walls",
                measurement: "mmHg (millimeters of mercury)",
                expression: "Systolic/Diastolic (e.g., 120/80)",
                systolic: "Peak pressure during ventricular contraction (heart beats)",
                diastolic: "Lowest pressure during ventricular relaxation (heart relaxes)",
                pulsePressure: "Systolic - Diastolic (normally ~40 mmHg)",
                meanArterialPressure: "MAP = Diastolic + (Pulse Pressure/3) or MAP = (2×Diastolic + Systolic)/3"
            },

            normalRanges: {
                optimal: "120/80 mmHg or lower",
                normal: "Systolic 90-120, Diastolic 60-80",
                elevated: "Systolic 120-129, Diastolic <80",
                hypertensionStage1: "Systolic 130-139 OR Diastolic 80-89",
                hypertensionStage2: "Systolic ≥140 OR Diastolic ≥90",
                hypertensiveCrisis: "Systolic >180 AND/OR Diastolic >120 (medical emergency)",
                hypotension: "Systolic <90 OR Diastolic <60"
            },

            determinants: {
                cardiacOutput: {
                    definition: "Volume of blood pumped by heart per minute",
                    formula: "CO = Heart Rate × Stroke Volume",
                    normal: "~5 liters/minute at rest",
                    heartRate: "Number of beats per minute (60-100 bpm)",
                    strokeVolume: "Volume per beat (~70 mL)",
                    effect: "↑ CO → ↑ BP"
                },
                peripheralResistance: {
                    definition: "Resistance to blood flow in blood vessels",
                    mainFactor: "Arteriole diameter (vasoconstriction vs vasodilation)",
                    formula: "Resistance ∝ 1/(radius⁴) - small changes in radius have huge effects",
                    factors: [
                        "Blood vessel diameter (most important)",
                        "Blood viscosity (thickness)",
                        "Vessel length"
                    ],
                    effect: "↑ Resistance → ↑ BP"
                },
                
                bloodVolume: {
                    definition: "Total volume of blood in circulatory system",
                    normal: "~5 liters in adults",
                    regulation: "Kidneys (via water and Na⁺ retention/excretion)",
                    effect: "↑ Volume → ↑ BP",
                    timeScale: "Hours to days (long-term regulation)"
                },
                
                relationship: "BP = Cardiac Output × Peripheral Resistance"
            },

            shortTermRegulation: {
                description: "Neural mechanisms; seconds to minutes response",
                
                baroreceptorReflex: {
                    name: "Baroreceptor Reflex (Most Important Short-Term)",
                    sensors: {
                        location: "Carotid sinus (carotid arteries), Aortic arch",
                        type: "Stretch receptors (mechanoreceptors)",
                        detect: "Blood pressure changes via arterial wall stretch"
                    },
                    
                    pathways: {
                        afferent: "Glossopharyngeal nerve (CN IX) from carotid sinus, Vagus nerve (CN X) from aortic arch",
                        integrationCenter: "Cardiovascular control center in medulla oblongata",
                        efferent: "Autonomic nervous system (sympathetic and parasympathetic)"
                    },
                    
                    responses: {
                        highBP: {
                            detection: "Increased stretch → ↑ baroreceptor firing",
                            neuralResponse: "↑ Parasympathetic (vagal) activity, ↓ Sympathetic activity",
                            effects: [
                                "↓ Heart rate (via vagus to SA node)",
                                "↓ Contractility (weaker contractions)",
                                "Vasodilation (↓ sympathetic to arterioles)",
                                "↓ Cardiac output and ↓ peripheral resistance"
                            ],
                            result: "BP decreases back toward normal"
                        },
                        lowBP: {
                            detection: "Decreased stretch → ↓ baroreceptor firing",
                            neuralResponse: "↓ Parasympathetic activity, ↑ Sympathetic activity",
                            effects: [
                                "↑ Heart rate (reduced vagal brake, ↑ sympathetic)",
                                "↑ Contractility (stronger contractions)",
                                "Vasoconstriction (↑ sympathetic to arterioles)",
                                "↑ Cardiac output and ↑ peripheral resistance"
                            ],
                            result: "BP increases back toward normal"
                        }
                    },
                    
                    timeScale: "Seconds (very rapid)",
                    limitation: "Adapts to sustained changes (resets after 1-2 days); not effective long-term"
                },
                
                chemoreceptorReflex: {
                    sensors: {
                        location: "Carotid and aortic bodies",
                        detect: "↓ O₂, ↑ CO₂, ↓ pH in blood"
                    },
                    primaryFunction: "Regulate breathing",
                    cardiovascularEffect: "↑ BP when O₂ is very low",
                    mechanism: "↑ Sympathetic activity → vasoconstriction and ↑ heart rate",
                    importance: "Backup system; mainly for severe hypoxia"
                },
                
                CNSIschemicResponse: {
                    trigger: "Severe drop in blood flow to brain (BP <60 mmHg)",
                    mechanism: "Direct stimulation of medulla by ischemia",
                    response: "Massive sympathetic discharge → intense vasoconstriction, ↑ heart rate",
                    result: "Large increase in BP",
                    importance: "Emergency last-ditch response; 'last-gasp mechanism'"
                }
            },

            intermediateRegulation: {
                description: "Hormonal mechanisms; minutes to hours response",
                
                renin_angiotensin_aldosterone: {
                    name: "Renin-Angiotensin-Aldosterone System (RAAS)",
                    importance: "Major hormonal regulator of BP and blood volume",
                    
                    pathway: [
                        {
                            step: 1,
                            event: "Kidneys detect ↓ BP, ↓ blood flow, or ↓ Na⁺",
                            cells: "Juxtaglomerular (JG) cells in afferent arteriole"
                        },
                        {
                            step: 2,
                            event: "JG cells release RENIN (enzyme) into blood",
                            triggers: ["↓ BP", "↓ renal blood flow", "Sympathetic stimulation", "↓ Na⁺ in distal tubule"]
                        },
                        {
                            step: 3,
                            event: "Renin converts Angiotensinogen (from liver) → Angiotensin I",
                            location: "Bloodstream"
                        },
                        {
                            step: 4,
                            event: "ACE (Angiotensin-Converting Enzyme) converts Angiotensin I → Angiotensin II",
                            location: "Lungs (primarily), also other tissues",
                            note: "ACE inhibitors block this step (antihypertensive drugs)"
                        },
                        {
                            step: 5,
                            event: "Angiotensin II (powerful hormone) has multiple effects:",
                            effects: [
                                "Vasoconstriction (↑ peripheral resistance) - immediate effect",
                                "Stimulates aldosterone release from adrenal cortex",
                                "Stimulates ADH release from posterior pituitary",
                                "Stimulates thirst (hypothalamus)",
                                "↑ Na⁺ reabsorption in kidneys (direct effect)"
                            ]
                        },
                        {
                            step: 6,
                            event: "Aldosterone (from adrenal cortex) acts on kidneys:",
                            effects: [
                                "↑ Na⁺ reabsorption in distal tubule/collecting duct",
                                "↑ K⁺ secretion",
                                "Water follows Na⁺ (osmosis) → ↑ blood volume"
                            ],
                            timeScale: "Hours (gene transcription required)"
                        }
                    ],
                    
                    overallEffect: "↑ Peripheral resistance (immediate) + ↑ Blood volume (hours) → ↑ BP",
                    negativeFeedback: "↑ BP inhibits renin release",
                    clinicalDrugs: [
                        "ACE inhibitors (block Angiotensin II formation)",
                        "ARBs (Angiotensin Receptor Blockers - block Angiotensin II receptors)",
                        "Aldosterone antagonists (spironolactone)"
                    ]
                },
                
                ADH_vasopressin: {
                    name: "ADH (Antidiuretic Hormone / Vasopressin)",
                    source: "Posterior pituitary (made in hypothalamus)",
                    triggers: ["↑ Blood osmolarity", "↓ Blood volume/pressure", "Angiotensin II"],
                    
                    effects: {
                        kidneys: {
                            mechanism: "Inserts aquaporin-2 channels in collecting duct",
                            result: "↑ Water reabsorption → ↓ urine volume → ↑ blood volume → ↑ BP",
                            timeScale: "Minutes to hours"
                        },
                        bloodVessels: {
                            mechanism: "Vasoconstriction (at high concentrations)",
                            result: "↑ Peripheral resistance → ↑ BP",
                            note: "Hence the name 'vasopressin'"
                        }
                    },
                    
                    covered: "Also in osmoregulation topic"
                },
                
                ANP_BNP: {
                    name: "Atrial Natriuretic Peptide (ANP) and Brain Natriuretic Peptide (BNP)",
                    source: "ANP from atria, BNP from ventricles",
                    trigger: "Atrial/ventricular stretch from ↑ blood volume/pressure",
                    
                    effects: [
                        "↑ Na⁺ and water excretion by kidneys (natriuresis, diuresis)",
                        "Vasodilation (↓ peripheral resistance)",
                        "Inhibits renin and aldosterone release",
                        "Inhibits ADH release"
                    ],
                    
                    overallEffect: "↓ Blood volume and ↓ peripheral resistance → ↓ BP",
                    role: "Opposes RAAS and ADH; prevents excessive BP elevation",
                    clinical: "BNP measured as biomarker for heart failure"
                },
                
                epinephrine_norepinephrine: {
                    source: "Adrenal medulla (epinephrine), Sympathetic neurons (norepinephrine)",
                    trigger: "Stress, exercise, low BP (sympathetic activation)",
                    
                    effects: {
                        heart: "↑ Heart rate and contractility (β1 receptors) → ↑ cardiac output",
                        bloodVessels: {
                            skin_GI: "Vasoconstriction (α1 receptors) → ↑ peripheral resistance",
                            muscle: "Vasodilation (β2 receptors) during exercise"
                        }
                    },
                    
                    result: "↑ BP (rapid response, complements neural control)",
                    timeScale: "Seconds to minutes"
                }
            },

            longTermRegulation: {
                description: "Renal-fluid mechanisms; hours to days response",
                importance: "Most powerful long-term regulator; ultimately determines BP",
                
                renalFluidBalance: {
                    principle: "Kidneys control blood volume by regulating water and Na⁺ excretion",
                    mechanism: [
                        "↑ BP → ↑ renal perfusion pressure → ↑ urine output (pressure natriuresis/diuresis)",
                        "↓ BP → ↓ urine output → ↑ blood volume → ↑ BP"
                    ],
                    
                    pressureNatriuresis: {
                        definition: "Direct effect of BP on Na⁺ excretion",
                        mechanism: "↑ BP → kidneys excrete more Na⁺ and water",
                        importance: "Does not adapt; provides long-term set point",
                        curve: "Steep relationship between BP and Na⁺/water excretion"
                    },
                    
                    fluidBalance: {
                        principle: "Blood volume determines BP long-term",
                        intakeVsOutput: "If intake exceeds output → ↑ volume → ↑ BP",
                        kidneyRole: "Adjust output to match intake and maintain BP",
                        infiniteGain: "Eventually can restore BP to exact set point (given time)"
                    }
                },
                
                integrationWithHormones: {
                    RAAS: "Shifts pressure-natriuresis curve (changes set point)",
                    aldosterone: "↑ Na⁺ retention → ↑ BP set point",
                    ANP: "↑ Na⁺ excretion → ↓ BP set point",
                    balance: "Long-term BP determined by balance of these systems"
                },
                
                timeScale: "Days to weeks for complete equilibration",
                clinicalImplication: "Why dietary Na⁺ restriction and diuretics are effective long-term"
            },

            bloodPressureDisorders: {
                hypertension: {
                    definition: "Chronically elevated blood pressure (≥130/80 mmHg)",
                    prevalence: "~45% of adults in US; 'silent killer' (often asymptomatic)",
                    
                    types: {
                        primaryEssential: {
                            name: "Primary (Essential) Hypertension",
                            prevalence: "90-95% of cases",
                            cause: "Unknown; multifactorial",
                            riskFactors: [
                                "Age (↑ with aging)",
                                "Obesity",
                                "High Na⁺ intake",
                                "Low K⁺ intake",
                                "Physical inactivity",
                                "Excess alcohol",
                                "Stress",
                                "Genetics/family history",
                                "Race (higher in African Americans)"
                            ],
                            mechanisms: [
                                "↑ Sympathetic activity",
                                "↑ RAAS activity",
                                "Insulin resistance",
                                "Endothelial dysfunction",
                                "Arterial stiffness"
                            ]
                        },
                        
                        secondary: {
                            name: "Secondary Hypertension",
                            prevalence: "5-10% of cases",
                            causes: [
                                "Kidney disease (renal artery stenosis, chronic kidney disease)",
                                "Endocrine disorders (primary aldosteronism, Cushing's syndrome, pheochromocytoma)",
                                "Coarctation of aorta",
                                "Sleep apnea",
                                "Medications (NSAIDs, oral contraceptives, decongestants)",
                                "Thyroid disorders"
                            ],
                            importance: "Potentially curable if underlying cause identified and treated"
                        }
                    },
                    
                    consequences: {
                        cardiovascular: [
                            "Atherosclerosis (hardening of arteries)",
                            "Coronary artery disease",
                            "Heart attack (myocardial infarction)",
                            "Heart failure (heart must work harder)",
                            "Left ventricular hypertrophy (thick heart muscle)"
                        ],
                        cerebrovascular: [
                            "Stroke (ischemic or hemorrhagic)",
                            "Vascular dementia"
                        ],
                        renal: [
                            "Chronic kidney disease",
                            "Kidney failure"
                        ],
                        ocular: [
                            "Retinopathy (damage to retinal blood vessels)",
                            "Vision loss"
                        ],
                        vascular: [
                            "Aneurysm formation",
                            "Peripheral artery disease"
                        ]
                    },
                    
                    treatment: {
                        lifestyle: [
                            "Weight loss (if overweight)",
                            "DASH diet (↓ Na⁺, ↑ K⁺, fruits/vegetables)",
                            "Limit Na⁺ to <2300 mg/day (ideally <1500 mg/day)",
                            "Regular aerobic exercise",
                            "Limit alcohol",
                            "Stress management",
                            "Quit smoking"
                        ],
                        medications: [
                            "Diuretics (↓ blood volume)",
                            "ACE inhibitors (block Angiotensin II formation)",
                            "ARBs (block Angiotensin II receptors)",
                            "Calcium channel blockers (vasodilation, ↓ contractility)",
                            "Beta-blockers (↓ heart rate, ↓ contractility, ↓ renin)",
                            "Alpha-blockers (vasodilation)"
                        ]
                    }
                },
                
                hypotension: {
                    definition: "Abnormally low blood pressure (systolic <90 or diastolic <60 mmHg)",
                    note: "Not always pathological; athletes often have low BP",
                    
                    types: {
                        orthostatic: {
                            name: "Orthostatic (Postural) Hypotension",
                            definition: "BP drop when standing up",
                            criteria: "↓ systolic ≥20 mmHg or ↓ diastolic ≥10 mmHg within 3 minutes of standing",
                            mechanism: "Blood pools in legs; baroreceptor reflex insufficient",
                            causes: [
                                "Dehydration",
                                "Prolonged bed rest",
                                "Medications (antihypertensives, diuretics)",
                                "Autonomic dysfunction",
                                "Age-related changes"
                            ],
                            symptoms: "Dizziness, lightheadedness, fainting upon standing",
                            treatment: "Hydration, compression stockings, medication adjustment"
                        },
                        
                        neurogenicOrthostatic: {
                            name: "Neurogenic Orthostatic Hypotension",
                            cause: "Autonomic nervous system dysfunction",
                            diseases: "Parkinson's disease, diabetes, multiple system atrophy",
                            mechanism: "Impaired baroreceptor reflex"
                        },
                        
                        shock: {
                            name: "Shock (Severe Hypotension)",
                            definition: "Inadequate tissue perfusion; life-threatening",
                            types: {
                                hypovolemic: "Blood/fluid loss (hemorrhage, severe dehydration)",
                                cardiogenic: "Heart failure (pump failure)",
                                distributive: "Widespread vasodilation (septic shock, anaphylactic shock)",
                                obstructive: "Blood flow obstruction (pulmonary embolism, cardiac tamponade)"
                            },
                            symptoms: [
                                "Rapid, weak pulse",
                                "Rapid, shallow breathing",
                                "Cold, clammy skin",
                                "Confusion, altered mental state",
                                "Decreased urine output",
                                "Loss of consciousness"
                            ],
                            emergency: "Requires immediate medical treatment"
                        }
                    }
                }
            },

            factorsAffectingBP: {
                age: "↑ with age (arterial stiffness, atherosclerosis)",
                sex: "Men > Women (until menopause, then women catch up)",
                race: "African Americans have higher rates of hypertension",
                bodyWeight: "Obesity strongly associated with ↑ BP",
                exercise: {
                    acute: "↑ during exercise (normal response)",
                    chronic: "Regular exercise ↓ resting BP"
                },
                diet: {
                    sodium: "High Na⁺ intake → ↑ BP (in salt-sensitive individuals)",
                    potassium: "High K⁺ intake → ↓ BP (promotes Na⁺ excretion)",
                    DASH: "Diet rich in fruits, vegetables, low-fat dairy → ↓ BP"
                },
                stress: "↑ sympathetic activity → ↑ BP",
                alcohol: "Excessive intake → ↑ BP",
                smoking: "Acutely ↑ BP; chronically damages vessels",
                medications: [
                    "NSAIDs, decongestants → ↑ BP",
                    "Antihypertensives → ↓ BP",
                    "Oral contraceptives → may ↑ BP"
                ],
                circadianRhythm: "Lowest during sleep, ↑ in morning ('morning surge')",
                whiteCoatEffect: "↑ BP in medical settings (anxiety)"
            },

            measurement: {
                technique: "Sphygmomanometer (blood pressure cuff) + stethoscope or automated device",
                position: "Sitting, arm at heart level, after 5 minutes rest",
                sounds: {
                    firstSound: "Systolic pressure (Korotkoff sounds begin)",
                    lastSound: "Diastolic pressure (sounds disappear)"
                },
                ambulatoryMonitoring: "24-hour BP monitoring for accurate assessment",
                homeMonitoring: "Useful for tracking and avoiding white coat effect"
            },

            clinicalApplications: [
                "Diagnosing and managing hypertension",
                "Preventing cardiovascular disease",
                "Managing shock and critical illness",
                "Drug development (antihypertensives)",
                "Understanding kidney disease progression",
                "Perioperative blood pressure management",
                "Heart failure treatment",
                "Stroke prevention"
            ],

            category: 'blood_pressure'
        };
    }

    /**handleCalciumRegulation(problem) {
        return {
            topic: "Calcium Homeostasis and Regulation",
            definition: "Calcium regulation is the homeostatic control of blood calcium levels within a narrow range (8.5-10.5 mg/dL) essential for bone health, muscle contraction, nerve function, and numerous cellular processes.",

            importanceOfCalcium: [
                "Bone and teeth structure (99% of body Ca²⁺ stored in bones)",
                "Muscle contraction (triggers sarcomere sliding)",
                "Nerve impulse transmission (neurotransmitter release)",
                "Blood clotting (coagulation cascade)",
                "Enzyme cofactor (many enzymes require Ca²⁺)",
                "Cell signaling (second messenger)",
                "Hormone secretion",
                "Cell division and growth"
            ],

            calciumDistribution: {
                bone: "99% of total body calcium (as hydroxyapatite crystals)",
                extracellular: "~1% in blood and extracellular fluid",
                intracellular: "<1% inside cells (kept very low by pumps)",
                
                bloodCalcium: {
                    total: "8.5-10.5 mg/dL (2.1-2.6 mmol/L)",
                    forms: {
                        ionized: "~50% (4.5-5.3 mg/dL) - biologically active form",
                        proteinBound: "~40% (bound to albumin)",
                        complexed: "~10% (bound to anions like phosphate, citrate)"
                    },
                    regulation: "Ionized Ca²⁺ is tightly regulated; total Ca²⁺ affected by albumin levels"
                }
            },

            keyHormones: [
                {
                    hormone: "Parathyroid Hormone (PTH)",
                    source: "Chief cells of parathyroid glands (4 small glands on posterior thyroid)",
                    trigger: "Low blood Ca²⁺ (detected directly by parathyroid cells via Ca²⁺-sensing receptors)",
                    function: "Raises blood calcium",
                    
                    mechanisms: {
                        bone: {
                            effect: "Stimulates osteoclasts (bone-resorbing cells)",
                            process: "Osteoclasts break down bone matrix → release Ca²⁺ and PO₄³⁻ into blood",
                            pathway: "PTH stimulates osteoblasts → osteoblasts signal osteoclasts (RANKL)",
                            timeScale: "Hours to days",
                            note: "Chronic excess causes osteoporosis"
                        },
                        
                        kidneys: {
                            effects: [
                                "↑ Ca²⁺ reabsorption in distal tubule (conserves calcium)",
                                "↓ PO₄³⁻ reabsorption (↑ phosphate excretion)",
                                "Activates vitamin D (1-alpha-hydroxylase enzyme)"
                            ],
                            result: "↑ Blood Ca²⁺, ↓ blood PO₄³⁻",
                            timeScale: "Minutes to hours"
                        },
                        
                        intestines: {
                            effect: "Indirect; PTH activates vitamin D → ↑ intestinal Ca²⁺ absorption",
                            timeScale: "Hours to days"
                        }
                    },
                    
                    overallEffect: "↑ Blood Ca²⁺ from bone, kidney, intestines",
                    negativeFeedback: "↑ Ca²⁺ inhibits PTH secretion",
                    
                    disorders: {
                        hyperparathyroidism: {
                            cause: "Excess PTH (tumor, hyperplasia)",
                            effects: "Hypercalcemia, osteoporosis, kidney stones, weakness",
                            symptoms: "'Stones, bones, abdominal groans, psychiatric moans'"
                        },
                        hypoparathyroidism: {
                            cause: "Deficient PTH (surgical removal, autoimmune)",
                            effects: "Hypocalcemia, tetany, seizures",
                            treatment: "Ca²⁺ and vitamin D supplements"
                        }
                    }
                },
                
                {
                    hormone: "Calcitonin",
                    source: "Parafollicular cells (C cells) of thyroid gland",
                    trigger: "High blood Ca²⁺",
                    function: "Lowers blood calcium",
                    
                    mechanisms: {
                        bone: {
                            effect: "Inhibits osteoclasts (bone breakdown)",
                            process: "↓ Bone resorption → less Ca²⁺ released",
                            timeScale: "Minutes to hours"
                        },
                        
                        kidneys: {
                            effect: "↑ Ca²⁺ and PO₄³⁻ excretion",
                            result: "↓ Blood Ca²⁺",
                            timeScale: "Minutes to hours"
                        }
                    },
                    
                    overallEffect: "↓ Blood Ca²⁺ by reducing bone resorption and increasing excretion",
                    
                    importance: "Minor role in humans compared to PTH; more important in children",
                    note: "PTH dominates calcium regulation; calcitonin is 'fine-tuning'",
                    
                    clinical: {
                        therapeutic: "Used to treat osteoporosis and Paget's disease of bone",
                        biomarker: "Elevated in medullary thyroid carcinoma"
                    }
                },
                
                {
                    hormone: "Vitamin D (Calcitriol)",
                    properName: "1,25-dihydroxyvitamin D₃ (active form)",
                    classification: "Actually a steroid hormone (not a true vitamin)",
                    
                    sources: {
                        synthesis: {
                            skin: "7-dehydrocholesterol + UVB light → Vitamin D₃ (cholecalciferol)",
                            liver: "Vitamin D₃ → 25-hydroxyvitamin D (calcidiol) - storage form",
                            kidneys: "25-hydroxyvitamin D → 1,25-dihydroxyvitamin D (calcitriol) - active form"
                        },
                        dietary: "Fish, fortified milk, egg yolks (provides vitamin D₂ and D₃)"
                    },
                    
                    activation: {
                        step1: "Skin or diet → Vitamin D",
                        step2: "Liver → 25-hydroxylation (storage form)",
                        step3: "Kidneys → 1-hydroxylation (active form)",
                        regulation: "PTH stimulates final activation step in kidneys",
                        note: "Kidney disease impairs vitamin D activation"
                    },
                    
                    function: "Raises blood calcium (works with PTH)",
                    
                    mechanisms: {
                        intestines: {
                            effect: "↑ Ca²⁺ and PO₄³⁻ absorption (primary action)",
                            process: "Stimulates synthesis of calcium-binding proteins (calbindin)",
                            importance: "Most important action; increases dietary Ca²⁺ uptake",
                            timeScale: "Hours to days (gene transcription)"
                        },
                        
                        bone: {
                            effects: [
                                "Promotes bone mineralization (with adequate Ca²⁺ and PO₄³⁻)",
                                "Can stimulate bone resorption (if Ca²⁺ very low)"
                            ],
                            paradox: "Needed for healthy bones, but excess can weaken bones"
                        },
                        
                        kidneys: {
                            effect: "↑ Ca²⁺ and PO₄³⁻ reabsorption",
                            note: "Minor compared to intestinal effect"
                        }
                    },
                    overallEffect: "↑ Blood Ca²⁺ from bone, kidney, intestines",
                    negativeFeedback: "↑ Ca²⁺ inhibits PTH secretion",
                    
                    disorders: {
                        hyperparathyroidism: {
                            cause: "Excess PTH (tumor, hyperplasia)",
                            effects: "Hypercalcemia, osteoporosis, kidney stones, weakness",
                            symptoms: "'Stones, bones, abdominal groans, psychiatric moans'"
                        },
                        hypoparathyroidism: {
                            cause: "Deficient PTH (surgical removal, autoimmune)",
                            effects: "Hypocalcemia, tetany, seizures",
                            treatment: "Ca²⁺ and vitamin D supplements"
                        }
                    }
                },
                
                {
                    hormone: "Calcitonin",
                    source: "Parafollicular cells (C cells) of thyroid gland",
                    trigger: "High blood Ca²⁺",
                    function: "Lowers blood calcium",
                    
                    mechanisms: {
                        bone: {
                            effect: "Inhibits osteoclasts (bone breakdown)",
                            process: "↓ Bone resorption → less Ca²⁺ released",
                            timeScale: "Minutes to hours"
                        },
                        
                        kidneys: {
                            effect: "↑ Ca²⁺ and PO₄³⁻ excretion",
                            result: "↓ Blood Ca²⁺",
                            timeScale: "Minutes to hours"
                        }
                    },
                    
                    overallEffect: "↓ Blood Ca²⁺ by reducing bone resorption and increasing excretion",
                    
                    importance: "Minor role in humans compared to PTH; more important in children",
                    note: "PTH dominates calcium regulation; calcitonin is 'fine-tuning'",
                    
                    clinical: {
                        therapeutic: "Used to treat osteoporosis and Paget's disease of bone",
                        biomarker: "Elevated in medullary thyroid carcinoma"
                    }
                },
                
                {
                    hormone: "Vitamin D (Calcitriol)",
                    properName: "1,25-dihydroxyvitamin D₃ (active form)",
                    classification: "Actually a steroid hormone (not a true vitamin)",
                    
                    sources: {
                        synthesis: {
                            skin: "7-dehydrocholesterol + UVB light → Vitamin D₃ (cholecalciferol)",
                            liver: "Vitamin D₃ → 25-hydroxyvitamin D (calcidiol) - storage form",
                            kidneys: "25-hydroxyvitamin D → 1,25-dihydroxyvitamin D (calcitriol) - active form"
                        },
                        dietary: "Fish, fortified milk, egg yolks (provides vitamin D₂ and D₃)"
                    },
                    
                    activation: {
                        step1: "Skin or diet → Vitamin D",
                        step2: "Liver → 25-hydroxylation (storage form)",
                        step3: "Kidneys → 1-hydroxylation (active form)",
                        regulation: "PTH stimulates final activation step in kidneys",
                        note: "Kidney disease impairs vitamin D activation"
                    },
                    
                    function: "Raises blood calcium (works with PTH)",
                    
                    mechanisms: {
                        intestines: {
                            effect: "↑ Ca²⁺ and PO₄³⁻ absorption (primary action)",
                            process: "Stimulates synthesis of calcium-binding proteins (calbindin)",
                            importance: "Most important action; increases dietary Ca²⁺ uptake",
                            timeScale: "Hours to days (gene transcription)"
                        },
                        
                        bone: {
                            effects: [
                                "Promotes bone mineralization (with adequate Ca²⁺ and PO₄³⁻)",
                                "Can stimulate bone resorption (if Ca²⁺ very low)"
                            ],
                            paradox: "Needed for healthy bones, but excess can weaken bones"
                        },
                        
                        kidneys: {
                            effect: "↑ Ca²⁺ and PO₄³⁻ reabsorption",
                            note: "Minor compared to intestinal effect"
                        }
                    },
                    
                    overallEffect: "↑ Blood Ca²⁺ and PO₄³⁻ (mainly via intestinal absorption)",
                    
                    disorders: {
                        deficiency: {
                            causes: ["Inadequate sun exposure", "Dietary deficiency", "Kidney disease", "Malabsorption"],
                            effects: {
                                children: "Rickets (soft, deformed bones)",
                                adults: "Osteomalacia (soft bones, pain, fractures)"
                            },
                            prevalence: "Common; ~40% of US population has insufficient levels"
                        },
                        excess: {
                            cause: "Excessive supplementation",
                            effects: "Hypercalcemia, kidney stones, soft tissue calcification",
                            toxicity: "Rare from sun/diet; usually from mega-dose supplements"
                        }
                    },
                    
                    otherFunctions: [
                        "Immune system modulation",
                        "Cell growth regulation",
                        "Neuromuscular function",
                        "Cardiovascular health",
                        "Potentially cancer prevention"
                    ]
                }
            },

            integratedRegulation: {
                hypocalcemia: {
                    stimulus: "Blood Ca²⁺ drops below 8.5 mg/dL",
                    detection: "Ca²⁺-sensing receptors on parathyroid cells",
                    response: [
                        "↑ PTH secretion (within seconds to minutes)",
                        "PTH → kidneys retain Ca²⁺, excrete PO₄³⁻ (minutes)",
                        "PTH → kidneys activate vitamin D (hours)",
                        "PTH + Vitamin D → bone resorption releases Ca²⁺ (hours to days)",
                        "Vitamin D → intestines absorb more Ca²⁺ (hours to days)"
                    ],
                    result: "Blood Ca²⁺ returns to normal",
                    feedback: "↑ Ca²⁺ inhibits PTH secretion"
                },
                
                hypercalcemia: {
                    stimulus: "Blood Ca²⁺ rises above 10.5 mg/dL",
                    detection: "Ca²⁺-sensing receptors on parathyroid and thyroid C cells",
                    response: [
                        "↓ PTH secretion",
                        "↑ Calcitonin secretion",
                        "Calcitonin → kidneys excrete Ca²⁺",
                        "Calcitonin → inhibits bone resorption",
                        "↓ Vitamin D activation"
                    ],
                    result: "Blood Ca²⁺ returns to normal",
                    note: "PTH suppression more important than calcitonin elevation"
                }
            },

            phosphateRegulation: {
                relationship: "Inversely related to calcium (when one ↑, other tends to ↓)",
                importance: "Bone mineralization requires both Ca²⁺ and PO₄³⁻",
                
                hormoneEffects: {
                    PTH: "↑ Ca²⁺, ↓ PO₄³⁻ (excretion)",
                    VitaminD: "↑ Ca²⁺, ↑ PO₄³⁻ (absorption)",
                    Calcitonin: "↓ Ca²⁺, ↓ PO₄³⁻"
                },
                
                FGF23: {
                    name: "Fibroblast Growth Factor 23",
                    source: "Osteocytes in bone",
                    trigger: "↑ Blood phosphate, ↑ vitamin D",
                    function: "Lowers blood phosphate",
                    mechanisms: [
                        "↑ Renal phosphate excretion",
                        "↓ Vitamin D activation",
                        "↓ PTH secretion"
                    ],
                    disorders: "Excess causes hypophosphatemic rickets"
                }
            },

            boneRemodeling: {
                description: "Continuous process of bone breakdown and formation",
                purpose: "Maintain bone strength, release Ca²⁺ as needed",
                rate: "~10% of skeleton remodeled per year",
                
                cells: {
                    osteoblasts: {
                        function: "Build bone (secrete collagen and minerals)",
                        stimulatedBy: "Mechanical stress, growth hormone, estrogen, testosterone",
                        become: "Osteocytes (embedded in bone) or bone lining cells"
                    },
                    osteoclasts: {
                        function: "Break down bone (secrete acid and enzymes)",
                        stimulatedBy: "PTH (indirectly via osteoblasts), vitamin D, inflammatory cytokines",
                        origin: "Hematopoietic stem cells (monocyte lineage)"
                    },
                    osteocytes: {
                        function: "Sense mechanical stress, coordinate remodeling",
                        location: "Embedded in bone matrix",
                        communicate: "Via gap junctions through canaliculi"
                    }
                },
                
                process: [
                    "Activation: Osteoclasts recruited to bone surface",
                    "Resorption: Osteoclasts dissolve bone (~2-3 weeks)",
                    "Reversal: Transition phase",
                    "Formation: Osteoblasts lay down new bone (~2-3 months)",
                    "Quiescence: Bone surface rests"
                ],
                
                balance: {
                    children: "Formation > Resorption (bone growth)",
                    adults: "Formation = Resorption (equilibrium)",
                    elderly: "Formation < Resorption (bone loss, especially post-menopause in women)"
                }
            },

            calciumDisorders: {
                hypocalcemia: {
                    definition: "Blood Ca²⁺ < 8.5 mg/dL",
                    causes: [
                        "Hypoparathyroidism (low PTH)",
                        "Vitamin D deficiency",
                        "Chronic kidney disease (can't activate vitamin D)",
                        "Hypomagnesemia (Mg²⁺ needed for PTH secretion)",
                        "Acute pancreatitis (Ca²⁺ binds to fatty acids)",
                        "Medications (bisphosphonates, calcitonin)"
                    ],
                    symptoms: {
                        neuromuscular: [
                            "Tetany (involuntary muscle contractions)",
                            "Paresthesias (tingling around mouth, fingers, toes)",
                            "Muscle cramps and spasms",
                            "Carpopedal spasm (hand/foot cramping)",
                            "Laryngospasm (can obstruct airway)",
                            "Seizures"
                        ],
                        signs: {
                            chvostekSign: "Facial muscle spasm when facial nerve tapped",
                            trousseauSign: "Carpopedal spasm when BP cuff inflated on arm"
                        },
                        cardiac: "Prolonged QT interval on ECG",
                        chronic: "Cataracts, dry skin, brittle nails"
                    },
                    mechanism: "Low Ca²⁺ → ↑ nerve/muscle excitability",
                    treatment: [
                        "Acute: IV calcium gluconate or chloride",
                        "Chronic: Oral calcium and vitamin D supplements",
                        "Treat underlying cause"
                    ]
                },
                
                hypercalcemia: {
                    definition: "Blood Ca²⁺ > 10.5 mg/dL",
                    causes: [
                        "Primary hyperparathyroidism (↑ PTH from adenoma/hyperplasia)",
                        "Malignancy (bone metastases or PTH-related peptide)",
                        "Vitamin D toxicity (excessive supplementation)",
                        "Thiazide diuretics (↓ Ca²⁺ excretion)",
                        "Immobilization (↑ bone resorption)",
                        "Milk-alkali syndrome (excess Ca²⁺ and antacids)",
                        "Granulomatous diseases (sarcoidosis, TB - ↑ vitamin D activation)"
                    ],
                    symptoms: {
                        mnemonic: "'Stones, bones, abdominal groans, psychiatric moans'",
                        renal: "Kidney stones (nephrolithiasis), polyuria, polydipsia",
                        skeletal: "Bone pain, osteoporosis, fractures",
                        GI: "Nausea, vomiting, constipation, anorexia, peptic ulcers",
                        neuropsych: "Fatigue, depression, confusion, memory impairment, lethargy → coma",
                        cardiac: "Short QT interval, arrhythmias",
                        muscular: "Weakness, hypotonia"
                    },
                    mechanism: "High Ca²⁺ → ↓ nerve/muscle excitability",
                    severity: {
                        mild: "10.5-12 mg/dL (often asymptomatic)",
                        moderate: "12-14 mg/dL",
                        severe: ">14 mg/dL (hypercalcemic crisis - life-threatening)"
                    },
                    treatment: [
                        "Hydration (IV fluids)",
                        "Diuretics (furosemide - ↑ Ca²⁺ excretion)",
                        "Bisphosphonates (inhibit bone resorption)",
                        "Calcitonin (rapid but temporary)",
                        "Treat underlying cause (surgery for hyperparathyroidism)"
                    ]
                }
            },

            boneDisorders: {
                osteoporosis: {
                    definition: "Low bone mass and deteriorated bone microarchitecture → ↑ fracture risk",
                    prevalence: "~10 million Americans; 50% of women >50 will have osteoporotic fracture",
                    diagnosis: "Bone mineral density (BMD) T-score ≤ -2.5 on DEXA scan",
                    
                    riskFactors: [
                        "Age (↑ with aging)",
                        "Female sex (especially post-menopause - loss of estrogen)",
                        "Low body weight",
                        "Family history",
                        "Caucasian or Asian ethnicity",
                        "Smoking",
                        "Excessive alcohol",
                        "Sedentary lifestyle",
                        "Low Ca²⁺/vitamin D intake",
                        "Certain medications (glucocorticoids, anticonvulsants)"
                    ],
                    
                    pathophysiology: "Bone resorption exceeds formation → net bone loss",
                    
                    complications: "Hip, spine, wrist fractures (can be life-threatening or disabling)",
                    
                    prevention: [
                        "Adequate Ca²⁺ (1000-1200 mg/day) and vitamin D (600-800 IU/day)",
                        "Weight-bearing exercise",
                        "Avoid smoking and excessive alcohol",
                        "Fall prevention in elderly"
                    ],
                    
                    treatment: [
                        "Bisphosphonates (alendronate, risedronate - inhibit osteoclasts)",
                        "Denosumab (RANKL inhibitor - blocks osteoclast activation)",
                        "Teriparatide (recombinant PTH - stimulates osteoblasts)",
                        "Estrogen therapy (post-menopausal women)",
                        "Ca²⁺ and vitamin D supplementation"
                    ]
                },
                
                osteomalacia_rickets: {
                    definition: "Soft bones due to impaired mineralization",
                    rickets: "In children (before growth plates close) → bowed legs, deformities",
                    osteomalacia: "In adults → bone pain, fractures",
                    cause: "Vitamin D deficiency (or resistance, phosphate deficiency)",
                    mechanism: "Insufficient Ca²⁺ and PO₄³⁻ for bone mineralization",
                    treatment: "Vitamin D and Ca²⁺ supplementation"
                },
                
                pagetDisease: {
                    definition: "Disorganized bone remodeling → abnormally thick but weak bones",
                    pathophysiology: "Excessive bone resorption followed by excessive formation",
                    symptoms: "Bone pain, deformities, fractures, nerve compression",
                    treatment: "Bisphosphonates, calcitonin"
                }
            },

            dietaryConsiderations: {
                calciumSources: [
                    "Dairy products (milk, cheese, yogurt) - best absorbed",
                    "Leafy greens (kale, collards, bok choy)",
                    "Fortified foods (orange juice, cereals, plant milks)",
                    "Sardines/salmon with bones",
                    "Tofu (if made with calcium sulfate)",
                    "Almonds"
                ],
                
                recommendedIntake: {
                    adults: "1000 mg/day (19-50 years)",
                    olderAdults: "1200 mg/day (women >50, men >70)",
                    adolescents: "1300 mg/day (9-18 years)",
                    children: "700-1000 mg/day"
                },
                
                absorption: {
                    enhanced: ["Vitamin D", "Acidic environment", "Lactose"],
                    inhibited: ["Phytates (whole grains)", "Oxalates (spinach, rhubarb)", "Excessive fiber"]
                },
                
                vitaminDSources: [
                    "Sunlight (UVB exposure - 10-30 min midday sun, several times/week)",
                    "Fatty fish (salmon, mackerel, sardines)",
                    "Fortified milk and cereals",
                    "Egg yolks",
                    "Mushrooms exposed to UV light",
                    "Supplements (D3 preferred over D2)"
                ],
                
                vitaminDRecommendations: {
                    adults: "600 IU/day (15 μg/day) ages 19-70",
                    olderAdults: "800 IU/day (20 μg/day) over age 70",
                    upperLimit: "4000 IU/day (toxicity rare but possible)",
                    deficiency: "<20 ng/mL (50 nmol/L) serum 25-hydroxyvitamin D",
                    insufficiency: "20-30 ng/mL",
                    sufficiency: ">30 ng/mL"
                }
            },

            clinicalApplications: [
                "Managing osteoporosis and preventing fractures",
                "Treating hyperparathyroidism and hypoparathyroidism",
                "Vitamin D supplementation strategies",
                "Managing hypercalcemia in cancer patients",
                "Preventing rickets and osteomalacia",
                "Kidney disease management (impaired vitamin D activation)",
                "Post-menopausal hormone therapy decisions",
                "Athletic performance and bone health",
                "Pediatric growth and development"
            ],

            category: 'calcium_regulation'
        };
    }
    */
    handleGasExchange(problem) {
        return {
            topic: "Regulation of Gas Exchange and Breathing",
            definition: "Gas exchange regulation is the homeostatic control of oxygen (O₂) and carbon dioxide (CO₂) levels in blood through adjustments in breathing rate and depth.",

            importanceOfGasRegulation: [
                "Maintain adequate O₂ for cellular respiration",
                "Remove CO₂ (waste product and acid)",
                "Regulate blood pH (CO₂ affects pH)",
                "Support metabolic demands (vary with activity)",
                "Prevent hypoxia (O₂ deficiency) and hypercapnia (CO₂ excess)"
            ],

            normalBloodGasValues: {
                arterialBlood: {
                    PO2: "75-100 mmHg (partial pressure of O₂)",
                    PCO2: "35-45 mmHg (partial pressure of CO₂)",
                    pH: "7.35-7.45",
                    O2Saturation: "95-100% (hemoglobin saturation)",
                    HCO3: "22-28 mEq/L (bicarbonate)"
                },
                venousBlood: {
                    PO2: "~40 mmHg (lower - O₂ extracted by tissues)",
                    PCO2: "~46 mmHg (higher - CO₂ added by tissues)",
                    O2Saturation: "~75%"
                }
            },

            respiratoryControlCenters: {
                medulla: {
                    name: "Medulla Oblongata (Primary Control)",
                    location: "Brainstem (lower)",
                    groups: {
                        dorsalRespiratory: {
                            function: "Controls inspiration (inhaling)",
                            output: "To diaphragm and external intercostals via phrenic and intercostal nerves",
                            rhythm: "Sets basic breathing rhythm (pacemaker)",
                            mechanism: "Rhythmic bursts of action potentials"
                        },
                        ventralRespiratory: {
                            function: "Controls forced expiration and deeper inspiration",
                            active: "During exercise or when breathing demand increases",
                            muscles: "Internal intercostals, abdominal muscles (expiration); accessory muscles (inspiration)",
                            atRest: "Inactive during quiet breathing"
                        }
                    },
                    basicRhythm: "12-20 breaths per minute at rest",
                    automaticity: "Can generate rhythm without sensory input (but modified by input)"
                },

                pons: {
                    name: "Pons (Modulating Control)",
                    location: "Brainstem (upper)",
                    centers: {
                        pneumotaxic: {
                            function: "Limits inspiration, smooths breathing transitions",
                            effect: "Inhibits dorsal respiratory group → shorter, faster breaths",
                            result: "Prevents over-inflation of lungs"
                        },
                        apneustic: {
                            function: "Prolongs inspiration",
                            effect: "Stimulates dorsal respiratory group → longer, deeper breaths",
                            note: "Normally inhibited by pneumotaxic center",
                            abnormal: "Apneustic breathing if pons damaged"
                        }
                    },
                    overall: "Fine-tunes respiratory rhythm set by medulla"
                },

                cortex: {
                    name: "Cerebral Cortex (Voluntary Control)",
                    function: "Voluntary control overrides automatic breathing",
                    examples: [
                        "Breath-holding",
                        "Hyperventilation (voluntary)",
                        "Speaking, singing",
                        "Playing wind instruments",
                        "Swimming"
                    ],
                    limitation: "Can't override indefinitely; chemical drive eventually forces breathing"
                }
            },

            chemoreceptors: {
                description: "Sensors that detect blood gas and pH changes",
                
                centralChemoreceptors: {
                    location: "Medulla oblongata (ventral surface)",
                    detect: "H⁺ concentration in cerebrospinal fluid (CSF)",
                    surrogate: "Actually detect CO₂ (which crosses blood-brain barrier and forms H⁺)",
                    
                    mechanism: [
                        "↑ Blood CO₂ → CO₂ crosses blood-brain barrier",
                        "CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻ in CSF",
                        "Central chemoreceptors detect ↑ H⁺",
                        "Stimulate medullary respiratory centers",
                        "↑ Breathing rate and depth",
                        "More CO₂ exhaled → CO₂ decreases"
                    ],
                    
                    sensitivity: "Most important for normal breathing control (~70-80%)",
                    primaryStimulus: "CO₂/H⁺ (not O₂)",
                    response: "Very sensitive; even small ↑ in CO₂ increases breathing",
                    
                    note: "This is why we breathe - primarily to eliminate CO₂, not to get O₂"
                },

                peripheralChemoreceptors: {
                    location: "Carotid bodies (carotid arteries) and aortic bodies (aortic arch)",
                    detect: "O₂, CO₂, and pH in arterial blood",
                    
                    carotidBodies: {
                        location: "Bifurcation of common carotid arteries",
                        nerve: "Glossopharyngeal (CN IX)",
                        importance: "More important than aortic bodies"
                    },
                    
                    aorticBodies: {
                        location: "Aortic arch",
                        nerve: "Vagus (CN X)"
                    },
                    
                    sensitivity: {
                        O2: "Respond strongly when PO₂ <60 mmHg (normally ~100 mmHg)",
                        CO2: "Detect changes in PCO₂",
                        pH: "Detect changes in blood pH (H⁺)"
                    },
                    
                    primaryRole: "Backup system; especially important when O₂ very low",
                    
                    oxygenResponse: {
                        normalO2: "Minimal stimulation (PO₂ 75-100 mmHg)",
                        mildHypoxia: "Little response (PO₂ 60-75 mmHg)",
                        moderateHypoxia: "Strong response (PO₂ <60 mmHg)",
                        severeHypoxia: "Maximal response (PO₂ <50 mmHg)"
                    },
                    
                    importance: "Critical at high altitude and in respiratory disease"
                }
            },

            regulationOfBreathing: {
                normalBreathing: {
                    primaryDriver: "CO₂ levels (via central chemoreceptors)",
                    mechanism: "↑ CO₂ → ↑ H⁺ in CSF → ↑ breathing → ↓ CO₂",
                    sensitivity: "Increase of 5 mmHg in PCO₂ doubles ventilation",
                    setPoint: "PCO₂ maintained at ~40 mmHg"
                },

                hypercapnia: {
                    definition: "Elevated CO₂ (PCO₂ >45 mmHg)",
                    causes: ["Hypoventilation", "Lung disease", "Respiratory depression"],
                    detection: "Central and peripheral chemoreceptors",
                    response: [
                        "Strong stimulation of breathing",
                        "↑ Rate and depth",
                        "Hyperventilation to blow off CO₂"
                    ],
                    symptoms: "Dyspnea (shortness of breath), confusion, drowsiness, headache"
                },

                hypoxia: {
                    definition: "Low O₂ (PO₂ <75 mmHg)",
                    causes: ["High altitude", "Lung disease", "Hypoventilation", "Cardiac disease"],
                    detection: "Peripheral chemoreceptors (carotid and aortic bodies)",
                    threshold: "Significant response when PO₂ <60 mmHg",
                    response: [
                        "↑ Breathing rate and depth",
                        "Improves O₂ uptake"
                    ],
                    symptoms: "Dyspnea, tachycardia, confusion, cyanosis (bluish skin)",
                    note: "O₂ is secondary driver; only strong stimulus when very low"
                },

                hyperventilation: {
                    definition: "Excessive breathing → ↓ CO₂ (respiratory alkalosis)",
                    causes: ["Anxiety/panic", "Pain", "Fever", "Hypoxia (compensatory)", "Voluntary"],
                    result: "PCO₂ <35 mmHg, pH >7.45",
                    symptoms: "Lightheadedness, tingling (paresthesias), muscle spasms, confusion",
                    mechanism: "↓ CO₂ → ↓ H⁺ → ↑ pH → alkalosis",
                    correction: "Breathe into paper bag (rebreathes CO₂) or address anxiety"
                },

                hypoventilation: {
                    definition: "Inadequate breathing → ↑ CO₂ (respiratory acidosis)",
                    causes: [
                        "Respiratory depression (opioids, sedatives, anesthesia)",
                        "Neuromuscular disease (ALS, myasthenia gravis)",
                        "Chest wall disorders",
                        "Severe lung disease (COPD)"
                    ],
                    result: "PCO₂ >45 mmHg, pH <7.35",
                    symptoms: "Dyspnea, confusion, drowsiness, cyanosis",
                    danger: "Can lead to respiratory failure",
                    treatment: "Assist ventilation, treat underlying cause"
                }
            },

            otherInfluences: {
                mechanoreceptors: {
                    stretch: {
                        location: "Smooth muscle of airways",
                        function: "Detect lung inflation",
                        reflex: "Hering-Breuer reflex - prevents over-inflation",
                        mechanism: "Lung inflation → inhibits inspiration",
                        importance: "More important in infants; less in adults"
                    },
                    irritant: {
                        location: "Airways (epithelium)",
                        stimuli: "Dust, smoke, chemicals, cold air",
                        response: "Bronchoconstriction, cough, sneeze"
                    },
                    Jreceptors: {
                        location: "Alveolar walls (juxtacapillary)",
                        stimuli: "Pulmonary edema, pulmonary embolism, pneumonia",
                        response: "Rapid shallow breathing, dyspnea"
                    }
                },

                proprioceptors: {
                    location: "Muscles, tendons, joints",
                    function: "Detect movement",
                    effect: "↑ Breathing during exercise (feedforward control)",
                    anticipatory: "Breathing increases before metabolic demand increases"
                },

                temperature: {
                    heat: "↑ Body temperature → ↑ breathing rate",
                    cold: "↓ Body temperature → ↓ breathing rate",
                    mechanism: "Direct effect on respiratory centers"
                },

                emotion: {
                    anxiety: "↑ Breathing (hyperventilation)",
                    pain: "↑ Breathing",
                    fear: "↑ Breathing",
                    pathway: "Limbic system → respiratory centers"
                },

                baroreceptors: {
                    function: "Detect blood pressure",
                    effect: "↑ BP → slight ↓ breathing; ↓ BP → slight ↑ breathing",
                    integration: "Coordinate cardiovascular and respiratory responses"
                }
            },

            exerciseResponse: {
                anticipatory: "Breathing increases before exercise starts (cortical and proprioceptor input)",
                
                duringExercise: {
                    changes: [
                        "↑ Breathing rate (tachypnea)",
                        "↑ Tidal volume (depth of breathing)",
                        "↑ Minute ventilation (can increase 20-fold)"
                    ],
                    
                    stimuli: [
                        "↑ Muscle activity → proprioceptor stimulation",
                        "↑ CO₂ production (mild increase in PCO₂)",
                        "↓ pH (lactic acid in intense exercise)",
                        "↑ Body temperature",
                        "↑ Epinephrine"
                    ],
                    
                    matching: "Ventilation closely matches metabolic demand",
                    efficiency: "Blood gases remain near normal during moderate exercise",
                    intensiveExercise: "May see ↓ pH due to lactic acid (triggers more breathing)"
                },

                afterExercise: {
                    recovery: "Breathing remains elevated for minutes after stopping",
                    purpose: "Pay back 'oxygen debt', remove accumulated CO₂ and lactic acid",
                    gradual: "Gradually returns to resting rate"
                }
            },

            highAltitude: {
                challenge: "↓ Atmospheric pressure → ↓ PO₂ in inspired air",
                
                acuteResponse: {
                    detection: "Peripheral chemoreceptors detect hypoxia",
                    response: "Hyperventilation (↑ breathing rate and depth)",
                    tradeoff: "↑ O₂ but ↓ CO₂ (respiratory alkalosis)",
                    symptoms: "Acute mountain sickness - headache, nausea, dizziness, fatigue"
                },

                acclimatization: {
                    timeScale: "Days to weeks",
                    changes: [
                        "↑ Ventilation becomes sustained (central chemoreceptors reset)",
                        "Kidneys excrete HCO₃⁻ (compensate for alkalosis)",
                        "↑ Red blood cell production (↑ O₂ carrying capacity)",
                        "↑ 2,3-BPG in RBCs (↑ O₂ unloading to tissues)",
                        "↑ Capillary density in tissues",
                        "Cellular adaptations (↑ mitochondria)"
                    ],
                    result: "Better tolerance of low O₂",
                    limits: "Above ~8000m (26,000 ft), humans cannot fully acclimatize"
                }
            },

            respiratoryDisorders: {
                COPD: {
                    name: "Chronic Obstructive Pulmonary Disease",
                    types: "Emphysema and chronic bronchitis",
                    pathophysiology: "Airflow obstruction → inadequate gas exchange",
                    gasAbnormalities: "↑ PCO₂ (hypercapnia), ↓ PO₂ (hypoxia)",
                    
                    adaptation: {
                        problem: "Central chemoreceptors adapt to chronic ↑ CO₂",
                        result: "CO₂ no longer drives breathing",
                        hypoxicDrive: "Breathing driven by low O₂ (peripheral chemoreceptors)",
                        danger: "High O₂ therapy can eliminate hypoxic drive → respiratory depression"
                    },
                    
                    treatment: "Bronchodilators, controlled O₂, breathing exercises"
                },

                asthma: {
                    pathophysiology: "Airway inflammation and bronchoconstriction",
                    triggers: "Allergens, exercise, cold air, irritants",
                    gasAbnormalities: "Normal or ↓ PCO₂ (hyperventilation), may ↓ PO₂ in severe attacks",
                    symptoms: "Wheezing, dyspnea, chest tightness, cough",
                    treatment: "Bronchodilators (rescue), anti-inflammatory (controller)"
                },

                pneumonia: {
                    pathophysiology: "Infection → fluid in alveoli → impaired gas exchange",
                    gasAbnormalities: "↓ PO₂ (hypoxia), ↑ breathing rate (compensatory)",
                    symptoms: "Fever, cough, dyspnea, chest pain",
                    treatment: "Antibiotics, supportive care, O₂"
                },

                sleepApnea: {
                    types: {
                        obstructive: "Airway collapse during sleep",
                        central: "Brain doesn't signal breathing muscles"
                    },
                    result: "Repeated episodes of apnea (no breathing) → hypoxia → arousal",
                    consequences: "Fragmented sleep, daytime sleepiness, ↑ cardiovascular risk",
                    treatment: "CPAP (continuous positive airway pressure), weight loss, surgery"
                }
            },

            breathingPatterns: {
                eupnea: "Normal, quiet breathing (12-20/min)",
                tachypnea: "Rapid breathing (>20/min)",
                bradypnea: "Slow breathing (<12/min)",
                apnea: "Absence of breathing",
                dyspnea: "Difficult or labored breathing (shortness of breath)",
                hyperpnea: "Increased depth and rate (e.g., during exercise)",
                hyperventilation: "Excessive breathing → ↓ CO₂",
                hypoventilation: "Inadequate breathing → ↑ CO₂",
                cheyneStokes: "Cyclical pattern (crescendo-decrescendo, then apnea),seen in heart failure, brain damage",
                kussmaul: "Deep, rapid breathing - seen in metabolic acidosis (diabetic ketoacidosis)",
                biot: "Irregular breathing with apnea periods - seen in brain damage"
            },

            clinicalApplications: [
                "Managing respiratory failure and mechanical ventilation",
                "Treating COPD and asthma",
                "High altitude medicine and acclimatization",
                "Sleep apnea diagnosis and treatment",
                "Understanding acid-base disorders",
                "Anesthesia management",
                "Athletic performance and training",
                "Pulmonary rehabilitation"
            ],

            category: 'gas_exchange'
        };
    }

handleStressResponse(problem) {
        return {
            topic: "Physiological Stress Response",
            definition: "The stress response is a coordinated set of physiological changes that prepare the body to deal with perceived threats through the 'fight-or-flight' response (acute) and sustained adaptation (chronic).",

            stressBasics: {
                stress: "Any stimulus that threatens or appears to threaten homeostasis",
                stressor: "Agent or stimulus causing stress (physical, psychological, or emotional)",
                types: {
                    physical: "Injury, illness, extreme temperature, exercise, pain",
                    psychological: "Anxiety, fear, worry, deadlines, social pressure",
                    emotional: "Loss, conflict, trauma"
                },
                perception: "Stress is subjective; same stimulus affects people differently"
            },

            stressResponseSystems: {
                rapidResponse: {
                    name: "Sympathetic-Adrenal-Medullary (SAM) Axis",
                    timeScale: "Seconds (immediate response)",
                    system: "Sympathetic nervous system + adrenal medulla",
                    nickname: "'Fight-or-Flight' response"
                },
                sustainedResponse: {
                    name: "Hypothalamic-Pituitary-Adrenal (HPA) Axis",
                    timeScale: "Minutes to hours (sustained response)",
                    system: "Hypothalamus → Pituitary → Adrenal cortex",
                    purpose: "Long-term adaptation and energy mobilization"
                }
            },

            fightOrFlightResponse: {
                description: "Immediate sympathetic nervous system activation preparing body for action",
                discoverer: "Walter Cannon (1915)",
                pathway: "Stressor → Amygdala/Hypothalamus → Sympathetic nervous system → Adrenal medulla",
                
                neuralComponent: {
                    activation: "Sympathetic nervous system activated throughout body",
                    neurotransmitter: "Norepinephrine released at target organs",
                    speed: "Milliseconds to seconds"
                },

                hormonalComponent: {
                    gland: "Adrenal medulla (modified sympathetic ganglion)",
                    hormones: "Epinephrine (adrenaline) 80% and Norepinephrine 20%",
                    release: "Into bloodstream",
                    effect: "Amplifies and prolongs sympathetic effects",
                    duration: "Minutes (hormones circulate longer than neural signals)"
                },

                physiologicalEffects: [
                    {
                        system: "Cardiovascular",
                        effects: [
                            "↑ Heart rate (tachycardia) - pumps more blood",
                            "↑ Cardiac contractility - stronger contractions",
                            "↑ Blood pressure - ensures perfusion",
                            "Vasoconstriction in skin and GI tract - redirects blood",
                            "Vasodilation in skeletal muscles - prepares for action"
                        ],
                        purpose: "Deliver more O₂ and nutrients to muscles and brain"
                    },
                    {
                        system: "Respiratory",
                        effects: [
                            "↑ Breathing rate (tachypnea)",
                            "Bronchodilation - easier airflow",
                            "↑ Tidal volume - deeper breaths"
                        ],
                        purpose: "Increase O₂ intake and CO₂ removal"
                    },
                    {
                        system: "Metabolic",
                        effects: [
                            "↑ Glucose release from liver (glycogenolysis, gluconeogenesis)",
                            "↑ Fat breakdown (lipolysis)",
                            "↑ Metabolic rate",
                            "Inhibits insulin release (initially)"
                        ],
                        purpose: "Mobilize energy for immediate use"
                    },
                    {
                        system: "Nervous",
                        effects: [
                            "↑ Alertness and focus",
                            "Dilated pupils (mydriasis) - better vision",
                            "↑ Reaction time",
                            "Enhanced sensory perception"
                        ],
                        purpose: "Improve threat detection and response speed"
                    },
                    {
                        system: "Muscular",
                        effects: [
                            "↑ Muscle tension and strength",
                            "Enhanced reflexes",
                            "Trembling (muscle priming)"
                        ],
                        purpose: "Prepare for physical action"
                    },
                    {
                        system: "Digestive",
                        effects: [
                            "↓ Digestive activity (motility and secretion)",
                            "↓ Salivation (dry mouth)",
                            "Nausea",
                            "Sphincter contraction"
                        ],
                        purpose: "Divert energy from non-essential functions"
                    },
                    {
                        system: "Urinary/Reproductive",
                        effects: [
                            "Bladder relaxation (retention)",
                            "↓ Sexual function",
                            "May cause urgency (in extreme stress)"
                        ],
                        purpose: "Suppress non-essential functions"
                    },
                    {
                        system: "Thermoregulation",
                        effects: [
                            "↑ Sweating (even without heat)",
                            "Piloerection ('goosebumps')"
                        ],
                        purpose: "Prepare for heat generation from activity"
                    },
                    {
                        system: "Immune",
                        effects: [
                            "↑ Inflammatory response (acute)",
                            "Enhanced wound healing (initially)"
                        ],
                        purpose: "Prepare for potential injury"
                    }
                ],

                subjectiveExperience: [
                    "Pounding heart",
                    "Rapid breathing",
                    "Sweaty palms",
                    "Butterflies in stomach",
                    "Dry mouth",
                    "Trembling",
                    "Heightened senses",
                    "Tunnel vision",
                    "Feeling of energy or nervousness"
                ],

                purpose: "Prepare body for immediate physical action (fight or flee from danger)",
                adaptive: "Highly adaptive for acute physical threats (predators, accidents)",
                modernProblem: "Often triggered by psychological stressors that don't require physical response"
            },

            HPAAxis: {
                name: "Hypothalamic-Pituitary-Adrenal (HPA) Axis",
                description: "Neuroendocrine system for sustained stress response",
                timeScale: "Minutes to hours to days",
                
                pathway: [
                    {
                        step: 1,
                        location: "Hypothalamus (paraventricular nucleus)",
                        hormone: "CRH (Corticotropin-Releasing Hormone)",
                        trigger: "Stress perceived by brain (cortex, limbic system, brainstem)",
                        timing: "Within minutes"
                    },
                    {
                        step: 2,
                        location: "Anterior Pituitary",
                        hormone: "ACTH (Adrenocorticotropic Hormone)",
                        trigger: "CRH from hypothalamus",
                        action: "Released into bloodstream",
                        timing: "Minutes"
                    },
                    {
                        step: 3,
                        location: "Adrenal Cortex (zona fasciculata)",
                        hormone: "Cortisol (glucocorticoid)",
                        trigger: "ACTH from pituitary",
                        action: "Synthesized and released into bloodstream",
                        timing: "15-30 minutes (peak effect: 30-60 minutes)"
                    }
                ],

                cortisol: {
                    name: "Cortisol ('Stress Hormone')",
                    class: "Glucocorticoid steroid hormone",
                    peakLevels: "Morning (circadian rhythm); elevated during stress",
                    
                    metabolicEffects: [
                        "↑ Blood glucose (gluconeogenesis in liver)",
                        "↑ Protein breakdown (provides amino acids for gluconeogenesis)",
                        "↑ Fat breakdown (lipolysis)",
                        "Insulin resistance (spares glucose for brain)",
                        "Redistributes fat (to trunk and face with chronic elevation)"
                    ],
                    
                    cardiovascularEffects: [
                        "Maintains vascular tone",
                        "Enhances effects of epinephrine/norepinephrine",
                        "↑ Blood pressure (permissive and direct effects)"
                    ],
                    
                    immuneEffects: [
                        "Anti-inflammatory",
                        "Immunosuppressive (↓ lymphocyte production)",
                        "↓ Allergic responses"
                    ],
                    
                    brainEffects: [
                        "Affects mood and cognition",
                        "Modulates memory (↑ consolidation of emotional memories)",
                        "Can impair memory retrieval (high levels)",
                        "Affects hippocampus (memory center)"
                    ],
                    
                    otherEffects: [
                        "↓ Bone formation (chronic exposure)",
                        "↓ Reproductive function",
                        "↓ Growth (in children with chronic elevation)",
                        "↓ Wound healing (chronic exposure)",
                        "Increases gastric acid secretion"
                    ],
                    
                    purpose: "Mobilize energy reserves for prolonged stress; suppress non-essential functions",
                    
                    negativeFeedback: {
                        mechanism: "Cortisol inhibits CRH and ACTH release",
                        sensors: "Hypothalamus and pituitary detect cortisol levels",
                        result: "Limits cortisol production once stressor resolved",
                        problem: "Chronic stress can impair feedback (HPA axis dysregulation)"
                    }
                },

                otherHormones: {
                    aldosterone: {
                        source: "Adrenal cortex (zona glomerulosa)",
                        function: "↑ Na⁺ and water retention → ↑ blood volume/pressure",
                        role: "Supports cardiovascular response to stress"
                    },
                    vasopressin: {
                        source: "Posterior pituitary",
                        function: "↑ Water retention, vasoconstriction",
                        synergy: "Works with CRH to stimulate ACTH"
                    }
                }
            },

            acuteVsChronicStress: {
                acuteStress: {
                    duration: "Minutes to hours",
                    response: "Fight-or-flight (sympathetic + epinephrine) and HPA activation",
                    effects: "Adaptive; enhances performance and survival",
                    recovery: "Body returns to homeostasis after stressor removed",
                    examples: ["Public speaking", "Exam", "Near-miss accident", "Exercise"],
                    beneficial: "Can improve focus, memory consolidation, immune function (short-term)"
                },

                chronicStress: {
                    duration: "Days, weeks, months, or years",
                    response: "Sustained HPA activation; elevated cortisol",
                    effects: "Maladaptive; wear and tear on body systems",
                    recovery: "Incomplete; body doesn't fully recover between stressors",
                    examples: ["Work stress", "Financial problems", "Caregiving", "Chronic illness", "Abusive relationship"],
                    
                    allostaticLoad: {
                        definition: "Cumulative wear and tear from chronic stress",
                        concept: "Repeated activation and incomplete recovery",
                        result: "Physiological dysregulation and disease"
                    },
                    
                    harmfulEffects: {
                        cardiovascular: [
                            "Hypertension (high blood pressure)",
                            "Atherosclerosis",
                            "↑ Risk of heart attack and stroke",
                            "Arrhythmias"
                        ],
                        metabolic: [
                            "Insulin resistance",
                            "Type 2 diabetes",
                            "Obesity (especially abdominal)",
                            "Metabolic syndrome",
                            "Dyslipidemia"
                        ],
                        immune: [
                            "Immunosuppression → ↑ infections",
                            "Slower wound healing",
                            "Reactivation of latent viruses (herpes, shingles)",
                            "May ↑ cancer risk"
                        ],
                        gastrointestinal: [
                            "Irritable bowel syndrome (IBS)",
                            "↑ Risk of ulcers",
                            "Inflammatory bowel disease exacerbation"
                        ],
                        musculoskeletal: [
                            "Muscle tension and pain",
                            "Tension headaches",
                            "Temporomandibular joint (TMJ) disorders",
                            "Osteoporosis (chronic cortisol)",
                            "↓ Muscle mass"
                        ],
                        reproductive: [
                            "Irregular menstrual cycles",
                            "↓ Fertility",
                            "↓ Libido",
                            "Erectile dysfunction"
                        ],
                        neurological: [
                            "Anxiety disorders",
                            "Depression",
                            "Memory impairment",
                            "Hippocampal atrophy (shrinkage)",
                            "Cognitive decline",
                            "Sleep disturbances"
                        ],
                        dermatological: [
                            "Acne",
                            "Psoriasis exacerbation",
                            "Eczema flare-ups",
                            "Hair loss"
                        ],
                        aging: [
                            "Accelerated cellular aging",
                            "Telomere shortening",
                            "↑ Oxidative stress",
                            "Premature aging"
                        ]
                    }
                }
            },

            stressAndTheBrain: {
                amygdala: {
                    role: "Emotional processing, fear detection",
                    stress: "Hyperactive during chronic stress; ↑ anxiety",
                    effect: "Enhanced fear responses, emotional reactivity"
                },
                
                hippocampus: {
                    role: "Memory formation, spatial navigation",
                    stress: "Damaged by chronic cortisol exposure",
                    effects: [
                        "Atrophy (shrinkage)",
                        "↓ Neurogenesis (new neuron formation)",
                        "Memory impairment",
                        "Spatial memory deficits"
                    ],
                    vulnerability: "High density of cortisol receptors"
                },
                
                prefrontalCortex: {
                    role: "Executive function, decision-making, impulse control",
                    stress: "Impaired function during acute stress; atrophy with chronic stress",
                    effects: [
                        "Poor decision-making",
                        "↓ Impulse control",
                        "↓ Attention and concentration",
                        "Difficulty with complex tasks"
                    ]
                },
                
                hypothalamus: {
                    role: "HPA axis control",
                    stress: "Can become dysregulated with chronic stress",
                    effect: "Altered stress response (hyperresponsive or blunted)"
                },
                
                neurotransmitters: {
                    serotonin: "Often ↓ with chronic stress → depression",
                    dopamine: "Altered reward processing",
                    GABA: "↓ Inhibitory control → anxiety",
                    glutamate: "↑ Excitotoxicity with chronic stress"
                }
            },

            individualDifferences: {
                genetics: "Some people genetically more stress-reactive",
                earlyLifeExperience: "Childhood adversity → altered stress response (sensitization or adaptation)",
                personalityTraits: {
                    typeA: "Competitive, time-urgent, hostile → ↑ stress reactivity",
                    hardiness: "Commitment, control, challenge → stress resilience",
                    optimism: "↓ Stress perception and better coping"
                },
                copingStrategies: {
                    problemFocused: "Address stressor directly (more effective when stressor controllable)",
                    emotionFocused: "Manage emotional response (helpful when stressor uncontrollable)",
                    avoidance: "Often maladaptive long-term"
                },
                socialSupport: "Strong social connections buffer stress effects",
                socioeconomicStatus: "Lower SES → ↑ chronic stress exposure"
            },

            stressManagement: {
                physiologicalApproaches: [
                    {
                        technique: "Regular Exercise",
                        mechanisms: [
                            "↓ Cortisol levels",
                            "↑ Endorphins ('feel-good' chemicals)",
                            "Improves cardiovascular health",
                            "Enhances sleep quality",
                            "Provides stress outlet"
                        ],
                        recommendation: "150 min/week moderate aerobic activity"
                    },
                    {
                        technique: "Adequate Sleep",
                        importance: "Sleep deprivation ↑ stress reactivity",
                        effects: "Restores body systems, consolidates memory, regulates emotions",
                        recommendation: "7-9 hours per night for adults"
                    },
                    {
                        technique: "Healthy Diet",
                        principles: [
                            "Balanced nutrition supports stress response",
                            "Limit caffeine and alcohol",
                            "Omega-3 fatty acids (anti-inflammatory)",
                            "Antioxidants (combat oxidative stress)"
                        ]
                    },
                    {
                        technique: "Deep Breathing",
                        mechanism: "Activates parasympathetic nervous system",
                        techniques: ["Diaphragmatic breathing", "Box breathing", "4-7-8 breathing"],
                        effect: "↓ Heart rate, ↓ blood pressure, ↓ cortisol"
                    }
                ],

                psychologicalApproaches: [
                    {
                        technique: "Mindfulness Meditation",
                        definition: "Non-judgmental awareness of present moment",
                        effects: [
                            "↓ Cortisol",
                            "↓ Amygdala reactivity",
                            "↑ Prefrontal cortex activity",
                            "Improved emotional regulation"
                        ],
                        evidence: "Strong research support"
                    },
                    {
                        technique: "Cognitive Behavioral Therapy (CBT)",
                        approach: "Change maladaptive thought patterns and behaviors",
                        effectiveness: "Gold standard for anxiety and depression",
                        components: ["Cognitive restructuring", "Behavioral activation", "Exposure"]
                    },
                    {
                        technique: "Progressive Muscle Relaxation",
                        method: "Tense and release muscle groups systematically",
                        effect: "↓ Muscle tension, ↓ anxiety"
                    },
                    {
                        technique: "Time Management",
                        strategies: ["Prioritization", "Delegation", "Realistic goal-setting", "Saying 'no'"],
                        benefit: "↓ Perceived stress and overwhelm"
                    }
                ],

                socialApproaches: [
                    {
                        technique: "Social Support",
                        importance: "Strong relationships buffer stress",
                        types: ["Emotional support", "Practical help", "Information"],
                        recommendation: "Maintain and nurture relationships"
                    },
                    {
                        technique: "Social Connection",
                        activities: ["Volunteering", "Group activities", "Joining clubs"],
                        benefit: "Sense of belonging and purpose"
                    }
                ],

                lifestyle: [
                    "Limit alcohol and drugs (can worsen stress long-term)",
                    "Reduce caffeine (can increase anxiety)",
                    "Hobbies and leisure activities",
                    "Nature exposure (proven stress reduction)",
                    "Pets (companionship and stress reduction)",
                    "Laughter and humor",
                    "Music (listening or playing)"
                ]
            },

            stressDisorders: {
                generalizedAnxietyDisorder: {
                    description: "Chronic, excessive worry about various topics",
                    physiology: "Chronic HPA activation, ↑ amygdala activity",
                    symptoms: "Restlessness, fatigue, difficulty concentrating, muscle tension, sleep disturbance",
                    treatment: "CBT, medication (SSRIs, SNRIs), relaxation techniques"
                },

                panicDisorder: {
                    description: "Recurrent unexpected panic attacks",
                    physiology: "Hypersensitive fear circuitry, locus coeruleus hyperactivity",
                    symptoms: "Sudden intense fear, palpitations, sweating, trembling, dyspnea, chest pain, dizziness",
                    treatment: "CBT, exposure therapy, SSRIs"
                },

                PTSD: {
                    name: "Post-Traumatic Stress Disorder",
                    trigger: "Exposure to traumatic event",
                    physiology: [
                        "Chronic HPA dysregulation (often blunted cortisol)",
                        "Hyperactive amygdala",
                        "Reduced hippocampal volume",
                        "Altered stress reactivity"
                    ],
                    symptoms: [
                        "Intrusive memories/flashbacks",
                        "Avoidance of reminders",
                        "Negative mood and cognition",
                        "Hyperarousal (exaggerated startle, hypervigilance)"
                    ],
                    treatment: "Trauma-focused CBT, EMDR, medication"
                },

                depression: {
                    relationship: "Chronic stress is major risk factor",
                    physiology: [
                        "HPA axis dysregulation",
                        "Elevated cortisol (often)",
                        "Hippocampal atrophy",
                        "↓ Serotonin, norepinephrine, dopamine"
                    ],
                    symptoms: "Persistent sad mood, anhedonia, fatigue, sleep/appetite changes, hopelessness",
                    treatment: "Antidepressants (SSRIs, SNRIs), psychotherapy, lifestyle changes"
                },

                burnout: {
                    definition: "State of emotional, physical, and mental exhaustion from prolonged stress",
                    common: "Healthcare workers, teachers, caregivers",
                    symptoms: [
                        "Emotional exhaustion",
                        "Cynicism/detachment",
                        "Reduced personal accomplishment",
                        "Chronic fatigue"
                    ],
                    physiology: "HPA axis exhaustion (blunted cortisol response)",
                    treatment: "Rest, stress management, career counseling, psychotherapy"
                },

                CushingSyndrome: {
                    description: "Disease of chronic cortisol excess",
                    causes: [
                        "Pituitary tumor (Cushing's disease)",
                        "Adrenal tumor",
                        "Ectopic ACTH production",
                        "Exogenous corticosteroids (medication)"
                    ],
                    symptoms: [
                        "Weight gain (central obesity, 'moon face', 'buffalo hump')",
                        "Skin changes (striae, easy bruising, thinning)",
                        "Muscle weakness",
                        "Hypertension",
                        "Hyperglycemia/diabetes",
                        "Osteoporosis",
                        "Mood changes"
                    ],
                    treatment: "Surgery, medication, radiation (depending on cause)"
                }
            },

            adaptiveStress: {
                eustress: {
                    definition: "Positive stress that enhances function",
                    examples: ["Exercise", "Learning", "Exciting challenges", "Falling in love"],
                    characteristics: [
                        "Perceived as within coping ability",
                        "Time-limited",
                        "Enhances focus and performance",
                        "Associated with positive emotions"
                    ],
                    benefit: "Builds resilience, promotes growth"
                },

                hormeticStress: {
                    definition: "Low-level stressors that strengthen adaptive responses",
                    examples: ["Exercise", "Fasting", "Cold exposure", "Heat exposure"],
                    mechanism: "Mild stress triggers protective adaptations",
                    result: "Enhanced resilience to future stressors"
                },

                yerkesDoddsonLaw: {
                    principle: "Performance increases with arousal up to an optimal point, then decreases",
                    implication: "Moderate stress enhances performance; too little or too much impairs it",
                    graph: "Inverted U-shaped curve",
                    application: "Goal is optimal arousal, not zero stress"
                }
            },

            clinicalApplications: [
                "Managing anxiety and mood disorders",
                "PTSD treatment and prevention",
                "Workplace stress interventions",
                "Cardiovascular disease prevention",
                "Pain management",
                "Autoimmune disease management",
                "Understanding psychosomatic illness",
                "Resilience training",
                "Performance optimization (athletics, academics)",
                "Preventing burnout in healthcare workers"
            ],

            category: 'stress_response'
        };
    }

    // CONTENT GENERATION METHODS (following same pattern as cell biology workbook)

    generateHomeostasisContent(problem, content) {
        const contentSections = [];

        contentSections.push(this.generateOverviewSection(problem, content));

        if (content.coreComponents) {
            contentSections.push(this.generateComponentsSection(content));
        }

        if (content.keyHormones) {
            contentSections.push(this.generateHormonesSection(content));
        }

        if (content.mechanisms || content.mainMechanisms) {
            contentSections.push(this.generateMechanismsSection(content));
        }

        if (content.regulatedVariables) {
            contentSections.push(this.generateRegulatedVariablesSection(content));
        }

        if (content.disorders || content.acidBaseDisorders || content.bloodPressureDisorders) {
            contentSections.push(this.generateDisordersSection(content));
        }

        if (content.comparisons || content.comparison) {
            contentSections.push(this.generateComparisonsSection(content));
        }

        if (content.examples) {
            contentSections.push(this.generateExamplesSection(content));
        }

        return contentSections;
    }

    generateOverviewSection(problem, content) {
        return {
            sectionType: 'overview',
            title: content.topic || problem.originalTopic,
            category: content.category,
            description: content.description || content.summary || content.definition,
            keyPoints: this.extractKeyPoints(content),
            relevance: this.getTopicRelevance(problem.type)
        };
    }

    generateComponentsSection(content) {
        return {
            sectionType: 'components',
            title: 'System Components',
            components: content.coreComponents.map(comp => ({
                name: comp.name,
                function: comp.function,
                examples: comp.examples,
                location: comp.location
            }))
        };
    }

    generateHormonesSection(content) {
        return {
            sectionType: 'hormones',
            title: 'Key Hormones',
            hormones: content.keyHormones.map(hormone => ({
                name: hormone.hormone || hormone.name,
                source: hormone.source || hormone.producedBy,
                trigger: hormone.trigger,
                function: hormone.function,
                mechanisms: hormone.mechanisms,
                effects: hormone.effects
            }))
        };
    }

    generateMechanismsSection(content) {
        const mechanisms = content.mechanisms || content.mainMechanisms;
        return {
            sectionType: 'mechanisms',
            title: 'Regulatory Mechanisms',
            mechanisms: Array.isArray(mechanisms) ? mechanisms : Object.values(mechanisms)
        };
    }

    generateRegulatedVariablesSection(content) {
        return {
            sectionType: 'regulated_variables',
            title: 'Regulated Variables',
            variables: content.regulatedVariables.map(variable => ({
                name: variable.variable,
                normalRange: variable.normalRange,
                regulator: variable.primaryRegulator,
                importance: variable.importance
            }))
        };
    }

    generateDisordersSection(content) {
        const disorders = content.disorders || content.acidBaseDisorders || content.bloodPressureDisorders;
        return {
            sectionType: 'disorders',
            title: 'Clinical Disorders',
            disorders: disorders
        };
    }

    generateComparisonsSection(content) {
        const comparisons = content.comparisons || content.comparison;
        return {
            sectionType: 'comparisons',
            title: 'Comparisons and Contrasts',
            comparisons: Object.entries(comparisons).map(([key, comp]) => ({
                comparisonName: key,
                data: comp
            }))
        };
    }

    generateExamplesSection(content) {
        return {
            sectionType: 'examples',
            title: 'Examples and Applications',
            examples: content.examples,
            applications: content.clinicalApplications
        };
    }

    // HELPER METHODS (same as cell biology)

    extractKeyPoints(content) {
        const keyPoints = [];
        if (content.concepts) keyPoints.push(...content.concepts);
        if (content.keyDefinitions) keyPoints.push(...Object.keys(content.keyDefinitions));
        if (content.mainCategories) keyPoints.push(...content.mainCategories);
        if (content.importanceOfCalcium) keyPoints.push(...content.importanceOfCalcium.slice(0, 5));
        if (content.importance) keyPoints.push(...(Array.isArray(content.importance) ? content.importance.slice(0, 5) : []));
        return keyPoints.slice(0, 5);
    }

getTopicRelevance(topicType) {
        const relevance = {
            homeostasis_general: "Understanding homeostasis is fundamental to all physiology",
            thermoregulation: "Temperature regulation is critical for survival and enzyme function",
            osmoregulation: "Water and electrolyte balance affects all cellular functions",
            blood_glucose: "Glucose regulation is essential for cellular energy and brain function",
            feedback_mechanisms: "Feedback loops are the basis of most physiological regulation",
            nervous_regulation: "Nervous system provides rapid homeostatic control",
            endocrine_regulation: "Hormonal control regulates long-term physiological processes",
            ph_regulation: "pH balance is critical for enzyme function and metabolism",
            blood_pressure: "Blood pressure regulation ensures adequate tissue perfusion",
            calcium_regulation: "Calcium is essential for bones, muscles, nerves, and signaling",
            gas_exchange: "Gas exchange supports cellular respiration and pH balance",
            stress_response: "Stress response prepares body for challenges and threats"
        };
        return relevance[topicType] || "Important homeostatic concept";
    }

    // DIAGRAM GENERATION
    generateHomeostasisDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        this.diagramData = {
            type: type,
            diagrams: this.getRelevantHomeostasisDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual homeostasis diagrams"
        };
    }

    getRelevantHomeostasisDiagrams(topicType) {
        const diagramMap = {
            homeostasis_general: ["homeostasis_components", "negative_feedback_loop", "set_point_diagram"],
            thermoregulation: ["temperature_regulation_pathways", "heat_gain_loss_mechanisms", "hypothalamus_control"],
            osmoregulation: ["kidney_nephron", "ADH_mechanism", "water_balance"],
            blood_glucose: ["insulin_glucagon_effects", "glucose_metabolism_pathways", "diabetes_comparison"],
            feedback_mechanisms: ["negative_feedback_example", "positive_feedback_example", "feedback_comparison"],
            nervous_regulation: ["autonomic_nervous_system", "sympathetic_parasympathetic", "reflex_arc"],
            endocrine_regulation: ["major_endocrine_glands", "HPA_axis", "hormone_mechanisms"],
            ph_regulation: ["buffer_systems", "respiratory_renal_compensation", "acid_base_disorders"],
            blood_pressure: ["baroreceptor_reflex", "RAAS_pathway", "blood_pressure_regulation"],
            calcium_regulation: ["PTH_calcitonin_effects", "vitamin_D_activation", "bone_remodeling"],
            gas_exchange: ["respiratory_control_centers", "chemoreceptor_pathways", "breathing_regulation"],
            stress_response: ["fight_or_flight", "HPA_axis", "stress_effects"]
        };

        return diagramMap[topicType] || [];
    }

    // WORKBOOK GENERATION
    generateHomeostasisWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createHomeostasisProblemSection(),
            this.createContentOverviewSection(),
            this.createDetailedHomeostasisContentSection(),
            this.createComparisonsSection(),
            this.createExamplesApplicationsSection(),
            this.createMisconceptionsSection(),
            this.createPedagogicalNotesSection(),
            this.createDiagramReferencesSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: `Homeostasis and Regulation Workbook: ${this.currentContent.topic}`,
            createdAt: new Date().toISOString(),
            topic: this.currentProblem.type,
            sections: []
        };
    }

    createHomeostasisProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.homeostasisTopics[this.currentProblem.type]?.category || 'N/A']
            ]
        };
    }

    createDetailedHomeostasisContentSection() {
        if (!this.currentContent) return null;

        const contentData = [];

        // Add definition/description
        if (this.currentContent.definition) {
            contentData.push(['Definition', this.currentContent.definition]);
            contentData.push(['', '']);
        }

        // Add importance
        if (this.currentContent.importance && Array.isArray(this.currentContent.importance)) {
            contentData.push(['IMPORTANCE', '']);
            this.currentContent.importance.forEach(item => {
                contentData.push(['•', item]);
            });
            contentData.push(['', '']);
        }

        // Add core components
        if (this.currentContent.coreComponents) {
            contentData.push(['CORE COMPONENTS', '']);
            this.currentContent.coreComponents.forEach(comp => {
                contentData.push([comp.name, '']);
                contentData.push(['Function', comp.function]);
                if (comp.examples) contentData.push(['Examples', Array.isArray(comp.examples) ? comp.examples.join(', ') : comp.examples]);
                contentData.push(['', '']);
            });
        }

        // Add key hormones
        if (this.currentContent.keyHormones) {
            contentData.push(['KEY HORMONES', '']);
            this.currentContent.keyHormones.forEach(hormone => {
                const name = hormone.hormone || hormone.name;
                contentData.push([name, '']);
                if (hormone.source || hormone.producedBy) contentData.push(['Source', hormone.source || hormone.producedBy]);
                if (hormone.trigger) contentData.push(['Trigger', hormone.trigger]);
                if (hormone.function) contentData.push(['Function', hormone.function]);
                contentData.push(['', '']);
            });
        }

        // Add mechanisms
        if (this.currentContent.mechanisms) {
            contentData.push(['MECHANISMS', '']);
            const mechanisms = Array.isArray(this.currentContent.mechanisms) ? 
                this.currentContent.mechanisms : 
                Object.entries(this.currentContent.mechanisms);
            
            mechanisms.forEach(mech => {
                if (Array.isArray(mech)) {
                    contentData.push([mech[0], JSON.stringify(mech[1])]);
                } else if (typeof mech === 'object') {
                    contentData.push([mech.mechanism || mech.name || 'Mechanism', mech.description || '']);
                }
            });
            contentData.push(['', '']);
        }

        return contentData.length > 0 ? {
            title: 'Detailed Content',
            type: 'detailed_content',
            data: contentData
        } : null;
    }

    // ASSESSMENT AND LEARNING METHODS

    assessContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        const simpleTopics = ['homeostasis_general', 'thermoregulation'];
        if (simpleTopics.includes(this.currentProblem.type)) {
            difficultyScore += 1;
        }

        const intermediateTopics = ['osmoregulation', 'blood_glucose', 'feedback_mechanisms', 'gas_exchange'];
        if (intermediateTopics.includes(this.currentProblem.type)) {
            difficultyScore += 2;
        }

        const complexTopics = ['ph_regulation', 'blood_pressure', 'calcium_regulation', 'endocrine_regulation', 'stress_response'];
        if (complexTopics.includes(this.currentProblem.type)) {
            difficultyScore += 3;
        }

        if (this.explanationLevel === 'detailed') difficultyScore += 1;
        if (this.explanationLevel === 'basic') difficultyScore -= 1;

        if (difficultyScore <= 2) return 'beginner';
        if (difficultyScore <= 4) return 'intermediate';
        return 'advanced';
    }

    generateLearningObjectives() {
        if (!this.currentProblem) return [];

        const objectivesDatabase = {
            homeostasis_general: [
                "Define homeostasis and explain its importance",
                "Identify the components of homeostatic control systems",
                "Distinguish between negative and positive feedback",
                "Explain how set points function in regulation"
            ],
            thermoregulation: [
                "Describe mechanisms of heat production and heat loss",
                "Explain the role of the hypothalamus in temperature regulation",
                "Compare endotherms and ectotherms",
                "Identify responses to hypothermia and hyperthermia"
            ],
            osmoregulation: [
                "Explain the role of kidneys in water and electrolyte balance",
                "Describe the functions of ADH and aldosterone",
                "Understand the consequences of dehydration and overhydration",
                "Explain nephron function in osmoregulation"
            ],
            blood_glucose: [
                "Explain the opposing actions of insulin and glucagon",
                "Describe the pancreatic control of blood glucose",
                "Compare Type 1 and Type 2 diabetes",
                "Understand the consequences of hypo- and hyperglycemia"
            ],
            feedback_mechanisms: [
                "Distinguish between negative and positive feedback",
                "Provide examples of each type of feedback",
                "Explain why negative feedback is more common",
                "Describe the components of feedback loops"
            ],
            nervous_regulation: [
                "Compare sympathetic and parasympathetic divisions",
                "Explain the fight-or-flight response",
                "Describe reflex arcs and their components",
                "Understand autonomic control of organs"
            ],
            endocrine_regulation: [
                "Identify major endocrine glands and their hormones",
                "Explain hormonal control mechanisms",
                "Describe the HPA, HPT, and HPG axes",
                "Compare steroid and peptide hormone mechanisms"
            ],
            ph_regulation: [
                "Explain the importance of pH balance",
                "Describe the three buffer systems",
                "Compare respiratory and renal pH regulation",
                "Identify and distinguish acid-base disorders"
            ],
            blood_pressure: [
                "Explain determinants of blood pressure",
                "Describe short-term and long-term regulation",
                "Explain the baroreceptor reflex and RAAS",
                "Understand hypertension and hypotension"
            ],
            calcium_regulation: [
                "Explain the roles of PTH, calcitonin, and vitamin D",
                "Describe calcium's functions in the body",
                "Understand bone remodeling",
                "Identify disorders of calcium homeostasis"
            ],
            gas_exchange: [
                "Explain the role of chemoreceptors in breathing control",
                "Describe the medullary respiratory centers",
                "Understand responses to hypoxia and hypercapnia",
                "Compare central and peripheral chemoreceptors"
            ],
            stress_response: [
                "Describe the fight-or-flight response",
                "Explain the HPA axis",
                "Compare acute and chronic stress effects",
                "Understand stress management strategies"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand key concepts of this homeostatic system",
            "Apply knowledge to clinical contexts",
            "Make connections to other regulatory systems"
        ];
    }

    identifyPrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            homeostasis_general: [
                "Basic biology (cells, organs, systems)",
                "Understanding of negative feedback"
            ],
            thermoregulation: [
                "Basic homeostasis concepts",
                "Understanding of the hypothalamus",
                "Blood vessel function (vasoconstriction/dilation)"
            ],
            osmoregulation: [
                "Kidney structure and function",
                "Understanding of osmosis and diffusion",
                "Basic hormone function"
            ],
            blood_glucose: [
                "Basic metabolism (glycolysis, gluconeogenesis)",
                "Pancreatic function",
                "Hormone mechanisms"
            ],
            feedback_mechanisms: [
                "Basic homeostasis understanding",
                "Understanding of sensors, control centers, effectors"
            ],
            nervous_regulation: [
                "Basic nervous system anatomy",
                "Understanding of neurons and neurotransmitters",
                "Autonomic nervous system divisions"
            ],
            endocrine_regulation: [
                "Basic endocrine system anatomy",
                "Understanding of hormones",
                "Negative feedback concepts"
            ],
            ph_regulation: [
                "Basic chemistry (acids, bases, pH)",
                "Respiratory and renal function",
                "Buffer concepts"
            ],
            blood_pressure: [
                "Cardiovascular system basics",
                "Understanding of cardiac output and resistance",
                "Kidney function"
            ],
            calcium_regulation: [
                "Bone structure and function",
                "Parathyroid and thyroid glands",
                "Vitamin D metabolism"
            ],
            gas_exchange: [
                "Respiratory system anatomy",
                "Understanding of partial pressures",
                "Medulla oblongata function"
            ],
            stress_response: [
                "Basic neuroendocrine concepts",
                "Sympathetic nervous system",
                "HPA axis basics"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || ["General biology background"];
    }

    generateStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            homeostasis_general: [
                "Draw feedback loop diagrams with all components labeled",
                "Use real-life examples (thermostat) to understand concepts",
                "Create flashcards for homeostatic systems",
                "Practice identifying sensors, control centers, and effectors"
            ],
            thermoregulation: [
                "Make a table comparing heat gain vs. heat loss mechanisms",
                "Draw the thermoregulatory pathways",
                "Use personal experiences (feeling cold/hot) to remember responses",
                "Create mnemonics for sympathetic vs. parasympathetic effects"
            ],
            osmoregulation: [
                "Draw and label a nephron with all processes",
                "Make flowcharts for ADH and aldosterone pathways",
                "Use water bottle analogies for blood volume",
                "Practice calculating osmolarity problems"
            ],
            blood_glucose: [
                "Create a concept map linking all glucose-regulating hormones",
                "Draw opposing effects of insulin and glucagon",
                "Use timeline diagrams for fed/fasted states",
                "Compare Type 1 and Type 2 diabetes in a table"
            ],
            feedback_mechanisms: [
                "Practice drawing feedback loops from scratch",
                "List 5 negative and 2 positive feedback examples",
                "Use arrows to show stimulus-response relationships",
                "Explain feedback loops out loud to solidify understanding"
            ],
            nervous_regulation: [
                "Make a comparison table: sympathetic vs. parasympathetic",
                "Draw reflex arcs with all 5 components",
                "Use 'fight-or-flight' vs. 'rest-and-digest' memory aids",
                "Practice tracing neural pathways on diagrams"
            ],
            endocrine_regulation: [
                "Create hormone flashcards (gland, trigger, effect)",
                "Draw the three major axes (HPA, HPT, HPG)",
                "Make timelines showing hormone speed of action",
                "Group hormones by chemical class (steroid vs. peptide)"
            ],
            ph_regulation: [
                "Practice Henderson-Hasselbalch calculations",
                "Create a table of the four acid-base disorders",
                "Draw buffer system reactions with arrows",
                "Use arterial blood gas interpretation practice problems"
            ],
            blood_pressure: [
                "Draw the baroreceptor reflex pathway",
                "Create flowchart for RAAS system",
                "Make a timeline: seconds (neural) to days (renal)",
                "Practice calculating mean arterial pressure"
            ],
            calcium_regulation: [
                "Draw PTH, calcitonin, and vitamin D effects on bone/kidney/intestine",
                "Create a comparison table of the three hormones",
                "Draw vitamin D activation pathway (skin→liver→kidney)",
                "Make flashcards for calcium disorders"
            ],
            gas_exchange: [
                "Draw respiratory control centers in brainstem",
                "Create a table: central vs. peripheral chemoreceptors",
                "Practice interpreting blood gas values",
                "Use breathing exercises to feel regulation in action"
            ],
            stress_response: [
                "Draw both SAM axis and HPA axis side-by-side",
                "Create timeline: seconds (epinephrine) to hours (cortisol)",
                "List all cortisol effects (metabolic, immune, brain, etc.)",
                "Compare acute vs. chronic stress in a table"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Review material regularly using spaced repetition",
            "Create visual aids and diagrams",
            "Practice active recall with practice questions",
            "Relate concepts to real-world examples and clinical cases"
        ];
    }

    generateAssessmentQuestions() {
        if (!this.currentProblem) return [];

        const questionsDatabase = {
            homeostasis_general: [
                {
                    question: "What are the three main components of a homeostatic control system?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Explain why negative feedback is more common than positive feedback in biological systems.",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Predict what would happen if the negative feedback loop for blood glucose regulation was disrupted.",
                    type: "application",
                    difficulty: "hard"
                }
            ],
            thermoregulation: [
                {
                    question: "What mechanisms does the body use to increase heat production when cold?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Compare and contrast endotherms and ectotherms in terms of thermoregulation strategies.",
                    type: "comparison",
                    difficulty: "medium"
                },
                {
                    question: "Why is sweating ineffective at cooling the body in high humidity conditions?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            blood_glucose: [
                {
                    question: "What are the opposing effects of insulin and glucagon on blood glucose?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Explain what happens to blood glucose levels during the first few hours after a meal.",
                    type: "application",
                    difficulty: "medium"
                },
                {
                    question: "Why do people with Type 1 diabetes require insulin injections, but many with Type 2 can manage with oral medications?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            stress_response: [
                {
                    question: "What are the main hormones released during the fight-or-flight response?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Compare the SAM axis and HPA axis in terms of speed and duration of response.",
                    type: "comparison",
                    difficulty: "medium"
                },
                {
                    question: "Explain how chronic stress can lead to cardiovascular disease.",
                    type: "explanation",
                    difficulty: "hard"
                }
            ]
        };

        return questionsDatabase[this.currentProblem.type] || [
            {
                question: "What are the main concepts of this homeostatic system?",
                type: "recall",
                difficulty: "easy"
            }
        ];
    }

    suggestRelatedTopics() {
        if (!this.currentProblem) return [];

        const relatedTopicsMap = {
            homeostasis_general: ['feedback_mechanisms', 'thermoregulation', 'osmoregulation', 'blood_glucose'],
            thermoregulation: ['homeostasis_general', 'nervous_regulation', 'endocrine_regulation'],
            osmoregulation: ['homeostasis_general', 'blood_pressure', 'endocrine_regulation'],
            blood_glucose: ['homeostasis_general', 'endocrine_regulation', 'stress_response'],
            feedback_mechanisms: ['homeostasis_general', 'nervous_regulation', 'endocrine_regulation'],
            nervous_regulation: ['homeostasis_general', 'thermoregulation', 'stress_response'],
            endocrine_regulation: ['homeostasis_general', 'blood_glucose', 'calcium_regulation', 'stress_response'],
            ph_regulation: ['gas_exchange', 'osmoregulation', 'homeostasis_general'],
            blood_pressure: ['homeostasis_general', 'nervous_regulation', 'osmoregulation'],
            calcium_regulation: ['homeostasis_general', 'endocrine_regulation'],
            gas_exchange: ['ph_regulation', 'homeostasis_general', 'nervous_regulation'],
            stress_response: ['nervous_regulation', 'endocrine_regulation', 'homeostasis_general']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];
        
        return relatedTypes.map(type => ({
            type: type,
            name: this.homeostasisTopics[type]?.name,
            description: this.homeostasisTopics[type]?.description
        }));
    }

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        if (this.currentContent.keyDefinitions) {
            Object.assign(glossary, this.currentContent.keyDefinitions);
        }

        if (this.currentContent.coreComponents) {
            this.currentContent.coreComponents.forEach(comp => {
                glossary[comp.name] = comp.function;
            });
        }

        if (this.currentContent.keyHormones) {
            this.currentContent.keyHormones.forEach(hormone => {
                const name = hormone.hormone || hormone.name;
                glossary[name] = hormone.function;
            });
        }

        return glossary;
    }

    generateProcessTimeline(processName) {
        const timelines = {
            'Thermoregulation': [
                { phase: 'Detection', duration: 'Milliseconds', events: 'Thermoreceptors detect temperature change' },
                { phase: 'Integration', duration: 'Seconds', events: 'Hypothalamus processes information' },
                { phase: 'Rapid Response', duration: 'Seconds to minutes', events: 'Sympathetic activation, shivering/sweating' },
                { phase: 'Hormonal Response', duration: 'Minutes to hours', events: 'Thyroid hormones adjust metabolic rate' }
            ],
            'Blood Glucose Regulation': [
                { stage: 'Detection', duration: 'Minutes', events: 'Pancreatic beta/alpha cells detect glucose change' },
                { stage: 'Hormone Release', duration: 'Minutes', events: 'Insulin or glucagon secreted' },
                { stage: 'Cellular Response', duration: 'Minutes to hours', events: 'Cells respond to hormone signals' },
                { stage: 'Normalization', duration: 'Hours', events: 'Blood glucose returns to normal range' }
            ],
            'Stress Response': [
                { phase: 'Immediate', timeScale: 'Seconds', pathway: 'Sympathetic nervous system + epinephrine', response: 'Fight-or-flight' },
                { phase: 'Short-term', timeScale: 'Minutes', pathway: 'HPA axis begins', response: 'CRH and ACTH released' },
                { phase: 'Sustained', timeScale: '30-60 minutes', pathway: 'Cortisol peak', response: 'Metabolic changes' },
                { phase: 'Recovery', timeScale: 'Hours', pathway: 'Negative feedback', response: 'Return to baseline' }
            ],
            'Baroreceptor Reflex': [
                { step: '1', duration: 'Milliseconds', event: 'Baroreceptors detect pressure change' },
                { step: '2', duration: 'Milliseconds', event: 'Signal to medulla via CN IX and X' },
                { step: '3', duration: 'Seconds', event: 'Autonomic adjustment (sympathetic/parasympathetic)' },
                { step: '4', duration: 'Seconds', event: 'Heart rate and vascular tone change' },
                { step: '5', duration: 'Seconds', event: 'Blood pressure normalized' }
            ]
        };

        return timelines[processName] || [];
    }

    generateContentHierarchy() {
        if (!this.currentContent) return null;

        const hierarchy = {
            root: this.currentContent.topic,
            children: []
        };

        if (this.currentContent.mainCategories) {
            hierarchy.children = this.currentContent.mainCategories.map(cat => ({
                name: cat,
                type: 'category'
            }));
        }

        if (this.currentContent.coreComponents) {
            hierarchy.children.push({
                name: 'Core Components',
                type: 'section',
                count: this.currentContent.coreComponents.length
            });
        }

        if (this.currentContent.keyHormones) {
            hierarchy.children.push({
                name: 'Key Hormones',
                type: 'section',
                count: this.currentContent.keyHormones.length
            });
        }

        if (this.currentContent.mechanisms) {
            hierarchy.children.push({
                name: 'Mechanisms',
                type: 'section',
                count: Array.isArray(this.currentContent.mechanisms) ? 
                    this.currentContent.mechanisms.length : 
                    Object.keys(this.currentContent.mechanisms).length
            });
        }

        return hierarchy;
    }

    // VALIDATION AND UTILITY METHODS

    validateHomeostasisContent(content) {
        const validationResults = {
            isValid: true,
            warnings: [],
            suggestions: []
        };

        if (!content.topic) {
            validationResults.warnings.push("Missing topic title");
            validationResults.isValid = false;
        }

        if (!content.category) {
            validationResults.warnings.push("Missing category classification");
        }

        const hasSubstantiveContent = 
            content.coreComponents || 
            content.keyHormones || 
            content.mechanisms || 
            content.regulatedVariables ||
            content.importance;

        if (!hasSubstantiveContent) {
            validationResults.warnings.push("Limited substantive content");
            validationResults.suggestions.push("Consider adding more detailed information");
        }

        if (!content.clinicalApplications) {
            validationResults.suggestions.push("Consider adding clinical applications");
        }

        return validationResults;
    }

    calculateContentCompleteness() {
        if (!this.currentContent) return 0;

        let score = 0;
        const maxScore = 10;

        if (this.currentContent.topic) score += 1;
        if (this.currentContent.definition || this.currentContent.description) score += 1;
        if (this.currentContent.importance) score += 1;
        if (this.currentContent.clinicalApplications) score += 1;
        
        const hasMainContent = 
            this.currentContent.coreComponents || 
            this.currentContent.keyHormones || 
            this.currentContent.mechanisms ||
            this.currentContent.regulatedVariables;
        if (hasMainContent) score += 3;

        if (this.currentContent.disorders || this.currentContent.acidBaseDisorders) score += 1;
        if (this.currentContent.normalRanges || this.currentContent.normalBloodGasValues) score += 1;
        if (this.currentContent.comparisons || this.currentContent.comparison) score += 1;

        return Math.round((score / maxScore) * 100);
    }

    getContentQualityMetrics() {
        return {
            completeness: this.calculateContentCompleteness(),
            hasExamples: !!this.currentContent?.examples,
            hasComparisons: !!(this.currentContent?.comparisons || this.currentContent?.comparison),
            hasApplications: !!this.currentContent?.clinicalApplications,
            detailLevel: this.explanationLevel,
            includesVisualizations: this.includeVisualizations,
            includesMisconceptions: this.includeCommonMisconceptions
        };
    }

    resetWorkbook() {
        this.currentProblem = null;
        this.currentContent = null;
        this.contentSteps = [];
        this.currentWorkbook = null;
        this.diagramData = null;
    }

    getWorkbookStatus() {
        return {
            hasProblem: !!this.currentProblem,
            hasContent: !!this.currentContent,
            hasWorkbook: !!this.currentWorkbook,
            hasDiagrams: !!this.diagramData,
            contentCompleteness: this.calculateContentCompleteness(),
            qualityMetrics: this.getContentQualityMetrics()
        };
    }

    getAvailableTopics() {
        return Object.entries(this.homeostasisTopics).map(([key, topic]) => ({
            id: key,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
    }

    getTopicDetails(topicId) {
        const topic = this.homeostasisTopics[topicId];
        if (!topic) return null;

        return {
            id: topicId,
            name: topic.name,
            category: topic.category,
            description: topic.description,
            lesson: this.lessons[topicId],
            prerequisites: this.identifyPrerequisites(),
            learningObjectives: this.generateLearningObjectives(),
            relatedTopics: this.suggestRelatedTopics()
        };
    }

    // EXPORT AND FORMATTING METHODS

    formatContentForExport(format = 'json') {
        if (!this.currentContent) return null;

        switch (format) {
            case 'json':
                return JSON.stringify(this.currentContent, null, 2);
            
            case 'markdown':
                return this.convertToMarkdown(this.currentContent);
            
            case 'html':
                return this.convertToHTML(this.currentContent);
            
            default:
                return this.currentContent;
        }
    }

    convertToMarkdown(content) {
        let markdown = `# ${content.topic}\n\n`;

        if (content.definition) {
            markdown += `**Definition:** ${content.definition}\n\n`;
        }

        if (content.importance && Array.isArray(content.importance)) {
            markdown += `## Importance\n\n`;
            content.importance.forEach(item => {
                markdown += `- ${item}\n`;
            });
            markdown += `\n`;
        }

        if (content.keyHormones) {
            markdown += `## Key Hormones\n\n`;
            content.keyHormones.forEach(hormone => {
                const name = hormone.hormone || hormone.name;
                markdown += `### ${name}\n`;
                markdown += `**Source:** ${hormone.source || hormone.producedBy}\n\n`;
                if (hormone.function) markdown += `**Function:** ${hormone.function}\n\n`;
            });
        }

        return markdown;
    }

    convertToHTML(content) {
        let html = `<div class="homeostasis-content">\n`;
        html += `  <h1>${content.topic}</h1>\n`;

        if (content.definition) {
            html += `  <p class="definition"><strong>Definition:</strong> ${content.definition}</p>\n`;
        }

        if (content.importance && Array.isArray(content.importance)) {
            html += `  <section class="importance">\n`;
            html += `    <h2>Importance</h2>\n`;
            html += `    <ul>\n`;
            content.importance.forEach(item => {
                html += `      <li>${item}</li>\n`;
            });
            html += `    </ul>\n`;
            html += `  </section>\n`;
        }

        html += `</div>`;
        return html;
    }

// SEARCH AND FILTER

    searchContent(query) {
        if (!this.currentContent) return null;

        const results = {
            query: query,
            matches: []
        };

        const searchableContent = JSON.stringify(this.currentContent).toLowerCase();
        const queryLower = query.toLowerCase();

        if (searchableContent.includes(queryLower)) {
            if (this.currentContent.keyHormones) {
                this.currentContent.keyHormones.forEach(hormone => {
                    if (JSON.stringify(hormone).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'hormone',
                            name: hormone.hormone || hormone.name,
                            content: hormone
                        });
                    }
                });
            }

            if (this.currentContent.coreComponents) {
                this.currentContent.coreComponents.forEach(comp => {
                    if (JSON.stringify(comp).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'component',
                            name: comp.name,
                            content: comp
                        });
                    }
                });
            }
        }

        return results;
    }

    filterContentByCategory(category) {
        if (!this.currentContent) return null;

        const filtered = {
            category: category,
            items: []
        };

        // Implementation would filter based on category
        return filtered;
    }

    generateContentSummary() {
        if (!this.currentContent) return null;

        const summary = {
            topic: this.currentContent.topic,
            category: this.currentContent.category,
            itemCount: 0,
            keyPoints: [],
            coverage: {}
        };

        if (this.currentContent.coreComponents) {
            summary.itemCount += this.currentContent.coreComponents.length;
            summary.coverage.coreComponents = this.currentContent.coreComponents.length;
        }

        if (this.currentContent.keyHormones) {
            summary.itemCount += this.currentContent.keyHormones.length;
            summary.coverage.keyHormones = this.currentContent.keyHormones.length;
        }

        if (this.currentContent.importance) {
            summary.keyPoints.push(...this.currentContent.importance.slice(0, 3));
        }

        return summary;
    }
}

// Export the class
export default EnhancedHomeostasisRegulationWorkbook;
