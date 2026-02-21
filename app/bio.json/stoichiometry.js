Looking at the organic chemistry workbook structure, I'll create a comprehensive stoichiometry workbook class following the same patterns.
// ========================================
// STOICHIOMETRY WORKBOOK CLASS
// ========================================

export class StoichiometryWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "stoichiometry";
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
        this.currentExperiment = null;

        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.includeExperiments = options.includeExperiments !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        this.adaptiveDifficulty = options.adaptiveDifficulty !== false;
        this.metacognitiveSupport = options.metacognitiveSupport !== false;
        this.contextualLearning = options.contextualLearning !== false;
        this.assessmentFeedback = options.assessmentFeedback !== false;

        this.learnerProfile = {
            currentLevel: 'intermediate',
            masteredTopics: [],
            strugglingTopics: [],
            preferredLearningStyle: 'visual',
            progressHistory: []
        };

        this.stoichiometrySymbols = this.initializeStoichiometrySymbols();
        this.setThemeColors();
        this.initializeStoichiometryTopics();
        this.initializeStoichiometryLessons();
        this.initializeStoichiometryExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        this.colors = {
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
            stepBg: '#e8eaf6',
            stepText: '#283593',
            borderColor: '#42a5f5',
            contentBg: '#f3f4ff',
            contentText: '#1a237e',
            diagramBg: '#fce4ec',
            moleBg: '#e8f5e9',
            stoichBg: '#e3f2fd',
            limitingBg: '#fff3e0',
            yieldBg: '#f3e5f5',
            solutionBg: '#e0f7fa',
            gasBg: '#fff8e1'
        };
    }

    initializeStoichiometrySymbols() {
        return {
            // Greek letters
            'delta': 'Δ',
            'Delta': 'Δ',
            'mu': 'μ',
            'rho': 'ρ',
            'theta': 'θ',
            'sigma': 'σ',

            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            'doubleArrow': '↔',

            // Math symbols
            'approximately': '≈',
            'degree': '°',
            'plusminus': '±',
            'times': '×',
            'divide': '÷',
            'subscript2': '₂',
            'subscript3': '₃',
            'subscript4': '₄',
            'superscript2': '²',
            'superscript3': '³',
            'superscriptplus': '⁺',
            'superscriptminus': '⁻',

            // Common molecules
            'H2': 'H₂',
            'O2': 'O₂',
            'N2': 'N₂',
            'CO2': 'CO₂',
            'H2O': 'H₂O',
            'NH3': 'NH₃',
            'H2SO4': 'H₂SO₄',
            'HCl': 'HCl',
            'NaOH': 'NaOH',
            'NaCl': 'NaCl',
            'CaCO3': 'CaCO₃',
            'CaO': 'CaO',
            'Fe2O3': 'Fe₂O₃',
            'SO2': 'SO₂',
            'SO3': 'SO₃',
            'NO2': 'NO₂',
            'CH4': 'CH₄',
            'C2H4': 'C₂H₄',
            'C6H12O6': 'C₆H₁₂O₆',
            'C3H8': 'C₃H₈',
            'HNO3': 'HNO₃',
            'H3PO4': 'H₃PO₄',
            'Al2O3': 'Al₂O₃',
            'MgO': 'MgO',
            'CuSO4': 'CuSO₄',
            'Na2CO3': 'Na₂CO₃',
            'Ca(OH)2': 'Ca(OH)₂',
            'Fe3O4': 'Fe₃O₄',
            'P4O10': 'P₄O₁₀',
            'KMnO4': 'KMnO₄',
            'K2Cr2O7': 'K₂Cr₂O₇',

            // Units
            'mol': 'mol',
            'gmol': 'g/mol',
            'molL': 'mol/L',
            'molarity': 'M',
            'kJmol': 'kJ/mol',
            'Lmol': 'L/mol',
            'Latm': 'L·atm',
            'atmLmolK': 'atm·L·mol⁻¹·K⁻¹',
            'Pa': 'Pa',
            'kPa': 'kPa',
            'atm': 'atm',
            'mmHg': 'mmHg',
            'Kelvin': 'K',

            // Constants
            'Avogadro': 'Nₐ = 6.022 × 10²³ mol⁻¹',
            'R_gas': 'R = 8.314 J·mol⁻¹·K⁻¹',
            'R_atm': 'R = 0.08206 L·atm·mol⁻¹·K⁻¹',
            'STP_V': '22.4 L/mol (STP)',
            'SATP_V': '24.8 L/mol (SATP)',

            // States of matter
            'solid': '(s)',
            'liquid': '(l)',
            'gas': '(g)',
            'aqueous': '(aq)',

            // Reaction conditions
            'heat': 'Δ',
            'catalyst': 'cat.',
            'pressure': 'P',
            'temperature': 'T',
            'volume': 'V',

            // Spectroscopy / analysis
            'ppm': 'ppm',
            'percent': '%',
            'yield': 'yield %'
        };
    }

    // ========================================
    // TOPIC INITIALIZATION
    // ========================================

    initializeStoichiometryTopics() {
        this.stoichiometryTopics = {
            mole_concept: {
                patterns: [
                    /mole concept/i,
                    /avogadro/i,
                    /molar mass|molecular weight/i,
                    /number of particles|number of atoms|number of molecules/i,
                    /formula mass|atomic mass/i,
                    /relative.*mass|empirical.*formula/i
                ],
                handler: this.handleMoleConcept.bind(this),
                name: 'The Mole Concept',
                category: 'stoichiometry_foundation',
                description: 'The mole as a counting unit; Avogadro\'s number; molar mass and conversion between mass, moles, and particles',
                difficulty: 'beginner',
                prerequisites: ['atomic_structure', 'periodic_table', 'chemical_formulas']
            },

            chemical_equations: {
                patterns: [
                    /chemical equation|balanced equation/i,
                    /balancing.*equation/i,
                    /stoichiometric.*coefficient/i,
                    /conservation.*mass|law.*conservation/i,
                    /mole ratio|molar ratio/i,
                    /reaction.*stoichiometry/i
                ],
                handler: this.handleChemicalEquations.bind(this),
                name: 'Chemical Equations and Mole Ratios',
                category: 'stoichiometry_foundation',
                description: 'Balancing chemical equations; interpreting coefficients as mole ratios; mass-to-mass calculations',
                difficulty: 'beginner',
                prerequisites: ['mole_concept', 'chemical_formulas', 'atomic_symbols']
            },

            limiting_reagent: {
                patterns: [
                    /limiting.*reagent|limiting.*reactant/i,
                    /excess.*reagent|excess.*reactant/i,
                    /theoretical.*yield/i,
                    /which.*reagent.*runs.*out/i,
                    /left.*over.*reactant/i
                ],
                handler: this.handleLimitingReagent.bind(this),
                name: 'Limiting Reagent and Theoretical Yield',
                category: 'stoichiometry_calculations',
                description: 'Identifying the limiting reagent; calculating theoretical yield; determining excess reagent',
                difficulty: 'intermediate',
                prerequisites: ['mole_concept', 'chemical_equations']
            },

            percentage_yield: {
                patterns: [
                    /percent.*yield|percentage.*yield/i,
                    /actual.*yield|experimental.*yield/i,
                    /theoretical.*yield/i,
                    /reaction.*efficiency/i,
                    /atom.*economy/i
                ],
                handler: this.handlePercentageYield.bind(this),
                name: 'Percentage Yield and Atom Economy',
                category: 'stoichiometry_calculations',
                description: 'Calculating percentage yield; understanding reasons for yield less than 100%; atom economy and green chemistry',
                difficulty: 'intermediate',
                prerequisites: ['limiting_reagent', 'chemical_equations']
            },

            solution_stoichiometry: {
                patterns: [
                    /solution.*stoichiometry/i,
                    /molarity|concentration/i,
                    /titration/i,
                    /dilution.*solution/i,
                    /standard.*solution/i,
                    /volumetric.*analysis/i,
                    /acid.*base.*titration/i
                ],
                handler: this.handleSolutionStoichiometry.bind(this),
                name: 'Solution Stoichiometry and Titration',
                category: 'stoichiometry_applications',
                description: 'Molarity and concentration; dilution; solution stoichiometry calculations; titration as analytical technique',
                difficulty: 'intermediate',
                prerequisites: ['mole_concept', 'chemical_equations', 'acids_bases']
            },

            gas_stoichiometry: {
                patterns: [
                    /gas.*stoichiometry/i,
                    /ideal.*gas.*law/i,
                    /PV.*=.*nRT/i,
                    /molar.*volume.*gas/i,
                    /STP|SATP|standard.*temperature.*pressure/i,
                    /dalton.*partial.*pressure/i,
                    /gas.*volume.*reaction/i
                ],
                handler: this.handleGasStoichiometry.bind(this),
                name: 'Gas Stoichiometry and Ideal Gas Law',
                category: 'stoichiometry_applications',
                description: 'Molar volume of gases; ideal gas law; stoichiometric calculations involving gases',
                difficulty: 'advanced',
                prerequisites: ['mole_concept', 'chemical_equations', 'gas_laws']
            }
        };
    }

    // ========================================
    // LESSON INITIALIZATION
    // ========================================

    initializeStoichiometryLessons() {
        this.lessons = {
            mole_concept: {
                title: "The Mole Concept: Counting Atoms and Molecules",
                concepts: [
                    "The mole (mol) is the SI unit for amount of substance; 1 mol = 6.022 × 10²³ particles (Avogadro's number)",
                    "Molar mass (M) is the mass of one mole of a substance in g/mol; numerically equal to relative atomic/molecular mass",
                    "Conversions: n = m/M (moles from mass); N = n × Nₐ (particles from moles)",
                    "Empirical formula gives the simplest whole-number ratio of atoms; molecular formula is a whole-number multiple",
                    "Percentage composition by mass = (mass of element / molar mass of compound) × 100%"
                ],
                theory: "The mole concept is the bridge between the microscopic world of atoms and molecules and the macroscopic world of grams and liters that chemists work with in the laboratory. Just as a 'dozen' means 12 of something, a 'mole' means 6.022 × 10²³ of something. This enormous number—Avogadro's constant—is needed because atoms are so incredibly small. One mole of carbon atoms (12.0 g) contains exactly 6.022 × 10²³ atoms. The mole allows chemists to count atoms by weighing, which is the fundamental insight behind all quantitative chemistry.",
                keyDefinitions: {
                    "Mole (mol)": "SI unit of amount of substance; 1 mol contains exactly 6.02214076 × 10²³ elementary entities (atoms, molecules, ions, etc.)",
                    "Avogadro's Constant (Nₐ)": "6.022 × 10²³ mol⁻¹; the number of particles in one mole of any substance",
                    "Molar Mass (M)": "Mass of one mole of a substance, in g/mol; equals the relative molecular/atomic mass in grams",
                    "Relative Atomic Mass (Ar)": "Average mass of an atom of an element relative to 1/12 the mass of ¹²C; dimensionless",
                    "Relative Molecular Mass (Mr)": "Sum of relative atomic masses of all atoms in a molecule; dimensionless",
                    "Empirical Formula": "Simplest whole-number ratio of atoms in a compound (e.g., CH₂O for glucose)",
                    "Molecular Formula": "Actual number of atoms of each element in one molecule; multiple of empirical formula",
                    "Percentage Composition": "Mass percentage of each element in a compound; used to determine empirical formula"
                },
                conversionDiagram: {
                    centerConcept: "MOLES (n)",
                    conversions: [
                        {from: "Mass (m, grams)", to: "Moles", formula: "n = m / M", arrow: "÷ M"},
                        {from: "Moles", to: "Mass (m, grams)", formula: "m = n × M", arrow: "× M"},
                        {from: "Number of particles (N)", to: "Moles", formula: "n = N / Nₐ", arrow: "÷ Nₐ"},
                        {from: "Moles", to: "Number of particles (N)", formula: "N = n × Nₐ", arrow: "× Nₐ"},
                        {from: "Volume of gas at STP (L)", to: "Moles", formula: "n = V / 22.4", arrow: "÷ 22.4 L/mol"},
                        {from: "Moles", to: "Volume of gas at STP (L)", formula: "V = n × 22.4", arrow: "× 22.4 L/mol"}
                    ]
                },
                workedExamples: [
                    {
                        title: "Example 1: Moles from mass",
                        problem: "Calculate the number of moles in 36.0 g of water (H₂O).",
                        solution: [
                            "Step 1: Calculate molar mass of H₂O",
                            "M(H₂O) = 2 × M(H) + M(O) = 2 × 1.0 + 16.0 = 18.0 g/mol",
                            "Step 2: Apply n = m/M",
                            "n = 36.0 g ÷ 18.0 g/mol = 2.00 mol",
                            "Answer: 2.00 mol of water"
                        ],
                        checkAnswer: "2 mol × 18 g/mol = 36 g ✓"
                    },
                    {
                        title: "Example 2: Number of particles from mass",
                        problem: "How many molecules are present in 44.0 g of CO₂?",
                        solution: [
                            "Step 1: Calculate molar mass of CO₂",
                            "M(CO₂) = 12.0 + 2 × 16.0 = 44.0 g/mol",
                            "Step 2: Calculate moles",
                            "n = 44.0 g ÷ 44.0 g/mol = 1.00 mol",
                            "Step 3: Convert to molecules",
                            "N = n × Nₐ = 1.00 × 6.022 × 10²³ = 6.022 × 10²³ molecules"
                        ],
                        checkAnswer: "Exactly 1 mol × Avogadro's number = 6.022 × 10²³ ✓"
                    },
                    {
                        title: "Example 3: Empirical formula from % composition",
                        problem: "A compound contains 40.0% C, 6.7% H, 53.3% O by mass. Find the empirical formula.",
                        solution: [
                            "Step 1: Assume 100 g sample → masses equal percentages",
                            "C: 40.0 g, H: 6.7 g, O: 53.3 g",
                            "Step 2: Convert to moles",
                            "n(C) = 40.0/12.0 = 3.33 mol",
                            "n(H) = 6.7/1.0 = 6.70 mol",
                            "n(O) = 53.3/16.0 = 3.33 mol",
                            "Step 3: Divide by smallest (3.33)",
                            "C: 3.33/3.33 = 1, H: 6.70/3.33 = 2.01 ≈ 2, O: 3.33/3.33 = 1",
                            "Empirical formula: CH₂O"
                        ],
                        checkAnswer: "Check % C: 12/(12+2+16) × 100 = 40.0% ✓"
                    },
                    {
                        title: "Example 4: Molecular formula from empirical formula",
                        problem: "A compound has empirical formula CH₂O and molar mass 180 g/mol. Find the molecular formula.",
                        solution: [
                            "Step 1: Calculate empirical formula mass",
                            "M(CH₂O) = 12 + 2 + 16 = 30 g/mol",
                            "Step 2: Find multiplier n",
                            "n = Molar mass / Empirical formula mass = 180/30 = 6",
                            "Step 3: Multiply empirical formula by n",
                            "Molecular formula: C₆H₁₂O₆ (glucose)"
                        ],
                        checkAnswer: "6 × 30 = 180 g/mol ✓ Glucose is indeed C₆H₁₂O₆"
                    }
                ],
                applications: [
                    "Pharmaceutical industry: calculating exact drug dosages requires precise mole calculations",
                    "Food chemistry: nutritional labeling (grams) must be converted to moles for biochemical analysis",
                    "Materials science: synthesis of materials with exact stoichiometric compositions",
                    "Environmental monitoring: measuring pollutant concentrations in parts per million (ppm)"
                ]
            },

            chemical_equations: {
                title: "Chemical Equations: Balancing and Mole Ratios",
                concepts: [
                    "Balanced equations obey the law of conservation of mass: atoms are neither created nor destroyed",
                    "Stoichiometric coefficients represent mole ratios of reactants and products",
                    "Mass-to-mass stoichiometry: mass A → moles A → moles B (via ratio) → mass B",
                    "State symbols (s), (l), (g), (aq) provide additional information about reaction conditions"
                ],
                theory: "A balanced chemical equation is the quantitative language of chemistry. The coefficients in a balanced equation are not just numbers—they represent exact mole ratios that allow chemists to calculate precisely how much of each reactant is needed and how much product can be formed. Balancing equations is an application of the Law of Conservation of Mass: in any chemical reaction, matter is neither created nor destroyed, only rearranged. The four-step stoichiometry pathway (mass → moles → moles → mass) using the mole ratio from the balanced equation is the most powerful calculation tool in quantitative chemistry.",
                keyDefinitions: {
                    "Balanced Chemical Equation": "Equation where number of atoms of each element is equal on both sides; satisfies conservation of mass",
                    "Stoichiometric Coefficient": "Number written before a formula in a chemical equation; represents moles in the ratio",
                    "Mole Ratio": "Ratio of moles of one substance to moles of another from coefficients of balanced equation",
                    "Law of Conservation of Mass": "Mass of reactants equals mass of products; atoms are conserved in chemical reactions",
                    "Stoichiometry": "Branch of chemistry dealing with quantitative relationships in chemical reactions",
                    "Reactants": "Substances consumed in a chemical reaction (left side of equation)",
                    "Products": "Substances formed in a chemical reaction (right side of equation)",
                    "State Symbols": "(s) = solid, (l) = liquid, (g) = gas, (aq) = dissolved in water"
                },
                balancingMethods: {
                    inspection: {
                        description: "Trial and error; adjust coefficients systematically",
                        steps: [
                            "1. Write unbalanced equation with correct formulas",
                            "2. Count atoms of each element on each side",
                            "3. Adjust coefficients (not subscripts!) to balance",
                            "4. Balance elements that appear in fewest formulas first",
                            "5. Balance H and O last",
                            "6. Check all atoms are balanced; reduce coefficients to lowest whole numbers"
                        ],
                        rules: [
                            "Never change subscripts in formulas to balance (changes the compound)",
                            "Only change coefficients (numbers in front of formulas)",
                            "Coefficients must be positive integers (or fractions, then multiply through)"
                        ]
                    },
                    algebraicMethod: {
                        description: "Assign variables to coefficients; set up and solve simultaneous equations",
                        useCase: "Useful for complex equations where inspection is difficult"
                    },
                    halfEquationMethod: {
                        description: "Balance oxidation and reduction half-equations separately; combine",
                        useCase: "Redox reactions; ensures charge and mass are both balanced"
                    }
                },
                workedExamples: [
                    {
                        title: "Example 1: Balancing by inspection",
                        problem: "Balance: Fe + O₂ → Fe₂O₃",
                        solution: [
                            "Step 1: Count atoms: Fe: 1|2, O: 2|3 — unbalanced",
                            "Step 2: Balance Fe: 4Fe + O₂ → 2Fe₂O₃ (4 Fe each side)",
                            "Step 3: Balance O: 4Fe + 3O₂ → 2Fe₂O₃ (6 O each side)",
                            "Balanced equation: 4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)",
                            "Check: Fe: 4|4 ✓, O: 6|6 ✓"
                        ]
                    },
                    {
                        title: "Example 2: Mass-to-mass stoichiometry",
                        problem: "How many grams of CO₂ are produced when 24.0 g of carbon burns completely in O₂? C + O₂ → CO₂",
                        solution: [
                            "Step 1: Balance equation: C + O₂ → CO₂ (already balanced)",
                            "Step 2: Mole ratio: 1 mol C : 1 mol CO₂",
                            "Step 3: Convert mass C to moles: n(C) = 24.0 g ÷ 12.0 g/mol = 2.00 mol C",
                            "Step 4: Apply mole ratio: n(CO₂) = 2.00 mol × (1 mol CO₂/1 mol C) = 2.00 mol CO₂",
                            "Step 5: Convert moles CO₂ to mass: m(CO₂) = 2.00 mol × 44.0 g/mol = 88.0 g"
                        ],
                        checkAnswer: "Conservation check: 24.0 g C + 64.0 g O₂ = 88.0 g CO₂ ✓"
                    },
                    {
                        title: "Example 3: Complex mass-to-mass",
                        problem: "What mass of aluminum oxide forms when 54.0 g of Al reacts with excess O₂? 4Al + 3O₂ → 2Al₂O₃",
                        solution: [
                            "Step 1: Equation is balanced (4:3:2 ratio)",
                            "Step 2: Mole ratio Al : Al₂O₃ = 4 : 2 = 2 : 1",
                            "Step 3: n(Al) = 54.0 g ÷ 27.0 g/mol = 2.00 mol Al",
                            "Step 4: n(Al₂O₃) = 2.00 mol × (2 mol Al₂O₃ / 4 mol Al) = 1.00 mol Al₂O₃",
                            "Step 5: m(Al₂O₃) = 1.00 mol × 102.0 g/mol = 102.0 g"
                        ],
                        checkAnswer: "2 mol Al (54g) + 1.5 mol O₂ (48g) = 102g Al₂O₃ ✓ (mass conserved)"
                    }
                ],
                typesOfReactions: {
                    synthesis: "A + B → AB (combination); e.g., 2Mg + O₂ → 2MgO",
                    decomposition: "AB → A + B; e.g., 2H₂O₂ → 2H₂O + O₂",
                    singleReplacement: "A + BC → AC + B; e.g., Zn + CuSO₄ → ZnSO₄ + Cu",
                    doubleReplacement: "AB + CD → AD + CB; e.g., AgNO₃ + NaCl → AgCl↓ + NaNO₃",
                    combustion: "Fuel + O₂ → CO₂ + H₂O (complete); e.g., CH₄ + 2O₂ → CO₂ + 2H₂O",
                    neutralization: "Acid + Base → Salt + Water; e.g., HCl + NaOH → NaCl + H₂O",
                    redox: "Involves transfer of electrons; changes in oxidation state"
                }
            },

            limiting_reagent: {
                title: "Limiting Reagent and Theoretical Yield",
                concepts: [
                    "The limiting reagent is the reactant that runs out first and limits the amount of product formed",
                    "The excess reagent is the reactant present in more than the stoichiometric amount; some remains unreacted",
                    "Theoretical yield is the maximum mass of product calculated assuming all limiting reagent reacts",
                    "To find limiting reagent: convert all reactant masses to moles of PRODUCT; the reactant giving LEAST product is the limiting reagent"
                ],
                theory: "In real chemical reactions, reactants are rarely mixed in exactly stoichiometric ratios. The limiting reagent concept explains why reactions stop producing product even when some reactants remain. An analogy: to make sandwiches you need 2 slices of bread and 1 slice of cheese. If you have 10 slices of bread but only 3 slices of cheese, you can make only 3 sandwiches—the cheese is the limiting reagent. The bread is in excess. In chemistry, the limiting reagent determines the theoretical yield (maximum possible product), while the excess reagent is partially consumed and partially left over.",
                keyDefinitions: {
                    "Limiting Reagent": "Reactant that is completely consumed first in a reaction; determines maximum possible yield",
                    "Excess Reagent": "Reactant present in greater than stoichiometric amount; some remains unreacted after reaction is complete",
                    "Theoretical Yield": "Maximum mass of product that can be obtained, calculated from the limiting reagent",
                    "Stoichiometric Ratio": "Ratio of reactants in a reaction as given by the balanced equation coefficients",
                    "Mole Comparison Method": "Method of finding limiting reagent by converting all reactants to moles of product and identifying the minimum"
                },
                identificationMethods: {
                    methodA: {
                        name: "Moles of product method (recommended)",
                        steps: [
                            "1. Calculate moles of each reactant from given masses",
                            "2. For EACH reactant, calculate how many moles of product it could produce (using mole ratio)",
                            "3. The reactant producing the LEAST product is the limiting reagent",
                            "4. Use the limiting reagent's moles to calculate theoretical yield"
                        ]
                    },
                    methodB: {
                        name: "Mole ratio comparison method",
                        steps: [
                            "1. Calculate moles of each reactant",
                            "2. Calculate the required ratio from the balanced equation",
                            "3. Calculate the actual ratio from the given amounts",
                            "4. Compare: whichever reactant is 'deficient' relative to the required ratio is the limiting reagent"
                        ]
                    }
                },
                workedExamples: [
                    {
                        title: "Example 1: Basic limiting reagent",
                        problem: "2H₂ + O₂ → 2H₂O. If 4.0 g of H₂ and 32.0 g of O₂ are mixed, identify the limiting reagent and calculate the theoretical yield of water.",
                        solution: [
                            "Step 1: Calculate moles of each reactant",
                            "n(H₂) = 4.0 g ÷ 2.0 g/mol = 2.00 mol H₂",
                            "n(O₂) = 32.0 g ÷ 32.0 g/mol = 1.00 mol O₂",
                            "",
                            "Step 2: Calculate moles of H₂O each could produce",
                            "From H₂: 2.00 mol H₂ × (2 mol H₂O / 2 mol H₂) = 2.00 mol H₂O",
                            "From O₂: 1.00 mol O₂ × (2 mol H₂O / 1 mol O₂) = 2.00 mol H₂O",
                            "",
                            "Step 3: Both give same moles of product → reactants are in exact stoichiometric ratio!",
                            "Neither is in excess; both are limiting equivalently.",
                            "",
                            "Step 4: Theoretical yield",
                            "m(H₂O) = 2.00 mol × 18.0 g/mol = 36.0 g"
                        ],
                        insight: "This is a stoichiometric mixture — a useful boundary case to understand"
                    },
                    {
                        title: "Example 2: Clear limiting reagent case",
                        problem: "N₂ + 3H₂ → 2NH₃. Mix 28.0 g N₂ with 9.0 g H₂. Find the limiting reagent and theoretical yield of NH₃.",
                        solution: [
                            "Step 1: Moles of each reactant",
                            "n(N₂) = 28.0 g ÷ 28.0 g/mol = 1.00 mol N₂",
                            "n(H₂) = 9.0 g ÷ 2.0 g/mol = 4.50 mol H₂",
                            "",
                            "Step 2: Moles of NH₃ each could produce",
                            "From N₂: 1.00 mol × (2 mol NH₃ / 1 mol N₂) = 2.00 mol NH₃",
                            "From H₂: 4.50 mol × (2 mol NH₃ / 3 mol H₂) = 3.00 mol NH₃",
                            "",
                            "Step 3: N₂ gives LESS product (2.00 < 3.00) → N₂ is the limiting reagent",
                            "",
                            "Step 4: Theoretical yield (from N₂, limiting reagent)",
                            "m(NH₃) = 2.00 mol × 17.0 g/mol = 34.0 g",
                            "",
                            "Step 5: Calculate excess H₂",
                            "H₂ consumed = 1.00 mol N₂ × 3 mol H₂/1 mol N₂ = 3.00 mol H₂",
                            "H₂ excess = 4.50 − 3.00 = 1.50 mol = 1.50 × 2.0 = 3.0 g H₂ remaining"
                        ],
                        checkAnswer: "28 g N₂ + (4.5−1.5)×2 g H₂ = 28 + 6 = 34 g NH₃ ✓"
                    },
                    {
                        title: "Example 3: Industrial context",
                        problem: "In the Haber process, a reactor contains 1000 kg N₂ and 200 kg H₂. N₂ + 3H₂ → 2NH₃. Which is limiting?",
                        solution: [
                            "n(N₂) = 1,000,000 g ÷ 28.0 g/mol = 35,714 mol N₂",
                            "n(H₂) = 200,000 g ÷ 2.0 g/mol = 100,000 mol H₂",
                            "Required ratio N₂:H₂ = 1:3",
                            "Actual N₂:H₂ = 35,714 : 100,000 = 1 : 2.80",
                            "Required H₂ for all N₂ = 35,714 × 3 = 107,142 mol, but only 100,000 available",
                            "→ H₂ is the limiting reagent",
                            "Theoretical NH₃ = 100,000 mol H₂ × (2/3) = 66,667 mol = 1,133 kg NH₃"
                        ]
                    }
                ]
            },

            percentage_yield: {
                title: "Percentage Yield and Atom Economy",
                concepts: [
                    "Percentage yield = (actual yield / theoretical yield) × 100%; always ≤ 100%",
                    "Actual yield < theoretical yield due to: incomplete reaction, side reactions, loss during purification, reversible reaction",
                    "Atom economy = (molar mass of desired product / sum of molar masses of all products) × 100%",
                    "High atom economy reduces waste; essential principle of green chemistry"
                ],
                theory: "Even when the limiting reagent is known and the theoretical yield is calculated, the actual yield obtained in the laboratory is almost always less than the theoretical maximum. This gap between theory and practice exists because reactions may not go to completion, side reactions produce unwanted byproducts, some product is lost during workup and purification, and some reactions are reversible. Percentage yield is a measure of how efficiently a reaction proceeds in practice. Separately, atom economy (introduced by Barry Trost in 1991 as a green chemistry metric) measures how much of the reactant atoms end up in the desired product—reactions with high atom economy produce less waste even at 100% yield.",
                keyDefinitions: {
                    "Percentage Yield": "Ratio of actual (experimental) yield to theoretical yield, expressed as percentage",
                    "Actual Yield": "Mass of desired product actually obtained in an experiment",
                    "Theoretical Yield": "Maximum mass of product calculated from the limiting reagent assuming complete reaction",
                    "Atom Economy": "Percentage of total atomic mass of reactants that ends up in the desired product; green chemistry metric",
                    "Side Reaction": "Competing reaction that consumes reactants but forms unwanted products",
                    "Incomplete Reaction": "Reaction that does not reach 100% conversion; some limiting reagent remains",
                    "Green Chemistry": "Design of chemical processes and products that minimize hazardous substances and waste"
                },
                formulas: {
                    percentageYield: "% yield = (actual yield / theoretical yield) × 100%",
                    atomEconomy: "Atom economy = [M(desired product) / ΣM(all products)] × 100%",
                    theoreticalYield: "Calculated from balanced equation and limiting reagent",
                    massBalance: "% yield can also be expressed: (actual moles / theoretical moles) × 100%"
                },
                reasonsForLowYield: [
                    {reason: "Reversible reaction", explanation: "Equilibrium is established before complete conversion; e.g., esterification Keq ≈ 4"},
                    {reason: "Side reactions", explanation: "Reactants consumed in competing pathways; especially common in organic synthesis"},
                    {reason: "Purification losses", explanation: "Filtration, extraction, distillation, recrystallization all result in some product loss"},
                    {reason: "Volatile product", explanation: "Low-boiling products evaporate; gases escape before collection"},
                    {reason: "Incomplete reaction", explanation: "Reaction not given enough time or energy to reach completion"},
                    {reason: "Catalyst deactivation", explanation: "Catalyst efficiency decreases; reaction slows before completion"},
                    {reason: "Measurement errors", explanation: "Weighing, volume measurement, transfer losses"}
                ],
                atomEconomyExamples: [
                    {
                        reaction: "Synthesis of ethanol: C₂H₄ + H₂O → C₂H₅OH",
                        calculation: "M(desired) = 46.0; M(all products) = 46.0",
                        atomEconomy: "46.0/46.0 × 100 = 100%",
                        comment: "Only one product; all atoms in desired product — excellent green chemistry"
                    },
                    {
                        reaction: "Synthesis of Cl₂: MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O",
                        calculation: "M(Cl₂) = 71.0; M(all products) = 126.0 + 71.0 + 36.0 = 233.0",
                        atomEconomy: "71.0/233.0 × 100 = 30.5%",
                        comment: "Only 30.5% of atoms in desired product; MnCl₂ and H₂O are waste"
                    },
                    {
                        reaction: "Cracking of C₁₂H₂₆: C₁₂H₂₆ → C₈H₁₈ + C₄H₈ (target: C₈H₁₈)",
                        calculation: "M(octane) = 114.0; M(all products) = 114.0 + 56.0 = 170.0",
                        atomEconomy: "114.0/170.0 × 100 = 67.1%",
                        comment: "Butene byproduct reduces atom economy; but butene also has value"
                    }
                ],
                workedExamples: [
                    {
                        title: "Example 1: Calculating percentage yield",
                        problem: "In the reaction CaCO₃ → CaO + CO₂, 10.0 g of CaCO₃ is heated and 4.80 g of CaO is obtained. Calculate the percentage yield.",
                        solution: [
                            "Step 1: Calculate theoretical yield of CaO",
                            "n(CaCO₃) = 10.0 g ÷ 100.0 g/mol = 0.100 mol",
                            "Mole ratio CaCO₃ : CaO = 1 : 1",
                            "n(CaO) theoretical = 0.100 mol",
                            "m(CaO) theoretical = 0.100 mol × 56.0 g/mol = 5.60 g",
                            "",
                            "Step 2: Calculate % yield",
                            "% yield = (4.80 g / 5.60 g) × 100% = 85.7%"
                        ],
                        insight: "The 14.3% loss could be due to incomplete decomposition, CaO remaining as carbonate, or transfer losses"
                    },
                    {
                        title: "Example 2: Finding actual yield from % yield",
                        problem: "The reaction 2SO₂ + O₂ → 2SO₃ produces SO₃ at 75.0% yield. Starting with 64.0 g SO₂ and excess O₂, what mass of SO₃ is obtained?",
                        solution: [
                            "Step 1: Theoretical yield",
                            "n(SO₂) = 64.0 g ÷ 64.0 g/mol = 1.00 mol SO₂",
                            "n(SO₃) theoretical = 1.00 mol × (2/2) = 1.00 mol SO₃",
                            "m(SO₃) theoretical = 1.00 × 80.0 = 80.0 g",
                            "",
                            "Step 2: Actual yield",
                            "Actual yield = theoretical yield × (% yield / 100)",
                            "Actual yield = 80.0 g × 0.750 = 60.0 g SO₃"
                        ]
                    }
                ]
            },

            solution_stoichiometry: {
                title: "Solution Stoichiometry and Titration",
                concepts: [
                    "Molarity (M or c) = moles of solute / volume of solution in litres; units: mol/L or mol dm⁻³",
                    "n = c × V (moles = molarity × volume in litres)",
                    "Dilution: c₁V₁ = c₂V₂ (moles of solute conserved on dilution)",
                    "In titration: at equivalence point, moles acid × acid-to-base ratio = moles base",
                    "Primary standard: substance used to make a standard solution of accurately known concentration"
                ],
                theory: "Solution stoichiometry extends the mole concept to reactions occurring in solution. Chemists frequently need to know the concentration of solutions, typically expressed as molarity (mol/L). The most powerful application of solution stoichiometry is titration—a technique for determining the unknown concentration of a solution by reacting it with a solution of precisely known concentration (a standard solution). Titration is used in analytical chemistry, pharmaceuticals, food testing, environmental monitoring, and clinical diagnosis. Understanding dilution (c₁V₁ = c₂V₂) and the equivalence point is essential for quantitative solution chemistry.",
                keyDefinitions: {
                    "Molarity (M or c)": "Concentration expressed as moles of solute per litre of solution (mol/L or mol dm⁻³)",
                    "Standard Solution": "Solution with accurately known concentration, prepared from a primary standard",
                    "Primary Standard": "Substance that can be weighed accurately and used directly to make a standard solution (e.g., anhydrous Na₂CO₃, oxalic acid, KHP)",
                    "Titration": "Technique for determining concentration by reacting measured volumes of two solutions until stoichiometric quantities react",
                    "Burette": "Calibrated glass tube (usually 50 mL) used to deliver measured volumes of titrant",
                    "Equivalence Point": "Point in titration where stoichiometric quantities of titrant and analyte have reacted (theoretical endpoint)",
                    "End Point": "Observed point in titration where indicator changes color; ideally coincides with equivalence point",
                    "Indicator": "Substance that changes color at a specific pH range to signal the end point",
                    "Analyte": "Substance being analyzed (in the flask/conical flask)",
                    "Titrant": "Solution in the burette of known concentration added from burette"
                },
                concentrationConversions: {
                    molarityToMass: "m = c × V × M (mass of solute from molarity, volume, molar mass)",
                    massToMolarity: "c = m / (V × M) = n / V",
                    dilution: "c₁V₁ = c₂V₂ (moles conserved; volume increases, concentration decreases)",
                    ppm: "1 ppm = 1 mg/L (for aqueous solutions; 1 ppm ≈ 1 μmol/L for M = 1 g/mol)"
                },
                titrationProcedure: [
                    "1. Rinse burette with titrant solution; fill to zero (or any reading), record initial volume",
                    "2. Pipette exact volume of analyte into conical flask; add indicator (2-3 drops)",
                    "3. Record initial burette reading",
                    "4. Add titrant slowly, swirling flask continuously",
                    "5. As end point approaches, color change takes longer to fade; slow addition (dropwise)",
                    "6. Stop at first permanent color change (end point); record final burette reading",
                    "7. Titre = final − initial burette readings",
                    "8. Repeat for concordant titres (within ±0.10 mL); average concordant titres",
                    "9. Calculate concentration using c(titrant)×V(titrant) = c(analyte)×V(analyte) (for 1:1 ratio)"
                ],
                indicators: [
                    {name: "Phenolphthalein", range: "pH 8.2−10.0", color: "Colorless → pink/magenta", useCase: "Strong acid–strong base; strong acid–weak base"},
                    {name: "Methyl orange", range: "pH 3.1−4.4", color: "Red → orange/yellow", useCase: "Strong acid–weak base (e.g., HCl vs Na₂CO₃)"},
                    {name: "Litmus", range: "pH 5−8", color: "Red → blue", useCase: "Rough indicator only; not suitable for precise titrations"},
                    {name: "Bromothymol blue", range: "pH 6.0−7.6", color: "Yellow → blue", useCase: "Near-neutral titrations"}
                ],
                workedExamples: [
                    {
                        title: "Example 1: Preparing a standard solution",
                        problem: "Describe how to prepare 250.0 mL of 0.100 mol/L Na₂CO₃ solution.",
                        solution: [
                            "Step 1: Calculate mass of Na₂CO₃ required",
                            "n(Na₂CO₃) = c × V = 0.100 mol/L × 0.2500 L = 0.0250 mol",
                            "M(Na₂CO₃) = 2(23.0) + 12.0 + 3(16.0) = 106.0 g/mol",
                            "m(Na₂CO₃) = 0.0250 mol × 106.0 g/mol = 2.65 g",
                            "",
                            "Step 2: Procedure",
                            "Weigh 2.65 g of anhydrous Na₂CO₃ accurately into a beaker",
                            "Dissolve in ~100 mL of deionised water; stir until dissolved",
                            "Transfer to 250.0 mL volumetric flask; rinse beaker 3× into flask",
                            "Make up to the 250.0 mL mark with deionised water (add dropwise near the mark)",
                            "Stopper and invert 10× to mix thoroughly; label with concentration and date"
                        ]
                    },
                    {
                        title: "Example 2: Acid-base titration calculation",
                        problem: "25.00 mL of NaOH solution is titrated with 0.100 mol/L HCl. Average titre = 22.50 mL. Calculate concentration of NaOH. Equation: HCl + NaOH → NaCl + H₂O",
                        solution: [
                            "Step 1: Moles of HCl used",
                            "n(HCl) = 0.100 mol/L × 0.02250 L = 2.250 × 10⁻³ mol",
                            "",
                            "Step 2: Moles of NaOH (mole ratio 1:1)",
                            "n(NaOH) = n(HCl) = 2.250 × 10⁻³ mol",
                            "",
                            "Step 3: Concentration of NaOH",
                            "c(NaOH) = n/V = 2.250 × 10⁻³ mol / 0.02500 L = 0.0900 mol/L"
                        ]
                    },
                    {
                        title: "Example 3: Dilution calculation",
                        problem: "What volume of 6.00 mol/L HCl is needed to prepare 500.0 mL of 0.150 mol/L HCl?",
                        solution: [
                            "Using c₁V₁ = c₂V₂",
                            "6.00 mol/L × V₁ = 0.150 mol/L × 0.5000 L",
                            "V₁ = (0.150 × 0.5000) / 6.00 = 0.01250 L = 12.5 mL",
                            "Procedure: Measure 12.5 mL of 6 mol/L HCl, add to ~400 mL water in 500 mL volumetric flask, make up to 500.0 mL mark (always add acid to water, not water to acid)"
                        ]
                    }
                ]
            },

            gas_stoichiometry: {
                title: "Gas Stoichiometry and the Ideal Gas Law",
                concepts: [
                    "Ideal Gas Law: PV = nRT (P in Pa or atm, V in m³ or L, T in Kelvin, R = 8.314 J/mol/K or 0.08206 L·atm/mol/K)",
                    "At STP (0°C, 100 kPa): molar volume = 22.4 L/mol; at SATP (25°C, 100 kPa): 24.8 L/mol",
                    "Avogadro's Law: equal volumes of gases at same T and P contain equal numbers of molecules",
                    "For gas stoichiometry: volume ratios equal mole ratios at constant T and P",
                    "Dalton's Law: total pressure = sum of partial pressures of all gases in mixture"
                ],
                theory: "Gases have the unique property that equal volumes at the same temperature and pressure contain equal numbers of molecules (Avogadro's Law). This means that for reactions involving gases, we can use volume ratios directly as mole ratios, which enormously simplifies stoichiometric calculations. The Ideal Gas Law (PV = nRT) provides the quantitative relationship between pressure, volume, temperature, and amount of a gas, allowing conversion between any of these variables. While real gases deviate slightly from ideal behavior (especially at high pressure and low temperature), the ideal gas law is an excellent approximation for most laboratory and industrial conditions.",
                keyDefinitions: {
                    "Ideal Gas": "Hypothetical gas whose molecules have no volume and no intermolecular forces; obeys PV = nRT exactly",
                    "Ideal Gas Law": "PV = nRT; relates pressure, volume, temperature, and amount of gas",
                    "STP (Standard Temperature and Pressure)": "0°C (273.15 K) and 100 kPa (IUPAC definition); molar volume = 22.4 L/mol",
                    "SATP (Standard Ambient T and P)": "25°C (298.15 K) and 100 kPa; molar volume = 24.8 L/mol",
                    "Avogadro's Law": "At constant T and P, equal volumes of all gases contain equal numbers of molecules",
                    "Dalton's Law of Partial Pressures": "P_total = P₁ + P₂ + ... + Pₙ; each gas exerts pressure independently",
                    "Partial Pressure": "Pressure that one component gas would exert if it alone occupied the same volume at same temperature",
                    "Mole Fraction": "χᵢ = nᵢ / n_total; Pᵢ = χᵢ × P_total",
                    "Gas Constant (R)": "R = 8.314 J·mol⁻¹·K⁻¹ = 8.314 Pa·m³·mol⁻¹·K⁻¹ = 0.08206 L·atm·mol⁻¹·K⁻¹"
                },
                idealGasLawApplications: {
                    findingMoles: "n = PV/RT → moles from measurable P, V, T",
                    findingVolume: "V = nRT/P → volume of gas at given conditions",
                    findingPressure: "P = nRT/V → pressure of gas in fixed container",
                    findingMolarMass: "M = mRT/PV (where m = mass in grams) → molar mass of unknown gas",
                    combinedGasLaw: "P₁V₁/T₁ = P₂V₂/T₂ (fixed amount of gas; change in conditions)"
                },
                pressureUnits: {
                    conversions: [
                        "1 atm = 101.325 kPa = 101,325 Pa = 760 mmHg = 760 torr",
                        "1 bar = 100 kPa (IUPAC standard; approximately 1 atm)",
                        "1 mmHg = 133.3 Pa"
                    ],
                    note: "Always check which R value to use based on pressure units: R = 0.08206 L·atm/mol/K or R = 8.314 L·kPa/mol/K or R = 8.314 J/mol/K (= Pa·m³/mol/K)"
                },
                workedExamples: [
                    {
                        title: "Example 1: Molar volume at STP",
                        problem: "What volume does 2.00 mol of nitrogen gas occupy at STP (0°C, 100 kPa)?",
                        solution: [
                            "Method 1: Using molar volume",
                            "V = n × 22.4 L/mol = 2.00 mol × 22.4 L/mol = 44.8 L",
                            "",
                            "Method 2: Using ideal gas law",
                            "V = nRT/P = (2.00 × 8.314 × 273.15) / 100,000",
                            "V = 4,542 / 100,000 = 0.04542 m³ = 45.4 L",
                            "(slight difference: 22.4 L/mol is rounded; 22.7 L/mol at IUPAC STP)"
                        ]
                    },
                    {
                        title: "Example 2: Gas stoichiometry with volumes",
                        problem: "What volume of CO₂ (at 25°C, 100 kPa) is produced when 10.0 g of CaCO₃ decomposes? CaCO₃(s) → CaO(s) + CO₂(g)",
                        solution: [
                            "Step 1: Moles of CaCO₃",
                            "n(CaCO₃) = 10.0 g ÷ 100.0 g/mol = 0.100 mol",
                            "",
                            "Step 2: Moles of CO₂ (1:1 ratio)",
                            "n(CO₂) = 0.100 mol",
                            "",
                            "Step 3: Volume at 25°C (298 K), 100 kPa using molar volume",
                            "V = n × 24.8 L/mol = 0.100 × 24.8 = 2.48 L",
                            "",
                            "Or using PV = nRT:",
                            "V = nRT/P = (0.100 × 8.314 × 298) / 100,000 = 0.00248 m³ = 2.48 L ✓"
                        ]
                    },
                    {
                        title: "Example 3: Dalton's law of partial pressures",
                        problem: "A gas mixture contains 0.40 mol N₂, 0.30 mol O₂, and 0.30 mol Ar at a total pressure of 200 kPa. Find the partial pressure of each gas.",
                        solution: [
                            "Total moles = 0.40 + 0.30 + 0.30 = 1.00 mol",
                            "",
                            "Mole fractions:",
                            "χ(N₂) = 0.40/1.00 = 0.40",
                            "χ(O₂) = 0.30/1.00 = 0.30",
                            "χ(Ar) = 0.30/1.00 = 0.30",
                            "",
                            "Partial pressures:",
                            "P(N₂) = 0.40 × 200 = 80 kPa",
                            "P(O₂) = 0.30 × 200 = 60 kPa",
                            "P(Ar) = 0.30 × 200 = 60 kPa",
                            "",
                            "Check: 80 + 60 + 60 = 200 kPa = P_total ✓"
                        ]
                    },
                    {
                        title: "Example 4: Molar mass of unknown gas",
                        problem: "A 1.45 g sample of an unknown gas occupies 0.956 L at 27°C and 100.0 kPa. Calculate the molar mass.",
                        solution: [
                            "n = PV/RT = (100,000 Pa × 0.000956 m³) / (8.314 J/mol/K × 300 K)",
                            "n = 95.6 / 2494.2 = 0.03832 mol",
                            "",
                            "M = m/n = 1.45 g / 0.03832 mol = 37.8 g/mol",
                            "",
                            "Possible identity: HCl has M = 36.5 g/mol (close); or F₂ = 38.0 g/mol"
                        ]
                    }
                ],
                realGasDeviations: {
                    conditions: "Real gases deviate most at HIGH pressure and LOW temperature",
                    reasons: [
                        "At high P: gas molecules are compressed close together; intermolecular attractions reduce pressure below ideal",
                        "At low T: molecular speeds are low; intermolecular attractions have greater effect",
                        "Molecular volume: real molecules occupy volume, unlike ideal assumption"
                    ],
                    vanDerWaals: "(P + a/V²)(V − b) = nRT; where a corrects for intermolecular attractions, b for molecular volume"
                }
            }
        };
    }

    // ========================================
    // EXPERIMENTS INITIALIZATION
    // ========================================

    initializeStoichiometryExperiments() {
        this.stoichiometryExperiments = {

            // ========================================
            // EXPERIMENT 1: MOLAR MASS BY MAGNESIUM COMBUSTION
            // ========================================
            molar_mass_magnesium: {
                name: "Determination of Molar Mass of Magnesium by Combustion",
                relatedTopics: ['mole_concept', 'chemical_equations'],
                category: 'quantitative_analysis',
                historicalBackground: {
                    scientist: "Avogadro (1811), Cannizzaro (1858) — established molar mass concept",
                    significance: "Demonstrates the connection between measurable masses and the abstract mole concept",
                    industrialContext: "Molar mass determination is essential in pharmaceuticals, polymer science, and material characterization"
                },
                labExperiment: {
                    title: "Molar Mass of Magnesium: Combustion Analysis",
                    hypothesis: "The mass ratio of magnesium to magnesium oxide formed upon combustion should correspond to the known molar mass of Mg (24.3 g/mol), following the equation 2Mg + O₂ → 2MgO",
                    purpose: "Experimentally determine the molar mass of magnesium using combustion data and the law of conservation of mass; verify stoichiometric ratios",
                    background: {
                        principle: "When magnesium burns in air, it reacts with oxygen to form magnesium oxide: 2Mg + O₂ → 2MgO. By measuring the mass before and after combustion, we can determine how much oxygen was gained and use stoichiometry to calculate the molar mass of Mg.",
                        molesConnection: "If we know moles of O₂ consumed (from mass gain) and the 2:1 Mg:O₂ ratio, we can find moles of Mg, then molar mass = mass/moles",
                        stoichiometry: "2 mol Mg reacts with 1 mol O₂; so mol(Mg) = 2 × mol(O₂) consumed"
                    },
                    variables: {
                        independent: "Mass of magnesium ribbon used",
                        dependent: "Mass of magnesium oxide formed; calculated molar mass",
                        controlled: ["Crucible type and size", "Heating duration", "Air supply to combustion"]
                    },
                    materials: [
                        "Magnesium ribbon (approximately 0.3−0.5 g)",
                        "Porcelain crucible with lid",
                        "Crucible tongs",
                        "Pipe clay triangle and tripod",
                        "Bunsen burner",
                        "Analytical balance (±0.001 g)",
                        "Safety glasses and heat-resistant mat",
                        "Desiccator (optional; to cool without absorbing moisture)"
                    ],
                    safetyPrecautions: [
                        "Magnesium burns with intense white light — DO NOT look directly at the flame; use safety glasses",
                        "Magnesium oxide powder is an irritant — avoid inhaling fumes",
                        "Hot crucible — always use crucible tongs; allow to cool before weighing",
                        "Ensure lid is present to prevent excessive loss of MgO as smoke"
                    ],
                    procedure: [
                        "1. Clean the crucible and lid; heat strongly for 5 min; cool in desiccator; weigh accurately. Record as m₁.",
                        "2. Weigh 0.30−0.40 g of magnesium ribbon coiled into small coil in the crucible. Record combined mass as m₂.",
                        "3. Mass of Mg = m₂ − m₁",
                        "4. Place crucible on pipe clay triangle on tripod; position lid slightly ajar (to allow air in but prevent MgO escape)",
                        "5. Heat strongly with Bunsen burner; magnesium will ignite and burn brightly",
                        "6. Continue heating until no further burning observed; lift lid momentarily to check completion",
                        "7. If still burning, replace lid to smother; then re-heat with lid slightly ajar",
                        "8. Heat strongly for further 5 min to ensure complete oxidation",
                        "9. Allow crucible to cool (in desiccator if available); weigh accurately. Record as m₃.",
                        "10. Mass of MgO = m₃ − m₁",
                        "11. Mass of O₂ gained = m₃ − m₂",
                        "12. Repeat for 3 trials; average results"
                    ],
                    dataTable: [
                        ["Measurement", "Trial 1", "Trial 2", "Trial 3"],
                        ["Mass of crucible + lid (m₁, g)", "", "", ""],
                        ["Mass of crucible + lid + Mg (m₂, g)", "", "", ""],
                        ["Mass of Mg = m₂ − m₁ (g)", "", "", ""],
                        ["Mass of crucible + lid + MgO (m₃, g)", "", "", ""],
                        ["Mass of MgO = m₃ − m₁ (g)", "", "", ""],
                        ["Mass of O₂ consumed = m₃ − m₂ (g)", "", "", ""],
                        ["Moles of O₂ = mass(O₂)/32.0", "", "", ""],
                        ["Moles of Mg = 2 × moles O₂ (2:1 ratio)", "", "", ""],
                        ["Calculated molar mass of Mg = mass(Mg)/mol(Mg)", "", "", ""],
                        ["% error vs accepted (24.3 g/mol)", "", "", ""]
                    ],
                    calculations: {
                        molesO2: "n(O₂) = mass of O₂ gained / 32.0 g/mol",
                        molesMg: "n(Mg) = 2 × n(O₂) [from 2Mg + O₂ → 2MgO ratio]",
                        molarMassMg: "M(Mg) = mass of Mg / n(Mg)",
                        percentError: "% error = |experimental − theoretical| / theoretical × 100%"
                    },
                    expectedResults: {
                        typicalMolarMass: "22−26 g/mol (accepted: 24.3 g/mol)",
                        commonError: "MgO smoke escapes if lid is fully off → mass gain too low → apparent M too high or too low",
                        percentErrorAcceptable: "< 5% with careful technique"
                    },
                    errorAnalysis: [
                        "MgO smoke lost if crucible fully open: underestimates mass of MgO → systematic error",
                        "Incomplete combustion: some Mg remains as metal → underestimates O₂ gain",
                        "Mg₃N₂ formation (Mg reacts with N₂ in air) → smaller mass gain than expected for pure MgO",
                        "Moisture absorption during cooling → overestimates mass of product",
                        "Balance precision: analytical balance required; top-pan balance gives large random errors"
                    ],
                    conclusions: [
                        "Experimental molar mass should agree with accepted value of 24.3 g/mol within experimental error",
                        "The 2:1 Mg:O mole ratio is confirmed by the mass data",
                        "Demonstrates that relative atomic masses can be determined experimentally through careful mass measurements",
                        "Law of conservation of mass verified: mass Mg + mass O₂ = mass MgO"
                    ],
                    realWorldApplications: [
                        "Combustion analysis used routinely to determine % C, H, N, S in organic compounds",
                        "Thermogravimetric analysis (TGA) measures mass changes on heating to characterize materials",
                        "Mining and metallurgy: ore analysis uses combustion and mass balance to determine metal content"
                    ],
                    extensions: [
                        "Repeat with different masses of Mg; plot mass MgO vs mass Mg (should be linear, gradient = M(MgO)/M(Mg))",
                        "Compare results with and without crucible lid to quantify systematic error from MgO smoke loss",
                        "Research combustion analysis (CHN analysis) as used in organic chemistry"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 2: ACID-BASE TITRATION
            // ========================================
            acid_base_titration: {
                name: "Acid-Base Titration: Determination of Concentration of Sodium Hydroxide",
                relatedTopics: ['solution_stoichiometry', 'mole_concept', 'chemical_equations'],
                category: 'quantitative_analysis',
                historicalBackground: {
                    scientist: "Henry-Louis Duhamel du Monceau (18th century); developed by Gay-Lussac",
                    significance: "Titration is one of the most precise and widely used quantitative analytical techniques",
                    industrialContext: "Used in pharmaceuticals (drug purity testing), food industry (acidity), water treatment, environmental analysis"
                },
                labExperiment: {
                    title: "Volumetric Analysis: Standardization of NaOH Solution Using Hydrochloric Acid",
                    hypothesis: "The concentration of NaOH solution can be determined precisely by titration against a standard HCl solution, using the 1:1 stoichiometric ratio of the neutralization reaction",
                    purpose: "Determine the concentration of a sodium hydroxide solution by titration with standard hydrochloric acid; develop accurate technique for volumetric analysis",
                    background: {
                        reaction: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l); neutralization reaction; mole ratio 1:1",
                        indicatorChoice: "Phenolphthalein: colorless in acid, pink/magenta in base, transition pH 8.2−10.0. Suitable for strong acid−strong base titration. Methyl orange also acceptable.",
                        equivalencePoint: "At equivalence point, moles HCl = moles NaOH (for 1:1 reaction). pH at equivalence ≈ 7 for strong acid−strong base.",
                        standardSolution: "HCl of accurately known concentration prepared or standardized beforehand"
                    },
                    variables: {
                        independent: "Volume of NaOH titrated",
                        dependent: "Volume of HCl required to reach end point",
                        controlled: ["Volume of NaOH in flask (pipette)", "Concentration of HCl", "Indicator type and amount", "Temperature"]
                    },
                    materials: [
                        "0.100 mol/L HCl standard solution (accurately known concentration)",
                        "NaOH solution of unknown concentration (~0.1 mol/L)",
                        "50 mL burette, burette clamp and stand",
                        "25.00 mL pipette and safety filler",
                        "Conical flask (250 mL)",
                        "White tile (to see color change clearly)",
                        "Phenolphthalein indicator solution",
                        "Wash bottle with deionised water",
                        "Funnel (for filling burette)"
                    ],
                    safetyPrecautions: [
                        "NaOH is corrosive — avoid skin and eye contact; wash immediately with water if contact occurs",
                        "HCl fumes are irritating — work in well-ventilated area",
                        "Glassware may be slippery when wet — handle carefully",
                        "Use pipette filler, never mouth-pipette"
                    ],
                    procedure: [
                        "PREPARATION:",
                        "1. Rinse burette with deionised water, then with HCl solution (2 × 5 mL); fill with HCl and remove air bubbles from tip",
                        "2. Rinse pipette with deionised water, then with NaOH solution",
                        "",
                        "TITRATION:",
                        "3. Pipette 25.00 mL of NaOH into conical flask; add 2-3 drops phenolphthalein indicator (solution turns pink)",
                        "4. Record initial burette reading (to 2 decimal places)",
                        "5. Add HCl from burette to flask, swirling constantly",
                        "6. As pink color takes longer to disappear, slow addition to drop-by-drop",
                        "7. Stop at first permanent colorless endpoint (pink disappears and does not return after 30 s of swirling)",
                        "8. Record final burette reading; titre = final − initial",
                        "",
                        "REPEAT:",
                        "9. Perform at least 3 titrations; identify concordant titres (within ±0.10 mL)",
                        "10. Calculate mean concordant titre"
                    ],
                    dataTable: [
                        ["", "Rough", "Titration 1", "Titration 2", "Titration 3"],
                        ["Initial burette reading (mL)", "", "", "", ""],
                        ["Final burette reading (mL)", "", "", "", ""],
                        ["Titre (mL)", "", "", "", ""],
                        ["Concordant? (Y/N)", "", "", "", ""],
                        ["Mean concordant titre (mL)", "—", "", "", ""]
                    ],
                    calculations: {
                        molesHCl: "n(HCl) = c(HCl) × V(HCl in L) = 0.100 mol/L × (mean titre/1000)",
                        molesNaOH: "n(NaOH) = n(HCl) [1:1 mole ratio]",
                        concentrationNaOH: "c(NaOH) = n(NaOH) / V(NaOH in L) = n(NaOH) / 0.02500",
                        exampleCalc: "If mean titre = 24.50 mL: n(HCl) = 0.100 × 0.02450 = 0.00245 mol; c(NaOH) = 0.00245/0.02500 = 0.0980 mol/L"
                    },
                    expectedResults: {
                        concordantTitres: "Within 0.10 mL of each other",
                        typicalConcentration: "Close to the prepared NaOH concentration",
                        colorChange: "Sharp color change from pink to colorless at endpoint with correct technique"
                    },
                    errorAnalysis: [
                        "Burette not read at eye level (parallax error): read at meniscus bottom for transparent solutions",
                        "Air bubble in burette tip: gives falsely large titre reading",
                        "Overshooting endpoint: adding too much acid past colorless endpoint → titre too large",
                        "Not rinsing glassware with correct solution: dilutes solution, changes concentration",
                        "Random errors: reduced by averaging concordant titres",
                        "Indicator error: endpoint vs equivalence point differ by < 0.1 mL for strong acid−strong base"
                    ],
                    conclusions: [
                        "Concentration of NaOH determined with high precision using acid-base titration",
                        "The 1:1 stoichiometric ratio of HCl to NaOH allows direct calculation from volumes and concentration",
                        "Repeating and averaging concordant titres reduces random error",
                        "Titration is accurate to ±0.01−0.05 mol/L with careful technique"
                    ],
                    realWorldApplications: [
                        "Pharmaceutical industry: acid-base titration confirms purity and assay of drug substances",
                        "Food industry: acidity titration of vinegar, wine, fruit juices",
                        "Water treatment: alkalinity/acidity of water supplies monitored by titration",
                        "Clinical chemistry: blood gas analysis related to acid-base balance in patients"
                    ],
                    extensions: [
                        "Plot pH vs volume of HCl added to generate a titration curve",
                        "Compare phenolphthalein vs methyl orange endpoints for the same titration",
                        "Titrate a weak acid (acetic acid, citric acid) vs NaOH; discuss choice of indicator",
                        "Investigate back-titration: excess HCl added to insoluble base, then NaOH used to determine excess HCl"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 3: LIMITING REAGENT IN COPPER CHLORIDE REACTION
            // ========================================
            limiting_reagent_copper: {
                name: "Limiting Reagent Investigation: Copper and Silver Nitrate Reaction",
                relatedTopics: ['limiting_reagent', 'mole_concept', 'chemical_equations'],
                category: 'stoichiometry_investigation',
                historicalBackground: {
                    scientist: "Classic demonstration experiment in quantitative chemistry",
                    significance: "Visually demonstrates limiting reagent concept through measurable mass changes and color changes",
                    industrialContext: "Limiting reagent optimization is critical in industrial processes to minimize waste and maximize yield"
                },
                labExperiment: {
                    title: "Investigating Limiting Reagent: Copper and Silver Nitrate Solution",
                    hypothesis: "If varying masses of copper are added to a fixed volume of silver nitrate solution, copper will be the limiting reagent for small masses and silver nitrate will be limiting for large masses. A plot of mass of silver deposited vs mass of copper will show a linear increase then plateau.",
                    purpose: "Experimentally identify the limiting reagent by varying the ratio of reactants; verify stoichiometric mole ratios from a balanced equation",
                    background: {
                        reaction: "Cu(s) + 2AgNO₃(aq) → Cu(NO₃)₂(aq) + 2Ag(s)",
                        moleRatio: "1 mol Cu : 2 mol AgNO₃ : 1 mol Cu(NO₃)₂ : 2 mol Ag",
                        observation: "Silver deposits as grey/silver solid; blue color of Cu²⁺ ions develops in solution",
                        limitingConcept: "When Cu is limiting: all Cu reacts, excess AgNO₃ remains; When AgNO₃ is limiting: some Cu remains unreacted, all AgNO₃ consumed"
                    },
                    variables: {
                        independent: "Mass of copper used (0.10 g to 1.00 g in steps)",
                        dependent: "Mass of silver deposited",
                        controlled: ["Volume of AgNO₃ solution (50.0 mL of 0.100 mol/L)", "Concentration of AgNO₃", "Reaction time", "Temperature"]
                    },
                    materials: [
                        "Copper wire or foil, various masses (0.10, 0.20, 0.30, 0.50, 0.80, 1.00 g)",
                        "Silver nitrate solution, 0.100 mol/L, 50.0 mL per trial",
                        "Analytical balance",
                        "Beakers (100 mL, one per trial)",
                        "Filter paper and funnel (or filter crucibles)",
                        "Glass rod",
                        "Drying oven (100°C)",
                        "Wash bottle with deionised water",
                        "Safety glasses"
                    ],
                    safetyPrecautions: [
                        "Silver nitrate is corrosive and stains skin black (indelible) — avoid contact; wear gloves",
                        "Copper compounds are toxic to aquatic organisms — dispose of Cu(NO₃)₂ solution as directed (not down drain without treatment)",
                        "Do not heat silver deposits with strong reducing agents (risk of explosion with silver azide if azide impurities present)",
                        "All silver waste should be recovered for silver recycling"
                    ],
                    procedure: [
                        "1. Weigh copper samples: 0.10, 0.20, 0.32 (stoichiometric), 0.50, 0.80, 1.00 g",
                        "   [Note: stoichiometric mass = n(AgNO₃)/2 × M(Cu) = 0.00500/2 × 63.5 = 0.159 g]",
                        "2. Place each copper sample in a labelled 100 mL beaker",
                        "3. Pipette exactly 50.0 mL of 0.100 mol/L AgNO₃ into each beaker",
                        "4. Allow to react for 30 minutes, stirring occasionally; silver deposits on copper",
                        "5. Observe: color of solution (blue = Cu²⁺); silver deposits (grey crystals)",
                        "6. Note whether copper remains (Cu limiting if all Cu dissolved; AgNO₃ limiting if Cu remains)",
                        "7. Filter each mixture; wash silver deposit with deionised water",
                        "8. Dry filter paper + silver at 100°C in oven until constant mass (30−45 min)",
                        "9. Weigh dried silver + filter paper; subtract mass of filter paper = mass of silver",
                        "10. Record and tabulate results"
                    ],
                    dataTable: [
                        ["Mass Cu added (g)", "Theoretical Ag if Cu limiting (g)", "Theoretical Ag if AgNO₃ limiting (g)", "Actual Ag obtained (g)", "Cu remaining? (Y/N)", "Solution color"],
                        ["0.10", "", "", "", "", ""],
                        ["0.20", "", "", "", "", ""],
                        ["0.32", "", "", "", "", ""],
                        ["0.50", "", "", "", "", ""],
                        ["0.80", "", "", "", "", ""],
                        ["1.00", "", "", "", "", ""]
                    ],
                    calculations: {
                        nAgNO3: "n(AgNO₃) = 0.100 mol/L × 0.0500 L = 0.00500 mol",
                        theoreticalAgFromCu: "n(Ag) = 2 × n(Cu) = 2 × [m(Cu)/63.5]; m(Ag) = n(Ag) × 107.9",
                        theoreticalAgFromAgNO3: "n(Ag) = n(AgNO₃) = 0.00500 mol; m(Ag) = 0.00500 × 107.9 = 0.540 g (constant)",
                        stoichiometricPoint: "Stoichiometric: n(Cu) = n(AgNO₃)/2 = 0.00250 mol; m(Cu) = 0.00250 × 63.5 = 0.159 g"
                    },
                    graphAnalysis: {
                        description: "Plot mass of Ag vs mass of Cu added",
                        shape: "Two straight-line segments meeting at stoichiometric point",
                        segment1: "Linear increase (slope = 2 × 107.9/63.5 = 3.40): Cu is limiting; all Cu reacts",
                        segment2: "Horizontal plateau at 0.540 g: AgNO₃ is limiting; all AgNO₃ consumed regardless of excess Cu",
                        stoichiometricPoint: "Kink at m(Cu) = 0.159 g; both reactants exactly consumed"
                    },
                    expectedResults: {
                        beforeStoichiometric: "Cu is limiting; no Cu remains; solution turns blue (Cu²⁺); Ag mass increases linearly",
                        atStoichiometric: "All Cu and all AgNO₃ consumed; maximum Ag yield = 0.540 g",
                        afterStoichiometric: "AgNO₃ is limiting; Cu remains unreacted; Ag mass plateaus at ~0.540 g; solution less blue"
                    },
                    conclusions: [
                        "The limiting reagent changes from Cu (insufficient Cu) to AgNO₃ (insufficient AgNO₃) as Cu mass increases",
                        "Stoichiometric point at ~0.159 g Cu gives maximum Ag yield consistent with balanced equation",
                        "The 1:2:2 mole ratio Cu:AgNO₃:Ag is confirmed experimentally by the slopes and plateau value",
                        "Graph shape (two straight lines with kink) is characteristic evidence for limiting reagent behavior"
                    ],
                    realWorldApplications: [
                        "Industrial chemical plants optimize reactant ratios to minimize waste of expensive reagents",
                        "Electroplating industry: silver deposition onto objects uses controlled metal ion concentrations",
                        "Pharmaceutical synthesis: limiting reagent management reduces cost and waste in drug manufacturing"
                    ],
                    extensions: [
                        "Calculate the theoretical yield of silver for each trial and compare with actual yield to get % yield",
                        "Investigate the reaction of iron with copper sulfate solution (Fe + CuSO₄ → FeSO₄ + Cu) as an alternative limiting reagent experiment",
                        "Design an experiment to investigate limiting reagent in a precipitation reaction"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 4: PERCENTAGE YIELD OF ASPIRIN
            // ========================================
            percentage_yield_aspirin: {
                name: "Synthesis of Aspirin and Determination of Percentage Yield",
                relatedTopics: ['percentage_yield', 'mole_concept', 'chemical_equations', 'solution_stoichiometry'],
                category: 'synthesis_and_yield',
                historicalBackground: {
                    scientist: "Felix Hoffmann (Bayer, 1897) — first synthesized pure aspirin from salicylic acid",
                    significance: "One of the world's most widely used medicines; classic example of medicinal chemistry; demonstrates percentage yield in a real pharmaceutical synthesis",
                    industrialContext: "Global production of aspirin exceeds 40,000 tonnes/year; synthesis is by acetylation of salicylic acid, a classic esterification"
                },
                labExperiment: {
                    title: "Synthesis and Percentage Yield of Aspirin (Acetylsalicylic Acid)",
                    hypothesis: "Aspirin (acetylsalicylic acid) can be synthesized by reacting salicylic acid with acetic anhydride in the presence of an acid catalyst; the percentage yield will be less than 100% due to incomplete reaction and losses during purification",
                    purpose: "Synthesize aspirin using the reaction between salicylic acid and acetic anhydride; determine the percentage yield; test the product for purity using FeCl₃ test",
                    background: {
                        reaction: "C₇H₆O₃ + (CH₃CO)₂O → C₉H₈O₄ + CH₃COOH (salicylic acid + acetic anhydride → aspirin + acetic acid)",
                        moleRatio: "1 mol salicylic acid + 1 mol acetic anhydride → 1 mol aspirin + 1 mol acetic acid",
                        mechanism: "Nucleophilic acyl substitution: phenolic OH of salicylic acid attacks carbonyl of acetic anhydride; acetic acid is the leaving group",
                        purityTest: "FeCl₃ test: salicylic acid gives intense purple color with FeCl₃ (phenol group present); pure aspirin gives faint/no color (phenol is acetylated)"
                    },
                    variables: {
                        independent: "Starting mass of salicylic acid",
                        dependent: "Mass of aspirin obtained; percentage yield",
                        controlled: ["Volume of acetic anhydride (excess used)", "Catalyst amount (H₃PO₄ or H₂SO₄)", "Temperature and time of reaction", "Volume of water used for crystallization"]
                    },
                    materials: [
                        "Salicylic acid (2.00 g, accurately weighed)",
                        "Acetic anhydride (3 mL, excess)",
                        "Phosphoric acid (85%, 5 drops) or concentrated H₂SO₄ (5 drops) as catalyst",
                        "Distilled water (50 mL for workup)",
                        "Ice bath",
                        "Round-bottom or conical flask (100 mL)",
                        "Water bath (85°C)",
                        "Büchner funnel and flask for vacuum filtration",
                        "Filter paper",
                        "Analytical balance",
                        "Melting point apparatus (if available)",
                        "FeCl₃ solution (1%) for purity test",
                        "Ethanol (for recrystallization, optional)"
                    ],
                    safetyPrecautions: [
                        "Acetic anhydride is corrosive and has a strong irritating odour — use in fume hood; avoid skin/eye contact",
                        "Concentrated H₂SO₄ or H₃PO₄ is corrosive — handle with care",
                        "Aspirin can cause allergic reactions in sensitive individuals — minimize skin contact",
                        "Ice bath required — ensure access to ice throughout experiment",
                        "Avoid inhaling acetic anhydride vapours"
                    ],
                    procedure: [
                        "SYNTHESIS:",
                        "1. Weigh exactly 2.00 g of salicylic acid into a 100 mL conical flask",
                        "2. Add 3.0 mL of acetic anhydride (in fume hood)",
                        "3. Add 5 drops of phosphoric acid (catalyst); swirl to mix",
                        "4. Heat in water bath at 85°C for 15 minutes, swirling occasionally",
                        "   (Mixture should form clear solution; if solid remains, heat further)",
                        "",
                        "WORKUP:",
                        "5. Carefully add 2 mL cold distilled water to destroy excess acetic anhydride",
                        "   (Exothermic — add slowly; vapour produced)",
                        "6. Add 20 mL cold distilled water; stir; aspirin crystallizes",
                        "7. Cool in ice bath for 10 minutes to complete crystallization",
                        "",
                        "FILTRATION AND DRYING:",
                        "8. Set up Büchner funnel; wet filter paper with distilled water",
                        "9. Filter with vacuum (or gravity filter); wash crystals twice with small portions cold water",
                        "10. Spread crystals on pre-weighed watch glass; dry in oven at 60°C for 20 min",
                        "11. Weigh dried aspirin; record as actual yield",
                        "",
                        "PURITY TEST:",
                        "12. Dissolve small crystal (~0.1 g) in 5 mL ethanol; add 1 mL 1% FeCl₃ solution",
                        "    Pure aspirin: faint tan/orange color",
                        "    Impure (contains salicylic acid): intense purple/violet color",
                        "13. Measure melting point if available: pure aspirin mp = 135−136°C"
                    ],
                    dataTable: [
                        ["Measurement", "Value"],
                        ["Mass of salicylic acid (g)", ""],
                        ["Moles of salicylic acid (mol)", ""],
                        ["Moles of aspirin expected (theoretical)", ""],
                        ["Theoretical yield of aspirin (g)", ""],
                        ["Mass of watch glass (g)", ""],
                        ["Mass of watch glass + aspirin (g)", ""],
                        ["Actual yield of aspirin (g)", ""],
                        ["Percentage yield (%)", ""],
                        ["FeCl₃ test result (color)", ""],
                        ["Melting point (°C) if measured", ""]
                    ],
                    calculations: {
                        molesSalicylicAcid: "n(C₇H₆O₃) = mass / 138.1 g/mol",
                        molesAspirin: "n(aspirin) = n(salicylic acid) (1:1 ratio)",
                        theoreticalYield: "m(aspirin) theoretical = n(aspirin) × 180.2 g/mol",
                        percentageYield: "% yield = (actual yield / theoretical yield) × 100%",
                        exampleCalc: "For 2.00 g salicylic acid: n = 0.01448 mol; theoretical aspirin = 0.01448 × 180.2 = 2.61 g"
                    },
                    expectedResults: {
                        typicalYield: "1.8−2.3 g (70−90% yield)",
                        purityTest: "Pure aspirin: pale tan/no color with FeCl₃",
                        meltingPoint: "Pure aspirin: 135−136°C (impure sample: lower, broader melting range)",
                        reasonsForLoss: "Transfer losses, crystals remaining in flask, solubility of aspirin in wash water"
                    },
                    errorAnalysis: [
                        "Product losses in filtration and washing: reduce yield below theoretical",
                        "Incomplete reaction: some salicylic acid unreacted → FeCl₃ test shows purple; recrystallize to purify",
                        "Over-washing with water: aspirin slightly soluble in water; excessive washing dissolves product",
                        "Not cooling sufficiently in ice bath: crystals not fully precipitated; lost in filtrate",
                        "Hydrolysis of aspirin: in excess water or at high temperature, aspirin can hydrolyze back to starting materials"
                    ],
                    conclusions: [
                        "Aspirin is successfully synthesized from salicylic acid and acetic anhydride with percentage yield typically 70−90%",
                        "Percentage yield < 100% due to losses during transfer, filtration, and washing",
                        "FeCl₃ test confirms removal of salicylic acid impurity",
                        "Melting point is a sensitive indicator of purity (depression of mp in impure sample)",
                        "The experiment demonstrates that real-world synthesis yields are always less than theoretical"
                    ],
                    realWorldApplications: [
                        "Pharmaceutical manufacturing must optimize yield while maintaining purity standards",
                        "Industrial aspirin production uses similar acetylation chemistry at scale",
                        "Green chemistry metric (atom economy): aspirin synthesis has good atom economy (both aspirin and acetic acid products have uses)",
                        "Drug quality control uses melting point and spectroscopic methods to verify purity"
                    ],
                    extensions: [
                        "Recrystallize the crude aspirin from ethanol/water to improve purity; recalculate yield after recrystallization",
                        "Calculate atom economy for the aspirin synthesis; compare with percentage yield",
                        "Run IR spectrum of product and compare C=O peak positions (ester ~1750 cm⁻¹, carboxylic acid ~1700 cm⁻¹)",
                        "Investigate the effect of reaction time and temperature on yield"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 5: GAS STOICHIOMETRY
            // ========================================
            gas_stoichiometry_hydrogen: {
                name: "Gas Stoichiometry: Molar Volume of Hydrogen from Metal-Acid Reaction",
                relatedTopics: ['gas_stoichiometry', 'mole_concept', 'chemical_equations', 'limiting_reagent'],
                category: 'gas_law_investigation',
                historicalBackground: {
                    scientist: "Henry Cavendish (1766) — isolated and characterized hydrogen; measured its properties",
                    significance: "Connects mole concept, stoichiometry, and gas laws; demonstrates how to measure gas volume and calculate molar volume",
                    industrialContext: "Hydrogen production from metals and acids is the basis for understanding industrial electrolytic hydrogen production; hydrogen as clean fuel is crucial for energy transition"
                },
                labExperiment: {
                    title: "Molar Volume of Hydrogen Gas: Reaction of Magnesium with Hydrochloric Acid",
                    hypothesis: "The reaction Mg + 2HCl → MgCl₂ + H₂ will produce a measurable volume of H₂ gas; the calculated molar volume at laboratory temperature and pressure will be close to the theoretical value predicted by the ideal gas law",
                    purpose: "Collect and measure the volume of hydrogen gas produced from a known mass of magnesium; calculate the molar volume of H₂ at room temperature and pressure; verify agreement with ideal gas law",
                    background: {
                        reaction: "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)",
                        moleRatio: "1 mol Mg → 1 mol H₂",
                        idealGasLaw: "PV = nRT; at STP (0°C, 100 kPa) molar volume = 22.4 L/mol; at 25°C, 100 kPa = 24.8 L/mol",
                        daltonLaw: "Gas collected over water contains water vapor; P(H₂) = P(total) − P(water vapor); water vapor pressure at 25°C = 3.17 kPa",
                        eudiometer: "Gas collected by displacement of water in graduated tube (eudiometer or gas syringe)"
                    },
                    variables: {
                        independent: "Mass of magnesium used",
                        dependent: "Volume of H₂ collected",
                        controlled: ["Concentration of HCl (excess)", "Temperature (room temperature)", "Pressure (atmospheric)", "Collection method"]
                    },
                    materials: [
                        "Magnesium ribbon (0.030−0.060 g, accurately weighed)",
                        "Hydrochloric acid (2.0 mol/L, excess, ~20 mL)",
                        "Gas collection apparatus: eudiometer (graduated cylinder inverted in water trough) OR gas syringe setup",
                        "100 mL graduated measuring cylinder",
                        "Large water trough or bowl",
                        "Thermometer (±0.5°C)",
                        "Barometer or atmospheric pressure measurement",
                        "Rubber stopper with delivery tube",
                        "Retort stand and clamp",
                        "Analytical balance (±0.001 g)"
                    ],
                    safetyPrecautions: [
                        "Hydrogen gas is highly flammable — no naked flames in the vicinity",
                        "Ensure good ventilation; hydrogen-air mixture is explosive (4−75% H₂ in air)",
                        "Concentrated HCl is corrosive and produces HCl fumes — work with care",
                        "Do not lean over the apparatus when HCl is added",
                        "Magnesium reacts vigorously — control rate by keeping Mg size small"
                    ],
                    procedure: [
                        "SETUP:",
                        "1. Fill eudiometer (inverted 100 mL graduated cylinder) completely with water; invert over water trough; ensure no bubbles",
                        "2. Set up side-arm boiling tube or flask connected via rubber tubing to the inverted eudiometer",
                        "",
                        "REACTION AND COLLECTION:",
                        "3. Weigh magnesium ribbon accurately (~0.040 g); record exact mass",
                        "4. Place magnesium in the reaction flask; add approximately 20 mL of 2.0 mol/L HCl",
                        "   (HCl should be in large excess relative to Mg — Mg is limiting)",
                        "5. Quickly stopper the flask; connect delivery tube under the eudiometer",
                        "6. H₂ gas produced displaces water in the eudiometer; allow reaction to complete (~3−5 minutes)",
                        "7. Wait until gas cools to room temperature (important for accurate measurement)",
                        "",
                        "MEASUREMENTS:",
                        "8. Carefully adjust eudiometer so water level inside = water level outside (equalize pressure to atmospheric)",
                        "9. Read volume of H₂ collected (subtract residual air if present)",
                        "10. Record: temperature T (K) = room temp + 273; pressure P = atmospheric pressure (kPa)",
                        "11. Look up water vapor pressure at measured temperature (e.g., at 25°C: P(H₂O) = 3.17 kPa)",
                        "12. Calculate P(H₂) = P(atm) − P(H₂O)",
                        "",
                        "REPEAT:",
                        "13. Repeat with different masses of Mg (0.030, 0.040, 0.060 g); tabulate results"
                    ],
                    dataTable: [
                        ["Measurement", "Trial 1", "Trial 2", "Trial 3"],
                        ["Mass of Mg (g)", "", "", ""],
                        ["Moles of Mg", "", "", ""],
                        ["Theoretical moles of H₂", "", "", ""],
                        ["Volume of H₂ collected (mL)", "", "", ""],
                        ["Temperature T (°C)", "", "", ""],
                        ["Temperature T (K)", "", "", ""],
                        ["Atmospheric pressure P_atm (kPa)", "", "", ""],
                        ["Water vapor pressure P(H₂O) (kPa)", "", "", ""],
                        ["Pressure of H₂: P(H₂) = P_atm − P(H₂O) (kPa)", "", "", ""],
                        ["Moles of H₂ from ideal gas: n = PV/RT", "", "", ""],
                        ["Molar volume at measured T and P: V/n (L/mol)", "", "", ""],
                        ["Theoretical molar volume at T,P: RT/P (L/mol)", "", "", ""],
                        ["% error", "", "", ""]
                    ],
                    calculations: {
                        molesMg: "n(Mg) = m / 24.3 g/mol",
                        molesH2theoretical: "n(H₂) = n(Mg) [1:1 mole ratio]",
                        molesH2fromIGL: "n(H₂) = P(H₂) × V / (R × T) [P in Pa, V in m³, R = 8.314]",
                        molarVolume: "V_molar = V(H₂) / n(H₂) [L/mol]",
                        theoreticalMolarVolume: "V_molar(theory) = RT / P(H₂) [L/mol]",
                        example: "At 25°C (298 K), P(H₂) = 98.84 kPa: V_molar = (8.314 × 298) / 98,840 = 0.02508 m³/mol = 25.1 L/mol"
                    },
                    expectedResults: {
                        molarVolume: "~24−26 L/mol at room temperature (≈25°C) and standard pressure",
                        comparison: "Compare with: 22.4 L/mol at 0°C (STP) and 24.8 L/mol at 25°C (SATP)",
                        graphAnalysis: "Plot V(H₂) vs n(Mg): linear through origin; slope = molar volume of H₂ at room conditions"
                    },
                    errorAnalysis: [
                        "Water vapor in collected gas: not accounted for → volume of H₂ overestimated; always apply Dalton's law correction",
                        "Temperature equilibration: gas must reach room temperature before reading volume; hot gas occupies more volume",
                        "Pressure adjustment: inside and outside water levels must be equal for P = P_atm",
                        "Gas leaks: bubbles escaping around rubber stopper → gas lost, volume underestimated",
                        "Residual air in tubing: leads to larger apparent gas volume",
                        "Incomplete reaction: some Mg not dissolved → fewer moles of H₂ than expected"
                    ],
                    conclusions: [
                        "The molar volume of H₂ at room temperature and pressure is experimentally confirmed to match the ideal gas law prediction",
                        "The stoichiometry of Mg + 2HCl → MgCl₂ + H₂ is verified; 1 mol Mg produces 1 mol H₂",
                        "The ideal gas law (PV = nRT) accurately predicts gas volumes under near-ambient conditions",
                        "Dalton's Law correction for water vapor pressure is necessary for accurate results",
                        "Molar volume decreases from 24.8 L/mol at 25°C toward 22.4 L/mol at 0°C as temperature decreases"
                    ],
                    realWorldApplications: [
                        "Hydrogen fuel cells: stoichiometry of H₂ combustion determines energy output (2H₂ + O₂ → 2H₂O)",
                        "Industrial hydrogen production: steam methane reforming (CH₄ + H₂O → CO + 3H₂)",
                        "Airbag chemistry: sodium azide (2NaN₃ → 2Na + 3N₂) — gas stoichiometry determines airbag volume",
                        "Respiratory physiology: gas exchange in lungs follows partial pressure principles (Dalton's Law)"
                    ],
                    extensions: [
                        "Plot V(H₂) vs n(Mg) for multiple trials; find gradient = experimental molar volume; compare with theory",
                        "Vary temperature (cold water bath vs hot water) and observe change in gas volume; verify Charles's Law",
                        "Compare molar volumes of CO₂ (from acid + carbonate) and H₂ at same conditions",
                        "Research deviation of H₂ from ideal behavior at high pressures; compare with van der Waals equation"
                    ]
                }
            }
        };

        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.stoichiometryExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.stoichiometryTopics[topicId]) {
                    if (!this.stoichiometryTopics[topicId].relatedExperiments) {
                        this.stoichiometryTopics[topicId].relatedExperiments = [];
                    }
                    this.stoichiometryTopics[topicId].relatedExperiments.push({
                        id: expId,
                        name: experiment.name,
                        category: experiment.category
                    });
                }
            });
        });
    }

    // ========================================
    // MISCONCEPTION DATABASE
    // ========================================

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            mole_concept: {
                'Avogadro and Moles': [
                    'Believing a mole is a weight or mass (it is an amount — a number of particles, like "dozen" = 12)',
                    'Thinking Avogadro\'s number is 6.022 × 10²³ grams (it is 6.022 × 10²³ particles per mole)',
                    'Confusing molar mass (g/mol) with mass of one molecule (which is in atomic mass units, u)',
                    'Thinking 1 mole of any substance has the same mass (different substances have different molar masses; only same number of particles)'
                ],
                'Molar Mass': [
                    'Believing molar mass and molecular mass are different things (molar mass in g/mol is numerically equal to relative molecular mass in u)',
                    'Forgetting to multiply by number of atoms in formula (M(H₂O) ≠ 18+16; M = 2×1 + 16 = 18)',
                    'Confusing empirical formula mass with molecular molar mass',
                    'Thinking "atomic mass" on the periodic table is in grams (it is relative mass, dimensionless; molar mass in g/mol has same numerical value)'
                ],
                'Conversions': [
                    'Dividing mass by Avogadro\'s number to get moles (correct: divide by molar mass)',
                    'Multiplying moles by molar mass to get number of particles (correct: multiply by Avogadro\'s number)',
                    'Forgetting to convert grams to moles before using stoichiometry',
                    'Using incorrect molar mass: not using atomic masses from periodic table accurately'
                ],
                'Empirical Formula': [
                    'Thinking empirical formula is always the molecular formula (e.g., H₂O₂ has empirical formula HO)',
                    'Rounding mole ratios prematurely (e.g., 1.5 should not be rounded to 2 without multiplying all by 2)',
                    'Believing percentage composition directly gives subscripts in formula (must convert to moles first)'
                ]
            },

            chemical_equations: {
                'Balancing': [
                    'Changing subscripts in chemical formulas to balance equations (NEVER change subscripts; only change coefficients)',
                    'Believing "balancing" means making both sides add up to the same number (must conserve ATOMS of each element)',
                    'Thinking equations can be balanced using decimals or fractions as a final answer (fractions acceptable in thermochemical equations but conventionally whole numbers are used)',
                    'Forgetting to include all atoms in polyatomic ions when counting'
                ],
                'Mole Ratios': [
                    'Using mass ratios instead of mole ratios from balanced equations',
                    'Thinking coefficients refer to grams of substance (they refer to moles or molecular/formula units)',
                    'Ignoring coefficients and using 1:1 ratios for all reactant-product pairs',
                    'Forgetting to use the ratio from the BALANCED equation (using unbalanced equation gives wrong stoichiometry)'
                ],
                'Conservation': [
                    'Believing mass is not conserved in reactions involving gases (gases have mass; total mass of reactants = total mass of products)',
                    'Thinking atoms are "destroyed" or "created" in chemical reactions (atoms are rearranged only)',
                    'Confusing conservation of mass with conservation of moles (moles of reactants ≠ moles of products in general, but mass is conserved)'
                ]
            },

            limiting_reagent: {
                'Identification': [
                    'Thinking the reagent present in smaller mass is always the limiting reagent (must compare in MOLES relative to stoichiometric requirement)',
                    'Thinking the reagent with fewer moles is always limiting (must compare moles relative to coefficients in balanced equation)',
                    'Believing if both reactants are in excess, there is no limiting reagent (one always limits unless perfect stoichiometric ratio)',
                    'Forgetting to check which reactant actually limits by calculating moles of product from each reactant'
                ],
                'Calculations': [
                    'Calculating theoretical yield from the EXCESS reagent instead of the LIMITING reagent',
                    'Not converting to moles before comparing amounts of reactants',
                    'Forgetting to account for stoichiometric coefficients when determining which reagent is limiting',
                    'Confusing excess reagent calculation: amount of excess = initial moles − moles consumed (by limiting reagent amount × ratio)'
                ]
            },

            percentage_yield: {
                'Definitions': [
                    'Confusing actual yield with theoretical yield in the percentage yield formula',
                    'Thinking percentage yield can exceed 100% (it cannot; if >100% calculated, check theoretical yield calculation)',
                    'Believing 100% yield is achievable with perfect technique (impossible for reversible reactions; impractical for most syntheses)',
                    'Confusing percentage yield with percentage purity (yield = how much product obtained; purity = how pure the product is)'
                ],
                'Atom Economy': [
                    'Thinking high percentage yield guarantees high atom economy (they measure different things; a reaction can have 100% yield but poor atom economy)',
                    'Including all reactants in atom economy calculation (only products in denominator, not reactants)',
                    'Thinking atom economy only matters environmentally (it also affects cost and efficiency of production)'
                ]
            },

            solution_stoichiometry: {
                'Concentration': [
                    'Confusing molarity with molality (molarity = mol/L solution; molality = mol/kg solvent)',
                    'Forgetting to convert mL to L in n = cV calculations',
                    'Thinking concentration increases when solution evaporates (correct, but many think volume change doesn\'t affect concentration)',
                    'Believing dilution decreases the number of moles (moles of solute are conserved; only concentration decreases)'
                ],
                'Titration': [
                    'Using the wrong mole ratio for non-1:1 reactions (e.g., H₂SO₄ + 2NaOH: 1:2 ratio)',
                    'Confusing endpoint with equivalence point (endpoint is observed; equivalence point is theoretical)',
                    'Thinking the indicator is used in large amounts (only a few drops; otherwise it consumes titrant itself)',
                    'Reading the burette from the top down instead of the bottom of the meniscus',
                    'Thinking any indicator can be used for any titration (choice depends on pH at equivalence point)'
                ]
            },

            gas_stoichiometry: {
                'Ideal Gas Law': [
                    'Forgetting to convert temperature to Kelvin in PV = nRT (T in K = T°C + 273.15; using °C gives completely wrong answers)',
                    'Using wrong value of R for the pressure units being used (R = 8.314 for Pa/m³ or kPa/L; R = 0.08206 for atm/L)',
                    'Forgetting to convert mL to L or cm³ to m³ when applying PV = nRT',
                    'Thinking ideal gas law only applies at STP (it applies at any conditions; STP just specifies one set of conditions)'
                ],
                'Molar Volume': [
                    'Using 22.4 L/mol at temperatures other than 0°C (22.4 L/mol is specifically at 0°C/273 K; at 25°C it is 24.8 L/mol)',
                    'Thinking molar volume is the same for all gases at all temperatures and pressures (only equal at same T and P)',
                    'Confusing STP (0°C, 100 kPa, IUPAC) with old STP (0°C, 1 atm = 101.325 kPa); molar volume differs slightly'
                ],
                'Dalton\'s Law': [
                    'Forgetting to correct for water vapor pressure when collecting gas over water',
                    'Thinking partial pressures are in a ratio equal to volume ratio (true for ideal gas; partial pressure = mole fraction × total pressure)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_diagram: {
                method: 'Mole conversion "road map" diagram showing mass, moles, particles, gas volume with conversion factors on arrows',
                effectiveness: 'Very high for mole concept and unit conversions'
            },
            analogy: {
                method: 'Use "dozen" analogy for mole; "recipe" analogy for stoichiometry; "running out of ingredients" for limiting reagent',
                effectiveness: 'High for abstract concepts of mole and limiting reagent'
            },
            dimensional_analysis: {
                method: 'Teach unit cancellation method (factor-label) for all stoichiometry calculations',
                effectiveness: 'Very high for preventing unit errors in complex multi-step calculations'
            },
            worked_examples_varied: {
                method: 'Provide worked examples with varied complexity and context (not just abstract calculations)',
                effectiveness: 'High for building procedural fluency and conceptual understanding'
            },
            graph_interpretation: {
                method: 'Limiting reagent graph (V or mass of product vs mass of one reactant); stoichiometric point visible',
                effectiveness: 'Very high for understanding limiting reagent concept visually'
            },
            experimental_demonstration: {
                method: 'Hands-on experiments (titration, gas collection, combustion) ground abstract concepts in observable phenomena',
                effectiveness: 'Very high for retention and real-world application'
            }
        };
    }

    // ========================================
    // METACOGNITIVE PROMPTS
    // ========================================

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}? Can you give an example from everyday life?",
                "Have you ever cooked a recipe and run out of one ingredient? How is that like a limiting reagent?",
                "How does {topic} connect to what you've learned about atoms and the periodic table?",
                "What do you think will be most challenging about {topic}?",
                "Where do you encounter chemistry involving {topic} in daily life?"
            ],
            duringLearning: [
                "Can you write the conversion factor you need to go from grams to moles?",
                "What does the coefficient in a balanced equation tell you?",
                "How do you know which reactant is the limiting reagent?",
                "Can you check your answer using conservation of mass?",
                "Can you explain this calculation step to a partner without looking at your notes?"
            ],
            afterLearning: [
                "Can you solve a stoichiometry problem from scratch without looking at examples?",
                "What is the one step in stoichiometry calculations that students most often get wrong?",
                "How would you explain the mole concept to a younger student using an everyday analogy?",
                "What is the difference between theoretical yield, actual yield, and percentage yield?",
                "What questions about {topic} do you still have?"
            ],
            problemSolving: [
                "Step 1: Is the equation balanced? If not, balance it first.",
                "Step 2: Convert all masses to moles using n = m/M.",
                "Step 3: If multiple reactants are given, identify the limiting reagent.",
                "Step 4: Use mole ratio from balanced equation to find moles of product.",
                "Step 5: Convert moles of product to mass, volume, or particles as required.",
                "Step 6: Check units and check using conservation of mass."
            ],
            titrationInterpretation: [
                "What is the known concentration and which substance is it?",
                "What is the mole ratio from the balanced equation?",
                "Have you converted all volumes to litres?",
                "Which titre values are concordant (within ±0.10 mL)?",
                "Does your calculated concentration make chemical sense?"
            ]
        };
    }

    // ========================================
    // CONTEXTUAL SCENARIOS
    // ========================================

    initializeContextualScenarios() {
        this.contextualScenarios = {
            mole_concept: [
                {
                    scenario: "Pharmaceutical Dosing",
                    context: "A tablet contains 500 mg of paracetamol (C₈H₉NO₂, M = 151 g/mol)",
                    application: "n = 0.500 g / 151 g/mol = 0.00331 mol; this contains 0.00331 × 6.022×10²³ = 1.99×10²¹ molecules",
                    question: "Why does a doctor specify drug doses in milligrams rather than moles?"
                },
                {
                    scenario: "Avogadro's Scale",
                    context: "If 1 mole of sand grains were placed end to end...",
                    application: "6.022×10²³ grains × ~0.5 mm each ≈ 3×10²⁰ m ≈ 32 light-years; the incomprehensible scale explains why moles are needed",
                    question: "Why do we need such a huge number like Avogadro's constant for chemistry to be practical?"
                },
                {
                    scenario: "Steel Production",
                    context: "Iron ore (Fe₂O₃) is reduced by coke (C) to make iron: Fe₂O₃ + 3C → 2Fe + 3CO",
                    application: "160 g Fe₂O₃ (1 mol) gives 111.7 g Fe (2 mol); exact amounts determined by stoichiometry",
                    question: "How do steelmakers calculate how much iron ore and coke to feed into a blast furnace?"
                }
            ],

            chemical_equations: [
                {
                    scenario: "Airbag Deployment",
                    context: "Car airbags use sodium azide: 2NaN₃ → 2Na + 3N₂; N₂ inflates the bag",
                    application: "Need ~67 L of N₂ at 25°C to inflate airbag; n(N₂) = 67/24.8 ≈ 2.7 mol; n(NaN₃) = 2/3 × 2.7 × 2 ≈ 3.6 mol ≈ 234 g",
                    question: "Using stoichiometry, estimate what mass of sodium azide an airbag module contains"
                },
                {
                    scenario: "Carbon Dioxide in Fizzy Drinks",
                    context: "CO₂ dissolved in soft drinks under pressure; when opened, CO₂ escapes",
                    application: "Typical can: ~2.5 volumes of CO₂ = 2.5 × 0.33 L = 0.825 L CO₂ at STP; n = 0.825/22.4 ≈ 0.037 mol CO₂",
                    question: "How many moles of CO₂ escape when you open a fizzy drink can?"
                }
            ],

            limiting_reagent: [
                {
                    scenario: "Haber Process Industrial Scale",
                    context: "Industrial ammonia synthesis: N₂ + 3H₂ → 2NH₃; nitrogen and hydrogen fed in specific ratios",
                    application: "If H₂:N₂ ratio is not exactly 3:1, the deficient reactant limits NH₃ production; excess is costly and must be recycled",
                    question: "Why do industrial plants recycle unreacted starting materials in the Haber process?"
                },
                {
                    scenario: "Baking Analogy",
                    context: "Recipe: 2 eggs + 250g flour + 100g butter = 12 cookies; you have 6 eggs, 400g flour, 200g butter",
                    application: "Eggs: could make 6/2 × 12 = 36 cookies; Flour: 400/250 × 12 = 19.2 cookies; Butter: 200/100 × 12 = 24 cookies; Flour is limiting",
                    question: "How does the baking analogy help you understand why you need to compare in ratios rather than just amounts?"
                }
            ],

            percentage_yield: [
                {
                    scenario: "Gold Mining",
                    context: "Extracting gold from low-grade ore: 1 tonne of ore may yield only 5 g of gold",
                    application: "Very low percentage yield (mass fraction) but economically viable; stoichiometric yield of gold from ore minerals is defined by reaction stoichiometry",
                    question: "How does the concept of percentage yield apply to the economics of gold mining?"
                },
                {
                    scenario: "Pharmaceutical Manufacturing",
                    context: "Multi-step drug synthesis: each step has ~85% yield",
                    application: "3-step synthesis: overall yield = 0.85³ × 100% = 61.4%; 5-step: 0.85⁵ × 100% = 44.4%; each extra step significantly reduces overall yield",
                    question: "Why is it important to minimize the number of synthetic steps in drug manufacturing?"
                },
                {
                    scenario: "Green Chemistry",
                    context: "Atom economy of paracetamol synthesis has been improved from <5% to >80% through route redesign",
                    application: "Original synthesis generated 10 waste molecules for every 1 product molecule; redesigned route minimizes byproducts",
                    question: "What are the economic and environmental benefits of a synthesis with high atom economy?"
                }
            ],

            solution_stoichiometry: [
                {
                    scenario: "Water Fluoridation",
                    context: "Drinking water is fluoridated at ~0.7 ppm (mg/L) for dental health",
                    application: "c = 0.7 mg/L ÷ 19,000 mg/mol = 3.7 × 10⁻⁵ mol/L; very dilute solution; amounts controlled by solution stoichiometry",
                    question: "Why is it important to control the concentration of fluoride in drinking water very precisely?"
                },
                {
                    scenario: "Blood Alcohol Concentration",
                    context: "Legal BAC limit in UK: 80 mg/100 mL blood = 0.08% by mass ≈ 0.017 mol/L ethanol",
                    application: "Breathalyzer measures ethanol in breath; Henry's Law relates breath to blood concentration",
                    question: "How is molarity used to define legal drink-driving limits?"
                },
                {
                    scenario: "Vinegar Titration",
                    context: "Vinegar typically 4−8% acetic acid by mass; can be determined precisely by NaOH titration",
                    application: "CH₃COOH + NaOH → CH₃COONa + H₂O; 1:1 ratio; c(NaOH) × V(NaOH) = c(acid) × V(acid)",
                    question: "Design a titration experiment to determine the acidity of a sample of commercial vinegar"
                }
            ],

            gas_stoichiometry: [
                {
                    scenario: "Hydrogen Fuel Cells",
                    context: "Fuel cells: 2H₂ + O₂ → 2H₂O + electrical energy",
                    application: "To produce 1 mol H₂O, need 1 mol H₂ (2 g) + 0.5 mol O₂ (16 g); gas stoichiometry determines fuel storage requirements",
                    question: "How much hydrogen gas (at STP) is needed to power a fuel cell that produces 1 kWh of electricity? (ΔG ≈ 237 kJ/mol)"
                },
                {
                    scenario: "Submarine Oxygen Generation",
                    context: "Submarines generate O₂ by electrolysis: 2H₂O → 2H₂ + O₂",
                    application: "1 mol O₂ (22.4 L at STP) supports ~4 person-hours of breathing; stoichiometry determines electrolysis requirements",
                    question: "How much water must be electrolyzed per day to supply oxygen for a crew of 100 sailors?"
                },
                {
                    scenario: "Volcanic CO₂ Emissions",
                    context: "Volcanic eruptions release millions of tonnes of CO₂; affects global climate",
                    application: "CaCO₃(s) → CaO(s) + CO₂(g) in magma; mass of CaCO₃ decomposed calculable from volume of CO₂ released using ideal gas law",
                    question: "If a volcano releases 10⁹ m³ of CO₂ per day at 800°C and 1 atm, what mass of carbonate rock decomposed?"
                }
            ]
        };
    }

    // ========================================
    // ASSESSMENT RUBRICS
    // ========================================

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall stoichiometry facts, formulas, and definitions",
                    verbs: ["Define", "State", "Write", "List", "Recall", "Give the formula for"],
                    example: "State Avogadro's constant and its units"
                },
                understand: {
                    description: "Explain stoichiometric concepts and relationships",
                    verbs: ["Explain", "Describe", "Distinguish", "Predict", "Summarize", "Compare"],
                    example: "Explain why the limiting reagent determines the theoretical yield"
                },
                apply: {
                    description: "Use stoichiometry in calculation problems",
                    verbs: ["Calculate", "Determine", "Find", "Convert", "Balance", "Solve"],
                    example: "Calculate the mass of CO₂ produced when 5.00 g of CaCO₃ decomposes"
                },
                analyze: {
                    description: "Analyze multi-step problems; identify errors; interpret data",
                    verbs: ["Identify the limiting reagent", "Analyze the error", "Interpret the graph", "Deduce"],
                    example: "Given masses of two reactants, identify the limiting reagent and calculate theoretical yield"
                },
                evaluate: {
                    description: "Evaluate experimental results; assess accuracy; judge methods",
                    verbs: ["Evaluate", "Assess", "Justify", "Critique", "Compare methods"],
                    example: "Evaluate why the experimental percentage yield was lower than expected"
                },
                create: {
                    description: "Design experiments; plan syntheses; construct multi-step calculations",
                    verbs: ["Design", "Plan", "Construct", "Devise", "Develop"],
                    example: "Design an experiment to determine the concentration of iron(II) in a water sample by redox titration"
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can define mole and state Avogadro's number",
                        "Can calculate moles from mass using n = m/M",
                        "Struggles with multi-step stoichiometry",
                        "Cannot reliably identify limiting reagent"
                    ],
                    support: [
                        "Provide the four-step stoichiometry pathway explicitly",
                        "Practice n = m/M with varied examples",
                        "Use 'dozen' and 'recipe' analogies for mole and stoichiometry"
                    ]
                },
                developing: {
                    characteristics: [
                        "Completes mass-to-mass calculations with scaffolding",
                        "Can balance simple equations",
                        "Beginning to identify limiting reagent with guidance",
                        "May make unit errors (e.g., mL vs L)"
                    ],
                    support: [
                        "Dimensional analysis (unit-factor method) for all calculations",
                        "Practice limiting reagent problems systematically",
                        "Introduce titration calculations with step-by-step guidance"
                    ]
                },
                proficient: {
                    characteristics: [
                        "Solves limiting reagent problems independently",
                        "Calculates percentage yield and atom economy",
                        "Performs solution stoichiometry and dilution calculations",
                        "Interprets titration data to find concentration"
                    ],
                    support: [
                        "Introduce gas stoichiometry with ideal gas law",
                        "Multi-step stoichiometry problems",
                        "Error analysis of experimental data"
                    ]
                },
                expert: {
                    characteristics: [
                        "Solves complex multi-step stoichiometry including gas laws",
                        "Designs and interprets titration experiments",
                        "Evaluates and improves experimental yield",
                        "Applies green chemistry metrics (atom economy) critically"
                    ],
                    support: [
                        "Research-level problem-solving",
                        "Connect to industrial chemistry applications",
                        "Explore real and non-ideal gas behavior"
                    ]
                }
            }
        };

        this.assessmentQuestions = {
            mole_concept: {
                remember: "State the value of Avogadro's constant and its units",
                understand: "Explain why a mole of magnesium (24.3 g) and a mole of iron (55.8 g) contain the same number of atoms",
                apply: "Calculate the number of molecules in 3.00 g of water (H₂O)",
                analyze: "A compound contains 75.0% C and 25.0% H by mass. Analyze the data to determine its empirical formula",
                evaluate: "A student obtained an empirical formula of CH₃ for a gas with molar mass 30 g/mol. Evaluate their working and determine the molecular formula",
                create: "Design a procedure to determine the empirical formula of copper oxide experimentally by reduction with hydrogen"
            },
            chemical_equations: {
                remember: "Balance the equation: Fe + O₂ → Fe₂O₃",
                understand: "Explain why changing subscripts in a chemical formula to balance an equation is incorrect",
                apply: "Calculate the mass of iron(III) oxide formed when 10.0 g of iron reacts completely with oxygen",
                analyze: "4Al + 3O₂ → 2Al₂O₃. Analyze whether conservation of mass is satisfied if 54.0 g of Al reacts with 48.0 g of O₂",
                evaluate: "A student balanced Fe + O₂ → FeO₂ instead of 4Fe + 3O₂ → 2Fe₂O₃. Evaluate the error in their approach",
                create: "Design a two-step calculation to find the volume of CO₂ (at 25°C, 100 kPa) produced when 25.0 g of CaCO₃ decomposes"
            },
            limiting_reagent: {
                remember: "Define the term 'limiting reagent'",
                understand: "Explain why the mass of a limiting reagent determines the theoretical yield, not the excess reagent",
                apply: "2H₂ + O₂ → 2H₂O. If 8.0 g H₂ and 32.0 g O₂ react, identify the limiting reagent and calculate the theoretical yield of water",
                analyze: "N₂ + 3H₂ → 2NH₃. Analyze why using a 1:3 ratio of N₂:H₂ is optimal for industrial ammonia synthesis",
                evaluate: "A chemist adds 5.0 g Mg to 100 mL of 1.0 mol/L HCl. Evaluate which reactant limits the production of H₂",
                create: "Design an experiment using a graph of 'mass of product vs. mass of one reactant' to determine the stoichiometric ratio in an unknown reaction"
            },
            percentage_yield: {
                remember: "Write the formula for percentage yield",
                understand: "Explain three reasons why the actual yield in a reaction is typically less than the theoretical yield",
                apply: "The synthesis of ester from 10.0 g of alcohol gave 8.5 g of product. If the theoretical yield is 12.0 g, calculate the percentage yield",
                analyze: "Compare the atom economy of: (a) addition polymerization of ethene and (b) condensation polymerization to form nylon",
                evaluate: "A reaction has 90% atom economy and 80% percentage yield. Evaluate which of these two metrics has a greater impact on the overall waste produced",
                create: "Design a multi-step evaluation of the green chemistry credentials of aspirin synthesis, considering both percentage yield and atom economy"
            },
            solution_stoichiometry: {
                remember: "Write the formula relating molarity, moles, and volume",
                understand: "Explain why the moles of solute are conserved during dilution even though concentration changes",
                apply: "25.00 mL of 0.200 mol/L NaOH is titrated with 0.150 mol/L HCl. Calculate the volume of HCl needed to reach the equivalence point",
                analyze: "In a titration, a student obtained titres of 24.55, 24.60, 24.48, and 24.95 mL. Analyze which titres are concordant and calculate the mean",
                evaluate: "Evaluate whether phenolphthalein or methyl orange is the better indicator for the titration of ethanoic acid (weak acid) with NaOH (strong base)",
                create: "Design a back-titration procedure to determine the percentage purity of an impure sample of chalk (CaCO₃)"
            },
            gas_stoichiometry: {
                remember: "State the ideal gas law equation and define each symbol",
                understand: "Explain why the temperature must be in Kelvin when using the ideal gas law",
                apply: "Calculate the volume occupied by 0.500 mol of CO₂ at 27°C and 100 kPa",
                analyze: "When collecting gas over water at 25°C (P(H₂O) = 3.17 kPa) and atmospheric pressure 101.3 kPa, analyze why a correction must be applied to find the actual pressure of the collected gas",
                evaluate: "A student used 22.4 L/mol as the molar volume at 25°C. Evaluate this assumption and calculate the error it introduces",
                create: "Design an experiment to measure the molar volume of CO₂ produced by the reaction of excess HCl with a known mass of CaCO₃, including how you would correct for water vapor"
            }
        };
    }

    // ========================================
    // TOPIC HANDLERS
    // ========================================

    handleMoleConcept(problem) {
        const content = {
            topic: "The Mole Concept",
            category: 'stoichiometry_foundation',
            summary: "The mole is the fundamental unit for counting particles in chemistry. One mole contains exactly 6.022 × 10²³ particles (Avogadro's number). The molar mass in g/mol equals the relative atomic or molecular mass numerically. The central skill is converting between mass (g), amount (mol), and number of particles using n = m/M and N = n × Nₐ.",
            keyFormulas: {
                molesFromMass: "n = m / M",
                massFromMoles: "m = n × M",
                particlesFromMoles: "N = n × Nₐ",
                molesFromParticles: "n = N / Nₐ",
                volumeAtSTP: "V = n × 22.4 (at 0°C, 100 kPa)",
                volumeAtSATP: "V = n × 24.8 (at 25°C, 100 kPa)",
                percentComposition: "% element = (n × Ar / Mr) × 100%",
                molesFromVolume: "n = V / 22.4 (gas at STP)"
            },
            constants: {
                avogadro: "Nₐ = 6.022 × 10²³ mol⁻¹",
                STP: "STP: 0°C (273.15 K), 100 kPa; molar volume = 22.4 L/mol",
                SATP: "SATP: 25°C (298.15 K), 100 kPa; molar volume = 24.8 L/mol"
            },
            molarMassCalculations: {
                method: "Sum of (number of atoms × relative atomic mass) for all atoms in formula",
                examples: [
                    {formula: "H₂O", calculation: "2(1.0) + 16.0 = 18.0 g/mol"},
                    {formula: "NaCl", calculation: "23.0 + 35.5 = 58.5 g/mol"},
                    {formula: "Ca(OH)₂", calculation: "40.1 + 2(16.0 + 1.0) = 40.1 + 34.0 = 74.1 g/mol"},
                    {formula: "Al₂(SO₄)₃", calculation: "2(27.0) + 3(32.1 + 4×16.0) = 54.0 + 3(96.1) = 342.3 g/mol"},
                    {formula: "C₆H₁₂O₆", calculation: "6(12.0) + 12(1.0) + 6(16.0) = 72 + 12 + 96 = 180.0 g/mol"}
                ]
            },
            empiricalFormulaProcedure: {
                steps: [
                    "1. From % composition, take 100 g sample: mass of each element = % value",
                    "2. Convert each mass to moles: n = mass / Ar",
                    "3. Divide all mole values by the smallest",
                    "4. If ratios are not whole numbers, multiply by smallest integer to give whole numbers",
                    "   (e.g., ratio 1.5: multiply all by 2; ratio 1.33: multiply all by 3; ratio 1.25: multiply by 4)",
                    "5. Write empirical formula with these whole-number subscripts"
                ],
                molecularFormula: "n = Molar mass / Empirical formula mass; Molecular formula = (Empirical formula)ₙ"
            },
            workedExamples: this.lessons.mole_concept.workedExamples,
            commonMisconceptions: this.commonMisconceptions.mole_concept,
            contextualScenarios: this.contextualScenarios.mole_concept,
            relatedExperiments: this.stoichiometryTopics.mole_concept.relatedExperiments || [],
            assessmentQuestions: this.assessmentQuestions.mole_concept,
            metacognitivePrompts: {
                before: this.metacognitivePrompts.beforeLearning.map(p => p.replace('{topic}', 'the mole concept')),
                during: this.metacognitivePrompts.duringLearning,
                after: this.metacognitivePrompts.afterLearning.map(p => p.replace('{topic}', 'the mole concept')),
                problemSolving: this.metacognitivePrompts.problemSolving
            },
            homologousCalculations: {
                patternTable: [
                    {substance: "H₂O", M: "18.0", n_from_18g: "1.00", n_from_36g: "2.00", n_from_9g: "0.500"},
                    {substance: "NaCl", M: "58.5", n_from_58_5g: "1.00", n_from_117g: "2.00", n_from_29_25g: "0.500"},
                    {substance: "CO₂", M: "44.0", n_from_44g: "1.00", n_from_22g: "0.500", n_from_4_4g: "0.100"},
                    {substance: "CaCO₃", M: "100.0", n_from_100g: "1.00", n_from_50g: "0.500", n_from_10g: "0.100"}
                ]
            },
            practiceProblems: [
                {
                    level: "Basic",
                    problem: "Calculate the molar mass of ammonium sulfate, (NH₄)₂SO₄",
                    answer: "M = 2(14 + 4) + 32 + 4(16) = 2(18) + 32 + 64 = 36 + 32 + 64 = 132.0 g/mol"
                },
                {
                    level: "Basic",
                    problem: "How many moles in 10.0 g of NaOH?",
                    answer: "n = 10.0 / 40.0 = 0.250 mol"
                },
                {
                    level: "Intermediate",
                    problem: "A sample contains 3.01 × 10²³ molecules of glucose (C₆H₁₂O₆). What is its mass?",
                    answer: "n = 3.01×10²³ / 6.022×10²³ = 0.500 mol; m = 0.500 × 180 = 90.0 g"
                },
                {
                    level: "Advanced",
                    problem: "A compound is 52.2% C, 13.0% H, 34.8% O by mass and has Mr = 46. Find its molecular formula.",
                    answer: "Empirical: C: 52.2/12=4.35, H: 13.0/1=13.0, O: 34.8/16=2.175; divide by 2.175: C: 2, H: 5.98≈6, O: 1 → empirical CH₃O (M=31); n=46/31≈1.5? Check: 52.2/12=4.35 not divisible by same... actually C₂H₅OH: %C=52.2%,H=13.0%,O=34.8% → empirical C₂H₆O, molecular C₂H₆O = ethanol (M=46) ✓"
                }
            ]
        };

        return content;
    }

    handleChemicalEquations(problem) {
        const content = {
            topic: "Chemical Equations and Mole Ratios",
            category: 'stoichiometry_foundation',
            summary: "Balanced chemical equations represent the quantitative relationships in chemical reactions. Coefficients give mole ratios. The four-step stoichiometry pathway (mass A → moles A → moles B → mass B) using the mole ratio from the balanced equation allows calculation of any stoichiometric quantity from any other.",
            lawOfConservation: {
                statement: "In any chemical reaction, matter is neither created nor destroyed. The total mass of reactants equals the total mass of products.",
                atomBalance: "Number of atoms of each element must be equal on both sides of the balanced equation",
                chargeBalance: "In ionic equations, total charge must also be equal on both sides"
            },
            balancingRules: this.lessons.chemical_equations.balancingMethods.inspection,
            stoichiometryPathway: {
                title: "The Four-Step Stoichiometry Pathway",
                steps: [
                    {step: 1, action: "Write and balance the chemical equation", detail: "Ensure all atoms are balanced; identify the mole ratio between substances of interest"},
                    {step: 2, action: "Convert known mass to moles", detail: "n(A) = m(A) / M(A); use molar mass from periodic table atomic masses"},
                    {step: 3, action: "Apply mole ratio", detail: "n(B) = n(A) × [coefficient of B / coefficient of A] from balanced equation"},
                    {step: 4, action: "Convert moles to required units", detail: "mass: m = n × M; particles: N = n × Nₐ; gas volume: V = n × 22.4 (STP) or PV=nRT"}
                ],
                diagram: "m(A) →[÷M(A)]→ n(A) →[×ratio]→ n(B) →[×M(B)]→ m(B)"
            },
            typesOfReactions: this.lessons.chemical_equations.typesOfReactions,
            workedExamples: this.lessons.chemical_equations.workedExamples,
            balancingExamples: [
                {
                    unbalanced: "Al + HCl → AlCl₃ + H₂",
                    balanced: "2Al + 6HCl → 2AlCl₃ + 3H₂",
                    checkAtoms: "Al: 2|2 ✓, H: 6|6 ✓, Cl: 6|6 ✓"
                },
                {
                    unbalanced: "C₃H₈ + O₂ → CO₂ + H₂O",
                    balanced: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
                    checkAtoms: "C: 3|3 ✓, H: 8|8 ✓, O: 10|10 ✓"
                },
                {
                    unbalanced: "KMnO₄ + HCl → KCl + MnCl₂ + H₂O + Cl₂",
                    balanced: "2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 8H₂O + 5Cl₂",
                    checkAtoms: "K: 2|2 ✓, Mn: 2|2 ✓, O: 8|8 ✓, H: 16|16 ✓, Cl: 16|16 ✓",
                    note: "This is a redox equation — half-equation method is more systematic for complex cases"
                }
            ],
            moleRatioInterpretations: {
                example: "2H₂ + O₂ → 2H₂O",
                interpretations: [
                    "2 mol H₂ reacts with 1 mol O₂ to give 2 mol H₂O",
                    "4 g H₂ reacts with 32 g O₂ to give 36 g H₂O (mass conserved)",
                    "2 volumes H₂ reacts with 1 volume O₂ to give 2 volumes H₂O (gas volumes at same T, P)",
                    "2 × 6.022×10²³ molecules H₂ react with 6.022×10²³ molecules O₂ to give 2 × 6.022×10²³ molecules H₂O"
                ]
            },
            keyFormulas: {
                molesFromMass: "n = m / M",
                moleRatio: "n(B) = n(A) × [coeff(B) / coeff(A)]",
                massFromMoles: "m = n × M",
                conservationCheck: "Σ masses reactants = Σ masses products"
            },
            commonMisconceptions: this.commonMisconceptions.chemical_equations,
            contextualScenarios: this.contextualScenarios.chemical_equations,
            practiceProblems: [
                {
                    level: "Basic — Balancing",
                    problem: "Balance: Ca + H₂O → Ca(OH)₂ + H₂",
                    answer: "Ca + 2H₂O → Ca(OH)₂ + H₂; Ca: 1|1 ✓, H: 4|4 ✓, O: 2|2 ✓"
                },
                {
                    level: "Intermediate — Mass-to-mass",
                    problem: "2Mg + O₂ → 2MgO. What mass of MgO forms when 12.0 g Mg burns?",
                    answer: "n(Mg) = 12.0/24.3 = 0.494 mol; n(MgO) = 0.494 × (2/2) = 0.494 mol; m(MgO) = 0.494 × 40.3 = 19.9 g"
                },
                {
                    level: "Advanced — Reverse calculation",
                    problem: "CaCO₃ → CaO + CO₂. What mass of CaCO₃ is needed to produce 28.0 g of CaO?",
                    answer: "n(CaO) = 28.0/56.1 = 0.499 mol; n(CaCO₃) = 0.499 × (1/1) = 0.499 mol; m(CaCO₃) = 0.499 × 100.1 = 49.9 g ≈ 50.0 g"
                }
            ],
            metacognitivePrompts: {
                before: this.metacognitivePrompts.beforeLearning.map(p => p.replace('{topic}', 'chemical equations and stoichiometry')),
                problemSolving: this.metacognitivePrompts.problemSolving
            },
            relatedExperiments: this.stoichiometryTopics.chemical_equations.relatedExperiments || [],
            assessmentQuestions: this.assessmentQuestions.chemical_equations
        };

        return content;
    }

    handleLimitingReagent(problem) {
        const content = {
            topic: "Limiting Reagent and Theoretical Yield",
            category: 'stoichiometry_calculations',
            summary: "The limiting reagent is the reactant consumed first in a chemical reaction; it determines the maximum (theoretical) yield. The excess reagent is present in more than the stoichiometric amount; some remains unreacted. To identify the limiting reagent, convert all reactant masses to moles, then for each reactant calculate how many moles of product it could produce—the reactant giving the least product is the limiting reagent.",
            keyDefinitions: this.lessons.limiting_reagent.keyDefinitions,
            identificationMethod: this.lessons.limiting_reagent.identificationMethods.methodA,
            stepByStepProcedure: {
                title: "Systematic 5-Step Limiting Reagent Method",
                steps: [
                    "Step 1: Write and balance the chemical equation",
                    "Step 2: Convert masses of ALL reactants to moles: n = m/M",
                    "Step 3: For EACH reactant, calculate moles of product it would produce (using mole ratio)",
                    "Step 4: Identify the reactant that produces the LEAST product → this is the LIMITING REAGENT",
                    "Step 5: Calculate theoretical yield using limiting reagent moles × mole ratio × molar mass of product"
                ],
                excessCalculation: [
                    "Moles of excess reagent consumed = moles of limiting reagent × (coeff excess / coeff limiting)",
                    "Moles of excess reagent remaining = initial moles − moles consumed",
                    "Mass of excess remaining = moles remaining × M(excess reagent)"
                ]
            },
            workedExamples: this.lessons.limiting_reagent.workedExamples,
            graphicalRepresentation: {
                title: "Limiting Reagent Graph",
                description: "Plot mass of product vs mass of one reactant (keeping the other constant)",
                shape: "Two straight line segments meeting at a kink (stoichiometric point)",
                regionA: "Before kink: plotted reactant is limiting; product increases linearly with its mass",
                regionB: "After kink: other reactant (fixed amount) is limiting; product mass is constant (plateau)",
                stoichiometricPoint: "At the kink: both reactants exactly consumed; maximum product yield"
            },
            practiceProblems: [
                {
                    level: "Basic",
                    problem: "Fe + S → FeS. Mix 5.6 g Fe with 4.8 g S. Identify the limiting reagent.",
                    answer: "n(Fe) = 5.6/55.8 = 0.100 mol; n(S) = 4.8/32.1 = 0.150 mol; mole ratio 1:1; Fe is limiting (fewer moles, 1:1 ratio); theoretical FeS = 0.100 mol × 87.9 = 8.79 g"
                },
                {
                    level: "Intermediate",
                    problem: "2Al + 3Cl₂ → 2AlCl₃. React 10.0 g Al with 20.0 g Cl₂. Find: (a) limiting reagent, (b) theoretical yield AlCl₃, (c) mass of excess reagent remaining",
                    answer: "(a) n(Al)=10/27=0.370 mol → AlCl₃: 0.370 mol; n(Cl₂)=20/71=0.282 mol → AlCl₃: 0.282×(2/3)=0.188 mol; Cl₂ limits. (b) 0.188×133.5=25.1 g. (c) Al consumed=0.282×(2/3)=0.188 mol; Al excess=0.370-0.188=0.182 mol=4.91 g Al remaining"
                },
                {
                    level: "Advanced",
                    problem: "N₂ + 3H₂ → 2NH₃. A reactor has 2.00 kg N₂ and 0.600 kg H₂. Find the theoretical yield of NH₃ and the mass of excess reactant",
                    answer: "n(N₂)=2000/28=71.4 mol → NH₃: 142.9 mol; n(H₂)=600/2=300 mol → NH₃: 300×(2/3)=200 mol; N₂ limits; m(NH₃)=142.9×17=2429 g=2.43 kg; H₂ consumed=71.4×3=214.3 mol; excess H₂=300-214.3=85.7 mol=171 g"
                }
            ],
            contextualScenarios: this.contextualScenarios.limiting_reagent,
            commonMisconceptions: this.commonMisconceptions.limiting_reagent,
            relatedExperiments: this.stoichiometryTopics.limiting_reagent.relatedExperiments || [],
            assessmentQuestions: this.assessmentQuestions.limiting_reagent,
            metacognitivePrompts: {
                before: this.metacognitivePrompts.beforeLearning.map(p => p.replace('{topic}', 'limiting reagent')),
                problemSolving: this.metacognitivePrompts.problemSolving
            }
        };

        return content;
    }

    handlePercentageYield(problem) {
        const content = {
            topic: "Percentage Yield and Atom Economy",
            category: 'stoichiometry_calculations',
            summary: "Percentage yield measures how much of the theoretical (maximum possible) product is actually obtained in practice. It is always ≤ 100% due to incomplete reaction, side reactions, and purification losses. Atom economy (a green chemistry metric) measures what fraction of reactant atoms end up in the desired product, regardless of yield.",
            keyFormulas: {
                percentageYield: "% yield = (actual yield / theoretical yield) × 100%",
                atomEconomy: "Atom economy = [M(desired product) / ΣM(all products)] × 100%",
                theoreticalYield: "Calculated from limiting reagent via balanced equation",
                findingActualYield: "Actual yield = theoretical yield × (% yield / 100)"
            },
            keyDefinitions: this.lessons.percentage_yield.keyDefinitions,
            reasonsForLowYield: this.lessons.percentage_yield.reasonsForLowYield,
            atomEconomy: {
                definition: "Percentage of total atomic mass in reactants that becomes the desired product",
                formula: "Atom economy = [molar mass of desired product / sum of molar masses of ALL products] × 100%",
                importance: [
                    "Economic: high atom economy reduces raw material costs",
                    "Environmental: less waste produced; lower disposal costs",
                    "Industrial: Pfizer, GSK and other pharmaceutical companies use atom economy to evaluate synthetic routes",
                    "Green Chemistry Principle 2 (Anastas & Warner): design syntheses for maximum atom economy"
                ],
                examples: this.lessons.percentage_yield.atomEconomyExamples
            },
            comparisonTable: {
                title: "Percentage Yield vs Atom Economy: Key Differences",
                headers: ["Feature", "Percentage Yield", "Atom Economy"],
                rows: [
                    ["Measures", "Efficiency of actual experiment", "Efficiency of balanced reaction as written"],
                    ["Based on", "Experimental actual yield vs theoretical", "Molar masses from balanced equation only"],
                    ["Can equal 100%?", "Theoretically yes, practically very rarely", "Yes, for reactions with one product"],
                    ["Changed by", "Reaction conditions, purification, skill", "Choice of reaction pathway only"],
                    ["Example of 100%", "Virtually impossible in complex synthesis", "A + B → AB (no byproducts)"]
                ]
            },
            workedExamples: this.lessons.percentage_yield.workedExamples,
            practiceProblems: [
                {
                    level: "Basic — % yield",
                    problem: "Fe₂O₃ + 3CO → 2Fe + 3CO₂. Starting with 160 g Fe₂O₃, 89 g Fe was obtained. Calculate % yield.",
                    answer: "n(Fe₂O₃)=160/160=1.00 mol; n(Fe) theoretical=2.00 mol; m(Fe)=2.00×55.8=111.6 g; %yield=89/111.6×100=79.8%"
                },
                {
                    level: "Intermediate — Atom economy",
                    problem: "Calculate the atom economy for production of ethanol by fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
                    answer: "M(C₂H₅OH)=46; 2 mol product; M(CO₂)=44; 2 mol product; AE = (2×46)/(2×46 + 2×44) × 100 = 92/180 × 100 = 51.1%"
                },
                {
                    level: "Advanced — Combined",
                    problem: "A synthesis has atom economy 65% and is performed at 78% yield. If 1.00 mol of starting material (M = 120 g/mol) is used, what mass of waste is produced in total?",
                    answer: "Mass in = 1.00 mol × 120 g/mol = 120 g starting material; other reagents also contribute to waste. From AE: 65% of product mass is desired product; 35% is co-products (waste). At 78% yield: actual desired product = 0.78 × theoretical. Full analysis requires knowing all reagents and products."
                }
            ],
            contextualScenarios: this.contextualScenarios.percentage_yield,
            commonMisconceptions: this.commonMisconceptions.percentage_yield,
            relatedExperiments: this.stoichiometryTopics.percentage_yield.relatedExperiments || [],
            assessmentQuestions: this.assessmentQuestions.percentage_yield,
            metacognitivePrompts: {
                before: this.metacognitivePrompts.beforeLearning.map(p => p.replace('{topic}', 'percentage yield and atom economy')),
                problemSolving: this.metacognitivePrompts.problemSolving
            }
        };

        return content;
    }

    handleSolutionStoichiometry(problem) {
        const content = {
            topic: "Solution Stoichiometry and Titration",
            category: 'stoichiometry_applications',
            summary: "Solution stoichiometry applies the mole concept to reactions in solution. Molarity (c = n/V, in mol/L) is the key concentration unit. In titration, measured volumes of solutions of known and unknown concentration react at the stoichiometric ratio given by the balanced equation, allowing precise determination of concentration. Dilution conserves moles: c₁V₁ = c₂V₂.",
            keyFormulas: {
                molarity: "c = n / V (V in litres); units: mol/L or mol dm⁻³",
                molesInSolution: "n = c × V",
                dilution: "c₁V₁ = c₂V₂ (moles conserved)",
                titrationEquivalencePoint: "n(acid) × stoich ratio = n(base) at equivalence point",
                massOfSolute: "m = c × V × M",
                preparingStandardSolution: "n = c_target × V_target; m = n × M"
            },
            keyDefinitions: this.lessons.solution_stoichiometry.keyDefinitions,
            concentrationUnits: {
                molarity: "mol/L or mol/dm³: moles per litre of solution (most common in chemistry)",
                molality: "mol/kg: moles per kg of SOLVENT (used in colligative properties; independent of temperature)",
                percentByMass: "% m/m: grams solute per 100 g solution",
                percentByVolume: "% v/v: mL solute per 100 mL solution",
                ppm: "parts per million: mg/L or mg/kg; used for very dilute solutions (environmental, trace analysis)"
            },
            titrationTechnique: {
                procedure: this.lessons.solution_stoichiometry.titrationProcedure,
                indicators: this.lessons.solution_stoichiometry.indicators,
                goodTechnique: [
                    "Always rinse burette with titrant (not water) before filling",
                    "Remove air bubble from burette tip before starting",
                    "Use white tile under flask to see color change clearly",
                    "Add half-drop of titrant near end point (touch drop to inside of flask, then rinse)",
                    "Record burette readings to 2 decimal places (0.01 mL precision)",
                    "Average only concordant titres (within ±0.10 mL)"
                ]
            },
            workedExamples: this.lessons.solution_stoichiometry.workedExamples,
            titrationCalculationTypes: {
                simple1to1: "HCl + NaOH → NaCl + H₂O: c(acid)V(acid) = c(base)V(base)",
                non1to1: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O: n(H₂SO₄) = n(NaOH)/2; c(H₂SO₄)×V(H₂SO₄) = c(NaOH)×V(NaOH)/2",
                diprotic: "For diprotic acid (H₂SO₄): n(H₂SO₄) = n(NaOH)/2",
                backTitration: "Excess reagent added → unreacted excess titrated; amount reacted = initial − remaining"
            },
            practiceProblems: [
                {
                    level: "Basic — Molarity",
                    problem: "What is the molarity of a solution containing 5.85 g of NaCl in 500.0 mL?",
                    answer: "M(NaCl) = 58.5 g/mol; n = 5.85/58.5 = 0.100 mol; c = 0.100/0.5000 = 0.200 mol/L"
                },
                {
                    level: "Intermediate — Titration 1:1",
                    problem: "20.00 mL of H₂SO₄ requires 30.00 mL of 0.200 mol/L NaOH. H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Find c(H₂SO₄).",
                    answer: "n(NaOH) = 0.200 × 0.0300 = 0.00600 mol; n(H₂SO₄) = 0.00600/2 = 0.00300 mol; c(H₂SO₄) = 0.00300/0.0200 = 0.150 mol/L"
                },
                {
                    level: "Advanced — Dilution then Titration",
                    problem: "25 mL of concentrated HCl is diluted to 1.000 L. A 25.00 mL aliquot of the diluted acid requires 22.40 mL of 0.100 mol/L NaOH. Find the molarity of the original concentrated HCl.",
                    answer: "n(NaOH) = 0.100 × 0.02240 = 0.00224 mol = n(HCl) in aliquot; c(diluted) = 0.00224/0.02500 = 0.0896 mol/L; Using c₁V₁ = c₂V₂: c₁ × 0.025 = 0.0896 × 1.000; c₁ = 3.58 mol/L (concentrated HCl)"
                }
            ],
            contextualScenarios: this.contextualScenarios.solution_stoichiometry,
            commonMisconceptions: this.commonMisconceptions.solution_stoichiometry,
            relatedExperiments: this.stoichiometryTopics.solution_stoichiometry.relatedExperiments || [],
            assessmentQuestions: this.assessmentQuestions.solution_stoichiometry,
            metacognitivePrompts: {
                before: this.metacognitivePrompts.beforeLearning.map(p => p.replace('{topic}', 'solution stoichiometry and titration')),
                titrationInterpretation: this.metacognitivePrompts.titrationInterpretation
            }
        };

        return content;
    }

    handleGasStoichiometry(problem) {
        const content = {
            topic: "Gas Stoichiometry and the Ideal Gas Law",
            category: 'stoichiometry_applications',
            summary: "Gas stoichiometry connects the ideal gas law (PV = nRT) with balanced equations. At the same temperature and pressure, equal volumes of gases contain equal numbers of molecules (Avogadro's Law), so volume ratios equal mole ratios for gaseous reactants and products. The ideal gas law allows calculation of moles from measurable P, V, T—bridging the gap between gas measurements and stoichiometry.",
            keyFormulas: {
                idealGasLaw: "PV = nRT",
                moles: "n = PV / RT",
                volume: "V = nRT / P",
                pressure: "P = nRT / V",
                combinedGasLaw: "P₁V₁/T₁ = P₂V₂/T₂ (fixed amount of gas)",
                molarVolumeSTP: "V_m = 22.4 L/mol at 0°C, 100 kPa",
                molarVolumeSATP: "V_m = 24.8 L/mol at 25°C, 100 kPa",
                molarMass: "M = mRT/PV (where m = mass in grams)",
                dalton: "P_total = P₁ + P₂ + ... + Pₙ",
                partialPressure: "Pᵢ = χᵢ × P_total (χ = mole fraction)"
            },
            constants: {
                R_SI: "R = 8.314 J·mol⁻¹·K⁻¹ = 8.314 Pa·m³·mol⁻¹·K⁻¹",
                R_atm: "R = 0.08206 L·atm·mol⁻¹·K⁻¹",
                R_kPa: "R = 8.314 L·kPa·mol⁻¹·K⁻¹ (use when P in kPa, V in L)",
                temperatureConversion: "T(K) = T(°C) + 273.15 — ALWAYS convert to Kelvin!"
            },
            keyDefinitions: this.lessons.gas_stoichiometry.keyDefinitions,
            pressureUnits: this.lessons.gas_stoichiometry.pressureUnits,
            avogadroLaw: {
                statement: "At constant temperature and pressure, the volume of a gas is directly proportional to the number of moles",
                implication: "For reactions involving only gases at constant T and P: volume ratios = mole ratios from balanced equation",
                example: "2H₂(g) + O₂(g) → 2H₂O(g): 2 volumes H₂ + 1 volume O₂ → 2 volumes H₂O (at same T, P)"
            },
            gasStoichiometryPathway: {
                title: "Extended Stoichiometry Pathway for Gases",
                path: "mass(A) →[÷M]→ n(A) →[mole ratio]→ n(B gas) →[×RT/P]→ V(B) at given T, P",
                alternative: "If gas is at STP: n(B) × 22.4 L/mol = V(B)",
                alternative2: "If gas is at SATP: n(B) × 24.8 L/mol = V(B)"
            },
            workedExamples: this.lessons.gas_stoichiometry.workedExamples,
            practiceProblems: [
                {
                    level: "Basic — Molar volume",
                    problem: "What volume does 3.50 mol of CO₂ occupy at STP?",
                    answer: "V = 3.50 mol × 22.4 L/mol = 78.4 L"
                },
                {
                    level: "Intermediate — Ideal Gas Law",
                    problem: "A 2.50 g sample of N₂ is in a 5.00 L container at 25°C. Calculate the pressure in kPa.",
                    answer: "n(N₂) = 2.50/28.0 = 0.0893 mol; P = nRT/V = (0.0893 × 8.314 × 298) / 5.00 = 44.3 kPa"
                },
                {
                    level: "Intermediate — Gas stoichiometry",
                    problem: "CH₄ + 2O₂ → CO₂ + 2H₂O. What volume of O₂ (at STP) is needed to burn 8.00 g of CH₄?",
                    answer: "n(CH₄) = 8.00/16.0 = 0.500 mol; n(O₂) = 0.500 × 2 = 1.00 mol; V(O₂) = 1.00 × 22.4 = 22.4 L"
                },
                {
                    level: "Advanced — Dalton's law and collection over water",
                    problem: "H₂ is collected over water at 20°C. Total pressure = 101.3 kPa; P(H₂O) at 20°C = 2.34 kPa. Volume collected = 150.0 mL. Calculate moles of H₂.",
                    answer: "P(H₂) = 101.3 − 2.34 = 98.96 kPa; n = PV/RT = (98,960 × 0.000150) / (8.314 × 293) = 14.84 / 2436 = 6.09 × 10⁻³ mol"
                }
            ],
            realGasDeviations: this.lessons.gas_stoichiometry.realGasDeviations,
            contextualScenarios: this.contextualScenarios.gas_stoichiometry,
            commonMisconceptions: this.commonMisconceptions.gas_stoichiometry,
            relatedExperiments: this.stoichiometryTopics.gas_stoichiometry.relatedExperiments || [],
            assessmentQuestions: this.assessmentQuestions.gas_stoichiometry,
            metacognitivePrompts: {
                before: this.metacognitivePrompts.beforeLearning.map(p => p.replace('{topic}', 'gas stoichiometry and the ideal gas law')),
                problemSolving: this.metacognitivePrompts.problemSolving
            }
        };

        return content;
    }

    // ========================================
    // TOPIC DISPATCHER
    // ========================================

    handleTopic(query) {
        const queryLower = (query || '').toLowerCase();

        for (const [topicId, topic] of Object.entries(this.stoichiometryTopics)) {
            if (topic.patterns.some(pattern => pattern.test(queryLower))) {
                const content = topic.handler(query);
                this.currentContent = content;
                return content;
            }
        }

        // Default: return overview
        return this.handleOverview(query);
    }

    handleOverview(query) {
        return {
            topic: "Stoichiometry Overview",
            category: 'overview',
            summary: "Stoichiometry is the quantitative study of chemical reactions, connecting the masses, volumes, and concentrations of substances using the mole concept and balanced equations.",
            topics: Object.entries(this.stoichiometryTopics).map(([id, topic]) => ({
                id,
                name: topic.name,
                description: topic.description,
                difficulty: topic.difficulty,
                prerequisites: topic.prerequisites
            })),
            learningPath: [
                "1. Mole Concept → understand the unit of amount and molar mass",
                "2. Chemical Equations → balance equations and use mole ratios",
                "3. Limiting Reagent → identify which reactant runs out first",
                "4. Percentage Yield → evaluate reaction efficiency and atom economy",
                "5. Solution Stoichiometry → apply to reactions in solution; titration",
                "6. Gas Stoichiometry → apply ideal gas law; reactions involving gases"
            ],
            coreSkills: [
                "n = m/M (mass to moles)",
                "Mole ratio from balanced equation",
                "c = n/V (molarity)",
                "PV = nRT (ideal gas law)",
                "% yield = actual/theoretical × 100"
            ]
        };
    }

    // ========================================
    // UTILITY METHODS
    // ========================================

    getExperiment(experimentId) {
        return this.stoichiometryExperiments[experimentId] || null;
    }

    getAllExperiments() {
        return Object.entries(this.stoichiometryExperiments).map(([id, exp]) => ({
            id,
            name: exp.name,
            category: exp.category,
            relatedTopics: exp.relatedTopics
        }));
    }

    getMisconceptions(topicId) {
        return this.commonMisconceptions[topicId] || {};
    }

    getAssessmentQuestions(topicId, level = null) {
        const questions = this.assessmentQuestions[topicId] || {};
        if (level) return questions[level] || null;
        return questions;
    }

    getLearnerLevelSupport(level) {
        return this.assessmentRubrics.understandingLevels[level] || null;
    }

    getContextualScenarios(topicId) {
        return this.contextualScenarios[topicId] || [];
    }

    getMetacognitivePrompts(phase, topic = '') {
        const prompts = this.metacognitivePrompts[phase] || [];
        return prompts.map(p => p.replace('{topic}', topic));
    }

    updateLearnerProfile(topicId, performance) {
        const { score, difficulty } = performance;
        if (score >= 0.8) {
            if (!this.learnerProfile.masteredTopics.includes(topicId)) {
                this.learnerProfile.masteredTopics.push(topicId);
            }
            this.learnerProfile.strugglingTopics = this.learnerProfile.strugglingTopics.filter(t => t !== topicId);
        } else if (score < 0.5) {
            if (!this.learnerProfile.strugglingTopics.includes(topicId)) {
                this.learnerProfile.strugglingTopics.push(topicId);
            }
        }
        this.learnerProfile.progressHistory.push({
            topicId,
            score,
            difficulty,
            timestamp: new Date().toISOString()
        });
    }

    getAdaptiveRecommendation() {
        if (this.learnerProfile.strugglingTopics.length > 0) {
            const struggling = this.learnerProfile.strugglingTopics[0];
            const topic = this.stoichiometryTopics[struggling];
            return {
                recommendation: 'review',
                topic: struggling,
                name: topic?.name,
                support: this.assessmentRubrics.understandingLevels.developing.support,
                misconceptions: this.commonMisconceptions[struggling]
            };
        }

        const mastered = new Set(this.learnerProfile.masteredTopics);
        const topicOrder = ['mole_concept', 'chemical_equations', 'limiting_reagent', 'percentage_yield', 'solution_stoichiometry', 'gas_stoichiometry'];

        for (const topicId of topicOrder) {
            if (!mastered.has(topicId)) {
                const topic = this.stoichiometryTopics[topicId];
                const prereqsMet = (topic.prerequisites || []).every(p =>
                    mastered.has(p) || !this.stoichiometryTopics[p]
                );
                if (prereqsMet) {
                    return {
                        recommendation: 'next_topic',
                        topic: topicId,
                        name: topic.name,
                        difficulty: topic.difficulty
                    };
                }
            }
        }

        return {
            recommendation: 'complete',
            message: 'All stoichiometry topics mastered! Consider extending to thermochemistry or equilibrium.'
        };
    }
}
