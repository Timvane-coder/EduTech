
//Enhanced Organic Chemistry Workbook - Comprehensive Organic Molecules System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { ChemistrySvgDiagrams } from '../chemistrysvg.js';
import { ChemistryDiagramsRegistry } from '../chemistryregistry.js';
import { ChemistryDiagramsRenderer } from '../chemistryrender.js';
import * as math from 'mathjs';

export class EnhancedOrganicChemistryWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "organic";
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
        this.diagramRenderer = new ChemistryDiagramsRenderer();
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

        this.organicSymbols = this.initializeOrganicSymbols();
        this.setThemeColors();
        this.initializeOrganicTopics();
        this.initializeOrganicLessons();
        this.initializeOrganicExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            organic: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#2e7d32',
                headerText: '#ffffff',
                sectionBg: '#c8e6c9',
                sectionText: '#1b5e20',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e8f5e9',
                resultText: '#2e7d32',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#66bb6a',
                contentBg: '#f9fbe7',
                contentText: '#827717',
                diagramBg: '#fce4ec',
                structureBg: '#e0f2f1',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                hydrocarbonBg: '#e8f5e9',
                functionalGroupBg: '#e3f2fd',
                reactionBg: '#fce4ec',
                stereochemistryBg: '#f3e5f5',
                spectroscopyBg: '#e0f7fa',
                polymerBg: '#fff8e1'
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
                hydrocarbonBg: '#e8f5e9',
                functionalGroupBg: '#e3f2fd',
                reactionBg: '#fce4ec',
                stereochemistryBg: '#f3e5f5',
                spectroscopyBg: '#e0f7fa',
                polymerBg: '#fff8e1'
            }
        };

        this.colors = themes[this.theme] || themes.organic;
    }

    initializeOrganicSymbols() {
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
            'sigma': 'σ',
            'omega': 'ω',

            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            'doubleArrow': '↔',
            'resonance': '↔',
            'curvedArrow': '⟳',

            // Math/Chemistry symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'approximately': '≈',
            'degree': '°',
            'angstrom': 'Å',
            'delta_plus': 'δ⁺',
            'delta_minus': 'δ⁻',

            // Common organic molecules
            'methane': 'CH₄',
            'ethane': 'C₂H₆',
            'ethene': 'C₂H₄',
            'ethyne': 'C₂H₂',
            'benzene': 'C₆H₆',
            'methanol': 'CH₃OH',
            'ethanol': 'C₂H₅OH',
            'acetic_acid': 'CH₃COOH',
            'acetone': 'CH₃COCH₃',
            'formaldehyde': 'HCHO',
            'chloroform': 'CHCl₃',
            'diethyl_ether': 'C₂H₅OC₂H₅',

            // Functional groups (abbreviated)
            'OH': '−OH',
            'COOH': '−COOH',
            'CHO': '−CHO',
            'CO': '−C=O',
            'NH2': '−NH₂',
            'NO2': '−NO₂',
            'SO3H': '−SO₃H',
            'CN': '−CN',
            'X': '−X (halogen)',

            // Reaction conditions
            'heat': 'Δ',
            'light': 'hν',
            'catalyst': 'cat.',
            'conc': 'conc.',
            'dil': 'dil.',
            'aq': 'aq.',

            // Bond types
            'single': '−',
            'double': '=',
            'triple': '≡',
            'arene': '⊙',

            // Stereochemistry
            'R': '(R)',
            'S': '(S)',
            'E': '(E)',
            'Z': '(Z)',
            'cis': 'cis-',
            'trans': 'trans-',
            'meso': 'meso-',
            'racemic': '(±)',

            // Common reagents
            'H2SO4': 'H₂SO₄',
            'HCl': 'HCl',
            'HBr': 'HBr',
            'NaOH': 'NaOH',
            'KMnO4': 'KMnO₄',
            'LiAlH4': 'LiAlH₄',
            'NaBH4': 'NaBH₄',
            'H2O': 'H₂O',
            'O2': 'O₂',
            'Br2': 'Br₂',
            'Cl2': 'Cl₂',
            'AlCl3': 'AlCl₃',
            'FeBr3': 'FeBr₃',
            'H2Cr2O7': 'H₂Cr₂O₇',
            'SOCl2': 'SOCl₂',
            'PCl5': 'PCl₅',

            // Spectroscopy
            'ppm': 'ppm',
            'MHz': 'MHz',
            'cm_inv': 'cm⁻¹',
            'mz': 'm/z',
            'nm': 'nm'
        };
    }

    initializeOrganicTopics() {
        this.organicTopics = {
            hydrocarbons: {
                patterns: [
                    /hydrocarbon/i,
                    /alkane|alkene|alkyne/i,
                    /methane|ethane|propane|butane/i,
                    /cycloalkane|aromatic|benzene/i,
                    /saturated|unsaturated hydrocarbon/i
                ],
                handler: this.handleHydrocarbons.bind(this),
                name: 'Hydrocarbons',
                category: 'organic_structure',
                description: 'Organic compounds containing only carbon and hydrogen',
                difficulty: 'beginner',
                prerequisites: ['atomic_structure', 'chemical_bonding', 'molecular_geometry']
            },

            functional_groups: {
                patterns: [
                    /functional group/i,
                    /alcohol|aldehyde|ketone|carboxylic acid/i,
                    /amine|amide|ester|ether/i,
                    /halide|nitrile|sulfhydryl/i,
                    /hydroxyl|carbonyl|carboxyl/i
                ],
                handler: this.handleFunctionalGroups.bind(this),
                name: 'Functional Groups',
                category: 'organic_structure',
                description: 'Specific atoms or groups of atoms that give molecules characteristic chemical properties',
                difficulty: 'intermediate',
                prerequisites: ['hydrocarbons', 'electronegativity', 'polarity']
            },

            organic_reactions: {
                patterns: [
                    /organic reaction/i,
                    /substitution|addition|elimination/i,
                    /SN1|SN2|E1|E2/i,
                    /oxidation|reduction of organic/i,
                    /condensation|polymerization/i,
                    /mechanism|nucleophile|electrophile/i
                ],
                handler: this.handleOrganicReactions.bind(this),
                name: 'Organic Reaction Mechanisms',
                category: 'reactivity',
                description: 'Types of reactions organic compounds undergo and their step-by-step mechanisms',
                difficulty: 'advanced',
                prerequisites: ['functional_groups', 'thermodynamics', 'kinetics']
            },

            stereochemistry: {
                patterns: [
                    /stereochemistry|stereoisomer/i,
                    /chiral|chirality|enantiomer/i,
                    /R.*S.*configuration|optical.*isomer/i,
                    /cis.*trans|E.*Z.*isomer/i,
                    /diastereomer|meso compound/i,
                    /optical activity|plane.*polarized/i
                ],
                handler: this.handleStereochemistry.bind(this),
                name: 'Stereochemistry',
                category: 'organic_structure',
                description: '3D arrangement of atoms in molecules and its effect on properties and reactions',
                difficulty: 'advanced',
                prerequisites: ['hydrocarbons', 'functional_groups', 'molecular_geometry']
            },

            spectroscopy: {
                patterns: [
                    /spectroscopy|spectrometry/i,
                    /NMR|nuclear magnetic resonance/i,
                    /IR|infrared spectroscopy/i,
                    /mass spectrometry|fragmentation/i,
                    /UV.*visible|absorption spectrum/i,
                    /chemical shift|coupling constant/i
                ],
                handler: this.handleSpectroscopy.bind(this),
                name: 'Spectroscopic Analysis',
                category: 'analytical',
                description: 'Techniques for determining structure of organic compounds using electromagnetic radiation',
                difficulty: 'advanced',
                prerequisites: ['functional_groups', 'atomic_structure', 'electromagnetic_spectrum']
            },

            polymers: {
                patterns: [
                    /polymer|polymerization/i,
                    /addition polymer|condensation polymer/i,
                    /monomer|repeating unit/i,
                    /nylon|polyester|polyethylene|polystyrene/i,
                    /rubber|elastomer|thermoplastic/i
                ],
                handler: this.handlePolymers.bind(this),
                name: 'Polymers and Macromolecules',
                category: 'applications',
                description: 'Large molecules formed by repeating smaller units with diverse industrial applications',
                difficulty: 'intermediate',
                prerequisites: ['hydrocarbons', 'functional_groups', 'organic_reactions']
            }
        };
    }

    initializeOrganicLessons() {
        this.lessons = {
            hydrocarbons: {
                title: "Hydrocarbons: Structure, Nomenclature, and Properties",
                concepts: [
                    "Hydrocarbons contain only carbon and hydrogen atoms",
                    "Alkanes have only single bonds (saturated); general formula CₙH₂ₙ₊₂",
                    "Alkenes contain at least one C=C double bond; general formula CₙH₂ₙ",
                    "Alkynes contain at least one C≡C triple bond; general formula CₙH₂ₙ₋₂",
                    "Aromatic compounds contain delocalized π electrons (e.g., benzene ring)",
                    "IUPAC nomenclature provides systematic naming for all organic compounds"
                ],
                theory: "Hydrocarbons are the simplest organic compounds, consisting solely of carbon and hydrogen. Their chemistry is determined by the types of carbon-carbon bonds present. Carbon's ability to form four bonds and bond to itself in long chains and rings gives rise to an extraordinary diversity of organic structures. Understanding hydrocarbons is the foundation of all organic chemistry.",
                keyDefinitions: {
                    "Saturated Hydrocarbon": "Hydrocarbon with only C−C single bonds (alkane); contains maximum number of hydrogen atoms",
                    "Unsaturated Hydrocarbon": "Hydrocarbon with one or more C=C or C≡C bonds (alkene or alkyne)",
                    "Homologous Series": "Series of compounds differing by a −CH₂− unit, with similar chemical properties",
                    "Structural Isomers": "Compounds with same molecular formula but different connectivity",
                    "Conformational Isomers": "Same connectivity, different rotation about single bonds",
                    "Aromaticity": "Special stability of cyclic, conjugated π systems satisfying Hückel's rule (4n+2 electrons)",
                    "Hybridization": "Mixing of atomic orbitals: sp³ (single bonds), sp² (double bonds), sp (triple bonds)",
                    "Degree of Unsaturation": "Number of rings plus multiple bonds; formula: (2C + 2 + N − H − X)/2"
                },
                classification: {
                    byBondType: {
                        alkanes: "Only C−C single bonds; sp³ hybridization; tetrahedral geometry",
                        alkenes: "Contains C=C double bond; sp² hybridization; trigonal planar",
                        alkynes: "Contains C≡C triple bond; sp hybridization; linear",
                        arenes: "Contains benzene ring or aromatic system; sp² hybridization; planar"
                    },
                    byStructure: {
                        openChain: "Linear (straight-chain) or branched acyclic hydrocarbons",
                        cyclic: "Ring structures (cycloalkanes, cycloalkenes)",
                        aromatic: "Benzene and related delocalized π-electron systems",
                        polycyclic: "Multiple fused rings (naphthalene, anthracene)"
                    }
                },
                nomenclature: {
                    IUPACrules: [
                        "Find the longest carbon chain (parent chain)",
                        "Number from end closest to first branch or substituent",
                        "Name and number substituents alphabetically",
                        "Use prefixes: di-, tri-, tetra- for multiple identical substituents",
                        "Indicate double/triple bond position with lower locant"
                    ],
                    prefixes: {
                        1: "meth-", 2: "eth-", 3: "prop-", 4: "but-",
                        5: "pent-", 6: "hex-", 7: "hept-", 8: "oct-",
                        9: "non-", 10: "dec-"
                    },
                    suffixes: {
                        alkane: "-ane", alkene: "-ene", alkyne: "-yne",
                        cycloalkane: "cyclo- prefix + -ane"
                    }
                },
                physicalProperties: {
                    boilingPoint: "Increases with chain length (more surface area, stronger London dispersion forces)",
                    branching: "Branched isomers have lower bp than straight-chain isomers (less surface contact)",
                    solubility: "Insoluble in water (nonpolar); miscible with nonpolar solvents",
                    density: "All less dense than water (<1 g/cm³ for most)",
                    stateAtRoomTemp: {
                        gases: "C₁−C₄ alkanes",
                        liquids: "C₅−C₁₇ alkanes",
                        solids: "C₁₈+ alkanes"
                    }
                },
                applications: [
                    "Fossil fuels (natural gas, petroleum, coal) for energy",
                    "Petrochemicals as feedstocks for plastics, pharmaceuticals",
                    "Solvents in industry and laboratories",
                    "Benzene derivatives in pharmaceuticals, dyes, pesticides",
                    "Ethylene (ethene) for polyethylene plastic production"
                ]
            },

            functional_groups: {
                title: "Functional Groups: Classification and Properties",
                concepts: [
                    "Functional groups are specific structural units that determine chemical reactivity",
                    "The same functional group reacts similarly regardless of parent carbon chain",
                    "Polarity of functional groups determines intermolecular forces and physical properties",
                    "Multiple functional groups can exist in one molecule (multifunctional compounds)",
                    "Functional groups enable systematic prediction of organic reactions"
                ],
                theory: "Functional groups are collections of atoms that impart characteristic properties to organic molecules. They are the reactive sites in organic chemistry. Understanding functional groups is key to predicting how a molecule will react, its physical properties (bp, mp, solubility), and its spectroscopic features. Most drugs, natural products, and industrial chemicals are understood through their functional groups.",
                keyDefinitions: {
                    "Hydroxyl Group": "−OH group; present in alcohols and phenols; confers polarity and hydrogen bonding",
                    "Carbonyl Group": "C=O group; present in aldehydes, ketones, carboxylic acids, esters, amides",
                    "Carboxyl Group": "−COOH group; characteristic of carboxylic acids; acidic due to resonance stabilization of carboxylate anion",
                    "Amino Group": "−NH₂ group; present in amines; basic character, can act as nucleophile",
                    "Ester Linkage": "−COO− group formed from alcohol + carboxylic acid; found in fats, waxes, polyesters",
                    "Amide Bond": "−CONH− group formed from amine + carboxylic acid; found in proteins, nylon",
                    "Ether Linkage": "−O− bridge between two carbons; relatively unreactive; found in anesthetics",
                    "Thiol": "−SH group; sulfur analog of alcohol; important in proteins (disulfide bridges)"
                },
                majorFunctionalGroups: {
                    alcohols: {
                        structure: "R−OH",
                        classification: "Primary (1°), Secondary (2°), Tertiary (3°) based on C bearing OH",
                        properties: ["Hydrogen bonding → high bp", "Miscible with water (small alcohols)", "Weak acids (pKa ~16)"],
                        reactions: ["Oxidation (1° → aldehyde → acid; 2° → ketone)", "Dehydration (→ alkene or ether)", "Esterification (+ carboxylic acid)", "Substitution (OH → halide)"],
                        examples: ["Methanol (CH₃OH) - solvent, fuel", "Ethanol (C₂H₅OH) - beverages, antiseptic", "Glycerol - in lipids, cosmetics", "Cholesterol - steroid membrane component"]
                    },
                    aldehydes: {
                        structure: "RCHO (CHO always terminal)",
                        properties: ["Polar carbonyl", "Lower bp than equivalent alcohols", "Slightly soluble in water"],
                        reactions: ["Oxidation to carboxylic acid", "Reduction to primary alcohol", "Nucleophilic addition", "Aldol condensation", "Positive Tollens' and Fehling's tests"],
                        examples: ["Formaldehyde (HCHO) - preservative", "Acetaldehyde (CH₃CHO) - metabolite of ethanol", "Benzaldehyde - almond flavor"]
                    },
                    ketones: {
                        structure: "RCOR' (carbonyl flanked by 2 carbons)",
                        properties: ["Polar carbonyl", "Cannot be further oxidized easily", "Good solvents"],
                        reactions: ["Reduction to secondary alcohol", "Nucleophilic addition", "Aldol condensation"],
                        examples: ["Acetone (propanone) - nail polish remover, solvent", "Butanone (MEK) - industrial solvent"]
                    },
                    carboxylicAcids: {
                        structure: "RCOOH",
                        properties: ["Acidic (pKa 4−5)", "Strong H-bonding → very high bp", "Soluble in water (small acids)", "Exist as dimers in nonpolar solvents"],
                        reactions: ["Deprotonation to carboxylate", "Esterification with alcohols", "Amide formation", "Reduction to aldehyde/alcohol", "Decarboxylation (β-keto acids)"],
                        examples: ["Acetic acid - vinegar", "Citric acid - fruits", "Fatty acids - lipids", "Amino acids - proteins"]
                    },
                    amines: {
                        structure: "RNH₂ (1°), R₂NH (2°), R₃N (3°)",
                        properties: ["Basic (pKa of conjugate acid ~10)", "H-bonding (1° and 2°)", "Characteristic 'fishy' odor", "Soluble in water"],
                        reactions: ["Protonation (form ammonium salts)", "Alkylation", "Acylation (form amides)", "Reaction with nitrous acid"],
                        examples: ["Methylamine - industrial intermediate", "Aniline - dye manufacture", "Amino acids - building blocks of proteins", "Dopamine, serotonin - neurotransmitters"]
                    },
                    esters: {
                        structure: "RCOOR'",
                        properties: ["Pleasant fruity odors", "Lower bp than equivalent carboxylic acids", "Water insoluble (large esters)"],
                        reactions: ["Hydrolysis (acid or base catalyzed)", "Transesterification", "Reduction to alcohols"],
                        examples: ["Ethyl acetate - solvent, nail polish remover", "Fats and oils - triglycerides", "Aspirin - acetylsalicylic acid", "Polyesters (PET) - fibers, bottles"]
                    },
                    amides: {
                        structure: "RCONH₂ (1°), RCONHR' (2°), RCONR'R'' (3°)",
                        properties: ["High bp due to H-bonding", "Less basic than amines (lone pair delocalized)", "Highly stable linkage"],
                        reactions: ["Hydrolysis (acid or base)", "Reduction to amines"],
                        examples: ["Acetamide - simplest amide", "Nylon 6,6 - amide bonds", "Peptide bonds in proteins"]
                    }
                },
                reactivityTrends: {
                    acidStrength: "Carboxylic acid > phenol > water > alcohol > alkyne > alkene",
                    baseStrength: "Amine > amide (weak base) > carboxylate (very weak base)",
                    nucleophilicity: "Affected by charge, electronegativity, polarizability, steric hindrance",
                    electrophilicity: "Carbonyl carbon electrophilicity: acid chloride > anhydride > aldehyde > ketone > ester > amide"
                },
                applications: [
                    "Pharmaceutical drug design (targeting specific receptors via functional groups)",
                    "Flavor and fragrance industry (esters, aldehydes)",
                    "Polymer synthesis (ester and amide bond forming reactions)",
                    "Agricultural chemicals (herbicides, insecticides)",
                    "Material science (functional group chemistry in smart materials)"
                ]
            },

            organic_reactions: {
                title: "Organic Reaction Mechanisms: Types and Pathways",
                concepts: [
                    "Organic reactions proceed through distinct mechanisms involving bond breaking and forming",
                    "Nucleophiles donate electrons; electrophiles accept electrons",
                    "SN2 reactions are concerted, bimolecular, stereospecific (inversion)",
                    "SN1 reactions proceed via carbocation intermediates, racemization occurs",
                    "Elimination reactions compete with substitution reactions",
                    "Reaction energy diagrams show activation energy and thermodynamics"
                ],
                theory: "Understanding organic reaction mechanisms allows chemists to predict products, design syntheses, and understand biological processes. Mechanisms describe the step-by-step pathway of bond breaking and forming, including identification of intermediates, transition states, and energy profiles.",
                reactionTypes: {
                    substitution: {
                        SN2: {
                            description: "Bimolecular nucleophilic substitution",
                            mechanism: "Concerted: nucleophile attacks as leaving group departs (backside attack)",
                            stereochemistry: "Inversion of configuration (Walden inversion)",
                            rateEquation: "Rate = k[substrate][nucleophile]",
                            favored: "Primary substrates, strong nucleophiles, polar aprotic solvents",
                            example: "CH₃Br + OH⁻ → CH₃OH + Br⁻"
                        },
                        SN1: {
                            description: "Unimolecular nucleophilic substitution",
                            mechanism: "Step 1: ionization to carbocation; Step 2: nucleophile attacks",
                            stereochemistry: "Racemization (carbocation planar, attacked from both faces)",
                            rateEquation: "Rate = k[substrate] (carbocation formation is rate-limiting step)",
                            favored: "Tertiary (or secondary) substrates, weak nucleophiles, polar protic solvents",
                            example: "(CH₃)₃CBr + H₂O → (CH₃)₃COH + HBr",
                            carbocationStability: "3° > 2° > 1° > methyl"
                        }
                    },
                    elimination: {
                        E2: {
                            description: "Bimolecular elimination",
                            mechanism: "Concerted: base removes proton as leaving group departs and double bond forms",
                            stereochemistry: "Anti-periplanar geometry required (anti-elimination)",
                            rateEquation: "Rate = k[substrate][base]",
                            favored: "Strong bulky bases, higher temperatures, 2° and 3° substrates",
                            zaitsevRule: "Major product is more substituted alkene (more stable)"
                        },
                        E1: {
                            description: "Unimolecular elimination",
                            mechanism: "Step 1: ionization to carbocation; Step 2: base removes proton",
                            rateEquation: "Rate = k[substrate]",
                            favored: "Tertiary substrates, weak bases, high temperature"
                        }
                    },
                    addition: {
                        electrophilicAddition: {
                            substrate: "Alkenes and alkynes",
                            mechanism: "Electrophile adds first forming carbocation, then nucleophile adds",
                            markovnikov: "H adds to carbon with more H (electrophile to less substituted carbon)",
                            antiMarkovnikov: "HBr with peroxides (radical mechanism, anti-Markovnikov)",
                            examples: [
                                "HBr addition to propene → 2-bromopropane (Markovnikov)",
                                "Br₂ addition → anti addition (trans product via bromonium ion)",
                                "H₂O addition (acid-catalyzed) → alcohol"
                            ]
                        },
                        nucleophilicAddition: {
                            substrate: "Aldehydes and ketones (carbonyl compounds)",
                            mechanism: "Nucleophile attacks electrophilic carbonyl carbon",
                            examples: [
                                "Reduction with NaBH₄ or LiAlH₄ → alcohol",
                                "Grignard reaction → alcohol",
                                "HCN addition → cyanohydrin",
                                "Hydrate formation with water"
                            ],
                            reactivity: "Aldehydes > ketones (steric and electronic effects)"
                        },
                        radicalAddition: {
                            mechanism: "Initiation (radical formation), propagation, termination",
                            example: "HBr + alkene (peroxide) → anti-Markovnikov product",
                            halogenation: "CH₄ + Cl₂ (hν) → CH₃Cl + HCl (chain reaction)"
                        }
                    },
                    oxidationReduction: {
                        oxidationOfAlcohols: {
                            primary: "1° alcohol → aldehyde (PCC) or → carboxylic acid (KMnO₄, H₂Cr₂O₇)",
                            secondary: "2° alcohol → ketone (all common oxidants)",
                            tertiary: "3° alcohol → no simple oxidation (no H on carbon bearing OH)"
                        },
                        reductionOfCarbonyls: {
                            aldehyde: "→ primary alcohol (NaBH₄ or LiAlH₄)",
                            ketone: "→ secondary alcohol (NaBH₄ or LiAlH₄)",
                            carboxylicAcid: "→ primary alcohol (LiAlH₄ only)",
                            alkene: "→ alkane (H₂, metal catalyst)"
                        }
                    },
                    condensation: {
                        esterification: "Carboxylic acid + alcohol ⇌ ester + H₂O (acid-catalyzed)",
                        amideFormation: "Carboxylic acid + amine → amide + H₂O",
                        aldolCondensation: "Two carbonyls → β-hydroxy carbonyl → α,β-unsaturated carbonyl",
                        polymerization: "Many monomers → polymer via condensation with small molecule loss"
                    }
                },
                applications: [
                    "Synthesis of pharmaceuticals (drug synthesis routes)",
                    "Polymer production (condensation and addition polymerization)",
                    "Food chemistry (Maillard reaction, esterification for flavors)",
                    "Understanding metabolic pathways (biochemical reactions follow organic mechanisms)",
                    "Green chemistry (catalytic reactions, atom economy)"
                ]
            },

            stereochemistry: {
                title: "Stereochemistry: 3D Structure and Chirality",
                concepts: [
                    "Stereoisomers have the same connectivity but different spatial arrangement of atoms",
                    "Chiral molecules are non-superimposable on their mirror images",
                    "Enantiomers are mirror images; they rotate plane-polarized light equally but in opposite directions",
                    "Diastereomers are stereoisomers that are not mirror images; they differ in all physical properties",
                    "The R/S system assigns absolute configuration using Cahn-Ingold-Prelog (CIP) rules",
                    "E/Z designation describes geometric isomerism in alkenes"
                ],
                theory: "Stereochemistry profoundly affects the biological activity of molecules. Many drugs are chiral, and often only one enantiomer is pharmacologically active while the other may be inactive or even harmful. Nature almost exclusively uses one stereoisomer of chiral molecules (L-amino acids, D-sugars). Understanding stereochemistry is essential for drug design and understanding biochemistry.",
                keyDefinitions: {
                    "Chirality": "Property of a molecule that is non-superimposable on its mirror image; like left and right hands",
                    "Stereocentre (Chiral Centre)": "Atom (usually C) bearing four different groups; sp³ carbon bonded to 4 different substituents",
                    "Enantiomers": "Pair of non-superimposable mirror images; identical physical properties except optical rotation",
                    "Diastereomers": "Stereoisomers that are NOT mirror images; different physical and chemical properties",
                    "Meso Compound": "Achiral molecule with stereocentres (internal plane of symmetry cancels optical activity)",
                    "Racemic Mixture": "50:50 mixture of enantiomers; optically inactive (rotations cancel)",
                    "Optical Activity": "Ability to rotate plane-polarized light; (+) or dextrorotatory; (−) or levorotatory",
                    "Specific Rotation [α]": "Characteristic rotation of a pure enantiomer at defined concentration and temperature"
                },
                CIPRules: {
                    purpose: "Assign R or S configuration to each stereocentre",
                    steps: [
                        "Number the four groups attached to stereocentre by decreasing atomic number (1=highest priority, 4=lowest)",
                        "If tie at first atom, compare atoms attached to those atoms (branch out)",
                        "Orient molecule so lowest priority group (4) points away from viewer",
                        "Trace path from 1→2→3",
                        "Clockwise = R (rectus); Counter-clockwise = S (sinister)"
                    ],
                    EZRules: {
                        purpose: "Describe geometric isomerism in alkenes",
                        method: "Apply CIP priorities to substituents on each doubly-bonded carbon",
                        E: "Higher priority groups on opposite sides (German: entgegen = opposite)",
                        Z: "Higher priority groups on same side (German: zusammen = together)"
                    }
                },
                typesOfStereoisomers: {
                    configurationalIsomers: {
                        enantiomers: "Mirror images at all stereocentres",
                        diastereomers: "Different configuration at one or more (but not all) stereocentres",
                        geometric: "Restricted rotation about double bond or ring (cis/trans or E/Z)"
                    },
                    conformationalIsomers: {
                        description: "Same connectivity and configuration; differ by rotation about single bonds",
                        examples: "Newman projections: staggered (anti, gauche) vs eclipsed",
                        energy: "Anti conformation most stable (minimal steric strain)"
                    }
                },
                pharmacologicalImportance: {
                    examples: [
                        "Thalidomide: R enantiomer (morning sickness relief), S enantiomer (teratogenic)",
                        "Ibuprofen: S-(+) form is active; R-(-) form is inactive but converted in body",
                        "L-DOPA: Used for Parkinson's disease; D-DOPA is ineffective",
                        "Carvone: R form = spearmint; S form = caraway smell"
                    ],
                    principle: "Enzymes and receptors are chiral; they interact selectively with one enantiomer"
                },
                applications: [
                    "Chiral drug synthesis and resolution",
                    "Asymmetric catalysis (Nobel Prize 2001)",
                    "Biological systems (enzyme stereospecificity)",
                    "Food science (natural vs. synthetic flavors)",
                    "Forensic chemistry (chiral analysis)"
                ]
            },

            spectroscopy: {
                title: "Spectroscopic Methods for Structure Determination",
                concepts: [
                    "Spectroscopy uses interaction of matter with electromagnetic radiation to determine structure",
                    "IR spectroscopy identifies functional groups via molecular vibrations",
                    "NMR spectroscopy reveals carbon framework and hydrogen environments",
                    "Mass spectrometry gives molecular mass and fragmentation pattern",
                    "UV-Vis spectroscopy detects conjugated π systems and aromatic compounds",
                    "Combined spectral data allows complete structure determination"
                ],
                theory: "Modern organic chemistry relies heavily on spectroscopic techniques to determine the structures of compounds without chemical degradation. Each technique provides complementary information: IR tells us what functional groups are present; NMR reveals the carbon skeleton and hydrogen connectivity; MS gives molecular formula and mass; UV-Vis identifies conjugated chromophores.",
                techniques: {
                    IRSpectroscopy: {
                        principle: "Molecules absorb IR radiation to undergo vibrational transitions",
                        range: "400−4000 cm⁻¹",
                        keyAbsorptions: {
                            "O−H (alcohol)": "3200−3550 cm⁻¹ (broad)",
                            "O−H (carboxylic acid)": "2500−3300 cm⁻¹ (very broad)",
                            "N−H": "3300−3500 cm⁻¹",
                            "C−H (alkane)": "2850−2960 cm⁻¹",
                            "C≡N or C≡C": "2100−2260 cm⁻¹",
                            "C=O (carbonyl)": "1630−1850 cm⁻¹ (strong, sharp)",
                            "C=C (alkene)": "1620−1680 cm⁻¹",
                            "C−O (ether/ester)": "1000−1300 cm⁻¹",
                            "C−H (alkene)": "650−1000 cm⁻¹ (out-of-plane bending)"
                        },
                        fingerprint: "Region below 1500 cm⁻¹ is complex but unique to each compound",
                        uses: "Identify functional groups, confirm identity by comparison"
                    },
                    NMRSpectroscopy: {
                        principle: "Nuclei with spin (¹H, ¹³C) absorb radiofrequency radiation in magnetic field",
                        chemicalShift: {
                            description: "Position of NMR signal (in ppm from TMS reference)",
                            H_ranges: {
                                "TMS reference": "0 ppm",
                                "Alkyl C−H": "0.5−1.8 ppm",
                                "Allylic C−H": "1.6−2.6 ppm",
                                "Adjacent to halogen": "2.5−4.0 ppm",
                                "O−CH (ether/ester)": "3.3−4.5 ppm",
                                "Alkene =C−H": "4.5−6.5 ppm",
                                "Aromatic Ar−H": "6.5−8.5 ppm",
                                "Aldehyde CHO": "9.4−10.0 ppm",
                                "Carboxylic COOH": "10−12 ppm"
                            }
                        },
                        splitting: {
                            principle: "Signal split by adjacent non-equivalent H atoms (n+1 rule)",
                            patterns: "Doublet (1 neighbor), triplet (2 neighbors), quartet (3 neighbors)",
                            couplingConstant: "J value (Hz) measures magnitude of splitting"
                        },
                        integration: "Peak area proportional to number of equivalent protons"
                    },
                    massSpectrometry: {
                        principle: "Ionize molecule (M), accelerate ions, separate by m/z ratio",
                        keyFeatures: {
                            molecularIon: "M⁺ peak gives molecular weight",
                            basePeak: "Most abundant fragment (100% relative intensity)",
                            fragmentationPatterns: [
                                "Alpha cleavage (next to C=O, N, O)",
                                "McLafferty rearrangement (γ-H present)",
                                "Loss of common groups: CH₃ (15), OH (17), Cl (35/37)"
                            ]
                        },
                        isotopePeaks: "M+1, M+2 peaks reveal molecular formula (e.g., Cl isotope pattern)",
                        highResolution: "Exact mass measurement allows molecular formula determination"
                    },
                    UVVisible: {
                        principle: "π→π* and n→π* electronic transitions",
                        chromophore: "Structural unit responsible for UV absorption",
                        conjugation: "More conjugation → longer wavelength absorption (bathochromic shift)",
                        examples: {
                            alkene: "~170 nm (below UV range usually)",
                            conjugatedDiene: "~217 nm",
                            benzene: "~254 nm",
                            αβUnsaturatedCarbonyl: "~215−250 nm"
                        }
                    }
                },
                structureElucidation: {
                    approach: [
                        "Step 1: Determine molecular formula from MS (molecular ion, high-res MS)",
                        "Step 2: Calculate degree of unsaturation (DoU = (2C+2+N-H-X)/2)",
                        "Step 3: Identify functional groups from IR",
                        "Step 4: Use ¹H NMR for connectivity and environment of H atoms",
                        "Step 5: Use ¹³C NMR for carbon framework",
                        "Step 6: Propose structure consistent with all data",
                        "Step 7: Confirm with additional experiments if needed"
                    ]
                },
                applications: [
                    "Drug purity testing and quality control",
                    "Environmental analysis of pollutants",
                    "Forensic chemistry (drug identification)",
                    "Natural product structure elucidation",
                    "Food adulteration detection"
                ]
            },

            polymers: {
                title: "Polymers: Addition and Condensation Polymerization",
                concepts: [
                    "Polymers are large molecules (macromolecules) made of repeating monomer units",
                    "Addition polymerization involves alkene monomers; no byproduct formed",
                    "Condensation polymerization involves bifunctional monomers; small molecule (H₂O) lost",
                    "Thermoplastics soften on heating; thermosets are irreversibly crosslinked",
                    "Natural polymers include cellulose, starch, proteins, DNA; synthetic polymers include nylon, PET, polyethylene"
                ],
                theory: "Polymers are among the most important materials in modern life. Understanding their synthesis, structure, and properties allows chemists to design materials with specific characteristics. The two main polymerization mechanisms—addition and condensation—reflect the fundamental organic reactions of alkenes and bifunctional compounds.",
                keyDefinitions: {
                    "Monomer": "Small repeating unit that joins to form a polymer",
                    "Degree of Polymerization": "Number of monomer units in a polymer chain (n)",
                    "Addition Polymer": "Formed by repeated addition of alkene monomers; same empirical formula as monomer",
                    "Condensation Polymer": "Formed by reaction between bifunctional monomers with loss of small molecule",
                    "Thermoplastic": "Polymer that softens on heating and hardens on cooling (recyclable)",
                    "Thermoset": "Polymer with extensive crosslinking; cannot be remelted (not recyclable)",
                    "Average Molar Mass": "Polymers have distribution of chain lengths; characterized by Mₙ (number-average) and Mw (weight-average)",
                    "Tacticity": "Stereochemical arrangement of substituents along polymer backbone (isotactic, syndiotactic, atactic)"
                },
                additionPolymerization: {
                    mechanism: {
                        radical: "Initiation (generate radical) → Propagation (add monomers) → Termination",
                        cationic: "Lewis acid generates carbocation; chain grows by addition to alkene",
                        anionic: "Base generates carbanion; living polymerization possible",
                        coordination: "Ziegler-Natta catalysts; stereoregular polymers"
                    },
                    examples: [
                        {
                            monomer: "Ethene (CH₂=CH₂)",
                            polymer: "Polyethylene (PE)",
                            uses: "Plastic bags, bottles, pipes",
                            types: "LDPE (branched, flexible) and HDPE (linear, rigid)"
                        },
                        {
                            monomer: "Propene (CH₃CH=CH₂)",
                            polymer: "Polypropylene (PP)",
                            uses: "Containers, fibers, car parts",
                            note: "Tacticity affects properties (isotactic = crystalline, high mp)"
                        },
                        {
                            monomer: "Styrene (PhCH=CH₂)",
                            polymer: "Polystyrene (PS)",
                            uses: "Packaging, disposable cups, insulation (expanded PS = Styrofoam)"
                        },
                        {
                            monomer: "Tetrafluoroethene (CF₂=CF₂)",
                            polymer: "PTFE (Teflon®)",
                            uses: "Non-stick coatings, bearings, electrical insulation"
                        },
                        {
                            monomer: "Vinyl chloride (CH₂=CHCl)",
                            polymer: "PVC (polyvinyl chloride)",
                            uses: "Pipes, flooring, electrical insulation"
                        }
                    ]
                },
                condensationPolymerization: {
                    mechanism: "Bifunctional monomers react; small molecule (H₂O, HCl, etc.) eliminated each step",
                    stepGrowth: "Chain length grows slowly; high conversion needed for high MW",
                    examples: [
                        {
                            name: "Nylon 6,6",
                            monomers: "Hexanedioic acid (adipic acid) + hexane-1,6-diamine",
                            linkage: "Amide bond (−CONH−)",
                            byproduct: "H₂O",
                            uses: "Fibers (stockings, ropes), engineering plastics",
                            analogy: "Peptide bonds in proteins; amino acid polymerization"
                        },
                        {
                            name: "Polyester (PET)",
                            monomers: "Terephthalic acid + ethylene glycol",
                            linkage: "Ester bond (−COO−)",
                            byproduct: "H₂O",
                            uses: "Drink bottles, polyester fibers (clothing)"
                        },
                        {
                            name: "Polycarbonate",
                            monomers: "Bisphenol A + phosgene",
                            linkage: "Carbonate group (−OCOO−)",
                            uses: "CDs, safety glasses, bulletproof windows"
                        }
                    ]
                },
                naturalVsSynthetic: {
                    natural: {
                        cellulose: "β-1,4-glycosidic bonds; structural polymer in plants",
                        starch: "α-1,4-glycosidic bonds; energy storage",
                        proteins: "Peptide bonds; amino acid polymers",
                        naturalRubber: "cis-polyisoprene from Hevea brasiliensis"
                    },
                    synthetic: "Designed for specific properties not found in nature"
                },
                recyclingAndSustainability: {
                    codes: "Resin identification codes (1=PET, 2=HDPE, 3=PVC, 4=LDPE, 5=PP, 6=PS, 7=other)",
                    biodegradable: "Polylactic acid (PLA), polyhydroxyalkanoates (PHA)",
                    green: "Use renewable feedstocks, design for recyclability"
                },
                applications: [
                    "Packaging materials (reducing food waste)",
                    "Medical devices (biocompatible polymers)",
                    "Lightweight composites (aerospace, automotive)",
                    "Electronic materials (conducting polymers, photovoltaics)",
                    "Bioplastics (reducing petroleum dependence)"
                ]
            }
        };
    }

    initializeOrganicExperiments() {
        this.organicExperiments = {

            // ========================================
            // EXPERIMENT 1: DISTILLATION
            // ========================================

            distillation_separation: {
                name: "Simple and Fractional Distillation of Organic Mixtures",
                relatedTopics: ['hydrocarbons', 'functional_groups'],
                category: 'separation_techniques',
                historicalBackground: {
                    scientist: "Early alchemists; refined by Jabir ibn Hayyan (~800 AD)",
                    modernDevelopment: "Industrial fractional distillation developed in 19th century for petroleum refining",
                    significance: "Fundamental technique for purification and separation of organic liquids",
                    industrialContext: "Petroleum refining separates crude oil into fractions (gasoline, diesel, kerosene) by fractional distillation"
                },
                labExperiment: {
                    title: "Distillation: Separation of Ethanol-Water Mixture",
                    hypothesis: "Ethanol (bp 78.4°C) can be separated from water (bp 100°C) by simple distillation due to large difference in boiling points",
                    purpose: "Demonstrate how boiling point differences allow separation of miscible liquid mixtures",
                    background: {
                        principle: "Distillation separates liquids based on differences in volatility (boiling point). The more volatile component (lower bp) concentrates in the vapor phase; collecting and condensing vapors at different temperatures separates the components.",
                        raoultLaw: "In ideal mixture, partial pressure of each component = mole fraction × vapor pressure of pure component",
                        simpleVsFractional: "Simple distillation: large bp difference (>25°C). Fractional: smaller bp differences, column allows multiple vaporization-condensation cycles"
                    },
                    variables: {
                        independent: "Temperature at which distillate is collected",
                        dependent: "Volume and composition of each fraction collected",
                        controlled: ["Heating rate", "Starting mixture composition", "Condenser temperature"]
                    },
                    materials: [
                        "Ethanol-water mixture (50% v/v)",
                        "Round-bottom flask (250 mL)",
                        "Distillation head and thermometer",
                        "Condenser (Liebig condenser)",
                        "Receiving flask",
                        "Heating mantle or water bath",
                        "Fractional distillation column (optional)",
                        "Refractometer or alcoholometer (to measure composition)",
                        "Clamp stands and retort stand",
                        "Boiling chips (anti-bumping granules)"
                    ],
                    safetyPrecautions: [
                        "Ethanol is flammable - no open flames; use heating mantle or steam bath",
                        "Ensure apparatus is not sealed (pressure build-up hazard)",
                        "Hot glassware looks identical to cold - handle with care",
                        "Run cooling water through condenser before heating",
                        "Add boiling chips before heating (not to hot liquid)"
                    ],
                    procedure: [
                        "Set up distillation apparatus: flask → distillation head → thermometer → condenser → receiving flask",
                        "Ensure thermometer bulb is at side arm of distillation head (not in liquid)",
                        "Add 100 mL of ethanol-water mixture and boiling chips to flask",
                        "Start cooling water flowing through condenser",
                        "Begin gentle heating",
                        "Record temperature when first drops of distillate appear",
                        "Collect fractions at different temperature ranges:",
                        "  Fraction 1: below 82°C (ethanol-rich)",
                        "  Fraction 2: 82−95°C (mixed)",
                        "  Fraction 3: 95−100°C (water-rich)",
                        "Record volume of each fraction",
                        "Measure refractive index or density of each fraction to estimate composition",
                        "For fractional distillation: repeat with Vigreux or packed column; compare fractions"
                    ],
                    expectedResults: {
                        simpleDist: "Gradual rise in temperature; fractions contain varying mixtures of ethanol and water",
                        fractionalDist: "Temperature stays near ethanol bp longer; sharper separation; first fraction contains more ethanol",
                        distillationCurve: "Temperature vs. volume graph shows plateau near bp of each component"
                    },
                    dataTable: [
                        ["Fraction", "Temp Range (°C)", "Volume (mL)", "Refractive Index", "Estimated % Ethanol"],
                        ["1", "78−82", "~25", "1.361", "~90%"],
                        ["2", "82−95", "~30", "1.365", "~60%"],
                        ["3", "95−100", "~35", "1.370", "~20%"],
                        ["Residue", ">100", "~10", "1.333", "~0%"]
                    ],
                    analysis: [
                        "Simple distillation cannot completely separate ethanol from water (azeotrope at 95.6% EtOH)",
                        "Fractional distillation gives sharper separation",
                        "Distillation curve (T vs V) shows fraction composition",
                        "Azeotrope: constant-boiling mixture that cannot be separated by distillation"
                    ],
                    conclusions: [
                        "Boiling point differences allow separation of volatile organic liquids",
                        "Fractional distillation is more effective for close-boiling mixtures",
                        "Ethanol-water forms an azeotrope; absolute ethanol requires other methods (molecular sieves, azeotropic distillation)",
                        "Principle underlies industrial petroleum fractionation"
                    ],
                    realWorldApplications: [
                        "Petroleum refining: separation of crude oil fractions",
                        "Beverage alcohol production (whisky, brandy stills)",
                        "Pharmaceutical purification of solvent-based products",
                        "Production of industrial solvents",
                        "Perfume industry (distillation of essential oils)"
                    ],
                    extensions: [
                        "Plot distillation curve (temperature vs volume collected)",
                        "Compare efficiency of simple vs fractional distillation",
                        "Research industrial fractional distillation towers for petroleum",
                        "Investigate steam distillation of essential oils (fragrance extraction)"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 2: HALOGENATION OF ALKANES
            // ========================================

            halogenation_alkanes: {
                name: "Free Radical Halogenation of Alkanes (Photochlorination)",
                relatedTopics: ['hydrocarbons', 'organic_reactions'],
                category: 'reaction_mechanisms',
                historicalBackground: {
                    scientist: "Gay-Lussac and Thenard (early 19th century); mechanism elucidated in 20th century",
                    significance: "One of few reactions of alkanes; demonstrates radical chain mechanism",
                    industrialImportance: "Halogenated hydrocarbons (chloromethanes) are important industrial solvents and chemical feedstocks"
                },
                labExperiment: {
                    title: "Photochlorination of Cyclohexane (or Hexane)",
                    hypothesis: "Alkanes react with chlorine under UV light via a free radical chain mechanism to produce monochloroalkane products",
                    purpose: "Demonstrate free radical substitution reaction of alkanes and the role of UV light in initiating radical reactions",
                    background: {
                        mechanism: "Free radical chain reaction: Initiation (Cl₂ → 2Cl•, UV light), Propagation (Cl• + RH → HCl + R•; R• + Cl₂ → RCl + Cl•), Termination (radical-radical combination)",
                        selectivity: "Chlorination less selective than bromination; tertiary H reacts faster than secondary than primary (stability of radical intermediate)",
                        industrialNote: "Bromination is more selective; used when specific product needed"
                    },
                    materials: [
                        "Cyclohexane (or hexane)",
                        "Chlorine gas (generated from KMnO₄ + HCl, or dilute in CCl₄)",
                        "UV lamp or bright sunlight",
                        "Test tubes (sealed)",
                        "Litmus paper or pH indicator",
                        "Bromine water (for comparison)",
                        "Safety screen",
                        "Fume hood (essential)"
                    ],
                    safetyPrecautions: [
                        "CRITICAL: Chlorine gas is toxic - work in fume hood only",
                        "UV light is harmful to eyes - use protective goggles",
                        "Halogenated organic compounds can be toxic - minimize exposure",
                        "Keep organic solvents away from UV lamps (flammability)",
                        "Dispose of halogenated waste in appropriate chemical waste containers"
                    ],
                    procedure: [
                        "SAFER ALTERNATIVE: Observe pre-prepared tubes or use bromine/hexane sunlight reaction:",
                        "Add 2 mL hexane to a test tube",
                        "Add 10 drops of bromine solution (in CCl₄ or as Br₂ water)",
                        "Seal tube and split into two portions",
                        "Expose one tube to bright light (UV lamp or sunlight)",
                        "Keep other tube in dark (control)",
                        "Observe color changes over 30 minutes",
                        "Add damp litmus paper to tube mouth to detect HBr produced",
                        "Record observations",
                        "",
                        "OBSERVATIONS TO MAKE:",
                        "Color change of bromine (orange/brown → colorless = reaction occurred)",
                        "Litmus paper turns red (HBr acid produced in light reaction)",
                        "Dark control should remain orange (no reaction without light)",
                        "Alkene control: bromine decolorizes in dark (addition, not substitution)"
                    ],
                    expectedResults: {
                        lightTube: "Bromine color fades; damp litmus turns red (HBr produced)",
                        darkTube: "Bromine color retained (no significant reaction)",
                        distinction: "Radical substitution requires light; alkene addition is spontaneous in dark"
                    },
                    reactionEquation: {
                        initiation: "Br₂ + hν → 2Br•",
                        propagation1: "Br• + C₆H₁₄ → HBr + C₆H₁₃•",
                        propagation2: "C₆H₁₃• + Br₂ → C₆H₁₃Br + Br•",
                        termination: "Br• + Br• → Br₂ (or R• + Br• → RBr)"
                    },
                    analysis: [
                        "Light initiates reaction by homolytic fission of Br₂ → 2Br•",
                        "Each propagation step regenerates the radical (chain reaction)",
                        "HBr produced is detected by litmus",
                        "Dark tube: thermal energy insufficient to cause significant homolysis",
                        "Alkene distinction: alkene reacts with Br₂ in dark (electrophilic addition, not radical)"
                    ],
                    conclusions: [
                        "Alkanes undergo free radical substitution with halogens under UV light",
                        "UV light provides energy for initiation step (homolytic bond cleavage)",
                        "Chain mechanism amplifies product yield from few initial radicals",
                        "HBr (HCl) is a byproduct of halogenation",
                        "Test distinguishes alkanes (light required) from alkenes (dark reaction with Br₂)"
                    ],
                    realWorldApplications: [
                        "Production of CH₃Cl, CH₂Cl₂ (dichloromethane) as solvents",
                        "Manufacture of fluorocarbon refrigerants",
                        "PVC production (vinyl chloride monomer)",
                        "Pharmaceutical synthesis (halogen substituents in drugs)",
                        "Understanding stratospheric ozone depletion (CFCs - halogenated radicals)"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 3: RECRYSTALLIZATION
            // ========================================

            recrystallization_purification: {
                name: "Recrystallization: Purification of Organic Solids",
                relatedTopics: ['functional_groups', 'organic_reactions'],
                category: 'purification_techniques',
                historicalBackground: {
                    scientist: "Used since medieval times for purifying salts and minerals",
                    modernOrganic: "Essential technique in organic chemistry since 19th century",
                    significance: "Standard method for purifying organic solid compounds; fundamental laboratory skill"
                },
                labExperiment: {
                    title: "Recrystallization of Acetanilide (or Aspirin)",
                    hypothesis: "An impure organic solid can be purified by dissolving in hot solvent and allowing slow crystallization, since the target compound and impurities have different solubilities",
                    purpose: "Learn the principle and practice of recrystallization as a purification technique; determine melting point before and after purification",
                    background: {
                        principle: "Most organic solids are more soluble in hot solvents than cold. Dissolving in minimum hot solvent then cooling causes crystallization of the main compound (impurities remain in solution or are removed by filtration as insoluble matter). Correct solvent choice is critical.",
                        solventChoice: "Ideal solvent: compound very soluble hot, insoluble cold; impurities either very soluble (stay in filtrate) or insoluble (filtered off while hot); low boiling; non-reactive",
                        meltingPoint: "Pure compounds have sharp, reproducible melting points; impure samples have depressed and broadened melting point ranges (melting point depression)"
                    },
                    materials: [
                        "Impure acetanilide (or crude aspirin from synthesis)",
                        "Distilled water (recrystallization solvent for acetanilide)",
                        "Activated charcoal (decolorizing carbon, if colored impurities)",
                        "Buchner funnel and filter flask",
                        "Hot water bath or hot plate",
                        "Beaker (100 mL)",
                        "Glass stirring rod",
                        "Ice bath",
                        "Melting point apparatus (or capillary tube + thermometer)",
                        "Analytical balance",
                        "Vacuum pump or water aspirator"
                    ],
                    procedure: [
                        "STEP 1 - DISSOLVE: Weigh ~2 g of impure acetanilide",
                        "Add to beaker and dissolve in minimum hot water (heat to 90°C, add water dropwise)",
                        "Do not add excess solvent",
                        "",
                        "STEP 2 - DECOLORIZE (if needed): If solution is colored, add small amount of activated charcoal",
                        "Stir and heat 5 minutes (charcoal adsorbs colored impurities)",
                        "",
                        "STEP 3 - HOT FILTRATION: Filter hot solution through fluted filter paper in a funnel",
                        "Pre-heat funnel with hot water to prevent premature crystallization",
                        "This removes insoluble impurities and activated charcoal",
                        "",
                        "STEP 4 - CRYSTALLIZATION: Allow filtrate to cool slowly to room temperature",
                        "Then cool further in ice bath",
                        "Do not stir or disturb (slow cooling → larger, purer crystals)",
                        "",
                        "STEP 5 - COLLECT CRYSTALS: Filter using Buchner funnel and vacuum filtration",
                        "Wash crystals with small amount of ice-cold water",
                        "Allow to air dry or dry in oven at 60°C",
                        "",
                        "STEP 6 - EVALUATE: Weigh crystals (calculate % recovery)",
                        "Measure melting point of crude and recrystallized samples",
                        "Literature mp of acetanilide: 114−116°C"
                    ],
                    expectedResults: {
                        crudeMP: "Impure: melts at 108−113°C (broad, depressed range)",
                        purifiedMP: "Pure: melts at 114−116°C (sharp, narrow range)",
                        recovery: "Typically 60−80% recovery (some lost in filtrate)",
                        appearance: "White crystalline solid (colorless after charcoal treatment)"
                    },
                    dataTable: [
                        ["Sample", "Appearance", "Melting Point (°C)", "Mass (g)", "% Recovery"],
                        ["Crude (impure)", "Yellowish solid", "108−113", "2.00", "100%"],
                        ["Recrystallized", "White crystals", "114−116", "1.40", "70%"]
                    ],
                    analysis: [
                        "Melting point range narrows and approaches literature value after purification",
                        "Lower mp and broad range indicates presence of impurities (melting point depression)",
                        "% Recovery < 100% because some product remains dissolved in cold filtrate",
                        "Slower cooling → larger, more ordered crystals → better purity"
                    ],
                    conclusions: [
                        "Recrystallization effectively purifies organic solids by exploiting differential solubility",
                        "Sharp melting point near literature value confirms purity",
                        "Correct solvent choice and technique are critical for success",
                        "There is a trade-off between purity and yield"
                    ],
                    realWorldApplications: [
                        "Pharmaceutical manufacturing (purification of drug substances)",
                        "Chemical industry (purification of dyes, explosives, specialty chemicals)",
                        "Research laboratories (purification before analysis)",
                        "Crystal growth for materials science and electronics",
                        "Gemstone formation (geological crystallization)"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 4: THIN LAYER CHROMATOGRAPHY
            // ========================================

            tlc_chromatography: {
                name: "Thin Layer Chromatography (TLC) - Separation and Identification of Organic Compounds",
                relatedTopics: ['functional_groups', 'organic_reactions', 'spectroscopy'],
                category: 'analytical_techniques',
                historicalBackground: {
                    scientist: "Mikhail Tswett (1906) - paper chromatography; TLC developed in 1950s by Stahl",
                    etymology: "'Chromatography' from Greek chroma (color) + graphein (to write) - Tswett separated plant pigments",
                    significance: "Rapid, inexpensive analytical tool for identifying and monitoring organic compounds",
                    modernUse: "Used to monitor reaction progress, identify unknowns, optimize conditions"
                },
                labExperiment: {
                    title: "TLC Separation of Plant Pigments (Chlorophylls and Carotenoids)",
                    hypothesis: "Plant pigments can be separated by TLC because they have different polarities, giving different Rf values in a given solvent system",
                    purpose: "Use TLC to separate and identify pigments extracted from spinach leaves; understand polarity and Rf values",
                    background: {
                        principle: "In TLC, a stationary phase (silica gel on plate) is polar; mobile phase (organic solvent) moves up by capillary action. Compounds migrate based on affinity for each phase. Polar compounds = strong affinity for stationary phase = low Rf. Nonpolar compounds = low affinity for stationary phase = high Rf.",
                        Rf: "Rf = distance traveled by compound / distance traveled by solvent front",
                        RfProperties: "Rf is characteristic for a compound in a given solvent system on a given stationary phase; used for identification",
                        pigments: {
                            "β-Carotene": "Orange, nonpolar → highest Rf",
                            "Chlorophyll a": "Blue-green, moderately polar",
                            "Chlorophyll b": "Yellow-green, more polar",
                            "Xanthophylls": "Yellow, polar → lowest Rf"
                        }
                    },
                    materials: [
                        "Fresh spinach leaves",
                        "TLC plates (silica gel on aluminium, 5×10 cm)",
                        "Developing chamber (beaker + lid/watch glass)",
                        "9:1 petroleum ether:acetone solvent (developing solvent)",
                        "Acetone (for extraction)",
                        "Capillary tubes (for spotting)",
                        "UV lamp (254 or 365 nm)",
                        "Pencil (for marking, NOT pen)",
                        "Ruler",
                        "Mortar and pestle",
                        "Centrifuge tubes or small beakers"
                    ],
                    safetyPrecautions: [
                        "Petroleum ether and acetone are flammable - no open flames",
                        "UV lamp is harmful to eyes - use UV safety goggles",
                        "Developing chamber must have tight-fitting lid",
                        "Work in ventilated area"
                    ],
                    procedure: [
                        "EXTRACTION:",
                        "Tear 3−4 spinach leaves into small pieces",
                        "Grind in mortar with 5 mL acetone",
                        "Filter through cotton wool into test tube",
                        "Concentrate extract slightly if pale (allow some acetone to evaporate)",
                        "",
                        "TLC PLATE PREPARATION:",
                        "Mark a pencil line 1 cm from bottom (baseline) and 0.5 cm from top (solvent front line)",
                        "Mark pencil spots on baseline 1 cm apart",
                        "",
                        "SPOTTING:",
                        "Dip capillary in extract and touch lightly to baseline mark (small spot ~2 mm)",
                        "Allow to dry; re-spot 3−5 times to concentrate",
                        "Spot should be small and concentrated (not large and diffuse)",
                        "",
                        "DEVELOPMENT:",
                        "Pour small amount of 9:1 petroleum ether:acetone into chamber (5 mm deep, below baseline)",
                        "Place plate carefully, lean against chamber wall",
                        "Seal chamber; allow solvent to migrate up plate",
                        "Remove when solvent front nears top line (do not let solvent reach top)",
                        "Mark solvent front immediately with pencil",
                        "",
                        "VISUALIZATION AND Rf CALCULATION:",
                        "Observe visible colored bands (pigments are visible)",
                        "Also visualize under UV lamp (fluorescent/dark spots)",
                        "Measure distance each band traveled from baseline",
                        "Measure distance solvent front traveled",
                        "Calculate Rf for each band: Rf = d(compound)/d(solvent)"
                    ],
                    expectedResults: {
                        bands: [
                            {pigment: "β-Carotene", color: "Orange", Rf: "0.95", polarity: "Nonpolar"},
                            {pigment: "Chlorophyll a", color: "Blue-green", Rf: "0.65", polarity: "Moderately polar"},
                            {pigment: "Chlorophyll b", color: "Yellow-green", Rf: "0.45", polarity: "More polar"},
                            {pigment: "Xanthophylls", color: "Yellow", Rf: "0.25", polarity: "Polar"}
                        ]
                    },
                    dataTable: [
                        ["Pigment", "Color", "Distance Traveled (mm)", "Solvent Front (mm)", "Rf", "Polarity"],
                        ["β-Carotene", "Orange", "47", "50", "0.94", "Nonpolar"],
                        ["Chlorophyll a", "Blue-green", "33", "50", "0.66", "Moderate"],
                        ["Chlorophyll b", "Yellow-green", "23", "50", "0.46", "Polar"],
                        ["Xanthophylls", "Yellow", "13", "50", "0.26", "Most polar"]
                    ],
                    analysis: [
                        "Higher Rf = less polar (stronger affinity for mobile phase, weaker for silica)",
                        "Lower Rf = more polar (stronger affinity for silica stationary phase)",
                        "β-Carotene (hydrocarbon, no polar groups) has highest Rf",
                        "Xanthophylls (have −OH groups) are most polar, lowest Rf",
                        "Rf allows identification by comparison with known standards"
                    ],
                    conclusions: [
                        "TLC separates compounds by polarity through differential interaction with stationary and mobile phases",
                        "Rf values characterize compounds in a given solvent system",
                        "Spinach contains at least 4 distinct photosynthetic pigments",
                        "Polarity of functional groups determines chromatographic behavior",
                        "TLC is a rapid and versatile analytical technique"
                    ],
                    realWorldApplications: [
                        "Monitoring reactions in synthetic chemistry (reaction is complete when starting material spot disappears)",
                        "Drug testing and forensic chemistry",
                        "Food dye identification",
                        "Natural product isolation and identification",
                        "Quality control in pharmaceuticals"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 5: ESTER SYNTHESIS
            // ========================================

            ester_synthesis: {
                name: "Fischer Esterification: Synthesis and Identification of Esters",
                relatedTopics: ['functional_groups', 'organic_reactions', 'polymers'],
                category: 'synthesis',
                historicalBackground: {
                    scientist: "Emil Fischer and Arthur Speier (1895)",
                    reaction: "Fischer Esterification: Carboxylic acid + alcohol ⇌ ester + H₂O (acid catalyzed)",
                    significance: "Classic organic synthesis demonstrating condensation reactions; esters responsible for many fruit flavors and fragrances",
                    equilibrium: "Reaction is reversible; Le Chatelier's principle used to drive to products"
                },
                labExperiment: {
                    title: "Synthesis of Fruity Esters by Fischer Esterification",
                    hypothesis: "Carboxylic acids react with alcohols in the presence of acid catalyst (H₂SO₄) to form esters with characteristic fruity odors",
                    purpose: "Synthesize a series of fruity esters, observe the effect of reactant structure on product odor, and understand condensation reactions and Le Chatelier's principle",
                    background: {
                        mechanism: "Acid catalyst protonates carbonyl oxygen → activates carbonyl toward nucleophilic attack by alcohol OH → tetrahedral intermediate → proton transfers → loss of water → ester formed",
                        equilibrium: "Keq ≈ 4 (weakly favorable); use excess of one reagent or remove H₂O to shift equilibrium",
                        esterSmells: {
                            "Ethyl acetate": "Pear drop / nail polish remover",
                            "Isoamyl acetate": "Banana",
                            "Octyl acetate": "Orange",
                            "Methyl salicylate": "Wintergreen (oil of wintergreen)",
                            "Ethyl butyrate": "Pineapple",
                            "Butyl acetate": "Apple",
                            "Pentyl acetate": "Banana/pear"
                        }
                    },
                    variables: {
                        independent: "Identity of alcohol used (or carboxylic acid)",
                        dependent: "Identity and odor of ester product",
                        controlled: ["Molar ratio of reactants", "Catalyst amount", "Reaction temperature and time"]
                    },
                    materials: [
                        "Carboxylic acids: acetic acid (glacial), butyric acid, salicylic acid",
                        "Alcohols: methanol, ethanol, isoamyl alcohol (3-methylbutan-1-ol), octanol",
                        "Concentrated sulfuric acid (catalyst)",
                        "Round-bottom flask with reflux condenser",
                        "Water bath (70−80°C)",
                        "Saturated sodium carbonate solution (for washing)",
                        "Anhydrous sodium sulfate or magnesium sulfate (drying agent)",
                        "Separating funnel",
                        "Boiling chips",
                        "Erlenmeyer flask"
                    ],
                    safetyPrecautions: [
                        "Glacial acetic acid and concentrated H₂SO₄ are corrosive - avoid skin contact",
                        "Butyric acid has extremely unpleasant odor - work in fume hood",
                        "Methanol is toxic - minimize exposure",
                        "Flammable solvents - no naked flames",
                        "Add H₂SO₄ SLOWLY to reaction mixture, NEVER add water to concentrated H₂SO₄"
                    ],
                    procedure: [
                        "SYNTHESIS (e.g., isoamyl acetate - banana smell):",
                        "Measure 15 mL isoamyl alcohol into round-bottom flask",
                        "Add 20 mL glacial acetic acid",
                        "Carefully add 2 mL concentrated H₂SO₄ (catalyst)",
                        "Add boiling chips",
                        "Fit reflux condenser; heat at 70−80°C in water bath for 30−45 minutes",
                        "",
                        "WORKUP:",
                        "Allow to cool; transfer to separating funnel",
                        "Wash with 20 mL saturated Na₂CO₃ solution (CAREFUL: CO₂ produced, open tap frequently)",
                        "This neutralizes unreacted acid and removes catalyst",
                        "Drain lower aqueous layer (discard)",
                        "Wash organic layer twice more with Na₂CO₃",
                        "Wash once with water",
                        "Transfer organic layer to flask; add drying agent (Na₂SO₄), swirl",
                        "Filter to separate drying agent",
                        "Smell the product (fan toward nose, do not inhale directly)",
                        "",
                        "IDENTIFICATION:",
                        "Describe odor",
                        "Record refractive index or compare TLC Rf with standard",
                        "Optional: IR spectrum to confirm ester C=O peak (~1735 cm⁻¹)"
                    ],
                    expectedResults: {
                        isoamylAcetate: "Distinct banana aroma; yield ~60−70% after workup",
                        IRconfirmation: "C=O stretch ~1735 cm⁻¹; no broad O−H absorption",
                        Na2CO3Wash: "Fizzing observed (CO₂ from neutralization of carboxylic acid)"
                    },
                    dataTable: [
                        ["Alcohol", "Carboxylic Acid", "Ester Product", "Expected Odor", "Yield (%)"],
                        ["Methanol", "Salicylic acid", "Methyl salicylate", "Wintergreen", "~65%"],
                        ["Ethanol", "Acetic acid", "Ethyl acetate", "Pear/nail polish", "~70%"],
                        ["Isoamyl alcohol", "Acetic acid", "Isoamyl acetate", "Banana", "~60%"],
                        ["Octanol", "Acetic acid", "Octyl acetate", "Orange", "~55%"]
                    ],
                    chemicalEquation: {
                        general: "RCOOH + R'OH ⇌ RCOOR' + H₂O (H⁺ catalyst)",
                        example: "CH₃COOH + (CH₃)₂CHCH₂CH₂OH ⇌ CH₃COO(CH₃)₂CHCH₂CH₂ + H₂O",
                        LeChatelierApplication: "Excess acetic acid used to push equilibrium toward product"
                    },
                    analysis: [
                        "Ester formation is reversible (equilibrium reaction)",
                        "Excess acid shifts equilibrium right (Le Chatelier's principle)",
                        "Sulfuric acid is catalyst: lowers activation energy, not consumed",
                        "Na₂CO₃ wash removes unreacted carboxylic acid as water-soluble sodium carboxylate salt",
                        "IR peak at ~1735 cm⁻¹ confirms ester C=O; absence of broad OH confirms ester not alcohol/acid"
                    ],
                    conclusions: [
                        "Fischer esterification produces esters from carboxylic acids and alcohols",
                        "Acid catalyst is essential for reaction to proceed at reasonable rate",
                        "Different alcohol-acid combinations produce distinctly different fragrances",
                        "Workup procedure removes catalyst and unreacted starting materials",
                        "Esters responsible for many natural fruit and flower fragrances"
                    ],
                    realWorldApplications: [
                        "Flavor and fragrance industry (artificial fruit flavors)",
                        "Pharmaceutical synthesis (aspirin = acetylsalicylate ester)",
                        "Biodiesel production (transesterification of vegetable oils)",
                        "Polymer chemistry (polyester, PET synthesis)",
                        "Plasticizers in PVC (phthalate esters)"
                    ],
                    extensions: [
                        "Investigate effect of catalyst concentration on reaction rate",
                        "Compare esterification of primary vs secondary vs tertiary alcohols",
                        "Study the reverse reaction: saponification (base hydrolysis of ester)",
                        "Design synthesis of a specific target ester from given starting materials"
                    ]
                }
            }
        };

        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.organicExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.organicTopics[topicId]) {
                    if (!this.organicTopics[topicId].relatedExperiments) {
                        this.organicTopics[topicId].relatedExperiments = [];
                    }
                    this.organicTopics[topicId].relatedExperiments.push({
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
            hydrocarbons: {
                'Nomenclature': [
                    'Thinking "ethyl" means ethane (ethyl is the group C₂H₅−, a substituent)',
                    'Believing longest chain must be written horizontally (can be written in any orientation)',
                    'Confusing structural isomers with different compounds (same molecular formula, same type of compound)',
                    'Thinking cyclo- prefix changes the suffix (cyclohexane is still an -ane, it\'s the ring structure that\'s different)'
                ],
                'Bonding and Structure': [
                    'Believing double bonds make molecules flat everywhere (only carbons of the C=C and their direct substituents are coplanar)',
                    'Thinking more bonds = stronger molecule overall (more bonds per carbon means less hydrogens, different reactivity)',
                    'Confusing degree of unsaturation with reactivity (aromatic compounds have high DoU but are stable)',
                    'Believing sp² carbon can rotate freely around double bond (restricted - causes geometric isomers)'
                ],
                'Reactions': [
                    'Thinking alkanes are "inert" (they react with halogens under UV, undergo combustion)',
                    'Confusing addition and substitution (alkenes do addition; alkanes do substitution with halogens)',
                    'Believing combustion of hydrocarbons always gives CO₂ and H₂O (incomplete combustion gives CO or C)'
                ]
            },

            functional_groups: {
                'Acidity and Basicity': [
                    'Thinking all organic acids are weak (this is generally true, but strengths vary enormously)',
                    'Believing amino groups are always basic (amides are much weaker bases than amines due to resonance)',
                    'Confusing phenol (acidic) with alcohol (less acidic) - both have OH but very different pKa values',
                    'Thinking carboxylate ion is a strong base (it\'s a very weak base; its conjugate acid pKa ~4−5)'
                ],
                'Oxidation States': [
                    'Thinking all C=O compounds are the same (aldehyde, ketone, ester, amide, carboxylic acid are all different)',
                    'Believing alcohols can always be oxidized to carboxylic acids (tertiary alcohols cannot be oxidized this way)',
                    'Confusing reduction with hydrogenation (hydrogenation is one type of reduction using H₂)'
                ],
                'Properties': [
                    'Thinking all organic compounds with OH groups are acidic like carboxylic acids (alcohols are very weakly acidic)',
                    'Believing ether oxygen makes compounds reactive (ethers are among most unreactive functional groups)',
                    'Confusing boiling points: thinking all compounds with H-bonding have similar bp (chain length matters too)'
                ]
            },

            organic_reactions: {
                'SN1 and SN2': [
                    'Thinking SN2 is always faster than SN1 (depends on substrate, nucleophile, solvent)',
                    'Believing SN1 always gives pure racemic mixture (may not be perfectly 50:50 due to ion pair effects)',
                    'Confusing the number in SN1/SN2 with number of steps (it refers to molecularity of the rate-determining step)',
                    'Thinking polar protic solvents help all nucleophilic substitutions (they help SN1 but hinder SN2 by solvating nucleophile)'
                ],
                'Markovnikov\'s Rule': [
                    'Misremembering as "H adds to carbon with fewer H" (correct: H adds to carbon with MORE H)',
                    'Thinking Markovnikov\'s rule applies to all addition reactions (it\'s for electrophilic addition; radical addition is anti-Markovnikov)',
                    'Believing the rule is based on which product is "more stable" (it\'s based on which carbocation intermediate is more stable)'
                ],
                'Mechanisms': [
                    'Thinking curved arrows represent movement of atoms (they represent movement of ELECTRON PAIRS)',
                    'Drawing arrows from positive to negative charge (arrows go FROM electron pair TO electrophilic site)',
                    'Believing all reactions go to completion (many organic reactions are equilibria)',
                    'Confusing thermodynamic and kinetic control (favored product depends on conditions)'
                ]
            },

            stereochemistry: {
                'Chirality': [
                    'Thinking all molecules with four different groups on carbon are chiral (meso compounds have stereocentres but are achiral)',
                    'Believing R configuration always means dextrorotatory (+) (R/S is absolute configuration; optical rotation is an experimental measurement)',
                    'Confusing enantiomers with constitutional isomers (same connectivity, different 3D arrangement vs different connectivity)',
                    'Thinking chiral molecules must be asymmetric overall (could have Cn axis but no mirror plane)'
                ],
                'Optical Activity': [
                    'Believing you can predict optical rotation from structure alone by simple rules (you cannot without reference data)',
                    'Thinking racemic mixtures are optically inactive because molecules destroy each other (rotations cancel, not molecules)',
                    'Confusing racemic mixture with meso compound (both optically inactive but for different reasons)'
                ],
                'E/Z and Cis/Trans': [
                    'Using cis/trans when E/Z should be used (cis/trans only unambiguous for simple disubstituted alkenes)',
                    'Thinking Z always corresponds to cis (not always true; depends on priority assignment)',
                    'Believing rotation about C=C is possible at room temperature (requires significant energy; restricted rotation)'
                ]
            },

            spectroscopy: {
                'IR Spectroscopy': [
                    'Thinking absence of a peak proves absence of a functional group (some groups have weak absorptions, or overlap)',
                    'Believing IR can distinguish enantiomers (identical IR spectra for enantiomers)',
                    'Confusing stretching and bending vibrations (stretching: bond length changes; bending: bond angle changes)',
                    'Thinking higher wavenumber always means stronger bond (also depends on reduced mass of atoms involved)'
                ],
                'NMR Spectroscopy': [
                    'Believing n+1 rule applies to all nuclei (only for spin-1/2 nuclei with equal J)',
                    'Thinking chemical shift tells you how many protons (integration tells you ratio; chemical shift tells environment)',
                    'Confusing equivalent and non-equivalent protons (equivalent protons do not split each other)',
                    'Believing all CH₃ groups appear at same chemical shift (environment matters: CH₃-C vs CH₃-O vs CH₃-CO very different)'
                ],
                'Mass Spectrometry': [
                    'Thinking M⁺ is always the tallest peak (base peak is 100%, M⁺ may be very small or absent)',
                    'Believing mass spectrum directly gives molecular formula (high-resolution MS gives formula; nominal mass MS gives integer mass)',
                    'Confusing m/z with molecular mass when charge z ≠ 1 (multiply m/z by z for molecular mass)'
                ]
            },

            polymers: {
                'Types': [
                    'Thinking all plastics are the same type of polymer (addition vs condensation; thermoplastic vs thermoset)',
                    'Believing natural and synthetic polymers are completely different chemically (both are long-chain molecules with repeating units)',
                    'Confusing degree of polymerization with molecular weight (related but not the same)',
                    'Thinking all polymers are solids (polymers can be liquids - low MW, or elastomers, or solids)'
                ],
                'Properties': [
                    'Believing crosslinking always makes polymers better (crosslinking in tyres = good; in PVC without plasticizer = brittle)',
                    'Thinking polymer properties depend only on monomer identity (architecture, MW, tacticity also crucial)',
                    'Confusing thermoplastic with thermoset (thermoplastic = recyclable, softens on heating; thermoset = permanent crosslinks, not recyclable)'
                ],
                'Environmental': [
                    'Believing biodegradable = no environmental impact (biodegradation products may still be harmful)',
                    'Thinking recycling codes mean all plastics are equally recyclable (codes just identify type; recycling infrastructure varies)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use structural diagrams to show 3D arrangements and bonding differences',
                effectiveness: 'Very high for distinguishing structural and stereoisomers'
            },
            analogy: {
                method: 'Relate to everyday objects (hands for chirality, lock and key for enzyme specificity)',
                effectiveness: 'High for abstract concepts like chirality and mechanisms'
            },
            molecular_models: {
                method: 'Build physical 3D models (ball and stick, space-filling)',
                effectiveness: 'Very high for stereochemistry, conformational analysis'
            },
            contrast_table: {
                method: 'Side-by-side comparison of SN1 vs SN2, E1 vs E2, etc.',
                effectiveness: 'High for related reaction types'
            },
            chemical_equations: {
                method: 'Show step-by-step mechanisms with curved arrows',
                effectiveness: 'High for understanding reaction pathways'
            },
            experimental_demonstration: {
                method: 'Link to laboratory experiments and industrial processes',
                effectiveness: 'Very high for concrete, tangible understanding'
            },
            spectral_interpretation: {
                method: 'Work through real spectra to reinforce spectroscopy concepts',
                effectiveness: 'High for spectroscopy understanding'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "What organic compounds have you encountered in everyday life?",
                "How does {topic} relate to what you've learned before in chemistry?",
                "What do you predict will be most challenging about {topic}?",
                "What real-world applications of {topic} are you curious about?"
            ],
            duringLearning: [
                "Can you draw the structural formula for this compound?",
                "How does the functional group explain this property?",
                "How does this mechanism connect to the concept of nucleophiles and electrophiles?",
                "Can you think of a real-world example where this reaction occurs?",
                "Does this 3D structure make sense to you? Can you describe it to a partner?"
            ],
            afterLearning: [
                "What were the key structural features that determine reactivity in {topic}?",
                "What surprised you while learning about {topic}?",
                "Can you predict the product of a reaction involving {topic} without looking it up?",
                "How would you explain {topic} using an analogy?",
                "What questions do you still have?"
            ],
            problemSolving: [
                "What functional groups are present in the starting material?",
                "What reagents and conditions are given? What type of reaction do they indicate?",
                "What is the mechanism? (electrophilic? nucleophilic? radical?)",
                "Does your proposed product make sense? Check atom count and valence.",
                "Does your answer agree with Markovnikov's rule (or other applicable rule)?"
            ],
            spectroscopyInterpretation: [
                "What does the molecular formula/molecular ion tell you about the compound?",
                "What degree of unsaturation does this suggest (rings/double bonds)?",
                "What functional groups do the IR absorptions indicate?",
                "Do the NMR chemical shifts and splitting patterns match your proposed structure?",
                "Is there any inconsistency between the different spectra?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            hydrocarbons: [
                {
                    scenario: "Petroleum Refining",
                    context: "Crude oil is a complex mixture of hydrocarbons separated by fractional distillation",
                    application: "Different carbon chain lengths have different boiling points; C1-C4 = natural gas, C5-C12 = petrol, C13-C25 = diesel, C25+ = heavy fuel oil, bitumen",
                    question: "Why does petrol (gasoline) evaporate much more quickly than diesel fuel?"
                },
                {
                    scenario: "Household Gas",
                    context: "Natural gas (methane, CH₄) and LPG (propane/butane) are alkane fuels",
                    application: "Complete combustion releases CO₂ and H₂O; incomplete gives toxic CO",
                    question: "Why is it dangerous to run a gas appliance in a poorly ventilated room?"
                },
                {
                    scenario: "Benzene in Industry and Health",
                    context: "Benzene is a useful industrial solvent and precursor, but is a known carcinogen",
                    application: "Aromatic stability makes benzene resistant to addition reactions but susceptible to electrophilic substitution",
                    question: "Why was benzene replaced as a common laboratory solvent despite its useful properties?"
                }
            ],

            functional_groups: [
                {
                    scenario: "Aspirin Synthesis and Function",
                    context: "Aspirin (acetylsalicylic acid) contains ester and carboxylic acid functional groups",
                    application: "Ester bond (acetyl group) confers reduced irritation vs salicylic acid; carboxylic acid group remains for activity",
                    question: "Why does aspirin cause less stomach irritation than the original salicylic acid?"
                },
                {
                    scenario: "Hand Sanitizer Chemistry",
                    context: "Alcohol-based sanitizers use ethanol or isopropanol",
                    application: "Hydroxyl group of alcohol denatures bacterial proteins; concentration 60-70% optimal (too high evaporates before acting)",
                    question: "Why is 70% ethanol a more effective antiseptic than 100% ethanol?"
                },
                {
                    scenario: "Amino Acids as Multifunctional",
                    context: "Amino acids contain both amine and carboxylic acid groups",
                    application: "Amphoteric character; form zwitterions at physiological pH; amine = basic, carboxyl = acidic",
                    question: "How can the same molecule behave as both an acid and a base?"
                }
            ],

            organic_reactions: [
                {
                    scenario: "SN2 in Drug Design",
                    context: "Alkylating agents used in chemotherapy react by SN2 mechanism with DNA",
                    application: "Bifunctional alkylating agents create crosslinks in DNA, preventing replication",
                    question: "Why do chemotherapy drugs that alkylate DNA also damage healthy rapidly dividing cells?"
                },
                {
                    scenario: "Free Radical Damage and Antioxidants",
                    context: "Reactive oxygen species damage biomolecules by radical chain reactions",
                    application: "Antioxidants (vitamin C, E) donate H• to terminate radical chains before they damage DNA/proteins",
                    question: "How do antioxidants in food prevent rancidity (spoilage of fats)?"
                },
                {
                    scenario: "Breathalyzer Test",
                    context: "Traditional breathalyzers use oxidation of ethanol by dichromate",
                    application: "Ethanol oxidized to acetic acid; Cr₂O₇²⁻ (orange) reduced to Cr³⁺ (green); color change is measurable",
                    question: "What chemical reaction forms the basis of the breathalyzer test for drink-driving?"
                }
            ],

            stereochemistry: [
                {
                    scenario: "Thalidomide Tragedy",
                    context: "Thalidomide was given to pregnant women in the 1950s for morning sickness",
                    application: "R-enantiomer: effective sedative; S-enantiomer: teratogenic (causes birth defects). Initially sold as racemate.",
                    question: "Why does it matter which enantiomer of a drug is administered to patients?"
                },
                {
                    scenario: "Taste of Amino Acids",
                    context: "L-amino acids and D-amino acids taste different",
                    application: "Our taste receptors are chiral proteins; D-amino acids often taste sweet, L-amino acids are often bitter or tasteless",
                    question: "Why do L-glutamate (MSG) and D-glutamate taste completely different even though they're made of the same atoms?"
                },
                {
                    scenario: "Limonene and Orange/Lemon Smell",
                    context: "The enantiomers of limonene have different smells",
                    application: "(R)-limonene smells of oranges; (S)-limonene smells of lemons/turpentine",
                    question: "How can two molecules with identical chemical formulas and connectivity have completely different smells?"
                }
            ],

            spectroscopy: [
                {
                    scenario: "Forensic Drug Analysis",
                    context: "Police forensic labs identify unknown substances using spectroscopy",
                    application: "Mass spectrometry gives molecular weight and fragmentation; NMR gives structural information; IR confirms functional groups",
                    question: "How can chemists identify an unknown white powder without prior knowledge of what it might be?"
                },
                {
                    scenario: "Quality Control in Pharmaceutical Industry",
                    context: "Every batch of a pharmaceutical drug must be confirmed to be the correct structure and purity",
                    application: "NMR verifies structure; HPLC-MS checks purity; IR identifies functional groups; optical rotation confirms chiral purity",
                    question: "Why is spectroscopic analysis so important in drug manufacturing?"
                }
            ],

            polymers: [
                {
                    scenario: "Plastic Pollution and Ocean Microplastics",
                    context: "Non-biodegradable plastics persist in environment for centuries",
                    application: "Addition polymers (PE, PP, PS) lack hydrolyzable bonds; slow photodegradation fragments into microplastics",
                    question: "Why does polyethylene take hundreds of years to degrade while a polyester bag degrades much faster?"
                },
                {
                    scenario: "Nylon and World War II",
                    context: "Nylon was developed by DuPont (Wallace Carothers, 1935) as synthetic silk alternative",
                    application: "Condensation polymerization of diamine and diacid; amide bonds give strength similar to natural protein silk",
                    question: "How does the chemistry of nylon relate to the chemistry of proteins in silk?"
                },
                {
                    scenario: "Biodegradable Packaging",
                    context: "Polylactic acid (PLA) used for biodegradable food packaging",
                    application: "Lactic acid polymerizes by condensation; ester bonds are hydrolyzable by microorganisms",
                    question: "Why can polylactic acid biodegrade while polyethylene terephthalate (PET, also a polyester) is much harder to degrade?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall facts, definitions, and basic concepts of organic chemistry",
                    verbs: ["Define", "List", "Name", "Identify", "State", "Write the formula for"],
                    example: "Name the functional group −COOH"
                },
                understand: {
                    description: "Explain organic chemistry concepts and relationships",
                    verbs: ["Explain", "Describe", "Predict", "Classify", "Compare", "Summarize"],
                    example: "Explain why tertiary alcohols cannot be oxidized to carboxylic acids"
                },
                apply: {
                    description: "Use organic chemistry knowledge in new situations",
                    verbs: ["Draw", "Predict the product", "Determine", "Calculate", "Solve"],
                    example: "Draw the major product of propan-1-ol reacting with KMnO₄"
                },
                analyze: {
                    description: "Analyze organic structures and reaction pathways",
                    verbs: ["Analyze the mechanism", "Deduce the structure", "Interpret the spectrum", "Compare pathways"],
                    example: "Analyze the ¹H NMR spectrum below and propose a structure consistent with all data"
                },
                evaluate: {
                    description: "Evaluate synthetic routes, propose alternatives, critique approaches",
                    verbs: ["Evaluate", "Critique", "Justify", "Select the best reagent", "Design a synthesis"],
                    example: "Evaluate why an SN2 reaction would be preferred over SN1 for this substrate"
                },
                create: {
                    description: "Design syntheses, devise experiments, create new understanding",
                    verbs: ["Design a multi-step synthesis", "Devise an experiment", "Propose a mechanism"],
                    example: "Design a 3-step synthesis of 2-bromobutane from but-1-ene"
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Memorizes functional group names and formulas",
                        "Identifies structures from given information",
                        "Struggles to predict reaction products without a template"
                    ],
                    support: [
                        "Provide functional group identification tables",
                        "Use molecular model kits",
                        "Focus on patterns in homologous series"
                    ]
                },
                developing: {
                    characteristics: [
                        "Connects functional groups to reactivity",
                        "Can apply Markovnikov's rule and related guidelines",
                        "Begins to understand reaction mechanisms"
                    ],
                    support: [
                        "Practice reaction prediction with varied substrates",
                        "Introduce mechanism drawing with curved arrows",
                        "Connect structures to spectra"
                    ]
                },
                proficient: {
                    characteristics: [
                        "Predicts products with rationale",
                        "Draws complete mechanisms",
                        "Interprets spectroscopic data",
                        "Plans 2-step syntheses"
                    ],
                    support: [
                        "Introduce retrosynthetic analysis",
                        "Work through structure elucidation problems",
                        "Discuss competing reaction pathways"
                    ]
                },
                expert: {
                    characteristics: [
                        "Designs multi-step syntheses",
                        "Understands stereochemical outcomes",
                        "Applies principles to novel substrates",
                        "Critically evaluates synthetic routes"
                    ],
                    support: [
                        "Research literature synthesis problems",
                        "Work through total synthesis challenges",
                        "Engage with green chemistry principles"
                    ]
                }
            }
        };

        this.assessmentQuestions = {
            hydrocarbons: {
                remember: "Write the general formula for alkenes",
                understand: "Explain why alkenes are more reactive than alkanes toward bromine water",
                apply: "Draw all structural isomers of C₄H₁₀ and name each using IUPAC nomenclature",
                analyze: "Analyze why but-2-ene can exist as geometric (E/Z) isomers but propene cannot",
                evaluate: "Evaluate the claim that all hydrocarbons combust to give CO₂ and H₂O",
                create: "Design a reaction scheme to distinguish between cyclohexane, cyclohexene, and benzene using simple chemical tests"
            },
            functional_groups: {
                remember: "List five functional groups that contain oxygen",
                understand: "Explain why carboxylic acids have higher boiling points than alcohols of similar molecular mass",
                apply: "Predict the product when ethanol is heated with acidified potassium dichromate(VI)",
                analyze: "Analyze the difference in basicity between ethylamine (pKa 10.7) and acetamide (pKa 25) in terms of structure",
                evaluate: "Evaluate why amides are much less basic than amines despite both containing nitrogen",
                create: "Design a reaction scheme to convert benzaldehyde into benzoic acid and into benzyl alcohol, identifying appropriate reagents for each"
            },
            organic_reactions: {
                remember: "State the two conditions needed for free radical halogenation of alkanes",
                understand: "Explain why SN2 reactions proceed with inversion of configuration at the carbon centre",
                apply: "Predict the major product of 2-methylpropan-2-ol reacting with HBr",
                analyze: "Analyze why the reaction of (CH₃)₃CBr with NaOH gives predominantly elimination rather than substitution product",
                evaluate: "Evaluate whether SN1 or SN2 is more likely for the reaction of 2-chlorobutane with CN⁻ in acetone",
                create: "Design a two-step synthesis of 1-bromobutane from but-1-ene, identifying the type of mechanism at each step"
            },
            stereochemistry: {
                remember: "Define the term 'enantiomers'",
                understand: "Explain why a racemic mixture shows no optical rotation",
                apply: "Assign R or S configuration to the stereocentre in 2-bromobutane",
                analyze: "Analyze why (2R,3R)-tartaric acid and (2R,3S)-tartaric acid are diastereomers, not enantiomers",
                evaluate: "Evaluate the pharmacological importance of stereochemistry in drug development, using a specific example",
                create: "Design an experiment to determine whether an unknown sample of lactic acid is the R form, S form, or a racemic mixture"
            },
            spectroscopy: {
                remember: "State the wavenumber range for the carbonyl (C=O) stretching vibration in IR spectroscopy",
                understand: "Explain why the O−H absorption in carboxylic acids appears as a very broad band in IR spectra",
                apply: "An unknown compound shows M⁺ = 88, IR: broad O−H at 2500-3300 cm⁻¹, C=O at 1720 cm⁻¹. What functional group is likely present?",
                analyze: "Interpret the ¹H NMR spectrum: singlet at 9.8 ppm (1H), quartet at 2.4 ppm (2H), triplet at 1.2 ppm (3H). Propose a structure.",
                evaluate: "Evaluate the relative usefulness of IR versus NMR spectroscopy for confirming the purity of an ester product",
                create: "Design a spectroscopic strategy to distinguish between pentan-1-ol, pentanal, and pentanoic acid, predicting key spectral features for each"
            },
            polymers: {
                remember: "State the difference between addition and condensation polymerization",
                understand: "Explain why nylon is classified as a condensation polymer",
                apply: "Draw the repeat unit of the polymer formed from propene (CH₃CH=CH₂) by addition polymerization",
                analyze: "Analyze why polyethylene (LDPE) is flexible and translucent while high-density polyethylene (HDPE) is rigid and opaque",
                evaluate: "Evaluate the environmental impact of using PET versus PLA for single-use plastic packaging",
                create: "Design a condensation polymer with both flexibility and water resistance, identifying suitable monomers and explaining your choices"
            }
        };
    }

    // ========================================
    // HANDLER METHODS FOR EACH TOPIC
    // ========================================

    handleHydrocarbons(problem) {
        const content = {
            topic: "Hydrocarbons",
            category: 'organic_structure',
            summary: "Hydrocarbons are organic compounds containing only carbon and hydrogen. They are classified by the types of carbon-carbon bonds: alkanes (single bonds only), alkenes (one or more C=C), alkynes (one or more C≡C), and aromatic compounds (delocalized π electrons). Hydrocarbons are the foundation of all organic chemistry.",
            classification: {
                alkanes: {
                    definition: "Saturated hydrocarbons with only C−C single bonds",
                    generalFormula: "CₙH₂ₙ₊₂ (open chain)",
                    hybridization: "sp³ at each carbon; tetrahedral geometry (109.5°)",
                    homologousSeries: [
                        {n: 1, name: "Methane", formula: "CH₄", bp: "−161.5°C", state: "gas"},
                        {n: 2, name: "Ethane", formula: "C₂H₆", bp: "−89°C", state: "gas"},
                        {n: 3, name: "Propane", formula: "C₃H₈", bp: "−42°C", state: "gas"},
                        {n: 4, name: "Butane", formula: "C₄H₁₀", bp: "−0.5°C", state: "gas"},
                        {n: 5, name: "Pentane", formula: "C₅H₁₂", bp: "36°C", state: "liquid"},
                        {n: 6, name: "Hexane", formula: "C₆H₁₄", bp: "69°C", state: "liquid"},
                        {n: 8, name: "Octane", formula: "C₈H₁₈", bp: "126°C", state: "liquid"},
                        {n: 16, name: "Hexadecane", formula: "C₁₆H₃₄", bp: "287°C", state: "liquid"},
                        {n: 20, name: "Eicosane", formula: "C₂₀H₄₂", bp: "343°C", state: "solid"}
                    ],
                    reactions: {
                        combustion: "Complete: CₙH₂ₙ₊₂ + (3n+1)/2 O₂ → n CO₂ + (n+1) H₂O",
                        halogenation: "CₙH₂ₙ₊₂ + X₂ → CₙH₂ₙ₊₁X + HX (UV light, free radical)",
                        steamReforming: "CH₄ + H₂O → CO + 3H₂ (industrial hydrogen production)"
                    },
                    isomerism: {
                        structural: "Chains, branches, rings",
                        conformational: "Newman projections (staggered, eclipsed)"
                    }
                },
                alkenes: {
                    definition: "Unsaturated hydrocarbons with one or more C=C double bonds",
                    generalFormula: "CₙH₂ₙ (one double bond, no ring)",
                    hybridization: "sp² at double-bonded carbons; trigonal planar (120°)",
                    bondingDetails: {
                        sigma: "σ bond (overlap of sp² orbitals along bond axis)",
                        pi: "π bond (sideways overlap of p orbitals); responsible for reactivity",
                        restricted: "Restricted rotation about C=C → geometric isomers"
                    },
                    geometricIsomers: {
                        definition: "Different spatial arrangement due to restricted rotation",
                        EZSystem: "E (entgegen, opposite), Z (zusammen, same) using CIP priorities",
                        cisTransSystem: "cis (same groups on same side), trans (opposite) - used for simple cases",
                        properties: "E/Z isomers have different physical and sometimes chemical properties"
                    },
                    reactions: {
                        addition: {
                            HX: "H−X adds; Markovnikov's rule: H to more-H carbon (major product = more stable carbocation)",
                            H2: "Catalytic hydrogenation: C=C + H₂ → C−C (Pt, Pd, or Ni catalyst)",
                            Br2: "Electrophilic addition: anti addition via bromonium ion intermediate",
                            H2O: "Acid-catalyzed hydration: H₃O⁺ catalyst → Markovnikov alcohol",
                            polymerization: "Many alkene molecules → addition polymer (e.g., polyethylene)"
                        },
                        oxidation: {
                            coldKMnO4: "Mild oxidation → diol (cis addition of two OH groups)",
                            hotKMnO4: "Cleaves C=C → ketones and/or carboxylic acids (depends on substitution)",
                            ozonolysis: "O₃ followed by reductive workup → carbonyl compounds"
                        }
                    }
                },
                alkynes: {
                    definition: "Hydrocarbons with one or more C≡C triple bonds",
                    generalFormula: "CₙH₂ₙ₋₂ (one triple bond, no ring)",
                    hybridization: "sp at triply-bonded carbons; linear geometry (180°)",
                    bondingDetails: {
                        bonds: "One σ bond + two π bonds (perpendicular to each other)",
                        acidity: "Terminal alkynes are acidic (pKa ~25); C−H can be deprotonated by strong base"
                    },
                    reactions: {
                        addition: "Similar to alkenes but can add 2 equivalents (two-step)",
                        hydrogenation: "Two steps: alkyne → (partial) alkene → alkane",
                        partialHydrogenation: "Lindlar's catalyst → cis-alkene; Na/NH₃ → trans-alkene",
                        acidicH: "Terminal alkyne + NaNH₂ → sodium acetylide (nucleophile)"
                    }
                },
                arenes: {
                    definition: "Compounds containing benzene ring or aromatic system",
                    benzeneStructure: {
                        formula: "C₆H₆",
                        structure: "Regular hexagon; all C−C bonds equal (1.40 Å, between single and double bond length)",
                        delocalization: "6 π electrons delocalized over ring (Hückel: 4n+2 rule, n=1)",
                        stability: "Extra stability (~150 kJ/mol) compared to hypothetical cyclohexadiene"
                    },
                    reactions: {
                        electrophilicSubstitution: {
                            halogenation: "Ar−H + Br₂ + FeBr₃ → Ar−Br + HBr (not addition!)",
                            nitration: "Ar−H + HNO₃ + H₂SO₄ → Ar−NO₂ + H₂O",
                            sulfonation: "Ar−H + H₂SO₄ (fuming) → Ar−SO₃H",
                            alkylation: "Ar−H + RX + AlCl₃ → Ar−R + HX (Friedel-Crafts)",
                            acylation: "Ar−H + RCOCl + AlCl₃ → Ar−COR + HCl (Friedel-Crafts)"
                        },
                        additionNotFavored: "Addition would destroy aromaticity (high activation energy)"
                    },
                    substituentEffects: {
                        activating: "−OH, −NH₂, −alkyl: donate electron density, direct ortho/para",
                        deactivating: "−NO₂, −COOH, −SO₃H: withdraw electron density, direct meta"
                    }
                }
            },
            chemicalTests: {
                bromine_water: {
                    detects: "C=C double bond (alkenes); also C≡C",
                    procedure: "Add drops of bromine water to compound; shake",
                    alkene_positive: "Brown/orange color decolorizes rapidly (in dark - electrophilic addition)",
                    alkane_negative: "Brown color retained (alkanes don't react with Br₂ in dark)",
                    benzene_negative: "Color retained in dark (benzene resistant to addition; substitution requires FeBr₃)"
                },
                acidified_KMnO4: {
                    detects: "C=C double bond; also oxidizable groups",
                    alkene_positive: "Purple/pink color decolorizes (alkene oxidized)",
                    alkane_negative: "Color retained"
                },
                combustion: {
                    sooty_flame: "High C:H ratio → incomplete combustion → soot (aromatic compounds, long-chain)",
                    clean_flame: "Low C:H ratio, e.g., methane burns cleanly"
                }
            },
            degreeOfUnsaturation: {
                formula: "DoU = (2C + 2 + N − H − X) / 2",
                interpretation: {
                    0: "No rings or multiple bonds (saturated)",
                    1: "One ring OR one double bond",
                    2: "Two rings, or one ring + one double bond, or one triple bond",
                    4: "Often indicates benzene ring (3 'double bonds' + 1 ring)"
                },
                examples: [
                    {formula: "C₆H₁₂", DoU: 1, interpretation: "One ring or one C=C"},
                    {formula: "C₆H₆", DoU: 4, interpretation: "Benzene (ring + 3 double bonds)"},
                    {formula: "C₅H₈", DoU: 2, interpretation: "Could be diene, one alkyne, one ring + alkene"}
                ]
            },
            examples: [
                {name: "Methane", type: "Alkane", formula: "CH₄", source: "Natural gas", use: "Fuel, chemical feedstock"},
                {name: "Ethene (ethylene)", type: "Alkene", formula: "C₂H₄", source: "Petroleum cracking", use: "Polyethylene, ripening agent"},
                {name: "Ethyne (acetylene)", type: "Alkyne", formula: "C₂H₂", source: "Industrial synthesis", use: "Welding, organic synthesis"},
                {name: "Benzene", type: "Arene", formula: "C₆H₆", source: "Petroleum", use: "Precursor for many chemicals; carcinogen"},
                {name: "Cyclohexane", type: "Cycloalkane", formula: "C₆H₁₂", source: "Petroleum", use: "Solvent, nylon production"}
            ],
            applications: [
                "Fossil fuels (petroleum, natural gas, coal) for energy and transport",
                "Petrochemical industry: ethene and propene for polymer production",
                "Aromatic compounds as precursors for pharmaceuticals, dyes, explosives",
                "Solvents in chemical industry (hexane, toluene, xylene)",
                "Environmental chemistry: understanding combustion products, emissions"
            ]
        };

        return content;
    }

    handleFunctionalGroups(problem) {
        const content = {
            topic: "Functional Groups",
            category: 'organic_structure',
            summary: "Functional groups are specific structural units that determine the chemical reactivity of organic molecules. Molecules with the same functional group undergo similar reactions regardless of the rest of the carbon chain. Understanding functional groups is central to predicting organic chemistry behavior.",
            mainGroups: {
                alcohols: {
                    structure: "R−OH (hydroxyl group)",
                    classification: {
                        primary: "−CH₂OH (carbon bearing OH has 1 other carbon)",
                        secondary: "R₂CHOH (carbon bearing OH has 2 other carbons)",
                        tertiary: "R₃COH (carbon bearing OH has 3 other carbons)"
                    },
                    properties: {
                        Hbonding: "OH can donate and accept H-bonds → relatively high bp and water solubility",
                        acidity: "Weak acids (pKa ≈ 16); stronger acid than water (pKa 15.7) by small amount",
                        solubility: "Short-chain alcohols miscible with water; long-chain are insoluble"
                    },
                    reactions: {
                        oxidation: "1°→aldehyde (PCC) or →carboxylic acid (KMnO₄); 2°→ketone; 3°→no oxidation",
                        esterification: "RCOOH + R'OH → RCOOR' + H₂O (H⁺ cat.)",
                        dehydration: "Conc. H₂SO₄/heat: →alkene (intramolecular) or →ether (intermolecular)",
                        substitution: "SOCl₂, PCl₅, or HX: OH → halide"
                    },
                    examples: {
                        methanol: "CH₃OH; solvent, fuel; toxic",
                        ethanol: "C₂H₅OH; beverages, antiseptic, fuel additive",
                        propan1ol: "C₃H₇OH; solvent",
                        glycerol: "C₃H₅(OH)₃; trifunctional; in lipids and cosmetics",
                        cholesterol: "Steroid with one OH; membrane component"
                    }
                },
                aldehydes: {
                    structure: "R−CHO (formyl group; CHO always terminal)",
                    reactivity: "More reactive than ketones toward nucleophilic addition (less steric, more electrophilic carbonyl)",
                    reactions: {
                        oxidation: "Easily oxidized to carboxylic acid (KMnO₄, H₂Cr₂O₇, Ag(NH₃)₂⁺, Cu²⁺)",
                        reduction: "NaBH₄ or LiAlH₄ → primary alcohol",
                        nucleophilicAddition: "HCN → cyanohydrin; NaBH₄ → alcohol; Grignard → alcohol",
                        aldol: "With base catalyst → β-hydroxy aldehyde → α,β-unsaturated aldehyde"
                    },
                    identificationTests: {
                        tollens: "Ag(NH₃)₂⁺ → silver mirror (positive for aldehydes, negative for ketones)",
                        fehlings: "Cu²⁺ → brick red Cu₂O precipitate (positive for aliphatic aldehydes)",
                        schiff: "Decolorized fuchsin dye → restores pink color (positive for aldehydes)"
                    },
                    examples: {
                        formaldehyde: "HCHO; preservative (formalin), polymer precursor",
                        acetaldehyde: "CH₃CHO; ethanol metabolite; harmful",
                        benzaldehyde: "C₆H₅CHO; almond/cherry flavor"
                    }
                },
                ketones: {
                    structure: "R−CO−R' (carbonyl between two C atoms)",
                    reactivity: "Less reactive than aldehydes toward nucleophilic addition",
                    reactions: {
                        reduction: "NaBH₄ or LiAlH₄ → secondary alcohol",
                        nucleophilicAddition: "Grignard → tertiary alcohol; HCN → cyanohydrin",
                        aldol: "With base → β-hydroxy ketone → conjugated enone"
                    },
                    tests: {
                        negative: "Negative Tollens' and Fehling's tests (distinguish from aldehydes)",
                        DNPtest: "2,4-dinitrophenylhydrazine (Brady's reagent) → orange/yellow precipitate (positive for both aldehydes AND ketones)"
                    },
                    examples: {
                        acetone: "CH₃COCH₃ (propanone); nail polish remover, solvent",
                        MEK: "CH₃COC₂H₅ (butanone); industrial solvent",
                        cyclohexanone: "Precursor for nylon"
                    }
                },
                carboxylicAcids: {
                    structure: "R−COOH (carboxyl group = carbonyl + hydroxyl)",
                    acidity: {
                        pKa: "~4−5 for simple aliphatic acids",
                        resonance: "Carboxylate anion (RCOO⁻) resonance stabilized → acid stronger than alcohol",
                        inductive: "Electron-withdrawing groups (Cl, F) near COOH increase acidity"
                    },
                    reactions: {
                        deprotonation: "RCOOH + NaOH → RCOONa + H₂O",
                        esterification: "RCOOH + R'OH → RCOOR' + H₂O (H⁺ catalyst, reversible)",
                        amideFormation: "RCOOH + R'NH₂ → RCONHR' + H₂O (heat required)",
                        reduction: "LiAlH₄ → primary alcohol (NaBH₄ insufficient)",
                        decarboxylation: "Heat → R−H + CO₂ (β-keto acids readily)"
                    },
                    examples: {
                        methanoic: "HCOOH (formic acid); ant sting venom",
                        ethanoic: "CH₃COOH (acetic acid); vinegar (4−8% aq.)",
                        propanoic: "C₂H₅COOH; food preservative (propionate)",
                        benzoic: "C₆H₅COOH; food preservative (E210)",
                        fattyAcids: "Long-chain (C12−C22); components of lipids"
                    }
                },
                amines: {
                    structure: {
                        primary: "R−NH₂",
                        secondary: "R₂NH",
                        tertiary: "R₃N"
                    },
                    basicity: "Lone pair on N accepts proton; pKa of conjugate acid ≈ 10 (much more basic than amides)",
                    reactions: {
                        protonation: "R−NH₂ + HCl → R−NH₃⁺Cl⁻ (ammonium salt; water soluble)",
                        acylation: "R−NH₂ + RCOCl → RCONHR + HCl (amide formation)",
                        alkylation: "R−NH₂ + R'X → R−NHR' (→ R₂N−R' → R₃N⁺R' by further alkylation)",
                        nitrous: "1°: diazonium salt (N₂ escapes; useful for aromatic) or alcohol (aliphatic); 2°: N-nitroso"
                    },
                    examples: {
                        methylamine: "CH₃NH₂; industrial intermediate",
                        aniline: "C₆H₅NH₂; dye precursor",
                        putrescine: "H₂N(CH₂)₄NH₂; diamino compound; odor of decay",
                        ephedrine: "Stimulant drug; chiral amine"
                    }
                }
            },
            comparisonTable: {
                headers: ["Functional Group", "Structure", "Polarity", "H-bonding", "Reactivity", "Typical pKa"],
                rows: [
                    ["Alkyl (−CH₃)", "C−H only", "Low", "No", "Very low", "~50"],
                    ["Alcohol (−OH)", "R−OH", "High", "Donor+Acceptor", "Moderate", "~16"],
                    ["Aldehyde (−CHO)", "R−CHO", "High", "Acceptor only", "High", "N/A"],
                    ["Ketone (C=O)", "R₂C=O", "High", "Acceptor only", "Moderate", "N/A"],
                    ["Carboxylic (−COOH)", "R−COOH", "Very high", "Donor+Acceptor", "High", "~4−5"],
                    ["Amine (−NH₂)", "R−NH₂", "Moderate", "Donor+Acceptor", "Moderate", "~10 (as acid)"],
                    ["Ester (−COO−)", "R−COOR'", "High", "Acceptor only", "Moderate", "N/A"],
                    ["Amide (−CONH−)", "R−CONH₂", "Very high", "Donor+Acceptor", "Low", "~25"]
                ]
            },
            applications: [
                "Pharmaceutical drug design: functional groups determine receptor binding and pharmacokinetics",
                "Fragrance and flavor chemistry: esters (fruity), aldehydes (floral), amines (fishy/musky)",
                "Food preservation: carboxylic acids (acetic, sorbic, benzoic), alcohols (ethanol)",
                "Agricultural chemicals: amines and amides in herbicides (glyphosate, atrazine)",
                "Material science: functional groups in monomers determine polymer properties"
            ]
        };

        return content;
    }

    handleOrganicReactions(problem) {
        const content = {
            topic: "Organic Reaction Mechanisms",
            category: 'reactivity',
            summary: "Organic reactions proceed through defined mechanisms involving the movement of electron pairs. Understanding mechanisms allows prediction of products, stereochemistry, and reaction conditions. The major types are: substitution (SN1/SN2), elimination (E1/E2), addition (electrophilic, nucleophilic, radical), and condensation.",
            fundamentalConcepts: {
                curvedArrows: {
                    meaning: "Each curved arrow represents movement of ONE electron pair",
                    tail: "Arrow starts from electron source (lone pair, bond, nucleophile)",
                    head: "Arrow points to electron sink (electrophile, atom accepting electrons)",
                    fishHook: "Single-barbed arrow = movement of ONE electron (radical reactions)"
                },
                nucleophiles: {
                    definition: "Electron-pair donors; attack electrophilic (electron-poor) centers",
                    examples: ["OH⁻", "CN⁻", "Br⁻", "NH₃", "H₂O", "R₃P", "Iodide I⁻"],
                    factors: "Charge (anion > neutral), electronegativity (lower = better nucleophile), polarizability (larger atom = more polarizable = better nucleophile)"
                },
                electrophiles: {
                    definition: "Electron-pair acceptors; attacked by nucleophiles",
                    examples: ["Carbonyl carbon (C=O)", "Alkyl halide carbon (C−X)", "Carbocation (C⁺)", "Lewis acids (AlCl₃, BF₃)"],
                    factors: "Positive charge, partial positive charge (δ⁺), empty orbital"
                },
                leavingGroups: {
                    definition: "Atom/group that departs with electron pair in substitution/elimination",
                    good: "I⁻ > Br⁻ > Cl⁻ >> F⁻ (halides), TsO⁻ (tosylate), TfO⁻ (triflate)",
                    principle: "Good leaving groups are weak bases (stable after departure)",
                    OH: "OH⁻ is a poor leaving group; must be protonated to H₂O first (or converted to tosylate)"
                }
            },
            substitutionReactions: {
                SN2: {
                    name: "Bimolecular Nucleophilic Substitution",
                    mechanism: [
                        "Nucleophile approaches carbon from back (180° from leaving group)",
                        "Concerted: C−Nu bond forms as C−LG bond breaks simultaneously",
                        "Transition state: Nu...C...LG (pentacoordinate, trigonal bipyramidal)",
                        "Inversion of configuration (Walden inversion, like umbrella turning inside out)"
                    ],
                    rateEquation: "Rate = k[substrate][nucleophile] (2nd order overall)",
                    stereochemistry: "Complete inversion of configuration at carbon centre",
                    substrate: "Best: methyl > primary > secondary; tertiary virtually impossible (steric)",
                    conditions: "Strong nucleophile, polar aprotic solvent (DMF, acetone, DMSO), low temperature",
                    example: "CH₃CH₂Br + CN⁻ → CH₃CH₂CN + Br⁻"
                },
                SN1: {
                    name: "Unimolecular Nucleophilic Substitution",
                    mechanism: [
                        "Step 1 (slow/RDS): Ionization → carbocation + leaving group",
                        "Step 2 (fast): Nucleophile attacks planar carbocation",
                        "Carbocation is sp² hybridized, planar → attack from either face"
                    ],
                    rateEquation: "Rate = k[substrate] (1st order; only substrate in RDS)",
                    stereochemistry: "Racemization (equal attack on both faces) or loss of stereochemistry",
                    substrate: "Best: tertiary > secondary; primary very unlikely (unstable 1° carbocation)",
                    conditions: "Weak nucleophile, polar protic solvent (H₂O, alcohols, acetic acid), stabilized carbocation",
                    carbocationStability: "3° > 2° > 1° > CH₃⁺ (also stabilized by resonance: allylic, benzylic)",
                    example: "(CH₃)₃CCl + H₂O → (CH₃)₃COH + HCl"
                },
                comparison: {
                    headers: ["Factor", "SN2 Favored", "SN1 Favored"],
                    rows: [
                        ["Substrate", "Methyl, primary", "Tertiary (secondary borderline)"],
                        ["Nucleophile", "Strong (CN⁻, I⁻, OH⁻)", "Weak (H₂O, ROH)"],
                        ["Solvent", "Polar aprotic (DMF, DMSO)", "Polar protic (H₂O, alcohols)"],
                        ["Stereochemistry", "Inversion at stereocentre", "Racemization"],
                        ["Rate law", "Rate = k[sub][Nu]", "Rate = k[sub]"],
                        ["Temperature", "Lower preferred", "Higher helps ionization"]
                    ]
                }
            },
            eliminationReactions: {
                E2: {
                    mechanism: "Concerted: base removes β-H, double bond forms, leaving group departs simultaneously",
                    requirement: "Anti-periplanar geometry: β-H and leaving group must be 180° (anti)",
                    rateEquation: "Rate = k[substrate][base]",
                    conditions: "Strong bulky base (t-BuOK), high temperature",
                    regiochemistry: "Zaitsev product (more substituted alkene) usually major",
                    hofmannRule: "Very bulky base gives less substituted (Hofmann) product",
                    stereochemistry: "Anti-addition gives specific geometric isomer"
                },
                E1: {
                    mechanism: "Step 1: Ionization to carbocation; Step 2: base removes β-H",
                    rateEquation: "Rate = k[substrate]",
                    conditions: "Weak base or neutral, high temperature, polar protic solvent",
                    comparison: "Always competes with SN1 (both go via carbocation)"
                },
                subVsElim: {
                    summary: "Substitution and elimination compete with each other",
                    highTemp: "Higher temperature favors elimination (entropy-driven)",
                    bulkyBase: "Bulky bases favor elimination (cannot reach carbon as easily)",
                    tertSubstrate: "Tertiary substrates: SN1/E1 (SN2 blocked sterically), E2 with strong base"
                }
            },
            additionReactions: {
                electrophilicAddition: {
                    substrates: "Alkenes and alkynes",
                    mechanism: [
                        "Step 1: Electrophile (H⁺, Br⁺ part of Br₂) attacks π bond → carbocation (or bromonium ion)",
                        "Step 2: Nucleophile attacks carbocation"
                    ],
                    markovnikov: "H⁺ adds to less substituted C → more stable carbocation → more substituted product",
                    antiAddition: "Br₂ addition gives anti product (bromonium ion intermediate, trans product)",
                    examples: [
                        "Propene + HBr → 2-bromopropane (Markovnikov; via 2° carbocation)",
                        "But-2-ene + Br₂ → (2R,3S)-2,3-dibromobutane + (2S,3R) [anti addition, racemic mixture]"
                    ]
                },
                nucleophilicAddition: {
                    substrates: "Aldehydes and ketones (carbonyl compounds)",
                    mechanism: [
                        "Step 1: Nucleophile attacks electrophilic carbonyl carbon (Nu attacks C from above or below plane)",
                        "Step 2: Protonation of alkoxide intermediate"
                    ],
                    reactivity: "RCHO (aldehyde) > R₂CO (ketone) - steric and electronic",
                    reductions: {
                        NaBH4: "Mild; reduces aldehydes + ketones; does not reduce esters/amides",
                        LiAlH4: "Strong; reduces all carbonyl groups including esters, amides, carboxylic acids; use in ether, anhydrous"
                    }
                },
                radicalAddition: {
                    mechanism: "Chain reaction: initiation (peroxide → radicals), propagation, termination",
                    antiMarkovnikov: "HBr adds anti-Markovnikov with peroxides (radical mechanism)",
                    step1: "Br• (radical) attacks alkene to give more stable radical (at more substituted C)",
                    step2: "R• + HBr → R−H + Br• (regenerates chain carrier)",
                    selectivity: "Radical at more substituted C (more stable) → H adds to less substituted C"
                }
            },
            energyProfiles: {
                activationEnergy: "Ea = energy difference between reactants and transition state",
                reactionEnergy: "ΔH° = energy difference between reactants and products",
                catalyst: "Lowers Ea without changing ΔH°; provides alternate lower-energy pathway",
                intermediates: "Local energy minima on energy profile (e.g., carbocation in SN1)",
                transitionState: "Energy maximum; cannot be isolated; [ ]‡ notation"
            },
            applications: [
                "Pharmaceutical synthesis (multi-step organic synthesis of drugs)",
                "Polymer production (addition: polyethylene; condensation: nylon, polyester)",
                "Understanding biochemical pathways (enzyme mechanisms follow organic reaction principles)",
                "Green chemistry: atom economy, catalytic reactions, avoiding stoichiometric waste",
                "Agrochemical synthesis (herbicides, pesticides)"
            ]
        };

        return content;
    }

    handleStereochemistry(problem) {
        const content = {
            topic: "Stereochemistry",
            category: 'organic_structure',
            summary: "Stereochemistry describes the 3D spatial arrangement of atoms in molecules. Stereoisomers have the same molecular formula and connectivity but different spatial arrangement. Chirality and stereochemistry profoundly affect the biological activity of molecules and the outcomes of reactions.",
            fundamentals: {
                stereoisomers: {
                    definition: "Isomers with identical connectivity but different spatial arrangement of atoms",
                    types: {
                        enantiomers: "Non-superimposable mirror images; differ at ALL stereocentres",
                        diastereomers: "Stereoisomers that are NOT mirror images; differ at some but not all stereocentres",
                        geometric: "E/Z (alkenes) or cis/trans (rings) isomers due to restricted rotation",
                        conformational: "Differ only in rotation about single bonds (interconvert at room temperature)"
                    }
                },
                chiralCenter: {
                    definition: "Tetrahedral carbon bearing four different substituents (sp³ C with 4 different groups)",
                    notation: "Marked with asterisk (C*) or by drawing wedge-dash structure",
                    numberOfIsomers: "Up to 2ⁿ stereoisomers for n stereocentres (reduced if meso compounds present)"
                },
                opticalActivity: {
                    definition: "Ability of chiral compounds to rotate plane-polarized light",
                    measurement: "Polarimeter measures specific rotation [α]",
                    dextrorotatory: "(+) or d; rotates plane of polarization clockwise",
                    levorotatory: "(−) or l; rotates plane of polarization counter-clockwise",
                    racemicMixture: "50:50 mixture of enantiomers; [α] = 0 (rotations cancel)"
                }
            },
            RSconfiguration: {
                CIPRules: [
                    "Identify the four groups attached to the stereocentre",
                    "Assign priorities 1−4 based on atomic number (highest = 1)",
                    "For ties at first atom, compare atoms one bond further out (branch out systematically)",
                    "Orient the molecule so group 4 (lowest priority) points away from viewer",
                    "Trace 1→2→3: clockwise = R; counter-clockwise = S"
                ],
                priorityRules: {
                    atomicNumber: "Higher atomic number = higher priority (I > Br > Cl > S > O > N > C > H)",
                    isotopes: "Higher mass isotope = higher priority",
                    doubleTripleBonds: "Phantom atoms: C=O counts as C bonded to (O,O); O=C is O bonded to (C,C)",
                    lonePairs: "In some systems, lone pairs count as atom of atomic number 0"
                },
                examples: [
                    {compound: "(R)-lactic acid", description: "−COOH, −OH, −CH₃, −H; anti-clockwise for S going 1→2→3... see rules carefully"},
                    {compound: "(S)-alanine", description: "Natural L-alanine is (S) configuration"},
                    {compound: "(R)-glyceraldehyde", description: "D-glyceraldehyde by Fischer convention = (R) by CIP"}
                ]
            },
            EZConfiguration: {
                purpose: "Describes geometric isomerism in alkenes (and other systems with restricted rotation)",
                procedure: [
                    "Apply CIP priorities to each doubly-bonded carbon separately",
                    "E (entgegen = opposite): higher priority groups on opposite sides of double bond",
                    "Z (zusammen = together): higher priority groups on same side"
                ],
                cisTransLimit: "cis/trans only unambiguous for simple disubstituted alkenes; use E/Z for complex cases",
                example: "But-2-ene: (E)-but-2-ene (trans-but-2-ene) and (Z)-but-2-ene (cis-but-2-ene)"
            },
            mesoCompounds: {
                definition: "Compound with stereocentres but with internal plane of symmetry → achiral overall",
                example: "(2R,3S)-tartaric acid: has two stereocentres but is superimposable on its mirror image",
                opticalActivity: "Optically inactive despite having stereocentres (internal compensation)",
                contrast: "Meso vs racemic: meso = one compound (achiral); racemic = mixture of two enantiomers (both chiral)"
            },
            stereochemistryInReactions: {
                SN2: "Inversion of configuration (Walden inversion) at carbon centre",
                SN1: "Racemization (planar carbocation, attack from both faces)",
                E2: "Anti-periplanar requirement → specific geometric isomer of alkene product",
                Br2Addition: "Anti addition via bromonium ion → trans-dibromo product (meso or racemate depending on alkene)",
                CatalyticHydrogenation: "Syn addition (both H atoms added from same face) → cis product from cyclic alkene"
            },
            biologicalImportance: {
                enzymes: "Enzymes are chiral catalysts; act stereospecifically on one enantiomer",
                receptors: "Drug receptors are chiral proteins; one enantiomer often active, other inactive or harmful",
                naturalProducts: "Life uses almost exclusively L-amino acids and D-sugars",
                examples: [
                    {name: "Thalidomide", Renantiomer: "Sedative/morning sickness", Senantiomer: "Teratogenic (causes limb defects)"},
                    {name: "Ibuprofen", Senantiomer: "Active anti-inflammatory", Renantiomer: "Inactive (converted to S in body)"},
                    {name: "Limonene", Renantiomer: "Smells of oranges", Senantiomer: "Smells of lemons/turpentine"},
                    {name: "Carvone", Senantiomer: "Spearmint smell", Renantiomer: "Caraway/dill smell"}
                ]
            },
            applications: [
                "Chiral drug synthesis and resolution into pure enantiomers",
                "Asymmetric catalysis (designing catalysts that give one enantiomer selectively)",
                "Quality control in pharmaceutical manufacturing (optical purity testing)",
                "Understanding enzyme mechanisms and stereospecificity",
                "Developing chiral sensors and analytical methods"
            ]
        };

        return content;
    }

    handleSpectroscopy(problem) {
        const content = {
            topic: "Spectroscopic Analysis",
            category: 'analytical',
            summary: "Spectroscopic methods determine organic compound structures by measuring their interaction with electromagnetic radiation. Each technique provides complementary information: MS (molecular mass and formula), IR (functional groups), NMR (carbon framework and hydrogen environments), UV-Vis (conjugated chromophores). Together they allow complete structure determination.",
            techniques: {
                massSpectrometry: {
                    principle: "Ionize molecules → accelerate ions → separate by m/z → detect",
                    ionization: {
                        EI: "Electron ionization: high-energy electrons remove electron; gives M⁺• (radical cation)",
                        ESI: "Electrospray: gentle ionization; gives [M+H]⁺; used for large biomolecules",
                        MALDI: "Matrix-assisted laser desorption: for proteins, DNA, polymers"
                    },
                    keyPeaks: {
                        molecularIon: "M⁺ peak = molecular mass (EI); may be absent for labile molecules",
                        basePeak: "Most abundant peak (assigned 100%); usually most stable fragment",
                        M1Peak: "M+1 due to ¹³C (1.1% natural abundance); height = %C × 1.1",
                        M2Peak: "M+2 due to ³⁴S, ³⁷Cl, ⁸¹Br; very characteristic for Cl and Br"
                    },
                    isotopePatterns: {
                        chlorine: "35:37 ratio ≈ 3:1; two peaks separated by 2 units in M:(M+2) ≈ 3:1",
                        bromine: "79:81 ratio ≈ 1:1; M:(M+2) ≈ 1:1 (distinctive equal doublet)",
                        sulfur: "32:34 ratio ≈ 95:4; small M+2 peak"
                    },
                    fragmentation: {
                        alphaCleavage: "Bond adjacent to C=O, N, O breaks; gives stabilized cation",
                        McLafferty: "6-membered TS; γ-H transferred to carbonyl; gives m/z = M−alkene",
                        lossOfGroups: {
                            "15": "Loss of CH₃",
                            "17": "Loss of OH",
                            "18": "Loss of H₂O (from alcohols, carboxylic acids)",
                            "28": "Loss of CO (from aldehydes) or C₂H₄",
                            "29": "Loss of CHO or C₂H₅",
                            "31": "Loss of OCH₃ (from methyl esters)",
                            "35/37": "Loss of Cl",
                            "45": "Loss of OC₂H₅ (from ethyl esters)"
                        }
                    }
                },
                IRSpectroscopy: {
                    principle: "Bonds absorb IR radiation to increase vibrational amplitude; frequency depends on bond strength and atom masses",
                    bondStrength: "Stronger bond → higher wavenumber (frequency); e.g., C≡C > C=C > C−C",
                    atomMass: "Lighter atoms → higher frequency; e.g., O−H > O−D (deuterium)",
                    keyAbsorptions: {
                        "O−H (alcohol)": {range: "3200−3550 cm⁻¹", shape: "broad (H-bonding)"},
                        "O−H (carboxylic)": {range: "2500−3300 cm⁻¹", shape: "very broad"},
                        "N−H (amine 1°)": {range: "3300−3500 cm⁻¹", shape: "two peaks (sym + asym)"},
                        "N−H (amide)": {range: "3300−3500 cm⁻¹", shape: "broad"},
                        "≡C−H": {range: "3300 cm⁻¹", shape: "sharp (terminal alkyne)"},
                        "=C−H": {range: "3050−3150 cm⁻¹"},
                        "C−H (alkane)": {range: "2850−2960 cm⁻¹"},
                        "C≡N": {range: "2200−2260 cm⁻¹", shape: "sharp, medium"},
                        "C≡C": {range: "2100−2260 cm⁻¹"},
                        "C=O (acid chloride)": {range: "~1800 cm⁻¹"},
                        "C=O (anhydride)": {range: "~1820 and ~1760 cm⁻¹ (two peaks)"},
                        "C=O (aldehyde/ketone)": {range: "1700−1750 cm⁻¹"},
                        "C=O (carboxylic acid)": {range: "1710−1725 cm⁻¹"},
                        "C=O (ester)": {range: "1720−1750 cm⁻¹"},
                        "C=O (amide)": {range: "1630−1680 cm⁻¹"},
                        "C=C (alkene)": {range: "1620−1680 cm⁻¹"},
                        "C=C (aromatic)": {range: "~1500 and ~1600 cm⁻¹ (two peaks)"},
                        "C−O (ether)": {range: "1080−1150 cm⁻¹", shape: "strong"},
                        "C−O (ester)": {range: "1100−1300 cm⁻¹ (two C−O stretches)"}
                    },
                    samplePrep: {
                        liquids: "Thin film between NaCl plates, or ATR (attenuated total reflectance)",
                        solids: "KBr pellet or ATR",
                        gases: "Gas cell"
                    }
                },
                NMRSpectroscopy: {
                    principle: "Spin-active nuclei (¹H, ¹³C) align in magnetic field; absorb specific radiofrequency → resonance frequency depends on electronic environment",
                    chemicalShift: {
                        definition: "Position of NMR peak relative to TMS (tetramethylsilane) reference at 0 ppm",
                        deshielding: "Electronegative groups near H reduce electron density → deshielded → higher ppm (downfield)",
                        shielding: "Electron-donating groups → shielded → lower ppm (upfield)",
                        H1NMR: {
                            "TMS": "0 ppm (reference)",
                            "Alkyl C−H": "0.5−1.8 ppm",
                            "Allylic/propargylic": "1.6−2.6 ppm",
                            "C−H adjacent to C=O": "2.0−2.5 ppm",
                            "C−H adjacent to halogen": "2.5−4.0 ppm",
                            "O−CH₂ or O−CH (ether)": "3.3−4.0 ppm",
                            "O−CH (ester, O−C−C=O side)": "3.7−4.5 ppm",
                            "Vinyl =C−H": "4.5−6.5 ppm",
                            "Aromatic Ar−H": "6.5−8.5 ppm",
                            "Aldehyde CHO": "9.4−10.0 ppm",
                            "Carboxylic OH": "10−12 ppm",
                            "Alcohol OH": "0.5−5.0 ppm (variable, often broad)"
                        }
                    },
                    spinSpinSplitting: {
                        nPlus1Rule: "Signal split into n+1 lines by n equivalent adjacent H atoms",
                        patterns: {
                            singlet: "0 adjacent H atoms",
                            doublet: "1 adjacent H atom",
                            triplet: "2 adjacent H atoms",
                            quartet: "3 adjacent H atoms",
                            quintet: "4 adjacent H atoms"
                        },
                        couplingConstant: "J value (Hz) = distance between lines of doublet; measures through-bond interaction",
                        equivalentProtons: "Equivalent protons do not split each other"
                    },
                    integration: {
                        principle: "Area under peak proportional to number of equivalent protons",
                        use: "Gives ratio of different proton environments; compare with molecular formula"
                    },
                    C13NMR: {
                        features: "Broadband decoupled ¹³C NMR shows one peak per unique carbon",
                        chemicalShift: "Wider range: 0−220 ppm",
                        carbonyls: "C=O carbons: 160−220 ppm (very diagnostic)",
                        aromatics: "Ar−C: 110−160 ppm",
                        aliphatic: "C−C: 0−50 ppm"
                    },
                    DEPT: {
                        use: "Distinguishes CH₃, CH₂, CH, and quaternary C",
                        DEPT90: "Shows only CH carbons",
                        DEPT135: "CH and CH₃ point up; CH₂ points down; C not seen"
                    }
                },
                UVVisSpectroscopy: {
                    principle: "π→π* and n→π* electronic transitions absorb UV/visible light",
                    chromophore: "Structural feature responsible for absorption",
                    conjugation: "More conjugation → bathochromic shift (absorption at longer wavelength)",
                    keyAbsorptions: {
                        "Isolated C=C": "~170 nm (vacuum UV; not practically useful)",
                        "Diene (conjugated)": "~217 nm",
                        "Enone (α,β-unsaturated C=O)": "~215 nm (π→π*) and ~325 nm (n→π*, weak)",
                        "Benzene": "~254 nm (fine structure visible)",
                        "Polycyclic aromatics": "Longer wavelengths as conjugation increases",
                        "Colored compounds": ">400 nm (visible; dyes, chromophores)"
                    },
                    uses: "Identify conjugation; quantify concentration (Beer-Lambert law); follow kinetics"
                }
            },
            structureElucidation: {
                systematicApproach: [
                    "1. MOLECULAR FORMULA from high-resolution MS or elemental analysis",
                    "2. DEGREE OF UNSATURATION: DoU = (2C + 2 + N − H − X) / 2",
                    "   DoU = 0: fully saturated; 1: one ring or one C=C; 4: likely benzene ring",
                    "3. IR SPECTRUM: identify functional groups present (O−H? C=O? N−H? C≡?)",
                    "4. ¹H NMR: number of distinct H environments; chemical shifts; integration; splitting",
                    "5. ¹³C NMR (if available): number of distinct C environments; carbonyl C at >160 ppm?",
                    "6. MS FRAGMENTS: characteristic losses (−18: H₂O; −15: CH₃; M/2: symmetric molecule?)",
                    "7. PROPOSE STRUCTURE consistent with all data",
                    "8. VERIFY: does proposed structure explain all observations? Any inconsistencies?"
                ],
                workedExample: {
                    formula: "C₃H₆O",
                    DoU: 1,
                    IR: "C=O at 1715 cm⁻¹; no O−H; no N−H",
                    H1NMR: "Singlet 2.1 ppm (6H)",
                    interpretation: "DoU=1 → ring or C=C or C=O; IR 1715 cm⁻¹ = ketone; NMR 2H: only one environment for 6 H adjacent to carbonyl; 6H singlet = two equivalent CH₃ groups → acetone (CH₃COCH₃)"
                }
            },
            applications: [
                "Drug identification and quality control in pharmaceutical industry",
                "Forensic analysis (identify unknowns, detect drugs)",
                "Environmental monitoring (trace contaminant identification)",
                "Natural product structure determination",
                "Reaction monitoring (NMR, IR to follow progress and identify products)"
            ]
        };

        return content;
    }

    handlePolymers(problem) {
        const content = {
            topic: "Polymers",
            category: 'applications',
            summary: "Polymers are large molecules built from many repeating small units (monomers) linked by covalent bonds. They can be natural (cellulose, proteins, rubber) or synthetic (polyethylene, nylon, PET). The two main synthesis routes are addition polymerization (alkene monomers, no byproduct) and condensation polymerization (bifunctional monomers, small molecule lost per step).",
            additionPolymerization: {
                overview: {
                    definition: "Monomers join by addition reactions (typically of alkenes); no small molecule lost",
                    monomerRequirement: "Alkene (or related unsaturated) monomer; C=C bond is the reactive site",
                    productFormula: "Polymer has same empirical formula as monomer (just n times)"
                },
                mechanism: {
                    radical: {
                        steps: ["Initiation: initiator (R•) + alkene → R−CH₂−CH•", "Propagation: chain radical + monomer → longer chain radical", "Termination: two radicals combine or disproportionate"],
                        initiators: "Organic peroxides (benzoyl peroxide, AIBN) decompose on heating to give radicals"
                    },
                    coordination: {
                        ZieglerNatta: "Ti/Al catalyst complex; enables stereoregular (isotactic) polymers",
                        isotactic: "All substituents on same side of backbone → crystalline, high Tm",
                        syndiotactic: "Substituents alternate → also crystalline",
                        atactic: "Random arrangement → amorphous, low Tg"
                    }
                },
                examples: [
                    {
                        monomer: "Ethene (CH₂=CH₂)",
                        polymer: "Poly(ethene) / Polyethylene",
                        abbreviation: "PE",
                        repeatUnit: "−CH₂−CH₂−",
                        properties: "Flexible, chemically resistant, low density",
                        types: "LDPE (branched, flexible, bags) vs HDPE (linear, rigid, pipes)",
                        uses: "Packaging, bottles, bags, pipes"
                    },
                    {
                        monomer: "Propene (CH₃CH=CH₂)",
                        polymer: "Poly(propene) / Polypropylene",
                        abbreviation: "PP",
                        repeatUnit: "−CH₂−CH(CH₃)−",
                        properties: "Stiff, higher Tm than PE, good chemical resistance",
                        uses: "Food containers, car parts, ropes, carpet fibers"
                    },
                    {
                        monomer: "Styrene (C₆H₅CH=CH₂)",
                        polymer: "Poly(styrene)",
                        abbreviation: "PS",
                        repeatUnit: "−CH₂−CH(C₆H₅)−",
                        properties: "Rigid, transparent (atactic), brittle",
                        uses: "Packaging, CD cases; expanded PS (Styrofoam) = insulation, cups"
                    },
                    {
                        monomer: "Tetrafluoroethene (CF₂=CF₂)",
                        polymer: "Poly(tetrafluoroethene) / PTFE",
                        abbreviation: "PTFE (Teflon®)",
                        properties: "Extremely chemically inert, high Tm, non-stick, excellent electrical insulator",
                        uses: "Non-stick cookware, gaskets, electrical insulation, Gore-Tex® (expanded PTFE)"
                    },
                    {
                        monomer: "Chloroethene (CH₂=CHCl)",
                        polymer: "Poly(vinyl chloride)",
                        abbreviation: "PVC",
                        repeatUnit: "−CH₂−CHCl−",
                        properties: "Rigid (hard PVC) or flexible with plasticizers (soft PVC)",
                        uses: "Water pipes, flooring, credit cards, cable insulation"
                    },
                    {
                        monomer: "Propenonitrile / acrylonitrile (CH₂=CHCN)",
                        polymer: "Poly(acrylonitrile) / Acrylic",
                        abbreviation: "PAN",
                        uses: "Acrylic fibers (clothing), precursor for carbon fiber"
                    }
                ],
                drawingRepeatUnit: {
                    instructions: [
                        "Add brackets around the repeat unit",
                        "Put subscript n after closing bracket",
                        "Show bonds emerging from both ends of the bracket (continuation bonds)",
                        "For CH₂=CHR: repeat unit is −CH₂−CHR− (draw as bracket unit)"
                    ]
                }
            },
            condensationPolymerization: {
                overview: {
                    definition: "Monomers with two functional groups react; small molecule (usually H₂O, occasionally HCl) is eliminated at each step",
                    monomerRequirement: "Bifunctional monomers (two reactive groups, one at each end)",
                    stepGrowth: "Chain grows step-by-step; high conversion (>99%) needed for high molecular weight",
                    molecularWeight: "Carothers equation: Xn = 1/(1−p) where p = fraction of functional groups reacted"
                },
                types: {
                    polyesters: {
                        monomers: "Diol + diacid (or hydroxy acid polymerizes alone)",
                        linkage: "Ester bond (−COO−)",
                        byproduct: "H₂O",
                        example_PET: {
                            name: "PET (polyethylene terephthalate)",
                            monomers: "Ethane-1,2-diol + benzene-1,4-dicarboxylic acid (terephthalic acid)",
                            repeatUnit: "−OC₂H₄O−CO−C₆H₄−CO−",
                            uses: "Drink bottles (clear), polyester fiber (clothing), film (Mylar®)"
                        }
                    },
                    polyamides: {
                        monomers: "Diamine + diacid (or amino acid polymerizes alone)",
                        linkage: "Amide bond (−CONH−); same as peptide bond in proteins",
                        byproduct: "H₂O",
                        example_nylon66: {
                            name: "Nylon 6,6",
                            monomers: "Hexane-1,6-diamine (6C) + hexanedioic acid (adipic acid, 6C)",
                            numbers: "6,6 refers to 6 carbons in each monomer",
                            repeatUnit: "−NH(CH₂)₆NH−CO(CH₂)₄CO−",
                            properties: "Strong, tough, silk-like, high mp (264°C), good abrasion resistance",
                            uses: "Stockings, ropes, toothbrush bristles, gears, bearings"
                        },
                        example_nylon6: {
                            name: "Nylon 6 (Perlon)",
                            monomer: "Caprolactam (cyclic amino acid, self-polymerization)",
                            uses: "Carpet fibers, clothing"
                        }
                    },
                    polycarbonates: {
                        name: "Polycarbonate (PC)",
                        monomers: "Bisphenol A + phosgene",
                        linkage: "Carbonate group (−O−CO−O−)",
                        uses: "CDs/DVDs, safety glasses, bulletproof windows, food containers"
                    }
                },
                naturalCondensationPolymers: {
                    proteins: "Amino acids + amino acid → peptide bond (−CONH−) + H₂O; like polyamide",
                    cellulose: "Glucose + glucose → glycosidic bond (−O−) + H₂O; condensation polysaccharide",
                    DNA: "Nucleotides joined by phosphodiester bonds (condensation)"
                }
            },
            thermoplastvsThermoset: {
                thermoplastic: {
                    definition: "Linear or branched polymer chains; held by intermolecular forces only",
                    onHeating: "Softens → melts → can be reshaped; solidifies on cooling",
                    recycling: "Can be recycled by remelting",
                    examples: "PE, PP, PS, PVC, nylon, PET"
                },
                thermoset: {
                    definition: "Extensively crosslinked 3D network; covalent bonds between chains",
                    onHeating: "Chars/degrades; cannot be remelted or reshaped",
                    recycling: "Cannot be recycled by melting",
                    examples: "Epoxy resins, Bakelite, vulcanized rubber, urea-formaldehyde",
                    formationNote: "Crosslinking occurs during curing (hardening) process"
                },
                elastomers: {
                    definition: "Lightly crosslinked polymers with low glass transition temperature (Tg); can stretch and recover",
                    examples: "Natural rubber (vulcanized), silicone rubber, neoprene",
                    vulcanization: "Charles Goodyear (1839): sulfur crosslinks in rubber → less sticky, more durable"
                }
            },
            mechanicalProperties: {
                crystallinity: {
                    amorphous: "Random chain arrangement; transparent; below Tg = brittle, above = rubbery",
                    semicrystalline: "Crystalline regions + amorphous; opaque; stronger and higher Tm",
                    influencedBy: "Tacticity (isotactic/syndiotactic → more crystalline), branching (less branching → more crystalline)"
                },
                glassTransition: "Tg = temperature below which amorphous regions are 'frozen' (glassy); above Tg = rubbery",
                meltingPoint: "Tm (for crystalline regions); higher for more regular structures"
            },
            environment: {
                recyclingCodes: {
                    1: "PET - bottles (widely recycled)",
                    2: "HDPE - containers (widely recycled)",
                    3: "PVC - pipes, flooring (rarely recycled)",
                    4: "LDPE - bags, film (less commonly recycled)",
                    5: "PP - food containers (increasingly recycled)",
                    6: "PS - foam cups (rarely recycled)",
                    7: "Other/Mixed"
                },
                bioplastics: {
                    PLA: "Polylactic acid; from corn starch; compostable under industrial conditions; used for packaging, cups",
                    PHA: "Polyhydroxyalkanoates; bacterial fermentation; fully biodegradable"
                },
                microplastics: "Fragmentation of large plastics → particles <5 mm; persistent environmental pollutant",
                sustainability: "Solutions: reduce use, design for recycling, use bio-based/biodegradable alternatives, improve collection infrastructure"
            },
            applications: [
                "Packaging (PE, PP, PET) for food preservation and transport",
                "Textile industry (nylon, polyester, acrylic fibers for clothing)",
                "Medical devices (biocompatible silicone, PEEK for implants)",
                "Construction (PVC pipes, HDPE geomembranes, polycarbonate glazing)",
                "Automotive (PP bumpers, nylon gears, rubber tires)",
                "Electronics (PTFE insulation, polycarbonate housings, conductive polymers)"
            ]
        };

        return content;
    }


// ========================================
// MAIN PROBLEM PROCESSING METHODS
// ========================================

parseOrganicChemistryProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.organicTopics)) {
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
        throw new Error(`Unable to recognize organic chemistry topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.organicTopics[topicType].difficulty,
        prerequisites: this.organicTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handleOrganicChemistryProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' ||
            (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleExperimentRequest(config);
        } else {
            this.currentProblem = this.parseOrganicChemistryProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getOrganicChemistryContent(this.currentProblem);

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

            if (this.includeCommonMisconceptions) {
                this.currentContent.misconceptions = this.getMisconceptions(this.currentProblem.type);
            }

            if (this.assessmentFeedback) {
                this.currentContent.assessmentQuestions = this.getAssessmentQuestions(this.currentProblem.type);
            }

            this.contentSteps = this.generateOrganicChemistryContent(this.currentProblem, this.currentContent);

            this.generateOrganicChemistryWorkbook();

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
        throw new Error(`Failed to process organic chemistry request: ${error.message}`);
    }
}

getOrganicChemistryContent(problem) {
    const handler = this.organicTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for organic chemistry topic: ${problem.type}`);
    }

    let content = handler(problem);

    if (problem.parameters && Object.keys(problem.parameters).length > 0) {
        content = this.filterContentByParameters(content, problem.parameters);
    }

    return content;
}


/**
filterContentByParameters(content, parameters) {
    if (!parameters || Object.keys(parameters).length === 0) {
        return content;
    }

    const filtered = { ...content };

    // Filter by specific functional groups, compound classes, or reaction types
    if (parameters.specificItems && Array.isArray(parameters.specificItems)) {
        Object.keys(filtered).forEach(key => {
            if (Array.isArray(filtered[key])) {
                filtered[key] = filtered[key].filter(item => {
                    if (typeof item === 'object' && (item.name || item.type || item.group)) {
                        return parameters.specificItems.some(spec =>
                            (item.name && item.name.toLowerCase().includes(spec.toLowerCase())) ||
                            (item.type && item.type.toLowerCase().includes(spec.toLowerCase())) ||
                            (item.group && item.group.toLowerCase().includes(spec.toLowerCase()))
                        );
                    }
                    return true;
                });
            }
        });
    }

    // Filter by compound class (e.g., only alcohols, only ketones)
    if (parameters.compoundClass) {
        const cls = parameters.compoundClass.toLowerCase();
        if (filtered.mainGroups && filtered.mainGroups[cls]) {
            filtered.focusedGroup = filtered.mainGroups[cls];
        }
        if (filtered.examples) {
            filtered.examples = filtered.examples.filter(ex =>
                ex.type && ex.type.toLowerCase().includes(cls)
            );
        }
    }

    // Filter by reaction type
    if (parameters.reactionType) {
        const rxn = parameters.reactionType.toLowerCase();
        if (filtered.substitutionReactions && rxn.includes('substitut')) {
            filtered.focusedReactions = filtered.substitutionReactions;
        } else if (filtered.additionReactions && rxn.includes('addition')) {
            filtered.focusedReactions = filtered.additionReactions;
        } else if (filtered.eliminationReactions && rxn.includes('eliminat')) {
            filtered.focusedReactions = filtered.eliminationReactions;
        }
    }

    // Filter by difficulty level
    if (parameters.difficulty) {
        filtered.detailLevel = parameters.difficulty;
    }

    return filtered;
}
*/

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

    return filtered;
}


handleExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.organicExperiments[experimentId]) {
        this.currentExperiment = this.organicExperiments[experimentId];
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

findExperimentByTopic(topic) {
    const topicLower = topic.toLowerCase();

    // First: exact name match
    for (const [id, exp] of Object.entries(this.organicExperiments)) {
        if (exp.name.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Second: match by related topics
    for (const [id, exp] of Object.entries(this.organicExperiments)) {
        if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
            return exp;
        }
    }

    // Third: match by category
    for (const [id, exp] of Object.entries(this.organicExperiments)) {
        if (exp.category && exp.category.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Fourth: match by chemical keywords in experiment name
    const chemKeywords = {
        'distill': 'distillation_separation',
        'halogenat': 'halogenation_alkanes',
        'recrystall': 'recrystallization_purification',
        'chromatograph': 'tlc_chromatography',
        'tlc': 'tlc_chromatography',
        'ester': 'ester_synthesis',
        'fischer': 'ester_synthesis',
        'rf value': 'tlc_chromatography',
        'radical': 'halogenation_alkanes',
        'bromine': 'halogenation_alkanes',
        'purif': 'recrystallization_purification',
        'melting point': 'recrystallization_purification',
        'pigment': 'tlc_chromatography',
        'chlorophyll': 'tlc_chromatography'
    };

    for (const [keyword, expId] of Object.entries(chemKeywords)) {
        if (topicLower.includes(keyword) && this.organicExperiments[expId]) {
            return this.organicExperiments[expId];
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

    // Add organic-chemistry-specific sections
    if (experiment.labExperiment?.chemicalEquation) {
        content.sections.push({
            type: 'chemical_equations',
            title: 'Chemical Equations and Mechanisms',
            data: this.formatChemicalEquations(experiment.labExperiment.chemicalEquation)
        });
    }

    if (experiment.labExperiment?.reactionEquation) {
        content.sections.push({
            type: 'reaction_mechanism',
            title: 'Reaction Mechanism',
            data: this.formatReactionMechanism(experiment.labExperiment.reactionEquation)
        });
    }

    return content;
}

formatHistoricalBackground(background) {
    const formatted = [];

    const fieldLabels = {
        scientist: 'Scientist',
        year: 'Year',
        discovery: 'Discovery',
        observation: 'Key Observation',
        hypothesis: 'Hypothesis',
        significance: 'Significance',
        context: 'Historical Context',
        rule: 'Rule / Principle',
        modernView: 'Modern Understanding',
        contribution: 'Contribution',
        industrialImportance: 'Industrial Importance',
        modernOrganic: 'Modern Development',
        reaction: 'Reaction Named',
        quote: 'Notable Quote',
        etymology: 'Etymology'
    };

    Object.entries(background).forEach(([key, value]) => {
        const label = fieldLabels[key] || this.formatKey(key);

        if (Array.isArray(value)) {
            formatted.push([label, '']);
            value.forEach((item, index) => {
                if (typeof item === 'object') {
                    Object.entries(item).forEach(([k, v]) => {
                        formatted.push([`  ${this.formatKey(k)}`, v]);
                    });
                } else {
                    formatted.push([`  ${index + 1}.`, item]);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            formatted.push([label, '']);
            Object.entries(value).forEach(([k, v]) => {
                formatted.push([`  ${this.formatKey(k)}`, typeof v === 'object' ? JSON.stringify(v) : v]);
            });
        } else {
            formatted.push([label, value]);
        }
    });

    return formatted;
}

formatLabExperiment(labExp) {
    const formatted = [];

    formatted.push(['Experiment Title', labExp.title]);
    formatted.push(['Hypothesis', labExp.hypothesis]);

    if (labExp.purpose) {
        formatted.push(['Purpose', labExp.purpose]);
    }

    if (labExp.background) {
        formatted.push(['', '']);
        formatted.push(['BACKGROUND', '']);
        if (typeof labExp.background === 'object') {
            Object.entries(labExp.background).forEach(([key, value]) => {
                if (typeof value === 'object') {
                    formatted.push([`  ${this.formatKey(key)}:`, '']);
                    Object.entries(value).forEach(([k, v]) => {
                        formatted.push([`    ${this.formatKey(k)}:`, v]);
                    });
                } else {
                    formatted.push([`  ${this.formatKey(key)}:`, value]);
                }
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
        formatted.push(['MATERIALS REQUIRED', '']);
        if (Array.isArray(labExp.materials)) {
            labExp.materials.forEach(material => {
                formatted.push(['  •', material]);
            });
        } else if (typeof labExp.materials === 'object') {
            Object.entries(labExp.materials).forEach(([category, materialList]) => {
                formatted.push([`  ${this.formatKey(category)}:`, '']);
                if (Array.isArray(materialList)) {
                    materialList.forEach(material => {
                        formatted.push(['    •', material]);
                    });
                } else {
                    formatted.push(['    •', materialList]);
                }
            });
        }
    }

    if (labExp.safetyPrecautions) {
        formatted.push(['', '']);
        formatted.push(['⚠ SAFETY PRECAUTIONS', '']);
        if (Array.isArray(labExp.safetyPrecautions)) {
            labExp.safetyPrecautions.forEach(note => {
                formatted.push(['  ⚠', note]);
            });
        }
    }

    if (labExp.procedure) {
        formatted.push(['', '']);
        formatted.push(['PROCEDURE', '']);

        if (Array.isArray(labExp.procedure)) {
            let stepCounter = 0;
            labExp.procedure.forEach(step => {
                if (step.trim() === '') {
                    formatted.push(['', '']);
                } else if (
                    (step.endsWith(':') && step === step.toUpperCase()) ||
                    (step.endsWith(':') && step.startsWith('STEP'))
                ) {
                    formatted.push([step, '']);
                    stepCounter = 0;
                } else {
                    stepCounter++;
                    formatted.push([`  ${stepCounter}.`, step]);
                }
            });
        } else if (typeof labExp.procedure === 'object') {
            Object.entries(labExp.procedure).forEach(([key, value]) => {
                formatted.push([this.formatKey(key).toUpperCase() + ':', '']);
                if (Array.isArray(value)) {
                    value.forEach((step, idx) => {
                        formatted.push([`  ${idx + 1}.`, step]);
                    });
                } else if (typeof value === 'object') {
                    Object.entries(value).forEach(([subKey, subVal]) => {
                        formatted.push([`  ${this.formatKey(subKey)}:`, subVal]);
                    });
                } else {
                    formatted.push(['  ', value]);
                }
                formatted.push(['', '']);
            });
        }
    }

    if (labExp.chemicalEquation || labExp.reactionEquation) {
        const eqData = labExp.chemicalEquation || labExp.reactionEquation;
        formatted.push(['', '']);
        formatted.push(['CHEMICAL EQUATIONS', '']);
        if (typeof eqData === 'object') {
            Object.entries(eqData).forEach(([key, value]) => {
                formatted.push([`  ${this.formatKey(key)}:`, value]);
            });
        } else {
            formatted.push(['  ', eqData]);
        }
    }

    if (labExp.dataTable) {
        formatted.push(['', '']);
        formatted.push(['DATA RECORDING TABLE', '']);
        if (Array.isArray(labExp.dataTable)) {
            labExp.dataTable.forEach((row, idx) => {
                if (Array.isArray(row)) {
                    if (idx === 0) {
                        formatted.push(['  HEADERS:', row.join(' | ')]);
                    } else {
                        formatted.push(['  ', row.join(' | ')]);
                    }
                }
            });
        }
    }

    if (labExp.expectedResults) {
        formatted.push(['', '']);
        formatted.push(['EXPECTED RESULTS', '']);
        if (typeof labExp.expectedResults === 'object') {
            Object.entries(labExp.expectedResults).forEach(([key, value]) => {
                if (typeof value === 'object') {
                    formatted.push([`  ${this.formatKey(key)}:`, '']);
                    Object.entries(value).forEach(([k, v]) => {
                        formatted.push([`    ${this.formatKey(k)}:`, v]);
                    });
                } else {
                    formatted.push([`  ${this.formatKey(key)}:`, value]);
                }
            });
        } else {
            formatted.push(['  ', labExp.expectedResults]);
        }
    }

    if (labExp.observations) {
        formatted.push(['', '']);
        formatted.push(['KEY OBSERVATIONS', '']);
        if (Array.isArray(labExp.observations)) {
            labExp.observations.forEach(obs => {
                formatted.push(['  •', obs]);
            });
        }
    }

    if (labExp.analysis) {
        formatted.push(['', '']);
        formatted.push(['ANALYSIS', '']);
        if (typeof labExp.analysis === 'object') {
            Object.entries(labExp.analysis).forEach(([key, value]) => {
                formatted.push([`  ${this.formatKey(key)}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push(['    ', value]);
                }
            });
        } else if (Array.isArray(labExp.analysis)) {
            labExp.analysis.forEach(item => formatted.push(['  •', item]));
        }
    }

    if (labExp.conclusions) {
        formatted.push(['', '']);
        formatted.push(['CONCLUSIONS', '']);
        if (Array.isArray(labExp.conclusions)) {
            labExp.conclusions.forEach(conclusion => {
                formatted.push(['  •', conclusion]);
            });
        }
    }

    if (labExp.realWorldApplications) {
        formatted.push(['', '']);
        formatted.push(['REAL-WORLD APPLICATIONS', '']);
        if (Array.isArray(labExp.realWorldApplications)) {
            labExp.realWorldApplications.forEach(app => {
                formatted.push(['  •', app]);
            });
        }
    }

    if (labExp.extensions) {
        formatted.push(['', '']);
        formatted.push(['EXTENSION ACTIVITIES', '']);
        if (Array.isArray(labExp.extensions)) {
            labExp.extensions.forEach(ext => {
                formatted.push(['  •', ext]);
            });
        }
    }

    if (labExp.troubleshooting) {
        formatted.push(['', '']);
        formatted.push(['TROUBLESHOOTING', '']);
        if (Array.isArray(labExp.troubleshooting)) {
            labExp.troubleshooting.forEach(tip => {
                formatted.push(['  •', tip]);
            });
        } else if (typeof labExp.troubleshooting === 'object') {
            Object.entries(labExp.troubleshooting).forEach(([problem, solution]) => {
                formatted.push([`  Problem: ${problem}`, `Solution: ${solution}`]);
            });
        }
    }

    if (labExp.limitations) {
        formatted.push(['', '']);
        formatted.push(['LIMITATIONS', '']);
        if (Array.isArray(labExp.limitations)) {
            labExp.limitations.forEach(lim => {
                formatted.push(['  •', lim]);
            });
        }
    }

    return formatted;
}

formatChemicalEquations(equationData) {
    const formatted = [];

    if (typeof equationData === 'object') {
        Object.entries(equationData).forEach(([key, value]) => {
            formatted.push([`${this.formatKey(key)}:`, value]);
        });
    } else {
        formatted.push(['Equation:', equationData]);
    }

    return formatted;
}

formatReactionMechanism(mechanismData) {
    const formatted = [];

    if (typeof mechanismData === 'object') {
        Object.entries(mechanismData).forEach(([step, equation]) => {
            formatted.push([`${this.formatKey(step)}:`, equation]);
        });
    } else {
        formatted.push(['Mechanism:', mechanismData]);
    }

    return formatted;
}

getRelatedExperiments(topicType) {
    const related = [];

    Object.entries(this.organicExperiments).forEach(([id, experiment]) => {
        if (experiment.relatedTopics.includes(topicType)) {
            related.push({
                id: id,
                name: experiment.name,
                category: experiment.category,
                historicalScientist: experiment.historicalBackground?.scientist,
                historicalYear: experiment.historicalBackground?.year,
                labTitle: experiment.labExperiment?.title,
                hypothesis: experiment.labExperiment?.hypothesis
            });
        }
    });

    return related;
}

getMisconceptions(topicType) {
    return this.commonMisconceptions[topicType] || {};
}

getAssessmentQuestions(topicType) {
    return this.assessmentQuestions[topicType] || {};
}

// ========================================
// UTILITY AND HELPER METHODS
// ========================================

getAllExperiments() {
    return Object.entries(this.organicExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist,
        year: exp.historicalBackground?.year,
        labTitle: exp.labExperiment?.title
    }));
}

getAllTopics() {
    return Object.entries(this.organicTopics).map(([id, topic]) => ({
        id: id,
        name: topic.name,
        category: topic.category,
        description: topic.description,
        difficulty: topic.difficulty,
        prerequisites: topic.prerequisites,
        relatedExperiments: topic.relatedExperiments || []
    }));
}

getExperimentsByCategory(category) {
    return Object.entries(this.organicExperiments)
        .filter(([id, exp]) => exp.category === category)
        .map(([id, exp]) => ({
            id,
            name: exp.name,
            relatedTopics: exp.relatedTopics,
            scientist: exp.historicalBackground?.scientist
        }));
}

getTopicsByDifficulty(difficulty) {
    return Object.entries(this.organicTopics)
        .filter(([id, topic]) => topic.difficulty === difficulty)
        .map(([id, topic]) => ({
            id,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
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
            adapted.focusAreas = 'identification_and_naming';
            break;

        case 'intermediate':
            adapted.vocabulary = 'standard';
            adapted.examples = this.selectMixedExamples(content.examples);
            adapted.depth = 'moderate';
            adapted.focusAreas = 'reactions_and_properties';
            break;

        case 'advanced':
            adapted.vocabulary = 'technical';
            adapted.examples = this.selectAdvancedExamples(content.examples);
            adapted.depth = 'comprehensive';
            adapted.focusAreas = 'mechanisms_and_synthesis';
            adapted.mechanisticDetail = this.addMechanisticDetail(content);
            break;
    }

    return adapted;
}

selectBasicExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples.filter(ex =>
        !ex.complexity || ex.complexity === 'basic' || ex.complexity === 'simple'
    ).slice(0, 2);
}

selectMixedExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples.slice(0, 4);
}

selectAdvancedExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples;
}

addMechanisticDetail(content) {
    return {
        curvedArrowMechanisms: `Detailed electron-pushing mechanisms for ${content.topic}`,
        stereochemicalConsiderations: 'Stereochemical outcomes at each step',
        energyProfiles: 'Reaction coordinate diagrams for key transformations',
        regiochemistry: 'Regiochemical predictions and rationale',
        competingPathways: 'Analysis of competing reaction pathways (substitution vs elimination, etc.)'
    };
}

getContextualScenarios(topicType) {
    return this.contextualScenarios[topicType] || [];
}

getMetacognitivePrompts(topicType) {
    const topicName = this.organicTopics[topicType]?.name || topicType;

    const prompts = {
        beforeLearning: this.metacognitivePrompts.beforeLearning.map(p =>
            p.replace('{topic}', topicName)
        ),
        duringLearning: this.metacognitivePrompts.duringLearning.map(p =>
            p.replace('{topic}', topicName).replace('{related_concept}', topicName)
        ),
        afterLearning: this.metacognitivePrompts.afterLearning.map(p =>
            p.replace('{topic}', topicName)
        ),
        problemSolving: this.metacognitivePrompts.problemSolving,
        spectroscopyInterpretation: topicType === 'spectroscopy'
            ? this.metacognitivePrompts.spectroscopyInterpretation
            : []
    };

    return prompts;
}

updateLearnerProfile(topicType, performance) {
    if (performance.score >= 0.8) {
        if (!this.learnerProfile.masteredTopics.includes(topicType)) {
            this.learnerProfile.masteredTopics.push(topicType);
        }
        this.learnerProfile.strugglingTopics = this.learnerProfile.strugglingTopics
            .filter(t => t !== topicType);
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

    // Suggest next topic based on performance
    if (performance.score >= 0.8) {
        this.learnerProfile.suggestedNextTopic = this.suggestNextTopic(topicType);
    }
}

suggestNextTopic(currentTopicType) {
    const progressionMap = {
        hydrocarbons: 'functional_groups',
        functional_groups: 'organic_reactions',
        organic_reactions: 'stereochemistry',
        stereochemistry: 'spectroscopy',
        spectroscopy: 'polymers',
        polymers: null
    };

    return progressionMap[currentTopicType] || null;
}

// ========================================
// CONTENT GENERATION METHODS
// ========================================

generateOrganicChemistryContent(problem, content) {
    const contentSections = [];

    contentSections.push(this.generateOverviewSection(problem, content));

    if (content.classification || content.mainGroups) {
        contentSections.push(this.generateClassificationSection(content));
    }

    if (content.structure || content.fundamentals) {
        contentSections.push(this.generateStructureSection(content));
    }

    if (
        content.substitutionReactions ||
        content.additionReactions ||
        content.eliminationReactions ||
        content.reactionTypes
    ) {
        contentSections.push(this.generateReactionsSection(content));
    }

    if (content.techniques || content.methods) {
        contentSections.push(this.generateTechniquesSection(content));
    }

    if (content.additionPolymerization || content.condensationPolymerization) {
        contentSections.push(this.generatePolymerSection(content));
    }

    if (content.comparisonTable || content.reactivityTrends) {
        contentSections.push(this.generateComparisonSection(content));
    }

    if (content.examples) {
        contentSections.push(this.generateExamplesSection(content));
    }

    if (content.contextualScenarios) {
        contentSections.push(this.generateContextualScenariosSection(content));
    }

    if (content.misconceptions) {
        contentSections.push(this.generateMisconceptionsSection(content));
    }

    if (this.includeExperiments && content.relatedExperiments) {
        contentSections.push(this.generateRelatedExperimentsSection(content));
    }

    if (content.metacognitivePrompts) {
        contentSections.push(this.generateMetacognitiveSection(content));
    }

    if (content.assessmentQuestions) {
        contentSections.push(this.generateAssessmentSection(content));
    }

    if (content.applications) {
        contentSections.push(this.generateApplicationsSection(content));
    }

    return contentSections;
}

generateOverviewSection(problem, content) {
    return {
        type: 'overview',
        title: content.topic,
        category: content.category,
        summary: content.summary,
        difficulty: problem.difficulty,
        prerequisites: problem.prerequisites
    };
}

generateClassificationSection(content) {
    return {
        type: 'classification',
        title: 'Classification and Types',
        classification: content.classification || null,
        mainGroups: content.mainGroups || null
    };
}

generateStructureSection(content) {
    return {
        type: 'structure',
        title: 'Structure and Bonding',
        structure: content.structure || null,
        fundamentals: content.fundamentals || null,
        stereochemistry: content.stereochemistry || null,
        degreeOfUnsaturation: content.degreeOfUnsaturation || null
    };
}

generateReactionsSection(content) {
    return {
        type: 'reactions',
        title: 'Reactions and Mechanisms',
        substitution: content.substitutionReactions || null,
        addition: content.additionReactions || null,
        elimination: content.eliminationReactions || null,
        reactionTypes: content.reactionTypes || null,
        energyProfiles: content.energyProfiles || null
    };
}

generateTechniquesSection(content) {
    return {
        type: 'techniques',
        title: 'Spectroscopic and Analytical Techniques',
        techniques: content.techniques || null,
        structureElucidation: content.structureElucidation || null
    };
}

generatePolymerSection(content) {
    return {
        type: 'polymerization',
        title: 'Polymerization Methods',
        addition: content.additionPolymerization || null,
        condensation: content.condensationPolymerization || null,
        thermoplastvsThermoset: content.thermoplastvsThermoset || null,
        environment: content.environment || null
    };
}

generateComparisonSection(content) {
    return {
        type: 'comparison',
        title: 'Comparative Analysis',
        comparisonTable: content.comparisonTable || null,
        reactivityTrends: content.reactivityTrends || null,
        comparison: content.comparison || null
    };
}

generateExamplesSection(content) {
    return {
        type: 'examples',
        title: 'Key Examples',
        examples: content.examples
    };
}

generateContextualScenariosSection(content) {
    return {
        type: 'contextual_scenarios',
        title: 'Real-World Contexts and Applications',
        scenarios: content.contextualScenarios
    };
}

generateMisconceptionsSection(content) {
    return {
        type: 'misconceptions',
        title: 'Common Misconceptions and Clarifications',
        misconceptions: content.misconceptions
    };
}

generateRelatedExperimentsSection(content) {
    return {
        type: 'related_experiments',
        title: 'Related Laboratory Experiments',
        experiments: content.relatedExperiments
    };
}

generateMetacognitiveSection(content) {
    return {
        type: 'metacognitive_prompts',
        title: 'Learning Reflection Questions',
        prompts: content.metacognitivePrompts
    };
}

generateAssessmentSection(content) {
    return {
        type: 'assessment',
        title: 'Assessment Questions (Bloom\'s Taxonomy)',
        questions: content.assessmentQuestions
    };
}

generateApplicationsSection(content) {
    return {
        type: 'applications',
        title: 'Industrial and Real-World Applications',
        applications: content.applications
    };
}

// ========================================
// ORGANIC CHEMISTRY SPECIFIC HELPER METHODS
// ========================================

getTopicRelevance(topicType) {
    const relevance = {
        hydrocarbons: "Hydrocarbons are the backbone of all organic chemistry and the basis of the fossil fuel industry",
        functional_groups: "Functional groups determine chemical reactivity and are central to drug design and synthesis",
        organic_reactions: "Understanding mechanisms allows chemists to predict products and design syntheses",
        stereochemistry: "Stereochemistry profoundly affects biological activity; essential for pharmaceutical chemistry",
        spectroscopy: "Spectroscopic methods are the primary tools for structural identification in modern chemistry",
        polymers: "Polymers are among the most commercially important materials and exemplify condensation/addition chemistry"
    };

    return relevance[topicType] || "Important organic chemistry concept";
}

suggestRelatedTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        hydrocarbons: ['functional_groups', 'organic_reactions'],
        functional_groups: ['hydrocarbons', 'organic_reactions', 'spectroscopy'],
        organic_reactions: ['functional_groups', 'stereochemistry'],
        stereochemistry: ['organic_reactions', 'spectroscopy'],
        spectroscopy: ['functional_groups', 'organic_reactions'],
        polymers: ['organic_reactions', 'functional_groups']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.organicTopics[type]?.name,
        description: this.organicTopics[type]?.description
    }));
}

generateOrganicChemistryDiagramData() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    this.diagramData = {
        type: type,
        diagrams: this.getRelevantOrganicDiagrams(type),
        placeholder: true,
        note: "Structural diagrams will be rendered for relevant compounds and mechanisms"
    };
}

getRelevantOrganicDiagrams(type) {
    const diagramTypes = {
        hydrocarbons: [
            'methane_structure',
            'ethene_pi_bond',
            'benzene_delocalization',
            'alkane_homologous_series',
            'geometric_isomers_but2ene'
        ],
        functional_groups: [
            'functional_group_overview_table',
            'alcohol_oxidation_ladder',
            'carbonyl_group_structure',
            'carboxylic_acid_dimer',
            'amine_basicity_comparison'
        ],
        organic_reactions: [
            'sn2_mechanism_inversion',
            'sn1_carbocation_intermediate',
            'e2_antiperiplanar',
            'markovnikov_addition',
            'bromonium_ion_anti_addition',
            'reaction_energy_profile'
        ],
        stereochemistry: [
            'chiral_centre_four_groups',
            'enantiomers_mirror_image',
            'cip_priority_assignment',
            'ez_alkene_isomers',
            'meso_compound_symmetry',
            'fischer_projection'
        ],
        spectroscopy: [
            'ir_spectrum_carbonyl',
            'h_nmr_splitting_patterns',
            'mass_spectrum_fragmentation',
            'uv_vis_conjugation',
            'nmr_chemical_shift_table'
        ],
        polymers: [
            'addition_polymerization_mechanism',
            'condensation_polymerization_nylon',
            'polyethylene_repeat_unit',
            'pet_polyester_structure',
            'thermoplastic_vs_thermoset'
        ]
    };

    return diagramTypes[type] || [];
}

generateGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract from key definitions in lessons
    const lesson = this.lessons[this.currentProblem?.type];
    if (lesson?.keyDefinitions) {
        Object.entries(lesson.keyDefinitions).forEach(([term, def]) => {
            glossary[term] = typeof def === 'string' ? def : def.definition || JSON.stringify(def);
        });
    }

    // Extract from organic symbols
    Object.entries(this.organicSymbols).forEach(([key, symbol]) => {
        if (key.length > 2) {
            glossary[key] = symbol;
        }
    });

    // Add topic-specific terminology
    if (this.currentContent?.fundamentalConcepts) {
        Object.entries(this.currentContent.fundamentalConcepts).forEach(([term, data]) => {
            if (data.definition) {
                glossary[term] = data.definition;
            } else if (data.meaning) {
                glossary[term] = data.meaning;
            }
        });
    }

    return glossary;
}

generateOrganicAnalogy(concept) {
    const analogies = {
        // Structure analogies
        chirality: "Like left and right hands — identical atoms arranged differently, non-superimposable mirror images",
        enantiomers: "Like a pair of gloves — identical in composition but one fits the left hand, one the right",
        functionalGroup: "Like different tools in a toolbox — each has a specific function regardless of the handle",
        homologousSeries: "Like a ladder — each rung adds one CH₂, with gradually changing properties",
        aromaticity: "Like a roundabout — electrons flow continuously around the ring rather than being fixed",

        // Bonding analogies
        hydrogenBonding: "Like Velcro — weak individually but strong when many are present; explains high boiling points",
        londonForces: "Like static electricity — temporary, but larger molecules have more 'surface area' for sticking",
        resonance: "Like a hybrid car — the true structure is a blend, not one structure or the other",
        doubleBond: "Like a railway track — two parallel connections, one sigma and one pi; rotation is restricted",

        // Reaction analogies
        nucleophile: "Like a moth attracted to light — seeks out electron-poor (positive/partially positive) centres",
        electrophile: "Like a vacuum cleaner — seeks electron-rich areas to pull electrons toward it",
        carbocation: "Like a beggar holding out an empty hand — very eager to accept electrons from a donor",
        sn2Backside: "Like an umbrella turning inside out in the wind — inversion of the central carbon",
        sn1Carbocation: "Like a revolving door — ionization creates a flat, open intermediate that can be entered from either side",
        markovnikovRule: "Rich get richer: the carbon that already has more H atoms gets the extra H from HX",
        catalysis: "Like a ramp instead of a wall — lowers the energy barrier without changing the start or finish",
        leChatelierPrinciple: "Like a see-saw — disturbing the balance causes the reaction to shift to restore it",

        // Spectroscopy analogies
        NMRChemicalShift: "Like living in a neighbourhood — nearby electronegative groups change the 'environment' felt by H atoms",
        nmrSplitting: "Like neighbours waving — adjacent H atoms 'communicate' and split each other's signals",
        IRAbsorption: "Like a tuning fork — each bond vibrates at a specific frequency matching certain IR radiation",
        massSpecFragmentation: "Like a pinball machine — the molecular ion breaks apart into characteristic fragments",

        // Polymer analogies
        polymer: "Like a pearl necklace — many identical or similar beads (monomers) strung together in a chain",
        additionPolymerization: "Like a chain of paper clips — each clip (monomer) opens its double bond and hooks onto the next",
        condensationPolymerization: "Like snapping Lego bricks together — each connection releases a small molecule (water), like the click sound",
        crosslinking: "Like a fisherman's net — extra connections between chains make the material stronger and more rigid"
    };

    return analogies[concept] || "An important organic chemistry concept with wide-ranging applications";
}

adaptOrganicLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                'nucleophile': 'electron donor',
                'electrophile': 'electron acceptor',
                'bimolecular': 'two-molecule',
                'unimolecular': 'one-molecule',
                'homolytic fission': 'equal bond breaking (each atom gets one electron)',
                'heterolytic fission': 'unequal bond breaking (one atom gets both electrons)',
                'deprotonation': 'loss of a proton (H⁺)',
                'protonation': 'gaining a proton (H⁺)',
                'carbocation': 'positively charged carbon intermediate',
                'carbanion': 'negatively charged carbon intermediate',
                'stereocentre': 'carbon with four different groups',
                'enantiomers': 'non-superimposable mirror images',
                'diastereomers': 'stereoisomers that are not mirror images'
            }
        },
        intermediate: {
            replacements: {
                'nucleophilic substitution': 'nucleophilic substitution (SN)',
                'electrophilic addition': 'electrophilic addition (EA)',
                'bimolecular': 'bimolecular (involves two species in rate-limiting step)'
            }
        },
        advanced: {
            replacements: {
                'nucleophile': 'nucleophile (Lewis base, electron-pair donor)',
                'electrophile': 'electrophile (Lewis acid, electron-pair acceptor)',
                'SN2': 'SN2 (concerted backside attack, second-order kinetics)',
                'SN1': 'SN1 (stepwise via carbocation, first-order kinetics)',
                'elimination': 'β-elimination (E1 or E2 depending on conditions)',
                'Markovnikov': "Markovnikov's rule (addition via more stable carbocation)"
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

addOrganicConceptualConnections(content) {
    if (!this.includeConceptualConnections) return content;

    const connections = {
        hydrocarbons: "Hydrocarbons are the starting point for all organic chemistry. Adding functional groups to hydrocarbon frameworks gives compounds with specific reactivity. Aromatic hydrocarbons follow different rules from aliphatic ones. Carbon's tetravalency and ability to form stable C−C chains is why organic chemistry is so vast.",
        functional_groups: "Functional groups are the reactive sites on organic molecules. Polarity of functional groups determines intermolecular forces, physical properties, and reactivity. Understanding which functional groups are present is the first step in predicting reactions. Groups can be interconverted through oxidation, reduction, and other reactions.",
        organic_reactions: "Reactions are rationalised through mechanisms — step-by-step electron movements. The same principles (nucleophile attacks electrophile, electrons flow from high to low density) apply throughout organic chemistry. Thermodynamics determines whether a reaction can occur; kinetics determines how fast. Many reactions are in competition (substitution vs elimination).",
        stereochemistry: "Stereochemistry connects structure to biological activity and reaction outcomes. The same connectivity with different 3D arrangement can mean the difference between an active drug and an inactive (or toxic) one. Reactions have sterochemical consequences (SN2 → inversion; E2 → anti elimination).",
        spectroscopy: "Spectroscopy connects the physical interaction of matter with radiation to structural information. Each technique is complementary: IR confirms functional groups, NMR reveals carbon skeleton and H environments, MS gives molecular formula. Together they allow unambiguous structure determination.",
        polymers: "Polymers exemplify the power of simple repeating reactions. Addition polymerization uses alkene chemistry; condensation polymerization uses functional group reactions (esterification, amide formation) on a grand scale. Polymer properties emerge from chain length, branching, crosslinking, and tacticity."
    };

    content.conceptualConnections = connections[this.currentProblem?.type] ||
        "This topic connects to fundamental principles of organic chemistry";

    return content;
}

addOrganicComparativeContext(content) {
    if (!this.includeComparisons) return content;

    const comparativeData = {
        hydrocarbons: {
            bondTypes: "Alkane (C−C, sp³) vs alkene (C=C, sp²) vs alkyne (C≡C, sp): reactivity increases with unsaturation",
            aromaticVsAliphatic: "Aromatic: stable, electrophilic substitution preferred; aliphatic alkene: reactive, electrophilic addition"
        },
        functional_groups: {
            carbonylReactivity: "Acid chloride > anhydride > aldehyde > ketone > ester > amide (decreasing electrophilicity of C=O)",
            acidStrength: "Carboxylic acid (pKa ~4.5) >> phenol (pKa ~10) >> alcohol (pKa ~16) >> terminal alkyne (pKa ~25)"
        },
        organic_reactions: {
            sn1vsSN2: "SN2: concerted, inversion, favored by primary substrate + strong Nu + aprotic solvent. SN1: stepwise, racemization, favored by tertiary + weak Nu + protic solvent",
            additionVsSubstitution: "Alkenes: addition (π bond reactive). Benzene: substitution (aromaticity preserved). Choice depends on substrate."
        },
        stereochemistry: {
            enantiomersVsDiastereomers: "Enantiomers: identical physical properties except optical rotation; same reactions with achiral reagents. Diastereomers: different physical properties; different reaction rates.",
            mesovRacemic: "Both optically inactive, but meso = single compound; racemic = equimolar mixture of two enantiomers"
        },
        spectroscopy: {
            irvsNMR: "IR: quick functional group identification; NMR: detailed structural connectivity; both needed for full determination",
            H1vsC13NMR: "¹H NMR: faster, more sensitive, gives splitting patterns; ¹³C NMR: wider range, one peak per C, no splitting in broadband mode"
        },
        polymers: {
            additionVsCondensation: "Addition: no byproduct, alkene monomers, chain-growth. Condensation: H₂O lost, bifunctional monomers, step-growth",
            thermoplasticVsThermoset: "Thermoplastic: linear/branched chains, meltable, recyclable. Thermoset: crosslinked 3D network, not meltable, not recyclable"
        }
    };

    if (comparativeData[this.currentProblem?.type]) {
        content.comparativeContext = comparativeData[this.currentProblem.type];
    }

    return content;
}

validateOrganicChemistryContent(content) {
    const validationResults = {
        isValid: true,
        warnings: [],
        suggestions: []
    };

    if (!content.topic) {
        validationResults.warnings.push("Missing topic title");
        validationResults.isValid = false;
    }

    if (!content.summary) {
        validationResults.suggestions.push("Consider adding a summary");
    }

    const hasSubstantiveContent =
        content.classification ||
        content.mainGroups ||
        content.substitutionReactions ||
        content.additionReactions ||
        content.techniques ||
        content.fundamentals;

    if (!hasSubstantiveContent) {
        validationResults.warnings.push("Limited substantive content detected");
    }

    if (!content.examples) {
        validationResults.suggestions.push("Consider adding concrete examples of compounds");
    }

    if (!content.applications) {
        validationResults.suggestions.push("Consider adding real-world applications");
    }

    return validationResults;
}

calculateOrganicContentCompleteness() {
    if (!this.currentContent) return 0;

    let score = 0;
    const maxScore = 10;

    if (this.currentContent.topic) score += 1;
    if (this.currentContent.summary) score += 1;
    if (this.currentContent.examples) score += 1;
    if (this.currentContent.applications) score += 1;

    const hasMainContent =
        this.currentContent.classification ||
        this.currentContent.mainGroups ||
        this.currentContent.substitutionReactions ||
        this.currentContent.techniques ||
        this.currentContent.additionPolymerization;
    if (hasMainContent) score += 2;

    if (this.currentContent.assessmentQuestions) score += 1;
    if (this.currentContent.contextualScenarios) score += 1;
    if (this.currentContent.misconceptions) score += 1;
    if (this.currentContent.relatedExperiments?.length > 0) score += 1;

    return Math.round((score / maxScore) * 100);
}

getOrganicContentQualityMetrics() {
    return {
        completeness: this.calculateOrganicContentCompleteness(),
        hasExamples: !!this.currentContent?.examples,
        hasApplications: !!this.currentContent?.applications,
        hasContextualScenarios: !!this.currentContent?.contextualScenarios,
        hasMisconceptions: !!this.currentContent?.misconceptions,
        hasAssessmentQuestions: !!this.currentContent?.assessmentQuestions,
        detailLevel: this.explanationLevel,
        includesVisualizations: this.includeVisualizations,
        includesExperiments: this.includeExperiments,
        adaptiveDifficulty: this.adaptiveDifficulty,
        metacognitiveSupport: this.metacognitiveSupport
    };
}

generateOrganicContentSummary() {
    if (!this.currentContent) return null;

    const summary = {
        topic: this.currentContent.topic,
        category: this.currentContent.category,
        summary: this.currentContent.summary,
        keyPoints: [],
        coverage: {},
        difficulty: this.currentProblem?.difficulty
    };

    if (this.currentContent.classification || this.currentContent.mainGroups) {
        summary.keyPoints.push("Classification and types covered");
        const groups = this.currentContent.mainGroups || this.currentContent.classification;
        summary.coverage.groups = groups ? Object.keys(groups).length : 0;
    }

    if (this.currentContent.examples) {
        summary.keyPoints.push("Compound examples included");
        summary.coverage.examples = Array.isArray(this.currentContent.examples)
            ? this.currentContent.examples.length : 'multiple';
    }

    if (this.currentContent.applications) {
        summary.keyPoints.push("Real-world applications discussed");
        summary.coverage.applications = true;
    }

    if (this.currentContent.relatedExperiments) {
        summary.keyPoints.push("Laboratory experiments linked");
        summary.coverage.experiments = this.currentContent.relatedExperiments.length;
    }

    return summary;
}

assessOrganicContentDifficulty() {
    if (!this.currentContent) return 'unknown';

    let difficultyScore = 0;

    const basicTopics = ['hydrocarbons'];
    const intermediateTopics = ['functional_groups', 'polymers'];
    const advancedTopics = ['organic_reactions', 'stereochemistry', 'spectroscopy'];

    if (basicTopics.includes(this.currentProblem?.type)) {
        difficultyScore += 1;
    } else if (intermediateTopics.includes(this.currentProblem?.type)) {
        difficultyScore += 2;
    } else if (advancedTopics.includes(this.currentProblem?.type)) {
        difficultyScore += 3;
    }

    if (this.explanationLevel === 'advanced') difficultyScore += 1;
    if (this.explanationLevel === 'basic') difficultyScore -= 1;

    if (difficultyScore <= 1) return 'beginner';
    if (difficultyScore <= 3) return 'intermediate';
    return 'advanced';
}

generateOrganicLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        hydrocarbons: [
            "Name and draw structural formulae for alkanes, alkenes, alkynes, and simple arenes using IUPAC nomenclature",
            "Identify and explain structural and geometric isomerism in hydrocarbons",
            "Predict products of combustion, halogenation, and addition reactions",
            "Explain the concept of aromaticity and why benzene undergoes substitution rather than addition",
            "Calculate degree of unsaturation from molecular formula"
        ],
        functional_groups: [
            "Identify and name the major organic functional groups from structural formulae",
            "Predict physical properties (boiling point, solubility) from functional group analysis",
            "Describe characteristic reactions of alcohols, aldehydes, ketones, carboxylic acids, and amines",
            "Explain trends in acidity and basicity in terms of structure and resonance",
            "Distinguish between isomeric functional group compounds using chemical tests and spectroscopy"
        ],
        organic_reactions: [
            "Explain the difference between SN1 and SN2 mechanisms in terms of kinetics and stereochemistry",
            "Predict the major product of nucleophilic substitution reactions given substrate and conditions",
            "Apply Markovnikov's rule and anti-Markovnikov conditions to electrophilic addition",
            "Draw complete electron-pushing mechanisms using curved arrow notation",
            "Distinguish between elimination and substitution products based on substrate and reagent"
        ],
        stereochemistry: [
            "Identify stereocentres and determine R or S configuration using CIP rules",
            "Distinguish between enantiomers, diastereomers, and meso compounds",
            "Assign E or Z configuration to geometric isomers of alkenes",
            "Explain the concept of optical activity and predict activity of pure enantiomers vs racemic mixtures",
            "Rationalise the pharmacological importance of stereochemistry with specific examples"
        ],
        spectroscopy: [
            "Identify functional groups from key IR absorption wavenumbers",
            "Interpret ¹H NMR spectra in terms of chemical shift, integration, and splitting patterns",
            "Determine molecular mass and identify molecular formula from mass spectra",
            "Apply the degree of unsaturation formula to narrow down possible structures",
            "Combine spectral data from multiple techniques to propose a complete structure"
        ],
        polymers: [
            "Distinguish between addition and condensation polymerization with examples",
            "Draw the repeat unit of common addition polymers from their monomers",
            "Identify the functional group linkage in polyesters and polyamides",
            "Compare properties and applications of thermoplastic vs thermosetting polymers",
            "Discuss environmental implications of synthetic polymers and sustainable alternatives"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand the key structural features of organic compounds in this topic",
        "Predict chemical reactions and properties based on functional group analysis",
        "Connect structures to spectroscopic signatures",
        "Apply organic chemistry principles to real-world examples"
    ];
}

identifyOrganicPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        hydrocarbons: [
            "Atomic structure (electron configuration, valence electrons)",
            "Chemical bonding (covalent bonding, sigma and pi bonds)",
            "Molecular geometry (VSEPR theory, bond angles)",
            "Basic algebra for formula manipulation"
        ],
        functional_groups: [
            "Hydrocarbons (nomenclature and basic structure)",
            "Electronegativity and polarity",
            "Intermolecular forces (H-bonding, London dispersion, dipole-dipole)",
            "Acid-base chemistry (Brønsted-Lowry, pKa concept)"
        ],
        organic_reactions: [
            "Functional groups (especially alcohols, alkyl halides, carbonyl compounds, amines)",
            "Electronegativity and polarity (to identify nucleophilic/electrophilic sites)",
            "Thermodynamics (ΔG, activation energy, equilibrium)",
            "Basic kinetics (rate equations, rate-determining step)"
        ],
        stereochemistry: [
            "Hydrocarbons and functional groups (naming and structures)",
            "Molecular geometry (sp³ tetrahedral, sp² trigonal planar)",
            "Understanding of structural isomers (constitutional isomers)",
            "Organic reactions (to understand sterochemical outcomes)"
        ],
        spectroscopy: [
            "Functional groups (to interpret IR and NMR data)",
            "Electromagnetic spectrum (UV, IR, radiofrequency regions)",
            "Atomic structure (nuclear spin for NMR)",
            "Organic reactions (to rationalise fragmentation in MS)"
        ],
        polymers: [
            "Hydrocarbons (alkenes for addition polymerization)",
            "Functional groups (esters and amides for condensation polymers)",
            "Organic reactions (addition and condensation reaction mechanisms)",
            "Basic thermodynamics (to understand polymerization driving forces)"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "Basic chemistry (atomic structure, bonding)",
        "Algebra and quantitative reasoning"
    ];
}

generateOrganicStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        hydrocarbons: [
            "Build physical models (ball-and-stick) to visualize 3D structures",
            "Practice IUPAC naming systematically: find longest chain, number from correct end, name substituents",
            "Memorize the general formulae: alkane CₙH₂ₙ₊₂, alkene CₙH₂ₙ, alkyne CₙH₂ₙ₋₂",
            "Always test for aromatic character with degree of unsaturation (DoU = 4 suggests benzene ring)",
            "Use color-coding for different bond types when drawing structures"
        ],
        functional_groups: [
            "Create a functional group 'cheat sheet' with structure, key reactions, and example compound",
            "Group functional groups by the element they contain (O-containing, N-containing, etc.)",
            "Practice predicting boiling points by considering H-bonding and chain length",
            "Learn the oxidation 'ladder': alcohol → aldehyde/ketone → carboxylic acid",
            "Remember: Tollens' and Fehling's tests distinguish aldehydes from ketones"
        ],
        organic_reactions: [
            "Always draw the mechanism with curved arrows — do not skip this step",
            "Identify the nucleophile and electrophile first before drawing any arrows",
            "For SN1/SN2: check substrate (1°, 2°, 3°) and nucleophile strength first",
            "Recall Markovnikov's rule: H⁺ adds to the carbon that already has MORE H atoms",
            "Practice predicting stereochemistry: SN2 → inversion; SN1 → racemization; E2 → anti"
        ],
        stereochemistry: [
            "Use molecular models — stereochemistry is a 3D topic and cannot be fully understood from 2D",
            "For R/S: assign priorities 1-4 by atomic number, then orient group 4 away from you",
            "Remember: R/S tells you configuration; (+)/(−) tells you optical rotation — they are NOT directly related",
            "Check for internal symmetry before calling a compound chiral (could be meso)",
            "For E/Z: apply CIP to each end of the double bond separately"
        ],
        spectroscopy: [
            "Always start with degree of unsaturation (DoU) from molecular formula — it constrains possibilities",
            "Memorize the key IR wavenumbers: broad 2500-3300 = carboxylic acid; 3200-3550 = alcohol; 1715 = ketone; 1735 = ester",
            "For NMR: remember the rough ranges — aromatic ~7 ppm, aldehyde ~10 ppm, alkyl ~1-3 ppm",
            "Integration tells you RATIO of H atoms; chemical shift tells you ENVIRONMENT",
            "Work systematically: MS → formula → DoU → IR functional groups → NMR connectivity → propose structure"
        ],
        polymers: [
            "Draw out the monomers and the repeat unit side by side to see the structural relationship",
            "Condensation polymers always have a functional group linkage (ester, amide) and lose a small molecule",
            "Addition polymers: just open the double bond and connect — no atoms are lost",
            "Connect to functional group chemistry: polyesters use esterification; polyamides use amide formation",
            "Remember the naming convention for nylons: Nylon 6,6 = 6C diamine + 6C diacid; Nylon 6 = single 6C monomer"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Draw structures whenever possible — organic chemistry is very visual",
        "Practice writing reactions and mechanisms regularly",
        "Connect new reactions to ones you already know",
        "Look for patterns: similar functional groups react in similar ways"
    ];
}

generateOrganicProcessTimeline(processName) {
    const timelines = {
        'Structure Determination Strategy': [
            { step: '1. Molecular formula', action: 'Obtain from high-resolution MS or elemental analysis' },
            { step: '2. Degree of unsaturation', action: 'Calculate DoU = (2C+2+N−H−X)/2; DoU ≥ 4 suggests aromatic' },
            { step: '3. IR interpretation', action: 'Identify functional groups (C=O? O−H? N−H?)' },
            { step: '4. ¹H NMR analysis', action: 'Count environments; read chemical shifts; note integration and splitting' },
            { step: '5. ¹³C NMR / DEPT', action: 'Count carbons; identify C=O (>160 ppm); distinguish CH₃/CH₂/CH/C' },
            { step: '6. MS fragments', action: 'Identify characteristic losses; confirm molecular ion' },
            { step: '7. Propose structure', action: 'Build structure consistent with ALL data; check molecular formula' },
            { step: '8. Verify', action: 'Confirm each spectral feature is explained by proposed structure' }
        ],
        'Reaction Mechanism Drawing': [
            { step: '1. Identify substrate', action: 'Draw the starting material; label functional groups' },
            { step: '2. Identify reagent', action: 'Is it nucleophilic? Electrophilic? Base? Acid? Radical initiator?' },
            { step: '3. Find reactive sites', action: 'Locate electrophilic centre in substrate (or nucleophilic site for electrophilic attack)' },
            { step: '4. Draw first step', action: 'Move electron pair with curved arrow from Nu/e-source to electrophile' },
            { step: '5. Draw intermediate', action: 'Show any ion or radical intermediate formed' },
            { step: '6. Complete mechanism', action: 'Continue until product reached; show all steps' },
            { step: '7. Check atoms', action: 'Verify atom count balances; check all valences are correct' },
            { step: '8. State stereochemistry', action: 'Specify stereochemical outcome (inversion, retention, racemization)' }
        ],
        'Synthesis Planning (Retrosynthesis)': [
            { step: '1. Identify target', action: 'Draw the target molecule and identify its functional groups' },
            { step: '2. Last step', action: 'What reaction could form the final bond or functional group?' },
            { step: '3. Work backwards', action: 'Identify precursor(s) for each step' },
            { step: '4. Check availability', action: 'Are starting materials commercially available or simple?' },
            { step: '5. Forward synthesis', action: 'Write the synthesis forward with all reagents and conditions' },
            { step: '6. Stereochemistry', action: 'Check that each step gives correct stereochemical outcome' },
            { step: '7. Protecting groups', action: 'Are any functional groups sensitive to required conditions?' }
        ],
        'IUPAC Naming Procedure': [
            { step: '1. Find longest chain', action: 'Identify the longest continuous carbon chain = parent chain' },
            { step: '2. Identify suffix', action: 'Alkane (−ane), alkene (−ene), alkyne (−yne), or functional group suffix' },
            { step: '3. Number the chain', action: 'Number from end that gives lowest locants to substituents (or multiple bond)' },
            { step: '4. Name substituents', action: 'Identify and name branches (methyl, ethyl, etc.) and other substituents' },
            { step: '5. Alphabetical order', action: 'List substituents alphabetically (ignoring di-, tri- prefixes)' },
            { step: '6. Assemble name', action: 'Combine: locants-substituents-parent chain-suffix' },
            { step: '7. Check stereochemistry', action: 'Add (R)/(S) or (E)/(Z) if required by the structure' }
        ]
    };

    return timelines[processName] || [];
}

generateOrganicContentHierarchy() {
    if (!this.currentContent) return null;

    const hierarchy = {
        root: this.currentContent.topic,
        children: []
    };

    if (this.currentContent.classification || this.currentContent.mainGroups) {
        const groups = this.currentContent.mainGroups || this.currentContent.classification;
        hierarchy.children.push({
            name: 'Classification',
            type: 'section',
            subItems: groups ? Object.keys(groups) : []
        });
    }

    if (this.currentContent.structure || this.currentContent.fundamentals) {
        hierarchy.children.push({
            name: 'Structure and Bonding',
            type: 'section'
        });
    }

    if (
        this.currentContent.substitutionReactions ||
        this.currentContent.additionReactions ||
        this.currentContent.reactionTypes
    ) {
        hierarchy.children.push({
            name: 'Reactions and Mechanisms',
            type: 'section'
        });
    }

    if (this.currentContent.examples) {
        hierarchy.children.push({
            name: 'Key Examples',
            type: 'section',
            count: Array.isArray(this.currentContent.examples) ? this.currentContent.examples.length : null
        });
    }

    if (this.currentContent.applications) {
        hierarchy.children.push({
            name: 'Applications',
            type: 'section'
        });
    }

    return hierarchy;
}

formatKey(key) {
    return key
        .replace(/_/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .replace(/\b\w/g, c => c.toUpperCase());
}

waitForDiagrams() {
    if (this.diagramsPromise) {
        return this.diagramsPromise;
    }
    return Promise.resolve(this.renderedDiagrams);
}




// ========================================
// WORKBOOK GENERATION METHODS
// ========================================

generateOrganicChemistryWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Organic Chemistry Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generateOrganicDiagramDataAsync();
    }

    workbook.sections = [
        this.createProblemSection(),
        this.createContentOverviewSection(),
        this.createDetailedContentSection(),
        this.createDiagramsPlaceholderSection(),
        this.createClassificationSection(),
        this.createStructureAndBondingSection(),
        this.createReactionsSection(),
        this.createChemicalTestsSection(),
        this.createSpectroscopySection(),
        this.createComparisonsWorkbookSection(),
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
    workbook.title = 'Organic Chemistry Experiment Workbook';

    workbook.sections = experimentContent.sections.map(section => ({
        title: section.title,
        type: section.type,
        data: section.data
    }));

    // Add related topics section
    if (experimentContent.relatedTopics) {
        workbook.sections.push({
            title: 'Related Organic Chemistry Topics',
            type: 'related_topics',
            data: experimentContent.relatedTopics.map(topic => [
                this.organicTopics[topic]?.name || topic,
                this.organicTopics[topic]?.description || ''
            ])
        });
    }

    // Add safety summary section (important for chemistry labs)
    workbook.sections.push(this.createSafetySummarySection(experimentContent));

    // Add learning objectives section
    workbook.sections.push(this.createExperimentLearningObjectivesSection(experimentContent));

    this.currentWorkbook = workbook;
}

// ========================================
// ASYNC DIAGRAM GENERATION
// ========================================

async generateOrganicDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    const diagramKeys = this.getRelevantOrganicDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Organic chemistry structural diagrams and mechanisms"
    };

    if (diagramKeys.length > 0) {
        await this.renderDiagramsForTopic(diagramKeys);
        this.diagramData.status = 'complete';
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
            // Check cache first
            if (this.renderedDiagrams.has(diagramKey)) {
                this.diagramData.renderedImages.push(this.renderedDiagrams.get(diagramKey));
                continue;
            }

            // Render the diagram using ChemistryDiagramsRenderer
            const canvas = await this.diagramRenderer.renderDiagram(
                diagramKey,
                0,
                0,
                this.diagramWidth,
                this.diagramHeight,
                {
                    showLabels: true,
                    backgroundColor: '#FFFFFF',
                    showGrid: false,        // Usually false for organic structures
                    showAxes: false,        // Usually false for structural diagrams
                    showBondAngles: true,   // Organic-specific: show bond angles
                    showElectrons: true,    // Show lone pairs where relevant
                    colorByElement: true    // Color-code atoms by element
                }
            );

            const pngBuffer = await canvas.encode('png');

            const diagramData = {
                key: diagramKey,
                buffer: pngBuffer,
                width: this.diagramWidth,
                height: this.diagramHeight,
                type: 'png'
            };

            this.renderedDiagrams.set(diagramKey, diagramData);
            this.diagramData.renderedImages.push(diagramData);

        } catch (error) {
            console.error(`Failed to render organic diagram ${diagramKey}:`, error);
            this.diagramData.renderedImages.push({
                key: diagramKey,
                error: error.message,
                type: 'error'
            });
        }
    }
}

createDiagramsPlaceholderSection() {
    if (!this.includeDiagramsInWorkbook) {
        return null;
    }

    return {
        title: 'Structural Diagrams and Mechanisms',
        type: 'diagrams',
        status: 'loading',
        diagrams: [],
        note: 'Organic chemistry diagrams are being rendered...'
    };
}

updateDiagramsSection() {
    if (!this.currentWorkbook || !this.diagramData) return;

    const diagramSectionIndex = this.currentWorkbook.sections.findIndex(
        section => section.type === 'diagrams'
    );

    if (diagramSectionIndex === -1) return;

    const diagramSection = {
        title: 'Structural Diagrams and Mechanisms',
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
                type: 'image',
                caption: this.getDiagramCaption(diagram.key)
            });
        }
    }

    this.currentWorkbook.sections[diagramSectionIndex] = diagramSection;
}

async waitForDiagrams() {
    if (this.diagramsPromise) {
        await this.diagramsPromise;
    }
    return this.diagramData;
}

areDiagramsReady() {
    return this.diagramData && this.diagramData.status === 'complete';
}

// ========================================
// DIAGRAM KEY MAPS
// ========================================

getRelevantOrganicDiagrams(topicType) {
    const diagramMap = {
        hydrocarbons: [
            'methane_tetrahedral_structure',
            'ethane_newman_projection',
            'ethene_pi_bond_overlap',
            'ethyne_triple_bond',
            'benzene_delocalization',
            'cyclohexane_chair_conformation',
            'alkane_homologous_series_structures',
            'geometric_isomers_but2ene',
            'degree_of_unsaturation_examples',
            'aromatic_electrophilic_substitution'
        ],
        functional_groups: [
            'functional_group_overview_table',
            'alcohol_primary_secondary_tertiary',
            'carbonyl_group_nucleophilic_addition',
            'carboxylic_acid_hydrogen_bonding_dimer',
            'amine_lone_pair_basicity',
            'ester_structure_and_formation',
            'amide_resonance_structure',
            'oxidation_ladder_alcohol_to_acid',
            'functional_group_reactivity_chart',
            'intermolecular_forces_comparison'
        ],
        organic_reactions: [
            'sn2_mechanism_backside_attack',
            'sn2_inversion_walden',
            'sn1_carbocation_intermediate',
            'sn1_racemization_diagram',
            'e2_antiperiplanar_geometry',
            'e1_mechanism_steps',
            'markovnikov_addition_hbr',
            'bromonium_ion_anti_addition',
            'electrophilic_addition_mechanism',
            'nucleophilic_addition_carbonyl',
            'reaction_energy_profile_sn1_sn2',
            'free_radical_halogenation_chain',
            'substitution_vs_elimination_comparison'
        ],
        stereochemistry: [
            'chiral_centre_four_groups',
            'enantiomers_mirror_image_hands',
            'cip_priority_assignment_steps',
            'r_s_configuration_examples',
            'ez_alkene_isomers',
            'meso_compound_symmetry_plane',
            'fischer_projection_glucose',
            'wedge_dash_notation',
            'diastereomers_tartaric_acid',
            'racemic_mixture_polarimeter',
            'optical_rotation_diagram'
        ],
        spectroscopy: [
            'ir_spectrum_functional_groups_table',
            'ir_spectrum_alcohol_broad_oh',
            'ir_spectrum_carbonyl_sharp_peak',
            'h_nmr_chemical_shift_scale',
            'h_nmr_splitting_n_plus_1',
            'h_nmr_multiplet_patterns',
            'c13_nmr_chemical_shift_ranges',
            'mass_spectrum_fragmentation_example',
            'mass_spectrum_isotope_patterns_cl_br',
            'uv_vis_conjugation_bathochromic',
            'structure_elucidation_flowchart'
        ],
        polymers: [
            'addition_polymerization_ethene',
            'radical_polymerization_mechanism',
            'condensation_polymerization_nylon66',
            'condensation_polymerization_pet',
            'polymer_repeat_unit_examples',
            'thermoplastic_chain_arrangement',
            'thermoset_crosslinked_network',
            'elastomer_lightly_crosslinked',
            'tacticity_isotactic_syndiotactic_atactic',
            'biodegradable_pla_structure',
            'recycling_codes_diagram'
        ]
    };

    return diagramMap[topicType] || [];
}

getDiagramCaption(diagramKey) {
    const captions = {
        // Hydrocarbons
        'methane_tetrahedral_structure': 'Methane (CH₄): tetrahedral geometry, sp³ hybridization, bond angle 109.5°',
        'ethene_pi_bond_overlap': 'Ethene (C₂H₄): σ bond from sp² orbitals and π bond from p orbital sideways overlap',
        'benzene_delocalization': 'Benzene (C₆H₆): delocalized π electrons over the ring; all C−C bonds equal length (1.40 Å)',
        'cyclohexane_chair_conformation': 'Cyclohexane: chair conformation showing axial and equatorial positions',
        'geometric_isomers_but2ene': '(E)- and (Z)-but-2-ene: geometric isomers due to restricted rotation about C=C',

        // Functional groups
        'functional_group_overview_table': 'Summary of major organic functional groups, their structures, and key properties',
        'carbonyl_group_nucleophilic_addition': 'Nucleophilic addition to carbonyl: Nu⁻ attacks electrophilic carbon (δ⁺)',
        'carboxylic_acid_hydrogen_bonding_dimer': 'Carboxylic acid dimer: two molecules linked by two O−H···O hydrogen bonds',
        'oxidation_ladder_alcohol_to_acid': 'Oxidation ladder: 1° alcohol → aldehyde → carboxylic acid; 2° alcohol → ketone',

        // Reactions
        'sn2_mechanism_backside_attack': 'SN2 mechanism: nucleophile attacks from 180° opposite leaving group (backside attack)',
        'sn2_inversion_walden': 'SN2 Walden inversion: configuration at carbon inverts like umbrella turning inside out',
        'sn1_carbocation_intermediate': 'SN1 mechanism: step 1 ionization gives planar sp² carbocation intermediate',
        'sn1_racemization_diagram': 'SN1 racemization: nucleophile attacks planar carbocation from either face → racemic product',
        'e2_antiperiplanar_geometry': 'E2 elimination: β-H and leaving group must be anti-periplanar (180°) for concerted reaction',
        'markovnikov_addition_hbr': "Markovnikov HBr addition to propene: H⁺ adds to C1, gives 2° carbocation → 2-bromopropane",
        'bromonium_ion_anti_addition': 'Br₂ addition: bromonium ion intermediate → nucleophilic attack from opposite face → anti addition',
        'reaction_energy_profile_sn1_sn2': 'Reaction energy profiles: SN1 (two-step, carbocation intermediate) vs SN2 (one-step, single TS)',
        'free_radical_halogenation_chain': 'Free radical halogenation chain: initiation (hν) → propagation (two steps) → termination',

        // Stereochemistry
        'chiral_centre_four_groups': 'Chiral centre: sp³ carbon bearing four different groups; non-superimposable on mirror image',
        'enantiomers_mirror_image_hands': 'Enantiomers as non-superimposable mirror images (like left and right hands)',
        'cip_priority_assignment_steps': 'CIP priority assignment: order groups 1−4 by atomic number; trace 1→2→3 for R or S',
        'ez_alkene_isomers': 'E/Z isomers: assign CIP priorities to each alkene carbon; E = higher priority groups opposite',
        'meso_compound_symmetry_plane': 'Meso compound: internal plane of symmetry makes it achiral despite having stereocentres',
        'optical_rotation_diagram': 'Plane-polarized light rotation: (+) dextrorotatory rotates clockwise; (−) levorotatory counter-clockwise',

        // Spectroscopy
        'ir_spectrum_functional_groups_table': 'IR absorption wavenumber guide: key functional group stretching and bending regions',
        'ir_spectrum_carbonyl_sharp_peak': 'IR carbonyl absorption: sharp, strong peak ~1715 cm⁻¹ (ketone) or ~1735 cm⁻¹ (ester)',
        'h_nmr_chemical_shift_scale': '¹H NMR chemical shift scale (0−12 ppm) with typical environments labeled',
        'h_nmr_splitting_n_plus_1': 'NMR splitting: n adjacent non-equivalent H atoms split signal into n+1 peaks',
        'mass_spectrum_isotope_patterns_cl_br': 'MS isotope patterns: Cl (M:M+2 = 3:1); Br (M:M+2 = 1:1) from natural isotope ratios',
        'structure_elucidation_flowchart': 'Systematic structure elucidation: MS → DoU → IR → NMR → propose structure',

        // Polymers
        'addition_polymerization_ethene': 'Addition polymerization of ethene: C=C opens, n monomers join to give (−CH₂−CH₂−)ₙ',
        'condensation_polymerization_nylon66': 'Nylon 6,6 condensation polymerization: diamine + diacid → amide bonds + H₂O',
        'condensation_polymerization_pet': 'PET polyester: ethylene glycol + terephthalic acid → ester bonds + H₂O',
        'thermoplastic_chain_arrangement': 'Thermoplastic: linear or branched chains held by intermolecular forces; can be remelted',
        'thermoset_crosslinked_network': 'Thermoset: extensive covalent crosslinks between chains; cannot be remelted',
        'tacticity_isotactic_syndiotactic_atactic': 'Tacticity in polypropylene: isotactic (regular), syndiotactic (alternating), atactic (random)'
    };

    return captions[diagramKey] || this.formatKey(diagramKey);
}

// ========================================
// WORKBOOK SECTION CREATION METHODS
// ========================================

createWorkbookStructure() {
    return {
        title: 'Organic Chemistry Workbook',
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
        title: 'Topic Overview',
        type: 'problem_header',
        data: [
            ['Topic', this.currentProblem.originalTopic],
            ['Type', this.organicTopics[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.organicTopics[this.currentProblem.type]?.category || ''],
            ['Difficulty', this.currentProblem.difficulty],
            ['Prerequisites', (this.currentProblem.prerequisites || []).join(', ')],
            ['Relevance', this.getTopicRelevance(this.currentProblem.type)],
            ['Generated', new Date().toLocaleString()]
        ]
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    const objectives = this.generateOrganicLearningObjectives();
    const studyTips = this.generateOrganicStudyTips();

    return {
        title: 'Learning Objectives and Study Guide',
        type: 'overview',
        data: [
            ['Topic', this.currentContent.topic || ''],
            ['Summary', this.currentContent.summary || ''],
            ['', ''],
            ['LEARNING OBJECTIVES', ''],
            ...objectives.map((obj, i) => [`  ${i + 1}.`, obj]),
            ['', ''],
            ['STUDY TIPS', ''],
            ...studyTips.map(tip => ['  •', tip]),
            ['', ''],
            ['PREREQUISITES', ''],
            ...(this.identifyOrganicPrerequisites() || []).map(p => ['  •', p])
        ]
    };
}

createDetailedContentSection() {
    if (!this.currentContent) return null;

    const rows = [];

    // Summary
    if (this.currentContent.summary) {
        rows.push(['SUMMARY', '']);
        rows.push(['  ', this.currentContent.summary]);
        rows.push(['', '']);
    }

    // Conceptual connections
    const contentWithConnections = this.addOrganicConceptualConnections({ ...this.currentContent });
    if (contentWithConnections.conceptualConnections) {
        rows.push(['CONCEPTUAL CONNECTIONS', '']);
        rows.push(['  ', contentWithConnections.conceptualConnections]);
        rows.push(['', '']);
    }

    // Comparative context
    const contentWithComparisons = this.addOrganicComparativeContext({ ...this.currentContent });
    if (contentWithComparisons.comparativeContext) {
        rows.push(['COMPARATIVE ANALYSIS', '']);
        Object.entries(contentWithComparisons.comparativeContext).forEach(([key, value]) => {
            rows.push([`  ${this.formatKey(key)}:`, value]);
        });
        rows.push(['', '']);
    }

    // Key definitions from lesson
    const lesson = this.lessons[this.currentProblem?.type];
    if (lesson?.keyDefinitions) {
        rows.push(['KEY DEFINITIONS', '']);
        Object.entries(lesson.keyDefinitions).forEach(([term, def]) => {
            rows.push([`  ${term}:`, typeof def === 'string' ? def : JSON.stringify(def)]);
        });
        rows.push(['', '']);
    }

    // Theory
    if (lesson?.theory) {
        rows.push(['THEORETICAL BACKGROUND', '']);
        rows.push(['  ', lesson.theory]);
        rows.push(['', '']);
    }

    return rows.length > 0 ? {
        title: 'Detailed Content',
        type: 'detailed_content',
        data: rows
    } : null;
}

createClassificationSection() {
    if (!this.currentContent) return null;

    const rows = [];

    // Classification data
    if (this.currentContent.classification) {
        rows.push(['CLASSIFICATION', '']);
        this.flattenObjectToRows(this.currentContent.classification, rows, '  ');
        rows.push(['', '']);
    }

    // Main groups (functional groups topic)
    if (this.currentContent.mainGroups) {
        rows.push(['MAJOR FUNCTIONAL GROUPS', '']);
        Object.entries(this.currentContent.mainGroups).forEach(([groupName, groupData]) => {
            rows.push([`  ${this.formatKey(groupName).toUpperCase()}`, '']);
            if (groupData.structure) rows.push(['    Structure:', groupData.structure]);
            if (groupData.properties) {
                rows.push(['    Properties:', '']);
                (Array.isArray(groupData.properties) ? groupData.properties : [groupData.properties])
                    .forEach(p => rows.push(['      •', p]));
            }
            if (groupData.reactions) {
                rows.push(['    Key Reactions:', '']);
                (Array.isArray(groupData.reactions) ? groupData.reactions : [groupData.reactions])
                    .forEach(r => rows.push(['      •', r]));
            }
            if (groupData.examples) {
                const exStr = typeof groupData.examples === 'object' && !Array.isArray(groupData.examples)
                    ? Object.values(groupData.examples).join('; ')
                    : Array.isArray(groupData.examples)
                        ? groupData.examples.join('; ')
                        : groupData.examples;
                rows.push(['    Examples:', exStr]);
            }
            rows.push(['', '']);
        });
    }

    // Add-on polymer classification
    if (this.currentContent.additionPolymerization?.examples) {
        rows.push(['ADDITION POLYMERS', '']);
        this.currentContent.additionPolymerization.examples.forEach(ex => {
            rows.push([`  ${ex.polymer || ex.name}:`, '']);
            if (ex.monomer) rows.push(['    Monomer:', ex.monomer]);
            if (ex.repeatUnit) rows.push(['    Repeat unit:', ex.repeatUnit]);
            if (ex.uses) rows.push(['    Uses:', ex.uses]);
            rows.push(['', '']);
        });
    }

    if (this.currentContent.condensationPolymerization?.types) {
        rows.push(['CONDENSATION POLYMERS', '']);
        Object.entries(this.currentContent.condensationPolymerization.types).forEach(([type, data]) => {
            rows.push([`  ${this.formatKey(type).toUpperCase()}:`, '']);
            if (data.monomers) rows.push(['    Monomers:', data.monomers]);
            if (data.linkage) rows.push(['    Linkage:', data.linkage]);
            if (data.byproduct) rows.push(['    Byproduct:', data.byproduct]);
            if (data.example_PET || data.example_nylon66) {
                const ex = data.example_PET || data.example_nylon66;
                rows.push(['    Example:', ex.name]);
                if (ex.uses) rows.push(['    Uses:', ex.uses]);
            }
            rows.push(['', '']);
        });
    }

    return rows.length > 0 ? {
        title: 'Classification and Types',
        type: 'classification',
        data: rows
    } : null;
}

createStructureAndBondingSection() {
    if (!this.currentContent) return null;

    const rows = [];

    if (this.currentContent.structure) {
        rows.push(['STRUCTURAL FEATURES', '']);
        this.flattenObjectToRows(this.currentContent.structure, rows, '  ');
        rows.push(['', '']);
    }

    if (this.currentContent.fundamentals) {
        rows.push(['FUNDAMENTAL CONCEPTS', '']);
        this.flattenObjectToRows(this.currentContent.fundamentals, rows, '  ');
        rows.push(['', '']);
    }

    if (this.currentContent.degreeOfUnsaturation) {
        rows.push(['DEGREE OF UNSATURATION', '']);
        const DoU = this.currentContent.degreeOfUnsaturation;
        if (DoU.formula) rows.push(['  Formula:', DoU.formula]);
        if (DoU.interpretation) {
            rows.push(['  Interpretation:', '']);
            Object.entries(DoU.interpretation).forEach(([key, val]) => {
                rows.push([`    DoU = ${key}:`, val]);
            });
        }
        if (DoU.examples) {
            rows.push(['  Examples:', '']);
            DoU.examples.forEach(ex => {
                rows.push([`    ${ex.formula}:`, `DoU = ${ex.DoU} → ${ex.interpretation}`]);
            });
        }
        rows.push(['', '']);
    }

    if (this.currentContent.RSconfiguration) {
        rows.push(['R/S CONFIGURATION (CIP RULES)', '']);
        const RS = this.currentContent.RSconfiguration;
        if (RS.CIPRules) {
            RS.CIPRules.forEach((rule, i) => rows.push([`  Step ${i + 1}:`, rule]));
        }
        rows.push(['', '']);
    }

    if (this.currentContent.EZConfiguration) {
        rows.push(['E/Z CONFIGURATION', '']);
        const EZ = this.currentContent.EZConfiguration;
        if (EZ.procedure) EZ.procedure.forEach((step, i) => rows.push([`  ${i + 1}.`, step]));
        rows.push(['', '']);
    }

    return rows.length > 0 ? {
        title: 'Structure and Bonding',
        type: 'structure_bonding',
        data: rows
    } : null;
}

createReactionsSection() {
    if (!this.currentContent) return null;

    const rows = [];

    // Substitution reactions
    if (this.currentContent.substitutionReactions) {
        rows.push(['SUBSTITUTION REACTIONS', '']);
        const sub = this.currentContent.substitutionReactions;

        if (sub.SN2) {
            rows.push(['  SN2 MECHANISM:', '']);
            rows.push(['    Rate equation:', sub.SN2.rateEquation || '']);
            rows.push(['    Stereochemistry:', sub.SN2.stereochemistry || '']);
            rows.push(['    Favored by:', sub.SN2.favored || '']);
            if (sub.SN2.example) rows.push(['    Example:', sub.SN2.example]);
            rows.push(['', '']);
        }

        if (sub.SN1) {
            rows.push(['  SN1 MECHANISM:', '']);
            rows.push(['    Rate equation:', sub.SN1.rateEquation || '']);
            rows.push(['    Stereochemistry:', sub.SN1.stereochemistry || '']);
            rows.push(['    Favored by:', sub.SN1.favored || '']);
            if (sub.SN1.carbocationStability) rows.push(['    Carbocation stability:', sub.SN1.carbocationStability]);
            if (sub.SN1.example) rows.push(['    Example:', sub.SN1.example]);
            rows.push(['', '']);
        }

        if (sub.comparison) {
            rows.push(['  SN1 vs SN2 COMPARISON TABLE:', '']);
            if (sub.comparison.headers) {
                rows.push(['  Headers:', sub.comparison.headers.join(' | ')]);
            }
            if (sub.comparison.rows) {
                sub.comparison.rows.forEach(row => {
                    rows.push(['  ', row.join(' | ')]);
                });
            }
            rows.push(['', '']);
        }
    }

    // Elimination reactions
    if (this.currentContent.eliminationReactions) {
        rows.push(['ELIMINATION REACTIONS', '']);
        const elim = this.currentContent.eliminationReactions;

        if (elim.E2) {
            rows.push(['  E2 MECHANISM:', '']);
            rows.push(['    Mechanism:', elim.E2.mechanism || '']);
            rows.push(['    Requirement:', elim.E2.requirement || '']);
            rows.push(['    Zaitsev rule:', elim.E2.regiochemistry || '']);
            rows.push(['', '']);
        }

        if (elim.E1) {
            rows.push(['  E1 MECHANISM:', '']);
            rows.push(['    Mechanism:', elim.E1.mechanism || '']);
            rows.push(['', '']);
        }

        if (elim.subVsElim) {
            rows.push(['  SUBSTITUTION vs ELIMINATION:', '']);
            Object.entries(elim.subVsElim).forEach(([key, val]) => {
                if (key !== 'summary') rows.push([`    ${this.formatKey(key)}:`, val]);
            });
            rows.push(['', '']);
        }
    }

    // Addition reactions
    if (this.currentContent.additionReactions) {
        rows.push(['ADDITION REACTIONS', '']);
        const add = this.currentContent.additionReactions;

        if (add.electrophilicAddition) {
            rows.push(['  ELECTROPHILIC ADDITION:', '']);
            if (add.electrophilicAddition.markovnikov)
                rows.push(["    Markovnikov's rule:", add.electrophilicAddition.markovnikov]);
            if (add.electrophilicAddition.antiMarkovnikov)
                rows.push(['    Anti-Markovnikov:', add.electrophilicAddition.antiMarkovnikov]);
            if (add.electrophilicAddition.examples) {
                rows.push(['    Examples:', '']);
                add.electrophilicAddition.examples.forEach(ex => rows.push(['      •', ex]));
            }
            rows.push(['', '']);
        }

        if (add.nucleophilicAddition) {
            rows.push(['  NUCLEOPHILIC ADDITION (CARBONYL):', '']);
            if (add.nucleophilicAddition.reactivity)
                rows.push(['    Reactivity order:', add.nucleophilicAddition.reactivity]);
            if (add.nucleophilicAddition.reductions) {
                rows.push(['    Reducing agents:', '']);
                Object.entries(add.nucleophilicAddition.reductions).forEach(([reagent, product]) => {
                    rows.push([`      ${reagent}:`, product]);
                });
            }
            rows.push(['', '']);
        }

        if (add.radicalAddition) {
            rows.push(['  RADICAL ADDITION:', '']);
            rows.push(['    Mechanism:', add.radicalAddition.mechanism || '']);
            rows.push(['    Example:', add.radicalAddition.antiMarkovnikov || '']);
            rows.push(['', '']);
        }
    }

    // Oxidation/reduction
    if (this.currentContent.oxidationReduction) {
        rows.push(['OXIDATION AND REDUCTION', '']);
        this.flattenObjectToRows(this.currentContent.oxidationReduction, rows, '  ');
        rows.push(['', '']);
    }

    // Condensation/polymerization
    if (this.currentContent.condensation) {
        rows.push(['CONDENSATION REACTIONS', '']);
        this.flattenObjectToRows(this.currentContent.condensation, rows, '  ');
        rows.push(['', '']);
    }

    return rows.length > 0 ? {
        title: 'Reactions and Mechanisms',
        type: 'reactions',
        data: rows
    } : null;
}

createChemicalTestsSection() {
    if (!this.currentContent?.chemicalTests) return null;

    const rows = [];
    rows.push(['CHEMICAL TESTS FOR IDENTIFICATION', '']);

    Object.entries(this.currentContent.chemicalTests).forEach(([testName, testData]) => {
        rows.push([`  ${this.formatKey(testName).toUpperCase()}:`, '']);

        if (typeof testData === 'object') {
            if (testData.detects) rows.push(['    Detects:', testData.detects]);
            if (testData.procedure) rows.push(['    Procedure:', testData.procedure]);
            if (testData.positive) rows.push(['    Positive result:', testData.positive]);
            if (testData.negative) rows.push(['    Negative result:', testData.negative]);
            if (testData.alkene_positive) rows.push(['    Alkene (positive):', testData.alkene_positive]);
            if (testData.alkane_negative) rows.push(['    Alkane (negative):', testData.alkane_negative]);
            if (testData.mechanism) rows.push(['    Mechanism:', testData.mechanism]);
            if (testData.colorResults) {
                rows.push(['    Color results:', '']);
                Object.entries(testData.colorResults).forEach(([color, meaning]) => {
                    rows.push([`      ${color}:`, meaning]);
                });
            }
        } else {
            rows.push(['    ', testData]);
        }

        rows.push(['', '']);
    });

    // Add identification tests from functional group identification data
    if (this.currentContent.mainGroups) {
        Object.entries(this.currentContent.mainGroups).forEach(([groupName, groupData]) => {
            if (groupData.identificationTests) {
                rows.push([`  TESTS FOR ${groupName.toUpperCase()}:`, '']);
                Object.entries(groupData.identificationTests).forEach(([test, result]) => {
                    rows.push([`    ${this.formatKey(test)}:`, result]);
                });
                rows.push(['', '']);
            }
        });
    }

    return {
        title: 'Chemical Tests and Identification',
        type: 'chemical_tests',
        data: rows
    };
}

createSpectroscopySection() {
    if (!this.currentContent?.techniques) return null;

    const rows = [];
    rows.push(['SPECTROSCOPIC TECHNIQUES', '']);

    const techniques = this.currentContent.techniques;

    if (techniques.IRSpectroscopy) {
        rows.push(['  INFRARED (IR) SPECTROSCOPY:', '']);
        rows.push(['    Principle:', techniques.IRSpectroscopy.principle || '']);
        rows.push(['    Key absorptions:', '']);
        if (techniques.IRSpectroscopy.keyAbsorptions) {
            Object.entries(techniques.IRSpectroscopy.keyAbsorptions).forEach(([group, data]) => {
                const rangeStr = typeof data === 'object' ? `${data.range || ''} ${data.shape ? '(' + data.shape + ')' : ''}` : data;
                rows.push([`      ${group}:`, rangeStr]);
            });
        }
        rows.push(['', '']);
    }

    if (techniques.NMRSpectroscopy) {
        rows.push(['  ¹H NMR SPECTROSCOPY:', '']);
        rows.push(['    Principle:', techniques.NMRSpectroscopy.principle || '']);
        if (techniques.NMRSpectroscopy.chemicalShift?.['¹H_ranges']) {
            rows.push(['    Chemical shift ranges:', '']);
            Object.entries(techniques.NMRSpectroscopy.chemicalShift['¹H_ranges']).forEach(([env, shift]) => {
                rows.push([`      ${env}:`, shift]);
            });
        }
        if (techniques.NMRSpectroscopy.spinSpinSplitting) {
            rows.push(['    Splitting patterns (n+1 rule):', '']);
            if (techniques.NMRSpectroscopy.spinSpinSplitting.patterns) {
                Object.entries(techniques.NMRSpectroscopy.spinSpinSplitting.patterns).forEach(([pattern, desc]) => {
                    rows.push([`      ${pattern}:`, desc]);
                });
            }
        }
        rows.push(['', '']);
    }

    if (techniques.massSpectrometry) {
        rows.push(['  MASS SPECTROMETRY:', '']);
        rows.push(['    Principle:', techniques.massSpectrometry.principle || '']);
        if (techniques.massSpectrometry.keyPeaks) {
            rows.push(['    Key peaks:', '']);
            Object.entries(techniques.massSpectrometry.keyPeaks).forEach(([peak, desc]) => {
                rows.push([`      ${this.formatKey(peak)}:`, desc]);
            });
        }
        if (techniques.massSpectrometry.fragmentation?.lossOfGroups) {
            rows.push(['    Common losses:', '']);
            Object.entries(techniques.massSpectrometry.fragmentation.lossOfGroups).forEach(([mass, group]) => {
                rows.push([`      −${mass} Da:`, group]);
            });
        }
        rows.push(['', '']);
    }

    if (techniques.UVVisible) {
        rows.push(['  UV-VISIBLE SPECTROSCOPY:', '']);
        rows.push(['    Principle:', techniques.UVVisible.principle || '']);
        if (techniques.UVVisible.examples) {
            rows.push(['    Key absorptions:', '']);
            Object.entries(techniques.UVVisible.examples).forEach(([compound, wavelength]) => {
                rows.push([`      ${compound}:`, wavelength]);
            });
        }
        rows.push(['', '']);
    }

    if (this.currentContent.structureElucidation?.systematicApproach) {
        rows.push(['  STRUCTURE ELUCIDATION STRATEGY:', '']);
        this.currentContent.structureElucidation.systematicApproach.forEach(step => {
            rows.push(['    ', step]);
        });
        rows.push(['', '']);
    }

    return rows.length > 2 ? {
        title: 'Spectroscopic Analysis',
        type: 'spectroscopy',
        data: rows
    } : null;
}

createComparisonsWorkbookSection() {
    if (!this.currentContent) return null;

    const rows = [];

    if (this.currentContent.comparisonTable) {
        rows.push(['COMPARISON TABLE', '']);
        const table = this.currentContent.comparisonTable;
        if (table.headers) {
            rows.push(['  Headers:', table.headers.join(' | ')]);
        }
        if (table.rows) {
            table.rows.forEach(row => {
                rows.push(['  ', Array.isArray(row) ? row.join(' | ') : row]);
            });
        }
        rows.push(['', '']);
    }

    if (this.currentContent.reactivityTrends) {
        rows.push(['REACTIVITY TRENDS', '']);
        Object.entries(this.currentContent.reactivityTrends).forEach(([trend, data]) => {
            rows.push([`  ${this.formatKey(trend)}:`, typeof data === 'string' ? data : JSON.stringify(data)]);
        });
        rows.push(['', '']);
    }

    if (this.currentContent.comparison) {
        rows.push(['STRUCTURAL COMPARISONS', '']);
        Object.entries(this.currentContent.comparison).forEach(([compName, compData]) => {
            rows.push([`  ${this.formatKey(compName).toUpperCase()}:`, '']);
            if (typeof compData === 'object') {
                Object.entries(compData).forEach(([key, val]) => {
                    rows.push([`    ${this.formatKey(key)}:`, val]);
                });
            } else {
                rows.push(['    ', compData]);
            }
            rows.push(['', '']);
        });
    }

    if (this.currentContent.thermoplastvsThermoset) {
        rows.push(['THERMOPLASTIC vs THERMOSET', '']);
        const tvsT = this.currentContent.thermoplastvsThermoset;
        ['thermoplastic', 'thermoset', 'elastomers'].forEach(key => {
            if (tvsT[key]) {
                rows.push([`  ${key.toUpperCase()}:`, '']);
                const d = tvsT[key];
                if (d.definition) rows.push(['    Definition:', d.definition]);
                if (d.onHeating) rows.push(['    On heating:', d.onHeating]);
                if (d.recycling) rows.push(['    Recycling:', d.recycling]);
                if (d.examples) rows.push(['    Examples:', Array.isArray(d.examples) ? d.examples.join(', ') : d.examples]);
                rows.push(['', '']);
            }
        });
    }

    return rows.length > 0 ? {
        title: 'Comparisons and Trends',
        type: 'comparisons',
        data: rows
    } : null;
}

createContextualScenariosWorkbookSection() {
    const scenarios = this.currentContent?.contextualScenarios;
    if (!scenarios || scenarios.length === 0) return null;

    const rows = [];
    rows.push(['REAL-WORLD CONTEXTS', '']);

    scenarios.forEach((scenario, index) => {
        rows.push([`  SCENARIO ${index + 1}: ${scenario.scenario}`, '']);
        rows.push(['    Context:', scenario.context]);
        rows.push(['    Chemistry:', scenario.application]);
        rows.push(['    Think about:', scenario.question]);
        rows.push(['', '']);
    });

    return {
        title: 'Real-World Contexts and Scenarios',
        type: 'contextual_scenarios',
        data: rows
    };
}

createRelatedExperimentsWorkbookSection() {
    const experiments = this.currentContent?.relatedExperiments;
    if (!experiments || experiments.length === 0) return null;

    const rows = [];
    rows.push(['RELATED LABORATORY EXPERIMENTS', '']);

    experiments.forEach((exp, index) => {
        rows.push([`  EXPERIMENT ${index + 1}: ${exp.name}`, '']);
        rows.push(['    Category:', exp.category || '']);
        if (exp.historicalScientist) {
            rows.push(['    Historical scientist:', `${exp.historicalScientist}${exp.historicalYear ? ' (' + exp.historicalYear + ')' : ''}`]);
        }
        if (exp.labTitle) rows.push(['    Lab title:', exp.labTitle]);
        if (exp.hypothesis) rows.push(['    Hypothesis:', exp.hypothesis]);
        rows.push(['', '']);
    });

    return {
        title: 'Related Laboratory Experiments',
        type: 'related_experiments',
        data: rows
    };
}

createMisconceptionsSection() {
    const misconceptions = this.currentContent?.misconceptions;
    if (!misconceptions || Object.keys(misconceptions).length === 0) return null;

    const rows = [];
    rows.push(['COMMON MISCONCEPTIONS AND CLARIFICATIONS', '']);

    Object.entries(misconceptions).forEach(([area, misconceptionList]) => {
        rows.push([`  ${area.toUpperCase()}:`, '']);

        if (Array.isArray(misconceptionList)) {
            misconceptionList.forEach(mc => {
                rows.push(['    ✗ Misconception:', mc]);
            });
        } else if (typeof misconceptionList === 'object') {
            Object.entries(misconceptionList).forEach(([subArea, subList]) => {
                rows.push([`    ${subArea}:`, '']);
                if (Array.isArray(subList)) {
                    subList.forEach(mc => rows.push(['      ✗', mc]));
                }
            });
        }

        rows.push(['', '']);
    });

    if (this.clarificationStrategies) {
        rows.push(['  CLARIFICATION STRATEGIES:', '']);
        Object.entries(this.clarificationStrategies).forEach(([strategy, data]) => {
            rows.push([`    ${this.formatKey(strategy)}:`, data.method || '']);
            if (data.effectiveness) rows.push(['      Effectiveness:', data.effectiveness]);
        });
    }

    return {
        title: 'Common Misconceptions',
        type: 'misconceptions',
        data: rows
    };
}

createMetacognitiveWorkbookSection() {
    const prompts = this.currentContent?.metacognitivePrompts;
    if (!prompts) return null;

    const rows = [];
    rows.push(['LEARNING REFLECTION PROMPTS', '']);

    if (prompts.beforeLearning) {
        rows.push(['  BEFORE STUDYING THIS TOPIC:', '']);
        prompts.beforeLearning.forEach(p => rows.push(['    ?', p]));
        rows.push(['', '']);
    }

    if (prompts.duringLearning) {
        rows.push(['  WHILE LEARNING:', '']);
        prompts.duringLearning.forEach(p => rows.push(['    ?', p]));
        rows.push(['', '']);
    }

    if (prompts.afterLearning) {
        rows.push(['  AFTER COMPLETING THIS TOPIC:', '']);
        prompts.afterLearning.forEach(p => rows.push(['    ?', p]));
        rows.push(['', '']);
    }

    if (prompts.problemSolving) {
        rows.push(['  WHEN SOLVING PROBLEMS:', '']);
        prompts.problemSolving.forEach(p => rows.push(['    ?', p]));
        rows.push(['', '']);
    }

    if (prompts.spectroscopyInterpretation && prompts.spectroscopyInterpretation.length > 0) {
        rows.push(['  WHEN INTERPRETING SPECTRA:', '']);
        prompts.spectroscopyInterpretation.forEach(p => rows.push(['    ?', p]));
        rows.push(['', '']);
    }

    return {
        title: 'Metacognitive Reflection Prompts',
        type: 'metacognitive',
        data: rows
    };
}

createAssessmentSection() {
    const questions = this.currentContent?.assessmentQuestions ||
        this.assessmentQuestions?.[this.currentProblem?.type];
    if (!questions) return null;

    const rows = [];
    rows.push(["ASSESSMENT QUESTIONS (BLOOM'S TAXONOMY)", '']);

    const bloomLevels = ['remember', 'understand', 'apply', 'analyze', 'evaluate', 'create'];
    const levelDescriptions = {
        remember: 'REMEMBER (Recall)',
        understand: 'UNDERSTAND (Explain)',
        apply: 'APPLY (Use)',
        analyze: 'ANALYZE (Break down)',
        evaluate: 'EVALUATE (Judge)',
        create: 'CREATE (Design)'
    };

    bloomLevels.forEach(level => {
        if (questions[level]) {
            rows.push([`  ${levelDescriptions[level] || level.toUpperCase()}:`, '']);
            rows.push(['    Q:', questions[level]]);
            rows.push(['    A:', '_'.repeat(60)]);
            rows.push(['', '']);
        }
    });

    // Rubric hints
    if (this.assessmentRubrics?.knowledgeLevel) {
        rows.push(['  MARKING GUIDANCE:', '']);
        bloomLevels.forEach(level => {
            const rubric = this.assessmentRubrics.knowledgeLevel[level];
            if (rubric) {
                rows.push([`    ${level.toUpperCase()}:`, rubric.description]);
            }
        });
    }

    return {
        title: "Assessment Questions (Bloom's Taxonomy)",
        type: 'assessment',
        data: rows
    };
}

createSafetySummarySection(experimentContent) {
    const rows = [];
    rows.push(['SAFETY SUMMARY FOR THIS EXPERIMENT', '']);

    // Collect safety info from experiment sections
    experimentContent.sections.forEach(section => {
        if (section.data) {
            const safetyRows = section.data.filter(row =>
                (row[0] && row[0].includes('SAFETY')) ||
                (row[0] && row[0].includes('⚠'))
            );
            safetyRows.forEach(row => rows.push(row));
        }
    });

    rows.push(['', '']);
    rows.push(['GENERAL LABORATORY SAFETY RULES', '']);
    rows.push(['  •', 'Wear appropriate PPE: safety goggles, lab coat, gloves at all times']);
    rows.push(['  •', 'Know the location of fire extinguisher, eye wash station, and emergency exit']);
    rows.push(['  •', 'Never pipette by mouth; use pipette filler or bulb']);
    rows.push(['  •', 'No eating, drinking, or applying cosmetics in the laboratory']);
    rows.push(['  •', 'Dispose of organic solvent waste in labeled waste containers']);
    rows.push(['  •', 'Report all accidents and spillages to the supervisor immediately']);
    rows.push(['  •', 'Work in a well-ventilated area or fume hood when using volatile solvents']);

    return {
        title: 'Safety Summary',
        type: 'safety',
        data: rows
    };
}

createExperimentLearningObjectivesSection(experimentContent) {
    const rows = [];
    rows.push(['EXPERIMENT LEARNING OBJECTIVES', '']);

    rows.push(['  By the end of this experiment, students should be able to:', '']);
    rows.push(['  1.', 'Safely carry out the experimental procedure following all safety precautions']);
    rows.push(['  2.', 'Record observations and data accurately in the data table']);
    rows.push(['  3.', 'Explain the chemical principles underlying the observed results']);
    rows.push(['  4.', 'Connect the experimental findings to the relevant organic chemistry theory']);
    rows.push(['  5.', 'Evaluate potential sources of error and suggest improvements']);
    rows.push(['', '']);

    // Add topic-specific objectives based on experiment category
    if (experimentContent.category === 'synthesis') {
        rows.push(['  SYNTHESIS-SPECIFIC OBJECTIVES:', '']);
        rows.push(['  •', 'Identify the type of reaction (addition, condensation, substitution)']);
        rows.push(['  •', 'Draw the mechanism for the reaction performed']);
        rows.push(['  •', 'Calculate theoretical yield and percentage yield']);
        rows.push(['  •', 'Confirm product identity using physical properties or spectroscopy']);
    } else if (experimentContent.category === 'analytical_techniques') {
        rows.push(['  ANALYTICAL OBJECTIVES:', '']);
        rows.push(['  •', 'Calculate Rf values and interpret their significance']);
        rows.push(['  •', 'Use chromatographic data to identify unknown compounds']);
        rows.push(['  •', 'Explain the role of polarity in separation']);
    } else if (experimentContent.category === 'purification_techniques') {
        rows.push(['  PURIFICATION OBJECTIVES:', '']);
        rows.push(['  •', 'Explain the principle of differential solubility']);
        rows.push(['  •', 'Use melting point data to assess purity']);
        rows.push(['  •', 'Calculate percentage recovery and discuss the purity/yield trade-off']);
    } else if (experimentContent.category === 'separation_techniques') {
        rows.push(['  SEPARATION OBJECTIVES:', '']);
        rows.push(['  •', 'Explain the principle of separation by boiling point difference']);
        rows.push(['  •', 'Plot and interpret a distillation curve']);
        rows.push(['  •', 'Distinguish simple from fractional distillation']);
    }

    return {
        title: 'Experiment Learning Objectives',
        type: 'learning_objectives',
        data: rows
    };
}

// ========================================
// DIAGRAM EXPORT AND CACHE METHODS
// ========================================

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
                showGrid: options.showGrid || false,
                showAxes: options.showAxes || false,
                showBondAngles: options.showBondAngles !== false,
                colorByElement: options.colorByElement !== false,
                backgroundColor: options.backgroundColor || '#FFFFFF'
            }
        );
        return { success: true, filename };
    } catch (error) {
        console.error(`Failed to export organic diagram ${diagramKey}:`, error);
        return { success: false, error: error.message };
    }
}

async exportAllDiagramsForTopic(outputDir = './organic_diagrams') {
    await this.waitForDiagrams();

    if (!this.diagramData || !this.diagramData.diagrams) {
        throw new Error('No diagrams available for current organic chemistry topic');
    }

    const fs = await import('fs');
    const path = await import('path');

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
                showGrid: options.showGrid || false,
                showAxes: options.showAxes || false,
                showBondAngles: options.showBondAngles !== false,
                colorByElement: options.colorByElement !== false,
                backgroundColor: options.backgroundColor || '#FFFFFF'
            }
        );
    } catch (error) {
        console.error(`Failed to get organic diagram buffer for ${diagramKey}:`, error);
        return null;
    }
}

clearDiagramCache() {
    this.renderedDiagrams.clear();
    this.diagramsPromise = null;
    console.log('Organic chemistry diagram cache cleared');
}

getDiagramCacheStats() {
    return {
        cachedDiagrams: this.renderedDiagrams.size,
        cacheKeys: Array.from(this.renderedDiagrams.keys()),
        diagramsReady: this.areDiagramsReady(),
        status: this.diagramData?.status || 'not_started',
        topicType: this.currentProblem?.type || null
    };
}

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
        currentTopic: this.currentProblem?.type || null,
        currentTopicName: this.organicTopics[this.currentProblem?.type]?.name || null,
        contentCompleteness: this.calculateOrganicContentCompleteness(),
        learnerLevel: this.learnerProfile.currentLevel,
        masteredTopics: this.learnerProfile.masteredTopics.length,
        strugglingTopics: this.learnerProfile.strugglingTopics.length,
        suggestedNextTopic: this.learnerProfile.suggestedNextTopic || null
    };
}

// ========================================
// UTILITY - FLATTEN NESTED OBJECTS TO ROWS
// ========================================

flattenObjectToRows(obj, rows, indent = '', maxDepth = 4, currentDepth = 0) {
    if (currentDepth >= maxDepth || !obj || typeof obj !== 'object') return;

    Object.entries(obj).forEach(([key, value]) => {
        const label = `${indent}${this.formatKey(key)}`;

        if (Array.isArray(value)) {
            rows.push([`${label}:`, '']);
            value.forEach(item => {
                if (typeof item === 'object' && item !== null) {
                    this.flattenObjectToRows(item, rows, indent + '  ', maxDepth, currentDepth + 1);
                } else {
                    rows.push([`${indent}  •`, String(item)]);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            rows.push([`${label}:`, '']);
            this.flattenObjectToRows(value, rows, indent + '  ', maxDepth, currentDepth + 1);
        } else if (value !== null && value !== undefined && String(value).trim() !== '') {
            rows.push([`${label}:`, String(value)]);
        }
    });
}

}

export default EnhancedOrganicChemistryWorkbook;
