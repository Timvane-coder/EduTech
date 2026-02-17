//Enhanced Organic Chemistry Workbook - Comprehensive Organic Molecules System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { ChemistrySvgDiagrams } from '../svg-data.js';
import { ChemistryDiagramsRegistry } from '../registry.js';
import { ChemistryDiagramsRenderer } from '../renderer.js';
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
                            ¹H_ranges: {
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
}
