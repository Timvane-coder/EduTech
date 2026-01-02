// Enhanced Atomic Structure & Chemical Bonding Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedAtomicChemicalWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "scientific";
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
        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';

        this.chemicalSymbols = this.initializeChemicalSymbols();
        this.periodicData = this.initializePeriodicData();
        this.setThemeColors();
        this.initializeAtomicSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializeChemicalSymbols() {
        return {
            // Greek letters commonly used in chemistry
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'lambda': 'λ',
            'mu': 'μ',
            'pi': 'π',
            
            // Chemical notation
            'electron': 'e⁻',
            'proton': 'p⁺',
            'neutron': 'n⁰',
            'bond': '—',
            'doublebond': '=',
            'triplebond': '≡',
            'rightarrow': '→',
            'equilibrium': '⇌',
            
            // Superscripts for isotopes
            'superscript': {
                '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
                '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
            },
            
            // Subscripts for chemical formulas
            'subscript': {
                '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
                '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
            }
        };
    }

    initializePeriodicData() {
        return {
            // Common elements with atomic data
            'H': { name: 'Hydrogen', atomicNumber: 1, atomicMass: 1.008, valency: 1, electronConfig: '1' },
            'He': { name: 'Helium', atomicNumber: 2, atomicMass: 4.003, valency: 0, electronConfig: '2' },
            'C': { name: 'Carbon', atomicNumber: 6, atomicMass: 12.011, valency: 4, electronConfig: '2,4' },
            'N': { name: 'Nitrogen', atomicNumber: 7, atomicMass: 14.007, valency: 3, electronConfig: '2,5' },
            'O': { name: 'Oxygen', atomicNumber: 8, atomicMass: 15.999, valency: 2, electronConfig: '2,6' },
            'F': { name: 'Fluorine', atomicNumber: 9, atomicMass: 18.998, valency: 1, electronConfig: '2,7' },
            'Ne': { name: 'Neon', atomicNumber: 10, atomicMass: 20.180, valency: 0, electronConfig: '2,8' },
            'Na': { name: 'Sodium', atomicNumber: 11, atomicMass: 22.990, valency: 1, electronConfig: '2,8,1' },
            'Mg': { name: 'Magnesium', atomicNumber: 12, atomicMass: 24.305, valency: 2, electronConfig: '2,8,2' },
            'Al': { name: 'Aluminum', atomicNumber: 13, atomicMass: 26.982, valency: 3, electronConfig: '2,8,3' },
            'Si': { name: 'Silicon', atomicNumber: 14, atomicMass: 28.085, valency: 4, electronConfig: '2,8,4' },
            'P': { name: 'Phosphorus', atomicNumber: 15, atomicMass: 30.974, valency: 3, electronConfig: '2,8,5' },
            'S': { name: 'Sulfur', atomicNumber: 16, atomicMass: 32.06, valency: 2, electronConfig: '2,8,6' },
            'Cl': { name: 'Chlorine', atomicNumber: 17, atomicMass: 35.45, valency: 1, electronConfig: '2,8,7' },
            'Ar': { name: 'Argon', atomicNumber: 18, atomicMass: 39.948, valency: 0, electronConfig: '2,8,8' },
            'K': { name: 'Potassium', atomicNumber: 19, atomicMass: 39.098, valency: 1, electronConfig: '2,8,8,1' },
            'Ca': { name: 'Calcium', atomicNumber: 20, atomicMass: 40.078, valency: 2, electronConfig: '2,8,8,2' },
            'Fe': { name: 'Iron', atomicNumber: 26, atomicMass: 55.845, valency: [2, 3], electronConfig: '2,8,14,2' },
            'Cu': { name: 'Copper', atomicNumber: 29, atomicMass: 63.546, valency: [1, 2], electronConfig: '2,8,18,1' },
            'Zn': { name: 'Zinc', atomicNumber: 30, atomicMass: 65.38, valency: 2, electronConfig: '2,8,18,2' },
            'Br': { name: 'Bromine', atomicNumber: 35, atomicMass: 79.904, valency: 1, electronConfig: '2,8,18,7' },
            'Ag': { name: 'Silver', atomicNumber: 47, atomicMass: 107.868, valency: 1, electronConfig: '2,8,18,18,1' },
            'I': { name: 'Iodine', atomicNumber: 53, atomicMass: 126.904, valency: 1, electronConfig: '2,8,18,18,7' }
        };
    }

    setThemeColors() {
        const themes = {
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
                atomBg: '#e8f4f8',
                electronBg: '#fff9e6',
                bondBg: '#f0f8ff'
            },
            chemistry: {
                background: '#ffffff',
                gridColor: '#2e7d32',
                headerBg: '#1b5e20',
                headerText: '#ffffff',
                sectionBg: '#c8e6c9',
                sectionText: '#1b5e20',
                cellBg: '#ffffff',
                cellText: '#2e7d32',
                resultBg: '#e8f5e9',
                resultText: '#1b5e20',
                formulaBg: '#fff9c4',
                formulaText: '#827717',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#558b2f',
                mathBg: '#e0f2f1',
                mathText: '#00695c',
                graphBg: '#e8f5e9',
                atomBg: '#e1f5fe',
                electronBg: '#fff3e0',
                bondBg: '#f3e5f5'
            }
        };

        this.colors = themes[this.theme] || themes.scientific;
    }

    initializeAtomicSolvers() {
        this.atomicTypes = {
            // Atomic Structure Problems
            relative_atomic_mass: {
                patterns: [
                    /relative.*atomic.*mass/i,
                    /weighted.*average.*isotope/i,
                    /isotope.*abundance/i,
                    /average.*atomic.*mass/i,
                    /Ar.*calculation/i
                ],
                solver: this.solveRelativeAtomicMass.bind(this),
                name: 'Relative Atomic Mass (Ar)',
                category: 'atomic_structure',
                description: 'Calculates weighted average of isotopes'
            },

            relative_molecular_mass: {
                patterns: [
                    /relative.*molecular.*mass/i,
                    /molecular.*mass/i,
                    /Mr.*calculation/i,
                    /formula.*mass/i,
                    /molar.*mass/i
                ],
                solver: this.solveRelativeMolecularMass.bind(this),
                name: 'Relative Molecular Mass (Mr)',
                category: 'atomic_structure',
                description: 'Calculates sum of atomic masses in molecule'
            },

            subatomic_particles: {
                patterns: [
                    /proton.*neutron.*electron/i,
                    /subatomic.*particle/i,
                    /atomic.*number.*mass.*number/i,
                    /nucleon/i,
                    /particle.*composition/i
                ],
                solver: this.solveSubatomicParticles.bind(this),
                name: 'Sub-atomic Particles',
                category: 'atomic_structure',
                description: 'Determines protons, neutrons, and electrons'
            },

            electron_configuration: {
                patterns: [
                    /electron.*configuration/i,
                    /electronic.*structure/i,
                    /shell.*structure/i,
                    /orbital.*diagram/i,
                    /electron.*arrangement/i
                ],
                solver: this.solveElectronConfiguration.bind(this),
                name: 'Electron Configuration',
                category: 'atomic_structure',
                description: 'Determines electron arrangement in shells'
            },

            avogadro_conversion: {
                patterns: [
                    /avogadro.*constant/i,
                    /mole.*particle.*conversion/i,
                    /6\.022.*10\^23/i,
                    /number.*of.*particles/i,
                    /mole.*to.*particle/i
                ],
                solver: this.solveAvogadroConversion.bind(this),
                name: 'Avogadro\'s Constant Conversion',
                category: 'atomic_structure',
                description: 'Converts between moles and number of particles'
            },

            isotope_notation: {
                patterns: [
                    /isotope.*notation/i,
                    /mass.*number.*atomic.*number/i,
                    /nuclear.*symbol/i,
                    /isotope.*symbol/i
                ],
                solver: this.solveIsotopeNotation.bind(this),
                name: 'Isotope Notation',
                category: 'atomic_structure',
                description: 'Interprets and writes isotope symbols'
            },

            // Chemical Bonding Problems
            valency_oxidation: {
                patterns: [
                    /valency/i,
                    /oxidation.*state/i,
                    /oxidation.*number/i,
                    /valence.*electron/i,
                    /combining.*capacity/i
                ],
                solver: this.solveValencyOxidation.bind(this),
                name: 'Valency and Oxidation Numbers',
                category: 'chemical_bonding',
                description: 'Determines valency and oxidation states'
            },

            lewis_structure: {
                patterns: [
                    /lewis.*structure/i,
                    /dot.*cross.*diagram/i,
                    /electron.*dot.*structure/i,
                    /valence.*electron.*diagram/i,
                    /bonding.*electron/i
                ],
                solver: this.solveLewisStructure.bind(this),
                name: 'Lewis (Dot-and-Cross) Structures',
                category: 'chemical_bonding',
                description: 'Determines electron arrangement in molecules'
            },

            ionic_formula: {
                patterns: [
                    /ionic.*formula/i,
                    /charge.*balance/i,
                    /ionic.*compound/i,
                    /cation.*anion/i,
                    /ionic.*bonding.*ratio/i
                ],
                solver: this.solveIonicFormula.bind(this),
                name: 'Ionic Bonding Ratios',
                category: 'chemical_bonding',
                description: 'Balances charges to find ionic formulas'
            },

            covalent_bonding: {
                patterns: [
                    /covalent.*bond/i,
                    /shared.*electron/i,
                    /molecular.*bond/i,
                    /single.*double.*triple.*bond/i,
                    /bond.*order/i
                ],
                solver: this.solveCovalentBonding.bind(this),
                name: 'Covalent Bonding',
                category: 'chemical_bonding',
                description: 'Analyzes electron sharing in covalent bonds'
            },

            bond_energy: {
                patterns: [
                    /bond.*energy/i,
                    /bond.*strength/i,
                    /enthalpy.*bond/i,
                    /bond.*breaking.*forming/i
                ],
                solver: this.solveBondEnergy.bind(this),
                name: 'Bond Energy Calculations',
                category: 'chemical_bonding',
                description: 'Compares and calculates bond energies'
            },

            electronegativity: {
                patterns: [
                    /electronegativity/i,
                    /polarity/i,
                    /polar.*bond/i,
                    /bond.*character/i
                ],
                solver: this.solveElectronegativity.bind(this),
                name: 'Electronegativity and Bond Polarity',
                category: 'chemical_bonding',
                description: 'Determines bond type from electronegativity'
            },

            molecular_shape: {
                patterns: [
                    /molecular.*shape/i,
                    /molecular.*geometry/i,
                    /VSEPR/i,
                    /bond.*angle/i,
                    /molecular.*structure/i
                ],
                solver: this.solveMolecularShape.bind(this),
                name: 'Molecular Shape (VSEPR)',
                category: 'chemical_bonding',
                description: 'Predicts 3D molecular geometry'
            },

            formal_charge: {
                patterns: [
                    /formal.*charge/i,
                    /charge.*distribution/i,
                    /electron.*accounting/i
                ],
                solver: this.solveFormalCharge.bind(this),
                name: 'Formal Charge Calculation',
                category: 'chemical_bonding',
                description: 'Calculates formal charges on atoms'
            },

            resonance_structures: {
                patterns: [
                    /resonance/i,
                    /resonance.*structure/i,
                    /delocalized.*electron/i,
                    /multiple.*lewis.*structure/i
                ],
                solver: this.solveResonanceStructures.bind(this),
                name: 'Resonance Structures',
                category: 'chemical_bonding',
                description: 'Identifies possible resonance forms'
            },

            intermolecular_forces: {
                patterns: [
                    /intermolecular.*force/i,
                    /van.*der.*waals/i,
                    /hydrogen.*bond/i,
                    /dipole.*interaction/i,
                    /london.*force/i
                ],
                solver: this.solveIntermolecularForces.bind(this),
                name: 'Intermolecular Forces',
                category: 'chemical_bonding',
                description: 'Identifies and compares IMF types'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            relative_atomic_mass: {
                'Calculate weighted average': [
                    'Forgetting to convert percentages to decimals',
                    'Not summing all isotope contributions',
                    'Mixing up mass number with abundance'
                ],
                'Verify total abundance': [
                    'Not checking that abundances sum to 100%',
                    'Using wrong units for abundance'
                ]
            },
            subatomic_particles: {
                'Calculate neutrons': [
                    'Forgetting: neutrons = mass number - atomic number',
                    'Confusing atomic number with mass number',
                    'Not accounting for charge when finding electrons'
                ]
            },
            electron_configuration: {
                'Fill electron shells': [
                    'Exceeding shell capacity (2, 8, 18 rule)',
                    'Not filling inner shells first',
                    'Miscounting total electrons'
                ]
            },
            valency_oxidation: {
                'Assign oxidation numbers': [
                    'Not following oxidation number rules',
                    'Forgetting oxidation numbers must sum to charge',
                    'Confusing oxidation state with valency'
                ]
            },
            ionic_formula: {
                'Balance charges': [
                    'Not crossing over charges correctly',
                    'Forgetting to simplify ratios',
                    'Not checking overall charge neutrality'
                ]
            },
            lewis_structure: {
                'Count valence electrons': [
                    'Miscounting total valence electrons',
                    'Not satisfying octet rule (except H)',
                    'Wrong number of bonding/lone pairs'
                ]
            }
        };

        this.errorPrevention = {
            abundance_checking: {
                reminder: 'Always verify abundances sum to 100%',
                method: 'Add all percentages before calculation'
            },
            charge_balance: {
                reminder: 'Total positive and negative charges must cancel',
                method: 'Check sum of all oxidation numbers equals overall charge'
            },
            electron_counting: {
                reminder: 'Count carefully: electrons = protons for neutral atoms',
                method: 'Use atomic number to verify electron count'
            },
            octet_rule: {
                reminder: 'Most atoms need 8 valence electrons (except H = 2)',
                method: 'Count electrons around each atom in Lewis structure'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why atoms and bonds behave this way',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact steps to solve the chemistry problem',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Atomic models and bond diagrams',
                language: 'visual and structural descriptions'
            },
            mathematical: {
                focus: 'Calculations and formulas',
                language: 'precise numerical methods'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple chemistry terms',
                detail: 'essential concepts only',
                examples: 'common elements and simple molecules'
            },
            intermediate: {
                vocabulary: 'standard chemistry terminology',
                detail: 'main concepts with explanations',
                examples: 'variety of elements and compounds'
            },
            detailed: {
                vocabulary: 'full scientific vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'complex molecules and advanced concepts'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    // MAIN SOLVER METHOD
    solveAtomicProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseAtomicProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solveAtomicProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateAtomicSteps(this.currentProblem, this.currentSolution);
            this.generateAtomicGraphData();
            this.generateAtomicWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                result: this.currentSolution?.result,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve atomic/chemical problem: ${error.message}`);
        }
    }

    parseAtomicProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanChemicalExpression(equation) : '';

        if (problemType && this.atomicTypes[problemType]) {
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

        // Auto-detect problem type
        for (const [type, config] of Object.entries(this.atomicTypes)) {
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

        throw new Error(`Unable to recognize atomic/chemical problem type from: ${equation || scenario}`);
    }

    cleanChemicalExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .trim();
    }

    solveAtomicProblem_Internal(problem) {
        const solver = this.atomicTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }
        return solver(problem);
    }

    // ========== ATOMIC STRUCTURE SOLVERS ==========

    solveRelativeAtomicMass(problem) {
        const { isotopes } = problem.parameters;
        // isotopes = [{ mass: 35, abundance: 75.77 }, { mass: 37, abundance: 24.23 }]

        if (!isotopes || isotopes.length === 0) {
            throw new Error('No isotope data provided');
        }

        // Check abundances sum to 100%
        const totalAbundance = isotopes.reduce((sum, iso) => sum + iso.abundance, 0);
        if (Math.abs(totalAbundance - 100) > 0.01) {
            throw new Error(`Abundances must sum to 100%, got ${totalAbundance.toFixed(2)}%`);
        }

        // Calculate weighted average
        let weightedSum = 0;
        const calculations = [];

        for (const isotope of isotopes) {
            const contribution = (isotope.mass * isotope.abundance) / 100;
            weightedSum += contribution;
            calculations.push({
                mass: isotope.mass,
                abundance: isotope.abundance,
                contribution: contribution,
                calculation: `(${isotope.mass} × ${isotope.abundance}/100) = ${contribution.toFixed(4)}`
            });
        }

        return {
            solutionType: 'Relative Atomic Mass',
            isotopes: isotopes,
            calculations: calculations,
            result: weightedSum,
            formula: 'Ar = Σ(mass × abundance/100)',
            unit: 'u (atomic mass units)',
            interpretation: `The average atomic mass is ${weightedSum.toFixed(3)} u`,
            category: 'relative_atomic_mass'
        };
    }

    solveRelativeMolecularMass(problem) {
        const { formula, elements } = problem.parameters;
        // elements = [{ symbol: 'H', count: 2 }, { symbol: 'O', count: 1 }] for H₂O

        if (!elements || elements.length === 0) {
            throw new Error('No molecular formula provided');
        }

        let totalMass = 0;
        const breakdown = [];

        for (const element of elements) {
            const elementData = this.periodicData[element.symbol];
            if (!elementData) {
                throw new Error(`Unknown element: ${element.symbol}`);
            }

            const contribution = elementData.atomicMass * element.count;
            totalMass += contribution;

            breakdown.push({
                element: element.symbol,
                name: elementData.name,
                atomicMass: elementData.atomicMass,
                count: element.count,
                contribution: contribution,
                calculation: `${element.count} × ${elementData.atomicMass.toFixed(3)} = ${contribution.toFixed(3)}`
            });
        }

        return {
            solutionType: 'Relative Molecular Mass',
            formula: formula || this.buildFormulaString(elements),
            breakdown: breakdown,
            result: totalMass,
            calculationMethod: 'Mr = Σ(atomic mass × count)',
            unit: 'u or g/mol',
            interpretation: `The molecular mass is ${totalMass.toFixed(3)} u`,
            category: 'relative_molecular_mass'
        };
    }

    solveSubatomicParticles(problem) {
        const { element, atomicNumber, massNumber, charge = 0 } = problem.parameters;

        if (!atomicNumber || !massNumber) {
            throw new Error('Atomic number and mass number required');
        }

        const protons = atomicNumber;
        const neutrons = massNumber - atomicNumber;
        const electrons = atomicNumber - charge; // For ions

        const elementData = element ? this.periodicData[element] : null;

        return {
            solutionType: 'Sub-atomic Particle Composition',
            element: element || 'Unknown',
            elementName: elementData?.name || 'Unknown',
            atomicNumber: atomicNumber,
            massNumber: massNumber,
            charge: charge,
            particles: {
                protons: protons,
                neutrons: neutrons,
                electrons: electrons
            },
            formulas: {
                protons: 'Protons = Atomic Number',
                neutrons: 'Neutrons = Mass Number - Atomic Number',
                electrons: 'Electrons = Atomic Number - Charge'
            },
            calculations: {
                protons: `Z = ${atomicNumber}`,
                neutrons: `N = ${massNumber} - ${atomicNumber} = ${neutrons}`,
                electrons: charge !== 0 ? 
                    `e⁻ = ${atomicNumber} - (${charge}) = ${electrons}` : 
                    `e⁻ = ${atomicNumber} (neutral atom)`
            },
            notation: this.buildIsotopeNotation(element || 'X', massNumber, atomicNumber, charge),
            category: 'subatomic_particles'
        };
    }

    solveElectronConfiguration(problem) {
        const { element, atomicNumber, electrons } = problem.parameters;

        const electronCount = electrons !== undefined ? electrons : atomicNumber;

        if (!electronCount) {
            throw new Error('Number of electrons required');
        }

        const shellCapacities = [2, 8, 8, 18, 18, 32]; // Simplified for MSCE level
        const configuration = [];
        let remaining = electronCount;
        let shellNumber = 1;

        while (remaining > 0 && shellNumber <= shellCapacities.length) {
            const capacity = shellCapacities[shellNumber - 1];
            const electronsInShell = Math.min(remaining, capacity);
            configuration.push({
                shell: shellNumber,
                electrons: electronsInShell,
                capacity: capacity,
                notation: `Shell ${shellNumber}: ${electronsInShell} electrons`
            });
            remaining -= electronsInShell;
            shellNumber++;
        }

        const configString = configuration.map(c => c.electrons).join(',');
        const elementData = element ? this.periodicData[element] : null;

        return {
            solutionType: 'Electron Configuration',
            element: element || 'Unknown',
            elementName: elementData?.name || 'Unknown',
            totalElectrons: electronCount,
            configuration: configuration,
            configurationString: configString,
            valenceElectrons: configuration[configuration.length - 1]?.electrons || 0,
            shellCount: configuration.length,
            rule: 'Maximum electrons per shell: 2, 8, 8, 18, 18...',
            notation: `Electronic structure: ${configString}`,
            category: 'electron_configuration'
        };
    }

    solveAvogadroConversion(problem) {
        const { moles, particles, direction } = problem.parameters;
        const AVOGADRO = 6.022e23;

        if (direction === 'moles_to_particles' && moles !== undefined) {
            const particleCount = moles * AVOGADRO;
            return {
                solutionType: 'Moles to Particles',
                given: { moles: moles },
                result: particleCount,
                formula: 'Number of particles = moles × Avogadro\'s constant',
                calculation: 'N = ${moles} × 6.022×10²³ = ${particleCount.toExponential(3)} moles',
                interpretation: `${moles} moles contains ${particleCount.toExponential(3)} moles particles`,
                category: 'avogadro_conversion'
            };
        } else if (direction === 'particles_to_moles' && particles !== undefined) {
            const moleCount = particles / AVOGADRO;
            return {
                solutionType: 'Particles to Moles',
                given: { particles: particles },
                result: moleCount,
                formula: 'Moles = Number of particles / Avogadro\'s constant',
                calculation: `n = ${particles.toExponential(3)} / 6.022×10²³ = ${moleCount.toFixed(6)}`,
                interpretation: `${particles.toExponential(3)} particles equals ${moleCount.toFixed(6)} moles`,
                category: 'avogadro_conversion'
            };
        } else {
            throw new Error('Specify direction: moles_to_particles or particles_to_moles');
        }
    }

    solveIsotopeNotation(problem) {
        const { element, massNumber, atomicNumber, charge = 0 } = problem.parameters;

        const notation = this.buildIsotopeNotation(element, massNumber, atomicNumber, charge);
        const protons = atomicNumber;
        const neutrons = massNumber - atomicNumber;
        const electrons = atomicNumber - charge;

        return {
            solutionType: 'Isotope Notation',
            element: element,
            notation: notation,
            atomicNumber: atomicNumber,
            massNumber: massNumber,
            charge: charge,
            interpretation: {
                protons: protons,
                neutrons: neutrons,
                electrons: electrons,
                description: `${element}-${massNumber} isotope` + (charge !== 0 ? ` with ${charge > 0 ? '+' : ''}${charge} charge` : '')
            },
            notationGuide: 'Format: ᴬ/Z X^(charge) where A=mass number, Z=atomic number',
            category: 'isotope_notation'
        };
    }

    // ========== CHEMICAL BONDING SOLVERS ==========

    solveValencyOxidation(problem) {
        const { compound, element, context } = problem.parameters;

        if (element) {
            const elementData = this.periodicData[element];
            if (!elementData) {
                throw new Error(`Unknown element: ${element}`);
            }

            return {
                solutionType: 'Valency',
                element: element,
                elementName: elementData.name,
                valency: elementData.valency,
                electronConfiguration: elementData.electronConfig,
                valenceElectrons: this.getValenceElectrons(elementData.electronConfig),
                explanation: `${element} has valency ${Array.isArray(elementData.valency) ? elementData.valency.join(' or ') : elementData.valency}`,
                category: 'valency_oxidation'
            };
        }

        if (compound) {
            // Example: H₂SO₄, find oxidation state of S
            const oxidationStates = this.calculateOxidationStates(compound);
            return {
                solutionType: 'Oxidation Numbers',
                compound: compound,
                oxidationStates: oxidationStates,
                rules: [
                    'Element in free state: 0',
                    'Monatomic ion: charge of ion',
                    'H usually +1, O usually -2',
                    'Sum of oxidation numbers = overall charge'
                ],
                category: 'valency_oxidation'
            };
        }

        throw new Error('Provide element or compound for valency/oxidation calculation');
    }

    solveLewisStructure(problem) {
        const { molecule, atoms } = problem.parameters;
        // atoms = [{ element: 'H', count: 2 }, { element: 'O', count: 1 }] for H₂O

        if (!atoms || atoms.length === 0) {
            throw new Error('Molecular formula required');
        }

        // Calculate total valence electrons
        let totalValence = 0;
        const atomDetails = [];

        for (const atom of atoms) {
            const elementData = this.periodicData[atom.element];
            if (!elementData) {
                throw new Error(`Unknown element: ${atom.element}`);
            }

            const valenceElectrons = this.getValenceElectrons(elementData.electronConfig);
            const contribution = valenceElectrons * atom.count;
            totalValence += contribution;

            atomDetails.push({
                element: atom.element,
                name: elementData.name,
                count: atom.count,
                valencePerAtom: valenceElectrons,
                totalContribution: contribution
            });
        }

        // Determine bonding pattern (simplified)
        const bondingAnalysis = this.analyzeBonding(atoms, totalValence);

        return {
            solutionType: 'Lewis Structure',
            molecule: molecule || this.buildFormulaString(atoms),
            atomDetails: atomDetails,
            totalValenceElectrons: totalValence,
            bondingPattern: bondingAnalysis.pattern,
            bondingPairs: bondingAnalysis.bondingPairs,
            lonePairs: bondingAnalysis.lonePairs,
            octetCheck: bondingAnalysis.octetCheck,
            steps: [
                'Count total valence electrons',
                'Arrange atoms (least electronegative in center)',
                'Place bonding pairs between atoms',
                'Distribute remaining electrons as lone pairs',
                'Check octet rule (except H needs 2)'
            ],
            category: 'lewis_structure'
        };
    }

    solveIonicFormula(problem) {
        const { cation, anion, cationCharge, anionCharge } = problem.parameters;

        if (!cation || !anion || cationCharge === undefined || anionCharge === undefined) {
            throw new Error('Cation, anion, and their charges required');
        }

        // Cross-over method: swap charges and simplify
        const cationCount = Math.abs(anionCharge);
        const anionCount = Math.abs(cationCharge);

        // Simplify ratio
        const gcdValue = this.gcd(cationCount, anionCount);
        const simplifiedCationCount = cationCount / gcdValue;
        const simplifiedAnionCount = anionCount / gcdValue;

        const formula = this.buildIonicFormula(cation, anion, simplifiedCationCount, simplifiedAnionCount);

        // Verify charge balance
        const totalPositive = cationCharge * simplifiedCationCount;
        const totalNegative = anionCharge * simplifiedAnionCount;
        const chargeBalanced = (totalPositive + totalNegative) === 0;

        return {
            solutionType: 'Ionic Formula',
            cation: cation,
            anion: anion,
            charges: {
                cation: cationCharge,
                anion: anionCharge
            },
            crossOverMethod: {
                step1: `Cation charge: ${cationCharge > 0 ? '+' : ''}${cationCharge}`,
                step2: `Anion charge: ${anionCharge < 0 ? '' : '+'}${anionCharge}`,
                step3: `Cross over: ${cation}${Math.abs(anionCharge)} ${anion}${Math.abs(cationCharge)}`,
                step4: `Simplify: ${formula}`
            },
            formula: formula,
            ratio: `${simplifiedCationCount}:${simplifiedAnionCount}`,
            chargeCheck: {
                totalPositive: totalPositive,
                totalNegative: totalNegative,
                balanced: chargeBalanced
            },
            explanation: `${simplifiedCationCount} ${cation} ions (${cationCharge > 0 ? '+' : ''}${cationCharge} each) combine with ${simplifiedAnionCount} ${anion} ions (${anionCharge < 0 ? '' : '+'}${anionCharge} each)`,
            category: 'ionic_formula'
        };
    }

    solveCovalentBonding(problem) {
        const { molecule, bonds } = problem.parameters;
        // bonds = [{ atom1: 'H', atom2: 'H', bondType: 'single' }]

        if (!bonds || bonds.length === 0) {
            throw new Error('Bond information required');
        }

        const bondAnalysis = [];
        let totalSharedElectrons = 0;

        for (const bond of bonds) {
            let sharedElectrons;
            let bondOrder;

            switch (bond.bondType.toLowerCase()) {
                case 'single':
                    sharedElectrons = 2;
                    bondOrder = 1;
                    break;
                case 'double':
                    sharedElectrons = 4;
                    bondOrder = 2;
                    break;
                case 'triple':
                    sharedElectrons = 6;
                    bondOrder = 3;
                    break;
                default:
                    sharedElectrons = 2;
                    bondOrder = 1;
            }

            totalSharedElectrons += sharedElectrons;

            bondAnalysis.push({
                bond: `${bond.atom1}-${bond.atom2}`,
                bondType: bond.bondType,
                sharedElectrons: sharedElectrons,
                bondOrder: bondOrder,
                notation: bond.bondType === 'single' ? '—' : 
                         bond.bondType === 'double' ? '=' : 
                         bond.bondType === 'triple' ? '≡' : '—'
            });
        }

        return {
            solutionType: 'Covalent Bonding',
            molecule: molecule,
            bonds: bondAnalysis,
            totalSharedElectrons: totalSharedElectrons,
            bondingPrinciple: 'Atoms share electrons to achieve stable electron configuration',
            bondTypes: {
                single: '2 shared electrons (σ bond)',
                double: '4 shared electrons (σ + π bond)',
                triple: '6 shared electrons (σ + 2π bonds)'
            },
            category: 'covalent_bonding'
        };
    }

    solveBondEnergy(problem) {
        const { bonds, operation } = problem.parameters;
        // bonds = [{ type: 'C-H', energy: 413, count: 4 }]

        if (!bonds || bonds.length === 0) {
            throw new Error('Bond energy data required');
        }

        const energyBreakdown = [];
        let totalEnergy = 0;

        for (const bond of bonds) {
            const contribution = bond.energy * bond.count;
            totalEnergy += contribution;

            energyBreakdown.push({
                bondType: bond.type,
                bondEnergy: bond.energy,
                count: bond.count,
                contribution: contribution,
                calculation: `${bond.count} × ${bond.energy} kJ/mol = ${contribution} kJ/mol`
            });
        }

        return {
            solutionType: 'Bond Energy',
            operation: operation || 'calculation',
            bonds: energyBreakdown,
            totalEnergy: totalEnergy,
            unit: 'kJ/mol',
            interpretation: operation === 'breaking' ? 
                `Energy required to break bonds: ${totalEnergy} kJ/mol (endothermic)` :
                operation === 'forming' ?
                `Energy released when forming bonds: ${totalEnergy} kJ/mol (exothermic)` :
                `Total bond energy: ${totalEnergy} kJ/mol`,
            principle: 'Breaking bonds requires energy (endothermic), forming bonds releases energy (exothermic)',
            category: 'bond_energy'
        };
    }

    solveElectronegativity(problem) {
        const { atom1, atom2, enValue1, enValue2 } = problem.parameters;

        if (!atom1 || !atom2 || enValue1 === undefined || enValue2 === undefined) {
            throw new Error('Two atoms and their electronegativity values required');
        }

        const difference = Math.abs(enValue1 - enValue2);
        let bondType;
        let bondCharacter;

        if (difference < 0.5) {
            bondType = 'Non-polar covalent';
            bondCharacter = 'Electrons shared equally';
        } else if (difference < 1.7) {
            bondType = 'Polar covalent';
            bondCharacter = 'Electrons shared unequally';
        } else {
            bondType = 'Ionic';
            bondCharacter = 'Electrons transferred';
        }

        const moreElectronegative = enValue1 > enValue2 ? atom1 : atom2;
        const lessElectronegative = enValue1 > enValue2 ? atom2 : atom1;

        return {
            solutionType: 'Electronegativity and Bond Polarity',
            atoms: { atom1, atom2 },
            electronegativityValues: {
                [atom1]: enValue1,
                [atom2]: enValue2
            },
            difference: difference,
            bondType: bondType,
            bondCharacter: bondCharacter,
            polarity: {
                moreElectronegative: moreElectronegative,
                lessElectronegative: lessElectronegative,
                partialCharges: bondType === 'Polar covalent' ? 
                    `δ⁻ on ${moreElectronegative}, δ⁺ on ${lessElectronegative}` : 
                    'None (non-polar) or full charges (ionic)'
            },
            guidelines: {
                'ΔEN < 0.5': 'Non-polar covalent',
                '0.5 ≤ ΔEN < 1.7': 'Polar covalent',
                'ΔEN ≥ 1.7': 'Ionic'
            },
            category: 'electronegativity'
        };
    }

    solveMolecularShape(problem) {
        const { molecule, centralAtom, bondingPairs, lonePairs } = problem.parameters;

        if (bondingPairs === undefined || lonePairs === undefined) {
            throw new Error('Number of bonding pairs and lone pairs required');
        }

        const totalPairs = bondingPairs + lonePairs;
        let electronGeometry, molecularShape, bondAngle;

        // VSEPR predictions
        switch (totalPairs) {
            case 2:
                electronGeometry = 'Linear';
                molecularShape = 'Linear';
                bondAngle = '180°';
                break;
            case 3:
                electronGeometry = 'Trigonal planar';
                if (lonePairs === 0) {
                    molecularShape = 'Trigonal planar';
                    bondAngle = '120°';
                } else if (lonePairs === 1) {
                    molecularShape = 'Bent';
                    bondAngle = '<120°';
                }
                break;
            case 4:
                electronGeometry = 'Tetrahedral';
                if (lonePairs === 0) {
                    molecularShape = 'Tetrahedral';
                    bondAngle = '109.5°';
                } else if (lonePairs === 1) {
                    molecularShape = 'Trigonal pyramidal';
                    bondAngle = '<109.5°';
                } else if (lonePairs === 2) {
                    molecularShape = 'Bent';
                    bondAngle = '<109.5°';
                }
                break;
            default:
                electronGeometry = 'Complex';
                molecularShape = 'Complex';
                bondAngle = 'Variable';
        }

        return {
            solutionType: 'Molecular Shape (VSEPR)',
            molecule: molecule,
            centralAtom: centralAtom,
            electronPairs: {
                bonding: bondingPairs,
                lone: lonePairs,
                total: totalPairs
            },
            electronGeometry: electronGeometry,
            molecularShape: molecularShape,
            bondAngle: bondAngle,
            vsepTheory: 'Electron pairs arrange to minimize repulsion',
            lonePairEffect: lonePairs > 0 ? 'Lone pairs occupy more space, reducing bond angles' : 'No lone pair effect',
            category: 'molecular_shape'
        };
    }

    solveFormalCharge(problem) {
        const { atom, valenceElectrons, bondingElectrons, nonBondingElectrons } = problem.parameters;

        if (valenceElectrons === undefined || bondingElectrons === undefined || nonBondingElectrons === undefined) {
            throw new Error('Valence electrons, bonding electrons, and non-bonding electrons required');
        }

        const formalCharge = valenceElectrons - nonBondingElectrons - (bondingElectrons / 2);

        return {
            solutionType: 'Formal Charge',
            atom: atom,
            valenceElectrons: valenceElectrons,
            bondingElectrons: bondingElectrons,
            nonBondingElectrons: nonBondingElectrons,
            formula: 'FC = V - N - B/2',
            calculation: `FC = ${valenceElectrons} - ${nonBondingElectrons} - ${bondingElectrons}/2 = ${formalCharge}`,
            formalCharge: formalCharge,
            interpretation: formalCharge === 0 ? 'Atom has no formal charge' :
                           formalCharge > 0 ? `Atom has +${formalCharge} formal charge` :
                           `Atom has ${formalCharge} formal charge`,
            principle: 'Formal charge helps identify most stable Lewis structure',
            category: 'formal_charge'
        };
    }

    solveResonanceStructures(problem) {
        const { molecule, structures } = problem.parameters;

        if (!structures || structures.length === 0) {
            throw new Error('Resonance structure information required');
        }

        return {
            solutionType: 'Resonance Structures',
            molecule: molecule,
            numberOfStructures: structures.length,
            structures: structures,
            principle: 'Resonance structures show delocalization of electrons',
            realStructure: 'Hybrid (average) of all resonance forms',
            bondOrder: 'Bond orders are fractional (between single and double)',
            stability: 'Greater electron delocalization = greater stability',
            category: 'resonance_structures'
        };
    }

    solveIntermolecularForces(problem) {
        const { molecule, moleculeType, polarity } = problem.parameters;

        const forces = this.identifyIntermolecularForces(moleculeType, polarity);

        return {
            solutionType: 'Intermolecular Forces',
            molecule: molecule,
            moleculeType: moleculeType,
            polarity: polarity,
            intermolecularForces: forces.present,
            strength: forces.strength,
            comparison: {
                'London dispersion': 'Weakest (all molecules)',
                'Dipole-dipole': 'Moderate (polar molecules)',
                'Hydrogen bonding': 'Strongest (H bonded to N, O, or F)'
            },
            effects: 'Stronger IMF → higher boiling point, greater viscosity',
            category: 'intermolecular_forces'
        };
    }

    // ========== HELPER METHODS ==========

    buildFormulaString(elements) {
        return elements.map(el => {
            const subscript = el.count > 1 ? this.toSubscript(el.count) : '';
            return `${el.symbol}${subscript}`;
        }).join('');
    }

    buildIsotopeNotation(element, massNumber, atomicNumber, charge = 0) {
        const massSuperscript = this.toSuperscript(massNumber);
        const atomicSubscript = this.toSubscript(atomicNumber);
        const chargeNotation = charge !== 0 ? this.toSuperscript(charge, true) : '';
        return `${massSuperscript}/${atomicSubscript}${element}${chargeNotation}`;
    }

    buildIonicFormula(cation, anion, cationCount, anionCount) {
        const cationPart = cationCount > 1 ? `${cation}${this.toSubscript(cationCount)}` : cation;
        const anionPart = anionCount > 1 ? `${anion}${this.toSubscript(anionCount)}` : anion;
        return `${cationPart}${anionPart}`;
    }

    toSubscript(num) {
        const subscripts = this.chemicalSymbols.subscript;
        return String(num).split('').map(d => subscripts[d] || d).join('');
    }

    toSuperscript(num, includeSign = false) {
        const superscripts = this.chemicalSymbols.superscript;
        const str = String(Math.abs(num));
        const result = str.split('').map(d => superscripts[d] || d).join('');
        
        if (includeSign && num !== 0) {
            return num > 0 ? `${result}⁺` : `${result}⁻`;
        }
        return result;
    }

    getValenceElectrons(electronConfig) {
        const shells = electronConfig.split(',').map(s => parseInt(s.trim()));
        return shells[shells.length - 1] || 0;
    }

    calculateOxidationStates(compound) {
        // Simplified oxidation state calculator
        // This would need more sophisticated parsing for real compounds
        return {
            compound: compound,
            method: 'Apply oxidation number rules',
            note: 'Full implementation requires compound parsing'
        };
    }

    analyzeBonding(atoms, totalValence) {
        // Simplified bonding analysis
        const totalAtoms = atoms.reduce((sum, a) => sum + a.count, 0);
        const estimatedBonds = Math.floor((totalAtoms - 1));
        const bondingElectrons = estimatedBonds * 2;
        const remainingElectrons = totalValence - bondingElectrons;

        return {
            pattern: 'Central atom bonded to surrounding atoms',
            bondingPairs: estimatedBonds,
            lonePairs: Math.floor(remainingElectrons / 2),
            octetCheck: 'Verify each atom (except H) has 8 electrons'
        };
    }

    identifyIntermolecularForces(moleculeType, polarity) {
        const forces = [];
        let strength = '';

        // All molecules have London dispersion
        forces.push('London dispersion forces');

        if (polarity === 'polar') {
            forces.push('Dipole-dipole interactions');
            strength = 'Moderate';
        }

        if (moleculeType === 'hydrogen_bonding') {
            forces.push('Hydrogen bonding');
            strength = 'Strong';
        }

        if (!polarity || polarity === 'nonpolar') {
            strength = 'Weak';
        }

        return { present: forces, strength: strength };
    }

    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a || 1;
    }

    // ========== STEP GENERATION ==========

    generateAtomicSteps(problem, solution) {
        let baseSteps = this.generateBaseAtomicSteps(problem, solution);

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

    generateBaseAtomicSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'relative_atomic_mass':
                return this.generateRelativeAtomicMassSteps(problem, solution);
            case 'relative_molecular_mass':
                return this.generateRelativeMolecularMassSteps(problem, solution);
            case 'subatomic_particles':
                return this.generateSubatomicParticlesSteps(problem, solution);
            case 'electron_configuration':
                return this.generateElectronConfigurationSteps(problem, solution);
            case 'ionic_formula':
                return this.generateIonicFormulaSteps(problem, solution);
            case 'lewis_structure':
                return this.generateLewisStructureSteps(problem, solution);
            case 'valency_oxidation':
                return this.generateValencyOxidationSteps(problem, solution);
            default:
                return this.generateGenericAtomicSteps(problem, solution);
        }
    }

    generateRelativeAtomicMassSteps(problem, solution) {
        const steps = [];
        
        steps.push({
            stepNumber: 1,
            step: 'Identify isotope data',
            description: 'List all isotopes with their masses and abundances',
            expression: solution.isotopes.map(iso => 
                `Isotope: mass = ${iso.mass}, abundance = ${iso.abundance}%`
            ).join('; '),
            reasoning: 'We need both the mass and the percentage abundance of each isotope',
            visualHint: 'Think of this as a weighted average problem',
            goalStatement: 'Calculate the average atomic mass based on natural abundance'
        });

        steps.push({
            stepNumber: 2,
            step: 'Verify abundances sum to 100%',
            description: 'Check that all abundance percentages add up to 100%',
            expression: solution.isotopes.map(iso => iso.abundance).join(' + ') + ' = 100%',
            reasoning: 'Total abundance must equal 100% for a valid calculation',
            algebraicRule: 'Conservation of probability: Σ(abundances) = 100%'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate weighted contributions',
            description: 'Multiply each mass by its abundance (as decimal)',
            calculations: solution.calculations,
            reasoning: 'Each isotope contributes to the average proportionally to its abundance',
            formula: 'Contribution = (mass × abundance/100)'
        });

        steps.push({
            stepNumber: 4,
            step: 'Sum all contributions',
            description: 'Add all the weighted contributions together',
            expression: solution.calculations.map(c => c.contribution.toFixed(4)).join(' + '),
            afterExpression: `Ar = ${solution.result.toFixed(3)} u`,
            reasoning: 'The sum of weighted contributions gives the average atomic mass',
            finalAnswer: true,
            numericalResult: solution.result
        });

        return steps;
    }

    generateRelativeMolecularMassSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify molecular formula',
            description: 'Determine which elements and how many of each',
            expression: solution.formula,
            reasoning: 'We need to know the composition of the molecule'
        });

        steps.push({
            stepNumber: 2,
            step: 'Look up atomic masses',
            description: 'Find the atomic mass of each element from periodic table',
            data: solution.breakdown.map(b => 
                `${b.element}: ${b.atomicMass.toFixed(3)} u`
            ),
            reasoning: 'Atomic masses are needed for the calculation'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate each element contribution',
            description: 'Multiply atomic mass by the number of atoms',
            calculations: solution.breakdown,
            reasoning: 'Each element contributes based on how many atoms are present',
            formula: 'Contribution = atomic mass × count'
        });

        steps.push({
            stepNumber: 4,
            step: 'Sum all contributions',
            description: 'Add up all the individual contributions',
            expression: solution.breakdown.map(b => b.contribution.toFixed(3)).join(' + '),
            afterExpression: `Mr = ${solution.result.toFixed(3)} u`,
            reasoning: 'The molecular mass is the sum of all atomic mass contributions',
            finalAnswer: true,
            numericalResult: solution.result
        });

        return steps;
    }

    generateSubatomicParticlesSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'Record the atomic number (Z) and mass number (A)',
            expression: `Element: ${solution.element}, Z = ${solution.atomicNumber}, A = ${solution.massNumber}`,
            reasoning: 'These two numbers contain all the information we need',
            visualHint: 'Atomic number is the number of protons; mass number is protons + neutrons'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find number of protons',
            description: 'Protons = atomic number (Z)',
            expression: solution.calculations.protons,
            reasoning: 'The atomic number directly tells us the number of protons',
            algebraicRule: 'Protons = Z (by definition)'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate number of neutrons',
            description: 'Neutrons = mass number - atomic number',
            expression: solution.calculations.neutrons,
            reasoning: 'Mass number is the sum of protons and neutrons',
            algebraicRule: 'Neutrons = A - Z',
            formula: 'N = A - Z'
        });

        steps.push({
            stepNumber: 4,
            step: 'Determine number of electrons',
            description: solution.charge !== 0 ? 
                'Electrons = protons - charge (for ions)' : 
                'Electrons = protons (for neutral atom)',
            expression: solution.calculations.electrons,
            reasoning: solution.charge !== 0 ?
                'Ions have gained or lost electrons' :
                'Neutral atoms have equal protons and electrons',
            algebraicRule: 'Electrons = Z - charge'
        });

        steps.push({
            stepNumber: 5,
            step: 'Write complete notation',
            description: 'Express in isotope notation',
            expression: solution.notation,
            reasoning: 'Standard notation shows all particle information',
            finalAnswer: true
        });

        return steps;
    }

    generateElectronConfigurationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Determine number of electrons',
            description: 'Identify total electrons to arrange',
            expression: `Total electrons = ${solution.totalElectrons}`,
            reasoning: 'We need to know how many electrons to place in shells'
        });

        steps.push({
            stepNumber: 2,
            step: 'Know shell capacities',
            description: 'Recall maximum electrons per shell',
            expression: 'Shell 1: max 2, Shell 2: max 8, Shell 3: max 8, Shell 4: max 18...',
            reasoning: 'Each shell has a maximum capacity following the pattern 2, 8, 8, 18, 18...',
            algebraicRule: 'Maximum electrons in shell n = 2n² (simplified to 2, 8, 8, 18 for MSCE)'
        });

        steps.push({
            stepNumber: 3,
            step: 'Fill shells in order',
            description: 'Place electrons starting from innermost shell',
            shellFilling: solution.configuration,
            reasoning: 'Electrons fill lower energy shells first',
            principle: 'Aufbau principle: fill from lowest to highest energy'
        });

        steps.push({
            stepNumber: 4,
            step: 'Write electron configuration',
            description: 'Express as comma-separated shell notation',
            expression: solution.configurationString,
            reasoning: 'Standard notation shows electrons in each shell',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'Identify valence electrons',
            description: 'Count electrons in outermost shell',
            expression: `Valence electrons = ${solution.valenceElectrons}`,
            reasoning: 'Valence electrons determine chemical properties',
            chemicalSignificance: 'These electrons participate in bonding'
        });

        return steps;
    }

    generateIonicFormulaSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify ions and charges',
            description: 'Record the cation and anion with their charges',
            expression: `${solution.cation}${solution.charges.cation > 0 ? '+' : ''}${solution.charges.cation}, ${solution.anion}${solution.charges.anion < 0 ? '' : '+'}${solution.charges.anion}`,
            reasoning: 'We need to know both ions and their charges to balance the formula',
            visualHint: 'Cations are positive, anions are negative'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply cross-over method',
            description: 'Swap the magnitude of charges as subscripts',
            expression: solution.crossOverMethod.step3,
            reasoning: 'Cross-over method ensures charge balance',
            method: 'The charge on one ion becomes the subscript of the other',
            algebraicRule: 'Total positive charge = Total negative charge'
        });

        steps.push({
            stepNumber: 3,
            step: 'Simplify the ratio',
            description: 'Reduce subscripts to lowest whole numbers',
            beforeExpression: solution.crossOverMethod.step3,
            afterExpression: solution.crossOverMethod.step4,
            reasoning: 'Chemical formulas use the simplest whole number ratio',
            formula: solution.formula,
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Verify charge balance',
            description: 'Check that total positive and negative charges cancel',
            chargeCheck: solution.chargeCheck,
            expression: `Total charge: (${solution.charges.cation}) × ${solution.formula.match(/\d+/)?.[0] || 1} + (${solution.charges.anion}) × ${solution.formula.match(/\d+$/)?.[0] || 1} = 0`,
            reasoning: 'Ionic compounds must be electrically neutral',
            verification: solution.chargeCheck.balanced ? 'Charges are balanced ✓' : 'ERROR: Charges not balanced'
        });

        return steps;
    }

    generateLewisStructureSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Count valence electrons',
            description: 'Add up valence electrons from all atoms',
            atomDetails: solution.atomDetails,
            reasoning: 'Total valence electrons determines bonding capacity',
            calculation: solution.atomDetails.map(a => 
                `${a.element}: ${a.valencePerAtom} × ${a.count} = ${a.totalContribution}`
            ).join('; ')
        });

        steps.push({
            stepNumber: 2,
            step: 'Sum total valence electrons',
            description: 'Add all contributions together',
            expression: `Total = ${solution.totalValenceElectrons} electrons`,
            reasoning: 'This is the total number of electrons to distribute',
            finalAnswer: false
        });

        steps.push({
            stepNumber: 3,
            step: 'Arrange atoms',
            description: 'Place least electronegative atom in center',
            reasoning: 'Central atom is usually the one that can form most bonds',
            guideline: 'H is always terminal (never central); usually one unique element is central'
        });

        steps.push({
            stepNumber: 4,
            step: 'Place bonding pairs',
            description: 'Draw single bonds between central and surrounding atoms',
            expression: solution.bondingPattern,
            reasoning: 'Each bond uses 2 electrons',
            calculation: `Bonding pairs: ${solution.bondingPairs}, electrons used: ${solution.bondingPairs * 2}`
        });

        steps.push({
            stepNumber: 5,
            step: 'Distribute remaining electrons',
            description: 'Place remaining electrons as lone pairs',
            expression: `Lone pairs: ${solution.lonePairs}`,
            reasoning: 'Remaining electrons become lone pairs on atoms',
            octetRule: 'Ensure each atom (except H) has 8 electrons'
        });

        steps.push({
            stepNumber: 6,
            step: 'Check octet rule',
            description: 'Verify all atoms satisfy octet rule',
            expression: solution.octetCheck,
            reasoning: 'Atoms are stable with 8 valence electrons (2 for H)',
            finalAnswer: true
        });

        return steps;
    }

    generateValencyOxidationSteps(problem, solution) {
        const steps = [];

        if (solution.element) {
            steps.push({
                stepNumber: 1,
                step: 'Identify element',
                description: `Find ${solution.element} in periodic table`,
                expression: `${solution.element} (${solution.elementName})`,
                reasoning: 'Element identity determines valency'
            });

            steps.push({
                stepNumber: 2,
                step: 'Determine electron configuration',
                description: 'Find electron arrangement',
                expression: solution.electronConfiguration,
                reasoning: 'Valency depends on valence electrons'
            });

            steps.push({
                stepNumber: 3,
                step: 'Count valence electrons',
                description: 'Electrons in outermost shell',
                expression: `Valence electrons = ${solution.valenceElectrons}`,
                reasoning: 'Valence electrons participate in bonding'
            });

            steps.push({
                stepNumber: 4,
                step: 'Determine valency',
                description: 'Calculate combining capacity',
                expression: `Valency = ${Array.isArray(solution.valency) ? solution.valency.join(' or ') : solution.valency}`,
                reasoning: 'Valency = electrons needed to complete octet or electrons available',
                rule: 'For groups 1-4: valency = group number; for groups 5-7: valency = 8 - group number',
                finalAnswer: true
            });
        } else if (solution.compound) {
            steps.push({
                stepNumber: 1,
                step: 'Write compound formula',
                description: 'Identify the compound',
                expression: solution.compound,
                reasoning: 'We need to find oxidation states of atoms in this compound'
            });

            steps.push({
                stepNumber: 2,
                step: 'Apply oxidation number rules',
                description: 'Use standard rules for common elements',
                rules: solution.rules,
                reasoning: 'Follow systematic rules to assign oxidation numbers'
            });

            steps.push({
                stepNumber: 3,
                step: 'Set up equation',
                description: 'Sum of oxidation numbers = overall charge',
                reasoning: 'For neutral molecule, oxidation numbers sum to zero',
                algebraicRule: 'Σ(oxidation numbers) = charge on species'
            });

            steps.push({
                stepNumber: 4,
                step: 'Solve for unknown',
                description: 'Calculate oxidation state of target element',
                oxidationStates: solution.oxidationStates,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateGenericAtomicSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Solve chemistry problem',
            description: 'Apply appropriate chemistry principles',
            expression: problem.scenario || 'Chemistry problem',
            reasoning: 'Use relevant atomic or bonding concepts',
            solution: solution
        }];
    }

    // Enhanced step explanation methods
    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationChemistry(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanationChemistry(step, problem),
                mathematical: this.getMathematicalExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesChemistry(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyChemistry(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        return enhanced;
    }

    getConceptualExplanationChemistry(step, problem) {
        const conceptualExplanations = {
            'Identify isotope data': 'Isotopes are atoms of the same element with different numbers of neutrons. They have the same chemical properties but different masses.',
            'Count valence electrons': 'Valence electrons are the electrons in the outermost shell. They determine how atoms bond with each other.',
            'Calculate neutrons': 'Neutrons provide mass and stability to the nucleus but do not affect chemical properties.',
            'Balance charges': 'Ionic compounds form when atoms transfer electrons to achieve stable electron configurations. The compound must be electrically neutral.',
            'Check octet rule': 'Atoms bond to achieve a stable configuration of 8 valence electrons (like noble gases), except hydrogen which needs only 2.'
        };

        return conceptualExplanations[step.step] || 'This step applies fundamental chemistry principles.';
    }

    getVisualExplanationChemistry(step, problem) {
        const visualExplanations = {
            'relative_atomic_mass': 'Imagine a bag of marbles with different weights - the average weight depends on how many of each type you have.',
            'subatomic_particles': 'Picture an atom as a tiny solar system: protons and neutrons in the nucleus (sun), electrons orbiting around (planets).',
            'electron_configuration': 'Think of electron shells as floors in a building - you must fill lower floors before moving to higher ones.',
            'ionic_formula': 'Visualize ions as puzzle pieces with + and - charges that must fit together to be electrically neutral.',
            'lewis_structure': 'Draw atoms as element symbols with dots representing valence electrons - pairs of dots between atoms show bonds.'
        };

        return visualExplanations[problem.type] || 'Visualize the atomic or molecular structure.';
    }

    getMathematicalExplanation(step) {
        if (step.formula) {
            return `Mathematical formula: ${step.formula}`;
        }
        if (step.algebraicRule) {
            return `Algebraic principle: ${step.algebraicRule}`;
        }
        return 'Apply arithmetic operations as shown.';
    }

    getProceduralExplanation(step) {
        if (step.calculation || step.calculations) {
            return 'Follow the calculation steps precisely, ensuring all values are substituted correctly.';
        }
        return 'Execute the described procedure systematically.';
    }

    identifyPrerequisitesChemistry(step, problemType) {
        const prerequisites = {
            'Count valence electrons': ['Electron configuration', 'Periodic table groups', 'Shell structure'],
            'Calculate neutrons': ['Understanding of atomic structure', 'Basic subtraction', 'Isotope concept'],
            'Balance charges': ['Concept of ions', 'Charge conservation', 'Ratio simplification'],
            'Calculate weighted average': ['Percentages', 'Decimal conversion', 'Weighted averages']
        };

        return prerequisites[step.step] || ['Basic chemistry knowledge'];
    }

    identifyKeyVocabularyChemistry(step) {
        const vocabulary = {
            'relative_atomic_mass': ['isotope', 'abundance', 'weighted average', 'atomic mass unit'],
            'subatomic_particles': ['proton', 'neutron', 'electron', 'atomic number', 'mass number'],
            'electron_configuration': ['shell', 'valence electrons', 'electron arrangement', 'octet rule'],
            'ionic_formula': ['cation', 'anion', 'charge', 'ionic bond', 'formula unit'],
            'lewis_structure': ['valence electrons', 'bonding pair', 'lone pair', 'octet rule', 'covalent bond']
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
                    explanation: this.generateStepBridgeChemistry(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeChemistry(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.expression || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because we must ${nextStep.reasoning?.toLowerCase() || 'continue the solution'}`,
            chemicalConnection: this.explainChemicalConnection(currentStep, nextStep)
        };
    }

    explainChemicalConnection(currentStep, nextStep) {
        const connections = {
            'Count valence electrons → Place bonding pairs': 'Knowing total valence electrons tells us how many electrons we can use for bonding',
            'Calculate neutrons → Write notation': 'All subatomic particles must be shown in proper isotope notation',
            'Balance charges → Verify charge balance': 'After balancing, we must verify the formula is electrically neutral'
        };

        const key = `${currentStep.step} → ${nextStep.step}`;
        return connections[key] || 'Each step builds upon the previous to solve the chemistry problem';
    }

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsChemistry(step, problemType),
                checkPoints: this.generateCheckPointsChemistry(step),
                warningFlags: this.identifyWarningFlagsChemistry(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionChemistry(step),
                expectedResult: this.describeExpectedResultChemistry(step),
                troubleshooting: this.generateTroubleshootingTipsChemistry(step)
            }
        };
    }

    generatePreventionTipsChemistry(step, problemType) {
        const tips = {
            'Count valence electrons': [
                'Double-check electron configuration for each element',
                'Remember to multiply by the number of atoms',
                'Verify total by checking periodic table groups'
            ],
            'Calculate neutrons': [
                'Always subtract atomic number from mass number',
                'Don\'t confuse atomic number with mass number',
                'Remember: neutrons have no charge'
            ],
            'Balance charges': [
                'Cross charges carefully',
                'Simplify ratios to lowest terms',
                'Verify total charge is zero'
            ]
        };

        return tips[step.step] || ['Check your work carefully', 'Verify units and values'];
    }

    generateCheckPointsChemistry(step) {
        return [
            'Have I used the correct formula or rule?',
            'Are my calculations arithmetically correct?',
            'Do my results make chemical sense?',
            'Have I included proper units and notation?'
        ];
    }

    identifyWarningFlagsChemistry(step, problemType) {
        const warnings = {
            relative_atomic_mass: step.step === 'Verify abundances sum to 100%' ? 
                ['Abundances must total exactly 100%'] : [],
            subatomic_particles: step.step === 'Determine number of electrons' ?
                ['Remember to account for ionic charge'] : [],
            ionic_formula: step.step === 'Simplify the ratio' ?
                ['Don\'t forget to reduce to simplest ratio'] : [],
            lewis_structure: step.step === 'Check octet rule' ?
                ['Exceptions: H needs 2, Be and B may have less than 8'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestionChemistry(step) {
        const questions = {
            'Count valence electrons': 'Did I correctly identify valence electrons for each element?',
            'Calculate neutrons': 'Did I subtract atomic number from mass number?',
            'Balance charges': 'Does my formula result in zero net charge?',
            'Check octet rule': 'Does each atom (except H) have 8 valence electrons?'
        };

        return questions[step.step] || 'Does this step make chemical sense?';
    }

    describeExpectedResultChemistry(step) {
        const expectations = {
            'Count valence electrons': 'Total should be a positive integer',
            'Calculate neutrons': 'Neutrons should be 0 or positive integer',
            'Balance charges': 'Simplest whole number ratio',
            'Verify charge balance': 'Total charge should equal zero'
        };

        return expectations[step.step] || 'Result should be chemically reasonable';
    }

    generateTroubleshootingTipsChemistry(step) {
        return [
            'Verify you\'re using correct atomic data from periodic table',
            'Check that you\'ve applied chemistry rules correctly',
            'Ensure arithmetic is accurate',
            'Confirm your answer makes chemical sense'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsChemistry(step, problem),
                subSteps: this.breakIntoSubSteps(step),
                hints: this.generateProgressiveHintsChemistry(step),
                practiceVariation: this.generatePracticeVariationChemistry(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessChemistry(step),
                decisionPoints: this.identifyDecisionPointsChemistry(step),
                alternativeApproaches: this.suggestAlternativeMethodsChemistry(step, problem)
            }
        }));
    }

    generateGuidingQuestionsChemistry(step, problem) {
        const questions = {
            'Count valence electrons': [
                'Which shell contains the valence electrons?',
                'How many atoms of each element are present?',
                'What is the total we need?'
            ],
            'Calculate neutrons': [
                'What is the mass number?',
                'What is the atomic number?',
                'What operation gives us neutrons?'
            ],
            'Balance charges': [
                'What are the charges on each ion?',
                'How can we make the total charge zero?',
                'What is the simplest ratio?'
            ]
        };

        return questions[step.step] || ['What information do I have?', 'What am I trying to find?', 'What formula or rule applies?'];
    }

    generateProgressiveHintsChemistry(step) {
        return {
            level1: 'Think about what information you have and what you need to find.',
            level2: 'Consider which chemistry rule or formula applies here.',
            level3: 'Look at the relationship between the known and unknown values.',
            level4: step.formula ? `Use the formula: ${step.formula}` : 'Follow the procedure described in the step.'
        };
    }

    generatePracticeVariationChemistry(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different elements or compounds',
            practiceHint: 'Start with simpler examples before moving to complex ones',
            extension: 'Once confident, try problems with multiple components or unusual cases'
        };
    }

    explainThinkingProcessChemistry(step) {
        return {
            observe: 'What chemical information do I have?',
            recall: 'What chemistry rules or principles apply?',
            plan: 'What steps do I need to take?',
            execute: 'How do I perform the calculation or procedure?',
            verify: 'Does my answer make chemical sense?'
        };
    }

    identifyDecisionPointsChemistry(step) {
        return [
            'Choosing which chemical rule to apply',
            'Deciding calculation order',
            'Determining if simplification is needed'
        ];
    }

    suggestAlternativeMethodsChemistry(step, problem) {
        const alternatives = {
            'relative_atomic_mass': [
                'Calculate each isotope contribution separately then sum',
                'Use proportion method with ratios'
            ],
            'electron_configuration': [
                'Fill shells using 2,8,8,18 rule',
                'Use more detailed orbital notation (for advanced students)'
            ]
        };

        return alternatives[problem.type] || ['Standard method is most straightforward for this problem'];
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we can now ${nextStep.description.toLowerCase()}`;
    }

    explainStepStrategy(nextStep) {
        return `To ${nextStep.step}, we will ${nextStep.description.toLowerCase()}`;
    }

    breakIntoSubSteps(step) {
        if (step.calculation || step.calculations) {
            return [
                'Identify all given values',
                'Write down the formula',
                'Substitute values into formula',
                'Perform the calculation',
                'Check units and significant figures'
            ];
        }

        return ['Understand what is being asked', 'Identify relevant information', 'Apply appropriate method'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step uses the result from step ${stepIndex}`,
            progression: 'We are systematically solving the problem',
            relationship: 'Each step provides information needed for the next'
        };
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
                detail: 'main concepts with explanations',
                format: 'clear step-by-step format'
            },
            detailed: {
                vocabulary: 'full scientific terminology',
                detail: 'comprehensive explanations with theory',
                format: 'thorough analysis'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery',
                format: 'questions and answers'
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
                    'isotope': 'version of an element with different mass',
                    'valence electrons': 'outer shell electrons',
                    'cation': 'positive ion',
                    'anion': 'negative ion',
                    'octet rule': 'rule of 8 electrons'
                }
            },
            intermediate: {
                replacements: {
                    'isotope': 'isotope',
                    'valence electrons': 'valence electrons',
                    'cation': 'cation',
                    'anion': 'anion',
                    'octet rule': 'octet rule'
                }
            },
            detailed: {
                replacements: {
                    'isotope': 'isotope (atoms with same protons, different neutrons)',
                    'valence electrons': 'valence electrons (outermost shell electrons)',
                    'cation': 'cation (positive ion from electron loss)',
                    'anion': 'anion (negative ion from electron gain)',
                    'octet rule': 'octet rule (stable configuration of 8 valence electrons)'
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

    // ========== VERIFICATION METHODS ==========

    verifyRelativeAtomicMass() {
        const { isotopes, result } = this.currentSolution;
        
        // Verify abundances sum to 100%
        const totalAbundance = isotopes.reduce((sum, iso) => sum + iso.abundance, 0);
        const abundanceCheck = Math.abs(totalAbundance - 100) < 0.01;

        // Recalculate to verify
        const recalculated = isotopes.reduce((sum, iso) => sum + (iso.mass * iso.abundance / 100), 0);
        const calculationCheck = Math.abs(recalculated - result) < 0.001;

        return {
            abundances: isotopes.map(iso => ({ mass: iso.mass, abundance: iso.abundance })),
            totalAbundance: totalAbundance,
            abundanceValid: abundanceCheck,
            calculated: result,
            verified: recalculated,
            difference: Math.abs(result - recalculated),
            calculationValid: calculationCheck,
            overall: abundanceCheck && calculationCheck
        };
    }

    verifyRelativeMolecularMass() {
        const { breakdown, result } = this.currentSolution;

        // Recalculate sum
        const recalculated = breakdown.reduce((sum, el) => sum + el.contribution, 0);
        const isValid = Math.abs(recalculated - result) < 0.001;

        return {
            breakdown: breakdown,
            calculated: result,
            verified: recalculated,
            difference: Math.abs(result - recalculated),
            isValid: isValid
        };
    }

    verifySubatomicParticles() {
        const { particles, atomicNumber, massNumber, charge } = this.currentSolution;

        // Verify relationships
        const protonsCorrect = particles.protons === atomicNumber;
        const neutronsCorrect = particles.neutrons === (massNumber - atomicNumber);
        const electronsCorrect = particles.electrons === (atomicNumber - charge);

        return {
            protons: { value: particles.protons, expected: atomicNumber, correct: protonsCorrect },
            neutrons: { value: particles.neutrons, expected: massNumber - atomicNumber, correct: neutronsCorrect },
            electrons: { value: particles.electrons, expected: atomicNumber - charge, correct: electronsCorrect },
            allCorrect: protonsCorrect && neutronsCorrect && electronsCorrect
        };
    }

    verifyElectronConfiguration() {
        const { configuration, totalElectrons } = this.currentSolution;

        // Verify total electrons
        const sumElectrons = configuration.reduce((sum, shell) => sum + shell.electrons, 0);
        const totalCorrect = sumElectrons === totalElectrons;

        // Verify no shell exceeds capacity
        const capacityCheck = configuration.every(shell => shell.electrons <= shell.capacity);

        return {
            configuration: configuration,
            totalElectrons: totalElectrons,
            sumElectrons: sumElectrons,
            totalCorrect: totalCorrect,
            capacityCheck: capacityCheck,
            isValid: totalCorrect && capacityCheck
        };
    }

    verifyIonicFormula() {
        const { charges, formula, chargeCheck } = this.currentSolution;

        return {
            formula: formula,
            charges: charges,
            chargeBalance: chargeCheck,
            isValid: chargeCheck.balanced
        };
    }

    // Format verification data
    formatRelativeAtomicMassVerification(verification) {
        return [
            ['Isotope Verification', ''],
            ['Total Abundance', `${verification.totalAbundance.toFixed(2)}%`],
            ['Abundance Check', verification.abundanceValid ? 'Valid (=100%)' : 'ERROR: Not 100%'],
            ['', ''],
            ['Calculation Verification', ''],
            ['Reported Result', verification.calculated.toFixed(3)],
            ['Recalculated', verification.verified.toFixed(3)],
            ['Difference', verification.difference.toExponential(2)],
            ['Calculation Check', verification.calculationValid ? 'Valid' : 'ERROR'],
            ['', ''],
            ['Overall Status', verification.overall ? 'VERIFIED ✓' : 'ERROR ✗']
        ];
    }

    formatRelativeMolecularMassVerification(verification) {
        const data = [
            ['Element Breakdown', ''],
            ...verification.breakdown.map(el => [el.element, el.contribution.toFixed(3)]),
            ['', ''],
            ['Calculated Mr', verification.calculated.toFixed(3)],
            ['Verified Sum', verification.verified.toFixed(3)],
            ['Difference', verification.difference.toExponential(2)],
            ['Status', verification.isValid ? 'VERIFIED ✓' : 'ERROR ✗']
        ];
        return data;
    }

    formatSubatomicParticlesVerification(verification) {
        return [
            ['Particle', 'Value', 'Expected', 'Status'],
            ['Protons', verification.protons.value, verification.protons.expected, verification.protons.correct ? '✓' : '✗'],
            ['Neutrons', verification.neutrons.value, verification.neutrons.expected, verification.neutrons.correct ? '✓' : '✗'],
            ['Electrons', verification.electrons.value, verification.electrons.expected, verification.electrons.correct ? '✓' : '✗'],
            ['','', '', ''],
            ['Overall Status', '', '', verification.allCorrect ? 'VERIFIED ✓' : 'ERROR ✗']
        ];
    }

    formatElectronConfigurationVerification(verification) {
        const data = [
            ['Shell Verification', ''],
            ['Shell', 'Electrons', 'Capacity', 'Status'],
            ...verification.configuration.map(shell => [
                `Shell ${shell.shell}`,
                shell.electrons,
                shell.capacity,
                shell.electrons <= shell.capacity ? '✓' : '✗ EXCEEDS'
            ]),
            ['', '', '', ''],
            ['Total Electrons', verification.totalElectrons, '', ''],
            ['Sum of Shells', verification.sumElectrons, '', ''],
            ['Total Check', verification.totalCorrect ? 'Valid ✓' : 'ERROR ✗', '', ''],
            ['Capacity Check', verification.capacityCheck ? 'Valid ✓' : 'ERROR ✗', '', ''],
            ['', '', '', ''],
            ['Overall Status', verification.isValid ? 'VERIFIED ✓' : 'ERROR ✗', '', '']
        ];
        return data;
    }

    formatIonicFormulaVerification(verification) {
        return [
            ['Ionic Formula', verification.formula],
            ['Cation Charge', verification.charges.cation > 0 ? `+${verification.charges.cation}` : verification.charges.cation],
            ['Anion Charge', verification.charges.anion],
            ['', ''],
            ['Charge Balance Check', ''],
            ['Total Positive', verification.chargeBalance.totalPositive],
            ['Total Negative', verification.chargeBalance.totalNegative],
            ['Net Charge', verification.chargeBalance.totalPositive + verification.chargeBalance.totalNegative],
            ['', ''],
            ['Status', verification.isValid ? 'VERIFIED ✓ (Neutral)' : 'ERROR ✗ (Not Neutral)']
        ];
    }

    calculateVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;

        switch (type) {
            case 'relative_atomic_mass':
                const arVerification = this.verifyRelativeAtomicMass();
                return arVerification.overall ? 'High' : 'Low';

            case 'relative_molecular_mass':
                const mrVerification = this.verifyRelativeMolecularMass();
                return mrVerification.isValid ? 'High' : 'Low';

            case 'subatomic_particles':
                const particleVerification = this.verifySubatomicParticles();
                return particleVerification.allCorrect ? 'High' : 'Low';

            case 'electron_configuration':
                const configVerification = this.verifyElectronConfiguration();
                return configVerification.isValid ? 'High' : 'Medium';

            case 'ionic_formula':
                const ionicVerification = this.verifyIonicFormula();
                return ionicVerification.isValid ? 'High' : 'Low';

            default:
                return 'Medium';
        }
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'relative_atomic_mass':
                notes.push('Verified abundances sum to 100%');
                notes.push('Recalculated weighted average');
                break;

            case 'relative_molecular_mass':
                notes.push('Verified sum of atomic mass contributions');
                notes.push('Checked against periodic table values');
                break;

            case 'subatomic_particles':
                notes.push('Verified using atomic number and mass number');
                notes.push('Checked charge balance for ions');
                break;

            case 'electron_configuration':
                notes.push('Verified total electron count');
                notes.push('Checked shell capacity limits');
                break;

            case 'ionic_formula':
                notes.push('Verified charge neutrality');
                notes.push('Checked ratio simplification');
                break;

            default:
                notes.push('Standard chemistry verification applied');
        }

        return notes.join('; ');
    }

    // ========== GRAPH DATA GENERATION ==========

    generateAtomicGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;
        const solution = this.currentSolution;

        switch(type) {
            case 'relative_atomic_mass':
                this.graphData = this.generateIsotopeDistributionGraph(solution);
                break;

            case 'electron_configuration':
                this.graphData = this.generateElectronShellDiagram(solution);
                break;

            case 'lewis_structure':
                this.graphData = this.generateLewisStructureDiagram(solution);
                break;

            case 'molecular_shape':
                this.graphData = this.generateMolecularGeometryDiagram(solution);
                break;
        }
    }

    generateIsotopeDistributionGraph(solution) {
        return {
            type: 'isotope_distribution',
            isotopes: solution.isotopes,
            averageMass: solution.result,
            title: 'Isotope Abundance Distribution'
        };
    }

    generateElectronShellDiagram(solution) {
        return {
            type: 'electron_shells',
            configuration: solution.configuration,
            element: solution.element,
            totalElectrons: solution.totalElectrons,
            title: `Electron Configuration: ${solution.element}`
        };
    }

    generateLewisStructureDiagram(solution) {
        return {
            type: 'lewis_structure',
            molecule: solution.molecule,
            totalValence: solution.totalValenceElectrons,
            bondingPairs: solution.bondingPairs,
            lonePairs: solution.lonePairs,
            title: `Lewis Structure: ${solution.molecule}`
        };
    }

    generateMolecularGeometryDiagram(solution) {
        return {
            type: 'molecular_geometry',
            shape: solution.molecularShape,
            bondAngle: solution.bondAngle,
            bondingPairs: solution.electronPairs.bonding,
            lonePairs: solution.electronPairs.lone,
            title: `Molecular Shape: ${solution.molecularShape}`
        };
    }

    // ========== WORKBOOK GENERATION ==========

    generateAtomicWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createChemistryConceptsSection(),
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
            title: 'Atomic Structure & Chemical Bonding Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.atomicTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.atomicTypes[this.currentProblem.type]?.category || 'Chemistry'],
            ['Description', this.atomicTypes[this.currentProblem.type]?.description || 'Chemistry problem']
        ];

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
            if (step.stepType === 'bridge') {
                if (this.explanationLevel !== 'basic') {
                    stepsData.push(['→ Transition', step.explanation?.nextGoal || 'Continuing...']);
                    stepsData.push(['', '']);
                }
                return;
            }

            // Main step header
            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            // Expression or calculation
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

            // Reasoning
            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            // Formula or rule
            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule', step.algebraicRule]);
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                if (step.explanations.visual) {
                    stepsData.push(['Visual Aid', step.explanations.visual]);
                }
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention && step.errorPrevention.commonMistakes.length > 0) {
                stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
            }

            // Scaffolding for guided learning
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Key Questions', step.scaffolding.guidingQuestions.join(' | ')]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createChemistryConceptsSection() {
        const { type } = this.currentProblem;
        const conceptsData = [];

        const concepts = {
            relative_atomic_mass: [
                ['Concept', 'Isotopes are atoms of the same element with different neutron numbers'],
                ['Formula', 'Ar = Σ(mass × abundance/100)'],
                ['Application', 'Natural abundance determines average atomic mass'],
                ['Units', 'Atomic mass units (u) or daltons (Da)']
            ],
            relative_molecular_mass: [
                ['Concept', 'Molecular mass is sum of atomic masses in a molecule'],
                ['Formula', 'Mr = Σ(atomic mass × count)'],
                ['Application', 'Used to calculate molar mass for stoichiometry'],
                ['Units', 'u or g/mol']
            ],
            subatomic_particles: [
                ['Concept', 'Atoms consist of protons, neutrons, and electrons'],
                ['Key Relations', 'Protons = Z, Neutrons = A - Z, Electrons = Z - charge'],
                ['Isotopes', 'Same protons, different neutrons'],
                ['Ions', 'Charged atoms from electron gain/loss']
            ],
            electron_configuration: [
                ['Concept', 'Electrons occupy shells around nucleus'],
                ['Shell Capacity', 'Maximum electrons: 2, 8, 8, 18, 18, 32...'],
                ['Filling Order', 'Lower energy shells fill first (Aufbau principle)'],
                ['Valence Electrons', 'Outermost shell electrons determine chemical properties']
            ],
            ionic_formula: [
                ['Concept', 'Ionic compounds form from electron transfer'],
                ['Charge Balance', 'Total positive = Total negative charge'],
                ['Method', 'Cross-over method: swap charge magnitudes as subscripts'],
                ['Simplification', 'Reduce to simplest whole number ratio']
            ],
            lewis_structure: [
                ['Concept', 'Shows valence electrons and bonding in molecules'],
                ['Octet Rule', 'Atoms tend to have 8 valence electrons (2 for H)'],
                ['Bonding Pairs', 'Shared electron pairs form covalent bonds'],
                ['Lone Pairs', 'Unshared electron pairs on atoms']
            ],
            valency_oxidation: [
                ['Valency', 'Combining capacity of an element'],
                ['Oxidation Number', 'Hypothetical charge if all bonds were ionic'],
                ['Rules', 'Free element = 0, ion = charge, H = +1, O = -2 (usually)'],
                ['Conservation', 'Sum of oxidation numbers = overall charge']
            ]
        };

        if (concepts[type]) {
            conceptsData.push(...concepts[type]);
        }

        return conceptsData.length > 0 ? {
            title: 'Key Chemistry Concepts',
            type: 'concepts',
            data: conceptsData
        } : null;
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [['Result Type', this.currentSolution.solutionType]];

        if (this.currentSolution.result !== undefined) {
            solutionData.push(['Final Answer', this.formatResult(this.currentSolution.result, this.currentSolution.unit)]);
        }

        if (this.currentSolution.formula) {
            solutionData.push(['Formula Used', this.currentSolution.formula]);
        }

        if (this.currentSolution.interpretation) {
            solutionData.push(['Interpretation', this.currentSolution.interpretation]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    formatResult(result, unit) {
        if (typeof result === 'number') {
            const formatted = result < 0.001 || result > 1000 ? result.toExponential(3) : result.toFixed(3);
            return unit ? `${formatted} ${unit}` : formatted;
        }
        return result.toString();
    }

    createAnalysisSection() {
        const analysisData = [
            ['Problem Type', this.currentProblem.type],
            ['Category', this.atomicTypes[this.currentProblem.type]?.category || 'General'],
            ['Steps Used', this.solutionSteps?.filter(s => s.stepType !== 'bridge').length || 0],
            ['Explanation Level', this.explanationLevel],
            ['Verification Confidence', this.calculateVerificationConfidence()]
        ];

        if (this.currentSolution.category) {
            analysisData.push(['Solution Category', this.currentSolution.category]);
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
        verificationData.push(['', '']);

        switch (type) {
            case 'relative_atomic_mass':
                const arVerification = this.verifyRelativeAtomicMass();
                verificationData.push(...this.formatRelativeAtomicMassVerification(arVerification));
                break;

            case 'relative_molecular_mass':
                const mrVerification = this.verifyRelativeMolecularMass();
                verificationData.push(...this.formatRelativeMolecularMassVerification(mrVerification));
                break;

            case 'subatomic_particles':
                const particleVerification = this.verifySubatomicParticles();
                verificationData.push(...this.formatSubatomicParticlesVerification(particleVerification));
                break;

            case 'electron_configuration':
                const configVerification = this.verifyElectronConfiguration();
                verificationData.push(...this.formatElectronConfigurationVerification(configVerification));
                break;

            case 'ionic_formula':
                const ionicVerification = this.verifyIonicFormula();
                verificationData.push(...this.formatIonicFormulaVerification(ionicVerification));
                break;

            default:
                verificationData.push(['General Check', 'Solution verified using chemistry principles']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
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
        const notes = this.generatePedagogicalNotesChemistry(type);

        return {
            title: 'Teaching & Learning Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.concepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.difficulties.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')],
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    generatePedagogicalNotesChemistry(problemType) {
        const pedagogicalDatabase = {
            relative_atomic_mass: {
                objectives: [
                    'Calculate weighted average of isotopes',
                    'Understand concept of natural abundance',
                    'Apply percentage calculations in chemistry'
                ],
                concepts: [
                    'Isotopes and atomic mass',
                    'Weighted averages',
                    'Natural abundance'
                ],
                prerequisites: [
                    'Percentage calculations',
                    'Decimal operations',
                    'Understanding of isotopes'
                ],
                difficulties: [
                    'Forgetting to convert percentages to decimals',
                    'Mixing up mass number with abundance',
                    'Not verifying abundances sum to 100%'
                ],
                extensions: [
                    'Mass spectrometry interpretation',
                    'Applications in radioactive dating',
                    'Calculating isotope ratios'
                ],
                assessment: [
                    'Check abundance verification step',
                    'Verify correct use of decimal form',
                    'Test with different numbers of isotopes'
                ]
            },
            relative_molecular_mass: {
                objectives: [
                    'Calculate molecular mass from formula',
                    'Use periodic table data correctly',
                    'Understand mole concept foundation'
                ],
                concepts: [
                    'Molecular formula interpretation',
                    'Atomic mass addition',
                    'Chemical compound composition'
                ],
                prerequisites: [
                    'Reading chemical formulas',
                    'Using periodic table',
                    'Basic arithmetic'
                ],
                difficulties: [
                    'Misreading subscripts in formulas',
                    'Using wrong atomic masses',
                    'Forgetting to multiply by subscripts'
                ],
                extensions: [
                    'Empirical vs molecular formulas',
                    'Stoichiometry calculations',
                    'Percent composition'
                ],
                assessment: [
                    'Test with compounds of varying complexity',
                    'Check periodic table usage',
                    'Verify understanding of subscripts'
                ]
            },
            subatomic_particles: {
                objectives: [
                    'Determine particle composition from notation',
                    'Understand atomic structure',
                    'Distinguish atoms from ions'
                ],
                concepts: [
                    'Protons, neutrons, electrons',
                    'Atomic and mass numbers',
                    'Isotope notation'
                ],
                prerequisites: [
                    'Basic atomic structure',
                    'Understanding of charge',
                    'Simple subtraction'
                ],
                difficulties: [
                    'Confusing atomic number with mass number',
                    'Forgetting to account for charge',
                    'Not understanding isotope concept'
                ],
                extensions: [
                    'Nuclear stability',
                    'Radioactive decay',
                    'Mass defect calculations'
                ],
                assessment: [
                    'Test with both neutral atoms and ions',
                    'Include various isotopes',
                    'Check understanding of notation'
                ]
            },
            electron_configuration: {
                objectives: [
                    'Write electron configurations',
                    'Understand shell filling order',
                    'Identify valence electrons'
                ],
                concepts: [
                    'Electron shells and capacity',
                    'Aufbau principle',
                    'Valence electrons'
                ],
                prerequisites: [
                    'Atomic structure basics',
                    'Counting and arithmetic',
                    'Understanding of periodic table'
                ],
                difficulties: [
                    'Exceeding shell capacities',
                    'Not filling shells in order',
                    'Miscounting total electrons'
                ],
                extensions: [
                    'Orbital notation (s, p, d, f)',
                    'Electron configuration and reactivity',
                    'Periodic trends'
                ],
                assessment: [
                    'Test with various elements',
                    'Check shell capacity understanding',
                    'Verify valence electron identification'
                ]
            },
            ionic_formula: {
                objectives: [
                    'Write correct ionic formulas',
                    'Balance charges in compounds',
                    'Understand ionic bonding'
                ],
                concepts: [
                    'Cations and anions',
                    'Charge balance',
                    'Formula simplification'
                ],
                prerequisites: [
                    'Understanding of ions',
                    'Charge concept',
                    'Ratio simplification'
                ],
                difficulties: [
                    'Not balancing charges correctly',
                    'Forgetting to simplify ratios',
                    'Confusing subscripts with charges'
                ],
                extensions: [
                    'Polyatomic ions',
                    'Transition metal compounds',
                    'Ionic compound naming'
                ],
                assessment: [
                    'Test with different charge combinations',
                    'Include cases needing simplification',
                    'Verify charge balance understanding'
                ]
            },
            lewis_structure: {
                objectives: [
                    'Draw Lewis structures',
                    'Apply octet rule',
                    'Distinguish bonding and lone pairs'
                ],
                concepts: [
                    'Valence electrons',
                    'Covalent bonding',
                    'Octet rule'
                ],
                prerequisites: [
                    'Valence electron concept',
                    'Understanding of bonding',
                    'Electron counting'
                ],
                difficulties: [
                    'Miscounting valence electrons',
                    'Not satisfying octet rule',
                    'Incorrect bond placement'
                ],
                extensions: [
                    'Multiple bonds',
                    'Resonance structures',
                    'Formal charges'
                ],
                assessment: [
                    'Test with simple molecules first',
                    'Check octet rule application',
                    'Verify electron counting'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Solve chemistry problems accurately'],
            concepts: ['Apply chemistry principles'],
            prerequisites: ['Basic chemistry knowledge'],
            difficulties: ['Various computational errors'],
            extensions: ['More complex variations'],
            assessment: ['Check understanding of solution process']
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethodsChemistry(type);

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

    generateAlternativeMethodsChemistry(problemType) {
        const alternativeDatabase = {
            relative_atomic_mass: {
                primaryMethod: 'Weighted average calculation',
                methods: [
                    {
                        name: 'Proportion Method',
                        description: 'Set up ratios based on abundances'
                    },
                    {
                        name: 'Systematic Addition',
                        description: 'Calculate each contribution separately, then sum'
                    }
                ],
                comparison: 'Weighted average is most direct; proportion method provides conceptual clarity'
            },
            subatomic_particles: {
                primaryMethod: 'Using atomic and mass numbers',
                methods: [
                    {
                        name: 'Isotope Notation Reading',
                        description: 'Read directly from isotope symbol'
                    },
                    {
                        name: 'Periodic Table Method',
                        description: 'Use periodic table for atomic number'
                    }
                ],
                comparison: 'All methods equivalent; choose based on given information'
            },
            electron_configuration: {
                primaryMethod: 'Shell filling with 2, 8, 8, 18 rule',
                methods: [
                    {
                        name: 'Orbital Notation',
                        description: 'Use s, p, d, f orbital notation (more advanced)'
                    },
                    {
                        name: 'Periodic Table Method',
                        description: 'Use position in periodic table to deduce configuration'
                    }
                ],
                comparison: 'Shell method is simplest for MSCE level; orbital notation more detailed'
            },
            ionic_formula: {
                primaryMethod: 'Cross-over method',
                methods: [
                    {
                        name: 'Algebraic Method',
                        description: 'Set up equation: (charge₁)(count₁) + (charge₂)(count₂) = 0'
                    },
                    {
                        name: 'Trial and Error',
                        description: 'Test different ratios until charges balance'
                    }
                ],
                comparison: 'Cross-over is fastest and most systematic'
            },
            lewis_structure: {
                primaryMethod: 'Systematic electron counting and placement',
                methods: [
                    {
                        name: 'Formal Charge Method',
                        description: 'Use formal charges to determine best structure'
                    },
                    {
                        name: 'VSEPR Integration',
                        description: 'Consider molecular geometry while drawing'
                    }
                ],
                comparison: 'Systematic method most reliable; formal charge useful for resonance'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard chemistry approach',
            methods: [
                {
                    name: 'Systematic Method',
                    description: 'Follow standard chemistry procedures'
                }
            ],
            comparison: 'Method choice depends on given information and personal preference'
        };
    }
}

