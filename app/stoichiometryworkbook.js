// Enhanced Stoichiometry Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedStoichiometryMathematicalWorkbook {
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

        this.chemSymbols = this.initializeChemSymbols();
        this.setThemeColors();
        this.initializeStoichiometrySolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
        this.initializePeriodicTable();
    }

    initializePeriodicTable() {
        // Common elements with their atomic masses
        this.periodicTable = {
            'H': { name: 'Hydrogen', mass: 1.008, valence: [1] },
            'C': { name: 'Carbon', mass: 12.011, valence: [4] },
            'N': { name: 'Nitrogen', mass: 14.007, valence: [3, 5] },
            'O': { name: 'Oxygen', mass: 15.999, valence: [2] },
            'Na': { name: 'Sodium', mass: 22.990, valence: [1] },
            'Mg': { name: 'Magnesium', mass: 24.305, valence: [2] },
            'Al': { name: 'Aluminum', mass: 26.982, valence: [3] },
            'Si': { name: 'Silicon', mass: 28.085, valence: [4] },
            'P': { name: 'Phosphorus', mass: 30.974, valence: [3, 5] },
            'S': { name: 'Sulfur', mass: 32.06, valence: [2, 4, 6] },
            'Cl': { name: 'Chlorine', mass: 35.45, valence: [1, 3, 5, 7] },
            'K': { name: 'Potassium', mass: 39.098, valence: [1] },
            'Ca': { name: 'Calcium', mass: 40.078, valence: [2] },
            'Fe': { name: 'Iron', mass: 55.845, valence: [2, 3] },
            'Cu': { name: 'Copper', mass: 63.546, valence: [1, 2] },
            'Zn': { name: 'Zinc', mass: 65.38, valence: [2] },
            'Br': { name: 'Bromine', mass: 79.904, valence: [1, 3, 5, 7] },
            'Ag': { name: 'Silver', mass: 107.868, valence: [1] },
            'I': { name: 'Iodine', mass: 126.904, valence: [1, 3, 5, 7] },
            'Ba': { name: 'Barium', mass: 137.327, valence: [2] },
            'Pb': { name: 'Lead', mass: 207.2, valence: [2, 4] }
        };
    }

    initializeStoichiometryLessons() {
        this.lessons = {
            mole_concept: {
                title: "The Mole Concept",
                concepts: [
                    "1 mole = 6.022 × 10²³ particles (Avogadro's number)",
                    "Molar mass connects mass to moles",
                    "Mole ratios come from balanced equations",
                    "Used to count atoms, molecules, and ions"
                ],
                theory: "The mole is the fundamental counting unit in chemistry, allowing us to relate microscopic particles to measurable quantities. Avogadro's number provides the bridge between the atomic scale and laboratory scale.",
                keyFormulas: {
                    "Moles from mass": "n = m/M (where m = mass, M = molar mass)",
                    "Moles from particles": "n = N/Nₐ (where N = number of particles)",
                    "Avogadro's Number": "Nₐ = 6.022 × 10²³ mol⁻¹"
                },
                solvingSteps: [
                    "Identify what you're given (mass, particles, or volume)",
                    "Determine molar mass if needed",
                    "Apply appropriate conversion formula",
                    "Check units and significant figures"
                ],
                applications: [
                    "Converting between mass and moles",
                    "Counting atoms in a sample",
                    "Determining empirical formulas",
                    "Stoichiometric calculations"
                ]
            },

            molar_mass: {
                title: "Molar Mass Calculations",
                concepts: [
                    "Molar mass = sum of atomic masses in formula",
                    "Units are g/mol or kg/mol",
                    "Account for subscripts in chemical formulas",
                    "Use periodic table for atomic masses"
                ],
                theory: "Molar mass represents the mass of one mole of a substance. It's calculated by summing the atomic masses of all atoms in the chemical formula, accounting for the number of each atom present.",
                keyFormulas: {
                    "Molar Mass": "M = Σ(atomic mass × subscript)",
                    "Example": "H₂O: M = 2(1.008) + 15.999 = 18.015 g/mol"
                },
                solvingSteps: [
                    "Parse the chemical formula",
                    "Look up atomic masses from periodic table",
                    "Multiply each atomic mass by its subscript",
                    "Sum all contributions",
                    "Express in g/mol with proper sig figs"
                ],
                applications: [
                    "Mass-mole conversions",
                    "Percent composition calculations",
                    "Empirical and molecular formula determination",
                    "Stoichiometry problems"
                ]
            },

            mass_mole_conversions: {
                title: "Mass-Mole Conversions",
                concepts: [
                    "Moles = mass / molar mass",
                    "Mass = moles × molar mass",
                    "Always identify the substance first",
                    "Track units throughout calculation"
                ],
                theory: "Mass-mole conversions are the foundation of quantitative chemistry. They allow us to relate the mass of a substance we can measure to the number of moles needed for stoichiometric calculations.",
                keyFormulas: {
                    "Moles from Mass": "n = m/M",
                    "Mass from Moles": "m = n × M",
                    "Unit Conversion": "1 mol = M grams"
                },
                solvingSteps: [
                    "Identify the given quantity and target unit",
                    "Calculate or look up molar mass",
                    "Set up conversion factor",
                    "Perform calculation with unit cancellation",
                    "Check significant figures"
                ],
                applications: [
                    "Preparing solutions of known concentration",
                    "Stoichiometry calculations",
                    "Limiting reagent problems",
                    "Percent yield calculations"
                ]
            },

            mole_particle_conversions: {
                title: "Mole-Particle Conversions",
                concepts: [
                    "Use Avogadro's number: 6.022 × 10²³",
                    "Particles can be atoms, molecules, ions, or formula units",
                    "Moles = particles / Avogadro's number",
                    "Particles = moles × Avogadro's number"
                ],
                theory: "Avogadro's number connects the macroscopic world of moles to the microscopic world of individual particles. This conversion is essential for understanding the particulate nature of matter.",
                keyFormulas: {
                    "Moles to Particles": "N = n × Nₐ",
                    "Particles to Moles": "n = N/Nₐ",
                    "Avogadro's Constant": "Nₐ = 6.022 × 10²³ mol⁻¹"
                },
                solvingSteps: [
                    "Identify type of particles (atoms, molecules, etc.)",
                    "Determine if converting to or from moles",
                    "Apply Avogadro's number as conversion factor",
                    "Use scientific notation for large numbers",
                    "Maintain proper significant figures"
                ],
                applications: [
                    "Understanding molecular scale reactions",
                    "Calculating number of atoms in a sample",
                    "Gas law problems",
                    "Concentration calculations"
                ]
            },

            balanced_equations: {
                title: "Balancing Chemical Equations",
                concepts: [
                    "Law of conservation of mass",
                    "Same number of each atom on both sides",
                    "Use coefficients, never change subscripts",
                    "Balance one element at a time"
                ],
                theory: "Chemical equations must be balanced because matter is neither created nor destroyed in chemical reactions. Balancing ensures that all atoms present in reactants are accounted for in products.",
                keyFormulas: {
                    "Conservation": "Atoms(reactants) = Atoms(products)",
                    "General Form": "aA + bB → cC + dD"
                },
                balancingStrategy: [
                    "Write skeleton equation with correct formulas",
                    "Count atoms of each element on both sides",
                    "Balance metals first, then nonmetals, then H and O",
                    "Use smallest whole number coefficients",
                    "Verify all atoms are balanced"
                ],
                applications: [
                    "Stoichiometry calculations",
                    "Predicting reaction products",
                    "Limiting reagent problems",
                    "Theoretical yield calculations"
                ]
            },

            stoichiometric_ratios: {
                title: "Stoichiometric Ratios from Equations",
                concepts: [
                    "Coefficients give mole ratios",
                    "Used as conversion factors",
                    "Apply only to balanced equations",
                    "Different from mass ratios"
                ],
                theory: "Stoichiometric coefficients in balanced equations represent mole ratios between substances. These ratios are the key to quantitative predictions in chemistry.",
                keyFormulas: {
                    "Mole Ratio": "n₁/n₂ = coefficient₁/coefficient₂",
                    "Conversion": "n(unknown) = n(given) × (coeff_unknown/coeff_given)"
                },
                solvingSteps: [
                    "Write and balance the chemical equation",
                    "Identify given and unknown substances",
                    "Extract mole ratio from coefficients",
                    "Apply ratio as conversion factor",
                    "Calculate moles of unknown substance"
                ],
                applications: [
                    "Mass-mass stoichiometry",
                    "Limiting reagent identification",
                    "Theoretical yield predictions",
                    "Reaction efficiency calculations"
                ]
            },

            mass_mass_stoichiometry: {
                title: "Mass-Mass Stoichiometry",
                concepts: [
                    "Convert mass → moles → moles → mass",
                    "Use molar masses and mole ratios",
                    "Requires balanced equation",
                    "Most common stoichiometry problem type"
                ],
                theory: "Mass-mass stoichiometry allows us to predict how much product will form from given reactants or how much reactant is needed to produce desired product. It combines molar mass calculations with stoichiometric ratios.",
                keyFormulas: {
                    "General Path": "mass A → mol A → mol B → mass B",
                    "Combined": "mass(B) = mass(A) × (M_B/M_A) × (coeff_B/coeff_A)"
                },
                solvingSteps: [
                    "Balance the chemical equation",
                    "Convert given mass to moles",
                    "Apply mole ratio from equation",
                    "Convert moles to mass of desired substance",
                    "Check units and significant figures"
                ],
                applications: [
                    "Predicting reaction yields",
                    "Determining required reactant amounts",
                    "Industrial chemical production",
                    "Laboratory preparation calculations"
                ]
            },

            limiting_reagent: {
                title: "Limiting Reagent Problems",
                concepts: [
                    "Limiting reagent is completely consumed",
                    "Excess reagent has some left over",
                    "Product amount limited by limiting reagent",
                    "Compare mole ratios to stoichiometric ratios"
                ],
                theory: "In reactions with multiple reactants, one reactant (the limiting reagent) is completely consumed first, limiting the amount of product formed. Identifying the limiting reagent is crucial for accurate yield predictions.",
                keyFormulas: {
                    "Limiting Test": "Compare n_actual/coeff for each reactant",
                    "Product Yield": "Based on limiting reagent only"
                },
                solvingSteps: [
                    "Balance the equation",
                    "Convert all given masses to moles",
                    "Divide each by its stoichiometric coefficient",
                    "Smallest ratio indicates limiting reagent",
                    "Calculate products based on limiting reagent",
                    "Determine excess reagent remaining"
                ],
                applications: [
                    "Optimizing reaction conditions",
                    "Cost-effective synthesis planning",
                    "Understanding reaction completion",
                    "Industrial process efficiency"
                ]
            },

            percent_yield: {
                title: "Theoretical and Percent Yield",
                concepts: [
                    "Theoretical yield: maximum possible product",
                    "Actual yield: what's actually obtained",
                    "Percent yield = (actual/theoretical) × 100%",
                    "Percent yield ≤ 100% for real reactions"
                ],
                theory: "Theoretical yield represents the maximum product possible from stoichiometric calculations. Actual yield is always less due to side reactions, incomplete reactions, and losses during processing. Percent yield quantifies reaction efficiency.",
                keyFormulas: {
                    "Percent Yield": "% yield = (actual yield/theoretical yield) × 100%",
                    "Actual from Percent": "actual = (% yield/100) × theoretical"
                },
                solvingSteps: [
                    "Calculate theoretical yield from stoichiometry",
                    "Obtain actual yield from experiment",
                    "Apply percent yield formula",
                    "Interpret result (efficiency, losses, etc.)",
                    "Consider sources of error"
                ],
                applications: [
                    "Evaluating reaction efficiency",
                    "Process optimization",
                    "Comparing synthesis methods",
                    "Quality control in production"
                ]
            },

            empirical_molecular_formulas: {
                title: "Empirical and Molecular Formulas",
                concepts: [
                    "Empirical formula: simplest whole number ratio",
                    "Molecular formula: actual number of atoms",
                    "Molecular formula = n × empirical formula",
                    "Use percent composition or combustion data"
                ],
                theory: "Empirical formulas show the simplest ratio of elements in a compound. Molecular formulas show the actual number of each atom. The molecular formula is always a whole number multiple of the empirical formula.",
                keyFormulas: {
                    "Empirical from %": "moles = (% by mass)/atomic mass, then simplify ratio",
                    "Molecular": "n = (molar mass)/(empirical formula mass)"
                },
                solvingSteps: [
                    "Convert percent composition to grams (assume 100g)",
                    "Convert grams to moles for each element",
                    "Divide by smallest number of moles",
                    "Multiply to get whole numbers if needed",
                    "Determine molecular formula if molar mass given"
                ],
                applications: [
                    "Identifying unknown compounds",
                    "Combustion analysis",
                    "Structural determination",
                    "Quality control analysis"
                ]
            },

            solution_stoichiometry: {
                title: "Solution Stoichiometry",
                concepts: [
                    "Molarity: M = moles/liters",
                    "Moles = M × V (volume in liters)",
                    "Dilution: M₁V₁ = M₂V₂",
                    "Combine with stoichiometric ratios"
                ],
                theory: "Solution stoichiometry extends stoichiometric principles to reactions in solution. Molarity connects concentration to moles, enabling quantitative analysis of solution reactions.",
                keyFormulas: {
                    "Molarity": "M = n/V (mol/L)",
                    "Moles in Solution": "n = M × V",
                    "Dilution": "M₁V₁ = M₂V₂"
                },
                solvingSteps: [
                    "Identify molarity and volume given",
                    "Calculate moles: n = M × V",
                    "Apply stoichiometric ratio if needed",
                    "Convert back to concentration or volume",
                    "Check units (L vs mL)"
                ],
                applications: [
                    "Titration calculations",
                    "Solution preparation",
                    "Concentration determination",
                    "Precipitation reactions"
                ]
            },

            gas_stoichiometry: {
                title: "Gas Stoichiometry",
                concepts: [
                    "At STP: 1 mole = 22.4 L",
                    "Ideal gas law: PV = nRT",
                    "Molar volume depends on T and P",
                    "Combine with mole ratios"
                ],
                theory: "Gas stoichiometry applies stoichiometric principles to gases. The ideal gas law and molar volume at STP provide connections between gas volume, moles, and mass.",
                keyFormulas: {
                    "Ideal Gas Law": "PV = nRT",
                    "Molar Volume (STP)": "V_m = 22.4 L/mol",
                    "Moles from Volume": "n = V/V_m (at STP)"
                },
                solvingSteps: [
                    "Determine if conditions are STP",
                    "Convert volume to moles (use 22.4 L/mol at STP or ideal gas law)",
                    "Apply stoichiometric ratios",
                    "Convert back to volume or mass as needed",
                    "Account for temperature and pressure changes"
                ],
                applications: [
                    "Combustion analysis",
                    "Industrial gas reactions",
                    "Atmospheric chemistry",
                    "Gas generation calculations"
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
                reactionBg: '#ffe6f0'
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
                reactionBg: '#fce4ec'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeChemSymbols() {
        return {
            // Chemical symbols
            'arrow': '→',
            'equilibrium': '⇌',
            'delta': 'Δ',
            'plus': '+',
            'yields': '→',
            // Subscripts (using Unicode subscript characters)
            'sub0': '₀', 'sub1': '₁', 'sub2': '₂', 'sub3': '₃', 'sub4': '₄',
            'sub5': '₅', 'sub6': '₆', 'sub7': '₇', 'sub8': '₈', 'sub9': '₉',
            // Superscripts (using Unicode superscript characters)
            'sup0': '⁰', 'sup1': '¹', 'sup2': '²', 'sup3': '³', 'sup4': '⁴',
            'sup+': '⁺', 'sup-': '⁻',
            // Greek letters commonly used
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'mu': 'μ', 'pi': 'π'
        };
    }

    initializeStoichiometrySolvers() {
        this.stoichiometryTypes = {
            molar_mass: {
                patterns: [
                    /molar\s+mass/i,
                    /molecular\s+weight/i,
                    /formula\s+mass/i,
                    /calculate.*mass.*formula/i
                ],
                solver: this.solveMolarMass.bind(this),
                name: 'Molar Mass Calculation',
                category: 'basic_concepts',
                description: 'Calculates molar mass from chemical formula'
            },

            mass_to_moles: {
                patterns: [
                    /mass.*to.*moles/i,
                    /grams.*to.*moles/i,
                    /convert.*mass.*moles/i,
                    /how\s+many\s+moles/i
                ],
                solver: this.solveMassToMoles.bind(this),
                name: 'Mass to Moles Conversion',
                category: 'conversions',
                description: 'Converts mass to moles using molar mass'
            },

            moles_to_mass: {
                patterns: [
                    /moles.*to.*mass/i,
                    /moles.*to.*grams/i,
                    /convert.*moles.*mass/i,
                    /what.*mass/i
                ],
                solver: this.solveMolesToMass.bind(this),
                name: 'Moles to Mass Conversion',
                category: 'conversions',
                description: 'Converts moles to mass using molar mass'
            },

            particles_to_moles: {
                patterns: [
                    /particles.*to.*moles/i,
                    /atoms.*to.*moles/i,
                    /molecules.*to.*moles/i,
                    /avogadro/i
                ],
                solver: this.solveParticlesToMoles.bind(this),
                name: 'Particles to Moles Conversion',
                category: 'conversions',
                description: 'Converts number of particles to moles using Avogadro\'s number'
            },

            moles_to_particles: {
                patterns: [
                    /moles.*to.*particles/i,
                    /moles.*to.*atoms/i,
                    /moles.*to.*molecules/i,
                    /how\s+many\s+atoms/i,
                    /how\s+many\s+molecules/i
                ],
                solver: this.solveMolesToParticles.bind(this),
                name: 'Moles to Particles Conversion',
                category: 'conversions',
                description: 'Converts moles to number of particles using Avogadro\'s number'
            },

            mass_mass_stoichiometry: {
                patterns: [
                    /mass.*mass.*stoichiometry/i,
                    /grams.*to.*grams/i,
                    /how\s+many\s+grams.*produced/i,
                    /mass.*product/i
                ],
                solver: this.solveMassMassStoichiometry.bind(this),
                name: 'Mass-Mass Stoichiometry',
                category: 'stoichiometry',
                description: 'Calculates mass of product from mass of reactant'
            },

            limiting_reagent: {
                patterns: [
                    /limiting\s+reagent/i,
                    /limiting\s+reactant/i,
                    /which.*excess/i,
                    /excess.*reagent/i
                ],
                solver: this.solveLimitingReagent.bind(this),
                name: 'Limiting Reagent Problem',
                category: 'stoichiometry',
                description: 'Identifies limiting reagent and calculates product yield'
            },

            percent_yield: {
                patterns: [
                    /percent\s+yield/i,
                    /percentage\s+yield/i,
                    /theoretical\s+yield/i,
                    /actual.*yield/i
                ],
                solver: this.solvePercentYield.bind(this),
                name: 'Percent Yield Calculation',
                category: 'stoichiometry',
                description: 'Calculates percent yield from actual and theoretical yields'
            },

            empirical_formula: {
                patterns: [
                    /empirical\s+formula/i,
                    /simplest\s+formula/i,
                    /percent\s+composition/i,
                    /composition.*formula/i
                ],
                solver: this.solveEmpiricalFormula.bind(this),
                name: 'Empirical Formula Determination',
                category: 'formulas',
                description: 'Determines empirical formula from percent composition'
            },

            molecular_formula: {
                patterns: [
                    /molecular\s+formula/i,
                    /true\s+formula/i,
                    /empirical.*molecular/i
                ],
                solver: this.solveMolecularFormula.bind(this),
                name: 'Molecular Formula Determination',
                category: 'formulas',
                description: 'Determines molecular formula from empirical formula and molar mass'
            },

            solution_molarity: {
                patterns: [
                    /molarity/i,
                    /concentration/i,
                    /moles.*liter/i,
                    /M\s*=\s*n\s*\/\s*V/i
                ],
                solver: this.solveSolutionMolarity.bind(this),
                name: 'Molarity Calculations',
                category: 'solutions',
                description: 'Calculates molarity of solutions'
            },

            dilution: {
                patterns: [
                    /dilution/i,
                    /dilute/i,
                    /M1V1.*M2V2/i,
                    /concentrate.*dilute/i
                ],
                solver: this.solveDilution.bind(this),
                name: 'Dilution Calculations',
                category: 'solutions',
                description: 'Calculates concentrations and volumes in dilution'
            },

            gas_stoichiometry: {
                patterns: [
                    /gas\s+stoichiometry/i,
                    /STP/i,
                    /22\.4.*L/i,
                    /ideal\s+gas/i,
                    /PV\s*=\s*nRT/i
                ],
                solver: this.solveGasStoichiometry.bind(this),
                name: 'Gas Stoichiometry',
                category: 'gas_laws',
                description: 'Stoichiometric calculations involving gases'
            },

            percent_composition: {
                patterns: [
                    /percent\s+composition/i,
                    /percentage.*element/i,
                    /mass\s+percent/i,
                    /%.*mass/i
                ],
                solver: this.solvePercentComposition.bind(this),
                name: 'Percent Composition',
                category: 'formulas',
                description: 'Calculates percent composition by mass'
            },

            balancing_equations: {
                patterns: [
                    /balance.*equation/i,
                    /coefficient/i,
                    /balanced.*reaction/i
                ],
                solver: this.solveBalancingEquation.bind(this),
                name: 'Balance Chemical Equations',
                category: 'equations',
                description: 'Balances chemical equations'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            molar_mass: {
                'Calculate atomic contributions': [
                    'Forgetting to multiply by subscripts',
                    'Using incorrect atomic masses',
                    'Missing atoms in complex formulas (like in parentheses)'
                ],
                'Sum all contributions': [
                    'Arithmetic errors in addition',
                    'Forgetting elements with subscript 1',
                    'Wrong significant figures'
                ]
            },
            mass_to_moles: {
                'Divide mass by molar mass': [
                    'Using wrong molar mass',
                    'Dividing molar mass by mass instead',
                    'Unit confusion (g vs kg, mg vs g)'
                ]
            },
            limiting_reagent: {
                'Calculate moles of each reactant': [
                    'Using wrong molar mass',
                    'Mixing up reactants'
                ],
                'Divide by stoichiometric coefficients': [
                    'Forgetting to balance equation first',
                    'Using wrong coefficients',
                    'Comparing wrong ratios'
                ]
            },
            percent_yield: {
                'Calculate percent yield': [
                    'Dividing theoretical by actual instead of vice versa',
                    'Forgetting to multiply by 100',
                    'Using wrong yield values'
                ]
            }
        };

        this.errorPrevention = {
            unit_checking: {
                reminder: 'Always track units through every calculation',
                method: 'Write units next to every number and cancel appropriately'
            },
            formula_parsing: {
                reminder: 'Carefully parse chemical formulas including parentheses',
                method: 'Break down formula systematically, handle parentheses first'
            },
            coefficient_check: {
                reminder: 'Always balance equations before stoichiometry calculations',
                method: 'Count atoms on both sides to verify balance'
            },
            sig_figs: {
                reminder: 'Maintain proper significant figures throughout',
                method: 'Identify limiting sig figs at start, round at end only'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this step works and its chemical meaning',
                language: 'intuitive and chemistry-focused'
            },
            procedural: {
                focus: 'Exact sequence of calculations to perform',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Particulate and molecular understanding',
                language: 'visual and molecular metaphors'
            },
            mathematical: {
                focus: 'Formal mathematical operations and conversions',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete substances and simple reactions'
            },
            intermediate: {
                vocabulary: 'standard chemistry terms',
                detail: 'main steps with brief chemical explanations',
                examples: 'mix of simple and complex reactions'
            },
            detailed: {
                vocabulary: 'full chemical vocabulary',
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

    // Main solver method
    solveStoichiometryProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseStoichiometryProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveStoichiometryProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateStoichiometrySteps(this.currentProblem, this.currentSolution);

            // Generate visualization data if applicable
            this.generateStoichiometryVisualization();

            // Generate workbook
            this.generateStoichiometryWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                result: this.currentSolution?.result,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve stoichiometry problem: ${error.message}`);
        }
    }

    parseStoichiometryProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanChemExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.stoichiometryTypes[problemType]) {
            return {
                originalInput: equation || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect stoichiometry problem type
        for (const [type, config] of Object.entries(this.stoichiometryTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    return {
                        originalInput: equation || scenario,
                        cleanInput: cleanInput,
                        type: type,
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize stoichiometry problem type from: ${equation || scenario}`);
    }

    cleanChemExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/→/g, '->')
            .replace(/⇌/g, '<->')
            .trim();
    }

    solveStoichiometryProblem_Internal(problem) {
        const solver = this.stoichiometryTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for stoichiometry problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // STOICHIOMETRY SOLVERS

    solveMolarMass(problem) {
        const { formula } = problem.parameters;
        
        if (!formula) {
            throw new Error('Chemical formula is required for molar mass calculation');
        }

        const composition = this.parseChemicalFormula(formula);
        let molarMass = 0;
        const breakdown = [];

        for (const [element, count] of Object.entries(composition)) {
            if (!this.periodicTable[element]) {
                throw new Error(`Unknown element: ${element}`);
            }
            const atomicMass = this.periodicTable[element].mass;
            const contribution = atomicMass * count;
            molarMass += contribution;
            
            breakdown.push({
                element: element,
                elementName: this.periodicTable[element].name,
                count: count,
                atomicMass: atomicMass,
                contribution: contribution
            });
        }

        return {
            formula: formula,
            molarMass: molarMass,
            units: 'g/mol',
            breakdown: breakdown,
            composition: composition,
            solutionType: 'Molar Mass',
            category: 'molar_mass'
        };
    }

    solveMassToMoles(problem) {
        const { mass, formula, molarMass } = problem.parameters;

        if (!mass) {
            throw new Error('Mass is required');
        }

        let M = molarMass;
        if (!M && formula) {
            const molarMassResult = this.solveMolarMass({ parameters: { formula } });
            M = molarMassResult.molarMass;
        }

        if (!M) {
            throw new Error('Either formula or molar mass must be provided');
        }

        const moles = mass / M;

        return {
            givenMass: mass,
            givenUnits: 'g',
            formula: formula,
            molarMass: M,
            moles: moles,
            result: moles,
            units: 'mol',
            conversion: `n = m/M = ${mass}g / ${M}g/mol = ${moles}mol`,
            solutionType: 'Mass to Moles',
            category: 'mass_to_moles'
        };
    }

    solveMolesToMass(problem) {
        const { moles, formula, molarMass } = problem.parameters;

        if (!moles) {
            throw new Error('Moles is required');
        }

        let M = molarMass;
        if (!M && formula) {
            const molarMassResult = this.solveMolarMass({ parameters: { formula } });
            M = molarMassResult.molarMass;
        }

        if (!M) {
            throw new Error('Either formula or molar mass must be provided');
        }

        const mass = moles * M;

        return {
            givenMoles: moles,
            givenUnits: 'mol',
            formula: formula,
            molarMass: M,
            mass: mass,
            result: mass,
            units: 'g',
            conversion: `m = n × M = ${moles}mol × ${M}g/mol = ${mass}g`,
            solutionType: 'Moles to Mass',
            category: 'moles_to_mass'
        };
    }

    solveParticlesToMoles(problem) {
        const { particles, particleType = 'particles' } = problem.parameters;

        if (!particles) {
            throw new Error('Number of particles is required');
        }

        const avogadro = 6.022e23;
        const moles = particles / avogadro;

        return {
            givenParticles: particles,
            particleType: particleType,
            avogadroNumber: avogadro,
            moles: moles,
            result: moles,
            units: 'mol',
            conversion: `n = N/Nₐ = ${particles} / ${avogadro} = ${moles}mol`,
            solutionType: 'Particles to Moles',
            category: 'particles_to_moles'
        };
    }

    solveMolesToParticles(problem) {
        const { moles, particleType = 'particles' } = problem.parameters;

        if (!moles) {
            throw new Error('Moles is required');
        }

        const avogadro = 6.022e23;
        const particles = moles * avogadro;

        return {
            givenMoles: moles,
            particleType: particleType,
            avogadroNumber: avogadro,
            particles: particles,
            result: particles,
            units: particleType,
            conversion: `N = n × Nₐ = ${moles}mol × ${avogadro} = ${particles} ${particleType}`,
            solutionType: 'Moles to Particles',
            category: 'moles_to_particles'
        };
    }

    solveMassMassStoichiometry(problem) {
        const { givenMass, givenFormula, desiredFormula, equation, givenCoeff, desiredCoeff } = problem.parameters;

        if (!givenMass || !givenFormula || !desiredFormula) {
            throw new Error('Given mass, given formula, and desired formula are required');
        }

        // Step 1: Calculate molar masses
        const givenMolarMass = this.solveMolarMass({ parameters: { formula: givenFormula } }).molarMass;
        const desiredMolarMass = this.solveMolarMass({ parameters: { formula: desiredFormula } }).molarMass;

        // Step 2: Convert given mass to moles
        const givenMoles = givenMass / givenMolarMass;

        // Step 3: Use stoichiometric ratio
        const moleRatio = desiredCoeff / givenCoeff;
        const desiredMoles = givenMoles * moleRatio;

        // Step 4: Convert to mass
        const desiredMass = desiredMoles * desiredMolarMass;

        return {
            equation: equation,
            givenSubstance: givenFormula,
            givenMass: givenMass,
            givenMolarMass: givenMolarMass,
            givenMoles: givenMoles,
            desiredSubstance: desiredFormula,
            desiredMolarMass: desiredMolarMass,
            moleRatio: moleRatio,
            desiredMoles: desiredMoles,
            desiredMass: desiredMass,
            result: desiredMass,
            units: 'g',
            stoichiometricCoefficients: { given: givenCoeff, desired: desiredCoeff },
            solutionType: 'Mass-Mass Stoichiometry',
            category: 'mass_mass_stoichiometry'
        };
    }

    solveLimitingReagent(problem) {
        const { reactants, equation, coefficients, desiredProduct } = problem.parameters;

        if (!reactants || !coefficients) {
            throw new Error('Reactants with masses and stoichiometric coefficients are required');
        }

        const reactantAnalysis = [];
        let limitingReagent = null;
        let minRatio = Infinity;

        // Analyze each reactant
        for (const reactant of reactants) {
            const { formula, mass } = reactant;
            const coeff = coefficients[formula];
            
            const molarMass = this.solveMolarMass({ parameters: { formula } }).molarMass;
            const moles = mass / molarMass;
            const ratio = moles / coeff;

            reactantAnalysis.push({
                formula: formula,
                mass: mass,
                molarMass: molarMass,
                moles: moles,
                coefficient: coeff,
                ratio: ratio,
                isLimiting: false
            });

            if (ratio < minRatio) {
                minRatio = ratio;
                limitingReagent = formula;
            }
        }

        // Mark limiting reagent
        reactantAnalysis.forEach(r => {
            r.isLimiting = (r.formula === limitingReagent);
        });

        // Calculate product based on limiting reagent
        let productMass = null;
        if (desiredProduct) {
            const limitingData = reactantAnalysis.find(r => r.isLimiting);
            const productCoeff = coefficients[desiredProduct.formula];
            const productMolarMass = this.solveMolarMass({ parameters: { formula: desiredProduct.formula } }).molarMass;
            
            const productMoles = limitingData.moles * (productCoeff / limitingData.coefficient);
            productMass = productMoles * productMolarMass;
        }

        return {
            equation: equation,
            reactantAnalysis: reactantAnalysis,
            limitingReagent: limitingReagent,
            productMass: productMass,
            result: limitingReagent,
            solutionType: 'Limiting Reagent',
            category: 'limiting_reagent'
        };
    }

    solvePercentYield(problem) {
        const { actualYield, theoreticalYield } = problem.parameters;

        if (actualYield === undefined || theoreticalYield === undefined) {
            throw new Error('Both actual yield and theoretical yield are required');
        }

        if (theoreticalYield === 0) {
            throw new Error('Theoretical yield cannot be zero');
        }

        const percentYield = (actualYield / theoreticalYield) * 100;

        return {
            actualYield: actualYield,
            theoreticalYield: theoreticalYield,
            percentYield: percentYield,
            result: percentYield,
            units: '%',
            formula: '% yield = (actual/theoretical) × 100%',
            interpretation: this.interpretPercentYield(percentYield),
            solutionType: 'Percent Yield',
            category: 'percent_yield'
        };
    }

    solveEmpiricalFormula(problem) {
        const { composition } = problem.parameters;

        if (!composition) {
            throw new Error('Percent composition is required');
        }

        const elementMoles = {};
        let minMoles = Infinity;

        // Convert percent to moles
        for (const [element, percent] of Object.entries(composition)) {
            if (!this.periodicTable[element]) {
                throw new Error(`Unknown element: ${element}`);
            }
            const atomicMass = this.periodicTable[element].mass;
            const moles = percent / atomicMass;
            elementMoles[element] = moles;
            
            if (moles < minMoles) {
                minMoles = moles;
            }
        }

        // Divide by smallest
        const moleRatios = {};
        for (const [element, moles] of Object.entries(elementMoles)) {
            moleRatios[element] = moles / minMoles;
        }

        // Convert to whole numbers
        const subscripts = this.convertToWholeNumbers(moleRatios);

        // Build empirical formula
        const empiricalFormula = this.buildFormulaString(subscripts);

        return {
            composition: composition,
            elementMoles: elementMoles,
            moleRatios: moleRatios,
            subscripts: subscripts,
            empiricalFormula: empiricalFormula,
            result: empiricalFormula,
            solutionType: 'Empirical Formula',
            category: 'empirical_formula'
        };
    }

    solveMolecularFormula(problem) {
        const { empiricalFormula, molarMass } = problem.parameters;

        if (!empiricalFormula || !molarMass) {
            throw new Error('Empirical formula and molar mass are required');
        }

        const empiricalMass = this.solveMolarMass({ parameters: { formula: empiricalFormula } }).molarMass;
        const n = Math.round(molarMass / empiricalMass);

        const empiricalComposition = this.parseChemicalFormula(empiricalFormula);
        const molecularComposition = {};
        
        for (const [element, count] of Object.entries(empiricalComposition)) {
            molecularComposition[element] = count * n;
        }

        const molecularFormula = this.buildFormulaString(molecularComposition);

        return {
            empiricalFormula: empiricalFormula,
            empiricalMass: empiricalMass,
            molarMass: molarMass,
            multiplier: n,
            molecularFormula: molecularFormula,
            result: molecularFormula,
            solutionType: 'Molecular Formula',
            category: 'molecular_formula'
        };
    }

    solveSolutionMolarity(problem) {
        const { moles, volume, mass, formula, molarity } = problem.parameters;

        let M, n, V;

        if (molarity !== undefined && volume !== undefined) {
            // Calculate moles from M and V
            n = molarity * volume;
            return {
                molarity: molarity,
                volume: volume,
                moles: n,
                result: n,
                units: 'mol',
                formula: 'n = M × V',
                solutionType: 'Molarity Calculation',
                category: 'solution_molarity'
            };
        }

        if (moles !== undefined) {
            n = moles;
        } else if (mass !== undefined && formula) {
            const molarMass = this.solveMolarMass({ parameters: { formula } }).molarMass;
            n = mass / molarMass;
        }

        if (!n || !volume) {
            throw new Error('Insufficient information to calculate molarity');
        }

        M = n / volume;

        return {
            moles: n,
            volume: volume,
            molarity: M,
            result: M,
            units: 'M (mol/L)',
            formula: 'M = n/V',
            solutionType: 'Molarity Calculation',
            category: 'solution_molarity'
        };
    }

    solveDilution(problem) {
        const { M1, V1, M2, V2 } = problem.parameters;

        // M1V1 = M2V2
        let result, resultType;

        if (M1 !== undefined && V1 !== undefined && M2 !== undefined) {
            result = (M1 * V1) / M2;
            resultType = 'V2';
        } else if (M1 !== undefined && V1 !== undefined && V2 !== undefined) {
            result = (M1 * V1) / V2;
            resultType = 'M2';
        } else if (M2 !== undefined && V2 !== undefined && V1 !== undefined) {
            result = (M2 * V2) / V1;
            resultType = 'M1';
        } else if (M1 !== undefined && M2 !== undefined && V2 !== undefined) {
            result = (M2 * V2) / M1;
            resultType = 'V1';
        } else {
            throw new Error('Insufficient information for dilution calculation');
        }

        return {
            M1: M1,
            V1: V1,
            M2: M2,
            V2: V2,
            result: result,
            resultType: resultType,
            formula: 'M₁V₁ = M₂V₂',
            solutionType: 'Dilution',
            category: 'dilution'
        };
    }

    solveGasStoichiometry(problem) {
        const { volume, moles, pressure, temperature, atSTP = true } = problem.parameters;

        const R = 0.0821; // L·atm/(mol·K)
        const STP_volume = 22.4; // L/mol at STP

        if (atSTP) {
            if (volume !== undefined) {
                const n = volume / STP_volume;
                return {
                    volume: volume,
                    molarVolume: STP_volume,
                    moles: n,
                    result: n,
                    units: 'mol',
                    conditions: 'STP (0°C, 1 atm)',
                    formula: 'n = V/22.4',
                    solutionType: 'Gas Stoichiometry',
                    category: 'gas_stoichiometry'
                };
            } else if (moles !== undefined) {
                const V = moles * STP_volume;
                return {
                    moles: moles,
                    molarVolume: STP_volume,
                    volume: V,
                    result: V,
                    units: 'L',
                    conditions: 'STP (0°C, 1 atm)',
                    formula: 'V = n × 22.4',
                    solutionType: 'Gas Stoichiometry',
                    category: 'gas_stoichiometry'
                };
            }
        } else {
            // Use ideal gas law PV = nRT
            if (pressure !== undefined && volume !== undefined && temperature !== undefined) {
                const n = (pressure * volume) / (R * temperature);
                return {
                    pressure: pressure,
                    volume: volume,
                    temperature: temperature,
                    R: R,
                    moles: n,
                    result: n,
                    units: 'mol',
                    formula: 'PV = nRT → n = PV/RT',
                    solutionType: 'Gas Stoichiometry',
                    category: 'gas_stoichiometry'
                };
            }
        }

        throw new Error('Insufficient information for gas stoichiometry calculation');
    }

    solvePercentComposition(problem) {
        const { formula } = problem.parameters;

        if (!formula) {
            throw new Error('Chemical formula is required');
        }

        const molarMassResult = this.solveMolarMass({ parameters: { formula } });
        const totalMass = molarMassResult.molarMass;
        const composition = molarMassResult.breakdown;

        const percentComposition = {};
        
        for (const item of composition) {
            const percent = (item.contribution / totalMass) * 100;
            percentComposition[item.element] = percent;
        }

        return {
            formula: formula,
            totalMolarMass: totalMass,
            breakdown: composition,
            percentComposition: percentComposition,
            result: percentComposition,
            solutionType: 'Percent Composition',
            category: 'percent_composition'
        };
    }

    solveBalancingEquation(problem) {
        const { equation } = problem.parameters;

        // This is a simplified framework - actual equation balancing is complex
        return {
            equation: equation,
            solutionType: 'Balanced Equation',
            method: 'Trial and error or algebraic method',
            steps: [
                'Write skeleton equation with correct formulas',
                'Count atoms of each element on both sides',
                'Balance metals, then nonmetals, then H and O',
                'Verify all atoms are balanced',
                'Use smallest whole number coefficients'
            ],
            category: 'balancing_equations',
            note: 'Complete balancing algorithm requires more sophisticated implementation'
        };
    }

    // HELPER METHODS

    parseChemicalFormula(formula) {
        const composition = {};
        
        // Simple parser for basic formulas (H2O, CH4, etc.)
        // More complex parser needed for formulas with parentheses
        
        const regex = /([A-Z][a-z]?)(\d*)/g;
        let match;
        
        while ((match = regex.exec(formula)) !== null) {
            const element = match[1];
            const count = match[2] === '' ? 1 : parseInt(match[2]);
            
            if (composition[element]) {
                composition[element] += count;
            } else {
                composition[element] = count;
            }
        }
        
        return composition;
    }

    convertToWholeNumbers(ratios, tolerance = 0.1) {
        // Try multipliers from 1 to 12 to find whole numbers
        for (let multiplier = 1; multiplier <= 12; multiplier++) {
            let allWhole = true;
            const testValues = {};
            
            for (const [element, ratio] of Object.entries(ratios)) {
                const value = ratio * multiplier;
                const rounded = Math.round(value);
                
                if (Math.abs(value - rounded) > tolerance) {
                    allWhole = false;
                    break;
                }
                testValues[element] = rounded;
            }
            
            if (allWhole) {
                return testValues;
            }
        }
        
        // If no good multiplier found, just round
        const result = {};
        for (const [element, ratio] of Object.entries(ratios)) {
            result[element] = Math.round(ratio);
        }
        return result;
    }

    buildFormulaString(composition) {
        let formula = '';
        const elements = Object.keys(composition).sort();
        
        for (const element of elements) {
            formula += element;
            if (composition[element] > 1) {
                formula += composition[element];
            }
        }
        
        return formula;
    }

    interpretPercentYield(percentYield) {
        if (percentYield > 100) {
            return 'Greater than 100% - likely experimental error or impure product';
        } else if (percentYield >= 90) {
            return 'Excellent yield - very efficient reaction';
        } else if (percentYield >= 70) {
            return 'Good yield - acceptable for most purposes';
        } else if (percentYield >= 50) {
            return 'Moderate yield - some optimization possible';
        } else {
            return 'Low yield - significant losses or incomplete reaction';
        }
    }

    // STEP GENERATION

    generateStoichiometrySteps(problem, solution) {
        let baseSteps = this.generateBaseStoichiometrySteps(problem, solution);

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

    generateBaseStoichiometrySteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'molar_mass':
                return this.generateMolarMassSteps(problem, solution);
            case 'mass_to_moles':
                return this.generateMassToMolesSteps(problem, solution);
            case 'moles_to_mass':
                return this.generateMolesToMassSteps(problem, solution);
            case 'particles_to_moles':
                return this.generateParticlesToMolesSteps(problem, solution);
            case 'moles_to_particles':
                return this.generateMolesToParticlesSteps(problem, solution);
            case 'mass_mass_stoichiometry':
                return this.generateMassMassSteps(problem, solution);
            case 'limiting_reagent':
                return this.generateLimitingReagentSteps(problem, solution);
            case 'percent_yield':
                return this.generatePercentYieldSteps(problem, solution);
            case 'empirical_formula':
                return this.generateEmpiricalFormulaSteps(problem, solution);
            default:
                return this.generateGenericChemSteps(problem, solution);
        }
    }

    generateMolarMassSteps(problem, solution) {
        const steps = [];
        
        steps.push({
            stepNumber: 1,
            step: 'Parse chemical formula',
            description: `Break down ${solution.formula} into individual elements`,
            expression: solution.formula,
            reasoning: 'Identify each element and how many atoms of each are present',
            visualHint: 'Look at subscripts to determine atom counts',
            goalStatement: 'Determine the composition of the compound'
        });

        steps.push({
            stepNumber: 2,
            step: 'Look up atomic masses',
            description: 'Find atomic mass for each element from periodic table',
            breakdown: solution.breakdown.map(b => `${b.element}: ${b.atomicMass} g/mol`).join(', '),
            reasoning: 'We need the mass of individual atoms to calculate molecular mass',
            algebraicRule: 'Atomic masses are found on the periodic table'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate contributions',
            description: 'Multiply each atomic mass by the number of atoms',
            breakdown: solution.breakdown.map(b => 
                `${b.element}: ${b.atomicMass} × ${b.count} = ${b.contribution} g/mol`
            ).join('\n'),
            reasoning: 'Each atom type contributes its mass times the number present',
            visualHint: 'Think of adding up the mass of all individual atoms'
        });

        steps.push({
            stepNumber: 4,
            step: 'Sum all contributions',
            description: 'Add up all the individual contributions',
            beforeExpression: solution.breakdown.map(b => b.contribution).join(' + '),
            afterExpression: `${solution.molarMass} g/mol`,
            result: solution.molarMass,
            reasoning: 'Total molar mass is the sum of all atomic contributions',
            finalAnswer: true
        });

        return steps;
    }

    generateMassToMolesSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'Extract mass and substance identity from problem',
            givenMass: solution.givenMass,
            formula: solution.formula,
            reasoning: 'We need to know what substance and how much we have',
            goalStatement: 'Convert mass to moles using molar mass'
        });

        steps.push({
            stepNumber: 2,
            step: 'Determine molar mass',
            description: `Calculate or look up molar mass of ${solution.formula}`,
            molarMass: solution.molarMass,
            units: 'g/mol',
            reasoning: 'Molar mass is the conversion factor between grams and moles',
            algebraicRule: 'Molar mass connects mass to amount of substance'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply conversion formula',
            description: 'Use n = m/M to convert mass to moles',
            beforeExpression: `n = m/M`,
            operation: `n = ${solution.givenMass}g / ${solution.molarMass}g/mol`,
            afterExpression: `n = ${solution.moles} mol`,
            reasoning: 'Dividing mass by molar mass gives the number of moles',
            visualHint: 'Think: How many molar-mass-sized portions fit in the given mass?',
            finalAnswer: true,
            result: solution.moles
        });

        return steps;
    }

    generateMolesToMassSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'Extract moles and substance identity',
            givenMoles: solution.givenMoles,
            formula: solution.formula,
            reasoning: 'We need to know the substance and amount in moles',
            goalStatement: 'Convert moles to mass using molar mass'
        });

        steps.push({
            stepNumber: 2,
            step: 'Determine molar mass',
            description: `Calculate or look up molar mass of ${solution.formula}`,
            molarMass: solution.molarMass,
            units: 'g/mol',
            reasoning: 'Molar mass tells us the mass of one mole',
            algebraicRule: 'M = mass per mole'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply conversion formula',
            description: 'Use m = n × M to convert moles to mass',
            beforeExpression: `m = n × M`,
            operation: `m = ${solution.givenMoles}mol × ${solution.molarMass}g/mol`,
            afterExpression: `m = ${solution.mass}g`,
            reasoning: 'Multiplying moles by molar mass gives total mass',
            visualHint: 'Each mole has a mass of M grams, so multiply',
            finalAnswer: true,
            result: solution.mass
        });

        return steps;
    }

    generateParticlesToMolesSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: `Number of ${solution.particleType} provided`,
            givenParticles: solution.givenParticles,
            reasoning: 'We need the count of individual particles',
            goalStatement: 'Convert particles to moles using Avogadro\'s number'
        });

        steps.push({
            stepNumber: 2,
            step: 'State Avogadro\'s number',
            description: 'The number of particles in one mole',
            avogadroNumber: solution.avogadroNumber,
            expression: 'Nₐ = 6.022 × 10²³ particles/mol',
            reasoning: 'This is the fundamental constant linking particles to moles',
            conceptualNote: 'One mole always contains this many particles, regardless of substance'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply conversion formula',
            description: 'Divide particle count by Avogadro\'s number',
            beforeExpression: `n = N/Nₐ`,
            operation: `n = ${solution.givenParticles} / ${solution.avogadroNumber}`,
            afterExpression: `n = ${solution.moles} mol`,
            reasoning: 'This tells us how many mole-sized groups of particles we have',
            visualHint: 'Divide the total particles into groups of 6.022×10²³',
            finalAnswer: true,
            result: solution.moles
        });

        return steps;
    }

    generateMolesToParticlesSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'Number of moles provided',
            givenMoles: solution.givenMoles,
            reasoning: 'We have the amount in moles',
            goalStatement: 'Convert moles to individual particles'
        });

        steps.push({
            stepNumber: 2,
            step: 'State Avogadro\'s number',
            description: 'The conversion factor for moles to particles',
            avogadroNumber: solution.avogadroNumber,
            expression: 'Nₐ = 6.022 × 10²³ particles/mol',
            reasoning: 'Each mole contains this many particles',
            conceptualNote: 'This is like a dozen = 12, but much larger'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply conversion formula',
            description: 'Multiply moles by Avogadro\'s number',
            beforeExpression: `N = n × Nₐ`,
            operation: `N = ${solution.givenMoles}mol × ${solution.avogadroNumber}`,
            afterExpression: `N = ${solution.particles} ${solution.particleType}`,
            reasoning: 'Each mole contributes 6.022×10²³ particles',
            visualHint: 'Multiply the number of groups by the size of each group',
            finalAnswer: true,
            result: solution.particles
        });

        return steps;
    }

    generateMassMassSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write balanced equation',
            description: 'Ensure the chemical equation is balanced',
            equation: solution.equation,
            reasoning: 'Balanced equation provides stoichiometric ratios',
            conceptualNote: 'Coefficients represent mole ratios, not mass ratios',
            goalStatement: 'Convert mass of given substance to mass of desired substance'
        });

        steps.push({
            stepNumber: 2,
            step: 'Convert given mass to moles',
            description: `Convert ${solution.givenMass}g of ${solution.givenSubstance} to moles`,
            beforeExpression: `n = m/M`,
            molarMass: solution.givenMolarMass,
            operation: `n = ${solution.givenMass}g / ${solution.givenMolarMass}g/mol`,
            afterExpression: `n = ${solution.givenMoles} mol ${solution.givenSubstance}`,
            reasoning: 'We must work with moles to use stoichiometric ratios',
            algebraicRule: 'n = m/M'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply stoichiometric ratio',
            description: 'Use mole ratio from balanced equation',
            moleRatio: solution.moleRatio,
            coefficients: solution.stoichiometricCoefficients,
            operation: `${solution.givenMoles}mol × (${solution.stoichiometricCoefficients.desired}/${solution.stoichiometricCoefficients.given})`,
            afterExpression: `${solution.desiredMoles} mol ${solution.desiredSubstance}`,
            reasoning: 'Coefficients tell us how many moles of product form per mole of reactant',
            visualHint: 'The recipe ratio from the balanced equation'
        });

        steps.push({
            stepNumber: 4,
            step: 'Convert moles to mass',
            description: `Convert ${solution.desiredMoles}mol to grams`,
            beforeExpression: `m = n × M`,
            molarMass: solution.desiredMolarMass,
            operation: `m = ${solution.desiredMoles}mol × ${solution.desiredMolarMass}g/mol`,
            afterExpression: `m = ${solution.desiredMass}g ${solution.desiredSubstance}`,
            reasoning: 'Convert back to mass for practical measurement',
            finalAnswer: true,
            result: solution.desiredMass
        });

        return steps;
    }

    generateLimitingReagentSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write balanced equation',
            description: 'Verify the equation is balanced',
            equation: solution.equation,
            reasoning: 'Need stoichiometric coefficients for comparison',
            goalStatement: 'Identify which reactant runs out first'
        });

        steps.push({
            stepNumber: 2,
            step: 'Convert all reactant masses to moles',
            description: 'Calculate moles for each reactant',
            calculations: solution.reactantAnalysis.map(r => ({
                reactant: r.formula,
                mass: r.mass,
                molarMass: r.molarMass,
                moles: r.moles,
                calculation: `${r.mass}g / ${r.molarMass}g/mol = ${r.moles}mol`
            })),
            reasoning: 'Must compare reactants in terms of moles',
            algebraicRule: 'n = m/M for each reactant'
        });

        steps.push({
            stepNumber: 3,
            step: 'Divide by stoichiometric coefficients',
            description: 'Calculate moles per coefficient ratio',
            calculations: solution.reactantAnalysis.map(r => ({
                reactant: r.formula,
                moles: r.moles,
                coefficient: r.coefficient,
                ratio: r.ratio,
                calculation: `${r.moles}mol / ${r.coefficient} = ${r.ratio}`
            })),
            reasoning: 'This normalizes to compare which runs out first',
            criticalWarning: 'The smallest ratio indicates the limiting reagent',
            visualHint: 'Think of it as "moles available per mole needed"'
        });

        steps.push({
            stepNumber: 4,
            step: 'Identify limiting reagent',
            description: 'The reactant with smallest ratio is limiting',
            limitingReagent: solution.limitingReagent,
            reasoning: 'This reactant will be completely consumed first',
            conceptualNote: 'Other reactants are in excess and will have some left over',
            finalAnswer: true,
            result: solution.limitingReagent
        });

        if (solution.productMass) {
            steps.push({
                stepNumber: 5,
                step: 'Calculate product based on limiting reagent',
                description: 'Use limiting reagent moles to find product',
                productMass: solution.productMass,
                reasoning: 'Product amount is limited by the limiting reagent',
                note: 'Ignore excess reagents for this calculation'
            });
        }

        return steps;
    }

    generatePercentYieldSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify actual yield',
            description: 'The amount actually obtained from experiment',
            actualYield: solution.actualYield,
            reasoning: 'This is measured experimentally',
            conceptualNote: 'Always less than or equal to theoretical due to losses',
            goalStatement: 'Calculate efficiency of the reaction'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify theoretical yield',
            description: 'The maximum possible amount from stoichiometry',
            theoreticalYield: solution.theoreticalYield,
            reasoning: 'Calculated from balanced equation assuming 100% conversion',
            conceptualNote: 'Represents perfect conditions with no losses'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply percent yield formula',
            description: 'Calculate ratio of actual to theoretical',
            beforeExpression: '% yield = (actual/theoretical) × 100%',
            operation: `% yield = (${solution.actualYield}/${solution.theoreticalYield}) × 100%`,
            afterExpression: `% yield = ${solution.percentYield}%`,
            reasoning: 'This quantifies reaction efficiency',
            finalAnswer: true,
            result: solution.percentYield
        });

        steps.push({
            stepNumber: 4,
            step: 'Interpret result',
            description: 'Evaluate the reaction efficiency',
            interpretation: solution.interpretation,
            reasoning: 'Context helps understand if result is reasonable',
            possibleReasons: this.getPercentYieldReasons(solution.percentYield)
        });

        return steps;
    }

    generateEmpiricalFormulaSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Convert percent to grams',
            description: 'Assume 100g sample for convenience',
            composition: solution.composition,
            reasoning: 'Percent becomes grams directly with 100g assumption',
            conceptualNote: 'Any sample size works; 100g is just convenient',
            goalStatement: 'Find simplest whole number ratio of elements'
        });

        steps.push({
            stepNumber: 2,
            step: 'Convert grams to moles',
            description: 'Divide each mass by its atomic mass',
            calculations: Object.entries(solution.elementMoles).map(([element, moles]) => ({
                element: element,
                mass: solution.composition[element],
                atomicMass: this.periodicTable[element].mass,
                moles: moles,
                calculation: `${solution.composition[element]}g / ${this.periodicTable[element].mass}g/mol = ${moles}mol`
            })),
            reasoning: 'Convert to moles to find mole ratios',
            algebraicRule: 'n = m/M for each element'
        });

        steps.push({
            stepNumber: 3,
            step: 'Divide by smallest number of moles',
            description: 'Find simplest mole ratio',
            smallestMoles: Math.min(...Object.values(solution.elementMoles)),
            moleRatios: solution.moleRatios,
            calculations: Object.entries(solution.moleRatios).map(([element, ratio]) => ({
                element: element,
                originalMoles: solution.elementMoles[element],
                ratio: ratio,
                calculation: `${solution.elementMoles[element]} / ${Math.min(...Object.values(solution.elementMoles))} = ${ratio}`
            })),
            reasoning: 'This gives relative ratios of elements',
            visualHint: 'Normalizing to find simplest whole number relationship'
        });

        steps.push({
            stepNumber: 4,
            step: 'Convert to whole numbers',
            description: 'Multiply ratios if needed to get whole numbers',
            subscripts: solution.subscripts,
            reasoning: 'Subscripts must be whole numbers in chemical formulas',
            methodNote: 'Multiply all ratios by smallest factor to get whole numbers'
        });

        steps.push({
            stepNumber: 5,
            step: 'Write empirical formula',
            description: 'Build formula with whole number subscripts',
            empiricalFormula: solution.empiricalFormula,
            reasoning: 'This is the simplest formula representing the compound',
            finalAnswer: true,
            result: solution.empiricalFormula
        });

        return steps;
    }

    generateGenericChemSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Solve chemistry problem',
            description: 'Apply appropriate stoichiometric principles',
            solution: solution,
            reasoning: 'Use relevant chemical concepts and calculations'
        }];
    }

    // ENHANCEMENT METHODS (adapted from linear solver)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                mathematical: this.getMathematicalExplanation(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        return enhanced;
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTips(step, problemType),
                checkPoints: this.generateCheckPoints(step),
                warningFlags: this.identifyWarningFlags(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestion(step),
                expectedResult: this.describeExpectedResult(step),
                troubleshooting: this.generateTroubleshootingTips(step)
            }
        };
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestions(step, problem),
                subSteps: this.breakIntoSubSteps(step),
                hints: this.generateProgressiveHints(step),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcess(step),
                decisionPoints: this.identifyDecisionPoints(step),
                alternativeApproaches: this.suggestAlternativeMethods(step, problem)
            }
        }));
    }

    // EXPLANATION HELPER METHODS

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Parse chemical formula': 'Understanding the composition of a molecule is the first step in any stoichiometric calculation. Each element symbol and its subscript tell us exactly how many atoms of that element are present.',
            'Convert given mass to moles': 'Mass is what we measure in the lab, but chemical reactions occur between specific numbers of molecules. Converting to moles allows us to count molecules.',
            'Apply stoichiometric ratio': 'The balanced equation tells us the exact recipe for the reaction - how many molecules of each substance react together.',
            'Identify limiting reagent': 'Just like baking where running out of one ingredient stops production, the limiting reagent determines how much product can form.'
        };

        return conceptualExplanations[step.step] || 'This step advances us toward the solution using chemical principles.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Set up the formula needed
2. Substitute known values
3. Perform the calculation
4. Check units and significant figures`;
        }
        return 'Follow standard stoichiometric procedure for this calculation type.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'molar_mass': 'Imagine collecting all the atoms in one molecule and weighing them together.',
            'mass_to_moles': 'Think of moles as packages - how many packages of molecules do you have?',
            'limiting_reagent': 'Visualize an assembly line that stops when one part runs out.',
            'percent_yield': 'Compare what you got to what was possible, like comparing actual score to maximum score.'
        };

        return visualExplanations[problem.type] || 'Visualize the chemical transformation at the molecular level.';
    }

    getMathematicalExplanation(step) {
        const mathExplanations = {
            'Apply conversion formula': 'Use dimensional analysis to ensure units cancel appropriately',
            'Apply stoichiometric ratio': 'Multiply by ratio as a conversion factor',
            'Calculate contributions': 'Sum the products of atomic masses and their frequencies'
        };

        return mathExplanations[step.step] || 'Apply standard mathematical operations with proper unit tracking.';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const level = this.difficultyLevels[explanationLevel] || this.difficultyLevels.intermediate;
        return {
            adaptedDescription: this.adaptLanguageLevel(step.description, level),
            adaptedReasoning: this.adaptLanguageLevel(step.reasoning, level),
            complexityLevel: explanationLevel
        };
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'stoichiometric': 'recipe',
                    'molar mass': 'mass of one mole',
                    'coefficient': 'number in front',
                    'empirical formula': 'simplest formula',
                    'theoretical yield': 'maximum possible amount'
                }
            },
            intermediate: {
                replacements: {
                    'stoichiometric': 'stoichiometric',
                    'molar mass': 'molar mass',
                    'coefficient': 'coefficient',
                    'empirical formula': 'empirical formula',
                    'theoretical yield': 'theoretical yield'
                }
            },
            detailed: {
                replacements: {
                    'stoichiometric': 'stoichiometric (quantitative relationship)',
                    'molar mass': 'molar mass (mass per mole of substance)',
                    'coefficient': 'stoichiometric coefficient',
                    'empirical formula': 'empirical formula (simplest whole number ratio)',
                    'theoretical yield': 'theoretical yield (stoichiometric maximum)'
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

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the calculation sequence`,
            progression: 'We are making progress through the stoichiometric pathway',
            relationship: 'Each conversion brings us closer to the final answer'
        };
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.result || 'intermediate result'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to continue the stoichiometric calculation`,
            howItHelps: `This moves us from ${currentStep.step} to ${nextStep.step}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue the calculation pathway`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" involves ${nextStep.description}`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Convert given mass to moles': [
                'Double-check you\'re using the correct molar mass',
                'Ensure mass and molar mass have compatible units',
                'Verify significant figures in final answer'
            ],
            'Apply stoichiometric ratio': [
                'Make sure equation is balanced first',
                'Use coefficients, not subscripts, for ratios',
                'Check that units cancel properly'
            ]
        };

        return tips[step.step] || ['Double-check calculations', 'Verify units throughout'];
    }

    generateCheckPoints(step) {
        return [
            'Verify all values are substituted correctly',
            'Check that units cancel appropriately',
            'Ensure calculation follows proper order of operations',
            'Confirm result has correct significant figures'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            limiting_reagent: step.step === 'Divide by stoichiometric coefficients' ?
                ['Must divide each reactant\'s moles by its own coefficient'] : [],
            percent_yield: step.step === 'Apply percent yield formula' ?
                ['Make sure actual is in numerator, theoretical in denominator'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Convert given mass to moles': 'Did I divide mass by molar mass (not multiply)?',
            'Apply stoichiometric ratio': 'Am I using the balanced equation coefficients?',
            'Identify limiting reagent': 'Did I divide each reactant by its coefficient before comparing?'
        };

        return questions[step.step] || 'Does this step make sense chemically and mathematically?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Convert given mass to moles': 'Result should be in moles with proper sig figs',
            'Apply stoichiometric ratio': 'Should get moles of desired substance',
            'Identify limiting reagent': 'Should identify one specific reactant'
        };

        return expectations[step.step] || 'Step should progress toward final answer';
    }

    generateTroubleshootingTips(step) {
        return [
            'If answer seems wrong, check unit conversions',
            'Verify you used the correct formula',
            'Check for arithmetic errors',
            'Ensure proper use of significant figures'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.operation) {
            return [
                'Identify the formula needed',
                'Substitute known values',
                'Perform the calculation',
                'Check units and round appropriately'
            ];
        }
        return ['Understand the goal', 'Gather needed information', 'Execute the calculation'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Practice with a different substance but same calculation type',
            practiceHint: 'Try simpler numbers first to build confidence',
            extension: 'Try multi-step problems combining several conversions'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'What conversion or calculation will get me there?',
            execute: 'How do I perform this calculation correctly?',
            verify: 'Does my answer make chemical sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Choosing the correct formula or conversion factor',
            'Deciding which values to substitute',
            'Determining proper unit handling'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Convert given mass to moles': [
                'Could use dimensional analysis setup',
                'Could calculate molar mass separately first'
            ],
            'Apply stoichiometric ratio': [
                'Could use factor-label method',
                'Could set up proportion equation'
            ]
        };

        return alternatives[step.step] || ['This is the most direct approach for this step'];
    }

    identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'Parse chemical formula': ['Understanding chemical formulas', 'Reading subscripts'],
            'Convert given mass to moles': ['Division with significant figures', 'Unit conversion'],
            'Apply stoichiometric ratio': ['Understanding balanced equations', 'Mole ratios']
        };

        return prerequisites[step.step] || ['Basic chemical calculations'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Parse chemical formula': ['formula', 'subscript', 'element symbol', 'compound'],
            'Convert given mass to moles': ['mole', 'molar mass', 'Avogadro\'s number'],
            'Apply stoichiometric ratio': ['coefficient', 'balanced equation', 'mole ratio']
        };

        return vocabulary[step.step] || [];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Parse chemical formula': [
                'What elements are present in this compound?',
                'How many atoms of each element are there?',
                'Are there any parentheses that need special attention?'
            ],
            'Convert given mass to moles': [
                'What is the molar mass of the substance?',
                'Do I need to divide or multiply to get moles?',
                'Are my units correct?'
            ],
            'Apply stoichiometric ratio': [
                'What is the balanced equation?',
                'What are the coefficients of the substances I\'m working with?',
                'How do I set up the mole ratio?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'What information do I need?'];
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Think about what type of conversion or calculation is needed.',
            level2: 'Remember to track units through every step.',
            level3: 'Use the appropriate formula or conversion factor.',
            level4: step.operation ? `Try using: ${step.operation}` : 'Apply the standard method for this calculation type.'
        };
    }

    getPercentYieldReasons(percentYield) {
        if (percentYield > 100) {
            return ['Measurement error', 'Impure product', 'Side reactions forming additional product'];
        } else if (percentYield < 100) {
            return ['Incomplete reaction', 'Side reactions', 'Product loss during purification', 'Measurement errors'];
        }
        return ['Perfect reaction conditions (rare in practice)'];
    }

    // VISUALIZATION

    generateStoichiometryVisualization() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;

        // Generate visualizations based on problem type
        // This could include molecular representations, reaction diagrams, etc.
        this.graphData = {
            type: type,
            solution: this.currentSolution
        };
    }

    // VERIFICATION METHODS

    verifyStoichiometryCalculation() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const { type } = this.currentProblem;

        switch (type) {
            case 'mass_to_moles':
                return this.verifyMassToMoles();
            case 'moles_to_mass':
                return this.verifyMolesToMass();
            case 'particles_to_moles':
                return this.verifyParticlesToMoles();
            case 'moles_to_particles':
                return this.verifyMolesToParticles();
            case 'mass_mass_stoichiometry':
                return this.verifyMassMassStoichiometry();
            case 'percent_yield':
                return this.verifyPercentYield();
            default:
                return this.verifyGenericCalculation();
        }
    }

    verifyMassToMoles() {
        const { givenMass, molarMass, moles } = this.currentSolution;
        
        const recalculatedMoles = givenMass / molarMass;
        const difference = Math.abs(recalculatedMoles - moles);
        const tolerance = 1e-10;

        return {
            givenMass: givenMass,
            molarMass: molarMass,
            calculatedMoles: moles,
            verification: recalculatedMoles,
            difference: difference,
            isValid: difference < tolerance,
            formula: 'n = m/M',
            substitution: `n = ${givenMass}g / ${molarMass}g/mol = ${recalculatedMoles}mol`
        };
    }

    verifyMolesToMass() {
        const { givenMoles, molarMass, mass } = this.currentSolution;
        
        const recalculatedMass = givenMoles * molarMass;
        const difference = Math.abs(recalculatedMass - mass);
        const tolerance = 1e-10;

        return {
            givenMoles: givenMoles,
            molarMass: molarMass,
            calculatedMass: mass,
            verification: recalculatedMass,
            difference: difference,
            isValid: difference < tolerance,
            formula: 'm = n × M',
            substitution: `m = ${givenMoles}mol × ${molarMass}g/mol = ${recalculatedMass}g`
        };
    }

    verifyParticlesToMoles() {
        const { givenParticles, avogadroNumber, moles } = this.currentSolution;
        
        const recalculatedMoles = givenParticles / avogadroNumber;
        const difference = Math.abs(recalculatedMoles - moles);
        const tolerance = 1e-10;

        return {
            givenParticles: givenParticles,
            avogadroNumber: avogadroNumber,
            calculatedMoles: moles,
            verification: recalculatedMoles,
            difference: difference,
            isValid: difference < tolerance,
            formula: 'n = N/Nₐ',
            substitution: `n = ${givenParticles} / ${avogadroNumber} = ${recalculatedMoles}mol`
        };
    }

    verifyMolesToParticles() {
        const { givenMoles, avogadroNumber, particles } = this.currentSolution;
        
        const recalculatedParticles = givenMoles * avogadroNumber;
        const difference = Math.abs(recalculatedParticles - particles);
        const tolerance = 1e-5; // Larger tolerance for very large numbers

        return {
            givenMoles: givenMoles,
            avogadroNumber: avogadroNumber,
            calculatedParticles: particles,
            verification: recalculatedParticles,
            difference: difference,
            isValid: difference < tolerance,
            formula: 'N = n × Nₐ',
            substitution: `N = ${givenMoles}mol × ${avogadroNumber} = ${recalculatedParticles}`
        };
    }

    verifyMassMassStoichiometry() {
        const solution = this.currentSolution;
        
        // Verify each step
        const step1Check = Math.abs((solution.givenMass / solution.givenMolarMass) - solution.givenMoles) < 1e-10;
        const step2Check = Math.abs((solution.givenMoles * solution.moleRatio) - solution.desiredMoles) < 1e-10;
        const step3Check = Math.abs((solution.desiredMoles * solution.desiredMolarMass) - solution.desiredMass) < 1e-10;

        return {
            step1: {
                description: 'Mass to moles conversion',
                isValid: step1Check,
                calculation: `${solution.givenMass} / ${solution.givenMolarMass} = ${solution.givenMoles}`
            },
            step2: {
                description: 'Stoichiometric ratio application',
                isValid: step2Check,
                calculation: `${solution.givenMoles} × ${solution.moleRatio} = ${solution.desiredMoles}`
            },
            step3: {
                description: 'Moles to mass conversion',
                isValid: step3Check,
                calculation: `${solution.desiredMoles} × ${solution.desiredMolarMass} = ${solution.desiredMass}`
            },
            allStepsValid: step1Check && step2Check && step3Check,
            overallResult: solution.desiredMass
        };
    }

    verifyPercentYield() {
        const { actualYield, theoreticalYield, percentYield } = this.currentSolution;
        
        const recalculatedPercent = (actualYield / theoreticalYield) * 100;
        const difference = Math.abs(recalculatedPercent - percentYield);
        const tolerance = 0.01; // 0.01% tolerance

        return {
            actualYield: actualYield,
            theoreticalYield: theoreticalYield,
            calculatedPercentYield: percentYield,
            verification: recalculatedPercent,
            difference: difference,
            isValid: difference < tolerance,
            formula: '% yield = (actual/theoretical) × 100%',
            substitution: `% yield = (${actualYield}/${theoreticalYield}) × 100% = ${recalculatedPercent}%`,
            interpretation: this.interpretPercentYield(percentYield)
        };
    }

    verifyGenericCalculation() {
        return {
            message: 'Standard verification completed',
            isValid: true,
            note: 'Specific verification depends on problem type'
        };
    }

    // FORMATTING METHODS FOR VERIFICATION DATA

    formatMassToMolesVerification(verification) {
        return [
            ['Given Mass', `${verification.givenMass} g`],
            ['Molar Mass', `${verification.molarMass} g/mol`],
            ['Calculated Moles', verification.calculatedMoles],
            ['Verification', verification.verification],
            ['Formula Used', verification.formula],
            ['Substitution', verification.substitution],
            ['Difference', verification.difference.toExponential(2)],
            ['Valid', verification.isValid ? 'Yes' : 'No']
        ];
    }

    formatMolesToMassVerification(verification) {
        return [
            ['Given Moles', `${verification.givenMoles} mol`],
            ['Molar Mass', `${verification.molarMass} g/mol`],
            ['Calculated Mass', `${verification.calculatedMass} g`],
            ['Verification', `${verification.verification} g`],
            ['Formula Used', verification.formula],
            ['Substitution', verification.substitution],
            ['Difference', verification.difference.toExponential(2)],
            ['Valid', verification.isValid ? 'Yes' : 'No']
        ];
    }

    formatParticlesToMolesVerification(verification) {
        return [
            ['Given Particles', verification.givenParticles],
            ['Avogadro\'s Number', verification.avogadroNumber],
            ['Calculated Moles', verification.calculatedMoles],
            ['Verification', verification.verification],
            ['Formula Used', verification.formula],
            ['Substitution', verification.substitution],
            ['Difference', verification.difference.toExponential(2)],
            ['Valid', verification.isValid ? 'Yes' : 'No']
        ];
    }

    formatMolesToParticlesVerification(verification) {
        return [
            ['Given Moles', `${verification.givenMoles} mol`],
            ['Avogadro\'s Number', verification.avogadroNumber],
            ['Calculated Particles', verification.calculatedParticles],
            ['Verification', verification.verification],
            ['Formula Used', verification.formula],
            ['Substitution', verification.substitution],
            ['Difference', verification.difference.toExponential(2)],
            ['Valid', verification.isValid ? 'Yes' : 'No']
        ];
    }

    formatMassMassVerification(verification) {
        return [
            ['Step 1: Mass to Moles', ''],
            ['Valid', verification.step1.isValid ? 'Yes' : 'No'],
            ['Calculation', verification.step1.calculation],
            ['', ''],
            ['Step 2: Stoichiometric Ratio', ''],
            ['Valid', verification.step2.isValid ? 'Yes' : 'No'],
            ['Calculation', verification.step2.calculation],
            ['', ''],
            ['Step 3: Moles to Mass', ''],
            ['Valid', verification.step3.isValid ? 'Yes' : 'No'],
            ['Calculation', verification.step3.calculation],
            ['', ''],
            ['All Steps Valid', verification.allStepsValid ? 'Yes' : 'No'],
            ['Final Result', `${verification.overallResult} g`]
        ];
    }

    formatPercentYieldVerification(verification) {
        return [
            ['Actual Yield', `${verification.actualYield} g`],
            ['Theoretical Yield', `${verification.theoreticalYield} g`],
            ['Calculated % Yield', `${verification.calculatedPercentYield}%`],
            ['Verification', `${verification.verification}%`],
            ['Formula Used', verification.formula],
            ['Substitution', verification.substitution],
            ['Difference', verification.difference.toFixed(3)],
            ['Valid', verification.isValid ? 'Yes' : 'No'],
            ['Interpretation', verification.interpretation]
        ];
    }

    // CONFIDENCE AND NOTES METHODS

    calculateVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const verification = this.verifyStoichiometryCalculation();
        
        if (!verification) return 'Medium';
        
        if (verification.isValid !== undefined) {
            return verification.isValid ? 'High' : 'Low';
        }
        
        if (verification.allStepsValid !== undefined) {
            return verification.allStepsValid ? 'High' : 'Medium';
        }

        return 'Medium';
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'mass_to_moles':
            case 'moles_to_mass':
                notes.push('Direct conversion formula applied');
                notes.push('Molar mass verified from periodic table');
                break;

            case 'particles_to_moles':
            case 'moles_to_particles':
                notes.push('Avogadro\'s number used as conversion factor');
                notes.push('Scientific notation verified for large numbers');
                break;

            case 'mass_mass_stoichiometry':
                notes.push('Multi-step verification performed');
                notes.push('Each conversion step validated independently');
                notes.push('Stoichiometric ratio confirmed from balanced equation');
                break;

            case 'percent_yield':
                notes.push('Actual and theoretical yields compared');
                notes.push('Result interpreted for chemical reasonableness');
                break;

            default:
                notes.push('Standard stoichiometric verification applied');
        }

        return notes.join('; ');
    }

    // PEDAGOGICAL NOTES

    generatePedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            molar_mass: {
                objectives: [
                    'Calculate molar mass from chemical formula',
                    'Use periodic table to find atomic masses',
                    'Sum contributions from all atoms in formula'
                ],
                keyConcepts: [
                    'Molar mass as conversion factor',
                    'Relationship between atomic mass and molar mass',
                    'Importance of subscripts in formulas'
                ],
                prerequisites: [
                    'Reading chemical formulas',
                    'Using the periodic table',
                    'Basic arithmetic with decimals'
                ],
                commonDifficulties: [
                    'Forgetting to multiply by subscripts',
                    'Misreading chemical formulas with parentheses',
                    'Using incorrect atomic masses'
                ],
                extensions: [
                    'Hydrated compounds',
                    'Complex organic molecules',
                    'Percent composition calculations'
                ],
                assessment: [
                    'Verify formula parsing is correct',
                    'Check atomic mass lookup',
                    'Confirm arithmetic accuracy'
                ]
            },

            mass_to_moles: {
                objectives: [
                    'Convert mass to moles using molar mass',
                    'Understand mole as counting unit',
                    'Apply dimensional analysis'
                ],
                keyConcepts: [
                    'Mole concept',
                    'Molar mass as bridge between mass and moles',
                    'Unit conversion methodology'
                ],
                prerequisites: [
                    'Molar mass calculation',
                    'Division with significant figures',
                    'Understanding of the mole'
                ],
                commonDifficulties: [
                    'Inverting the calculation (multiply instead of divide)',
                    'Using wrong molar mass',
                    'Unit confusion'
                ],
                extensions: [
                    'Multi-step conversions',
                    'Mixture calculations',
                    'Solution preparations'
                ],
                assessment: [
                    'Check proper use of formula n = m/M',
                    'Verify correct molar mass',
                    'Confirm unit handling'
                ]
            },

            mass_mass_stoichiometry: {
                objectives: [
                    'Perform multi-step stoichiometric calculations',
                    'Apply mole ratios from balanced equations',
                    'Convert between masses of different substances'
                ],
                keyConcepts: [
                    'Stoichiometric pathway: mass → moles → moles → mass',
                    'Mole ratios from coefficients',
                    'Conservation of mass in reactions'
                ],
                prerequisites: [
                    'Balancing chemical equations',
                    'Mass-mole conversions',
                    'Understanding of chemical reactions'
                ],
                commonDifficulties: [
                    'Forgetting to balance equation first',
                    'Using subscripts instead of coefficients',
                    'Skipping intermediate mole conversion'
                ],
                extensions: [
                    'Limiting reagent problems',
                    'Percent yield calculations',
                    'Multi-reactant scenarios'
                ],
                assessment: [
                    'Verify equation is balanced',
                    'Check each conversion step',
                    'Confirm proper use of mole ratios'
                ]
            },

            limiting_reagent: {
                objectives: [
                    'Identify limiting and excess reagents',
                    'Calculate product yield based on limiting reagent',
                    'Determine amount of excess reagent remaining'
                ],
                keyConcepts: [
                    'Limiting reagent concept',
                    'Stoichiometric ratios comparison',
                    'Reaction completion principles'
                ],
                prerequisites: [
                    'Mass-mole conversions',
                    'Stoichiometric ratios',
                    'Multi-step calculations'
                ],
                commonDifficulties: [
                    'Forgetting to divide by coefficients',
                    'Comparing wrong quantities',
                    'Using wrong reactant for product calculation'
                ],
                extensions: [
                    'Percent yield with limiting reagent',
                    'Three or more reactants',
                    'Industrial applications'
                ],
                assessment: [
                    'Verify coefficient division is correct',
                    'Check comparison logic',
                    'Confirm product based on limiting reagent only'
                ]
            },

            percent_yield: {
                objectives: [
                    'Calculate percent yield from actual and theoretical',
                    'Understand factors affecting yield',
                    'Interpret yield in context of reaction efficiency'
                ],
                keyConcepts: [
                    'Theoretical vs actual yield',
                    'Reaction efficiency',
                    'Sources of product loss'
                ],
                prerequisites: [
                    'Stoichiometric calculations',
                    'Percent calculations',
                    'Understanding of chemical reactions'
                ],
                commonDifficulties: [
                    'Inverting the fraction (theoretical/actual)',
                    'Forgetting to multiply by 100',
                    'Misunderstanding which value is which'
                ],
                extensions: [
                    'Multi-step synthesis yields',
                    'Optimization strategies',
                    'Cost-benefit analysis'
                ],
                assessment: [
                    'Verify correct formula application',
                    'Check reasonableness of result',
                    'Assess understanding of yield factors'
                ]
            },

            empirical_formula: {
                objectives: [
                    'Determine empirical formula from percent composition',
                    'Convert percent to mole ratios',
                    'Simplify ratios to whole numbers'
                ],
                keyConcepts: [
                    'Empirical vs molecular formula',
                    'Mole ratios from mass data',
                    'Whole number ratio determination'
                ],
                prerequisites: [
                    'Percent composition',
                    'Mass-mole conversions',
                    'Finding common factors'
                ],
                commonDifficulties: [
                    'Not dividing by smallest moles',
                    'Difficulty converting to whole numbers',
                    'Arithmetic errors in ratio simplification'
                ],
                extensions: [
                    'Molecular formula determination',
                    'Combustion analysis',
                    'Structural formula determination'
                ],
                assessment: [
                    'Check mole calculation for each element',
                    'Verify ratio simplification',
                    'Confirm final formula makes chemical sense'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Complete the stoichiometric calculation correctly'],
            keyConcepts: ['Apply appropriate chemical principles'],
            prerequisites: ['Basic stoichiometry skills'],
            commonDifficulties: ['Various computational errors'],
            extensions: ['More complex variations'],
            assessment: ['Verify calculation accuracy and chemical reasoning']
        };
    }

    // ALTERNATIVE METHODS

    generateAlternativeMethods(problemType) {
        const alternativeDatabase = {
            mass_to_moles: {
                primaryMethod: 'Direct division: n = m/M',
                methods: [
                    {
                        name: 'Dimensional Analysis',
                        description: 'Set up conversion factor with units: mass × (1 mol / molar mass)'
                    },
                    {
                        name: 'Proportion Method',
                        description: 'Set up proportion: if M grams = 1 mol, then m grams = ? mol'
                    }
                ],
                comparison: 'Direct division is fastest; dimensional analysis helps visualize unit cancellation; proportion good for conceptual understanding'
            },

            mass_mass_stoichiometry: {
                primaryMethod: 'Sequential conversion: mass → moles → moles → mass',
                methods: [
                    {
                        name: 'Combined Factor-Label',
                        description: 'Chain all conversions in one expression using multiple conversion factors'
                    },
                    {
                        name: 'Proportion from Equation',
                        description: 'Set up mass ratio directly from molar masses and coefficients'
                    },
                    {
                        name: 'Step-by-Step Method',
                        description: 'Complete each conversion separately, checking units at each step'
                    }
                ],
                comparison: 'Sequential is clearest for learning; combined factor-label is efficient for experts; proportion useful for simple cases'
            },

            limiting_reagent: {
                primaryMethod: 'Divide moles by coefficients and compare',
                methods: [
                    {
                        name: 'Product Comparison Method',
                        description: 'Calculate product from each reactant separately; smallest is from limiting reagent'
                    },
                    {
                        name: 'Ratio Comparison',
                        description: 'Compare actual mole ratios to required stoichiometric ratios'
                    },
                    {
                        name: 'Table Method',
                        description: 'Use ICE-like table to track initial, change, and final amounts'
                    }
                ],
                comparison: 'Coefficient division is most straightforward; product comparison provides verification; table method good for complex scenarios'
            },

            empirical_formula: {
                primaryMethod: 'Convert % to moles, divide by smallest, convert to whole numbers',
                methods: [
                    {
                        name: '100g Basis Method',
                        description: 'Assume 100g sample so percent = grams directly'
                    },
                    {
                        name: 'Smallest Element Method',
                        description: 'Divide all masses by smallest element\'s atomic mass first'
                    },
                    {
                        name: 'Trial Multiplier Method',
                        description: 'Test different multipliers systematically to find whole numbers'
                    }
                ],
                comparison: '100g basis is standard and clearest; other methods are shortcuts that work in specific cases'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard stoichiometric approach',
            methods: [
                {
                    name: 'Systematic Calculation',
                    description: 'Follow standard problem-solving methodology'
                }
            ],
            comparison: 'Method choice depends on problem complexity and personal preference'
        };
    }

    // WORKBOOK GENERATION

    generateStoichiometryWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Stoichiometry Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.stoichiometryTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.stoichiometryTypes[this.currentProblem.type]?.category || 'General']
        ];

        if (this.currentProblem.parameters.formula) {
            problemData.push(['Chemical Formula', this.currentProblem.parameters.formula]);
        }
        if (this.currentProblem.parameters.equation) {
            problemData.push(['Chemical Equation', this.currentProblem.parameters.equation]);
        }
        if (this.currentProblem.scenario) {
            problemData.push(['Scenario', this.currentProblem.scenario]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Skip bridge steps for basic display
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            stepsData.push(['Step ' + step.stepNumber, step.description]);

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            } else if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule/Formula', step.algebraicRule]);
            }

            if (step.conceptualNote) {
                stepsData.push(['Concept', step.conceptualNote]);
            }

            // Enhanced explanations for detailed level
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual Explanation', step.explanations.conceptual]);
                if (step.explanations.visual) {
                    stepsData.push(['Visual Understanding', step.explanations.visual]);
                }
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
            }

            // Scaffolding for scaffolded level
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                if (step.scaffolding.guidingQuestions.length > 0) {
                    stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
                }
            }

            if (step.finalAnswer) {
                stepsData.push(['*** FINAL ANSWER ***', step.result || step.afterExpression]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSection() {
        const { type } = this.currentProblem;
        const lesson = this.lessons?.[type];

        if (!lesson) {
            return {
                title: 'Key Concepts',
                type: 'lesson',
                data: [
                    ['Concept', 'Apply stoichiometric principles'],
                    ['Goal', 'Perform accurate chemical calculations'],
                    ['Method', 'Use conversion factors and balanced equations']
                ]
            };
        }

        return {
            title: lesson.title,
            type: 'lesson',
            data: [
                ['Theory', lesson.theory],
                ['Key Concepts', lesson.concepts.join('; ')],
                ['Applications', lesson.applications.join('; ')]
            ]
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.result !== undefined) {
            solutionData.push(['Final Answer', this.currentSolution.result]);
        }

        if (this.currentSolution.units) {
            solutionData.push(['Units', this.currentSolution.units]);
        }

        if (this.currentSolution.solutionType) {
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
        }

        // Add specific solution details based on problem type
        if (this.currentSolution.molarMass) {
            solutionData.push(['Molar Mass', `${this.currentSolution.molarMass} g/mol`]);
        }

        if (this.currentSolution.moles) {
            solutionData.push(['Moles', `${this.currentSolution.moles} mol`]);
        }

        if (this.currentSolution.mass) {
            solutionData.push(['Mass', `${this.currentSolution.mass} g`]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        const analysisData = [
            ['Problem Type', this.currentProblem.type],
            ['Number of Steps', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel],
            ['Method', 'Stoichiometric calculation']
        ];

        if (this.currentSolution.formula) {
            analysisData.push(['Formula Used', this.currentSolution.formula]);
        }

        if (this.currentSolution.interpretation) {
            analysisData.push(['Interpretation', this.currentSolution.interpretation]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [];
        const { type } = this.currentProblem;

        verificationData.push(['Verification Method', 'Result']);
        verificationData.push(['', '']); // Spacing

        const verification = this.verifyStoichiometryCalculation();

        switch (type) {
            case 'mass_to_moles':
                verificationData.push(...this.formatMassToMolesVerification(verification));
                break;
            case 'moles_to_mass':
                verificationData.push(...this.formatMolesToMassVerification(verification));
                break;
            case 'particles_to_moles':
                verificationData.push(...this.formatParticlesToMolesVerification(verification));
                break;
            case 'moles_to_particles':
                verificationData.push(...this.formatMolesToParticlesVerification(verification));
                break;
            case 'mass_mass_stoichiometry':
                verificationData.push(...this.formatMassMassVerification(verification));
                break;
            case 'percent_yield':
                verificationData.push(...this.formatPercentYieldVerification(verification));
                break;
            default:
                verificationData.push(['General Check', 'Solution verified using standard methods']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']); // Spacing
            verificationData.push(['Confidence Level', this.calculateVerificationConfidence()]);
            verificationData.push(['Verification Notes', this.getVerificationNotes()]);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData,
            confidence: this.calculateVerificationConfidence()
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generatePedagogicalNotes(type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')],
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethods(type);

        const data = [
            ['Primary Method Used', alternatives.primaryMethod],
            ['', ''], // Spacing
            ['Alternative Methods', '']
        ];

        alternatives.methods.forEach((method, index) => {
            data.push([`Method ${index + 1}`, `${method.name}: ${method.description}`]);
        });

        data.push(['', '']); // Spacing
        data.push(['Method Comparison', alternatives.comparison]);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: data
        };
    }

    // UTILITY METHOD: GCD
    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}

// Export the class
export default EnhancedStoichiometryMathematicalWorkbook;
