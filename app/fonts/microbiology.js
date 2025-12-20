
// Enhanced Microbiology Workbook - Comprehensive Microbiology Content System
import * as math from 'mathjs';

export class EnhancedMicrobiologyWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "microbiological";
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

        this.microbiologicalSymbols = this.initializeMicrobiologicalSymbols();
        this.setThemeColors();
        this.initializeMicrobiologyTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializeMicrobiologyLessons();
    }

    setThemeColors() {
        const themes = {
            microbiological: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
                headerBg: '#1565c0',
                headerText: '#ffffff',
                sectionBg: '#bbdefb',
                sectionText: '#0d47a1',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e3f2fd',
                resultText: '#1565c0',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#e8eaf6',
                stepText: '#311b92',
                borderColor: '#42a5f5',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#fff9c4'
            },
            scientific: {
                background: '#f8f9fa',
                gridColor: '#4682b4',
                headerBg: '#00695c',
                headerText: '#ffffff',
                sectionBg: '#b2dfdb',
                sectionText: '#004d40',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e0f2f1',
                resultText: '#00695c',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#4db6ac',
                contentBg: '#fce4ec',
                contentText: '#880e4f',
                diagramBg: '#e8eaf6',
                structureBg: '#ffe0b2'
            }
        };

        this.colors = themes[this.theme] || themes.microbiological;
    }

    initializeMicrobiologicalSymbols() {
        return {
            // Common microbiological symbols
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
            // Microbiological notation
            'ATP': 'ATP',
            'ADP': 'ADP',
            'NADH': 'NADH',
            'FADH2': 'FADH₂',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'H2O': 'H₂O',
            'glucose': 'C₆H₁₂O₆',
            'DNA': 'DNA',
            'RNA': 'RNA',
            'mRNA': 'mRNA',
            'tRNA': 'tRNA',
            'rRNA': 'rRNA',
            'pH': 'pH',
            'log': 'log₁₀'
        };
    }

    initializeMicrobiologyTopics() {
        this.microbiologyTopics = {
            // 1. Bacteria
            bacteria: {
                patterns: [
                    /bacteri/i,
                    /prokaryote.*structure/i,
                    /bacterial.*cell/i,
                    /gram.*stain/i,
                    /bacterial.*classification/i
                ],
                handler: this.handleBacteria.bind(this),
                name: 'Bacteria',
                category: 'prokaryotes',
                description: 'Prokaryotic microorganisms with diverse structures and functions'
            },

            // 2. Viruses
            viruses: {
                patterns: [
                    /virus|viral/i,
                    /bacteriophage/i,
                    /viral.*replication/i,
                    /virus.*structure/i
                ],
                handler: this.handleViruses.bind(this),
                name: 'Viruses',
                category: 'acellular',
                description: 'Acellular infectious agents requiring host cells for replication'
            },

            // 3. Fungi
            fungi: {
                patterns: [
                    /fung/i,
                    /yeast|mold/i,
                    /mycology/i,
                    /fungal.*infection/i
                ],
                handler: this.handleFungi.bind(this),
                name: 'Fungi',
                category: 'eukaryotes',
                description: 'Eukaryotic organisms including yeasts, molds, and mushrooms'
            },

            // 4. Protists
            protists: {
                patterns: [
                    /protist|protozoa/i,
                    /amoeba|paramecium/i,
                    /algae/i,
                    /parasitic.*protist/i
                ],
                handler: this.handleProtists.bind(this),
                name: 'Protists',
                category: 'eukaryotes',
                description: 'Diverse group of eukaryotic microorganisms'
            },

            // 5. Microbial Growth
            microbial_growth: {
                patterns: [
                    /microbial.*growth/i,
                    /bacterial.*growth.*curve/i,
                    /generation.*time/i,
                    /growth.*phase/i
                ],
                handler: this.handleMicrobialGrowth.bind(this),
                name: 'Microbial Growth',
                category: 'physiology',
                description: 'Patterns and requirements for microbial reproduction'
            },

            // 6. Microbial Metabolism
            microbial_metabolism: {
                patterns: [
                    /microbial.*metabolism/i,
                    /fermentation|respiration/i,
                    /metabolic.*pathway/i,
                    /autotroph|heterotroph/i
                ],
                handler: this.handleMicrobialMetabolism.bind(this),
                name: 'Microbial Metabolism',
                category: 'physiology',
                description: 'Energy production and utilization in microorganisms'
            },

            // 7. Microbial Genetics
            microbial_genetics: {
                patterns: [
                    /microbial.*genetics/i,
                    /bacterial.*DNA/i,
                    /plasmid|transposon/i,
                    /horizontal.*gene.*transfer/i,
                    /conjugation|transformation|transduction/i
                ],
                handler: this.handleMicrobialGenetics.bind(this),
                name: 'Microbial Genetics',
                category: 'genetics',
                description: 'Genetic mechanisms and variation in microorganisms'
            },

            // 8. Microbial Control
            microbial_control: {
                patterns: [
                    /sterilization|disinfection/i,
                    /antimicrobial|antibiotic/i,
                    /microbial.*control/i,
                    /antiseptic/i
                ],
                handler: this.handleMicrobialControl.bind(this),
                name: 'Microbial Control',
                category: 'applied',
                description: 'Methods to eliminate or inhibit microorganisms'
            },

            // 9. Pathogenic Microbes
            pathogenic_microbes: {
                patterns: [
                    /pathogen/i,
                    /disease.*causing/i,
                    /virulence|infection/i,
                    /infectious.*disease/i
                ],
                handler: this.handlePathogenicMicrobes.bind(this),
                name: 'Pathogenic Microbes',
                category: 'medical',
                description: 'Disease-causing microorganisms and mechanisms'
            },

            // 10. Immune Response
            immune_response: {
                patterns: [
                    /immune.*response/i,
                    /innate.*immunity|adaptive.*immunity/i,
                    /antibody|antigen/i,
                    /immune.*system/i
                ],
                handler: this.handleImmuneResponse.bind(this),
                name: 'Immune Response',
                category: 'immunology',
                description: 'Host defenses against microbial infection'
            },

            // 11. Microbial Ecology
            microbial_ecology: {
                patterns: [
                    /microbial.*ecology/i,
                    /microbiome/i,
                    /symbiosis|mutualism/i,
                    /biofilm/i
                ],
                handler: this.handleMicrobialEcology.bind(this),
                name: 'Microbial Ecology',
                category: 'ecology',
                description: 'Interactions of microorganisms with environment and hosts'
            },

            // 12. Industrial Microbiology
            industrial_microbiology: {
                patterns: [
                    /industrial.*microbiology/i,
                    /fermentation.*industry/i,
                    /biotechnology/i,
                    /microbial.*production/i
                ],
                handler: this.handleIndustrialMicrobiology.bind(this),
                name: 'Industrial Microbiology',
                category: 'applied',
                description: 'Applications of microorganisms in industry and biotechnology'
            }
        };
    }

    initializeMicrobiologyLessons() {
        this.lessons = {
            bacteria: {
                title: "Bacteria: Structure, Classification, and Function",
                concepts: [
                    "Bacteria are prokaryotic microorganisms",
                    "Bacterial cells have unique structures (cell wall, flagella, pili)",
                    "Bacteria can be classified by shape, staining, and metabolism",
                    "Bacteria play crucial roles in ecosystems and human health"
                ],
                theory: "Bacteria are single-celled prokaryotic organisms lacking a membrane-bound nucleus. They exhibit remarkable diversity in structure, metabolism, and ecological roles, from beneficial gut flora to pathogenic species.",
                keyDefinitions: {
                    "Prokaryote": "Organism without membrane-bound nucleus or organelles",
                    "Peptidoglycan": "Polymer forming bacterial cell walls",
                    "Gram Staining": "Differential staining technique separating bacteria into Gram-positive and Gram-negative",
                    "Binary Fission": "Asexual reproduction method in bacteria",
                    "Endospore": "Dormant, resistant structure formed by some bacteria"
                },
                mainCategories: [
                    "Bacterial structure (cell wall, membrane, appendages)",
                    "Bacterial shapes (cocci, bacilli, spirilla)",
                    "Gram-positive vs Gram-negative bacteria",
                    "Bacterial metabolism and nutrition"
                ],
                applications: [
                    "Medical diagnosis and treatment",
                    "Food production (fermentation)",
                    "Bioremediation",
                    "Biotechnology and genetic engineering"
                ]
            },

            viruses: {
                title: "Viruses: Structure, Replication, and Pathogenesis",
                concepts: [
                    "Viruses are acellular infectious agents",
                    "Viruses require host cells for replication",
                    "Viral structure includes nucleic acid and protein coat",
                    "Viruses can cause various diseases"
                ],
                theory: "Viruses are obligate intracellular parasites consisting of genetic material (DNA or RNA) enclosed in a protein coat. They cannot reproduce independently and must hijack host cellular machinery for replication.",
                keyDefinitions: {
                    "Capsid": "Protein coat surrounding viral nucleic acid",
                    "Envelope": "Lipid membrane surrounding some viruses",
                    "Bacteriophage": "Virus that infects bacteria",
                    "Lytic Cycle": "Viral replication resulting in host cell lysis",
                    "Lysogenic Cycle": "Viral DNA integrates into host chromosome",
                    "Retrovirus": "RNA virus that reverse-transcribes into DNA"
                },
                mainCategories: [
                    "Viral structure (nucleic acid, capsid, envelope)",
                    "Viral classification (DNA vs RNA, enveloped vs non-enveloped)",
                    "Viral replication cycles (lytic, lysogenic)",
                    "Antiviral strategies"
                ],
                applications: [
                    "Vaccine development",
                    "Gene therapy vectors",
                    "Phage therapy",
                    "Understanding disease mechanisms"
                ]
            },

            fungi: {
                title: "Fungi: Structure, Reproduction, and Ecological Roles",
                concepts: [
                    "Fungi are eukaryotic heterotrophs",
                    "Fungi can be unicellular (yeasts) or multicellular (molds)",
                    "Fungi reproduce via spores",
                    "Fungi have both beneficial and harmful roles"
                ],
                theory: "Fungi are eukaryotic organisms with chitin cell walls that obtain nutrients through absorption. They play crucial roles as decomposers, pathogens, and symbionts in various ecosystems.",
                keyDefinitions: {
                    "Hyphae": "Thread-like filaments forming fungal body",
                    "Mycelium": "Network of hyphae",
                    "Sporangium": "Structure producing asexual spores",
                    "Mycosis": "Fungal infection",
                    "Lichen": "Symbiotic association of fungus and photosynthetic organism"
                },
                mainCategories: [
                    "Fungal structure (hyphae, mycelium, spores)",
                    "Fungal classification (yeasts, molds, mushrooms)",
                    "Fungal reproduction (sexual and asexual)",
                    "Medical and ecological importance"
                ],
                applications: [
                    "Food production (bread, beer, cheese)",
                    "Antibiotic production (penicillin)",
                    "Bioremediation",
                    "Medical diagnosis and treatment of mycoses"
                ]
            },

            protists: {
                title: "Protists: Diversity and Ecological Roles",
                concepts: [
                    "Protists are diverse eukaryotic microorganisms",
                    "Protists include algae, protozoa, and slime molds",
                    "Many protists are motile using cilia, flagella, or pseudopodia",
                    "Some protists cause important diseases"
                ],
                theory: "Protists are a diverse group of eukaryotic microorganisms that don't fit into plant, animal, or fungal kingdoms. They exhibit varied nutrition modes, reproduction strategies, and ecological roles.",
                keyDefinitions: {
                    "Protozoa": "Animal-like protists (heterotrophic, motile)",
                    "Algae": "Plant-like protists (photosynthetic)",
                    "Pseudopodia": "Temporary projections for movement and feeding",
                    "Cyst": "Dormant, resistant stage in protist life cycle",
                    "Trophozoite": "Active, feeding stage of protozoa"
                },
                mainCategories: [
                    "Protozoa (amoebas, ciliates, flagellates, sporozoans)",
                    "Algae (green, red, brown, diatoms)",
                    "Movement mechanisms",
                    "Parasitic protists"
                ],
                applications: [
                    "Understanding parasitic diseases (malaria, giardiasis)",
                    "Biofuel production from algae",
                    "Environmental indicators",
                    "Food web dynamics"
                ]
            },

            microbial_growth: {
                title: "Microbial Growth: Patterns, Requirements, and Measurement",
                concepts: [
                    "Microbial growth refers to increase in cell numbers",
                    "Bacterial growth follows predictable phases",
                    "Growth requirements include nutrients, temperature, pH, and oxygen",
                    "Generation time varies among species"
                ],
                theory: "Microbial growth is the increase in cell number through binary fission or other reproductive mechanisms. Understanding growth patterns is essential for controlling microorganisms and optimizing industrial processes.",
                keyDefinitions: {
                    "Generation Time": "Time required for population to double",
                    "Exponential Growth": "Logarithmic increase in cell numbers",
                    "Lag Phase": "Period of adjustment before rapid growth",
                    "Stationary Phase": "Growth rate equals death rate",
                    "Death Phase": "Death rate exceeds growth rate"
                },
                mainCategories: [
                    "Bacterial growth curve (lag, log, stationary, death)",
                    "Physical growth requirements (temperature, pH, oxygen, osmotic pressure)",
                    "Nutritional requirements (carbon, nitrogen, minerals)",
                    "Growth measurement techniques"
                ],
                applications: [
                    "Food preservation and safety",
                    "Clinical microbiology",
                    "Industrial fermentation optimization",
                    "Water quality testing"
                ]
            },

            microbial_metabolism: {
                title: "Microbial Metabolism: Energy Production and Biosynthesis",
                concepts: [
                    "Microbes use diverse metabolic strategies",
                    "Metabolism includes catabolism and anabolism",
                    "Different organisms use different electron acceptors",
                    "Fermentation produces less ATP than respiration"
                ],
                theory: "Microbial metabolism encompasses all chemical reactions in cells, including energy production (catabolism) and biosynthesis (anabolism). Metabolic diversity allows microbes to inhabit virtually every environment on Earth.",
                keyDefinitions: {
                    "Catabolism": "Breaking down molecules to release energy",
                    "Anabolism": "Building complex molecules using energy",
                    "Fermentation": "Anaerobic ATP production without electron transport chain",
                    "Aerobic Respiration": "Complete oxidation using oxygen as final electron acceptor",
                    "Anaerobic Respiration": "Using inorganic molecules (not O₂) as final electron acceptor"
                },
                mainCategories: [
                    "Energy production pathways",
                    "Nutritional types (autotrophs, heterotrophs)",
                    "Oxygen requirements (aerobes, anaerobes, facultative)",
                    "Fermentation types"
                ],
                applications: [
                    "Food and beverage production",
                    "Biofuel generation",
                    "Wastewater treatment",
                    "Understanding antibiotic targets"
                ]
            },

            microbial_genetics: {
                title: "Microbial Genetics: Variation and Gene Transfer",
                concepts: [
                    "Microbial genomes are typically smaller than eukaryotic genomes",
                    "Bacteria have chromosomal DNA and plasmids",
                    "Horizontal gene transfer creates genetic diversity",
                    "Mutations provide raw material for evolution"
                ],
                theory: "Microbial genetics studies inheritance and variation in microorganisms. Unlike eukaryotes, bacteria can acquire genes horizontally from unrelated organisms, facilitating rapid adaptation and evolution.",
                keyDefinitions: {
                    "Plasmid": "Extrachromosomal circular DNA",
                    "Conjugation": "Direct DNA transfer between bacterial cells",
                    "Transformation": "Uptake of naked DNA from environment",
                    "Transduction": "Viral-mediated DNA transfer",
                    "Transposon": "Mobile genetic element ('jumping gene')"
                },
                mainCategories: [
                    "Bacterial chromosome and plasmids",
                    "Horizontal gene transfer mechanisms",
                    "Mutations and repair",
                    "Gene regulation"
                ],
                applications: [
                    "Understanding antibiotic resistance spread",
                    "Genetic engineering and biotechnology",
                    "Vaccine development",
                    "Evolutionary studies"
                ]
            },

            microbial_control: {
                title: "Microbial Control: Physical and Chemical Methods",
                concepts: [
                    "Sterilization eliminates all microorganisms",
                    "Disinfection reduces pathogen numbers on surfaces",
                    "Antiseptics are safe for use on living tissue",
                    "Antimicrobial drugs target specific microbial structures"
                ],
                theory: "Controlling microbial growth is essential for preventing disease, preserving food, and maintaining sterile environments. Methods range from physical treatments (heat, radiation) to chemical agents (disinfectants, antibiotics).",
                keyDefinitions: {
                    "Sterilization": "Complete elimination of all microorganisms and spores",
                    "Disinfection": "Destruction of vegetative pathogens (not spores)",
                    "Antiseptic": "Chemical agent safe for use on living tissue",
                    "Bacteriostatic": "Inhibits bacterial growth without killing",
                    "Bactericidal": "Kills bacteria"
                },
                mainCategories: [
                    "Physical methods (heat, filtration, radiation)",
                    "Chemical methods (disinfectants, antiseptics)",
                    "Antimicrobial drugs (antibiotics, antivirals, antifungals)",
                    "Resistance mechanisms"
                ],
                applications: [
                    "Healthcare infection control",
                    "Food preservation",
                    "Water treatment",
                    "Pharmaceutical production"
                ]
            },

            pathogenic_microbes: {
                title: "Pathogenic Microbes: Disease Mechanisms and Virulence",
                concepts: [
                    "Pathogens are disease-causing microorganisms",
                    "Virulence factors enhance pathogen ability to cause disease",
                    "Infection follows specific stages",
                    "Some microbes produce toxins"
                ],
                theory: "Pathogenic microorganisms cause disease through various mechanisms including tissue invasion, toxin production, and immune system evasion. Understanding pathogenesis is crucial for developing treatments and preventive measures.",
                keyDefinitions: {
                    "Virulence": "Degree of pathogenicity",
                    "Virulence Factors": "Traits enhancing pathogen's ability to cause disease",
                    "Exotoxin": "Secreted bacterial protein toxin",
                    "Endotoxin": "Lipopolysaccharide component of Gram-negative cell walls",
                    "Opportunistic Pathogen": "Causes disease in immunocompromised hosts"
                },
                mainCategories: [
                    "Stages of infection (entry, colonization, invasion, exit)",
                    "Virulence factors (adhesins, toxins, capsules)",
                    "Bacterial pathogens",
                    "Viral, fungal, and protist pathogens"
                ],
                applications: [
                    "Disease diagnosis and treatment",
                    "Vaccine development",
                    "Public health strategies",
                    "Epidemiology"
                ]
            },

            immune_response: {
                title: "Immune Response: Defense Against Microbial Infection",
                concepts: [
                    "Immune system has innate and adaptive components",
                    "Innate immunity provides immediate, non-specific defense",
                    "Adaptive immunity develops specific memory",
                    "Antibodies neutralize pathogens and toxins"
                ],
                theory: "The immune system protects against microbial infection through coordinated innate and adaptive responses. Understanding immunity is essential for vaccine development, transplantation, and treating immune disorders.",
                keyDefinitions: {
                    "Innate Immunity": "Non-specific, immediate defense (barriers, phagocytes, inflammation)",
                    "Adaptive Immunity": "Specific, develops memory (T cells, B cells, antibodies)",
                    "Antibody": "Protein that binds specifically to antigens",
                    "Antigen": "Molecule that triggers immune response",
                    "Phagocytosis": "Process of engulfing and destroying pathogens"
                },
                mainCategories: [
                    "Innate immunity (barriers, phagocytes, complement, inflammation)",
                    "Adaptive immunity (humoral and cell-mediated)",
                    "Antibody structure and function",
                    "Vaccination principles"
                ],
                applications: [
                    "Vaccine development and immunization programs",
                    "Immunotherapy for cancer",
                    "Understanding autoimmune diseases",
                    "Transplant immunology"
                ]
            },

            microbial_ecology: {
                title: "Microbial Ecology: Environmental Interactions and Microbiomes",
                concepts: [
                    "Microbes inhabit virtually every environment",
                    "Microbial communities form complex ecosystems",
                    "Symbiotic relationships benefit hosts and microbes",
                    "Biofilms are structured microbial communities"
                ],
                theory: "Microbial ecology studies interactions between microorganisms and their environment. Microbes play essential roles in nutrient cycling, symbioses, and ecosystem functioning, including the human microbiome.",
                keyDefinitions: {
                    "Microbiome": "Community of microorganisms in specific environment",
                    "Symbiosis": "Close relationship between different species",
                    "Mutualism": "Both organisms benefit",
                    "Biofilm": "Structured community of microbes attached to surface",
                    "Nitrogen Fixation": "Conversion of atmospheric N₂ to ammonia"
                },
                mainCategories: [
                    "Microbial habitats (soil, water, air, host-associated)",
                    "Biogeochemical cycles (carbon, nitrogen, sulfur)",
                    "Symbiotic relationships",
                    "Human microbiome"
                ],
                applications: [
                    "Probiotics and microbiome therapy",
                    "Bioremediation of pollutants",
                    "Agricultural improvements",
                    "Understanding disease susceptibility"
                ]
            },

            industrial_microbiology: {
                title: "Industrial Microbiology: Biotechnology and Applications",
                concepts: [
                    "Microorganisms produce valuable products",
                    "Fermentation is key industrial process",
                    "Genetic engineering enhances microbial production",
                    "Microbes are used in various industries"
                ],
                theory: "Industrial microbiology harnesses microorganisms for producing food, beverages, pharmaceuticals, and other products. Modern biotechnology uses genetic engineering to optimize microbial production strains.",
                keyDefinitions: {
                    "Fermentation": "Controlled microbial growth for product generation",
                    "Bioreactor": "Vessel for large-scale microbial culture",
                    "Primary Metabolite": "Product produced during active growth",
                    "Secondary Metabolite": "Product produced after growth phase (e.g., antibiotics)",
                    "Recombinant DNA": "DNA artificially created by combining sequences"
                },
                mainCategories: [
                    "Food and beverage production",
                    "Pharmaceutical production (antibiotics, vaccines, insulin)",
                    "Biofuels and bioplastics",
                    "Enzyme production"
                ],
                applications: [
                    "Commercial product manufacturing",
                    "Sustainable alternatives to chemical processes",
                    "Waste treatment",
                    "Bioremediation technologies"
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            bacteria: {
                'Bacterial Structure': [
                    'Thinking all bacteria have flagella (many don\'t)',
                    'Believing bacteria have a nucleus (they don\'t - they\'re prokaryotes)',
                    'Confusing bacterial cell wall with eukaryotic cell membrane'
                ],
                'Bacterial Classification': [
                    'Thinking Gram stain is based on shape (it\'s based on cell wall structure)',
                    'Believing all bacteria are harmful (most are beneficial or neutral)',
                    'Confusing bacteria with viruses (bacteria are cells, viruses are acellular)'
                ]
            },
            viruses: {
                'Viral Nature': [
                    'Thinking viruses are living organisms (they\'re acellular and can\'t reproduce independently)',
                    'Believing antibiotics kill viruses (antibiotics target bacteria, not viruses)',
                    'Confusing viral envelope with cell membrane (envelope is derived from host)'
                ],
                'Viral Replication': [
                    'Thinking viruses reproduce by binary fission (they replicate inside host cells)',
                    'Believing all viruses lyse host cells (lysogenic cycle integrates into chromosome)',
                    'Confusing lytic and lysogenic cycles'
                ]
            },
            microbial_growth: {
                'Growth Curve': [
                    'Thinking bacteria always grow exponentially (growth has distinct phases)',
                    'Believing generation time is the same for all bacteria (varies widely)',
                    'Confusing stationary phase with death phase'
                ],
                'Growth Requirements': [
                    'Thinking all bacteria need oxygen (many are anaerobic)',
                    'Believing all microbes grow best at body temperature (psychrophiles, thermophiles exist)',
                    'Confusing optimal growth conditions with survival conditions'
                ]
            },
            microbial_genetics: {
                'Gene Transfer': [
                    'Thinking bacteria only inherit genes vertically (horizontal gene transfer is common)',
                    'Confusing transformation, conjugation, and transduction',
                    'Believing plasmids are essential for survival (they\'re usually not)'
                ],
                'Antibiotic Resistance': [
                    'Thinking individual bacteria develop resistance during exposure (resistance genes already exist or arise through mutation)',
                    'Believing resistance always means complete immunity (resistance levels vary)',
                    'Confusing resistance with tolerance'
                ]
            },
            pathogenic_microbes: {
                'Pathogenicity': [
                    'Thinking all microbes are pathogenic (tiny fraction cause disease)',
                    'Believing virulence is constant (it varies with host immunity and strain)',
                    'Confusing infection with disease (infection doesn\'t always cause symptoms)'
                ],
                'Toxins': [
                    'Thinking all bacteria produce toxins (only some do)',
                    'Confusing exotoxins with endotoxins (different structure, secretion, effects)',
                    'Believing toxins only come from bacteria (fungi and algae produce toxins too)'
                ]
            },
            immune_response: {
                'Immunity Types': [
                    'Confusing innate and adaptive immunity',
                    'Thinking antibodies kill pathogens directly (they tag them for destruction)',
                    'Believing vaccines contain active disease (most contain inactivated/weakened pathogens or components)'
                ],
                'Immune Cells': [
                    'Confusing B cells and T cells (different roles in adaptive immunity)',
                    'Thinking phagocytes only exist in blood (tissue macrophages are widespread)',
                    'Believing fever is always harmful (moderate fever enhances immune response)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use side-by-side diagrams to highlight differences',
                effectiveness: 'High for structural and process comparisons'
            },
            analogy: {
                method: 'Relate microbiological concepts to familiar everyday examples',
                effectiveness: 'High for abstract concepts'
            },
            step_by_step: {
                method: 'Break down complex processes into sequential steps',
                effectiveness: 'High for understanding processes'
            },
            contrast_table: {
                method: 'Create comparison tables showing key differences',
                effectiveness: 'High for distinguishing similar concepts'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            structural: {
                focus: 'Physical organization and components',
                language: 'descriptive and spatial'
            },
            functional: {
                focus: 'Purpose and mechanisms of action',
                language: 'process-oriented and causal'
            },
            comparative: {
                focus: 'Similarities and differences between concepts',
                language: 'contrastive and analytical'
            },
            evolutionary: {
                focus: 'Historical development and adaptations',
                language: 'temporal and adaptive'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential information only',
                examples: 'concrete and familiar'
            },
            intermediate: {
                vocabulary: 'standard microbiological terms',
                detail: 'main concepts with explanations',
                examples: 'mix of familiar and technical'
            },
            detailed: {
                vocabulary: 'full scientific terminology',
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
    handleMicrobiologyProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            // Parse the microbiology query
            this.currentProblem = this.parseMicrobiologyProblem(topic, parameters, subTopic, context);

            // Get content based on topic
            this.currentContent = this.getMicrobiologyContent(this.currentProblem);

            // Generate content steps/sections
            this.contentSteps = this.generateMicrobiologyContent(this.currentProblem, this.currentContent);

            // Generate diagram data if applicable
            this.generateMicrobiologyDiagramData();

            // Generate workbook
            this.generateMicrobiologyWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process microbiology topic: ${error.message}`);
        }
    }

    parseMicrobiologyProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.microbiologyTopics)) {
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
            throw new Error(`Unable to recognize microbiology topic: ${topic}`);
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

    getMicrobiologyContent(problem) {
        const handler = this.microbiologyTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for microbiology topic: ${problem.type}`);
        }

        return handler(problem);
    }

    // TOPIC HANDLERS

    handleBacteria(problem) {
        const bacteriaList = [
            {
                name: "Escherichia coli (E. coli)",
                type: "Gram-negative bacillus",
                shape: "Rod-shaped",
                habitat: "Intestinal tract of warm-blooded animals",
                characteristics: [
                    "Facultative anaerobe",
                    "Motile with peritrichous flagella",
                    "Fast generation time (~20 minutes under optimal conditions)",
                    "Model organism for research"
                ],
                metabolism: "Heterotrophic, ferments glucose",
                medical: "Most strains harmless, some pathogenic (e.g., O157:H7)",
                applications: ["Biotechnology", "Research model", "Indicator of fecal contamination"],
                diagram: "ecoli_structure"
            },
            {
                name: "Staphylococcus aureus",
                type: "Gram-positive coccus",
                shape: "Spherical, clusters (grape-like)",
                habitat: "Skin, nasal passages",
                characteristics: [
                    "Facultative anaerobe",
                    "Non-motile",
                    "Forms golden-yellow colonies",
                    "Salt-tolerant (halotolerant)"
                ],
                metabolism: "Heterotrophic, fermentative",
                medical: "Opportunistic pathogen, causes skin infections, food poisoning",
                virulence: ["Toxin production", "Antibiotic resistance (MRSA)"],
                applications: ["Study of antibiotic resistance", "Medical microbiology"],
                diagram: "staph_structure"
            },
            {
                name: "Bacillus subtilis",
                type: "Gram-positive bacillus",
                shape: "Rod-shaped",
                habitat: "Soil, vegetation",
                characteristics: [
                    "Aerobic or facultative anaerobe",
                    "Motile with peritrichous flagella",
                    "Forms heat-resistant endospores",
                    "Model organism for Gram-positive bacteria"
                ],
                metabolism: "Heterotrophic, aerobic respiration",
                medical: "Generally non-pathogenic",
                applications: ["Industrial enzyme production", "Probiotic", "Research model"],
                diagram: "bacillus_endospore"
            },
            {
                name: "Streptococcus pyogenes",
                type: "Gram-positive coccus",
                shape: "Spherical, chains",
                habitat: "Human throat, skin",
                characteristics: [
                    "Facultative anaerobe",
                    "Non-motile",
                    "Beta-hemolytic on blood agar",
                    "Group A Streptococcus"
                ],
                metabolism: "Heterotrophic, fermentative",
                medical: "Pathogenic - causes strep throat, scarlet fever, rheumatic fever",
                virulence: ["M protein (antiphagocytic)", "Streptolysin toxins", "Invasins"],
                applications: ["Antibiotic susceptibility testing", "Rapid diagnostic tests"],
                diagram: "streptococcus_chain"
            },
            {
                name: "Mycobacterium tuberculosis",
                type: "Acid-fast bacillus",
                shape: "Rod-shaped, slightly curved",
                habitat: "Human lungs (intracellular parasite)",
                characteristics: [
                    "Obligate aerobe",
                    "Non-motile",
                    "Slow-growing (generation time ~15-20 hours)",
                    "Waxy cell wall (mycolic acids)",
                    "Acid-fast staining"
                ],
                metabolism: "Heterotrophic, aerobic respiration",
                medical: "Causes tuberculosis (TB)",
                virulence: ["Survives in macrophages", "Cord factor", "Drug resistance"],
                applications: ["TB diagnosis and treatment", "Vaccine research (BCG)"],
                diagram: "mycobacterium_structure"
            },
            {
                name: "Clostridium tetani",
                type: "Gram-positive bacillus",
                shape: "Rod-shaped with terminal endospores (drumstick appearance)",
                habitat: "Soil, animal feces",
                characteristics: [
                    "Obligate anaerobe",
                    "Motile with peritrichous flagella",
                    "Forms heat-resistant endospores",
                    "Dies in presence of oxygen"
                ],
                metabolism: "Heterotrophic, fermentative",
                medical: "Produces tetanospasmin toxin causing tetanus (lockjaw)",
                virulence: ["Tetanus toxin (neurotoxin)", "Endospore survival"],
                applications: ["Tetanus vaccine development", "Study of anaerobic bacteria"],
                diagram: "clostridium_spore"
            }
        ];

        const bacterialStructures = {
            cellWall: {
                gramPositive: {
                    structure: "Thick peptidoglycan layer (20-80 nm)",
                    components: ["Peptidoglycan (multiple layers)", "Teichoic acids", "Lipoteichoic acids"],
                    staining: "Retains crystal violet (purple)",
                    properties: "More susceptible to lysozyme"
                },
                gramNegative: {
                    structure: "Thin peptidoglycan layer (2-7 nm) with outer membrane",
                    components: ["Thin peptidoglycan", "Outer membrane with LPS", "Periplasmic space", "Porins"],
                    staining: "Does not retain crystal violet (pink/red after counterstain)",
                    properties: "More resistant to antibiotics due to outer membrane"
                }
            },
            capsule: {
                composition: "Polysaccharide or polypeptide layer",
                function: [
                    "Protection from phagocytosis",
                    "Protection from desiccation",
                    "Adhesion to surfaces",
                    "Immune evasion"
                ],
                examples: "Streptococcus pneumoniae, Klebsiella pneumoniae"
            },
            flagella: {
                composition: "Protein filament (flagellin)",
                function: "Motility",
                arrangements: {
                    monotrichous: "Single flagellum at one pole",
                    amphitrichous: "Single flagellum at each pole",
                    lophotrichous: "Tuft of flagella at one or both poles",
                    peritrichous: "Flagella distributed over entire surface"
                },
                examples: "E. coli (peritrichous), Vibrio (polar)"
            },
            pili: {
                composition: "Protein filaments (pilin)",
                types: {
                    common_pili: {
                        function: "Attachment to surfaces",
                        also_called: "Fimbriae"
                    },
                    sex_pili: {
                        function: "DNA transfer during conjugation",
                        also_called: "F pili"
                    }
                },
                examples: "Neisseria gonorrhoeae (attachment pili)"
            },
            endospore: {
                composition: "Core with DNA, cortex (peptidoglycan), spore coat (proteins)",
                function: "Survival under harsh conditions (heat, desiccation, chemicals, radiation)",
                formation: "Sporulation (triggered by nutrient depletion)",
                germination: "Returns to vegetative state when conditions improve",
                resistance: "Extremely heat-resistant, chemical-resistant",
                examples: "Bacillus, Clostridium species"
            }
        };

        const bacterialShapes = {
            cocci: {
                shape: "Spherical",
                arrangements: [
                    "Diplococci (pairs) - Streptococcus pneumoniae",
                    "Streptococci (chains) - Streptococcus pyogenes",
                    "Staphylococci (clusters) - Staphylococcus aureus",
                    "Tetrads (groups of 4) - Micrococcus",
                    "Sarcinae (cubes of 8) - Sarcina"
                ]
            },
            bacilli: {
                shape: "Rod-shaped",
                arrangements: [
                    "Single bacilli - E. coli",
                    "Diplobacilli (pairs) - Moraxella",
                    "Streptobacilli (chains) - Bacillus anthracis",
                    "Coccobacilli (short, plump rods) - Haemophilus"
                ]
            },
            spirilla: {
                shape: "Spiral or curved",
                types: [
                    "Vibrio (comma-shaped) - Vibrio cholerae",
                    "Spirillum (rigid spiral) - Spirillum volutans",
                    "Spirochete (flexible spiral) - Treponema pallidum"
                ]
            }
        };

        const metabolicTypes = {
            oxygenRequirements: {
                obligateAerobes: "Require oxygen for growth (Mycobacterium tuberculosis)",
                obligateAnaerobes: "Cannot tolerate oxygen (Clostridium tetani)",
                facultativeAnaerobes: "Grow with or without oxygen (E. coli)",
                aerotolerantAnaerobes: "Tolerate oxygen but don't use it (Streptococcus)",
                microaerophiles: "Require low oxygen levels (Helicobacter pylori)"
            },
            nutritionalTypes: {
                photoautotrophs: "Use light energy, fix CO₂ (Cyanobacteria)",
                chemoautotrophs: "Oxidize inorganic chemicals, fix CO₂ (Nitrosomonas)",
                photoheterotrophs: "Use light energy, require organic carbon (purple non-sulfur bacteria)",
                chemoheterotrophs: "Oxidize organic molecules (most pathogens)"
            }
        };

        return {
            topic: "Bacteria",
            bacteria: bacteriaList,
            structures: bacterialStructures,
            shapes: bacterialShapes,
            metabolicTypes: metabolicTypes,
            gramStaining: {
                principle: "Differential staining based on cell wall structure",
                procedure: [
                    "Apply crystal violet (primary stain)",
                    "Apply iodine (mordant)",
                    "Decolorize with alcohol or acetone",
                    "Apply safranin (counterstain)"
                ],
                results: {
                    gramPositive: "Thick peptidoglycan retains crystal violet → purple",
                    gramNegative: "Thin peptidoglycan loses crystal violet, takes counterstain → pink/red"
                }
            },
            reproduction: {
                binaryFission: {
                    steps: [
                        "DNA replication",
                        "Cell elongation",
                        "Chromosome segregation",
                        "Septum formation",
                        "Cell separation"
                    ],
                    generationTime: "Species-specific (20 minutes to days)"
                }
            },
            category: 'bacteria'
        };
    }

    handleViruses(problem) {
        const virusList = [
            {
                name: "Influenza Virus",
                type: "Enveloped RNA virus",
                nucleicAcid: "Single-stranded RNA (8 segments, negative-sense)",
                structure: {
                    envelope: "Lipid bilayer with glycoproteins",
                    capsid: "Helical",
                    proteins: "Hemagglutinin (H), Neuraminidase (N)"
                },
                host: "Humans, birds, pigs",
                replication: "Nucleus (unusual for RNA virus)",
                diseases: "Seasonal flu, pandemics",
                characteristics: [
                    "Segmented genome allows reassortment",
                    "Antigenic drift and shift",
                    "Transmitted via respiratory droplets"
                ],
                prevention: "Annual vaccine (targets H and N proteins)",
                diagram: "influenza_structure"
            },
            {
                name: "HIV (Human Immunodeficiency Virus)",
                type: "Enveloped retrovirus",
                nucleicAcid: "Two copies of single-stranded RNA (positive-sense)",
                structure: {
                    envelope: "Lipid bilayer with gp120 and gp41",
                    capsid: "Conical",
                    enzymes: "Reverse transcriptase, integrase, protease"
                },
                host: "Humans (CD4+ T cells)",
                replication: "Reverse transcription (RNA → DNA), integration into host genome",
                diseases: "AIDS (Acquired Immunodeficiency Syndrome)",
                characteristics: [
                    "Attacks immune system (CD4+ T cells)",
                    "High mutation rate",
                    "Transmitted via blood, sexual contact, mother-to-child"
                ],
                treatment: "Antiretroviral therapy (ART) targeting reverse transcriptase, protease, integrase",
                diagram: "hiv_structure"
            },
            {
                name: "Bacteriophage T4",
                type: "Non-enveloped DNA virus",
                nucleicAcid: "Double-stranded DNA",
                structure: {
                    head: "Icosahedral capsid containing DNA",
                    tail: "Contractile sheath",
                    baseplate: "Tail fibers for attachment"
                },
                host: "E. coli bacteria",
                replication: "Lytic cycle",
                characteristics: [
                    "Complex structure with head, tail, tail fibers",
                    "Injects DNA into host",
                    "Produces ~200 progeny per cycle"
                ],
                applications: ["Phage therapy", "Research model", "Gene therapy vectors"],
                diagram: "bacteriophage_structure"
            },
            {
                name: "SARS-CoV-2",
                type: "Enveloped RNA virus (coronavirus)",
                nucleicAcid: "Single-stranded RNA (positive-sense, ~30kb)",
                structure: {
                    envelope: "Lipid bilayer with spike (S), envelope (E), membrane (M) proteins",
                    capsid: "Helical",
                    nucleocapsid: "N protein bound to RNA"
                },
                host: "Humans (respiratory epithelial cells)",
                replication: "Cytoplasm",
                diseases: "COVID-19",
                characteristics: [
                    "Spike protein binds ACE2 receptor",
                    "Transmitted via respiratory droplets and aerosols",
                    "Variants arise through mutations"
                ],
                prevention: "Vaccines (mRNA, viral vector, inactivated)",
                diagram: "coronavirus_structure"
            },
            {
                name: "Herpes Simplex Virus (HSV)",
                type: "Enveloped DNA virus",
                nucleicAcid: "Double-stranded DNA",
                structure: {
                    envelope: "Lipid bilayer with glycoproteins",
                    tegument: "Protein layer between envelope and capsid",
                    capsid: "Icosahedral"
                },
                host: "Humans",
                replication: "Nucleus",
                diseases: "HSV-1 (oral herpes), HSV-2 (genital herpes)",
                characteristics: [
                    "Establishes latency in neurons",
                    "Reactivates periodically",
                    "Transmitted via direct contact"
                ],
                treatment: "Antiviral drugs (acyclovir)",
                diagram: "herpesvirus_structure"
            },
            {
                name: "Poliovirus",
                type: "Non-enveloped RNA virus",
                nucleicAcid: "Single-stranded RNA (positive-sense)",
                structure: {
                    capsid: "Icosahedral (protein only, no envelope)"
                },
                host: "Humans (intestinal cells, motor neurons)",
                replication: "Cytoplasm",
                diseases: "Poliomyelitis (paralytic polio)",
                characteristics: [
                    "Transmitted via fecal-oral route",
                    "Can invade nervous system",
                    "Nearly eradicated through vaccination"
                ],
                prevention: "Inactivated (IPV) or oral (OPV) polio vaccine",
                diagram: "poliovirus_structure"
            }
        ];

        const viralStructure = {
            nucleicAcid: {
                DNA: {
                    types: ["Double-stranded (dsDNA)", "Single-stranded (ssDNA)"],
                    examples: "Herpesviruses (dsDNA), Parvoviruses (ssDNA)"
                },
                RNA: {
                    types: [
                        "Double-stranded (dsRNA)",
                        "Single-stranded positive-sense (+ssRNA)",
                        "Single-stranded negative-sense (-ssRNA)"
                    ],
                    examples: "Reoviruses (dsRNA), Poliovirus (+ssRNA), Influenza (-ssRNA)"
                },
                retroviruses: "RNA that reverse-transcribes to DNA (HIV)"
            },
            capsid: {
                definition: "Protein coat surrounding nucleic acid",
                shapes: {
                    icosahedral: "20-sided structure (poliovirus, adenovirus)",
                    helical: "Spiral structure (tobacco mosaic virus, influenza)",
                    complex: "Neither purely icosahedral nor helical (bacteriophages)"
                },
                function: [
                    "Protects nucleic acid",
                    "Facilitates attachment to host cells",
                    "Aids in nucleic acid injection"
                ]
            },
            envelope: {
                composition: "Lipid bilayer derived from host cell membrane",
                proteins: "Viral glycoproteins embedded in envelope",
                acquisition: "Budding from host cell membrane",
                enveloped: "Influenza, HIV, coronaviruses, herpesviruses",
                nonEnveloped: "Poliovirus, adenovirus, bacteriophages",
                significance: "Enveloped viruses more susceptible to disinfectants, drying"
            }
        };

        const viralReplication = {
            lyticCycle: {
                definition: "Viral replication resulting in host cell lysis",
                steps: [
                    "Attachment: Virus binds to specific receptors on host cell",
                    "Penetration: Viral nucleic acid enters host cell",
                    "Biosynthesis: Viral components synthesized using host machinery",
                    "Maturation: New virions assembled",
                    "Release: Host cell lyses, releasing progeny viruses"
                ],
                examples: "Bacteriophage T4, poliovirus",
                outcome: "Host cell death"
            },
            lysogenicCycle: {
                definition: "Viral DNA integrates into host chromosome",
                steps: [
                    "Attachment and penetration",
                    "Integration: Viral DNA (prophage) integrates into host chromosome",
                    "Replication: Prophage replicated with host DNA",
                    "Induction: Stress triggers prophage excision and entry into lytic cycle"
                ],
                examples: "Bacteriophage lambda, HIV (as provirus)",
                outcome: "Host cell survives, viral DNA passed to daughter cells"
            },
            animalVirusReplication: {
                steps: [
                    "Attachment: Viral glycoproteins bind host receptors",
                    "Entry: Endocytosis or membrane fusion",
                    "Uncoating: Capsid removed, nucleic acid released",
                    "Replication and transcription: DNA viruses in nucleus, RNA viruses usually in cytoplasm",
                    "Assembly: Capsid proteins assemble around nucleic acid",
                    "Release: Budding (enveloped) or lysis (non-enveloped)"
                ]
            },
            retrovirusReplication: {
                unique: "Reverse transcription of RNA to DNA",
                steps: [
                    "Attachment and entry",
                    "Reverse transcription: RNA → DNA (reverse transcriptase)",
                    "Integration: DNA (provirus) integrates into host genome (integrase)",
                    "Transcription: Host transcribes proviral DNA to RNA",
                    "Translation: Viral proteins synthesized",
                    "Assembly and budding"
                ],
                example: "HIV"
            }
        };

        const viralClassification = {
            baltimoreClassification: {
                description: "Based on nucleic acid type and replication strategy",
                classes: [
                    "Class I: dsDNA (Herpesviruses, Adenoviruses)",
                    "Class II: ssDNA (Parvoviruses)",
                    "Class III: dsRNA (Reoviruses)",
                    "Class IV: +ssRNA (Poliovirus, Coronaviruses)",
                    "Class V: -ssRNA (Influenza, Measles)",
                    "Class VI: ssRNA-RT (Retroviruses like HIV)",
                    "Class VII: dsDNA-RT (Hepadnaviruses)"
                ]
            }
        };

        return {
            topic: "Viruses",
            viruses: virusList,
            structure: viralStructure,
            replication: viralReplication,
            classification: viralClassification,
            characteristics: {
                acellular: "Not composed of cells",
                obligateIntracellular: "Require host cells for replication",
                noMetabolism: "Cannot produce energy or synthesize proteins independently",
                hostSpecificity: "Specific to certain hosts and cell types"
            },
            antiviral: {
                targets: [
                    "Viral entry (fusion inhibitors)",
                    "Uncoating",
                    "Replication enzymes (nucleoside analogs, reverse transcriptase inhibitors)",
                    "Protease inhibitors",
                    "Release (neuraminidase inhibitors)"
                ],
                challenges: "Viral mutation, host cell toxicity, limited targets"
            },
            category: 'viruses'
        };
    }

    handleFungi(problem) {
        const fungiList = [
            {
                name: "Saccharomyces cerevisiae (Baker's/Brewer's Yeast)",
                type: "Unicellular yeast",
                classification: "Ascomycota",
                structure: {
                    cellWall: "Chitin and glucans",
                    morphology: "Oval cells, 5-10 μm"
                },
                reproduction: {
                    asexual: "Budding",
                    sexual: "Ascospore formation"
                },
                metabolism: "Facultative anaerobe, ferments sugars",
                habitat: "Fruits, soil, associated with humans",
                applications: [
                    "Baking (CO₂ production)",
                    "Brewing and winemaking (ethanol production)",
                    "Research model organism",
                    "Biotechnology (recombinant protein production)"
                ],
                medical: "Generally non-pathogenic",
                diagram: "yeast_budding"
            },
            {
                name: "Candida albicans",
                type: "Dimorphic yeast",
                classification: "Ascomycota",
                structure: {
                    cellWall: "Chitin",
                    morphology: "Yeast form (oval) or hyphal form (filamentous)"
                },
                reproduction: {
                    asexual: "Budding (yeast), hyphal extension"
                },
                habitat: "Human microbiota (mouth, GI tract, skin, vagina)",
                pathogenicity: "Opportunistic pathogen",
                diseases: [
                    "Oral thrush",
                    "Vaginal yeast infections",
                    "Systemic candidiasis (immunocompromised)"
                ],
                virulence: [
                    "Dimorphism (switch between yeast and hyphal forms)",
                    "Biofilm formation",
                    "Adhesins"
                ],
                treatment: "Antifungal drugs (azoles, echinocandins)",
                diagram: "candida_dimorphism"
            },
            {
                name: "Aspergillus fumigatus",
                type: "Filamentous mold",
                classification: "Ascomycota",
                structure: {
                    cellWall: "Chitin",
                    morphology: "Septate hyphae, conidiophores with conidia"
                },
                reproduction: {
                    asexual: "Conidiospores (airborne)"
                },
                habitat: "Soil, decaying organic matter, indoor air",
                pathogenicity: "Opportunistic pathogen",
                diseases: [
                    "Aspergillosis (invasive in immunocompromised)",
                    "Allergic reactions",
                    "Farmer's lung"
                ],
                characteristics: [
                    "Thermotolerant (grows at body temperature)",
                    "Produces aflatoxins (mycotoxins)",
                    "Ubiquitous in environment"
                ],
                treatment: "Antifungal drugs (voriconazole, amphotericin B)",
                diagram: "aspergillus_conidiophore"
            },
            {
                name: "Penicillium chrysogenum",
                type: "Filamentous mold",
                classification: "Ascomycota",
                structure: {
                    cellWall: "Chitin",
                    morphology: "Septate hyphae, brush-like conidiophores"
                },
                reproduction: {
                    asexual: "Conidiospores"
                },
                habitat: "Soil, decaying vegetation, food",
                medical: "Generally non-pathogenic",
                applications: [
                    "Penicillin antibiotic production",
                    "Cheese production (Penicillium roqueforti in blue cheese)"
                ],
                characteristics: [
                    "Blue-green colony color",
                    "Produces beta-lactam antibiotics"
                ],
                diagram: "penicillium_conidiophore"
            },
            {
                name: "Cryptococcus neoformans",
                type: "Encapsulated yeast",
                classification: "Basidiomycota",
                structure: {
                    cellWall: "Chitin",
                    capsule: "Polysaccharide capsule (key virulence factor)",
                    morphology: "Spherical yeast cells"
                },
                reproduction: {
                    asexual: "Budding",
                    sexual: "Basidiospores"
                },
                habitat: "Soil, bird droppings (pigeon)",
                pathogenicity: "Opportunistic pathogen (especially AIDS patients)",
                diseases: [
                    "Cryptococcal meningitis",
                    "Pulmonary cryptococcosis"
                ],
                virulence: [
                    "Polysaccharide capsule (antiphagocytic)",
                    "Melanin production",
                    "Growth at 37°C"
                ],
                treatment: "Amphotericin B + flucytosine",
                diagram: "cryptococcus_capsule"
            },
            {
                name: "Trichophyton rubrum",
                type: "Dermatophyte (filamentous)",
                classification: "Ascomycota",
                structure: {
                    cellWall: "Chitin",
                    morphology: "Septate hyphae, macroconidia and microconidia"
                },
                reproduction: {
                    asexual: "Conidia"
                },
                habitat: "Human skin, hair, nails",
                pathogenicity: "Pathogenic (infects keratinized tissues)",
                diseases: [
                    "Athlete's foot (tinea pedis)",
                    "Ringworm (tinea corporis)",
                    "Nail infections (onychomycosis)"
                ],
                characteristics: [
                    "Produces keratinases (digest keratin)",
                    "Transmitted by direct contact or fomites",
                    "Most common cause of fungal skin infections"
                ],
                treatment: "Topical or oral antifungals (terbinafine, azoles)",
                diagram: "dermatophyte_structure"
            }
        ];

        const fungalStructure = {
            cellWall: {
                composition: "Chitin (β-1,4-linked N-acetylglucosamine) and glucans",
                difference: "Different from bacterial peptidoglycan and plant cellulose",
                function: "Structural support, protection",
                target: "Antifungal drugs target cell wall synthesis (echinocandins)"
            },
            hyphae: {
                definition: "Thread-like filaments forming fungal body",
                types: {
                    septate: "Cross-walls dividing hyphae into cells (Ascomycota, Basidiomycota)",
                    coenocytic: "No cross-walls, multinucleate (Zygomycota)"
                },
                growth: "Apical extension (tip growth)",
                function: "Nutrient absorption, substrate penetration"
            },
            mycelium: {
                definition: "Network of hyphae forming fungal colony",
                types: {
                    vegetative: "Grows into substrate, absorbs nutrients",
                    aerial: "Grows above substrate, produces spores"
                },
                function: "Nutrient acquisition, reproduction"
            },
            spores: {
                definition: "Reproductive structures",
                types: {
                    asexual: [
                        "Conidiospores (produced on conidiophores)",
                        "Sporangiospores (in sporangium)",
                        "Blastospores (budding)"
                    ],
                    sexual: [
                        "Ascospores (in ascus, Ascomycota)",
                        "Basidiospores (on basidium, Basidiomycota)",
                        "Zygospores (Zygomycota)"
                    ]
                },
                function: "Dispersal, survival, genetic variation"
            },
            yeastForm: {
                morphology: "Unicellular, oval or spherical",
                reproduction: "Budding (asexual)",
                examples: "Saccharomyces, Candida (yeast form)"
            },
            moldForm: {
                morphology: "Multicellular, filamentous (hyphae)",
                reproduction: "Spores (asexual and sexual)",
                examples: "Aspergillus, Penicillium"
            },
            dimorphism: {
                definition: "Ability to switch between yeast and mold forms",
                triggers: "Temperature, nutrients, pH",
                examples: "Candida albicans, Histoplasma capsulatum",
                significance: "Often associated with pathogenicity"
            }
        };

        const fungalReproduction = {
            asexual: {
                methods: [
                    "Budding (yeasts)",
                    "Fragmentation of hyphae",
                    "Asexual spore production (conidia, sporangiospores)"
                ],
                advantage: "Rapid reproduction, no need for mating partner",
                result: "Genetically identical offspring"
            },
            sexual: {
                process: [
                    "Plasmogamy: Fusion of cytoplasm from two mating types",
                    "Karyogamy: Fusion of nuclei",
                    "Meiosis: Formation of haploid spores"
                ],
                advantage: "Genetic variation",
                result: "Genetically diverse offspring",
                spores: "Ascospores, basidiospores, zygospores (depending on phylum)"
            }
        };

        const fungalClassification = {
            zygomycota: {
                characteristics: [
                    "Coenocytic (non-septate) hyphae",
                    "Sexual reproduction produces zygospores"
                ],
                examples: "Rhizopus (black bread mold), Mucor",
                habitat: "Soil, decaying organic matter"
            },
            ascomycota: {
                characteristics: [
                    "Septate hyphae",
                    "Sexual reproduction produces ascospores in ascus (sac)",
                    "Asexual reproduction via conidia"
                ],
                examples: "Saccharomyces, Penicillium, Aspergillus, Candida, morels, truffles",
                habitat: "Diverse",
                importance: "Largest fungal phylum, includes many pathogens and beneficial species"
            },
            basidiomycota: {
                characteristics: [
                    "Septate hyphae",
                    "Sexual reproduction produces basidiospores on basidium (club)",
                    "Includes mushrooms, puffballs, rusts, smuts"
                ],
                examples: "Agaricus (button mushroom), Cryptococcus, rusts, smuts",
                habitat: "Diverse",
                importance: "Includes edible mushrooms and plant pathogens"
            },
            deuteromycota: {
                description: "Fungi Imperfecti - no known sexual stage",
                note: "Polyphyletic group, mostly Ascomycota with lost sexual reproduction",
                examples: "Many Candida and Aspergillus species"
            }
        };

        const fungalNutrition = {
            mode: "Heterotrophic (absorptive)",
            process: [
                "Secrete enzymes into environment",
                "Enzymes digest organic matter externally",
                "Absorb digested nutrients through cell membrane"
            ],
            types: {
                saprotrophs: "Decompose dead organic matter (most fungi)",
                parasites: "Obtain nutrients from living hosts (plant rusts, human pathogens)",
                mutualists: "Symbiotic relationships benefiting both partners (mycorrhizae, lichens)"
            }
        };

        const medicalMycology = {
            superficialMycoses: {
                location: "Outer layers of skin, hair, nails",
                examples: "Tinea infections (ringworm, athlete's foot)",
                organisms: "Dermatophytes (Trichophyton, Microsporum, Epidermophyton)",
                transmission: "Direct contact, fomites"
            },
            subcutaneousMycoses: {
                location: "Subcutaneous tissues",
                examples: "Sporotrichosis, chromoblastomycosis",
                transmission: "Traumatic implantation (thorns, splinters)"
            },
            systemicMycoses: {
                location: "Internal organs, bloodstream",
                examples: "Histoplasmosis, coccidioidomycosis, blastomycosis",
                organisms: "Dimorphic fungi",
                transmission: "Inhalation of spores",
                severity: "Can be life-threatening, especially in immunocompromised"
            },
            opportunisticMycoses: {
                location: "Various (lungs, bloodstream, CNS)",
                examples: "Candidiasis, aspergillosis, cryptococcosis",
                riskFactors: "Immunosuppression (HIV/AIDS, chemotherapy, organ transplant)",
                organisms: "Normally non-pathogenic or commensal fungi"
            }
        };

        const antifungalDrugs = {
            polyenes: {
                mechanism: "Bind ergosterol in fungal cell membrane, create pores",
                examples: "Amphotericin B, nystatin",
                use: "Systemic (amphotericin B) or topical (nystatin) infections"
            },
            azoles: {
                mechanism: "Inhibit ergosterol synthesis",
                examples: "Fluconazole, itraconazole, voriconazole, ketoconazole",
                use: "Broad-spectrum, systemic and topical"
            },
            echinocandins: {
                mechanism: "Inhibit β-1,3-glucan synthesis in cell wall",
                examples: "Caspofungin, micafungin",
                use: "Systemic infections (Candida, Aspergillus)"
            },
            allylamines: {
                mechanism: "Inhibit squalene epoxidase (ergosterol synthesis)",
                examples: "Terbinafine",
                use: "Dermatophyte infections"
            }
        };

        return {
            topic: "Fungi",
            fungi: fungiList,
            structure: fungalStructure,
            reproduction: fungalReproduction,
            classification: fungalClassification,
            nutrition: fungalNutrition,
            medicalMycology: medicalMycology,
            antifungalDrugs: antifungalDrugs,
            ecologicalRoles: {
                decomposers: "Break down dead organic matter, recycle nutrients",
                mutualists: "Mycorrhizae (plant roots), lichens (algae/cyanobacteria)",
                pathogens: "Plant diseases (rusts, smuts, blights), animal diseases"
            },
            industrialApplications: [
                "Food production (bread, beer, wine, cheese)",
                "Antibiotic production (penicillin, cephalosporins)",
                "Enzyme production (amylases, cellulases)",
                "Organic acid production (citric acid)",
                "Biotechnology (protein expression systems)"
            ],
            category: 'fungi'
        };
    }

    handleProtists(problem) {
        const protistsList = [
            {
                name: "Amoeba proteus",
                type: "Amoeboid protozoan",
                classification: "Amoebozoa",
                structure: {
                    shape: "Irregular, changes shape",
                    locomotion: "Pseudopodia (false feet)",
                    organelles: "Nucleus, contractile vacuole, food vacuoles"
                },
                nutrition: "Heterotrophic (phagocytosis)",
                reproduction: "Binary fission (asexual)",
                habitat: "Freshwater (ponds, streams)",
                medical: "Non-pathogenic (free-living)",
                characteristics: [
                    "No fixed shape",
                    "Moves by cytoplasmic streaming",
                    "Engulfs food particles"
                ],
                diagram: "amoeba_structure"
            },
            {
                name: "Paramecium caudatum",
                type: "Ciliate protozoan",
                classification: "Ciliophora",
                structure: {
                    shape: "Slipper-shaped, fixed",
                    locomotion: "Cilia (hair-like projections covering surface)",
                    organelles: "Macronucleus, micronucleus, oral groove, contractile vacuoles"
                },
                nutrition: "Heterotrophic (filter feeding via oral groove)",
                reproduction: {
                    asexual: "Binary fission",
                    sexual: "Conjugation (exchange of genetic material)"
                },
                habitat: "Freshwater",
                medical: "Non-pathogenic",
                characteristics: [
                    "Coordinated ciliary beating for movement",
                    "Two types of nuclei (vegetative and reproductive)",
                    "Osmoregulation via contractile vacuoles"
                ],
                diagram: "paramecium_structure"
            },
            {
                name: "Plasmodium falciparum",
                type: "Apicomplexan protozoan",
                classification: "Apicomplexa",
                structure: {
                    stages: "Multiple life stages (sporozoite, merozoite, gametocyte)",
                    organelles: "Apical complex (for host cell invasion)"
                },
                nutrition: "Parasitic (intracellular)",
                reproduction: {
                    asexual: "In human host (liver, red blood cells)",
                    sexual: "In mosquito vector"
                },
                lifecycle: {
                    humanStages: "Liver stage (exoerythrocytic), blood stage (erythrocytic)",
                    vectorStages: "Sexual reproduction in Anopheles mosquito"
                },
                habitat: "Human red blood cells, mosquito gut",
                diseases: "Malaria (most severe form)",
                transmission: "Anopheles mosquito bite",
                characteristics: [
                    "Complex lifecycle with multiple hosts",
                    "Destroys red blood cells causing anemia",
                    "Drug-resistant strains emerging"
                ],
                treatment: "Antimalarial drugs (chloroquine, artemisinin combinations)",
                diagram: "plasmodium_lifecycle"
            },
            {
                name: "Giardia lamblia",
                type: "Flagellated protozoan",
                classification: "Diplomonadida",
                structure: {
                    trophozoite: "Pear-shaped, two nuclei, four pairs of flagella",
                    cyst: "Oval, thick-walled (resistant stage)"
                },
                nutrition: "Parasitic (absorbs nutrients from small intestine)",
                reproduction: "Binary fission (asexual)",
                lifecycle: {
                    trophozoite: "Active, feeding stage in small intestine",
                    cyst: "Dormant, infectious stage passed in feces"
                },
                habitat: "Human small intestine",
                diseases: "Giardiasis (diarrhea, malabsorption)",
                transmission: "Fecal-oral (contaminated water, food)",
                characteristics: [
                    "Adhesive disc attaches to intestinal wall",
                    "Cysts survive in environment",
                    "Common waterborne pathogen"
                ],
                treatment: "Metronidazole, tinidazole",
                diagram: "giardia_structure"
            },
            {
                name: "Trypanosoma brucei",
                type: "Flagellated protozoan",
                classification: "Kinetoplastida",
                structure: {
                    shape: "Elongated with single flagellum",
                    organelles: "Kinetoplast (DNA-containing structure in mitochondrion)",
                    membrane: "Undulating membrane along body"
                },
                nutrition: "Parasitic (bloodstream)",
                reproduction: "Binary fission (asexual)",
                lifecycle: {
                    humanStages: "Bloodstream form, trypomastigote",
                    vectorStages: "Tsetse fly (Glossina)"
                },
                habitat: "Human blood, lymph, CNS",
                diseases: "African sleeping sickness (African trypanosomiasis)",
                transmission: "Tsetse fly bite",
                characteristics: [
                    "Antigenic variation (changes surface proteins to evade immune system)",
                    "Crosses blood-brain barrier",
                    "Fatal if untreated"
                ],
                treatment: "Pentamidine, suramin (early stage), melarsoprol (CNS stage)",
                diagram: "trypanosome_structure"
            },
            {
                name: "Euglena gracilis",
                type: "Flagellated photosynthetic protist",
                classification: "Euglenozoa",
                structure: {
                    shape: "Elongated, flexible",
                    locomotion: "Single flagellum",
                    organelles: "Chloroplasts, eyespot (stigma), contractile vacuole"
                },
                nutrition: "Mixotrophic (photosynthetic in light, heterotrophic in dark)",
                reproduction: "Binary fission (asexual)",
                habitat: "Freshwater (especially nutrient-rich)",
                medical: "Non-pathogenic",
                characteristics: [
                    "Contains chloroplasts (can photosynthesize)",
                    "Eyespot detects light for phototaxis",
                    "No cell wall (has pellicle instead)",
                    "Metabolic flexibility"
                ],
                diagram: "euglena_structure"
            },
            {
                name: "Diatoms",
                type: "Photosynthetic algae",
                classification: "Bacillariophyta",
                structure: {
                    cellWall: "Silica frustule (two overlapping halves like petri dish)",
                    shape: "Diverse (pennate or centric)",
                    organelles: "Chloroplasts (golden-brown due to fucoxanthin)"
                },
                nutrition: "Autotrophic (photosynthetic)",
                reproduction: {
                    asexual: "Binary fission (cells get progressively smaller)",
                    sexual: "Restores cell size"
                },
                habitat: "Aquatic (marine and freshwater)",
                medical: "Non-pathogenic",
                ecological: "Major component of phytoplankton, produce ~20% of Earth's oxygen",
                characteristics: [
                    "Intricate silica cell walls",
                    "Store energy as oils (not starch)",
                    "Form diatomaceous earth when dead"
                ],
                applications: ["Filtration", "Abrasives", "Indicators of water quality"],
                diagram: "diatom_frustule"
            }
        ];

        const protistClassification = {
            protozoa: {
                description: "Animal-like protists (heterotrophic, mostly motile)",
                groups: {
                    amoeboids: {
                        locomotion: "Pseudopodia",
                        examples: "Amoeba, Entamoeba"
                    },
                    flagellates: {
                        locomotion: "Flagella (one or more whip-like structures)",
                        examples: "Giardia, Trypanosoma, Trichomonas, Euglena"
                    },
                    ciliates: {
                        locomotion: "Cilia (numerous short hair-like projections)",
                        examples: "Paramecium, Stentor, Vorticella"
                    },
                    apicomplexans: {
                        locomotion: "Non-motile (adult forms)",
                        characteristics: "Apical complex for host invasion, all parasitic",
                        examples: "Plasmodium, Toxoplasma, Cryptosporidium"
                    }
                }
            },
            algae: {
                description: "Plant-like protists (photosynthetic)",
                groups: {
                    greenAlgae: {
                        pigments: "Chlorophyll a and b (like plants)",
                        examples: "Chlamydomonas, Volvox, sea lettuce"
                    },
                    redAlgae: {
                        pigments: "Phycoerythrin (red pigment)",
                        examples: "Coralline algae, nori (sushi wrapper)"
                    },
                    brownAlgae: {
                        pigments: "Fucoxanthin (brown pigment)",
                        examples: "Kelp, Sargassum"
                    },
                    diatoms: {
                        pigments: "Fucoxanthin",
                        cellWall: "Silica frustule",
                        examples: "Diverse marine and freshwater species"
                    },
                    dinoflagellates: {
                        characteristics: "Two flagella, cellulose plates",
                        examples: "Gonyaulax (red tide), Noctiluca (bioluminescent)"
                    }
                }
            },
            slimeMolds: {
                description: "Fungus-like protists",
                types: {
                    plasmodial: "Multinucleate mass (plasmodium), produce spores",
                    cellular: "Independent amoeboid cells aggregate when food scarce"
                },
                examples: "Physarum (plasmodial), Dictyostelium (cellular)"
            }
        };

        /**const parasitic Protists = {
        
              entamoebaHistolytica: {
                disease: "Amoebic dysentery",
                transmission: "Fecal-oral (contaminated water/food)",
                symptoms: "Severe diarrhea, abdominal pain, liver abscess",
                characteristics: "Invades intestinal wall, can spread to liver"
            },
            toxoplasmaGondii: {
                disease: "Toxoplasmosis",
                transmission: "Cat feces, undercooked meat, congenital",
                symptoms: "Usually mild (flu-like), severe in immunocompromised, birth defects",
                characteristics: "Intracellular parasite, forms cysts in tissues",
                lifecycle: "Sexual reproduction in cats, asexual in other hosts"
            },
            cryptosporidiumParvum: {
                disease: "Cryptosporidiosis",
                transmission: "Fecal-oral (contaminated water)",
                symptoms: "Watery diarrhea",
                characteristics: "Resistant to chlorination, common in water outbreaks"
            },
            trichomonasVaginalis: {
                disease: "Trichomoniasis (STI)",
                transmission: "Sexual contact",
                symptoms: "Vaginal discharge, irritation",
                characteristics: "Flagellated, no cyst stage"
            }
        };
        */

        const ecologicalImportance = {
            primaryProducers: "Algae produce significant portion of atmospheric oxygen",
            foodWeb: "Base of aquatic food chains (phytoplankton)",
            symbionts: "Zooxanthellae (dinoflagellates) in coral reefs",
            nutrientCycling: "Decompose organic matter",
            bioIndicators: "Water quality indicators"
        };

        return {
            topic: "Protists",
            protists: protistsList,
            classification: protistClassification,
            parasiticProtists: parasiticProtists,
            ecologicalImportance: ecologicalImportance,
            characteristics: {
                eukaryotic: "Membrane-bound nucleus and organelles",
                diverse: "Extremely varied in structure, nutrition, reproduction",
                mostly_unicellular: "Some colonial or multicellular",
                aquatic: "Mostly aquatic or require moisture"
            },
            nutritionModes: {
                autotrophic: "Photosynthetic (algae)",
                heterotrophic: "Consume organic matter (protozoa)",
                mixotrophic: "Both photosynthetic and heterotrophic (Euglena)"
            },
            reproduction: {
                asexual: "Binary fission, budding, spore formation",
                sexual: "Conjugation (ciliates), gamete fusion"
            },
            category: 'protists'
        };
    }

    handleMicrobialGrowth(problem) {
        const growthCurve = {
            lagPhase: {
                description: "Period of adjustment, no increase in cell number",
                characteristics: [
                    "Cells adapting to new environment",
                    "Synthesizing enzymes needed for growth",
                    "Repairing damage",
                    "Increasing cell size"
                ],
                duration: "Variable (minutes to hours or days)",
                cellDivision: "Little to none",
                metabolicActivity: "High (preparing for division)"
            },
            logPhase: {
                description: "Exponential growth, cells dividing at constant rate",
                characteristics: [
                    "Maximum growth rate",
                    "Cells most uniform in size and properties",
                    "Most susceptible to antibiotics",
                    "Nutrient-rich, waste products minimal"
                ],
                formula: "Nt = N₀ × 2ⁿ (where n = number of generations)",
                generationTime: "Time for population to double",
                graphPattern: "Straight line on semi-log plot"
            },
            stationaryPhase: {
                description: "Growth rate equals death rate, no net change in cell number",
                characteristics: [
                    "Nutrient depletion",
                    "Toxic waste accumulation",
                    "Oxygen limitation (if aerobic)",
                    "Space limitations"
                ],
                cellularChanges: [
                    "Endospore formation (Bacillus, Clostridium)",
                    "Secondary metabolite production (antibiotics)",
                    "Smaller cell size"
                ],
                duration: "Variable"
            },
            deathPhase: {
                description: "Death rate exceeds growth rate, cell number declines",
                characteristics: [
                    "Nutrients exhausted",
                    "Toxic waste levels lethal",
                    "Cells lyse and die"
                ],
                pattern: "Logarithmic decline (typically)",
                note: "Some cells may survive as persisters"
            }
        };

        const generationTime = {
            definition: "Time required for bacterial population to double",
            formula: "g = t / n (where t = time, n = number of generations)",
            calculation: "n = (log Nt - log N₀) / log 2 = 3.3 × (log Nt - log N₀)",
            examples: {
                fastGrowing: "E. coli (20 min), Vibrio (10-15 min)",
                moderate: "Staphylococcus aureus (30 min), Streptococcus (40 min)",
                slowGrowing: "Mycobacterium tuberculosis (15-20 hours), Treponema pallidum (30 hours)"
            },
            factors: ["Temperature", "Nutrients", "pH", "Oxygen availability", "Species"]
        };

        const growthRequirements = {
            physical: {
                temperature: {
                    psychrophiles: {
                        range: "0-20°C",
                        optimum: "15°C",
                        examples: "Polaromonas, some Pseudomonas",
                        habitat: "Cold environments (Arctic, deep ocean, refrigerators)"
                    },
                    mesophiles: {
                        range: "20-45°C",
                        optimum: "37°C",
                        examples: "E. coli, Staphylococcus, most pathogens",
                        habitat: "Moderate temperatures (soil, water, human body)"
                    },
                    thermophiles: {
                        range: "45-80°C",
                        optimum: "60°C",
                        examples: "Thermus aquaticus, Geobacillus",
                        habitat: "Hot springs, compost"
                    },
                    hyperthermophiles: {
                        range: "80-110°C+",
                        optimum: ">80°C",
                        examples: "Pyrolobus, Methanopyrus",
                        habitat: "Hydrothermal vents, hot springs"
                    }
                },
                pH: {
                    acidophiles: {
                        range: "pH 0-5.5",
                        optimum: "pH 2-3",
                        examples: "Thiobacillus, Sulfolobus",
                        habitat: "Acidic environments (mine drainage, acidic hot springs)"
                    },
                    neutrophiles: {
                        range: "pH 5.5-8.5",
                        optimum: "pH 6.5-7.5",
                        examples: "Most bacteria, including pathogens",
                        habitat: "Neutral environments"
                    },
                    alkaliphiles: {
                        range: "pH 8.5-11.5",
                        optimum: "pH 9-10",
                        examples: "Bacillus alcalophilus, Natronobacterium",
                        habitat: "Alkaline environments (soda lakes)"
                    }
                },
                oxygen: {
                    obligateAerobes: {
                        requirement: "Require oxygen",
                        metabolism: "Aerobic respiration",
                        examples: "Mycobacterium tuberculosis, Pseudomonas"
                    },
                    obligateAnaerobes: {
                        requirement: "Cannot tolerate oxygen (toxic)",
                        metabolism: "Fermentation or anaerobic respiration",
                        examples: "Clostridium, Bacteroides",
                        reason: "Lack enzymes to detoxify oxygen radicals (catalase, superoxide dismutase)"
                    },
                    facultativeAnaerobes: {
                        requirement: "Grow with or without oxygen",
                        metabolism: "Aerobic respiration (if O₂ present) or fermentation",
                        examples: "E. coli, Staphylococcus, Streptococcus",
                        advantage: "Metabolic flexibility"
                    },
                    aerotolerantAnaerobes: {
                        requirement: "Don't use oxygen but tolerate it",
                        metabolism: "Fermentation only",
                        examples: "Streptococcus, Lactobacillus"
                    },
                    microaerophiles: {
                        requirement: "Require low oxygen levels (2-10%)",
                        metabolism: "Aerobic respiration at low O₂",
                        examples: "Helicobacter pylori, Campylobacter",
                        reason: "High O₂ is toxic, but need some for respiration"
                    },
                    capnophiles: {
                        requirement: "Require elevated CO₂ (5-10%)",
                        examples: "Neisseria, Haemophilus"
                    }
                },
                osmoticPressure: {
                    halophiles: {
                        requirement: "Require high salt concentrations",
                        types: {
                            slight: "1-6% NaCl",
                            moderate: "6-15% NaCl",
                            extreme: "15-30% NaCl"
                        },
                        examples: "Halobacterium, Staphylococcus aureus (facultative halophile)",
                        habitat: "Saline environments (salt lakes, salted foods)"
                    },
                    osmotolerant: {
                        description: "Tolerate high solute but don't require it",
                        examples: "Staphylococcus"
                    }
                },
                pressure: {
                    barophiles: {
                        description: "Grow best under high pressure",
                        habitat: "Deep ocean",
                        examples: "Deep-sea bacteria"
                    }
                }
            },
            chemical: {
                carbon: {
                    sources: "Organic compounds (heterotrophs) or CO₂ (autotrophs)",
                    importance: "Structural component of all organic molecules"
                },
                nitrogen: {
                    sources: "Amino acids, nucleotides, NH₄⁺, NO₃⁻, N₂ (nitrogen-fixing bacteria)",
                    importance: "Proteins, nucleic acids"
                },
                sulfur: {
                    sources: "Amino acids (cysteine, methionine), SO₄²⁻",
                    importance: "Proteins, coenzymes"
                },
                phosphorus: {
                    sources: "PO₄³⁻",
                    importance: "Nucleic acids, ATP, phospholipids"
                },
                traceElements: {
                    examples: "Iron, magnesium, potassium, calcium, zinc",
                    importance: "Enzyme cofactors, enzyme structure"
                },
                growthFactors: {
                    types: "Vitamins, amino acids, purines, pyrimidines",
                    requirement: "Some bacteria cannot synthesize certain compounds",
                    examples: "Fastidious bacteria (Haemophilus requires X and V factors)"
                }
            }
        };

        const growthMeasurement = {
            directCounts: {
                methods: [
                    "Plate counts (CFU - colony-forming units)",
                    "Most probable number (MPN)",
                    "Direct microscopic counts",
                    "Flow cytometry"
                ],
                plateCounts: {
                    procedure: "Serial dilutions plated, colonies counted after incubation",
                    result: "CFU/mL",
                    assumption: "Each colony arises from single cell",
                    advantage: "Counts only viable cells",
                    limitation: "Slow (24-48 hours), only culturable bacteria"
                },
                microscopicCounts: {procedure: "Count cells in known volume using hemocytometer or Petroff-Hausser chamber",
                    advantage: "Fast, counts all cells",
                    limitation: "Cannot distinguish living from dead cells, doesn't work well for low concentrations"
                }
            },
            indirectMethods: {
                turbidity: {
                    method: "Spectrophotometry (measure light scattering/absorbance)",
                    measurement: "Optical density (OD) or absorbance at 600 nm",
                    principle: "More cells = more turbidity = higher OD",
                    advantage: "Fast, non-destructive, real-time monitoring",
                    limitation: "Doesn't distinguish viable from dead cells, requires high cell density"
                },
                metabolicActivity: {
                    methods: [
                        "Acid production (pH indicator)",
                        "Gas production (Durham tube)",
                        "Reduction of dyes (resazurin, methylene blue)",
                        "ATP measurement"
                    ]
                },
                dryWeight: {
                    method: "Filter cells, dry, weigh",
                    advantage: "Accurate for filamentous organisms",
                    limitation: "Time-consuming, destructive"
                }
            }
        };

        const continuousCulture = {
            chemostat: {
                description: "Continuous culture with constant nutrient addition and waste removal",
                principle: "Growth rate controlled by limiting nutrient concentration",
                dilutionRate: "Rate of fresh medium addition = rate of culture removal",
                steadyState: "Constant cell density and growth rate maintained",
                uses: "Industrial fermentation, research (study growth at defined rates)"
            },
            turbidostat: {
                description: "Continuous culture maintaining constant cell density",
                principle: "Turbidity sensor triggers medium addition when cell density increases",
                difference: "Controls cell density, not growth rate (unlike chemostat)"
            }
        };

        const biofilms = {
            definition: "Structured communities of bacteria attached to surfaces, encased in matrix",
            formation: {
                attachment: "Reversible adhesion to surface",
                colonization: "Irreversible attachment, cell division",
                maturation: "EPS production, 3D structure development",
                dispersal: "Release of planktonic cells to colonize new surfaces"
            },
            composition: {
                cells: "10-25% of biofilm mass",
                EPS: "Extracellular polymeric substance (polysaccharides, proteins, DNA) - 75-90%"
            },
            characteristics: [
                "Up to 1000× more resistant to antimicrobials than planktonic cells",
                "Protected from host immune system",
                "Nutrient and waste gradients create diverse microenvironments",
                "Quorum sensing coordinates behavior"
            ],
            examples: {
                medical: "Catheter infections, dental plaque, chronic wounds",
                environmental: "Water pipes, ship hulls, aquatic surfaces",
                industrial: "Biofouling of equipment"
            },
            significance: "60-80% of bacterial infections involve biofilms"
        };

        return {
            topic: "Microbial Growth",
            growthCurve: growthCurve,
            generationTime: generationTime,
            growthRequirements: growthRequirements,
            growthMeasurement: growthMeasurement,
            continuousCulture: continuousCulture,
            biofilms: biofilms,
            batchCulture: {
                definition: "Closed system with fixed nutrient supply",
                characteristics: "Goes through lag, log, stationary, death phases",
                examples: "Standard laboratory cultures"
            },
            quorumSensing: {
                definition: "Cell-density dependent gene regulation",
                mechanism: "Bacteria produce and detect signaling molecules (autoinducers)",
                threshold: "When cell density reaches threshold, coordinate group behaviors",
                behaviors: "Biofilm formation, virulence factor production, bioluminescence",
                significance: "Allows bacteria to act as multicellular organism"
            },
            category: 'microbial_growth'
        };
    }

    handleMicrobialMetabolism(problem) {
        const energyCategories = {
            phototrophs: {
                energySource: "Light",
                mechanism: "Photosynthesis (convert light energy to chemical energy)",
                types: {
                    photoautotrophs: {
                        carbonSource: "CO₂ (fix inorganic carbon)",
                        examples: "Cyanobacteria, purple/green sulfur bacteria, algae"
                    },
                    photoheterotrophs: {
                        carbonSource: "Organic compounds",
                        examples: "Purple/green non-sulfur bacteria"
                    }
                }
            },
            chemotrophs: {
                energySource: "Chemical oxidation",
                types: {
                    chemoautotrophs: {
                        carbonSource: "CO₂",
                        electronDonor: "Inorganic (H₂, NH₃, NO₂⁻, H₂S, Fe²⁺)",
                        examples: "Nitrifying bacteria (Nitrosomonas, Nitrobacter), sulfur bacteria",
                        importance: "Nitrogen and sulfur cycles"
                    },
                    chemoheterotrophs: {
                        carbonSource: "Organic compounds",
                        electronDonor: "Organic compounds",
                        examples: "Most bacteria, all fungi, protozoa, animals",
                        importance: "Decomposition, pathogenesis"
                    }
                }
            }
        };

        const catabolism = {
            aerobicRespiration: {
                electronAcceptor: "Oxygen (O₂)",
                efficiency: "Highest ATP yield (~38 ATP per glucose)",
                stages: [
                    "Glycolysis: Glucose → 2 Pyruvate (2 ATP, 2 NADH)",
                    "Krebs cycle: Pyruvate → CO₂ (2 ATP, 8 NADH, 2 FADH₂)",
                    "Electron transport chain: NADH/FADH₂ oxidized → ~34 ATP (chemiosmosis)"
                ],
                equation: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~38 ATP",
                organisms: "Obligate and facultative aerobes"
            },
            anaerobicRespiration: {
                electronAcceptor: "Inorganic molecules other than O₂",
                efficiency: "Lower than aerobic respiration (2-36 ATP per glucose)",
                types: {
                    nitrateRespiration: {
                        acceptor: "NO₃⁻ → NO₂⁻ → N₂",
                        process: "Denitrification",
                        organisms: "Pseudomonas, Paracoccus"
                    },
                    sulfateRespiration: {
                        acceptor: "SO₄²⁻ → H₂S",
                        organisms: "Desulfovibrio"
                    },
                    carbonateRespiration: {
                        acceptor: "CO₂ → CH₄",
                        organisms: "Methanogens (Archaea)"
                    }
                },
                significance: "Allows respiration in anaerobic environments"
            },
            fermentation: {
                electronAcceptor: "Organic molecule (no external acceptor)",
                efficiency: "Low (2 ATP per glucose from glycolysis only)",
                principle: "Organic molecule serves as final electron acceptor to regenerate NAD⁺",
                types: {
                    lacticAcid: {
                        product: "Lactic acid",
                        equation: "Glucose → 2 Lactic acid + 2 ATP",
                        organisms: "Lactobacillus, Streptococcus",
                        applications: "Yogurt, cheese, sauerkraut"
                    },
                    alcoholic: {
                        product: "Ethanol + CO₂",
                        equation: "Glucose → 2 Ethanol + 2 CO₂ + 2 ATP",
                        organisms: "Saccharomyces cerevisiae (yeast)",
                        applications: "Beer, wine, bread"
                    },
                    mixedAcid: {
                        products: "Acetic acid, lactic acid, formic acid, ethanol, CO₂, H₂",
                        organisms: "E. coli, Salmonella"
                    },
                    butyric: {
                        products: "Butyric acid, acetone, isopropanol, CO₂, H₂",
                        organisms: "Clostridium"
                    },
                    propionic: {
                        products: "Propionic acid, acetic acid, CO₂",
                        organisms: "Propionibacterium",
                        applications: "Swiss cheese (holes from CO₂)"
                    }
                },
                advantages: "Works without oxygen, produces useful products",
                limitations: "Low ATP yield, incomplete oxidation"
            }
        };

        const anabolism = {
            definition: "Biosynthetic reactions building complex molecules",
            energySource: "ATP from catabolism",
            pathways: {
                aminoAcidSynthesis: "Building blocks for proteins",
                nucleotideSynthesis: "Building blocks for nucleic acids",
                lipidSynthesis: "Membrane components, energy storage",
                polysaccharideSynthesis: "Energy storage, structural components"
            },
            carbonFixation: {
                autotrophs: "Fix CO₂ into organic molecules",
                pathways: [
                    "Calvin cycle (most autotrophs)",
                    "Reverse TCA cycle",
                    "3-hydroxypropionate pathway"
                ]
            }
        };

        const specializedMetabolism = {
            nitrogenFixation: {
                process: "N₂ → NH₃ (ammonia)",
                enzyme: "Nitrogenase (oxygen-sensitive)",
                organisms: "Rhizobium, Azotobacter, cyanobacteria",
                significance: "Converts atmospheric N₂ to biologically available form",
                equation: "N₂ + 8H⁺ + 8e⁻ + 16 ATP → 2NH₃ + H₂ + 16 ADP + 16 Pi",
                protection: "Heterocysts (specialized cells), temporal separation, high respiration rate"
            },
            nitrification: {
                process: "NH₃ → NO₂⁻ → NO₃⁻",
                organisms: {
                    step1: "Nitrosomonas (NH₃ → NO₂⁻)",
                    step2: "Nitrobacter (NO₂⁻ → NO₃⁻)"
                },
                type: "Chemoautotrophic",
                significance: "Nitrogen cycle, soil fertility"
            },
            denitrification: {
                process: "NO₃⁻ → NO₂⁻ → N₂O → N₂",
                organisms: "Pseudomonas, Paracoccus",
                conditions: "Anaerobic",
                significance: "Completes nitrogen cycle, returns N₂ to atmosphere"
            },
            sulfurMetabolism: {
                sulfurOxidation: "H₂S → S → SO₄²⁻ (Thiobacillus)",
                sulfateReduction: "SO₄²⁻ → H₂S (Desulfovibrio)",
                significance: "Sulfur cycle, energy source for chemolithotrophs"
            },
            methanogenesis: {
                process: "CO₂ + 4H₂ → CH₄ + 2H₂O",
                organisms: "Methanogens (Archaea: Methanobacterium, Methanosarcina)",
                conditions: "Strictly anaerobic",
                habitats: "Swamps, ruminant guts, sewage treatment, deep ocean",
                significance: "Carbon cycle, greenhouse gas production, biofuel"
            }
        };

        const metabolicDiversity = {
            extremophiles: {
                thermophiles: "High temperature metabolism",
                psychrophiles: "Cold-adapted enzymes",
                acidophiles: "Maintain neutral cytoplasm in acidic environment",
                alkaliphiles: "Adapted to high pH",
                halophiles: "High salt tolerance, compatible solutes"
            },
            industrialApplications: {
                fermentation: "Food, beverages, biofuels",
                antibioticProduction: "Secondary metabolites",
                enzymeProduction: "Industrial processes",
                bioremediation: "Pollutant degradation",
                biofuel: "Ethanol, methane, hydrogen production"
            }
        };

        return {
            topic: "Microbial Metabolism",
            energyCategories: energyCategories,
            catabolism: catabolism,
            anabolism: anabolism,
            specializedMetabolism: specializedMetabolism,
            metabolicDiversity: metabolicDiversity,
            nutritionalClassification: {
                summary: "Organisms classified by energy source, electron source, carbon source",
                examples: {
                    photoautotrophs: "Cyanobacteria (light, H₂O, CO₂)",
                    photoheterotrophs: "Purple non-sulfur bacteria (light, organics, organics)",
                    chemoautotrophs: "Nitrosomonas (NH₃, NH₃, CO₂)",
                    chemoheterotrophs: "E. coli (glucose, glucose, glucose)"
                }
            },
            enzymes: {
                role: "Catalyze metabolic reactions",
                regulation: "Feedback inhibition, enzyme induction/repression",
                cofactors: "NAD⁺, FAD, coenzyme A, vitamins"
            },
            category: 'microbial_metabolism'
        };
    }

    handleMicrobialGenetics(problem) {
        const bacterialGenome = {
            chromosome: {
                structure: "Single, circular, double-stranded DNA",
                location: "Nucleoid region (not membrane-bound)",
                size: "Typically 0.5-10 million base pairs",
                genes: "~1000-5000 genes",
                organization: "Compact, little non-coding DNA",
                example: "E. coli: 4.6 million bp, ~4300 genes"
            },
            plasmids: {
                structure: "Small, circular, double-stranded DNA",
                location: "Cytoplasm (separate from chromosome)",
                size: "1-200 kilobase pairs",
                genes: "Few to hundreds of genes",
                characteristics: [
                    "Autonomously replicating",
                    "Not essential for survival (usually)",
                    "Can be transferred between cells",
                    "Often carry advantageous traits"
                ],
                types: {
                    F_plasmid: "Fertility plasmid (conjugation)",
                    R_plasmid: "Resistance plasmid (antibiotic resistance)",
                    Col_plasmid: "Colicin plasmid (bacteriocin production)",
                    virulence: "Encode toxins and virulence factors"
                },
                copyNumber: "Low (1-2 per cell) or high (10-100+ per cell)"
            },
            transposons: {
                description: "Mobile genetic elements ('jumping genes')",
                structure: "DNA sequences that can move within genome",
                types: {
                    insertionSequences: "Simple (only genes for transposition)",
                    compositeTransposons: "Carry additional genes (e.g., antibiotic resistance)"
                },
                mechanism: "Cut-and-paste or copy-and-paste",
                significance: "Genetic variation, gene rearrangement, antibiotic resistance spread"
            }
        };

        const mutations = {
            spontaneous: {
                causes: [
                    "DNA replication errors",
                    "Spontaneous DNA damage (depurination, deamination)",
                    "Tautomeric shifts"
                ],
                rate: "10⁻⁶ to 10⁻⁹ per base pair per generation",
                correction: "DNA proofreading and repair mechanisms"
            },
            induced: {
                mutagens: {
                    chemical: [
                        "Base analogs (5-bromouracil)",
                        "Alkylating agents (nitrous acid, ethyl methanesulfonate)",
                        "Intercalating agents (acridine dyes - cause frameshift)"
                    ],
                    physical: [
                        "UV radiation (thymine dimers)",
                        "X-rays (DNA breaks)",
                        "Gamma radiation"
                    ]
                }
            },
            types: {
                pointMutations: {
                    silent: "No amino acid change (wobble position)",
                    missense: "Different amino acid",
                    nonsense: "Creates stop codon",
                    examples: "Single nucleotide change"
                },
                frameshiftMutations: {
                    insertion: "Add nucleotides",
                    deletion: "Remove nucleotides",
                    effect: "Shifts reading frame, usually severe",
                    correction: "Multiple insertions/deletions can restore frame"
                }
            },
            repairMechanisms: {
                photorepair: "Light-activated enzyme repairs thymine dimers",
                excisionRepair: "Remove and replace damaged DNA",
                mismatchRepair: "Corrects base-pairing errors",
                SOS_response: "Error-prone repair when DNA severely damaged"
            }
        };

        const horizontalGeneTransfer = {
            transformation: {
                definition: "Uptake of naked DNA from environment",
                requirements: "Competent cells (able to take up DNA)",
                mechanism: [
                    "DNA binds to surface receptors",
                    "DNA transported across membrane",
                    "One strand degraded, other integrates into chromosome"
                ],
                naturalCompetence: "Streptococcus pneumoniae, Haemophilus influenzae, Neisseria",
                artificialCompetence: "Heat shock, electroporation (used in labs)",
                significance: "Discovered by Griffith (1928), basis for genetic engineering",
                example: "Antibiotic resistance gene uptake"
            },
            conjugation: {
                definition: "Direct transfer of DNA via cell-to-cell contact",
                requirements: "Donor with F (fertility) plasmid, recipient without",
                mechanism: [
                    "Pilus extends from donor (F⁺) to recipient (F⁻)",
                    "Cells pulled together",
                    "One strand of F plasmid transferred (rolling circle replication)",
                    "Both cells synthesize complementary strand"
                ],
                types: {
                    F_plus: "F⁺ × F⁻ → F⁺ × F⁺ (plasmid transfer)",
                    Hfr: "High-frequency recombination (F plasmid integrated into chromosome, transfers chromosomal DNA)",
                    F_prime: "F' contains some chromosomal genes"
                },
                significance: "Major mechanism of antibiotic resistance spread",
                organisms: "Gram-negative bacteria primarily, some Gram-positive"
            },
            transduction: {
                definition: "Viral-mediated DNA transfer",
                mechanism: "Bacteriophage transfers bacterial DNA between cells",
                types: {
                    generalizedTransduction: {
                        process: "Phage accidentally packages bacterial DNA instead of phage DNA during lytic cycle",
                        DNA: "Any bacterial genes (random)",
                        phages: "Lytic phages (e.g., P1, P22)"
                    },
                    specializedTransduction: {
                        process: "Prophage excises incorrectly, taking adjacent bacterial genes",
                        DNA: "Only genes near prophage integration site",
                        phages: "Temperate phages (e.g., lambda)"
                    }
                },
                frequency: "Rare (1 in 10⁶-10⁸ phage particles)",
                significance: "Transfers virulence genes (e.g., diphtheria toxin, cholera toxin)"
            }
        };

        const geneRegulation = {
            operonModel: {
                structure: "Cluster of genes under control of single promoter",
                components: {
                    structural_genes: "Encode enzymes",
                    promoter: "RNA polymerase binding site",
                    operator: "Repressor protein binding site",
                    regulator_gene: "Encodes repressor or activator"
                }
            },
            lacOperon: {
                type: "Inducible (turned on by substrate)",
                function: "Lactose metabolism",
                genes: "lacZ (β-galactosidase), lacY (permease), lacA (transacetylase)",
                regulation: {
                    absence_of_lactose: "Repressor binds operator → transcription blocked",
                    presence_of_lactose: "Allolactose binds repressor → repressor releases → transcription occurs",
                    catabolite_repression: "Low glucose → high cAMP → CAP-cAMP activates transcription"
                },
                logic: "ON when lactose present AND glucose absent"
            },
            trpOperon: {
                type: "Repressible (turned off by product)",
                function: "Tryptophan biosynthesis",
                genes: "trpE, trpD, trpC, trpB, trpA (enzymes for tryptophan synthesis)",
                regulation: {
                    absence_of_tryptophan: "Repressor inactive → transcription occurs",
                    presence_of_tryptophan: "Tryptophan (corepressor) binds repressor → repressor active → blocks transcription",
                    attenuation: "Additional control by premature transcription termination"
                },
                logic: "ON when tryptophan absent, OFF when tryptophan present"
            }
        };

        const antibioticResistance = {
            mechanisms: {
                enzymaticInactivation: {
                    description: "Enzymes modify or destroy antibiotic",
                    examples: [
                        "β-lactamases (hydrolyze penicillins, cephalosporins)",
                        "Aminoglycoside-modifying enzymes",
                        "Chloramphenicol acetyltransferase"
                    ],
                    prevalence: "Most common resistance mechanism"
                },
                targetModification: {
                    description: "Alter antibiotic target so drug cannot bind",
                    examples: [
                        "Altered penicillin-binding proteins (MRSA)",
                        "Ribosomal mutations (streptomycin resistance)",
                        "Modified DNA gyrase (fluoroquinolone resistance)"
                    ]
                },
                reducedPermeability: {
                    description: "Decrease antibiotic entry into cell",
                    examples: [
                        "Porin mutations (β-lactam resistance in Pseudomonas)",
                        "Altered membrane lipids"
                    ],
                    organisms: "Primarily Gram-negative bacteria"
                },
                effluxPumps: {
                    description: "Actively pump antibiotic out of cell",
                    examples: "Tetracycline, fluoroquinolones, macrolides",
                    pumps: "Multidrug resistance (MDR) pumps",
                    energy: "ATP or proton-motive force"
                },
                metabolicBypass: {
                    description: "Use alternative pathway",
                    example: "Sulfonamide resistance (altered folate synthesis pathway)"
                }
            },
            acquisition: {
                mutation: "Spontaneous mutations in chromosomal genes",
                horizontalTransfer: "Plasmids, transposons, integrons via transformation, conjugation, transduction"
            },
            multidrugResistance: {
                definition: "Resistance to multiple antibiotic classes",
                mechanisms: "Multiple resistance genes on plasmids or transposons",
                examples: "MRSA, VRE, CRE, XDR-TB",
                concern: "Limits treatment options"
            },
            prevention: {
                strategies: [
                    "Antibiotic stewardship",
                    "Appropriate prescribing",
                    "Infection control",
                    "Surveillance",
                    "New antibiotic development",
                    "Alternative therapies (phage therapy)"
                ]
            }
        };

        const molecularTechniques = {
            PCR: {
                name: "Polymerase Chain Reaction",
                purpose: "Amplify specific DNA sequences",
                applications: "Diagnostics, gene cloning, forensics"
            },
            DNA_sequencing: {
                methods: "Sanger sequencing, next-generation sequencing",
                applications: "Genome projects, identifying mutations, phylogenetics"
            },
            CRISPR: {
                name: "Clustered Regularly Interspaced Short Palindromic Repeats",
                origin: "Bacterial immune system against phages",
                application: "Gene editing in research and therapy"
            },
            recombinantDNA: {
                process: "Insert foreign DNA into plasmid, transform into bacteria",
                applications: "Produce insulin, growth hormone, vaccines"
            }
        };

        return {
            topic: "Microbial Genetics",
            bacterialGenome: bacterialGenome,
            mutations: mutations,
            horizontalGeneTransfer: horizontalGeneTransfer,
            geneRegulation: geneRegulation,
            antibioticResistance: antibioticResistance,
            molecularTechniques: molecularTechniques,
            geneticVariation: {
                sources: ["Mutations", "Horizontal gene transfer", "Recombination"],
                importance: "Adaptation, evolution, antibiotic resistance"
            },
            category: 'microbial_genetics'
        };
    }

    handleMicrobialControl(problem) {
        const terminology = {
            sterilization: {
                definition: "Complete destruction or removal of ALL microorganisms and spores",
                level: "Absolute (no viable organisms remain)",
                methods: "Autoclaving, incineration, filtration (for liquids), ethylene oxide gas",
                applications: "Surgical instruments, culture media, IV fluids"
            },
            disinfection: {
                definition: "Destruction of vegetative pathogens (not necessarily spores)",
                level: "Reduces microbial load to safe levels",
                surface: "Inanimate objects",
                methods: "Chemical disinfectants (bleach, phenolics, alcohols)",
                levels: {
                    high: "Destroys all microbes except high numbers of spores",
                    intermediate: "Destroys vegetative bacteria, fungi, viruses; some spores",
                    low: "Destroys vegetative bacteria, fungi, enveloped viruses"
                }
            },
            antisepsis: {
                definition: "Destruction or inhibition of pathogens on living tissue",
                surface: "Skin, mucous membranes",
                agents: "Antiseptics (less toxic than disinfectants)",
                examples: "Alcohol swabs, iodine, hydrogen peroxide, chlorhexidine"
            },
            sanitization: {
                definition: "Reduction of microbial population to safe public health levels",
                level: "Reduces but doesn't eliminate microbes",
                applications: "Food service, public facilities",
                example: "Dishwashing, restaurant cleaning"
            },
            degerming: {
                definition: "Physical removal of microbes from skin",
                method: "Mechanical (scrubbing, washing)",
                example: "Handwashing with soap"
            },
            bacteriostatic: {
                definition: "Inhibits bacterial growth without killing",
                reversibility: "Bacteria resume growth when agent removed",
                examples: "Some antibiotics at low concentrations, refrigeration"
            },
            bactericidal: {
                definition: "Kills bacteria",
                irreversibility: "Permanent",
                examples: "Most disinfectants, autoclaving, many antibiotics"
            }
        };

        const physicalMethods = {
            heat: {
                moist_heat: {
                    effectiveness: "Most effective (denatures proteins, disrupts membranes)",
                    methods: {
                        autoclave: {
                            conditions: "121°C, 15 psi pressure, 15-20 minutes",
                            principle: "Steam under pressure (higher temperature than boiling)",
                            use: "Sterilization of culture media, instruments, lab waste",
                            indicator: "Spore strips (Geobacillus stearothermophilus)",
                            kills: "All microorganisms including endospores"
                        },
                        boiling: {
                            conditions: "100°C, 10+ minutes",
                            effectiveness: "Kills vegetative cells, many viruses; NOT spores",
                            use: "Water purification, home sterilization",
                            limitation: "Cannot sterilize (spores survive)"
                        },
                        pasteurization: {
                            conditions: "63°C for 30 min (batch) OR 72°C for 15 sec (flash)",
                            purpose: "Reduce pathogens and spoilage organisms in food/beverages",
                            examples: "Milk, juice, beer",
                            note: "NOT sterilization (some organisms survive)"
                        }
                    }
                },
                dry_heat: {
                    effectiveness: "Less effective than moist heat (requires higher temperatures)",
                    mechanism: "Oxidation, dehydration",
                    methods: {
                        incineration: {
                            conditions: "Complete burning",
                            use: "Disposal of contaminated materials, inoculating loops",
                            effectiveness: "Complete sterilization"
                        },
                        hotAirOven: {
                            conditions: "160-170°C for 2-4 hours",
                            use: "Glassware, powders, oils (items damaged by moisture)",
                            slower: "Requires longer time than autoclaving"
                        }
                    }
                }
            },
            lowTemperatures: {
                refrigeration: {
                    temperature: "0-7°C",
                    effect: "Bacteriostatic (slows growth, doesn't kill)",
                    use: "Food preservation, cultures"
                },
                freezing: {
                    temperature: "-20°C or lower",
                    effect: "Bacteriostatic, some killing (ice crystal damage)",
                    use: "Long-term food storage, culture preservation",
                    note: "Many organisms survive freezing"
                }
            },
            filtration: {
                mechanism: "Physical removal (doesn't kill)",
                types: {
                    HEPA: {
                        name: "High-Efficiency Particulate Air",
                        poreSize: "0.3 μm",
                        use: "Air filtration in hospitals, labs, cleanrooms"
                    },
                    membrane: {
                        poreSize: "0.22 or 0.45 μm",
                        use: "Sterilize heat-sensitive liquids (vaccines, enzymes, culture media supplements)",
                        removes: "Bacteria, fungi; NOT viruses (too small)"
                    }
                },
                advantage: "Suitable for heat-sensitive materials"
            },
            radiation: {
                ionizing: {
                    types: "Gamma rays, X-rays, electron beams",
                    mechanism: "Creates reactive oxygen species, damages DNA",
                    penetration: "High (passes through materials)",
                    use: "Sterilize medical supplies, food irradiation, spices",
                    advantage: "Penetrates packaging"
                },
                nonIonizing: {
                    type: "UV light (260 nm)",
                    mechanism: "Thymine dimer formation in DNA",
                    penetration: "Poor (surface only, doesn't penetrate)",
                    use: "Air disinfection, surface disinfection, water treatment, biosafety cabinets",
                    limitation: "Shadows, organic matter reduce effectiveness"
                }
            },
            desiccation: {
                mechanism: "Removal of water (inhibits metabolism)",
                effect: "Bacteriostatic (many organisms survive in dormant state)",
                resistance: "Endospores, cysts highly resistant",
                examples: "Food preservation (jerky, dried fruits)"
            },
            osmoticPressure: {
                mechanism: "High solute concentration (salt, sugar) causes plasmolysis",
                effect: "Bacteriostatic (some organisms killed)",
                use: "Food preservation (jams, pickles, salted meats)",
                resistance: "Halophiles, osmotolerant organisms can survive"
            }
        };

        const chemicalMethods = {
            phenolics: {
                examples: "Phenol, cresols, hexachlorophene, triclosan",
                mechanism: "Denature proteins, disrupt cell membranes",
                use: "Disinfectants, antiseptics",
                spectrum: "Broad (bacteria, fungi, some viruses)",
                advantages: "Remain active in organic matter, residual activity",
                disadvantages: "Toxic, skin irritation, environmental concerns (triclosan)"
            },
            alcohols: {
                examples: "Ethanol (70%), isopropanol (70-90%)",
                mechanism: "Denature proteins, dissolve lipids",
                use: "Antiseptics (skin prep), disinfection of surfaces",
                spectrum: "Good against bacteria, fungi, enveloped viruses",
                optimal: "70% alcohol (more effective than 100% - needs water for denaturation)",
                limitations: "Not sporicidal, evaporates quickly, damages rubber/plastics",
                timeframe: "10-15 seconds for hand sanitization"
            },
            halogens: {
                chlorine: {
                    forms: "Bleach (sodium hypochlorite), chlorine gas",
                    mechanism: "Oxidizing agent, disrupts enzymes and proteins",
                    use: "Water disinfection, surface disinfection, sanitization",
                    concentration: "0.5-5% for disinfection",
                    spectrum: "Broad (bacteria, viruses, fungi, protozoa)",
                    advantages: "Inexpensive, fast-acting",
                    disadvantages: "Corrosive, inactivated by organic matter, irritating fumes"
                },
                iodine: {
                    forms: "Tincture (alcohol solution), iodophors (Betadine)",
                    mechanism: "Oxidizing agent, penetrates cells",
                    use: "Antiseptic (skin prep before surgery)",
                    spectrum: "Broad",
                    advantages: "Less irritating than chlorine (as iodophor)",
                    disadvantages: "Stains, allergies, inactivated by organic matter"
                }
            },
            heavyMetals: {
                examples: "Silver nitrate, mercuric chloride, copper sulfate",
                mechanism: "Denature proteins, inactivate enzymes",
                use: "Limited (toxicity) - silver for eye infections, copper for algae control",
                effectiveness: "Bactericidal at high concentrations, bacteriostatic at low",
                disadvantages: "Toxic to humans, environmental concerns",
                historical: "Previously used more widely, now replaced by safer agents"
            },
            surfactants: {
                quaternaryAmmoniumCompounds: {
                    examples: "Benzalkonium chloride, cetylpyridinium chloride",
                    mechanism: "Disrupt cell membranes",
                    use: "Disinfectants, antiseptics, sanitizers",
                    spectrum: "Good against Gram-positive bacteria, less effective against Gram-negative",
                    advantages: "Non-toxic, odorless, colorless, stable",
                    disadvantages: "Neutralized by soap, organic matter",
                    applications: "Mouthwash, contact lens solutions, sanitizers"
                },
                soaps: {
                    mechanism: "Mechanical removal (emulsify oils), mild antimicrobial",
                    use: "Degerming (handwashing)",
                    note: "Primarily physical removal, not strong antimicrobial"
                }
            },
            aldehydes: {
                formaldehyde: {
                    concentration: "37% solution (formalin)",
                    mechanism: "Cross-links proteins and nucleic acids",
                    use: "Disinfection, tissue preservation, vaccine inactivation",
                    effectiveness: "Sporicidal (high concentration, long exposure)",
                    disadvantages: "Toxic, carcinogenic, irritating fumes"
                },
                glutaraldehyde: {
                    concentration: "2% solution",
                    mechanism: "Cross-links proteins",
                    use: "High-level disinfection of medical equipment",
                    advantages: "Less irritating than formaldehyde, broad spectrum",
                    timeframe: "10-30 minutes for high-level disinfection"
                }
            },
            oxidizingAgents: {
                hydrogenPeroxide: {
                    concentration: "3% (antiseptic), 6-25% (disinfection)",
                    mechanism: "Oxidizing agent, produces free radicals",
                    use: "Antiseptic, disinfection, sterilization (vaporized)",
                    spectrum: "Broad",
                    advantages: "Breaks down to water and oxygen (environmentally friendly)",
                    note: "Bubbling indicates catalase activity (tissue enzymes)"
                },
                peracetic_acid: {
                    mechanism: "Strong oxidizer",
                    use: "Sterilization of medical devices, food equipment",
                    advantages: "Fast-acting, broad spectrum, no toxic residues"
                }
            },
            ethyleneOxide: {
                state: "Gas",
                mechanism: "Alkylating agent (damages DNA, proteins)",
                use: "Sterilization of heat-sensitive items (plastics, electronics)",
                conditions: "50-60°C, 8-12 hours",
                advantages: "Penetrates packaging, effective against all organisms including spores",
                disadvantages: "Toxic, flammable, carcinogenic, requires aeration period",
                applications: "Medical devices, plastic items, spices"
            }
        };

        const antimicrobialDrugs = {
            antibacterials: {
                cellWallInhibitors: {
                    mechanism: "Inhibit peptidoglycan synthesis",
                    types: {
                        penicillins: {
                            mechanism: "Bind penicillin-binding proteins (PBPs), inhibit transpeptidase",
                            spectrum: "Narrow (Gram-positive) to broad (ampicillin, amoxicillin)",
                            resistance: "β-lactamases",
                            examples: "Penicillin G, ampicillin, amoxicillin"
                        },
                        cephalosporins: {
                            mechanism: "Similar to penicillins (β-lactam ring)",
                            generations: "1st through 5th (increasing Gram-negative coverage)",
                            resistance: "β-lactamases (less susceptible than penicillins)",
                            examples: "Cephalexin, ceftriaxone, ceftaroline"
                        },
                        vancomycin: {
                            mechanism: "Binds D-Ala-D-Ala terminus, prevents peptidoglycan cross-linking",
                            spectrum: "Gram-positive only (cannot penetrate outer membrane)",
                            use: "MRSA, C. difficile",
                            resistance: "VRE (altered target)"
                        }
                    }
                },
                proteinSynthesisInhibitors: {
                    mechanism: "Bind bacterial ribosomes (70S)",
                    types: {
                        aminoglycosides: {
                            mechanism: "Bind 30S subunit, cause misreading of mRNA",
                            effect: "Bactericidal",
                            examples: "Streptomycin, gentamicin, tobramycin",
                            toxicity: "Ototoxicity, nephrotoxicity"
                        },
                        tetracyclines: {
                            mechanism: "Bind 30S subunit, block tRNA binding",
                            effect: "Bacteriostatic",
                            spectrum: "Broad",
                            examples: "Tetracycline, doxycycline",
                            side_effects: "Tooth discoloration (children), photosensitivity"
                        },
                        macrolides: {
                            mechanism: "Bind 50S subunit, block elongation",
                            effect: "Bacteriostatic",
                            examples: "Erythromycin, azithromycin (Z-pack)",
                            use: "Respiratory infections, alternative to penicillin"
                        },
                        chloramphenicol: {
                            mechanism: "Binds 50S subunit, inhibits peptidyl transferase",
                            effect: "Bacteriostatic",
                            use: "Limited (serious infections only) due to toxicity",
                            toxicity: "Bone marrow suppression (aplastic anemia)"
                        }
                    }
                },
                nucleicAcidInhibitors: {
                    fluoroquinolones: {
                        mechanism: "Inhibit DNA gyrase and topoisomerase IV",
                        effect: "Bactericidal",
                        spectrum: "Broad",
                        examples: "Ciprofloxacin, levofloxacin",
                        use: "UTIs, respiratory, anthrax",
                        side_effects: "Tendon rupture, CNS effects"
                    },
                    rifampin: {
                        mechanism: "Inhibits RNA polymerase",
                        effect: "Bactericidal",
                        use: "Tuberculosis (combination therapy), meningitis prophylaxis",
                        resistance: "Develops rapidly (always use combinations)"
                    }
                },
                metabolicInhibitors: {
                    sulfonamides: {
                        mechanism: "Competitive inhibitor of PABA (folate synthesis pathway)",
                        effect: "Bacteriostatic",
                        spectrum: "Broad",
                        examples: "Sulfamethoxazole (often combined with trimethoprim)",
                        use: "UTIs, opportunistic infections"
                    },
                    trimethoprim: {
                        mechanism: "Inhibits dihydrofolate reductase (later step in folate synthesis)",
                        synergy: "Combined with sulfamethoxazole (Bactrim, Septra)",
                        use: "UTIs, Pneumocystis pneumonia"
                    }
                }
            },
            antivirals: {
                limitations: "Fewer targets (viruses use host machinery)",
                types: {
                    nucleosideAnalogs: {
                        mechanism: "Mimic nucleosides, inhibit viral DNA/RNA synthesis",
                        examples: "Acyclovir (herpes), zidovudine/AZT (HIV), ribavirin"
                    },
                    protease_inhibitors: {
                        mechanism: "Block viral protease (prevents viral protein processing)",
                        examples: "HIV protease inhibitors (-navir drugs: ritonavir, saquinavir)"
                    },
                    neuraminidaseinhibitors: {
                        mechanism: "Block viral release from host cells",
                        examples: "Oseltamivir (Tamiflu), zanamivir (Relenza)",
                        use: "Influenza"
                    },
                    entry_inhibitors: {
                        mechanism: "Block viral attachment or entry",
                        examples: "Maraviroc (HIV), enfuvirtide (HIV fusion inhibitor)"
                    }
                }
            },
            antifungals: {
                polyenes: {
                    mechanism: "Bind ergosterol (fungal membrane sterol)",
                    examples: "Amphotericin B, nystatin",
                    use: "Systemic (amphotericin) or topical (nystatin) mycoses",
                    toxicity: "Nephrotoxicity (amphotericin)"
                },
                azoles: {
                    mechanism: "Inhibit ergosterol synthesis",
                    examples: "Fluconazole, itraconazole, voriconazole",
                    spectrum: "Broad",
                    use: "Systemic and topical infections"
                },
                echinocandins: {
                    mechanism: "Inhibit β-glucan synthesis (cell wall)",
                    examples: "Caspofungin, micafungin",
                    use: "Invasive candidiasis, aspergillosis"
                }
            }
        };

        const resistancePrevention = {
            healthcare: {
                strategies: [
                    "Infection control (hand hygiene, isolation)",
                    "Antibiotic stewardship programs",
                    "Appropriate prescribing (correct drug, dose, duration)",
                    "Avoid prophylactic antibiotics when not indicated",
                    "Complete prescribed courses"
                ]
            },
            agriculture: {
                issues: "Overuse of antibiotics in livestock",
                solutions: "Reduce non-therapeutic use, surveillance"
            },
            research: {
                needs: [
                    "New antibiotic development",
                    "Alternative therapies (phage therapy, antibodies)",
                    "Rapid diagnostics",
                    "Vaccines"
                ]
            }
        };

        return {
            topic: "Microbial Control",
            terminology: terminology,
            physicalMethods: physicalMethods,
            chemicalMethods: chemicalMethods,
            antimicrobialDrugs: antimicrobialDrugs,
            resistancePrevention: resistancePrevention,
            factorsAffectingEfficacy: {
                factors: [
                    "Number of microorganisms (higher load = longer time)",
                    "Type of microorganism (spores most resistant)",
                    "Environmental conditions (temperature, pH, organic matter)",
                    "Time of exposure",
                    "Concentration of agent"
                ]
            },
            sporeResistance: {
                reason: "Spore coat, low water content, calcium-dipicolinic acid complex",
                resistance: "Heat, chemicals, radiation, desiccation",
                organisms: "Bacillus, Clostridium",
                significance: "Most resistant form of microbial life"
            },
            category: 'microbial_control'
        };
    }

    handlePathogenicMicrobes(problem) {
        const pathogenesis = {
            stagesOfInfection: {
                entry: {
                    portals: [
                        "Mucous membranes (respiratory, GI, GU, conjunctiva)",
                        "Skin (wounds, hair follicles, arthropod bites)",
                        "Parenteral (injection, surgery, trauma)"
                    ],
                    examples: {
                        respiratory: "Influenza, tuberculosis, common cold",
                        GI: "Salmonella, cholera, hepatitis A",
                        skin: "Staphylococcus (wound infections), tetanus (puncture)",
                        parenteral: "HIV, hepatitis B (needles), malaria (mosquito)"
                    }
                },
                adhesion: {
                    definition: "Attachment to host cells",
                    mechanisms: {
                        adhesins: "Proteins or glycoproteins on microbial surface",
                        ligands: "Bind specific receptors on host cells"
                    },
                    examples: [
                        "Pili/fimbriae (E. coli, Neisseria)",
                        "Glycocalyx/capsule (Streptococcus)",
                        "Viral spike proteins (influenza hemagglutinin)"
                    ],
                    importance: "Determines tissue tropism, prevents removal"
                },
                colonization: {
                    definition: "Multiplication at entry site",
                    requirements: "Overcome host defenses, compete with normal flora",
                    biofilm: "Some pathogens form biofilms for protection"
                },
                invasion: {
                    definition: "Spread to deeper tissues",
                    mechanisms: {
                        enzymes: [
                            "Hyaluronidase (breaks down connective tissue)",
                            "Collagenase (breaks down collagen)",
                            "Coagulase (clots plasma, protects from phagocytosis)",
                            "Kinases (dissolve blood clots, aid spread)"
                        ],
                        motility: "Flagella aid movement",
                        penetration: "Direct penetration of cell membranes"
                    }
                },
                damage: {
                    mechanisms: [
                        "Direct damage (cell lysis, tissue destruction)",
                        "Toxin production (exotoxins, endotoxins)",
                        "Immune response (inflammation, hypersensitivity)",
                        "Nutrient depletion"
                    ]
                },
                exit: {
                    portals: [
                        "Respiratory (coughing, sneezing)",
                        "GI (feces, vomiting)",
                        "Urogenital (urine, sexual secretions)",
                        "Blood (arthropods, needles)",
                        "Skin (lesions, shedding)"
                    ],
                    importance: "Transmission to new hosts"
                }
            },
            virulenceFactors: {
                adhesins: {
                    function: "Attachment to host cells",
                    examples: "Pili, fimbriae, glycocalyx, spike proteins"
                },
                capsules: {
                    function: "Antiphagocytic (prevents complement binding and phagocytosis)",
                    examples: "Streptococcus pneumoniae, Klebsiella, Haemophilus influenzae"
                },
                invasins: {
                    function: "Promote invasion into host cells",
                    examples: "Salmonella, Shigella"
                },
                intracellularSurvival: {
                    function: "Survive inside phagocytes",
                    mechanisms: [
                        "Prevent phagosome-lysosome fusion (Mycobacterium)",
                        "Escape from phagosome (Listeria)",
                        "Resist lysosomal enzymes"
                    ]
                },
                antiphagocyticFactors: {
                    types: [
                        "Capsules (most common)",
                        "M protein (Streptococcus pyogenes)",
                        "Protein A (Staphylococcus aureus - binds antibodies backwards)"
                    ]
                },
                toxins: {
                    exotoxins: {
                        type: "Secreted proteins",
                        producedBy: "Mostly Gram-positive (some Gram-negative)",
                        potency: "Extremely potent (ng-μg quantities lethal)",
                        heatStability: "Heat-labile (destroyed by boiling)",
                        antigenicity: "Highly antigenic (stimulate antibody production - antitoxins)",

                        types: {
                            cytotoxins: "Kill host cells",
                            neurotoxins: "Affect nervous system",
                            enterotoxins: "Affect intestinal cells (diarrhea, vomiting)"
                        },
                        examples: {
                            /**diphtheriaT oxin: "Inhibits protein synthesis",*/
                            tetanusToxin: "Blocks inhibitory neurons (spastic paralysis)",
                            botulinum: "Blocks Ach release (flaccid paralysis)",
                            choleraEnterotoxin: "Activates adenylyl cyclase (massive fluid loss)"
                        },
                        toxoids: "Inactivated toxins used as vaccines"
                    },
                    endotoxin: {
                        type: "Lipopolysaccharide (LPS) from Gram-negative outer membrane",
                        release: "When cell lyses or divides",
                        component: "Lipid A (toxic portion)",
                        potency: "Less potent than exotoxins",
                        heatStability: "Heat-stable",
                        antigenicity: "Weakly antigenic",
                        effects: {
                            fever: "Induces IL-1 release (pyrogen)",
                            shock: "Hypotension, DIC (disseminated intravascular coagulation)",
                            inflammation: "Activates complement, macrophages"
                        },
                        examples: "E. coli, Salmonella, Shigella, Neisseria",
                        septicShock: "Life-threatening response to endotoxin in bloodstream"
                    }
                }
            }
        };

        const majorPathogens = {
            bacterialPathogens: {
                streptococcusPyogenes: {
                    disease: "Strep throat, scarlet fever, necrotizing fasciitis",
                    virulence: ["M protein", "Streptolysin O/S", "Erythrogenic toxin"],
                    complications: "Rheumatic fever, glomerulonephritis"
                },
                staphylococcusAureus: {
                    diseases: "Skin infections, food poisoning, toxic shock syndrome, pneumonia",
                    virulence: ["Coagulase", "Protein A", "Toxins (TSST, enterotoxins)"],
                    resistance: "MRSA (methicillin-resistant)"
                },
                clostridiTetani: {
                    disease: "Tetanus (lockjaw)",
                    virulence: "Tetanospasmin (neurotoxin)",
                    prevention: "DTaP vaccine (toxoid)"
                },
                clostridiumBotulinum: {
                    disease: "Botulism (food-borne, wound, infant)",
                    virulence: "Botulinum toxin (most potent toxin known)",
                    use: "Botox (cosmetic, medical)",
                    prevention: "Proper canning, avoid honey in infants"
                },
                mycobacteriumTuberculosis: {
                    disease: "Tuberculosis (lungs, disseminated)",
                    virulence: ["Survives in macrophages", "Cord factor", "Waxy cell wall"],
                    transmission: "Airborne",
                    treatment: "Multiple drug therapy (6+ months)"
                },
                escherichiacoli: {
                    strains: {
                        normal: "Normal gut flora, beneficial",
                        ETEC: "Enterotoxigenic (traveler's diarrhea)",
                        EHEC: "Enterohemorrhagic O157:H7 (Shiga toxin, HUS)",
                        EPEC: "Enteropathogenic (infant diarrhea)",
                        UPEC: "Uropathogenic (UTIs)"
                    }
                },
                salmonella: {
                    diseases: "Gastroenteritis, typhoid fever (S. typhi)",
                    transmission: "Contaminated food (poultry, eggs)",
                    virulence: "Invasion, endotoxin"
                },
                pseudomonasAeruginosa: {
                    type: "Opportunistic pathogen",
                    diseases: "Burn infections, pneumonia (cystic fibrosis)",
                    characteristics: "Antibiotic resistant, biofilm formation",
                    environment: "Water, soil, hospitals"
                }
            },
            viralPathogens: {
                influenza: {
                    type: "Orthomyxovirus (segmented RNA)",
                    disease: "Seasonal flu, pandemics",
                    variation: "Antigenic drift (mutations), antigenic shift (reassortment)",
                    prevention: "Annual vaccine"
                },
                HIV: {
                    type: "Retrovirus",
                    disease: "AIDS",
                    target: "CD4+ T cells",
                    transmission: "Blood, sexual, vertical",
                    treatment: "Antiretroviral therapy (ART)"
                },
                hepatitis: {
                    types: {
                        hepatitisA: "HAV (RNA), fecal-oral, acute, vaccine available",
                        hepatitisB: "HBV (DNA), blood/sexual, chronic, vaccine available",
                        hepatitisC: "HCV (RNA), blood, chronic, no vaccine, curable with DAAs"
                    },
                    consequences: "Cirrhosis, liver cancer (B, C)"
                },
                herpesSimplex: {
                    types: "HSV-1 (oral), HSV-2 (genital)",
                    characteristic: "Latency in neurons, periodic reactivation",
                    treatment: "Acyclovir (suppressive, not curative)"
                },
                SARS_CoV_2: {
                    disease: "COVID-19",
                    transmission: "Respiratory droplets, aerosols",
                    spectrum: "Asymptomatic to severe pneumonia/ARDS",
                    prevention: "Vaccines (mRNA, viral vector), masks, distancing"
                }
            },
            fungalPathogens: {
                candidaAlbicans: {
                    type: "Opportunistic yeast",
                    diseases: "Thrush, vaginitis, systemic (immunocompromised)",
                    virulence: "Dimorphism, biofilms, adhesins"
                },
                aspergillusFumigatus: {
                    type: "Opportunistic mold",
                    diseases: "Aspergillosis (invasive in immunocompromised)",
                    transmission: "Inhalation of conidia"
                },
                cryptococcusNeoformans: {
                    type: "Encapsulated yeast",
                    disease: "Meningitis (especially AIDS patients)",
                    virulence: "Polysaccharide capsule"
                }
            },
            parasitProtists: {
                plasmodiumFalciparum: {
                    disease: "Malaria",
                    transmission: "Anopheles mosquito",
                    lifecycle: "Complex (liver, RBC stages)",
                    treatment: "Artemisinin combinations"
                },
                giardiaLamblia: {
                    disease: "Giardiasis (diarrhea)",
                    transmission: "Contaminated water (cysts)",
                    common: "Most common intestinal parasite in US"
                },
                toxoplasmaGondii: {
                    disease: "Toxoplasmosis",
                    transmission: "Cat feces, undercooked meat",
                    risk: "Severe in immunocompromised, congenital defects"
                }
            }
        };

        const infectionVsDisease = {
            infection: {
                definition: "Colonization and growth of pathogen in host",
                outcome: "May or may not cause disease"
            },
            disease: {
                definition: "Observable deviation from health",
                signs: "Objective (fever, rash, measurable)",
                symptoms: "Subjective (pain, nausea, patient-reported)"
            },
            types: {
                localInfection: "Confined to specific area",
                systemicInfection: "Spread throughout body via blood/lymph",
                focalInfection: "Local infection that spreads to other areas",
                primaryInfection: "Initial infection",
                secondaryInfection: "Infection following primary (e.g., bacterial pneumonia after flu)",
                subclinicalInfection: "Asymptomatic (no apparent disease)",
                chronicInfection: "Persists for months to years",
                acuteInfection: "Rapid onset, short duration",
                latentInfection: "Dormant periods (herpes, tuberculosis)"
            }
        };

        const infectiousDose = {
            ID50: {
                definition: "Dose that infects 50% of exposed population",
                variability: "Species-specific, route-specific"
            },
            LD50: {
                definition: "Dose that kills 50% of exposed population",
                use: "Measure of toxin potency"
            },
            examples: {
                high_infectious: "Shigella (10-100 cells), norovirus (~10 viral particles)",
                moderate: "Salmonella (10⁵-10⁸ cells)",
                low_infectious: "Vibrio cholerae (10⁸-10¹⁰ cells)"
            }
        };

        return {
            topic: "Pathogenic Microbes",
            pathogenesis: pathogenesis,
            majorPathogens: majorPathogens,
            infectionVsDisease: infectionVsDisease,
            infectiousDose: infectiousDose,
            opportunisticPathogens: {
                definition: "Cause disease in immunocompromised or disrupted normal flora",
                examples: "Candida, Pseudomonas, Staphylococcus epidermidis",
                riskFactors: "AIDS, chemotherapy, burns, catheters, antibiotics"
            },
            kochsPostulates: {
                purpose: "Establish causative agent of disease",
                postulates: [
                    "Microorganism must be present in every case of disease",
                    "Must be isolated and grown in pure culture",
                    "Must cause disease when inoculated into healthy host",
                    "Must be re-isolated from experimentally infected host"
                ],
                limitations: "Doesn't work for obligate intracellular pathogens, normal flora opportunists, asymptomatic carriers"
            },
            category: 'pathogenic_microbes'
        };
    }

    handleImmuneResponse(problem) {
        const innateImmunity = {
            characteristics: [
                "Non-specific (responds same way to all pathogens)",
                "Immediate response (minutes to hours)",
                "No memory",
                "Present from birth"
            ],
            barriers: {
                physical: {
                    skin: {
                        mechanism: "Physical barrier, dry, acidic (pH 5-6), shedding",
                        secretions: "Sebum (fatty acids), sweat (lysozyme, salt)"
                    },
                    mucousMembranes: {
                        mechanism: "Mucus traps pathogens, cilia sweep away (respiratory)",
                        secretions: "Lysozyme, lactoferrin, IgA"
                    },
                    otherBarriers: "Tears, saliva, urine flow, stomach acid (pH 1-2)"
                },
                chemical: {
                    lysozyme: "Breaks down peptidoglycan (in tears, saliva, sweat)",
                    gastricJuice: "Low pH kills most microbes",
                    sebum: "Fatty acids inhibit growth",
                    transferrin: "Sequesters iron (needed by bacteria)"
                },
                microbial: {
                    normalFlora: "Competes with pathogens for nutrients and attachment sites",
                    production: "Produces antimicrobial substances, lowers pH"
                }
            },
            cellularComponents: {
                phagocytes: {
                    neutrophils: {
                        characteristics: "Most abundant WBC (60-70%), first responders",
                        lifespan: "Short-lived (hours to days)",
                        function: "Phagocytosis, antimicrobial chemicals (ROS, enzymes)",
                        recruitment: "Chemotaxis to site of infection"
                    },
                    macrophages: {
                        characteristics: "Derived from monocytes, long-lived",
                        location: "Tissues (alveolar, Kupffer cells, microglial)",
                        functions: [
                            "Phagocytosis",
                            "Antigen presentation (link to adaptive immunity)",
                            "Cytokine secretion (IL-1, TNF-α)"
                        ]
                    },
                    dendriticCells: {
                        function: "Professional antigen-presenting cells",
                        location: "Tissues (skin, mucous membranes)",
                        role: "Bridge between innate and adaptive immunity"
                    }
                },
                naturalKillerCells: {
                    function: "Kill virus-infected cells and tumor cells",
                    mechanism: "Recognize missing MHC I (missing self)",
                    killing: "Perforin and granzymes (apoptosis)"
                },
                eosinophils: {
                    function: "Defense against parasites, allergic reactions",
                    mechanism: "Release granules with toxic proteins"
                },
                basophilsAndMastCells: {
                    function: "Release histamine and other mediators",
                    role: "Inflammation, allergic reactions"
                }
            },
            /**inflammation: {
                purpose: "Localize infection, recruit immune cells, promote healing"
                }
            },*/
            signs: {
                    rubor: "Redness (vasodilation)",
                    calor: "Heat (increased blood flow)",
                    tumor: "Swelling (edema from fluid accumulation)",
                    dolor: "Pain (pressure on nerves, chemical mediators)",
                    loss_of_function: "Fifth sign"
                },
                process: [
                    "Tissue damage triggers mast cell degranulation (histamine release)",
                    "Vasodilation increases blood flow (redness, heat)",
                    "Increased vascular permeability (fluid and proteins leak → swelling)",
                    "Chemokines recruit phagocytes to site",
                    "Phagocytes eliminate pathogens and debris",
                    "Tissue repair begins"
                ],
                mediators: "Histamine, prostaglandins, leukotrienes, cytokines (IL-1, TNF-α)",
                outcomes: {
                    acute: "Resolves with healing",
                    chronic: "Persistent inflammation, tissue damage"
                }
            },
            

            /**complementSystem: {
                description: "Cascade of ~30 proteins in blood plasma",
                pathways: {
                    classical: {
                        activation: "Antibody-antigen complexes",
                        link: "Connects adaptive and innate immunity"
                    },
                    alternative: {
                        activation: "Pathogen surface directly (no antibodies)",
                        spontaneous: "Continuous low-level activation"
                    },
                    lectin: {
                        activation: "Mannose-binding lectin binds pathogen carbohydrates",
                        recognition: "Pattern recognition"
                    }
                },
                functions: {
                    opsonization: "C3b coats pathogens → enhanced phagocytosis",
                    inflammation: "C3a, C5a are anaphylatoxins (recruit phagocytes, mast cell degranulation)",
                    cytolysis: "MAC (membrane attack complex C5b-9) forms pore → cell lysis",
                    clearance: "Remove immune complexes"
                },
                regulation: "Inhibitory proteins prevent damage to host cells"
            },
            
            interferons: {
                type_I: {
                    types: "IFN-α, IFN-β",
                    source: "Virus-infected cells",
                    function: "Induce antiviral state in neighboring cells (inhibit viral replication)",
                    mechanism: "Activate genes for antiviral proteins"
                },
                type_II: {
                    type: "IFN-γ",
                    source: "T cells, NK cells",
                    function: "Activates macrophages, enhances adaptive immunity"
                }
            },
            fever: {
                mechanism: "Pyrogens (IL-1, TNF-α, endotoxin) → hypothalamus resets thermostat",
                benefits: [
                    "Inhibits microbial growth",
                    "Enhances phagocytosis",
                    "Increases metabolic rate",
                    "Enhances adaptive immune response"
                ],
                concern: "High fever (>40°C/104°F) can damage proteins and cells"
            }
        };
        
        const adaptiveImmunity = {
            characteristics: [
                "Specific (recognizes specific antigens)",
                "Slower response (days to weeks for first exposure)",
                "Memory (faster, stronger response upon re-exposure)",
                "Develops over time"
            ],
            types: {
                humoral: {
                    mediator: "Antibodies (B cells)",
                    targets: "Extracellular pathogens, toxins",
                    mechanism: "Antibody production and secretion"
                },
                cellMediated: {
                    mediator: "T cells",
                    targets: "Intracellular pathogens, infected cells, cancer cells",
                    mechanism: "Direct cell killing or activation of other cells"
                }
            },
            antigens: {
                definition: "Molecules that trigger adaptive immune response",
                characteristics: "Foreign, large (>10,000 Da), complex",
                epitope: "Specific part of antigen recognized by antibody or TCR",
                types: {
                    completeAntigens: "Trigger response and react with antibodies (most proteins)",
                    haptens: "Small molecules that must bind to carrier protein to be antigenic"
                }
            },
            antibodies: {
                structure: {
                    basic: "Y-shaped, 4 polypeptide chains (2 heavy, 2 light)",
                    regions: {
                        fab: "Fragment antigen-binding (variable, binds antigen)",
                        fc: "Fragment crystallizable (constant, determines class)"
                    },
                    variableRegion: "Antigen-binding site (unique for each antibody)",
                    constantRegion: "Determines antibody class and function"
                },
                classes: {
                    IgG: {
                        percentage: "75-80% of serum antibodies",
                        characteristics: "Monomer, crosses placenta, long-lasting",
                        functions: "Opsonization, complement activation, neutralization",
                        response: "Secondary immune response"
                    },
                    IgM: {
                        percentage: "5-10%",
                        characteristics: "Pentamer, largest antibody, first produced",
                        functions: "Agglutination, complement activation (most efficient)",
                        response: "Primary immune response"
                    },
                    IgA: {
                        percentage: "10-15%",
                        characteristics: "Dimer (in secretions), monomer (in serum)",
                        location: "Secretions (saliva, tears, breast milk, mucus)",
                        function: "Prevents pathogen attachment to mucous membranes"
                    },
                    IgD: {
                        percentage: "<1%",
                        location: "Surface of B cells",
                        function: "B cell activation (antigen receptor)"
                    },
                    IgE: {
                        percentage: "<0.01%",
                        characteristics: "Binds to mast cells and basophils",
                        function: "Allergic reactions, defense against parasites",
                        mechanism: "Triggers degranulation (histamine release)"
                    }
                },
                functions: {
                    neutralization: "Block pathogen/toxin binding to host cells",
                    opsonization: "Coat pathogen for enhanced phagocytosis",
                    complementActivation: "Trigger complement cascade",
                    agglutination: "Clump pathogens (easier to phagocytose)",
                    antibodyDependentCellularCytotoxicity: "NK cells bind Fc, kill target"
                }
            },
            BCells: {
                origin: "Bone marrow",
                maturation: "Bone marrow",
                function: "Antibody production",
                activation: {
                    process: [
                        "BCR (B cell receptor) binds antigen",
                        "B cell internalizes, processes, presents antigen (MHC II)",
                        "Helper T cell recognizes antigen, provides co-stimulation",
                        "B cell activated, proliferates (clonal expansion)"
                    ],
                    outcomes: {
                        plasmaCells: "Antibody-secreting factories (short-lived, days)",
                        memoryCells: "Long-lived (years to lifetime), rapid response upon re-exposure"
                    }
                },
                classSwitching: "Change antibody class (IgM → IgG, IgA, IgE) while maintaining specificity"
            },
            TCells: {
                origin: "Bone marrow",
                maturation: "Thymus",
                types: {
                    helperTCells: {
                        marker: "CD4+",
                        function: "Activate other immune cells (B cells, cytotoxic T cells, macrophages)",
                        recognition: "MHC II (on APCs)",
                        cytokines: "IL-2, IL-4, IFN-γ",
                        subtypes: {
                            Th1: "Cell-mediated immunity, activate macrophages",
                            Th2: "Humoral immunity, activate B cells",
                            Th17: "Inflammation, recruit neutrophils"
                        },
                        HIV: "Target of HIV infection"
                    },
                    cytotoxicTCells: {
                        marker: "CD8+",
                        function: "Kill infected cells, cancer cells",
                        recognition: "MHC I (on all nucleated cells)",
                        mechanism: "Perforin/granzymes (apoptosis), Fas-FasL interaction",
                        targets: "Virus-infected, tumor cells, transplanted cells"
                    },
                    regulatoryTCells: {
                        marker: "CD4+ CD25+",
                        function: "Suppress immune response, maintain tolerance",
                        importance: "Prevent autoimmunity"
                    },
                    memoryTCells: {
                        function: "Rapid response upon re-exposure",
                        longevity: "Long-lived"
                    }
                },
                activation: {
                    signal1: "TCR binds antigen-MHC complex",
                    signal2: "Co-stimulation (CD28-B7 interaction)",
                    outcome: "Clonal expansion, differentiation (effector and memory cells)"
                }
            },
            MHC: {
                name: "Major Histocompatibility Complex (HLA in humans)",
                function: "Present antigens to T cells",
                types: {
                    MHCI: {
                        location: "All nucleated cells",
                        presents: "Intracellular proteins (viral, tumor, self)",
                        recognizedBy: "CD8+ cytotoxic T cells",
                        message: "Display of cell's internal contents"
                    },
                    MHCII: {
                        location: "Antigen-presenting cells (dendritic, macrophages, B cells)",
                        presents: "Extracellular antigens (phagocytosed)",
                        recognizedBy: "CD4+ helper T cells",
                        message: "Report of what was captured from environment"
                    }
                },
                diversity: "Highly polymorphic (many alleles)",
                transplantation: "Must match for organ transplants"
            }
        };

        const immuneMemory = {
            primaryResponse: {
                timing: "5-10 days lag period after first exposure",
                antibody: "Mainly IgM, low levels",
                duration: "Weeks to months"
            },
            secondaryResponse: {
                timing: "2-3 days (faster)",
                antibody: "Mainly IgG, higher levels (10-100× more)",
                duration: "Years to lifetime",
                mechanism: "Memory B and T cells respond rapidly"
            },
            basis: "Vaccination strategy"
        };

        const vaccination = {
            principle: "Induce immune memory without disease",
            types: {
                liveAttenuated: {
                    description: "Weakened pathogen that can replicate but not cause disease",
                    advantages: "Strong, long-lasting immunity (one dose often sufficient)",
                    disadvantages: "Risk of reversion, contraindicated in immunocompromised",
                    examples: "MMR, varicella, oral polio (OPV), yellow fever"
                },
                inactivated: {
                    description: "Killed pathogen (cannot replicate)",
                    advantages: "Safe, no risk of infection",
                    disadvantages: "Weaker immunity, multiple doses/boosters needed",
                    examples: "Polio (IPV), hepatitis A, rabies, influenza (injected)"
                },
                subunit: {
                    description: "Purified antigens (proteins, polysaccharides)",
                    advantages: "Very safe, defined components",
                    disadvantages: "Weak immunity, require adjuvants",
                    examples: "Hepatitis B, HPV, pneumococcal, meningococcal"
                },
                toxoid: {
                    description: "Inactivated bacterial toxins",
                    mechanism: "Induce antibodies that neutralize toxins",
                    examples: "Diphtheria, tetanus (DTaP, Tdap)"
                },
                mRNA: {
                    description: "mRNA encoding antigen, translated in host cells",
                    advantages: "Rapid development, no live pathogen",
                    examples: "COVID-19 (Pfizer, Moderna)",
                    storage: "Ultra-cold temperatures required"
                },
                viralVector: {
                    description: "Different virus delivers antigen gene",
                    mechanism: "Vector virus enters cells, expresses antigen",
                    examples: "COVID-19 (Johnson & Johnson, AstraZeneca), Ebola"
                }
            },
            herdImmunity: {
                definition: "Protection of unvaccinated individuals when high % vaccinated",
                threshold: "Varies by disease (measles ~95%, polio ~80%)",
                importance: "Protects those who cannot be vaccinated"
            },
            adjuvants: {
                function: "Enhance immune response to vaccine",
                mechanism: "Stimulate innate immunity, prolong antigen exposure",
                examples: "Aluminum salts (alum), MF59, AS04"
            }
        };

        const immuneDisorders = {
            immunodeficiency: {
                primary: {
                    cause: "Genetic defects",
                    examples: "SCID (severe combined immunodeficiency), DiGeorge syndrome, chronic granulomatous disease"
                },
                secondary: {
                    causes: "HIV/AIDS, malnutrition, chemotherapy, aging",
                    result: "Increased susceptibility to infections, opportunistic pathogens"
                }
            },
            autoimmunity: {
                cause: "Immune system attacks self antigens",
                mechanisms: "Loss of tolerance, molecular mimicry, hidden antigens",
                examples: {
                    rheumatoidArthritis: "Joints",
                    multipleSclerosis: "Myelin (CNS)",
                    type1Diabetes: "Pancreatic beta cells",
                    lupus: "Multiple tissues (systemic)",
                    Graves: "Thyroid (hyperthyroidism)"
                }
            },
            hypersensitivity: {
                typeI: {
                    name: "Immediate (allergic)",
                    mechanism: "IgE binds mast cells/basophils → degranulation",
                    mediators: "Histamine, leukotrienes",
                    timing: "Minutes",
                    examples: "Hay fever, asthma, food allergies, anaphylaxis"
                },
                typeII: {
                    name: "Cytotoxic",
                    mechanism: "IgG or IgM binds cell surface antigens → complement/ADCC",
                    timing: "Hours",
                    examples: "Blood transfusion reactions, hemolytic disease of newborn, Graves' disease"
                },
                typeIII: {
                    name: "Immune complex",
                    mechanism: "Antigen-antibody complexes deposit in tissues → inflammation",
                    timing: "Hours to days",
                    examples: "Serum sickness, glomerulonephritis, lupus"
                },
                typeIV: {
                    name: "Delayed (cell-mediated)",
                    mechanism: "T cells and macrophages",
                    timing: "24-72 hours",
                    examples: "Contact dermatitis (poison ivy), TB skin test, graft rejection"
                }
            }
        };

        return {
            topic: "Immune Response to Microbes",
            innateImmunity: innateImmunity,
            adaptiveImmunity: adaptiveImmunity,
            immuneMemory: immuneMemory,
            vaccination: vaccination,
            immuneDisorders: immuneDisorders,
            comparison: {
                innateVsAdaptive: {
                    response_time: "Innate: immediate; Adaptive: days",
                    specificity: "Innate: non-specific; Adaptive: highly specific",
                    memory: "Innate: none; Adaptive: yes",
                    components: "Innate: barriers, phagocytes, complement; Adaptive: B/T cells, antibodies"
                }
            },
            category: 'immune_response'
        };
    }

*/

    handleMicrobialEcology(problem) {
        const microbialHabitats = {
            aquatic: {
                freshwater: {
                    characteristics: "Variable nutrients, temperature, oxygen",
                    organisms: "Bacteria, algae, protozoa, cyanobacteria",
                    zones: {
                        littoral: "Shallow, high light, diverse",
                        limnetic: "Open water, phytoplankton",
                        profundal: "Deep, dark, low oxygen",
                        benthic: "Bottom sediments, decomposers"
                    },
                    importance: "Nutrient cycling, water quality"
                },
                marine: {
                    characteristics: "High salt (3.5%), stable temperature",
                    organisms: "Marine bacteria, archaea, phytoplankton, dinoflagellates",
                    zones: {
                        euphotic: "Surface, light penetration, photosynthesis",
                        aphotic: "Deep, no light",
                        hadal: "Deepest trenches, extreme pressure"
                    },
                    hotspots: "Hydrothermal vents (chemolithoautotrophs), coral reefs",
                    importance: "50% of global photosynthesis (phytoplankton)"
                },
                biofilms: {
                    locations: "Rocks, pipes, ship hulls, medical devices",
                    structure: "Microbes embedded in EPS matrix",
                    advantages: "Protection, nutrient sharing, genetic exchange"
                }
            },
            soil: {
                characteristics: "Solid matrix, variable moisture, nutrients, pH",
                organisms: "Bacteria, fungi, archaea, protozoa, nematodes",
                roles: {
                    decomposition: "Break down organic matter",
                    nutrientCycling: "Nitrogen, carbon, sulfur cycles",
                    plantHealth: "Nitrogen fixation (rhizobia), mycorrhizae"
                },
                rhizosphere: {
                    definition: "Soil immediately surrounding plant roots",
                    characteristics: "High microbial activity, root exudates",
                    importance: "Plant-microbe interactions"
                }
            },
            air: {
                characteristics: "Transient, low nutrients, desiccation stress",
                organisms: "Spores, vegetative cells (temporary)",
                sources: "Soil dust, water droplets, plants, animals",
                significance: "Disease transmission (respiratory infections)"
            },
            hostAssociated: {
                humanMicrobiome: {
                    locations: "Skin, oral cavity, GI tract, urogenital, respiratory",
                    composition: {
                        skin: "Staphylococcus, Corynebacterium, Propionibacterium",
                        oral: "Streptococcus, Actinomyces, Prevotella",
                        GI: "Bacteroides, Firmicutes, Bifidobacterium",
                        vaginal: "Lactobacillus (maintains acidic pH)"
                    },
                    numbers: "~38 trillion bacterial cells (roughly equal to human cells)",
                    functions: [
                        "Competitive exclusion of pathogens",
                        "Vitamin synthesis (B, K)",
                        "Digestion (fiber fermentation)",
                        "Immune system development",
                        "Metabolism regulation"
                    ],
                    disruption: "Antibiotics, diet changes → dysbiosis → disease"
                },
                animalMicrobiomes: {
                    ruminants: "Complex microbiome in rumen digests cellulose",
                    termites: "Gut protozoa and bacteria digest wood",
                    corals: "Zooxanthellae (dinoflagellates) provide nutrients"
                }
            },
            extremeEnvironments: {
                thermophiles: "Hot springs, geysers (>50°C)",
                psychrophiles: "Antarctic, Arctic, deep ocean (<15°C)",
                acidophiles: "Acid mine drainage (pH <3)",
                alkaliphiles: "Soda lakes (pH >9)",
                halophiles: "Salt lakes, salterns (high NaCl)",
                barophiles: "Deep ocean (high pressure)"
            }
        };

        const symbiosis = {
            mutualism: {
                definition: "Both organisms benefit",
                examples: {
                    legumes_rhizobia: {
                        organisms: "Legume plants + Rhizobium/Bradyrhizobium bacteria",
                        mechanism: "Bacteria fix nitrogen in root nodules",
                        benefits: "Plant gets nitrogen; bacteria get carbohydrates and shelter"
                    },
                    mycorrhizae: {
                        organisms: "Plant roots + fungi",
                        types: "Ectomycorrhizae (surround roots), endomycorrhizae (penetrate cells)",
                        benefits: "Plant gets water and minerals; fungus gets sugars"
                    },
                    rumen_microbes: {
                        organisms: "Ruminants + bacteria/protozoa/fungi",
                        mechanism: "Microbes digest cellulose",
                        benefits: "Animal gets nutrients from plant material; microbes get environment"
                    },
                    lichen: {
                        organisms: "Fungus + photosynthetic partner (alga or cyanobacterium)",
                        mechanism: "Fungus provides structure; partner provides photosynthate",
                        importance: "Pioneer organisms, nitrogen fixation (cyanobacteria)"
                    }
                }
            },
            commensalism: {
                definition: "One organism benefits, other unaffected",
                examples: [
                    "Skin bacteria (benefit from nutrients, no harm to host)",
                    "Remora fish on sharks (transportation, no impact on shark)"
                ],
                note: "Difficult to prove neutrality; may be unrecognized mutualism"
            },
            parasitism: {
                definition: "One organism benefits, other harmed",
                examples: "Pathogenic bacteria, viruses, fungi, protists, helminths",
                strategies: {
                    obligate: "Cannot survive outside host",
                    facultative: "Can survive independently"
                }
            },
            amensalism: {
                definition: "One organism harmed, other unaffected",
                examples: "Antibiotic production by Penicillium (harms bacteria, no benefit to fungus)"
            }
        };

        const biogeochemicalCycles = {
            carbonCycle: {
                processes: {
                    fixation: "Photosynthesis (cyanobacteria, algae), chemosynthesis → organic carbon",
                    decomposition: "Heterotrophs break down organic matter → CO₂",
                    methaneProduction: "Methanogens produce CH₄ (anaerobic)",
                    methaneOxidation: "Methanotrophs oxidize CH₄ → CO₂"
                },
                importance: "Regulates atmospheric CO₂, climate"
            },
            nitrogenCycle: {
                processes: {
                    nitrogenFixation: {
                        reaction: "N₂ → NH₃",
                        organisms: "Rhizobium, Azotobacter, cyanobacteria",
                        enzyme: "Nitrogenase",
                        importance: "Only biological process converting N₂ to bioavailable form"
                    },
                    ammonification: {
                        reaction: "Organic nitrogen → NH₄⁺",
                        organisms: "Decomposers",
                        process: "Breakdown of proteins, nucleic acids"
                    },
                    nitrification: {
                        step1: "NH₄⁺ → NO₂⁻ (Nitrosomonas)",
                        step2: "NO₂⁻ → NO₃⁻ (Nitrobacter)",
                        type: "Chemoautotrophic",
                        importance: "Provides nitrate for plants"
                    },
                    denitrification: {
                        reaction: "NO₃⁻ → NO₂⁻ → N₂O → N₂",
                        organisms: "Pseudomonas, Paracoccus",
                        conditions: "Anaerobic",
                        importance: "Returns N₂ to atmosphere, completes cycle",
                        concern: "N₂O is greenhouse gas"
                    },
                    assimilation: {
                        process: "Organisms incorporate NH₄⁺ or NO₃⁻ into organic molecules"
                    }
                },
                importance: "Nitrogen essential for proteins, nucleic acids; limits primary productivity"
            },
            sulfurCycle: {
                processes: {
                    sulfateReduction: "SO₄²⁻ → H₂S (Desulfovibrio, anaerobic)",
                    sulfurOxidation: "H₂S → S → SO₄²⁻ (Thiobacillus, Beggiatoa)",
                    assimilation: "Incorporation into amino acids (cysteine, methionine)"
                },
                importance: "Amino acid synthesis, energy source for chemolithotrophs"
            },
            phosphorusCycle: {
                processes: {
                    weathering: "Release of phosphate from rocks",
                    assimilation: "Uptake by organisms",
                    decomposition: "Return to environment",
                    sedimentation: "Long-term storage in sediments"
                },
                note: "No gaseous phase (unlike C, N, S)",
                importance: "Nucleic acids, ATP, phospholipids; often limiting nutrient"
            }
        };

        const microbialInteractions = {
            competition: {
                mechanism: "Compete for nutrients, space",
                outcome: "Competitive exclusion, resource partitioning",
                example: "Normal flora prevents pathogen colonization"
            },
            syntrophy: {
                definition: "Metabolic cooperation between species",
                example: "Methanogenic consortia (bacteria produce H₂, methanogens consume it)",
                importance: "Anaerobic digestion, biogas production"
            },
            quorumSensing: {
                mechanism: "Cell density-dependent communication via signaling molecules",
                behaviors: "Biofilm formation, virulence, bioluminescence, conjugation",
                importance: "Coordinate group activities"
            },
            horizontalGeneTransfer: {
                mechanisms: "Transformation, conjugation, transduction",
                importance: "Rapid genetic adaptation, antibiotic resistance spread"
            }
        };

        return {
            topic: "Microbial Ecology",
            microbialHabitats: microbialHabitats,
            symbiosis: symbiosis,
            biogeochemicalCycles: biogeochemicalCycles,
            microbialInteractions: microbialInteractions,
            humanMicrobiome: {
                composition: "Trillions of microbes, hundreds of species",
                variability: "Differs by body site, individual, diet, age, geography",
                acquisition: "Colonization begins at birth",
                functions: "Digestion, vitamin synthesis, immune development, pathogen exclusion",
                dysbiosis: "Imbalance linked to disease (IBD, obesity, allergies)",
                manipulation: "Probiotics, prebiotics, fecal microbiota transplant"
            },
            bioremediation: {
                definition: "Use microorganisms to clean up pollution",
                mechanisms: {
                    degradation: "Break down pollutants into less harmful substances",
                    bioaccumulation: "Concentrate pollutants in cells",
                    biotransformation: "Chemical modification"
                },
                applications: {
                    oilSpills: "Hydrocarbon-degrading bacteria (Pseudomonas, Alcanivorax)",
                    heavyMetals: "Biosorption, biomethylation",
                    pesticides: "Biodegradation of organophosphates, organochlorines",
                    wastewater: "Activated sludge process (aerobic and anaerobic)"
                },
                strategies: {
                    bioaugmentation: "Add specific microbes",
                    biostimulation: "Add nutrients to stimulate indigenous microbes",
                    phytoremediation: "Plants + associated microbes"
                }
            },
            category: 'microbial_ecology'
        };
    }

    handleIndustrialMicrobiology(problem) {
        const fermentationProcesses = {
            definition: "Controlled microbial growth for product generation",
            types: {
                batch: {
                    description: "Closed system, all nutrients added at start",
                    phases: "Lag, log, stationary, death",
                    products: "Often secondary metabolites (stationary phase)",
                    advantages: "Simple, lower contamination risk",
                    disadvantages: "Downtime between batches, variable product quality"
                },
                continuous: {
                    description: "Open system, continuous nutrient addition and product removal",
                    steadyState: "Constant growth rate, cell density",
                    advantages: "Consistent product quality, higher productivity",
                    disadvantages: "Complex, contamination risk",
                    example: "Beer production (some facilities)"
                },
                fedBatch: {
                    description: "Batch with periodic nutrient addition",
                    purpose: "Extend log phase, prevent catabolite repression",
                    advantages: "High cell density, controlled growth",
                    applications: "Penicillin, recombinant proteins"
                }
            }
        };

        const industrialProducts = {
            food_beverages: {
                bread: {
                    organism: "Saccharomyces cerevisiae (baker's yeast)",
                    process: "Fermentation of sugars → CO₂ (leavening) + ethanol (baked off)",
                    conditions: "Warm (25-30°C), aerobic (for growth)"
                },
                beer: {
                    organism: "Saccharomyces cerevisiae (ale) or S. pastorianus (lager)",
                    process: "Fermentation of malted barley sugars → ethanol + CO₂",
                    steps: "Malting, mashing, boiling (hops), fermentation, conditioning",
                    types: "Ale (top-fermenting, 15-25°C), lager (bottom-fermenting, 7-13°C)"
                },
                wine: {
                    organism: "Saccharomyces cerevisiae (wild or cultured strains)",
                    process: "Fermentation of grape sugars → ethanol + CO₂",
                    factors: "Grape variety, yeast strain, fermentation conditions",
                    types: "Red, white, sparkling, fortified"
                },
                cheese: {
                    organisms: "Lactic acid bacteria (Lactococcus, Lactobacillus, Streptococcus)",
                    process: "Fermentation of lactose → lactic acid (lowers pH, coagulates milk)",
                    types: {
                        fresh: "Cottage, cream cheese",
                        soft: "Brie, Camembert (Penicillium on surface)",
                        semi_hard: "Cheddar, Gouda",
                        hard: "Parmesan, Pecorino",
                        blue: "Roquefort, Gorgonzola (Penicillium roqueforti throughout)"
                    },
                    flavor: "Microbial enzymes, aging"
                },
                yogurt: {
                    organisms: "Lactobacillus bulgaricus + Streptococcus thermophilus",
                    process: "Fermentation of lactose → lactic acid (thickens, tangy flavor)",
                    probiotics: "Some contain additional live cultures"
                },
                soy_sauce: {
                    organisms: "Aspergillus oryzae (koji mold), Lactobacillus, yeasts",
                    process: "Fermentation of soybeans and wheat",
                    duration: "Months to years"
                },
                vinegar: {
                    organisms: "Acetobacter aceti",
                    process: "Oxidation of ethanol → acetic acid",
                    types: "Wine, apple cider, rice, balsamic"
                }
            },
            pharmaceuticals: {
                antibiotics: {
                    penicillin: {
                        organism: "Penicillium chrysogenum",
                        discovery: "Alexander Fleming (1928)",
                        production: "Fermentation, genetic improvement increased yields 1000×",
                        mechanism: "Inhibits bacterial cell wall synthesis",
                        derivatives: "Semi-synthetic penicillins (ampicillin, amoxicillin)"
                    },
                    streptomycin: {
                        organism: "Streptomyces griseus",
                        significance: "First effective TB treatment",
                        production: "Fermentation"
                    },
                    tetracyclines: {
                        organism: "Streptomyces species",
                        spectrum: "Broad-spectrum",
                        production: "Fermentation"
                    },
                    cephalosporins: {
                        organism: "Cephalosporium acremonium (fungus)",
                        derivatives: "Multiple generations of semi-synthetic forms"
                    }
                },
                vaccines: {
                    production: "Cell culture (mammalian, insect, yeast)",
                    examples: "Hepatitis B (recombinant in yeast), influenza (egg or cell culture)"
                },
                recombinantProteins: {
                    insulin: {
                        organism: "E. coli or Saccharomyces cerevisiae",
                        gene: "Human insulin gene inserted",
                        advantage: "Unlimited supply, no animal-derived contaminants"
                    },
                    growthHormone: {
                        organism: "E. coli",
                        use: "Treat growth hormone deficiency"
                    },
                    interferons: {
                        organism: "E. coli or mammalian cells",
                        use: "Antiviral, cancer treatment, MS"
                    },
                    monoclonalAntibodies: {
                        organism: "Mammalian cell culture (CHO cells)",
                        use: "Cancer, autoimmune diseases, transplant rejection"
                    },
                    clottingFactors: {
                        organism: "Mammalian cells",
                        use: "Hemophilia treatment"
                    }
                },
                vitamins: {
                    vitaminB12: "Pseudomonas, Propionibacterium",
                    riboflavin_B2: "Ashbya gossypii, Bacillus subtilis",
                    vitaminC: "Chemical synthesis with microbial step"
                }
            },
            enzymes: {
                amylases: {
                    source: "Bacillus, Aspergillus",
                    use: "Starch hydrolysis (baking, brewing, detergents, corn syrup)"
                },
                proteases: {
                    source: "Bacillus, Aspergillus",
                    use: "Detergents, cheese production, meat tenderizers, leather processing"
                },
                lipases: {
                    source: "Fungi, bacteria",
                    use: "Detergents, food processing, biodiesel"
                },
                cellulases: {
                    source: "Trichoderma, bacteria",
                    use: "Biofuel production, paper industry, animal feed"
                },
                pectinases: {
                    source: "Aspergillus",
                    use: "Fruit juice clarification, wine production"
                },
                glucose_isomerase: {
                    source: "Streptomyces",
                    use: "High-fructose corn syrup production"
                },
                rennet: {
                    source: "Recombinant in microbes (originally from calf stomach)",
                    use: "Cheese production (milk coagulation)"
                }
            },
            organic_acids: {
                citricAcid: {
                    organism: "Aspergillus niger",
                    production: "~2 million tons/year",
                    use: "Food acidulant, flavoring, preservative, chelating agent"
                },
                lacticAcid: {
                    organism: "Lactobacillus",
                    use: "Food acidulant, bioplastic (PLA) production, pharmaceuticals"
                },
                gluconicAcid: {
                    organism: "Aspergillus niger, Gluconobacter",
                    use: "Chelating agent, food additive"
                },
                aceticAcid: {
                    organism: "Acetobacter",
                    use: "Vinegar, chemical feedstock"
                }
            },
            amino_acids: {
                glutamicAcid: {
                    organism: "Corynebacterium glutamicum",
                    use: "MSG (monosodium glutamate) flavoring",
                    production: "Fermentation, ~3 million tons/year"
                },
                lysine: {
                    organism: "Corynebacterium glutamicum",
                    use: "Animal feed supplement",
                    production: "~2 million tons/year"
                }
            },
            biofuels: {
                ethanol: {
                    organism: "Saccharomyces cerevisiae, Zymomonas mobilis",
                    feedstocks: {
                        firstGeneration: "Corn, sugarcane (food crops)",
                        secondGeneration: "Cellulosic biomass (wood, agricultural waste)",
                        thirdGeneration: "Algae"
                    },
                    process: "Fermentation of sugars",
                    use: "Gasoline additive/replacement",
                    production: "~100 billion liters/year globally"
                },
                biodiesel: {
                    organism: "Algae, yeast",
                    process: "Lipid accumulation, transesterification",
                    advantage: "Higher energy density than ethanol"
                },
                biogas: {
                    organisms: "Mixed anaerobic community (bacteria + methanogens)",
                    feedstock: "Organic waste, manure, sewage",
                    product: "Methane (CH₄) + CO₂",
                    use: "Heating, electricity generation",
                    advantage: "Waste treatment + energy production"
                },
                hydrogen: {
                    organisms: "Photosynthetic bacteria, fermentative bacteria",
                    processes: "Biophotolysis, dark fermentation",
                    status: "Research stage, not yet commercial"
                }
            },
            bioplastics: {
                PHA: {
                    name: "Polyhydroxyalkanoates",
                    organism: "Ralstonia eutropha, recombinant E. coli",
                    properties: "Biodegradable, biocompatible",
                    use: "Medical devices, packaging"
                },
                PLA: {
                    name: "Polylactic acid",
                    source: "Lactic acid (from fermentation) polymerized chemically",
                    properties: "Biodegradable, compostable",
                    use: "Packaging, textiles, medical implants"
                }
            }
        };

        const biotechnology = {
            geneticEngineering: {
                process: [
                    "Isolate gene of interest",
                    "Insert into vector (plasmid, virus)",
                    "Transform into host organism",
                    "Select transformants",
                    "Scale up production"
                ],
                hosts: {
                    bacteria: {
                        advantages: "Fast growth, simple genetics, high yields",
                        limitations: "No post-translational modifications, inclusion bodies",
                        uses: "Simple proteins (insulin, growth hormone)"
                    },
                    yeast: {
                        advantages: "Fast growth, post-translational modifications, GRAS status",
                        limitations: "Different glycosylation than mammals",
                        uses: "Hepatitis B vaccine, insulin"
                    },
                    mammalian_cells: {
                        advantages: "Proper folding and modification of complex proteins",
                        limitations: "Slow growth, expensive, contamination risk",
                        uses: "Monoclonal antibodies, complex glycoproteins"
                    },
                    insect_cells: {
                        advantages: "Post-translational modifications, baculovirus system",
                        uses: "Vaccines, research proteins"
                    }
                }
            },
            metabolicEngineering: {
                definition: "Modify metabolic pathways to enhance production",
                strategies: [
                    "Increase precursor supply",
                    "Remove competing pathways",
                    "Enhance target enzyme activity",
                    "Remove feedback inhibition"
                ],
                examples: {
                    penicillin: "Increase precursor availability, amplify biosynthetic genes",
                    biofuels: "Engineer efficient cellulose degradation, ethanol tolerance",
                    amino_acids: "Remove feedback inhibition"
                }
            },
            syntheticBiology: {
                definition: "Design and construct new biological systems",
                approaches: [
                    "Minimal genomes",
                    "Synthetic metabolic pathways",
                    "Programmable biosensors",
                    "Artificial cells"
                ],
                applications: "Drug production, biosensors, biofuels"
            }
        };

        const industrialProcessOptimization = {
            strainImprovement: {
                methods: {
                    mutation: "Random mutagenesis + selection",
                    protoplastFusion: "Combine desirable traits from different strains",
                    recombinantDNA: "Targeted genetic modification",
                    directedEvolution: "Iterative mutation and selection"
                },
                example: "Penicillin yields increased 1000× through classical mutation/selection"
            },
            fermentationOptimization: {
                parameters: [
                    "Temperature",
                    "pH",
                    "Oxygen (aeration, agitation)",
                    "Nutrient concentrations",
                    "Inoculum size",
                    "Foam control"
                ],
                monitoring: "Online sensors, process control systems"
            },
            downstreamProcessing: {
                definition: "Recovery and purification of product",
                steps: [
                    "Cell removal (centrifugation, filtration)",
                    "Cell disruption (if intracellular product)",
                    "Concentration (ultrafiltration, precipitation)",
                    "Purification (chromatography, crystallization)",
                    "Formulation (drying, stabilization)"
                ],
                cost: "Often 50-80% of total production cost"
            },
            scaleUp: {
                challenges: [
                    "Maintain oxygen transfer",
                    "Control heat generation",
                    "Ensure mixing",
                    "Prevent contamination"
                ],
                scales: "Lab (1-10 L) → Pilot (100-1000 L) → Production (10,000-500,000 L)"
            }
        };

        const wastewater_treatment = {
            process: {
                primary: {
                    description: "Physical removal of large solids",
                    methods: "Screening, sedimentation",
                    removal: "~30% organic matter"
                },
                secondary: {
                    description: "Biological degradation of organic matter",
                    processes: {
                        activatedSludge: {
                            description: "Aerobic bacteria oxidize organic matter",
                            process: "Aeration tank → settling tank → return sludge",
                            organisms: "Mixed bacterial community (Zoogloea, Pseudomonas)"
                        },
                        tricklingFilter: {
                            description: "Wastewater flows over biofilm-covered rocks",
                            organisms: "Aerobic bacteria, fungi"
                        },
                        rotatingBiological: "Discs with biofilm, alternately submerged and exposed to air"
                    },
                    removal: "~90% organic matter (BOD)"
                },
                tertiary: {
                    description: "Additional treatment for nutrients, pathogens",
                    methods: [
                        "Chemical precipitation (phosphate removal)",
                        "Nitrification-denitrification (nitrogen removal)",
                        "Disinfection (chlorination, UV)"
                    ]
                },
                sludgeDigestion: {
                    anaerobic: {
                        organisms: "Bacteria + methanogens",
                        products: "Biogas (CH₄ + CO₂), stabilized sludge",
                        temperature: "Mesophilic (35°C) or thermophilic (55°C)"
                    },
                    aerobic: "Oxidation of sludge, more complete but higher energy cost"
                }
            },
            indicators: {
                BOD: "Biochemical Oxygen Demand (oxygen needed by microbes to degrade organic matter)",
                COD: "Chemical Oxygen Demand (total oxidizable matter)",
                coliforms: "Indicator of fecal contamination"
            }
        };

        return {
            topic: "Industrial Microbiology",
            fermentationProcesses: fermentationProcesses,
            industrialProducts: industrialProducts,
            biotechnology: biotechnology,
            industrialProcessOptimization: industrialProcessOptimization,
            wastewaterTreatment: wastewater_treatment,
            economicImportance: {
                global: "Hundreds of billions of dollars annually",
                sectors: "Pharmaceuticals, food/beverage, chemicals, biofuels, agriculture",
                employment: "Millions worldwide"
            },
            futureDirections: {
                trends: [
                    "Synthetic biology and metabolic engineering",
                    "Cell-free systems",
                    "Sustainable biomanufacturing",
                    "Precision fermentation",
                    "Circular economy (waste to value)",
                    "Personalized medicine (individualized biologics)"
                ]
            },
            category: 'industrial_microbiology'
        };
    }

    // CONTENT GENERATION METHODS (Similar to Cell Biology Workbook)

    generateMicrobiologyContent(problem, content) {
        const contentSections = [];

        contentSections.push(this.generateOverviewSection(problem, content));

        if (content.bacteria) {
            contentSections.push(this.generateBacteriaContent(content));
        }

        if (content.viruses) {
            contentSections.push(this.generateVirusesContent(content));
        }

        if (content.fungi) {
            contentSections.push(this.generateFungiContent(content));
        }

        if (content.protists) {
            contentSections.push(this.generateProtistsContent(content));
        }

        if (content.growthCurve || content.generationTime) {
            contentSections.push(this.generateGrowthContent(content));
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
            description: content.description || content.summary || `Overview of ${content.topic}`,
            keyPoints: this.extractKeyPoints(content),
            relevance: this.getTopicRelevance(problem.type)
        };
    }

    generateBacteriaContent(content) {
        return {
            sectionType: 'bacteria_list',
            title: 'Bacterial Species and Characteristics',
            bacteria: content.bacteria.map(bact => ({
                name: bact.name,
                type: bact.type,
                shape: bact.shape,
                habitat: bact.habitat,
                characteristics: bact.characteristics,
                metabolism: bact.metabolism,
                medical: bact.medical,
                applications: bact.applications
            })),
            structures: content.structures,
            shapes: content.shapes,
            metabolicTypes: content.metabolicTypes
        };
    }

    generateVirusesContent(content) {
        return {
            sectionType: 'viruses_list',
            title: 'Viral Pathogens and Structure',
            viruses: content.viruses.map(virus => ({
                name: virus.name,
                type: virus.type,
                nucleicAcid: virus.nucleicAcid,
                structure: virus.structure,
                host: virus.host,
                diseases: virus.diseases,
                characteristics: virus.characteristics
            })),
            viralStructure: content.structure,
            replication: content.replication
        };
    }

    generateFungiContent(content) {
        return {
            sectionType: 'fungi_list',
            title: 'Fungal Species and Characteristics',
            fungi: content.fungi.map(fungus => ({
                name: fungus.name,
                type: fungus.type,
                classification: fungus.classification,
                structure: fungus.structure,
                reproduction: fungus.reproduction,
                applications: fungus.applications,
                medical: fungus.medical
            })),
            structure: content.structure,
            reproduction: content.reproduction,
            classification: content.classification
        };
    }

    generateProtistsContent(content) {
        return {
            sectionType: 'protists_list',
            title: 'Protist Diversity',
            protists: content.protists.map(protist => ({
                name: protist.name,
                type: protist.type,
                classification: protist.classification,
                structure: protist.structure,
                nutrition: protist.nutrition,
                reproduction: protist.reproduction,
                habitat: protist.habitat,
                medical: protist.medical
            })),
            classification: content.classification
        };
    }

    generateGrowthContent(content) {
        return {
            sectionType: 'growth_patterns',
            title: 'Microbial Growth Patterns',
            growthCurve: content.growthCurve,
            generationTime: content.generationTime,
            requirements: content.growthRequirements,
            measurement: content.growthMeasurement
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
            applications: content.applications
        };
    }

    // HELPER METHODS

    extractKeyPoints(content) {
        const keyPoints = [];

        if (content.concepts) keyPoints.push(...content.concepts);
        if (content.keyDefinitions) keyPoints.push(...Object.keys(content.keyDefinitions));
        if (content.mainCategories) keyPoints.push(...content.mainCategories);

        return keyPoints.slice(0, 5);
    }

    getTopicRelevance(topicType) {
        const relevance = {
            bacteria: "Bacteria are the most abundant and diverse prokaryotic microorganisms",
            viruses: "Viruses are obligate intracellular parasites causing many diseases",
            fungi: "Fungi are eukaryotic organisms with medical, ecological, and industrial importance",
            protists: "Protists represent diverse eukaryotic microorganisms including many pathogens",
            microbial_growth: "Understanding growth patterns is essential for controlling microorganisms",
            microbial_metabolism: "Metabolic diversity enables microbes to inhabit every environment",
            microbial_genetics: "Genetic mechanisms explain microbial adaptation and antibiotic resistance",
            microbial_control: "Controlling microbes prevents disease and preserves materials",
            pathogenic_microbes: "Pathogens cause infectious diseases through specific mechanisms",
            immune_response: "The immune system provides defense against microbial infection",
            microbial_ecology: "Microbes drive global nutrient cycles and ecosystem function",
            industrial_microbiology: "Microbes produce valuable products and process waste"
        };

        return relevance[topicType] || "Important microbiological concept";
    }

    // DIAGRAM GENERATION (Placeholder)

    generateMicrobiologyDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        this.diagramData = {
            type: type,
            diagrams: this.getRelevantDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual microbiological diagrams"
        };
    }

    getRelevantDiagrams(topicType) {
        const diagramMap = {
            bacteria: ["gram_positive_cell", "gram_negative_cell", "bacterial_shapes", "endospore"],
            viruses: ["virus_structure", "lytic_cycle", "lysogenic_cycle", "viral_replication"],
            fungi: ["fungal_structure", "hyphae_mycelium", "spore_types"],
            protists: ["amoeba", "paramecium", "plasmodium_lifecycle"],
            microbial_growth: ["growth_curve", "generation_time", "biofilm_formation"],
            microbial_metabolism: ["aerobic_respiration", "fermentation", "nitrogen_cycle"],
            microbial_genetics: ["conjugation", "transformation", "transduction"],
            pathogenic_microbes: ["infection_stages", "virulence_factors"],
            immune_response: ["innate_immunity", "adaptive_immunity", "antibody_structure"]
        };

        return diagramMap[topicType] || [];
    }

    // WORKBOOK GENERATION

    generateMicrobiologyWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createMicrobiologyProblemSection(),
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
            title: `Microbiology Workbook: ${this.currentContent.topic}`,
            created: new Date().toISOString(),
            problem: this.currentProblem,
            content: this.currentContent,
            sections: []
        };
    }

    createMicrobiologyProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.microbiologyTopics[this.currentProblem.type]?.category || 'N/A']
            ]
        };
    }

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

        return {
            title: 'Content Overview',
            type: 'overview',
            data: overviewData
        };
    }

    createDetailedContentSection() {
        if (!this.currentContent) return null;

        const contentData = [];

        // Process bacteria, viruses, fungi, protists, etc.
        ['bacteria', 'viruses', 'fungi', 'protists'].forEach(type => {
            if (this.currentContent[type]) {
                this.currentContent[type].forEach(organism => {
                    contentData.push([organism.name, '']);
                    contentData.push(['Type', organism.type || '']);
                    if (organism.characteristics) {
                        contentData.push(['Characteristics', Array.isArray(organism.characteristics) ? 
                            organism.characteristics.join('; ') : organism.characteristics]);
                    }
                    contentData.push(['', '']); // Spacing
                });
            }
        });

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
                    data.push(['•', typeof example === 'string' ? example : JSON.stringify(example)]);
                });
            }
            data.push(['', '']);
        }

        if (this.currentContent.applications) {
            data.push(['APPLICATIONS', '']);
            this.currentContent.applications.forEach(app => {
                data.push(['•', app]);
            });
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

        return {
            title: 'Diagram References',
            type: 'diagrams',
            data: data
        };
    }

    // ADDITIONAL HELPER METHODS (from Cell Biology Workbook pattern)

    assessContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        const simpleTopics = ['bacteria', 'fungi', 'microbial_growth'];
        if (simpleTopics.includes(this.currentProblem.type)) difficultyScore += 1;

        const intermediateTopics = ['viruses', 'protists', 'microbial_metabolism', 'microbial_control'];
        if (intermediateTopics.includes(this.currentProblem.type)) difficultyScore += 2;

        const complexTopics = ['microbial_genetics', 'pathogenic_microbes', 'immune_response', 'industrial_microbiology'];
        if (complexTopics.includes(this.currentProblem.type)) difficultyScore += 3;

        if (this.explanationLevel === 'detailed') difficultyScore += 1;
        if (this.explanationLevel === 'basic') difficultyScore -= 1;

        if (difficultyScore <= 2) return 'beginner';
        if (difficultyScore <= 4) return 'intermediate';
        return 'advanced';
    }

    generateLearningObjectives() {
        if (!this.currentProblem) return [];

        const objectivesDatabase = {
            bacteria: [
                "Describe the structure of bacterial cells",
                "Distinguish between Gram-positive and Gram-negative bacteria",
                "Explain bacterial shapes and arrangements",
                "Understand bacterial metabolism and nutrition"
            ],
            viruses: [
                "Describe the structure of viruses",
                "Explain viral replication cycles (lytic and lysogenic)",
                "Distinguish between DNA and RNA viruses",
                "Understand viral classification systems"
            ],
            microbial_growth: [
                "Describe the bacterial growth curve",
                "Calculate generation time",
                "Explain physical and chemical growth requirements",
                "Understand methods for measuring microbial growth"
            ],
            microbial_genetics: [
                "Explain mechanisms of horizontal gene transfer",
                "Understand bacterial mutations and repair",
                "Describe antibiotic resistance mechanisms",
                "Explain gene regulation in prokaryotes"
            ],
            pathogenic_microbes: [
                "Describe stages of infection",
                "Explain virulence factors",
                "Distinguish between exotoxins and endotoxins",
                "Understand Koch's postulates"
            ],
            immune_response: [
                "Distinguish innate and adaptive immunity",
                "Explain antibody structure and function",
                "Describe B cell and T cell roles",
                "Understand vaccination principles"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand key microbiological concepts",
            "Apply knowledge to practical situations",
            "Make connections to health and disease"
        ];
    }

    identifyPrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            bacteria: [
                "Basic understanding of cell structure",
                "Knowledge of prokaryotes vs eukaryotes"
            ],
            viruses: [
                "Understanding of nucleic acids (DNA, RNA)",
                "Basic cell biology",
                "Knowledge of host-pathogen interactions"
            ],
            fungi: [
                "Eukaryotic cell structure",
                "Basic understanding of reproduction"
            ],
            protists: [
                "Eukaryotic cell structure",
                "Basic taxonomy concepts"
            ],
            microbial_growth: [
                "Understanding of bacterial structure",
                "Basic chemistry (pH, temperature effects)",
                "Exponential growth concepts"
            ],
            microbial_metabolism: [
                "Basic biochemistry (glycolysis, respiration)",
                "Understanding of ATP and energy",
                "Knowledge of oxidation-reduction reactions"
            ],
            microbial_genetics: [
                "DNA structure and replication",
                "Gene expression (transcription, translation)",
                "Basic bacterial structure"
            ],
            microbial_control: [
                "Bacterial structure",
                "Understanding of disinfection concepts",
                "Basic chemistry"
            ],
            pathogenic_microbes: [
                "Bacterial structure and function",
                "Basic immunology concepts",
                "Understanding of disease processes"
            ],
            immune_response: [
                "Cell biology",
                "Protein structure",
                "Understanding of antigens and antibodies"
            ],
            microbial_ecology: [
                "Ecosystem concepts",
                "Nutrient cycling",
                "Microbial diversity"
            ],
            industrial_microbiology: [
                "Microbial metabolism",
                "Fermentation concepts",
                "Basic genetics"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || [
            "General microbiology background"
        ];
    }

    generateStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            bacteria: [
                "Create comparison tables for Gram-positive vs Gram-negative",
                "Draw and label bacterial structures",
                "Use acronyms to remember bacterial shapes (CCB: Cocci, Bacilli)",
                "Practice Gram staining procedure steps"
            ],
            viruses: [
                "Make flowcharts for lytic and lysogenic cycles",
                "Create comparison tables for DNA vs RNA viruses",
                "Draw viral structures from memory",
                "Use Baltimore classification system to organize viral types"
            ],
            microbial_growth: [
                "Graph the bacterial growth curve repeatedly",
                "Practice generation time calculations",
                "Create tables comparing growth requirements",
                "Use real-world examples (food spoilage, clinical microbiology)"
            ],
            microbial_genetics: [
                "Draw diagrams for each gene transfer mechanism",
                "Create concept maps linking genetics to antibiotic resistance",
                "Practice distinguishing transformation, conjugation, transduction",
                "Work through operon regulation examples"
            ],
            pathogenic_microbes: [
                "Create disease fact sheets for major pathogens",
                "Make tables comparing virulence factors",
                "Use clinical case studies to apply concepts",
                "Draw infection process flowcharts"
            ],
            immune_response: [
                "Draw antibody structure repeatedly",
                "Create comparison tables for innate vs adaptive immunity",
                "Make flashcards for different cell types (B cells, T cells, NK cells)",
                "Use diagrams to show complement cascade"
            ],
            microbial_ecology: [
                "Draw biogeochemical cycles",
                "Create concept maps showing microbial interactions",
                "Use real-world examples (microbiome, bioremediation)",
                "Make tables comparing different symbiotic relationships"
            ],
            industrial_microbiology: [
                "Create product tables (organism, process, application)",
                "Draw fermentation process flowcharts",
                "Connect concepts to everyday products (bread, beer, antibiotics)",
                "Make timelines for industrial processes"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Review material regularly",
            "Create visual aids and diagrams",
            "Practice active recall",
            "Apply concepts to real-world examples"
        ];
    }

    generateAssessmentQuestions() {
        if (!this.currentProblem) return [];

        const questionsDatabase = {
            bacteria: [
                {
                    question: "What is the primary structural difference between Gram-positive and Gram-negative bacteria?",
                    type: "comparison",
                    difficulty: "easy"
                },
                {
                    question: "Explain why Gram-negative bacteria are generally more resistant to antibiotics than Gram-positive bacteria.",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "How does endospore formation contribute to bacterial survival in harsh environments?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            viruses: [
                {
                    question: "What are the main components of a virus?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Compare and contrast the lytic and lysogenic cycles of viral replication.",
                    type: "comparison",
                    difficulty: "medium"
                },
                {
                    question: "Why don't antibiotics work against viral infections?",
                    type: "explanation",
                    difficulty: "medium"
                }
            ],
            microbial_growth: [
                {
                    question: "What are the four phases of the bacterial growth curve?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Calculate the generation time if a bacterial culture goes from 1,000 to 64,000 cells in 3 hours.",
                    type: "calculation",
                    difficulty: "medium"
                },
                {
                    question: "Explain why endospore-forming bacteria are particularly difficult to eliminate.",
                    type: "application",
                    difficulty: "hard"
                }
            ],
            microbial_genetics: [
                {
                    question: "What are the three mechanisms of horizontal gene transfer in bacteria?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "How does conjugation differ from transformation?",
                    type: "comparison",
                    difficulty: "medium"
                },
                {
                    question: "Explain how horizontal gene transfer contributes to the rapid spread of antibiotic resistance.",
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
            bacteria: ['microbial_growth', 'microbial_genetics', 'pathogenic_microbes'],
            viruses: ['pathogenic_microbes', 'immune_response', 'microbial_control'],
            fungi: ['microbial_ecology', 'pathogenic_microbes', 'industrial_microbiology'],
            protists: ['pathogenic_microbes', 'microbial_ecology'],
            microbial_growth: ['bacteria', 'microbial_metabolism', 'industrial_microbiology'],
            microbial_metabolism: ['microbial_growth', 'microbial_ecology', 'industrial_microbiology'],
            microbial_genetics: ['bacteria', 'microbial_control', 'industrial_microbiology'],
            microbial_control: ['pathogenic_microbes', 'microbial_genetics'],
            pathogenic_microbes: ['bacteria', 'viruses', 'immune_response'],
            immune_response: ['pathogenic_microbes', 'microbial_control'],
            microbial_ecology: ['microbial_metabolism', 'industrial_microbiology'],
            industrial_microbiology: ['microbial_metabolism', 'microbial_genetics', 'fungi']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];
        
        return relatedTypes.map(type => ({
            type: type,
            name: this.microbiologyTopics[type]?.name,
            description: this.microbiologyTopics[type]?.description
        }));
    }

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        if (this.currentContent.bacteria) {
            this.currentContent.bacteria.forEach(bact => {
                glossary[bact.name] = bact.type;
            });
        }

        if (this.currentContent.viruses) {
            this.currentContent.viruses.forEach(virus => {
                glossary[virus.name] = virus.type;
            });
        }

        if (this.currentContent.keyDefinitions) {
            Object.entries(this.currentContent.keyDefinitions).forEach(([term, def]) => {
                glossary[term] = def;
            });
        }

        return glossary;
    }

    generateProcessTimeline(processName) {
        const timelines = {
            'Bacterial Growth Curve': [
                { phase: 'Lag Phase', duration: 'Variable', events: 'Adaptation, enzyme synthesis' },
                { phase: 'Log Phase', duration: 'Hours', events: 'Exponential growth, constant generation time' },
                { phase: 'Stationary Phase', duration: 'Variable', events: 'Growth = death, nutrient depletion' },
                { phase: 'Death Phase', duration: 'Variable', events: 'Death rate exceeds growth' }
            ],
            'Lytic Cycle': [
                { step: 'Attachment', timing: 'Seconds', events: 'Virus binds to host receptor' },
                { step: 'Penetration', timing: 'Seconds-minutes', events: 'Viral nucleic acid enters cell' },
                { step: 'Biosynthesis', timing: 'Minutes-hours', events: 'Viral components synthesized' },
                { step: 'Maturation', timing: 'Minutes-hours', events: 'New virions assembled' },
                { step: 'Release', timing: 'Minutes', events: 'Host cell lyses, viruses released' }
            ],
            'Immune Response': [
                { stage: 'Recognition', timing: 'Immediate-minutes', events: 'Pathogen detected by innate immunity' },
                { stage: 'Innate Response', timing: 'Minutes-hours', events: 'Inflammation, phagocytosis' },
                { stage: 'Adaptive Activation', timing: 'Days', events: 'T and B cell activation' },
                { stage: 'Effector Response', timing: 'Days-weeks', events: 'Antibody production, cell-mediated killing' }
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

        if (this.currentContent.bacteria) {
            hierarchy.children.push({
                name: 'Bacterial Species',
                type: 'section',
                count: this.currentContent.bacteria.length
            });
        }

        if (this.currentContent.viruses) {
            hierarchy.children.push({
                name: 'Viral Pathogens',
                type: 'section',
                count: this.currentContent.viruses.length
            });
        }

        return hierarchy;
    }

    // RELATED GENERATION METHODS (requested in prompt)

    generateRelatedBacteria(bacteriumName) {
        const bacterialRelationships = {
            'Escherichia coli': {
                sameGenus: ['E. albertii', 'E. fergusonii'],
                sameFamily: ['Salmonella', 'Shigella', 'Yersinia'],
                similarFunction: ['Enterobacter', 'Klebsiella'],
                reason: 'Enteric bacteria, Gram-negative, facultative anaerobes'
            },
            'Staphylococcus aureus': {
                sameGenus: ['S. epidermidis', 'S. saprophyticus'],
                sameFamily: ['Bacillus', 'Listeria'],
                similarFunction: ['Streptococcus pyogenes', 'Enterococcus'],
                reason: 'Gram-positive cocci, opportunistic pathogens'
            },
            'Mycobacterium tuberculosis': {
                sameGenus: ['M. leprae', 'M. avium'],
                similarStructure: ['Nocardia', 'Corynebacterium'],
                reason: 'Acid-fast, waxy cell wall, slow-growing'
            }
        };

        return bacterialRelationships[bacteriumName] || {
            note: `Related bacteria information not available for ${bacteriumName}`
        };
    }

    generateRelatedViruses(virusName) {
        const viralRelationships = {
            'Influenza Virus': {
                sameFamily: ['Influenza A', 'Influenza B', 'Influenza C'],
                similarStructure: ['Respiratory syncytial virus', 'Parainfluenza'],
                similarTransmission: ['Rhinovirus', 'Adenovirus', 'Coronavirus'],
                reason: 'Respiratory viruses, airborne transmission'
            },
            'HIV': {
                sameFamily: ['HIV-1', 'HIV-2', 'HTLV (Human T-cell leukemia virus)'],
                similarMechanism: ['Other retroviruses'],
                similarTarget: ['Viruses targeting immune cells'],
                reason: 'Retroviruses, integrate into host genome, target CD4+ cells'
            },
            'SARS-CoV-2': {
                sameFamily: ['SARS-CoV', 'MERS-CoV', 'Common cold coronaviruses'],
                similarStructure: ['Enveloped RNA viruses'],
                reason: 'Coronaviruses, respiratory pathogens'
            }
        };

        return viralRelationships[virusName] || {
            note: `Related virus information not available for ${virusName}`
        };
    }

    generateRelatedFungi(fungusName) {
        const fungalRelationships = {
            'Candida albicans': {
                sameGenus: ['C. glabrata', 'C. tropicalis', 'C. parapsilosis'],
                similarType: ['Other pathogenic yeasts'],
                similarInfections: ['Cryptococcus neoformans'],
                reason: 'Opportunistic yeast pathogens, cause similar infections'
            },
            'Aspergillus fumigatus': {
                sameGenus: ['A. flavus', 'A. niger', 'A. terreus'],
                similarType: ['Filamentous molds'],
                similarInfections: ['Fusarium', 'Mucor'],
                reason: 'Opportunistic molds, respiratory infections in immunocompromised'
            },
            'Saccharomyces cerevisiae': {
                sameGenus: ['S. pastorianus', 'S. bayanus'],
                similarFunction: ['Other fermentative yeasts'],
                reason: 'Industrial yeasts for fermentation'
            }
        };

        return fungalRelationships[fungusName] || {
            note: `Related fungi information not available for ${fungusName}`
        };
    }

    generateRelatedProtists(protistName) {
        const protistRelationships = {
            'Plasmodium falciparum': {
                sameGenus: ['P. vivax', 'P. malariae', 'P. ovale', 'P. knowlesi'],
                similarType: ['Apicomplexan parasites'],
                similarDisease: ['Babesia', 'Toxoplasma'],
                reason: 'Apicomplexan parasites, transmitted by arthropods'
            },
            'Giardia lamblia': {
                similarType: ['Other intestinal flagellates'],
                similarTransmission: ['Cryptosporidium', 'Entamoeba'],
                reason: 'Waterborne intestinal parasites, cause diarrhea'
            },
            'Trypanosoma brucei': {
                sameGenus: ['T. cruzi'],
                similarType: ['Kinetoplastid parasites'],
                similarTransmission: ['Leishmania'],
                reason: 'Vector-borne protozoan parasites'
            }
        };

        return protistRelationships[protistName] || {
            note: `Related protist information not available for ${protistName}`
        };
    }

    generateRelatedMicrobialGrowth(growthTopic) {
        const growthRelationships = {
            'Generation Time': {
                relatedConcepts: ['Exponential growth', 'Doubling time', 'Growth rate'],
                applications: ['Food microbiology', 'Clinical diagnosis', 'Industrial fermentation'],
                mathematicalRelations: ['N = N₀ × 2ⁿ', 'g = t/n', 'Growth rate constant (k)']
            },
            'Growth Curve': {
                relatedConcepts: ['Lag phase', 'Log phase', 'Stationary phase', 'Death phase'],
                applications: ['Batch fermentation', 'Antibiotic susceptibility', 'Food preservation'],
                factors: ['Nutrient availability', 'Temperature', 'pH', 'Oxygen']
            },
            'Environmental Requirements': {
                relatedConcepts: ['Temperature classes', 'pH preferences', 'Oxygen requirements', 'Osmotic pressure'],
                applications: ['Food preservation', 'Microbial control', 'Habitat prediction'],
                examples: ['Psychrophiles', 'Thermophiles', 'Acidophiles', 'Halophiles']
            }
        };

        return growthRelationships[growthTopic] || {
            note: `Related microbial growth information not available for ${growthTopic}`
        };
    }

    calculateContentCompleteness() {
        if (!this.currentContent) return 0;

        let score = 0;
        const maxScore = 10;

        if (this.currentContent.topic) score += 1;
        if (this.currentContent.description || this.currentContent.summary) score += 1;
        if (this.currentContent.examples) score += 1;
        if (this.currentContent.applications) score += 1;
        if (this.currentContent.comparisons || this.currentContent.comparison) score += 1;
        
        const hasMainContent = 
            this.currentContent.bacteria || 
            this.currentContent.viruses || 
            this.currentContent.fungi || 
            this.currentContent.protists;
        if (hasMainContent) score += 3;

        if (this.currentContent.structures || this.currentContent.structure) score += 1;
        if (this.currentContent.classification) score += 1;

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

    validateMicrobiologyContent(content) {
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
            content.bacteria || 
            content.viruses || 
            content.fungi || 
            content.protists || 
            content.growthCurve ||
            content.structures;

        if (!hasSubstantiveContent) {
            validationResults.warnings.push("Limited substantive content");
            validationResults.suggestions.push("Consider adding more detailed information");
        }

        if (!content.examples && !content.applications) {
            validationResults.suggestions.push("Consider adding examples and applications");
        }

        return validationResults;
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
        return Object.entries(this.microbiologyTopics).map(([key, topic]) => ({
            id: key,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
    }

    getTopicDetails(topicId) {
        const topic = this.microbiologyTopics[topicId];
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

    formatMicrobiologicalTerm(term) {
        const formatted = term
            .replace(/ATP/g, this.microbiologicalSymbols.ATP)
            .replace(/DNA/g, this.microbiologicalSymbols.DNA)
            .replace(/RNA/g, this.microbiologicalSymbols.RNA)
            .replace(/CO2/g, this.microbiologicalSymbols.CO2)
            .replace(/O2/g, this.microbiologicalSymbols.O2)
            .replace(/H2O/g, this.microbiologicalSymbols.H2O);

        return formatted;
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

        if (this.currentContent.bacteria) {
            summary.itemCount += this.currentContent.bacteria.length;
            summary.coverage.bacteria = this.currentContent.bacteria.length;
        }

        if (this.currentContent.viruses) {
            summary.itemCount += this.currentContent.viruses.length;
            summary.coverage.viruses = this.currentContent.viruses.length;
        }

        if (this.currentContent.fungi) {
            summary.itemCount += this.currentContent.fungi.length;
            summary.coverage.fungi = this.currentContent.fungi.length;
        }

        if (this.currentContent.protists) {
            summary.itemCount += this.currentContent.protists.length;
            summary.coverage.protists = this.currentContent.protists.length;
        }

        if (this.currentContent.mainCategories) {
            summary.keyPoints.push(...this.currentContent.mainCategories);
        }

        return summary;
    }

    searchContent(query) {
        if (!this.currentContent) return null;

        const results = {
            query: query,
            matches: []
        };

        const searchableContent = JSON.stringify(this.currentContent).toLowerCase();
        const queryLower = query.toLowerCase();

        if (searchableContent.includes(queryLower)) {
            ['bacteria', 'viruses', 'fungi', 'protists'].forEach(type => {
                if (this.currentContent[type]) {
                    this.currentContent[type].forEach(organism => {
                        if (JSON.stringify(organism).toLowerCase().includes(queryLower)) {
                            results.matches.push({
                                type: type,
                                name: organism.name,
                                content: organism
                            });
                        }
                    });
                }
            });
        }

        return results;
    }

    filterContentByCategory(category) {
        if (!this.currentContent) return null;

        const filtered = {
            category: category,
            items: []
        };

        ['bacteria', 'viruses', 'fungi', 'protists'].forEach(type => {
            if (this.currentContent[type]) {
                const matching = this.currentContent[type].filter(organism => 
                    organism.type?.toLowerCase().includes(category.toLowerCase()) ||
                    organism.classification?.toLowerCase().includes(category.toLowerCase())
                );
                filtered.items.push(...matching);
            }
        });

        return filtered;
    }

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

        if (content.summary) {
            markdown += `${content.summary}\n\n`;
        }

        if (content.bacteria) {
            markdown += `## Bacterial Species\n\n`;
            content.bacteria.forEach(bact => {
                markdown += `### ${bact.name}\n`;
                markdown += `**Type:** ${bact.type}\n\n`;
                if (bact.characteristics) {
                    markdown += `**Characteristics:**\n`;
                    bact.characteristics.forEach(char => {
                        markdown += `- ${char}\n`;
                    });
                }
                markdown += `\n`;
            });
        }

        return markdown;
    }

    convertToHTML(content) {
        let html = `<div class="microbiology-content">\n`;
        html += `  <h1>${content.topic}</h1>\n`;

        if (content.summary) {
            html += `  <p class="summary">${content.summary}</p>\n`;
        }

        if (content.bacteria) {
            html += `  <section class="bacteria">\n`;
            html += `    <h2>Bacterial Species</h2>\n`;
            content.bacteria.forEach(bact => {
                html += `    <article>\n`;
                html += `      <h3>${bact.name}</h3>\n`;
                html += `      <p><strong>Type:</strong> ${bact.type}</p>\n`;
                if (bact.characteristics) {
                    html += `      <ul>\n`;
                    bact.characteristics.forEach(char => {
                        html += `        <li>${char}</li>\n`;
                    });
                    html += `      </ul>\n`;
                }
                html += `    </article>\n`;
            });
            html += `  </section>\n`;
        }

        html += `</div>`;
        return html;
    }
}

// Export the class
export default EnhancedMicrobiologyWorkbook;
