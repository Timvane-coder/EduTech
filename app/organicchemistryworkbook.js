// Enhanced Organic Chemistry Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedOrganicChemistryWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "chemistry";
        this.cellWidth = 220;
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

        this.chemSymbols = this.initializeChemicalSymbols();
        this.atomicMasses = this.initializeAtomicMasses();
        this.setThemeColors();
        this.initializeOrganicSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
        this.initializeOrganicLessons();
    }

    initializeAtomicMasses() {
        return {
            'H': 1.008,
            'C': 12.011,
            'N': 14.007,
            'O': 15.999,
            'S': 32.065,
            'P': 30.974,
            'F': 18.998,
            'Cl': 35.453,
            'Br': 79.904,
            'I': 126.904
        };
    }

    initializeChemicalSymbols() {
        return {
            // Greek letters for chemistry
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'sigma': 'σ',
            // Arrows
            'arrow': '→', 'equilibrium': '⇌', 'resonance': '↔',
            // Bonds
            'single': '−', 'double': '=', 'triple': '≡',
            // Special
            'degree': '°', 'partial': 'δ', 'infinity': '∞'
        };
    }

    setThemeColors() {
        const themes = {
            chemistry: {
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
                formulaBg: '#fff3e0',
                formulaText: '#e65100',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#4caf50',
                mathBg: '#e3f2fd',
                mathText: '#1565c0',
                graphBg: '#fafafa',
                vertexBg: '#ffebee'
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
                vertexBg: '#ffe0e6'
            }
        };

        this.colors = themes[this.theme] || themes.chemistry;
    }

    initializeOrganicLessons() {
        this.lessons = {
            empirical_formula: {
                title: "Empirical and Molecular Formulae",
                concepts: [
                    "Empirical formula: simplest whole number ratio of atoms",
                    "Molecular formula: actual number of atoms in a molecule",
                    "Molecular formula is a whole number multiple of empirical formula",
                    "Use percentage composition and atomic masses"
                ],
                theory: "The empirical formula represents the simplest ratio of elements in a compound, while the molecular formula shows the actual number of each type of atom. The molecular formula is always a whole number multiple of the empirical formula.",
                keyFormulas: {
                    "Moles from Mass": "moles = mass / Ar (relative atomic mass)",
                    "Empirical Formula": "Divide moles by smallest value, then convert to whole numbers",
                    "Molecular Formula": "(Empirical Formula)ₙ where n = Mr / Empirical Formula Mass",
                    "Percentage Composition": "% element = (Ar × number of atoms / Mr) × 100"
                },
                solvingSteps: [
                    "Convert percentage composition or masses to moles",
                    "Divide all mole values by the smallest",
                    "Convert to whole number ratio (empirical formula)",
                    "Calculate empirical formula mass",
                    "Divide molecular mass by empirical mass to find n",
                    "Multiply empirical formula by n for molecular formula"
                ],
                applications: [
                    "Identifying unknown organic compounds",
                    "Quality control in chemical manufacturing",
                    "Elemental analysis in research",
                    "Determining compound purity"
                ]
            },

            combustion_analysis: {
                title: "Combustion Analysis",
                concepts: [
                    "Complete combustion: CₓHᵧOᵨ + O₂ → CO₂ + H₂O",
                    "Moles of C from moles of CO₂ produced",
                    "Moles of H from moles of H₂O produced",
                    "Moles of O calculated by difference"
                ],
                theory: "Combustion analysis determines the empirical formula of an organic compound by completely burning it and measuring the masses of CO₂ and H₂O produced. Carbon content comes from CO₂, hydrogen from H₂O, and oxygen (if present) is found by difference.",
                keyFormulas: {
                    "Moles of Carbon": "moles C = moles CO₂",
                    "Moles of Hydrogen": "moles H = 2 × moles H₂O",
                    "Mass of Element": "mass = moles × Ar",
                    "Moles of Oxygen": "moles O = (mass of compound - mass C - mass H) / 16"
                },
                solvingSteps: [
                    "Calculate moles of CO₂ produced",
                    "Moles of C = moles of CO₂",
                    "Calculate moles of H₂O produced",
                    "Moles of H = 2 × moles of H₂O",
                    "Calculate mass of C and H",
                    "Find mass of O by subtraction (if O is present)",
                    "Convert masses to moles",
                    "Find empirical formula from mole ratio"
                ],
                applications: [
                    "Structural determination of unknown compounds",
                    "Verification of synthetic products",
                    "Quality assurance in organic synthesis",
                    "Academic research and analysis"
                ]
            },

            stoichiometry: {
                title: "Stoichiometry of Organic Reactions",
                concepts: [
                    "Mole ratios from balanced equations",
                    "Limiting reagent determines product amount",
                    "Mass relationships via mole calculations",
                    "Conservation of mass in reactions"
                ],
                theory: "Stoichiometry relates quantities of reactants and products in chemical reactions using mole ratios from balanced equations. For organic reactions, this allows calculation of theoretical yields and reagent requirements.",
                keyFormulas: {
                    "Moles": "moles = mass / Mr",
                    "Mass": "mass = moles × Mr",
                    "Mole Ratio": "Use coefficients from balanced equation",
                    "Limiting Reagent": "Compare mole ratios to equation coefficients"
                },
                solvingSteps: [
                    "Write balanced equation",
                    "Convert given masses to moles",
                    "Identify limiting reagent (if applicable)",
                    "Use mole ratios to find product moles",
                    "Convert product moles to mass",
                    "Calculate percentage yield if needed"
                ],
                applications: [
                    "Esterification reactions",
                    "Combustion calculations",
                    "Synthesis planning",
                    "Industrial process optimization"
                ]
            },

            percentage_yield: {
                title: "Percentage Yield Calculations",
                concepts: [
                    "Theoretical yield: maximum possible product",
                    "Actual yield: amount actually obtained",
                    "Percentage yield compares actual to theoretical",
                    "Yields less than 100% due to side reactions and losses"
                ],
                theory: "Percentage yield quantifies the efficiency of a chemical reaction by comparing the actual amount of product obtained to the theoretical maximum possible from stoichiometry.",
                keyFormulas: {
                    "Percentage Yield": "% yield = (actual yield / theoretical yield) × 100",
                    "Actual Yield": "actual = (% yield / 100) × theoretical",
                    "Theoretical Yield": "theoretical = (actual × 100) / % yield"
                },
                solvingSteps: [
                    "Calculate theoretical yield from stoichiometry",
                    "Obtain or calculate actual yield",
                    "Apply percentage yield formula",
                    "Interpret result (< 100% indicates losses)"
                ],
                applications: [
                    "Evaluating reaction efficiency",
                    "Optimizing synthetic procedures",
                    "Industrial cost analysis",
                    "Quality control in manufacturing"
                ]
            },

            homologous_series: {
                title: "Homologous Series Mass Relationships",
                concepts: [
                    "Each member differs by CH₂ (14 mass units)",
                    "General formulae for different series",
                    "Systematic increase in molecular mass",
                    "Predictable patterns in physical properties"
                ],
                theory: "Homologous series are families of organic compounds with the same functional group and similar chemical properties. Each successive member differs by a CH₂ unit (14 u).",
                keyFormulas: {
                    "Alkanes": "CₙH₂ₙ₊₂",
                    "Alkenes": "CₙH₂ₙ",
                    "Alkynes": "CₙH₂ₙ₋₂",
                    "Alcohols": "CₙH₂ₙ₊₁OH",
                    "Mass Difference": "Δ Mr = 14 (for CH₂)",
                    "Carboxylic Acids": "CₙH₂ₙO₂"
                },
                solvingSteps: [
                    "Identify the homologous series",
                    "Apply general formula",
                    "Calculate molecular mass",
                    "Recognize patterns in properties"
                ],
                applications: [
                    "Predicting compound properties",
                    "Identifying unknowns from mass spectra",
                    "Understanding structure-property relationships",
                    "Planning synthetic pathways"
                ]
            },

            polymer_chemistry: {
                title: "Polymer Chemistry Calculations",
                concepts: [
                    "Repeat unit: structural unit that repeats",
                    "Degree of polymerization: number of repeat units",
                    "Polymer mass = n × repeat unit mass",
                    "Relationship between monomer and polymer"
                ],
                theory: "Polymers are large molecules formed by joining many small monomer units. Calculations involve counting atoms in repeat units and relating monomer structure to polymer composition.",
                keyFormulas: {
                    "Polymer Mass": "Mr(polymer) = n × Mr(repeat unit)",
                    "Repeat Unit": "Derived from monomer structure",
                    "Addition Polymerization": "nC₂H₄ → (C₂H₄)ₙ",
                    "Condensation": "Involves elimination of small molecule"
                },
                solvingSteps: [
                    "Identify monomer structure",
                    "Determine repeat unit",
                    "Calculate repeat unit mass",
                    "Multiply by degree of polymerization (if given)",
                    "Count specific atoms if required"
                ],
                applications: [
                    "Plastic manufacturing",
                    "Material properties prediction",
                    "Synthetic fiber design",
                    "Biodegradable polymer development"
                ]
            },

            gas_volume_calculations: {
                title: "Gas Volume Calculations in Organic Chemistry",
                concepts: [
                    "1 mole of gas occupies 24 dm³ at r.t.p.",
                    "Molar volume allows mole-volume conversions",
                    "Useful for gaseous organic compounds",
                    "Combustion reactions produce gaseous products"
                ],
                theory: "At room temperature and pressure (r.t.p., 20°C and 1 atm), one mole of any gas occupies approximately 24 dm³. This relationship simplifies calculations involving gaseous reactants or products.",
                keyFormulas: {
                    "Volume from Moles": "Volume (dm³) = moles × 24",
                    "Moles from Volume": "moles = Volume (dm³) / 24",
                    "At r.t.p.": "1 mole = 24 dm³",
                    "Mass-Volume": "Combine with moles = mass/Mr"
                },
                solvingSteps: [
                    "Identify gaseous species",
                    "Convert mass to moles (if needed)",
                    "Use mole ratio from equation",
                    "Convert moles to volume using 24 dm³/mol",
                    "Ensure conditions are at r.t.p."
                ],
                applications: [
                    "Combustion analysis",
                    "Gas collection experiments",
                    "Industrial gas reactions",
                    "Atmospheric chemistry"
                ]
            },

            concentration_calculations: {
                title: "Concentration and Solution Calculations",
                concepts: [
                    "Concentration in mol/dm³",
                    "Dilution calculations",
                    "Solution preparation",
                    "Moles in solution = concentration × volume"
                ],
                theory: "Concentration expresses the amount of solute in a given volume of solution. For organic chemistry, this is important in reaction stoichiometry and solution preparation.",
                keyFormulas: {
                    "Moles in Solution": "moles = concentration (mol/dm³) × volume (dm³)",
                    "Concentration": "concentration = moles / volume",
                    "Dilution": "C₁V₁ = C₂V₂",
                    "Mass Concentration": "concentration = (mass/volume) / Mr"
                },
                solvingSteps: [
                    "Identify given concentration and volume",
                    "Convert volume to dm³ if needed",
                    "Calculate moles",
                    "Use stoichiometry for reactions",
                    "Calculate final concentration"
                ],
                applications: [
                    "Preparing reagent solutions",
                    "Titration calculations",
                    "Reaction rate studies",
                    "Pharmaceutical formulations"
                ]
            },

            isomer_counting: {
                title: "Isomer Analysis and Counting",
                concepts: [
                    "Structural isomers: same formula, different structure",
                    "Stereoisomers: same structure, different spatial arrangement",
                    "Systematic enumeration of possibilities",
                    "Use molecular formula to predict isomer count"
                ],
                theory: "Isomers are compounds with the same molecular formula but different structures. Counting and identifying isomers requires systematic analysis of possible structural arrangements.",
                keyFormulas: {
                    "Degree of Unsaturation": "DBE = (2C + 2 - H + N) / 2",
                    "Isomer Count": "Depends on molecular formula and functional groups"
                },
                solvingSteps: [
                    "Start with molecular formula",
                    "Calculate degree of unsaturation",
                    "Systematically vary carbon skeleton",
                    "Consider different functional group positions",
                    "Check for stereoisomers"
                ],
                applications: [
                    "Structural elucidation",
                    "Understanding compound diversity",
                    "Drug design (different isomers have different properties)",
                    "Academic problem-solving"
                ]
            }
        };
    }

    initializeOrganicSolvers() {
        this.organicTypes = {
            empirical_formula: {
                patterns: [
                    /empirical.*formula/i,
                    /simplest.*formula/i,
                    /percentage.*composition/i,
                    /elemental.*analysis/i
                ],
                solver: this.solveEmpiricalFormula.bind(this),
                name: 'Empirical Formula Calculation',
                category: 'formula_determination',
                description: 'Determines empirical formula from percentage composition or mass data'
            },

            molecular_formula: {
                patterns: [
                    /molecular.*formula/i,
                    /Mr.*formula/i,
                    /relative.*molecular.*mass/i
                ],
                solver: this.solveMolecularFormula.bind(this),
                name: 'Molecular Formula Determination',
                category: 'formula_determination',
                description: 'Finds molecular formula from empirical formula and Mr'
            },

            combustion_analysis: {
                patterns: [
                    /combustion.*analysis/i,
                    /burning.*compound/i,
                    /CO2.*H2O.*produced/i,
                    /elemental.*analysis.*combustion/i
                ],
                solver: this.solveCombustionAnalysis.bind(this),
                name: 'Combustion Analysis',
                category: 'formula_determination',
                description: 'Determines formula from combustion product masses'
            },

            stoichiometry: {
                patterns: [
                    /stoichiometry/i,
                    /reacting.*mass/i,
                    /mass.*product/i,
                    /mole.*calculation/i
                ],
                solver: this.solveStoichiometry.bind(this),
                name: 'Stoichiometry Calculations',
                category: 'quantitative_analysis',
                description: 'Calculates masses and moles in organic reactions'
            },

            percentage_yield: {
                patterns: [
                    /percentage.*yield/i,
                    /percent.*yield/i,
                    /actual.*yield/i,
                    /theoretical.*yield/i
                ],
                solver: this.solvePercentageYield.bind(this),
                name: 'Percentage Yield',
                category: 'quantitative_analysis',
                description: 'Calculates percentage yield from actual and theoretical yields'
            },

            homologous_series: {
                patterns: [
                    /homologous.*series/i,
                    /alkane.*formula/i,
                    /CnH2n/i,
                    /general.*formula/i
                ],
                solver: this.solveHomologousSeries.bind(this),
                name: 'Homologous Series',
                category: 'structural_analysis',
                description: 'Applies general formulae and calculates molecular masses'
            },

            polymer_calculation: {
                patterns: [
                    /polymer/i,
                    /repeat.*unit/i,
                    /polymerization/i,
                    /monomer/i
                ],
                solver: this.solvePolymerCalculation.bind(this),
                name: 'Polymer Chemistry',
                category: 'polymer_analysis',
                description: 'Calculations involving polymers and monomers'
            },

            gas_volume: {
                patterns: [
                    /gas.*volume/i,
                    /volume.*CO2/i,
                    /dm3.*gas/i,
                    /molar.*volume/i
                ],
                solver: this.solveGasVolume.bind(this),
                name: 'Gas Volume Calculations',
                category: 'quantitative_analysis',
                description: 'Converts between moles and gas volumes at r.t.p.'
            },

            concentration: {
                patterns: [
                    /concentration/i,
                    /mol.*dm3/i,
                    /solution.*calculation/i,
                    /dilution/i
                ],
                solver: this.solveConcentration.bind(this),
                name: 'Concentration Calculations',
                category: 'solution_chemistry',
                description: 'Calculates concentrations and dilutions'
            },

            isomer_analysis: {
                patterns: [
                    /isomer/i,
                    /structural.*isomer/i,
                    /degree.*unsaturation/i,
                    /DBE/i
                ],
                solver: this.solveIsomerAnalysis.bind(this),
                name: 'Isomer Analysis',
                category: 'structural_analysis',
                description: 'Analyzes isomers and degree of unsaturation'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            empirical_formula: {
                'Convert to moles': [
                    'Using Mr instead of Ar for individual elements',
                    'Forgetting to divide percentage by 100',
                    'Rounding too early in calculations'
                ],
                'Find ratio': [
                    'Not dividing by the smallest value',
                    'Accepting non-whole number ratios',
                    'Multiplying by wrong factor to get whole numbers'
                ]
            },
            combustion_analysis: {
                'Calculate C and H': [
                    'Forgetting that H₂O contains 2 H atoms',
                    'Using wrong molar masses for CO₂ or H₂O',
                    'Not recognizing that all C comes from CO₂'
                ],
                'Find O by difference': [
                    'Forgetting to subtract C and H masses',
                    'Not checking if O is present in compound'
                ]
            },
            stoichiometry: {
                'Convert to moles': [
                    'Using wrong Mr value',
                    'Confusing moles with mass',
                    'Not balancing equation first'
                ],
                'Apply mole ratio': [
                    'Using incorrect coefficients from unbalanced equation',
                    'Inverting the mole ratio'
                ]
            },
            percentage_yield: {
                'Calculate yield': [
                    'Mixing up actual and theoretical yield',
                    'Forgetting to multiply by 100 for percentage',
                    'Not calculating theoretical yield from stoichiometry first'
                ]
            }
        };

        this.errorPrevention = {
            mole_calculations: {
                reminder: 'Always use moles = mass / Mr',
                method: 'Write out the formula before substituting numbers'
            },
            ratio_simplification: {
                reminder: 'Divide all by the smallest before attempting to get whole numbers',
                method: 'Check if multiplying by 2, 3, or 4 gives whole numbers'
            },
            combustion_stoichiometry: {
                reminder: 'All C → CO₂, all H → H₂O (in complete combustion)',
                method: 'Draw out the relationships visually'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this step works and its chemical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of operations to perform',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Molecular and structural understanding',
                language: 'visual and spatial metaphors'
            },
            chemical: {
                focus: 'Formal chemical principles and rules',
                language: 'precise chemical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple cases'
            },
            intermediate: {
                vocabulary: 'standard chemistry terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract'
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
    solveOrganicProblem(config) {
        const { problemType, data, scenario, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseOrganicProblem(problemType, data, scenario, context);

            // Solve the problem
            this.currentSolution = this.solveOrganicProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateOrganicSteps(this.currentProblem, this.currentSolution);

            // Generate workbook
            this.generateOrganicWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                steps: this.solutionSteps
            };

        } catch (error) {
            throw new Error(`Failed to solve organic chemistry problem: ${error.message}`);
        }
    }

    parseOrganicProblem(problemType, data, scenario = '', context = {}) {
        // If problem type is specified, use it directly
        if (problemType && this.organicTypes[problemType]) {
            return {
                type: problemType,
                data: { ...data },
                scenario: scenario,
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect organic chemistry problem type
        for (const [type, config] of Object.entries(this.organicTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(scenario) || pattern.test(JSON.stringify(data))) {
                    return {
                        type: type,
                        data: { ...data },
                        scenario: scenario,
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize organic chemistry problem type from: ${scenario}`);
    }

    solveOrganicProblem_Internal(problem) {
        const solver = this.organicTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for organic chemistry problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ORGANIC CHEMISTRY SOLVERS

    solveEmpiricalFormula(problem) {
        const { percentages, masses, elements } = problem.data;

        // Input can be either percentage composition or actual masses
        let elementData = [];

        if (percentages) {
            // Convert percentages to masses (assume 100g sample)
            for (let element in percentages) {
                elementData.push({
                    element: element,
                    mass: percentages[element], // percentage = mass in 100g
                    Ar: this.atomicMasses[element]
                });
            }
        } else if (masses) {
            for (let element in masses) {
                elementData.push({
                    element: element,
                    mass: masses[element],
                    Ar: this.atomicMasses[element]
                });
            }
        } else if (elements) {
            // General format: array of {element, mass or percentage}
            elementData = elements.map(e => ({
                element: e.element,
                mass: e.mass || e.percentage,
                Ar: this.atomicMasses[e.element]
            }));
        }

        // Step 1: Convert masses to moles
        elementData.forEach(e => {
            e.moles = e.mass / e.Ar;
        });

        // Step 2: Divide by smallest
        const smallestMoles = Math.min(...elementData.map(e => e.moles));
        elementData.forEach(e => {
            e.ratio = e.moles / smallestMoles;
        });

        // Step 3: Convert to whole numbers
        let multiplier = 1;
        const maxIterations = 10;
        for (let i = 1; i <= maxIterations; i++) {
            const testRatios = elementData.map(e => e.ratio * i);
            const allWhole = testRatios.every(r => Math.abs(r - Math.round(r)) < 0.1);
            if (allWhole) {
                multiplier = i;
                break;
            }
        }

        elementData.forEach(e => {
            e.wholeRatio = Math.round(e.ratio * multiplier);
        });

        // Build empirical formula string
        let empiricalFormula = '';
        elementData.forEach(e => {
            empiricalFormula += e.element;
            if (e.wholeRatio > 1) empiricalFormula += e.wholeRatio;
        });

        // Calculate empirical formula mass
        const empiricalMass = elementData.reduce((sum, e) => sum + (e.Ar * e.wholeRatio), 0);

        return {
            problemType: 'Empirical Formula',
            elementData: elementData,
            empiricalFormula: empiricalFormula,
            empiricalMass: empiricalMass,
            steps: {
                moles: elementData.map(e => ({ element: e.element, moles: e.moles })),
                ratios: elementData.map(e => ({ element: e.element, ratio: e.ratio })),
                wholeRatios: elementData.map(e => ({ element: e.element, wholeRatio: e.wholeRatio })),
                multiplier: multiplier
            },
            category: 'empirical_formula'
        };
    }

    
solveMolecularFormula(problem) {
    const { empiricalFormula, Mr, percentages } = problem.data;

    let empFormula = empiricalFormula;
    let empiricalMass = 0;

    // If empirical formula not given, calculate it first
    if (!empFormula && percentages) {
        const empResult = this.solveEmpiricalFormula({ data: { percentages } });
        empFormula = empResult.empiricalFormula;
        empiricalMass = empResult.empiricalMass;
    } else if (empFormula) {
        // Parse empirical formula and calculate mass
        empiricalMass = this.calculateFormulaMass(empFormula); // ✅ Fixed: capital M
    }

    // Calculate n (multiplier)
    const n = Math.round(Mr / empiricalMass);

    // Build molecular formula
    const molecularFormula = this.multiplyFormula(empFormula, n);

    return {
        problemType: 'Molecular Formula',
        empiricalFormula: empFormula,
        empiricalMass: empiricalMass,
        molecularMass: Mr,
        multiplier: n,
        molecularFormula: molecularFormula,
        verification: Math.abs(this.calculateFormulaMass(molecularFormula) - Mr) < 0.1,
        category: 'molecular_formula'
    };
}


    solveCombustionAnalysis(problem) {
        const { compoundMass, CO2mass, H2Omass, containsOxygen = true } = problem.data;

        // Step 1: Calculate moles of CO₂
        const Mr_CO2 = 44.01; // 12 + 2(16)
        const moles_CO2 = CO2mass / Mr_CO2;
        const moles_C = moles_CO2; // 1:1 ratio

        // Step 2: Calculate moles of H₂O
        const Mr_H2O = 18.02; // 2(1) + 16
        const moles_H2O = H2Omass / Mr_H2O;
        const moles_H = 2 * moles_H2O; // 2 H atoms per H₂O

        // Step 3: Calculate masses
        const mass_C = moles_C * this.atomicMasses['C'];
        const mass_H = moles_H * this.atomicMasses['H'];

        // Step 4: Calculate oxygen (if present)
        let moles_O = 0;
        let mass_O = 0;
        if (containsOxygen) {
            mass_O = compoundMass - mass_C - mass_H;
            if (mass_O > 0.01) {
                moles_O = mass_O / this.atomicMasses['O'];
            }
        }

        // Step 5: Find empirical formula
        const elementData = [
            { element: 'C', moles: moles_C, mass: mass_C }
        ];

        if (moles_H > 0) {
            elementData.push({ element: 'H', moles: moles_H, mass: mass_H });
        }

        if (moles_O > 0.01) {
            elementData.push({ element: 'O', moles: moles_O, mass: mass_O });
        }

        // Find smallest moles
        const smallestMoles = Math.min(...elementData.map(e => e.moles));

        // Calculate ratios
        elementData.forEach(e => {
            e.ratio = e.moles / smallestMoles;
        });

        // Convert to whole numbers
        let multiplier = 1;
        for (let i = 1; i <= 10; i++) {
            const testRatios = elementData.map(e => e.ratio * i);
            const allWhole = testRatios.every(r => Math.abs(r - Math.round(r)) < 0.1);
            if (allWhole) {
                multiplier = i;
                break;
            }
        }

        elementData.forEach(e => {
            e.wholeRatio = Math.round(e.ratio * multiplier);
        });

        // Build formula
        let empiricalFormula = '';
        elementData.forEach(e => {
            empiricalFormula += e.element;
            if (e.wholeRatio > 1) empiricalFormula += e.wholeRatio;
        });

        return {
            problemType: 'Combustion Analysis',
            compoundMass: compoundMass,
            CO2mass: CO2mass,
            H2Omass: H2Omass,
            moles_CO2: moles_CO2,
            moles_H2O: moles_H2O,
            moles_C: moles_C,
            moles_H: moles_H,
            moles_O: moles_O,
            mass_C: mass_C,
            mass_H: mass_H,
            mass_O: mass_O,
            elementData: elementData,
            empiricalFormula: empiricalFormula,
            multiplier: multiplier,
            category: 'combustion_analysis'
        };
    }

    solveStoichiometry(problem) {
        const { equation, givenSubstance, givenAmount, givenUnit, findSubstance } = problem.data;

        // Parse equation to get mole ratios
        const moleRatios = this.parseEquation(equation);

        // Convert given amount to moles
        let givenMoles = 0;
        if (givenUnit === 'g' || givenUnit === 'grams') {
            const Mr = this.calculateFormulamass(givenSubstance);
            givenMoles = givenAmount / Mr;
        } else if (givenUnit === 'mol' || givenUnit === 'moles') {
            givenMoles = givenAmount;
        } else if (givenUnit === 'dm3' || givenUnit === 'dm³') {
            givenMoles = givenAmount / 24; // at r.t.p.
        }

        // Find mole ratio
        const givenCoeff = moleRatios[givenSubstance] || 1;
        const findCoeff = moleRatios[findSubstance] || 1;

        // Calculate product moles
        const productMoles = (givenMoles * findCoeff) / givenCoeff;

        // Convert to requested unit (assume mass in grams)
        const Mr_product = this.calculateFormulaMass(findSubstance);
        const productMass = productMoles * Mr_product;

        return {
            problemType: 'Stoichiometry',
            equation: equation,
            givenSubstance: givenSubstance,
            givenAmount: givenAmount,
            givenUnit: givenUnit,
            givenMoles: givenMoles,
            findSubstance: findSubstance,
            moleRatio: `${givenCoeff}:${findCoeff}`,
            productMoles: productMoles,
            productMass: productMass,
            productMr: Mr_product,
            category: 'stoichiometry'
        };
    }

    solvePercentageYield(problem) {
        const { actualYield, theoreticalYield, calculate } = problem.data;

        let percentageYield = 0;
        let actual = actualYield;
        let theoretical = theoreticalYield;

        if (calculate === 'percentage' && actual !== undefined && theoretical !== undefined) {
            percentageYield = (actual / theoretical) * 100;
        } else if (calculate === 'actual' && percentageYield !== undefined && theoretical !== undefined) {
            actual = (percentageYield / 100) * theoretical;
        } else if (calculate === 'theoretical' && actual !== undefined && percentageYield !== undefined) {
            theoretical = (actual * 100) / percentageYield;
        }

        return {
            problemType: 'Percentage Yield',
            actualYield: actual,
            theoreticalYield: theoretical,
            percentageYield: percentageYield,
            efficiency: percentageYield > 90 ? 'Excellent' : percentageYield > 70 ? 'Good' : 'Moderate',
            category: 'percentage_yield'
        };
    }

    solveHomologousSeries(problem) {
        const { series, n, property } = problem.data;

        const generalFormulae = {
            'alkane': { C: n => n, H: n => 2*n + 2 },
            'alkene': { C: n => n, H: n => 2*n },
            'alkyne': { C: n => n, H: n => 2*n - 2 },
            'alcohol': { C: n => n, H: n => 2*n + 2, O: n => 1 },
            'carboxylic_acid': { C: n => n, H: n => 2*n, O: n => 2 },
            'aldehyde': { C: n => n, H: n => 2*n, O: n => 1 },
            'ketone': { C: n => n, H: n => 2*n, O: n => 1 },
            'ester': { C: n => n, H: n => 2*n, O: n => 2 }
        };

        const formula = generalFormulae[series];
        if (!formula) {
            throw new Error(`Unknown homologous series: ${series}`);
        }

        // Calculate molecular formula
        let molecularFormula = '';
        let Mr = 0;

        for (let element in formula) {
            const count = formula[element](n);
            if (count > 0) {
                molecularFormula += element;
                if (count > 1) molecularFormula += count;
                Mr += this.atomicMasses[element] * count;
            }
        }

        // Calculate mass difference from previous member
        let prevMr = 0;
        if (n > 1) {
            for (let element in formula) {
                const count = formula[element](n - 1);
                prevMr += this.atomicMasses[element] * count;
            }
        }
        const massDifference = Mr - prevMr;

        return {
            problemType: 'Homologous Series',
            series: series,
            n: n,
            molecularFormula: molecularFormula,
            Mr: Mr,
            massDifference: massDifference.toFixed(2),
            expectedDifference: 14, // CH₂ group
            category: 'homologous_series'
        };
    }

    solvePolymerCalculation(problem) {
        const { monomer, repeatUnit, degreeOfPolymerization, calculate } = problem.data;

        let polymerMass = 0;
        let repeatUnitMass = 0;
        let n = degreeOfPolymerization;

        if (repeatUnit) {
            repeatUnitMass = this.calculateFormulaMass(repeatUnit);
        } else if (monomer) {
            // For addition polymers, repeat unit = monomer
            // For condensation, need to account for loss
            repeatUnitMass = this.calculateFormulaMass(monomer);
        }

        if (calculate === 'polymerMass' && n) {
            polymerMass = repeatUnitMass * n;
        } else if (calculate === 'degreeOfPolymerization' && polymerMass) {
            n = Math.round(polymerMass / repeatUnitMass);
        }

        return {
            problemType: 'Polymer Chemistry',
            monomer: monomer,
            repeatUnit: repeatUnit || monomer,
            repeatUnitMass: repeatUnitMass,
            degreeOfPolymerization: n,
            polymerMass: polymerMass,
            category: 'polymer_calculation'
        };
    }

    solveGasVolume(problem) {
        const { substance, amount, unit, calculate, temperature = 'rtp' } = problem.data;

        const molarVolume = temperature === 'rtp' ? 24 : 24; // 24 dm³ at r.t.p.
        let moles = 0;
        let volume = 0;
        let mass = 0;

        const Mr = substance ? this.calculateFormulaMass(substance) : null;

        if (unit === 'g' || unit === 'grams') {
            mass = amount;
            moles = mass / Mr;
            volume = moles * molarVolume;
        } else if (unit === 'mol' || unit === 'moles') {
            moles = amount;
            volume = moles * molarVolume;
            mass = moles * Mr;
        } else if (unit === 'dm3' || unit === 'dm³') {
            volume = amount;
            moles = volume / molarVolume;
            mass = moles * Mr;
        }

        return {
            problemType: 'Gas Volume Calculation',
            substance: substance,
            moles: moles,
            volume: volume,
            mass: mass,
            Mr: Mr,
            molarVolume: molarVolume,
            conditions: temperature,
            category: 'gas_volume'
        };
    }

    solveConcentration(problem) {
        const { substance, concentration, volume, mass, calculate } = problem.data;

        let conc = concentration; // mol/dm³
        let vol = volume; // dm³
        let mol = 0;
        let m = mass; // grams

        const Mr = substance ? this.calculateFormulaMass(substance) : null;

        if (calculate === 'concentration') {
            if (mass && volume) {
                mol = m / Mr;
                conc = mol / vol;
            } else if (mol && volume) {
                conc = mol / vol;
            }
        } else if (calculate === 'volume') {
            if (mass && concentration) {
                mol = m / Mr;
                vol = mol / conc;
            }
        } else if (calculate === 'mass') {
            if (concentration && volume) {
                mol = conc * vol;
                m = mol * Mr;
            }
        } else if (calculate === 'moles') {
            mol = conc * vol;
            if (Mr) m = mol * Mr;
        }

        return {
            problemType: 'Concentration Calculation',
            substance: substance,
            concentration: conc,
            volume: vol,
            moles: mol,
            mass: m,
            Mr: Mr,
            category: 'concentration'
        };
    }

    solveIsomerAnalysis(problem) {
        const { molecularFormula, type } = problem.data;

        // Parse molecular formula
        const composition = this.parseFormula(molecularFormula);
        const C = composition['C'] || 0;
        const H = composition['H'] || 0;
        const N = composition['N'] || 0;
        const X = (composition['Cl'] || 0) + (composition['Br'] || 0) + (composition['F'] || 0) + (composition['I'] || 0);

        // Calculate degree of unsaturation (DBE)
        const DBE = (2*C + 2 - H - X + N) / 2;

        // Interpret DBE
        let interpretation = [];
        if (DBE === 0) {
            interpretation.push('Saturated compound (no rings or double bonds)');
        }
        if (DBE >= 1) {
            interpretation.push(`${DBE} degree(s) of unsaturation`);
            interpretation.push('Could be: double bonds, rings, or combination');
        }
        if (DBE === 4) {
            interpretation.push('Possibly contains benzene ring');
        }

        return {
            problemType: 'Isomer Analysis',
            molecularFormula: molecularFormula,
            composition: composition,
            degreeOfUnsaturation: DBE,
            interpretation: interpretation,
            possibleStructures: this.suggestStructures(DBE, composition),
            category: 'isomer_analysis'
        };
    }

    // HELPER METHODS

    calculateFormulaMass(formula) {
        const composition = this.parseFormula(formula);
        let mass = 0;
        for (let element in composition) {
            if (this.atomicMasses[element]) {
                mass += this.atomicMasses[element] * composition[element];
            }
        }
        return mass;
    }

    parseFormula(formula) {
        const composition = {};
        // Regex to match element and number
        const regex = /([A-Z][a-z]?)(\d*)/g;
        let match;

        while ((match = regex.exec(formula)) !== null) {
            const element = match[1];
            const count = match[2] ? parseInt(match[2]) : 1;
            composition[element] = (composition[element] || 0) + count;
        }

        return composition;
    }

    multiplyFormula(formula, n) {
        const composition = this.parseFormula(formula);
        let newFormula = '';

        for (let element in composition) {
            newFormula += element;
            const count = composition[element] * n;
            if (count > 1) newFormula += count;
        }

        return newFormula;
    }

    parseEquation(equation) {
        // Simple parser for mole ratios
        // Expected format: "2C2H5OH + O2 -> 2CO2 + 3H2O"
        const ratios = {};
        const parts = equation.split(/->|→/);
        
        parts.forEach(part => {
            const compounds = part.split('+');
            compounds.forEach(compound => {
                const match = compound.trim().match(/^(\d*)\s*([A-Za-z0-9()]+)$/);
                if (match) {
                    const coeff = match[1] ? parseInt(match[1]) : 1;
                    const formula = match[2];
                    ratios[formula] = coeff;
                }
            });
        });

        return ratios;
    }

    suggestStructures(DBE, composition) {
        const suggestions = [];

        if (DBE === 0) {
            suggestions.push('Alkane or saturated alcohol/ether');
        } else if (DBE === 1) {
            suggestions.push('One C=C double bond (alkene)');
            suggestions.push('One ring (cycloalkane)');
            suggestions.push('One C=O (aldehyde, ketone, or part of functional group)');
        } else if (DBE === 2) {
            suggestions.push('Two double bonds or one triple bond');
            suggestions.push('One double bond and one ring');
            suggestions.push('Two rings');
        } else if (DBE === 4) {
            suggestions.push('Benzene ring (C₆H₆ equivalent)');
            suggestions.push('Two double bonds and two rings');
        }

        return suggestions;
    }

    // STEP GENERATION METHODS

    generateOrganicSteps(problem, solution) {
        let baseSteps = this.generateBaseOrganicSteps(problem, solution);

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

    generateBaseOrganicSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'empirical_formula':
                return this.generateEmpiricalFormulaSteps(problem, solution);
            case 'molecular_formula':
                return this.generateMolecularFormulaSteps(problem, solution);
            case 'combustion_analysis':
                return this.generateCombustionAnalysisSteps(problem, solution);
            case 'stoichiometry':
                return this.generateStoichiometrySteps(problem, solution);
            case 'percentage_yield':
                return this.generatePercentageYieldSteps(problem, solution);
            case 'homologous_series':
                return this.generateHomologousSeriesSteps(problem, solution);
            case 'polymer_calculation':
                return this.generatePolymerSteps(problem, solution);
            case 'gas_volume':
                return this.generateGasVolumeSteps(problem, solution);
            case 'concentration':
                return this.generateConcentrationSteps(problem, solution);
            case 'isomer_analysis':
                return this.generateIsomerAnalysisSteps(problem, solution);
            default:
                return this.generateGenericSteps(problem, solution);
        }
    }

    generateEmpiricalFormulaSteps(problem, solution) {
        const steps = [];

        // Step 1: Given data
        steps.push({
            stepNumber: 1,
            step: 'Given composition data',
            description: 'Start with the percentage composition or masses of elements',
            data: solution.elementData.map(e => `${e.element}: ${e.mass.toFixed(2)}%`).join(', '),
            reasoning: 'We need to convert these percentages to a mole ratio to find the simplest formula',
            visualHint: 'Think of percentage as mass in a 100g sample',
            goalStatement: 'Our goal is to find the simplest whole number ratio of atoms'
        });

        // Step 2: Convert to moles
        const moleCalculations = solution.elementData.map(e => 
            `${e.element}: ${e.mass.toFixed(2)} / ${e.Ar.toFixed(3)} = ${e.moles.toFixed(4)} mol`
        ).join('\n');

        steps.push({
            stepNumber: 2,
            step: 'Convert masses to moles',
            description: 'Divide each mass by the atomic mass (Ar) of the element',
            beforeExpression: 'Mass data for each element',
            operation: 'moles = mass / Ar',
            afterExpression: moleCalculations,
            reasoning: 'Moles allow us to compare numbers of atoms directly',
            algebraicRule: 'n = m / Ar',
            visualHint: 'Ar is the mass of one mole of atoms of that element',
            workingDetails: solution.elementData.map(e => ({
                element: e.element,
                calculation: `${e.mass.toFixed(2)} ÷ ${e.Ar.toFixed(3)} = ${e.moles.toFixed(4)}`
            }))
        });

        // Step 3: Divide by smallest
        const smallest = Math.min(...solution.elementData.map(e => e.moles));
        const ratioCalculations = solution.elementData.map(e =>
            `${e.element}: ${e.moles.toFixed(4)} / ${smallest.toFixed(4)} = ${e.ratio.toFixed(2)}`
        ).join('\n');

        steps.push({
            stepNumber: 3,
            step: 'Find mole ratios',
            description: `Divide all mole values by the smallest (${smallest.toFixed(4)})`,
            beforeExpression: 'Mole values',
            operation: `÷ ${smallest.toFixed(4)}`,
            afterExpression: ratioCalculations,
            reasoning: 'This gives us the simplest ratio between elements',
            visualHint: 'The smallest value becomes 1, others scale proportionally',
            workingDetails: solution.elementData.map(e => ({
                element: e.element,
                ratio: e.ratio.toFixed(2)
            }))
        });

        // Step 4: Convert to whole numbers
        if (solution.steps.multiplier > 1) {
            steps.push({
                stepNumber: 4,
                step: 'Convert to whole number ratios',
                description: `Multiply all ratios by ${solution.steps.multiplier} to get whole numbers`,
                beforeExpression: solution.elementData.map(e => `${e.element}: ${e.ratio.toFixed(2)}`).join(', '),
                operation: `× ${solution.steps.multiplier}`,
                afterExpression: solution.elementData.map(e => `${e.element}: ${e.wholeRatio}`).join(', '),
                reasoning: 'Empirical formula must have whole number subscripts',
                visualHint: 'Test multipliers (2, 3, 4...) until all values are whole numbers',
                finalAnswer: true
            });
        }

        // Step 5: Write empirical formula
        steps.push({
            stepNumber: solution.steps.multiplier > 1 ? 5 : 4,
            step: 'Write empirical formula',
            description: 'Combine elements with their whole number ratios as subscripts',
            expression: solution.empiricalFormula,
            reasoning: 'This is the simplest whole number ratio of atoms in the compound',
            finalAnswer: true,
            numericalResult: solution.empiricalFormula,
            additionalInfo: `Empirical formula mass = ${solution.empiricalMass.toFixed(2)}`
        });

        return steps;
    }

    generateMolecularFormulaSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Start with empirical formula and molecular mass (Mr)',
            data: `Empirical formula: ${solution.empiricalFormula}, Mr = ${solution.molecularMass}`,
            reasoning: 'Molecular formula is a whole number multiple of the empirical formula',
            goalStatement: 'Find the multiplier n such that (Empirical)ₙ = Molecular formula'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate empirical formula mass',
            description: 'Find the mass of one unit of the empirical formula',
            expression: `Mass = ${solution.empiricalMass.toFixed(2)}`,
            reasoning: 'Sum the atomic masses of all atoms in the empirical formula',
            workingDetails: 'Add Ar × number of atoms for each element'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate multiplier n',
            description: 'Divide molecular mass by empirical formula mass',
            beforeExpression: `n = Mr / Empirical mass`,
            operation: `${solution.molecularMass} / ${solution.empiricalMass.toFixed(2)}`,
            afterExpression: `n = ${solution.multiplier}`,
            reasoning: 'This tells us how many empirical units make up one molecule',
            visualHint: 'n should be a whole number (1, 2, 3...)'
        });

        steps.push({
            stepNumber: 4,
            step: 'Write molecular formula',
            description: `Multiply each subscript in empirical formula by ${solution.multiplier}`,
            expression: solution.molecularFormula,
            reasoning: 'This gives the actual number of each atom in one molecule',
            finalAnswer: true,
            verification: `Mr check: ${this.calculateFormulaMass(solution.molecularFormula).toFixed(2)} ≈ ${solution.molecularMass}`
        });

        return steps;
    }

    generateCombustionAnalysisSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given data',
            description: 'Start with combustion data',
            data: `Compound mass: ${solution.compoundMass}g, CO₂ produced: ${solution.CO2mass}g, H₂O produced: ${solution.H2Omass}g`,
            reasoning: 'All carbon goes to CO₂, all hydrogen goes to H₂O',
            visualHint: 'CₓHᵧOᵨ + O₂ → CO₂ + H₂O',
            goalStatement: 'Find the empirical formula from combustion products'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate moles of carbon',
            description: 'Find moles of CO₂, which equals moles of C',
            beforeExpression: `moles CO₂ = mass / Mr(CO₂)`,
            operation: `${solution.CO2mass} / 44.01`,
            afterExpression: `moles C = ${solution.moles_C.toFixed(4)} mol`,
            reasoning: 'Each CO₂ molecule contains exactly one C atom',
            algebraicRule: 'moles C = moles CO₂ (1:1 ratio)'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate moles of hydrogen',
            description: 'Find moles of H₂O, then moles of H',
            beforeExpression: `moles H₂O = mass / Mr(H₂O)`,
            operation: `${solution.H2Omass} / 18.02`,
            afterExpression: `moles H = 2 × ${solution.moles_H2O.toFixed(4)} = ${solution.moles_H.toFixed(4)} mol`,
            reasoning: 'Each H₂O molecule contains 2 H atoms',
            algebraicRule: 'moles H = 2 × moles H₂O'
        });

        if (solution.moles_O > 0) {
            steps.push({
                stepNumber: 4,
                step: 'Calculate moles of oxygen',
                description: 'Find oxygen by mass difference',
                beforeExpression: `mass O = compound mass - mass C - mass H`,
                operation: `${solution.compoundMass} - ${solution.mass_C.toFixed(3)} - ${solution.mass_H.toFixed(3)}`,
                afterExpression: `mass O = ${solution.mass_O.toFixed(3)}g, moles O = ${solution.moles_O.toFixed(4)} mol`,
                reasoning: 'Oxygen in compound = total mass minus C and H masses',
                visualHint: 'Some oxygen came from the compound itself, not just from O₂ used'
            });
        }

        steps.push({
            stepNumber: solution.moles_O > 0 ? 5 : 4,
            step: 'Find empirical formula',
            description: 'Convert mole ratios to whole numbers',
            expression: solution.empiricalFormula,
            reasoning: 'Follow the standard empirical formula procedure',
            finalAnswer: true,
            workingDetails: solution.elementData.map(e => `${e.element}: ${e.wholeRatio}`)
        });

        return steps;
    }

    generateStoichiometrySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write balanced equation',
            description: 'Start with the chemical equation',
            expression: solution.equation,
            reasoning: 'Coefficients give mole ratios between substances',
            goalStatement: 'Use mole ratios to convert between substances'
        });

        steps.push({
            stepNumber: 2,
            step: 'Convert given amount to moles',
            description: `Convert ${solution.givenAmount} ${solution.givenUnit} of ${solution.givenSubstance} to moles`,
            beforeExpression: `Given: ${solution.givenAmount} ${solution.givenUnit}`,
            operation: solution.givenUnit === 'g' ? `÷ Mr(${solution.givenSubstance})` : 'already in moles',
            afterExpression: `${solution.givenMoles.toFixed(4)} mol`,
            reasoning: 'Stoichiometry works with mole ratios',
            algebraicRule: 'moles = mass / Mr'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply mole ratio',
            description: `Use mole ratio from equation: ${solution.moleRatio}`,
            beforeExpression: `${solution.givenMoles.toFixed(4)} mol of ${solution.givenSubstance}`,
            operation: `× (${solution.moleRatio})`,
            afterExpression: `${solution.productMoles.toFixed(4)} mol of ${solution.findSubstance}`,
            reasoning: 'Mole ratios from balanced equation allow us to convert between substances',
            visualHint: 'Multiply given moles by (coefficient of product / coefficient of reactant)'
        });

        steps.push({
            stepNumber: 4,
            step: 'Convert to mass',
            description: `Convert moles of ${solution.findSubstance} to grams`,
            beforeExpression: `${solution.productMoles.toFixed(4)} mol`,
            operation: `× Mr(${solution.findSubstance}) = × ${solution.productMr.toFixed(2)}`,
            afterExpression: `${solution.productMass.toFixed(2)} g`,
            reasoning: 'mass = moles × Mr',
            finalAnswer: true,
            numericalResult: solution.productMass.toFixed(2) + ' g'
        });

        return steps;
    }

    generatePercentageYieldSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify actual and theoretical yields',
            data: `Actual yield: ${solution.actualYield}g, Theoretical yield: ${solution.theoreticalYield}g`,
            reasoning: 'Percentage yield compares what we got to what we could get',
            goalStatement: 'Calculate efficiency of the reaction'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply percentage yield formula',
            description: 'Calculate percentage yield',
            beforeExpression: `% yield = (actual / theoretical) × 100`,
            operation: `(${solution.actualYield} / ${solution.theoreticalYield}) × 100`,
            afterExpression: `${solution.percentageYield.toFixed(2)}%`,
            reasoning: 'This tells us what percentage of the maximum possible product was obtained',
            algebraicRule: '% yield = (actual yield / theoretical yield) × 100%',
            finalAnswer: true,
            numericalResult: solution.percentageYield.toFixed(2) + '%'
        });

        steps.push({
            stepNumber: 3,
            step: 'Interpret result',
            description: 'Evaluate the efficiency',
            expression: `Efficiency: ${solution.efficiency}`,
            reasoning: 'Yields < 100% due to side reactions, incomplete reactions, or product loss during purification',
            additionalInfo: solution.percentageYield < 100 ? 
                'Common reasons for < 100%: reversible reactions, side reactions, transfer losses, impurities' : 
                'Note: Yields > 100% indicate experimental error or impure product'
        });

        return steps;
    }

    generateHomologousSeriesSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify homologous series',
            description: `Series: ${solution.series}, n = ${solution.n}`,
            reasoning: 'Each homologous series has a general formula',
            goalStatement: 'Apply general formula to find molecular formula and Mr'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply general formula',
            description: `Substitute n = ${solution.n} into the general formula`,
            expression: solution.molecularFormula,
            reasoning: 'General formula gives number of each atom type based on n',
            visualHint: `Each member differs by CH₂ (14 mass units) from adjacent members`
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate molecular mass',
            description: 'Sum atomic masses of all atoms',
            expression: `Mr = ${solution.Mr.toFixed(2)}`,
            reasoning: 'Mr = Σ(Ar × number of atoms)',
            finalAnswer: true,
            additionalInfo: `Mass difference from previous member: ${solution.massDifference} (CH₂ = 14)`
        });

        return steps;
    }

    generatePolymerSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify monomer/repeat unit and degree of polymerization',
            data: `Repeat unit: ${solution.repeatUnit}, n = ${solution.degreeOfPolymerization}`,
            reasoning: 'Polymer consists of n repeat units joined together',
            goalStatement: 'Calculate polymer mass or number of repeat units'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate repeat unit mass',
            description: 'Find Mr of one repeat unit',
            expression: `Mr(repeat unit) = ${solution.repeatUnitMass.toFixed(2)}`,
            reasoning: 'This is the mass of one structural unit that repeats',
            algebraicRule: 'Sum atomic masses in repeat unit'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate polymer mass',
            description: `Multiply repeat unit mass by n`,
            beforeExpression: `Mr(polymer) = n × Mr(repeat unit)`,
            operation: `${solution.degreeOfPolymerization} × ${solution.repeatUnitMass.toFixed(2)}`,
            afterExpression: `Mr(polymer) = ${solution.polymerMass.toFixed(2)}`,
            reasoning: 'Total mass equals number of units times mass per unit',
            finalAnswer: true
        });

        return steps;
    }

    generateGasVolumeSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify substance and given quantity',
            data: `Substance: ${solution.substance}, Amount: ${solution.mass || solution.moles || solution.volume}`,
            reasoning: 'At r.t.p., 1 mole of any gas occupies 24 dm³',
            goalStatement: 'Convert between mass, moles, and volume'
        });

        if (solution.mass > 0) {
            steps.push({
                stepNumber: 2,
                step: 'Convert mass to moles',
                description: 'Use moles = mass / Mr',
                beforeExpression: `${solution.mass.toFixed(2)} g`,
                operation: `÷ ${solution.Mr.toFixed(2)}`,
                afterExpression: `${solution.moles.toFixed(4)} mol`,
                reasoning: 'Need moles to use molar volume relationship',
                algebraicRule: 'n = m / Mr'
            });
        }

        steps.push({
            stepNumber: solution.mass > 0 ? 3 : 2,
            step: 'Convert moles to volume',
            description: 'Use molar volume at r.t.p.',
            beforeExpression: `${solution.moles.toFixed(4)} mol`,
            operation: `× 24 dm³/mol`,
            afterExpression: `${solution.volume.toFixed(2)} dm³`,
            reasoning: 'At r.t.p., 1 mole = 24 dm³',
            algebraicRule: 'V = n × 24',
            finalAnswer: true,
            numericalResult: solution.volume.toFixed(2) + ' dm³'
        });

        return steps;
    }

    generateConcentrationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify known quantities',
            data: `Substance: ${solution.substance}, Given values from problem data`,
            reasoning: 'Concentration relates moles, volume, and mass',
            goalStatement: 'Find the requested quantity using c = n/V'
        });

        if (solution.mass > 0 && solution.Mr) {
            steps.push({
                stepNumber: 2,
                step: 'Convert mass to moles',
                description: 'Calculate moles from mass',
                beforeExpression: `${solution.mass.toFixed(2)} g`,
                operation: `÷ ${solution.Mr.toFixed(2)}`,
                afterExpression: `${solution.moles.toFixed(4)} mol`,
                reasoning: 'n = m / Mr',
                algebraicRule: 'moles = mass / Mr'
            });
        }

        steps.push({
            stepNumber: solution.mass > 0 ? 3 : 2,
            step: 'Calculate concentration',
            description: 'Use concentration formula',
            beforeExpression: `c = n / V`,
            operation: `${solution.moles.toFixed(4)} / ${solution.volume.toFixed(3)}`,
            afterExpression: `${solution.concentration.toFixed(3)} mol/dm³`,
            reasoning: 'Concentration is moles per unit volume',
            algebraicRule: 'c = n / V',
            finalAnswer: true,
            numericalResult: solution.concentration.toFixed(3) + ' mol/dm³'
        });

        return steps;
    }

    generateIsomerAnalysisSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given molecular formula',
            description: `Molecular formula: ${solution.molecularFormula}`,
            data: Object.entries(solution.composition).map(([el, count]) => `${el}: ${count}`).join(', '),
            reasoning: 'Use molecular formula to calculate degree of unsaturation',
            goalStatement: 'Find DBE to determine possible structures'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply DBE formula',
            description: 'Calculate degree of unsaturation (Double Bond Equivalent)',
            beforeExpression: `DBE = (2C + 2 - H - X + N) / 2`,
            operation: `(2×${solution.composition['C'] || 0} + 2 - ${solution.composition['H'] || 0} - ${(solution.composition['Cl'] || 0) + (solution.composition['Br'] || 0)} + ${solution.composition['N'] || 0}) / 2`,
            afterExpression: `DBE = ${solution.degreeOfUnsaturation}`,
            reasoning: 'DBE indicates number of rings and/or double bond equivalents',
            algebraicRule: 'Each ring or C=C or C=O counts as 1, C≡C counts as 2, benzene ring counts as 4',
            visualHint: 'DBE = 0: saturated, DBE = 1: one double bond or ring, DBE = 4: benzene ring'
        });

        steps.push({
            stepNumber: 3,
            step: 'Interpret DBE value',
            description: 'Determine possible structural features',
            expression: solution.interpretation.join('; '),
            reasoning: 'DBE helps narrow down possible structures',
            finalAnswer: true,
            additionalInfo: `Possible structures: ${solution.possibleStructures.join('; ')}`
        });

        return steps;
    }

    generateGenericSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Organic chemistry problem',
            description: 'Solve the given problem using appropriate methods',
            expression: JSON.stringify(problem.data),
            reasoning: 'Apply organic chemistry principles',
            solution: solution
        }];
    }

    // Enhanced explanation methods (adapted from linear workbook)

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
                chemical: this.getChemicalExplanation(step)
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

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Given composition data': 'We start with information about what elements are in the compound and how much of each. This is like having a recipe that tells us the ingredients.',
            'Convert masses to moles': 'Mass tells us weight, but in chemistry we need to count particles. Moles let us count atoms and molecules, just like "dozen" lets us count eggs.',
            'Find mole ratios': 'By comparing the number of moles, we find the simplest ratio between elements, like finding the simplest fraction.',
            'Calculate moles of carbon': 'Every CO₂ molecule contains exactly one carbon atom from the original compound, so counting CO₂ molecules tells us how many C atoms were present.',
            'Apply mole ratio': 'The balanced equation tells us the "exchange rate" between substances - how many molecules of one substance correspond to molecules of another.'
        };

        return conceptualExplanations[step.step] || 'This step helps us progress toward finding the answer by applying chemical principles.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify the values needed: ${step.beforeExpression}
2. Apply the operation: ${step.operation}
3. Calculate the result: ${step.afterExpression}
4. Check units and significant figures`;
        }
        return 'Follow the standard procedure for this type of calculation.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'empirical_formula': 'Imagine atoms as different colored balls - we need to find the simplest ratio of colors.',
            'combustion_analysis': 'Picture the compound burning - all carbon becomes CO₂, all hydrogen becomes H₂O.',
            'stoichiometry': 'Think of molecules as LEGO blocks - the equation tells us how many blocks of each type we need.',
            'percentage_yield': 'Visualize theoretical yield as the target, actual yield as what you hit - percentage measures accuracy.'
        };

        return visualExplanations[problem.type] || 'Visualize the chemical transformation taking place.';
    }

    getChemicalExplanation(step) {
        const chemicalExplanations = {
            'Convert masses to moles': 'The mole is the SI unit for amount of substance, defined as exactly 6.02214076 × 10²³ particles.',
            'Apply mole ratio': 'Stoichiometric coefficients in balanced equations represent mole ratios, which follow from the law of conservation of mass.',
            'Calculate degree of unsaturation': 'DBE quantifies molecular unsaturation by comparing actual hydrogen count to saturated hydrocarbon formula CₙH₂ₙ₊₂.'
        };

        return chemicalExplanations[step.step] || 'Apply fundamental chemical principles and laws.';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple terms',
                detail: 'essential information only',
                format: 'short sentences'
            },
            intermediate: {
                vocabulary: 'standard chemistry terms',
                detail: 'main concepts with brief explanations',
                format: 'clear step-by-step format'
            },
            detailed: {
                vocabulary: 'full chemical terminology',
                detail: 'comprehensive explanations with theory',
                format: 'thorough analysis with multiple perspectives'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery approach',
                format: 'questions leading to understanding'
            }
        };

        const level = adaptations[explanationLevel] || adaptations.intermediate;
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
                    'moles': 'number of particles',
                    'stoichiometry': 'amount calculations',
                    'empirical formula': 'simplest formula',
                    'coefficient': 'number in front',
                    'ratio': 'comparison'
                }
            },
            intermediate: {
                replacements: {
                    'moles': 'moles',
                    'stoichiometry': 'stoichiometry',
                    'empirical formula': 'empirical formula',
                    'coefficient': 'coefficient',
                    'ratio': 'ratio'
                }
            },
            detailed: {
                replacements: {
                    'moles': 'moles (6.022 × 10²³ particles)',
                    'stoichiometry': 'stoichiometry (quantitative relationships)',
                    'empirical formula': 'empirical formula (simplest integer ratio)',
                    'coefficient': 'stoichiometric coefficient',
                    'ratio': 'molar ratio'
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

    // Helper methods for explanation enhancement

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the calculation process`,
            progression: 'We are making progress toward finding the formula or answer',
            relationship: 'Each step brings us closer to the final result'
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we need to ${nextStep.description.toLowerCase()} to continue solving`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}`;
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This step is necessary to continue the calculation`,
            howItHelps: `This will help us by: ${nextStep.reasoning}`
        };
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Convert masses to moles': [
                'Always use the correct Ar value from the periodic table',
                'Double-check your division: moles = mass / Ar',
                'Keep extra decimal places during calculations'
            ],
            'Find mole ratios': [
                'Make sure you divide ALL values by the smallest',
                'Don't round too early',
                'Check if multiplying by 2, 3, or 4 gives whole numbers'
            ],
            'Calculate moles of carbon': [
                'Remember: moles of C = moles of CO₂ (1:1 ratio)',
                'Use Mr(CO₂) = 44, not Mr(C) = 12'
            ],
            'Calculate moles of hydrogen': [
                'Remember: H₂O contains 2 hydrogen atoms',
                'moles of H = 2 × moles of H₂O'
            ]
        };

        return tips[step.step] || ['Double-check your calculations', 'Verify units are correct'];
    }

    generateCheckPoints(step) {
        return [
            'Verify you used the correct formula',
            'Check arithmetic calculations',
            'Ensure units are consistent',
            'Confirm the step makes chemical sense'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            combustion_analysis: step.step === 'Calculate moles of hydrogen' ?
                ['Remember to multiply moles of H₂O by 2 to get moles of H'] : [],
            empirical_formula: step.step === 'Find mole ratios' ?
                ['Divide by smallest value FIRST before attempting to get whole numbers'] : [],
            stoichiometry: step.step === 'Apply mole ratio' ?
                ['Make sure equation is balanced before using coefficients'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Convert masses to moles': 'Did I divide by the atomic mass (Ar), not multiply?',
            'Find mole ratios': 'Did I divide all values by the smallest mole value?',
            'Apply mole ratio': 'Did I use the correct coefficients from the balanced equation?',
            'Calculate degree of unsaturation': 'Did I use the correct formula: (2C + 2 - H - X + N) / 2?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Convert masses to moles': 'Should get decimal values for moles',
            'Find mole ratios': 'Should get values close to simple ratios (1:1, 1:2, 2:3, etc.)',
            'Write empirical formula': 'Should have whole number subscripts',
            'Calculate percentage yield': 'Should get a value between 0% and 100% (usually 50-95%)'
        };

        return expectations[step.step] || 'The step should produce a reasonable chemical result';
    }

    generateTroubleshootingTips(step) {
        return [
            'If answer seems wrong, check your atomic masses',
            'Verify you used the correct formula',
            'Look for arithmetic errors',
            'Make sure units are consistent',
            'Consider if there\'s a simpler approach'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.operation) {
            return [
                `Write the formula needed: ${step.beforeExpression}`,
                `Identify the values to substitute`,
                `Perform the calculation: ${step.operation}`,
                `Write the result: ${step.afterExpression}`,
                `Check units and significant figures`
            ];
        }

        return ['Understand what is required', 'Apply the appropriate formula', 'Calculate carefully'];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Given composition data': [
                'What elements are present in the compound?',
                'What information do we have about each element?',
                'What are we trying to find?'
            ],
            'Convert masses to moles': [
                'Why do we need to convert to moles?',
                'What formula do we use to convert mass to moles?',
                'Where do we find the atomic mass values?'
            ],
            'Find mole ratios': [
                'Why do we divide by the smallest value?',
                'What does the ratio tell us?',
                'Should the ratios be whole numbers?'
            ],
            'Apply mole ratio': [
                'Where does the mole ratio come from?',
                'How do we use the coefficients from the balanced equation?',
                'Why does stoichiometry work with mole ratios?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'What formula or principle applies?', 'How do we check our answer?'];
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Think about what chemical principle applies here.',
            level2: 'Remember the key formula or relationship for this type of problem.',
            level3: 'Consider what units you need and what conversions are necessary.',
            level4: step.operation ? `Try using: ${step.operation}` : 'Apply the appropriate chemical formula or conversion.'
        };
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try a similar problem with different numbers',
            practiceHint: 'Practice the same type of calculation with simpler values first',
            extension: 'Once comfortable, try more complex variations with additional elements or steps'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'What formula or method will help?',
            execute: 'How do I perform the calculation correctly?',
            verify: 'Does my answer make chemical sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Choosing which formula to apply',
            'Deciding which values to use',
            'Determining the order of operations'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'empirical_formula': [
                'Could assume 100g sample for percentage composition',
                'Could work with actual masses if given'
            ],
            'combustion_analysis': [
                'Could calculate C and H first, then find O by difference',
                'Could verify by calculating compound mass from formula'
            ]
        };

        return alternatives[problem.type] || ['Alternative approaches exist but this is most direct'];
    }

    identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'Convert masses to moles': ['Understanding of mole concept', 'Ability to use formula n = m/Mr', 'Knowledge of atomic masses'],
            'Find mole ratios': ['Division skills', 'Understanding of ratios', 'Ability to simplify fractions'],
            'Apply mole ratio': ['Balancing equations', 'Understanding stoichiometry', 'Ratio calculations'],
            'Calculate degree of unsaturation': ['Understanding of molecular formulas', 'Knowledge of DBE formula', 'Concept of unsaturation']
        };

        return prerequisites[step.step] || ['Basic chemistry knowledge', 'Arithmetic skills'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Convert masses to moles': ['moles', 'atomic mass', 'Ar', 'amount of substance'],
            'Find mole ratios': ['ratio', 'simplest form', 'whole numbers', 'subscripts'],
            'Write empirical formula': ['empirical formula', 'subscript', 'element symbol'],
            'Apply mole ratio': ['stoichiometry', 'coefficient', 'balanced equation', 'mole ratio'],
            'Calculate degree of unsaturation': ['DBE', 'unsaturation', 'double bond equivalent', 'rings']
        };

        return vocabulary[step.step] || [];
    }

    // VERIFICATION METHODS

    verifyEmpiricalFormula() {
        const solution = this.currentSolution;
        
        // Check that ratios are whole numbers
        const wholeNumberCheck = solution.elementData.every(e => 
            Math.abs(e.wholeRatio - Math.round(e.wholeRatio)) < 0.1
        );

        // Verify empirical formula mass calculation
        const calculatedMass = solution.elementData.reduce((sum, e) => 
            sum + (e.Ar * e.wholeRatio), 0
        );

        return {
            empiricalFormula: solution.empiricalFormula,
            wholeNumberRatios: wholeNumberCheck,
            calculatedMass: calculatedMass.toFixed(2),
            expectedMass: solution.empiricalMass.toFixed(2),
            massMatchCheck: Math.abs(calculatedMass - solution.empiricalMass) < 0.1,
            elementBreakdown: solution.elementData.map(e => ({
                element: e.element,
                ratio: e.wholeRatio,
                isWholeNumber: Math.abs(e.wholeRatio - Math.round(e.wholeRatio)) < 0.1
            }))
        };
    }

    verifyMolecularFormula() {
        const solution = this.currentSolution;
        
        const calculatedMr = this.calculateFormulaMass(solution.molecularFormula);
        const matchesMr = Math.abs(calculatedMr - solution.molecularMass) < 1.0;

        return {
            molecularFormula: solution.molecularFormula,
            calculatedMr: calculatedMr.toFixed(2),
            givenMr: solution.molecularMass.toFixed(2),
            match: matchesMr,
            multiplier: solution.multiplier,
            empiricalFormula: solution.empiricalFormula
        };
    }

    verifyCombustionAnalysis() {
        const solution = this.currentSolution;
        
        // Verify mass balance
        const totalElementMass = solution.mass_C + solution.mass_H + solution.mass_O;
        const massBalance = Math.abs(totalElementMass - solution.compoundMass) < 0.1;

        return {
            compoundMass: solution.compoundMass.toFixed(3),
            carbonMass: solution.mass_C.toFixed(3),
            hydrogenMass: solution.mass_H.toFixed(3),
            oxygenMass: solution.mass_O.toFixed(3),
            totalElementMass: totalElementMass.toFixed(3),
            massBalance: massBalance,
            empiricalFormula: solution.empiricalFormula,
            carbonCheck: `${solution.moles_C.toFixed(4)} mol from ${solution.CO2mass}g CO₂`,
            hydrogenCheck: `${solution.moles_H.toFixed(4)} mol from ${solution.H2Omass}g H₂O`
        };
    }

    verifyStoichiometry() {
        const solution = this.currentSolution;
        
        // Verify mole calculations
        const Mr_given = this.calculateFormulaMass(solution.givenSubstance);
        const recalculatedMoles = solution.givenAmount / Mr_given;

        return {
            equation: solution.equation,
            givenSubstance: solution.givenSubstance,
            givenMoles: solution.givenMoles.toFixed(4),
            recalculatedMoles: recalculatedMoles.toFixed(4),
            molesMatch: Math.abs(solution.givenMoles - recalculatedMoles) < 0.001,
            moleRatio: solution.moleRatio,
            productMoles: solution.productMoles.toFixed(4),
            productMass: solution.productMass.toFixed(2),
            productSubstance: solution.findSubstance
        };
    }

    verifyPercentageYield() {
        const solution = this.currentSolution;
        
        // Recalculate percentage yield
        const recalculated = (solution.actualYield / solution.theoreticalYield) * 100;
        const match = Math.abs(recalculated - solution.percentageYield) < 0.01;

        return {
            actualYield: solution.actualYield.toFixed(2),
            theoreticalYield: solution.theoreticalYield.toFixed(2),
            percentageYield: solution.percentageYield.toFixed(2),
            recalculatedYield: recalculated.toFixed(2),
            match: match,
            efficiency: solution.efficiency,
            isRealistic: solution.percentageYield <= 100 && solution.percentageYield >= 0
        };
    }

    // FORMAT VERIFICATION DATA

    formatEmpiricalFormulaVerification(verification) {
        return [
            ['Empirical Formula', verification.empiricalFormula],
            ['Whole Number Ratios', verification.wholeNumberRatios ? 'Yes' : 'No'],
            ['Calculated Mass', verification.calculatedMass],
            ['Expected Mass', verification.expectedMass],
            ['Mass Match', verification.massMatchCheck ? 'Yes' : 'No'],
            ['', ''],
            ['Element', 'Ratio', 'Is Whole Number'],
            ...verification.elementBreakdown.map(e => [e.element, e.ratio, e.isWholeNumber ? 'Yes' : 'No'])
        ];
    }

    formatMolecularFormulaVerification(verification) {
        return [
            ['Molecular Formula', verification.molecularFormula],
            ['Calculated Mr', verification.calculatedMr],
            ['Given Mr', verification.givenMr],
            ['Match', verification.match ? 'Yes' : 'No'],
            ['Multiplier (n)', verification.multiplier],
            ['Empirical Formula', verification.empiricalFormula],
            ['', ''],
            ['Verification', `${verification.empiricalFormula} × ${verification.multiplier} = ${verification.molecularFormula}`]
        ];
    }

    formatCombustionAnalysisVerification(verification) {
        return [
            ['Original Compound Mass', verification.compoundMass + ' g'],
            ['Carbon Mass', verification.carbonMass + ' g'],
            ['Hydrogen Mass', verification.hydrogenMass + ' g'],
            ['Oxygen Mass', verification.oxygenMass + ' g'],
            ['Total Element Mass', verification.totalElementMass + ' g'],
            ['Mass Balance', verification.massBalance ? 'Correct' : 'Error'],
            ['', ''],
            ['Empirical Formula', verification.empiricalFormula],
            ['', ''],
            ['Carbon Check', verification.carbonCheck],
            ['Hydrogen Check', verification.hydrogenCheck]
        ];
    }

    formatStoichiometryVerification(verification) {
        return [
            ['Equation', verification.equation],
            ['Given Substance', verification.givenSubstance],
            ['Given Moles', verification.givenMoles],
            ['Recalculated Moles', verification.recalculatedMoles],
            ['Moles Match', verification.molesMatch ? 'Yes' : 'No'],
            ['', ''],
            ['Mole Ratio Used', verification.moleRatio],
            ['Product Moles', verification.productMoles],
            ['Product Mass', verification.productMass + ' g'],
            ['Product Substance', verification.productSubstance]
        ];
    }

    formatPercentageYieldVerification(verification) {
        return [
            ['Actual Yield', verification.actualYield + ' g'],
            ['Theoretical Yield', verification.theoreticalYield + ' g'],
            ['Percentage Yield', verification.percentageYield + '%'],
            ['Recalculated', verification.recalculatedYield + '%'],
            ['Match', verification.match ? 'Yes' : 'No'],
            ['', ''],
            ['Efficiency Rating', verification.efficiency],
            ['Realistic Value', verification.isRealistic ? 'Yes' : 'No']
        ];
    }

    calculateVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;

        switch (type) {
            case 'empirical_formula':
                const empVerification = this.verifyEmpiricalFormula();
                return empVerification.wholeNumberRatios && empVerification.massMatchCheck ? 'High' : 'Medium';

            case 'molecular_formula':
                const molVerification = this.verifyMolecularFormula();
                return molVerification.match ? 'High' : 'Low';

            case 'combustion_analysis':
                const combVerification = this.verifyCombustionAnalysis();
                return combVerification.massBalance ? 'High' : 'Medium';

            case 'stoichiometry':
                const stoichVerification = this.verifyStoichiometry();
                return stoichVerification.molesMatch ? 'High' : 'Medium';

            case 'percentage_yield':
                const yieldVerification = this.verifyPercentageYield();
                return yieldVerification.match && yieldVerification.isRealistic ? 'High' : 'Low';

            default:
                return 'Medium';
        }
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'empirical_formula':
                notes.push('Verified whole number ratios');
                notes.push('Confirmed empirical mass calculation');
                notes.push('Checked all element ratios');
                break;

            case 'molecular_formula':
                notes.push('Verified Mr calculation matches given value');
                notes.push('Confirmed multiplier is whole number');
                notes.push('Checked molecular formula = empirical × n');
                break;

            case 'combustion_analysis':
                notes.push('Verified mass balance (elements sum to compound mass)');
                notes.push('Confirmed C from CO₂ calculation');
                notes.push('Confirmed H from H₂O calculation');
                break;

            case 'stoichiometry':
                notes.push('Verified mole calculations');
                notes.push('Confirmed mole ratio from balanced equation');
                notes.push('Checked product mass calculation');
                break;

            case 'percentage_yield':
                notes.push('Verified percentage yield formula application');
                notes.push('Confirmed result is between 0-100%');
                notes.push('Checked calculation accuracy');
                break;

            default:
                notes.push('Standard verification methods applied');
        }

        return notes.join('; ');
    }

    generatePedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            empirical_formula: {
                objectives: [
                    'Determine empirical formula from composition data',
                    'Convert between mass, percentage, and moles',
                    'Simplify mole ratios to whole numbers'
                ],
                keyConcepts: [
                    'Mole concept and Avogadro\'s number',
                    'Atomic mass (Ar) vs molecular mass (Mr)',
                    'Ratio simplification',
                    'Empirical vs molecular formula'
                ],
                prerequisites: [
                    'Understanding of mole concept',
                    'Ability to use formula n = m/Ar',
                    'Basic ratio and fraction skills',
                    'Knowledge of atomic masses'
                ],
                commonDifficulties: [
                    'Confusing Ar with Mr',
                    'Not dividing by smallest value first',
                    'Rounding too early in calculations',
                    'Difficulty converting decimals to whole number ratios'
                ],
                extensions: [
                    'Determining molecular formula from Mr',
                    'Combustion analysis problems',
                    'Problems with multiple elements',
                    'Hydrate analysis'
                ],
                assessment: [
                    'Check understanding of mole concept',
                    'Verify proper use of atomic masses',
                    'Ensure ratios are properly simplified',
                    'Test with different element combinations'
                ]
            },

            combustion_analysis: {
                objectives: [
                    'Determine empirical formula from combustion data',
                    'Calculate moles of elements from combustion products',
                    'Apply mass balance principles'
                ],
                keyConcepts: [
                    'Complete combustion equations',
                    'Relationship between CO₂ and carbon content',
                    'Relationship between H₂O and hydrogen content',
                    'Finding oxygen by difference',
                    'Conservation of mass'
                ],
                prerequisites: [
                    'Empirical formula determination',
                    'Mole calculations',
                    'Understanding of combustion',
                    'Mass-mole conversions'
                ],
                commonDifficulties: [
                    'Forgetting that H₂O contains 2 H atoms',
                    'Not recognizing oxygen in compound vs oxygen used in combustion',
                    'Using wrong molar masses',
                    'Forgetting to check for oxygen in the compound'
                ],
                extensions: [
                    'Compounds containing nitrogen',
                    'Incomplete combustion',
                    'Compounds with halogens',
                    'Elemental analysis techniques'
                ],
                assessment: [
                    'Verify understanding of 1:1 ratio for C:CO₂',
                    'Check 2:1 ratio understanding for H:H₂O',
                    'Test mass balance calculation',
                    'Ensure proper handling of oxygen'
                ]
            },

            stoichiometry: {
                objectives: [
                    'Calculate masses of reactants and products',
                    'Apply mole ratios from balanced equations',
                    'Convert between mass, moles, and volume'
                ],
                keyConcepts: [
                    'Balanced chemical equations',
                    'Mole ratios and stoichiometric coefficients',
                    'Mass-mole-volume relationships',
                    'Limiting reactant concept'
                ],
                prerequisites: [
                    'Balancing chemical equations',
                    'Mole concept',
                    'Formula mass calculations',
                    'Ratio and proportion'
                ],
                commonDifficulties: [
                    'Using unbalanced equations',
                    'Confusing mole ratio with mass ratio',
                    'Incorrect Mr calculations',
                    'Not converting to moles first'
                ],
                extensions: [
                    'Limiting reactant problems',
                    'Excess reactant calculations',
                    'Multi-step reactions',
                    'Industrial applications'
                ],
                assessment: [
                    'Check equation balancing',
                    'Verify mole ratio application',
                    'Test conversion skills',
                    'Ensure proper unit handling'
                ]
            },

            percentage_yield: {
                objectives: [
                    'Calculate percentage yield',
                    'Distinguish between actual and theoretical yield',
                    'Understand factors affecting yield'
                ],
                keyConcepts: [
                    'Theoretical yield from stoichiometry',
                    'Actual yield from experiment',
                    'Efficiency and losses in reactions',
                    'Percentage calculation'
                ],
                prerequisites: [
                    'Stoichiometry calculations',
                    'Percentage calculations',
                    'Understanding of chemical reactions',
                    'Concept of limiting reactant'
                ],
                commonDifficulties: [
                    'Confusing actual with theoretical yield',
                    'Not calculating theoretical yield first',
                    'Forgetting to multiply by 100',
                    'Misunderstanding yields > 100%'
                ],
                extensions: [
                    'Multi-step synthesis yields',
                    'Atom economy',
                    'Green chemistry considerations',
                    'Industrial scale calculations'
                ],
                assessment: [
                    'Verify correct yield identification',
                    'Check stoichiometry for theoretical yield',
                    'Test interpretation of results',
                    'Ensure understanding of practical limitations'
                ]
            },

            homologous_series: {
                objectives: [
                    'Apply general formulae for homologous series',
                    'Calculate molecular masses',
                    'Recognize patterns in properties'
                ],
                keyConcepts: [
                    'General formulae (CₙH₂ₙ₊₂, CₙH₂ₙ, etc.)',
                    'Mass difference of CH₂ (14)',
                    'Functional groups',
                    'Systematic nomenclature'
                ],
                prerequisites: [
                    'Understanding of molecular formula',
                    'Knowledge of functional groups',
                    'Mr calculations',
                    'Pattern recognition'
                ],
                commonDifficulties: [
                    'Confusing different series formulae',
                    'Incorrect substitution of n',
                    'Not accounting for functional groups',
                    'Errors in Mr calculation'
                ],
                extensions: [
                    'Isomerism in homologous series',
                    'Physical property trends',
                    'Naming compounds',
                    'Structural formula drawing'
                ],
                assessment: [
                    'Test formula application',
                    'Check pattern recognition',
                    'Verify functional group understanding',
                    'Assess nomenclature knowledge'
                ]
            },

            isomer_analysis: {
                objectives: [
                    'Calculate degree of unsaturation (DBE)',
                    'Interpret DBE values',
                    'Predict possible structures'
                ],
                keyConcepts: [
                    'Degree of unsaturation formula',
                    'Relationship between DBE and structure',
                    'Types of unsaturation (rings, double bonds)',
                    'Structural vs stereoisomers'
                ],
                prerequisites: [
                    'Molecular formula interpretation',
                    'Understanding of bonding',
                    'Knowledge of functional groups',
                    'Basic organic structures'
                ],
                commonDifficulties: [
                    'Incorrect application of DBE formula',
                    'Misinterpreting DBE value',
                    'Not considering all possibilities',
                    'Confusing isomer types'
                ],
                extensions: [
                    'Complete structural determination',
                    'Stereochemistry',
                    'Spectroscopic analysis',
                    'Drawing all possible isomers'
                ],
                assessment: [
                    'Verify DBE calculation accuracy',
                    'Check structural interpretation',
                    'Test ability to draw isomers',
                    'Assess understanding of unsaturation'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Solve the given organic chemistry problem'],
            keyConcepts: ['Apply appropriate organic chemistry principles'],
            prerequisites: ['Basic organic chemistry knowledge'],
            commonDifficulties: ['Various calculation errors'],
            extensions: ['More complex variations'],
            assessment: ['Check understanding of solution process']
        };
    }

    generateAlternativeMethods(problemType) {
        const alternativeDatabase = {
            empirical_formula: {
                primaryMethod: 'Mass to moles to ratio method',
                methods: [
                    {
                        name: 'Percentage Method',
                        description: 'Assume 100g sample, treat percentages as masses directly'
                    },
                    {
                        name: 'Ratio Table Method',
                        description: 'Use organized table: element, mass, Ar, moles, ratio, whole number'
                    },
                    {
                        name: 'Smallest Mole Method',
                        description: 'Divide by smallest moles value, then multiply to get whole numbers'
                    }
                ],
                comparison: 'All methods equivalent; table method most organized for complex problems'
            },

            combustion_analysis: {
                primaryMethod: 'Product analysis with mass balance',
                methods: [
                    {
                        name: 'Sequential Calculation',
                        description: 'Calculate C from CO₂, H from H₂O, then O by difference'
                    },
                    {
                        name: 'Mass Balance First',
                        description: 'Calculate total product masses, work backward to elements'
                    },
                    {
                        name: 'Mole-Based Approach',
                        description: 'Convert all to moles immediately, then find ratios'
                    }
                ],
                comparison: 'Sequential method most systematic; always verify with mass balance'
            },

            stoichiometry: {
                primaryMethod: 'Mole ratio method',
                methods: [
                    {
                        name: 'Mole Ratio Method',
                        description: 'Convert to moles, apply ratio, convert to desired unit'
                    },
                    {
                        name: 'Proportion Method',
                        description: 'Set up proportion: (given/coeff) = (unknown/coeff)'
                    },
                    {
                        name: 'Factor-Label Method',
                        description: 'Use conversion factors in sequence: g → mol → mol ratio → g'
                    }
                ],
                comparison: 'Mole ratio most intuitive; factor-label ensures unit consistency'
            },

            percentage_yield: {
                primaryMethod: 'Direct percentage formula',
                methods: [
                    {
                        name: 'Percentage Formula',
                        description: '% yield = (actual/theoretical) × 100'
                    },
                    {
                        name: 'Decimal Method',
                        description: 'Calculate as decimal (actual/theoretical), then convert to %'
                    },
                    {
                        name: 'Ratio Method',
                        description: 'Express as ratio actual:theoretical, then find percentage'
                    }
                ],
                comparison: 'All methods give same result; direct formula is standard'
            },

            homologous_series: {
                primaryMethod: 'General formula substitution',
                methods: [
                    {
                        name: 'Formula Substitution',
                        description: 'Directly substitute n into general formula'
                    },
                    {
                        name: 'Pattern Recognition',
                        description: 'Use CH₂ increment pattern from known members'
                    },
                    {
                        name: 'Structural Approach',
                        description: 'Draw structure, then count atoms'
                    }
                ],
                comparison: 'Formula method fastest; structural approach best for verification'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard organic chemistry approach',
            methods: [
                {
                    name: 'Systematic Approach',
                    description: 'Follow standard problem-solving steps'
                }
            ],
            comparison: 'Method choice depends on problem complexity and available information'
        };
    }

    // WORKBOOK GENERATION

    generateOrganicWorkbook() {
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
            title: 'Organic Chemistry Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.organicTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.organicTypes[this.currentProblem.type]?.category || 'General']
        ];

        if (this.currentProblem.scenario) {
            problemData.push(['Description', this.currentProblem.scenario]);
        }

        // Add specific data based on problem type
        if (this.currentProblem.data) {
            problemData.push(['', '']); // Spacing
            problemData.push(['Given Data', '']);
            
            for (let key in this.currentProblem.data) {
                const value = this.currentProblem.data[key];
                if (typeof value === 'object' && !Array.isArray(value)) {
                    for (let subKey in value) {
                        problemData.push([`${key}.${subKey}`, value[subKey]]);
                    }
                } else if (!Array.isArray(value)) {
                    problemData.push([key, value]);
                }
            }
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
            // Main step
            stepsData.push(['Step ' + step.stepNumber, step.description]);

            if (step.data) {
                stepsData.push(['Data', step.data]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            } else if (step.expression) {
                stepsData.push(['Result', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Formula Used', step.algebraicRule]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual Explanation', step.explanations.conceptual]);
                stepsData.push(['Chemical Explanation', step.explanations.chemical]);
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

            if (step.workingDetails) {
                if (Array.isArray(step.workingDetails)) {
                    stepsData.push(['Working', step.workingDetails.map(d => 
                        typeof d === 'object' ? JSON.stringify(d) : d
                    ).join('; ')]);
                } else if (typeof step.workingDetails === 'object') {
                    for (let key in step.workingDetails) {
                        stepsData.push([key, step.workingDetails[key]]);
                    }
                }
            }

            if (step.finalAnswer) {
                stepsData.push(['✓ Final Answer', step.numericalResult || step.expression || 'See above']);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSection() {
        const { type } = this.currentProblem;
        const lesson = this.lessons[type];

        if (!lesson) return null;

        return {
            title: lesson.title,
            type: 'lesson',
            data: [
                ['Key Concepts', lesson.concepts.join('; ')],
                ['Theory', lesson.theory],
                ['', ''],
                ['Important Formulae', ''],
                ...Object.entries(lesson.keyFormulas).map(([name, formula]) => [name, formula])
            ]
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        // Add main result based on problem type
        switch (this.currentProblem.type) {
            case 'empirical_formula':
                solutionData.push(['Empirical Formula', this.currentSolution.empiricalFormula]);
                solutionData.push(['Empirical Formula Mass', this.currentSolution.empiricalMass.toFixed(2)]);
                break;

            case 'molecular_formula':
                solutionData.push(['Molecular Formula', this.currentSolution.molecularFormula]);
                solutionData.push(['Molecular Mass (Mr)', this.currentSolution.molecularMass]);
                solutionData.push(['Multiplier (n)', this.currentSolution.multiplier]);
                break;

            case 'combustion_analysis':
                solutionData.push(['Empirical Formula', this.currentSolution.empiricalFormula]);
                solutionData.push(['Moles of C', this.currentSolution.moles_C.toFixed(4)]);
                solutionData.push(['Moles of H', this.currentSolution.moles_H.toFixed(4)]);
                if (this.currentSolution.moles_O > 0) {
                    solutionData.push(['Moles of O', this.currentSolution.moles_O.toFixed(4)]);
                }
                break;

            case 'stoichiometry':
                solutionData.push(['Product Mass', this.currentSolution.productMass.toFixed(2) + ' g']);
                solutionData.push(['Product Moles', this.currentSolution.productMoles.toFixed(4) + ' mol']);
                solutionData.push(['Mole Ratio Used', this.currentSolution.moleRatio]);
                break;

            case 'percentage_yield':
                solutionData.push(['Percentage Yield', this.currentSolution.percentageYield.toFixed(2) + '%']);
                solutionData.push(['Efficiency Rating', this.currentSolution.efficiency]);
                break;

            case 'homologous_series':
                solutionData.push(['Molecular Formula', this.currentSolution.molecularFormula]);
                solutionData.push(['Molecular Mass (Mr)', this.currentSolution.Mr.toFixed(2)]);
                solutionData.push(['Mass Difference', this.currentSolution.massDifference]);
                break;

            case 'gas_volume':
                solutionData.push(['Volume', this.currentSolution.volume.toFixed(2) + ' dm³']);
                solutionData.push(['Moles', this.currentSolution.moles.toFixed(4) + ' mol']);
                solutionData.push(['Mass', this.currentSolution.mass.toFixed(2) + ' g']);
                break;

            case 'concentration':
                solutionData.push(['Concentration', this.currentSolution.concentration.toFixed(3) + ' mol/dm³']);
                solutionData.push(['Moles', this.currentSolution.moles.toFixed(4) + ' mol']);
                break;

            case 'isomer_analysis':
                solutionData.push(['Degree of Unsaturation (DBE)', this.currentSolution.degreeOfUnsaturation]);
                solutionData.push(['Interpretation', this.currentSolution.interpretation.join('; ')]);
                break;

            default:
                solutionData.push(['Result', JSON.stringify(this.currentSolution)]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: [
                ['Problem Type', this.currentProblem.type],
                ['Steps Used', this.solutionSteps?.length || 0],
                ['Explanation Level', this.explanationLevel],
                ['Method', this.organicTypes[this.currentProblem.type]?.name || 'General approach']
            ]
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [];
        const { type } = this.currentProblem;

        verificationData.push(['Verification Method', 'Result']);
        verificationData.push(['', '']); // Spacing

        switch (type) {
            case 'empirical_formula':
                const empVerification = this.verifyEmpiricalFormula();
                verificationData.push(...this.formatEmpiricalFormulaVerification(empVerification));
                break;

            case 'molecular_formula':
                const molVerification = this.verifyMolecularFormula();
                verificationData.push(...this.formatMolecularFormulaVerification(molVerification));
                break;

            case 'combustion_analysis':
                const combVerification = this.verifyCombustionAnalysis();
                verificationData.push(...this.formatCombustionAnalysisVerification(combVerification));
                break;

            case 'stoichiometry':
                const stoichVerification = this.verifyStoichiometry();
                verificationData.push(...this.formatStoichiometryVerification(stoichVerification));
                break;

            case 'percentage_yield':
                const yieldVerification = this.verifyPercentageYield();
                verificationData.push(...this.formatPercentageYieldVerification(yieldVerification));
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

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''], // Spacing
                ['Alternative Methods', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''], // Spacing
                ['Method Comparison', alternatives.comparison]
            ]
        };
    }

    // UTILITY METHODS FOR RENDERING (if needed for UI)

    renderWorkbook() {
        if (!this.currentWorkbook) return null;

        return {
            workbook: this.currentWorkbook,
            title: this.currentWorkbook.title,
            sections: this.currentWorkbook.sections,
            timestamp: this.currentWorkbook.timestamp,
            theme: this.theme
        };
    }

    exportWorkbookData() {
        return {
            problem: this.currentProblem,
            solution: this.currentSolution,
            steps: this.solutionSteps,
            workbook: this.currentWorkbook,
            metadata: {
                timestamp: new Date().toISOString(),
                explanationLevel: this.explanationLevel,
                theme: this.theme
            }
        };
    }

    // Additional helper method for GCD (reused from linear workbook)
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

// Example usage and exports
export default EnhancedOrganicChemistryWorkbook;

// Example problem configurations for testing
export const exampleProblems = {
    empiricalFormula: {
        problemType: 'empirical_formula',
        data: {
            percentages: {
                'C': 40.0,
                'H': 6.7,
                'O': 53.3
            }
        },
        scenario: 'A compound contains 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. Determine its empirical formula.'
    },

    combustionAnalysis: {
        problemType: 'combustion_analysis',
        data: {
            compoundMass: 0.500,
            CO2mass: 1.100,
            H2Omass: 0.450,
            containsOxygen: true
        },
        scenario: 'When 0.500g of an organic compound is completely burned, it produces 1.100g of CO₂ and 0.450g of H₂O. Determine the empirical formula.'
    },

    molecularFormula: {
        problemType: 'molecular_formula',
        data: {
            empiricalFormula: 'CH2O',
            Mr: 180
        },
        scenario: 'A compound has an empirical formula of CH₂O and a molecular mass of 180. Find the molecular formula.'
    },

    stoichiometry: {
        problemType: 'stoichiometry',
        data: {
            equation: '2C2H5OH + O2 -> 2CH3COOH + 2H2O',
            givenSubstance: 'C2H5OH',
            givenAmount: 46,
            givenUnit: 'g',
            findSubstance: 'CH3COOH'
        },
        scenario: 'Calculate the mass of ethanoic acid (CH₃COOH) produced when 46g of ethanol (C₂H₅OH) is oxidized.'
    },

    percentageYield: {
        problemType: 'percentage_yield',
        data: {
            actualYield: 12.5,
            theoreticalYield: 15.0,
            calculate: 'percentage'
        },
        scenario: 'In a reaction, the theoretical yield was 15.0g but only 12.5g was obtained. Calculate the percentage yield.'
    },

    homologousSeries: {
        problemType: 'homologous_series',
        data: {
            series: 'alkane',
            n: 8,
            property: 'molecular_formula'
        },
        scenario: 'Find the molecular formula and molecular mass of the alkane with n = 8.'
    },

    gasVolume: {
        problemType: 'gas_volume',
        data: {
            substance: 'CO2',
            amount: 88,
            unit: 'g',
            calculate: 'volume',
            temperature: 'rtp'
        },
        scenario: 'Calculate the volume of 88g of CO₂ at room temperature and pressure (r.t.p.).'
    },

    concentration: {
        problemType: 'concentration',
        data: {
            substance: 'NaOH',
            mass: 40,
            volume: 0.5,
            calculate: 'concentration'
        },
        scenario: 'Calculate the concentration of a solution containing 40g of NaOH in 0.5 dm³ of solution.'
    },

    isomerAnalysis: {
        problemType: 'isomer_analysis',
        data: {
            molecularFormula: 'C4H8O',
            type: 'structural'
        },
        scenario: 'Calculate the degree of unsaturation for C₄H₈O and suggest possible structures.'
    },

    polymerCalculation: {
        problemType: 'polymer_calculation',
        data: {
            monomer: 'C2H4',
            degreeOfPolymerization: 1000,
            calculate: 'polymerMass'
        },
        scenario: 'Calculate the molecular mass of polyethene with a degree of polymerization of 1000.'
    }
};

// Helper function to create workbook instance with options
export function createOrganicChemistryWorkbook(options = {}) {
    return new EnhancedOrganicChemistryWorkbook(options);
}

// Helper function to solve a problem directly
export function solveOrganicProblem(problemConfig, workbookOptions = {}) {
    const workbook = new EnhancedOrganicChemistryWorkbook(workbookOptions);
    return workbook.solveOrganicProblem(problemConfig);
}

// Export example usage patterns
export const usageExamples = {
    basic: `
// Basic usage with default settings
const workbook = new EnhancedOrganicChemistryWorkbook();
const result = workbook.solveOrganicProblem({
    problemType: 'empirical_formula',
    data: {
        percentages: { 'C': 40.0, 'H': 6.7, 'O': 53.3 }
    }
});
console.log(result.solution.empiricalFormula);
    `,

    detailed: `
// Detailed explanation mode with all features
const workbook = new EnhancedOrganicChemistryWorkbook({
    explanationLevel: 'detailed',
    includeVerificationInSteps: true,
    includeConceptualConnections: true,
    includeAlternativeMethods: true,
    includeErrorPrevention: true,
    includeCommonMistakes: true,
    includePedagogicalNotes: true,
    verificationDetail: 'detailed',
    theme: 'chemistry'
});

const result = workbook.solveOrganicProblem({
    problemType: 'combustion_analysis',
    data: {
        compoundMass: 0.500,
        CO2mass: 1.100,
        H2Omass: 0.450,
        containsOxygen: true
    },
    scenario: 'Complete combustion analysis problem'
});

console.log(result.solution);
console.log(result.steps);
console.log(result.workbook);
    `,

    scaffolded: `
// Scaffolded learning mode for students
const workbook = new EnhancedOrganicChemistryWorkbook({
    explanationLevel: 'scaffolded',
    includeVerificationInSteps: true,
    includeConceptualConnections: true,
    includeErrorPrevention: true,
    includeCommonMistakes: true,
    theme: 'chemistry'
});

const result = workbook.solveOrganicProblem({
    problemType: 'stoichiometry',
    data: {
        equation: 'C2H5OH + O2 -> CO2 + H2O',
        givenSubstance: 'C2H5OH',
        givenAmount: 46,
        givenUnit: 'g',
        findSubstance: 'CO2'
    }
});

// Access scaffolding information
result.steps.forEach(step => {
    if (step.scaffolding) {
        console.log('Guiding Questions:', step.scaffolding.guidingQuestions);
        console.log('Hints:', step.scaffolding.hints);
    }
});
    `,

    batch: `
// Process multiple problems
const workbook = new EnhancedOrganicChemistryWorkbook({
    explanationLevel: 'intermediate'
});

const problems = [
    exampleProblems.empiricalFormula,
    exampleProblems.combustionAnalysis,
    exampleProblems.molecularFormula
];

const results = problems.map(problem => 
    workbook.solveOrganicProblem(problem)
);

results.forEach((result, index) => {
    console.log(`Problem ${index + 1}:`, result.solution);
});
    `
};

// Validation helpers
export const validators = {
    validatePercentageComposition: (percentages) => {
        const total = Object.values(percentages).reduce((sum, val) => sum + val, 0);
        return Math.abs(total - 100) < 0.1;
    },

    validateMolecularFormula: (formula) => {
        const regex = /^([A-Z][a-z]?\d*)+$/;
        return regex.test(formula);
    },

    validateBalancedEquation: (equation) => {
        // Basic validation - could be enhanced
        return equation.includes('->') || equation.includes('→');
    },

    validatePositiveValue: (value) => {
        return typeof value === 'number' && value > 0;
    }
};

// Quick access to common atomic masses
export const commonAtomicMasses = {
    'H': 1.008,
    'C': 12.011,
    'N': 14.007,
    'O': 15.999,
    'S': 32.065,
    'P': 30.974,
    'F': 18.998,
    'Cl': 35.453,
    'Br': 79.904,
    'I': 126.904,
    'Na': 22.990,
    'K': 39.098,
    'Ca': 40.078,
    'Fe': 55.845,
    'Cu': 63.546,
    'Zn': 65.38
};

// Common molecular masses for quick reference
export const commonMolecularMasses = {
    'H2O': 18.015,
    'CO2': 44.01,
    'NH3': 17.031,
    'CH4': 16.043,
    'C2H5OH': 46.069,
    'CH3COOH': 60.052,
    'C6H12O6': 180.156,
    'NaCl': 58.443,
    'H2SO4': 98.079,
    'HCl': 36.461
};

// Molar volumes at different conditions
export const molarVolumes = {
    rtp: 24, // dm³/mol at 20°C, 1 atm
    stp: 22.4, // dm³/mol at 0°C, 1 atm
    satp: 24.8 // dm³/mol at 25°C, 100 kPa
};

// Homologous series general formulae
export const homologousSeriesFormulae = {
    'alkane': 'CₙH₂ₙ₊₂',
    'alkene': 'CₙH₂ₙ',
    'alkyne': 'CₙH₂ₙ₋₂',
    'cycloalkane': 'CₙH₂ₙ',
    'alcohol': 'CₙH₂ₙ₊₁OH',
    'aldehyde': 'CₙH₂ₙO',
    'ketone': 'CₙH₂ₙO',
    'carboxylic_acid': 'CₙH₂ₙO₂',
    'ester': 'CₙH₂ₙO₂',
    'amine': 'CₙH₂ₙ₊₃N',
    'halogenoalkane': 'CₙH₂ₙ₊₁X'
};

// Problem type descriptions for help documentation
export const problemTypeDescriptions = {
    empirical_formula: 'Determine the simplest whole number ratio of atoms from composition data',
    molecular_formula: 'Find the actual molecular formula from empirical formula and molecular mass',
    combustion_analysis: 'Calculate empirical formula from masses of combustion products (CO₂ and H₂O)',
    stoichiometry: 'Calculate masses and moles of reactants and products using balanced equations',
    percentage_yield: 'Calculate the efficiency of a reaction by comparing actual to theoretical yield',
    homologous_series: 'Apply general formulae to find molecular formulas and masses in organic series',
    polymer_calculation: 'Calculate polymer properties from repeat units and degree of polymerization',
    gas_volume: 'Convert between mass, moles, and volume of gases at r.t.p.',
    concentration: 'Calculate solution concentrations in mol/dm³',
    isomer_analysis: 'Calculate degree of unsaturation (DBE) and predict possible structures'
};

// Export everything
export {
    EnhancedOrganicChemistryWorkbook,
    exampleProblems,
    createOrganicChemistryWorkbook,
    solveOrganicProblem,
    usageExamples,
    validators,
    commonAtomicMasses,
    commonMolecularMasses,
    molarVolumes,
    homologousSeriesFormulae,
    problemTypeDescriptions
};
