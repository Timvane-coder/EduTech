//Enhanced Molecular Biology Workbook - Comprehensive Cellular Molecules System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry} from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedMolecularBiologyWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "molecular";
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
        this.includeDiagramsInWorkbook = options.includeDiagrams !== true;
        this.diagramWidth = options.diagramWidth || 800;
        this.diagramHeight = options.diagramHeight || 600;
        this.renderedDiagrams = new Map(); // Cache for rendered diagrams
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

        this.molecularSymbols = this.initializeMolecularSymbols();
        this.setThemeColors();
        this.initializeMolecularTopics();
        this.initializeMolecularLessons();
        this.initializeMolecularExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }



    setThemeColors() {
        const themes = {
            molecular: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#1976d2',
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
                structureBg: '#e0f2f1',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                carbohydrateBg: '#ffebee',
                lipidBg: '#e8f5e9',
                proteinBg: '#e1f5fe',
                nucleicAcidBg: '#f3e5f5'
            },
            biochemistry: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#00796b',
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
                borderColor: '#26a69a',
                contentBg: '#ede7f6',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e8eaf6',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                carbohydrateBg: '#ffebee',
                lipidBg: '#e8f5e9',
                proteinBg: '#e1f5fe',
                nucleicAcidBg: '#f3e5f5'
            }
        };

        this.colors = themes[this.theme] || themes.molecular;
    }


    initializeMolecularSymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'Delta': 'Δ',
            'lambda': 'λ',
            'mu': 'μ',
            'pi': 'π',
            
            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            'doubleArrow': '↔',
            
            // Math symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'approximately': '≈',
            'proportional': '∝',
            'infinity': '∞',
            'degree': '°',
            
            // Chemical formulas
            'H2O': 'H₂O',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'N2': 'N₂',
            'H+': 'H⁺',
            'OH-': 'OH⁻',
            
            // Biochemical molecules
            'ATP': 'ATP',
            'ADP': 'ADP',
            'AMP': 'AMP',
            'NAD+': 'NAD⁺',
            'NADH': 'NADH',
            'NADP+': 'NADP⁺',
            'NADPH': 'NADPH',
            'FAD': 'FAD',
            'FADH2': 'FADH₂',
            'CoA': 'CoA',
            'acetyl-CoA': 'acetyl-CoA',
            
            // Carbohydrates
            'glucose': 'C₆H₁₂O₆',
            'fructose': 'C₆H₁₂O₆',
            'sucrose': 'C₁₂H₂₂O₁₁',
            'maltose': 'C₁₂H₂₂O₁₁',
            'lactose': 'C₁₂H₂₂O₁₁',
            
            // Nucleic acids
            'DNA': 'DNA',
            'RNA': 'RNA',
            'mRNA': 'mRNA',
            'tRNA': 'tRNA',
            'rRNA': 'rRNA',
            'ATP': 'ATP',
            'GTP': 'GTP',
            'CTP': 'CTP',
            'UTP': 'UTP',
            
            // Amino acids (3-letter)
            'Ala': 'Ala',
            'Arg': 'Arg',
            'Asn': 'Asn',
            'Asp': 'Asp',
            'Cys': 'Cys',
            'Gln': 'Gln',
            'Glu': 'Glu',
            'Gly': 'Gly',
            'His': 'His',
            'Ile': 'Ile',
            'Leu': 'Leu',
            'Lys': 'Lys',
            'Met': 'Met',
            'Phe': 'Phe',
            'Pro': 'Pro',
            'Ser': 'Ser',
            'Thr': 'Thr',
            'Trp': 'Trp',
            'Tyr': 'Tyr',
            'Val': 'Val'
        };
    }

    initializeMolecularTopics() {
        this.molecularTopics = {
            carbohydrates: {
                patterns: [
                    /carbohydrate/i,
                    /sugar|glucose|fructose|sucrose/i,
                    /monosaccharide|disaccharide|polysaccharide/i,
                    /starch|glycogen|cellulose/i
                ],
                handler: this.handleCarbohydrates.bind(this),
                name: 'Carbohydrates',
                category: 'macromolecules',
                description: 'Sugar molecules and their polymers used for energy and structure',
                difficulty: 'intermediate',
                prerequisites: ['basic_chemistry', 'organic_chemistry']
            },
            
            lipids: {
                patterns: [
                    /lipid|fat|oil/i,
                    /phospholipid|triglyceride|steroid/i,
                    /fatty.*acid|saturated|unsaturated/i,
                    /membrane|bilayer/i
                ],
                handler: this.handleLipids.bind(this),
                name: 'Lipids and Biomembranes',
                category: 'macromolecules',
                description: 'Hydrophobic molecules including fats, phospholipids, and steroids',
                difficulty: 'intermediate',
                prerequisites: ['basic_chemistry', 'organic_chemistry']
            },

            proteins: {
                patterns: [
                    /protein|polypeptide/i,
                    /amino.*acid|peptide/i,
                    /enzyme|catalyst/i,
                    /protein.*structure|folding/i
                ],
                handler: this.handleProteins.bind(this),
                name: 'Proteins and Proteomics',
                category: 'macromolecules',
                description: 'Polymers of amino acids with diverse structures and functions',
                difficulty: 'advanced',
                prerequisites: ['amino_acids', 'chemical_bonding']
            },
            
            nucleic_acids: {
                patterns: [
                    /nucleic.*acid|DNA|RNA/i,
                    /nucleotide|base.*pair/i,
                    /double.*helix|replication/i,
                    /transcription|translation/i
                ],
                handler: this.handleNucleicAcids.bind(this),
                name: 'Nucleic Acids',
                category: 'macromolecules',
                description: 'Information-carrying molecules including DNA and RNA',
                difficulty: 'advanced',
                prerequisites: ['basic_chemistry', 'molecular_structure']
            },
            
            bioenergetics: {
                patterns: [
                    /ATP|energy.*currency/i,
                    /metabolism|glycolysis|krebs/i,
                    /oxidative.*phosphorylation|electron.*transport/i,
                    /NAD|FAD|redox/i
                ],
                handler: this.handleBioenergetics.bind(this),
                name: 'Bioenergetics and Metabolism',
                category: 'metabolism',
                description: 'Energy transformations in living systems',
                difficulty: 'advanced',
                prerequisites: ['thermodynamics', 'redox_reactions', 'organic_chemistry']
            },
            
            enzymes: {
                patterns: [
                    /enzyme|catalyst/i,
                    /active.*site|substrate/i,
                    /enzyme.*kinetics|michaelis/i,
                    /inhibitor|activator|allosteric/i
                ],
                handler: this.handleEnzymes.bind(this),
                name: 'Enzyme Function and Kinetics',
                category: 'protein_function',
                description: 'Biological catalysts and their regulation',
                difficulty: 'advanced',
                prerequisites: ['proteins', 'chemical_kinetics']
            }
            
           
        };
    }

    initializeMolecularLessons() {
        this.lessons = {
            carbohydrates: {
                title: "Carbohydrates: Structure, Function, and Classification",
                concepts: [
                    "Carbohydrates are composed of carbon, hydrogen, and oxygen in a 1:2:1 ratio",
                    "Monosaccharides are simple sugars that cannot be hydrolyzed",
                    "Disaccharides are formed by glycosidic bonds between two monosaccharides",
                    "Polysaccharides serve as energy storage and structural molecules",
                    "Carbohydrate structure determines function"
                ],
                theory: "Carbohydrates are organic compounds that serve as primary energy sources and structural components. The empirical formula (CH₂O)ₙ reflects their composition. Understanding carbohydrate chemistry is essential for biochemistry, nutrition, and molecular biology.",
                keyDefinitions: {
                    "Monosaccharide": "Simple sugar that cannot be broken down by hydrolysis (e.g., glucose, fructose)",
                    "Disaccharide": "Two monosaccharides joined by a glycosidic bond (e.g., sucrose, lactose)",
                    "Polysaccharide": "Polymer of many monosaccharides (e.g., starch, glycogen, cellulose)",
                    "Glycosidic Bond": "Covalent bond between sugar molecules formed by dehydration synthesis",
                    "Aldose": "Sugar with an aldehyde group",
                    "Ketose": "Sugar with a ketone group",
                    "Reducing Sugar": "Sugar that can donate electrons (has free aldehyde or ketone)",
                    "Anomers": "Isomers that differ in configuration at the anomeric carbon (α and β forms)"
                },
                classification: {
                    bySize: {
                        monosaccharides: "Single sugar units (glucose, fructose, galactose)",
                        disaccharides: "Two sugar units (sucrose, maltose, lactose)",
                        oligosaccharides: "3-10 sugar units (raffinose, stachyose)",
                        polysaccharides: "Many sugar units (starch, glycogen, cellulose, chitin)"
                    },
                    byCarbonNumber: {
                        triose: "3 carbons (glyceraldehyde)",
                        tetrose: "4 carbons (erythrose)",
                        pentose: "5 carbons (ribose, deoxyribose)",
                        hexose: "6 carbons (glucose, fructose, galactose)",
                        heptose: "7 carbons (sedoheptulose)"
                    },
                    byFunction: {
                        energy: "Glucose, glycogen, starch - rapid or stored energy",
                        structural: "Cellulose, chitin - cell walls and exoskeletons",
                        recognition: "Glycoproteins, glycolipids - cell surface markers"
                    }
                },
                structuralFeatures: {
                    linearForm: "Open-chain structure with aldehyde or ketone",
                    cyclicForm: "Ring structure (furanose or pyranose)",
                    isomerism: "Structural, geometric, and optical isomers exist",
                    configuration: "D and L forms (most biological sugars are D-form)"
                },
                applications: [
                    "Energy metabolism and blood glucose regulation",
                    "Dietary fiber and digestive health",
                    "Biofuel production from cellulose",
                    "Food science and sweetener development",
                    "Glycobiology and disease markers"
                ]
            },

            lipids: {
                title: "Lipids and Biomembranes: Structure and Function",
                concepts: [
                    "Lipids are hydrophobic or amphipathic molecules",
                    "Fatty acids can be saturated or unsaturated",
                    "Phospholipids form bilayer membranes",
                    "Membrane fluidity depends on lipid composition",
                    "Lipids serve energy storage, signaling, and structural roles"
                ],
                theory: "Lipids are a diverse group of hydrophobic molecules essential for membrane structure, energy storage, and cellular signaling. Unlike other macromolecules, lipids are defined by their solubility properties rather than a common structural motif.",
                keyDefinitions: {
                    "Fatty Acid": "Long hydrocarbon chain with a carboxyl group",
                    "Saturated Fatty Acid": "No double bonds between carbons (solid at room temperature)",
                    "Unsaturated Fatty Acid": "One or more double bonds (liquid at room temperature)",
                    "Triglyceride (Triacylglycerol)": "Three fatty acids esterified to glycerol (energy storage)",
                    "Phospholipid": "Glycerol + 2 fatty acids + phosphate group (membrane component)",
                    "Amphipathic": "Having both hydrophobic and hydrophilic regions",
                    "Steroid": "Four-ring hydrocarbon structure (cholesterol, hormones)",
                    "Lipid Bilayer": "Double layer of phospholipids forming cell membranes"
                },
                classification: {
                    simpleLipids: {
                        fats: "Triglycerides - energy storage",
                        waxes: "Long-chain fatty acids + alcohols - protection"
                    },
                    complexLipids: {
                        phospholipids: "Membrane components",
                        glycolipids: "Lipid + carbohydrate - cell recognition",
                        lipoproteins: "Lipid + protein - lipid transport"
                    },
                    derivedLipids: {
                        steroids: "Cholesterol, hormones, vitamin D",
                        fatSolubleVitamins: "A, D, E, K",
                        eicosanoids: "Prostaglandins, leukotrienes - signaling"
                    }
                },
                membraneStructure: {
                    fluidMosaicModel: "Proteins embedded in fluid lipid bilayer",
                    components: {
                        phospholipids: "Primary structural component",
                        cholesterol: "Modulates membrane fluidity",
                        proteins: "Integral and peripheral - transport, signaling",
                        glycolipids: "Cell recognition and immune response"
                    },
                    fluidity: {
                        factors: [
                            "Temperature (higher = more fluid)",
                            "Unsaturated fatty acids (more = more fluid)",
                            "Cholesterol (stabilizes fluidity)",
                            "Chain length (shorter = more fluid)"
                        ]
                    }
                },
                fattyAcidComparison: {
                    saturated: {
                        structure: "No double bonds, straight chains",
                        packingDensity: "High - tight packing",
                        state: "Solid at room temperature",
                        examples: "Palmitic acid (C16:0), Stearic acid (C18:0)",
                        sources: "Animal fats, butter, coconut oil"
                    },
                    unsaturated: {
                        structure: "One or more double bonds, kinked chains",
                        packingDensity: "Low - loose packing",
                        state: "Liquid at room temperature",
                        examples: "Oleic acid (C18:1), Linoleic acid (C18:2)",
                        sources: "Plant oils, fish oil"
                    }
                },
                applications: [
                    "Membrane biology and drug delivery",
                    "Nutritional science and health",
                    "Cardiovascular disease prevention",
                    "Cosmetics and pharmaceutical industry",
                    "Understanding metabolic disorders"
                ]
            },

            proteins: {
                title: "Proteins and Proteomics: Structure, Function, and Regulation",
                concepts: [
                    "Proteins are polymers of amino acids linked by peptide bonds",
                    "20 standard amino acids with diverse properties",
                    "Protein structure has four levels: primary, secondary, tertiary, quaternary",
                    "Structure determines function",
                    "Enzymes are biological catalysts that lower activation energy",
                    "Proteins can be regulated through allosteric mechanisms"
                ],
                theory: "Proteins perform virtually every function in living cells, from catalysis to structure to signaling. Understanding protein structure-function relationships is central to biochemistry and molecular biology.",
                keyDefinitions: {
                    "Amino Acid": "Organic molecule with amino group, carboxyl group, and unique R-group",
                    "Peptide Bond": "Covalent bond between amino acids (C-N bond)",
                    "Polypeptide": "Chain of amino acids linked by peptide bonds",
                    "Primary Structure": "Linear sequence of amino acids",
                    "Secondary Structure": "Local folding into α-helices and β-sheets (H-bonds)",
                    "Tertiary Structure": "3D shape of entire polypeptide (R-group interactions)",
                    "Quaternary Structure": "Multiple polypeptide subunits assembled",
                    "Denaturation": "Loss of protein structure and function",
                    "Active Site": "Region of enzyme where substrate binds",
                    "Allosteric Regulation": "Regulation by binding at site other than active site"
                },
                aminoAcidClassification: {
                    byPolarity: {
                        nonpolar: "Gly, Ala, Val, Leu, Ile, Met, Phe, Trp, Pro",
                        polar: "Ser, Thr, Cys, Tyr, Asn, Gln",
                        charged: {
                            acidic: "Asp, Glu (negative)",
                            basic: "Lys, Arg, His (positive)"
                        }
                    },
                    bySideChain: {
                        aliphatic: "Ala, Val, Leu, Ile",
                        aromatic: "Phe, Tyr, Trp",
                        sulfurContaining: "Cys, Met",
                        hydroxylContaining: "Ser, Thr, Tyr"
                    },
                    special: {
                        glycine: "Smallest, most flexible",
                        proline: "Rigid, kinks polypeptide chain",
                        cysteine: "Forms disulfide bonds"
                    }
                },
                structuralLevels: {
                    primary: {
                        description: "Linear amino acid sequence",
                        bonds: "Peptide bonds (covalent)",
                        determination: "DNA sequence → amino acid sequence",
                        example: "Gly-Ala-Ser-Thr-..."
                    },
                    secondary: {
                        description: "Local folding patterns",
                        bonds: "Hydrogen bonds between backbone atoms",
                        structures: {
                            alphaHelix: "Right-handed coil, 3.6 residues/turn",
                            betaSheet: "Extended, pleated structure (parallel/antiparallel)",
                            turns: "Reverse direction of polypeptide chain"
                        }
                    },
                    tertiary: {
                        description: "Overall 3D shape of polypeptide",
                        bonds: [
                            "Hydrogen bonds",
                            "Ionic bonds",
                            "Disulfide bridges (Cys-Cys)",
                            "Hydrophobic interactions",
                            "Van der Waals forces"
                        ],
                        domains: "Functional units within protein"
                    },
                    quaternary: {
                        description: "Assembly of multiple polypeptide subunits",
                        examples: "Hemoglobin (4 subunits), collagen (3 helices)",
                        interactions: "Same as tertiary, between subunits"
                    }
                },
                proteinFunctions: {
                    catalytic: "Enzymes speed up reactions",
                    structural: "Collagen, keratin, elastin",
                    transport: "Hemoglobin, membrane transporters",
                    storage: "Ferritin (iron), casein (amino acids)",
                    signaling: "Hormones, receptors",
                    movement: "Actin, myosin",
                    defense: "Antibodies, complement proteins",
                    regulation: "Transcription factors, kinases"
                },
                enzymeMechanisms: {
                    lockAndKey: "Substrate fits precisely into active site",
                    inducedFit: "Active site changes shape upon substrate binding",
                    catalyticStrategies: [
                        "Stabilizing transition state",
                        "Providing favorable microenvironment",
                        "Participating in reaction (covalent catalysis)",
                        "Bringing substrates together (proximity effect)"
                    ]
                },
                applications: [
                    "Drug design and development",
                    "Protein engineering and design",
                    "Understanding genetic diseases",
                    "Industrial enzymes and biotechnology",
                    "Proteomics and personalized medicine"
                ]
            },

            nucleic_acids: {
                title: "Nucleic Acids: Structure, Function, and Information Flow",
                concepts: [
                    "DNA and RNA are polymers of nucleotides",
                    "Nucleotides consist of pentose sugar, nitrogenous base, and phosphate",
                    "DNA has a double helix structure with complementary base pairing",
                    "RNA is typically single-stranded and more versatile",
                    "Central Dogma: DNA → RNA → Protein",
                    "DNA replication is semiconservative"
                ],
                theory: "Nucleic acids are information-carrying molecules essential for heredity and gene expression. DNA stores genetic information, while RNA translates that information into functional proteins.",
                keyDefinitions: {
                    "Nucleotide": "Monomer of nucleic acids (sugar + base + phosphate)",
                    "Nucleoside": "Sugar + base (no phosphate)",
                    "Purine": "Two-ring nitrogenous base (Adenine, Guanine)",
                    "Pyrimidine": "One-ring nitrogenous base (Cytosine, Thymine, Uracil)",
                    "Phosphodiester Bond": "Bond linking nucleotides (sugar-phosphate backbone)",
                    "Complementary Base Pairing": "A-T (or A-U) and G-C hydrogen bonding",
                    "Antiparallel": "DNA strands run in opposite directions (5'→3' and 3'→5')",
                    "Central Dogma": "DNA → RNA → Protein information flow"
                },
                nucleotideComponents: {
                    pentoseSugar: {
                        DNA: "Deoxyribose (lacks 2' OH group)",
                        RNA: "Ribose (has 2' OH group)"
                    },
                    nitrogenousBases: {
                        purines: {
                            adenine: "A (both DNA and RNA)",
                            guanine: "G (both DNA and RNA)"
                        },
                        pyrimidines: {
                            cytosine: "C (both DNA and RNA)",
                            thymine: "T (DNA only)",
                            uracil: "U (RNA only, replaces thymine)"
                        }
                    },
                    phosphateGroup: "Links nucleotides via phosphodiester bonds"
                },
                DNAStructure: {
                    doubleHelix: {
                        discoverers: "Watson and Crick (1953)",
                        features: [
                            "Two antiparallel polynucleotide strands",
                            "Right-handed helix",
                            "Major and minor grooves",
                            "Hydrophobic bases inside, hydrophilic backbone outside",
                            "10 base pairs per turn",
                            "Diameter ~2 nm"
                        ]
                    },
                    basePairing: {
                        AT: "2 hydrogen bonds (weaker)",
                        GC: "3 hydrogen bonds (stronger)",
                        rule: "Amount of A = T, amount of G = C (Chargaff's rules)"
                    },
                    forms: {
                        BDNA: "Most common in cells, right-handed",
                        ADNA: "Dehydrated form, wider and shorter",
                        ZDNA: "Left-handed, in specific sequences"
                    }
                },
                RNATypes: {
                    mRNA: {
                        name: "Messenger RNA",
                        function: "Carries genetic code from DNA to ribosome",
                        features: "5' cap, poly-A tail, exons (after splicing)"
                    },
                    tRNA: {
                        name: "Transfer RNA",
                        function: "Brings amino acids to ribosome during translation",
                        features: "Cloverleaf structure, anticodon, amino acid attachment site"
                    },
                    rRNA: {
                        name: "Ribosomal RNA",
                        function: "Structural and catalytic component of ribosomes",
                        features: "Highly conserved, peptidyl transferase activity"
                    },
                    otherRNA: {
                        miRNA: "MicroRNA - gene regulation",
                        siRNA: "Small interfering RNA - gene silencing",
                        lncRNA: "Long non-coding RNA - epigenetic regulation"
                    }
                },
                centralDogma: {
                    replication: {
                        process: "DNA → DNA",
                        purpose: "Copy genetic information for cell division",
                        mechanism: "Semiconservative (each strand templates new strand)",
                        enzymes: "DNA polymerase, helicase, ligase, primase"
                    },
                    transcription: {
                        process: "DNA → RNA",
                        purpose: "Create RNA copy of gene",
                        mechanism: "RNA polymerase reads template strand 3'→5'",
                        location: "Nucleus (eukaryotes)"
                    },
                    translation: {
                        process: "RNA → Protein",
                        purpose: "Synthesize proteins from genetic code",
                        mechanism: "Ribosome reads mRNA codons, tRNA brings amino acids",
                        location: "Ribosome (cytoplasm or ER)"
                    }
                },
                DNAvsRNA: {
                    sugar: "DNA: deoxyribose; RNA: ribose",
                    bases: "DNA: A, T, G, C; RNA: A, U, G, C",
                    structure: "DNA: double-stranded helix; RNA: usually single-stranded",
                    stability: "DNA: more stable; RNA: less stable (2' OH makes it reactive)",
                    function: "DNA: long-term storage; RNA: temporary messenger, catalyst, regulation",
                    location: "DNA: nucleus; RNA: nucleus and cytoplasm"
                },
                applications: [
                    "Genetic testing and diagnosis",
                    "Gene therapy and CRISPR",
                    "Forensic science and paternity testing",
                    "Evolutionary biology and phylogenetics",
                    "Biotechnology and recombinant DNA"
                ]
            },

            bioenergetics: {
                title: "Bioenergetics and Metabolism: Energy Flow in Living Systems",
                concepts: [
                    "ATP is the universal energy currency of cells",
                    "Redox reactions transfer energy via electron carriers",
                    "Metabolism includes catabolic and anabolic pathways",
                    "Glycolysis breaks down glucose in cytoplasm",
                    "Krebs cycle oxidizes acetyl-CoA in mitochondrial matrix",
                    "Electron transport chain generates ATP via chemiosmosis"
                ],
                theory: "Bioenergetics studies energy transformations in biological systems. Cells harness energy from nutrients through metabolic pathways, storing it as ATP for cellular work. Understanding these pathways is essential for biochemistry, physiology, and medicine.",
                keyDefinitions: {
                    "ATP (Adenosine Triphosphate)": "Primary energy currency; releases energy when hydrolyzed to ADP",
                    "Metabolism": "All chemical reactions in an organism",
                    "Catabolism": "Breaking down molecules to release energy",
                    "Anabolism": "Building up molecules using energy",
                    "Redox Reaction": "Transfer of electrons from one molecule to another",
                    "Oxidation": "Loss of electrons (or hydrogen)",
                    "Reduction": "Gain of electrons (or hydrogen)",
                    "Substrate-Level Phosphorylation": "Direct transfer of phosphate to ADP to make ATP",
                    "Oxidative Phosphorylation": "ATP synthesis driven by electron transport chain",
                    "Chemiosmosis": "ATP synthesis using proton gradient across membrane"
                },
                energyMolecules: {
                    ATP: {
                        structure: "Adenine + ribose + 3 phosphate groups",
                        hydrolysis: "ATP + H₂O → ADP + Pi + energy (~30.5 kJ/mol)",
                        regeneration: "ADP + Pi + energy → ATP",
                        cellularAmount: "~250g in human, recycled ~100x/day"
                    },
                    electronCarriers: {
                        NADplus: {
                            full: "Nicotinamide Adenine Dinucleotide",
                            reduced: "NAD⁺ + 2e⁻ + H⁺ → NADH",
                            role: "Primary electron carrier in catabolism"
                        },
                        FAD: {
                            full: "Flavin Adenine Dinucleotide",
                            reduced: "FAD + 2e⁻ + 2H⁺ → FADH₂",
                            role: "Electron carrier in Krebs cycle"
                        },
                        NADPplus: {
                            full: "Nicotinamide Adenine Dinucleotide Phosphate",
                            reduced: "NADP⁺ + 2e⁻ + H⁺ → NADPH",
                            role: "Electron carrier in anabolic reactions (photosynthesis)"
                        }
                    }
                },
                cellularRespiration: {
                    overview: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP (36-38 total)",
                    stages: {
                        glycolysis: {
                            location: "Cytoplasm",
                            input: "1 glucose (6C)",
                            output: "2 pyruvate (3C), 2 ATP (net), 2 NADH",
                            oxygenRequired: "No (anaerobic)",
                            steps: "10 enzyme-catalyzed reactions",
                            energyPhases: {
                                investment: "Uses 2 ATP to phosphorylate glucose",
                                payoff: "Produces 4 ATP and 2 NADH"
                            }
                        },
                        pyruvateLinkReaction: {
                            location: "Mitochondrial matrix",
                            input: "2 pyruvate (from glycolysis)",
                            output: "2 acetyl-CoA, 2 NADH, 2 CO₂",
                            enzyme: "Pyruvate dehydrogenase complex",
                            reaction: "Pyruvate + CoA + NAD⁺ → Acetyl-CoA + NADH + CO₂"
                        },
                        krebsCycle: {
                            alternativeName: "Citric acid cycle, TCA cycle",
                            location: "Mitochondrial matrix",
                            input: "2 acetyl-CoA (per glucose)",
                            output: "4 CO₂, 6 NADH, 2 FADH₂, 2 ATP (or GTP)",
                            turns: "2 per glucose molecule",
                            keySteps: [
                                "Acetyl-CoA (2C) + Oxaloacetate (4C) → Citrate (6C)",
                                "Citrate oxidized through series of steps",
                                "Regenerates oxaloacetate to continue cycle"
                            ]
                        },
                        electronTransportChain: {
                            location: "Inner mitochondrial membrane (cristae)",
                            input: "10 NADH, 2 FADH₂ (from all previous stages)",
                            output: "~32-34 ATP, H₂O",
                            mechanism: [
                                "NADH and FADH₂ donate electrons",
                                "Electrons pass through protein complexes (I, II, III, IV)",
                                "Energy pumps H⁺ from matrix to intermembrane space",
                                "Proton gradient drives ATP synthase",
                                "Oxygen is final electron acceptor (forms H₂O)"
                            ],
                            chemiosmosis: "H⁺ flows back through ATP synthase, driving ATP synthesis"
                        }
                    },
                    ATPYield: {
                        glycolysis: "2 ATP (substrate-level) + 2 NADH (→ 5 ATP)",
                        linkReaction: "2 NADH (→ 5 ATP)",
                        krebsCycle: "2 ATP + 6 NADH (→ 15 ATP) + 2 FADH₂ (→ 3 ATP)",
                        total: "~36-38 ATP per glucose (varies by shuttle system)"
                    }
                },
                anaerobicRespiration: {
                    fermentation: {
                        definition: "Glycolysis + regeneration of NAD⁺ without oxygen",
                        ATPYield: "2 ATP per glucose (only from glycolysis)",
                        lacticAcid: {
                            organisms: "Muscle cells, some bacteria",
                            reaction: "Pyruvate + NADH → Lactate + NAD⁺",
                            result: "Allows glycolysis to continue"
                        },
                        alcoholic: {
                            organisms: "Yeast, some bacteria",
                            reaction: "Pyruvate → Ethanol + CO₂ + NAD⁺",
                            application: "Beer, wine, bread making"
                        }
                    }
                },
                metabolicRegulation: {
                    feedback: "Product inhibits earlier step (e.g., ATP inhibits phosphofructokinase)",
                    allosteric: "Molecules bind to regulatory sites on enzymes",
                    hormonal: "Insulin/glucagon regulate glucose metabolism",
                    compartmentalization: "Separating pathways in organelles"
                },
                applications: [
                    "Understanding metabolic diseases (diabetes, mitochondrial disorders)",
                    "Athletic performance and muscle physiology",
                    "Cancer metabolism (Warburg effect)",
                    "Drug targeting of metabolic pathways",
                    "Biofuel production and fermentation technology"
                ]
            },

            enzymes: {
                title: "Enzyme Function and Kinetics: Biological Catalysis",
                concepts: [
                    "Enzymes are biological catalysts that speed up reactions",
                    "Enzymes lower activation energy without being consumed",
                    "Active site is specific for substrate (lock-and-key or induced fit)",
                    "Enzyme activity depends on temperature, pH, and cofactors",
                    "Michaelis-Menten kinetics describes enzyme behavior",
                    "Enzymes can be regulated by inhibitors and activators"
                ],
                theory: "Enzymes are protein catalysts essential for virtually all biochemical reactions. They achieve remarkable specificity and rate enhancement, making life possible at physiological temperatures.",
                keyDefinitions: {
                    "Enzyme": "Biological catalyst (usually protein) that speeds up reactions",
                    "Active Site": "Region where substrate binds and reaction occurs",
                    "Substrate": "Reactant molecule that binds to enzyme",
                    "Product": "Molecule(s) formed by enzyme-catalyzed reaction",
                    "Cofactor": "Non-protein helper (metal ion or organic molecule)",
                    "Coenzyme": "Organic cofactor (often vitamin-derived)",
                    "Apoenzyme": "Protein part of enzyme without cofactor",
                    "Holoenzyme": "Complete, active enzyme (apoenzyme + cofactor)",
                    "Activation Energy": "Energy needed to start a reaction",
                    "Turnover Number (kcat)": "Substrate molecules converted per enzyme per time"
                },
                mechanismOfAction: {
                    lockAndKey: {
                        proposed: "Emil Fischer (1894)",
                        description: "Rigid active site perfectly fits substrate",
                        limitation: "Doesn't explain conformational changes"
                    },
                    inducedFit: {
                        proposed: "Daniel Koshland (1958)",
                        description: "Active site changes shape upon substrate binding",
                        advantage: "Better explains specificity and catalytic mechanisms"
                    },
                    catalyticStrategies: [
                        "Stabilize transition state (lower activation energy)",
                        "Provide optimal microenvironment (pH, hydrophobicity)",
                        "Bring substrates together (proximity and orientation)",
                        "Participate directly in reaction (covalent catalysis)",
                        "Strain substrate bonds"
                    ]
                },
                factorsAffectingActivity: {
                    temperature: {
                        low: "Slow molecular motion, low reaction rate",
                        optimal: "Maximum activity (typically 35-40°C for human enzymes)",
                        high: "Denaturation, loss of activity",
                        Qten: "Reaction rate doubles per 10°C increase (until denaturation)"
                    },
                    pH: {
                        optimal: "pH at which enzyme is most active (varies by enzyme)",
                        extremes: "Alter ionization of amino acids, denature enzyme",
                        examples: "Pepsin (pH 2), trypsin (pH 8), catalase (pH 7)"
                    },
                    substrateConcentration: {
                        low: "Rate increases linearly with [S]",
                        high: "Rate plateaus (enzyme saturation)",
                        Vmax: "Maximum rate when all enzyme active sites occupied"
                    },
                    enzymeConcentration: {
                        relationship: "Rate directly proportional to [E] (when substrate not limiting)"
                    }
                },
                enzymeKinetics: {
                    MichaelisMenten: {
                        equation: "v = (Vmax [S]) / (Km + [S])",
                        Vmax: "Maximum reaction rate at saturating [S]",
                        Km: "Substrate concentration at half Vmax (measure of affinity)",
                        assumptions: [
                            "Substrate in large excess",
                            "Steady-state conditions",
                            "Initial rate measured (product doesn't accumulate)"
                        ],
                        interpretation: {
                            lowKm: "High affinity (enzyme binds substrate tightly)",
                            highKm: "Low affinity (enzyme binds substrate weakly)"
                        }
                    },
                    LineweaverBurk: {
                        equation: "1/v = (Km/Vmax)(1/[S]) + 1/Vmax",
                        plot: "Double reciprocal plot (1/v vs 1/[S])",
                        yIntercept: "1/Vmax",
                        xIntercept: "-1/Km",
                        slope: "Km/Vmax",
                        use: "Determine kinetic parameters, identify inhibition type"
                    }
                },
                enzymeInhibition: {
                    competitiveInhibition: {
                        mechanism: "Inhibitor competes with substrate for active site",
                        effect: "Increases apparent Km, Vmax unchanged",
                        overcome: "Increase substrate concentration",
                        example: "Malonate inhibits succinate dehydrogenase"
                    },
                    noncompetitiveInhibition: {
                        mechanism: "Inhibitor binds to site other than active site (allosteric)",
                        effect: "Decreases Vmax, Km unchanged",
                        overcome: "Cannot be overcome by increasing [S]",
                        example: "Heavy metals inhibiting many enzymes"
                    },
                    uncompetitiveInhibition: {
                        mechanism: "Inhibitor binds only to ES complex",
                        effect: "Decreases both Vmax and Km",
                        example: "Less common, some drugs"
                    },
                    irreversibleInhibition: {
                        mechanism: "Inhibitor covalently modifies enzyme (permanent)",
                        examples: "Aspirin (COX inhibitor), penicillin (transpeptidase inhibitor)",
                        suicide: "Inhibitor activated by enzyme, then inactivates it"
                    }
                },
                enzymeRegulation: {
                    allostericRegulation: {
                        mechanism: "Regulator binds to site other than active site",
                        effect: "Changes enzyme conformation and activity",
                        positive: "Activator increases activity",
                        negative: "Inhibitor decreases activity",
                        example: "Phosphofructokinase in glycolysis"
                    },
                    feedbackInhibition: {
                        mechanism: "End product inhibits earlier enzyme in pathway",
                        purpose: "Prevents overproduction",
                        example: "CTP inhibits aspartate transcarbamoylase"
                    },
                    covalentModification: {
                        phosphorylation: "Addition of phosphate group (activates or inhibits)",
                        methylation: "Addition of methyl group",
                        example: "Glycogen phosphorylase activated by phosphorylation"
                    },
                    compartmentalization: {
                        mechanism: "Separate enzymes and substrates in different locations",
                        example: "Metabolic pathways in different organelles"
                    }
                },
                enzymeClassification: {
                    oxidoreductases: "Catalyze oxidation-reduction reactions (dehydrogenases, oxidases)",
                    transferases: "Transfer functional groups (kinases, transaminases)",
                    hydrolases: "Break bonds using water (proteases, lipases, nucleases)",
                    lyases: "Break bonds without water or redox (decarboxylases, aldolases)",
                    isomerases: "Rearrange atoms within molecule (racemases, epimerases)",
                    ligases: "Form bonds using ATP (synthetases, carboxylases)"
                },
                applications: [
                    "Drug design (enzyme inhibitors as drugs)",
                    "Diagnostic tests (enzyme markers for disease)",
                    "Industrial processes (detergents, food processing)",
                    "Biotechnology (restriction enzymes, polymerases)",
                    "Understanding metabolic disorders"
                ]
            },

            molecular_signaling: {
                title: "Molecular Signaling: Cell Communication and Signal Transduction",
                concepts: [
                    "Cells communicate via chemical signals (hormones, neurotransmitters)",
                    "Receptors are specific proteins that bind signaling molecules",
                    "Signal transduction amplifies and transmits signals into cells",
                    "Second messengers relay signals inside cells",
                    "Signaling cascades allow for regulation and amplification"
                ],
                theory: "Cells coordinate their activities through chemical communication. Signal transduction pathways convert extracellular signals into cellular responses, enabling organisms to respond to their environment.",
                keyDefinitions: {
                    "Ligand": "Signaling molecule that binds to receptor",
                    "Receptor": "Protein that binds ligand and initiates response",
                    "Signal Transduction": "Process of converting extracellular signal to intracellular response",
                    "Second Messenger": "Small molecule that relays signal inside cell (cAMP, Ca²⁺, IP₃)",
                    "Amplification": "Each step in cascade activates multiple molecules",
                    "G-Protein": "Molecular switch that activates signaling pathways",
                    "Protein Kinase": "Enzyme that phosphorylates proteins",
                    "Autophosphorylation": "Receptor phosphorylates itself upon activation"
                },
                signalingTypes: {
                    endocrine: {
                        description: "Long-distance signaling via bloodstream",
                        ligands: "Hormones (insulin, estrogen, growth hormone)",
                        speed: "Slow (minutes to hours)",
                        duration: "Long-lasting effects"
                    },
                    paracrine: {
                        description: "Local signaling to nearby cells",
                        ligands: "Growth factors, neurotransmitters (at synapse)",
                        speed: "Fast (seconds to minutes)",
                        duration: "Short-lived, local effects"
                    },
                    autocrine: {
                        description: "Cell signals to itself",
                        ligands: "Growth factors during development",
                        purpose: "Self-regulation, cancer cells often use this"
                    },
                    juxtacrine: {
                        description: "Direct contact between cells",
                        mechanism: "Membrane-bound signals, gap junctions",
                        example: "Notch signaling in development"
                    }
                },
                receptorTypes: {
                    GPCRs: {
                        name: "G-Protein Coupled Receptors",
                        structure: "7 transmembrane domains",
                        mechanism: [
                            "Ligand binds to receptor",
                            "Receptor activates G-protein (GDP → GTP exchange)",
                            "G-protein activates effector enzyme",
                            "Effector produces second messenger",
                            "Signal amplified through cascade"
                        ],
                        examples: "Adrenaline receptors, odorant receptors",
                        secondMessengers: "cAMP, IP₃, DAG, Ca²⁺"
                    },
                    RTKs: {
                        name: "Receptor Tyrosine Kinases",
                        structure: "Single transmembrane domain with tyrosine kinase",
                        mechanism: [
                            "Ligand binding causes receptor dimerization",
                            "Autophosphorylation of tyrosine residues",
                            "Phosphotyrosines recruit signaling proteins",
                            "Activate multiple pathways (Ras/MAPK, PI3K/Akt)"
                        ],
                        examples: "Insulin receptor, growth factor receptors (EGFR)"
                    },
                    ionChannelReceptors: {
                        name: "Ligand-Gated Ion Channels",
                        structure: "Multisubunit pore",
                        mechanism: "Ligand binding opens channel, ions flow",
                        speed: "Fastest signaling (milliseconds)",
                        examples: "Acetylcholine receptor (nicotinic), GABA receptor"
                    },
                    intracellularReceptors: {
                        name: "Nuclear Receptors",
                        location: "Cytoplasm or nucleus",
                        ligands: "Lipid-soluble hormones (steroid, thyroid)",
                        mechanism: "Ligand-receptor complex acts as transcription factor",
                        examples: "Estrogen receptor, testosterone receptor"
                    }
                },
                secondMessengers: {
                    cAMP: {
                        fullName: "Cyclic AMP",
                        production: "ATP → cAMP (by adenylyl cyclase)",
                        degradation: "cAMP → AMP (by phosphodiesterase)",
                        target: "Protein Kinase A (PKA)",
                        examples: "Adrenaline, glucagon signaling"
                    },
                    calcium: {
                        symbol: "Ca²⁺",
                        storage: "ER/SR stores Ca²⁺",
                        release: "IP₃ opens Ca²⁺ channels",
                        sensors: "Calmodulin binds Ca²⁺, activates enzymes",
                        examples: "Muscle contraction, neurotransmitter release"
                    },
                    IP3_DAG: {
                        IP3: "Inositol trisphosphate - releases Ca²⁺ from ER",
                        DAG: "Diacylglycerol - activates Protein Kinase C (PKC)",
                        production: "PLC cleaves PIP₂ → IP₃ + DAG",
                        example: "Growth factor signaling"
                    }
                },
                signalingPathways: {
                    cAMP_PKA: {
                        steps: [
                            "Hormone binds GPCR",
                            "G-protein activates adenylyl cyclase",
                            "cAMP produced",
                            "cAMP activates PKA",
                            "PKA phosphorylates target proteins",
                            "Cellular response (e.g., glycogen breakdown)"
                        ]
                    },
                    Ras_MAPK: {
                        steps: [
                            "Growth factor binds RTK",
                            "RTK autophosphorylation",
                            "Adaptor proteins recruit Ras-GEF",
                            "Ras activated (GDP → GTP)",
                            "Ras activates Raf (MAPKKK)",
                            "Raf → MEK (MAPKK) → ERK (MAPK)",
                            "ERK enters nucleus, phosphorylates transcription factors",
                            "Gene expression changes"
                        ],
                        importance: "Cell growth, division, differentiation; mutations cause cancer"
                    },
                    PI3K_Akt: {
                        steps: [
                            "RTK activation",
                            "PI3K recruited, produces PIP₃",
                            "PIP₃ recruits Akt to membrane",
                            "Akt phosphorylated and activated",
                            "Akt phosphorylates many targets (metabolism, survival)"
                        ],
                        importance: "Cell survival, growth, metabolism"
                    }
                },
                signalTermination: {
                    receptorInactivation: "Phosphorylation, internalization, degradation",
                    GTPaseActivity: "G-proteins and Ras hydrolyze GTP → GDP (self-inactivate)",
                    phosphatases: "Remove phosphate groups added by kinases",
                    degradationOfSecondMessengers: "Phosphodiesterases break down cAMP/cGMP"
                },
                applications: [
                    "Drug development (most drugs target receptors or signaling proteins)",
                    "Understanding cancer (many oncogenes are signaling proteins)",
                    "Hormone disorders and therapy",
                    "Neuroscience and neurotransmitter function",
                    "Personalized medicine (targeted therapies)"
                ]
            },

            glycobiology: {
                title: "Glycobiology: Carbohydrates in Cell Recognition and Signaling",
                concepts: [
                    "Glycoproteins and glycolipids have carbohydrate chains on cell surfaces",
                    "Oligosaccharides serve as recognition markers",
                    "Lectins are proteins that bind specific carbohydrates",
                    "Blood types determined by carbohydrate structures",
                    "Glycosylation affects protein folding, stability, and function"
                ],
                theory: "Glycobiology studies the structure, biosynthesis, and function of carbohydrates in biological systems. Carbohydrates on cell surfaces mediate cell-cell recognition, immune responses, and pathogen interactions.",
                keyDefinitions: {
                    "Glycoprotein": "Protein with covalently attached carbohydrate chains",
                    "Glycolipid": "Lipid with attached carbohydrate (e.g., gangliosides)",
                    "Glycosylation": "Enzymatic addition of carbohydrates to proteins or lipids",
                    "Lectin": "Protein that binds specific carbohydrate structures",
                    "Glycocalyx": "Carbohydrate-rich layer on cell surface",
                    "N-linked": "Carbohydrate attached to asparagine (Asn)",
                    "O-linked": "Carbohydrate attached to serine or threonine (Ser/Thr)",
                    "Oligosaccharide": "Short chain of sugars (3-10 monosaccharides)"
                },
                glycoproteinStructure: {
                    Nlinked: {
                        attachment: "Asparagine (Asn) in Asn-X-Ser/Thr sequence",
                        location: "ER and Golgi",
                        commonCore: "Man₃GlcNAc₂ (mannose and N-acetylglucosamine)",
                        types: {
                            highMannose: "Many mannose residues",
                            complex: "Diverse, often branched with sialic acid",
                            hybrid: "Features of both"
                        },
                        examples: "Antibodies, cell surface receptors"
                    },
                    Olinked: {
                        attachment: "Serine (Ser) or Threonine (Thr)",
                        location: "Golgi",
                        commonSugar: "N-acetylgalactosamine (GalNAc) often first",
                        examples: "Mucins, collagen"
                    }
                },
                glycolipids: {
                    cerebrosides: "Simple glycolipids with single sugar (glucose or galactose)",
                    gangliosides: "Complex glycolipids with sialic acid, abundant in nervous system",
                    location: "Outer leaflet of plasma membrane",
                    function: "Cell recognition, signaling, receptor modulation"
                },
                cellRecognition: {
                    bloodTypes: {
                        determination: "Carbohydrate structures on RBC surface",
                        A: "N-acetylgalactosamine added",
                        B: "Galactose added",
                        O: "No additional sugar (H antigen only)",
                        AB: "Both A and B sugars present",
                        Rhfactor: "Protein antigen (separate from ABO)"
                    },
                    immuneResponse: {
                        selfVsNonself: "Immune system recognizes foreign carbohydrate patterns",
                        antibodies: "Recognize specific oligosaccharide epitopes",
                        pathogens: "Often have unique carbohydrate structures"
                    },
                    cellAdhesion: {
                        selectins: "Lectins that bind carbohydrates during inflammation",
                        homing: "Lymphocytes recognize carbohydrates to find target tissues",
                        fertilization: "Sperm bind egg glycoproteins"
                    }
                },
                lectins: {
                    definition: "Carbohydrate-binding proteins (not enzymes, no catalysis)",
                    types: {
                        Ctype: "Calcium-dependent (selectins, collectins)",
                        Stype: "Contain sulfhydryl groups (galectins)",
                        Ptype: "Mannose-6-phosphate receptors",
                        Itype: "Immunoglobulin-like (siglecs)"
                    },
                    functions: [
                        "Cell adhesion and trafficking",
                        "Immune recognition",
                        "Protein trafficking within cells",
                        "Pathogen recognition (innate immunity)"
                    ],
                    examples: "Hemagglutinin (influenza virus), concanavalin A (plant lectin)"
                },
                glycosylationFunctions: {
                    proteinFolding: "Helps chaperones fold proteins correctly",
                    stability: "Protects from proteolysis and aggregation",
                    trafficking: "Mannose-6-phosphate targets proteins to lysosomes",
                    signaling: "Modulates receptor activity and interactions",
                    recognition: "Cell-cell and cell-pathogen interactions"
                },
                diseaseRelevance: {
                    cancer: "Altered glycosylation on tumor cells (tumor markers)",
                    infectiousDiseases: "Pathogens use carbohydrates to attach and invade",
                    congenitalDisorders: "CDG (Congenital Disorders of Glycosylation)",
                    autoimmunity: "Antibodies against self-carbohydrates",
                    transplantRejection: "Carbohydrate antigens cause graft rejection"
                },
                applications: [
                    "Vaccine development (carbohydrate-based vaccines)",
                    "Cancer diagnostics and therapy",
                    "Blood transfusion and typing",
                    "Understanding infectious disease",
                    "Designing glycoprotein therapeutics"
                ]
            },

            molecular_techniques: {
                title: "Molecular Techniques: Methods for Studying Biological Molecules",
                concepts: [
                    "Electrophoresis separates molecules by size and charge",
                    "PCR amplifies specific DNA sequences",
                    "Chromatography separates molecules by physical/chemical properties",
                    "Different techniques suited for different molecule types",
                    "Understanding principles allows proper technique selection"
                ],
                theory: "Molecular techniques enable scientists to isolate, identify, and analyze biological macromolecules. These methods are fundamental to biochemistry, molecular biology, and biotechnology research.",
                keyDefinitions: {
                    "Electrophoresis": "Separation of charged molecules in electric field",
                    "PCR (Polymerase Chain Reaction)": "Amplification of DNA sequences",
                    "Chromatography": "Separation based on differential migration through medium",
                    "Denaturation": "Unfolding proteins or separating DNA strands",
                    "Annealing": "Binding of complementary sequences (DNA primers)",
                    "Visualization": "Making separated molecules visible (stains, fluorescence)",
                    "Resolution": "Ability to distinguish between similar molecules",
                    "Elution": "Removal of molecules from chromatography column"
                },
                electrophoresis: {
                    gelElectrophoresis: {
                        principle: "Charged molecules migrate through gel matrix in electric field",
                        matrix: "Agarose (DNA, large proteins) or polyacrylamide (small proteins, DNA)",
                        separation: "By size (and sometimes charge)",
                        visualization: "Ethidium bromide (DNA), Coomassie blue (protein)",
                        applications: "DNA fingerprinting, protein purity check, genotyping"
                    },
                    SDSPAGE: {
                        name: "Sodium Dodecyl Sulfate Polyacrylamide Gel Electrophoresis",
                        purpose: "Separate proteins by molecular weight",
                        SDS: "Denatures proteins, gives uniform negative charge",
                        mechanism: "All proteins have same charge/mass ratio, separate only by size",
                        reducing: "β-mercaptoethanol or DTT breaks disulfide bonds",
                        visualization: "Coomassie stain, silver stain",
                        application: "Protein analysis, Western blot"
                    },
                    isoelectricFocusing: {
                        principle: "Separate proteins by isoelectric point (pI)",
                        mechanism: "pH gradient; protein stops where pH = pI (no net charge)",
                        combination: "2D gels (IEF + SDS-PAGE) for comprehensive protein separation"
                    },
                    capillaryElectrophoresis: {
                        setup: "Narrow capillary tube, high voltage",
                        advantages: "High resolution, small sample, automated",
                        applications: "DNA sequencing, forensics, drug testing"
                    }
                },
                PCR: {
                    components: {
                        template: "DNA containing target sequence",
                        primers: "Short DNA sequences flanking target (forward and reverse)",
                        polymerase: "Taq polymerase (heat-stable)",
                        dNTPs: "Deoxynucleotide triphosphates (building blocks)",
                        buffer: "Optimal pH and ions (Mg²⁺)"
                    },
                    cycleSteps: {
                        denaturation: "94-98°C - separate DNA strands",
                        annealing: "50-65°C - primers bind to template",
                        extension: "72°C - Taq polymerase synthesizes new strand"
                    },
                    amplification: "Exponential: 2^n copies after n cycles (typically 25-35 cycles)",
                    applications: [
                        "Clone genes",
                        "Diagnose genetic diseases",
                        "Forensic DNA analysis",
                        "Detect pathogens",
                        "Study gene expression (RT-PCR)"
                    ],
                    variations: {
                        rtPCR: "Reverse Transcriptase PCR - amplify RNA (convert to cDNA first)",
                        qPCR: "Quantitative/Real-time PCR - measure DNA amount in real-time",
                        multiplex: "Multiple primer sets amplify different targets simultaneously"
                    }
                },
                chromatography: {
                    principle: "Separate molecules based on interactions with stationary and mobile phases",
                    types: {
                        paperChromatography: {
                            stationary: "Paper (cellulose)",
                            mobile: "Solvent",
                            separation: "Polarity, size",
                            application: "Amino acids, pigments (simple, educational)"
                        },
                        TLC: {
                            name: "Thin Layer Chromatography",
                            stationary: "Silica or alumina on glass/plastic",
                            mobile: "Solvent mixture",
                            separation: "Polarity",
                            visualization: "UV light, iodine vapor, stains",
                            Rf: "Retention factor = distance moved by compound / distance moved by solvent",
                            application: "Quick analysis, drug screening"
                        },
                        columnChromatography: {
                            stationary: "Resin packed in column",
                            mobile: "Buffer or solvent flows through",
                            types: {
                                ionExchange: "Separates by charge",
                                sizeExclusion: "Separates by size (gel filtration)",
                                affinity: "Separates by specific binding (e.g., antibody, his-tag)",
                                hydrophobic: "Separates by hydrophobicity"
                            },
                            application: "Protein purification, DNA isolation"
                        },
                        HPLC: {
                            name: "High Performance Liquid Chromatography",
                            features: "High pressure, very fine resin, high resolution",
                            detection: "UV absorbance, fluorescence, mass spec",
                            types: "Reverse-phase, ion exchange, size exclusion",
                            application: "Purify/analyze small molecules, peptides, proteins"
                        },
                        gasChromatography: {
                            mobile: "Inert gas (helium, nitrogen)",
                            stationary: "Liquid or solid in column",
                            requirement: "Volatile or derivatized samples",
                            detection: "Flame ionization, mass spec (GC-MS)",
                            application: "Metabolite analysis, environmental toxins"
                        }
                    }
                },
                blottingTechniques: {
                    southernBlot: {
                        target: "DNA",
                        steps: [
                            "Digest DNA with restriction enzymes",
                            "Separate by gel electrophoresis",
                            "Transfer to membrane (blotting)",
                            "Hybridize with labeled DNA probe",
                            "Detect probe (autoradiography or chemiluminescence)"
                        ],
                        application: "Detect specific DNA sequences, gene mapping"
                    },
                    northernBlot: {
                        target: "RNA",
                        similar: "Like Southern but with RNA",
                        application: "Detect and quantify specific mRNA"
                    },
                    westernBlot: {
                        target: "Protein",
                        steps: [
                            "Separate proteins by SDS-PAGE",
                            "Transfer to membrane (nitrocellulose or PVDF)",
                            "Block non-specific binding",
                            "Incubate with primary antibody (specific for target protein)",
                            "Incubate with secondary antibody (labeled, binds primary)",
                            "Detect (chemiluminescence, fluorescence)"
                        ],
                        application: "Detect specific proteins, confirm expression, diagnose disease"
                    }
                },
                spectroscopy: {
                    UVVis: {
                        principle: "Measure absorbance of UV/visible light",
                        use: "Quantify nucleic acids (260 nm), proteins (280 nm)",
                        purity: "260/280 ratio (DNA purity), 260/230 ratio (contamination)",
                        BeerLambert: "A = εcl (absorbance = molar absorptivity × concentration × path length)"
                    },
                    fluorescence: {
                        principle: "Excite fluorophore, measure emitted light",
                        use: "Quantify DNA (PicoGreen), proteins (fluorescent dyes), live cell imaging",
                        sensitivity: "More sensitive than UV-Vis"
                    },
                    massSpectrometry: {
                        principle: "Ionize molecules, measure mass-to-charge ratio",
                        use: "Identify proteins, sequence peptides, detect post-translational modifications",
                        coupling: "LC-MS, GC-MS (separate first, then analyze)",
                        proteomics: "Identify thousands of proteins in complex samples"
                    }
                },
                applications: [
                    "Recombinant protein production and purification",
                    "DNA cloning and genetic engineering",
                    "Clinical diagnostics (disease markers)",
                    "Forensic science (DNA fingerprinting)",
                    "Drug discovery and development",
                    "Quality control in biotechnology"
                ]
            }
        };
    }

    initializeMolecularExperiments() {
        this.molecularExperiments = {
            // ========================================
            // CARBOHYDRATE EXPERIMENTS
            // ========================================
            
            prouts_classification: {
                name: "Prout's Classification - The Standard Four Food Tests",
                relatedTopics: ['carbohydrates', 'proteins', 'lipids'],
                category: 'biochemical_tests',
                historicalBackground: {
                    scientist: "William Prout",
                    year: "1827",
                    contribution: "Classified nutrients into three 'proximate principles': saccharines (carbohydrates), oleaginous (fats), and albuminous (proteins)",
                    context: "Prout recognized that foods could be categorized by their chemical nature, laying groundwork for nutritional biochemistry",
                    significance: "First systematic classification of macronutrients",
                    quote: "The ultimate elements of food are saccharous, oily, and albuminous matter"
                },
                labExperiment: {
                    title: "The Standard Four Food Tests",
                    hypothesis: "Different foods contain different macromolecules that can be identified through specific chemical tests",
                    purpose: "Identify presence of carbohydrates, reducing sugars, proteins, and lipids in food samples",
                    variables: {
                        independent: "Type of food sample tested",
                        dependent: "Color change observed in each test",
                        controlled: ["Reagent concentration", "Temperature", "Sample amount", "Reaction time"]
                    },
                    materials: [
                        "Food samples: glucose solution, starch suspension, egg white, vegetable oil, bread, potato, milk",
                        "Benedict's reagent (reducing sugar test)",
                        "Iodine solution (starch test)",
                        "Biuret reagent (protein test)",
                        "Sudan III or IV solution (lipid test)",
                        "Test tubes and test tube rack",
                        "Dropper or pipette",
                        "Hot water bath or beaker with boiling water",
                        "Test tube holder",
                        "White tile (for observing color changes)",
                        "Mortar and pestle (for solid food samples)",
                        "Distilled water"
                    ],
                    safetyPrecautions: [
                        "Wear safety goggles and lab coat",
                        "Benedict's reagent contains copper sulfate - avoid skin contact",
                        "Biuret reagent contains sodium hydroxide - caustic, handle carefully",
                        "Sudan III can stain skin and clothing",
                        "Use test tube holder when heating",
                        "Do not point test tube at anyone when heating",
                        "Dispose of chemicals properly"
                    ],
                    procedure: {
                        preparation: [
                            "Prepare food samples by crushing solids with mortar and pestle",
                            "Mix solid samples with small amount of distilled water",
                            "Label test tubes clearly for each test and sample",
                            "Set up hot water bath if using Benedict's test"
                        ],
                        
                        test1_BenedictsReducingSugar: {
                            name: "Benedict's Test for Reducing Sugars",
                            target: "Glucose, fructose, maltose, lactose (not sucrose)",
                            steps: [
                                "Add 2 ml of food sample to test tube",
                                "Add 2 ml of Benedict's reagent",
                                "Place test tube in boiling water bath for 3-5 minutes",
                                "Observe color change",
                                "Record results"
                            ],
                            colorResults: {
                                blue: "No reducing sugar (negative)",
                                green: "Trace amount (0.5%)",
                                yellow: "Low amount (0.5-1%)",
                                orange: "Moderate amount (1-1.5%)",
                                brickRed: "High amount (>2%) - positive"
                            },
                            principle: "Reducing sugars reduce Cu²⁺ (blue) to Cu₂O (brick red precipitate) in alkaline conditions when heated",
                            chemicalReaction: "Cu²⁺ (blue) + reducing sugar + heat → Cu₂O (brick red) + oxidized sugar"
                        },
                        
                        test2_IodineStarch: {
                            name: "Iodine Test for Starch",
                            target: "Starch (polysaccharide)",
                            steps: [
                                "Add 2 ml of food sample to test tube",
                                "Add 2-3 drops of iodine solution",
                                "Mix gently",
                                "Observe color change immediately",
                                "Record results"
                            ],
                            colorResults: {
                                brownOrange: "No starch (iodine color) - negative",
                                blueBlack: "Starch present - positive"
                            },
                            principle: "Iodine forms complex with helical structure of amylose in starch, producing blue-black color",
                            note: "This test does NOT require heating"
                        },
                        
                        test3_BiuretProtein: {
                            name: "Biuret Test for Proteins",
                            target: "Proteins and polypeptides",
                            steps: [
                                "Add 2 ml of food sample to test tube",
                                "Add 1 ml of Biuret reagent (contains NaOH and CuSO₄)",
                                "Mix gently",
                                "Wait 5 minutes at room temperature",
                                "Observe color change",
                                "Record results"
                            ],
                            colorResults: {
                                blue: "No protein (reagent color) - negative",
                                violet: "Protein present - positive",
                                pink: "Short peptides present"
                            },
                            principle: "Peptide bonds (C-N) in proteins complex with Cu²⁺ ions in alkaline solution, forming violet complex",
                            chemicalReaction: "Cu²⁺ + peptide bonds in alkaline solution → violet copper complex"
                        },
                        
                        test4_SudanLipid: {
                            name: "Sudan III/IV Test for Lipids",
                            target: "Fats and oils",
                            steps: [
                                "Add 2 ml of food sample to test tube",
                                "Add 2 ml of ethanol (or leave sample in water)",
                                "Add 2-3 drops of Sudan III or Sudan IV solution",
                                "Shake gently",
                                "Observe formation of layers and color",
                                "Record results"
                            ],
                            colorResults: {
                                noRedLayer: "No lipid - negative",
                                redLayer: "Lipid present (red layer on top or red droplets) - positive"
                            },
                            principle: "Sudan dyes are lipophilic (fat-soluble) and preferentially dissolve in lipids, staining them red/orange",
                            alternative: "Ethanol emulsion test - lipids form cloudy white emulsion when mixed with ethanol then added to water"
                        }
                    },
                    expectedResults: {
                        glucose: "Benedict's: brick red; Iodine: brown; Biuret: blue; Sudan: clear",
                        starch: "Benedict's: blue; Iodine: blue-black; Biuret: blue; Sudan: clear",
                        eggWhite: "Benedict's: blue; Iodine: brown; Biuret: violet; Sudan: clear",
                        oil: "Benedict's: blue; Iodine: brown; Biuret: blue; Sudan: red layer",
                        bread: "Benedict's: slight color (trace sugar); Iodine: blue-black; Biuret: slight violet; Sudan: clear",
                        potato: "Benedict's: slight color; Iodine: blue-black; Biuret: blue; Sudan: clear",
                        milk: "Benedict's: orange (lactose); Iodine: brown; Biuret: violet; Sudan: slight red"
                    },
                    dataTable: [
                        ["Food Sample", "Benedict's", "Iodine", "Biuret", "Sudan III"],
                        ["Glucose solution", "Brick red", "Brown", "Blue", "Clear"],
                        ["Starch solution", "Blue", "Blue-black", "Blue", "Clear"],
                        ["Egg white", "Blue", "Brown", "Violet", "Clear"],
                        ["Vegetable oil", "Blue", "Brown", "Blue", "Red layer"],
                        ["Bread", "Yellow", "Blue-black", "Pale violet", "Clear"],
                        ["Potato", "Green/yellow", "Blue-black", "Blue", "Clear"],
                        ["Milk", "Orange", "Brown", "Violet", "Slight red"]
                    ],
                    analysis: {
                        interpretation: [
                            "Positive Benedict's = reducing sugars present (simple sugars)",
                            "Positive iodine = starch present (complex carbohydrate)",
                            "Positive Biuret = proteins present",
                            "Positive Sudan = lipids/fats present",
                            "Some foods contain multiple macromolecules"
                        ],
                        limitations: [
                            "Tests are qualitative, not quantitative (can't determine exact amounts)",
                            "Sucrose does NOT give positive Benedict's (not a reducing sugar)",
                            "Very dilute samples may give false negatives",
                            "Food colorings can interfere with results"
                        ]
                    },
                    conclusions: [
                        "Different foods contain different combinations of macromolecules",
                        "Chemical tests can identify specific macromolecules based on their unique properties",
                        "Carbohydrates, proteins, and lipids have distinct chemical behaviors",
                        "Simple tests confirm Prout's classification of nutrients into distinct groups"
                    ],
                    realWorldApplications: [
                        "Food labeling and nutritional analysis",
                        "Quality control in food industry",
                        "Detecting adulteration in food products",
                        "Diagnosing malnutrition",
                        "Educational demonstrations of biochemistry"
                    ],
                    extensions: [
                        "Test a variety of foods and create a macromolecule content chart",
                        "Investigate why sucrose doesn't give positive Benedict's test",
                        "Research how food processing affects test results",
                        "Design quantitative versions of these tests"
                    ]
                }
            },

            // ========================================
            // PROTEIN EXPERIMENTS
            // ========================================
            
            sangers_insulin_sequencing: {
                name: "Sanger's Sequencing of Insulin - Paper Chromatography of Amino Acids",
                relatedTopics: ['proteins', 'molecular_techniques'],
                category: 'protein_structure',
                historicalBackground: {
                    scientist: "Frederick Sanger",
                    year: "1951-1955",
                    achievement: "First complete amino acid sequence of a protein (insulin)",
                    nobelPrize: "1958 Nobel Prize in Chemistry (his first of two)",
                    significance: "Proved proteins have definite, reproducible sequences; opened era of protein chemistry",
                    method: {
                        strategy: "Break insulin into smaller peptides using different enzymes/chemicals",
                        hydrolysis: [
                            "Acid hydrolysis breaks all peptide bonds → individual amino acids",
                            "Partial acid hydrolysis → mix of shorter peptides",
                            "Enzyme digestion (trypsin, chymotrypsin) → specific cuts"
                        ],
                        identification: "Used paper chromatography and electrophoresis to separate and identify amino acids",
                        sequencing: [
                            "Sanger's reagent (FDNB - fluorodinitrobenzene) labels N-terminal amino acid",
                            "Hydrolyze labeled peptide, identify labeled amino acid (it was N-terminal)",
                            "Repeat process on overlapping peptides",
                            "Piece together like a puzzle"
                        ],
                        result: "Insulin has two polypeptide chains (A-chain 21 aa, B-chain 30 aa) linked by disulfide bonds",
                        insight: "Proved primary structure is genetically determined and precise"
                    },
                    quote: "The amino acid sequence of insulin is not a random affair but a specific sequence"
                },
                labExperiment: {
                    title: "Paper Chromatography of Amino Acids",
                    hypothesis: "Different amino acids have different polarities and can be separated by paper chromatography based on their differential migration in a solvent",
                    purpose: "Separate and identify amino acids using paper chromatography, understanding the principle Sanger used",
                    variables: {
                        independent: "Type of amino acids in mixture",
                        dependent: "Rf value (distance traveled) of each amino acid",
                        controlled: ["Solvent composition", "Paper type", "Temperature", "Humidity", "Development time"]
                    },
                    materials: [
                        "Chromatography paper (Whatman No. 1 or similar)",
                        "Amino acid solutions (0.1% each): glycine, alanine, leucine, aspartic acid, lysine",
                        "Unknown mixture of amino acids",
                        "Solvent (mobile phase): butanol:acetic acid:water (4:1:1) or similar",
                        "Ninhydrin spray (0.2% in acetone) or dipping solution",
                        "Chromatography tank or large beaker with lid",
                        "Micropipette or capillary tubes for spotting",
                        "Pencil and ruler",
                        "Drying oven or hair dryer",
                        "Forceps",
                        "Gloves and safety goggles"
                    ],
                    safetyPrecautions: [
                        "Perform in well-ventilated area (fume hood if available)",
                        "Butanol and acetic acid are flammable and corrosive",
                        "Ninhydrin is toxic - avoid skin contact, wear gloves",
                        "No flames near solvents",
                        "Oven used for drying should be well-ventilated"
                    ],
                    procedure: [
                        "SETUP:",
                        "Cut chromatography paper to appropriate size (e.g., 20 cm × 15 cm)",
                        "Using PENCIL (not pen), draw a faint baseline 2 cm from bottom edge",
                        "Mark spots along baseline with pencil, evenly spaced (1-2 cm apart)",
                        "Label each spot position lightly in pencil",
                        "",
                        "SPOTTING SAMPLES:",
                        "Using capillary tube or micropipette, apply tiny spot of each amino acid solution to marked positions",
                        "Spot should be small (<5 mm diameter) - important for clear separation",
                        "Allow spot to dry completely (use hair dryer on cool setting)",
                        "Repeat spotting 2-3 times on same spot to concentrate amino acids (dry between applications)",
                        "Apply known amino acids and unknown mixture on same paper",
                        "",
                        "PREPARING SOLVENT TANK:",
                        "Pour solvent into chromatography tank to depth of ~1 cm",
                        "Cover tank and allow to equilibrate (saturate atmosphere) for 10-15 minutes",
                        "Solvent level must be BELOW baseline on paper when paper is inserted",
                        "",
                        "RUNNING CHROMATOGRAM:",
                        "Carefully place spotted paper in tank, ensuring bottom edge touches solvent",
                        "Paper should not touch sides of tank",
                        "Cover tank immediately to maintain saturated atmosphere",
                        "Allow solvent to rise up paper by capillary action until ~2 cm from top (typically 1-2 hours)",
                        "Do NOT move or disturb tank during development",
                        "",
                        "STOPPING AND DRYING:",
                        "When solvent front reaches near top, remove paper with forceps",
                        "Immediately mark the solvent front with pencil",
                        "Hang paper in fume hood to dry completely (~15-30 minutes)",
                        "Alternatively, dry in well-ventilated oven at low temperature (<80°C)",
                        "",
                        "VISUALIZATION:",
                        "Once dry, spray paper evenly with ninhydrin solution (or dip in ninhydrin)",
                        "Heat in oven at 100-110°C for 5-10 minutes",
                        "Amino acid spots will appear as purple/pink colors",
                        "Allow to cool",
                        "",
                        "MEASUREMENT AND CALCULATION:",
                        "Measure distance from baseline to center of each spot (d_spot)",
                        "Measure distance from baseline to solvent front (d_solvent)",
                        "Calculate Rf for each amino acid: Rf = d_spot / d_solvent",
                        "Identify unknown amino acids by comparing Rf values to known standards"
                    ],
                    ninhydrinReaction: {
                        principle: "Ninhydrin reacts with amino acids to form purple complex (Ruhemann's purple)",
                        reaction: "Ninhydrin + amino acid + heat → purple color (Ruhemann's purple)",
                        note: "Proline gives yellow color instead of purple",
                        sensitivity: "Can detect as little as 1-5 µg of amino acid"
                    },
                    expectedRfValues: {
                        note: "Rf values depend on solvent system; these are approximate for butanol:acetic acid:water (4:1:1)",
                        glycine: "~0.26 (most polar, travels least)",
                        alanine: "~0.38",
                        valine: "~0.60",
                        leucine: "~0.73",
                        phenylalanine: "~0.68",
                        asparticAcid: "~0.24 (polar, acidic)",
                        lysine: "~0.14 (polar, basic, travels least)",
                        general: "Nonpolar amino acids travel farther; polar amino acids stay closer to baseline"
                    },
                    observations: [
                        "Each known amino acid produces a spot at characteristic Rf value",
                        "More polar (hydrophilic) amino acids have lower Rf values",
                        "Less polar (hydrophobic) amino acids have higher Rf values",
                        "Unknown mixture can be analyzed by matching Rf values",
                        "Well-separated spots indicate good chromatographic conditions",
                        "Overlapping spots indicate need for different solvent system"
                    ],
                    results: "Amino acids separate based on polarity. Nonpolar amino acids (leucine, phenylalanine) travel farther up paper; polar amino acids (glycine, aspartic acid, lysine) remain closer to baseline. Unknown mixture can be identified by comparing Rf values.",
                    dataTable: [
                        ["Amino Acid", "Polarity", "Distance Moved (cm)", "Solvent Front (cm)", "Rf Value"],
                        ["Glycine", "Polar", "2.6", "10.0", "0.26"],
                        ["Alanine", "Nonpolar", "3.8", "10.0", "0.38"],
                        ["Leucine", "Nonpolar", "7.3", "10.0", "0.73"],
                        ["Aspartic acid", "Polar (acidic)", "2.4", "10.0", "0.24"],
                        ["Lysine", "Polar (basic)", "1.4", "10.0", "0.14"]
                    ],
                    analysis: {
                        RfInterpretation: [
                            "Rf is constant for a given amino acid in a specific solvent system",
                            "Rf depends on amino acid polarity and solvent polarity",
                            "Polar amino acids interact strongly with polar paper (cellulose) → low Rf",
                            "Nonpolar amino acids prefer mobile phase → high Rf"
                        ],
                        factorsAffectingRf: [
                            "Solvent composition (different solvents give different Rf)",
                            "Temperature (affects solvent properties)",
                            "Paper quality and type",
                            "pH of solvent",
                            "Saturation of tank atmosphere"
                        ],
                        limitations: [
                            "Cannot separate amino acids with very similar Rf values",
                            "Quantification difficult (only semi-quantitative by spot intensity)",
                            "Affected by environmental conditions",
                            "Time-consuming compared to modern methods"
                        ]
                    },
                    connectionToSanger: {
                        technique: "Sanger used paper chromatography extensively to separate peptides and amino acids",
                        combination: "Combined chromatography with chemical labeling (FDNB) to sequence peptides",
                        modernEquivalent: "Today: automated Edman degradation, mass spectrometry sequencing",
                        importance: "Demonstrated that proteins have precise, reproducible sequences encoded by genes"
                    },
                    modernTechniques: [
                        "Thin Layer Chromatography (TLC) - faster, better resolution",
                        "High Performance Liquid Chromatography (HPLC) - automated, quantitative",
                        "Mass Spectrometry - can sequence entire proteins",
                        "Automated Edman Degradation - sequential N-terminal amino acid removal",
                        "DNA sequencing - infer protein sequence from gene sequence"
                    ],
                    realWorldApplications: [
                        "Quality control in pharmaceutical industry",
                        "Food analysis (detecting amino acid adulteration)",
                        "Medical diagnostics (aminoacidopathies like phenylketonuria)",
                        "Forensic science",
                        "Research in protein chemistry"
                    ],
                    extensions: [
                        "Try different solvent systems and compare Rf values",
                        "Perform 2D chromatography (run in two perpendicular directions with different solvents)",
                        "Investigate how pH affects amino acid separation",
                        "Quantify amino acids by measuring spot intensity or area"
                    ]
                }
            },

            // ========================================
            // LIPID EXPERIMENTS
            // ========================================
            
            chevreuls_fatty_acids: {
                name: "Chevreul's Study of Fatty Acids - Saponification (Soap Making)",
                relatedTopics: ['lipids'],
                category: 'lipid_chemistry',
                historicalBackground: {
                    scientist: "Michel Eugène Chevreul",
                    year: "1813-1823",
                    achievement: "Discovered that fats are esters of glycerol and fatty acids; pioneered analysis of lipids",
                    contribution: [
                        "Showed fats are not simple substances but composed of glycerol + fatty acids",
                        "Isolated and characterized many fatty acids (stearic, oleic, butyric, etc.)",
                        "Explained saponification chemistry (fat + base → soap + glycerol)",
                        "Distinguished between saturated and unsaturated fats"
                    ],
                    context: "Before Chevreul, soap making was empirical. He provided chemical understanding, founding lipid chemistry",
                    significance: "Established that biological molecules have defined structures, laid groundwork for organic chemistry",
                    quote: "Animal fats are composed of three acids united with glycerine"
                },
                labExperiment: {
                    title: "Saponification: Making Soap from Lipids",
                    hypothesis: "If fats are esters of glycerol and fatty acids, then treating fats with strong base will hydrolyze the ester bonds, producing soap (fatty acid salts) and glycerol",
                    purpose: "Demonstrate saponification reaction and produce soap, understanding lipid chemistry",
                    chemicalReaction: {
                        general: "Triglyceride + 3 NaOH → Glycerol + 3 Soap (sodium fatty acid salt)",
                        detailed: "R-COO-CH₂ (fat ester bonds) + NaOH → R-COO⁻ Na⁺ (soap) + CH₂OH (glycerol)",
                        explanation: "Base-catalyzed hydrolysis of ester bonds in triglycerides"
                    },
                    variables: {
                        independent: "Type of fat/oil used (animal fat vs vegetable oil)",
                        dependent: "Properties of soap produced (hardness, lathering)",
                        controlled: ["NaOH concentration", "Temperature", "Reaction time", "Stirring rate"]
                    },
                    materials: [
                        "Vegetable oil or animal fat (lard, coconut oil, olive oil) - 25 ml",
                        "Sodium hydroxide (NaOH) pellets - 5 g",
                        "Distilled water - 10 ml",
                        "Ethanol (95%) - 15 ml (optional, helps dissolve fat)",
                        "Saturated salt solution (NaCl)",
                        "250 ml beaker",
                        "Glass stirring rod",
                        "Hot plate or Bunsen burner",
                        "Thermometer",
                        "pH paper",
                        "Cheesecloth or filter paper",
                        "Molds for soap (small cups, ice cube tray)",
                        "Safety goggles, gloves, lab coat"
                    ],
                    safetyPrecautions: [
                        "CRITICAL: Sodium hydroxide is highly caustic - causes severe burns",
                        "Wear safety goggles, gloves, and lab coat at all times",
                        "Work in well-ventilated area",
                        "Add NaOH to water, NEVER water to NaOH (exothermic!)",
                        "If NaOH contacts skin, rinse immediately with copious water for 15 minutes",
                        "Do not touch soap mixture until neutralized",
                        "Keep ethanol away from flames",
                        "Have vinegar or dilute acid available to neutralize spills"
                    ],
                    procedure: [
                        "PREPARATION OF NaOH SOLUTION:",
                        "Wearing full PPE, carefully add 5 g NaOH pellets to 10 ml distilled water in beaker",
                        "Stir gently until dissolved (solution will get HOT - exothermic)",
                        "Allow to cool slightly",
                        "",
                        "SAPONIFICATION REACTION:",
                        "Add 25 ml of oil or melted fat to the NaOH solution",
                        "Optional: Add 15 ml ethanol to help dissolve fat (improves mixing)",
                        "Place beaker on hot plate, heat gently to 70-80°C",
                        "Stir continuously with glass rod for 30-45 minutes",
                        "Mixture should become thick and opaque (saponification occurring)",
                        "Monitor temperature - don't overheat or boil vigorously",
                        "",
                        "SALTING OUT (OPTIONAL):",
                        "Once mixture is thick and homogeneous, add saturated salt solution (20-30 ml)",
                        "Stir well",
                        "Soap will separate and float (less soluble in salt water)",
                        "Allow to cool and solidify",
                        "",
                        "SEPARATION AND MOLDING:",
                        "Skim soap layer from top (if salted out) or pour entire mixture into mold",
                        "If using mold, line with wax paper or plastic wrap",
                        "Allow soap to harden for 24-48 hours",
                        "",
                        "CURING (OPTIONAL FOR USE):",
                        "Remove hardened soap from mold",
                        "Test pH with pH paper - should be around 9-10 (safe for skin)",
                        "If too alkaline (pH >11), allow to cure for several more weeks",
                        "Curing allows excess NaOH to react with atmospheric CO₂",
                        "",
                        "TESTING SOAP PROPERTIES:",
                        "Test small piece in water - should lather and emulsify oils",
                        "Compare soaps made from different fats (hardness, lather, feel)"
                    ],
                    observations: {
                        duringReaction: [
                            "Mixture becomes warm (exothermic reaction)",
                            "Initially two layers (oil and water separate)",
                            "With stirring and heating, becomes uniform emulsion",
                            "Gradually thickens as saponification proceeds",
                            "Changes from clear/translucent to opaque white/cream color",
                            "May trace patterns in thickened mixture (sign of saponification)"
                        ],
                        afterReaction: [
                            "Solidifies upon cooling",
                            "Texture depends on fat type: coconut oil → hard soap; olive oil → softer soap",
                            "Sweet smell of glycerol may be detectable",
                            "Soap lathers in water and emulsifies oils"
                        ]
                    },
                    chemistryExplanation: {
                        saponification: "Alkaline hydrolysis breaks ester bonds in triglycerides",
                        products: {
                            soap: "Sodium salts of fatty acids (amphipathic molecules)",
                            glycerol: "Three-carbon alcohol (sweet, water-soluble)"
                        },
                        soapStructure: {
                            head: "Carboxylate group (COO⁻) - hydrophilic (water-loving)",
                            tail: "Long hydrocarbon chain - hydrophobic (water-fearing)",
                            amphipathic: "Dual nature allows soap to emulsify oils in water"
                        },
                        cleaningAction: {
                            mechanism: [
                                "Soap molecules orient at oil-water interface",
                                "Hydrophobic tails dissolve in oil/grease",
                                "Hydrophilic heads face water",
                                "Form micelles (spheres) around oil droplets",
                                "Micelles suspend in water and rinse away"
                            ]
                        }
                    },
                    fatComparison: {
                        coconutOil: {
                            fattyAcids: "High in saturated fatty acids (lauric, myristic)",
                            soap: "Hard, cleansing, lots of lather",
                            meltingPoint: "High"
                        },
                        oliveOil: {
                            fattyAcids: "High in monounsaturated (oleic acid)",
                            soap: "Softer, moisturizing, less lather",
                            meltingPoint: "Lower"
                        },
                        animalFat: {
                            fattyAcids: "Mix of saturated (stearic, palmitic)",
                            soap: "Hard, similar to coconut",
                            meltingPoint: "High",
                            note: "Traditional soap base"
                        }
                    },
                    results: "Soap is successfully produced from fats/oils, demonstrating that fats are esters that can be hydrolyzed. Different fats produce soaps with different properties, reflecting differences in fatty acid composition.",
                    dataTable: [
                        ["Fat/Oil Type", "Fatty Acid Type", "Soap Hardness", "Lathering", "Feel"],
                        ["Coconut oil", "Saturated (short)", "Hard", "Excellent", "Cleansing"],
                        ["Olive oil", "Monounsaturated", "Soft", "Poor", "Moisturizing"],
                        ["Lard (animal)", "Saturated (long)", "Hard", "Good", "Neutral"],
                        ["Mix (50:50)", "Mixed", "Medium", "Good", "Balanced"]
                    ],
                    analysis: {
                        saturatedVsUnsaturated: [
                            "Saturated fats (no double bonds) pack tightly → harder soap",
                            "Unsaturated fats (double bonds create kinks) pack loosely → softer soap",
                            "Chain length matters: shorter chains → more soluble, better lather"
                        ],
                        industrialSoapMaking: [
                            "Modern soaps are mixtures of different fats for balanced properties",
                            "May add glycerol back to increase moisture",
                            "Fragrances, colors, and other additives included",
                            "Some use synthetic detergents instead of true soap"
                        ]
                    },
                    connectionToChevreul: {
                        discovery: "Chevreul showed that different fats yield different fatty acids upon saponification",
                        method: "He isolated and crystallized individual fatty acids, determining their properties",
                        impact: "Proved fats have specific, definable chemical structures",
                        legacy: "Founded the field of lipid chemistry"
                    },
                    realWorldApplications: [
                        "Commercial soap and detergent manufacture",
                        "Understanding cleaning and emulsification",
                        "Biodiesel production (similar transesterification reaction)",
                        "Food industry (emulsifiers in processed foods)",
                        "Cosmetics and personal care products"
                    ],
                    extensions: [
                        "Test different oil combinations for optimal soap properties",
                        "Extract glycerol from soap mixture and test its properties",
                        "Compare soap effectiveness in hard vs soft water",
                        "Investigate pH and its effect on skin",
                        "Research modern synthetic detergents vs traditional soap"
                    ],
                    troubleshooting: [
                        "Soap too soft: Not enough NaOH, or used very unsaturated oil",
                        "Soap won't harden: Reaction incomplete, heat longer or add more NaOH",
                        "Soap too harsh: Excess NaOH, allow longer curing time",
                        "Mixture separated: Insufficient stirring or temperature too low"
                    ]
                }
            },

            // ========================================
            // ENZYME EXPERIMENTS
            // ========================================
            
            fischer_lock_and_key: {
                name: "Fischer's Lock and Key Hypothesis - Enzyme Specificity Lab",
                relatedTopics: ['enzymes', 'proteins', 'carbohydrates'],
                category: 'enzyme_kinetics',
                historicalBackground: {
                    scientist: "Emil Fischer",
                    year: "1894",
                    hypothesis: "Lock and Key model of enzyme specificity",
                    proposal: "Enzyme (lock) has rigid active site that perfectly fits specific substrate (key)",
                    context: "Fischer studied enzyme-catalyzed sugar fermentation and observed strict substrate specificity",
                    significance: "First molecular explanation for enzyme specificity; foundation for understanding catalysis",
                    quote: "To use a picture, I would say that enzyme and glucoside must fit together like a lock and key",
                    nobelPrize: "1902 Nobel Prize in Chemistry (for work on sugars and purines)",
                    modernUpdate: "Induced Fit model (Koshland, 1958) refined this - active site changes shape upon binding"
                },
                labExperiment: {
                    title: "Enzyme Specificity: Salivary Amylase on Different Substrates",
                    hypothesis: "If enzymes have specific active sites shaped for particular substrates (lock and key), then salivary amylase will only digest starch and not other polysaccharides like cellulose",
                    purpose: "Demonstrate enzyme-substrate specificity using amylase and different carbohydrates",
                    background: {
                        amylase: "Enzyme that breaks down starch (α-1,4 glycosidic bonds)",
                        starch: "Polymer of glucose with α-1,4 and α-1,6 glycosidic bonds",
                        cellulose: "Polymer of glucose with β-1,4 glycosidic bonds",
                        difference: "Starch and cellulose are both glucose polymers but have different bond types and 3D structures",
                        prediction: "Amylase active site fits starch structure but NOT cellulose structure"
                    },
                    variables: {
                        independent: "Type of substrate (starch, cellulose, glucose)",
                        dependent: "Presence of reducing sugars (product formation)",
                        controlled: ["Enzyme concentration", "Substrate concentration", "Temperature", "pH", "Time"]
                    },
                    materials: [
                        "Saliva (source of amylase) or commercial amylase solution",
                        "Starch solution (1%)",
                        "Cellulose powder or filter paper",
                        "Glucose solution (positive control)",
                        "Distilled water (negative control)",
                        "Benedict's reagent",
                        "Iodine solution",
                        "Test tubes (15-20)",
                        "Test tube rack",
                        "Water bath (37°C)",
                        "Boiling water bath",
                        "Droppers or pipettes",
                        "Stopwatch or timer",
                        "pH paper",
                        "White tile for color observation"
                    ],
                    safetyPrecautions: [
                        "Use own saliva only (avoid cross-contamination)",
                        "Rinse mouth with water before collecting saliva",
                        "Handle Benedict's reagent carefully (contains copper sulfate)",
                        "Use test tube holder when heating",
                        "Wear safety goggles",
                        "Dispose of saliva-containing tubes properly"
                    ],
                    procedure: [
                        "PREPARATION OF ENZYME (SALIVA COLLECTION):",
                        "Rinse mouth thoroughly with water",
                        "Collect ~10 ml saliva in clean beaker (chew paraffin wax if needed to stimulate)",
                        "Dilute saliva 1:10 with distilled water (1 ml saliva + 9 ml water)",
                        "Keep at room temperature or 37°C until use",
                        "Alternative: Use commercial amylase solution per instructions",
                        "",
                        "SUBSTRATE PREPARATION:",
                        "Prepare 1% starch solution by mixing starch powder with warm water",
                        "If using cellulose: soak filter paper pieces in water or make cellulose suspension",
                        "Prepare glucose solution (1%) as positive control",
                        "",
                        "EXPERIMENTAL SETUP - Part 1: Substrate Specificity:",
                        "Label 6 test tubes: Starch, Starch+Amylase, Cellulose, Cellulose+Amylase, Glucose, Water",
                        "Add to each tube:",
                        "  Starch: 2 ml starch solution only",
                        "  Starch+Amylase: 2 ml starch solution + 2 ml diluted saliva",
                        "  Cellulose: 2 ml cellulose suspension only",
                        "  Cellulose+Amylase: 2 ml cellulose + 2 ml diluted saliva",
                        "  Glucose: 2 ml glucose solution (positive control)",
                        "  Water: 2 ml water (negative control)",
                        "",
                        "INCUBATION:",
                        "Place all tubes in 37°C water bath for 10 minutes",
                        "Swirl gently every 2-3 minutes to mix",
                        "",
                        "TEST 1 - IODINE TEST (for remaining starch):",
                        "After 10 min, remove 1 ml from each tube into new tubes",
                        "Add 2 drops of iodine solution to each",
                        "Observe color:",
                        "  Blue-black = starch still present (no digestion)",
                        "  Brown/orange = no starch (digestion occurred)",
                        "Record results",
                        "",
                        "TEST 2 - BENEDICT'S TEST (for reducing sugars/products):",
                        "To original tubes (or take another 2 ml sample), add 2 ml Benedict's reagent",
                        "Place in boiling water bath for 3-5 minutes",
                        "Observe color change:",
                        "  Blue = no reducing sugar (negative)",
                        "  Green/yellow/orange/red = reducing sugar present (positive)",
                        "Record results",
                        "",
                        "ADDITIONAL EXPERIMENTS (Optional):",
                        "Time course: Test at 0, 2, 5, 10, 15 min to see progression",
                        "Temperature effect: Compare 0°C, 37°C, 60°C, 100°C",
                        "pH effect: Add acid or base to change pH, compare activity",
                        "Enzyme concentration: Use different dilutions of saliva"
                    ],
                    expectedResults: {
                        iodineTest: {
                            starchOnly: "Blue-black (starch present)",
                            starchPlusAmylase: "Brown/orange (starch digested)",
                            celluloseOnly: "Brown/orange (no starch initially)",
                            cellulosePlusAmylase: "Brown/orange (cellulose not digested)",
                            glucose: "Brown/orange (no starch)",
                            water: "Brown/orange (no starch)"
                        },
                        benedictsTest: {
                            starchOnly: "Blue (no reducing sugars - starch non-reducing)",
                            starchPlusAmylase: "Orange/red (maltose/glucose produced)",
                            celluloseOnly: "Blue (no reducing sugars)",
                            cellulosePlusAmylase: "Blue (cellulose not broken down)",
                            glucose: "Orange/red (glucose is reducing sugar - positive control)",
                            water: "Blue (negative control)"
                        }
                    },
                    dataTable: [
                        ["Tube", "Substrate", "Enzyme", "Iodine Test", "Benedict's Test", "Interpretation"],
                        ["1", "Starch", "No", "Blue-black", "Blue", "Starch present, no digestion"],
                        ["2", "Starch", "Yes", "Brown", "Orange/Red", "Starch digested to sugars"],
                        ["3", "Cellulose", "No", "Brown", "Blue", "No starch, no sugars"],
                        ["4", "Cellulose", "Yes", "Brown", "Blue", "Cellulose NOT digested"],
                        ["5", "Glucose", "No", "Brown", "Orange/Red", "Positive control"],
                        ["6", "Water", "No", "Brown", "Blue", "Negative control"]
                    ],
                    observations: [
                        "Amylase digests starch (iodine test negative, Benedict's positive)",
                        "Amylase does NOT digest cellulose (no change from control)",
                        "Both starch and cellulose are glucose polymers, yet only starch is digested",
                        "This demonstrates enzyme specificity for substrate structure"
                    ],
                    analysis: {
                        whySpecificity: [
                            "Active site of amylase is shaped to fit α-1,4 glycosidic bonds in starch",
                            "Cellulose has β-1,4 bonds with different 3D structure",
                            "Active site does NOT fit cellulose structure",
                            "Like a lock that only fits one specific key"
                        ],
                        molecularBasis: [
                            "Amino acids in active site positioned to catalyze specific reaction",
                            "Substrate must fit precisely for catalysis to occur",
                            "Even small structural differences prevent binding and catalysis"
                        ],
                        lockAndKeyVsInducedFit: {
                            lockAndKey: "Rigid active site, substrate fits exactly (Fischer's original idea)",
                            inducedFit: "Active site changes shape slightly upon substrate binding (modern view)",
                            both: "Both models emphasize specificity - only correct substrate binds and is catalyzed"
                        }
                    },
                    results: "Amylase specifically digests starch but not cellulose, despite both being glucose polymers. This demonstrates enzyme-substrate specificity explained by the lock and key model - enzyme active site is complementary to starch structure but not cellulose structure.",
                    conclusions: [
                        "Enzymes are highly specific for their substrates",
                        "Specificity depends on 3D structure complementarity (shape)",
                        "Small structural differences (α vs β bonds) prevent enzyme-substrate interaction",
                        "Lock and key model explains enzyme specificity at molecular level",
                        "This explains why humans cannot digest cellulose (lack cellulase enzyme)"
                    ],
                    realWorldRelevance: {
                        humanDigestion: "Humans have amylase but not cellulase - can digest starch but not cellulose (dietary fiber)",
                        ruminants: "Cows/sheep have bacteria with cellulase in gut - can digest cellulose (grass)",
                        termites: "Have protozoa with cellulase - can digest wood",
                        lactoseIntolerance: "Lack of lactase enzyme → cannot digest lactose (similar specificity issue)",
                        drugDesign: "Understanding enzyme active sites allows design of specific inhibitors (drugs)"
                    },
                    extensions: [
                        "Test different enzymes with their specific substrates (lactase/lactose, protease/protein)",
                        "Investigate effect of temperature on reaction rate (enzyme denaturation)",
                        "Study effect of pH on amylase activity (optimal pH for salivary vs pancreatic amylase)",
                        "Quantify reaction rate by measuring product formation over time",
                        "Research how enzyme inhibitors work (competitive vs non-competitive)"
                    ],
                    modernConnections: [
                        "Drug development based on enzyme active site structure",
                        "Understanding metabolic diseases caused by enzyme deficiencies",
                        "Industrial enzyme applications (detergents, food processing)",
                        "Enzyme engineering for new catalytic activities"
                    ]
                }
            },

            // ========================================
            // CARBOHYDRATE STRUCTURE EXPERIMENTS
            // ========================================
            
            haworth_sugar_structures: {
                name: "Haworth's Sugar Structures - Polarimetry of Glucose",
                relatedTopics: ['carbohydrates', 'molecular_techniques'],
                category: 'molecular_structure',
                historicalBackground: {
                    scientist: "Walter Norman Haworth",
                    year: "1926-1929",
                    achievement: "Determined cyclic structure of sugars (pyranose and furanose rings)",
                    contribution: [
                        "Showed sugars exist as rings, not just linear chains",
                        "Developed Haworth projection formulas",
                        "Explained mutarotation phenomenon",
                        "Determined structure of vitamin C"
                    ],
                    nobelPrize: "1937 Nobel Prize in Chemistry",
                    context: "Before Haworth, sugars were thought to exist only in linear form. He proved cyclic forms dominate in solution",
                    significance: "Explained optical rotation changes (mutarotation) and reactivity of sugars",
                    mutarotation: "Spontaneous change in optical rotation of sugar solutions over time due to equilibrium between α and β anomers"
                },
                labExperiment: {
                    title: "Polarimetry: Measuring Optical Rotation and Mutarotation of Glucose",
                    hypothesis: "If glucose exists in equilibrium between linear, α-cyclic, and β-cyclic forms, then freshly dissolved glucose will show changing optical rotation over time (mutarotation) as equilibrium is established",
                    purpose: "Measure optical rotation of sugars using polarimeter and observe mutarotation",
                    background: {
                        opticalActivity: "Chiral molecules rotate plane-polarized light",
                        glucose: {
                            linearForm: "Has aldehyde group, chiral centers",
                            alphaCyclic: "OH on C1 is down (Haworth projection)",
                            betaCyclic: "OH on C1 is up (Haworth projection)",
                            equilibrium: "In solution: ~36% α, ~64% β, <0.1% linear"
                        },
                        specificRotation: "[α] = observed rotation / (concentration × path length)",
                        mutarotation: {
                            definition: "Change in optical rotation as anomers interconvert",
                            alphaGlucose: "[α] = +112° (initially, pure α form)",
                            betaGlucose: "[α] = +19° (initially, pure β form)",
                            equilibriumMixture: "[α] = +52.7° (final, both forms)"
                        }
                    },
                    variables: {
                        independent: "Type of sugar (α-glucose, β-glucose, fructose, sucrose)",
                        dependent: "Optical rotation angle",
                        controlled: ["Concentration", "Temperature", "Path length", "Wavelength of light"]
                    },
                    materials: [
                        "Polarimeter",
                        "α-D-glucose (anhydrous)",
                        "β-D-glucose (if available)",
                        "Fructose",
                        "Sucrose",
                        "Distilled water",
                        "Polarimeter tubes (fixed path length, e.g., 20 cm)",
                        "Balance (accurate to 0.01 g)",
                        "Volumetric flask (100 ml)",
                        "Beakers",
                        "Stirring rod",
                        "Stopwatch",
                        "Thermometer",
                        "Filter paper (if solution cloudy)"
                    ],
                    safetyPrecautions: [
                        "Polarimeter contains light source - avoid looking directly at beam",
                        "Handle glass tubes carefully to avoid breakage",
                        "Clean polarimeter tubes thoroughly to avoid contamination",
                        "Sugars are safe but avoid contaminating pure chemicals"
                    ],
                    polarimeterOperation: [
                        "SETUP:",
                        "Allow polarimeter to warm up (5-10 minutes)",
                        "Clean polarimeter tube and fill with distilled water",
                        "Place tube in polarimeter",
                        "Zero instrument with water (0° reading)",
                        "",
                        "MEASUREMENT:",
                        "Look through eyepiece and adjust analyzer until field is uniformly dark or light",
                        "Read angle from scale (in degrees)",
                        "Repeat 3 times and average",
                        "Empty tube and refill with sample solution"
                    ],
                    procedure: [
                        "PREPARATION OF GLUCOSE SOLUTION:",
                        "Weigh exactly 10.0 g of α-D-glucose",
                        "Place in 100 ml volumetric flask",
                        "Add ~50 ml distilled water",
                        "Swirl/stir to dissolve QUICKLY and completely",
                        "Immediately fill to 100 ml mark with water",
                        "Note exact time when glucose dissolves (t=0)",
                        "Mix thoroughly",
                        "",
                        "IMMEDIATE MEASUREMENT (t=0):",
                        "Quickly fill polarimeter tube with glucose solution (avoid air bubbles)",
                        "Place in polarimeter",
                        "Record optical rotation and time (within 1-2 minutes of dissolution)",
                        "This is initial rotation of predominantly α-glucose",
                        "",
                        "TIME-COURSE MEASUREMENTS (Mutarotation):",
                        "Continue measuring optical rotation at intervals:",
                        "  t = 0, 5, 10, 15, 20, 30, 45, 60, 90, 120 minutes",
                        "Record each reading and time",
                        "Keep solution at constant temperature (room temp or 25°C)",
                        "Plot rotation vs time to observe mutarotation",
                        "",
                        "EQUILIBRIUM MEASUREMENT:",
                        "After ~2 hours (or next day), measure final equilibrium rotation",
                        "This represents equilibrium mixture of α and β glucose",
                        "",
                        "COMPARISON WITH OTHER SUGARS:",
                        "Prepare 10% solutions of:",
                        "  Fructose",
                        "  Sucrose",
                        "Measure optical rotation of each",
                        "Compare rotation direction and magnitude"
                    ],
                    expectedResults: {
                        alphaGlucoseMutarotation: {
                            t0: "+110° to +112° (pure α form)",
                            t120min: "+52° to +53° (equilibrium)",
                            curve: "Exponential decay from +112° to +52.7°",
                            explanation: "α-glucose converts to equilibrium mixture with β-glucose"
                        },
                        betaGlucose: {
                            t0: "+19° (pure β form)",
                            tEquilibrium: "+52.7° (same equilibrium)",
                            curve: "Increase from +19° to +52.7°"
                        },
                        otherSugars: {
                            fructose: "−92° (levorotatory)",
                            sucrose: "+66° (dextrorotatory)",
                            lactose: "+55° (dextrorotatory)",
                            maltose: "+138° (highly dextrorotatory)"
                        }
                    },
                    dataTable: [
                        ["Time (min)", "Optical Rotation (degrees)", "% α-anomer", "% β-anomer"],
                        ["0", "+112", "~100", "~0"],
                        ["5", "+95", "~75", "~25"],
                        ["10", "+82", "~60", "~40"],
                        ["20", "+70", "~50", "~50"],
                        ["30", "+63", "~42", "~58"],
                        ["60", "+56", "~38", "~62"],
                        ["120", "+53", "~36", "~64"],
                        ["Equilibrium", "+52.7", "36", "64"]
                    ],
                    calculations: {
                        specificRotation: "[α]²⁰_D = α / (l × c)",
                        where: {
                            alpha: "observed rotation in degrees",
                            l: "path length in decimeters (dm)",
                            c: "concentration in g/ml"
                        },
                        example: {
                            observed: "+5.27° for 10% glucose in 20 cm tube",
                            calculation: "[α] = 5.27 / (2 dm × 0.1 g/ml) = +26.35° (per dm and g/ml)",
                            corrected: "[α] = +52.7° (standard concentration 1 g/ml, 1 dm)"
                        }
                    },
                    observations: [
                        "Freshly dissolved α-glucose shows high positive rotation (+112°)",
                        "Rotation decreases over time, approaching +52.7°",
                        "Rate of change is initially rapid, then slows",
                        "Equilibrium reached after ~2 hours at room temperature",
                        "Different sugars show different rotation directions and magnitudes",
                        "Fructose is levorotatory (negative rotation)"
                    ],
                    analysis: {
                        mutarotationMechanism: [
                            "In solution, cyclic glucose opens to linear form (very briefly)",
                            "Linear form can re-close to either α or β anomer",
                            "Process continues until equilibrium is reached",
                            "Equilibrium favors β-glucose (~64%) over α (~36%)",
                            "β-glucose is thermodynamically more stable (less steric hindrance)"
                        ],
                        factorsAffewctingRate: [
                            "Temperature: higher temperature → faster mutarotation",
                            "pH: acids and bases catalyze mutarotation (speed it up)",
                            "Solvent: mutarotation faster in water than other solvents"
                        ],
                        opticalActivityBasis: [
                            "Chiral centers (asymmetric carbons) rotate polarized light",
                            "D-sugars typically dextrorotatory (+), but not always",
                            "L-sugars typically levorotatory (−), but not always",
                            "Direction and magnitude depend on overall molecular shape"
                        ]
                    },
                    connectionToHaworth: {
                        significance: "Haworth's cyclic structures explained why rotation changes over time",
                        discovery: "Realized sugars exist as pyranose (6-membered) and furanose (5-membered) rings",
                        anomers: "α and β forms differ only in OH position at C1 (anomeric carbon)",
                        projection: "Haworth projection shows ring as flat hexagon with groups above/below plane",
                        impact: "Understanding cyclic structures crucial for polysaccharide structure (starch, cellulose)"
                    },
                    realWorldApplications: [
                        "Quality control in sugar industry",
                        "Pharmaceutical analysis (drug purity)",
                        "Food industry (honey authenticity, sugar content)",
                        "Clinical chemistry (glucose measurement in blood)",
                        "Understanding enzymatic reactions with sugars"
                    ],
                    modernTechniques: [
                        "NMR spectroscopy can directly show α and β anomers",
                        "HPLC can separate and quantify anomers",
                        "X-ray crystallography reveals 3D structure",
                        "Computational chemistry predicts equilibrium ratios"
                    ],
                    extensions: [
                        "Measure mutarotation rate at different temperatures (Arrhenius plot)",
                        "Study effect of pH on mutarotation rate (acid/base catalysis)",
                        "Compare mutarotation of different monosaccharides",
                        "Investigate why sucrose does not show mutarotation (no free anomeric carbon)",
                        "Model mutarotation kinetics with first-order rate equation"
                    ],
                    troubleshooting: [
                        "Readings drift: Temperature not stable, allow equilibration",
                        "Cannot see field: Adjust analyzer or light intensity",
                        "Inconsistent readings: Air bubbles in tube, clean and refill",
                        "No mutarotation observed: Equilibrium already reached before first measurement (work faster!)"
                    ]
                }
            },


             hooke_cell_discovery: {
                name: "Robert Hooke's Cork Cells - Discovery of the Cell",
                relatedTopics: ['cell_types', 'cell_theory'],
                category: 'microscopy_histology',
                historicalBackground: {
                    scientist: "Robert Hooke",
                    year: "1665",
                    publication: "Micrographia",
                    discovery: "First person to observe and name 'cells' while examining thin slices of cork under early compound microscope",
                    observation: "Observed box-like structures in cork, reminded him of small rooms (cells) in monastery",
                    significance: "Coined the term 'cell' and demonstrated power of microscopy for biological discovery",
                    context: "Early microscopes just invented; Hooke made detailed drawings of what he saw",
                    actualObservation: "Hooke saw dead cell walls (empty boxes), not living cells",
                    quote: "I could exceedingly plainly perceive it to be all perforated and porous, much like a Honey-comb... these pores, or cells, were not very deep",
                    impact: "Sparked interest in microscopic examination of biological specimens, laid groundwork for cell theory (1838-1839)"
                },
                labExperiment: {
                    title: "Observing Plant and Animal Cells Under the Microscope",
                    hypothesis: "Different cell types (plant vs animal, prokaryotic vs eukaryotic) will show distinct structural features when observed under a microscope",
                    purpose: "Compare and contrast prokaryotic and eukaryotic cells, and plant and animal cells using light microscopy and staining techniques",
                    background: {
                        cellTheory: "All living things are made of cells; cells are the basic unit of life; all cells come from pre-existing cells",
                        microscope: "Light microscope magnifies specimens using visible light and lenses",
                        staining: "Dyes increase contrast, making cellular structures visible",
                        resolution: "Light microscope resolution ~0.2 μm (200 nm) - can see nucleus, cell wall, chloroplasts but not ribosomes, membranes in detail"
                    },
                    variables: {
                        independent: "Type of cell examined (onion epidermal cell, human cheek cell, bacterial cell)",
                        dependent: "Cellular structures observed (cell wall, nucleus, chloroplasts, shape, size)",
                        controlled: ["Microscope magnification", "Staining protocol", "Specimen preparation method", "Light intensity"]
                    },
                    materials: [
                        "Compound light microscope",
                        "Microscope slides and coverslips",
                        "Dropper or pipette",
                        "Forceps (tweezers)",
                        "Scalpel or razor blade",
                        "Toothpicks or cotton swabs",
                        "Distilled water",
                        "Iodine solution or Lugol's iodine (stains starch, cell structures)",
                        "Methylene blue stain (stains nuclei, bacteria)",
                        "Onion (for plant cells)",
                        "Elodea (aquatic plant, for observing chloroplasts)",
                        "Prepared slide of bacteria (E. coli or mixed bacteria)",
                        "Lens paper",
                        "Paper towels"
                    ],
                    safetyPrecautions: [
                        "Handle microscope carefully - carry with two hands",
                        "Use caution with sharp scalpel/razor blade",
                        "Iodine and methylene blue can stain skin and clothing - wear gloves",
                        "Dispose of broken glass in sharps container",
                        "Clean slides and coverslips properly",
                        "Never use coarse focus at high power (can crack slide/damage objective)"
                    ],
                    procedure: {
                        microscopeSetup: [
                            "Place microscope on flat, stable surface",
                            "Plug in light source and turn on",
                            "Rotate to lowest power objective (4× or 10×)",
                            "Adjust diaphragm for optimal light"
                        ],
                        
                        part1_OnionEpidermalCells: {
                            title: "PART 1: Observing Plant Cells (Onion Epidermis)",
                            preparation: [
                                "Peel a thin layer of onion epidermis (inner layer of onion scale leaf)",
                                "Use forceps to carefully remove a single layer (should be translucent)",
                                "Place onion piece on slide",
                                "Add 1-2 drops of iodine solution",
                                "Carefully lower coverslip at angle to avoid air bubbles",
                                "Blot excess liquid with paper towel"
                            ],
                            observation: [
                                "Place slide on microscope stage, center over light",
                                "Start with lowest power (4× or 10× objective)",
                                "Use coarse focus to bring cells into view",
                                "Center cells of interest in field of view",
                                "Switch to medium power (40× objective)",
                                "Use ONLY fine focus at higher powers",
                                "Observe and draw cells at 40× and 100× (if available)",
                                "Look for: cell wall, cell membrane (difficult to see), nucleus (dark-staining), vacuole (large, clear area), cytoplasm"
                            ],
                            expectedObservations: {
                                cellShape: "Rectangular or polygonal (due to cell wall)",
                                cellWall: "Thick boundary around each cell (rigid, made of cellulose)",
                                nucleus: "Dark-staining spherical or oval structure (iodine stains DNA)",
                                vacuole: "Large clear area taking up most of cell (central vacuole)",
                                cytoplasm: "Thin layer between vacuole and cell wall (may appear grainy)",
                                chloroplasts: "Absent (onion is underground storage organ)",
                                arrangement: "Cells in organized rows, tightly packed"
                            },
                            size: "Typical onion epidermal cell: 0.25-0.4 mm length, 0.15-0.25 mm width (250-400 μm × 150-250 μm)"
                        },
                        
                        part2_ElodeaCells: {
                            title: "PART 2: Observing Plant Cells with Chloroplasts (Elodea)",
                            preparation: [
                                "Remove single young leaf from tip of Elodea plant",
                                "Place leaf on slide with drop of water",
                                "Add coverslip",
                                "No stain needed (chloroplasts are green)"
                            ],
                            observation: [
                                "Observe at low power, then medium/high power",
                                "Look for: cell wall, nucleus, chloroplasts, vacuole",
                                "Note chloroplast movement (cytoplasmic streaming if visible)",
                                "Observe distribution of chloroplasts within cells"
                            ],
                            expectedObservations: {
                                cellShape: "Rectangular/brick-like",
                                cellWall: "Visible boundary",
                                chloroplasts: "Many green, oval organelles (20-40 per cell)",
                                chloroplastMovement: "May observe cytoplasmic streaming (chloroplasts moving in current)",
                                nucleus: "May be difficult to see (often obscured by chloroplasts)",
                                centralVacuole: "Large, clear area (pushes chloroplasts to periphery)"
                            },
                            size: "Elodea cells: ~100-200 μm length, ~50-100 μm width; chloroplasts ~5-10 μm"
                        },
                        
                        part3_HumanCheekCells: {
                            title: "PART 3: Observing Animal Cells (Human Cheek Epithelial Cells)",
                            preparation: [
                                "Gently scrape inside of cheek with toothpick or cotton swab (painless)",
                                "Smear sample on center of clean slide",
                                "Add 1 drop of methylene blue stain",
                                "Wait 2-3 minutes for stain to penetrate",
                                "Add coverslip",
                                "Blot excess stain"
                            ],
                            observation: [
                                "Observe at low power to find cells (may need to search)",
                                "Switch to medium/high power",
                                "Look for: cell membrane, nucleus, cytoplasm",
                                "Draw several cells showing variation in appearance"
                            ],
                            expectedObservations: {
                                cellShape: "Irregular, flattened, round or oval (no rigid shape)",
                                cellMembrane: "Thin boundary (flexible, no cell wall)",
                                nucleus: "Dark blue-staining, centrally located, large relative to cell",
                                cytoplasm: "Light blue, granular appearance",
                                noCellWall: "Cell membrane only (flexible boundary)",
                                noChloroplasts: "Absent (animal cells don't photosynthesize)",
                                noLargeVacuole: "Only small vesicles if any",
                                bacteria: "May observe bacteria on slide (much smaller, different shape)"
                            },
                            size: "Cheek cells: 50-60 μm diameter (smaller than onion cells)"
                        },
                        
                        part4_BacterialCells: {
                            title: "PART 4: Observing Prokaryotic Cells (Bacteria)",
                            preparation: [
                                "Use prepared bacteria slide OR",
                                "Prepare yogurt smear: dilute yogurt with water, place tiny drop on slide, smear thin, air dry, add methylene blue, wait 1 min, rinse gently, air dry, add coverslip"
                            ],
                            observation: [
                                "Start at low power, increase to highest power (100× oil immersion if available)",
                                "Bacteria are VERY small - may appear as tiny dots",
                                "Look for shapes: cocci (spheres), bacilli (rods), spirilla (spirals)",
                                "Note size compared to eukaryotic cells"
                            ],
                            expectedObservations: {
                                size: "1-5 μm (much smaller than eukaryotic cells)",
                                shape: "Cocci (round), bacilli (rods), spirilla (spiral/curved)",
                                color: "Stained (blue/purple with methylene blue)",
                                noNucleus: "No visible nucleus (nucleoid not visible at this resolution)",
                                noOrganelles: "No visible internal structures",
                                arrangement: "Single cells, pairs (diplo-), chains (strepto-), clusters (staphylo-)"
                            }
                        }
                    },
                    dataCollection: {
                        drawingRequirements: [
                            "Draw what you actually see, not what you expect",
                            "Use stippling or light shading (no heavy shading)",
                            "Draw single cells and groups showing arrangement",
                            "Label all visible structures",
                            "Include magnification and scale bar",
                            "Title each drawing"
                        ],
                        dataTable: [
                            ["Cell Type", "Shape", "Size (μm)", "Cell Wall?", "Nucleus?", "Chloroplasts?", "Large Vacuole?", "Other Features"],
                            ["Onion (plant)", "Rectangular", "250-400 × 150-250", "Yes", "Yes", "No", "Yes", "Organized rows"],
                            ["Elodea (plant)", "Rectangular", "100-200 × 50-100", "Yes", "Yes", "Yes", "Yes", "Chloroplasts visible"],
                            ["Cheek (animal)", "Irregular", "50-60 diameter", "No", "Yes", "No", "No", "Flexible shape"],
                            ["Bacteria (prokaryotic)", "Varied", "1-5", "Yes", "No", "No", "No", "Very small, simple"]
                        ]
                    },
                    analysis: {
                        comparisonTable: [
                            ["Feature", "Prokaryotic (Bacteria)", "Eukaryotic Plant", "Eukaryotic Animal"],
                            ["Size", "Small (1-5 μm)", "Large (50-500 μm)", "Medium (10-100 μm)"],
                            ["Cell Wall", "Yes (peptidoglycan)", "Yes (cellulose)", "No"],
                            ["Nucleus", "No (nucleoid)", "Yes", "Yes"],
                            ["Membrane-bound organelles", "No", "Yes", "Yes"],
                            ["Chloroplasts", "No*", "Yes", "No"],
                            ["Large central vacuole", "No", "Yes", "No"],
                            ["Shape", "Defined", "Rectangular/fixed", "Irregular/variable"],
                            ["Complexity", "Simple", "Complex", "Complex"]
                        ],
                        note: "*Cyanobacteria have thylakoids but not chloroplasts",
                        questions: [
                            "How can you distinguish plant cells from animal cells?",
                            "Why are plant cells more regular in shape than animal cells?",
                            "What is the function of the cell wall in plant cells?",
                            "Why can't you see individual organelles in bacteria?",
                            "What is the relationship between cell size and complexity?",
                            "How does the presence of chloroplasts indicate the cell's function?",
                            "Why is staining necessary to see cellular details?"
                        ]
                    },
                    conclusions: [
                        "Eukaryotic cells (plant and animal) are larger and more complex than prokaryotic cells (bacteria)",
                        "Plant cells have cell walls, chloroplasts, and large central vacuoles; animal cells do not",
                        "Both plant and animal cells have nuclei and membrane-bound organelles",
                        "Prokaryotic cells lack a nucleus and membrane-bound organelles",
                        "Cell structure reflects function (e.g., chloroplasts for photosynthesis)",
                        "Microscopy and staining are essential tools for observing cellular structures",
                        "Hooke's original observation of cork cells showed dead cell walls; living cells contain much more detail"
                    ],
                    realWorldApplications: [
                        "Medical diagnosis (identifying abnormal cells, pathogens)",
                        "Agriculture (plant breeding, disease identification)",
                        "Microbiology (bacterial identification, antibiotic testing)",
                        "Forensic science (analyzing biological evidence)",
                        "Research (understanding cell function, disease mechanisms)",
                        "Quality control (food industry, water testing)"
                    ],
                    extensions: [
                        "Compare multiple plant tissues (e.g., leaf, root, stem)",
                        "Observe mitosis in onion root tips",
                        "Test osmosis effects on plant cells (plasmolysis)",
                        "Prepare and stain blood cells",
                        "Use electron microscope images to see ultrastructure",
                        "Measure actual cell dimensions using eyepiece micrometer"
                    ]
                }
            },
   
            // ========================================
            // MEMBRANE PERMEABILITY EXPERIMENTS
            // ========================================
            
            overton_lipid_solubility: {
                name: "Overton's Rule - Cell Membrane Permeability Lab (Beetroot Pigment)",
                relatedTopics: ['lipids', 'cell_membrane'],
                category: 'membrane_biology',
                historicalBackground: {
                    scientist: "Charles Ernest Overton",
                    year: "1899",
                    discovery: "Overton's Rule: Cell permeability to substances correlates with lipid solubility",
                    observation: "Tested ~500 compounds on plant cells, found lipid-soluble molecules enter cells faster",
                    hypothesis: "Cell membranes are composed primarily of lipids",
                    significance: "First evidence for lipid nature of cell membranes (before phospholipid bilayer model)",
                    context: "At the time, cell membrane composition was unknown. Overton's work suggested lipid barrier",
                    rule: "Permeability ∝ lipid solubility (measured by oil/water partition coefficient)",
                    modernView: "Confirmed by fluid mosaic model - membrane is phospholipid bilayer with embedded proteins"
                },
                labExperiment: {
                    title: "Cell Membrane Permeability: Beetroot Pigment Leakage",
                    hypothesis: "If cell membranes are lipid bilayers, then factors that disrupt membrane structure (heat, ethanol, detergents) will increase permeability and cause leakage of intracellular pigments",
                    purpose: "Investigate factors affecting cell membrane permeability using beetroot vacuolar pigment (betalain) as indicator",
                    background: {
                        beetroot: "Contains betalain pigment in vacuole (red/purple color)",
                        intactmembrane: "Pigment remains inside vacuole",
                        damagedmembrane: "Pigment leaks into surrounding solution (measurable by color intensity)",
                        factors: "Temperature, ethanol, detergents, pH affect membrane integrity"
                    },
                    variables: {
                        independent: "Treatment type (temperature, ethanol concentration, etc.)",
                        dependent: "Pigment leakage (measured by absorbance or color intensity)",
                        controlled: ["Beetroot piece size", "Treatment time", "Volume of solution", "Beetroot variety"]
                    },
                    materials: [
                        "Fresh beetroot (red beet)",
                        "Cork borer or knife (to cut uniform cylinders)",
                        "Ruler",
                        "Distilled water",
                        "Ethanol (various concentrations: 0%, 25%, 50%, 75%, 100%)",
                        "Detergent solution (dish soap, 1%)",
                        "Test tubes",
                        "Water baths at different temperatures (0°C, 20°C, 40°C, 60°C, 80°C)",
                        "Colorimeter or spectrophotometer (optional, for quantitative)",
                        "White tile for visual comparison",
                        "Thermometer",
                        "Timer",
                        "Pipettes"
                    ],
                    safetyPrecautions: [
                        "Beetroot stains clothing and skin - wear gloves and lab coat",
                        "Be careful with sharp cork borer/knife",
                        "Hot water baths can cause burns - handle with care",
                        "High concentrations of ethanol are flammable - keep away from flames"
                    ],
                    procedure: [
                        "PREPARATION OF BEETROOT SAMPLES:",
                        "Peel beetroot and cut into uniform cylinders using cork borer (~5 mm diameter)",
                        "Cut cylinders into discs of equal thickness (~3-5 mm thick)",
                        "Rinse discs thoroughly in distilled water until rinse water is clear",
                        "This removes pigment from damaged surface cells",
                        "Blot dry gently with paper towel",
                        "Prepare enough uniform discs for all treatments (at least 3 per condition)",
                        "",
                        "EXPERIMENT 1: EFFECT OF TEMPERATURE:",
                        "Label 6 test tubes: 0°C, 20°C, 40°C, 60°C, 80°C, 100°C",
                        "Add 10 ml distilled water to each tube",
                        "Place one beetroot disc in each tube",
                        "Incubate tubes at respective temperatures for 20 minutes:",
                        "  0°C: ice water bath",
                        "  20°C: room temperature",
                        "  40°C, 60°C, 80°C: water baths at these temperatures",
                        "  100°C: boiling water bath",
                        "After 20 min, remove beetroot discs",
                        "Observe and record color intensity of solutions",
                        "Optionally: measure absorbance at 530 nm with colorimeter",
                        "",
                        "EXPERIMENT 2: EFFECT OF ETHANOL (Lipid Solvent):",
                        "Label 5 test tubes: 0%, 25%, 50%, 75%, 100% ethanol",
                        "Prepare ethanol solutions by mixing with water:",
                        "  0%: 10 ml water",
                        "  25%: 2.5 ml ethanol + 7.5 ml water",
                        "  50%: 5 ml ethanol + 5 ml water",
                        "  75%: 7.5 ml ethanol + 2.5 ml water",
                        "  100%: 10 ml ethanol",
                        "Add one beetroot disc to each tube",
                        "Incubate at room temperature for 20 minutes",
                        "Remove discs and observe/measure pigment leakage",
                        "",
                        "EXPERIMENT 3: EFFECT OF DETERGENT (Disrupts Lipid Bilayer):",
                        "Prepare detergent solutions: 0%, 0.1%, 0.5%, 1%, 2%",
                        "Add beetroot disc to each",
                        "Incubate 20 minutes at room temperature",
                        "Observe pigment leakage",
                        "",
                        "MEASUREMENT:",
                        "Visual: Compare color intensity against white background, rank 0-5",
                        "Quantitative: Use colorimeter at 530 nm wavelength",
                        "Plot absorbance (or color score) vs treatment intensity"
                    ],
                    expectedResults: {
                        temperature: {
                            low0_20C: "Minimal or no pigment leakage (membranes intact)",
                            medium40C: "Slight pigment leakage (membranes becoming more fluid)",
                            high60_80C: "Significant pigment leakage (membranes disrupted, proteins denature)",
                            boiling100C: "Complete pigment release (membranes totally destroyed)"
                        },
                        ethanol: {
                            zero: "No leakage (membranes intact)",
                            low25: "Slight leakage (ethanol begins dissolving lipids)",
                            medium50: "Moderate leakage (significant membrane disruption)",
                            high75_100: "High leakage (membranes severely disrupted)"
                        },
                        detergent: {
                            zero: "No leakage",
                            increasing: "Progressively more leakage as detergent concentration increases",
                            mechanism: "Detergents solubilize membrane lipids, creating holes"
                        }
                    },
                    dataTable: [
                        ["Temperature (°C)", "Color Intensity (0-5)", "Absorbance (530 nm)", "Membrane Integrity"],
                        ["0", "0", "0.05", "Intact"],
                        ["20", "1", "0.12", "Mostly intact"],
                        ["40", "2", "0.35", "Slightly damaged"],
                        ["60", "4", "0.88", "Significantly damaged"],
                        ["80", "5", "1.45", "Severely damaged"],
                        ["100", "5", "1.92", "Completely destroyed"],
                        ["", "", "", ""],
                        ["Ethanol (%)", "Color Intensity", "Absorbance", "Membrane Integrity"],
                        ["0", "0", "0.06", "Intact"],
                        ["25", "2", "0.41", "Slightly disrupted"],
                        ["50", "3", "0.79", "Moderately disrupted"],
                        ["75", "4", "1.18", "Severely disrupted"],
                        ["100", "5", "1.55", "Completely disrupted"]
                    ],
                    observations: [
                        "Low temperatures preserve membrane integrity (little pigment leakage)",
                        "High temperatures cause membrane breakdown (extensive leakage)",
                        "Threshold around 60°C where leakage dramatically increases (protein denaturation)",
                        "Ethanol disrupts membranes in dose-dependent manner",
                        "Detergents rapidly solubilize membranes even at low concentrations",
                        "Damage is often irreversible (pigment doesn't go back in)"
                    ],
                    analysis: {
                        temperatureEffect: [
                            "Low temp: membranes less fluid but intact",
                            "Moderate temp (37°C): optimal fluidity, intact",
                            "High temp (>60°C): membrane proteins denature, lipids become too fluid",
                            "Boiling: complete destruction of membrane structure"
                        ],
                        ethanolEffect: [
                            "Ethanol dissolves lipids (similar polarity)",
                            "Creates holes/disruptions in bilayer",
                            "Demonstrates Overton's Rule: lipid solvents penetrate lipid membranes",
                            "Mechanism: ethanol intercalates between phospholipids, increasing permeability"
                        ],
                        detergentEffect: [
                            "Detergents have hydrophobic tail and hydrophilic head (like phospholipids)",
                            "Solubilize membrane lipids into micelles",
                            "Disrupt bilayer integrity",
                            "Used in cell lysis for protein extraction"
                        ]
                    },
                    connectionToOverton: {
                        rule: "Lipid-soluble substances (ethanol) easily cross/disrupt lipid membranes",
                        evidence: "Ethanol (lipid-soluble) disrupts membrane; water (polar) does not",
                        implication: "Membranes must be lipid-based to show this selective permeability",
                        modernConfirmation: "Phospholipid bilayer model confirms Overton's hypothesis"
                    },
                    molecularExplanation: {
                        fluidMosaicModel: "Membrane = phospholipid bilayer with embedded proteins",
                        phospholipidStructure: {
                            head: "Hydrophilic (polar, phosphate group)",
                            tail: "Hydrophobic (nonpolar, fatty acid chains)"
                        },
                        permeability: {
                            highlyPermeable: "Small, nonpolar molecules (O₂, CO₂, ethanol)",
                            lowlyPermeable: "Large, polar molecules (glucose, ions)",
                            impermeable: "Very large or charged molecules (proteins, DNA)"
                        },
                        factors: [
                            "Temperature affects membrane fluidity",
                            "Cholesterol modulates fluidity (at moderate temps)",
                            "Saturated vs unsaturated fatty acids affect packing"
                        ]
                    },
                    results: "Membrane permeability increases with temperature, ethanol concentration, and detergent concentration. This demonstrates that cell membranes are lipid-based structures that can be disrupted by heat, lipid solvents, and detergents, supporting Overton's Rule and the fluid mosaic model.",
                    conclusions: [
                        "Cell membranes are selectively permeable lipid barriers",
                        "Lipid-soluble substances can disrupt membrane integrity",
                        "Temperature affects membrane fluidity and integrity",
                        "Detergents solubilize membranes by interacting with lipids",
                        "Overton's Rule is confirmed: lipid solubility predicts membrane permeability"
                    ],
                    realWorldApplications: [
                        "Understanding drug delivery (lipid-soluble drugs cross membranes better)",
                        "Food preservation (heat treatment destroys microbial membranes)",
                        "Alcohol antiseptics (disrupt bacterial membranes)",
                        "Cryopreservation (avoid ice crystal damage to membranes)",
                        "Understanding how toxins and pollutants affect cells"
                    ],
                    extensions: [
                        "Test effect of pH on membrane integrity",
                        "Compare different types of cells (plant vs animal)",
                        "Investigate protective effects of antioxidants",
                        "Study membrane recovery after mild stress",
                        "Quantify permeability using Fick's Law of Diffusion",
                        "Model membrane as lipid bilayer and predict permeability of different molecules"
                    ],
                    limitations: [
                        "Beetroot cells are dead (vacuole membrane, not plasma membrane primarily studied)",
                        "Only measures passive leakage, not active transport",
                        "Qualitative unless spectrophotometer used",
                        "Natural variation in beetroot pigment content"
                    ],
                    troubleshooting: [
                        "Rinse water colored: Cut surfaces damaged, rinse more thoroughly",
                        "No difference between treatments: Beetroot may be old/damaged, use fresh",
                        "All samples very colored: Cutting damaged too many cells, be gentler",
                        "Inconsistent results: Ensure uniform disc size and treatment time"
                    ]
                }
            }
        };

        // Link experiments to topics
        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.molecularExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.molecularTopics[topicId]) {
                    if (!this.molecularTopics[topicId].relatedExperiments) {
                        this.molecularTopics[topicId].relatedExperiments = [];
                    }
                    this.molecularTopics[topicId].relatedExperiments.push({
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
            carbohydrates: {
                'Structure and Classification': [
                    'Thinking all carbohydrates are sugars (cellulose is carbohydrate but not sweet)',
                    'Believing carbs are only for energy (also structural: cellulose, chitin)',
                    'Confusing starch and cellulose (both glucose polymers but different bonds)',
                    'Thinking simple sugars are always bad (glucose is essential for brain function)',
                    'Believing all carbohydrates have same formula CH₂O (close but not exact for all)'
                ],
                'Reducing vs Non-reducing Sugars': [
                    'Thinking sucrose is a reducing sugar (it\'s not - no free anomeric carbon)',
                    'Believing all disaccharides are reducing sugars (sucrose is exception)',
                    'Confusing reducing ability with sweetness'
                ]
            },
            
            lipids: {
                'Structure and Function': [
                    'Thinking all fats are bad (essential fatty acids, membrane phospholipids vital)',
                    'Believing lipids are only for energy storage (also membranes, signaling, vitamins)',
                    'Confusing saturated with unhealthy (some saturated fats are essential)',
                    'Thinking cholesterol is always harmful (needed for membranes, hormones, vitamin D)',
                    'Believing lipids dissolve in water (they\'re hydrophobic by definition)'
                ],
                'Fatty Acids': [
                    'Thinking saturated means solid (coconut oil is saturated but liquid in tropics - it\'s about melting point)',
                    'Believing all unsaturated fats are healthy (trans fats are unsaturated but harmful)',
                    'Confusing omega-3/6/9 with number of double bonds (it\'s position of first double bond from methyl end)'
                ]
            },
            
            proteins: {
                'Structure': [
                    'Thinking primary structure is unimportant (it determines all higher structures)',
                    'Believing all proteins have quaternary structure (many are single polypeptides)',
                    'Confusing denaturation with hydrolysis (denaturation unfolds, hydrolysis breaks peptide bonds)',
                    'Thinking denatured = non-functional (sometimes reversible)',
                    'Believing protein folding is random (it\'s determined by sequence and environment)'
                ],
                'Function': [
                    'Thinking proteins are only for structure (enzymes, transport, signaling, etc.)',
                    'Believing all enzymes are proteins (some RNAs are catalytic - ribozymes)',
                    'Confusing amino acids with proteins (proteins are polymers OF amino acids)'
                ]
            },
            
            nucleic_acids: {
                'DNA vs RNA': [
                    'Thinking DNA and RNA only differ by one letter (many differences: sugar, bases, structure, stability)',
                    'Believing RNA is always single-stranded (can have secondary structure, tRNA has cloverleaf)',
                    'Thinking thymine and uracil are very different (just methyl group difference)',
                    'Confusing DNA replication with transcription'
                ],
                'Structure': [
                    'Believing A=T means same amount of adenine and thymine in single strand (true for double-stranded DNA, not single)',
                    'Thinking base pairing is due to electrostatic attraction (it\'s hydrogen bonding)',
                    'Confusing nucleotide with nucleoside (nucleoside lacks phosphate)'
                ]
            },
            
            bioenergetics: {
                'ATP': [
                    'Thinking ATP is stored in large amounts (actually made on demand, small reserves)',
                    'Believing ATP is only made in mitochondria (also in glycolysis in cytoplasm)',
                    'Confusing ATP with ADP (3 vs 2 phosphates)',
                    'Thinking ATP synthesis requires oxygen (glycolysis doesn\'t)'
                ],
                'Cellular Respiration': [
                    'Believing plants don\'t do cellular respiration (they do! They need ATP too)',
                    'Thinking glucose is directly converted to ATP (multi-step process)',
                    'Confusing fermentation with cellular respiration (fermentation is anaerobic, no oxygen)',
                    'Believing all organisms use O₂ (anaerobes use other electron acceptors)',
                    'Thinking 38 ATP is exact yield (varies by shuttle system, 36-38 range)'
                ]
            },
            
            enzymes: {
                'Activity and Specificity': [
                    'Thinking enzymes are consumed in reactions (they\'re reused)',
                    'Believing enzymes change equilibrium of reaction (they speed it up but don\'t change equilibrium)',
                    'Confusing enzyme with substrate (enzyme is catalyst, substrate is what\'s acted upon)',
                    'Thinking all enzymes work best at pH 7 (optimal pH varies)',
                    'Believing higher temperature always increases activity (until denaturation)'
                ],
                'Inhibition': [
                    'Confusing competitive with non-competitive inhibition',
                    'Thinking all inhibitors are bad (many are drugs that work by inhibiting enzymes)',
                    'Believing inhibition is always irreversible'
                ]
            },
            
            molecular_signaling: {
                'Signal Transduction': [
                    'Thinking signaling is always slow (some pathways are milliseconds)',
                    'Believing one signal = one response (often amplification cascades)',
                    'Confusing first messenger with second messenger',
                    'Thinking receptors are only on cell surface (steroid receptors are intracellular)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use diagrams to show structural differences',
                effectiveness: 'High for distinguishing similar molecules'
            },
            analogy: {
                method: 'Relate to everyday examples (lock and key, etc.)',
                effectiveness: 'High for abstract concepts'
            },
            molecular_models: {
                method: 'Build physical or virtual 3D models',
                effectiveness: 'Very high for understanding structure'
            },
            contrast_table: {
                method: 'Side-by-side comparison charts',
                effectiveness: 'High for related concepts'
            },
            chemical_equations: {
                method: 'Show balanced reactions and mechanisms',
                effectiveness: 'High for understanding processes'
            },
            experimental_demonstration: {
                method: 'Link to historical and lab experiments',
                effectiveness: 'Very high for concrete understanding'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "What questions do you have about {topic}?",
                "How does {topic} relate to what you've learned before?",
                "What do you predict will be most challenging about {topic}?"
            ],
            duringLearning: [
                "Does this make sense? Can you explain it in your own words?",
                "How does this connect to {related_concept}?",
                "What's confusing about this concept?",
                "Can you think of a real-world example of {concept}?"
            ],
            afterLearning: [
                "What were the main ideas about {topic}?",
                "What surprised you while learning about {topic}?",
                "What are you still unsure about?",
                "How would you teach {topic} to someone else?",
                "What study strategy worked best for you with this material?"
            ],
            problemSolving: [
                "What is the question really asking?",
                "What information do you have? What do you need?",
                "Have you seen a similar problem before?",
                "Did your answer make sense? How can you check?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            carbohydrates: [
                {
                    scenario: "Diabetes Management",
                    context: "A person with diabetes needs to understand how different carbohydrates affect blood glucose levels",
                    application: "Simple sugars (glucose, sucrose) raise blood sugar quickly; complex carbohydrates (starch with fiber) are absorbed slowly",
                    question: "Why does eating whole grain bread affect blood sugar differently than white bread?"
                },
                {
                    scenario: "Athletic Performance",
                    context: "Marathon runners 'carbo-load' before races",
                    application: "Glycogen stores in muscles provide energy during endurance exercise",
                    question: "Why do athletes eat pasta the night before a race?"
                }
            ],
            
            lipids: [
                {
                    scenario: "Heart Disease Prevention",
                    context: "Understanding different types of dietary fats and cardiovascular health",
                    application: "Trans fats and excessive saturated fats increase LDL cholesterol; unsaturated fats (omega-3) are protective",
                    question: "Why are trans fats particularly harmful even though they're unsaturated?"
                },
                {
                    scenario: "Cold-Water Fish",
                    context: "Fish in cold water have more unsaturated fats in membranes",
                    application: "Unsaturated fatty acids remain fluid at low temperatures (kinks prevent tight packing)",
                    question: "How do Arctic fish keep their cell membranes functional in freezing water?"
                }
            ],
            
            proteins: [
                {
                    scenario: "Sickle Cell Disease",
                    context: "Single amino acid substitution in hemoglobin causes disease",
                    application: "Glutamic acid → Valine at position 6 changes protein shape, causes RBCs to sickle",
                    question: "How can one amino acid change cause such severe disease?"
                },
                {
                    scenario: "Cooking Eggs",
                    context: "Eggs change texture when cooked",
                    application: "Heat denatures proteins (ovalbumin), causing them to unfold and aggregate",
                    question: "Why can't you 'uncook' an egg?"
                }
            ],
            
            enzymes: [
                {
                    scenario: "Lactose Intolerance",
                    context: "Many adults can't digest milk sugar",
                    application: "Lack of lactase enzyme means lactose not broken down, causing digestive problems",
                    question: "Why do lactose-intolerant people feel better when they take lactase pills?"
                },
                {
                    scenario: "Aspirin as Pain Reliever",
                    context: "Aspirin reduces pain and inflammation",
                    application: "Aspirin irreversibly inhibits COX enzyme, blocking prostaglandin synthesis",
                    question: "Why does aspirin have long-lasting effects even though it's cleared from blood quickly?"
                }
            ],
            
            bioenergetics: [
                {
                    scenario: "Cyanide Poisoning",
                    context: "Cyanide is rapidly fatal",
                    application: "Cyanide blocks cytochrome c oxidase in electron transport chain, halting ATP production",
                    question: "Why does cyanide cause death so quickly?"
                },
                {
                    scenario: "High-Altitude Adaptation",
                    context: "People at high altitude produce more red blood cells",
                    application: "Less O₂ available, so body compensates to maintain aerobic respiration and ATP production",
                    question: "Why do athletes train at high altitude?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall facts, terms, basic concepts",
                    verbs: ["Define", "List", "Identify", "Name", "State"],
                    example: "Define monosaccharide"
                },
                understand: {
                    description: "Explain ideas or concepts",
                    verbs: ["Explain", "Describe", "Summarize", "Compare", "Classify"],
                    example: "Explain why saturated fats are solid at room temperature"
                },
                apply: {
                    description: "Use information in new situations",
                    verbs: ["Calculate", "Solve", "Demonstrate", "Predict", "Use"],
                    example: "Predict what happens to enzyme activity at pH 2"
                },
                analyze: {
                    description: "Draw connections among ideas",
                    verbs: ["Analyze", "Differentiate", "Organize", "Compare", "Contrast"],
                    example: "Analyze how protein structure relates to function"
                },
                evaluate: {
                    description: "Justify a decision or course of action",
                    verbs: ["Evaluate", "Critique", "Judge", "Defend", "Assess"],
                    example: "Evaluate the evidence for the induced fit model vs lock and key"
                },
                create: {
                    description: "Produce new or original work",
                    verbs: ["Design", "Construct", "Create", "Develop", "Formulate"],
                    example: "Design an experiment to test enzyme specificity"
                }
            },
            
            understandingLevels: {
                novice: {
                    characteristics: ["Memorizes facts", "Sees concepts in isolation", "Struggles with application"],
                    support: ["Provide analogies", "Use concrete examples", "Break down complex ideas"]
                },
                developing: {
                    characteristics: ["Connects related concepts", "Can apply to familiar situations", "Begins seeing patterns"],
                    support: ["Challenge with new contexts", "Encourage explanation", "Introduce exceptions"]
                },
                proficient: {
                    characteristics: ["Flexible thinking", "Applies to novel situations", "Explains reasoning"],
                    support: ["Present complex problems", "Encourage analysis", "Develop research skills"]
                },
                expert: {
                    characteristics: ["Synthesizes across domains", "Creates new connections", "Teaches others effectively"],
                    support: ["Original research", "Mentoring others", "Advanced applications"]
                }
            }
        };

        this.assessmentQuestions = {
            carbohydrates: {
                remember: "List the three main types of carbohydrates",
                understand: "Explain why cellulose is indigestible by humans but starch is digestible",
                apply: "Predict which sugar will give a positive Benedict's test: glucose or sucrose",
                analyze: "Compare and contrast the structures of amylose and cellulose",
                evaluate: "Evaluate the claim that 'all carbohydrates are bad for health'",
                create: "Design an experiment to distinguish between reducing and non-reducing sugars"
            },
            // Similar for other topics...
        };
    }

    handleCarbohydrates(problem) {
    const content = {
        topic: "Carbohydrates",
        category: "biomolecules",
        summary: "Carbohydrates are organic molecules composed of carbon, hydrogen, and oxygen, generally in the ratio (CH₂O)n. They serve as the primary energy source for living organisms, structural components of cell walls and exoskeletons, and informational molecules in cell signalling. Mastery spans foundational chemistry through monosaccharides, disaccharides, polysaccharides, structural vs storage roles, digestion, and metabolic connections.",

        components: {

            // ─────────────────────────────────────────────
            // 1. FOUNDATIONS
            // ─────────────────────────────────────────────
            foundations: {
                overview: "Core vocabulary, elemental composition, and chemical properties needed before classifying carbohydrates",

                definition: {
                    statement: "Carbohydrates are polyhydroxy aldehydes or polyhydroxy ketones, or compounds that hydrolyse to yield them",
                    simpleDefinition: "Organic molecules made of carbon, hydrogen, and oxygen",
                    generalFormula: "(CH₂O)n — note hydrogen:oxygen ratio is always 2:1, same as water",
                    examples: [
                        "Glucose: C₆H₁₂O₆ — n = 6",
                        "Ribose: C₅H₁₀O₅ — n = 5",
                        "Sucrose: C₁₂H₂₂O₁₁ — condensation removes one water molecule"
                    ],
                    note: "Not all carbohydrates strictly fit (CH₂O)n (e.g. deoxyribose is C₅H₁₀O₄), but the ratio is a useful approximation"
                },

                elementalComposition: {
                    elements: ["Carbon (C)", "Hydrogen (H)", "Oxygen (O)"],
                    ratioRule: "H:O ratio is approximately 2:1 in most carbohydrates",
                    comparison: {
                        proteins: "Also contain nitrogen (N), often sulfur (S)",
                        lipids: "Also C, H, O but far less oxygen; not 2:1 H:O ratio",
                        nucleicAcids: "Also contain nitrogen (N) and phosphorus (P)"
                    },
                    organicNature: "Carbohydrates are organic because they contain carbon bonded to hydrogen"
                },

                functionalGroups: {
                    aldehyde: {
                        structure: "-CHO at C1",
                        presence: "Found in aldoses (e.g. glucose, galactose, ribose)",
                        significance: "Reducing group — can donate electrons; detected by Benedict's test"
                    },
                    ketone: {
                        structure: "C=O within the carbon chain, not at terminal carbon",
                        presence: "Found in ketoses (e.g. fructose)",
                        significance: "Also a reducing group in open-chain form"
                    },
                    hydroxyl: {
                        structure: "-OH groups on multiple carbons",
                        count: "Multiple -OH groups make sugars highly soluble in water (hydrophilic)",
                        significance: "Sites for glycosidic bond formation; contribute to hydrogen bonding"
                    }
                },

                carbonSkeletonAndChirality: {
                    carbonNumbering: "Carbons in monosaccharides are numbered from the end closest to the carbonyl group",
                    chiralCarbons: {
                        definition: "A carbon bonded to four different groups — can exist as mirror-image isomers",
                        DandLForms: "D-sugars have the -OH on the right at the penultimate carbon (Fischer projection); L-sugars have it on the left",
                        biologicalRelevance: "Nearly all biologically important sugars are D-form"
                    },
                    stereoisomers: {
                        definition: "Molecules with the same molecular formula and bond connectivity but different spatial arrangements",
                        types: ["Enantiomers (mirror images)", "Epimers (differ at one carbon only)"],
                        example: "Glucose and galactose are epimers — differ only at C4"
                    }
                },

                solubilityAndPolarity: {
                    solubility: "Most mono- and disaccharides are highly water-soluble due to multiple -OH groups forming hydrogen bonds with water",
                    polarity: "Carbohydrates are polar molecules",
                    polysaccharideException: "Large polysaccharides (e.g. cellulose, starch) are insoluble — too large and extensive hydrogen bonding within the molecule",
                    biologicalImplication: "Soluble sugars can be transported in blood/phloem; insoluble polysaccharides are ideal for storage/structure"
                },

                classificationOverview: {
                    bySize: [
                        "Monosaccharides — single sugar units",
                        "Disaccharides — two monosaccharides joined by a glycosidic bond",
                        "Oligosaccharides — 3–10 monosaccharide units",
                        "Polysaccharides — many monosaccharide units (often thousands)"
                    ],
                    byFunction: ["Energy source", "Energy storage", "Structural support", "Cell recognition and signalling"],
                    byCarbonylType: ["Aldoses (aldehyde group)", "Ketoses (ketone group)"],
                    byChainLength: ["Trioses (3C)", "Pentoses (5C)", "Hexoses (6C)"]
                },

                reducingVsNonReducingSugars: {
                    reducingSugars: {
                        definition: "Sugars that can donate electrons to a oxidising agent (e.g. Cu²⁺ in Benedict's reagent), reducing it",
                        mechanism: "Free aldehyde or ketone group acts as electron donor",
                        examples: ["Glucose", "Fructose", "Galactose", "Maltose", "Lactose"],
                        test: "Benedict's test — brick-red precipitate forms on heating with reducing sugar"
                    },
                    nonReducingSugars: {
                        definition: "Sugars lacking a free anomeric -OH; cannot reduce Benedict's reagent directly",
                        examples: ["Sucrose — both anomeric carbons are involved in the glycosidic bond"],
                        test: "Must hydrolyse first (with dilute HCl), then test with Benedict's"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 2. MONOSACCHARIDES
            // ─────────────────────────────────────────────
            monosaccharides: {
                overview: "Single sugar units — the monomers of all larger carbohydrates",

                trioses: {
                    definition: "3-carbon monosaccharides (n=3)",
                    examples: [
                        "Glyceraldehyde (PGAL) — C₃H₆O₃; key intermediate in glycolysis",
                        "Dihydroxyacetone phosphate (DHAP) — isomer of PGAL; also in glycolysis"
                    ],
                    metabolicRole: "Central intermediates in glycolysis and the Calvin cycle"
                },

                pentoses: {
                    definition: "5-carbon monosaccharides (n=5)",
                    keyExamples: {
                        ribose: {
                            formula: "C₅H₁₀O₅",
                            role: "Component of RNA, ATP, NAD⁺, FAD, and coenzyme A",
                            structure: "Aldopentose; exists as ribofuranose ring in nucleotides"
                        },
                        deoxyribose: {
                            formula: "C₅H₁₀O₄",
                            difference: "Lacks one -OH group at C2 compared to ribose",
                            role: "Component of DNA",
                            significance: "The '2-deoxy' modification increases chemical stability of DNA vs RNA"
                        },
                        ribulose: {
                            formula: "C₅H₁₀O₅",
                            role: "Component of RuBP (ribulose-1,5-bisphosphate) — CO₂ acceptor in Calvin cycle"
                        }
                    }
                },

                hexoses: {
                    definition: "6-carbon monosaccharides (n=6); most biologically abundant",
                    keyExamples: {
                        glucose: {
                            formula: "C₆H₁₂O₆",
                            type: "Aldohexose",
                            forms: {
                                alphaGlucose: "α-glucose: -OH at C1 is below the ring plane",
                                betaGlucose: "β-glucose: -OH at C1 is above the ring plane",
                                significance: "This anomeric difference determines the polymer formed: α → starch/glycogen; β → cellulose"
                            },
                            roles: ["Primary respiratory substrate", "Building block of starch, glycogen, cellulose"],
                            transportForm: "Main sugar transported in blood (blood glucose); in phloem as sucrose"
                        },
                        fructose: {
                            formula: "C₆H₁₂O₆",
                            type: "Ketohexose — ketone at C2",
                            roles: ["Component of sucrose", "Found in fruit", "Metabolised in liver"],
                            isomer: "Structural isomer of glucose — same formula, different arrangement"
                        },
                        galactose: {
                            formula: "C₆H₁₂O₆",
                            type: "Aldohexose; epimer of glucose (differs at C4)",
                            roles: ["Component of lactose", "Component of glycolipids and glycoproteins in cell membranes"],
                            conversion: "Converted to glucose in the liver"
                        }
                    }
                },

                ringStructures: {
                    haworthProjection: {
                        definition: "A 2D representation of the cyclic (ring) form of monosaccharides",
                        formation: "In solution, the carbonyl group reacts with a hydroxyl group on the same molecule to form a cyclic hemiacetal",
                        glucoseCyclisation: "C1 aldehyde reacts with C5 -OH → pyranose ring (6-membered ring containing one oxygen)",
                        fructoseCyclisation: "C2 ketone reacts with C5 -OH → furanose ring (5-membered ring containing one oxygen)"
                    },
                    anomers: {
                        definition: "Isomers that differ only in the configuration at the anomeric carbon (C1 for aldoses)",
                        alphaAnomer: "-OH at anomeric carbon is on the same side as the ring oxygen (axial in chair conformation)",
                        betaAnomer: "-OH at anomeric carbon is on the opposite side to the ring oxygen (equatorial in chair conformation)",
                        mutarotation: "Interconversion of α and β anomers in solution; at equilibrium, glucose is ~36% α and ~64% β"
                    }
                },

                propertiesOfMonosaccharides: {
                    physical: [
                        "White crystalline solids at room temperature",
                        "Sweet taste",
                        "Highly soluble in water",
                        "Optically active — rotate plane-polarised light"
                    ],
                    chemical: [
                        "All monosaccharides are reducing sugars",
                        "Can be phosphorylated (e.g. glucose-6-phosphate) to trap them inside cells",
                        "Can form glycosidic bonds via condensation reactions"
                    ]
                }
            },

            // ─────────────────────────────────────────────
            // 3. DISACCHARIDES
            // ─────────────────────────────────────────────
            disaccharides: {
                overview: "Two monosaccharide units joined by a glycosidic bond via condensation",

                glycosidicBond: {
                    definition: "A covalent bond formed between two monosaccharides by a condensation (dehydration) reaction",
                    mechanism: {
                        condensation: "The -OH of one sugar and the -OH of another react, releasing one molecule of water (H₂O)",
                        equation: "Monosaccharide + Monosaccharide → Disaccharide + H₂O",
                        reversal: "Hydrolysis (addition of water) breaks glycosidic bonds — requires enzyme or acid"
                    },
                    bondNomenclature: {
                        example: "α(1→4) glycosidic bond in maltose: C1 of one glucose linked to C4 of another, both in α configuration",
                        alphaVsBeta: "α-glycosidic bonds produce coiled/helical polymers (starch); β-glycosidic bonds produce straight/rigid chains (cellulose)"
                    }
                },

                keyDisaccharides: {
                    maltose: {
                        monomers: "α-glucose + α-glucose",
                        bond: "α(1→4) glycosidic bond",
                        sources: ["Germinating seeds", "Product of starch digestion by amylase"],
                        reducingSugar: true,
                        note: "C1 of first glucose is free — can still reduce Benedict's reagent"
                    },
                    sucrose: {
                        monomers: "α-glucose + β-fructose",
                        bond: "α(1→2)β glycosidic bond — both anomeric carbons are involved",
                        sources: ["Sugar cane", "Sugar beet", "Most fruits and vegetables"],
                        reducingSugar: false,
                        reason: "Both anomeric -OH groups are used in the bond — no free reducing group",
                        biologicalRole: "Main transport sugar in plant phloem; osmotically active"
                    },
                    lactose: {
                        monomers: "β-galactose + glucose",
                        bond: "β(1→4) glycosidic bond",
                        sources: ["Milk and dairy products"],
                        reducingSugar: true,
                        digestion: "Requires enzyme lactase; lactase deficiency → lactose intolerance",
                        significance: "Only significant dietary source of galactose"
                    },
                    cellobiose: {
                        monomers: "β-glucose + β-glucose",
                        bond: "β(1→4) glycosidic bond",
                        occurrence: "Structural unit of cellulose (product of cellulose hydrolysis)",
                        reducingSugar: true
                    }
                },

                hydrolysisOfDisaccharides: {
                    process: "Glycosidic bond + H₂O → two monosaccharides (catalysed by specific glycosidases)",
                    enzymes: [
                        "Maltase → cleaves maltose → 2 glucose",
                        "Sucrase (invertase) → cleaves sucrose → glucose + fructose",
                        "Lactase → cleaves lactose → glucose + galactose"
                    ],
                    conditions: "Enzymatic (specific) or acid hydrolysis (non-specific, requires heat)",
                    testingAfterHydrolysis: "Hydrolysed product tested with Benedict's — positive result confirms reducing sugars released"
                }
            },

            // ─────────────────────────────────────────────
            // 4. POLYSACCHARIDES
            // ─────────────────────────────────────────────
            polysaccharides: {
                overview: "Long-chain polymers of monosaccharides joined by glycosidic bonds; classified as storage or structural",

                storagePolysaccharides: {
                    starch: {
                        monomer: "α-glucose",
                        components: {
                            amylose: {
                                structure: "Unbranched chain of α-glucose units joined by α(1→4) bonds",
                                shape: "Helical coil — due to α bonds causing chain to bend",
                                proportion: "~20–30% of starch",
                                iodineTest: "Stains dark blue-black with iodine — iodine fits inside the helix"
                            },
                            amylopectin: {
                                structure: "Branched chain — α(1→4) bonds in the main chain; α(1→6) bonds at branch points every 24–30 glucose units",
                                proportion: "~70–80% of starch",
                                iodineTest: "Stains reddish-brown (less intense than amylose)"
                            }
                        },
                        functions: ["Energy storage in plants", "Found in chloroplasts and amyloplasts"],
                        properties: ["Insoluble in water — osmotically inert (ideal for storage)", "Compact — large amount of energy in small space"],
                        digestion: "Salivary and pancreatic amylase hydrolyse α(1→4) bonds → maltose and dextrins"
                    },
                    glycogen: {
                        monomer: "α-glucose",
                        structure: "Highly branched — α(1→4) main chain; α(1→6) branches every 8–12 glucose units (more frequent than starch)",
                        location: ["Liver (glycogen store regulates blood glucose)", "Muscle (local energy reserve for contraction)"],
                        functions: ["Animal energy storage"],
                        properties: [
                            "More branched than amylopectin → more free ends → faster enzymatic mobilisation",
                            "Insoluble — osmotically inert"
                        ],
                        hydrolysis: "Glycogen phosphorylase cleaves terminal glucose units as glucose-1-phosphate"
                    }
                },

                structuralPolysaccharides: {
                    cellulose: {
                        monomer: "β-glucose",
                        bond: "β(1→4) glycosidic bonds",
                        structure: {
                            chainGeometry: "Straight, unbranched chains — β bonds cause alternating 180° flips of glucose units, creating a flat ribbon",
                            microfibrils: "Parallel chains held together by extensive hydrogen bonds between -OH groups → microfibrils",
                            macrofibrils: "Microfibrils bundled into macrofibrils → plant cell wall"
                        },
                        functions: ["Structural component of plant cell walls", "Provides tensile strength and rigidity"],
                        properties: ["Insoluble", "Cannot be digested by most animals — lack cellulase"],
                        dietaryFibre: "Cellulose provides dietary fibre; aids gut motility",
                        exceptions: "Cellulose-digesting microorganisms in ruminants and termites produce cellulase"
                    },
                    chitin: {
                        monomer: "N-acetylglucosamine (a modified glucose with an acetyl-amino group at C2)",
                        bond: "β(1→4) glycosidic bonds",
                        structure: "Similar to cellulose — straight chains forming rigid sheets via hydrogen bonding",
                        functions: ["Structural component of fungal cell walls", "Exoskeleton of arthropods (insects, crustaceans, spiders)"],
                        properties: ["Tough", "Lightweight", "Resistant to degradation"]
                    },
                    peptidoglycan: {
                        composition: "Polysaccharide chains (N-acetylglucosamine + N-acetylmuramic acid) cross-linked by short peptide bridges",
                        function: "Structural component of bacterial cell walls",
                        significance: "Target of penicillin (inhibits cross-linking enzyme transpeptidase)"
                    }
                },

                comparisonOfPolysaccharides: {
                    table: [
                        { molecule: "Starch (amylose)", monomer: "α-glucose", bonds: "α(1→4)", branching: "None", function: "Energy storage (plants)" },
                        { molecule: "Starch (amylopectin)", monomer: "α-glucose", bonds: "α(1→4) + α(1→6)", branching: "Every 24–30 units", function: "Energy storage (plants)" },
                        { molecule: "Glycogen", monomer: "α-glucose", bonds: "α(1→4) + α(1→6)", branching: "Every 8–12 units", function: "Energy storage (animals)" },
                        { molecule: "Cellulose", monomer: "β-glucose", bonds: "β(1→4)", branching: "None", function: "Structural (plant cell wall)" },
                        { molecule: "Chitin", monomer: "N-acetylglucosamine", bonds: "β(1→4)", branching: "None", function: "Structural (exoskeleton, fungal wall)" }
                    ]
                }
            },

            // ─────────────────────────────────────────────
            // 5. GLYCOSIDIC BOND CHEMISTRY
            // ─────────────────────────────────────────────
            glycosidicBondChemistry: {
                overview: "Detailed chemistry of condensation and hydrolysis reactions forming/breaking glycosidic bonds",

                condensationReaction: {
                    definition: "A reaction between two molecules in which a small molecule (water) is released",
                    mechanism: [
                        "1. -OH on anomeric carbon of first sugar aligns with -OH on carbon of second sugar",
                        "2. H⁺ catalyst (or enzyme) facilitates the reaction",
                        "3. Water is eliminated: H from one -OH + OH from the other",
                        "4. Covalent C-O-C glycosidic bond forms"
                    ],
                    energetics: "Condensation requires energy input (endergonic in cells — driven by activated intermediates such as UDP-glucose)"
                },

                hydrolysis: {
                    definition: "Cleavage of a glycosidic bond by addition of water",
                    equation: "Glycosidic bond + H₂O → two free sugars (with -OH groups restored)",
                    conditions: [
                        "Enzymatic: specific glycosidases (e.g. amylase, lactase, maltase) — highly specific to bond type and configuration",
                        "Acid hydrolysis: dilute HCl + heat — non-specific, hydrolyses all glycosidic bonds"
                    ],
                    biologicalImportance: "Digestion of dietary carbohydrates; glycogen mobilisation during fasting/exercise"
                },

                specificity: {
                    alphaGlycosidasesVsBeta: "α-glycosidases cleave α-glycosidic bonds; β-glycosidases cleave β-glycosidic bonds — humans lack β-glycosidases for cellulose",
                    clinicalRelevance: "Lactase persistence/non-persistence varies by population — explains lactose intolerance"
                }
            },

            // ─────────────────────────────────────────────
            // 6. CARBOHYDRATE TESTS & IDENTIFICATION
            // ─────────────────────────────────────────────
            carbohydrateTests: {
                overview: "Laboratory techniques to detect and distinguish carbohydrates",

                benedictTest: {
                    reagent: "Benedict's solution — alkaline copper(II) sulfate (Cu²⁺)",
                    principle: "Reducing sugars donate electrons to Cu²⁺ → reduced to Cu⁺ (precipitate)",
                    procedure: ["Add 1 cm³ Benedict's reagent to sample", "Heat in water bath (80°C, 5 min)", "Observe colour change"],
                    results: {
                        negative: "Blue — no reducing sugar",
                        positive: "Green → Yellow → Orange → Brick red — increasing concentration"
                    },
                    detectableBy: ["Glucose", "Fructose", "Galactose", "Maltose", "Lactose"],
                    notDetectable: "Sucrose (non-reducing) — must hydrolyse first",
                    semiquantitative: "Colour intensity indicates approximate concentration"
                },

                iodineTest: {
                    reagent: "Iodine solution (I₂ in KI)",
                    principle: "Iodine molecules fit inside the helical coil of amylose → charge-transfer complex formed",
                    procedure: "Add 2 drops iodine solution to sample",
                    results: {
                        negative: "Yellow-brown (iodine colour) — no starch",
                        positive: "Blue-black — starch present"
                    },
                    note: "Amylopectin gives reddish-brown (less intense). Glycogen gives similar reddish-brown. Does not detect sugars or cellulose."
                },

                barfoedTest: {
                    purpose: "Distinguishes monosaccharides from disaccharides",
                    principle: "Monosaccharides reduce copper more quickly than disaccharides under acidic conditions",
                    result: "Red precipitate within 2 min → monosaccharide; after 10 min → disaccharide"
                },

                hydrolysisAndRetesting: {
                    procedure: [
                        "1. Take sample",
                        "2. Add dilute HCl, boil for 5 minutes (acid hydrolysis)",
                        "3. Neutralise with NaHCO₃",
                        "4. Test with Benedict's"
                    ],
                    application: "To test for sucrose or starch — confirm by positive Benedict's after hydrolysis"
                },

                chromatoraphy: {
                    thinLayerChromatography: {
                        principle: "Different sugars move different distances up the stationary phase depending on polarity",
                        application: "Identify and separate monosaccharides in a mixture",
                        rfValue: "Rf = distance moved by spot / distance moved by solvent front"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 7. CARBOHYDRATES IN CELL MEMBRANES
            // ─────────────────────────────────────────────
            carbohydratesInMembranes: {
                overview: "Short carbohydrate chains attached to proteins or lipids on the cell surface",

                glycoproteins: {
                    definition: "Proteins with short, branched oligosaccharide chains covalently attached",
                    location: "Extracellular surface of plasma membrane; secreted proteins",
                    functions: [
                        "Cell-cell recognition and adhesion",
                        "Blood group antigens (ABO system — differ in terminal sugar residue)",
                        "Receptor proteins for hormones and pathogens",
                        "Immune system recognition of self vs non-self"
                    ],
                    examples: ["MHC molecules", "Antibodies (IgG is a glycoprotein)", "Mucins (mucus components)"]
                },

                glycolipids: {
                    definition: "Lipids with oligosaccharide chains attached to the head group",
                    location: "Outer leaflet of plasma membrane",
                    functions: [
                        "Cell recognition",
                        "Tissue-specific antigens",
                        "Pathogen binding sites (e.g. cholera toxin binds GM1 ganglioside)"
                    ],
                    examples: ["Cerebrosides", "Gangliosides (abundant in neural tissue)"]
                },

                glycocalyx: {
                    definition: "The carbohydrate-rich layer on the exterior surface of cells, formed by glycoproteins and glycolipids",
                    functions: [
                        "Protection against mechanical damage",
                        "Cell-cell adhesion",
                        "Immune recognition",
                        "Receptor for viruses and bacteria",
                        "Filtration in kidney glomerulus"
                    ],
                    thickness: "Varies from ~20 nm (red blood cells) to several micrometres (gut epithelium)"
                }
            },

            // ─────────────────────────────────────────────
            // 8. CARBOHYDRATE METABOLISM — OVERVIEW
            // ─────────────────────────────────────────────
            carbohydrateMetabolism: {
                overview: "Key metabolic pathways involving carbohydrate synthesis and breakdown",

                glycolysis: {
                    definition: "The breakdown of glucose (6C) to two pyruvate (3C) molecules in the cytoplasm",
                    location: "Cytoplasm (cytosol)",
                    net_yield: "2 ATP, 2 NADH, 2 pyruvate per glucose",
                    stages: [
                        "Energy investment phase: 2 ATP consumed to phosphorylate glucose",
                        "Cleavage: fructose-1,6-bisphosphate split into 2 triose phosphates",
                        "Energy payoff: 4 ATP and 2 NADH generated"
                    ],
                    connection: "Pyruvate enters aerobic respiration (Krebs cycle) or fermentation"
                },

                gluconeogenesis: {
                    definition: "Synthesis of glucose from non-carbohydrate precursors (pyruvate, lactate, glycerol, amino acids)",
                    location: "Liver (primarily); kidneys (during prolonged fasting)",
                    trigger: "Low blood glucose; glucagon signalling",
                    notSimpleReversal: "Uses different enzymes than glycolysis at irreversible steps"
                },

                glycogenesis: {
                    definition: "Synthesis of glycogen from glucose",
                    trigger: "High blood glucose; insulin signalling",
                    keyEnzyme: "Glycogen synthase — adds glucose units via α(1→4) bonds; branching enzyme creates α(1→6) branches",
                    activatedMonomer: "UDP-glucose (glucose linked to uridine diphosphate) — activated form for polymerisation"
                },

                glycogenolysis: {
                    definition: "Breakdown of glycogen to release glucose",
                    trigger: "Low blood glucose; glucagon (liver) or adrenaline (liver + muscle)",
                    keyEnzyme: "Glycogen phosphorylase — cleaves terminal glucose as glucose-1-phosphate",
                    product: "Glucose released into blood from liver; glucose-6-phosphate used in muscle"
                },

                pentosePhosphatePathway: {
                    definition: "Alternative glucose oxidation pathway producing NADPH and ribose-5-phosphate",
                    location: "Cytoplasm",
                    products: ["NADPH — for reductive biosynthesis (fatty acids) and antioxidant defence", "Ribose-5-phosphate — for nucleotide synthesis"],
                    significance: "Not primarily for ATP generation; critical for rapidly dividing cells and erythrocytes"
                },

                photosynthesis: {
                    calvinCycle: {
                        summary: "CO₂ fixed into G3P (glyceraldehyde-3-phosphate) using ATP and NADPH from light reactions",
                        glucoseSynthesis: "Two G3P molecules combine to form glucose-6-phosphate → glucose",
                        connection: "Carbohydrate synthesis is the primary output of photosynthetic carbon fixation"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 9. DIETARY CARBOHYDRATES & DIGESTION
            // ─────────────────────────────────────────────
            digestionAndAbsorption: {
                overview: "Enzymatic digestion of dietary carbohydrates to absorbable monosaccharides",

                digestionSequence: {
                    mouth: {
                        enzyme: "Salivary amylase (α-amylase)",
                        action: "Hydrolyses starch α(1→4) bonds → maltose, maltotriose, and dextrins",
                        pH: "Optimal pH ~7 (neutral)",
                        limitation: "Brief contact time; enzyme inactivated by stomach acid"
                    },
                    stomach: {
                        carbohydrateDigestion: "Minimal — no carbohydrate-digesting enzymes; salivary amylase inactivated",
                        role: "Mechanical churning continues breakdown of food particles"
                    },
                    smallIntestine: {
                        pancreaticAmylase: "Continues starch hydrolysis → maltose and limit dextrins",
                        brushBorderEnzymes: [
                            "Maltase → maltose → 2 glucose",
                            "Sucrase → sucrose → glucose + fructose",
                            "Lactase → lactose → glucose + galactose",
                            "Dextrinase → α(1→6) branch points → glucose"
                        ],
                        absorption: "Monosaccharides absorbed by enterocytes via specific transporters"
                    }
                },

                absorptionMechanisms: {
                    SGLT1: {
                        type: "Secondary active transport (sodium-glucose linked transporter)",
                        substrates: "Glucose and galactose",
                        mechanism: "Co-transported with Na⁺ down its electrochemical gradient (Na⁺ gradient maintained by Na⁺/K⁺-ATPase)",
                        location: "Apical membrane of enterocytes"
                    },
                    GLUT5: {
                        type: "Facilitated diffusion",
                        substrate: "Fructose only",
                        location: "Apical membrane of enterocytes"
                    },
                    GLUT2: {
                        type: "Facilitated diffusion",
                        substrates: "Glucose, galactose, fructose (exits enterocyte into blood)",
                        location: "Basolateral membrane of enterocytes"
                    }
                },

                bloodGlucoseRegulation: {
                    normalRange: "4–6 mmol/L (fasting)",
                    highGlucose: {
                        response: "Pancreatic β-cells release insulin",
                        effects: ["GLUT4 insertion into muscle/adipose membranes → glucose uptake", "Glycogenesis in liver and muscle", "Inhibition of gluconeogenesis"]
                    },
                    lowGlucose: {
                        response: "Pancreatic α-cells release glucagon",
                        effects: ["Glycogenolysis in liver", "Gluconeogenesis", "Release of glucose into blood"]
                    },
                    diabetes: {
                        type1: "Autoimmune destruction of β-cells → no insulin produced → hyperglycaemia",
                        type2: "Insulin resistance → cells do not respond normally → eventual β-cell failure"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 10. CARBOHYDRATES IN SIGNALLING
            // ─────────────────────────────────────────────
            carbohydratesInSignalling: {
                overview: "Roles of carbohydrates in cell communication and molecular recognition",

                bloodGroups: {
                    ABOSystem: {
                        basis: "Variation in terminal sugar residue of glycolipids/glycoproteins on red blood cell surface",
                        typeA: "N-acetylgalactosamine (GalNAc) is terminal sugar",
                        typeB: "Galactose is terminal sugar",
                        typeAB: "Both modifications present",
                        typeO: "Neither modification — H antigen only (fucose-terminated)"
                    },
                    significance: "Blood group mismatches cause immune rejection — antibodies against foreign sugar antigens"
                },

                selectins: {
                    definition: "Lectin-like adhesion proteins that recognise specific carbohydrate ligands on cell surfaces",
                    function: "Mediate rolling and adhesion of white blood cells (leukocytes) to blood vessel walls during inflammation",
                    ligand: "Sialyl-Lewis X — a specific carbohydrate structure on leukocyte surfaces"
                },

                lectins: {
                    definition: "Proteins that specifically and reversibly bind carbohydrates",
                    functions: [
                        "Cell adhesion and recognition",
                        "Pathogen binding (viruses, bacteria use lectins to attach to host cells)",
                        "Immune defence",
                        "Seed storage proteins in plants"
                    ],
                    examples: ["Concanavalin A (binds glucose/mannose)", "Galectin-1 (binds galactose)"]
                }
            },

            // ─────────────────────────────────────────────
            // 11. CARBOHYDRATES IN DISEASE
            // ─────────────────────────────────────────────
            carbohydratesInDisease: {
                overview: "Pathological conditions involving defects in carbohydrate metabolism or structure",

                diabetes: {
                    type1: {
                        mechanism: "Autoimmune destruction of pancreatic β-cells → insulin deficiency → chronic hyperglycaemia",
                        symptoms: ["Polyuria", "Polydipsia", "Weight loss", "Ketoacidosis"],
                        treatment: "Exogenous insulin"
                    },
                    type2: {
                        mechanism: "Peripheral insulin resistance + progressive β-cell dysfunction",
                        riskFactors: ["Obesity", "Physical inactivity", "Diet high in refined carbohydrates"],
                        treatment: "Lifestyle modification; metformin; later insulin"
                    },
                    glycatedHaemoglobin: "HbA1c — haemoglobin with glucose non-enzymatically attached; used to monitor long-term blood glucose control"
                },

                glycogenStorageDiseases: {
                    definition: "Inherited enzyme deficiencies causing abnormal glycogen accumulation or inability to mobilise glycogen",
                    examples: [
                        "Von Gierke's disease (Type I): Glucose-6-phosphatase deficiency → cannot release glucose from liver",
                        "Pompe's disease (Type II): Lysosomal α-glucosidase deficiency → glycogen accumulates in lysosomes → cardiomyopathy",
                        "McArdle's disease (Type V): Muscle glycogen phosphorylase deficiency → exercise intolerance"
                    ]
                },

                lactoseIntolerance: {
                    mechanism: "Reduced lactase expression after weaning → undigested lactose reaches colon → bacterial fermentation → gas, bloating, diarrhoea",
                    prevalence: "Worldwide majority of adults; lower in Northern European populations (lactase persistence allele)",
                    management: "Lactase enzyme supplements; avoid dairy"
                },

                galactosaemia: {
                    mechanism: "Deficiency of galactose-1-phosphate uridylyltransferase → galactose-1-phosphate accumulates → toxic to liver, brain, eyes",
                    treatment: "Galactose-free diet from birth"
                }
            }
        },

        // ─────────────────────────────────────────────────
        // CROSS-CUTTING CONCEPTS
        // ─────────────────────────────────────────────────
        crossCuttingConcepts: {
            structureFunctionRelationship: [
                "α-glucose → α(1→4) bonds → helical chains → compact energy storage (starch/glycogen)",
                "β-glucose → β(1→4) bonds → straight chains → rigid structural fibres (cellulose)",
                "Multiple -OH groups → hydrogen bonding → water solubility of monosaccharides and disaccharides",
                "High branching in glycogen → many free ends → rapid enzymatic mobilisation"
            ],
            commonErrors: [
                "Confusing α and β glucose — they have the same molecular formula but different anomeric -OH positions",
                "Stating cellulose and starch have the same monomer (both use glucose, but different anomers)",
                "Forgetting that condensation removes water and hydrolysis adds water",
                "Claiming all polysaccharides are insoluble — some are soluble (e.g. certain plant gums)",
                "Confusing glycosidic bond number with carbon number (α(1→4) refers to C1–C4 linkage)",
                "Stating sucrose is a reducing sugar — it is not, because both anomeric carbons are involved in bonding"
            ],
            curriculumProgression: {
                junior: "Definitions, elements, food sources, simple tests (Benedict's, iodine), energy role",
                intermediate: "Mono/di/polysaccharide structures, glycosidic bonds, condensation/hydrolysis, α vs β glucose",
                senior: "Membrane carbohydrates, detailed metabolism (glycolysis, glycogen synthesis/breakdown), signalling, disease"
            }
        },

        // ─────────────────────────────────────────────────
        // EXAMPLES (WORKED PROBLEMS)
        // ─────────────────────────────────────────────────
        examples: [
            {
                scenario: "Explain why cellulose is a good structural molecule but starch is a good storage molecule",
                solution: [
                    "1. Both are polymers of glucose, but cellulose uses β-glucose and starch uses α-glucose",
                    "2. β(1→4) bonds in cellulose produce straight chains that align in parallel, forming hydrogen bonds → rigid, strong microfibrils (structural)",
                    "3. α(1→4) bonds in starch produce helical chains → compact, insoluble, osmotically inert (ideal for storage)",
                    "4. Starch can be rapidly hydrolysed by amylase when energy is needed; cellulose resists hydrolysis (humans lack cellulase)"
                ]
            },
            {
                scenario: "A student tests an unknown solution with Benedict's reagent — result is negative. After adding dilute HCl, boiling, neutralising, and retesting with Benedict's, the result is positive. What does this indicate?",
                solution: [
                    "1. Negative initial Benedict's → no free reducing sugar in original sample",
                    "2. Positive after acid hydrolysis → acid broke glycosidic bonds → reducing sugars released",
                    "3. Conclusion: original sample contained a non-reducing sugar (most likely sucrose) or polysaccharide (e.g. starch)",
                    "4. If iodine test on original was also negative, sucrose is the most likely candidate"
                ]
            },
            {
                scenario: "Explain how the structure of glycogen is related to its function",
                solution: [
                    "1. Glycogen is highly branched (α(1→6) branches every 8–12 units)",
                    "2. Branching creates many free non-reducing ends",
                    "3. Glycogen phosphorylase works simultaneously at all free ends → rapid glucose release when energy demand is high (e.g. exercise, fasting)",
                    "4. Insolubility means it does not affect osmotic balance of cell",
                    "5. Compact structure allows large amounts of glucose to be stored in limited space"
                ]
            },
            {
                scenario: "Why do humans develop lactose intolerance but not starch intolerance?",
                solution: [
                    "1. Starch is digested by amylase (salivary and pancreatic) and maltase — enzymes that are constitutively expressed throughout life",
                    "2. Lactase expression typically decreases after weaning in most human populations",
                    "3. Without lactase, lactose is not hydrolysed in the small intestine",
                    "4. Undigested lactose passes to the large intestine where bacteria ferment it → gas (CO₂, H₂), lactic acid → bloating, cramps, diarrhoea"
                ]
            }
        ],

        // ─────────────────────────────────────────────────
        // KEY TAKEAWAYS
        // ─────────────────────────────────────────────────
        keyTakeaways: [
            "Carbohydrates are C, H, O compounds with general formula (CH₂O)n",
            "Monosaccharides are the monomers; hexoses (especially glucose) are most biologically important",
            "α-glucose and β-glucose are anomers — differ only at C1 -OH orientation but produce completely different polymers",
            "Disaccharides and polysaccharides are formed by condensation reactions; hydrolysed by specific glycosidases",
            "Storage polysaccharides (starch, glycogen) use α-glycosidic bonds; structural polysaccharides (cellulose, chitin) use β-glycosidic bonds",
            "Branching in glycogen allows rapid enzymatic mobilisation of glucose",
            "Carbohydrates on cell surfaces (glycoproteins, glycolipids) function in cell recognition, adhesion, and immune signalling",
            "Blood glucose is tightly regulated by insulin (lowers) and glucagon (raises)",
            "Benedict's test detects reducing sugars; iodine test detects starch",
            "Carbohydrate metabolism disorders (diabetes, glycogen storage diseases, galactosaemia) illustrate the clinical significance of these pathways"
        ]
    };

    return content;
}

handleLipids(problem) {
    const content = {
        topic: "Lipids",
        category: "biomolecules",
        summary: "Lipids are a diverse group of hydrophobic or amphiphilic organic molecules defined by their insolubility in water and solubility in non-polar solvents. They include fats, oils, phospholipids, steroids, and waxes. Lipids serve as long-term energy stores, membrane components, signalling molecules, thermal insulation, and protective coatings across all domains of life.",

        components: {

            // ─────────────────────────────────────────────
            // 1. FOUNDATIONS
            // ─────────────────────────────────────────────
            foundations: {
                overview: "Core vocabulary, properties, and classification principles for lipids",

                definition: {
                    statement: "Lipids are a chemically diverse group of molecules unified by their solubility in non-polar organic solvents (e.g. ether, chloroform) and insolubility in water",
                    notAPolymer: "Unlike proteins and nucleic acids, most lipids are NOT polymers — they do not consist of repeating monomer units joined by a single bond type",
                    exception: "Triacylglycerols are assembled from glycerol + three fatty acids via ester bonds",
                    elements: "Primarily C, H, O — much less oxygen relative to carbohydrates; some contain N and P (e.g. phospholipids)"
                },

                hydrophobicity: {
                    reason: "Lipids are dominated by non-polar C–H bonds, which do not interact favourably with polar water molecules",
                    amphiphilic: {
                        definition: "Molecules with both a hydrophilic (water-loving) head and a hydrophobic (water-fearing) tail",
                        examples: ["Phospholipids", "Soaps and detergents"],
                        consequence: "Amphiphilic lipids spontaneously form bilayers, micelles, and liposomes in aqueous environments"
                    },
                    hydrophilicHead: "Polar or charged group — interacts with water",
                    hydrophobicTail: "Non-polar fatty acid chains — repelled by water"
                },

                fattyAcids: {
                    definition: "Long-chain carboxylic acids (usually 4–28 carbons) that are the building blocks of most complex lipids",
                    generalFormula: "CH₃-(CH₂)n-COOH",
                    carbonNumbering: "Carbons numbered from the carboxyl end (C1 = COOH end); or Greek letters α, β… from carboxyl; or omega (ω) from the methyl end",

                    saturatedFattyAcids: {
                        definition: "No C=C double bonds; maximum hydrogen atoms; all C–C single bonds",
                        shape: "Linear, can pack tightly → solid at room temperature",
                        examples: [
                            "Palmitic acid: C16:0 — 16 carbons, 0 double bonds",
                            "Stearic acid: C18:0 — 18 carbons, 0 double bonds",
                            "Lauric acid: C12:0"
                        ],
                        sources: ["Animal fats", "Dairy", "Coconut oil", "Palm oil"]
                    },

                    unsaturatedFattyAcids: {
                        definition: "One or more C=C double bonds",
                        monounsaturated: {
                            definition: "One double bond",
                            example: "Oleic acid: C18:1 (Δ9) — double bond between C9 and C10",
                            shape: "One kink in chain",
                            sources: ["Olive oil", "Avocado", "Most nuts"]
                        },
                        polyunsaturated: {
                            definition: "Two or more double bonds",
                            examples: [
                                "Linoleic acid: C18:2 (ω-6) — essential fatty acid",
                                "Alpha-linolenic acid: C18:3 (ω-3) — essential fatty acid",
                                "Arachidonic acid: C20:4 (ω-6)"
                            ],
                            sources: ["Plant oils", "Fish oils", "Nuts and seeds"]
                        },
                        cisVsTrans: {
                            cis: "Hydrogen atoms on the SAME side of the double bond → introduces a kink → lower melting point → liquid at room temperature",
                            trans: "Hydrogen atoms on OPPOSITE sides → more linear → higher melting point → behaves more like saturated fat",
                            naturalVsArtificial: "Most natural unsaturated fats are cis; trans fats are produced industrially by partial hydrogenation or occur naturally in small amounts in ruminants",
                            healthImplication: "Trans fats raise LDL cholesterol and lower HDL → increased cardiovascular disease risk"
                        }
                    },

                    essentialFattyAcids: {
                        definition: "Fatty acids that cannot be synthesised by the human body and must be obtained from diet",
                        list: ["Linoleic acid (ω-6)", "Alpha-linolenic acid (ω-3)"],
                        deficiencyEffects: "Skin disorders, poor wound healing, reproductive failure, neural development impairment"
                    }
                },

                classificationOverview: {
                    byStructure: [
                        "Simple lipids: fats and waxes (esters of fatty acids with alcohols)",
                        "Complex lipids: phospholipids, glycolipids (contain non-lipid components)",
                        "Derived lipids: steroids, terpenes, fat-soluble vitamins (derived from simple/complex lipids)"
                    ],
                    byFunction: [
                        "Energy storage: triacylglycerols",
                        "Membrane structure: phospholipids, cholesterol",
                        "Signalling: steroid hormones, eicosanoids",
                        "Insulation: subcutaneous fat, myelin",
                        "Protection: waxes, surface lipids"
                    ]
                }
            },

            // ─────────────────────────────────────────────
            // 2. TRIACYLGLYCEROLS (TRIGLYCERIDES)
            // ─────────────────────────────────────────────
            triacylglycerols: {
                overview: "The major storage form of lipid energy in animals and plants",

                structure: {
                    glycerol: {
                        description: "A 3-carbon alcohol with three -OH groups (one on each carbon)",
                        formula: "C₃H₈O₃ (HOCH₂-CHOH-CH₂OH)",
                        role: "The backbone of all glycerolipids"
                    },
                    esterBonds: {
                        definition: "Covalent bond formed between the -OH of glycerol and the -COOH of a fatty acid, releasing water",
                        reaction: "-OH + HOOC- → -O-CO- + H₂O (condensation/esterification)",
                        number: "Three ester bonds in a triacylglycerol (one per glycerol -OH)"
                    },
                    assembly: "Glycerol + 3 fatty acids → triacylglycerol + 3 H₂O (3 condensation reactions)",
                    fattyAcidVariation: "The three fatty acid chains can be the same (simple TAG) or different (mixed TAG)"
                },

                fatsVsOils: {
                    fats: {
                        physicalState: "Solid at room temperature",
                        cause: "Predominantly saturated fatty acids → linear chains pack tightly → strong van der Waals forces → high melting point",
                        sources: "Animals (butter, lard, suet)"
                    },
                    oils: {
                        physicalState: "Liquid at room temperature",
                        cause: "Predominantly unsaturated fatty acids → cis double bonds create kinks → cannot pack tightly → weak van der Waals forces → low melting point",
                        sources: "Plants and fish (olive oil, sunflower oil, cod liver oil)"
                    },
                    hydrogenation: "Industrial addition of H₂ across double bonds (with catalyst) → converts oils to solid fats (e.g. margarine) → produces some trans fats as a side product"
                },

                functions: {
                    energyStorage: {
                        calorificValue: "~38 kJ/g — more than twice that of carbohydrates (~17 kJ/g)",
                        reason: "Highly reduced C–H bonds in fatty acids → more electrons available for oxidative phosphorylation",
                        location: ["Adipose tissue (subcutaneous and visceral)", "Liver", "Seeds (plants)"],
                        advantages: [
                            "Insoluble → does not increase osmotic pressure of cells",
                            "Compact — stores more energy per gram than carbohydrates or protein",
                            "Can be stored in unlimited quantities (unlike glycogen)"
                        ]
                    },
                    thermalInsulation: "Subcutaneous adipose layer reduces heat loss in endotherms; particularly thick in marine mammals (blubber)",
                    mechanical: "Adipose tissue cushions vital organs (kidneys, eyeballs) against physical shock",
                    metabolicWater: "Oxidation of fats produces more metabolic water per gram than carbohydrates — important in desert animals (e.g. camels)"
                },

                hydrolysisOfTAGs: {
                    enzymatic: {
                        enzyme: "Lipase",
                        location: "Stomach (gastric lipase), small intestine (pancreatic lipase)",
                        products: "Fatty acids + glycerol (+ intermediate mono- and diacylglycerols)",
                        requirement: "Emulsification by bile salts (increases surface area)"
                    },
                    chemical: {
                        saponification: "Alkaline hydrolysis of ester bonds using NaOH → fatty acid salts (soaps) + glycerol",
                        application: "Soap-making industry"
                    },
                    biological: {
                        hormoneStimulated: "Adrenaline and glucagon activate hormone-sensitive lipase in adipocytes → TAGs hydrolysed → fatty acids released into blood → bound to albumin for transport"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 3. PHOSPHOLIPIDS
            // ─────────────────────────────────────────────
            phospholipids: {
                overview: "Amphiphilic lipids that form the structural basis of all biological membranes",

                structure: {
                    glycerophospholipids: {
                        backbone: "Glycerol molecule",
                        position1and2: "Two fatty acid chains attached via ester bonds (sn-1 usually saturated; sn-2 usually unsaturated)",
                        position3: "Phosphate group esterified to the third -OH of glycerol",
                        headGroup: "Polar molecule attached to the phosphate: choline, ethanolamine, serine, or inositol",
                        charge: "Phosphate group is negatively charged at physiological pH → hydrophilic head"
                    },
                    sphingomyelin: {
                        backbone: "Sphingosine (long-chain amino alcohol) instead of glycerol",
                        composition: "Sphingosine + fatty acid (ceramide) + phosphocholine head group",
                        location: "Abundant in myelin sheaths and neuronal membranes"
                    },
                    overallStructure: {
                        hydrophilicHead: "Phosphate + head group — faces aqueous environment",
                        hydrophobicTails: "Two fatty acid chains — pack together away from water"
                    }
                },

                bilayerFormation: {
                    spontaneous: "Phospholipids spontaneously form bilayers in aqueous environments — thermodynamically driven by hydrophobic effect",
                    hydrophobicEffect: "Non-polar tails associating with each other minimises disruption of water hydrogen-bond network (entropy-driven)",
                    bilayerStructure: "Two leaflets, each a monolayer with tails pointing inward, heads facing outward toward water",
                    selfSealing: "Bilayers are self-sealing — a gap creates energetically unfavourable exposure of tails to water → immediately closes",
                    closedCompartments: "Bilayers spontaneously form closed spherical vesicles — the basis of all cells and organelles"
                },

                membraneFluidityRegulation: {
                    fluidityDefinition: "The ability of membrane components to move laterally within the bilayer",
                    factorsIncreasing: [
                        "Shorter fatty acid chains → less van der Waals surface area → lower melting point",
                        "More unsaturated (cis) fatty acids → kinks prevent tight packing → more fluid",
                        "Higher temperature → more kinetic energy"
                    ],
                    factorsDecreasing: [
                        "Longer, saturated fatty acid chains → tighter packing → more rigid",
                        "Lower temperature",
                        "Higher cholesterol at moderate temperatures (cholesterol restricts phospholipid movement)"
                    ],
                    cholesterolDualRole: "At low temperatures, cholesterol prevents tight packing → prevents solidification; at high temperatures, it restricts movement → reduces excess fluidity",
                    homeoviscousAdaptation: "Organisms adjust membrane fatty acid composition in response to temperature to maintain optimal fluidity"
                },

                keyPhospholipids: {
                    phosphatidylcholine: {
                        abbreviation: "PC",
                        headGroup: "Choline",
                        location: "Most abundant phospholipid in eukaryotic membranes; outer leaflet",
                        roles: ["Structural component of membranes", "Lung surfactant (DPPC — dipalmitoylphosphatidylcholine reduces alveolar surface tension)"]
                    },
                    phosphatidylserine: {
                        abbreviation: "PS",
                        headGroup: "Serine",
                        location: "Inner leaflet (cytoplasmic face) of plasma membrane",
                        roles: ["Apoptosis signal — flips to outer leaflet to signal phagocytes", "Activates protein kinase C"]
                    },
                    phosphatidylinositol: {
                        abbreviation: "PI",
                        headGroup: "Inositol",
                        roles: ["Precursor of second messengers PIP₂ → IP₃ + DAG (in phospholipase C signalling)", "Membrane anchors (GPI anchors for certain cell surface proteins)"]
                    },
                    cardiolipin: {
                        structure: "Two phosphatidic acid units linked by glycerol — four fatty acid chains",
                        location: "Inner mitochondrial membrane",
                        roles: ["Stabilises electron transport chain complexes", "Involved in apoptosis signalling"]
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 4. STEROIDS
            // ─────────────────────────────────────────────
            steroids: {
                overview: "Lipids based on a four-ring carbon skeleton (sterane nucleus); diverse functions from membrane structure to hormones",

                steraneSkeleton: {
                    description: "Three cyclohexane rings (A, B, C) and one cyclopentane ring (D) fused together",
                    carbonCount: "17-carbon nucleus; side chains add more carbons",
                    functionalDiversity: "Different functional groups attached to the nucleus create diverse steroid molecules"
                },

                cholesterol: {
                    structure: {
                        rings: "Four-ring sterane nucleus",
                        hydroxyl: "-OH group at C3 (hydrophilic end)",
                        tail: "Hydrocarbon side chain at C17 (hydrophobic)",
                        overall: "Amphiphilic — flat rigid molecule"
                    },
                    sources: "Dietary (animal products) + endogenous synthesis (liver; 800–1000 mg/day)",
                    functions: {
                        membrane: [
                            "Regulates membrane fluidity — inserts between phospholipid tails",
                            "Stabilises lipid bilayer at body temperature",
                            "Creates lipid rafts — specialised microdomains enriched in cholesterol and sphingomyelin"
                        ],
                        precursor: [
                            "Precursor for all steroid hormones",
                            "Precursor for bile acids",
                            "Precursor for vitamin D₃ (cholecalciferol)"
                        ]
                    },
                    transport: {
                        LDL: "Low-density lipoprotein — transports cholesterol TO tissues (from liver); high LDL associated with atherosclerosis",
                        HDL: "High-density lipoprotein — transports cholesterol FROM tissues back to liver (reverse cholesterol transport); protective"
                    }
                },

                steroidHormones: {
                    overview: "Cholesterol-derived signalling molecules; lipid-soluble → can cross plasma membrane → bind intracellular receptors",
                    mechanism: [
                        "1. Steroid hormone diffuses across plasma membrane",
                        "2. Binds cytoplasmic or nuclear receptor",
                        "3. Hormone-receptor complex enters nucleus (if not already there)",
                        "4. Binds hormone response elements (HREs) in DNA",
                        "5. Alters gene transcription → changes protein synthesis"
                    ],
                    classes: {
                        glucocorticoids: {
                            example: "Cortisol",
                            source: "Adrenal cortex (zona fasciculata)",
                            functions: ["Anti-inflammatory", "Promotes gluconeogenesis", "Suppresses immune response", "Stress response"],
                            secondaryEffects: "Chronic elevation → Cushing's syndrome (obesity, hypertension, hyperglycaemia)"
                        },
                        mineralocorticoids: {
                            example: "Aldosterone",
                            source: "Adrenal cortex (zona glomerulosa)",
                            functions: "Increases Na⁺ reabsorption and K⁺ secretion in kidney tubules → increases blood pressure"
                        },
                        androgens: {
                            examples: "Testosterone, DHEA",
                            source: "Testes, adrenal cortex",
                            functions: ["Male secondary sexual characteristics", "Anabolic effects (muscle, bone)"]
                        },
                        oestrogens: {
                            examples: "Oestradiol",
                            source: "Ovaries, placenta",
                            functions: ["Female secondary sexual characteristics", "Menstrual cycle regulation", "Bone density maintenance"]
                        },
                        progestogens: {
                            example: "Progesterone",
                            source: "Corpus luteum, placenta",
                            functions: "Prepares uterus for implantation; maintains pregnancy"
                        }
                    }
                },

                bileAcids: {
                    synthesis: "Derived from cholesterol in the liver",
                    function: "Emulsify dietary fats in the small intestine — break large fat droplets into small micelles → increases surface area for lipase action",
                    recycling: "Enterohepatic circulation — bile acids reabsorbed in terminal ileum → returned to liver via portal vein",
                    conjugation: "Bile acids conjugated to glycine or taurine → bile salts (more water-soluble, better emulsifiers)"
                },

                vitaminD: {
                    synthesis: "7-dehydrocholesterol in skin + UV light → cholecalciferol (D₃) → hydroxylated in liver (25-OH-D₃) → activated in kidney (1,25-(OH)₂-D₃ = calcitriol)",
                    function: "Calcitriol acts as steroid hormone — promotes intestinal Ca²⁺ absorption, bone mineralisation, immune modulation",
                    deficiency: "Rickets (children), osteomalacia (adults)"
                }
            },

            // ─────────────────────────────────────────────
            // 5. WAXES
            // ─────────────────────────────────────────────
            waxes: {
                overview: "Long-chain esters of fatty acids and long-chain alcohols; highly hydrophobic protective coatings",

                structure: {
                    composition: "Long-chain fatty acid (C14–C36) + long-chain alcohol (C16–C36) joined by an ester bond",
                    difference: "Unlike TAGs — the alcohol is a long-chain fatty alcohol (not glycerol)",
                    properties: [
                        "Highly hydrophobic — no polar groups",
                        "Solid at room temperature — high melting point due to long straight chains and tight packing",
                        "Chemically unreactive — resistant to enzyme hydrolysis"
                    ]
                },

                functions: {
                    plantCuticle: {
                        description: "Waxy cuticle coats leaves, stems, and fruits in plants (primarily cutin + wax)",
                        functions: ["Prevents water loss by transpiration", "Barrier against pathogens and UV radiation", "Repels rain (hydrophobic surface)"],
                        examples: ["Carnauba wax from palm leaves", "Apple skin wax"]
                    },
                    animalIntegument: {
                        examples: [
                            "Earwax (cerumen) — traps dust and microorganisms in ear canal",
                            "Sebum (skin surface lipid mixture including waxes) — waterproofing and microbial protection",
                            "Feather wax in birds — waterproofing"
                        ]
                    },
                    insectExoskeleton: "Waxy layer on arthropod exoskeleton prevents desiccation on land",
                    beeswax: {
                        composition: "Myricyl palmitate and other wax esters + hydrocarbons",
                        function: "Honeycomb construction — stores honey and larvae"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 6. FAT-SOLUBLE VITAMINS
            // ─────────────────────────────────────────────
            fatSolubleVitamins: {
                overview: "Vitamins that are absorbed with dietary fat and stored in adipose tissue and liver",

                vitaminA: {
                    activeForm: "Retinol (alcohol form), retinal (aldehyde), retinoic acid",
                    source: "β-carotene (provitamin A from plants) converted in intestinal mucosa",
                    functions: ["Visual pigment (retinal + opsin = rhodopsin)", "Epithelial differentiation", "Immune function", "Embryonic development"],
                    deficiency: "Night blindness → complete blindness; xerophthalmia"
                },
                vitaminD: {
                    coveredUnder: "See steroids → vitaminD section above"
                },
                vitaminE: {
                    forms: "Tocopherols and tocotrienols (α-tocopherol most active)",
                    function: "Fat-soluble antioxidant — scavenges free radicals; protects polyunsaturated fatty acids in membranes from oxidation",
                    sources: "Plant oils, nuts, seeds, green leafy vegetables",
                    deficiency: "Rare in humans; haemolytic anaemia in premature infants"
                },
                vitaminK: {
                    forms: "K₁ (phylloquinone from plants), K₂ (menaquinone from gut bacteria), K₃ (menadione — synthetic)",
                    function: "Coenzyme for carboxylation of glutamate residues in clotting factors (II, VII, IX, X) and bone proteins (osteocalcin)",
                    deficiency: "Impaired blood clotting, haemorrhage; newborn haemorrhagic disease",
                    clinicalUse: "Warfarin (anticoagulant) antagonises vitamin K"
                },
                absorptionMechanism: {
                    requirement: "Dietary fat and bile salts for absorption from small intestine into lymphatics (chylomicrons)",
                    storage: "Liver and adipose tissue — can accumulate to toxic levels (vitamins A and D especially)"
                }
            },

            // ─────────────────────────────────────────────
            // 7. EICOSANOIDS
            // ─────────────────────────────────────────────
            eicosanoids: {
                overview: "Short-range signalling molecules derived from 20-carbon polyunsaturated fatty acids (primarily arachidonic acid)",

                types: {
                    prostaglandins: {
                        structure: "20C fatty acid with a cyclopentane ring",
                        synthesis: "Arachidonic acid → cyclooxygenase (COX) → prostaglandins",
                        functions: [
                            "Inflammation — vasodilation, vascular permeability, pain sensitisation",
                            "Fever induction (hypothalamus)",
                            "Uterine contraction",
                            "Protection of gastric mucosa",
                            "Platelet aggregation (PGI₂ inhibits; TXA₂ promotes)"
                        ]
                    },
                    thromboxanes: {
                        example: "Thromboxane A₂ (TXA₂)",
                        source: "Platelets",
                        function: "Promotes platelet aggregation and vasoconstriction → blood clotting"
                    },
                    leukotrienes: {
                        synthesis: "Arachidonic acid → lipoxygenase pathway → leukotrienes",
                        function: "Mediate allergic and inflammatory responses — bronchospasm, mucus secretion",
                        clinical: "LTC₄, LTD₄, LTE₄ mediate bronchoconstriction in asthma; antagonists (montelukast) used therapeutically"
                    }
                },

                clinicalRelevance: {
                    NSAIDs: {
                        drugs: "Aspirin, ibuprofen, naproxen",
                        mechanism: "Inhibit COX-1 and COX-2 → reduce prostaglandin synthesis → anti-inflammatory, analgesic, antipyretic",
                        sideEffects: "Gastric ulceration (COX-1 inhibition reduces protective prostaglandins), platelet effects"
                    },
                    aspirinMechanism: "Irreversibly acetylates and inhibits COX — prevents TXA₂ production in platelets (no nucleus, cannot regenerate COX) → antiplatelet effect persists for platelet lifetime (~10 days)"
                }
            },

            // ─────────────────────────────────────────────
            // 8. LIPID METABOLISM
            // ─────────────────────────────────────────────
            lipidMetabolism: {
                overview: "Pathways for synthesis and breakdown of lipids",

                betaOxidation: {
                    definition: "The major pathway for fatty acid catabolism — sequential removal of 2-carbon units as acetyl-CoA",
                    location: "Mitochondrial matrix",
                    transport: "Long-chain fatty acids require carnitine shuttle (acyl-carnitine) to cross inner mitochondrial membrane",
                    cycleSteps: [
                        "1. Activation: fatty acid + CoA + ATP → fatty acyl-CoA (in cytoplasm)",
                        "2. Oxidation (FAD-dependent): removes one H₂ → trans-Δ2-enoyl-CoA; yields FADH₂",
                        "3. Hydration: H₂O added → L-3-hydroxyacyl-CoA",
                        "4. Oxidation (NAD-dependent): removes one H₂ → 3-ketoacyl-CoA; yields NADH",
                        "5. Thiolysis: CoA cleaves off → acetyl-CoA + fatty acyl-CoA (two carbons shorter)"
                    ],
                    yieldPerCycle: "1 FADH₂ + 1 NADH + 1 acetyl-CoA",
                    acetylCoAFate: "Enters Krebs cycle → CO₂ + NADH + FADH₂ → ATP via oxidative phosphorylation",
                    totalYield: "Palmitate (C16:0): 7 cycles → 8 acetyl-CoA + 7 FADH₂ + 7 NADH → ~106 ATP"
                },

                fattyAcidSynthesis: {
                    location: "Cytoplasm (cytosol)",
                    enzyme: "Fatty acid synthase (FAS) — a large multifunctional enzyme complex",
                    startingMaterial: "Acetyl-CoA + malonyl-CoA (CO₂ + acetyl-CoA, made by acetyl-CoA carboxylase)",
                    electronDonor: "NADPH (from pentose phosphate pathway)",
                    product: "Palmitate (C16:0) — the primary product",
                    regulation: {
                        insulin: "Promotes fatty acid synthesis (high blood glucose → acetyl-CoA excess → lipogenesis)",
                        glucagon: "Inhibits fatty acid synthesis (activates AMPK, which inhibits acetyl-CoA carboxylase)"
                    }
                },

                ketogenesis: {
                    definition: "Synthesis of ketone bodies from acetyl-CoA in the liver when carbohydrate availability is low",
                    location: "Liver mitochondria",
                    ketoneBodies: ["Acetoacetate", "β-hydroxybutyrate", "Acetone"],
                    trigger: "Fasting, prolonged exercise, starvation, uncontrolled type 1 diabetes",
                    useByTissues: "Brain, heart, skeletal muscle can use ketone bodies as alternative fuel when glucose is scarce",
                    diabeticKetoacidosis: "In type 1 diabetes — uncontrolled ketogenesis → acidosis → potentially fatal"
                },

                lipidTransport: {
                    chylomicrons: {
                        origin: "Assembled in intestinal enterocytes from dietary fat",
                        cargo: "Dietary triacylglycerols, cholesterol, fat-soluble vitamins",
                        pathway: "Lymph → blood → peripheral tissues (LPL removes TAGs) → remnants taken up by liver"
                    },
                    VLDL: {
                        origin: "Liver",
                        cargo: "Endogenous triacylglycerols",
                        fate: "VLDL → IDL → LDL (after TAG removal by LPL)"
                    },
                    LDL: "Delivers cholesterol to peripheral tissues (endocytosed via LDL receptor)",
                    HDL: "Reverse cholesterol transport — picks up cholesterol from peripheral tissues → liver"
                }
            },

            // ─────────────────────────────────────────────
            // 9. MEMBRANE STRUCTURE
            // ─────────────────────────────────────────────
            membraneStructure: {
                overview: "How lipids organise into biological membranes and the fluid mosaic model",

                fluidMosaicModel: {
                    proposed: "Singer and Nicolson, 1972",
                    fluid: "Phospholipids (and some proteins) can move laterally within the bilayer (lateral diffusion)",
                    mosaic: "Proteins are embedded throughout the membrane at varying depths — like tiles in a mosaic",
                    movements: {
                        lateralDiffusion: "Phospholipid moves within its leaflet — rapid (μs timescale)",
                        rotation: "Phospholipid spins around its own axis — rapid",
                        flipFlop: "Transverse diffusion across the bilayer — extremely rare, requires flippase enzyme",
                        proteinDiffusion: "Many membrane proteins diffuse laterally (shown by FRAP experiments)"
                    }
                },

                lipidRafts: {
                    definition: "Microdomains in the membrane enriched in cholesterol, sphingomyelin, and specific proteins",
                    properties: "More ordered and less fluid than surrounding membrane",
                    functions: [
                        "Organise signalling molecules (receptors, G proteins, second messenger enzymes)",
                        "Involved in membrane trafficking",
                        "Portal of entry for some pathogens (e.g. cholera toxin)"
                    ]
                },

                membraneAsymmetry: {
                    definition: "The two leaflets of the membrane have different lipid and protein compositions",
                    outerLeaflet: "Rich in phosphatidylcholine, sphingomyelin, glycolipids",
                    innerLeaflet: "Rich in phosphatidylserine, phosphatidylethanolamine, phosphatidylinositol",
                    maintenance: "Flippases (ATP-dependent) maintain asymmetry; apoptosis disrupts it (PS flip to outer leaflet)",
                    significance: "Membrane asymmetry underlies cell polarity and signalling specificity"
                }
            },

            // ─────────────────────────────────────────────
            // 10. LIPID TESTS & IDENTIFICATION
            // ─────────────────────────────────────────────
            lipidTests: {
                overview: "Laboratory methods to detect and characterise lipids",

                emulsionTest: {
                    principle: "Lipids are insoluble in water but dissolve in ethanol; when ethanol solution is poured into water, lipid precipitates as an emulsion",
                    procedure: [
                        "1. Add sample to ethanol in a dry test tube; mix to dissolve lipid",
                        "2. Pour ethanol solution into water in another test tube",
                        "3. Observe"
                    ],
                    results: {
                        positive: "White milky emulsion forms — lipid present",
                        negative: "Remains clear — no lipid"
                    }
                },

                sudanDye: {
                    principle: "Sudan III and Sudan IV (lipophilic dyes) dissolve preferentially in lipid",
                    procedure: "Add 3 drops Sudan III or IV to sample; observe",
                    results: {
                        SudanIII: "Positive: orange-red staining of lipid droplets",
                        SudanIV: "Positive: red staining"
                    },
                    use: "Microscopy — identifies lipid droplets in cells/tissues"
                },

                oilRedO: {
                    principle: "Lipophilic dye preferentially partitions into neutral lipids",
                    use: "Histological staining of tissue sections — identifies neutral lipids (e.g. triacylglycerols in adipose tissue)"
                },

                saponificationValue: {
                    definition: "The amount of KOH (mg) needed to saponify 1 g of fat",
                    significance: "Higher value = shorter fatty acid chains (more ester bonds per gram); used to characterise fats in food science"
                },

                iodineValue: {
                    definition: "The amount of iodine (g) absorbed per 100 g of fat",
                    significance: "Higher iodine value = more unsaturated fatty acids (more C=C bonds available to add I₂); distinguishes fats from oils"
                }
            },

            // ─────────────────────────────────────────────
            // 11. LIPIDS IN DISEASE
            // ─────────────────────────────────────────────
            lipidsInDisease: {
                overview: "Pathological conditions involving lipid metabolism or structure",

                atherosclerosis: {
                    definition: "Accumulation of lipid-rich plaques (atheromas) in arterial walls → narrowing of arteries",
                    mechanism: [
                        "1. LDL enters arterial wall, becomes oxidised",
                        "2. Macrophages engulf oxidised LDL → foam cells",
                        "3. Foam cells accumulate → fatty streak → fibrous plaque",
                        "4. Plaque rupture → thrombus → myocardial infarction or stroke"
                    ],
                    riskFactors: ["High LDL", "Low HDL", "Hypertension", "Smoking", "Diabetes", "Obesity"],
                    prevention: "Statins (HMG-CoA reductase inhibitors) — reduce cholesterol synthesis in liver"
                },

                obesity: {
                    definition: "Excess accumulation of adipose tissue — BMI ≥ 30",
                    consequences: ["Type 2 diabetes", "Cardiovascular disease", "Hypertension", "Sleep apnoea", "Joint disease"],
                    molecular: "Excess caloric intake → surplus acetyl-CoA → fatty acid synthesis → TAG storage in adipose"
                },

                lipidStorageDisorders: {
                    overview: "Lysosomal storage diseases caused by deficiency of enzymes that degrade specific lipids",
                    examples: [
                        "Gaucher's disease: glucocerebrosidase deficiency → glucocerebroside accumulates in macrophages → hepatosplenomegaly",
                        "Tay-Sachs disease: hexosaminidase A deficiency → GM2 ganglioside accumulates in neurons → progressive neurodegeneration → death in childhood",
                        "Niemann-Pick disease: sphingomyelinase deficiency → sphingomyelin accumulates"
                    ]
                },

                CFandLipids: {
                    context: "Cystic fibrosis causes abnormal mucus → impairs fat digestion (blocked pancreatic duct) → fat malabsorption → deficiency of fat-soluble vitamins"
                }
            }
        },

        // ─────────────────────────────────────────────────
        // CROSS-CUTTING CONCEPTS
        // ─────────────────────────────────────────────────
        crossCuttingConcepts: {
            structureFunctionRelationship: [
                "Saturated tails pack tightly → solid fat → good for long-term energy storage and structural stability",
                "Unsaturated (cis) tails create kinks → cannot pack → fluid membrane → required for membrane function",
                "Phospholipid amphiphilicity drives spontaneous bilayer formation — thermodynamic inevitability",
                "Cholesterol's flat rigid ring modulates membrane fluidity in both directions depending on temperature",
                "High H:C ratio in lipids (relative to carbohydrates) → more energy per gram from β-oxidation"
            ],
            commonErrors: [
                "Confusing fats and oils — both are triacylglycerols; the difference is saturation/melting point, not chemical class",
                "Stating lipids contain nitrogen — most do not (phospholipids contain N only in head groups; most other lipids do not)",
                "Confusing the emulsion test result — the white emulsion is a positive result, not a negative",
                "Claiming phospholipids form micelles in membranes — they form bilayers (micelles form with single-tailed amphiphiles like fatty acids or detergents)",
                "Stating all lipids are non-polar — phospholipids and steroids have polar regions (amphiphilic)",
                "Forgetting that ester bond formation requires condensation (water released), not addition"
            ],
            curriculumProgression: {
                junior: "Fat, oil, and wax definitions; energy storage role; simple tests (emulsion test); dietary fats",
                intermediate: "Triglyceride structure, ester bonds, condensation/hydrolysis; phospholipid bilayer; saturated vs unsaturated; membrane fluidity",
                senior: "Steroid hormones, eicosanoids, β-oxidation, fatty acid synthesis, lipoproteins, membrane fluidity regulation, disease (atherosclerosis, storage disorders)"
            }
        },

        // ─────────────────────────────────────────────────
        // EXAMPLES (WORKED PROBLEMS)
        // ─────────────────────────────────────────────────
        examples: [
            {
                scenario: "Explain why lipids release more energy per gram than carbohydrates",
                solution: [
                    "1. Lipids are more reduced — higher ratio of C–H bonds relative to C–O bonds",
                    "2. C–H bonds have more electrons available for transfer to NAD⁺/FAD in β-oxidation",
                    "3. Each 2-carbon acetyl-CoA unit from β-oxidation enters the Krebs cycle",
                    "4. More NADH and FADH₂ produced per gram → more ATP via oxidative phosphorylation",
                    "5. Palmitate (16C) yields ~106 ATP; glucose (6C) yields ~30–32 ATP — lipids yield ~2× more per gram (~38 kJ/g vs ~17 kJ/g)"
                ]
            },
            {
                scenario: "Describe how phospholipid structure determines membrane properties",
                solution: [
                    "1. Phospholipids are amphiphilic — hydrophilic phosphate head + two hydrophobic fatty acid tails",
                    "2. In aqueous environment, hydrophobic effect drives tail-to-tail assembly → bilayer",
                    "3. Unsaturated (cis) fatty acid tails create kinks → prevent tight packing → membrane remains fluid at body temperature",
                    "4. Fluid bilayer allows lateral movement of proteins → necessary for membrane function",
                    "5. Cholesterol inserts between tails → moderates fluidity — prevents both solidification and excessive fluidity"
                ]
            },
            {
                scenario: "A student performs the emulsion test on samples A (oil), B (glucose solution), and C (starch suspension). Predict and explain the results",
                solution: [
                    "Sample A (oil): Positive — milky white emulsion forms when ethanol-dissolved oil is added to water; oil is lipid and dissolves in ethanol but not water",
                    "Sample B (glucose): Negative — glucose is soluble in both ethanol and water; no emulsion forms; solution remains clear",
                    "Sample C (starch): Negative — starch is a polysaccharide, not a lipid; does not dissolve in ethanol; no emulsion"
                ]
            },
            {
                scenario: "Explain the role of bile salts in fat digestion",
                solution: [
                    "1. Dietary fats enter the small intestine as large lipid droplets — hydrophobic; poor surface area for lipase action",
                    "2. Bile salts (amphiphilic, derived from cholesterol) coat fat droplets — hydrophobic core interacts with fat; hydrophilic regions face water",
                    "3. Peristalsis + bile salts → emulsification: large droplets broken into many small micelles",
                    "4. Small droplets have much greater surface area : volume ratio",
                    "5. Pancreatic lipase can now efficiently hydrolyse ester bonds → fatty acids + glycerol absorbed"
                ]
            }
        ],

        // ─────────────────────────────────────────────────
        // KEY TAKEAWAYS
        // ─────────────────────────────────────────────────
        keyTakeaways: [
            "Lipids are defined by hydrophobicity and solubility in non-polar solvents, not by a single chemical structure",
            "Fatty acids are the key building blocks: saturated (no C=C) → solid fats; unsaturated (cis C=C) → liquid oils",
            "Triacylglycerols are the primary long-term energy store — ~38 kJ/g, twice the energy density of carbohydrates",
            "Phospholipids are amphiphilic and spontaneously form bilayers — the structural basis of all biological membranes",
            "Cholesterol regulates membrane fluidity and is the precursor for steroid hormones, bile acids, and vitamin D",
            "Steroid hormones are lipid-soluble → cross membranes → act on nuclear receptors → alter gene expression",
            "β-oxidation in mitochondria breaks fatty acids into acetyl-CoA; fatty acid synthesis in the cytoplasm is the reverse",
            "Eicosanoids (prostaglandins, leukotrienes) are short-range paracrine signalling molecules derived from arachidonic acid",
            "The emulsion test detects lipids; iodine value measures unsaturation; Sudan dyes stain lipid droplets",
            "Dysregulation of lipid metabolism underlies atherosclerosis, obesity, and lysosomal storage diseases"
        ]
    };

    return content;
}

handleProteins(problem) {
    const content = {
        topic: "Proteins",
        category: "biomolecules",
        summary: "Proteins are the most functionally diverse macromolecules in living systems, performing roles as enzymes, structural components, transport molecules, hormones, receptors, antibodies, and motors. They are polymers of amino acids joined by peptide bonds, and their biological activity depends critically on their three-dimensional structure. Mastery spans amino acid chemistry through primary, secondary, tertiary, and quaternary structure, protein folding, denaturation, and the vast diversity of protein function.",

        components: {

            // ─────────────────────────────────────────────
            // 1. FOUNDATIONS
            // ─────────────────────────────────────────────
            foundations: {
                overview: "Core vocabulary, elemental composition, and structural principles of amino acids",

                definition: {
                    statement: "Proteins are polypeptides — linear polymers of amino acids joined by peptide bonds — that fold into specific three-dimensional conformations",
                    elementsPresent: ["Carbon (C)", "Hydrogen (H)", "Oxygen (O)", "Nitrogen (N)", "often Sulfur (S)", "sometimes Phosphorus (P)", "sometimes metals (e.g. Fe, Zn, Cu, Mg)"],
                    distinguishingFeature: "Nitrogen and often sulfur distinguish proteins from carbohydrates and most lipids",
                    scale: "~20,000–100,000+ amino acids possible; molecular masses range from ~6 kDa (insulin) to >500 kDa (titin)"
                },

                aminoAcids: {
                    generalStructure: {
                        description: "All 20 standard amino acids share a common backbone structure",
                        centralCarbon: "α-carbon (Cα) — chiral in all amino acids except glycine",
                        components: [
                            "Amino group (-NH₂) — basic group, accepts protons; pKa ~9",
                            "Carboxyl group (-COOH) — acidic group, donates protons; pKa ~2",
                            "Hydrogen atom (-H)",
                            "Variable side chain (-R group) — determines amino acid identity and properties"
                        ],
                        chiralityNote: "All amino acids in proteins are L-configuration (except glycine, which is achiral)"
                    },

                    zwitterion: {
                        definition: "The dipolar ionic form of an amino acid that exists at physiological pH — amino group is protonated (-NH₃⁺) and carboxyl group is deprotonated (-COO⁻)",
                        pI: "Isoelectric point — the pH at which the amino acid carries no net charge",
                        significance: "Zwitterionic form is the predominant form in solution at neutral pH"
                    },

                    classificationBySideChain: {
                        nonpolarAliphatic: {
                            property: "Hydrophobic — repelled by water; tend to cluster in protein core",
                            examples: [
                                "Glycine (Gly, G) — smallest; no chiral centre; allows most conformational flexibility",
                                "Alanine (Ala, A) — methyl side chain",
                                "Valine (Val, V) — branched chain",
                                "Leucine (Leu, L) — branched chain",
                                "Isoleucine (Ile, I) — branched chain",
                                "Proline (Pro, P) — cyclic structure, N is part of ring; introduces kink in backbone",
                                "Methionine (Met, M) — contains sulfur; initiator of protein synthesis"
                            ]
                        },
                        aromaticNonpolar: {
                            property: "Hydrophobic; can participate in π-stacking interactions",
                            examples: [
                                "Phenylalanine (Phe, F) — benzyl side chain",
                                "Tryptophan (Trp, W) — largest standard amino acid; indole ring",
                                "Tyrosine (Tyr, Y) — phenol ring; hydroxyl group makes it slightly polar; can be phosphorylated"
                            ]
                        },
                        polarUncharged: {
                            property: "Hydrophilic; can form hydrogen bonds with water and other polar molecules",
                            examples: [
                                "Serine (Ser, S) — -OH side chain; phosphorylation site",
                                "Threonine (Thr, T) — -OH side chain; phosphorylation site",
                                "Cysteine (Cys, C) — -SH (thiol) group; can form disulfide bonds",
                                "Asparagine (Asn, N) — amide group",
                                "Glutamine (Gln, Q) — amide group"
                            ]
                        },
                        positivelyChargedBasic: {
                            property: "Carry positive charge at physiological pH",
                            examples: [
                                "Lysine (Lys, K) — ε-amino group; pKa ~10.5",
                                "Arginine (Arg, R) — guanidinium group; pKa ~12.5 (most basic)",
                                "Histidine (His, H) — imidazole ring; pKa ~6.0; can act as acid or base at physiological pH → common in enzyme active sites"
                            ]
                        },
                        negativelyChargedAcidic: {
                            property: "Carry negative charge at physiological pH",
                            examples: [
                                "Aspartate (Asp, D) — carboxyl side chain; pKa ~3.9",
                                "Glutamate (Glu, E) — carboxyl side chain; pKa ~4.1"
                            ]
                        }
                    },

                    essentialAminoAcids: {
                        definition: "Amino acids that cannot be synthesised by the human body and must be obtained from diet",
                        list: ["Histidine", "Isoleucine", "Leucine", "Lysine", "Methionine", "Phenylalanine", "Threonine", "Tryptophan", "Valine"],
                        mnemonic: "PVT TIM HaLL (Phe, Val, Thr, Trp, Ile, Met, His, Arg*, Leu, Lys) — *Arg conditionally essential",
                        deficiency: "Protein deficiency → kwashiorkor (low protein) or marasmus (low protein and calories)"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 2. PEPTIDE BOND FORMATION
            // ─────────────────────────────────────────────
            peptideBonds: {
                overview: "The covalent bond linking amino acids in a polypeptide chain",

                formation: {
                    reaction: "Condensation reaction — the -COOH of one amino acid reacts with the -NH₂ of the next, releasing H₂O",
                    equation: "Amino acid₁ + Amino acid₂ → Dipeptide + H₂O",
                    inCells: "Catalysed by the ribosome (peptidyl transferase activity of 23S/28S rRNA); requires activated amino acids (aminoacyl-tRNAs)",
                    energy: "Peptide bond formation is endergonic — driven by hydrolysis of ATP during tRNA aminoacylation"
                },

                peptideBondProperties: {
                    resonance: "The C-N bond has partial double-bond character due to resonance with the adjacent C=O → restricts rotation",
                    planarity: "The atoms of the peptide bond (O=C-N-H) are coplanar — rigid unit",
                    transConfiguration: "Almost all peptide bonds are in trans configuration (R groups on opposite sides of C-N bond) — reduces steric clash",
                    cisPeptideBond: "Occurs before proline (~0.1% of peptide bonds) — proline's ring constrains the bond"
                },

                polypeptideChain: {
                    definition: "A chain of amino acids joined by peptide bonds",
                    terminology: {
                        peptide: "2–50 amino acids",
                        polypeptide: "50+ amino acids",
                        protein: "One or more polypeptide chains folded into a functional 3D structure"
                    },
                    backbone: "The repeating -N-Cα-C(O)- unit along the chain; the R groups project outward",
                    directionality: "Polypeptides are synthesised N-terminus (free -NH₂) to C-terminus (free -COOH)",
                    phi_psi_angles: "Rotation around N-Cα bond = φ (phi); around Cα-C bond = ψ (psi) — these define backbone conformation; restricted by steric clashes (Ramachandran plot)"
                }
            },

            // ─────────────────────────────────────────────
            // 3. LEVELS OF PROTEIN STRUCTURE
            // ─────────────────────────────────────────────
            proteinStructure: {
                overview: "The four hierarchical levels describing protein architecture",

                primaryStructure: {
                    definition: "The sequence of amino acids in a polypeptide chain",
                    bond: "Peptide bonds",
                    informationContent: "Encoded in gene sequence (DNA → mRNA → amino acid sequence via genetic code)",
                    significance: {
                        anfinsen: "Anfinsen's dogma — primary structure contains all information needed to determine 3D structure",
                        mutations: "A single amino acid substitution can abolish function (e.g. sickle cell — Glu→Val at position 6 of β-globin)",
                        homology: "Comparing primary structures reveals evolutionary relationships"
                    },
                    determination: "Edman degradation (sequential removal from N-terminus); mass spectrometry (modern standard)",
                    examples: [
                        "Insulin: 51 amino acids across two chains (A and B) connected by disulfide bonds",
                        "Haemoglobin β-chain: 146 amino acids"
                    ]
                },

                secondaryStructure: {
                    definition: "Local, regular folding patterns in the polypeptide backbone stabilised by hydrogen bonds between backbone -C=O and -N-H groups",
                    bond: "Hydrogen bonds (between backbone atoms — not R groups)",

                    alphaHelix: {
                        structure: "Right-handed coil; 3.6 amino acids per turn; rise of 1.5 Å per residue",
                        stabilisation: "H-bond between C=O of residue i and N-H of residue i+4",
                        sideChainOrientation: "R groups project outward from the helix",
                        examples: ["Keratin (hair, nails)", "Transmembrane segments of membrane proteins"],
                        favoured: "Alanine, glutamate, leucine, methionine favour α-helix",
                        disrupted: "Proline disrupts helix (rigid ring prevents required φ angle)"
                    },

                    betaSheet: {
                        structure: "Extended polypeptide strands aligned side by side — H-bonds form between strands (not within a strand)",
                        types: {
                            parallel: "Adjacent strands run in same N→C direction — weaker H-bonds (not perfectly aligned)",
                            antiparallel: "Adjacent strands run in opposite directions — stronger H-bonds (better aligned)"
                        },
                        sideChainOrientation: "R groups alternate above and below the plane of the sheet",
                        examples: ["Silk fibroin (β-sheet rich)", "Immunoglobulin fold", "Amyloid fibrils"]
                    },

                    loops: {
                        definition: "Irregular regions connecting α-helices and β-sheets",
                        betaTurn: "A common 4-residue loop that reverses polypeptide chain direction; often connects antiparallel β-strands",
                        significance: "Loops are often at protein surfaces → frequently form binding sites and enzyme active sites"
                    }
                },

                tertiaryStructure: {
                    definition: "The overall three-dimensional shape of a single polypeptide chain — how secondary structural elements pack together",
                    bond: "Multiple non-covalent interactions + disulfide bonds",
                    stabilisedBy: {
                        hydrophobicEffect: "Non-polar R groups cluster in the protein core away from water — primary driving force for folding",
                        hydrogenBonds: "Between R groups (polar and charged) and between R groups and backbone",
                        ionicInteractions: "Salt bridges between oppositely charged R groups (e.g. Lys–Asp)",
                        vanDerWaalsForces: "Transient dipole interactions between all adjacent atoms — significant due to the large number of such contacts in a folded protein",
                        disulfideBonds: {
                            formation: "Covalent bond between -SH groups of two cysteine residues; requires oxidising conditions (extracellular or ER lumen)",
                            strength: "Strongest stabilising interaction in protein structure — covalent",
                            examples: ["Insulin (3 disulfide bonds)", "Immunoglobulins", "Keratin"],
                            location: "Secreted or extracellular proteins; not normally found in cytoplasmic proteins (reducing environment)"
                        }
                    },
                    fibrousVsglobular: {
                        fibrousProteins: {
                            description: "Extended, elongated structures; insoluble in water; structural roles",
                            examples: [
                                "Collagen: triple helix of three polypeptide chains; found in connective tissue, bone, cartilage",
                                "Keratin: α-helical coiled-coil; found in hair, nails, feathers, horns",
                                "Elastin: random coil with cross-links; provides elasticity to skin and blood vessels",
                                "Silk fibroin: antiparallel β-sheet stacks; produced by silkworms"
                            ]
                        },
                        globularProteins: {
                            description: "Compact, roughly spherical structures; soluble in water; functional roles (enzymes, transport, antibodies)",
                            examples: [
                                "Haemoglobin — oxygen transport",
                                "Myoglobin — oxygen storage in muscle",
                                "Lysozyme — antibacterial enzyme",
                                "Insulin — hormone"
                            ]
                        }
                    }
                },

                quaternaryStructure: {
                    definition: "The association of two or more polypeptide subunits to form a functional protein complex",
                    requirement: "Only proteins with multiple subunits have quaternary structure",
                    bond: "Same non-covalent interactions as tertiary structure; sometimes disulfide bonds",
                    terminology: {
                        monomer: "Single polypeptide chain",
                        dimer: "Two subunits",
                        tetramer: "Four subunits",
                        homomer: "All subunits identical",
                        heteromer: "Subunits of different types"
                    },
                    advantages: [
                        "Cooperativity in ligand binding (e.g. haemoglobin — binding of O₂ increases affinity for further O₂)",
                        "Gene economy — one gene makes subunit; multiple copies assemble",
                        "Allosteric regulation — one subunit's conformation change can affect others"
                    ],
                    examples: [
                        "Haemoglobin: α₂β₂ tetramer — 2 α-globin + 2 β-globin chains; each with haem group",
                        "Collagen: triple helix of three chains",
                        "DNA polymerase III: multiple different subunits",
                        "Antibody (IgG): 2 heavy + 2 light chains"
                    ]
                }
            },

            // ─────────────────────────────────────────────
            // 4. PROTEIN FOLDING & DENATURATION
            // ─────────────────────────────────────────────
            proteinFolding: {
                overview: "How proteins attain their native functional conformation and what disrupts it",

                foldingProcess: {
                    thermodynamics: "Folding is driven by the hydrophobic effect (entropic gain from releasing ordered water around non-polar groups) + formation of stabilising interactions",
                    levinthalParadox: "Random sampling of all conformations would take longer than the age of the universe — proteins must fold via pathways (funnel-shaped energy landscape)",
                    foldingPathways: "Proteins fold through partially structured intermediates, guided by the energy landscape toward the native state",
                    moltenGlobule: "A common folding intermediate — collapsed, secondary structure present, tertiary structure not yet fully formed"
                },

                chaperones: {
                    definition: "Proteins that assist in the folding of other proteins without becoming part of the final structure",
                    necessity: "Newly synthesised or stress-denatured proteins expose hydrophobic regions → aggregate without help",
                    types: {
                        hsp70: {
                            mechanism: "Binds to exposed hydrophobic stretches of nascent or unfolded polypeptides → prevents aggregation; ATP-driven binding and release cycles",
                            examples: "DnaK (bacteria), Hsc70/Hsp70 (eukaryotes)"
                        },
                        chaperonins: {
                            structure: "Large barrel-shaped complexes that provide a protected chamber for folding",
                            mechanism: "Substrate protein trapped inside barrel; folding occurs in isolation",
                            examples: "GroEL/GroES (bacteria); TRiC/CCT (eukaryotes)"
                        }
                    },
                    heatShockResponse: "Stress (heat, toxins) causes protein unfolding → heat shock factor activates chaperone gene expression"
                },

                denaturation: {
                    definition: "Disruption of a protein's higher-order structure (secondary, tertiary, quaternary) without breaking peptide bonds — loss of native conformation → loss of function",
                    bond: "Denaturing conditions disrupt non-covalent interactions (and may reduce disulfide bonds)",
                    denaturingAgents: {
                        heat: {
                            mechanism: "Increased thermal energy overcomes non-covalent interactions stabilising the folded state",
                            examples: ["Cooking egg white (albumin denaturation)", "Fever → enzyme dysfunction"],
                            irreversibility: "Usually irreversible at high temperatures (proteins aggregate)"
                        },
                        extremePH: {
                            mechanism: "Alters protonation state of ionisable R groups → disrupts ionic interactions and hydrogen bonds",
                            examples: ["Milk curdling by acid (casein denaturation)", "Lemon juice denatures fish proteins in ceviche"]
                        },
                        heavyMetalIons: {
                            mechanism: "Metal ions (Pb²⁺, Hg²⁺, Ag⁺) bind to -SH, -COOH, and -NH₂ groups → disrupt normal interactions",
                            toxicity: "Heavy metal poisoning works by denaturing enzymes and structural proteins"
                        },
                        organicSolvents: {
                            mechanism: "Disrupt hydrophobic interactions; compete for H-bonds with water",
                            examples: "Ethanol denatures bacterial cell proteins (antiseptic action)"
                        },
                        denaturingAgents: "Urea and guanidinium chloride — disrupt H-bonds and expose hydrophobic core; used in laboratory protein denaturation"
                    },
                    renaturation: {
                        anfinsen: "Ribonuclease A can be fully denatured (with urea + β-mercaptoethanol) and spontaneously refolds on removal of denaturants — demonstrating that primary structure determines structure",
                        biological: "Some proteins can renature (with chaperone help); many cannot (especially once aggregated)"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 5. FIBROUS PROTEINS
            // ─────────────────────────────────────────────
            fibrousProteins: {
                overview: "Extended structural proteins with regular repeating secondary structure",

                collagen: {
                    distribution: "Most abundant protein in vertebrates (~30% of total protein); major component of extracellular matrix",
                    structure: {
                        aminoAcidComposition: "Rich in glycine (every third residue: Gly-X-Y); X often proline; Y often hydroxyproline",
                        tripleHelix: "Three left-handed polyproline II helices wound around each other into a right-handed triple helix",
                        collagenFibril: "Triple helices assemble into fibrils → fibres → bundles",
                        crosslinking: "Lysine-derived cross-links (catalysed by lysyl oxidase) provide tensile strength"
                    },
                    synthesis: {
                        hydroxylation: "Proline and lysine hydroxylated by prolyl and lysyl hydroxylases — requires vitamin C (ascorbate)",
                        vitaminCDeficiency: "Scurvy — impaired collagen synthesis → fragile blood vessels, joint problems, poor wound healing, bleeding gums"
                    },
                    types: [
                        "Type I — bone, skin, tendon, cornea (most abundant)",
                        "Type II — cartilage",
                        "Type III — blood vessels, skin (with type I)",
                        "Type IV — basement membrane (forms sheet rather than fibre)"
                    ],
                    diseases: [
                        "Ehlers-Danlos syndrome: mutations in collagen genes → hyperextensible skin, joint hypermobility",
                        "Osteogenesis imperfecta: defective type I collagen → brittle bone disease"
                    ]
                },

                keratin: {
                    distribution: "Major protein of hair, nails, horns, hooves, feathers, reptile scales",
                    structure: {
                        alphaKeratin: "Coiled-coil of two α-helices → protofilaments → intermediate filaments",
                        betaKeratin: "Antiparallel β-sheets (reptiles and birds); harder and more rigid",
                        disulfideBonds: "Extensive Cys-Cys cross-links → hardness (more in nails/horns than hair)"
                    },
                    chemistry: "Permanent waves/hair straightening chemically reduce disulfide bonds → restyle → re-oxidise"
                },

                elastin: {
                    distribution: "Skin, lung, arterial walls, ligaments",
                    property: "Highly elastic — can be stretched to twice its length and return to original shape",
                    structure: "Random coil in unstretched state; cross-linked by desmosine (lysine-derived) — allows extension and recoil",
                    ageRelated: "Elastin becomes progressively cross-linked and calcified → contributes to skin sagging and arterial stiffening"
                }
            },

            // ─────────────────────────────────────────────
            // 6. GLOBULAR PROTEINS & HAEMOGLOBIN
            // ─────────────────────────────────────────────
            globularProteins: {
                overview: "Compact, functional proteins — illustrated by the haemoglobin case study",

                haemoglobin: {
                    structure: {
                        quaternary: "α₂β₂ tetramer — two α-globin chains (141 aa each) and two β-globin chains (146 aa each)",
                        haemGroup: "Iron-containing porphyrin ring — one per subunit; Fe²⁺ is the oxygen-binding site",
                        tState: "Tense (deoxy) state — low O₂ affinity; subunits constrained by salt bridges",
                        rState: "Relaxed (oxy) state — high O₂ affinity; binding of O₂ triggers conformational change → breaks salt bridges"
                    },
                    cooperativity: {
                        definition: "Binding of O₂ to one subunit increases affinity of remaining subunits for O₂",
                        curve: "Sigmoidal O₂ dissociation curve (vs hyperbolic for myoglobin — non-cooperative)",
                        advantage: "Efficient loading at high O₂ (lungs) and efficient unloading at low O₂ (tissues)"
                    },
                    allostericRegulation: {
                        bohrEffect: {
                            definition: "Decreased O₂ affinity of haemoglobin with decreasing pH (or increasing CO₂)",
                            mechanism: "H⁺ (from CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻) protonates His residues → stabilises T state",
                            significance: "O₂ released at metabolically active tissues (high CO₂, low pH)"
                        },
                        BPG: {
                            fullName: "2,3-bisphosphoglycerate",
                            mechanism: "Binds central cavity between β-chains of deoxy haemoglobin → stabilises T state → decreases O₂ affinity",
                            elevation: "BPG rises at high altitude → allows more complete O₂ unloading",
                            foetal: "Foetal haemoglobin (HbF, γ₂α₂) has lower BPG affinity → higher O₂ affinity → extracts O₂ from maternal blood"
                        }
                    },
                    sickleCellAnemia: {
                        mutation: "Glu→Val at position 6 of β-globin (single nucleotide change: GAG→GTG)",
                        mechanism: "Val creates hydrophobic patch on deoxy HbS → polymerisation into fibres → deforms RBCs into sickle shape",
                        consequences: ["Haemolytic anaemia", "Vascular occlusion (pain crises)", "Organ damage"],
                        malaria: "Heterozygotes (HbA/HbS) have reduced malarial parasite survival → balanced polymorphism in malaria-endemic regions"
                    }
                },

                myoglobin: {
                    structure: "Single polypeptide chain; one haem group",
                    function: "O₂ storage in muscle; supplies O₂ to mitochondria during exercise",
                    curve: "Hyperbolic O₂ dissociation curve — higher O₂ affinity than haemoglobin (no cooperativity)",
                    comparison: "Haemoglobin unloads O₂ to myoglobin at low O₂ tensions in muscle"
                }
            },

            // ─────────────────────────────────────────────
            // 7. ANTIBODIES (IMMUNOGLOBULINS)
            // ─────────────────────────────────────────────
            antibodies: {
                overview: "Glycoproteins produced by B lymphocytes that recognise and bind specific antigens",

                basicStructure: {
                    IgG: {
                        subunits: "2 heavy chains + 2 light chains joined by disulfide bonds",
                        domains: "Each chain consists of immunoglobulin domains (~110 aa each) with β-sandwich fold",
                        regions: {
                            Fab: "Fragment antigen-binding — the two 'arms'; contains variable regions",
                            Fc: "Fragment crystallisable — the 'stem'; constant region; binds complement and Fc receptors",
                            hinge: "Flexible region allowing the two Fab arms to move independently"
                        }
                    },
                    variableRegions: {
                        VH: "Variable domain of heavy chain",
                        VL: "Variable domain of light chain",
                        CDRs: "Complementarity-determining regions (hypervariable loops) — directly contact antigen; 3 CDRs per VH and VL",
                        diversity: "~10⁶ to 10¹¹ different antigen-binding specificities possible from recombination of V, D, J gene segments + somatic hypermutation"
                    }
                },

                classes: {
                    IgG: "Most abundant in blood; crosses placenta (maternal immunity to fetus); secondary response",
                    IgM: "Pentameric; first produced in primary immune response; most effective at activating complement",
                    IgA: "Dimeric in secretions (saliva, tears, breast milk, mucus); mucosal immunity",
                    IgE: "Binds to mast cells; mediates allergic reactions; anti-parasitic",
                    IgD: "B-cell surface receptor in early B-cell development"
                }
            },

            // ─────────────────────────────────────────────
            // 8. MEMBRANE PROTEINS
            // ─────────────────────────────────────────────
            membraneProteins: {
                overview: "Proteins that are embedded in or associated with biological membranes",

                classification: {
                    integral: {
                        definition: "Permanently embedded in the membrane — cannot be removed without detergent",
                        transmembraneDomains: {
                            alphaHelical: "Hydrophobic α-helix spanning the bilayer (~20 hydrophobic residues); single-pass or multi-pass (e.g. G protein-coupled receptors: 7 transmembrane helices)",
                            betaBarrel: "Antiparallel β-strands arranged as a barrel; found in bacterial outer membranes and mitochondrial outer membrane (e.g. porins)"
                        }
                    },
                    peripheral: {
                        definition: "Associated with the membrane surface by electrostatic or H-bond interactions with lipid head groups or integral proteins",
                        removal: "Can be removed by high salt or pH change"
                    },
                    GPIAnchored: "Linked to the outer leaflet via a glycosylphosphatidylinositol (GPI) lipid anchor"
                },

                functions: {
                    channels: "Selective pores for ions or water (aquaporins); gated by ligands, voltage, or mechanical stimuli",
                    transporters: "Facilitate movement of specific molecules across membrane via conformational change",
                    receptors: "Bind signalling molecules (hormones, neurotransmitters) → transduce signal into cell",
                    enzymes: "Catalyse membrane-associated reactions (e.g. adenylyl cyclase, phospholipase C)",
                    structuralAnchor: "Connect cytoskeleton to extracellular matrix (e.g. integrins)"
                }
            },

            // ─────────────────────────────────────────────
            // 9. PROTEIN FUNCTION DIVERSITY
            // ─────────────────────────────────────────────
            proteinFunctionDiversity: {
                overview: "The remarkable range of roles that proteins perform in biological systems",

                enzymes: {
                    role: "Biological catalysts — lower activation energy, increase reaction rate without being consumed",
                    coveredInDetail: "See handleEnzymes for full treatment"
                },

                structuralProteins: {
                    examples: [
                        "Collagen — extracellular matrix, connective tissue",
                        "Keratin — epithelial cells, hair, nails",
                        "Actin — cytoskeleton; thin filaments in muscle",
                        "Tubulin — microtubules; cell division, intracellular transport",
                        "Spectrin — red blood cell membrane cytoskeleton"
                    ]
                },

                motorProteins: {
                    definition: "Convert chemical energy (ATP hydrolysis) into mechanical movement",
                    examples: [
                        "Myosin — moves along actin filaments; muscle contraction",
                        "Kinesin — moves cargo along microtubules toward + end (outward)",
                        "Dynein — moves cargo toward - end (inward) and powers cilia/flagella"
                    ]
                },

                transportProteins: {
                    examples: [
                        "Haemoglobin — O₂ transport in blood",
                        "Myoglobin — O₂ storage in muscle",
                        "Transferrin — iron transport in blood",
                        "Albumin — fatty acids, hormones, drugs transport in blood",
                        "LDL receptor — cholesterol uptake from blood"
                    ]
                },

                hormones: {
                    proteinHormones: [
                        "Insulin — blood glucose regulation",
                        "Glucagon — blood glucose elevation",
                        "Growth hormone (GH) — promotes growth and protein synthesis",
                        "Erythropoietin (EPO) — stimulates red blood cell production"
                    ],
                    noteOnSteroidHormones: "Steroid hormones are lipids, not proteins — see handleLipids"
                },

                defenceProteins: {
                    examples: [
                        "Antibodies (immunoglobulins) — antigen recognition and neutralisation",
                        "Complement proteins — lysis of pathogens",
                        "Lysozyme — cleaves bacterial cell wall peptidoglycan",
                        "Interferons — anti-viral signalling proteins",
                        "Fibrinogen/thrombin — blood clotting cascade"
                    ]
                },

                regulatoryProteins: {
                    transcriptionFactors: "Bind specific DNA sequences → activate or repress gene transcription",
                    cellCycleProteins: "Cyclins and CDKs — regulate progression through cell cycle stages",
                    signallingProteins: "G proteins, kinases, phosphatases — relay and amplify cell signals"
                }
            },

            // ─────────────────────────────────────────────
            // 10. PROTEIN TESTS & IDENTIFICATION
            // ─────────────────────────────────────────────
            proteinTests: {
                overview: "Laboratory methods to detect, quantify, and characterise proteins",

                biuretTest: {
                    reagent: "Biuret solution — NaOH + CuSO₄ (dilute)",
                    principle: "Cu²⁺ ions form a complex with peptide bonds (two or more) → purple/violet colour",
                    procedure: ["Add 2 cm³ Biuret reagent to sample", "Mix and observe colour at room temperature"],
                    results: {
                        negative: "Blue (Cu²⁺ colour) — no protein",
                        positive: "Purple/violet — protein present"
                    },
                    limitation: "Dipeptides also give a positive result; single amino acids do not",
                    semiquantitative: "Deeper purple = more protein (compared to standard)"
                },

                bradford: {
                    reagent: "Coomassie Brilliant Blue G-250",
                    principle: "Dye binds protein → absorption shifts from 465 nm to 595 nm",
                    advantage: "More sensitive and faster than Biuret; minimal interference from reducing agents",
                    quantitative: "Absorbance at 595 nm vs standard curve gives concentration"
                },

                SDS_PAGE: {
                    name: "Sodium Dodecyl Sulfate — Polyacrylamide Gel Electrophoresis",
                    principle: "SDS denatures proteins and gives all proteins a uniform negative charge proportional to mass → separation by size only during electrophoresis through gel",
                    procedure: ["Denature protein with SDS + heat", "Load onto polyacrylamide gel", "Apply electric field → proteins migrate toward positive electrode", "Stain with Coomassie Blue or silver stain"],
                    result: "Bands at positions corresponding to molecular weight; compare with molecular weight ladder"
                },

                westernBlot: {
                    purpose: "Identify specific proteins in a mixture using antibodies",
                    steps: ["SDS-PAGE → transfer to nitrocellulose membrane → block → incubate with primary antibody → secondary antibody (enzyme-linked) → detect by chemiluminescence"],
                    applications: "HIV diagnosis, COVID antigen tests, research"
                },

                ninhydrin: {
                    reagent: "Ninhydrin solution",
                    principle: "Reacts with free amino groups (α-amino acids and primary amines) → purple/blue colour (Ruhemann's purple)",
                    use: "Detection of amino acids in chromatography; proline gives yellow colour"
                }
            },

            // ─────────────────────────────────────────────
            // 11. PROTEINS IN DISEASE
            // ─────────────────────────────────────────────
            proteinsInDisease: {
                overview: "Pathological conditions involving defects in protein structure or function",

                prionDiseases: {
                    definition: "Infectious protein misfolding diseases — prions are misfolded PrPSc that template misfolding of normal PrPc",
                    examples: ["Creutzfeldt-Jakob disease (CJD)", "Kuru", "BSE (mad cow disease)", "Scrapie"],
                    mechanism: "PrPSc forms amyloid fibrils that accumulate → spongiform encephalopathy → neurodegeneration",
                    unusualFeature: "Infectious agent is a protein with no nucleic acid"
                },

                amyloidDiseases: {
                    definition: "Diseases caused by accumulation of misfolded proteins as insoluble amyloid fibrils (β-sheet stacks)",
                    examples: [
                        "Alzheimer's disease: β-amyloid plaques (from APP cleavage) and tau tangles (hyperphosphorylated tau)",
                        "Type 2 diabetes: IAPP (islet amyloid polypeptide) deposits in pancreas",
                        "Parkinson's disease: α-synuclein Lewy bodies"
                    ],
                    diagnosis: "Congo red staining → apple-green birefringence under polarised light"
                },

                sickleCellAnaemia: {
                    coveredUnder: "See globularProteins → haemoglobin → sickleCellAnaemia section above"
                },

                cysticFibrosis: {
                    protein: "CFTR (Cystic Fibrosis Transmembrane Conductance Regulator) — Cl⁻ channel in apical membrane of epithelial cells",
                    mutation: "Most common: ΔF508 — deletion of phenylalanine at position 508 → misfolded protein → retained in ER and degraded",
                    consequences: "Reduced Cl⁻ secretion → thick, dehydrated mucus → lung infections, pancreatic insufficiency, infertility"
                },

                phenylketonuria: {
                    protein: "Phenylalanine hydroxylase (PAH)",
                    deficiency: "Absence of PAH → phenylalanine accumulates → converted to phenylpyruvate → neurotoxic",
                    treatment: "Phenylalanine-restricted diet from birth; tetrahydrobiopterin (BH4) supplementation in some cases"
                }
            }
        },

        // ─────────────────────────────────────────────────
        // CROSS-CUTTING CONCEPTS
        // ─────────────────────────────────────────────────
        crossCuttingConcepts: {
            structureFunctionRelationship: [
                "Primary sequence determines 3D structure (Anfinsen's principle)",
                "Disulfide bonds stabilise extracellular proteins but not intracellular proteins",
                "Active site shape complementarity underpins enzyme specificity",
                "Cooperativity in haemoglobin (quaternary structure) enables sigmoidal O₂ binding — impossible in a monomer",
                "Denaturation = loss of structure = loss of function (regardless of primary structure remaining intact)"
            ],
            commonErrors: [
                "Confusing denaturation with hydrolysis — denaturation disrupts non-covalent bonds; peptide bonds remain intact",
                "Stating that all proteins are enzymes — structural, transport, motor, and antibody proteins are not enzymes",
                "Forgetting that disulfide bonds only form in oxidising environments (extracellular or ER)",
                "Confusing primary structure (amino acid sequence) with secondary structure (local folding)",
                "Claiming polypeptides and proteins are identical — a polypeptide is just a chain; a protein requires correct folding and may have multiple chains",
                "Stating that the Biuret test detects amino acids — it detects peptide bonds (dipeptides and above)"
            ],
            curriculumProgression: {
                junior: "Amino acid definition, protein food sources, general functions, Biuret test",
                intermediate: "Amino acid structure, peptide bond formation, primary and secondary structure, fibrous vs globular, denaturation",
                senior: "All four structural levels, haemoglobin cooperativity, chaperones, specific proteins (collagen, antibodies, motor proteins), protein folding diseases, SDS-PAGE"
            }
        },

        // ─────────────────────────────────────────────────
        // EXAMPLES (WORKED PROBLEMS)
        // ─────────────────────────────────────────────────
        examples: [
            {
                scenario: "Explain why boiling an egg is irreversible but denaturation of ribonuclease A can be reversed in the laboratory",
                solution: [
                    "1. Boiling egg white: high heat denatures multiple proteins (albumins etc.) simultaneously → exposed hydrophobic regions aggregate with each other → form tangled, cross-linked mass",
                    "2. Aggregation is irreversible — proteins are kinetically trapped; cannot spontaneously disaggregate and refold",
                    "3. RNase A: single, small protein; denaturants (urea + β-ME) are removed slowly at controlled conditions",
                    "4. No aggregation occurs (dilute conditions); primary structure intact; thermodynamically guided refolding to native state",
                    "5. Demonstrates Anfinsen's principle: primary sequence encodes tertiary structure"
                ]
            },
            {
                scenario: "Describe how haemoglobin is adapted to transport oxygen efficiently between lungs and tissues",
                solution: [
                    "1. Quaternary structure (α₂β₂) allows cooperativity — O₂ binding to one subunit increases affinity of others → sigmoidal dissociation curve",
                    "2. In lungs: high pO₂ → haemoglobin saturates efficiently (flat upper portion of S-curve)",
                    "3. In tissues: low pO₂ + low pH + high CO₂ (Bohr effect) → T state stabilised → O₂ released where needed",
                    "4. BPG in RBCs stabilises deoxy T state → further promotes O₂ unloading",
                    "5. Result: haemoglobin loads ~100% and unloads ~65–70% of O₂ → far more efficient than a non-cooperative protein"
                ]
            },
            {
                scenario: "Compare the structures and properties of collagen and keratin",
                solution: [
                    "Collagen: triple helix of three polypeptides rich in Gly-Pro-Hyp repeats; H-bonds between chains; cross-linked lysine residues provide great tensile strength; insoluble; found in tendon, bone, skin",
                    "Keratin: α-helical coiled-coil (α-keratin) or β-sheets (β-keratin); stabilised by extensive disulfide bonds between cysteine residues; hard and resistant; found in hair, nails, horns",
                    "Both: fibrous, insoluble structural proteins; stable to denaturation; role is structural support",
                    "Difference: collagen uses H-bonds between multiple chains in a triple helix; keratin uses disulfide bonds and coiled-coil interactions within fewer chains"
                ]
            },
            {
                scenario: "A student performs SDS-PAGE on samples from muscle tissue and obtains bands at ~42 kDa and ~220 kDa. Identify likely proteins and explain how SDS-PAGE separates them",
                solution: [
                    "1. SDS denatures proteins and binds to polypeptides proportionally to mass → all proteins get uniform negative charge",
                    "2. During electrophoresis through gel, smaller proteins migrate farther (less resistance from gel matrix)",
                    "3. ~42 kDa band: actin (42 kDa — most abundant protein in muscle cells)",
                    "4. ~220 kDa band: likely myosin heavy chain (220 kDa); myosin is major contractile protein",
                    "5. Bands are stained with Coomassie Blue and compared to molecular weight markers"
                ]
            }
        ],

        // ─────────────────────────────────────────────────
        // KEY TAKEAWAYS
        // ─────────────────────────────────────────────────
        keyTakeaways: [
            "Proteins are polymers of L-amino acids joined by peptide bonds; contain C, H, O, N, often S",
            "The 20 standard amino acids differ only in their R groups — R group chemistry determines protein properties",
            "Protein structure has four hierarchical levels: primary (sequence), secondary (local folding), tertiary (3D shape), quaternary (subunit assembly)",
            "The hydrophobic effect is the primary driving force for protein folding — non-polar residues cluster in the core",
            "Disulfide bonds are the only covalent bonds stabilising higher-order structure; they form in oxidising environments",
            "Denaturation disrupts non-covalent interactions (and reduces disulfide bonds) without breaking peptide bonds",
            "Chaperones assist protein folding and prevent aggregation in the cellular environment",
            "Haemoglobin's cooperativity (quaternary structure) enables sigmoidal O₂ binding — essential for efficient transport",
            "The Biuret test detects peptide bonds (purple colour); Bradford and SDS-PAGE are used for quantification and characterisation",
            "Protein misfolding underlies many diseases: sickle cell, CF, Alzheimer's, prion diseases"
        ]
    };

    return content;
}


handleNucleicAcids(problem) {
    const content = {
        topic: "Nucleic Acids",
        category: "biomolecules",
        summary: "Nucleic acids are the information-storage and information-transfer molecules of life. DNA encodes genetic information and is faithfully replicated for inheritance; RNA decodes that information to direct protein synthesis. Both are polynucleotides — polymers of nucleotides composed of a sugar, phosphate group, and nitrogenous base. Mastery spans nucleotide chemistry through DNA and RNA structure, replication, transcription, translation, gene regulation, epigenetics, and biotechnological applications.",

        components: {

            // ─────────────────────────────────────────────
            // 1. FOUNDATIONS
            // ─────────────────────────────────────────────
            foundations: {
                overview: "Core vocabulary, elemental composition, and nucleotide chemistry",

                definition: {
                    statement: "Nucleic acids are linear polymers (polynucleotides) of nucleotides linked by 3′→5′ phosphodiester bonds, serving as the molecular basis of genetic information storage and expression",
                    types: ["DNA (deoxyribonucleic acid) — double-stranded; stores genetic information", "RNA (ribonucleic acid) — usually single-stranded; transfers and expresses genetic information"],
                    elements: ["Carbon (C)", "Hydrogen (H)", "Oxygen (O)", "Nitrogen (N)", "Phosphorus (P)"],
                    distinguishingElement: "Phosphorus (P) distinguishes nucleic acids from all other major biomolecules"
                },

                nucleotides: {
                    definition: "The monomers of nucleic acids — each consists of three components joined by covalent bonds",
                    components: {
                        phosphateGroup: {
                            structure: "One or more phosphate groups (-PO₄²⁻) attached to the 5′ carbon of the sugar",
                            charge: "Negatively charged at physiological pH → nucleic acids are polyanions",
                            number: "In free nucleotides: 1 (NMP), 2 (NDP), or 3 (NTP) phosphate groups; in polymers: 1 phosphate per nucleotide after condensation"
                        },
                        pentoseSugar: {
                            inDNA: "Deoxyribose (2′-deoxyribose) — lacks -OH at C2; has -H instead",
                            inRNA: "Ribose — has -OH at C2",
                            consequence: "2′-OH in RNA: makes RNA susceptible to alkaline hydrolysis → less chemically stable than DNA",
                            carbonNumbering: "Carbons in the sugar ring are numbered 1′–5′ (1 prime to 5 prime) to distinguish from base numbering"
                        },
                        nitrogenousBase: {
                            definition: "Flat, aromatic, heterocyclic ring compounds containing nitrogen; attached to C1′ of the sugar via N-glycosidic bond",
                            purines: {
                                structure: "Two rings — a pyrimidine ring fused to an imidazole ring",
                                members: ["Adenine (A)", "Guanine (G)"],
                                memory: "Purines are larger (two rings); PuRines: Remember the 'R'— puRe silver comes in pAiRs (A and G)"
                            },
                            pyrimidines: {
                                structure: "Single six-membered ring",
                                members: ["Cytosine (C)", "Thymine (T) — DNA only", "Uracil (U) — RNA only"],
                                memory: "CUT the Py: Cytosine, Uracil, Thymine are Pyrimidines"
                            },
                            basePairing: {
                                adenineThymine: "A–T: 2 hydrogen bonds",
                                adenineUracil: "A–U: 2 hydrogen bonds (in RNA)",
                                guanineCytosine: "G–C: 3 hydrogen bonds",
                                chargaffRule: "In any double-stranded DNA: %A = %T and %G = %C (Chargaff's rules)"
                            }
                        }
                    },
                    nucleosides: {
                        definition: "Base + sugar (no phosphate) — e.g. adenosine, guanosine",
                        distinction: "Nucleoside + phosphate(s) = nucleotide"
                    },
                    importantNucleotides: {
                        ATP: {
                            fullName: "Adenosine triphosphate",
                            role: "Universal energy currency of the cell",
                            energyRelease: "Hydrolysis of terminal phosphate (ATP → ADP + Pᵢ): ΔG = -30.5 kJ/mol under standard conditions"
                        },
                        NADH_FADH2: "Nucleotide coenzymes — electron carriers in metabolism (contain AMP core)",
                        cAMP: "Cyclic AMP — second messenger in cell signalling; formed from ATP by adenylyl cyclase",
                        coenzymes: "CoA, NAD⁺, FAD, and FMN all contain nucleotide units"
                    }
                },

                phosphodiesterBond: {
                    definition: "The covalent bond linking nucleotides in a polynucleotide chain — a phosphate group bridges the 3′-OH of one nucleotide to the 5′-OH of the next",
                    formation: "Condensation reaction: 3′-OH attacks α-phosphate of incoming NTP → pyrophosphate (PPᵢ) released → hydrolysed by pyrophosphatase (drives reaction forward)",
                    directionality: "Chain is built 5′ → 3′; free 5′-phosphate at one end, free 3′-OH at the other end",
                    backbone: "The alternating sugar-phosphate units form the backbone; bases project inward (in DNA double helix) or outward (in single-stranded RNA)"
                }
            },

            // ─────────────────────────────────────────────
            // 2. DNA STRUCTURE
            // ─────────────────────────────────────────────
            DNAStructure: {
                overview: "The molecular architecture of the DNA double helix",

                watsonCrickModel: {
                    discovery: "Watson and Crick, 1953 — using X-ray crystallography data of Franklin and Wilkins + Chargaff's rules",
                    keyFeatures: [
                        "Two antiparallel polynucleotide strands (one 5′→3′, one 3′→5′)",
                        "Right-handed double helix",
                        "Complementary base pairing: A–T (2 H-bonds), G–C (3 H-bonds)",
                        "Bases stack inside the helix (3.4 Å between adjacent base pairs); base stacking provides major stability",
                        "Diameter: 2 nm; one complete turn every 10 base pairs (3.4 nm pitch)",
                        "Sugar-phosphate backbones on outside of helix; bases inside"
                    ]
                },

                antiParallelNature: {
                    definition: "The two strands run in opposite directions — one 5′→3′, the other 3′→5′",
                    significance: "DNA polymerase can only synthesise in 5′→3′ direction → requires different mechanisms for each strand during replication (leading and lagging strands)",
                    conventionalWriting: "DNA sequences always written 5′→3′ by convention"
                },

                grooves: {
                    majorGroove: {
                        description: "Wider groove on the outside of the helix",
                        significance: "More accessible to proteins — transcription factors, restriction enzymes, and other DNA-binding proteins read base sequence through major groove contacts",
                        informationContent: "Distinct H-bond donor/acceptor patterns for each base pair visible from major groove"
                    },
                    minorGroove: {
                        description: "Narrower groove",
                        significance: "Some proteins and small molecules bind minor groove"
                    }
                },

                DNAVariants: {
                    BDNA: "Most common in vivo; right-handed; ~10 bp/turn",
                    ADNA: "Right-handed; more compact; seen in dehydrated DNA and in DNA:RNA hybrids",
                    ZDNA: "Left-handed; alternating purine-pyrimidine sequences; may have role in transcription regulation"
                },

                chromosomalDNA: {
                    packaging: {
                        prokaryotic: "Circular double-stranded DNA; negatively supercoiled; associated with HU and H-NS proteins (no histones)",
                        eukaryotic: {
                            nucleosome: {
                                structure: "147 bp of DNA wrapped ~1.65 times around an octamer of 8 histone proteins (2 each of H2A, H2B, H3, H4)",
                                linkerDNA: "DNA between nucleosomes (~20–80 bp); H1 histone seals the entry/exit"
                            },
                            higherOrder: "Nucleosome arrays coil → 30-nm chromatin fibre → loops → rosettes → chromosome",
                            condensation: "~10,000-fold compaction of DNA in a chromosome"
                        }
                    },
                    histones: {
                        properties: "Highly basic proteins (rich in Lys and Arg) → strong interaction with negatively charged DNA",
                        modifications: "Acetylation (relaxes chromatin → active transcription), methylation, phosphorylation, ubiquitination → epigenetic regulation"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 3. RNA STRUCTURE AND TYPES
            // ─────────────────────────────────────────────
            RNAStructure: {
                overview: "The structural features and types of RNA molecules",

                generalProperties: {
                    sugar: "Ribose — contains 2′-OH",
                    strand: "Usually single-stranded",
                    bases: "A, G, C, U (uracil replaces thymine — U pairs with A via 2 H-bonds, like T)",
                    stability: "Less stable than DNA — 2′-OH allows hydrolysis; shorter-lived in cells",
                    length: "Generally shorter than chromosomal DNA; varies greatly by type",
                    singleStrandedFolding: "Single-stranded RNA can fold back on itself to form stem-loops, hairpins, and complex 3D structures"
                },

                typesOfRNA: {
                    messengerRNA: {
                        abbreviation: "mRNA",
                        function: "Carries genetic information from DNA to ribosomes for translation",
                        structure: {
                            fivePrimeCap: "7-methylguanosine cap at 5′ end — protects from exonuclease degradation; required for ribosome binding",
                            fivePrimeUTR: "5′ untranslated region — before the start codon",
                            codingSequence: "Triplet codons (AUG start → stop codon): each triplet specifies an amino acid",
                            threeprimeUTR: "3′ untranslated region — after stop codon; contains stability and regulatory signals",
                            polyATag: "Poly(A) tail of ~200 adenosine residues — added post-transcriptionally; stabilises mRNA",
                        },
                        prokaryoticDifference: "Prokaryotic mRNA is not capped or polyadenylated; often polycistronic (multiple genes per mRNA)"
                    },
                    transferRNA: {
                        abbreviation: "tRNA",
                        function: "Adaptor molecule — carries specific amino acid to ribosome; matches codon to amino acid",
                        structure: {
                            cloverleaf: "Cloverleaf secondary structure — 4 stems and 3 loops, formed by intramolecular base pairing",
                            Lshape: "L-shaped tertiary structure",
                            anticodon: "Anticodon loop contains 3 nucleotides complementary to the mRNA codon",
                            aminoacylSite: "3′-CCA-OH terminus: amino acid is attached here by aminoacyl-tRNA synthetase"
                        },
                        charging: "Aminoacyl-tRNA synthetase attaches correct amino acid to its cognate tRNA — requires ATP → aminoacyl-AMP → aminoacyl-tRNA; proofreading ensures high fidelity",
                        wobble: "Third base of codon (wobble position) can base-pair with multiple anticodon bases → one tRNA can recognise multiple codons"
                    },
                    ribosomalRNA: {
                        abbreviation: "rRNA",
                        function: "Structural and catalytic component of ribosomes",
                        types: {
                            prokaryotic: ["5S rRNA", "16S rRNA (small subunit; used for phylogenetics)", "23S rRNA (large subunit; has peptidyl transferase activity)"],
                            eukaryotic: ["5S rRNA", "5.8S, 18S rRNA (small subunit)", "28S rRNA (large subunit)"]
                        },
                        ribozyme: "23S/28S rRNA is the catalytic RNA (ribozyme) that catalyses peptide bond formation — ribosome is fundamentally a ribozyme"
                    },
                    smallNuclearRNA: {
                        abbreviation: "snRNA",
                        function: "Component of spliceosomes — catalyses splicing of pre-mRNA (removal of introns)",
                        examples: "U1, U2, U4, U5, U6 snRNAs"
                    },
                    microRNA: {
                        abbreviation: "miRNA",
                        function: "~22 nt non-coding RNA — binds complementary sequences in mRNA → induces degradation or translational repression",
                        role: "Post-transcriptional gene regulation; development, cell differentiation, disease (many miRNAs are dysregulated in cancer)"
                    },
                    smallInterferingRNA: {
                        abbreviation: "siRNA",
                        mechanism: "Double-stranded RNA → Dicer cleaves → single strand guides RISC complex → complementary mRNA cleaved → gene silencing",
                        applications: "RNAi — research tool and emerging therapeutics (e.g. inclisiran for hypercholesterolaemia)"
                    },
                    longNonCodingRNA: {
                        abbreviation: "lncRNA",
                        function: "Diverse regulatory roles: chromatin remodelling, transcription, post-transcriptional regulation",
                        example: "XIST RNA — coats inactive X chromosome → spreads chromatin silencing (X-inactivation)"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 4. DNA REPLICATION
            // ─────────────────────────────────────────────
            DNAReplication: {
                overview: "The process by which DNA is copied before cell division",

                principles: {
                    semiconservative: {
                        definition: "Each daughter DNA molecule consists of one original parental strand and one newly synthesised strand",
                        evidence: "Meselson-Stahl experiment (1958): ¹⁵N → ¹⁴N density centrifugation — demonstrated semiconservative replication definitively",
                        alternatives: "Conservative (both parental strands together) and dispersive models were ruled out"
                    },
                    directionality: "New strand synthesised 5′→3′; template read 3′→5′"
                },

                enzymesAndProteins: {
                    helicase: {
                        function: "Unwinds and separates the double helix at the replication fork — breaks H-bonds between base pairs",
                        energy: "Requires ATP hydrolysis"
                    },
                    SSB_proteins: {
                        fullName: "Single-strand binding proteins",
                        function: "Stabilise unwound single-stranded DNA — prevent re-annealing and protect from nucleases"
                    },
                    topoisomerase: {
                        function: "Relieves torsional stress (positive supercoiling) ahead of the replication fork by introducing transient single- or double-strand breaks",
                        types: "Topoisomerase I (single-strand breaks); Topoisomerase II (double-strand breaks — required to resolve interlocking daughter chromosomes)",
                        clinical: "Fluoroquinolone antibiotics inhibit bacterial topoisomerase II (DNA gyrase); camptothecin inhibits eukaryotic topoisomerase I (anticancer)"
                    },
                    primase: {
                        function: "Synthesises short RNA primers (~10 nt) complementary to the template strand",
                        necessity: "DNA polymerase cannot initiate a new strand — can only extend an existing 3′-OH"
                    },
                    DNAPolymerase: {
                        function: "Adds dNTPs complementary to template in 5′→3′ direction",
                        types: {
                            prokaryotic: {
                                pol3: "Main replicative polymerase — high processivity (uses β-clamp sliding clamp); 3′→5′ proofreading exonuclease",
                                pol1: "Removes RNA primers; fills gaps with DNA; has 5′→3′ exonuclease and 3′→5′ proofreading"
                            },
                            eukaryotic: {
                                polAlpha: "Primer synthesis (primase activity + short DNA extension)",
                                polDelta: "Lagging strand synthesis",
                                polEpsilon: "Leading strand synthesis",
                                PCNA: "Sliding clamp — increases processivity"
                            }
                        },
                        fidelity: "Error rate ~1 in 10⁷ by polymerase alone; ~1 in 10⁹ after proofreading; ~1 in 10¹⁰ after mismatch repair"
                    },
                    ligase: {
                        function: "Seals nicks (joins Okazaki fragments) by forming phosphodiester bonds between adjacent DNA segments",
                        energy: "Requires ATP (eukaryotes) or NAD⁺ (prokaryotes)"
                    }
                },

                replicationProcess: {
                    origin: "Replication begins at specific origins of replication (oriC in bacteria; multiple origins in eukaryotes)",
                    replicationFork: "Y-shaped junction where the helix is unwound and new strands are synthesised",
                    leadingStrand: {
                        definition: "Synthesised continuously in 5′→3′ direction toward the fork — only one primer needed",
                    },
                    laggingStrand: {
                        definition: "Synthesised discontinuously in 5′→3′ direction away from the fork — as Okazaki fragments",
                        okazakiFragments: "Short DNA fragments (~1000–2000 nt in prokaryotes; ~100–200 nt in eukaryotes), each initiated with a new RNA primer",
                        maturation: "Pol I replaces RNA primers with DNA; ligase joins adjacent fragments"
                    },
                    endReplication: {
                        problem: "DNA polymerase cannot replicate the very 5′ end of a linear chromosome (last RNA primer has no upstream 3′-OH to be replaced) → telomere shortening",
                        telomeres: "Repetitive sequences (TTAGGG in humans) at chromosome ends — protect coding DNA from shortening",
                        telomerase: "Reverse transcriptase — adds telomere repeats using internal RNA template; active in germline, stem cells, and cancer cells"
                    }
                },

                repairMechanisms: {
                    overview: "DNA damage occurs constantly — repair systems maintain genome integrity",
                    baseExcisionRepair: "Removes small, non-helix-distorting lesions (e.g. uracil from cytosine deamination)",
                    nucleotideExcisionRepair: "Removes bulky helix-distorting adducts (e.g. UV-induced pyrimidine dimers); XP patients lack NER enzymes → extreme UV sensitivity",
                    mismatchRepair: "Corrects base-pair mismatches and insertion/deletion loops after replication; distinguishes new strand from template",
                    homologousRecombination: "Error-free repair of double-strand breaks using sister chromatid as template",
                    NHEJ: "Non-homologous end joining — error-prone repair of double-strand breaks; joins broken ends without template"
                }
            },

            // ─────────────────────────────────────────────
            // 5. TRANSCRIPTION
            // ─────────────────────────────────────────────
            transcription: {
                overview: "Synthesis of RNA from a DNA template — the first step in gene expression",

                overview: "RNA synthesis from a DNA template; DNA → RNA",

                generalFeatures: {
                    enzyme: "RNA polymerase — no primer required; synthesises RNA 5′→3′; template read 3′→5′",
                    product: "RNA transcript (complementary to template strand; same sequence as non-template/coding strand, with U replacing T)",
                    strandRoles: {
                        templateStrand: "The strand read by RNA polymerase (3′→5′); also called antisense or minus strand",
                        codingStrand: "The non-template strand (5′→3′); has same sequence as the RNA (with T instead of U); also called sense or plus strand"
                    }
                },

                prokaryoticTranscription: {
                    RNAPolymerase: {
                        structure: "Core enzyme: α₂ββ′ω; with σ (sigma) factor = holoenzyme",
                        sigmaFactor: "Recognises promoter sequence and facilitates strand separation; dissociates after initiation"
                    },
                    stages: {
                        initiation: [
                            "1. σ factor recognises promoter (–10 and –35 elements relative to transcription start site)",
                            "2. RNA polymerase holoenzyme binds → forms closed complex",
                            "3. Helix melts locally (12–14 bp) → open complex",
                            "4. First phosphodiester bond formed → σ factor dissociates → elongation begins"
                        ],
                        elongation: "RNA polymerase moves 3′→5′ along template; synthesises RNA 5′→3′ at ~40–80 nt/s",
                        termination: {
                            rhoIndependent: "Stem-loop in RNA followed by poly-U stretch → RNA polymerase pauses and falls off",
                            rhoDependent: "Rho protein (helicase) tracks along RNA and unwinds RNA-DNA hybrid when polymerase pauses"
                        }
                    }
                },

                eukaryoticTranscription: {
                    RNAPolymerases: [
                        "RNA Pol I — synthesises large rRNA (18S, 28S, 5.8S); in nucleolus",
                        "RNA Pol II — synthesises mRNA and most small nuclear and micro RNAs",
                        "RNA Pol III — synthesises tRNA, 5S rRNA, small RNAs"
                    ],
                    promoters: {
                        TATABox: "Located ~25 bp upstream of transcription start; bound by TATA-binding protein (TBP) → nucleates pre-initiation complex",
                        generalTranscriptionFactors: "TFIIA, TFIIB, TFIID, TFIIE, TFIIF, TFIIH assemble at promoter with Pol II → pre-initiation complex",
                        enhancers: "Cis-regulatory elements up to millions of bp from the gene; bound by activator proteins → looping to promoter via mediator complex"
                    },
                    preRNAProcessing: {
                        fivePrimeCapping: "7-methylguanosine cap added co-transcriptionally to 5′ end → protects mRNA, required for ribosome recognition",
                        splicing: {
                            introns: "Non-coding intervening sequences removed from pre-mRNA",
                            exons: "Coding sequences retained → ligated together",
                            spliceosome: "Large RNA-protein complex (snRNPs containing U1, U2, U4, U5, U6 snRNAs) catalyses splicing",
                            mechanism: "Two transesterification reactions → lariat intermediate → intron released as lariat",
                            alternativeSplicing: "Different exons included/excluded → multiple protein isoforms from one gene; occurs in >90% of human multi-exon genes"
                        },
                        polyadenylation: "Cleavage of pre-mRNA ~10–30 nt downstream of AAUAAA signal + poly(A) polymerase adds ~200 A residues"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 6. THE GENETIC CODE
            // ─────────────────────────────────────────────
            geneticCode: {
                overview: "The rules by which nucleotide triplets specify amino acids",

                properties: {
                    triplet: "Each codon consists of 3 consecutive nucleotides → 4³ = 64 possible codons",
                    degenerate: "Multiple codons specify the same amino acid (synonymous codons); degeneracy mostly at third codon position (wobble)",
                    nonOverlapping: "Each nucleotide belongs to only one codon (reading frame)",
                    commaFree: "No punctuation between codons — reading frame set by start codon",
                    universal: "Nearly all organisms use the same genetic code (minor exceptions in some mitochondria and protists)",
                    startCodon: "AUG — methionine (Met); sets the reading frame; formyl-Met in prokaryotes",
                    stopCodons: ["UAA (ochre)", "UAG (amber)", "UGA (opal/umber)"] ,
                    noAminoAcidForStop: "Stop codons are recognised by release factors (proteins), not tRNAs"
                },

                readingFrame: {
                    definition: "The way a nucleotide sequence is divided into triplets depends on the start site",
                    frameshiftMutation: "Insertion or deletion of non-multiples of 3 bases → shifts reading frame → completely different downstream amino acid sequence → usually truncated or non-functional protein"
                },

                codonTable: {
                    reference: "64 codons: 61 encode amino acids, 3 are stop codons",
                    structure: "Organised by first, second, and third base position",
                    keyPatterns: [
                        "U in first position: Phe, Leu, Ser, Tyr, Cys, Trp, Stop",
                        "G-C rich codons (3rd codon position) often encode same amino acid as A-T rich (degeneracy)"
                    ]
                }
            },

            // ─────────────────────────────────────────────
            // 7. TRANSLATION
            // ─────────────────────────────────────────────
            translation: {
                overview: "Synthesis of a polypeptide according to the mRNA codon sequence",

                ribosome: {
                    function: "Provides platform for tRNA binding, peptide bond formation, and mRNA translocation",
                    structure: {
                        prokaryotic: "70S = 30S small subunit (16S rRNA + 21 proteins) + 50S large subunit (23S, 5S rRNA + 31 proteins)",
                        eukaryotic: "80S = 40S small subunit (18S rRNA) + 60S large subunit (28S, 5.8S, 5S rRNA)",
                        sites: {
                            Asite: "Aminoacyl site — incoming aminoacyl-tRNA binds here",
                            Psite: "Peptidyl site — growing polypeptide chain attached to tRNA",
                            Esite: "Exit site — deacylated tRNA exits here"
                        }
                    }
                },

                stages: {
                    initiation: {
                        prokaryotic: [
                            "1. 30S subunit binds Shine-Dalgarno sequence on mRNA (upstream of AUG)",
                            "2. Initiator tRNA (fMet-tRNA^fMet) binds P site with AUG codon",
                            "3. 50S subunit joins → 70S initiation complex formed",
                            "4. Requires initiation factors IF1, IF2 (GTPase), IF3 + GTP"
                        ],
                        eukaryotic: [
                            "1. 43S pre-initiation complex (40S + eIF2-GTP-Met-tRNA + other eIFs) scans mRNA from 5′ cap",
                            "2. Recognises AUG in Kozak consensus sequence",
                            "3. 60S subunit joins → 80S ribosome",
                            "Requires >10 eIFs; cap-dependent initiation"
                        ]
                    },
                    elongation: {
                        steps: [
                            "1. Decoding (A site): aminoacyl-tRNA delivered by EF-Tu (prokaryotes) / eEF1A (eukaryotes) + GTP; anticodon pairs with codon → GTP hydrolysis confirms correct pairing",
                            "2. Peptide bond formation: peptidyl transferase (23S rRNA) catalyses transfer of growing chain from P-site tRNA to A-site amino acid",
                            "3. Translocation: EF-G/eEF2 + GTP drives ribosome movement 3 nt (one codon) in 3′ direction; A→P, P→E, E→exit"
                        ],
                        rate: "~15–20 amino acids per second in prokaryotes; ~2–5 per second in eukaryotes"
                    },
                    termination: {
                        trigger: "Stop codon (UAA, UAG, UGA) enters A site — no cognate tRNA",
                        releaseFactors: {
                            prokaryotic: "RF1 (reads UAA, UAG), RF2 (reads UAA, UGA), RF3 (stimulates RF1/2 release)",
                            eukaryotic: "eRF1 (recognises all 3 stop codons), eRF3 (GTPase)"
                        },
                        mechanism: "Release factor mimics tRNA → peptidyl transferase catalyses transfer to water → polypeptide released; ribosome dissociates"
                    }
                },

                postTranslationalModification: {
                    overview: "Chemical changes to proteins after translation",
                    examples: [
                        "Phosphorylation (Ser, Thr, Tyr) — by kinases; signalling regulation",
                        "Glycosylation (Asn, Ser/Thr) — in ER and Golgi; creates glycoproteins",
                        "Acetylation (N-terminus or Lys) — affects stability and activity",
                        "Ubiquitination (Lys) — targets protein for proteasomal degradation",
                        "Cleavage of signal peptide — directs proteins to ER; signal peptide removed",
                        "Disulfide bond formation (Cys) — in ER for secreted proteins",
                        "Hydroxylation of Pro and Lys (collagen synthesis) — requires Vitamin C"
                    ]
                }
            },

            // ─────────────────────────────────────────────
            // 8. GENE REGULATION
            // ─────────────────────────────────────────────
            geneRegulation: {
                overview: "Mechanisms controlling when, where, and how much a gene is expressed",

                prokaryoticRegulation: {
                    operonModel: {
                        definition: "A cluster of functionally related genes under control of a single promoter/operator",
                        lacOperon: {
                            genes: "lacZ (β-galactosidase), lacY (permease), lacA (transacetylase)",
                            repressor: "Lac repressor binds operator → blocks transcription in absence of lactose",
                            induction: "Allolactose (lactose metabolite) binds repressor → conformational change → repressor leaves operator → transcription",
                            CATPrequirement: "Transcription maximised only when glucose is low: catabolite activator protein (CAP) + cAMP binds upstream → stimulates RNA polymerase binding",
                            dualControl: "Lac operon demonstrates both negative (repressor) and positive (CAP) control"
                        },
                        trpOperon: {
                            genes: "Encode enzymes for tryptophan biosynthesis",
                            repressor: "Trp repressor is inactive alone; binds tryptophan (corepressor) → active → binds operator → turns off transcription",
                            attenuation: "Additional regulatory mechanism — secondary structure of leader mRNA changes depending on ribosome stalling on Trp codons"
                        }
                    }
                },

                eukaryoticRegulation: {
                    transcriptionalControl: {
                        transcriptionFactors: "Sequence-specific DNA-binding proteins that activate or repress transcription",
                        domains: "DNA-binding domain (recognises specific sequence) + activation/repression domain (contacts basal transcription machinery or chromatin modifiers)",
                        commonMotifs: ["Helix-turn-helix", "Zinc finger", "Leucine zipper", "Helix-loop-helix"]
                    },
                    chromatinRemodelling: {
                        histoneAcetylation: "Acetylation of histone Lys residues → neutralises positive charge → weakens DNA-histone interaction → open chromatin → active transcription",
                        histoneDeacetylation: "Removes acetyl groups → condenses chromatin → represses transcription",
                        histoneMethylation: "Context-dependent: H3K4me3 (active promoter), H3K27me3 (Polycomb repression), H3K9me3 (heterochromatin)"
                    },
                    DNAmethylation: {
                        mechanism: "Methylation of cytosine at CpG dinucleotides by DNA methyltransferases (DNMTs) → generally represses transcription",
                        maintenance: "DNMT1 copies methylation pattern to new strand after replication (epigenetic memory)",
                        cancerRole: "Hypermethylation of tumour suppressor promoters → silencing → cancer"
                    }
                },

                epigenetics: {
                    definition: "Heritable changes in gene expression not involving changes in DNA sequence",
                    mechanisms: ["DNA methylation", "Histone modifications", "Non-coding RNA regulation", "Chromatin remodelling"],
                    imprinting: "Genomic imprinting — specific genes expressed from only one parental allele depending on methylation pattern",
                    examples: [
                        "Prader-Willi syndrome: loss of paternal imprinting at chromosome 15q11-q13",
                        "Angelman syndrome: loss of maternal imprinting at same region"
                    ]
                }
            },

            // ─────────────────────────────────────────────
            // 9. MUTATIONS
            // ─────────────────────────────────────────────
            mutations: {
                overview: "Changes in the DNA sequence and their consequences",

                types: {
                    pointMutations: {
                        transitions: "Purine → purine or pyrimidine → pyrimidine (e.g. A→G, C→T) — more common",
                        transversions: "Purine ↔ pyrimidine (e.g. A→T, G→C) — less common",
                        effectOnProtein: {
                            silent: "Synonymous codon change — same amino acid (due to degeneracy); no change in protein",
                            missense: "Different amino acid encoded — may or may not affect function",
                            nonsense: "Amino acid codon → stop codon → truncated, usually non-functional protein"
                        }
                    },
                    insertionsAndDeletions: {
                        frameshift: "Addition or deletion of non-multiple-of-3 bases → altered reading frame from the site of mutation onwards",
                        severe: "Usually cause loss of function — all downstream amino acids are wrong; premature stop codons likely"
                    },
                    expandingRepeats: {
                        definition: "Trinucleotide repeat sequences that can expand in meiosis",
                        examples: [
                            "Huntington's disease: CAG repeats in huntingtin gene → >36 repeats → polyglutamine tract → protein aggregation → neurodegeneration",
                            "Fragile X syndrome: CGG repeats in 5′ UTR of FMR1 gene → >200 repeats → methylation → gene silencing"
                        ]
                    }
                },

                mutagens: {
                    physical: ["UV light — pyrimidine dimers (C=C cross-links)", "Ionising radiation — double-strand breaks"],
                    chemical: [
                        "Alkylating agents (e.g. nitrogen mustard) — add alkyl groups to bases → mispair",
                        "Deaminating agents (e.g. nitrous acid) — converts C → U → GC → AT transitions",
                        "Intercalating agents (e.g. acridine dyes) — insert between base pairs → frameshift mutations"
                    ],
                    spontaneous: ["Cytosine deamination → uracil (most common spontaneous mutation)", "Depurination — loss of purine base", "Replication errors"]
                }
            },

            // ─────────────────────────────────────────────
            // 10. BIOTECHNOLOGY APPLICATIONS
            // ─────────────────────────────────────────────
            biotechnologyApplications: {
                overview: "Techniques that exploit nucleic acid properties for research, medicine, and industry",

                PCR: {
                    fullName: "Polymerase Chain Reaction",
                    purpose: "Amplify specific DNA sequences in vitro exponentially",
                    components: ["Template DNA", "Two specific primers (flanking the target)", "Taq polymerase (thermostable)", "dNTPs", "Buffer"],
                    steps: [
                        "1. Denaturation: 95°C — double strand melts",
                        "2. Annealing: 50–65°C — primers hybridise to complementary sequences on template",
                        "3. Extension: 72°C — Taq polymerase extends from 3′ end of primer"
                    ],
                    cycles: "30–35 cycles → up to ~10⁹ copies from 1 original",
                    variants: [
                        "RT-PCR: reverse transcriptase first converts mRNA → cDNA → PCR (used for COVID-19 testing, gene expression analysis)",
                        "qPCR (real-time PCR): fluorescent probes quantify DNA in real time",
                        "Long-range PCR: amplify up to 30 kb"
                    ]
                },

                gelElectrophoresis: {
                    purpose: "Separate DNA/RNA fragments by size",
                    principle: "Nucleic acids are negatively charged → migrate toward positive electrode through agarose gel; smaller fragments migrate farther",
                    visualisation: "Ethidium bromide (or SYBR Green) intercalates between bases → fluoresces under UV light",
                    application: "PCR product verification, restriction fragment analysis, genotyping"
                },

                restriction: {
                    restrictionEnzymes: {
                        definition: "Bacterial nucleases that cut double-stranded DNA at specific palindromic sequences (recognition sites)",
                        examples: [
                            "EcoRI: recognises GAATTC → cuts between G and A on both strands → 5′ AATT overhangs (sticky ends)",
                            "SmaI: CCC↓GGG → blunt ends"
                        ],
                        stickyVsBlunt: "Sticky ends (overhangs) facilitate ligation of compatible fragments; blunt ends can also be ligated"
                    },
                    RFLP: "Restriction Fragment Length Polymorphism — variations in restriction sites between individuals; used in forensic DNA profiling and genetic mapping"
                },

                cloning: {
                    recombinantDNA: "DNA from two different sources joined together",
                    plasmidVector: "Small circular DNA molecule used to carry foreign DNA into host cells (usually E. coli)",
                    steps: [
                        "1. Cut both vector and insert DNA with same restriction enzymes",
                        "2. Mix and ligate (DNA ligase seals nicks)",
                        "3. Transform into host cells",
                        "4. Select colonies containing insert (antibiotic resistance, blue-white screening)"
                    ],
                    applications: ["Produce recombinant proteins (insulin, EPO, vaccines)", "Gene therapy", "Research"]
                },

                DNASequencing: {
                    sangerMethod: {
                        principle: "Chain termination — di-deoxy NTPs (ddNTPs) lack 3′-OH → terminate chain at specific bases; fragments separated by size; base identity from ddNTP colour (fluorescent label)",
                        output: "Sequence of ~500–1000 bp per reaction"
                    },
                    nextGeneration: {
                        platforms: "Illumina, PacBio, Oxford Nanopore",
                        throughput: "Billions of reads; whole genome sequencing in hours",
                        applications: ["Human Genome Project", "Cancer genomics", "Pathogen identification", "GWAS"]
                    }
                },

                CRISPR_Cas9: {
                    origin: "Adaptive immune system of bacteria (Clustered Regularly Interspaced Short Palindromic Repeats)",
                    components: ["Cas9 endonuclease", "Guide RNA (gRNA) — ~20 nt complementary to target", "PAM sequence (NGG for SpCas9) adjacent to target site"],
                    mechanism: "gRNA guides Cas9 to complementary DNA sequence → Cas9 cuts both strands → double-strand break → repaired by NHEJ (disruption) or HDR (precise editing if template provided)",
                    applications: [
                        "Gene knockout (research)",
                        "Gene correction (therapy — e.g. sickle cell, thalassaemia)",
                        "Diagnostics (SHERLOCK, DETECTR)",
                        "Agriculture (disease-resistant crops)"
                    ],
                    ethicalConsiderations: "Germline editing raises ethical concerns about heritable changes to human genome"
                },

                gel_southern_northern: {
                    southernBlot: "DNA → gel → transfer to membrane → hybridise with labelled probe complementary to gene of interest → detect",
                    northernBlot: "RNA → same workflow → detects specific mRNA → indicates gene expression level",
                    difference: "Southern = DNA; Northern = RNA; Western = proteins (despite misleading names)"
                }
            },

            // ─────────────────────────────────────────────
            // 11. NUCLEIC ACIDS IN DISEASE
            // ─────────────────────────────────────────────
            nucleicAcidsInDisease: {
                overview: "Disease states arising from nucleic acid abnormalities or exploitation by pathogens",

                cancer: {
                    oncogenes: "Mutated or overexpressed proto-oncogenes → promote cell division (e.g. RAS mutation, MYC amplification)",
                    tumourSuppressors: "Loss-of-function mutations → remove growth brakes (e.g. p53, RB, BRCA1/2)",
                    p53: "Guardian of the genome — transcription factor activated by DNA damage → induces repair, cell cycle arrest, or apoptosis; mutated in >50% of cancers",
                    chromosomalInstability: "Errors in replication or repair → mutations, chromosomal translocations, aneuploidy"
                },

                viralPathogenesis: {
                    DNAViruses: "Replicate using host or viral DNA polymerase; integrate or replicate episomally (e.g. HPV, herpes)",
                    RNAViruses: "Use viral RNA polymerase (RdRp); no proofreading → high mutation rate (e.g. influenza)",
                    retroviruses: "HIV: RNA → reverse transcriptase → DNA → integrase → integrated into host genome (provirus)",
                    antivirals: "Target viral nucleic acid enzymes: nucleoside analogues (e.g. aciclovir, tenofovir), reverse transcriptase inhibitors, integrase inhibitors"
                },

                geneticDiseases: {
                    pointMutation: ["Sickle cell anaemia (Glu→Val in HBB)", "Cystic fibrosis (ΔF508 in CFTR)", "PKU (PAH mutations)"],
                    chromosomalAnomalies: ["Down syndrome: trisomy 21", "Turner syndrome: 45,X0", "Klinefelter syndrome: 47,XXY"],
                    expandingRepeats: ["Huntington's disease", "Myotonic dystrophy", "Fragile X"]
                }
            }
        },

        // ─────────────────────────────────────────────────
        // CROSS-CUTTING CONCEPTS
        // ─────────────────────────────────────────────────
        crossCuttingConcepts: {
            centralDogma: {
                statement: "DNA → RNA → Protein (Crick, 1958)",
                extensions: "Reverse transcription (RNA → DNA via retroviruses); RNA replication (RNA viruses); prions (protein → conformational change — no nucleic acid)",
                flow: "Replication (DNA → DNA) | Transcription (DNA → RNA) | Translation (RNA → Protein)"
            },
            structureFunctionRelationship: [
                "A-T has 2 H-bonds, G-C has 3 → GC-rich regions are more thermally stable",
                "2′-OH on ribose → RNA more reactive and less stable than DNA → appropriate for short-lived intermediates",
                "Single-stranded RNA folds into complex structures → functional ribozymes and regulatory molecules",
                "Antiparallel orientation enables complementary base pairing — information transfer by templating",
                "Semiconservative replication preserves epigenetic information (DNA methylation patterns)"
            ],
            commonErrors: [
                "Confusing template strand with coding strand direction",
                "Stating DNA polymerase requires no primer — it does; primase provides the RNA primer",
                "Confusing nucleoside and nucleotide — nucleoside has no phosphate; nucleotide has one or more phosphates",
                "Stating translation occurs in the nucleus — it occurs in the cytoplasm (on ribosomes)",
                "Confusing transcription and translation: transcription = DNA→RNA; translation = RNA→protein",
                "Stating RNA contains thymine — RNA contains uracil; DNA contains thymine"
            ],
            curriculumProgression: {
                junior: "DNA structure (double helix, base pairing, complementarity), cell division, genes and chromosomes",
                intermediate: "Nucleotide structure, replication (semi-conservative, enzymes), transcription, translation, genetic code, mutations, basic PCR",
                senior: "Detailed enzyme mechanisms, gene regulation (operons, TFs, epigenetics), RNA types, CRISPR, disease connections, next-generation sequencing"
            }
        },

        // ─────────────────────────────────────────────────
        // EXAMPLES (WORKED PROBLEMS)
        // ─────────────────────────────────────────────────
        examples: [
            {
                scenario: "A region of DNA has the sequence 5′-ATGCTAGCATGC-3′. Write the complementary strand and the mRNA produced from this template strand",
                solution: [
                    "1. Complementary DNA strand (antiparallel, 3′→5′): 3′-TACGATCGTACG-5′",
                    "2. To produce mRNA, the template strand (3′→5′) is used: 3′-TACGATCGTACG-5′",
                    "3. mRNA (5′→3′, same as coding strand but with U replacing T): 5′-AUGCUAGCAUGC-3′",
                    "4. Codons: AUG-CUA-GCA-UGC = Met-Leu-Ala-Cys"
                ]
            },
            {
                scenario: "Explain why the lagging strand requires multiple RNA primers during DNA replication but the leading strand requires only one",
                solution: [
                    "1. Both strands must be synthesised 5′→3′ (DNA polymerase can only add to 3′-OH)",
                    "2. Leading strand: runs toward the replication fork; can be synthesised continuously from one primer",
                    "3. Lagging strand: runs away from the fork; template is exposed in the wrong direction for continuous synthesis",
                    "4. Lagging strand is made as Okazaki fragments — each requires a new RNA primer where synthesis begins",
                    "5. Each fragment is initiated by primase; Pol III extends; Pol I removes primers and fills gaps; ligase joins fragments"
                ]
            },
            {
                scenario: "Describe the experimental evidence that DNA replication is semiconservative",
                solution: [
                    "1. Meselson and Stahl (1958) grew E. coli in ¹⁵N (heavy nitrogen) medium — all DNA became heavy (¹⁵N/¹⁵N)",
                    "2. Transferred to ¹⁴N (light nitrogen) medium — allowed one round of replication",
                    "3. Centrifuged DNA in CsCl density gradient",
                    "4. Conservative model would predict: one heavy band + one light band",
                    "5. Dispersive model would predict: one intermediate band",
                    "6. Semiconservative model would predict: one hybrid (¹⁵N/¹⁴N) intermediate band",
                    "7. Result: single intermediate density band after one generation — consistent ONLY with semiconservative replication",
                    "8. After two generations: equal bands of intermediate and light density — confirmed semiconservative"
                ]
            },
            {
                scenario: "Explain how CRISPR-Cas9 can be used to correct the sickle cell mutation",
                solution: [
                    "1. Sickle cell: A→T point mutation at position 6 of HBB gene (GAG→GTG → Glu→Val)",
                    "2. Design guide RNA (gRNA) complementary to sequence flanking the mutation site",
                    "3. gRNA guides Cas9 endonuclease to exact location in HBB gene",
                    "4. Cas9 cuts both strands at target site (double-strand break)",
                    "5. Provide correct donor template with wild-type sequence (A at position 6)",
                    "6. Cell repairs break by homology-directed repair (HDR) using the template → restores normal sequence",
                    "7. In patient's haematopoietic stem cells → gene-corrected cells → produce normal haemoglobin"
                ]
            }
        ],

        // ─────────────────────────────────────────────────
        // KEY TAKEAWAYS
        // ─────────────────────────────────────────────────
        keyTakeaways: [
            "Nucleotides consist of a phosphate group, pentose sugar, and nitrogenous base; nucleic acids are polynucleotide chains linked by 3′–5′ phosphodiester bonds",
            "DNA uses deoxyribose and thymine; RNA uses ribose and uracil",
            "DNA double helix: antiparallel complementary strands; A–T (2 H-bonds), G–C (3 H-bonds); Chargaff's rules",
            "DNA replication is semiconservative: each daughter strand is a hybrid of one old + one new strand (Meselson-Stahl)",
            "DNA polymerase requires a primer, synthesises 5′→3′, and has proofreading 3′→5′ exonuclease activity",
            "Leading strand is continuous; lagging strand is made as discontinuous Okazaki fragments",
            "Transcription (DNA → RNA) uses RNA polymerase; eukaryotic pre-mRNA is processed (capping, splicing, polyadenylation) before translation",
            "Translation (RNA → protein) occurs on ribosomes: aminoacyl-tRNA decodes mRNA codons; ribosomal rRNA catalyses peptide bond formation",
            "The genetic code is a triplet, degenerate, non-overlapping, near-universal code; AUG = start; UAA/UAG/UGA = stop",
            "CRISPR-Cas9 enables precise genome editing; PCR enables rapid DNA amplification — both have transformative applications in medicine and research"
        ]
    };

    return content;
}

handleEnzymes(problem) {
    const content = {
        topic: "Enzymes",
        category: "metabolism",
        summary: "Enzymes are biological catalysts — overwhelmingly proteins (with a small class of RNA catalysts called ribozymes) — that accelerate chemical reactions by lowering the activation energy without being consumed. Enzymes are responsible for nearly all metabolic transformations in living organisms and their precise regulation coordinates the vast network of cellular biochemistry. Mastery spans enzyme chemistry through kinetics, mechanisms, inhibition, regulation, and clinical applications.",

        components: {

            // ─────────────────────────────────────────────
            // 1. FOUNDATIONS
            // ─────────────────────────────────────────────
            foundations: {
                overview: "Core vocabulary, chemical nature, and general properties of enzymes",

                definition: {
                    statement: "Enzymes are biological catalysts that increase the rate of a chemical reaction without being permanently altered or consumed in the process",
                    mostAreProteins: "The vast majority of enzymes are proteins — globular proteins with specific 3D conformations",
                    ribozymes: "RNA molecules with catalytic activity — e.g. the peptidyl transferase activity of the 23S rRNA in the ribosome; RNase P; group I and II self-splicing introns",
                    biologicalSignificance: "Without enzymes, most biochemical reactions would proceed far too slowly to sustain life; enzymes can accelerate reactions by 10⁶ to 10²³-fold over the uncatalysed rate"
                },

                generalProperties: {
                    catalyst: "Lower activation energy (Ea) of the reaction → increase reaction rate",
                    notConsumed: "Enzyme is unchanged after the reaction — same enzyme can catalyse multiple reaction cycles",
                    equilibrium: "Enzymes do not change the thermodynamic equilibrium (ΔG) of a reaction — they only change the rate at which equilibrium is reached",
                    specificity: "Extremely specific — each enzyme catalyses one specific reaction or class of reactions with particular substrates",
                    regulated: "Enzyme activity is regulated by multiple mechanisms — allows metabolic control"
                },

                activationEnergy: {
                    definition: "The minimum energy required to convert reactants into the transition state — the highest-energy intermediate along the reaction coordinate",
                    transitionState: "Unstable, highest-energy species along the reaction coordinate — bonds are partially formed and partially broken",
                    howEnzymesLower: [
                        "Provide an alternative reaction pathway with a lower activation energy",
                        "Stabilise the transition state through electrostatic, H-bond, or covalent interactions",
                        "Do NOT change ΔG of the reaction — start and end energy levels are unchanged"
                    ],
                    energyDiagram: "Reaction coordinate diagram: y-axis = free energy; x-axis = reaction progress; uncatalysed has a high activation barrier; enzyme-catalysed pathway has a lower barrier — same ΔG"
                }
            },

            // ─────────────────────────────────────────────
            // 2. ENZYME STRUCTURE AND CLASSIFICATION
            // ─────────────────────────────────────────────
            enzymeStructureAndClassification: {
                overview: "How enzymes are built and systematically categorised",

                activeSite: {
                    definition: "The three-dimensional pocket or cleft where the substrate binds and the chemical reaction occurs",
                    properties: [
                        "Usually a cleft or crevice — relatively hydrophobic interior excludes water",
                        "Constitutes only ~3–4% of the enzyme's total volume",
                        "Made up of non-contiguous amino acid residues brought together by folding",
                        "Complementary shape, charge, and hydrophobicity to the substrate"
                    ],
                    residueRoles: {
                        bindingResidues: "Position and orient the substrate correctly",
                        catalyticResidues: "Participate directly in bond making/breaking (His, Asp, Glu, Cys, Ser are common catalytic residues)"
                    }
                },

                substrateBindingModels: {
                    lockAndKey: {
                        proposed: "Emil Fischer, 1894",
                        description: "The substrate fits the active site like a key in a lock — rigid, complementary shapes",
                        limitation: "Cannot explain conformational changes observed in enzymes upon substrate binding; does not account for how binding promotes catalysis"
                    },
                    inducedFit: {
                        proposed: "Daniel Koshland, 1958",
                        description: "Substrate binding induces a conformational change in the enzyme that optimises catalytic geometry",
                        evidence: [
                            "X-ray crystallography shows different enzyme conformations in free vs substrate-bound forms",
                            "Hexokinase closes tightly around glucose upon binding — excludes water from active site",
                            "Small substrate analogues bind but do not induce correct conformation → not catalysed"
                        ],
                        advantage: "Explains how binding energy distorts the substrate toward the transition state"
                    }
                },

                cofactorsAndCoenzymes: {
                    cofactors: {
                        definition: "Non-protein molecules or ions required for enzyme activity",
                        metalIons: {
                            examples: [
                                "Zn²⁺ — carbonic anhydrase, carboxypeptidase",
                                "Mg²⁺ — kinases (forms Mg-ATP complex), RuBisCO",
                                "Fe²⁺/Fe³⁺ — cytochrome enzymes, catalase",
                                "Cu²⁺ — cytochrome c oxidase, superoxide dismutase",
                                "Se (selenocysteine) — glutathione peroxidase"
                            ]
                        }
                    },
                    coenzymes: {
                        definition: "Organic non-protein molecules that transiently carry chemical groups or electrons",
                        table: [
                            { coenzyme: "NAD⁺/NADH",             vitaminPrecursor: "Niacin (B₃)",       role: "Electron/hydride carrier in oxidation reactions" },
                            { coenzyme: "NADP⁺/NADPH",           vitaminPrecursor: "Niacin (B₃)",       role: "Hydride carrier in reductive biosynthesis" },
                            { coenzyme: "FAD/FADH₂",             vitaminPrecursor: "Riboflavin (B₂)",   role: "Electron carrier; 2e⁻ + 2H⁺" },
                            { coenzyme: "CoA",                   vitaminPrecursor: "Pantothenate (B₅)", role: "Acyl group carrier" },
                            { coenzyme: "TPP",                   vitaminPrecursor: "Thiamine (B₁)",     role: "Aldehyde group transfer; decarboxylation" },
                            { coenzyme: "PLP (pyridoxal phosphate)", vitaminPrecursor: "Pyridoxine (B₆)", role: "Amino group transfer (transamination, decarboxylation)" },
                            { coenzyme: "Tetrahydrofolate (THF)", vitaminPrecursor: "Folate (B₉)",      role: "One-carbon unit transfer" },
                            { coenzyme: "Methylcobalamin",       vitaminPrecursor: "Cobalamin (B₁₂)",  role: "Methyl group transfer; rearrangements" },
                            { coenzyme: "Biotin",                vitaminPrecursor: "Biotin (B₇)",      role: "CO₂ carrier in carboxylation reactions" }
                        ]
                    },
                    holoenzyme: "Active enzyme with its cofactor bound",
                    apoenzyme: "Inactive enzyme protein without its cofactor"
                },

                ecClassification: {
                    description: "IUBMB systematic classification assigns each enzyme a four-part EC number",
                    classes: [
                        { class: 1, name: "Oxidoreductases", catalyse: "Oxidation-reduction reactions",                         examples: "Lactate dehydrogenase, cytochrome c oxidase" },
                        { class: 2, name: "Transferases",    catalyse: "Transfer of functional groups",                          examples: "Hexokinase, aminotransferases, kinases" },
                        { class: 3, name: "Hydrolases",      catalyse: "Hydrolysis (bond cleavage by water)",                   examples: "Proteases, lipases, amylase, lactase" },
                        { class: 4, name: "Lyases",          catalyse: "Addition/removal to double bonds; non-hydrolytic cleavage", examples: "Pyruvate decarboxylase, aldolase" },
                        { class: 5, name: "Isomerases",      catalyse: "Interconversion of isomers",                            examples: "Phosphoglucose isomerase, triose phosphate isomerase" },
                        { class: 6, name: "Ligases",         catalyse: "Bond formation coupled to ATP hydrolysis",              examples: "DNA ligase, glutamine synthetase, acetyl-CoA carboxylase" },
                        { class: 7, name: "Translocases",    catalyse: "Movement of ions/molecules across membranes",           examples: "Na⁺/K⁺-ATPase, ABC transporters" }
                    ]
                }
            },

            // ─────────────────────────────────────────────
            // 3. ENZYME SPECIFICITY
            // ─────────────────────────────────────────────
            enzymeSpecificity: {
                overview: "The remarkable precision with which enzymes select their substrates",

                types: {
                    absoluteSpecificity: {
                        definition: "Enzyme acts on only one specific substrate",
                        example: "Urease — only hydrolyses urea; glucose oxidase — only oxidises β-D-glucose"
                    },
                    groupSpecificity: {
                        definition: "Enzyme acts on structurally similar substrates sharing a common chemical group",
                        example: "Hexokinase — phosphorylates glucose, fructose, and mannose (all hexoses with a free 6-OH)"
                    },
                    linkageSpecificity: {
                        definition: "Enzyme specific for a particular type of chemical bond regardless of the rest of the molecule",
                        example: "Lipases — hydrolyse ester bonds; proteases — cleave peptide bonds"
                    },
                    stereospecificity: {
                        definition: "Enzyme distinguishes between stereoisomers — acts on only one",
                        examples: [
                            "L-amino acid oxidase — acts on L-amino acids only",
                            "Fumarase — only hydrates fumarate (trans) not maleate (cis)",
                            "Lactate dehydrogenase — specific for L-lactate"
                        ],
                        reason: "Active site is chiral — only one stereoisomer fits correctly"
                    }
                },

                basisOfSpecificity: {
                    complementarity: "Active site is complementary to the transition state, not just the substrate — explains why the enzyme binds TS better than S",
                    multipleContacts: "Specificity arises from multiple weak interactions (H-bonds, electrostatic, van der Waals) — each individually weak but collectively precise"
                }
            },

            // ─────────────────────────────────────────────
            // 4. ENZYME KINETICS
            // ─────────────────────────────────────────────
            enzymeKinetics: {
                overview: "Quantitative description of enzyme reaction rates and their dependence on substrate concentration",

                michaelisMentenKinetics: {
                    mechanism: {
                        reaction: "E + S ⇌ ES → E + P",
                        k1: "Rate constant for ES formation",
                        k_minus1: "Rate constant for ES dissociation back to E + S",
                        k2: "Rate constant for product formation (kcat) and enzyme release"
                    },

                    steadyStateAssumption: {
                        assumption: "The concentration of ES complex is constant (steady state) — rate of ES formation = rate of ES breakdown",
                        derivedBy: "Briggs and Haldane (1925) — more general than equilibrium assumption"
                    },

                    michaelisMentenEquation: {
                        formula: "v = Vmax[S] / (Km + [S])",
                        variables: {
                            v: "Initial reaction velocity",
                            Vmax: "Maximum velocity — achieved when all enzyme molecules are saturated with substrate",
                            S: "Substrate concentration",
                            Km: "Michaelis constant — substrate concentration at which v = Vmax/2"
                        },
                        shape: "Rectangular hyperbola — velocity increases with [S] but approaches Vmax asymptotically"
                    },

                    Km: {
                        definition: "Km = (k₋₁ + k₂) / k₁ — the substrate concentration at half-maximal velocity",
                        approximation: "When k₂ << k₋₁, Km ≈ Kd (dissociation constant) — indicates substrate affinity",
                        highKm: "High Km → low affinity (enzyme needs more substrate to reach half-Vmax)",
                        lowKm: "Low Km → high affinity (enzyme reaches half-Vmax at low [S])",
                        comparingEnzymes: "Lower Km enzyme is more efficient when substrate is limiting"
                    },

                    Vmax: {
                        definition: "Maximum velocity when all enzyme active sites are occupied by substrate",
                        dependence: "Vmax = kcat × [E]total — directly proportional to total enzyme concentration",
                        units: "μmol/min or nmol/s (amounts per time)"
                    },

                    kcat: {
                        definition: "Turnover number — the number of substrate molecules converted to product per enzyme molecule per second (when fully saturated)",
                        examples: [
                            "Carbonic anhydrase: ~10⁶ s⁻¹ — one of the fastest enzymes known",
                            "Lysozyme: ~0.5 s⁻¹ — relatively slow",
                            "Typical enzyme: 1–10⁴ s⁻¹"
                        ]
                    },

                    catalyticEfficiency: {
                        formula: "kcat/Km — second-order rate constant relating velocity to free (unsaturated) enzyme and substrate",
                        interpretation: "How efficiently the enzyme converts substrate to product at low [S]; limited by diffusion (~10⁸–10⁹ M⁻¹s⁻¹)",
                        diffusionLimit: "kcat/Km ≈ 10⁸–10⁹ M⁻¹s⁻¹ means the enzyme is 'catalytically perfect' — reaction rate limited only by how fast substrate diffuses to enzyme; e.g. triosephosphate isomerase"
                    }
                },

                lineweaverBurkPlot: {
                    description: "Double reciprocal plot — 1/v vs 1/[S] — linearises the Michaelis-Menten equation",
                    equation: "1/v = (Km/Vmax)(1/[S]) + 1/Vmax",
                    intercepts: {
                        yIntercept: "1/Vmax",
                        xIntercept: "-1/Km",
                        slope: "Km/Vmax"
                    },
                    advantage: "Graphically estimates Km and Vmax; easily visualises type of inhibition",
                    disadvantage: "Distorts experimental error — data points at low [S] (large 1/[S]) have high error and disproportionate influence on line fit"
                },

                multisubstrate: {
                    sequential: "All substrates bind before any product leaves; random or ordered",
                    pingPong: "One substrate binds and one product leaves before second substrate binds; enzyme alternates between two forms (e.g. aminotransferases)"
                }
            },

            // ─────────────────────────────────────────────
            // 5. CATALYTIC MECHANISMS
            // ─────────────────────────────────────────────
            catalyticMechanisms: {
                overview: "Chemical strategies used by enzymes to lower activation energy",

                generalMechanisms: {
                    acidBaseCatalysis: {
                        definition: "Amino acid side chains act as general acids (proton donors) or general bases (proton acceptors) during the reaction",
                        commonResidues: "Histidine (pKa ~6 — best general acid/base at physiological pH), Asp, Glu, Lys, Cys",
                        example: "Serine proteases — His57 acts as general base to activate Ser195 for nucleophilic attack"
                    },
                    covalentCatalysis: {
                        definition: "Enzyme forms a transient covalent bond with the substrate — creating a more reactive intermediate",
                        examples: [
                            "Serine proteases — acyl-enzyme intermediate (Ser-O-C=O)",
                            "Pyruvate decarboxylase — hydroxyethyl-TPP intermediate",
                            "Glyceraldehyde-3-phosphate dehydrogenase — thioester intermediate with Cys"
                        ]
                    },
                    metalIonCatalysis: {
                        definition: "Metal ions activate electrophilic substrates, stabilise charged transition states, or orient substrates",
                        examples: [
                            "Carbonic anhydrase: Zn²⁺ activates water (lowers pKa from 15.7 to 7) → nucleophilic attack on CO₂",
                            "Carboxypeptidase: Zn²⁺ polarises peptide carbonyl → nucleophilic attack",
                            "Kinases: Mg²⁺ chelates ATP β and γ phosphates → reduces charge repulsion → facilitates transfer"
                        ]
                    },
                    proximityAndOrientation: {
                        definition: "Enzyme binds substrates in precise positions and orientations that maximise probability of productive collisions",
                        calculation: "Can account for 10⁸-fold rate enhancement over intermolecular reaction in solution"
                    },
                    transitionStateStabilisation: {
                        definition: "Enzyme active site is complementary to the transition state structure, not the ground state — preferentially stabilises TS",
                        evidence: [
                            "Transition state analogues bind much more tightly than substrates (Kd 10⁻⁸ to 10⁻¹⁵ M vs mM for substrate)",
                            "Carbonic anhydrase binds sulfonamide (TS analogue) 10,000× tighter than substrate"
                        ],
                        application: "Drug design — TS analogues are potent enzyme inhibitors (e.g. statins mimic HMG-CoA TS; HIV protease inhibitors)"
                    },
                    desolvation: {
                        definition: "Substrates expelled from water into non-polar active site — removal of competing water molecules enhances catalysis",
                        example: "Hexokinase domain closure excludes water → prevents futile ATP hydrolysis"
                    }
                },

                serineProteases: {
                    overview: "Well-studied mechanistic class — illustrates acid-base + covalent catalysis",
                    members: ["Chymotrypsin", "Trypsin", "Elastase", "Thrombin", "Subtilisin"],
                    catalyticTriad: "Ser195 – His57 – Asp102 (in chymotrypsin numbering)",
                    mechanism: [
                        "1. Substrate binding: His57 deprotonates Ser195 (general base) → Ser195 O attacks substrate carbonyl",
                        "2. Tetrahedral intermediate I stabilised by oxyanion hole (backbone N-H bonds from Gly193 and Ser195)",
                        "3. Acylation: C-N bond breaks → amine product leaves → acyl-enzyme intermediate forms",
                        "4. Deacylation: water acts as nucleophile (His57 activates) → second tetrahedral intermediate",
                        "5. Carboxylate product released; enzyme regenerated"
                    ],
                    specificity: {
                        chymotrypsin: "Cleaves after large hydrophobic residues (Phe, Trp, Tyr) — S1 pocket is large and hydrophobic",
                        trypsin: "Cleaves after positively charged residues (Lys, Arg) — S1 pocket contains Asp189 which forms salt bridge",
                        elastase: "Cleaves after small residues (Ala, Val, Gly) — S1 pocket blocked by Val216 and Thr226"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 6. ENZYME INHIBITION
            // ─────────────────────────────────────────────
            enzymeInhibition: {
                overview: "Molecules that reduce enzyme activity — crucial for drug design and metabolic regulation",

                irreversibleInhibition: {
                    definition: "Inhibitor forms a covalent bond with the enzyme — permanently inactivates it (until enzyme is degraded)",
                    examples: [
                        "Aspirin — irreversibly acetylates Ser530 of COX-1 and COX-2 → inhibits prostaglandin synthesis",
                        "Penicillin — irreversibly acylates transpeptidase (PBP) active site Ser → blocks bacterial cell wall synthesis",
                        "Nerve agents (sarin, VX) — phosphorylate active site Ser of acetylcholinesterase → accumulation of ACh at synapses → convulsions, death",
                        "DFMO — irreversible ('suicide') inhibitor of ornithine decarboxylase"
                    ],
                    suicideInhibitors: {
                        definition: "Mechanism-based inhibitors — are activated by the enzyme's own catalytic mechanism and then covalently trap the enzyme",
                        examples: ["Aspirin", "Allopurinol (xanthine oxidase)", "5-fluorouracil (thymidylate synthase after activation)"]
                    }
                },

                reversibleInhibition: {
                    competitive: {
                        definition: "Inhibitor competes with substrate for the active site — binds the free enzyme, not the ES complex",
                        effects: {
                            Vmax: "Unchanged — at sufficiently high [S], substrate outcompetes inhibitor",
                            Km: "Increased (apparent Km rises) — more substrate needed to achieve Vmax/2",
                            apparentKm: "Km(app) = Km(1 + [I]/Ki)"
                        },
                        lineweaverBurk: "Lines intersect on the y-axis (same 1/Vmax); x-intercept moves toward origin (apparent Km increases)",
                        examples: [
                            "Malonate inhibits succinate dehydrogenase (structural analogue of succinate)",
                            "Statins (competitive inhibitors of HMG-CoA reductase) — cholesterol synthesis",
                            "Methotrexate (competitive inhibitor of dihydrofolate reductase) — cancer therapy",
                            "Ibuprofen (competitive inhibitor of COX)"
                        ]
                    },
                    noncompetitive: {
                        definition: "Inhibitor binds equally well to free enzyme and ES complex — binds a site other than the active site",
                        effects: {
                            Vmax: "Decreased (apparent Vmax falls)",
                            Km: "Unchanged — substrate can still bind normally"
                        },
                        lineweaverBurk: "Lines intersect on the x-axis (same -1/Km); y-intercept rises (apparent Vmax decreases)",
                        examples: ["Heavy metal ions binding to enzyme surface thiols", "Cyanide inhibition of cytochrome c oxidase (binds non-active site haem)"]
                    },
                    uncompetitive: {
                        definition: "Inhibitor binds only to the ES complex — not to free enzyme",
                        effects: {
                            Vmax: "Decreased",
                            Km: "Decreased (apparent Km also falls)"
                        },
                        lineweaverBurk: "Parallel lines — same slope; both y-intercept and x-intercept shift",
                        rarity: "Less common in single-substrate reactions; more common in multi-substrate reactions",
                        note: "Paradoxically, decreasing Km means enzyme appears to have higher affinity, but max rate is reduced"
                    },
                    mixedInhibition: {
                        definition: "Inhibitor binds to both free enzyme and ES complex, but with different affinities",
                        effects: "Vmax decreases; Km may increase or decrease depending on relative affinities",
                        lineweaverBurk: "Lines intersect in second quadrant (not on either axis)"
                    }
                },

                inhibitionSummaryTable: {
                    rows: [
                        { type: "Competitive",    Vmax: "Unchanged",  Km: "Increased",   LBPlot: "Intersect on y-axis" },
                        { type: "Non-competitive",Vmax: "Decreased",  Km: "Unchanged",   LBPlot: "Intersect on x-axis" },
                        { type: "Uncompetitive",  Vmax: "Decreased",  Km: "Decreased",   LBPlot: "Parallel lines" },
                        { type: "Mixed",          Vmax: "Decreased",  Km: "Increased or decreased", LBPlot: "Intersect in quadrant 2" }
                    ]
                }
            },

            // ─────────────────────────────────────────────
            // 7. ENZYME REGULATION
            // ─────────────────────────────────────────────
            enzymeRegulation: {
                overview: "Mechanisms by which enzyme activity is controlled to meet cellular needs",

                allostericRegulation: {
                    definition: "Regulation by binding of a small molecule (allosteric effector) at a site distinct from the active site → induces conformational change → alters activity",
                    allostericActivator: "Binds → stabilises active conformation (R state) → increases activity",
                    allostericInhibitor: "Binds → stabilises inactive conformation (T state) → decreases activity",
                    cooperativity: {
                        definition: "Binding of one substrate or effector molecule affects binding of subsequent molecules — positive (increases affinity) or negative",
                        hillEquation: "v = Vmax[S]ⁿ / (K₀.₅ⁿ + [S]ⁿ); n = Hill coefficient",
                        hillCoefficient: "n > 1 = positive cooperativity (sigmoidal curve); n = 1 = non-cooperative (Michaelis-Menten hyperbola); n < 1 = negative cooperativity",
                        sigmoidalCurve: "Allosteric enzymes show sigmoidal v vs [S] plots — sensitive switch-like response to small changes in [S]"
                    },
                    concertedModel: {
                        name: "MWC model (Monod, Wyman, Changeux, 1965)",
                        assumption: "All subunits switch simultaneously between R (relaxed, active) and T (tense, inactive) states — no hybrid states",
                        allostericEffect: "Activators stabilise R; inhibitors stabilise T"
                    },
                    sequentialModel: {
                        name: "KNF model (Koshland, Nemethy, Filmer, 1966)",
                        assumption: "Conformational changes are induced sequentially — hybrid states allowed; binding of substrate to one subunit induces change in adjacent subunit"
                    },
                    examples: [
                        "Phosphofructokinase-1: activated by AMP/ADP, inhibited by ATP/citrate — key regulatory enzyme of glycolysis",
                        "ATCase (aspartate transcarbamoylase): inhibited by CTP (end product of pyrimidine synthesis); activated by ATP",
                        "Haemoglobin (not an enzyme but classic allosteric protein): cooperative O₂ binding, regulated by H⁺, CO₂, BPG"
                    ]
                },

                covalentModification: {
                    phosphorylation: {
                        definition: "Addition of phosphate group (from ATP) to Ser, Thr, or Tyr residues by protein kinases; removed by phosphatases",
                        effect: "Can activate or inhibit enzyme — depends on the specific enzyme",
                        reversibility: "Readily reversible — efficient on/off switch",
                        examples: [
                            "Glycogen phosphorylase: phosphorylation activates (breaks down glycogen)",
                            "Glycogen synthase: phosphorylation inhibits (stops glycogen synthesis)",
                            "Pyruvate dehydrogenase: phosphorylation inhibits"
                        ],
                        hormonalControl: "Adrenaline → cAMP → PKA → phosphorylates target enzymes in seconds (signal cascade amplification)"
                    },
                    adenylation: "Attachment of AMP group — regulates glutamine synthetase in bacteria",
                    glycosylation: "N- or O-linked sugars can alter enzyme activity or stability",
                    acetylation: "Histone acetyltransferases (HATs) regulate gene expression; sirtuins deacetylate metabolic enzymes in response to NAD⁺/NADH ratio"
                },

                proteolytic: {
                    zymogens: {
                        definition: "Inactive enzyme precursors activated by proteolytic cleavage — irreversible activation",
                        examples: [
                            "Chymotrypsinogen → chymotrypsin (cleavage at Arg15-Ile16 by trypsin → conformational change forms active site)",
                            "Pepsinogen → pepsin (autocatalytic at pH < 5)",
                            "Prothrombin → thrombin (clotting cascade)",
                            "Trypsinogen → trypsin (by enterokinase in small intestine)"
                        ],
                        advantage: "Prevents damaging activity in inappropriate locations (e.g. digestive enzymes inactive until reaching intestinal lumen)"
                    }
                },

                feedbackInhibition: {
                    definition: "The end product of a metabolic pathway inhibits an enzyme early in the pathway (usually the first committed step)",
                    mechanism: "End product is an allosteric inhibitor of the first pathway-specific enzyme",
                    advantage: "Prevents over-accumulation of product; conserves resources and energy",
                    examples: [
                        "Threonine → … → Isoleucine: isoleucine allosterically inhibits threonine deaminase (first committed step)",
                        "CTP inhibits ATCase — first committed step of pyrimidine synthesis",
                        "Glucose-6-phosphate inhibits hexokinase in muscle"
                    ],
                    cumulativeFeedback: "In branched pathways, multiple end products each partially inhibit the first enzyme — only complete inhibition when all products are present"
                },

                compartmentation: {
                    definition: "Metabolic pathways are physically separated in different cellular compartments — prevents futile cycles",
                    examples: [
                        "Fatty acid synthesis (cytoplasm) vs β-oxidation (mitochondrial matrix) — opposite pathways in different locations",
                        "Gluconeogenesis (cytoplasm) vs glycolysis (cytoplasm) — regulated reciprocally to prevent futile cycling"
                    ]
                },

                geneExpression: {
                    definition: "Long-term regulation — controlling how much enzyme protein is synthesised",
                    induction: "Substrate or signal induces transcription of enzyme gene (e.g. lac operon induction by allolactose)",
                    repression: "End product represses enzyme synthesis (e.g. trp operon repression by tryptophan)",
                    timeScale: "Minutes to hours — slower than allosteric or covalent regulation (seconds)"
                }
            },

            // ─────────────────────────────────────────────
            // 8. FACTORS AFFECTING ENZYME ACTIVITY
            // ─────────────────────────────────────────────
            factorsAffectingActivity: {
                overview: "Environmental and chemical variables that influence enzyme reaction rates",

                temperature: {
                    generalTrend: "Rate increases with temperature (more kinetic energy → more productive collisions) up to the optimum",
                    optimum: "Temperature at which reaction rate is maximum — balances rate increase vs denaturation",
                    aboveOptimum: "Temperature exceeds threshold → non-covalent bonds broken → denaturation → loss of active site structure → sharp decrease in activity",
                    Q10: "Q₁₀ = (rate at T + 10°C) / (rate at T) — typically 2–3 for enzyme-catalysed reactions (below optimum)",
                    adaptations: [
                        "Thermophile enzymes (e.g. Taq polymerase from Thermus aquaticus): stable up to 95°C — more disulfide bonds, salt bridges, hydrophobic core",
                        "Psychrophile enzymes: more flexible at low temperatures — higher proportion of glycine, fewer Pro residues"
                    ],
                    curve: "Bell-shaped curve: rate rises with T → peaks at optimum → falls sharply above optimum due to denaturation"
                },

                pH: {
                    generalTrend: "Each enzyme has an optimal pH at which activity is maximal",
                    mechanism: "pH alters protonation state of catalytic residues → changes their ability to donate/accept protons in catalysis; extreme pH denatures enzyme",
                    examples: [
                        "Pepsin: pH optimum 1.5–2 (stomach acid environment)",
                        "Salivary amylase: pH optimum ~7 (mouth)",
                        "Trypsin: pH optimum ~8 (small intestine, where pancreatic bicarbonate neutralises acid)",
                        "Alkaline phosphatase: pH optimum ~9–10"
                    ],
                    curve: "Bell-shaped pH activity curve — activity peaks at optimum pH, falls on either side"
                },

                substrateConcentration: {
                    trend: "Rate increases with [S] → plateaus at Vmax when all enzyme molecules are saturated",
                    kineticsCurve: "Rectangular hyperbola for single-substrate Michaelis-Menten enzyme; sigmoidal for allosteric enzyme",
                    interpretation: "At low [S]: rate ∝ [S] (first order); at high [S]: rate = Vmax (zero order — enzyme is saturating)"
                },

                enzymeConcentration: {
                    trend: "At constant [S], reaction rate is directly proportional to [enzyme] — more enzyme molecules available to bind substrate",
                    limit: "Only true when [S] >> Km (enzyme not limiting); if [S] is low, increasing enzyme beyond a point gives diminishing returns"
                },

                coenzymesAndCofactors: {
                    requirement: "Many enzymes require coenzymes/metal ions — absence of cofactor → inactive apoenzyme",
                    clinicalRelevance: "Vitamin deficiencies impair enzyme function — beriberi (B₁/TPP), pellagra (B₃/NAD⁺), scurvy (Vitamin C/prolyl hydroxylase)"
                }
            },

            // ─────────────────────────────────────────────
            // 9. DIGESTIVE ENZYMES
            // ─────────────────────────────────────────────
            digestiveEnzymes: {
                overview: "Hydrolytic enzymes secreted along the digestive tract to break down dietary macromolecules",

                salivaryGlands: {
                    salivaryAmylase: {
                        substrate: "Starch (α(1→4) glycosidic bonds)",
                        products: "Maltose, maltotriose, dextrins",
                        pH: "Optimal ~7",
                        note: "Inactivated by stomach acid; limited time to act in mouth"
                    },
                    salivaryLipase: {
                        substrate: "Triacylglycerols (short and medium chain)",
                        note: "Contributes to initial fat digestion; continues briefly in stomach"
                    }
                },

                stomach: {
                    pepsin: {
                        substrate: "Proteins — cleaves after aromatic residues (Phe, Tyr, Trp)",
                        precursor: "Pepsinogen — secreted by chief cells; autocatalytically activated at pH < 5",
                        pH: "Optimal 1.5–2",
                        zymogen: true
                    },
                    gastricLipase: {
                        substrate: "Triacylglycerols (short and medium chain)",
                        pH: "Optimal ~4-5"
                    }
                },

                pancreas: {
                    secretion: "Acinar cells secrete zymogens and active enzymes into pancreatic duct → small intestine",
                    activation: "Trypsinogen activated by enterokinase (duodenal brush border enzyme) → trypsin → activates all other pancreatic zymogens",
                    enzymes: {
                        trypsin: {
                            substrate: "Proteins — cleaves after Lys and Arg",
                            precursor: "Trypsinogen → activated by enterokinase + autocatalysis"
                        },
                        chymotrypsin: {
                            substrate: "Proteins — cleaves after Phe, Trp, Tyr",
                            precursor: "Chymotrypsinogen → activated by trypsin"
                        },
                        elastase: {
                            substrate: "Proteins/elastin — cleaves after small residues (Ala, Val)",
                            precursor: "Proelastase → activated by trypsin"
                        },
                        carboxypeptidase: {
                            substrate: "Proteins — exopeptidase; removes C-terminal amino acids",
                            types: "Carboxypeptidase A (hydrophobic C-terminal residues), B (basic residues)"
                        },
                        pancreaticAmylase: {
                            substrate: "Starch — α(1→4) bonds → maltose, maltotriose, dextrins",
                            pH: "Optimal ~7"
                        },
                        pancreaticLipase: {
                            substrate: "Triacylglycerols — hydrolyses sn-1 and sn-3 positions → 2-monoacylglycerol + 2 fatty acids",
                            requirement: "Requires bile salts (emulsification) and colipase (anchors lipase to lipid surface)"
                        },
                        phospholipaseA2: {
                            substrate: "Phospholipids — cleaves sn-2 fatty acid → lysophospholipid + fatty acid",
                            precursor: "Prophospholipase A2 → activated by trypsin"
                        },
                        ribonuclease_deoxyribonuclease: {
                            substrates: "RNA and DNA in food → nucleotides"
                        }
                    }
                },

                smallIntestine: {
                    brushBorderEnzymes: {
                        location: "Apical membrane of enterocytes (microvilli)",
                        enzymes: [
                            { enzyme: "Maltase", substrate: "Maltose → 2 glucose" },
                            { enzyme: "Sucrase", substrate: "Sucrose → glucose + fructose" },
                            { enzyme: "Lactase", substrate: "Lactose → glucose + galactose" },
                            { enzyme: "Dextrinase", substrate: "α-limit dextrins → glucose" },
                            { enzyme: "Aminopeptidase", substrate: "Oligopeptides → amino acids from N-terminus" },
                            { enzyme: "Dipeptidase", substrate: "Dipeptides → 2 amino acids" }
                        ]
                    }
                },

                protectionFromSelfDigestion: {
                    zymogens: "Digestive proteases stored and secreted as inactive zymogens",
                    mucusLayer: "Gastric and intestinal mucus protects epithelial cells from acid and proteases",
                    pancreatitisRisk: "Premature activation of trypsinogen within the pancreas → acute pancreatitis (self-digestion of pancreatic tissue)"
                }
            },

            // ─────────────────────────────────────────────
            // 10. CLINICALLY IMPORTANT ENZYMES
            // ─────────────────────────────────────────────
            clinicallyImportantEnzymes: {
                overview: "Enzymes as diagnostic biomarkers and drug targets",

                diagnosticBiomarkers: {
                    principle: "Damaged or dying cells release intracellular enzymes into blood — measured to diagnose organ damage",
                    examples: [
                        {
                            enzyme: "Troponin I and T",
                            source: "Cardiac muscle",
                            use: "Gold standard biomarker for myocardial infarction (heart attack)",
                            timing: "Rises within 3–6 hours of MI; peaks at 12–24 hours; remains elevated ~7–14 days"
                        },
                        {
                            enzyme: "Creatine kinase MB (CK-MB)",
                            source: "Cardiac muscle",
                            use: "Cardiac damage; rises and falls faster than troponin — useful for re-infarction detection"
                        },
                        {
                            enzyme: "AST and ALT (aminotransferases)",
                            source: "Liver (ALT more specific), heart, muscle",
                            use: "Liver disease diagnosis (hepatitis, cirrhosis, drug toxicity); ALT > AST suggests viral hepatitis"
                        },
                        {
                            enzyme: "Alkaline phosphatase (ALP)",
                            source: "Liver (bile ducts), bone, intestine",
                            use: "Cholestasis, Paget's disease, bone tumours"
                        },
                        {
                            enzyme: "Gamma-glutamyl transferase (GGT)",
                            source: "Liver, bile ducts",
                            use: "Sensitive marker for cholestasis and alcohol liver disease"
                        },
                        {
                            enzyme: "Amylase and Lipase",
                            source: "Pancreas, salivary glands",
                            use: "Acute pancreatitis diagnosis — lipase more specific"
                        },
                        {
                            enzyme: "Lactate dehydrogenase (LDH)",
                            source: "Many tissues",
                            use: "Tissue damage (non-specific); haemolysis, lymphoma"
                        },
                        {
                            enzyme: "PSA (prostate-specific antigen)",
                            source: "Prostate gland (a serine protease)",
                            use: "Prostate cancer screening and monitoring"
                        }
                    ]
                },

                enzymeAsTherapeuticTargets: {
                    examples: [
                        { drug: "Statins (e.g. atorvastatin)", target: "HMG-CoA reductase", mechanism: "Competitive inhibition → reduces cholesterol synthesis", use: "Hypercholesterolaemia; cardiovascular disease prevention" },
                        { drug: "ACE inhibitors (e.g. lisinopril)", target: "Angiotensin-converting enzyme", mechanism: "Competitive inhibition → reduces angiotensin II → vasodilation", use: "Hypertension, heart failure" },
                        { drug: "Methotrexate", target: "Dihydrofolate reductase (DHFR)", mechanism: "Competitive inhibition → reduces THF → blocks DNA synthesis", use: "Cancer, rheumatoid arthritis" },
                        { drug: "Aspirin", target: "COX-1 and COX-2", mechanism: "Irreversible acetylation → blocks prostaglandin synthesis", use: "Anti-inflammatory, analgesic, antiplatelet" },
                        { drug: "Penicillin", target: "DD-transpeptidase (PBP)", mechanism: "Irreversible acylation → blocks peptidoglycan cross-linking → bacterial cell lysis", use: "Bacterial infections" },
                        { drug: "Allopurinol", target: "Xanthine oxidase", mechanism: "Suicide inhibitor (activated to oxypurinol) → blocks uric acid synthesis", use: "Gout" },
                        { drug: "Oseltamivir (Tamiflu)", target: "Influenza neuraminidase", mechanism: "Competitive TS analogue inhibitor → virus trapped on host cell surface", use: "Influenza treatment and prophylaxis" },
                        { drug: "Sildenafil (Viagra)", target: "Phosphodiesterase type 5 (PDE5)", mechanism: "Competitive inhibitor → increases cGMP → smooth muscle relaxation", use: "Erectile dysfunction; pulmonary hypertension" }
                    ]
                },

                enzymeReplacementTherapy: {
                    definition: "Intravenous infusion of functional enzyme to treat enzyme deficiency diseases",
                    examples: [
                        "Gaucher's disease: imiglucerase (β-glucocerebrosidase)",
                        "Pompe's disease: alglucosidase alfa (acid α-glucosidase)",
                        "Fabry's disease: agalsidase alfa/beta"
                    ],
                    challenge: "Enzymes are large, immunogenic proteins — must target to correct tissue/organelle"
                }
            },

            // ─────────────────────────────────────────────
            // 11. ENZYME TECHNOLOGY AND APPLICATIONS
            // ─────────────────────────────────────────────
            enzymeTechnology: {
                overview: "Industrial, research, and therapeutic uses of enzymes",

                industrialEnzymes: {
                    food: [
                        "Amylases — starch hydrolysis → high-fructose corn syrup production",
                        "Proteases — cheese making (chymosin = rennet), meat tenderising, bread making",
                        "Lipases — cheese ripening, detergent formulations",
                        "Pectinases — fruit juice clarification",
                        "Glucose isomerase — converts glucose to fructose (sweeter)"
                    ],
                    detergents: [
                        "Proteases — remove protein stains (blood, grass)",
                        "Lipases — remove fat stains",
                        "Amylases — remove starch stains",
                        "Cellulases — fabric conditioning"
                    ],
                    textile: ["Cellulases — stonewashing denim", "Amylases — desizing of fabrics"],
                    pharmaceutical: ["Asparaginase — cancer therapy (depletes asparagine)", "Streptokinase/tPA — thrombolytics (lyse blood clots in MI/stroke)"],
                    PCR: "Taq polymerase and Pfu polymerase — heat-stable DNA polymerases from thermophiles"
                },

                immobilisedEnzymes: {
                    definition: "Enzyme attached to an insoluble support — allows reuse, continuous processing",
                    methods: ["Adsorption", "Covalent cross-linking", "Entrapment in gel matrix", "Encapsulation"],
                    advantages: "Enzyme reusable; easy separation from product; more stable; continuous production",
                    examples: [
                        "Glucose isomerase — immobilised for continuous HFCS production",
                        "Penicillin acylase — deprotects penicillin for antibiotic synthesis",
                        "Biosensors — glucose oxidase immobilised on electrode for blood glucose monitoring"
                    ]
                },

                biosensors: {
                    glucoseMeter: {
                        enzyme: "Glucose oxidase",
                        reaction: "Glucose + O₂ → Gluconolactone + H₂O₂",
                        detection: "H₂O₂ oxidised at electrode → electrical current proportional to glucose concentration",
                        use: "Point-of-care blood glucose monitoring in diabetes management"
                    },
                    principle: "Enzyme specificity provides selectivity; the chemical product is transduced to a measurable signal"
                }
            }
        },

        // ─────────────────────────────────────────────────
        // CROSS-CUTTING CONCEPTS
        // ─────────────────────────────────────────────────
        crossCuttingConcepts: {
            structureFunctionRelationship: [
                "Active site is formed by folding — non-contiguous residues brought together to create complementary pocket",
                "Transition state complementarity (not substrate complementarity) is the foundation of catalysis",
                "Induced fit explains how binding energy is used to distort substrate toward transition state",
                "Allosteric sites are physically distant from active site but communicate through conformational change",
                "Zymogens demonstrate that enzyme structure can be 'locked' — one proteolytic cut can trigger active site formation"
            ],
            commonErrors: [
                "Stating enzymes alter ΔG or the equilibrium position — they only change the rate; ΔG is fixed",
                "Stating enzymes are consumed in the reaction — they are not; they are regenerated",
                "Confusing Km with affinity direction: lower Km = higher affinity (enzyme reaches half-Vmax at lower [S])",
                "Confusing competitive and non-competitive inhibition effects: competitive changes apparent Km; non-competitive changes apparent Vmax",
                "Claiming denaturation breaks peptide bonds — it disrupts non-covalent bonds; primary structure remains intact",
                "Stating optimum temperature is always 37°C — varies by organism and enzyme",
                "Confusing enzyme rate increase with equilibrium change — rate ↑ but equilibrium constant Keq is unchanged"
            ],
            curriculumProgression: {
                junior: "Definition of enzyme, biological catalyst concept, lock and key model, factors affecting rate (T, pH), specificity, digestive enzymes",
                intermediate: "Induced fit, substrate-enzyme interactions, activation energy, Michaelis-Menten kinetics, Km and Vmax, inhibition types, allosteric regulation, denaturation",
                senior: "Catalytic mechanisms (serine proteases, metal ion catalysis), full kinetic analysis (Lineweaver-Burk), cooperativity, covalent modification, zymogens, clinical enzymology, enzyme technology"
            }
        },

        // ─────────────────────────────────────────────────
        // EXAMPLES (WORKED PROBLEMS)
        // ─────────────────────────────────────────────────
        examples: [
            {
                scenario: "A Lineweaver-Burk plot of enzyme activity with and without inhibitor X shows that the y-intercept is the same but the x-intercept shifts toward the origin. Identify the inhibitor type and explain its effect on Km and Vmax",
                solution: [
                    "1. Same y-intercept → same 1/Vmax → Vmax is UNCHANGED",
                    "2. x-intercept shifts toward origin (from -1/Km to a less negative value) → apparent -1/Km is smaller in magnitude → apparent Km is INCREASED",
                    "3. Conclusion: competitive inhibitor — binds active site in competition with substrate",
                    "4. At sufficiently high [S], substrate outcompetes inhibitor → Vmax recoverable",
                    "5. Apparent Km(app) = Km × (1 + [I]/Ki) — adding inhibitor effectively reduces apparent affinity of enzyme for substrate"
                ]
            },
            {
                scenario: "Explain, using the concept of activation energy and transition state stabilisation, how an enzyme increases reaction rate by 10¹²-fold without changing ΔG",
                solution: [
                    "1. ΔG is determined by the energy difference between reactants and products — a thermodynamic property unaffected by pathway",
                    "2. Reaction rate is determined by activation energy (Ea) — the energy barrier to reach the transition state",
                    "3. Enzyme provides an alternative pathway with a lower Ea by binding and stabilising the transition state",
                    "4. The enzyme active site has complementary shape, charge, and H-bond patterns to the TS (not the substrate ground state)",
                    "5. TS binding energy lowers the activation barrier — rate increase follows: k = Ae^(-Ea/RT); reducing Ea by 70 kJ/mol at 37°C gives ~10¹² rate enhancement",
                    "6. ΔG is unchanged because the starting material and product energies are unchanged — only the pathway is different"
                ]
            },
            {
                scenario: "Explain why pancreatic digestive enzymes are secreted as zymogens and describe how they are activated",
                solution: [
                    "1. Zymogens are inactive enzyme precursors — digestive proteases (trypsinogen, chymotrypsinogen, proelastase) are produced in this form",
                    "2. Purpose: prevents autodigestion of the pancreas (premature activation would damage pancreatic cells — as seen in pancreatitis)",
                    "3. Activation cascade: duodenal enterokinase cleaves trypsinogen → active trypsin",
                    "4. Trypsin then autocatalytically activates more trypsinogen + activates chymotrypsinogen → chymotrypsin, proelastase → elastase, procarboxypeptidase → carboxypeptidase",
                    "5. Activation occurs in the intestinal lumen — far from the pancreas — protecting pancreatic tissue"
                ]
            },
            {
                scenario: "An enzyme has Km = 2 mM and Vmax = 100 μmol/min. Calculate the initial velocity when [S] = 8 mM",
                solution: [
                    "Using Michaelis-Menten equation: v = Vmax[S] / (Km + [S])",
                    "v = 100 × 8 / (2 + 8)",
                    "v = 800 / 10",
                    "v = 80 μmol/min",
                    "Check: [S] = 4 × Km, so we expect v well above Vmax/2 (50 μmol/min) — 80 μmol/min is consistent"
                ]
            }
        ],

        // ─────────────────────────────────────────────────
        // KEY TAKEAWAYS
        // ─────────────────────────────────────────────────
        keyTakeaways: [
            "Enzymes are biological catalysts (mostly proteins) that lower activation energy without altering ΔG or the equilibrium position",
            "The active site is a 3D cleft that is complementary to the transition state — induced fit explains conformational changes upon substrate binding",
            "Cofactors (metal ions) and coenzymes (organic molecules, often vitamin-derived) are required by many enzymes for catalytic activity",
            "Michaelis-Menten kinetics describe enzyme velocity as v = Vmax[S]/(Km+[S]); Km indicates affinity, Vmax indicates maximum capacity",
            "Competitive inhibitors increase apparent Km without changing Vmax; non-competitive inhibitors decrease Vmax without changing Km",
            "Allosteric regulation — through activators and inhibitors binding at non-active sites — gives sigmoidal kinetics and switch-like metabolic control",
            "Covalent modification (especially phosphorylation by kinases) rapidly and reversibly switches enzyme activity in response to hormones",
            "Zymogens (inactive precursors) protect cells from premature enzyme activity — activated by proteolysis at the right location",
            "Feedback inhibition by end products of a pathway inhibits the first committed step — an elegant energy-conservation mechanism",
            "Enzymes are major drug targets (statins, aspirin, ACE inhibitors, antibiotics) and diagnostic biomarkers (troponin, AST/ALT, amylase)"
        ]
    };

    return content;
}


handleBioenergetics(problem) {
    const content = {
        topic: "Bioenergetics",
        category: "metabolism",
        summary: "Bioenergetics is the study of energy transformations in living organisms. Life requires a continuous supply of energy to maintain order against entropy. Energy enters biological systems primarily as light (photosynthesis) or as chemical bond energy (respiration), and is transduced to ATP — the universal energy currency. Mastery spans thermodynamic principles through ATP chemistry, glycolysis, the Krebs cycle, oxidative phosphorylation, photosynthesis, and integration of metabolic pathways.",

        components: {

            // ─────────────────────────────────────────────
            // 1. FOUNDATIONS
            // ─────────────────────────────────────────────
            foundations: {
                overview: "Core thermodynamic principles governing energy transformations in biological systems",

                thermodynamics: {
                    firstLaw: {
                        statement: "Energy cannot be created or destroyed — only converted from one form to another (Law of Conservation of Energy)",
                        biologicalApplication: "Total energy input (food/light) = useful work performed + heat lost",
                        forms: ["Chemical energy (bonds)", "Mechanical energy (muscle contraction)", "Electrical energy (membrane potentials)", "Light energy (photosynthesis)", "Thermal energy (heat)"]
                    },
                    secondLaw: {
                        statement: "Every spontaneous energy transformation increases the total entropy (disorder) of the universe",
                        implications: [
                            "No energy conversion is 100% efficient — some energy is always lost as heat",
                            "Ordered biological structures (cells, proteins) are maintained only by continuous energy input"
                        ],
                        entropy: "Measure of disorder or randomness of a system; ΔS"
                    },
                    gibbsFreeEnergy: {
                        equation: "ΔG = ΔH − TΔS",
                        variables: { deltaG: "Free energy change (J/mol or kJ/mol)", deltaH: "Enthalpy change (heat content)", T: "Absolute temperature (Kelvin)", deltaS: "Entropy change" },
                        spontaneity: {
                            negative: "ΔG < 0 → exergonic → spontaneous (energy released)",
                            positive: "ΔG > 0 → endergonic → non-spontaneous (energy required)",
                            zero: "ΔG = 0 → equilibrium — no net reaction"
                        },
                        standardFreeEnergy: "ΔG°′ — standard free energy change at pH 7, 25°C, 1 M concentration; intrinsic property of the reaction"
                    }
                },

                exergonicVsEndergonic: {
                    exergonic: {
                        definition: "Reaction releases free energy; ΔG < 0",
                        examples: ["Cellular respiration (glucose oxidation): ΔG°′ ≈ -2870 kJ/mol", "ATP hydrolysis: ΔG°′ ≈ -30.5 kJ/mol"],
                        coupling: "Exergonic reactions can be coupled to drive endergonic reactions"
                    },
                    endergonic: {
                        definition: "Reaction requires free energy input; ΔG > 0",
                        examples: ["Protein synthesis", "Muscle contraction", "Ion transport against gradient"],
                        payment: "Energy provided by coupling to ATP hydrolysis or other exergonic reactions"
                    }
                },

                energyCoupling: {
                    definition: "Linking an endergonic reaction to an exergonic one so the overall ΔG is negative",
                    mechanism: "In cells, usually achieved via shared intermediate — commonly a phosphorylated compound from ATP hydrolysis",
                    example: "Glucose + ATP → Glucose-6-phosphate + ADP: ΔG°′ = −16.7 kJ/mol (sum of glucose phosphorylation +13.8 and ATP hydrolysis −30.5)"
                },

                oxidationAndReduction: {
                    definitions: {
                        oxidation: "Loss of electrons (or H⁺ + e⁻); increase in oxidation state; often involves loss of hydrogen (dehydrogenation)",
                        reduction: "Gain of electrons (or H⁺ + e⁻); decrease in oxidation state; often involves gain of hydrogen",
                        mnemonic: "OIL RIG: Oxidation Is Loss, Reduction Is Gain"
                    },
                    biologicalRelevance: "Nutrient oxidation releases electrons that are transferred to electron carriers (NAD⁺, FAD) and ultimately to oxygen (in aerobic respiration) — releasing energy captured as ATP",
                    electrochemical: "Tendency of a molecule to accept electrons measured by standard reduction potential (E°′); higher E°′ = stronger oxidising agent",
                    NAD_FAD: {
                        NADplus: "Nicotinamide adenine dinucleotide (oxidised form); accepts 2 electrons + 1 H⁺ → NADH",
                        FAD: "Flavin adenine dinucleotide (oxidised form); accepts 2 electrons + 2 H⁺ → FADH₂",
                        NADH_yield: "NADH → ~2.5 ATP via oxidative phosphorylation",
                        FADH2_yield: "FADH₂ → ~1.5 ATP via oxidative phosphorylation"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 2. ATP — THE ENERGY CURRENCY
            // ─────────────────────────────────────────────
            ATP: {
                overview: "Adenosine triphosphate — the universal energy currency of all living cells",

                structure: {
                    components: ["Adenine (purine base)", "Ribose (5-carbon sugar)", "Three phosphate groups (α, β, γ)"],
                    bonds: "Phosphoanhydride bonds link the three phosphate groups — high energy due to electrostatic repulsion between negative charges + resonance stabilisation of products",
                    highEnergyPhosphate: "The term 'high energy' refers to the large ΔG of hydrolysis, not a special bond"
                },

                hydrolysis: {
                    equation: "ATP + H₂O → ADP + Pᵢ (inorganic phosphate): ΔG°′ = −30.5 kJ/mol",
                    actualCellular: "In vivo ΔG ≈ −50 to −60 kJ/mol due to low [ADP] and [Pᵢ] in cells",
                    furtherHydrolysis: "ADP + H₂O → AMP + Pᵢ: ΔG°′ = −30.5 kJ/mol",
                    pyrophosphate: "ATP → AMP + PPᵢ (pyrophosphate): PPᵢ immediately hydrolysed by pyrophosphatase → drives reactions forward (e.g. DNA synthesis, fatty acid activation)"
                },

                rolesOfATP: {
                    chemicalWork: "Drive biosynthesis — phosphorylate intermediates, activate substrates",
                    mechanicalWork: "Power motor proteins (myosin, kinesin, dynein), helicase, RNA polymerase",
                    transport: "Drive active transport (Na⁺/K⁺-ATPase, SERCA, ABC transporters)",
                    signalling: "Precursor of cAMP (second messenger); ATP released extracellularly acts as purinergic signal"
                },

                adenylateKinase: {
                    reaction: "2 ADP ⇌ ATP + AMP",
                    function: "Maintains cellular energy charge; prevents AMP accumulation; interconverts adenine nucleotides",
                    energyCharge: "Defined as: EC = ([ATP] + 0.5[ADP]) / ([ATP]+[ADP]+[AMP]); normal cell: 0.80–0.95"
                },

                regeneration: {
                    substrateLevel: "Phosphate group transferred from a high-energy intermediate directly to ADP (e.g. in glycolysis and Krebs cycle)",
                    oxidativePhosphorylation: "ATP synthase uses proton-motive force across inner mitochondrial membrane — major source (~32 of ~32 ATP per glucose)",
                    photophosphorylation: "Light-driven proton gradient in chloroplasts powers ATP synthase"
                }
            },

            // ─────────────────────────────────────────────
            // 3. CELLULAR RESPIRATION — OVERVIEW
            // ─────────────────────────────────────────────
            cellularRespiration: {
                overview: "The multi-stage process by which cells extract energy from organic molecules, ultimately producing ATP",

                overallEquation: {
                    aerobic: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O; ΔG°′ = −2870 kJ/mol",
                    comparison: "Complete combustion of glucose releases the same energy but as heat; respiration captures ~40% as ATP (~30–32 ATP per glucose)"
                },

                stages: {
                    glycolysis: { location: "Cytoplasm", inputs: "Glucose", outputs: "2 pyruvate, 2 ATP (net), 2 NADH" },
                    pyruvateDecarboxylation: { location: "Mitochondrial matrix", inputs: "2 pyruvate", outputs: "2 acetyl-CoA, 2 CO₂, 2 NADH" },
                    krebs: { location: "Mitochondrial matrix", inputs: "2 acetyl-CoA", outputs: "4 CO₂, 6 NADH, 2 FADH₂, 2 ATP" },
                    oxidativePhosphorylation: { location: "Inner mitochondrial membrane", inputs: "10 NADH, 2 FADH₂, O₂", outputs: "~28 ATP, H₂O" }
                },

                anaerobicRespiration: {
                    definition: "ATP production without oxygen — only glycolysis generates ATP; pyruvate is used to regenerate NAD⁺",
                    lactateFermentation: {
                        equation: "Pyruvate + NADH + H⁺ → Lactate + NAD⁺ (lactate dehydrogenase)",
                        occurs: "Mammalian muscle during intense exercise; red blood cells (no mitochondria)",
                        yield: "2 ATP per glucose",
                        fateLactate: "Lactate exported to liver → converted back to pyruvate → gluconeogenesis (Cori cycle)"
                    },
                    ethanolFermentation: {
                        equation: "Pyruvate → Acetaldehyde (pyruvate decarboxylase) → Ethanol + CO₂ (alcohol dehydrogenase)",
                        organisms: "Yeast, some bacteria",
                        application: "Brewing, bread making"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 4. GLYCOLYSIS
            // ─────────────────────────────────────────────
            glycolysis: {
                overview: "The universal pathway converting glucose to pyruvate in the cytoplasm",

                location: "Cytoplasm (cytosol) — no membrane required; present in all organisms",
                substrate: "Glucose (C₆H₁₂O₆)",
                products: "2 pyruvate + 2 ATP (net) + 2 NADH + 2 H₂O",

                phases: {
                    energyInvestment: {
                        steps1to5: "2 ATP consumed to phosphorylate glucose and cleave it into two 3-carbon units",
                        reactions: [
                            "1. Glucose + ATP → Glucose-6-phosphate + ADP (hexokinase; traps glucose in cell)",
                            "2. Glucose-6-phosphate ⇌ Fructose-6-phosphate (phosphoglucose isomerase)",
                            "3. Fructose-6-phosphate + ATP → Fructose-1,6-bisphosphate + ADP (phosphofructokinase-1; key regulatory step)",
                            "4. Fructose-1,6-bisphosphate → DHAP + Glyceraldehyde-3-phosphate (aldolase)",
                            "5. DHAP ⇌ G3P (triose phosphate isomerase; both 3C units now as G3P)"
                        ]
                    },
                    energyPayoff: {
                        steps6to10: "4 ATP and 2 NADH generated per glucose (2 rounds for 2× G3P)",
                        reactions: [
                            "6. G3P + NAD⁺ + Pᵢ → 1,3-bisphosphoglycerate + NADH (glyceraldehyde-3-phosphate dehydrogenase; oxidation + phosphorylation)",
                            "7. 1,3-BPG + ADP → 3-phosphoglycerate + ATP (phosphoglycerate kinase; first substrate-level phosphorylation)",
                            "8. 3-phosphoglycerate ⇌ 2-phosphoglycerate (phosphoglycerate mutase)",
                            "9. 2-phosphoglycerate → Phosphoenolpyruvate + H₂O (enolase; creates high-energy enol phosphate)",
                            "10. Phosphoenolpyruvate + ADP → Pyruvate + ATP (pyruvate kinase; second substrate-level phosphorylation)"
                        ]
                    }
                },

                netYield: "Per glucose: 2 pyruvate, 2 ATP net (4 produced − 2 invested), 2 NADH",

                regulation: {
                    hexokinase: {
                        inhibitor: "Glucose-6-phosphate (product inhibition) — prevents glucose phosphorylation if G6P accumulates",
                        isoform: "Glucokinase (liver/pancreatic β-cells): not inhibited by G6P; high Km → only active at high [glucose] → functions as glucose sensor"
                    },
                    phosphofructokinase1: {
                        keyStep: "Major regulatory step — commits fructose-6-phosphate to glycolysis",
                        allostericInhibitors: ["ATP (high energy charge → slow glycolysis)", "Citrate (Krebs cycle running well)"],
                        allostericActivators: ["AMP (low energy charge → accelerate glycolysis)", "Fructose-2,6-bisphosphate (potent activator; regulated by insulin/glucagon)"],
                        hormonal: "Insulin → high F-2,6-BP → PFK-1 activated; Glucagon → low F-2,6-BP → PFK-1 inhibited"
                    },
                    pyruvateKinase: {
                        inhibitors: "ATP, alanine (downstream product signals ample supply)",
                        activators: "Fructose-1,6-bisphosphate (feed-forward activation)"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 5. PYRUVATE DECARBOXYLATION (LINK REACTION)
            // ─────────────────────────────────────────────
            pyruvateDecarboxylation: {
                overview: "Conversion of pyruvate to acetyl-CoA, linking glycolysis to the Krebs cycle",

                location: "Mitochondrial matrix — pyruvate transported across inner membrane by pyruvate carrier (MPC)",
                enzyme: "Pyruvate dehydrogenase complex (PDC) — a large multi-enzyme complex (~9 MDa in mammals)",
                components: {
                    E1: "Pyruvate decarboxylase — requires TPP (thiamine pyrophosphate, vitamin B₁); decarboxylates pyruvate",
                    E2: "Dihydrolipoyl acetyltransferase — requires lipoic acid; transfers acetyl group to CoA",
                    E3: "Dihydrolipoyl dehydrogenase — requires FAD and NAD⁺; reoxidises lipoate; produces NADH"
                },
                reaction: "Pyruvate + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH",
                netPerGlucose: "2 pyruvate → 2 acetyl-CoA + 2 CO₂ + 2 NADH",
                regulation: {
                    inhibitors: ["Acetyl-CoA (product)", "NADH (product)", "ATP (high energy)"],
                    activators: ["CoA", "NAD⁺", "AMP", "Pyruvate"],
                    phosphorylation: "PDC kinase phosphorylates E1 → inactivates PDC; PDC phosphatase removes phosphate → activates. Insulin activates phosphatase → more active PDC"
                },
                vitamins: "Deficiency of thiamine (B₁) impairs E1 → impaired pyruvate oxidation → Wernicke-Korsakoff syndrome (neurological disorder), beriberi"
            },

            // ─────────────────────────────────────────────
            // 6. KREBS CYCLE (CITRIC ACID CYCLE)
            // ─────────────────────────────────────────────
            krebsCycle: {
                overview: "The central oxidative pathway that completely oxidises acetyl-CoA to CO₂, generating electron carriers",

                location: "Mitochondrial matrix",
                overview: "Cyclic pathway: acetyl-CoA (2C) + oxaloacetate (4C) → citrate (6C) → regenerates oxaloacetate after 2 turns of decarboxylation and oxidation",

                reactions: [
                    { step: 1, name: "Citrate synthase", reaction: "Acetyl-CoA + OAA + H₂O → Citrate + CoA", note: "Irreversible; inhibited by ATP, NADH, succinyl-CoA" },
                    { step: 2, name: "Aconitase", reaction: "Citrate ⇌ Isocitrate (via cis-aconitate)", note: "Requires Fe²⁺; inhibited by fluorocitrate (fluoroacetate poison)" },
                    { step: 3, name: "Isocitrate dehydrogenase", reaction: "Isocitrate + NAD⁺ → α-Ketoglutarate + CO₂ + NADH", note: "First oxidative decarboxylation; major regulatory step; activated by ADP, isocitrate; inhibited by ATP, NADH" },
                    { step: 4, name: "α-Ketoglutarate dehydrogenase", reaction: "α-Ketoglutarate + NAD⁺ + CoA → Succinyl-CoA + CO₂ + NADH", note: "Second oxidative decarboxylation; analogous to pyruvate dehydrogenase complex; requires TPP, lipoate, FAD, NAD⁺, CoA" },
                    { step: 5, name: "Succinyl-CoA synthetase", reaction: "Succinyl-CoA + GDP + Pᵢ → Succinate + CoA + GTP", note: "Substrate-level phosphorylation (GTP ≡ ATP via nucleoside diphosphate kinase)" },
                    { step: 6, name: "Succinate dehydrogenase", reaction: "Succinate + FAD → Fumarate + FADH₂", note: "Only membrane-bound Krebs enzyme (inner mitochondrial membrane); part of Complex II; inhibited by malonate (competitive inhibitor — basis of first demonstration of competitive inhibition)" },
                    { step: 7, name: "Fumarase", reaction: "Fumarate + H₂O → L-Malate", note: "Stereospecific — only L-malate produced" },
                    { step: 8, name: "Malate dehydrogenase", reaction: "L-Malate + NAD⁺ → OAA + NADH + H⁺", note: "Equilibrium favours malate; reaction driven forward by removal of OAA (citrate synthase) and by NADH reoxidation" }
                ],

                yieldPerAcetylCoA: {
                    NADH: 3,
                    FADH2: 1,
                    GTP: 1,
                    CO2: 2
                },

                yieldPerGlucose: "×2 (two acetyl-CoA per glucose): 6 NADH + 2 FADH₂ + 2 GTP + 4 CO₂",

                amphibolicRole: {
                    definition: "The Krebs cycle is amphibolic — serves both catabolic (energy generation) and anabolic (biosynthetic) functions",
                    cataplerosis: "Withdrawal of intermediates for biosynthesis: oxaloacetate → aspartate, phosphoenolpyruvate; α-ketoglutarate → glutamate; succinyl-CoA → haem",
                    anaplerosis: "Replenishment of intermediates: pyruvate carboxylase (pyruvate + CO₂ → OAA); glutamate dehydrogenase (glutamate → α-KG); propionyl-CoA → succinyl-CoA"
                }
            },

            // ─────────────────────────────────────────────
            // 7. OXIDATIVE PHOSPHORYLATION
            // ─────────────────────────────────────────────
            oxidativePhosphorylation: {
                overview: "The process by which the electron transport chain generates a proton gradient used by ATP synthase to produce ATP",

                location: "Inner mitochondrial membrane",

                electronTransportChain: {
                    overview: "Series of protein complexes that pass electrons from NADH/FADH₂ to O₂, pumping protons across the inner membrane",
                    complexes: {
                        complexI: {
                            name: "NADH dehydrogenase (NADH:ubiquinone oxidoreductase)",
                            reaction: "NADH → NAD⁺; electrons transferred to ubiquinone (Q)",
                            protonsPumped: "4H⁺ per NADH",
                            inhibitor: "Rotenone, amytal"
                        },
                        complexII: {
                            name: "Succinate dehydrogenase",
                            reaction: "FADH₂ → FAD; electrons transferred to ubiquinone",
                            protonsPumped: "0 — does not pump protons directly",
                            note: "Also the 6th enzyme of Krebs cycle; entry point for electrons from FADH₂"
                        },
                        ubiquinone: {
                            name: "Coenzyme Q (CoQ₁₀)",
                            type: "Mobile lipid-soluble electron carrier within the membrane — shuttles electrons from Complexes I and II to Complex III"
                        },
                        complexIII: {
                            name: "Cytochrome bc₁ complex",
                            reaction: "Ubiquinol (QH₂) → ubiquinone; electrons to cytochrome c",
                            protonsPumped: "4 H⁺ per pair of electrons (Q cycle mechanism)",
                            inhibitor: "Antimycin A"
                        },
                        cytochromC: {
                            type: "Small, soluble, peripheral membrane protein; mobile electron carrier in intermembrane space",
                            apoptosis: "Cytochrome c release from mitochondria → triggers intrinsic apoptosis pathway"
                        },
                        complexIV: {
                            name: "Cytochrome c oxidase",
                            reaction: "4 cyt c (reduced) + 4 H⁺ + O₂ → 4 cyt c (oxidised) + 2 H₂O",
                            protonsPumped: "4 H⁺",
                            inhibitors: "Cyanide, carbon monoxide, azide — all bind haem a₃ and block O₂ reduction → lethal"
                        }
                    },
                    electrochemicalGradient: "Proton pumping by Complexes I, III, IV creates proton gradient (ΔpH + Δψ) across inner membrane — proton-motive force (pmf)"
                },

                atpSynthase: {
                    structure: {
                        F0: "Membrane-embedded proton channel — c-ring rotates as protons flow through",
                        F1: "Matrix-facing catalytic domain — 3 α, 3 β, 1 γ subunits; γ rotation drives conformational changes in β subunits",
                        mechanism: "Binding change mechanism (Boyer): rotation of γ causes each β subunit to cycle through Open → Loose → Tight conformations → synthesis of ATP"
                    },
                    stoichiometry: "~2.7 H⁺ per ATP (mammalian); mitochondria import 1 Pᵢ and export 1 ATP per additional H⁺ → ~3–4 H⁺ net per ATP",
                    inhibitors: ["Oligomycin — blocks F0 proton channel → blocks ATP synthesis", "DCCD — cross-links c-ring"],
                    uncouplers: {
                        definition: "Agents that dissipate the proton gradient without driving ATP synthesis → energy released as heat",
                        examples: ["DNP (2,4-dinitrophenol) — lipid-soluble weak acid; carries H⁺ across membrane", "Thermogenin (UCP1) — uncoupling protein in brown adipose tissue — physiological uncoupler for thermogenesis"],
                        result: "Electron transport continues; O₂ consumed; no ATP made; heat produced"
                    }
                },

                chemiosmosis: {
                    mitchellHypothesis: "Peter Mitchell (1961) proposed that ATP synthesis is driven by a proton electrochemical gradient (proton-motive force), not by a chemical intermediate — Nobel Prize 1978",
                    protonMotiveForce: "pmf = Δψ (electrical component, ~-180 mV inside negative) + ΔpH (chemical component, ~-0.5 to -1 pH units inside) → total ~220 mV equivalent",
                    evidence: ["Reconstitution experiments: F1F0 in liposomes with artificial pH gradient → ATP synthesis", "Inhibitor studies (oligomycin, uncouplers)", "Directed mutation of critical Asp residue in F0 abolishes proton translocation"]
                },

                atpYield: {
                    NADH: "~2.5 ATP per NADH (mitochondrial matrix)",
                    FADH2: "~1.5 ATP per FADH₂",
                    cytoplasmic_NADH: "~1.5 ATP per cytoplasmic NADH from glycolysis (due to cost of malate-aspartate shuttle; glycerol-3-phosphate shuttle gives ~1.5 directly)",
                    perGlucose: {
                        glycolysis: "2 ATP (substrate-level) + 2 NADH (cytoplasmic, ~3 ATP) = 5 ATP",
                        pyruvateDecarboxylation: "2 NADH → ~5 ATP",
                        krebsCycle: "2 GTP + 6 NADH + 2 FADH₂ → ~2 + 15 + 3 = 20 ATP",
                        total: "~30–32 ATP per glucose (revised from older estimate of 36–38)"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 8. PHOTOSYNTHESIS
            // ─────────────────────────────────────────────
            photosynthesis: {
                overview: "The process by which light energy is converted to chemical energy, fixing CO₂ into organic molecules",

                overallEquation: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",

                chloroplastStructure: {
                    thylakoids: "Flattened membrane sacs where light-dependent reactions occur; stacked into grana",
                    stroma: "Fluid-filled space surrounding thylakoids; site of light-independent reactions (Calvin cycle)",
                    chlorophyll: {
                        types: ["Chlorophyll a (absorbs 430 nm blue + 680 nm red; primary pigment)", "Chlorophyll b (absorbs 450 nm + 640 nm; accessory pigment)"],
                        structure: "Porphyrin ring with central Mg²⁺; hydrophobic phytol tail anchors to membrane",
                        absorption: "Reflects green wavelengths (550 nm) → plants appear green"
                    },
                    accessoryPigments: ["Carotenoids (β-carotene, xanthophylls) — absorb blue-green; photoprotection", "Phycobilins (in algae and cyanobacteria)"],
                    photoSystems: "Photosystem I (P700) and Photosystem II (P680) — multiprotein antenna complexes + reaction centre"
                },

                lightDependentReactions: {
                    location: "Thylakoid membranes",
                    overview: "Capture light energy → split water → generate ATP and NADPH",

                    photosystemII: {
                        reactionCentre: "P680 — chlorophyll absorbs light → excited electron → transferred to primary electron acceptor",
                        waterSplitting: "4 H₂O → 8 H⁺ + 4 e⁻ + 2 O₂ (oxygen-evolving complex, OEC — contains Mn cluster)",
                        significance: "Source of all atmospheric O₂; electrons replenish oxidised P680"
                    },

                    electronTransport: {
                        path: "P680 → plastoquinone (PQ) → cytochrome b₆f complex → plastocyanin (PC) → P700 → ferredoxin → FNR → NADP⁺ → NADPH",
                        protonPumping: "PQ carries 2H⁺ from stroma to thylakoid lumen per 2e⁻ → proton gradient across thylakoid membrane",
                        cyclicVsNoncyclic: {
                            noncyclic: "Linear flow from H₂O → NADPH; produces both ATP and NADPH; releases O₂",
                            cyclic: "Electrons recycled from ferredoxin back to cytochrome b₆f → only ATP produced (no NADPH, no O₂ release); used when more ATP than NADPH needed"
                        }
                    },

                    chloroplastATPSynthase: {
                        function: "Protons flow from thylakoid lumen to stroma through CF0CF1 ATP synthase → phosphorylation of ADP → ATP (photophosphorylation)",
                        orientation: "ATP synthesised in stroma (unlike mitochondria, where it's in matrix)"
                    },

                    overallLightReactions: "12 H₂O + 12 NADP⁺ + 18 ADP + 18 Pᵢ → 6 O₂ + 12 NADPH + 18 ATP (per one glucose worth)"
                },

                calvinCycle: {
                    location: "Stroma",
                    overview: "CO₂ fixation cycle — uses ATP and NADPH to reduce CO₂ to G3P (glyceraldehyde-3-phosphate)",

                    stages: {
                        carbonFixation: {
                            enzyme: "RuBisCO (ribulose-1,5-bisphosphate carboxylase-oxygenase) — most abundant protein on Earth",
                            reaction: "CO₂ + RuBP (5C) → 2 × 3-phosphoglycerate (3C) — unstable 6C intermediate",
                            significance: "RuBisCO fixes CO₂; low carboxylase efficiency (~3 CO₂/s vs typical enzyme ~1000/s)"
                        },
                        reduction: {
                            reactions: [
                                "3-PGA + ATP → 1,3-bisphosphoglycerate (phosphoglycerate kinase)",
                                "1,3-BPG + NADPH → G3P + Pᵢ (G3P dehydrogenase)"
                            ]
                        },
                        regeneration: {
                            reaction: "5 G3P + 3 ATP → 3 RuBP (complex reactions involving transketolase, aldolase, etc.)",
                            purpose: "Regenerates the CO₂ acceptor (RuBP) to allow cycle to continue"
                        }
                    },

                    perGlucose: {
                        CO2fixed: "6",
                        ATPused: "18",
                        NADPHused: "12",
                        G3Pproduced: "12 (2 net, used for glucose synthesis; 10 regenerate RuBP)"
                    },

                    photorespiration: {
                        definition: "RuBisCO adds O₂ instead of CO₂ to RuBP → phosphoglycolate (2C) + 3-PGA",
                        consequence: "Phosphoglycolate is recycled in peroxisomes and mitochondria at a cost (releases CO₂ and consumes ATP) — net loss of fixed carbon",
                        temperature: "Increases at high temperature (O₂:CO₂ ratio increases)",
                        C4Plants: "C4 pathway concentrates CO₂ around RuBisCO (initial fixation to malate in mesophyll; released in bundle sheath) → minimises photorespiration (e.g. maize, sugarcane)",
                        CAMPlants: "Crassulacean acid metabolism — stomata open at night to fix CO₂ as malate; released and fixed by RuBisCO during day with stomata closed → reduces water loss (e.g. cacti, agave)"
                    }
                }
            },

            // ─────────────────────────────────────────────
            // 9. METABOLIC INTEGRATION
            // ─────────────────────────────────────────────
            metabolicIntegration: {
                overview: "How the major metabolic pathways interconnect and are regulated in response to cellular and whole-body energy status",

                metabolicStates: {
                    fed: {
                        hormones: "Insulin dominant",
                        processes: ["Glycolysis", "Glycogen synthesis", "Fatty acid synthesis", "Protein synthesis"],
                        keySignal: "High blood glucose → high insulin → promotes anabolic pathways"
                    },
                    fasted: {
                        hormones: "Glucagon dominant",
                        processes: ["Glycogenolysis", "Gluconeogenesis", "Lipolysis", "β-Oxidation"],
                        keySignal: "Low blood glucose → high glucagon → promotes catabolic pathways"
                    },
                    exercise: {
                        signals: ["AMP rises", "Adrenaline rises"],
                        processes: ["Glycogenolysis", "Glycolysis ↑", "β-Oxidation (prolonged exercise)", "AMPK activation"]
                    }
                },

                AMPK: {
                    fullName: "AMP-activated protein kinase",
                    activator: "High [AMP]/[ATP] ratio — low energy charge",
                    actions: ["Activates catabolic pathways (glycolysis, β-oxidation, glycogenolysis)", "Inhibits anabolic pathways (fatty acid synthesis, glycogen synthesis, protein synthesis)"],
                    masterEnergySwitch: "Acts as the cell's master energy sensor"
                },

                gluconeogenesis: {
                    definition: "Synthesis of glucose from non-carbohydrate precursors",
                    location: "Liver (primarily); kidney during prolonged fasting",
                    precursors: ["Lactate (Cori cycle)", "Glycerol (from lipolysis)", "Glucogenic amino acids", "Propionate (odd-chain fatty acids)"],
                    keystepDifferences: [
                        "Pyruvate → OAA (pyruvate carboxylase; in matrix) → PEP (PEPCK; in cytoplasm) — bypasses pyruvate kinase",
                        "Fructose-1,6-bisphosphate → Fructose-6-phosphate (FBPase-1) — bypasses PFK-1",
                        "Glucose-6-phosphate → Glucose (glucose-6-phosphatase; ER; only in liver and kidney) — bypasses hexokinase"
                    ],
                    costPerGlucose: "6 ATP + 2 NADH (energetically expensive — required during fasting)"
                },

                fattyAcidOxidation: {
                    coveredIn: "See handleLipids → lipidMetabolism → betaOxidation",
                    connection: "Acetyl-CoA from β-oxidation enters Krebs cycle; excess → ketone bodies (ketogenesis in liver)"
                }
            },

            // ─────────────────────────────────────────────
            // 10. BIOENERGETICS IN DISEASE
            // ─────────────────────────────────────────────
            bioenergeticsInDisease: {
                overview: "Pathological conditions involving defects in energy metabolism",

                mitochondrialDiseases: {
                    overview: "Defects in oxidative phosphorylation — affect tissues with highest energy demand",
                    inheritance: "Maternal inheritance (mitochondrial DNA) or nuclear-encoded components",
                    features: ["Myopathy (muscle weakness)", "Encephalopathy (brain dysfunction)", "Lactic acidosis (pyruvate not oxidised → fermentation)"],
                    examples: [
                        "MELAS: Mitochondrial Encephalomyopathy, Lactic Acidosis, Stroke-like episodes — mt-tRNA mutation",
                        "Leber's hereditary optic neuropathy (LHON): Complex I mutation → blindness",
                        "Leigh syndrome: progressive neurodegeneration — Complex I, IV, or pyruvate dehydrogenase mutations"
                    ]
                },

                cancerMetabolism: {
                    warburgEffect: {
                        definition: "Cancer cells preferentially use glycolysis even in the presence of O₂ (aerobic glycolysis)",
                        observations: "Increased glucose uptake + lactate production even with adequate O₂",
                        reasons: [
                            "Provides biosynthetic precursors (nucleotides, lipids, amino acids) for rapidly dividing cells",
                            "Glycolytic intermediates feed biosynthesis more readily than Krebs intermediates",
                            "Rapid ATP production (though less efficient per glucose)"
                        ],
                        clinicalUse: "PET scanning uses ¹⁸F-FDG (glucose analogue) — accumulated in highly glycolytic tumour cells → lights up on scan"
                    },
                    isocitrateDehydrogenase: "IDH1/IDH2 mutations in glioma and AML → produce 2-hydroxyglutarate (oncometabolite) → inhibits α-KG-dependent dioxygenases → hypermethylation → altered differentiation"
                },

                diabeticMetabolism: {
                    type1: "Absence of insulin → glucose not taken up by muscle/adipose → hyperglycaemia; excess acetyl-CoA → ketogenesis → ketoacidosis",
                    type2: "Insulin resistance → impaired glucose disposal → hyperglycaemia; ectopic lipid deposition impairs mitochondrial function"
                },

                poisonsAndInhibitors: {
                    cyanide: "Binds Fe³⁺ in Complex IV → blocks electron transfer → O₂ not consumed → no proton gradient → no ATP → rapid death",
                    carbonMonoxide: "Competes with O₂ at Complex IV (binds haem a₃) + binds haemoglobin → histotoxic anoxia",
                    arsenic: "Inhibits pyruvate dehydrogenase (binding to lipoate) and α-ketoglutarate dehydrogenase",
                    oligomycin: "Blocks F0 proton channel → inhibits ATP synthase → back-pressure on ETC → O₂ consumption stops (can use to measure coupling efficiency)"
                }
            },

            // ─────────────────────────────────────────────
            // 11. BIOENERGETICS CALCULATIONS
            // ─────────────────────────────────────────────
            bioenergeticsCalculations: {
                overview: "Quantitative approaches to energy accounting in metabolic pathways",

                freeEnergyCalculations: {
                    reactionDeltaG: "ΔG = ΔG°′ + RT ln([products]/[reactants])",
                    equilibriumConstant: "At equilibrium: ΔG = 0; Keq = e^(-ΔG°′/RT)",
                    atpCoupling: "Total ΔG = sum of ΔG for each coupled reaction; negative total ΔG → spontaneous overall"
                },

                respiratoryQuotient: {
                    definition: "RQ = CO₂ produced / O₂ consumed",
                    values: {
                        carbohydrate: "RQ = 1.0 (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O: equal CO₂ and O₂)",
                        fat: "RQ ≈ 0.7 (fatty acids are more reduced; more O₂ needed relative to CO₂ produced)",
                        protein: "RQ ≈ 0.8",
                        mixedDiet: "RQ ≈ 0.85"
                    },
                    application: "Indirect calorimetry — measuring RQ reveals which fuel is being oxidised"
                },

                p_to_o_ratio: {
                    definition: "Number of ATP molecules produced per oxygen atom consumed (P:O ratio)",
                    NADH: "P:O ≈ 2.5",
                    FADH2: "P:O ≈ 1.5",
                    historical: "Older values of 3 (NADH) and 2 (FADH₂) were based on integer stoichiometry — revised with non-integer H⁺/ATP ratio"
                }
            }
        },

        // ─────────────────────────────────────────────────
        // CROSS-CUTTING CONCEPTS
        // ─────────────────────────────────────────────────
        crossCuttingConcepts: {
            energyFlowSummary: [
                "Photosynthesis: Light energy → chemical energy (glucose); CO₂ fixed; O₂ released",
                "Cellular respiration: Chemical energy (glucose) → ATP; CO₂ released; O₂ consumed",
                "Metabolic pathways are interconnected: glycolytic intermediates feed the Krebs cycle; Krebs intermediates feed biosynthesis",
                "NADH and FADH₂ are the electron 'currency' connecting substrate oxidation to ATP synthesis"
            ],
            commonErrors: [
                "Confusing substrate-level phosphorylation (direct transfer of phosphate to ADP) with oxidative phosphorylation (via proton gradient and ATP synthase)",
                "Stating glycolysis occurs in the mitochondria — it occurs in the cytoplasm",
                "Confusing the Krebs cycle CO₂ release with the source of all CO₂ in respiration — pyruvate decarboxylation also contributes",
                "Claiming ATP is produced in the electron transport chain — ATP is produced by ATP synthase (using the proton gradient generated by the ETC)",
                "Overstating the ATP yield — modern estimate is ~30–32 ATP per glucose, not 36–38",
                "Confusing uncouplers and ETC inhibitors — uncouplers dissipate the proton gradient (O₂ still consumed, no ATP); inhibitors block electron flow (O₂ not consumed, no ATP)"
            ],
            curriculumProgression: {
                junior: "ATP as energy currency, overview of respiration and photosynthesis, aerobic vs anaerobic",
                intermediate: "Glycolysis steps and yields, Krebs cycle products, oxidative phosphorylation overview, light-dependent/independent reactions",
                senior: "Detailed enzyme mechanisms, regulation (PFK-1, AMPK, PDC), chemiosmosis, P:O ratios, metabolic integration, Warburg effect, mitochondrial disease"
            }
        },

        // ─────────────────────────────────────────────────
        // EXAMPLES (WORKED PROBLEMS)
        // ─────────────────────────────────────────────────
        examples: [
            {
                scenario: "Calculate the maximum ATP yield from the complete aerobic oxidation of one glucose molecule, explaining each stage",
                solution: [
                    "Glycolysis (cytoplasm): 2 ATP (net, substrate-level) + 2 NADH × 1.5 = 3 ATP → 5 ATP",
                    "Pyruvate decarboxylation: 2 NADH × 2.5 = 5 ATP",
                    "Krebs cycle (×2): 2 GTP (=2 ATP) + 6 NADH × 2.5 (=15 ATP) + 2 FADH₂ × 1.5 (=3 ATP) → 20 ATP",
                    "Total: 5 + 5 + 20 = 30 ATP",
                    "Note: Cytoplasmic NADH from glycolysis yields ~1.5 ATP (via glycerol-3-phosphate shuttle) — hence some calculations give slightly different numbers depending on assumptions"
                ]
            },
            {
                scenario: "Explain why cells can survive briefly without oxygen but why prolonged anaerobic conditions are harmful",
                solution: [
                    "1. Without O₂: electron transport chain cannot accept electrons → NADH accumulates → Krebs cycle and pyruvate decarboxylation slow → only glycolysis active",
                    "2. Glycolysis produces 2 ATP per glucose but requires NAD⁺; lactate dehydrogenase regenerates NAD⁺ by reducing pyruvate to lactate → glycolysis continues",
                    "3. Brief survival: 2 ATP per glucose is enough for minimal function (e.g. red blood cells)",
                    "4. Prolonged harm: (a) Lactic acid accumulates → pH drops → enzyme denaturation → cellular dysfunction; (b) ATP production rate is 18× lower than aerobic → cannot maintain ion gradients, biosynthesis, contraction; (c) ATP depletion → cell swelling (Na⁺/K⁺-ATPase fails) → cell death"
                ]
            },
            {
                scenario: "Explain how the proton-motive force is generated and used to synthesise ATP",
                solution: [
                    "1. NADH and FADH₂ donate electrons to the electron transport chain (Complexes I, II, III, IV)",
                    "2. As electrons pass through Complexes I, III, and IV, protons (H⁺) are pumped from the mitochondrial matrix to the intermembrane space",
                    "3. This creates a proton electrochemical gradient (proton-motive force) = electrical potential (Δψ, ~-180 mV inside) + chemical gradient (ΔpH)",
                    "4. Protons flow back into the matrix through ATP synthase (F0 channel) — down their electrochemical gradient",
                    "5. Proton flow drives rotation of the c-ring in F0 → rotates γ subunit in F1 → conformational changes in β subunits → catalyse ADP + Pᵢ → ATP (binding change mechanism)"
                ]
            },
            {
                scenario: "Compare and contrast C3 and C4 photosynthesis, explaining the advantage of C4 in hot, dry climates",
                solution: [
                    "C3 plants (wheat, rice): CO₂ fixed directly by RuBisCO onto RuBP → first stable product is 3-PGA (3C)",
                    "At high temperature: O₂:CO₂ ratio increases; RuBisCO more likely to add O₂ → photorespiration → wasted energy and CO₂ loss",
                    "C4 plants (maize, sugarcane): CO₂ first fixed in mesophyll cells by PEP carboxylase (high affinity for CO₂, no oxygenase activity) onto PEP → oxaloacetate (4C) → malate",
                    "Malate transported to bundle sheath cells → decarboxylated → CO₂ concentrated around RuBisCO → minimises photorespiration",
                    "Advantage: In hot, dry conditions (stomata closed to reduce water loss → CO₂ scarce) C4 plants fix CO₂ more efficiently; higher productivity; lower water use per unit carbon fixed"
                ]
            }
        ],

        // ─────────────────────────────────────────────────
        // KEY TAKEAWAYS
        // ─────────────────────────────────────────────────
        keyTakeaways: [
            "The second law of thermodynamics dictates that biological processes are never 100% efficient — some energy is always lost as heat",
            "ATP is the universal energy currency; hydrolysis of its phosphoanhydride bonds releases ~30.5 kJ/mol (standard) or ~50–60 kJ/mol (in vivo)",
            "Glycolysis converts glucose to pyruvate in the cytoplasm, yielding 2 ATP (net) and 2 NADH regardless of O₂",
            "The Krebs cycle completely oxidises acetyl-CoA to CO₂, producing 3 NADH, 1 FADH₂, 1 GTP per acetyl-CoA",
            "Oxidative phosphorylation generates ~28 of the ~30–32 ATP per glucose via chemiosmosis (proton-motive force through ATP synthase)",
            "The electron transport chain pumps protons across the inner mitochondrial membrane; ATP synthase uses the proton gradient to synthesise ATP",
            "Photosynthesis converts light energy to chemical energy: light reactions produce ATP and NADPH; Calvin cycle uses them to fix CO₂ into G3P",
            "RuBisCO fixes CO₂ but also catalyses photorespiration with O₂ — C4 and CAM plants have evolved mechanisms to concentrate CO₂ around RuBisCO",
            "AMPK senses low energy charge (high AMP/ATP) and coordinates upregulation of catabolic pathways",
            "Cancer cells exhibit aerobic glycolysis (Warburg effect) — a metabolic reprogramming that supports rapid proliferation"
        ]
    };

    return content;
}


    // ========================================
    // MAIN PROBLEM PROCESSING METHODS
    // ========================================

    parseMolecularProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.molecularTopics)) {
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
            throw new Error(`Unable to recognize molecular biology topic: ${topic}`);
        }

        return {
            originalTopic: topic,
            type: topicType,
            subTopic: subTopic,
            parameters: { ...parameters },
            context: { ...context },
            difficulty: this.molecularTopics[topicType].difficulty,
            prerequisites: this.molecularTopics[topicType].prerequisites,
            parsedAt: new Date().toISOString()
        };
    }

    

   

handleMolecularProblem(config) {
        const { topic, parameters, subTopic, context, requestType } = config;

        try {
            const isExperimentRequest = requestType === 'experiment' || 
                                       (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

            if (isExperimentRequest) {
                return this.handleExperimentRequest(config);
            } else {
                this.currentProblem = this.parseMolecularProblem(topic, parameters, subTopic, context);
                this.currentContent = this.getMolecularContent(this.currentProblem);
                
                if (this.adaptiveDifficulty) {
                    this.currentContent = this.adaptContentDifficulty(this.currentContent, this.learnerProfile.currentLevel);
                }
                
                if (this.contextualLearning) {
                    this.currentContent.contextualScenarios = this.getContextualScenarios(this.currentProblem.type);
                }
                
                if (this.includeExperiments) {
                    this.currentContent.relatedExperiments = this.getRelatedExperiments(this.currentProblem.type);
                }
                
                if (this.metacognitiveSupport) {
                    this.currentContent.metacognitivePrompts = this.getMetacognitivePrompts(this.currentProblem.type);
                }
                
                this.contentSteps = this.generateMolecularContent(this.currentProblem, this.currentContent);
                
                // Generate workbook (handles async internally)
                this.generateMolecularWorkbook();

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
            throw new Error(`Failed to process molecular biology request: ${error.message}`);
        }
    }

    handleExperimentRequest(config) {
        const { topic, parameters, experimentId } = config;

        if (experimentId && this.molecularExperiments[experimentId]) {
            this.currentExperiment = this.molecularExperiments[experimentId];
        } else {
            this.currentExperiment = this.findExperimentByTopic(topic);
        }

        if (!this.currentExperiment) {
            throw new Error(`No experiment found for: ${topic}`);
        }

        const experimentContent = this.generateExperimentContent(this.currentExperiment, parameters);
        this.generateExperimentWorkbook(experimentContent);

        return {
            experiment: this.currentExperiment,
            content: experimentContent,
            workbook: this.currentWorkbook,
            getDiagrams: () => this.waitForDiagrams()
        };
    }
 

    getMolecularContent(problem) {
        const handler = this.molecularTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for molecular biology topic: ${problem.type}`);
        }

        let content = handler(problem);

        // Apply parameter filtering if parameters are provided
        if (problem.parameters && Object.keys(problem.parameters).length > 0) {
            content = this.filterContentByParameters(content, problem.parameters);
        }

        return content;
    }

    // ============================================================
// PATCH: filterContentByParameters  (replace existing method)
//
// Root cause
// ──────────
// handleTrigonometryRatios returns:
//   {
//     topic: "...", category: "...", summary: "...",
//     components: {
//       foundations:               { ... },   ← section keys live HERE
//       primaryRatios:             { ... },
//       reciprocalRatios:          { ... },
//       specialAngles:             { ... },
//       unitCircleAndExtendedAngles: { ... },
//       calculatingWithRatios:     { ... },
//       trigonometricIdentities:   { ... },
//       graphsOfTrigFunctions:     { ... },
//       solvingTrigEquations:      { ... },
//       realWorldApplications:     { ... },
//     },
//     crossCuttingConcepts: { ... },
//     examples: [ ... ],
//     keyTakeaways: [ ... ]
//   }
//
// specificItems like ['primaryRatios'] need to filter INSIDE
// content.components, not at the top level.
//
// Fix
// ───
// 1. Top-level plain-object filter — same as before, handles any
//    handler whose section keys ARE at the top level.
// 2. NEW: components-level filter — when content has a `components`
//    object, filter its keys by specificItems and replace the
//    components block with only the requested sections.
// ============================================================

filterContentByParameters(content, parameters) {
    if (!parameters || Object.keys(parameters).length === 0) {
        return content;
    }

    const filtered = { ...content };

    // ── 1. original: filter arrays of named objects ───────────────────────
    if (parameters.specificItems && Array.isArray(parameters.specificItems)) {
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

    // ── 2. filter plain-object top-level keys by specificItems ────────────
    // Handles handlers that return { sectionKeyA: {...}, sectionKeyB: {...} }
    if (
        parameters.specificItems &&
        Array.isArray(parameters.specificItems) &&
        parameters.specificItems.length > 0 &&
        typeof filtered === 'object' &&
        !Array.isArray(filtered)
    ) {
        const ALWAYS_KEEP = new Set([
            'topic', 'category', 'summary',
            'crossCuttingConcepts', 'examples', 'keyTakeaways'
        ]);

        const wanted = new Set(
            parameters.specificItems.map(s => s.toLowerCase())
        );

        const hasMatchingKey = Object.keys(filtered).some(k =>
            wanted.has(k.toLowerCase())
        );

        if (hasMatchingKey) {
            Object.keys(filtered).forEach(key => {
                if (!ALWAYS_KEEP.has(key) && !wanted.has(key.toLowerCase())) {
                    delete filtered[key];
                }
            });
        }
    }

    // ── 3. NEW: filter inside content.components by specificItems ─────────
    // Handles handleTrigonometryRatios (and any handler) that wraps all
    // section objects under a `components` key:
    //   content.components = { foundations, primaryRatios, specialAngles, … }
    if (
        parameters.specificItems &&
        Array.isArray(parameters.specificItems) &&
        parameters.specificItems.length > 0 &&
        filtered.components &&
        typeof filtered.components === 'object' &&
        !Array.isArray(filtered.components)
    ) {
        const wanted = new Set(
            parameters.specificItems.map(s => s.toLowerCase())
        );

        const hasMatchingKey = Object.keys(filtered.components).some(k =>
            wanted.has(k.toLowerCase())
        );

        if (hasMatchingKey) {
            const filteredComponents = {};
            Object.keys(filtered.components).forEach(key => {
                if (wanted.has(key.toLowerCase())) {
                    filteredComponents[key] = filtered.components[key];
                }
            });
            filtered.components = filteredComponents;
        }
    }

    // ── 4. original: difficulty level ─────────────────────────────────────
    if (parameters.difficulty) {
        filtered.detailLevel = parameters.difficulty;
    }

    return filtered;
}


    // ========================================
    // ADAPTIVE LEARNING METHODS
    // ========================================

    adaptContentDifficulty(content, currentLevel) {
        const adapted = { ...content };

        switch (currentLevel) {
            case 'beginner':
                adapted.vocabulary = 'simplified';
                adapted.examples = this.selectBasicExamples(content.examples);
                adapted.depth = 'overview';
                break;
            
            case 'intermediate':
                adapted.vocabulary = 'standard';
                adapted.examples = this.selectMixedExamples(content.examples);
                adapted.depth = 'moderate';
                break;
            
            case 'advanced':
                adapted.vocabulary = 'technical';
                adapted.examples = this.selectAdvancedExamples(content.examples);
                adapted.depth = 'comprehensive';
                adapted.research = this.addResearchConnections(content);
                break;
        }

        return adapted;
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
        return {
            currentResearch: `Current research in ${content.topic} includes...`,
            openQuestions: "Unresolved questions in the field...",
            techniques: "Advanced techniques used to study this topic..."
        };
    }

    getContextualScenarios(topicType) {
        return this.contextualScenarios[topicType] || [];
    }

    getMetacognitivePrompts(topicType) {
        const prompts = {
            beforeLearning: this.metacognitivePrompts.beforeLearning.map(p => 
                p.replace('{topic}', this.molecularTopics[topicType]?.name || topicType)
            ),
            duringLearning: this.metacognitivePrompts.duringLearning.map(p => 
                p.replace('{concept}', topicType)
            ),
            afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
                p.replace('{topic}', this.molecularTopics[topicType]?.name || topicType)
            )
        };

        return prompts;
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
    }

    // ========================================
    // CONTENT GENERATION METHODS
    // ========================================

    generateMolecularContent(problem, content) {
        const contentSections = [];

        // Generate overview section
        contentSections.push(this.generateOverviewSection(problem, content));

        // Generate specific content sections based on content structure
        if (content.classification) {
            contentSections.push(this.generateClassificationSection(content));
        }

        if (content.structure || content.nucleotideStructure || content.aminoAcids) {
            contentSections.push(this.generateStructureSection(content));
        }

        if (content.functions || content.proteinFunctions || content.lipidFunctions) {
            contentSections.push(this.generateFunctionsSection(content));
        }

        if (content.metabolism || content.cellularRespiration) {
            contentSections.push(this.generateMetabolismSection(content));
        }

        if (content.enzymeKinetics) {
            contentSections.push(this.generateKineticsSection(content));
        }

        // Add comparisons if available
        if (content.comparison) {
            contentSections.push(this.generateComparisonsSection(content));
        }

        // Add examples section
        if (content.examples) {
            contentSections.push(this.generateExamplesSection(content));
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

    generateOverviewSection(problem, content) {
        return {
            sectionType: 'overview',
            title: content.topic || problem.originalTopic,
            category: content.category,
            summary: content.summary,
            difficulty: problem.difficulty,
            prerequisites: problem.prerequisites,
            keyPoints: this.extractKeyPoints(content)
        };
    }

    generateClassificationSection(content) {
        return {
            sectionType: 'classification',
            title: 'Classification and Types',
            data: content.classification
        };
    }

    generateStructureSection(content) {
        return {
            sectionType: 'structure',
            title: 'Molecular Structure',
            data: content.structure || content.nucleotideStructure || content.aminoAcids || content.structure
        };
    }

    generateFunctionsSection(content) {
        return {
            sectionType: 'functions',
            title: 'Functions and Roles',
            data: content.functions || content.proteinFunctions || content.lipidFunctions
        };
    }

    generateMetabolismSection(content) {
        return {
            sectionType: 'metabolism',
            title: 'Metabolic Pathways',
            data: content.metabolism || content.cellularRespiration
        };
    }

    generateKineticsSection(content) {
        return {
            sectionType: 'kinetics',
            title: 'Enzyme Kinetics',
            data: content.enzymeKinetics
        };
    }

    generateComparisonsSection(content) {
        return {
            sectionType: 'comparisons',
            title: 'Comparisons and Contrasts',
            data: content.comparison
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

    generateContextualScenariosSection(content) {
        return {
            sectionType: 'contextual_scenarios',
            title: 'Real-World Applications',
            scenarios: content.contextualScenarios
        };
    }

    generateRelatedExperimentsSection(content) {
        if (!content.relatedExperiments || content.relatedExperiments.length === 0) {
            return null;
        }

        return {
            sectionType: 'related_experiments',
            title: 'Related Experiments',
            experiments: content.relatedExperiments
        };
    }

    generateMetacognitiveSection(content) {
        return {
            sectionType: 'metacognitive',
            title: 'Learning Guidance',
            prompts: content.metacognitivePrompts
        };
    }

    extractKeyPoints(content) {
        const keyPoints = [];

        if (content.summary) keyPoints.push(content.summary);
        
        // Extract from various content structures
        if (content.classification && content.classification.bySize) {
            Object.keys(content.classification.bySize).forEach(key => {
                keyPoints.push(`${key}: ${content.classification.bySize[key].definition || ''}`);
            });
        }

        return keyPoints.slice(0, 5);
    }


    // MOLECULAR BIOLOGY SPECIFIC HELPER METHODS
    // ========================================

    getTopicRelevance(topicType) {
        const relevance = {
            carbohydrates: "Carbohydrates provide energy and structural support in all living organisms",
            lipids: "Lipids form membranes, store energy, and serve as signaling molecules",
            proteins: "Proteins perform virtually every function in cells from catalysis to structure",
            nucleic_acids: "Nucleic acids store and transmit genetic information across generations",
            bioenergetics: "Energy metabolism powers all cellular activities and maintains life",
            enzymes: "Enzymes enable biochemical reactions to occur at rates compatible with life",
            molecular_signaling: "Cell signaling coordinates activities within and between cells",
            glycobiology: "Carbohydrate recognition mediates cell-cell interactions and immune responses",
            molecular_techniques: "Laboratory techniques enable discovery and analysis of biological molecules"
        };

        return relevance[topicType] || "Important molecular biology concept";
    }


    suggestRelatedTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {

        // NEW RELATIONSHIPS
        carbohydrates: [ 'bioenergetics', 'lipids'],
        lipids: ['carbohydrates', 'bioenergetics'],
        proteins: [ 'proteins', 'enzymes'],
        nucleic_acids: ['proteins,enzymes'],
        bioenergetics: [ 'enzymes', 'carbohydrates'],
        enzymes: ['proteins', 'bioenergetics']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.molecularTopics[type]?.name,
        description: this.molecularTopics[type]?.description
    }));
}

    // DIAGRAM GENERATION

    generateMolecularDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        this.diagramData = {
            type: type,
            diagrams: this.getRelevantMolecularDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual molecular structures"
        };
    }

    generateGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    

    // NEW: Extract from classification structures
    if (this.currentContent.classification) {
        this.extractGlossaryFromClassification(this.currentContent.classification, glossary);
    }

    // NEW: Amino acids
    if (this.currentContent.aminoAcids) {
        if (this.currentContent.aminoAcids.essentialAminoAcids) {
            glossary['Essential Amino Acids'] = this.currentContent.aminoAcids.essentialAminoAcids.definition;
        }
    }

    // NEW: Energy-related terms
    if (this.currentContent.energyFundamentals) {
        if (this.currentContent.energyFundamentals.ATP) {
            glossary['ATP'] = this.currentContent.energyFundamentals.ATP.fullName;
        }
        if (this.currentContent.energyFundamentals.electronCarriers) {
            Object.entries(this.currentContent.energyFundamentals.electronCarriers).forEach(([key, carrier]) => {
                glossary[key.toUpperCase()] = carrier.fullName;
            });
        }
    }

    // NEW: Enzyme terms
    if (this.currentContent.enzymeBasics) {
        glossary['Enzyme'] = this.currentContent.enzymeBasics.definition;
        if (this.currentContent.enzymeBasics.components) {
            Object.entries(this.currentContent.enzymeBasics.components).forEach(([key, value]) => {
                glossary[this.formatKey(key)] = value;
            });
        }
    }

    return glossary;
}

extractGlossaryFromClassification(classification, glossary) {
    Object.entries(classification).forEach(([key, value]) => {
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


  generateMolecularAnalogy(concept) {
        const analogies = {
            // Carbohydrates
            glucose: "Like individual LEGO blocks that can be assembled",
            starch: "Like a coiled chain of connected blocks (energy storage)",
            cellulose: "Like rigid scaffolding providing structure",
            
            // Lipids
            triglyceride: "Like a three-pronged fork with fatty acid tines",
            phospholipid: "Like a push-pin with two tails (hydrophobic) and a head (hydrophilic)",
            lipid_bilayer: "Like a sandwich with fatty interiors and watery outsides",
            cholesterol: "Like a wedge that fits between phospholipids to stabilize",
            
            // Proteins
            amino_acid: "Like different types of LEGO blocks with unique shapes",
            peptide_bond: "Like snapping LEGO blocks together",
            primary_structure: "Like the sequence of blocks in a LEGO chain",
            secondary_structure: "Like coiling or folding the LEGO chain",
            tertiary_structure: "Like the final 3D sculpture",
            enzyme: "Like a specialized tool or machine with a precise job",
            active_site: "Like a lock that only fits specific keys",
            
            // Nucleic Acids
            nucleotide: "Like a single letter in a genetic alphabet",
            dna: "Like a twisted ladder with coded instructions",
            base_pairing: "Like complementary puzzle pieces (A-T, G-C)",
            rna: "Like a temporary photocopy of instructions",
            codon: "Like a three-letter word spelling out an amino acid",
            
            // Bioenergetics
            atp: "Like a rechargeable battery storing cellular energy",
            cellular_respiration: "Like burning fuel to produce energy (but controlled)",
            glycolysis: "Like breaking down fuel into smaller, usable pieces",
            electron_transport: "Like a bucket brigade passing electrons downhill",
            chemiosmosis: "Like water flowing through a dam to generate electricity",
            
            // Enzymes
            substrate: "Like raw materials entering a factory",
            product: "Like finished goods leaving a factory",
            cofactor: "Like a helper tool needed for the machine to work",
            competitive_inhibitor: "Like a fake key jamming a lock",
            allosteric_regulation: "Like a dimmer switch controlling enzyme activity",
            
            // Signaling
            receptor: "Like an antenna receiving specific signals",
            ligand: "Like a key that unlocks the receptor",
            signal_cascade: "Like a relay race amplifying the message",
            second_messenger: "Like a loudspeaker broadcasting inside the cell"
        };

        return analogies[concept] || "Performs a specialized molecular function";
    }

    adaptMolecularLanguage(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'monosaccharide': 'simple sugar',
                    'polysaccharide': 'complex carbohydrate (many sugars)',
                    'triglyceride': 'fat molecule',
                    'phospholipid': 'membrane fat',
                    'amino acid': 'protein building block',
                    'polypeptide': 'protein chain',
                    'nucleotide': 'DNA/RNA building block',
                    'ATP': 'cell energy',
                    'enzyme': 'biological speed-up molecule',
                    'substrate': 'what enzyme acts on',
                    'catalyst': 'speed-up molecule',
                    'hydrolysis': 'breaking apart with water',
                    'dehydration synthesis': 'joining by removing water',
                    'covalent bond': 'strong chemical connection',
                    'hydrogen bond': 'weak attraction'
                }
            },
            intermediate: {
                replacements: {
                    'monosaccharide': 'simple sugar (monosaccharide)',
                    'polysaccharide': 'polysaccharide',
                    'triglyceride': 'triglyceride',
                    'ATP': 'ATP (adenosine triphosphate)',
                    'enzyme': 'enzyme'
                }
            },
            advanced: {
                replacements: {
                    'monosaccharide': 'monosaccharide (C₆H₁₂O₆)',
                    'polysaccharide': 'polysaccharide polymer',
                    'triglyceride': 'triacylglycerol',
                    'ATP': 'adenosine 5\'-triphosphate',
                    'enzyme': 'enzyme (biological catalyst)',
                    'substrate': 'substrate (ES complex formation)'
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

    addMolecularConceptualConnections(content) {
        if (!this.includeConceptualConnections) return content;

        const connections = {
            carbohydrates: "Carbohydrate structure determines function: α-bonds (digestible) vs β-bonds (structural). Energy storage connects to metabolism.",
            lipids: "Lipid amphipathic nature enables membrane formation. Membrane structure relates to transport and signaling.",
            proteins: "Primary structure determines all higher structures. Structure-function relationship is central: sequence → shape → function.",
            nucleic_acids: "Central Dogma connects DNA → RNA → Protein. Information flow is unidirectional in normal cells.",
            bioenergetics: "Energy metabolism connects all pathways: catabolism releases energy, anabolism uses energy. ATP couples reactions.",
            enzymes: "Enzyme kinetics connects to metabolic regulation. Active site structure determines specificity and catalytic mechanism.",
            molecular_signaling: "Signaling cascades amplify signals and integrate responses. Connects to metabolism, gene expression, and development.",
            glycobiology: "Carbohydrate modifications on proteins/lipids mediate recognition. Connects to immunity, development, and disease.",
            molecular_techniques: "Techniques exploit molecular properties: size, charge, binding specificity. Enable discovery and application."
        };

        content.conceptualConnections = connections[this.currentProblem.type] || 
            "This topic connects to broader molecular biology principles";

        return content;
    }

    enrichWithMolecularExamples(content) {
        if (!this.includeExamples || content.examples) return content;

        const exampleDatabase = {
            carbohydrates: [
                "Glucose: primary fuel for brain (requires ~120g/day)",
                "Cellulose: humans can't digest but essential as fiber",
                "Lactose intolerance: lack of lactase enzyme affects ~65% of adults"
            ],
            lipids: [
                "Trans fats: industrially produced, increase heart disease risk",
                "Omega-3 fatty acids: found in fish, anti-inflammatory",
                "Cholesterol: needed for membranes and hormones, but excess causes atherosclerosis"
            ],
            proteins: [
                "Sickle cell anemia: single amino acid change (Glu→Val) causes disease",
                "Insulin: first protein sequenced, revolutionized diabetes treatment",
                "Collagen: most abundant protein in mammals, provides strength to tissues"
            ],
            nucleic_acids: [
                "Human genome: 3.2 billion base pairs, only ~1.5% codes for proteins",
                "HIV: RNA virus that reverse transcribes into host DNA",
                "CRISPR: uses guide RNA to edit specific DNA sequences"
            ],
            bioenergetics: [
                "Cyanide poisoning: blocks ETC, stops ATP production → rapid death",
                "Lactate buildup: causes muscle fatigue during intense exercise",
                "Brown fat: generates heat instead of ATP via uncoupling proteins"
            ],
            enzymes: [
                "Aspirin: irreversibly inhibits COX enzyme → blocks pain/inflammation",
                "Lactase: breaks down lactose; deficiency causes intolerance",
                "Penicillin: inhibits bacterial cell wall synthesis enzyme"
            ],
            molecular_signaling: [
                "Insulin signaling: defects cause diabetes (type 2)",
                "Adrenaline: triggers fight-or-flight via GPCR cascade",
                "Cancer: often involves mutated signaling proteins (Ras, RTKs)"
            ],
            glycobiology: [
                "Blood types: determined by carbohydrate structures on RBCs",
                "Influenza: hemagglutinin binds sialic acid on host cells",
                "Glycosylation errors: cause congenital disorders (CDG)"
            ]
        };

        if (exampleDatabase[this.currentProblem.type]) {
            content.examples = content.examples || [];
            content.examples.push(...exampleDatabase[this.currentProblem.type]);
        }

        return content;
    }

    addMolecularComparativeContext(content) {
        if (!this.includeComparisons || content.comparison) return content;

        const comparativeData = {
            carbohydrates: {
                energy: "4 kcal/g (vs 9 kcal/g for lipids)",
                storage: "Short-term (glycogen, hours) vs long-term (fat, weeks)",
                digestion: "Fast (simple sugars) vs slow (complex carbs with fiber)"
            },
            lipids: {
                energy: "9 kcal/g (most energy-dense macromolecule)",
                solubility: "Hydrophobic (vs hydrophilic carbohydrates)",
                structure: "Flexible membranes vs rigid carbohydrate structures"
            },
            proteins: {
                diversity: "20 amino acids → vast structural diversity",
                function: "Most diverse: catalysis, structure, transport, signaling",
                information: "Functional molecules (vs nucleic acids for information storage)"
            },
            nucleic_acids: {
                stability: "DNA stable (double-strand) vs RNA unstable (single-strand, 2'-OH)",
                bases: "T in DNA vs U in RNA",
                function: "Long-term storage (DNA) vs temporary messenger (RNA)"
            },
            bioenergetics: {
                efficiency: "Aerobic 40% efficient vs anaerobic 2% efficient",
                speed: "Anaerobic fast but inefficient vs aerobic slow but efficient",
                products: "CO₂ + H₂O (aerobic) vs lactate/ethanol (anaerobic)"
            }
        };

        if (comparativeData[this.currentProblem.type]) {
            content.comparativeContext = comparativeData[this.currentProblem.type];
        }

        return content;
    }

    validateMolecularContent(content) {
        const validationResults = {
            isValid: true,
            warnings: [],
            suggestions: []
        };

        // Check for required fields
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

        // Check for content depth
        const hasSubstantiveContent = 
            content.classification ||
            content.structure ||
            content.functions ||
            content.metabolism ||
            content.enzymeKinetics;

        if (!hasSubstantiveContent) {
            validationResults.warnings.push("Limited substantive content");
            validationResults.suggestions.push("Consider adding more detailed information");
        }

        // Check for educational value
        if (!content.examples && !content.applications) {
            validationResults.suggestions.push("Consider adding examples and applications");
        }

        // Check for comparisons
        if (!content.comparison) {
            validationResults.suggestions.push("Consider adding comparative information");
        }

        return validationResults;
    }

    calculateMolecularContentCompleteness() {
        if (!this.currentContent) return 0;

        let score = 0;
        const maxScore = 10;

        // Award points for different content aspects
        if (this.currentContent.topic) score += 1;
        if (this.currentContent.summary) score += 1;
        if (this.currentContent.examples) score += 1;
        if (this.currentContent.applications) score += 1;
        if (this.currentContent.comparison) score += 1;
        
        // Main content structures
        const hasMainContent = 
            this.currentContent.classification ||
            this.currentContent.structure ||
            this.currentContent.functions ||
            this.currentContent.metabolism;
        if (hasMainContent) score += 3;

        // Additional depth
        if (this.currentContent.enzymeKinetics) score += 1;
        if (this.currentContent.contextualScenarios) score += 1;

        return Math.round((score / maxScore) * 100);
    }

    getMolecularContentQualityMetrics() {
        return {
            completeness: this.calculateMolecularContentCompleteness(),
            hasExamples: !!this.currentContent?.examples,
            hasComparisons: !!this.currentContent?.comparison,
            hasApplications: !!this.currentContent?.applications,
            hasContextualScenarios: !!this.currentContent?.contextualScenarios,
            detailLevel: this.explanationLevel,
            includesVisualizations: this.includeVisualizations,
            includesMisconceptions: this.includeCommonMisconceptions,
            includesExperiments: this.includeExperiments,
            adaptiveDifficulty: this.adaptiveDifficulty,
            metacognitiveSupport: this.metacognitiveSupport
        };
    }

    filterMolecularContentByCategory(category) {
        if (!this.currentContent) return null;

        const filtered = {
            category: category,
            items: []
        };

        // Filter based on category
        if (this.currentContent.classification) {
            Object.entries(this.currentContent.classification).forEach(([key, value]) => {
                if (key.toLowerCase().includes(category.toLowerCase())) {
                    filtered.items.push({ type: key, data: value });
                }
            });
        }

        return filtered;
    }

generateMolecularContentSummary() {
        if (!this.currentContent) return null;

        const summary = {
            topic: this.currentContent.topic,
            category: this.currentContent.category,
            summary: this.currentContent.summary,
            keyPoints: [],
            coverage: {},
            difficulty: this.currentProblem?.difficulty
        };

        // Extract key points
        if (this.currentContent.classification) {
            summary.keyPoints.push("Classification and types covered");
            summary.coverage.classification = Object.keys(this.currentContent.classification).length;
        }

        if (this.currentContent.structure) {
            summary.keyPoints.push("Molecular structure explained");
            summary.coverage.structure = true;
        }

        if (this.currentContent.functions) {
            summary.keyPoints.push("Functions and roles described");
            summary.coverage.functions = true;
        }

        if (this.currentContent.examples) {
            summary.coverage.examples = this.currentContent.examples.length;
        }

        return summary;
    }

    assessMolecularContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        // Topic-based difficulty
        const basicTopics = ['carbohydrates'];
        const intermediateTopics = ['lipids', 'molecular_techniques'];
        const advancedTopics = ['proteins', 'nucleic_acids', 'bioenergetics', 'enzymes', 'molecular_signaling', 'glycobiology'];

        if (basicTopics.includes(this.currentProblem.type)) {
            difficultyScore += 1;
        } else if (intermediateTopics.includes(this.currentProblem.type)) {
            difficultyScore += 2;
        } else if (advancedTopics.includes(this.currentProblem.type)) {
            difficultyScore += 3;
        }

        // Adjust based on detail level
        if (this.explanationLevel === 'advanced') difficultyScore += 1;
        if (this.explanationLevel === 'basic') difficultyScore -= 1;

        // Return difficulty rating
        if (difficultyScore <= 2) return 'beginner';
        if (difficultyScore <= 4) return 'intermediate';
        return 'advanced';
    }

    generateMolecularLearningObjectives() {
        if (!this.currentProblem) return [];

        const objectivesDatabase = {
            carbohydrates: [
                "Classify carbohydrates as monosaccharides, disaccharides, or polysaccharides",
                "Explain the structural differences between starch and cellulose",
                "Describe the formation and breakage of glycosidic bonds",
                "Relate carbohydrate structure to energy storage and structural functions"
            ],
            lipids: [
                "Distinguish between different types of lipids and their functions",
                "Explain the amphipathic nature of phospholipids and membrane formation",
                "Compare saturated and unsaturated fatty acids",
                "Describe the structure and function of steroids"
            ],
            proteins: [
                "Identify the four levels of protein structure",
                "Explain how primary structure determines higher levels of organization",
                "Describe the types of bonds that stabilize protein structure",
                "Relate protein structure to function with examples"
            ],
            nucleic_acids: [
                "Describe the structure of nucleotides and polynucleotides",
                "Explain the complementary base pairing rules",
                "Compare the structures and functions of DNA and RNA",
                "Describe the central dogma of molecular biology"
            ],
            bioenergetics: [
                "Trace the flow of energy from glucose to ATP",
                "Describe the four stages of cellular respiration",
                "Explain the role of electron carriers (NAD⁺, FAD)",
                "Calculate ATP yield from glucose metabolism"
            ],
            enzymes: [
                "Explain how enzymes lower activation energy",
                "Describe the induced fit model of enzyme action",
                "Interpret Michaelis-Menten kinetics",
                "Distinguish between types of enzyme inhibition"
            ],
            molecular_signaling: [
                "Describe the main types of cell surface receptors",
                "Explain signal transduction cascade amplification",
                "Identify the roles of second messengers",
                "Relate signaling defects to disease"
            ],
            glycobiology: [
                "Explain the role of carbohydrates in cell recognition",
                "Describe N-linked and O-linked glycosylation",
                "Relate glycoproteins to blood type determination",
                "Explain how lectins function in biological systems"
            ],
            molecular_techniques: [
                "Explain the principles of gel electrophoresis",
                "Describe the steps of PCR and its applications",
                "Compare different chromatography methods",
                "Understand how Western blotting detects specific proteins"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand the key molecular concepts",
            "Apply knowledge to biological contexts",
            "Make connections between structure and function"
        ];
    }

    identifyMolecularPrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            carbohydrates: [
                "Basic chemistry (atoms, bonds, molecules)",
                "Understanding of organic compounds",
                "Knowledge of dehydration synthesis and hydrolysis"
            ],
            lipids: [
                "Basic chemistry (polarity, bonds)",
                "Understanding of hydrophobic/hydrophilic",
                "Knowledge of ester bonds"
            ],
            proteins: [
                "Amino acid structure",
                "Chemical bonding (covalent, hydrogen, ionic)",
                "Basic understanding of 3D shapes"
            ],
            nucleic_acids: [
                "Basic chemistry (phosphate, sugars)",
                "Understanding of complementarity",
                "Knowledge of hydrogen bonding"
            ],
            bioenergetics: [
                "Basic chemistry (redox reactions)",
                "Understanding of ATP",
                "Knowledge of cellular respiration overview"
            ],
            enzymes: [
                "Protein structure",
                "Understanding of chemical reactions and activation energy",
                "Basic kinetics concepts"
            ],
            molecular_signaling: [
                "Membrane structure",
                "Protein structure and function",
                "Basic understanding of signal transduction"
            ],
            glycobiology: [
                "Carbohydrate structure",
                "Protein structure (glycoproteins)",
                "Cell membrane composition"
            ],
            molecular_techniques: [
                "Basic molecular biology (DNA, proteins)",
                "Understanding of molecular properties (size, charge)",
                "Laboratory safety basics"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || [
            "General chemistry background",
            "Basic biology knowledge"
        ];
    }

    generateMolecularStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            carbohydrates: [
                "Build molecular models to understand 3D structure",
                "Practice drawing α vs β configurations",
                "Create comparison tables for mono-, di-, and polysaccharides",
                "Use mnemonics for sugar types (e.g., 'Sweet Glucose Fructose')"
            ],
            lipids: [
                "Draw phospholipid bilayers to understand membrane formation",
                "Practice identifying saturated vs unsaturated fatty acids",
                "Create flashcards for different lipid types",
                "Relate lipid properties to real-world examples (cooking oils, soaps)"
            ],
            proteins: [
                "Memorize amino acid properties using groupings (nonpolar, polar, charged)",
                "Draw each level of structure progressively",
                "Practice predicting structure-function relationships",
                "Use molecular visualization software to explore 3D structures"
            ],
            nucleic_acids: [
                "Build DNA models with complementary base pairing",
                "Practice writing out transcription and translation",
                "Create tables comparing DNA vs RNA",
                "Use codon tables to practice translation"
            ],
            bioenergetics: [
                "Make flowcharts for each stage of cellular respiration",
                "Track inputs and outputs for each pathway",
                "Practice calculating ATP yield",
                "Create a concept map linking all pathways"
            ],
            enzymes: [
                "Practice drawing Michaelis-Menten and Lineweaver-Burk plots",
                "Use real enzyme examples to understand concepts",
                "Create comparison tables for inhibition types",
                "Work through kinetics problems regularly"
            ],
            molecular_signaling: [
                "Draw out signaling cascades with amplification",
                "Create flashcards for receptor types",
                "Relate signaling to diseases (cancer, diabetes)",
                "Practice explaining pathways out loud"
            ],
            glycobiology: [
                "Draw glycoprotein structures",
                "Create tables comparing N-linked vs O-linked",
                "Relate to blood types with diagrams",
                "Study lectin-carbohydrate interactions"
            ],
            molecular_techniques: [
                "Watch videos of techniques being performed",
                "Practice interpreting gel images",
                "Create flowcharts for multi-step techniques",
                "Relate techniques to their molecular basis"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Review material regularly with active recall",
            "Create visual aids and molecular models",
            "Practice explaining concepts to others",
            "Relate molecular concepts to real-world applications"
        ];
    }

    generateMolecularProcessTimeline(processName) {
        const timelines = {
            'Cellular Respiration': [
                { stage: 'Glycolysis', location: 'Cytoplasm', duration: 'Seconds', output: '2 ATP, 2 NADH, 2 Pyruvate' },
                { stage: 'Link Reaction', location: 'Matrix', duration: 'Seconds', output: '2 Acetyl-CoA, 2 NADH, 2 CO₂' },
                { stage: 'Krebs Cycle', location: 'Matrix', duration: 'Seconds', output: '2 ATP, 6 NADH, 2 FADH₂, 4 CO₂' },
                { stage: 'Electron Transport', location: 'Inner membrane', duration: 'Milliseconds', output: '~34 ATP, H₂O' }
            ],
            'Protein Synthesis': [
                { step: 'Transcription Initiation', location: 'Nucleus', duration: 'Seconds', product: 'RNA polymerase binds' },
                { step: 'Transcription Elongation', location: 'Nucleus', duration: 'Minutes', product: 'pre-mRNA' },
                { step: 'RNA Processing', location: 'Nucleus', duration: 'Minutes', product: 'Mature mRNA' },
                { step: 'Translation', location: 'Ribosome', duration: 'Minutes', product: 'Polypeptide (~40 aa/sec)' },
                { step: 'Post-translational', location: 'ER/Golgi', duration: 'Minutes-Hours', product: 'Functional protein' }
            ],
            'DNA Replication': [
                { step: 'Initiation', duration: 'Seconds', events: 'Helicase unwinds, primase adds primers' },
                { step: 'Elongation', duration: 'Minutes', events: 'DNA pol III synthesizes (1000 nt/sec)' },
                { step: 'Termination', duration: 'Seconds', events: 'DNA pol I removes primers, ligase seals' }
            ],
            'Enzyme Catalysis': [
                { phase: 'Substrate Binding', duration: 'Microseconds', events: 'E + S → ES complex' },
                { phase: 'Transition State', duration: 'Femtoseconds', events: 'ES → ES‡ (activated complex)' },
                { phase: 'Product Release', duration: 'Microseconds', events: 'ES‡ → EP → E + P' },
                { phase: 'Turnover', rate: 'kcat varies', range: '10⁻¹ to 10⁷ s⁻¹' }
            ]
        };

        return timelines[processName] || [];
    }

    generateMolecularContentHierarchy() {
        if (!this.currentContent) return null;

        const hierarchy = {
            root: this.currentContent.topic,
            children: []
        };

        if (this.currentContent.classification) {
            Object.keys(this.currentContent.classification).forEach(key => {
                hierarchy.children.push({
                    name: key,
                    type: 'classification'
                });
            });
        }

        if (this.currentContent.structure) {
            hierarchy.children.push({
                name: 'Molecular Structure',
                type: 'section'
            });
        }

        if (this.currentContent.functions) {
            hierarchy.children.push({
                name: 'Functions',
                type: 'section'
            });
        }

        if (this.currentContent.metabolism) {
            hierarchy.children.push({
                name: 'Metabolism',
                type: 'section'
            });
        }

        return hierarchy;
    }



    // ========================================
    // WORKBOOK GENERATION METHODS
    // ========================================

     generateMolecularWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();
        workbook.title = 'Molecular Biology Workbook';

        // Start diagram generation in background if needed
        if (this.includeDiagramsInWorkbook) {
            this.diagramsPromise = this.generateMolecularDiagramDataAsync();
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
        workbook.title = 'Molecular Biology Experiment Workbook';

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
                    this.molecularTopics[topic]?.name || topic,
                    this.molecularTopics[topic]?.description || ''
                ])
            });
        }

        this.currentWorkbook = workbook;
    }

    // Async helper that runs in background
    async generateMolecularDiagramDataAsync() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        // Get relevant diagram keys
        const diagramKeys = this.getRelevantMolecularDiagrams(type);

        this.diagramData = {
            type: type,
            diagrams: diagramKeys,
            renderedImages: [],
            status: 'rendering',
            placeholder: false,
            note: "Molecular biology diagrams"
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
            title: 'Molecular Diagrams',
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
            title: 'Molecular Diagrams',
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

    getRelevantMolecularDiagrams(topicType) {
        const diagramMap = {
            carbohydrates: [
                "cellStructure", // Will use closest match from available diagrams
            ],
            lipids: [
                "cellMembrane",
                "cellStructure"
            ],
            proteins: [
                "cellStructure"
            ],
            nucleic_acids: [
                "dnaStructure",
                "rnaStructure",
                "dnaReplication",
                "transcription",
                "translation",
                "codonChart",
                "chromosomes"
            ],
            bioenergetics: [
                "atpStructure",
                "cellularRespiration",
                "mitochondrion",
                "electronTransportChain",
                "photosynthesisDetailed",
                "chloroplastStructure"
            ],
            enzymes: [
                "enzymeAction"
            ],
            molecular_signaling: [
                "cellMembrane"
            ],
            glycobiology: [
                "cellMembrane",
                "antibodyStructure"
            ],
            molecular_techniques: [
                "pcrCycle",
                "recombinantDNA",
                "microscopy"
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
            title: 'Molecular Biology Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            learnerLevel: this.learnerProfile.currentLevel,
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.molecularTopics[this.currentProblem.type]?.category || 'N/A'],
                ['Difficulty', this.currentProblem.difficulty || 'Intermediate'],
                ['Prerequisites', this.currentProblem.prerequisites ? this.currentProblem.prerequisites.join(', ') : 'None']
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

        return {
            title: 'Content Overview',
            type: 'overview',
            data: overviewData
        };
    }

    createDetailedContentSection() {
        if (!this.currentContent) return null;

        const contentData = [];

        // Process different content structures
        this.processContentStructure(this.currentContent, contentData);

        return contentData.length > 0 ? {
            title: 'Detailed Content',
            type: 'detailed_content',
            data: contentData
        } : null;
    }

    processContentStructure(obj, dataArray, prefix = '') {
        Object.entries(obj).forEach(([key, value]) => {
            if (key === 'topic' || key === 'category' || key === 'summary') return;

            if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
                dataArray.push([`${prefix}${key.toUpperCase()}`, '']);
                this.processContentStructure(value, dataArray, '  ');
            } else if (Array.isArray(value)) {
                dataArray.push([`${prefix}${key}`, '']);
                value.forEach(item => {
                    if (typeof item === 'string') {
                        dataArray.push([`${prefix}  •`, item]);
                    } else if (typeof item === 'object') {
                        Object.entries(item).forEach(([k, v]) => {
                            dataArray.push([`${prefix}  ${k}`, typeof v === 'object' ? JSON.stringify(v) : v]);
                        });
                        dataArray.push(['', '']);
                    }
                });
            } else {
                dataArray.push([`${prefix}${key}`, value]);
            }
        });
    }

    createComparisonsWorkbookSection() {
        if (!this.currentContent?.comparison) return null;

        const comparisonData = [];
        
        if (Array.isArray(this.currentContent.comparison)) {
            comparisonData.push(['Feature', 'Comparison 1', 'Comparison 2']);
            this.currentContent.comparison.forEach(comp => {
                const row = [];
                Object.values(comp).forEach(val => row.push(val));
                comparisonData.push(row);
            });
        } else {
            Object.entries(this.currentContent.comparison).forEach(([key, value]) => {
                comparisonData.push([key.toUpperCase(), '']);
                Object.entries(value).forEach(([k, v]) => {
                    comparisonData.push([`  ${k}`, typeof v === 'object' ? JSON.stringify(v) : v]);
                });
                comparisonData.push(['', '']);
            });
        }

        return {
            title: 'Comparisons',
            type: 'comparisons',
            data: comparisonData
        };
    }

    createExamplesApplicationsSection() {
        if (!this.currentContent.examples && !this.currentContent.applications) return null;

        const data = [];

        if (this.currentContent.examples) {
            data.push(['EXAMPLES', '']);
            this.currentContent.examples.forEach(example => {
                if (typeof example === 'object') {
                    Object.entries(example).forEach(([key, value]) => {
                        data.push([key, typeof value === 'object' ? JSON.stringify(value) : value]);
                    });
                    data.push(['', '']);
                }
            });
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

    createContextualScenariosWorkbookSection() {
        if (!this.currentContent.contextualScenarios || this.currentContent.contextualScenarios.length === 0) {
            return null;
        }

        const data = [['Scenario', 'Context', 'Application']];
        
        this.currentContent.contextualScenarios.forEach(scenario => {
            data.push([
                scenario.scenario,
                scenario.context,
                scenario.application
            ]);
        });

        return {
            title: 'Real-World Scenarios',
            type: 'contextual',
            data: data
        };
    }

    createRelatedExperimentsWorkbookSection() {
        if (!this.includeExperiments || !this.currentContent.relatedExperiments) {
            return null;
        }

        const data = [['Experiment Name', 'Category', 'Scientist']];

        this.currentContent.relatedExperiments.forEach(exp => {
            data.push([
                exp.name,
                exp.category,
                exp.historicalScientist || 'Various'
            ]);
        });

        return {
            title: 'Related Experiments',
            type: 'experiments',
            data: data
        };
    }

    createMisconceptionsSection() {
        if (!this.includeCommonMisconceptions) return null;

        const misconceptions = this.commonMisconceptions[this.currentProblem.type];
        if (!misconceptions) return null;

        const data = [['Category', 'Common Misconceptions']];

        Object.entries(misconceptions).forEach(([category, miscList]) => {
            data.push([category, '']);
            miscList.forEach(misc => {
                data.push(['  •', misc]);
            });
        });

        return {
            title: 'Common Misconceptions',
            type: 'misconceptions',
            data: data
        };
    }

    createMetacognitiveWorkbookSection() {
        if (!this.metacognitiveSupport || !this.currentContent.metacognitivePrompts) {
            return null;
        }

        const data = [];

        Object.entries(this.currentContent.metacognitivePrompts).forEach(([phase, prompts]) => {
            data.push([phase.toUpperCase().replace('_', ' '), '']);
            prompts.forEach(prompt => {
                data.push(['  •', prompt]);
            });
            data.push(['', '']);
        });

        return {
            title: 'Learning Strategies',
            type: 'metacognitive',
            data: data
        };
    }

    createAssessmentSection() {
        if (!this.assessmentFeedback) return null;

        const questions = this.generateAssessmentQuestions(this.currentProblem.type);
        if (!questions || questions.length === 0) return null;

        const data = [['Level', 'Question']];

        Object.entries(questions).forEach(([level, question]) => {
            data.push([level.charAt(0).toUpperCase() + level.slice(1), question]);
        });

        return {
            title: 'Assessment Questions',
            type: 'assessment',
            data: data
        };
    }

    generateAssessmentQuestions(topicType) {
        return this.assessmentQuestions[topicType] || {};
    }

    // ========================================
    // EXPERIMENT HANDLING METHODS
    // ========================================


    findExperimentByTopic(topic) {
        const topicLower = topic.toLowerCase();
        
        for (const [id, exp] of Object.entries(this.molecularExperiments)) {
            if (exp.name.toLowerCase().includes(topicLower)) {
                return exp;
            }
        }

        for (const [id, exp] of Object.entries(this.molecularExperiments)) {
            if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
                return exp;
            }
        }

        return null;
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
    
    if (labExp.variables) {
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
        // Handle both array and object formats
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

    if (labExp.procedure) {
        formatted.push(['', '']);
        formatted.push(['Procedure', '']);
        
        // FIX: Handle both array and non-array formats
        if (Array.isArray(labExp.procedure)) {
            labExp.procedure.forEach((step, index) => {
                if (step.trim() === '') {
                    formatted.push(['', '']);
                } else if (step.includes(':') && step === step.toUpperCase()) {
                    formatted.push([step, '']);
                } else {
                    formatted.push([`  ${index + 1}.`, step]);
                }
            });
        } else if (typeof labExp.procedure === 'object') {
            // Handle object format (with nested sections)
            Object.entries(labExp.procedure).forEach(([key, value]) => {
                formatted.push([key.toUpperCase() + ':', '']);
                if (Array.isArray(value)) {
                    value.forEach((step, idx) => {
                        formatted.push([`  ${idx + 1}.`, step]);
                    });
                } else {
                    formatted.push(['  ', value]);
                }
                formatted.push(['', '']);
            });
        }
    }

    if (labExp.observations) {
        formatted.push(['', '']);
        formatted.push(['Expected Observations', '']);
        Object.entries(labExp.observations).forEach(([key, value]) => {
            formatted.push([`  ${key}:`, '']);
            if (Array.isArray(value)) {
                value.forEach(obs => formatted.push(['    -', obs]));
            } else if (typeof value === 'object') {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    formatted.push([`    ${subKey}:`, '']);
                    if (Array.isArray(subValue)) {
                        subValue.forEach(item => formatted.push(['      -', item]));
                    } else {
                        formatted.push(['      ', subValue]);
                    }
                });
            } else {
                formatted.push(['    ', value]);
            }
        });
    }

    if (labExp.results) {
        formatted.push(['', '']);
        formatted.push(['Results', labExp.results]);
    }

    if (labExp.conclusion) {
        formatted.push(['Conclusion', labExp.conclusion]);
    }

    if (labExp.connectionToHistorical) {
        formatted.push(['', '']);
        formatted.push(['Connection to Historical Experiment', labExp.connectionToHistorical]);
    }

    if (labExp.realWorldApplication) {
        formatted.push(['', '']);
        formatted.push(['Real-World Applications', '']);
        if (Array.isArray(labExp.realWorldApplication)) {
            labExp.realWorldApplication.forEach(app => {
                formatted.push(['  •', app]);
            });
        }
    }

    if (labExp.safetyNotes) {
        formatted.push(['', '']);
        formatted.push(['SAFETY NOTES', '']);
        if (Array.isArray(labExp.safetyNotes)) {
            labExp.safetyNotes.forEach(note => {
                formatted.push(['  ⚠', note]);
            });
        }
    }

    return formatted;
}


    getRelatedExperiments(topicType) {
        const related = [];
        
        Object.entries(this.molecularExperiments).forEach(([id, experiment]) => {
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
    // UTILITY AND HELPER METHODS
    // ========================================

    getAllExperiments() {
        return Object.entries(this.molecularExperiments).map(([id, exp]) => ({
            id: id,
            name: exp.name,
            category: exp.category,
            relatedTopics: exp.relatedTopics,
            scientist: exp.historicalBackground?.scientist,
            year: exp.historicalBackground?.year
        }));
    }

    getAllTopics() {
        return Object.entries(this.molecularTopics).map(([id, topic]) => ({
            id: id,
            name: topic.name,
            category: topic.category,
            description: topic.description,
            difficulty: topic.difficulty,
            prerequisites: topic.prerequisites
        }));
    }

    resetWorkbook() {
        this.currentProblem = null;
        this.currentContent = null;
        this.contentSteps = [];
        this.currentWorkbook = null;
        this.currentExperiment = null;
    }


    formatMolecularTerm(term) {
        let formatted = term;
        
        Object.entries(this.molecularSymbols).forEach(([key, symbol]) => {
            const regex = new RegExp(key, 'g');
            formatted = formatted.replace(regex, symbol);
        });

        return formatted;
    }
  

    // Update getWorkbookStatus to include diagram info
    
}

// Export the class
export default EnhancedMolecularBiologyWorkbook;
