// Enhanced Circulatory System Workbook - Comprehensive Cardiovascular Anatomy & Physiology
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry } from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedCirculatorySystemWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "cardiovascular";
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
        
        // Add diagram renderer
        this.diagramRenderer = new BiologyDiagramsRenderer();
        this.includeDiagramsInWorkbook = options.includeDiagrams !== false;
        this.diagramWidth = options.diagramWidth || 800;
        this.diagramHeight = options.diagramHeight || 600;
        this.renderedDiagrams = new Map();
        this.diagramsPromise = null;        
        this.currentExperiment = null;

        // Enhanced explanation options
        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.includeExperiments = options.includeExperiments !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        // Adaptive learning features
        this.adaptiveDifficulty = options.adaptiveDifficulty !== false;
        this.metacognitiveSupport = options.metacognitiveSupport !== false;
        this.contextualLearning = options.contextualLearning !== false;
        this.assessmentFeedback = options.assessmentFeedback !== false;

        // Learning state tracking
        this.learnerProfile = {
            currentLevel: 'intermediate',
            masteredTopics: [],
            strugglingTopics: [],
            preferredLearningStyle: 'visual',
            progressHistory: []
        };

        this.circulatorySymbols = this.initializeCirculatorySymbols();
        this.setThemeColors();
        this.initializeCirculatoryTopics();
        this.initializeCirculatoryLessons();
        this.initializeCirculatoryExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            cardiovascular: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#c62828',
                headerText: '#ffffff',
                sectionBg: '#ffcdd2',
                sectionText: '#b71c1c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#ffebee',
                resultText: '#c62828',
                definitionBg: '#e3f2fd',
                definitionText: '#0d47a1',
                stepBg: '#f3e5f6',
                stepText: '#4a148c',
                borderColor: '#e53935',
                contentBg: '#fff3e0',
                contentText: '#e65100',
                diagramBg: '#fce4ec',
                structureBg: '#e8f5e9',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                arteryBg: '#ffcdd2',
                veinBg: '#bbdefb',
                heartBg: '#f8bbd0',
                bloodBg: '#ffebee'
            },
            anatomy: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#6a1b9a',
                headerText: '#ffffff',
                sectionBg: '#e1bee7',
                sectionText: '#4a148c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#f3e5f6',
                resultText: '#6a1b9a',
                definitionBg: '#e0f2f1',
                definitionText: '#004d40',
                stepBg: '#fff3e0',
                stepText: '#e65100',
                borderColor: '#ab47bc',
                contentBg: '#e8eaf6',
                contentText: '#283593',
                diagramBg: '#fce4ec',
                structureBg: '#e8f5e9',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                arteryBg: '#ffcdd2',
                veinBg: '#bbdefb',
                heartBg: '#f8bbd0',
                bloodBg: '#ffebee'
            }
        };

        this.colors = themes[this.theme] || themes.cardiovascular;
    }

    initializeCirculatorySymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'delta': 'Δ',
            'mu': 'μ',
            
            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            'increase': '↑',
            'decrease': '↓',
            
            // Math symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'approximately': '≈',
            'degree': '°',
            'percent': '%',
            
            // Physiological values
            'mmHg': 'mmHg',
            'bpm': 'bpm',
            'mL': 'mL',
            'L': 'L',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'H2O': 'H₂O',
            'HCO3': 'HCO₃⁻',
            'Ca2+': 'Ca²⁺',
            'K+': 'K⁺',
            'Na+': 'Na⁺',
            'Cl-': 'Cl⁻',
            
            // Heart chambers
            'RA': 'RA (right atrium)',
            'RV': 'RV (right ventricle)',
            'LA': 'LA (left atrium)',
            'LV': 'LV (left ventricle)',
            
            // Blood vessels
            'AV': 'AV (atrioventricular)',
            'SA': 'SA (sinoatrial)',
            
            // Pressure/Flow
            'BP': 'BP (blood pressure)',
            'HR': 'HR (heart rate)',
            'SV': 'SV (stroke volume)',
            'CO': 'CO (cardiac output)',
            'TPR': 'TPR (total peripheral resistance)'
        };
    }

    initializeCirculatoryTopics() {
        this.circulatoryTopics = {
            heart_anatomy: {
                patterns: [
                    /heart.*anatomy|cardiac.*structure/i,
                    /chamber|atrium|ventricle/i,
                    /valve|septum/i,
                    /myocardium|endocardium|pericardium/i
                ],
                handler: this.handleHeartAnatomy.bind(this),
                name: 'Heart Anatomy and Structure',
                category: 'anatomy',
                description: 'Structure of the heart including chambers, valves, and tissue layers',
                difficulty: 'intermediate',
                prerequisites: ['basic_anatomy', 'tissue_types']
            },
            
            cardiac_cycle: {
                patterns: [
                    /cardiac.*cycle|heart.*beat/i,
                    /systole|diastole/i,
                    /contraction|relaxation/i,
                    /lub.*dub|heart.*sound/i
                ],
                handler: this.handleCardiacCycle.bind(this),
                name: 'Cardiac Cycle and Heart Sounds',
                category: 'physiology',
                description: 'Phases of the heartbeat and associated pressure/volume changes',
                difficulty: 'advanced',
                prerequisites: ['heart_anatomy', 'muscle_contraction']
            },
            
            electrical_conduction: {
                patterns: [
                    /electrical.*conduction|cardiac.*conduction/i,
                    /SA.*node|AV.*node|pacemaker/i,
                    /ECG|EKG|electrocardiogram/i,
                    /action.*potential|depolarization/i
                ],
                handler: this.handleElectricalConduction.bind(this),
                name: 'Electrical Conduction System',
                category: 'physiology',
                description: 'Generation and propagation of electrical signals in the heart',
                difficulty: 'advanced',
                prerequisites: ['heart_anatomy', 'action_potentials']
            },
            
            blood_vessels: {
                patterns: [
                    /blood.*vessel|artery|vein|capillary/i,
                    /arteriole|venule/i,
                    /vascular.*system/i,
                    /tunica|endothelium/i
                ],
                handler: this.handleBloodVessels.bind(this),
                name: 'Blood Vessels Structure and Function',
                category: 'anatomy',
                description: 'Types, structure, and functions of blood vessels',
                difficulty: 'intermediate',
                prerequisites: ['tissue_types', 'basic_anatomy']
            },
            
            blood_pressure: {
                patterns: [
                    /blood.*pressure|hypertension|hypotension/i,
                    /systolic|diastolic/i,
                    /baroreceptor|pressure.*regulation/i,
                    /mean.*arterial.*pressure|MAP/i
                ],
                handler: this.handleBloodPressure.bind(this),
                name: 'Blood Pressure and Regulation',
                category: 'physiology',
                description: 'Measurement, regulation, and clinical significance of blood pressure',
                difficulty: 'advanced',
                prerequisites: ['blood_vessels', 'cardiac_cycle']
            },
            
            blood_flow: {
                patterns: [
                    /blood.*flow|circulation|hemodynamic/i,
                    /cardiac.*output|stroke.*volume/i,
                    /resistance|viscosity/i,
                    /systemic.*circulation|pulmonary.*circulation/i
                ],
                handler: this.handleBloodFlow.bind(this),
                name: 'Blood Flow and Hemodynamics',
                category: 'physiology',
                description: 'Principles of blood flow, cardiac output, and circulatory pathways',
                difficulty: 'advanced',
                prerequisites: ['heart_anatomy', 'blood_vessels', 'physics_basics']
            },
            
            blood_composition: {
                patterns: [
                    /blood.*composition|blood.*component/i,
                    /plasma|serum/i,
                    /red.*blood.*cell|RBC|erythrocyte/i,
                    /white.*blood.*cell|WBC|leukocyte/i,
                    /platelet|thrombocyte|clotting/i
                ],
                handler: this.handleBloodComposition.bind(this),
                name: 'Blood Composition and Functions',
                category: 'hematology',
                description: 'Components of blood and their physiological roles',
                difficulty: 'intermediate',
                prerequisites: ['cell_biology', 'basic_chemistry']
            }
        };
    }

    initializeCirculatoryLessons() {
        this.lessons = {
            heart_anatomy: {
                title: "Heart Anatomy and Structure: The Cardiac Pump",
                concepts: [
                    "The heart is a four-chambered muscular organ that pumps blood",
                    "Right side pumps deoxygenated blood to lungs (pulmonary circulation)",
                    "Left side pumps oxygenated blood to body (systemic circulation)",
                    "Valves ensure unidirectional blood flow",
                    "Heart wall has three layers: endocardium, myocardium, epicardium"
                ],
                theory: "The human heart is a sophisticated dual pump that maintains two separate circulations: pulmonary (to lungs) and systemic (to body). Understanding heart anatomy is essential for comprehending cardiovascular physiology and pathology.",
                keyDefinitions: {
                    "Atrium": "Upper chamber of heart that receives blood (plural: atria)",
                    "Ventricle": "Lower chamber of heart that pumps blood out",
                    "Septum": "Wall dividing left and right sides of heart",
                    "Valve": "Structure preventing backflow of blood",
                    "Myocardium": "Cardiac muscle layer (thickest layer)",
                    "Endocardium": "Inner lining of heart chambers",
                    "Epicardium": "Outer layer of heart (visceral pericardium)",
                    "Pericardium": "Fibroserous sac surrounding heart",
                    "Coronary Vessels": "Blood vessels supplying the heart muscle itself"
                },
                chambers: {
                    rightAtrium: {
                        receives: "Deoxygenated blood from body",
                        inflow: ["Superior vena cava (from upper body)", "Inferior vena cava (from lower body)", "Coronary sinus (from heart muscle)"],
                        outflow: "Right ventricle (through tricuspid valve)",
                        pressure: "Low pressure (~0-8 mmHg)",
                        specialStructures: "SA node (pacemaker), AV node"
                    },
                    rightVentricle: {
                        receives: "Deoxygenated blood from right atrium",
                        inflow: "Right atrium (through tricuspid valve)",
                        outflow: "Pulmonary trunk (through pulmonary valve) → lungs",
                        pressure: "~25/0 mmHg (systolic/diastolic)",
                        wallThickness: "Thinner than left ventricle",
                        shape: "Crescent-shaped in cross-section"
                    },
                    leftAtrium: {
                        receives: "Oxygenated blood from lungs",
                        inflow: "Four pulmonary veins (2 from each lung)",
                        outflow: "Left ventricle (through mitral/bicuspid valve)",
                        pressure: "Low pressure (~0-12 mmHg)",
                        wallThickness: "Slightly thicker than right atrium"
                    },
                    leftVentricle: {
                        receives: "Oxygenated blood from left atrium",
                        inflow: "Left atrium (through mitral valve)",
                        outflow: "Aorta (through aortic valve) → systemic circulation",
                        pressure: "~120/0 mmHg (systolic/diastolic)",
                        wallThickness: "Thickest chamber (8-12 mm) - must generate high pressure",
                        shape: "Circular in cross-section",
                        importance: "Main pumping chamber for systemic circulation"
                    }
                },
                valves: {
                    atrioventricularValves: {
                        tricuspidValve: {
                            location: "Between right atrium and right ventricle",
                            leaflets: "Three cusps/leaflets",
                            function: "Prevents backflow into right atrium during ventricular contraction",
                            support: "Chordae tendineae and papillary muscles"
                        },
                        mitralValve: {
                            location: "Between left atrium and left ventricle",
                            leaflets: "Two cusps/leaflets (bicuspid)",
                            function: "Prevents backflow into left atrium during ventricular contraction",
                            support: "Chordae tendineae and papillary muscles",
                            note: "Most common valve affected in disease"
                        },
                        mechanism: {
                            opening: "Pressure in atrium > pressure in ventricle (during diastole)",
                            closing: "Pressure in ventricle > pressure in atrium (during systole)",
                            support: "Papillary muscles contract to prevent valve prolapse into atria"
                        }
                    },
                    semilunarValves: {
                        pulmonaryValve: {
                            location: "Between right ventricle and pulmonary trunk",
                            leaflets: "Three semilunar cusps",
                            function: "Prevents backflow into right ventricle during diastole",
                            noChordseTendineae: "Does not require chordae (different structure)"
                        },
                        aorticValve: {
                            location: "Between left ventricle and aorta",
                            leaflets: "Three semilunar cusps",
                            function: "Prevents backflow into left ventricle during diastole",
                            coronaryOrigin: "Coronary arteries arise from aortic sinuses (cusps)",
                            note: "High pressure valve - prone to calcification with age"
                        },
                        mechanism: {
                            opening: "Ventricular pressure > arterial pressure (during systole)",
                            closing: "Arterial pressure > ventricular pressure (during diastole)",
                            pocketShape: "Cusps fill with blood and close passively"
                        }
                    }
                },
                heartWall: {
                    layers: {
                        endocardium: {
                            composition: "Simple squamous epithelium (endothelium) + thin connective tissue",
                            location: "Lines inner surface of all chambers",
                            continuous: "Continuous with endothelium of blood vessels",
                            function: "Smooth surface reduces friction, prevents clotting"
                        },
                        myocardium: {
                            composition: "Cardiac muscle tissue",
                            thickness: "Varies by chamber: LV (8-12mm) > RV (3-5mm) > atria (2-3mm)",
                            arrangement: "Spiral/circular bundles, intercalated discs",
                            function: "Contraction to pump blood",
                            properties: "Involuntary, striated, branched cells, gap junctions"
                        },
                        epicardium: {
                            composition: "Mesothelium + connective tissue",
                            alsoKnown: "Visceral layer of serous pericardium",
                            contains: "Coronary blood vessels, adipose tissue, nerves",
                            function: "Protective outer layer, reduces friction"
                        }
                    },
                    pericardium: {
                        fibrousPericardium: {
                            type: "Tough, inelastic outer sac",
                            attachment: "Anchored to diaphragm and great vessels",
                            function: "Protects heart, prevents overdistension"
                        },
                        serousPericardium: {
                            parietalLayer: "Lines fibrous pericardium",
                            visceralLayer: "Epicardium (on heart surface)",
                            pericardialCavity: "Space between layers with serous fluid (~15-50 mL)",
                            function: "Lubricates, reduces friction during heartbeat"
                        },
                        clinicalNote: "Pericardial effusion (excess fluid) or tamponade (compression) can be life-threatening"
                    }
                },
                coronaryCirculation: {
                    arteries: {
                        rightCoronary: {
                            origin: "Right aortic sinus",
                            supplies: "Right atrium, right ventricle, SA node (60%), AV node (90%), inferior LV",
                            branches: "Marginal artery, posterior descending artery (PDA)"
                        },
                        leftCoronary: {
                            origin: "Left aortic sinus",
                            mainBranches: {
                                LAD: "Left anterior descending - supplies anterior LV, septum",
                                circumflex: "Supplies lateral and posterior LV, left atrium"
                            }
                        },
                        filling: "During diastole (when heart relaxes) - unique to coronary circulation",
                        clinicalSignificance: "Blockage causes myocardial infarction (heart attack)"
                    },
                    veins: {
                        coronarySinus: "Main venous drainage → right atrium",
                        greatCardiacVein: "Drains anterior heart",
                        middleCardiacVein: "Drains posterior heart",
                        smallCardiacVein: "Drains right side"
                    }
                },
                applications: [
                    "Understanding heart murmurs (valve defects)",
                    "Diagnosing congenital heart defects (septal defects, valve abnormalities)",
                    "Planning cardiac surgery (valve replacement, bypass)",
                    "Interpreting cardiac imaging (echocardiography, MRI, CT)",
                    "Understanding myocardial infarction patterns based on coronary anatomy"
                ]
            },

            cardiac_cycle: {
                title: "Cardiac Cycle: The Rhythmic Heartbeat",
                concepts: [
                    "Cardiac cycle is one complete heartbeat (systole + diastole)",
                    "Systole = contraction phase, Diastole = relaxation phase",
                    "Atria and ventricles contract at different times",
                    "Pressure gradients drive valve opening and closing",
                    "Heart sounds (lub-dub) correspond to valve closures"
                ],
                theory: "The cardiac cycle is the sequence of mechanical and electrical events that occur during one heartbeat. Understanding pressure-volume relationships and timing is crucial for interpreting normal and abnormal cardiac function.",
                keyDefinitions: {
                    "Cardiac Cycle": "All events from one heartbeat to the next (~0.8 sec at 75 bpm)",
                    "Systole": "Contraction phase (ventricular ejection)",
                    "Diastole": "Relaxation phase (ventricular filling)",
                    "Stroke Volume (SV)": "Volume of blood ejected per beat (~70 mL)",
                    "End-Diastolic Volume (EDV)": "Volume in ventricle before contraction (~120 mL)",
                    "End-Systolic Volume (ESV)": "Volume remaining after contraction (~50 mL)",
                    "Ejection Fraction (EF)": "SV/EDV × 100% (normal ~55-70%)",
                    "Preload": "Degree of stretch before contraction (related to EDV)",
                    "Afterload": "Resistance ventricle must overcome to eject blood"
                },
                phases: {
                    phase1_AtrialSystole: {
                        name: "Atrial Systole (Late Diastole)",
                        timing: "Last 0.1 sec of diastole",
                        events: [
                            "Atria contract (P wave on ECG)",
                            "AV valves open (tricuspid, mitral)",
                            "Additional blood pushed into ventricles (~30% of filling)",
                            "Ventricles passively filled ~70% already"
                        ],
                        pressures: {
                            atrial: "Increases slightly (~8-10 mmHg LA, 4-6 mmHg RA)",
                            ventricular: "Increases to ~8-12 mmHg (LV)"
                        },
                        valveStatus: "AV valves open, semilunar valves closed",
                        contribution: "Contributes 20-30% of ventricular filling ('atrial kick')",
                        clinicalNote: "Lost in atrial fibrillation → reduced cardiac output"
                    },
                    phase2_IsovolumetricContraction: {
                        name: "Isovolumetric Contraction (Early Systole)",
                        timing: "~0.05 sec",
                        events: [
                            "Ventricles begin contraction (QRS complex on ECG)",
                            "Ventricular pressure rises sharply",
                            "AV valves snap shut (S1 'lub' sound)",
                            "All valves closed - no blood ejected yet",
                            "Rapid pressure increase, no volume change"
                        ],
                        pressures: {
                            leftVentricle: "Increases from ~12 mmHg to ~80 mmHg",
                            rightVentricle: "Increases from ~4 mmHg to ~15 mmHg"
                        },
                        valveStatus: "All valves closed",
                        volumeChange: "Zero (isovolumetric = same volume)",
                        firstHeartSound: "S1 = 'lub' (AV valve closure)"
                    },
                    phase3_VentricularEjection: {
                        name: "Ventricular Ejection (Mid-Late Systole)",
                        timing: "~0.3 sec",
                        subdivisions: {
                            rapidEjection: "First 1/3 - rapid blood outflow",
                            reducedEjection: "Last 2/3 - slower ejection"
                        },
                        events: [
                            "Ventricular pressure exceeds arterial pressure",
                            "Semilunar valves open (aortic, pulmonary)",
                            "Blood ejected into aorta and pulmonary trunk",
                            "~60% of EDV ejected (stroke volume ~70 mL)"
                        ],
                        pressures: {
                            leftVentricle: "Peaks at ~120 mmHg (systolic BP)",
                            aorta: "Rises to ~120 mmHg",
                            rightVentricle: "Peaks at ~25 mmHg",
                            pulmonaryArtery: "Rises to ~25 mmHg"
                        },
                        valveStatus: "Semilunar valves open, AV valves closed",
                        volumeChange: "Decreases from ~130 mL (EDV) to ~60 mL (ESV)"
                    },
                    phase4_IsovolumetricRelaxation: {
                        name: "Isovolumetric Relaxation (Early Diastole)",
                        timing: "~0.08 sec",
                        events: [
                            "Ventricles relax (T wave on ECG)",
                            "Ventricular pressure drops below arterial pressure",
                            "Semilunar valves snap shut (S2 'dub' sound)",
                            "All valves closed again",
                            "Rapid pressure decrease, no volume change"
                        ],
                        pressures: {
                            leftVentricle: "Drops from ~120 mmHg to ~0 mmHg",
                            aorta: "Falls to ~80 mmHg (diastolic BP)"
                        },
                        valveStatus: "All valves closed",
                        volumeChange: "Zero (isovolumetric)",
                        secondHeartSound: "S2 = 'dub' (semilunar valve closure)",
                        splitting: "A2 (aortic) before P2 (pulmonary) - heard on inspiration"
                    },
                    phase5_VentricularFilling: {
                        name: "Ventricular Filling (Mid-Late Diastole)",
                        timing: "~0.4 sec (longest phase)",
                        subdivisions: {
                            rapidFilling: "First 1/3 - rapid passive filling (~70% of total)",
                            reducedFilling: "Middle 1/3 - slower passive filling (diastasis)",
                            atrialSystole: "Last 1/3 - active filling (~30%)"
                        },
                        events: [
                            "Atrial pressure exceeds ventricular pressure",
                            "AV valves open",
                            "Blood flows from atria to ventricles (passive)",
                            "Ventricles fill to ~70% capacity passively"
                        ],
                        pressures: {
                            atrial: "Higher than ventricular (drives filling)",
                            ventricular: "Low (~0-5 mmHg initially)"
                        },
                        valveStatus: "AV valves open, semilunar valves closed",
                        volumeChange: "Increases from ~60 mL (ESV) to ~120-130 mL (EDV)",
                        thirdHeartSound: "S3 (if present) = rapid filling, normal in children/young adults",
                        fourthHeartSound: "S4 (if present) = atrial contraction, abnormal (stiff ventricle)"
                    }
                },
                heartSounds: {
                    S1: {
                        name: "First heart sound ('lub')",
                        cause: "Closure of AV valves (mitral and tricuspid)",
                        timing: "Beginning of systole (isovolumetric contraction)",
                        components: "M1 (mitral) before T1 (tricuspid)",
                        loudest: "Apex of heart (5th intercostal space, midclavicular line)",
                        abnormalities: "Split S1 (bundle branch block), loud S1 (mitral stenosis)"
                    },
                    S2: {
                        name: "Second heart sound ('dub')",
                        cause: "Closure of semilunar valves (aortic and pulmonary)",
                        timing: "Beginning of diastole (isovolumetric relaxation)",
                        components: "A2 (aortic) before P2 (pulmonary)",
                        physiologicSplitting: "Inspiration delays P2 (increased venous return to right heart)",
                        loudest: "Base of heart (2nd intercostal space)",
                        abnormalities: "Fixed splitting (ASD), paradoxical splitting (LBBB)"
                    },
                    S3: {
                        name: "Third heart sound (ventricular gallop)",
                        cause: "Rapid ventricular filling",
                        timing: "Early diastole (after S2)",
                        normal: "Children, young adults, pregnancy",
                        pathological: "Heart failure (volume overload)",
                        sound: "Ken-tuc-ky (lub-dub-ta)"
                    },
                    S4: {
                        name: "Fourth heart sound (atrial gallop)",
                        cause: "Forceful atrial contraction into stiff ventricle",
                        timing: "Late diastole (before S1)",
                        normal: "Never normal",
                        pathological: "Ventricular hypertrophy, ischemia, hypertension",
                        sound: "Ten-nes-see (ta-lub-dub)"
                    },
                    murmurs: {
                        systolic: "Mitral regurgitation, aortic stenosis, VSD",
                        diastolic: "Mitral stenosis, aortic regurgitation",
                        continuous: "Patent ductus arteriosus"
                    }
                },
                pressureVolumeLoop: {
                    description: "Graph of LV pressure vs LV volume through cardiac cycle",
                    phases: [
                        "Ventricular filling: volume increases, pressure low (bottom right)",
                        "Isovolumetric contraction: pressure increases, volume constant (right side up)",
                        "Ejection: pressure high, volume decreases (top left)",
                        "Isovolumetric relaxation: pressure decreases, volume constant (left side down)"
                    ],
                    area: "Area inside loop = stroke work (external work done by heart)",
                    clinicalUse: "Assess contractility, preload, afterload effects"
                },
                determinantsOfCardiacOutput: {
                    cardiacOutput: {
                        definition: "Volume of blood pumped by heart per minute",
                        formula: "CO = HR × SV",
                        normalValue: "~5 L/min at rest",
                        heartRate: "70-80 bpm at rest",
                        strokeVolume: "~70 mL"
                    },
                    strokeVolume: {
                        formula: "SV = EDV - ESV",
                        determinants: {
                            preload: {
                                definition: "Degree of ventricular stretch before contraction (related to EDV)",
                                frankStarling: "↑ preload → ↑ SV (up to a point)",
                                mechanism: "Optimal sarcomere length for contraction",
                                factors: "Venous return, blood volume, body position"
                            },
                            contractility: {
                                definition: "Intrinsic strength of contraction (independent of preload)",
                                positive: "Sympathetic stimulation (norepinephrine, epinephrine), digitalis, Ca²⁺",
                                negative: "Parasympathetic, acidosis, hypoxia, heart failure",
                                measure: "Ejection fraction (EF = SV/EDV)"
                            },
                            afterload: {
                                definition: "Resistance ventricle must overcome to eject blood",
                                determinants: "Arterial blood pressure, aortic valve stenosis",
                                effect: "↑ afterload → ↓ SV (harder to eject)",
                                clinical: "ACE inhibitors reduce afterload → ↑ SV in heart failure"
                            }
                        }
                    },
                    heartRate: {
                        autonomicControl: {
                            sympathetic: "↑ HR (via β₁ receptors, norepinephrine)",
                            parasympathetic: "↓ HR (via M₂ receptors, acetylcholine)"
                        },
                        factors: "Exercise, stress, temperature, hormones (thyroid), ions (K⁺, Ca²⁺)"
                    }
                },
                applications: [
                    "Diagnosing valvular heart disease (murmurs, abnormal sounds)",
                    "Assessing heart failure (ejection fraction, S3/S4 gallops)",
                    "Understanding echocardiography findings",
                    "Timing of cardiac interventions (valve replacement)",
                    "Pharmacological effects on cardiac function (inotropes, vasodilators)"
                ]
            },

            electrical_conduction: {
                title: "Electrical Conduction System and ECG",
                concepts: [
                    "Heart has intrinsic conduction system (autorhythmic cells)",
                    "SA node is the primary pacemaker (~70 bpm)",
                    "Electrical signal spreads: SA node → atria → AV node → bundle of His → Purkinje fibers",
                    "ECG records electrical activity from body surface",
                    "Action potentials in cardiac muscle are different from skeletal muscle"
                ],
                theory: "The heart's electrical system coordinates rhythmic contraction. Understanding electrical conduction is essential for interpreting ECGs and diagnosing arrhythmias.",
                keyDefinitions: {
                    "Autorhythmicity": "Ability to generate rhythmic action potentials without external stimulation",
                    "Pacemaker": "Cell or tissue that sets heart rate",
                    "SA Node": "Sinoatrial node - primary pacemaker in right atrium",
                    "AV Node": "Atrioventricular node - slows conduction between atria and ventricles",
                    "ECG/EKG": "Electrocardiogram - recording of heart's electrical activity",
                    "Depolarization": "Change in membrane potential from negative to positive (inside)",
                    "Repolarization": "Return to resting membrane potential",
                    "Refractory Period": "Time when cell cannot be re-excited"
                },
                conductionPathway: {
                    step1_SANode: {
                        location: "Right atrium near superior vena cava",
                        firingRate: "70-80 bpm (sets heart rate)",
                        role: "Primary pacemaker",
                        innervation: "Sympathetic (↑ rate) and parasympathetic (↓ rate)",
                        mechanism: "Slow spontaneous depolarization (pacemaker potential)"
                    },
                    step2_AtrialConduction: {
                        pathway: "Through atrial muscle (no specialized tracts in humans)",
                        result: "Both atria contract simultaneously",
                        speed: "~1 m/s",
                        ECG: "P wave"
                    },
                    step3_AVNode: {
                        location: "Floor of right atrium near tricuspid valve",
                        firingRate: "40-60 bpm (if SA node fails)",
                        role: "Secondary pacemaker, delays signal (~0.1 sec)",
                        purpose: "Allows atria to contract before ventricles (atrial kick)",
                        conduction: "Slowest conduction in heart",
                        ECG: "PR interval (includes AV node delay)"
                    },
                    step4_BundleOfHis: {
                        location: "Interventricular septum",
                        branches: "Left and right bundle branches",
                        leftBundle: "Further divides into anterior and posterior fascicles",
                        speed: "Fast conduction",
                        note: "Only electrical connection between atria and ventricles"
                    },
                    step5_PurkinjeFibers: {
                        location: "Ventricular walls (subendocardial)",
                        firingRate: "20-40 bpm (if SA and AV nodes fail)",
                        role: "Tertiary pacemaker, rapid distribution to ventricles",
                        speed: "4 m/s (fastest in heart)",
                        result: "Nearly simultaneous ventricular contraction (apex → base)",
                        ECG: "QRS complex"
                    }
                },
                actionPotentials: {
                    pacemakerCells: {
                        restingPotential: "Unstable (~-60 mV)",
                        phases: {
                            phase4: "Pacemaker potential - slow spontaneous depolarization (funny current If, Ca²⁺ influx)",
                            phase0: "Depolarization (Ca²⁺ channels open)",
                            phase3: "Repolarization (K⁺ channels open, Ca²⁺ close)"
                        },
                        noPlateau: "No plateau phase (unlike contractile cells)",
                        automaticity: "Self-excitable due to phase 4"
                    },
                    contractileCardiacMuscle: {
                        restingPotential: "Stable (~-90 mV)",
                        phases: {
                            phase0: "Rapid depolarization (fast Na⁺ channels open)",
                            phase1: "Early repolarization (Na⁺ close, transient K⁺ open)",
                            phase2: "Plateau (Ca²⁺ influx balances K⁺ efflux) - UNIQUE TO CARDIAC",
                            phase3: "Repolarization (K⁺ efflux, Ca²⁺ close)",
                            phase4: "Resting potential (restored by Na⁺/K⁺ pump)"
                        },
                        duration: "~250-300 ms (much longer than skeletal muscle ~1-2 ms)",
                        refractoryPeriod: "Long (~250 ms) - prevents tetanus (sustained contraction)",
                        coupling: "Ca²⁺ influx triggers Ca²⁺ release from SR (Ca²⁺-induced Ca²⁺ release)"
                    }
                },
                ECG: {
                    principle: "Detects voltage changes on body surface due to heart's electrical activity",
                    leads: {
                        standard: "12-lead ECG (standard clinical)",
                        limbLeads: "I, II, III (bipolar), aVR, aVL, aVF (augmented unipolar)",
                        chestLeads: "V1-V6 (precordial, unipolar)"
                    },
                    waves: {
                        Pwave: {
                            represents: "Atrial depolarization",
                            duration: "0.08-0.10 sec",
                            amplitude: "< 0.25 mV",
                            abnormalities: "Absent (atrial fibrillation), tall (right atrial enlargement), wide (left atrial enlargement)"
                        },
                        QRScomplex: {
                            represents: "Ventricular depolarization",
                            duration: "0.06-0.10 sec",
                            components: {
                                Qwave: "First negative deflection",
                                Rwave: "First positive deflection",
                                Swave: "Negative deflection after R"
                            },
                            amplitude: "Variable (largest in V2-V3)",
                            abnormalities: "Wide QRS (bundle branch block, ventricular origin), tall (ventricular hypertrophy)"
                        },
                        Twave: {
                            represents: "Ventricular repolarization",
                            direction: "Usually same direction as QRS",
                            abnormalities: "Inverted (ischemia, strain), peaked (hyperkalemia), flat (hypokalemia)"
                        },
                        Uwave: {
                            represents: "Repolarization of Purkinje fibers (or papillary muscles)",
                            usually: "Not visible or very small",
                            abnormal: "Prominent in hypokalemia"
                        }
                    },
                    intervals: {
                        PRinterval: {
                            measurement: "Start of P to start of QRS",
                            duration: "0.12-0.20 sec",
                            represents: "Atrial depolarization + AV node delay",
                            abnormalities: "Short (<0.12) in pre-excitation, long (>0.20) in AV block"
                        },
                        QRSduration: {
                            measurement: "Start to end of QRS",
                            duration: "0.06-0.10 sec",
                            abnormalities: "Wide (>0.12) in bundle branch block or ventricular rhythms"
                        },
                        QTinterval: {
                            measurement: "Start of QRS to end of T",
                            duration: "~0.35-0.44 sec (varies with heart rate)",
                            corrected: "QTc = QT / √RR (corrects for heart rate)",
                            represents: "Total ventricular depolarization + repolarization",
                            abnormalities: "Prolonged QT → risk of torsades de pointes (fatal arrhythmia)",
                            causes: "Drugs, electrolyte imbalance, congenital long QT syndrome"
                        },
                        STsegment: {
                            measurement: "End of QRS to start of T",
                            normal: "Isoelectric (flat, at baseline)",
                            abnormalities: {
                                elevation: "Myocardial infarction (STEMI), pericarditis",
                                depression: "Ischemia, strain, digoxin effect"
                            }
                        }
                    },
                    heartRate: {
                        calculation: "300 / (number of large boxes between R waves)",
                        alternative: "1500 / (number of small boxes between R waves)",
                        normalSinus: "60-100 bpm",
                        tachycardia: "> 100 bpm",
                        bradycardia: "< 60 bpm"
                    },
                    rhythm: {
                        normalSinusRhythm: "Regular, P before every QRS, normal PR and QRS",
                        arrhythmias: {
                            atrialFibrillation: "Irregularly irregular, no P waves, atrial rate ~400-600",
                            atrialFlutter: "Sawtooth pattern, atrial rate ~250-350",
                            ventricularTachycardia: "Wide QRS, rate 100-250",
                            ventricularFibrillation: "Chaotic, no organized rhythm (fatal if untreated)"
                        }
                    }
                },
                applications: [
                    "Diagnosing arrhythmias and conduction blocks",
                    "Detecting myocardial infarction (STEMI vs NSTEMI)",
                    "Monitoring electrolyte imbalances (K⁺, Ca²⁺)",
                    "Assessing drug effects (digitalis, antiarrhythmics)",
                    "Pre-operative cardiac risk assessment",
                    "Pacemaker programming and function checks"
                ]
            },

            blood_vessels: {
                title: "Blood Vessels: Structure and Function",
                concepts: [
                    "Blood vessels form a closed circulatory system",
                    "Arteries carry blood away from heart (high pressure)",
                    "Veins return blood to heart (low pressure)",
                    "Capillaries are sites of exchange between blood and tissues",
                    "Vessel structure reflects function"
                ],
                theory: "Blood vessels are specialized tubes that transport blood throughout the body. Their structure is precisely adapted to their function, from high-pressure arteries to thin-walled capillaries optimized for exchange.",
                keyDefinitions: {
                    "Artery": "Vessel carrying blood away from heart",
                    "Vein": "Vessel carrying blood toward heart",
                    "Capillary": "Smallest vessel; site of exchange",
                    "Tunica Intima": "Innermost layer (endothelium)",
                    "Tunica Media": "Middle layer (smooth muscle, elastic fibers)",
                    "Tunica Externa": "Outer layer (connective tissue)",
                    "Vasoconstriction": "Narrowing of vessel lumen (smooth muscle contracts)",
                    "Vasodilation": "Widening of vessel lumen (smooth muscle relaxes)",
                    "Compliance": "Ability to expand with increased pressure"
                },
                vesselTypes: {
                    elasticArteries: {
                        examples: "Aorta, pulmonary trunk, common carotid, subclavian",
                        diameter: "Large (>1 cm)",
                        wallStructure: {
                            intima: "Endothelium + subendothelial connective tissue",
                            media: "THICK with abundant elastic fibers (elastic lamellae)",
                            externa: "Thin, connective tissue with vasa vasorum"
                        },
                        function: "Conduct blood, dampen pressure pulsations (windkessel effect)",
                        pressure: "High pressure, pulsatile (~120/80 mmHg in aorta)",
                        compliance: "High (stretches during systole, recoils during diastole)",
                        clinicalNote: "Atherosclerosis, aneurysm, aortic dissection"
                    },
                    muscularArteries: {
                        examples: "Brachial, radial, femoral, coronary",
                        diameter: "Medium (0.3-1 cm)",
                        wallStructure: {
                            intima: "Endothelium + internal elastic lamina",
                            media: "THICK with abundant smooth muscle (up to 40 layers)",
                            externa: "External elastic lamina + connective tissue"
                        },
                        function: "Distribute blood, regulate flow (vasoconstriction/dilation)",
                        pressure: "High, less pulsatile than elastic arteries",
                        control: "Sympathetic innervation (vasoconstriction)",
                        clinicalNote: "Coronary artery disease, peripheral arterial disease"
                    },
                    arterioles: {
                        diameter: "Small (10-100 μm)",
                        wallStructure: {
                            intima: "Endothelium",
                            media: "1-3 layers of smooth muscle",
                            externa: "Thin"
                        },
                        function: "Primary site of resistance (regulate blood flow to capillary beds)",
                        pressure: "Drops significantly across arterioles (~85 → 35 mmHg)",
                        control: {
                            neural: "Sympathetic (vasoconstriction)",
                            local: "Metabolites (CO₂, H⁺, adenosine → vasodilation)",
                            hormonal: "Angiotensin II (constriction), ANP (dilation)"
                        },
                        clinicalNote: "Main determinant of total peripheral resistance (TPR)"
                    },
                    capillaries: {
                        diameter: "5-10 μm (just large enough for RBCs to pass single-file)",
                        wallStructure: "Single layer of endothelial cells + basement membrane",
                        noPropria: "No tunica media or externa",
                        types: {
                            continuous: {
                                structure: "Uninterrupted endothelium, tight junctions",
                                location: "Muscle, skin, lungs, CNS",
                                permeability: "Low (small molecules only)",
                                BBB: "Blood-brain barrier is continuous capillaries with very tight junctions"
                            },
                            fenestrated: {
                                structure: "Pores (fenestrations) in endothelium",
                                location: "Kidneys (glomeruli), intestines, endocrine glands",
                                permeability: "High (small proteins can pass)"
                            },
                            sinusoid: {
                                structure: "Large gaps, discontinuous basement membrane",
                                location: "Liver, bone marrow, spleen",
                                permeability: "Very high (cells and large proteins pass)"
                            }
                        },
                        function: "Exchange of O₂, CO₂, nutrients, wastes",
                        mechanisms: {
                            diffusion: "O₂, CO₂ (lipid-soluble)",
                            filtration: "Fluid moves out (arterial end, high pressure)",
                            reabsorption: "Fluid returns (venous end, low pressure, oncotic pressure)",
                            transcytosis: "Large molecules in vesicles"
                        },
                        starlingForces: {
                            hydrostatic: "Blood pressure pushes fluid out",
                            oncotic: "Plasma proteins pull fluid in",
                            netFiltration: "Out at arterial end, in at venous end"
                        },
                        clinicalNote: "Edema if imbalance (heart failure, low albumin)"
                    },
                    venules: {
                        diameter: "10-100 μm",
                        wallStructure: "Thin, similar to capillaries (some smooth muscle)",
                        function: "Collect blood from capillaries",
                        permeability: "High (inflammation site - leukocyte migration)"
                    },
                    veins: {
                        diameter: "Variable (up to 3 cm for vena cava)",
                        wallStructure: {
                            intima: "Endothelium",
                            media: "THIN (less smooth muscle than arteries)",
                            externa: "THICK (most prominent layer)"
                        },
                        function: "Return blood to heart (capacitance vessels - hold ~60% of blood)",
                        pressure: "Low (~15 mmHg in peripheral veins, ~0 in vena cava)",
                        valves: "One-way valves (prevent backflow in limbs)",
                        compliance: "High (easily expand to hold more blood)",
                        bloodReturn: {
                            musclePump: "Skeletal muscle contraction squeezes veins",
                            respiratoryPump: "Breathing creates pressure gradients",
                            sympathetic: "Venoconstriction increases venous return"
                        },
                        clinicalNote: "Varicose veins (valve failure), deep vein thrombosis (DVT)"
                    }
                },
                arteriesVsVeins: {
                    comparison: [
                        {feature: "Direction", artery: "Away from heart", vein: "Toward heart"},
                        {feature: "Pressure", artery: "High (~120/80 mmHg)", vein: "Low (~15 mmHg)"},
                        {feature: "Tunica Media", artery: "Thick (smooth muscle, elastic)", vein: "Thin"},
                        {feature: "Tunica Externa", artery: "Thin", vein: "Thick"},
                        {feature: "Lumen", artery: "Smaller, round", vein: "Larger, irregular (collapsed)"},
                        {feature: "Valves", artery: "None (except at heart)", vein: "Present in limbs"},
                        {feature: "Oxygenation", artery: "Usually oxygenated*", vein: "Usually deoxygenated*"},
                        {feature: "Pulsatile", artery: "Yes (can feel pulse)", vein: "No"}
                    ],
                    exceptions: "*Pulmonary arteries carry deoxygenated blood; pulmonary veins carry oxygenated blood"
                },
                specialCirculations: {
                    cerebral: {
                        feature: "Circle of Willis (anastomoses)",
                        BBB: "Tight junctions protect brain",
                        autoregulation: "Maintains constant flow despite BP changes"
                    },
                    coronary: {
                        filling: "During diastole (when heart relaxes)",
                        dominance: "Right dominant (70%), left dominant (10%), codominant (20%)",
                        collaterals: "Limited (risk of infarction if blocked)"
                    },
                    hepatic: {
                        dualSupply: "Hepatic artery (O₂) + portal vein (nutrients from GI)",
                        sinusoids: "Allow exchange, hepatocyte processing"
                    },
                    renal: {
                        highFlow: "20% of cardiac output to <1% of body mass",
                        autoregulation: "Maintains GFR",
                        fenestrated: "Glomerular capillaries for filtration"
                    }
                },
                applications: [
                    "Understanding hypertension (increased resistance in arterioles)",
                    "Diagnosing peripheral vascular disease (arterial blockages)",
                    "Preventing deep vein thrombosis (venous stasis)",
                    "Designing vascular grafts and stents",
                    "Understanding edema formation (capillary exchange)",
                    "Diagnosing varicose veins (venous valve incompetence)"
                ]
            },

            blood_pressure: {
                title: "Blood Pressure and Cardiovascular Regulation",
                concepts: [
                    "Blood pressure = force of blood against vessel walls",
                    "Systolic = peak pressure during ventricular contraction",
                    "Diastolic = lowest pressure during ventricular relaxation",
                    "Mean arterial pressure (MAP) = average pressure in arteries",
                    "BP is regulated by cardiac output, peripheral resistance, and blood volume"
                ],
                theory: "Blood pressure is essential for tissue perfusion but must be carefully regulated. Understanding BP regulation is crucial for managing hypertension and cardiovascular disease.",
                keyDefinitions: {
                    "Systolic BP": "Maximum pressure during ventricular systole (normal ~120 mmHg)",
                    "Diastolic BP": "Minimum pressure during ventricular diastole (normal ~80 mmHg)",
                    "Pulse Pressure": "Systolic - Diastolic (normal ~40 mmHg)",
                    "Mean Arterial Pressure (MAP)": "Average pressure in arteries (≈ diastolic + 1/3 pulse pressure)",
                    "Hypertension": "Chronic high BP (≥130/80 mmHg by current guidelines)",
                    "Hypotension": "Abnormally low BP (symptomatic, typically <90/60 mmHg)",
                    "Baroreceptor": "Pressure sensor in blood vessels",
                    "Total Peripheral Resistance (TPR)": "Total resistance to blood flow in systemic circulation"
                },
                measurement: {
                    method: "Sphygmomanometer (blood pressure cuff) + stethoscope",
                    procedure: [
                        "Inflate cuff above systolic pressure (artery occluded, no sound)",
                        "Slowly deflate cuff",
                        "First sound (Korotkoff sound) = systolic pressure",
                        "Last sound = diastolic pressure",
                        "No sound after = artery fully open"
                    ],
                    korotkoffSounds: {
                        phase1: "First appearance of sounds (systolic BP)",
                        phase2: "Murmurs/swishing sounds",
                        phase3: "Sounds become crisper",
                        phase4: "Sounds become muffled",
                        phase5: "Sounds disappear (diastolic BP)"
                    },
                    site: "Brachial artery (upper arm)",
                    position: "Sitting, arm at heart level, after 5 min rest",
                    whiteCoat: "Elevated BP in clinical setting (anxiety)"
                },
                determinants: {
                    cardiacOutput: {
                        formula: "CO = HR × SV",
                        effect: "↑ CO → ↑ BP (more blood pumped)",
                        factors: "Heart rate, stroke volume, contractility"
                    },
                    peripheralResistance: {
                        formula: "R ∝ (8 × viscosity × length) / (π × radius⁴)",
                        effect: "↑ TPR → ↑ BP (harder to push blood through)",
                        mainDeterminant: "Arteriole radius (resistance ∝ 1/r⁴)",
                        factors: "Sympathetic tone, local metabolites, hormones"
                    },
                    bloodVolume: {
                        effect: "↑ volume → ↑ BP (more blood to push)",
                        regulation: "Kidneys (RAAS, ADH)",
                        factors: "Fluid intake, salt intake, renal function"
                    },
                    relationship: "BP = CO × TPR (simplified)"
                },
                regulation: {
                    shortTerm_NeuralBaroreceptorReflex: {
                        timeScale: "Seconds to minutes",
                        baroreceptors: {
                            location: "Carotid sinus, aortic arch",
                            stimulus: "Stretch (increased pressure)",
                            response: "Increased firing → inhibit sympathetic, stimulate parasympathetic"
                        },
                        reflexArc: [
                            "↑ BP → baroreceptors stretch → ↑ firing",
                            "Afferents to medulla (NTS, nucleus tractus solitarius)",
                            "↓ Sympathetic outflow, ↑ parasympathetic",
                            "Result: ↓ HR, ↓ contractility, vasodilation → ↓ BP"
                        ],
                        reverse: "↓ BP → ↓ baroreceptor firing → ↑ sympathetic → ↑ BP",
                        adaptation: "Baroreceptors adapt to chronic hypertension (reset to higher baseline)"
                    },
                    shortTerm_Chemoreceptors: {
                        location: "Carotid and aortic bodies",
                        stimulus: "↓ O₂, ↑ CO₂, ↓ pH",
                        response: "↑ sympathetic → vasoconstriction, ↑ BP",
                        primary: "Respiratory control (secondary for BP)"
                    },
                    intermediate_Hormonal: {
                        timeScale: "Minutes to hours",
                        epinephrine: {
                            source: "Adrenal medulla (sympathetic stimulation)",
                            effects: {
                                beta1: "↑ HR, ↑ contractility (heart)",
                                beta2: "Vasodilation (skeletal muscle, coronary)",
                                alpha1: "Vasoconstriction (skin, viscera)"
                            },
                            netEffect: "↑ CO, variable TPR → ↑ BP"
                        },
                        angiotensinII: {
                            source: "RAAS (renin-angiotensin-aldosterone system)",
                            triggers: "↓ BP, ↓ renal perfusion, sympathetic stimulation",
                            pathway: "Renin (kidney) → angiotensinogen → angiotensin I → ACE (lungs) → angiotensin II",
                            effects: [
                                "Vasoconstriction (↑ TPR)",
                                "Aldosterone release (↑ Na⁺/H₂O retention → ↑ volume)",
                                "ADH release (↑ H₂O retention)",
                                "Sympathetic activation"
                            ],
                            netEffect: "↑ BP (both CO and TPR)"
                        },
                        ADH: {
                            alsoKnown: "Vasopressin",
                            source: "Posterior pituitary",
                            triggers: "↑ osmolality, ↓ blood volume, angiotensin II",
                            effects: "↑ H₂O reabsorption (kidneys) → ↑ volume → ↑ BP",
                            highDoses: "Vasoconstriction (V1 receptors)"
                        },
                        ANP: {
                            name: "Atrial Natriuretic Peptide",
                            source: "Atrial myocytes (when stretched)",
                            trigger: "↑ blood volume, ↑ atrial pressure",
                            effects: [
                                "↑ Na⁺ excretion (kidneys)",
                                "Vasodilation",
                                "Inhibit renin, aldosterone, ADH"
                            ],
                            netEffect: "↓ volume, ↓ TPR → ↓ BP"
                        }
                    },
                    longTerm_Renal: {
                        timeScale: "Days to weeks",
                        mechanism: "Pressure natriuresis/diuresis",
                        principle: "↑ BP → ↑ renal perfusion → ↑ Na⁺/H₂O excretion → ↓ volume → ↓ BP",
                        dominance: "Long-term BP control is primarily renal",
                        hypertension: "Often involves impaired renal Na⁺ excretion"
                    },
                    local_Autoregulation: {
                        metabolic: "↑ metabolism → ↑ CO₂, ↓ O₂, ↑ H⁺, ↑ adenosine → vasodilation",
                        myogenic: "↑ stretch → vasoconstriction (maintain constant flow)",
                        endothelial: {
                            NO: "Nitric oxide - potent vasodilator",
                            endothelin: "Vasoconstrictor",
                            prostacyclin: "Vasodilator, inhibits platelet aggregation"
                        }
                    }
                },
                clinicalClassification: {
                    normal: "< 120/80 mmHg",
                    elevated: "120-129/<80 mmHg",
                    stage1Hypertension: "130-139/80-89 mmHg",
                    stage2Hypertension: "≥140/90 mmHg",
                    hypertensiveCrisis: ">180/120 mmHg (emergency)",
                    hypotension: "<90/60 mmHg (if symptomatic)"
                },
                pathophysiology: {
                    primaryHypertension: {
                        prevalence: "90-95% of cases",
                        causes: "Unknown (essential hypertension)",
                        riskFactors: "Age, genetics, obesity, salt, stress, inactivity",
                        mechanisms: "↑ TPR, ↑ CO, impaired Na⁺ excretion, RAAS activation"
                    },
                    secondaryHypertension: {
                        prevalence: "5-10% of cases",
                        causes: {
                            renal: "Chronic kidney disease, renal artery stenosis",
                            endocrine: "Primary aldosteronism, Cushing's, pheochromocytoma",
                            vascular: "Coarctation of aorta",
                            drugs: "NSAIDs, oral contraceptives, cocaine"
                        }
                    },
                    consequences: {
                        cardiovascular: "LV hypertrophy, heart failure, coronary disease",
                        cerebrovascular: "Stroke, hemorrhage",
                        renal: "Chronic kidney disease, renal failure",
                        vascular: "Aneurysm, peripheral arterial disease",
                        retinal: "Hypertensive retinopathy, vision loss"
                    }
                },
                treatment: {
                    lifestyle: "Weight loss, exercise, low sodium diet, limit alcohol, stress management",
                    medications: {
                        diuretics: "↓ volume (thiazides, loop diuretics)",
                        ACEinhibitors: "Block ACE → ↓ angiotensin II",
                        ARBs: "Block angiotensin II receptors",
                        calciumChannelBlockers: "Vasodilation, ↓ contractility",
                        betaBlockers: "↓ HR, ↓ contractility, ↓ renin"
                    }
                },
                applications: [
                    "Diagnosing and managing hypertension",
                    "Assessing cardiovascular risk",
                    "Monitoring drug effects",
                    "Detecting shock and hypotension",
                    "Perioperative hemodynamic management"
                ]
            },

            blood_flow: {
                title: "Blood Flow and Hemodynamics",
                concepts: [
                    "Blood flow is driven by pressure gradients",
                    "Flow = ΔP / Resistance (Ohm's law analog)",
                    "Resistance depends primarily on vessel radius (r⁴ relationship)",
                    "Systemic and pulmonary circulations are in series",
                    "Cardiac output equals venous return at steady state"
                ],
                theory: "Understanding hemodynamics requires applying principles of fluid physics to the circulatory system. Blood flow, pressure, and resistance are interrelated by fundamental equations.",
                keyDefinitions: {
                    "Blood Flow (Q)": "Volume of blood passing a point per unit time (mL/min or L/min)",
                    "Pressure Gradient (ΔP)": "Difference in pressure between two points (drives flow)",
                    "Resistance (R)": "Opposition to blood flow",
                    "Laminar Flow": "Smooth, layered flow (normal in most vessels)",
                    "Turbulent Flow": "Chaotic flow (stenosis, high velocity)",
                    "Viscosity": "Thickness of fluid (resistance to flow)",
                    "Cardiac Output (CO)": "Volume pumped by heart per minute",
                    "Venous Return (VR)": "Volume returning to heart per minute"
                },
                fundamentalEquations: {
                    flowEquation: {
                        formula: "Q = ΔP / R",
                        analog: "Ohm's law: I = V / R",
                        meaning: "Flow is proportional to pressure gradient, inversely proportional to resistance"
                    },
                    poiseuillesLaw: {
                        formula: "R = (8 × η × L) / (π × r⁴)",
                        variables: {
                            eta: "η = viscosity",
                            L: "L = length of vessel",
                            r: "r = radius of vessel"
                        },
                        combining: "Q = (ΔP × π × r⁴) / (8 × η × L)",
                        criticalInsight: "Flow ∝ r⁴ (doubling radius → 16× flow!)",
                        physiological: "Arterioles regulate flow by changing radius"
                    },
                    continuity: {
                        principle: "Flow in = Flow out (conservation of mass)",
                        formula: "Q = A × v (Area × velocity)",
                        consequence: "Narrow vessels → high velocity, wide vessels → low velocity",
                        aorta: "Large area, high velocity (~30 cm/s)",
                        capillaries: "Total area largest, lowest velocity (~0.03 cm/s - allows exchange)"
                    },
                    cardiacOutput: {
                        formula: "CO = HR × SV",
                        typical: "~5 L/min at rest (70 bpm × 70 mL)",
                        exercise: "Can increase to ~25-35 L/min",
                        index: "CI = CO / BSA (body surface area) - normalizes for body size"
                    },
                    MAP: {
                        formula: "MAP ≈ Diastolic + 1/3(Systolic - Diastolic)",
                        alternative: "MAP = CO × TPR",
                        typical: "~93 mmHg (for 120/80 BP)",
                        importance: "Drives tissue perfusion"
                    }
                },
                circulatoryCircuits: {
                    systemicCirculation: {
                        path: "LV → aorta → arteries → arterioles → capillaries → venules → veins → vena cava → RA",
                        function: "Deliver O₂/nutrients to tissues, remove CO₂/wastes",
                        pressure: "High (~120/80 mmHg in aorta → ~0 mmHg in vena cava)",
                        resistance: "High (TPR)",
                        flow: "~5 L/min (= cardiac output)"
                    },
                    pulmonaryCirculation: {
                        path: "RV → pulmonary trunk → pulmonary arteries → lung capillaries → pulmonary veins → LA",
                        function: "Oxygenate blood, remove CO₂",
                        pressure: "Low (~25/10 mmHg in pulmonary artery)",
                        resistance: "Low (~1/10 of systemic)",
                        flow: "~5 L/min (same as systemic - in series)",
                        advantage: "Low pressure prevents fluid leakage into alveoli"
                    },
                    seriesVsParallel: {
                        series: "Systemic and pulmonary are in series (flow through both is equal)",
                        parallel: "Organs within systemic circulation are in parallel",
                        parallelAdvantages: [
                            "Each organ receives oxygenated blood",
                            "Flow to each organ can be regulated independently",
                            "Total resistance is less than individual resistances"
                        ]
                    }
                },
                distributionOfBloodFlow: {
                    atRest: {
                        brain: "13% (~700 mL/min) - constant",
                        heart: "4% (~250 mL/min) - high per gram",
                        kidneys: "20% (~1100 mL/min) - filtration",
                        liver: "25% (~1350 mL/min) - dual supply",
                        skeletalmuscle: "20% (~1000 mL/min)",
                        skin: "5% (~250 mL/min) - thermoregulation",
                        GI: "20% (~1000 mL/min)",
                        other: "~3%"
                    },
                    exercise: {
                        brain: "Constant (~700 mL/min, smaller %)",
                        heart: "↑↑ (up to 5× increase)",
                        skeletalmuscle: "↑↑↑↑ (up to 80% of CO)",
                        skin: "↑ (if hot) or ↓ (if need blood elsewhere)",
                        GI: "↓ (vasoconstriction)",
                        kidneys: "↓ (can tolerate temporary reduction)"
                    },
                    mechanisms: {
                        intrinsic: "Local metabolic control (autoregulation)",
                        extrinsic: "Sympathetic nervous system, hormones"
                    }
                },
                pressureChanges: {
                    aorta: "~120/80 mmHg (mean ~95)",
                    largeArteries: "~120/80 mmHg (pulse propagates)",
                    arterioles: "~85 → 35 mmHg (BIGGEST PRESSURE DROP - site of resistance)",
                    capillaries: "~35 → 15 mmHg (gradual drop)",
                    venules: "~15 mmHg",
                    veins: "~15 → 0 mmHg",
                    venaCava: "~0-5 mmHg",
                    rightAtrium: "~0 mmHg"
                },
                velocityChanges: {
                    principle: "v = Q / A (velocity inversely proportional to total cross-sectional area)",
                    aorta: "High velocity (~30 cm/s), small area",
                    arteries: "Decreasing velocity as total area increases",
                    capillaries: "Lowest velocity (~0.03 cm/s), LARGEST total area - allows time for exchange",
                    veins: "Velocity increases as area decreases",
                    venaCava: "Moderate velocity (~15 cm/s)"
                },
                factorsAffectingFlow: {
                    radius: {
                        effect: "r⁴ relationship - MOST IMPORTANT",
                        example: "50% reduction in radius → 94% reduction in flow",
                        regulation: "Vasoconstriction/dilation by smooth muscle"
                    },
                    viscosity: {
                        determinants: "Hematocrit (RBC %), temperature, plasma proteins",
                        normal: "~3-4× water",
                        pathological: "Polycythemia (↑ RBCs) → ↑ viscosity → ↓ flow",
                        temperature: "Cold → ↑ viscosity"
                    },
                    length: {
                        effect: "↑ length → ↓ flow",
                        constant: "Vessel length relatively constant (except in growth/obesity)"
                    }
                },
                reynoldsNumber: {
                    definition: "Predicts laminar vs turbulent flow",
                    formula: "Re = (ρ × v × d) / η (density × velocity × diameter / viscosity)",
                    threshold: "Re < 2000 = laminar, Re > 3000 = turbulent",
                    turbulence: {
                        causes: "High velocity, large diameter, low viscosity, irregular surfaces",
                        sites: "Aorta (high velocity), stenotic valves, atherosclerotic plaques",
                        consequences: "Murmurs, bruits, increased work, endothelial damage"
                    }
                },
                venousReturn: {
                    importance: "VR determines preload → affects SV (Frank-Starling)",
                    steadyState: "CO = VR (what goes out must come back)",
                    mechanisms: {
                        musclePump: {
                            mechanism: "Skeletal muscle contraction compresses veins",
                            valves: "Prevent backflow → unidirectional toward heart",
                            importance: "Crucial in legs (against gravity)"
                        },
                        respiratoryPump: {
                            inspiration: "↓ intrathoracic pressure → ↑ pressure gradient → ↑ VR",
                            expiration: "Opposite",
                            netEffect: "Breathing facilitates venous return"
                        },
                        sympatheticVenoconstriction: {
                            mechanism: "Sympathetic → vein constriction → ↓ venous volume → ↑ VR",
                            capacitance: "Veins hold ~60% of blood - mobilizing this increases VR"
                        },
                        atrialSuction: {
                            mechanism: "Atrial relaxation creates negative pressure",
                            minor: "Small contribution"
                        }
                    },
                    impediments: {
                        gravity: "Standing → blood pools in legs → ↓ VR → orthostatic hypotension",
                        tamponade: "Pericardial fluid compresses heart → ↓ VR",
                        positivePventilation: "↑ intrathoracic pressure → ↓ VR"
                    }
                },
                applications: [
                    "Understanding shock (cardiogenic, hypovolemic, distributive)",
                    "Optimizing fluid resuscitation",
                    "Interpreting hemodynamic monitoring (Swan-Ganz catheter)",
                    "Designing vascular prosthetics",
                    "Understanding exercise physiology",
                    "Managing heart failure (preload/afterload manipulation)"
                ]
            },

            blood_composition: {
                title: "Blood Composition and Functions",
                concepts: [
                    "Blood is a connective tissue composed of cells + plasma",
                    "Plasma = water + proteins + electrolytes + nutrients + wastes",
                    "RBCs transport O₂ and CO₂",
                    "WBCs defend against infection",
                    "Platelets facilitate blood clotting",
                    "Hematocrit = % of blood volume occupied by RBCs"
                ],
                theory: "Blood is a complex fluid tissue that transports substances, regulates pH and temperature, and protects against infection and hemorrhage. Understanding blood composition is fundamental to hematology and clinical medicine.",
                keyDefinitions: {
                    "Blood": "Specialized connective tissue; cells suspended in plasma",
                    "Plasma": "Liquid portion of blood (~55% of volume)",
                    "Serum": "Plasma without clotting factors (after coagulation)",
                    "Hematocrit": "% of blood volume occupied by RBCs (♂ 42-52%, ♀ 37-47%)",
                    "Hemoglobin": "O₂-carrying protein in RBCs",
                    "Leukocytes": "White blood cells (defend against infection)",
                    "Thrombocytes": "Platelets (cell fragments for clotting)",
                    "Hemostasis": "Process of blood clot formation"
                },
                composition: {
                    plasma: {
                        percentage: "~55% of blood volume",
                        appearance: "Clear, straw-colored (yellowish)",
                        composition: {
                            water: "~92%",
                            proteins: "~7% (by weight)",
                            other: "~1% (electrolytes, nutrients, gases, wastes, hormones)"
                        },
                        proteins: {
                            albumin: {
                                percentage: "~60% of plasma proteins (3.5-5 g/dL)",
                                source: "Liver",
                                functions: [
                                    "Maintain osmotic pressure (prevents edema)",
                                    "Transport fatty acids, hormones, drugs",
                                    "pH buffering"
                                ],
                                clinical: "↓ albumin (malnutrition, liver disease) → edema"
                            },
                            globulins: {
                                percentage: "~36% of plasma proteins",
                                types: {
                                    alpha: "Transport proteins (lipoproteins, hormone-binding)",
                                    beta: "Transport proteins (transferrin for iron, lipoproteins)",
                                    gamma: "Antibodies (immunoglobulins: IgG, IgA, IgM, IgD, IgE)"
                                },
                                source: "Liver (alpha, beta), B lymphocytes (gamma)",
                                functions: "Transport, immune defense"
                            },
                            fibrinogen: {
                                percentage: "~4% of plasma proteins (200-400 mg/dL)",
                                source: "Liver",
                                function: "Converted to fibrin during clotting",
                                clinical: "Essential for hemostasis"
                            },
                            other: "Clotting factors, complement proteins, enzymes, hormones"
                        },
                        electrolytes: {
                            cations: "Na⁺ (135-145 mEq/L), K⁺ (3.5-5 mEq/L), Ca²⁺ (8.5-10.5 mg/dL), Mg²⁺",
                            anions: "Cl⁻ (95-105 mEq/L), HCO₃⁻ (22-28 mEq/L), phosphate, sulfate",
                            functions: "Osmotic balance, nerve/muscle function, pH buffering"
                        },
                        nutrients: "Glucose (70-100 mg/dL), amino acids, lipids, vitamins",
                        gases: "O₂ (~20 mL/dL total, mostly in RBCs), CO₂ (~50 mL/dL, mostly as HCO₃⁻), N₂",
                        wastes: "Urea, uric acid, creatinine, bilirubin, ammonia"
                    },
                    formedElements: {
                        percentage: "~45% of blood volume (hematocrit)",
                        erythrocytes: {
                            name: "Red blood cells (RBCs)",
                            count: "♂ 4.5-6.0 million/μL, ♀ 4.0-5.5 million/μL",
                            structure: {
                                shape: "Biconcave disc (7-8 μm diameter)",
                                advantage: "↑ surface area for gas exchange, flexible (squeeze through capillaries)",
                                nucleus: "None (mature RBCs - anucleate)",
                                organelles: "None (no mitochondria - anaerobic metabolism)",
                                cytoplasm: "Packed with hemoglobin (~280 million molecules/cell)"
                            },
                            hemoglobin: {
                                structure: "4 polypeptide chains (2α, 2β) + 4 heme groups (Fe²⁺)",
                                function: "Binds O₂ (4 O₂ per Hb molecule)",
                                concentration: "♂ 14-18 g/dL, ♀ 12-16 g/dL",
                                variants: {
                                    HbA: "Adult hemoglobin (α₂β₂) - 97%",
                                    HbA2: "α₂δ₂ - 2%",
                                    HbF: "Fetal hemoglobin (α₂γ₂) - <1% in adults, higher O₂ affinity"
                                },
                                oxygenation: "Hb + O₂ ⇌ HbO₂ (oxyhemoglobin - bright red)",
                                deoxygenation: "HbO₂ → Hb (deoxyhemoglobin - dark red/purple)"
                            },
                            lifespan: "~120 days",
                            destruction: "Spleen and liver (macrophages phagocytose old RBCs)",
                            production: {
                                site: "Red bone marrow (hematopoiesis)",
                                stimulus: "Erythropoietin (EPO) from kidneys (in response to hypoxia)",
                                requirements: "Iron, vitamin B₁₂, folic acid, amino acids"
                            },
                            disorders: {
                                anemia: "↓ RBC count or ↓ Hb (iron deficiency, B₁₂/folate deficiency, chronic disease, hemolysis)",
                                polycythemia: "↑ RBC count (dehydration, high altitude, polycythemia vera)",
                                sickleCellDisease: "Abnormal Hb (HbS) → RBCs sickle → pain, organ damage"
                            }
                        },
                        leukocytes: {
                            name: "White blood cells (WBCs)",
                            count: "4,000-11,000/μL",
                            function: "Immune defense, inflammation",
                            lifespan: "Hours to years (depends on type)",
                            mobility: "Can leave bloodstream (diapedesis) → tissues",
                            types: {
                                granulocytes: {
                                    neutrophils: {
                                        percentage: "50-70% of WBCs (2,500-7,000/μL)",
                                        nucleus: "Multi-lobed (3-5 lobes)",
                                        granules: "Lysosomes, defensins, myeloperoxidase",
                                        function: "Phagocytosis (bacteria, fungi)",
                                        lifespan: "Hours to days",
                                        clinical: "First responders to infection, pus cells"
                                    },
                                    eosinophils: {
                                        percentage: "1-4% of WBCs (100-400/μL)",
                                        nucleus: "Bi-lobed",
                                        granules: "Cytotoxic enzymes (major basic protein)",
                                        function: "Defense against parasites, allergic reactions",
                                        clinical: "↑ in parasitic infections, asthma, allergies"
                                    },
                                    basophils: {
                                        percentage: "<1% of WBCs (<100/μL)",
                                        nucleus: "Bi-lobed or irregular",
                                        granules: "Histamine, heparin",
                                        function: "Allergic/inflammatory responses",
                                        related: "Similar to mast cells in tissues"
                                    }
                                },
                                agranulocytes: {
                                    lymphocytes: {
                                        percentage: "20-40% of WBCs (1,500-3,000/μL)",
                                        nucleus: "Large, round",
                                        types: {
                                            Tcells: "Cell-mediated immunity (destroy infected cells, coordinate immune response)",
                                            Bcells: "Antibody production (humoral immunity)",
                                            NKcells: "Kill infected/cancer cells"
                                        },
                                        lifespan: "Days to years (memory cells)",
                                        clinical: "↑ in viral infections, lymphoma, leukemia"
                                    },
                                    monocytes: {
                                        percentage: "2-8% of WBCs (200-800/μL)",
                                        nucleus: "Kidney-shaped",
                                        function: "Phagocytosis, differentiate into macrophages/dendritic cells in tissues",
                                        lifespan: "Months to years (as macrophages)",
                                        clinical: "↑ in chronic infections, inflammation"
                                    }
                                }
                            },
                            disorders: {
                                leukopenia: "↓ WBC count (immunosuppression, chemotherapy, viral infections)",
                                leukocytosis: "↑ WBC count (infection, inflammation, leukemia)",
                                leukemia: "Cancer of WBCs (uncontrolled production)"
                            }
                        },
                        thrombocytes: {
                            name: "Platelets (cell fragments from megakaryocytes)",
                            count: "150,000-400,000/μL",
                            size: "2-4 μm (smallest blood cells)",
                            structure: "No nucleus, contain granules (ADP, serotonin, Ca²⁺, clotting factors)",
                            lifespan: "~10 days",
                            production: "Bone marrow (from megakaryocytes, stimulated by thrombopoietin)",
                            function: "Hemostasis (blood clotting)",
                            mechanism: {
                                adhesion: "Stick to damaged vessel wall (via von Willebrand factor)",
                                activation: "Release granules (ADP, thromboxane A₂) → recruit more platelets",
                                aggregation: "Form platelet plug (primary hemostasis)",
                                coagulation: "Provide surface for coagulation cascade → fibrin clot (secondary hemostasis)"
                            },
                            disorders: {
                                thrombocytopenia: "↓ platelet count (<100,000/μL) → bleeding risk (ITP, chemotherapy, DIC)",
                                thrombocytosis: "↑ platelet count (>450,000/μL) → clotting risk",
                                dysfunction: "von Willebrand disease, aspirin (inhibits function)"
                            }
                        }
                    }
                },
                hemostasis: {
                    definition: "Process of stopping bleeding",
                    phases: {
                        vascularSpasm: {
                            timing: "Immediate (<1 sec)",
                            mechanism: "Smooth muscle in vessel wall contracts",
                            duration: "Seconds to minutes",
                            purpose: "↓ blood loss, allows time for clotting"
                        },
                        plateletPlugFormation: {
                            timing: "Seconds to minutes",
                            steps: [
                                "Platelet adhesion (to collagen via vWF)",
                                "Platelet activation (release granules)",
                                "Platelet aggregation (fibrinogen cross-links)"
                            ],
                            result: "Platelet plug (white clot)",
                            purpose: "Temporary seal"
                        },
                        coagulation: {
                            timing: "Minutes",
                            pathways: {
                                intrinsic: "Initiated by exposed collagen (measured by aPTT)",
                                extrinsic: "Initiated by tissue factor (measured by PT/INR)",
                                common: "Both converge → thrombin → fibrinogen → fibrin"
                            },
                            cascade: [
                                "Clotting factors activate in sequence (amplification)",
                                "Factor X → thrombin (Factor IIa)",
                                "Thrombin cleaves fibrinogen → fibrin monomers",
                                "Factor XIII cross-links fibrin → stable clot (red clot)"
                            ],
                            result: "Fibrin mesh traps RBCs → blood clot",
                            regulation: {
                                antithrombin: "Inhibits thrombin and other factors",
                                proteinC_S: "Inactivate factors Va and VIIIa",
                                tissueFactorPathwayInhibitor: "Inhibits extrinsic pathway"
                            }
                        },
                        fibrinolysis: {
                            timing: "Hours to days",
                            mechanism: "Plasminogen → plasmin (breaks down fibrin)",
                            activators: "tPA (tissue plasminogen activator)",
                            purpose: "Dissolve clot after repair, prevent excessive clotting",
                            clinical: "tPA used to treat acute MI and stroke"
                        }
                    },
                    disorders: {
                        hemophilia: "Deficiency of clotting factors (VIII, IX) → bleeding",
                        vonWillebrandDisease: "Deficiency of vWF → impaired platelet adhesion",
                        DIC: "Disseminated intravascular coagulation → widespread clotting + bleeding",
                        thrombosis: "Inappropriate clot formation (DVT, PE, MI, stroke)"
                    }
                },
                bloodTypes: {
                    ABOsystem: {
                        antigens: "A, B, or both on RBC surface (determined by genes)",
                        antibodies: "Plasma contains antibodies against foreign antigens",
                        types: {
                            A: "A antigen, anti-B antibodies",
                            B: "B antigen, anti-A antibodies",
                            AB: "A and B antigens, no antibodies (universal recipient)",
                            O: "No antigens, anti-A and anti-B antibodies (universal donor)"
                        },
                        transfusion: "Must match to prevent agglutination (clumping)",
                        clinical: "ABO incompatibility → hemolytic transfusion reaction (fatal)"
                    },
                    Rhfactor: {
                        antigen: "Rh (D) antigen present (+) or absent (-)",
                        antibodies: "Rh- individuals develop anti-Rh after exposure to Rh+",
                        prevalence: "~85% Rh+, ~15% Rh-",
                        clinical: {
                            transfusion: "Rh- can receive Rh- only; Rh+ can receive both",
                            pregnancy: "Rh- mother + Rh+ fetus → risk of hemolytic disease (prevented by RhoGAM)"
                        }
                    }
                },
                applications: [
                    "Blood transfusions and type matching",
                    "Diagnosing anemia and infections (CBC with differential)",
                    "Monitoring anticoagulation therapy (warfarin, heparin)",
                    "Detecting clotting disorders (PT, aPTT, platelet count)",
                    "Bone marrow transplantation",
                    "Understanding hematologic malignancies (leukemia, lymphoma)"
                ]
            }
        };
    }

    initializeCirculatoryExperiments() {
        this.circulatoryExperiments = {
            
            // ========================================
            // EXPERIMENT 1: WILLIAM HARVEY - CIRCULATION OF BLOOD
            // ========================================
            
            harvey_circulation: {
                name: "William Harvey's Demonstration of Blood Circulation",
                relatedTopics: ['blood_flow', 'heart_anatomy', 'blood_vessels'],
                category: 'physiology',
                historicalBackground: {
                    scientist: "William Harvey",
                    year: "1628",
                    publication: "De Motu Cordis (On the Motion of the Heart and Blood)",
                    context: "Before Harvey, Galenic theory held that blood was produced in liver, consumed by tissues, and flowed in two separate systems",
                    revolutionaryIdea: "Blood circulates in a closed loop: heart → arteries → tissues → veins → heart",
                    evidence: [
                        "Quantitative argument: Heart pumps too much blood to be continuously produced/consumed",
                        "Valves in veins allow flow only toward heart",
                        "Ligatures (tourniquets) demonstrate arterial vs venous flow direction"
                    ],
                    calculation: {
                        heartRate: "~72 bpm",
                        strokeVolume: "~2 oz (~60 mL) - Harvey's estimate",
                        perHour: "72 × 60 × 2 oz = 8,640 oz = 540 lbs of blood/hour!",
                        conclusion: "Body doesn't contain this much blood → must be recirculating"
                    },
                    significance: "Foundation of modern cardiovascular physiology",
                    quote: "I began to think whether there might not be a motion, as it were, in a circle",
                    resistance: "Theory initially rejected (contrary to 1400 years of Galenic medicine)",
                    acceptance: "Confirmed by Malpighi's discovery of capillaries (1661) - completed the circuit"
                },
                labExperiment: {
                    title: "Demonstration of Venous Valves and Unidirectional Blood Flow",
                    hypothesis: "Valves in veins ensure blood flows in one direction only (toward the heart), supporting Harvey's circulation theory",
                    purpose: "Demonstrate presence and function of venous valves using Harvey's classic arm experiments",
                    background: {
                        galenic: "Blood thought to ebb and flow in vessels like tides",
                        harvey: "Blood circulates continuously in one direction",
                        veins: "Have valves (arteries do not)",
                        valves: "Pocket-like structures that prevent backflow"
                    },
                    variables: {
                        independent: "Direction of pressure applied to vein",
                        dependent: "Ability to push blood through vein",
                        controlled: ["Person (arm used)", "Vein tested", "Applied pressure"]
                    },
                    materials: [
                        "Human volunteer (yourself or partner)",
                        "Tourniquet or blood pressure cuff (optional)",
                        "Good lighting",
                        "Marker or pen (optional - to mark veins)",
                        "Ruler (optional - to measure vein segments)",
                        "Camera (optional - to document observations)"
                    ],
                    safetyPrecautions: [
                        "Do not use tourniquet for >1 minute",
                        "Stop immediately if pain, excessive discomfort, or numbness",
                        "Do not perform on individuals with circulatory disorders or recent venipuncture",
                        "Wash hands before and after"
                    ],
                    procedure: [
                        "PREPARATION:",
                        "Have volunteer sit comfortably with arm extended on table",
                        "Locate prominent superficial veins on forearm (dorsal hand or forearm veins work best)",
                        "Veins are most visible if arm hangs down for 1-2 min first, then raised to table height",
                        "",
                        "EXPERIMENT 1: Visualizing Venous Valves (Harvey's Figure 1)",
                        "Apply tourniquet or cuff to upper arm (moderate tightness - occlude veins but not arteries)",
                        "Wait 30-60 seconds for veins to engorge (swell with blood)",
                        "Observe veins - note bulges/swellings at regular intervals along vein (these are valves)",
                        "Mark locations of valve bulges with pen",
                        "Measure distances between valves (typically 2-5 cm apart)",
                        "Release tourniquet",
                        "",
                        "EXPERIMENT 2: Demonstrating Unidirectional Flow (Harvey's Figure 2)",
                        "Apply tourniquet again to engorge veins",
                        "Select prominent vein segment between two valve bulges",
                        "Place one finger on vein just BELOW (distal to) lower valve bulge",
                        "With other finger, STROKE vein UPWARD (toward heart) past upper valve",
                        "Observe: Vein segment empties and stays collapsed",
                        "Release lower finger - observe vein refills from below",
                        "Interpretation: Blood can flow upward (toward heart) past valve",
                        "",
                        "EXPERIMENT 3: Valves Prevent Backflow (Harvey's Figure 3)",
                        "Engorged veins with tourniquet",
                        "Place finger just ABOVE (proximal to) a valve bulge",
                        "Try to push blood DOWNWARD (away from heart) past valve bulge",
                        "Observe: CANNOT push blood past valve - vein stays empty below valve, bulges above",
                        "Interpretation: Valve prevents backflow (away from heart)",
                        "",
                        "EXPERIMENT 4: Demonstrating Continuous Circulation",
                        "Apply tourniquet firmly (occlude all blood flow)",
                        "Wait 1-2 minutes",
                        "Observe hand: becomes red/purple, swollen (blood entering via arteries but cannot leave via veins)",
                        "Release tourniquet",
                        "Observe: Hand color returns to normal as venous blood drains",
                        "Interpretation: Blood continuously enters via arteries and must leave via veins",
                        "",
                        "QUANTITATIVE EXTENSION (Harvey's Calculation):",
                        "Measure resting heart rate (palpate radial pulse for 1 min)",
                        "Estimate stroke volume (~70 mL for average adult)",
                        "Calculate cardiac output per minute: HR × SV",
                        "Calculate per hour: CO × 60",
                        "Compare to total blood volume (~5 L)",
                        "Conclusion: Heart pumps entire blood volume ~once per minute → must recirculate"
                    ],
                    expectedResults: {
                        valveLocations: "Visible as bulges/swellings along vein at regular intervals",
                        upwardFlow: "Can easily push blood upward (toward heart) past valves",
                        backflowPrevented: "Cannot push blood downward (away from heart) past valves - valves close",
                        engorgement: "Tourniquet causes veins to swell (blood trapped), hand becomes darker",
                        calculation: "Heart pumps ~5-6 L/min × 60 = 300-360 L/hr >> total blood volume"
                    },
                    dataTable: [
                        ["Observation", "Result", "Interpretation"],
                        ["Valve locations", "Bulges every 2-5 cm", "Valves present in veins"],
                        ["Push blood toward heart", "Vein empties easily", "Blood can flow toward heart"],
                        ["Push blood away from heart", "Cannot empty vein past valve", "Valves prevent backflow"],
                        ["Tourniquet applied", "Veins engorge, hand darkens", "Blood enters but cannot leave"],
                        ["Cardiac output", "~5 L/min (300 L/hr)", "Far exceeds blood volume - must recirculate"]
                    ],
                    observations: [
                        "Venous valves are visible as regular bulges along vein",
                        "Blood flows easily toward heart but is blocked from flowing backward",
                        "Blocking venous return causes engorgement (blood accumulates)",
                        "Heart's pumping output over time vastly exceeds total blood volume"
                    ],
                    analysis: {
                        valveFunction: [
                            "Valves act as one-way gates - open when blood flows toward heart, close to prevent backflow",
                            "Ensures blood moves in correct direction despite low venous pressure",
                            "Particularly important in legs (fight gravity)"
                        ],
                        quantitative: [
                            "Harvey's genius: Used quantitative reasoning (math) to prove circulation",
                            "If blood not recirculated, body would need to produce ~300 L/hr (impossible)",
                            "Heart pumps entire blood volume (~5 L) every ~1 minute",
                            "Therefore blood must be returning to heart and recirculating"
                        ],
                        closedLoop: [
                            "Heart → arteries → capillaries → veins → heart",
                            "Same blood circulates continuously",
                            "Valves in veins ensure unidirectional flow toward heart"
                        ]
                    },
                    results: "Venous valves allow blood to flow toward the heart but prevent backflow. The heart pumps blood volume far in excess of what could be produced, proving that blood must circulate in a closed loop rather than being continuously produced and consumed.",
                    conclusions: [
                        "Veins contain one-way valves that direct blood toward heart",
                        "Blood flows continuously in one direction (circulation, not ebb and flow)",
                        "Heart's pumping capacity requires blood to recirculate",
                        "Cardiovascular system is a closed circuit",
                        "Harvey's work founded modern cardiovascular physiology"
                    ],
                    realWorldRelevance: {
                        varicoseVeins: "Valve failure → blood pools in legs → bulging, painful veins",
                        DVT: "Deep vein thrombosis - clots form in leg veins (risk factors: immobility, valve damage)",
                        heartFailure: "Impaired pumping → venous congestion (fluid backs up)",
                        surgicalImplications: "Surgeons must preserve venous drainage and arterial supply"
                    },
                    extensions: [
                        "Compare arterial pulse (palpable, rhythmic) vs venous (no pulse, non-pulsatile)",
                        "Investigate effect of position: veins more prominent when arm down (gravity aids filling)",
                        "Calculate actual cardiac output using Fick principle or echocardiography",
                        "Research history of medicine: Why did Galenic theory persist for 1400 years?",
                        "Examine venous valves in other organisms (fish, birds)"
                    ],
                    modernConfirmation: [
                        "Ultrasound imaging directly visualizes valve function",
                        "Doppler studies measure blood flow direction and velocity",
                        "Cardiac catheterization traces circulation pathway",
                        "Radionuclide imaging tracks blood through circulatory system"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 2: STEPHEN HALES - BLOOD PRESSURE MEASUREMENT
            // ========================================
            
            hales_blood_pressure: {
                name: "Stephen Hales' Blood Pressure Measurement",
                relatedTopics: ['blood_pressure', 'blood_flow', 'heart_anatomy'],
                category: 'physiology',
                historicalBackground: {
                    scientist: "Stephen Hales",
                    year: "1733",
                    publication: "Haemastaticks (part of Statical Essays)",
                    experiment: "First measurement of blood pressure in living animal",
                    method: {
                        animal: "Mare (horse)",
                        setup: "Cannulated carotid artery with brass pipe connected to glass tube",
                        observation: "Blood rose 8 feet 3 inches in tube",
                        pulsation: "Blood oscillated 2-4 inches with each heartbeat"
                    },
                    significance: [
                        "First quantitative measurement of blood pressure",
                        "Demonstrated that heart generates pressure to propel blood",
                        "Showed pressure pulsates with heartbeat",
                        "Foundation for understanding cardiovascular dynamics"
                    ],
                    limitations: "Invasive (required surgery), only measured systolic peak",
                    modernEquivalent: "8 ft 3 in ≈ 190 mmHg (estimated arterial pressure in horse)",
                    laterDevelopments: {
                        poiseuille: "1828 - Mercury manometer (more precise)",
                        korotkoff: "1905 - Sounds during auscultatory method",
                        rivaRocci: "1896 - Non-invasive sphygmomanometer (cuff method)"
                    },
                    quote: "The force of the blood was sufficient to raise a column of blood in a glass tube 8 feet 3 inches high"
                },
                labExperiment: {
                    title: "Non-Invasive Blood Pressure Measurement and Cardiovascular Response",
                    hypothesis: "Blood pressure can be measured non-invasively using sphygmomanometer and varies with physiological state (rest vs exercise, position)",
                    purpose: "Learn proper blood pressure measurement technique and investigate factors affecting BP",
                    background: {
                        directMeasurement: "Hales' method - insert tube into artery (invasive, impractical for humans)",
                        indirectMeasurement: "Sphygmomanometer - inflate cuff to occlude artery, listen for sounds as deflate",
                        korotkoffSounds: "Sounds heard with stethoscope as cuff deflates (turbulent flow)"
                    },
                    variables: {
                        independent: "Physiological condition (resting, post-exercise, position)",
                        dependent: "Systolic and diastolic blood pressure, heart rate",
                        controlled: ["Time of day", "Subject", "Measurement technique", "Equipment"]
                    },
                    materials: [
                        "Sphygmomanometer (manual aneroid or mercury)",
                        "Stethoscope",
                        "Chair and table",
                        "Stopwatch or timer",
                        "Data recording sheet",
                        "Calculator",
                        "Optional: automated BP monitor (comparison)"
                    ],
                    safetyPrecautions: [
                        "Do not inflate cuff >200 mmHg or keep inflated >1 min (can cause numbness/pain)",
                        "Do not perform on arm with injury, IV line, or AV fistula",
                        "Clean stethoscope earpieces before use",
                        "Stop exercise immediately if subject feels dizzy, faint, or has chest pain",
                        "Avoid exercise test in subjects with known cardiovascular disease"
                    ],
                    procedure: [
                        "PART 1: LEARNING PROPER BP MEASUREMENT TECHNIQUE",
                        "",
                        "SETUP:",
                        "Subject sits quietly in chair for 5 minutes (rest period)",
                        "Arm supported on table at heart level",
                        "Remove tight clothing from upper arm",
                        "Locate brachial artery (medial aspect of antecubital fossa)",
                        "",
                        "CUFF PLACEMENT:",
                        "Wrap cuff snugly around upper arm (center of bladder over brachial artery)",
                        "Bottom edge 2-3 cm above elbow crease",
                        "Should be snug but not tight (can fit 1-2 fingers under cuff)",
                        "",
                        "MEASUREMENT:",
                        "1. Palpate radial pulse with fingers",
                        "2. Inflate cuff rapidly until pulse disappears (estimate systolic)",
                        "3. Deflate cuff completely",
                        "4. Wait 30 seconds",
                        "5. Place stethoscope over brachial artery (do NOT tuck under cuff)",
                        "6. Inflate cuff rapidly to ~20-30 mmHg ABOVE estimated systolic",
                        "7. Deflate slowly (2-3 mmHg per second)",
                        "8. Listen carefully:",
                        "   - FIRST sound = SYSTOLIC pressure (Korotkoff phase 1)",
                        "   - Sounds continue, may change quality",
                        "   - LAST sound = DIASTOLIC pressure (Korotkoff phase 5)",
                        "9. Continue deflating until ~20 mmHg below diastolic (confirm silence)",
                        "10. Record systolic/diastolic (e.g., 120/80 mmHg)",
                        "11. Deflate completely and remove cuff",
                        "",
                        "REPETITION:",
                        "Wait 1-2 minutes, repeat measurement (should be within 5 mmHg)",
                        "If >10 mmHg difference, repeat a third time",
                        "Average the readings",
                        "",
                        "PART 2: FACTORS AFFECTING BLOOD PRESSURE",
                        "",
                        "EXPERIMENT A: RESTING BASELINE",
                        "Measure BP after 5 min rest (seated, arm at heart level) - 3 readings",
                        "Measure resting heart rate (count pulse for 60 sec)",
                        "Calculate pulse pressure (systolic - diastolic)",
                        "Calculate MAP (diastolic + 1/3 pulse pressure)",
                        "",
                        "EXPERIMENT B: EFFECT OF ARM POSITION",
                        "Measure BP with arm at heart level (baseline)",
                        "Measure BP with arm raised above head (wait 1 min, then measure)",
                        "Measure BP with arm hanging down below heart (wait 1 min, then measure)",
                        "Compare results",
                        "",
                        "EXPERIMENT C: EFFECT OF BODY POSITION",
                        "Measure BP sitting (baseline)",
                        "Subject stands for 2 min, measure BP standing",
                        "Subject lies supine for 2 min, measure BP lying",
                        "Compare results, measure HR in each position",
                        "",
                        "EXPERIMENT D: EFFECT OF EXERCISE",
                        "Measure resting BP and HR (sitting)",
                        "Subject performs moderate exercise: step-ups on stair/bench for 2 minutes OR jumping jacks for 1 min",
                        "IMMEDIATELY after exercise: measure HR (count for 15 sec × 4)",
                        "Within 1 minute after exercise: measure BP",
                        "Measure BP and HR at 2, 4, 6, 8, 10 min post-exercise (recovery)",
                        "Plot BP and HR over time (resting → exercise → recovery)",
                        "",
                        "EXPERIMENT E: EFFECT OF BREATH HOLDING (Valsalva Maneuver)",
                        "Measure resting BP",
                        "Subject takes deep breath and holds (close glottis, bear down slightly)",
                        "Hold for 15 seconds",
                        "Measure BP immediately after releasing breath",
                        "Wait 2 min, repeat measurement (recovery)",
                        "",
                        "OPTIONAL: COMPARISON WITH AUTOMATED BP MONITOR",
                        "Measure BP using manual sphygmomanometer (your measurement)",
                        "Immediately measure with automated monitor",
                        "Compare values (should be within 5-10 mmHg)"
                    ],
                    expectedResults: {
                        restingBP: "Typical adult: 110-120 / 70-80 mmHg",
                        armPosition: {
                            atHeartLevel: "Baseline",
                            raised: "~5-10 mmHg lower (gravity assists venous return, reduces arterial pressure)",
                            lowered: "~5-10 mmHg higher (gravity opposes flow, increases arterial pressure)"
                        },
                        bodyPosition: {
                            sitting: "Baseline",
                            standing: "Slight decrease in systolic or compensatory increase (baroreceptor reflex)",
                            lying: "Slight increase in diastolic (increased venous return)"
                        },
                        exercise: {
                            immediate: "Systolic increases significantly (+20-50 mmHg), diastolic stays same or slight decrease, HR increases (+30-60 bpm)",
                            recovery: "Gradual return to baseline over 5-10 min"
                        },
                        valsalva: {
                            during: "Increased intrathoracic pressure → decreased venous return → decreased BP",
                            after: "Compensatory increase in BP (baroreceptor response)"
                        }
                    },
                    dataTable: [
                        ["Condition", "Systolic (mmHg)", "Diastolic (mmHg)", "Pulse Pressure", "MAP", "HR (bpm)"],
                        ["Resting (seated)", "120", "80", "40", "93", "72"],
                        ["Arm raised", "115", "75", "40", "88", "72"],
                        ["Arm lowered", "125", "85", "40", "98", "72"],
                        ["Standing", "118", "78", "40", "91", "78"],
                        ["Lying", "122", "82", "40", "95", "68"],
                        ["Post-exercise (1 min)", "145", "75", "70", "98", "125"],
                        ["Recovery (5 min)", "125", "78", "47", "94", "85"],
                        ["Recovery (10 min)", "120", "80", "40", "93", "72"]
                    ],
                    observations: [
                        "Korotkoff sounds are distinct: first sound (sharp tap) = systolic, last sound = diastolic",
                        "BP varies with arm position relative to heart (gravity effect)",
                        "Systolic BP increases substantially with exercise, diastolic changes little",
                        "Heart rate increases rapidly with exercise, recovers gradually",
                        "Standing can cause transient drop in BP (orthostatic effect) - baroreceptors compensate"
                    ],
                    analysis: {
                        armPosition: [
                            "Hydrostatic pressure: P = ρgh (pressure due to gravity)",
                            "Raising arm: reduces pressure (less blood column above measurement point)",
                            "Lowering arm: increases pressure (more blood column above point)",
                            "Effect: ~0.77 mmHg per cm height difference"
                        ],
                        exercise: [
                            "Increased cardiac output (↑ HR, ↑ SV) → ↑ systolic pressure",
                            "Vasodilation in muscles (↓ TPR) → diastolic stays same or decreases slightly",
                            "Pulse pressure widens (systolic ↑, diastolic ~same)",
                            "MAP increases moderately (↑ CO dominates over ↓ TPR)"
                        ],
                        baroreceptorReflex: [
                            "Standing: blood pools in legs → ↓ venous return → ↓ BP",
                            "Baroreceptors detect ↓ BP → ↑ sympathetic → ↑ HR, vasoconstriction",
                            "Compensation usually prevents significant BP drop",
                            "Failure to compensate → orthostatic hypotension (dizziness)"
                        ],
                        valsalva: [
                            "Increased intrathoracic pressure → compressed veins → ↓ venous return → ↓ CO → ↓ BP",
                            "Baroreceptors respond: ↑ HR, ↑ TPR",
                            "Upon release: sudden ↑ venous return → ↑ BP (overshoot)"
                        ]
                    },
                    calculations: {
                        pulsePressure: "PP = Systolic - Diastolic (reflects stroke volume and arterial compliance)",
                        MAP: "MAP ≈ Diastolic + (1/3 × Pulse Pressure) OR MAP ≈ (2×Diastolic + Systolic) / 3",
                        percentChange: "% change = [(New - Original) / Original] × 100%"
                    },
                    results: "Blood pressure can be accurately measured non-invasively using sphygmomanometer. BP is influenced by arm/body position (hydrostatic pressure), exercise (increased cardiac output), and autonomic reflexes (baroreceptor control). Systolic pressure is more variable than diastolic.",
                    conclusions: [
                        "Non-invasive BP measurement is reliable and clinically useful (contrast with Hales' invasive method)",
                        "BP is not static - varies with position, activity, and physiological state",
                        "Systolic and diastolic pressures respond differently to physiological challenges",
                        "Cardiovascular system has rapid regulatory mechanisms (baroreceptor reflex)",
                        "Proper measurement technique is critical for accurate results"
                    ],
                    realWorldApplications: [
                        "Routine clinical BP screening (hypertension diagnosis)",
                        "Perioperative monitoring (surgery, anesthesia)",
                        "Exercise testing and cardiac rehabilitation",
                        "Diagnosing orthostatic hypotension (autonomic dysfunction)",
                        "Monitoring antihypertensive medication effectiveness",
                        "Assessing cardiovascular fitness"
                    ],
                    commonErrors: [
                        "Cuff too small or large (falsely high or low)",
                        "Arm not at heart level (hydrostatic error)",
                        "Deflating too quickly (miss sounds)",
                        "Insufficient rest period (falsely elevated)",
                        "White coat hypertension (anxiety in clinical setting)",
                        "Auscultatory gap (sounds disappear then reappear - can miss true systolic)"
                    ],
                    extensions: [
                        "Investigate effect of caffeine, cold exposure, mental stress on BP",
                        "Compare BP in different arteries (brachial vs radial vs femoral)",
                        "Research ambulatory BP monitoring (24-hour BP profile)",
                        "Examine BP response to isometric exercise (hand grip)",
                        "Calculate pulse pressure and MAP in hypertensive vs normotensive individuals",
                        "Investigate age-related changes in BP and arterial stiffness"
                    ],
                    troubleshooting: [
                        "Cannot hear sounds: Stethoscope placement (should be over artery, not under cuff), cuff not tight enough",
                        "Sounds very faint: Inflate higher, ensure good stethoscope seal",
                        "BP unusually high: Check arm position, ensure subject relaxed, repeat measurement",
                        "Large variation between readings: Technique inconsistency, wait longer between readings"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 3: FRANK-STARLING LAW
            // ========================================
            
            frank_starling_mechanism: {
                name: "Frank-Starling Law of the Heart",
                relatedTopics: ['cardiac_cycle', 'heart_anatomy', 'blood_flow'],
                category: 'cardiac_physiology',
                historicalBackground: {
                    scientists: "Otto Frank (1895), Ernest Starling (1914)",
                    concept: "Intrinsic ability of heart to adapt stroke volume to venous return",
                    frankContribution: "Studied isovolumetric contractions, pressure-volume loops (frog hearts)",
                    starlingContribution: "Heart-lung preparation (dog), demonstrated length-tension relationship",
                    law: "The force of ventricular contraction is proportional to the initial length of cardiac muscle fibers (within physiological limits)",
                    simplified: "More filling → more stretching → stronger contraction → more ejection",
                    molecularBasis: "Optimal overlap of actin-myosin filaments when sarcomere is stretched",
                    significance: [
                        "Explains how heart automatically matches output to venous return",
                        "Intrinsic mechanism (doesn't require neural/hormonal control)",
                        "Ensures left and right ventricles pump equal amounts (prevents pulmonary edema)",
                        "Foundation for understanding heart failure"
                    ],
                    quote: "The energy of contraction is a function of the length of the muscle fiber",
                    clinicalRelevance: "Heart failure patients on descending limb (overstretched → weaker contraction)"
                },
                labExperiment: {
                    title: "Demonstrating Preload-Stroke Volume Relationship (Simulated Experiment)",
                    hypothesis: "Increasing venous return (preload) will increase stroke volume and cardiac output, up to a physiological limit",
                    purpose: "Understand the Frank-Starling mechanism using physiological data and simulated cardiac responses",
                    background: {
                        preload: "Degree of ventricular stretch before contraction (determined by venous return / EDV)",
                        strokeVolume: "Volume ejected per beat (SV = EDV - ESV)",
                        relationship: "↑ EDV → ↑ stretch → ↑ SV (up to optimal sarcomere length)",
                        limit: "Excessive stretch → overstretched myofibrils → ↓ SV (descending limb - rare in healthy hearts)"
                    },
                    note: "This experiment uses simulated data and models because direct measurement requires invasive cardiac catheterization",
                    materials: [
                        "Graph paper or spreadsheet software",
                        "Physiological data set (provided below)",
                        "Calculator",
                        "Ruler",
                        "Optional: balloon model (to demonstrate stretching)"
                    ],
                    safetyPrecautions: [
                        "This is a data analysis/modeling exercise - no live subjects",
                        "If using balloon model: avoid over-inflation (risk of bursting)"
                    ],
                    procedure: [
                        "PART 1: UNDERSTANDING THE MECHANISM",
                        "",
                        "BALLOON ANALOGY (Optional Physical Model):",
                        "Obtain small balloon (represents ventricle)",
                        "Partially inflate balloon with small volume of air (e.g., 50 mL)",
                        "Release air quickly - note how far balloon propels air (weak ejection)",
                        "Inflate balloon with larger volume (e.g., 120 mL) - more stretch",
                        "Release air - note air propelled farther/faster (stronger ejection)",
                        "Interpretation: More initial stretch → more elastic recoil → stronger ejection",
                        "Note: Cardiac muscle contraction is active (ATP-dependent), but principle of length-tension relationship applies",
                        "",
                        "SARCOMERE LENGTH-TENSION RELATIONSHIP:",
                        "Review diagram of sarcomere at different lengths:",
                        "  - Understretched (<1.6 μm): Excessive overlap, actin filaments interfere",
                        "  - Optimal (1.8-2.2 μm): Maximal actin-myosin cross-bridge formation",
                        "  - Overstretched (>2.2 μm): Reduced overlap, fewer cross-bridges",
                        "Cardiac muscle normally operates at optimal length (Frank-Starling mechanism)",
                        "",
                        "PART 2: DATA ANALYSIS",
                        "",
                        "SIMULATED EXPERIMENTAL DATA:",
                        "Table: Effect of Venous Return on Ventricular Function",
                        "",
                        "Condition       | Venous Return | EDV (mL) | ESV (mL) | SV (mL) | EF (%) | CO (L/min)",
                        "----------------|---------------|----------|----------|---------|--------|------------",
                        "Low VR          | 3 L/min       | 80       | 45       | 35      | 44%    | 2.5",
                        "Normal Resting  | 5 L/min       | 120      | 50       | 70      | 58%    | 5.0",
                        "Moderate VR     | 7 L/min       | 150      | 55       | 95      | 63%    | 6.8",
                        "High VR         | 9 L/min       | 180      | 60       | 120     | 67%    | 8.6",
                        "Very High VR    | 11 L/min      | 210      | 70       | 140     | 67%    | 10.0",
                        "",
                        "(Assume HR = 72 bpm constant; CO = HR × SV / 1000 for L/min)",
                        "",
                        "CALCULATIONS:",
                        "1. Verify SV calculation: SV = EDV - ESV",
                        "2. Calculate Ejection Fraction: EF = (SV / EDV) × 100%",
                        "3. Calculate Cardiac Output: CO = HR × SV (in mL/min, then convert to L/min)",
                        "4. Verify that CO approximately equals venous return (at steady state)",
"",
"GRAPHING:",
"1. Plot EDV (x-axis) vs SV (y-axis) - this is the Frank-Starling curve",
"2. Plot EDV (x-axis) vs EF (y-axis)",
"3. Plot Venous Return (x-axis) vs Cardiac Output (y-axis)",
"4. Draw best-fit curve through points",
"",
"PART 3: PHYSIOLOGICAL SCENARIOS",
"",
"SCENARIO 1: EXERCISE",
"During exercise:",
"  - Skeletal muscle pump + respiratory pump → ↑ venous return",
"  - ↑ VR → ↑ EDV (more filling)",
"  - Frank-Starling: ↑ EDV → ↑ SV",
"  - PLUS: Sympathetic stimulation → ↑ HR, ↑ contractility",
"Using data table: Compare resting (5 L/min VR) vs exercise (9 L/min VR)",
"Calculate % increase in SV, CO",
"",
"SCENARIO 2: STANDING UP (Orthostatic Challenge)",
"When standing:",
"  - Blood pools in legs → ↓ venous return",
"  - ↓ VR → ↓ EDV",
"  - Frank-Starling: ↓ EDV → ↓ SV",
"  - Baroreceptor reflex compensates: ↑ HR, ↑ contractility",
"Using data: Compare normal resting vs low VR",
"Explain why HR must increase to maintain CO",
"",
"SCENARIO 3: HEART FAILURE",
"In heart failure:",
"  - Damaged myocardium → ↓ contractility",
"  - Incomplete emptying → ↑ ESV",
"  - ↓ SV despite normal or high EDV",
"  - EF significantly reduced (<40%)",
"Simulate: EDV = 180 mL, but ESV = 120 mL → SV = 60 mL, EF = 33%",
"Compare to normal: same EDV but much lower SV",
"",
"PART 4: PRESSURE-VOLUME LOOPS (Advanced)",
"",
"Understanding PV Loops:",
"Plot Left Ventricular Pressure (y-axis, 0-140 mmHg) vs LV Volume (x-axis, 0-200 mL)",
"",
"Normal Loop (trace clockwise):",
"  Phase 1 - Filling: Pressure low (~0-12 mmHg), volume ↑ from 50 → 120 mL (EDV)",
"  Phase 2 - Isovolumetric contraction: Volume constant (120 mL), pressure ↑ 12 → 120 mmHg",
"  Phase 3 - Ejection: Pressure high (~120 mmHg), volume ↓ from 120 → 50 mL (ESV)",
"  Phase 4 - Isovolumetric relaxation: Volume constant (50 mL), pressure ↓ 120 → 0 mmHg",
"",
"Effect of ↑ Preload (↑ VR):",
"  - Loop shifts right (larger EDV)",
"  - Loop is wider (larger SV)",
"  - Area inside loop ↑ (more stroke work)",
"",
"Effect of ↑ Contractility (sympathetic stimulation):",
"  - Steeper slope during ejection",
"  - Lower ESV (more complete emptying)",
"  - Larger SV even at same EDV",
"",
"Effect of ↑ Afterload (hypertension):",
"  - Loop shifts up (higher pressure needed)",
"  - Loop may narrow (smaller SV if contractility unchanged)",
"  - ESV increases",
"",
"Draw 3 PV loops on same graph:",
"  1. Normal resting (EDV 120, ESV 50)",
"  2. Increased preload (EDV 180, ESV 60)",
"  3. Heart failure (EDV 180, ESV 120)"
],
expectedResults: {
frankStarlingCurve: "Ascending curve: ↑ EDV → ↑ SV (positive relationship)",
ejectionFraction: "Remains relatively constant or increases slightly with ↑ EDV (healthy heart)",
cardiacOutput: "CO matches VR at steady state (what goes in must come out)",
exercise: "SV increases ~35 mL → 120 mL (+240%), CO increases 5 → 8.6 L/min (+72%)",
heartFailure: "Flat or descending Frank-Starling curve (↑ EDV does NOT increase SV adequately)"
},
dataTable: [
["EDV (mL)", "SV (mL)", "EF (%)", "Interpretation"],
["80", "35", "44%", "Low preload - reduced SV"],
["120", "70", "58%", "Normal resting - optimal function"],
["150", "95", "63%", "Moderate preload - increased SV"],
["180", "120", "67%", "High preload - maximal SV"],
["210", "140", "67%", "Very high preload - near maximum"],
["180*", "60*", "33%*", "*Heart failure - same EDV, much lower SV"]
],
observations: [
"As EDV increases, SV increases proportionally (ascending limb of Frank-Starling curve)",
"EF remains relatively constant in healthy heart (efficient across range of EDVs)",
"CO matches VR at steady state (balance principle)",
"In heart failure, SV does not increase appropriately with EDV (depressed contractility)"
],
analysis: {
molecularMechanism: [
"Sarcomere stretch optimizes actin-myosin overlap",
"More cross-bridges formed → greater force of contraction",
"Increased Ca²⁺ sensitivity at longer sarcomere lengths",
"Optimal length: 1.8-2.2 μm (corresponds to normal EDV)"
],
physiologicalSignificance: [
"INTRINSIC regulation: Heart responds to ↑ VR without neural/hormonal input",
"Matches output to input: Prevents blood backup (congestion)",
"Balances left and right ventricles: Both pump same amount (prevents pulmonary edema)",
"Immediate response: Adjusts beat-to-beat"
],
limits: [
"Ascending limb: Physiological range (EDV 80-180 mL)",
"Descending limb: Pathological (overstretched, >2.2 μm sarcomere length) - rare in vivo",
"Healthy hearts operate on ascending limb",
"Heart failure: May operate on flat or descending portion"
],
clinicalCorrelations: {
exercise: "↑ VR (muscle pump) → ↑ EDV → ↑ SV (Frank-Starling) + ↑ HR (sympathetic) → ↑ CO",
heartFailure: "Depressed contractility → inadequate SV despite high EDV → fluid backs up → edema",
fluidResuscitation: "IV fluids → ↑ blood volume → ↑ VR → ↑ EDV → ↑ SV (if on ascending limb)",
valveDisease: "Regurgitation → ↑ EDV (volume overload) → compensatory ↑ SV initially, then failure"
}
},
calculations: {
strokeVolume: "SV = EDV - ESV",
ejectionFraction: "EF = (SV / EDV) × 100%",
cardiacOutput: "CO = HR × SV",
steadyState: "CO = Venous Return (at equilibrium)",
percentChange: "% Δ SV = [(SV₂ - SV₁) / SV₁] × 100%"
},
results: "Increasing venous return (preload) increases end-diastolic volume, which stretches cardiac muscle fibers, resulting in stronger contraction and greater stroke volume. This intrinsic mechanism (Frank-Starling law) allows the heart to automatically match cardiac output to venous return.",
conclusions: [
"Frank-Starling mechanism is an intrinsic property of cardiac muscle (length-tension relationship)",
"Increasing preload (EDV) increases stroke volume and cardiac output",
"Mechanism operates beat-to-beat without neural or hormonal control",
"Ensures left and right ventricles remain balanced",
"Critical for understanding normal cardiovascular physiology and heart failure"
],
realWorldApplications: [
"Fluid resuscitation in shock (optimize preload to increase CO)",
"Understanding heart failure pathophysiology (impaired Frank-Starling response)",
"Exercise physiology (↑ VR during exercise → ↑ SV)",
"Anesthesia management (preload optimization during surgery)",
"Interpreting echocardiography and hemodynamic monitoring",
"Designing inotropic drug therapy (improve contractility in heart failure)"
],
extensions: [
"Compare Frank-Starling curves in normal vs failing hearts",
"Investigate effect of contractility changes (sympathetic stimulation) on Frank-Starling curve",
"Examine afterload effects (hypertension) on stroke volume",
"Research Laplace's law (wall stress = pressure × radius / 2 × thickness)",
"Study ventricular remodeling in chronic heart failure",
"Explore cardiac resynchronization therapy (CRT) in heart failure"
],
advancedConcepts: {
laplacelaw: {
formula: "Wall Stress = (Pressure × Radius) / (2 × Wall Thickness)",
implication: "Dilated ventricle (↑ radius) → ↑ wall stress → ↑ O₂ demand → risk of ischemia",
compensation: "Hypertrophy (↑ wall thickness) reduces wall stress"
},
preloadVsAfterload: {
preload: "Load BEFORE contraction (EDV, ventricular stretch)",
afterload: "Load AGAINST which heart contracts (arterial pressure, aortic valve resistance)",
interaction: "↑ Afterload → ↓ SV (harder to eject), ↑ ESV, eventual ↑ EDV (compensation)"
},
contractility: {
definition: "Intrinsic strength of contraction independent of preload/afterload",
positive: "Sympathetic (β₁), Ca²⁺, digitalis → shift Frank-Starling curve UP (more SV at same EDV)",
negative: "Parasympathetic (minimal effect on ventricles), heart failure → shift curve DOWN"
}
}
}
},
// ========================================
        // EXPERIMENT 4: EINTHOVEN - ELECTROCARDIOGRAPHY (ECG)
        // ========================================
        
        einthoven_ecg: {
            name: "Willem Einthoven's Electrocardiography",
            relatedTopics: ['electrical_conduction', 'cardiac_cycle', 'heart_anatomy'],
            category: 'cardiac_electrophysiology',
            historicalBackground: {
                scientist: "Willem Einthoven",
                year: "1903",
                invention: "String galvanometer for recording ECG",
                nobelPrize: "1924 Nobel Prize in Physiology or Medicine",
                priorWork: {
                    waller: "Augustus Waller (1887) - first recorded electrical activity of heart using capillary electrometer",
                    limitation: "Capillary electrometer too slow and insensitive"
                },
                einthovenContributions: [
                    "Developed string galvanometer (sensitive, fast response)",
                    "Defined standard limb leads (I, II, III - Einthoven's triangle)",
                    "Named ECG waves: P, QRS, T (skipped letters to allow for future discoveries)",
                    "Established normal ECG patterns and intervals",
                    "Described pathological ECG findings"
                ],
                stringGalvanometer: {
                    design: "Thin silver-coated quartz fiber between poles of strong magnet",
                    principle: "Current through fiber → deflects in magnetic field → shadow on moving photographic paper",
                    sensitivity: "Could detect microvolts",
                    size: "Weighed 600 lbs (272 kg)!",
                    improvement: "Later replaced by electronic amplifiers (smaller, portable)"
                },
                einthovenTriangle: {
                    concept: "Body forms conductor, heart at center, limbs as vertices of equilateral triangle",
                    leads: {
                        leadI: "Right arm (-) to Left arm (+)",
                        leadII: "Right arm (-) to Left leg (+)",
                        leadIII: "Left arm (-) to Left leg (+)"
                    },
                    equation: "Lead II = Lead I + Lead III (Einthoven's law)"
                },
                quote: "The registration of the electric currents of the heart is of the greatest importance for diagnosis",
                significance: "Foundation of clinical cardiology, still used >100 years later"
            },
            labExperiment: {
                title: "Recording and Interpreting Electrocardiograms (ECG/EKG)",
                hypothesis: "Electrical activity of the heart can be recorded from body surface and reveals cardiac rhythm, conduction abnormalities, and myocardial health",
                purpose: "Learn ECG recording technique, identify normal waves and intervals, and understand physiological/pathological variations",
                background: {
                    ecgPrinciple: "Depolarization and repolarization of cardiac muscle create electrical currents that spread through body",
                    electrodes: "Detect voltage differences between points on body surface",
                    waves: "P (atrial depolarization), QRS (ventricular depolarization), T (ventricular repolarization)",
                    clinical: "Most common cardiac diagnostic test"
                },
                variables: {
                    independent: "Physiological state (resting, post-exercise, breath-holding)",
                    dependent: "ECG waveform characteristics (heart rate, intervals, amplitudes)",
                    controlled: ["Subject", "Electrode placement", "Recording equipment settings"]
                },
                materials: [
                    "ECG machine (3-lead or 12-lead)",
                    "ECG electrodes (disposable adhesive Ag/AgCl)",
                    "Electrode gel or pre-gelled electrodes",
                    "Alcohol wipes",
                    "Razor (if needed for electrode contact)",
                    "ECG paper or digital display",
                    "Ruler with mm markings",
                    "Calculator",
                    "Optional: ECG calipers"
                ],
                safetyPrecautions: [
                    "Ensure ECG machine is properly grounded and maintained",
                    "Check for damaged cables or electrodes",
                    "Clean skin before electrode placement (remove oils, lotions)",
                    "Do not perform ECG on subjects with known serious arrhythmias without medical supervision",
                    "If subject reports chest pain, shortness of breath, or dizziness - stop and seek medical help",
                    "Respect subject privacy when exposing chest for electrode placement"
                ],
                procedure: [
                    "PART 1: ELECTRODE PLACEMENT (3-LEAD ECG)",
                    "",
                    "SKIN PREPARATION:",
                    "Clean electrode sites with alcohol wipe (reduce skin resistance)",
                    "If excessive hair, shave small area for good electrode contact",
                    "Allow skin to dry",
                    "",
                    "STANDARD LIMB LEADS (Einthoven):",
                    "RA (Right Arm): Right wrist or upper arm",
                    "LA (Left Arm): Left wrist or upper arm",
                    "LL (Left Leg): Left ankle or lower leg",
                    "Ground (often labeled RL or N): Right ankle or lower leg",
                    "",
                    "Apply electrodes firmly, ensure good contact",
                    "Connect lead wires (color-coded or labeled)",
                    "",
                    "PART 2: RECORDING BASELINE ECG",
                    "",
                    "Subject lies supine, relaxed, arms at sides",
                    "Ensure subject is warm, comfortable (shivering causes artifact)",
                    "Instruct subject to breathe normally, remain still",
                    "Turn on ECG machine, select Lead II (standard for rhythm analysis)",
                    "Adjust gain (typically 10 mm/mV) and paper speed (25 mm/sec standard)",
                    "Record at least 10-15 seconds of continuous tracing",
                    "Check for artifacts (muscle tremor, electrical interference, loose electrodes)",
                    "If artifact present: check electrode contact, ensure subject relaxed, check for electrical interference",
                    "Record tracings from Lead I, Lead II, Lead III",
                    "",
                    "PART 3: ECG ANALYSIS",
                    "",
                    "MEASURING HEART RATE:",
                    "Method 1 - Regular rhythm:",
                    "  Count number of large boxes (5 mm) between R waves",
                    "  HR = 300 / (number of large boxes)",
                    "  Example: 4 large boxes → 300/4 = 75 bpm",
                    "",
                    "Method 2 - Irregular rhythm:",
                    "  Count number of R waves in 6 seconds (30 large boxes at 25 mm/sec)",
                    "  Multiply by 10 to get bpm",
                    "",
                    "IDENTIFYING WAVES:",
                    "P wave: Small upward deflection before QRS (atrial depolarization)",
                    "QRS complex: Large sharp deflection (ventricular depolarization)",
                    "  Q: First negative deflection (may be absent)",
                    "  R: First positive deflection",
                    "  S: Negative deflection after R",
                    "T wave: Rounded deflection after QRS (ventricular repolarization)",
                    "",
                    "MEASURING INTERVALS:",
                    "PR Interval: Start of P to start of QRS",
                    "  Normal: 0.12-0.20 sec (3-5 small boxes)",
                    "  Represents: Atrial depolarization + AV node delay",
                    "",
                    "QRS Duration: Start to end of QRS complex",
                    "  Normal: 0.06-0.10 sec (1.5-2.5 small boxes)",
                    "  Represents: Ventricular depolarization",
                    "",
                    "QT Interval: Start of QRS to end of T wave",
                    "  Normal: ~0.36-0.44 sec (varies with heart rate)",
                    "  Corrected: QTc = QT / √RR interval",
                    "  Represents: Total ventricular systole (depolarization + repolarization)",
                    "",
                    "ST Segment: End of QRS to start of T",
                    "  Normal: Isoelectric (flat, at baseline)",
                    "  Abnormal: Elevation (STEMI) or depression (ischemia)",
                    "",
                    "PART 4: PHYSIOLOGICAL VARIATIONS",
                    "",
                    "EXPERIMENT A: RESPIRATORY SINUS ARRHYTHMIA",
                    "Record ECG during normal breathing",
                    "Observe: HR increases slightly during inspiration, decreases during expiration",
                    "Mechanism: Vagal tone varies with breathing (↓ during inspiration)",
                    "Normal finding, especially in young healthy subjects",
                    "",
                    "EXPERIMENT B: POST-EXERCISE ECG",
                    "Record baseline resting ECG (HR, intervals)",
                    "Subject performs light exercise (step-ups, jumping jacks) for 1-2 min",
                    "IMMEDIATELY record ECG post-exercise",
                    "Observe changes:",
                    "  - ↑ Heart rate (sympathetic stimulation)",
                    "  - Shorter RR intervals",
                    "  - PR interval may shorten slightly",
                    "  - QT interval shortens (HR-dependent)",
                    "Record recovery ECG at 2, 5, 10 min",
                    "Plot HR over time (resting → exercise → recovery)",
                    "",
                    "EXPERIMENT C: VALSALVA MANEUVER",
                    "Record resting ECG",
                    "Subject takes deep breath, holds, bears down (close glottis)",
                    "Record ECG during breath hold (~10-15 sec)",
                    "Observe: Initial ↑ HR (compensate for ↓ VR), then ↓ HR",
                    "Subject releases breath",
                    "Observe: Transient ↓ HR then return to baseline (baroreceptor reflex)",
                    "",
                    "EXPERIMENT D: POSITIONAL CHANGES",
                    "Record ECG supine (lying)",
                    "Subject stands up",
                    "Record ECG immediately and at 1 min standing",
                    "Observe: HR may increase (orthostatic compensation)",
                    "Subject returns to supine",
                    "Record recovery",
                    "",
                    "PART 5: EINTHOVEN'S LAW VERIFICATION",
                    "",
                    "Record simultaneous tracings from Lead I, II, III (or sequentially)",
                    "Measure amplitude of R wave in each lead (mm)",
                    "Verify: Amplitude in Lead II ≈ Amplitude Lead I + Amplitude Lead III",
                    "Calculate % error: [(Measured Lead II - Calculated) / Measured] × 100%",
                    "Typical error: <10% (physiological variation, measurement error)"
                ],
                expectedResults: {
                    restingECG: {
                        heartRate: "60-100 bpm (normal sinus rhythm)",
                        rhythm: "Regular (equal RR intervals)",
                        Pwave: "Upright, 0.08-0.10 sec duration, <0.25 mV amplitude",
                        PRinterval: "0.12-0.20 sec",
                        QRS: "0.06-0.10 sec, variable amplitude (largest in V2-V3)",
                        STsegment: "Isoelectric (at baseline)",
                        Twave: "Upright (same direction as QRS), rounded",
                        QTinterval: "0.36-0.44 sec (HR-dependent)"
                    },
                    respiratorySinusArrhythmia: "HR varies 5-15 bpm with breathing (normal in young)",
                    postExercise: "HR increases to 100-140 bpm, PR and QT intervals shorten, return to baseline in 5-10 min",
                    valsalva: "Initial HR increase (compensatory), then decrease, then rebound",
                    einthovenLaw: "Lead II amplitude ≈ Lead I + Lead III (within measurement error)"
                },
                dataTable: [
                    ["Measurement", "Normal Range", "Subject Value", "Interpretation"],
                    ["Heart Rate", "60-100 bpm", "72 bpm", "Normal sinus rhythm"],
                    ["PR Interval", "0.12-0.20 sec", "0.16 sec", "Normal AV conduction"],
                    ["QRS Duration", "0.06-0.10 sec", "0.08 sec", "Normal ventricular conduction"],
                    ["QT Interval", "0.36-0.44 sec", "0.40 sec", "Normal (HR-adjusted)"],
                    ["QTc (corrected)", "<0.45 sec", "0.42 sec", "Normal"],
                    ["", "", "", ""],
                    ["Condition", "Heart Rate", "PR (sec)", "QRS (sec)"],
                    ["Resting", "72 bpm", "0.16", "0.08"],
                    ["Post-exercise", "128 bpm", "0.14", "0.08"],
                    ["Recovery (5 min)", "88 bpm", "0.15", "0.08"],
                    ["Recovery (10 min)", "74 bpm", "0.16", "0.08"]
                ],
                observations: [
                    "Normal ECG has regular rhythm with identifiable P, QRS, T waves",
                    "Heart rate varies physiologically (breathing, exercise, position)",
                    "PR and QT intervals are HR-dependent (shorter at higher HR)",
                    "QRS duration remains relatively constant (not HR-dependent)",
                    "Einthoven's law holds: Lead II ≈ Lead I + Lead III (vector relationship)"
                ],
                analysis: {
                    wavesAndConduction: {
                        Pwave: "Atrial depolarization (SA node → atrial muscle)",
                        PRinterval: "Includes P wave + AV node delay (allows atrial contraction before ventricular)",
                        QRScomplex: "Rapid ventricular depolarization (bundle of His → Purkinje → ventricular muscle)",
                        STsegment: "Plateau phase of ventricular action potential (all ventricles depolarized)",
                        Twave: "Ventricular repolarization (ventricles return to resting potential)",
                        noAtrialRepolarization: "Hidden in QRS complex (occurs during ventricular depolarization)"
                    },
                    heartRateVariability: {
                        respiratory: "Vagal tone modulated by breathing (↓ inspiration, ↑ expiration)",
                        exercise: "Sympathetic ↑, parasympathetic ↓ → ↑ HR",
                        recovery: "Gradual return of parasympathetic tone → HR normalization",
                        clinicalSignificance: "Low HRV associated with increased cardiac risk"
                    },
                    einthovenPrinciple: {
                        vectorSum: "Heart generates electrical dipole (vector)",
                        leads: "Different leads 'view' vector from different angles",
                        leadI: "Horizontal (left-right)",
                        leadII: "Inferior (toward left leg)",
                        leadIII: "Difference between I and II",
                        relationship: "II = I + III (vector addition)"
                    }
                },
                calculations: {
                    heartRate: "HR = 300 / (large boxes between R waves) OR 1500 / (small boxes)",
                    QTcorrection: "QTc = QT / √RR (Bazett's formula)",
                    percentChange: "% Δ HR = [(HR₂ - HR₁) / HR₁] × 100%"
                },
                results: "ECG successfully records electrical activity of heart from body surface. Normal ECG shows regular P-QRS-T pattern with specific intervals. Heart rate and intervals vary with physiological state (exercise, breathing, position) due to autonomic nervous system modulation.",
                conclusions: [
                    "ECG is non-invasive method to assess cardiac electrical activity",
                    "Normal ECG has characteristic waves (P, QRS, T) and intervals (PR, QRS, QT)",
                    "Heart rate and conduction vary with autonomic tone and physiological state",
                    "Einthoven's triangle and lead relationships allow 3D electrical vector analysis",
                    "ECG is essential clinical tool for diagnosing arrhythmias, ischemia, and conduction defects"
                ],
                clinicalApplications: {
                    rhythmDisorders: {
                        atrialFibrillation: "Irregularly irregular, no P waves, atrial rate 400-600",
                        atrialFlutter: "Sawtooth pattern, regular atrial rate ~300",
                        ventricularTachycardia: "Wide QRS (>0.12 sec), rate 100-250",
                        AVblock: {
                            first: "PR >0.20 sec",
                            second: "Dropped beats (some P not followed by QRS)",
                            third: "Complete dissociation (P and QRS independent)"
                        },
                        bundleBranchBlock: "Wide QRS (>0.12 sec), abnormal QRS morphology"
                    },
                    ischemia: {
                        STEMI: "ST elevation (transmural infarction, emergency)",
                        NSTEMI: "ST depression or T wave inversion (subendocardial ischemia)",
                        location: "Lead pattern indicates which coronary artery/region affected"
                    },
                    electrolytes: {
                        hyperkalemia: "Peaked T waves, wide QRS, eventual sine wave",
                        hypokalemia: "Flat T, prominent U wave, ST depression",
                        hypercalcemia: "Short QT interval",
                        hypocalcemia: "Prolonged QT interval"
                    },
                    drugEffects: {
                        digitalis: "ST depression ('scooped'), shortened QT",
                        betaBlockers: "↓ HR, ↑ PR interval",
                        calciumChannelBlockers: "↓ HR, ↑ PR interval",
                        antiarrhythmics: "Prolonged QT (risk of torsades)"
                    }
                },
                realWorldRelevance: {
                    screening: "Pre-operative evaluation, sports physicals, routine check-ups",
                    emergency: "Chest pain (rule out MI), palpitations (identify arrhythmia), syncope",
                    monitoring: "ICU, operating room, stress testing",
                    ambulatory: "Holter monitor (24-48 hr), event recorder (weeks), implantable loop recorder",
                    telemetry: "Continuous ECG monitoring in hospital",
                    pacemakers: "ECG guides programming, detects malfunctions"
                },
                extensions: [
                    "Learn 12-lead ECG (provides 3D view of heart electrical activity)",
                    "Practice systematic ECG interpretation (rate, rhythm, axis, intervals, ST-T changes)",
                    "Study pathological ECGs (arrhythmias, ischemia, hypertrophy)",
                    "Investigate heart rate variability analysis (frequency domain, time domain)",
                    "Research signal-averaged ECG (detect late potentials in ventricular arrhythmia risk)",
                    "Explore body surface potential mapping (detailed 3D electrical activity)"
                ],
                troubleshooting: [
                    "Wandering baseline: Poor electrode contact, breathing artifact → check electrodes, have subject hold breath briefly",
                    "Muscle artifact: Subject not relaxed → ensure warmth, relaxation",
                    "60 Hz interference: Electrical devices nearby → turn off unnecessary equipment, ensure proper grounding",
                    "Absent P waves: Check if atrial fibrillation OR lead misplacement",
                    "Inverted complexes: Leads reversed → check RA/LA placement"
                ]
            }
        },

        // ========================================
        // EXPERIMENT 5: BLOOD TYPING (LANDSTEINER)
        // ========================================
        
        landsteiner_blood_typing: {
            name: "Karl Landsteiner's Blood Typing Discovery",
            relatedTopics: ['blood_composition'],
            category: 'hematology',
            historicalBackground: {
                scientist: "Karl Landsteiner",
                year: "1901",
                discovery: "ABO blood group system",
                nobelPrize: "1930 Nobel Prize in Physiology or Medicine",
                context: {
                    preLandsteiner: "Blood transfusions often fatal due to 'incompatibility' (agglutination)",
                    problem: "No understanding of why some transfusions succeeded, others failed",
                    hypothesis: "Blood is not uniform - different types exist"
                },
                experiment: {
                    subjects: "Himself and colleagues (6 people total)",
                    method: "Mixed serum from each person with red blood cells from every other person",
                    observation: "Some combinations caused agglutination (clumping), others did not",
                    pattern: "Systematic pattern of clumping revealed three blood groups (A, B, O)",
                    groupAB: "Discovered later (1902) by Decastello and Sturli"
                },
                mechanism: {
                    antigens: "Glycoproteins/glycolipids on RBC surface (A and B antigens)",
                    antibodies: "Naturally occurring in plasma (anti-A, anti-B)",
                    rule: "Person has antibodies against antigens they LACK",
                    typeA: "A antigen on RBCs, anti-B antibodies in plasma",
                    typeB: "B antigen on RBCs, anti-A antibodies in plasma",
                    typeAB: "Both A and B antigens, NO antibodies (universal recipient)",
                    typeO: "NO antigens, both anti-A and anti-B antibodies (universal donor)"
                },
                laterWork: {
                    rhFactor: "Discovered by Landsteiner and Wiener (1940) using Rhesus monkey RBCs",
                    otherSystems: "Now >30 blood group systems known (Kell, Duffy, Kidd, etc.)"
                },
                significance: [
                    "Made blood transfusion safe and routine",
                    "Foundation of transfusion medicine and immunohematology",
                    "Millions of lives saved",
                    "Led to understanding of immune recognition (self vs non-self)"
                ],
                quote: "Individual differences exist in the blood of different persons"
            },
            labExperiment: {
                title: "ABO and Rh Blood Typing",
                hypothesis: "Blood types can be determined by testing for agglutination (clumping) reactions between red blood cells and specific antibodies",
                purpose: "Determine ABO and Rh blood type using simulated or synthetic blood typing kits",
                background: {
                    agglutination: "Clumping of RBCs when antibodies bind to surface antigens and cross-link cells",
                    typing: "Mix blood with anti-A, anti-B, and anti-Rh antibodies, observe for clumping",
                    compatibility: "Must match types for transfusion to avoid hemolytic reaction"
                },
                note: "Due to safety concerns (bloodborne pathogens), use simulated blood typing kits with synthetic blood or work with certified laboratory under supervision",
                variables: {
                    independent: "Type of antibody added (anti-A, anti-B, anti-Rh)",
                    dependent: "Presence or absence of agglutination",
                    controlled: ["Blood sample", "Antibody concentration", "Temperature", "Mixing technique"]
                },
                materials: [
                    "Blood typing kit (simulated blood OR synthetic blood typing kit)",
                    "OR: Real blood samples with proper safety equipment (biohazard hood, gloves, sharps container)",
                    "Anti-A antibody reagent",
                    "Anti-B antibody reagent",
                    "Anti-Rh (anti-D) antibody reagent",
                    "Blood typing slides or cards (with wells labeled A, B, Rh)",
                    "Sterile applicator sticks or toothpicks",
                    "Disposable gloves",
                    "Biohazard waste container",
                    "Timer",
                    "Good lighting source",
                    "Magnifying glass (optional)"
                ],
                safetyPrecautions: [
                    "IF USING REAL BLOOD (requires certified laboratory):",
                    "  - Universal precautions: Treat all blood as potentially infectious",
                    "  - Wear gloves, lab coat, safety glasses",
                    "  - No mouth pipetting",
                    "  - Disinfect spills immediately with 10% bleach",
                    "  - Dispose of blood-contaminated materials in biohazard containers",
                    "  - Lancets in sharps container (never recap)",
                    "  - Wash hands thoroughly after removing gloves",
                    "  - Report needlestick injuries immediately",
                    "",
                    "IF USING SIMULATED BLOOD:",
                    "  - Follow manufacturer's instructions",
                    "  - Wear gloves (reagents may stain skin)",
                    "  - Avoid contact with eyes",
                    "  - Dispose properly per instructions"
                ],
                procedure: [
                    "USING SIMULATED BLOOD TYPING KIT (Educational Setting):",
                    "",
                    "SETUP:",
                    "Put on disposable gloves",
                    "Label blood typing slide wells: A, B, Rh",
                    "Obtain simulated blood sample (each sample is pre-assigned a blood type)",
                    "",
                    "TESTING:",
                    "1. Place 1-2 drops of simulated blood in each well (A, B, Rh)",
                    "2. Add reagents:",
                    "   - Well A: Add 1 drop of anti-A antibody",
                    "   - Well B: Add 1 drop of anti-B antibody",
                    "   - Well Rh: Add 1 drop of anti-Rh (anti-D) antibody",
                    "3. Mix each well gently with separate applicator stick (avoid cross-contamination)",
                    "4. Rock slide gently for 1-2 minutes",
                    "5. Observe for agglutination (clumping):",
                    "   - Positive (+): Visible clumps, grainy appearance, clear background",
                    "   - Negative (-): Smooth, homogeneous, no clumping",
                    "6. Record results in table",
                    "",
                    "INTERPRETATION:",
                    "Determine blood type based on agglutination pattern:",
                    "",
                    "Anti-A   | Anti-B   | Anti-Rh  | Blood Type",
                    "---------|----------|----------|------------",
                    "+        | -        | +        | A+",
                    "+        | -        | -        | A-",
                    "-        | +        | +        | B+",
                    "-        | +        | -        | B-",
                    "+        | +        | +        | AB+",
                    "+        | +        | -        | AB-",
                    "-        | -        | +        | O+",
                    "-        | -        | -        | O-",
                    "",
                    "MULTIPLE SAMPLES:",
                    "Test 4-6 different simulated blood samples",
                    "Record all results",
                    "Calculate frequency of each blood type in class",
                    "",
                    "TRANSFUSION COMPATIBILITY EXERCISE:",
                    "",
                    "Create transfusion compatibility chart:",
                    "",
                    "DONOR (columns) vs RECIPIENT (rows):",
                    "Can donor's RBCs be given to recipient?",
                    "",
                    "Example matrix:",
                    "Recipient | O  | A  | B  | AB",
                    "----------|----|----|----|----|",
                    "O         | ✓  | X  | X  | X  |",
                    "A         | ✓  | ✓  | X  | X  |",
                    "B         | ✓  | X  | ✓  | X  |",
                    "AB        | ✓  | ✓  | ✓  | ✓  |",
                    "",
                    "Rule: Recipient's antibodies must NOT attack donor's RBC antigens",
                    "",
                    "FORWARD TYPING:",
                    "What we did - test RBCs against known antibodies (determine person's type)",
                    "",
                    "REVERSE TYPING (Advanced):",
                    "Test person's serum/plasma against known RBC types",
                    "Should give opposite pattern (e.g., Type A plasma agglutinates B cells)",
                    "Used in blood banks to confirm typing",
                    "",
                    "CROSS-MATCHING (Clinical Practice):",
                    "Mix donor RBCs with recipient serum",
                    "No agglutination = compatible",
                    "Agglutination = INCOMPATIBLE (DO NOT TRANSFUSE)",
                    "",
                    "DISPOSAL:",
                    "Simulated blood: Dispose per manufacturer instructions",
                    "Real blood: Biohazard container",
                    "Remove gloves properly (inside-out), wash hands"
                ],
                expectedResults: {
                    distribution: {
                        O_pos: "37% (most common)",
                        A_pos: "36%",
                        B_pos: "9%",
                        AB_pos: "3%",
                        O_neg: "7%",
                        A_neg: "6%",
                        B_neg: "2%",
                        AB_neg: "1% (rarest)"
                    },
                    agglutinationPattern: {
                        typeA: "Clumps with anti-A, not with anti-B",
                        typeB: "Clumps with anti-B, not with anti-A",
                        typeAB: "Clumps with both anti-A and anti-B",
                        typeO: "No clumping with either anti-A or anti-B",
                        Rhpos: "Clumps with anti-Rh",
                        Rhneg: "No clumping with anti-Rh"
                    }
                },
                dataTable: [
                    ["Sample", "Anti-A", "Anti-B", "Anti-Rh", "Blood Type", "Can Donate To", "Can Receive From"],
                    ["1", "+", "-", "+", "A+", "A+, AB+", "A+, A-, O+, O-"],
                    ["2", "-", "+", "-", "B-", "B+, B-, AB+, AB-", "B-, O-"],
                    ["3", "+", "+", "+", "AB+", "AB+", "All types (universal recipient)"],
                    ["4", "-", "-", "+", "O+", "O+, A+, B+, AB+", "O+, O-"],
                    ["5", "-", "-", "-", "O-", "All types (universal donor)", "O- only"],
                    ["6", "+", "+", "-", "AB-", "AB+, AB-", "AB-, A-, B-, O-"]
                ],
                observations: [
                    "Agglutination appears as visible clumps or granular texture",
                    "Negative results remain smooth and homogeneous",
                    "Agglutination occurs within 1-2 minutes",
                    "O- is universal donor (no antigens to attack)",
                    "AB+ is universal recipient (no antibodies to attack donor RBCs)"
                ],
                analysis: {
                    molecularBasis: {
                        Hgene: "FUT1 gene codes for fucosyltransferase (adds fucose → H antigen)",
                        ABOgene: "Glycosyltransferases add sugars to H antigen",
                        Aallele: "Adds N-acetylgalactosamine → A antigen",
                        Ballele: "Adds galactose → B antigen",
                        Oallele: "Non-functional (no enzyme) → H antigen remains (no A or B)"
                    },
                    antibodies: {
                        natural: "Anti-A and anti-B are naturally occurring (IgM)",
                        develop: "Appear in first 6 months of life (exposure to environmental antigens)",
                        mechanism: "Cross-reactivity with bacteria/food antigens similar to A/B",
                        noAntiRh: "Anti-Rh NOT naturally occurring (requires exposure to Rh+ blood)"
                    },
                    transfusionReaction: {
                        acute: "Incompatible transfusion → antibodies bind donor RBCs → agglutination + hemolysis",
                        symptoms: "Fever, chills, back pain, dark urine (hemoglobinuria), shock",
                        mechanism: "Complement activation → intravascular hemolysis → kidney damage",
                        fatal: "Can be fatal if not stopped immediately"
                    },
                    rhDisease: {
                        scenario: "Rh- mother + Rh+ fetus",
                        firstPregnancy: "Usually no problem (no anti-Rh antibodies yet)",
                        sensitization: "During delivery, fetal RBCs enter maternal circulation → mother develops anti-Rh (IgG)",
                        secondPregnancy: "Anti-Rh IgG crosses placenta → attacks Rh+ fetal RBCs → hemolytic disease of newborn",
                        prevention: "RhoGAM (anti-D immunoglobulin) given to Rh- mother at 28 weeks and after delivery → prevents sensitization"
                    }
                },
                results: "Blood type can be determined by testing for agglutination with anti-A, anti-B, and anti-Rh antibodies. Each blood type has characteristic pattern. Transfusion compatibility requires matching donor and recipient to prevent hemolytic reactions.",
                conclusions: [
                    "ABO and Rh systems are most clinically important blood groups",
                    "Agglutination reaction is simple, rapid, reliable method for blood typing",
                    "Type O- is universal donor, AB+ is universal recipient",
                    "Transfusion compatibility requires careful matching to prevent reactions",
                    "Understanding blood types is essential for safe transfusion medicine"
                ],
                realWorldApplications: [
                    "Blood transfusions (surgery, trauma, anemia, cancer)",
                    "Organ transplantation (ABO matching required)",
                    "Prenatal care (Rh incompatibility screening, RhoGAM administration)",
                    "Forensic science (crime scene blood evidence)",
                    "Paternity testing (ABO can exclude, not confirm)",
                    "Blood donation and banking",
                    "Anthropology and population genetics (blood type distribution varies by ethnicity)"
                ],
                extensions: [
                    "Research other blood group systems (Kell, Duffy, Kidd, MNS)",
                    "Investigate Bombay phenotype (rare - lacks H antigen)",
                    "Study crossmatch procedures in blood banks",
                    "Examine blood type distribution across different populations",
                    "Research CRISPR gene editing to create universal donor blood (remove A/B antigens)",
                    "Investigate cold agglutinins (antibodies active at lower temperatures)"
                ],
                clinicalPearls: [
                    "Always give O- in emergency if type unknown",
                    "Crossmatch takes ~45 min (type and screen faster but less comprehensive)",
                    "Massive transfusion protocol: Give O- RBCs, AB plasma (universal), platelets",
                    "Indirect Coombs test: Detects antibodies in serum",
                    "Direct Coombs test: Detects antibodies bound to RBCs (hemolytic anemia)",
                    "Weakly positive Rh (weak D): May need Rh+ blood (can make anti-D)"
                ]
            }
        }
    };

    // Link experiments to topics
    this.linkExperimentsToTopics();
}

linkExperimentsToTopics() {
    Object.entries(this.circulatoryExperiments).forEach(([expId, experiment]) => {
        experiment.relatedTopics.forEach(topicId => {
            if (this.circulatoryTopics[topicId]) {
                if (!this.circulatoryTopics[topicId].relatedExperiments) {
                    this.circulatoryTopics[topicId].relatedExperiments = [];
                }
                this.circulatoryTopics[topicId].relatedExperiments.push({
                    id: expId,
                    name: experiment.name,
                    category: experiment.category
                });
            }
        });
    });
}

initializeMisconceptionDatabase() {
    this.commonMisconceptions = {
        heart_anatomy: [
            'Thinking the heart is on the left side (it\'s in the center, slight leftward tilt)',
            'Believing all four chambers contract at once (atria first, then ventricles)',
            'Confusing arteries with veins based on oxygen content (arteries = away from heart, veins = toward heart)',
            'Thinking heart has only one pump (it\'s two pumps: right and left sides)',
            'Believing heart size is like a fist (it\'s actually larger, ~12-13 cm long)'
        ],
        
        blood_vessels: [
            'Thinking arteries always carry oxygenated blood (pulmonary arteries carry deoxygenated)',
            'Believing veins are blue (blood is never blue - veins appear blue due to light absorption)',
            'Confusing arteries and veins solely by oxygen content (direction relative to heart is key)',
            'Thinking all capillaries are identical (continuous, fenestrated, and sinusoid types exist)'
        ],
        
        blood_pressure: [
            'Thinking normal BP is exactly 120/80 for everyone (varies by age, genetics, fitness)',
            'Believing higher numbers are always worse (systolic 110 vs 120 both normal)',
            'Confusing systolic with diastolic (systolic = contraction, diastolic = relaxation)',
            'Thinking BP is constant throughout day (varies with activity, time, stress)'
        ],
        
        cardiac_cycle: [
            'Thinking "lub-dub" are heart contractions (they\'re valve closures)',
            'Believing ventricles and atria contract simultaneously (atria first, then ventricles)',
            'Confusing systole with diastole (systole = contraction, diastole = relaxation)',
            'Thinking blood flows because heart "sucks" it in (pressure gradients drive flow)'
        ],
        
        blood_composition: [
            'Thinking blood is primarily red blood cells (plasma is ~55%, RBCs ~45%)',
            'Believing oxygen is dissolved in plasma (mostly bound to hemoglobin in RBCs)',
            'Confusing serum with plasma (serum = plasma minus clotting factors)',
            'Thinking all blood cells are made in blood (made in bone marrow)'
        ]
    };
}

initializeMetacognitivePrompts() {
    this.metacognitivePrompts = {
        beforeLearning: [
            "What do you know about how the heart pumps blood?",
            "How do you think blood circulates through the body?",
            "What questions do you have about the circulatory system?"
        ],
        duringLearning: [
            "How does this relate to what you know about the heart?",
            "Can you explain the difference between arteries and veins?",
            "What would happen if this part of the system failed?"
        ],
        afterLearning: [
            "Can you trace the path of blood through the entire circulatory system?",
            "What surprised you most about how the heart works?",
            "How would you explain blood pressure to someone else?"
        ]
    };
}

initializeContextualScenarios() {
    this.contextualScenarios = {
        hypertension: {
            scenario: "Managing high blood pressure",
            context: "Understanding how lifestyle and medication affect cardiovascular system",
            application: "Reduced salt, exercise, weight loss decrease blood volume and peripheral resistance"
        },
        heartAttack: {
            scenario: "Myocardial infarction (heart attack)",
            context: "Blocked coronary artery prevents oxygen delivery to heart muscle",
            application: "Chest pain, ECG changes (ST elevation), need rapid treatment to restore blood flow"
        },
        exercise: {
            scenario: "Cardiovascular response to exercise",
            context: "Increased demand for oxygen during physical activity",
            application: "Heart rate and stroke volume increase (cardiac output up to 5×), blood redistributed to muscles"
        }
    };
}

initializeAssessmentRubrics() {
    this.assessmentRubrics = {
        understanding: {
            novice: "Can name heart chambers and major vessels",
            developing: "Understands blood flow pathway through heart and body",
            proficient: "Explains cardiac cycle, pressure changes, and regulation",
            expert: "Integrates anatomy, physiology, and clinical applications"
        }
    };
}

// ========================================
// CONTINUED HANDLER METHODS FOR CIRCULATORY SYSTEM TOPICS
// ========================================

handleBloodVessels(problem) {
    const content = {
        topic: "Blood Vessels: Structure, Function, and Hemodynamics",
        category: 'vascular_anatomy',
        summary: "Blood vessels form a closed circulatory system consisting of arteries (carry blood away from heart), veins (return blood to heart), and capillaries (exchange sites). Vessel structure is precisely adapted to function, with variations in wall thickness, elasticity, and permeability.",
        
        classification: {
            byDirection: {
                arteries: "Carry blood AWAY from heart (efferent vessels)",
                veins: "Carry blood TOWARD heart (afferent vessels)",
                exception: "Pulmonary arteries carry deoxygenated blood; pulmonary veins carry oxygenated blood"
            },
            bySize: {
                large: "Elastic arteries, large veins (vena cavae)",
                medium: "Muscular arteries, medium veins",
                small: "Arterioles, venules",
                microscopic: "Capillaries (5-10 μm)"
            },
            byFunction: {
                conductingVessels: "Large elastic arteries - conduct blood with minimal resistance",
                distributingVessels: "Muscular arteries - distribute blood to organs",
                resistanceVessels: "Arterioles - primary site of resistance, regulate blood flow",
                exchangeVessels: "Capillaries - nutrient/gas/waste exchange",
                capacitanceVessels: "Veins - hold ~60% of blood volume, reservoir function"
            }
        },

        vesselWallStructure: {
            generalPattern: {
                tunicaIntima: "Innermost layer",
                tunicaMedia: "Middle layer",
                tunicaExterna: "Outermost layer (adventitia)",
                note: "Not all vessels have all three layers (capillaries have only endothelium)"
            },

            tunicaIntima: {
                components: {
                    endothelium: {
                        tissue: "Simple squamous epithelium (single layer of flat cells)",
                        continuity: "Continuous throughout entire vascular system",
                        functions: [
                            "Smooth surface minimizes friction and turbulence",
                            "Selective permeability barrier",
                            "Secretes anticoagulants (prostacyclin, NO, tissue plasminogen activator)",
                            "Secretes vasodilators (NO, prostacyclin) and vasoconstrictors (endothelin)",
                            "Regulates inflammation and immune cell adhesion",
                            "Regulates angiogenesis (VEGF)",
                            "Barrier function (tight junctions in BBB)"
                        ],
                        dysfunction: "Atherosclerosis, thrombosis, inflammation",
                        surfaceArea: "~5,000-6,000 m² (largest endocrine organ)"
                    },
                    basementMembrane: "Thin layer of extracellular matrix (collagen IV, laminin)",
                    subendothelialLayer: {
                        composition: "Loose connective tissue (collagen, elastic fibers, proteoglycans)",
                        present: "Larger vessels (not capillaries)",
                        contains: "Occasional smooth muscle cells in large vessels"
                    },
                    internalElasticLamina: {
                        structure: "Fenestrated sheet of elastic tissue",
                        present: "Muscular arteries (well-developed), elastic arteries (indistinct)",
                        absent: "Capillaries, venules, veins",
                        function: "Separates intima from media, allows diffusion",
                        fenestrations: "Pores allowing nutrients to reach media"
                    }
                },
                thickness: "Minimal in capillaries, thicker in arteries"
            },

            tunicaMedia: {
                composition: {
                    elasticArteries: "Predominantly elastic fibers (elastin) + some smooth muscle",
                    muscularArteries: "Predominantly smooth muscle (40+ layers) + some elastic fibers",
                    veins: "Sparse smooth muscle and elastic fibers"
                },
                smoothMuscle: {
                    arrangement: "Circumferential layers (around vessel)",
                    innervation: "Sympathetic (α₁ - vasoconstriction, β₂ - vasodilation)",
                    functions: [
                        "Vasoconstriction (α₁ activation) - increases resistance",
                        "Vasodilation (β₂ activation or NO release) - decreases resistance",
                        "Regulate blood flow distribution",
                        "Maintain vascular tone",
                        "Respond to local metabolites"
                    ],
                    control: {
                        neural: "Sympathetic nerves (mainly α₁)",
                        hormonal: "Angiotensin II, vasopressin (constriction); ANP (dilation)",
                        local: "NO, metabolites (CO₂, H⁺, K⁺, adenosine), temperature",
                        myogenic: "Stretch-activated (Bayliss effect)"
                    }
                },
                elasticFibers: {
                    abundance: "High in elastic arteries, decreases in muscular arteries",
                    function: "Allow vessel stretch during systole, recoil during diastole (windkessel effect)",
                    degradation: "With age → reduced compliance, increased pulse pressure"
                },
                externalElasticLamina: {
                    present: "Muscular arteries",
                    structure: "Fenestrated elastic sheet",
                    function: "Separates media from externa"
                },
                thickness: "Thickest layer in arteries, thin in veins"
            },

            tunicaExterna: {
                alsoKnown: "Tunica adventitia",
                composition: {
                    connectiveTissue: "Dense irregular connective tissue (collagen, elastic fibers)",
                    vasaVasorum: "'Vessels of vessels' - supply blood to outer vessel wall",
                    nerviFibers: "Sympathetic nerve fibers (vasomotor control)",
                    lymphatics: "Drain interstitial fluid"
                },
                vasaVasorum: {
                    necessity: "Vessel walls >0.5 mm thick need own blood supply",
                    distribution: "Mainly in media and externa of large vessels",
                    types: "Vasa vasorum interna (from lumen) and externa (from adventitia)",
                    clinical: "Target for anti-angiogenic therapy in atherosclerosis"
                },
                thickness: "Thickest layer in veins, thinner in arteries",
                function: "Anchors vessel, provides structural support, neurovascular supply"
            }
        },

        arterialTypes: {
            elasticArteries: {
                alsoKnown: "Conducting arteries, large arteries",
                examples: [
                    "Aorta (largest artery)",
                    "Pulmonary trunk and pulmonary arteries",
                    "Brachiocephalic trunk",
                    "Common carotid arteries",
                    "Subclavian arteries",
                    "Common iliac arteries"
                ],
                diameter: "Large (>1 cm, aorta ~2.5 cm)",
                wallStructure: {
                    intima: "Endothelium + subendothelial layer",
                    media: {
                        thickness: "Very thick (up to 1.5 mm in aorta)",
                        composition: "40-70 elastic lamellae (fenestrated sheets) alternating with smooth muscle",
                        elastin: "Predominant component",
                        muscleLayers: "Relatively few smooth muscle layers"
                    },
                    externa: "Thin relative to media, vasa vasorum present"
                },
                functions: {
                    conduction: "Low-resistance conduits for blood flow",
                    windkesselEffect: {
                        systole: "Vessel stretches (elastic recoil stores energy)",
                        diastole: "Vessel recoils, propels blood forward during ventricular relaxation",
                        result: "Dampens pressure oscillations, maintains diastolic pressure",
                        analogy: "Like inflating balloon (stores energy) then releasing (propels)"
                    },
                    compliance: "High compliance allows volume changes with minimal pressure change",
                    pulseWave: "Propagate pulse wave from heart to periphery"
                },
                pressures: {
                    aorta: "120/80 mmHg (systolic/diastolic)",
                    pulsatile: "Highly pulsatile flow"
                },
                clinical: {
                    atherosclerosis: "Common site (aorta, carotid, iliac)",
                    aneurysm: "Dilation >50% normal diameter (abdominal aortic aneurysm most common)",
                    dissection: "Tear in intima allows blood into media (aortic dissection - emergency)",
                    arteriosclerosis: "Age-related stiffening (loss of elastin) → increased pulse pressure"
                },
                ageChanges: "Elastin degrades, collagen increases → stiffness → ↑ systolic BP, ↑ pulse pressure"
            },

            muscularArteries: {
                alsoKnown: "Distributing arteries, medium arteries",
                examples: [
                    "Brachial artery (arm)",
                    "Radial and ulnar arteries (forearm)",
                    "Femoral artery (thigh)",
                    "Popliteal artery (knee)",
                    "Coronary arteries (heart)",
                    "Mesenteric arteries (intestines)",
                    "Renal arteries (kidneys)"
                ],
                diameter: "Medium (0.3-1 cm)",
                wallStructure: {
                    intima: "Endothelium + prominent internal elastic lamina",
                    media: {
                        thickness: "Thick (up to 40 layers of smooth muscle)",
                        composition: "Predominantly smooth muscle with some elastic fibers",
                        arrangement: "Circumferential smooth muscle layers"
                    },
                    externa: "External elastic lamina + connective tissue"
                },
                functions: {
                    distribution: "Distribute blood to specific organs and tissues",
                    regulation: {
                        vasoconstriction: "Sympathetic α₁ activation → decreased diameter → reduced flow",
                        vasodilation: "Decreased sympathetic tone, NO, metabolites → increased flow",
                        organSpecific: "Redirect blood to active organs (exercise → muscle; digestion → GI)"
                    },
                    resistance: "Contribute to total peripheral resistance (less than arterioles)"
                },
                pressures: "~120/80 mmHg proximally → ~90/60 mmHg distally (gradual pressure drop)",
                clinical: {
                    coronaryArteryDisease: "Atherosclerosis of coronary arteries → angina, MI",
                    peripheralArterialDisease: "Atherosclerosis of limb arteries → claudication, gangrene",
                    stenosis: "Narrowing (atherosclerosis, thrombosis) → reduced flow",
                    spasm: "Abnormal constriction (Raynaud's, Prinzmetal angina)"
                }
            },

            arterioles: {
                diameter: "Small (10-100 μm)",
                wallStructure: {
                    intima: "Endothelium only (no subendothelial layer)",
                    media: "1-3 layers of smooth muscle (circumferential)",
                    externa: "Thin or absent"
                },
                functions: {
                    primaryResistanceVessel: "Main site of resistance (60% of total peripheral resistance)",
                    flowRegulation: "Control blood flow to capillary beds (precapillary sphincters)",
                    pressureDrop: "Major pressure drop occurs here (~85 mmHg → 35 mmHg)",
                    redistributeFlow: "Shunt blood between organs based on metabolic needs"
                },
                control: {
                    neural: {
                        sympathetic: "Tonic vasoconstriction (α₁ receptors)",
                        withdrawal: "Sympathetic withdrawal → passive vasodilation",
                        distribution: "Most arterioles, except brain and coronary (minimal sympathetic)"
                    },
                    local: {
                        metabolic: {
                            vasodilators: "↑ CO₂, ↑ H⁺, ↓ O₂, ↑ K⁺, ↑ adenosine, ↑ temperature",
                            mechanism: "Active tissue produces metabolites → local vasodilation → ↑ blood flow",
                            autoregulation: "Maintains constant flow despite pressure changes (myogenic + metabolic)"
                        },
                        myogenic: "Increased stretch → vasoconstriction (Bayliss effect)",
                        endothelial: "NO (vasodilator), endothelin (vasoconstrictor), prostacyclin (vasodilator)"
                    },
                    hormonal: {
                        vasoconstrictors: "Angiotensin II, vasopressin (ADH), epinephrine (α₁)",
                        vasodilators: "ANP, epinephrine (β₂ in muscle), histamine, bradykinin"
                    }
                },
                pressures: "~85 mmHg (proximal) → ~35 mmHg (distal)",
                clinical: {
                    hypertension: "Increased arteriolar resistance → ↑ BP",
                    regulation: "Antihypertensive drugs target arterioles (vasodilators, ACE inhibitors)",
                    shockCompensation: "Sympathetic vasoconstriction maintains BP in shock"
                },
                importance: "Most important vessel for regulating blood pressure and flow distribution"
            },

            metarterioles: {
                description: "Transition between arterioles and capillaries",
                structure: "Discontinuous smooth muscle",
                precapillarySphincters: {
                    location: "Where capillaries branch from metarterioles",
                    structure: "Single smooth muscle cell wrapped around capillary entrance",
                    function: "Control blood flow into individual capillaries",
                    control: "Local metabolites (O₂, CO₂, nutrients)",
                    vasomotion: "Rhythmic contraction/relaxation (5-10 cycles/min)"
                },
                function: "Regulate which capillary beds are perfused at any given time"
            }
        },

        capillaries: {
            structure: {
                diameter: "5-10 μm (just large enough for RBC to pass single-file)",
                length: "0.5-1 mm",
                wallStructure: {
                    endothelium: "Single layer of endothelial cells",
                    basementMembrane: "Thin basal lamina",
                    noPericytes: "Occasional pericytes (contractile cells) wrap around capillaries",
                    noSmoothMuscle: "No smooth muscle layer",
                    noMedia: "No tunica media",
                    noExterna: "No tunica externa"
                },
                thickness: "~0.5 μm (very thin for efficient exchange)"
            },

            types: {
                continuous: {
                    structure: "Uninterrupted endothelium with tight junctions",
                    location: [
                        "Muscle (skeletal, cardiac, smooth)",
                        "Skin",
                        "Lungs (alveolar capillaries)",
                        "Adipose tissue",
                        "CNS (blood-brain barrier)"
                    ],
                    permeability: "Low to moderate - small molecules only",
                    transport: {
                        lipidSoluble: "O₂, CO₂, steroids - diffuse through membrane",
                        waterSoluble: "Small molecules through intercellular clefts",
                        transcytosis: "Larger molecules in vesicles (pinocytosis)"
                    },
                    BBB: {
                        specialization: "Very tight junctions, minimal transcytosis",
                        function: "Protects brain from toxins, pathogens",
                        allows: "O₂, CO₂, glucose, amino acids (via transporters)",
                        blocks: "Most proteins, drugs, ions (without transporters)"
                    }
                },

                fenestrated: {
                    structure: "Pores (fenestrations) in endothelium (60-80 nm)",
                    diaphragm: "Thin diaphragm may cover pores (except glomerulus)",
                    location: [
                        "Kidneys (glomeruli) - filtration",
                        "Small intestine (villi) - absorption",
                        "Endocrine glands - hormone secretion",
                        "Choroid plexus (CSF production)"
                    ],
                    permeability: "High - allows small proteins to pass",
                    glomerulus: {
                        unique: "No diaphragm over fenestrations",
                        filtration: "Water, small solutes, small proteins filtered",
                        size: "Molecules <70 kDa can pass",
                        charge: "Negative charge in basement membrane repels proteins"
                    }
                },

                sinusoid: {
                    alsoKnown: "Discontinuous capillaries",
                    structure: "Large gaps between endothelial cells, discontinuous basement membrane",
                    diameter: "30-40 μm (larger than regular capillaries)",
                    location: [
                        "Liver (hepatic sinusoids)",
                        "Bone marrow (allow blood cell entry)",
                        "Spleen (allow RBC passage and destruction)",
                        "Some endocrine glands"
                    ],
                    permeability: "Very high - cells and large proteins can pass",
                    liver: {
                        function: "Allow exchange between blood and hepatocytes",
                        kupfferCells: "Macrophages in sinusoid lumen (remove bacteria, old RBCs)",
                        proteins: "Albumin, clotting factors secreted into blood"
                    }
                }
            },

            functions: {
                exchange: "PRIMARY FUNCTION - nutrient/gas/waste exchange",
                mechanisms: {
                    diffusion: {
                        principle: "Down concentration gradient",
                        O2: "Blood → tissue (PCO₂: 100 → 40 mmHg)",
                        CO2: "Tissue → blood (PCO₂: 46 → 40 mmHg)",
                        lipidSoluble: "Diffuse through endothelial membrane",
                        waterSoluble: "Through intercellular clefts or pores",
                        fickLaw: "Rate ∝ (surface area × concentration gradient) / distance"
                    },
                    filtration: {
                        definition: "Fluid movement out of capillary due to pressure",
                        location: "Arterial end of capillary",
                        drivingForce: "Hydrostatic pressure (blood pressure)",
                        opposes: "Oncotic pressure (plasma proteins)"
                    },
                    reabsorption: {
                        definition: "Fluid movement into capillary",
                        location: "Venous end of capillary",
                        drivingForce: "Oncotic pressure > hydrostatic pressure",
                        amount: "~90% of filtered fluid reabsorbed"
                    },
                    transcytosis: {
                        mechanism: "Endocytosis on one side, exocytosis on other",
                        molecules: "Large molecules (insulin, transferrin, LDL)",
                        receptorMediated: "Often requires specific receptors"
                    }
                },
                starlingForces: {
                    hydrostatic: {
                        capillary: "Pushes fluid OUT of capillary",
                        arterial: "~35 mmHg",
                        venous: "~15 mmHg",
                        interstitial: "~0 mmHg (or slightly negative)"
                    },
                    oncotic: {
                        capillary: "Pulls fluid INTO capillary",
                        plasma: "~25 mmHg (due to proteins, mainly albumin)",
                        interstitial: "~5 mmHg (small amount of protein in interstitium)"
                    },
                    netFiltration: {
                        arterialEnd: "P_c (35) - P_i (0) - π_p (25) + π_i (5) = +15 mmHg (filtration)",
                        venousEnd: "P_c (15) - P_i (0) - π_p (25) + π_i (5) = -5 mmHg (reabsorption)",
                        result: "Net filtration of ~10% fluid (rest returns via lymphatics)"
                    }
                },
                lymphaticReturn: {
                    amount: "~3 L/day returns via lymphatics (10% of filtered fluid)",
                    importance: "Prevents edema",
                    composition: "Protein-rich fluid (escaped proteins)"
                }
            },

            density: {
                metabolic: "~2,000-3,000 capillaries/mm² in cardiac and skeletal muscle",
                lowMetabolic: "~300-400 capillaries/mm² in skin, adipose",
                totalNumber: "~10-40 billion capillaries in body",
                surfaceArea: "~500-700 m² (tennis court size!)",
                bloodVolume: "~5% of total blood volume in capillaries at any time"
            },

            pressures: "~35 mmHg (arterial end) → ~15 mmHg (venous end)",

            clinical: {
                edema: {
                    causes: [
                        "↑ Capillary pressure (heart failure, venous obstruction)",
                        "↓ Plasma oncotic pressure (hypoalbuminemia - liver disease, malnutrition, nephrotic syndrome)",
                        "↑ Capillary permeability (inflammation, allergy, burns)",
                        "Lymphatic obstruction (lymphedema)"
                    ],
                    mechanism: "Imbalance in Starling forces → net filtration exceeds reabsorption + lymphatic drainage"
                },
                diabeticMicroangiopathy: "Thickened basement membrane → impaired exchange (retinopathy, nephropathy)",
                capillaryRefill: "Press nail bed, release, observe refill time (<2 sec normal) - assesses perfusion"
            }
        },

        venousSystem: {
            venules: {
                diameter: "10-100 μm",
                structure: {
                    small: "Endothelium + pericytes (minimal smooth muscle)",
                    large: "Endothelium + 1-2 layers smooth muscle + thin adventitia"
                },
                functions: {
                    collection: "Collect blood from capillaries",
                    inflammation: "Site of leukocyte emigration (diapedesis)",
                    permeability: "High permeability (especially post-capillary venules)"
                },
                pressures: "~15 mmHg"
            },

            veins: {
                diameter: "Variable (0.5-3 cm for large veins)",
                wallStructure: {
                    intima: "Endothelium + thin subendothelial layer",
                    media: {
                        thickness: "THIN (much less smooth muscle than arteries)",
                        composition: "Sparse smooth muscle + collagen",
                        note: "Weakest layer"
                    },
                    externa: {
                        thickness: "THICKEST layer (opposite of arteries)",
                        composition: "Collagen + elastic fibers",
                        dominant: "Provides most structural support"
                    }
                },
                lumen: "Larger than corresponding arteries, irregular (collapses when empty)",
                valves: {
                    structure: "Semilunar folds of intima (endothelium + connective tissue)",
                    location: "Limbs (especially legs), superficial veins",
                    absent: "Abdominal and thoracic veins (no valves in vena cavae)",
                    function: "Prevent backflow (ensure unidirectional flow toward heart)",
                    musclePump: "Skeletal muscle contraction squeezes veins → pushes blood through valves → toward heart",
                    failure: "Valve incompetence → blood pools → varicose veins"
                },
                functions: {
                    capacitance: {
                        bloodVolume: "~60-70% of total blood volume in veins (reservoir)",
                        unstressed: "Low pressure system can hold large volume",
                        mobilization: "Sympathetic venoconstriction → ↓ venous volume → ↑ venous return"
                    },
                    return: "Return blood to heart (venous return = cardiac output at steady state)",
                    thermRegulation: "Venous plexuses in skin (heat dissipation)"
                },
                pressures: {
                    peripheral: "~15 mmHg",
                    venaCava: "~0-5 mmHg (right atrial pressure)",
                    gradient: "Small pressure gradient drives flow"
                },
                bloodReturn: {
                    mechanisms: {
                        musclePump: {
                            description: "Skeletal muscle contraction compresses veins",
                            valves: "Ensure unidirectional flow toward heart",
                            importance: "Critical in legs (fight gravity)",
                            exercise: "Enhanced venous return → ↑ preload → ↑ stroke volume"
                        },
                        respiratoryPump: {
                            inspiration: "↓ Intrathoracic pressure → ↑ pressure gradient → ↑ venous return",
                            abdominal: "Diaphragm descends → ↑ abdominal pressure → squeezes abdominal veins",
                            expiration: "Opposite effects",
                            netEffect: "Breathing facilitates venous return"
                        },
                        sympatheticVenoconstriction: {
                            mechanism: "Sympathetic α₁ activation → vein constriction → ↓ venous volume → ↑ venous return",
                            exercise: "Mobilizes blood from venous reservoir",
                            compensation: "In hemorrhage, shock (maintain venous return)"
                        },
                        gravity: {
                            supine: "Minimal effect",
                            standing: "Blood pools in legs → ↓ venous return → orthostatic response",
                            headDown: "↑ venous return (Trendelenburg position)"
                        },
                        visALargo: "Heart suction (minimal contribution)"
                    }
                },
                clinical: {
                    varicoseVeins: {
                        definition: "Dilated, tortuous superficial veins with incompetent valves",
                        location: "Legs (great/small saphenous veins)",
                        causes: "Prolonged standing, pregnancy, obesity, age, genetics",
                        pathophysiology: "Valve failure → blood pools → vein dilates → worsens valve incompetence",
                        complications: "Pain, edema, skin changes, ulceration, thrombophlebitis",
                        treatment: "Compression stockings, sclerotherapy, ablation, surgery"
                    },
                    DVT: {
                        definition: "Deep vein thrombosis (clot in deep veins)",
                        location: "Usually legs (femoral, popliteal, iliac veins)",
                        virchowTriad: {
                            stasis: "Immobility, long flights, bed rest",
                            hypercoagulability: "Malignancy, pregnancy, oral contraceptives, genetic (Factor V Leiden)",
                            endothelialInjury: "Trauma, surgery, IV catheters"
                        },
                        diagnosis: "Ultrasound (compression, Doppler), D-dimer (screening)",
                        complications: "Pulmonary embolism (potentially fatal)",
                        treatment: "Anticoagulation (heparin, warfarin, DOACs)",
                        prevention: "Early mobilization, compression stockings, prophylactic anticoagulation"
                    },
                    chronicVenousInsufficiency: {
                        definition: "Impaired venous return → chronic venous hypertension",
                        causes: "Valve incompetence, DVT, obesity",
                        manifestations: "Edema, skin pigmentation, lipodermatosclerosis, venous ulcers",
                        ulcers: "Medial malleolus (ankle), painful, poor healing"
                    }
                }
            },

            venaCavae: {
                superiorVenaCava: {
                    formation: "Junction of left and right brachiocephalic veins",
                    drains: "Head, neck, upper limbs, upper thorax",
                    enters: "Right atrium (superior aspect)",
                    length: "~7 cm",
                    valves: "None",
                    SVCsyndrome: "Obstruction (tumor, thrombosis) → facial edema, venous distension"
                },
                inferiorVenaCava: {
                    formation: "Junction of left and right common iliac veins (L5)",
                    drains: "Lower limbs, pelvis, abdomen, kidneys",
                    enters: "Right atrium (inferior aspect)",
                    length: "~20 cm",
                    tributaries: "Renal veins, hepatic veins, gonadal veins, lumbar veins",
                    valves: "None",
                    compression: "Pregnancy (uterus compresses IVC) → ↓ venous return → orthostatic symptoms"
                }
            }
        },

        arteriesVsVeins: {
            comparisonTable: [
                {feature: "Direction", artery: "Away from heart", vein: "Toward heart"},
                {feature: "Blood O₂", artery: "High (except pulmonary)", vein: "Low (except pulmonary)"},
                {feature: "Pressure", artery: "High (120/80 mmHg)", vein: "Low (15 mmHg)"},
                {feature: "Tunica Media", artery: "Thick (smooth muscle, elastic)", vein: "Thin"},
                {feature: "Tunica Externa", artery: "Thin", vein: "Thickest layer"},
                {feature: "Lumen", artery: "Small, round, patent", vein: "Large, irregular, collapsible"},
                {feature: "Wall Thickness", artery: "Thick", vein: "Thin"},
                {feature: "Valves", artery: "None (except heart)", vein: "Present in limbs"},
                {feature: "Pulsatile", artery: "Yes (can palpate pulse)", vein: "No pulse"},
                {feature: "Vasoconstriction", artery: "Strong response", vein: "Weak response"},
                {feature: "Blood Volume", artery: "~15% total blood", vein: "~65% total blood"},
                {feature: "Function", artery: "Distribution, resistance", vein: "Collection, capacitance"}
            ],
            identification: {
                histology: "Artery = thick media, small lumen, round; Vein = thin media, large lumen, irregular",
                paired: "Arteries and veins often run together (neurovascular bundle)",
                anatomicalPosition: "Arteries typically deeper, veins more superficial"
            }
        },

        specializedVascularBeds: {
            cerebralCirculation: {
                features: {
                    circleOfWillis: "Arterial anastomoses at brain base (provides collateral circulation)",
                    BBB: "Tight continuous capillaries protect brain",
                    autoregulation: "Maintains constant blood flow (MAP 60-160 mmHg)",
                    noSympathetic: "Minimal sympathetic innervation (local control dominant)"
                },
                bloodFlow: "~700 mL/min (14-15% of CO) - constant",
                regulation: {
                    metabolic: "↑ CO₂, ↓ pH → powerful vasodilation",
                    myogenic: "Bayliss effect maintains constant flow",
                    cushingReflex: "↑ ICP → ↑ BP (maintain cerebral perfusion)"
                },
                clinical: {
                    stroke: "Ischemic (clot) or hemorrhagic (bleed)",
                    TIA: "Transient ischemic attack (mini-stroke)",
                    aneurysm: "Berry aneurysms (circle of Willis) → subarachnoid hemorrhage"
                }
            },

            coronaryCirculation: {
                features: {
                    filling: "Mainly during DIASTOLE (systole compresses vessels)",
                    dominance: "Right (70%), left (10%), co-dominant (20%)",
                    autoregulation: "Maintains flow despite pressure changes",
                    metabolic: "Adenosine, ↓O₂ → powerful vasodilation"
                },
                bloodFlow: "~250 mL/min at rest (5% of CO), up to 1000 mL/min (exercise)",
                O2extraction: "75% at rest (vs 25% in other organs) - already near maximum",
                requirement: "↑ Demand must be met by ↑ flow (not ↑ extraction)",
                clinical: "Coronary artery disease, myocardial infarction, angina"
            },

            pulmonaryCirculation: {
                features: {
                    lowPressure: "~25/10 mmHg (1/5 of systemic)",
                    lowResistance: "Thin-walled vessels, short pathway",
                    recruitable: "Can recruit collapsed capillaries (exercise)",
                    hypoxicVasoconstriction: "↓ O₂ → vasoconstriction (opposite of systemic)"
                },
                bloodFlow: "~5 L/min (= cardiac output)",
                purpose: "Gas exchange (oxygenate blood, remove CO₂)",
                regulation: {
                    hypoxic: "Low alveolar O₂ → vasoconstriction → shunt blood to ventilated regions",
                    passive: "Mainly passive (responds to cardiac output changes)"
                },
                clinical: {
                    pulmonaryHypertension: "Mean PA pressure >25 mmHg → RV failure",
                    pulmonaryEmbolism: "Clot (usually from DVT) → ↑ PA pressure, ↓ gas exchange"
                }
            },

            hepaticCirculation: {
                dualSupply: {
                    hepaticArtery: "~25% of liver blood flow (O₂-rich)",
                    portalVein: "~75% of liver blood flow (nutrient-rich from GI tract)"
                },
                sinusoids: "Highly permeable (allow hepatocyte exchange)",
                bloodFlow: "~1500 mL/min total (30% of CO)",
                functions: "Metabolism, detoxification, protein synthesis",
                clinical: "Portal hypertension (cirrhosis), esophageal varices"
            },

            renalCirculation: {
                features: {
                    highFlow: "~1200 mL/min (20-25% of CO to <1% body mass)",
                    filtration: "Glomerular capillaries filter plasma",
                    autoregulation: "Maintains GFR despite BP changes (60-180 mmHg)"
                },
                regulation: {
                    myogenic: "Afferent arteriole constricts with ↑ pressure",
                    tubuloglomerular: "Macula densa senses NaCl → adjust afferent tone",
                    RAAS: "Low BP → renin release → angiotensin II → efferent constriction"
                },
                clinical: "Renal artery stenosis, acute kidney injury, diabetic nephropathy"
            },

            cutaneousCirculation: {
                features: {
                    AV_anastomoses: "Direct connections (bypass capillaries) for thermoregulation",
                    venousPlexuses: "Large venous networks in skin",
                    sympathetic: "Strong sympathetic control (α₁ - vasoconstriction)"
                },
                bloodFlow: "Variable (200-2500 mL/min) based on temperature needs",
                thermoregulation: {
                    cold: "Vasoconstriction → ↓ heat loss",
                    hot: "Vasodilation → ↑ heat loss (up to 8 L/min in extreme heat)"
                },
                clinical: "Raynaud's phenomenon (excessive vasoconstriction), frostbite"
            }
        },

        vascularRegulation: {
            intrinsic: {
                metabolic: {
                    vasodilators: "↑ CO₂, ↑ H⁺ (↓ pH), ↓ O₂, ↑ K⁺, ↑ adenosine, ↑ lactate, ↑ temperature",
                    mechanism: "Active tissue produces metabolites → local vasodilation → ↑ blood flow (matches supply to demand)",
                    activeHyperemia: "↑ Metabolism → ↑ flow (exercise in muscle)",
                    reactiveHyperemia: "Occlusion released → ↑ flow (repays O₂ debt)"
                },
                myogenic: {
                    mechanism: "↑ Stretch → vasoconstriction (Bayliss effect)",
                    purpose: "Autoregulation - maintain constant flow despite pressure changes",
                    organs: "Brain, kidney, heart"
                },
                endothelial: {
                    NO: {
                        stimulus: "Shear stress, ACh, bradykinin",
                        effect: "Vasodilation (relaxes smooth muscle via cGMP)",
                        importance: "Tonic vasodilation, prevents platelet aggregation",
                        dysfunction: "Atherosclerosis, hypertension, diabetes"
                    },
                    endothelin: {
                        effect: "Powerful vasoconstriction",
                        role: "Counterbalances NO, regulates vascular tone"
                    },
                    prostacyclin: "Vasodilation, inhibits platelet aggregation (from arachidonic acid)"
                }
            },

            extrinsic: {
                neural: {
                    sympathetic: {
                        receptors: {
                            alpha1: "Vasoconstriction (most vessels)",
                            beta2: "Vasodilation (skeletal muscle, coronary)"
                        },
                        tonic: "Continuous low-level activity maintains basal tone",
                        reflex: "Baroreceptor, chemoreceptor reflexes",
                        distribution: "Most vessels except brain and coronary (minimal)"
                    },
                    parasympathetic: {
                        limited: "Minimal vascular effect (mainly heart, erectile tissue)",
                        mechanism: "ACh → NO release → vasodilation"
                    }
                },
                hormonal: {
                    vasoconstrictors: {
                        angiotensinII: "Potent vasoconstriction, ↑ aldosterone (RAAS)",
                        vasopressin: "ADH - vasoconstriction at high doses (V₁ receptors), ↑ H₂O reabsorption",
                        epinephrine: "α₁ (constriction skin, GI), β₂ (dilation muscle, coronary)",
                        norepinephrine: "α₁ (constriction most vessels)"
                    },
                    vasodilators: {
                        ANP: "Atrial natriuretic peptide - vasodilation, ↑ Na⁺ excretion",
                        histamine: "Vasodilation, ↑ permeability (inflammation, allergy)",
                        bradykinin: "Vasodilation, ↑ permeability (inflammation)"
                    }
                }
            }
        },

        clinicalApplications: [
            "Understanding hypertension (arteriolar resistance)",
            "Diagnosing peripheral vascular disease (atherosclerosis)",
            "Managing varicose veins and venous insufficiency",
            "Preventing deep vein thrombosis and pulmonary embolism",
            "Understanding edema formation (Starling forces)",
            "Vascular surgery (bypass grafts, angioplasty, stenting)",
            "Pharmacology (vasodilators, vasoconstrictors)",
            "Understanding shock (distributive, cardiogenic, hypovolemic)"
        ]
    };

    return content;
}

handleBloodPressure(problem) {
    const content = {
        topic: "Blood Pressure: Measurement, Regulation, and Clinical Significance",
        category: 'cardiovascular_physiology',
        summary: "Blood pressure is the force exerted by blood against vessel walls. It is essential for tissue perfusion but must be tightly regulated. BP is determined by cardiac output and total peripheral resistance, and is controlled by short-term (neural, hormonal) and long-term (renal) mechanisms.",
        
        definition: {
            bloodPressure: "Force per unit area exerted by blood against vessel walls",
            units: "mmHg (millimeters of mercury) or kPa (kilopascals)",
            systolic: "Maximum pressure during ventricular contraction (systole)",
            diastolic: "Minimum pressure during ventricular relaxation (diastole)",
            notation: "Systolic/Diastolic (e.g., 120/80 mmHg)",
            normal: "Adult: <120/<80 mmHg (2017 ACC/AHA guidelines)"
        },

        types: {
            systolicBP: {
                definition: "Peak arterial pressure during ventricular systole",
                normal: "<120 mmHg",
                reflects: "Stroke volume, arterial compliance (elasticity), ejection velocity",
                determinants: {
                    strokeVolume: "↑ SV → ↑ systolic BP",
                    arterialCompliance: "Stiff arteries (age, atherosclerosis) → ↑ systolic BP",
                    ejectionVelocity: "Faster ejection → ↑ systolic BP"
                },
                ageEffect: "Increases with age (arteries stiffen, lose elasticity)",
                clinicalSignificance: "Isolated systolic hypertension common in elderly (>65 years)"
            },

            diastolicBP: {
                definition: "Minimum arterial pressure during ventricular diastole",
                normal: "<80 mmHg",
                reflects: "Total peripheral resistance (TPR), heart rate (diastolic duration)",
                determinants: {
                    TPR: "↑ TPR (arteriolar constriction) → ↑ diastolic BP",
                    heartRate: "↑ HR → shorter diastole → less pressure decay → ↑ diastolic BP",
                    arterialCompliance: "Stiff arteries → faster pressure decay → may ↓ diastolic BP (elderly)"
                },
                ageEffect: "Increases until ~60 years, then plateaus or decreases (pulse pressure widens)",
                clinicalSignificance: "Diastolic BP most important in younger adults (<50 years)"
            },

            pulsePressure: {
                definition: "Difference between systolic and diastolic pressures",
                formula: "PP = Systolic - Diastolic",
                normal: "~40 mmHg (range 30-50 mmHg)",
                reflects: "Stroke volume, arterial compliance",
                determinants: {
                    strokeVolume: "↑ SV → ↑ pulse pressure",
                    compliance: "↓ Compliance (stiff arteries) → ↑ pulse pressure"
                },
                ageEffect: "Increases with age (arteries stiffen)",
                clinical: {
                    wide: ">60 mmHg - aortic regurgitation, hyperthyroidism, arteriosclerosis, fever, anemia",
                    narrow: "<30 mmHg - aortic stenosis, heart failure, hypovolemia, cardiac tamponade"
                },
                importance: "Predictor of cardiovascular risk (especially >60 mmHg)"
            },

            meanArterialPressure: {
                definition: "Average arterial pressure during cardiac cycle",
                formula: "MAP ≈ Diastolic + 1/3(Pulse Pressure) OR MAP ≈ (2×Diastolic + Systolic) / 3",
                alternativeFormula: "MAP = CO × TPR (more physiologic)",
                normal: "~93 mmHg (for 120/80 BP)",
                weighing: "Weighted toward diastolic (diastole lasts longer than systole)",
                physiologic: "Driving pressure for tissue perfusion",
                minimum: "~60 mmHg required for adequate organ perfusion (kidney, brain)",
                determinants: {
                    cardiacOutput: "MAP = CO × TPR",
                    peripheralResistance: "Main determinant in long term"
                },
                clinicalUse: "Target in septic shock (MAP >65 mmHg), ICU monitoring"
            }
        },

        measurement: {
            directMethod: {
                technique: "Arterial catheter (intra-arterial line)",
                placement: "Radial, femoral, or brachial artery",
                advantages: "Continuous, beat-to-beat measurement; accurate; can sample blood",
                disadvantages: "Invasive, risk of bleeding, thrombosis, infection",
                use: "ICU, operating room, hemodynamically unstable patients",
                waveform: "Arterial pulse wave (systolic peak, dicrotic notch, diastolic trough)"
            },

            indirectMethod: {
                technique: "Sphygmomanometer (cuff) + auscultation (Korotkoff sounds) or oscillometry",
                
                auscultatoryMethod: {
                    equipment: "BP cuff (sphygmomanometer), stethoscope",
                    procedure: [
                        "1. Patient rests 5 min, seated, arm supported at heart level",
                        "2. Appropriate cuff size (bladder width 40% arm circumference, length 80%)",
                        "3. Wrap cuff snugly around upper arm (2-3 cm above elbow)",
                        "4. Palpate brachial or radial pulse",
                        "5. Inflate cuff until pulse disappears (estimate systolic)",
                        "6. Deflate fully, wait 30 sec",
                        "7. Place stethoscope over brachial artery (do NOT tuck under cuff)",
                        "8. Inflate rapidly to 20-30 mmHg above estimated systolic",
                        "9. Deflate slowly (2-3 mmHg/sec)",
                        "10. Note pressure at first Korotkoff sound (systolic)",
                        "11. Note pressure when sounds disappear (diastolic, phase V)",
                        "12. Deflate completely, repeat if needed (wait 1-2 min)"
                    ],
                    korotkoffSounds: {
                        phaseI: "First appearance of clear tapping sounds = SYSTOLIC BP",
                        phaseII: "Softer, swishing sounds",
                        phaseIII: "Return of sharper sounds",
                        phaseIV: "Muffled sounds (sometimes used as diastolic in pregnancy, children)",
                        phaseV: "Sounds disappear = DIASTOLIC BP (standard)"
                    },
                    accuracy: "±5-10 mmHg if technique correct",
                    errors: [
                        "Cuff too small → falsely high",
                        "Cuff too large → falsely low",
                        "Arm not at heart level → hydrostatic error (0.77 mmHg per cm)",
                        "Deflating too fast → miss sounds, underestimate systolic",
                        "Auscultatory gap → silent period between phase I and II (miss true systolic)"
                    ]
                },

                oscillometricMethod: {
                    technique: "Automated BP monitor",
                    principle: "Detects oscillations in cuff pressure as blood flow resumes",
                    systolic: "Oscillations begin",
                    MAP: "Maximum oscillation amplitude",
                    diastolic: "Calculated from algorithm (not directly measured)",
                    advantages: "Easy, reproducible, no observer bias, less affected by noise",
                    disadvantages: "Less accurate than auscultatory (especially irregular rhythms, hypotension)",
                    use: "Home monitoring, ambulatory BP monitoring, ICU (frequent automated measurements)"
                }
            },

            ambulatoryBPMonitoring: {
                technique: "Automated cuff measurements over 24 hours (every 15-30 min)",
                advantages: "Detects white coat hypertension, masked hypertension, nocturnal BP pattern",
                dipping: "Normal: BP ↓ 10-20% during sleep (dippers)",
                nonDippers: "BP doesn't fall adequately during sleep → ↑ CV risk",
                use: "Confirm diagnosis of hypertension, assess treatment response"
            },

            homeBloodPressure: {
                technique: "Patient measures own BP at home with validated device",
                protocol: "2 readings morning and evening for 7 days (discard first day)",
                threshold: "≥135/85 mmHg = hypertension (lower than office)",
                advantages: "Multiple readings, no white coat effect, assesses treatment response",
                accuracy: "Requires validated device, proper technique, patient education"
            }
        },

        determinants: {
            fundamentalEquation: {
                formula: "BP = CO × TPR",
                CO: "Cardiac output (L/min) = HR × SV",
                TPR: "Total peripheral resistance (dynes·sec/cm⁵)",
                implication: "BP can increase by ↑ CO, ↑ TPR, or both"
            },

            cardiacOutput: {
                heartRate: {
                    normal: "60-100 bpm",
                    effect: "↑ HR → ↑ CO → ↑ BP (if SV maintained)",
                    limitation: "Very high HR → ↓ filling time → ↓ SV → may ↓ CO",
                    control: "Autonomic nervous system (sympathetic ↑, parasympathetic ↓)"
                },
                strokeVolume: {
                    determinants: "Preload, afterload, contractility",
                    preload: "Venous return, blood volume → ↑ EDV → ↑ SV (Frank-Starling)",
                    afterload: "Arterial pressure → ↑ afterload → ↓ SV (harder to eject)",
                    contractility: "↑ Contractility (sympathetic, inotropes) → ↑ SV"
                }
            },

            peripheralResistance: {
                formula: "R = 8ηL / πr⁴ (Poiseuille's law)",
                radius: {
                    importance: "r⁴ relationship - MOST IMPORTANT factor",
                    example: "Halving radius → 16× resistance",
                    control: "Arterioles primarily regulate TPR (vasoconstriction/dilation)"
                },
                viscosity: {
                    determinants: "Hematocrit (RBC %), plasma proteins, temperature",
                    hematocrit: "↑ Hct (polycythemia) → ↑ viscosity → ↑ resistance → ↑ BP",
                    clinical: "Anemia (↓ Hct) → ↓ viscosity → ↓ resistance"
                },
                length: {
                    effect: "↑ Length → ↑ resistance",
                    clinical: "Obesity (↑ vascular length) → ↑ TPR → ↑ BP"
                }
            },

            bloodVolume: {
                effect: "↑ Volume → ↑ venous return → ↑ preload → ↑ CO → ↑ BP",
                regulation: "Kidneys (RAAS, ADH, ANP)",
                longTermControl: "Primary long-term BP regulator (pressure natriuresis)"
            }
        },

        regulation: {
            shortTerm_Seconds_to_Minutes: {
                baroreceptorReflex: {
                    location: {
                        carotidSinus: "Carotid artery bifurcation (most sensitive)",
                        aorticArch: "Ascending aorta"
                    },
                    receptors: "Stretch receptors (mechanoreceptors) in arterial walls",
                    afferents: {
                        carotid: "Glossopharyngeal nerve (CN IX) → nucleus tractus solitarius (NTS)",
                        aortic: "Vagus nerve (CN X) → NTS"
                    },
                    reflex: {
                        highBP: [
                            "↑ Stretch → ↑ baroreceptor firing",
                            "NTS → ↑ parasympathetic (vagus to heart), ↓ sympathetic (RVLM)",
                            "Result: ↓ HR, ↓ contractility, vasodilation → ↓ BP"
                        ],
                        lowBP: [
                            "↓ Stretch → ↓ baroreceptor firing",
                            "↓ Parasympathetic, ↑ sympathetic",
                            "Result: ↑ HR, ↑ contractility, vasoconstriction, ↑ venous return → ↑ BP"
                        ]
                    },
                    buffering: "Buffers acute changes (seconds), prevents extreme fluctuations",
                    adaptation: {
                        chronic: "Baroreceptors reset to new baseline (2-3 days)",
                        implication: "Cannot prevent chronic hypertension (long-term control by kidneys)",
                        note: "This is why baroreceptors don't cure hypertension"
                    },
                    clinicalTests: {
                        carotidMassage: "Gentle pressure on carotid sinus → ↓ HR, ↓ BP (can convert SVT)",
                        valsalva: "Bear down → ↑ intrathoracic P → ↓ VR → ↓ BP → baroreceptor response"
                    }
                },

                chemoreceptorReflex: {
                    location: {
                        peripheral: "Carotid bodies, aortic bodies",
                        central: "Medulla (ventrolateral surface)"
                    },
                    peripheralChemoreceptors: {
                        stimuli: "↓ O₂ (hypoxemia), ↑ CO₂ (hypercapnia), ↓ pH (acidosis)",
                        primary: "Respiratory control",
                        cardiovascular: "↑ Sympathetic → vasoconstriction → ↑ BP",
                        note: "Weak compared to baroreceptors for BP control"
                    },
                    centralChemoreceptors: {
                        stimuli: "↑ H⁺ in CSF (from ↑ CO₂)",
                        primary: "Respiratory control",
                        cardiovascular: "Weak BP effect"
                    },
                    clinicalRelevance: "Hypoxia → ↑ BP (altitude, sleep apnea → chronic hypertension)"
                },

                CNSIschemicResponse: {
                    trigger: "Severe brain ischemia (MAP <60 mmHg) → ↓ O₂ to medulla",
                    response: "Massive sympathetic discharge → extreme vasoconstriction → ↑ BP (up to 250 mmHg)",
                    purpose: "Emergency mechanism to restore cerebral perfusion",
                    lastDitch: "Only activated when BP critically low (brainstem ischemia)",
                    cushingReflex: "↑ Intracranial pressure → brain ischemia → CNS ischemic response → ↑ BP (Cushing's triad: ↑ BP, ↓ HR, irregular breathing)"
                }
            },

            intermediate_Minutes_to_Hours: {
                renin_Angiotensin_AldosteroneSystem: {
                    triggers: [
                        "↓ Renal perfusion pressure (↓ BP in afferent arteriole)",
                        "↓ NaCl delivery to macula densa (tubuloglomerular feedback)",
                        "↑ Sympathetic stimulation (β₁ receptors on JG cells)"
                    ],
                    pathway: {
                        step1: "Juxtaglomerular cells release RENIN",
                        step2: "Renin cleaves angiotensinogen (from liver) → Angiotensin I",
                        step3: "ACE (angiotensin-converting enzyme, in lungs) → Angiotensin II",
                        angiotensinII: {
                            effects: [
                                "Vasoconstriction (↑ TPR) - potent",
                                "Aldosterone release (adrenal cortex) → ↑ Na⁺/H₂O retention → ↑ volume",
                                "ADH (vasopressin) release → ↑ H₂O retention",
                                "↑ Sympathetic activity",
                                "↑ Thirst (hypothalamus)",
                                "Constricts efferent arteriole (kidney) → maintains GFR"
                            ],
                            halfLife: "~1 min (rapid effect)",
                            chronicity: "Sustained elevation → chronic hypertension"
                        },
                        step4: "Aldosterone → ↑ Na⁺/H₂O reabsorption (collecting duct) → ↑ blood volume → ↑ BP",
                        timeline: "Minutes (angiotensin II), hours (aldosterone, volume expansion)"
                    },
                    clinicalPharmacology: {
                        ACE_inhibitors: "-pril drugs (enalapril, lisinopril) → block ACE → ↓ angiotensin II",
                        ARBs: "-sartan drugs (losartan, valsartan) → block angiotensin II receptors",
                        aldosteroneAntagonists: "Spironolactone, eplerenone → block aldosterone",
                        directReninInhibitors: "Aliskiren → blocks renin",
                        allEffective: "Lower BP by reducing angiotensin II effects or aldosterone"
                    }
                },

                vasopressin_ADH: {
                    synonyms: "Antidiuretic hormone (ADH), arginine vasopressin (AVP)",
                    source: "Hypothalamus (supraoptic, paraventricular nuclei) → posterior pituitary release",
                    triggers: {
                        osmotic: "↑ Osmolality (>280-285 mOsm/kg) - most sensitive",
                        volumetric: "↓ Blood volume (>10% decrease), ↓ BP (baroreceptor input)",
                        other: "Nausea, pain, stress, angiotensin II"
                    },
                    effects: {
                        renal: "V₂ receptors → aquaporin-2 insertion → ↑ H₂O reabsorption (collecting duct) → ↑ volume → ↑ BP",
                        vascular: "V₁ receptors → vasoconstriction (only at high doses) → ↑ TPR → ↑ BP",
                        primary: "Volume restoration (water retention), not BP regulation per se"
                    },
                    clinicalNote: "SIADH (syndrome of inappropriate ADH) → excessive water retention → hyponatremia"
                },

                atrialNatriureticPeptide: {
                    source: "Atrial myocytes (when stretched by ↑ blood volume)",
                    trigger: "↑ Atrial pressure (volume overload)",
                    effects: {
                        renal: "↑ Na⁺ excretion (natriuresis), ↑ H₂O excretion (diuresis) → ↓ volume → ↓ BP",
                        vascular: "Vasodilation → ↓ TPR → ↓ BP",
                        hormonal: "Inhibits renin, aldosterone, ADH secretion"
                    },
                    role: "Counteracts RAAS, prevents volume overload",
                    BNP: "B-type natriuretic peptide (from ventricles) - similar effects, biomarker for heart failure",
                    clinical: "BNP levels used to diagnose heart failure (elevated in HF)"
                }
            },

            longTerm_Days_to_Weeks: {
                renalMechanism: {
                    principle: "Kidneys are THE dominant long-term BP regulators (Guyton concept)",
                    pressureNatriuresis: {
                        mechanism: "↑ BP → ↑ renal perfusion → ↑ Na⁺/H₂O excretion → ↓ volume → ↓ BP",
                        curve: "Renal function curve - shows Na⁺ excretion vs BP (steep slope)",
                        setPoint: "BP where intake = output (equilibrium)",
                        resetting: "Shift curve right (kidney disease, salt sensitivity) → ↑ set point → hypertension"
                    },
                    infiniteGain: {
                        concept: "Given enough time, kidneys can restore BP to set point (if functioning normally)",
                        mechanism: "Eliminates excess volume → normalizes BP",
                        exception: "Impaired kidney function → cannot normalize BP (chronic hypertension)"
                    },
                    clinicalImplications: {
                        chronic_HTN: "Almost always involves kidneys (impaired natriuresis or RAAS activation)",
                        saltSensitive: "Some individuals: ↑ salt → ↑ BP (impaired natriuresis)",
                        CKD: "Chronic kidney disease → impaired excretion → hypertension (common)"
                    }
                },

                structuralChanges: {
                    vascularRemodeling: {
                        chronicHTN: "↑ BP → vascular smooth muscle hypertrophy, ↑ media:lumen ratio",
                        result: "↑ TPR → maintains high BP (vicious cycle)",
                        reversibility: "Partial reversal with BP control (months to years)"
                    },
                    cardiacRemodeling: {
                        LVH: "Left ventricular hypertrophy (compensate for ↑ afterload)",
                        consequence: "↑ O₂ demand, ↓ compliance, eventual heart failure"
                    }
                }
            }
        },

        clinicalClassification: {
            ACC_AHA_2017: {
                normal: "<120 AND <80 mmHg",
                elevated: "120-129 AND <80 mmHg",
                stage1HTN: "130-139 OR 80-89 mmHg",
                stage2HTN: "≥140 OR ≥90 mmHg",
                hypertensiveCrisis: {
                    urgency: "≥180/≥120 mmHg WITHOUT acute organ damage",
                    emergency: "≥180/≥120 mmHg WITH acute organ damage (encephalopathy, MI, stroke, pulmonary edema)"
                }
            },
            JNC7_2003_older: {
                normal: "<120 and <80 mmHg",
                prehypertension: "120-139 or 80-89 mmHg",
                stage1: "140-159 or 90-99 mmHg",
                stage2: "≥160 or ≥100 mmHg"
            },
            note: "ACC/AHA 2017 guidelines lower threshold for hypertension (130/80 vs 140/90)"
        },

        hypertension: {
            prevalence: "~30-45% of adults (increases with age)",
            
            classification: {
                primaryEssential: {
                    percentage: "90-95% of cases",
                    definition: "Hypertension with no identifiable cause",
                    riskFactors: {
                        modifiable: "Obesity, high salt intake, alcohol, physical inactivity, stress",
                        nonModifiable: "Age, genetics, race (African Americans ↑ risk), family history"
                    },
                    mechanisms: "Multifactorial - genetic + environmental",
                    saltSensitivity: "~50% of hypertensives - ↑ salt → ↑ BP",
                    pathophysiology: "↑ TPR (arteriolar remodeling), ↑ CO (volume expansion), RAAS activation, sympathetic overactivity"
                },

                secondaryHypertension: {
                    percentage: "5-10% of cases",
                    definition: "Hypertension due to identifiable cause",
                    causes: {
                        renal: {
                            parenchymal: "Chronic kidney disease, glomerulonephritis, polycystic kidney disease",
                            vascular: "Renal artery stenosis (↓ perfusion → ↑ renin → ↑ angiotensin II)",
                            mechanism: "Impaired natriuresis, RAAS activation"
                        },
                        endocrine: {
                            primaryAldosteronism: "Adrenal adenoma or hyperplasia → ↑ aldosterone → Na⁺/H₂O retention",
                            pheochromocytoma: "Adrenal tumor → ↑ catecholamines → vasoconstriction, ↑ CO",
                            cushingSyndrome: "↑ Cortisol → mineralocorticoid effect, vasoconstriction",
                            hyperthyroidism: "↑ Systolic BP, ↑ pulse pressure (↑ CO, ↓ TPR)",
                            hypothyroidism: "↑ Diastolic BP (↑ TPR)"
                        },
                        vascular: {
                            coarctation: "Narrowing of aorta (congenital) → ↑ BP in upper body, ↓ BP in lower body",
                            signs: "Upper limb hypertension, weak femoral pulses, rib notching on X-ray"
                        },
                        drugs: {
                            common: "NSAIDs (↓ prostaglandins → vasoconstriction, Na⁺ retention), oral contraceptives, corticosteroids, decongestants (pseudoephedrine), cocaine, amphetamines"
                        },
                        sleepApnea: "Obstructive sleep apnea → hypoxia → sympathetic activation → hypertension (often resistant)"
                    },
                    clues: {
                        youngAge: "<30 years with hypertension (think secondary)",
                        resistantHTN: "Uncontrolled on 3 drugs (consider secondary causes)",
                        suddenOnset: "Abrupt BP elevation",
                        hypokalemia: "Suggests primary aldosteronism or Cushing's"
                    }
                }
            },

            complications: {
                cardiovascular: {
                    LVH: "Left ventricular hypertrophy → heart failure (systolic and diastolic)",
                    CAD: "Accelerated atherosclerosis → angina, myocardial infarction",
                    heartFailure: "Systolic (reduced EF) or diastolic (preserved EF with ↓ compliance)"
                },
                cerebrovascular: {
                    stroke: "Ischemic (thrombotic, embolic) or hemorrhagic (intracerebral, subarachnoid)",
                    TIA: "Transient ischemic attack",
                    vascularDementia: "Chronic microvascular disease → cognitive decline"
                },
                renal: {
                    nephrosclerosis: "Hypertensive kidney disease → chronic kidney disease",
                    mechanism: "Glomerular hypertension → sclerosis → ↓ GFR",
                    progression: "CKD → worsens hypertension (vicious cycle)"
                },
                vascular: {
                    aneurysm: "Aortic, cerebral berry aneurysms",
                    dissection: "Aortic dissection (emergency)",
                    PAD: "Peripheral arterial disease"
                },
                retinopathy: {
                    stages: "Grade I-IV (Keith-Wagener-Barker classification)",
                    severe: "Papilledema, exudates, hemorrhages → vision loss"
                }
            },

            treatment: {
                lifestyle: {
                    diet: "DASH diet (fruits, vegetables, low sodium), limit salt (<2.3 g/day)",
                    weight: "Weight loss (~1 mmHg per kg lost)",
                    exercise: "Aerobic exercise 150 min/week (↓ 5-8 mmHg)",
                    alcohol: "Limit (≤2 drinks/day men, ≤1 women)",
                    smoking: "Cessation (↑ CV risk, not direct BP effect)"
                },
                pharmacologic: {
                    firstLine: {
                        thiazideDiuretics: "HCTZ, chlorthalidone - ↓ volume (Na⁺/H₂O excretion)",
                        ACE_inhibitors: "Lisinopril, enalapril - block angiotensin II formation",
                        ARBs: "Losartan, valsartan - block angiotensin II receptors",
                        calciumChannelBlockers: "Amlodipine, diltiazem - vasodilation, ↓ contractility (non-DHP)"
                    },
                    secondLine: {
                        betaBlockers: "Metoprolol, atenolol - ↓ HR, ↓ contractility, ↓ renin (less preferred first-line)",
                        aldosteroneAntagonists: "Spironolactone - block aldosterone (K⁺-sparing diuretic)",
                        alpha1Blockers: "Doxazosin - vasodilation (less common)",
                        vasodilators: "Hydralazine, minoxidil - direct vasodilation (with other drugs)"
                    },
                    resistant_HTN: "≥3 drugs (including diuretic) at max doses → consider secondary causes, add spironolactone"
                },
                targets: {
                    general: "<130/80 mmHg (ACC/AHA 2017)",
                    diabetes_CKD: "<130/80 mmHg",
                    elderly: "Individualize (avoid excessive lowering - orthostatic hypotension)"
                }
            }
        },

        hypotension: {
            definition: "Abnormally low blood pressure (typically <90/60 mmHg if symptomatic)",
            
            types: {
                orthostatic: {
                    definition: "↓ BP upon standing (↓ ≥20 mmHg systolic OR ↓ ≥10 mmHg diastolic within 3 min)",
                    mechanism: "Gravity → blood pools in legs → ↓ venous return → ↓ CO → ↓ BP",
                    normal: "Baroreceptor reflex compensates (↑ HR, vasoconstriction)",
                    failure: "Inadequate compensation → symptomatic hypotension",
                    causes: {
                        autonomic: "Diabetic neuropathy, Parkinson's disease, aging, medications (α-blockers, diuretics)",
                        hypovolemia: "Dehydration, blood loss, adrenal insufficiency",
                        prolongedBedRest: "Deconditioning"
                    },
                    symptoms: "Lightheadedness, dizziness, syncope (fainting), blurred vision",
                    treatment: "Adequate hydration, slow position changes, compression stockings, fludrocortisone, midodrine"
                },

                postprandial: {
                    definition: "↓ BP after eating (within 1-2 hours)",
                    mechanism: "Blood shunted to GI tract → ↓ venous return",
                    risk: "Elderly, diabetics, autonomic dysfunction",
                    prevention: "Small frequent meals, adequate hydration, avoid alcohol"
                },

                neurogenicShock: {
                    definition: "Loss of sympathetic tone (spinal cord injury above T6)",
                    mechanism: "No vasoconstriction → vasodilation → ↓ TPR → ↓ BP",
                    unique: "Bradycardia (no compensatory tachycardia - sympathetic lost)",
                    treatment: "Fluids, vasopressors (phenylephrine)"
                }
            },

            shock: {
                definition: "Inadequate tissue perfusion → cellular hypoxia → organ dysfunction",
                
                types: {
                    hypovolemic: {
                        cause: "↓ Blood volume (hemorrhage, dehydration, burns)",
                        mechanism: "↓ Preload → ↓ CO → ↓ BP",
                        compensation: "↑ HR, vasoconstriction, ↓ urine output",
                        treatment: "Fluid resuscitation (crystalloid, blood products)"
                    },
                    cardiogenic: {
                        cause: "↓ Cardiac function (MI, heart failure, arrhythmia)",
                        mechanism: "↓ Contractility → ↓ CO → ↓ BP",
                        signs: "Pulmonary edema (↑ PCWP), ↓ BP, cool extremities",
                        treatment: "Inotropes (dobutamine), diuretics, revascularization"
                    },
                    distributive: {
                        septic: {
                            cause: "Infection → systemic inflammatory response → widespread vasodilation",
                            mechanism: "↓ TPR (vasodilation) → ↓ BP despite ↑ CO initially",
                            signs: "Fever, hypotension, warm extremities (early), lactic acidosis",
                            treatment: "Fluids, antibiotics, vasopressors (norepinephrine)"
                        },
                        anaphylactic: {
                            cause: "Severe allergic reaction → massive histamine release",
                            mechanism: "Vasodilation + ↑ vascular permeability → ↓ TPR + ↓ volume",
                            signs: "Urticaria, bronchospasm, angioedema, hypotension",
                            treatment: "Epinephrine (IM), fluids, antihistamines, corticosteroids"
                        }
                    },
                    obstructive: {
                        cause: "Physical obstruction to blood flow (PE, cardiac tamponade, tension pneumothorax)",
                        mechanism: "↓ Venous return or ↓ outflow → ↓ CO → ↓ BP",
                        treatment: "Remove obstruction (pericardiocentesis, chest tube, thrombolysis)"
                    }
                },

                management: {
                    assessment: "ABCs (airway, breathing, circulation), vitals, mental status",
                    resuscitation: "IV access, fluids, O₂, identify/treat cause",
                    monitoring: "BP, HR, urine output, lactate",
                    goals: "MAP >65 mmHg, adequate urine output (>0.5 mL/kg/hr), normalize lactate"
                }
            }
        },

        applications: [
            "Screening and diagnosis of hypertension",
            "Risk stratification for cardiovascular disease",
            "Monitoring treatment response (antihypertensives)",
            "Perioperative hemodynamic management",
            "Diagnosing orthostatic hypotension and autonomic dysfunction",
            "Managing shock and critical illness",
            "Assessing fluid status (preload)",
            "Identifying secondary causes of hypertension"
        ]
    };

    return content;
}

// Due to length constraints, I'll provide the final two handlers (handleBloodFlow and handleBloodComposition) in a follow-up response if you'd like to continue.


// ========================================
// FINAL HANDLER METHODS FOR CIRCULATORY SYSTEM TOPICS
// ========================================

handleBloodFlow(problem) {
    const content = {
        topic: "Blood Flow and Hemodynamics",
        category: 'cardiovascular_physiology',
        summary: "Blood flow is the volume of blood moving through a vessel per unit time, driven by pressure gradients and opposed by resistance. Understanding hemodynamics requires applying principles of fluid physics to the cardiovascular system, including flow equations, resistance relationships, and circulatory organization.",
        
        fundamentalPrinciples: {
            bloodFlow: {
                definition: "Volume of blood passing through a vessel (or circulation) per unit time",
                symbol: "Q (or F)",
                units: "mL/min or L/min",
                cardiacOutput: "Total blood flow through systemic or pulmonary circulation = ~5 L/min at rest",
                organFlow: "Each organ receives fraction of CO based on metabolic needs"
            },

            pressureGradient: {
                definition: "Difference in pressure between two points",
                symbol: "ΔP or P₁ - P₂",
                units: "mmHg",
                drivingForce: "Blood flows DOWN pressure gradient (high to low pressure)",
                systemic: "Aorta (~95 mmHg) → vena cava (~0 mmHg) = 95 mmHg gradient",
                pulmonary: "Pulmonary artery (~15 mmHg) → left atrium (~5 mmHg) = 10 mmHg gradient"
            },

            resistance: {
                definition: "Opposition to blood flow",
                symbol: "R",
                units: "mmHg·min/L or dynes·sec/cm⁵ (PRU - peripheral resistance units)",
                factors: "Vessel radius (most important), length, blood viscosity",
                location: "Primarily in arterioles (60% of total resistance)"
            }
        },

        hemodynamicEquations: {
            ohmsLaw: {
                formula: "Q = ΔP / R",
                analogy: "Electrical: I = V / R (current = voltage / resistance)",
                meaning: "Flow is proportional to pressure gradient, inversely proportional to resistance",
                rearranged: {
                    pressure: "ΔP = Q × R (pressure gradient needed for given flow)",
                    resistance: "R = ΔP / Q (calculate resistance from flow and pressure)"
                },
                applications: {
                    systemic: "CO = MAP / TPR → MAP = CO × TPR",
                    organ: "Organ blood flow = ΔP_organ / R_organ",
                    stenosis: "Narrowed vessel → ↑ R → ↓ flow (or ↑ ΔP needed)"
                }
            },

            poiseuillesLaw: {
                formula: "R = (8 × η × L) / (π × r⁴)",
                variables: {
                    eta: "η = blood viscosity",
                    L: "L = vessel length",
                    r: "r = vessel radius"
                },
                combining: "Q = (ΔP × π × r⁴) / (8 × η × L)",
                criticalInsight: {
                    radiusPower4: "Flow ∝ r⁴ - MOST IMPORTANT RELATIONSHIP",
                    doubleRadius: "2× radius → 16× flow (2⁴ = 16)",
                    halveRadius: "½ radius → 1/16 flow (↓ 94%!)",
                    physiologic: "Small changes in arteriole radius → huge changes in flow"
                },
                assumptions: "Steady laminar flow, rigid tubes, Newtonian fluid (not perfectly true for blood)",
                limitations: "Blood is non-Newtonian (viscosity varies with shear rate), vessels are distensible, flow is pulsatile"
            },

            continuityEquation: {
                principle: "Conservation of mass - what goes in must come out",
                formula: "Q = A × v (flow = area × velocity)",
                meaning: "Flow is constant throughout circulation",
                consequence: {
                    narrowVessel: "↓ Area → ↑ velocity (to maintain Q)",
                    wideVessel: "↑ Area → ↓ velocity",
                    aorta: "Small area, high velocity (~30 cm/sec)",
                    capillaries: "Total area LARGEST, velocity SLOWEST (~0.03 cm/sec)",
                    advantage: "Slow capillary flow allows time for exchange"
                },
                applications: {
                    stenosis: "Narrowed valve/vessel → ↑ velocity (turbulence, murmur)",
                    aneurysm: "Dilated vessel → ↓ velocity (↑ thrombosis risk)"
                }
            },

            reynoldsNumber: {
                definition: "Dimensionless number predicting laminar vs turbulent flow",
                formula: "Re = (ρ × v × d) / η",
                variables: {
                    rho: "ρ = fluid density",
                    v: "v = velocity",
                    d: "d = vessel diameter",
                    eta: "η = viscosity"
                },
                interpretation: {
                    Re_less2000: "Laminar flow (smooth, layered)",
                    Re_2000_to_4000: "Transitional flow",
                    Re_greater4000: "Turbulent flow (chaotic, eddies)"
                },
                turbulenceCauses: {
                    highVelocity: "Stenotic valves, high cardiac output",
                    largeDiameter: "Aorta, dilated chambers",
                    lowViscosity: "Anemia (low hematocrit)",
                    irregularSurface: "Atherosclerotic plaques, rough vessel walls"
                },
                physiologic: {
                    normalFlow: "Laminar in most vessels",
                    aorta: "Slightly turbulent (high velocity, large diameter)",
                    branchPoints: "Transitional flow (disturbed, ↑ atherosclerosis)"
                },
                clinical: {
                    murmurs: "Turbulent flow through valves (stenosis, regurgitation)",
                    bruits: "Turbulent flow in arteries (carotid stenosis, renal artery stenosis)",
                    korotkoffSounds: "Turbulent flow when cuff pressure between systolic and diastolic"
                }
            },

            laplaceRelation: {
                vascularForm: "Wall tension = (Pressure × Radius) / Wall thickness",
                symbol: "T = (P × r) / h",
                meaning: "Tension (force per unit length) wall must withstand",
                implications: {
                    aneurysm: "↑ Radius → ↑ wall tension → risk of rupture (LaPlace law predicts expansion)",
                    hypertension: "↑ Pressure → ↑ wall tension → vascular remodeling (thickening to normalize tension)",
                    capillaries: "Small radius, thin wall but LOW pressure → wall tension manageable"
                },
                cardiacForm: "Wall stress = (P × r) / (2 × h)",
                cardiacImplications: {
                    dilatedCardiomyopathy: "↑ Ventricular radius → ↑ wall stress → ↑ O₂ demand",
                    hypertrophy: "↑ Wall thickness → ↓ wall stress (compensation)"
                }
            }
        },

        resistanceInSeries: {
            definition: "Vessels arranged end-to-end (blood flows through each sequentially)",
            formula: "R_total = R₁ + R₂ + R₃ + ...",
            example: "Aorta → arteries → arterioles → capillaries → venules → veins → vena cava",
            consequence: "Total resistance is SUM of individual resistances",
            dominance: "Arterioles contribute most (60% of total resistance)",
            pressureDrop: "Greatest pressure drop where resistance is highest (arterioles)",
            systemicVsPulmonary: "Two circulations in SERIES (CO_systemic = CO_pulmonary)"
        },

        resistanceInParallel: {
            definition: "Vessels arranged side-by-side (blood distributed among them)",
            formula: "1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...",
            rearranged: "R_total = 1 / (1/R₁ + 1/R₂ + 1/R₃ + ...)",
            consequence: "Total resistance LESS than smallest individual resistance",
            example: "Organs in systemic circulation (brain, heart, kidneys, etc. in parallel)",
            advantages: {
                oxygenatedBlood: "Each organ receives oxygenated blood from aorta",
                independentRegulation: "Flow to each organ regulated independently",
                lowerResistance: "Total resistance lower than if organs were in series"
            },
            capillaryBeds: "Billions of capillaries in parallel → very low total resistance despite tiny individual capillaries"
        },

        distributionOfBloodFlow: {
            atRest: {
                totalCO: "~5 L/min (cardiac output)",
                distribution: {
                    brain: "~700 mL/min (13-14%) - constant, essential",
                    heart: "~250 mL/min (4-5%) - high per gram",
                    kidneys: "~1100 mL/min (20-22%) - filtration function",
                    liver: "~1350 mL/min (25-27%) - includes hepatic artery + portal vein",
                    GI_tract: "~1000 mL/min (20%) - absorption",
                    skeletalMuscle: "~1000 mL/min (20%) - large mass, variable",
                    skin: "~250 mL/min (5%) - thermoregulation",
                    bone: "~250 mL/min (5%)",
                    other: "~150 mL/min (3%) - adipose, connective tissue, etc."
                },
                percentages: "Kidneys get 20% of CO but are only 0.4% body weight (high per gram)"
            },

            duringExercise: {
                totalCO: "Up to ~25-30 L/min (can increase 5-6× in trained athletes)",
                redistribution: {
                    skeletalMuscle: "↑↑↑ Up to 80-85% of CO (~20-22 L/min)",
                    heart: "↑↑ Up to 4-5× increase (↑ O₂ demand)",
                    skin: "↑ or ↓ (depends on heat dissipation needs vs BP maintenance)",
                    brain: "Constant ~700 mL/min (smaller % but absolute flow maintained)",
                    kidneys: "↓ to ~600 mL/min (can tolerate temporary reduction)",
                    GI_tract: "↓↓ Significant vasoconstriction (sympathetic)",
                    splanchnic: "↓↓ Blood diverted from GI to muscle"
                },
                mechanisms: {
                    intrinsic: "Metabolic vasodilation in active muscle (↑ CO₂, ↓ O₂, ↑ K⁺, adenosine)",
                    extrinsic: "Sympathetic vasoconstriction in inactive regions (GI, kidneys), β₂ vasodilation in muscle"
                }
            },

            autoregulation: {
                definition: "Intrinsic ability of organ to maintain constant blood flow despite pressure changes",
                mechanism: {
                    myogenic: "↑ Pressure → stretch → vasoconstriction (Bayliss effect)",
                    metabolic: "↑ Flow → washout of vasodilators → vasoconstriction"
                },
                organs: {
                    brain: "Maintains constant flow over MAP 60-160 mmHg (critical for function)",
                    kidney: "Maintains GFR over MAP 80-180 mmHg (myogenic + tubuloglomerular feedback)",
                    heart: "Metabolic autoregulation (adenosine, ↓ O₂)"
                },
                range: "Effective within certain pressure limits (outside range, flow becomes pressure-dependent)",
                clinical: "Chronic hypertension → autoregulation curve shifts right (require higher BP for normal flow)"
            }
        },

        circulatoryCircuits: {
            systemicCirculation: {
                pathway: "LV → aortic valve → aorta → arteries → arterioles → systemic capillaries → venules → veins → vena cavae → RA",
                function: "Deliver O₂ and nutrients to tissues, remove CO₂ and wastes",
                pressure: {
                    aorta: "~120/80 mmHg (mean ~95 mmHg)",
                    largeArteries: "~120/80 mmHg",
                    smallArteries: "~90/60 mmHg",
                    arterioles: "~85 → 35 mmHg (MAJOR PRESSURE DROP - resistance vessels)",
                    capillaries: "~35 → 15 mmHg",
                    venules: "~15 mmHg",
                    veins: "~15 → 0 mmHg",
                    venaCava: "~0-5 mmHg"
                },
                resistance: "TPR ~800-1200 dynes·sec/cm⁵ (high)",
                bloodVolume: "~4500 mL (~85% of total blood volume)",
                flow: "~5 L/min (= cardiac output)"
            },

            pulmonaryCirculation: {
                pathway: "RV → pulmonary valve → pulmonary trunk → R & L pulmonary arteries → lung capillaries → pulmonary veins (4) → LA",
                function: "Gas exchange (oxygenate blood, remove CO₂)",
                pressure: {
                    pulmonaryArtery: "~25/10 mmHg (mean ~15 mmHg) - LOW pressure system",
                    capillaries: "~10 mmHg (just above alveolar pressure)",
                    pulmonaryVeins: "~5 mmHg",
                    leftAtrium: "~5 mmHg"
                },
                resistance: "~100-150 dynes·sec/cm⁵ (~1/10 of systemic - LOW)",
                bloodVolume: "~500 mL (~9% of total blood volume)",
                flow: "~5 L/min (= systemic CO, circulations in series)",
                advantages: {
                    lowPressure: "Prevents fluid filtration into alveoli (maintains gas exchange)",
                    thinCapillaries: "Short diffusion distance (efficient gas exchange)",
                    large: "Large capillary surface area (~70 m²)"
                },
                recruitment: {
                    rest: "Not all capillaries perfused",
                    exercise: "Recruit closed capillaries → ↑ surface area for gas exchange, ↓ resistance"
                },
                hypoxicVasoconstriction: {
                    unique: "↓ Alveolar O₂ → vasoconstriction (OPPOSITE of systemic circulation)",
                    purpose: "Divert blood from poorly ventilated regions to well-ventilated regions (V/Q matching)",
                    pathologic: "Chronic hypoxia (high altitude, lung disease) → pulmonary hypertension"
                },
                clinical: {
                    pulmonaryHypertension: "Mean PA pressure >25 mmHg at rest → RV failure",
                    pulmonaryEdema: "↑ LA pressure (left heart failure) → ↑ capillary pressure → fluid in alveoli"
                }
            },

            inSeries: {
                relationship: "Systemic and pulmonary circulations in SERIES",
                consequence: "CO_right = CO_left (what goes out must come back)",
                balance: "Any imbalance causes blood accumulation (pulmonary edema if LV fails, peripheral edema if RV fails)",
                steadyState: "At equilibrium, CO = venous return"
            },

            inParallel: {
                relationship: "Organs within systemic circulation arranged in PARALLEL",
                consequence: "Can regulate flow to each organ independently",
                totalFlow: "Sum of organ flows = cardiac output"
            }
        },

        velocityOfBloodFlow: {
            relationship: "v = Q / A (velocity inversely proportional to total cross-sectional area)",
            
            aorta: {
                area: "Small (~3-5 cm²)",
                velocity: "High (~30-40 cm/sec) - peak systolic up to 100 cm/sec",
                pulsatile: "Highly pulsatile"
            },

            arteries: {
                totalArea: "Increases as branch",
                velocity: "Decreases progressively (~20 cm/sec in large arteries)"
            },

            arterioles: {
                totalArea: "Much larger (thousands of arterioles)",
                velocity: "Slower (~5 cm/sec)"
            },

            capillaries: {
                totalArea: "LARGEST (~2500-3000 cm²) - billions of capillaries",
                velocity: "SLOWEST (~0.03-0.07 cm/sec = 0.5 mm/sec)",
                advantage: "Slow flow allows TIME for exchange (diffusion)",
                transitTime: "~1-2 sec for RBC to traverse capillary (sufficient for O₂/CO₂ equilibration)"
            },

            venules: {
                totalArea: "Decreases (converging)",
                velocity: "Increases (~0.3 cm/sec)"
            },

            veins: {
                totalArea: "Further decreases",
                velocity: "~15 cm/sec in vena cava"
            },

            graph: "Plot velocity vs vessel type - U-shaped curve (high in aorta, low in capillaries, moderate in vena cava)"
        },

        pressureChanges: {
            arterialPressure: {
                aorta: "~120/80 mmHg (pulsatile)",
                largeArteries: "~120/80 mmHg (pulse propagates with minimal damping)",
                musclArteries: "Gradual decrease (~110/70 mmHg)",
                arterioles: "Steep drop from ~85 to 35 mmHg - MAJOR RESISTANCE",
                percentageDrop: "~50 mmHg drop across arterioles (largest pressure drop)"
            },

            capillaryPressure: {
                arterialEnd: "~35 mmHg (drives filtration)",
                venousEnd: "~15 mmHg (allows reabsorption)",
                variation: "Depends on arteriolar/venular tone"
            },

            venousPressure: {
                venules: "~15 mmHg",
                smallVeins: "~10-15 mmHg",
                largeVeins: "~5-10 mmHg",
                venaCava: "~0-5 mmHg (right atrial pressure)",
                peripheral: "Standing: leg veins ~90 mmHg (hydrostatic + 0 mmHg)",
                jugular: "Can estimate CVP by observing jugular venous pulsations"
            },

            pressureGradient: {
                systemic: "~95 mmHg (aorta to vena cava)",
                pulmonary: "~10 mmHg (PA to LA)",
                ratio: "Pulmonary gradient ~1/10 of systemic (matches resistance ratio)"
            }
        },

        pulsatileFlow: {
            arterialPulse: {
                generation: "Ventricular ejection → pressure wave travels along arteries",
                velocity: "Pulse wave velocity ~4-5 m/sec (much faster than blood flow ~30 cm/sec)",
                amplification: "Pulse pressure increases in peripheral arteries (resonance, wave reflection)",
                dicroticNotch: "Aortic valve closure → small upward deflection on downstroke"
            },

            waveformAnalysis: {
                upstroke: "Ventricular ejection (steepness reflects contractility)",
                peak: "Systolic pressure",
                downstroke: "Diastole (elastic recoil)",
                dicroticNotch: "Valve closure",
                enddiastolic: "Diastolic pressure (just before next upstroke)"
            },

            clinicalPalpation: {
                radialPulse: "Most common site (wrist, radial artery)",
                carotidPulse: "Neck (closest to heart, least dampened)",
                femorPulse: "Groin (assess aortic coarctation - delayed/absent)",
                dorsalisPedis: "Foot (assess peripheral arterial disease)",
                assessment: "Rate, rhythm, amplitude, symmetry, contour"
            },

            abnormalPulses: {
                bisferiens: "Double-peaked (aortic regurgitation + stenosis)",
                pulsusParadoxus: "↓ >10 mmHg on inspiration (cardiac tamponade, severe asthma)",
                pulsusAlternans: "Alternating strong/weak beats (severe LV failure)",
                waterhammer: "Rapid upstroke, collapse (aortic regurgitation)",
                pulsusTardus: "Delayed, weak (aortic stenosis)"
            }
        },

        venousReturn: {
            definition: "Volume of blood returning to right atrium per minute",
            importance: "VR determines preload → affects SV (Frank-Starling law)",
            steadyState: "VR = CO (what comes back must go out)",
            
            drivingPressure: {
                gradient: "Peripheral venous pressure (~7-10 mmHg) - right atrial pressure (~0-5 mmHg) = ~5 mmHg",
                small: "Much smaller than arterial gradient (low resistance in veins)"
            },

            mechanisms: {
                musclePump: {
                    description: "Skeletal muscle contraction compresses veins",
                    valves: "One-way valves ensure flow toward heart",
                    effectiveness: "Critical in legs (fight gravity)",
                    exercise: "Enhanced VR → ↑ preload → ↑ SV → ↑ CO",
                    failure: "Immobility, valve incompetence → venous pooling → ↓ VR"
                },

                respiratoryPump: {
                    inspiration: {
                        intrathoracic: "↓ Pressure (becomes more negative, e.g., -8 mmHg)",
                        effect: "↑ Pressure gradient (peripheral - thoracic) → ↑ VR",
                        abdominal: "Diaphragm descends → ↑ abdominal pressure → squeezes abdominal veins → ↑ VR"
                    },
                    expiration: "Opposite effects",
                    netEffect: "Breathing facilitates venous return"
                },

                sympatheticVenoconstriction: {
                    mechanism: "α₁ receptors → vein constriction → ↓ venous capacitance → ↑ VR",
                    mobilization: "Mobilizes blood from venous reservoir (veins hold ~60-65% blood volume)",
                    exercise: "Sympathetic activation → venoconstriction → ↑ VR → ↑ CO",
                    hemorrhage: "Compensatory venoconstriction maintains VR despite ↓ volume"
                },

                gravity: {
                    supine: "Minimal effect (veins at heart level)",
                    standing: {
                        pooling: "Blood pools in leg veins (gravity)",
                        venousP: "Leg veins ~90 mmHg (hydrostatic + venous P)",
                        consequence: "↓ VR → ↓ preload → ↓ SV → transient ↓ BP",
                        compensation: "Baroreceptor reflex (↑ HR, vasoconstriction) within seconds"
                    },
                    headDown: "Trendelenburg position → ↑ VR (used in hypotension)"
                },

                visALargo: {
                    definition: "'Suction' effect of ventricular relaxation",
                    mechanism: "Rapid ventricular relaxation → negative pressure → draws blood in",
                    contribution: "Minor (most filling is passive)"
                }
            },

            venousReturnCurve: {
                graph: "Venous return (y-axis) vs right atrial pressure (x-axis)",
                relationship: "↑ RA pressure → ↓ VR (less gradient)",
                plateau: "Mean systemic filling pressure (~7 mmHg) - VR = 0 when RA P = MSFP",
                slope: "Determined by venous resistance",
                shifts: {
                    rightward: "↑ Blood volume (transfusion) → ↑ MSFP → ↑ VR at any RA pressure",
                    upward: "↓ Venous resistance or venoconstriction → steeper slope → ↑ VR"
                }
            }
        },

        shockStates: {
            hypovolemicShock: {
                cause: "↓ Blood volume (hemorrhage, dehydration, burns)",
                hemodynamics: "↓ Preload → ↓ SV → ↓ CO → ↓ BP",
                compensation: "↑ HR, vasoconstriction, ↓ urine output",
                treatment: "Fluid resuscitation (crystalloid, blood)"
            },

            cardiogenicShock: {
                cause: "Pump failure (MI, severe heart failure)",
                hemodynamics: "↓ Contractility → ↓ CO → ↓ BP, ↑ filling pressures",
                compensation: "↑ HR, vasoconstriction (may worsen afterload)",
                treatment: "Inotropes, diuretics, mechanical support"
            },

            distributiveShock: {
                septic: "Widespread vasodilation (↓ TPR) → ↓ BP despite ↑ CO initially",
                anaphylactic: "Massive histamine → vasodilation + ↑ permeability",
                neurogenic: "Loss of sympathetic tone (spinal injury) → vasodilation + bradycardia",
                treatment: "Fluids, vasopressors, treat underlying cause"
            },

            obstructiveShock: {
                causes: "PE, tamponade, tension pneumothorax",
                hemodynamics: "Physical obstruction → ↓ VR or ↓ CO → ↓ BP",
                treatment: "Remove obstruction (surgery, needle decompression)"
            }
        },

        clinicalApplications: [
            "Understanding shock pathophysiology and management",
            "Optimizing fluid resuscitation (preload optimization)",
            "Interpreting hemodynamic monitoring (Swan-Ganz catheter)",
            "Explaining murmurs and bruits (turbulent flow)",
            "Understanding coronary perfusion (diastolic filling)",
            "Designing vascular grafts and prosthetics",
            "Exercise physiology (redistribution of blood flow)",
            "Managing heart failure (preload/afterload manipulation)",
            "Understanding effects of body position on circulation",
            "Pharmacology (vasodilators, vasoconstrictors, inotropes)"
        ]
    };

    return content;
}

handleBloodComposition(problem) {
    const content = {
        topic: "Blood Composition and Hematology",
        category: 'hematology',
        summary: "Blood is a specialized connective tissue consisting of cells (formed elements) suspended in plasma. It functions in transport (O₂, CO₂, nutrients, wastes, hormones), regulation (pH, temperature, osmotic balance), and protection (hemostasis, immunity). Understanding blood composition is fundamental to diagnosing hematologic disorders and systemic diseases.",
        
        overview: {
            definition: "Specialized fluid connective tissue circulating through cardiovascular system",
            volume: {
                adult: "~5 liters (5000 mL)",
                percentage: "~7-8% of body weight",
                male: "~5.5-6 L (70 mL/kg)",
                female: "~4-5 L (65 mL/kg)"
            },
            components: {
                plasma: "~55% of blood volume (liquid portion)",
                formedElements: "~45% of blood volume (cells)",
                hematocrit: "% of blood volume occupied by RBCs (~45% male, ~42% female)"
            },
            pH: "7.35-7.45 (slightly alkaline)",
            temperature: "~38°C (100.4°F, slightly warmer than body core)",
            viscosity: "~3-4× water (due to cells and proteins)",
            color: {
                oxygenated: "Bright red (oxyhemoglobin)",
                deoxygenated: "Dark red (deoxyhemoglobin) - NEVER blue"
            }
        },

        plasma: {
            percentage: "~55% of blood volume",
            appearance: "Clear, straw-colored (yellowish)",
            
            composition: {
                water: "~92% by weight",
                proteins: "~7% (6-8 g/dL)",
                otherSolutes: "~1% (electrolytes, nutrients, gases, wastes, hormones)"
            },

            proteins: {
                totalProtein: "6-8 g/dL",
                
                albumin: {
                    concentration: "3.5-5.0 g/dL (~60% of plasma proteins)",
                    source: "Synthesized by liver",
                    molecularWeight: "~66 kDa",
                    halfLife: "~20 days",
                    functions: {
                        osmoticPressure: {
                            role: "Main contributor to plasma oncotic pressure (~25 mmHg)",
                            mechanism: "Large molecule, negatively charged, cannot cross capillary wall",
                            importance: "Retains fluid in vascular space (prevents edema)",
                            clinical: "↓ Albumin (hypoalbuminemia) → edema (ascites, peripheral)"
                        },
                        transport: {
                            fattyAcids: "Nonesterified fatty acids (NEFA)",
                            hormones: "Thyroid hormones (T3, T4), cortisol, testosterone",
                            drugs: "Many drugs bind albumin (warfarin, phenytoin, NSAIDs)",
                            bilirubin: "Unconjugated bilirubin",
                            calcium: "~40% of plasma Ca²⁺ bound to albumin"
                        },
                        buffering: "Contributes to pH buffering (weak acid)"
                    },
                    causes: {
                        decreased: {
                            synthesis: "Liver disease (cirrhosis, hepatitis), malnutrition",
                            loss: "Nephrotic syndrome (proteinuria), burns, protein-losing enteropathy",
                            dilution: "Overhydration, pregnancy"
                        },
                        increased: "Dehydration (hemoconcentration) - rare"
                    },
                    clinicalMeasurement: "Serum albumin (g/dL), A/G ratio (albumin/globulin ratio, normal ~1.2-2.2)"
                },

                globulins: {
                    concentration: "~2.5-3.5 g/dL (~36% of plasma proteins)",
                    types: "α₁, α₂, β, γ (separated by electrophoresis)",
                    
                    alpha1: {
                        examples: "α₁-antitrypsin, HDL, transcortin",
                        alpha1antitrypsin: {
                            function: "Protease inhibitor (protects lungs from elastase)",
                            deficiency: "Emphysema (early-onset), liver disease"
                        }
                    },

                    alpha2: {
                        examples: "Haptoglobin, ceruloplasmin, α₂-macroglobulin",
                        haptoglobin: {
                            function: "Binds free hemoglobin (from lysed RBCs)",
                            clinical: "↓ in hemolysis (consumed binding free Hb)"
                        },
                        ceruloplasmin: {
                            function: "Copper transport",
                            deficiency: "Wilson's disease (copper accumulation)"
                        }
                    },

                    beta: {
                        examples: "Transferrin, LDL, complement C3, fibrinogen (in some classifications)",
                        transferrin: {
                            function: "Iron transport",
                            saturation: "Normally ~30%, ↓ in iron deficiency, ↑ in hemochromatosis",
                            TIBC: "Total iron-binding capacity (measure of transferrin)"
                        },
                        lipoproteins: "LDL (β), VLDL (pre-β) - cholesterol transport"
                    },

                    gamma: {
                        name: "Immunoglobulins (antibodies)",
                        source: "Plasma cells (from B lymphocytes)",
                        types: "IgG, IgA, IgM, IgD, IgE",
                        function: "Adaptive immune response (specific antigen recognition)",
                        
                        IgG: {
                            percentage: "~75% of immunoglobulins",
                            functions: "Opsonization, complement activation, neutralization, placental transfer",
                            subclasses: "IgG1, IgG2, IgG3, IgG4",
                            halfLife: "~23 days (longest)",
                            clinical: "↑ in chronic infections, autoimmune disease"
                        },
                        IgA: {
                            percentage: "~15%",
                            secretory: "Mucosal immunity (saliva, tears, breast milk, GI tract)",
                            serum: "Serum IgA (monomer)"
                        },
                        IgM: {
                            percentage: "~10%",
                            structure: "Pentamer (largest antibody)",
                            function: "First antibody produced (acute infection), potent complement activator",
                            clinical: "↑ IgM → acute/recent infection"
                        },
                        IgD: {
                            percentage: "<1%",
                            function: "B cell receptor, unclear serum role"
                        },
                        IgE: {
                            percentage: "<0.01%",
                            function: "Allergic reactions, parasitic infections (mast cell/basophil binding)",
                            clinical: "↑ in allergies, asthma, parasitic infections"
                        },

                        disorders: {
                            hypogammaglobulinemia: "↓ Immunoglobulins → recurrent infections",
                            monoclonalGammopathy: "Single clone of plasma cells → M spike (multiple myeloma, MGUS)"
                        }
                    }
                },

                fibrinogen: {
                    concentration: "200-400 mg/dL (~4% of plasma proteins)",
                    source: "Liver",
                    function: "Converted to fibrin during coagulation (forms clot mesh)",
                    acutePhase: "Increases in inflammation, infection (acute phase reactant)",
                    ESR: "↑ Fibrinogen → ↑ ESR (erythrocyte sedimentation rate)",
                    deficiency: "Rare (congenital afibrinogenemia), DIC (consumed)",
                    serum: "Serum = plasma minus fibrinogen (after clotting)"
                },

                otherProteins: {
                    clottingFactors: "Factors I-XIII (most synthesized in liver)",
                    complement: "C1-C9 (innate immunity, inflammation)",
                    enzymes: "Small amounts (diagnostic markers)",
                    hormones: "Insulin, erythropoietin, etc. (trace amounts)"
                }
            },

            electrolytes: {
                cations: {
                    sodium: "135-145 mEq/L (major extracellular cation)",
                    potassium: "3.5-5.0 mEq/L (mainly intracellular, critical for excitability)",
                    calcium: "8.5-10.5 mg/dL (total), ~50% ionized (active)",
                    magnesium: "1.5-2.5 mEq/L"
                },
                anions: {
                    chloride: "95-105 mEq/L (major extracellular anion)",
                    bicarbonate: "22-28 mEq/L (pH buffering)",
                    phosphate: "3.0-4.5 mg/dL",
                    sulfate: "~1 mEq/L"
                },
                functions: "Osmotic balance, nerve/muscle excitability, enzyme cofactors, buffering"
            },

            nutrients: {
                glucose: "70-100 mg/dL (fasting), primary energy source",
                aminoAcids: "Protein building blocks, energy",
                lipids: {
                    triglycerides: "<150 mg/dL (energy storage, transport)",
                    cholesterol: "<200 mg/dL total (membrane component, steroid synthesis)",
                    phospholipids: "Membrane components",
                    fattyAcids: "Energy, signaling"
                },
                vitamins: "Fat-soluble (A, D, E, K), water-soluble (B, C)"
            },

            respiratoryGases: {
                O2: "~20 mL/dL total (~3% dissolved in plasma, ~97% in RBC hemoglobin)",
                CO2: "~50 mL/dL total (~7% dissolved, ~23% as carbaminohemoglobin, ~70% as HCO₃⁻)",
                N2: "Dissolved, no physiologic role (decompression sickness if rapid pressure ↓)"
            },

            nitrogenousWastes: {
                urea: "7-20 mg/dL (from protein metabolism, excreted by kidneys)",
                creatinine: "0.6-1.2 mg/dL (from muscle creatine, marker of GFR)",
                uricAcid: "3.5-7.0 mg/dL (from purine metabolism, ↑ in gout)",
                ammonia: "~0.001 mEq/L (toxic, converted to urea in liver)",
                bilirubin: "0.3-1.2 mg/dL (from heme breakdown, ↑ in jaundice)"
            },

            hormones: {
                types: "Insulin, glucagon, thyroid hormones, cortisol, sex hormones, etc.",
                function: "Chemical messengers (endocrine signaling)",
                concentration: "Trace amounts (picomolar to nanomolar)"
            }
        },

        formedElements: {
            percentage: "~45% of blood volume (hematocrit)",
            
            erythrocytes: {
                alsoKnown: "Red blood cells (RBCs)",
                count: {
                    male: "4.5-6.0 million/μL (4.5-6.0 × 10⁶/μL)",
                    female: "4.0-5.5 million/μL",
                    altitude: "↑ at high altitude (hypoxia stimulates erythropoiesis)"
                },
                
                structure: {
                    shape: "Biconcave disc",
                    diameter: "~7-8 μm",
                    thickness: "~2.5 μm (center), ~1 μm (periphery)",
                    advantages: {
                        surfaceArea: "↑ Surface-to-volume ratio (↑ gas exchange)",
                        flexibility: "Squeeze through narrow capillaries (5-10 μm)",
                        diffusion: "Short diffusion distance to center"
                    },
                    nucleus: "Absent in mature RBCs (enucleate)",
                    organelles: "No mitochondria, ER, Golgi (mature RBCs)",
                    cytoplasm: "Packed with hemoglobin (~280 million molecules/RBC)"
                },

                metabolism: {
                    anaerobic: "Glycolysis only (no mitochondria)",
                    ATP: "For ion pumps (Na⁺/K⁺-ATPase), maintain shape",
                    Two3BPG: "Glycolysis byproduct, shifts O₂-Hb curve right (↑ O₂ unloading)"
                },

                hemoglobin: {
                    structure: {
                        protein: "Globin - 4 polypeptide chains (2α, 2β in HbA)",
                        heme: "4 heme groups (protoporphyrin IX + Fe²⁺)",
                        ironState: "Fe²⁺ (ferrous) binds O₂, Fe³⁺ (ferric) in methemoglobin cannot"
                    },
                    concentration: {
                        male: "14-18 g/dL",
                        female: "12-16 g/dL",
                        perCell: "~280 million Hb molecules per RBC"
                    },
                    types: {
                        HbA: "Adult hemoglobin (α₂β₂) - 97% in adults",
                        HbA2: "α₂δ₂ - ~2% in adults",
                        HbF: "Fetal hemoglobin (α₂γ₂) - <1% in adults, higher O₂ affinity (crosses placenta)",
                        variants: "HbS (sickle cell), HbC, HbE (mutations)"
                    },
                    oxygenBinding: {
                        reaction: "Hb + 4O₂ ⇌ HbO₂ (oxyhemoglobin)",
                        cooperativity: "Positive cooperativity (sigmoid O₂-Hb curve)",
                        capacity: "1.34 mL O₂ per g Hb (theoretical 1.39, practical 1.34)",
                        saturation: "% of Hb binding sites occupied by O₂",
                        arterial: "~98% saturated (PO₂ = 100 mmHg)",
                        venous: "~75% saturated (PO₂ = 40 mmHg)",
                        content: "Arterial O₂ content = (Hb × 1.34 × saturation) + (PO₂ × 0.003)"
                    },
                    oxyHbCurve: {
                        shape: "Sigmoid (S-shaped) due to cooperativity",
                        P50: "PO₂ at 50% saturation (~27 mmHg)",
                        rightShift: {
                            factors: "↑ Temperature, ↑ CO₂, ↓ pH (Bohr effect), ↑ 2,3-BPG",
                            effect: "↓ Affinity → ↑ O₂ unloading to tissues",
                            mnemonic: "CADET face Right: CO₂, Acid, 2,3-DPG, Exercise, Temperature"
                        },
                        leftShift: {
                            factors: "↓ Temperature, ↓ CO₂, ↑ pH, ↓ 2,3-BPG, HbF, carbon monoxide",
                            effect: "↑ Affinity → ↓ O₂ unloading (holds O₂ tighter)"
                        },
                        clinicalRelevance: "Altitude (↑ 2,3-BPG → right shift), CO poisoning (left shift, ↓ delivery)"
                    },
                    CO2transport: {
                        dissolved: "~7% as dissolved CO₂",
                        carbamino: "~23% as carbaminohemoglobin (binds to amino groups)",
                        bicarbonate: "~70% as HCO₃⁻ (via carbonic anhydrase in RBCs)",
                        HaldaneEffect: "Deoxy-Hb binds more CO₂ than oxy-Hb (facilitates CO₂ pickup in tissues)"
                    },
                    abnormalForms: {
                        methemoglobin: "Fe³⁺ (cannot bind O₂) - normal <1%, cyanosis if >15%",
                        carboxyhemoglobin: "CO bound (carbon monoxide poisoning, cherry-red color)",
                        sulfhemoglobin: "Irreversible oxidation (drugs, toxins)"
                    }
                },

                production: {
                    site: {
                        fetus: "Yolk sac (0-2 months), liver/spleen (2-7 months), bone marrow (>7 months)",
                        child: "All bone marrow (red marrow)",
                        adult: "Axial skeleton (vertebrae, ribs, sternum, pelvis), proximal long bones"
                    },
                    process: "Erythropoiesis (in bone marrow)",
                    stages: [
                        "Hematopoietic stem cell → proerythroblast → erythroblast → normoblast → reticulocyte → erythrocyte",
                        "Nucleus extruded at normoblast stage",
                        "Reticulocyte (still has ribosomes) matures in 1-2 days → RBC"
                    ],
                    stimulus: {
                        EPO: {
                            name: "Erythropoietin",
                            source: "Kidneys (90%), liver (10%)",
                            trigger: "Hypoxia (↓ O₂ delivery) sensed by kidney",
                            mechanism: "↑ EPO → ↑ erythropoiesis in bone marrow",
                            feedback: "Negative feedback (↑ RBCs → ↑ O₂ delivery → ↓ EPO)"
                        }
                    },
                    requirements: {
                        iron: "For heme synthesis (Fe²⁺)",
                        vitaminB12: "Cobalamin - for DNA synthesis",
                        folicAcid: "For DNA synthesis",
                        protein: "For globin synthesis",
                        copper: "Cofactor for enzymes",
                        vitamins: "B6, riboflavin, etc."
                    },
                    rate: "~2 million RBCs produced per second at rest",
                    reticulocyteCount: "0.5-2.0% of RBCs (marker of erythropoietic activity)"
                },

                lifespan: {
                    duration: "~120 days (~4 months)",
                    senescence: "Loss of membrane flexibility, enzyme activity",
                    recognition: "Senescent RBCs phagocytosed by macrophages (spleen, liver, bone marrow)"
                },

                destruction: {
                    location: "Spleen (main), liver, bone marrow (by macrophages)",
                    hemeLysis: {
                        heme: "Heme → biliverdin (green) → bilirubin (yellow, unconjugated)",
                        iron: "Recycled (stored as ferritin, transported by transferrin)",
                        globin: "Amino acids recycled"
                    },
                    bilirubinMetabolism: {
                        unconjugated: "Fat-soluble, bound to albumin → liver",
                        conjugated: "Liver adds glucuronic acid → water-soluble → bile → intestine",
                        intestinal: "Bacteria convert to urobilinogen → stercobilin (brown, feces color) + urobilin (urine)",
                        jaundice: "↑ Bilirubin (>2-3 mg/dL) → yellow skin/sclera (prehepatic, hepatic, posthepatic)"
                    }
                },

                anemias: {
                    definition: "↓ Hemoglobin or ↓ RBC count",
                    classification: {
                        bySize: {
                            microcytic: "Small RBCs (MCV <80 fL) - iron deficiency, thalassemia, chronic disease",
                            normocytic: "Normal size (MCV 80-100 fL) - acute blood loss, hemolysis, chronic disease",
                            macrocytic: "Large RBCs (MCV >100 fL) - B12/folate deficiency, liver disease, hypothyroid"
                        },
                        byMechanism: {
                            decreasedProduction: "Iron deficiency, B12/folate deficiency, bone marrow failure",
                            increasedDestruction: "Hemolytic anemias (sickle cell, G6PD deficiency, autoimmune)",
                            bloodLoss: "Acute hemorrhage, chronic GI bleeding"
                        }
                    },
                    symptoms: "Fatigue, pallor, dyspnea, tachycardia, angina (if severe)",
                    compensation: "↑ 2,3-BPG (↑ O₂ unloading), ↑ CO, ↑ EPO"
                },

                polycythemia: {
                    definition: "↑ RBC count (Hct >55% male, >50% female)",
                    primary: "Polycythemia vera (bone marrow disorder)",
                    secondary: "Chronic hypoxia (altitude, COPD, cyanotic heart disease), EPO-secreting tumor, testosterone",
                    relative: "Dehydration (hemoconcentration)",
                    consequences: "↑ Viscosity → ↑ resistance → ↑ BP, ↑ thrombosis risk",
                    treatment: "Phlebotomy, treat underlying cause"
                }
            },

            leukocytes: {
                alsoKnown: "White blood cells (WBCs)",
                totalCount: "4,000-11,000/μL",
                function: "Immune defense (innate and adaptive immunity)",
                lifespan: "Hours to years (depends on type)",
                mobility: "Can leave bloodstream (diapedesis) → tissues",
                
                granulocytes: {
                    characteristics: "Granules in cytoplasm, multilobed nucleus",
                    
                    neutrophils: {
                        percentage: "50-70% of WBCs (most abundant)",
                        absoluteCount: "2,500-7,000/μL",
                        alsoKnown: "Polymorphonuclear leukocytes (PMNs), polys, segs",
                        nucleus: "3-5 lobes (multilobed)",
                        granules: {
                            primary: "Azurophilic (lysosomes) - myeloperoxidase, defensins",
                            secondary: "Specific - lactoferrin, collagenase",
                            tertiary: "Gelatinase"
                        },
                        lifespan: "6-8 hours in blood, 1-2 days in tissues",
                        functions: {
                            phagocytosis: "Engulf bacteria, fungi, debris",
                            killing: "ROS (respiratory burst), enzymes, NETs (neutrophil extracellular traps)",
                            chemotaxis: "Migrate to infection site (follow chemoattractants)"
                        },
                        maturation: "Myeloblast → promyelocyte → myelocyte → metamyelocyte → band → segmented neutrophil",
                        bands: "Immature neutrophils (band cells) - ↑ in acute infection ('left shift')",
                        clinical: {
                            neutrophilia: ">7,000/μL - infection, inflammation, stress, steroids, leukemia",
                            neutropenia: "<1,500/μL - chemotherapy, autoimmune, severe infection (sepsis), drugs",
                            severeNeutropenia: "<500/μL - high infection risk (opportunistic infections)"
                        },
                        firstResponder: "Arrive at infection site first (acute inflammation)",
                        pusCell: "Dead neutrophils = pus"
                    },

                    eosinophils: {
                        percentage: "1-4% of WBCs",
                        absoluteCount: "100-400/μL",
                        nucleus: "Bilobed",
                        granules: "Large, red/orange (acidophilic) - major basic protein, eosinophil peroxidase",
                        lifespan: "8-12 hours in blood, weeks in tissues",
                        functions: {
                            parasites: "Defend against helminth (worm) infections",
                            allergic: "Modulate allergic/inflammatory responses (can worsen or ameliorate)",
                            degranulation: "Release cytotoxic proteins onto parasites"
                        },
                        clinical: {
                            eosinophilia: ">400/μL - parasitic infections, allergies (asthma, atopic dermatitis), drugs, hypereosinophilic syndrome",
                            severeEosinophilia: ">1,500/μL - organ damage (heart, lungs, nerves)"
                        }
                    },

                    basophils: {
                        percentage: "<1% of WBCs (least common)",
                        absoluteCount: "<100/μL",
                        nucleus: "Bilobed or irregular (often obscured by granules)",
                        granules: "Large, dark blue/purple (basophilic) - histamine, heparin",
                        lifespan: "Few hours to days",
                        functions: {
                            allergic: "Allergic reactions (immediate hypersensitivity)",
                            inflammatory: "Release histamine (vasodilation, ↑ permeability), heparin (anticoagulant)",
                            degranulation: "IgE-mediated (crosslinking of surface IgE)"
                        },
                        similar: "Similar to mast cells in tissues",
                        clinical: {
                            basophilia: "Rare - chronic myeloid leukemia, allergic reactions",
                            basopenia: "Not clinically significant"
                        }
                    }
                },

                agranulocytes: {
                    characteristics: "No cytoplasmic granules (in light microscopy), large round nucleus",
                    
                    lymphocytes: {
                        percentage: "20-40% of WBCs",
                        absoluteCount: "1,500-3,000/μL (adults), higher in children",
                        size: "Small (6-9 μm) or large (up to 18 μm)",
                        nucleus: "Large, round, densely staining",
                        cytoplasm: "Scant (small lymphocytes), more abundant (activated)",
                        lifespan: "Days (naive), years (memory cells)",
                        
                        types: {
                            Tcells: {
                                percentage: "~70-80% of lymphocytes",
                                maturation: "Thymus",
                                CD3: "Surface marker (all T cells)",
                                subtypes: {
                                    CD4_helper: {
                                        marker: "CD4+ (T helper cells)",
                                        percentage: "~60-65% of T cells",
                                        functions: "Activate B cells, cytotoxic T cells, macrophages (via cytokines)",
                                        subsets: "Th1 (cell-mediated), Th2 (humoral), Th17 (autoimmunity), Treg (suppression)",
                                        HIV: "Infects and depletes CD4+ cells → AIDS"
                                    },
                                    CD8_cytotoxic: {
                                        marker: "CD8+ (cytotoxic T cells, CTLs)",
                                        percentage: "~30-35% of T cells",
                                        functions: "Kill infected cells, tumor cells (via perforin, granzymes, Fas)",
                                        recognition: "MHC I + antigen"
                                    },
                                    memory: "Long-lived, rapid response upon re-exposure",
                                    regulatory: "Treg cells - suppress immune response (prevent autoimmunity)"
                                },
                                CD4_CD8ratio: "Normal ~1.5-2.5 (CD4 > CD8), inverted in HIV"
                            },
                            Bcells: {
                                percentage: "~10-20% of lymphocytes",
                                maturation: "Bone marrow",
                                CD19_CD20: "Surface markers",
                                functions: {
                                    antibodies: "Differentiate into plasma cells → secrete antibodies",
                                    memory: "Memory B cells - rapid recall response",
                                    presentation: "Antigen-presenting cells (to T cells)"
                                },
                                activation: "Antigen binding + T cell help (usually) → proliferation & differentiation"
                            },
                            NKcells: {
                                percentage: "~10-15% of lymphocytes",
                                marker: "CD16+, CD56+ (lack CD3)",
                                functions: "Kill infected cells, tumor cells WITHOUT prior sensitization (innate)",
                                mechanism: "Detect 'missing self' (lack of MHC I) or stress signals → kill",
                                granules: "Perforin, granzymes"
                            }
                        },
                        
                        clinical: {
                            lymphocytosis: ">3,000/μL - viral infections (mono, CMV), pertussis, lymphoid leukemia/lymphoma",
                            lymphopenia: "<1,000/μL - HIV/AIDS, immunodeficiency, chemotherapy, steroids, autoimmune",
                            atypicalLymphocytes: "Large, reactive lymphocytes - EBV (mononucleosis), CMV, viral infections"
                        }
                    },

                    monocytes: {
                        percentage: "2-8% of WBCs",
                        absoluteCount: "200-800/μL",
                        size: "Largest WBC (12-20 μm)",
                        nucleus: "Kidney-shaped or folded",
                        cytoplasm: "Abundant, grayish-blue, may have vacuoles",
                        lifespan: "1-3 days in blood, months-years as macrophages in tissues",
                        functions: {
                            precursor: "Differentiate into macrophages (tissues) or dendritic cells",
                            phagocytosis: "Engulf pathogens, debris, dead cells",
                            presentation: "Antigen-presenting cells (activate T cells)",
                            cytokines: "Secrete IL-1, TNF-α, IL-12 (inflammation, immune activation)"
                        },
                        tissueMacrophages: {
                            alveolar: "Lungs (dust cells)",
                            kupffer: "Liver (phagocytose bacteria from gut)",
                            microglia: "CNS (brain/spinal cord)",
                            osteoclasts: "Bone (bone resorption)",
                            histiocytes: "Connective tissue"
                        },
                        clinical: {
                            monocytosis: ">800/μL - chronic infections (TB, endocarditis), recovery from infection, chronic inflammatory disease, leukemia",
                            monocytopenia: "Rare - not usually clinically significant"
                        }
                    }
                },

                leukemias: {
                    definition: "Malignant proliferation of WBCs (bone marrow/blood)",
                    classification: {
                        acute: {
                            ALL: "Acute lymphoblastic leukemia (children, lymphoblasts)",
                            AML: "Acute myeloid leukemia (adults, myeloblasts)",
                            presentation: "Rapid onset, bone marrow failure (anemia, thrombocytopenia, neutropenia), blasts >20%"
                        },
                        chronic: {
                            CLL: "Chronic lymphocytic leukemia (elderly, mature-appearing B cells)",
                            CML: "Chronic myeloid leukemia (Philadelphia chromosome t(9;22), all stages of myeloid cells)",
                            presentation: "Insidious, ↑ WBC, hepatosplenomegaly"
                        }
                    }
                }
            },

            thrombocytes: {
                alsoKnown: "Platelets",
                count: "150,000-400,000/μL",
                size: "2-4 μm (smallest 'cell' in blood)",
                structure: {
                    fragments: "Cell fragments (from megakaryocytes, no nucleus)",
                    membrane: "Phospholipid bilayer with glycoproteins (receptors)",
                    granules: {
                        alpha: "vWF, fibrinogen, platelet factor 4, PDGF",
                        dense: "ADP, ATP, serotonin, Ca²⁺ (released on activation)"
                    },
                    cytoskeleton: "Actin, myosin (allow shape change)"
                },
                lifespan: "~7-10 days",
                production: {
                    site: "Bone marrow",
                    precursor: "Megakaryocytes (large polyploid cells)",
                    process: "Megakaryocyte extends pseudopods → fragment into platelets (~1,000-3,000 per megakaryocyte)",
                    stimulus: "Thrombopoietin (from liver, kidneys)"
                },
                destruction: "Spleen (mainly), liver (by macrophages)",
                
                functions: {
                    hemostasis: "Primary hemostasis (platelet plug formation)",
                    vasculoProtection: "Maintain vascular integrity",
                    inflammation: "Release inflammatory mediators"
                },

                activation: {
                    triggers: "Collagen exposure (vascular injury), thrombin, ADP, TXA₂",
                    steps: [
                        "1. ADHESION: Platelets bind collagen (via vWF and GPIb receptor)",
                        "2. ACTIVATION: Shape change (pseudopods), degranulation (release ADP, serotonin, TXA₂)",
                        "3. AGGREGATION: Platelets bind each other (via fibrinogen and GPIIb/IIIa)",
                        "4. PLUG FORMATION: Primary hemostatic plug (temporary seal)"
                    ],
                    positiveHandback: "ADP and TXA₂ activate more platelets (amplification)"
                },

                hemostasis: {
                    vascularSpasm: "Immediate vasoconstriction (limits blood loss)",
                    plateletPlugFormation: {
                        timing: "Seconds to minutes",
                        process: "Adhesion → activation → aggregation",
                        result: "Platelet plug (white clot)",
                        sufficient: "Small injuries (pinprick)"
                    },
                    coagulation: {
                        timing: "Minutes",
                        pathways: {
                            intrinsic: "Exposed collagen → Factor XII → cascade",
                            extrinsic: "Tissue factor (from damaged cells) → Factor VII → cascade",
                            common: "Both → Factor X → thrombin → fibrinogen → fibrin"
                        },
                        result: "Fibrin mesh stabilizes platelet plug (red clot)",
                        amplification: "Thrombin amplifies cascade (positive feedback)"
                    },
                    fibrinolysis: {
                        timing: "Hours to days",
                        process: "Plasminogen → plasmin (breaks down fibrin)",
                        activators: "tPA (tissue plasminogen activator)",
                        result: "Clot dissolution after vessel repair"
                    }
                },

                disorders: {
                    thrombocytopenia: {
                        definition: "<150,000/μL (bleeding risk significant <50,000, severe <20,000)",
                        causes: {
                            decreasedProduction: "Bone marrow failure (aplastic anemia), chemotherapy, B12/folate deficiency",
                            increasedDestruction: {
                                ITP: "Immune thrombocytopenic purpura (antibodies vs platelets)",
                                TTP: "Thrombotic thrombocytopenic purpura (microthrombi consume platelets)",
                                DIC: "Disseminated intravascular coagulation (widespread clotting + bleeding)",
                                HUS: "Hemolytic uremic syndrome (usually post-E. coli infection in children)"
                            },
                            sequestration: "Splenomegaly (platelets trapped in enlarged spleen)"
                        },
                        symptoms: "Petechiae, purpura, bleeding (mucosal, GI, intracranial if severe)",
                        treatment: "Treat cause, steroids (ITP), platelet transfusion (if severe bleeding)"
                    },
                    thrombocytosis: {
                        definition: ">450,000/μL",
                        primary: "Essential thrombocythemia (myeloproliferative disorder)",
                        secondary: "Inflammation, iron deficiency, post-splenectomy, malignancy",
                        risk: "Thrombosis (if >1 million) or paradoxical bleeding (platelet dysfunction)"
                    },
                    plateletDysfunction: {
                        vonWillebrandDisease: "Most common inherited bleeding disorder (↓ vWF → impaired adhesion)",
                        aspirin: "Irreversibly inhibits COX → ↓ TXA₂ → impaired aggregation (for platelet lifespan)",
                        uremia: "Chronic kidney disease → platelet dysfunction"
                    }
                }
            }
        },

        bloodTypes: {
            ABOsystem: {
                discovered: "Karl Landsteiner (1901)",
                antigens: "A and B antigens (glycoproteins) on RBC surface",
                antibodies: "Naturally occurring anti-A and anti-B in plasma (IgM)",
                rule: "You have antibodies against antigens you LACK",
                
                types: {
                    A: {
                        antigen: "A antigen on RBCs",
                        antibody: "Anti-B in plasma",
                        frequency: "~36% (varies by ethnicity)"
                    },
                    B: {
                        antigen: "B antigen on RBCs",
                        antibody: "Anti-A in plasma",
                        frequency: "~9%"
                    },
                    AB: {
                        antigen: "Both A and B antigens",
                        antibody: "Neither (no anti-A or anti-B)",
                        frequency: "~3%",
                        recipient: "Universal recipient (can receive any ABO type)"
                    },
                    O: {
                        antigen: "Neither A nor B (only H antigen)",
                        antibody: "Both anti-A and anti-B",
                        frequency: "~37%",
                        donor: "Universal donor (can donate to any ABO type)"
                    }
                },
                
                genetics: {
                    alleles: "I^A (codes for A), I^B (codes for B), i (codes for neither)",
                    codominance: "I^A and I^B are codominant (both expressed if present)",
                    recessive: "i is recessive",
                    genotypes: {
                        A: "I^A I^A or I^A i",
                        B: "I^B I^B or I^B i",
                        AB: "I^A I^B",
                        O: "ii"
                    }
                },

                transfusionRules: {
                    principle: "Recipient's antibodies must NOT attack donor's antigens",
                    compatible: {
                        O: "Can donate to all (no antigens to attack)",
                        A: "Can donate to A and AB",
                        B: "Can donate to B and AB",
                        AB: "Can donate to AB only, can receive from all (no antibodies)"
                    },
                    crossmatch: "Mix donor RBCs with recipient serum (check for agglutination before transfusion)"
                },

                transfusionReaction: {
                    acute: "Antibodies bind donor RBCs → agglutination → hemolysis",
                    symptoms: "Fever, chills, back pain, dark urine (hemoglobinuria), shock, DIC",
                    mechanism: "Complement activation → intravascular hemolysis → kidney damage (hemoglobin toxic)",
                    prevention: "Type and crossmatch, clerical checks (most common cause = clerical error)",
                    fatal: "Can be fatal if not stopped immediately"
                }
            },

            Rhsystem: {
                discovered: "Landsteiner and Wiener (1940, using Rhesus monkey RBCs)",
                antigen: "Rh (D) antigen on RBC surface",
                frequency: "~85% Rh+ (have D antigen), ~15% Rh- (lack D antigen)",
                
                types: {
                    Rhpositive: "Have D antigen",
                    Rhnegative: "Lack D antigen"
                },

                antibodies: {
                    notNatural: "Anti-Rh antibodies NOT naturally occurring (unlike ABO)",
                    sensitization: "Develop after exposure to Rh+ blood (transfusion, pregnancy)",
                    IgG: "Anti-D is IgG (can cross placenta)"
                },

                HDN_HemolyticDiseaseOfNewborn: {
                    scenario: "Rh- mother + Rh+ fetus",
                    firstPregnancy: {
                        delivery: "Fetal RBCs enter maternal circulation during delivery",
                        sensitization: "Mother develops anti-D antibodies (IgG)"
                    },
                    subsequentPregnancy: {
                        crossPlacenta: "Maternal anti-D IgG crosses placenta",
                        attack: "Attacks fetal Rh+ RBCs → hemolysis",
                        symptoms: "Fetal anemia, jaundice, hydrops fetalis (severe), kernicterus (bilirubin brain damage)"
                    },
                    prevention: {
                        RhoGAM: "Anti-D immunoglobulin (Rh immune globulin)",
                        timing: "28 weeks gestation + within 72 hours after delivery (if baby is Rh+)",
                        mechanism: "Binds fetal Rh+ RBCs → cleared before maternal immune system sensitized",
                        effectiveness: "Nearly 100% effective in preventing sensitization"
                    },
                    treatment: "Phototherapy (jaundice), exchange transfusion (severe), intrauterine transfusion"
                },

                transfusion: {
                    Rhpos: "Can receive Rh+ or Rh-",
                    Rhneg: "Should receive Rh- only (avoid sensitization, especially women of childbearing age)"
                }
            },

            otherBloodGroups: {
                total: ">30 blood group systems",
                examples: "Kell, Duffy, Kidd, MNS, Lewis, Lutheran",
                clinical: "Usually minor, but can cause transfusion reactions or HDN if alloimmunized",
                antibodyScreen: "Detects unexpected antibodies before transfusion"
            }
        },

        clinicalTests: {
            CBC: {
                name: "Complete Blood Count",
                components: {
                    WBC: "Total white blood cell count",
                    RBC: "Red blood cell count",
                    Hb: "Hemoglobin concentration",
                    Hct: "Hematocrit",
                    MCV: "Mean corpuscular volume (RBC size)",
                    MCH: "Mean corpuscular hemoglobin",
                    MCHC: "Mean corpuscular hemoglobin concentration",
                    RDW: "Red cell distribution width (variation in RBC size)",
                    plateletCount: "Platelet count",
                    differential: "Percentage of each WBC type (neutrophils, lymphocytes, monocytes, eosinophils, basophils)"
                },
                uses: "Screen for anemia, infection, leukemia, many other conditions"
            },

            coagulationTests: {
                PT_INR: {
                    name: "Prothrombin time / International Normalized Ratio",
                    measures: "Extrinsic and common pathways (VII, X, V, II, I)",
                    normal: "11-13 sec, INR 0.9-1.1",
                    use: "Monitor warfarin, assess liver function",
                    prolonged: "Warfarin, liver disease, vitamin K deficiency, factor deficiency"
                },
                aPTT: {
                    name: "Activated partial thromboplastin time",
                    measures: "Intrinsic and common pathways (XII, XI, IX, VIII, X, V, II, I)",
                    normal: "25-35 sec",
                    use: "Monitor heparin, screen for clotting disorders (hemophilia)",
                    prolonged: "Heparin, hemophilia, vWD, lupus anticoagulant"
                },
                fibrinogen: "200-400 mg/dL (↓ in DIC, liver disease)",
                Ddimer: "Fibrin degradation product (↑ in DVT, PE, DIC)",
                bleedingTime: "Platelet function test (prolonged in platelet disorders, vWD)"
            }
        },

        applications: [
            "Diagnosing anemia, polycythemia, and other RBC disorders",
            "Detecting infections and leukemia (WBC abnormalities)",
            "Assessing hemostasis and coagulation disorders",
            "Blood typing and crossmatching for transfusions",
            "Monitoring treatment response (chemotherapy, anticoagulation)",
            "Prenatal screening and prevention of HDN",
            "Bone marrow transplantation",
            "Understanding oxygen transport and acid-base balance"
        ]
    };

    return content;
}


// MAIN PROBLEM PROCESSING METHODS - CIRCULATORY SYSTEM
// ========================================

// ========================================
// MAIN PROBLEM PROCESSING METHODS - CIRCULATORY SYSTEM
// ========================================

parseCirculatoryProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.circulatoryTopics)) {
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
        throw new Error(`Unable to recognize circulatory system topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.circulatoryTopics[topicType].difficulty,
        prerequisites: this.circulatoryTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handleCirculatoryProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' || 
                                   (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleCirculatoryExperimentRequest(config);
        } else {
            this.currentProblem = this.parseCirculatoryProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getCirculatoryContent(this.currentProblem);
            
            if (this.adaptiveDifficulty) {
                this.currentContent = this.adaptContentDifficulty(this.currentContent, this.learnerProfile.currentLevel);
            }
            
            if (this.contextualLearning) {
                this.currentContent.contextualScenarios = this.getContextualScenarios(this.currentProblem.type);
            }
            
            if (this.includeExperiments) {
                this.currentContent.relatedExperiments = this.getRelatedCirculatoryExperiments(this.currentProblem.type);
            }
            
            if (this.metacognitiveSupport) {
                this.currentContent.metacognitivePrompts = this.getMetacognitivePrompts(this.currentProblem.type);
            }
            
            this.contentSteps = this.generateCirculatoryContent(this.currentProblem, this.currentContent);
            
            // Generate workbook (handles async internally)
            this.generateCirculatoryWorkbook();

            // Return synchronously with promise for diagrams
            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                steps: this.contentSteps,
                diagrams: this.diagramData,
                experiments: this.currentContent.relatedExperiments,
                learnerProfile: this.learnerProfile,
                // Provide method to wait for diagrams if needed
                getDiagrams: () => this.waitForDiagrams()
            };
        }
    } catch (error) {
        throw new Error(`Failed to process circulatory system request: ${error.message}`);
    }
}

getCirculatoryContent(problem) {
    const handler = this.circulatoryTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for circulatory system topic: ${problem.type}`);
    }

    let content = handler(problem);

    // Apply parameter filtering if parameters are provided
    if (problem.parameters && Object.keys(problem.parameters).length > 0) {
        content = this.filterContentByParameters(content, problem.parameters);
    }

    return content;
}

filterContentByParameters(content, parameters) {
    if (!parameters || Object.keys(parameters).length === 0) {
        return content;
    }

    const filtered = { ...content };

    // Filter by specific items
    if (parameters.specificItems && Array.isArray(parameters.specificItems)) {
        // Filter arrays in content
        Object.keys(filtered).forEach(key => {
            if (Array.isArray(filtered[key])) {
                filtered[key] = filtered[key].filter(item => {
                    if (typeof item === 'object' && item.name) {
                        return parameters.specificItems.some(spec =>
                            item.name.toLowerCase().includes(spec.toLowerCase())
                        );
                    }
                    return true;
                });
            }
        });
    }

    // Filter by difficulty level
    if (parameters.difficulty) {
        filtered.detailLevel = parameters.difficulty;
    }

    // Filter by specific heart chamber
    if (parameters.chamber && filtered.chambers) {
        const chamber = parameters.chamber.toLowerCase();
        filtered.chambers = Object.fromEntries(
            Object.entries(filtered.chambers).filter(([key]) => 
                key.toLowerCase().includes(chamber)
            )
        );
    }

    // Filter by vessel type
    if (parameters.vesselType && filtered.vesselTypes) {
        const vesselType = parameters.vesselType.toLowerCase();
        filtered.vesselTypes = Object.fromEntries(
            Object.entries(filtered.vesselTypes).filter(([key]) => 
                key.toLowerCase().includes(vesselType)
            )
        );
    }

    return filtered;
}

handleCirculatoryExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.circulatoryExperiments[experimentId]) {
        this.currentExperiment = this.circulatoryExperiments[experimentId];
    } else {
        this.currentExperiment = this.findCirculatoryExperimentByTopic(topic);
    }

    if (!this.currentExperiment) {
        throw new Error(`No circulatory experiment found for: ${topic}`);
    }

    const experimentContent = this.generateCirculatoryExperimentContent(this.currentExperiment, parameters);
    this.generateCirculatoryExperimentWorkbook(experimentContent);

    return {
        experiment: this.currentExperiment,
        content: experimentContent,
        workbook: this.currentWorkbook,
        getDiagrams: () => this.waitForDiagrams()
    };
}

findCirculatoryExperimentByTopic(topic) {
    const topicLower = topic.toLowerCase();
    
    // Direct name match
    for (const [id, exp] of Object.entries(this.circulatoryExperiments)) {
        if (exp.name.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Historical scientist match
    for (const [id, exp] of Object.entries(this.circulatoryExperiments)) {
        if (exp.historicalBackground?.scientist?.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Related topics match
    for (const [id, exp] of Object.entries(this.circulatoryExperiments)) {
        if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
            return exp;
        }
    }

    // Category match
    for (const [id, exp] of Object.entries(this.circulatoryExperiments)) {
        if (exp.category.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    return null;
}

generateCirculatoryExperimentContent(experiment, parameters = {}) {
    const content = {
        experimentName: experiment.name,
        category: experiment.category,
        relatedTopics: experiment.relatedTopics,
        sections: []
    };

    if (experiment.historicalBackground) {
        content.sections.push({
            type: 'historical_background',
            title: 'Historical Background',
            data: this.formatHistoricalBackground(experiment.historicalBackground)
        });
    }

    if (experiment.labExperiment) {
        content.sections.push({
            type: 'lab_experiment',
            title: 'Laboratory Experiment',
            data: this.formatLabExperiment(experiment.labExperiment)
        });
    }

    return content;
}

formatHistoricalBackground(background) {
    const formatted = [];

    Object.entries(background).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            formatted.push([key, '']);
            value.forEach((item, index) => {
                if (typeof item === 'object') {
                    Object.entries(item).forEach(([k, v]) => {
                        formatted.push([`  ${k}`, v]);
                    });
                } else {
                    formatted.push([`  ${index + 1}.`, item]);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            formatted.push([key, '']);
            Object.entries(value).forEach(([k, v]) => {
                formatted.push([`  ${k}`, typeof v === 'object' ? JSON.stringify(v) : v]);
            });
        } else {
            formatted.push([key, value]);
        }
    });

    return formatted;
}

formatLabExperiment(labExp) {
    const formatted = [];

    formatted.push(['Experiment Title', labExp.title]);
    formatted.push(['Hypothesis', labExp.hypothesis]);
    formatted.push(['Purpose', labExp.purpose]);
    
    if (labExp.background) {
        formatted.push(['', '']);
        formatted.push(['Background', '']);
        if (typeof labExp.background === 'object') {
            Object.entries(labExp.background).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
            });
        } else {
            formatted.push(['  ', labExp.background]);
        }
    }
    
    if (labExp.variables) {
        formatted.push(['', '']);
        formatted.push(['Variables', '']);
        formatted.push(['  Independent', labExp.variables.independent]);
        formatted.push(['  Dependent', labExp.variables.dependent]);
        if (labExp.variables.controlled) {
            formatted.push(['  Controlled', Array.isArray(labExp.variables.controlled) ? 
                labExp.variables.controlled.join(', ') : labExp.variables.controlled]);
        }
    }

    if (labExp.materials) {
        formatted.push(['', '']);
        formatted.push(['Materials Required', '']);
        if (Array.isArray(labExp.materials)) {
            labExp.materials.forEach(material => {
                formatted.push(['  •', material]);
            });
        } else if (typeof labExp.materials === 'object') {
            Object.values(labExp.materials).forEach(materialList => {
                if (Array.isArray(materialList)) {
                    materialList.forEach(material => {
                        formatted.push(['  •', material]);
                    });
                } else {
                    formatted.push(['  •', materialList]);
                }
            });
        }
    }

    if (labExp.safetyPrecautions) {
        formatted.push(['', '']);
        formatted.push(['SAFETY PRECAUTIONS', '']);
        if (Array.isArray(labExp.safetyPrecautions)) {
            labExp.safetyPrecautions.forEach(safety => {
                formatted.push(['  ⚠', safety]);
            });
        }
    }

    if (labExp.procedure) {
        formatted.push(['', '']);
        formatted.push(['Procedure', '']);
        
        if (Array.isArray(labExp.procedure)) {
            labExp.procedure.forEach((step, index) => {
                if (step.trim() === '') {
                    formatted.push(['', '']);
                } else if (step.includes(':') && step === step.toUpperCase()) {
                    formatted.push([step, '']);
                } else if (step.match(/^[A-Z\s]+:$/)) {
                    formatted.push([step, '']);
                } else {
                    const stepNum = step.match(/^\d+\./) ? '' : `  ${index + 1}.`;
                    formatted.push([stepNum, step]);
                }
            });
        } else if (typeof labExp.procedure === 'object') {
            Object.entries(labExp.procedure).forEach(([key, value]) => {
                formatted.push([key.toUpperCase() + ':', '']);
                if (Array.isArray(value)) {
                    value.forEach((step, idx) => {
                        formatted.push([`  ${idx + 1}.`, step]);
                    });
                } else if (typeof value === 'object') {
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        formatted.push([`  ${subKey}:`, '']);
                        if (Array.isArray(subValue)) {
                            subValue.forEach((item, idx) => {
                                formatted.push([`    ${idx + 1}.`, item]);
                            });
                        } else {
                            formatted.push(['    ', subValue]);
                        }
                    });
                } else {
                    formatted.push(['  ', value]);
                }
                formatted.push(['', '']);
            });
        }
    }

    if (labExp.expectedResults) {
        formatted.push(['', '']);
        formatted.push(['Expected Results', '']);
        if (typeof labExp.expectedResults === 'object') {
            Object.entries(labExp.expectedResults).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (typeof value === 'object' && !Array.isArray(value)) {
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        formatted.push([`    ${subKey}:`, subValue]);
                    });
                } else {
                    formatted.push(['    ', value]);
                }
            });
        } else {
            formatted.push(['  ', labExp.expectedResults]);
        }
    }

    if (labExp.dataTable) {
        formatted.push(['', '']);
        formatted.push(['Data Table', '']);
        if (Array.isArray(labExp.dataTable)) {
            labExp.dataTable.forEach((row, idx) => {
                const prefix = idx === 0 ? '  Header:' : `  Row ${idx}:`;
                formatted.push([prefix, Array.isArray(row) ? row.join(' | ') : row]);
            });
        }
    }

    if (labExp.observations) {
        formatted.push(['', '']);
        formatted.push(['Observations', '']);
        if (Array.isArray(labExp.observations)) {
            labExp.observations.forEach(obs => {
                formatted.push(['  •', obs]);
            });
        } else if (typeof labExp.observations === 'object') {
            Object.entries(labExp.observations).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push(['    ', value]);
                }
            });
        }
    }

    if (labExp.analysis) {
        formatted.push(['', '']);
        formatted.push(['Analysis', '']);
        if (typeof labExp.analysis === 'object') {
            Object.entries(labExp.analysis).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(item => formatted.push(['    -', item]));
                } else if (typeof value === 'object') {
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        formatted.push([`    ${subKey}:`, '']);
                        if (Array.isArray(subValue)) {
                            subValue.forEach(i => formatted.push(['      •', i]));
                        } else {
                            formatted.push(['      ', subValue]);
                        }
                    });
                } else {
                    formatted.push(['    ', value]);
                }
            });
        }
    }

    if (labExp.calculations) {
        formatted.push(['', '']);
        formatted.push(['Calculations', '']);
        Object.entries(labExp.calculations).forEach(([key, value]) => {
            formatted.push([`  ${key}:`, value]);
        });
    }

    if (labExp.results) {
        formatted.push(['', '']);
        formatted.push(['Results', labExp.results]);
    }

    if (labExp.conclusions) {
        formatted.push(['', '']);
        formatted.push(['Conclusions', '']);
        if (Array.isArray(labExp.conclusions)) {
            labExp.conclusions.forEach(conclusion => {
                formatted.push(['  •', conclusion]);
            });
        } else {
            formatted.push(['  ', labExp.conclusions]);
        }
    }

    if (labExp.realWorldRelevance || labExp.realWorldApplications) {
        formatted.push(['', '']);
        formatted.push(['Real-World Applications', '']);
        const apps = labExp.realWorldRelevance || labExp.realWorldApplications;
        if (typeof apps === 'object' && !Array.isArray(apps)) {
            Object.entries(apps).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
            });
        } else if (Array.isArray(apps)) {
            apps.forEach(app => {
                formatted.push(['  •', app]);
            });
        }
    }

    if (labExp.extensions) {
        formatted.push(['', '']);
        formatted.push(['Extension Activities', '']);
        if (Array.isArray(labExp.extensions)) {
            labExp.extensions.forEach(ext => {
                formatted.push(['  •', ext]);
            });
        }
    }

    if (labExp.troubleshooting) {
        formatted.push(['', '']);
        formatted.push(['Troubleshooting', '']);
        if (Array.isArray(labExp.troubleshooting)) {
            labExp.troubleshooting.forEach(item => {
                formatted.push(['  •', item]);
            });
        }
    }

    return formatted;
}

getRelatedCirculatoryExperiments(topicType) {
    const related = [];
    
    Object.entries(this.circulatoryExperiments).forEach(([id, experiment]) => {
        if (experiment.relatedTopics.includes(topicType)) {
            related.push({
                id: id,
                name: experiment.name,
                category: experiment.category,
                historicalScientist: experiment.historicalBackground?.scientist,
                year: experiment.historicalBackground?.year,
                labTitle: experiment.labExperiment?.title
            });
        }
    });

    return related;
}

// ========================================
// UTILITY AND HELPER METHODS - CIRCULATORY
// ========================================

getAllCirculatoryExperiments() {
    return Object.entries(this.circulatoryExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist,
        year: exp.historicalBackground?.year,
        labTitle: exp.labExperiment?.title
    }));
}

getAllCirculatoryTopics() {
    return Object.entries(this.circulatoryTopics).map(([id, topic]) => ({
        id: id,
        name: topic.name,
        category: topic.category,
        description: topic.description,
        difficulty: topic.difficulty,
        prerequisites: topic.prerequisites
    }));
}

// ========================================
// CONTENT GENERATION METHODS - CIRCULATORY
// ========================================

generateCirculatoryContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateCirculatoryOverviewSection(problem, content));

    // Generate specific content sections based on content structure
    if (content.chambers || content.location) {
        contentSections.push(this.generateAnatomySection(content));
    }

    if (content.valves) {
        contentSections.push(this.generateValvesSection(content));
    }

    if (content.phases || content.cardiacCycle) {
        contentSections.push(this.generateCardiacCycleSection(content));
    }

    if (content.conductionSystem || content.conductionPathway) {
        contentSections.push(this.generateConductionSection(content));
    }

    if (content.vesselTypes || content.arterialTypes) {
        contentSections.push(this.generateVesselTypesSection(content));
    }

    if (content.regulation || content.determinants) {
        contentSections.push(this.generateRegulationSection(content));
    }

    if (content.hemodynamicEquations || content.fundamentalEquations) {
        contentSections.push(this.generateHemodynamicsSection(content));
    }

    if (content.formedElements || content.plasma) {
        contentSections.push(this.generateBloodCompositionSection(content));
    }

    // Add comparisons if available
    if (content.comparison || content.arteriesVsVeins) {
        contentSections.push(this.generateComparisonsSection(content));
    }

    // Add clinical applications
    if (content.clinicalApplications || content.applications) {
        contentSections.push(this.generateClinicalApplicationsSection(content));
    }

    // Add contextual scenarios
    if (content.contextualScenarios) {
        contentSections.push(this.generateContextualScenariosSection(content));
    }

    // Add related experiments section
    if (this.includeExperiments && content.relatedExperiments) {
        contentSections.push(this.generateRelatedExperimentsSection(content));
    }

    // Add metacognitive prompts
    if (content.metacognitivePrompts) {
        contentSections.push(this.generateMetacognitiveSection(content));
    }

    return contentSections;
}

generateCirculatoryOverviewSection(problem, content) {
    return {
        type: 'overview',
        title: content.topic || 'Circulatory System Overview',
        data: {
            summary: content.summary,
            category: content.category,
            keyPoints: this.extractCirculatoryKeyPoints(content)
        }
    };
}

generateAnatomySection(content) {
    const data = [];
    
    if (content.location) {
        data.push(['Location', '']);
        Object.entries(content.location).forEach(([key, value]) => {
            if (typeof value === 'object') {
                data.push([`  ${key}:`, '']);
                Object.entries(value).forEach(([k, v]) => {
                    data.push([`    ${k}`, v]);
                });
            } else {
                data.push([`  ${key}`, value]);
            }
        });
    }

    if (content.chambers) {
        data.push(['', '']);
        data.push(['Heart Chambers', '']);
        Object.entries(content.chambers).forEach(([chamber, details]) => {
            data.push([`  ${chamber.toUpperCase()}:`, '']);
            Object.entries(details).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    data.push([`    ${key}:`, value.join(', ')]);
                } else if (typeof value === 'object') {
                    data.push([`    ${key}:`, '']);
                    Object.entries(value).forEach(([k, v]) => {
                        data.push([`      ${k}`, v]);
                    });
                } else {
                    data.push([`    ${key}`, value]);
                }
            });
        });
    }

    return {
        type: 'anatomy',
        title: 'Anatomical Structure',
        data: data
    };
}

generateValvesSection(content) {
    const data = [];
    
    Object.entries(content.valves).forEach(([valveType, valveData]) => {
        data.push([valveType.toUpperCase(), '']);
        if (typeof valveData === 'object') {
            Object.entries(valveData).forEach(([key, value]) => {
                if (typeof value === 'object' && !Array.isArray(value)) {
                    data.push([`  ${key}:`, '']);
                    Object.entries(value).forEach(([k, v]) => {
                        data.push([`    ${k}`, v]);
                    });
                } else if (Array.isArray(value)) {
                    data.push([`  ${key}:`, value.join(', ')]);
                } else {
                    data.push([`  ${key}`, value]);
                }
            });
        }
    });

    return {
        type: 'valves',
        title: 'Heart Valves',
        data: data
    };
}

generateCardiacCycleSection(content) {
    const data = [];
    
    if (content.phases) {
        Object.entries(content.phases).forEach(([phaseName, phaseData]) => {
            data.push([phaseData.name || phaseName, '']);
            data.push(['  Timing:', phaseData.timing || 'N/A']);
            
            if (phaseData.events) {
                data.push(['  Events:', '']);
                if (Array.isArray(phaseData.events)) {
                    phaseData.events.forEach(event => {
                        data.push(['    -', event]);
                    });
                } else if (typeof phaseData.events === 'object') {
                    Object.entries(phaseData.events).forEach(([key, value]) => {
                        data.push([`    ${key}:`, value]);
                    });
                }
            }
            
            if (phaseData.pressures) {
                data.push(['  Pressures:', '']);
                Object.entries(phaseData.pressures).forEach(([key, value]) => {
                    data.push([`    ${key}:`, value]);
                });
            }
            
            data.push(['', '']);
        });
    }

    return {
        type: 'cardiac_cycle',
        title: 'Cardiac Cycle Phases',
        data: data
    };
}

generateConductionSection(content) {
    const data = [];
    
    const conduction = content.conductionSystem || content.conductionPathway;
    if (conduction && conduction.components) {
        Object.entries(conduction.components).forEach(([component, details]) => {
            data.push([component.toUpperCase(), '']);
            Object.entries(details).forEach(([key, value]) => {
                if (typeof value === 'object' && !Array.isArray(value)) {
                    data.push([`  ${key}:`, '']);
                    Object.entries(value).forEach(([k, v]) => {
                        data.push([`    ${k}`, v]);
                    });
                } else if (Array.isArray(value)) {
                    data.push([`  ${key}:`, '']);
                    value.forEach(item => data.push(['    -', item]));
                } else {
                    data.push([`  ${key}`, value]);
                }
            });
            data.push(['', '']);
        });
    }

    return {
        type: 'conduction',
        title: 'Electrical Conduction System',
        data: data
    };
}

generateVesselTypesSection(content) {
    const data = [];
    
    const vessels = content.vesselTypes || content.arterialTypes;
    if (vessels) {
        Object.entries(vessels).forEach(([vesselType, vesselData]) => {
            data.push([vesselType.toUpperCase(), '']);
            Object.entries(vesselData).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    data.push([`  ${key}:`, '']);
                    value.forEach(item => data.push(['    -', item]));
                } else if (typeof value === 'object' && value !== null) {
                    data.push([`  ${key}:`, '']);
                    Object.entries(value).forEach(([k, v]) => {
                        data.push([`    ${k}:`, v]);
                    });
                } else {
                    data.push([`  ${key}`, value]);
                }
            });
            data.push(['', '']);
        });
    }

    return {
        type: 'vessel_types',
        title: 'Blood Vessel Types',
        data: data
    };
}

generateRegulationSection(content) {
    const data = [];
    
    const regulation = content.regulation || content.determinants;
    if (regulation) {
        Object.entries(regulation).forEach(([mechanism, details]) => {
            data.push([mechanism.toUpperCase(), '']);
            if (typeof details === 'object') {
                Object.entries(details).forEach(([key, value]) => {
                    if (typeof value === 'object' && !Array.isArray(value)) {
                        data.push([`  ${key}:`, '']);
                        Object.entries(value).forEach(([k, v]) => {
                            if (Array.isArray(v)) {
                                data.push([`    ${k}:`, '']);
                                v.forEach(item => data.push(['      -', item]));
                            } else {
                                data.push([`    ${k}`, v]);
                            }
                        });
                    } else if (Array.isArray(value)) {
                        data.push([`  ${key}:`, '']);
                        value.forEach(item => data.push(['    -', item]));
                    } else {
                        data.push([`  ${key}`, value]);
                    }
                });
            }
            data.push(['', '']);
        });
    }

    return {
        type: 'regulation',
        title: 'Regulatory Mechanisms',
        data: data
    };
}

generateHemodynamicsSection(content) {
    const data = [];
    
    const equations = content.hemodynamicEquations || content.fundamentalEquations;
    if (equations) {
        Object.entries(equations).forEach(([eqName, eqData]) => {
            data.push([eqName.toUpperCase(), '']);
            Object.entries(eqData).forEach(([key, value]) => {
                if (typeof value === 'object' && !Array.isArray(value)) {
                    data.push([`  ${key}:`, '']);
                    Object.entries(value).forEach(([k, v]) => {
                        data.push([`    ${k}`, v]);
                    });
                } else {
                    data.push([`  ${key}`, value]);
                }
            });
            data.push(['', '']);
        });
    }

    return {
        type: 'hemodynamics',
        title: 'Hemodynamic Principles',
        data: data
    };
}

generateBloodCompositionSection(content) {
    const data = [];
    
    if (content.plasma) {
        data.push(['PLASMA', '']);
        Object.entries(content.plasma).forEach(([key, value]) => {
            if (typeof value === 'object' && !Array.isArray(value)) {
                data.push([`  ${key}:`, '']);
                Object.entries(value).forEach(([k, v]) => {
                    data.push([`    ${k}`, v]);
                });
            } else {
                data.push([`  ${key}`, value]);
            }
        });
        data.push(['', '']);
    }

    if (content.formedElements) {
        data.push(['FORMED ELEMENTS', '']);
        Object.entries(content.formedElements).forEach(([element, details]) => {
            data.push([`  ${element}:`, '']);
            if (typeof details === 'object') {
                Object.entries(details).forEach(([key, value]) => {
                    if (typeof value === 'object' && !Array.isArray(value)) {
                        data.push([`    ${key}:`, '']);
                        Object.entries(value).forEach(([k, v]) => {
                            data.push([`      ${k}`, v]);
                        });
                    } else {
                        data.push([`    ${key}`, value]);
                    }
                });
            }
        });
    }

    return {
        type: 'blood_composition',
        title: 'Blood Composition',
        data: data
    };
}

generateClinicalApplicationsSection(content) {
    const apps = content.clinicalApplications || content.applications;
    const data = [];
    
    if (Array.isArray(apps)) {
        apps.forEach((app, idx) => {
            data.push([`${idx + 1}.`, app]);
        });
    } else if (typeof apps === 'object') {
        Object.entries(apps).forEach(([key, value]) => {
            data.push([`${key}:`, value]);
        });
    }

    return {
        type: 'clinical_applications',
        title: 'Clinical Applications',
        data: data
    };
}

generateComparisonsSection(content) {
    const data = [];
    const comparison = content.comparison || content.arteriesVsVeins;
    
    if (comparison && comparison.comparisonTable) {
        data.push(['Comparison Table', '']);
        comparison.comparisonTable.forEach((row, idx) => {
            const prefix = idx === 0 ? 'Header:' : `Row ${idx}:`;
            if (typeof row === 'object') {
                const rowData = Object.values(row).join(' | ');
                data.push([prefix, rowData]);
            } else {
                data.push([prefix, row]);
            }
        });
    }

    return {
        type: 'comparisons',
        title: 'Comparisons',
        data: data
    };
}

generateContextualScenariosSection(content) {
    const data = [];
    
    if (Array.isArray(content.contextualScenarios)) {
        content.contextualScenarios.forEach((scenario, idx) => {
            data.push([`Scenario ${idx + 1}: ${scenario.scenario}`, '']);
            data.push(['  Context:', scenario.context]);
            data.push(['  Application:', scenario.application]);
            if (scenario.question) {
                data.push(['  Question:', scenario.question]);
            }
            data.push(['', '']);
        });
    }

    return {
        type: 'contextual_scenarios',
        title: 'Real-World Scenarios',
        data: data
    };
}

generateRelatedExperimentsSection(content) {
    const data = [];
    
    if (Array.isArray(content.relatedExperiments)) {
        content.relatedExperiments.forEach((exp, idx) => {
            data.push([`${idx + 1}. ${exp.name}`, '']);
            data.push(['  Category:', exp.category]);
            if (exp.historicalScientist) {
                data.push(['  Scientist:', `${exp.historicalScientist} (${exp.year || 'N/A'})`]);
            }
            if (exp.labTitle) {
                data.push(['  Lab:', exp.labTitle]);
            }
            data.push(['', '']);
        });
    }

    return {
        type: 'related_experiments',
        title: 'Related Experiments',
        data: data
    };
}

generateMetacognitiveSection(content) {
    const data = [];
    
    if (content.metacognitivePrompts) {
        if (content.metacognitivePrompts.beforeLearning) {
            data.push(['Before Learning:', '']);
            content.metacognitivePrompts.beforeLearning.forEach(prompt => {
                data.push(['  •', prompt]);
            });
            data.push(['', '']);
        }
        
        if (content.metacognitivePrompts.duringLearning) {
            data.push(['During Learning:', '']);
            content.metacognitivePrompts.duringLearning.forEach(prompt => {
                data.push(['  •', prompt]);
            });
            data.push(['', '']);
        }
        
        if (content.metacognitivePrompts.afterLearning) {
            data.push(['After Learning:', '']);
            content.metacognitivePrompts.afterLearning.forEach(prompt => {
                data.push(['  •', prompt]);
            });
        }
    }

    return {
        type: 'metacognitive',
        title: 'Reflection Questions',
        data: data
    };
}

extractCirculatoryKeyPoints(content) {
    const keyPoints = [];

    if (content.summary) keyPoints.push(content.summary);
    
    // Extract from various content structures
    if (content.chambers) {
        Object.keys(content.chambers).forEach(chamber => {
            const data = content.chambers[chamber];
            if (data.function) keyPoints.push(`${chamber}: ${data.function}`);
        });
    }

    if (content.phases) {
        Object.values(content.phases).forEach(phase => {
            if (phase.name) keyPoints.push(phase.name);
        });
    }

    if (content.definition) {
        keyPoints.push(content.definition.bloodPressure || content.definition);
    }

    return keyPoints.slice(0, 5);
}


// ========================================
// WORKBOOK GENERATION METHODS FOR CIRCULATORY SYSTEM
// ========================================

generateCirculatoryWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Circulatory System Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generateCirculatoryDiagramDataAsync();
    }

    workbook.sections = [
        this.createProblemSection(),
        this.createContentOverviewSection(),
        this.createDetailedContentSection(),
        this.createDiagramsPlaceholderSection(), // Placeholder until diagrams ready
        this.createComparisonsWorkbookSection(),
        this.createExamplesApplicationsSection(),
        this.createContextualScenariosWorkbookSection(),
        this.createRelatedExperimentsWorkbookSection(),
        this.createMisconceptionsSection(),
        this.createMetacognitiveWorkbookSection(),
        this.createAssessmentSection()
    ].filter(section => section !== null);

    this.currentWorkbook = workbook;
}

generateExperimentWorkbook(experimentContent) {
    const workbook = this.createWorkbookStructure();
    workbook.title = 'Circulatory System Experiment Workbook';

    workbook.sections = experimentContent.sections.map(section => ({
        title: section.title,
        type: section.type,
        data: section.data
    }));

    if (experimentContent.relatedTopics) {
        workbook.sections.push({
            title: 'Related Topics',
            type: 'related_topics',
            data: experimentContent.relatedTopics.map(topic => [
                this.circulatoryTopics[topic]?.name || topic,
                this.circulatoryTopics[topic]?.description || ''
            ])
        });
    }

    this.currentWorkbook = workbook;
}

// Async helper that runs in background
async generateCirculatoryDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantCirculatoryDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Circulatory system diagrams"
    };

    // Render diagrams
    if (diagramKeys.length > 0) {
        await this.renderDiagramsForTopic(diagramKeys);
        this.diagramData.status = 'complete';
        
        // Update the diagrams section in workbook
        this.updateDiagramsSection();
    } else {
        this.diagramData.status = 'no_diagrams';
    }

    return this.diagramData;
}

async renderDiagramsForTopic(diagramKeys) {
    this.diagramData.renderedImages = [];

    for (const diagramKey of diagramKeys) {
        try {
            // Check if already rendered (cache)
            if (this.renderedDiagrams.has(diagramKey)) {
                this.diagramData.renderedImages.push(this.renderedDiagrams.get(diagramKey));
                continue;
            }

            // Render the diagram
            const canvas = await this.diagramRenderer.renderDiagram(
                diagramKey,
                0,
                0,
                this.diagramWidth,
                this.diagramHeight,
                {
                    showLabels: true,
                    backgroundColor: '#FFFFFF'
                }
            );

            // Convert to PNG buffer
            const pngBuffer = await canvas.encode('png');

            // Store rendered diagram data
            const diagramData = {
                key: diagramKey,
                buffer: pngBuffer,
                width: this.diagramWidth,
                height: this.diagramHeight,
                type: 'png'
            };

            // Cache the rendered diagram
            this.renderedDiagrams.set(diagramKey, diagramData);
            this.diagramData.renderedImages.push(diagramData);

        } catch (error) {
            console.error(`Failed to render diagram ${diagramKey}:`, error);
            // Add error placeholder
            this.diagramData.renderedImages.push({
                key: diagramKey,
                error: error.message,
                type: 'error'
            });
        }
    }
}

// Create placeholder section that will be updated when diagrams are ready
createDiagramsPlaceholderSection() {
    if (!this.includeDiagramsInWorkbook) {
        return null;
    }

    return {
        title: 'Circulatory System Diagrams',
        type: 'diagrams',
        status: 'loading',
        diagrams: [],
        note: 'Diagrams are being rendered...'
    };
}

// Update the diagrams section once rendering is complete
updateDiagramsSection() {
    if (!this.currentWorkbook || !this.diagramData) return;

    // Find the diagrams section
    const diagramSectionIndex = this.currentWorkbook.sections.findIndex(
        section => section.type === 'diagrams'
    );

    if (diagramSectionIndex === -1) return;

    // Update the section with rendered diagrams
    const diagramSection = {
        title: 'Circulatory System Diagrams',
        type: 'diagrams',
        status: 'complete',
        diagrams: []
    };

    for (const diagram of this.diagramData.renderedImages) {
        if (diagram.type === 'error') {
            diagramSection.diagrams.push({
                key: diagram.key,
                error: diagram.error,
                type: 'error'
            });
        } else {
            diagramSection.diagrams.push({
                key: diagram.key,
                buffer: diagram.buffer,
                width: diagram.width,
                height: diagram.height,
                type: 'image'
            });
        }
    }

    this.currentWorkbook.sections[diagramSectionIndex] = diagramSection;
}

// Method to wait for diagrams to finish rendering
async waitForDiagrams() {
    if (this.diagramsPromise) {
        await this.diagramsPromise;
    }
    return this.diagramData;
}

// Method to check if diagrams are ready
areDiagramsReady() {
    return this.diagramData && this.diagramData.status === 'complete';
}

getRelevantCirculatoryDiagrams(topicType) {
    const diagramMap = {
        heart_anatomy: [
            "heartAnatomy",
            "heartChambers",
            "heartValves",
            "coronaryCirculation",
            "cardiacLayers"
        ],
        cardiac_cycle: [
            "cardiacCycle",
            "pressureVolumeCurve",
            "wiggersDiagram",
            "heartSounds",
            "heartAnatomy"
        ],
        electrical_conduction: [
            "conductionSystem",
            "ecgWaveform",
            "actionPotential",
            "heartAnatomy",
            "ecgLeads"
        ],
        blood_vessels: [
            "vesselStructure",
            "arteriesVeinsComparison",
            "capillaryTypes",
            "circulatorySystem"
        ],
        blood_pressure: [
            "bloodPressureMeasurement",
            "baroreceptorReflex",
            "raasSystem",
            "pressureRegulation"
        ],
        blood_flow: [
            "circulatorySystem",
            "hemodynamics",
            "bloodFlowDistribution",
            "pressureGradient",
            "vesselStructure"
        ],
        blood_composition: [
            "bloodComponents",
            "bloodCells",
            "hemostasis",
            "bloodTyping",
            "coagulationCascade"
        ]
    };

    return diagramMap[topicType] || [];
}

// Helper method to export a single diagram (async but optional)
async exportDiagram(diagramKey, filename, options = {}) {
    const width = options.width || this.diagramWidth;
    const height = options.height || this.diagramHeight;

    try {
        await this.diagramRenderer.exportToFile(
            diagramKey,
            filename,
            width,
            height,
            {
                showLabels: options.showLabels !== false,
                backgroundColor: options.backgroundColor || '#FFFFFF'
            }
        );
        return { success: true, filename };
    } catch (error) {
        console.error(`Failed to export diagram ${diagramKey}:`, error);
        return { success: false, error: error.message };
    }
}

// Helper method to export all diagrams for current topic (async but optional)
async exportAllDiagramsForTopic(outputDir = './diagrams') {
    // Wait for diagrams to be ready first
    await this.waitForDiagrams();

    if (!this.diagramData || !this.diagramData.diagrams) {
        throw new Error('No diagrams available for current topic');
    }

    const fs = await import('fs');
    const path = await import('path');

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const results = [];

    for (const diagramKey of this.diagramData.diagrams) {
        const filename = path.join(outputDir, `${diagramKey}.png`);
        const result = await this.exportDiagram(diagramKey, filename);
        results.push({ diagramKey, ...result });
    }

    return results;
}

// Method to get diagram as buffer for embedding (async but optional)
async getDiagramBuffer(diagramKey, options = {}) {
    const width = options.width || this.diagramWidth;
    const height = options.height || this.diagramHeight;

    try {
        return await this.diagramRenderer.exportToPng(
            diagramKey,
            width,
            height,
            {
                showLabels: options.showLabels !== false,
                backgroundColor: options.backgroundColor || '#FFFFFF'
            }
        );
    } catch (error) {
        console.error(`Failed to get diagram buffer for ${diagramKey}:`, error);
        return null;
    }
}

// Clear diagram cache
clearDiagramCache() {
    this.renderedDiagrams.clear();
    this.diagramsPromise = null;
    console.log('Diagram cache cleared');
}

// Get cache statistics
getDiagramCacheStats() {
    return {
        cachedDiagrams: this.renderedDiagrams.size,
        cacheKeys: Array.from(this.renderedDiagrams.keys()),
        diagramsReady: this.areDiagramsReady(),
        status: this.diagramData?.status || 'not_started'
    };
}

// Update getWorkbookStatus to include diagram info
getWorkbookStatus() {
    return {
        hasProblem: !!this.currentProblem,
        hasContent: !!this.currentContent,
        hasWorkbook: !!this.currentWorkbook,
        hasExperiment: !!this.currentExperiment,
        hasDiagrams: !!this.diagramData && this.diagramData.renderedImages?.length > 0,
        diagramsReady: this.areDiagramsReady(),
        diagramStatus: this.diagramData?.status || 'not_started',
        diagramCount: this.diagramData?.renderedImages?.length || 0,
        cachedDiagrams: this.renderedDiagrams.size,
        learnerLevel: this.learnerProfile.currentLevel,
        masteredTopics: this.learnerProfile.masteredTopics.length,
        strugglingTopics: this.learnerProfile.strugglingTopics.length
    };
}

createWorkbookStructure() {
    return {
        title: 'Circulatory System Workbook',
        timestamp: new Date().toISOString(),
        theme: this.theme,
        dimensions: { width: this.width, height: this.height },
        learnerLevel: this.learnerProfile.currentLevel,
        sections: []
    };
}

// ========================================
// SECTION CREATION METHODS
// ========================================

createProblemSection() {
    if (!this.currentProblem) return null;

    return {
        title: 'Topic Overview',
        type: 'problem',
        data: {
            topic: this.currentProblem.topic || this.currentContent.topic,
            category: this.currentContent.category,
            description: this.currentProblem.description || this.currentContent.summary,
            difficulty: this.circulatoryTopics[this.currentProblem.type]?.difficulty || 'intermediate',
            prerequisites: this.circulatoryTopics[this.currentProblem.type]?.prerequisites || []
        }
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    return {
        title: 'Content Summary',
        type: 'overview',
        data: {
            summary: this.currentContent.summary,
            category: this.currentContent.category,
            mainConcepts: this.extractMainConcepts(this.currentContent)
        }
    };
}

createDetailedContentSection() {
    if (!this.currentContent) return null;

    const sections = [];

    // Add all major content sections
    Object.entries(this.currentContent).forEach(([key, value]) => {
        if (key === 'topic' || key === 'category' || key === 'summary' || key === 'applications') {
            return; // Skip these, handled elsewhere
        }

        if (typeof value === 'object' && value !== null) {
            sections.push({
                title: this.formatSectionTitle(key),
                type: 'detailed_content',
                data: this.formatContentData(value)
            });
        }
    });

    return {
        title: 'Detailed Content',
        type: 'content_group',
        subsections: sections
    };
}

createComparisonsWorkbookSection() {
    if (!this.currentContent) return null;

    const comparisons = this.extractComparisons(this.currentContent);
    if (!comparisons || comparisons.length === 0) return null;

    return {
        title: 'Comparisons and Contrasts',
        type: 'comparisons',
        data: comparisons
    };
}

createExamplesApplicationsSection() {
    if (!this.currentContent) return null;

    return {
        title: 'Examples and Applications',
        type: 'applications',
        data: {
            examples: this.currentContent.examples || [],
            applications: this.currentContent.applications || [],
            clinicalApplications: this.extractClinicalApplications(this.currentContent)
        }
    };
}

createContextualScenariosWorkbookSection() {
    if (!this.contextualLearning) return null;

    const scenarios = this.contextualScenarios[this.currentProblem.type] || [];
    if (scenarios.length === 0) return null;

    return {
        title: 'Real-World Scenarios',
        type: 'scenarios',
        data: scenarios
    };
}

createRelatedExperimentsWorkbookSection() {
    if (!this.includeExperiments) return null;

    const topic = this.circulatoryTopics[this.currentProblem.type];
    if (!topic || !topic.relatedExperiments) return null;

    return {
        title: 'Related Experiments',
        type: 'experiments',
        data: topic.relatedExperiments.map(exp => ({
            id: exp.id,
            name: exp.name,
            category: exp.category,
            summary: this.circulatoryExperiments[exp.id]?.labExperiment?.purpose || ''
        }))
    };
}

createMisconceptionsSection() {
    if (!this.includeCommonMisconceptions) return null;

    const misconceptions = this.commonMisconceptions[this.currentProblem.type];
    if (!misconceptions) return null;

    return {
        title: 'Common Misconceptions',
        type: 'misconceptions',
        data: Object.entries(misconceptions).map(([category, items]) => ({
            category: category,
            misconceptions: Array.isArray(items) ? items : Object.values(items).flat()
        }))
    };
}

createMetacognitiveWorkbookSection() {
    if (!this.metacognitiveSupport) return null;

    return {
        title: 'Reflection and Metacognition',
        type: 'metacognitive',
        data: {
            beforeLearning: this.metacognitivePrompts.beforeLearning.map(
                prompt => prompt.replace('{topic}', this.currentContent.topic)
            ),
            duringLearning: this.metacognitivePrompts.duringLearning,
            afterLearning: this.metacognitivePrompts.afterLearning.map(
                prompt => prompt.replace('{topic}', this.currentContent.topic)
            ),
            problemSolving: this.metacognitivePrompts.problemSolving
        }
    };
}

createAssessmentSection() {
    if (!this.assessmentFeedback) return null;

    return {
        title: 'Assessment and Practice',
        type: 'assessment',
        data: {
            understandingLevels: this.assessmentRubrics.understanding,
            knowledgeLevels: this.assessmentRubrics.knowledgeLevel,
            selfAssessment: [
                'Can you explain the main concepts in your own words?',
                'Can you apply this knowledge to solve problems?',
                'Can you teach this to someone else?',
                'What questions do you still have?'
            ]
        }
    };
}

// ========================================
// HELPER METHODS FOR SECTION CREATION
// ========================================

extractMainConcepts(content) {
    const concepts = [];

    // Extract from lessons if available
    const lesson = this.lessons[this.currentProblem.type];
    if (lesson && lesson.concepts) {
        concepts.push(...lesson.concepts);
    }

    return concepts;
}

formatSectionTitle(key) {
    return key
        .split(/(?=[A-Z])|_/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

formatContentData(data) {
    if (Array.isArray(data)) {
        return data;
    }

    if (typeof data === 'object' && data !== null) {
        return Object.entries(data).map(([key, value]) => ({
            label: this.formatSectionTitle(key),
            value: this.formatValue(value)
        }));
    }

    return data;
}

formatValue(value) {
    if (Array.isArray(value)) {
        return value;
    }
    if (typeof value === 'object' && value !== null) {
        return this.formatContentData(value);
    }
    return String(value);
}

extractComparisons(content) {
    const comparisons = [];

    // Look for comparison objects in content
    Object.entries(content).forEach(([key, value]) => {
        if (key.toLowerCase().includes('compar') || 
            key.toLowerCase().includes('vs') ||
            key.toLowerCase().includes('difference')) {
            if (typeof value === 'object' && value !== null) {
                comparisons.push({
                    title: this.formatSectionTitle(key),
                    data: value
                });
            }
        }
    });

    return comparisons;
}

extractClinicalApplications(content) {
    const applications = [];

    // Recursively search for clinical/medical applications
    const searchObject = (obj, path = []) => {
        Object.entries(obj).forEach(([key, value]) => {
            if (key.toLowerCase().includes('clinical') ||
                key.toLowerCase().includes('medical') ||
                key.toLowerCase().includes('pathol') ||
                key.toLowerCase().includes('disease') ||
                key.toLowerCase().includes('disorder')) {
                
                if (typeof value === 'string') {
                    applications.push({
                        category: path.join(' > '),
                        application: value
                    });
                } else if (Array.isArray(value)) {
                    value.forEach(item => {
                        applications.push({
                            category: path.join(' > '),
                            application: item
                        });
                    });
                } else if (typeof value === 'object' && value !== null) {
                    searchObject(value, [...path, this.formatSectionTitle(key)]);
                }
            } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                searchObject(value, [...path, this.formatSectionTitle(key)]);
            }
        });
    };

    searchObject(content);
    return applications;
}

// ========================================
// WORKBOOK EXPORT METHODS
// ========================================

async exportWorkbookToJSON(filename = 'circulatory_workbook.json') {
    if (!this.currentWorkbook) {
        throw new Error('No workbook to export');
    }

    // Wait for diagrams if they're being generated
    if (this.diagramsPromise) {
        await this.waitForDiagrams();
    }

    const fs = await import('fs');
    
    // Create a serializable version (remove buffer data)
    const exportData = {
        ...this.currentWorkbook,
        sections: this.currentWorkbook.sections.map(section => {
            if (section.type === 'diagrams') {
                return {
                    ...section,
                    diagrams: section.diagrams.map(d => ({
                        key: d.key,
                        type: d.type,
                        width: d.width,
                        height: d.height,
                        hasBuffer: !!d.buffer
                    }))
                };
            }
            return section;
        })
    };

    fs.writeFileSync(filename, JSON.stringify(exportData, null, 2));
    return { success: true, filename };
}

async exportWorkbookToPDF(filename = 'circulatory_workbook.pdf') {
    // This would require a PDF generation library
    // Placeholder for future implementation
    console.log('PDF export not yet implemented');
    return { success: false, message: 'PDF export not yet implemented' };
}

getWorkbook() {
    return this.currentWorkbook;
}

getCurrentContent() {
    return this.currentContent;
}

getCurrentExperiment() {
    return this.currentExperiment;
}

generateCirculatoryExperimentWorkbook(experimentContent) {
    this.currentWorkbook = {
        title: experimentContent.experimentName,
        type: 'experiment',
        sections: experimentContent.sections,
        generated: new Date().toISOString()
    };
}

createCirculatoryProblemSection() {
    return {
        title: 'Problem Statement',
        type: 'problem',
        data: {
            topic: this.currentProblem.originalTopic,
            type: this.currentProblem.type,
            difficulty: this.currentProblem.difficulty,
            prerequisites: this.currentProblem.prerequisites,
            objectives: this.generateCirculatoryLearningObjectives()
        }
    };
}

createCirculatoryContentOverviewSection() {
    return {
        title: 'Content Overview',
        type: 'content_overview',
        data: {
            topic: this.currentContent.topic,
            category: this.currentContent.category,
            summary: this.currentContent.summary,
            keyPoints: this.extractCirculatoryKeyPoints(this.currentContent)
        }
    };
}

createCirculatoryDetailedContentSection() {
    const sections = [];

    if (this.currentContent.chambers) {
        sections.push({
            subsection: 'Heart Chambers',
            data: this.currentContent.chambers
        });
    }

    if (this.currentContent.phases) {
        sections.push({
            subsection: 'Cardiac Cycle Phases',
            data: this.currentContent.phases
        });
    }

    if (this.currentContent.vesselTypes) {
        sections.push({
            subsection: 'Blood Vessel Types',
            data: this.currentContent.vesselTypes
        });
    }

    return {
        title: 'Detailed Content',
        type: 'detailed_content',
        sections: sections
    };
}

createCirculatoryComparisonsSection() {
    if (!this.currentContent.comparison && !this.currentContent.arteriesVsVeins) {
        return null;
    }

    return {
        title: 'Comparisons',
        type: 'comparisons',
        data: this.currentContent.comparison || this.currentContent.arteriesVsVeins || {}
    };
}

createCirculatoryExamplesSection() {
    if (!this.currentContent.examples && !this.currentContent.clinicalApplications) {
        return null;
    }

    return {
        title: 'Examples and Applications',
        type: 'examples',
        data: {
            examples: this.currentContent.examples,
            applications: this.currentContent.applications || this.currentContent.clinicalApplications
        }
    };
}

createCirculatoryMisconceptionsSection() {
    if (!this.includeCommonMisconceptions) return null;

    const misconceptions = this.commonMisconceptions[this.currentProblem.type];
    if (!misconceptions) return null;

    return {
        title: 'Common Misconceptions',
        type: 'misconceptions',
        data: misconceptions
    };
}

createCirculatoryAssessmentSection() {
    if (!this.assessmentFeedback) return null;

    return {
        title: 'Self-Assessment',
        type: 'assessment',
        data: {
            learningObjectives: this.generateCirculatoryLearningObjectives(),
            practiceQuestions: this.generateCirculatoryPracticeQuestions(),
            reflection: this.generateReflectionPrompts()
        }
    };
}

// ========================================
// CIRCULATORY SYSTEM SPECIFIC HELPER METHODS
// ========================================

getCirculatoryTopicRelevance(topicType) {
    const relevance = {
        heart_anatomy: "Understanding heart structure is essential for comprehending how the cardiovascular system pumps blood throughout the body",
        cardiac_cycle: "The cardiac cycle coordinates blood flow through the heart and ensures efficient oxygen delivery to tissues",
        electrical_conduction: "Electrical conduction generates the rhythmic heartbeat and can be assessed through ECG",
        blood_vessels: "Blood vessels form the distribution network that delivers oxygen and nutrients to every cell",
        blood_pressure: "Blood pressure regulation is critical for tissue perfusion and preventing cardiovascular disease",
        blood_flow: "Hemodynamics principles govern how blood circulates and adapts to changing physiological demands",
        blood_composition: "Blood components transport oxygen, defend against infection, and prevent hemorrhage"
    };

    return relevance[topicType] || "Important cardiovascular concept";
}

getRelatedCirculatoryExperiments(topicType) {
    const experiments = [];
    
    Object.entries(this.circulatoryExperiments).forEach(([expId, experiment]) => {
        if (experiment.relatedTopics.includes(topicType)) {
            experiments.push({
                id: expId,
                name: experiment.name,
                category: experiment.category
            });
        }
    });

    return experiments;
}

suggestRelatedCirculatoryTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        heart_anatomy: ['cardiac_cycle', 'electrical_conduction', 'blood_flow'],
        cardiac_cycle: ['heart_anatomy', 'electrical_conduction', 'blood_pressure'],
        electrical_conduction: ['cardiac_cycle', 'heart_anatomy'],
        blood_vessels: ['blood_pressure', 'blood_flow', 'blood_composition'],
        blood_pressure: ['blood_flow', 'blood_vessels', 'cardiac_cycle'],
        blood_flow: ['blood_pressure', 'blood_vessels', 'cardiac_cycle'],
        blood_composition: ['blood_vessels', 'blood_flow']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.circulatoryTopics[type]?.name,
        description: this.circulatoryTopics[type]?.description
    }));
}

generateCirculatoryAnalogy(concept) {
    const analogies = {
        // Heart
        heart: "Like a dual pump with two sides working in synchrony",
        atrium: "Like a receiving chamber or holding area",
        ventricle: "Like a powerful pumping chamber",
        valve: "Like one-way doors preventing backflow",
        
        // Vessels
        artery: "Like high-pressure delivery pipes carrying blood away from the pump",
        vein: "Like low-pressure return pipes bringing blood back to the pump",
        capillary: "Like tiny exchange points where goods are delivered and waste collected",
        arteriole: "Like adjustable valves controlling flow to different areas",
        
        // Blood pressure
        systolic: "Like peak pressure when pump contracts",
        diastolic: "Like resting pressure when pump relaxes",
        hypertension: "Like pump working against too much resistance",
        
        // Blood flow
        cardiac_output: "Like the pump's delivery rate per minute",
        resistance: "Like friction in the pipes slowing flow",
        
        // Blood
        plasma: "Like the liquid vehicle transporting cells and molecules",
        red_blood_cell: "Like oxygen delivery trucks",
        white_blood_cell: "Like security guards patrolling for threats",
        platelet: "Like emergency repair crews sealing leaks",
        
        // ECG
        ecg: "Like an electrical recording of the heart's rhythm",
        pwave: "Like atrial activation signal",
        qrs: "Like ventricular activation signal",
        
        // Cardiac cycle
        systole: "Like the squeezing phase of the pump",
        diastole: "Like the filling phase of the pump"
    };

    return analogies[concept] || "Performs a specialized cardiovascular function";
}

generateCirculatoryGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract from key definitions
    if (this.currentContent.keyDefinitions) {
        Object.entries(this.currentContent.keyDefinitions).forEach(([term, definition]) => {
            glossary[term] = definition;
        });
    }

    // Add circulatory-specific terms
    glossary['Cardiac Output'] = 'Volume of blood pumped by heart per minute (CO = HR × SV)';
    glossary['Stroke Volume'] = 'Volume of blood ejected per heartbeat (~70 mL)';
    glossary['Blood Pressure'] = 'Force of blood against vessel walls (systolic/diastolic)';
    glossary['Hemodynamics'] = 'Study of blood flow through the cardiovascular system';

    return glossary;
}

generateCirculatoryLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        heart_anatomy: [
            "Identify the four chambers of the heart and their functions",
            "Describe the structure and function of the four heart valves",
            "Trace the pathway of blood through the heart",
            "Explain the layers of the heart wall and pericardium",
            "Describe coronary circulation and its clinical significance"
        ],
        cardiac_cycle: [
            "Describe the phases of the cardiac cycle",
            "Explain pressure and volume changes during the cardiac cycle",
            "Identify heart sounds and their causes",
            "Calculate cardiac output and ejection fraction",
            "Explain the determinants of stroke volume (preload, afterload, contractility)"
        ],
        electrical_conduction: [
            "Trace the pathway of electrical conduction through the heart",
            "Describe the action potentials of pacemaker and contractile cardiac cells",
            "Identify the components of a normal ECG waveform",
            "Interpret basic ECG abnormalities",
            "Explain how the conduction system coordinates the heartbeat"
        ],
        blood_vessels: [
            "Compare the structure and function of arteries, veins, and capillaries",
            "Explain the relationship between vessel structure and function",
            "Describe the mechanisms of capillary exchange",
            "Identify factors affecting blood flow and resistance",
            "Explain autoregulation in different vascular beds"
        ],
        blood_pressure: [
            "Measure blood pressure using proper technique",
            "Explain the determinants of blood pressure (CO and TPR)",
            "Describe short-term and long-term blood pressure regulation",
            "Differentiate between primary and secondary hypertension",
            "Identify complications of chronic hypertension"
        ],
        blood_flow: [
            "Apply Ohm's law and Poiseuille's law to blood flow",
            "Explain the relationship between pressure, flow, and resistance",
            "Describe the organization of systemic and pulmonary circulations",
            "Calculate cardiac output and understand flow distribution",
            "Explain mechanisms of venous return"
        ],
        blood_composition: [
            "Describe the components of blood and their functions",
            "Explain the structure and function of hemoglobin",
            "Identify the types and functions of white blood cells",
            "Describe the steps of hemostasis",
            "Explain ABO and Rh blood typing systems"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand key cardiovascular concepts",
        "Apply knowledge to clinical situations",
        "Make connections between structure and function"
    ];
}

generateCirculatoryPracticeQuestions() {
    if (!this.currentProblem) return [];

    const questionsDatabase = {
        heart_anatomy: [
            "Trace the path of blood from the vena cava through the heart to the aorta",
            "Explain why the left ventricle has a thicker wall than the right ventricle",
            "What would happen if the mitral valve became stenotic (narrowed)?",
            "Why does coronary blood flow occur mainly during diastole?"
        ],
        cardiac_cycle: [
            "During which phase are all heart valves closed?",
            "Calculate cardiac output if HR = 75 bpm and SV = 70 mL",
            "Explain what causes the first and second heart sounds",
            "What would happen to stroke volume if afterload increased significantly?"
        ],
        electrical_conduction: [
            "What is the intrinsic firing rate of the SA node?",
            "Explain why the AV node delays the electrical signal",
            "Identify the parts of the ECG that correspond to atrial and ventricular depolarization",
            "What ECG changes would you expect in hyperkalemia?"
        ],
        blood_vessels: [
            "Why are capillaries ideal for exchange despite being the smallest vessels?",
            "Compare the tunica media in elastic arteries versus veins",
            "Explain how arterioles regulate blood pressure",
            "What mechanisms return blood from the legs to the heart against gravity?"
        ],
        blood_pressure: [
            "Calculate mean arterial pressure for BP 120/80 mmHg",
            "Explain how the baroreceptor reflex responds to standing up",
            "Why is the kidney considered the dominant long-term regulator of blood pressure?",
            "Describe the RAAS and its effects on blood pressure"
        ],
        blood_flow: [
            "If vessel radius doubles, how does flow change (Poiseuille's law)?",
            "Explain why capillaries have the slowest blood velocity",
            "Calculate resistance if pressure gradient is 95 mmHg and flow is 5 L/min",
            "Why does blood flow in the pulmonary circulation have lower pressure than systemic?"
        ],
        blood_composition: [
            "Why would anemia cause fatigue and shortness of breath?",
            "Explain why type O negative is the universal donor",
            "Describe the steps of primary and secondary hemostasis",
            "What would happen if a person with type A blood received type B blood?"
        ]
    };

    return questionsDatabase[this.currentProblem.type] || [
        "Apply cardiovascular concepts to solve problems",
        "Explain physiological mechanisms",
        "Predict effects of pathological changes"
    ];
}

generateReflectionPrompts() {
    return [
        "What was most challenging about this topic?",
        "How does this relate to what you already knew?",
        "Can you explain this concept to someone else?",
        "What clinical applications can you identify?",
        "What questions do you still have?"
    ];
}

validateCirculatoryContent(content) {
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

    if (!content.summary) {
        validationResults.suggestions.push("Consider adding a summary");
    }

    const hasSubstantiveContent = 
        content.chambers ||
        content.phases ||
        content.conductionSystem ||
        content.vesselTypes ||
        content.determinants ||
        content.hemodynamicEquations ||
        content.plasma;

    if (!hasSubstantiveContent) {
        validationResults.warnings.push("Limited substantive content");
        validationResults.suggestions.push("Consider adding more detailed information");
    }

    if (!content.applications && !content.clinicalApplications) {
        validationResults.suggestions.push("Consider adding clinical applications");
    }

    return validationResults;
}

calculateCirculatoryContentCompleteness() {
    if (!this.currentContent) return 0;

    let score = 0;
    const maxScore = 10;

    if (this.currentContent.topic) score += 1;
    if (this.currentContent.summary) score += 1;
    if (this.currentContent.applications || this.currentContent.clinicalApplications) score += 1;
    
    const hasMainContent = 
        this.currentContent.chambers ||
        this.currentContent.phases ||
        this.currentContent.conductionSystem ||
        this.currentContent.vesselTypes ||
        this.currentContent.determinants ||
        this.currentContent.hemodynamicEquations ||
        this.currentContent.plasma;
    if (hasMainContent) score += 4;

    if (this.currentContent.comparison || this.currentContent.arteriesVsVeins) score += 1;
    if (this.currentContent.contextualScenarios) score += 1;
    if (this.currentContent.relatedExperiments) score += 1;

    return Math.round((score / maxScore) * 100);
}

generateCirculatoryStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        heart_anatomy: [
            "Use 3D models or diagrams to visualize chamber and valve positions",
            "Trace blood flow pathway repeatedly until automatic",
            "Practice identifying structures on labeled diagrams",
            "Relate structures to sounds heard with stethoscope"
        ],
        cardiac_cycle: [
            "Create a timeline of events with pressure/volume changes",
            "Practice drawing pressure-volume loops",
            "Listen to heart sounds and relate to valve closures",
            "Work through calculations of CO, SV, EF repeatedly"
        ],
        electrical_conduction: [
            "Draw the conduction pathway from memory",
            "Practice interpreting ECG strips",
            "Relate ECG waves to mechanical events",
            "Learn systematic ECG interpretation approach"
        ],
        blood_vessels: [
            "Create comparison tables for vessel types",
            "Draw cross-sections showing wall layer differences",
            "Practice calculating resistance and flow",
            "Relate structure to function for each vessel type"
        ],
        blood_pressure: [
            "Practice BP measurement technique hands-on",
            "Create flowcharts for regulatory mechanisms",
            "Calculate MAP, pulse pressure from examples",
            "Link antihypertensive drugs to regulation pathways"
        ],
        blood_flow: [
            "Work through hemodynamic equation problems",
            "Draw systemic and pulmonary circuits",
            "Practice applying Poiseuille's law",
            "Calculate cardiac output and resistance"
        ],
        blood_composition: [
            "Create flashcards for blood cell types and functions",
            "Draw coagulation cascade step-by-step",
            "Make blood typing compatibility chart",
            "Relate CBC values to clinical conditions"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Review material with active recall",
        "Create visual aids and diagrams",
        "Practice explaining to others",
        "Relate to clinical applications"
    ];
}

// Method to export the class
}

export default EnhancedCirculatorySystemWorkbook;

