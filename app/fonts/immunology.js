// Enhanced Health Disease Immunology Workbook - Comprehensive Biological Content System
import * as math from 'mathjs';

export class EnhancedHealthDiseaseImmunologyWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "medical";
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
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'detailed', 'scaffolded'
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        this.medicalSymbols = this.initializeMedicalSymbols();
        this.setThemeColors();
        this.initializeHealthTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializeHealthLessons();
    }

    setThemeColors() {
        const themes = {
            medical: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
                headerBg: '#d32f2f',
                headerText: '#ffffff',
                sectionBg: '#ffcdd2',
                sectionText: '#b71c1c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e8f5e9',
                resultText: '#2e7d32',
                definitionBg: '#fff9c4',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#e57373',
                contentBg: '#e3f2fd',
                contentText: '#0d47a1',
                diagramBg: '#f3e5f5',
                structureBg: '#fce4ec'
            },
            clinical: {
                background: '#f8f9fa',
                gridColor: '#4682b4',
                headerBg: '#0288d1',
                headerText: '#ffffff',
                sectionBg: '#b3e5fc',
                sectionText: '#01579b',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e1f5fe',
                resultText: '#01579b',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#e8eaf6',
                stepText: '#311b92',
                borderColor: '#4fc3f7',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#fff9c4'
            }
        };

        this.colors = themes[this.theme] || themes.medical;
    }

    initializeMedicalSymbols() {
        return {
            // Common medical symbols
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
            // Medical notation
            'antibody': 'Ab',
            'antigen': 'Ag',
            'HIV': 'HIV',
            'AIDS': 'AIDS',
            'DNA': 'DNA',
            'RNA': 'RNA',
            'IgG': 'IgG',
            'IgM': 'IgM',
            'IgA': 'IgA',
            'IgE': 'IgE',
            'IgD': 'IgD',
            'MHC': 'MHC',
            'CD4': 'CD4⁺',
            'CD8': 'CD8⁺'
        };
    }

    initializeHealthTopics() {
        this.healthTopics = {
            // 1. Immune System
            immune_system: {
                patterns: [
                    /immune.*system/i,
                    /immunity/i,
                    /lymphatic.*system/i,
                    /defense.*mechanism/i
                ],
                handler: this.handleImmuneSystem.bind(this),
                name: 'Immune System',
                category: 'immunology',
                description: 'Body\'s defense system against pathogens and disease'
            },

            // 2. Pathogens
            pathogens: {
                patterns: [
                    /pathogen/i,
                    /bacteria.*virus.*fungi.*parasite/i,
                    /infectious.*agent/i,
                    /germ/i
                ],
                handler: this.handlePathogens.bind(this),
                name: 'Pathogens',
                category: 'microbiology',
                description: 'Disease-causing microorganisms and parasites'
            },

            // 3. Vaccines
            vaccines: {
                patterns: [
                    /vaccine|vaccination/i,
                    /immunization/i,
                    /vaccine.*type/i,
                    /herd.*immunity/i
                ],
                handler: this.handleVaccines.bind(this),
                name: 'Vaccines and Immunization',
                category: 'immunology',
                description: 'Biological preparations that provide immunity to diseases'
            },

            // 4. Antibodies
            antibodies: {
                patterns: [
                    /antibod/i,
                    /immunoglobulin/i,
                    /IgG|IgM|IgA|IgE/i,
                    /humoral.*immunity/i
                ],
                handler: this.handleAntibodies.bind(this),
                name: 'Antibodies',
                category: 'immunology',
                description: 'Proteins produced by immune system to neutralize pathogens'
            },

            // 5. Diseases
            diseases: {
                patterns: [
                    /disease/i,
                    /illness|infection/i,
                    /pathology/i,
                    /disorder/i
                ],
                handler: this.handleDiseases.bind(this),
                name: 'Diseases and Disorders',
                category: 'pathology',
                description: 'Medical conditions affecting body structure or function'
            },

            // 6. Immune Response
            immune_response: {
                patterns: [
                    /immune.*response/i,
                    /innate.*adaptive.*immunity/i,
                    /inflammatory.*response/i,
                    /immune.*reaction/i
                ],
                handler: this.handleImmuneResponse.bind(this),
                name: 'Immune Response',
                category: 'immunology',
                description: 'Body\'s reaction to foreign substances and pathogens'
            },

            // 7. White Blood Cells
            white_blood_cells: {
                patterns: [
                    /white.*blood.*cell|leukocyte/i,
                    /lymphocyte|neutrophil|macrophage/i,
                    /T.*cell|B.*cell/i,
                    /WBC/i
                ],
                handler: this.handleWhiteBloodCells.bind(this),
                name: 'White Blood Cells',
                category: 'immunology',
                description: 'Immune cells that protect against infection and disease'
            },

            // 8. Inflammation
            inflammation: {
                patterns: [
                    /inflammation|inflammatory/i,
                    /acute.*chronic.*inflammation/i,
                    /inflammatory.*response/i,
                    /cytokine/i
                ],
                handler: this.handleInflammation.bind(this),
                name: 'Inflammation',
                category: 'pathology',
                description: 'Body\'s protective response to injury or infection'
            },

            // 9. Autoimmune Disorders
            autoimmune_disorders: {
                patterns: [
                    /autoimmune/i,
                    /autoimmune.*disease|disorder/i,
                    /self.*antigen/i,
                    /lupus|rheumatoid.*arthritis|multiple.*sclerosis/i
                ],
                handler: this.handleAutoimmuneDiseases.bind(this),
                name: 'Autoimmune Disorders',
                category: 'immunology',
                description: 'Conditions where immune system attacks own body tissues'
            },

            // 10. Allergies
            allergies: {
                patterns: [
                    /allerg/i,
                    /hypersensitivity/i,
                    /allergic.*reaction/i,
                    /histamine/i
                ],
                handler: this.handleAllergies.bind(this),
                name: 'Allergies',
                category: 'immunology',
                description: 'Overreaction of immune system to harmless substances'
            },

            // 11. Infectious Diseases
            infectious_diseases: {
                patterns: [
                    /infectious.*disease/i,
                    /contagious/i,
                    /epidemic|pandemic/i,
                    /communicable.*disease/i
                ],
                handler: this.handleInfectiousDiseases.bind(this),
                name: 'Infectious Diseases',
                category: 'pathology',
                description: 'Diseases caused by pathogens that can spread'
            },

            // 12. Immunodeficiency
            immunodeficiency: {
                patterns: [
                    /immunodeficiency/i,
                    /immune.*deficiency/i,
                    /HIV|AIDS/i,
                    /compromised.*immune/i
                ],
                handler: this.handleImmunodeficiency.bind(this),
                name: 'Immunodeficiency',
                category: 'immunology',
                description: 'Weakened or absent immune system function'
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            immune_system: {
                'Innate vs Adaptive': [
                    'Thinking innate immunity has memory (only adaptive immunity does)',
                    'Believing adaptive immunity works immediately (it takes days)',
                    'Confusing antibodies with all immune responses (they\'re only part of adaptive)'
                ],
                'Immune Function': [
                    'Thinking immune system only fights bacteria (fights viruses, fungi, parasites too)',
                    'Believing fever is always bad (mild fever helps immune response)',
                    'Assuming all inflammation is harmful (acute inflammation is protective)'
                ]
            },
            vaccines: {
                'How Vaccines Work': [
                    'Thinking vaccines give you the disease (they train immune system safely)',
                    'Believing vaccines provide instant immunity (takes 1-2 weeks)',
                    'Assuming one vaccine dose is always enough (some need boosters)'
                ],
                'Vaccine Safety': [
                    'Thinking vaccines cause the diseases they prevent',
                    'Believing natural immunity is always better than vaccine immunity',
                    'Assuming vaccines weaken immune system (they strengthen it)'
                ]
            },
            antibodies: {
                'Antibody Function': [
                    'Thinking antibodies kill pathogens directly (they mark them for destruction)',
                    'Believing antibodies work against all pathogens (they\'re specific)',
                    'Confusing antibodies with antigens (antigens trigger antibody production)'
                ],
                'Antibody Types': [
                    'Thinking all antibodies are the same (5 classes with different functions)',
                    'Believing antibodies only exist in blood (found in many body fluids)',
                    'Assuming antibody levels stay constant (they decline over time)'
                ]
            },
            pathogens: {
                'Pathogen Types': [
                    'Thinking all bacteria are harmful (most are beneficial or harmless)',
                    'Believing antibiotics work on viruses (they only work on bacteria)',
                    'Confusing viruses with living organisms (viruses aren\'t alive)'
                ],
                'Disease Transmission': [
                    'Thinking all diseases are contagious (many aren\'t)',
                    'Believing cold weather causes colds (viruses cause colds)',
                    'Assuming you can\'t get the same infection twice (depends on pathogen)'
                ]
            },
            diseases: {
                'Disease Classification': [
                    'Confusing infectious with non-infectious diseases',
                    'Thinking all diseases have cures (many are managed, not cured)',
                    'Believing symptoms are the disease (they\'re body\'s response)'
                ],
                'Disease Prevention': [
                    'Thinking antibiotics prevent viral infections',
                    'Believing healthy people can\'t get sick',
                    'Assuming all diseases are preventable'
                ]
            },
            immune_response: {
                'Response Types': [
                    'Thinking immune response is always instant (can take days)',
                    'Believing stronger response is always better (can cause tissue damage)',
                    'Confusing primary and secondary responses (secondary is faster and stronger)'
                ],
                'Immune Memory': [
                    'Thinking innate immunity has memory',
                    'Believing immune memory lasts forever (can decline over time)',
                    'Assuming all exposures create immunity (depends on pathogen and response)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use side-by-side diagrams to highlight differences',
                effectiveness: 'High for comparing immune responses and pathogen types'
            },
            analogy: {
                method: 'Relate immunological concepts to familiar security/defense examples',
                effectiveness: 'High for abstract immune system concepts'
            },
            step_by_step: {
                method: 'Break down complex immune processes into sequential steps',
                effectiveness: 'High for understanding immune responses'
            },
            contrast_table: {
                method: 'Create comparison tables showing key differences',
                effectiveness: 'High for distinguishing similar concepts (innate vs adaptive)'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            structural: {
                focus: 'Physical organization and components of immune system',
                language: 'descriptive and anatomical'
            },
            functional: {
                focus: 'How immune responses work and protect body',
                language: 'process-oriented and mechanistic'
            },
            comparative: {
                focus: 'Similarities and differences between immune components',
                language: 'contrastive and analytical'
            },
            clinical: {
                focus: 'Disease manifestations and medical applications',
                language: 'medical and practical'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential information only',
                examples: 'concrete and familiar'
            },
            intermediate: {
                vocabulary: 'standard medical terms',
                detail: 'main concepts with explanations',
                examples: 'mix of familiar and technical'
            },
            detailed: {
                vocabulary: 'full medical/scientific terminology',
                detail: 'comprehensive with mechanisms',
                examples: 'clinical and research-based'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery approach',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    initializeHealthLessons() {
        this.lessons = {
            immune_system: {
                title: "The Immune System: Body's Defense Network",
                concepts: [
                    "Immune system protects against pathogens and disease",
                    "Innate immunity provides immediate, non-specific defense",
                    "Adaptive immunity develops specific, long-lasting protection",
                    "Lymphatic system is central to immune function"
                ],
                theory: "The immune system is a complex network of cells, tissues, and organs working together to defend the body against harmful invaders. It has two main branches: innate (immediate, general) and adaptive (delayed, specific) immunity.",
                keyDefinitions: {
                    "Immune System": "Body's defense network against pathogens and disease",
                    "Innate Immunity": "First line of defense; immediate, non-specific response",
                    "Adaptive Immunity": "Develops specific immunity; has memory for faster future responses",
                    "Lymphatic System": "Network of vessels and organs that transport immune cells",
                    "Pathogen": "Disease-causing microorganism or particle",
                    "Antigen": "Foreign substance that triggers immune response",
                    "Antibody": "Protein that binds to specific antigens"
                },
                mainCategories: [
                    "Physical barriers (skin, mucous membranes)",
                    "Innate immune cells (neutrophils, macrophages, NK cells)",
                    "Adaptive immune cells (T cells, B cells)",
                    "Lymphoid organs (thymus, spleen, lymph nodes, bone marrow)"
                ],
                applications: [
                    "Vaccine development and immunization programs",
                    "Treatment of immune disorders and cancers",
                    "Organ transplantation and tissue compatibility",
                    "Development of immunotherapies"
                ]
            },
            pathogens: {
                title: "Pathogens: Disease-Causing Agents",
                concepts: [
                    "Pathogens are microorganisms that cause disease",
                    "Four main types: bacteria, viruses, fungi, parasites",
                    "Each type has unique characteristics and treatment",
                    "Pathogens spread through various transmission routes"
                ],
                theory: "Pathogens are biological agents that cause disease in their hosts. Understanding pathogen types, transmission methods, and life cycles is essential for prevention, diagnosis, and treatment of infectious diseases.",
                keyDefinitions: {
                    "Pathogen": "Microorganism or infectious agent that causes disease",
                    "Bacteria": "Single-celled prokaryotic organisms; some cause disease",
                    "Virus": "Non-living infectious particle requiring host cell to replicate",
                    "Fungi": "Eukaryotic organisms including yeasts and molds",
                    "Parasite": "Organism living in/on host, causing harm",
                    "Toxin": "Poisonous substance produced by pathogens",
                    "Vector": "Organism that transmits pathogens (e.g., mosquitoes)",
                    "Reservoir": "Natural habitat where pathogen lives and multiplies"
                },
                mainCategories: [
                    "Bacterial pathogens (cause bacterial infections)",
                    "Viral pathogens (cause viral infections)",
                    "Fungal pathogens (cause mycoses)",
                    "Parasitic pathogens (cause parasitic diseases)"
                ],
                applications: [
                    "Antibiotic and antiviral drug development",
                    "Infectious disease prevention and control",
                    "Public health and epidemiology",
                    "Food safety and water sanitation"
                ]
            },

            vaccines: {
                title: "Vaccines: Training the Immune System",
                concepts: [
                    "Vaccines stimulate immunity without causing disease",
                    "Different vaccine types use various approaches",
                    "Vaccines require time to build immunity (1-2 weeks)",
                    "Herd immunity protects vulnerable populations"
                ],
                theory: "Vaccines work by exposing the immune system to harmless forms of pathogens or their components, triggering adaptive immunity and immunological memory. This prepares the body to respond quickly and effectively if exposed to the actual pathogen.",
                keyDefinitions: {
                    "Vaccine": "Biological preparation providing immunity to specific disease",
                    "Immunization": "Process of administering vaccine to develop immunity",
                    "Active Immunity": "Immunity from producing own antibodies (natural or vaccine)",
                    "Passive Immunity": "Immunity from receiving ready-made antibodies",
                    "Herd Immunity": "Community protection when many are immune",
                    "Booster": "Additional vaccine dose to maintain immunity",
                    "Adjuvant": "Substance added to vaccine to enhance immune response",
                    "Attenuated": "Weakened form of pathogen used in some vaccines"
                },
                mainCategories: [
                    "Live attenuated vaccines (weakened pathogen)",
                    "Inactivated vaccines (killed pathogen)",
                    "Subunit vaccines (pathogen pieces)",
                    "mRNA vaccines (genetic instructions)",
                    "Toxoid vaccines (inactivated toxins)"
                ],
                applications: [
                    "Prevention of infectious diseases",
                    "Eradication efforts (smallpox eradicated, polio nearly eliminated)",
                    "Protection of immunocompromised individuals",
                    "Pandemic preparedness and response"
                ]
            },

            antibodies: {
                title: "Antibodies: Precision Defense Molecules",
                concepts: [
                    "Antibodies are Y-shaped proteins that bind antigens",
                    "Five antibody classes (IgG, IgM, IgA, IgE, IgD) have different roles",
                    "B cells produce antibodies specific to each antigen",
                    "Antibodies neutralize, mark, and eliminate pathogens"
                ],
                theory: "Antibodies (immunoglobulins) are specialized proteins produced by B cells that recognize and bind to specific antigens. Each antibody has a unique binding site that matches one antigen, like a lock and key. This specificity is the basis of adaptive immunity.",
                keyDefinitions: {
                    "Antibody (Immunoglobulin)": "Y-shaped protein that binds specific antigens",
                    "Antigen": "Foreign molecule that antibody recognizes and binds",
                    "Epitope": "Specific part of antigen that antibody binds to",
                    "Fab Region": "Antigen-binding arms of antibody (variable)",
                    "Fc Region": "Constant stem of antibody (determines class)",
                    "Monoclonal Antibody": "Antibodies from single B cell clone (identical)",
                    "Polyclonal Antibodies": "Mix of antibodies from different B cells",
                    "Neutralization": "Antibody blocks pathogen's ability to infect cells"
                },
                mainCategories: [
                    "IgG: Most abundant; crosses placenta; long-term immunity",
                    "IgM: First produced in infection; activates complement",
                    "IgA: Found in secretions (saliva, tears, breast milk)",
                    "IgE: Involved in allergic reactions and parasitic defense",
                    "IgD: Found on B cell surface; role in activation"
                ],
                applications: [
                    "Diagnostic tests (antibody detection)",
                    "Passive immunization (antibody therapy)",
                    "Monoclonal antibody treatments (cancer, autoimmune)",
                    "Research tools (immunohistochemistry, ELISA)"
                ]
            },

            diseases: {
                title: "Diseases: Understanding Pathology",
                concepts: [
                    "Diseases alter normal body structure or function",
                    "Classified as infectious or non-infectious",
                    "Diseases have characteristic signs and symptoms",
                    "Understanding etiology aids diagnosis and treatment"
                ],
                theory: "Disease is a deviation from normal health status. Diseases can result from infections, genetic factors, environmental exposures, or combinations thereof. Understanding disease mechanisms (pathophysiology) is essential for effective prevention and treatment.",
                keyDefinitions: {
                    "Disease": "Condition impairing normal body function",
                    "Infectious Disease": "Caused by pathogens; can spread",
                    "Non-infectious Disease": "Not caused by pathogens; usually not contagious",
                    "Acute Disease": "Rapid onset, short duration",
                    "Chronic Disease": "Slow onset, long duration",
                    "Sign": "Objective evidence of disease (measurable)",
                    "Symptom": "Subjective experience reported by patient",
                    "Etiology": "Cause or origin of disease",
                    "Pathogenesis": "Development and progression of disease",
                    "Prognosis": "Expected outcome of disease"
                },
                mainCategories: [
                    "Infectious diseases (caused by pathogens)",
                    "Genetic diseases (inherited mutations)",
                    "Autoimmune diseases (immune attacks self)",
                    "Degenerative diseases (progressive deterioration)",
                    "Metabolic diseases (enzyme/hormone problems)"
                ],
                applications: [
                    "Disease diagnosis and screening",
                    "Treatment development and selection",
                    "Public health interventions",
                    "Epidemiology and disease surveillance"
                ]
            },

            immune_response: {
                title: "Immune Response: Coordinated Defense",
                concepts: [
                    "Immune response has multiple stages and components",
                    "Primary response is slower; secondary response is faster",
                    "Innate response occurs within minutes to hours",
                    "Adaptive response takes days but provides lasting immunity"
                ],
                theory: "The immune response is the body's coordinated reaction to foreign substances. It involves recognition of pathogens, activation of immune cells, elimination of threats, and development of immunological memory. The response is regulated to balance pathogen elimination with prevention of self-damage.",
                keyDefinitions: {
                    "Immune Response": "Body's coordinated reaction to pathogens or foreign substances",
                    "Primary Response": "First encounter with antigen; slower, weaker",
                    "Secondary Response": "Subsequent encounters; faster, stronger due to memory",
                    "Clonal Selection": "Antigen selects specific lymphocytes to proliferate",
                    "Clonal Expansion": "Rapid multiplication of selected lymphocytes",
                    "Memory Cells": "Long-lived cells enabling faster secondary response",
                    "Effector Cells": "Active immune cells that eliminate pathogens",
                    "Immunological Memory": "Ability to remember and respond faster to previous antigens"
                },
                mainCategories: [
                    "Recognition: detection of pathogens via pattern recognition",
                    "Activation: immune cells become active and proliferate",
                    "Effector phase: elimination of pathogens",
                    "Resolution: inflammation subsides, tissue repairs",
                    "Memory: long-lived cells provide future protection"
                ],
                applications: [
                    "Vaccine design (exploit memory response)",
                    "Immunotherapy for cancer",
                    "Management of transplant rejection",
                    "Treatment of chronic infections"
                ]
            },

            white_blood_cells: {
                title: "White Blood Cells: Immune Warriors",
                concepts: [
                    "WBCs are diverse immune cells with specialized functions",
                    "Leukocytes include lymphocytes, granulocytes, monocytes",
                    "T cells and B cells are key adaptive immune cells",
                    "Different WBCs work together in coordinated response"
                ],
                theory: "White blood cells (leukocytes) are cellular components of the immune system. They circulate in blood and lymph, surveilling for pathogens and coordinating immune responses. Different WBC types have specialized roles in innate and adaptive immunity.",
                keyDefinitions: {
                    "Leukocyte (WBC)": "White blood cell; immune system cell",
                    "Lymphocyte": "Type of WBC; includes T cells, B cells, NK cells",
                    "T Cell": "Lymphocyte that matures in thymus; cell-mediated immunity",
                    "B Cell": "Lymphocyte that produces antibodies; humoral immunity",
                    "Natural Killer Cell": "Lymphocyte that kills infected/abnormal cells",
                    "Neutrophil": "Most abundant WBC; phagocytes bacteria",
                    "Macrophage": "Large phagocyte; presents antigens to T cells",
                    "Dendritic Cell": "Antigen-presenting cell that activates T cells",
                    "Eosinophil": "WBC that fights parasites and involved in allergies",
                    "Basophil": "WBC that releases histamine in inflammation"
                },
                mainCategories: [
                    "Lymphocytes (T cells, B cells, NK cells)",
                    "Monocytes/Macrophages (phagocytes, antigen presenters)",
                    "Granulocytes (neutrophils, eosinophils, basophils)"
                ],
                applications: [
                    "Complete blood count (CBC) diagnostics",
                    "Leukemia and lymphoma diagnosis/treatment",
                    "Immunotherapy (CAR-T cell therapy)",
                    "Bone marrow transplantation"
                ]
            },

            inflammation: {
                title: "Inflammation: Protective Response Gone Awry",
                concepts: [
                    "Inflammation is body's response to injury or infection",
                    "Acute inflammation is protective and short-term",
                    "Chronic inflammation can cause tissue damage",
                    "Classic signs: redness, heat, swelling, pain, loss of function"
                ],
                theory: "Inflammation is a complex biological response to harmful stimuli. It involves vascular changes, immune cell recruitment, and release of chemical mediators. While acute inflammation is beneficial, chronic inflammation contributes to many diseases.",
                keyDefinitions: {
                    "Inflammation": "Body's protective response to injury, infection, or irritation",
                    "Acute Inflammation": "Rapid onset, short duration; usually beneficial",
                    "Chronic Inflammation": "Prolonged, can cause tissue damage",
                    "Inflammatory Mediators": "Chemicals that regulate inflammation (histamine, cytokines)",
                    "Cytokine": "Signaling protein that regulates immune response",
                    "Chemokine": "Cytokine that attracts immune cells to site",
                    "Prostaglandin": "Lipid mediator of inflammation and pain",
                    "Complement": "Protein system that enhances immune response"
                },
                mainCategories: [
                    "Vascular changes (vasodilation, increased permeability)",
                    "Cellular events (immune cell migration and activation)",
                    "Chemical mediators (cytokines, histamine, prostaglandins)",
                    "Resolution (healing and tissue repair)"
                ],
                applications: [
                    "Anti-inflammatory drug development",
                    "Management of autoimmune diseases",
                    "Understanding cardiovascular disease",
                    "Cancer research (inflammation-cancer link)"
                ]
            },

            autoimmune_disorders: {
                title: "Autoimmune Disorders: When Immunity Turns Inward",
                concepts: [
                    "Autoimmune disorders occur when immune system attacks self",
                    "Result from loss of self-tolerance",
                    "Can be organ-specific or systemic",
                    "Many have genetic and environmental factors"
                ],
                theory: "Autoimmune disorders arise when the immune system fails to distinguish self from non-self, leading to attacks on the body's own tissues. This breakdown in self-tolerance can result from genetic susceptibility, environmental triggers, or both.",
                keyDefinitions: {
                    "Autoimmune Disorder": "Condition where immune system attacks own tissues",
                    "Self-Tolerance": "Immune system's ability to not attack self-antigens",
                    "Autoantibody": "Antibody targeting self-antigens",
                    /**"Autoreactive Cell": "Immune cell that reacts against self-antigens",*/
                    "Molecular Mimicry": "Pathogen antigens resemble self-antigens",
                    "Organ-Specific": "Autoimmune attack on specific organ",
                    "Systemic": "Autoimmune attack affects multiple organs/tissues"
                },
                mainCategories: [
                    "Organ-specific (Type 1 diabetes, Hashimoto's thyroiditis, Graves' disease)",
                    "Systemic (Lupus, rheumatoid arthritis, multiple sclerosis)",
                    "Causes: genetic predisposition, environmental triggers, infections",
                    "Treatment: immunosuppression, symptom management"
                ],
                applications: [
                    "Autoantibody testing for diagnosis",
                    "Immunosuppressive therapies",
                    "Biologic drugs targeting specific immune pathways",
                    "Understanding immune tolerance mechanisms"
                ]
            },

            allergies: {
                title: "Allergies: Hypersensitivity Reactions",
                concepts: [
                    "Allergies are overreactions to harmless substances",
                    "IgE antibodies trigger allergic responses",
                    "Type I hypersensitivity is most common allergy type",
                    "Allergies can range from mild to life-threatening"
                ],
                theory: "Allergic reactions occur when the immune system responds excessively to normally harmless substances (allergens). The process involves sensitization (first exposure creating IgE) and subsequent reactions upon re-exposure, leading to histamine release and symptoms.",
                keyDefinitions: {
                    "Allergy": "Immune system overreaction to harmless substance",
                    "Allergen": "Substance that triggers allergic reaction",
                    "Sensitization": "Initial exposure creating allergen-specific IgE",
                    "Histamine": "Chemical released by mast cells causing allergy symptoms",
                    "Mast Cell": "Immune cell that releases histamine",
                    "Anaphylaxis": "Severe, life-threatening allergic reaction",
                    "Atopy": "Genetic tendency to develop allergies",
                    "Cross-Reactivity": "Allergens with similar structures trigger same response"
                },
                mainCategories: [
                    "Type I (immediate): IgE-mediated (most common allergies)",
                    "Type II (cytotoxic): antibody-mediated cell destruction",
                    "Type III (immune complex): antigen-antibody complexes",
                    "Type IV (delayed): T cell-mediated (contact dermatitis)"
                ],
                applications: [
                    "Allergy testing (skin prick, blood tests)",
                    "Antihistamine and epinephrine treatments",
                    "Immunotherapy (desensitization)",
                    "Prevention strategies and avoidance"
                ]
            },

            infectious_diseases: {
                title: "Infectious Diseases: Contagious Threats",
                concepts: [
                    "Infectious diseases are caused by pathogens",
                    "Can spread person-to-person or through vectors",
                    "Have characteristic incubation periods and courses",
                    "Prevention includes hygiene, vaccines, and public health measures"
                ],
                theory: "Infectious diseases result from pathogen invasion, multiplication, and damage to host tissues. Understanding transmission routes, pathogenesis, and host-pathogen interactions is essential for prevention, control, and treatment.",
                keyDefinitions: {
                    "Infectious Disease": "Disease caused by pathogen that can spread",
                    "Contagious": "Easily spread from person to person",
                    "Incubation Period": "Time from infection to symptom onset",
                    "Communicable": "Can be transmitted between hosts",
                    "Endemic": "Disease regularly found in population/area",
                    "Epidemic": "Outbreak larger than expected in area",
                    "Pandemic": "Epidemic spread across countries/continents",
                    "Zoonotic": "Disease transmitted from animals to humans",
                    "Nosocomial": "Hospital-acquired infection"
                },
                mainCategories: [
                    "Bacterial infections (tuberculosis, strep throat, UTIs)",
                    "Viral infections (influenza, COVID-19, HIV, measles)",
                    "Fungal infections (candidiasis, ringworm)",
                    "Parasitic infections (malaria, giardiasis, tapeworms)"
                ],
                applications: [
                    "Epidemiological surveillance and tracking",
                    "Antimicrobial therapy (antibiotics, antivirals)",
                    "Public health interventions (quarantine, contact tracing)",
                    "Infection control in healthcare settings"
                ]
            },

            immunodeficiency: {
                title: "Immunodeficiency: Weakened Defense Systems",
                concepts: [
                    "Immunodeficiency is impaired immune function",
                    "Can be primary (genetic) or secondary (acquired)",
                    "Increases susceptibility to infections",
                    "HIV/AIDS is most well-known acquired immunodeficiency"
                ],
                theory: "Immunodeficiency disorders result from defects in immune system components, leaving individuals vulnerable to infections, cancers, and autoimmune complications. Understanding the specific immune defect guides treatment and prevention strategies.",
                keyDefinitions: {
                    "Immunodeficiency": "Impaired or absent immune system function",
                    "Primary Immunodeficiency": "Genetic/congenital immune defects",
                    "Secondary Immunodeficiency": "Acquired immune impairment",
                    "Opportunistic Infection": "Infection occurring in immunocompromised host",
                    "HIV": "Human Immunodeficiency Virus; attacks CD4+ T cells",
                    "AIDS": "Acquired Immunodeficiency Syndrome; advanced HIV",
                    "CD4+ T Cell": "Helper T cell destroyed by HIV",
                    "Immunocompromised": "Having weakened immune system"
                },
                mainCategories: [
                    "Primary: SCID, X-linked agammaglobulinemia, DiGeorge syndrome",
                    "Secondary: HIV/AIDS, malnutrition, immunosuppressive drugs, cancer",
                    "Causes: genetic mutations, infections, medications, age",
                    "Management: infection prevention, prophylactic antibiotics, immunoglobulin therapy"
                ],
                applications: [
                    "HIV testing and antiretroviral therapy",
                    "Bone marrow/stem cell transplantation",
                    "Immunoglobulin replacement therapy",
                    "Gene therapy for genetic immunodeficiencies"
                ]
            }
        };
    }

    // MAIN HANDLER METHOD
    handleHealthProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            // Parse the health/immunology query
            this.currentProblem = this.parseHealthProblem(topic, parameters, subTopic, context);

            // Get content based on topic
            this.currentContent = this.getHealthContent(this.currentProblem);

            // Generate content steps/sections
            this.contentSteps = this.generateHealthContent(this.currentProblem, this.currentContent);

            // Generate diagram data if applicable
            this.generateHealthDiagramData();

            // Generate workbook
            this.generateHealthWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process health/immunology topic: ${error.message}`);
        }
    }

    parseHealthProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.healthTopics)) {
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
            throw new Error(`Unable to recognize health/immunology topic: ${topic}`);
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

    
    // MAIN HANDLER METHOD
    handleHealthProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            // Parse the health/immunology query
            this.currentProblem = this.parseHealthProblem(topic, parameters, subTopic, context);

            // Get content based on topic
            this.currentContent = this.getHealthContent(this.currentProblem);

            // Generate content steps/sections
            this.contentSteps = this.generateHealthContent(this.currentProblem, this.currentContent);

            // Generate diagram data if applicable
            this.generateHealthDiagramData();

            // Generate workbook
            this.generateHealthWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process health/immunology topic: ${error.message}`);
        }
    }

    parseHealthProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.healthTopics)) {
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
            throw new Error(`Unable to recognize health/immunology topic: ${topic}`);
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

    getHealthContent(problem) {
        const handler = this.healthTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for health/immunology topic: ${problem.type}`);
        }

        return handler(problem);
    }

    // TOPIC HANDLERS - Each returns structured health/immunology content

   /** handleImmuneSystem(problem) {
        const { subTopic, parameters } = problem;

        const immuneSystemContent = {
            overview: {
                description: "The immune system is a complex network of cells, tissues, and organs that work together to defend the body against harmful pathogens, including bacteria, viruses, fungi, and parasites.",
                purpose: "Recognize and eliminate foreign invaders while tolerating self-tissues",
                components: ["Cells", "Tissues", "Organs", "Chemical mediators"]
            },
            branches: [
                {
                    name: "Innate Immunity",
                    description: "First line of defense; immediate, non-specific response",
                    characteristics: [
                        "Present from birth",
                        "Responds within minutes to hours",
                        "No immunological memory",
                        "Same response regardless of pathogen"
                    ],
                    components: {
                        physicalBarriers: [
                            "Skin: physical barrier preventing pathogen entry",
                            "Mucous membranes: trap pathogens in sticky mucus",
                            "Cilia: sweep away trapped pathogens",
                            "Stomach acid: destroys ingested pathogens"
                        ],
                        cellularDefenses: [
                            "Neutrophils: most abundant WBC; phagocytose bacteria",
                            "Macrophages: large phagocytes; antigen presentation",
                            "Natural Killer (NK) cells: kill infected/cancerous cells",
                            "Dendritic cells: link innate and adaptive immunity",
                            "Mast cells: release histamine in inflammation"
                        ],
                        chemicalDefenses: [
                            "Complement system: protein cascade that destroys pathogens",
                            "Interferons: antiviral proteins",
                            "Inflammatory mediators: histamine, cytokines",
                            "Antimicrobial peptides: defensins, lysozyme"
                        ]
                    },
                    mechanisms: [
                        "Phagocytosis: engulfing and destroying pathogens",
                        "Inflammation: recruitment of immune cells to infection site",
                        "Fever: elevated temperature inhibits pathogen growth",
                        "Pattern recognition: detect conserved pathogen molecules"
                    ]
                },
                {
                    name: "Adaptive Immunity",
                    description: "Second line of defense; develops specific, long-lasting protection",
                    characteristics: [
                        "Develops after first exposure",
                        "Responds in days to weeks",
                        "Has immunological memory",
                        "Highly specific to each pathogen"
                    ],
                    components: {
                        cellMediated: {
                            description: "T cell-mediated immunity; attacks infected cells",
                            cells: [
                                "Helper T cells (CD4+): coordinate immune response, activate B cells and cytotoxic T cells",
                                "Cytotoxic T cells (CD8+): kill infected/cancerous cells",
                                "Regulatory T cells: suppress immune response to prevent autoimmunity",
                                "Memory T cells: provide long-term immunity"
                            ],
                            functions: [
                                "Recognize antigens presented by MHC molecules",
                                "Kill virus-infected cells",
                                "Activate other immune cells",
                                "Regulate immune response"
                            ]
                        },
                        humoralImmunity: {
                            description: "B cell-mediated immunity; produces antibodies",
                            cells: [
                                "B cells: produce antibodies specific to antigens",
                                "Plasma cells: activated B cells that secrete large amounts of antibodies",
                                "Memory B cells: provide rapid response on re-exposure"
                            ],
                            functions: [
                                "Produce antibodies that neutralize pathogens",
                                "Antibody-mediated pathogen elimination",
                                "Long-term antibody protection",
                                "Rapid secondary response"
                            ]
                        }
                    },
                    mechanisms: [
                        "Clonal selection: antigen selects specific lymphocytes",
                        "Clonal expansion: selected cells multiply rapidly",
                        "Differentiation: into effector and memory cells",
                        "Antibody production: B cells make pathogen-specific antibodies"
                    ]
                }
            ],
            lymphoidOrgans: {
                primary: [
                    {
                        name: "Bone Marrow",
                        function: "Site of blood cell production; B cell maturation",
                        description: "All immune cells originate from hematopoietic stem cells in bone marrow"
                    },
                    {
                        name: "Thymus",
                        function: "T cell maturation and selection",
                        description: "T cells mature and learn self-tolerance in thymus; atrophies with age"
                    }
                ],
                secondary: [
                    {
                        name: "Lymph Nodes",
                        function: "Filter lymph; site of immune cell activation",
                        description: "Small bean-shaped structures throughout body; swell during infection",
                        location: "Neck, armpits, groin, abdomen"
                    },
                    {
                        name: "Spleen",
                        function: "Filters blood; removes old RBCs; immune response to blood-borne pathogens",
                        description: "Largest lymphoid organ; contains white and red pulp"
                    },
                    {
                        name: "MALT (Mucosa-Associated Lymphoid Tissue)",
                        function: "Protects mucosal surfaces",
                        examples: ["Tonsils", "Adenoids", "Peyer's patches (intestine)", "Appendix"],
                        description: "Immune tissues in mucous membranes of respiratory, GI, urogenital tracts"
                    }
                ]
            },
            immuneResponse: {
                recognition: "Pattern recognition receptors detect pathogen-associated molecular patterns",
                activation: "Immune cells activated by pathogen recognition and cytokine signals",
                elimination: "Pathogens destroyed by phagocytosis, antibodies, cytotoxic cells",
                memory: "Memory cells retain ability to respond rapidly to previously encountered pathogens"
            },
            comparison: {
                innateVsAdaptive: {
                    criteria: ["Speed", "Specificity", "Memory", "Diversity", "Response"],
                    innate: ["Minutes-hours", "Non-specific", "No memory", "Limited", "Same every time"],
                    adaptive: ["Days-weeks", "Highly specific", "Has memory", "Extremely diverse", "Faster/stronger on re-exposure"]
                }
            }
        };

        return {
            topic: "Immune System",
            ...immuneSystemContent,
            keyTakeaways: [
                "Two branches: innate (immediate, general) and adaptive (delayed, specific)",
                "Innate provides first response; adaptive develops specific immunity",
                "Adaptive immunity has memory for faster future responses",
                "Lymphoid organs are essential for immune cell development and function"
            ],
            category: 'immune_system'
        };
    }

    
    handlePathogens(problem) {
        const pathogensList = [
            {
                name: "Bacteria",
                classification: "Prokaryotic microorganisms",
                characteristics: [
                    "Single-celled organisms without nucleus",
                    "Can be beneficial, harmless, or pathogenic",
                    "Reproduce by binary fission",
                    "Varying shapes: cocci (spherical), bacilli (rod), spirilla (spiral)",
                    "Have cell wall (peptidoglycan)",
                    "Some have capsule, flagella, pili"
                ],
                diseaseExamples: [
                    "Streptococcus pyogenes: strep throat, scarlet fever",
                    "Staphylococcus aureus: skin infections, food poisoning",
                    "Escherichia coli: UTIs, food poisoning",
                    "Mycobacterium tuberculosis: tuberculosis",
                    "Salmonella: food poisoning, typhoid fever",
                    "Neisseria meningitidis: meningitis"
                ],
                transmission: ["Direct contact", "Airborne droplets", "Food/water", "Vectors (ticks, fleas)"],
                treatment: "Antibiotics (target bacterial structures/processes)",
                prevention: ["Hygiene", "Food safety", "Vaccines (some)", "Sanitation"],
                pathogenicMechanisms: [
                    "Toxin production (exotoxins, endotoxins)",
                    "Invasion of tissues",
                    "Evasion of immune response",
                    "Biofilm formation"
                ]
            },
            {
                name: "Viruses",
                classification: "Non-living infectious particles",
                characteristics: [
                    "Require host cell to replicate",
                    "Consist of genetic material (DNA or RNA) in protein coat",
                    "No cellular structure or metabolism",
                    "Extremely small (20-300 nanometers)",
                    "Cannot reproduce independently",
                    "Highly host-specific"
                ],
                structure: {
                    capsid: "Protein coat protecting genetic material",
                    envelope: "Lipid membrane (some viruses)",
                    spikes: "Proteins for host cell attachment",
                    genome: "DNA or RNA (single or double-stranded)"
                },
                diseaseExamples: [
                    "Influenza virus: flu",
                    "SARS-CoV-2: COVID-19",
                    "HIV: AIDS",
                    "Hepatitis viruses: liver inflammation",
                    "Measles virus: measles",
                    "Varicella-zoster: chickenpox, shingles",
                    "HPV: warts, cervical cancer",
                    "Rhinovirus: common cold"
                ],
                transmission: ["Airborne droplets", "Direct contact", "Blood/bodily fluids", "Vectors", "Contaminated surfaces"],
                treatment: "Antivirals (limited); mainly supportive care",
                prevention: ["Vaccines", "Hygiene", "Avoiding exposure", "Antiviral prophylaxis"],
                replicationCycle: [
                    "Attachment: virus binds to host cell receptors",
                    "Entry: virus enters cell",
                    "Uncoating: viral genetic material released",
                    "Replication: viral genome copied, proteins made",
                    "Assembly: new viral particles assembled",
                    "Release: new viruses exit to infect more cells"
                ]
            },
            {
                name: "Fungi",
                classification: "Eukaryotic organisms",
                characteristics: [
                    "Can be unicellular (yeasts) or multicellular (molds)",
                    "Have cell wall (chitin)",
                    "Reproduce by spores",
                    "Most are saprophytic (decomposers)",
                    "Some are opportunistic pathogens",
                    "Thrive in warm, moist environments"
                ],
                diseaseExamples: [
                    "Candida albicans: thrush, yeast infections",
                    "Aspergillus: aspergillosis (lung infection)",
                    "Cryptococcus: meningitis (in immunocompromised)",
                    "Dermatophytes: ringworm, athlete's foot, nail infections",
                    "Histoplasma: histoplasmosis (lung infection)",
                    "Pneumocystis jirovecii: pneumonia (in AIDS patients)"
                ],
                transmission: ["Inhalation of spores", "Direct contact", "Contaminated surfaces"],
                treatment: "Antifungal medications (target cell membrane/wall)",
                prevention: ["Keeping skin dry", "Avoiding contaminated soil/bird droppings", "Prophylaxis in immunocompromised"],
                riskFactors: [
                    "Immunocompromised state",
                    "Diabetes",
                    "Antibiotic use (disrupts normal flora)",
                    "Moist environments",
                    "Inhalation of fungal spores"
                ]
            },
            {
                name: "Parasites",
                classification: "Organisms living in/on host",
                characteristics: [
                    "Live at expense of host",
                    "Can be unicellular (protozoa) or multicellular (helminths)",
                    "Complex life cycles (may require multiple hosts)",
                    "Often have vector stage",
                    "Cause chronic infections",
                    "More common in tropical regions"
                ],
                types: {
                    protozoa: {
                        description: "Single-celled eukaryotic parasites",
                        examples: [
                            "Plasmodium: malaria",
                            "Giardia lamblia: giardiasis (diarrhea)",
                            "Entamoeba histolytica: amebiasis (dysentery)",
                            "Toxoplasma gondii: toxoplasmosis",
                            "Trypanosoma: sleeping sickness"
                        ]
                    },
                    helminths: {
                        description: "Multicellular worms",
                        categories: {
                            nematodes: "Roundworms (Ascaris, hookworms, pinworms)",
                            cestodes: "Tapeworms (Taenia)",
                            trematodes: "Flukes (Schistosoma)"
                        }
                    },
                    ectoparasites: {
                        description: "Live on skin surface",
                        examples: ["Lice", "Mites (scabies)", "Ticks", "Fleas"]
                    }
                },
                transmission: ["Contaminated food/water", "Insect vectors", "Direct contact", "Undercooked meat"],
                treatment: "Antiparasitic drugs (specific to parasite type)",
                prevention: ["Safe food/water", "Insect control", "Hygiene", "Avoiding contaminated areas"]
            },
            {
                name: "Prions",
                classification: "Misfolded proteins",
                characteristics: [
                    "Not alive (no genetic material)",
                    "Infectious misfolded proteins",
                    "Cause other proteins to misfold",
                    "Extremely resistant to destruction",
                    "Long incubation period",
                    "Always fatal",
                    "No effective treatment"
                ],
                diseaseExamples: [
                    "Creutzfeldt-Jakob disease (CJD)",
                    "Variant CJD (mad cow disease in humans)",
                    "Kuru",
                    "Fatal familial insomnia"
                ],
                transmission: ["Contaminated tissue", "Inherited (rare)", "Consumption of infected tissue"],
                prevention: ["Avoiding contaminated tissue", "Proper sterilization (difficult)"]
            }
        ];

        const comparisonTable = {
            headers: ["Type", "Living?", "Size", "Reproduction", "Treatment", "Examples"],
            data: [
                ["Bacteria", "Yes", "1-10 μm", "Binary fission", "Antibiotics", "Strep, E. coli"],
                ["Viruses", "No", "20-300 nm", "Require host", "Antivirals (limited)", "Flu, HIV, COVID"],
                ["Fungi", "Yes", "2-10 μm (yeast)", "Spores, budding", "Antifungals", "Candida, ringworm"],
                ["Parasites", "Yes", "Varies", "Sexual/asexual", "Antiparasitics", "Malaria, tapeworms"],
                ["Prions", "No", "Proteins", "Induce misfolding", "None", "CJD, mad cow"]
            ]
        };

        return {
            topic: "Pathogens",
            pathogens: pathogensList,
            comparisonTable: comparisonTable,
            generalConcepts: {
                virulence: "Measure of pathogen's ability to cause disease",
                infectivity: "Ability to establish infection",
                pathogenicity: "Ability to cause disease",
                toxigenicity: "Ability to produce toxins",
                invasiveness: "Ability to invade tissues",
                transmissibility: "Ease of spread between hosts"
            },
            kochsPostulates: {
                description: "Criteria to establish causative agent of disease",
                postulates: [
                    "1. Microorganism must be found in diseased but not healthy individuals",
                    "2. Microorganism must be isolated and grown in pure culture",
                    "3. Cultured microorganism should cause disease when introduced to healthy host",
                    "4. Microorganism must be re-isolated from experimental host and shown to be identical"
                ],
                limitations: "Doesn't apply to all pathogens (obligate intracellular, opportunistic, multifactorial diseases)"
            },
            category: 'pathogens'
        };
    }
    
    handleVaccines(problem) {
        const vaccineTypes = [
            {
                name: "Live Attenuated Vaccines",
                description: "Use weakened (attenuated) form of pathogen that still replicates",
                mechanism: "Mimics natural infection; pathogen replicates but doesn't cause disease",
                advantages: [
                    "Strong, long-lasting immunity",
                    "Often only 1-2 doses needed",
                    "Stimulates both cellular and humoral immunity",
                    "May provide lifelong protection"
                ],
                disadvantages: [
                    "Risk of reversion to virulent form (rare)",
                    "Cannot be given to immunocompromised",
                    "Requires refrigeration (cold chain)",
                    "May cause mild symptoms"
                ],
                examples: [
                    "MMR (measles, mumps, rubella)",
                    "Varicella (chickenpox)",
                    "Yellow fever",
                    "Oral polio vaccine (OPV)",
                    "Rotavirus"
                ],
                contraindications: ["Pregnancy", "Immunodeficiency", "Some chronic illnesses"]
            },
            {
                name: "Inactivated (Killed) Vaccines",
                description: "Use killed pathogen that cannot replicate",
                mechanism: "Dead pathogen stimulates immune response without risk of infection",
                advantages: [
                    "Very safe (cannot cause disease)",
                    "Stable at room temperature",
                    "Can be given to immunocompromised",
                    "No risk of reversion"
                ],
                disadvantages: [
                    "Weaker immunity than live vaccines",
                    "Multiple doses/boosters needed",
                    "Mainly stimulates humoral immunity",
                    "May require adjuvants"
                ],
                examples: [
                    "Inactivated polio vaccine (IPV)",
                    "Hepatitis A",
                    "Rabies",
                    "Influenza (injectable)"
                ]
            },
            {
                name: "Subunit Vaccines",
                description: "Use specific pieces of pathogen (proteins, sugars)",
                mechanism: "Purified antigens stimulate targeted immune response",
                advantages: [
                    "Very safe (no live pathogen)",
                    "Fewer side effects",
                    "Can be given to immunocompromised",
                    "Targeted immune response"
                ],
                disadvantages: [
                    "May require boosters",
                    "Often need adjuvants",
                    "More expensive to produce",
                    "Complex manufacturing"
                ],
                types: {
                    protein: "Hepatitis B, HPV, pertussis (acellular)",
                    polysaccharide: "Pneumococcal, meningococcal",
                    conjugate: "Haemophilus influenzae type b (Hib)"
                },
                examples: [
                    "Hepatitis B (surface antigen)",
                    "HPV (virus-like particles)",
                    "Pertussis (acellular)",
                    "Pneumococcal conjugate",
                    "Meningococcal"
                ]
            },
            {
                name: "Toxoid Vaccines",
                description: "Use inactivated toxins produced by bacteria",
                mechanism: "Inactivated toxin stimulates antitoxin antibodies",
                characteristics: [
                    "Target diseases caused by bacterial toxins",
                    "Safe (toxin cannot cause harm)",
                    "Require boosters",
                    "Provide specific protection against toxins"
                ],
                examples: [
                    "Tetanus",
                    "Diphtheria"
                ],
                note: "Often combined (DTaP: diphtheria, tetanus, acellular pertussis)"
            },
            {
                name: "mRNA Vaccines",
                description: "Use messenger RNA to instruct cells to make pathogen protein",
                mechanism: "mRNA enters cells, ribosomes produce antigen, immune system responds",
                advantages: [
                    "Rapid development and production",
                    "No live pathogen",
                    "Strong immune response",
                    "Cannot integrate into genome"
                ],
                disadvantages: [
                    "Requires ultra-cold storage",
                    "New technology (long-term data emerging)",
                    "May cause temporary side effects"
                ],
                examples: [
                    "COVID-19 (Pfizer-BioNTech, Moderna)"
                ],
                howItWorks: [
                    "1. mRNA injected in lipid nanoparticle",
                    "2. Cells take up mRNA and translate into spike protein",
                    "3. Immune system recognizes spike protein as foreign",
                    "4. Antibodies and T cells generated",
                    "5. mRNA quickly degraded (doesn't persist)"
                ]
            },
            {
                name: "Viral Vector Vaccines",
                description: "Use harmless virus to deliver pathogen genes",
                mechanism: "Vector virus carries gene for pathogen antigen; cells produce antigen",
                advantages: [
                    "Strong immune response",
                    "Single dose may be sufficient",
                    "More stable than mRNA"
                ],
                disadvantages: [
                    "Pre-existing immunity to vector may reduce effectiveness",
                    "Cannot use same vector repeatedly"
                ],
                examples: [
                    "COVID-19 (Johnson & Johnson, AstraZeneca)",
                    "Ebola (rVSV-ZEBOV)"
                ]
            }
        ];

        const vaccineSchedule = {
            description: "Recommended immunization schedule varies by age and risk",
            infantsChildren: [
                "Birth: Hepatitis B (1st dose)",
                "2 months: DTaP, IPV, Hib, PCV, Rotavirus",
                "4 months: DTaP, IPV, Hib, PCV, Rotavirus",
                "6 months: DTaP, IPV, Hib, PCV, Hepatitis B, Influenza (annually)",
                "12-15 months: MMR, Varicella, Hib, PCV",
                "4-6 years: DTaP, IPV, MMR, Varicella (2nd doses)"
            ],
            adolescents: [
                "11-12 years: Tdap booster, HPV, Meningococcal conjugate",
                "16 years: Meningococcal booster"
            ],
            adults: [
                "Tdap or Td booster every 10 years",
                "Influenza annually",
                "Shingles (50+ years)",
                "Pneumococcal (65+ years)",
                "COVID-19 (as recommended)"
            ]
        };

        const howVaccinesWork = {
            process: ["1. Dendritic cells capture and process antigens",
                        "2. Migrate to lymph nodes and present to T cells via MHC",
                        "3. Naive T cells with matching receptors activated",
                        "4. Clonal expansion - rapid multiplication",
                        "5. Differentiation into effector and memory T cells",
                        "6. Effector T cells migrate to infection site",
                        "7. CD4+ coordinate response; CD8+ kill infected cells"
                    ]
                },
                humoralImmunity: {
                    description: "B cell-mediated; produces antibodies against extracellular pathogens",
                    cells: {
                        BCells: {
                            function: "Produce antibodies; present antigens",
                            activation: [
                                "B cell receptor (BCR) binds antigen",
                                "B cell processes and presents antigen via MHC II",
                                "Helper T cell recognizes presented antigen",
                                "T cell provides activation signals (cytokines, CD40L)",
                                "B cell activated"
                            ]
                        },
                        plasmaCells: {
                            function: "Antibody-secreting factories",
                            description: "Activated B cells differentiate into plasma cells",
                            output: "Secrete thousands of antibodies per second",
                            lifespan: "Short-lived (days to weeks)"
                        },
                        memoryBCells: {
                            function: "Long-lived cells providing immunological memory",
                            description: "Remain in body for years to decades",
                            reactivation: "Rapidly respond upon re-exposure to antigen"
                        }
                    },
                    process: [
                        "1. B cell BCR binds to antigen",
                        "2. B cell internalizes, processes, and presents antigen",
                        "3. Helper T cell recognizes and activates B cell",
                        "4. Clonal expansion - B cells multiply",
                        "5. Differentiation into plasma cells and memory B cells",
                        "6. Plasma cells secrete antibodies",
                        "7. Antibodies neutralize pathogens and mark for destruction"
                    ]
                }
            },
            clonalSelection: {
                description: "Theory explaining how adaptive immunity is specific",
                process: [
                    "Each lymphocyte has unique antigen receptor (random generation)",
                    "Antigen selects lymphocytes with matching receptors",
                    "Selected lymphocytes undergo clonal expansion",
                    "Produces army of identical cells specific to that antigen"
                ],
                diversity: "Random gene rearrangement creates millions of different receptors"
            }
        };

        const primaryVsSecondaryResponse = {
            primaryResponse: {
                description: "First encounter with antigen",
                timeline: {
                    lagPhase: "Few days; antigen recognition and lymphocyte activation",
                    exponentialPhase: "Days to weeks; clonal expansion and antibody production",
                    plateau: "Antibody levels peak",
                    decline: "Antibody levels decrease as plasma cells die"
                },
                antibodies: "IgM appears first (days 5-10), then IgG (week 2-3)",
                strength: "Lower antibody levels, slower response",
                duration: "Weeks to months"
            },
            secondaryResponse: {
                description: "Subsequent encounter with same antigen",
                timeline: {
                    lagPhase: "Shorter (1-2 days); memory cells activated",
                    exponentialPhase: "Rapid; memory cells quickly expand",
                    plateau: "Higher antibody levels",
                    decline: "More sustained antibody levels"
                },
                antibodies: "Predominantly IgG; higher affinity",
                strength: "Much stronger, faster response",
                duration: "Months to years (or lifetime)",
                basis: "Immunological memory - why vaccines work"
            },
            comparison: {
                criteria: ["Lag time", "Peak antibody", "Antibody type", "Duration", "Affinity"],
                primary: ["5-10 days", "Low", "IgM → IgG", "Short", "Lower"],
                secondary: ["1-3 days", "High", "Mostly IgG", "Long", "Higher"]
            }
        };

        const immunologicalMemory = {
            definition: "Ability of immune system to remember and respond faster to previously encountered antigens",
            mechanismCells: [
                "Memory T cells: long-lived, circulate in blood/lymph",
                "Memory B cells: long-lived, rapidly produce antibodies on re-exposure"
            ],
            characteristics: [
                "Can last years to lifetime",
                "Maintained by long-lived memory cells",
                "Requires periodic antigen exposure or self-renewal",
                "Stronger and faster than primary response"
            ],
            importance: [
                "Basis of vaccination",
                "Protection against reinfection",
                "Adaptive immunity improves with each exposure"
            ],
            types: {
                centralMemory: "Reside in lymphoid organs; require activation and migration",
                effectorMemory: "Circulate in tissues; immediate effector functions"
            }
        };

        const regulationOfImmuneResponse = {
            why: "Prevent excessive inflammation, autoimmunity, and tissue damage",
            mechanisms: [
                {
                    mechanism: "Regulatory T cells (Tregs)",
                    function: "Suppress immune responses",
                    how: "Release anti-inflammatory cytokines (IL-10, TGF-β); inhibit T cell activation"
                },
                {
                    mechanism: "Negative feedback",
                    function: "Limit response duration",
                    how: "Antibodies bind antigens, reducing stimulation; cytokines inhibit further production"
                },
                {
                    mechanism: "Apoptosis",
                    function: "Remove activated immune cells after infection cleared",
                    how: "Effector cells undergo programmed death; prevents prolonged inflammation"
                },
                {
                    mechanism: "Anti-inflammatory cytokines",
                    function: "Counteract pro-inflammatory signals",
                    examples: "IL-10, TGF-β"
                },
                {
                    mechanism: "Checkpoint molecules",
                    function: "Inhibit T cell activation",
                    examples: "CTLA-4, PD-1 (targeted by cancer immunotherapy)"
                }
            ],
            consequences: {
                tooMuch: "Immunosuppression, susceptibility to infections",
                tooLittle: "Autoimmunity, chronic inflammation, tissue damage"
            }
        };

        const coordinationOfResponse = {
            description: "Innate and adaptive immunity work together in coordinated response",
            timeline: [
                {
                    time: "0-4 hours",
                    events: "Physical barriers; resident macrophages phagocytose"
                },
                {
                    time: "4-96 hours",
                    events: "Neutrophil recruitment; inflammation; NK cells; complement"
                },
                {
                    time: "96+ hours",
                    events: "Dendritic cells activate T cells; adaptive response begins"
                },
                {
                    time: "1-2 weeks",
                    events: "T cell-mediated immunity; B cells produce antibodies"
                },
                {
                    time: "2+ weeks",
                    events: "Antibody levels peak; memory cells formed; pathogen eliminated"
                }
            ],
            integration: [
                "Dendritic cells bridge innate and adaptive immunity",
                "Cytokines from innate cells shape adaptive response",
                "Antibodies enhance innate mechanisms (opsonization, complement)",
                "T cells activate innate cells (macrophages, NK cells)"
            ]
        };

        return {
            topic: "Immune Response",
            innateResponse: innateResponse,
            adaptiveResponse: adaptiveResponse,
            primaryVsSecondaryResponse: primaryVsSecondaryResponse,
            immunologicalMemory: immunologicalMemory,
            regulation: regulationOfImmuneResponse,
            coordination: coordinationOfResponse,
            keyPrinciples: [
                "Layered defense: multiple mechanisms protect body",
                "Specificity increases from innate to adaptive",
                "Memory enables faster, stronger secondary responses",
                "Regulation prevents excessive inflammation and autoimmunity",
                "Coordination between innate and adaptive optimizes pathogen elimination"
            ],
            clinicalRelevance: {
                vaccines: "Exploit memory for protective immunity",
                immunodeficiency: "Impaired response increases infection risk",
                autoimmunity: "Loss of self-tolerance causes self-attack",
                hypersensitivity: "Excessive response causes allergies",
                immunotherapy: "Manipulate immune response to treat disease"
            },
            category: 'immune_response'
        };
    }
    */
    handleWhiteBloodCells(problem) {
        const wbcOverview = {
            definition: "Leukocytes; immune system cells that protect against infection and disease",
            production: "Produced in bone marrow from hematopoietic stem cells",
            lifespan: "Varies by type: hours to years",
            normalCount: "4,000-11,000 cells/μL blood",
            abnormalCounts: {
                leukocytosis: "Elevated WBC count (>11,000); indicates infection, inflammation, leukemia",
                leukopenia: "Low WBC count (<4,000); indicates immunosuppression, bone marrow failure"
            }
        };

        const wbcTypes = [
            {
                name: "Neutrophils",
                category: "Granulocyte",
                percentage: "55-70% of WBCs (most abundant)",
                appearance: "Multi-lobed nucleus; granules in cytoplasm",
                lifespan: "Hours to days",
                location: "Blood and tissues",
                functions: [
                    "First responders to bacterial infection",
                    "Phagocytose bacteria and fungi",
                    "Release antimicrobial compounds",
                    "Form NETs (neutrophil extracellular traps) to trap pathogens"
                ],
                mechanisms: {
                    phagocytosis: "Engulf and destroy bacteria",
                    degranulation: "Release toxic granules killing pathogens",
                    NETosis: "Release DNA nets trapping and killing pathogens"
                },
                clinical: {
                    neutrophilia: "Elevated neutrophils; bacterial infection, inflammation, stress",
                    neutropenia: "Low neutrophils; increased infection risk, chemotherapy side effect"
                }
            },
            {
                name: "Lymphocytes",
                category: "Agranulocyte",
                percentage: "20-40% of WBCs",
                appearance: "Large nucleus, little cytoplasm",
                lifespan: "Days to years (memory cells)",
                types: {
                    TCells: {
                        percentage: "70-80% of lymphocytes",
                        maturation: "Thymus",
                        types: [
                            "Helper T cells (CD4+): coordinate immune response",
                            "Cytotoxic T cells (CD8+): kill infected cells",
                            "Regulatory T cells: suppress immune response",
                            "Memory T cells: immunological memory"
                        ],
                        function: "Cell-mediated immunity; recognize MHC-presented antigens"
                    },
                    BCells: {
                        percentage: "10-20% of lymphocytes",
                        maturation: "Bone marrow",
                        function: "Produce antibodies (humoral immunity)",
                        types: [
                            "Plasma cells: antibody-secreting factories",
                            "Memory B cells: immunological memory"
                        ]
                    },
                    NKCells: {
                        percentage: "5-10% of lymphocytes",
                        function: "Kill virus-infected and cancer cells without prior sensitization",
                        mechanism: "Recognize cells lacking MHC I or expressing stress signals"
                    }
                },
                clinical: {
                    lymphocytosis: "Elevated lymphocytes; viral infection, chronic infections, leukemia",
                    lymphopenia: "Low lymphocytes; HIV, immunodeficiency, stress"
                }
            },
            {
                name: "Monocytes",
                category: "Agranulocyte",
                percentage: "2-8% of WBCs",
                appearance: "Large cells with kidney-shaped nucleus",
                lifespan: "Days in blood; months-years as macrophages",
                location: "Blood; migrate to tissues and differentiate",
                functions: [
                    "Circulate in blood; migrate to tissues",
                    "Differentiate into macrophages and dendritic cells",
                    "Phagocytose pathogens and debris",
                    "Present antigens to T cells"
                ],
                differentiation: {
                    macrophages: {
                        location: "Tissues throughout body",
                        names: "Kupffer cells (liver), alveolar macrophages (lungs), microglia (brain)",
                        functions: [
                            "Phagocytose pathogens, dead cells, debris",
                            "Antigen presentation to T cells",
                            "Secrete cytokines regulating inflammation",
                            "Tissue repair and remodeling"
                        ]
                    },
                    dendriticCells: {
                        location: "Tissues, especially those exposed to environment",
                        function: "Professional antigen-presenting cells; activate T cells",
                        importance: "Link innate and adaptive immunity"
                    }
                },
                clinical: {
                    monocytosis: "Elevated monocytes; chronic infections, autoimmune, recovery from infection"
                }
            },
            {
                name: "Eosinophils",
                category: "Granulocyte",
                percentage: "1-4% of WBCs",
                appearance: "Bi-lobed nucleus; red-orange granules",
                lifespan: "Hours to days",
                functions: [
                    "Combat parasitic infections (especially helminths)",
                    "Involved in allergic reactions",
                    "Modulate inflammation"
                ],
                mechanisms: [
                    "Release toxic granules onto parasite surface",
                    "Degranulate in allergic reactions (contribute to symptoms)",
                    "Secrete cytokines and inflammatory mediators"
                ],
                clinical: {
                    eosinophilia: "Elevated eosinophils; parasitic infection, allergies, asthma, drug reactions"
                }
            },
            {
                name: "Basophils",
                category: "Granulocyte",
                percentage: "<1% of WBCs (least abundant)",
                appearance: "Bi-lobed nucleus; dark purple granules",
                lifespan: "Days",
                functions: [
                    "Release histamine in allergic reactions and inflammation",
                    "Involved in immune response to parasites",
                    "Secrete heparin (anticoagulant)"
                ],
                mechanisms: [
                    "IgE binds to surface receptors",
                    "Cross-linking of IgE by allergen triggers degranulation",
                    "Release histamine, heparin, cytokines"
                ],
                related: {
                    mastCells: {
                        description: "Tissue-resident cells similar to basophils",
                        location: "Connective tissues, especially near blood vessels",
                        function: "Key players in allergic reactions; release histamine"
                    }
                },
                clinical: {
                    basophilia: "Elevated basophils (rare); allergies, chronic inflammation, myeloproliferative disorders"
                }
            }
        ];

        const wbcDifferential = {
            definition: "Percentage of each WBC type; part of complete blood count (CBC)",
            normalRanges: {
                neutrophils: "55-70%",
                lymphocytes: "20-40%",
                monocytes: "2-8%",
                eosinophils: "1-4%",
                basophils: "<1%"
            },
            clinicalUse: [
                "Diagnose infections (bacterial vs viral)",
                "Detect immune disorders",
                "Diagnose leukemia and lymphoma",
                "Monitor response to treatment"
            ],
            interpretations: {
                leftShift: "Increased immature neutrophils (bands); indicates severe bacterial infection",
                lymphocytosis: "Elevated lymphocytes; viral infection, chronic infections",
                eosinophilia: "Elevated eosinophils; parasites, allergies"
            }
        };

        const leukocyteFunction = {
            phagocytosis: {
                cells: "Neutrophils, monocytes/macrophages",
                process: [
                    "1. Chemotaxis: WBC migrates toward pathogen (follows chemical gradient)",
                    "2. Adhesion: WBC adheres to pathogen",
                    "3. Ingestion: Pathogen engulfed in phagosome",
                    "4. Digestion: Phagosome fuses with lysosome; enzymes destroy pathogen",
                    "5. Excretion: Debris expelled"
                ],
                enhancedBy: "Opsonization (antibodies or complement coat pathogen)"
            },
            antigenPresentation: {
                cells: "Dendritic cells, macrophages, B cells",
                process: [
                    "1. Pathogen engulfed and broken down",
                    "2. Antigens displayed on cell surface via MHC molecules",
                    "3. T cells recognize antigen-MHC complex",
                    "4. T cell activated to respond to that specific antigen"
                ],
                importance: "Links innate and adaptive immunity; initiates specific immune response"
            },
            cytokineSecretion: {
                cells: "All WBCs can secrete cytokines",
                function: "Cell signaling; regulate immune response",
                examples: {
                    proinflammatory: "IL-1, IL-6, TNF-α (promote inflammation)",
                    antiinflammatory: "IL-10, TGF-β (suppress inflammation)",
                    chemokines: "Attract other immune cells to site"
                }
            }
        };

        return {
            topic: "White Blood Cells (Leukocytes)",
            overview: wbcOverview,
            types: wbcTypes,
            differential: wbcDifferential,
            functions: leukocyteFunction,
            comparisonTable: {
                headers: ["Cell Type", "% of WBCs", "Nucleus", "Main Function", "Key Feature"],
                data: [
                    ["Neutrophil", "55-70%", "Multi-lobed", "Phagocytose bacteria", "First responders"],
                    ["Lymphocyte", "20-40%", "Large, round", "Adaptive immunity", "T, B, NK cells"],
                    ["Monocyte", "2-8%", "Kidney-shaped", "Become macrophages", "Largest WBC"],
                    ["Eosinophil", "1-4%", "Bi-lobed", "Fight parasites, allergies", "Red-orange granules"],
                    ["Basophil", "<1%", "Bi-lobed", "Release histamine", "Least abundant"]
                ]
            },
            clinicalApplications: {
                CBCWithDifferential: "Standard blood test assessing WBC count and types",
                diagnoses: "Infections, immune disorders, leukemia, anemia",
                monitoring: "Treatment response, disease progression, chemotherapy effects"
            },
            disorders: {
                leukemia: "Cancer of WBCs; uncontrolled proliferation",
                lymphoma: "Cancer of lymphatic system",
                immunodeficiency: "Insufficient or dysfunctional WBCs",
                autoimmune: "WBCs attack own tissues"
            },
            category: 'white_blood_cells'
        };
    }

    handleInflammation(problem) {
        const inflammationOverview = {
            definition: "Body's protective response to injury, infection, or irritation",
            purpose: [
                "Remove harmful stimuli (pathogens, damaged cells, irritants)",
                "Initiate healing process",
                "Recruit immune cells to site",
                "Isolate and contain damage"
            ],
            types: {
                acute: {
                    description: "Rapid onset, short duration (days to weeks)",
                    characteristics: "Localized, beneficial response",
                    outcome: "Usually resolves with healing",
                    examples: "Cut, infection, sprained ankle"
                },
                chronic: {
                    description: "Prolonged inflammation (months to years)",
                    characteristics: "Persistent, can cause tissue damage",
                    outcome: "May lead to disease and dysfunction",
                    examples: "Rheumatoid arthritis, inflammatory bowel disease, atherosclerosis"
                }
            }
        };

        const classicSigns = [
            {
                sign: "Rubor (Redness)",
                cause: "Vasodilation increases blood flow to area",
                mechanism: "Inflammatory mediators (histamine, prostaglandins) dilate blood vessels",
                purpose: "Bring immune cells and nutrients to site"
            },
            {
                sign: "Calor (Heat)",
                cause: "Increased blood flow and metabolic activity",
                mechanism: "Vasodilation brings warm blood; increased cellular metabolism",
                purpose: "Enhanced immune cell function; some pathogens inhibited by heat"
            },
            {
                sign: "Tumor (Swelling)",
                cause: "Fluid accumulation in tissues (edema)",
                mechanism: "Increased vascular permeability allows fluid and proteins to leak",
                purpose: "Dilutes toxins; brings antibodies and complement"
            },
            {
                sign: "Dolor (Pain)",
                cause: "Pressure on nerves and chemical mediators",
                mechanism: "Swelling compresses nerves; bradykinin and prostaglandins sensitize pain receptors",
                purpose: "Protective; encourages rest and prevents further injury"
            },
            {
                sign: "Functio Laesa (Loss of Function)",
                cause: "Pain and swelling limit movement",
                mechanism: "Combined effect of other signs",
                purpose: "Forces rest; promotes healing"
            }
        ];

        const inflammatoryProcess = {
            stages: [
                {
                    stage: "1. Initiation/Recognition",
                    events: [
                        "Tissue damage or pathogen invasion",
                        "Pattern recognition receptors detect danger signals (PAMPs, DAMPs)",
                        "Mast cells and resident macrophages activated"
                    ],
                    timing: "Immediate"
                },
                {
                    stage: "2. Vascular Changes",
                    events: [
                        "Vasodilation: blood vessels widen",
                        "Increased vascular permeability: gaps form between endothelial cells",
                        "Blood flow increases (hyperemia)",
                        "Plasma proteins and fluid leak into tissue (exudate forms)"
                    ],
                    timing: "Minutes",
                    mediators: "Histamine, prostaglandins, leukotrienes, nitric oxide"
                },
                {
                    stage: "3. Cellular Recruitment",
                    events: [
                        "Endothelial cells express adhesion molecules",
                        "Leukocytes roll along vessel wall (selectins)",
                        "Leukocytes adhere firmly (integrins)",
                        "Diapedesis: leukocytes squeeze through vessel wall",
                        "Chemotaxis: leukocytes migrate toward infection site"
                    ],
                    timing: "Hours",
                    sequence: "Neutrophils first (hours), then monocytes/macrophages (days)"
                },
                {
                    stage: "4. Effector Phase",
                    events: [
                        "Phagocytosis: immune cells engulf pathogens and debris",
                        "Release of antimicrobial compounds",
                        "Cytokine secretion amplifies response",
                        "Complement activation",
                        "Antibody production (if adaptive response activated)"
                    ],
                    timing: "Hours to days",
                    goal: "Eliminate pathogen and damaged tissue"
                },
                {
                    stage: "5. Resolution",
                    events: [
                        "Anti-inflammatory signals (IL-10, TGF-β)",
                        "Apoptosis of inflammatory cells",
                        "Clearance of debris by macrophages",
                        "Tissue repair and regeneration",
                        "Angiogenesis: new blood vessel formation",
                        "Fibrosis: scar tissue formation (if severe damage)"
                    ],
                    timing: "Days to weeks",
                    outcome: "Return to normal or healed state"
                }
            ]
        };

        const inflammatoryMediators = {
            cellDerived: {
                histamine: {
                    source: "Mast cells, basophils",
                    effects: "Vasodilation, increased permeability, itching",
                    timing: "Immediate (stored in granules)"
                },
                serotonin: {
                    source: "Platelets, mast cells",
                    effects: "Vasoconstriction, increased permeability",
                    timing: "Immediate"
                },
                prostaglandins: {
                    source: "Many cell types (from arachidonic acid)",
                    effects: "Vasodilation, increased permeability, fever, pain sensitization",
                    inhibitors: "NSAIDs (aspirin, ibuprofen) block synthesis",
                    timing: "Minutes to hours"
                },
                leukotrienes: {
                    source: "Leukocytes, mast cells (from arachidonic acid)",
                    effects: "Bronchoconstriction, increased permeability, chemotaxis",
                    role: "Important in asthma and allergies"
                },
                cytokines: {
                    source: "Many immune cells",
                    examples: {
                        IL1: "Fever, acute phase proteins",
                        IL6: "Fever, acute phase proteins",
                        TNFalpha: "Fever, endothelial activation, shock (if excessive)",
                        IL10: "Anti-inflammatory, resolution"
                    },
                    effects: "Regulate immune response; systemic effects"
                }
            },
            plasmaDerived: {
                complement: {
                    description: "Cascade of plasma proteins",
                    products: [
                        "C3a, C5a: anaphylatoxins (histamine release, chemotaxis)",
                        "C3b: opsonization",
                        "MAC (C5b-9): membrane attack complex (lysis)"
                    ],
                    effects: "Pathogen lysis, opsonization, inflammation"
                },
                kinins: {
                    example: "Bradykinin",
                    effects: "Vasodilation, increased permeability, pain",
                    generation: "From kininogen by kallikrein"
                },
                clotting: {
                    factors: "Fibrin, thrombin",
                    effects: "Blood clotting, wall off infection",
                    crosstalk: "Inflammation and coagulation interact"
                }
            }
        };

        const chronicInflammation = {
            causes: [
                "Persistent infections (TB, fungi)",
                "Prolonged exposure to irritants (smoking, silica)",
                "Autoimmune diseases (rheumatoid arthritis, lupus)",
                "Failed resolution of acute inflammation"
            ],
            characteristics: [
                "Infiltration of mononuclear cells (macrophages, lymphocytes)",
                "Tissue destruction",
                "Attempts at repair (angiogenesis, fibrosis)",
                "Granuloma formation (organized collections of macrophages)"
            ],
            consequences: [
                "Tissue damage and scarring",
                "Loss of function",
                "Increased disease risk"
            ],
            associatedDiseases: {
                cardiovascular: "Atherosclerosis, heart disease",
                metabolic: "Type 2 diabetes, metabolic syndrome",
                neurodegenerative: "Alzheimer's, Parkinson's",
                cancer: "Chronic inflammation increases cancer risk",
                autoimmune: "Rheumatoid arthritis, inflammatory bowel disease, psoriasis"
            }
        };

        const antiInflammatoryMechanisms = {
            endogenous: [
                "Anti-inflammatory cytokines (IL-10, TGF-β)",
                "Regulatory T cells suppress response",
                "Apoptosis of inflammatory cells",
                "Specialized pro-resolving mediators (lipoxins, resolvins)",
                "Glucocorticoids (cortisol)"
            ],
            therapeutic: {
                NSAIDs: {
                    examples: "Aspirin, ibuprofen, naproxen",
                    mechanism: "Inhibit COX enzymes; reduce prostaglandin synthesis",
                    effects: "Reduce pain, fever, inflammation"
                },
                corticosteroids: {
                    examples: "Prednisone, dexamethasone, hydrocortisone",
                    mechanism: "Suppress multiple inflammatory pathways; inhibit cytokine production",
                    effects: "Powerful anti-inflammatory; immunosuppressive",
                    sideEffects: "Increased infection risk, bone loss, metabolic changes (long-term use)"
                },
                biologics: {
                    examples: "Anti-TNF (infliximab, adalimumab), anti-IL-6 (tocilizumab)",
                    mechanism: "Target specific inflammatory mediators",
                    use: "Autoimmune diseases, severe inflammation"
                }
            }
        };

        return {
            topic: "Inflammation",
            overview: inflammationOverview,
            classicSigns: classicSigns,
            process: inflammatoryProcess,
            mediators: inflammatoryMediators,
            chronicInflammation: chronicInflammation,
            antiInflammatory: antiInflammatoryMechanisms,
            acuteVsChronic: {
                criteria: ["Duration", "Onset", "Cells", "Outcome", "Examples"],
                acute: ["Days-weeks", "Rapid", "Neutrophils", "Healing", "Infection, injury"],
                chronic: ["Months-years", "Gradual", "Macrophages, lymphocytes", "Tissue damage", "Autoimmune, persistent infection"]
            },
            clinicalRelevance: {
                fever: "Systemic inflammation; elevated body temperature aids immune function",
                sepsis: "Excessive systemic inflammation; life-threatening",
                antiInflammatoryDrugs: "Widely used to reduce pain and inflammation",
                biomarkers: "CRP, ESR measure systemic inflammation"
            },
            category: 'inflammation'
        };
    }

    handleAutoimmuneDiseases(problem) {
        const autoimmuneOverview = {
            definition: "Disorders where immune system attacks body's own tissues",
            prevalence: "Affects ~5-8% of population; more common in women",
            cause: "Loss of self-tolerance; immune system fails to distinguish self from non-self",
            triggers: {
                genetic: "Certain HLA types increase risk",
                environmental: "Infections, drugs, chemicals, UV exposure",
                hormonal: "Sex hormones (explains female predominance)",
                multifactorial: "Usually combination of genetic susceptibility + environmental trigger"
            }
        };

        const mechanismsOfAutoimmunity = [
            {
                mechanism: "Breakdown of Central Tolerance",
                description: "Failure to delete self-reactive lymphocytes during development",
                location: "Thymus (T cells), Bone marrow (B cells)",
                normalProcess: "Self-reactive cells eliminated or rendered inactive",
                failure: "Self-reactive cells escape to periphery"
            },
            {
                mechanism: "Breakdown of Peripheral Tolerance",
                description: "Failure of mechanisms that suppress self-reactive cells in body",
                mechanisms: [
                    "Regulatory T cell dysfunction",
                    "Lack of anergy (unresponsiveness) in self-reactive cells",
                    "Loss of immune privilege in certain tissues"
                ]
            },
            {
                mechanism: "Molecular Mimicry",
                description: "Pathogen antigens resemble self-antigens",
                example: "Streptococcal M protein resembles heart tissue (rheumatic fever)",
                result: "Antibodies/T cells targeting pathogen cross-react with self-tissues"
            },
            {
                mechanism: "Epitope Spreading",
                description: "Initial autoimmune response damages tissue, exposing new self-antigens",
                process: [
                    "Primary autoimmune attack damages tissue",
                    "Tissue destruction releases normally hidden antigens",
                    "Immune system responds to these newly exposed antigens",
                    "Autoimmune response broadens and intensifies"
                ]
            },
            {
                mechanism: "Bystander Activation",
                description: "Inflammation activates nearby self-reactive lymphocytes",
                process: "Local inflammation provides signals that activate dormant autoreactive cells"
            },
            {
                mechanism: "Polyclonal Activation",
                description: "Pathogens or substances activate many lymphocytes non-specifically",
                result: "Some activated cells happen to be self-reactive"
            }
        ];

        const commonAutoimmuneDiseases = [
            {
                name: "Type 1 Diabetes",
                target: "Pancreatic beta cells (insulin-producing cells)",
                mechanism: "T cell-mediated destruction of beta cells",
                result: "Inability to produce insulin; high blood glucose",
                symptoms: ["Excessive thirst/urination", "Fatigue", "Weight loss", "Blurred vision"],
                onset: "Usually childhood/adolescence (can occur at any age)",
                treatment: "Lifelong insulin replacement; blood glucose monitoring",
                complications: "Cardiovascular disease, kidney failure, blindness, neuropathy"
            },
            {
                name: "Rheumatoid Arthritis (RA)",
                target: "Synovial membrane (joint lining)",
                mechanism: "Antibodies and T cells attack joint tissues; chronic inflammation",
                autoantibodies: ["Rheumatoid factor (RF)", "Anti-CCP (anti-cyclic citrullinated peptide)"],
                symptoms: ["Joint pain, swelling, stiffness (especially morning)", "Symmetric joint involvement", "Fatigue", "Low-grade fever"],
                progression: "Progressive joint damage and deformity",
                treatment: "DMARDs (methotrexate), biologics (anti-TNF), NSAIDs, corticosteroids",
                extraArticular: "Can affect heart, lungs, eyes, blood vessels"
            },
            {
                name: "Systemic Lupus Erythematosus (SLE/Lupus)",
                type: "Systemic autoimmune disease",
                target: "Multiple organs and tissues (skin, joints, kidneys, heart, brain, blood cells)",
                mechanism: "Autoantibodies against nuclear components; immune complex deposition",
                autoantibodies: ["ANA (anti-nuclear antibody)", "Anti-dsDNA", "Anti-Smith"],
                symptoms: [
                    "Butterfly rash on face",
                    "Photosensitivity",
                    "Joint pain",
                    "Kidney inflammation (lupus nephritis)",
                    "Fatigue",
                    "Fever",
                    "Raynaud's phenomenon"
                ],
                diagnosis: "Clinical criteria + positive ANA and other antibodies",
                treatment: "Corticosteroids, immunosuppressants, antimalarials (hydroxychloroquine), biologics",
                prognosis: "Variable; can have flares and remissions"
            },
            {
                name: "Multiple Sclerosis (MS)",
                target: "Myelin sheath (insulation around nerve fibers in CNS)",
                mechanism: "T cells attack myelin; leads to demyelination and scarring (sclerosis)",
                result: "Disrupted nerve signals; neurological dysfunction",
                symptoms: [
                    "Vision problems (optic neuritis)",
                    "Muscle weakness, spasticity",
                    "Numbness/tingling",
                    "Balance and coordination problems",
                    "Fatigue",
                    "Cognitive changes"
                ],
                types: {
                    relapsingRemitting: "Most common; episodes of symptoms followed by recovery",
                    primaryProgressive: "Steady worsening without remissions",
                    secondaryProgressive: "Starts as relapsing-remitting, becomes progressive"
                },
                treatment: "Disease-modifying therapies (interferons, glatiramer), immunosuppressants, symptom management",
                diagnosis: "MRI showing lesions, lumbar puncture, clinical presentation"
            },
            {
                name: "Hashimoto's Thyroiditis",
                target: "Thyroid gland",
                mechanism: "Antibodies and T cells destroy thyroid tissue",
                result: "Hypothyroidism (underactive thyroid)",
                autoantibodies: ["Anti-thyroid peroxidase (anti-TPO)", "Anti-thyroglobulin"],
                symptoms: ["Fatigue", "Weight gain", "Cold intolerance", "Constipation", "Dry skin", "Hair loss", "Depression"],
                treatment: "Thyroid hormone replacement (levothyroxine)",
                mostCommon: "Most common autoimmune disease and cause of hypothyroidism"
            },
            {
                name: "Graves' Disease",
                target: "Thyroid gland (stimulation rather than destruction)",
                mechanism: "Antibodies stimulate TSH receptor, causing excessive thyroid hormone production",
                result: "Hyperthyroidism (overactive thyroid)",
                autoantibodies: "TSH receptor antibodies (TRAb)",
                symptoms: [
                    "Weight loss",
                    "Rapid heartbeat",
                    "Heat intolerance",
                    "Tremor",
                    "Anxiety",
                    "Bulging eyes (exophthalmos)",
                    "Goiter (enlarged thyroid)"
                ],
                treatment: "Anti-thyroid drugs, radioactive iodine, thyroidectomy",
                unique: "Autoantibodies stimulate rather than destroy (most autoimmune diseases destroy)"
            },
            {
                name: "Celiac Disease",
                target: "Small intestine (triggered by gluten)",
                mechanism: "T cell response to gluten damages intestinal villi",
                autoantibodies: ["Anti-tissue transglutaminase (tTG)", "Anti-endomysial"],
                symptoms: [
                    "Diarrhea, bloating, abdominal pain",
                    "Malabsorption (weight loss, nutrient deficiencies)",
                    "Fatigue",
                    "Dermatitis herpetiformis (skin rash)",
                    "Anemia"
                ],
                diagnosis: "Serology (antibodies) + intestinal biopsy showing villous atrophy",
                treatment: "Strict lifelong gluten-free diet",
                trigger: "Gluten (protein in wheat, barley, rye)"
            },
            {
                name: "Inflammatory Bowel Disease (IBD)",
                types: {
                    crohnsDisease: {
                        target: "Any part of GI tract (mouth to anus); transmural (full thickness)",
                        pattern: "Skip lesions (affected areas separated by normal tissue)",
                        complications: "Fistulas, strictures, abscesses"
                    },
                    ulcerativeColitis: {
                        target: "Colon and rectum only; superficial inflammation",
                        pattern: "Continuous inflammation starting from rectum",
                        complications: "Toxic megacolon, increased colon cancer risk"
                    }
                },
                symptoms: ["Diarrhea (often bloody)", "Abdominal pain and cramping", "Weight loss", "Fatigue", "Fever"],
                treatment: "Anti-inflammatory drugs (5-ASA), immunosuppressants, biologics (anti-TNF), surgery if severe",
                extraIntestinal: "Can affect joints, skin, eyes, liver"
            },
            {
                name: "Myasthenia Gravis",
                target: "Acetylcholine receptors at neuromuscular junction",
                mechanism: "Antibodies block acetylcholine receptors; impairs nerve-muscle communication",
                result: "Muscle weakness worsening with activity",
                symptoms: [
                    "Ptosis (drooping eyelids)",
                    "Diplopia (double vision)",
                    "Difficulty chewing, swallowing, speaking",
                    "Limb weakness",
                    "Muscle fatigue worsening through day"
                ],
                diagnosis: "Antibody testing, electromyography, edrophonium test",
                treatment: "Acetylcholinesterase inhibitors, immunosuppressants, thymectomy, plasmapheresis",
                crisis: "Myasthenic crisis - respiratory muscle weakness requiring ventilation"
            },
            {
                name: "Guillain-Barré Syndrome",
                target: "Peripheral nerve myelin",
                trigger: "Often follows infection (Campylobacter, viruses)",
                mechanism: "Molecular mimicry; antibodies against pathogen cross-react with nerve myelin",
                result: "Ascending paralysis starting in legs",
                symptoms: [
                    "Progressive weakness ascending from legs",
                    "Numbness/tingling",
                    "Loss of reflexes",
                    "Can progress to respiratory paralysis"
                ],
                course: "Acute onset over days-weeks, then plateau, then gradual recovery (months)",
                treatment: "IVIG or plasmapheresis; supportive care",
                prognosis: "Most recover fully, but can take months; ~20% have residual weakness"
            },
            {
                name: "Psoriasis",
                target: "Skin (keratinocytes)",
                mechanism: "T cell-mediated; excessive keratinocyte proliferation",
                result: "Thick, scaly plaques on skin",
                symptoms: [
                    "Red patches with silvery scales",
                    "Dry, cracked skin",
                    "Itching/burning",
                    "Thickened nails"
                ],
                distribution: "Elbows, knees, scalp, lower back",
                associated: "Psoriatic arthritis in ~30%",
                treatment: "Topical corticosteroids, vitamin D analogs, phototherapy, systemic immunosuppressants, biologics"
            },
            {
                name: "Sjögren's Syndrome",
                target: "Exocrine glands (salivary, lacrimal)",
                mechanism: "Lymphocytic infiltration destroys glands",
                result: "Dry eyes and dry mouth",
                symptoms: [
                    "Dry eyes (keratoconjunctivitis sicca)",
                    "Dry mouth (xerostomia)",
                    "Difficulty swallowing",
                    "Dental cavities",
                    "Parotid gland swelling"
                ],
                autoantibodies: ["Anti-SSA (Ro)", "Anti-SSB (La)"],
                types: "Primary (alone) or secondary (with other autoimmune disease)",
                treatment: "Artificial tears, saliva substitutes, immunosuppressants",
                complications: "Increased lymphoma risk"
            }
        ];

        const diagnosisOfAutoimmune = {
            clinicalCriteria: {
                symptoms: "Pattern of symptoms affecting specific organs/tissues",
                physicalExam: "Findings consistent with autoimmune disease",
                familyHistory: "Autoimmune diseases often cluster in families"
            },
            laboratoryTests: {
                autoantibodyTests: [
                    "ANA (anti-nuclear antibody) - screening test for systemic autoimmune",
                    "Specific antibodies (anti-dsDNA for lupus, RF for RA, anti-TPO for Hashimoto's)",
                    "Pattern and titer important for interpretation"
                ],
                inflammatoryMarkers: [
                    "ESR (erythrocyte sedimentation rate) - elevated in inflammation",
                    "CRP (C-reactive protein) - acute phase reactant"
                ],
                organFunction: [
                    "Thyroid function tests (TSH, T4, T3)",
                    "Kidney function (creatinine, urinalysis)",
                    "Liver function tests"
                ],
                completeBloodCount: "May show anemia, low platelets, low/high WBCs"
            },
            imaging: {
                xray: "Joint damage in RA, lung involvement",
                MRI: "MS lesions, joint inflammation",
                ultrasound: "Thyroid, joint synovitis"
            },
            biopsy: {
                when: "Confirm tissue damage, rule out other causes",
                examples: "Kidney biopsy (lupus nephritis), intestinal biopsy (celiac), skin biopsy (lupus)"
            }
        };

        const treatmentStrategies = {
            goals: [
                "Reduce inflammation and immune activity",
                "Relieve symptoms",
                "Prevent organ damage",
                "Maintain quality of life"
            ],
            medications: {
                NSAIDs: {
                    examples: "Ibuprofen, naproxen",
                    use: "Pain and inflammation relief",
                    limitations: "Symptomatic only; doesn't modify disease"
                },
                corticosteroids: {
                    examples: "Prednisone, prednisolone",
                    use: "Rapid inflammation suppression; used for flares",
                    sideEffects: "Numerous with long-term use (osteoporosis, infections, weight gain, diabetes)",
                    goal: "Use lowest effective dose for shortest time"
                },
                DMARDs: {
                    fullName: "Disease-Modifying Anti-Rheumatic Drugs",
                    examples: "Methotrexate, azathioprine, mycophenolate",
                    use: "Suppress immune system; slow disease progression",
                    onset: "Weeks to months to see effect",
                    monitoring: "Regular blood tests for toxicity"
                },
                biologics: {
                    description: "Targeted therapies against specific immune molecules",
                    types: {
                        antiTNF: "Infliximab, adalimumab, etanercept (RA, IBD, psoriasis)",
                        antiIL6: "Tocilizumab (RA)",
                        antiIL17: "Secukinumab (psoriasis)",
                        antiCD20: "Rituximab (depletes B cells; RA, lupus)",
                        CTLA4Ig: "Abatacept (blocks T cell activation; RA)"
                    },
                    advantages: "More specific; fewer side effects than broad immunosuppression",
                    disadvantages: "Expensive; require injection/infusion; increased infection risk"
                },
                JAKInhibitors: {
                    examples: "Tofacitinib, baricitinib",
                    mechanism: "Block JAK-STAT signaling pathway",
                    use: "RA, psoriatic arthritis",
                    advantage: "Oral administration"
                }
            },
            nonPharmacologic: {
                lifestyle: "Healthy diet, exercise, stress management, adequate sleep",
                physicalTherapy: "Maintain joint function and mobility",
                occupationalTherapy: "Adaptive strategies for daily activities",
                diet: "Gluten-free for celiac; anti-inflammatory diet may help others",
                avoidTriggers: "Sun exposure (lupus), certain foods (celiac)"
            },
            emerging: {
                CAR_Tcells: "Engineered T cells to deplete autoreactive B cells",
                tolerogenicVaccines: "Induce tolerance to self-antigens",
                regulatoryTcellTherapy: "Boost Treg function",
                microbiomeModulation: "Alter gut bacteria to influence immune response"
            }
        };

        const prognosisAndComplications = {
            variability: "Prognosis varies widely by disease and individual",
            flares: "Many autoimmune diseases have periods of increased activity (flares) and remission",
            complications: {
                organDamage: "Progressive damage to target organs",
                infections: "Increased risk from immunosuppressive therapy",
                cardiovascular: "Many autoimmune diseases increase heart disease risk",
                cancer: "Some increase cancer risk (lymphoma in Sjögren's)",
                pregnancy: "Some affect pregnancy; require special management"
            },
            monitoring: {
                regular: "Ongoing monitoring of disease activity and treatment side effects",
                biomarkers: "Antibody levels, inflammatory markers",
                imaging: "Assess organ damage",
                functionTests: "Kidney, liver, thyroid function"
            }
        };

        return {
            topic: "Autoimmune Disorders",
            overview: autoimmuneOverview,
            mechanisms: mechanismsOfAutoimmunity,
            diseases: commonAutoimmuneDiseases,
            diagnosis: diagnosisOfAutoimmune,
            treatment: treatmentStrategies,
            prognosis: prognosisAndComplications,
            organSpecificVsSystemic: {
                organSpecific: {
                    description: "Target single organ",
                    examples: ["Type 1 diabetes (pancreas)", "Hashimoto's (thyroid)", "Myasthenia gravis (neuromuscular junction)"]
                },
                systemic: {
                    description: "Affect multiple organs/systems",
                    examples: ["Lupus", "Rheumatoid arthritis", "Sjögren's syndrome"]
                }
            },
            riskFactors: {
                genetic: "Family history, specific HLA types",
                sex: "More common in women (hormonal influence)",
                age: "Can occur at any age; some more common in certain age groups",
                environmental: "Infections, smoking, UV exposure, certain medications",
                otherAutoimmune: "Having one autoimmune disease increases risk for others"
            },
            category: 'autoimmune_disorders'
        };
    }

    handleAllergies(problem) {
        const allergyOverview = {
            definition: "Immune system overreaction to normally harmless substances (allergens)",
            prevalence: "Affects ~30-40% of population worldwide; increasing",
            mechanism: "Inappropriate IgE-mediated immune response to environmental antigens",
            development: {
                sensitization: {
                    description: "First exposure creates allergen-specific IgE",
                    process: [
                        "Allergen enters body",
                        "Antigen-presenting cells process and present to T cells",
                        "Th2 cells activate B cells",
                        "B cells produce IgE specific to allergen",
                        "IgE binds to mast cells and basophils",
                        "Person now sensitized (no symptoms yet)"
                    ]
                },
                subsequentExposure: {
                    description: "Re-exposure triggers allergic reaction",
                    process: [
                        "Allergen binds to IgE on mast cell surface",
                        "Cross-linking of IgE molecules",
                        "Mast cell degranulation (releases contents)",
                        "Histamine and other mediators released",
                        "Allergic symptoms occur"
                    ],
                    timing: "Minutes after exposure (immediate hypersensitivity)"
                }
            }
        };

        const hypersensitivityTypes = [
            {
                type: "Type I (Immediate Hypersensitivity)",
                mechanism: "IgE-mediated",
                timing: "Minutes after exposure",
                cells: "Mast cells, basophils",
                mediators: ["Histamine", "Leukotrienes", "Prostaglandins", "Cytokines"],
                examples: [
                    "Allergic rhinitis (hay fever)",
                    "Food allergies",
                    "Asthma (allergic)",
                    "Anaphylaxis",
                    "Atopic dermatitis (eczema)",
                    "Urticaria (hives)"
                ],
                mostCommon: "This is what people typically mean by 'allergy'"
            },
            {
                type: "Type II (Cytotoxic Hypersensitivity)",
                mechanism: "IgG or IgM antibodies against cell-surface antigens",
                timing: "Minutes to hours",
                result: "Cell destruction via complement or antibody-dependent cytotoxicity",
                examples: [
                    "Transfusion reactions (ABO incompatibility)",
                    "Hemolytic disease of newborn (Rh incompatibility)",
                    "Autoimmune hemolytic anemia",
                    "Goodpasture syndrome"
                ]
            },
            {
                type: "Type III (Immune Complex Hypersensitivity)",
                mechanism: "Antigen-antibody complexes deposit in tissues",
                timing: "Hours (3-8 hours)",
                result: "Inflammation and tissue damage at deposition sites",
                examples: [
                    "Serum sickness",
                    "Arthus reaction",
                    "Some cases of lupus",
                    "Post-streptococcal glomerulonephritis"
                ]
            },
            {
                type: "Type IV (Delayed Hypersensitivity)",
                mechanism: "T cell-mediated",
                timing: "Days (24-72 hours)",
                cells: "T cells, macrophages",
                noAntibodies: "Does not involve antibodies",
                examples: [
                    "Contact dermatitis (poison ivy, nickel)",
                    "Tuberculin skin test reaction",
                    "Chronic transplant rejection",
                    "Some drug reactions"
                ]
            }
        ];

        const commonAllergens = {
            inhaled: {
                category: "Respiratory allergens",
                examples: [
                    "Pollen (trees, grasses, weeds) - seasonal",
                    "Dust mites",
                    "Animal dander (cats, dogs, rodents)",
                    "Mold spores",
                    "Cockroach droppings"
                ],
                conditions: "Allergic rhinitis, asthma"
            },
            food: {
                category: "Food allergens",
                major8: [
                    "Milk",
                    "Eggs",
                    "Peanuts",
                    "Tree nuts",
                    "Soy",
                    "Wheat",
                    "Fish",
                    "Shellfish"
                ],
                note: "These account for ~90% of food allergies",
                other: "Sesame, mustard, celery, lupine",
                childrenVsAdults: "Children often outgrow milk/egg allergies; peanut/tree nut persist",
                conditions: "Urticaria, angioedema, GI symptoms, anaphylaxis"
            },
            contactAllergens: {
                category: "Substances causing contact dermatitis",
                examples: [
                    "Nickel (jewelry, belt buckles)",
                    "Latex (gloves, balloons)",
                    "Fragrances, preservatives (cosmetics)",
                    "Poison ivy/oak (urushiol oil)",
                    "Chemicals (hair dyes, cleaning products)"
                ],
                condition: "Contact dermatitis (Type IV hypersensitivity)"
            },
            drugsInsects: {
                drugs: [
                    "Penicillin and related antibiotics",
                    "NSAIDs (aspirin, ibuprofen)",
                    "Sulfa drugs",
                    "Chemotherapy agents"
                ],
                insects: [
                    "Bee stings",
                    "Wasp stings",
                    "Hornet stings",
                    "Fire ant stings"
                ],
                risk: "Can cause anaphylaxis"
            }
        };

        const allergiConditions = [
            {
                condition: "Allergic Rhinitis (Hay Fever)",
                description: "Inflammation of nasal passages",
                types: {
                    seasonal: "Triggered by pollen; specific seasons",
                    perennial: "Year-round; dust mites, pet dander, mold"
                },
                symptoms: [
                    "Sneezing",
                    "Runny/stuffy nose",
                    "Itchy nose, eyes, throat",
                    "Watery eyes",
                    "Postnasal drip"
                ],
                diagnosis: "Clinical history, skin prick test, specific IgE blood test",
                treatment: "Antihistamines, nasal corticosteroids, decongestants, immunotherapy"
            },
            {
                condition: "Asthma (Allergic)",
                description: "Airway inflammation and constriction",
                triggers: "Allergens, exercise, cold air, infections",
                symptoms: [
                    "Wheezing",
                    "Shortness of breath",
                    "Chest tightness",
                    "Coughing (especially at night)"
                ],
                mechanism: "Airway hyperresponsiveness; smooth muscle constriction; mucus production",
                treatment: "Inhaled corticosteroids, bronchodilators, leukotriene modifiers, biologics",
                monitoring: "Peak flow meter, spirometry"
            },
            {
                condition: "Atopic Dermatitis (Eczema)",
                description: "Chronic inflammatory skin condition",
                characteristics: [
                    "Dry, itchy, inflamed skin",
                    "Often starts in infancy",
                    "Can persist into adulthood",
                    "Associated with other atopic conditions"
                ],
                locations: "Flexural areas (elbows, knees), face, hands",
                triggers: "Allergens, irritants, stress, temperature changes",
                treatment: "Moisturizers, topical corticosteroids, tacrolimus, biologics (dupilumab)",
                prevention: "Regular moisturizing, avoid triggers"
            },
            {
                condition: "Urticaria (Hives)",
                description: "Raised, itchy welts on skin",
                types: {
                    acute: "Lasts <6 weeks; often allergic",
                    chronic: "Lasts >6 weeks; often no identifiable cause"
                },
                symptoms: "Raised, red, itchy welts; can appear anywhere; welts change location",
                causes: "Foods, drugs, insect stings, infections, physical triggers",
                treatment: "Antihistamines; avoid triggers; corticosteroids if severe"
            },
            {
                condition: "Food Allergies",
                description: "Immune reaction to specific foods",
                symptoms: [
                    "Skin: hives, itching, eczema",
                    "GI: nausea, vomiting, diarrhea, abdominal pain",
                    "Respiratory: wheezing, nasal congestion",
                    "Cardiovascular: anaphylaxis"
                ],
                diagnosis: "History, skin prick test, specific IgE, oral food challenge",
                treatment: "Strict avoidance; epinephrine for severe reactions",
                distinction: "True allergy vs food intolerance (non-immune; e.g., lactose intolerance)"
            },
            {
                condition: "Anaphylaxis",
                description: "Severe, life-threatening allergic reaction",
                triggers: "Foods, drugs, insect stings, latex",
                symptoms: [
                    "Skin: hives, flushing, itching",
                    "Respiratory: throat swelling, difficulty breathing, wheezing",
                    "Cardiovascular: rapid pulse, low blood pressure, shock",
                    "GI: nausea, vomiting, diarrhea",
                    "CNS: dizziness, confusion, loss of consciousness"
                ],
                criteria: "Rapid onset (minutes); affects ≥2 body systems; or hypotension after known allergen",
                treatment: {
                    immediate: "Epinephrine (EpiPen) - first-line treatment",
                    additional: "Call 911, lie flat with legs elevated, antihistamines, corticosteroids",
                    observation: "Monitor for biphasic reaction (symptoms return hours later)"
                },
                prevention: "Avoid known allergens, carry epinephrine auto-injector, medical alert bracelet"
            }
        ];

        const mediators = {
            histamine: {
                source: "Mast cells, basophils (preformed in granules)",
                effects: [
                    "Vasodilation (redness, heat)",
                    "Increased vascular permeability (swelling)",
                    "Smooth muscle contraction (bronchoconstriction)",
                    "Itching",
                    "Mucus secretion"
                ],
                receptors: "H1 (allergy symptoms), H2 (gastric acid)",
                blocked: "Antihistamines block H1 receptors"
            },
            leukotrienes: {
                source: "Mast cells, eosinophils (synthesized upon activation)",
                effects: [
                    "Bronchoconstriction (1000x more potent than histamine)",
                    "Increased vascular permeability",
                    "Mucus secretion"
                ],
                role: "Important in asthma",
                blocked: "Leukotriene modifiers (montelukast)"
            },
            prostaglandins: {
                source: "Many cells (from arachidonic acid)",
                effects: [
                    "Vasodilation",
                    "Bronchoconstriction",
                    "Pain",
                    "Fever"
                ]
            },
            cytokines: {
                source: "T cells, mast cells",
                examples: "IL-4, IL-5, IL-13 (Th2 cytokines promote IgE production and eosinophils)",
                role: "Amplify and sustain allergic response"
            },
            tryptase: {
                source: "Mast cells",
                use: "Elevated serum tryptase confirms anaphylaxis (measured in ER)"
            }
        };

        const diagnosisOfAllergies = {
            clinicalHistory: {
                importance: "Most important diagnostic tool",
                questions: [
                    "What symptoms occur?",
                    "When do symptoms occur?",
                    "What were you exposed to before symptoms?",
                    "How long do symptoms last?",
                    "Family history of allergies?"
                ]
            },
            skinPrickTest: {
                description: "Small amounts of allergens applied to skin (usually forearm); skin pricked",
                positive: "Wheal and flare reaction within 15-20 minutes",
                interpretation: "Size of wheal indicates sensitization level",
                advantages: "Quick, inexpensive, many allergens tested at once",
                limitations: "Measures sensitization, not clinical allergy; false positives possible",
                precautions: "Stop antihistamines before test"
            },
            specificIgEBloodTest: {
                names: "RAST, ImmunoCAP",
                description: "Measures allergen-specific IgE antibodies in blood",
                advantages: "Not affected by antihistamines; safe if severe allergy",
                limitations: "More expensive; slower results; measures sensitization",
                interpretation: "Higher levels suggest greater sensitization"
            },
            oralFoodChallenge: {
                description: "Gold standard for food allergy diagnosis",
                process: "Gradually increasing amounts of suspected food given under medical supervision",
                when: "When diagnosis unclear; assess if allergy outgrown",
                risks: "Can trigger allergic reaction; requires medical supervision",
                types: "Open, single-blind, double-blind placebo-controlled"
            },
            patchTest: {
                for: "Contact dermatitis (Type IV hypersensitivity)",
                process: "Allergens applied to skin via patches; left on 48 hours; read at 48-96 hours",
                positive: "Eczema-like reaction at patch site"
            },
            eliminationDiet: {
                for: "Suspected food allergies/intolerances",
                process: "Remove suspected foods for 2-4 weeks, then reintroduce one at a time",
                limitations: "Time-consuming; requires strict adherence; not for severe allergies"
            }
        };

        const treatmentPrevention = {
            avoidance: {
                description: "Most effective strategy",
                strategies: {
                    foods: "Read labels, inform restaurants, avoid cross-contamination",
                    inhalants: "Air purifiers, dust mite covers, remove carpets, keep pets out of bedroom",
                    contactAllergens: "Identify and avoid (patch testing helps)",
                    insects: "Avoid nests, wear shoes outside, don't wear perfumes outdoors"
                }
            },
            medications: {
                antihistamines: {
                    types: {
                        firstGeneration: "Diphenhydramine, chlorpheniramine - sedating, short-acting",
                        secondGeneration: "Cetirizine, loratadine, fexofenadine - non-sedating, long-acting"
                    },
                    mechanism: "Block H1 histamine receptors",
                    uses: "Allergic rhinitis, urticaria, itching",
                    sideEffects: "Drowsiness (first-generation), dry mouth"
                },
                nasalCorticosteroids: {
                    examples: "Fluticasone, mometasone, budesonide",
                    mechanism: "Reduce inflammation in nasal passages",
                    uses: "Allergic rhinitis (most effective treatment)",
                    onset: "Days to weeks for full effect",
                    sideEffects: "Minimal; nosebleeds, nasal dryness"
                },
                decongestants: {
                    examples: "Pseudoephedrine (oral), oxymetazoline (nasal spray)",
                    mechanism: "Vasoconstriction reduces nasal swelling",
                    caution: "Nasal sprays - rebound congestion if used >3 days; oral - can raise blood pressure"
                },
                leukotrieneModifiers: {
                    example: "Montelukast",
                    mechanism: "Block leukotriene receptors",
                    uses: "Asthma, allergic rhinitis",
                    advantage: "Oral medication"
                },
                mastCellStabilizers: {
                    examples: "Cromolyn sodium",
                    mechanism: "Prevent mast cell degranulation",
                    uses: "Allergic rhinitis, asthma (preventive)",
                    note: "Must be started before exposure"
                },
                epinephrine: {
                    use: "Anaphylaxis - ONLY effective treatment",
                    mechanism: "Reverses airway constriction, raises blood pressure",
                    administration: "Intramuscular injection (thigh) via auto-injector (EpiPen)",
                    timing: "Use immediately when anaphylaxis suspected",
                    prescription: "All at-risk individuals should carry two auto-injectors"
                },
                biologics: {
                    omalizumab: {
                        target: "Anti-IgE antibody",
                        uses: "Severe allergic asthma, chronic urticaria",
                        mechanism: "Binds free IgE, preventing mast cell activation"
                    },
                    dupilumab: {
                        target: "IL-4/IL-13 receptor",
                        uses: "Moderate-to-severe atopic dermatitis, asthma",
                        mechanism: "Blocks Th2 inflammatory pathway"
                    },
                    mepolizumab: {
                        target: "Anti-IL-5",
                        uses: "Severe eosinophilic asthma",
                        mechanism: "Reduces eosinophils"
                    }
                }
            },
            immunotherapy: {
                description: "Desensitization to allergens; only treatment that modifies disease",
                mechanisms: "Shifts immune response from Th2 to Th1; increases regulatory T cells; produces blocking IgG antibodies",
                types: {
                    subcutaneousImmunotherapy: {
                        name: "SCIT (allergy shots)",
                        process: [
                            "Build-up phase: increasing doses weekly/biweekly for 3-6 months",
                            "Maintenance phase: monthly injections for 3-5 years"
                        ],
                        effectiveness: "70-90% improvement",
                        duration: "Effects may last years after stopping"
                    },
                    sublingualImmunotherapy: {
                        name: "SLIT (under-tongue tablets/drops)",
                        process: "Daily tablet/drops under tongue",
                        advantages: "Can be done at home; safer than SCIT",
                        disadvantages: "More oral itching; requires daily compliance"
                    }
                },
                candidates: "Allergic rhinitis, allergic asthma, insect sting allergies",
                notFor: "Food allergies (except experimental oral immunotherapy in clinical trials)",
                benefits: [
                    "Reduces symptoms and medication needs",
                    "Prevents development of new allergies",
                    "Prevents asthma development in children with allergic rhinitis",
                    "Long-lasting effects"
                ]
            },
            emerging: {
                oralImmunotherapy: {
                    description: "Experimental for food allergies",
                    process: "Gradual increase in food allergen doses under supervision",
                    goal: "Desensitization (tolerance while continuing treatment) or sustained unresponsiveness",
                    status: "FDA-approved peanut immunotherapy (Palforzia); others in trials",
                    risks: "Frequent allergic reactions during treatment"
                },
                epicutaneousImmunotherapy: {
                    description: "Allergen patch on skin",
                    status: "Clinical trials for peanut, milk allergies"
                },
                biologics: "Expanding targets for severe allergic diseases"
            }
        };

        const allergyPrevention = {
            primaryPrevention: {
                description: "Prevent allergy development in first place",
                strategies: {
                    earlyIntroduction: {
                        evidence: "Introducing allergenic foods (peanut, egg) at 4-6 months reduces allergy risk",
                        recommendation: "Don't delay allergenic food introduction; introduce early and often",
                        exception: "Infant with severe eczema should see allergist first"
                    },
                    breastfeeding: "May reduce allergy risk, especially if exclusive for 4-6 months",
                    avoidSmoke: "Avoid tobacco smoke exposure",
                    petExposure: "Early pet exposure may reduce allergy risk (controversial)",
                    hygieneHypothesis: "Theory that reduced microbial exposure in early life increases allergy risk"
                }
            },
            secondaryPrevention: {
                description: "Prevent disease progression in sensitized individuals",
                strategies: [
                    "Immunotherapy to prevent asthma in those with allergic rhinitis",
                    "Strict allergen avoidance once sensitized"
                ]
            },
            tertiaryPrevention: {
                description: "Prevent complications and manage existing allergies",
                strategies: [
                    "Control asthma to prevent exacerbations",
                    "Carry epinephrine for anaphylaxis risk",
                    "Regular follow-up with allergist"
                ]
            }
        };

        return {
            topic: "Allergies and Hypersensitivity",
            overview: allergyOverview,
            hypersensitivityTypes: hypersensitivityTypes,
            allergens: commonAllergens,
            conditions: allergiConditions,
            mediators: mediators,
            diagnosis: diagnosisOfAllergies,
            treatment: treatmentPrevention,
            prevention: allergyPrevention,
            keyPoints: [
                "Allergies are IgE-mediated immune overreactions to harmless substances",
                "Sensitization occurs on first exposure; symptoms on subsequent exposures",
                "Anaphylaxis is life-threatening; requires immediate epinephrine",
                "Avoidance is most effective strategy",
                "Immunotherapy is only treatment that modifies disease course",
                "Early introduction of allergenic foods may prevent food allergies"
            ],
            misconceptions: {
                myth1: "Allergies are just in your head",
                truth1: "Allergies are real immune system responses with measurable physiological changes",
                myth2: "You can't develop allergies as an adult",
                truth2: "Allergies can develop at any age; adult-onset allergies common",
                myth3: "Local honey cures allergies",
                truth3: "No scientific evidence; pollen in honey is different from airborne pollen",
                myth4: "Hypoallergenic pets don't cause allergies",
                truth4: "No truly hypoallergenic breeds; all produce some allergens"
            },
            category: 'allergies'
        };
    }

    handleInfectiousDiseases(problem) {
        const infectiousDiseaseOverview = {
            definition: "Diseases caused by pathogenic microorganisms that can be transmitted",
            causativeAgents: ["Bacteria", "Viruses", "Fungi", "Parasites", "Prions"],
            characteristics: [
                "Caused by living organisms or infectious particles",
                "Can be transmitted (though not all are contagious)",
                "Have incubation periods",
                "Trigger immune responses"
            ],
            chainOfInfection: [
                "Infectious agent (pathogen)",
                "Reservoir (where pathogen lives)",
                "Portal of exit (how pathogen leaves reservoir)",
                "Mode of transmission (how pathogen spreads)",
                "Portal of entry (how pathogen enters new host)",
                "Susceptible host (person who can be infected)"
            ]
        };

        const transmissionModes = {
            directTransmission: {
                description: "Immediate transfer from infected to susceptible host",
                types: {
                    directContact: {
                        description: "Physical contact between hosts",
                        examples: ["STIs", "Skin infections", "Rabies (bite)", "Ebola (body fluids)"]
                    },
                    dropletTransmission: {
                        description: "Large respiratory droplets (>5 μm); travel <6 feet",
                        mechanism: "Coughing, sneezing, talking",
                        examples: ["Influenza", "Pertussis", "Meningitis", "COVID-19"],
                        prevention: "Masks, social distancing (6 feet)"
                    },
                    verticalTransmission: {
                        description: "Mother to child",
                        timing: ["During pregnancy (transplacental)", "During delivery", "Through breastfeeding"],
                        examples: ["HIV", "Syphilis", "Rubella", "Zika", "Toxoplasmosis"]
                    }
                }
            },
            indirectTransmission: {
                description: "Transfer via intermediate object or organism",
                types: {
                    airborne: {
                        description: "Small particles (<5 μm) remain suspended in air; travel long distances",
                        mechanism: "Can remain airborne for hours; inhaled into lungs",
                        examples: ["Tuberculosis", "Measles", "Chickenpox", "COVID-19"],
                        prevention: "N95 masks, negative pressure rooms, ventilation"
                    },
                    vehicleBorne: {
                        description: "Transmitted via contaminated inanimate objects",
                        types: {
                            food: "Food poisoning (Salmonella, E. coli, norovirus)",
                            water: "Cholera, giardiasis, hepatitis A",
                            fomites: "Contaminated surfaces (respiratory viruses, C. diff)"
                        },
                        prevention: "Hand hygiene, food safety, water treatment, surface disinfection"
                    },
                    vectorBorne: {
                        description: "Transmitted by living organisms (vectors)",
                        vectors: {
                            mosquitoes: "Malaria, dengue, Zika, West Nile, yellow fever",
                            ticks: "Lyme disease, Rocky Mountain spotted fever, ehrlichiosis",
                            fleas: "Plague, typhus",
                            flies: "African sleeping sickness, leishmaniasis"
                        },
                        prevention: "Insect repellent, protective clothing, insecticide, eliminate breeding sites"
                    }
                }
            }
        };

        const epidemiologicalTerms = {
            sporadic: "Occasional cases occurring irregularly",
            endemic: "Disease constantly present in a population/area at expected levels",
            epidemic: "Outbreak with more cases than expected in area/time period",
            pandemic: "Epidemic spread across multiple countries/continents",
            outbreak: "More cases than expected in localized area",
            incubationPeriod: "Time from infection to symptom onset",
            infectiousPeriod: "Time when person can transmit infection",
            basicReproductionNumber: {
                symbol: "R₀",
                definition: "Average number of people one infected person will infect",
                interpretation: {
                    "R₀ < 1": "Disease will die out",
                    "R₀ = 1": "Disease will persist at current level",
                    "R₀ > 1": "Disease will spread"
                },
                examples: {
                    measles: "12-18 (highly contagious)",
                    influenza: "1-2",
                    COVID19: "2-3 (original strain)",
                    ebola: "1.5-2.5"
                }
            },
            caseDefinitions: {
                suspected: "Symptoms consistent with disease",
                probable: "Symptoms + epidemiological link",
                confirmed: "Laboratory confirmation"
            }
        };

        const majorInfectiousDiseases = [
            {
                name: "COVID-19",
                pathogen: "SARS-CoV-2 (coronavirus)",
                transmission: "Airborne, droplet, contact",
                incubation: "2-14 days (median 5 days)",
                symptoms: [
                    "Fever, cough, shortness of breath",
                    "Loss of taste/smell",
                    "Fatigue, body aches",
                    "Sore throat, congestion",
                    "Can be asymptomatic"
                ],
                complications: [
                    "Pneumonia, ARDS",
                    "Thromboembolism",
                    "Multi-organ failure",
                    "Long COVID (persistent symptoms)",
                    "Death (especially elderly, comorbidities)"
                ],
                prevention: "Vaccination, masks, social distancing, ventilation, hand hygiene",
                treatment: "Antivirals (Paxlovid, remdesivir), monoclonal antibodies, supportive care",
                impact: "Pandemic 2019-present; millions of deaths worldwide"
            },
            {
                name: "Tuberculosis (TB)",
                pathogen: "Mycobacterium tuberculosis",
                transmission: "Airborne",
                types: {
                    latent: "Infected but no symptoms; not contagious; can reactivate",
                    active: "Symptoms present; contagious"
                },
                symptoms: [
                    "Persistent cough >3 weeks",
                    "Coughing blood",
                    "Chest pain",
                    "Weight loss, loss of appetite",
                    "Fever, night sweats",
                    "Fatigue"
                ],
                diagnosis: "Tuberculin skin test (TST), IGRA blood test, chest X-ray, sputum culture",
                treatment: "Combination antibiotics for 6-9 months (rifampin, isoniazid, pyrazinamide, ethambutol)",
                challenge: "Drug-resistant TB (MDR-TB, XDR-TB)",
                prevention: "BCG vaccine (limited use), screening, isolation of active cases",
                globalBurden: "~10 million cases/year; leading infectious disease killer (pre-COVID)"
            },
            {
                name: "Malaria",
                pathogen: "Plasmodium parasites (P. falciparum most deadly)",
                transmission: "Anopheles mosquito bites",
                lifecycle: [
                    "Mosquito injects sporozoites",
                    "Parasites infect liver cells",
                    "Merozoites released, infect red blood cells",
                    "Parasites multiply in RBCs",
                    "RBCs burst, releasing more parasites (causes fever cycles)"
                ],
                symptoms: [
                    "Cyclical fever (every 48-72 hours)",
                    "Chills, sweats",
                    "Headache",
                    "Nausea, vomiting",
                    "Anemia"
                ],
                severeMalaria: "Cerebral malaria, organ failure, severe anemia, death",
                diagnosis: "Blood smear microscopy, rapid diagnostic test",
                treatment: "Artemisinin-based combination therapy (ACT)",
                prevention: "Mosquito nets, insecticides, antimalarial prophylaxis, vaccine (RTS,S - limited efficacy)",
                globalBurden: "~240 million cases/year; ~600,000 deaths (mostly African children)"
            },
            {
                name: "HIV/AIDS",
                pathogen: "Human Immunodeficiency Virus (retrovirus)",
                transmission: "Blood, sexual contact, mother-to-child",
                mechanism: "Infects CD4+ T cells; progressively destroys immune system",
                stages: [
                    "Acute HIV: Flu-like symptoms 2-4 weeks after infection",
                    "Chronic HIV (clinical latency): Asymptomatic or mild symptoms; virus replicates",
                    "AIDS: CD4+ count <200 cells/μL or opportunistic infections"
                ],
                opportunisticInfections: [
                    "Pneumocystis pneumonia",
                    "Toxoplasmosis",
                    "Candidiasis",
                    "CMV",
                    "Kaposi's sarcoma",
                    "Mycobacterium avium complex"
                ],
                diagnosis: "Antibody/antigen tests, viral load (PCR)",
                treatment: "Antiretroviral therapy (ART) - combination of drugs suppressing viral replication",
                prevention: "Safe sex, clean needles, PrEP (pre-exposure prophylaxis), PEP (post-exposure prophylaxis)",
                prognosis: "With ART, near-normal lifespan; without treatment, progresses to AIDS in ~10 years",
                globalBurden: "~38 million living with HIV; 630,000 deaths/year (2022)"
            },
            {
                name: "Influenza (Flu)",
                pathogen: "Influenza viruses (A, B, C, D)",
                transmission: "Droplet, airborne, contact",
                characteristics: [
                    "RNA virus with segmented genome",
                    "Antigenic drift (minor changes) causes seasonal epidemics",
                    "Antigenic shift (major changes in influenza A) causes pandemics"
                ],
                symptoms: [
                    "Sudden onset fever",
                    "Cough, sore throat",
                    "Muscle aches",
                    "Headache",
                    "Fatigue"
                ],
                complications: "Pneumonia (viral or bacterial), myocarditis, hospitalization, death",
                riskGroups: "Young children, elderly, pregnant women, immunocompromised, chronic conditions",
                treatment: "Antivirals (oseltamivir, zanamivir) if started within 48 hours; supportive care",
                prevention: "Annual vaccination (composition changes yearly)",
                seasonality: "Winter in temperate regions; year-round in tropics",
                pandemics: "1918 Spanish flu, 2009 H1N1"
            },
            {
                name: "Hepatitis (Viral)",
                types: {
                    hepatitisA: {
                        transmission: "Fecal-oral (contaminated food/water)",
                        acute: "Self-limited; no chronic infection",
                        prevention: "Vaccine, hand hygiene, safe food/water"
                    },
                    hepatitisB: {
                        transmission: "Blood, sexual contact, mother-to-child",
                        chronic: "~5-10% develop chronic infection",
                        complications: "Cirrhosis, liver cancer",
                        prevention: "Vaccine (highly effective)",
                        treatment: "Antivirals for chronic infection"
                    },
                    hepatitisC: {
                        transmission: "Blood (injection drug use, transfusion pre-1992)",
                        chronic: "~75-85% develop chronic infection",
                        complications: "Cirrhosis, liver cancer",
                        treatment: "Direct-acting antivirals (DAAs) - cure >95%",
                        noVaccine: "No vaccine available"
                    },
                    hepatitisD: {
                        note: "Requires hepatitis B co-infection"
                    },
                    hepatitisE: {
                        transmission: "Fecal-oral",
                        acute: "Usually self-limited",
                        danger: "Severe in pregnant women"
                    }
                },
                symptoms: "Jaundice, fatigue, abdominal pain, nausea, dark urine",
                diagnosis: "Serology (antibodies, antigens), viral load"
            },
            {
                name: "Measles",
                pathogen: "Measles virus (paramyxovirus)",
                transmission: "Airborne (highly contagious; R₀ 12-18)",
                symptoms: [
                    "High fever",
                    "Cough, runny nose, red eyes",
                    "Koplik spots (white spots in mouth)",
                    "Characteristic rash (starts on face, spreads down)"
                ],
                complications: [
                    "Pneumonia",
                    "Encephalitis",
                    "Subacute sclerosing panencephalitis (SSPE) - rare, fatal",
                    "Death (~1-2 per 1000 cases)"
                ],
                prevention: "MMR vaccine (97% effective after 2 doses)",
                elimination: "Eliminated in many countries; outbreaks due to low vaccination rates",
                vulnerability: "Young children most at risk"
            }
        ];

        const preventionStrategies = {
            primary: {
                description: "Prevent infection from occurring",
                strategies: {
                    vaccination: "Most effective public health intervention",
                    handHygiene: "Handwashing with soap; alcohol-based sanitizers",
                    safeFoodWater: "Proper food handling, cooking; clean water",
                    vectorControl: "Insecticides, bed nets, eliminate breeding sites",
                    safeSex: "Condoms, limiting partners",
                    avoidExposure: "Isolation of sick individuals, quarantine",
                    personalProtectiveEquipment: "Masks, gloves, gowns for healthcare"
                }
            },
            secondary: {
                description: "Early detection and treatment to prevent disease progression",
                strategies: [
                    "Screening programs (HIV, TB, STIs)",
                    "Contact tracing and testing",
                    "Post-exposure prophylaxis (HIV PEP, rabies vaccine)",
                    "Early antibiotic/antiviral treatment"
                ]
            },
            tertiary: {
                description: "Prevent complications in those with disease",
                strategies: [
                    "Antibiotic/antiviral treatment",
                    "Supportive care",
                    "Prevention of opportunistic infections",
                    "Rehabilitation"
                ]
            }
        };

        const publicHealthMeasures = {
            surveillance: "Monitoring disease occurrence to detect outbreaks",
            contactTracing: "Identifying and monitoring contacts of infected individuals",
            isolation: "Separating infected individuals to prevent transmission",
            quarantine: "Restricting movement of exposed but asymptomatic individuals",
            massVaccination: "Vaccinating large populations during outbreaks",
            healthEducation: "Teaching prevention measures",
            sanitationImprovements: "Clean water, sewage treatment, waste management",
            vectorControl: "Controlling disease-carrying organisms",
            travelRestrictions: "Limiting movement to contain outbreaks"
        };

        return {
            topic: "Infectious Diseases",
            overview: infectiousDiseaseOverview,
            transmission: transmissionModes,
            epidemiology: epidemiologicalTerms,
            majorDiseases: majorInfectiousDiseases,
            prevention: preventionStrategies,
            publicHealth: publicHealthMeasures,
            emergingThreats: {
                antimicrobialResistance: "Bacteria, viruses, fungi evolving resistance to drugs",
                emergingInfections: "New diseases (COVID-19, Ebola, Zika, Nipah)",
                reemergingInfections: "Diseases returning (measles, whooping cough due to low vaccination)",
                climateChange: "Expanding vector ranges; changing disease patterns",
                globalization: "Rapid international disease spread"
            },
            oneHealthApproach: {
                description: "Recognition that human, animal, and environmental health are interconnected",
                importance: "~75% of emerging infectious diseases are zoonotic (animal origin)",
                components: [
                    "Surveillance across species",
                    "Coordinated response between human and animal health sectors",
                    "Environmental monitoring",
                    "Antimicrobial stewardship"
                ]
            },
            category: 'infectious_diseases'
        };
    }

    handleImmunodeficiency(problem) {
        const immunodeficiencyOverview = {
            definition: "Impaired or absent immune system function leading to increased susceptibility to infections",
            consequences: [
                "Increased frequency of infections",
                "Increased severity of infections",
                "Opportunistic infections (pathogens that don't normally cause disease)",
                "Prolonged infections",
                "Incomplete response to treatment",
                "Increased cancer risk",
                "Increased autoimmunity risk (paradoxically)"
            ],
            types: {
                primary: "Genetic/congenital defects; present from birth",
                secondary: "Acquired defects; result from external factors"
            }
        };

        const primaryImmunodeficiency = {
            description: "Genetic disorders affecting immune system development or function",
            prevalence: "Rare; ~1 in 1,200 births",
            characteristics: [
                "Usually diagnosed in childhood",
                "Recurrent, severe, or unusual infections",
                "Often require lifelong treatment",
                "Over 400 different genetic disorders identified"
            ],
            warningSigns: [
                "≥8 new ear infections within 1 year",
                "≥2 serious sinus infections within 1 year",
                "≥2 months on antibiotics with little effect",
                "≥2 pneumonias within 1 year",
                "Failure of infant to gain weight or grow normally",
                "Recurrent deep skin or organ abscesses",
                "Persistent thrush or fungal infection",
                "Need for IV antibiotics to clear infections",
                "≥2 deep-seated infections (meningitis, sepsis)",
                "Family history of primary immunodeficiency"
            ],
            majorCategories: [
                {
                    category: "B Cell (Antibody) Deficiencies",
                    description: "Impaired antibody production",
                    infections: "Bacterial (especially encapsulated: pneumococcus, H. influenzae)",
                    examples: [
                        {
                            name: "X-Linked Agammaglobulinemia (XLA/Bruton's)",
                            defect: "BTK gene mutation; B cells don't mature",
                            presentation: "Males; recurrent bacterial infections after 6 months (maternal antibodies gone)",
                            treatment: "Lifelong immunoglobulin replacement therapy (IVIG)"
                        },
                        {
                            name: "Common Variable Immunodeficiency (CVID)",
                            defect: "Unknown cause; B cells don't make antibodies properly",
                            presentation: "Recurrent sinopulmonary infections; GI issues; autoimmunity",
                            diagnosis: "Usually teens-adults; low IgG, IgA, and/or IgM",
                            treatment: "IVIG, antibiotics for infections"
                        },
                        {
                            name: "Selective IgA Deficiency",
                            defect: "Low or absent IgA",
                            presentation: "Often asymptomatic; some have sinopulmonary or GI infections",
                            mostCommon: "Most common primary immunodeficiency (1 in 500)",
                            note: "Risk of anaphylaxis to blood products containing IgA"
                        }
                    ]
                },
                {
                    category: "T Cell Deficiencies",
                    description: "Impaired cell-mediated immunity",
                    infections: "Viral, fungal, intracellular bacteria, opportunistic",
                    note: "Often also affect B cells (T cells help B cells)",
                    examples: [
                        {
                            name: "DiGeorge Syndrome (22q11.2 Deletion)",
                            defect: "Thymus absent or underdeveloped; T cells don't mature",
                            features: [
                                "T cell deficiency",
                                "Heart defects",
                                "Cleft palate",
                                "Hypoparathyroidism (low calcium)",
                                "Characteristic facial features"
                            ],
                            treatment: "Thymus transplant (severe cases), IVIG, prophylactic antibiotics"
                        }
                    ]
                },
                {
                    category: "Combined B and T Cell Deficiencies",
                    description: "Both antibody and cell-mediated immunity impaired",
                    severity: "Most severe; life-threatening without treatment",
                    examples: [
                        {
                            name: "Severe Combined Immunodeficiency (SCID)",
                            nickname: "Bubble boy disease",
                            defect: "Multiple genetic causes; T and B cells absent or nonfunctional",
                            presentation: [
                                "Severe infections in first months of life",
                                "Failure to thrive",
                                "Persistent diarrhea",
                                "Opportunistic infections (PCP, candida, CMV)",
                                "Fatal without treatment"
                            ],
                            diagnosis: "Newborn screening (many states)",
                            treatment: "Hematopoietic stem cell transplant (HSCT); gene therapy (some types)",
                            prognosis: "Excellent if treated early; fatal if untreated"
                        }
                    ]
                },
                {
                    category: "Phagocyte Defects",
                    description: "Impaired neutrophil/macrophage function",
                    infections: "Bacterial (especially Staphylococcus), fungal (Aspergillus)",
                    examples: [
                        {
                            name: "Chronic Granulomatous Disease (CGD)",
                            defect: "Phagocytes can't kill certain bacteria/fungi",
                            presentation: "Recurrent infections, granulomas, abscesses",
                            treatment: "Prophylactic antibiotics/antifungals, interferon-gamma, HSCT"
                        }
                    ]
                },
                {
                    category: "Complement Deficiencies",
                    description: "Defects in complement proteins",
                    infections: "Encapsulated bacteria (especially Neisseria)",
                    examples: [
                        "Deficiency of C5-C9 (terminal complement): recurrent Neisseria infections"
                    ]
                }
            ]
        };

        const secondaryImmunodeficiency = {
            description: "Acquired immune dysfunction due to external factors",
            prevalence: "Much more common than primary",
            causes: [
                {
                    cause: "HIV/AIDS",
                    mechanism: "Virus destroys CD4+ T cells",
                    result: "Progressive immune dysfunction; opportunistic infections",
                    severity: "Most common cause of secondary immunodeficiency worldwide"
                },
                {
                    cause: "Malnutrition",
                    mechanism: "Protein-energy malnutrition impairs immune cell production/function",
                    populations: "Developing countries, elderly, chronic illness",
                    note: "Leading cause of immunodeficiency globally"
                },
                {
                    cause: "Medications",
                    types: {
                        immunosuppressants: "Corticosteroids, methotrexate, azathioprine (for autoimmune/transplant)",
                        chemotherapy: "Kills rapidly dividing cells including immune cells",
                        biologics: "Anti-TNF, anti-CD20 target specific immune pathways"
                    },
                    result: "Intentional immunosuppression for treatment; increased infection risk"
                },
                {
                    cause: "Cancer",
                    types: {
                        hematologic: "Leukemia, lymphoma, multiple myeloma directly affect immune cells",
                        solidTumors: "Can impair immune function",
                        chemotherapy: "Further suppresses immune system"
                    }
                },
                {
                    cause: "Chronic Diseases",
                    examples: {
                        diabetes: "Impairs neutrophil function, increases infection risk",
                        kidneyDisease: "Uremia affects immune cells",
                        liverDisease: "Impairs complement, antibody production",
                        splenectomy: "Loss of spleen increases risk of encapsulated bacterial infections"
                    }
                },
                {
                    cause: "Age",
                    types: {
                        infants: "Immature immune system; maternal antibodies wane at 6 months",
                        elderly: "Immunosenescence - declining immune function with age"
                    }
                },
                {
                    cause: "Burns/Trauma",
                    mechanism: "Loss of skin barrier; stress response; increased infection risk"
                },
                {
                    cause: "Alcoholism",
                    mechanism: "Impairs neutrophil function; malnutrition"
                }
            ]
        };

        const HIVAIDS = {
            pathogen: "Human Immunodeficiency Virus (retrovirus)",
            target: "CD4+ T cells (helper T cells)",
            mechanism: [
                "HIV binds to CD4 and CCR5/CXCR4 receptors",
                "Virus enters cell and reverse transcribes RNA to DNA",
                "Viral DNA integrates into host genome",
                "Virus replicates, destroying CD4+ cells",
                "Progressive CD4+ depletion leads to immunodeficiency"
            ],
            stages: [
                {
                    stage: "Acute HIV Infection",
                    timing: "2-4 weeks after exposure",
                    symptoms: "Flu-like (fever, rash, sore throat, swollen lymph nodes)",
                    viralLoad: "Very high (very contagious)",
                    CD4Count: "May drop temporarily",
                    antibodies: "Window period - tests may be negative"
                },
                {
                    stage: "Chronic HIV (Clinical Latency)",
                    timing: "Can last 10+ years without treatment",
                    symptoms: "Asymptomatic or mild",
                    viralLoad: "Lower but still replicating",
                    CD4Count: "Gradually declines",
                    contagious: "Yes, can transmit virus",
                    note: "Virus actively replicating; not truly 'latent'"
                },
                {
                    stage: "AIDS (Acquired Immunodeficiency Syndrome)",
                    criteria: "CD4+ count <200 cells/μL OR AIDS-defining opportunistic infection",
                    CD4Normal: "Normal is 500-1500 cells/μL",
                    symptoms: [
                        "Severe opportunistic infections",
                        "Certain cancers (Kaposi's sarcoma, lymphomas)",
                        "Wasting syndrome",
                        "Neurological complications"
                    ],
                    withoutTreatment: "Survival ~3 years after AIDS diagnosis"
                }
            ],
            opportunisticInfections: [
                {
                    name: "Pneumocystis jirovecii Pneumonia (PCP)",
                    CD4Threshold: "<200",
                    symptoms: "Dry cough, fever, shortness of breath",
                    prevention: "Trimethoprim-sulfamethoxazole prophylaxis"
                },
                {
                    name: "Toxoplasmosis",
                    CD4Threshold: "<100",
                    site: "Brain (encephalitis)",
                    symptoms: "Headache, confusion, seizures, focal deficits"
                },
                {
                    name: "Cytomegalovirus (CMV)",
                    CD4Threshold: "<50",
                    sites: "Retina (blindness), GI tract, lungs",
                    symptoms: "Vision loss, diarrhea"
                },
                {
                    name: "Mycobacterium avium Complex (MAC)",
                    CD4Threshold: "<50",
                    symptoms: "Fever, night sweats, weight loss, diarrhea"
                },
                {
                    name: "Candidiasis",
                    types: "Oral thrush, esophageal candidiasis",
                    common: "Very common in HIV"
                },
                {
                    name: "Cryptococcal Meningitis",
                    CD4Threshold: "<100",
                    symptoms: "Headache, fever, altered mental status"
                },
                {
                    name: "Progressive Multifocal Leukoencephalopathy (PML)",
                    cause: "JC virus",
                    symptoms: "Progressive neurological deficits",
                    prognosis: "Often fatal"
                }
            ],
            diagnosis: {
                screening: [
                    "4th generation HIV test: detects antibodies + p24 antigen (2-4 weeks post-exposure)",
                    "Rapid tests: antibody detection (results in 20 minutes)",
                    "Confirmatory: Western blot or HIV-1/HIV-2 differentiation"
                ],
                monitoring: [
                    "CD4+ count: assess immune status",
                    "Viral load (HIV RNA): measure virus in blood",
                    "Resistance testing: guide treatment selection"
                ]
            },
            treatment: {
                ART: {
                    fullName: "Antiretroviral Therapy",
                    goal: "Suppress viral replication to undetectable levels",
                    regimen: "Combination of ≥3 drugs from ≥2 classes",
                    classes: [
                        "NRTIs (nucleoside reverse transcriptase inhibitors)",
                        "NNRTIs (non-nucleoside reverse transcriptase inhibitors)",
                        "PIs (protease inhibitors)",
                        "INSTIs (integrase strand transfer inhibitors) - preferred",
                        "Entry inhibitors (CCR5 antagonists, fusion inhibitors)"
                    ],
                    whenToStart: "Immediately upon diagnosis (regardless of CD4 count)",
                    adherence: "Must take daily; >95% adherence needed",
                    effectiveness: "Viral suppression in >90%; CD4 recovery; near-normal lifespan"
                },
                UndetectableUntransmittable: {
                    meaning: "Undetectable = Untransmittable",
                    description: "People with undetectable viral load cannot transmit HIV sexually",
                    importance: "Revolutionary for HIV prevention and reducing stigma"
                },
                prophylaxis: {
                    PrEP: {
                        fullName: "Pre-Exposure Prophylaxis",
                        who: "HIV-negative people at high risk",
                        medications: "Tenofovir/emtricitabine (Truvada, Descovy)",
                        effectiveness: ">99% effective if taken consistently",
                        testing: "HIV test every 3 months"
                    },
                    PEP: {
                        fullName: "Post-Exposure Prophylaxis",
                        who: "After potential HIV exposure",
                        timing: "Must start within 72 hours (sooner is better)",
                        duration: "28 days of ART",
                        effectiveness: "Highly effective if started promptly"
                    }
                }
            },
            prevention: [
                "Safe sex (condoms)",
                "PrEP for high-risk individuals",
                "Test and treat (U=U)",
                "Clean needles for injection drug users",
                "Screen blood products",
                "Mother-to-child: ART during pregnancy, avoid breastfeeding in developed countries"
            ],
            globalImpact: {
                prevalence: "~38 million people living with HIV worldwide",
                newInfections: "~1.3 million/year",
                deaths: "~630,000/year (2022)",
                regions: "Sub-Saharan Africa most affected",
                progress: "New infections and deaths declining due to ART scale-up"
            }
        };

        const diagnosisOfImmunodeficiency = {
            clinicalSuspicion: {
                triggers: [
                    "Recurrent, severe, or unusual infections",
                    "Infections with opportunistic pathogens",
                    "Poor response to standard treatment",
                    "Family history of immunodeficiency or early deaths from infection"
                ]
            },
            laboratoryEvaluation: {
                initial: {
                    CBC: "White blood cell count and differential",
                    immunoglobulins: "IgG, IgA, IgM, IgE levels",
                    HIVTest: "Rule out HIV"
                },
                lymphocyteSubsets: {
                    flowCytometry: "Quantify T cells (CD3, CD4, CD8), B cells (CD19), NK cells (CD16/56)",
                    interpretation: "Identifies which immune cell populations affected"
                },
                antibodyFunction: {
                    vaccineResponse: "Measure antibodies to vaccines (tetanus, pneumococcus)",
                    isohemagglutinins: "Natural antibodies to blood group antigens"
                },
                cellFunction: {
                    lymphocyteProliferation: "T cell response to mitogens",
                    delayedHypersensitivity: "Skin testing (Candida, tetanus)"
                },
                phagocyteFunction: {
                    oxidativeBurst: "DHR test for chronic granulomatous disease",
                    chemotaxis: "Migration assays"
                },
                complementLevels: {
                    CH50: "Total complement activity",
                    individualComponents: "C3, C4, specific complement proteins"
                },
                geneticTesting: {
                    when: "Primary immunodeficiency suspected",
                    types: "Targeted gene sequencing, whole exome sequencing",
                    benefit: "Confirms diagnosis, guides treatment, family counseling"
                }
            }
        };

        const treatmentManagement = {
            primary: {
                immunoglobulinReplacement: {
                    indications: "Antibody deficiencies (XLA, CVID, etc.)",
                    types: {
                        IVIG: "Intravenous immunoglobulin - every 3-4 weeks in clinic",
                        SCIG: "Subcutaneous immunoglobulin - weekly at home"
                    },
                    source: "Pooled from thousands of donors",
                    contents: "IgG antibodies; provides passive immunity",
                    lifelong: "Required for life",
                    effectiveness: "Dramatically reduces infections"
                },
                hematopoieticStemCellTransplant: {
                    indications: "SCID, other severe T cell deficiencies",
                    procedure: "Replace defective immune system with donor stem cells",
                    donors: "Matched sibling (best), matched unrelated, haploidentical (half-matched parent)",
                    risks: "Graft-versus-host disease, infection during engraftment, mortality",
                    outcomes: "Curative for SCID if done early; >90% survival with matched donor"
                },
                geneTherapy: {
                    indications: "Some forms of SCID (ADA-SCID, X-SCID)",
                    procedure: "Correct genetic defect in patient's own stem cells",
                    status: "FDA-approved for some types; ongoing trials",
                    advantages: "No donor needed; no GVHD risk",
                    outcomes: "Promising; durable immune reconstitution"
                },
                enzymeReplacement: {
                    indication: "ADA-SCID (adenosine deaminase deficiency)",
                    medication: "PEG-ADA (weekly injections)",
                    effectiveness: "Restores some immune function; not curative"
                },
                prophylacticAntibiotics: {
                    indications: "Prevent bacterial infections in high-risk patients",
                    examples: "Trimethoprim-sulfamethoxazole for PCP prevention in T cell deficiencies"
                },
                avoidLiveVaccines: {
                    why: "Risk of vaccine-strain infection in immunocompromised",
                    examples: "MMR, varicella, rotavirus, live polio (OPV)"
                },
                immunizations: {
                    patient: "Inactivated vaccines safe and recommended",
                    householdContacts: "Should be fully vaccinated (including live vaccines)"
                }
            },
            secondary: {
                treatUnderlyingCause: [
                    "HIV: antiretroviral therapy",
                    "Malnutrition: nutritional support",
                    "Discontinue immunosuppressive medications if possible"
                ],
                prophylaxis: {
                    HIV: "Opportunistic infection prophylaxis based on CD4 count",
                    cancer: "Growth factors (G-CSF) to boost neutrophils after chemotherapy"
                },
                vaccinations: {
                    timing: "Before starting immunosuppression if possible",
                    types: "Inactivated vaccines; live vaccines contraindicated during immunosuppression"
                }
            }
        };

        const prognosisComplications = {
            withoutTreatment: {
                severe: "SCID fatal in first year",
                moderate: "Recurrent infections, chronic lung disease, failure to thrive",
                mild: "May have near-normal lifespan with frequent infections"
            },
            withTreatment: {
                SCID: "Excellent with early HSCT or gene therapy",
                antibodyDeficiencies: "Near-normal life with IVIG",
                HIV: "Near-normal lifespan with ART"
            },
            complications: [
                "Chronic lung disease from repeated infections",
                "Bronchiectasis",
                "Autoimmunity (paradoxically common in some PIDs)",
                "Lymphoma and other cancers",
                "Chronic viral infections (HPV, EBV)",
                "Poor growth and development"
            ],
            monitoring: {
                regular: "Ongoing assessment of immune function and infection history",
                labs: "Immunoglobulin levels, lymphocyte counts, infection surveillance",
                imaging: "Chest imaging for chronic lung disease",
                specialty: "Immunologist for management"
            }
        };

        return {
            topic: "Immunodeficiency Disorders",
            overview: immunodeficiencyOverview,
            primaryImmunodeficiency: primaryImmunodeficiency,
            secondaryImmunodeficiency: secondaryImmunodeficiency,
            HIVAIDS: HIVAIDS,
            diagnosis: diagnosisOfImmunodeficiency,
            treatment: treatmentManagement,
            prognosis: prognosisComplications,
            primaryVsSecondary: {
                criteria: ["Cause", "Timing", "Prevalence", "Examples", "Reversibility"],
                primary: ["Genetic", "Birth/childhood", "Rare", "SCID, CVID, XLA", "Not reversible"],
                secondary: ["Acquired", "Any age", "Common", "HIV, malnutrition, medications", "Often reversible"]
            },
            keyTakeaways: [
                "Primary immunodeficiency: genetic, rare, often diagnosed in childhood",
                "Secondary immunodeficiency: acquired, common, HIV most important worldwide",
                "Increased susceptibility to infections is hallmark",
                "SCID is medical emergency requiring immediate treatment",
                "HIV now manageable chronic disease with ART; U=U prevents transmission",
                "Treatment varies: IVIG for antibody deficiencies, HSCT for severe T cell defects, ART for HIV"
            ],
            category: 'immunodeficiency'
        };
    }

    // CONTENT GENERATION METHODS (following same pattern as cell biology)

    generateHealthContent(problem, content) {
        const contentSections = [];

        contentSections.push(this.generateOverviewSection(problem, content));

        // Generate content based on topic type
        if (content.branches) contentSections.push(this.generateBranchesContent(content));
        if (content.pathogens) contentSections.push(this.generatePathogensContent(content));
        if (content.vaccineTypes) contentSections.push(this.generateVaccineTypesContent(content));
        if (content.classes) contentSections.push(this.generateAntibodyClassesContent(content));
        if (content.diseaseClassifications) contentSections.push(this.generateDiseaseClassificationsContent(content));
        if (content.innateResponse || content.adaptiveResponse) contentSections.push(this.generateImmuneResponseContent(content));
        if (content.types) contentSections.push(this.generateWBCTypesContent(content));
        if (content.classicSigns) contentSections.push(this.generateInflammationContent(content));
        if (content.diseases) contentSections.push(this.generateAutoimmuneDiseasesContent(content));
        if (content.hypersensitivityTypes) contentSections.push(this.generateHypersensitivityContent(content));
        if (content.transmission) contentSections.push(this.generateTransmissionContent(content));
        if (content.primaryImmunodeficiency || content.HIVAIDS) contentSections.push(this.generateImmunodeficiencyContent(content));

        if (content.comparisonTable || content.comparison) {
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
            description: content.description || content.summary || content.overview?.description || `Overview of ${content.topic}`,
            keyPoints: this.extractKeyPoints(content),
            relevance: this.getTopicRelevance(problem.type)
        };
    }

    generateBranchesContent(content) {
        return {
            sectionType: 'immune_branches',
            title: 'Immune System Branches',
            branches: content.branches.map(branch => ({
                name: branch.name,
                description: branch.description,
                characteristics: branch.characteristics,
                components: branch.components,
                mechanisms: branch.mechanisms
            }))
        };
    }

    generatePathogensContent(content) {
        return {
            sectionType: 'pathogens_list',
            title: 'Pathogen Types',
            pathogens: content.pathogens,
            comparisonTable: content.comparisonTable
        };
    }

    generateVaccineTypesContent(content) {
        return {
            sectionType: 'vaccine_types',
            title: 'Types of Vaccines',
            types: content.vaccineTypes,
            howVaccinesWork: content.howVaccinesWork
        };
    }

generateAntibodyClassesContent(content) {
        return {
            sectionType: 'antibody_classes',
            title: 'Antibody Classes',
            classes: content.classes,
            structure: content.structure,
            functions: content.functions
        };
    }

    generateDiseaseClassificationsContent(content) {
        return {
            sectionType: 'disease_classifications',
            title: 'Disease Classifications',
            classifications: content.diseaseClassifications,
            diseaseProcess: content.diseaseProcess
        };
    }

    generateImmuneResponseContent(content) {
        return {
            sectionType: 'immune_response_detail',
            title: 'Immune Response Mechanisms',
            innate: content.innateResponse,
            adaptive: content.adaptiveResponse,
            primaryVsSecondary: content.primaryVsSecondaryResponse
        };
    }

    generateWBCTypesContent(content) {
        return {
            sectionType: 'wbc_types',
            title: 'White Blood Cell Types',
            types: content.types,
            differential: content.differential
        };
    }

    generateInflammationContent(content) {
        return {
            sectionType: 'inflammation_detail',
            title: 'Inflammatory Process',
            signs: content.classicSigns,
            process: content.process,
            mediators: content.mediators
        };
    }

    generateAutoimmuneDiseasesContent(content) {
        return {
            sectionType: 'autoimmune_diseases',
            title: 'Autoimmune Disorders',
            mechanisms: content.mechanisms,
            diseases: content.diseases,
            treatment: content.treatment
        };
    }

    generateHypersensitivityContent(content) {
        return {
            sectionType: 'hypersensitivity_types',
            title: 'Hypersensitivity Reactions',
            types: content.hypersensitivityTypes,
            allergens: content.allergens,
            conditions: content.conditions
        };
    }

    generateTransmissionContent(content) {
        return {
            sectionType: 'disease_transmission',
            title: 'Disease Transmission',
            modes: content.transmission,
            prevention: content.prevention
        };
    }

    generateImmunodeficiencyContent(content) {
        return {
            sectionType: 'immunodeficiency_detail',
            title: 'Immunodeficiency Disorders',
            primary: content.primaryImmunodeficiency,
            secondary: content.secondaryImmunodeficiency,
            HIVAIDS: content.HIVAIDS
        };
    }

    // Continue with same helper methods as cell biology class...
    
    extractKeyPoints(content) {
        const keyPoints = [];

        if (content.concepts) keyPoints.push(...content.concepts);
        if (content.keyDefinitions) keyPoints.push(...Object.keys(content.keyDefinitions));
        if (content.mainCategories) keyPoints.push(...content.mainCategories);
        if (content.keyTakeaways) keyPoints.push(...content.keyTakeaways);
        if (content.keyPrinciples) keyPoints.push(...content.keyPrinciples);

        return keyPoints.slice(0, 5);
    }

    getTopicRelevance(topicType) {
        const relevance = {
            immune_system: "Understanding immune system is fundamental to health and disease prevention",
            pathogens: "Knowledge of pathogens is essential for infection control and treatment",
            vaccines: "Vaccines are one of the most effective public health interventions",
            antibodies: "Antibodies are crucial components of adaptive immunity",
            diseases: "Understanding disease mechanisms enables effective prevention and treatment",
            immune_response: "Immune responses protect against infection and disease",
            white_blood_cells: "WBCs are the cellular components of immune defense",
            inflammation: "Inflammation is a key protective response but can cause disease",
            autoimmune_disorders: "Autoimmune diseases result from immune system dysfunction",
            allergies: "Allergies represent inappropriate immune responses to harmless substances",
            infectious_diseases: "Infectious diseases remain major causes of morbidity and mortality",
            immunodeficiency: "Immunodeficiency increases susceptibility to serious infections"
        };

        return relevance[topicType] || "Important health and immunology concept";
    }

    // Same workbook generation pattern
    generateHealthWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createHealthProblemSection(),
            this.createContentOverviewSection(),
            this.createDetailedContentSection(),
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
            title: `Health, Disease & Immunology Workbook: ${this.currentContent?.topic || 'Topic'}`,
            created: new Date().toISOString(),
            theme: this.theme,
            sections: []
        };
    }

    createHealthProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.healthTopics[this.currentProblem.type]?.category || 'N/A']
            ]
        };
    }

    // Continue with same methods as cell biology (createContentOverviewSection, etc.)
    // All other utility methods follow same pattern...

    // DIAGRAM GENERATION
    generateHealthDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        this.diagramData = {
            type: type,
            diagrams: this.getRelevantHealthDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual health/immunology diagrams"
        };
    }

    getRelevantHealthDiagrams(topicType) {
        const diagramMap = {
            immune_system: ["innate_immunity", "adaptive_immunity", "lymphoid_organs", "immune_cells"],
            pathogens: ["bacteria_structure", "virus_structure", "pathogen_comparison"],
            vaccines: ["vaccine_mechanism", "immunization_schedule", "herd_immunity"],
            antibodies: ["antibody_structure", "antibody_classes", "antibody_functions"],
            immune_response: ["primary_vs_secondary", "clonal_selection", "immune_response_timeline"],
            white_blood_cells: ["wbc_types", "phagocytosis", "lymphocyte_activation"],
            inflammation: ["inflammatory_process", "acute_vs_chronic", "mediators"],
            autoimmune_disorders: ["autoimmunity_mechanisms", "self_tolerance_breakdown"],
            allergies: ["allergic_response", "mast_cell_degranulation", "hypersensitivity_types"],
            infectious_diseases: ["transmission_routes", "disease_progression", "epidemic_curve"],
            immunodeficiency: ["immune_defects", "HIV_lifecycle", "opportunistic_infections"]
        };

        return diagramMap[topicType] || [];
    }

    // Include all helper methods from cell biology class
    assessContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        const simpleTopics = ['pathogens', 'vaccines'];
        if (simpleTopics.includes(this.currentProblem.type)) {
            difficultyScore += 1;
        }

        const intermediateTopics = ['immune_system', 'antibodies', 'white_blood_cells', 'inflammation', 'diseases'];
        if (intermediateTopics.includes(this.currentProblem.type)) {
            difficultyScore += 2;
        }

        const complexTopics = ['immune_response', 'autoimmune_disorders', 'allergies', 'infectious_diseases', 'immunodeficiency'];
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
            immune_system: [
                "Distinguish between innate and adaptive immunity",
                "Identify major immune system organs and cells",
                "Explain how immune system recognizes and eliminates pathogens",
                "Describe immunological memory and its importance"
            ],
            pathogens: [
                "Classify major types of pathogens",
                "Compare characteristics of bacteria, viruses, fungi, and parasites",
                "Explain how different pathogens cause disease",
                "Describe transmission routes of infectious agents"
            ],
            vaccines: [
                "Explain how vaccines work to generate immunity",
                "Compare different types of vaccines",
                "Understand vaccine schedules and booster requirements",
                "Describe herd immunity and its importance"
            ],
            antibodies: [
                "Describe antibody structure and function",
                "Distinguish between five antibody classes",
                "Explain how antibodies neutralize and eliminate pathogens",
                "Understand antibody production and memory"
            ],
            diseases: [
                "Classify diseases by etiology and characteristics",
                "Distinguish infectious from non-infectious diseases",
                "Explain disease progression and stages",
                "Understand prevention and treatment strategies"
            ],
            immune_response: [
                "Describe stages of immune response",
                "Compare primary and secondary responses",
                "Explain immunological memory",
                "Understand coordination between innate and adaptive immunity"
            ],
            white_blood_cells: [
                "Identify major types of white blood cells",
                "Describe functions of each WBC type",
                "Interpret WBC differential results",
                "Explain phagocytosis and antigen presentation"
            ],
            inflammation: [
                "Describe the inflammatory process and its purpose",
                "Identify classic signs of inflammation",
                "Compare acute and chronic inflammation",
                "Explain inflammatory mediators and their effects"
            ],
            autoimmune_disorders: [
                "Explain mechanisms of autoimmunity",
                "Distinguish organ-specific from systemic autoimmune diseases",
                "Describe common autoimmune disorders",
                "Understand treatment approaches for autoimmunity"
            ],
            allergies: [
                "Explain allergic sensitization and response",
                "Distinguish four types of hypersensitivity",
                "Identify common allergens and allergic conditions",
                "Describe allergy diagnosis and treatment options"
            ],
            infectious_diseases: [
                "Identify major infectious diseases and their causes",
                "Explain disease transmission modes",
                "Understand epidemiological terms and concepts",
                "Describe prevention strategies for infectious diseases"
            ],
            immunodeficiency: [
                "Distinguish primary from secondary immunodeficiency",
                "Explain HIV/AIDS pathogenesis and progression",
                "Understand consequences of immunodeficiency",
                "Describe treatment options for immunodeficiency disorders"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand key concepts of this health topic",
            "Apply knowledge to health and disease contexts",
            "Make connections to broader immunological principles"
        ];
    }

    identifyPrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            immune_system: [
                "Basic understanding of cells and tissues",
                "Knowledge of body systems"
            ],
            pathogens: [
                "Basic biology (cells, microorganisms)",
                "Understanding of infection and disease"
            ],
            vaccines: [
                "Basic knowledge of immune system",
                "Understanding of antibodies and immunity"
            ],
            antibodies: [
                "Understanding of proteins",
                "Basic immune system knowledge",
                "Knowledge of B cells"
            ],
            diseases: [
                "Basic anatomy and physiology",
                "Understanding of health and illness"
            ],
            immune_response: [
                "Immune system components (cells, organs)",
                "Basic understanding of innate and adaptive immunity"
            ],
            white_blood_cells: [
                "Basic cell biology",
                "Understanding of blood",
                "Knowledge of immune system basics"
            ],
            inflammation: [
                "Basic immune system knowledge",
                "Understanding of cellular responses"
            ],
            autoimmune_disorders: [
                "Immune system function",
                "Self-tolerance concept",
                "Antibodies and T cells"
            ],
            allergies: [
                "Immune system basics",
                "Antibodies (especially IgE)",
                "Mast cells and histamine"
            ],
            infectious_diseases: [
                "Pathogen types",
                "Basic microbiology",
                "Immune system responses"
            ],
            immunodeficiency: [
                "Immune system components and functions",
                "Understanding of infections",
                "Knowledge of lymphocytes"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || [
            "General health and biology background"
        ];
    }

    generateStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            immune_system: [
                "Create comparison tables for innate vs adaptive immunity",
                "Draw and label immune system organs and circulation",
                "Use analogies (military defense) to understand immune responses",
                "Make flashcards for immune cell types and functions"
            ],
            pathogens: [
                "Create comparison charts for pathogen types",
                "Use memory devices for distinguishing bacteria from viruses",
                "Practice identifying pathogens by their characteristics",
                "Study disease examples for each pathogen type"
            ],
            vaccines: [
                "Create a vaccine type comparison table",
                "Understand the 'why' behind vaccine schedules",
                "Draw the mechanism of how vaccines create immunity",
                "Connect vaccine types to specific diseases"
            ],
            antibodies: [
                "Draw antibody structure from memory",
                "Create a table comparing 5 antibody classes",
                "Use acronyms to remember antibody functions (MEDAG for classes)",
                "Practice relating structure to function"
            ],
            diseases: [
                "Organize diseases by classification system",
                "Create disease cards with key features",
                "Use concept maps to connect related diseases",
                "Focus on understanding pathogenesis, not just memorizing"
            ],
            immune_response: [
                "Draw timeline of immune response stages",
                "Create flowcharts showing cell interactions",
                "Compare primary vs secondary response side-by-side",
                "Use animations/videos to visualize dynamic processes"
            ],
            white_blood_cells: [
                "Create WBC comparison table with functions",
                "Use percentages to remember relative abundances",
                "Practice interpreting CBC results",
                "Connect each WBC type to specific diseases"
            ],
            inflammation: [
                "Memorize classic signs using Latin terms",
                "Draw inflammatory process step-by-step",
                "Create mediator function table",
                "Compare acute vs chronic in all aspects"
            ],
            autoimmune_disorders: [
                "Group diseases by organ-specific vs systemic",
                "Create disease profiles with key features",
                "Understand mechanisms before memorizing diseases",
                "Use real patient cases to solidify learning"
            ],
            allergies: [
                "Memorize 4 hypersensitivity types with examples",
                "Draw allergic response mechanism",
                "Create common allergen lists by category",
                "Practice distinguishing true allergy from intolerance"
            ],
            infectious_diseases: [
                "Organize by pathogen type and transmission",
                "Create disease cards with epidemiology",
                "Use maps to visualize endemic regions",
                "Focus on prevention as much as treatment"
            ],
            immunodeficiency: [
                "Create clear primary vs secondary comparison",
                "Draw HIV lifecycle and progression",
                "Connect immune defects to infection types",
                "Use case studies to understand clinical presentation"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Review material regularly",
            "Create visual aids and diagrams",
            "Practice active recall",
            "Relate concepts to clinical examples"
        ];
    }

    generateAssessmentQuestions() {
        if (!this.currentProblem) return [];

        const questionsDatabase = {
            immune_system: [
                {
                    question: "What is the main difference between innate and adaptive immunity?",
                    type: "comparison",
                    difficulty: "easy"
                },
                {
                    question: "Explain why adaptive immunity takes longer but provides better protection than innate immunity.",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "How do dendritic cells bridge innate and adaptive immunity?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            pathogens: [
                {
                    question: "What are the four main types of pathogens?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Why are antibiotics ineffective against viral infections?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Compare the replication strategies of bacteria and viruses.",
                    type: "comparison",
                    difficulty: "hard"
                }
            ],
            vaccines: [
                {
                    question: "How do vaccines provide immunity without causing disease?",
                    type: "explanation",
                    difficulty: "easy"
                },
                {
                    question: "Compare live attenuated and inactivated vaccines.",
                    type: "comparison",
                    difficulty: "medium"
                },
                {
                    question: "Why is herd immunity important for public health?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            antibodies: [
                {
                    question: "What are the five classes of antibodies?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Why is IgM the first antibody produced in an infection?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "How does antibody structure enable specific antigen recognition?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ]
        };

        return questionsDatabase[this.currentProblem.type] || [
            {
                question: "What are the main concepts of this topic?",
                type: "recall",
                difficulty: "easy"
            }
        ];
    }

    suggestRelatedTopics() {
        if (!this.currentProblem) return [];

        const relatedTopicsMap = {
            immune_system: ['white_blood_cells', 'immune_response', 'antibodies', 'vaccines'],
            pathogens: ['infectious_diseases', 'immune_response', 'vaccines'],
            vaccines: ['immune_system', 'antibodies', 'immune_response', 'infectious_diseases'],
            antibodies: ['immune_system', 'immune_response', 'vaccines', 'allergies'],
            diseases: ['infectious_diseases', 'pathogens', 'immune_response'],
            immune_response: ['immune_system', 'white_blood_cells', 'inflammation', 'antibodies'],
            white_blood_cells: ['immune_system', 'immune_response', 'inflammation'],
            inflammation: ['immune_response', 'autoimmune_disorders', 'allergies'],
            autoimmune_disorders: ['immune_system', 'inflammation', 'immune_response'],
            allergies: ['antibodies', 'inflammation', 'immune_response'],
            infectious_diseases: ['pathogens', 'immune_response', 'vaccines'],
            immunodeficiency: ['immune_system', 'white_blood_cells', 'infectious_diseases']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];
        
        return relatedTypes.map(type => ({
            type: type,
            name: this.healthTopics[type]?.name,
            description: this.healthTopics[type]?.description
        }));
    }

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        if (this.currentContent.keyDefinitions) {
            Object.assign(glossary, this.currentContent.keyDefinitions);
        }

        if (this.currentContent.branches) {
            this.currentContent.branches.forEach(branch => {
                glossary[branch.name] = branch.description;
            });
        }

        if (this.currentContent.pathogens) {
            this.currentContent.pathogens.forEach(pathogen => {
                glossary[pathogen.name] = pathogen.classification;
            });
        }

        if (this.currentContent.diseases) {
            this.currentContent.diseases.forEach(disease => {
                glossary[disease.name] = disease.description || disease.target;
            });
        }

        return glossary;
    }

    generateProcessTimeline(processName) {
        const timelines = {
            'Immune Response': [
                { phase: 'Recognition', timing: 'Immediate', events: 'Pathogen detected by pattern recognition receptors' },
                { phase: 'Innate Response', timing: 'Minutes-Hours', events: 'Inflammation, phagocytes recruited' },
                { phase: 'Adaptive Activation', timing: '1-3 Days', events: 'Dendritic cells activate T cells in lymph nodes' },
                { phase: 'Clonal Expansion', timing: '3-7 Days', events: 'Lymphocytes multiply rapidly' },
                { phase: 'Effector Phase', timing: '7-14 Days', events: 'Antibodies produced, cytotoxic T cells kill infected cells' },
                { phase: 'Resolution', timing: '14+ Days', events: 'Pathogen eliminated, memory cells formed' }
            ],
            'HIV Progression': [
                { stage: 'Acute Infection', timing: '2-4 weeks', CD4: 'Drops temporarily', viral_load: 'Very high' },
                { stage: 'Chronic/Latency', timing: 'Years', CD4: 'Gradual decline', viral_load: 'Lower but replicating' },
                { stage: 'AIDS', timing: 'Variable', CD4: '<200', viral_load: 'High, opportunistic infections' }
            ],
            'Allergic Response': [
                { step: 'Sensitization', timing: 'First exposure', event: 'IgE produced and binds to mast cells' },
                { step: 'Re-exposure', timing: 'Subsequent exposures', event: 'Allergen cross-links IgE' },
                { step: 'Degranulation', timing: 'Minutes', event: 'Mast cells release histamine' },
                { step: 'Symptoms', timing: 'Minutes-Hours', event: 'Allergic symptoms appear' }
            ],
            'Inflammation': [
                { stage: 'Initiation', timing: 'Immediate', events: 'Tissue damage, mast cell activation' },
                { stage: 'Vascular Changes', timing: 'Minutes', events: 'Vasodilation, increased permeability' },
                { stage: 'Cell Recruitment', timing: 'Hours', events: 'Neutrophils migrate to site' },
                { stage: 'Effector Phase', timing: 'Hours-Days', events: 'Phagocytosis, pathogen elimination' },
                { stage: 'Resolution', timing: 'Days-Weeks', events: 'Anti-inflammatory signals, tissue repair' }
            ],
            'Vaccine Response': [
                { phase: 'Administration', timing: 'Day 0', event: 'Vaccine administered' },
                { phase: 'Antigen Processing', timing: '1-2 days', event: 'APCs process vaccine antigens' },
                { phase: 'Lymphocyte Activation', timing: '3-5 days', event: 'T and B cells activated' },
                { phase: 'Clonal Expansion', timing: '5-10 days', event: 'Antibody production begins' },
                { phase: 'Peak Response', timing: '2-3 weeks', event: 'Maximum antibody levels' },
                { phase: 'Memory Formation', timing: '3-4 weeks', event: 'Long-lived memory cells established' }
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

        if (this.currentContent.branches) {
            hierarchy.children.push({
                name: 'Immune Branches',
                type: 'section',
                count: this.currentContent.branches.length
            });
        }

        if (this.currentContent.pathogens) {
            hierarchy.children.push({
                name: 'Pathogen Types',
                type: 'section',
                count: this.currentContent.pathogens.length
            });
        }

        if (this.currentContent.diseases) {
            hierarchy.children.push({
                name: 'Diseases',
                type: 'section',
                count: this.currentContent.diseases.length
            });
        }

        return hierarchy;
    }

    // Additional helper methods following same pattern as cell biology

    createContentOverviewSection() {
        if (!this.currentContent) return null;

        const overviewData = [
            ['Topic', this.currentContent.topic],
            ['Category', this.currentContent.category]
        ];

        if (this.currentContent.summary) {
            overviewData.push(['Summary', this.currentContent.summary]);
        }

        if (this.currentContent.definition) {
            overviewData.push(['Definition', this.currentContent.definition]);
        }

        if (this.currentContent.overview?.description) {
            overviewData.push(['Description', this.currentContent.overview.description]);
        }

        if (this.currentContent.mainCategories) {
            overviewData.push(['Main Categories', this.currentContent.mainCategories.join('; ')]);
        }

        return {
            title: 'Content Overview',
            type: 'overview',
            data: overviewData
        };
    }

    createDetailedContentSection() {
        if (!this.currentContent) return null;

        const contentData = [];

        // Add content based on what's available
        if (this.currentContent.branches) {
            this.currentContent.branches.forEach(branch => {
                contentData.push([branch.name, '']);
                contentData.push(['Description', branch.description]);
                if (branch.characteristics) {
                    contentData.push(['Characteristics', Array.isArray(branch.characteristics) ? 
                        branch.characteristics.join('; ') : branch.characteristics]);
                }
                contentData.push(['', '']);
            });
        }

        if (this.currentContent.pathogens) {
            this.currentContent.pathogens.forEach(pathogen => {
                contentData.push([pathogen.name, '']);
                contentData.push(['Classification', pathogen.classification]);
                if (pathogen.characteristics) {
                    contentData.push(['Characteristics', Array.isArray(pathogen.characteristics) ?
                        pathogen.characteristics.join('; ') : JSON.stringify(pathogen.characteristics)]);
                }
                if (pathogen.diseaseExamples) {
                    contentData.push(['Disease Examples', pathogen.diseaseExamples.join('; ')]);
                }
                contentData.push(['', '']);
            });
        }

        if (this.currentContent.diseases) {
            this.currentContent.diseases.forEach(disease => {
                contentData.push([disease.name, '']);
                if (disease.target) contentData.push(['Target', disease.target]);
                if (disease.mechanism) contentData.push(['Mechanism', disease.mechanism]);
                if (disease.symptoms) {
                    contentData.push(['Symptoms', Array.isArray(disease.symptoms) ?
                        disease.symptoms.join('; ') : disease.symptoms]);
                }
                contentData.push(['', '']);
            });
        }

        return contentData.length > 0 ? {
            title: 'Detailed Content',
            type: 'detailed_content',
            data: contentData
        } : null;
    }

    createComparisonsSection() {
        const comparisons = this.currentContent?.comparisons || this.currentContent?.comparison;
        if (!comparisons) return null;

        const comparisonData = [];

        Object.entries(comparisons).forEach(([comparisonName, comparisonContent]) => {
            comparisonData.push([comparisonName.toUpperCase(), '']);
            
            if (typeof comparisonContent === 'object') {
                Object.entries(comparisonContent).forEach(([key, value]) => {
                    if (typeof value === 'string') {
                        comparisonData.push([key, value]);
                    } else if (Array.isArray(value)) {
                        comparisonData.push([key, value.join(', ')]);
                    } else if (typeof value === 'object') {
                        comparisonData.push([key, JSON.stringify(value)]);
                    }
                });
            }
            
            comparisonData.push(['', '']);
        });

        return {
            title: 'Comparisons and Contrasts',
            type: 'comparisons',
            data: comparisonData
        };
    }

    createExamplesApplicationsSection() {
        if (!this.currentContent.examples && !this.currentContent.applications) return null;

        const data = [];

        if (this.currentContent.examples) {
            data.push(['EXAMPLES', '']);
            if (Array.isArray(this.currentContent.examples)) {
                this.currentContent.examples.forEach(example => {
                    if (typeof example === 'string') {
                        data.push(['•', example]);
                    } else if (typeof example === 'object') {
                        data.push([example.name || 'Example', '']);
                        Object.entries(example).forEach(([key, value]) => {
                            if (key !== 'name') {
                                data.push([`  ${key}`, Array.isArray(value) ? value.join(', ') : value]);
                            }
                        });
                    }
                });
            }
            data.push(['', '']);
        }

        if (this.currentContent.applications) {
            data.push(['APPLICATIONS', '']);
            if (Array.isArray(this.currentContent.applications)) {
                this.currentContent.applications.forEach(app => {
                    data.push(['•', app]);
                });
            }
        }

        return data.length > 0 ? {
            title: 'Examples and Applications',
            type: 'examples_applications',
            data: data
        } : null;
    }

createMisconceptionsSection() {
        if (!this.includeCommonMisconceptions) return null;

        const misconceptions = this.commonMisconceptions[this.currentProblem.type];
        if (!misconceptions) return null;

        const data = [['Common Misconception', 'Clarification']];

        Object.entries(misconceptions).forEach(([category, miscList]) => {
            data.push(['', '']);
            data.push([category.toUpperCase(), '']);
            miscList.forEach(misc => {
                data.push(['•', misc]);
            });
        });

        return {
            title: 'Common Misconceptions',
            type: 'misconceptions',
            data: data
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const lesson = this.lessons[this.currentProblem.type];
        if (!lesson) return null;

        const data = [
            ['Lesson Title', lesson.title],
            ['', ''],
            ['KEY CONCEPTS', '']
        ];

        if (lesson.concepts) {
            lesson.concepts.forEach(concept => {
                data.push(['•', concept]);
            });
        }

        if (lesson.theory) {
            data.push(['', '']);
            data.push(['THEORY', lesson.theory]);
        }

        if (lesson.keyDefinitions) {
            data.push(['', '']);
            data.push(['KEY DEFINITIONS', '']);
            Object.entries(lesson.keyDefinitions).forEach(([term, definition]) => {
                data.push([term, definition]);
            });
        }

        if (lesson.mainCategories) {
            data.push(['', '']);
            data.push(['MAIN CATEGORIES', '']);
            lesson.mainCategories.forEach(cat => {
                data.push(['•', cat]);
            });
        }

        if (lesson.applications) {
            data.push(['', '']);
            data.push(['APPLICATIONS', '']);
            lesson.applications.forEach(app => {
                data.push(['•', app]);
            });
        }

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: data
        };
    }

    createDiagramReferencesSection() {
        if (!this.diagramData || !this.includeVisualizations) return null;

        const data = [
            ['Topic', this.diagramData.type],
            ['Diagram Status', this.diagramData.placeholder ? 'Placeholder (to be implemented)' : 'Available'],
            ['', ''],
            ['RELEVANT DIAGRAMS', '']
        ];

        if (this.diagramData.diagrams) {
            this.diagramData.diagrams.forEach(diagram => {
                data.push(['•', diagram]);
            });
        }

        if (this.diagramData.note) {
            data.push(['', '']);
            data.push(['Note', this.diagramData.note]);
        }

        return {
            title: 'Diagram References',
            type: 'diagrams',
            data: data
        };
    }

    // Utility methods
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

    calculateContentCompleteness() {
        if (!this.currentContent) return 0;

        let score = 0;
        const maxScore = 10;

        if (this.currentContent.topic) score += 1;
        if (this.currentContent.description || this.currentContent.summary || this.currentContent.overview) score += 1;
        if (this.currentContent.examples) score += 1;
        if (this.currentContent.applications) score += 1;
        if (this.currentContent.comparisons || this.currentContent.comparison) score += 1;
        
        const hasMainContent = 
            this.currentContent.branches ||
            this.currentContent.pathogens ||
            this.currentContent.diseases ||
            this.currentContent.classes ||
            this.currentContent.types;
        if (hasMainContent) score += 3;

        if (this.currentContent.diagnosis || this.currentContent.treatment) score += 1;
        if (this.currentContent.prevention) score += 1;

        return Math.round((score / maxScore) * 100);
    }

    getContentQualityMetrics() {
        return {
            completeness: this.calculateContentCompleteness(),
            hasExamples: !!this.currentContent?.examples,
            hasComparisons: !!(this.currentContent?.comparisons || this.currentContent?.comparison),
            hasApplications: !!this.currentContent?.applications,
            detailLevel: this.explanationLevel,
            includesVisualizations: this.includeVisualizations,
            includesMisconceptions: this.includeCommonMisconceptions
        };
    }

    getAvailableTopics() {
        return Object.entries(this.healthTopics).map(([key, topic]) => ({
            id: key,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
    }

    getTopicDetails(topicId) {
        const topic = this.healthTopics[topicId];
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

    formatMedicalTerm(term) {
        return term
            .replace(/HIV/g, this.medicalSymbols.HIV)
            .replace(/AIDS/g, this.medicalSymbols.AIDS)
            .replace(/IgG/g, this.medicalSymbols.IgG)
            .replace(/IgM/g, this.medicalSymbols.IgM)
            .replace(/IgA/g, this.medicalSymbols.IgA)
            .replace(/IgE/g, this.medicalSymbols.IgE)
            .replace(/CD4/g, this.medicalSymbols.CD4)
            .replace(/CD8/g, this.medicalSymbols.CD8);
    }
}

// Export the class
export default EnhancedHealthDiseaseImmunologyWorkbook;
