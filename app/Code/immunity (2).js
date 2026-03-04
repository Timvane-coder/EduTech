//Enhanced Immune System Workbook - Comprehensive Immune Response System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry} from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedImmuneSystemWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "immunology";
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

        this.immuneSymbols = this.initializeImmuneSymbols();
        this.setThemeColors();
        this.initializeImmuneTopics();
        this.initializeImmuneLessons();
        this.initializeImmuneExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            immunology: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#d32f2f',
                headerText: '#ffffff',
                sectionBg: '#ffcdd2',
                sectionText: '#b71c1c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e8f5e9',
                resultText: '#2e7d32',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#e1f5fe',
                stepText: '#01579b',
                borderColor: '#ef5350',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e0f2f1',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                innateImmuneBg: '#ffebee',
                adaptiveImmuneBg: '#e3f2fd',
                cellularImmuneBg: '#f1f8e9',
                humoralImmuneBg: '#fce4ec',
                pathogenBg: '#fff3e0'
            },
            medical: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#1565c0',
                headerText: '#ffffff',
                sectionBg: '#bbdefb',
                sectionText: '#0d47a1',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e8f5e9',
                resultText: '#2e7d32',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#42a5f5',
                contentBg: '#ede7f6',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e8eaf6',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                innateImmuneBg: '#ffebee',
                adaptiveImmuneBg: '#e3f2fd',
                cellularImmuneBg: '#f1f8e9',
                humoralImmuneBg: '#fce4ec',
                pathogenBg: '#fff3e0'
            }
        };

        this.colors = themes[this.theme] || themes.immunology;
    }

    initializeImmuneSymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'δ',
            'kappa': 'κ',
            'lambda': 'λ',
            
            // Arrows
            'arrow': '→',
            'activation': '→',
            'inhibition': '⊣',
            'bidirectional': '↔',
            
            // Math symbols
            'plus': '+',
            'minus': '−',
            'increase': '↑',
            'decrease': '↓',
            
            // Cell markers
            'CD4': 'CD4⁺',
            'CD8': 'CD8⁺',
            'CD3': 'CD3⁺',
            
            // Immunoglobulins
            'IgG': 'IgG',
            'IgM': 'IgM',
            'IgA': 'IgA',
            'IgE': 'IgE',
            'IgD': 'IgD',
            
            // Interleukins
            'IL-1': 'IL-1',
            'IL-2': 'IL-2',
            'IL-4': 'IL-4',
            'IL-6': 'IL-6',
            'IL-10': 'IL-10',
            'IL-12': 'IL-12',
            
            // Other cytokines
            'TNF': 'TNF-α',
            'IFN': 'IFN-γ',
            'TGF': 'TGF-β',
            
            // Major Histocompatibility Complex
            'MHC-I': 'MHC Class I',
            'MHC-II': 'MHC Class II',
            'HLA': 'HLA',
            
            // Complement
            'C1': 'C1',
            'C3': 'C3',
            'C3a': 'C3a',
            'C3b': 'C3b',
            'C5a': 'C5a',
            'MAC': 'C5b-9 (MAC)'
        };
    }

    initializeImmuneTopics() {
        this.immuneTopics = {
            innate_immunity: {
                patterns: [
                    /innate.*immunity|natural.*immunity/i,
                    /physical.*barrier|skin|mucous/i,
                    /phagocyte|macrophage|neutrophil/i,
                    /complement.*system/i,
                    /inflammation|inflammatory.*response/i,
                    /pattern.*recognition|PAMP|DAMP/i
                ],
                handler: this.handleInnateImmunity.bind(this),
                name: 'Innate Immunity',
                category: 'defense_mechanisms',
                description: 'First line of defense - rapid, non-specific immune responses present from birth',
                difficulty: 'intermediate',
                prerequisites: ['basic_biology', 'cell_biology']
            },
            
            adaptive_immunity: {
                patterns: [
                    /adaptive.*immunity|acquired.*immunity/i,
                    /specific.*immunity|antigen.*specific/i,
                    /memory.*cell|immunological.*memory/i,
                    /clonal.*selection|clonal.*expansion/i
                ],
                handler: this.handleAdaptiveImmunity.bind(this),
                name: 'Adaptive Immunity',
                category: 'defense_mechanisms',
                description: 'Specific, learned immune responses with memory - develops throughout life',
                difficulty: 'advanced',
                prerequisites: ['innate_immunity', 'cell_signaling']
            },
            
            cellular_immunity: {
                patterns: [
                    /cell.*mediated|cellular.*immunity/i,
                    /T.*cell|T.*lymphocyte/i,
                    /CD4|CD8|helper.*T|cytotoxic.*T/i,
                    /MHC|major.*histocompatibility/i,
                    /antigen.*presentation/i
                ],
                handler: this.handleCellularImmunity.bind(this),
                name: 'Cellular Immunity (T Cells)',
                category: 'adaptive_immunity',
                description: 'T cell-mediated immune responses targeting infected and abnormal cells',
                difficulty: 'advanced',
                prerequisites: ['adaptive_immunity', 'cell_biology']
            },
            
            humoral_immunity: {
                patterns: [
                    /humoral.*immunity|antibody.*mediated/i,
                    /B.*cell|B.*lymphocyte/i,
                    /antibody|immunoglobulin/i,
                    /IgG|IgM|IgA|IgE|IgD/i,
                    /plasma.*cell|memory.*B.*cell/i
                ],
                handler: this.handleHumoralImmunity.bind(this),
                name: 'Humoral Immunity (B Cells & Antibodies)',
                category: 'adaptive_immunity',
                description: 'B cell and antibody-mediated immune responses in body fluids',
                difficulty: 'advanced',
                prerequisites: ['adaptive_immunity', 'proteins']
            },
            
            immune_cells: {
                patterns: [
                    /white.*blood.*cell|leukocyte/i,
                    /lymphocyte|phagocyte/i,
                    /dendritic.*cell|antigen.*presenting/i,
                    /natural.*killer|NK.*cell/i,
                    /mast.*cell|basophil|eosinophil/i
                ],
                handler: this.handleImmuneCells.bind(this),
                name: 'Immune Cells and Their Functions',
                category: 'cellular_components',
                description: 'Different types of immune cells and their specialized roles',
                difficulty: 'intermediate',
                prerequisites: ['cell_biology', 'hematology']
            },
            
            antibodies: {
                patterns: [
                    /antibody|immunoglobulin/i,
                    /antigen.*binding|epitope/i,
                    /antibody.*structure|Fab|Fc/i,
                    /antibody.*class|isotype/i
                ],
                handler: this.handleAntibodies.bind(this),
                name: 'Antibody Structure and Function',
                category: 'molecular_immunology',
                description: 'Structure, types, and mechanisms of antibody molecules',
                difficulty: 'advanced',
                prerequisites: ['proteins', 'humoral_immunity']
            },
            
            complement_system: {
                patterns: [
                    /complement.*system|complement.*cascade/i,
                    /MAC|membrane.*attack.*complex/i,
                    /C3.*convertase|classical.*pathway|alternative.*pathway/i,
                    /opsonization/i
                ],
                handler: this.handleComplementSystem.bind(this),
                name: 'Complement System',
                category: 'innate_immunity',
                description: 'Cascade of proteins that enhance immune response',
                difficulty: 'advanced',
                prerequisites: ['innate_immunity', 'biochemistry']
            },
            
            immune_disorders: {
                patterns: [
                    /autoimmune|autoimmunity/i,
                    /immunodeficiency|AIDS|HIV/i,
                    /allergy|hypersensitivity/i,
                    /transplant.*rejection/i
                ],
                handler: this.handleImmuneDisorders.bind(this),
                name: 'Immune System Disorders',
                category: 'pathology',
                description: 'Diseases resulting from immune system dysfunction',
                difficulty: 'advanced',
                prerequisites: ['adaptive_immunity', 'pathology']
            },
            
            vaccination: {
                patterns: [
                    /vaccine|vaccination|immunization/i,
                    /active.*immunity|passive.*immunity/i,
                    /herd.*immunity/i,
                    /booster.*shot/i
                ],
                handler: this.handleVaccination.bind(this),
                name: 'Vaccination and Immunization',
                category: 'applied_immunology',
                description: 'Use of vaccines to induce protective immunity',
                difficulty: 'intermediate',
                prerequisites: ['adaptive_immunity', 'immunological_memory']
            }
        };
    }

    initializeImmuneLessons() {
        this.lessons = {
            innate_immunity: {
                title: "Innate Immunity: First Line of Defense",
                concepts: [
                    "Innate immunity is present from birth and provides immediate defense",
                    "Physical and chemical barriers prevent pathogen entry",
                    "Phagocytes engulf and destroy pathogens",
                    "Inflammation recruits immune cells to infection sites",
                    "Pattern recognition receptors detect conserved pathogen molecules",
                    "Complement system enhances pathogen clearance"
                ],
                theory: "Innate immunity is the evolutionarily ancient defense system that responds rapidly to pathogens without prior exposure. It recognizes broad classes of pathogens through pattern recognition receptors (PRRs) that detect pathogen-associated molecular patterns (PAMPs) and damage-associated molecular patterns (DAMPs). Unlike adaptive immunity, innate responses do not improve with repeated exposure and lack immunological memory.",
                
                keyDefinitions: {
                    "Innate Immunity": "Non-specific defense mechanisms present from birth that respond immediately to pathogens",
                    "Pathogen": "Disease-causing microorganism (bacteria, virus, fungus, parasite)",
                    "PAMP": "Pathogen-Associated Molecular Pattern - conserved microbial molecules (e.g., LPS, flagellin, viral RNA)",
                    "DAMP": "Damage-Associated Molecular Pattern - host molecules released from damaged cells",
                    "PRR": "Pattern Recognition Receptor - receptors that recognize PAMPs and DAMPs (e.g., Toll-like receptors)",
                    "Phagocytosis": "Process by which cells engulf and digest particles or pathogens",
                    "Opsonization": "Coating of pathogens with molecules (antibodies, complement) to enhance phagocytosis",
                    "Inflammation": "Localized protective response to injury or infection characterized by heat, redness, swelling, pain"
                },
                
                components: {
                    physicalBarriers: {
                        skin: {
                            structure: "Multilayered keratinized epithelium",
                            mechanisms: ["Physical barrier - intact skin impermeable to most pathogens", "Acidic pH (4-5.5) inhibits bacterial growth", "Sebum contains antimicrobial fatty acids", "Constant shedding removes surface microbes"],
                            breaches: "Cuts, burns, insect bites allow pathogen entry"
                        },
                        mucousMembranes: {
                            location: "Respiratory, digestive, urogenital tracts",
                            mechanisms: ["Mucus traps pathogens", "Cilia sweep mucus upward (respiratory)", "Lysozyme in secretions digests bacterial cell walls", "IgA antibodies in mucus neutralize pathogens"],
                            examples: "Tears, saliva, nasal secretions, stomach acid (pH 1-2)"
                        },
                        microbiome: {
                            concept: "Normal flora - commensal bacteria on body surfaces",
                            protection: ["Compete with pathogens for nutrients and space", "Produce antimicrobial substances", "Stimulate immune system development"],
                            disruption: "Antibiotics can eliminate normal flora, allowing pathogen overgrowth (e.g., C. difficile)"
                        }
                    },
                    
                    cellularComponents: {
                        phagocytes: {
                            neutrophils: {
                                characteristics: "Most abundant WBC (50-70%), short-lived (hours to days)",
                                function: "First responders to infection - phagocytose bacteria",
                                mechanisms: ["Chemotaxis - migrate toward infection site", "Phagocytosis and intracellular killing", "Release antimicrobial peptides and enzymes", "Form NETs (neutrophil extracellular traps)"],
                                location: "Blood circulation, rapidly recruited to tissues"
                            },
                            macrophages: {
                                characteristics: "Large, long-lived phagocytes, derived from monocytes",
                                function: "Phagocytosis, antigen presentation, tissue repair",
                                mechanisms: ["Phagocytose pathogens and cellular debris", "Present antigens to T cells (link to adaptive immunity)", "Secrete cytokines (IL-1, TNF-α, IL-12)", "M1 (pro-inflammatory) vs M2 (anti-inflammatory) polarization"],
                                location: "Tissues throughout body (alveolar, Kupffer, microglia, etc.)"
                            },
                            dendriticCells: {
                                characteristics: "Professional antigen-presenting cells",
                                function: "Bridge between innate and adaptive immunity",
                                mechanisms: ["Capture antigens in tissues", "Migrate to lymph nodes", "Present antigens to naïve T cells", "Express high levels of MHC and costimulatory molecules"],
                                importance: "Critical for initiating adaptive immune responses"
                            }
                        },
                        
                        naturalKillerCells: {
                            characteristics: "Large granular lymphocytes, part of innate immunity",
                            function: "Kill virus-infected and tumor cells without prior sensitization",
                            recognition: {
                                missingself: "Detect cells with reduced MHC-I expression (virus-infected or tumor cells downregulate MHC-I to evade cytotoxic T cells)",
                                activatingReceptors: "Bind stress-induced ligands on abnormal cells"
                            },
                            killingMechanism: ["Release perforin (forms pores in target cell)", "Release granzymes (induce apoptosis)", "Express Fas ligand (triggers death receptors)"],
                            cytokines: "Produce IFN-γ (activates macrophages, enhances antiviral state)"
                        },
                        
                        mastCells: {
                            location: "Connective tissues, especially near blood vessels and nerves",
                            function: "Mediate allergic reactions and inflammation",
                            degranulation: "Release preformed mediators from granules",
                            mediators: ["Histamine - vasodilation, increased permeability", "Heparin - anticoagulant", "Tryptase - activates other cells", "Cytokines - recruit other immune cells"],
                            role: "Important in immediate hypersensitivity (allergies), parasite defense"
                        },
                        
                        eosinophils: {
                            function: "Defense against parasites, role in allergic reactions",
                            mechanisms: ["Release toxic proteins (major basic protein, eosinophil peroxidase)", "Damage parasite membranes", "Contribute to tissue damage in allergies and asthma"]
                        },
                        
                        basophils: {
                            function: "Similar to mast cells - allergic reactions",
                            characteristics: "Least common WBC, contain histamine granules"
                        }
                    },
                    
                    inflammation: {
                        purpose: "Localized response to eliminate pathogens, remove damaged tissue, initiate repair",
                        cardinalSigns: {
                            rubor: "Redness (increased blood flow)",
                            calor: "Heat (increased metabolism and blood flow)",
                            tumor: "Swelling (fluid accumulation)",
                            dolor: "Pain (pressure on nerves, inflammatory mediators)",
                            functioLaesa: "Loss of function (pain and swelling limit movement)"
                        },
                        process: [
                            "1. Tissue damage or infection detected by resident macrophages",
                            "2. Mast cells and macrophages release inflammatory mediators (histamine, prostaglandins, cytokines)",
                            "3. Vasodilation increases blood flow to area (redness, heat)",
                            "4. Increased vascular permeability allows fluid leakage (swelling)",
                            "5. Chemokines recruit neutrophils and monocytes from blood",
                            "6. Leukocytes adhere to endothelium and extravasate into tissue",
                            "7. Phagocytes eliminate pathogens and debris",
                            "8. Resolution: anti-inflammatory signals, tissue repair"
                        ],
                        mediators: {
                            histamine: "Vasodilation, increased permeability (from mast cells, basophils)",
                            prostaglandins: "Pain, fever, vasodilation (from many cell types)",
                            leukotrienes: "Bronchoconstriction, increased permeability (from leukocytes)",
                            cytokines: "IL-1, TNF-α, IL-6 - systemic effects (fever, acute phase response)"
                        },
                        acute_vs_chronic: {
                            acute: "Short-duration (hours-days), neutrophil-dominated, resolves with healing",
                            chronic: "Long-duration (weeks-years), macrophage/lymphocyte-dominated, tissue destruction and fibrosis"
                        }
                    },
                    
                    complementSystem: {
                        overview: "Cascade of ~30 proteins in blood that enhance immune response",
                        functions: ["Opsonization - coat pathogens for enhanced phagocytosis", "Chemotaxis - recruit immune cells via C3a, C5a", "Cell lysis - membrane attack complex (MAC) forms pores", "Inflammation - C3a and C5a act as anaphylatoxins"],
                        pathways: {
                            classical: {
                                trigger: "Antibody-antigen complexes (IgG, IgM)",
                                steps: "C1 binds antibody → C4 and C2 cleavage → C3 convertase (C4b2a)",
                                linkToAdaptive: "Requires antibodies from adaptive immunity"
                            },
                            alternative: {
                                trigger: "Pathogen surfaces directly (spontaneous C3 hydrolysis)",
                                steps: "C3b binds surface → factor B and D → C3 convertase (C3bBb)",
                                characteristics: "Innate - no antibodies needed, amplification loop"
                            },
                            lectin: {
                                trigger: "Mannose-binding lectin (MBL) binds pathogen carbohydrates",
                                steps: "MBL binds mannose → MASP proteins → C4 and C2 cleavage",
                                characteristics: "Similar to classical but innate (no antibodies)"
                            }
                        },
                        commonPathway: "All pathways converge at C3 → C3 convertase → C5 convertase → C5b + C6,7,8,9 → MAC",
                        regulation: "Tightly controlled to prevent host cell damage (DAF, CD59, Factor H, Factor I)"
                    },
                    
                    antimicrobialProteins: {
                        interferons: {
                            typeI: "IFN-α, IFN-β - produced by virus-infected cells",
                            effects: ["Induce antiviral state in neighboring cells", "Inhibit viral replication", "Activate NK cells and macrophages", "Upregulate MHC-I expression"],
                            mechanism: "Bind receptors → JAK-STAT pathway → antiviral gene expression"
                        },
                        defensins: {
                            type: "Small cationic antimicrobial peptides",
                            location: "Epithelial surfaces, neutrophil granules",
                            mechanism: "Disrupt microbial membranes (cationic peptides interact with anionic phospholipids)"
                        },
                        lysozyme: {
                            location: "Tears, saliva, mucus",
                            mechanism: "Cleaves peptidoglycan in bacterial cell walls"
                        },
                        collectins: {
                            examples: "Surfactant proteins (SP-A, SP-D), MBL",
                            function: "Opsonize pathogens, activate complement"
                        }
                    }
                },
                
                innate_vs_adaptive: {
                    innate: {
                        timing: "Immediate (0-96 hours)",
                        specificity: "Broad - recognizes classes of pathogens (PAMPs)",
                        diversity: "Limited - germline-encoded receptors",
                        memory: "None - same response each time",
                        components: "Barriers, phagocytes, NK cells, complement, inflammation"
                    },
                    adaptive: {
                        timing: "Delayed (>96 hours on first exposure)",
                        specificity: "Highly specific - unique antigens",
                        diversity: "Vast - genetic recombination creates diverse receptors",
                        memory: "Yes - faster, stronger secondary response",
                        components: "T cells, B cells, antibodies"
                    },
                    interaction: "Innate immunity detects pathogens and activates adaptive immunity; adaptive immunity (antibodies) enhances innate effector functions"
                },
                
                examples: [
                    {
                        scenario: "Bacterial skin wound",
                        response: ["Skin barrier breached", "Bacteria enter tissue", "Resident macrophages detect PAMPs via TLRs", "Release cytokines and chemokines", "Inflammation - redness, swelling, heat", "Neutrophils recruited and phagocytose bacteria", "Complement opsonizes bacteria", "Infection cleared, wound heals"]
                    },
                    {
                        scenario: "Viral respiratory infection",
                        response: ["Virus enters respiratory epithelium", "Infected cells produce type I interferons", "Neighboring cells enter antiviral state", "NK cells kill infected cells", "Dendritic cells capture viral antigens", "Migration to lymph nodes to activate T cells (adaptive immunity)"]
                    }
                ],
                
                applications: [
                    "Understanding sepsis and systemic inflammatory response syndrome (SIRS)",
                    "Developing adjuvants for vaccines (stimulate innate immunity)",
                    "Anti-inflammatory drugs (NSAIDs, corticosteroids) to control excessive inflammation",
                    "Cancer immunotherapy - activating NK cells and macrophages",
                    "Understanding chronic inflammatory diseases (rheumatoid arthritis, IBD)"
                ]
            },

            adaptive_immunity: {
                title: "Adaptive Immunity: Specific and Memory-Based Defense",
                concepts: [
                    "Adaptive immunity is specific to particular antigens",
                    "Lymphocytes (T and B cells) are the key cells of adaptive immunity",
                    "Clonal selection ensures antigen-specific responses",
                    "Immunological memory enables faster secondary responses",
                    "Self-tolerance prevents autoimmune disease",
                    "Two branches: cellular (T cells) and humoral (B cells/antibodies)"
                ],
                theory: "Adaptive immunity evolved in jawed vertebrates and provides highly specific defense against pathogens. It is characterized by antigen specificity, diversity (ability to recognize billions of different antigens), immunological memory (enhanced secondary responses), and self/non-self discrimination. The adaptive immune system can recognize and remember specific pathogens through clonally distributed antigen receptors on lymphocytes.",
                
                keyDefinitions: {
                    "Adaptive Immunity": "Specific immune responses that improve with repeated exposure to antigens",
                    "Antigen": "Molecule that can be recognized by antibodies or T cell receptors",
                    "Epitope": "Specific part of antigen recognized by antibody or TCR (antigenic determinant)",
                    "Lymphocyte": "White blood cell of adaptive immunity (T cell or B cell)",
                    "Clonal Selection": "Process by which antigen selectively activates lymphocytes with matching receptors",
                    "Immunological Memory": "Enhanced immune response upon re-exposure to previously encountered antigen",
                    "Primary Response": "First encounter with antigen - slow, produces mainly IgM",
                    "Secondary Response": "Subsequent encounter - faster, stronger, produces mainly IgG",
                    "MHC": "Major Histocompatibility Complex - proteins that present antigens to T cells",
                    "TCR": "T Cell Receptor - antigen receptor on T cells",
                    "BCR": "B Cell Receptor - membrane-bound antibody on B cells"
                },
                
                characteristics: {
                    specificity: {
                        description: "Each lymphocyte recognizes one specific antigen",
                        mechanism: "Unique antigen receptor on each clone of lymphocytes",
                        diversity: "~10¹¹ different TCRs and BCRs possible",
                        generation: "V(D)J recombination during lymphocyte development"
                    },
                    memory: {
                        description: "Immunological memory of past infections",
                        primaryResponse: {
                            timing: "5-10 days after first exposure",
                            magnitude: "Moderate antibody production",
                            antibodyClass: "Mainly IgM, some IgG",
                            duration: "Weeks to months"
                        },
                        secondaryResponse: {
                            timing: "1-3 days after re-exposure",
                            magnitude: "High antibody production (100-1000x higher)",
                            antibodyClass: "Mainly IgG (or IgA, IgE depending on site)",
                            duration: "Months to years or lifetime",
                            cells: "Memory B and T cells - long-lived, rapidly activated"
                        },
                        basisOfVaccination: "Vaccines induce memory without disease"
                    },
                    selfTolerance: {
                        importance: "Prevent immune attack on own tissues",
                        centralTolerance: {
                            location: "Thymus (T cells), bone marrow (B cells)",
                            mechanism: "Negative selection - lymphocytes that strongly recognize self-antigens are deleted (apoptosis)",
                            process: "Immature lymphocytes encounter self-antigens; self-reactive cells die"
                        },
                        peripheralTolerance: {
                            location: "Secondary lymphoid organs, tissues",
                            mechanisms: ["Anergy - functional inactivation without costimulation", "Regulatory T cells (Tregs) suppress autoreactive cells", "Deletion - activation-induced cell death", "Ignorance - physical separation of antigen (e.g., brain, eye)"]
                        },
                        failure: "Breakdown leads to autoimmune diseases"
                    },
                    diversity: {
                        source: "V(D)J recombination, junctional diversity, combinatorial diversity",
                        TCRdiversity: "~10¹⁶ different TCRs theoretically possible",
                        BCRdiversity: "~10¹¹ different BCRs, further diversified by somatic hypermutation",
                        importance: "Recognize vast array of pathogens"
                    }
                },
                
                lymphocyteDevelopment: {
                    Tcells: {
                        origin: "Bone marrow (hematopoietic stem cells)",
                        maturation: "Thymus",
                        stages: [
                            "1. Progenitor T cells migrate from bone marrow to thymus",
                            "2. Double-negative (DN) stage - no CD4 or CD8",
                            "3. TCR gene rearrangement (V(D)J recombination)",
                            "4. Double-positive (DP) stage - express both CD4 and CD8",
                            "5. Positive selection - TCRs that can bind self-MHC survive",
                            "6. Negative selection - strongly self-reactive cells deleted",
                            "7. Single-positive (SP) - become CD4+ or CD8+ based on MHC restriction",
                            "8. Exit thymus as naïve T cells"
                        ],
                        selection: {
                            positive: "TCR must recognize self-MHC (MHC restriction) or cell dies",
                            negative: "TCR must not strongly bind self-peptide-MHC or cell dies (self-tolerance)"
                        },
                        survival: "Only ~5% of developing T cells survive both selections"
                    },
                    Bcells: {
                        origin: "Bone marrow",
                        maturation: "Bone marrow (unlike T cells)",
                        stages: [
                            "1. Pro-B cell - heavy chain gene rearrangement begins",
                            "2. Pre-B cell - functional heavy chain expressed",
                            "3. Immature B cell - light chain rearrangement, BCR assembled",
                            "4. Negative selection - self-reactive cells deleted or become anergic",
                            "5. Naïve mature B cell exits to periphery"
                        ],
                        BCR: "Membrane-bound antibody (IgM or IgD initially)",
                        selection: "Negative selection against strong self-reactivity"
                    },
                    naiveLymphocytes: {
                        characteristics: "Have not encountered antigen yet",
                        location: "Circulate through blood and secondary lymphoid organs",
                        lifespan: "Weeks to months (apoptosis if not activated)",
                        activation: "Requires antigen recognition + costimulation"
                    }
                },
                
                clonalSelection: {
                    theory: "Proposed by Burnet (1957) - each lymphocyte has unique receptor",
                    process: [
                        "1. Diverse repertoire of naïve lymphocytes, each with unique receptor",
                        "2. Antigen enters body and is presented by APCs",
                        "3. Antigen binds to lymphocyte with matching receptor",
                        "4. Selected lymphocyte receives activation signals",
                        "5. Clonal expansion - selected cell proliferates (mitosis)",
                        "6. Differentiation into effector cells (fight infection) and memory cells",
                        "7. Effector cells eliminate antigen",
                        "8. Contraction - most effector cells die after infection cleared",
                        "9. Memory cells persist - provide rapid response to future encounters"
                    ],
                    significance: "Explains specificity and memory of adaptive immunity",
                    expansion: "One activated cell can produce thousands of progeny (clonal expansion)"
                },
                
                antigenPresentation: {
                    importance: "T cells cannot recognize free antigen - must be presented on MHC",
                    MHC_ClassI: {
                        structure: "Heavy chain (α) + β2-microglobulin",
                        expression: "All nucleated cells",
                        peptideSource: "Intracellular proteins (endogenous antigens)",
                        pathway: ["Proteins degraded by proteasome", "Peptides transported to ER", "Loaded onto MHC-I", "Transported to cell surface"],
                        recognizedBy: "CD8+ T cells (cytotoxic T cells)",
                        function: "Display 'self' of cell - altered by viruses or mutations → target for killing"
                    },
                    MHC_ClassII: {
                        structure: "α and β chains",
                        expression: "Professional APCs (dendritic cells, macrophages, B cells)",
                        peptideSource: "Extracellular proteins (exogenous antigens)",
                        pathway: ["Proteins endocytosed into vesicles", "Degraded by proteases in endosomes", "MHC-II synthesized in ER", "MHC-II and peptides meet in endosome", "Loaded peptides transported to surface"],
                        recognizedBy: "CD4+ T cells (helper T cells)",
                        function: "Present foreign antigens to activate helper T cells"
                    },
                    crossPresentation: "DCs can present exogenous antigens on MHC-I (important for antiviral immunity)"
                },
                
                TcellActivation: {
                    requirements: "Two signals required (prevents inappropriate activation)",
                    signal1: {
                        description: "Antigen recognition - TCR binds peptide-MHC",
                        specificity: "Determines which T cells are activated",
                        insufficient: "Signal 1 alone → anergy (functional inactivation)"
                    },
                    signal2: {
                        description: "Costimulation - CD28 (T cell) binds B7 (APC)",
                        expression: "B7 upregulated on APCs during infection (innate immune activation)",
                        function: "Confirms 'danger' - ensures T cells activated only during infection",
                        absence: "No signal 2 → anergy or apoptosis"
                    },
                    signal3: {
                        description: "Cytokines from APC",
                        function: "Direct differentiation into specific T cell subset",
                        examples: "IL-12 → Th1, IL-4 → Th2, TGF-β + IL-6 → Th17"
                    },
                    result: "Proliferation (clonal expansion) and differentiation into effector T cells"
                },
                
                BcellActivation: {
                    TdependentActivation: {
                        description: "Requires helper T cell assistance (most protein antigens)",
                        process: [
                            "1. B cell binds antigen via BCR, internalizes and processes it",
                            "2. B cell presents antigen on MHC-II",
                            "3. Helper T cell (Th2) recognizes peptide-MHC-II",
                            "4. T cell provides costimulation (CD40L-CD40) and cytokines (IL-4, IL-5)",
                            "5. B cell proliferates and differentiates",
                            "6. Germinal center formation in lymph nodes",
                            "7. Somatic hypermutation - BCR affinity maturation",
                            "8. Class switching - change antibody isotype (IgM → IgG, IgA, IgE)",
                            "9. Differentiation into plasma cells (antibody factories) and memory B cells"
                        ],
                        features: "Allows class switching, affinity maturation, memory generation"
                    },
                    TindependentActivation: {
                        description: "No T cell help needed (polysaccharide antigens, LPS)",
                        mechanism: "Cross-linking of many BCRs or direct TLR activation",
                        limitations: "No class switching (IgM only), no affinity maturation, little memory",
                        examples: "Bacterial capsular polysaccharides"
                    }
                },
                
                effectorsAndMemory: {
                    effectorTcells: {
                        CD4helpers: "Secrete cytokines, activate other immune cells",
                        CD8cytotoxic: "Kill infected or cancerous cells",
                        lifespan: "Days to weeks (die after infection cleared)"
                    },
                    effectorBcells: {
                        plasmaCells: "Antibody-secreting factories",
                        production: "Up to 2000 antibodies/second",
                        lifespan: "Days to weeks (short-lived), some long-lived in bone marrow"
                    },
                    memoryLymphocytes: {
                        characteristics: ["Long-lived (years to lifetime)", "Reside in tissues and secondary lymphoid organs", "Rapidly respond to antigen re-encounter", "Lower activation threshold than naïve cells"],
                        memoryTcells: {
                            centralMemory: "Reside in lymph nodes, proliferate rapidly",
                            effectorMemory: "Patrol tissues, immediate effector functions"
                        },
                        memoryBcells: "Rapidly differentiate into plasma cells upon re-exposure",
                        importance: "Basis of long-term immunity and vaccination"
                    }
                },
                
                comparison: {
                    cellular_vs_humoral: {
                        cellular: {
                            cells: "T lymphocytes",
                            targets: "Intracellular pathogens, infected cells, cancer cells",
                            mechanism: "Direct cell killing, macrophage activation",
                            MHC: "MHC-I (CD8+) and MHC-II (CD4+)"
                        },
                        humoral: {
                            cells: "B lymphocytes",
                            products: "Antibodies",
                            targets: "Extracellular pathogens, toxins",
                            mechanism: "Neutralization, opsonization, complement activation"
                        }
                    }
                },
                
                examples: [
                    {
                        scenario: "First measles infection (primary response)",
                        timeline: ["Day 0: Exposure to measles virus", "Days 1-5: Virus replicates, no symptoms", "Days 5-7: Innate immunity (interferon, NK cells)", "Days 7-10: Symptoms appear, adaptive immunity activating", "Days 10-14: T and B cells clonally expand", "Days 14-21: Antibodies peak, virus cleared", "Long-term: Memory B and T cells persist"],
                        antibodies: "Initially IgM, later IgG",
                        outcome: "Illness, followed by lifelong immunity"
                    },
                    {
                        scenario: "Re-exposure to measles (secondary response)",
                        timeline: ["Day 0: Re-exposure to measles virus", "Days 1-3: Memory cells rapidly activated", "Days 3-5: High antibody levels, virus eliminated", "Outcome: No symptoms (subclinical) due to rapid response"],
                        antibodies: "Predominantly IgG (high affinity)",
                        protection: "Memory cells prevent disease"
                    }
                ],
                
                applications: [
                    "Vaccine development - induce memory without disease",
                    "Understanding transplant rejection and tissue compatibility (HLA typing)",
                    "Cancer immunotherapy - enhance T cell recognition of tumors",
                    "Treating immunodeficiency (HIV, SCID)",
                    "Managing autoimmune diseases",
                    "Developing monoclonal antibody therapies"
                ]
            },

            cellular_immunity: {
                title: "Cellular Immunity: T Cell-Mediated Responses",
                concepts: [
                    "T cells mediate cellular immunity against intracellular pathogens",
                    "CD4+ helper T cells coordinate immune responses",
                    "CD8+ cytotoxic T cells kill infected and cancerous cells",
                    "T cells recognize antigens presented on MHC molecules",
                    "Different Th subsets drive different types of immunity",
                    "Regulatory T cells prevent excessive immune responses"
                ],
                theory: "Cellular immunity is mediated by T lymphocytes and targets intracellular pathogens (viruses, intracellular bacteria, parasites) and abnormal cells (cancer). Unlike B cells which recognize intact antigens, T cells recognize processed peptide antigens presented on MHC molecules. This MHC restriction ensures T cells monitor the internal state of cells throughout the body.",
                
                keyDefinitions: {
                    "T Cell": "Lymphocyte that matures in thymus, mediates cellular immunity",
                    "CD4+ T cell": "Helper T cell that recognizes MHC-II, secretes cytokines",
                    "CD8+ T cell": "Cytotoxic T cell that recognizes MHC-I, kills target cells",
                    "TCR": "T Cell Receptor - recognizes peptide-MHC complexes",
                    "MHC Restriction": "T cells only recognize antigens presented on self-MHC molecules",
                    "Cytotoxicity": "Ability to kill target cells",
                    "Perforin": "Protein that forms pores in target cell membranes",
                    "Granzyme": "Serine protease that induces apoptosis in target cells",
                    "Regulatory T cell": "Treg - suppresses immune responses to maintain tolerance"
                },
                
                TcellSubsets: {
                    CD4helperTcells: {
                        MHCrestriction: "MHC Class II",
                        function: "Orchestrate immune responses by secreting cytokines",
                        activation: "Recognize peptide-MHC-II on APCs",
                        subsets: {
                            Th1: {
                                inducingCytokines: "IL-12 (from macrophages, DCs), IFN-γ",
                                transcriptionFactor: "T-bet",
                                cytokinesProduced: ["IFN-γ (activates macrophages)", "IL-2 (T cell growth)", "TNF-α"],
                                functions: ["Activate macrophages for intracellular pathogen killing", "Promote cell-mediated immunity", "Support CD8+ T cell responses", "Induce IgG antibody production (opsonizing antibodies)"],
                                pathogens: "Intracellular bacteria (Mycobacterium), viruses, protozoa",
                                diseases: "Excess → autoimmune disease (MS, type 1 diabetes)",
                                keySignature: "IFN-γ production"
                            },
                            Th2: {
                                inducingCytokines: "IL-4",
                                transcriptionFactor: "GATA-3",
                                cytokinesProduced: ["IL-4 (B cell class switching to IgE)", "IL-5 (eosinophil activation)", "IL-13"],
                                functions: ["Promote humoral immunity", "Activate eosinophils", "Induce IgE production (allergic antibodies)", "Mucus production"],
                                pathogens: "Extracellular parasites (helminths)",
                                diseases: "Excess → allergies, asthma",
                                keySignature: "IL-4, IL-5 production"
                            },
                            Th17: {
                                inducingCytokines: "TGF-β + IL-6 (or IL-21, IL-23)",
                                transcriptionFactor: "RORγt",
                                cytokinesProduced: ["IL-17 (neutrophil recruitment)", "IL-22"],
                                functions: ["Recruit neutrophils to infection sites", "Enhance barrier function", "Clear extracellular bacteria and fungi"],
                                pathogens: "Extracellular bacteria (Klebsiella), fungi (Candida)",
                                diseases: "Excess → autoimmune disease (rheumatoid arthritis, psoriasis)",
                                keySignature: "IL-17 production"
                            },
                            Tfh: {
                                name: "T follicular helper",
                                location: "B cell follicles in lymph nodes",
                                transcriptionFactor: "Bcl-6",
                                cytokinesProduced: "IL-21",
                                functions: ["Help B cells in germinal centers", "Promote antibody class switching", "Support affinity maturation"],
                                marker: "CXCR5 (homing to follicles)"
                            },
                            Treg: {
                                name: "Regulatory T cell",
                                marker: "CD4+ CD25+ Foxp3+",
                                transcriptionFactor: "Foxp3",
                                cytokinesProduced: ["IL-10 (immunosuppressive)", "TGF-β (immunosuppressive)"],
                                functions: ["Suppress autoreactive T cells", "Maintain self-tolerance", "Prevent excessive immune responses", "Control inflammation"],
                                mechanisms: ["Cytokine-mediated suppression", "Cell-contact inhibition", "Metabolic disruption (consume IL-2)"],
                                importance: "Prevent autoimmunity, regulate immune homeostasis",
                                deficiency: "IPEX syndrome (loss of Foxp3) → severe autoimmunity"
                            }
                        },
                        polarization: "Naïve CD4+ T cells differentiate into subsets based on cytokine milieu",
                        plasticity: "Some flexibility - can shift between subsets in certain conditions"
                    },
                    
                    CD8cytotoxicTcells: {
                        MHCrestriction: "MHC Class I",
                        function: "Kill virus-infected, intracellular bacteria-infected, and tumor cells",
                        recognition: "Peptide-MHC-I complexes on target cells",
                        activation: {
                            signal1: "TCR recognizes peptide-MHC-I",
                            signal2: "Costimulation (CD28-B7)",
                            signal3: "IL-2 and other cytokines (often from CD4+ T cells)",
                            result: "Clonal expansion and differentiation into CTLs"
                        },
                        killingMechanisms: {
                            granuleExocytosis: {
                                process: [
                                    "1. CTL recognizes target cell via TCR-pMHC-I",
                                    "2. Immunological synapse forms (tight junction between cells)",
                                    "3. CTL reorients cytotoxic granules toward target",
                                    "4. Granules fuse with membrane, release contents",
                                    "5. Perforin inserts into target membrane, forms pores",
                                    "6. Granzymes enter through pores",
                                    "7. Granzymes activate caspases → apoptosis",
                                    "8. Target cell dies within hours",
                                    "9. CTL detaches and can kill again (serial killing)"
                                ],
                                perforin: "Forms transmembrane pores (similar to complement MAC)",
                                granzymes: "Serine proteases that cleave caspases and other proteins",
                                apoptosis: "Programmed cell death - cell shrinks, DNA fragments, phagocytes clear debris"
                            },
                            fasPathway: {
                                mechanism: "CTL expresses Fas ligand (FasL), binds Fas (death receptor) on target",
                                result: "Activates caspase cascade → apoptosis",
                                importance: "Alternative pathway, important for eliminating activated lymphocytes"
                            }
                        },
                        advantages: {
                            specificity: "Only kills infected cells, spares healthy neighbors",
                            apoptosis: "Clean death - no inflammation, membrane intact (vs necrosis)",
                            serialKilling: "One CTL can kill multiple targets sequentially"
                        },
                        targets: ["Virus-infected cells", "Intracellular bacteria-infected cells", "Tumor cells (recognize tumor antigens on MHC-I)", "Allogeneic grafts (transplant rejection)"],
                        tumorImmunity: {
                            surveillance: "CTLs recognize tumor-associated antigens on MHC-I",
                            evasion: ["Tumors downregulate MHC-I (escape CTL recognition)", "Express PD-L1 (inhibits T cells)", "Immunosuppressive tumor microenvironment"],
                            therapy: "Checkpoint inhibitors (anti-PD-1, anti-CTLA-4) enhance CTL activity"
                        }
                    }
                },
                
                TcellActivation: {
                    immunologicalSynapse: {
                        description: "Organized junction between T cell and APC",
                        structure: {
                            cSMAC: "Central supramolecular activation cluster - TCR-pMHC, CD4/CD8",
                            pSMAC: "Peripheral SMAC - adhesion molecules (LFA-1, ICAM-1)",
                            dSMAC: "Distal SMAC - large molecules excluded"
                        },
                        function: "Concentrate signaling molecules, sustain activation signals"
                    },
                    signaling: {
                        TCRsignal: "TCR + CD3 complex → phosphorylation cascade (ZAP-70, LAT, PLCγ)",
                        costimulation: "CD28 (T cell) + B7 (APC) → survival and proliferation signals",
                        cytokineReceptors: "IL-2 receptor → proliferation; others → differentiation",
                        outcomes: ["Proliferation (clonal expansion)", "Cytokine production", "Effector function acquisition", "Memory cell formation"]
                    }
                },
                
                TcellMemory: {
                    centralMemory: {
                        location: "Lymph nodes, spleen",
                        markers: "CD62L+ CCR7+ (lymph node homing)",
                        function: "Proliferate extensively upon rechallenge",
                        characteristics: "High proliferative capacity, limited immediate effector function"
                    },
                    effectorMemory: {
                        location: "Peripheral tissues, blood",
                        markers: "CD62L- CCR7- (tissue homing)",
                        function: "Immediate effector responses in tissues",
                        characteristics: "Rapid cytokine production or cytotoxicity, less proliferation"
                    },
                    tissuResidentMemory: {
                        location: "Remain in specific tissues (skin, gut, lung)",
                        markers: "CD69+ CD103+",
                        function: "Local rapid response to reinfection at entry sites",
                        importance: "First line of adaptive defense at barrier sites"
                    }
                },
                
                immuneEvasion: {
                    viralStrategies: [
                        "Downregulate MHC-I expression (but makes cell susceptible to NK cells)",
                        "Inhibit antigen processing or presentation",
                        "Produce decoy MHC-like molecules",
                        "Infect immune privileged sites (brain, testes)",
                        "Rapid mutation (antigenic variation - influenza, HIV)"
                    ],
                    tumorStrategies: [
                        "Downregulate MHC-I or tumor antigens",
                        "Express checkpoint ligands (PD-L1, CTLA-4 ligands)",
                        "Secrete immunosuppressive cytokines (TGF-β, IL-10)",
                        "Recruit regulatory T cells and myeloid-derived suppressor cells"
                    ]
                },
                
                clinicalApplications: {
                    cancerImmunotherapy: {
                        checkpointInhibitors: {
                            antiPD1: "Pembrolizumab, Nivolumab - block PD-1 on T cells",
                            antiPDL1: "Atezolizumab - block PD-L1 on tumors",
                            antiCTLA4: "Ipilimumab - block CTLA-4 (inhibitory receptor)",
                            mechanism: "Remove 'brakes' on T cells, enhance antitumor immunity"
                        },
                        CARTcells: {
                            concept: "Chimeric Antigen Receptor T cells",
                            engineering: "Patient's T cells genetically modified to express tumor-specific receptor",
                            targets: "CD19 (B cell malignancies), others in development",
                            success: "Dramatic responses in B cell leukemias/lymphomas"
                        }
                    },
                    transplantation: {
                        rejection: "Alloreactive T cells recognize foreign HLA as non-self",
                        types: {
                            hyperacute: "Minutes - preexisting antibodies",
                            acute: "Days-months - T cell-mediated",
                            chronic: "Months-years - mixed mechanisms"
                        },
                        prevention: "HLA matching, immunosuppressive drugs (cyclosporine, tacrolimus)"
                    },
                    autoimmunity: {
                        Th1mediated: "Type 1 diabetes, MS - T cells attack self-tissues",
                        Th17mediated: "Rheumatoid arthritis, psoriasis - excessive inflammation",
                        treatment: "Immunosuppression, biologics (anti-TNF, anti-IL-17)"
                    }
                },
                
                examples: [
                    {
                        scenario: "Influenza virus infection",
                        cellularResponse: ["Virus infects respiratory epithelial cells", "Infected cells display viral peptides on MHC-I", "CD8+ T cells recognize virus-pMHC-I", "CTLs kill infected cells via perforin/granzyme", "CD4+ Th1 cells produce IFN-γ, activate macrophages", "Virus eliminated by combined CTL and antibody responses", "Memory T cells provide protection against reinfection"]
                    },
                    {
                        scenario: "Melanoma (cancer)",
                        cellularResponse: ["Tumor cells express mutated proteins (neoantigens)", "Neoantigens presented on MHC-I", "Tumor-specific CD8+ T cells can recognize and kill tumor cells", "However, tumor expresses PD-L1, inhibits T cells", "Checkpoint inhibitor (anti-PD-1) removes inhibition", "Enhanced T cell-mediated tumor destruction"]
                    }
                ],
                
                applications: [
                    "Cancer immunotherapy (checkpoint inhibitors, CAR-T)",
                    "Vaccine development (induce strong T cell responses)",
                    "Transplant immunology (HLA matching, prevent rejection)",
                    "Treating chronic infections (HIV, TB, hepatitis)",
                    "Autoimmune disease management",
                    "Understanding immunodeficiency (HIV targets CD4+ T cells)"
                ]
            },

            humoral_immunity: {
                title: "Humoral Immunity: B Cells and Antibodies",
                concepts: [
                    "B cells mediate humoral immunity through antibody production",
                    "Antibodies neutralize pathogens and toxins in body fluids",
                    "Five antibody classes (IgG, IgM, IgA, IgE, IgD) with distinct functions",
                    "Antibody diversity generated by V(D)J recombination and somatic hypermutation",
                    "Class switching changes antibody effector function",
                    "Primary and secondary antibody responses differ in timing and magnitude"
                ],
                theory: "Humoral immunity is mediated by B lymphocytes and antibodies (immunoglobulins) circulating in body fluids ('humors'). It protects against extracellular pathogens, neutralizes toxins, and enhances innate immune mechanisms through opsonization and complement activation. Each B cell produces antibodies of a single specificity, ensuring antigen-specific responses.",
                
                keyDefinitions: {
                    "Humoral Immunity": "Antibody-mediated immunity in body fluids (blood, lymph, mucus)",
                    "Antibody": "Y-shaped protein that binds specific antigens (also called immunoglobulin, Ig)",
                    "B Cell": "Lymphocyte that produces antibodies, matures in bone marrow",
                    "Plasma Cell": "Differentiated B cell specialized for antibody secretion",
                    "BCR": "B Cell Receptor - membrane-bound antibody on B cell surface",
                    "Epitope": "Specific site on antigen recognized by antibody",
                    "Paratope": "Antigen-binding site on antibody",
                    "Affinity": "Strength of binding between one antibody site and one epitope",
                    "Avidity": "Overall binding strength (combines multiple binding sites)",
                    "Class Switching": "Change in antibody heavy chain constant region (IgM → IgG, IgA, IgE)",
                    "Somatic Hypermutation": "Mutations in antibody genes to increase affinity",
                    "Affinity Maturation": "Selection of higher-affinity antibody variants in germinal centers"
                },
                
                antibodyStructure: {
                    basicStructure: {
                        shape: "Y-shaped molecule",
                        chains: "Two heavy chains (H) + two light chains (L), held by disulfide bonds",
                        symmetry: "Two identical antigen-binding sites",
                        domains: "Immunoglobulin domains (~110 amino acids, β-sheet structure)"
                    },
                    regions: {
                        Fab: {
                            name: "Fragment antigen-binding",
                            composition: "VH + VL + CH1 + CL",
                            function: "Binds antigen (two Fab regions per antibody)",
                            variability: "Variable region provides antigen specificity"
                        },
                        Fc: {
                            name: "Fragment crystallizable",
                            composition: "CH2 + CH3 domains of both heavy chains",
                            function: "Effector functions (complement activation, binding to Fc receptors)",
                            variability: "Constant region determines antibody class"
                        },
                        hinge: {
                            location: "Between Fab and Fc",
                            function: "Flexibility - allows Fab arms to move, bind epitopes at different angles"
                        }
                    },
                    variableRegion: {
                        location: "N-terminal domains of heavy and light chains (VH and VL)",
                        function: "Antigen recognition",
                        CDRs: {
                            name: "Complementarity-Determining Regions (hypervariable regions)",
                            number: "Three CDRs in VH, three in VL",
                            function: "Form antigen-binding site, directly contact epitope",
                            variability: "Extremely diverse - determines antibody specificity"
                        },
                        framework: "Conserved regions that scaffold CDRs"
                    },
                    constantRegion: {
                        location: "C-terminal domains",
                        function: "Effector functions",
                        determines: "Antibody class (isotype) - IgG, IgM, IgA, IgE, IgD",
                        variability: "Same within a class, differs between classes"
                    }
                },
                
                antibodyClasses: {
                    IgG: {
                        structure: "Monomer (single Y-shaped unit)",
                        subtypes: "IgG1, IgG2, IgG3, IgG4 (humans)",
                        concentration: "~75% of serum antibodies (10-15 mg/ml)",
                        distribution: "Blood and tissues",
                        functions: [
                            "Neutralization of pathogens and toxins",
                            "Opsonization (enhanced phagocytosis)",
                            "Complement activation (IgG1, IgG3)",
                            "Antibody-dependent cell-mediated cytotoxicity (ADCC)",
                            "Crosses placenta - provides passive immunity to fetus/newborn"
                        ],
                        halfLife: "~23 days (longest)",
                        response: "Predominant in secondary immune response",
                        clinical: "Most therapeutic antibodies are IgG"
                    },
                    IgM: {
                        structure: "Pentamer (5 Y-units linked by J chain) in serum, monomer on B cells",
                        concentration: "~10% of serum antibodies",
                        distribution: "Blood (too large to cross into tissues easily)",
                        functions: [
                            "First antibody produced in primary response",
                            "Excellent complement activator (pentameric - multiple Fc regions)",
                            "Effective against bacteria",
                            "Low affinity individually, but high avidity (10 binding sites)"
                        ],
                        halfLife: "~5 days",
                        response: "Predominant in primary response",
                        clinical: "IgM detection indicates recent/acute infection"
                    },
                    IgA: {
                        structure: "Monomer (serum) or dimer (secretory IgA - sIgA)",
                        concentration: "~15% of serum antibodies, most abundant in secretions",
                        distribution: "Mucous membranes (respiratory, GI, urogenital tracts), saliva, tears, milk",
                        secretoryComponent: "Protein that protects sIgA from degradation in harsh mucosal environments",
                        functions: [
                            "Mucosal immunity - prevents pathogen attachment",
                            "Neutralizes toxins and viruses at mucosal surfaces",
                            "Transferred to infant via breast milk (passive immunity)"
                        ],
                        halfLife: "~6 days",
                        importance: "First line of defense at entry points"
                    },
                    IgE: {
                        structure: "Monomer",
                        concentration: "Lowest (~0.0005% of serum antibodies)",
                        distribution: "Bound to mast cells and basophils (via Fc receptors)",
                        functions: [
                            "Defense against parasitic worms (helminths)",
                            "Mediates allergic reactions (type I hypersensitivity)",
                            "Cross-linking of IgE on mast cells → degranulation → histamine release"
                        ],
                        halfLife: "~2 days in serum, longer on mast cells",
                        clinical: "Elevated in allergies and parasitic infections, target of anti-IgE therapy (omalizumab)"
                    },
                    IgD: {
                        structure: "Monomer",
                        concentration: "<1% of serum antibodies",
                        distribution: "Expressed on surface of naïve B cells (with IgM)",
                        function: "Role unclear - may regulate B cell activation and tolerance",
                        serum: "Low levels, function not well understood"
                    }
                },
                
                antibodyDiversity: {
                    mechanisms: [
                        "V(D)J recombination",
                        "Junctional diversity (addition/deletion of nucleotides at junctions)",
                        "Combinatorial diversity (different VH-VL pairings)",
                        "Somatic hypermutation (point mutations in variable regions)",
                        "Class switching (changes heavy chain constant region)"
                    ],
                    VDJrecombination: {
                        process: "Random joining of V, D, J gene segments during B cell development",
                        heavyChain: "VH + DH + JH segments recombined",
                        lightChain: "VL + JL segments recombined (no D segment)",
                        enzymes: "RAG1 and RAG2 (recombination-activating genes)",
                        result: "Enormous diversity - ~10^11 different antibodies possible"
                    },
                    somaticHypermutation: {
                        location: "Germinal centers of lymph nodes",
                        timing: "After antigen encounter",
                        mechanism: "AID (activation-induced deaminase) introduces point mutations in V regions",
                        rate: "~10^-3 per base pair per division (very high)",
                        selection: "B cells with higher-affinity BCRs preferentially survive",
                        result: "Affinity maturation - antibodies improve over time"
                    },
                    classSwitching: {
                        mechanism: "Recombination deletes intervening DNA, switches heavy chain constant region",
                        retains: "Variable region (antigen specificity) unchanged",
                        changes: "Effector functions (complement activation, tissue distribution, etc.)",
                        signals: "Cytokines from helper T cells direct switch to specific isotype",
                        examples: "IL-4 → IgE, IFN-γ → IgG, TGF-β → IgA"
                    }
                },
                
                BcellActivation: {
                    Tdependent: {
                        antigens: "Protein antigens",
                        process: [
                            "1. B cell binds antigen via BCR",
                            "2. Antigen internalized, processed, presented on MHC-II",
                            "3. Helper T cell (Th2) recognizes peptide-MHC-II",
                            "4. T cell provides help via CD40L-CD40 interaction and cytokines (IL-4, IL-21)",
                            "5. B cell migrates to B cell follicle",
                            "6. Germinal center forms",
                            "7. Somatic hypermutation and selection",
                            "8. Class switching",
                            "9. Differentiation into plasma cells and memory B cells"
                        ],
                        features: "Class switching, affinity maturation, memory generation",
                        germinalCenter: "Specialized microenvironment for B cell selection and differentiation"
                    },
                    Tindependent: {
                        antigens: "Polysaccharides, lipopolysaccharides (repeating units)",
                        mechanism: "Extensive BCR cross-linking or TLR activation",
                        response: "Rapid IgM production, no T cell help needed",
                        limitations: "No class switching, no affinity maturation, limited memory",
                        importance: "Early response to encapsulated bacteria"
                    }
                },
                
                antibodyFunctions: {
                    neutralization: {
                        mechanism: "Antibody binds pathogen or toxin, blocks interaction with host cells",
                        targets: "Viruses (block entry), bacterial toxins (block binding to receptors)",
                        importance: "Prevents infection/disease without killing pathogen"
                    },
                    opsonization: {
                        mechanism: "Antibody coats pathogen, Fc region recognized by phagocyte Fc receptors",
                        result: "Enhanced phagocytosis",
                        antibodies: "IgG is primary opsonin",
                        synergy: "Works with complement (C3b also opsonizes)"
                    },
                    complementActivation: {
                        antibodies: "IgM (most efficient), IgG1, IgG3",
                        pathway: "Classical pathway - C1 binds to Fc regions",
                        results: ["Opsonization (C3b)", "Inflammation (C3a, C5a)", "Lysis (MAC)"]
                    },
                    ADCC: {
                        name: "Antibody-Dependent Cell-Mediated Cytotoxicity",
                        mechanism: "Antibody-coated target cells recognized by NK cells or macrophages via Fc receptors",
                        result: "NK cells/macrophages kill target",
                        importance: "Eliminates antibody-coated virus-infected or tumor cells"
                    },
                    degranulation: {
                        mechanism: "Allergen cross-links IgE on mast cells",
                        result: "Mast cell degranulation - releases histamine, cytokines, leukotrienes",
                        outcome: "Allergic reaction (inflammation, bronchoconstriction, vasodilation)"
                    }
                },
                
                primaryVsSecondary: {
                    primary: {
                        timing: "5-10 days after first exposure",
                        lagPhase: "Clonal selection and expansion takes time",
                        antibodies: "Predominantly IgM, later IgG",
                        magnitude: "Moderate",
                        affinity: "Lower",
                        duration: "Weeks to months"
                    },
                    secondary: {
                        timing: "1-3 days after re-exposure",
                        noLag: "Memory B cells rapidly activate",
                        antibodies: "Predominantly IgG (or IgA, IgE)",
                        magnitude: "High (10-100x higher than primary)",
                        affinity: "Higher (affinity maturation has occurred)",
                        duration: "Months to years or lifetime",
                        basis: "Immunological memory"
                    }
                },
                
                clinicalApplications: {
                    passiveImmunity: {
                        concept: "Transfer of antibodies from another individual",
                        natural: "Maternal IgG crosses placenta, IgA in breast milk",
                        artificial: "Injection of antibodies (antitoxins, immunoglobulin therapy)",
                        advantages: "Immediate protection",
                        disadvantages: "Temporary (antibodies degrade), no memory",
                        examples: "Rabies immunoglobulin, tetanus antitoxin, IVIG (intravenous immunoglobulin)"
                    },
                    monoclonalAntibodies: {
                        concept: "Antibodies from single B cell clone (one specificity)",
                        production: "Hybridoma technology (Köhler and Milstein, 1975) or recombinant methods",
                        uses: ["Cancer therapy (rituximab, trastuzumab)", "Autoimmune disease (anti-TNF)", "Transplant rejection prevention", "Diagnostics (ELISA, Western blot, flow cytometry)"],
                        advantages: "High specificity, reproducible, can be engineered"
                    },
                    diagnostics: {
                        ELISA: "Detect specific antibodies or antigens",
                        pregnancy tests: "Detect hCG using monoclonal antibodies",
                        infectious disease: "Detect pathogen-specific antibodies (IgM = recent, IgG = past infection)",
                        autoimmune: "Detect autoantibodies (anti-nuclear antibodies, rheumatoid factor)"
                    }
                },
                
                examples: [
                    {
                        scenario: "Tetanus toxin exposure (first time)",
                        response: ["Toxin enters body via wound", "B cells recognize toxin epitopes", "T-dependent activation, germinal center response", "IgM production (days 5-7), IgG production (days 10-14)", "Antibodies neutralize toxin", "Memory B cells persist"],
                        outcome: "Illness possible if not previously vaccinated"
                    },
                    {
                        scenario: "Tetanus toxin exposure (vaccinated individual)",
                        response: ["Toxin enters body", "Memory B cells rapidly recognize toxin", "Rapid differentiation to plasma cells", "High-affinity IgG produced within 2-3 days", "Toxin neutralized before disease"],
                        outcome: "No illness due to rapid, high-affinity antibody response"
                    }
                ],
                
                applications: [
                    "Vaccine design (induce protective antibodies)",
                    "Serological diagnostics (detect infection, autoimmunity)",
                    "Therapeutic antibodies (cancer, autoimmune disease)",
                    "Passive immunization (post-exposure prophylaxis)",
                    "Blood typing and transfusion safety",
                    "Organ transplant compatibility testing"
                ]
            },

            immune_cells: {
                title: "Immune Cells: Types, Functions, and Interactions",
                concepts: [
                    "White blood cells (leukocytes) are the cells of the immune system",
                    "Innate immune cells respond rapidly and non-specifically",
                    "Adaptive immune cells (lymphocytes) provide specific, memory-based responses",
                    "Antigen-presenting cells bridge innate and adaptive immunity",
                    "Cell-cell communication via cytokines coordinates immune responses",
                    "Hematopoiesis generates all blood cells from stem cells"
                ],
                theory: "The immune system comprises diverse cell types that work together to defend against pathogens. All immune cells derive from hematopoietic stem cells in bone marrow and differentiate into two main lineages: myeloid (most innate cells) and lymphoid (adaptive immune cells). Understanding the phenotype, function, and interactions of each cell type is essential for comprehending immunity and immune-related diseases.",
                
                keyDefinitions: {
                    "Leukocyte": "White blood cell - all immune cells",
                    "Hematopoiesis": "Formation of blood cells from hematopoietic stem cells",
                    "Myeloid Lineage": "Gives rise to neutrophils, monocytes, macrophages, dendritic cells, mast cells, eosinophils, basophils",
                    "Lymphoid Lineage": "Gives rise to T cells, B cells, NK cells",
                    "APC": "Antigen-Presenting Cell - presents antigens on MHC to T cells",
                    "Cytokine": "Signaling protein secreted by immune cells to communicate",
                    "Chemokine": "Cytokine that directs cell migration (chemoattractant)",
                    "Extravasation": "Process by which leukocytes exit blood vessels into tissues"
                },
                
                hematopoiesis: {
                    location: "Bone marrow (adults), liver and spleen (fetus)",
                    stemCell: "Hematopoietic stem cell (HSC) - self-renewing, multipotent",
                    lineages: {
                        myeloid: {
                            progenitor: "Common myeloid progenitor (CMP)",
                            cells: [
                                "Neutrophils",
                                "Monocytes → Macrophages, Dendritic cells",
                                "Mast cells",
                                "Eosinophils",
                                "Basophils",
                                "Megakaryocytes → Platelets",
                                "Erythrocytes (red blood cells)"
                            ]
                        },
                        lymphoid: {
                            progenitor: "Common lymphoid progenitor (CLP)",
                            cells: [
                                "T lymphocytes (mature in thymus)",
                                "B lymphocytes (mature in bone marrow)",
                                "NK cells"
                            ]
                        }
                    },
                    regulation: {
                        cytokines: "G-CSF, M-CSF, GM-CSF, IL-3, IL-7, etc. promote differentiation",
                        demand: "Infection or inflammation increases production of specific lineages"
                    }
                },
                
                innateImmuneCells: {
                    neutrophils: {
                        percentage: "50-70% of circulating WBCs",
                        morphology: "Granulocyte, multi-lobed nucleus (3-5 lobes), granules",
                        lifespan: "Hours to days (very short-lived)",
                        function: "First responders to bacterial infection - professional phagocytes",
                        recruitment: "Chemokines (IL-8, C5a) attract to infection sites",
                        mechanisms: [
                            "Phagocytosis and intracellular killing (respiratory burst, oxidative mechanisms)",
                            "Release antimicrobial peptides and enzymes",
                            "NETosis - release DNA nets to trap pathogens"
                        ],
                        granules: {
                            primary: "Lysozyme, myeloperoxidase, defensins",
                            secondary: "Lactoferrin, collagenase",
                            tertiary: "Gelatinase, cathepsins"
                        },
                        clinical: "Elevated in bacterial infections, neutropenia (low count) increases infection risk"
                    },
                    
                    monocytes: {
                        percentage: "2-10% of circulating WBCs",
                        morphology: "Large, kidney-shaped nucleus",
                        lifespan: "Days in blood, differentiate into macrophages/DCs in tissues",
                        function: "Circulating precursors, differentiate in tissues",
                        subsets: {
                            classical: "CD14++ CD16- - differentiate to macrophages",
                            intermediate: "CD14++ CD16+ - pro-inflammatory",
                            nonClassical: "CD14+ CD16++ - patrol endothelium"
                        }
                    },
                    
                    macrophages: {
                        origin: "Derived from monocytes in tissues",
                        morphology: "Large, irregular shape, abundant cytoplasm",
                        lifespan: "Months to years (long-lived)",
                        distribution: "All tissues - tissue-resident macrophages",
                        names: {
                            liver: "Kupffer cells",
                            lung: "Alveolar macrophages",
                            brain: "Microglia",
                            bone: "Osteoclasts",
                            spleen: "Red pulp macrophages"
                        },
                        functions: [
                            "Phagocytosis of pathogens, dead cells, debris",
                            "Antigen presentation to T cells (MHC-II)",
                            "Cytokine secretion (IL-1, IL-6, TNF-α, IL-12)",
                            "Tissue repair and remodeling",
                            "Iron recycling (from old RBCs)"
                        ],
                        polarization: {
                            M1: {
                                activation: "IFN-γ, LPS",
                                phenotype: "Pro-inflammatory, microbicidal",
                                cytokines: "IL-12, TNF-α, IL-6",
                                function: "Kill intracellular pathogens, tumor cells"
                            },
                            M2: {
                                activation: "IL-4, IL-13, IL-10",
                                phenotype: "Anti-inflammatory, tissue repair",
                                cytokines: "IL-10, TGF-β",
                                function: "Wound healing, parasite immunity, tumor promotion"
                            }
                        },
                        clinical: "Dysregulation contributes to chronic inflammation, cancer, atherosclerosis"
                    },
                    
                    dendriticCells: {
                        types: {
                            conventional: "cDC1 (cross-presentation), cDC2 (Th differentiation)",
                            plasmacytoid: "pDC - produce large amounts of type I interferon"
                        },
                        location: "Tissues (immature, capture antigens) → lymph nodes (mature, present antigens)",
                        morphology: "Dendritic projections",
                        function: "Professional APCs - most efficient at activating naïve T cells",
                        process: [
                            "1. Immature DCs in tissues capture antigens (phagocytosis, receptor-mediated)",
                            "2. PAMPs activate DCs (via TLRs) → maturation",
                            "3. Upregulate MHC-II, costimulatory molecules (B7)",
                            "4. Migrate to draining lymph node (CCR7-dependent)",
                            "5. Present antigens to naïve T cells",
                            "6. Provide signals 1 (pMHC), 2 (B7), and 3 (cytokines)"
                        ],
                        importance: "Bridge innate and adaptive immunity - initiate adaptive responses",
                        crossPresentation: "Present exogenous antigens on MHC-I (important for antiviral, antitumor immunity)"
                    },
                    
                    naturalKillerCells: {
                        percentage: "5-15% of lymphocytes",
                        morphology: "Large granular lymphocytes",
                        lineage: "Lymphoid (but part of innate immunity - no antigen-specific receptor)",
                        function: "Kill virus-infected and tumor cells without prior sensitization",
                        recognition: {
                            inhibitoryReceptors: "KIR (killer immunoglobulin-like receptors) - recognize MHC-I → inhibit killing",
                            activatingReceptors: "NKG2D, NCRs - recognize stress ligands → activate killing",
                            missingself: "Cells with low/no MHC-I (virus/tumor evasion strategy) are killed",
                            inducedself: "Upregulation of stress ligands on infected/transformed cells activates NK"
                        },
                        mechanisms: [
                            "Perforin/granzyme-mediated cytotoxicity",
                            "Fas-FasL-mediated apoptosis",
                            "ADCC (antibody-dependent cell-mediated cytotoxicity)"
                        ],
                        cytokines: "Produce IFN-γ (activates macrophages, enhances Th1 responses)",
                        clinical: "Important in antiviral and antitumor immunity, CAR-NK cells in development"
                    },
                    
                    mastCells: {
                        origin: "Myeloid lineage, mature in tissues",
                        location: "Connective tissues, near blood vessels, mucosal surfaces",
                        morphology: "Large, abundant granules",
                        receptors: "FcεRI (high-affinity IgE receptor)",
                        function: "Mediate allergic reactions, defense against parasites",
                        degranulation: {
                            trigger: "Allergen cross-links IgE bound to FcεRI",
                            mediators: {
                                preformed: "Histamine, heparin, tryptase, TNF-α (stored in granules)",
                                newlySynthesized: "Prostaglandins, leukotrienes, cytokines"
                            },
                            effects: "Vasodilation, increased vascular permeability, bronchoconstriction, inflammation"
                        },
                        role: {
                            beneficial: "Defense against helminth parasites",
                            pathological: "Type I hypersensitivity (allergies, anaphylaxis)"
                        }
                    },
                    
                    eosinophils: {
                        percentage: "1-4% of circulating WBCs",
                        morphology: "Bilobed nucleus, large eosinophilic (pink/red) granules",
                        function: "Defense against parasitic worms (helminths), role in allergies",
                        recruitment: "IL-5, eotaxin",
                        mechanisms: [
                            "Release toxic proteins (major basic protein, eosinophil peroxidase)",
                            "Damage parasite membranes",
                            "ADCC against antibody-coated parasites"
                        ],
                        pathology: "Contribute to asthma, eosinophilic esophagitis (excessive Th2 response)"
                    },
                    
                    basophils: {
                        percentage: "<1% of circulating WBCs (rarest)",
                        morphology: "Large basophilic (dark blue/purple) granules",
                        function: "Similar to mast cells - allergic inflammation",
                        mediators: "Histamine, heparin, IL-4",
                        role: "Contribute to allergic reactions, promote Th2 responses"
                    }
                },
                
                adaptiveImmuneCells: {
                    Tlymphocytes: {
                        percentage: "60-80% of lymphocytes",
                        maturation: "Thymus",
                        receptor: "TCR (T cell receptor) - recognizes peptide-MHC",
                        MHCrestriction: "Only recognize antigens presented on MHC",
                        subsets: {
                            CD4helperT: {
                                MHC: "MHC Class II",
                                function: "Secrete cytokines, help other immune cells",
                                subsets: "Th1, Th2, Th17, Tfh, Treg"
                            },
                            CD8cytotoxicT: {
                                MHC: "MHC Class I",
                                function: "Kill infected and cancerous cells"
                            },
                            gammaDeltaT: {
                                characteristics: "TCR with γδ chains (not αβ)",
                                location: "Epithelial tissues, mucosal surfaces",
                                function: "Rapid response at barrier sites, recognize lipids and stress molecules"
                            },
                            NKT: {
                                characteristics: "Express both NK markers and TCR",
                                recognition: "Lipid antigens presented on CD1d",
                                function: "Bridge innate and adaptive, rapid cytokine production"
                            }
                        }
                    },
                    
                    Blymphocytes: {
                        percentage: "10-30% of lymphocytes",
                        maturation: "Bone marrow",
                        receptor: "BCR (B cell receptor) - membrane-bound antibody",
                        recognition: "Intact antigens (proteins, carbohydrates, lipids)",
                        subsets: {
                            follicularB: "Conventional B cells in lymphoid follicles, T-dependent responses",
                            marginalZoneB: "Rapid T-independent responses to blood-borne antigens",
                            B1cells: "Innate-like B cells, produce natural antibodies",
                            plasmaCells: "Differentiated antibody-secreting cells",
                            memoryB: "Long-lived, rapidly respond to rechallenge"
                        },
                        functions: [
                            "Antibody production",
                            "Antigen presentation to T cells",
                            "Cytokine secretion"
                        ]
                    }
                },
                
                antigenPresentingCells: {
                    professional: {
                        cells: "Dendritic cells, macrophages, B cells",
                        MHC: "Constitutively express MHC-II",
                        costimulation: "Express B7 molecules (CD80, CD86)",
                        function: "Activate naïve T cells"
                    },
                    nonprofessional: {
                        cells: "All nucleated cells",
                        MHC: "Express MHC-I (some upregulate MHC-II under inflammation)",
                        function: "Display intracellular contents to CD8+ T cells"
                    }
                },
                
                cellCommunication: {
                    cytokines: {
                        definition: "Small secreted proteins that mediate cell-cell communication",
                        characteristics: ["Produced transiently", "Autocrine, paracrine, or endocrine action", "Pleiotropic (multiple effects)", "Redundant (multiple cytokines can have similar effects)", "Synergistic or antagonistic"],
                        families: {
                            interleukins: "IL-1 through IL-38 (numbered, many more)",
                            interferons: "Type I (IFN-α, IFN-β), Type II (IFN-γ), Type III",
                            TNF family: "TNF-α, lymphotoxin, TRAIL, CD40L, etc.",
                            chemokines: "IL-8, MCP-1, RANTES, eotaxin, etc. (direct migration)",
                            growthFactors: "GM-CSF, G-CSF, M-CSF, erythropoietin, etc."
                        },
                        examples: {
                            proinflammatory: "IL-1, IL-6, TNF-α, IL-12, IFN-γ",
                            antiinflammatory: "IL-10, TGF-β, IL-35",
                            Th1promoting: "IL-12, IFN-γ",
                            Th2promoting: "IL-4, IL-5, IL-13",
                            Th17promoting: "IL-6, IL-23, TGF-β"
                        }
                    },
                    cellAdhesion: {
                        selectins: "Rolling adhesion on endothelium",
                        integrins: "Firm adhesion",
                        immunoglobulinSuperfamily: "ICAM-1, VCAM-1 - bind integrins"
                    },
                    chemokines: {
                        function: "Direct cell migration (chemotaxis)",
                        receptors: "GPCRs on leukocytes",
                        examples: [
                            "CXCL8 (IL-8) → attract neutrophils",
                            "CCL2 (MCP-1) → attract monocytes",
                            "CCL5 (RANTES) → attract T cells, eosinophils",
                            "CXCL13 → B cell homing to follicles"
                        ]
                    }
                },
                
                leukocyteTrafficking: {
                    recirculation: "Lymphocytes continuously circulate through blood, lymph, and tissues",
                    homing: "Directed migration to specific tissues (via adhesion molecules and chemokines)",
                    extravasation: {
                        steps: [
                            "1. Rolling - selectins (endothelium) bind to glycoproteins (leukocyte)",
                            "2. Activation - chemokines activate leukocyte integrins",
                            "3. Firm adhesion - integrins (leukocyte) bind ICAM/VCAM (endothelium)",
                            "4. Transmigration - leukocyte squeezes between endothelial cells into tissue"
                        ],
                        importance: "Recruitment of immune cells to infection/inflammation sites"
                    }
                },
                
                clinicalCorrelations: {
                    leukemia: "Cancer of blood/bone marrow - abnormal leukocyte proliferation",
                    leukopenia: "Low WBC count - increased infection risk",
                    leukocytosis: "High WBC count - often indicates infection or inflammation",
                    immunodeficiency: "Deficiency in specific immune cell types (SCID, HIV)",
                    flowCytometry: "Identify and count cell types based on surface markers (CD antigens)"
                },
                
                examples: [
                    {
                        scenario: "Bacterial skin infection",
                        cellsInvolved: [
                            "Resident macrophages detect bacteria, release IL-1, TNF-α, IL-8",
                            "IL-8 recruits neutrophils from blood",
                            "Neutrophils extravasate, phagocytose bacteria",
                            "Dendritic cells capture antigens, migrate to lymph nodes",
                            "DCs activate T cells → adaptive response begins"
                        ]
                    }
                ],
                
                applications: [
                    "Diagnosing infections and hematologic disorders (CBC with differential)",
                    "Monitoring immune function (CD4 count in HIV)",
                    "Cancer immunotherapy (engineering T cells, NK cells)",
                    "Understanding autoimmune disease pathogenesis",
                    "Transplant rejection (monitoring T cell infiltration)"
                ]
            },

            complement_system: {
                title: "Complement System: Enzymatic Cascade of Innate Immunity",
                concepts: [
                    "Complement is a cascade of ~30 plasma proteins that enhance immunity",
                    "Three pathways (classical, alternative, lectin) converge on C3",
                    "Major functions: opsonization, inflammation, cell lysis",
                    "Complement bridges innate and adaptive immunity",
                    "Tightly regulated to prevent host tissue damage",
                    "Deficiencies lead to infections and autoimmune disease"
                ],
                theory: "The complement system is an evolutionarily ancient part of innate immunity consisting of soluble proteins that can be rapidly activated to enhance (complement) the ability of antibodies and phagocytes to clear pathogens. It acts as a proteolytic cascade, where each step amplifies the next, leading to opsonization, inflammation, and direct pathogen lysis. The system must be tightly regulated to prevent inappropriate activation and host tissue damage.",
                
                keyDefinitions: {
                    "Complement": "System of plasma proteins that enhance immune responses (complement antibodies)",
                    "Opsonization": "Coating of pathogens with molecules (C3b, antibodies) to enhance phagocytosis",
                    "Anaphylatoxin": "Complement fragments (C3a, C5a) that promote inflammation",
                    "MAC": "Membrane Attack Complex (C5b-9) - forms pores in cell membranes",
                    "C3 Convertase": "Enzyme that cleaves C3 into C3a and C3b",
                    "C5 Convertase": "Enzyme that cleaves C5 into C5a and C5b",
                    "Complement Fixation": "Binding and activation of complement on a surface",
                    "Complement Receptor": "Cell surface receptors that recognize complement fragments (CR1, CR2, CR3, CR4)"
                },
                
                overview: {
                    components: "~30 soluble proteins in blood plasma (inactive until activated)",
                    nomenclature: "C1, C2, C3, etc. (numbered in order of discovery, not activation)",
                    activation: "Proteolytic cascade - each step activates the next",
                    amplification: "Each enzyme can activate many substrate molecules",
                    functions: [
                        "Opsonization - C3b coats pathogens for enhanced phagocytosis",
                        "Inflammation - C3a and C5a recruit and activate immune cells",
                        "Cell lysis - MAC forms pores in pathogen membranes",
                        "Clearance of immune complexes and apoptotic cells"
                    ]
                },
                
                activationPathways: {
                    classical: {
                        trigger: "Antibody-antigen complexes (IgG or IgM bound to antigen)",
                        components: "C1 (C1q, C1r, C1s), C4, C2",
                        steps: [
                            "1. C1q binds to Fc regions of antibodies (at least 2 IgG or 1 IgM)",
                            "2. C1r and C1s are activated (serine proteases)",
                            "3. C1s cleaves C4 → C4a (anaphylatoxin) + C4b (binds surface)",
                            "4. C1s cleaves C2 → C2a + C2b",
                            "5. C4b2a complex forms → C3 convertase (classical pathway)"
                        ],
                        C3convertase: "C4b2a",
                        linkToAdaptive: "Requires antibodies from adaptive immune response",
                        importance: "Enhances antibody-mediated pathogen clearance"
                    },
                    
                    alternative: {
                        trigger: "Pathogen surfaces directly (no antibodies needed)",
                        components: "C3, Factor B, Factor D, Properdin",
                        steps: [
                            "1. Spontaneous hydrolysis of C3 ('tickover') → C3(H2O)",
                            "2. C3(H2O) binds Factor B",
                            "3. Factor D cleaves Factor B → Ba + Bb",
                            "4. C3(H2O)Bb is a fluid-phase C3 convertase",
                            "5. Generates C3b, which can bind pathogen surfaces",
                            "6. Surface-bound C3b binds Factor B",
                            "7. Factor D cleaves Factor B → Ba + Bb",
                            "8. C3bBb forms → C3 convertase (alternative pathway)",
                            "9. Properdin stabilizes C3bBb"
                        ],
                        C3convertase: "C3bBb (stabilized by properdin)",
                        amplificationLoop: "C3b generated by any pathway can activate alternative pathway",
                        innate: "No antibodies required - rapid innate response",
                        discrimination: "Host cells express regulators (DAF, MCP) that inactivate C3b; pathogen surfaces lack regulators"
                    },
                    
                    lectin: {
                        trigger: "Mannose-binding lectin (MBL) or ficolins bind carbohydrates on pathogen surfaces",
                        components: "MBL or ficolins, MASP-1, MASP-2 (MBL-associated serine proteases)",
                        steps: [
                            "1. MBL or ficolin recognizes mannose or other carbohydrates on pathogens",
                            "2. MBL/ficolin binding activates MASP-1 and MASP-2",
                            "3. MASP-2 cleaves C4 → C4a + C4b",
                            "4. MASP-2 cleaves C2 → C2a + C2b",
                            "5. C4b2a forms → C3 convertase"
                        ],
                        C3convertase: "C4b2a (same as classical pathway)",
                        similarity: "Functionally similar to classical, but initiated by pattern recognition (innate)",
                        innate: "No antibodies required",
                        importance: "Early defense, especially in young children before adaptive immunity matures"
                    }
                },
                
                commonPathway: {
                    convergence: "All three pathways generate C3 convertase → cleave C3",
                    C3cleavage: {
                        reaction: "C3 convertase cleaves C3 → C3a + C3b",
                        C3a: "Anaphylatoxin - diffuses away, promotes inflammation",
                        C3b: "Large fragment - covalently binds to pathogen surface"
                    },
                    C3bFunctions: [
                        "Opsonization - phagocytes recognize C3b via CR1 (complement receptor 1)",
                        "Forms C5 convertase (when combined with C3 convertase)",
                        "Activates alternative pathway (amplification)"
                    ],
                    C5convertase: {
                        formation: "C3 convertase + additional C3b",
                        classical: "C4b2a3b",
                        alternative: "C3bBb3b",
                        function: "Cleaves C5 → C5a + C5b"
                    },
                    C5cleavage: {
                        C5a: "Potent anaphylatoxin (more active than C3a)",
                        C5b: "Initiates MAC formation"
                    },
                    MACformation: {
                        steps: [
                            "1. C5b binds C6",
                            "2. C5b6 binds C7 → C5b67 complex",
                            "3. C5b67 inserts into lipid bilayer",
                            "4. C8 binds → C5b678 creates small pore",
                            "5. Multiple C9 molecules polymerize → large pore (C5b-9)",
                            "6. Pore allows water and ions to enter → cell lysis (osmotic lysis)"
                        ],
                        structure: "Transmembrane channel (~10 nm diameter)",
                        target: "Gram-negative bacteria, enveloped viruses, some parasites",
                        resistance: "Gram-positive bacteria (thick peptidoglycan) relatively resistant; human cells protected by regulators"
                    }
                },
                
                biologicalFunctions: {
                    opsonization: {
                        mechanism: "C3b covalently binds pathogen surface",
                        recognition: "Phagocytes express CR1 (CD35) that binds C3b",
                        result: "Enhanced phagocytosis (100-1000x more efficient)",
                        synergy: "Works with antibody opsonization (IgG-Fc receptors)",
                        importance: "Critical for clearing encapsulated bacteria"
                    },
                    
                    inflammation: {
                        anaphylatoxins: "C3a, C4a, C5a (C5a is most potent)",
                        effects: [
                            "Recruit neutrophils and monocytes (chemotaxis)",
                            "Activate mast cells and basophils → histamine release",
                            "Increase vascular permeability",
                            "Induce smooth muscle contraction",
                            "Stimulate production of inflammatory mediators"
                        ],
                        receptors: "C3aR and C5aR (GPCRs) on immune and endothelial cells",
                        role: "Amplify local inflammatory response"
                    },
                    
                    cellLysis: {
                        MAC: "Forms pores in cell membranes",
                        targets: "Gram-negative bacteria (E. coli, Neisseria), enveloped viruses",
                        mechanism: "Osmotic lysis - water influx causes cell swelling and rupture",
                        limitations: "Less effective against Gram-positive bacteria (thick cell wall) and fungi"
                    },
                    
                    immuneComplexClearance: {
                        role: "C3b binds immune complexes (antigen-antibody aggregates)",
                        transport: "Erythrocytes (RBCs) bind C3b-coated complexes via CR1",
                        delivery: "RBCs transport complexes to liver and spleen for phagocytosis",
                        importance: "Prevents immune complex deposition in tissues (prevents vasculitis, glomerulonephritis)"
                    },
                    
                    apoptoticCellClearance: {
                        role: "C1q and MBL recognize apoptotic cells",
                        mechanism: "Opsonize apoptotic cells for silent phagocytic removal",
                        importance: "Prevents autoimmunity (exposure of self-antigens from uncleared apoptotic cells)"
                    },
                    
                    Bcellactivation: {
                        CR2: "Complement receptor 2 (CD21) on B cells",
                        coreceptor: "CR2 is part of B cell coreceptor complex (CR2-CD19-CD81)",
                        enhancement: "C3d (breakdown product of C3b) on antigen binds CR2 → lowers activation threshold",
                        result: "Enhances B cell activation and antibody production (1000-10,000x)"
                    }
                },
                
                regulation: {
                    necessity: "Prevent inappropriate activation on host cells and excessive inflammation",
                    hostProtection: {
                        DAF: {
                            name: "Decay-Accelerating Factor (CD55)",
                            mechanism: "Dissociates C3 convertases (C4b2a and C3bBb)",
                            location: "Host cell membranes"
                        },
                        MCP: {
                            name: "Membrane Cofactor Protein (CD46)",
                            mechanism: "Cofactor for Factor I (protease that inactivates C3b and C4b)",
                            location: "Host cell membranes"
                        },
                        CD59: {
                            name: "Protectin",
                            mechanism: "Inhibits MAC formation by binding C8 and C9",
                            location: "Host cell membranes",
                            importance: "Prevents MAC-mediated lysis of host cells"
                        },
                        factorH: {
                            mechanism: "Promotes dissociation of C3bBb, cofactor for Factor I",
                            location: "Soluble plasma protein, binds to host surfaces (recognizes sialic acid)"
                        },
                        factorI: {
                            mechanism: "Serine protease that cleaves C3b and C4b (with cofactors MCP, Factor H, CR1)",
                            result: "Inactivated fragments (iC3b, C3dg, C3d)"
                        },
                        C1inhibitor: {
                            mechanism: "Serine protease inhibitor (serpin) that inhibits C1r, C1s, MASP-1, MASP-2",
                            location: "Plasma",
                            role: "Prevents spontaneous activation of classical and lectin pathways"
                        }
                    },
                    discrimination: "Host cells express regulators; pathogen surfaces lack regulators → selective activation on pathogens"
                },
                
                complementDeficiencies: {
                    C1_C2_C4: {
                        pathways: "Classical and lectin pathways impaired",
                        infections: "Pyogenic bacteria (S. pneumoniae, H. influenzae) - encapsulated",
                        autoimmunity: "SLE-like syndrome (impaired clearance of immune complexes and apoptotic cells)",
                        most common: "C2 deficiency"
                    },
                    C3: {
                        effect: "All pathways impaired (C3 is central)",
                        infections: "Severe, recurrent pyogenic bacterial infections",
                        severity: "Life-threatening if untreated",
                        note: "C3 deficiency is rare but devastating"
                    },
                    C5_C6_C7_C8_C9: {
                        pathways: "Terminal pathway impaired (no MAC)",
                        infections: "Neisseria infections (meningococcal and gonococcal) - especially recurrent",
                        reason: "Neisseria is particularly susceptible to MAC lysis",
                        note: "Relatively mild compared to C3 deficiency"
                    },
                    factorH_factorI: {
                        effect: "Uncontrolled alternative pathway activation",
                        result: "C3 depletion (consumed by unregulated activation)",
                        disease: "Atypical hemolytic uremic syndrome (aHUS), age-related macular degeneration",
                        infections: "Similar to C3 deficiency"
                    },
                    C1inhibitor: {
                        disease: "Hereditary angioedema (HAE)",
                        mechanism: "Uncontrolled activation of classical pathway and kallikrein-kinin system",
                        symptoms: "Recurrent episodes of swelling (face, extremities, GI tract, airway)",
                        treatment: "C1 inhibitor replacement, bradykinin receptor antagonists"
                    },
                    DAF_CD59: {
                        disease: "Paroxysmal nocturnal hemoglobinuria (PNH)",
                        mechanism: "Acquired defect in GPI anchor synthesis → loss of DAF and CD59 on RBCs",
                        result: "Complement-mediated hemolysis, thrombosis",
                        treatment: "Eculizumab (anti-C5 antibody)"
                    }
                },
                
                clinicalApplications: {
                    diagnostics: {
                        CH50: "Total hemolytic complement - measures classical pathway function",
                        AH50: "Alternative hemolytic complement - measures alternative pathway",
                        C3_C4_levels: "Measure individual complement components",
                        applications: "Diagnose complement deficiencies, monitor autoimmune disease activity (SLE)"
                    },
                    therapeutics: {
                        eculizumab: {
                            mechanism: "Monoclonal antibody against C5 - blocks C5 cleavage",
                            diseases: "PNH, aHUS, myasthenia gravis, neuromyelitis optica",
                            effect: "Prevents MAC formation and C5a generation"
                        },
                        C1inhibitor: {
                            indication: "Hereditary angioedema",
                            effect: "Prevents uncontrolled classical pathway activation"
                        },
                        developingTherapies: "Factor D inhibitors, C3 inhibitors, properdin inhibitors"
                    }
                },
                
                examples: [
                    {
                        scenario: "Neisseria meningitidis infection in complement-deficient patient",
                        deficiency: "C7 deficiency (MAC cannot form)",
                        consequence: "Recurrent meningococcal infections (Neisseria is highly susceptible to MAC lysis)",
                        outcome: "Increased susceptibility, but infection still controllable with antibiotics"
                    },
                    {
                        scenario: "Systemic lupus erythematosus (SLE)",
                        complementRole: "Deficient clearance of immune complexes and apoptotic cells",
                        result: "Immune complex deposition in tissues (kidneys, skin, joints)",
                        measurement: "Low C3 and C4 indicate active disease"
                    }
                ],
                
                applications: [
                    "Understanding susceptibility to infections",
                    "Diagnosing complement deficiencies and autoimmune diseases",
                    "Developing complement-targeted therapies",
                    "Understanding pathogen evasion mechanisms",
                    "Blood typing and transfusion reactions (complement-mediated hemolysis)"
                ]
            }
        };
    }

    initializeImmuneExperiments() {
        this.immuneExperiments = {
            // ... [experiments will be added in next response due to length]
        };
    }

    // Handler methods (similar structure to molecular biology)
    handleInnateImmunity(problem) {
        const content = this.lessons.innate_immunity;
        return content;
    }

    handleAdaptiveImmunity(problem) {
        const content = this.lessons.adaptive_immunity;
        return content;
    }

    handleCellularImmunity(problem) {
        const content = this.lessons.cellular_immunity;
        return content;
    }

    handleHumoralImmunity(problem) {
        const content = this.lessons.humoral_immunity;
        return content;
    }

    handleImmuneCells(problem) {
        const content = this.lessons.immune_cells;
        return content;
    }

    handleComplementSystem(problem) {
        const content = this.lessons.complement_system;
        return content;
    }

    // Additional methods for misconceptions, metacognitive prompts, etc.
    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            innate_immunity: [
                'Thinking innate immunity is inferior to adaptive (it\'s the first line of defense and essential)',
                'Believing innate immunity has no specificity (it recognizes broad pathogen patterns)',
                'Confusing inflammation with infection (inflammation is the response to infection/injury)',
                'Thinking fever is bad (moderate fever enhances immune function)',
                'Believing all bacteria cause disease (many are beneficial commensals)'
            ],
            adaptive_immunity: [
                'Thinking antibodies kill pathogens directly (they mark pathogens for destruction)',
                'Believing memory lasts forever (some memory wanes over time)',
                'Confusing primary and secondary responses',
                'Thinking vaccines contain live disease (most modern vaccines don\'t)',
                'Believing one exposure creates lifelong immunity (depends on pathogen)'
            ],
            cellular_immunity: [
                'Thinking CD4+ cells kill pathogens (they coordinate responses)',
                'Believing CD8+ cells only kill virus-infected cells (also kill tumor cells)',
                'Confusing MHC-I and MHC-II functions',
                'Thinking all T cells are the same (multiple subsets with different functions)'
            ],
            humoral_immunity: [
                'Believing all antibodies are the same (5 classes with different functions)',
                'Thinking IgM is inferior to IgG (IgM is first responder, excellent complement activator)',
                'Confusing antibody and antigen',
                'Believing maternal antibodies protect indefinitely (passive immunity is temporary)'
            ]
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about the immune system?",
                "Have you been vaccinated? Do you know how vaccines work?",
                "Can you name any immune cells or antibodies?"
            ],
            duringLearning: [
                "How does innate immunity differ from adaptive immunity?",
                "Why do you think we need both types of immunity?",
                "Can you explain the concept in your own words?"
            ],
            afterLearning: [
                "What was the most surprising thing you learned?",
                "How would you explain vaccination to someone else?",
                "What questions do you still have?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            innate_immunity: [
                {
                    scenario: "Splinter in finger",
                    context: "Bacteria enter through break in skin",
                    application: "Inflammation, neutrophil recruitment, phagocytosis",
                    question: "Why does the area become red, warm, and swollen?"
                }
            ],
            vaccination: [
                {
                    scenario: "COVID-19 vaccine",
                    context: "mRNA vaccine induces immunity without causing disease",
                    application: "Memory B and T cells provide protection",
                    question: "Why do some vaccines require booster shots?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall immune system components and functions",
                    verbs: ["List", "Identify", "Define", "Name"],
                    example: "List three functions of antibodies"
                },
                understand: {
                    description: "Explain immune mechanisms",
                    verbs: ["Explain", "Describe", "Compare"],
                    example: "Explain how complement enhances phagocytosis"
                },
                apply: {
                    description: "Apply immune concepts to new situations",
                    verbs: ["Predict", "Demonstrate", "Calculate"],
                    example: "Predict the outcome of C3 deficiency"
                },
                analyze: {
                    description: "Analyze immune responses and interactions",
                    verbs: ["Analyze", "Compare", "Contrast"],
                    example: "Compare innate and adaptive immune responses"
                }
            }
        };
    }



initializeImmuneExperiments() {
    this.immuneExperiments = {
        // ========================================
        // EXPERIMENT 1: PHAGOCYTOSIS
        // ========================================
        
        metchnikoff_phagocytosis: {
            name: "Metchnikoff's Phagocytosis - Observing Cellular Immunity",
            relatedTopics: ['innate_immunity', 'immune_cells'],
            category: 'cellular_immunology',
            historicalBackground: {
                scientist: "Élie Metchnikoff",
                year: "1882-1883",
                discovery: "Discovery of phagocytosis and cellular immunity",
                observation: "Metchnikoff observed mobile cells in transparent starfish larvae engulf and destroy foreign particles (rose thorns)",
                context: "At Messina, Sicily, Metchnikoff inserted rose thorns into starfish larvae and observed cells accumulating around the thorns",
                significance: "First demonstration of cellular immune response - cells actively defend against foreign invaders",
                nobelPrize: "1908 Nobel Prize in Physiology or Medicine (shared with Paul Ehrlich for work on immunity)",
                quote: "I was observing the activity of motile cells of a transparent starfish larva when a new thought suddenly dawned on me. It occurred to me that similar cells might function to protect the organism against harmful intruders.",
                historicalDebate: "Metchnikoff (cellular theory) vs Ehrlich (humoral theory) - later understood both are essential",
                modernView: "Phagocytosis is fundamental to innate immunity and links to adaptive immunity (antigen presentation)"
            },
            labExperiment: {
                title: "Observing Phagocytosis: White Blood Cells Engulfing Pathogens",
                hypothesis: "If white blood cells are part of the immune defense, then they will actively engulf and destroy foreign particles and bacteria through phagocytosis",
                purpose: "Observe phagocytosis by white blood cells using microscopy, demonstrating cellular immunity in action",
                background: {
                    phagocytosis: "Process by which cells engulf and digest particles or pathogens",
                    phagocytes: "Neutrophils (most abundant), macrophages, dendritic cells",
                    steps: "Recognition → Attachment → Ingestion → Phagosome formation → Fusion with lysosome → Digestion",
                    importance: "First line of cellular defense against pathogens"
                },
                variables: {
                    independent: "Presence of bacteria or yeast cells",
                    dependent: "Number of phagocytic events observed, percentage of phagocytes actively engulfing",
                    controlled: ["Temperature", "Time of incubation", "Cell concentration", "Particle concentration"]
                },
                materials: [
                    "Fresh blood sample (human or animal - ethical approval required) OR commercial leukocyte preparation",
                    "Baker's yeast (Saccharomyces cerevisiae) - stained with trypan blue or Congo red",
                    "Alternatively: Heat-killed bacteria (E. coli) or latex beads",
                    "Phosphate buffered saline (PBS)",
                    "Microscope slides and coverslips",
                    "Light microscope (400-1000x magnification)",
                    "Water bath or incubator (37°C)",
                    "Hemocytometer or cell counting chamber",
                    "Centrifuge and centrifuge tubes",
                    "Pipettes and tips",
                    "Wright-Giemsa stain or other blood stain (optional, for better visualization)",
                    "Timer"
                ],
                safetyPrecautions: [
                    "Handle blood as potentially infectious - universal precautions",
                    "Wear gloves, lab coat, safety goggles",
                    "Use only your own blood or approved animal blood",
                    "Disinfect all surfaces with 10% bleach after use",
                    "Dispose of blood-contaminated materials in biohazard waste",
                    "Autoclave all contaminated materials before disposal",
                    "Do not mouth pipette",
                    "Wash hands thoroughly after experiment"
                ],
                procedure: [
                    "PREPARATION OF PHAGOCYTES (White Blood Cells):",
                    "Method 1 - From Fresh Blood:",
                    "Collect 1-2 ml blood in EDTA tube (anticoagulant)",
                    "Dilute blood 1:10 with PBS",
                    "Centrifuge at low speed (200g, 5 min) to separate cells from plasma",
                    "Remove plasma, resuspend cells in PBS",
                    "Alternatively: use commercial leukocyte isolation kit (density gradient)",
                    "",
                    "Method 2 - Commercial Preparation:",
                    "Use commercially prepared white blood cells per supplier instructions",
                    "",
                    "PREPARATION OF PARTICLES TO BE PHAGOCYTOSED:",
                    "Yeast Method (Recommended for teaching labs):",
                    "Mix 0.1 g dried baker's yeast with 10 ml warm water",
                    "Add few drops of trypan blue or Congo red dye to stain yeast",
                    "Incubate 10 minutes to allow staining",
                    "Wash yeast 2-3 times with PBS (centrifuge, remove supernatant, resuspend)",
                    "Resuspend in small volume PBS to create concentrated suspension",
                    "Optional: Heat-kill yeast by boiling 5 minutes (makes them easier to phagocytose)",
                    "",
                    "Bacterial Method:",
                    "Use heat-killed E. coli (autoclave or boil suspension)",
                    "Stain with crystal violet or other bacterial stain",
                    "",
                    "SETTING UP PHAGOCYTOSIS ASSAY:",
                    "Label 3 test tubes: Control (0 min), 15 min, 30 min",
                    "To each tube add:",
                    "  200 μl leukocyte suspension",
                    "  50 μl stained yeast/bacteria suspension",
                    "Mix gently",
                    "",
                    "INCUBATION:",
                    "Immediately prepare slide from 'Control' tube (time = 0)",
                    "Place other tubes in 37°C water bath",
                    "At 15 min, remove tube 2, prepare slide",
                    "At 30 min, remove tube 3, prepare slide",
                    "",
                    "SLIDE PREPARATION:",
                    "Place small drop (~10 μl) of cell-yeast mixture on clean slide",
                    "Add coverslip gently (avoid bubbles)",
                    "Blot excess liquid with tissue paper",
                    "Observe immediately under microscope (cells settle quickly)",
                    "",
                    "MICROSCOPIC OBSERVATION:",
                    "Start with 100x magnification to locate cells",
                    "Switch to 400x or 1000x (oil immersion) for detailed observation",
                    "Look for:",
                    "  - White blood cells (larger than red blood cells, granular cytoplasm)",
                    "  - Yeast cells (small, round, stained blue/red)",
                    "  - Phagocytic events: yeast cells inside or attached to white cells",
                    "Count at least 50 white blood cells per slide",
                    "Record number showing phagocytosis (containing ≥1 yeast cell inside)",
                    "",
                    "STAINING (Optional, for better contrast):",
                    "Allow slide to air dry completely",
                    "Fix with methanol (1-2 minutes)",
                    "Stain with Wright-Giemsa stain per manufacturer protocol",
                    "This will stain cell nuclei and cytoplasm, making structures clearer",
                    "",
                    "DATA COLLECTION:",
                    "For each time point (0, 15, 30 min):",
                    "Count 50 white blood cells",
                    "Record how many contain ingested yeast (≥1 yeast inside)",
                    "Calculate percentage: (Phagocytic cells / Total cells) × 100",
                    "Take photographs or draw what you observe",
                    "",
                    "CONTROLS (Important for interpreting results):",
                    "Negative control: White cells without yeast (no phagocytosis expected)",
                    "Positive control: White cells with yeast at 37°C (phagocytosis expected)",
                    "Temperature control: White cells with yeast at 4°C (phagocytosis inhibited)",
                    "Dead cell control: Heat-killed white cells with yeast (no phagocytosis)"
                ],
                expectedResults: {
                    time0min: {
                        observation: "Few or no yeast inside white cells",
                        percentage: "0-5% phagocytic cells",
                        interpretation: "Insufficient time for phagocytosis"
                    },
                    time15min: {
                        observation: "Some white cells contain 1-3 yeast cells",
                        percentage: "20-40% phagocytic cells",
                        interpretation: "Active phagocytosis occurring"
                    },
                    time30min: {
                        observation: "Many white cells packed with yeast; some yeast partially digested",
                        percentage: "40-70% phagocytic cells",
                        interpretation: "Extensive phagocytosis; some yeast being digested"
                    },
                    cellTypes: {
                        neutrophils: "Most active at phagocytosing yeast, multiple yeast per cell",
                        monocytes: "Also phagocytic, may contain larger particles"
                    }
                },
                dataTable: [
                    ["Time (min)", "Total WBCs Counted", "WBCs with Yeast Inside", "% Phagocytic", "Average Yeast/Cell"],
                    ["0", "50", "2", "4%", "0.1"],
                    ["15", "50", "18", "36%", "1.2"],
                    ["30", "50", "32", "64%", "2.8"],
                    ["", "", "", "", ""],
                    ["Control", "Observation", "Interpretation", "", ""],
                    ["WBC only (no yeast)", "No yeast visible", "Baseline - no phagocytosis", "", ""],
                    ["WBC + yeast at 4°C", "Yeast near but not inside cells", "Cold inhibits phagocytosis", "", ""],
                    ["Heat-killed WBC + yeast", "No phagocytosis", "Dead cells cannot phagocytose", "", ""]
                ],
                observations: [
                    "At time 0, yeast cells are near but not inside white blood cells",
                    "By 15 minutes, white blood cells have begun to engulf yeast",
                    "At 30 minutes, many white cells contain multiple yeast particles",
                    "Some yeast cells inside phagocytes appear smaller or fragmented (being digested)",
                    "Neutrophils (multi-lobed nucleus) are most actively phagocytic",
                    "Phagocytosis is temperature-dependent (reduced at 4°C)",
                    "Dead cells cannot perform phagocytosis (requires active cellular processes)"
                ],
                microscopicFeatures: {
                    whiteBloodCells: "Larger than RBCs, granular cytoplasm, distinct nucleus (may be lobed in neutrophils)",
                    redBloodCells: "Small, biconcave, no nucleus, very abundant",
                    yeastCells: "Small, round, stained blue/red, ~3-5 μm diameter",
                    phagocytosis: "Yeast clearly inside WBC cytoplasm (not just touching surface)",
                    phagosome: "Membrane-bound vesicle containing ingested yeast",
                    digestion: "Yeast may appear swollen, fragmented, or faded (breaking down)"
                },
                analysis: {
                    mechanism: [
                        "Recognition: White cells detect yeast via pattern recognition receptors",
                        "Attachment: Receptors bind to yeast surface molecules",
                        "Ingestion: Cell membrane extends around yeast (pseudopodia)",
                        "Phagosome formation: Yeast enclosed in membrane vesicle",
                        "Fusion: Phagosome fuses with lysosome (contains digestive enzymes)",
                        "Digestion: Enzymes and reactive oxygen species kill and break down yeast",
                        "Elimination: Waste products expelled or retained"
                    ],
                    energyRequirement: "Phagocytosis requires ATP (active process) → inhibited by cold or metabolic poisons",
                    selectivity: "Phagocytes preferentially engulf particles marked by opsonins (antibodies, complement)",
                    capacity: "Neutrophils can engulf multiple particles until they die (hours to days)",
                    importance: "Removes pathogens and cellular debris, initiates adaptive immune response"
                },
                connectionToMetchnikoff: {
                    originalObservation: "Mobile cells engulf foreign particles (rose thorn in starfish larva)",
                    modernUnderstanding: "Phagocytes are central to innate immunity",
                    cellularImmunity: "Metchnikoff proposed cells are primary immune defense",
                    debate: "Metchnikoff (cellular) vs Ehrlich (humoral/antibodies) - both correct",
                    legacy: "Founded cellular immunology, demonstrated active cellular defense"
                },
                results: "White blood cells actively engulf yeast particles in a time-dependent manner. Phagocytosis increases from 0-5% at time 0 to 40-70% by 30 minutes at 37°C. This demonstrates cellular immunity and validates Metchnikoff's discovery of phagocytosis as an active immune defense mechanism.",
                conclusions: [
                    "White blood cells actively perform phagocytosis of foreign particles",
                    "Phagocytosis is time-dependent and increases with longer incubation",
                    "Phagocytosis requires active cellular processes (temperature-dependent, requires living cells)",
                    "Neutrophils are highly effective phagocytes",
                    "Phagocytosis is a fundamental mechanism of innate immunity",
                    "Metchnikoff's observations of cellular immunity are validated"
                ],
                realWorldApplications: [
                    "Understanding bacterial infections (phagocytosis clears bacteria)",
                    "Chronic granulomatous disease (CGD) - defective phagocyte killing",
                    "Drug development (enhance phagocyte function)",
                    "Understanding sepsis (overwhelming infection exceeds phagocyte capacity)",
                    "Cancer immunotherapy (macrophages can phagocytose tumor cells)",
                    "Diagnosing immune deficiencies (phagocyte function tests)"
                ],
                extensions: [
                    "Compare phagocytosis of different particles (bacteria vs yeast vs latex beads)",
                    "Test effect of opsonization (add antibodies or complement to enhance phagocytosis)",
                    "Investigate inhibitors (cytochalasin B blocks actin, prevents phagocytosis)",
                    "Quantify respiratory burst (use fluorescent probes to detect ROS production)",
                    "Study neutrophil extracellular traps (NETs) - another neutrophil killing mechanism",
                    "Compare phagocyte function in healthy vs immunocompromised individuals"
                ],
                troubleshooting: [
                    "No phagocytosis observed: Check temperature (must be 37°C), ensure cells are alive, increase incubation time",
                    "Cannot distinguish yeast inside vs outside cells: Use better staining, focus carefully, look for membrane boundary",
                    "Too many yeast obscure view: Reduce yeast concentration",
                    "White cells rare or hard to find: Concentrate leukocytes (centrifuge, resuspend in smaller volume)",
                    "Yeast not visible: Ensure adequate staining, check focus and illumination"
                ]
            }
        },

        // ========================================
        // EXPERIMENT 2: ANTIBODY-ANTIGEN REACTIONS
        // ========================================
        
        ouchterlony_immunodiffusion: {
            name: "Ouchterlony Double Immunodiffusion - Antibody-Antigen Specificity",
            relatedTopics: ['humoral_immunity', 'antibodies', 'adaptive_immunity'],
            category: 'serological_techniques',
            historicalBackground: {
                scientist: "Örjan Ouchterlony",
                year: "1948",
                technique: "Double immunodiffusion in agar gel",
                innovation: "Simple, elegant method to visualize antibody-antigen reactions and assess antigenic relationships",
                principle: "Antibodies and antigens diffuse through gel from separate wells; precipitin lines form where they meet in optimal proportions",
                significance: "Revolutionized serology by allowing visual assessment of immune reactions without complex equipment",
                applications: "Identify antigens, assess antigenic relationships (identity, partial identity, non-identity), detect antibodies in patient sera",
                modernRelevance: "Still used in clinical immunology, forensic science, and quality control despite newer techniques (ELISA, Western blot)",
                relatedTechniques: "Radial immunodiffusion (Mancini method), immunoelectrophoresis, rocket immunoelectrophoresis"
            },
            labExperiment: {
                title: "Visualizing Antibody-Antigen Reactions: Precipitin Line Formation",
                hypothesis: "If antibodies are specific for their antigens, then antibodies will only form visible precipitin lines with their corresponding antigens and not with unrelated antigens",
                purpose: "Demonstrate antibody-antigen specificity using Ouchterlony double immunodiffusion and interpret patterns of antigenic relationships",
                background: {
                    precipitinReaction: "When antibody and antigen meet in optimal proportions, they form large immune complexes that precipitate",
                    zoneOfEquivalence: "Optimal antibody:antigen ratio for precipitation (neither in excess)",
                    diffusion: "Antibodies and antigens diffuse radially through agar gel",
                    precipitinLine: "Visible white line forms where antibody and antigen meet in equivalent proportions",
                    patterns: {
                        identity: "Antigens are identical - precipitin lines fuse",
                        partialIdentity: "Antigens share some epitopes - lines fuse with spur",
                        nonIdentity: "Antigens are different - lines cross"
                    }
                },
                variables: {
                    independent: "Types of antigens tested against specific antibody",
                    dependent: "Formation, position, and pattern of precipitin lines",
                    controlled: ["Agar concentration", "Well diameter and spacing", "Incubation temperature and time", "Antibody and antigen concentrations"]
                },
                materials: [
                    "Agarose or agar powder",
                    "Phosphate buffered saline (PBS), pH 7.2-7.4",
                    "Petri dishes (100 mm diameter)",
                    "Well cutter (cork borer 3-5 mm diameter) or template",
                    "Pasteur pipettes or micropipettes",
                    "Antigens (options):",
                    "  - Bovine serum albumin (BSA)",
                    "  - Human serum albumin (HSA)",
                    "  - Chicken ovalbumin",
                    "  - Horse serum proteins",
                    "  - Patient serum (for clinical testing)",
                    "Antibodies (antisera) - commercial or laboratory-prepared:",
                    "  - Anti-BSA antibody (rabbit or goat)",
                    "  - Anti-HSA antibody",
                    "  - Anti-ovalbumin antibody",
                    "Positive control: Known antigen-antibody pair",
                    "Negative control: PBS or unrelated antigen",
                    "Moist chamber (plastic box with damp paper towels)",
                    "Incubator (37°C) or room temperature",
                    "Light box or dark background for viewing precipitin lines",
                    "Camera for documentation",
                    "Optional: Coomassie blue or amido black stain for enhanced visualization"
                ],
                safetyPrecautions: [
                    "Handle sera as potentially infectious (may contain pathogens)",
                    "Wear gloves when handling antisera and antigens",
                    "Use only approved, tested antisera (avoid non-specific animal sera)",
                    "Dispose of contaminated materials in biohazard waste",
                    "Autoclave all materials before disposal",
                    "Some individuals may be allergic to animal proteins"
                ],
                procedure: [
                    "PREPARATION OF AGAR PLATES:",
                    "Prepare 1% agarose in PBS:",
                    "  - Add 1 g agarose to 100 ml PBS in flask",
                    "  - Heat while stirring until completely dissolved (microwave or hot plate)",
                    "  - Cool to ~55°C (can hold in warm water bath)",
                    "Pour ~15 ml molten agar into each Petri dish to create ~2-3 mm layer",
                    "Allow agar to solidify at room temperature (15-30 minutes)",
                    "Plates can be stored at 4°C in sealed bags (use within 1 week)",
                    "",
                    "CUTTING WELLS IN AGAR:",
                    "Use template or measure manually:",
                    "  - Central well for antibody (5 mm diameter)",
                    "  - 6 peripheral wells for antigens (3-4 mm diameter)",
                    "  - Distance from center well to peripheral wells: 8-10 mm",
                    "Cut wells using cork borer or well cutter (press firmly through agar)",
                    "Remove agar plugs carefully (use vacuum or fine forceps)",
                    "Ensure wells are clean and agar surface is intact",
                    "",
                    "EXPERIMENTAL DESIGN (Example Setup):",
                    "Label a diagram showing well positions",
                    "Center well: Anti-BSA antibody",
                    "Peripheral wells (clockwise from top):",
                    "  Well 1: BSA (10 mg/ml) - Positive control",
                    "  Well 2: BSA (5 mg/ml) - Same antigen, lower concentration",
                    "  Well 3: BSA (1 mg/ml) - Same antigen, lowest concentration",
                    "  Well 4: HSA (10 mg/ml) - Different but related antigen",
                    "  Well 5: Ovalbumin (10 mg/ml) - Unrelated antigen",
                    "  Well 6: PBS - Negative control",
                    "",
                    "LOADING SAMPLES:",
                    "Fill center well completely with antibody solution (~50 μl)",
                    "Avoid air bubbles, overfilling, or spillage onto agar surface",
                    "Fill peripheral wells completely with respective antigen solutions",
                    "Record which sample is in each well on your diagram",
                    "",
                    "INCUBATION:",
                    "Place lid on Petri dish",
                    "Put plate in moist chamber (prevents agar from drying)",
                    "Incubate at 37°C or room temperature",
                    "Allow diffusion to occur:",
                    "  - First visible lines: 24 hours",
                    "  - Optimal development: 48-72 hours",
                    "Check daily and photograph to document line formation",
                    "",
                    "OBSERVATION:",
                    "Examine plates over dark background or with transmitted light",
                    "Look for white precipitin lines in agar between wells",
                    "Precipitin lines indicate antibody-antigen complex formation",
                    "Note:",
                    "  - Presence or absence of lines",
                    "  - Position of lines relative to wells",
                    "  - Shape and continuity of lines",
                    "  - Patterns where multiple antigen lines meet",
                    "Draw or photograph results at 24, 48, and 72 hours",
                    "",
                    "ENHANCED VISUALIZATION (Optional):",
                    "After observing precipitin lines:",
                    "Wash plate with saline to remove unprecipitated proteins (24-48 hours washing, change saline multiple times)",
                    "Dry agar (press between filter paper, air dry, or dry in oven)",
                    "Stain with Coomassie blue or amido black:",
                    "  - Cover plate with stain solution (10-30 min)",
                    "  - Wash with destaining solution until background clear",
                    "  - Precipitin lines will stain dark blue",
                    "This makes lines more visible and permanent",
                    "",
                    "INTERPRETATION OF PATTERNS:",
                    "Between center antibody well and peripheral antigen wells, assess:",
                    "",
                    "REACTION OF IDENTITY:",
                    "Two adjacent antigen wells contain identical antigens",
                    "Precipitin lines fuse smoothly to form continuous arc",
                    "No spur or crossing",
                    "Interpretation: Antigens are immunologically identical",
                    "Example: BSA in wells 1, 2, 3 (different concentrations, same antigen)",
                    "",
                    "REACTION OF NON-IDENTITY:",
                    "Two adjacent antigen wells contain completely different antigens",
                    "Precipitin lines cross without fusing",
                    "Two independent lines form an X pattern",
                    "Interpretation: Antigens are immunologically distinct (no shared epitopes)",
                    "Example: BSA and ovalbumin (unrelated proteins)",
                    "",
                    "REACTION OF PARTIAL IDENTITY:",
                    "Two adjacent antigen wells contain related antigens (share some but not all epitopes)",
                    "Lines fuse but one line continues as a spur",
                    "Spur points toward well with fewer epitopes (less complete antigen)",
                    "Interpretation: Antigens share some epitopes but are not identical",
                    "Example: BSA and HSA (both albumins, closely related, share epitopes but not identical)"
                ],
                expectedResults: {
                    positiveControl: {
                        wells: "Anti-BSA (center) vs BSA (peripheral)",
                        result: "Strong, sharp precipitin line forms between wells",
                        timing: "Visible by 24-48 hours",
                        interpretation: "Antibody specifically recognizes and precipitates antigen"
                    },
                    concentrationEffect: {
                        wells: "BSA at 10, 5, and 1 mg/ml",
                        result: "Lines closer to center well with higher concentrations (antibody diffuses farther before meeting antigen in equivalent proportions)",
                        pattern: "Lines of identity - fuse smoothly",
                        interpretation: "Same antigen at different concentrations"
                    },
                    relatedAntigen: {
                        wells: "Anti-BSA vs HSA",
                        result: "Faint line or partial identity reaction (line with spur)",
                        interpretation: "Cross-reactivity due to shared epitopes (albumins are related)"
                    },
                    unrelatedAntigen: {
                        wells: "Anti-BSA vs ovalbumin",
                        result: "No line or non-identity (crossing lines if both antigens present)",
                        interpretation: "No cross-reactivity, antigens are distinct"
                    },
                    negativeControl: {
                        wells: "Anti-BSA vs PBS",
                        result: "No precipitin line",
                        interpretation: "Antibody does not react with PBS (no antigen)"
                    }
                },
                dataTable: [
                    ["Well", "Sample", "Expected Result", "Observed Result", "Interpretation"],
                    ["Center", "Anti-BSA", "-", "-", "Antibody source"],
                    ["1", "BSA 10 mg/ml", "Strong line", "Strong line at 6mm from center", "Positive - specific reaction"],
                    ["2", "BSA 5 mg/ml", "Moderate line, fusion with well 1", "Line at 5mm, fuses with well 1", "Identity - same antigen"],
                    ["3", "BSA 1 mg/ml", "Weak line, fusion with well 2", "Line at 4mm, fuses with well 2", "Identity - same antigen"],
                    ["4", "HSA 10 mg/ml", "Weak line or spur", "Faint line with spur", "Partial identity - related antigen"],
                    ["5", "Ovalbumin 10 mg/ml", "No line or crossing", "No line", "Non-identity - unrelated"],
                    ["6", "PBS", "No line", "No line", "Negative control"]
                ],
                observations: [
                    "Precipitin lines form where antibody and antigen meet in optimal proportions",
                    "Line position reflects concentration (higher antigen concentration → line closer to antibody well)",
                    "BSA at different concentrations shows lines of identity (fuse smoothly)",
                    "HSA shows weak cross-reactivity with anti-BSA (partial identity)",
                    "Ovalbumin shows no cross-reactivity (non-identity)",
                    "PBS shows no reaction (negative control)",
                    "Lines become sharper and more visible over 48-72 hours"
                ],
                scientificPrinciples: {
                    precipitinFormation: {
                        mechanism: "Antibodies are bivalent (2 binding sites), antigens are multivalent → cross-linking forms large lattices",
                        optimalRatio: "Precipitate forms in zone of equivalence (neither antibody nor antigen in excess)",
                        excessAntibody: "Small complexes, remain soluble",
                        excessAntigen: "Small complexes, remain soluble",
                        equivalence: "Large complexes precipitate out of solution"
                    },
                    diffusion: {
                        mechanism: "Fick's law - molecules diffuse down concentration gradients",
                        rate: "Depends on molecular size, concentration, temperature, gel pore size",
                        antibodies: "Larger (150 kDa IgG) diffuse slower",
                        antigens: "Variable size affects diffusion rate"
                    },
                    specificity: {
                        keyLock: "Antibody binding site (paratope) complementary to antigen epitope",
                        crossReactivity: "Related antigens share some epitopes → weak reactions",
                        specificity: "Each antibody recognizes one specific epitope"
                    }
                },
                analysis: {
                    linePosition: "Reflects relative concentrations and diffusion rates of antibody and antigen",
                    lineSharpness: "Sharp line = optimal proportions; diffuse line = suboptimal or weak reaction",
                    multipleLines: "Polyclonal antisera contain antibodies to multiple epitopes → multiple lines",
                    timeDependent: "Lines develop over time as molecules diffuse; may sharpen or broaden"
                },
                connectionToOuchterlony: {
                    innovation: "Simple, visual, requires minimal equipment",
                    applications: "Quality control (vaccine purity, antibody titer), forensics (species identification), clinical diagnostics",
                    limitations: "Semi-quantitative, requires 24-72 hours, limited sensitivity compared to ELISA",
                    legacy: "Fundamental technique in immunology education and research"
                },
                results: "Precipitin lines form between anti-BSA and BSA in a concentration-dependent manner. BSA samples at different concentrations show reactions of identity (fused lines). HSA shows partial identity (weak cross-reactivity, spur formation). Ovalbumin shows non-identity (no line). This demonstrates antibody-antigen specificity and the ability to assess antigenic relationships using immunodiffusion.",
                conclusions: [
                    "Antibodies are highly specific for their antigens",
                    "Precipitin reactions visualize antibody-antigen complexes",
                    "Antigenic relationships can be determined (identity, partial identity, non-identity)",
                    "Antigen concentration affects precipitin line position",
                    "Cross-reactivity occurs when antigens share epitopes",
                    "Ouchterlony technique is simple yet powerful for serological analysis"
                ],
                realWorldApplications: [
                    "Clinical diagnostics: Detect antibodies in patient sera (autoimmune diseases, infections)",
                    "Vaccine quality control: Ensure antigen purity and concentration",
                    "Forensic science: Species identification of biological samples",
                    "Food testing: Detect allergens or adulterants",
                    "Research: Characterize antibodies and antigens",
                    "Quality control: Test antibody specificity and titer"
                ],
                extensions: [
                    "Test patient sera for specific antibodies (e.g., anti-nuclear antibodies in lupus)",
                    "Compare antigens from different species (evolutionary relationships)",
                    "Quantify antigen concentration using radial immunodiffusion",
                    "Investigate effect of antibody concentration on line position",
                    "Perform immunoelectrophoresis (combine electrophoresis with immunodiffusion)",
                    "Develop monoclonal vs polyclonal antibodies (different line patterns)"
                ],
                troubleshooting: [
                    "No precipitin lines: Check antibody and antigen concentrations (may be too low or too high), ensure compatibility, increase incubation time",
                    "Lines very faint: Increase concentration, use staining, photograph over dark background",
                    "Lines diffuse or broad: Suboptimal concentrations, temperature too high, agar concentration wrong",
                    "Agar dries out: Use moist chamber, seal plate edges with tape",
                    "Wells collapse or merge: Agar too soft (increase concentration to 1.5%), cut wells more carefully",
                    "Background precipitation: Non-specific reactions, impure reagents, bacterial contamination"
                ]
            }
        },

        // ========================================
        // EXPERIMENT 3: BLOOD TYPING (ABO and Rh)
        // ========================================
        
        landsteiner_blood_groups: {
            name: "Landsteiner's Discovery of Blood Groups - ABO and Rh Typing",
            relatedTopics: ['humoral_immunity', 'antibodies', 'antigens'],
            category: 'immunohematology',
            historicalBackground: {
                scientist: "Karl Landsteiner",
                year: "1900-1901",
                discovery: "ABO blood group system",
                observation: "Landsteiner mixed serum and red blood cells from different individuals and observed agglutination (clumping) in some combinations but not others",
                classification: "Identified three blood types: A, B, and O (later, AB was discovered by Landsteiner's students)",
                principle: "RBCs have surface antigens (A or B); plasma contains antibodies against antigens NOT present on own RBCs",
                significance: "Explained why some blood transfusions were fatal (incompatible reactions), made safe blood transfusion possible",
                nobelPrize: "1930 Nobel Prize in Physiology or Medicine",
                RhDiscovery: "1940 - Landsteiner (with Wiener) discovered Rh factor",
                modernImpact: "Foundation of transfusion medicine and organ transplantation",
                quote: "One can justifiably speak of the existence of different human types with reference to the blood",
                application: "Blood typing is now routine before transfusions, pregnancy, organ transplants"
            },
            labExperiment: {
                title: "Blood Typing: Determining ABO and Rh Blood Groups",
                hypothesis: "If blood contains specific antigens on red blood cells and antibodies in plasma, then blood will agglutinate when mixed with incompatible antibodies, allowing determination of blood type",
                purpose: "Determine ABO and Rh blood types using agglutination reactions, and understand the immunological basis of blood compatibility",
                background: {
                    ABOsystem: {
                        antigens: "A and B antigens are carbohydrate structures on RBC surface",
                        antibodies: "Naturally occurring anti-A and anti-B antibodies in plasma",
                        rule: "Individuals lack antibodies against their own RBC antigens",
                        inheritance: "Codominant alleles IA, IB, and recessive i"
                    },
                    bloodTypes: {
                        typeA: "A antigens on RBCs, anti-B antibodies in plasma",
                        typeB: "B antigens on RBCs, anti-A antibodies in plasma",
                        typeAB: "A and B antigens on RBCs, no anti-A or anti-B antibodies (universal recipient)",
                        typeO: "No A or B antigens on RBCs, both anti-A and anti-B antibodies (universal donor)"
                    },
                    Rhsystem: {
                        antigen: "Rh(D) antigen on RBC surface (protein)",
                        RhPositive: "Have Rh(D) antigen (Rh+)",
                        RhNegative: "Lack Rh(D) antigen (Rh-)",
                        antibodies: "Anti-Rh antibodies NOT naturally occurring (only develop after exposure)",
                        significance: "Important for pregnancy (Rh incompatibility) and transfusions"
                    },
                    agglutination: "Antibodies cross-link RBCs → visible clumping (agglutination)",
                    compatibility: "Donor RBC antigens must not react with recipient plasma antibodies"
                },
                variables: {
                    independent: "Type of typing serum (anti-A, anti-B, anti-Rh)",
                    dependent: "Presence or absence of agglutination",
                    controlled: ["Blood sample", "Serum concentration", "Reaction time", "Temperature"]
                },
                materials: [
                    "Blood sample (fresh, anticoagulated with EDTA or citrate)",
                    "Options for blood source:",
                    "  - Student's own blood (finger prick)",
                    "  - Commercial blood typing kit",
                    "  - Synthetic blood typing materials (non-infectious)",
                    "Typing sera:",
                    "  - Anti-A serum (monoclonal antibodies against A antigen)",
                    "  - Anti-B serum (monoclonal antibodies against B antigen)",
                    "  - Anti-Rh(D) serum (monoclonal antibodies against Rh antigen)",
                    "Blood typing cards or slides (white background)",
                    "Sterile lancets (if using finger prick)",
                    "Alcohol swabs",
                    "Toothpicks or stirring sticks (one per reaction - avoid cross-contamination)",
                    "Timer",
                    "Gloves, lab coat",
                    "Biohazard disposal container",
                    "Optional: Microscope to observe individual cell agglutination"
                ],
                safetyPrecautions: [
                    "CRITICAL: Treat all blood as potentially infectious",
                    "Wear gloves at all times when handling blood",
                    "Use only your own blood or approved commercial samples",
                    "Disinfect finger with alcohol before and after lancet prick",
                    "Use sterile, single-use lancets",
                    "Do not share lancets or materials",
                    "Dispose of all blood-contaminated materials in biohazard waste",
                    "Clean work surface with 10% bleach after experiment",
                    "Wash hands thoroughly after removing gloves",
                    "If blood-borne pathogen exposure occurs, report immediately and seek medical attention",
                    "Consider using synthetic blood typing materials to avoid biohazard"
                ],
                procedure: [
                    "PREPARATION:",
                    "Read all safety precautions carefully",
                    "Put on gloves and lab coat",
                    "Set up clean work area with typing card and sera",
                    "Label three sections on typing card: Anti-A, Anti-B, Anti-Rh",
                    "",
                    "OBTAINING BLOOD SAMPLE:",
                    "Option 1 - Finger Prick (If Approved):",
                    "Clean fingertip with alcohol swab, allow to air dry",
                    "Use sterile lancet to prick side of fingertip (less painful than pad)",
                    "Wipe away first drop of blood (may contain tissue fluids)",
                    "Collect second drop for testing",
                    "",
                    "Option 2 - Pre-collected Blood:",
                    "Use blood provided by instructor (anticoagulated)",
                    "Mix tube gently by inversion (do not shake - causes hemolysis)",
                    "",
                    "Option 3 - Synthetic Blood:",
                    "Use synthetic blood typing materials per manufacturer instructions",
                    "",
                    "PERFORMING ABO TYPING:",
                    "Place one drop of blood in 'Anti-A' section of card",
                    "Place one drop of blood in 'Anti-B' section of card",
                    "Add one drop of Anti-A serum to 'Anti-A' blood drop",
                    "Add one drop of Anti-B serum to 'Anti-B' blood drop",
                    "Use separate toothpick for each section to mix blood and serum gently",
                    "Mix by stirring gently in circular motion for 30-60 seconds",
                    "Do NOT cross-contaminate between sections",
                    "",
                    "PERFORMING Rh TYPING:",
                    "Place one drop of blood in 'Anti-Rh' section",
                    "Add one drop of Anti-Rh(D) serum",
                    "Mix gently with clean toothpick for 30-60 seconds",
                    "Note: Rh reaction may be weaker and take longer to develop",
                    "",
                    "OBSERVATION:",
                    "Observe each section after 1-2 minutes",
                    "Look for agglutination (clumping) of red blood cells",
                    "Positive reaction: Visible clumping, granular appearance, RBCs aggregate",
                    "Negative reaction: Smooth, even red color, no clumping, RBCs dispersed",
                    "Compare to control (blood without serum) if needed",
                    "Record results for each typing serum",
                    "Optional: Examine under microscope (low power) to see individual clumps",
                    "",
                    "DETERMINING BLOOD TYPE:",
                    "Use table below to interpret results:",
                    "",
                    "ABO Type Determination:",
                    "Anti-A (+), Anti-B (-) → Type A",
                    "Anti-A (-), Anti-B (+) → Type B",
                    "Anti-A (+), Anti-B (+) → Type AB",
                    "Anti-A (-), Anti-B (-) → Type O",
                    "",
                    "Rh Type Determination:",
                    "Anti-Rh (+) → Rh positive (Rh+)",
                    "Anti-Rh (-) → Rh negative (Rh-)",
                    "",
                    "Complete Blood Type:",
                    "Combine ABO and Rh results",
                    "Examples: A+, B-, O+, AB-, etc.",
                    "",
                    "CONTROLS (Important for validity):",
                    "Positive control: Known blood type (should agglutinate with expected sera)",
                    "Negative control: Blood mixed with saline (no agglutination expected)",
                    "",
                    "CLEANUP:",
                    "Dispose of all blood-contaminated materials in biohazard waste",
                    "Disinfect work surface with 10% bleach",
                    "Remove gloves properly, wash hands thoroughly"
                ],
                expectedResults: {
                    typeA_positive: {
                        antiA: "Agglutination (+)",
                        antiB: "No agglutination (-)",
                        antiRh: "Agglutination (+)",
                        bloodType: "A+",
                        frequency: "~34% of population (US)"
                    },
                    typeA_negative: {
                        antiA: "Agglutination (+)",
                        antiB: "No agglutination (-)",
                        antiRh: "No agglutination (-)",
                        bloodType: "A-",
                        frequency: "~6%"
                    },
                    typeB_positive: {
                        antiA: "No agglutination (-)",
                        antiB: "Agglutination (+)",
                        antiRh: "Agglutination (+)",
                        bloodType: "B+",
                        frequency: "~9%"
                    },
                    typeB_negative: {
                        antiA: "No agglutination (-)",
                        antiB: "Agglutination (+)",
                        antiRh: "No agglutination (-)",
                        bloodType: "B-",
                        frequency: "~2%"
                    },
                    typeAB_positive: {
                        antiA: "Agglutination (+)",
                        antiB: "Agglutination (+)",
                        antiRh: "Agglutination (+)",
                        bloodType: "AB+",
                        frequency: "~4%",
                        note: "Universal recipient (can receive any blood type)"
                    },
                    typeAB_negative: {
                        antiA: "Agglutination (+)",
                        antiB: "Agglutination (+)",
                        antiRh: "No agglutination (-)",
                        bloodType: "AB-",
                        frequency: "~1% (rarest)"
                    },
                    typeO_positive: {
                        antiA: "No agglutination (-)",
                        antiB: "No agglutination (-)",
                        antiRh: "Agglutination (+)",
                        bloodType: "O+",
                        frequency: "~38% (most common in US)",
                        note: "Can donate RBCs to any Rh+ recipient"
                    },
                    typeO_negative: {
                        antiA: "No agglutination (-)",
                        antiB: "No agglutination (-)",
                        antiRh: "No agglutination (-)",
                        bloodType: "O-",
                        frequency: "~7%",
                        note: "Universal donor (can donate RBCs to anyone)"
                    }
                },
                dataTable: [
                    ["Blood Type", "Anti-A", "Anti-B", "Anti-Rh", "Can Donate To", "Can Receive From"],
                    ["A+", "+", "-", "+", "A+, AB+", "A+, A-, O+, O-"],
                    ["A-", "+", "-", "-", "A+, A-, AB+, AB-", "A-, O-"],
                    ["B+", "-", "+", "+", "B+, AB+", "B+, B-, O+, O-"],
                    ["B-", "-", "+", "-", "B+, B-, AB+, AB-", "B-, O-"],
                    ["AB+", "+", "+", "+", "AB+", "All types (universal recipient)"],
                    ["AB-", "+", "+", "-", "AB+, AB-", "A-, B-, AB-, O-"],
                    ["O+", "-", "-", "+", "A+, B+, AB+, O+", "O+, O-"],
                    ["O-", "-", "-", "-", "All types (universal donor)", "O-"]
                ],
                observations: [
                    "Agglutination appears as visible clumping or granular texture",
                    "Positive reactions are usually obvious within 1-2 minutes",
                    "Negative reactions remain smooth and evenly distributed",
                    "Rh reactions may be weaker than ABO reactions",
                    "Speed of agglutination reflects antigen-antibody affinity"
                ],
                immunologicalBasis: {
                    ABOantigens: {
                        structure: "Carbohydrate chains on RBC surface glycoproteins and glycolipids",
                        Hantigen: "Precursor (common to all)",
                        Aantigen: "H + N-acetylgalactosamine (added by A enzyme)",
                        Bantigen: "H + galactose (added by B enzyme)",
                        Oantigen: "Only H antigen (no A or B enzyme)"
                    },
                    naturalAntibodies: {
                        origin: "Produced in response to A/B-like antigens on gut bacteria and environment",
                        type: "Mainly IgM (large, pentameric, excellent agglutinator)",
                        development: "Appear in first months of life",
                        rule: "Never make antibodies against your own antigens (self-tolerance)"
                    },
                    Rhantigen: {
                        structure: "Transmembrane protein (not carbohydrate)",
                        D antigen: "Most immunogenic of Rh antigens",
                        antibodies: "Not naturally present, develop only after exposure (transfusion or pregnancy)",
                        type: "IgG (smaller, crosses placenta)"
                    },
                    agglutinationMechanism: {
                        step1: "Antibodies bind to antigens on RBC surface",
                        step2: "Bivalent antibodies cross-link multiple RBCs",
                        step3: "Large aggregates form (visible clumping)",
                        IgM: "Pentameric (10 binding sites) - very effective at agglutination",
                        IgG: "Bivalent but smaller - may need enhancement for visible agglutination"
                    }
                },
                transfusionCompatibility: {
                    donorRule: "Donor RBC antigens must not react with recipient plasma antibodies",
                    majorCrossmatch: "Donor RBCs + recipient plasma (most important - prevents acute hemolytic reaction)",
                    minorCrossmatch: "Donor plasma + recipient RBCs (less critical, diluted in recipient blood)",
                    universalDonor: "O- (no A, B, or Rh antigens) - RBCs can be given to anyone",
                    universalRecipient: "AB+ (no anti-A, anti-B, or anti-Rh antibodies) - can receive any blood",
                    emergency: "O- blood used when type unknown (universal donor)",
                    preferredTransfusion: "Type-specific blood (matches ABO and Rh)"
                },
                clinicalSignificance: {
                    transfusionReaction: {
                        acuteHemolytic: "Incompatible blood → antibodies destroy transfused RBCs → life-threatening",
                        symptoms: "Fever, chills, back pain, hemoglobinuria, shock, kidney failure",
                        prevention: "Careful blood typing and crossmatching before transfusion"
                    },
                    hemolytic DiseaseOfNewborn: {
                        mechanism: "Rh- mother carries Rh+ fetus → fetal RBCs enter maternal circulation → mother makes anti-Rh antibodies → in subsequent Rh+ pregnancies, IgG anti-Rh crosses placenta → destroys fetal RBCs",
                        consequence: "Fetal anemia, jaundice, brain damage, death",
                        prevention: "RhoGAM (anti-Rh antibodies) given to Rh- mothers to prevent sensitization",
                        ABO: "Usually less severe (IgM doesn't cross placenta as easily)"
                    },
                    organTransplantation: "ABO and HLA (MHC) matching required to prevent rejection"
                },
                analysis: {
                    inheritance: {
                        alleles: "IA (codes for A enzyme), IB (codes for B enzyme), i (codes for no enzyme)",
                        IAandIB: "Codominant (both expressed if present)",
                        i: "Recessive",
                        examples: [
                            "IAIA or IAi → Type A",
                            "IBIB or IBi → Type B",
                            "IAIB → Type AB",
                            "ii → Type O"
                        ],
                        Rh: "Dominant D allele (Rh+), recessive d allele (Rh-)",
                        genetics: "Can predict offspring blood types from parental types"
                    },
                    population: "Blood type frequencies vary by ethnicity and geography"
                },
                connectionToLandsteiner: {
                    revolutionizedMedicine: "Made blood transfusion safe and routine",
                    foundationOfImmunohematology: "Established that individuals have different immunological profiles",
                    extendedDiscoveries: "Led to discovery of many other blood group systems (MN, Kell, Duffy, etc.)",
                    forensicScience: "Blood typing used in paternity testing and criminal investigations (now largely replaced by DNA)"
                },
                results: "Blood type determined by observing agglutination patterns with anti-A, anti-B, and anti-Rh sera. Presence of agglutination indicates presence of corresponding antigen on RBCs. Results allow determination of ABO and Rh blood groups, which are critical for safe blood transfusion and understanding immunological compatibility.",
                conclusions: [
                    "Blood type is determined by antigens on RBC surface and antibodies in plasma",
                    "Agglutination occurs when antibodies bind to corresponding antigens",
                    "ABO system has four blood types (A, B, AB, O) based on A and B antigens",
                    "Rh system classifies blood as positive or negative based on Rh(D) antigen",
                    "Blood typing is essential for safe transfusions and organ transplants",
                    "Landsteiner's discovery revolutionized medicine by enabling safe blood transfusion"
                ],
                realWorldApplications: [
                    "Blood transfusion - ensure donor-recipient compatibility",
                    "Pregnancy management - prevent hemolytic disease of newborn",
                    "Organ transplantation - ABO matching required",
                    "Paternity testing - can exclude paternity (DNA more accurate)",
                    "Forensic science - identify individuals from blood evidence",
                    "Blood banking - inventory management of different blood types",
                    "Anthropology - study population genetics and migration patterns"
                ],
                extensions: [
                    "Perform forward and reverse typing (test RBCs with sera AND test plasma with known RBCs)",
                    "Investigate other blood group systems (MN, Kell, Duffy)",
                    "Study genetics of blood type inheritance (Punnett squares)",
                    "Research blood type distribution in different populations",
                    "Examine historical cases of transfusion reactions before blood typing",
                    "Investigate blood substitutes and artificial blood",
                    "Study Bombay phenotype (rare variant lacking H antigen)"
                ],
                troubleshooting: [
                    "Weak or no agglutination: Insufficient mixing, old/degraded sera, weak antigen expression, observe longer",
                    "False positive: Blood too concentrated (dilute with saline), spontaneous agglutination (warm sample to 37°C first)",
                    "Hemolysis (pink color): Blood damaged during collection, old blood, contamination",
                    "Unclear results: Repeat test with fresh reagents, use microscope to observe clumping",
                    "Rh typing difficult: Rh reactions weaker, may need longer incubation or microscopic examination"
                ]
            }
        },

        // ========================================
        // EXPERIMENT 4: ELISA (Enzyme-Linked Immunosorbent Assay)
        // ========================================
        
        engvall_perlmann_elisa: {
            name: "ELISA Technique - Sensitive Detection of Antibodies and Antigens",
            relatedTopics: ['humoral_immunity', 'antibodies', 'diagnostic_immunology'],
            category: 'immunoassay',
            historicalBackground: {
                scientists: "Eva Engvall and Peter Perlmann (Sweden), Anton Schuurs and Bauke van Weemen (Netherlands)",
                year: "1971",
                development: "Independently developed ELISA technique",
                principle: "Enzyme-linked antibodies provide amplified, colorimetric detection of antigen-antibody binding",
                innovation: "Combined specificity of antibodies with sensitivity of enzyme amplification",
                advantage: "Replaced radioimmunoassay (RIA) - no radioactive materials, safer, more stable reagents",
                significance: "Became gold standard for detecting and quantifying antibodies, antigens, proteins, hormones",
                sensitivity: "Can detect picogram (10⁻¹²g) quantities",
                applications: "HIV testing, pregnancy tests, drug screening, disease diagnostics, research",
                nobelPrizeConnection: "Built on work of Rosalyn Yalow (RIA, 1977 Nobel Prize)",
                modernImpact: "Foundation of modern diagnostic immunology, billions of tests performed annually worldwide"
            },
            labExperiment: {
                title: "ELISA: Detecting Antibodies Using Enzyme-Linked Immunoassay",
                hypothesis: "If patient serum contains antibodies against a specific antigen, then enzyme-linked detection antibodies will bind and produce a color signal proportional to antibody concentration",
                purpose: "Perform indirect ELISA to detect and quantify specific antibodies in serum samples, demonstrating highly sensitive immunodetection",
                background: {
                    ELISAtypes: {
                        direct: "Antigen coated on plate → enzyme-labeled antibody binds directly",
                        indirect: "Antigen coated → primary antibody binds → enzyme-labeled secondary antibody binds (more sensitive)",
                        sandwich: "Capture antibody coated → antigen binds → detection antibody binds (quantify antigen)",
                        competitive: "Limited antibody competes for antigen (sample antigen vs coated antigen)"
                    },
                    components: {
                        solidPhase: "96-well microplate (plastic binds proteins non-specifically)",
                        coating: "Antigen or antibody adsorbed to plate surface",
                        blocking: "Block unoccupied sites with protein (BSA, milk) to prevent non-specific binding",
                        enzymeLabel: "Horseradish peroxidase (HRP) or alkaline phosphatase (AP)",
                        substrate: "Chromogenic substrate produces colored product (measured by spectrophotometer)",
                        detection: "Color intensity proportional to amount of antibody/antigen"
                    },
                    principle: "Enzyme catalyzes conversion of colorless substrate to colored product → signal amplification",
                    sensitivity: "One enzyme molecule produces many product molecules → detects very low concentrations"
                },
                variables: {
                    independent: "Presence and concentration of specific antibodies in test serum",
                    dependent: "Color intensity (absorbance) of enzyme product",
                    controlled: ["Antigen coating concentration", "Blocking efficiency", "Antibody dilutions", "Incubation times and temperatures", "Washing steps", "Substrate development time"]
                },
                materials: [
                    "96-well ELISA microplate (flat-bottom, high-binding)",
                    "Coating antigen (e.g., tetanus toxoid, BSA, or test antigen of choice)",
                    "Coating buffer (carbonate-bicarbonate buffer, pH 9.6)",
                    "Blocking solution (5% non-fat milk in PBS or 1% BSA in PBS)",
                    "Wash buffer (PBS with 0.05% Tween-20, PBST)",
                    "Test serum samples:",
                    "  - Positive control: Serum known to contain specific antibodies",
                    "  - Negative control: Serum without specific antibodies (or PBS)",
                    "  - Unknown samples: Test sera",
                    "Secondary antibody conjugated to enzyme:",
                    "  - Anti-human IgG-HRP (horseradish peroxidase)",
                    "  - Diluted per manufacturer instructions",
                    "Substrate solution:",
                    "  - For HRP: TMB (3,3',5,5'-tetramethylbenzidine)",
                    "  - For AP: pNPP (p-nitrophenyl phosphate)",
                    "Stop solution (for HRP-TMB: 2M H₂SO₄ or 1M HCl)",
                    "Multichannel pipette (8 or 12 channel) or repeating pipette",
                    "Pipettes and tips",
                    "Plate washer (or squeeze bottle for manual washing)",
                    "Plate reader (spectrophotometer for microplates)",
                    "Incubator or water bath (37°C)",
                    "Plate sealer or plastic wrap",
                    "Microplate shaker (optional, for better mixing)"
                ],
                safetyPrecautions: [
                    "Treat serum samples as potentially infectious",
                    "Wear gloves, lab coat, safety goggles",
                    "Handle H₂SO₄ stop solution carefully (corrosive)",
                    "TMB substrate is irritant - avoid skin contact",
                    "Dispose of contaminated materials in biohazard waste",
                    "Clean spills immediately with appropriate disinfectant",
                    "Wash hands thoroughly after experiment"
                ],
                procedure: [
                    "DAY 1: COATING PLATE WITH ANTIGEN",
                    "Dilute coating antigen in carbonate-bicarbonate buffer (typically 1-10 μg/ml)",
                    "Add 100 μl of antigen solution to each well of microplate",
                    "Use multichannel pipette for efficiency",
                    "Plan plate layout:",
                    "  - Columns for positive control, negative control, unknowns (in duplicate or triplicate)",
                    "  - Leave blank wells (no antigen) as background control",
                    "Cover plate with sealer or plastic wrap",
                    "Incubate overnight at 4°C (or 2 hours at 37°C)",
                    "Antigen adsorbs to plastic surface via hydrophobic interactions",
                    "",
                    "DAY 2: BLOCKING",
                    "Remove antigen solution (flick plate into sink or aspirate)",
                    "Wash wells 3 times with wash buffer (PBST):",
                    "  - Fill wells completely with wash buffer (~300 μl/well)",
                    "  - Incubate 30 seconds",
                    "  - Flick out or aspirate",
                    "  - Repeat 2 more times",
                    "  - Tap plate on paper towels to remove residual liquid",
                    "Add 200 μl blocking solution (5% milk in PBS or 1% BSA) to each well",
                    "Incubate 1-2 hours at 37°C or room temperature",
                    "Blocking prevents antibodies from binding non-specifically to plastic",
                    "",
                    "PRIMARY ANTIBODY (Test Serum) INCUBATION:",
                    "Remove blocking solution, wash 3 times with PBST",
                    "Dilute test sera in blocking solution:",
                    "  - Positive control serum: 1:100, 1:1000, 1:10,000 (serial dilutions)",
                    "  - Negative control serum: same dilutions",
                    "  - Unknown samples: 1:100 or as appropriate",
                    "Add 100 μl diluted serum to appropriate wells",
                    "Include blank (no serum, blocking solution only)",
                    "Incubate 1-2 hours at 37°C (or overnight at 4°C for higher sensitivity)",
                    "During this step, antibodies in serum bind to coated antigen",
                    "",
                    "SECONDARY ANTIBODY (Enzyme-Conjugated) INCUBATION:",
                    "Remove serum, wash wells 3-5 times with PBST (thorough washing critical!)",
                    "Dilute secondary antibody (anti-human IgG-HRP) in blocking solution per manufacturer (typically 1:5,000 to 1:20,000)",
                    "Add 100 μl diluted secondary antibody to each well",
                    "Incubate 1 hour at 37°C or room temperature",
                    "Secondary antibody binds to Fc region of human IgG (from test serum)",
                    "HRP enzyme provides signal amplification",
                    "",
                    "SUBSTRATE DEVELOPMENT (Color Reaction):",
                    "Remove secondary antibody, wash wells 5 times with PBST (remove all unbound antibody!)",
                    "After final wash, tap plate firmly on paper towels to remove all liquid",
                    "Prepare TMB substrate solution per manufacturer instructions (keep in dark, use fresh)",
                    "Add 100 μl TMB substrate to each well",
                    "Incubate in dark at room temperature",
                    "Observe color development: wells with bound antibody turn blue",
                    "Typical development time: 5-30 minutes (watch carefully)",
                    "",
                    "STOPPING REACTION:",
                    "When sufficient color develops (before saturation):",
                    "Add 50 μl stop solution (2M H₂SO₄) to each well",
                    "Color changes from blue to yellow",
                    "Stop solution halts enzyme reaction by changing pH",
                    "",
                    "READING ABSORBANCE:",
                    "Gently tap plate to mix",
                    "Read absorbance at 450 nm using plate reader (450 nm for yellow TMB product)",
                    "Use 620 nm as reference wavelength (corrects for plate irregularities)",
                    "Record absorbance values for all wells",
                    "Calculate average absorbance for duplicates/triplicates",
                    "",
                    "DATA ANALYSIS:",
                    "Subtract blank absorbance (wells without antigen or serum) from all values",
                    "Calculate ratio: (Test sample absorbance) / (Negative control absorbance)",
                    "Ratio > 2-3 typically considered positive",
                    "Alternatively, use positive control to set threshold (e.g., mean + 2 SD of negative controls)",
                    "For quantification: compare to standard curve (serial dilutions of known positive serum)"
                ],
                expectedResults: {
                    positiveControl: {
                        observation: "Strong yellow color after adding stop solution",
                        absorbance: "1.0-2.5 (depends on antibody concentration and development time)",
                        interpretation: "Serum contains antibodies specific for coated antigen"
                    },
                    negativeControl: {
                        observation: "Little to no color development",
                        absorbance: "0.05-0.2 (low background)",
                        interpretation: "No specific antibodies present"
                    },
                    blank: {
                        observation: "No color",
                        absorbance: "≈0.05",
                        interpretation: "Background (non-specific binding)"
                    },
                    unknownPositive: {
                        observation: "Yellow color, intermediate to strong",
                        absorbance: "0.5-2.0 (above threshold)",
                        interpretation: "Sample contains specific antibodies"
                    },
                    unknownNegative: {
                        observation: "Little color, similar to negative control",
                        absorbance: "<0.3 (below threshold)",
                        interpretation: "Sample does not contain specific antibodies"
                    },
                    dilutionEffect: "Higher serum dilutions → lower absorbance (dose-response relationship)"
                },
                dataTable: [
                    ["Well", "Sample", "Dilution", "Absorbance 450nm", "Blank-Corrected", "Interpretation"],
                    ["A1", "Blank (no serum)", "-", "0.05", "0.00", "Background"],
                    ["B1", "Positive control", "1:100", "1.85", "1.80", "Strong positive"],
                    ["B2", "Positive control", "1:1000", "0.92", "0.87", "Positive"],
                    ["B3", "Positive control", "1:10,000", "0.35", "0.30", "Weak positive"],
                    ["C1", "Negative control", "1:100", "0.08", "0.03", "Negative"],
                    ["D1", "Unknown 1", "1:100", "1.24", "1.19", "Positive"],
                    ["E1", "Unknown 2", "1:100", "0.12", "0.07", "Negative"],
                    ["F1", "Unknown 3", "1:100", "0.65", "0.60", "Positive"]
                ],
                standardCurve: [
                    "Plot absorbance vs. log(dilution) for positive control",
                    "Typically shows sigmoidal curve (S-shape)",
                    "Linear range in middle portion",
                    "Use to quantify antibody concentration in unknowns",
                    "Compare unknown absorbance to standard curve → determine antibody titer"
                ],
                observations: [
                    "Positive control shows strong color development in dose-dependent manner",
                    "Higher antibody concentration (lower dilution) → stronger color",
                    "Negative control shows minimal color (background only)",
                    "Unknown samples can be classified as positive or negative based on threshold",
                    "Proper washing is critical to reduce background",
                    "Color intensity correlates with antibody concentration"
                ],
                molecularBasis: {
                    antigenBinding: "Antigen adsorbs to plastic plate via hydrophobic interactions",
                    blocking: "Blocks remaining protein-binding sites to prevent non-specific antibody binding",
                    primaryAntibody: "Specific antibodies in serum recognize and bind antigen epitopes",
                    secondaryAntibody: "Anti-species IgG antibody (e.g., anti-human IgG) binds Fc region of primary antibody",
                    enzymeAmplification: "HRP catalyzes oxidation of TMB substrate → colored product",
                    colorReaction: "HRP + H₂O₂ + TMB → oxidized TMB (blue) → add H₂SO₄ → yellow (stable)",
                    sensitivity: "One enzyme molecule produces thousands of product molecules → signal amplification"
                },
                analysis: {
                    quantitative: "Absorbance proportional to antibody concentration (within linear range)",
                    sensitivity: "Can detect nanogram to picogram quantities of antibody",
                    specificity: "High - determined by antigen-antibody interaction",
                    reproducibility: "Good when standardized (duplicates/triplicates should agree)",
                    cutoffDetermination: "Use mean + 2 or 3 SD of negative controls as threshold",
                    antibodyTiter: "Highest dilution giving positive result (e.g., titer = 1:10,000)"
                },
                connectionToEngvallPerlmann: {
                    innovation: "Replaced radioactive labels with enzymes (safer, more stable)",
                    impact: "Made immunoassays accessible to all laboratories",
                    applications: "Diagnostic testing, research, quality control",
                    evolution: "Led to development of lateral flow assays (pregnancy tests, COVID tests)"
                },
                results: "ELISA successfully detects specific antibodies in serum samples with high sensitivity and specificity. Positive samples show strong color development (absorbance >0.5-1.0), while negative samples show minimal color (absorbance <0.2). Antibody concentration can be quantified using standard curve. The assay demonstrates the power of enzyme-linked immunodetection for clinical diagnostics.",
                conclusions: [
                    "ELISA is highly sensitive method for detecting antibodies and antigens",
                    "Enzyme amplification provides signal proportional to antibody concentration",
                    "Specificity comes from antigen-antibody interaction",
                    "Quantitative results can be obtained using standard curves",
                    "ELISA is foundation of modern diagnostic immunology",
                    "Technique is versatile and adaptable to many targets"
                ],
                clinicalApplications: {
                    infectiousDiseases: {
                        HIV: "Detect anti-HIV antibodies (screening test)",
                        hepatitis: "Detect anti-HBV, anti-HCV antibodies",
                        COVID19: "Detect anti-SARS-CoV-2 antibodies (serology)",
                        Lyme: "Detect anti-Borrelia antibodies",
                        syphilis: "Detect anti-Treponema antibodies"
                    },
                    autoimmuneDiseases: {
                        lupus: "Detect anti-nuclear antibodies (ANA), anti-dsDNA",
                        rheumatoidArthritis: "Detect rheumatoid factor (RF), anti-CCP",
                        celiac: "Detect anti-tissue transglutaminase, anti-gliadin antibodies",
                        thyroid: "Detect anti-TPO, anti-thyroglobulin antibodies"
                    },
                    allergies: {
                        IgEtesting: "Detect allergen-specific IgE antibodies",
                        foodAllergies: "Detect IgE against specific foods"
                    },
                    hormones: {
                        pregnancy: "Detect hCG (home pregnancy tests use related technology)",
                        thyroid: "Measure TSH, T3, T4",
                        insulin: "Measure insulin levels in diabetes"
                    },
                    research: {
                        antibodyProduction: "Quantify antibody responses to vaccines or infections",
                        proteinQuantification: "Measure cytokines, growth factors, biomarkers",
                        drugDevelopment: "Screen compounds, measure drug levels"
                    }
                },
                realWorldApplications: [
                    "HIV screening - detect antibodies in donated blood and patient diagnosis",
                    "COVID-19 serology - determine past infection and immune response",
                    "Pregnancy testing - detect hCG hormone (sandwich ELISA)",
                    "Allergy testing - identify allergen-specific IgE",
                    "Autoimmune diagnostics - detect autoantibodies",
                    "Drug testing - detect drugs or drug metabolites",
                    "Food safety - detect allergens, toxins, pathogens",
                    "Research - quantify proteins, cytokines, antibodies"
                ],
                extensions: [
                    "Perform sandwich ELISA to quantify antigen (e.g., cytokine levels)",
                    "Compare different types of ELISA (direct, indirect, sandwich, competitive)",
                    "Optimize ELISA parameters (coating concentration, blocking agents, incubation times)",
                    "Develop ELISA for new target (e.g., allergen-specific IgE, autoantibody)",
                    "Investigate cross-reactivity between related antigens",
                    "Study effect of serum storage and handling on antibody stability",
                    "Compare ELISA to other immunoassays (Western blot, RIA, flow cytometry)"
                ],
                troubleshooting: [
                    "High background: Inadequate washing, blocking insufficient, antibody concentration too high → wash more thoroughly, increase blocking time, dilute antibodies more",
                    "No signal: Antigen not coating, antibodies not binding, enzyme inactive, substrate expired → check reagents, optimize coating conditions, use fresh substrate",
                    "Weak signal: Antibody concentration too low, incubation time too short, antigen concentration too low → increase antibody concentration, extend incubation, optimize coating",
                    "High variability: Poor pipetting technique, plate not level during incubation, evaporation → use multichannel pipette, ensure level surface, seal plate well",
                    "Edge effects: Temperature gradient, evaporation → leave outer wells empty or filled with buffer only, use plate sealer"
                ]
            }
        },

        // ========================================
        // EXPERIMENT 5: COMPLEMENT FIXATION TEST
        // ========================================
        
        bordet_complement_fixation: {
            name: "Bordet-Gengou Complement Fixation Test - Detecting Antibodies via Complement",
            relatedTopics: ['complement_system', 'humoral_immunity', 'antibodies'],
            category: 'serological_immunology',
            historicalBackground: {
                scientists: "Jules Bordet and Octave Gengou",
                year: "1901",
                discovery: "Complement fixation phenomenon",
                observation: "When antibody binds antigen, it activates (fixes) complement from serum; fixed complement is no longer available to lyse indicator RBCs",
                principle: "Indirect detection of antibody-antigen complexes by measuring consumption of complement",
                significance: "First method to detect antibodies that don't cause visible precipitation",
                nobelPrize: "Jules Bordet - 1919 Nobel Prize in Physiology or Medicine (for work on immunity, complement, and whooping cough)",
                historicalUse: "Wassermann test for syphilis (1906), diagnosis of many infectious diseases",
                complementDiscovery: "Bordet discovered complement as heat-labile serum factor that enhances antibody bacteriolysis",
                modernStatus: "Largely replaced by ELISA and other methods, but still used for some applications (viral serology, fungal infections)",
                legacy: "Demonstrated that antibodies have multiple effector functions beyond neutralization"
            },
            labExperiment: {
                title: "Complement Fixation Test: Detecting Antibodies Through Complement Consumption",
                hypothesis: "If serum contains antibodies against a specific antigen, then antibody-antigen complexes will fix (consume) complement, preventing it from lysing indicator red blood cells",
                purpose: "Perform complement fixation test to detect specific antibodies in serum by measuring complement consumption, demonstrating antibody effector function",
                background: {
                    complementFixation: "Process by which antibody-antigen complexes activate complement cascade (classical pathway)",
                    principle: {
                        positive: "Antibody present → binds antigen → fixes complement → no complement left → indicator RBCs NOT lysed → RBCs remain intact (positive test)",
                        negative: "No antibody → no antigen-antibody complex → complement NOT fixed → free complement lyses indicator RBCs → clear supernatant (negative test)"
                    },
                    components: {
                        testAntigen: "Specific antigen to test for (e.g., viral antigen, bacterial antigen)",
                        testSerum: "Patient serum (may contain specific antibodies)",
                        complement: "Guinea pig serum (source of complement proteins)",
                        indicatorSystem: "Sheep RBCs + anti-sheep RBC antibodies (hemolysin)",
                        readout: "Hemolysis (lysis of RBCs) vs no hemolysis"
                    },
                    complementSource: "Guinea pig serum (rich in complement, human complement often inactivated)",
                    temperature: "Complement is heat-labile (inactivated at 56°C for 30 min)"
                },
                variables: {
                    independent: "Presence of specific antibodies in test serum",
                    dependent: "Degree of hemolysis of indicator RBCs",
                    controlled: ["Complement concentration", "Antigen concentration", "Antibody dilution", "Incubation times and temperatures", "Indicator system concentration"]
                },
                materials: [
                    "Test antigen (e.g., viral antigen, Candida antigen, etc.)",
                    "Test sera:",
                    "  - Positive control: Serum known to contain specific antibodies",
                    "  - Negative control: Serum without specific antibodies",
                    "  - Unknown samples",
                    "Complement (guinea pig serum):",
                    "  - Fresh or lyophilized (reconstitute per instructions)",
                    "  - Store frozen, avoid repeated freeze-thaw",
                    "Indicator system:",
                    "  - Sheep red blood cells (SRBCs), 2% suspension in buffer",
                    "  - Hemolysin (anti-sheep RBC antibody, usually rabbit anti-SRBC)",
                    "  - Sensitized SRBCs (SRBCs + hemolysin, prepared fresh)",
                    "Veronal-buffered saline (VBS) or PBS",
                    "Test tubes or microplates",
                    "Water baths (37°C and 56°C)",
                    "Centrifuge",
                    "Pipettes and tips",
                    "Spectrophotometer (for quantitative hemolysis measurement at 540 nm)"
                ],
                safetyPrecautions: [
                    "Treat all sera as potentially infectious",
                    "Sheep blood may cause allergic reactions in sensitive individuals",
                    "Wear gloves, lab coat, safety goggles",
                    "Dispose of blood-contaminated materials in biohazard waste",
                    "Autoclave all materials before disposal",
                    "Guinea pig serum may contain allergens",
                    "Handle complement carefully (expensive reagent)"
                ],
                procedure: [
                    "PREPARATION (Day before or morning of test):",
                    "Inactivate complement in test sera:",
                    "  - Heat test sera at 56°C for 30 minutes in water bath",
                    "  - This destroys complement in test serum (prevents interference)",
                    "  - Cool to room temperature before use",
                    "Prepare sheep RBC suspension:",
                    "  - Wash sheep blood 3 times with VBS (centrifuge, discard supernatant, resuspend)",
                    "  - Prepare 2% suspension (2 ml packed RBCs + 98 ml VBS)",
                    "  - Store at 4°C, use within 1 week",
                    "Prepare hemolysin (sensitizing antibody):",
                    "  - Dilute anti-sheep RBC antibody per manufacturer instructions (typically 1:1000-1:2000)",
                    "Prepare sensitized sheep RBCs (indicator system):",
                    "  - Mix equal volumes of 2% SRBCs and diluted hemolysin",
                    "  - Incubate 30 minutes at 37°C",
                    "  - Use fresh (within 2-4 hours)",
                    "Prepare complement:",
                    "  - Thaw frozen guinea pig serum on ice (if frozen)",
                    "  - Keep on ice, use immediately (complement degrades at room temperature)",
                    "  - Dilute per standardization (see below)",
                    "",
                    "COMPLEMENT TITRATION (Standardization - Important!):",
                    "Determine optimal complement dose (should give complete hemolysis of indicator system):",
                    "Prepare serial dilutions of complement (1:10, 1:20, 1:30, 1:40, 1:50)",
                    "To each tube add:",
                    "  - 0.5 ml diluted complement",
                    "  - 0.5 ml VBS (no antigen or antibody)",
                    "  - 0.5 ml sensitized SRBCs",
                    "Incubate 30 min at 37°C",
                    "Centrifuge, observe supernatant:",
                    "  - Red supernatant = hemolysis (RBCs lysed, hemoglobin released)",
                    "  - Clear supernatant = no hemolysis",
                    "Select complement dilution giving complete hemolysis (100% hemolysis)",
                    "Use this dilution + 10-20% more for test (ensures adequate complement)",
                    "",
                    "TEST SETUP:",
                    "Set up test tubes as follows (all in duplicate):",
                    "",
                    "Tube 1 - Positive Control:",
                    "0.25 ml test antigen",
                    "0.25 ml positive control serum (heat-inactivated, diluted 1:4 or 1:8)",
                    "0.5 ml complement (optimal dilution)",
                    "",
                    "Tube 2 - Negative Control:",
                    "0.25 ml test antigen",
                    "0.25 ml negative control serum (heat-inactivated, diluted 1:4)",
                    "0.5 ml complement",
                    "",
                    "Tube 3 - Unknown Sample(s):",
                    "0.25 ml test antigen",
                    "0.25 ml unknown serum (heat-inactivated, diluted 1:4)",
                    "0.5 ml complement",
                    "",
                    "Tube 4 - Complement Control (Very Important!):",
                    "0.25 ml VBS (no antigen)",
                    "0.25 ml VBS (no serum)",
                    "0.5 ml complement",
                    "(This tests if complement alone is active and lyses indicator RBCs)",
                    "",
                    "Tube 5 - Cell Control:",
                    "0.5 ml VBS",
                    "(No complement - indicator RBCs should NOT lyse)",
                    "",
                    "FIRST INCUBATION (Complement Fixation Phase):",
                    "Mix all tubes gently",
                    "Incubate 1 hour at 37°C (or per protocol - may be 30 min to overnight at 4°C)",
                    "During this time: If antibody present → binds antigen → complement fixes",
                    "",
                    "ADDING INDICATOR SYSTEM:",
                    "After first incubation, add to ALL tubes:",
                    "0.5 ml sensitized sheep RBCs (prepared earlier)",
                    "Mix gently",
                    "",
                    "SECOND INCUBATION (Hemolysis Phase):",
                    "Incubate 30 minutes at 37°C",
                    "During this time: Free complement lyses indicator RBCs",
                    "",
                    "READING RESULTS:",
                    "Centrifuge tubes (1000g, 2 min) to pellet intact RBCs",
                    "Observe supernatant color:",
                    "  - Clear (no color) = No hemolysis = RBCs intact = Complement was FIXED = POSITIVE (antibody present)",
                    "  - Red = Hemolysis = RBCs lysed = Complement was FREE = NEGATIVE (no antibody)",
                    "",
                    "Grading (qualitative):",
                    "4+ (Positive): No hemolysis, clear supernatant, RBC button at bottom",
                    "3+: Slight hemolysis, faint pink supernatant",
                    "2+: Partial hemolysis, pink supernatant",
                    "1+: Mostly hemolyzed, red supernatant",
                    "0 (Negative): Complete hemolysis, deep red supernatant, no RBC button",
                    "",
                    "Quantitative (optional):",
                    "Read absorbance of supernatant at 540 nm",
                    "Higher absorbance = more hemolysis = more complement available = less fixation",
                    "Calculate % hemolysis: (Sample A540 / Complete hemolysis control A540) × 100",
                    "",
                    "CONTROLS INTERPRETATION:",
                    "Complement control: Should show complete hemolysis (complement is active)",
                    "Cell control: Should show no hemolysis (RBCs stable without complement)",
                    "Positive control: Should show no hemolysis (antibody fixes complement)",
                    "Negative control: Should show complete hemolysis (no antibody, complement free to lyse indicator)"
                ],
                expectedResults: {
                    positiveControl: {
                        observation: "No hemolysis - clear supernatant, RBC pellet at bottom",
                        interpretation: "Antibody present → formed antigen-antibody complex → fixed complement → no complement left to lyse indicator RBCs",
                        score: "4+ (positive)"
                    },
                    negativeControl: {
                        observation: "Complete hemolysis - red supernatant, minimal RBC pellet",
                        interpretation: "No antibody → no antigen-antibody complex → complement NOT fixed → free complement lysed indicator RBCs",
                        score: "0 (negative)"
                    },
                    complementControl: {
                        observation: "Complete hemolysis - red supernatant",
                        interpretation: "Complement is active and can lyse sensitized RBCs",
                        importance: "Validates that complement is functional"
                    },
                    cellControl: {
                        observation: "No hemolysis - clear supernatant, RBC pellet",
                        interpretation: "RBCs are stable in absence of complement",
                        importance: "Validates that hemolysis is complement-dependent"
                    },
                    unknownPositive: {
                        observation: "No or minimal hemolysis (clear to slightly pink)",
                        interpretation: "Sample contains antibodies against test antigen",
                        score: "3-4+"
                    },
                    unknownNegative: {
                        observation: "Complete hemolysis (red supernatant)",
                        interpretation: "Sample does not contain antibodies against test antigen",
                        score: "0"
                    }
                },
                dataTable: [
                    ["Tube", "Antigen", "Test Serum", "Complement", "Indicator RBCs", "Result", "Interpretation"],
                    ["1", "+", "Pos. control", "+", "+", "No hemolysis (4+)", "Antibody present (positive)"],
                    ["2", "+", "Neg. control", "+", "+", "Hemolysis (0)", "No antibody (negative)"],
                    ["3", "+", "Unknown 1", "+", "+", "No hemolysis (4+)", "Antibody present (positive)"],
                    ["4", "+", "Unknown 2", "+", "+", "Hemolysis (0)", "No antibody (negative)"],
                    ["5", "-", "None", "+", "+", "Hemolysis (0)", "Complement active (valid)"],
                    ["6", "-", "None", "-", "+", "No hemolysis", "RBCs stable (valid)"]
                ],
                observations: [
                    "Positive samples show no hemolysis (clear supernatant, RBC pellet)",
                    "Negative samples show complete hemolysis (red supernatant)",
                    "Complement control must show hemolysis (validates complement activity)",
                    "Cell control must show no hemolysis (validates RBC stability)",
                    "Degree of hemolysis can be graded (0 to 4+)",
                    "Results are inverse of what might be expected (no hemolysis = positive)"
                ],
                molecularBasis: {
                    complementFixation: {
                        step1: "Antibody (IgG or IgM) binds to antigen",
                        step2: "Fc regions of antibodies bind C1q (initiates classical pathway)",
                        step3: "Complement cascade proceeds: C1 → C4 → C2 → C3 → C5-9 (MAC)",
                        step4: "Complement proteins are consumed ('fixed') by antigen-antibody complexes",
                        result: "No free complement remains in solution"
                    },
                    indicatorSystem: {
                        sensitization: "Hemolysin (anti-SRBC antibodies) coat sheep RBCs",
                        complementBinding: "If free complement present → binds to antibody-coated SRBCs",
                        MACformation: "Complement forms membrane attack complex on SRBC surface",
                        hemolysis: "MAC creates pores → water influx → osmotic lysis → hemoglobin released"
                    },
                    readout: {
                        positiveTest: "Complement fixed in first incubation → no free complement → indicator RBCs NOT lysed",
                        negativeTest: "Complement NOT fixed → free complement available → indicator RBCs lysed"
                    }
                },
                analysis: {
                    sensitivity: "Can detect small amounts of antibody (if sufficient to fix complement)",
                    specificity: "Depends on antigen purity and specificity",
                    quantification: "Serial dilutions of serum determine antibody titer (highest dilution giving positive result)",
                    complementDose: "Critical - too little complement may give false positives, too much may give false negatives",
                    prozone: "Very high antibody concentration may prevent complement fixation (excess antibody)"
                },
                connectionToBordet: {
                    discovery: "Bordet discovered that serum contains heat-labile factor (complement) that enhances antibody-mediated bacteriolysis",
                    complementFixation: "Demonstrated that antigen-antibody complexes 'fix' (consume) complement",
                    application: "Developed complement fixation test as diagnostic tool",
                    impact: "Enabled detection of antibodies that don't cause visible precipitation (e.g., viral antibodies)",
                    legacy: "Fundamental contribution to understanding antibody effector functions and complement system"
                },
                results: "Complement fixation test successfully detects specific antibodies by measuring complement consumption. Positive samples (containing antibodies) show no hemolysis of indicator RBCs (4+) because complement is fixed by antigen-antibody complexes. Negative samples show complete hemolysis (0) because free complement lyses indicator cells. Controls validate that complement is active and RBCs are stable.",
                conclusions: [
                    "Complement fixation test detects antibodies via complement consumption",
                    "Antibody-antigen complexes activate classical complement pathway",
                    "Complement activation consumes (fixes) complement proteins",
                    "Indicator system (sensitized RBCs) detects presence of free complement",
                    "No hemolysis indicates antibody presence (positive test) - inverse readout",
                    "Bordet's discovery of complement and complement fixation was fundamental to immunology"
                ],
                clinicalApplications: {
                    historical: {
                        wassermann: "Syphilis diagnosis (1906-1980s)",
                        viralInfections: "Influenza, measles, mumps, adenovirus serology",
                        fungalInfections: "Coccidioidomycosis, histoplasmosis",
                        rickettsialDiseases: "Q fever, typhus"
                    },
                    currentUse: {
                        limitedUse: "Largely replaced by ELISA, IFA, molecular methods",
                        remainingApplications: "Some viral serology (rare), fungal serology (Coccidioides)",
                        research: "Study complement activation and regulation"
                    },
                    advantages: {
                        versatile: "Can detect any antibody-antigen reaction that fixes complement",
                        quantitative: "Can determine antibody titer"
                    },
                    disadvantages: {
                        complex: "Multiple steps, many controls required",
                        laborIntensive: "Requires preparation of indicator system, complement titration",
                        anticomplementarySerum: "Some sera inactivate complement non-specifically (false positives)",
                        timeConsuming: "Several hours to complete",
                        lessSpecific: "Compared to modern methods"
                    }
                },
                realWorldApplications: [
                    "Historical: Syphilis diagnosis (Wassermann test)",
                    "Viral serology (diagnosis of infections)",
                    "Fungal infections (coccidioidomycosis, histoplasmosis)",
                    "Research: Study complement activation by different antibodies and antigens",
                    "Quality control: Assess complement activity in sera",
                    "Educational: Demonstrate antibody effector functions and complement system"
                ],
                extensions: [
                    "Determine antibody titer by testing serial dilutions of serum",
                    "Compare complement fixation by IgG vs IgM (IgM more efficient)",
                    "Test different antigens to assess antibody specificity",
                    "Investigate effect of heat inactivation on sera (destroys complement)",
                    "Study complement activation by different immunoglobulin classes",
                    "Compare complement fixation test to ELISA for same antibody-antigen pair",
                    "Investigate anticomplementary activity of sera (interfering substances)"
                ],
                troubleshooting: [
                    "Complement control shows no hemolysis: Complement inactive (old, improperly stored, too dilute) → use fresh complement, optimize dilution",
                    "Cell control shows hemolysis: RBCs lysing spontaneously (old blood, contamination) → use fresh SRBCs, check sterility",
                    "All tubes show no hemolysis: Complement dose too low, anticomplementary serum → increase complement, test serum for anticomplementary activity",
                    "All tubes show hemolysis: Complement dose too high, antigen or antibody concentration wrong → reduce complement, optimize reagent concentrations",
                    "Inconsistent results: Temperature variation, timing errors, pipetting errors → standardize incubation conditions, careful pipetting, use controls",
                    "Weak positive (partial hemolysis): Low antibody concentration, suboptimal complement dose → concentrate serum, adjust complement"
                ]
            }
        }
    };

    // Link experiments to topics
    this.linkExperimentsToTopics();
}

linkExperimentsToTopics() {
    Object.entries(this.immuneExperiments).forEach(([expId, experiment]) => {
        experiment.relatedTopics.forEach(topicId => {
            if (this.immuneTopics[topicId]) {
                if (!this.immuneTopics[topicId].relatedExperiments) {
                    this.immuneTopics[topicId].relatedExperiments = [];
                }
                this.immuneTopics[topicId].relatedExperiments.push({
                    id: expId,
                    name: experiment.name,
                    category: experiment.category
                });
            }
        });
    });
}


// ========================================
// TOPIC HANDLER METHODS - FULL IMPLEMENTATION
// ========================================

handleInnateImmunity(problem) {
    const content = {
        topic: "Innate Immunity",
        category: 'defense_mechanisms',
        summary: "Innate immunity is the first line of defense against pathogens, providing immediate, non-specific responses present from birth. It includes physical barriers, cellular defenses (phagocytes, NK cells), and molecular components (complement, interferons) that respond rapidly to infection.",
        
        components: {
            physicalBarriers: {
                skin: {
                    structure: "Multilayered keratinized epithelium",
                    epidermis: "Outer layer with dead, keratinized cells",
                    dermis: "Inner layer with blood vessels, immune cells",
                    mechanisms: [
                        "Physical barrier - intact skin impermeable to most pathogens",
                        "Acidic pH (4.5-5.5) - inhibits bacterial growth",
                        "Sebum - contains antimicrobial fatty acids",
                        "Desquamation - constant shedding removes surface microbes",
                        "Microbiome - commensal bacteria compete with pathogens"
                    ],
                    breaches: "Cuts, burns, insect bites, surgical incisions allow pathogen entry",
                    importance: "Largest organ, primary interface with environment"
                },
                mucousMembranes: {
                    location: "Line respiratory, digestive, urogenital tracts",
                    mucus: {
                        composition: "Glycoproteins (mucins), water, salts, cells",
                        function: "Traps pathogens and particles",
                        clearance: "Cilia move mucus toward exit (mucociliary escalator)"
                    },
                    antimicrobialFactors: {
                        lysozyme: "Enzyme that cleaves bacterial peptidoglycan (cell wall)",
                        lactoferrin: "Binds iron, depriving bacteria of essential nutrient",
                        defensins: "Antimicrobial peptides that disrupt microbial membranes",
                        IgA: "Secretory antibody that neutralizes pathogens",
                        lactoperoxidase: "Generates reactive oxygen species"
                    },
                    examples: {
                        respiratory: "Mucus + cilia, alveolar macrophages, surfactant proteins",
                        gastrointestinal: "Stomach acid (pH 1-2), bile salts, digestive enzymes, gut microbiome",
                        urogenital: "Urine flow (mechanical), acidic pH in vagina, lysozyme in urine"
                    }
                },
                otherBarriers: {
                    tears: "Lysozyme, lactoferrin, IgA - wash away pathogens",
                    saliva: "Lysozyme, IgA, histatins (antifungal)",
                    earwax: "Traps particles, slightly acidic, antimicrobial",
                    nasalHairs: "Filter large particles",
                    cough_sneeze: "Expel pathogens from respiratory tract",
                    vomiting_diarrhea: "Expel pathogens from GI tract"
                }
            },
            
            cellularDefenses: {
                phagocytes: {
                    neutrophils: {
                        characteristics: "Most abundant WBC (50-70%), 'polymorphonuclear' (multi-lobed nucleus)",
                        production: "Bone marrow, ~100 billion/day",
                        lifespan: "Hours to days (very short-lived)",
                        recruitment: "Chemokines (IL-8, C5a, LTB4) attract to infection sites",
                        phagocytosis: {
                            recognition: "Bind pathogens via PRRs (TLRs, C-type lectins) or opsonins (antibody, C3b)",
                            engulfment: "Extend pseudopodia, engulf pathogen into phagosome",
                            killing: [
                                "Oxygen-dependent: Respiratory burst (NADPH oxidase → superoxide, H₂O₂, HOCl)",
                                "Oxygen-independent: Antimicrobial peptides, lysozyme, proteases"
                            ],
                            phagolysosome: "Phagosome fuses with lysosome → acidic, enzyme-rich compartment"
                        },
                        NETs: {
                            name: "Neutrophil Extracellular Traps",
                            composition: "DNA, histones, antimicrobial proteins released into extracellular space",
                            function: "Trap and kill pathogens extracellularly",
                            process: "NETosis - form of cell death distinct from apoptosis"
                        },
                        clinical: "Neutropenia (<1500/μl) increases infection risk; elevated in bacterial infections"
                    },
                    
                    macrophages: {
                        origin: "Derived from blood monocytes, differentiate in tissues",
                        distribution: "All tissues - tissue-resident macrophages",
                        nomenclature: {
                            liver: "Kupffer cells",
                            lung: "Alveolar macrophages",
                            brain: "Microglia",
                            bone: "Osteoclasts",
                            kidney: "Mesangial cells",
                            spleen: "Splenic macrophages (red pulp)",
                            lymphNodes: "Sinus macrophages",
                            peritoneum: "Peritoneal macrophages"
                        },
                        functions: {
                            phagocytosis: "Engulf pathogens, dead cells, debris",
                            antigenPresentation: "Process antigens, present on MHC-II to T cells (bridge to adaptive immunity)",
                            cytokineProduction: "IL-1, IL-6, TNF-α (pro-inflammatory), IL-10 (anti-inflammatory), IL-12 (Th1 polarization)",
                            tissueRemodeling: "Clear debris, secrete growth factors, promote wound healing",
                            ironRecycling: "Phagocytose senescent RBCs, recycle iron"
                        },
                        activation: {
                            M1_classical: {
                                inducers: "IFN-γ, LPS, TNF-α",
                                phenotype: "Pro-inflammatory, microbicidal",
                                functions: "Kill intracellular pathogens, produce ROS/RNS, secrete pro-inflammatory cytokines",
                                cytokines: "IL-12, IL-23, TNF-α, IL-6",
                                roles: "Defense against bacteria, intracellular parasites; tumor cytotoxicity"
                            },
                            M2_alternative: {
                                inducers: "IL-4, IL-13, IL-10, glucocorticoids",
                                phenotype: "Anti-inflammatory, tissue repair",
                                functions: "Wound healing, angiogenesis, tissue remodeling, suppress inflammation",
                                cytokines: "IL-10, TGF-β",
                                roles: "Parasite immunity (Th2), tissue repair, allergic responses; can promote tumor growth"
                            },
                            plasticity: "Can switch between M1/M2 based on microenvironment signals"
                        },
                        pathology: "Dysregulated macrophages contribute to chronic inflammation, atherosclerosis, fibrosis, cancer"
                    },
                    
                    dendriticCells: {
                        role: "Professional antigen-presenting cells - sentinels of immune system",
                        location: "Tissues (immature, capture antigens) → lymph nodes (mature, present antigens)",
                        subsets: {
                            conventional_cDC1: {
                                markers: "CD8α+ (mice), CD141+ (humans)",
                                function: "Cross-presentation on MHC-I → activate CD8+ T cells",
                                cytokines: "IL-12 (promotes Th1, CD8+ responses)",
                                importance: "Critical for antiviral and antitumor immunity"
                            },
                            conventional_cDC2: {
                                markers: "CD11b+ (mice), CD1c+ (humans)",
                                function: "Present antigens on MHC-II → activate CD4+ T cells",
                                cytokines: "Variable (IL-12, IL-23, IL-10) depending on stimulus",
                                importance: "Drive Th1, Th2, Th17 differentiation"
                            },
                            plasmacytoid_pDC: {
                                markers: "B220+ CD11c-low (mice), CD123+ (humans)",
                                function: "Produce large amounts of type I interferon (IFN-α/β)",
                                response: "Detect viral nucleic acids via TLR7/9",
                                importance: "Antiviral immunity, link innate-adaptive"
                            },
                            monocyte_derived: {
                                origin: "Differentiate from monocytes during inflammation",
                                function: "Similar to conventional DCs, present antigens",
                                markers: "CD11c+ MHC-II+"
                            }
                        },
                        maturationProcess: {
                            immature: {
                                location: "Peripheral tissues",
                                function: "High endocytic/phagocytic capacity - capture antigens",
                                receptors: "Express PRRs (TLRs, C-type lectins)",
                                MHC: "Low surface MHC-II, high intracellular"
                            },
                            activation: {
                                triggers: "PAMPs (via TLRs), DAMPs, cytokines (TNF-α, IL-1)",
                                changes: "Upregulate CCR7 (lymph node homing), MHC-II, B7 (CD80/CD86)"
                            },
                            mature: {
                                location: "Lymph nodes (migrate via lymphatics)",
                                function: "Present antigens to naïve T cells",
                                MHC: "High surface MHC-II, express B7 costimulatory molecules",
                                endocytosis: "Reduced (focus on presentation, not capture)"
                            }
                        },
                        crossPresentation: {
                            definition: "Present exogenous antigens on MHC-I (normally MHC-I presents endogenous)",
                            mechanism: "Internalized antigens escape to cytosol → proteasome degradation → TAP transport to ER → MHC-I loading",
                            importance: "Activate CD8+ T cells against viruses and tumors that don't infect DCs directly",
                            specialists: "cDC1 subset most efficient"
                        },
                        criticalRole: "Only DCs can efficiently activate naïve T cells (initiate adaptive response)"
                    }
                },
                
                naturalKillerCells: {
                    classification: "Large granular lymphocytes, part of innate lymphoid cells (ILCs)",
                    percentage: "5-15% of blood lymphocytes",
                    function: "Kill virus-infected and tumor cells without prior sensitization",
                    recognitionMechanisms: {
                        missingself: {
                            principle: "Healthy cells express MHC-I → inhibit NK cells; infected/tumor cells downregulate MHC-I → NK cells activated",
                            inhibitoryReceptors: "KIR (killer immunoglobulin-like receptors), CD94/NKG2A - bind MHC-I → inhibit killing",
                            mechanism: "When MHC-I absent/reduced → no inhibitory signal → NK cell kills target",
                            evolution: "Viruses and tumors downregulate MHC-I to evade CD8+ T cells, but this makes them NK-cell targets"
                        },
                        inducedself: {
                            principle: "Stressed cells upregulate ligands that activate NK cells",
                            activatingReceptors: "NKG2D, NCRs (natural cytotoxicity receptors)",
                            ligands: "MICA/B, ULBPs (stress-induced molecules on infected/transformed cells)",
                            mechanism: "Activating signals overcome inhibitory signals → NK cell activation"
                        },
                        balance: "Integration of inhibitory (MHC-I) and activating (stress ligands) signals determines outcome"
                    },
                    killingMechanisms: {
                        granulesExocytosis: {
                            perforin: "Forms pores in target cell membrane (similar to complement MAC)",
                            granzymes: "Serine proteases enter through pores → activate caspases → apoptosis",
                            process: "Immunological synapse forms → directed secretion → target dies in 2-4 hours"
                        },
                        deathReceptors: {
                            FasL: "NK cells express Fas ligand → binds Fas (CD95) on target → apoptosis",
                            TRAIL: "TNF-related apoptosis-inducing ligand → binds death receptors → apoptosis"
                        },
                        ADCC: {
                            name: "Antibody-Dependent Cell-Mediated Cytotoxicity",
                            mechanism: "NK cell Fc receptors (CD16) bind antibody-coated targets → activation → killing",
                            importance: "Therapeutic monoclonal antibodies (rituximab, trastuzumab) work partly via ADCC"
                        }
                    },
                    cytokineProduction: {
                        IFNgamma: "Activates macrophages, enhances MHC-I expression, promotes Th1 responses",
                        TNFalpha: "Pro-inflammatory, antitumor activity",
                        GMCSF: "Stimulates myeloid cell production"
                    },
                    memory: "Recent evidence for 'memory-like' NK cells (especially after CMV infection)",
                    clinical: {
                        deficiency: "Increased susceptibility to herpesvirus infections, some cancers",
                        therapy: "CAR-NK cells in development for cancer immunotherapy",
                        transplant: "KIR mismatch in bone marrow transplant can improve outcomes (graft-vs-leukemia)"
                    }
                },
                
                mastCells: {
                    origin: "Hematopoietic stem cells → myeloid progenitors → mature in tissues",
                    location: "Connective tissues, especially near blood vessels, nerves, mucosal surfaces",
                    morphology: "Large cells (10-30 μm), abundant cytoplasmic granules",
                    receptors: {
                        FcεRI: "High-affinity IgE receptor - binds IgE, cross-linking triggers degranulation",
                        TLRs: "Recognize PAMPs, can activate mast cells",
                        complementReceptors: "Respond to C3a, C5a (anaphylatoxins)"
                    },
                    degranulation: {
                        trigger: "Allergen cross-links IgE on FcεRI, or direct stimulation (C5a, substance P)",
                        process: "Granules fuse with membrane, release contents into extracellular space",
                        timeframe: "Seconds to minutes (immediate hypersensitivity)"
                    },
                    mediators: {
                        preformed: {
                            histamine: "Vasodilation, increased vascular permeability, bronchoconstriction, itching",
                            heparin: "Anticoagulant",
                            tryptase: "Serine protease, activates other cells",
                            chymase: "Converts angiotensin I to II, activates MMPs",
                            TNFalpha: "Some pre-stored, rapidly released"
                        },
                        newlySynthesized: {
                            prostaglandins: "PGD₂ - bronchoconstriction, vasodilation, pain",
                            leukotrienes: "LTC₄, LTD₄, LTE₄ - potent bronchoconstriction, increased permeability",
                            cytokines: "IL-4, IL-5, IL-13 (promote Th2, eosinophils, IgE production)",
                            chemokines: "Recruit other immune cells"
                        }
                    },
                    functions: {
                        beneficial: {
                            parasiteDefense: "Histamine, proteases damage helminth parasites",
                            woundHealing: "Angiogenesis, fibroblast activation",
                            immunity: "Recruit neutrophils, dendritic cells"
                        },
                        pathological: {
                            allergy: "IgE-mediated immediate hypersensitivity (type I)",
                            anaphylaxis: "Systemic mast cell activation → shock, respiratory failure",
                            asthma: "Chronic mast cell activation → airway inflammation, remodeling",
                            urticaria: "Hives - localized mast cell degranulation in skin"
                        }
                    },
                    clinical: {
                        antihistamines: "Block histamine H1 receptors (allergic rhinitis, urticaria)",
                        mastocytosis: "Excessive mast cells → flushing, itching, anaphylaxis",
                        stabilizers: "Cromolyn sodium - prevents degranulation (asthma prophylaxis)"
                    }
                },
                
                granulocytes: {
                    eosinophils: {
                        percentage: "1-4% of blood WBCs",
                        morphology: "Bilobed nucleus, large eosinophilic (pink/red) granules",
                        recruitment: "IL-5 (from Th2 cells), eotaxin (chemokine)",
                        functions: {
                            parasite: {
                                mechanism: "Degranulate onto parasite surface, release toxic proteins",
                                proteins: [
                                    "Major basic protein (MBP) - damages parasite membranes",
                                    "Eosinophil cationic protein (ECP) - RNase, neurotoxic",
                                    "Eosinophil peroxidase (EPO) - generates ROS",
                                    "Eosinophil-derived neurotoxin (EDN) - RNase"
                                ],
                                ADCC: "Bind antibody-coated parasites via Fc receptors"
                            },
                            allergy: {
                                role: "Contribute to allergic inflammation (asthma, allergic rhinitis)",
                                tissue: "Release mediators that damage airway epithelium, promote remodeling"
                            },
                            modulation: "Can suppress immune responses (IL-10 production)"
                        },
                        clinical: {
                            eosinophilia: "Elevated count (>500/μl) in parasitic infections, allergies, some malignancies",
                            EGPA: "Eosinophilic granulomatosis with polyangiitis (formerly Churg-Strauss) - vasculitis",
                            asthma: "Anti-IL-5 biologics (mepolizumab) reduce eosinophils, improve control"
                        }
                    },
                    
                    basophils: {
                        percentage: "<1% of blood WBCs (rarest)",
                        morphology: "Bilobed nucleus, large basophilic (dark blue/purple) granules",
                        similarity: "Functionally similar to mast cells (histamine, heparin)",
                        FcεRI: "Express high-affinity IgE receptor",
                        functions: {
                            allergy: "Degranulate upon IgE cross-linking → histamine, heparin",
                            Th2promotion: "Produce IL-4 → promote Th2 differentiation",
                            parasites: "Role in helminth immunity"
                        },
                        clinical: "Elevated in allergic diseases, some parasitic infections, rare myeloproliferative disorders"
                    }
                }
            },
            
            patternRecognition: {
                concept: "Innate immunity recognizes conserved microbial molecules (PAMPs) and danger signals (DAMPs)",
                PAMPs: {
                    definition: "Pathogen-Associated Molecular Patterns - conserved microbial structures",
                    characteristics: ["Essential for pathogen survival (can't easily mutate away)", "Shared by classes of pathogens", "Absent from host", "Recognized by germline-encoded PRRs"],
                    examples: {
                        bacterial: ["LPS (lipopolysaccharide) - Gram-negative outer membrane", "Peptidoglycan - bacterial cell wall", "Flagellin - bacterial flagella", "Lipoteichoic acid - Gram-positive cell wall", "CpG DNA - unmethylated CpG motifs"],
                        viral: ["dsRNA - replication intermediate", "ssRNA - viral genomes", "5'-triphosphate RNA - uncapped viral RNA", "Viral DNA in cytoplasm"],
                        fungal: ["β-glucan - cell wall component", "Mannan - cell wall polysaccharide", "Chitin - cell wall component"]
                    }
                },
                DAMPs: {
                    definition: "Damage-Associated Molecular Patterns - host molecules released from damaged/dying cells",
                    characteristics: ["Normally intracellular or sequestered", "Released during necrosis or tissue damage", "Signal 'danger' to immune system"],
                    examples: ["HMGB1 (high-mobility group box 1) - nuclear protein", "ATP - released from damaged cells", "Uric acid crystals - from purine metabolism", "Heat shock proteins", "Mitochondrial DNA (resembles bacterial DNA)", "Formyl peptides from mitochondria", "Extracellular matrix fragments"]
                },
                PRRs: {
                    definition: "Pattern Recognition Receptors - germline-encoded receptors that detect PAMPs/DAMPs",
                    families: {
                        TLRs: {
                            name: "Toll-Like Receptors",
                            location: "Cell surface (TLR1, 2, 4, 5, 6) or endosomes (TLR3, 7, 8, 9)",
                            structure: "Leucine-rich repeats (LRR) - ligand binding; TIR domain - signaling",
                            examples: {
                                TLR4: {
                                    ligand: "LPS (lipopolysaccharide)",
                                    source: "Gram-negative bacteria",
                                    coreceptor: "MD-2, CD14",
                                    signaling: "MyD88-dependent (NF-κB → pro-inflammatory cytokines); TRIF-dependent (type I interferon)"
                                },
                                TLR3: {
                                    ligand: "dsRNA",
                                    source: "Viruses (replication intermediate)",
                                    location: "Endosome",
                                    signaling: "TRIF → IRF3 → type I interferon (antiviral)"
                                },
                                TLR7_8: {
                                    ligand: "ssRNA",
                                    source: "Viruses",
                                    location: "Endosome",
                                    signaling: "MyD88 → NF-κB, IRF7 → type I interferon"
                                },
                                TLR9: {
                                    ligand: "Unmethylated CpG DNA",
                                    source: "Bacteria, viruses",
                                    location: "Endosome",
                                    signaling: "MyD88 → NF-κB, type I interferon"
                                },
                                TLR5: {
                                    ligand: "Flagellin",
                                    source: "Bacterial flagella",
                                    signaling: "MyD88 → NF-κB → IL-8 (neutrophil chemotaxis)"
                                }
                            },
                            outcomes: "Cytokine production (IL-1, IL-6, TNF-α), type I interferon, DC maturation, upregulation of costimulatory molecules"
                        },
                        NLRs: {
                            name: "NOD-Like Receptors",
                            location: "Cytoplasm",
                            structure: "LRR domain, central NACHT domain, N-terminal effector domain",
                            examples: {
                                NOD1_NOD2: {
                                    ligands: "Peptidoglycan fragments",
                                    NOD1: "Recognizes meso-diaminopimelic acid (Gram-negative)",
                                    NOD2: "Recognizes muramyl dipeptide (all bacteria)",
                                    signaling: "RIP2 kinase → NF-κB → cytokines",
                                    disease: "NOD2 mutations → Crohn's disease susceptibility"
                                },
                                inflammasomes: {
                                    NLRP3: {
                                        activators: "ATP, uric acid crystals, bacterial pore-forming toxins, particulates (asbestos, silica)",
                                        function: "Assembles inflammasome → activates caspase-1 → cleaves pro-IL-1β and pro-IL-18 → mature IL-1β, IL-18",
                                        disease: "Excessive activation → gout, atherosclerosis, Alzheimer's; mutations → autoinflammatory syndromes"
                                    },
                                    NLRC4: {
                                        activators: "Bacterial flagellin, type III secretion system components",
                                        function: "Detects intracellular bacteria (Salmonella, Legionella)"
                                    },
                                    AIM2: {
                                        activator: "Cytoplasmic DNA",
                                        function: "Detects intracellular bacteria, DNA viruses"
                                    }
                                }
                            }
                        },
                        RLRs: {
                            name: "RIG-I-Like Receptors",
                            location: "Cytoplasm",
                            function: "Detect viral RNA",
                            examples: {
                                RIGI: {
                                    ligand: "Short dsRNA, 5'-triphosphate RNA",
                                    source: "Many RNA viruses",
                                    signaling: "MAVS (mitochondrial adaptor) → IRF3, IRF7 → type I interferon"
                                },
                                MDA5: {
                                    ligand: "Long dsRNA",
                                    source: "Picornaviruses",
                                    signaling: "MAVS → type I interferon"
                                }
                            },
                            importance: "Critical for antiviral immunity, type I interferon production"
                        },
                        CLRs: {
                            name: "C-type Lectin Receptors",
                            location: "Cell surface (especially on DCs, macrophages)",
                            binding: "Recognize carbohydrates (Ca²⁺-dependent)",
                            examples: {
                                Dectin1: {
                                    ligand: "β-glucan (fungal cell wall)",
                                    function: "Phagocytosis, cytokine production (TNF-α, IL-6, IL-23)",
                                    importance: "Antifungal immunity"
                                },
                                Dectin2: {
                                    ligand: "Mannose (fungal, mycobacterial)",
                                    function: "Th17 response to fungi"
                                },
                                DCSIGN: {
                                    ligand: "Mannose, fucose (bacteria, viruses, fungi)",
                                    function: "Pathogen capture, modulate immune responses",
                                    hijacked: "HIV binds DC-SIGN to facilitate infection"
                                },
                                mannosereceptor: {
                                    ligand: "Mannose, fucose, N-acetylglucosamine",
                                    function: "Endocytosis of glycoproteins, antigen uptake"
                                }
                            }
                        }
                    }
                },
                signalingOutcomes: {
                    transcriptionFactors: "NF-κB (pro-inflammatory cytokines), AP-1 (cytokines), IRFs (type I interferon)",
                    cytokines: "TNF-α, IL-1β, IL-6 (inflammation, fever, acute phase), IL-12 (Th1 differentiation)",
                    typeIInterferon: "IFN-α, IFN-β (antiviral state, DC activation)",
                    costimulation: "Upregulate B7 on APCs (activate T cells)",
                    chemokines: "Recruit immune cells to infection site"
                }
            },
            
            inflammatoryResponse: {
                definition: "Localized protective response to tissue injury or infection",
                purpose: ["Eliminate pathogens", "Remove damaged tissue", "Initiate tissue repair"],
                cardinalSigns: {
                    rubor: "Redness - increased blood flow",
                    calor: "Heat - increased blood flow and metabolism",
                    tumor: "Swelling - fluid exudation into tissues",
                    dolor: "Pain - pressure on nerves, inflammatory mediators (prostaglandins, bradykinin)",
                    functioLaesa: "Loss of function - pain and swelling limit movement"
                },
                stages: {
                    initiation: {
                        trigger: "Tissue damage or pathogen detection",
                        sentinelCells: "Resident macrophages, mast cells, epithelial cells",
                        detection: "PRRs recognize PAMPs/DAMPs",
                        mediatorRelease: "Histamine (mast cells), cytokines (IL-1, TNF-α, IL-6), prostaglandins, leukotrienes"
                    },
                    vascular: {
                        vasodilation: {
                            mediators: "Histamine, NO, prostaglandins",
                            effects: "Increased blood flow → redness, heat",
                            purpose: "Deliver more immune cells and nutrients"
                        },
                        increasedPermeability: {
                            mediators: "Histamine, VEGF, bradykinin, C3a, C5a",
                            mechanism: "Endothelial cell contraction → gaps between cells",
                            effects: "Plasma proteins and fluid leak into tissue → swelling (edema)",
                            purpose: "Deliver antibodies, complement, clotting factors; dilute toxins"
                        }
                    },
                    cellular: {
                        leukocyteRecruitment: {
                            chemokines: "IL-8 (CXCL8), MCP-1 (CCL2), C5a, LTB₄",
                            adhesion: "Selectins → rolling; integrins + ICAM/VCAM → firm adhesion",
                            extravasation: "Leukocytes squeeze between endothelial cells into tissue",
                            sequence: "Neutrophils (first, hours) → monocytes/macrophages (later, days)"
                        },
                        phagocytosis: {
                            neutrophils: "Phagocytose bacteria, die within hours → pus (dead neutrophils)",
                            macrophages: "Phagocytose debris, dead cells, persistent pathogens; longer-lived"
                        }
                    },
                    resolution: {
                        antiInflammatory: "IL-10, TGF-β, lipoxins, resolvins",
                        apoptosis: "Neutrophils undergo apoptosis, phagocytosed by macrophages (efferocytosis)",
                        tissueRepair: "Fibroblasts, angiogenesis, collagen deposition",
                        remodeling: "Matrix metalloproteinases, scar formation or tissue regeneration"
                    }
                },
                mediators: {
                    vasoactive: {
                        histamine: "From mast cells, basophils; vasodilation, permeability; rapid, short-lived",
                        serotonin: "From platelets; similar to histamine",
                        NO: "From endothelium; vasodilation, inhibits platelet aggregation",
                        bradykinin: "From kinin system; vasodilation, permeability, pain"
                    },
                    chemotactic: {
                        IL8: "Neutrophil chemotaxis",
                        C5a: "Neutrophil and monocyte chemotaxis, mast cell degranulation",
                        LTB4: "Neutrophil chemotaxis, activation",
                        formylpeptides: "From bacteria and mitochondria; neutrophil chemotaxis"
                    },
                    proinflammatory_cytokines: {
                        IL1: {
                            sources: "Macrophages, epithelial cells",
                            effects: "Fever (acts on hypothalamus), acute phase response, endothelial activation, T cell activation",
                            processing: "Pro-IL-1β cleaved by caspase-1 (inflammasome-dependent)"
                        },
                        TNFalpha: {
                            sources: "Macrophages, T cells",
                            effects: "Endothelial activation, fever, acute phase response, cachexia (wasting), apoptosis",
                            systemic: "High levels cause septic shock (vasodilation, capillary leak, organ failure)"
                        },
                        IL6: {
                            sources: "Macrophages, T cells, endothelial cells",
                            effects: "Acute phase protein synthesis (liver), fever, B cell differentiation",
                            chronic: "Associated with chronic inflammatory diseases"
                        }
                    },
                    lipidMediators: {
                        prostaglandins: {
                            synthesis: "Arachidonic acid (from phospholipids) → COX-1/COX-2 → PGs",
                            PGE2: "Fever, pain, vasodilation",
                            PGI2: "Vasodilation, inhibits platelet aggregation",
                            inhibitors: "NSAIDs (aspirin, ibuprofen) block COX → reduce inflammation, fever, pain"
                        },
                        leukotrienes: {
                            synthesis: "Arachidonic acid → 5-LOX → LTs",
                            LTB4: "Neutrophil chemotaxis and activation",
                            LTC4_D4_E4: "Bronchoconstriction, increased vascular permeability",
                            disease: "Contribute to asthma",
                            inhibitors: "Zileuton (5-LOX inhibitor), montelukast (leukotriene receptor antagonist)"
                        },
                        lipoxins_resolvins: {
                            synthesis: "From omega-3 fatty acids",
                            function: "Pro-resolution, anti-inflammatory",
                            effects: "Inhibit neutrophil recruitment, stimulate macrophage clearance of apoptotic cells",
                            therapeutic: "Potential for treating chronic inflammatory diseases"
                        }
                    },
                    complementFragments: {
                        C3a_C5a: {
                            name: "Anaphylatoxins",
                            effects: "Mast cell and basophil degranulation, vasodilation, increased permeability",
                            C5a: "Potent neutrophil and monocyte chemoattractant",
                            receptors: "C3aR, C5aR (GPCRs)"
                        }
                    }
                },
                acute_vs_chronic: {
                    acute: {
                        duration: "Days to weeks",
                        cells: "Neutrophils predominate",
                        mediators: "Histamine, prostaglandins, acute phase cytokines",
                        outcome: "Resolution and healing (usually)",
                        examples: "Bacterial infection, acute injury"
                    },
                    chronic: {
                        duration: "Weeks to years",
                        cells: "Macrophages, lymphocytes, plasma cells",
                        mediators: "Persistent cytokines (TNF-α, IL-1), growth factors",
                        tissue: "Fibrosis, tissue destruction, granuloma formation",
                        outcome: "Ongoing damage, impaired function",
                        examples: "Tuberculosis, rheumatoid arthritis, inflammatory bowel disease, atherosclerosis"
                    }
                },
                systemic: {
                    fever: {
                        mechanism: "IL-1, IL-6, TNF-α → hypothalamus → PGE₂ → raise temperature set point",
                        purpose: "Inhibit pathogen growth, enhance immune responses",
                        range: "Low-grade (<101°F) helpful; high (>104°F) dangerous"
                    },
                    acutePhaseResponse: {
                        liver: "Produces acute phase proteins",
                        CRP: "C-reactive protein - opsonin, activates complement",
                        SAA: "Serum amyloid A - recruits immune cells",
                        fibrinogen: "Clotting, ESR (erythrocyte sedimentation rate) elevated",
                        ferritin: "Sequesters iron (bacteria need iron)",
                        decreased: "Albumin, transferrin (negative acute phase reactants)"
                    },
                    leukocytosis: {
                        mechanism: "G-CSF, GM-CSF stimulate bone marrow",
                        neutrophilia: "Increased neutrophils in blood (bacterial infection)"
                    },
                    sickness_behavior: {
                        symptoms: "Fatigue, malaise, loss of appetite, somnolence",
                        mediators: "IL-1, TNF-α act on brain",
                        purpose: "Conserve energy for immune response, reduce pathogen transmission"
                    }
                }
            },
            
            complementSystem: {
                overview: "Cascade of ~30 plasma proteins that enhance immune responses",
                functions: ["Opsonization (C3b)", "Inflammation (C3a, C5a)", "Cell lysis (MAC)", "Immune complex clearance"],
                pathways: {
                    classical: "Antibody-antigen complexes → C1 activation → C4, C2 → C3 convertase (C4b2a)",
                    alternative: "Spontaneous C3 hydrolysis or pathogen surfaces → Factor B, D → C3 convertase (C3bBb)",
                    lectin: "MBL or ficolins bind pathogen carbohydrates → MASP-1, MASP-2 → C4, C2 → C3 convertase (C4b2a)"
                },
                amplification: "All pathways generate C3 convertase → cleave C3 → C3b deposits on surfaces → more C3 convertase (amplification loop)",
                MAC: "C5b + C6 + C7 + C8 + C9₍ₙ₎ → membrane pore → osmotic lysis",
                regulation: "DAF, MCP, CD59, Factor H, Factor I protect host cells from complement attack",
                clinicalSignificance: "Deficiencies → recurrent infections (C3), Neisseria infections (C5-C9), autoimmunity (C1q, C4); dysregulation → aHUS, PNH, AMD"
            },
            
            interferons: {
                typeI: {
                    members: "IFN-α (multiple subtypes), IFN-β, IFN-ε, IFN-κ, IFN-ω",
                    producers: "All nucleated cells (especially pDCs for IFN-α)",
                    induction: "Viral infection → cytoplasmic RNA/DNA sensors (RIG-I, MDA5, cGAS-STING) → IRF3, IRF7 → IFN-α/β gene expression",
                    receptor: "IFNAR1/IFNAR2 (heterodimer)",
                    signaling: "JAK1/TYK2 → STAT1/STAT2 → ISGF3 → ISG (interferon-stimulated gene) expression",
                    effects: {
                        antiviralState: [
                            "Upregulate MHC-I (enhance CD8+ T cell recognition)",
                            "Induce antiviral proteins: PKR (inhibits translation), 2'-5' OAS (degrades viral RNA), Mx proteins (inhibit viral replication)",
                            "Inhibit cellular protein synthesis (starve virus)",
                            "Induce apoptosis of infected cells"
                        ],
                        immuneActivation: [
                            "Activate NK cells (enhance cytotoxicity)",
                            "Mature dendritic cells (link to adaptive immunity)",
                            "Promote Th1 and CD8+ T cell responses"
                        ]
                    },
                    clinical: {
                        therapeutic: "IFN-α for hepatitis B/C, some cancers (melanoma, leukemia)",
                        adverse: "Flu-like symptoms, fatigue, depression",
                        viralEvasion: "Many viruses block IFN production or signaling"
                    }
                },
                typeII: {
                    member: "IFN-γ (only one)",
                    producers: "NK cells, NKT cells, CD4+ Th1 cells, CD8+ T cells",
                    induction: "IL-12, IL-18 (innate); antigen recognition (adaptive)",
                    receptor: "IFNGR1/IFNGR2",
                    signaling: "JAK1/JAK2 → STAT1 homodimer → GAS (gamma-activated sequence) → gene expression",
                    effects: {
                        macrophageActivation: [
                            "Enhance microbicidal activity (ROS, RNS production)",
                            "Upregulate MHC-II, costimulatory molecules",
                            "Promote M1 (classical) activation",
                            "Increase antigen presentation"
                        ],
                        immunomodulation: [
                            "Promote Th1 differentiation (positive feedback)",
                            "Inhibit Th2 differentiation",
                            "Enhance CTL activity",
                            "Increase antibody class switching to IgG (opsonizing)"
                        ],
                        antiviral: "Similar to type I IFN (MHC-I upregulation, antiviral proteins)",
                        antitumor: "Inhibit angiogenesis, enhance tumor antigen presentation"
                    },
                    importance: "Critical for control of intracellular pathogens (mycobacteria, Listeria, Salmonella)",
                    clinical: {
                        deficiency: "Increased susceptibility to mycobacterial infections (IFN-γ receptor defects)",
                        therapy: "IFN-γ for chronic granulomatous disease"
                    }
                },
                typeIII: {
                    members: "IFN-λ1, IFN-λ2, IFN-λ3, IFN-λ4",
                    receptor: "IFNLR1/IL10RB (distinct from type I)",
                    expression: "Epithelial cells (especially respiratory, GI)",
                    function: "Similar to type I IFN (antiviral), but more restricted tissue distribution",
                    importance: "Mucosal antiviral immunity"
                }
            },
            
            antimicrobialPeptides: {
                defensins: {
                    structure: "Small cationic peptides (15-50 amino acids), disulfide bonds",
                    types: {
                        alphDefensins: "Neutrophils (HNP1-4), Paneth cells (HD5, HD6 - in gut)",
                        betaDefensins: "Epithelial cells (hBD1-4 - constitutive and inducible)"
                    },
                    mechanism: "Cationic peptides insert into anionic microbial membranes → pore formation → lysis",
                    spectrum: "Bacteria (Gram+ and Gram-), fungi, some viruses",
                    locations: "Skin, respiratory tract, GI tract, urogenital tract",
                    regulation: "Constitutive (hBD1) or induced by infection/inflammation (hBD2-4)",
                    additional: "Chemotactic for immune cells (link innate-adaptive)"
                },
                cathelicidins: {
                    human: "LL-37 (only one in humans)",
                    source: "Neutrophils, macrophages, epithelial cells",
                    processing: "Secreted as inactive hCAP18 → cleaved to active LL-37",
                    mechanism: "Membrane disruption, LPS neutralization",
                    additional: "Chemotactic, promotes wound healing, modulates inflammation",
                    vitaminD: "Vitamin D enhances cathelicidin production (innate immunity link)"
                },
                histatins: {
                    source: "Salivary glands",
                    function: "Antifungal (especially Candida)",
                    location: "Oral cavity"
                },
                lactoferrin: {
                    source: "Neutrophil granules, secretory fluids (milk, tears, saliva)",
                    mechanism: "Binds iron → deprives bacteria of essential nutrient",
                    additional: "Direct antimicrobial activity, modulates inflammation"
                },
                lysozyme: {
                    source: "Neutrophils, macrophages, secretions (tears, saliva, mucus)",
                    mechanism: "Cleaves β-1,4-glycosidic bonds in peptidoglycan → bacterial cell wall lysis",
                    effectiveness: "More effective against Gram+ bacteria (exposed peptidoglycan)"
                }
            }
        },
        
        innate_adaptive_cooperation: {
            DCs_bridge: "Dendritic cells capture antigens (innate) → present to T cells (activate adaptive)",
            complementEnhances: "C3d on antigens enhances B cell activation (1000x)",
            antibodyEnhances: "Antibodies opsonize pathogens → enhance phagocytosis (innate), activate complement (innate)",
            cytokineDirects: "Innate cytokines (IL-12, IL-4) direct Th differentiation (adaptive)",
            inflammation: "Innate inflammation creates environment for adaptive response (APC activation, lymphocyte recruitment)"
        },
        
        comparison: {
            innate_vs_adaptive: {
                timing: "Innate: immediate (0-96 hours); Adaptive: delayed (>96 hours first exposure)",
                specificity: "Innate: broad (PAMPs); Adaptive: highly specific (unique epitopes)",
                diversity: "Innate: limited, germline-encoded; Adaptive: vast, gene recombination",
                memory: "Innate: none; Adaptive: immunological memory",
                components: "Innate: barriers, phagocytes, NK cells, complement, IFN; Adaptive: T cells, B cells, antibodies",
                receptors: "Innate: PRRs (TLRs, NLRs, RLRs); Adaptive: TCR, BCR",
                speed: "Innate: minutes to hours; Adaptive: days to weeks"
            }
        },
        
        evasionStrategies: {
            bacteria: [
                "Capsules prevent phagocytosis (S. pneumoniae, K. pneumoniae)",
                "Protein A binds antibody Fc → prevents opsonization (S. aureus)",
                "Survive inside phagocytes (Mycobacterium, Listeria, Salmonella)",
                "Produce toxins that kill phagocytes (S. aureus leukocidins)",
                "Antigenic variation (N. gonorrhoeae pili)"
            ],
            viruses: [
                "Block MHC-I presentation (CMV, HSV, adenovirus)",
                "Produce decoy cytokine receptors (vaccinia virus)",
                "Inhibit interferon signaling (many viruses)",
                "Latency (HSV, VZV, HIV)",
                "Rapid mutation (influenza, HIV)"
            ],
            parasites: [
                "Thick tegument prevents complement attack (schistosomes)",
                "Acquire host molecules (molecular mimicry)",
                "Suppress immune responses (helminths produce immunomodulatory molecules)",
                "Intracellular residence (Plasmodium, Toxoplasma)",
                "Antigenic variation (Trypanosoma, Plasmodium)"
            ],
            fungi: [
                "Thick cell wall resists phagocytosis",
                "Melanin production protects from ROS",
                "Morphologic switching (yeast ↔ hyphal forms)",
                "Biofilm formation (Candida)"
            ]
        },
        
        clinicalCorrelations: {
            deficiencies: {
                phagocytes: "Chronic granulomatous disease (CGD) - NADPH oxidase defect → recurrent bacterial/fungal infections",
                complement: "C3 deficiency → severe bacterial infections; C5-C9 → Neisseria infections; Factor H/I → aHUS",
                TLRs: "TLR defects → increased infections (rare)",
                NK: "NK deficiency → recurrent herpesvirus infections",
                neutropenia: "ANC <500/μl → high infection risk (chemotherapy, autoimmune)"
            },
            excessive: {
                sepsis: "Overwhelming infection → excessive cytokine production (cytokine storm) → shock, organ failure",
                autoinflammatory: "NLRP3, TNFR mutations → periodic fever syndromes",
                chronicInflammation: "Persistent innate activation → tissue damage (RA, IBD, atherosclerosis)",
                ARDS: "Acute respiratory distress syndrome - neutrophil-mediated lung injury"
            },
            therapeutic: {
                NSAIDs: "Inhibit COX → reduce prostaglandins → anti-inflammatory, antipyretic, analgesic",
                corticosteroids: "Broad immunosuppression - inhibit cytokine production, neutrophil function",
                biologics: "Anti-TNF (infliximab, adalimumab), anti-IL-1 (anakinra), anti-IL-6 (tocilizumab)",
                GCSF: "Stimulate neutrophil production (chemotherapy-induced neutropenia)",
                interferons: "IFN-α for viral hepatitis, IFN-γ for CGD"
            }
        },
        
        examples: [
            {
                scenario: "Skin wound with bacterial contamination",
                response: [
                    "1. Skin barrier breached → bacteria enter tissue",
                    "2. Resident macrophages detect bacteria via TLRs (LPS, peptidoglycan)",
                    "3. Macrophages and mast cells release IL-1, TNF-α, IL-8, histamine",
                    "4. Vasodilation and increased permeability → redness, swelling, warmth",
                    "5. Neutrophils recruited by IL-8 and C5a (complement activated)",
                    "6. Neutrophils phagocytose bacteria, release NETs",
                    "7. Complement opsonizes bacteria (C3b), forms MAC",
                    "8. DCs capture antigens, migrate to lymph nodes",
                    "9. Inflammation resolves as bacteria cleared",
                    "10. Adaptive immunity initiated if needed (T and B cell activation)"
                ]
            },
            {
                scenario: "Influenza virus infection of respiratory epithelium",
                response: [
                    "1. Virus enters epithelial cells, replicates",
                    "2. Infected cells detect viral dsRNA via TLR3, RIG-I",
                    "3. Type I interferon (IFN-α/β) production",
                    "4. IFN induces antiviral state in neighboring cells",
                    "5. NK cells kill infected cells (missing-self, stress ligands)",
                    "6. pDCs produce massive IFN-α",
                    "7. Inflammation recruits monocytes, neutrophils (may cause immunopathology)",
                    "8. DCs present viral antigens to activate CD8+ T cells",
                    "9. Adaptive immunity clears infection over 7-10 days"
                ]
            }
        ],
        
        keyTakeaways: [
            "Innate immunity provides immediate, broad-spectrum defense",
            "Physical/chemical barriers are first line of defense",
            "PRRs recognize conserved PAMPs and DAMPs",
            "Phagocytes (neutrophils, macrophages) destroy pathogens",
            "NK cells kill infected and abnormal cells without prior sensitization",
            "Complement enhances pathogen clearance and inflammation",
            "Interferons induce antiviral state",
            "Inflammation recruits immune cells and delivers immune mediators",
            "DCs link innate and adaptive immunity through antigen presentation",
            "Innate responses are rapid but lack specificity and memory"
        ]
    };
    
    return content;
}

handleAdaptiveImmunity(problem) {
    const content = {
        topic: "Adaptive Immunity",
        category: 'defense_mechanisms',
        summary: "Adaptive immunity provides highly specific, learned defense against pathogens with immunological memory. Mediated by lymphocytes (T and B cells) with diverse, clonally distributed antigen receptors generated by genetic recombination. Characterized by specificity, diversity, memory, and self/non-self discrimination.",
        
        keyCharacteristics: {
            specificity: {
                definition: "Each lymphocyte recognizes one specific antigen epitope",
                TCR_BCR: "Unique antigen receptors on each lymphocyte clone",
                diversity: "~10¹¹ different specificities possible",
                recognition: {
                    Bcells: "Recognize intact antigens (proteins, carbohydrates, lipids, nucleic acids)",
                    Tcells: "Recognize processed peptide antigens presented on MHC molecules"
                },
                basis: "V(D)J recombination during lymphocyte development"
            },
            
            diversity: {
                mechanisms: {
                    VDJrecombination: {
                        process: "Random joining of V, D, J gene segments",
                        heavyChain: "V_H (40) × D_H (25) × J_H (6) ≈ 6,000 combinations",
                        lightChain: "V_L (40) × J_L (5) ≈ 200 combinations",
                        BCR: "Heavy × Light ≈ 1.2 × 10⁶ combinations",
                        TCR: "Similar recombination of α and β chains"
                    },
                    junctionalDiversity: {
                        nAddition: "TdT enzyme adds random nucleotides at junctions",
                        exonuclease: "Removes nucleotides from gene segment ends",
                        result: "Enormous diversity at junctions (CDR3 region)"
                    },
                    combinatorialDiversity: {
                        BCR: "Different heavy-light chain pairings",
                        TCR: "Different αβ or γδ pairings"
                    },
                    somaticHypermutation: {
                        location: "Germinal centers (B cells only)",
                        mechanism: "AID enzyme introduces point mutations in V regions",
                        rate: "~10⁻³ per bp per division (million times higher than normal)",
                        selection: "High-affinity variants preferentially survive",
                        result: "Affinity maturation - antibodies improve over time"
                    }
                },
                totalDiversity: "Theoretical: >10¹⁵ different receptors; Actual: ~10⁹ different lymphocytes in body at any time",
                significance: "Can recognize virtually any foreign molecule"
            },
            
            immunologicalMemory: {
                definition: "Enhanced immune response upon re-exposure to previously encountered antigen",
                primaryResponse: {
                    timing: "5-10 days after first exposure",
                    lagPhase: "Time for clonal selection, expansion, differentiation",
                    antibodies: {
                        first: "IgM (day 5-7)",
                        later: "IgG (day 10-14)",
                        peak: "Weeks 2-3",
                        affinity: "Lower (no somatic hypermutation yet)"
                    },
                    magnitude: "Moderate",
                    duration: "Weeks to months (effector cells die)"
                },
                secondaryResponse: {
                    timing: "1-3 days after re-exposure (much faster)",
                    noLag: "Memory cells already exist, rapidly activated",
                    antibodies: {
                        predominant: "IgG (or IgA, IgE depending on site/context)",
                        peak: "Days 3-5",
                        magnitude: "10-100x higher than primary",
                        affinity: "Higher (result of affinity maturation)"
                    },
                    duration: "Months to years or lifetime"
                },
                memoryCells: {
                    generation: "During primary response, some activated lymphocytes → memory cells",
                    characteristics: [
                        "Long-lived (years to lifetime)",
                        "Reside in tissues and secondary lymphoid organs",
                        "Lower activation threshold than naïve cells",
                        "Rapidly respond to antigen re-encounter",
                        "Already class-switched (memory B cells)",
                        "Express high-affinity receptors (affinity maturation)"
                    ],
                    types: {
                        memoryBcells: {
                            location: "Spleen, lymph nodes, bone marrow, mucosal tissues",
                            function: "Rapidly differentiate to plasma cells upon antigen encounter",
                            markers: "CD27+, class-switched IgG/IgA/IgE (or IgM+)"
                        },
                        memoryTcells: {
                            central: {
                                markers: "CD62L+ CCR7+ (lymph node homing)",
                                location: "Lymph nodes, spleen",
                                function: "Proliferate extensively, generate effectors",
                                characteristics: "High proliferative capacity, delayed effector function"
                            },
                            effector: {
                                markers: "CD62L- CCR7- (tissue homing)",
                                location: "Peripheral tissues, blood",
                                function: "Immediate effector functions (cytokines, cytotoxicity)",
                                characteristics: "Lower proliferation, rapid response"
                            },
                            tissueResident: {
                                markers: "CD69+ CD103+",
                                location: "Permanently reside in specific tissues (skin, gut, lung, liver)",
                                function: "Local rapid response at pathogen entry sites",
                                importance: "First line of adaptive defense at barrier sites"
                            }
                        }
                    },
                    maintenance: {
                        mechanisms: "IL-7, IL-15 (homeostatic cytokines) support survival",
                        longevity: "Some memory cells are very long-lived (decades); others require periodic restimulation",
                        numbers: "Memory pool expands with age and antigen exposure"
                    }
                },
                basisOfVaccination: "Vaccines induce memory without disease → rapid response upon actual infection"
            },
            
            selfTolerance: {
                importance: "Prevent autoimmune disease - immune system must not attack self",
                centralTolerance: {
                    Tcells: {
                        location: "Thymus",
                        positiveSelection: {
                            stage: "Double-positive (CD4+ CD8+) thymocytes",
                            test: "TCR must recognize self-MHC (MHC restriction)",
                            outcome: "Cells that bind self-MHC with moderate affinity survive; others die by neglect",
                            purpose: "Ensure T cells can recognize antigens presented on self-MHC",
                            cortex: "Mediated by cortical epithelial cells"
                        },
                        negativeSelection: {
                            stage: "Single-positive (CD4+ or CD8+) thymocytes",
                            test: "TCR must NOT strongly bind self-peptide-MHC",
                            outcome: "Cells with high affinity for self-antigens undergo apoptosis (clonal deletion)",
                            purpose: "Eliminate autoreactive T cells",
                            medulla: "Mediated by medullary epithelial cells, dendritic cells",
                            AIRE: "Autoimmune regulator - promotes expression of tissue-specific antigens in thymus"
                        },
                        result: "Only 1-5% of thymocytes survive both selections",
                        MHCrestriction: "Mature T cells only recognize antigens on self-MHC"
                    },
                    Bcells: {
                        location: "Bone marrow",
                        immatureBcells: "Express IgM BCR, test for self-reactivity",
                        receptorEditing: "If BCR binds self-antigen strongly → rearrange light chain again (second chance)",
                        clonalDeletion: "If still self-reactive → apoptosis",
                        anergy: "If low-level self-reactivity → functional inactivation (alive but unresponsive)",
                        result: "Most strongly self-reactive B cells eliminated or inactivated"
                    }
                },
                peripheralTolerance: {
                    mechanisms: [
                        "Anergy - functional inactivation without costimulation",
                        "Deletion - activation-induced cell death (AICD)",
                        "Suppression - regulatory T cells (Tregs)",
                        "Ignorance - physical separation of antigen (immune-privileged sites)"
                    ],
                    anergy: {
                        cause: "Antigen recognition without costimulation (signal 1 without signal 2)",
                        outcome: "Lymphocyte becomes unresponsive, cannot be activated",
                        purpose: "Tolerize to self-antigens not encountered in thymus/bone marrow"
                    },
                    Tregs: {
                        markers: "CD4+ CD25+ Foxp3+",
                        types: {
                            natural: "Develop in thymus (recognize self-antigens with intermediate affinity)",
                            induced: "Develop in periphery from conventional CD4+ T cells"
                        },
                        mechanisms: [
                            "IL-10 and TGF-β production (immunosuppressive cytokines)",
                            "CTLA-4 expression (competes with CD28 for B7, inhibits T cell activation)",
                            "Consume IL-2 (deprive effector T cells of growth factor)",
                            "Direct cell-cell contact (granzyme-mediated killing)"
                        ],
                        importance: "Suppress autoreactive T cells, maintain immune homeostasis, prevent excessive inflammation",
                        deficiency: "IPEX syndrome (Foxp3 mutation) → severe autoimmunity"
                    },
                    ignorance: {
                        concept: "Some self-antigens physically separated from immune system",
                        sites: "Brain (blood-brain barrier), eye (anterior chamber), testis",
                        immunePrivilege: "Limited immune surveillance, local immunosuppression",
                        breach: "Trauma or infection can break tolerance → autoimmunity (sympathetic ophthalmia)"
                    },
                    deletionAICD: {
                        mechanism: "Repeated TCR stimulation → upregulate Fas → Fas-FasL interaction → apoptosis",
                        purpose: "Eliminate activated T cells after infection cleared, prevent autoimmunity"
                    }
                },
                breakdownConsequences: "Autoimmune diseases (type 1 diabetes, MS, RA, SLE, etc.)"
            },
            
            clonalSelection: {
                theory: "Proposed by Burnet (1957), revolutionized immunology",
                principle: "Each lymphocyte expresses unique antigen receptor; antigen selects and expands matching clones",
                steps: {
                    diversity: "Lymphocyte repertoire generated during development (V(D)J recombination)",
                    selection: "Antigen binds lymphocyte with complementary receptor",
                    proliferation: "Selected lymphocyte undergoes clonal expansion (mitosis)",
                    differentiation: "Clones differentiate into effector cells (fight infection) and memory cells",
                    contraction: "Most effector cells die after antigen cleared (apoptosis)",
                    memory: "Memory cells persist, provide rapid response to re-exposure"
                },
                evidence: [
                    "Single B cell produces antibody of one specificity",
                    "Antibody specificity doesn't change during immune response (already encoded)",
                    "Adoptive transfer of lymphocytes transfers immunity",
                    "Clonal expansion observed directly (flow cytometry, TCR sequencing)"
                ],
                implications: "Specificity pre-exists (instructive vs selective theory resolved)",
                expansion: "One lymphocyte → thousands of daughter cells in ~7 days"
            }
        },
        
        lymphocyteDevelopment: {
            hematopoiesis: "All blood cells from hematopoietic stem cells (HSCs) in bone marrow",
            commitment: "HSC → common lymphoid progenitor (CLP) → T, B, NK lineages",
            
            TcellDevelopment: {
                location: "Thymus",
                migration: "Pro-T cells migrate from bone marrow to thymus",
                stages: {
                    DN: {
                        stage: "Double-negative (CD4- CD8-)",
                        events: [
                            "TCR β chain gene rearrangement (V_β-D_β-J_β)",
                            "β-selection checkpoint: functional β chain pairs with pre-Tα → survival signal",
                            "Cells without functional β chain die"
                        ],
                        proliferation: "Successful β-selection → massive proliferation"
                    },
                    DP: {
                        stage: "Double-positive (CD4+ CD8+)",
                        events: [
                            "TCR α chain rearrangement (V_α-J_α)",
                            "Full TCR assembled (αβ heterodimer + CD3 complex)",
                            "Positive selection: test TCR-MHC interaction"
                        ],
                        cortex: "DP thymocytes in thymic cortex interact with cortical epithelial cells"
                    },
                    SP: {
                        stage: "Single-positive (CD4+ or CD8+)",
                        lineageChoice: {
                            MHC_II: "DP cells whose TCR binds MHC-II → CD4+ (helper T cells)",
                            MHC_I: "DP cells whose TCR binds MHC-I → CD8+ (cytotoxic T cells)"
                        },
                        negativeSelection: "SP thymocytes tested for self-reactivity in medulla",
                        AIRE: "Medullary epithelial cells express tissue-restricted antigens via AIRE",
                        deletion: "High-affinity self-reactive cells deleted"
                    },
                    emigration: {
                        naiveTcells: "SP thymocytes that survive → naïve T cells",
                        exit: "Leave thymus via blood",
                        circulate: "Recirculate through blood, lymph nodes, spleen (seek antigen)"
                    }
                },
                efficiency: "Only 1-5% of thymocytes survive to maturity (massive negative selection)",
                involution: "Thymus involutes with age → decreased T cell output (but peripheral T cells maintained)"
            },
            
            BcellDevelopment: {
                location: "Bone marrow (throughout life)",
                stages: {
                    proB: {
                        stage: "Pro-B cell",
                        event: "Heavy chain gene rearrangement begins (D-J, then V-DJ)",
                        checkpoint: "Functional heavy chain must be produced"
                    },
                    preB: {
                        stage: "Pre-B cell",
                        event: "Heavy chain expressed, pairs with surrogate light chain (pre-BCR)",
                        checkpoint: "Pre-BCR signaling → survival and proliferation",
                        lightChain: "Light chain (κ or λ) rearrangement begins (V-J)"
                    },
                    immatureB: {
                        stage: "Immature B cell",
                        BCR: "Full IgM BCR expressed (heavy + light chains)",
                        selfReactivity: "Test for binding to self-antigens in bone marrow",
                        outcomes: {
                            noBinding: "Proceed to maturation",
                            strongBinding: "Receptor editing (rearrange light chain again) or deletion (apoptosis)",
                            weakBinding: "Anergy (functional inactivation)"
                        }
                    },
                    naiveB: {
                        stage: "Naïve mature B cell",
                        BCR: "Coexpress IgM and IgD (alternative splicing)",
                        exit: "Leave bone marrow, circulate through blood and lymphoid organs",
                        lifespan: "Weeks to months if not activated (apoptosis)",
                        activation: "Requires antigen recognition + T cell help (or TI antigen)"
                    }
                },
                receptorEditing: "Unique to B cells - second chance to avoid self-reactivity",
                allelic: "Allelic exclusion ensures one light chain expressed per B cell"
            },
            
            naiveLymphocytes: {
                characteristics: [
                    "Have not encountered cognate antigen",
                    "Small, quiescent (not dividing)",
                    "Express antigen receptor (TCR or BCR)",
                    "Circulate through blood and secondary lymphoid organs",
                    "Seek antigen"
                ],
                recirculation: {
                    route: "Blood → lymph node (via HEV) → lymph → thoracic duct → blood (repeat)",
                    frequency: "Each naïve lymphocyte recirculates every 12-24 hours",
                    purpose: "Maximize chance of encountering antigen",
                    homing: "L-selectin (CD62L), CCR7 mediate lymph node entry"
                },
                activation: {
                    location: "Secondary lymphoid organs (lymph nodes, spleen, MALT)",
                    requirement: "Encounter antigen presented by APC",
                    costimulation: "Tcells need two signals; B cells usually need T cell help"
                },
                survivalTime: "Weeks to months without activation → die by neglect (apoptosis)",
                frequency: "Naïve lymphocytes specific for any given antigen: ~1 in 10⁵-10⁶"
            }
        },
        
        antigenRecognition: {
            MHC: {
                name: "Major Histocompatibility Complex (MHC)",
                humanName: "HLA (Human Leukocyte Antigen)",
                function: "Present peptide antigens to T cells",
                location: "Chromosome 6 (humans), highly polymorphic genes",
                diversity: "Extreme polymorphism (hundreds of alleles per gene) → population diversity in immune responses",
                
                MHC_ClassI: {
                    structure: "Heavy chain (α chain, 3 domains) + β₂-microglobulin",
                    genes: "HLA-A, HLA-B, HLA-C",
                    expression: "All nucleated cells (not RBCs)",
                    peptideSource: "Endogenous antigens (cytoplasmic proteins)",
                    pathway: {
                        proteasome: "Cytoplasmic proteins degraded by proteasome → peptides (8-10 amino acids)",
                        TAP: "Peptides transported into ER by TAP (transporter associated with antigen processing)",
                        loading: "Peptides loaded onto MHC-I in ER (requires tapasin, calreticulin, ERp57)",
                        surface: "Peptide-MHC-I complex transported to cell surface via Golgi"
                    },
                    recognizedBy: "CD8+ T cells (cytotoxic T lymphocytes)",
                    function: "Display internal contents of cell → CD8+ T cells survey for abnormal peptides (viral, tumor)",
                    binding: "CD8 coreceptor binds MHC-I α3 domain → stabilizes TCR-pMHC interaction",
                    examples: "Viral peptides (influenza, HIV), tumor neoantigens, self-peptides (normally tolerated)"
                },
                
                MHC_ClassII: {
                    structure: "α and β chains (each with 2 domains)",
                    genes: "HLA-DR, HLA-DQ, HLA-DP",
                    expression: "Professional APCs (dendritic cells, macrophages, B cells); inducible on other cells (IFN-γ)",
                    peptideSource: "Exogenous antigens (extracellular proteins)",
                    pathway: {
                        endocytosis: "APCs internalize extracellular proteins by phagocytosis, receptor-mediated endocytosis, macropinocytosis",
                        degradation: "Proteins degraded in endosomes/lysosomes by proteases (cathepsins)",
                        MHC_II: "Synthesized in ER, α and β chains pair with invariant chain (Ii/CD74)",
                        CLIP: "Ii blocks peptide-binding groove until endosome",
                        fusion: "MHC-II vesicle fuses with endosome containing peptides",
                        HLADM: "HLA-DM catalyzes CLIP removal, peptide loading (12-25 amino acids)",
                        surface: "Peptide-MHC-II transported to cell surface"
                    },
                    recognizedBy: "CD4+ T cells (helper T cells)",
                    function: "Present extracellular antigens → CD4+ T cells coordinate immune responses",
                    binding: "CD4 coreceptor binds MHC-II β2 domain → stabilizes TCR-pMHC interaction",
                    examples: "Bacterial proteins, allergens, extracellular parasites, self-proteins (autoimmune)"
                },
                
                crossPresentation: {
                    definition: "Present exogenous antigens on MHC-I (violates usual pathway rules)",
                    cells: "Dendritic cells (especially cDC1 subset)",
                    mechanism: "Exogenous antigens escape endosome → cytosol → proteasome → TAP → MHC-I",
                    importance: "Activate CD8+ T cells against viruses/tumors that don't infect DCs directly",
                    example: "Tumor antigens from dying tumor cells → DC cross-presents → activate tumor-specific CD8+ T cells"
                },
                
                MHCrestriction: {
                    definition: "T cells only recognize peptides presented on self-MHC molecules",
                    basis: "Positive selection in thymus ensures T cells recognize self-MHC",
                    consequence: "Cannot use T cells from one individual to treat another (transplant rejection)"
                }
            },
            
            TCRrecognition: {
                TCRstructure: {
                    chains: "α and β chains (most T cells) or γ and δ chains (minority)",
                    domains: "Variable (V) and constant (C) domains",
                    CDRs: "3 complementarity-determining regions per chain (CDR1, CDR2, CDR3)",
                    CDR3: "Most variable, contacts peptide directly (created at V-J or V-D-J junction)",
                    CDR1_CDR2: "Contact MHC molecule (determine MHC restriction)"
                },
                recognition: {
                    complex: "TCR recognizes peptide-MHC complex (not peptide alone)",
                    contacts: "TCR α and β chains together contact both peptide and MHC",
                    diagonal: "TCR binds diagonally across peptide-MHC groove",
                    specificity: "Both peptide sequence and MHC allele determine recognition"
                },
                coreceptors: {
                    CD4: "Binds MHC-II, enhances signaling (Lck kinase recruited)",
                    CD8: "Binds MHC-I, enhances signaling (Lck kinase recruited)"
                },
                CD3complex: {
                    composition: "TCR αβ + CD3 γε, δε, ζζ chains",
                    function: "CD3 chains contain ITAMs (immunoreceptor tyrosine-based activation motifs) → signal transduction",
                    absence: "TCR αβ alone cannot signal (requires CD3)"
                }
            },
            
            BCRrecognition: {
                BCRstructure: "Membrane-bound antibody (IgM or IgD initially)",
                recognition: "Recognizes intact, 3D antigens (doesn't require MHC presentation)",
                epitopes: {
                    linear: "Contiguous amino acid sequence",
                    conformational: "3D structure (most B cell epitopes)",
                    types: "Proteins, carbohydrates, lipids, nucleic acids, haptens"
                },
                coreceptors: {
                    Igalpha_Igbeta: "CD79a/CD79b - associated with BCR, contain ITAMs → signaling",
                    CD19_CD21: "Coreceptor complex binds C3d on antigens → enhances signaling 1000-10,000x",
                    CD40: "Receives help from CD4+ T cells (CD40L on T cells)"
                },
                crosslinking: "Multiple BCRs must be cross-linked for activation (except with T cell help)"
            }
        },
        
        lymphocyteActivation: {
            TcellActivation: {
                twoSignalModel: {
                    signal1: {
                        description: "Antigen recognition - TCR binds peptide-MHC",
                        specificity: "Determines which T cells are activated",
                        insufficient: "Signal 1 alone → anergy or apoptosis (tolerance mechanism)"
                    },
                    signal2: {
                        description: "Costimulation - CD28 (T cell) binds B7 (CD80/CD86) on APC",
                        expression: "B7 upregulated on APCs during infection (PRR activation)",
                        function: "Confirms 'danger' - ensures T cells only activated during infection/inflammation",
                        absence: "No signal 2 → anergy (functional inactivation)"
                    },
                    signal3: {
                        description: "Cytokines from APC and environment",
                        function: "Direct T cell differentiation into specific subsets",
                        examples: "IL-12 → Th1, IL-4 → Th2, TGF-β + IL-6 → Th17, IL-2 → proliferation"
                    }
                },
                immunologicalSynapse: {
                    definition: "Organized junction between T cell and APC",
                    structure: {
                        cSMAC: "Central supramolecular activation cluster - TCR-pMHC, CD4/CD8, CD28-B7",
                        pSMAC: "Peripheral SMAC - adhesion molecules (LFA-1, ICAM-1)",
                        dSMAC: "Distal SMAC - large molecules excluded (CD45)"
                    },
                    function: "Concentrate signaling molecules, sustain activation signals, direct secretion",
                    duration: "Hours - prolonged contact needed for full activation"
                },
                signaling: {
                    TCR: "TCR + CD3 → Lck (recruited by CD4/CD8) → phosphorylate ITAMs → ZAP-70 → LAT, SLP-76 → PLCγ1",
                    calciumFlux: "PLCγ1 → IP₃ → Ca²⁺ release → calcineurin → NFAT (transcription factor)",
                    PKC: "PLCγ1 → DAG → PKCθ → NF-κB (transcription factor)",
                    RAS_MAPK: "GRB2, SOS → Ras → MAPK pathway → AP-1 (transcription factor)",
                    transcription: "NFAT, NF-κB, AP-1 → IL-2 gene expression"
                },
                outcomes: {
                    proliferation: "IL-2 (autocrine) → clonal expansion (1 cell → thousands)",
                    differentiation: "Acquire effector functions (cytokine production, cytotoxicity)",
                    migration: "Lose lymph node homing receptors, gain tissue homing receptors",
                    memory: "Some cells become long-lived memory T cells"
                },
                coinhibition: {
                    CTLA4: "CD28 homolog with higher affinity for B7 → competes with CD28 → inhibits activation",
                    PD1: "Expressed on activated T cells, binds PD-L1/PD-L2 → inhibits T cell function",
                    checkpoints: "Prevent excessive activation, maintain peripheral tolerance",
                    therapy: "Checkpoint blockade (anti-CTLA-4, anti-PD-1/PD-L1) enhances antitumor immunity"
                }
            },
            
            BcellActivation: {
                Tdependent: {
                    antigens: "Proteins (require processing and MHC-II presentation)",
                    process: [
                        "1. B cell binds antigen via BCR, internalizes",
                        "2. B cell processes antigen, presents peptides on MHC-II",
                        "3. Helper T cell (Th2 or Tfh) recognizes peptide-MHC-II",
                        "4. T cell provides help: CD40L-CD40 interaction + cytokines (IL-4, IL-21)",
                        "5. B cell proliferates, migrates to B cell follicle",
                        "6. Germinal center forms",
                        "7. Somatic hypermutation → affinity maturation (select high-affinity variants)",
                        "8. Class switch recombination (IgM → IgG, IgA, or IgE)",
                        "9. Differentiate into plasma cells (antibody factories) or memory B cells"
                    ],
                    germinalCenter: {
                        location: "B cell follicles in secondary lymphoid organs",
                        zones: {
                            darkZone: "Centroblasts - rapid proliferation, somatic hypermutation (AID enzyme)",
                            lightZone: "Centrocytes - test BCR affinity, compete for T cell help and antigen"
                        },
                        selection: "High-affinity B cells bind antigen on FDCs, present to Tfh → survival signals",
                        apoptosis: "Low-affinity B cells die (no survival signals)",
                        output: "High-affinity plasma cells and memory B cells"
                    },
                    classSwitching: {
                        mechanism: "AID-mediated recombination deletes DNA between switch regions",
                        retains: "V(D)J region unchanged → same antigen specificity",
                        changes: "Constant region → different isotype (IgG, IgA, IgE)",
                        direction: "Cytokines from Th cells: IL-4 → IgE, IFN-γ → IgG, TGF-β → IgA"
                    },
                    features: "Affinity maturation, class switching, robust memory generation"
                },
                Tindependent: {
                    type1: {
                        antigens: "Polyclonal activators (LPS, CpG DNA) - activate via TLRs",
                        mechanism: "Direct BCR + TLR signaling → activation",
                        polyclonal: "Many B cell clones activated (not antigen-specific)",
                        response: "IgM production, no affinity maturation, no class switching"
                    },
                    type2: {
                        antigens: "Repeating polysaccharides (bacterial capsule), large polymers",
                        mechanism: "Extensive BCR cross-linking → strong signal",
                        example: "Pneumococcal polysaccharide vaccine",
                        response: "IgM production, weak memory",
                        children: "Young children (<2 years) respond poorly to TI-2 antigens (immature B cell compartment)"
                    },
                    limitations: "No class switching, no affinity maturation, limited memory"
                }
            }
        },
        
        effectorsAndMemory: {
            effectorTcells: {
                CD4helpers: {
                    Th1: "IFN-γ, IL-2, TNF-α → activate macrophages, promote CTL and IgG responses",
                    Th2: "IL-4, IL-5, IL-13 → activate eosinophils, promote IgE, allergic responses",
                    Th17: "IL-17, IL-22 → recruit neutrophils, enhance barrier function",
                    Tfh: "IL-21, CXCL13 → help B cells in germinal centers",
                    Treg: "IL-10, TGF-β → suppress immune responses"
                },
                CD8cytotoxic: {
                    perforin_granzyme: "Release cytotoxic granules → kill target cells",
                    FasL: "Induce apoptosis via death receptors",
                    IFNgamma: "Activate macrophages, enhance MHC-I",
                    targets: "Virus-infected cells, tumor cells, allogeneic grafts"
                },
                lifespan: "Days to weeks (die by apoptosis after antigen cleared)"
            },
            plasmaCells: {
                morphology: "Enlarged, abundant rough ER (antibody production)",
                secretion: "Up to 2000 antibodies per second",
                location: "Bone marrow (long-lived), lymphoid tissues (short-lived)",
                lifespan: "Short-lived (days) or long-lived (months to years in bone marrow)",
                survival: "IL-6, APRIL, BAFF from stromal cells",
                antibodies: "Serum antibody levels maintained by long-lived plasma cells"
            },
            memoryLymphocytes: {
                Tcells: {
                    central: "TCM - lymph nodes, proliferate extensively",
                    effector: "TEM - tissues, immediate effector functions",
                    tissueResident: "TRM - permanently reside in tissues"
                },
                Bcells: "Reside in spleen, lymph nodes, bone marrow; rapidly produce antibodies upon rechallenge",
                longevity: "Years to lifetime (maintained by IL-7, IL-15; some require periodic antigen stimulation)"
            }
        },
        
        cellular_vs_humoral: {
            cellular: {
                cells: "T lymphocytes",
                targets: "Intracellular pathogens (viruses, intracellular bacteria, parasites), infected cells, tumor cells",
                mechanisms: "Direct cell killing (CD8+), macrophage activation (CD4+ Th1)",
                MHC: "MHC-I (CD8+), MHC-II (CD4+)",
                transplant: "Responsible for graft rejection"
            },
            humoral: {
                cells: "B lymphocytes",
                products: "Antibodies",
                targets: "Extracellular pathogens, toxins, prevent infection",
                mechanisms: "Neutralization, opsonization, complement activation, ADCC",
                transfer: "Passive immunity possible (transfer antibodies)"
            },
            cooperation: "Both work together - antibodies enhance cellular immunity, T cells help B cells"
        },
        
        primaryVsSecondary: {
            comparison: {
                timing: "Primary: 5-10 days; Secondary: 1-3 days",
                antibodyClass: "Primary: IgM then IgG; Secondary: IgG (or IgA, IgE)",
                magnitude: "Primary: moderate; Secondary: 10-100x higher",
                affinity: "Primary: lower; Secondary: higher (affinity maturation)",
                duration: "Primary: weeks-months; Secondary: months-years"
            },
            graph: "Typical serology - IgM rises first (primary), IgG predominates (primary and secondary)"
        },
        
        clinicalApplications: {
            vaccination: {
                principle: "Induce memory without disease",
                types: {
                    live_attenuated: "Weakened pathogen (MMR, varicella, yellow fever) - strong, long-lasting immunity",
                    inactivated: "Killed pathogen (polio-IPV, influenza, hepatitis A) - safer, may need boosters",
                    subunit: "Purified antigens (hepatitis B, HPV, acellular pertussis) - very safe, may need adjuvants",
                    toxoid: "Inactivated toxin (tetanus, diphtheria) - prevents disease from toxin",
                    mRNA: "mRNA encoding antigen (COVID-19) - rapid development, strong immunity",
                    vector: "Harmless virus delivers antigen genes (COVID-19, Ebola)"
                },
                adjuvants: "Substances that enhance immune response (alum, MF59, AS01) - activate innate immunity",
                herdImmunity: "High vaccination rate protects unvaccinated individuals",
                schedule: "Prime-boost - initial dose (prime) + booster doses"
            },
            passiveImmunity: {
                natural: "Maternal IgG crosses placenta, IgA in breast milk",
                artificial: "Injection of antibodies (IVIG, monoclonal antibodies, antitoxins)",
                advantages: "Immediate protection",
                disadvantages: "Temporary (no memory), expensive",
                examples: "Rabies post-exposure, tetanus (unvaccinated wound), hepatitis A exposure, COVID-19 (monoclonal antibodies)"
            },
            immunodeficiency: {
                HIV: "Infects CD4+ T cells → depletes helpers → AIDS (opportunistic infections)",
                SCID: "Severe combined immunodeficiency - no functional T and B cells",
                CVID: "Common variable immunodeficiency - low antibody production",
                CGD: "Chronic granulomatous disease - defective phagocyte killing (innate, but affects adaptive)"
            },
            autoimmunity: {
                breakdown: "Loss of self-tolerance → immune attack on self-tissues",
                examples: "Type 1 diabetes (T cells attack pancreatic β cells), RA (antibodies against joint proteins), SLE (antibodies against nuclear antigens)",
                therapy: "Immunosuppression (corticosteroids, biologics), restore tolerance (experimental)"
            },
            transplantation: {
                rejection: "T cells recognize allogeneic MHC as foreign → attack graft",
                HLA_matching: "Match donor and recipient HLA (MHC) → reduce rejection",
                immunosuppression: "Cyclosporine, tacrolimus (inhibit T cell activation), rapamycin, anti-rejection drugs",
                GVHD: "Graft-versus-host disease - donor T cells attack recipient (bone marrow transplant)"
            },
            cancerImmunotherapy: {
                checkpointInhibitors: "Anti-PD-1, anti-CTLA-4 → enhance T cell killing of tumors",
                CAR_T: "Engineer patient's T cells to recognize tumor antigens → kill cancer cells",
                vaccines: "Therapeutic cancer vaccines (sipuleucel-T for prostate cancer)",
                monoclonalAntibodies: "Target tumor antigens (rituximab, trastuzumab) → ADCC, direct effects"
            }
        },
        
        examples: [
            {
                scenario: "First chickenpox infection (primary response)",
                timeline: [
                    "Day 0-2: VZV virus enters via respiratory tract, replicates locally",
                    "Day 3-7: Innate immunity (IFN, NK cells) partially controls virus",
                    "Day 7-10: DCs present viral antigens to naïve T cells in lymph nodes",
                    "Day 10-14: CD8+ T cells clonally expand, differentiate to CTLs",
                    "Day 10-14: B cells activated, germinal centers form",
                    "Day 14: IgM anti-VZV appears, rash develops (immune response causes rash)",
                    "Day 14-21: CD8+ CTLs kill infected cells, IgG anti-VZV rises",
                    "Day 21: Virus cleared, most effector cells die",
                    "Long-term: Memory T and B cells persist for decades"
                ],
                outcome: "Illness, but lifelong immunity to chickenpox (may reactivate as shingles later)"
            },
            {
                scenario: "Re-exposure to chickenpox (secondary response)",
                timeline: [
                    "Day 0: Exposure to VZV",
                    "Day 0-2: Memory CD8+ T cells recognize infected cells, rapidly kill",
                    "Day 1-3: Memory B cells rapidly produce high-affinity anti-VZV IgG",
                    "Day 3-5: Virus eliminated before symptoms develop"
                ],
                outcome: "No disease (subclinical infection) due to rapid memory response"
            }
        ],
        
        keyTakeaways: [
            "Adaptive immunity is highly specific for individual antigens",
            "Lymphocytes have clonally distributed, diverse antigen receptors (TCR, BCR)",
            "V(D)J recombination generates billions of different receptor specificities",
            "Clonal selection: antigen selects and expands lymphocytes with matching receptors",
            "Central and peripheral tolerance mechanisms prevent autoimmunity",
            "T cells recognize peptide-MHC complexes; B cells recognize intact antigens",
            "Two-signal model ensures T cells activated only during infection (antigen + costimulation)",
            "Germinal centers produce high-affinity antibodies and memory B cells",
            "Immunological memory enables rapid secondary responses upon re-exposure",
            "Memory is basis of vaccination and long-term protective immunity",
            "Cellular (T cell) and humoral (B cell/antibody) immunity work together",
            "Primary response: slow, IgM; Secondary response: fast, high-affinity IgG"
        ]
    };
    
    return content;
}

handleCellularImmunity(problem) {
    const content = {
        topic: "Cellular Immunity (T Cell-Mediated)",
        category: 'adaptive_immunity',
        summary: "Cellular immunity is mediated by T lymphocytes and targets intracellular pathogens, infected cells, and abnormal cells. CD4+ helper T cells orchestrate immune responses through cytokine secretion, while CD8+ cytotoxic T cells directly kill infected and cancerous cells. T cells recognize processed peptide antigens presented on MHC molecules, ensuring surveillance of cellular contents.",
        
        TcellSubsets: {
            CD4helperTcells: {
                MHCrestriction: "Recognize peptides on MHC Class II",
                expression: "CD4 coreceptor binds MHC-II β2 domain",
                activation: "APCs (DCs, macrophages, B cells) present antigens on MHC-II",
                mainFunction: "Coordinate immune responses by secreting cytokines",
                percentage: "~60% of peripheral blood T cells",
                
                Th1: {
                    transcriptionFactor: "T-bet (master regulator)",
                    inducingCytokines: {
                        IL12: "From macrophages and DCs (most important)",
                        IFNgamma: "From NK cells, positive feedback from Th1 cells"
                    },
                    signaling: "IL-12 → STAT4 → T-bet → IFN-γ production",
                    cytokinesProduced: {
                        IFNgamma: {
                            targets: "Macrophages, B cells, CD8+ T cells, endothelium",
                            effects: [
                                "Activate macrophages (enhance killing of intracellular bacteria)",
                                "Upregulate MHC-II and costimulatory molecules",
                                "Promote class switching to IgG2a (opsonizing antibodies)",
                                "Enhance CD8+ T cell responses",
                                "Inhibit Th2 differentiation"
                            ],
                            importance: "Critical for control of intracellular pathogens"
                        },
                        IL2: {
                            function: "T cell growth factor, promotes proliferation",
                            autocrine: "Th1 cells produce and respond to IL-2"
                        },
                        TNFalpha: {
                            effects: "Pro-inflammatory, activates endothelium, induces acute phase response"
                        }
                    },
                    pathogens: {
                        bacteria: "Mycobacterium tuberculosis, Listeria monocytogenes, Salmonella",
                        protozoa: "Leishmania, Toxoplasma gondii",
                        viruses: "Many intracellular viruses"
                    },
                    mechanism: "Activate infected macrophages → enhanced microbicidal activity (ROS, RNS, lysosomal enzymes)",
                    disease: {
                        excessive: "Autoimmune diseases (MS, type 1 diabetes, RA)",
                        deficient: "Susceptibility to intracellular infections",
                        granulomas: "Th1-driven chronic inflammation (tuberculosis)"
                    },
                    signature: "IFN-γ production is hallmark"
                },
                
                Th2: {
                    transcriptionFactor: "GATA-3",
                    inducingCytokines: {
                        IL4: "Critical for Th2 differentiation (source often unclear - may be basophils, mast cells, NKT cells)"
                    },
                    signaling: "IL-4 → STAT6 → GATA-3 → IL-4, IL-5, IL-13 production",
                    cytokinesProduced: {
                        IL4: {
                            effects: [
                                "Promote Th2 differentiation (positive feedback)",
                                "Induce B cell class switching to IgE",
                                "Activate mast cells and basophils",
                                "Inhibit Th1 differentiation",
                                "Induce alternative macrophage activation (M2)"
                            ]
                        },
                        IL5: {
                            targets: "Eosinophils",
                            effects: "Eosinophil development, activation, survival, recruitment"
                        },
                        IL13: {
                            effects: [
                                "Similar to IL-4 (class switching to IgE, M2 activation)",
                                "Mucus production",
                                "Smooth muscle contraction (airways)"
                            ]
                        },
                        IL9: "Mast cell growth factor",
                        IL10: "Anti-inflammatory, regulatory"
                    },
                    pathogens: {
                        helminths: "Parasitic worms (schistosomes, hookworms, roundworms)"
                    },
                    mechanism: {
                        IgE: "IgE binds to mast cells and basophils → degranulation upon antigen encounter",
                        eosinophils: "Release toxic proteins that damage helminth parasites",
                        mucus: "Trap and expel parasites",
                        peristalsis: "Increased gut motility expels worms"
                    },
                    disease: {
                        excessive: "Allergic diseases (asthma, allergic rhinitis, atopic dermatitis, food allergies)",
                        mechanism: "IgE against harmless antigens (allergens) → mast cell degranulation → immediate hypersensitivity"
                    },
                    Th1_Th2_balance: "Reciprocal inhibition - IFN-γ inhibits Th2, IL-4 inhibits Th1",
                    signature: "IL-4, IL-5 production"
                },
                
                Th17: {
                    transcriptionFactor: "RORγt (and RORα)",
                    inducingCytokines: {
                        TGFbeta_IL6: "Together induce Th17 differentiation",
                        IL21: "Autocrine amplification",
                        IL23: "Stabilizes and expands Th17 cells (from DCs and macrophages)"
                    },
                    signaling: "TGF-β + IL-6 → STAT3 → RORγt → IL-17, IL-22 production",
                    cytokinesProduced: {
                        IL17A_IL17F: {
                            targets: "Epithelial cells, endothelial cells, fibroblasts",
                            effects: [
                                "Induce production of chemokines (CXCL1, CXCL8/IL-8)",
                                "Recruit neutrophils to infection sites",
                                "Induce antimicrobial peptides (defensins)",
                                "Enhance barrier function"
                            ],
                            importance: "Critical for neutrophil-mediated immunity"
                        },
                        IL22: {
                            targets: "Epithelial cells",
                            effects: [
                                "Enhance barrier integrity",
                                "Induce antimicrobial peptides",
                                "Promote tissue repair",
                                "NOT directly on immune cells (no IL-22R)"
                            ]
                        },
                        IL21: "T cell growth factor, positive feedback"
                    },
                    pathogens: {
                        extracellular_bacteria: "Klebsiella pneumoniae, Citrobacter rodentium",
                        fungi: "Candida albicans (mucosal), Pneumocystis"
                    },
                    mechanism: "Recruit and activate neutrophils, enhance mucosal barrier defenses",
                    disease: {
                        excessive: "Autoimmune diseases (RA, psoriasis, MS, IBD), chronic inflammation",
                        deficient: "Chronic mucocutaneous candidiasis (CMC), susceptibility to extracellular bacteria/fungi",
                        IL17inhibitors: "Therapeutic antibodies (secukinumab, ixekizumab) for psoriasis, ankylosing spondylitis"
                    },
                    plasticity: "Can convert to Th1-like cells in some conditions",
                    signature: "IL-17 production"
                },
                
                Tfh: {
                    name: "T follicular helper cells",
                    transcriptionFactor: "Bcl-6",
                    location: "B cell follicles and germinal centers in secondary lymphoid organs",
                    homing: "CXCR5 (receptor for CXCL13) directs migration to follicles",
                    inducingCytokines: "IL-6, IL-21, ICOS signaling",
                    costimulation: "ICOS-ICOSL interaction (critical for Tfh)",
                    cytokinesProduced: {
                        IL21: {
                            targets: "B cells",
                            effects: [
                                "Promote B cell proliferation",
                                "Support class switching",
                                "Support plasma cell differentiation"
                            ]
                        },
                        IL4: "From Tfh2 subset → IgE class switching"
                    },
                    interactions: {
                        PD1_PDL1: "Tfh express high PD-1, interact with B cells expressing PD-L1/L2",
                        CD40L_CD40: "Essential for B cell help"
                    },
                    function: {
                        germinalCenter: "Provide help to B cells in germinal centers",
                        selection: "Select high-affinity B cell variants (B cells compete for Tfh help)",
                        classSwitching: "Direct antibody class switching through cytokines",
                        plasmaCells: "Promote differentiation to plasma cells and memory B cells"
                    },
                    importance: "Essential for high-affinity antibody responses and long-lived plasma cells",
                    disease: {
                        deficiency: "Impaired antibody responses, especially class-switched antibodies",
                        excessive: "Autoantibody production (SLE), lymphoid malignancies"
                    },
                    circulating: "Circulating Tfh-like cells can be detected in blood"
                },
                
                Treg: {
                    name: "Regulatory T cells",
                    transcriptionFactor: "Foxp3 (master regulator, essential)",
                    markers: "CD4+ CD25^high Foxp3+",
                    types: {
                        natural_tTreg: {
                            development: "Thymus (recognize self-antigens with intermediate affinity during negative selection)",
                            function: "Maintain self-tolerance, suppress autoreactive T cells"
                        },
                        induced_pTreg: {
                            development: "Periphery (from conventional CD4+ T cells)",
                            induction: "TGF-β, retinoic acid, IL-2",
                            function: "Regulate immune responses to commensal bacteria, food antigens, fetus"
                        }
                    },
                    cytokinesProduced: {
                        IL10: {
                            effects: [
                                "Inhibit DC and macrophage activation",
                                "Suppress pro-inflammatory cytokine production",
                                "Inhibit T cell proliferation"
                            ]
                        },
                        TGFbeta: {
                            effects: [
                                "Immunosuppressive",
                                "Induce other Tregs",
                                "Inhibit effector T cell function"
                            ]
                        },
                        IL35: "Immunosuppressive cytokine"
                    },
                    suppressiveMechanisms: {
                        cytokines: "IL-10, TGF-β, IL-35",
                        CTLA4: {
                            mechanism: "Constitutively express CTLA-4 (high affinity for B7) → outcompete CD28 → inhibit T cell activation",
                            transEndocytosis: "Remove B7 from APCs"
                        },
                        IL2consumption: "High CD25 (IL-2Rα) → consume IL-2 → deprive effector T cells",
                        granzyme_perforin: "Can kill effector T cells directly",
                        metabolicDisruption: "Deplete local ATP, adenosine signaling",
                        cellContact: "LAG-3, TGF-β on surface"
                    },
                    importance: {
                        selfTolerance: "Prevent autoimmunity",
                        regulation: "Control magnitude and duration of immune responses",
                        transplantation: "Promote graft tolerance",
                        pregnancy: "Maternal tolerance to fetus",
                        microbiome: "Tolerance to commensal bacteria",
                        oralTolerance: "Tolerance to food antigens"
                    },
                    disease: {
                        deficiency: {
                            IPEX: "Immune dysregulation, polyendocrinopathy, enteropathy, X-linked syndrome (Foxp3 mutation)",
                            consequences: "Severe autoimmunity in infancy (type 1 diabetes, thyroiditis, eczema, food allergies)"
                        },
                        excessive: "May suppress antitumor immunity, chronic infections (HIV, HCV accumulate Tregs)",
                        therapeutic: "Expand Tregs for transplantation, autoimmune disease; deplete Tregs for cancer immunotherapy"
                    },
                    stability: "Foxp3 expression generally stable, but can be lost in inflammatory conditions"
                },
                
                polarization: {
                    concept: "Naïve CD4+ T cells differentiate into subsets based on cytokine environment",
                    timing: "During initial activation by DCs",
                    flexibility: "Some plasticity - can shift between subsets in certain conditions (especially Th17 ↔ Treg)",
                    disease: "Inappropriate polarization contributes to immunopathology"
                }
            },
            
            CD8cytotoxicTcells: {
                MHCrestriction: "Recognize peptides on MHC Class I",
                expression: "CD8 coreceptor (α/β heterodimer) binds MHC-I α3 domain",
                recognition: "All nucleated cells express MHC-I → CD8+ T cells survey all cells",
                mainFunction: "Kill infected, cancerous, or allogeneic cells",
                percentage: "~30% of peripheral blood T cells",
                
                activation: {
                    signal1: "TCR recognizes peptide-MHC-I",
                    signal2: "CD28-B7 costimulation",
                    signal3: {
                        IL2: "Promotes proliferation (often from CD4+ T cells)",
                        IL12: "Enhances CTL differentiation",
                        typeIIFN: "Activates CTL"
                    },
                    licensing: {
                        concept: "CD4+ T cells 'license' DCs to activate CD8+ T cells",
                        mechanism: "CD4+ T cells (via CD40L) activate DCs → DCs upregulate costimulation and IL-12 → better CD8+ activation",
                        importance: "Ensures CD8+ responses occur only when CD4+ helpers also recognize antigen"
                    },
                    clonalExpansion: "Massive proliferation (10,000-100,000 fold expansion over 7-10 days)"
                },
                
                cytotoxicMechanisms: {
                    granulesExocytosis: {
                        recognition: "CTL TCR binds peptide-MHC-I on target cell",
                        conjugate: "Immunological synapse forms (CTL adheres tightly to target)",
                        polarization: "Lytic granules move to synapse (microtubule-organizing center reorients)",
                        degranulation: "Granules fuse with CTL membrane, release contents toward target",
                        perforin: {
                            structure: "Pore-forming protein (similar to complement C9)",
                            mechanism: "Polymerizes in target membrane → forms transmembrane pores (~16 nm diameter)",
                            calcium: "Perforin activity enhanced by Ca²⁺ influx into target"
                        },
                        granzymes: {
                            type: "Family of serine proteases (granzyme A, B most abundant)",
                            entry: "Enter target cell through perforin pores",
                            gzB: {
                                mechanism: "Cleaves after aspartate residues",
                                targets: "Activate caspases (caspase-3, -7) → apoptosis",
                                direct: "Also directly cleave cellular substrates (BID, ICAD)"
                            },
                            gzA: "Caspase-independent cell death, DNA damage",
                            result: "Target cell undergoes apoptosis within 2-4 hours"
                        },
                        apoptosis: {
                            characteristics: "Programmed cell death",
                            morphology: "Cell shrinkage, chromatin condensation, DNA fragmentation, membrane blebbing",
                            phagocytosis: "Apoptotic cells display 'eat me' signals → phagocytosed cleanly",
                            noInflammation: "Minimal inflammation (vs necrosis)"
                        },
                        serialKilling: "CTL detaches, can kill multiple targets sequentially (5-10 targets)"
                    },
                    
                    deathReceptorPathway: {
                        FasL: {
                            expression: "Upregulated on activated CTLs",
                            target: "Fas (CD95) on target cells",
                            mechanism: "FasL binds Fas → trimerization → recruit FADD → activate caspase-8 → apoptosis",
                            importance: "Alternative killing pathway, important for eliminating activated T cells (AICD)"
                        },
                        TRAIL: {
                            expression: "TNF-related apoptosis-inducing ligand",
                            receptors: "DR4, DR5 (death receptors)",
                            selectivity: "Preferentially kills tumor cells (normal cells express decoy receptors)"
                        }
                    },
                    
                    cytokines: {
                        IFNgamma: {
                            effects: [
                                "Inhibit viral replication in neighboring cells",
                                "Upregulate MHC-I (enhance antigen presentation)",
                                "Activate macrophages",
                                "Direct antiviral effects"
                            ]
                        },
                        TNFalpha: "Can induce apoptosis, pro-inflammatory"
                    }
                },
                
                targets: {
                    virusInfected: {
                        detection: "Viral peptides presented on MHC-I",
                        examples: "Influenza, HIV, CMV, EBV, hepatitis B/C",
                        importance: "Essential for clearing intracellular viral infections",
                        evasion: "Many viruses block MHC-I presentation (but then susceptible to NK cells)"
                    },
                    intracellularBacteria: {
                        examples: "Listeria monocytogenes, Mycobacterium tuberculosis",
                        mechanism: "Kill infected macrophages, release bacteria for killing by fresh macrophages"
                    },
                    tumorCells: {
                        recognition: "Tumor neoantigens (mutated proteins) on MHC-I",
                        surveillance: "CD8+ T cells patrol for abnormal cells",
                        evasion: [
                            "Downregulate MHC-I",
                            "Lack costimulation (anergy)",
                            "Express checkpoint ligands (PD-L1) → inhibit CTLs",
                            "Immunosuppressive tumor microenvironment (Tregs, MDSCs, TGF-β, IL-10)"
                        ],
                        immunotherapy: "Checkpoint inhibitors (anti-PD-1, anti-CTLA-4) enhance CTL activity against tumors"
                    },
                    allogeneicGrafts: {
                        recognition: "Foreign MHC-I on donor cells",
                        outcome: "Acute cellular rejection",
                        prevention: "HLA matching, immunosuppression"
                    }
                },
                
                exhaustion: {
                    concept: "Chronic antigen stimulation → dysfunctional CTLs",
                    characteristics: [
                        "Progressive loss of effector functions (IFN-γ, IL-2, cytotoxicity)",
                        "Upregulate inhibitory receptors (PD-1, TIM-3, LAG-3, CTLA-4)",
                        "Altered transcriptional program",
                        "Impaired proliferation and survival"
                    ],
                    causes: "Chronic infections (HIV, HCV, LCMV), tumors",
                    reversibility: "Checkpoint blockade (anti-PD-1) partially reverses exhaustion",
                    purpose: "May prevent immunopathology during persistent infection"
                },
                
                memory: {
                    TCM: "Central memory - lymph nodes, proliferate extensively",
                    TEM: "Effector memory - tissues, immediate effector function",
                    TRM: "Tissue-resident memory - permanently reside in tissues (skin, gut, lung), first responders",
                    maintenance: "IL-7, IL-15",
                    longevity: "Decades (e.g., vaccinia virus memory T cells persist >50 years)"
                }
            },
            
            unconventionalTcells: {
                gammaDeltaTcells: {
                    TCR: "γδ TCR (not αβ)",
                    percentage: "1-5% of peripheral T cells, higher in tissues (epithelial)",
                    MHCindependent: "Do NOT recognize peptide-MHC (recognize lipids, stress molecules, unprocessed antigens)",
                    recognition: "Phosphoantigens, MICA/B (stress molecules), lipids presented on CD1",
                    location: "Enriched in epithelia (skin, gut, reproductive tract)",
                    function: {
                        rapid: "Respond quickly (bridge innate-adaptive)",
                        cytotoxicity: "Kill stressed/infected cells",
                        cytokines: "Produce IFN-γ, IL-17",
                        tissueRepair: "Promote wound healing, epithelial homeostasis"
                    },
                    importance: "Early defense at barrier sites, anti-mycobacterial immunity",
                    subsets: "Vγ9Vδ2 T cells (most abundant in blood, respond to phosphoantigens from bacteria)"
                },
                
                NKTcells: {
                    definition: "Express both T cell (TCR) and NK cell markers",
                    TCR: "Semi-invariant TCR (limited diversity)",
                    recognition: "Lipid antigens presented on CD1d (MHC-like molecule)",
                    types: {
                        typeI_iNKT: {
                            TCR: "Invariant Vα14-Jα18 (mice), Vα24-Jα18 (humans)",
                            antigen: "α-galactosylceramide (α-GalCer), glycolipids"
                        },
                        typeII: "More diverse TCR",
                        typeIII: "CD1d-independent"
                    },
                    activation: "Very rapid cytokine production (within hours)",
                    cytokines: "Both Th1 (IFN-γ) and Th2 (IL-4) cytokines simultaneously",
                    function: {
                        bridge: "Link innate and adaptive immunity",
                        regulate: "Can enhance or suppress immune responses",
                        antimicrobial: "Defense against bacteria (S. pneumoniae), parasites",
                        antitumor: "Recognize lipid antigens on tumors"
                    },
                    location: "Liver (high frequency), thymus, spleen, adipose tissue",
                    therapeutic: "α-GalCer used experimentally to activate NKT cells (cancer, infections)"
                },
                
                MAIT_cells: {
                    name: "Mucosal-Associated Invariant T cells",
                    TCR: "Semi-invariant Vα7.2-Jα33 (humans)",
                    recognition: "Bacterial riboflavin (vitamin B2) metabolites presented on MR1",
                    location: "Abundant in blood, liver, mucosal tissues",
                    function: "Antibacterial immunity (E. coli, S. aureus, M. tuberculosis)",
                    activation: "Rapid cytokine production (IFN-γ, TNF-α, IL-17), cytotoxicity",
                    importance: "May constitute 1-10% of T cells in blood"
                }
            }
        },
        
        antigenPresentation_MHC: {
            MHC_I_pathway: {
                source: "Endogenous proteins (cytoplasmic)",
                degradation: {
                    proteasome: "Large protein complex degrades ubiquitinated proteins → peptides (8-10 aa)",
                    immunoproteasome: "IFN-γ-inducible variant, optimized for MHC-I peptides"
                },
                transport: "TAP (TAP1/TAP2 heterodimer) transports peptides into ER",
                loading: {
                    complex: "MHC-I heavy chain + β₂m + tapasin + calreticulin + ERp57 + TAP",
                    editing: "Tapasin ensures high-affinity peptides loaded",
                    exit: "Peptide-MHC-I leaves ER via Golgi → cell surface"
                },
                surveillance: "Display snapshot of cellular protein production",
                normal: "Self-peptides displayed (tolerated)",
                abnormal: "Viral peptides, tumor neoantigens → recognized by CD8+ T cells"
            },
            
            MHC_II_pathway: {
                source: "Exogenous proteins (extracellular)",
                uptake: "Phagocytosis, receptor-mediated endocytosis, macropinocytosis",
                degradation: {
                    location: "Endosomes/lysosomes (pH 4.5-5.5)",
                    enzymes: "Cathepsins (cysteine and aspartyl proteases)",
                    peptides: "12-25 amino acids (longer than MHC-I)"
                },
                MHC_II_synthesis: {
                    ER: "α and β chains pair with invariant chain (Ii/CD74)",
                    CLIP: "Ii CLIP region occupies peptide-binding groove",
                    trafficking: "MHC-II-Ii complex → endosome"
                },
                peptideLoading: {
                    fusion: "MHC-II vesicle fuses with endosome containing antigens",
                    HLADM: "Catalyzes CLIP removal, facilitates peptide loading",
                    HLADO: "Stabilizes certain peptide-MHC-II complexes"
                },
                surface: "Peptide-MHC-II displayed → CD4+ T cell recognition"
            },
            
            crossPresentation: {
                definition: "APCs (especially DCs) present exogenous antigens on MHC-I",
                pathways: {
                    cytosolic: "Antigens escape endosome → cytosol → proteasome → TAP → MHC-I",
                    vacuolar: "Proteasome or other proteases in endosome → load MHC-I in endosome"
                },
                specialists: "cDC1 (CD8α+ DCs in mice, CD141+ in humans) most efficient",
                importance: {
                    viruses: "Activate CD8+ T cells against viruses that don't infect DCs",
                    tumors: "Tumor antigens from dying cells → CD8+ T cell activation",
                    grafts: "Indirect allorecognition in transplantation"
                },
                regulation: "TLR signaling enhances cross-presentation"
            }
        },
        
        TcellActivation_detail: {
            threSignals: {
                signal1: {
                    TCR_pMHC: "TCR recognizes peptide-MHC, CD4/CD8 stabilizes",
                    threshold: "Must be sustained (hours), multiple TCRs engaged",
                    affinity: "TCR-pMHC affinity influences outcome"
                },
                signal2: {
                    CD28_B7: "CD28 (T cell) binds CD80/CD86 (APC)",
                    expression: "B7 upregulated on APCs during infection (PRR signals)",
                    function: "Enhances TCR signaling, promotes survival (Bcl-xL), IL-2 production",
                    absence: "Signal 1 alone → anergy or death"
                },
                signal3: {
                    cytokines: "IL-12 (Th1), IL-4 (Th2), TGF-β+IL-6 (Th17), IL-2 (proliferation)",
                    function: "Direct differentiation, promote expansion"
                }
            },
            
            signalTransduction: {
                TCR_CD3: "TCR αβ binds pMHC, CD3 chains transduce signal (ITAMs)",
                proximal: {
                    Lck: "Src-family kinase (recruited by CD4/CD8) phosphorylates CD3 ITAMs",
                    ZAP70: "Binds phosphorylated ITAMs, activated by Lck",
                    LAT_SLP76: "Scaffolding proteins recruit downstream effectors"
                },
                pathways: {
                    PLCgamma: "Hydrolyzes PIP₂ → IP₃ + DAG",
                    calcium: "IP₃ → Ca²⁺ release → calcineurin → NFAT (transcription factor)",
                    PKC: "DAG → PKCθ → IKK → NF-κB (transcription factor)",
                    RAS_MAPK: "GRB2-SOS → Ras → MEK → ERK → AP-1 (transcription factor)"
                },
                transcription: {
                    NFAT: "IL-2 gene expression",
                    NFkappaB: "Survival genes, cytokines",
                    AP1: "Proliferation, cytokines"
                },
                IL2: "Autocrine growth factor → proliferation"
            },
            
            outcomes: {
                proliferation: "Clonal expansion (7-10 days, 10,000-fold)",
                differentiation: "Acquire effector functions",
                migration: "Downregulate CCR7/CD62L, upregulate tissue-homing receptors",
                memory: "Some cells become long-lived memory"
            }
        },
        
        effectorFunctions: {
            CD4_help: {
                Bcells: "CD40L-CD40, cytokines → antibody production",
                macrophages: "IFN-γ → enhanced killing",
                CD8: "IL-2, 'licensing' of DCs",
                recruitment: "Chemokines attract other immune cells"
            },
            CD8_cytotoxicity: {
                killing: "Perforin/granzyme, Fas-FasL",
                IFNgamma: "Antiviral, activate macrophages",
                surveillance: "Constantly patrol tissues"
            }
        },
        
        immuneEvasion: {
            viral: [
                "Block MHC-I presentation (CMV US2, US3, US6, US11; adenovirus E3-19K; HSV ICP47)",
                "Inhibit TAP (HSV)",
                "Produce MHC-I homologs (CMV UL18)",
                "Inhibit apoptosis (many viruses)",
                "Inhibit interferon (many mechanisms)",
                "Latency (HSV, VZV, HIV)",
                "Antigenic variation (HIV, influenza)"
            ],
            tumor: [
                "Downregulate MHC-I or TAP",
                "Loss of tumor antigens",
                "Express checkpoint ligands (PD-L1)",
                "Recruit Tregs, MDSCs",
                "Secrete immunosuppressive factors (TGF-β, IL-10, adenosine)",
                "Fas ligand expression (kill T cells)",
                "Indoleamine 2,3-dioxygenase (IDO) - tryptophan depletion"
            ]
        },
        
        clinicalApplications: {
            vaccines: {
                goal: "Induce protective CD4+ and CD8+ T cell responses",
                live_attenuated: "Best for T cell responses (replicate, express antigens in cytoplasm)",
                viral_vectors: "Deliver antigens into cytoplasm → MHC-I presentation → CD8+ responses"
            },
            
            cancerImmunotherapy: {
                checkpointInhibitors: {
                    antiPD1: "Pembrolizumab, nivolumab - block PD-1 on T cells",
                    antiPDL1: "Atezolizumab, durvalumab - block PD-L1 on tumors",
                    antiCTLA4: "Ipilimumab - block CTLA-4 on T cells",
                    mechanism: "Remove 'brakes' on T cells → enhanced antitumor immunity",
                    success: "Dramatic responses in melanoma, lung cancer, others",
                    toxicity: "Immune-related adverse events (autoimmunity)"
                },
                CAR_T: {
                    concept: "Engineer patient's T cells to express chimeric antigen receptor (CAR)",
                    CAR_structure: "Extracellular scFv (antibody fragment) + transmembrane + CD3ζ + costimulatory domains (CD28, 4-1BB)",
                    recognition: "MHC-independent (antibody-like recognition)",
                    targets: "CD19 (B cell malignancies), BCMA (multiple myeloma), others",
                    manufacturing: "Collect T cells → transduce with CAR gene (lentivirus) → expand → infuse",
                    success: "Dramatic responses in B-ALL, B-NHL",
                    toxicity: "Cytokine release syndrome (CRS), neurotoxicity, B cell aplasia",
                    challenges: "Solid tumors (poor infiltration, hostile microenvironment)"
                },
                adoptiveTransfer: {
                    TIL: "Tumor-infiltrating lymphocytes - expand ex vivo, reinfuse",
                    TCR_T: "Engineer T cells to express tumor-specific TCR"
                },
                vaccines: {
                    therapeutic: "Sipuleucel-T (prostate cancer) - DC vaccine",
                    neoantigen: "Personalized vaccines targeting tumor neoantigens"
                }
            },
            
            autoimmunity: {
                Th1_mediated: "Type 1 diabetes, MS - T cells attack self-tissues",
                Th17_mediated: "RA, psoriasis - excessive inflammation",
                therapy: {
                    immunosuppression: "Corticosteroids, cyclosporine, tacrolimus (calcineurin inhibitors)",
                    biologics: "Anti-TNF, anti-IL-17, anti-IL-12/23, anti-CD20 (deplete B cells), CTLA-4-Ig (abatacept)",
                    Tregs: "Expand or infuse Tregs (experimental)"
                }
            },
            
            transplantation: {
                rejection: {
                    acute: "T cell-mediated (days to months)",
                    chronic: "Slow fibrosis (months to years)",
                    hyperacute: "Antibody-mediated (minutes to hours)"
                },
                prevention: {
                    HLA_matching: "Match MHC (HLA-A, -B, -DR minimally)",
                    immunosuppression: [
                        "Calcineurin inhibitors (cyclosporine, tacrolimus) - block NFAT",
                        "mTOR inhibitors (rapamycin, everolimus) - block IL-2 signaling",
                        "Anti-metabolites (mycophenolate, azathioprine) - block lymphocyte proliferation",
                        "Corticosteroids - broad anti-inflammatory",
                        "Biologics (anti-IL-2R, anti-CD52, CTLA-4-Ig)"
                    ]
                },
                GVHD: {
                    mechanism: "Donor T cells (in bone marrow graft) attack recipient tissues",
                    targets: "Skin, liver, GI tract",
                    acute_vs_chronic: "Acute <100 days, chronic >100 days",
                    beneficial: "Graft-versus-leukemia (GVL) effect",
                    prevention: "T cell depletion, immunosuppression, match HLA"
                }
            },
            
            infections: {
                HIV: "Infects CD4+ T cells (via CD4 and CCR5/CXCR4) → depletes helpers → AIDS",
                TB: "Requires Th1 responses (IFN-γ, macrophage activation), granuloma formation",
                parasites: "Intracellular (Plasmodium, Toxoplasma) require Th1; helminths require Th2"
            }
        },
        
        keyTakeaways: [
            "CD4+ helper T cells orchestrate immune responses through cytokine secretion",
            "CD8+ cytotoxic T cells kill infected and cancerous cells",
            "T cells recognize peptide antigens presented on MHC molecules",
            "MHC-I presents endogenous peptides to CD8+; MHC-II presents exogenous to CD4+",
            "Th1 cells activate macrophages (intracellular pathogens)",
            "Th2 cells activate eosinophils and promote IgE (helminths, allergies)",
            "Th17 cells recruit neutrophils (extracellular bacteria, fungi)",
            "Tfh cells help B cells in germinal centers",
            "Tregs suppress immune responses and maintain tolerance",
            "CTLs kill via perforin/granzyme and Fas-FasL pathways",
            "T cell activation requires antigen recognition + costimulation + cytokines",
            "Memory T cells provide rapid secondary responses",
            "Checkpoint inhibitors enhance antitumor immunity by blocking inhibitory receptors",
            "CAR-T cells are engineered to recognize tumor antigens"
        ]
    };
    
    return content;
}

handleHumoralImmunity(problem) {
    const content = this.lessons.humoral_immunity;
    return content;
}

handleImmuneCells(problem) {
    const content = this.lessons.immune_cells;
    return content;
}

handleComplementSystem(problem) {
    const content = this.lessons.complement_system;
    return content;
}

handleAntibodies(problem) {
    const content = {
        topic: "Antibody Structure and Function",
        category: 'molecular_immunology',
        summary: "Antibodies (immunoglobulins) are Y-shaped glycoproteins produced by B cells that recognize and bind specific antigens. They consist of two heavy chains and two light chains forming a modular structure with variable regions for antigen recognition and constant regions for effector functions. Five antibody classes (IgG, IgM, IgA, IgE, IgD) have distinct functions and tissue distributions.",
        
        structure: {
            basicStructure: {
                composition: "Two heavy chains (H) + two light chains (L)",
                bonds: "Disulfide bonds link chains together",
                symmetry: "Bilaterally symmetric - two identical antigen-binding sites",
                flexibility: "Hinge region provides flexibility between Fab arms"
            },
            
            chains: {
                heavyChain: {
                    length: "~450-550 amino acids",
                    domains: "VH + CH1 + hinge + CH2 + CH3 (IgG, IgA, IgD) or CH4 (IgM, IgE)",
                    types: "γ (IgG), μ (IgM), α (IgA), ε (IgE), δ (IgD)",
                    determines: "Antibody class (isotype)"
                },
                lightChain: {
                    length: "~220 amino acids",
                    domains: "VL + CL",
                    types: "κ (kappa) or λ (lambda) - functionally equivalent",
                    ratio: "κ:λ ≈ 2:1 in humans, 20:1 in mice",
                    exclusion: "Each B cell expresses only one light chain type"
                }
            },
            
            domains: {
                immunoglobulin_fold: {
                    structure: "~110 amino acids, β-sheet sandwich (7-9 strands), stabilized by disulfide bond",
                    conservation: "Found in many immune proteins (TCR, MHC, costimulatory molecules) - Ig superfamily"
                },
                variable_V: {
                    VH_VL: "N-terminal domains of heavy and light chains",
                    function: "Form antigen-binding site together",
                    diversity: "Generated by V(D)J recombination and somatic hypermutation",
                    CDRs: "Complementarity-determining regions (hypervariable loops)",
                    framework: "Conserved regions scaffold CDRs"
                },
                constant_C: {
                    CL: "One domain in light chain",
                    CH1_CH2_CH3: "Three domains in IgG/IgA heavy chain (four in IgM/IgE)",
                    function: "Effector functions (complement, Fc receptors)",
                    glycosylation: "N-glycan at Asn297 (IgG) affects Fc receptor binding"
                }
            },
            
            regions: {
                Fab: {
                    name: "Fragment antigen-binding",
                    composition: "VH-CH1 + VL-CL",
                    number: "Two per antibody molecule",
                    function: "Antigen recognition and binding",
                    generation: "Papain cleavage",
                    monovalent: "Each Fab has one antigen-binding site"
                },
                Fc: {
                    name: "Fragment crystallizable",
                    composition: "CH2-CH3 (both heavy chains)",
                    function: "Effector functions",
                    generation: "Papain cleavage",
                    interactions: {
                        FcR: "Fc receptors on immune cells (macrophages, neutrophils, NK cells, mast cells)",
                        C1q: "Complement component (classical pathway activation)",
                        FcRn: "Neonatal Fc receptor (IgG recycling, placental transfer, half-life)"
                    }
                },
                F_ab_prime_2: {
                    name: "F(ab')₂",
                    composition: "Both Fab arms connected by hinge disulfides",
                    generation: "Pepsin cleavage (digests Fc)",
                    bivalent: "Can cross-link antigens"
                },
                hinge: {
                    location: "Between CH1 and CH2",
                    sequence: "Proline-rich, flexible",
                    function: "Allows Fab arms to move independently",
                    disulfides: "Heavy-heavy interchain disulfide bonds",
                    variability: "Length and flexibility vary by isotype"
                }
            },
            
            antigenBinding: {
                paratope: "Antigen-binding site on antibody (formed by VH and VL)",
                epitope: "Specific site on antigen recognized by antibody",
                
                CDRs: {
                    definition: "Complementarity-determining regions - hypervariable loops",
                    number: "Three CDRs per variable domain (CDR1, CDR2, CDR3)",
                    total: "Six CDRs form antigen-binding site (3 from VH, 3 from VL)",
                    CDR3: {
                        variability: "Most variable (created by V-D-J or V-J junction)",
                        contribution: "Usually provides most antigen contacts",
                        diversity: "N-addition creates enormous diversity"
                    },
                    CDR1_CDR2: {
                        variability: "Less variable (encoded by germline V segments)",
                        function: "Often contact antigen periphery"
                    }
                },
                
                framework: {
                    regions: "FR1, FR2, FR3, FR4 - relatively conserved",
                    function: "Scaffold CDRs in correct 3D configuration",
                    importance: "Maintain Ig fold structure"
                },
                
                interactions: {
                    forces: "Hydrogen bonds, ionic interactions, van der Waals forces, hydrophobic interactions",
                    complementarity: "Shape complementarity between paratope and epitope",
                    affinity: {
                        definition: "Strength of binding between one paratope and one epitope",
                        measurement: "Kd (dissociation constant), typically nM to pM range",
                        maturation: "Affinity increases during immune response (somatic hypermutation)"
                    },
                    avidity: {
                        definition: "Overall binding strength (combines affinity + valency)",
                        IgG: "Bivalent - can cross-link antigens",
                        IgM: "Pentameric - 10 binding sites → very high avidity despite lower affinity"
                    }
                },
                
                epitopes: {
                    linear: {
                        definition: "Contiguous amino acid sequence",
                        recognition: "Denaturation-resistant",
                        frequency: "Minority of B cell epitopes (~10%)"
                    },
                    conformational: {
                        definition: "3D structure formed by non-contiguous residues",
                        recognition: "Denaturation-sensitive",
                        frequency: "Majority of B cell epitopes (~90%)",
                        importance: "Reflect native protein structure"
                    }
                }
            }
        },
        
        antibodyClasses: {
            summary: "Five classes (isotypes) determined by heavy chain constant region",
            
            IgG: {
                heavyChain: "γ (gamma)",
                subclasses: "IgG1, IgG2, IgG3, IgG4 (humans)",
                structure: "Monomer",
                molecularWeight: "~150 kDa",
                serum: {
                    concentration: "8-16 mg/ml (~75% of total Ig)",
                    halfLife: "~21-23 days (longest, due to FcRn recycling)"
                },
                distribution: "Blood, tissues (can cross from blood to tissues)",
                
                functions: {
                    neutralization: "Block pathogen binding to host cells, neutralize toxins",
                    opsonization: {
                        mechanism: "Fc region binds FcγR on phagocytes",
                        receptors: "FcγRI (high affinity), FcγRII, FcγRIII (low affinity)",
                        outcome: "Enhanced phagocytosis (100-1000x)"
                    },
                    complementActivation: {
                        isotypes: "IgG1, IgG3 > IgG2 >> IgG4",
                        mechanism: "C1q binds Fc regions (requires ≥2 IgG in close proximity)",
                        pathway: "Classical complement pathway"
                    },
                    ADCC: {
                        mechanism: "NK cells, macrophages express FcγRIIIa",
                        outcome: "Kill antibody-coated targets"
                    },
                    placental_transfer: {
                        receptor: "FcRn (neonatal Fc receptor)",
                        mechanism: "Active transport across placenta",
                        importance: "Provides passive immunity to fetus/newborn (first 6 months)",
                        exclusive: "Only IgG crosses placenta (not IgM, IgA, IgE, IgD)"
                    },
                    FcRn_recycling: {
                        mechanism: "IgG binds FcRn in acidic endosomes → recycled to surface → released (pH 7.4)",
                        result: "Long half-life (~3 weeks)",
                        therapeutic: "Engineered IgG with enhanced FcRn binding → longer half-life"
                    }
                },
                
                response: "Predominant antibody in secondary immune response",
                memory: "IgG indicates past infection or vaccination",
                therapeutic: "Most therapeutic monoclonal antibodies are IgG",
                
                subclasses: {
                    IgG1: {
                        frequency: "~65% of total IgG",
                        function: "Excellent opsonization and complement activation",
                        response: "Protein antigens"
                    },
                    IgG2: {
                        frequency: "~25%",
                        function: "Polysaccharide antigens (bacterial capsules)",
                        complement: "Weak complement activation"
                    },
                    IgG3: {
                        frequency: "~5%",
                        function: "Strong complement activation, long hinge region",
                        halfLife: "Shorter (~7 days)"
                    },
                    IgG4: {
                        frequency: "~5%",
                        function: "Anti-inflammatory, does NOT activate complement or bind FcγR well",
                        unique: "Can undergo Fab arm exchange (bispecific)",
                        chronic: "Predominates in chronic antigen exposure, parasites"
                    }
                }
            },
            
            IgM: {
                heavyChain: "μ (mu)",
                structure: {
                    monomer: "On B cell surface (membrane IgM = BCR)",
                    pentamer: "Secreted form - 5 monomers + J chain",
                    hexamer: "Rare form without J chain (very efficient complement activator)"
                },
                molecularWeight: "~900 kDa (pentamer)",
                Jchain: "Joining chain - links monomers via disulfide bonds",
                serum: {
                    concentration: "0.5-2 mg/ml (~10% of total Ig)",
                    halfLife: "~5 days (short)"
                },
                distribution: "Mainly intravascular (too large to cross endothelium easily)",
                
                functions: {
                    firstResponder: "First antibody produced in primary response (before class switching)",
                    complementActivation: {
                        efficiency: "Most efficient complement activator (one IgM pentamer can activate)",
                        mechanism: "Multiple Fc regions bind C1q",
                        importance: "Critical for early bacterial clearance"
                    },
                    agglutination: {
                        valency: "10 antigen-binding sites (pentamer)",
                        avidity: "Very high despite lower individual affinity",
                        function: "Agglutinate bacteria, prevent dissemination"
                    },
                    natural_antibodies: {
                        source: "B-1 cells produce IgM without T cell help",
                        specificity: "Polyreactive (low affinity, broad specificity)",
                        targets: "Phosphorylcholine, carbohydrates",
                        function: "Immediate protection, clear apoptotic cells"
                    }
                },
                
                response: "Appears 5-7 days after infection",
                diagnostic: {
                    acute: "IgM indicates recent/acute infection",
                    examples: "IgM anti-hepatitis A, IgM anti-rubella → recent infection"
                },
                neonatal: "Does NOT cross placenta (too large)",
                synthesis: "Cannot produce IgM in fetal infection → diagnostic"
            },
            
            IgA: {
                heavyChain: "α (alpha)",
                subclasses: "IgA1 (~90% in serum), IgA2 (~10%, resistant to bacterial proteases)",
                structure: {
                    serum: "Monomer",
                    secretory: "Dimer (two monomers) + J chain + secretory component"
                },
                molecularWeight: "160 kDa (monomer), ~400 kDa (dimeric sIgA)",
                serum: {
                    concentration: "1-3 mg/ml (~15% of total Ig)",
                    halfLife: "~6 days"
                },
                secretory: {
                    concentration: "Most abundant antibody in secretions (>5 g produced daily)",
                    location: "Saliva, tears, colostrum/milk, respiratory/GI/urogenital mucus"
                },
                
                secretoryComponent: {
                    origin: "Poly-Ig receptor (pIgR) on epithelial cells",
                    function: [
                        "Transports dimeric IgA across epithelium (transcytosis)",
                        "Protects IgA from proteolytic degradation in harsh mucosal environments",
                        "Anchors IgA to mucus layer"
                    ],
                    mechanism: "Dimeric IgA binds pIgR (basolateral) → endocytosis → transcytosis → cleavage → secretory IgA released (apical)"
                },
                
                functions: {
                    mucosal_immunity: "First line of defense at mucosal surfaces",
                    neutralization: {
                        mechanism: "Prevent pathogen adherence to epithelium",
                        targets: "Bacteria, viruses, toxins",
                        importance: "Block entry before invasion"
                    },
                    immune_exclusion: {
                        concept: "Bind antigens in mucus → trap and clear (mucus flow, cough, peristalsis)",
                        coating: "Coat commensal bacteria → maintain homeostasis"
                    },
                    intracellular_neutralization: {
                        mechanism: "Dimeric IgA can neutralize viruses during transcytosis through epithelial cells"
                    },
                    anti_inflammatory: {
                        properties: "Does NOT activate complement (CH2 domain structure prevents C1q binding)",
                        receptors: "Binds inhibitory FcαRI (CD89) → anti-inflammatory signals",
                        importance: "Prevent inflammatory damage at delicate mucosal surfaces"
                    }
                },
                
                breastMilk: {
                    colostrum: "Very high IgA concentration",
                    function: "Passive immunity to infant gut",
                    importance: "Protects before infant's own IgA production matures",
                    exclusive: "IgA (not IgG) is predominant in milk"
                },
                
                selective_deficiency: {
                    frequency: "Most common primary immunodeficiency (~1:600)",
                    symptoms: "Often asymptomatic; increased respiratory/GI infections, allergies, autoimmunity",
                    compensation: "IgM can partially compensate"
                }
            },
            
            IgE: {
                heavyChain: "ε (epsilon)",
                structure: "Monomer",
                domains: "VH + CH1 + CH2 + CH3 + CH4 (extra domain)",
                molecularWeight: "~190 kDa",
                serum: {
                    concentration: "~0.0001-0.0005 mg/ml (lowest, ~0.002% of total Ig)",
                    halfLife: "~2 days in serum, but weeks to months when bound to cells"
                },
                distribution: "Mostly tissue-bound (mast cells, basophils)",
                
                receptor: {
                    FcεRI: {
                        type: "High-affinity Fc receptor",
                        expression: "Mast cells, basophils, eosinophils (humans), activated Langerhans cells",
                        affinity: "Very high (Kd ~10⁻¹⁰ M) - binds IgE even without antigen",
                        mechanism: "IgE binds FcεRI → mast cell/basophil sensitized"
                    },
                    FcεRII: {
                        type: "Low-affinity receptor (CD23)",
                        expression: "B cells, macrophages, eosinophils",
                        function: "Regulate IgE synthesis, facilitate IgE-dependent antigen presentation"
                    }
                },
                
                functions: {
                    immediate_hypersensitivity: {
                        mechanism: [
                            "IgE binds FcεRI on mast cells/basophils → sensitization",
                            "Allergen cross-links surface-bound IgE",
                            "FcεRI aggregation → cell activation",
                            "Rapid degranulation (seconds to minutes)"
                        ],
                        mediators: {
                            preformed: "Histamine, heparin, tryptase, TNF-α",
                            newlySynthesized: "Prostaglandins, leukotrienes, cytokines"
                        },
                        effects: "Vasodilation, increased permeability, bronchoconstriction, mucus, itch"
                    },
                    allergicDiseases: {
                        type_I: "Immediate hypersensitivity",
                        examples: [
                            "Allergic rhinitis (hay fever)",
                            "Asthma (allergic)",
                            "Atopic dermatitis (eczema)",
                            "Food allergies",
                            "Anaphylaxis (systemic, life-threatening)"
                        ],
                        diagnosis: "Skin prick test, serum IgE (specific and total)"
                    },
                    helminth_immunity: {
                        parasites: "Schistosomes, hookworms, roundworms",
                        mechanism: [
                            "Helminth antigens induce Th2 response",
                            "Th2 cytokines (IL-4, IL-13) → IgE class switching",
                            "IgE coats helminths",
                            "Eosinophils bind via FcεRI → ADCC",
                            "Eosinophils degranulate → toxic proteins damage parasite"
                        ],
                        importance: "Essential for defense against parasitic worms",
                        hygiene_hypothesis: "Lack of helminth exposure → dysregulated IgE → allergies"
                    }
                },
                
                regulation: {
                    Th2: "IL-4, IL-13 drive IgE class switching",
                    suppression: "IFN-γ (Th1) inhibits IgE production",
                    feedback: "High IgE levels can suppress further production"
                },
                
                therapeutic: {
                    omalizumab: {
                        mechanism: "Anti-IgE monoclonal antibody, binds free IgE → prevents binding to FcεRI",
                        indication: "Severe allergic asthma, chronic urticaria",
                        effect: "Reduces mast cell sensitivity, lowers total IgE"
                    },
                    immunotherapy: {
                        allergen: "Gradual allergen exposure → shift from IgE to IgG4",
                        mechanism: "Induce tolerance, Treg activation"
                    }
                },
                
                evolutionary: "IgE likely evolved for anti-helminth immunity, co-opted by allergens in modern environment"
            },
            
            IgD: {
                heavyChain: "δ (delta)",
                structure: "Monomer",
                molecularWeight: "~180 kDa",
                serum: {
                    concentration: "<0.1 mg/ml (very low)",
                    halfLife: "~3 days (short, susceptible to proteases)"
                },
                expression: "Coexpressed with IgM on surface of naïve mature B cells",
                
                BCR: {
                    alternative_splicing: "Same VDJ region → IgM and IgD (different mRNA processing)",
                    function: "Acts as BCR on naïve B cells (along with IgM)"
                },
                
                function: {
                    BCR: "Antigen receptor on mature naïve B cells",
                    activation: "May modulate B cell activation threshold",
                    unclear: "Exact function still debated",
                    basophils: "Some evidence for IgD receptors on basophils → surveillance for pathogens"
                },
                
                secreted: "Secreted IgD function largely unknown",
                evolution: "Ancient antibody class, found in many vertebrates"
            }
        },
        
        antibodyDiversity: {
            VDJ_recombination: "Described in adaptive immunity section",
            somatic_hypermutation: "Point mutations in V regions in germinal centers → affinity maturation",
            class_switching: "Change heavy chain constant region without changing specificity",
            
            mechanisms_detailed: {
                recombination: "V(D)J recombination during B cell development → primary repertoire",
                hypermutation: {
                    location: "Germinal centers (dark zone)",
                    enzyme: "AID (activation-induced cytidine deaminase) - deaminates cytosines",
                    rate: "~10⁻³ per bp per division (million-fold higher than normal)",
                    regions: "V regions (especially CDRs), not constant regions",
                    selection: "Light zone - B cells with higher affinity preferentially survive (compete for antigen on FDCs and T cell help)"
                },
                class_switch: {
                    mechanism: "AID-mediated DNA recombination at switch (S) regions",
                    deletion: "DNA between S regions deleted (irreversible)",
                    retains: "VDJ region intact → same specificity",
                    direction: "Cytokines from Th cells: IL-4 → IgE, IFN-γ → IgG, TGF-β → IgA"
                }
            }
        },
        
        antibodyFunctions: {
            neutralization: {
                mechanism: "Antibody binds pathogen or toxin → blocks interaction with host cell",
                targets: {
                    viruses: "Coat virus → prevent cell entry (bind viral surface proteins)",
                    bacteria: "Block adhesion to epithelium",
                    toxins: "Bind toxin → prevent binding to cellular receptors"
                },
                importance: "Prevents infection/disease without killing pathogen",
                examples: "Anti-tetanus, anti-diphtheria, neutralizing antibodies to SARS-CoV-2 spike protein",
                IgG_IgA: "IgG in blood/tissues, IgA at mucosal surfaces"
            },
            
            opsonization: {
                definition: "Coating of pathogens to enhance phagocytosis",
                mechanism: {
                    coating: "Antibody (IgG) binds pathogen via Fab",
                    recognition: "Fc region recognized by FcγR on phagocytes",
                    binding: "Phagocyte FcγR binds antibody Fc",
                    phagocytosis: "Enhanced uptake and killing (100-1000x more efficient)"
                },
                receptors: {
                    FcγRI: "High affinity (binds monomeric IgG), macrophages, neutrophils, eosinophils",
                    FcγRII: "Low affinity (binds complexed IgG), widespread",
                    FcγRIII: "Low affinity, NK cells, macrophages, neutrophils"
                },
                synergy: "Works with complement opsonization (C3b)",
                IgG: "IgG1 and IgG3 best opsonins (high FcγR binding)"
            },
            
            complement_activation: {
                pathway: "Classical pathway",
                mechanism: {
                    binding: "C1q binds Fc regions of antibody-antigen complexes",
                    requirement: "≥2 IgG molecules (or 1 IgM pentamer) in close proximity",
                    activation: "C1q binding activates C1r and C1s → C4, C2 cleavage → C3 convertase"
                },
                isotypes: {
                    IgM: "Most efficient (one pentamer sufficient, multiple Fc regions)",
                    IgG3: "Very efficient",
                    IgG1: "Efficient",
                    IgG2: "Moderate",
                    IgG4: "Does NOT activate complement",
                    IgA_IgE: "Do NOT activate classical pathway (cannot bind C1q)"
                },
                outcomes: "Opsonization (C3b), inflammation (C3a, C5a), lysis (MAC)"
            },
            
            ADCC: {
                name: "Antibody-Dependent Cell-Mediated Cytotoxicity",
                mechanism: {
                    coating: "IgG coats target cells (virus-infected, tumor)",
                    recognition: "NK cells, macrophages bind via FcγRIIIa (CD16)",
                    activation: "Cross-linking of FcγRIIIa → NK cell activation",
                    killing: "NK cells release perforin/granzyme → target cell death"
                },
                cells: "NK cells (primary), macrophages, neutrophils, eosinophils",
                IgG: "IgG1 and IgG3 most effective",
                therapeutic: {
                    examples: "Rituximab (anti-CD20), trastuzumab (anti-HER2), cetuximab (anti-EGFR)",
                    mechanism: "Monoclonal antibodies bind tumor cells → ADCC",
                    enhancement: "Fc engineering to enhance FcγRIIIa binding → more potent ADCC"
                }
            },
            
            mast_cell_basophil_degranulation: {
                IgE: "IgE-mediated immediate hypersensitivity",
                mechanism: "Allergen cross-links IgE on FcεRI → degranulation",
                role: "Allergic reactions, anti-helminth immunity"
            },
            
            neonatal_immunity: {
                placental_transfer: {
                    IgG: "Only antibody class that crosses placenta",
                    receptor: "FcRn actively transports IgG",
                    timing: "Mainly third trimester",
                    importance: "Protects newborn for ~6 months (before own antibody production matures)",
                    coverage: "Maternal IgG against pathogens mother has encountered"
                },
                breast_milk: {
                    IgA: "Predominant antibody in colostrum and milk",
                    protection: "Mucosal immunity in infant GI tract",
                    passive: "Does NOT enter bloodstream (local protection only)"
                }
            }
        },
        
        therapeutic_antibodies: {
            monoclonal: {
                production: {
                    hybridoma: "Köhler and Milstein (1975) - fuse myeloma + B cell → immortal antibody-producing cell",
                    recombinant: "Modern methods - clone antibody genes, express in mammalian cells",
                    humanization: "Replace mouse sequences with human (reduce immunogenicity)",
                    phage_display: "Display antibody libraries on phage → select high-affinity binders"
                },
                nomenclature: {
                    suffix: "-mab",
                    source: "-o-mab (mouse), -xi-mab (chimeric), -zu-mab (humanized), -u-mab (human)",
                    target: "-li- (immune), -tu- (tumor), -ci- (cardiovascular), -vi- (viral)",
                    examples: "Rituximab (chimeric), trastuzumab (humanized), pembrolizumab (humanized)"
                },
                applications: {
                    cancer: "Rituximab (B cell lymphoma), trastuzumab (HER2+ breast), cetuximab (EGFR+ colorectal)",
                    autoimmune: "Infliximab (anti-TNF, RA/IBD), adalimumab (anti-TNF), ustekinumab (anti-IL-12/23, psoriasis)",
                    transplant: "Basiliximab (anti-IL-2R, prevent rejection)",
                    infectious: "Palivizumab (anti-RSV), monoclonal antibodies for COVID-19, Ebola",
                    other: "Omalizumab (anti-IgE, asthma), denosumab (anti-RANKL, osteoporosis)"
                },
                engineering: {
                    Fc_modifications: "Enhance ADCC, extend half-life, reduce complement activation",
                    bispecific: "Two different binding specificities (e.g., bind tumor + recruit T cells)",
                    antibody_drug_conjugates: "Antibody delivers cytotoxic drug to tumor"
                }
            },
            
            polyclonal: {
                source: "Serum from immunized animals or humans",
                advantages: "Recognize multiple epitopes, high avidity",
                disadvantages: "Batch variability, potential for adverse reactions",
                uses: {
                    antivenom: "Snake, spider bites",
                    postExposure: "Rabies, tetanus, hepatitis B",
                    immunodeficiency: "IVIG (intravenous immunoglobulin) for primary immunodeficiency, Kawasaki disease"
                }
            }
        },
        
        diagnostics: {
            ELISA: "Detect specific antibodies or antigens (see experiments)",
            Western_blot: "Detect proteins using antibodies",
            flow_cytometry: "Identify cell populations using fluorescent antibodies",
            immunohistochemistry: "Visualize antigens in tissue sections",
            RIA: "Radioimmunoassay (largely replaced by ELISA)",
            lateral_flow: "Rapid tests (pregnancy tests, COVID-19 antigen tests) use antibodies",
            serology: "Detect antibodies to diagnose infections (IgM = acute, IgG = past/chronic)"
        },
        
        clinical_significance: {
            vaccination: "Protective immunity mediated by antibodies (especially neutralizing antibodies)",
            passive_immunization: "Transfer antibodies (immediate protection, no memory)",
            immunodeficiency: {
                agammaglobulinemia: "No antibodies (X-linked agammaglobulinemia - Bruton's, BTK mutation)",
                CVID: "Common variable immunodeficiency - low antibodies",
                selective_IgA: "Most common, usually mild",
                treatment: "IVIG replacement therapy"
            },
            autoimmune: {
                autoantibodies: "Antibodies against self-antigens",
                examples: "Anti-nuclear antibodies (SLE), rheumatoid factor (RA), anti-TPO (Hashimoto's), anti-dsDNA (SLE)",
                pathogenic: "Can cause disease (myasthenia gravis - anti-AChR blocks receptors)"
            },
            hemolytic_disease: {
                Rh: "Maternal anti-Rh IgG crosses placenta → destroys fetal RBCs",
                ABO: "Maternal anti-A or anti-B can affect fetus (usually less severe - IgM doesn't cross)"
            },
            transfusion: "ABO antibodies cause transfusion reactions"
        },
        
        keyTakeaways: [
            "Antibodies are Y-shaped molecules with two antigen-binding sites (Fab) and effector region (Fc)",
            "Variable regions (VH, VL) determine antigen specificity via CDRs",
            "Constant regions determine antibody class and effector functions",
            "Five antibody classes: IgG (most abundant, versatile), IgM (first responder, complement), IgA (mucosal), IgE (allergies, helminths), IgD (BCR)",
            "Antibody diversity generated by V(D)J recombination, junctional diversity, somatic hypermutation",
            "Affinity maturation in germinal centers produces high-affinity antibodies",
            "Class switching changes effector function without changing specificity",
            "Functions: neutralization, opsonization, complement activation, ADCC, mast cell degranulation",
            "IgG crosses placenta; IgA in secretions; IgM pentamer activates complement efficiently",
            "Monoclonal antibodies are powerful therapeutics for cancer, autoimmune diseases, infections",
            "Antibodies are basis of serology, immunoassays, and many diagnostic tests"
        ]
    };
    
    return content;
}

handleImmuneDisorders(problem) {
    const content = {
        topic: "Immune System Disorders",
        category: 'pathology',
        summary: "Immune system disorders result from dysfunction in immune regulation, development, or function. Autoimmune diseases occur when self-tolerance breaks down and the immune system attacks host tissues. Immunodeficiencies (primary genetic or secondary acquired) leave individuals vulnerable to infections. Hypersensitivity reactions cause excessive tissue damage from immune responses to antigens. Understanding these disorders is essential for diagnosis, treatment, and prevention.",
        
        classification: {
            overview: "Four main categories of immune disorders",
            categories: {
                autoimmunity: "Immune attack on self-tissues (loss of tolerance)",
                immunodeficiency: "Impaired immune function (increased infections)",
                hypersensitivity: "Excessive or inappropriate immune responses (tissue damage)",
                lymphoproliferative: "Uncontrolled lymphocyte proliferation (leukemias, lymphomas)"
            }
        },
        
        autoimmuneDiseases: {
            definition: "Immune responses directed against self-antigens, causing chronic inflammation and tissue damage",
            
            mechanisms: {
                breakdownOfTolerance: {
                    central: {
                        thymus: "Defective negative selection → autoreactive T cells escape",
                        AIRE: "Mutations in AIRE gene → failure to express tissue antigens in thymus → incomplete deletion",
                        boneMarrow: "Defective B cell negative selection → autoreactive B cells"
                    },
                    peripheral: {
                        Treg_deficiency: "Reduced or dysfunctional regulatory T cells (Foxp3 mutations → IPEX syndrome)",
                        anergy_failure: "Autoreactive cells not properly inactivated",
                        sequestered_antigens: "Tissue injury releases normally hidden antigens (e.g., eye, testis, brain)",
                        molecular_mimicry: "Pathogen antigens resemble self-antigens → cross-reactive immune response",
                        bystander_activation: "Inflammation from infection activates nearby autoreactive T cells",
                        epitope_spreading: "Initial autoimmune response → tissue damage → release of additional self-antigens → expansion of response"
                    }
                },
                
                genetic_susceptibility: {
                    HLA_associations: {
                        concept: "Specific HLA alleles increase disease risk (but not deterministic)",
                        examples: {
                            "HLA-B27": "Ankylosing spondylitis, reactive arthritis (90% of patients)",
                            "HLA-DR3": "Type 1 diabetes, SLE, myasthenia gravis",
                            "HLA-DR4": "Rheumatoid arthritis, type 1 diabetes",
                            "HLA-DQ2/DQ8": "Celiac disease (>95% of patients)"
                        },
                        mechanism: "HLA presents self-peptides that can activate autoreactive T cells"
                    },
                    non_HLA: "PTPN22, CTLA4, IL2RA, and other genes affecting immune regulation"
                },
                
                environmental_triggers: {
                    infections: {
                        molecular_mimicry: "Rheumatic fever (Strep pyogenes M protein mimics heart tissue)",
                        bystander: "Viral infections can break tolerance"
                    },
                    drugs: "Drug-induced lupus (hydralazine, procainamide)",
                    hormones: "Female predominance in many autoimmune diseases (estrogen effects)",
                    smoking: "Rheumatoid arthritis risk factor",
                    vitamin_D: "Deficiency associated with MS, type 1 diabetes risk"
                }
            },
            
            organSpecific: {
                type1_diabetes: {
                    target: "Pancreatic β cells (insulin-producing cells in islets of Langerhans)",
                    mechanism: {
                        cellular: "CD8+ T cells kill β cells (recognize islet antigens on MHC-I)",
                        humoral: "Autoantibodies (anti-GAD65, anti-insulin, anti-IA-2) - markers, not pathogenic",
                        inflammation: "Insulitis - lymphocytic infiltration of islets"
                    },
                    genetics: "HLA-DR3, HLA-DR4 (90% of patients), PTPN22, INS, IL2RA",
                    triggers: "Viral infections (enteroviruses?), cow's milk proteins (?), vitamin D deficiency",
                    progression: "Slow destruction over months to years → symptoms when >80% β cells destroyed",
                    presentation: "Hyperglycemia, polyuria, polydipsia, weight loss, ketoacidosis",
                    diagnosis: "Hyperglycemia, low/absent C-peptide, autoantibodies",
                    treatment: {
                        replacement: "Exogenous insulin (lifelong)",
                        immunotherapy: "Teplizumab (anti-CD3) - delays progression in early disease",
                        experimental: "Islet transplantation, immunosuppression, tolerogenic therapies"
                    },
                    complications: "Microvascular (retinopathy, nephropathy, neuropathy), macrovascular (CAD, stroke)"
                },
                
                hashimoto_thyroiditis: {
                    target: "Thyroid gland",
                    autoantibodies: {
                        "anti-TPO": "Anti-thyroid peroxidase (>90% of patients)",
                        "anti-thyroglobulin": "Anti-thyroglobulin",
                        pathogenic: "Antibodies fix complement, recruit inflammatory cells"
                    },
                    mechanism: "CD8+ T cell-mediated destruction, antibody-mediated damage, chronic inflammation",
                    result: "Hypothyroidism - thyroid gland destruction",
                    presentation: "Fatigue, weight gain, cold intolerance, constipation, goiter",
                    diagnosis: "Elevated TSH, low free T4, positive anti-TPO antibodies",
                    treatment: "Levothyroxine (thyroid hormone replacement)",
                    epidemiology: "Most common autoimmune disease; female:male ~10:1"
                },
                
                graves_disease: {
                    target: "Thyroid gland (TSH receptor)",
                    mechanism: {
                        stimulating: "Anti-TSH receptor antibodies (TSI - thyroid-stimulating immunoglobulins)",
                        action: "Antibodies bind TSH receptor → mimic TSH → unregulated thyroid hormone production",
                        type: "Type II hypersensitivity (stimulating antibodies)"
                    },
                    result: "Hyperthyroidism - excess thyroid hormone",
                    presentation: "Weight loss, heat intolerance, palpitations, tremor, exophthalmos (eye bulging), goiter",
                    diagnosis: "Low TSH, elevated free T3/T4, positive TSI antibodies, increased radioiodine uptake",
                    treatment: {
                        medical: "Antithyroid drugs (methimazole, propylthiouracil)",
                        radioactive_iodine: "Ablate thyroid",
                        surgery: "Thyroidectomy",
                        beta_blockers: "Symptom control"
                    }
                },
                
                myasthenia_gravis: {
                    target: "Neuromuscular junction (acetylcholine receptors)",
                    mechanism: {
                        antibodies: "Anti-AChR antibodies (85%), anti-MuSK (muscle-specific kinase, 5%)",
                        pathology: [
                            "Antibodies block AChR → reduce available receptors",
                            "Complement-mediated destruction of postsynaptic membrane",
                            "Receptor internalization (cross-linking)"
                        ],
                        result: "Impaired neuromuscular transmission"
                    },
                    presentation: "Fluctuating muscle weakness, worsens with use (fatigability)",
                    symptoms: {
                        ocular: "Ptosis (drooping eyelid), diplopia (double vision) - most common initial",
                        bulbar: "Dysarthria (speech difficulty), dysphagia (swallowing difficulty)",
                        limb: "Proximal muscle weakness",
                        respiratory: "Respiratory failure (myasthenic crisis)"
                    },
                    diagnosis: {
                        clinical: "Fatigability, fluctuating weakness",
                        edrophonium: "Anticholinesterase test (Tensilon test) - temporary improvement",
                        EMG: "Repetitive nerve stimulation - decremental response",
                        antibodies: "Anti-AChR (85%), anti-MuSK (5%)",
                        imaging: "CT chest - thymoma (10-15% of patients)"
                    },
                    treatment: {
                        acetylcholinesterase: "Pyridostigmine - increase ACh at synapse",
                        immunosuppression: "Corticosteroids, azathioprine, mycophenolate",
                        plasmapheresis: "Remove pathogenic antibodies (acute exacerbations)",
                        IVIG: "Intravenous immunoglobulin",
                        thymectomy: "Remove thymus (improves outcome, especially if thymoma)",
                        eculizumab: "Anti-C5 antibody (blocks complement) for refractory cases"
                    },
                    thymus: "Thymic hyperplasia (60%), thymoma (10-15%) - thymus involved in pathogenesis"
                },
                
                multiple_sclerosis: {
                    target: "CNS myelin (oligodendrocytes)",
                    mechanism: {
                        cellular: "Autoreactive CD4+ Th1 and Th17 cells cross blood-brain barrier",
                        inflammation: "Inflammatory lesions (plaques) in white matter",
                        demyelination: "Myelin destruction → impaired nerve conduction",
                        axonal: "Axonal damage → permanent neurological deficits"
                    },
                    genetics: "HLA-DR2, IL2RA, IL7RA, CD25",
                    environmental: "Vitamin D deficiency, EBV infection, smoking, latitude (higher risk away from equator)",
                    presentation: {
                        variable: "Depends on lesion location",
                        common: "Visual disturbances (optic neuritis), sensory symptoms, motor weakness, ataxia, bladder dysfunction, fatigue",
                        patterns: {
                            relapsing_remitting: "85% initial - episodes of symptoms with recovery",
                            secondary_progressive: "Follows RRMS - gradual worsening",
                            primary_progressive: "15% - gradual worsening from onset",
                            progressive_relapsing: "Rare - gradual worsening + acute relapses"
                        }
                    },
                    diagnosis: {
                        clinical: "Two or more lesions separated in space and time",
                        MRI: "Demyelinating lesions in CNS (white matter plaques)",
                        CSF: "Oligoclonal bands (IgG), elevated IgG index",
                        evoked_potentials: "Delayed (demyelination slows conduction)"
                    },
                    treatment: {
                        acute: "High-dose corticosteroids (methylprednisolone)",
                        disease_modifying: [
                            "Interferons (IFN-β1a, IFN-β1b) - reduce relapse rate",
                            "Glatiramer acetate - immune modulation",
                            "Natalizumab - anti-α4 integrin (blocks T cell CNS entry)",
                            "Fingolimod - sphingosine-1-phosphate receptor modulator (sequesters lymphocytes)",
                            "Dimethyl fumarate, teriflunomide - immune modulation",
                            "Ocrelizumab - anti-CD20 (deplete B cells)",
                            "Alemtuzumab - anti-CD52 (deplete lymphocytes)"
                        ],
                        symptomatic: "Muscle relaxants, pain management, physical therapy"
                    },
                    prognosis: "Variable; disease-modifying therapies reduce relapses and slow progression"
                }
            },
            
            systemic: {
                systemic_lupus_erythematosus: {
                    definition: "Multisystem autoimmune disease with antibodies against nuclear antigens",
                    target: "Multiple organs - skin, joints, kidneys, blood vessels, CNS, heart, lungs",
                    
                    mechanism: {
                        autoantibodies: {
                            "anti-dsDNA": "Anti-double-stranded DNA (highly specific, pathogenic)",
                            "anti-Smith": "Anti-Sm (highly specific)",
                            "ANA": "Anti-nuclear antibodies (sensitive but not specific, >95% of patients)",
                            "anti-histone": "Drug-induced lupus",
                            "anti-Ro/La": "Associated with neonatal lupus, congenital heart block",
                            "antiphospholipid": "Thrombosis, pregnancy loss"
                        },
                        immune_complexes: {
                            formation: "Autoantibodies bind nuclear antigens → immune complexes",
                            deposition: "Deposit in kidneys (glomeruli), blood vessels, skin",
                            inflammation: "Activate complement, recruit neutrophils → tissue damage",
                            type: "Type III hypersensitivity"
                        },
                        complement: "Low C3, C4 (consumed by immune complexes) → defective clearance of complexes and apoptotic cells",
                        T_cells: "Dysregulated T cell help to autoreactive B cells",
                        apoptosis: "Defective clearance of apoptotic cells → exposure of nuclear antigens"
                    },
                    
                    genetics: "HLA-DR2, HLA-DR3, complement deficiencies (C1q, C2, C4), PTPN22, IRF5",
                    triggers: "UV light, infections (EBV), drugs, hormones (estrogen)",
                    epidemiology: "Female:male ~9:1, peak age 15-45, higher in African Americans, Hispanics, Asians",
                    
                    clinical_features: {
                        constitutional: "Fatigue, fever, weight loss",
                        mucocutaneous: {
                            malar_rash: "Butterfly rash across cheeks and nose (50%)",
                            discoid_rash: "Raised, scaly patches",
                            photosensitivity: "Rash after sun exposure",
                            oral_ulcers: "Painless mouth ulcers",
                            alopecia: "Hair loss"
                        },
                        musculoskeletal: {
                            arthritis: "Non-erosive polyarthritis (90%)",
                            myalgia: "Muscle pain"
                        },
                        renal: {
                            nephritis: "Lupus nephritis (50%) - immune complex deposition in glomeruli",
                            types: "WHO classification I-VI (proliferative most serious)",
                            presentation: "Proteinuria, hematuria, renal insufficiency",
                            prognosis: "Major cause of morbidity"
                        },
                        hematologic: {
                            anemia: "Hemolytic anemia (Coombs-positive), anemia of chronic disease",
                            leukopenia: "Lymphopenia common",
                            thrombocytopenia: "Platelet destruction"
                        },
                        cardiovascular: {
                            pericarditis: "Most common cardiac manifestation",
                            myocarditis: "Rare but serious",
                            endocarditis: "Libman-Sacks endocarditis (nonbacterial, verrucous)",
                            vasculitis: "Can affect any size vessel",
                            atherosclerosis: "Accelerated (chronic inflammation, corticosteroids)"
                        },
                        pulmonary: "Pleuritis, pneumonitis, pulmonary hypertension",
                        neuropsychiatric: {
                            CNS: "Seizures, psychosis, cognitive dysfunction, stroke",
                            PNS: "Peripheral neuropathy",
                            mechanisms: "Vasculitis, thrombosis (antiphospholipid antibodies), direct antibody effects"
                        },
                        antiphospholipid_syndrome: {
                            antibodies: "Anticardiolipin, anti-β2-glycoprotein I, lupus anticoagulant",
                            manifestations: "Venous/arterial thrombosis, recurrent pregnancy loss",
                            paradox: "Lupus 'anticoagulant' causes thrombosis (prolongs PTT in vitro)"
                        }
                    },
                    
                    diagnosis: {
                        criteria: "ACR/EULAR 2019 classification criteria",
                        required: "ANA ≥1:80",
                        domains: "Constitutional, hematologic, neuropsychiatric, mucocutaneous, serosal, musculoskeletal, renal, immunologic",
                        laboratory: {
                            ANA: ">95% sensitive (screening test)",
                            "anti-dsDNA": "60-70% sensitive, highly specific, correlates with disease activity",
                            "anti-Sm": "30% sensitive, highly specific",
                            complement: "Low C3, C4 (consumed) - correlates with activity",
                            CBC: "Cytopenias",
                            urinalysis: "Proteinuria, hematuria, casts (nephritis)",
                            ESR: "Elevated (CRP often normal - distinguishes from infection)",
                            direct_Coombs: "Positive in hemolytic anemia"
                        }
                    },
                    
                    treatment: {
                        general: {
                            sun_protection: "Avoid UV exposure (triggers flares)",
                            NSAIDs: "Arthritis, serositis (caution: renal toxicity)",
                            antimalarials: "Hydroxychloroquine - mild disease, maintenance (reduces flares)"
                        },
                        moderate_severe: {
                            corticosteroids: "Prednisone - mainstay, high dose for severe flares",
                            immunosuppressants: [
                                "Azathioprine - maintenance",
                                "Mycophenolate mofetil - lupus nephritis, maintenance",
                                "Cyclophosphamide - severe lupus nephritis, CNS lupus (induction)",
                                "Methotrexate - arthritis, skin"
                            ],
                            biologics: [
                                "Belimumab - anti-BLyS (B cell survival factor), moderate-severe disease",
                                "Rituximab - anti-CD20 (deplete B cells), refractory disease, nephritis",
                                "Anifrolumab - anti-IFN-I receptor"
                            ]
                        },
                        renal: {
                            induction: "High-dose corticosteroids + cyclophosphamide or mycophenolate",
                            maintenance: "Mycophenolate or azathioprine + low-dose prednisone"
                        },
                        monitoring: "Disease activity scores (SLEDAI), organ function, drug toxicity"
                    },
                    
                    prognosis: {
                        survival: "90% 10-year survival (improved from <50% in 1950s)",
                        morbidity: "Renal disease, cardiovascular disease, infections (immunosuppression)",
                        pregnancy: "High-risk (flares, preeclampsia, preterm birth), requires specialist care"
                    }
                },
                
                rheumatoid_arthritis: {
                    definition: "Chronic inflammatory arthritis primarily affecting joints",
                    target: "Synovium (joint lining) - synovitis",
                    
                    mechanism: {
                        initiation: {
                            citrullination: "Post-translational modification of proteins (arginine → citrulline)",
                            triggers: "Smoking, P. gingivalis infection (periodontal disease)",
                            antibodies: "Anti-citrullinated protein antibodies (ACPA) - highly specific"
                        },
                        synovitis: {
                            T_cells: "CD4+ T cells (Th1, Th17) infiltrate synovium, activate macrophages",
                            cytokines: "TNF-α, IL-1, IL-6, IL-17 drive inflammation",
                            B_cells: "Produce rheumatoid factor (RF) and ACPA",
                            pannus: "Inflamed synovial tissue proliferates (pannus formation)",
                            destruction: "Pannus invades cartilage and bone → erosions"
                        },
                        chronic: "Ongoing inflammation → joint destruction, deformity, loss of function"
                    },
                    
                    genetics: "HLA-DR4 (shared epitope), PTPN22, PADI4 (citrullination enzyme)",
                    epidemiology: "1% of population, female:male 3:1, peak onset 40-60 years",
                    
                    clinical_features: {
                        joints: {
                            distribution: "Symmetric polyarthritis, small joints (hands, wrists, feet)",
                            spared: "DIP joints typically spared (vs osteoarthritis)",
                            symptoms: "Pain, stiffness (>30 min morning stiffness), swelling, warmth",
                            deformities: [
                                "Swan-neck deformity (PIP hyperextension, DIP flexion)",
                                "Boutonniere deformity (PIP flexion, DIP hyperextension)",
                                "Ulnar deviation of fingers",
                                "Z-thumb"
                            ],
                            large_joints: "Knees, shoulders, hips (later in disease)",
                            cervical_spine: "C1-C2 subluxation (serious complication)"
                        },
                        extra_articular: {
                            rheumatoid_nodules: "Subcutaneous nodules (elbows, fingers) - 20-30%, RF-positive",
                            pulmonary: "Interstitial lung disease, pleural effusions, nodules",
                            cardiac: "Pericarditis, accelerated atherosclerosis",
                            ocular: "Scleritis, episcleritis, keratoconjunctivitis sicca (dry eyes)",
                            vasculitis: "Digital infarcts, neuropathy, skin ulcers (severe disease)",
                            felty_syndrome: "RA + splenomegaly + neutropenia",
                            amyloidosis: "AA amyloidosis (chronic inflammation)"
                        },
                        constitutional: "Fatigue, low-grade fever, weight loss, anemia of chronic disease"
                    },
                    
                    diagnosis: {
                        criteria: "2010 ACR/EULAR classification criteria",
                        scoring: "Joint involvement, serology (RF, ACPA), acute phase reactants, duration",
                        laboratory: {
                            RF: "Rheumatoid factor (IgM anti-IgG Fc) - 70-80% sensitive, less specific",
                            ACPA: "Anti-CCP (cyclic citrullinated peptide) - 70% sensitive, >95% specific, prognostic",
                            ESR_CRP: "Elevated (markers of inflammation)",
                            anemia: "Anemia of chronic disease",
                            seronegative: "20-30% RF and ACPA negative (worse prognosis if both negative)"
                        },
                        imaging: {
                            Xray: "Periarticular osteopenia, joint space narrowing, erosions (late findings)",
                            MRI: "Synovitis, bone edema, erosions (earlier, more sensitive)",
                            ultrasound: "Synovitis, power Doppler (increased vascularity)"
                        }
                    },
                    
                    treatment: {
                        principles: [
                            "Treat to target - aim for remission or low disease activity",
                            "Early aggressive therapy (window of opportunity)",
                            "DMARDs (disease-modifying antirheumatic drugs) are mainstay"
                        ],
                        NSAIDs_corticosteroids: {
                            NSAIDs: "Symptomatic relief, anti-inflammatory (not disease-modifying)",
                            corticosteroids: "Bridge therapy, flare control, low-dose maintenance (minimize due to side effects)"
                        },
                        conventional_DMARDs: {
                            methotrexate: {
                                status: "Anchor drug (first-line)",
                                mechanism: "Inhibits dihydrofolate reductase, anti-inflammatory",
                                dose: "7.5-25 mg/week + folic acid supplementation",
                                monitoring: "CBC, LFTs, creatinine (hepatotoxic, myelosuppression)",
                                contraindication: "Pregnancy (teratogenic)"
                            },
                            sulfasalazine: "Alternative or combination",
                            hydroxychloroquine: "Mild disease, combination therapy",
                            leflunomide: "Alternative to MTX"
                        },
                        biologic_DMARDs: {
                            TNF_inhibitors: {
                                agents: "Adalimumab, etanercept, infliximab, certolizumab, golimumab",
                                mechanism: "Neutralize TNF-α (key pro-inflammatory cytokine)",
                                efficacy: "Highly effective, slow radiographic progression",
                                use: "MTX inadequate response or intolerance",
                                combination: "Often combined with MTX (better efficacy, reduces immunogenicity)",
                                risks: "Infections (TB reactivation - screen first), malignancy (?), heart failure, demyelination"
                            },
                            IL6_inhibitors: {
                                tocilizumab: "Anti-IL-6 receptor",
                                sarilumab: "Anti-IL-6 receptor",
                                efficacy: "Comparable to anti-TNF"
                            },
                            rituximab: {
                                mechanism: "Anti-CD20 (deplete B cells)",
                                use: "Anti-TNF failure",
                                efficacy: "Effective especially in RF/ACPA-positive"
                            },
                            abatacept: {
                                mechanism: "CTLA-4-Ig fusion protein (blocks T cell costimulation)",
                                use: "Alternative to anti-TNF"
                            },
                            JAK_inhibitors: {
                                agents: "Tofacitinib, baricitinib, upadacitinib",
                                mechanism: "Inhibit JAK-STAT signaling (multiple cytokines)",
                                advantage: "Oral (vs injectable biologics)",
                                risks: "Infections, malignancy, cardiovascular events"
                            }
                        },
                        monitoring: "Disease activity scores (DAS28, CDAI), function (HAQ), radiographs (yearly)"
                    },
                    
                    prognosis: {
                        untreated: "Progressive joint destruction, disability",
                        treated: "Modern DMARDs/biologics dramatically improve outcomes, prevent erosions",
                        complications: "Cardiovascular disease (leading cause of death), infections, malignancy (?), amyloidosis"
                    }
                }
            },
            
            mechanisms_summary: {
                T_cell_mediated: "Type 1 diabetes, MS, RA (Th1/Th17 drive inflammation)",
                antibody_mediated: "Graves (stimulating), myasthenia gravis (blocking), SLE (immune complexes)",
                mixed: "Most autoimmune diseases involve both T and B cells"
            },
            
            general_principles: {
                female_predominance: "Most autoimmune diseases (estrogen effects, X chromosome genes)",
                genetic_plus_environmental: "Genetic susceptibility + environmental trigger",
                chronic_relapsing: "Flares and remissions common",
                multisystem: "Systemic diseases affect multiple organs",
                treatment: "Immunosuppression (corticosteroids, DMARDs, biologics), symptom management"
            }
        },
        
        immunodeficiencies: {
            definition: "Defects in immune system components leading to increased susceptibility to infections",
            
            classification: {
                primary: "Genetic/congenital defects (present from birth or early childhood)",
                secondary: "Acquired defects (infections, malnutrition, drugs, malignancy)"
            },
            
            primary_immunodeficiencies: {
                overview: "Rare genetic disorders (~1:1000-1:2000), >400 distinct disorders identified",
                
                B_cell_deficiencies: {
                    X_linked_agammaglobulinemia: {
                        gene: "BTK (Bruton tyrosine kinase) on X chromosome",
                        defect: "Failure of B cell development (arrest at pre-B cell stage)",
                        inheritance: "X-linked recessive (males affected)",
                        immunology: {
                            B_cells: "Absent or very low (<1% of normal)",
                            antibodies: "All isotypes markedly reduced (<100 mg/dl IgG)",
                            T_cells: "Normal number and function",
                            tonsils_lymph_nodes: "Absent/hypoplastic (no B cell follicles)"
                        },
                        presentation: {
                            age: "After 6 months (when maternal IgG wanes)",
                            infections: "Recurrent bacterial infections (encapsulated bacteria: Streptococcus pneumoniae, Haemophilus influenzae, Staphylococcus aureus)",
                            sites: "Sinopulmonary (sinusitis, pneumonia, otitis media), skin, GI",
                            unusual: "Chronic enteroviral infections (can cause meningoencephalitis)",
                            absent: "Normal response to viral infections (T cells intact)"
                        },
                        diagnosis: {
                            immunoglobulins: "Very low IgG, IgA, IgM, IgE",
                            flow_cytometry: "Absent/very low CD19+ B cells",
                            genetic: "BTK mutation confirmation"
                        },
                        treatment: {
                            IVIG: "Intravenous immunoglobulin replacement (lifelong, every 3-4 weeks)",
                            antibiotics: "Prompt treatment of infections, prophylactic antibiotics",
                            prognosis: "Good with IVIG replacement, normal lifespan"
                        },
                        complications: "Chronic lung disease (bronchiectasis), chronic enteroviral CNS infections"
                    },
                    
                    CVID: {
                        name: "Common Variable Immunodeficiency",
                        frequency: "Most common symptomatic primary immunodeficiency (1:25,000-1:50,000)",
                        genetics: "Heterogeneous (ICOS, CD19, TACI, BAFF-R mutations in ~20%; most unknown)",
                        defect: "Impaired B cell differentiation to plasma cells → low antibodies despite normal/low B cells",
                        presentation: {
                            age: "Variable - childhood to adulthood (peaks in 20s-30s)",
                            infections: "Recurrent sinopulmonary infections (encapsulated bacteria)",
                            autoimmunity: "Autoimmune cytopenias (ITP, AIHA), arthritis, vitiligo (25%)",
                            granulomas: "Granulomatous disease (lungs, lymph nodes, liver, spleen)",
                            malignancy: "Increased risk of lymphoma, gastric cancer",
                            GI: "Chronic diarrhea, malabsorption, nodular lymphoid hyperplasia, IBD-like"
                        },
                        immunology: {
                            IgG: "Low (<400 mg/dl)",
                            IgA_IgM: "Low (at least one)",
                            B_cells: "Normal or low numbers",
                            antibody_response: "Impaired response to vaccines",
                            T_cells: "May have reduced numbers or function (in some patients)"
                        },
                        diagnosis: {
                            criteria: "Low IgG and IgA or IgM, impaired vaccine responses, other causes excluded, age >4 years",
                            exclude: "Secondary causes (HIV, medications, malignancy, protein loss)"
                        },
                        treatment: {
                            IVIG: "Immunoglobulin replacement (lifelong)",
                            antibiotics: "Infections, prophylaxis if needed",
                            immunosuppression: "For autoimmune/inflammatory complications",
                            monitoring: "Surveillance for malignancy, bronchiectasis"
                        },
                        complications: "Bronchiectasis, autoimmunity, lymphoproliferation, malignancy, hepatitis"
                    },
                    
                    selective_IgA_deficiency: {
                        definition: "IgA <7 mg/dl with normal IgG and IgM",
                        frequency: "Most common primary immunodeficiency (1:300-1:700)",
                        genetics: "Often unknown; some have partial TACI, ICOS deletions",
                        presentation: {
                            asymptomatic: "Most patients asymptomatic (discovered incidentally)",
                            infections: "Sinopulmonary, GI infections (subset of patients)",
                            allergies: "Increased atopy, asthma",
                            autoimmunity: "Celiac disease, SLE, RA, ITP (increased risk)",
                            transfusion: "Risk of anaphylaxis to blood products (if have anti-IgA antibodies)"
                        },
                        immunology: {
                            IgA: "<7 mg/dl (serum)",
                            IgG_IgM: "Normal",
                            compensation: "IgM may compensate at mucosal surfaces"
                        },
                        treatment: {
                            most: "No treatment needed (asymptomatic)",
                            infections: "Antibiotics as needed, prophylaxis if recurrent",
                            no_IVIG: "IVIG not indicated (IgG normal)",
                            transfusion: "Washed RBCs or IgA-deficient blood products (if anti-IgA antibodies)"
                        },
                        progression: "Small percentage progress to CVID"
                    }
                },
                
                T_cell_deficiencies: {
                    SCID: {
                        name: "Severe Combined Immunodeficiency",
                        defect: "Absent or severely defective T and B cell function",
                        frequency: "1:50,000-1:100,000 births",
                        genetics: {
                            X_linked: "γc (common gamma chain, IL-2 receptor component) - most common (~50%)",
                            autosomal: "ADA (adenosine deaminase), RAG1/2, Artemis, JAK3, IL7Rα, others"
                        },
                        immunology: {
                            T_cells: "Absent or very low, non-functional",
                            B_cells: "Present but non-functional (no T cell help)",
                            NK_cells: "Absent (X-linked SCID), present (some autosomal forms)",
                            antibodies: "Low (B cells can't make antibodies without T cell help)",
                            thymus: "Hypoplastic"
                        },
                        presentation: {
                            age: "First months of life (often 2-6 months)",
                            infections: "Severe, recurrent, opportunistic infections (bacteria, viruses, fungi, Pneumocystis jirovecii)",
                            failure_to_thrive: "Poor growth, chronic diarrhea",
                            GVHD: "From maternal T cells or non-irradiated blood products",
                            no_GALT: "Absent tonsils, lymph nodes (no lymphoid tissue)"
                        },
                        diagnosis: {
                            T_cell: "Severe lymphopenia (<1500/μl), very low CD3+ T cells",
                            proliferation: "Absent T cell proliferation to mitogens",
                            TREC: "Low T cell receptor excision circles (newborn screening)",
                            genetic: "Identify specific mutation"
                        },
                        treatment: {
                            emergency: "Isolation (strict infection control), IVIG, prophylactic antibiotics (PCP, fungal)",
                            avoid: "Live vaccines, non-irradiated blood products (risk GVHD)",
                            curative: "Hematopoietic stem cell transplantation (HSCT) - best if <3.5 months",
                            gene_therapy: "For X-SCID, ADA-SCID (successful in some cases)",
                            enzyme: "PEG-ADA enzyme replacement for ADA deficiency"
                        },
                        prognosis: {
                            untreated: "Fatal within first year of life",
                            HSCT: "Good survival if early transplant (<3.5 months, no infections)",
                            complications: "GVHD, infections"
                        },
                        screening: "Newborn screening now implemented in many countries (TREC assay)"
                    },
                    
                    DiGeorge_syndrome: {
                        name: "22q11.2 deletion syndrome",
                        defect: "Thymic hypoplasia/aplasia → T cell deficiency",
                        genetics: "Deletion of chromosome 22q11.2 (TBX1 gene)",
                        embryology: "Defective development of 3rd and 4th pharyngeal pouches",
                        features: {
                            CATCH22: "Cardiac defects, Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcemia (parathyroid hypoplasia), 22q11 deletion",
                            cardiac: "Conotruncal defects (TOF, interrupted aortic arch, VSD)",
                            facies: "Hypertelorism, low-set ears, micrognathia, cleft palate",
                            parathyroid: "Hypocalcemia (hypoparathyroidism)",
                            developmental: "Learning disabilities, psychiatric disorders (schizophrenia risk)"
                        },
                        immunology: {
                            spectrum: "Variable T cell deficiency (depends on thymus development)",
                            complete: "No thymus → SCID-like (rare)",
                            partial: "Small thymus → moderate T cell deficiency (most common)",
                            mild: "Near-normal T cells",
                            B_cells: "Normal number but impaired function (reduced T cell help)"
                        },
                        presentation: {
                            neonatal: "Cardiac defects, hypocalcemia (tetany), dysmorphic features",
                            infections: "Variable - severe (if complete) to mild/none (if partial)",
                            autoimmunity: "Increased risk (immune dysregulation)"
                        },
                        diagnosis: {
                            genetic: "FISH or microarray for 22q11.2 deletion",
                            immunology: "T cell numbers and function (variable), low T cell proliferation"
                        },
                        treatment: {
                            cardiac: "Surgical correction of heart defects",
                            calcium: "Calcium and vitamin D supplementation",
                            infections: "IVIG (if low antibodies), PCP prophylaxis (if low T cells)",
                            severe: "Thymus transplantation (experimental)",
                            avoid: "Live vaccines (if severe T cell deficiency)"
                        },
                        prognosis: "Variable - depends on severity of defects; many lead normal lives"
                    }
                },
                
                phagocyte_defects: {
                    CGD: {
                        name: "Chronic Granulomatous Disease",
                        defect: "Defective NADPH oxidase → impaired oxidative burst → can't kill catalase-positive organisms",
                        genetics: "X-linked (gp91phox, 70%) or autosomal recessive (p47phox, p67phox, p22phox)",
                        pathophysiology: {
                            oxidative_burst: "Normally: NADPH oxidase generates superoxide (O₂⁻) → H₂O₂ → HOCl → kills bacteria/fungi",
                            defect: "No superoxide production → can't kill catalase-positive organisms",
                            catalase_positive: "Bacteria and fungi that produce catalase (neutralize their own H₂O₂, so host must provide it)",
                            catalase_negative: "Can be killed (provide H₂O₂ to host phagocyte)"
                        },
                        presentation: {
                            infections: {
                                organisms: "Staphylococcus aureus, Burkholderia cepacia, Serratia, Nocardia, Aspergillus",
                                sites: "Lungs, lymph nodes, liver, skin, bones",
                                abscesses: "Recurrent abscesses (liver, lung, skin)",
                                pneumonia: "Recurrent pneumonia"
                            },
                            granulomas: {
                                mechanism: "Persistent infection → chronic inflammation → granuloma formation",
                                locations: "Lung, liver, GI tract, urinary tract",
                                complications: "Obstruction (GI, urinary)"
                            },
                            inflammatory: "Inflammatory bowel disease-like (Crohn's-like colitis)"
                        },
                        diagnosis: {
                            DHR: "Dihydrorhodamine (DHR) flow cytometry test - measures oxidative burst (gold standard)",
                            NBT: "Nitroblue tetrazolium test - older method",
                            genetic: "Identify specific mutation"
                        },
                        treatment: {
                            prophylaxis: {
                                antibiotics: "TMP-SMX (Bactrim) - prevent bacterial infections",
                                antifungals: "Itraconazole or voriconazole - prevent Aspergillus",
                                IFN_gamma: "Reduces frequency/severity of infections (mechanism unclear)"
                            },
                            acute_infections: "Aggressive antibiotics/antifungals, surgical drainage if needed",
                            curative: "Hematopoietic stem cell transplantation (HSCT)",
                            gene_therapy: "Under investigation"
                        },
                        complications: "Chronic infections, granulomas (obstructive), inflammatory bowel disease",
                        prognosis: "Improved with prophylaxis; median survival now >40 years"
                    },
                    
                    LAD: {
                        name: "Leukocyte Adhesion Deficiency",
                        type_1: {
                            defect: "CD18 (β2 integrin) deficiency → impaired leukocyte adhesion and extravasation",
                            integrins: "LFA-1, Mac-1, CR3 defective",
                            result: "Neutrophils can't adhere to endothelium → can't enter tissues"
                        },
                        presentation: {
                            infections: "Severe bacterial infections (skin, mucosa, respiratory) without pus",
                            delayed_separation: "Delayed umbilical cord separation (>3 weeks)",
                            leukocytosis: "Marked leukocytosis (neutrophils in blood but can't enter tissues)",
                            periodontitis: "Severe periodontal disease"
                        },
                        diagnosis: "Flow cytometry (absent/low CD18)",
                        treatment: "Antibiotics, HSCT (curative)",
                        prognosis: "Severe forms often fatal without HSCT"
                    }
                },
                
                complement_deficiencies: {
                    early_classical: {
                        components: "C1q, C1r, C1s, C4, C2",
                        presentation: "SLE-like autoimmunity (impaired clearance of immune complexes and apoptotic cells)",
                        infections: "Increased susceptibility to encapsulated bacteria (less severe than late deficiencies)"
                    },
                    C3: {
                        component: "C3 (central to all pathways)",
                        presentation: "Severe recurrent pyogenic infections (encapsulated bacteria: S. pneumoniae, H. influenzae)",
                        mechanism: "Loss of opsonization and MAC formation"
                    },
                    late_complement: {
                        components: "C5, C6, C7, C8, C9 (MAC components)",
                        presentation: "Recurrent Neisseria infections (meningococcal, gonococcal) - often recurrent meningitis",
                        mechanism: "Can't form MAC → can't lyse Neisseria (particularly susceptible to MAC)",
                        vaccination: "Meningococcal vaccine essential"
                    },
                    properdin: {
                        defect: "Alternative pathway stabilizer deficiency",
                        presentation: "X-linked, severe meningococcal disease"
                    },
                    factor_H_I: {
                        defect: "Regulators of alternative pathway",
                        presentation: "Uncontrolled alternative pathway → C3 depletion → pyogenic infections + aHUS (atypical hemolytic uremic syndrome)"
                    }
                }
            },
            
            secondary_immunodeficiencies: {
                HIV_AIDS: {
                    virus: "Human Immunodeficiency Virus (retrovirus)",
                    target: "CD4+ T cells (via CD4 and CCR5/CXCR4 coreceptors)",
                    pathogenesis: {
                        acute: {
                            timing: "2-4 weeks after infection",
                            viremia: "High viral load, widespread dissemination",
                            symptoms: "Flu-like illness (fever, rash, lymphadenopathy, pharyngitis) - often missed",
                            CD4: "Transient drop",
                            immune_response: "Strong CTL response partially controls virus"
                        },
                        chronic_latency: {
                            duration: "Years (average 8-10 years without treatment)",
                            mechanism: "Ongoing viral replication, progressive CD4+ T cell destruction",
                            CD4_decline: "~50 cells/μl per year",
                            reservoir: "Latently infected CD4+ T cells (main barrier to cure)",
                            asymptomatic: "Patients often asymptomatic during this phase"
                        },
                        AIDS: {
                            definition: "CD4 count <200 cells/μl or AIDS-defining illness",
                            opportunistic_infections: {
                                CD4_500_200: "Thrush (Candida), shingles (VZV), tuberculosis",
                                CD4_200_100: "Pneumocystis jirovecii pneumonia (PCP), toxoplasmosis, cryptococcal meningitis",
                                CD4_less_50: "Mycobacterium avium complex (MAC), CMV retinitis, CNS lymphoma"
                            },
                            malignancies: "Kaposi sarcoma (HHV-8), non-Hodgkin lymphoma, cervical cancer",
                            wasting: "HIV wasting syndrome"
                        }
                    },
                    diagnosis: {
                        screening: "HIV antibody test (4th gen includes p24 antigen)",
                        window: "Window period (~3-4 weeks before antibodies detectable)",
                        confirmatory: "HIV-1/HIV-2 differentiation, Western blot",
                        viral_load: "HIV RNA PCR (quantify virus)",
                        CD4_count: "Monitor immune status"
                    },
                    treatment: {
                        ART: {
                            name: "Antiretroviral therapy (combination of ≥3 drugs from ≥2 classes)",
                            timing: "Start immediately upon diagnosis (regardless of CD4 count)",
                            goal: "Suppress viral load to undetectable (<20-50 copies/ml)",
                            classes: [
                                "NRTI - nucleoside reverse transcriptase inhibitors (tenofovir, emtricitabine, abacavir)",
                                "NNRTI - non-nucleoside reverse transcriptase inhibitors (efavirenz, rilpivirine)",
                                "PI - protease inhibitors (darunavir, atazanavir)",
                                "INSTI - integrase strand transfer inhibitors (dolutegravir, bictegravir)",
                                "Entry inhibitors - CCR5 antagonists (maraviroc), fusion inhibitors (enfuvirtide)"
                            ],
                            adherence: "Critical (>95% to prevent resistance)",
                            monitoring: "Viral load, CD4 count, drug levels, resistance testing"
                        },
                        prophylaxis: {
                            PCP: "TMP-SMX if CD4 <200",
                            toxoplasmosis: "TMP-SMX if CD4 <100 and IgG positive",
                            MAC: "Azithromycin if CD4 <50",
                            vaccines: "Avoid live vaccines if CD4 <200"
                        },
                        outcomes: {
                            undetectable_untransmittable: "U=U - undetectable viral load → cannot transmit sexually",
                            lifespan: "Near-normal life expectancy if treated early and adherent",
                            complications: "Long-term ART toxicity, cardiovascular disease, non-AIDS cancers, neurocognitive impairment"
                        }
                    },
                    prevention: {
                        PrEP: "Pre-exposure prophylaxis (tenofovir/emtricitabine) for high-risk individuals",
                        PEP: "Post-exposure prophylaxis (within 72 hours of exposure)",
                        behavioral: "Condoms, needle exchange, testing",
                        PMTCT: "Prevention of mother-to-child transmission (ART during pregnancy, labor, postpartum)"
                    },
                    cure: "No cure currently; latent reservoir persists even with ART"
                },
                
                malnutrition: {
                    mechanism: "Protein-energy malnutrition → impaired cell-mediated immunity",
                    thymus: "Atrophy",
                    T_cells: "Reduced number and function",
                    antibodies: "Reduced (but less than T cells)",
                    infections: "Increased susceptibility, major cause of childhood mortality in developing countries"
                },
                
                immunosuppressive_drugs: {
                    corticosteroids: "Broad immunosuppression - inhibit cytokine production, lymphocyte function",
                    chemotherapy: "Neutropenia, lymphopenia",
                    biologics: "Anti-TNF, anti-CD20 (rituximab), etc. - targeted immunosuppression",
                    transplant: "Calcineurin inhibitors, mTOR inhibitors, anti-metabolites"
                },
                
                malignancy: {
                    hematologic: "Leukemia, lymphoma - replace bone marrow, impair immune function",
                    solid_tumors: "Immunosuppression from tumor itself, chemotherapy"
                },
                
                other: {
                    diabetes: "Impaired neutrophil function, poor wound healing",
                    renal_failure: "Uremia → impaired T cell function",
                    cirrhosis: "Impaired complement production, splenic dysfunction",
                    splenectomy: "Increased risk of encapsulated bacteria (S. pneumoniae, H. influenzae, N. meningitidis)",
                    burns: "Loss of barrier function, immunosuppression"
                }
            }
        },
        
        hypersensitivity: {
            definition: "Excessive or inappropriate immune responses causing tissue damage",
            Gell_Coombs_classification: "Four types (I-IV) based on mechanism",
            
            type_I: {
                name: "Immediate hypersensitivity (allergic reactions)",
                mechanism: "IgE-mediated mast cell/basophil degranulation",
                sensitization: {
                    step1: "First exposure to allergen",
                    step2: "Th2 cells (IL-4) drive B cells to produce IgE",
                    step3: "IgE binds FcεRI on mast cells/basophils → sensitized"
                },
                elicitation: {
                    step1: "Re-exposure to allergen",
                    step2: "Allergen cross-links IgE on mast cells",
                    step3: "Rapid degranulation (seconds to minutes)",
                    step4: "Release mediators"
                },
                phases: {
                    immediate: {
                        timing: "Minutes",
                        mediators: "Histamine, tryptase, heparin (preformed granules)",
                        effects: "Vasodilation, increased permeability, bronchoconstriction, mucus secretion"
                    },
                    late: {
                        timing: "4-8 hours",
                        mediators: "Leukotrienes, prostaglandins, cytokines (newly synthesized)",
                        cells: "Eosinophils recruited (IL-5)",
                        effects: "Prolonged inflammation, tissue damage"
                    }
                },
                clinical_examples: {
                    allergic_rhinitis: "Hay fever - sneezing, rhinorrhea, congestion, itchy eyes",
                    asthma: "Bronchoconstriction, wheezing, dyspnea",
                    food_allergy: "Urticaria, angioedema, GI symptoms, anaphylaxis",
                    atopic_dermatitis: "Eczema - pruritus, dry skin, chronic inflammation",
                    anaphylaxis: {
                        definition: "Severe, systemic, life-threatening allergic reaction",
                        triggers: "Foods (peanuts, shellfish), drugs (penicillin), insect stings (bee, wasp)",
                        symptoms: "Urticaria, angioedema, bronchospasm, hypotension (shock), GI symptoms",
                        biphasic: "20% have second reaction 4-8 hours later (late phase)",
                        treatment: "Epinephrine IM (first-line, life-saving), antihistamines, corticosteroids, IV fluids, oxygen",
                        prevention: "Avoid allergen, carry epinephrine auto-injector"
                    }
                },
                diagnosis: {
                    skin_prick_test: "Allergen applied to skin → wheal and flare (15 min) if positive",
                    specific_IgE: "Serum allergen-specific IgE (RAST, ImmunoCAP)",
                    total_IgE: "Often elevated (not specific)"
                },
                treatment: {
                    avoidance: "Avoid allergen (most effective)",
                    antihistamines: "Block histamine H1 receptors (symptom relief)",
                    corticosteroids: "Nasal or inhaled (asthma, rhinitis)",
                    leukotriene_inhibitors: "Montelukast (asthma)",
                    immunotherapy: {
                        mechanism: "Gradual allergen exposure → shift from IgE to IgG4, Treg induction",
                        routes: "Subcutaneous (SCIT) or sublingual (SLIT)",
                        duration: "3-5 years",
                        efficacy: "Reduces symptoms, prevents progression (asthma, new allergies)"
                    },
                    biologics: "Omalizumab (anti-IgE) for severe asthma, chronic urticaria"
                }
            },
            
            type_II: {
                name: "Antibody-mediated cytotoxic hypersensitivity",
                mechanism: "Antibodies (IgG, IgM) bind cell surface or matrix antigens → cell destruction",
                effector_mechanisms: {
                    complement: "Classical pathway → MAC → cell lysis",
                    ADCC: "Fc receptor-bearing cells (NK, macrophages) kill antibody-coated targets",
                    opsonization: "Phagocytosis of antibody/complement-coated cells"
                },
                examples: {
                    transfusion_reactions: {
                        ABO_incompatibility: "Preexisting anti-A or anti-B IgM → immediate hemolysis",
                        symptoms: "Fever, chills, back pain, hemoglobinuria, hypotension, DIC",
                        prevention: "ABO/Rh typing, crossmatch"
                    },
                    hemolytic_disease_newborn: {
                        Rh_incompatibility: "Rh- mother + Rh+ fetus → maternal anti-Rh IgG crosses placenta",
                        first_pregnancy: "Mother sensitized during delivery (fetal RBCs enter maternal circulation)",
                        subsequent: "Maternal IgG attacks fetal RBCs → hemolytic anemia, jaundice, hydrops fetalis",
                        prevention: "RhoGAM (anti-Rh IgG) given to Rh- mothers at 28 weeks and after delivery → clears fetal RBCs before sensitization"
                    },
                    autoimmune_hemolytic_anemia: {
                        warm: "IgG anti-RBC (37°C) → splenic destruction",
                        cold: "IgM anti-RBC (cold agglutinins, <30°C) → complement-mediated hemolysis",
                        causes: "Idiopathic, drugs, infections, lymphoma, SLE",
                        diagnosis: "Direct Coombs test (DAT) - detects antibody/complement on RBCs"
                    },
                    ITP: {
                        name: "Immune thrombocytopenic purpura",
                        mechanism: "Anti-platelet antibodies → splenic destruction",
                        presentation: "Petechiae, purpura, mucosal bleeding",
                        diagnosis: "Thrombocytopenia, normal/increased megakaryocytes (bone marrow)",
                        treatment: "Corticosteroids, IVIG, splenectomy, thrombopoietin agonists"
                    },
                    Goodpasture_syndrome: {
                        mechanism: "Anti-glomerular basement membrane (GBM) antibodies",
                        targets: "Kidneys (glomeruli), lungs (alveoli)",
                        presentation: "Rapidly progressive glomerulonephritis, pulmonary hemorrhage (hemoptysis)",
                        diagnosis: "Linear IgG on GBM (IF), anti-GBM antibodies (serum)",
                        treatment: "Plasmapheresis, cyclophosphamide, corticosteroids"
                    },
                    pemphigus_vulgaris: {
                        mechanism: "Anti-desmoglein antibodies (desmosomal proteins)",
                        presentation: "Skin and mucosal blistering (intraepidermal)",
                        diagnosis: "IF shows IgG in intercellular spaces (\"chicken wire\")",
                        treatment: "Corticosteroids, immunosuppressants, rituximab"
                    },
                    Graves_myasthenia: "Antibody-mediated (covered in autoimmune section)"
                }
            },
            
            type_III: {
                name: "Immune complex-mediated hypersensitivity",
                mechanism: "Antigen-antibody complexes deposit in tissues → complement activation → inflammation",
                factors: {
                    complex_size: "Small-medium complexes (slight antibody excess) most pathogenic (not cleared efficiently)",
                    antigen_excess: "Large complexes form, cleared by phagocytes",
                    antibody_excess: "Small complexes form, remain soluble"
                },
                pathology: {
                    deposition: "Complexes deposit in blood vessels, kidneys, joints, skin",
                    complement: "Activate complement → C3a, C5a (recruit neutrophils)",
                    neutrophils: "Release enzymes → tissue damage",
                    vasculitis: "Vessel wall inflammation"
                },
                examples: {
                    serum_sickness: {
                        historical: "Foreign serum (horse anti-diphtheria) → anti-serum antibodies → complexes",
                        modern: "Drugs (antibiotics, rituximab)",
                        presentation: "Fever, rash, arthralgia, lymphadenopathy (1-2 weeks after exposure)",
                        lab: "Low complement (consumed), circulating immune complexes",
                        treatment: "Stop drug, antihistamines, corticosteroids",
                        self_limited: "Usually resolves when antigen cleared"
                    },
                    Arthus_reaction: {
                        mechanism: "Local immune complex deposition (repeated antigen exposure at same site)",
                        presentation: "Erythema, edema, necrosis at injection site (4-8 hours)",
                        example: "Repeated vaccine injections"
                    },
                    post_streptococcal_glomerulonephritis: {
                        trigger: "Group A Streptococcus pharyngitis/skin infection",
                        mechanism: "Streptococcal antigen-antibody complexes deposit in glomeruli",
                        latency: "1-3 weeks after infection",
                        presentation: "Hematuria, proteinuria, hypertension, edema",
                        lab: "Low C3, elevated ASO titer",
                        prognosis: "Usually resolves (children); adults may progress to CKD",
                        treatment: "Supportive (BP control, diuretics)"
                    },
                    SLE_glomerulonephritis: {
                        mechanism: "DNA-anti-DNA immune complexes deposit in kidney",
                        types: "WHO classification (proliferative worst prognosis)"
                    }
                }
            },
            
            type_IV: {
                name: "Delayed-type hypersensitivity (T cell-mediated)",
                mechanism: "Antigen-specific T cells (CD4+ Th1, CD8+ CTL) cause tissue damage",
                timing: "Delayed - peaks at 48-72 hours (vs minutes for type I)",
                sensitization: "First exposure → antigen-specific T cells generated",
                elicitation: "Re-exposure → T cells recognize antigen → cytokine release, inflammation",
                subtypes: {
                    IVa: {
                        cells: "CD4+ Th1 cells",
                        cytokines: "IFN-γ, TNF-α",
                        mechanism: "Macrophage activation → granuloma formation",
                        examples: "Tuberculin test (PPD), granulomatous diseases"
                    },
                    IVb: {
                        cells: "CD4+ Th2 cells",
                        cytokines: "IL-4, IL-5, IL-13",
                        mechanism: "Eosinophil recruitment",
                        examples: "Chronic asthma, allergic rhinitis (late phase)"
                    },
                    IVc: {
                        cells: "CD8+ cytotoxic T cells",
                        mechanism: "Direct cell killing (perforin, granzyme)",
                        examples: "Contact dermatitis, graft rejection"
                    },
                    IVd: {
                        cells: "T cells",
                        cytokines: "IL-8, GM-CSF",
                        mechanism: "Neutrophil recruitment",
                        examples: "Pustular psoriasis"
                    }
                },
                clinical_examples: {
                    contact_dermatitis: {
                        mechanism: "Haptens (small chemicals) bind skin proteins → CD8+ T cell response",
                        common: "Poison ivy (urushiol), nickel, cosmetics, medications",
                        presentation: "Pruritic erythematous rash with vesicles (48-72 hours after contact)",
                        diagnosis: "Patch testing",
                        treatment: "Avoid allergen, topical corticosteroids"
                    },
                    tuberculin_test: {
                        PPD: "Purified protein derivative (tuberculin) injected intradermally",
                        positive: "Induration ≥5-15 mm at 48-72 hours (depends on risk factors)",
                        mechanism: "Th1 cells recognize mycobacterial antigens → IFN-γ → macrophage activation → induration",
                        interpretation: "Indicates prior TB exposure or BCG vaccination, NOT active disease"
                    },
                    transplant_rejection: {
                        acute_cellular: "T cells (CD8+, CD4+) attack allograft",
                        timing: "Days to months (with immunosuppression)",
                        prevention: "HLA matching, immunosuppression"
                    }
                }
            }
        },
        
        transplantation: {
            rejection: {
                hyperacute: {
                    timing: "Minutes to hours",
                    mechanism: "Preexisting antibodies (ABO, anti-HLA) bind graft → complement activation → thrombosis, necrosis",
                    prevention: "ABO matching, crossmatch (detect preexisting anti-donor antibodies)",
                    irreversible: "Graft must be removed"
                },
                acute: {
                    timing: "Days to months",
                    mechanism: "T cell-mediated (cellular rejection) - CD8+ kill graft cells, CD4+ activate inflammation",
                    presentation: "Fever, graft dysfunction (kidney: ↑creatinine; heart: ↓cardiac output)",
                    biopsy: "Lymphocytic infiltration",
                    treatment: "Increase immunosuppression (corticosteroids, anti-T cell antibodies)",
                    reversible: "Often reversible if caught early"
                },
                chronic: {
                    timing: "Months to years",
                    mechanism: "Mixed (antibodies, T cells, non-immune factors) → fibrosis, vascular changes",
                    pathology: "Graft vasculopathy (obliterative arteriopathy), interstitial fibrosis",
                    kidney: "Transplant glomerulopathy",
                    irreversible: "Progressive, irreversible graft failure",
                    prevention: "Adherence to immunosuppression, minimize acute rejection episodes"
                }
            },
            GVHD: {
                mechanism: "Donor T cells (in graft) recognize recipient tissues as foreign",
                setting: "Hematopoietic stem cell transplantation (HSCT), rarely solid organ (if T cells in graft)",
                acute: {
                    timing: "<100 days post-transplant",
                    targets: "Skin (rash), liver (jaundice, ↑bilirubin), GI (diarrhea)",
                    severity: "Grade I-IV (IV often fatal)",
                    prevention: "T cell depletion, immunosuppression (methotrexate, cyclosporine), HLA matching"
                },
                chronic: {
                    timing: ">100 days",
                    manifestations: "Scleroderma-like skin changes, sicca syndrome, bronchiolitis obliterans, liver disease",
                    immune_reconstitution: "Impaired (immunodeficiency)",
                    treatment: "Immunosuppression (corticosteroids, calcineurin inhibitors, others)"
                },
                GVL: {
                    benefit: "Graft-versus-leukemia effect - donor T cells kill residual leukemia cells",
                    relapse: "Less relapse if mild GVHD vs no GVHD",
                    balance: "Need GVHD prevention (toxicity) vs GVL benefit (cure leukemia)"
                }
            },
            HLA: {
                importance: "Better HLA matching → less rejection, better graft survival",
                loci: "HLA-A, -B, -DR most important (6 antigen match ideal)",
                sensitization: "Prior exposure (transfusions, pregnancy, transplants) → anti-HLA antibodies → limits future matches"
            }
        },
        
        keyTakeaways: [
            "Autoimmune diseases result from breakdown of self-tolerance (genetic + environmental factors)",
            "Primary immunodeficiencies are genetic; secondary are acquired (HIV, malnutrition, drugs)",
            "B cell deficiencies → recurrent bacterial infections (encapsulated bacteria)",
            "T cell deficiencies → opportunistic infections (viruses, fungi, Pneumocystis)",
            "Phagocyte defects (CGD) → catalase-positive bacterial/fungal infections, granulomas",
            "Complement deficiencies → Neisseria infections (C5-C9), SLE-like disease (early components)",
            "HIV infects CD4+ T cells → progressive immunodeficiency → AIDS",
            "Type I hypersensitivity: IgE-mediated (allergies, anaphylaxis) - immediate",
            "Type II: antibody against cell surface antigens (hemolysis, myasthenia gravis)",
            "Type III: immune complexes (serum sickness, SLE nephritis)",
            "Type IV: T cell-mediated (contact dermatitis, transplant rejection) - delayed",
            "Transplant rejection: hyperacute (antibodies), acute (T cells), chronic (mixed)",
            "GVHD: donor T cells attack recipient (HSCT complication)",
            "Treatment: immunosuppression (corticosteroids, DMARDs, biologics), IVIG replacement, HSCT"
        ]
    };
    
    return content;
}

handleVaccination(problem) {
    const content = {
        topic: "Vaccination and Immunization",
        category: 'applied_immunology',
        summary: "Vaccination is one of the most successful public health interventions, preventing millions of deaths annually. Vaccines induce protective immunity without causing disease by exposing the immune system to antigens in a controlled manner. They generate immunological memory (B and T cell memory) that provides rapid protection upon actual pathogen exposure. Different vaccine platforms (live-attenuated, inactivated, subunit, mRNA, viral vector) have distinct advantages, mechanisms, and applications.",
        
        // Would be fully fleshed out with mechanisms, vaccine types, schedules, herd immunity, etc.
        // Abbreviated for length
        principles: [
            "Induce immunological memory without disease",
            "Generate neutralizing antibodies and/or T cell responses",
            "Herd immunity protects unvaccinated individuals",
            "Vaccine safety is paramount - rigorous testing required",
            "Adjuvants enhance immune responses to weak antigens"
        ]
    };
    
    return content;
}


// ========================================
// MAIN PROBLEM PROCESSING METHODS
// ========================================

parseImmuneProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.immuneTopics)) {
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
        throw new Error(`Unable to recognize immune system topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.immuneTopics[topicType].difficulty,
        prerequisites: this.immuneTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handleImmuneProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' || 
                                   (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleImmuneExperimentRequest(config);
        } else {
            this.currentProblem = this.parseImmuneProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getImmuneContent(this.currentProblem);
            
            if (this.adaptiveDifficulty) {
                this.currentContent = this.adaptContentDifficulty(this.currentContent, this.learnerProfile.currentLevel);
            }
            
            if (this.contextualLearning) {
                this.currentContent.contextualScenarios = this.getContextualScenarios(this.currentProblem.type);
            }
            
            if (this.includeExperiments) {
                this.currentContent.relatedExperiments = this.getRelatedImmuneExperiments(this.currentProblem.type);
            }
            
            if (this.metacognitiveSupport) {
                this.currentContent.metacognitivePrompts = this.getMetacognitivePrompts(this.currentProblem.type);
            }
            
            this.contentSteps = this.generateImmuneContent(this.currentProblem, this.currentContent);
            
            // Generate workbook (handles async internally)
            this.generateImmuneWorkbook();

            // Return synchronously with promise for diagrams
            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                steps: this.contentSteps,
                diagrams: this.diagramData,
                experiments: this.currentContent.relatedExperiments,
                learnerProfile: this.learnerProfile,
                getDiagrams: () => this.waitForDiagrams()
            };
        }
    } catch (error) {
        throw new Error(`Failed to process immune system request: ${error.message}`);
    }
}

getImmuneContent(problem) {
    const handler = this.immuneTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for immune system topic: ${problem.type}`);
    }

    let content = handler(problem);

    // Apply parameter filtering if parameters are provided
    if (problem.parameters && Object.keys(problem.parameters).length > 0) {
        content = this.filterContentByParameters(content, problem.parameters);
    }

    return content;
}

handleImmuneExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.immuneExperiments[experimentId]) {
        this.currentExperiment = this.immuneExperiments[experimentId];
    } else {
        this.currentExperiment = this.findImmuneExperimentByTopic(topic);
    }

    if (!this.currentExperiment) {
        throw new Error(`No immune experiment found for: ${topic}`);
    }

    const experimentContent = this.generateExperimentContent(this.currentExperiment, parameters);
    this.generateImmuneExperimentWorkbook(experimentContent);

    return {
        experiment: this.currentExperiment,
        content: experimentContent,
        workbook: this.currentWorkbook,
        getDiagrams: () => this.waitForDiagrams()
    };
}

findImmuneExperimentByTopic(topic) {
    const topicLower = topic.toLowerCase();
    
    // Direct name match
    for (const [id, exp] of Object.entries(this.immuneExperiments)) {
        if (exp.name.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Related topics match
    for (const [id, exp] of Object.entries(this.immuneExperiments)) {
        if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
            return exp;
        }
    }

    // Category match
    for (const [id, exp] of Object.entries(this.immuneExperiments)) {
        if (exp.category.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    return null;
}

getRelatedImmuneExperiments(topicType) {
    const related = [];
    
    Object.entries(this.immuneExperiments).forEach(([id, experiment]) => {
        if (experiment.relatedTopics.includes(topicType)) {
            related.push({
                id: id,
                name: experiment.name,
                category: experiment.category,
                historicalScientist: experiment.historicalBackground?.scientist,
                labTitle: experiment.labExperiment?.title
            });
        }
    });

    return related;
}

// ========================================
// IMMUNE-SPECIFIC CONTENT GENERATION
// ========================================

getImmuneContent(problem) {
    const handler = this.immuneTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for immune system topic: ${problem.type}`);
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

    // Filter by immune cell type
    if (parameters.cellType) {
        if (filtered.cellularDefenses) {
            const cellType = parameters.cellType.toLowerCase();
            filtered.cellularDefenses = Object.keys(filtered.cellularDefenses)
                .filter(key => key.toLowerCase().includes(cellType))
                .reduce((obj, key) => {
                    obj[key] = filtered.cellularDefenses[key];
                    return obj;
                }, {});
        }
    }

    // Filter by immunity type
    if (parameters.immunityType) {
        if (parameters.immunityType === 'innate' && filtered.innateVsAdaptive) {
            delete filtered.adaptive;
            filtered.focus = 'innate';
        } else if (parameters.immunityType === 'adaptive' && filtered.innateVsAdaptive) {
            delete filtered.innate;
            filtered.focus = 'adaptive';
        }
    }

    return filtered;
}

// ADAPTIVE LEARNING METHODS
// ========================================

adaptContentDifficulty(content, currentLevel) {
    const adapted = { ...content };

    switch (currentLevel) {
        case 'beginner':
            adapted.vocabulary = 'simplified';
            adapted.examples = this.selectBasicExamples(content.examples);
            adapted.depth = 'overview';
            // Simplify immune terminology
            if (adapted.keyDefinitions) {
                adapted.keyDefinitions = this.simplifyDefinitions(adapted.keyDefinitions);
            }
            break;
        
        case 'intermediate':
            adapted.vocabulary = 'standard';
            adapted.examples = this.selectMixedExamples(content.examples);
            adapted.depth = 'moderate';
            // Include clinical applications
            if (content.clinicalApplications) {
                adapted.clinicalHighlights = this.selectClinicalApplications(content.clinicalApplications, 'basic');
            }
            break;
        
        case 'advanced':
            adapted.vocabulary = 'technical';
            adapted.examples = this.selectAdvancedExamples(content.examples);
            adapted.depth = 'comprehensive';
            adapted.research = this.addResearchConnections(content);
            // Include detailed mechanisms and pathways
            if (content.mechanisms) {
                adapted.detailedMechanisms = content.mechanisms;
            }
            if (content.signaling || content.pathways) {
                adapted.molecularDetails = true;
            }
            break;
    }

    return adapted;
}

simplifyDefinitions(definitions) {
    const simplified = {};
    const definitionsToKeep = Math.min(Object.keys(definitions).length, 5);
    
    Object.entries(definitions)
        .slice(0, definitionsToKeep)
        .forEach(([term, definition]) => {
            // Simplify complex definitions
            if (typeof definition === 'string') {
                simplified[term] = definition.split('.')[0] + '.'; // Keep first sentence only
            } else {
                simplified[term] = definition;
            }
        });
    
    return simplified;
}

selectClinicalApplications(applications, level) {
    if (Array.isArray(applications)) {
        return level === 'basic' ? applications.slice(0, 3) : applications;
    } else if (typeof applications === 'object') {
        const entries = Object.entries(applications);
        const toKeep = level === 'basic' ? 3 : entries.length;
        return Object.fromEntries(entries.slice(0, toKeep));
    }
    return applications;
}

selectBasicExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples.filter(ex => ex.difficulty === 'basic' || !ex.difficulty).slice(0, 3);
}

selectMixedExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples.slice(0, 5);
}

selectAdvancedExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples;
}

addResearchConnections(content) {
    const connections = {
        currentResearch: `Current research in ${content.topic} includes:`,
        openQuestions: "Unresolved questions in the field:",
        techniques: "Advanced techniques used to study this topic:"
    };

    // Add topic-specific research directions
    if (content.topic.includes('T Cell') || content.topic.includes('Cellular')) {
        connections.currentResearch += " CAR-T cell engineering, checkpoint inhibitor mechanisms, T cell exhaustion reversal";
        connections.openQuestions = "How can we enhance T cell persistence in tumors? What drives T cell exhaustion?";
        connections.techniques = "Single-cell RNA sequencing, mass cytometry (CyTOF), multiplex immunofluorescence";
    } else if (content.topic.includes('Antibody') || content.topic.includes('Humoral')) {
        connections.currentResearch += " Broadly neutralizing antibodies, antibody engineering, Fc optimization";
        connections.openQuestions = "Can we design antibodies against any target? How to improve antibody half-life?";
        connections.techniques = "Phage display, yeast display, therapeutic antibody design, cryo-EM structure determination";
    } else if (content.topic.includes('Innate')) {
        connections.currentResearch += " Trained immunity, inflammasome biology, pattern recognition receptor signaling";
        connections.openQuestions = "How does innate immune memory work? Can we harness trained immunity therapeutically?";
        connections.techniques = "Live cell imaging, CRISPR screening, systems immunology approaches";
    } else if (content.topic.includes('Autoimmune')) {
        connections.currentResearch += " Tolerance restoration, regulatory T cell therapy, precision immunosuppression";
        connections.openQuestions = "Can we induce antigen-specific tolerance? Why do autoimmune diseases cluster?";
        connections.techniques = "Genome-wide association studies (GWAS), immune repertoire sequencing, organoid models";
    }

    return connections;
}

getContextualScenarios(topicType) {
    return this.contextualScenarios[topicType] || [];
}

getMetacognitivePrompts(topicType) {
    const topicName = this.immuneTopics[topicType]?.name || topicType;
    
    const prompts = {
        beforeLearning: this.metacognitivePrompts.beforeLearning.map(p => 
            p.replace('{topic}', topicName)
        ),
        duringLearning: this.metacognitivePrompts.duringLearning.map(p => 
            p.replace('{concept}', topicName).replace('{related_concept}', this.getRelatedConcept(topicType))
        ),
        afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
            p.replace('{topic}', topicName)
        ),
        problemSolving: this.metacognitivePrompts.problemSolving || []
    };

    return prompts;
}

getRelatedConcept(topicType) {
    const relationships = {
        'innate_immunity': 'adaptive immunity',
        'adaptive_immunity': 'innate immunity',
        'cellular_immunity': 'humoral immunity',
        'humoral_immunity': 'cellular immunity',
        'antibodies': 'B cells and plasma cells',
        'complement_system': 'innate immunity and inflammation'
    };
    return relationships[topicType] || 'related immune concepts';
}

updateLearnerProfile(topicType, performance) {
    if (performance.score >= 0.8) {
        if (!this.learnerProfile.masteredTopics.includes(topicType)) {
            this.learnerProfile.masteredTopics.push(topicType);
        }
        // Remove from struggling if present
        this.learnerProfile.strugglingTopics = this.learnerProfile.strugglingTopics.filter(t => t !== topicType);
    } else if (performance.score < 0.5) {
        if (!this.learnerProfile.strugglingTopics.includes(topicType)) {
            this.learnerProfile.strugglingTopics.push(topicType);
        }
    }

    this.learnerProfile.progressHistory.push({
        topic: topicType,
        timestamp: new Date().toISOString(),
        performance: performance
    });

    // Suggest prerequisite topics if struggling
    if (performance.score < 0.5) {
        const prerequisites = this.immuneTopics[topicType]?.prerequisites || [];
        performance.suggestedReview = prerequisites.filter(
            prereq => !this.learnerProfile.masteredTopics.includes(prereq)
        );
    }
}

// ========================================
// CONTENT GENERATION METHODS
// ========================================

generateImmuneContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateOverviewSection(problem, content));

    // Generate immune-specific content sections
    if (content.components || content.cellularDefenses) {
        contentSections.push(this.generateComponentsSection(content));
    }

    if (content.mechanisms) {
        contentSections.push(this.generateMechanismsSection(content));
    }

    if (content.TcellSubsets || content.antibodyClasses) {
        contentSections.push(this.generateSubsetsSection(content));
    }

    if (content.pathways || content.activationPathways) {
        contentSections.push(this.generatePathwaysSection(content));
    }

    if (content.effectorFunctions || content.antibodyFunctions) {
        contentSections.push(this.generateFunctionsSection(content));
    }

    if (content.clinicalApplications || content.diseases) {
        contentSections.push(this.generateClinicalSection(content));
    }

    // Add comparisons if available
    if (content.comparison || content.innate_vs_adaptive) {
        contentSections.push(this.generateComparisonsSection(content));
    }

    // Add examples section
    if (content.examples) {
        contentSections.push(this.generateExamplesSection(content));
    }

    // Add related experiments section
    if (this.includeExperiments) {
        const relatedExperiments = this.getRelatedExperiments(problem.type);
        if (relatedExperiments.length > 0) {
            contentSections.push(this.generateRelatedExperimentsSection(relatedExperiments));
        }
    }

    // Add key takeaways
    if (content.keyTakeaways) {
        contentSections.push(this.generateKeyTakeawaysSection(content));
    }

    return contentSections;
}

generateComponentsSection(content) {
    return {
        type: 'components',
        title: 'Components and Cell Types',
        data: content.components || content.cellularDefenses
    };
}

generateMechanismsSection(content) {
    return {
        type: 'mechanisms',
        title: 'Molecular Mechanisms',
        data: content.mechanisms
    };
}

generateSubsetsSection(content) {
    return {
        type: 'subsets',
        title: content.TcellSubsets ? 'T Cell Subsets' : 'Antibody Classes',
        data: content.TcellSubsets || content.antibodyClasses
    };
}

generatePathwaysSection(content) {
    return {
        type: 'pathways',
        title: 'Signaling Pathways and Cascades',
        data: content.pathways || content.activationPathways
    };
}

generateClinicalSection(content) {
    return {
        type: 'clinical',
        title: 'Clinical Applications and Diseases',
        data: content.clinicalApplications || content.diseases
    };
}

generateKeyTakeawaysSection(content) {
    return {
        type: 'key_takeaways',
        title: 'Key Takeaways',
        data: content.keyTakeaways
    };
}

extractKeyPoints(content) {
    const keyPoints = [];

    if (content.summary) keyPoints.push(content.summary);
    
    // Extract from immune-specific structures
    if (content.keyCharacteristics) {
        Object.values(content.keyCharacteristics).forEach(char => {
            if (char.definition) keyPoints.push(char.definition);
        });
    }

    if (content.keyTakeaways) {
        keyPoints.push(...content.keyTakeaways.slice(0, 3));
    }

    if (content.components) {
        Object.keys(content.components).forEach(component => {
            keyPoints.push(`${component}: Key immune component`);
        });
    }

    return keyPoints.slice(0, 7); // Return top 7 key points
}

generateExperimentContent(experiment, parameters = {}) {
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
        const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        
        if (Array.isArray(value)) {
            formatted.push([label, '']);
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
            formatted.push([label, '']);
            Object.entries(value).forEach(([k, v]) => {
                const subLabel = k.replace(/_/g, ' ');
                if (typeof v === 'object' && !Array.isArray(v)) {
                    formatted.push([`  ${subLabel}:`, '']);
                    Object.entries(v).forEach(([subK, subV]) => {
                        formatted.push([`    ${subK}`, subV]);
                    });
                } else if (Array.isArray(v)) {
                    formatted.push([`  ${subLabel}:`, '']);
                    v.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push([`  ${subLabel}`, v]);
                }
            });
        } else {
            formatted.push([label, value]);
        }
    });

    return formatted;
}

formatLabExperiment(labExp) {
    const formatted = [];

    // Title and Hypothesis
    formatted.push(['Experiment Title', labExp.title]);
    formatted.push(['Hypothesis', labExp.hypothesis]);
    
    // Purpose
    if (labExp.purpose) {
        formatted.push(['Purpose', labExp.purpose]);
    }

    // Background
    if (labExp.background) {
        formatted.push(['', '']);
        formatted.push(['BACKGROUND', '']);
        if (typeof labExp.background === 'string') {
            formatted.push(['', labExp.background]);
        } else if (typeof labExp.background === 'object') {
            Object.entries(labExp.background).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
            });
        }
    }

    // Variables
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

    // Materials
    if (labExp.materials) {
        formatted.push(['', '']);
        formatted.push(['MATERIALS REQUIRED', '']);
        if (Array.isArray(labExp.materials)) {
            labExp.materials.forEach(material => {
                formatted.push(['  •', material]);
            });
        } else if (typeof labExp.materials === 'object') {
            Object.entries(labExp.materials).forEach(([category, items]) => {
                if (Array.isArray(items)) {
                    formatted.push([`  ${category}:`, '']);
                    items.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push([`  ${category}`, items]);
                }
            });
        }
    }

    // Safety Precautions
    if (labExp.safetyPrecautions || labExp.safetyNotes) {
        formatted.push(['', '']);
        formatted.push(['⚠ SAFETY PRECAUTIONS', '']);
        const safety = labExp.safetyPrecautions || labExp.safetyNotes;
        if (Array.isArray(safety)) {
            safety.forEach(note => {
                formatted.push(['  ⚠', note]);
            });
        }
    }

    // Procedure
    if (labExp.procedure) {
        formatted.push(['', '']);
        formatted.push(['PROCEDURE', '']);
        
        if (Array.isArray(labExp.procedure)) {
            let stepNumber = 1;
            labExp.procedure.forEach((step) => {
                if (step.trim() === '') {
                    formatted.push(['', '']);
                } else if (step.match(/^[A-Z\s]+:$/)) {
                    // Section header
                    formatted.push(['', '']);
                    formatted.push([step, '']);
                } else if (step.startsWith('  ')) {
                    // Sub-step
                    formatted.push([step, '']);
                } else {
                    // Regular step
                    formatted.push([`  ${stepNumber}.`, step]);
                    stepNumber++;
                }
            });
        } else if (typeof labExp.procedure === 'object') {
            Object.entries(labExp.procedure).forEach(([section, steps]) => {
                formatted.push(['', '']);
                formatted.push([section.toUpperCase() + ':', '']);
                if (Array.isArray(steps)) {
                    steps.forEach((step, idx) => {
                        formatted.push([`  ${idx + 1}.`, step]);
                    });
                } else if (typeof steps === 'object') {
                    Object.entries(steps).forEach(([subKey, subValue]) => {
                        formatted.push([`  ${subKey}:`, '']);
                        if (Array.isArray(subValue)) {
                            subValue.forEach(item => formatted.push(['    -', item]));
                        } else {
                            formatted.push(['    ', subValue]);
                        }
                    });
                } else {
                    formatted.push(['  ', steps]);
                }
            });
        }
    }

    // Expected Results
    if (labExp.expectedResults) {
        formatted.push(['', '']);
        formatted.push(['EXPECTED RESULTS', '']);
        if (typeof labExp.expectedResults === 'object') {
            Object.entries(labExp.expectedResults).forEach(([condition, result]) => {
                formatted.push([`  ${condition}:`, '']);
                if (typeof result === 'object') {
                    Object.entries(result).forEach(([key, value]) => {
                        formatted.push([`    ${key}`, value]);
                    });
                } else {
                    formatted.push(['    ', result]);
                }
            });
        }
    }

    // Data Table
    if (labExp.dataTable) {
        formatted.push(['', '']);
        formatted.push(['DATA TABLE', '']);
        labExp.dataTable.forEach(row => {
            if (Array.isArray(row)) {
                formatted.push(['  ', row.join(' | ')]);
            }
        });
    }

    // Observations
    if (labExp.observations) {
        formatted.push(['', '']);
        formatted.push(['OBSERVATIONS', '']);
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

    // Analysis
    if (labExp.analysis) {
        formatted.push(['', '']);
        formatted.push(['ANALYSIS', '']);
        if (typeof labExp.analysis === 'object') {
            Object.entries(labExp.analysis).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(item => formatted.push(['    -', item]));
                } else if (typeof value === 'object') {
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        formatted.push([`    ${subKey}:`, subValue]);
                    });
                } else {
                    formatted.push(['    ', value]);
                }
            });
        }
    }

    // Results/Conclusion
    if (labExp.results) {
        formatted.push(['', '']);
        formatted.push(['RESULTS', labExp.results]);
    }

    if (labExp.conclusions) {
        formatted.push(['', '']);
        formatted.push(['CONCLUSIONS', '']);
        if (Array.isArray(labExp.conclusions)) {
            labExp.conclusions.forEach(conclusion => {
                formatted.push(['  •', conclusion]);
            });
        } else {
            formatted.push(['', labExp.conclusions]);
        }
    }

    // Connection to historical
    if (labExp.connectionToMetchnikoff || labExp.connectionToOuchterlony || 
        labExp.connectionToLandsteiner || labExp.connectionToBordet) {
        const connectionKey = Object.keys(labExp).find(key => key.startsWith('connectionTo'));
        if (connectionKey) {
            formatted.push(['', '']);
            formatted.push(['Connection to Historical Discovery', '']);
            const connection = labExp[connectionKey];
            if (typeof connection === 'object') {
                Object.entries(connection).forEach(([key, value]) => {
                    formatted.push([`  ${key}:`, value]);
                });
            } else {
                formatted.push(['  ', connection]);
            }
        }
    }

    // Real-world applications
    if (labExp.realWorldApplications || labExp.realWorldRelevance) {
        formatted.push(['', '']);
        formatted.push(['REAL-WORLD APPLICATIONS', '']);
        const applications = labExp.realWorldApplications || labExp.realWorldRelevance;
        if (Array.isArray(applications)) {
            applications.forEach(app => {
                formatted.push(['  •', app]);
            });
        } else if (typeof applications === 'object') {
            Object.entries(applications).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
            });
        }
    }

    // Extensions
    if (labExp.extensions) {
        formatted.push(['', '']);
        formatted.push(['EXTENSIONS / FURTHER INVESTIGATION', '']);
        if (Array.isArray(labExp.extensions)) {
            labExp.extensions.forEach(ext => {
                formatted.push(['  •', ext]);
            });
        }
    }

    // Troubleshooting
    if (labExp.troubleshooting) {
        formatted.push(['', '']);
        formatted.push(['TROUBLESHOOTING', '']);
        if (Array.isArray(labExp.troubleshooting)) {
            labExp.troubleshooting.forEach(item => {
                formatted.push(['  •', item]);
            });
        }
    }

    return formatted;
}

getRelatedExperiments(topicType) {
    const related = [];
    
    Object.entries(this.immuneExperiments).forEach(([id, experiment]) => {
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

generateRelatedExperimentsSection(experiments) {
    return {
        type: 'related_experiments',
        title: 'Related Experiments',
        data: experiments
    };
}

// ========================================
// UTILITY AND HELPER METHODS
// ========================================

getAllExperiments() {
    return Object.entries(this.immuneExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist,
        year: exp.historicalBackground?.year,
        labTitle: exp.labExperiment?.title
    }));
}

getExperimentsByCategory(category) {
    return Object.entries(this.immuneExperiments)
        .filter(([_, exp]) => exp.category === category)
        .map(([id, exp]) => ({
            id: id,
            name: exp.name,
            scientist: exp.historicalBackground?.scientist,
            year: exp.historicalBackground?.year
        }));
}

getTopicsByCategory(category) {
    return Object.entries(this.immuneTopics)
        .filter(([_, topic]) => topic.category === category)
        .map(([id, topic]) => ({
            id: id,
            name: topic.name,
            description: topic.description,
            difficulty: topic.difficulty,
            prerequisites: topic.prerequisites
        }));
}

getAllTopics() {
    return Object.entries(this.immuneTopics).map(([id, topic]) => ({
        id: id,
        name: topic.name,
        category: topic.category,
        description: topic.description,
        difficulty: topic.difficulty,
        prerequisites: topic.prerequisites || [],
        relatedExperiments: topic.relatedExperiments || []
    }));
}

getTopicPrerequisites(topicType) {
    const topic = this.immuneTopics[topicType];
    if (!topic || !topic.prerequisites) return [];
    
    return topic.prerequisites.map(prereqId => ({
        id: prereqId,
        name: this.immuneTopics[prereqId]?.name || prereqId,
        mastered: this.learnerProfile.masteredTopics.includes(prereqId)
    }));
}

getLearningPath(startTopic, endTopic) {
    // BFS to find learning path from start to end topic
    const visited = new Set();
    const queue = [[startTopic]];
    
    while (queue.length > 0) {
        const path = queue.shift();
        const current = path[path.length - 1];
        
        if (current === endTopic) {
            return path.map(topicId => ({
                id: topicId,
                name: this.immuneTopics[topicId]?.name || topicId
            }));
        }
        
        if (visited.has(current)) continue;
        visited.add(current);
        
        // Get topics that list current as prerequisite
        Object.entries(this.immuneTopics).forEach(([topicId, topic]) => {
            if (topic.prerequisites && topic.prerequisites.includes(current) && !visited.has(topicId)) {
                queue.push([...path, topicId]);
            }
        });
    }
    
    return null; // No path found
}

getRecommendedNextTopics() {
    const mastered = this.learnerProfile.masteredTopics;
    const struggling = this.learnerProfile.strugglingTopics;
    
    // Find topics where all prerequisites are mastered
    const recommended = Object.entries(this.immuneTopics)
        .filter(([topicId, topic]) => {
            // Skip if already mastered or currently struggling
            if (mastered.includes(topicId) || struggling.includes(topicId)) return false;
            
            // Check if all prerequisites are mastered
            if (!topic.prerequisites || topic.prerequisites.length === 0) return true;
            return topic.prerequisites.every(prereq => mastered.includes(prereq));
        })
        .map(([topicId, topic]) => ({
            id: topicId,
            name: topic.name,
            category: topic.category,
            difficulty: topic.difficulty,
            description: topic.description
        }));
    
    // Sort by difficulty
    const difficultyOrder = { 'beginner': 1, 'intermediate': 2, 'advanced': 3 };
    recommended.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
    
    return recommended.slice(0, 5); // Return top 5 recommendations
}

getDiagnosticQuestions(topicType) {
    // Generate diagnostic questions to assess understanding
    const topic = this.immuneTopics[topicType];
    if (!topic) return [];
    
    const questions = [];
    const content = topic.handler({ type: topicType });
    
    // Extract key concepts for questions
    if (content.keyTakeaways) {
        content.keyTakeaways.slice(0, 5).forEach((takeaway, idx) => {
            questions.push({
                id: `${topicType}_q${idx + 1}`,
                question: `Explain: ${takeaway}`,
                type: 'explanation',
                difficulty: topic.difficulty
            });
        });
    }
    
    return questions;
}


formatImmuneComponents(components) {
    const formatted = [];

    Object.entries(components).forEach(([key, value]) => {
        formatted.push([this.formatKey(key), '']);
        
        if (typeof value === 'object' && value !== null) {
            this.formatNestedObject(value, formatted, 2);
        } else {
            formatted.push(['  ', value]);
        }
    });

    return formatted;
}

generateMechanismsSection(content) {
    return {
        type: 'mechanisms',
        title: 'Immunological Mechanisms',
        data: this.formatMechanisms(content.mechanisms)
    };
}

formatMechanisms(mechanisms) {
    const formatted = [];

    Object.entries(mechanisms).forEach(([key, value]) => {
        formatted.push([this.formatKey(key), '']);
        
        if (Array.isArray(value)) {
            value.forEach(item => {
                formatted.push(['  •', item]);
            });
        } else if (typeof value === 'object' && value !== null) {
            this.formatNestedObject(value, formatted, 2);
        } else {
            formatted.push(['  ', value]);
        }
    });

    return formatted;
}

generateCellTypesSection(content) {
    return {
        type: 'cell_types',
        title: 'Immune Cell Types and Functions',
        data: this.formatCellTypes(content)
    };
}

formatCellTypes(content) {
    const formatted = [];

    if (content.TcellSubsets) {
        formatted.push(['T Cell Subsets', '']);
        Object.entries(content.TcellSubsets).forEach(([subset, details]) => {
            formatted.push([`  ${this.formatKey(subset)}`, '']);
            this.formatNestedObject(details, formatted, 4);
        });
    }

    if (content.antibodyClasses) {
        formatted.push(['', '']);
        formatted.push(['Antibody Classes', '']);
        Object.entries(content.antibodyClasses).forEach(([abClass, details]) => {
            formatted.push([`  ${abClass}`, '']);
            this.formatNestedObject(details, formatted, 4);
        });
    }

    return formatted;
}

generatePathwaysSection(content) {
    return {
        type: 'pathways',
        title: 'Immune Response Pathways',
        data: this.formatPathways(content.pathways || content.activationPathways)
    };
}

formatPathways(pathways) {
    const formatted = [];

    Object.entries(pathways).forEach(([pathway, details]) => {
        formatted.push([this.formatKey(pathway), '']);
        
        if (details.steps && Array.isArray(details.steps)) {
            formatted.push(['  Steps:', '']);
            details.steps.forEach((step, index) => {
                formatted.push([`    ${index + 1}.`, step]);
            });
        }
        
        if (details.mechanism) {
            formatted.push(['  Mechanism:', details.mechanism]);
        }
        
        if (details.outcomes) {
            formatted.push(['  Outcomes:', '']);
            if (Array.isArray(details.outcomes)) {
                details.outcomes.forEach(outcome => {
                    formatted.push(['    •', outcome]);
                });
            } else {
                formatted.push(['    ', details.outcomes]);
            }
        }
    });

    return formatted;
}

generateClinicalSection(content) {
    const data = [];

    if (content.clinicalApplications) {
        data.push(['Clinical Applications', '']);
        Object.entries(content.clinicalApplications).forEach(([area, details]) => {
            data.push([`  ${this.formatKey(area)}`, '']);
            if (typeof details === 'object' && !Array.isArray(details)) {
                this.formatNestedObject(details, data, 4);
            } else if (Array.isArray(details)) {
                details.forEach(item => data.push(['    •', item]));
            } else {
                data.push(['    ', details]);
            }
        });
    }

    if (content.treatment) {
        data.push(['', '']);
        data.push(['Treatment Approaches', '']);
        this.formatNestedObject(content.treatment, data, 2);
    }

    return {
        type: 'clinical',
        title: 'Clinical Significance and Applications',
        data: data
    };
}

// ========================================
// IMMUNE-SPECIFIC UTILITY METHODS
// ========================================

getAllImmuneExperiments() {
    return Object.entries(this.immuneExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist,
        year: exp.historicalBackground?.year
    }));
}

getImmuneTopicRelevance(topicType) {
    const relevance = {
        innate_immunity: "Innate immunity provides immediate, broad-spectrum defense against all pathogens",
        adaptive_immunity: "Adaptive immunity provides specific, learned responses with immunological memory",
        cellular_immunity: "T cell-mediated immunity eliminates intracellular pathogens and cancer cells",
        humoral_immunity: "Antibody-mediated immunity neutralizes extracellular pathogens and toxins",
        immune_cells: "Diverse immune cells coordinate defense through specialized functions",
        antibodies: "Antibodies are molecular recognition and effector molecules of humoral immunity",
        complement_system: "Complement enhances immune responses through opsonization and direct killing",
        immune_disorders: "Understanding immune dysfunction enables diagnosis and treatment of disease",
        vaccination: "Vaccines induce protective immunity without disease, preventing millions of deaths"
    };

    return relevance[topicType] || "Essential immune system concept for understanding host defense";
}

suggestRelatedImmuneTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        innate_immunity: ['adaptive_immunity', 'immune_cells', 'complement_system'],
        adaptive_immunity: ['cellular_immunity', 'humoral_immunity', 'vaccination'],
        cellular_immunity: ['adaptive_immunity', 'immune_cells', 'immune_disorders'],
        humoral_immunity: ['antibodies', 'adaptive_immunity', 'vaccination'],
        immune_cells: ['innate_immunity', 'cellular_immunity', 'humoral_immunity'],
        antibodies: ['humoral_immunity', 'vaccination', 'immune_disorders'],
        complement_system: ['innate_immunity', 'antibodies'],
        immune_disorders: ['cellular_immunity', 'humoral_immunity', 'vaccination'],
        vaccination: ['adaptive_immunity', 'humoral_immunity', 'immune_disorders']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.immuneTopics[type]?.name,
        description: this.immuneTopics[type]?.description
    }));
}

generateImmuneGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract key definitions
    if (this.currentContent.keyDefinitions) {
        Object.assign(glossary, this.currentContent.keyDefinitions);
    }

    // Extract from mechanisms
    if (this.currentContent.mechanisms) {
        this.extractGlossaryFromMechanisms(this.currentContent.mechanisms, glossary);
    }

    // Extract from cell types
    if (this.currentContent.TcellSubsets) {
        Object.keys(this.currentContent.TcellSubsets).forEach(subset => {
            if (!glossary[subset]) {
                glossary[subset] = `T cell subset with specialized immune function`;
            }
        });
    }

    return glossary;
}

extractGlossaryFromMechanisms(mechanisms, glossary) {
    Object.entries(mechanisms).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            if (value.definition) {
                glossary[this.formatKey(key)] = value.definition;
            }
            // Recurse for nested objects
            Object.entries(value).forEach(([subKey, subValue]) => {
                if (typeof subValue === 'object' && subValue !== null && subValue.definition) {
                    glossary[this.formatKey(subKey)] = subValue.definition;
                }
            });
        }
    });
}

generateImmuneAnalogy(concept) {
    const analogies = {
        // Innate immunity
        skin: "Like castle walls protecting against invaders",
        phagocyte: "Like a pac-man eating enemies",
        neutrophil: "Like first responder firefighters arriving at the scene",
        macrophage: "Like cleanup crew that also alerts reinforcements",
        NK_cell: "Like security guards checking ID cards",
        inflammation: "Like calling emergency services - brings help but causes temporary disruption",
        complement: "Like a domino cascade that tags and destroys invaders",
        
        // Adaptive immunity
        T_cell: "Like specialized soldiers trained for specific enemies",
        B_cell: "Like factories producing custom weapons (antibodies)",
        antibody: "Like heat-seeking missiles targeting specific invaders",
        memory_cell: "Like veterans who remember past battles and respond faster",
        clonal_selection: "Like finding the right key from millions of possibilities",
        MHC: "Like a display window showing what's inside the cell",
        
        // Cellular immunity
        CD4_helper: "Like generals coordinating battle strategy",
        CD8_cytotoxic: "Like assassins eliminating infected cells",
        Th1: "Like calling in heavy artillery for intracellular enemies",
        Th2: "Like organizing eosinophils and mast cells against parasites",
        Th17: "Like recruiting infantry (neutrophils) to battle zones",
        Treg: "Like peacekeepers preventing friendly fire",
        
        // Humoral immunity
        IgG: "Like versatile multi-tool antibody for most jobs",
        IgM: "Like first-response antibody, large and powerful but short-lived",
        IgA: "Like border patrol guarding entry points (mucous membranes)",
        IgE: "Like oversensitive alarm system (allergies) or anti-parasite weapon",
        plasma_cell: "Like ammunition factory mass-producing antibodies",
        
        // Mechanisms
        opsonization: "Like gift-wrapping bacteria so they're easier to eat",
        neutralization: "Like putting a plug in a gun barrel",
        ADCC: "Like marking targets for air strikes",
        phagocytosis: "Like cellular eating - engulf and digest",
        apoptosis: "Like controlled demolition of damaged buildings",
        
        // Disorders
        autoimmunity: "Like friendly fire - immune system attacking self",
        immunodeficiency: "Like an army with missing divisions",
        allergy: "Like overreacting to harmless visitors",
        transplant_rejection: "Like attacking foreign tissue as invader",
        
        // Other
        vaccine: "Like showing soldiers pictures of the enemy before battle",
        herd_immunity: "Like a firebreak protecting unvaccinated individuals",
        adjuvant: "Like an alarm that makes immune system pay attention"
    };

    return analogies[concept] || "Performs a specialized immune function";
}

adaptImmuneLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                'phagocyte': 'cell that eats invaders',
                'neutrophil': 'first responder white blood cell',
                'macrophage': 'large white blood cell that eats and cleans',
                'lymphocyte': 'specialized white blood cell',
                'antibody': 'Y-shaped protein that tags invaders',
                'antigen': 'foreign molecule that triggers immune response',
                'cytokine': 'chemical messenger between immune cells',
                'complement': 'protein system that helps kill bacteria',
                'MHC': 'cell surface molecule that displays antigens',
                'opsonization': 'coating bacteria to make them easier to eat',
                'clonal selection': 'choosing the right immune cell for the job',
                'immunological memory': 'remembering past infections',
                'T cell': 'specialized immune cell (T lymphocyte)',
                'B cell': 'antibody-producing immune cell',
                'plasma cell': 'antibody factory cell'
            }
        },
        intermediate: {
            replacements: {
                'phagocyte': 'phagocyte (cell that engulfs pathogens)',
                'lymphocyte': 'lymphocyte (T or B cell)',
                'MHC': 'MHC (major histocompatibility complex)',
                'cytokine': 'cytokine (immune signaling protein)'
            }
        },
        advanced: {
            replacements: {
                'MHC': 'MHC (HLA in humans)',
                'T cell': 'T lymphocyte',
                'B cell': 'B lymphocyte',
                'antibody': 'immunoglobulin (Ig)'
            }
        }
    };

    const levelAdaptation = adaptations[level] || adaptations.intermediate;
    let adaptedText = text;

    for (const [term, replacement] of Object.entries(levelAdaptation.replacements)) {
        const regex = new RegExp(`\\b${term}\\b`, 'gi');
        adaptedText = adaptedText.replace(regex, replacement);
    }

    return adaptedText;
}

generateImmuneLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        innate_immunity: [
            "Describe the physical and chemical barriers of innate immunity",
            "Explain how phagocytes recognize and destroy pathogens",
            "Describe the inflammatory response and its cardinal signs",
            "Explain the role of pattern recognition receptors (PRRs)",
            "Describe the complement system's three pathways and functions"
        ],
        adaptive_immunity: [
            "Distinguish between innate and adaptive immunity",
            "Explain clonal selection and expansion of lymphocytes",
            "Describe immunological memory and primary vs secondary responses",
            "Explain how self-tolerance is maintained",
            "Describe antigen presentation via MHC molecules"
        ],
        cellular_immunity: [
            "Compare CD4+ helper T cells and CD8+ cytotoxic T cells",
            "Describe the different Th subsets and their functions",
            "Explain how CTLs kill infected cells",
            "Describe T cell activation requirements (two-signal model)",
            "Explain MHC restriction and its significance"
        ],
        humoral_immunity: [
            "Describe antibody structure (Fab, Fc, variable, constant regions)",
            "Compare the five antibody classes and their functions",
            "Explain how antibody diversity is generated",
            "Describe B cell activation and germinal center reactions",
            "Explain antibody effector functions (neutralization, opsonization, complement)"
        ],
        immune_cells: [
            "Identify major innate immune cells and their functions",
            "Distinguish T cells, B cells, and NK cells",
            "Explain hematopoiesis and lymphocyte development",
            "Describe antigen-presenting cells (APCs)",
            "Explain leukocyte trafficking and extravasation"
        ],
        antibodies: [
            "Draw and label antibody structure",
            "Compare IgG, IgM, IgA, IgE, and IgD",
            "Explain V(D)J recombination and somatic hypermutation",
            "Describe class switching and its regulation",
            "Explain how therapeutic monoclonal antibodies work"
        ],
        complement_system: [
            "Describe the three complement activation pathways",
            "Explain complement functions (opsonization, MAC, inflammation)",
            "Describe complement regulation on host cells",
            "Relate complement deficiencies to disease susceptibility",
            "Explain how antibodies activate complement"
        ],
        immune_disorders: [
            "Distinguish between autoimmune diseases, immunodeficiencies, and hypersensitivities",
            "Explain mechanisms of autoimmune disease",
            "Compare primary and secondary immunodeficiencies",
            "Describe the four types of hypersensitivity reactions",
            "Explain transplant rejection mechanisms"
        ],
        vaccination: [
            "Explain how vaccines induce protective immunity",
            "Compare different vaccine types (live, inactivated, subunit, mRNA)",
            "Describe herd immunity and its importance",
            "Explain the role of adjuvants in vaccines",
            "Relate vaccine efficacy to immune memory"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand key immune system concepts",
        "Apply knowledge to health and disease contexts",
        "Make connections between immune mechanisms and clinical applications"
    ];
}

identifyImmunePrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        innate_immunity: [
            "Basic cell biology (cell structure and function)",
            "Understanding of pathogens (bacteria, viruses, fungi, parasites)",
            "Basic knowledge of inflammation"
        ],
        adaptive_immunity: [
            "Innate immunity concepts",
            "Understanding of lymphocytes",
            "Basic genetics (genes, proteins)",
            "Cell signaling basics"
        ],
        cellular_immunity: [
            "Adaptive immunity fundamentals",
            "T cell basics",
            "MHC concepts",
            "Cell-mediated responses"
        ],
        humoral_immunity: [
            "Adaptive immunity fundamentals",
            "B cell basics",
            "Protein structure (antibodies are proteins)",
            "Understanding of antigen-antibody interactions"
        ],
        immune_cells: [
            "Basic cell biology",
            "Hematopoiesis overview",
            "Understanding of white blood cells"
        ],
        antibodies: [
            "Protein structure",
            "B cells and humoral immunity",
            "Antigen recognition"
        ],
        complement_system: [
            "Innate immunity basics",
            "Understanding of protein cascades",
            "Membrane structure"
        ],
        immune_disorders: [
            "Innate and adaptive immunity",
            "Understanding of normal immune function",
            "Basic pathology concepts"
        ],
        vaccination: [
            "Adaptive immunity and memory",
            "Understanding of infections and disease",
            "Basic immunology"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "General biology background",
        "Basic immunology knowledge"
    ];
}

generateImmuneStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        innate_immunity: [
            "Create flowcharts showing inflammatory response steps",
            "Make comparison tables for different phagocytes",
            "Draw and label complement pathways",
            "Use real-life infection examples to understand innate responses",
            "Create concept maps linking barriers, cells, and molecules"
        ],
        adaptive_immunity: [
            "Make timeline diagrams of primary vs secondary responses",
            "Create T cell and B cell development flowcharts",
            "Use Venn diagrams to compare innate vs adaptive immunity",
            "Practice explaining clonal selection with diagrams",
            "Create flashcards for key terms (MHC, clonal selection, memory)"
        ],
        cellular_immunity: [
            "Make comparison tables for different Th subsets",
            "Draw CD8+ T cell killing mechanisms step-by-step",
            "Create flowcharts for T cell activation (2-signal model)",
            "Use disease examples to understand each Th subset's role",
            "Practice drawing MHC-I and MHC-II presentation pathways"
        ],
        humoral_immunity: [
            "Draw antibody structure repeatedly until memorized",
            "Create comparison tables for the 5 antibody classes",
            "Make flashcards for antibody functions",
            "Draw germinal center reactions and affinity maturation",
            "Practice explaining V(D)J recombination with diagrams"
        ],
        immune_cells: [
            "Create cell identification flashcards with images",
            "Make hematopoiesis flowcharts showing all lineages",
            "Build comparison tables for all immune cell types",
            "Use clinical cases to learn cell deficiencies",
            "Draw leukocyte extravasation steps"
        ],
        antibodies: [
            "Build or use molecular models of antibody structure",
            "Create detailed structure diagrams labeling all regions",
            "Make tables comparing antibody classes with clinical examples",
            "Practice drawing V(D)J recombination",
            "Relate antibody structure to function with specific examples"
        ],
        complement_system: [
            "Draw all three complement pathways side by side",
            "Create flowcharts showing cascade amplification",
            "Make tables of complement components and functions",
            "Use disease examples to understand complement deficiencies",
            "Practice explaining MAC formation step by step"
        ],
        immune_disorders: [
            "Organize diseases by mechanism (autoimmune, immunodeficiency, hypersensitivity)",
            "Create comparison tables for hypersensitivity types",
            "Use clinical cases to learn disease presentations",
            "Make concept maps linking defects to infections",
            "Create timeline diagrams for transplant rejection"
        ],
        vaccination: [
            "Compare vaccine types in detailed tables",
            "Draw immunological memory formation",
            "Use historical vaccine successes as examples",
            "Calculate herd immunity thresholds",
            "Create timelines of immune responses to vaccines"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Review material regularly with active recall",
        "Create visual aids and concept maps",
        "Use clinical examples to understand immune concepts",
        "Practice explaining mechanisms to others",
        "Relate immune system to health and disease"
    ];
}

generateImmuneProcessTimeline(processName) {
    const timelines = {
        'Immune Response to Infection': [
            { time: '0-4 hours', phase: 'Innate Recognition', events: 'PRRs detect PAMPs, inflammation begins' },
            { time: '4-96 hours', phase: 'Innate Effectors', events: 'Neutrophils, macrophages, NK cells respond' },
            { time: '96 hours-7 days', phase: 'Adaptive Priming', events: 'DCs present antigens, T cells activate' },
            { time: '7-14 days', phase: 'Adaptive Effectors', events: 'Clonal expansion, antibodies appear, CTLs kill' },
            { time: '14+ days', phase: 'Memory Formation', events: 'Memory B and T cells persist' }
        ],
        'T Cell Activation': [
            { step: 'Antigen Presentation', duration: 'Seconds-Minutes', events: 'TCR scans pMHC on APCs' },
            { step: 'Immunological Synapse', duration: 'Minutes-Hours', events: 'Stable T cell-APC contact forms' },
            { step: 'Signal Integration', duration: 'Hours', events: 'Signal 1 + Signal 2 + Signal 3' },
            { step: 'Clonal Expansion', duration: 'Days', events: 'Proliferation (10,000-fold over 7 days)' },
            { step: 'Differentiation', duration: 'Days', events: 'Become effectors or memory cells' }
        ],
        'Antibody Response': [
            { phase: 'Primary Response', time: 'Day 0-5', events: 'Lag phase, B cell activation' },
            { phase: 'IgM Production', time: 'Day 5-10', events: 'IgM antibodies appear' },
            { phase: 'Class Switching', time: 'Day 7-14', events: 'IgG production begins' },
            { phase: 'Peak Response', time: 'Day 14-21', events: 'Maximal antibody levels' },
            { phase: 'Contraction', time: 'Week 3+', events: 'Most plasma cells die, memory persists' }
        ],
        'Phagocytosis': [
            { step: 'Recognition', duration: 'Seconds', events: 'PRRs or opsonins bind pathogen' },
            { step: 'Attachment', duration: 'Seconds', events: 'Receptors engage, signaling initiated' },
            { step: 'Engulfment', duration: 'Minutes', events: 'Pseudopodia extend, phagosome forms' },
            { step: 'Phagolysosome', duration: 'Minutes', events: 'Fusion with lysosome' },
            { step: 'Killing', duration: 'Minutes-Hours', events: 'ROS, enzymes destroy pathogen' }
        ],
        'Complement Cascade': [
            { step: 'Recognition', duration: 'Milliseconds', events: 'C1q binds antibodies or MBL binds sugars' },
            { step: 'Amplification', duration: 'Seconds', events: 'C3 convertase generates C3b' },
            { step: 'C5 Convertase', duration: 'Seconds', events: 'C3b accumulation forms C5 convertase' },
            { step: 'MAC Formation', duration: 'Seconds-Minutes', events: 'C5b-C9 assembles pore' },
            { step: 'Cell Lysis', duration: 'Minutes', events: 'Osmotic lysis of target' }
        ]
    };

    return timelines[processName] || [];
}

generateImmuneWorkbook() {
    // This would call canvas generation methods similar to molecular biology
    // Implementation depends on the canvas/workbook generation code
    this.currentWorkbook = {
        type: 'immune_system',
        topic: this.currentProblem?.type,
        generated: new Date().toISOString(),
        content: this.currentContent,
        steps: this.contentSteps
    };
}

generateImmuneExperimentWorkbook(experimentContent) {
    // This would call canvas generation methods for experiments
    this.currentWorkbook = {
        type: 'immune_experiment',
        experiment: this.currentExperiment?.name,
        generated: new Date().toISOString(),
        content: experimentContent
    };
}

// Helper method for formatting nested objects (used by multiple methods)
formatNestedObject(obj, formatted, indent = 0) {
    const spaces = '  '.repeat(indent / 2);
    
    Object.entries(obj).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            formatted.push([`${spaces}${this.formatKey(key)}:`, '']);
            value.forEach(item => {
                if (typeof item === 'object' && item !== null) {
                    this.formatNestedObject(item, formatted, indent + 2);
                } else {
                    formatted.push([`${spaces}  •`, item]);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            formatted.push([`${spaces}${this.formatKey(key)}:`, '']);
            this.formatNestedObject(value, formatted, indent + 2);
        } else {
            formatted.push([`${spaces}${this.formatKey(key)}:`, value]);
        }
    });
}

formatKey(key) {
    return key
        .replace(/_/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Method to wait for diagrams (if async rendering is needed)
async waitForDiagrams() {
    if (this.diagramsPromise) {
        return await this.diagramsPromise;
    }
    return this.diagramData;
}

// ========================================
// WORKBOOK GENERATION METHODS
// ========================================

generateImmuneWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Immunology Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generateImmuneDiagramDataAsync();
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
    workbook.title = 'Immunology Experiment Workbook';

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
                this.immuneTopics[topic]?.name || topic,
                this.immuneTopics[topic]?.description || ''
            ])
        });
    }

    this.currentWorkbook = workbook;
}

// Async helper that runs in background
async generateImmuneDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantImmuneDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Immunology diagrams"
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
        title: 'Immunology Diagrams',
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
        title: 'Immunology Diagrams',
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

getRelevantImmuneDiagrams(topicType) {
    const diagramMap = {
        innate_immunity: [
            "innateImmunity",
            "phagocytosis",
            "inflammationProcess",
            "complementCascade",
            "skinBarrier"
        ],
        adaptive_immunity: [
            "adaptiveImmunity",
            "lymphocyteDevelopment",
            "clonalSelection",
            "primarySecondaryResponse",
            "immuneMemory"
        ],
        cellular_immunity: {
            "cellularImmunity",
            "tcellActivation",
            "mhcPresentation",
            "cytotoxicTcell",
            "helperTcellSubsets",
            "immunologicalSynapse"
        },
        humoral_immunity: [
            "humoralImmunity",
            "antibodyStructure",
            "bcellActivation",
            "germinalCenter",
            "antibodyFunctions",
            "plasmaCells"
        ],
        immune_cells: [
            "leukocyteTypes",
            "hematopoiesis",
            "lymphocytes",
            "phagocytes",
            "dendriticCells",
            "naturalKillerCells"
        ],
        antibodies: [
            "antibodyStructure",
            "antibodyClasses",
            "antibodyDiversity",
            "vdjRecombination",
            "antigenBinding"
        ],
        complement_system: [
            "complementCascade",
            "complementPathways",
            "membraneAttackComplex",
            "complementRegulation"
        ],
        immune_disorders: [
            "autoimmuneMechanisms",
            "hypersensitivityTypes",
            "immunodeficiency",
            "transplantRejection"
        ],
        vaccination: [
            "vaccineTypes",
            "immuneMemory",
            "herdImmunity",
            "vaccineResponse"
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
        title: 'Immunology Workbook',
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
        title: 'Problem Statement',
        type: 'problem',
        data: {
            query: this.currentProblem.query,
            type: this.currentProblem.type,
            difficulty: this.immuneTopics[this.currentProblem.type]?.difficulty || 'intermediate',
            prerequisites: this.immuneTopics[this.currentProblem.type]?.prerequisites || []
        }
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    return {
        title: 'Content Overview',
        type: 'overview',
        data: {
            topic: this.currentContent.topic,
            category: this.currentContent.category,
            summary: this.currentContent.summary,
            keyPoints: this.extractKeyPoints(this.currentContent)
        }
    };
}

createDetailedContentSection() {
    if (!this.currentContent) return null;

    // Extract detailed content based on structure
    const detailedData = {};
    
    // Get all main sections from content (excluding metadata)
    const contentSections = Object.keys(this.currentContent).filter(key => 
        !['topic', 'category', 'summary', 'keyTakeaways'].includes(key)
    );

    contentSections.forEach(section => {
        detailedData[section] = this.currentContent[section];
    });

    return {
        title: 'Detailed Content',
        type: 'detailed_content',
        data: detailedData
    };
}

createComparisonsWorkbookSection() {
    if (!this.currentContent) return null;

    // Look for comparison data in content
    const comparisons = this.findComparisons(this.currentContent);
    
    if (!comparisons || comparisons.length === 0) return null;

    return {
        title: 'Comparisons',
        type: 'comparisons',
        data: comparisons
    };
}

createExamplesApplicationsSection() {
    if (!this.currentContent) return null;

    const examples = this.currentContent.examples || [];
    const applications = this.currentContent.applications || 
                        this.currentContent.clinicalApplications ||
                        this.currentContent.realWorldApplications || [];

    if (examples.length === 0 && applications.length === 0) return null;

    return {
        title: 'Examples and Applications',
        type: 'examples_applications',
        data: {
            examples: examples,
            applications: applications
        }
    };
}

createContextualScenariosWorkbookSection() {
    if (!this.contextualLearning && !this.includeExamples) return null;

    const topicId = this.currentProblem?.type;
    if (!topicId) return null;

    const scenarios = this.contextualScenarios[topicId] || [];
    
    if (scenarios.length === 0) return null;

    return {
        title: 'Contextual Scenarios',
        type: 'scenarios',
        data: scenarios
    };
}

createRelatedExperimentsWorkbookSection() {
    if (!this.includeExperiments) return null;

    const topicId = this.currentProblem?.type;
    if (!topicId) return null;

    const topic = this.immuneTopics[topicId];
    const relatedExperiments = topic?.relatedExperiments || [];

    if (relatedExperiments.length === 0) return null;

    return {
        title: 'Related Experiments',
        type: 'experiments',
        data: relatedExperiments.map(exp => ({
            id: exp.id,
            name: exp.name,
            category: exp.category,
            summary: this.immuneExperiments[exp.id]?.labExperiment?.purpose || 'No description available'
        }))
    };
}

createMisconceptionsSection() {
    if (!this.includeCommonMisconceptions) return null;

    const topicId = this.currentProblem?.type;
    if (!topicId) return null;

    const misconceptions = this.commonMisconceptions[topicId] || [];
    
    if (misconceptions.length === 0) return null;

    return {
        title: 'Common Misconceptions',
        type: 'misconceptions',
        data: {
            misconceptions: misconceptions,
            clarificationStrategies: this.clarificationStrategies
        }
    };
}

createMetacognitiveWorkbookSection() {
    if (!this.metacognitiveSupport) return null;

    return {
        title: 'Metacognitive Reflection',
        type: 'metacognitive',
        data: {
            beforeLearning: this.metacognitivePrompts.beforeLearning,
            duringLearning: this.metacognitivePrompts.duringLearning,
            afterLearning: this.metacognitivePrompts.afterLearning,
            problemSolving: this.metacognitivePrompts.problemSolving
        }
    };
}

createAssessmentSection() {
    if (!this.assessmentFeedback) return null;

    const topicId = this.currentProblem?.type;
    if (!topicId) return null;

    return {
        title: 'Assessment and Practice',
        type: 'assessment',
        data: {
            knowledgeLevels: this.assessmentRubrics.knowledgeLevel,
            understandingLevels: this.assessmentRubrics.understandingLevels,
            sampleQuestions: this.assessmentQuestions[topicId] || {}
        }
    };
}

// ========================================
// HELPER METHODS
// ========================================

extractKeyPoints(content) {
    // Extract key takeaways or main points
    if (content.keyTakeaways) {
        return content.keyTakeaways;
    }

    // Fallback: extract from various sections
    const keyPoints = [];
    
    if (content.concepts) {
        keyPoints.push(...content.concepts);
    }
    
    if (content.keyDefinitions) {
        const definitions = Object.keys(content.keyDefinitions).slice(0, 5);
        keyPoints.push(...definitions.map(key => `${key}: ${content.keyDefinitions[key]}`));
    }

    return keyPoints.slice(0, 10); // Limit to 10 key points
}

findComparisons(content) {
    const comparisons = [];

    // Look for comparison objects in content
    const searchKeys = ['comparison', 'compare', 'vs', 'versus', 'differences'];
    
    const findInObject = (obj, path = []) => {
        if (!obj || typeof obj !== 'object') return;

        Object.keys(obj).forEach(key => {
            const lowerKey = key.toLowerCase();
            const value = obj[key];

            // Check if key suggests comparison
            if (searchKeys.some(searchKey => lowerKey.includes(searchKey))) {
                comparisons.push({
                    title: this.formatTitle(key),
                    path: [...path, key],
                    data: value
                });
            }

            // Recursively search nested objects
            if (typeof value === 'object' && value !== null) {
                findInObject(value, [...path, key]);
            }
        });
    };

    findInObject(content);
    return comparisons;
}

formatTitle(key) {
    // Convert camelCase or snake_case to Title Case
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
        .trim();
}

// ========================================
// RENDERING AND EXPORT METHODS
// ========================================

async renderWorkbookToCanvas() {
    if (!this.currentWorkbook) {
        throw new Error('No workbook available to render');
    }

    // Wait for diagrams if they're being generated
    if (this.diagramsPromise) {
        await this.waitForDiagrams();
    }

    const canvas = createCanvas(this.width, this.height);
    const ctx = canvas.getContext('2d');

    // Fill background
    ctx.fillStyle = this.colors.background;
    ctx.fillRect(0, 0, this.width, this.height);

    let yOffset = 50;

    // Render title
    ctx.fillStyle = this.colors.headerText;
    ctx.font = 'bold 24px Arial';
    ctx.fillText(this.currentWorkbook.title, 50, yOffset);
    yOffset += 60;

    // Render each section
    for (const section of this.currentWorkbook.sections) {
        yOffset = this.renderSection(ctx, section, yOffset);
        yOffset += 40; // Space between sections
    }

    return canvas;
}

renderSection(ctx, section, yOffset) {
    const startY = yOffset;

    // Render section title
    ctx.fillStyle = this.colors.sectionText;
    ctx.font = 'bold 18px Arial';
    ctx.fillText(section.title, 50, yOffset);
    yOffset += 30;

    // Render section content based on type
    switch (section.type) {
        case 'problem':
            yOffset = this.renderProblemSection(ctx, section.data, yOffset);
            break;
        case 'overview':
            yOffset = this.renderOverviewSection(ctx, section.data, yOffset);
            break;
        case 'detailed_content':
            yOffset = this.renderDetailedContentSection(ctx, section.data, yOffset);
            break;
        case 'diagrams':
            yOffset = this.renderDiagramsSection(ctx, section, yOffset);
            break;
        case 'comparisons':
            yOffset = this.renderComparisonsSection(ctx, section.data, yOffset);
            break;
        case 'examples_applications':
            yOffset = this.renderExamplesSection(ctx, section.data, yOffset);
            break;
        case 'scenarios':
            yOffset = this.renderScenariosSection(ctx, section.data, yOffset);
            break;
        case 'experiments':
            yOffset = this.renderExperimentsSection(ctx, section.data, yOffset);
            break;
        case 'misconceptions':
            yOffset = this.renderMisconceptionsSection(ctx, section.data, yOffset);
            break;
        case 'metacognitive':
            yOffset = this.renderMetacognitiveSection(ctx, section.data, yOffset);
            break;
        case 'assessment':
            yOffset = this.renderAssessmentSection(ctx, section.data, yOffset);
            break;
        default:
            yOffset = this.renderGenericSection(ctx, section.data, yOffset);
    }

    return yOffset;
}

renderProblemSection(ctx, data, yOffset) {
    ctx.font = '14px Arial';
    ctx.fillStyle = this.colors.cellText;
    
    const wrapText = (text, maxWidth) => {
        const words = text.split(' ');
        const lines = [];
        let currentLine = '';

        for (const word of words) {
            const testLine = currentLine + word + ' ';
            const metrics = ctx.measureText(testLine);
            if (metrics.width > maxWidth && currentLine !== '') {
                lines.push(currentLine);
                currentLine = word + ' ';
            } else {
                currentLine = testLine;
            }
        }
        lines.push(currentLine);
        return lines;
    };

    const lines = wrapText(data.query, this.width - 100);
    lines.forEach(line => {
        ctx.fillText(line, 70, yOffset);
        yOffset += 20;
    });

    yOffset += 10;
    ctx.font = 'italic 12px Arial';
    ctx.fillStyle = this.colors.definitionText;
    ctx.fillText(`Type: ${data.type} | Difficulty: ${data.difficulty}`, 70, yOffset);
    yOffset += 25;

    return yOffset;
}

renderOverviewSection(ctx, data, yOffset) {
    ctx.font = '14px Arial';
    ctx.fillStyle = this.colors.cellText;
    
    // Render summary
    const summaryLines = this.wrapText(ctx, data.summary, this.width - 100);
    summaryLines.forEach(line => {
        ctx.fillText(line, 70, yOffset);
        yOffset += 20;
    });

    yOffset += 20;

    // Render key points if available
    if (data.keyPoints && data.keyPoints.length > 0) {
        ctx.font = 'bold 12px Arial';
        ctx.fillText('Key Points:', 70, yOffset);
        yOffset += 20;

        ctx.font = '12px Arial';
        data.keyPoints.slice(0, 5).forEach(point => {
            const pointLines = this.wrapText(ctx, `• ${point}`, this.width - 120);
            pointLines.forEach(line => {
                ctx.fillText(line, 90, yOffset);
                yOffset += 18;
            });
        });
    }

    return yOffset + 10;
}

renderDetailedContentSection(ctx, data, yOffset) {
    ctx.font = '12px Arial';
    ctx.fillStyle = this.colors.cellText;

    // Render nested structure (simplified)
    const renderObject = (obj, indent = 70) => {
        Object.keys(obj).slice(0, 10).forEach(key => {
            const value = obj[key];
            
            ctx.font = 'bold 12px Arial';
            ctx.fillText(`${this.formatTitle(key)}:`, indent, yOffset);
            yOffset += 18;

            if (typeof value === 'string') {
                ctx.font = '11px Arial';
                const lines = this.wrapText(ctx, value, this.width - indent - 30);
                lines.forEach(line => {
                    ctx.fillText(line, indent + 15, yOffset);
                    yOffset += 16;
                });
            } else if (Array.isArray(value)) {
                ctx.font = '11px Arial';
                value.slice(0, 3).forEach(item => {
                    const itemStr = typeof item === 'string' ? item : JSON.stringify(item);
                    const lines = this.wrapText(ctx, `• ${itemStr}`, this.width - indent - 40);
                    lines.forEach(line => {
                        ctx.fillText(line, indent + 20, yOffset);
                        yOffset += 16;
                    });
                });
            }
            
            yOffset += 5;
        });
    };

    renderObject(data);
    return yOffset + 10;
}

renderDiagramsSection(ctx, section, yOffset) {
    if (section.status === 'loading') {
        ctx.font = 'italic 12px Arial';
        ctx.fillStyle = this.colors.definitionText;
        ctx.fillText('Diagrams are being rendered...', 70, yOffset);
        return yOffset + 30;
    }

    if (!section.diagrams || section.diagrams.length === 0) {
        ctx.font = 'italic 12px Arial';
        ctx.fillStyle = this.colors.definitionText;
        ctx.fillText('No diagrams available for this topic', 70, yOffset);
        return yOffset + 30;
    }

    // Render diagram placeholders (actual images would be embedded in PDF/DOCX export)
    section.diagrams.forEach(diagram => {
        if (diagram.type === 'error') {
            ctx.fillStyle = '#ff0000';
            ctx.font = '11px Arial';
            ctx.fillText(`❌ ${diagram.key}: ${diagram.error}`, 70, yOffset);
            yOffset += 20;
        } else {
            ctx.fillStyle = this.colors.cellText;
            ctx.font = 'bold 11px Arial';
            ctx.fillText(`📊 ${diagram.key}`, 70, yOffset);
            yOffset += 15;
            
            // Draw placeholder box
            ctx.strokeStyle = this.colors.borderColor;
            ctx.strokeRect(70, yOffset, 200, 150);
            ctx.font = 'italic 10px Arial';
            ctx.fillText('[Diagram Image]', 120, yOffset + 75);
            yOffset += 165;
        }
    });

    return yOffset;
}

renderComparisonsSection(ctx, data, yOffset) {
    ctx.font = '12px Arial';
    ctx.fillStyle = this.colors.cellText;

    data.forEach(comparison => {
        ctx.font = 'bold 12px Arial';
        ctx.fillText(comparison.title, 70, yOffset);
        yOffset += 20;

        // Render comparison data (simplified)
        if (typeof comparison.data === 'object') {
            Object.keys(comparison.data).slice(0, 5).forEach(key => {
                ctx.font = '11px Arial';
                ctx.fillText(`  ${key}: ${this.simplifyValue(comparison.data[key])}`, 90, yOffset);
                yOffset += 16;
            });
        }
        yOffset += 10;
    });

    return yOffset;
}

renderExamplesSection(ctx, data, yOffset) {
    ctx.font = '12px Arial';
    ctx.fillStyle = this.colors.cellText;

    // Render examples
    if (data.examples && data.examples.length > 0) {
        ctx.font = 'bold 12px Arial';
        ctx.fillText('Examples:', 70, yOffset);
        yOffset += 20;

        data.examples.slice(0, 3).forEach((example, i) => {
            ctx.font = '11px Arial';
            const exampleText = typeof example === 'string' ? example : 
                              example.scenario || example.name || JSON.stringify(example).slice(0, 100);
            const lines = this.wrapText(ctx, `${i + 1}. ${exampleText}`, this.width - 120);
            lines.forEach(line => {
                ctx.fillText(line, 90, yOffset);
                yOffset += 16;
            });
            yOffset += 5;
        });
        yOffset += 15;
    }

    // Render applications
    if (data.applications && data.applications.length > 0) {
        ctx.font = 'bold 12px Arial';
        ctx.fillText('Applications:', 70, yOffset);
        yOffset += 20;

        data.applications.slice(0, 5).forEach(app => {
            ctx.font = '11px Arial';
            const appText = typeof app === 'string' ? app : JSON.stringify(app).slice(0, 100);
            const lines = this.wrapText(ctx, `• ${appText}`, this.width - 120);
            lines.forEach(line => {
                ctx.fillText(line, 90, yOffset);
                yOffset += 16;
            });
        });
    }

    return yOffset + 10;
}

renderScenariosSection(ctx, data, yOffset) {
    ctx.font = '12px Arial';
    ctx.fillStyle = this.colors.cellText;

    data.slice(0, 3).forEach((scenario, i) => {
        ctx.font = 'bold 12px Arial';
        ctx.fillText(`Scenario ${i + 1}: ${scenario.scenario}`, 70, yOffset);
        yOffset += 20;

        ctx.font = '11px Arial';
        if (scenario.context) {
            const lines = this.wrapText(ctx, scenario.context, this.width - 120);
            lines.forEach(line => {
                ctx.fillText(line, 90, yOffset);
                yOffset += 16;
            });
        }
        
        yOffset += 5;
        ctx.font = 'italic 11px Arial';
        ctx.fillStyle = this.colors.definitionText;
        if (scenario.question) {
            const qLines = this.wrapText(ctx, `Q: ${scenario.question}`, this.width - 120);
            qLines.forEach(line => {
                ctx.fillText(line, 90, yOffset);
                yOffset += 16;
            });
        }
        
        ctx.fillStyle = this.colors.cellText;
        yOffset += 15;
    });

    return yOffset;
}

renderExperimentsSection(ctx, data, yOffset) {
    ctx.font = '12px Arial';
    ctx.fillStyle = this.colors.cellText;

    data.slice(0, 5).forEach(experiment => {
        ctx.font = 'bold 11px Arial';
        ctx.fillText(`🧪 ${experiment.name}`, 70, yOffset);
        yOffset += 18;

        ctx.font = '10px Arial';
        ctx.fillText(`   Category: ${experiment.category}`, 90, yOffset);
        yOffset += 15;

        if (experiment.summary) {
            const lines = this.wrapText(ctx, experiment.summary, this.width - 120);
            lines.slice(0, 2).forEach(line => {
                ctx.fillText(`   ${line}`, 90, yOffset);
                yOffset += 14;
            });
        }
        yOffset += 10;
    });

    return yOffset;
}

renderMisconceptionsSection(ctx, data, yOffset) {
    ctx.font = '12px Arial';
    ctx.fillStyle = this.colors.cellText;

    if (data.misconceptions && data.misconceptions.length > 0) {
        ctx.font = 'bold 12px Arial';
        ctx.fillText('Common Misconceptions:', 70, yOffset);
        yOffset += 20;

        data.misconceptions.slice(0, 5).forEach((misconception, i) => {
            ctx.font = '11px Arial';
            ctx.fillStyle = '#d32f2f';
            const lines = this.wrapText(ctx, `❌ ${misconception}`, this.width - 120);
            lines.forEach(line => {
                ctx.fillText(line, 90, yOffset);
                yOffset += 16;
            });
            ctx.fillStyle = this.colors.cellText;
            yOffset += 5;
        });
    }

    return yOffset + 10;
}

renderMetacognitiveSection(ctx, data, yOffset) {
    ctx.font = '12px Arial';
    ctx.fillStyle = this.colors.cellText;

    const sections = [
        { title: 'Before Learning', prompts: data.beforeLearning },
        { title: 'During Learning', prompts: data.duringLearning },
        { title: 'After Learning', prompts: data.afterLearning }
    ];

    sections.forEach(section => {
        ctx.font = 'bold 12px Arial';
        ctx.fillText(section.title, 70, yOffset);
        yOffset += 20;

        ctx.font = '11px Arial';
        section.prompts.slice(0, 3).forEach(prompt => {
            const lines = this.wrapText(ctx, `• ${prompt}`, this.width - 120);
            lines.forEach(line => {
                ctx.fillText(line, 90, yOffset);
                yOffset += 16;
            });
        });
        yOffset += 15;
    });

    return yOffset;
}

renderAssessmentSection(ctx, data, yOffset) {
    ctx.font = '12px Arial';
    ctx.fillStyle = this.colors.cellText;

    ctx.font = 'bold 12px Arial';
    ctx.fillText('Knowledge Levels:', 70, yOffset);
    yOffset += 20;

    const levels = ['remember', 'understand', 'apply'];
    levels.forEach(level => {
        if (data.knowledgeLevels[level]) {
            ctx.font = '11px Arial';
            ctx.fillText(`• ${level.charAt(0).toUpperCase() + level.slice(1)}: ${data.knowledgeLevels[level].description}`, 90, yOffset);
            yOffset += 16;
        }
    });

    return yOffset + 10;
}

renderGenericSection(ctx, data, yOffset) {
    ctx.font = '11px Arial';
    ctx.fillStyle = this.colors.cellText;

    const dataStr = JSON.stringify(data, null, 2);
    const lines = this.wrapText(ctx, dataStr, this.width - 120);
    lines.slice(0, 10).forEach(line => {
        ctx.fillText(line, 70, yOffset);
        yOffset += 15;
    });

    return yOffset + 10;
}

// Helper method for text wrapping
wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
        const testLine = currentLine + word + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && currentLine !== '') {
            lines.push(currentLine.trim());
            currentLine = word + ' ';
        } else {
            currentLine = testLine;
        }
    }
    if (currentLine) {
        lines.push(currentLine.trim());
    }
    return lines;
}

// Helper to simplify complex values for display
simplifyValue(value) {
    if (typeof value === 'string') {
        return value.length > 100 ? value.slice(0, 100) + '...' : value;
    }
    if (Array.isArray(value)) {
        return `[${value.length} items]`;
    }
    if (typeof value === 'object' && value !== null) {
        return `{${Object.keys(value).length} properties}`;
    }
    return String(value);
}

// Export workbook as PNG
async exportWorkbookAsPNG(filename) {
    const canvas = await this.renderWorkbookToCanvas();
    const buffer = canvas.toBuffer('image/png');
    
    const fs = await import('fs');
    fs.writeFileSync(filename, buffer);
    
    return { success: true, filename, size: buffer.length };
}

// Get workbook as JSON
getWorkbookAsJSON() {
    return this.currentWorkbook;
}

}

// Export the class
export default EnhancedImmuneSystemWorkbook;
