class ChemistryDiagramsRegistry {
    static diagrams = {
        // ===== 1. ATOMIC STRUCTURE =====
        'atomicStructureDiagram': {
            name: 'Atomic Structure Diagram',
            category: 'Atomic Structure',
            description: 'Nucleus with electron shells',
            type: 'atomic_structure',
            protons: 6,
            neutrons: 6,
            electrons: 6,
            element: 'Carbon',
            defaultOptions: {
                title: 'Carbon Atom Structure',
                showNucleus: true,
                showElectronShells: true,
                showLabels: true,
                showCharges: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'electronConfigurationDiagram': {
            name: 'Electron Configuration Diagram',
            category: 'Atomic Structure',
            description: 'Orbital filling diagram (spdf)',
            type: 'electron_configuration',
            element: 'Iron',
            atomicNumber: 26,
            defaultOptions: {
                title: 'Electron Configuration - Iron',
                showOrbitals: true,
                showSpinArrows: true,
                showNotation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'orbitalShapesDiagram': {
            name: 'Atomic Orbital Shapes',
            category: 'Atomic Structure',
            description: 's, p, d, f orbital geometries',
            type: 'orbital_shapes',
            orbitalsToShow: ['1s', '2p', '3d', '4f'],
            defaultOptions: {
                title: 'Atomic Orbital Shapes',
                show3D: true,
                showNodes: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'isotopeDiagram': {
            name: 'Isotope Comparison',
            category: 'Atomic Structure',
            description: 'Same element, different neutrons',
            type: 'isotope_comparison',
            element: 'Carbon',
            isotopes: [12, 13, 14],
            defaultOptions: {
                title: 'Carbon Isotopes',
                showNuclei: true,
                showMassNumbers: true,
                showNeutronDifference: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ionFormationDiagram': {
            name: 'Ion Formation Diagram',
            category: 'Atomic Structure',
            description: 'Atom gaining/losing electrons',
            type: 'ion_formation',
            element: 'Sodium',
            ionType: 'cation',
            charge: 1,
            defaultOptions: {
                title: 'Sodium Ion Formation (Na⁺)',
                showBefore: true,
                showAfter: true,
                showElectronTransfer: true,
                showCharges: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ionizationEnergyGraph': {
            name: 'Ionization Energy Trends',
            category: 'Atomic Structure',
            description: 'Ionization energy vs atomic number',
            type: 'ionization_energy',
            period: 3,
            defaultOptions: {
                title: 'Ionization Energy - Period 3',
                showTrend: true,
                showNobleGases: true,
                showExplanation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'atomicRadiusTrends': {
            name: 'Atomic Radius Trends',
            category: 'Atomic Structure',
            description: 'Size trends across periodic table',
            type: 'atomic_radius',
            defaultOptions: {
                title: 'Atomic Radius Trends',
                showPeriodicTable: true,
                showArrows: true,
                showExplanation: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'electronAffinityDiagram': {
            name: 'Electron Affinity Diagram',
            category: 'Atomic Structure',
            description: 'Energy change when gaining electron',
            type: 'electron_affinity',
            element: 'Chlorine',
            defaultOptions: {
                title: 'Electron Affinity - Chlorine',
                showEnergyLevel: true,
                showElectronAddition: true,
                showEnergyChange: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ATOMIC STRUCTURE APPARATUS DIAGRAMS =====
        'massSpectrometerChemistry': {
            name: 'Mass Spectrometer (Chemistry)',
            category: 'Atomic Structure',
            description: 'Determining relative atomic mass and isotope abundance',
            type: 'apparatus_diagram',
            apparatusType: 'mass_spectrometer_chem',
            sample: 'Chlorine',
            isotopes: [35, 37],
            defaultOptions: {
                title: 'Mass Spectrometer - Isotope Analysis',
                showRealObject: true,
                showIonization: true,
                showAcceleration: true,
                showDeflection: true,
                showDetector: true,
                showMassSpectrum: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Deflection path (with mass/charge ratio)',
                    constant: 'Magnetic field strength, accelerating voltage',
                    law: 'r = mv/qB, heavier isotopes deflect less'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'flameTestApparatus': {
            name: 'Flame Test Apparatus',
            category: 'Atomic Structure',
            description: 'Identifying elements by characteristic flame colors',
            type: 'apparatus_diagram',
            apparatusType: 'flame_test',
            element: 'Sodium',
            flameColor: 'yellow',
            defaultOptions: {
                title: 'Flame Test',
                showRealObject: true,
                showBunsenBurner: true,
                showWire: true,
                showFlameColor: true,
                showEnergyTransitions: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Electron energy levels (excitation then emission)',
                    constant: 'Energy level differences (unique to each element)',
                    law: 'E = hf, ΔE = hc/λ (specific wavelengths → specific colors)'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'emissionSpectroscopyApparatus': {
            name: 'Emission Spectroscopy Setup',
            category: 'Atomic Structure',
            description: 'Analyzing emission spectra through diffraction grating',
            type: 'apparatus_diagram',
            apparatusType: 'emission_spectroscopy',
            element: 'Hydrogen',
            visibleLines: [656, 486, 434, 410],
            defaultOptions: {
                title: 'Emission Spectroscopy',
                showRealObject: true,
                showDischargetube: true,
                showDiffractionGrating: true,
                showSpectrum: true,
                showWavelengths: true,
                showEnergyLevels: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Wavelengths emitted (electron transitions)',
                    constant: 'Energy levels (quantized)',
                    law: '1/λ = R(1/n₁² - 1/n₂²) (Rydberg equation)'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. CHEMICAL BONDING =====
        'ionicBondingDiagram': {
            name: 'Ionic Bonding Diagram',
            category: 'Chemical Bonding',
            description: 'Electron transfer forming ions',
            type: 'ionic_bonding',
            compound: 'NaCl',
            cation: 'Na+',
            anion: 'Cl-',
            defaultOptions: {
                title: 'Ionic Bonding - NaCl',
                showElectronTransfer: true,
                showIons: true,
                showElectrostaticAttraction: true,
                showLattice: false,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'covalentBondingDiagram': {
            name: 'Covalent Bonding Diagram',
            category: 'Chemical Bonding',
            description: 'Electron sharing between atoms',
            type: 'covalent_bonding',
            molecule: 'H2O',
            bondType: 'single',
            defaultOptions: {
                title: 'Covalent Bonding - Water',
                showElectronSharing: true,
                showLonePairs: true,
                showBondingPairs: true,
                showDotCross: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lewisStructureDiagram': {
            name: 'Lewis Structure Diagram',
            category: 'Chemical Bonding',
            description: 'Dot-cross diagram showing valence electrons',
            type: 'lewis_structure',
            molecule: 'CO2',
            defaultOptions: {
                title: 'Lewis Structure - CO₂',
                showValenceElectrons: true,
                showBonds: true,
                showLonePairs: true,
                showFormalCharges: false,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'vsepirTheoryDiagram': {
            name: 'VSEPR Theory Molecular Shapes',
            category: 'Chemical Bonding',
            description: 'Molecular geometry from electron pair repulsion',
            type: 'vsepr_theory',
            molecule: 'CH4',
            geometry: 'tetrahedral',
            defaultOptions: {
                title: 'VSEPR - Methane (Tetrahedral)',
                show3DShape: true,
                showBondAngles: true,
                showLonePairs: true,
                showElectronPairs: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'polarityDiagram': {
            name: 'Molecular Polarity Diagram',
            category: 'Chemical Bonding',
            description: 'Dipole moments and polar vs nonpolar',
            type: 'polarity',
            molecule: 'H2O',
            polar: true,
            defaultOptions: {
                title: 'Molecular Polarity - Water',
                showDipoles: true,
                showPartialCharges: true,
                showNetDipole: true,
                showElectronegativity: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hybridizationDiagram': {
            name: 'Orbital Hybridization Diagram',
            category: 'Chemical Bonding',
            description: 'sp, sp2, sp3 hybrid orbital formation',
            type: 'hybridization',
            centralAtom: 'Carbon',
            hybridization: 'sp3',
            defaultOptions: {
                title: 'sp³ Hybridization - Carbon',
                showAtomicOrbitals: true,
                showHybridOrbitals: true,
                showEnergyLevels: true,
                show3DShape: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'molecularOrbitalDiagram': {
            name: 'Molecular Orbital Diagram',
            category: 'Chemical Bonding',
            description: 'MO theory bonding and antibonding orbitals',
            type: 'molecular_orbital',
            molecule: 'O2',
            defaultOptions: {
                title: 'Molecular Orbital Diagram - O₂',
                showAtomicOrbitals: true,
                showMolecularOrbitals: true,
                showElectronFilling: true,
                showBondOrder: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'hydrogenBondingDiagram': {
            name: 'Hydrogen Bonding Diagram',
            category: 'Chemical Bonding',
            description: 'Intermolecular hydrogen bonds',
            type: 'hydrogen_bonding',
            molecules: 'water',
            defaultOptions: {
                title: 'Hydrogen Bonding - Water',
                showMolecules: true,
                showHydrogenBonds: true,
                showDipoles: true,
                showPartialCharges: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'intermolecularForcesDiagram': {
            name: 'Intermolecular Forces Comparison',
            category: 'Chemical Bonding',
            description: 'London, dipole-dipole, hydrogen bonding',
            type: 'intermolecular_forces',
            defaultOptions: {
                title: 'Types of Intermolecular Forces',
                showLondonForces: true,
                showDipoleDipole: true,
                showHydrogenBonding: true,
                showStrengthComparison: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'crystalLatticeDiagram': {
            name: 'Crystal Lattice Structure',
            category: 'Chemical Bonding',
            description: 'Ionic crystal lattice structure',
            type: 'crystal_lattice',
            compound: 'NaCl',
            latticeType: 'face-centered cubic',
            defaultOptions: {
                title: 'NaCl Crystal Lattice',
                show3DStructure: true,
                showUnitCell: true,
                showIons: true,
                showCoordinationNumber: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'metallicBondingDiagram': {
            name: 'Metallic Bonding Diagram',
            category: 'Chemical Bonding',
            description: 'Electron sea model',
            type: 'metallic_bonding',
            metal: 'Sodium',
            defaultOptions: {
                title: 'Metallic Bonding - Electron Sea',
                showCations: true,
                showElectronSea: true,
                showDelocalization: true,
                showProperties: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== BONDING APPARATUS DIAGRAMS =====
        'electrolysisCellApparatus': {
            name: 'Electrolysis Cell',
            category: 'Chemical Bonding',
            description: 'Using electricity to break ionic compounds',
            type: 'apparatus_diagram',
            apparatusType: 'electrolysis_cell',
            electrolyte: 'CuCl2',
            defaultOptions: {
                title: 'Electrolysis of Copper Chloride',
                showRealObject: true,
                showElectrodes: true,
                showElectrolyte: true,
                showBattery: true,
                showIonMovement: true,
                showReactions: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Ion movement, electrode products',
                    constant: 'Voltage, ion charges',
                    law: 'Cations → cathode (reduction), Anions → anode (oxidation)'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'conductivityTesterApparatus': {
            name: 'Electrical Conductivity Tester',
            category: 'Chemical Bonding',
            description: 'Testing ionic vs covalent compounds',
            type: 'apparatus_diagram',
            apparatusType: 'conductivity_tester',
            substance: 'NaCl solution',
            defaultOptions: {
                title: 'Conductivity Tester',
                showRealObject: true,
                showElectrodes: true,
                showBulb: true,
                showSolution: true,
                showIons: true,
                showCurrentFlow: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Conductivity (with mobile ions)',
                    constant: 'Voltage applied',
                    law: 'Mobile ions conduct electricity, covalent molecules don\'t'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. CHEMICAL REACTIONS =====
        'balancedEquationDiagram': {
            name: 'Balanced Chemical Equation',
            category: 'Chemical Reactions',
            description: 'Visual representation of balanced equation',
            type: 'balanced_equation',
            reaction: '2H2 + O2 → 2H2O',
            defaultOptions: {
                title: 'Balanced Equation - Water Formation',
                showReactants: true,
                showProducts: true,
                showMolecules: true,
                showCoefficients: true,
                showArrow: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'reactionTypesDiagram': {
            name: 'Types of Chemical Reactions',
            category: 'Chemical Reactions',
            description: 'Synthesis, decomposition, single/double displacement',
            type: 'reaction_types',
            reactionType: 'synthesis',
            defaultOptions: {
                title: 'Reaction Types',
                showAllTypes: true,
                showExamples: true,
                showPatterns: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'oxidationNumbersDiagram': {
            name: 'Oxidation Numbers Diagram',
            category: 'Chemical Reactions',
            description: 'Assigning oxidation states',
            type: 'oxidation_numbers',
            compound: 'H2SO4',
            defaultOptions: {
                title: 'Oxidation Numbers - Sulfuric Acid',
                showCompound: true,
                showNumbers: true,
                showRules: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'redoxReactionDiagram': {
            name: 'Redox Reaction Diagram',
            category: 'Chemical Reactions',
            description: 'Electron transfer in redox reactions',
            type: 'redox_reaction',
            reaction: 'Zn + Cu²⁺ → Zn²⁺ + Cu',
            defaultOptions: {
                title: 'Redox Reaction',
                showElectronTransfer: true,
                showOxidationStates: true,
                showHalfReactions: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        'combustionReactionDiagram': {
            name: 'Combustion Reaction Diagram',
            category: 'Chemical Reactions',
            description: 'Complete and incomplete combustion',
            type: 'combustion',
            fuel: 'CH4',
            combustionType: 'complete',
            defaultOptions: {
                title: 'Complete Combustion of Methane',
                showReactants: true,
                showProducts: true,
                showFlame: true,
                showEnergy: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'precipitationReactionDiagram': {
            name: 'Precipitation Reaction',
            category: 'Chemical Reactions',
            description: 'Forming insoluble product',
            type: 'precipitation',
            reaction: 'AgNO3 + NaCl → AgCl + NaNO3',
            defaultOptions: {
                title: 'Precipitation - Silver Chloride',
                showSolutions: true,
                showPrecipitate: true,
                showIons: true,
                showMixing: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'acidBaseNeutralizationDiagram': {
            name: 'Acid-Base Neutralization',
            category: 'Chemical Reactions',
            description: 'Acid + base → salt + water',
            type: 'neutralization',
            acid: 'HCl',
            base: 'NaOH',
            defaultOptions: {
                title: 'Neutralization Reaction',
                showReactants: true,
                showProducts: true,
                showIons: true,
                showWaterFormation: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'collisionTheoryDiagram': {
            name: 'Collision Theory Diagram',
            category: 'Chemical Reactions',
            description: 'Successful vs unsuccessful collisions',
            type: 'collision_theory',
            defaultOptions: {
                title: 'Collision Theory',
                showParticles: true,
                showCollisions: true,
                showActivationEnergy: true,
                showOrientation: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== REACTION APPARATUS DIAGRAMS =====
        'testTubeReactionApparatus': {
            name: 'Test Tube Reactions',
            category: 'Chemical Reactions',
            description: 'Simple mixing and observation',
            type: 'apparatus_diagram',
            apparatusType: 'test_tube_reaction',
            reaction: 'precipitation',
            defaultOptions: {
                title: 'Test Tube Reaction',
                showRealObject: true,
                showTestTubes: true,
                showReactants: true,
                showProducts: true,
                showObservations: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Color, precipitate formation, temperature',
                    constant: 'Conservation of mass, mole ratios',
                    law: 'Law of conservation of mass, stoichiometry'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'eudiometerApparatus': {
            name: 'Eudiometer (Gas Collection)',
            category: 'Chemical Reactions',
            description: 'Collecting and measuring gas volume',
            type: 'apparatus_diagram',
            apparatusType: 'eudiometer',
            gasCollected: 'H2',
            defaultOptions: {
                title: 'Eudiometer - Gas Collection',
                showRealObject: true,
                showTube: true,
                showWater: true,
                showGas: true,
                showVolumeMarkings: true,
                showReaction: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Gas volume produced',
                    constant: 'Temperature, pressure (or corrected for)',
                    law: 'PV = nRT, molar volume at STP'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'gasCollectionApparatus': {
            name: 'Gas Collection Over Water',
            category: 'Chemical Reactions',
            description: 'Collecting gas by water displacement',
            type: 'apparatus_diagram',
            apparatusType: 'gas_collection',
            gas: 'O2',
            defaultOptions: {
                title: 'Gas Collection Over Water',
                showRealObject: true,
                showReactionVessel: true,
                showDeliveryTube: true,
                showCollectionVessel: true,
                showWater: true,
                showGasBubbles: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume of gas collected',
                    constant: 'Water vapor pressure, stoichiometry',
                    law: 'P_total = P_gas + P_water, mole ratios'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. STOICHIOMETRY & MOLES =====
        'moleDiagram': {
            name: 'Mole Concept Diagram',
            category: 'Stoichiometry',
            description: 'Avogadro\'s number visualization',
            type: 'mole_concept',
            substance: 'Carbon',
            defaultOptions: {
                title: 'The Mole Concept',
                showParticles: true,
                showAvogadroNumber: true,
                showMolarMass: true,
                showScale: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stoichiometryMapDiagram': {
            name: 'Stoichiometry Conversion Map',
            category: 'Stoichiometry',
            description: 'Moles, mass, volume, particles interconversion',
            type: 'stoichiometry_map',
            defaultOptions: {
                title: 'Stoichiometry Conversion Pathways',
                showMass: true,
                showMoles: true,
                showVolume: true,
                showParticles: true,
                showConversionFactors: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'limitingReagentDiagram': {
            name: 'Limiting Reagent Diagram',
            category: 'Stoichiometry',
            description: 'Visual showing which reactant limits product',
            type: 'limiting_reagent',
            reaction: '2H2 + O2 → 2H2O',
            H2Amount: 3,
            O2Amount: 1,
            defaultOptions: {
                title: 'Limiting Reagent',
                showReactants: true,
                showProducts: true,
                showExcess: true,
                showLimiting: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'percentYieldDiagram': {
            name: 'Percent Yield Diagram',
            category: 'Stoichiometry',
            description: 'Theoretical vs actual yield',
            type: 'percent_yield',
            theoreticalYield: 10,
            actualYield: 8.5,
            defaultOptions: {
                title: 'Percent Yield',
                showTheoretical: true,
                showActual: true,
                showComparison: true,
                showCalculation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'empiricalFormulaDerivation': {
            name: 'Empirical Formula Derivation',
            category: 'Stoichiometry',
            description: 'From mass composition to simplest formula',
            type: 'empirical_formula',
            compound: 'glucose',
            percentComposition: {C: 40, H: 6.7, O: 53.3},
            defaultOptions: {
                title: 'Empirical Formula Determination',
                showPercentages: true,
                showMoles: true,
                showRatio: true,
                showFormula: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'molecularFormulaVsEmpirical': {
            name: 'Molecular vs Empirical Formula',
            category: 'Stoichiometry',
            description: 'Relationship between formulas',
            type: 'molecular_empirical',
            empiricalFormula: 'CH2O',
            molecularFormula: 'C6H12O6',
            defaultOptions: {
                title: 'Molecular vs Empirical Formula',
                showEmpirical: true,
                showMolecular: true,
                showMultiple: true,
                showMolarMass: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== STOICHIOMETRY APPARATUS DIAGRAMS =====
        'analyticalBalanceApparatus': {
            name: 'Analytical Balance',
            category: 'Stoichiometry',
            description: 'Precise mass measurement for mole calculations',
            type: 'apparatus_diagram',
            apparatusType: 'analytical_balance',
            substance: 'NaCl',
            mass: 5.850,
            defaultOptions: {
                title: 'Analytical Balance',
                showRealObject: true,
                showBalance: true,
                showSample: true,
                showDigitalDisplay: true,
                showWeighingPaper: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Mass measured',
                    constant: 'Molar mass of substance',
                    law: 'n = m/M (moles = mass/molar mass)'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'volumetricFlaskApparatus': {
            name: 'Volumetric Flask',
            category: 'Stoichiometry',
            description: 'Preparing solutions of precise concentration',
            type: 'apparatus_diagram',
            apparatusType: 'volumetric_flask',
            volume: 250,
            solute: 'NaOH',
            concentration: 0.1,
            defaultOptions: {
                title: 'Volumetric Flask - Solution Preparation',
                showRealObject: true,
                showFlask: true,
                showCalibrationMark: true,
                showSolution: true,
                showSteps: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume, concentration',
                    constant: 'Moles of solute',
                    law: 'c = n/V, M₁V₁ = M₂V₂ (dilution)'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'measuringCylinderApparatus': {
            name: 'Measuring Cylinder',
            category: 'Stoichiometry',
            description: 'Measuring liquid volumes for reactions',
            type: 'apparatus_diagram',
            apparatusType: 'measuring_cylinder',
            volume: 50,
            liquid: 'water',
            defaultOptions: {
                title: 'Measuring Cylinder',
                showRealObject: true,
                showCylinder: true,
                showGraduations: true,
                showMeniscus: true,
                showLiquid: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume measured',
                    constant: 'Density (for mass-volume conversions)',
                    law: 'Read at meniscus, V = m/ρ'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. ENERGETICS & THERMOCHEMISTRY =====
        'enthalpyProfileDiagram': {
            name: 'Enthalpy Profile Diagram',
            category: 'Energetics',
            description: 'Energy changes during reaction',
            type: 'enthalpy_profile',
            reactionType: 'exothermic',
            activationEnergy: 80,
            enthalpyChange: -100,
            defaultOptions: {
                title: 'Enthalpy Profile - Exothermic',
                showReactants: true,
                showProducts: true,
                showActivationEnergy: true,
                showEnthalpyChange: true,
                showTransitionState: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bornHaberCycleDiagram': {
            name: 'Born-Haber Cycle',
            category: 'Energetics',
            description: 'Energy cycle for ionic compound formation',
            type: 'born_haber',
            compound: 'NaCl',
            defaultOptions: {
                title: 'Born-Haber Cycle - NaCl',
                showElements: true,
                showIons: true,
                showCompound: true,
                showEnergySteps: true,
                showLatticeEnergy: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'hesssLawDiagram': {
            name: "Hess's Law Diagram",
            category: 'Energetics',
            description: 'Alternative pathways with same enthalpy change',
            type: 'hess_law',
            reaction: 'C + O2 → CO2',
            defaultOptions: {
                title: "Hess's Law",
                showDirectRoute: true,
                showIndirectRoute: true,
                showEnergies: true,
                showCalculation: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bondEnthalpyDiagram': {
            name: 'Bond Enthalpy Diagram',
            category: 'Energetics',
            description: 'Energy to break/form bonds',
            type: 'bond_enthalpy',
            reaction: 'H2 + Cl2 → 2HCl',
            defaultOptions: {
                title: 'Bond Enthalpy',
                showBondBreaking: true,
                showBondForming: true,
                showEnergyValues: true,
                showNetChange: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'latticeEnthalpyDiagram': {
            name: 'Lattice Enthalpy Diagram',
            category: 'Energetics',
            description: 'Energy of ionic lattice formation',
            type: 'lattice_enthalpy',
            compound: 'MgO',
            defaultOptions: {
                title: 'Lattice Enthalpy',
                showGaseousIons: true,
                showSolidLattice: true,
                showEnergyChange: true,
                showFactorsAffecting: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'enthalpyOfSolutionDiagram': {
            name: 'Enthalpy of Solution Diagram',
            category: 'Energetics',
            description: 'Energy changes when dissolving',
            type: 'enthalpy_solution',
            solute: 'NaCl',
            defaultOptions: {
                title: 'Enthalpy of Solution',
                showLatticeBreaking: true,
                showHydration: true,
                showNetChange: true,
                showWaterMolecules: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'entropyDiagram': {
            name: 'Entropy Diagram',
            category: 'Energetics',
            description: 'Disorder and entropy changes',
            type: 'entropy',
            process: 'ice melting',
            defaultOptions: {
                title: 'Entropy Change',
                showBefore: true,
                showAfter: true,
                showDisorder: true,
                showEntropyValue: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gibbsFreeEnergyDiagram': {
            name: 'Gibbs Free Energy Diagram',
            category: 'Energetics',
            description: 'Spontaneity prediction',
            type: 'gibbs_energy',
            deltaH: -50,
            deltaS: 100,
            temperature: 298,
            defaultOptions: {
                title: 'Gibbs Free Energy',
                showEquation: true,
                showValues: true,
                showSpontaneity: true,
                showTemperatureEffect: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ENERGETICS APPARATUS DIAGRAMS =====
        'calorimetryApparatus': {
            name: 'Simple Calorimeter',
            category: 'Energetics',
            description: 'Measuring heat of reaction',
            type: 'apparatus_diagram',
            apparatusType: 'simple_calorimeter',
            reaction: 'neutralization',
            defaultOptions: {
                title: 'Simple Calorimeter',
                showRealObject: true,
                showCup: true,
                showThermometer: true,
                showStirrer: true,
                showInsulation: true,
                showSolutions: true,
                showTemperatureChange: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature (increasing or decreasing)',
                    constant: 'Heat capacity of system',
                    law: 'q = mcΔT, heat released/absorbed'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'bombCalorimeterApparatus': {
            name: 'Bomb Calorimeter',
            category: 'Energetics',
            description: 'Measuring enthalpy of combustion',
            type: 'apparatus_diagram',
            apparatusType: 'bomb_calorimeter',
            sample: 'organic compound',
            defaultOptions: {
                title: 'Bomb Calorimeter',
                showRealObject: true,
                showBomb: true,
                showWaterBath: true,
                showThermometer: true,
                showIgnitionWire: true,
                showStirrer: true,
                showOxygenAtmosphere: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Water temperature (from combustion)',
                    constant: 'Calorimeter heat capacity',
                    law: 'q_combustion = -C_cal × ΔT'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'heatOfNeutralizationApparatus': {
            name: 'Heat of Neutralization Setup',
            category: 'Energetics',
            description: 'Measuring enthalpy of acid-base reaction',
            type: 'apparatus_diagram',
            apparatusType: 'neutralization_calorimetry',
            acid: 'HCl',
            base: 'NaOH',
            defaultOptions: {
                title: 'Heat of Neutralization',
                showRealObject: true,
                showCalorimeterCup: true,
                showAcid: true,
                showBase: true,
                showThermometer: true,
                showMixing: true,
                showTemperatureRise: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature (rises during neutralization)',
                    constant: 'Enthalpy of H⁺ + OH⁻ → H₂O',
                    law: 'ΔH_neut ≈ -57 kJ/mol for strong acid/base'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'flameCalorimeterApparatus': {
            name: 'Flame Calorimeter',
            category: 'Energetics',
            description: 'Measuring heat from burning fuels',
            type: 'apparatus_diagram',
            apparatusType: 'flame_calorimeter',
            fuel: 'ethanol',
            defaultOptions: {
                title: 'Flame Calorimeter',
                showRealObject: true,
                showSpiritBurner: true,
                showBeaker: true,
                showWater: true,
                showThermometer: true,
                showFlame: true,
                showDraftShield: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Water temperature, fuel mass',
                    constant: 'Specific heat capacity of water',
                    law: 'q = mcΔT (water), ΔH = q/n (fuel)'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. CHEMICAL KINETICS =====
        'reactionRateGraphDiagram': {
            name: 'Reaction Rate Graph',
            category: 'Kinetics',
            description: 'Concentration vs time graph',
            type: 'reaction_rate',
            order: 1,
            defaultOptions: {
                title: 'Reaction Rate - Concentration vs Time',
                showConcentrationDecrease: true,
                showTangent: true,
                showRate: true,
                showHalfLife: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rateEquationDiagram': {
            name: 'Rate Equation Diagram',
            category: 'Kinetics',
            description: 'Rate = k[A]^m[B]^n',
            type: 'rate_equation',
            reaction: 'A + B → C',
            rateConstant: 0.05,
            orderA: 2,
            orderB: 1,
            defaultOptions: {
                title: 'Rate Equation',
                showEquation: true,
                showOrders: true,
                showUnits: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reactionOrderGraphs': {
            name: 'Reaction Order Graphs',
            category: 'Kinetics',
            description: 'Zero, first, second order comparisons',
            type: 'reaction_orders',
            defaultOptions: {
                title: 'Reaction Order Graphs',
                showZeroOrder: true,
                showFirstOrder: true,
                showSecondOrder: true,
                showComparison: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'arrheniusEquationDiagram': {
            name: 'Arrhenius Equation Plot',
            category: 'Kinetics',
            description: 'ln(k) vs 1/T graph',
            type: 'arrhenius',
            activationEnergy: 75,
            defaultOptions: {
                title: 'Arrhenius Equation',
                showGraph: true,
                showEquation: true,
                showActivationEnergy: true,
                showFrequencyFactor: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'maxwellBoltzmannDistribution': {
            name: 'Maxwell-Boltzmann Distribution',
            category: 'Kinetics',
            description: 'Molecular energy distribution',
            type: 'maxwell_boltzmann',
            temperature: 298,
            activationEnergy: 50,
            defaultOptions: {
                title: 'Maxwell-Boltzmann Distribution',
                showCurve: true,
                showActivationEnergy: true,
                showAreaAboveEa: true,
                showTemperatureEffect: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'catalystEffectDiagram': {
            name: 'Catalyst Effect on Activation Energy',
            category: 'Kinetics',
            description: 'Lowering activation energy',
            type: 'catalyst_effect',
            defaultOptions: {
                title: 'Effect of Catalyst',
                showUncatalyzed: true,
                showCatalyzed: true,
                showActivationEnergyDifference: true,
                showEnthalpyUnchanged: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reactionMechanismDiagram': {
            name: 'Reaction Mechanism Diagram',
            category: 'Kinetics',
            description: 'Multi-step reaction pathway',
            type: 'reaction_mechanism',
            steps: 2,
            defaultOptions: {
                title: 'Reaction Mechanism',
                showIntermediates: true,
                showTransitionStates: true,
                showRateDeterminingStep: true,
                showEnergyProfile: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'halfLifeDiagram': {
            name: 'Half-Life Diagram',
            category: 'Kinetics',
            description: 'First-order half-life',
            type: 'half_life',
            initialConcentration: 100,
            halfLife: 10,
            defaultOptions: {
                title: 'Half-Life',
                showConcentrationCurve: true,
                showHalfLives: true,
                showConstantHalfLife: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== KINETICS APPARATUS DIAGRAMS =====
        'clockReactionApparatus': {
            name: 'Clock Reaction (Iodine Clock)',
            category: 'Kinetics',
            description: 'Visual timing of reaction completion',
            type: 'apparatus_diagram',
            apparatusType: 'clock_reaction',
            reaction: 'iodine_clock',
            defaultOptions: {
                title: 'Iodine Clock Reaction',
                showRealObject: true,
                showBeakers: true,
                showReactants: true,
                showColorChange: true,
                showStopwatch: true,
                showConcentrationEffect: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Time to color change (with concentration)',
                    constant: 'Amount of limiting reagent',
                    law: 'Rate ∝ [reactant]^n, time ∝ 1/rate'
                },
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gasSymringeApparatus': {
            name: 'Gas Syringe for Rate Measurement',
            category: 'Kinetics',
            description: 'Measuring gas production rate',
            type: 'apparatus_diagram',
            apparatusType: 'gas_syringe',
            reaction: 'CaCO3 + HCl',
            defaultOptions: {
                title: 'Gas Syringe - Rate Measurement',
                showRealObject: true,
                showConicalFlask: true,
                showReactants: true,
                showGasSyringe: true,
                showVolumeMarkings: true,
                showGasProduction: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Gas volume (with time)',
                    constant: 'Stoichiometry, limiting reagent',
                    law: 'Rate = ΔV/Δt, rate changes with concentration'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'colorimeterApparatus': {
            name: 'Colorimeter',
            category: 'Kinetics',
            description: 'Measuring concentration changes via absorbance',
            type: 'apparatus_diagram',
            apparatusType: 'colorimeter',
            solution: 'colored reactant',
            defaultOptions: {
                title: 'Colorimeter',
                showRealObject: true,
                showLightSource: true,
                showCuvette: true,
                showDetector: true,
                showAbsorbanceReading: true,
                showBeerLawGraph: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Absorbance (with concentration over time)',
                    constant: 'Path length, wavelength',
                    law: 'A = εcl (Beer-Lambert), concentration ∝ absorbance'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'continuousMonitoringApparatus': {
            name: 'Continuous Monitoring Setup',
            category: 'Kinetics',
            description: 'Measuring pH or conductivity over time',
            type: 'apparatus_diagram',
            apparatusType: 'continuous_monitoring',
            measurement: 'pH',
            defaultOptions: {
                title: 'Continuous Monitoring - pH',
                showRealObject: true,
                showBeaker: true,
                showProbe: true,
                showDataLogger: true,
                showGraph: true,
                showReaction: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'pH (or conductivity) with time',
                    constant: 'Temperature, volume',
                    law: 'Rate can be found from slope of property vs time'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. CHEMICAL EQUILIBRIUM =====
        'equilibriumDiagram': {
            name: 'Chemical Equilibrium Diagram',
            category: 'Equilibrium',
            description: 'Forward and reverse reaction rates',
            type: 'equilibrium',
            reaction: 'N2 + 3H2 ⇌ 2NH3',
            defaultOptions: {
                title: 'Chemical Equilibrium',
                showForwardRate: true,
                showReverseRate: true,
                showEquilibriumPoint: true,
                showConcentrations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        'equilibriumConstantDiagram': {
            name: 'Equilibrium Constant Expression',
            category: 'Equilibrium',
            description: 'Kc and Kp expressions',
            type: 'equilibrium_constant',
            reaction: 'aA + bB ⇌ cC + dD',
            defaultOptions: {
                title: 'Equilibrium Constant',
                showKcExpression: true,
                showKpExpression: true,
                showExample: true,
                showUnits: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'leChatellierPrincipleDiagram': {
            name: "Le Chatelier's Principle",
            category: 'Equilibrium',
            description: 'Response to stress on equilibrium',
            type: 'le_chatelier',
            stress: 'concentration',
            defaultOptions: {
                title: "Le Chatelier's Principle",
                showOriginalEquilibrium: true,
                showStress: true,
                showShift: true,
                showNewEquilibrium: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pressureEquilibriumDiagram': {
            name: 'Effect of Pressure on Equilibrium',
            category: 'Equilibrium',
            description: 'Gas equilibrium shift with pressure',
            type: 'pressure_equilibrium',
            reaction: 'N2 + 3H2 ⇌ 2NH3',
            defaultOptions: {
                title: 'Pressure Effect on Equilibrium',
                showLowPressure: true,
                showHighPressure: true,
                showMoleComparison: true,
                showShift: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'temperatureEquilibriumDiagram': {
            name: 'Effect of Temperature on Equilibrium',
            category: 'Equilibrium',
            description: 'Exothermic vs endothermic shifts',
            type: 'temperature_equilibrium',
            reactionType: 'exothermic',
            defaultOptions: {
                title: 'Temperature Effect on Equilibrium',
                showLowTemp: true,
                showHighTemp: true,
                showEnthalpyChange: true,
                showShift: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'equilibriumPositionGraph': {
            name: 'Equilibrium Position Graph',
            category: 'Equilibrium',
            description: 'Concentration changes reaching equilibrium',
            type: 'equilibrium_position',
            reaction: 'A ⇌ B',
            defaultOptions: {
                title: 'Reaching Equilibrium',
                showReactantCurve: true,
                showProductCurve: true,
                showEquilibriumLine: true,
                showRates: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'heterogeneousEquilibriumDiagram': {
            name: 'Heterogeneous Equilibrium',
            category: 'Equilibrium',
            description: 'Equilibrium with multiple phases',
            type: 'heterogeneous_equilibrium',
            reaction: 'CaCO3(s) ⇌ CaO(s) + CO2(g)',
            defaultOptions: {
                title: 'Heterogeneous Equilibrium',
                showSolids: true,
                showGases: true,
                showKpExpression: true,
                showPhaseLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== EQUILIBRIUM APPARATUS DIAGRAMS =====
        'equilibriumTubeApparatus': {
            name: 'Sealed Tube Equilibrium',
            category: 'Equilibrium',
            description: 'Observing equilibrium color changes',
            type: 'apparatus_diagram',
            apparatusType: 'equilibrium_tube',
            reaction: 'NO2 ⇌ N2O4',
            defaultOptions: {
                title: 'Equilibrium in Sealed Tube',
                showRealObject: true,
                showSealedTube: true,
                showColorChange: true,
                showTemperatureBath: true,
                showBefore: true,
                showAfter: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Color intensity (with temperature/pressure)',
                    constant: 'Total moles in closed system',
                    law: 'Le Chatelier: system shifts to oppose stress'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'haberProcessApparatus': {
            name: 'Haber Process Equilibrium',
            category: 'Equilibrium',
            description: 'Industrial ammonia synthesis',
            type: 'apparatus_diagram',
            apparatusType: 'haber_process',
            defaultOptions: {
                title: 'Haber Process',
                showRealObject: true,
                showReactor: true,
                showCatalyst: true,
                showPressure: true,
                showTemperature: true,
                showRecycling: true,
                showOptimalConditions: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Yield (with pressure, temperature, catalyst)',
                    constant: 'Kc (at given temperature)',
                    law: 'N₂ + 3H₂ ⇌ 2NH₃, compromise conditions for rate vs yield'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 8. ACIDS & BASES =====
        'phScaleDiagram': {
            name: 'pH Scale Diagram',
            category: 'Acids & Bases',
            description: 'pH 0-14 with common substances',
            type: 'ph_scale',
            defaultOptions: {
                title: 'pH Scale',
                showScale: true,
                showExamples: true,
                showColors: true,
                showHConcentration: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'acidBaseTheoriesDiagram': {
            name: 'Acid-Base Theories Comparison',
            category: 'Acids & Bases',
            description: 'Arrhenius, Bronsted-Lowry, Lewis',
            type: 'acid_base_theories',
            defaultOptions: {
                title: 'Acid-Base Theories',
                showArrhenius: true,
                showBronstedLowry: true,
                showLewis: true,
                showExamples: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'conjugateAcidBasePairs': {
            name: 'Conjugate Acid-Base Pairs',
            category: 'Acids & Bases',
            description: 'Related by proton transfer',
            type: 'conjugate_pairs',
            acid: 'HCl',
            base: 'NH3',
            defaultOptions: {
                title: 'Conjugate Acid-Base Pairs',
                showProtonTransfer: true,
                showForward: true,
                showReverse: true,
                showPairs: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'strongWeakAcidsDiagram': {
            name: 'Strong vs Weak Acids',
            category: 'Acids & Bases',
            description: 'Degree of dissociation comparison',
            type: 'strong_weak_acids',
            strongAcid: 'HCl',
            weakAcid: 'CH3COOH',
            defaultOptions: {
                title: 'Strong vs Weak Acids',
                showDissociation: true,
                showIons: true,
                showMolecules: true,
                showComparison: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bufferSolutionDiagram': {
            name: 'Buffer Solution Diagram',
            category: 'Acids & Bases',
            description: 'Resisting pH change',
            type: 'buffer_solution',
            buffer: 'CH3COOH/CH3COONa',
            defaultOptions: {
                title: 'Buffer Solution',
                showComponents: true,
                showAcidAddition: true,
                showBaseAddition: true,
                showpHStability: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'titrationCurveDiagram': {
            name: 'Titration Curve',
            category: 'Acids & Bases',
            description: 'pH vs volume of titrant',
            type: 'titration_curve',
            titration: 'strong_acid_strong_base',
            defaultOptions: {
                title: 'Titration Curve - Strong Acid/Strong Base',
                showCurve: true,
                showEquivalencePoint: true,
                showBufferRegion: false,
                showIndicatorRange: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'indicatorDiagram': {
            name: 'Acid-Base Indicators',
            category: 'Acids & Bases',
            description: 'Color change ranges',
            type: 'indicators',
            defaultOptions: {
                title: 'Acid-Base Indicators',
                showMultipleIndicators: true,
                showColorChanges: true,
                showpHRanges: true,
                showpKaValues: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'kaKbRelationship': {
            name: 'Ka and Kb Relationship',
            category: 'Acids & Bases',
            description: 'Acid-base constant relationship',
            type: 'ka_kb',
            conjugatePair: 'NH4+/NH3',
            defaultOptions: {
                title: 'Ka × Kb = Kw',
                showKaExpression: true,
                showKbExpression: true,
                showRelationship: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'saltHydrolysisDiagram': {
            name: 'Salt Hydrolysis',
            category: 'Acids & Bases',
            description: 'pH of salt solutions',
            type: 'salt_hydrolysis',
            salt: 'NH4Cl',
            defaultOptions: {
                title: 'Salt Hydrolysis',
                showIons: true,
                showWaterReaction: true,
                showpHEffect: true,
                showExplanation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ACIDS & BASES APPARATUS DIAGRAMS =====
        'titrationApparatus': {
            name: 'Titration Apparatus',
            category: 'Acids & Bases',
            description: 'Acid-base titration setup',
            type: 'apparatus_diagram',
            apparatusType: 'titration',
            acid: 'HCl',
            base: 'NaOH',
            indicator: 'phenolphthalein',
            defaultOptions: {
                title: 'Acid-Base Titration Setup',
                showRealObject: true,
                showBurette: true,
                showConicalFlask: true,
                showWhiteTile: true,
                showIndicator: true,
                showColorChange: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume added from burette, pH, color',
                    constant: 'Concentration ratio at equivalence',
                    law: 'n(acid) = n(base) at equivalence, M₁V₁ = M₂V₂'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'pHMeterApparatus': {
            name: 'pH Meter',
            category: 'Acids & Bases',
            description: 'Electronic pH measurement',
            type: 'apparatus_diagram',
            apparatusType: 'ph_meter',
            solution: 'unknown',
            defaultOptions: {
                title: 'pH Meter',
                showRealObject: true,
                showProbe: true,
                showDigitalDisplay: true,
                showBeaker: true,
                showSolution: true,
                showCalibration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'pH reading (with solution)',
                    constant: 'Kw = 1×10⁻¹⁴ at 25°C',
                    law: 'pH = -log[H⁺], pH + pOH = 14'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'universalIndicatorApparatus': {
            name: 'Universal Indicator',
            category: 'Acids & Bases',
            description: 'Color-based pH determination',
            type: 'apparatus_diagram',
            apparatusType: 'universal_indicator',
            defaultOptions: {
                title: 'Universal Indicator',
                showRealObject: true,
                showTestTubes: true,
                showColorChart: true,
                showpHValues: true,
                showSolutions: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Color (with pH)',
                    constant: 'Indicator transition ranges',
                    law: 'Each pH range shows specific color'
                },
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bufferPreparationApparatus': {
            name: 'Buffer Solution Preparation',
            category: 'Acids & Bases',
            description: 'Preparing buffer with specific pH',
            type: 'apparatus_diagram',
            apparatusType: 'buffer_preparation',
            weakAcid: 'CH3COOH',
            salt: 'CH3COONa',
            targetpH: 4.76,
            defaultOptions: {
                title: 'Buffer Preparation',
                showRealObject: true,
                showVolumetricFlask: true,
                showWeakAcid: true,
                showConjugateBase: true,
                showCalculations: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Ratio of acid to conjugate base',
                    constant: 'pKa of weak acid',
                    law: 'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 9. REDOX & ELECTROCHEMISTRY =====
        'oxidationStatesDiagram': {
            name: 'Oxidation States Assignment',
            category: 'Redox',
            description: 'Rules for assigning oxidation numbers',
            type: 'oxidation_states',
            compound: 'K2Cr2O7',
            defaultOptions: {
                title: 'Oxidation States',
                showCompound: true,
                showRules: true,
                showCalculation: true,
                showVerification: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'halfReactionDiagram': {
            name: 'Half-Reaction Method',
            category: 'Redox',
            description: 'Balancing redox by half-reactions',
            type: 'half_reactions',
            reaction: 'MnO4- + Fe2+ → Mn2+ + Fe3+',
            medium: 'acidic',
            defaultOptions: {
                title: 'Half-Reaction Method',
                showOxidationHalf: true,
                showReductionHalf: true,
                showBalancing: true,
                showOverall: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'electrochemicalSeriesDiagram': {
            name: 'Electrochemical Series',
            category: 'Redox',
            description: 'Standard electrode potentials',
            type: 'electrochemical_series',
            defaultOptions: {
                title: 'Electrochemical Series',
                showElectrodes: true,
                showPotentials: true,
                showReducingAgents: true,
                showOxidizingAgents: true,
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'galvanicCellDiagram': {
            name: 'Galvanic (Voltaic) Cell',
            category: 'Redox',
            description: 'Spontaneous cell producing electricity',
            type: 'galvanic_cell',
            anode: 'Zn',
            cathode: 'Cu',
            defaultOptions: {
                title: 'Galvanic Cell - Zn/Cu',
                showAnode: true,
                showCathode: true,
                showSaltBridge: true,
                showElectronFlow: true,
                showIonFlow: true,
                showVoltmeter: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'electrolyticCellDiagram': {
            name: 'Electrolytic Cell',
            category: 'Redox',
            description: 'Non-spontaneous cell requiring electricity',
            type: 'electrolytic_cell',
            electrolyte: 'molten NaCl',
            defaultOptions: {
                title: 'Electrolytic Cell',
                showAnode: true,
                showCathode: true,
                showBattery: true,
                showElectronFlow: true,
                showProducts: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'cellPotentialDiagram': {
            name: 'Cell Potential Calculation',
            category: 'Redox',
            description: 'E°cell = E°cathode - E°anode',
            type: 'cell_potential',
            cathode: {half: 'Cu2+ + 2e- → Cu', E: 0.34},
            anode: {half: 'Zn → Zn2+ + 2e-', E: -0.76},
            defaultOptions: {
                title: 'Cell Potential',
                showHalfCells: true,
                showPotentials: true,
                showCalculation: true,
                showSpontaneity: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nernstEquationDiagram': {
            name: 'Nernst Equation',
            category: 'Redox',
            description: 'Cell potential under non-standard conditions',
            type: 'nernst_equation',
            cell: 'Zn/Cu',
            defaultOptions: {
                title: 'Nernst Equation',
                showEquation: true,
                showStandardPotential: true,
                showConcentrationEffect: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'faradaysLawDiagram': {
            name: "Faraday's Laws of Electrolysis",
            category: 'Redox',
            description: 'Quantitative electrolysis',
            type: 'faradays_laws',
            defaultOptions: {
                title: "Faraday's Laws",
                showFirstLaw: true,
                showSecondLaw: true,
                showCalculations: true,
                showExample: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'corrosionDiagram': {
            name: 'Corrosion Mechanism',
            category: 'Redox',
            description: 'Rusting as electrochemical process',
            type: 'corrosion',
            metal: 'iron',
            defaultOptions: {
                title: 'Corrosion of Iron',
                showAnodeArea: true,
                showCathodeArea: true,
                showRustFormation: true,
                showConditions: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fuelCellDiagram': {
            name: 'Fuel Cell Diagram',
            category: 'Redox',
            description: 'Hydrogen-oxygen fuel cell',
            type: 'fuel_cell',
            fuelType: 'hydrogen',
            defaultOptions: {
                title: 'Hydrogen Fuel Cell',
                showAnode: true,
                showCathode: true,
                showElectrolyte: true,
                showReactions: true,
                showProducts: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'batteryDiagram': {
            name: 'Battery Diagram',
            category: 'Redox',
            description: 'Rechargeable battery operation',
            type: 'battery',
            batteryType: 'lead-acid',
            defaultOptions: {
                title: 'Lead-Acid Battery',
                showDischarging: true,
                showCharging: true,
                showReactions: true,
                showElectrodes: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== REDOX APPARATUS DIAGRAMS =====
        'daniellCellApparatus': {
            name: 'Daniell Cell',
            category: 'Redox',
            description: 'Classic Zn-Cu galvanic cell',
            type: 'apparatus_diagram',
            apparatusType: 'daniell_cell',
            defaultOptions: {
                title: 'Daniell Cell',
                showRealObject: true,
                showZnElectrode: true,
                showCuElectrode: true,
                showZnSO4Solution: true,
                showCuSO4Solution: true,
                showSaltBridge: true,
                showVoltmeter: true,
                showElectronFlow: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Electrode masses, ion concentrations, voltage',
                    constant: 'E°cell (under standard conditions)',
                    law: 'E°cell = E°cathode - E°anode = 1.10V, ΔG = -nFE'
                },
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'copperElectroplatingApparatus': {
            name: 'Copper Electroplating',
            category: 'Redox',
            description: 'Depositing copper onto object',
            type: 'apparatus_diagram',
            apparatusType: 'electroplating',
            metal: 'copper',
            defaultOptions: {
                title: 'Copper Electroplating',
                showRealObject: true,
                showCopperAnode: true,
                showObjectCathode: true,
                showCuSO4Solution: true,
                showBattery: true,
                showCopperDeposition: true,
                showCurrentFlow: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Mass of copper deposited, anode mass',
                    constant: 'Current, time, copper ion charge',
                    law: 'Q = It, m = (Q × M)/(n × F) (Faraday\'s law)'
                },
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'chlorAlkaliCellApparatus': {
            name: 'Chlor-Alkali Cell',
            category: 'Redox',
            description: 'Industrial electrolysis of brine',
            type: 'apparatus_diagram',
            apparatusType: 'chlor_alkali',
            defaultOptions: {
                title: 'Chlor-Alkali Cell',
                showRealObject: true,
                showBrineSolution: true,
                showAnode: true,
                showCathode: true,
                showMembrane: true,
                showCl2Production: true,
                showH2Production: true,
                showNaOHProduction: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Products formed (Cl₂, H₂, NaOH)',
                    constant: 'Applied voltage, electrode reactions',
                    law: 'Anode: 2Cl⁻ → Cl₂ + 2e⁻, Cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻'
                },
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'redoxTitrationApparatus': {
            name: 'Redox Titration Setup',
            category: 'Redox',
            description: 'Manganate(VII) titration',
            type: 'apparatus_diagram',
            apparatusType: 'redox_titration',
            oxidizingAgent: 'KMnO4',
            reducingAgent: 'Fe2+',
            defaultOptions: {
                title: 'Redox Titration - Manganate(VII)',
                showRealObject: true,
                showBurette: true,
                showConicalFlask: true,
                showPurpleColor: true,
                showEndpoint: true,
                showSelfIndicating: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Color (purple to colorless), volume added',
                    constant: 'Mole ratio MnO₄⁻ : Fe²⁺',
                    law: 'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O, n₁/n₂ = stoichiometric ratio'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 10. ORGANIC CHEMISTRY =====
        'homologousSeriesDiagram': {
            name: 'Homologous Series',
            category: 'Organic Chemistry',
            description: 'Alkanes, alkenes, alcohols, etc.',
            type: 'homologous_series',
            series: 'alkanes',
            defaultOptions: {
                title: 'Homologous Series - Alkanes',
                showMembers: true,
                showGeneralFormula: true,
                showTrends: true,
                showStructures: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'structuralIsomersDiagram': {
            name: 'Structural Isomers',
            category: 'Organic Chemistry',
            description: 'Same molecular formula, different structures',
            type: 'structural_isomers',
            molecularFormula: 'C4H10',
            defaultOptions: {
                title: 'Structural Isomers - C₄H₁₀',
                showAllIsomers: true,
                showNaming: true,
                showDifferences: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stereoisomersDiagram': {
            name: 'Stereoisomers',
            category: 'Organic Chemistry',
            description: 'Geometric and optical isomers',
            type: 'stereoisomers',
            isomerType: 'geometric',
            defaultOptions: {
                title: 'Stereoisomers',
                showCisTransIsomers: true,
                showOpticalIsomers: false,
                show3DStructures: true,
                showDifferences: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'functionalGroupsDiagram': {
            name: 'Functional Groups',
            category: 'Organic Chemistry',
            description: 'Common organic functional groups',
            type: 'functional_groups',
            defaultOptions: {
                title: 'Organic Functional Groups',
                showAlcohol: true,
                showCarboxylicAcid: true,
                showAldehyde: true,
                showKetone: true,
                showEster: true,
                showAmine: true,
                showAmide: true,
                width: 1100,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'reactionMechanismOrganic': {
            name: 'Organic Reaction Mechanism',
            category: 'Organic Chemistry',
            description: 'Curly arrow mechanism',
            type: 'organic_mechanism',
            reactionType: 'nucleophilic_substitution',
            defaultOptions: {
                title: 'Nucleophilic Substitution Mechanism',
                showCurlyArrows: true,
                showIntermediates: true,
                showProducts: true,
                showCharges: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'additionReactionDiagram': {
            name: 'Addition Reaction',
            category: 'Organic Chemistry',
            description: 'Electrophilic addition to alkenes',
            type: 'addition_reaction',
            alkene: 'ethene',
            reagent: 'HBr',
            defaultOptions: {
                title: 'Electrophilic Addition',
                showDoubleBond: true,
                showReagent: true,
                showMechanism: true,
                showProduct: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'substitutionReactionDiagram': {
            name: 'Substitution Reaction',
            category: 'Organic Chemistry',
            description: 'Nucleophilic or electrophilic substitution',
            type: 'substitution_reaction',
            substrate: 'haloalkane',
            nucleophile: 'OH-',
            defaultOptions: {
                title: 'Nucleophilic Substitution',
                showSubstrate: true,
                showNucleophile: true,
                showMechanism: true,
                showProduct: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'eliminationReactionDiagram': {
            name: 'Elimination Reaction',
            category: 'Organic Chemistry',
            description: 'Forming double bonds',
            type: 'elimination_reaction',
            substrate: 'bromoethane',
            base: 'OH-',
            defaultOptions: {
                title: 'Elimination Reaction',
                showSubstrate: true,
                showBase: true,
                showMechanism: true,
                showAlkeneProduct: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        'polymerizationDiagram': {
            name: 'Polymerization Diagram',
            category: 'Organic Chemistry',
            description: 'Addition and condensation polymers',
            type: 'polymerization',
            polymerType: 'addition',
            monomer: 'ethene',
            defaultOptions: {
                title: 'Addition Polymerization',
                showMonomer: true,
                showRepeatingUnit: true,
                showPolymer: true,
                showConditions: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'aromaticStructureDiagram': {
            name: 'Aromatic Structure - Benzene',
            category: 'Organic Chemistry',
            description: 'Resonance and delocalization',
            type: 'aromatic_structure',
            compound: 'benzene',
            defaultOptions: {
                title: 'Benzene Structure',
                showResonanceStructures: true,
                showDelocalizedModel: true,
                showBondLengths: true,
                showStability: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'esterificationDiagram': {
            name: 'Esterification Reaction',
            category: 'Organic Chemistry',
            description: 'Forming esters from acids and alcohols',
            type: 'esterification',
            acid: 'ethanoic acid',
            alcohol: 'ethanol',
            defaultOptions: {
                title: 'Esterification',
                showAcid: true,
                showAlcohol: true,
                showEster: true,
                showWater: true,
                showCatalyst: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chirality Diagram': {
            name: 'Chirality and Optical Isomers',
            category: 'Organic Chemistry',
            description: 'Enantiomers and chiral centers',
            type: 'chirality',
            molecule: 'lactic acid',
            defaultOptions: {
                title: 'Optical Isomers',
                showChiralCenter: true,
                showEnantiomers: true,
                showMirrorPlane: true,
                showRotation: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ORGANIC CHEMISTRY APPARATUS DIAGRAMS =====
        'distillationApparatus': {
            name: 'Distillation Apparatus',
            category: 'Organic Chemistry',
            description: 'Separating liquids by boiling point',
            type: 'apparatus_diagram',
            apparatusType: 'distillation',
            mixture: 'ethanol-water',
            defaultOptions: {
                title: 'Simple Distillation',
                showRealObject: true,
                showRoundBottomFlask: true,
                showThermometer: true,
                showCondenser: true,
                showReceivingFlask: true,
                showWaterFlow: true,
                showHeating: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature (increases), distillate composition',
                    constant: 'Boiling points of components',
                    law: 'Component with lower BP distills first'
                },
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'fractionalDistillationApparatus': {
            name: 'Fractional Distillation',
            category: 'Organic Chemistry',
            description: 'Separating close boiling point liquids',
            type: 'apparatus_diagram',
            apparatusType: 'fractional_distillation',
            mixture: 'crude oil',
            defaultOptions: {
                title: 'Fractional Distillation',
                showRealObject: true,
                showColumn: true,
                showFractionatingColumn: true,
                showMultipleFractions: true,
                showTemperatureGradient: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature up column, fraction collected',
                    constant: 'BP differences between fractions',
                    law: 'Repeated vaporization-condensation separates by BP'
                },
                width: 800,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'refluxApparatus': {
            name: 'Reflux Apparatus',
            category: 'Organic Chemistry',
            description: 'Heating reaction mixture without loss',
            type: 'apparatus_diagram',
            apparatusType: 'reflux',
            reaction: 'esterification',
            defaultOptions: {
                title: 'Reflux Setup',
                showRealObject: true,
                showRoundBottomFlask: true,
                showCondenser: true,
                showAntiCrushGravel: true,
                showHeating: true,
                showVaporCondensation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Reaction progress (with time)',
                    constant: 'Total amount of reactants (no loss)',
                    law: 'Vapors condense and return - allows prolonged heating'
                },
                width: 700,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'separatingFunnelApparatus': {
            name: 'Separating Funnel',
            category: 'Organic Chemistry',
            description: 'Separating immiscible liquids',
            type: 'apparatus_diagram',
            apparatusType: 'separating_funnel',
            mixture: 'organic-aqueous',
            defaultOptions: {
                title: 'Separating Funnel',
                showRealObject: true,
                showFunnel: true,
                showLayers: true,
                showTap: true,
                showStopper: true,
                showDensityDifference: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Layer separation (by density)',
                    constant: 'Immiscibility of layers',
                    law: 'Denser layer settles below, tap to drain separately'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'recrystallizationApparatus': {
            name: 'Recrystallization',
            category: 'Organic Chemistry',
            description: 'Purifying solid organic compounds',
            type: 'apparatus_diagram',
            apparatusType: 'recrystallization',
            compound: 'benzoic acid',
            defaultOptions: {
                title: 'Recrystallization',
                showRealObject: true,
                showHeating: true,
                showFiltration: true,
                showCooling: true,
                showCrystals: true,
                showSuctionFiltration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solubility (with temperature)',
                    constant: 'Compound identity',
                    law: 'Hot solvent dissolves, cooling crystallizes pure product'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'meltingPointApparatus': {
            name: 'Melting Point Apparatus',
            category: 'Organic Chemistry',
            description: 'Determining purity and identity',
            type: 'apparatus_diagram',
            apparatusType: 'melting_point',
            compound: 'unknown',
            defaultOptions: {
                title: 'Melting Point Determination',
                showRealObject: true,
                showCapillaryTube: true,
                showSample: true,
                showOilBath: true,
                showThermometer: true,
                showHeating: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature, sample state (solid to liquid)',
                    constant: 'Pure compound melting point (sharp)',
                    law: 'Pure substance: sharp MP, Impure: range/lower MP'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'chromatographyApparatus': {
            name: 'Thin Layer Chromatography (TLC)',
            category: 'Organic Chemistry',
            description: 'Separating and identifying compounds',
            type: 'apparatus_diagram',
            apparatusType: 'tlc',
            sample: 'mixture',
            defaultOptions: {
                title: 'Thin Layer Chromatography',
                showRealObject: true,
                showTLCPlate: true,
                showSolventFront: true,
                showSpots: true,
                showDevelopingChamber: true,
                showRfCalculation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Spot position (with polarity)',
                    constant: 'Rf value (for given compound/solvent)',
                    law: 'Rf = distance moved by compound / distance moved by solvent'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 11. ANALYTICAL CHEMISTRY =====
        'massSpectrumDiagram': {
            name: 'Mass Spectrum',
            category: 'Analytical Chemistry',
            description: 'Mass-to-charge ratio peaks',
            type: 'mass_spectrum',
            compound: 'ethanol',
            defaultOptions: {
                title: 'Mass Spectrum - Ethanol',
                showPeaks: true,
                showMolecularIon: true,
                showFragmentation: true,
                showInterpretation: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'infraredSpectrumDiagram': {
            name: 'Infrared Spectrum',
            category: 'Analytical Chemistry',
            description: 'IR absorption identifying functional groups',
            type: 'ir_spectrum',
            compound: 'ethanol',
            defaultOptions: {
                title: 'IR Spectrum - Ethanol',
                showSpectrum: true,
                showCharacteristicPeaks: true,
                showFunctionalGroups: true,
                showWavenumbers: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nmrSpectrumDiagram': {
            name: 'NMR Spectrum',
            category: 'Analytical Chemistry',
            description: 'Nuclear magnetic resonance',
            type: 'nmr_spectrum',
            nucleusType: '1H',
            compound: 'ethanol',
            defaultOptions: {
                title: '¹H NMR Spectrum - Ethanol',
                showSpectrum: true,
                showChemicalShifts: true,
                showSplitting: true,
                showIntegration: true,
                showAssignment: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'uvVisSpectrumDiagram': {
            name: 'UV-Visible Spectrum',
            category: 'Analytical Chemistry',
            description: 'Electronic transitions and conjugation',
            type: 'uv_vis_spectrum',
            compound: 'beta-carotene',
            defaultOptions: {
                title: 'UV-Vis Spectrum',
                showAbsorptionCurve: true,
                showLambdaMax: true,
                showBeerLaw: true,
                showConjugation: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chromatogramDiagram': {
            name: 'Gas Chromatogram',
            category: 'Analytical Chemistry',
            description: 'GC separation and analysis',
            type: 'chromatogram',
            sample: 'mixture',
            defaultOptions: {
                title: 'Gas Chromatogram',
                showPeaks: true,
                showRetentionTimes: true,
                showBaseline: true,
                showIntegration: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'emissionSpectrumAnalytical': {
            name: 'Atomic Emission Spectrum',
            category: 'Analytical Chemistry',
            description: 'Element identification by emission',
            type: 'emission_spectrum_analytical',
            element: 'sodium',
            defaultOptions: {
                title: 'Atomic Emission - Sodium',
                showSpectralLines: true,
                showWavelengths: true,
                showEnergyLevels: true,
                showApplications: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'absorptionSpectrumDiagram': {
            name: 'Atomic Absorption Spectrum',
            category: 'Analytical Chemistry',
            description: 'Element quantification by absorption',
            type: 'absorption_spectrum',
            element: 'copper',
            defaultOptions: {
                title: 'Atomic Absorption',
                showContinuousSpectrum: true,
                showAbsorptionLines: true,
                showCalibrationCurve: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ANALYTICAL CHEMISTRY APPARATUS DIAGRAMS =====
        'spectrophotometerApparatus': {
            name: 'Spectrophotometer (UV-Vis)',
            category: 'Analytical Chemistry',
            description: 'Measuring absorbance for concentration',
            type: 'apparatus_diagram',
            apparatusType: 'spectrophotometer',
            sample: 'colored solution',
            defaultOptions: {
                title: 'UV-Vis Spectrophotometer',
                showRealObject: true,
                showLightSource: true,
                showMonochromator: true,
                showSampleCuvette: true,
                showDetector: true,
                showDisplay: true,
                showLightPath: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Absorbance (with concentration)',
                    constant: 'Path length, wavelength, extinction coefficient',
                    law: 'A = εcl (Beer-Lambert Law)'
                },
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gcmsApparatus': {
            name: 'Gas Chromatography-Mass Spectrometry',
            category: 'Analytical Chemistry',
            description: 'Separating and identifying compounds',
            type: 'apparatus_diagram',
            apparatusType: 'gcms',
            sample: 'complex mixture',
            defaultOptions: {
                title: 'GC-MS',
                showRealObject: true,
                showInjector: true,
                showColumn: true,
                showOven: true,
                showMassSpectrometer: true,
                showDetector: true,
                showChromatogram: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Retention time (compound identity), mass spectrum',
                    constant: 'Column temperature, flow rate',
                    law: 'Each compound: unique RT + mass spectrum = ID'
                },
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'hplcApparatus': {
            name: 'High Performance Liquid Chromatography',
            category: 'Analytical Chemistry',
            description: 'Liquid phase separation',
            type: 'apparatus_diagram',
            apparatusType: 'hplc',
            sample: 'mixture',
            defaultOptions: {
                title: 'HPLC',
                showRealObject: true,
                showPump: true,
                showInjector: true,
                showColumn: true,
                showDetector: true,
                showChromatogram: true,
                showMobilePhase: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Elution time (with compound polarity)',
                    constant: 'Column packing, mobile phase composition',
                    law: 'Different polarities → different retention times'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'atomicAbsorptionApparatus': {
            name: 'Atomic Absorption Spectroscopy (AAS)',
            category: 'Analytical Chemistry',
            description: 'Quantifying metal ions',
            type: 'apparatus_diagram',
            apparatusType: 'aas',
            element: 'copper',
            defaultOptions: {
                title: 'Atomic Absorption Spectroscopy',
                showRealObject: true,
                showHollowCathodeLamp: true,
                showFlame: true,
                showMonochromator: true,
                showDetector: true,
                showCalibration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Absorbance (with metal concentration)',
                    constant: 'Wavelength (element-specific)',
                    law: 'A ∝ concentration, calibration curve for quantification'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'irSpectrometerApparatus': {
            name: 'IR Spectrometer (FTIR)',
            category: 'Analytical Chemistry',
            description: 'Identifying functional groups',
            type: 'apparatus_diagram',
            apparatusType: 'ftir',
            sample: 'organic compound',
            defaultOptions: {
                title: 'FTIR Spectrometer',
                showRealObject: true,
                showIRSource: true,
                showInterferometer: true,
                showSampleHolder: true,
                showDetector: true,
                showSpectrum: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Absorption peaks (with functional groups)',
                    constant: 'Characteristic wavenumbers for bonds',
                    law: 'Each bond absorbs at characteristic frequency'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nmrSpectrometerApparatus': {
            name: 'NMR Spectrometer',
            category: 'Analytical Chemistry',
            description: 'Determining molecular structure',
            type: 'apparatus_diagram',
            apparatusType: 'nmr',
            sample: 'organic compound',
            defaultOptions: {
                title: 'NMR Spectrometer',
                showRealObject: true,
                showMagnet: true,
                showSampleTube: true,
                showRFTransmitter: true,
                showDetector: true,
                showSpectrum: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Chemical shifts, splitting patterns',
                    constant: 'Applied magnetic field, nucleus type',
                    law: 'Chemical environment → shift, neighboring protons → splitting'
                },
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 12. INORGANIC CHEMISTRY =====
        'periodicTrendsDiagram': {
            name: 'Periodic Table Trends',
            category: 'Inorganic Chemistry',
            description: 'Trends across periods and groups',
            type: 'periodic_trends',
            trend: 'electronegativity',
            defaultOptions: {
                title: 'Electronegativity Trends',
                showPeriodicTable: true,
                showArrows: true,
                showValues: true,
                showExplanation: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'transitionMetalComplexDiagram': {
            name: 'Transition Metal Complex',
            category: 'Inorganic Chemistry',
            description: 'Coordination compound structure',
            type: 'coordination_complex',
            complex: '[Cu(NH3)4(H2O)2]2+',
            defaultOptions: {
                title: 'Coordination Complex',
                showCentralIon: true,
                showLigands: true,
                showGeometry: true,
                showCoordinationNumber: true,
                showOxidationState: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'crystalFieldTheoryDiagram': {
            name: 'Crystal Field Theory',
            category: 'Inorganic Chemistry',
            description: 'd-orbital splitting in complexes',
            type: 'crystal_field_theory',
            geometry: 'octahedral',
            defaultOptions: {
                title: 'Crystal Field Splitting - Octahedral',
                showFreeIon: true,
                showSplitting: true,
                showElectronFilling: true,
                showDeltaO: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ligandFieldColorDiagram': {
            name: 'Color in Transition Metal Complexes',
            category: 'Inorganic Chemistry',
            description: 'd-d transitions and color',
            type: 'ligand_field_color',
            complex: '[Ti(H2O)6]3+',
            defaultOptions: {
                title: 'Color from d-d Transitions',
                showEnergySplitting: true,
                showTransition: true,
                showAbsorbedColor: true,
                showObservedColor: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'isomerismComplexesDiagram': {
            name: 'Isomerism in Coordination Complexes',
            category: 'Inorganic Chemistry',
            description: 'Geometric and optical isomers',
            type: 'complex_isomerism',
            complex: '[Pt(NH3)2Cl2]',
            defaultOptions: {
                title: 'Isomerism in Complexes',
                showCisIsomer: true,
                showTransIsomer: true,
                showOpticalIsomers: false,
                showDifferences: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hardSoftAcidBaseDiagram': {
            name: 'Hard-Soft Acid-Base Theory',
            category: 'Inorganic Chemistry',
            description: 'HSAB principle for complexes',
            type: 'hsab_theory',
            defaultOptions: {
                title: 'HSAB Theory',
                showHardAcids: true,
                showSoftAcids: true,
                showHardBases: true,
                showSoftBases: true,
                showPreferences: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'solubilityProductDiagram': {
            name: 'Solubility Product (Ksp)',
            category: 'Inorganic Chemistry',
            description: 'Sparingly soluble salt equilibrium',
            type: 'solubility_product',
            salt: 'AgCl',
            defaultOptions: {
                title: 'Solubility Product',
                showSolid: true,
                showIons: true,
                showEquilibrium: true,
                showKspExpression: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'commonIonEffectDiagram': {
            name: 'Common Ion Effect',
            category: 'Inorganic Chemistry',
            description: 'Reduced solubility with common ion',
            type: 'common_ion_effect',
            salt: 'AgCl',
            commonIonSource: 'NaCl',
            defaultOptions: {
                title: 'Common Ion Effect',
                showOriginalEquilibrium: true,
                showCommonIonAddition: true,
                showShift: true,
                showPrecipitation: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'borneHaberInorganicDiagram': {
            name: 'Born-Haber Cycle (Detailed)',
            category: 'Inorganic Chemistry',
            description: 'All energy steps for ionic compound',
            type: 'born_haber_detailed',
            compound: 'MgO',
            defaultOptions: {
                title: 'Born-Haber Cycle - MgO',
                showAtomization: true,
                showIonization: true,
                showElectronAffinity: true,
                showLatticeEnergy: true,
                showFormation: true,
                width: 1000,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        // ===== INORGANIC CHEMISTRY APPARATUS DIAGRAMS =====
        'qualitativeAnalysisApparatus': {
            name: 'Qualitative Analysis - Cation Tests',
            category: 'Inorganic Chemistry',
            description: 'Systematic identification of metal ions',
            type: 'apparatus_diagram',
            apparatusType: 'qualitative_analysis',
            cations: ['Cu2+', 'Fe3+', 'Al3+'],
            defaultOptions: {
                title: 'Qualitative Analysis Setup',
                showRealObject: true,
                showTestTubes: true,
                showReagents: true,
                showPrecipitates: true,
                showColorChanges: true,
                showFlowchart: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Precipitate color, solution color',
                    constant: 'Ion-reagent reactions (specific)',
                    law: 'Each ion gives characteristic reaction/color'
                },
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'anionTestsApparatus': {
            name: 'Anion Tests',
            category: 'Inorganic Chemistry',
            description: 'Identifying negative ions',
            type: 'apparatus_diagram',
            apparatusType: 'anion_tests',
            anions: ['Cl-', 'SO4²-', 'CO3²-'],
            defaultOptions: {
                title: 'Anion Identification Tests',
                showRealObject: true,
                showTestTubes: true,
                showReagents: true,
                showResults: true,
                showGasTests: true,
                showPrecipitateTests: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Gas produced, precipitate formed',
                    constant: 'Specific reagent for each anion',
                    law: 'AgNO₃ for halides, BaCl₂ for sulfate, acid for carbonate'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'contactProcessApparatus': {
            name: 'Contact Process (Sulfuric Acid)',
            category: 'Inorganic Chemistry',
            description: 'Industrial H₂SO₄ production',
            type: 'apparatus_diagram',
            apparatusType: 'contact_process',
            defaultOptions: {
                title: 'Contact Process',
                showRealObject: true,
                showSulfurBurner: true,
                showConverter: true,
                showAbsorptionTower: true,
                showCatalyst: true,
                showOptimumConditions: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'SO₂ → SO₃ conversion (with T, P, catalyst)',
                    constant: 'Equilibrium position (at given conditions)',
                    law: '2SO₂ + O₂ ⇌ 2SO₃, compromise: 450°C, V₂O₅ catalyst'
                },
                width: 1100,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 13. PHYSICAL CHEMISTRY ADDITIONAL =====
        'rateTemperatureDiagram': {
            name: 'Rate vs Temperature',
            category: 'Physical Chemistry',
            description: 'Temperature effect on reaction rate',
            type: 'rate_temperature',
            defaultOptions: {
                title: 'Effect of Temperature on Rate',
                showGraph: true,
                showExponential: true,
                showActivationEnergy: true,
                showQ10Rule: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'partitionCoefficientDiagram': {
            name: 'Partition Coefficient',
            category: 'Physical Chemistry',
            description: 'Solute distribution between solvents',
            type: 'partition_coefficient',
            solute: 'iodine',
            solvents: ['water', 'hexane'],
            defaultOptions: {
                title: 'Partition Coefficient',
                showSeparatingFunnel: true,
                showLayers: true,
                showConcentrations: true,
                showKd: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },
        'colligativePropertiesDiagram': {
            name: 'Colligative Properties',
            category: 'Physical Chemistry',
            description: 'Boiling point elevation, freezing point depression',
            type: 'colligative_properties',
            property: 'boiling_point_elevation',
            defaultOptions: {
                title: 'Colligative Properties',
                showPureSolvent: true,
                showSolution: true,
                showComparison: true,
                showEquations: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'osmosisDiagram': {
            name: 'Osmosis and Osmotic Pressure',
            category: 'Physical Chemistry',
            description: 'Solvent flow through semipermeable membrane',
            type: 'osmosis',
            defaultOptions: {
                title: 'Osmosis',
                showMembrane: true,
                showSolventFlow: true,
                showPressure: true,
                showConcentrations: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'phaseDiagramWater': {
            name: 'Phase Diagram - Water',
            category: 'Physical Chemistry',
            description: 'P-T diagram with triple point',
            type: 'phase_diagram_water',
            defaultOptions: {
                title: 'Phase Diagram - Water',
                showSolidRegion: true,
                showLiquidRegion: true,
                showGasRegion: true,
                showTriplePoint: true,
                showCriticalPoint: true,
                showPhaseTransitions: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'adsorptionIsothermDiagram': {
            name: 'Adsorption Isotherm',
            category: 'Physical Chemistry',
            description: 'Gas adsorption on solid surface',
            type: 'adsorption_isotherm',
            isothermType: 'Langmuir',
            defaultOptions: {
                title: 'Langmuir Adsorption Isotherm',
                showGraph: true,
                showSaturation: true,
                showEquation: true,
                showMechanism: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== PHYSICAL CHEMISTRY APPARATUS DIAGRAMS =====
        'osmometerApparatus': {
            name: 'Osmometer',
            category: 'Physical Chemistry',
            description: 'Measuring osmotic pressure',
            type: 'apparatus_diagram',
            apparatusType: 'osmometer',
            solution: 'sugar solution',
            defaultOptions: {
                title: 'Osmometer',
                showRealObject: true,
                showSemipermeableMembrane: true,
                showPureSolvent: true,
                showSolution: true,
                showPressureHeight: true,
                showEquilibrium: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Height difference (osmotic pressure)',
                    constant: 'Membrane permeability, temperature',
                    law: 'π = MRT (van\'t Hoff equation)'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'adsorptionColumnApparatus': {
            name: 'Adsorption Column',
            category: 'Physical Chemistry',
            description: 'Chromatography using adsorption',
            type: 'apparatus_diagram',
            apparatusType: 'adsorption_column',
            adsorbent: 'alumina',
            defaultOptions: {
                title: 'Column Chromatography',
                showRealObject: true,
                showColumn: true,
                showAdsorbent: true,
                showSampleBands: true,
                showElution: true,
                showSeparation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Band position (with polarity)',
                    constant: 'Adsorbent affinity, solvent polarity',
                    law: 'Different affinities → different elution rates'
                },
                width: 600,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'conductivityCellApparatus': {
            name: 'Conductivity Cell',
            category: 'Physical Chemistry',
            description: 'Measuring solution conductivity',
            type: 'apparatus_diagram',
            apparatusType: 'conductivity_cell',
            solution: 'electrolyte',
            defaultOptions: {
                title: 'Conductivity Measurement',
                showRealObject: true,
                showElectrodes: true,
                showSolution: true,
                showConductivityMeter: true,
                showIons: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Conductivity (with concentration, ion mobility)',
                    constant: 'Cell constant, temperature',
                    law: 'κ = G × cell constant, Λm = κ/c'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 14. ENVIRONMENTAL CHEMISTRY =====
        'greenhouseEffectDiagram': {
            name: 'Greenhouse Effect',
            category: 'Environmental Chemistry',
            description: 'IR radiation trapping by gases',
            type: 'greenhouse_effect',
            defaultOptions: {
                title: 'Greenhouse Effect',
                showSunlight: true,
                showAtmosphere: true,
                showReflection: true,
                showTrapping: true,
                showGreenhouseGases: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ozoneDepletionDiagram': {
            name: 'Ozone Layer Depletion',
            category: 'Environmental Chemistry',
            description: 'CFCs destroying ozone',
            type: 'ozone_depletion',
            defaultOptions: {
                title: 'Ozone Depletion',
                showOzoneLayer: true,
                showCFCs: true,
                showChainReaction: true,
                showUVProtection: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'acidRainDiagram': {
            name: 'Acid Rain Formation',
            category: 'Environmental Chemistry',
            description: 'SO₂ and NO₂ forming acids',
            type: 'acid_rain',
            defaultOptions: {
                title: 'Acid Rain',
                showEmissions: true,
                showAtmosphericReactions: true,
                showPrecipitation: true,
                showEffects: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'carbonCycleDiagram': {
            name: 'Carbon Cycle',
            category: 'Environmental Chemistry',
            description: 'Natural carbon flow',
            type: 'carbon_cycle',
            defaultOptions: {
                title: 'Carbon Cycle',
                showAtmosphere: true,
                showPhotosynthesis: true,
                showRespiration: true,
                showFossilFuels: true,
                showOceans: true,
                width: 1100,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'nitrogenCycleDiagram': {
            name: 'Nitrogen Cycle',
            category: 'Environmental Chemistry',
            description: 'Nitrogen transformations in nature',
            type: 'nitrogen_cycle',
            defaultOptions: {
                title: 'Nitrogen Cycle',
                showNitrogenFixation: true,
                showNitrification: true,
                showDenitrification: true,
                showAssimilation: true,
                width: 1100,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'waterPollutionDiagram': {
            name: 'Water Pollution Types',
            category: 'Environmental Chemistry',
            description: 'Sources and effects of water pollution',
            type: 'water_pollution',
            defaultOptions: {
                title: 'Water Pollution',
                showPointSources: true,
                showNonPointSources: true,
                showPollutantTypes: true,
                showEffects: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 15. BIOCHEMISTRY =====
        'aminoAcidStructureDiagram': {
            name: 'Amino Acid Structure',
            category: 'Biochemistry',
            description: 'General structure and zwitterion',
            type: 'amino_acid',
            aminoAcid: 'glycine',
            defaultOptions: {
                title: 'Amino Acid Structure',
                showGeneralStructure: true,
                showZwitterion: true,
                showpHEffect: true,
                showRGroups: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'peptideBondDiagram': {
            name: 'Peptide Bond Formation',
            category: 'Biochemistry',
            description: 'Condensation forming peptide bond',
            type: 'peptide_bond',
            defaultOptions: {
                title: 'Peptide Bond Formation',
                showAminoAcids: true,
                showCondensation: true,
                showWaterLoss: true,
                showPeptideBond: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'proteinStructureLevelsDiagram': {
            name: 'Protein Structure Levels',
            category: 'Biochemistry',
            description: 'Primary, secondary, tertiary, quaternary',
            type: 'protein_structure',
            defaultOptions: {
                title: 'Protein Structure Levels',
                showPrimary: true,
                showSecondary: true,
                showTertiary: true,
                showQuaternary: true,
                width: 1100,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'enzymeActionDiagram': {
            name: 'Enzyme-Substrate Complex',
            category: 'Biochemistry',
            description: 'Lock and key / induced fit',
            type: 'enzyme_action',
            model: 'induced_fit',
            defaultOptions: {
                title: 'Enzyme Action',
                showEnzyme: true,
                showSubstrate: true,
                showESComplex: true,
                showProducts: true,
                showActiveSite: true,
                width: 1100,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dnaStructureDiagram': {
            name: 'DNA Double Helix',
            category: 'Biochemistry',
            description: 'DNA structure and base pairing',
            type: 'dna_structure',
            defaultOptions: {
                title: 'DNA Structure',
                showDoubleHelix: true,
                showBasePairs: true,
                showSugarPhosphateBackbone: true,
                showComplementarity: true,
                width: 900,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'carbohydrateStructureDiagram': {
            name: 'Carbohydrate Structures',
            category: 'Biochemistry',
            description: 'Monosaccharides to polysaccharides',
            type: 'carbohydrate_structure',
            carbohydrate: 'glucose',
            defaultOptions: {
                title: 'Carbohydrate Structures',
                showLinear: true,
                showRing: true,
                showPolysaccharide: true,
                showGlycosidicBond: true,
                width: 1100,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'lipidStructureDiagram': {
            name: 'Lipid Structure',
            category: 'Biochemistry',
            description: 'Triglycerides and phospholipids',
            type: 'lipid_structure',
            lipidType: 'triglyceride',
            defaultOptions: {
                title: 'Lipid Structure',
                showGlycerol: true,
                showFattyAcids: true,
                showEsterBonds: true,
                showPhospholipid: false,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },
        // ===== 16. LABORATORY CHEMISTRY =====
        
        // ===== SOLVE-AS-YOU-DRAW DIAGRAMS =====
        
        'laboratoryGlasswareDiagram': {
            name: 'Laboratory Glassware Identification',
            category: 'Laboratory Chemistry',
            description: 'Common lab equipment and their uses',
            type: 'laboratory_glassware',
            defaultOptions: {
                title: 'Laboratory Glassware',
                showBeakers: true,
                showFlasks: true,
                showPipettes: true,
                showBurettes: true,
                showMeasuringCylinders: true,
                showLabels: true,
                showUses: true,
                width: 1200,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'dilutionCalculationDiagram': {
            name: 'Dilution Calculation Diagram',
            category: 'Laboratory Chemistry',
            description: 'M₁V₁ = M₂V₂ visual representation',
            type: 'dilution_calculation',
            initialConcentration: 1.0,
            initialVolume: 10,
            finalVolume: 100,
            defaultOptions: {
                title: 'Dilution Calculation',
                showInitialSolution: true,
                showFinalSolution: true,
                showWaterAddition: true,
                showCalculation: true,
                showEquation: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'standardSolutionPreparation': {
            name: 'Standard Solution Preparation',
            category: 'Laboratory Chemistry',
            description: 'Steps to prepare solution of known concentration',
            type: 'standard_solution',
            solute: 'NaCl',
            concentration: 0.1,
            volume: 250,
            defaultOptions: {
                title: 'Standard Solution Preparation',
                showWeighing: true,
                showDissolution: true,
                showTransfer: true,
                showDilution: true,
                showCalculations: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'serialDilutionDiagram': {
            name: 'Serial Dilution Diagram',
            category: 'Laboratory Chemistry',
            description: 'Stepwise dilution for concentration series',
            type: 'serial_dilution',
            dilutionFactor: 10,
            numberOfSteps: 5,
            defaultOptions: {
                title: 'Serial Dilution',
                showAllSteps: true,
                showConcentrations: true,
                showTransfers: true,
                showCalculations: true,
                width: 1200,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pipetteTechniqueDiagram': {
            name: 'Pipette Technique',
            category: 'Laboratory Chemistry',
            description: 'Correct pipetting procedure',
            type: 'pipette_technique',
            pipetteType: 'volumetric',
            defaultOptions: {
                title: 'Pipette Technique',
                showFilling: true,
                showMeniscusReading: true,
                showDelivery: true,
                showDraining: true,
                showCommonErrors: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'filtrationMethodsDiagram': {
            name: 'Filtration Methods',
            category: 'Laboratory Chemistry',
            description: 'Gravity, vacuum, and hot filtration',
            type: 'filtration_methods',
            defaultOptions: {
                title: 'Filtration Methods',
                showGravityFiltration: true,
                showVacuumFiltration: true,
                showHotFiltration: true,
                showApplications: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'dryingMethodsDiagram': {
            name: 'Drying Methods',
            category: 'Laboratory Chemistry',
            description: 'Oven, desiccator, and drying agents',
            type: 'drying_methods',
            defaultOptions: {
                title: 'Drying Methods',
                showOvenDrying: true,
                showDesiccator: true,
                showDryingAgents: true,
                showApplications: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'heatingMethodsDiagram': {
            name: 'Heating Methods',
            category: 'Laboratory Chemistry',
            description: 'Bunsen burner, hot plate, water bath, oil bath',
            type: 'heating_methods',
            defaultOptions: {
                title: 'Heating Methods',
                showBunsenBurner: true,
                showHotPlate: true,
                showWaterBath: true,
                showOilBath: true,
                showSafetyNotes: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'laboratoryErrorsDiagram': {
            name: 'Types of Laboratory Errors',
            category: 'Laboratory Chemistry',
            description: 'Systematic vs random errors',
            type: 'laboratory_errors',
            defaultOptions: {
                title: 'Laboratory Errors',
                showSystematicErrors: true,
                showRandomErrors: true,
                showExamples: true,
                showMinimization: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'significantFiguresDiagram': {
            name: 'Significant Figures in Measurements',
            category: 'Laboratory Chemistry',
            description: 'Rules and calculations',
            type: 'significant_figures',
            defaultOptions: {
                title: 'Significant Figures',
                showRules: true,
                showExamples: true,
                showCalculations: true,
                showRounding: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'calibrationCurveDiagram': {
            name: 'Calibration Curve',
            category: 'Laboratory Chemistry',
            description: 'Standard curve for unknown determination',
            type: 'calibration_curve',
            defaultOptions: {
                title: 'Calibration Curve',
                showStandards: true,
                showCurve: true,
                showUnknown: true,
                showInterpolation: true,
                showR2Value: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'laboratoryWasteDisposalDiagram': {
            name: 'Laboratory Waste Disposal',
            category: 'Laboratory Chemistry',
            description: 'Proper disposal of chemical waste',
            type: 'waste_disposal',
            defaultOptions: {
                title: 'Waste Disposal',
                showWasteCategories: true,
                showContainers: true,
                showProcedures: true,
                showSafety: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'safetyEquipmentDiagram': {
            name: 'Laboratory Safety Equipment',
            category: 'Laboratory Chemistry',
            description: 'Safety goggles, gloves, fume hood, etc.',
            type: 'safety_equipment',
            defaultOptions: {
                title: 'Laboratory Safety Equipment',
                showPPE: true,
                showEmergencyEquipment: true,
                showFumeHood: true,
                showSafetyShower: true,
                showEyeWash: true,
                width: 1100,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== LABORATORY APPARATUS DIAGRAMS (Read-as-you-draw) =====

        'buretteApparatus': {
            name: 'Burette Setup and Reading',
            category: 'Laboratory Chemistry',
            description: 'Precise volume delivery for titrations',
            type: 'apparatus_diagram',
            apparatusType: 'burette',
            defaultOptions: {
                title: 'Burette',
                showRealObject: true,
                showBurette: true,
                showGraduations: true,
                showMeniscus: true,
                showTap: true,
                showStand: true,
                showReadingTechnique: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume delivered (difference between readings)',
                    constant: 'Graduation precision (typically ±0.05 mL)',
                    law: 'Read at eye level, bottom of meniscus, V_delivered = V_final - V_initial'
                },
                width: 600,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'pipetteApparatus': {
            name: 'Pipette (Volumetric and Graduated)',
            category: 'Laboratory Chemistry',
            description: 'Accurate volume transfer',
            type: 'apparatus_diagram',
            apparatusType: 'pipette',
            pipetteType: 'volumetric',
            volume: 25,
            defaultOptions: {
                title: 'Volumetric Pipette',
                showRealObject: true,
                showPipette: true,
                showCalibrationMark: true,
                showPipetteFiller: true,
                showFillingTechnique: true,
                showDeliveryTechnique: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume transferred (fixed for volumetric)',
                    constant: 'Calibrated volume (e.g., 25.00 mL)',
                    law: 'Fill to mark, deliver completely, accuracy ±0.03 mL'
                },
                width: 600,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'volumetricFlaskDetailedApparatus': {
            name: 'Volumetric Flask - Detailed Use',
            category: 'Laboratory Chemistry',
            description: 'Preparing exact volume solutions',
            type: 'apparatus_diagram',
            apparatusType: 'volumetric_flask_detailed',
            volume: 250,
            defaultOptions: {
                title: 'Volumetric Flask',
                showRealObject: true,
                showFlask: true,
                showCalibrationLine: true,
                showStopper: true,
                showFillingProcedure: true,
                showMixingTechnique: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solution concentration (c = n/V)',
                    constant: 'Flask volume (precisely calibrated)',
                    law: 'Fill to mark at eye level, temperature-dependent volume'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'beakerApparatus': {
            name: 'Beaker - Uses and Limitations',
            category: 'Laboratory Chemistry',
            description: 'General purpose container',
            type: 'apparatus_diagram',
            apparatusType: 'beaker',
            volume: 250,
            defaultOptions: {
                title: 'Beaker',
                showRealObject: true,
                showBeaker: true,
                showGraduations: true,
                showStirringRod: true,
                showPourSpout: true,
                showLimitations: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Approximate volume (not precise)',
                    constant: 'Shape, general purpose use',
                    law: 'NOT for accurate measurement (±5% error), use for mixing/heating'
                },
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'conicalFlaskApparatus': {
            name: 'Conical (Erlenmeyer) Flask',
            category: 'Laboratory Chemistry',
            description: 'Ideal for titrations and swirling',
            type: 'apparatus_diagram',
            apparatusType: 'conical_flask',
            volume: 250,
            defaultOptions: {
                title: 'Conical Flask',
                showRealObject: true,
                showFlask: true,
                showShape: true,
                showSwirlingAction: true,
                showTitrationUse: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Contents being mixed/reacted',
                    constant: 'Conical shape prevents splashing',
                    law: 'Wide base for stability, narrow top reduces evaporation'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'measuringCylinderDetailedApparatus': {
            name: 'Measuring Cylinder - Detailed',
            category: 'Laboratory Chemistry',
            description: 'Medium precision volume measurement',
            type: 'apparatus_diagram',
            apparatusType: 'measuring_cylinder_detailed',
            volume: 100,
            defaultOptions: {
                title: 'Measuring Cylinder',
                showRealObject: true,
                showCylinder: true,
                showGraduations: true,
                showMeniscus: true,
                showReadingPosition: true,
                showAccuracy: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume measured',
                    constant: 'Graduation precision (±1 mL for 100 mL)',
                    law: 'Read at bottom of meniscus, more accurate than beaker, less than pipette'
                },
                width: 600,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'roundBottomFlaskApparatus': {
            name: 'Round-Bottom Flask',
            category: 'Laboratory Chemistry',
            description: 'Heating and distillation vessel',
            type: 'apparatus_diagram',
            apparatusType: 'round_bottom_flask',
            volume: 250,
            defaultOptions: {
                title: 'Round-Bottom Flask',
                showRealObject: true,
                showFlask: true,
                showNecks: true,
                showClampPosition: true,
                showHeatingSetup: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature, reaction progress',
                    constant: 'Round shape for even heating',
                    law: 'Never heat when empty, use with clamp/heating mantle'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'watchGlassApparatus': {
            name: 'Watch Glass',
            category: 'Laboratory Chemistry',
            description: 'Evaporation and covering beakers',
            type: 'apparatus_diagram',
            apparatusType: 'watch_glass',
            defaultOptions: {
                title: 'Watch Glass',
                showRealObject: true,
                showWatchGlass: true,
                showEvaporationUse: true,
                showCoveringUse: true,
                showWeighingUse: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solution evaporation, contents',
                    constant: 'Concave shape, glass material',
                    law: 'Used for evaporation, covering, weighing solids'
                },
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'crucibleApparatus': {
            name: 'Crucible and Lid',
            category: 'Laboratory Chemistry',
            description: 'High temperature heating vessel',
            type: 'apparatus_diagram',
            apparatusType: 'crucible',
            material: 'porcelain',
            defaultOptions: {
                title: 'Crucible',
                showRealObject: true,
                showCrucible: true,
                showLid: true,
                showPipeclayTriangle: true,
                showHeating: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Mass (before/after heating), temperature',
                    constant: 'Heat resistance, crucible mass (when empty)',
                    law: 'Use for high-temp heating, mass determination by difference'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'evaporatingDishApparatus': {
            name: 'Evaporating Dish',
            category: 'Laboratory Chemistry',
            description: 'Evaporating solutions to dryness',
            type: 'apparatus_diagram',
            apparatusType: 'evaporating_dish',
            defaultOptions: {
                title: 'Evaporating Dish',
                showRealObject: true,
                showDish: true,
                showHeatingSetup: true,
                showEvaporation: true,
                showCrystallization: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solvent mass (evaporates), solute crystallizes',
                    constant: 'Dish mass, wide surface area',
                    law: 'Large surface area for faster evaporation'
                },
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'funnelapparatus': {
            name: 'Funnel (Powder and Filter)',
            category: 'Laboratory Chemistry',
            description: 'Transferring liquids and filtration',
            type: 'apparatus_diagram',
            apparatusType: 'funnel',
            funnelType: 'filter',
            defaultOptions: {
                title: 'Funnel',
                showRealObject: true,
                showPowderFunnel: true,
                showFilterFunnel: true,
                showFilterPaper: true,
                showFolding: true,
                showFiltration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume transferred, solid-liquid separation',
                    constant: 'Funnel angle, stem diameter',
                    law: 'Powder funnel: wide stem, Filter funnel: holds filter paper'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },
        'buchnerFunnelApparatus': {
            name: 'Buchner Funnel (Vacuum Filtration)',
            category: 'Laboratory Chemistry',
            description: 'Fast filtration under reduced pressure',
            type: 'apparatus_diagram',
            apparatusType: 'buchner_funnel',
            defaultOptions: {
                title: 'Buchner Funnel',
                showRealObject: true,
                showBuchnerFunnel: true,
                showFilterPaper: true,
                showSideArmFlask: true,
                showVacuumConnection: true,
                showRubberAdapter: true,
                showFiltration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Filtrate collected, solid on filter',
                    constant: 'Vacuum pressure, filter paper size',
                    law: 'Vacuum speeds filtration, solid remains dry'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'desiccatorApparatus': {
            name: 'Desiccator',
            category: 'Laboratory Chemistry',
            description: 'Drying and storing hygroscopic substances',
            type: 'apparatus_diagram',
            apparatusType: 'desiccator',
            desiccant: 'silica gel',
            defaultOptions: {
                title: 'Desiccator',
                showRealObject: true,
                showDesiccator: true,
                showDesiccant: true,
                showPerforatedPlate: true,
                showSample: true,
                showGreasedRim: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Sample moisture content (decreases)',
                    constant: 'Desiccant absorption capacity',
                    law: 'Desiccant removes moisture, maintain dry atmosphere'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'mortar PestleApparatus': {
            name: 'Mortar and Pestle',
            category: 'Laboratory Chemistry',
            description: 'Grinding solids to powder',
            type: 'apparatus_diagram',
            apparatusType: 'mortar_pestle',
            material: 'porcelain',
            defaultOptions: {
                title: 'Mortar and Pestle',
                showRealObject: true,
                showMortar: true,
                showPestle: true,
                showGrindingAction: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Particle size (decreases), surface area (increases)',
                    constant: 'Total mass of solid',
                    law: 'Increases surface area for faster dissolution/reaction'
                },
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'spatulaApparatus': {
            name: 'Spatula',
            category: 'Laboratory Chemistry',
            description: 'Transferring solid chemicals',
            type: 'apparatus_diagram',
            apparatusType: 'spatula',
            defaultOptions: {
                title: 'Spatula',
                showRealObject: true,
                showSpatula: true,
                showTransferTechnique: true,
                showTypes: true,
                showCleaning: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solid transferred',
                    constant: 'Spatula cleanliness (avoid contamination)',
                    law: 'Clean between uses, never use wet spatula'
                },
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stirringRodApparatus': {
            name: 'Glass Stirring Rod',
            category: 'Laboratory Chemistry',
            description: 'Mixing and transferring liquids',
            type: 'apparatus_diagram',
            apparatusType: 'stirring_rod',
            defaultOptions: {
                title: 'Stirring Rod',
                showRealObject: true,
                showRod: true,
                showStirringTechnique: true,
                showPouringAid: true,
                showDecantation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solution homogeneity (increases with stirring)',
                    constant: 'Rod material (glass), inert nature',
                    law: 'Prevents splashing, aids controlled pouring'
                },
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'thermometerApparatus': {
            name: 'Laboratory Thermometer',
            category: 'Laboratory Chemistry',
            description: 'Temperature measurement',
            type: 'apparatus_diagram',
            apparatusType: 'thermometer',
            range: '-10 to 110°C',
            defaultOptions: {
                title: 'Laboratory Thermometer',
                showRealObject: true,
                showThermometer: true,
                showScale: true,
                showBulb: true,
                showReadingTechnique: true,
                showCalibration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature reading',
                    constant: 'Calibration, scale divisions',
                    law: 'Read at eye level, allow equilibration, ±0.5°C accuracy'
                },
                width: 600,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'dropperApparatus': {
            name: 'Dropper (Teat Pipette)',
            category: 'Laboratory Chemistry',
            description: 'Adding small volumes dropwise',
            type: 'apparatus_diagram',
            apparatusType: 'dropper',
            defaultOptions: {
                title: 'Dropper',
                showRealObject: true,
                showDropper: true,
                showBulb: true,
                showTip: true,
                showDropwiseAddition: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume added (approximate drops)',
                    constant: 'Drop size (≈0.05 mL), imprecise measurement',
                    law: 'For adding small amounts, NOT for accurate measurement'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'testTubeApparatus': {
            name: 'Test Tube and Holder',
            category: 'Laboratory Chemistry',
            description: 'Small-scale reactions and tests',
            type: 'apparatus_diagram',
            apparatusType: 'test_tube',
            defaultOptions: {
                title: 'Test Tube',
                showRealObject: true,
                showTestTube: true,
                showHolder: true,
                showRack: true,
                showHeatingTechnique: true,
                showSafetyNotes: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Reaction contents, temperature',
                    constant: 'Small scale (few mL), cylindrical shape',
                    law: 'Heat gently at angle, point away from people'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'boilingTubeApparatus': {
            name: 'Boiling Tube',
            category: 'Laboratory Chemistry',
            description: 'Larger test tube for heating',
            type: 'apparatus_diagram',
            apparatusType: 'boiling_tube',
            defaultOptions: {
                title: 'Boiling Tube',
                showRealObject: true,
                showBoilingTube: true,
                showComparison: true,
                showHeating: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Contents volume, temperature',
                    constant: 'Larger than test tube, thicker glass',
                    law: 'For reactions requiring heating, more robust'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'retortStandApparatus': {
            name: 'Retort Stand and Clamps',
            category: 'Laboratory Chemistry',
            description: 'Supporting apparatus safely',
            type: 'apparatus_diagram',
            apparatusType: 'retort_stand',
            defaultOptions: {
                title: 'Retort Stand',
                showRealObject: true,
                showStand: true,
                showBossHead: true,
                showClamp: true,
                showRing: true,
                showSetupExamples: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Height and position of clamps',
                    constant: 'Stability, heavy base',
                    law: 'Essential for safe support of glassware'
                },
                width: 800,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'tripodApparatus': {
            name: 'Tripod and Wire Gauze',
            category: 'Laboratory Chemistry',
            description: 'Supporting vessels for heating',
            type: 'apparatus_diagram',
            apparatusType: 'tripod',
            defaultOptions: {
                title: 'Tripod and Wire Gauze',
                showRealObject: true,
                showTripod: true,
                showWireGauze: true,
                showBunsenBurner: true,
                showHeatingSetup: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature of vessel above',
                    constant: 'Tripod stability, gauze distribution of heat',
                    law: 'Gauze spreads heat evenly, prevents cracking'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'bunsenBurnerApparatus': {
            name: 'Bunsen Burner',
            category: 'Laboratory Chemistry',
            description: 'Adjustable flame heating source',
            type: 'apparatus_diagram',
            apparatusType: 'bunsen_burner',
            defaultOptions: {
                title: 'Bunsen Burner',
                showRealObject: true,
                showBurner: true,
                showAirHole: true,
                showGasControl: true,
                showFlameTypes: true,
                showSafetyProcedure: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Flame type (yellow/safety vs blue/roaring)',
                    constant: 'Gas source, burner design',
                    law: 'Open air hole → blue flame (hotter), closed → yellow (safer)'
                },
                width: 700,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'hotPlateApparatus': {
            name: 'Hot Plate with Stirrer',
            category: 'Laboratory Chemistry',
            description: 'Electric heating and magnetic stirring',
            type: 'apparatus_diagram',
            apparatusType: 'hot_plate',
            defaultOptions: {
                title: 'Hot Plate',
                showRealObject: true,
                showHotPlate: true,
                showTemperatureControl: true,
                showStirBar: true,
                showStirringFunction: true,
                showSafety: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature, stirring speed',
                    constant: 'Electric heating, precise control',
                    law: 'Safer than open flame, allows simultaneous stirring'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'waterBathApparatus': {
            name: 'Water Bath',
            category: 'Laboratory Chemistry',
            description: 'Gentle controlled heating',
            type: 'apparatus_diagram',
            apparatusType: 'water_bath',
            temperature: 60,
            defaultOptions: {
                title: 'Water Bath',
                showRealObject: true,
                showBath: true,
                showWater: true,
                showThermometer: true,
                showVesselSupport: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Bath temperature, reaction temperature',
                    constant: 'Maximum temp ~100°C, even heating',
                    law:'Gentle uniform heating, max temp limited by water BP'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'oilBathApparatus': {
            name: 'Oil Bath',
            category: 'Laboratory Chemistry',
            description: 'High temperature controlled heating',
            type: 'apparatus_diagram',
            apparatusType: 'oil_bath',
            temperature: 150,
            defaultOptions: {
                title: 'Oil Bath',
                showRealObject: true,
                showBath: true,
                showOil: true,
                showThermometer: true,
                showHeatingSource: true,
                showSafety: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Bath temperature (up to 200°C+)',
                    constant: 'Oil type (mineral/silicone), even heating',
                    law: 'Higher temps than water bath, fire risk if overheated'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'heatingMantleApparatus': {
            name: 'Heating Mantle',
            category: 'Laboratory Chemistry',
            description: 'Electric heating for round-bottom flasks',
            type: 'apparatus_diagram',
            apparatusType: 'heating_mantle',
            defaultOptions: {
                title: 'Heating Mantle',
                showRealObject: true,
                showMantle: true,
                showFlask: true,
                showVariac: true,
                showInsulation: true,
                showSafety: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature (with variac control)',
                    constant: 'Shaped to fit flask, electric heating',
                    law: 'No open flame, precise temp control, fits flask snugly'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'condenserApparatus': {
            name: 'Condenser (Liebig, Graham, Allihn)',
            category: 'Laboratory Chemistry',
            description: 'Cooling vapors back to liquid',
            type: 'apparatus_diagram',
            apparatusType: 'condenser',
            condenserType: 'liebig',
            defaultOptions: {
                title: 'Liebig Condenser',
                showRealObject: true,
                showCondenser: true,
                showWaterJacket: true,
                showWaterFlow: true,
                showVaporPath: true,
                showTypes: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Vapor → liquid condensation',
                    constant: 'Water in (bottom), water out (top)',
                    law: 'Cold water in at bottom (countercurrent flow), vapors condense'
                },
                width: 900,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'separatoryFunnelDetailedApparatus': {
            name: 'Separatory Funnel - Detailed Technique',
            category: 'Laboratory Chemistry',
            description: 'Liquid-liquid extraction technique',
            type: 'apparatus_diagram',
            apparatusType: 'separatory_funnel_detailed',
            defaultOptions: {
                title: 'Separatory Funnel Technique',
                showRealObject: true,
                showFunnel: true,
                showStopcock: true,
                showStopper: true,
                showShakingTechnique: true,
                showVenting: true,
                showLayerSeparation: true,
                showDraining: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solute distribution (between layers)',
                    constant: 'Partition coefficient, density difference',
                    law: 'Shake with venting, allow layers to separate, drain lower layer first'
                },
                width: 900,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'aspiratorApparatus': {
            name: 'Aspirator (Water Pump)',
            category: 'Laboratory Chemistry',
            description: 'Creating vacuum using water flow',
            type: 'apparatus_diagram',
            apparatusType: 'aspirator',
            defaultOptions: {
                title: 'Water Aspirator',
                showRealObject: true,
                showAspirator: true,
                showWaterFlow: true,
                showVacuumConnection: true,
                showTrap: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Vacuum pressure (with water flow rate)',
                    constant: 'Venturi effect principle',
                    law: 'Fast water flow creates vacuum (Venturi), use trap to prevent backflow'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'vaccumPumpApparatus': {
            name: 'Vacuum Pump',
            category: 'Laboratory Chemistry',
            description: 'Mechanical vacuum for filtration/evaporation',
            type: 'apparatus_diagram',
            apparatusType: 'vacuum_pump',
            defaultOptions: {
                title: 'Vacuum Pump',
                showRealObject: true,
                showPump: true,
                showTrap: true,
                showConnections: true,
                showApplications: true,
                showSafety: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'System pressure (decreases)',
                    constant: 'Pump capacity, vacuum level achieved',
                    law: 'Creates lower pressure than aspirator, always use cold trap'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'rotaryEvaporatorApparatus': {
            name: 'Rotary Evaporator (Rotovap)',
            category: 'Laboratory Chemistry',
            description: 'Removing solvent under reduced pressure',
            type: 'apparatus_diagram',
            apparatusType: 'rotary_evaporator',
            defaultOptions: {
                title: 'Rotary Evaporator',
                showRealObject: true,
                showRotatingFlask: true,
                showWaterBath: true,
                showCondenser: true,
                showReceivingFlask: true,
                showVacuum: true,
                showRotation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solvent evaporation (under vacuum), concentration',
                    constant: 'Reduced pressure lowers BP, rotation increases surface area',
                    law: 'Vacuum + rotation + heat = fast gentle evaporation'
                },
                width: 1000,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'soxhletExtractorApparatus': {
            name: 'Soxhlet Extractor',
            category: 'Laboratory Chemistry',
            description: 'Continuous solid-liquid extraction',
            type: 'apparatus_diagram',
            apparatusType: 'soxhlet',
            defaultOptions: {
                title: 'Soxhlet Extractor',
                showRealObject: true,
                showExtractor: true,
                showThimble: true,
                showCondenser: true,
                showSolventFlask: true,
                showSiphon: true,
                showCycle: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Extract concentration (increases with cycles)',
                    constant: 'Solvent recycling, continuous extraction',
                    law: 'Solvent refluxes, extracts solid, siphons back - continuous cycle'
                },
                width: 800,
                height: 1100,
                backgroundColor: '#ffffff'
            }
        },

        'fumeHoodApparatus': {
            name: 'Fume Hood (Fume Cupboard)',
            category: 'Laboratory Chemistry',
            description: 'Ventilated enclosure for hazardous work',
            type: 'apparatus_diagram',
            apparatusType: 'fume_hood',
            defaultOptions: {
                title: 'Fume Hood',
                showRealObject: true,
                showHood: true,
                showSash: true,
                showAirflow: true,
                showWorkArea: true,
                showSafetyFeatures: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Airflow (when sash moves), fume removal',
                    constant: 'Ventilation system, protective barrier',
                    law: 'Work 6 inches inside, sash as low as possible, airflow removes fumes'
                },
                width: 1000,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'laboratoryBalanceApparatus': {
            name: 'Laboratory Balance (Analytical)',
            category: 'Laboratory Chemistry',
            description: 'Precise mass measurement',
            type: 'apparatus_diagram',
            apparatusType: 'analytical_balance',
            precision: '±0.0001 g',
            defaultOptions: {
                title: 'Analytical Balance',
                showRealObject: true,
                showBalance: true,
                showDraftShield: true,
                showWeighingPan: true,
                showCalibration: true,
                showTechnique: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Mass reading (to 0.0001 g)',
                    constant: 'Calibration, sensitivity to air currents',
                    law: 'Tare before use, close draft shield, allow temperature equilibration'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'pHProbeApparatus': {
            name: 'pH Probe and Electrode',
            category: 'Laboratory Chemistry',
            description: 'Glass electrode for pH measurement',
            type: 'apparatus_diagram',
            apparatusType: 'ph_probe',
            defaultOptions: {
                title: 'pH Probe',
                showRealObject: true,
                showProbe: true,
                showGlassMembrane: true,
                showReferenceElectrode: true,
                showStorageSolution: true,
                showCalibration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Voltage (with H⁺ concentration)',
                    constant: 'Nernst equation relationship, glass membrane',
                    law: 'Calibrate with buffers (pH 4, 7, 10), rinse between samples'
                },
                width: 700,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'centrifugeApparatus': {
            name: 'Centrifuge',
            category: 'Laboratory Chemistry',
            description: 'Separating by centrifugal force',
            type: 'apparatus_diagram',
            apparatusType: 'centrifuge',
            defaultOptions: {
                title: 'Centrifuge',
                showRealObject: true,
                showCentrifuge: true,
                showRotor: true,
                showTubes: true,
                showBalancing: true,
                showPellet: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Separation of phases (by density)',
                    constant: 'Centrifugal force = mω²r',
                    law: 'Must balance tubes, speed in RPM, denser material pellets'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'autoclaveApparatus': {
            name: 'Autoclave',
            category: 'Laboratory Chemistry',
            description: 'High pressure steam sterilization',
            type: 'apparatus_diagram',
            apparatusType: 'autoclave',
            defaultOptions: {
                title: 'Autoclave',
                showRealObject: true,
                showChamber: true,
                showPressureGauge: true,
                showSteam: true,
                showSafety: true,
                showCycle: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature, pressure (121°C, 15 psi)',
                    constant: 'Sterilization time (15-20 min)',
                    law: 'High pressure steam kills microorganisms, autoclave tape indicator'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'microPipetteApparatus': {
            name: 'Micropipette (Adjustable)',
            category: 'Laboratory Chemistry',
            description: 'Precise small volume transfer (μL)',
            type: 'apparatus_diagram',
            apparatusType: 'micropipette',
            range: '10-100 μL',
            defaultOptions: {
                title: 'Micropipette',
                showRealObject: true,
                showPipette: true,
                showPlunger: true,
                showVolumeAdjuster: true,
                showTip: true,
                showTechnique: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume set (adjustable), volume transferred',
                    constant: 'Precision (±1-2%), technique critical',
                    law: 'First stop = set volume, second stop = blow out, use appropriate tip'
                },
                width: 700,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'vortexMixerApparatus': {
            name: 'Vortex Mixer',
            category: 'Laboratory Chemistry',
            description: 'Rapid mixing of small volumes',
            type: 'apparatus_diagram',
            apparatusType: 'vortex_mixer',
            defaultOptions: {
                title: 'Vortex Mixer',
                showRealObject: true,
                showMixer: true,
                showCup: true,
                showVortexMotion: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Mixing speed, vortex formation',
                    constant: 'Oscillating motion principle',
                    law: 'Rapid mixing in test tubes, touch or continuous mode'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'magneticStirrerApparatus': {
            name: 'Magnetic Stirrer and Stir Bar',
            category: 'Laboratory Chemistry',
            description: 'Continuous stirring with rotating magnet',
            type: 'apparatus_diagram',
            apparatusType: 'magnetic_stirrer',
            defaultOptions: {
                title: 'Magnetic Stirrer',
                showRealObject: true,
                showStirrer: true,
                showStirBar: true,
                showRotatingField: true,
                showFlask: true,
                showSpeedControl: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Stirring speed, solution homogeneity',
                    constant: 'Magnetic coupling, stir bar size',
                    law: 'Rotating magnet drives stir bar, avoid too fast (decoupling)'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'glassElectrodeApparatus': {
            name: 'Glass Electrode Storage and Care',
            category: 'Laboratory Chemistry',
            description: 'Proper maintenance of pH electrode',
            type: 'apparatus_diagram',
            apparatusType: 'glass_electrode_care',
            defaultOptions: {
                title: 'Glass Electrode Care',
                showRealObject: true,
                showElectrode: true,
                showStorageSolution: true,
                showHydration: true,
                showCleaning: true,
                showCalibration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Electrode condition (must stay hydrated)',
                    constant: 'Glass membrane properties',
                    law: 'Store in KCl solution, never let dry, calibrate regularly'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'labNotebookApparatus': {
            name: 'Laboratory Notebook Practices',
            category: 'Laboratory Chemistry',
            description: 'Recording experimental data properly',
            type: 'apparatus_diagram',
            apparatusType: 'lab_notebook',
            defaultOptions: {
                title: 'Laboratory Notebook',
                showRealObject: true,
                showNotebook: true,
                showDataEntry: true,
                showObservations: true,
                showCalculations: true,
                showBestPractices: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Experimental data recorded',
                    constant: 'Permanent record, ink only, dated',
                    law: 'Write in ink, date all entries, record all observations immediately'
                },
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // Additional safety and technique apparatus

        'safetyShowerApparatus': {
            name: 'Safety Shower and Eye Wash',
            category: 'Laboratory Chemistry',
            description: 'Emergency washing stations',
            type: 'apparatus_diagram',
            apparatusType: 'safety_shower',
            defaultOptions: {
                title: 'Safety Shower',
                showRealObject: true,
                showShower: true,
                showEyeWash: true,
                showActivation: true,
                showProcedure: true,
                showMaintenance: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Use in emergency (chemical splash)',
                    constant: 'Location (accessible), water flow',
                    law: 'Rinse for 15+ minutes, remove contaminated clothing'
                },
                width: 800,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },
        'fireExtinguisherApparatus': {
            name: 'Fire Extinguisher (Types)',
            category: 'Laboratory Chemistry',
            description: 'Correct extinguisher for fire type',
            type: 'apparatus_diagram',
            apparatusType: 'fire_extinguisher',
            defaultOptions: {
                title: 'Fire Extinguisher',
                showRealObject: true,
                showExtinguisher: true,
                showFireClasses: true,
                showPASSMethod: true,
                showTypes: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Fire type (A, B, C, D)',
                    constant: 'PASS method: Pull, Aim, Squeeze, Sweep',
                    law: 'CO₂ for electrical, dry chemical for most, never water on oil/electrical'
                },
                width: 900,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'fireBlanketApparatus': {
            name: 'Fire Blanket',
            category: 'Laboratory Chemistry',
            description: 'Smothering clothing fires',
            type: 'apparatus_diagram',
            apparatusType: 'fire_blanket',
            defaultOptions: {
                title: 'Fire Blanket',
                showRealObject: true,
                showBlanket: true,
                showStorage: true,
                showUsage: true,
                showProcedure: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Emergency use (person on fire)',
                    constant: 'Smothers flames (removes oxygen)',
                    law: 'Stop, drop, wrap in blanket, roll to smother flames'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'spillKitApparatus': {
            name: 'Chemical Spill Kit',
            category: 'Laboratory Chemistry',
            description: 'Containing and cleaning chemical spills',
            type: 'apparatus_diagram',
            apparatusType: 'spill_kit',
            defaultOptions: {
                title: 'Spill Kit',
                showRealObject: true,
                showKit: true,
                showAbsorbent: true,
                showNeutralizingAgents: true,
                showPPE: true,
                showProcedure: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Spill containment and cleanup',
                    constant: 'Kit components, safety protocol',
                    law: 'Alert others, contain, absorb, neutralize (if safe), dispose properly'
                },
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'ppeKitApparatus': {
            name: 'Personal Protective Equipment (PPE)',
            category: 'Laboratory Chemistry',
            description: 'Complete PPE for laboratory work',
            type: 'apparatus_diagram',
            apparatusType: 'ppe_kit',
            defaultOptions: {
                title: 'Laboratory PPE',
                showRealObject: true,
                showGoggles: true,
                showLabCoat: true,
                showGloves: true,
                showClosedShoes: true,
                showFaceShield: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'PPE type (based on hazard)',
                    constant: 'Minimum: goggles, coat, gloves, closed shoes',
                    law: 'PPE is last line of defense, always wear in lab'
                },
                width: 1000,
                height: 900,
                backgroundColor: '#ffffff'
            }
        }
    };

static getCategoryDescription(category) {
    const descriptions = {
        'Atomic Structure': 'Atoms, electrons, orbitals, isotopes, and periodic trends',
        'Chemical Bonding': 'Ionic, covalent, metallic bonds, molecular shapes, and intermolecular forces',
        'Chemical Reactions': 'Types of reactions, balancing, redox, and stoichiometry',
        'Stoichiometry': 'Mole concept, limiting reagents, empirical formulas, and calculations',
        'Energetics': 'Enthalpy, entropy, Gibbs energy, and thermochemical cycles',
        'Kinetics': 'Reaction rates, mechanisms, activation energy, and catalysis',
        'Equilibrium': 'Chemical equilibrium, Le Chatelier\'s principle, and equilibrium constants',
        'Acids & Bases': 'pH, acid-base theories, titrations, buffers, and indicators',
        'Redox': 'Oxidation-reduction, electrochemistry, cells, and electrolysis',
        'Organic Chemistry': 'Hydrocarbons, functional groups, isomers, reactions, and mechanisms',
        'Analytical Chemistry': 'Spectroscopy, chromatography, and instrumental analysis',
        'Inorganic Chemistry': 'Periodic trends, coordination compounds, and qualitative analysis',
        'Physical Chemistry': 'Colligative properties, phase diagrams, and adsorption',
        'Environmental Chemistry': 'Pollution, cycles, and atmospheric chemistry',
        'Biochemistry': 'Proteins, carbohydrates, lipids, DNA, and enzymes',
        'Laboratory Chemistry': 'Lab techniques, glassware, equipment, measurements, and safety procedures'
    };
    return descriptions[category] || 'Chemistry diagrams';
}

static getAnalogies(diagramKey) {
    const analogies = {
        // Atomic Structure
        'atomicStructureDiagram': ['Solar system with planets orbiting sun', 'Layers of an onion with nucleus at center'],
        'electronConfigurationDiagram': ['Filling seats in a theater row by row', 'Parking cars in a multi-level garage'],
        'isotopeDiagram': ['Identical twins with different weights', 'Same car model with different cargo'],
        
        // Bonding
        'ionicBondingDiagram': ['Transferring ownership of property', 'Giving away belongings to form attraction'],
        'covalentBondingDiagram': ['Sharing a blanket', 'Two people holding hands'],
        'hydrogenBondingDiagram': ['Velcro strips holding together', 'Magnets attracting but not permanently stuck'],
        
        // Reactions
        'balancedEquationDiagram': ['Recipe with exact ingredient ratios', 'Balanced see-saw with equal weights'],
        'combustionReactionDiagram': ['Burning wood in fireplace', 'Car engine burning gasoline'],
        
        // Energetics
        'enthalpyProfileDiagram': ['Hill or valley representing energy barrier', 'Activation energy like pushing boulder over hill'],
        'calorimetryApparatus': ['Insulated coffee cup keeping heat in', 'Thermos measuring temperature change'],
        
        // Kinetics
        'collisionTheoryDiagram': ['Cars colliding at intersection', 'Billiard balls hitting each other'],
        'maxwellBoltzmannDistribution': ['Speed distribution of cars on highway', 'Height distribution of people'],
        'clockReactionApparatus': ['Stopwatch for a race', 'Timer showing when reaction completes'],
        
        // Equilibrium
        'equilibriumDiagram': ['Water level equalizing in connected containers', 'Crowded room with equal entry/exit rates'],
        'leChatellierPrincipleDiagram': ['Pushing a swing changes its motion', 'Squeezing balloon shifts air distribution'],
        
        // Acids & Bases
        'phScaleDiagram': ['Temperature scale from cold to hot', 'Spectrum from very acidic to very basic'],
        'titrationApparatus': ['Measuring exact amount to neutralize', 'Balancing flavors in cooking'],
        'bufferSolutionDiagram': ['Shock absorber in car', 'Cushion resisting compression'],
        
        // Redox
        'galvanicCellDiagram': ['Battery powering a device', 'Waterfall generating electricity'],
        'electrolyticCellDiagram': ['Charging a battery', 'Using electricity to split water'],
        'daniellCellApparatus': ['Two containers connected generating voltage', 'Chemical battery'],
        
        // Organic
        'structuralIsomersDiagram': ['Different arrangements of Lego blocks', 'Same letters spelling different words'],
        'distillationApparatus': ['Separating alcohol from wine', 'Purifying water by boiling'],
        'refluxApparatus': ['Cooking soup with lid on (vapors return)', 'Recycling vapors back to pot'],
        
        // Analytical
        'massSpectrumDiagram': ['Fingerprint identifying person', 'Barcode identifying product'],
        'chromatogramDiagram': ['Race where runners separate by speed', 'Sorting mail by destination'],
        'spectrophotometerApparatus': ['Measuring how much light passes through sunglasses', 'Color intensity meter'],
        
        // Inorganic
        'transitionMetalComplexDiagram': ['Central hub with spokes radiating out', 'Planet with moons orbiting'],
        'qualitativeAnalysisApparatus': ['Detective using clues to identify suspect', 'Color-coded test revealing identity'],
        
        // Physical
        'osmosisDiagram': ['Water flowing through filter', 'Pressure equalizing across membrane'],
        'phaseDiagramWater': ['Map showing regions of states', 'Weather map with pressure zones'],
        
        // Environmental
        'greenhouseEffectDiagram': ['Car heating up with windows closed', 'Blanket trapping body heat'],
        'carbonCycleDiagram': ['Money circulating in economy', 'Water cycle with evaporation and rain'],
        
        // Biochemistry
        'enzymeActionDiagram': ['Key fitting into lock', 'Glove fitting hand perfectly'],
        'dnaStructureDiagram': ['Twisted ladder', 'Spiral staircase with paired steps'],
        'peptideBondDiagram': ['Chain links connecting', 'Beads on a string'],
        
        // Laboratory Chemistry - Glassware
        'buretteApparatus': ['Graduated measuring cup with tap', 'Precise fuel dispenser at gas station'],
        'pipetteApparatus': ['Eye dropper with calibration', 'Precision syringe for exact dosing'],
        'volumetricFlaskDetailedApparatus': ['Bottle with exact fill line', 'Fuel tank with precise capacity mark'],
        'beakerApparatus': ['Coffee mug with rough volume marks', 'Measuring cup (approximate)'],
        'conicalFlaskApparatus': ['Funnel-shaped container', 'Wine decanter preventing spills'],
        'measuringCylinderDetailedApparatus': ['Rain gauge measuring precipitation', 'Graduated medicine cup'],
        'roundBottomFlaskApparatus': ['Light bulb shape for even heating', 'Spherical kettle'],
        'separatoryFunnelDetailedApparatus': ['Oil and vinegar separation', 'Gravy separator'],
        
        // Laboratory Chemistry - Heating
        'bunsenBurnerApparatus': ['Gas stove burner', 'Camping gas burner with adjustable flame'],
        'hotPlateApparatus': ['Electric stove top', 'Coffee maker hot plate'],
        'waterBathApparatus': ['Double boiler for gentle cooking', 'Sous vide water bath'],
        'oilBathApparatus': ['Deep fryer maintaining temperature', 'Fondue pot with oil'],
        'heatingMantleApparatus': ['Electric blanket for flask', 'Heated jacket wrapping around vessel'],
        
        // Laboratory Chemistry - Filtration
        'funnelApparatus': ['Kitchen funnel for liquids', 'Coffee filter cone'],
        'buchnerFunnelApparatus': ['Vacuum coffee maker filter', 'Shop-vac with filter'],
        'filterPaperFolding': ['Coffee filter in cone', 'Origami folding for better fit'],
        
        // Laboratory Chemistry - Separation
        'distillationApparatus': ['Moonshine still', 'Water purification by evaporation'],
        'fractionalDistillationApparatus': ['Oil refinery tower', 'Multi-stage purification column'],
        'condenserApparatus': ['Car radiator cooling fluid', 'Air conditioner condensing vapor'],
        'rotaryEvaporatorApparatus': ['Spin dryer removing water', 'Rotisserie evaporating marinade'],
        'chromatographyApparatus': ['Coffee filter showing dye separation', 'Paper towel absorbing colored water'],
        
        // Laboratory Chemistry - Measurement
        'analyticalBalanceApparatus': ['Jeweler\'s precision scale', 'Pharmacist\'s measuring scale'],
        'pHProbeApparatus': ['Pool pH tester', 'Soil acidity meter'],
        'thermometerApparatus': ['Meat thermometer', 'Fever thermometer'],
        'microPipetteApparatus': ['Precision eye dropper', 'Insulin syringe with exact dosing'],
        
        // Laboratory Chemistry - Mixing
        'magneticStirrerApparatus': ['Electric mixer in bowl', 'Magnetic compass being spun'],
        'vortexMixerApparatus': ['Blender creating vortex', 'Whirlpool in bathtub'],
        'stirringRodApparatus': ['Spoon stirring coffee', 'Chopstick mixing ingredients'],
        
        // Laboratory Chemistry - Techniques
        'recrystallizationApparatus': ['Making rock candy (pure crystals)', 'Freezing ice (pure water crystals)'],
        'meltingPointApparatus': ['Testing when butter melts', 'Determining freezing point of water'],
        'desiccatorApparatus': ['Sealed container with moisture absorber', 'Camera bag with silica gel packets'],
        'crucibleApparatus': ['Ceramic pot for high heat', 'Blacksmith\'s forge crucible'],
        'evaporatingDishApparatus': ['Shallow pan evaporating seawater for salt', 'Drying plate in sun'],
        
        // Laboratory Chemistry - Drying/Grinding
        'mortarPestleApparatus': ['Grinding coffee beans', 'Crushing garlic with mortar and pestle'],
        'spatulaApparatus': ['Kitchen spatula for transferring', 'Palette knife for art supplies'],
        'watchGlassApparatus': ['Small dish covering food', 'Saucer covering teacup'],
        
        // Laboratory Chemistry - Safety
        'fumeHoodApparatus': ['Kitchen exhaust hood', 'Paint spray booth with ventilation'],
        'safetyShowerApparatus': ['Emergency shower at pool', 'Beach shower for rinsing'],
        'fireExtinguisherApparatus': ['Fire extinguisher in kitchen', 'CO2 extinguisher for electronics'],
        'ppeKitApparatus': ['Construction worker safety gear', 'Hazmat suit for protection'],
        'spillKitApparatus': ['Cleaning supplies for mess', 'Car emergency spill kit'],
        
        // Laboratory Chemistry - Processing
        'centrifugeApparatus': ['Salad spinner separating water', 'Spin cycle in washing machine'],
        'autoclaveApparatus': ['Pressure cooker sterilizing', 'Hospital autoclave for instruments'],
        'vacuumPumpApparatus': ['Vacuum sealer removing air', 'Vacuum cleaner creating suction'],
        'aspiratorApparatus': ['Venturi vacuum from water flow', 'Garden hose vacuum attachment'],
        
        // Laboratory Chemistry - Specialized
        'soxhletExtractorApparatus': ['Coffee percolator recycling water', 'Continuous tea brewing system'],
        'glassElectrodeApparatus': ['Sensor that must stay wet', 'Contact lens requiring moisture'],
        'labNotebookApparatus': ['Ship captain\'s log book', 'Medical chart recording vital signs']
    };
    return analogies[diagramKey] || [];
}

static getSafetyConsiderations(diagramKey) {
    const safetyMap = {
        // Existing entries
        'titrationApparatus': ['Wear goggles', 'Use pipette filler', 'Handle acids/bases carefully'],
        'distillationApparatus': ['Check for cracks in glassware', 'Ensure water flow through condenser', 'Use anti-bumping granules'],
        'calorimetryApparatus': ['Use insulated container', 'Stir gently', 'Monitor temperature carefully'],
        'electrolysisCellApparatus': ['Low voltage only', 'Avoid short circuits', 'Ventilate for gas production'],
        'flameTestApparatus': ['Tie back hair', 'Clean wire between tests', 'Use safety goggles'],
        'gasCollectionApparatus': ['Check for leaks', 'Collect toxic gases in fume hood', 'Use gas syringe safely'],
        'refluxApparatus': ['Never seal system', 'Use proper heating', 'Allow cooling before disassembly'],
        
        // Laboratory Glassware
        'buretteApparatus': ['Check for leaks at tap', 'Rinse with solution before use', 'Read at eye level to avoid parallax error'],
        'pipetteApparatus': ['Always use pipette filler - NEVER mouth pipette', 'Check for chips on tip', 'Drain properly for accurate volume'],
        'volumetricFlaskDetailedApparatus': ['Don\'t overheat solutions', 'Mix by inversion with stopper secure', 'Allow hot solutions to cool before filling to mark'],
        'beakerApparatus': ['Use beaker tongs when hot', 'Don\'t heat when empty', 'Pour with stirring rod to prevent splashing'],
        'roundBottomFlaskApparatus': ['Always use clamp support', 'Never heat when sealed', 'Check for cracks before heating'],
        'testTubeApparatus': ['Point away from yourself and others when heating', 'Heat gently and intermittently', 'Use test tube holder'],
        
        // Heating Equipment
        'bunsenBurnerApparatus': ['Tie back long hair', 'Keep flammable materials away', 'Turn off gas when not in use', 'Use safety flame (yellow) when not heating'],
        'hotPlateApparatus': ['Don\'t touch hot surface', 'Turn off when leaving lab', 'Use heat-resistant gloves', 'Allow to cool before moving'],
        'waterBathApparatus': ['Don\'t let water boil dry', 'Use thermometer to monitor', 'Be careful of steam burns'],
        'oilBathApparatus': ['Never overheat oil (fire hazard)', 'Use high-temperature thermometer', 'Have fire extinguisher nearby', 'Don\'t add water to hot oil'],
        'heatingMantleApparatus': ['Check electrical connections', 'Don\'t exceed recommended temperature', 'Allow to cool before handling'],
        
        // Separation Equipment
        'fractionalDistillationApparatus': ['Ensure all joints properly connected', 'Check water flow direction', 'Use anti-bumping granules', 'Never heat sealed system'],
        'separatoryFunnelDetailedApparatus': ['Vent pressure regularly when shaking', 'Point stem away from people', 'Check stopcock doesn\'t leak', 'Support with ring stand'],
        'condenserApparatus': ['Water in at bottom, out at top', 'Secure all rubber tubing', 'Check for proper water flow', 'Don\'t allow to run dry'],
        'buchnerFunnelApparatus': ['Check vacuum connection secure', 'Use safety shield if under high vacuum', 'Release vacuum before disassembly'],
        'rotaryEvaporatorApparatus': ['Secure flask properly', 'Don\'t exceed bath temperature', 'Release vacuum slowly', 'Wear safety glasses'],
        
        // Filtration & Transfer
        'funnelApparatus': ['Support securely', 'Pour slowly to prevent overflow', 'Use appropriate size filter paper'],
        'separatingFunnelApparatus': ['Invert and vent frequently', 'Hold stopper while shaking', 'Allow layers to separate completely'],
        
        // Measurement Devices
        'analyticalBalanceApparatus': ['Never weigh hot objects', 'Close draft shields', 'Clean spills immediately', 'Calibrate regularly'],
        'pHProbeApparatus': ['Don\'t let electrode dry out', 'Rinse between samples', 'Store in storage solution', 'Handle glass bulb carefully'],
        'thermometerApparatus': ['Don\'t use as stirring rod', 'Avoid thermal shock', 'Mercury thermometers - report breaks immediately'],
        'microPipetteApparatus': ['Use proper tip size', 'Never exceed volume range', 'Pipette vertically', 'Don\'t lay down with liquid in tip'],
        
        // Mixing & Processing
        'magneticStirrerApparatus': ['Don\'t overheat', 'Retrieve stir bar carefully', 'Keep away from electronic devices'],
        'vortexMixerApparatus': ['Secure tube before activating', 'Don\'t use with open containers', 'Avoid splashing'],
        'centrifugeApparatus': ['Always balance tubes', 'Close lid before starting', 'Wait for complete stop before opening', 'Check for cracks in tubes'],
        
        // Specialized Equipment
        'autoclaveApparatus': ['Never open when pressurized', 'Use heat-resistant gloves', 'Allow pressure to release completely', 'Check door seal'],
        'fumeHoodApparatus': ['Keep sash at proper height', 'Don\'t block airflow vents', 'Work at least 6 inches inside', 'Check airflow before use'],
        'vacuumPumpApparatus': ['Use cold trap', 'Check for leaks', 'Don\'t pump corrosive vapors', 'Release vacuum before turning off'],
        'soxhletExtractorApparatus': ['Ensure all joints sealed', 'Use proper solvent amount', 'Monitor heating rate', 'Never leave unattended'],
        
        // Safety Equipment Usage
        'safetyShowerApparatus': ['Know location before emergency', 'Remove contaminated clothing', 'Rinse for minimum 15 minutes', 'Seek medical attention'],
        'fireExtinguisherApparatus': ['PASS method: Pull, Aim, Squeeze, Sweep', 'Evacuate if fire too large', 'Know extinguisher type', 'Report all fires'],
        'fireBlanketApparatus': ['Don\'t use on large fires', 'Cover person completely', 'Don\'t remove until cool', 'Seek medical help'],
        'spillKitApparatus': ['Alert others first', 'Contain spill before cleanup', 'Use appropriate neutralizer', 'Dispose in proper waste container'],
        'ppeKitApparatus': ['Goggles must fit properly', 'Lab coat fully buttoned', 'Gloves appropriate for chemical', 'Closed-toe shoes required'],
        
        // General Lab Practices
        'labNotebookApparatus': ['Record all observations immediately', 'Never erase - cross out errors', 'Date all entries', 'Keep in safe location'],
        'spatulaApparatus': ['Clean between uses', 'Never use wet spatula for moisture-sensitive chemicals', 'Don\'t touch chemicals with hands'],
        'stirringRodApparatus': ['Clean before and after use', 'Don\'t use to stir hot concentrated acids', 'Support when not in use'],
        'dropperApparatus': ['Never return excess chemical to stock bottle', 'Label if containing chemical', 'Clean thoroughly between uses'],
        'crucibleApparatus': ['Use crucible tongs when hot', 'Place on heat-resistant surface', 'Allow to cool in desiccator'],
        'evaporatingDishApparatus': ['Don\'t heat too rapidly', 'Use tongs for hot dishes', 'Watch for spattering'],
        'mortarPestleApparatus': ['Grind gently to avoid flying particles', 'Clean immediately after use', 'Don\'t grind explosive materials'],
        'desiccatorApparatus': ['Open carefully (may be under vacuum)', 'Grease rim lightly', 'Don\'t overload', 'Store in cool place'],
        'watchGlassApparatus': ['Handle edges carefully', 'Use tongs when hot', 'Place on heat-resistant surface'],
        'retortStandApparatus': ['Ensure heavy base for stability', 'Tighten clamps securely', 'Position over bench, not edge'],
        'tripodApparatus': ['Check wire gauze for holes', 'Ensure stable placement', 'Keep burner centered']
    };
    return safetyMap[diagramKey] || ['Follow standard laboratory safety procedures'];
}

static getDiagramApplications(diagramKey) {
    const applications = {
        // Existing entries
        'spectrophotometerApparatus': ['Water quality testing', 'Drug analysis', 'Environmental monitoring', 'Clinical diagnostics'],
        'gcmsApparatus': ['Forensics', 'Drug testing', 'Environmental analysis', 'Food safety'],
        'hplcApparatus': ['Pharmaceutical analysis', 'Protein purification', 'Quality control', 'Food testing'],
        'titrationApparatus': ['Water hardness testing', 'Vitamin C content', 'Acid strength determination', 'Standardizing solutions'],
        'electrolyticCellDiagram': ['Electroplating', 'Metal purification', 'Chlorine production', 'Aluminum extraction'],
        'distillationApparatus': ['Alcohol production', 'Water purification', 'Essential oil extraction', 'Petroleum refining'],
        'chromatographyApparatus': ['Drug testing', 'Plant pigment separation', 'Purity checking', 'Environmental monitoring'],
        // Laboratory Glassware
        'buretteApparatus': ['Acid-base titrations', 'Redox titrations', 'Complexometric titrations', 'Precise volume delivery'],
        'pipetteApparatus': ['Aliquot transfer', 'Sample preparation', 'Serial dilutions', 'Standard solution preparation'],
        'volumetricFlaskDetailedApparatus': ['Standard solution preparation', 'Dilutions', 'Sample preparation', 'Calibration solutions'],
        'beakerApparatus': ['Mixing solutions', 'Dissolving solids', 'Heating liquids', 'General purpose container'],
        'conicalFlaskApparatus': ['Titrations', 'Recrystallization', 'Mixing with swirling', 'Reactions with gas evolution'],
        'measuringCylinderDetailedApparatus': ['Approximate volume measurement', 'Density determination', 'Rough dilutions'],
        'roundBottomFlaskApparatus': ['Reflux reactions', 'Distillations', 'Rotary evaporation', 'Organic synthesis'],
        
        // Separation Techniques
        'fractionalDistillationApparatus': ['Crude oil refining', 'Separating liquid mixtures', 'Purifying solvents', 'Alcohol production'],
        'separatoryFunnelDetailedApparatus': ['Liquid-liquid extraction', 'Removing impurities', 'Isolating products', 'Caffeine extraction'],
        'buchnerFunnelApparatus': ['Rapid filtration', 'Product isolation', 'Removing precipitates', 'Recrystallization'],
        'rotaryEvaporatorApparatus': ['Solvent removal', 'Concentrating samples', 'Organic synthesis workup', 'Purification'],
        'recrystallizationApparatus': ['Purifying solids', 'Improving crystal quality', 'Removing impurities', 'Obtaining pure compounds'],
        'chromatographyApparatus': ['Separating mixtures', 'Identifying compounds', 'Purity analysis', 'Isolating natural products'],
        'soxhletExtractorApparatus': ['Natural product extraction', 'Lipid extraction', 'Removing contaminants', 'Continuous extraction'],
        
        // Heating Methods
        'bunsenBurnerApparatus': ['Flame tests', 'Sterilizing loops', 'Bending glass', 'General heating'],
        'hotPlateApparatus': ['Gentle heating', 'Magnetic stirring', 'Maintaining temperature', 'Evaporation'],
        'waterBathApparatus': ['Temperature-sensitive reactions', 'Gentle heating', 'Maintaining constant temperature', 'Enzyme reactions'],
        'oilBathApparatus': ['High-temperature reactions', 'Reflux reactions', 'Precise temperature control', 'Organic synthesis'],
        'heatingMantleApparatus': ['Organic synthesis', 'Distillation', 'Reflux', 'Safe electrical heating'],
        
        // Measurement & Analysis
        'analyticalBalanceApparatus': ['Precise mass determination', 'Gravimetric analysis', 'Standard preparation', 'Quality control'],
        'pHProbeApparatus': ['pH measurement', 'Titration monitoring', 'Water quality testing', 'Soil analysis'],
        'thermometerApparatus': ['Temperature monitoring', 'Melting point determination', 'Boiling point measurement', 'Reaction monitoring'],
        'microPipetteApparatus': ['Molecular biology', 'Clinical testing', 'Precise small volumes', 'Serial dilutions'],
        
        // Mixing & Processing
        'magneticStirrerApparatus': ['Continuous mixing', 'Dissolution', 'Homogeneous reactions', 'Titrations'],
        'vortexMixerApparatus': ['Rapid mixing of small volumes', 'Resuspending precipitates', 'Cell biology', 'Quick homogenization'],
        'centrifugeApparatus': ['Separating cells', 'Pelleting precipitates', 'Blood analysis', 'Protein purification'],
        'autoclaveApparatus': ['Sterilizing equipment', 'Media preparation', 'Waste treatment', 'Microbiology'],
        
        // Specialized Techniques
        'meltingPointApparatus': ['Compound identification', 'Purity determination', 'Quality control', 'Characterization'],
        'desiccatorApparatus': ['Drying hygroscopic samples', 'Storing moisture-sensitive chemicals', 'Cooling hot samples', 'Gravimetric analysis'],
        'vacuumPumpApparatus': ['Vacuum filtration', 'Degassing solvents', 'Freeze drying', 'Rotary evaporation'],
        'aspiratorApparatus': ['Vacuum filtration', 'Reducing pressure', 'Simple vacuum needs', 'Removing air'],
        
        // Qualitative Analysis
        'qualitativeAnalysisApparatus': ['Ion identification', 'Unknown analysis', 'Environmental testing', 'Forensic analysis'],
        'anionTestsApparatus': ['Water analysis', 'Soil testing', 'Industrial quality control', 'Unknown identification'],
        'flameTestApparatus': ['Metal ion identification', 'Qualitative analysis', 'Fireworks chemistry', 'Mineral identification'],
        
        // Safety Applications
        'fumeHoodApparatus': ['Handling volatile chemicals', 'Toxic gas reactions', 'Acid/base handling', 'Protecting laboratory workers'],
        'spillKitApparatus': ['Emergency response', 'Chemical spill cleanup', 'Acid/base neutralization', 'Laboratory safety'],
        'ppeKitApparatus': ['Personal protection', 'Chemical handling', 'Preventing exposure', 'Laboratory safety compliance'],
        
        // Documentation
        'labNotebookApparatus': ['Legal documentation', 'Reproducibility', 'Research records', 'Quality assurance', 'Patent applications'],
        
        // Industrial Chemistry
        'haberProcessApparatus': ['Ammonia production', 'Fertilizer manufacturing', 'Industrial chemistry', 'High-pressure synthesis'],
        'contactProcessApparatus': ['Sulfuric acid production', 'Industrial catalysis', 'Chemical manufacturing'],
        'chlorAlkaliCellApparatus': ['Chlorine production', 'Sodium hydroxide production', 'Industrial electrolysis', 'Chemical industry'],
        
        // Electrochemistry
        'daniellCellApparatus': ['Electrochemistry demonstrations', 'Voltage generation', 'Teaching galvanic cells', 'Battery principles'],
        'copperElectroplatingApparatus': ['Metal coating', 'Corrosion protection', 'Jewelry making', 'Electronics manufacturing'],
        'redoxTitrationApparatus': ['Iron determination', 'Oxidizing agent analysis', 'Water treatment analysis', 'Quality control'],
        
        // Analytical Instruments
        'massSpectrometerChemistry': ['Isotope analysis', 'Molecular weight determination', 'Unknown identification', 'Environmental testing'],
        'irSpectrometerApparatus': ['Functional group identification', 'Structural analysis', 'Quality control', 'Forensics'],
        'nmrSpectrometerApparatus': ['Structure elucidation', 'Purity analysis', 'Research', 'Drug development'],
        'atomicAbsorptionApparatus': ['Trace metal analysis', 'Environmental monitoring', 'Food safety', 'Clinical chemistry'],
        
        // Sample Preparation
        'osmometerApparatus': ['Molecular weight determination', 'Colligative properties', 'Biological solutions', 'Polymer analysis'],
        'conductivityCellApparatus': ['Water purity testing', 'Ion concentration', 'Solution analysis', 'Quality control'],
        'colorimeterApparatus': ['Concentration determination', 'Kinetics studies', 'Beer\'s Law experiments', 'Water quality']
    };
    return applications[diagramKey] || ['General chemistry applications'];
}

// ===== UTILITY METHODS =====
        
        static getDiagram(key) {
            return this.diagrams[key];
        }

        static getAllDiagrams() {
            return Object.keys(this.diagrams);
        }

        static getDiagramsByCategory(category) {
            return Object.entries(this.diagrams)
                .filter(([_, diagram]) => diagram.category === category)
                .reduce((acc, [key, diagram]) => {
                    acc[key] = diagram;
                    return acc;
                }, {});
        }

        static getAllCategories() {
            return [...new Set(Object.values(this.diagrams).map(d => d.category))];
        }

        static searchDiagrams(query) {
            const lowerQuery = query.toLowerCase();
            return Object.entries(this.diagrams)
                .filter(([key, diagram]) =>
                    diagram.name.toLowerCase().includes(lowerQuery) ||
                    diagram.description.toLowerCase().includes(lowerQuery) ||
                    diagram.category.toLowerCase().includes(lowerQuery) ||
                    key.toLowerCase().includes(lowerQuery)
                )
                .reduce((acc, [key, diagram]) => {
                    acc[key] = diagram;
                    return acc;
                }, {});
        }

        static getDiagramsByType(type) {
            return Object.entries(this.diagrams)
                .filter(([_, diagram]) => diagram.type === type)
                .reduce((acc, [key, diagram]) => {
                    acc[key] = diagram;
                    return acc;
                }, {});
        }

        static getApparatusDiagrams() {
            return Object.entries(this.diagrams)
                .filter(([_, diagram]) => diagram.type === 'apparatus_diagram')
                .reduce((acc, [key, diagram]) => {
                    acc[key] = diagram;
                    return acc;
                }, {});
        }

        static getDiagramStats() {
            const stats = {};
            this.getAllCategories().forEach(category => {
                const diagrams = this.getDiagramsByCategory(category);
                const apparatusDiagrams = Object.entries(diagrams)
                    .filter(([_, d]) => d.type === 'apparatus_diagram');
                const solveDiagrams = Object.entries(diagrams)
                    .filter(([_, d]) => d.type !== 'apparatus_diagram');
                
                stats[category] = {
                    total: Object.keys(diagrams).length,
                    apparatus: apparatusDiagrams.length,
                    solve: solveDiagrams.length,
                    diagrams: Object.keys(diagrams)
                };
            });
            return stats;
        }


        static getGoldenQuestions(diagramKey) {
            const diagram = this.diagrams[diagramKey];
            if (diagram && diagram.defaultOptions && diagram.defaultOptions.goldenQuestions) {
                return diagram.defaultOptions.goldenQuestions;
            }
            return null;
        }

        static getDiagramPedagogy(diagramKey) {
            const diagram = this.diagrams[diagramKey];
            if (!diagram) return null;

            const isApparatus = diagram.type === 'apparatus_diagram';
            
            return {
                name: diagram.name,
                category: diagram.category,
                type: isApparatus ? 'Read-as-you-draw (Apparatus)' : 'Solve-as-you-draw',
                approach: isApparatus ? 
                    'Draw real object → Label quantities → Identify relationships → Write equations' :
                    'Abstract representation → Apply laws → Solve numerically',
                goldenQuestions: this.getGoldenQuestions(diagramKey),
                analogies: this.getAnalogies(diagramKey),
                learningValue: isApparatus ?
                    'Visual-first reasoning: the diagram itself reveals the chemistry' :
                    'Problem-solving tool: visualize to solve'
            };
        }

        static getCategorySummary() {
            const categories = this.getAllCategories();
            const summary = {};
            
            categories.forEach(category => {
                const diagrams = this.getDiagramsByCategory(category);
                const apparatusCount = Object.values(diagrams)
                    .filter(d => d.type === 'apparatus_diagram').length;
                const solveCount = Object.keys(diagrams).length - apparatusCount;
                
                summary[category] = {
                    description: this.getCategoryDescription(category),
                    totalDiagrams: Object.keys(diagrams).length,
                    apparatusDiagrams: apparatusCount,
                    solveDiagrams: solveCount,
                    diagramKeys: Object.keys(diagrams)
                };
            });
            
            return summary;
        }

        static getCompleteDiagramList() {
            const categories = this.getAllCategories();
            const list = [];
            
            categories.forEach(category => {
                list.push(`\n=== ${category.toUpperCase()} ===`);
                const diagrams = this.getDiagramsByCategory(category);
                
                Object.entries(diagrams).forEach(([key, diagram]) => {
                    const type = diagram.type === 'apparatus_diagram' ? '[APPARATUS]' : '[SOLVE]';
                    list.push(`${type} ${diagram.name} - ${diagram.description}`);
                });
            });
            
            return list.join('\n');
        }

        static validateDiagram(diagramKey) {
            const diagram = this.diagrams[diagramKey];
            if (!diagram) {
                return { valid: false, error: 'Diagram not found' };
            }

            const required = ['name', 'category', 'description', 'type', 'defaultOptions'];
            const missing = required.filter(field => !diagram[field]);
            
            if (missing.length > 0) {
                return { valid: false, error: `Missing required fields: ${missing.join(', ')}` };
            }

            if (diagram.type === 'apparatus_diagram') {
                if (!diagram.apparatusType) {
                    return { valid: false, error: 'Apparatus diagram missing apparatusType' };
                }
                if (!diagram.defaultOptions.goldenQuestions) {
                    return { valid: false, error: 'Apparatus diagram missing goldenQuestions' };
                }
            }

            return { valid: true };
        }

        static getRandomDiagram(category = null) {
            let diagrams;
            if (category) {
                diagrams = this.getDiagramsByCategory(category);
            } else {
                diagrams = this.diagrams;
            }
            
            const keys = Object.keys(diagrams);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            return { key: randomKey, diagram: diagrams[randomKey] };
        }

        static exportToJSON() {
            return JSON.stringify(this.diagrams, null, 2);
        }

        static getTotalCount() {
            return Object.keys(this.diagrams).length;
        }

        static getApparatusCount() {
            return Object.values(this.diagrams)
                .filter(d => d.type === 'apparatus_diagram').length;
        }

        static getSolveCount() {
            return this.getTotalCount() - this.getApparatusCount();
        }

        static getStatistics() {
            return {
                totalDiagrams: this.getTotalCount(),
                apparatusDiagrams: this.getApparatusCount(),
                solveDiagrams: this.getSolveCount(),
                categories: this.getAllCategories().length,
                categorySummary: this.getCategorySummary()
            };
        }

        static getCommonReagents() {
            return {
                acids: ['HCl', 'H₂SO₄', 'HNO₃', 'CH₃COOH'],
                bases: ['NaOH', 'KOH', 'NH₃', 'Ca(OH)₂'],
                oxidizingAgents: ['KMnO₄', 'K₂Cr₂O₇', 'H₂O₂'],
                reducingAgents: ['Fe²⁺', 'I⁻', 'SO₃²⁻', 'Zn'],
                indicators: ['Phenolphthalein', 'Methyl orange', 'Litmus', 'Universal indicator'],
                catalysts: ['V₂O₅', 'Pt', 'Fe', 'MnO₂', 'Ni'],
                solvents: ['Water', 'Ethanol', 'Hexane', 'Acetone', 'Dichloromethane']
            };
        }


}

export { ChemistryDiagramsRegistry };
