Here is the full implementation starting from imports:
// AcidBaseChemistryWorkbook.js
// Comprehensive Acids and Bases Organic Chemistry Workbook Module
// Extends EnhancedOrganicChemistryWorkbook pattern

import { createCanvas, loadImage } from '@napi-rs/canvas';
import { ChemistrySvgDiagrams } from '../svg-data.js';
import { ChemistryDiagramsRegistry } from '../registry.js';
import { ChemistryDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class AcidBaseChemistryWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || 'acidbase';
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

        // Diagram renderer
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

        this.acidBaseSymbols = this.initializeAcidBaseSymbols();
        this.setThemeColors();
        this.initializeAcidBaseTopics();
        this.initializeAcidBaseLessons();
        this.initializeAcidBaseExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    // ============================================================
    // THEME COLORS
    // ============================================================

    setThemeColors() {
        const themes = {
            acidbase: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
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
                stepBg: '#e8f5e9',
                stepText: '#2e7d32',
                borderColor: '#42a5f5',
                contentBg: '#f3f9ff',
                contentText: '#1a237e',
                diagramBg: '#fce4ec',
                structureBg: '#e8eaf6',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                acidBg: '#ffebee',
                baseBg: '#e8f5e9',
                neutralBg: '#e3f2fd',
                bufferBg: '#f3e5f5',
                titrationBg: '#fff8e1',
                equilibriumBg: '#e0f7fa'
            }
        };
        this.colors = themes[this.theme] || themes.acidbase;
    }

    // ============================================================
    // SYMBOLS
    // ============================================================

    initializeAcidBaseSymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'delta': 'Δ',
            'Delta': 'Δ',
            'lambda': 'λ',
            'mu': 'μ',
            'pi': 'π',

            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            'doubleArrow': '↔',

            // Math/Chemistry
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'approximately': '≈',
            'degree': '°',
            'delta_plus': 'δ⁺',
            'delta_minus': 'δ⁻',

            // pH and equilibrium notation
            'pH': 'pH',
            'pOH': 'pOH',
            'pKa': 'pKa',
            'pKb': 'pKb',
            'pKw': 'pKw',
            'Ka': 'Ka',
            'Kb': 'Kb',
            'Kw': 'Kw',
            'Keq': 'Keq',

            // Common acids
            'HCl': 'HCl',
            'HBr': 'HBr',
            'HI': 'HI',
            'H2SO4': 'H₂SO₄',
            'HNO3': 'HNO₃',
            'HClO4': 'HClO₄',
            'HClO3': 'HClO₃',
            'H3PO4': 'H₃PO₄',
            'CH3COOH': 'CH₃COOH',
            'H2CO3': 'H₂CO₃',
            'HF': 'HF',
            'H2O': 'H₂O',
            'H3O+': 'H₃O⁺',

            // Common bases
            'NaOH': 'NaOH',
            'KOH': 'KOH',
            'Ca_OH_2': 'Ca(OH)₂',
            'NH3': 'NH₃',
            'NH4OH': 'NH₄OH',
            'Na2CO3': 'Na₂CO₃',
            'NaHCO3': 'NaHCO₃',
            'LiOH': 'LiOH',

            // Ions
            'H+': 'H⁺',
            'OH-': 'OH⁻',
            'NH4+': 'NH₄⁺',
            'SO42-': 'SO₄²⁻',
            'NO3-': 'NO₃⁻',
            'Cl-': 'Cl⁻',
            'CH3COO-': 'CH₃COO⁻',
            'HCO3-': 'HCO₃⁻',
            'CO32-': 'CO₃²⁻',
            'HPO42-': 'HPO₄²⁻',
            'H2PO4-': 'H₂PO₄⁻',

            // Indicators
            'ppm': 'ppm',
            'mol_L': 'mol L⁻¹',
            'g_mol': 'g mol⁻¹',
            'cm3': 'cm³',
            'dm3': 'dm³',
            'cm_inv': 'cm⁻¹'
        };
    }

    // ============================================================
    // TOPICS
    // ============================================================

    initializeAcidBaseTopics() {
        this.acidBaseTopics = {
            acid_base_definitions: {
                patterns: [
                    /arrhenius|bronsted.*lowry|lewis acid/i,
                    /proton donor|proton acceptor/i,
                    /electron pair acceptor|electron pair donor/i,
                    /conjugate acid|conjugate base/i,
                    /definition.*acid|definition.*base/i
                ],
                handler: this.handleAcidBaseDefinitions.bind(this),
                name: 'Acid-Base Definitions',
                category: 'acid_base_theory',
                description: 'Arrhenius, Brønsted-Lowry, and Lewis definitions of acids and bases',
                difficulty: 'beginner',
                prerequisites: ['atomic_structure', 'chemical_bonding', 'electronegativity']
            },

            ph_calculations: {
                patterns: [
                    /pH|pOH|pKa|pKb/i,
                    /hydrogen ion concentration/i,
                    /calculate.*pH|pH.*calculation/i,
                    /strong acid.*pH|weak acid.*pH/i,
                    /hydroxide concentration/i,
                    /acid dissociation|base dissociation/i
                ],
                handler: this.handlePhCalculations.bind(this),
                name: 'pH and Equilibrium Calculations',
                category: 'quantitative',
                description: 'Calculating pH, pOH, Ka, Kb for strong and weak acids and bases',
                difficulty: 'intermediate',
                prerequisites: ['acid_base_definitions', 'equilibrium_constants', 'logarithms']
            },

            buffer_systems: {
                patterns: [
                    /buffer|buffer solution/i,
                    /henderson.*hasselbalch/i,
                    /resist.*pH change/i,
                    /buffer capacity|buffer range/i,
                    /physiological buffer|blood buffer/i,
                    /carbonate.*buffer|phosphate.*buffer/i
                ],
                handler: this.handleBufferSystems.bind(this),
                name: 'Buffer Systems',
                category: 'acid_base_equilibria',
                description: 'Buffer solutions, Henderson-Hasselbalch equation, and biological buffer systems',
                difficulty: 'intermediate',
                prerequisites: ['ph_calculations', 'weak_acids_bases', 'equilibrium']
            },

            titration: {
                patterns: [
                    /titration|titrate/i,
                    /equivalence point|endpoint/i,
                    /acid.*base.*titration/i,
                    /titration curve|pH curve/i,
                    /indicator.*titration|titration.*indicator/i,
                    /standardization/i
                ],
                handler: this.handleTitration.bind(this),
                name: 'Titration and Neutralization',
                category: 'analytical',
                description: 'Acid-base titrations, titration curves, indicators, and equivalence points',
                difficulty: 'intermediate',
                prerequisites: ['ph_calculations', 'stoichiometry', 'buffer_systems']
            },

            acid_base_organic: {
                patterns: [
                    /organic acid|carboxylic acid.*pKa/i,
                    /amine.*base|basicity.*amine/i,
                    /phenol.*acidity|alcohol.*acidity/i,
                    /substituent.*effect.*acidity/i,
                    /inductive effect.*acidity/i,
                    /resonance.*acidity/i,
                    /amino acid.*pH|zwitterion/i
                ],
                handler: this.handleOrganicAcidBase.bind(this),
                name: 'Acid-Base Properties of Organic Compounds',
                category: 'organic_reactivity',
                description: 'pKa values, structural effects on acidity/basicity, and organic acid-base reactions',
                difficulty: 'advanced',
                prerequisites: ['ph_calculations', 'functional_groups', 'resonance', 'inductive_effects']
            }
        };
    }

    // ============================================================
    // LESSONS
    // ============================================================

    initializeAcidBaseLessons() {
        this.lessons = {

            // --------------------------------------------------
            acid_base_definitions: {
                title: "Acid-Base Definitions: Arrhenius, Brønsted-Lowry, and Lewis",
                concepts: [
                    "Arrhenius: acids produce H⁺(aq), bases produce OH⁻(aq) — limited to aqueous solutions",
                    "Brønsted-Lowry: acids donate protons (H⁺), bases accept protons — broader scope",
                    "Lewis: acids accept electron pairs, bases donate electron pairs — broadest definition",
                    "Every Brønsted-Lowry acid-base reaction produces a conjugate acid-base pair",
                    "Strong acids/bases fully dissociate (Ka >> 1); weak acids/bases partially dissociate (Ka << 1)",
                    "Amphoteric species can act as both acids and bases (e.g., water, amino acids, HCO₃⁻)"
                ],
                theory: "The concept of acids and bases has evolved through three major definitions, each broader than the last. Arrhenius's definition (1884) was the first modern definition but restricted to aqueous solutions. Brønsted and Lowry (1923) independently extended this to any proton-transfer reaction in any solvent. Lewis (1923) gave the most general definition based on electron pair transfer, encompassing reactions with no proton transfer at all (e.g., BF₃ + NH₃). Understanding all three definitions is essential for predicting reactions in both aqueous and non-aqueous contexts.",
                keyDefinitions: {
                    "Arrhenius Acid": "Substance that produces H⁺ (H₃O⁺) in aqueous solution (e.g., HCl → H⁺ + Cl⁻)",
                    "Arrhenius Base": "Substance that produces OH⁻ in aqueous solution (e.g., NaOH → Na⁺ + OH⁻)",
                    "Brønsted-Lowry Acid": "Proton (H⁺) donor in a reaction",
                    "Brønsted-Lowry Base": "Proton (H⁺) acceptor in a reaction",
                    "Lewis Acid": "Electron pair acceptor (e.g., BF₃, AlCl₃, Fe³⁺, H⁺)",
                    "Lewis Base": "Electron pair donor (e.g., NH₃, H₂O, Cl⁻, all Brønsted-Lowry bases)",
                    "Conjugate Acid": "Species formed when a base accepts a proton: B + H⁺ → BH⁺",
                    "Conjugate Base": "Species formed when an acid donates a proton: HA → H⁺ + A⁻",
                    "Amphoteric": "Species that can act as both acid and base (e.g., H₂O, HCO₃⁻, amino acids)",
                    "Autoionization": "H₂O + H₂O ⇌ H₃O⁺ + OH⁻; Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C"
                },
                definitionComparison: {
                    arrhenius: {
                        acids: ["HCl", "H₂SO₄", "HNO₃", "CH₃COOH"],
                        bases: ["NaOH", "KOH", "Ca(OH)₂"],
                        limitation: "Only applies in aqueous solutions; excludes NH₃ as a base",
                        example: "HCl(aq) → H⁺(aq) + Cl⁻(aq)"
                    },
                    bronstedLowry: {
                        acids: ["HCl", "H₂SO₄", "CH₃COOH", "NH₄⁺", "H₂O (as acid)"],
                        bases: ["NaOH", "NH₃", "H₂O (as base)", "CH₃COO⁻", "Cl⁻ (weak)"],
                        advantage: "Applies in any solvent; explains NH₃ as base; explains amphoteric species",
                        example: "CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺ (acid donates H⁺ to water)"
                    },
                    lewis: {
                        acids: ["BF₃", "AlCl₃", "Fe³⁺", "SO₃", "CO₂", "H⁺", "all Brønsted-Lowry acids"],
                        bases: ["NH₃", "H₂O", "F⁻", "Cl⁻", "OH⁻", "all Brønsted-Lowry bases"],
                        advantage: "Most general; explains reactions with no proton transfer; explains coordination chemistry",
                        example: "BF₃ + :NH₃ → F₃B←NH₃ (Lewis acid accepts lone pair from Lewis base)"
                    }
                },
                strongVsWeak: {
                    strongAcids: {
                        list: ["HCl", "HBr", "HI", "H₂SO₄ (first ionization)", "HNO₃", "HClO₄", "HClO₃"],
                        behavior: "Essentially 100% dissociation in dilute aqueous solution; [H⁺] = initial [acid]",
                        Ka: "Ka >> 1 (pKa < 0)"
                    },
                    weakAcids: {
                        list: ["CH₃COOH (pKa 4.76)", "HF (pKa 3.17)", "H₂CO₃ (pKa 6.35)", "H₃PO₄ (pKa 2.15)", "NH₄⁺ (pKa 9.25)", "phenol (pKa 9.99)"],
                        behavior: "Partial dissociation; equilibrium established; [H⁺] < initial [acid]",
                        Ka: "Ka << 1 (pKa > 0)"
                    },
                    strongBases: {
                        list: ["NaOH", "KOH", "LiOH", "Ca(OH)₂", "Ba(OH)₂", "RbOH", "CsOH"],
                        behavior: "100% dissociation; [OH⁻] = initial [base] × stoichiometric factor",
                        Kb: "Kb >> 1"
                    },
                    weakBases: {
                        list: ["NH₃ (pKb 4.74)", "CH₃NH₂ (methylamine)", "pyridine", "aniline", "Na₂CO₃", "NaHCO₃"],
                        behavior: "Partial dissociation; partial acceptance of proton from water",
                        Kb: "Kb << 1"
                    }
                },
                conjugatePairs: {
                    examples: [
                        { acid: "HCl", conjugateBase: "Cl⁻", strength: "Strong acid → very weak conjugate base" },
                        { acid: "CH₃COOH", conjugateBase: "CH₃COO⁻", strength: "Weak acid → moderately weak conjugate base" },
                        { acid: "NH₄⁺", conjugateBase: "NH₃", strength: "Weak acid → weak conjugate base" },
                        { acid: "H₂O", conjugateBase: "OH⁻", strength: "Very weak acid → moderate conjugate base" },
                        { acid: "H₃O⁺", conjugateBase: "H₂O", strength: "Strong acid → weak conjugate base" }
                    ],
                    principle: "Stronger the acid, weaker its conjugate base; Ka × Kb (conjugate pair) = Kw = 1.0 × 10⁻¹⁴"
                }
            },

            // --------------------------------------------------
            ph_calculations: {
                title: "pH Calculations: Strong Acids, Weak Acids, and Equilibrium",
                concepts: [
                    "pH = −log[H⁺] = −log[H₃O⁺]; scale 0−14 at 25°C (can go outside this range)",
                    "pOH = −log[OH⁻]; pH + pOH = 14.00 at 25°C",
                    "Strong acid: [H⁺] = Ca (concentration of acid); pH = −log(Ca)",
                    "Weak acid: Ka = [H⁺][A⁻]/[HA]; solve quadratic or use approximation (if Ka << Ca)",
                    "For weak acid: [H⁺] ≈ √(Ka × Ca) when Ca/Ka > 100 (approximation valid)",
                    "Degree of dissociation α = [H⁺]/Ca; decreases with increasing concentration (dilution increases α)"
                ],
                theory: "The pH scale quantifies the acidity of a solution as the negative logarithm of the hydrogen ion concentration. For strong acids and bases, pH is calculated directly from the initial concentration because dissociation is complete. For weak acids and bases, an equilibrium calculation is required. The ICE (Initial-Change-Equilibrium) table method provides a systematic approach to these calculations. Understanding the relationship between Ka, concentration, and pH is essential for predicting the behavior of acids and bases in biological systems, environmental chemistry, and industrial processes.",
                keyDefinitions: {
                    "pH": "pH = −log₁₀[H⁺] (or [H₃O⁺]); measures acidity of solution",
                    "pOH": "pOH = −log₁₀[OH⁻]; pH + pOH = 14.00 at 25°C",
                    "pKa": "pKa = −log₁₀(Ka); lower pKa = stronger acid",
                    "pKb": "pKb = −log₁₀(Kb); lower pKb = stronger base",
                    "pKw": "pKw = −log₁₀(Kw) = 14.00 at 25°C; Kw = Ka × Kb (conjugate pair)",
                    "Kw": "Ion product of water: Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C",
                    "ICE Table": "Initial-Change-Equilibrium table; systematic method for equilibrium calculations",
                    "Degree of Dissociation": "α = fraction of acid dissociated = [H⁺]/Ca",
                    "Percent Dissociation": "α% = ([H⁺]/Ca) × 100%",
                    "Buffer Region": "pH range where both HA and A⁻ are present in appreciable concentrations (pKa ± 1)"
                },
                calculations: {
                    strongAcid: {
                        method: "Complete dissociation assumed: [H⁺] = Ca",
                        formula: "pH = −log(Ca)",
                        example: {
                            problem: "Calculate pH of 0.050 mol L⁻¹ HCl",
                            working: "[H⁺] = 0.050 mol L⁻¹; pH = −log(0.050) = 1.30",
                            answer: "pH = 1.30"
                        },
                        dibasicCase: {
                            note: "For H₂SO₄ (both ionizations): first is strong, second is weak (Ka₂ = 0.012) — at low concentrations treat both as strong"
                        }
                    },
                    strongBase: {
                        method: "Complete dissociation: [OH⁻] = Cb (× n for polybasic)",
                        formula: "pOH = −log(Cb); pH = 14.00 − pOH",
                        example: {
                            problem: "Calculate pH of 0.020 mol L⁻¹ NaOH",
                            working: "[OH⁻] = 0.020; pOH = −log(0.020) = 1.70; pH = 14.00 − 1.70 = 12.30",
                            answer: "pH = 12.30"
                        }
                    },
                    weakAcid: {
                        method: "ICE table + equilibrium expression; approximation if valid",
                        ICEsetup: [
                            "HA(aq) + H₂O(l) ⇌ H₃O⁺(aq) + A⁻(aq)",
                            "I:  Ca           —       ≈0        0",
                            "C:  −x           —       +x       +x",
                            "E:  Ca−x         —       x         x",
                            "Ka = x²/(Ca − x)"
                        ],
                        approximation: {
                            condition: "If Ca/Ka > 100, then Ca − x ≈ Ca",
                            simplified: "x = [H⁺] ≈ √(Ka × Ca)",
                            validation: "Check: x/Ca < 5% (otherwise solve quadratic)"
                        },
                        quadratic: "x² + Ka·x − Ka·Ca = 0; x = [−Ka + √(Ka² + 4·Ka·Ca)] / 2",
                        example: {
                            problem: "Calculate pH of 0.100 mol L⁻¹ CH₃COOH (Ka = 1.8 × 10⁻⁵)",
                            working: [
                                "Ca/Ka = 0.100 / 1.8×10⁻⁵ = 5556 >> 100 (approximation valid)",
                                "[H⁺] ≈ √(1.8×10⁻⁵ × 0.100) = √(1.8×10⁻⁶) = 1.34×10⁻³ mol L⁻¹",
                                "Check: 1.34×10⁻³/0.100 = 1.34% < 5% ✓",
                                "pH = −log(1.34×10⁻³) = 2.87"
                            ],
                            answer: "pH = 2.87"
                        }
                    },
                    weakBase: {
                        method: "ICE table with Kb; or use pKw − pKa of conjugate acid",
                        ICEsetup: [
                            "B(aq) + H₂O(l) ⇌ BH⁺(aq) + OH⁻(aq)",
                            "I:  Cb            —     0         ≈0",
                            "C:  −x            —     +x        +x",
                            "E:  Cb−x          —     x          x",
                            "Kb = x²/(Cb − x)"
                        ],
                        example: {
                            problem: "Calculate pH of 0.100 mol L⁻¹ NH₃ (Kb = 1.8 × 10⁻⁵)",
                            working: [
                                "[OH⁻] ≈ √(1.8×10⁻⁵ × 0.100) = 1.34×10⁻³ mol L⁻¹",
                                "pOH = −log(1.34×10⁻³) = 2.87",
                                "pH = 14.00 − 2.87 = 11.13"
                            ],
                            answer: "pH = 11.13"
                        }
                    },
                    polyproticAcids: {
                        description: "Acids with more than one ionizable proton (H₂CO₃, H₃PO₄, H₂SO₄)",
                        principle: "Ka₁ >> Ka₂ >> Ka₃; first dissociation dominates pH calculation",
                        example: {
                            H3PO4: {
                                Ka1: "7.1 × 10⁻³ (pKa 2.15)",
                                Ka2: "6.3 × 10⁻⁸ (pKa 7.20)",
                                Ka3: "4.2 × 10⁻¹³ (pKa 12.38)",
                                note: "For pH calculation of H₃PO₄ solution, use Ka1 only (Ka2 contributes negligibly)"
                            }
                        }
                    }
                },
                pHScale: {
                    description: "pH scale from 0 (strongly acidic) to 14 (strongly basic) at 25°C; neutral pH = 7.00",
                    biologicalContext: [
                        { fluid: "Gastric juice", pH: "1.5 − 3.5" },
                        { fluid: "Urine", pH: "4.5 − 8.0" },
                        { fluid: "Rain (normal)", pH: "5.6" },
                        { fluid: "Blood plasma", pH: "7.35 − 7.45" },
                        { fluid: "Intracellular fluid", pH: "6.8 − 7.4" },
                        { fluid: "Pancreatic juice", pH: "8.0 − 8.3" },
                        { fluid: "Seawater", pH: "7.8 − 8.3" }
                    ],
                    temperature: "Kw (and hence neutral pH) changes with temperature: at 37°C Kw = 2.4×10⁻¹⁴, neutral pH ≈ 6.81"
                }
            },

            // --------------------------------------------------
            buffer_systems: {
                title: "Buffer Solutions: Composition, Action, and Biological Significance",
                concepts: [
                    "Buffer: solution that resists pH change when small amounts of acid or base are added",
                    "Composition: weak acid + its conjugate base (e.g., CH₃COOH/CH₃COO⁻)",
                    "Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])",
                    "Maximum buffer capacity at pH = pKa (equal concentrations of acid and conjugate base)",
                    "Buffer range: effective within approximately pKa ± 1 pH unit",
                    "Buffer capacity: moles of acid/base that can be absorbed per litre per unit pH change"
                ],
                theory: "Buffer solutions are among the most important concepts in both chemistry and biology. They maintain stable pH by containing a weak acid-conjugate base pair in appreciable concentrations. When H⁺ is added, it reacts with the conjugate base; when OH⁻ is added, it reacts with the weak acid. The Henderson-Hasselbalch equation allows calculation of the exact pH. Blood uses carbonate and phosphate buffers to maintain pH 7.35−7.45 — a range critical for enzyme function and oxygen binding to haemoglobin.",
                keyDefinitions: {
                    "Buffer Solution": "Solution that resists pH change upon addition of acid or base; contains weak acid + conjugate base",
                    "Henderson-Hasselbalch Equation": "pH = pKa + log([A⁻]/[HA]); fundamental equation for buffer pH",
                    "Buffer Capacity (β)": "β = dn/dpH; moles of strong acid/base that changes buffer pH by 1 unit per litre",
                    "Buffer Range": "Effective pH range ≈ pKa ± 1; both components present in appreciable amounts",
                    "Half-equivalence Point": "Point in titration where [HA] = [A⁻]; pH = pKa (maximum buffer capacity)",
                    "Physiological Buffer": "Buffer system maintaining pH in biological fluids (carbonate in blood, phosphate in cells)"
                },
                hendersonHasselbalch: {
                    derivation: [
                        "Ka = [H⁺][A⁻]/[HA]",
                        "[H⁺] = Ka × [HA]/[A⁻]",
                        "−log[H⁺] = −log(Ka) − log([HA]/[A⁻])",
                        "pH = pKa + log([A⁻]/[HA])"
                    ],
                    applications: [
                        {
                            task: "Calculate pH of acetate buffer",
                            data: "0.100 mol L⁻¹ CH₃COOH and 0.150 mol L⁻¹ CH₃COONa; pKa = 4.76",
                            working: "pH = 4.76 + log(0.150/0.100) = 4.76 + log(1.5) = 4.76 + 0.18 = 4.94",
                            answer: "pH = 4.94"
                        },
                        {
                            task: "Find ratio needed for target pH",
                            data: "Acetate buffer at pH 5.10 (pKa = 4.76)",
                            working: "5.10 = 4.76 + log([A⁻]/[HA]); log([A⁻]/[HA]) = 0.34; [A⁻]/[HA] = 10⁰·³⁴ = 2.19",
                            answer: "Need [CH₃COO⁻]/[CH₃COOH] ≈ 2.2 : 1"
                        },
                        {
                            task: "pH shift on adding strong base",
                            data: "0.100 L of pH 4.94 acetate buffer (0.100 mol L⁻¹ HA, 0.150 mol L⁻¹ A⁻); add 0.005 mol NaOH",
                            working: [
                                "Moles HA initially: 0.100 × 0.100 = 0.010 mol",
                                "Moles A⁻ initially: 0.100 × 0.150 = 0.015 mol",
                                "NaOH converts HA → A⁻: HA + OH⁻ → A⁻ + H₂O",
                                "New moles HA = 0.010 − 0.005 = 0.005 mol",
                                "New moles A⁻ = 0.015 + 0.005 = 0.020 mol",
                                "pH = 4.76 + log(0.020/0.005) = 4.76 + log(4) = 4.76 + 0.60 = 5.36"
                            ],
                            answer: "pH rises from 4.94 to 5.36 (only 0.42 units despite adding strong base)"
                        }
                    ]
                },
                preparingBuffers: {
                    method1: "Mix known amounts of weak acid and its sodium/potassium salt",
                    method2: "Partially neutralize weak acid with strong base",
                    method3: "Partially neutralize weak base with strong acid",
                    guidelines: [
                        "Choose weak acid with pKa within 1 unit of desired pH",
                        "Higher buffer concentration = greater buffer capacity",
                        "Equal concentrations of HA and A⁻ gives maximum capacity at pH = pKa"
                    ],
                    commonBuffers: [
                        { name: "Acetic acid/acetate", pKa: 4.76, range: "3.8 − 5.8", use: "Biochemistry, food chemistry" },
                        { name: "Phosphate (H₂PO₄⁻/HPO₄²⁻)", pKa: 7.20, range: "6.2 − 8.2", use: "Biological systems, intracellular" },
                        { name: "Carbonate (H₂CO₃/HCO₃⁻)", pKa: 6.35, range: "5.4 − 7.4", use: "Blood plasma" },
                        { name: "Tris-HCl", pKa: 8.08, range: "7.0 − 9.0", use: "Molecular biology buffers" },
                        { name: "Ammonium/ammonia", pKa: 9.25, range: "8.2 − 10.3", use: "General chemistry" },
                        { name: "HEPES", pKa: 7.55, range: "6.8 − 8.2", use: "Cell culture media" }
                    ]
                },
                biologicalBuffers: {
                    blood: {
                        system: "Carbonate buffer: CO₂/H₂CO₃/HCO₃⁻ system",
                        normalPH: "7.35 − 7.45",
                        mechanism: [
                            "CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻",
                            "Respiratory regulation: excess CO₂ exhaled (raises pH); CO₂ retained if too basic",
                            "Renal regulation: kidneys excrete H⁺ or HCO₃⁻ as needed (slower, hours-days)"
                        ],
                        acidosis: "pH < 7.35; respiratory acidosis (CO₂ retention) or metabolic acidosis",
                        alkalosis: "pH > 7.45; hyperventilation or metabolic alkalosis"
                    },
                    intracellular: {
                        system: "Phosphate buffer: H₂PO₄⁻/HPO₄²⁻ (pKa 7.20)",
                        mechanism: "H⁺ + HPO₄²⁻ → H₂PO₄⁻; OH⁻ + H₂PO₄⁻ → HPO₄²⁻ + H₂O"
                    },
                    protein: {
                        system: "Histidine residues (pKa ~6), N-terminus (pKa ~8), C-terminus (pKa ~3.1)",
                        mechanism: "Ionizable amino acid side chains buffer at physiological pH"
                    }
                }
            },

            // --------------------------------------------------
            titration: {
                title: "Acid-Base Titration: Curves, Indicators, and Equivalence Points",
                concepts: [
                    "Titration: quantitative addition of standard solution (titrant) to analyte of unknown concentration",
                    "Equivalence point: stoichiometric moles of acid = moles of base; not always pH 7",
                    "Strong acid/strong base: equivalence point at pH 7.00 (at 25°C)",
                    "Weak acid/strong base: equivalence point pH > 7 (conjugate base hydrolysis)",
                    "Strong acid/weak base: equivalence point pH < 7 (conjugate acid hydrolysis)",
                    "Indicator: weak acid whose conjugate base is different color; transitions near pKa of indicator"
                ],
                theory: "Titration is the most important quantitative acid-base technique. The shape of the titration curve reflects the acid-base properties of both the analyte and titrant. At the half-equivalence point (for weak acid/strong base titrations), pH = pKa of the weak acid — a key relationship used to determine pKa experimentally. Indicator selection must match the steep portion of the curve at the equivalence point to minimize endpoint error.",
                keyDefinitions: {
                    "Titrant": "Solution of known concentration added from burette",
                    "Analyte": "Solution of unknown concentration in the conical flask",
                    "Standard Solution": "Accurately known concentration; prepared from primary standard",
                    "Primary Standard": "Highly pure, stable compound of known molar mass used to standardize solutions",
                    "Equivalence Point": "Point where moles of titrant added = stoichiometric moles required to react with analyte",
                    "Endpoint": "Point where indicator changes color (ideally coincides with equivalence point)",
                    "Indicator Error": "Difference between endpoint and equivalence point",
                    "Half-equivalence Point": "Point where half the acid has been neutralized; pH = pKa of weak acid",
                    "Buffer Region": "Part of titration curve around half-equivalence point; pH changes slowly",
                    "Back Titration": "Technique where excess reagent is added, then excess titrated; used for insoluble analytes"
                },
                titrationCurves: {
                    strongAcidStrongBase: {
                        description: "NaOH added to HCl (typical example)",
                        features: [
                            "Starting pH determined by [strong acid]",
                            "pH rises slowly at first (buffer-free region)",
                            "Very steep rise near equivalence point (pH 3−11 in ~0.1 mL)",
                            "Equivalence point at pH 7.00 (at 25°C)",
                            "pH levels off at high NaOH pH after equivalence"
                        ],
                        indicatorSuitable: "Any indicator with transition range overlapping pH 3−11 near equivalence (phenolphthalein, methyl orange both work)"
                    },
                    weakAcidStrongBase: {
                        description: "NaOH added to CH₃COOH (acetic acid)",
                        features: [
                            "Starting pH determined by Ka and initial [CH₃COOH] (calculate as weak acid)",
                            "Buffer region forms early (slow pH rise, flat region)",
                            "Half-equivalence point: pH = pKa = 4.76 for acetic acid",
                            "Equivalence point pH > 7 (typically 8.5−9) due to CH₃COO⁻ hydrolysis",
                            "Less steep rise at equivalence (smaller vertical portion)",
                            "After equivalence: excess NaOH dominates"
                        ],
                        equivalencePointPH: {
                            calculation: "At equivalence: [A⁻] = n/V; Kb(A⁻) = Kw/Ka; [OH⁻] = √(Kb × [A⁻]); pH = 14 − pOH",
                            example: "CH₃COO⁻: Kb = 10⁻¹⁴/1.8×10⁻⁵ = 5.6×10⁻¹⁰; for 0.05 mol L⁻¹: [OH⁻] = √(5.6×10⁻¹⁰ × 0.05) = 5.3×10⁻⁶; pH ≈ 8.73"
                        },
                        indicatorSuitable: "Phenolphthalein (transition 8.2−10.0) — matches equivalence point region"
                    },
                    strongAcidWeakBase: {
                        description: "HCl added to NH₃ (ammonia)",
                        features: [
                            "Starting pH determined by Kb and [NH₃]",
                            "Buffer region as NH₄⁺/NH₃ forms",
                            "Half-equivalence point: pH = pKa(NH₄⁺) = 9.25",
                            "Equivalence point pH < 7 (NH₄⁺ hydrolysis, typically pH 5.1−5.5)",
                            "Less steep vertical portion than strong/strong"
                        ],
                        indicatorSuitable: "Methyl orange (transition 3.1−4.4) or methyl red (4.2−6.3)"
                    },
                    weakAcidWeakBase: {
                        description: "Very poor titration; no sharp equivalence point",
                        features: [
                            "No steep portion of curve; equivalence point difficult to detect",
                            "Not suitable for precise titrations",
                            "No indicator gives sharp endpoint"
                        ],
                        note: "Rarely used in analytical practice"
                    },
                    polyproticAcid: {
                        description: "Multiple equivalence points (one per ionizable proton)",
                        example: "H₃PO₄ + NaOH shows 3 equivalence points (if Ka values are well-separated)",
                        condition: "Distinct equivalence points visible only if Ka₁/Ka₂ > ~1000"
                    }
                },
                indicators: {
                    description: "Weak acids (HIn) where HIn and In⁻ have different colors; transition range ≈ pKa(indicator) ± 1",
                    selectionPrinciple: "Choose indicator whose transition range lies within the steep portion of the titration curve",
                    commonIndicators: [
                        { name: "Methyl orange", acidColor: "Red", baseColor: "Yellow", range: "3.1 − 4.4", pKa: 3.7, use: "Strong acid/weak base; strong acid/strong base" },
                        { name: "Methyl red", acidColor: "Red", baseColor: "Yellow", range: "4.2 − 6.3", pKa: 5.1, use: "Weak base titrations" },
                        { name: "Bromothymol blue", acidColor: "Yellow", baseColor: "Blue", range: "6.0 − 7.6", pKa: 7.1, use: "Strong acid/strong base near pH 7" },
                        { name: "Phenolphthalein", acidColor: "Colorless", baseColor: "Pink", range: "8.2 − 10.0", pKa: 9.4, use: "Weak acid/strong base; strong acid/strong base" },
                        { name: "Litmus", acidColor: "Red", baseColor: "Blue", range: "5.0 − 8.0", pKa: 6.5, use: "General rough indicator; not precise" },
                        { name: "Thymolphthalein", acidColor: "Colorless", baseColor: "Blue", range: "9.3 − 10.5", pKa: 9.9, use: "Very alkaline equivalence points" }
                    ]
                },
                calculations: {
                    concentration: {
                        formula: "n(acid) = n(base) at equivalence; C₁V₁ = C₂V₂ (for 1:1 reactions); adjust for stoichiometry",
                        example: {
                            problem: "25.0 cm³ of NaOH required 22.35 cm³ of 0.100 mol L⁻¹ HCl. Find [NaOH].",
                            working: [
                                "n(HCl) = 0.100 × 22.35/1000 = 2.235 × 10⁻³ mol",
                                "n(NaOH) = n(HCl) = 2.235 × 10⁻³ mol (1:1 ratio)",
                                "[NaOH] = 2.235×10⁻³ / (25.0/1000) = 0.0894 mol L⁻¹"
                            ],
                            answer: "[NaOH] = 0.0894 mol L⁻¹"
                        }
                    },
                    standardization: {
                        primaryStandards: ["Potassium hydrogen phthalate (KHP) for NaOH standardization", "Sodium carbonate (Na₂CO₃) for HCl standardization", "Oxalic acid dihydrate for KMnO₄"],
                        procedure: "Accurately weigh primary standard; dissolve in water; titrate with solution to be standardized"
                    }
                }
            },

            // --------------------------------------------------
            acid_base_organic: {
                title: "Acid-Base Properties of Organic Compounds",
                concepts: [
                    "Carboxylic acids (pKa ~4−5) are weak acids; resonance stabilizes carboxylate anion",
                    "Alcohols (pKa ~16) are far weaker acids; no resonance stabilization of alkoxide",
                    "Phenols (pKa ~10) are more acidic than alcohols; resonance delocalizes negative charge onto ring",
                    "Amines are weak bases (pKb ~4); nitrogen lone pair accepts proton",
                    "Amides are very weakly basic; lone pair delocalized into C=O by resonance",
                    "Electron-withdrawing groups increase acidity; electron-donating groups decrease acidity"
                ],
                theory: "The acid-base properties of organic compounds are determined by structural features: resonance stabilization of the conjugate base/acid, inductive effects of substituents, hybridization of the acid center, and solvation. These factors allow chemists to predict and rationalize the pKa values of functional groups and to design reactions that depend on proton transfer steps. Understanding relative pKa values is essential for predicting reaction outcomes and for biochemical applications such as enzyme mechanisms and drug design.",
                keyDefinitions: {
                    "Inductive Effect": "Transmission of charge through σ bonds; electronegative atoms withdraw electron density, increasing acidity",
                    "Resonance Stabilization": "Delocalization of charge in conjugate base/acid across multiple atoms; stabilizes the ion",
                    "Hybridization Effect": "sp > sp² > sp³ carbon: more s-character = more electronegative = more acidic C−H",
                    "pKa Ladder": "List of compounds in order of pKa; predicts direction of acid-base reactions (reaction proceeds to weaker acid side)",
                    "Leveling Effect": "All acids stronger than H₃O⁺ appear equally strong in water; water 'levels' them",
                    "Zwitterion": "Molecule with both positive and negative charges at different sites; e.g., amino acid at isoelectric point",
                    "Isoelectric Point (pI)": "pH at which amino acid has zero net charge (zwitterion); pI = (pKa₁ + pKa₂)/2"
                },
                pKaValues: {
                    description: "Representative pKa values of important organic functional groups",
                    table: [
                        { compound: "HI", functionalGroup: "Hydroiodic acid", pKa: "−10", notes: "Strong acid" },
                        { compound: "H₂SO₄", functionalGroup: "Sulfuric acid", pKa: "−3", notes: "Strong acid (1st)" },
                        { compound: "HCl", functionalGroup: "Hydrochloric acid", pKa: "−7", notes: "Strong acid" },
                        { compound: "CF₃COOH", functionalGroup: "Trifluoroacetic acid", pKa: "0.5", notes: "Strongly electron-withdrawing F atoms" },
                        { compound: "CCl₃COOH", functionalGroup: "Trichloroacetic acid", pKa: "0.66", notes: "Strong inductive effect" },
                        { compound: "CHCl₂COOH", functionalGroup: "Dichloroacetic acid", pKa: "1.48", notes: "Moderate inductive effect" },
                        { compound: "CH₂ClCOOH", functionalGroup: "Chloroacetic acid", pKa: "2.86", notes: "Mild inductive effect" },
                        { compound: "HCOOH", functionalGroup: "Formic acid", pKa: "3.75", notes: "Simplest carboxylic acid" },
                        { compound: "C₆H₅COOH", functionalGroup: "Benzoic acid", pKa: "4.20", notes: "Aromatic carboxylic acid" },
                        { compound: "CH₃COOH", functionalGroup: "Acetic acid", pKa: "4.76", notes: "Reference carboxylic acid" },
                        { compound: "C₃H₇COOH", functionalGroup: "Butanoic acid", pKa: "4.82", notes: "Alkyl group slightly donating" },
                        { compound: "H₂CO₃", functionalGroup: "Carbonic acid", pKa: "6.35", notes: "CO₂(aq) + H₂O" },
                        { compound: "H₂S", functionalGroup: "Hydrogen sulfide", pKa: "7.00", notes: "Thiol reference" },
                        { compound: "C₆H₅NH₃⁺", functionalGroup: "Anilinium ion", pKa: "4.60", notes: "Conjugate acid of aniline" },
                        { compound: "NH₄⁺", functionalGroup: "Ammonium ion", pKa: "9.25", notes: "Conjugate acid of NH₃" },
                        { compound: "C₆H₅OH", functionalGroup: "Phenol", pKa: "9.99", notes: "Resonance-stabilized phenoxide" },
                        { compound: "CH₃NH₃⁺", functionalGroup: "Methylammonium", pKa: "10.66", notes: "Conjugate acid of methylamine" },
                        { compound: "CH₃SH", functionalGroup: "Methanethiol", pKa: "10.3", notes: "Thiol (more acidic than alcohol)" },
                        { compound: "HCO₃⁻", functionalGroup: "Bicarbonate", pKa: "10.33", notes: "Second ionization of carbonic acid" },
                        { compound: "CH₃OH", functionalGroup: "Methanol", pKa: "15.5", notes: "Alcohol; very weak acid" },
                        { compound: "H₂O", functionalGroup: "Water", pKa: "15.7", notes: "Reference solvent" },
                        { compound: "C₂H₅OH", functionalGroup: "Ethanol", pKa: "16.0", notes: "Primary alcohol" },
                        { compound: "(CH₃)₃COH", functionalGroup: "t-Butanol", pKa: "19.0", notes: "Tertiary alcohol; most inductive donation" },
                        { compound: "HC≡CH", functionalGroup: "Acetylene", pKa: "25", notes: "sp carbon; most acidic C−H" },
                        { compound: "CH₂=CH₂", functionalGroup: "Ethylene", pKa: "44", notes: "sp² carbon; less acidic C−H" },
                        { compound: "CH₄", functionalGroup: "Methane", pKa: "~50", notes: "sp³ carbon; essentially non-acidic" }
                    ]
                },
                structuralEffects: {
                    resonance: {
                        description: "Delocalization of negative charge in conjugate base stabilizes it → stronger acid",
                        examples: [
                            {
                                comparison: "Acetic acid vs ethanol",
                                acidities: "CH₃COOH (pKa 4.76) << CH₃CH₂OH (pKa 16.0)",
                                explanation: "Acetate ion: negative charge delocalized over two oxygen atoms; ethoxide: charge localized on one oxygen → carboxylic acid far stronger"
                            },
                            {
                                comparison: "Phenol vs cyclohexanol",
                                acidities: "C₆H₅OH (pKa 9.99) << C₆H₁₁OH (pKa ~16)",
                                explanation: "Phenoxide: negative charge delocalized into aromatic ring (4 resonance structures); cyclohexoxide: no delocalization → phenol more acidic"
                            }
                        ]
                    },
                    inductive: {
                        description: "Electron-withdrawing groups stabilize conjugate base by dispersing negative charge → stronger acid",
                        examples: [
                            {
                                series: "Chlorinated acetic acids",
                                data: "CH₃COOH (4.76) > ClCH₂COOH (2.86) > Cl₂CHCOOH (1.48) > Cl₃CCOOH (0.66)",
                                explanation: "Each Cl withdraws electrons inductively, stabilizing the carboxylate; effect additive"
                            },
                            {
                                series: "Halogens vs methyl on benzoic acid",
                                data: "4-NO₂-C₆H₄COOH (pKa 3.44) < C₆H₅COOH (4.20) < 4-NH₂-C₆H₄COOH (4.85)",
                                explanation: "EWG (NO₂) increases acidity; EDG (NH₂) decreases acidity"
                            }
                        ],
                        distanceEffect: "Inductive effect decreases rapidly with distance: α-substitution >> β-substitution >> γ-substitution"
                    },
                    hybridization: {
                        description: "More s-character → more electronegative → more acidic",
                        order: "sp (33% s) > sp² (25% s) > sp³ (25% s)",
                        pKaOrder: "HC≡CH (25) << H₂C=CH₂ (44) << CH₄ (~50)",
                        implication: "Terminal alkynes (pKa ~25) can be deprotonated by NaNH₂ (pKa NH₃ = 38); alkenes and alkanes cannot"
                    },
                    amineBasicity: {
                        order: "Most basic: alkylamine > NH₃ > arylamine > amide",
                        explanation: [
                            "Alkylamines: alkyl groups donate electrons inductively → lone pair more available → stronger base (pKb ~3−4)",
                            "NH₃: reference base (pKb 4.74)",
                            "Arylamines (aniline): lone pair delocalized into ring → less available → weaker base (pKb 9.42)",
                            "Amides: lone pair delocalized into C=O → essentially non-basic (pKb ~15)"
                        ],
                        pKaConjugateAcids: [
                            { compound: "(CH₃)₃N (trimethylamine)", pKa_conjugateAcid: "9.81" },
                            { compound: "CH₃NH₂ (methylamine)", pKa_conjugateAcid: "10.66" },
                            { compound: "NH₃ (ammonia)", pKa_conjugateAcid: "9.25" },
                            { compound: "C₆H₅NH₂ (aniline)", pKa_conjugateAcid: "4.60" },
                            { compound: "Pyridine", pKa_conjugateAcid: "5.25" },
                            { compound: "CH₃CONH₂ (acetamide)", pKa_conjugateAcid: "0.0" }
                        ]
                    }
                },
                aminoAcids: {
                    description: "Amino acids are amphoteric: contain both −NH₃⁺ (acid) and −COO⁻ (base) groups",
                    pKaValues: {
                        aminoGroup: "pKa₁ of −COOH ≈ 2.0 (more acidic than simple carboxylic acid due to adjacent NH₃⁺)",
                        carboxylGroup: "pKa₂ of −NH₃⁺ ≈ 9−10 (more acidic than simple amine due to adjacent COO⁻)"
                    },
                    isoelectricPoint: "pI = (pKa₁ + pKa₂)/2; at pI, amino acid is zwitterion (net zero charge)",
                    examples: [
                        { name: "Glycine", pKa1: 2.35, pKa2: 9.78, pI: 6.07 },
                        { name: "Alanine", pKa1: 2.35, pKa2: 9.87, pI: 6.11 },
                        { name: "Glutamic acid (acidic R-group)", pKa1: 2.10, pKa2: 9.47, pKaR: 4.07, pI: 3.08 },
                        { name: "Lysine (basic R-group)", pKa1: 2.16, pKa2: 9.18, pKaR: 10.79, pI: 9.99 }
                    ],
                    biologicalSignificance: "Charge at physiological pH affects solubility, protein folding, enzyme active sites, and receptor binding"
                },
                reactionPrediction: {
                    principle: "Acid-base reaction proceeds toward formation of weaker acid and weaker base; equilibrium favors side with lower pKa",
                    examples: [
                        {
                            reaction: "CH₃COOH + NaOH → CH₃COO⁻Na⁺ + H₂O",
                            pKas: "pKa(CH₃COOH) = 4.76; pKa(H₂O) = 15.7",
                            conclusion: "Water is far weaker acid → strongly favors products; Ka ≈ 10^(15.7−4.76) = 10^10.9"
                        },
                        {
                            reaction: "HC≡CH + NaNH₂ → HC≡C⁻Na⁺ + NH₃",
                            pKas: "pKa(HC≡CH) = 25; pKa(NH₃) = 38",
                            conclusion: "NH₃ is weaker acid → favors products; alkyne deprotonated by amide"
                        },
                        {
                            reaction: "CH₃OH + NaOH → ? (does reaction occur?)",
                            pKas: "pKa(CH₃OH) = 15.5; pKa(H₂O) = 15.7",
                            conclusion: "Very similar pKas → equilibrium near 1; essentially no reaction in aqueous solution"
                        }
                    ]
                }
            }
        };
    }

    // ============================================================
    // EXPERIMENTS
    // ============================================================

    initializeAcidBaseExperiments() {
        this.acidBaseExperiments = {

            // =====================================================
            // EXPERIMENT 1: pH OF HOUSEHOLD CHEMICALS
            // =====================================================

            household_pH_survey: {
                name: "pH Survey of Household Chemicals Using Indicators and pH Meters",
                relatedTopics: ['acid_base_definitions', 'ph_calculations'],
                category: 'investigation',
                historicalBackground: {
                    scientist: "Søren Sørensen (1909) — introduced pH scale while studying enzyme activity in brewery",
                    development: "Universal indicator developed by multiple chemists in early 20th century; pH meter invented by Arnold Beckman (1934)",
                    significance: "pH measurement is fundamental to food science, medicine, environmental monitoring, and industrial chemistry"
                },
                labExperiment: {
                    title: "Investigating pH of Everyday Solutions Using Multiple Methods",
                    hypothesis: "Different household chemicals will show a range of pH values; acidic foods will have pH < 7, cleaning products will be alkaline (pH > 7), and neutral products will have pH ≈ 7",
                    purpose: "Measure and compare pH of common household chemicals using universal indicator, red cabbage indicator, and pH meter; connect chemical composition to acid-base properties",
                    background: {
                        principle: "pH measures the concentration of H⁺ ions in solution. Acids donate H⁺ (lowering pH); bases accept H⁺ or donate OH⁻ (raising pH). Indicators are weak acids whose color depends on pH. Universal indicators contain a mixture of indicator dyes to give colors across the full pH range.",
                        naturalIndicator: "Red cabbage contains anthocyanins (natural pH indicators): red at pH < 2, pink at pH 4, purple at pH 7, green at pH 8-11, yellow at pH > 11"
                    },
                    variables: {
                        independent: "Identity of household chemical tested",
                        dependent: "pH measurement (by each method)",
                        controlled: ["Temperature (25°C)", "Volume of solution tested", "Concentration of indicator used", "Time allowed for color development"]
                    },
                    materials: [
                        "Household chemicals (see list below)",
                        "Universal indicator solution and color chart",
                        "Red cabbage (for preparation of natural indicator)",
                        "pH meter (if available) and buffer solutions (pH 4, 7, 10) for calibration",
                        "pH indicator paper",
                        "White spotting tile or white paper",
                        "Dropping pipettes",
                        "Beakers (50 mL)",
                        "Protective equipment: gloves, safety goggles"
                    ],
                    householdChemicals: [
                        { substance: "Lemon juice", expectedPH: "2−3", reason: "Contains citric acid (pKa 3.1, 4.8, 6.4) and ascorbic acid" },
                        { substance: "Vinegar", expectedPH: "2.4−3.4", reason: "Dilute acetic acid (~5% solution)" },
                        { substance: "Cola drink", expectedPH: "2.5−3.5", reason: "Phosphoric acid + carbonic acid" },
                        { substance: "Orange juice", expectedPH: "3.5−4.0", reason: "Citric acid, malic acid" },
                        { substance: "Coffee", expectedPH: "4.5−5.5", reason: "Various organic acids" },
                        { substance: "Rainwater", expectedPH: "5.0−5.6", reason: "Dissolved CO₂ → H₂CO₃" },
                        { substance: "Milk", expectedPH: "6.4−6.8", reason: "Lactic acid; proteins buffer near neutral" },
                        { substance: "Distilled water", expectedPH: "7.0", reason: "Pure water; [H⁺] = [OH⁻] = 10⁻⁷ mol L⁻¹" },
                        { substance: "Blood (simulated NaHCO₃ solution)", expectedPH: "7.35−7.45", reason: "Carbonate buffer" },
                        { substance: "Baking soda solution", expectedPH: "8.2−8.5", reason: "NaHCO₃; weakly basic (HCO₃⁻ hydrolysis)" },
                        { substance: "Washing soda (Na₂CO₃)", expectedPH: "11−12", reason: "CO₃²⁻ is moderately strong base" },
                        { substance: "Household bleach (diluted 1:10)", expectedPH: "11−12", reason: "NaClO in NaOH; strongly alkaline" },
                        { substance: "Drain cleaner (diluted)", expectedPH: "12−14", reason: "NaOH or KOH based; strongly alkaline" }
                    ],
                    safetyPrecautions: [
                        "Wear safety goggles and gloves throughout",
                        "Dilute all drain cleaners and bleach before testing (corrosive)",
                        "Do NOT mix bleach with acidic cleaners (Cl₂ gas produced — toxic)",
                        "Wash hands after handling all chemicals",
                        "Dispose of all solutions down sink with copious water"
                    ],
                    procedure: [
                        "PREPARATION OF RED CABBAGE INDICATOR:",
                        "Chop and boil 1/4 red cabbage in 500 mL water for 10 minutes",
                        "Cool and filter; store purple indicator solution",
                        "",
                        "pH MEASUREMENT:",
                        "Calibrate pH meter using pH 4, 7, and 10 buffer solutions (if available)",
                        "For each household chemical, add 2 cm³ to a clean test tube or spotting tile well",
                        "Method A − Universal indicator: add 3 drops; compare color to chart; record pH",
                        "Method B − Red cabbage indicator: add 3 drops; observe color; estimate pH range",
                        "Method C − pH paper: dip strip; compare to color chart immediately",
                        "Method D − pH meter: immerse cleaned and dried electrode; record to 2 decimal places",
                        "Record all results in data table",
                        "Rinse electrode with distilled water between samples"
                    ],
                    dataTable: [
                        ["Substance", "UI Color", "UI pH", "Cabbage Color", "Cabbage pH", "Paper pH", "Meter pH", "Acid/Base/Neutral"],
                        ["Lemon juice", "Red", "2", "Red", "2", "2", "2.4", "Acid"],
                        ["Vinegar", "Red", "3", "Pink-red", "3", "3", "2.9", "Acid"],
                        ["Cola", "Red-orange", "3", "Pink", "3", "3", "3.1", "Acid"],
                        ["Milk", "Orange-yellow", "6", "Pink-purple", "6.5", "6", "6.6", "Weakly acidic"],
                        ["Distilled water", "Green-yellow", "7", "Purple", "7", "7", "7.0", "Neutral"],
                        ["Baking soda", "Green-blue", "8", "Green-blue", "8", "8", "8.3", "Weakly basic"],
                        ["Washing soda", "Blue-purple", "11", "Green-yellow", "11", "11", "11.4", "Base"],
                        ["Bleach (diluted)", "Purple", "12", "Yellow", "12", "12", "11.9", "Strong base"]
                    ],
                    analysis: [
                        "Acidic substances contain weak acids (citric, acetic) or dissolved CO₂",
                        "Alkaline cleaners contain Na₂CO₃, NaHCO₃, NaOH, or NaClO",
                        "pH meter gives most accurate readings; universal indicator gives approximate values",
                        "Red cabbage provides continuous color scale; easily extracted from natural source",
                        "Strong acids/bases show extreme pH; weak acids/bases are closer to neutral",
                        "Temperature affects Kw and hence neutral pH; measurements should be at constant temperature"
                    ],
                    conclusions: [
                        "Household chemicals span a wide pH range (approximately 2 to 13)",
                        "Acidic foods and drinks contain organic acids",
                        "Cleaning products are typically strongly alkaline",
                        "Different measurement methods give comparable results; pH meter most accurate",
                        "Natural anthocyanin indicators provide a cost-effective alternative to commercial indicators"
                    ],
                    realWorldApplications: [
                        "Food science: pH affects flavor, preservation, and safety of food products",
                        "Environmental monitoring: measuring pH of rain, river water, and soil",
                        "Medical diagnostics: urine and blood pH indicate health status",
                        "Industrial processes: pH control in brewing, fermentation, paper manufacturing",
                        "Agriculture: soil pH determines nutrient availability for crops"
                    ],
                    extensions: [
                        "Test the same solution at different temperatures; explain any pH change",
                        "Dilute a strong acid 10-fold repeatedly; plot pH vs log(dilution) and discuss the pattern",
                        "Extract indicators from other natural sources (berries, red onion, turmeric)",
                        "Measure pH of local river water and compare to drinking water standards"
                    ]
                }
            },

            // =====================================================
            // EXPERIMENT 2: WEAK ACID Ka DETERMINATION
            // =====================================================

            weak_acid_Ka: {
                name: "Determination of the Acid Dissociation Constant (Ka) of a Weak Acid",
                relatedTopics: ['ph_calculations', 'buffer_systems', 'titration'],
                category: 'quantitative_analysis',
                historicalBackground: {
                    scientist: "Wilhelm Ostwald (1888) — formulated the dilution law for weak electrolytes and introduced Ka",
                    development: "Equilibrium constants fundamental to understanding reaction spontaneity and direction",
                    significance: "Ka values enable prediction of acid strength, pH calculations, and buffer design"
                },
                labExperiment: {
                    title: "Determining Ka of Acetic Acid Using pH Measurements",
                    hypothesis: "The Ka of acetic acid can be determined by measuring pH at the half-equivalence point of a titration (where pH = pKa), and independently by measuring pH of solutions at known concentrations",
                    purpose: "Determine Ka of acetic acid by two methods: (1) measuring pH of solutions at known concentrations and solving the equilibrium expression; (2) identifying the half-equivalence point during a titration",
                    background: {
                        kaDefinition: "Ka = [H⁺][A⁻]/[HA]; for weak acid HA dissociating: Ka = x²/(Ca − x) where x = [H⁺]",
                        halfEquivalenceMethod: "At the half-equivalence point of a weak acid-strong base titration: [HA] = [A⁻]; therefore pH = pKa + log(1) = pKa",
                        concentrationMethod: "From pH of a known concentration of weak acid: x = [H⁺] = 10^(−pH); Ka = x²/(Ca − x)"
                    },
                    variables: {
                        independent: "Concentration of acetic acid / volume of NaOH added",
                        dependent: "pH of solution",
                        controlled: ["Temperature", "Volume of acid taken", "Rate of NaOH addition"]
                    },
                    materials: [
                        "Glacial acetic acid",
                        "Standard NaOH solution (0.100 mol L⁻¹, standardized)",
                        "Distilled water",
                        "Volumetric flasks (100 mL, 250 mL)",
                        "Burette (50 mL)",
                        "pH meter with calibration buffers",
                        "Magnetic stirrer and stir bar",
                        "Conical flask (250 mL)",
                        "Pipette (25.0 mL) and pipette filler",
                        "Burette stand and clamp"
                    ],
                    safetyPrecautions: [
                        "Glacial acetic acid is corrosive and has pungent odor — use fume hood",
                        "NaOH solution is corrosive — avoid skin contact",
                        "Handle pH electrode carefully (glass membrane is fragile)",
                        "Calibrate pH meter before use and check calibration regularly",
                        "Rinse electrode with distilled water between measurements"
                    ],
                    procedure: [
                        "PART A: pH OF KNOWN CONCENTRATIONS:",
                        "Prepare acetic acid solutions: 1.00, 0.500, 0.100, 0.0500, 0.0100, 0.00500 mol L⁻¹ by accurate dilution",
                        "Calibrate pH meter with pH 4.00, 7.00, and 10.00 buffers",
                        "Measure pH of each solution at 25°C; allow to equilibrate 2 minutes",
                        "For each: calculate [H⁺] = 10^(−pH); Ka = [H⁺]²/(Ca − [H⁺])",
                        "",
                        "PART B: TITRATION METHOD:",
                        "Pipette 25.00 mL of 0.100 mol L⁻¹ acetic acid into conical flask",
                        "Add magnetic stir bar; immerse calibrated pH electrode",
                        "Fill burette with standardized 0.100 mol L⁻¹ NaOH",
                        "Record initial burette reading and solution pH",
                        "Add NaOH in 1.00 mL increments; record pH after each addition",
                        "Add in 0.10 mL increments near equivalence point (rapid pH change)",
                        "Continue adding NaOH until 5 mL past equivalence point",
                        "Plot titration curve (pH vs volume NaOH)",
                        "Identify equivalence point (steepest part of curve)",
                        "Half-equivalence volume = equivalence volume / 2",
                        "Read pH at half-equivalence volume → pH = pKa"
                    ],
                    dataTablePartA: [
                        ["[CH₃COOH] / mol L⁻¹", "pH (measured)", "[H⁺] = 10^(−pH)", "Ka = [H⁺]²/(Ca−[H⁺])", "pKa = −log(Ka)"],
                        ["1.000", "2.38", "4.17×10⁻³", "1.76×10⁻⁵", "4.75"],
                        ["0.500", "2.52", "3.02×10⁻³", "1.85×10⁻⁵", "4.73"],
                        ["0.100", "2.87", "1.35×10⁻³", "1.85×10⁻⁵", "4.73"],
                        ["0.0500", "3.02", "9.55×10⁻⁴", "1.86×10⁻⁵", "4.73"],
                        ["0.0100", "3.38", "4.17×10⁻⁴", "1.87×10⁻⁵", "4.73"],
                        ["Mean Ka", "—", "—", "1.84×10⁻⁵", "4.74"]
                    ],
                    dataTablePartB: [
                        ["Vol NaOH added (mL)", "pH", "Notes"],
                        ["0.00", "2.87", "Initial weak acid"],
                        ["5.00", "4.16", "Buffer region forming"],
                        ["12.50", "4.74", "HALF-EQUIVALENCE: pH = pKa"],
                        ["20.00", "5.35", "Buffer region"],
                        ["24.00", "6.45", "Approaching equivalence"],
                        ["25.00", "8.73", "EQUIVALENCE POINT"],
                        ["26.00", "11.30", "Excess NaOH"],
                        ["30.00", "12.10", "Excess NaOH"]
                    ],
                    analysis: [
                        "Both methods give consistent Ka ≈ 1.8 × 10⁻⁵ (pKa ≈ 4.74); literature value 1.8 × 10⁻⁵",
                        "Ka remains approximately constant across different concentrations (as expected for a true equilibrium constant)",
                        "At equivalence point, pH > 7 (acetate hydrolysis confirmed: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻)",
                        "Half-equivalence point method is particularly elegant: no complex calculation required",
                        "Dilution increases degree of dissociation α but Ka remains constant (Ostwald's dilution law)"
                    ],
                    errorAnalysis: [
                        "Temperature must be constant (Ka is temperature-dependent)",
                        "CO₂ dissolved in water forms H₂CO₃, lowering pH of distilled water (use boiled distilled water)",
                        "NaOH must be standardized (absorbs CO₂ from air, changing concentration)",
                        "pH electrode junction potential may cause small systematic errors",
                        "Averaging Ka from multiple concentrations reduces random error"
                    ],
                    conclusions: [
                        "Ka of acetic acid ≈ 1.8 × 10⁻⁵; pKa ≈ 4.74 — consistent with literature",
                        "Both the dilution series method and half-equivalence point method give concordant results",
                        "Ka is independent of concentration, confirming it as a true equilibrium constant",
                        "The equivalence point of acetic acid/NaOH titration is alkaline (pH ≈ 8.7)"
                    ],
                    realWorldApplications: [
                        "Quality control in vinegar production (verifying acetic acid content and strength)",
                        "Pharmaceutical formulation (Ka determines absorption of weak acid drugs from stomach)",
                        "Environmental chemistry (modeling carbonic acid equilibria in ocean acidification)",
                        "Biochemistry (predicting ionization state of amino acid residues at physiological pH)"
                    ],
                    extensions: [
                        "Repeat with different weak acids (citric, oxalic, tartaric) and compare Ka values",
                        "Study temperature dependence of Ka and calculate ΔH° of ionization",
                        "Compare Ka of substituted acetic acids (chloroacetic, trifluoroacetic) to test inductive effect predictions"
                    ]
                }
            },

            // =====================================================
            // EXPERIMENT 3: BUFFER PREPARATION AND CAPACITY
            // =====================================================

            buffer_preparation: {
                name: "Preparation and Investigation of Buffer Solutions",
                relatedTopics: ['buffer_systems', 'ph_calculations', 'titration'],
                category: 'investigation',
                historicalBackground: {
                    scientist: "Lawrence Henderson (1908) and Karl Hasselbalch (1909) derived the Henderson-Hasselbalch equation",
                    significance: "Buffer chemistry is foundational to biochemistry and medicine; blood pH regulation depends on buffer systems",
                    industrialContext: "Buffers used in pharmaceutical formulation, food preservation, electroplating, photography, and molecular biology"
                },
                labExperiment: {
                    title: "Preparing Acetate Buffers and Measuring Buffer Capacity",
                    hypothesis: "Acetate buffer solutions will resist pH change more effectively than unbuffered water; buffer capacity is greatest at pH = pKa and decreases as pH moves away from pKa",
                    purpose: "Prepare acetate buffer solutions of specified pH using the Henderson-Hasselbalch equation; compare their resistance to pH change with unbuffered water; determine buffer capacity",
                    background: {
                        hendersonHasselbalch: "pH = pKa + log([CH₃COO⁻]/[CH₃COOH]); for pKa = 4.76, to achieve pH 5.0: ratio = 10^(5.0−4.76) = 10^0.24 = 1.74",
                        bufferAction: {
                            onAddingAcid: "H⁺ + CH₃COO⁻ → CH₃COOH (conjugate base consumes added H⁺)",
                            onAddingBase: "OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O (weak acid consumes added OH⁻)"
                        },
                        bufferCapacity: "β = 2.303 × C × Ka[H⁺] / (Ka + [H⁺])²; maximum at [H⁺] = Ka (i.e., pH = pKa)"
                    },
                    variables: {
                        independent: "Volume and identity of acid/base added; pH of buffer prepared",
                        dependent: "pH after each addition",
                        controlled: ["Total buffer concentration", "Temperature", "Volume of solution", "Concentration and volume of HCl/NaOH added"]
                    },
                    materials: [
                        "0.100 mol L⁻¹ acetic acid (CH₃COOH) solution",
                        "0.100 mol L⁻¹ sodium acetate (CH₃COONa) solution",
                        "0.100 mol L⁻¹ NaOH (standardized)",
                        "0.100 mol L⁻¹ HCl (standardized)",
                        "Distilled water",
                        "pH meter (calibrated)",
                        "Volumetric flasks (100 mL)",
                        "Pipettes and burettes",
                        "Beakers (100 mL)",
                        "Magnetic stirrer"
                    ],
                    safetyPrecautions: [
                        "Acetic acid has strong odor — work in well-ventilated area",
                        "NaOH and HCl solutions are corrosive — avoid skin contact",
                        "Handle pH electrode carefully"
                    ],
                    procedure: [
                        "PART A: PREPARING BUFFERS BY HENDERSON-HASSELBALCH",
                        "Calculate volumes of 0.100 mol L⁻¹ CH₃COOH and CH₃COONa needed to prepare 100 mL of each:",
                        "  Buffer 1: pH 4.00 (ratio CH₃COO⁻/CH₃COOH = 10^(4.00−4.76) = 0.174)",
                        "  Buffer 2: pH 4.76 (ratio = 1.00; equal volumes)",
                        "  Buffer 3: pH 5.50 (ratio = 10^(5.50−4.76) = 5.50)",
                        "Prepare each buffer in a 100 mL volumetric flask; dilute to mark with distilled water",
                        "Measure and record actual pH of each buffer",
                        "",
                        "PART B: BUFFER CAPACITY COMPARISON",
                        "Take three 50.0 mL aliquots: Buffer (pH 4.76), distilled water, 0.050 mol L⁻¹ NaCl",
                        "To each, add 0.100 mol L⁻¹ NaOH in 1.00 mL increments from burette",
                        "Record pH after each addition",
                        "Separately, add 0.100 mol L⁻¹ HCl in 1.00 mL increments to fresh aliquots",
                        "Record pH after each addition",
                        "Plot pH vs moles NaOH (or HCl) added for buffer and water"
                    ],
                    dataTablePartA: [
                        ["Target pH", "Vol CH₃COOH (mL)", "Vol CH₃COONa (mL)", "Actual pH measured", "Difference from target"],
                        ["4.00", "85.2", "14.8", "3.98", "−0.02"],
                        ["4.76", "50.0", "50.0", "4.75", "−0.01"],
                        ["5.50", "15.4", "84.6", "5.52", "+0.02"]
                    ],
                    dataTablePartB: [
                        ["mmol NaOH added", "pH (Buffer)", "pH (Water)", "ΔpH Buffer", "ΔpH Water"],
                        ["0.00", "4.76", "7.00", "0.00", "0.00"],
                        ["0.50", "4.85", "9.00", "+0.09", "+2.00"],
                        ["1.00", "4.94", "10.00", "+0.18", "+3.00"],
                        ["2.00", "5.14", "11.00", "+0.38", "+4.00"],
                        ["5.00", "5.76", "11.70", "+1.00", "+4.70"]
                    ],
                    analysis: [
                        "Henderson-Hasselbalch equation predicts buffer pH accurately (within 0.05 pH units)",
                        "Buffer resists pH change dramatically compared to water (5 mmol NaOH: ΔpH = 1.00 vs 4.70)",
                        "Buffer capacity is greatest at pH 4.76 = pKa (maximum slope of buffer capacity curve)",
                        "pH 4.00 and 5.50 buffers have lower capacity — further from pKa",
                        "Buffer becomes exhausted when one component is consumed; pH then changes rapidly"
                    ],
                    conclusions: [
                        "Henderson-Hasselbalch equation accurately predicts pH of acetate buffer",
                        "Buffers resist pH change far better than unbuffered solutions",
                        "Buffer capacity is greatest at pH = pKa; prepare buffer with pKa within 1 unit of target pH",
                        "Higher buffer concentration = greater buffer capacity at same pH"
                    ],
                    realWorldApplications: [
                        "Blood buffers: bicarbonate/carbonic acid (pH 7.35−7.45) and phosphate buffer in cells",
                        "Pharmaceutical formulation: drugs formulated in appropriate buffer for stability and absorption",
                        "Swimming pool water treatment: pH maintained at 7.2−7.8 (chlorine effectiveness)",
                        "Shampoo and cosmetics: pH buffers for skin/hair compatibility",
                        "Molecular biology: gel electrophoresis and enzyme assays require precise pH control"
                    ],
                    extensions: [
                        "Prepare phosphate buffer at pH 7.2 (appropriate for biological systems)",
                        "Simulate blood buffering: compare buffer capacity of carbonate vs phosphate at pH 7.4",
                        "Investigate effect of total buffer concentration (0.050 vs 0.100 vs 0.200 mol L⁻¹) on buffer capacity",
                        "Test whether temperature affects buffer pH; measure acetate buffer at 10°C, 25°C, 40°C"
                    ]
                }
            },

            // =====================================================
            // EXPERIMENT 4: ACID-BASE TITRATION
            // =====================================================

            acid_base_titration: {
                name: "Quantitative Acid-Base Titration: Standardization and Analysis",
                relatedTopics: ['titration', 'ph_calculations', 'buffer_systems'],
                category: 'quantitative_analysis',
                historicalBackground: {
                    scientist: "Joseph Gay-Lussac (1824) developed volumetric analysis; term 'titre' from French",
                    development: "Precision glassware (burettes) developed mid-19th century; revolutionized quantitative analysis",
                    significance: "Titration is the cornerstone of quantitative acid-base analysis in industry, medicine, and environmental science"
                },
                labExperiment: {
                    title: "Standardization of NaOH and Determination of Vinegar Acidity by Titration",
                    hypothesis: "NaOH can be standardized using primary standard KHP; this standard NaOH can then be used to determine the concentration of acetic acid in commercial vinegar",
                    purpose: "Standardize a NaOH solution using potassium hydrogen phthalate (KHP) as primary standard; use the standardized NaOH to determine the % acidity of commercial vinegar; understand the difference between endpoint and equivalence point and the role of indicators",
                    background: {
                        KHPStandard: "KHP (C₈H₅KO₄, M = 204.22 g mol⁻¹) is an ideal primary standard: pure, stable, non-hygroscopic, high molar mass (reduces weighing errors), reacts 1:1 with NaOH",
                        KHPreaction: "KHC₈H₄O₄ + NaOH → KNaC₈H₄O₄ + H₂O (1:1 reaction)",
                        vinegarTitration: "CH₃COOH + NaOH → CH₃COO⁻Na⁺ + H₂O (1:1); equivalence point pH ≈ 8.7 → phenolphthalein indicator",
                        percentAcidity: "% acidity (as acetic acid) = [n(CH₃COOH) × M(CH₃COOH) / mass(sample)] × 100"
                    },
                    variables: {
                        independent: "Identity of acid being titrated (KHP or acetic acid in vinegar)",
                        dependent: "Volume of NaOH required to reach endpoint",
                        controlled: ["Volume of analyte pipetted", "Indicator concentration", "Titration speed near endpoint"]
                    },
                    materials: [
                        "Potassium hydrogen phthalate (KHP) — primary standard grade",
                        "NaOH solution (~0.100 mol L⁻¹ — to be standardized)",
                        "Commercial white vinegar (sample to be analyzed)",
                        "Phenolphthalein indicator solution (0.1% in ethanol)",
                        "Burette (50 mL, class A), burette stand and clamp",
                        "Pipette (25.00 mL) and pipette filler",
                        "Conical flasks (250 mL) × 3 for each part",
                        "Analytical balance (0.0001 g precision)",
                        "Wash bottle with distilled water",
                        "White tile (to see color change)"
                    ],
                    safetyPrecautions: [
                        "NaOH is corrosive — wear gloves; wash immediately if skin contact occurs",
                        "Phenolphthalein dissolved in ethanol — flammable; keep from open flames",
                        "Vinegar is acidic but generally safe at working concentrations",
                        "Rinse burette with NaOH solution before filling (not distilled water)"
                    ],
                    procedure: [
                        "PART A: STANDARDIZATION OF NaOH WITH KHP",
                        "Accurately weigh 3 samples of KHP (~0.4−0.5 g each) by difference into labeled conical flasks",
                        "Dissolve each in ~50 mL distilled water; add 2 drops phenolphthalein indicator",
                        "Rinse and fill burette with NaOH solution; remove air bubble; record initial reading",
                        "Titrate each KHP sample to a faint persistent pink endpoint (30 s)",
                        "Record final burette reading; calculate volume of NaOH used",
                        "Calculate [NaOH] = n(KHP) / V(NaOH) for each trial",
                        "Accept results with concordant titre within 0.10 mL; calculate mean [NaOH]",
                        "",
                        "PART B: DETERMINATION OF ACETIC ACID IN VINEGAR",
                        "Pipette 25.00 mL of vinegar into a conical flask",
                        "Add 25.00 mL distilled water (dilutes color of vinegar)",
                        "Add 2 drops phenolphthalein indicator",
                        "Titrate with standardized NaOH to faint persistent pink endpoint",
                        "Repeat for 3 concordant results",
                        "Calculate: n(NaOH) = [NaOH] × V(NaOH); n(CH₃COOH) = n(NaOH)",
                        "Calculate [CH₃COOH] = n(CH₃COOH) / 0.025000 L",
                        "Calculate % acidity = [CH₃COOH] × M(CH₃COOH) × 100 / 1000 (g/100mL = %)"
                    ],
                    dataTablePartA: [
                        ["Trial", "Mass KHP (g)", "n(KHP) mol", "Initial burette (mL)", "Final burette (mL)", "Vol NaOH (mL)", "[NaOH] mol L⁻¹"],
                        ["1", "0.4212", "2.063×10⁻³", "0.15", "20.70", "20.55", "0.1004"],
                        ["2", "0.4189", "2.051×10⁻³", "0.15", "20.49", "20.34", "0.1008"],
                        ["3", "0.4201", "2.057×10⁻³", "0.15", "20.42", "20.27", "0.1015"],
                        ["Mean", "—", "—", "—", "—", "—", "0.1009"]
                    ],
                    dataTablePartB: [
                        ["Trial", "Vol vinegar (mL)", "Initial burette (mL)", "Final burette (mL)", "Vol NaOH (mL)", "n(CH₃COOH) mol", "[CH₃COOH] mol L⁻¹", "% Acidity"],
                        ["1", "25.00", "0.10", "35.15", "35.05", "3.537×10⁻³", "0.1415", "0.849%"],
                        ["2", "25.00", "0.10", "35.21", "35.11", "3.541×10⁻³", "0.1416", "0.850%"],
                        ["3", "25.00", "0.10", "35.18", "35.08", "3.540×10⁻³", "0.1416", "0.850%"],
                        ["Mean", "—", "—", "—", "—", "—", "0.1416", "0.850%"]
                    ],
                    analysis: [
                        "Standardized [NaOH] = 0.1009 mol L⁻¹ (not exactly 0.100 — as expected for approximate preparation)",
                        "Vinegar acidity = 0.850% w/v as acetic acid; commercial vinegar typically labeled 5% (different basis: w/w or undiluted)",
                        "Three concordant titres (within 0.10 mL) confirm reproducibility and technique",
                        "Phenolphthalein appropriate: equivalence point of CH₃COOH/NaOH ≈ pH 8.7 (within indicator range 8.2−10.0)",
                        "Using 1:1 stoichiometry valid for acetic acid (monoprotic weak acid)"
                    ],
                    errorAnalysis: [
                        "NaOH absorbs CO₂ and water from atmosphere — prepare fresh and store carefully; standardize regularly",
                        "Air bubble in burette tip gives falsely high volume reading",
                        "Endpoint beyond pale pink (overtitrating) gives falsely high volume",
                        "Parallax error when reading meniscus — eyes at level with meniscus bottom",
                        "Vinegar contains other acids (malic, tartaric) — result is total titratable acidity, not solely acetic acid"
                    ],
                    conclusions: [
                        "KHP is an excellent primary standard for standardizing NaOH solutions",
                        "Commercial white vinegar contains approximately 0.85% w/v titratable acidity (as acetic acid)",
                        "Phenolphthalein is the appropriate indicator for weak acid-strong base titrations",
                        "Careful technique (concordant results, proper endpoint recognition) is essential for accurate results",
                        "Standardization eliminates errors from approximate preparation of standard solutions"
                    ],
                    realWorldApplications: [
                        "Food industry: quality control of acidity in vinegar, wine, fruit juices (AOAC methods)",
                        "Pharmaceutical industry: assay of aspirin, vitamin C content by acid-base titration",
                        "Environmental analysis: alkalinity and acidity of water bodies",
                        "Industrial processes: control of process streams, electroplating bath acidity",
                        "Clinical chemistry: total acid in gastric juice, blood bicarbonate"
                    ],
                    extensions: [
                        "Compare % acidity of different commercial vinegars (white, cider, balsamic)",
                        "Determine vitamin C (ascorbic acid) content in orange juice by titration with standard NaOH",
                        "Study the effect of CO₂ contamination on NaOH concentration over time",
                        "Perform a back titration to determine calcium carbonate content of an eggshell"
                    ]
                }
            },

            // =====================================================
            // EXPERIMENT 5: ORGANIC ACID pKa AND STRUCTURE
            // =====================================================

            organic_pKa_structure: {
                name: "Investigating the Relationship Between Molecular Structure and pKa of Organic Acids",
                relatedTopics: ['acid_base_organic', 'ph_calculations', 'titration'],
                category: 'investigation',
                historicalBackground: {
                    scientist: "Louis Hammett (1937) quantified substituent effects on acidity with the Hammett equation; Robert Taft extended to aliphatic compounds",
                    significance: "Structure-activity relationships in acid-base chemistry are foundational to medicinal chemistry and organic synthesis",
                    industrialContext: "pKa values determine drug absorption, bioavailability, and formulation; critical in pharmaceutical development"
                },
                labExperiment: {
                    title: "Comparing pKa Values of Substituted Acetic Acids and Phenols",
                    hypothesis: "Electron-withdrawing substituents (Cl, NO₂) will increase acid strength (lower pKa) by stabilizing the conjugate base; electron-donating substituents (CH₃, OCH₃) will decrease acid strength (raise pKa)",
                    purpose: "Determine pKa values of a series of organic acids (acetic acid and halogenated acetic acids; phenol and substituted phenols) by the half-equivalence point method; correlate pKa with substituent electronic effects",
                    background: {
                        electronicEffects: {
                            inductive: "Electron-withdrawing groups (-I effect) disperses negative charge on carboxylate/phenoxide → lower pKa (stronger acid)",
                            resonance: "Electron-withdrawing groups (-M effect on ring) stabilize phenoxide further → lower pKa",
                            distance: "Inductive effect decreases rapidly with chain length: α >> β >> γ substitution"
                        },
                        hammettEquation: "log(Ka/Ka0) = σ × ρ; σ = substituent constant; ρ = reaction constant; allows quantitative prediction of pKa changes"
                    },
                    variables: {
                        independent: "Identity and position of substituent on acetic acid or phenol",
                        dependent: "pKa (measured as pH at half-equivalence point)",
                        controlled: ["Concentration of acid solutions", "Concentration of NaOH titrant", "Temperature", "Titration methodology"]
                    },
                    materials: [
                        "Acetic acid (CH₃COOH, pKa 4.76)",
                        "Chloroacetic acid (ClCH₂COOH, pKa 2.86)",
                        "Dichloroacetic acid (Cl₂CHCOOH, pKa 1.48)",
                        "Phenol (C₆H₅OH, pKa 9.99) — handle carefully",
                        "4-Nitrophenol (4-O₂N-C₆H₄OH, pKa 7.15)",
                        "4-Methylphenol (4-CH₃-C₆H₄OH, pKa 10.26)",
                        "Standardized NaOH (0.100 mol L⁻¹)",
                        "pH meter (calibrated)",
                        "Burette, pipettes, conical flasks",
                        "Graph paper or computer for plotting titration curves"
                    ],
                    safetyPrecautions: [
                        "Phenol and nitrophenols are toxic and corrosive — minimize contact, wear gloves and eye protection",
                        "Chloroacetic and dichloroacetic acids are corrosive and toxic — use fume hood",
                        "Dispose of phenol solutions in designated waste container (not drain)",
                        "All titrations should be conducted in a fume hood",
                        "Wash hands thoroughly after all work"
                    ],
                    procedure: [
                        "For each organic acid:",
                        "Prepare 0.100 mol L⁻¹ solution by accurate weighing and dissolution in distilled water",
                        "Pipette 25.00 mL into conical flask with magnetic stir bar",
                        "Immerse calibrated pH electrode",
                        "Fill burette with standardized 0.100 mol L⁻¹ NaOH",
                        "Record initial pH",
                        "Add NaOH in small increments (0.50 mL then 0.10 mL near half-equivalence and equivalence)",
                        "Record volume and pH after each addition",
                        "Plot titration curve for each acid",
                        "Identify equivalence point (steepest point); half-equivalence volume = Ve/2",
                        "Read pH at half-equivalence volume → this is the pKa",
                        "Compare pKa values across the series; plot pKa vs number of Cl substituents"
                    ],
                    dataTable: [
                        ["Acid", "Substituent", "Equivalence Vol (mL)", "Half-eq pH (pKa measured)", "Literature pKa", "Difference"],
                        ["Acetic acid", "−CH₃", "25.10", "4.74", "4.76", "−0.02"],
                        ["Chloroacetic acid", "−CH₂Cl", "25.05", "2.88", "2.86", "+0.02"],
                        ["Dichloroacetic acid", "−CHCl₂", "25.08", "1.52", "1.48", "+0.04"],
                        ["Phenol", "none", "24.95", "9.96", "9.99", "−0.03"],
                        ["4-Methylphenol", "4-CH₃", "25.02", "10.24", "10.26", "−0.02"],
                        ["4-Nitrophenol", "4-NO₂", "25.00", "7.12", "7.15", "−0.03"]
                    ],
                    analysis: [
                        "Acetic acids series: pKa decreases with each Cl added (2× Cl nearly doubles acid strength relative to one Cl)",
                        "Chloroacetic acid (pKa 2.88) is 75 times stronger than acetic acid (pKa 4.76): 10^(4.76−2.88) = 76",
                        "Dichloroacetic acid (pKa 1.52) is ~1700 times stronger than acetic acid: 10^(4.76−1.52) = 1738",
                        "Phenol series: NO₂ group (EWG) increases acidity dramatically (pKa 7.15 vs 9.99, ΔpKa = 2.84 = factor ~700)",
                        "CH₃ group (EDG) decreases acidity slightly (pKa 10.26 vs 9.99, ΔpKa = −0.27 = factor ~1.9)",
                        "Halogenation at α-carbon is more effective than aromatic substitution (direct inductive + no distance attenuation)"
                    ],
                    structureActivityRelationship: {
                        aceticAcidSeries: "Each Cl adds approximately 1.5−2 pKa units of acidity (inductive effect additive; diminishing return)",
                        phenolSeries: "Para-NO₂: very large effect (resonance + inductive into ring); para-CH₃: small effect",
                        predictions: [
                            "Trichloroacetic acid (pKa 0.66) would be predicted from trend",
                            "4-Chlorophenol (pKa 9.38) intermediate between phenol and 4-nitrophenol",
                            "4-Methoxyphenol (pKa 10.21) would be similar to 4-methylphenol"
                        ]
                    },
                    conclusions: [
                        "Electron-withdrawing groups increase organic acid strength (lower pKa); electron-donating groups decrease it",
                        "Inductive effects are additive: each additional Cl further lowers pKa of acetic acid",
                        "Resonance effects via aromatic ring (NO₂ group) can dramatically affect phenol pKa",
                        "Half-equivalence point titration method accurately measures pKa within 0.05 units",
                        "Structure-activity relationships are quantitatively predictable using Hammett σ constants"
                    ],
                    realWorldApplications: [
                        "Drug design: pKa determines ionization state at physiological pH → affects membrane permeability and efficacy",
                        "Herbicide and pesticide design: acid-base properties affect soil retention and bioavailability",
                        "Food preservatives: benzoic acid (pKa 4.20) must be in protonated form to cross cell membrane (active form below pH 4.2)",
                        "Biochemistry: enzyme active site residues have precisely tuned pKa values for catalysis",
                        "Environmental chemistry: predicting mobility of organic acids in soil and groundwater"
                    ],
                    extensions: [
                        "Extend series to trifluoroacetic acid (pKa 0.5); discuss fluorine vs chlorine inductive effect",
                        "Study ortho vs meta vs para substitution on benzoic acid (steric vs electronic effects)",
                        "Apply Hammett equation: plot log(Ka/Ka0) vs σ to determine ρ for each series",
                        "Use computational chemistry software to calculate charge distribution in conjugate bases and correlate with pKa"
                    ]
                }
            }
        };

        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.acidBaseExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.acidBaseTopics[topicId]) {
                    if (!this.acidBaseTopics[topicId].relatedExperiments) {
                        this.acidBaseTopics[topicId].relatedExperiments = [];
                    }
                    this.acidBaseTopics[topicId].relatedExperiments.push({
                        id: expId,
                        name: experiment.name,
                        category: experiment.category
                    });
                }
            });
        });
    }

    // ============================================================
    // MISCONCEPTIONS DATABASE
    // ============================================================

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            acid_base_definitions: {
                'Definitions': [
                    'Thinking all acids taste sour and all bases feel slippery — these are properties of some acids/bases in contact with skin/tongue but are not definitions',
                    'Believing Brønsted-Lowry and Lewis definitions contradict each other — Lewis is broader; all Brønsted-Lowry acids/bases are also Lewis acids/bases',
                    'Confusing amphoteric (can be acid or base) with amphiprotic (can donate or accept proton) — amphiprotic is a subset of amphoteric',
                    'Thinking the conjugate base of a strong acid is also a strong base — it is an extremely weak base (e.g., Cl⁻ is an essentially neutral anion)',
                    'Believing water is always neutral — pure water at 25°C is neutral (pH 7.00) but at 37°C neutral pH ≈ 6.81 (Kw is temperature-dependent)'
                ],
                'Strong vs Weak': [
                    'Confusing concentrated/dilute with strong/weak — concentration describes amount per volume; strength describes degree of dissociation',
                    'Thinking weak acids are less dangerous than strong acids — concentrated weak acids (e.g., glacial acetic acid) can be very corrosive',
                    'Believing strong acids always have lower pH than weak acids — a concentrated weak acid solution can have lower pH than a dilute strong acid',
                    'Thinking HF is a strong acid because it is a halide — HF is a weak acid (pKa 3.17) due to the very strong H−F bond; bond strength matters too, not just electronegativity alone'
                ]
            },
            ph_calculations: {
                'pH Scale and Calculation': [
                    'Thinking pH cannot go below 0 or above 14 — at very high or low concentrations, pH can exceed this range (pH −1 for 10 mol L⁻¹ HCl)',
                    'Believing neutral pH is always 7.00 — only at 25°C; at 37°C neutral pH ≈ 6.81',
                    'Confusing [H⁺] with pH — pH = −log[H⁺]; as [H⁺] increases by factor 10, pH decreases by exactly 1 unit',
                    'Thinking pOH + pH = 14 always — only at 25°C; at other temperatures pOH + pH = pKw',
                    'Forgetting to account for the 10x concentration effect: going from pH 4 to pH 3 means 10× more acidic, not just a bit more'
                ],
                'Weak Acid Equilibria': [
                    'Thinking [H⁺] = Ca for a weak acid (this is true only for strong acids)',
                    'Applying the approximation x << Ca when Ka/Ca > 0.01 (5% rule violated)',
                    'Ignoring autoionization of water contribution to [H⁺] for very dilute acid solutions (below ~10⁻⁶ mol L⁻¹, water makes significant contribution)',
                    'Thinking pKa and Ka are interchangeable numbers — pKa = −log(Ka); they vary inversely',
                    'Believing a larger Ka means a weaker acid — LARGER Ka = STRONGER acid; more dissociation'
                ]
            },
            buffer_systems: {
                'Buffer Composition and Action': [
                    'Thinking any mixture of an acid and a base makes a buffer — only weak acid + conjugate base (or weak base + conjugate acid) forms a buffer',
                    'Believing a buffer prevents any pH change — it resists pH change; large additions WILL overwhelm and exceed buffer capacity',
                    'Thinking buffer capacity is unlimited — buffers have finite capacity; adding enough strong acid/base exhausts them',
                    'Confusing the Henderson-Hasselbalch equation as exact — it assumes activity ≈ concentration; less accurate at high ionic strength or very high/low pH',
                    'Believing mixing any weak acid with its salt at 1:1 gives maximum buffer at any pH — maximum buffer capacity only at pH = pKa of that specific acid'
                ],
                'Biological Buffers': [
                    'Thinking blood buffer is just one system — blood uses carbonate, phosphate, and protein (hemoglobin, albumin) buffer systems together',
                    'Believing all pH values within "normal" range are equivalent — even small changes in blood pH (7.35 to 7.45 is "normal") have significant physiological effects',
                    'Thinking taking antacids directly neutralizes stomach acid — antacids raise stomach pH but stomach continues producing HCl; not a cure for overacidity'
                ]
            },
            titration: {
                'Equivalence Point and Endpoint': [
                    'Thinking equivalence point is always at pH 7.00 — only for strong acid/strong base; weak acid/strong base gives pH > 7; strong acid/weak base gives pH < 7',
                    'Confusing equivalence point with endpoint — equivalence point is the theoretical stoichiometric point; endpoint is where indicator changes (ideally the same, but not always)',
                    'Believing any indicator can be used for any titration — indicator must have transition range within the steep portion of the curve near equivalence point',
                    'Thinking overtitrating slightly does not matter — adding even 1 drop excess of NaOH past phenolphthalein endpoint can change pH from 8.7 to >10'
                ],
                'Calculations': [
                    'Using C₁V₁ = C₂V₂ without accounting for stoichiometry (e.g., H₂SO₄ + 2NaOH: need n₁/n₂ ratio)',
                    'Forgetting to use the concordant titres (averaged), not just any three values',
                    'Thinking molarity in g/L is the same as mol/L — must divide by molar mass to convert'
                ]
            },
            acid_base_organic: {
                'Structural Effects': [
                    'Thinking all OH-containing compounds are similarly acidic — alcohols (pKa ~16), phenols (pKa ~10), carboxylic acids (pKa ~5) span 10 orders of magnitude in Ka',
                    'Believing more bonds = less acidic (steric effect argument) — electronic effects (resonance, induction) dominate',
                    'Thinking amines are always basic — amides are essentially non-basic due to lone pair delocalization into C=O',
                    'Confusing acidity of organic acids with their reactivity — a more acidic compound does not necessarily react faster',
                    'Thinking electron-withdrawing groups always increase acidity — EWG increase acidity of ACIDS but decrease basicity of corresponding BASES; DONATING groups do the opposite'
                ],
                'pKa and Reaction Prediction': [
                    'Thinking the direction of acid-base reactions cannot be predicted without Ka values — pKa values give all the information needed',
                    'Forgetting that reaction goes toward weaker acid side — reaction goes to lower-pKa product for the acid side; products are always weaker acid and weaker base',
                    'Confusing thermodynamic acidity (pKa) with kinetic acidity (rate of proton removal) — these can differ significantly for C−H bonds'
                ]
            }
        };

        this.clarificationStrategies = {
            pKa_ladder: {
                method: 'Draw a vertical pKa ladder from −10 (strongest) to 50 (weakest); place compounds in order',
                effectiveness: 'Very high for predicting acid-base reaction directions and relative strengths'
            },
            conjugate_pair_analysis: {
                method: 'Identify conjugate acid-base pair on each side; reaction favors formation of weaker acid',
                effectiveness: 'High for predicting equilibrium position in acid-base reactions'
            },
            structural_comparison: {
                method: 'Draw conjugate bases and compare stability (resonance structures, charge delocalization)',
                effectiveness: 'Very high for understanding substituent effects on acidity'
            },
            ice_table: {
                method: 'Systematic ICE (Initial-Change-Equilibrium) approach for all weak acid/base calculations',
                effectiveness: 'High for avoiding arithmetic errors; teaches systematic problem-solving'
            },
            titration_curve_matching: {
                method: 'Match equivalence point pH to appropriate indicator transition range visually',
                effectiveness: 'High for indicator selection problems'
            },
            biological_context: {
                method: 'Connect buffer and pH concepts to blood, cells, enzyme function',
                effectiveness: 'Very high for motivation and retention; makes abstract concepts tangible'
            }
        };
    }

    // ============================================================
    // METACOGNITIVE PROMPTS
    // ============================================================

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about acids and bases from everyday life?",
                "Can you name three acids and three bases found in your kitchen?",
                "What do you predict will be most challenging about pH calculations?",
                "How does {topic} relate to chemistry topics you've already studied?",
                "What questions do you have about how acids and bases affect biological systems?"
            ],
            duringLearning: [
                "Can you explain in your own words why a weaker acid has a higher pKa value?",
                "How does the resonance structure of acetate ion explain why acetic acid is stronger than ethanol?",
                "Can you connect the buffer concept to how your blood maintains pH?",
                "Does your calculated pH value seem reasonable — is it acidic, neutral, or basic as expected?",
                "Can you draw the ICE table for this weak acid dissociation and identify each component?"
            ],
            afterLearning: [
                "What are the key differences between strong and weak acids in terms of both dissociation and pH calculation method?",
                "What surprised you while learning about buffer solutions?",
                "Can you predict which of two organic acids is stronger from their structures alone?",
                "How would you explain the Henderson-Hasselbalch equation to a classmate using a real example?",
                "What questions do you still have about acids and bases?"
            ],
            problemSolving: [
                "Is this a strong or weak acid/base? (this determines the calculation method)",
                "Do I need to set up an ICE table, or is the approximation valid? (check Ca/Ka ratio)",
                "Does my answer make chemical sense? (pH < 7 for acid, > 7 for base at 25°C)",
                "Have I correctly applied the stoichiometric ratio in this titration calculation?",
                "Does the pH at the equivalence point match expectations for this acid-base combination?"
            ],
            spectroscopyInterpretation: [
                "What does the molecular formula tell me about possible functional groups (−COOH, −OH, −NH₂)?",
                "Does the pKa of the compound suggest an acid, base, or amphoteric compound?",
                "Do the spectroscopic data (IR, NMR) confirm the presence of the functional groups I identified from pKa?",
                "Is the compound's behavior in water consistent with its pKa value?"
            ]
        };
    }

    // ============================================================
    // CONTEXTUAL SCENARIOS
    // ============================================================

    initializeContextualScenarios() {
        this.contextualScenarios = {
            acid_base_definitions: [
                {
                    scenario: "Antacid Chemistry",
                    context: "Antacids treat heartburn caused by excess stomach acid (HCl, pH 1−2)",
                    application: "Active ingredients (CaCO₃, Mg(OH)₂, Al(OH)₃, NaHCO₃) are Brønsted-Lowry bases that neutralize HCl",
                    question: "Why do antacid tablets fizz when dissolved in water or stomach acid?"
                },
                {
                    scenario: "Lewis Acids in Catalysis",
                    context: "AlCl₃ catalyzes Friedel-Crafts reactions in organic synthesis",
                    application: "AlCl₃ is a Lewis acid; it accepts a lone pair from Cl of RCl to generate carbocation electrophile R⁺",
                    question: "How does Lewis acid/base theory explain the role of AlCl₃ in Friedel-Crafts alkylation?"
                },
                {
                    scenario: "Hard and Soft Acids and Bases (HSAB)",
                    context: "Some metal ions preferentially bind certain ligands (Pearson's HSAB theory, 1963)",
                    application: "Hard Lewis acids (Mg²⁺, Ca²⁺) prefer hard bases (O donors, F⁻); soft acids (Ag⁺, Hg²⁺) prefer soft bases (S donors, I⁻)",
                    question: "Why do mercury and lead bind to sulfur-containing enzymes rather than oxygen-containing groups in the body?"
                }
            ],
            ph_calculations: [
                {
                    scenario: "Ocean Acidification",
                    context: "Atmospheric CO₂ dissolves in oceans: CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻",
                    application: "Ocean pH has fallen from 8.2 to 8.1 since industrialization (seemingly small, but represents 26% increase in [H⁺])",
                    question: "Why is a 0.1 unit decrease in ocean pH described as a 26% increase in acidity?"
                },
                {
                    scenario: "Blood pH and Respiratory Control",
                    context: "Blood pH must stay within 7.35−7.45; outside this causes acidosis or alkalosis",
                    application: "Breathing faster removes CO₂ → less H₂CO₃ → higher pH; hyperventilation can cause alkalosis",
                    question: "Why does breathing into a paper bag help someone who is hyperventilating?"
                }
            ],
            buffer_systems: [
                {
                    scenario: "Blood Transfusion and Storage",
                    context: "Stored blood is kept in phosphate-citrate buffer at pH 7.4",
                    application: "Buffer maintains pH to preserve red blood cell function; bicarbonate cannot be used (CO₂ would escape)",
                    question: "Why must the solution used to store donated blood contain a buffer?"
                },
                {
                    scenario: "Wine and Beer pH Control",
                    context: "Fermentation pH affects yeast activity and flavor compound development",
                    application: "Natural tartrate and citrate buffers in grape must; brewers adjust pH of mash with lactic acid or CaCO₃",
                    question: "Why might a winemaker add tartaric acid to grape juice before fermentation?"
                }
            ],
            titration: [
                {
                    scenario: "Aspirin Analysis",
                    context: "Quality control in aspirin manufacturing uses acid-base titration",
                    application: "Aspirin (acetylsalicylic acid, M = 180.16 g/mol, pKa 3.49) titrated with standardized NaOH to verify purity",
                    question: "A tablet labeled '500 mg aspirin' is dissolved and titrated; how many mL of 0.100 mol L⁻¹ NaOH are expected at equivalence?"
                },
                {
                    scenario: "Titration in the Kidney",
                    context: "Kidneys regulate blood pH by selectively excreting H⁺ or HCO₃⁻",
                    application: "Urine pH can vary from 4.5 to 8.0 depending on body acid-base balance; titratable acidity of urine measured clinically",
                    question: "Why does urine pH change during acidosis vs alkalosis?"
                }
            ],
            acid_base_organic: [
                {
                    scenario: "Thalidomide and Amino Acid Ionization",
                    context: "Amino acid drugs must be in the correct ionization state to cross cell membranes",
                    application: "Neutral (uncharged) form crosses lipid bilayer; only a tiny fraction may be neutral at physiological pH depending on pKa",
                    question: "An amino acid drug has pKa(NH₃⁺) = 9.1 and pKa(COOH) = 2.3. What fraction is uncharged at pH 7.4?"
                },
                {
                    scenario: "Aspirin and Stomach Absorption",
                    context: "Aspirin (pKa 3.49) must be protonated (neutral) to cross the stomach wall",
                    application: "At stomach pH 2: mainly protonated (neutral) → absorbed; at intestinal pH 6.5: mainly deprotonated → not absorbed well from stomach",
                    question: "Using Henderson-Hasselbalch, calculate the ratio of neutral to ionized aspirin at stomach pH 2.0 and intestinal pH 6.5"
                },
                {
                    scenario: "Enzyme Catalysis and Active Site pKa",
                    context: "Lysozyme cleaves bacterial cell walls using an aspartate (pKa ~3.5) and glutamate (pKa ~6.0) in its active site",
                    application: "Enzymes function optimally at pH where active site residues are in the correct ionization state; changing pH by 1 unit can eliminate activity",
                    question: "Why does lysozyme show a sharp pH optimum near pH 5, with rapid loss of activity above pH 6 or below pH 4?"
                }
            ]
        };
    }

    // ============================================================
    // ASSESSMENT RUBRICS
    // ============================================================

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall definitions and key facts about acid-base chemistry",
                    verbs: ["Define", "State", "List", "Identify", "Write the formula for", "Name"],
                    example: "State the Brønsted-Lowry definition of an acid"
                },
                understand: {
                    description: "Explain acid-base concepts and relationships",
                    verbs: ["Explain", "Describe", "Predict", "Classify", "Compare", "Summarize", "Interpret"],
                    example: "Explain why the equivalence point of a weak acid-strong base titration is above pH 7"
                },
                apply: {
                    description: "Use acid-base knowledge in calculations and predictions",
                    verbs: ["Calculate", "Determine", "Predict the pH", "Select", "Solve", "Use the Henderson-Hasselbalch equation to"],
                    example: "Calculate the pH of 0.150 mol L⁻¹ ammonia solution (Kb = 1.8 × 10⁻⁵)"
                },
                analyze: {
                    description: "Analyze titration curves, pKa data, and structural effects",
                    verbs: ["Analyze", "Deduce", "Interpret the titration curve", "Compare the pKa values", "Explain the effect of"],
                    example: "Analyze the ¹H NMR and IR data to determine if compound X is a carboxylic acid or an ester"
                },
                evaluate: {
                    description: "Evaluate buffer systems, indicator choice, and experimental design",
                    verbs: ["Evaluate", "Justify", "Select the best buffer", "Critique the experimental design", "Compare the effectiveness of"],
                    example: "Evaluate the relative suitability of methyl orange and phenolphthalein for the titration of NH₃ with HCl"
                },
                create: {
                    description: "Design buffer systems, titration procedures, and multi-step analysis plans",
                    verbs: ["Design a buffer", "Devise a procedure", "Propose a synthesis route", "Create an analysis plan"],
                    example: "Design a phosphate buffer at pH 7.20 with total phosphate concentration 0.200 mol L⁻¹"
                }
            },
            understandingLevels: {
                novice: {
                    characteristics: [
                        "Identifies acids and bases by name and formula",
                        "States definitions but struggles to apply them to unfamiliar compounds",
                        "Can calculate pH of strong acid/base from concentration"
                    ],
                    support: [
                        "Provide pKa reference table",
                        "Use strong acid/base pH calculations first",
                        "Provide ICE table templates"
                    ]
                },
                developing: {
                    characteristics: [
                        "Applies Henderson-Hasselbalch to buffer problems",
                        "Identifies conjugate acid-base pairs",
                        "Performs titration calculations with guidance"
                    ],
                    support: [
                        "Practice weak acid pH calculations",
                        "Work through buffer capacity examples",
                        "Introduce structural effects on pKa"
                    ]
                },
                proficient: {
                    characteristics: [
                        "Calculates pH of all solution types independently",
                        "Designs and analyzes buffer systems",
                        "Selects appropriate indicators for given titrations",
                        "Explains structural effects on pKa"
                    ],
                    support: [
                        "Introduce polyprotic acid systems",
                        "Work through complex biological buffer scenarios",
                        "Quantitative structure-activity relationships"
                    ]
                },
                expert: {
                    characteristics: [
                        "Applies HSAB theory and Hammett equation",
                        "Designs analytical methods for complex samples",
                        "Predicts enzyme behavior from active site pKa values",
                        "Critically evaluates pharmaceutical pKa data"
                    ],
                    support: [
                        "Research literature problems (drug bioavailability, enzyme kinetics)",
                        "Engage with computational pKa prediction methods",
                        "Connect to thermodynamic analysis (ΔG of proton transfer)"
                    ]
                }
            }
        };

        this.assessmentQuestions = {
            acid_base_definitions: {
                remember: "State the Lewis definition of an acid and give one example that is a Lewis acid but not a Brønsted-Lowry acid",
                understand: "Explain why NH₃ can act as a Brønsted-Lowry base in water even though it contains no OH⁻",
                apply: "Identify the conjugate acid-base pairs in: H₂PO₄⁻ + H₂O ⇌ HPO₄²⁻ + H₃O⁺",
                analyze: "Analyze why HF is a weaker acid than HCl despite fluorine being more electronegative than chlorine",
                evaluate: "Evaluate whether the Arrhenius definition or Brønsted-Lowry definition is more useful for understanding biological acid-base chemistry",
                create: "Design a thought experiment to demonstrate that water is amphoteric using two different chemical equations"
            },
            ph_calculations: {
                remember: "Write the expression for Ka and state the relationship between Ka and pKa",
                understand: "Explain why the same concentration of strong acid gives a lower pH than weak acid",
                apply: "Calculate the pH of 0.0500 mol L⁻¹ propanoic acid (Ka = 1.3 × 10⁻⁵)",
                analyze: "An acid solution has pH 3.00 at 0.100 mol L⁻¹ and pH 3.50 at 0.010 mol L⁻¹. Determine whether this is a strong or weak acid",
                evaluate: "Evaluate the validity of the approximation [H⁺] ≈ √(Ka × Ca) for 0.001 mol L⁻¹ acetic acid (Ka = 1.8 × 10⁻⁵)",
                create: "Design a calculation strategy to find the pH of a 0.100 mol L⁻¹ solution of the amino acid glycine (pKa₁ = 2.35, pKa₂ = 9.78)"
            },
            buffer_systems: {
                remember: "State the Henderson-Hasselbalch equation and identify each term",
                understand: "Explain why a buffer is most effective (has greatest capacity) at pH = pKa of the weak acid component",
                apply: "Calculate the pH of a buffer prepared from 0.200 mol L⁻¹ NH₃ and 0.120 mol L⁻¹ NH₄Cl (pKa of NH₄⁺ = 9.25)",
                analyze: "A buffer at pH 7.40 uses the H₂PO₄⁻/HPO₄²⁻ system (pKa = 7.20). Calculate the molar ratio of HPO₄²⁻ to H₂PO₄⁻ needed",
                evaluate: "Evaluate whether acetic acid/acetate (pKa 4.76) or phosphate (pKa 7.20) is more suitable as a buffer for a biochemistry experiment at pH 7.0",
                create: "Design a carbonate/bicarbonate buffer at pH 9.50 (pKa of H₂CO₃ = 6.35; pKa of HCO₃⁻ = 10.33); determine which pair to use and the required ratio"
            },
            titration: {
                remember: "State the difference between the equivalence point and the endpoint of a titration",
                understand: "Explain why phenolphthalein is a better indicator than methyl orange for the titration of ethanoic acid with sodium hydroxide",
                apply: "In a titration, 24.65 cm³ of NaOH (0.0985 mol L⁻¹) neutralizes 25.00 cm³ of HCl. Calculate [HCl].",
                analyze: "A titration curve shows the steep rise from pH 6 to pH 8 at the equivalence point. What can you deduce about the acid and base used?",
                evaluate: "Evaluate the precision and accuracy of using an indicator vs a pH meter for determining the equivalence point in a titration of weak acid with strong base",
                create: "Design a back-titration procedure to determine the percentage of calcium carbonate in an eggshell, including calculations for a specific experimental scenario"
            },
            acid_base_organic: {
                remember: "List four structural features that increase the acidity of organic acids",
                understand: "Explain why trichloroacetic acid (pKa 0.66) is a much stronger acid than acetic acid (pKa 4.76)",
                apply: "Rank the following in order of increasing acidity: CH₃OH, C₆H₅OH, CH₃COOH, CCl₃COOH, H₂O",
                analyze: "Analyze the difference in basicity between CH₃NH₂ (pKb 3.36) and C₆H₅NH₂ (pKb 9.42) in terms of electronic structure",
                evaluate: "Evaluate which of the following will react more completely with NaOH: phenol (pKa 9.99) or acetic acid (pKa 4.76), and justify your answer quantitatively",
                create: "Design a multi-step synthesis to convert 4-nitrobenzoic acid (pKa 3.44) to 4-aminobenzoic acid (pKa 4.85) and predict how this changes its acid-base behavior in pharmaceutical applications"
            }
        };
    }

    // ============================================================
    // TOPIC HANDLERS — FULL IMPLEMENTATIONS
    // ============================================================

    handleAcidBaseDefinitions(problem) {
        const content = {
            topic: "Acid-Base Definitions",
            category: 'acid_base_theory',
            summary: "Three complementary definitions describe acids and bases with increasing generality. Arrhenius (H⁺/OH⁻ in water) is the most restricted. Brønsted-Lowry (proton donor/acceptor) covers any proton transfer. Lewis (electron pair acceptor/donor) is the most general and encompasses reactions with no proton transfer at all.",
            definitions: {
                arrhenius: {
                    acid: "Produces H⁺ (H₃O⁺) in aqueous solution",
                    base: "Produces OH⁻ in aqueous solution",
                    examples: {
                        acids: ["HCl → H⁺ + Cl⁻", "H₂SO₄ → 2H⁺ + SO₄²⁻", "CH₃COOH ⇌ H⁺ + CH₃COO⁻"],
                        bases: ["NaOH → Na⁺ + OH⁻", "Ca(OH)₂ → Ca²⁺ + 2OH⁻"]
                    },
                    limitation: "Restricted to aqueous solutions; cannot explain NH₃ as a base in non-aqueous solvents"
                },
                bronstedLowry: {
                    acid: "Proton (H⁺) donor",
                    base: "Proton (H⁺) acceptor",
                    examples: {
                        acids: [
                            "HCl + H₂O → H₃O⁺ + Cl⁻ (HCl donates H⁺ to water)",
                            "CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻",
                            "NH₄⁺ + H₂O ⇌ H₃O⁺ + NH₃ (ammonium as acid)"
                        ],
                        bases: [
                            "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ (NH₃ accepts H⁺ from water)",
                            "CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻",
                            "H₂O + HCl → H₃O⁺ + Cl⁻ (water as base)"
                        ]
                    },
                    amphoteric: "Water is amphoteric: acts as acid (donates H⁺ to NH₃) and as base (accepts H⁺ from HCl)"
                },
                lewis: {
                    acid: "Electron pair acceptor",
                    base: "Electron pair donor",
                    examples: {
                        acids: [
                            "BF₃ accepts lone pair from NH₃: F₃B←:NH₃",
                            "AlCl₃ accepts lone pair from Cl⁻: AlCl₄⁻",
                            "Fe³⁺ accepts lone pairs from H₂O: [Fe(H₂O)₆]³⁺",
                            "H⁺ accepts lone pair from any base"
                        ],
                        bases: [
                            "NH₃ donates lone pair: N has one lone pair",
                            "H₂O donates lone pair from O",
                            "All halide ions (F⁻, Cl⁻, Br⁻, I⁻)",
                            "CO (through C lone pair)"
                        ]
                    },
                    advantage: "Most general; explains coordination chemistry, Friedel-Crafts catalysis, and any electron pair transfer"
                }
            },
            conjugatePairs: {
                definition: "When HA donates H⁺ to B: HA + B ⇌ A⁻ + BH⁺; HA/A⁻ and BH⁺/B are conjugate pairs",
                principle: "Stronger acid → weaker conjugate base; weaker acid → stronger conjugate base",
                examples: [
                    { acid: "HCl (strong)", conjugateBase: "Cl⁻ (extremely weak base, essentially neutral)", relationship: "Strong acid / very weak conjugate base" },
                    { acid: "CH₃COOH (pKa 4.76)", conjugateBase: "CH₃COO⁻ (moderate conjugate base, pKb 9.24)", relationship: "Ka × Kb = Kw" },
                    { acid: "H₂O (pKa 15.7)", conjugateBase: "OH⁻ (moderate-strong base, pKb 0.0 using Kw definition)", relationship: "Ka × Kb = Kw" },
                    { acid: "NH₄⁺ (pKa 9.25)", conjugateBase: "NH₃ (pKb 4.74)", relationship: "pKa(NH₄⁺) + pKb(NH₃) = 14.00" }
                ],
                kRelationship: "For conjugate acid-base pair: Ka × Kb = Kw = 1.0 × 10⁻¹⁴ at 25°C; pKa + pKb = 14.00"
            },
            strongVsWeak: {
                strong: {
                    acids: {
                        list: ["HCl", "HBr", "HI", "HNO₃", "HClO₄", "H₂SO₄ (1st ionization)", "HClO₃"],
                        behavior: "Essentially complete dissociation; [H⁺] ≈ Ca; Ka >> 1",
                        note: "In water, all strong acids appear equally strong (leveling effect) — differentiated in non-aqueous solvents"
                    },
                    bases: {
                        list: ["NaOH", "KOH", "LiOH", "RbOH", "CsOH", "Ca(OH)₂", "Ba(OH)₂"],
                        behavior: "Complete dissociation; [OH⁻] = Cb (or 2×Cb for Ca(OH)₂)",
                        note: "Solubility may limit effective concentration (Ca(OH)₂ only slightly soluble)"
                    }
                },
                weak: {
                    acids: {
                        list: ["CH₃COOH", "HF", "H₂CO₃", "H₃PO₄", "NH₄⁺", "HCN", "H₂S", "phenol", "all organic carboxylic acids"],
                        behavior: "Partial dissociation; equilibrium established; Ka << 1",
                        calculation: "Requires ICE table and Ka expression"
                    },
                    bases: {
                        list: ["NH₃", "amines (RNH₂, R₂NH, R₃N)", "pyridine", "CO₃²⁻", "HCO₃⁻", "CH₃COO⁻"],
                        behavior: "Partial protonation by water; Kb << 1",
                        calculation: "Requires ICE table with Kb"
                    }
                }
            },
            autoionizationOfWater: {
                equation: "H₂O + H₂O ⇌ H₃O⁺ + OH⁻",
                Kw: "Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C",
                pKw: "pKw = 14.00 at 25°C",
                temperature: "Kw increases with temperature: at 37°C Kw = 2.4 × 10⁻¹⁴; neutral pH = 6.81 (not 7.00!)",
                neutralCondition: "[H₃O⁺] = [OH⁻] (not necessarily pH 7.00)"
            },
            examples: [
                { compound: "HCl", type: "Strong Brønsted-Lowry acid (and Lewis acid via H⁺)", definition: "All three", notes: "Completely dissociates in water" },
                { compound: "NH₃", type: "Weak Brønsted-Lowry base (and Lewis base)", definition: "Brønsted-Lowry and Lewis, NOT Arrhenius", notes: "Does not produce OH⁻ directly; accepts H⁺ from water" },
                { compound: "BF₃", type: "Lewis acid only", definition: "Lewis only", notes: "Cannot donate/accept H⁺ — only accepts electron pair" },
                { compound: "H₂O", type: "Amphoteric; weak acid and weak base (Brønsted-Lowry)", definition: "All three", notes: "Leveling solvent; autoionizes" },
                { compound: "Al³⁺", type: "Lewis acid; hydrolyzes in water", definition: "Lewis; produces H⁺ (weak Arrhenius acid via hydrolysis)", notes: "Al(H₂O)₆³⁺ → Al(H₂O)₅(OH)²⁺ + H⁺; aqueous Al³⁺ is acidic" }
            ],
            applications: [
                "Biological chemistry: all enzyme mechanisms involve Lewis or Brønsted-Lowry acid-base steps",
                "Industrial catalysis: Lewis acids (AlCl₃, BF₃, ZnCl₂) catalyze Friedel-Crafts reactions",
                "Organic synthesis: Brønsted-Lowry acid-base reactions for deprotonation steps",
                "Environmental science: CO₂ as Lewis acid reacting with water; acid rain formation",
                "Medicine: antacids neutralize HCl (Arrhenius/Brønsted-Lowry); many drugs are weak acids or bases"
            ]
        };

        return content;
    }

    handlePhCalculations(problem) {
        const content = {
            topic: "pH and Equilibrium Calculations",
            category: 'quantitative',
            summary: "pH quantifies hydrogen ion concentration on a logarithmic scale (pH = −log[H⁺]). Strong acids/bases: use complete dissociation directly. Weak acids/bases: set up ICE table and solve Ka or Kb equilibrium expression. Approximation valid when Ca/Ka > 100; otherwise solve quadratic.",
            fundamentals: {
                phScale: {
                    definition: "pH = −log₁₀[H⁺] = −log₁₀[H₃O⁺]",
                    pOH: "pOH = −log₁₀[OH⁻]",
                    relationship: "pH + pOH = pKw = 14.00 at 25°C",
                    scale: {
                        0: "Strongly acidic ([H⁺] = 1 mol L⁻¹)",
                        7: "Neutral at 25°C ([H⁺] = [OH⁻] = 10⁻⁷ mol L⁻¹)",
                        14: "Strongly basic ([OH⁻] = 1 mol L⁻¹)"
                    },
                    logarithmicNature: "Each pH unit represents 10× change in [H⁺]; pH 3 is 100× more acidic than pH 5"
                },
                equilibriumConstants: {
                    Ka: "Ka = [H⁺][A⁻]/[HA]; acid strength — larger Ka = stronger acid",
                    Kb: "Kb = [BH⁺][OH⁻]/[B]; base strength — larger Kb = stronger base",
                    KwRelationship: "Ka(acid) × Kb(conjugate base) = Kw = 1.0 × 10⁻¹⁴",
                    pKRelationships: "pKa = −log(Ka); pKb = −log(Kb); pKa + pKb = 14.00 (conjugate pair)"
                }
            },
            calculationMethods: {
                strongAcid: {
                    principle: "Complete dissociation: HA → H⁺ + A⁻; [H⁺] = Ca",
                    formula: "pH = −log(Ca)",
                    monoprotic: {
                        example: { problem: "pH of 0.0500 mol L⁻¹ HNO₃", solution: "[H⁺] = 0.0500; pH = −log(0.0500) = 1.30" }
                    },
                    diprotic: {
                        example: {
                            problem: "pH of 0.0100 mol L⁻¹ H₂SO₄",
                            note: "At low concentration both ionizations essentially complete: [H⁺] = 2 × 0.0100 = 0.0200",
                            solution: "pH = −log(0.0200) = 1.70"
                        }
                    },
                    veryDilute: {
                        note: "Below ~10⁻⁶ mol L⁻¹, contribution of water autoionization is significant",
                        correction: "[H⁺]total = [H⁺]acid + [H⁺]water; solve simultaneously; pH never exceeds 7.00 for any acid"
                    }
                },
                strongBase: {
                    principle: "Complete dissociation: BOH → B⁺ + OH⁻; [OH⁻] = Cb × n",
                    formula: "pOH = −log(Cb); pH = 14.00 − pOH",
                    examples: [
                        { problem: "pH of 0.0200 mol L⁻¹ NaOH", solution: "[OH⁻] = 0.0200; pOH = 1.70; pH = 12.30" },
                        { problem: "pH of 0.0100 mol L⁻¹ Ca(OH)₂", solution: "[OH⁻] = 2 × 0.0100 = 0.0200; pOH = 1.70; pH = 12.30" }
                    ]
                },
                weakAcid: {
                    principle: "Partial dissociation; equilibrium HA ⇌ H⁺ + A⁻; use ICE table",
                    ICETable: {
                        setup: [
                            "         HA      H⁺    A⁻",
                            "I:       Ca       0     0",
                            "C:       −x      +x    +x",
                            "E:       Ca−x     x     x"
                        ],
                        expression: "Ka = x² / (Ca − x)"
                    },
                    approximation: {
                        condition: "If Ca/Ka > 100 (or equivalently Ca >> Ka): x << Ca",
                        simplified: "Ka ≈ x²/Ca → x = √(Ka × Ca)",
                        validation: "Check x/Ca < 0.05 (5%) — if fails, use quadratic",
                        examples: [
                            {
                                problem: "pH of 0.100 mol L⁻¹ CH₃COOH (Ka = 1.8 × 10⁻⁵)",
                                steps: [
                                    "Ca/Ka = 0.100/1.8×10⁻⁵ = 5556 >> 100 ✓ (approx valid)",
                                    "x = √(1.8×10⁻⁵ × 0.100) = √(1.8×10⁻⁶) = 1.34×10⁻³",
                                    "Validation: 1.34×10⁻³/0.100 = 1.34% < 5% ✓",
                                    "pH = −log(1.34×10⁻³) = 2.87"
                                ]
                            },
                            {
                                problem: "pH of 0.0100 mol L⁻¹ HF (Ka = 6.6 × 10⁻⁴)",
                                steps: [
                                    "Ca/Ka = 0.0100/6.6×10⁻⁴ = 15.2 < 100 (approx may fail)",
                                    "Approx: x ≈ √(6.6×10⁻⁴ × 0.0100) = 2.57×10⁻³",
                                    "Validation: 2.57×10⁻³/0.0100 = 25.7% > 5% ✗ — use quadratic",
                                    "Quadratic: x² + 6.6×10⁻⁴x − 6.6×10⁻⁶ = 0",
                                    "x = [−6.6×10⁻⁴ + √((6.6×10⁻⁴)² + 4×6.6×10⁻⁶)] / 2",
                                    "x = [−6.6×10⁻⁴ + √(2.68×10⁻⁵)] / 2 = [−6.6×10⁻⁴ + 5.18×10⁻³] / 2",
                                    "x = 2.26×10⁻³ mol L⁻¹; pH = −log(2.26×10⁻³) = 2.65"
                                ]
                            }
                        ]
                    }
                },
                weakBase: {
                    principle: "Partial proton acceptance from water: B + H₂O ⇌ BH⁺ + OH⁻",
                    ICETable: {
                        setup: [
                            "         B       BH⁺    OH⁻",
                            "I:       Cb       0      ≈0",
                            "C:       −x      +x     +x",
                            "E:       Cb−x     x       x"
                        ],
                        expression: "Kb = x² / (Cb − x)"
                    },
                    examples: [
                        {
                            problem: "pH of 0.0500 mol L⁻¹ NH₃ (Kb = 1.8 × 10⁻⁵; or use pKa(NH₄⁺) = 9.25)",
                            steps: [
                                "Cb/Kb = 0.0500/1.8×10⁻⁵ = 2778 >> 100 ✓",
                                "x = √(1.8×10⁻⁵ × 0.0500) = √(9.0×10⁻⁷) = 9.49×10⁻⁴",
                                "pOH = −log(9.49×10⁻⁴) = 3.02",
                                "pH = 14.00 − 3.02 = 10.98"
                            ]
                        }
                    ]
                },
                polyproticAcids: {
                    principle: "Multiple Ka values; Ka₁ >> Ka₂ >> Ka₃ → pH determined by first ionization only",
                    H3PO4: {
                        Ka1: "7.1×10⁻³ (pKa₁ 2.15)", Ka2: "6.3×10⁻⁸ (pKa₂ 7.20)", Ka3: "4.2×10⁻¹³ (pKa₃ 12.38)",
                        phCalculation: "Use Ka₁ only for pH of H₃PO₄ solution (Ka₂/Ka₁ = 8.9×10⁻⁶ — negligible contribution)"
                    },
                    H2CO3: {
                        Ka1: "4.3×10⁻⁷ (pKa₁ 6.37)", Ka2: "4.7×10⁻¹¹ (pKa₂ 10.33)",
                        note: "Apparent Ka₁ includes dissolved CO₂: CO₂(aq) + H₂O ⇌ H⁺ + HCO₃⁻"
                    },
                    buffer: "Each pair (H₃PO₄/H₂PO₄⁻, H₂PO₄⁻/HPO₄²⁻, HPO₄²⁻/PO₄³⁻) can form a buffer near its respective pKa"
                },
                saltHydrolysis: {
                    definition: "Dissolution of a salt whose ion(s) react with water to change pH",
                    acidSalt: {
                        example: "NH₄Cl → NH₄⁺ + Cl⁻; NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺ → acidic solution",
                        calculation: "Treat NH₄⁺ as weak acid with Ka = Kw/Kb(NH₃) = 10⁻¹⁴/1.8×10⁻⁵ = 5.6×10⁻¹⁰"
                    },
                    basicSalt: {
                        example: "CH₃COONa → Na⁺ + CH₃COO⁻; CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ → basic solution",
                        calculation: "Treat CH₃COO⁻ as weak base with Kb = Kw/Ka(CH₃COOH) = 10⁻¹⁴/1.8×10⁻⁵ = 5.6×10⁻¹⁰"
                    },
                    neutralSalt: {
                        example: "NaCl: Na⁺ and Cl⁻ do not hydrolyze; pH = 7.00",
                        note: "Salt of strong acid + strong base → neutral solution"
                    }
                }
            },
            commonPHValues: [
                { solution: "0.1 mol L⁻¹ HCl (strong acid)", pH: "1.00" },
                { solution: "0.1 mol L⁻¹ CH₃COOH (weak acid)", pH: "2.87" },
                { solution: "0.1 mol L⁻¹ CH₃COONa (salt of weak acid)", pH: "8.87" },
                { solution: "0.1 mol L⁻¹ NH₄Cl (salt of weak base)", pH: "5.13" },
                { solution: "0.1 mol L⁻¹ NH₃ (weak base)", pH: "11.13" },
                { solution: "0.1 mol L⁻¹ NaOH (strong base)", pH: "13.00" }
            ],
            applications: [
                "Pharmaceutical formulation: drug solubility and membrane permeability depend on ionization state",
                "Environmental chemistry: pH of rain, rivers, and soils affects bioavailability of nutrients and toxins",
                "Food chemistry: pH affects flavor, preservation (low pH inhibits microbial growth), and enzyme activity",
                "Industrial processes: pH control in electroplating, dyeing, paper manufacture, wastewater treatment",
                "Clinical chemistry: blood gases and acid-base status assessment from pH, pCO₂, and HCO₃⁻"
            ]
        };

        return content;
    }

    handleBufferSystems(problem) {
        const content = {
            topic: "Buffer Systems",
            category: 'acid_base_equilibria',
            summary: "Buffer solutions resist pH change by containing a weak acid-conjugate base pair in appreciable concentrations. pH is given by the Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]). Buffer capacity is greatest at pH = pKa and within pKa ± 1 pH unit. Biological buffers (carbonate, phosphate, protein) maintain physiological pH.",
            composition: {
                types: [
                    {
                        type: "Weak acid + conjugate base",
                        example: "CH₃COOH + CH₃COO⁻Na⁺ (acetate buffer, pKa 4.76)",
                        preparation: "Mix CH₃COOH and CH₃COONa in calculated ratio; or partially neutralize CH₃COOH with NaOH"
                    },
                    {
                        type: "Weak base + conjugate acid",
                        example: "NH₃ + NH₄Cl (ammonia buffer, pKa(NH₄⁺) = 9.25)",
                        preparation: "Mix NH₃ and NH₄Cl in calculated ratio; or partially neutralize NH₃ with HCl"
                    }
                ],
                nonBuffers: [
                    "Strong acid alone (no conjugate base reservoir)",
                    "Strong base alone (no conjugate acid reservoir)",
                    "Mixture of two strong acids/bases",
                    "Very dilute solutions (insufficient buffering capacity even if correct composition)"
                ]
            },
            hendersonHasselbalch: {
                equation: "pH = pKa + log([A⁻]/[HA])",
                derivation: [
                    "Ka = [H⁺][A⁻]/[HA]",
                    "[H⁺] = Ka × [HA]/[A⁻]",
                    "−log[H⁺] = −log(Ka) − log([HA]/[A⁻])",
                    "pH = pKa + log([A⁻]/[HA])"
                ],
                specialCases: [
                    { condition: "[A⁻] = [HA]", result: "log(1) = 0; pH = pKa (half-equivalence point; maximum buffer capacity)" },
                    { condition: "[A⁻]/[HA] = 10", result: "log(10) = 1; pH = pKa + 1" },
                    { condition: "[A⁻]/[HA] = 0.1", result: "log(0.1) = −1; pH = pKa − 1" }
                ],
                limitations: [
                    "Assumes activity = concentration (valid for dilute solutions, ionic strength < 0.1 mol L⁻¹)",
                    "Assumes pKa constant (temperature and ionic strength can shift pKa slightly)",
                    "Not valid near pH extremes or very high buffer concentrations"
                ],
                workedExamples: [
                    {
                        problem: "Calculate pH of buffer: 0.150 mol L⁻¹ CH₃COOH + 0.250 mol L⁻¹ CH₃COONa",
                        solution: "pH = 4.76 + log(0.250/0.150) = 4.76 + log(1.667) = 4.76 + 0.222 = 4.98"
                    },
                    {
                        problem: "What ratio of NH₃ to NH₄Cl is needed for pH 9.00? (pKa(NH₄⁺) = 9.25)",
                        solution: "9.00 = 9.25 + log([NH₃]/[NH₄⁺]); log([NH₃]/[NH₄⁺]) = −0.25; [NH₃]/[NH₄⁺] = 10^(−0.25) = 0.562"
                    },
                    {
                        problem: "Calculate pH change when 0.010 mol HCl added to 1.00 L acetate buffer (0.200 mol L⁻¹ CH₃COOH, 0.200 mol L⁻¹ CH₃COO⁻)",
                        solution: [
                            "Initial pH: 4.76 + log(0.200/0.200) = 4.76",
                            "HCl reacts with CH₃COO⁻: CH₃COO⁻ + H⁺ → CH₃COOH",
                            "New [CH₃COO⁻] = 0.200 − 0.010 = 0.190 mol L⁻¹",
                            "New [CH₃COOH] = 0.200 + 0.010 = 0.210 mol L⁻¹",
                            "New pH = 4.76 + log(0.190/0.210) = 4.76 − 0.043 = 4.72",
                            "ΔpH = 0.04 (compare: same HCl in water would give pH ≈ 2.00, ΔpH ≈ 5.00)"
                        ]
                    }
                ]
            },
            bufferCapacity: {
                definition: "β = |dn/dpH| in mol L⁻¹ per pH unit; amount of strong acid/base needed to change pH by 1 unit per litre",
                formula: "β = 2.303 × C × Ka × [H⁺] / (Ka + [H⁺])²",
                maximumCapacity: "Maximum β at [H⁺] = Ka (pH = pKa); β_max = 2.303 × C / 4 = 0.576 × C",
                effectiveRange: "Useful buffering: pKa ± 1; at pKa ± 2 buffer capacity reduced ~10-fold",
                concentrationEffect: "Doubling buffer concentration doubles β; same pH, double capacity",
                factors: ["Total buffer concentration (higher = more capacity)", "pH relative to pKa (closest = most capacity)", "Temperature (affects Ka, shifts pKa and hence pH)"]
            },
            biologicalSystems: {
                blood: {
                    system: "H₂CO₃ (dissolved CO₂) / HCO₃⁻; pKa₁ = 6.1 (apparent); normal blood pH 7.40",
                    ratio: "Normal: [HCO₃⁻]/[H₂CO₃] = 10^(7.40 − 6.10) = 10^1.30 = 20:1",
                    regulation: {
                        respiratory: "Lungs regulate pCO₂ (affects [H₂CO₃]): fast response (seconds-minutes)",
                        renal: "Kidneys regulate [HCO₃⁻]: slow response (hours-days)"
                    },
                    acidosis: {
                        respiratory: "↑CO₂ (hypoventilation) → ↑[H₂CO₃] → ↓pH < 7.35",
                        metabolic: "↓[HCO₃⁻] (e.g., diabetic ketoacidosis) → ↓pH < 7.35"
                    },
                    alkalosis: {
                        respiratory: "↓CO₂ (hyperventilation) → ↓[H₂CO₃] → ↑pH > 7.45",
                        metabolic: "↑[HCO₃⁻] (e.g., vomiting loss of HCl) → ↑pH > 7.45"
                    }
                },
                intracellular: {
                    system: "H₂PO₄⁻/HPO₄²⁻; pKa₂ = 7.20 — close to intracellular pH",
                    additionalSystem: "Protein histidine residues (imidazole pKa ~6.0) also contribute significantly"
                },
                oceanAcidification: {
                    system: "CO₂(aq) + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ ⇌ 2H⁺ + CO₃²⁻",
                    currentSituation: "Ocean pH dropped from ~8.2 to ~8.1 since industrialization (30% increase in [H⁺])",
                    impact: "Reduced CO₃²⁻ → threatens CaCO₃ shell formation in corals and molluscs"
                }
            },
            selectingBuffer: {
                principle: "Choose weak acid whose pKa is within 1 unit of target pH",
                table: [
                    { pH_range: "3.7 − 5.8", system: "Acetic acid/acetate", pKa: "4.76" },
                    { pH_range: "5.0 − 7.0", system: "MES (zwitterionic)", pKa: "6.10" },
                    { pH_range: "6.2 − 8.2", system: "Phosphate (H₂PO₄⁻/HPO₄²⁻)", pKa: "7.20" },
                    { pH_range: "7.0 − 9.0", system: "HEPES (zwitterionic)", pKa: "7.55" },
                    { pH_range: "7.2 − 9.0", system: "Tris-HCl", pKa: "8.08" },
                    { pH_range: "8.2 − 10.3", system: "Ammonium/ammonia", pKa: "9.25" },
                    { pH_range: "9.2 − 11.0", system: "Carbonate/bicarbonate", pKa: "10.33" }
                ]
            }
        };

        return content;
    }

    handleTitration(problem) {
        const content = {
            topic: "Titration and Neutralization",
            category: 'analytical',
            summary: "Titration quantitatively determines unknown concentration by measuring volume of standard solution required for complete reaction. The equivalence point pH depends on the nature of the acid-base pair: pH 7.00 for strong/strong, >7 for weak acid/strong base, <7 for strong acid/weak base. Indicator selection must match the pH at the steep part of the titration curve.",
            fundamentals: {
                principle: "At equivalence point: moles of acid reacted = moles of base reacted (accounting for stoichiometry)",
                stoichiometry: "For HA + MOH → MA + H₂O: n(HA) = n(MOH) at equivalence; C₁V₁ = C₂V₂",
                multiprotic: "For H₂A + 2MOH → MA₂ + 2H₂O at second equivalence: n(H₂A) = n(MOH)/2",
                primaryStandards: [
                    { name: "KHP (potassium hydrogen phthalate)", formula: "C₈H₅KO₄", Mr: "204.22", use: "Standardize NaOH (1:1)" },
                    { name: "Na₂CO₃ (anhydrous sodium carbonate)", formula: "Na₂CO₃", Mr: "106.00", use: "Standardize HCl (1:2)" },
                    { name: "Oxalic acid dihydrate", formula: "(COOH)₂·2H₂O", Mr: "126.07", use: "Standardize NaOH; KMnO₄ (reducing)" },
                    { name: "Benzoic acid", formula: "C₆H₅COOH", Mr: "122.12", use: "Standardize NaOH (1:1)" }
                ]
            },
            titrationCurves: {
                strongAcidStrongBase: {
                    title: "Strong acid (HCl) with strong base (NaOH)",
                    keyPoints: [
                        { region: "Before equivalence (excess acid)", pH: "Determined by excess HCl concentration; pH = −log[HCl]excess" },
                        { region: "Exactly at equivalence", pH: "7.00 (at 25°C); all HCl neutralized, solution is NaCl(aq)" },
                        { region: "After equivalence (excess base)", pH: "Determined by excess NaOH; pH = 14 − (−log[NaOH]excess)" }
                    ],
                    steepPortion: "Very steep: pH rises from ~3 to ~11 in <0.1 mL near equivalence",
                    indicatorChoice: "Any indicator with transition between pH 3−11 is suitable; methyl orange (3.1−4.4), bromothymol blue (6.0−7.6), or phenolphthalein (8.2−10.0) all work",
                    example: {
                        scenario: "25.0 mL 0.100 mol L⁻¹ HCl titrated with 0.100 mol L⁻¹ NaOH",
                        points: [
                            "0 mL NaOH: pH = −log(0.100) = 1.00",
                            "12.5 mL NaOH: n(HCl) remaining = 0.00125 mol in 37.5 mL; pH = −log(0.0333) = 1.48",
                            "24.9 mL NaOH: n(HCl) remaining = 0.0001 mol in 49.9 mL; pH = −log(0.002) = 2.70",
                            "25.0 mL NaOH: equivalence point; pH = 7.00",
                            "25.1 mL NaOH: n(NaOH) excess = 0.0001 mol in 50.1 mL; pOH = 2.70; pH = 11.30"
                        ]
                    }
                },
                weakAcidStrongBase: {
                    title: "Weak acid (CH₃COOH) with strong base (NaOH)",
                    keyPoints: [
                        { region: "Initial", pH: "Calculated as weak acid (ICE table): pH ≈ 2.87 for 0.100 mol L⁻¹ CH₃COOH" },
                        { region: "Buffer region (before equivalence)", pH: "pH = pKa + log([A⁻]/[HA]); rises slowly — buffer effect" },
                        { region: "Half-equivalence point", pH: "pH = pKa = 4.76 (equal amounts of CH₃COOH and CH₃COO⁻)" },
                        { region: "Equivalence point", pH: "pH > 7 (typically 8.5−9.0); solution contains CH₃COO⁻ (weak base hydrolysis)" },
                        { region: "After equivalence", pH: "Dominated by excess NaOH" }
                    ],
                    equivalencePointPH: {
                        reason: "At equivalence, solution contains only CH₃COO⁻; this hydrolyzes: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻",
                        calculation: [
                            "Kb(CH₃COO⁻) = Kw/Ka = 10⁻¹⁴/1.8×10⁻⁵ = 5.6×10⁻¹⁰",
                            "Assume 25 mL of 0.100 mol L⁻¹ CH₃COOH, 25 mL of 0.100 mol L⁻¹ NaOH",
                            "[CH₃COO⁻]eq = 0.100/2 = 0.0500 mol L⁻¹ (diluted by doubling volume)",
                            "[OH⁻] = √(5.6×10⁻¹⁰ × 0.0500) = √(2.8×10⁻¹¹) = 5.3×10⁻⁶",
                            "pOH = 5.28; pH = 8.72"
                        ]
                    },
                    steepPortion: "Less steep than strong/strong; approximately pH 7−10 at equivalence",
                    indicatorChoice: "Phenolphthalein (8.2−10.0) — transition range overlaps steep portion near pH 8.7 equivalence"
                },
                strongAcidWeakBase: {
                    title: "Strong acid (HCl) with weak base (NH₃)",
                    keyPoints: [
                        { region: "Initial", pH: "Calculated as weak base: pH = 14 − (−log√(Kb × Cb))" },
                        { region: "Buffer region", pH: "pH = pKa(NH₄⁺) + log([NH₃]/[NH₄⁺]); pKa(NH₄⁺) = 9.25" },
                        { region: "Half-equivalence point", pH: "pH = pKa(NH₄⁺) = 9.25" },
                        { region: "Equivalence point", pH: "pH < 7 (typically 5.1−5.5); NH₄⁺ hydrolysis: NH₄⁺ ⇌ NH₃ + H⁺" },
                        { region: "After equivalence", pH: "Dominated by excess HCl" }
                    ],
                    indicatorChoice: "Methyl red (4.2−6.3) or methyl orange (3.1−4.4) — match acidic equivalence point"
                },
                weakAcidWeakBase: {
                    description: "No sharp equivalence point; titration curve lacks steep portion",
                    practical: "Not used in practice for precise titrations; no suitable indicator",
                    example: "CH₃COOH + NH₃ — equivalence point at pH ≈ (pKa(CH₃COOH) + pKa(NH₄⁺))/2 + ... (complex)"
                }
            },
            indicators: {
                mechanism: "HIn ⇌ H⁺ + In⁻; HIn and In⁻ have different colors; at [HIn] = [In⁻], pH = pKa(indicator)",
                transitionRange: "Useful transition ≈ pKa(indicator) ± 1; color change most noticeable at midpoint",
                selection: {
                    rule: "Indicator transition range must lie within the steep portion of titration curve",
                    chart: [
                        { indicator: "Methyl violet", range: "0.0 − 1.6", color: "Yellow → Blue-violet", use: "Very strong acids" },
                        { indicator: "Methyl orange", range: "3.1 − 4.4", color: "Red → Yellow", use: "Strong acid/weak base; strong acid/strong base" },
                        { indicator: "Methyl red", range: "4.2 − 6.3", color: "Red → Yellow", use: "Weak base titrations; strong acid/strong base" },
                        { indicator: "Bromothymol blue", range: "6.0 − 7.6", color: "Yellow → Blue", use: "Near-neutral equivalence; strong acid/strong base" },
                        { indicator: "Phenol red", range: "6.8 − 8.4", color: "Yellow → Red", use: "Strong acid/strong base; some weak acid/strong base" },
                        { indicator: "Phenolphthalein", range: "8.2 − 10.0", color: "Colorless → Pink", use: "Weak acid/strong base; strong acid/strong base" },
                        { indicator: "Thymolphthalein", range: "9.3 − 10.5", color: "Colorless → Blue", use: "Alkaline equivalence points" },
                        { indicator: "Alizarin yellow R", range: "10.1 − 12.0", color: "Yellow → Red", use: "Very alkaline solutions" }
                    ]
                },
                endpoint: {
                    definition: "Color change of indicator — observed experimentally",
                    equivalencePoint: "Calculated stoichiometric point — theoretical",
                    error: "Small difference between endpoint and equivalence; minimized by correct indicator choice and good technique"
                }
            },
            calculations: {
                concentration: {
                    monoprotic: "C_analyte × V_analyte = C_titrant × V_titrant (at equivalence)",
                    diprotic: "C_analyte × V_analyte × 2 = C_titrant × V_titrant (for H₂A + 2 NaOH)",
                    example: {
                        problem: "22.35 mL of 0.1009 mol L⁻¹ NaOH neutralizes 25.00 mL HCl. Find [HCl]",
                        solution: "n(NaOH) = 0.1009 × 22.35/1000 = 2.255×10⁻³ mol; n(HCl) = n(NaOH) = 2.255×10⁻³ mol; [HCl] = 2.255×10⁻³/0.02500 = 0.0902 mol L⁻¹"
                    }
                },
                backTitration: {
                    definition: "Add known excess of reagent; titrate excess with second standard; used when analyte is insoluble, slow to react, or volatile",
                    example: {
                        problem: "Find % CaCO₃ in 0.500 g limestone: add 50.00 mL 0.200 mol L⁻¹ HCl; excess HCl requires 8.20 mL 0.150 mol L⁻¹ NaOH",
                        solution: [
                            "n(HCl) initial = 0.200 × 0.05000 = 0.01000 mol",
                            "n(NaOH) = 0.150 × 0.00820 = 1.23×10⁻³ mol",
                            "n(HCl) reacted with CaCO₃ = 0.01000 − 0.00123 = 8.77×10⁻³ mol",
                            "CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O; n(CaCO₃) = 8.77×10⁻³/2 = 4.385×10⁻³ mol",
                            "mass(CaCO₃) = 4.385×10⁻³ × 100.09 = 0.439 g",
                            "% CaCO₃ = 0.439/0.500 × 100 = 87.8%"
                        ]
                    }
                }
            },
            technique: {
                burette: "Must be rinsed with titrant (not water) before filling; no air bubbles in tip; read from bottom of meniscus",
                flaskPreparation: "Rinse with analyte (or water if volume does not matter — n is what matters)",
                endpoint: "Faint persistent color change lasting 30 seconds (for phenolphthalein: faintest pink visible for 30 s)",
                concordantResults: "Repeat until 3 titres agree within 0.10 mL; average concordant results",
                NaOHStorage: "Store in bottle with soda-lime guard (absorbs CO₂); standardize regularly (NaOH absorbs CO₂, Na₂CO₃ forms)"
            },
            applications: [
                "Pharmaceutical: assay of aspirin, vitamin C, antacid tablet content",
                "Food science: % acidity in vinegar, wine (titratable acidity), milk (lactic acid)",
                "Environmental: total alkalinity and acidity of water bodies",
                "Industrial: concentration control in chemical manufacturing, wastewater",
                "Medical: blood bicarbonate determination; urinary acid excretion"
            ]
        };

        return content;
    }

    handleOrganicAcidBase(problem) {
        const content = {
            topic: "Acid-Base Properties of Organic Compounds",
            category: 'organic_reactivity',
            summary: "The acidity and basicity of organic compounds depend on the structural environment of the ionizable group. Resonance stabilization of the conjugate base is the most powerful effect (carboxylic acids pKa ~5 vs alcohols pKa ~16). Electron-withdrawing groups (EWG) increase acidity by inductive stabilization of the conjugate base; electron-donating groups (EDG) decrease acidity. Hybridization also matters: sp > sp² > sp³ acidity for C−H bonds.",
            principles: {
                generalRule: "Reaction proceeds toward the weaker acid; use pKa values to predict direction and extent",
                kaRelationship: "Keq = 10^(pKa(reactant acid) − pKa(product acid)); reaction favors products if product pKa > reactant pKa",
                example: {
                    reaction: "CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O",
                    pKas: "pKa(CH₃COOH) = 4.76; pKa(H₂O) = 15.7",
                    Keq: "10^(15.7 − 4.76) = 10^10.9 ≈ 8×10¹⁰ — strongly favors products"
                }
            },
            structuralEffectsOnAcidity: {
                resonance: {
                    description: "Delocalization of negative charge in conjugate base stabilizes it; greater delocalization = lower pKa = stronger acid",
                    examples: [
                        {
                            comparison: "Carboxylic acid vs alcohol",
                            compounds: "CH₃COOH (pKa 4.76) vs CH₃CH₂OH (pKa 16.0)",
                            explanation: "Acetate: O⁻C=O ↔ O=CO⁻ (two equivalent resonance structures spread charge over both oxygens); ethoxide: O⁻ localized on one oxygen → carboxylic acid 10^11.2 = 1.6×10¹¹ times stronger than ethanol",
                            diagram: "CH₃COO⁻: resonance = [CH₃−C(=O)−O⁻ ↔ CH₃−C(−O⁻)=O]; both O atoms share negative charge equally"
                        },
                        {
                            comparison: "Phenol vs cyclohexanol",
                            compounds: "C₆H₅OH (pKa 9.99) vs C₆H₁₁OH (pKa ~16)",
                            explanation: "Phenoxide: negative charge delocalized into ring (ortho, para positions); cyclohexoxide: localized on O → phenol 10^6 times stronger",
                            resonanceStructures: "C₆H₅O⁻ has 4 resonance forms: O−C=C (×2 ortho) and O−C(=C) para positions"
                        }
                    ]
                },
                inductive: {
                    description: "Electronegative atoms/groups withdraw electron density through σ bonds, stabilizing negative charge → lower pKa",
                    examples: [
                        {
                            series: "Halogens on acetic acid",
                            data: "CH₃COOH (4.76) → FCH₂COOH (2.59) → ClCH₂COOH (2.86) → BrCH₂COOH (2.90) → ICH₂COOH (3.18)",
                            trend: "F > Cl > Br > I in terms of inductive acid-strengthening effect (electronegativity order)"
                        },
                        {
                            series: "Number of halogen substituents",
                            data: "CH₃COOH (4.76) → ClCH₂COOH (2.86) → Cl₂CHCOOH (1.48) → Cl₃CCOOH (0.66)",
                            trend: "Additive inductive effect; each Cl adds ~1.4 pKa units of acidity"
                        },
                        {
                            series: "Distance from carboxyl group",
                            data: "ClCH₂COOH (2.86) → CH₃CHClCOOH (2.86) vs ClCH₂CH₂COOH (4.05) vs ClCH₂CH₂CH₂COOH (4.52)",
                            trend: "Inductive effect decreases rapidly with distance (falls off ~2−3x per carbon)"
                        }
                    ]
                },
                hybridization: {
                    description: "More s-character at C → C more electronegative → C−H more acidic",
                    order: "sp (33% s) > sp² (25% s) > sp³ (25% s; but note s-content calculation for sp3 = 25%, sp2 = 33.3%... correction: sp3: 25%, sp2: 33.3%, sp: 50%)",
                    correctedOrder: "sp (50% s-character) > sp² (33% s) > sp³ (25% s) → terminal alkynes most acidic C−H",
                    pKaOrders: [
                        "HC≡CH (sp; pKa 25) < H₂C=CH₂ (sp²; pKa 44) < CH₄ (sp³; pKa ~50)",
                        "Practical implication: NaNH₂ (pKa NH₃ = 38) deprotonates terminal alkynes (pKa 25) but not alkenes"
                    ]
                }
            },
            structuralEffectsOnBasicity: {
                amines: {
                    basicity_order: "Alkylamine > NH₃ > arylamine > amide (decreasing basicity)",
                    explanation: {
                        alkylamines: "Alkyl groups donate electrons inductively to N, increasing lone pair availability; also stabilize BH⁺ by induction",
                        aromaticAmines: "Lone pair delocalized into aromatic ring (N lone pair part of aromatic π system) → less available for proton → much weaker base",
                        amides: "Resonance: N lone pair delocalized into C=O (N−C=O ↔ N⁺=C−O⁻); lone pair essentially unavailable → essentially non-basic"
                    },
                    pKaConjugateAcids: [
                        { amine: "(CH₃)₂NH (dimethylamine)", pKa_BH: "10.72", note: "Two methyl groups; inductive donation" },
                        { amine: "CH₃NH₂ (methylamine)", pKa_BH: "10.66", note: "One methyl group" },
                        { amine: "NH₃", pKa_BH: "9.25", note: "Reference" },
                        { amine: "(CH₃)₃N (trimethylamine)", pKa_BH: "9.81", note: "Three methyl groups but steric hinders solvation of BH⁺" },
                        { amine: "Pyridine", pKa_BH: "5.25", note: "Aromatic N; lone pair in sp² orbital, not in ring π" },
                        { amine: "Aniline (C₆H₅NH₂)", pKa_BH: "4.60", note: "Lone pair delocalized into ring" },
                        { amine: "4-Nitroaniline", pKa_BH: "1.00", note: "NO₂ withdraws electron density from ring and N" },
                        { amine: "Acetamide (CH₃CONH₂)", pKa_BH: "~0.0", note: "Amide N; lone pair in resonance with C=O" }
                    ]
                }
            },
            importantPKaValues: {
                description: "Key pKa reference values for organic functional groups",
                acids: [
                    { group: "−COOH (carboxylic acid)", typical_pKa: "4−5", note: "Lower with EWG; higher with EDG" },
                    { group: "ArSO₃H (arylsulfonic acid)", typical_pKa: "−1 to 0", note: "Strong organic acid; fully ionized" },
                    { group: "−SO₂NH₂ (sulfonamide)", typical_pKa: "10", note: "EWG from SO₂ group" },
                    { group: "−OH (phenol)", typical_pKa: "10", note: "Resonance into ring" },
                    { group: "−OH (alcohol)", typical_pKa: "16−19", note: "pKa increases primary < secondary < tertiary" },
                    { group: "=NH (imine)", typical_pKa: "25", note: "Weak; rare as acid" },
                    { group: "≡C−H (terminal alkyne)", typical_pKa: "25", note: "sp carbon; surprisingly acidic" },
                    { group: "−NH₂ (amide, as N−H acid)", typical_pKa: "25", note: "EWG from carbonyl lowers pKa" }
                ],
                bases_pKa_BH: [
                    { group: "Aliphatic amine (R₃N)", pKa_BH: "9−11", note: "Moderate base; protonated at physiological pH" },
                    { group: "Aromatic amine (ArNH₂)", pKa_BH: "3−5", note: "Weakly basic; not protonated at pH 7" },
                    { group: "Amide (RCONH₂)", pKa_BH: "0 to −1", note: "Essentially non-basic in water" },
                    { group: "Carboxylate (RCOO⁻)", pKa_BH: "−6 to −7", note: "Conjugate acid is carboxylic acid" }
                ]
            },
            aminoAcidChemistry: {
                structure: "Contain −NH₃⁺ (acid, pKa ~9−10) and −COO⁻ (base, pKa ~2) groups",
                zwitterion: "At pI (isoelectric point), both groups ionized: ⁺H₃N−CHR−COO⁻",
                pI_calculation: "pI = (pKa₁ + pKa₂)/2 for simple amino acids",
                charge_at_pH: "pH > pI → net negative; pH < pI → net positive; pH = pI → zero net charge",
                electrophoresis: "Proteins migrate in electric field based on net charge at given pH → used for separation",
                ionizationExample: {
                    aminoAcid: "Alanine (pKa₁ = 2.35, pKa₂ = 9.87, pI = 6.11)",
                    pH2: "At pH 2: mainly ⁺H₃N−CH(CH₃)−COOH (cationic form)",
                    pH6: "At pH 6.11: mainly ⁺H₃N−CH(CH₃)−COO⁻ (zwitterion)",
                    pH12: "At pH 12: mainly H₂N−CH(CH₃)−COO⁻ (anionic form)"
                }
            },
            organicReactionPredictions: {
                principle: "ΔpKa = pKa(product acid) − pKa(starting acid); positive ΔpKa = reaction favored",
                examples: [
                    {
                        reaction: "Alkyne deprotonation: HC≡CR + NaNH₂ → Na⁺[⁻C≡CR] + NH₃",
                        pKas: "pKa(alkyne) = 25; pKa(NH₃) = 38",
                        Keq: "10^(38−25) = 10¹³ — strongly favors products",
                        synthetic_use: "Acetylide anions are excellent nucleophiles for SN2 reactions and carbonyl additions"
                    },
                    {
                        reaction: "Alcohol deprotonation: CH₃OH + NaNH₂ → Na⁺[CH₃O⁻] + NH₃",
                        pKas: "pKa(CH₃OH) = 15.5; pKa(NH₃) = 38",
                        Keq: "10^(38−15.5) = 10^22.5 — very strongly favors products",
                        synthetic_use: "NaNH₂ (amide base) is sufficient to fully deprotonate alcohols"
                    },
                    {
                        reaction: "Attempted deprotonation: CH₄ + NaOH → Na⁺[CH₃⁻] + H₂O",
                        pKas: "pKa(CH₄) ≈ 50; pKa(H₂O) = 15.7",
                        Keq: "10^(15.7−50) = 10^(−34.3) — strongly disfavored; does not occur",
                        lesson: "NaOH cannot deprotonate alkanes; pKa differences predict this quantitatively"
                    }
                ]
            },
            applications: [
                "Drug design: pKa determines ionization at physiological pH → membrane permeability and bioavailability",
                "Protecting group chemistry: pH-selective deprotection uses pKa differences",
                "Synthesis: choice of base determined by pKa of substrate (must use base with pKa higher than substrate pKa)",
                "Biochemistry: enzyme mechanisms depend on precisely tuned pKa of active site residues",
                "Analytical chemistry: HPLC separation of drug enantiomers and isomers exploits ionization state differences"
            ]
        };

        return content;
    }

    // ============================================================
    // TOPIC ROUTING
    // ============================================================

    handleTopic(userInput) {
        const inputLower = userInput.toLowerCase();
        for (const [topicId, topic] of Object.entries(this.acidBaseTopics)) {
            if (topic.patterns.some(pattern => pattern.test(inputLower))) {
                return topic.handler(userInput);
            }
        }
        return this.handleGeneral(userInput);
    }

    handleGeneral(problem) {
        return {
            topic: "Acid-Base Chemistry — General",
            summary: "Please specify a topic: acid-base definitions (Arrhenius, Brønsted-Lowry, Lewis), pH calculations (strong/weak acids and bases), buffer systems (Henderson-Hasselbalch, biological buffers), titration (curves, indicators, equivalence points), or organic acid-base properties (pKa, structural effects on acidity/basicity).",
            availableTopics: Object.entries(this.acidBaseTopics).map(([id, t]) => ({
                id, name: t.name, difficulty: t.difficulty, description: t.description
            }))
        };
    }

    // ============================================================
    // EXPERIMENT RETRIEVAL
    // ============================================================

    getExperiment(experimentId) {
        return this.acidBaseExperiments[experimentId] || null;
    }

    getAllExperiments() {
        return Object.entries(this.acidBaseExperiments).map(([id, exp]) => ({
            id,
            name: exp.name,
            category: exp.category,
            relatedTopics: exp.relatedTopics
        }));
    }

    getMisconceptions(topicId) {
        return this.commonMisconceptions[topicId] || null;
    }

    getAssessmentQuestions(topicId, level) {
        const topicQuestions = this.assessmentQuestions[topicId];
        if (!topicQuestions) return null;
        if (level) return { [level]: topicQuestions[level] } || null;
        return topicQuestions;
    }

    getContextualScenarios(topicId) {
        return this.contextualScenarios[topicId] || null;
    }

    getMetacognitivePrompts(phase) {
        return this.metacognitivePrompts[phase] || this.metacognitivePrompts;
    }

    getLearnerProfile() {
        return this.learnerProfile;
    }

    updateLearnerProfile(updates) {
        this.learnerProfile = { ...this.learnerProfile, ...updates };
        return this.learnerProfile;
    }
}

export default AcidBaseChemistryWorkbook;
