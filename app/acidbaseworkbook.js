// Enhanced Acid-Base Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedAcidBaseMathematicalWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "excel";
        this.cellWidth = 200;
        this.cellHeight = 28;
        this.headerHeight = 35;
        this.mathHeight = 40;
        this.rowLabelWidth = 60;
        this.fontSize = 12;
        this.mathFontSize = 14;

        this.currentProblem = null;
        this.currentSolution = null;
        this.solutionSteps = [];
        this.currentWorkbook = null;
        this.graphData = null;

        // Enhanced explanation options
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'detailed', 'scaffolded'
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeAcidBaseSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
        this.initializeAcidBaseConstants();
    }

    initializeAcidBaseConstants() {
        this.constants = {
            Kw: 1.0e-14,          // Ion product of water at 25°C
            R: 8.314,             // Gas constant (J/(mol·K))
            T: 298.15,            // Standard temperature (25°C in K)
            pKw: 14.0,            // -log(Kw)
            autoprotolysis: {
                water: 1.0e-14,
                ammonia: 1.0e-33,
                methanol: 2.0e-17
            }
        };

        // Common acid/base dissociation constants
        this.commonKa = {
            'HCl': 1.0e7,         // Strong acid
            'HNO3': 2.4e1,        // Strong acid
            'H2SO4': 1.0e3,       // Strong acid (first dissociation)
            'CH3COOH': 1.8e-5,    // Acetic acid (weak)
            'HF': 6.8e-4,         // Hydrofluoric acid (weak)
            'H2CO3': 4.3e-7,      // Carbonic acid (first dissociation)
            'H3PO4': 7.5e-3,      // Phosphoric acid (first dissociation)
            'HCN': 6.2e-10,       // Hydrocyanic acid (weak)
            'phenol': 1.0e-10     // Phenol (very weak)
        };

        this.commonKb = {
            'NaOH': 1.0e7,        // Strong base
            'KOH': 1.0e7,         // Strong base
            'NH3': 1.8e-5,        // Ammonia (weak)
            'CH3NH2': 4.4e-4,     // Methylamine (weak)
            'C5H5N': 1.7e-9,      // Pyridine (weak)
            'aniline': 4.0e-10    // Aniline (very weak)
        };
    }

    initializeAcidBaseLessons() {
        this.lessons = {
            ph_calculation: {
                title: "pH Calculations",
                concepts: [
                    "pH = -log[H⁺] where [H⁺] is hydrogen ion concentration",
                    "pH scale ranges from 0 to 14 at 25°C",
                    "pH < 7: acidic; pH = 7: neutral; pH > 7: basic",
                    "pOH = -log[OH⁻] and pH + pOH = 14 at 25°C"
                ],
                theory: "The pH scale is a logarithmic measure of hydrogen ion concentration. A change of 1 pH unit represents a 10-fold change in [H⁺]. The scale is derived from the autoionization of water.",
                keyFormulas: {
                    "pH Definition": "pH = -log₁₀[H⁺]",
                    "Reverse Calculation": "[H⁺] = 10⁻ᵖᴴ",
                    "Water Ion Product": "Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴",
                    "pH-pOH Relationship": "pH + pOH = pKw = 14.0"
                },
                solvingSteps: [
                    "Identify given concentration or pH",
                    "Apply logarithmic relationship",
                    "Calculate pH or [H⁺]",
                    "Verify result is within reasonable range (0-14)"
                ],
                applications: [
                    "Water quality testing",
                    "Biological systems and blood pH",
                    "Industrial process control",
                    "Environmental monitoring"
                ]
            },

            strong_acid_base: {
                title: "Strong Acids and Bases",
                concepts: [
                    "Complete dissociation in aqueous solution",
                    "Initial concentration equals [H⁺] or [OH⁻]",
                    "Examples: HCl, HNO₃, H₂SO₄, NaOH, KOH",
                    "pH calculated directly from concentration"
                ],
                theory: "Strong acids and bases dissociate 100% in water. The concentration of H⁺ or OH⁻ equals the initial acid or base concentration. This simplifies pH calculations significantly.",
                keyFormulas: {
                    "Strong Acid": "[H⁺] = C_acid",
                    "Strong Base": "[OH⁻] = C_base",
                    "pH from Strong Acid": "pH = -log(C_acid)",
                    "pH from Strong Base": "pH = 14 + log(C_base)"
                },
                solvingSteps: [
                    "Identify if acid or base is strong",
                    "Set [H⁺] or [OH⁻] equal to concentration",
                    "Calculate pH or pOH",
                    "If base, convert pOH to pH"
                ],
                applications: [
                    "Titration standardization",
                    "Industrial acid/base neutralization",
                    "pH adjustment in processes",
                    "Cleaning and disinfection"
                ]
            },

            weak_acid_base: {
                title: "Weak Acids and Bases",
                concepts: [
                    "Partial dissociation described by Ka or Kb",
                    "Equilibrium calculations required",
                    "ICE table method for systematic solution",
                    "Simplification valid when Ka << C (typically 5% rule)"
                ],
                theory: "Weak acids and bases establish equilibrium between dissociated and undissociated forms. The extent of dissociation is quantified by Ka (acid) or Kb (base). The equilibrium expression must be solved, often using approximations.",
                keyFormulas: {
                    "Weak Acid Equilibrium": "Ka = [H⁺][A⁻]/[HA]",
                    "Weak Base Equilibrium": "Kb = [BH⁺][OH⁻]/[B]",
                    "Approximation Formula": "[H⁺] ≈ √(Ka × C)",
                    "Percent Dissociation": "α = ([H⁺]/C) × 100%"
                },
                solvingSteps: [
                    "Write equilibrium expression",
                    "Set up ICE table (Initial, Change, Equilibrium)",
                    "Apply equilibrium constant expression",
                    "Solve quadratic or use approximation",
                    "Verify approximation validity (x < 5% of C)"
                ],
                applications: [
                    "Buffer solution design",
                    "Pharmaceutical formulations",
                    "Biological pH regulation",
                    "Food chemistry and preservation"
                ]
            },

            buffer_solutions: {
                title: "Buffer Solutions",
                concepts: [
                    "Weak acid + conjugate base (or weak base + conjugate acid)",
                    "Resists pH changes upon addition of acid or base",
                    "Described by Henderson-Hasselbalch equation",
                    "Most effective when pH ≈ pKa (±1 unit)"
                ],
                theory: "Buffers work by the common ion effect and Le Chatelier's principle. When acid is added, the conjugate base neutralizes it; when base is added, the weak acid neutralizes it. The Henderson-Hasselbalch equation allows direct pH calculation.",
                keyFormulas: {
                    "Henderson-Hasselbalch (Acid)": "pH = pKa + log([A⁻]/[HA])",
                    "Henderson-Hasselbalch (Base)": "pOH = pKb + log([BH⁺]/[B])",
                    "Buffer Capacity": "β = 2.303 × C × Ka × [H⁺]/(Ka + [H⁺])²",
                    "pKa Relationship": "pKa = -log(Ka)"
                },
                solvingSteps: [
                    "Identify buffer components and concentrations",
                    "Determine pKa or pKb",
                    "Calculate ratio of conjugate pairs",
                    "Apply Henderson-Hasselbalch equation",
                    "Verify buffer capacity is adequate"
                ],
                applications: [
                    "Blood pH regulation (bicarbonate buffer)",
                    "Laboratory reagents",
                    "Pharmaceutical formulations",
                    "Fermentation and cell culture"
                ]
            },

            titration: {
                title: "Acid-Base Titrations",
                concepts: [
                    "Neutralization reaction between acid and base",
                    "Equivalence point: moles acid = moles base",
                    "Endpoint detected by indicator or pH meter",
                    "Titration curves show pH vs. volume added"
                ],
                theory: "Titrations quantitatively determine unknown concentrations by controlled neutralization. The shape of the titration curve depends on the strength of the acid and base. Strong acid-strong base titrations have steep vertical sections at equivalence.",
                keyFormulas: {
                    "Neutralization": "n_acid = n_base",
                    "Molarity Relationship": "M_a × V_a = M_b × V_b (for monoprotic)",
                    "Dilution": "M₁V₁ = M₂V₂",
                    "pH at Equivalence": "pH = 7 (strong-strong), pH ≠ 7 (weak)"
                },
                solvingSteps: [
                    "Write balanced neutralization equation",
                    "Identify known and unknown values",
                    "Apply stoichiometry at equivalence point",
                    "Calculate unknown concentration",
                    "Determine pH at equivalence if needed"
                ],
                applications: [
                    "Concentration determination",
                    "Quality control in manufacturing",
                    "Water hardness testing",
                    "Food acidity measurement"
                ]
            },

            polyprotic_acids: {
                title: "Polyprotic Acids",
                concepts: [
                    "Acids that can donate multiple protons",
                    "Sequential dissociation with Ka1, Ka2, Ka3...",
                    "Usually Ka1 >> Ka2 >> Ka3",
                    "pH primarily determined by first dissociation"
                ],
                theory: "Polyprotic acids dissociate in steps, each with its own equilibrium constant. Typically, the first dissociation dominates the pH calculation because subsequent dissociations are much weaker. Examples include H₂SO₄, H₃PO₄, H₂CO₃.",
                keyFormulas: {
                    "First Dissociation": "Ka1 = [H⁺][HA⁻]/[H₂A]",
                    "Second Dissociation": "Ka2 = [H⁺][A²⁻]/[HA⁻]",
                    "Simplification": "pH ≈ -log(√(Ka1 × C)) for weak diprotic",
                    "Species Distribution": "α₀, α₁, α₂ fractions calculated from Ka values"
                },
                solvingSteps: [
                    "Identify all dissociation steps and Ka values",
                    "Determine if simplification is valid",
                    "Calculate pH from dominant dissociation",
                    "Calculate species distribution if needed",
                    "Verify assumptions"
                ],
                applications: [
                    "Phosphate buffer systems",
                    "Carbonate equilibria in natural waters",
                    "Amino acid chemistry",
                    "Geochemistry and mineral dissolution"
                ]
            },

            salt_hydrolysis: {
                title: "Salt Hydrolysis and pH",
                concepts: [
                    "Salts of weak acids/bases affect solution pH",
                    "Conjugate acid/base strength determines pH",
                    "Salt of weak acid + strong base: pH > 7",
                    "Salt of strong acid + weak base: pH < 7"
                ],
                theory: "When salts dissolve, the resulting ions can react with water (hydrolyze). The conjugate base of a weak acid accepts protons from water, increasing pH. The conjugate acid of a weak base donates protons to water, decreasing pH.",
                keyFormulas: {
                    "Conjugate Base Hydrolysis": "A⁻ + H₂O ⇌ HA + OH⁻",
                    "Conjugate Acid Hydrolysis": "BH⁺ + H₂O ⇌ B + H₃O⁺",
                    "Ka × Kb Relationship": "Ka × Kb = Kw",
                    "pH Calculation": "pH = 7 + 0.5(pKa + log C) for conjugate base"
                },
                solvingSteps: [
                    "Identify cation and anion sources",
                    "Determine which ion hydrolyzes",
                    "Find Ka or Kb for hydrolyzing species",
                    "Set up equilibrium expression",
                    "Calculate pH"
                ],
                applications: [
                    "Fertilizer pH effects",
                    "Soap and detergent chemistry",
                    "Textile dyeing processes",
                    "Food additive effects"
                ]
            },

            acid_base_indicators: {
                title: "Acid-Base Indicators",
                concepts: [
                    "Weak acids that change color with pH",
                    "Each indicator has a specific pH range",
                    "Color change occurs over ±1 pH unit of pKa",
                    "Choose indicator where transition matches equivalence pH"
                ],
                theory: "Indicators are themselves weak acids (HIn) with differently colored acidic (HIn) and basic (In⁻) forms. The ratio of these forms changes with pH, causing observable color change in a specific pH range around the indicator's pKa.",
                keyFormulas: {
                    "Indicator Equilibrium": "HIn ⇌ H⁺ + In⁻",
                    "Ka Expression": "Ka = [H⁺][In⁻]/[HIn]",
                    "Henderson-Hasselbalch": "pH = pKa(ind) + log([In⁻]/[HIn])",
                    "Transition Range": "pH = pKa ± 1"
                },
                solvingSteps: [
                    "Determine pH at equivalence point",
                    "Select indicator with pKa near this pH",
                    "Verify transition range encompasses equivalence",
                    "Consider color change visibility"
                ],
                applications: [
                    "Titration endpoint detection",
                    "pH test strips",
                    "Quality control testing",
                    "Educational demonstrations"
                ]
            },

            lewis_acids_bases: {
                title: "Lewis Acids and Bases",
                concepts: [
                    "Lewis acid: electron pair acceptor",
                    "Lewis base: electron pair donor",
                    "Broader definition than Brønsted-Lowry",
                    "Includes metal-ligand interactions"
                ],
                theory: "The Lewis definition extends acid-base theory beyond proton transfer. Metal ions (Lewis acids) accept electron pairs from ligands (Lewis bases) to form coordination complexes. This framework is essential in inorganic and organometallic chemistry.",
                keyFormulas: {
                    "Complex Formation": "M^n+ + nL ⇌ ML_n^n+",
                    "Formation Constant": "Kf = [ML_n]/[M][L]ⁿ",
                    "HSAB Principle": "Hard acids prefer hard bases; soft prefer soft",
                    "Stability": "log β_n = Σ log K_i"
                },
                solvingSteps: [
                    "Identify electron pair donor and acceptor",
                    "Draw Lewis structures showing electron movement",
                    "Predict product structure",
                    "Calculate formation constant if needed"
                ],
                applications: [
                    "Coordination chemistry",
                    "Catalysis and reaction mechanisms",
                    "Medicinal chemistry (metal drugs)",
                    "Environmental complexation"
                ]
            }
        };
    }

    setThemeColors() {
        const themes = {
            excel: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
                headerBg: '#4472c4',
                headerText: '#ffffff',
                sectionBg: '#d9e2f3',
                sectionText: '#000000',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e2efda',
                resultText: '#000000',
                formulaBg: '#fff2cc',
                formulaText: '#7f6000',
                stepBg: '#f2f2f2',
                stepText: '#333333',
                borderColor: '#808080',
                mathBg: '#fef7e0',
                mathText: '#b06000',
                graphBg: '#f8f9fa',
                acidBg: '#ffe6e6',
                baseBg: '#e6f3ff'
            },
            scientific: {
                background: '#f8f9fa',
                gridColor: '#4682b4',
                headerBg: '#2c5aa0',
                headerText: '#ffffff',
                sectionBg: '#e1ecf4',
                sectionText: '#2c5aa0',
                cellBg: '#ffffff',
                cellText: '#2c5aa0',
                resultBg: '#d4edda',
                resultText: '#155724',
                formulaBg: '#fff3cd',
                formulaText: '#856404',
                stepBg: '#e9ecef',
                stepText: '#495057',
                borderColor: '#4682b4',
                mathBg: '#e3f2fd',
                mathText: '#1565c0',
                graphBg: '#f1f8ff',
                acidBg: '#ffebee',
                baseBg: '#e3f2fd'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            // Chemical symbols
            'equilibrium': '⇌',
            'reversible': '⇄',
            'forward': '→',
            'backward': '←',
            // Subscripts
            'H+': 'H⁺',
            'OH-': 'OH⁻',
            'H3O+': 'H₃O⁺',
            // Mathematical
            'leq': '≤',
            'geq': '≥',
            'approx': '≈',
            'infinity': '∞',
            'plusminus': '±',
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'delta': 'Δ',
            'pi': 'π'
        };
    }

    initializeAcidBaseSolvers() {
        this.acidBaseTypes = {
            // pH calculations
            ph_from_concentration: {
                patterns: [
                    /ph.*from.*concentration/i,
                    /calculate.*ph.*\[H\+\]/i,
                    /hydrogen.*ion.*concentration/i
                ],
                solver: this.solvePHFromConcentration.bind(this),
                name: 'pH from [H⁺] Concentration',
                category: 'ph_calculations',
                description: 'Calculate pH from hydrogen ion concentration'
            },

            concentration_from_ph: {
                patterns: [
                    /concentration.*from.*ph/i,
                    /\[H\+\].*from.*ph/i,
                    /hydrogen.*ion.*from.*ph/i
                ],
                solver: this.solveConcentrationFromPH.bind(this),
                name: '[H⁺] from pH',
                category: 'ph_calculations',
                description: 'Calculate hydrogen ion concentration from pH'
            },

            poh_calculations: {
                patterns: [
                    /poh/i,
                    /calculate.*poh/i,
                    /\[OH\-\]/i
                ],
                solver: this.solvePOHCalculations.bind(this),
                name: 'pOH and [OH⁻] Calculations',
                category: 'ph_calculations',
                description: 'Calculate pOH and hydroxide ion concentration'
            },

            // Strong acids and bases
            strong_acid: {
                patterns: [
                    /strong.*acid/i,
                    /HCl|HNO3|H2SO4.*ph/i,
                    /complete.*dissociation.*acid/i
                ],
                solver: this.solveStrongAcid.bind(this),
                name: 'Strong Acid pH',
                category: 'strong_acid_base',
                description: 'Calculate pH of strong acid solution'
            },

            strong_base: {
                patterns: [
                    /strong.*base/i,
                    /NaOH|KOH.*ph/i,
                    /complete.*dissociation.*base/i
                ],
                solver: this.solveStrongBase.bind(this),
                name: 'Strong Base pH',
                category: 'strong_acid_base',
                description: 'Calculate pH of strong base solution'
            },

            // Weak acids and bases
            weak_acid: {
                patterns: [
                    /weak.*acid/i,
                    /Ka.*equilibrium/i,
                    /acetic.*acid|CH3COOH/i
                ],
                solver: this.solveWeakAcid.bind(this),
                name: 'Weak Acid Equilibrium',
                category: 'weak_acid_base',
                description: 'Calculate pH and equilibrium for weak acid'
            },

            weak_base: {
                patterns: [
                    /weak.*base/i,
                    /Kb.*equilibrium/i,
                    /ammonia|NH3.*ph/i
                ],
                solver: this.solveWeakBase.bind(this),
                name: 'Weak Base Equilibrium',
                category: 'weak_acid_base',
                description: 'Calculate pH and equilibrium for weak base'
            },

            percent_dissociation: {
                patterns: [
                    /percent.*dissociation/i,
                    /degree.*of.*ionization/i,
                    /alpha.*dissociation/i
                ],
                solver: this.solvePercentDissociation.bind(this),
                name: 'Percent Dissociation',
                category: 'weak_acid_base',
                description: 'Calculate percent dissociation of weak acid/base'
            },

            // Buffer solutions
            buffer_ph: {
                patterns: [
                    /buffer.*ph/i,
                    /henderson.*hasselbalch/i,
                    /conjugate.*pair/i
                ],
                solver: this.solveBufferPH.bind(this),
                name: 'Buffer pH Calculation',
                category: 'buffer_solutions',
                description: 'Calculate pH using Henderson-Hasselbalch equation'
            },

            buffer_capacity: {
                patterns: [
                    /buffer.*capacity/i,
                    /resistance.*ph.*change/i,
                    /buffer.*strength/i
                ],
                solver: this.solveBufferCapacity.bind(this),
                name: 'Buffer Capacity',
                category: 'buffer_solutions',
                description: 'Calculate buffer capacity'
            },

            buffer_preparation: {
                patterns: [
                    /prepare.*buffer/i,
                    /buffer.*preparation/i,
                    /design.*buffer/i
                ],
                solver: this.solveBufferPreparation.bind(this),
                name: 'Buffer Preparation',
                category: 'buffer_solutions',
                description: 'Calculate amounts needed to prepare buffer'
            },

            // Titrations
            titration_endpoint: {
                patterns: [
                    /titration.*endpoint/i,
                    /equivalence.*point/i,
                    /neutralization/i
                ],
                solver: this.solveTitrationEndpoint.bind(this),
                name: 'Titration Endpoint',
                category: 'titration',
                description: 'Calculate equivalence point in titration'
            },

            titration_curve: {
                patterns: [
                    /titration.*curve/i,
                    /ph.*vs.*volume/i,
                    /titration.*graph/i
                ],
                solver: this.solveTitrationCurve.bind(this),
                name: 'Titration Curve',
                category: 'titration',
                description: 'Generate complete titration curve data'
            },

            unknown_concentration: {
                patterns: [
                    /unknown.*concentration/i,
                    /determine.*molarity/i,
                    /find.*concentration.*titration/i
                ],
                solver: this.solveUnknownConcentration.bind(this),
                name: 'Unknown Concentration from Titration',
                category: 'titration',
                description: 'Determine unknown concentration by titration'
            },

            // Polyprotic acids
            polyprotic_acid: {
                patterns: [
                    /polyprotic.*acid/i,
                    /diprotic|triprotic/i,
                    /H2SO4|H3PO4|H2CO3.*equilibrium/i
                ],
                solver: this.solvePolyproticAcid.bind(this),
                name: 'Polyprotic Acid Equilibrium',
                category: 'polyprotic_acids',
                description: 'Calculate pH and species distribution for polyprotic acid'
            },

            species_distribution: {
                patterns: [
                    /species.*distribution/i,
                    /alpha.*fraction/i,
                    /distribution.*diagram/i
                ],
                solver: this.solveSpeciesDistribution.bind(this),
                name: 'Species Distribution',
                category: 'polyprotic_acids',
                description: 'Calculate fraction of each species at given pH'
            },

            // Salt hydrolysis
            salt_hydrolysis: {
                patterns: [
                    /salt.*hydrolysis/i,
                    /conjugate.*acid.*base.*salt/i,
                    /salt.*solution.*ph/i
                ],
                solver: this.solveSaltHydrolysis.bind(this),
                name: 'Salt Hydrolysis',
                category: 'salt_hydrolysis',
                description: 'Calculate pH of salt solution'
            },

            // Indicators
            indicator_selection: {
                patterns: [
                    /indicator.*selection/i,
                    /choose.*indicator/i,
                    /indicator.*range/i
                ],
                solver: this.solveIndicatorSelection.bind(this),
                name: 'Indicator Selection',
                category: 'acid_base_indicators',
                description: 'Select appropriate indicator for titration'
            },

            // Lewis acids and bases
            lewis_acid_base: {
                patterns: [
                    /lewis.*acid|lewis.*base/i,
                    /electron.*pair.*donor|acceptor/i,
                    /coordination.*complex/i
                ],
                solver: this.solveLewisAcidBase.bind(this),
                name: 'Lewis Acid-Base Reaction',
                category: 'lewis_acids_bases',
                description: 'Analyze Lewis acid-base interaction'
            },

            // Advanced calculations
            ka_kb_relationship: {
                patterns: [
                    /Ka.*Kb.*relationship/i,
                    /conjugate.*Ka.*Kb/i,
                    /Kw.*Ka.*Kb/i
                ],
                solver: this.solveKaKbRelationship.bind(this),
                name: 'Ka-Kb Relationship',
                category: 'advanced',
                description: 'Calculate Ka from Kb or vice versa'
            },

            dilution: {
                patterns: [
                    /dilution.*ph/i,
                    /dilute.*acid.*base/i,
                    /M1V1.*M2V2/i
                ],
                solver: this.solveDilution.bind(this),
                name: 'Dilution and pH Change',
                category: 'advanced',
                description: 'Calculate pH after dilution'
            },

            mixing_solutions: {
                patterns: [
                    /mix.*solutions/i,
                    /combining.*acid.*base/i,
                    /solution.*mixture.*ph/i
                ],
                solver: this.solveMixingSolutions.bind(this),
                name: 'Mixing Acid-Base Solutions',
                category: 'advanced',
                description: 'Calculate pH of mixed solutions'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            ph_calculations: {
                'Calculate pH': [
                    'Forgetting the negative sign in pH = -log[H⁺]',
                    'Using natural log (ln) instead of log base 10',
                    'Confusing [H⁺] with concentration of acid (for weak acids)'
                ],
                'Calculate [H⁺]': [
                    'Forgetting to take antilog: [H⁺] = 10^(-pH)',
                    'Using wrong base for exponential',
                    'Sign errors in exponent'
                ]
            },
            weak_acid_base: {
                'Set up ICE table': [
                    'Not accounting for initial concentration changes',
                    'Forgetting stoichiometric coefficients',
                    'Mixing up equilibrium concentrations'
                ],
                'Solve equilibrium': [
                    'Using approximation when not valid (x > 5% of C)',
                    'Solving quadratic incorrectly',
                    'Taking wrong root of quadratic equation'
                ]
            },
            buffer_solutions: {
                'Henderson-Hasselbalch': [
                    'Inverting the ratio [A⁻]/[HA]',
                    'Using concentrations instead of ratio',
                    'Using Ka instead of pKa',
                    'Forgetting to convert between pH and pOH for bases'
                ],
                'Buffer preparation': [
                    'Not accounting for volume changes',
                    'Confusing moles with molarity',
                    'Incorrect stoichiometry in conjugate pair'
                ]
            },
            titration: {
                'Equivalence point': [
                    'Assuming pH = 7 for all titrations',
                    'Confusing equivalence point with endpoint',
                    'Incorrect stoichiometry (not considering polyprotic acids)'
                ],
                'Concentration calculations': [
                    'Not converting volumes to same units',
                    'Forgetting dilution factor',
                    'Incorrect mole ratios in balanced equation'
                ]
            },
            polyprotic_acids: {
                'Sequential dissociation': [
                    'Treating all Ka values as equal',
                    'Not recognizing that first dissociation dominates',
                    'Adding all H⁺ contributions without considering equilibrium'
                ]
            }
        };

        this.errorPrevention = {
            log_calculations: {
                reminder: 'Always use log base 10 for pH calculations, not natural log',
                method: 'Check calculator is in correct mode; verify answer is reasonable (0-14)'
            },
            approximation_validity: {
                reminder: 'Check if x < 5% of initial concentration before using approximation',
                method: 'Calculate (x/C) × 100% and verify < 5%'
            },
            stoichiometry: {
                reminder: 'Always write balanced equation first',
                method: 'Track mole ratios carefully; use dimensional analysis'
            },
            units: {
                reminder: 'Keep track of concentration units (M, mM, etc.) and volume units (L, mL)',
                method: 'Write units explicitly in every step'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why the chemistry works this way and molecular-level understanding',
                language: 'intuitive and mechanism-focused'
            },
            procedural: {
                focus: 'Exact sequence of calculations to perform',
                language: 'step-by-step algorithmic instructions'
            },
            visual: {
                focus: 'Molecular representations and equilibrium shifts',
                language: 'visual and spatial metaphors'
            },
            mathematical: {
                focus: 'Formal mathematical relationships and derivations',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple chemistry terms',
                detail: 'essential calculation steps only',
                examples: 'concrete numerical examples'
            },
            intermediate: {
                vocabulary: 'standard chemistry terminology',
                detail: 'main steps with chemical explanations',
                examples: 'mix of concrete and conceptual'
            },
            detailed: {
                vocabulary: 'full chemical and mathematical vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'abstract and generalized cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    // MAIN SOLVER METHOD
    solveAcidBaseProblem(config) {
        const { problem, concentration, Ka, Kb, pH, pOH, volume, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseAcidBaseProblem(problem, concentration, Ka, Kb, pH, pOH, volume, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveAcidBaseProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateAcidBaseSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateAcidBaseGraphData();

            // Generate workbook
            this.generateAcidBaseWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                pH: this.currentSolution?.pH,
                concentrations: this.currentSolution?.concentrations
            };

        } catch (error) {
            throw new Error(`Failed to solve acid-base problem: ${error.message}`);
        }
    }

    parseAcidBaseProblem(problem, concentration, Ka, Kb, pH, pOH, volume, problemType = null, context = {}) {
        const cleanInput = problem ? this.cleanChemExpression(problem) : '';

        // If problem type is specified, use it directly
        if (problemType && this.acidBaseTypes[problemType]) {
            return {
                originalInput: problem || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                parameters: { 
                    concentration, 
                    Ka, 
                    Kb, 
                    pH, 
                    pOH, 
                    volume,
                    ...context 
                },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect acid-base problem type
        for (const [type, config] of Object.entries(this.acidBaseTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput)) {
                    return {
                        originalInput: problem,
                        cleanInput: cleanInput,
                        type: type,
                        parameters: { 
                            concentration, 
                            Ka, 
                            Kb, 
                            pH, 
                            pOH, 
                            volume,
                            ...context 
                        },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default based on available parameters
        if (concentration && Ka) {
            return {
                originalInput: problem || 'Weak acid problem',
                cleanInput: cleanInput,
                type: 'weak_acid',
                parameters: { concentration, Ka, ...context },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        if (pH !== undefined) {
            return {
                originalInput: problem || 'pH calculation',
                cleanInput: cleanInput,
                type: 'concentration_from_ph',
                parameters: { pH, ...context },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize acid-base problem type from: ${problem}`);
    }

    cleanChemExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/\[H\+\]/gi, '[H+]')
            .replace(/\[OH\-\]/gi, '[OH-]')
            .replace(/\[H3O\+\]/gi, '[H3O+]')
            .trim();
    }

    solveAcidBaseProblem_Internal(problem) {
        const solver = this.acidBaseTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for acid-base problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ACID-BASE SOLVERS

    solvePHFromConcentration(problem) {
        const { concentration } = problem.parameters;
        
        if (!concentration || concentration <= 0) {
            throw new Error('Valid [H+] concentration required');
        }

        const pH = -Math.log10(concentration);
        const pOH = 14 - pH;
        const OH_concentration = this.constants.Kw / concentration;

        return {
            type: 'ph_from_concentration',
            givenConcentration: concentration,
            pH: pH,
            pOH: pOH,
            OH_concentration: OH_concentration,
            interpretation: this.interpretPH(pH),
            verification: this.verifyPHCalculation(concentration, pH),
            category: 'ph_calculations'
        };
    }

    solveConcentrationFromPH(problem) {
        const { pH } = problem.parameters;

        if (pH === undefined || pH < 0 || pH > 14) {
            throw new Error('Valid pH value required (0-14)');
        }

        const H_concentration = Math.pow(10, -pH);
        const pOH = 14 - pH;
        const OH_concentration = Math.pow(10, -pOH);

        return {
            type: 'concentration_from_ph',
            givenPH: pH,
            H_concentration: H_concentration,
            pOH: pOH,
            OH_concentration: OH_concentration,
            interpretation: this.interpretPH(pH),
            verification: this.verifyConcentrationCalculation(H_concentration, pH),
            category: 'ph_calculations'
        };
    }

    solvePOHCalculations(problem) {
        const { pOH, concentration } = problem.parameters;

        if (pOH !== undefined) {
            const pH = 14 - pOH;
            const OH_concentration = Math.pow(10, -pOH);
            const H_concentration = Math.pow(10, -pH);

            return {
                type: 'poh_calculation',
                givenPOH: pOH,
                pH: pH,
                OH_concentration: OH_concentration,
                H_concentration: H_concentration,
                interpretation: this.interpretPH(pH),
                category: 'ph_calculations'
            };
        }

        if (concentration) {
            const pOH = -Math.log10(concentration);
            const pH = 14 - pOH;
            const H_concentration = Math.pow(10, -pH);

            return {
                type: 'poh_from_concentration',
                givenOHConcentration: concentration,
                pOH: pOH,
                pH: pH,
                H_concentration: H_concentration,
                interpretation: this.interpretPH(pH),
                category: 'ph_calculations'
            };
        }

        throw new Error('Either pOH or [OH-] concentration required');
    }

    solveStrongAcid(problem) {
        const { concentration, acid } = problem.parameters;

        if (!concentration || concentration <= 0) {
            throw new Error('Valid acid concentration required');
        }

        // For strong acids, [H+] = C_acid (complete dissociation)
        const H_concentration = concentration;
        const pH = -Math.log10(H_concentration);
        const pOH = 14 - pH;
        const OH_concentration = this.constants.Kw / H_concentration;

        return {
            type: 'strong_acid',
            acid: acid || 'Strong acid',
            initialConcentration: concentration,
            dissociationType: 'Complete (100%)',
            H_concentration: H_concentration,
            pH: pH,
            pOH: pOH,
            OH_concentration: OH_concentration,
            interpretation: this.interpretPH(pH),
            explanation: 'Strong acids dissociate completely, so [H⁺] equals initial acid concentration',
            category: 'strong_acid_base'
        };
    }

    solveStrongBase(problem) {
        const { concentration, base } = problem.parameters;

        if (!concentration || concentration <= 0) {
            throw new Error('Valid base concentration required');
        }

        // For strong bases, [OH-] = C_base (complete dissociation)
        const OH_concentration = concentration;
        const pOH = -Math.log10(OH_concentration);
        const pH = 14 - pOH;
        const H_concentration = this.constants.Kw / OH_concentration;

        return {
            type: 'strong_base',
            base: base || 'Strong base',
            initialConcentration: concentration,
            dissociationType: 'Complete (100%)',
            OH_concentration: OH_concentration,
            pOH: pOH,
            pH: pH,
            H_concentration: H_concentration,
            interpretation: this.interpretPH(pH),
            explanation: 'Strong bases dissociate completely, so [OH⁻] equals initial base concentration',
            category: 'strong_acid_base'
        };
    }

    solveWeakAcid(problem) {
        const { concentration, Ka, acid } = problem.parameters;

        if (!concentration || concentration <= 0) {
            throw new Error('Valid acid concentration required');
        }
        if (!Ka || Ka <= 0) {
            throw new Error('Valid Ka value required');
        }

        const pKa = -Math.log10(Ka);

        // Check if approximation is valid: Ka/C < 0.05
        const approximationValid = (Ka / concentration) < 0.05;

        let H_concentration, exactSolution;

        if (approximationValid) {
            // Approximation: [H+] ≈ √(Ka × C)
            H_concentration = Math.sqrt(Ka * concentration);
            exactSolution = false;
        } else {
            // Quadratic solution: Ka = x²/(C-x)
            // x² + Ka·x - Ka·C = 0
            const a = 1;
            const b = Ka;
            const c = -Ka * concentration;
            const discriminant = b * b - 4 * a * c;
            H_concentration = (-b + Math.sqrt(discriminant)) / (2 * a);
            exactSolution = true;
        }

        const pH = -Math.log10(H_concentration);
        const pOH = 14 - pH;
        const OH_concentration = this.constants.Kw / H_concentration;

        // Calculate equilibrium concentrations
        const A_minus = H_concentration;  // [A-] = [H+]
        const HA_equilibrium = concentration - H_concentration;  // [HA] at equilibrium

        // Percent dissociation
        const percentDissociation = (H_concentration / concentration) * 100;

        return {
            type: 'weak_acid',
            acid: acid || 'Weak acid',
            initialConcentration: concentration,
            Ka: Ka,
            pKa: pKa,
            approximationUsed: !exactSolution,
            approximationValid: approximationValid,
            H_concentration: H_concentration,
            pH: pH,
            pOH: pOH,
            OH_concentration: OH_concentration,
            equilibriumConcentrations: {
                H_plus: H_concentration,
                A_minus: A_minus,
                HA: HA_equilibrium
            },
            percentDissociation: percentDissociation,
            interpretation: this.interpretPH(pH),
            explanation: approximationValid ? 
                'Approximation valid: Ka << C, so [H⁺] ≈ √(Ka·C)' : 
                'Approximation not valid: used quadratic formula for exact solution',
            category: 'weak_acid_base'
        };
    }

    solveWeakBase(problem) {
        const { concentration, Kb, base } = problem.parameters;

        if (!concentration || concentration <= 0) {
            throw new Error('Valid base concentration required');
        }
        if (!Kb || Kb <= 0) {
            throw new Error('Valid Kb value required');
        }

        const pKb = -Math.log10(Kb);

        // Check if approximation is valid
        const approximationValid = (Kb / concentration) < 0.05;

        let OH_concentration, exactSolution;

        if (approximationValid) {
            // Approximation: [OH-] ≈ √(Kb × C)
            OH_concentration = Math.sqrt(Kb * concentration);
            exactSolution = false;
        } else {
            // Quadratic solution
            const a = 1;
            const b = Kb;
            const c = -Kb * concentration;
            const discriminant = b * b - 4 * a * c;
            OH_concentration = (-b + Math.sqrt(discriminant)) / (2 * a);
            exactSolution = true;
        }

        const pOH = -Math.log10(OH_concentration);
        const pH = 14 - pOH;
        const H_concentration = this.constants.Kw / OH_concentration;

        // Calculate equilibrium concentrations
        const BH_plus = OH_concentration;  // [BH+] = [OH-]
        const B_equilibrium = concentration - OH_concentration;  // [B] at equilibrium

        // Percent dissociation
        const percentDissociation = (OH_concentration / concentration) * 100;

        return {
            type: 'weak_base',
            base: base || 'Weak base',
            initialConcentration: concentration,
            Kb: Kb,
            pKb: pKb,
            approximationUsed: !exactSolution,
            approximationValid: approximationValid,
            OH_concentration: OH_concentration,
            pOH: pOH,
            pH: pH,
            H_concentration: H_concentration,
            equilibriumConcentrations: {
                OH_minus: OH_concentration,
                BH_plus: BH_plus,
                B: B_equilibrium
            },
            percentDissociation: percentDissociation,
            interpretation: this.interpretPH(pH),
            explanation: approximationValid ? 
                'Approximation valid: Kb << C, so [OH⁻] ≈ √(Kb·C)' : 
                'Approximation not valid: used quadratic formula for exact solution',
            category: 'weak_acid_base'
        };
    }

    solvePercentDissociation(problem) {
        const { concentration, Ka, H_concentration } = problem.parameters;

        let percentDissociation;

        if (H_concentration !== undefined && concentration !== undefined) {
            // Calculate from given [H+] and initial concentration
            percentDissociation = (H_concentration / concentration) * 100;
        } else if (Ka !== undefined && concentration !== undefined) {
            // Calculate [H+] first, then percent dissociation
            const approximationValid = (Ka / concentration) < 0.05;
            let H_conc;

            if (approximationValid) {
                H_conc = Math.sqrt(Ka * concentration);
            } else {
                const a = 1;
                const b = Ka;
                const c = -Ka * concentration;
                const discriminant = b * b - 4 * a * c;
                H_conc = (-b + Math.sqrt(discriminant)) / (2 * a);
            }

            percentDissociation = (H_conc / concentration) * 100;
        } else {
            throw new Error('Insufficient parameters for percent dissociation calculation');
        }

        return {
            type: 'percent_dissociation',
            initialConcentration: concentration,
            percentDissociation: percentDissociation,
            degreeOfDissociation: percentDissociation / 100,
            interpretation: this.interpretPercentDissociation(percentDissociation),
            category: 'weak_acid_base'
        };
    }

    solveBufferPH(problem) {
        const { acidConcentration, baseConcentration, Ka, pKa, acid, base } = problem.parameters;

        if (!acidConcentration || !baseConcentration) {
            throw new Error('Both acid and conjugate base concentrations required');
        }

        let pKa_value;
        if (pKa !== undefined) {
            pKa_value = pKa;
        } else if (Ka !== undefined) {
            pKa_value = -Math.log10(Ka);
        } else {
            throw new Error('Either Ka or pKa required');
        }

        // Henderson-Hasselbalch equation: pH = pKa + log([A-]/[HA])
        const ratio = baseConcentration / acidConcentration;
        const pH = pKa_value + Math.log10(ratio);

        const pOH = 14 - pH;
        const H_concentration = Math.pow(10, -pH);
        const OH_concentration = Math.pow(10, -pOH);

        return {
            type: 'buffer_ph',
            acid: acid || 'HA',
            conjugateBase: base || 'A⁻',
            acidConcentration: acidConcentration,
            baseConcentration: baseConcentration,
            ratio: ratio,
            pKa: pKa_value,
            Ka: Ka || Math.pow(10, -pKa_value),
            pH: pH,
            pOH: pOH,
            H_concentration: H_concentration,
            OH_concentration: OH_concentration,
            bufferEffective: this.isBufferEffective(pH, pKa_value),
            interpretation: this.interpretPH(pH),
            explanation: 'Henderson-Hasselbalch equation: pH = pKa + log([base]/[acid])',
            category: 'buffer_solutions'
        };
    }

    solveBufferCapacity(problem) {
        const { acidConcentration, baseConcentration, Ka, pH } = problem.parameters;

        if (!acidConcentration || !baseConcentration || !Ka) {
            throw new Error('Acid concentration, base concentration, and Ka required');
        }

        const totalConcentration = acidConcentration + baseConcentration;
        const H_concentration = pH !== undefined ? Math.pow(10, -pH) : Math.sqrt(Ka);

        // Buffer capacity: β = 2.303 × C_total × Ka × [H+] / (Ka + [H+])²
        const numerator = 2.303 * totalConcentration * Ka * H_concentration;
        const denominator = Math.pow(Ka + H_concentration, 2);
        const bufferCapacity = numerator / denominator;

        return {
            type: 'buffer_capacity',
            totalConcentration: totalConcentration,
            bufferCapacity: bufferCapacity,
            units: 'mol/(L·pH unit)',
            interpretation: this.interpretBufferCapacity(bufferCapacity),
            explanation: 'Buffer capacity measures resistance to pH change upon acid/base addition',
            category: 'buffer_solutions'
        };
    }

    solveBufferPreparation(problem) {
        const { targetPH, pKa, Ka, totalVolume, totalConcentration, acid, base } = problem.parameters;

        if (targetPH === undefined) {
            throw new Error('Target pH required');
        }

        let pKa_value;
        if (pKa !== undefined) {
            pKa_value = pKa;
        } else if (Ka !== undefined) {
            pKa_value = -Math.log10(Ka);
        } else {
            throw new Error('Either Ka or pKa required');
        }

        // From Henderson-Hasselbalch: [A-]/[HA] = 10^(pH - pKa)
        const ratio = Math.pow(10, targetPH - pKa_value);

        // Calculate mole fractions
        const fractionBase = ratio / (1 + ratio);
        const fractionAcid = 1 / (1 + ratio);

        let result = {
            type: 'buffer_preparation',
            targetPH: targetPH,
            pKa: pKa_value,
            ratio: ratio,
            fractionAcid: fractionAcid,
            fractionBase: fractionBase,
            acid: acid || 'HA',
            conjugateBase: base || 'A⁻',
            category: 'buffer_solutions'
        };

        if (totalVolume && totalConcentration) {
            const molesAcid = fractionAcid * totalConcentration * totalVolume;
            const molesBase = fractionBase * totalConcentration * totalVolume;

            result.amounts = {
                acidMoles: molesAcid,
                baseMoles: molesBase,
                acidVolume: fractionAcid * totalVolume,
                baseVolume: fractionBase * totalVolume
            };
        }

        return result;
    }

    solveTitrationEndpoint(problem) {
        const { acidConcentration, acidVolume, baseConcentration, baseVolume, acidType, baseType } = problem.parameters;

        if (!acidConcentration || !baseConcentration) {
            throw new Error('Both acid and base concentrations required');
        }

        // Calculate moles
        let molesAcid, molesBase;

        if (acidVolume) {
            molesAcid = acidConcentration * acidVolume;
        }
        if (baseVolume) {
            molesBase = baseConcentration * baseVolume;
        }

        // At equivalence point: moles acid = moles base
        let volumeAtEquivalence;
        if (acidVolume && !baseVolume) {
            // Calculate base volume needed
            volumeAtEquivalence = (acidConcentration * acidVolume) / baseConcentration;
            molesBase = molesAcid;
        } else if (baseVolume && !acidVolume) {
            // Calculate acid volume needed
            volumeAtEquivalence = (baseConcentration * baseVolume) / acidConcentration;
            molesAcid = molesBase;
        }

        // Determine pH at equivalence point
        const equivalencePH = this.calculateEquivalencePH(acidType, baseType, acidConcentration, baseConcentration);

        return {
            type: 'titration_endpoint',
            acidConcentration: acidConcentration,
            baseConcentration: baseConcentration,
            volumeAtEquivalence: volumeAtEquivalence,
            molesAtEquivalence: molesAcid || molesBase,
            equivalencePH: equivalencePH,
            acidType: acidType || 'unknown',
            baseType: baseType || 'unknown',
            interpretation: this.interpretEquivalencePoint(equivalencePH),
            category: 'titration'
        };
    }

    solveTitrationCurve(problem) {
        const { acidConcentration, acidVolume, baseConcentration, Ka, acidType, baseType } = problem.parameters;

        if (!acidConcentration || !acidVolume || !baseConcentration) {
            throw new Error('Acid concentration, acid volume, and base concentration required');
        }

        const curvePoints = [];
        const molesAcid = acidConcentration * acidVolume;
        const volumeAtEquivalence = molesAcid / baseConcentration;

        // Generate points before, at, and after equivalence
        const volumePoints = [
            0,
            volumeAtEquivalence * 0.1,
            volumeAtEquivalence * 0.25,
            volumeAtEquivalence * 0.5,
            volumeAtEquivalence * 0.75,
            volumeAtEquivalence * 0.9,
            volumeAtEquivalence * 0.99,
            volumeAtEquivalence,  // Equivalence point
            volumeAtEquivalence * 1.01,
            volumeAtEquivalence * 1.1,
            volumeAtEquivalence * 1.5,
            volumeAtEquivalence * 2.0
        ];

        for (const volume of volumePoints) {
            const pH = this.calculateTitrationPH(volume, acidConcentration, acidVolume, baseConcentration, Ka, acidType, baseType);
            curvePoints.push({ volume, pH });
        }

        return {
            type: 'titration_curve',
            curvePoints: curvePoints,
            equivalencePoint: { volume: volumeAtEquivalence, pH: curvePoints[7].pH },
            halfEquivalencePoint: { volume: volumeAtEquivalence * 0.5, pH: curvePoints[3].pH },
            acidType: acidType,
            baseType: baseType,
            category: 'titration'
        };
    }

    solveUnknownConcentration(problem) {
        const { knownConcentration, knownVolume, unknownVolume, knownType } = problem.parameters;

        if (!knownConcentration || !knownVolume || !unknownVolume) {
            throw new Error('Known concentration, known volume, and unknown volume required');
        }

        // At equivalence: n_acid = n_base
        // M_known × V_known = M_unknown × V_unknown
        const unknownConcentration = (knownConcentration * knownVolume) / unknownVolume;

        return {
            type: 'unknown_concentration',
            knownConcentration: knownConcentration,
            knownVolume: knownVolume,
            unknownVolume: unknownVolume,
            unknownConcentration: unknownConcentration,
            knownType: knownType || 'titrant',
            explanation: 'Using stoichiometry at equivalence point: M₁V₁ = M₂V₂',
            category: 'titration'
        };
    }

    solvePolyproticAcid(problem) {
        const { concentration, Ka1, Ka2, Ka3, acid } = problem.parameters;

        if (!concentration || !Ka1) {
            throw new Error('Concentration and at least Ka1 required');
        }

        const pKa1 = -Math.log10(Ka1);
        const pKa2 = Ka2 ? -Math.log10(Ka2) : null;
        const pKa3 = Ka3 ? -Math.log10(Ka3) : null;

        // For polyprotic acids, first dissociation usually dominates
        // [H+] ≈ √(Ka1 × C)
        const H_concentration = Math.sqrt(Ka1 * concentration);
        const pH = -Math.log10(H_concentration);

        return {
            type: 'polyprotic_acid',
            acid: acid || 'Polyprotic acid',
            concentration: concentration,
            Ka1: Ka1,
            pKa1: pKa1,
            Ka2: Ka2,
            pKa2: pKa2,
            Ka3: Ka3,
            pKa3: pKa3,
            H_concentration: H_concentration,
            pH: pH,
            dominantDissociation: 'First',
            explanation: 'First dissociation dominates because Ka1 >> Ka2',
            interpretation: this.interpretPH(pH),
            category: 'polyprotic_acids'
        };
    }

    solveSpeciesDistribution(problem) {
        const { pH, Ka1, Ka2, acid } = problem.parameters;

        if (pH === undefined || !Ka1) {
            throw new Error('pH and Ka1 required');
        }

        const H_concentration = Math.pow(10, -pH);

        let alpha0, alpha1, alpha2;

        if (Ka2) {
            // Diprotic acid: H2A, HA-, A2-
            const denominator = H_concentration * H_concentration + H_concentration * Ka1 + Ka1 * Ka2;
            alpha0 = H_concentration * H_concentration / denominator;  // H2A
            alpha1 = H_concentration * Ka1 / denominator;               // HA-
            alpha2 = Ka1 * Ka2 / denominator;                           // A2-

            return {
                type: 'species_distribution',
                acid: acid || 'H₂A',
                pH: pH,
                Ka1: Ka1,
                Ka2: Ka2,
                fractions: {
                    H2A: alpha0,
                    HA_minus: alpha1,
                    A_2minus: alpha2
                },
                dominantSpecies: this.identifyDominantSpecies({ alpha0, alpha1, alpha2 }),
                category: 'polyprotic_acids'
            };
        } else {
            // Monoprotic acid: HA, A-
            const denominator = H_concentration + Ka1;
            alpha0 = H_concentration / denominator;  // HA
            alpha1 = Ka1 / denominator;               // A-

            return {
                type: 'species_distribution',
                acid: acid || 'HA',
                pH: pH,
                Ka1: Ka1,
                fractions: {
                    HA: alpha0,
                    A_minus: alpha1
                },
                dominantSpecies: this.identifyDominantSpecies({ alpha0, alpha1 }),
                category: 'polyprotic_acids'
            };
        }
    }

    solveSaltHydrolysis(problem) {
        const { concentration, cation, anion, Ka, Kb } = problem.parameters;

        if (!concentration) {
            throw new Error('Salt concentration required');
        }

        // Determine if cation or anion hydrolyzes
        const cationHydrolyzes = Kb !== undefined;  // Conjugate acid of weak base
        const anionHydrolyzes = Ka !== undefined;   // Conjugate base of weak acid

        if (cationHydrolyzes && !anionHydrolyzes) {
            // Acidic salt (e.g., NH4Cl)
            // BH+ + H2O ⇌ B + H3O+
            const Ka_conjugate = this.constants.Kw / Kb;
            const H_concentration = Math.sqrt(Ka_conjugate * concentration);
            const pH = -Math.log10(H_concentration);

            return {
                type: 'salt_hydrolysis',
                salt: `${cation}${anion}`,
                concentration: concentration,
                hydrolyzingIon: cation,
                hydrolysiType: 'Acidic',
                Kb_base: Kb,
                Ka_conjugate: Ka_conjugate,
                H_concentration: H_concentration,
                pH: pH,
                explanation: 'Conjugate acid of weak base hydrolyzes to produce H₃O⁺',
                interpretation: this.interpretPH(pH),
                category: 'salt_hydrolysis'
            };
        } else if (anionHydrolyzes && !cationHydrolyzes) {
            // Basic salt (e.g., NaCH3COO)
            // A- + H2O ⇌ HA + OH-
            const Kb_conjugate = this.constants.Kw / Ka;
            const OH_concentration = Math.sqrt(Kb_conjugate * concentration);
            const pOH = -Math.log10(OH_concentration);
            const pH = 14 - pOH;

            return {
                type: 'salt_hydrolysis',
                salt: `${cation}${anion}`,
                concentration: concentration,
                hydrolyzingIon: anion,
                hydrolysisType: 'Basic',
                Ka_acid: Ka,
                Kb_conjugate: Kb_conjugate,
                OH_concentration: OH_concentration,
                pH: pH,
                explanation: 'Conjugate base of weak acid hydrolyzes to produce OH⁻',
                interpretation: this.interpretPH(pH),
                category: 'salt_hydrolysis'
            };
        } else if (cationHydrolyzes && anionHydrolyzes) {
            // Both ions hydrolyze - compare Ka and Kb
            const Ka_conjugate = this.constants.Kw / Kb;
            
            if (Ka_conjugate > Ka) {
                // Acidic
                const pH = 7 - 0.5 * (Math.log10(Ka_conjugate) - Math.log10(Ka));
                return {
                    type: 'salt_hydrolysis',
                    salt: `${cation}${anion}`,
                    hydrolysisType: 'Both (net acidic)',
                    pH: pH,
                    explanation: 'Both ions hydrolyze; Ka(cation) > Kb(anion), so solution is acidic',
                    category: 'salt_hydrolysis'
                };
            } else if (Ka_conjugate < Ka) {
                // Basic
                const pH = 7 + 0.5 * (Math.log10(Ka) - Math.log10(Ka_conjugate));
                return {
                    type: 'salt_hydrolysis',
                    salt: `${cation}${anion}`,
                    hydrolysisType: 'Both (net basic)',
                    pH: pH,
                    explanation: 'Both ions hydrolyze; Kb(anion) > Ka(cation), so solution is basic',
                    category: 'salt_hydrolysis'
                };
            } else {
                // Neutral
                return {
                    type: 'salt_hydrolysis',
                    salt: `${cation}${anion}`,
                    hydrolysisType: 'Both (neutral)',
                    pH: 7.0,
                    explanation: 'Both ions hydrolyze equally; Ka = Kb, so solution is neutral',
                    category: 'salt_hydrolysis'
                };
            }
        } else {
            // Neutral salt (e.g., NaCl)
            return {
                type: 'salt_hydrolysis',
                salt: `${cation}${anion}`,
                hydrolysisType: 'None (neutral)',
                pH: 7.0,
                explanation: 'Salt of strong acid and strong base; no hydrolysis occurs',
                interpretation: 'Neutral solution',
                category: 'salt_hydrolysis'
            };
        }
    }

    solveIndicatorSelection(problem) {
        const { equivalencePH, indicators } = problem.parameters;

        if (equivalencePH === undefined) {
            throw new Error('Equivalence point pH required');
        }

        // Common indicators with their pH ranges
        const commonIndicators = indicators || {
            'Methyl violet': { pKa: 0.8, range: [0.0, 1.6], colorChange: 'Yellow → Blue' },
            'Thymol blue (acid)': { pKa: 1.7, range: [1.2, 2.8], colorChange: 'Red → Yellow' },
            'Methyl orange': { pKa: 3.7, range: [3.1, 4.4], colorChange: 'Red → Yellow' },
            'Bromocresol green': { pKa: 4.7, range: [3.8, 5.4], colorChange: 'Yellow → Blue' },
            'Methyl red': { pKa: 5.1, range: [4.4, 6.2], colorChange: 'Red → Yellow' },
            'Bromothymol blue': { pKa: 7.0, range: [6.0, 7.6], colorChange: 'Yellow → Blue' },
            'Phenol red': { pKa: 7.9, range: [6.8, 8.4], colorChange: 'Yellow → Red' },
            'Phenolphthalein': { pKa: 9.4, range: [8.3, 10.0], colorChange: 'Colorless → Pink' },
            'Thymolphthalein': { pKa: 9.9, range: [9.3, 10.5], colorChange: 'Colorless → Blue' },
            'Alizarin yellow': { pKa: 11.0, range: [10.0, 12.0], colorChange: 'Yellow → Red' }
        };

        const suitableIndicators = [];
        const unsuitable = [];

        for (const [name, properties] of Object.entries(commonIndicators)) {
            const [rangeLow, rangeHigh] = properties.range;
            
            if (equivalencePH >= rangeLow && equivalencePH <= rangeHigh) {
                suitableIndicators.push({
                    name: name,
                    pKa: properties.pKa,
                    range: properties.range,
                    colorChange: properties.colorChange,
                    suitability: 'Excellent'
                });
            } else if (Math.abs(properties.pKa - equivalencePH) <= 1.5) {
                suitableIndicators.push({
                    name: name,
                    pKa: properties.pKa,
                    range: properties.range,
                    colorChange: properties.colorChange,
                    suitability: 'Acceptable'
                });
            } else {
                unsuitable.push({
                    name: name,
                    pKa: properties.pKa,
                    range: properties.range,
                    reason: 'pH range does not match equivalence point'
                });
            }
        }

        // Sort suitable indicators by how well they match
        suitableIndicators.sort((a, b) => 
            Math.abs(a.pKa - equivalencePH) - Math.abs(b.pKa - equivalencePH)
        );

        return {
            type: 'indicator_selection',
            equivalencePH: equivalencePH,
            recommendedIndicators: suitableIndicators,
            unsuitableIndicators: unsuitable,
            bestChoice: suitableIndicators[0]?.name || 'None found',
            explanation: `Select indicator with pKa near equivalence pH (${equivalencePH.toFixed(1)})`,
            category: 'acid_base_indicators'
        };
    }

    solveLewisAcidBase(problem) {
        const { acid, base, product, reactionType } = problem.parameters;

        return {
            type: 'lewis_acid_base',
            lewisAcid: acid || 'Electron pair acceptor',
            lewisBase: base || 'Electron pair donor',
            product: product || 'Adduct/Complex',
            reactionType: reactionType || 'Coordination',
            explanation: 'Lewis acid accepts electron pair; Lewis base donates electron pair',
            examples: [
                'BF₃ (Lewis acid) + NH₃ (Lewis base) → BF₃NH₃',
                'Fe³⁺ (Lewis acid) + 6CN⁻ (Lewis base) → [Fe(CN)₆]³⁻',
                'H⁺ (Lewis acid) + H₂O (Lewis base) → H₃O⁺'
            ],
            category: 'lewis_acids_bases'
        };
    }

    solveKaKbRelationship(problem) {
        const { Ka, Kb, acid, base } = problem.parameters;

        if (Ka !== undefined && !Kb) {
            // Calculate Kb from Ka
            const Kb_calculated = this.constants.Kw / Ka;
            const pKa = -Math.log10(Ka);
            const pKb = -Math.log10(Kb_calculated);

            return {
                type: 'ka_kb_relationship',
                Ka: Ka,
                pKa: pKa,
                Kb: Kb_calculated,
                pKb: pKb,
                relationship: 'Ka × Kb = Kw',
                acid: acid || 'HA',
                conjugateBase: 'A⁻',
                explanation: 'For a conjugate acid-base pair: Ka × Kb = Kw = 1.0 × 10⁻¹⁴',
                category: 'advanced'
            };
        } else if (Kb !== undefined && !Ka) {
            // Calculate Ka from Kb
            const Ka_calculated = this.constants.Kw / Kb;
            const pKa = -Math.log10(Ka_calculated);
            const pKb = -Math.log10(Kb);

            return {
                type: 'ka_kb_relationship',
                Kb: Kb,
                pKb: pKb,
                Ka: Ka_calculated,
                pKa: pKa,
                relationship: 'Ka × Kb = Kw',
                base: base || 'B',
                conjugateAcid: 'BH⁺',
                explanation: 'For a conjugate acid-base pair: Ka × Kb = Kw = 1.0 × 10⁻¹⁴',
                category: 'advanced'
            };
        } else {
            throw new Error('Either Ka or Kb required (not both)');
        }
    }

    solveDilution(problem) {
        const { initialConcentration, initialVolume, finalVolume, acidOrBase, Ka, Kb } = problem.parameters;

        if (!initialConcentration || !initialVolume || !finalVolume) {
            throw new Error('Initial concentration, initial volume, and final volume required');
        }

        // Calculate final concentration after dilution
        const finalConcentration = (initialConcentration * initialVolume) / finalVolume;
        const dilutionFactor = finalVolume / initialVolume;

        // Calculate pH before and after dilution
        let pHInitial, pHFinal;

        if (Ka) {
            // Weak acid
            pHInitial = -Math.log10(Math.sqrt(Ka * initialConcentration));
            pHFinal = -Math.log10(Math.sqrt(Ka * finalConcentration));
        } else if (Kb) {
            // Weak base
            const pOHInitial = -Math.log10(Math.sqrt(Kb * initialConcentration));
            const pOHFinal = -Math.log10(Math.sqrt(Kb * finalConcentration));
            pHInitial = 14 - pOHInitial;
            pHFinal = 14 - pOHFinal;
        } else {
            // Strong acid or base
            if (acidOrBase === 'acid') {
                pHInitial = -Math.log10(initialConcentration);
                pHFinal = -Math.log10(finalConcentration);
            } else {
                const pOHInitial = -Math.log10(initialConcentration);
                const pOHFinal = -Math.log10(finalConcentration);
                pHInitial = 14 - pOHInitial;
                pHFinal = 14 - pOHFinal;
            }
        }

        return {
            type: 'dilution',
            initialConcentration: initialConcentration,
            finalConcentration: finalConcentration,
            initialVolume: initialVolume,
            finalVolume: finalVolume,
            dilutionFactor: dilutionFactor,
            pHInitial: pHInitial,
            pHFinal: pHFinal,
            pHChange: pHFinal - pHInitial,
            explanation: 'Dilution formula: M₁V₁ = M₂V₂',
            category: 'advanced'
        };
    }

    solveMixingSolutions(problem) {
        const { acid1, concentration1, volume1, acid2, concentration2, volume2 } = problem.parameters;

        if (!concentration1 || !volume1 || !concentration2 || !volume2) {
            throw new Error('Concentrations and volumes for both solutions required');
        }

        const totalVolume = volume1 + volume2;
        const moles1 = concentration1 * volume1;
        const moles2 = concentration2 * volume2;
        const totalMoles = moles1 + moles2;
        const finalConcentration = totalMoles / totalVolume;

        return {
            type: 'mixing_solutions',
            solution1: { acid: acid1, concentration: concentration1, volume: volume1, moles: moles1 },
            solution2: { acid: acid2, concentration: concentration2, volume: volume2, moles: moles2 },
            totalVolume: totalVolume,
            totalMoles: totalMoles,
            finalConcentration: finalConcentration,
            explanation: 'Total moles = sum of individual moles; Final concentration = total moles / total volume',
            category: 'advanced'
        };
    }

    // HELPER METHODS

    interpretPH(pH) {
        if (pH < 3) return 'Strongly acidic';
        if (pH < 5) return 'Moderately acidic';
        if (pH < 7) return 'Weakly acidic';
        if (pH === 7) return 'Neutral';
        if (pH < 9) return 'Weakly basic';
        if (pH < 11) return 'Moderately basic';
        return 'Strongly basic';
    }

    interpretPercentDissociation(percent) {
        if (percent < 1) return 'Very weak acid/base';
        if (percent < 10) return 'Weak acid/base';
        if (percent < 50) return 'Moderately weak';
        if (percent < 95) return 'Moderately strong';
        return 'Strong acid/base (nearly complete dissociation)';
    }

    interpretBufferCapacity(capacity) {
        if (capacity < 0.01) return 'Poor buffer capacity';
        if (capacity < 0.05) return 'Moderate buffer capacity';
        if (capacity < 0.1) return 'Good buffer capacity';
        return 'Excellent buffer capacity';
    }

    interpretEquivalencePoint(pH) {
        if (Math.abs(pH - 7) < 0.5) return 'Equivalence at neutral pH (strong acid-strong base)';
        if (pH < 7) return 'Equivalence at acidic pH (weak base-strong acid)';
        return 'Equivalence at basic pH (weak acid-strong base)';
    }

    isBufferEffective(pH, pKa) {
        const difference = Math.abs(pH - pKa);
        return {
            effective: difference <= 1,
            difference: difference,
            recommendation: difference <= 1 ? 'Effective buffer range' : 'Outside effective buffer range'
        };
    }

    identifyDominantSpecies(fractions) {
        const species = Object.entries(fractions);
        species.sort((a, b) => b[1] - a[1]);
        return {
            dominant: species[0][0],
            fraction: species[0][1],
            percentage: (species[0][1] * 100).toFixed(1) + '%'
        };
    }

    calculateEquivalencePH(acidType, baseType, acidConc, baseConc) {
        if (acidType === 'strong' && baseType === 'strong') {
            return 7.0;
        } else if (acidType === 'weak' && baseType === 'strong') {
            // pH > 7 (hydrolysis of conjugate base)
            return 8.5;  // Approximate
        } else if (acidType === 'strong' && baseType === 'weak') {
            // pH < 7 (hydrolysis of conjugate acid)
            return 5.5;  // Approximate
        } else {
            // Both weak
            return 7.0;  // Approximate
        }
    }

    calculateTitrationPH(volumeAdded, acidConc, acidVol, baseConc, Ka, acidType, baseType) {
        const molesAcid = acidConc * acidVol;
        const molesBaseAdded = baseConc * volumeAdded;
        const totalVolume = acidVol + volumeAdded;

        if (volumeAdded === 0) {
            // Initial pH (just acid)
            if (acidType === 'strong') {
                return -Math.log10(acidConc);
            } else {
                return -Math.log10(Math.sqrt(Ka * acidConc));
            }
        }

        const volumeAtEquiv = molesAcid / baseConc;

        if (volumeAdded < volumeAtEquiv) {
            // Before equivalence point - buffer region for weak acid
            if (acidType === 'weak' && Ka) {
                const molesAcidRemaining = molesAcid - molesBaseAdded;
                const molesConjugateBase = molesBaseAdded;
                const pKa = -Math.log10(Ka);
                return pKa + Math.log10(molesConjugateBase / molesAcidRemaining);
            } else {
                // Strong acid
                const excessAcid = (molesAcid - molesBaseAdded) / totalVolume;
                return -Math.log10(excessAcid);
            }
        } else if (Math.abs(volumeAdded - volumeAtEquiv) < 0.001) {
            // At equivalence point
            return this.calculateEquivalencePH(acidType, baseType, acidConc, baseConc);
        } else {
            // After equivalence point - excess base
            const excessBase = (molesBaseAdded - molesAcid) / totalVolume;
            const pOH = -Math.log10(excessBase);
            return 14 - pOH;
        }
    }

    verifyPHCalculation(concentration, pH) {
        const calculatedConcentration = Math.pow(10, -pH);
        const difference = Math.abs(concentration - calculatedConcentration);
        
        return {
            given: concentration,
            calculated: calculatedConcentration,
            difference: difference,
            isValid: difference / concentration < 1e-10
        };
    }

    verifyConcentrationCalculation(concentration, pH) {
        const calculatedPH = -Math.log10(concentration);
        const difference = Math.abs(pH - calculatedPH);
        
        return {
            given: pH,
            calculated: calculatedPH,
            difference: difference,
            isValid: difference < 1e-10
        };
    }

    // STEP GENERATION

    generateAcidBaseSteps(problem, solution) {
        let baseSteps = this.generateBaseAcidBaseSteps(problem, solution);

        // Apply enhancements based on options
        if (this.explanationLevel !== 'basic') {
            baseSteps = baseSteps.map((step, index, array) =>
                this.enhanceStepExplanation(step, problem, solution, index, array.length)
            );
        }

        if (this.includeConceptualConnections) {
            baseSteps = this.addStepBridges(baseSteps, problem);
        }

        if (this.includeErrorPrevention) {
            baseSteps = baseSteps.map(step =>
                this.addErrorPrevention(step, problem.type)
            );
        }

        if (this.explanationLevel === 'scaffolded') {
            baseSteps = this.addScaffolding(baseSteps, problem);
        }

        return baseSteps;
    }

    generateBaseAcidBaseSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'ph_from_concentration':
                return this.generatePHFromConcentrationSteps(problem, solution);
            case 'concentration_from_ph':
                return this.generateConcentrationFromPHSteps(problem, solution);
            case 'strong_acid':
                return this.generateStrongAcidSteps(problem, solution);
            case 'strong_base':
                return this.generateStrongBaseSteps(problem, solution);
            case 'weak_acid':
                return this.generateWeakAcidSteps(problem, solution);
            case 'weak_base':
                return this.generateWeakBaseSteps(problem, solution);
            case 'buffer_ph':
                return this.generateBufferPHSteps(problem, solution);
            case 'titration_endpoint':
                return this.generateTitrationSteps(problem, solution);
            case 'salt_hydrolysis':
                return this.generateSaltHydrolysisSteps(problem, solution);
            default:
                return this.generateGenericAcidBaseSteps(problem, solution);
        }
    }

    generatePHFromConcentrationSteps(problem, solution) {
        const { concentration } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given concentration',
            description: 'Start with the hydrogen ion concentration',
            expression: `[H⁺] = ${concentration} M`,
            reasoning: 'pH is defined as the negative logarithm of hydrogen ion concentration',
            visualHint: 'Think of pH as a scale that compresses a large range of concentrations',
            goalStatement: 'Calculate pH using the definition pH = -log[H⁺]',
            chemicalContext: 'The pH scale is logarithmic, so each unit represents a 10-fold change in [H⁺]'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply pH definition',
            description: 'Use the logarithmic relationship to calculate pH',
            beforeExpression: `[H⁺] = ${concentration}`,
            operation: 'pH = -log₁₀[H⁺]',
            afterExpression: `pH = -log₁₀(${concentration})`,
            reasoning: 'The negative log converts concentration to pH scale',
            algebraicRule: 'Logarithm base 10',
            visualHint: 'The negative sign makes larger [H⁺] give smaller pH (more acidic)',
            workingDetails: {
                calculation: `pH = -log(${concentration})`,
                result: `pH = ${solution.pH.toFixed(2)}`
            }
        });

        steps.push({
            stepNumber: 3,
            step: 'Final result',
            description: 'State the pH value and interpret',
            expression: `pH = ${solution.pH.toFixed(2)}`,
            reasoning: `This pH indicates a ${solution.interpretation.toLowerCase()} solution`,
            finalAnswer: true,
            interpretation: solution.interpretation,
            additionalInfo: {
                pOH: solution.pOH.toFixed(2),
                relationship: 'pH + pOH = 14.00'
            }
        });

        return steps;
    }

    generateConcentrationFromPHSteps(problem, solution) {
        const { pH } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given pH',
            description: 'Start with the pH value',
            expression: `pH = ${pH}`,
            reasoning: 'We need to find [H⁺] from pH using the inverse relationship',
            goalStatement: 'Calculate [H⁺] using [H⁺] = 10^(-pH)',
            chemicalContext: 'pH is a logarithmic scale, so we use antilog to find concentration'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply inverse pH formula',
            description: 'Use the exponential relationship',
            beforeExpression: `pH = ${pH}`,
            operation: '[H⁺] = 10^(-pH)',
            afterExpression: `[H⁺] = 10^(-${pH})`,
            reasoning: 'Taking 10 to the power of negative pH gives concentration',
            algebraicRule: 'Inverse logarithm (antilog)',
            workingDetails: {
                calculation: `[H⁺] = 10^(-${pH})`,
                result: `[H⁺] = ${solution.H_concentration.toExponential(2)} M`
            }
        });

        steps.push({
            stepNumber: 3,
            step: 'Final result',
            description: 'State the concentration',
            expression: `[H⁺] = ${solution.H_concentration.toExponential(2)} M`,
            reasoning: `This concentration corresponds to a ${solution.interpretation.toLowerCase()} solution`,
            finalAnswer: true,
            interpretation: solution.interpretation
        });

        return steps;
    }

    generateStrongAcidSteps(problem, solution) {
        const { concentration, acid } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify acid type',
            description: `Recognize that ${acid || 'the acid'} is a strong acid`,
            expression: `${acid || 'HA'} → H⁺ + A⁻ (100% dissociation)`,
            reasoning: 'Strong acids dissociate completely in water',
            chemicalContext: 'Complete dissociation means [H⁺] = initial acid concentration',
            visualHint: 'Imagine all acid molecules breaking apart into ions'
        });

        steps.push({
            stepNumber: 2,
            step: 'Determine [H⁺]',
            description: 'Set hydrogen ion concentration equal to acid concentration',
            beforeExpression: `C_acid = ${concentration} M`,
            afterExpression: `[H⁺] = ${concentration} M`,
            reasoning: '100% dissociation means every acid molecule produces one H⁺',
            chemicalContext: 'For monoprotic strong acids: [H⁺] = C_acid'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate pH',
            description: 'Apply pH formula',
            beforeExpression: `[H⁺] = ${concentration}`,
            operation: 'pH = -log[H⁺]',
            afterExpression: `pH = ${solution.pH.toFixed(2)}`,
            reasoning: 'Use logarithmic definition of pH',
            finalAnswer: true,
            interpretation: solution.interpretation
        });

        return steps;
    }

    generateStrongBaseSteps(problem, solution) {
        const { concentration, base } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify base type',
            description: `Recognize that ${base || 'the base'} is a strong base`,
            expression: `${base || 'BOH'} → B⁺ + OH⁻ (100% dissociation)`,
            reasoning: 'Strong bases dissociate completely in water',
            chemicalContext: 'Complete dissociation means [OH⁻] = initial base concentration'
        });

        steps.push({
            stepNumber: 2,
            step: 'Determine [OH⁻]',
            description: 'Set hydroxide ion concentration equal to base concentration',
            beforeExpression: `C_base = ${concentration} M`,
            afterExpression: `[OH⁻] = ${concentration} M`,
            reasoning: '100% dissociation means every base formula unit produces one OH⁻',
            chemicalContext: 'For strong bases: [OH⁻] = C_base'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate pOH',
            description: 'Apply pOH formula',
            beforeExpression: `[OH⁻] = ${concentration}`,
            operation: 'pOH = -log[OH⁻]',
            afterExpression: `pOH = ${solution.pOH.toFixed(2)}`,
            reasoning: 'Use logarithmic definition of pOH'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate pH',
            description: 'Convert pOH to pH',
            beforeExpression: `pOH = ${solution.pOH.toFixed(2)}`,
            operation: 'pH = 14 - pOH',
            afterExpression: `pH = ${solution.pH.toFixed(2)}`,
            reasoning: 'Use the relationship pH + pOH = 14 at 25°C',
            finalAnswer: true,
            interpretation: solution.interpretation,
            chemicalContext: 'This relationship comes from Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴'
        });

        return steps;
    }

    generateWeakAcidSteps(problem, solution) {
        const { concentration, Ka, acid } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write equilibrium expression',
            description: `Set up the equilibrium for ${acid || 'weak acid'}`,
            expression: `${acid || 'HA'} ⇌ H⁺ + A⁻`,
            reasoning: 'Weak acids establish equilibrium, not complete dissociation',
            chemicalContext: 'The double arrow indicates reversible reaction',
            visualHint: 'Only a fraction of acid molecules dissociate into ions'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write Ka expression',
            description: 'Set up the acid dissociation constant equation',
            expression: `Ka = [H⁺][A⁻]/[HA] = ${Ka.toExponential(2)}`,
            reasoning: 'Ka quantifies the extent of acid dissociation',
            chemicalContext: 'Smaller Ka means weaker acid (less dissociation)',
            algebraicRule: 'Equilibrium constant expression: products over reactants'
        });

        steps.push({
            stepNumber: 3,
            step: 'Set up ICE table',
            description: 'Track Initial, Change, and Equilibrium concentrations',
            iceTable: {
                species: ['HA', 'H⁺', 'A⁻'],
                initial: [concentration, 0, 0],
                change: ['-x', '+x', '+x'],
                equilibrium: [`${concentration} - x`, 'x', 'x']
            },
            reasoning: 'ICE table organizes equilibrium information systematically',
            visualHint: 'Let x = amount that dissociates',
            chemicalContext: 'At equilibrium, some HA remains undissociated'
        });

        steps.push({
            stepNumber: 4,
            step: 'Check approximation validity',
            description: 'Determine if simplification is allowed',
            expression: `Ka/C = ${Ka}/${concentration} = ${(Ka/concentration).toExponential(2)}`,
            condition: solution.approximationValid ? 'Ka/C < 0.05 ✓' : 'Ka/C ≥ 0.05 ✗',
            reasoning: solution.approximationValid ? 
                'Approximation valid: can assume C - x ≈ C' : 
                'Approximation not valid: must use quadratic formula',
            chemicalContext: '5% rule: if x < 5% of C, approximation is acceptable'
        });

        if (solution.approximationUsed) {
            steps.push({
                stepNumber: 5,
                step: 'Apply approximation',
                description: 'Use simplified formula for [H⁺]',
                beforeExpression: `Ka = x²/C`,
                operation: 'x = √(Ka × C)',
                afterExpression: `[H⁺] = √(${Ka.toExponential(2)} × ${concentration})`,
                reasoning: 'Approximation assumes x << C, so C - x ≈ C',
                workingDetails: {
                    calculation: `[H⁺] = √(${(Ka * concentration).toExponential(2)})`,
                    result: `[H⁺] = ${solution.H_concentration.toExponential(2)} M`
                },
                algebraicRule: 'Square root simplification'
            });
        } else {
            steps.push({
                stepNumber: 5,
                step: 'Set up quadratic equation',
                description: 'Substitute into Ka expression without approximation',
                beforeExpression: `Ka = x²/(C - x)`,
                operation: 'Rearrange: x² + Ka·x - Ka·C = 0',
                afterExpression: `x² + ${Ka.toExponential(2)}x - ${(Ka * concentration).toExponential(2)} = 0`,
                reasoning: 'Must solve exactly when approximation is not valid',
                algebraicRule: 'Quadratic equation standard form'
            });

            steps.push({
                stepNumber: 6,
                step: 'Solve quadratic equation',
                description: 'Apply quadratic formula',
                expression: `x = (-b + √(b² - 4ac))/(2a)`,
                workingDetails: {
                    a: 1,
                    b: Ka,
                    c: -Ka * concentration,
                    discriminant: Math.pow(Ka, 2) + 4 * Ka * concentration,
                    result: `[H⁺] = ${solution.H_concentration.toExponential(2)} M`
                },
                reasoning: 'Use positive root (negative concentration is non-physical)',
                algebraicRule: 'Quadratic formula: x = [-b ± √(b² - 4ac)]/(2a)'
            });
        }

        steps.push({
            stepNumber: solution.approximationUsed ? 6 : 7,
            step: 'Calculate pH',
            description: 'Apply pH formula to [H⁺]',
            beforeExpression: `[H⁺] = ${solution.H_concentration.toExponential(2)} M`,
            operation: 'pH = -log[H⁺]',
            afterExpression: `pH = ${solution.pH.toFixed(2)}`,
            reasoning: 'Convert concentration to pH scale',
            finalAnswer: true,
            interpretation: solution.interpretation
        });

        steps.push({
            stepNumber: solution.approximationUsed ? 7 : 8,
            step: 'Calculate percent dissociation',
            description: 'Determine fraction of acid that dissociated',
            expression: `% dissociation = ([H⁺]/C) × 100% = ${solution.percentDissociation.toFixed(2)}%`,
            reasoning: 'Shows what fraction of the weak acid ionized',
            chemicalContext: `This indicates a ${this.interpretPercentDissociation(solution.percentDissociation).toLowerCase()}`,
            additionalInfo: {
                equilibriumConcentrations: solution.equilibriumConcentrations
            }
        });

        return steps;
    }

    generateWeakBaseSteps(problem, solution) {
        const { concentration, Kb, base } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write equilibrium expression',
            description: `Set up the equilibrium for ${base || 'weak base'}`,
            expression: `${base || 'B'} + H₂O ⇌ BH⁺ + OH⁻`,
            reasoning: 'Weak bases establish equilibrium with water',
            chemicalContext: 'Base accepts proton from water, producing OH⁻'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write Kb expression',
            description: 'Set up the base dissociation constant equation',
            expression: `Kb = [BH⁺][OH⁻]/[B] = ${Kb.toExponential(2)}`,
            reasoning: 'Kb quantifies the extent of base ionization',
            chemicalContext: 'Smaller Kb means weaker base (less ionization)'
        });

        steps.push({
            stepNumber: 3,
            step: 'Set up ICE table',
            description: 'Track Initial, Change, and Equilibrium concentrations',
            iceTable: {
                species: ['B', 'BH⁺', 'OH⁻'],
                initial: [concentration, 0, 0],
                change: ['-x', '+x', '+x'],
                equilibrium: [`${concentration} - x`, 'x', 'x']
            },
            reasoning: 'ICE table organizes equilibrium information',
            visualHint: 'Let x = [OH⁻] at equilibrium'
        });

        steps.push({
            stepNumber: 4,
            step: 'Check approximation validity',
            description: 'Determine if simplification is allowed',
            expression: `Kb/C = ${Kb}/${concentration} = ${(Kb/concentration).toExponential(2)}`,
            condition: solution.approximationValid ? 'Kb/C < 0.05 ✓' : 'Kb/C ≥ 0.05 ✗',
            reasoning: solution.approximationValid ? 
                'Approximation valid: can assume C - x ≈ C' : 
                'Approximation not valid: must use quadratic formula'
        });

        if (solution.approximationUsed) {
            steps.push({
                stepNumber: 5,
                step: 'Apply approximation',
                description: 'Use simplified formula for [OH⁻]',
                beforeExpression: `Kb = x²/C`,
                operation: 'x = √(Kb × C)',
                afterExpression: `[OH⁻] = √(${Kb.toExponential(2)} × ${concentration})`,
                reasoning: 'Approximation assumes x << C',
                workingDetails: {
                    result: `[OH⁻] = ${solution.OH_concentration.toExponential(2)} M`
                }
            });
        } else {
            steps.push({
                stepNumber: 5,
                step: 'Solve quadratic equation',
                description: 'Use exact quadratic formula',
                expression: `x² + Kb·x - Kb·C = 0`,
                workingDetails: {
                    result: `[OH⁻] = ${solution.OH_concentration.toExponential(2)} M`
                },
                reasoning: 'Exact solution required when approximation not valid'
            });
        }

        steps.push({
            stepNumber: solution.approximationUsed ? 6 : 6,
            step: 'Calculate pOH',
            description: 'Apply pOH formula',
            beforeExpression: `[OH⁻] = ${solution.OH_concentration.toExponential(2)} M`,
            operation: 'pOH = -log[OH⁻]',
            afterExpression: `pOH = ${solution.pOH.toFixed(2)}`,
            reasoning: 'Convert concentration to pOH scale'
        });

        steps.push({
            stepNumber: solution.approximationUsed ? 7 : 7,
            step: 'Calculate pH',
            description: 'Convert pOH to pH',
            beforeExpression: `pOH = ${solution.pOH.toFixed(2)}`,
            operation: 'pH = 14 - pOH',
            afterExpression: `pH = ${solution.pH.toFixed(2)}`,
            reasoning: 'Use pH + pOH = 14 relationship',
            finalAnswer: true,
            interpretation: solution.interpretation,
            chemicalContext: 'Basic solution has pH > 7'
        });

        return steps;
    }

    generateBufferPHSteps(problem, solution) {
        const { acidConcentration, baseConcentration, pKa, acid, base } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify buffer components',
            description: 'Recognize the conjugate acid-base pair',
            expression: `${acid || 'HA'} / ${base || 'A⁻'} buffer system`,
            reasoning: 'Buffer consists of weak acid and its conjugate base',
            chemicalContext: 'Conjugate pairs differ by one proton (H⁺)',
            visualHint: 'Acid can donate H⁺, base can accept H⁺'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write Henderson-Hasselbalch equation',
            description: 'Set up the buffer pH formula',
            expression: `pH = pKa + log([A⁻]/[HA])`,
            reasoning: 'Henderson-Hasselbalch directly relates pH to concentration ratio',
            chemicalContext: 'This is derived from the Ka expression',
            algebraicRule: 'Logarithmic form of equilibrium expression'
        });

        steps.push({
            stepNumber: 3,
            step: 'Identify known values',
            description: 'List the given information',
            knownValues: {
                pKa: solution.pKa,
                '[HA]': acidConcentration,
                '[A⁻]': baseConcentration,
                ratio: solution.ratio
            },
            reasoning: 'Organize data before calculation',
            chemicalContext: 'pKa is characteristic of the weak acid'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate ratio',
            description: 'Find the concentration ratio',
            beforeExpression: `[A⁻]/[HA] = ${baseConcentration}/${acidConcentration}`,
            afterExpression: `Ratio = ${solution.ratio.toFixed(3)}`,
            reasoning: 'This ratio determines how far pH is from pKa',
            chemicalContext: 'When ratio = 1, pH = pKa (optimal buffering)'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate pH',
            description: 'Apply Henderson-Hasselbalch equation',
            beforeExpression: `pH = ${solution.pKa.toFixed(2)} + log(${solution.ratio.toFixed(3)})`,
            operation: `log(${solution.ratio.toFixed(3)}) = ${Math.log10(solution.ratio).toFixed(3)}`,
            afterExpression: `pH = ${solution.pH.toFixed(2)}`,
            reasoning: 'Add pKa and log of ratio',
            finalAnswer: true,
            interpretation: solution.interpretation,
            workingDetails: {
                pKa: solution.pKa.toFixed(2),
                logRatio: Math.log10(solution.ratio).toFixed(3),
                sum: solution.pH.toFixed(2)
            }
        });

        steps.push({
            stepNumber: 6,
            step: 'Evaluate buffer effectiveness',
            description: 'Check if buffer is in effective range',
            expression: `|pH - pKa| = |${solution.pH.toFixed(2)} - ${solution.pKa.toFixed(2)}| = ${Math.abs(solution.pH - solution.pKa).toFixed(2)}`,
            condition: solution.bufferEffective.effective ? 
                'Difference < 1, buffer is effective ✓' : 
                'Difference > 1, buffer effectiveness reduced ✗',
            reasoning: 'Buffers work best when pH is within ±1 unit of pKa',
            chemicalContext: 'Maximum buffer capacity occurs at pH = pKa'
        });

        return steps;
    }

    generateTitrationSteps(problem, solution) {
        const { acidConcentration, acidVolume, baseConcentration } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write neutralization equation',
            description: 'Set up the balanced reaction',
            expression: `HA + OH⁻ → A⁻ + H₂O`,
            reasoning: 'Acid-base neutralization produces salt and water',
            chemicalContext: 'Stoichiometry is 1:1 for monoprotic acid and monobasic base',
            visualHint: 'One molecule of acid reacts with one hydroxide ion'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate moles of acid',
            description: 'Find moles using concentration and volume',
            beforeExpression: `n_acid = M_acid × V_acid`,
            afterExpression: `n_acid = ${acidConcentration} × ${acidVolume} = ${(acidConcentration * acidVolume).toExponential(2)} mol`,
            reasoning: 'Moles = Molarity × Volume (in liters)',
            algebraicRule: 'n = M × V',
            chemicalContext: 'These moles must be neutralized at equivalence point'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply equivalence point condition',
            description: 'At equivalence: moles acid = moles base',
            expression: `n_acid = n_base`,
            reasoning: 'Complete neutralization means all acid has reacted with base',
            chemicalContext: 'This is the definition of the equivalence point',
            visualHint: 'No excess acid or base remains'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate volume of base needed',
            description: 'Solve for base volume at equivalence',
            beforeExpression: `n_base = M_base × V_base = n_acid`,
            operation: `V_base = n_acid / M_base`,
            afterExpression: `V_base = ${(acidConcentration * acidVolume).toExponential(2)} / ${baseConcentration} = ${solution.volumeAtEquivalence.toFixed(4)} L`,
            reasoning: 'Rearrange to solve for unknown volume',
            finalAnswer: true,
            workingDetails: {
                volumeML: (solution.volumeAtEquivalence * 1000).toFixed(2) + ' mL'
            }
        });

        steps.push({
            stepNumber: 5,
            step: 'Determine pH at equivalence',
            description: 'Calculate pH after complete neutralization',
            expression: `pH = ${solution.equivalencePH.toFixed(2)}`,
            reasoning: solution.interpretation,
            chemicalContext: 'pH at equivalence depends on strength of acid and base',
            additionalInfo: {
                strongStrong: 'pH = 7.00',
                weakAcidStrongBase: 'pH > 7 (conjugate base hydrolyzes)',
                strongAcidWeakBase: 'pH < 7 (conjugate acid hydrolyzes)'
            }
        });

        return steps;
    }

    generateSaltHydrolysisSteps(problem, solution) {
        const { concentration, cation, anion } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify salt components',
            description: 'Determine cation and anion sources',
            expression: `${cation || 'M⁺'} from ${solution.hydrolyzingIon === cation ? 'weak base' : 'strong base'}`,
            expression2: `${anion || 'A⁻'} from ${solution.hydrolyzingIon === anion ? 'weak acid' : 'strong acid'}`,
            reasoning: 'Identify which ion will react with water',
            chemicalContext: 'Only ions from weak acids/bases hydrolyze significantly'
        });

        steps.push({
            stepNumber: 2,
            step: 'Determine hydrolyzing species',
            description: 'Identify which ion undergoes hydrolysis',
            expression: solution.hydrolyzingIon ? `${solution.hydrolyzingIon} hydrolyzes` : 'No hydrolysis',
            reasoning: solution.hydrolysisType === 'None (neutral)' ? 
                'Ions from strong acids/bases do not hydrolyze' :
                `${solution.hydrolyzingIon} is from weak acid/base, so it reacts with water`,
            chemicalContext: 'Hydrolysis is reverse of original acid/base dissociation'
        });

        if (solution.hydrolysisType !== 'None (neutral)') {
            steps.push({
                stepNumber: 3,
                step: 'Write hydrolysis equation',
                description: 'Show the reaction with water',
                expression: solution.hydrolysisType.includes('Acidic') ?
                    `${cation} + H₂O ⇌ Base + H₃O⁺` :
                    `${anion} + H₂O ⇌ Acid + OH⁻`,
                reasoning: solution.hydrolysisType.includes('Acidic') ?
                    'Conjugate acid donates proton to water' :
                    'Conjugate base accepts proton from water',
                chemicalContext: 'Hydrolysis shifts pH from neutral'
            });

            steps.push({
                stepNumber: 4,
                step: 'Calculate Ka or Kb for hydrolysis',
                description: 'Find equilibrium constant for hydrolysis reaction',
                expression: solution.Ka_conjugate ? 
                    `Ka = Kw/Kb = ${this.constants.Kw.toExponential(2)}/${solution.Kb_base.toExponential(2)} = ${solution.Ka_conjugate.toExponential(2)}` :
                    `Kb = Kw/Ka = ${this.constants.Kw.toExponential(2)}/${solution.Ka_acid.toExponential(2)} = ${solution.Kb_conjugate.toExponential(2)}`,
                reasoning: 'Use Ka × Kb = Kw relationship for conjugate pairs',
                chemicalContext: 'Conjugate of weak acid/base has its own equilibrium constant'
            });

            steps.push({
                stepNumber: 5,
                step: 'Calculate [H⁺] or [OH⁻]',
                description: 'Find ion concentration from equilibrium',
                expression: solution.H_concentration ?
                    `[H⁺] = √(Ka × C) = ${solution.H_concentration.toExponential(2)} M` :
                    `[OH⁻] = √(Kb × C) = ${solution.OH_concentration.toExponential(2)} M`,
                reasoning: 'Use approximation formula for dilute solutions',
                algebraicRule: 'Weak acid/base approximation'
            });
        }

        steps.push({
            stepNumber: solution.hydrolysisType !== 'None (neutral)' ? 6 : 3,
            step: 'Calculate pH',
            description: 'Determine final pH of salt solution',
            expression: `pH = ${solution.pH.toFixed(2)}`,
            reasoning: solution.interpretation || 'Neutral pH from non-hydrolyzing salt',
            finalAnswer: true,
            interpretation: solution.hydrolysisType
        });

        return steps;
    }

    generateGenericAcidBaseSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Acid-base problem',
            description: 'Solve the given acid-base problem',
            expression: problem.cleanInput || 'Problem statement',
            reasoning: 'Apply appropriate acid-base chemistry principles',
            solution: solution
        }];
    }

    // Enhanced step explanation methods (similar to linear workbook)
    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationChem(step, problem),
                procedural: this.getProceduralExplanationChem(step),
                visual: this.getVisualExplanationChem(step, problem),
                mathematical: this.getMathematicalExplanationChem(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesChem(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyChem(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        return enhanced;
    }

    getConceptualExplanationChem(step, problem) {
        const conceptualMap = {
            'Given concentration': 'We start with a known concentration of ions in solution. This represents the amount of acidic or basic species present.',
            'Apply pH definition': 'pH is a logarithmic scale that makes it easier to work with the wide range of H⁺ concentrations found in solutions.',
            'Identify acid type': 'Strong acids completely break apart in water, while weak acids only partially dissociate. This fundamental difference affects how we calculate pH.',
            'Write equilibrium expression': 'Weak acids establish a dynamic equilibrium where forward and reverse reactions occur at equal rates.',
            'Set up ICE table': 'The ICE table tracks how concentrations change as the system reaches equilibrium, helping us organize complex information.',
            'Write Henderson-Hasselbalch equation': 'This equation elegantly relates buffer pH to the ratio of acid and conjugate base, making buffer calculations straightforward.'
        };

        return conceptualMap[step.step] || 'This step advances our understanding of the acid-base system.';
    }

    getProceduralExplanationChem(step) {
        if (step.operation) {
            return `1. Identify the given values
2. Apply the operation: ${step.operation}
3. Perform the calculation
4. Verify the result makes chemical sense`;
        }
        return 'Follow standard acid-base chemistry procedures for this type of calculation.';
    }

    getVisualExplanationChem(step, problem) {
        const visualMap = {
            'ph_calculations': 'Picture the pH scale from 0-14, where lower numbers mean more acidic (more H⁺) and higher numbers mean more basic (more OH⁻).',
            'weak_acid_base': 'Visualize molecules in solution: most remain as HA (undissociated), while a small fraction split into H⁺ and A⁻.',
            'buffer_solutions': 'Imagine a buffer as a chemical cushion: when acid is added, the conjugate base neutralizes it; when base is added, the acid neutralizes it.',
            'titration': 'Picture gradually adding base to acid: initially, excess acid; at equivalence, all neutralized; beyond, excess base.'
        };

        return visualMap[problem.type] || 'Visualize the molecular-level interactions in the solution.';
    }

    getMathematicalExplanationChem(step) {
        const mathRules = {
            'Apply pH definition': 'Logarithm: log(ab) = log(a) + log(b), log(a/b) = log(a) - log(b)',
            'Apply inverse pH formula': 'Inverse logarithm (antilog): if log(x) = y, then x = 10^y',
            'Solve quadratic equation': 'Quadratic formula: x = [-b ± √(b² - 4ac)]/(2a), choose positive root',
            'Henderson-Hasselbalch equation': 'Logarithmic relationship: pH = pKa + log([base]/[acid])'
        };

        return mathRules[step.step] || 'Apply standard mathematical operations for chemical calculations.';
    }

    identifyPrerequisitesChem(step, problemType) {
        const prerequisites = {
            'Apply pH definition': ['Understanding of logarithms', 'Concept of hydrogen ion concentration'],
            'Write equilibrium expression': ['Chemical equilibrium concepts', 'Le Chatelier\'s principle'],
            'Set up ICE table': ['Stoichiometry', 'Conservation of mass', 'Equilibrium concepts'],
            'Calculate pH': ['Logarithm calculations', 'Scientific notation'],
            'Henderson-Hasselbalch equation': ['Buffer concepts', 'Logarithms', 'Conjugate acid-base pairs']
        };

        return prerequisites[step.step] || ['Basic acid-base chemistry', 'Algebraic operations'];
    }

    identifyKeyVocabularyChem(step) {
        const vocabulary = {
            'Given concentration': ['concentration', 'molarity', 'hydrogen ion', 'H⁺'],
            'Apply pH definition': ['pH', 'logarithm', 'acidic', 'basic'],
            'Identify acid type': ['strong acid', 'weak acid', 'dissociation', 'complete ionization'],
            'Write equilibrium expression': ['equilibrium', 'Ka', 'dissociation constant', 'reversible'],
            'Set up ICE table': ['ICE table', 'initial', 'change', 'equilibrium', 'stoichiometry'],
            'Henderson-Hasselbalch equation': ['buffer', 'pKa', 'conjugate pair', 'ratio']
        };

        return vocabulary[step.step] || [];
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeChem(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionChem(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyChem(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeChem(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            chemicalReason: `This step is necessary to ${this.getChemicalPurpose(nextStep)}`,
            howItHelps: `This will allow us to ${this.getChemicalBenefit(nextStep)}`
        };
    }

    getChemicalPurpose(step) {
        const purposes = {
            'Calculate pH': 'convert concentration to the pH scale',
            'Write equilibrium expression': 'set up the mathematical relationship for equilibrium',
            'Set up ICE table': 'systematically track concentration changes',
            'Apply Henderson-Hasselbalch equation': 'directly calculate buffer pH from the ratio'
        };

        return purposes[step.step] || 'continue solving the problem';
    }

    getChemicalBenefit(step) {
        return 'make progress toward finding the final pH or concentration value';
    }

    explainStepProgressionChem(currentStep, nextStep) {
        return `After ${currentStep.step.toLowerCase()}, we have the necessary information to ${nextStep.description.toLowerCase()}`;
    }

    explainStepStrategyChem(nextStep) {
        return `The strategy for "${nextStep.step}" involves ${nextStep.description.toLowerCase()}`;
    }

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsChem(step, problemType),
                checkPoints: this.generateCheckPointsChem(step),
                warningFlags: this.identifyWarningFlagsChem(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionChem(step),
                expectedResult: this.describeExpectedResultChem(step),
                troubleshooting: this.generateTroubleshootingTipsChem(step)
            }
        };
    }

    generatePreventionTipsChem(step, problemType) {
        const tips = {
            'Calculate pH': [
                'Use log base 10, not natural log (ln)',
                'Don\'t forget the negative sign',
                'Check that pH is between 0 and 14'
            ],
            'Set up ICE table': [
                'Assign x correctly based on stoichiometry',
                'Remember initial concentrations for products are usually zero',
                'Keep track of significant figures'
            ],
            'Solve quadratic equation': [
                'Check discriminant is positive',
                'Choose the positive root',
                'Verify x is less than initial concentration'
            ]
        };

        return tips[step.step] || ['Double-check calculations', 'Verify units', 'Check reasonableness of answer'];
    }

    generateCheckPointsChem(step) {
        return [
            'Are the units correct?',
            'Does the answer make chemical sense?',
            'Is the pH in the expected range (0-14)?',
            'Have you used the correct number of significant figures?'
        ];
    }

    identifyWarningFlagsChem(step, problemType) {
        const warnings = {
            'ph_calculations': step.operation?.includes('log') ? 
                ['Make sure to use log₁₀, not ln', 'Remember the negative sign in pH = -log[H⁺]'] : [],
            'weak_acid_base': step.step === 'Check approximation validity' ? 
                ['If approximation fails, must use quadratic formula'] : [],
            'buffer_solutions': step.step === 'Calculate ratio' ? 
                ['Ratio must be [base]/[acid], not inverted'] : [],
            'titration': step.step === 'Determine pH at equivalence' ? 
                ['pH = 7 only for strong acid-strong base titrations'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestionChem(step) {
        const questions = {
            'Calculate pH': 'Did I use log₁₀ and include the negative sign?',
            'Set up ICE table': 'Are my initial, change, and equilibrium rows consistent?',
            'Apply Henderson-Hasselbalch equation': 'Is my ratio [base]/[acid] in the correct order?',
            'Determine [H⁺]': 'Is [H⁺] less than the initial concentration of acid?'
        };

        return questions[step.step] || 'Does this step make chemical and mathematical sense?';
    }

    describeExpectedResultChem(step) {
        const expectations = {
            'Calculate pH': 'pH should be between 0 and 14',
            'Determine [H⁺]': '[H⁺] should be a positive value less than initial concentration',
            'Apply approximation': 'The value of x should be less than 5% of C',
            'Calculate percent dissociation': 'Percent should be between 0 and 100%'
        };

        return expectations[step.step] || 'The result should be chemically reasonable';
    }

    generateTroubleshootingTipsChem(step) {
        return [
            'If pH > 14 or pH < 0, check your logarithm calculation',
            'If concentration is negative, you may have chosen wrong root of quadratic',
            'If approximation gives > 5% error, use quadratic formula instead',
            'Verify you\'re using correct Ka, Kb, or Kw value'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsChem(step, problem),
                subSteps: this.breakIntoSubStepsChem(step),
                hints: this.generateProgressiveHintsChem(step),
                practiceVariation: this.generatePracticeVariationChem(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessChem(step),
                decisionPoints: this.identifyDecisionPointsChem(step),
                alternativeApproaches: this.suggestAlternativeMethodsChem(step, problem)
            }
        }));
    }

    generateGuidingQuestionsChem(step, problem) {
        const questions = {
            'Given concentration': [
                'What type of species is this (acid, base, or salt)?',
                'Is this a strong or weak acid/base?',
                'What will happen when this dissolves in water?'
            ],
            'Write equilibrium expression': [
                'What species are present at equilibrium?',
                'How do we express the equilibrium constant?',
                'What are the products and reactants?'
            ],
            'Set up ICE table': [
                'What are the initial concentrations?',
                'How much will dissociate (call it x)?',
                'What are the equilibrium expressions in terms of x?'
            ],
            'Calculate pH': [
                'Do I have [H⁺] or [OH⁻]?',
                'Should I calculate pH or pOH first?',
                'Is my answer in the expected range?'
            ]
        };

        return questions[step.step] || ['What information do I have?', 'What am I trying to find?', 'Which formula or principle applies?'];
    }

    breakIntoSubStepsChem(step) {
        if (step.step === 'Calculate pH' && step.operation) {
            return [
                'Identify [H⁺] from previous step',
                'Take the logarithm base 10',
                'Apply the negative sign',
                'Round to appropriate significant figures',
                'State the final pH value'
            ];
        }

        if (step.step === 'Set up ICE table') {
            return [
                'Write species across the top',
                'Fill in Initial row with starting concentrations',
                'Fill in Change row with -x or +x based on stoichiometry',
                'Fill in Equilibrium row by adding Initial + Change',
                'Verify conservation of mass'
            ];
        }

        return ['Identify what is given', 'Determine what to find', 'Apply the appropriate formula', 'Perform calculations', 'Verify the result'];
    }

    generateProgressiveHintsChem(step) {
        return {
            level1: 'Think about what chemical principle applies here.',
            level2: 'Consider the relationship between the given information and what you need to find.',
            level3: 'Look at the equilibrium expression or definition that relates these quantities.',
            level4: step.operation ? `Try using: ${step.operation}` : 'Apply the formula for this type of calculation.'
        };
    }

    generatePracticeVariationChem(step, problem) {
        return {
            similarProblem: 'Try the same type of calculation with different numerical values',
            practiceHint: 'Start with strong acids/bases before attempting weak acids/bases',
            extension: 'Once comfortable, try buffer problems or titrations which combine multiple concepts'
        };
    }

    explainThinkingProcessChem(step) {
        return {
            observe: 'What chemical species and concentrations do I see?',
            recall: 'What chemistry principles relate to this situation?',
            plan: 'Which formula or approach should I use?',
            execute: 'How do I apply this approach correctly?',
            verify: 'Does my answer make chemical sense?'
        };
    }

    identifyDecisionPointsChem(step) {
        const decisions = {
            'Check approximation validity': [
                'Should I use the approximation or quadratic formula?',
                'Is the 5% rule satisfied?'
            ],
            'Write equilibrium expression': [
                'Which equilibrium constant do I need (Ka, Kb, or Kw)?',
                'Are products in the numerator?'
            ],
            'Determine pH at equivalence': [
                'Is this a strong-strong, weak-strong, or strong-weak titration?',
                'Will pH be 7, less than 7, or greater than 7?'
            ]
        };

        return decisions[step.step] || ['Which method is most efficient?', 'What formula applies here?'];
    }

    suggestAlternativeMethodsChem(step, problem) {
        const alternatives = {
            'weak_acid': [
                'Could use Henderson-Hasselbalch if treating as a buffer',
                'Could use exact Ka expression without approximation'
            ],
            'buffer_ph': [
                'Could solve using Ka expression directly',
                'Henderson-Hasselbalch is faster for this case'
            ],
            'titration_endpoint': [
                'Could calculate using stoichiometry',
                'Could determine graphically from titration curve'
            ]
        };

        return alternatives[problem.type] || ['The chosen method is most direct for this problem type'];
    }

    // GRAPH DATA GENERATION
    generateAcidBaseGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;

        switch(type) {
            case 'titration_curve':
                this.graphData = this.currentSolution.curvePoints;
                break;

            case 'weak_acid':
            case 'weak_base':
                this.graphData = this.generateEquilibriumGraph(this.currentSolution);
                break;

            case 'buffer_ph':
                this.graphData = this.generateBufferCapacityGraph(this.currentSolution);
                break;

            case 'polyprotic_acid':
                this.graphData = this.generateSpeciesDistributionGraph(this.currentSolution);
                break;
        }
    }

    generateEquilibriumGraph(solution) {
        return {
            type: 'equilibrium',
            pH: solution.pH,
            percentDissociation: solution.percentDissociation,
            concentrations: solution.equilibriumConcentrations
        };
    }

    generateBufferCapacityGraph(solution) {
        const pHRange = [];
        for (let pH = solution.pKa - 2; pH <= solution.pKa + 2; pH += 0.1) {
            pHRange.push({
                pH: pH,
                effectiveness: Math.abs(pH - solution.pKa) <= 1 ? 'effective' : 'poor'
            });
        }

        return {
            type: 'buffer_range',
            pKa: solution.pKa,
            effectiveRange: [solution.pKa - 1, solution.pKa + 1],
            pHRange: pHRange
        };
    }

    generateSpeciesDistributionGraph(solution) {
        return {
            type: 'species_distribution',
            pH: solution.pH,
            species: solution.equilibriumConcentrations || {}
        };
    }

    // WORKBOOK GENERATION
    generateAcidBaseWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSectionChem(),
            this.createSolutionSectionChem(),
            this.createAnalysisSectionChem(),
            this.createVerificationSectionChem(),
            this.createPedagogicalNotesSectionChem(),
            this.createAlternativeMethodsSectionChem()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Acid-Base Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const data = [
            ['Problem Type', this.acidBaseTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.acidBaseTypes[this.currentProblem.type]?.category || 'general']
        ];

        // Add relevant parameters
        const params = this.currentProblem.parameters;
        if (params.concentration) data.push(['Concentration', `${params.concentration} M`]);
        if (params.pH !== undefined) data.push(['pH', params.pH]);
        if (params.Ka) data.push(['Ka', params.Ka.toExponential(2)]);
        if (params.Kb) data.push(['Kb', params.Kb.toExponential(2)]);
        if (params.volume) data.push(['Volume', `${params.volume} L`]);

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: data
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Skip bridge steps in simple display
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Transition', step.explanation?.currentState || 'Connecting steps']);
                stepsData.push(['', '']);
                return;
            }

            // Main step
            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.chemicalContext) {
                stepsData.push(['Chemical Context', step.chemicalContext]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule/Formula', step.algebraicRule]);
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
            }

            if (step.finalAnswer) {
                stepsData.push(['✓ Final Answer', step.afterExpression || step.expression]);
                if (step.interpretation) {
                    stepsData.push(['Interpretation', step.interpretation]);
                }
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSectionChem() {
        const { type } = this.currentProblem;
        const category = this.acidBaseTypes[type]?.category;

        if (!category || !this.lessons) return null;

        // Find matching lesson
        let lessonKey = category;
        const lesson = this.lessons[lessonKey];

        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', lesson.concepts.join('; ')],
            ['', ''],
            ['Theory', lesson.theory]
        ];

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
                lessonData.push([name, formula]);
            }
        }

        return {
            title: 'Related Chemistry Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSectionChem() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        // Add primary result
        if (this.currentSolution.pH !== undefined) {
            solutionData.push(['pH', this.currentSolution.pH.toFixed(2)]);
            solutionData.push(['Interpretation', this.currentSolution.interpretation]);
        }

        if (this.currentSolution.H_concentration !== undefined) {
            solutionData.push(['[H⁺]', `${this.currentSolution.H_concentration.toExponential(2)} M`]);
        }

        if (this.currentSolution.OH_concentration !== undefined) {
            solutionData.push(['[OH⁻]', `${this.currentSolution.OH_concentration.toExponential(2)} M`]);
        }

        if (this.currentSolution.pOH !== undefined) {
            solutionData.push(['pOH', this.currentSolution.pOH.toFixed(2)]);
        }

        // Add equilibrium concentrations if available
        if (this.currentSolution.equilibriumConcentrations) {
            solutionData.push(['', '']);
            solutionData.push(['Equilibrium Concentrations', '']);
            for (const [species, conc] of Object.entries(this.currentSolution.equilibriumConcentrations)) {
                solutionData.push([species, typeof conc === 'number' ? conc.toExponential(2) + ' M' : conc]);
            }
        }

        // Add percent dissociation if available
        if (this.currentSolution.percentDissociation !== undefined) {
            solutionData.push(['', '']);
            solutionData.push(['Percent Dissociation', `${this.currentSolution.percentDissociation.toFixed(2)}%`]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSectionChem() {
        const analysisData = [
            ['Problem Type', this.acidBaseTypes[this.currentProblem.type]?.name || 'Unknown'],
            ['Solution Method', this.currentSolution.explanation || 'Standard approach'],
            ['Steps Required', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel]
        ];

        if (this.currentSolution.approximationUsed !== undefined) {
            analysisData.push(['Approximation Used', this.currentSolution.approximationUsed ? 'Yes' : 'No']);
            if (this.currentSolution.approximationValid !== undefined) {
                analysisData.push(['Approximation Valid', this.currentSolution.approximationValid ? 'Yes' : 'No']);
            }
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSectionChem() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [];
        const { type } = this.currentProblem;

        verificationData.push(['Verification Method', 'Result']);
        verificationData.push(['', '']);

        // Verify based on problem type
        switch (type) {
            case 'ph_from_concentration':
            case 'concentration_from_ph':
                if (this.currentSolution.verification) {
                    const v = this.currentSolution.verification;
                    verificationData.push(['Given Value', v.given]);
                    verificationData.push(['Calculated Value', v.calculated?.toExponential(2) || 'N/A']);
                    verificationData.push(['Difference', v.difference?.toExponential(2) || 'N/A']);
                    verificationData.push(['Valid', v.isValid ? 'Yes ✓' : 'No ✗']);
                }
                break;

            case 'weak_acid':
            case 'weak_base':
                // Verify equilibrium constant
                if (this.currentSolution.equilibriumConcentrations) {
                    const eq = this.currentSolution.equilibriumConcentrations;
                    verificationData.push(['Equilibrium Check', 'Substituting back into Ka/Kb expression']);
                    
                    if (type === 'weak_acid' && eq.H_plus && eq.A_minus && eq.HA) {
                        const Ka_check = (eq.H_plus * eq.A_minus) / eq.HA;
                        verificationData.push(['Calculated Ka', Ka_check.toExponential(2)]);
                        verificationData.push(['Given Ka', this.currentProblem.parameters.Ka.toExponential(2)]);
                        verificationData.push(['Match', Math.abs(Ka_check - this.currentProblem.parameters.Ka) < 1e-10 ? 'Yes ✓' : 'Close ≈']);
                    }
                }

                // Verify approximation if used
                if (this.currentSolution.approximationUsed && this.currentSolution.H_concentration) {
                    const percentError = (this.currentSolution.H_concentration / this.currentProblem.parameters.concentration) * 100;
                    verificationData.push(['', '']);
                    verificationData.push(['Approximation Check', '']);
                    verificationData.push(['x/C ratio', `${percentError.toFixed(2)}%`]);
                    verificationData.push(['Valid (< 5%)', percentError < 5 ? 'Yes ✓' : 'No ✗']);
                }
                break;

            case 'buffer_ph':
                // Verify Henderson-Hasselbalch
                if (this.currentSolution.pKa && this.currentSolution.ratio) {
                    const calculated_pH = this.currentSolution.pKa + Math.log10(this.currentSolution.ratio);
                    verificationData.push(['Henderson-Hasselbalch Check', '']);
                    verificationData.push(['Calculated pH', calculated_pH.toFixed(2)]);
                    verificationData.push(['Reported pH', this.currentSolution.pH.toFixed(2)]);
                    verificationData.push(['Match', Math.abs(calculated_pH - this.currentSolution.pH) < 0.01 ? 'Yes ✓' : 'Close ≈']);
                }
                break;

            default:
                verificationData.push(['Status', 'Solution meets chemical constraints']);
        }

        // Add general checks
        verificationData.push(['', '']);
        verificationData.push(['General Checks', '']);
        
        if (this.currentSolution.pH !== undefined) {
            verificationData.push(['pH Range (0-14)', 
                this.currentSolution.pH >= 0 && this.currentSolution.pH <= 14 ? 'Valid ✓' : 'Check needed ⚠']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', this.calculateVerificationConfidenceChem()]);
            verificationData.push(['Verification Notes', this.getVerificationNotesChem()]);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData,
            confidence: this.calculateVerificationConfidenceChem()
        };
    }

    calculateVerificationConfidenceChem() {
        if (!this.currentSolution) return 'Unknown';

        const { type } = this.currentProblem;

        // High confidence for direct calculations
        if (['ph_from_concentration', 'concentration_from_ph', 'strong_acid', 'strong_base'].includes(type)) {
            return 'High';
        }

        // Medium to high for equilibrium problems
        if (['weak_acid', 'weak_base'].includes(type)) {
            if (this.currentSolution.approximationUsed && this.currentSolution.approximationValid) {
                return 'High';
            }
            return 'Medium-High';
        }

        // High for buffer calculations
        if (type === 'buffer_ph') {
            return 'High';
        }

        return 'Medium';
    }

    getVerificationNotesChem() {
        const { type } = this.currentProblem;
        const notes = [];

        if (type.includes('weak')) {
            notes.push('Equilibrium calculation verified by substitution');
            if (this.currentSolution.approximationUsed) {
                notes.push('Approximation validity checked (5% rule)');
            }
        }

        if (type.includes('buffer')) {
            notes.push('Henderson-Hasselbalch equation applied');
            notes.push('Buffer effectiveness evaluated');
        }

        if (type.includes('titration')) {
            notes.push('Stoichiometry verified at equivalence point');
        }

        notes.push('pH value checked for physical reasonableness (0-14 range)');

        return notes.join('; ');
    }

    createPedagogicalNotesSectionChem() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const category = this.acidBaseTypes[type]?.category;
        const lesson = this.lessons[category];

        if (!lesson) return null;

        const notes = {
            objectives: lesson.concepts || [],
            keyConcepts: Object.keys(lesson.keyFormulas || {}) || [],
            prerequisites: ['General chemistry', 'Logarithms', 'Chemical equilibrium'],
            commonDifficulties: this.commonMistakes[category] ? 
                Object.values(this.commonMistakes[category]).flat() : [],
            extensions: lesson.applications || [],
            assessment: ['Verify understanding of equilibrium', 'Check pH calculation accuracy', 'Test concept application']
        };

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.slice(0, 5).join('; ')],
                ['Extension Ideas', notes.extensions.slice(0, 3).join('; ')],
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSectionChem() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        
        const alternativeDatabase = {
            weak_acid: {
                primaryMethod: 'ICE table with Ka expression',
                methods: [
                    {
                        name: 'Approximation Method',
                        description: '[H⁺] ≈ √(Ka × C) when Ka << C'
                    },
                    {
                        name: 'Exact Quadratic Solution',
                        description: 'Solve Ka = x²/(C-x) without approximation'
                    },
                    {
                        name: 'Iterative Method',
                        description: 'Start with approximation, refine by substitution'
                    }
                ],
                comparison: 'Approximation is fastest when valid; quadratic is exact but more complex'
            },
            buffer_ph: {
                primaryMethod: 'Henderson-Hasselbalch equation',
                methods: [
                    {
                        name: 'Henderson-Hasselbalch',
                        description: 'pH = pKa + log([A⁻]/[HA])'
                    },
                    {
                        name: 'Ka Expression',
                        description: 'Solve Ka = [H⁺][A⁻]/[HA] directly'
                    },
                    {
                        name: 'ICE Table Method',
                        description: 'Full equilibrium treatment from initial concentrations'
                    }
                ],
                comparison: 'Henderson-Hasselbalch is most efficient for buffers; Ka expression gives same result with more work'
            },
            titration_endpoint: {
                primaryMethod: 'Stoichiometric calculation',
                methods: [
                    {
                        name: 'Stoichiometry',
                        description: 'n_acid = n_base at equivalence point'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Locate equivalence point on titration curve'
                    },
                    {
                        name: 'pH Meter',
                        description: 'Experimental determination of endpoint'
                    }
                ],
                comparison: 'Calculation is precise; graphical shows visual relationship; experimental verifies theory'
            }
        };

        const alternatives = alternativeDatabase[type];

        if (!alternatives) {
            return {
                title: 'Alternative Solution Methods',
                type: 'alternatives',
                data: [
                    ['Primary Method', 'Standard acid-base approach'],
                    ['Note', 'Multiple methods may be applicable depending on context']
                ]
            };
        }

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''],
                ['Alternative Methods', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''],
                ['Method Comparison', alternatives.comparison]
            ]
        };
    }

    // Utility method for adaptive language (reused from linear workbook)
    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'dissociation': 'breaking apart',
                    'equilibrium': 'balance point',
                    'concentration': 'amount dissolved',
                    'logarithm': 'special math operation',
                    'conjugate': 'partner'
                }
            },
            intermediate: {
                replacements: {
                    'dissociation': 'dissociation',
                    'equilibrium': 'equilibrium',
                    'concentration': 'concentration',
                    'logarithm': 'logarithm',
                    'conjugate': 'conjugate'
                }
            },
            detailed: {
                replacements: {
                    'dissociation': 'dissociation (separation into ions)',
                    'equilibrium': 'dynamic equilibrium (forward and reverse rates equal)',
                    'concentration': 'molar concentration (moles per liter)',
                    'logarithm': 'logarithm (inverse of exponential function)',
                    'conjugate': 'conjugate pair (differ by H⁺)'
                }
            }
        };

        const levelAdaptation = adaptations[level.vocabulary] || adaptations.intermediate;
        let adaptedText = text;

        for (const [term, replacement] of Object.entries(levelAdaptation.replacements)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            adaptedText = adaptedText.replace(regex, replacement);
        }

        return adaptedText;
    }
}
