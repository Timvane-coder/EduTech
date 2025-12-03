import { createCanvas } from '@napi-rs/canvas';
import ExcelJS from 'exceljs';
import fs from 'fs';
import os from 'os';
import path from 'path';
import readline from 'readline';
import * as math from 'mathjs';



// ============================================================================
// CHEMISTRY DIAGRAMS REGISTRY - Complete Chemistry Visualization System
// ============================================================================

class ChemistryDiagramsRegistry {
    static diagrams = {
        // ===== 1. ATOMIC STRUCTURE & ELECTRON CONFIGURATION =====
        'bohrModelHydrogen': {
            name: 'Bohr Model - Hydrogen Atom',
            formula: 'H',
            category: 'Atomic Structure',
            description: 'Bohr model showing electron orbits for hydrogen',
            type: 'bohr_model',
            element: 'H',
            electrons: 1,
            shells: [1],
            defaultOptions: {
                title: 'Bohr Model - Hydrogen (H)',
                showLabels: true,
                showElectrons: true,
                showNucleus: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bohrModelCarbon': {
            name: 'Bohr Model - Carbon Atom',
            formula: 'C',
            category: 'Atomic Structure',
            description: 'Bohr model showing electron configuration for carbon',
            type: 'bohr_model',
            element: 'C',
            electrons: 6,
            shells: [2, 4],
            defaultOptions: {
                title: 'Bohr Model - Carbon (C)',
                showLabels: true,
                showElectrons: true,
                showNucleus: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearStructure': {
            name: 'Nuclear Structure Diagram',
            category: 'Atomic Structure',
            description: 'Detailed view of nucleus showing protons and neutrons',
            type: 'nuclear_structure',
            protons: 6,
            neutrons: 6,
            element: 'C',
            defaultOptions: {
                title: 'Nuclear Structure - Carbon-12',
                showLabels: true,
                showLegend: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'orbitalShapes': {
            name: 'Orbital Shapes (s, p, d, f)',
            category: 'Atomic Structure',
            description: 'Visual representation of electron orbital shapes',
            type: 'orbital_shapes',
            orbitals: ['s', 'px', 'py', 'pz'],
            defaultOptions: {
                title: 'Electron Orbital Shapes',
                show3D: true,
                showAxes: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electronConfiguration': {
            name: 'Electron Configuration Diagram',
            category: 'Atomic Structure',
            description: 'Orbital filling diagram with arrows showing spin',
            type: 'electron_configuration',
            element: 'Fe',
            atomicNumber: 26,
            configuration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶',
            defaultOptions: {
                title: 'Electron Configuration - Iron (Fe)',
                showArrows: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'periodicTrends': {
            name: 'Periodic Trends Chart',
            category: 'Atomic Structure',
            description: 'Visual representation of periodic trends',
            type: 'periodic_trends',
            trends: ['atomicRadius', 'electronegativity', 'ionizationEnergy'],
            defaultOptions: {
                title: 'Periodic Trends',
                showArrows: true,
                showGradient: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. CHEMICAL BONDING & LEWIS STRUCTURES =====
        'lewisStructureWater': {
            name: 'Lewis Structure - Water',
            formula: 'H2O',
            category: 'Chemical Bonding',
            description: 'Lewis dot structure showing bonding and lone pairs',
            type: 'lewis_structure',
            centralAtom: 'O',
            bonds: [
                { atom1: 'O', atom2: 'H', type: 'single' },
                { atom1: 'O', atom2: 'H', type: 'single' }
            ],
            lonePairs: { O: 2 },
            defaultOptions: {
                title: 'Lewis Structure - H₂O',
                showLonePairs: true,
                showFormalCharges: false,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vsepGeometry': {
            name: 'VSEPR Molecular Geometry',
            category: 'Chemical Bonding',
            description: '3D molecular geometry based on VSEPR theory',
            type: 'vsepr_geometry',
            geometry: 'tetrahedral',
            molecule: 'CH4',
            defaultOptions: {
                title: 'VSEPR - Tetrahedral (CH₄)',
                show3D: true,
                showBondAngles: true,
                rotationX: 20,
                rotationY: 30,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'polarBonds': {
            name: 'Polar Bond Dipole Diagram',
            category: 'Chemical Bonding',
            description: 'Shows electronegativity differences and dipole moments',
            type: 'polar_bonds',
            molecule: 'HCl',
            electronegativity: { H: 2.20, Cl: 3.16 },
            defaultOptions: {
                title: 'Polar Bond - HCl',
                showDipole: true,
                showDelta: true,
                showElectronegativity: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'hybridization': {
            name: 'Hybridization Diagram',
            category: 'Chemical Bonding',
            description: 'Orbital hybridization (sp, sp², sp³)',
            type: 'hybridization',
            hybridType: 'sp3',
            atom: 'C',
            defaultOptions: {
                title: 'sp³ Hybridization - Carbon',
                showOrbitals: true,
                showEnergy: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'sigmaPiBonds': {
            name: 'Sigma and Pi Bonds',
            category: 'Chemical Bonding',
            description: 'Visualization of σ and π bonding',
            type: 'sigma_pi_bonds',
            molecule: 'C2H4',
            bondTypes: ['sigma', 'pi'],
            defaultOptions: {
                title: 'σ and π Bonds in Ethene',
                show3D: true,
                showOverlap: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'resonanceStructures': {
            name: 'Resonance Structures',
            category: 'Chemical Bonding',
            description: 'Multiple resonance forms with arrows',
            type: 'resonance',
            molecule: 'CO3^2-',
            structures: 3,
            defaultOptions: {
                title: 'Resonance - Carbonate Ion (CO₃²⁻)',
                showArrows: true,
                showHybrid: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. ORGANIC CHEMISTRY =====
        'organicStructuralFormula': {
            name: 'Organic Structural Formula',
            category: 'Organic Chemistry',
            description: 'Detailed structural formula showing all bonds',
            type: 'structural_formula',
            molecule: 'ethanol',
            formula: 'C2H5OH',
            defaultOptions: {
                title: 'Ethanol - Structural Formula',
                showHydrogens: true,
                showBonds: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'skeletalFormula': {
            name: 'Skeletal Formula',
            category: 'Organic Chemistry',
            description: 'Simplified skeletal structure',
            type: 'skeletal_formula',
            molecule: 'hexane',
            carbons: 6,
            defaultOptions: {
                title: 'Hexane - Skeletal Formula',
                showLabels: false,
                zigzag: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'reactionMechanism': {
            name: 'Reaction Mechanism (Arrow Pushing)',
            category: 'Organic Chemistry',
            description: 'Curved arrow mechanism showing electron movement',
            type: 'reaction_mechanism',
            mechanism: 'SN2',
            reactants: ['CH3Br', 'OH-'],
            product: 'CH3OH',
            defaultOptions: {
                title: 'SN2 Mechanism',
                showArrows: true,
                showTransitionState: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'functionalGroups': {
            name: 'Functional Groups Table',
            category: 'Organic Chemistry',
            description: 'Common organic functional groups',
            type: 'functional_groups',
            groups: ['alcohol', 'aldehyde', 'ketone', 'carboxylicAcid', 'ester', 'amine', 'amide'],
            defaultOptions: {
                title: 'Common Functional Groups',
                showExamples: true,
                showNames: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'isomers': {
            name: 'Isomer Diagrams',
            category: 'Organic Chemistry',
            description: 'Structural and stereoisomers',
            type: 'isomers',
            formula: 'C4H10',
            isomerType: 'structural',
            defaultOptions: {
                title: 'Isomers of C₄H₁₀',
                showLabels: true,
                compareStructures: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'polymerization': {
            name: 'Polymerization Diagram',
            category: 'Organic Chemistry',
            description: 'Monomer to polymer formation',
            type: 'polymerization',
            monomer: 'ethene',
            polymer: 'polyethylene',
            defaultOptions: {
                title: 'Polymerization of Ethene',
                showRepeatingUnit: true,
                showArrows: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'aromaticRing': {
            name: 'Aromatic Ring (Benzene)',
            category: 'Organic Chemistry',
            description: 'Benzene resonance and aromatic system',
            type: 'aromatic',
            molecule: 'benzene',
            defaultOptions: {
                title: 'Benzene - Aromatic System',
                showResonance: true,
                showElectronCloud: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. STATES OF MATTER & PARTICLE DIAGRAMS =====
        'particleStates': {
            name: 'Particle Diagrams (Solid/Liquid/Gas)',
            category: 'States of Matter',
            description: 'Particle arrangement in different states',
            type: 'particle_states',
            states: ['solid', 'liquid', 'gas'],
            defaultOptions: {
                title: 'States of Matter - Particle View',
                showMotion: false,
                showLabels: true,
                width: 1000,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'diffusion': {
            name: 'Diffusion Diagram',
            category: 'States of Matter',
            description: 'Particle diffusion process',
            type: 'diffusion',
            particles: 50,
            defaultOptions: {
                title: 'Diffusion of Particles',
                showTime: true,
                animate: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'brownianMotion': {
            name: 'Brownian Motion',
            category: 'States of Matter',
            description: 'Random particle movement',
            type: 'brownian_motion',
            particleCount: 30,
            defaultOptions: {
                title: 'Brownian Motion',
                showPaths: true,
                showCollisions: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'heatingCurve': {
            name: 'Heating Curve',
            category: 'States of Matter',
            description: 'Temperature vs time during heating',
            type: 'heating_curve',
            substance: 'water',
            defaultOptions: {
                title: 'Heating Curve - Water',
                showPhases: true,
                showPlateaus: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'coolingCurve': {
            name: 'Cooling Curve',
            category: 'States of Matter',
            description: 'Temperature vs time during cooling',
            type: 'cooling_curve',
            substance: 'water',
            defaultOptions: {
                title: 'Cooling Curve - Water',
                showPhases: true,
                showPlateaus: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'intermolecularForces': {
            name: 'Intermolecular Forces',
            category: 'States of Matter',
            description: 'Types of intermolecular attractions',
            type: 'intermolecular_forces',
            forces: ['london', 'dipole', 'hydrogen'],
            defaultOptions: {
                title: 'Intermolecular Forces',
                showStrength: true,
                showExamples: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. CHEMICAL REACTIONS & ENERGY PROFILES =====
        'energyProfile': {
            name: 'Reaction Energy Profile',
            category: 'Reactions & Energy',
            description: 'Energy diagram showing activation energy',
            type: 'energy_profile',
            reactionType: 'exothermic',
            activationEnergy: 75,
            deltaH: -50,
            defaultOptions: {
                title: 'Energy Profile - Exothermic Reaction',
                showActivationEnergy: true,
                showDeltaH: true,
                showCatalyst: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'catalystEffect': {
            name: 'Catalyst Effect on Energy Profile',
            category: 'Reactions & Energy',
            description: 'Comparison of catalyzed vs uncatalyzed pathways',
            type: 'catalyst_effect',
            activationEnergyNoCat: 100,
            activationEnergyCat: 60,
            defaultOptions: {
                title: 'Effect of Catalyst',
                showBothPaths: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'collisionTheory': {
            name: 'Collision Theory Diagram',
            category: 'Reactions & Energy',
            description: 'Particle collisions and successful reactions',
            type: 'collision_theory',
            particles: 20,
            defaultOptions: {
                title: 'Collision Theory',
                showOrientation: true,
                showEnergy: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'enthalpyChange': {
            name: 'Enthalpy Change Diagram',
            category: 'Reactions & Energy',
            description: 'Energy level diagram for enthalpy changes',
            type: 'enthalpy_change',
            deltaH: -284,
            reaction: 'CH4 + 2O2 → CO2 + 2H2O',
            defaultOptions: {
                title: 'Enthalpy Change - Combustion',
                showArrow: true,
                showValues: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. SOLUTIONS, ACIDS & BASES =====
        'dissociationDiagram': {
            name: 'Dissociation Diagram',
            category: 'Solutions & Acids',
            description: 'Ionic compound dissolving in water',
            type: 'dissociation',
            compound: 'NaCl',
            defaultOptions: {
                title: 'Dissociation of NaCl',
                showWater: true,
                showIons: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ionHydration': {
            name: 'Ion Hydration Model',
            category: 'Solutions & Acids',
            description: 'Water molecules surrounding ions',
            type: 'ion_hydration',
            ion: 'Na+',
            defaultOptions: {
                title: 'Hydration of Na⁺ Ion',
                showWaterDipoles: true,
                showHydrogenBonds: false,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'phScale': {
            name: 'pH Scale',
            category: 'Solutions & Acids',
            description: 'pH scale with color indicators',
            type: 'ph_scale',
            range: [0, 14],
            defaultOptions: {
                title: 'pH Scale',
                showColors: true,
                showExamples: true,
                width: 1000,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'titrationCurve': {
            name: 'Titration Curve',
            category: 'Solutions & Acids',
            description: 'pH vs volume for acid-base titration',
            type: 'titration_curve',
            titration: 'strong_acid_strong_base',
            defaultOptions: {
                title: 'Titration Curve - Strong Acid/Strong Base',
                showEquivalencePoint: true,
                showBuffer: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'solubilityCurve': {
            name: 'Solubility Curve',
            category: 'Solutions & Acids',
            description: 'Solubility vs temperature',
            type: 'solubility_curve',
            compounds: ['KNO3', 'NaCl', 'Ce2(SO4)3'],
            defaultOptions: {
                title: 'Solubility Curves',
                showMultiple: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'indicatorChart': {
            name: 'Acid-Base Indicators',
            category: 'Solutions & Acids',
            description: 'Indicator colors at different pH',
            type: 'indicator_chart',
            indicators: ['phenolphthalein', 'methylOrange', 'bromothymolBlue'],
            defaultOptions: {
                title: 'Acid-Base Indicators',
                showColorChange: true,
                showpHRange: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. ELECTROCHEMISTRY =====
        'galvanicCell': {
            name: 'Galvanic (Voltaic) Cell',
            category: 'Electrochemistry',
            description: 'Electrochemical cell producing electricity',
            type: 'galvanic_cell',
            anode: 'Zn',
            cathode: 'Cu',
            defaultOptions: {
                title: 'Galvanic Cell - Zn/Cu',
                showElectronFlow: true,
                showIonFlow: true,
                showSaltBridge: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'electrolyticCell': {
            name: 'Electrolytic Cell',
            category: 'Electrochemistry',
            description: 'Cell using electricity for chemical change',
            type: 'electrolytic_cell',
            electrolyte: 'CuSO4',
            defaultOptions: {
                title: 'Electrolytic Cell - CuSO₄',
                showElectronFlow: true,
                showIonMovement: true,
                showPowerSource: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'electrodeProcesses': {
            name: 'Electrode Processes',
            category: 'Electrochemistry',
            description: 'Oxidation and reduction at electrodes',
            type: 'electrode_processes',
            reactions: ['oxidation', 'reduction'],
            defaultOptions: {
                title: 'Electrode Processes',
                showHalfReactions: true,
                showElectrons: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electrochemicalSeries': {
            name: 'Electrochemical Series',
            category: 'Electrochemistry',
            description: 'Standard electrode potentials table',
            type: 'electrochemical_series',
            elements: ['Li', 'K', 'Ca', 'Na', 'Mg', 'Al', 'Zn', 'Fe', 'Pb', 'H', 'Cu', 'Ag', 'Au'],
            defaultOptions: {
                title: 'Electrochemical Series',
                showPotentials: true,
                showArrow: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 8. THERMOCHEMISTRY =====
        'phaseDiagram': {
            name: 'Phase Diagram',
            category: 'Thermochemistry',
            description: 'Pressure vs temperature phase diagram',
            type: 'phase_diagram',
            substance: 'water',
            defaultOptions: {
                title: 'Phase Diagram - Water',
                showTriplePoint: true,
                showCriticalPoint: true,
                showPhaseRegions: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hessLawCycle': {
            name: "Hess's Law Cycle",
            category: 'Thermochemistry',
            description: 'Energy cycle showing alternative pathways',
            type: 'hess_cycle',
            reaction: 'formation_CO2',
            defaultOptions: {
                title: "Hess's Law Cycle",
                showArrows: true,
                showEnthalpies: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'enthalpyLevelDiagram': {
            name: 'Enthalpy Level Diagram',
            category: 'Thermochemistry',
            description: 'Energy levels for reactants and products',
            type: 'enthalpy_levels',
            reactionType: 'endothermic',
            defaultOptions: {
                title: 'Enthalpy Level Diagram',
                showDeltaH: true,
                showArrows: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'calorimeter': {
            name: 'Calorimeter Apparatus',
            category: 'Thermochemistry',
            description: 'Coffee cup or bomb calorimeter',
            type: 'calorimeter',
            calorimeterType: 'coffee_cup',
            defaultOptions: {
                title: 'Calorimeter Setup',
                showLabels: true,
                showThermometer: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'energyBarChart': {
            name: 'Energy Bar Chart',
            category: 'Thermochemistry',
            description: 'Comparative energy levels',
            type: 'energy_bar_chart',
            values: [100, 150, 80],
            labels: ['Reactants', 'Transition State', 'Products'],
            defaultOptions: {
                title: 'Energy Comparison',
                showValues: true,
                showGrid: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 9. KINETICS =====
        'maxwellBoltzmann': {
            name: 'Maxwell-Boltzmann Distribution',
            category: 'Kinetics',
            description: 'Particle energy distribution curve',
            type: 'maxwell_boltzmann',
            temperature: 298,
            defaultOptions: {
                title: 'Maxwell-Boltzmann Distribution',
                showActivationEnergy: true,
                showArea: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'catalystOnCurve': {
            name: 'Catalyst Effect on Distribution',
            category: 'Kinetics',
            description: 'How catalyst changes activation energy threshold',
            type: 'catalyst_curve',
            EaNoCat: 100,
            EaCat: 60,
            defaultOptions: {
                title: 'Catalyst Effect on Reaction Rate',
                showBothCurves: false,
                showEaLines: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'concentrationVsRate': {
            name: 'Concentration vs Rate Graph',
            category: 'Kinetics',
            description: 'Effect of concentration on reaction rate',
            type: 'concentration_rate',
            order: 1,
            defaultOptions: {
                title: 'Concentration vs Rate',
                showTrendline: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'temperatureVsRate': {
            name: 'Temperature vs Rate Graph',
            category: 'Kinetics',
            description: 'Arrhenius relationship',
            type: 'temperature_rate',
            defaultOptions: {
                title: 'Temperature vs Rate',
                showExponential: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'surfaceAreaEffect': {
            name: 'Surface Area Effect',
            category: 'Kinetics',
            description: 'Particle size vs reaction rate',
            type: 'surface_area',
            particleSizes: ['large', 'medium', 'small'],
            defaultOptions: {
                title: 'Effect of Surface Area on Rate',
                showComparison: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 10. EQUILIBRIUM =====
        'concentrationVsTime': {
            name: 'Concentration vs Time (Equilibrium)',
            category: 'Equilibrium',
            description: 'Reaching equilibrium over time',
            type: 'equilibrium_time',
            reaction: 'N2 + 3H2 ⇌ 2NH3',
            defaultOptions: {
                title: 'Concentration vs Time - Equilibrium',
                showPlateau: true,
                showForwardReverse: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'leChatelierShift': {
            name: "Le Chatelier's Principle",
            category: 'Equilibrium',
            description: 'Equilibrium shift diagrams',
            type: 'le_chatelier',
            stress: 'concentration',
            direction: 'forward',
            defaultOptions: {
                title: "Le Chatelier's Principle",
                showArrows: true,
                showChange: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'iceTable': {
            name: 'ICE Table',
            category: 'Equilibrium',
            description: 'Initial, Change, Equilibrium table',
            type: 'ice_table',
            reaction: 'H2 + I2 ⇌ 2HI',
            defaultOptions: {
                title: 'ICE Table',
                showCalculations: true,
                showLabels: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'equilibriumGraph': {
            name: 'Equilibrium Position Graph',
            category: 'Equilibrium',
            description: 'Forward and reverse rates vs time',
            type: 'equilibrium_graph',
            defaultOptions: {
                title: 'Equilibrium Position',
                showRates: true,
                showIntersection: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 11. NUCLEAR CHEMISTRY =====
        'alphaDecay': {
            name: 'Alpha Decay',
            category: 'Nuclear Chemistry',
            description: 'Alpha particle emission',
            type: 'nuclear_decay',
            decayType: 'alpha',
            nucleus: 'Ra-226',
            defaultOptions: {
                title: 'Alpha Decay - Radium-226',
                showParticle: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'betaDecay': {
            name: 'Beta Decay',
            category: 'Nuclear Chemistry',
            description: 'Beta particle emission',
            type: 'nuclear_decay',
            decayType: 'beta',
            nucleus: 'C-14',
            defaultOptions: {
                title: 'Beta Decay - Carbon-14',
                showParticle: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        'gammaDecay': {
            name: 'Gamma Decay',
            category: 'Nuclear Chemistry',
            description: 'Gamma ray emission',
            type: 'nuclear_decay',
            decayType: 'gamma',
            nucleus: 'Co-60',
            defaultOptions: {
                title: 'Gamma Decay - Cobalt-60',
                showWave: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearFission': {
            name: 'Nuclear Fission',
            category: 'Nuclear Chemistry',
            description: 'Nucleus splitting into fragments',
            type: 'fission',
            nucleus: 'U-235',
            defaultOptions: {
                title: 'Nuclear Fission - Uranium-235',
                showNeutrons: true,
                showProducts: true,
                showEnergy: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearFusion': {
            name: 'Nuclear Fusion',
            category: 'Nuclear Chemistry',
            description: 'Nuclei combining to form heavier nucleus',
            type: 'fusion',
            reactants: ['H-2', 'H-3'],
            defaultOptions: {
                title: 'Nuclear Fusion - Deuterium + Tritium',
                showReactants: true,
                showProduct: true,
                showEnergy: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chainReaction': {
            name: 'Nuclear Chain Reaction',
            category: 'Nuclear Chemistry',
            description: 'Self-sustaining fission chain',
            type: 'chain_reaction',
            generations: 3,
            defaultOptions: {
                title: 'Nuclear Chain Reaction',
                showGenerations: true,
                showNeutrons: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'radioactiveDecayCurve': {
            name: 'Radioactive Decay Curve',
            category: 'Nuclear Chemistry',
            description: 'Exponential decay over time',
            type: 'decay_curve',
            isotope: 'C-14',
            halfLife: 5730,
            defaultOptions: {
                title: 'Radioactive Decay Curve',
                showHalfLives: true,
                showExponential: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'halfLifeGraph': {
            name: 'Half-Life Graph',
            category: 'Nuclear Chemistry',
            description: 'Amount vs time showing half-life periods',
            type: 'half_life',
            halfLife: 10,
            defaultOptions: {
                title: 'Half-Life Demonstration',
                showPeriods: true,
                showPercentages: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'penetrationPower': {
            name: 'Radiation Penetration Power',
            category: 'Nuclear Chemistry',
            description: 'Alpha, beta, gamma penetration comparison',
            type: 'penetration',
            radiations: ['alpha', 'beta', 'gamma'],
            defaultOptions: {
                title: 'Radiation Penetration Power',
                showBarriers: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bindingEnergyCurve': {
            name: 'Nuclear Binding Energy Curve',
            category: 'Nuclear Chemistry',
            description: 'Binding energy per nucleon vs mass number',
            type: 'binding_energy',
            defaultOptions: {
                title: 'Nuclear Binding Energy Curve',
                showPeak: true,
                showFissionFusion: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 12. LABORATORY CHEMISTRY =====
        'filtrationSetup': {
            name: 'Filtration Apparatus',
            category: 'Laboratory',
            description: 'Gravity filtration setup',
            type: 'lab_apparatus',
            apparatus: 'filtration',
            defaultOptions: {
                title: 'Filtration Setup',
                showLabels: true,
                showProcess: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'distillationApparatus': {
            name: 'Simple Distillation',
            category: 'Laboratory',
            description: 'Complete distillation setup',
            type: 'lab_apparatus',
            apparatus: 'distillation',
            defaultOptions: {
                title: 'Simple Distillation Apparatus',
                showLabels: true,
                showHeatSource: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fractionalDistillation': {
            name: 'Fractional Distillation',
            category: 'Laboratory',
            description: 'Fractional distillation column',
            type: 'lab_apparatus',
            apparatus: 'fractional_distillation',
            defaultOptions: {
                title: 'Fractional Distillation',
                showColumn: true,
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'separatingFunnel': {
            name: 'Separating Funnel',
            category: 'Laboratory',
            description: 'Liquid-liquid separation',
            type: 'lab_apparatus',
            apparatus: 'separating_funnel',
            defaultOptions: {
                title: 'Separating Funnel',
                showLayers: true,
                showLabels: true,
                width: 500,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'titrationSetup': {
            name: 'Titration Setup',
            category: 'Laboratory',
            description: 'Burette, pipette, and flask arrangement',
            type: 'lab_apparatus',
            apparatus: 'titration',
            defaultOptions: {
                title: 'Titration Setup',
                showBurette: true,
                showFlask: true,
                showLabels: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'refluxApparatus': {
            name: 'Reflux Apparatus',
            category: 'Laboratory',
            description: 'Heating under reflux setup',
            type: 'lab_apparatus',
            apparatus: 'reflux',
            defaultOptions: {
                title: 'Reflux Apparatus',
                showCondenser: true,
                showLabels: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'gasCollection': {
            name: 'Gas Collection Over Water',
            category: 'Laboratory',
            description: 'Collecting gas by water displacement',
            type: 'lab_apparatus',
            apparatus: 'gas_collection',
            defaultOptions: {
                title: 'Gas Collection Over Water',
                showWater: true,
                showGas: true,
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hazardSymbols': {
            name: 'Chemical Hazard Symbols',
            category: 'Laboratory',
            description: 'Standard laboratory hazard symbols',
            type: 'hazard_symbols',
            symbols: ['flammable', 'corrosive', 'toxic', 'oxidizing', 'explosive', 'harmful'],
            defaultOptions: {
                title: 'Chemical Hazard Symbols',
                showDescriptions: true,
                showGrid: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'laboratoryGlassware': {
            name: 'Common Laboratory Glassware',
            category: 'Laboratory',
            description: 'Standard lab equipment diagram',
            type: 'glassware_collection',
            items: ['beaker', 'flask', 'cylinder', 'burette', 'pipette', 'test_tube'],
            defaultOptions: {
                title: 'Laboratory Glassware',
                showLabels: true,
                showVolumes: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'safetyEquipment': {
            name: 'Laboratory Safety Equipment',
            category: 'Laboratory',
            description: 'Safety gear and equipment',
            type: 'safety_equipment',
            items: ['goggles', 'gloves', 'lab_coat', 'fire_extinguisher', 'eye_wash', 'fume_hood'],
            defaultOptions: {
                title: 'Laboratory Safety Equipment',
                showLabels: true,
                showUsage: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 13. STOICHIOMETRY =====
        'moleTriangle': {
            name: 'Mole Triangle',
            category: 'Stoichiometry',
            description: 'Mass-Moles-Mr relationship triangle',
            type: 'mole_triangle',
            variables: ['mass', 'moles', 'Mr'],
            defaultOptions: {
                title: 'Mole Triangle (Mass-Moles-Mr)',
                showFormulas: true,
                showUnits: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gasTriangle': {
            name: 'Gas Volume Triangle',
            category: 'Stoichiometry',
            description: 'Volume-Moles-24L relationship',
            type: 'gas_triangle',
            variables: ['volume', 'moles', '24L'],
            defaultOptions: {
                title: 'Gas Triangle (Volume-Moles-24L)',
                showFormulas: true,
                showUnits: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'particleTriangle': {
            name: 'Particle Triangle',
            category: 'Stoichiometry',
            description: 'Moles-Atoms-Avogadro relationship',
            type: 'particle_triangle',
            variables: ['moles', 'particles', 'Na'],
            defaultOptions: {
                title: 'Particle Triangle (Moles-Atoms-Nₐ)',
                showFormulas: true,
                showUnits: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'unitConversionMap': {
            name: 'Stoichiometry Unit Conversion Map',
            category: 'Stoichiometry',
            description: 'Flow chart for unit conversions',
            type: 'conversion_map',
            units: ['mass', 'moles', 'volume', 'particles'],
            defaultOptions: {
                title: 'Stoichiometry Conversion Map',
                showArrows: true,
                showFormulas: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'stoichiometricRatio': {
            name: 'Stoichiometric Ratio Table',
            category: 'Stoichiometry',
            description: 'Mole ratios from balanced equation',
            type: 'stoichiometric_ratio',
            equation: '2H2 + O2 → 2H2O',
            defaultOptions: {
                title: 'Stoichiometric Ratios',
                showMoleRatios: true,
                showTable: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'limitingReagent': {
            name: 'Limiting Reagent Diagram',
            category: 'Stoichiometry',
            description: 'Visual representation of limiting vs excess reactant',
            type: 'limiting_reagent',
            reaction: 'H2 + Cl2 → 2HCl',
            H2_amount: 3,
            Cl2_amount: 5,
            defaultOptions: {
                title: 'Limiting Reagent - H₂ + Cl₂',
                showParticles: true,
                showExcess: true,
                showCalculations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'limitingReagentBar': {
            name: 'Limiting Reagent Bar Model',
            category: 'Stoichiometry',
            description: 'Bar chart showing limiting vs excess',
            type: 'limiting_bar',
            reactants: ['A', 'B'],
            amounts: [5, 8],
            ratio: [2, 3],
            defaultOptions: {
                title: 'Limiting Reagent Bar Model',
                showRequired: true,
                showAvailable: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'yieldDiagram': {
            name: 'Yield Diagram',
            category: 'Stoichiometry',
            description: 'Theoretical vs actual vs percent yield',
            type: 'yield_diagram',
            theoretical: 100,
            actual: 85,
            defaultOptions: {
                title: 'Yield Comparison',
                showPercentage: true,
                showBars: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'empiricalFormula': {
            name: 'Empirical Formula Ratio',
            category: 'Stoichiometry',
            description: 'Simplest whole number ratio diagram',
            type: 'empirical_formula',
            elements: { C: 40, H: 6.7, O: 53.3 },
            defaultOptions: {
                title: 'Empirical Formula Determination',
                showCalculations: true,
                showRatios: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositionPieChart': {
            name: 'Percent Composition Pie Chart',
            category: 'Stoichiometry',
            description: 'Mass percent of each element',
            type: 'composition_pie',
            compound: 'H2O',
            composition: { H: 11.2, O: 88.8 },
            defaultOptions: {
                title: 'Percent Composition - H₂O',
                showPercentages: true,
                showLegend: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'molarity': {
            name: 'Molarity Diagram',
            category: 'Stoichiometry',
            description: 'Moles per liter visualization',
            type: 'molarity',
            moles: 2,
            volume: 1,
            defaultOptions: {
                title: 'Molarity (M = mol/L)',
                showBeaker: true,
                showFormula: true,
                showParticles: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'dilution': {
            name: 'Dilution Diagram (M₁V₁ = M₂V₂)',
            category: 'Stoichiometry',
            description: 'Before and after dilution',
            type: 'dilution',
            M1: 2,
            V1: 100,
            M2: 0.5,
            V2: 400,
            defaultOptions: {
                title: 'Dilution - M₁V₁ = M₂V₂',
                showBefore: true,
                showAfter: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gasLawsDiagram': {
            name: 'Ideal Gas Law Diagram',
            category: 'Stoichiometry',
            description: 'PV=nRT relationship',
            type: 'gas_laws',
            law: 'ideal',
            defaultOptions: {
                title: 'Ideal Gas Law (PV = nRT)',
                showVariables: true,
                showContainer: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'titrationStoichiometry': {
            name: 'Titration Stoichiometry',
            category: 'Stoichiometry',
            description: 'Mole calculations from titration data',
            type: 'titration_stoichiometry',
            acid: 'HCl',
            base: 'NaOH',
            defaultOptions: {
                title: 'Titration Stoichiometry',
                showEquation: true,
                showCalculations: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'avogadroNumber': {
            name: "Avogadro's Number Visualization",
            category: 'Stoichiometry',
            description: '6.022 × 10²³ concept diagram',
            type: 'avogadro',
            defaultOptions: {
                title: "Avogadro's Number (Nₐ = 6.022 × 10²³)",
                showComparison: true,
                showScale: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'molarMass': {
            name: 'Molar Mass Calculation',
            category: 'Stoichiometry',
            description: 'Breaking down compound to find molar mass',
            type: 'molar_mass',
            compound: 'Ca(OH)2',
            defaultOptions: {
                title: 'Molar Mass - Ca(OH)₂',
                showBreakdown: true,
                showCalculation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stoichiometryRoadmap': {
            name: 'Stoichiometry Problem Roadmap',
            category: 'Stoichiometry',
            description: 'Flow chart for solving stoichiometry problems',
            type: 'stoichiometry_roadmap',
            steps: ['given', 'convert_to_moles', 'use_ratio', 'convert_to_desired'],
            defaultOptions: {
                title: 'Stoichiometry Problem-Solving Roadmap',
                showSteps: true,
                showArrows: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'balancingEquations': {
            name: 'Balancing Chemical Equations',
            category: 'Stoichiometry',
            description: 'Visual guide to balancing equations',
            type: 'balancing_equations',
            equation: 'H2 + O2 → H2O',
            defaultOptions: {
                title: 'Balancing Equations',
                showParticles: true,
                showCoefficients: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        }
    };

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
                key.toLowerCase().includes(lowerQuery) ||
                (diagram.formula && diagram.formula.toLowerCase().includes(lowerQuery))
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

    static getDiagramStats() {
        const stats = {};
        this.getAllCategories().forEach(category => {
            const diagrams = this.getDiagramsByCategory(category);
            stats[category] = {
                count: Object.keys(diagrams).length,
                diagrams: Object.keys(diagrams)
            };
        });
        return stats;
    }

    static getCategoryDescription(category) {
        const descriptions = {
            'Atomic Structure': 'Diagrams showing atomic models, electron configurations, and periodic trends',
            'Chemical Bonding': 'Lewis structures, VSEPR, hybridization, and bonding theories',
            'Organic Chemistry': 'Structural formulas, mechanisms, functional groups, and isomers',
            'States of Matter': 'Particle diagrams, phase changes, and intermolecular forces',
            'Reactions & Energy': 'Energy profiles, collision theory, and reaction mechanisms',
            'Solutions & Acids': 'pH, titrations, solubility, and acid-base chemistry',
            'Electrochemistry': 'Galvanic cells, electrolysis, and redox reactions',
            'Thermochemistry': 'Enthalpy, phase diagrams, and energy cycles',
            'Kinetics': 'Reaction rates, Maxwell-Boltzmann distributions, and catalysis',
            'Equilibrium': 'Le Chatelier, equilibrium positions, and ICE tables',
            'Nuclear Chemistry': 'Radioactivity, decay, fission, and fusion',
            'Laboratory': 'Apparatus, techniques, and safety equipment',
            'Stoichiometry': 'Mole calculations, limiting reagents, and yield'
        };
        return descriptions[category] || 'Chemistry diagrams';
    }

    static getAnalogies(diagramKey) {
        const analogies = {
            'bohrModelHydrogen': ['Solar system model', 'Planets orbiting the sun'],
            'particleStates': ['Boxes = solids', 'Marbles = liquids', 'Flies in a room = gases'],
            'vsepGeometry': ['Balloons repelling each other', 'Minimizing electron pair repulsion'],
            'polarBonds': ['Tug-of-war for electrons', 'Unequal sharing like unequal splitting of money'],
            'collisionTheory': ['Bumper cars at amusement park', 'Cars crashing on highway'],
            'phScale': ['pH scale as thermometer', 'Acid-base strength ladder'],
            'limitingReagent': ['Sandwich making with limited bread', 'Recipe with missing ingredients'],
            'dilution': ['Juice concentrate analogy', 'Weakening coffee by adding water'],
            'moleTriangle': ['Mathematical triangle like distance-speed-time', 'Recipe scaling factor']
        };
        return analogies[diagramKey] || [];
    }
}

// ============================================================================
// CHEMISTRY DIAGRAM RENDERER
// ============================================================================

class ChemistryDiagramRenderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
    }

    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = ChemistryDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            throw new Error(`Chemistry diagram '${diagramKey}' not found`);
        }

        const mergedOptions = { ...diagram.defaultOptions, ...options };
        
        this.ctx.save();
        this.ctx.translate(x, y);

        // Clear background
        this.ctx.fillStyle = mergedOptions.backgroundColor;
        this.ctx.fillRect(0, 0, width, height);

        // Title
        this.drawTitle(mergedOptions.title, width / 2, 30);

        // Route to specific renderer based on type
        const centerX = width / 2;
        const centerY = height / 2 + 30;

        try {
            switch (diagram.type) {
                case 'bohr_model':
                    this.renderBohrModel(diagram, centerX, centerY, Math.min(width, height) * 0.4, mergedOptions);
                    break;
                case 'nuclear_structure':
                    this.renderNuclearStructure(diagram, centerX, centerY, Math.min(width, height) * 0.35, mergedOptions);
                    break;
                case 'orbital_shapes':
                    this.renderOrbitalShapes(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'electron_configuration':
                    this.renderElectronConfiguration(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'periodic_trends':
                    this.renderPeriodicTrends(diagram, centerX, centerY, width * 0.9, height * 0.75, mergedOptions);
                    break;
                case 'lewis_structure':
                    this.renderLewisStructure(diagram, centerX, centerY, width * 0.6, mergedOptions);
                    break;
                case 'vsepr_geometry':
                    this.renderVSEPRGeometry(diagram, centerX, centerY, Math.min(width, height) * 0.4, mergedOptions);
                    break;
                case 'polar_bonds':
                    this.renderPolarBonds(diagram, centerX, centerY, width * 0.7, mergedOptions);
                    break;
                case 'hybridization':
                    this.renderHybridization(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'sigma_pi_bonds':
                    this.renderSigmaPiBonds(diagram, centerX, centerY, width * 0.7, mergedOptions);
                    break;
                case 'resonance':
                    this.renderResonance(diagram, 50, centerY, width * 0.9, mergedOptions);
                    break;
                case 'structural_formula':
                case 'skeletal_formula':
                    this.renderOrganicFormula(diagram, centerX, centerY, width * 0.7, mergedOptions);
                    break;
                case 'reaction_mechanism':
                    this.renderReactionMechanism(diagram, 50, centerY, width * 0.9, mergedOptions);
                    break;
                case 'functional_groups':
                    this.renderFunctionalGroups(diagram, 50, 80, width * 0.95, height * 0.85, mergedOptions);
                    break;
                case 'isomers':
                    this.renderIsomers(diagram, 50, centerY, width * 0.9, mergedOptions);
                    break;
                case 'polymerization':
                    this.renderPolymerization(diagram, 50, centerY, width * 0.9, mergedOptions);
                    break;
                case 'aromatic':
                    this.renderAromatic(diagram, centerX, centerY, width * 0.5, mergedOptions);
                    break;
                case 'particle_states':
                    this.renderParticleStates(diagram, 50, centerY, width * 0.9, height * 0.6, mergedOptions);
                    break;
                case 'diffusion':
                case 'brownian_motion':
                    this.renderParticleMotion(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'heating_curve':
                case 'cooling_curve':
                    this.renderHeatingCoolingCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'intermolecular_forces':
                    this.renderIntermolecularForces(diagram, 50, 80, width * 0.9, height * 0.8, mergedOptions);
                    break;
                case 'energy_profile':
                case 'catalyst_effect':
                    this.renderEnergyProfile(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'collision_theory':
                    this.renderCollisionTheory(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'enthalpy_change':
                case 'enthalpy_levels':
                    this.renderEnthalpyDiagram(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                case 'dissociation':
                    this.renderDissociation(diagram, centerX, centerY, width * 0.8, mergedOptions);
                    break;
                case 'ion_hydration':
                    this.renderIonHydration(diagram, centerX, centerY, width * 0.6, mergedOptions);
                    break;
                case 'ph_scale':
                    this.renderPHScale(diagram, centerX, centerY, width * 0.9, height * 0.4, mergedOptions);
                    break;
                case 'titration_curve':
                    this.renderTitrationCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'solubility_curve':
                    this.renderSolubilityCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'indicator_chart':
                    this.renderIndicatorChart(diagram, 50, 80, width * 0.9, height * 0.75, mergedOptions);
                    break;
                case 'galvanic_cell':
                case 'electrolytic_cell':
                    this.renderElectrochemicalCell(diagram, centerX, centerY, width * 0.85, height * 0.75, mergedOptions);
                    break;
                case 'electrode_processes':
                    this.renderElectrodeProcesses(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'electrochemical_series':
                    this.renderElectrochemicalSeries(diagram, centerX, centerY, width * 0.7, height * 0.8, mergedOptions);
                    break;
                case 'phase_diagram':
                    this.renderPhaseDiagram(diagram, centerX, centerY, width * 0.85, height * 0.75, mergedOptions);
                    break;
                case 'hess_cycle':
                    this.renderHessCycle(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'calorimeter':
                    this.renderCalorimeter(diagram, centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'energy_bar_chart':
                    this.renderEnergyBarChart(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'maxwell_boltzmann':
                case 'catalyst_curve':
                    this.renderMaxwellBoltzmann(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'concentration_rate':
                case 'temperature_rate':
                    this.renderRateGraph(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'surface_area':
                    this.renderSurfaceAreaEffect(diagram, centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'equilibrium_time':
                case 'equilibrium_graph':
                    this.renderEquilibriumGraph(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'le_chatelier':
                    this.renderLeChatelierShift(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'ice_table':
                    this.renderICETable(diagram, centerX, centerY, width * 0.85, height * 0.5, mergedOptions);
                    break;
                case 'nuclear_decay':
                    this.renderNuclearDecay(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'fission':
                case 'fusion':
                    this.renderNuclearReaction(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'chain_reaction':
                    this.renderChainReaction(diagram, centerX, centerY, width * 0.9, height * 0.8, mergedOptions);
                    break;
                case 'decay_curve':
                case 'half_life':
                    this.renderDecayCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'penetration':
                    this.renderPenetrationPower(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'binding_energy':
                    this.renderBindingEnergyCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'lab_apparatus':
                    this.renderLabApparatus(diagram, centerX, centerY, width * 0.6, height * 0.75, mergedOptions);
                    break;
                case 'hazard_symbols':
                    this.renderHazardSymbols(diagram, 50, 80, width * 0.9, height * 0.8, mergedOptions);
                    break;
                case 'glassware_collection':
                    this.renderGlasswareCollection(diagram, 50, 80, width * 0.95, height * 0.8, mergedOptions);
                    break;
                case 'safety_equipment':
                    this.renderSafetyEquipment(diagram, 50, 80, width * 0.95, height * 0.8, mergedOptions);
                    break;
                case 'mole_triangle':
                case 'gas_triangle':
                case 'particle_triangle':
                    this.renderStoichiometryTriangle(diagram, centerX, centerY, Math.min(width, height) * 0.5, mergedOptions);
                    break;
                case 'conversion_map':
                    this.renderConversionMap(diagram, centerX, centerY, width * 0.85, height * 0.75, mergedOptions);
                    break;
                case 'stoichiometric_ratio':
                    this.renderStoichiometricRatio(diagram, centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'limiting_reagent':
                    this.renderLimitingReagent(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'limiting_bar':
                    this.renderLimitingBar(diagram, centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'yield_diagram':
                    this.renderYieldDiagram(diagram, centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'empirical_formula':
                    this.renderEmpiricalFormula(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'composition_pie':
                    this.renderCompositionPie(diagram, centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'molarity':
                    this.renderMolarity(diagram, centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'dilution':
                    this.renderDilution(diagram, centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'gas_laws':
                    this.renderGasLaws(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'titration_stoichiometry':
                    this.renderTitrationStoichiometry(diagram, centerX, centerY, width * 0.85, height * 0.8, mergedOptions);
                    break;
                case 'avogadro':
                    this.renderAvogadroNumber(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'molar_mass':
                    this.renderMolarMass(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'stoichiometry_roadmap':
                    this.renderStoichiometryRoadmap(diagram, 50, 80, width * 0.9, height * 0.75, mergedOptions);
                    break;
                case 'balancing_equations':
                    this.renderBalancingEquations(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                default:
                    this.renderPlaceholder(diagram, centerX, centerY, width * 0.7, height * 0.5);
            }

            // Add category and info
            this.drawDiagramInfo(diagram, 20, height - 60, mergedOptions);

        } catch (error) {
            console.error(`Error rendering ${diagramKey}:`, error);
            this.renderError(diagram, centerX, centerY, width * 0.7, height * 0.5, error.message);
        }

        this.ctx.restore();
    }

    // ========== ATOMIC STRUCTURE RENDERERS ==========

    renderBohrModel(diagram, x, y, size, options) {
        const { element, shells } = diagram;
        const nucleus = { radius: size * 0.1, color: '#FF6B6B' };
        
        // Draw nucleus
        const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, nucleus.radius);
        gradient.addColorStop(0, '#FFE66D');
        gradient.addColorStop(1, nucleus.color);
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(x, y, nucleus.radius, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.strokeStyle = '#C92A2A';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        if (options.showNucleus) {
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(element, x, y);
        }

        // Draw electron shells
        shells.forEach((electronCount, shellIndex) => {
            const shellRadius = nucleus.radius * 2 + (shellIndex + 1) * (size * 0.15);
            
            // Shell orbit
            this.ctx.strokeStyle = '#4ECDC4';
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.arc(x, y, shellRadius, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            if (options.showLabels) {
                this.ctx.fillStyle = '#555555';
                this.ctx.font = '11px Arial';
                this.ctx.fillText(`n=${shellIndex + 1}`, x + shellRadius + 15, y);
            }

            // Draw electrons
            if (options.showElectrons) {
                for (let i = 0; i < electronCount; i++) {
                    const angle = (i / electronCount) * Math.PI * 2;
                    const ex = x + shellRadius * Math.cos(angle);
                    const ey = y + shellRadius * Math.sin(angle);

                    const eGradient = this.ctx.createRadialGradient(ex - 2, ey - 2, 0, ex, ey, 6);
                    eGradient.addColorStop(0, '#FFFFFF');
                    eGradient.addColorStop(1, '#1E88E5');

                    this.ctx.fillStyle = eGradient;
                    this.ctx.beginPath();
                    this.ctx.arc(ex, ey, 6, 0, Math.PI * 2);
                    this.ctx.fill();

                    this.ctx.strokeStyle = '#0D47A1';
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        });
    }

    renderNuclearStructure(diagram, x, y, size, options) {
        const { protons, neutrons } = diagram;
        const particleRadius = size * 0.08;
        const totalParticles = protons + neutrons;
        const gridSize = Math.ceil(Math.sqrt(totalParticles));

        let particleIndex = 0;
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                if (particleIndex >= totalParticles) break;

                const px = x + (col - gridSize / 2) * particleRadius * 2.2;
                const py = y + (row - gridSize / 2) * particleRadius * 2.2;

                const isProton = particleIndex < protons;
                const color = isProton ? '#FF6B6B' : '#4ECDC4';
                const label = isProton ? 'p+' : 'n';

                const gradient = this.ctx.createRadialGradient(px - 3, py - 3, 0, px, py, particleRadius);
                gradient.addColorStop(0, this.lightenColor(color, 40));
                gradient.addColorStop(1, color);

                this.ctx.fillStyle = gradient;
                this.ctx.beginPath();
                this.ctx.arc(px, py, particleRadius, 0, Math.PI * 2);
                this.ctx.fill();

                this.ctx.strokeStyle = this.darkenColor(color, 30);
                this.ctx.lineWidth = 1.5;
                this.ctx.stroke();

                if (options.showLabels) {
                    this.ctx.fillStyle = '#FFFFFF';
                    this.ctx.font = 'bold 10px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.textBaseline = 'middle';
                    this.ctx.fillText(label, px, py);
                }

                particleIndex++;
            }
        }

        if (options.showLegend) {
            const legendY = y + size + 40;
            
            // Proton legend
            this.ctx.fillStyle = '#FF6B6B';
            this.ctx.beginPath();
            this.ctx.arc(x - 80, legendY, 8, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.fillStyle = '#333333';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`Protons: ${protons}`, x - 65, legendY + 4);

            // Neutron legend
            this.ctx.fillStyle = '#4ECDC4';
            this.ctx.beginPath();
            this.ctx.arc(x - 80, legendY + 25, 8, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.fillStyle = '#333333';
            this.ctx.fillText(`Neutrons: ${neutrons}`, x - 65, legendY + 29);
        }
    }

    renderOrbitalShapes(diagram, x, y, width, height, options) {
        const { orbitals } = diagram;
        const orbitalWidth = width / orbitals.length;

        orbitals.forEach((orbital, index) => {
            const ox = x + (index - orbitals.length / 2 + 0.5) * orbitalWidth;
            const oy = y;
            const size = orbitalWidth * 0.7;

            // Draw orbital shape
            this.ctx.save();
            this.ctx.translate(ox, oy);

            if (orbital === 's') {
                // Spherical s orbital
                const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2);
                gradient.addColorStop(0, 'rgba(255, 107, 107, 0.8)');
                gradient.addColorStop(1, 'rgba(255, 107, 107, 0.1)');
                
                this.ctx.fillStyle = gradient;
                this.ctx.beginPath();
                this.ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
                this.ctx.fill();
                
                this.ctx.strokeStyle = '#FF6B6B';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
            } else if (orbital.startsWith('p')) {
                // Dumbbell p orbital
                const direction = orbital.slice(1); // x, y, or z
                
                if (direction === 'x' || !direction) {
                    this.drawPOrbital(0, 0, size / 2, 0);
                } else if (direction === 'y') {
                    this.drawPOrbital(0, 0, size / 2, Math.PI / 2);
                } else if (direction === 'z') {
                    this.drawPOrbital(0, 0, size / 2.5, 0, true);
                }
            }

            // Label
            if (options.showLabels) {
                this.ctx.fillStyle = '#333333';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(orbital, 0, size / 2 + 25);
            }

            this.ctx.restore();
        });

        // Axes if requested
        if (options.showAxes) {
            this.drawAxes(x, y, Math.min(width, height) * 0.3);
        }
    }

    drawPOrbital(x, y, size, rotation, is3D = false) {
        this.ctx.save();
        this.ctx.rotate(rotation);

        if (is3D) {
            // 3D perspective p-orbital (z-axis)
            const gradient1 = this.ctx.createRadialGradient(0, -size * 0.6, 0, 0, -size * 0.6, size * 0.4);
            gradient1.addColorStop(0, 'rgba(78, 205, 196, 0.8)');
            gradient1.addColorStop(1, 'rgba(78, 205, 196, 0.1)');
            
            this.ctx.fillStyle = gradient1;
            this.ctx.beginPath();
            this.ctx.ellipse(0, -size * 0.6, size * 0.3, size * 0.4, 0, 0, Math.PI * 2);
            this.ctx.fill();

            const gradient2 = this.ctx.createRadialGradient(0, size * 0.6, 0, 0, size * 0.6, size * 0.4);
            gradient2.addColorStop(0, 'rgba(78, 205, 196, 0.8)');
            gradient2.addColorStop(1, 'rgba(78, 205, 196, 0.1)');
            
            this.ctx.fillStyle = gradient2;
            this.ctx.beginPath();
            this.ctx.ellipse(0, size * 0.6, size * 0.3, size * 0.4, 0, 0, Math.PI * 2);
            this.ctx.fill();
        } else {
            // 2D p-orbital lobes
            ['left', 'right'].forEach((side, idx) => {
                const sign = side === 'left' ? -1 : 1;
                const gradient = this.ctx.createRadialGradient(
                    sign * size * 0.6, 0, 0,
                    sign * size * 0.6, 0, size * 0.4
                );
                gradient.addColorStop(0, 'rgba(78, 205, 196, 0.8)');
                gradient.addColorStop(1, 'rgba(78, 205, 196, 0.1)');
                
                this.ctx.fillStyle = gradient;
                this.ctx.beginPath();
                this.ctx.ellipse(sign * size * 0.6, 0, size * 0.4, size * 0.3, 0, 0, Math.PI * 2);
                this.ctx.fill();
                
                this.ctx.strokeStyle = '#4ECDC4';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
            });
        }

        this.ctx.restore();
    }

    renderElectronConfiguration(diagram, x, y, width, height, options) {
        const { atomicNumber, configuration } = diagram;
        
        // Parse configuration
        const orbitals = this.parseElectronConfig(configuration);
        
        const boxWidth = 50;
        const boxHeight = 30;
        const spacing = 10;
        const rowHeight = boxHeight + spacing + 20;

        let currentX = x - width / 2;
        let currentY = y - height / 2;
        let currentRow = 0;

        orbitals.forEach((orbital, index) => {
            const { label, electrons } = orbital;
            
            // New row for different energy levels
            if (index > 0 && label.startsWith('1') && !orbitals[index - 1].label.startsWith('1')) {
                currentRow++;
                currentY = y - height / 2 + currentRow * rowHeight;
                currentX = x - width / 2;
            }

            // Draw orbital label
            this.ctx.fillStyle = '#555555';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText(label, currentX - 5, currentY + boxHeight / 2);

            // Draw boxes for electrons
            const maxElectrons = label.includes('s') ? 1 : (label.includes('p') ? 3 : (label.includes('d') ? 5 : 7));
            
            for (let box = 0; box < maxElectrons; box++) {
                const bx = currentX + box * (boxWidth + spacing);
                
                // Box
                this.ctx.strokeStyle = '#333333';
                this.ctx.lineWidth = 2;
                this.ctx.strokeRect(bx, currentY, boxWidth, boxHeight);

                // Draw arrows for electrons
                if (options.showArrows && electrons > 0) {
                    const electronsInBox = Math.min(2, electrons - box * 2);
                    
                    if (electronsInBox >= 1) {
                        // Up arrow
                        this.drawArrow(bx + boxWidth / 2 - 8, currentY + boxHeight / 2, 'up', '#1E88E5');
                    }
                    if (electronsInBox >= 2) {
                        // Down arrow
                        this.drawArrow(bx + boxWidth / 2 + 8, currentY + boxHeight / 2, 'down', '#E53935');
                    }
                }
            }

            currentX += maxElectrons * (boxWidth + spacing) + 30;
        });
    }

    parseElectronConfig(config) {
        const orbitals = [];
        const parts = config.split(/\s+/);
        
        parts.forEach(part => {
            const match = part.match(/(\d[spdf][⁰¹²³⁴⁵⁶⁷⁸⁹]+)/);
            if (match) {
                const label = match[1].replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/, '');
                const superscript = match[1].match(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/);
                const electrons = superscript ? this.parseSuperscript(superscript[0]) : 0;
                orbitals.push({ label, electrons });
            }
        });
        
        return orbitals;
    }

    parseSuperscript(sup) {
        const map = {'⁰':0,'¹':1,'²':2,'³':3,'⁴':4,'⁵':5,'⁶':6,'⁷':7,'⁸':8,'⁹':9};
        return parseInt(sup.split('').map(c => map[c] || c).join(''));
    }

    drawArrow(x, y, direction, color) {
        this.ctx.save();
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
        this.ctx.lineWidth = 2;

        if (direction === 'up') {
            // Arrow pointing up
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + 8);
            this.ctx.lineTo(x, y - 8);
            this.ctx.stroke();
            
            this.ctx.beginPath();
            this.ctx.moveTo(x, y - 8);
            this.ctx.lineTo(x - 3, y - 4);
            this.ctx.lineTo(x + 3, y - 4);
            this.ctx.closePath();
            this.ctx.fill();
        } else {
            // Arrow pointing down
            this.ctx.beginPath();
            this.ctx.moveTo(x, y - 8);
            this.ctx.lineTo(x, y + 8);
            this.ctx.stroke();
            
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + 8);
            this.ctx.lineTo(x - 3, y + 4);
            this.ctx.lineTo(x + 3, y + 4);
            this.ctx.closePath();
            this.ctx.fill();
        }

        this.ctx.restore();
    }

    renderPeriodicTrends(diagram, x, y, width, height, options) {
        // Simplified periodic table with trend arrows
        const cellSize = 40;
        const rows = 7;
        const cols = 18;

        // Draw simplified grid
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const cx = x - width / 2 + col * cellSize;
                const cy = y - height / 2 + row * cellSize;

                // Gradient based on trend (e.g., atomic radius)
                const trendValue = (cols - col + rows - row) / (cols + rows);
                const color = this.getGradientColor(trendValue, options.showGradient);

                this.ctx.fillStyle = color;
                this.ctx.fillRect(cx, cy, cellSize - 2, cellSize - 2);

                this.ctx.strokeStyle = '#CCCCCC';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(cx, cy, cellSize - 2, cellSize - 2);
            }
        }

        // Draw trend arrows
        if (options.showArrows) {
            // Atomic radius increases down and left
            this.drawTrendArrow(x + width / 2 - 50, y - height / 2 + 50, 'down', 'Increases', '#FF6B6B');
            this.drawTrendArrow(x + width / 2 - 100, y - height / 2 + 20, 'left', 'Increases', '#FF6B6B');

            // Electronegativity increases up and right
            this.drawTrendArrow(x - width / 2 + 50, y + height / 2 - 50, 'up', 'Increases', '#4ECDC4');
            this.drawTrendArrow(x - width / 2 + 20, y + height / 2 - 100, 'right', 'Increases', '#4ECDC4');
        }

        // Legend
        this.ctx.fillStyle = '#333333';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Periodic Trends: Atomic Radius, Electronegativity, Ionization Energy', x, y + height / 2 + 20);
    }

    getGradientColor(value, useGradient) {
        if (!useGradient) return '#E8F4F8';
        
        const r = Math.floor(255 * (1 - value));
        const g = Math.floor(200 * value);
        const b = Math.floor(255 * value);
        return `rgb(${r}, ${g}, ${b})`;
    }

    drawTrendArrow(x, y, direction, label, color) {
        this.ctx.save();
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
        this.ctx.lineWidth = 3;

        const arrowLength = 60;

        switch (direction) {
            case 'up':
                this.ctx.beginPath();
                this.ctx.moveTo(x, y);
                this.ctx.lineTo(x, y - arrowLength);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x, y - arrowLength);
                this.ctx.lineTo(x - 5, y - arrowLength + 10);
                this.ctx.lineTo(x + 5, y - arrowLength + 10);
                this.ctx.closePath();
                this.ctx.fill();
                this.ctx.fillText(label, x, y - arrowLength - 10);
                break;
            case 'down':
                this.ctx.beginPath();
                this.ctx.moveTo(x, y);
                this.ctx.lineTo(x, y + arrowLength);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x, y + arrowLength);
                this.ctx.lineTo(x - 5, y + arrowLength - 10);
                this.ctx.lineTo(x + 5, y + arrowLength - 10);
                this.ctx.closePath();
                this.ctx.fill();
                this.ctx.fillText(label, x, y + arrowLength + 15);
                break;
            case 'left':
                this.ctx.beginPath();
                this.ctx.moveTo(x, y);
                this.ctx.lineTo(x - arrowLength, y);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x - arrowLength, y);
                this.ctx.lineTo(x - arrowLength + 10, y - 5);
                this.ctx.lineTo(x - arrowLength + 10, y + 5);
                this.ctx.closePath();
                this.ctx.fill();
                this.ctx.textAlign = 'right';
                this.ctx.fillText(label, x - arrowLength - 10, y - 5);
                break;
            case 'right':
                this.ctx.beginPath();
                this.ctx.moveTo(x, y);
                this.ctx.lineTo(x + arrowLength, y);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + arrowLength, y);
                this.ctx.lineTo(x + arrowLength - 10, y - 5);
                this.ctx.lineTo(x + arrowLength - 10, y + 5);
                this.ctx.closePath();
                this.ctx.fill();
                this.ctx.textAlign = 'left';
                this.ctx.fillText(label, x + arrowLength + 10, y - 5);
                break;
        }

        this.ctx.restore();
    }

    // ========== CHEMICAL BONDING RENDERERS ==========

    renderLewisStructure(diagram, x, y, size, options) {
        const { centralAtom, bonds, lonePairs } = diagram;
        
        // Draw central atom
        this.ctx.fillStyle = '#333333';
        this.ctx.font = 'bold 20px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(centralAtom, x, y);

        // Draw bonds and connected atoms
        const bondLength = size * 0.3;
        const angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];

        bonds.forEach((bond, index) => {
            const angle = angles[index % angles.length];
            const endX = x + bondLength * Math.cos(angle);
            const endY = y + bondLength * Math.sin(angle);

            // Draw bond line(s)
            this.ctx.strokeStyle = '#333333';
            this.ctx.lineWidth = 2;

            if (bond.type === 'single') {
                this.ctx.beginPath();
                this.ctx.moveTo(x, y);
                this.ctx.lineTo(endX, endY);
                this.ctx.stroke();
            } else if (bond.type === 'double') {
                const perpX = -Math.sin(angle) * 3;
                const perpY = Math.cos(angle) * 3;
                
                this.ctx.beginPath();
                this.ctx.moveTo(x + perpX, y + perpY);
                this.ctx.lineTo(endX + perpX, endY + perpY);
                this.ctx.stroke();
                
                this.ctx.beginPath();
                this.ctx.moveTo(x - perpX, y - perpY);
                this.ctx.lineTo(endX - perpX, endY - perpY);
                this.ctx.stroke();
            } else if (bond.type === 'triple') {
                this.ctx.beginPath();
                this.ctx.moveTo(x, y);
                this.ctx.lineTo(endX, endY);
                this.ctx.stroke();
                
                const perpX = -Math.sin(angle) * 4;
                const perpY = Math.cos(angle) * 4;
                
                this.ctx.beginPath();
                this.ctx.moveTo(x + perpX, y + perpY);
                this.ctx.lineTo(endX + perpX, endY + perpY);
                this.ctx.stroke();
                
                this.ctx.beginPath();
                this.ctx.moveTo(x - perpX, y - perpY);
                this.ctx.lineTo(endX - perpX, endY - perpY);
                this.ctx.stroke();
            }

            // Draw connected atom
            this.ctx.fillStyle = '#333333';
            this.ctx.font = 'bold 18px Arial';
            this.ctx.fillText(bond.atom2, endX, endY);

            // Draw electron dots around atom
            if (options.showLonePairs) {
                this.drawElectronDots(endX, endY, 2, angle + Math.PI);
            }
        });

        // Draw lone pairs on central atom
        if (options.showLonePairs && lonePairs[centralAtom]) {
            const lpCount = lonePairs[centralAtom];
            const usedAngles = bonds.map((_, i) => angles[i % angles.length]);
            const availableAngles = angles.filter(a => !usedAngles.includes(a));
            
            for (let i = 0; i < Math.min(lpCount, availableAngles.length); i++) {
                this.drawElectronDots(x, y, 2, availableAngles[i]);
            }
        }
    }

    drawElectronDots(x, y, pairCount, angle) {
        const distance = 25;
        const dotRadius = 2.5;
        
        for (let i = 0; i < pairCount; i++) {
            const offset = (i - pairCount / 2 + 0.5) * 8;
            const perpAngle = angle + Math.PI / 2;
            const dx = x + distance * Math.cos(angle) + offset * Math.cos(perpAngle);
            const dy = y + distance * Math.sin(angle) + offset * Math.sin(perpAngle);
            
            this.ctx.fillStyle = '#1E88E5';
            this.ctx.beginPath();
            this.ctx.arc(dx, dy, dotRadius, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    renderVSEPRGeometry(diagram, x, y, size, options) {
        const { geometry, molecule } = diagram;
        
        // Draw central atom
        this.drawAtom3D('C', x, y, 0, 30, options.show3D);

        // Calculate positions based on geometry
        const bondLength = size * 0.8;
        let positions = [];

        switch (geometry) {
            case 'linear':
                positions = [
                    [bondLength, 0, 0],
                    [-bondLength, 0, 0]
                ];
                break;
            case 'trigonal_planar':
                positions = [
                    [bondLength, 0, 0],
                    [bondLength * Math.cos(2 * Math.PI / 3), bondLength * Math.sin(2 * Math.PI / 3), 0],
                    [bondLength * Math.cos(4 * Math.PI / 3), bondLength * Math.sin(4 * Math.PI / 3), 0]
                ];
                break;
            case 'tetrahedral':
                const tetAngle = Math.acos(-1/3);
                positions = [
                    [0, bondLength, 0],
                    [bondLength * Math.sin(tetAngle), -bondLength * Math.cos(tetAngle), 0],
                    [-bondLength * Math.sin(tetAngle) * Math.cos(Math.PI/3), -bondLength * Math.cos(tetAngle), bondLength * Math.sin(tetAngle) * Math.sin(Math.PI/3)],
                    [-bondLength * Math.sin(tetAngle) * Math.cos(Math.PI/3), -bondLength * Math.cos(tetAngle), -bondLength * Math.sin(tetAngle) * Math.sin(Math.PI/3)]
                ];
                break;
            case 'trigonal_pyramidal':
                positions = [
                    [0, bondLength * 0.8, 0],
                    [bondLength * 0.7, -bondLength * 0.4, 0],
                    [-bondLength * 0.7, -bondLength * 0.4, 0]
                ];
                break;
            case 'bent':
                positions = [
                    [bondLength * 0.7, bondLength * 0.5, 0],
                    [-bondLength * 0.7, bondLength * 0.5, 0]
                ];
                break;
        }

        // Apply rotation if 3D
        if (options.show3D) {
            const rotX = (options.rotationX || 20) * Math.PI / 180;
            const rotY = (options.rotationY || 30) * Math.PI / 180;
            positions = positions.map(pos => this.rotatePoint3D(pos, rotX, rotY, 0));
        }

        // Project to 2D
        positions = positions.map(pos => this.projectTo2D(pos, x, y));

        // Draw bonds
        positions.forEach(pos => {
            this.ctx.strokeStyle = '#555555';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(pos[0], pos[1]);
            this.ctx.stroke();

            // Draw peripheral atoms
            this.drawAtom3D('H', pos[0], pos[1], 0, 20, options.show3D);
        });

        // Show bond angles
        if (options.showBondAngles && positions.length >= 2) {
            const angle = this.calculateAngle(positions[0], [x, y], positions[1]);
            
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath();
            this.ctx.arc(x, y, 40, 
                Math.atan2(positions[0][1] - y, positions[0][0] - x),
                Math.atan2(positions[1][1] - y, positions[1][0] - x)
            );
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`${angle.toFixed(1)}°`, x, y + 60);
        }
    }

    rotatePoint3D(point, rotX, rotY, rotZ) {
        let [x, y, z] = point;

        // Rotate around X
        let y1 = y * Math.cos(rotX) - z * Math.sin(rotX);
        let z1 = y * Math.sin(rotX) + z * Math.cos(rotX);
        y = y1;
        z = z1;

        // Rotate around Y
        let x1 = x * Math.cos(rotY) + z * Math.sin(rotY);
        z1 = -x * Math.sin(rotY) + z * Math.cos(rotY);
        x = x1;
        z = z1;

        return [x, y, z];
    }

    projectTo2D(point3D, centerX, centerY) {
        const [x, y, z] = point3D;
        const perspective = 500;
        const scale = perspective / (perspective + z);
        return [centerX + x * scale, centerY - y * scale];
    }

    drawAtom3D(element, x, y, z, radius, is3D) {
        const props = { C: '#909090', H: '#FFFFFF', O: '#FF0D0D', N: '#3050F8' };
        const color = props[element] || '#FF00FF';

        const gradient = this.ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, 0, x, y, radius);
        gradient.addColorStop(0, this.lightenColor(color, 40));
        gradient.addColorStop(1, color);

        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.strokeStyle = this.darkenColor(color, 30);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.fillStyle = element === 'H' ? '#000000' : '#FFFFFF';
        this.ctx.font = `bold ${Math.floor(radius * 0.8)}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(element, x, y);
    }

    calculateAngle(p1, center, p2) {
        const angle1 = Math.atan2(p1[1] - center[1], p1[0] - center[0]);
        const angle2 = Math.atan2(p2[1] - center[1], p2[0] - center[0]);
        let diff = Math.abs(angle1 - angle2) * 180 / Math.PI;
        if (diff > 180) diff = 360 - diff;
        return diff;
    }

    renderPolarBonds(diagram, x, y, size, options) {
        const { molecule, electronegativity } = diagram;
        
        // Draw bond
        const bondLength = size * 0.8;
        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(x - bondLength / 2, y);
        this.ctx.lineTo(x + bondLength / 2, y);
        this.ctx.stroke();

        // Draw atoms
        const atoms = Object.keys(electronegativity);
        this.drawAtom3D(atoms[0], x - bondLength / 2, y, 0, 30, false);
        this.drawAtom3D(atoms[1], x + bondLength / 2, y, 0, 30, false);

        // Show dipole arrow
        if (options.showDipole) {
            const moreEN = electronegativity[atoms[0]] > electronegativity[atoms[1]] ? atoms[0] : atoms[1];
            const direction = moreEN === atoms[0] ? -1 : 1;

            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.lineWidth = 3;

            const arrowY = y + 60;
            const arrowStart = x - direction * bondLength / 2 + direction * 40;
            const arrowEnd = x + direction * bondLength / 2 - direction * 40;

            // Arrow shaft
            this.ctx.beginPath();
            this.ctx.moveTo(arrowStart, arrowY);
            this.ctx.lineTo(arrowEnd, arrowY);
            this.ctx.stroke();

            // Arrow head
            this.ctx.beginPath();
            this.ctx.moveTo(arrowEnd, arrowY);
            this.ctx.lineTo(arrowEnd - direction * 10, arrowY - 5);
            this.ctx.lineTo(arrowEnd - direction * 10, arrowY + 5);
            this.ctx.closePath();
            this.ctx.fill();

            // Plus and minus
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('⊕', arrowStart, arrowY - 20);
            this.ctx.fillText('⊖', arrowEnd, arrowY - 20);
        }

        // Show delta charges
        if (options.showDelta) {
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '14px Arial';
            this.ctx.textAlign = 'center';
            
            const delta = electronegativity[atoms[1]] - electronegativity[atoms[0]];
            const sign1 = delta > 0 ? 'δ+' : 'δ-';
            const sign2 = delta > 0 ? 'δ-' : 'δ+';
            
            this.ctx.fillText(sign1, x - bondLength / 2, y - 40);
            this.ctx.fillText(sign2, x + bondLength / 2, y - 40);
        }

        // Show electronegativity values
        if (options.showElectronegativity) {
            this.ctx.fillStyle = '#333333';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`EN: ${electronegativity[atoms[0]]}`, x - bondLength / 2, y + 50);
            this.ctx.fillText(`EN: ${electronegativity[atoms[1]]}`, x + bondLength / 2, y + 50);
        }
    }

    // ========== STOICHIOMETRY RENDERERS ==========

    renderStoichiometryTriangle(diagram, x, y, size, options) {
        const { type, variables } = diagram;
        
        // Draw triangle
        const height = size * Math.sqrt(3) / 2;
        const points = [
            [x, y - height / 2],           // Top
            [x - size / 2, y + height / 2], // Bottom left
            [x + size / 2, y + height / 2]  // Bottom right
        ];

        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(points[0][0], points[0][1]);
        points.slice(1).forEach(p => this.ctx.lineTo(p[0], p[1]));
        this.ctx.closePath();
        this.ctx.stroke();

        this.ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
        this.ctx.fill();

        // Add variable labels
        if (options.showLabels) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 18px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';

            // Top
            this.ctx.fillText(variables[0], x, y - height / 2 - 25);
            
            // Bottom left
            this.ctx.textAlign = 'right';
            this.ctx.fillText(variables[1], x - size / 2 - 25, y + height / 2);
            
            // Bottom right
            this.ctx.textAlign = 'left';
            this.ctx.fillText(variables[2], x + size / 2 + 25, y + height / 2);
        }

        // Add formulas
        if (options.showFormulas) {
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'center';

            if (type === 'mole_triangle') {
                // Left side: mass = moles × Mr
                this.ctx.save();
                this.ctx.translate(x - size / 4, y);
                this.ctx.rotate(-Math.PI / 3);
                this.ctx.fillText('× Mr', 0, 0);
                this.ctx.restore();

                // Right side: mass = moles × Mr
                this.ctx.save();
                this.ctx.translate(x + size / 4, y);
                this.ctx.rotate(Math.PI / 3);
                this.ctx.fillText('÷ moles', 0, 0);
                this.ctx.restore();

                // Bottom: moles = mass ÷ Mr
                this.ctx.fillText('÷ Mr', x, y + height / 2 + 20);
            } else if (type === 'gas_triangle') {
                this.ctx.save();
                this.ctx.translate(x - size / 4, y);
                this.ctx.rotate(-Math.PI / 3);
                this.ctx.fillText('× 24', 0, 0);
                this.ctx.restore();

                this.ctx.save();
                this.ctx.translate(x + size / 4, y);
                this.ctx.rotate(Math.PI / 3);
                this.ctx.fillText('÷ moles', 0, 0);
                this.ctx.restore();

                this.ctx.fillText('÷ 24', x, y + height / 2 + 20);
            } else if (type === 'particle_triangle') {
                this.ctx.save();
                this.ctx.translate(x - size / 4, y);
                this.ctx.rotate(-Math.PI / 3);
                this.ctx.fillText('× Nₐ', 0, 0);
                this.ctx.restore();

                this.ctx.save();
                this.ctx.translate(x + size / 4, y);
                this.ctx.rotate(Math.PI / 3);
                this.ctx.fillText('÷ moles', 0, 0);
                this.ctx.restore();

                this.ctx.fillText('÷ Nₐ', x, y + height / 2 + 20);
            }
        }

        // Show units
        if (options.showUnits) {
            this.ctx.fillStyle = '#999999';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';

            if (type === 'mole_triangle') {
                this.ctx.fillText('(g)', x, y - height / 2 - 40);
                this.ctx.fillText('(mol)', x - size / 2 - 60, y + height / 2);
                this.ctx.fillText('(g/mol)', x + size / 2 + 60, y + height / 2);
            } else if (type === 'gas_triangle') {
                this.ctx.fillText('(dm³)', x, y - height / 2 - 40);
                this.ctx.fillText('(mol)', x - size / 2 - 60, y + height / 2);
                this.ctx.fillText('(dm³/mol)', x + size / 2 + 60, y + height / 2);
            } else if (type === 'particle_triangle') {
                this.ctx.fillText('(mol)', x, y - height / 2 - 40);
                this.ctx.fillText('(particles)', x - size / 2 - 80, y + height / 2);
                this.ctx.fillText('(6.022×10²³)', x + size / 2 + 80, y + height / 2);
            }
        }
    }

    renderLimitingReagent(diagram, x, y, width, height, options) {
        const { reaction, H2_amount, Cl2_amount } = diagram;
        
        // Balanced equation
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(reaction, x, y - height / 2 + 20);

        // Reactant amounts
        const particleSize = 20;
        const spacing = 30;

        // H2 particles
        const h2X = x - width / 4;
        this.ctx.fillStyle = '#333333';
        this.ctx.font = '14px Arial';
        this.ctx.fillText(`H₂: ${H2_amount} moles`, h2X, y - height / 3);

        if (options.showParticles) {
            for (let i = 0; i < H2_amount; i++) {
                const px = h2X + (i % 3 - 1) * spacing;
                const py = y - height / 3 + 30 + Math.floor(i / 3) * spacing;
                
                this.ctx.fillStyle = '#3498DB';
                this.ctx.beginPath();
                this.ctx.arc(px - 8, py, particleSize / 2, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.beginPath();
                this.ctx.arc(px + 8, py, particleSize / 2, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        // Cl2 particles
        const cl2X = x + width / 4;
        this.ctx.fillStyle = '#333333';
        this.ctx.fillText(`Cl₂: ${Cl2_amount} moles`, cl2X, y - height / 3);

        if (options.showParticles) {
            for (let i = 0; i < Cl2_amount; i++) {
                const px = cl2X + (i % 3 - 1) * spacing;
                const py = y - height / 3 + 30 + Math.floor(i / 3) * spacing;
                
                this.ctx.fillStyle = '#2ECC71';
                this.ctx.beginPath();
                this.ctx.arc(px - 8, py, particleSize / 2, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.beginPath();
                this.ctx.arc(px + 8, py, particleSize / 2, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        // Calculation
        if (options.showCalculations) {
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            
            const limiting = H2_amount < Cl2_amount ? 'H₂' : 'Cl₂';
            const excess = limiting === 'H₂' ? 'Cl₂' : 'H₂';
            
            this.ctx.fillText(`Limiting Reagent: ${limiting}`, x, y + height / 3);
            
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '13px Arial';
            this.ctx.fillText(`Excess Reagent: ${excess}`, x, y + height / 3 + 25);
        }

        // Show excess
        if (options.showExcess) {
            const excessAmount = Math.abs(H2_amount - Cl2_amount);
            const productAmount = Math.min(H2_amount, Cl2_amount) * 2;
            
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`Excess: ${excessAmount} moles`, x, y + height / 3 + 45);
            this.ctx.fillText(`Product (HCl): ${productAmount} moles`, x, y + height / 3 + 65);
        }
    }

    renderYieldDiagram(diagram, x, y, width, height, options) {
        const { theoretical, actual } = diagram;
        const percentYield = (actual / theoretical * 100).toFixed(1);

        const barWidth = width * 0.3;
        const maxHeight = height * 0.7;

        // Theoretical yield bar
        const theoreticalHeight = maxHeight;
        const theoreticalX = x - barWidth - 20;
        const theoreticalY = y + height / 2 - theoreticalHeight;

        this.ctx.fillStyle = '#3498DB';
        this.ctx.fillRect(theoreticalX, theoreticalY, barWidth, theoreticalHeight);
        
        this.ctx.strokeStyle = '#2980B9';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(theoreticalX, theoreticalY, barWidth, theoreticalHeight);

        // Actual yield bar
        const actualHeight = (actual / theoretical) * maxHeight;
        const actualX = x + 20;
        const actualY = y + height / 2 - actualHeight;

        this.ctx.fillStyle = '#2ECC71';
        this.ctx.fillRect(actualX, actualY, barWidth, actualHeight);
        
        this.ctx.strokeStyle = '#27AE60';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(actualX, actualY, barWidth, actualHeight);

        // Labels
        if (options.showBars) {
            this.ctx.fillStyle = '#333333';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            
            this.ctx.fillText('Theoretical', theoreticalX + barWidth / 2, y + height / 2 + 25);
            this.ctx.fillText(`${theoretical} g`, theoreticalX + barWidth / 2, y + height / 2 + 45);
            
            this.ctx.fillText('Actual', actualX + barWidth / 2, y + height / 2 + 25);
            this.ctx.fillText(`${actual} g`, actualX + barWidth / 2, y + height / 2 + 45);
        }

        // Percent yield
        if (options.showPercentage) {
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 18px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`Percent Yield: ${percentYield}%`, x, y - height / 2 + 30);
            
            // Formula
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '13px Arial';
            this.ctx.fillText('% Yield = (Actual / Theoretical) × 100%', x, y - height / 2 + 55);
        }
    }

    // ========== PLACEHOLDER AND UTILITY METHODS ==========

    renderPlaceholder(diagram, x, y, width, height) {
        // Border
        this.ctx.strokeStyle = '#CCCCCC';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([10, 5]);
        this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);
        this.ctx.setLineDash([]);

        // Background
        this.ctx.fillStyle = '#F5F5F5';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, height);

        // Text
        this.ctx.fillStyle = '#999999';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(`${diagram.name}`, x, y - 10);
        
        this.ctx.font = '13px Arial';
        this.ctx.fillText('(Renderer in development)', x, y + 15);
    }

    renderError(diagram, x, y, width, height, errorMsg) {
        // Error box
        this.ctx.fillStyle = '#FFEBEE';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, height);
        
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);

        // Error icon
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.font = 'bold 40px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('⚠', x, y - 30);

        // Error message
        this.ctx.fillStyle = '#C0392B';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Rendering Error', x, y + 10);
        
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#555555';
        const maxWidth = width * 0.9;
        this.wrapText(errorMsg, x, y + 35, maxWidth, 16);
    }

    wrapText(text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        let currentY = y;

        words.forEach((word, index) => {
            const testLine = line + word + ' ';
            const metrics = this.ctx.measureText(testLine);
            
            if (metrics.width > maxWidth && index > 0) {
                this.ctx.fillText(line, x, currentY);
                line = word + ' ';
                currentY += lineHeight;
            } else {
                line = testLine;
            }
        });
        
        this.ctx.fillText(line, x, currentY);
    }

    drawTitle(title, x, y) {
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 22px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(title, x, y);
    }

drawDiagramInfo(diagram, x, y, options) {
        // Info box background
        this.ctx.fillStyle = 'rgba(236, 240, 241, 0.95)';
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.roundRect(x, y, 350, 90, 8);
        this.ctx.fill();
        this.ctx.stroke();

        // Info text
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'left';

        const category = diagram.category || 'Chemistry';
        const type = diagram.type || 'diagram';
        
        this.ctx.fillText(`Category: ${category}`, x + 15, y + 20);
        this.ctx.fillText(`Type: ${type.replace(/_/g, ' ')}`, x + 15, y + 40);
        
        if (diagram.formula) {
            this.ctx.fillText(`Formula: ${diagram.formula}`, x + 15, y + 60);
        }

        // Analogy hint
        const analogies = ChemistryDiagramsRegistry.getAnalogies(diagram.name);
        if (analogies.length > 0) {
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.font = 'italic 11px Arial';
            this.ctx.fillText(`💡 Analogy: ${analogies[0]}`, x + 15, y + 75);
        }
    }

    drawAxes(x, y, size) {
        this.ctx.strokeStyle = '#999999';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([5, 5]);

        // X axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - size, y);
        this.ctx.lineTo(x + size, y);
        this.ctx.stroke();

        // Y axis
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - size);
        this.ctx.lineTo(x, y + size);
        this.ctx.stroke();

        // Z axis (diagonal)
        this.ctx.beginPath();
        this.ctx.moveTo(x - size * 0.7, y + size * 0.7);
        this.ctx.lineTo(x + size * 0.7, y - size * 0.7);
        this.ctx.stroke();

        this.ctx.setLineDash([]);

        // Labels
        this.ctx.fillStyle = '#666666';
        this.ctx.font = 'italic 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('x', x + size + 15, y);
        this.ctx.fillText('y', x, y - size - 10);
        this.ctx.fillText('z', x + size * 0.7 + 15, y - size * 0.7);
    }

    lightenColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min(255, (num >> 16) + amt);
        const G = Math.min(255, ((num >> 8) & 0x00FF) + amt);
        const B = Math.min(255, (num & 0x0000FF) + amt);
        return `#${(0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
    }

    darkenColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.max(0, (num >> 16) - amt);
        const G = Math.max(0, ((num >> 8) & 0x00FF) - amt);
        const B = Math.max(0, (num & 0x0000FF) - amt);
        return `#${(0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
    }

// ========== COMPLETE CHEMISTRY DIAGRAM RENDERERS ==========

    renderHybridization(diagram, x, y, width, height, options) {
        const { hybridType, atom } = diagram;
        
        // Energy level diagram
        const levelHeight = height * 0.15;
        const levelWidth = width * 0.15;
        const spacing = width * 0.12;

        // Atomic orbitals (before hybridization)
        const atomicY = y - height / 3;
        
        this.ctx.fillStyle = '#333333';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Atomic Orbitals', x - width / 3, atomicY - 40);

        // Draw 2s orbital
        const s2Y = atomicY;
        this.drawOrbitalBox(x - width / 3 - levelWidth / 2, s2Y, levelWidth, 30, '2s', '#3498DB', options.showOrbitals);

        // Draw 2p orbitals
        const p2Y = atomicY - levelHeight;
        for (let i = 0; i < 3; i++) {
            this.drawOrbitalBox(
                x - width / 3 - levelWidth * 1.5 + i * levelWidth * 0.7,
                p2Y,
                levelWidth * 0.6,
                30,
                i === 0 ? '2p' : '',
                '#E74C3C',
                options.showOrbitals && i === 0
            );
        }

        // Arrow showing hybridization
        this.ctx.strokeStyle = '#2ECC71';
        this.ctx.fillStyle = '#2ECC71';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 6, y - height / 3);
        this.ctx.lineTo(x, y - height / 3);
        this.ctx.stroke();
        
        // Arrow head
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - height / 3);
        this.ctx.lineTo(x - 10, y - height / 3 - 5);
        this.ctx.lineTo(x - 10, y - height / 3 + 5);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.fillStyle = '#2ECC71';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillText('Hybridization', x - width / 12, y - height / 3 - 15);

        // Hybrid orbitals (after hybridization)
        const hybridY = y - height / 3;
        
        this.ctx.fillStyle = '#333333';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText(`${hybridType.toUpperCase()} Hybrid Orbitals`, x + width / 3, atomicY - 40);

        let numHybrid = 0;
        switch(hybridType) {
            case 'sp': numHybrid = 2; break;
            case 'sp2': numHybrid = 3; break;
            case 'sp3': numHybrid = 4; break;
        }

        const hybridColor = '#9B59B6';
        for (let i = 0; i < numHybrid; i++) {
            this.drawOrbitalBox(
                x + width / 3 - levelWidth * (numHybrid / 2 - 0.5) + i * levelWidth * 0.7,
                hybridY - levelHeight * 0.5,
                levelWidth * 0.6,
                30,
                i === 0 ? hybridType : '',
                hybridColor,
                options.showOrbitals && i === 0
            );
        }

        // Energy scale
        if (options.showEnergy) {
            const scaleX = x - width / 2 + 30;
            const scaleTop = atomicY - levelHeight * 2;
            const scaleBottom = atomicY + levelHeight;

            this.ctx.strokeStyle = '#999999';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(scaleX, scaleTop);
            this.ctx.lineTo(scaleX, scaleBottom);
            this.ctx.stroke();

            // Arrow
            this.ctx.beginPath();
            this.ctx.moveTo(scaleX, scaleTop);
            this.ctx.lineTo(scaleX - 5, scaleTop + 10);
            this.ctx.moveTo(scaleX, scaleTop);
            this.ctx.lineTo(scaleX + 5, scaleTop + 10);
            this.ctx.stroke();

            this.ctx.fillStyle = '#666666';
            this.ctx.font = '12px Arial';
            this.ctx.save();
            this.ctx.translate(scaleX - 20, (scaleTop + scaleBottom) / 2);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Energy', 0, 0);
            this.ctx.restore();
        }

        // Orbital shapes visualization
        const shapeY = y + height / 4;
        
        this.ctx.fillStyle = '#333333';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Orbital Shapes', x, shapeY - 30);

        // Draw simplified orbital shapes
        for (let i = 0; i < numHybrid; i++) {
            const angle = (i / numHybrid) * Math.PI * 2;
            const radius = 60;
            const ox = x + Math.cos(angle) * radius * 1.5;
            const oy = shapeY + Math.sin(angle) * radius * 1.5;

            // Hybrid orbital lobe
            const gradient = this.ctx.createRadialGradient(ox, oy, 0, ox, oy, 25);
            gradient.addColorStop(0, 'rgba(155, 89, 182, 0.8)');
            gradient.addColorStop(1, 'rgba(155, 89, 182, 0.2)');
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.ellipse(ox + Math.cos(angle) * 15, oy + Math.sin(angle) * 15, 25, 20, angle, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.strokeStyle = '#9B59B6';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        }
    }

    drawOrbitalBox(x, y, width, height, label, color, showElectrons) {
        // Box
        this.ctx.fillStyle = this.lightenColor(color, 60);
        this.ctx.fillRect(x, y, width, height);
        
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x, y, width, height);

        // Label
        if (label) {
            this.ctx.fillStyle = '#333333';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(label, x + 5, y - 5);
        }

        // Electrons
        if (showElectrons) {
            this.drawArrow(x + width / 2 - 5, y + height / 2, 'up', color);
            this.drawArrow(x + width / 2 + 5, y + height / 2, 'down', this.darkenColor(color, 20));
        }
    }

    renderSigmaPiBonds(diagram, x, y, size, options) {
        const { molecule, bondTypes } = diagram;

        // Draw ethene structure C=C with sigma and pi bonds
        const bondLength = size * 0.5;
        
        // Carbon atoms
        this.drawAtom3D('C', x - bondLength / 2, y, 0, 35, false);
        this.drawAtom3D('C', x + bondLength / 2, y, 0, 35, false);

        // Sigma bond (along bond axis)
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(x - bondLength / 2 + 35, y);
        this.ctx.lineTo(x + bondLength / 2 - 35, y);
        this.ctx.stroke();

        this.ctx.fillStyle = '#3498DB';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('σ bond', x, y - 50);

        // Pi bond (above and below)
        if (options.show3D) {
            // Upper lobe
            this.ctx.fillStyle = 'rgba(231, 76, 60, 0.4)';
            this.ctx.beginPath();
            this.ctx.ellipse(x, y - 40, bondLength / 2 - 20, 25, 0, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            // Lower lobe
            this.ctx.fillStyle = 'rgba(231, 76, 60, 0.4)';
            this.ctx.beginPath();
            this.ctx.ellipse(x, y + 40, bondLength / 2 - 20, 25, 0, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.stroke();

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillText('π bond', x + bondLength / 2 + 40, y);
        }

        // Show orbital overlap
        if (options.showOverlap) {
            const infoY = y + size * 0.6;
            
            this.ctx.fillStyle = '#333333';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('σ bond: head-on overlap (sp² + sp²)', x, infoY);
            this.ctx.fillText('π bond: side-by-side overlap (p + p)', x, infoY + 20);
        }

        // Hydrogen atoms for complete ethene
        const hRadius = 25;
        const hAngle = Math.PI / 6;
        
        // Left side H atoms
        this.drawAtom3D('H', x - bondLength / 2 - 70, y - 50, 0, hRadius, false);
        this.drawAtom3D('H', x - bondLength / 2 - 70, y + 50, 0, hRadius, false);
        
        // Right side H atoms
        this.drawAtom3D('H', x + bondLength / 2 + 70, y - 50, 0, hRadius, false);
        this.drawAtom3D('H', x + bondLength / 2 + 70, y + 50, 0, hRadius, false);

        // C-H bonds
        this.ctx.strokeStyle = '#555555';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x - bondLength / 2, y);
        this.ctx.lineTo(x - bondLength / 2 - 45, y - 50);
        this.ctx.stroke();
        
        this.ctx.beginPath();
        this.ctx.moveTo(x - bondLength / 2, y);
        this.ctx.lineTo(x - bondLength / 2 - 45, y + 50);
        this.ctx.stroke();
        
        this.ctx.beginPath();
        this.ctx.moveTo(x + bondLength / 2, y);
        this.ctx.lineTo(x + bondLength / 2 + 45, y - 50);
        this.ctx.stroke();
        
        this.ctx.beginPath();
        this.ctx.moveTo(x + bondLength / 2, y);
        this.ctx.lineTo(x + bondLength / 2 + 45, y + 50);
        this.ctx.stroke();
    }

    renderResonance(diagram, x, y, width, options) {
        const { molecule, structures } = diagram;

        const structureWidth = width / (structures + 0.5);
        
        // Draw resonance structures
        for (let i = 0; i < structures; i++) {
            const sx = x + i * structureWidth;
            
            // Carbonate ion example: CO3^2-
            const center = { x: sx, y: y };
            const radius = 60;
            
            // Central carbon
            this.ctx.fillStyle = '#333333';
            this.ctx.font = 'bold 18px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText('C', center.x, center.y);

            // Three oxygens
            for (let j = 0; j < 3; j++) {
                const angle = (j / 3) * Math.PI * 2 - Math.PI / 2;
                const ox = center.x + radius * Math.cos(angle);
                const oy = center.y + radius * Math.sin(angle);

                this.ctx.fillText('O', ox, oy);

                // Bonds - rotate which one is double
                const isDouble = j === i % 3;
                
                if (isDouble) {
                    // Double bond
                    const perpAngle = angle + Math.PI / 2;
                    const offset = 3;
                    
                    this.ctx.strokeStyle = '#333333';
                    this.ctx.lineWidth = 2;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(
                        center.x + Math.cos(perpAngle) * offset,
                        center.y + Math.sin(perpAngle) * offset
                    );
                    this.ctx.lineTo(
                        ox + Math.cos(perpAngle) * offset,
                        oy + Math.sin(perpAngle) * offset
                    );
                    this.ctx.stroke();
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(
                        center.x - Math.cos(perpAngle) * offset,
                        center.y - Math.sin(perpAngle) * offset
                    );
                    this.ctx.lineTo(
                        ox - Math.cos(perpAngle) * offset,
                        oy - Math.sin(perpAngle) * offset
                    );
                    this.ctx.stroke();
                } else {
                    // Single bond
                    this.ctx.strokeStyle = '#333333';
                    this.ctx.lineWidth = 2;
                    this.ctx.beginPath();
                    this.ctx.moveTo(center.x, center.y);
                    this.ctx.lineTo(ox, oy);
                    this.ctx.stroke();

                    // Show negative charge
                    this.ctx.fillStyle = '#E74C3C';
                    this.ctx.font = 'bold 14px Arial';
                    this.ctx.fillText('−', ox + radius * 0.3 * Math.cos(angle), oy + radius * 0.3 * Math.sin(angle));
                }
            }

            // Overall 2- charge
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('2−', center.x + radius + 20, center.y - radius + 10);

            // Resonance arrows
            if (options.showArrows && i < structures - 1) {
                const arrowX = sx + structureWidth / 2;
                const arrowY = y;
                
                this.ctx.strokeStyle = '#2ECC71';
                this.ctx.fillStyle = '#2ECC71';
                this.ctx.lineWidth = 2;
                
                // Double-headed arrow
                this.ctx.beginPath();
                this.ctx.moveTo(arrowX - 20, arrowY);
                this.ctx.lineTo(arrowX + 20, arrowY);
                this.ctx.stroke();
                
                // Left head
                this.ctx.beginPath();
                this.ctx.moveTo(arrowX - 20, arrowY);
                this.ctx.lineTo(arrowX - 15, arrowY - 5);
                this.ctx.lineTo(arrowX - 15, arrowY + 5);
                this.ctx.closePath();
                this.ctx.fill();
                
                // Right head
                this.ctx.beginPath();
                this.ctx.moveTo(arrowX + 20, arrowY);
                this.ctx.lineTo(arrowX + 15, arrowY - 5);
                this.ctx.lineTo(arrowX + 15, arrowY + 5);
                this.ctx.closePath();
                this.ctx.fill();
            }
        }

        // Resonance hybrid
        if (options.showHybrid) {
            const hybridY = y + 150;
            
            this.ctx.fillStyle = '#333333';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Resonance Hybrid:', x + width / 2, hybridY - 80);

            const center = { x: x + width / 2, y: hybridY };
            const radius = 60;
            
            // Central carbon
            this.ctx.fillStyle = '#333333';
            this.ctx.font = 'bold 18px Arial';
            this.ctx.fillText('C', center.x, center.y);

            // Three equivalent oxygens with partial charges
            for (let j = 0; j < 3; j++) {
                const angle = (j / 3) * Math.PI * 2 - Math.PI / 2;
                const ox = center.x + radius * Math.cos(angle);
                const oy = center.y + radius * Math.sin(angle);

                this.ctx.fillText('O', ox, oy);

                // Intermediate bond (1.33 order)
                this.ctx.strokeStyle = '#333333';
                this.ctx.lineWidth = 2;
                this.ctx.setLineDash([4, 2]);
                this.ctx.beginPath();
                this.ctx.moveTo(center.x, center.y);
                this.ctx.lineTo(ox, oy);
                this.ctx.stroke();
                this.ctx.setLineDash([]);

                // Partial charge
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.font = '12px Arial';
                this.ctx.fillText('⅔−', ox + radius * 0.3 * Math.cos(angle), oy + radius * 0.3 * Math.sin(angle));
            }

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('2−', center.x + radius + 20, center.y - radius + 10);
        }
    }

    renderOrganicFormula(diagram, x, y, size, options) {
        const { molecule, formula, type } = diagram;

        if (type === 'skeletal_formula') {
            // Skeletal formula (e.g., hexane zigzag)
            const { carbons } = diagram;
            const bondLength = size / (carbons - 1);
            const angle = Math.PI / 6; // 30 degrees

            this.ctx.strokeStyle = '#333333';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();

            for (let i = 0; i < carbons; i++) {
                const direction = i % 2 === 0 ? 1 : -1;
                const px = x - size / 2 + i * bondLength;
                const py = y + direction * bondLength * Math.sin(angle);

                if (i === 0) {
                    this.ctx.moveTo(px, py);
                } else {
                    this.ctx.lineTo(px, py);
                }

                // Implicit H's at ends
                if ((i === 0 || i === carbons - 1) && options.showLabels) {
                    this.ctx.fillStyle = '#555555';
                    this.ctx.font = '13px Arial';
                    this.ctx.textAlign = 'center';
                    const hx = i === 0 ? px - 20 : px + 20;
                    this.ctx.fillText('CH₃', hx, py + 5);
                }
            }

            this.ctx.stroke();

        } else {
            // Structural formula (ethanol example)
            const atoms = [
                { element: 'C', x: x - 100, y: y },
                { element: 'C', x: x, y: y },
                { element: 'O', x: x + 80, y: y },
                { element: 'H', x: x + 140, y: y }
            ];

            // Bonds
            this.ctx.strokeStyle = '#333333';
            this.ctx.lineWidth = 3;
            
            // C-C bond
            this.ctx.beginPath();
            this.ctx.moveTo(atoms[0].x + 20, atoms[0].y);
            this.ctx.lineTo(atoms[1].x - 20, atoms[1].y);
            this.ctx.stroke();
            
            // C-O bond
            this.ctx.beginPath();
            this.ctx.moveTo(atoms[1].x + 20, atoms[1].y);
            this.ctx.lineTo(atoms[2].x - 20, atoms[2].y);
            this.ctx.stroke();
            
            // O-H bond
            this.ctx.beginPath();
            this.ctx.moveTo(atoms[2].x + 20, atoms[2].y);
            this.ctx.lineTo(atoms[3].x - 15, atoms[3].y);
            this.ctx.stroke();

            // Draw atoms
            atoms.forEach(atom => {
                this.ctx.fillStyle = '#333333';
                this.ctx.font = 'bold 20px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(atom.element, atom.x, atom.y);
            });

            // Hydrogens if requested
            if (options.showHydrogens) {
                // CH3 group
                this.ctx.font = '14px Arial';
                this.ctx.fillText('H', atoms[0].x - 25, atoms[0].y - 30);
                this.ctx.fillText('H', atoms[0].x - 35, atoms[0].y + 10);
                this.ctx.fillText('H', atoms[0].x - 25, atoms[0].y + 40);
                
                this.ctx.strokeStyle = '#555555';
                this.ctx.lineWidth = 1.5;
                this.ctx.beginPath();
                this.ctx.moveTo(atoms[0].x, atoms[0].y);
                this.ctx.lineTo(atoms[0].x - 20, atoms[0].y - 25);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(atoms[0].x, atoms[0].y);
                this.ctx.lineTo(atoms[0].x - 30, atoms[0].y + 5);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(atoms[0].x, atoms[0].y);
                this.ctx.lineTo(atoms[0].x - 20, atoms[0].y + 35);
                this.ctx.stroke();

                // CH2 group
                this.ctx.fillText('H', atoms[1].x, atoms[1].y - 35);
                this.ctx.fillText('H', atoms[1].x, atoms[1].y + 35);
                
                this.ctx.beginPath();
                this.ctx.moveTo(atoms[1].x, atoms[1].y);
                this.ctx.lineTo(atoms[1].x, atoms[1].y - 30);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(atoms[1].x, atoms[1].y);
                this.ctx.lineTo(atoms[1].x, atoms[1].y + 30);
                this.ctx.stroke();
            }
        }
    }

    renderReactionMechanism(diagram, x, y, width, options) {
        const { mechanism, reactants, product } = diagram;

        const stepWidth = width / 3;

        // Reactants
        this.ctx.fillStyle = '#333333';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(reactants[0], x + stepWidth * 0.5, y - 30);
        this.ctx.fillText('+', x + stepWidth * 0.5, y);
        this.ctx.fillText(reactants[1], x + stepWidth * 0.5, y + 30);

        // Curved arrow showing electron movement
        if (options.showArrows) {
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2.5;
            this.ctx.beginPath();
            this.ctx.moveTo(x + stepWidth * 0.7, y + 30);
            this.ctx.quadraticCurveTo(
                x + stepWidth * 1.2, y - 20,
                x + stepWidth * 1.3, y - 30
            );
            this.ctx.stroke();

            // Arrow head
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.moveTo(x + stepWidth * 1.3, y - 30);
            this.ctx.lineTo(x + stepWidth * 1.25, y - 25);
            this.ctx.lineTo(x + stepWidth * 1.28, y - 35);
            this.ctx.closePath();
            this.ctx.fill();
        }

        // Transition state
        if (options.showTransitionState) {
            const tsX = x + stepWidth * 1.5;
            
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.font = 'bold 15px Arial';
            this.ctx.fillText('[Transition State]‡', tsX, y - 60);

            // Partial bonds shown with dashes
            this.ctx.strokeStyle = '#9B59B6';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            
            // Central structure
            this.ctx.fillStyle = '#333333';
            this.ctx.font = '14px Arial';
            this.ctx.fillText('C', tsX, y);
            this.ctx.fillText('OH', tsX - 40, y);
            this.ctx.fillText('Br', tsX + 40, y);
            
            this.ctx.beginPath();
            this.ctx.moveTo(tsX - 25, y);
            this.ctx.lineTo(tsX - 10, y);
            this.ctx.stroke();
            
            this.ctx.beginPath();
            this.ctx.moveTo(tsX + 10, y);
            this.ctx.lineTo(tsX + 25, y);
            this.ctx.stroke();
            
            this.ctx.setLineDash([]);

            // Partial charges
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = '12px Arial';
            this.ctx.fillText('δ−', tsX - 40, y - 20);
            this.ctx.fillText('δ−', tsX + 40, y - 20);
        }

        // Arrow to product
        this.ctx.strokeStyle = '#2ECC71';
        this.ctx.fillStyle = '#2ECC71';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x + stepWidth * 1.8, y);
        this.ctx.lineTo(x + stepWidth * 2.2, y);
        this.ctx.stroke();
        
        this.ctx.beginPath();
        this.ctx.moveTo(x + stepWidth * 2.2, y);
        this.ctx.lineTo(x + stepWidth * 2.15, y - 5);
        this.ctx.lineTo(x + stepWidth * 2.15, y + 5);
        this.ctx.closePath();
        this.ctx.fill();

        // Product
        this.ctx.fillStyle = '#333333';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText(product, x + stepWidth * 2.5, y);
        this.ctx.fillText('+ Br⁻', x + stepWidth * 2.5, y + 25);
    }

    renderFunctionalGroups(diagram, x, y, width, height, options) {
        const { groups } = diagram;
        
        const cols = 3;
        const rows = Math.ceil(groups.length / cols);
        const cellWidth = width / cols;
        const cellHeight = height / rows;

        const groupData = {
            alcohol: { formula: 'R−OH', name: 'Alcohol', example: 'CH₃OH' },
            aldehyde: { formula: 'R−CHO', name: 'Aldehyde', example: 'CH₃CHO' },
            ketone: { formula: 'R−CO−R', name: 'Ketone', example: 'CH₃COCH₃' },
            carboxylicAcid: { formula: 'R−COOH', name: 'Carboxylic Acid', example: 'CH₃COOH' },
            ester: { formula: 'R−COO−R', name: 'Ester', example: 'CH₃COOCH₃' },
            amine: { formula: 'R−NH₂', name: 'Amine', example: 'CH₃NH₂' },
            amide: { formula: 'R−CONH₂', name: 'Amide', example: 'CH₃CONH₂' }
        };

        groups.forEach((group, index) => {
            const col = index % cols;
            const row = Math.floor(index / cols);
            const cx = x + col * cellWidth + cellWidth / 2;
            const cy = y + row * cellHeight + cellHeight / 2;

            const data = groupData[group];
            if (!data) return;

            // Box
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(
                x + col * cellWidth + 10,
                y + row * cellHeight + 10,
                cellWidth - 20,
                cellHeight - 20
            );

            // Background
            this.ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
            this.ctx.fillRect(
                x + col * cellWidth + 10,
                y + row * cellHeight + 10,
                cellWidth - 20,
                cellHeight - 20
            );

            // Name
            if (options.showNames) {
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(data.name, cx, cy - 35);
            }

            // Formula
            this.ctx.fillStyle = '#333333';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillText(data.formula, cx, cy);

            // Example
            if (options.showExamples) {
                this.ctx.fillStyle = '#555555';
                this.ctx.font = '13px Arial';
                this.ctx.fillText(`Example: ${data.example}`, cx, cy + 30);
            }
        });
    }

    renderIsomers(diagram, x, y, width, options) {
        const { formula, isomerType } = diagram;

        // Example: C4H10 structural isomers (butane and isobutane)
        const isomerWidth = width / 2.5;

        // Isomer 1: n-butane
        const iso1X = x + isomerWidth * 0.5;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('n-Butane', iso1X, y - 80);

        // Linear chain
        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(iso1X - 90, y);
        this.ctx.lineTo(iso1X + 90, y);
        this.ctx.stroke();

        // Carbon labels
        this.ctx.fillStyle = '#333333';
        this.ctx.font = 'bold 16px Arial';
        for (let i = 0; i < 4; i++) {
            const cx = iso1X - 90 + i * 60;
            this.ctx.fillText('C', cx, y);
        }

        if (options.showLabels) {
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#666666';
            this.ctx.fillText('CH₃', iso1X - 90, y + 25);
            this.ctx.fillText('CH₂', iso1X - 30, y + 25);
            this.ctx.fillText('CH₂', iso1X + 30, y + 25);
            this.ctx.fillText('CH₃', iso1X + 90, y + 25);
        }

        // Isomer 2: isobutane (2-methylpropane)
        const iso2X = x + isomerWidth * 2;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.fillText('Isobutane (2-methylpropane)', iso2X, y - 80);

        // Branched structure
        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 3;
        
        // Main chain
        this.ctx.beginPath();
        this.ctx.moveTo(iso2X - 60, y);
        this.ctx.lineTo(iso2X + 60, y);
        this.ctx.stroke();
        
        // Branch
        this.ctx.beginPath();
        this.ctx.moveTo(iso2X, y);
        this.ctx.lineTo(iso2X, y - 50);
        this.ctx.stroke();

        // Carbon labels
        this.ctx.fillStyle = '#333333';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText('C', iso2X - 60, y);
        this.ctx.fillText('C', iso2X, y);
        this.ctx.fillText('C', iso2X + 60, y);
        this.ctx.fillText('C', iso2X, y - 50);

        if (options.showLabels) {
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#666666';
            this.ctx.fillText('CH₃', iso2X - 60, y + 25);
            this.ctx.fillText('CH', iso2X, y + 25);
            this.ctx.fillText('CH₃', iso2X + 60, y + 25);
            this.ctx.fillText('CH₃', iso2X, y - 70);
        }

        // Comparison info
        if (options.compareStructures) {
            const infoY = y + 80;
            
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Same molecular formula: ' + formula, x + width / 2, infoY);
            this.ctx.fillText('Different structures: Structural isomers', x + width / 2, infoY + 20);
            this.ctx.fillText('Different properties (b.p., m.p., etc.)', x + width / 2, infoY + 40);
        }
    }

    renderPolymerization(diagram, x, y, width, options) {
        const { monomer, polymer } = diagram;

        // Monomer (ethene)
        const monomerX = x + width * 0.2;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Monomer', monomerX, y - 50);

        // Draw ethene
        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 3;
        
        // C=C double bond
        const bondLength = 60;
        this.ctx.beginPath();
        this.ctx.moveTo(monomerX - bondLength / 2, y - 3);
        this.ctx.lineTo(monomerX + bondLength / 2, y - 3);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(monomerX - bondLength / 2, y + 3);
        this.ctx.lineTo(monomerX + bondLength / 2, y + 3);
        this.ctx.stroke();

        // Carbons
        this.ctx.fillStyle = '#333333';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText('C', monomerX - bondLength / 2, y);
        this.ctx.fillText('C', monomerX + bondLength / 2, y);

        // Hydrogens
        this.ctx.font = '14px Arial';
        this.ctx.fillText('H', monomerX - bondLength / 2 - 20, y - 30);
        this.ctx.fillText('H', monomerX - bondLength / 2 - 20, y + 30);
        this.ctx.fillText('H', monomerX + bondLength / 2 + 20, y - 30);
        this.ctx.fillText('H', monomerX + bondLength / 2 + 20, y + 30);

        // Polymerization arrow
        if (options.showArrows) {
            const arrowX = x + width * 0.5;
            
            this.ctx.strokeStyle = '#2ECC71';
            this.ctx.fillStyle = '#2ECC71';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(arrowX - 40, y);
            this.ctx.lineTo(arrowX + 40, y);
            this.ctx.stroke();
            
            this.ctx.beginPath();
            this.ctx.moveTo(arrowX + 40, y);
            this.ctx.lineTo(arrowX + 35, y - 5);
            this.ctx.lineTo(arrowX + 35, y + 5);
            this.ctx.closePath();
            this.ctx.fill();

            // Conditions
            this.ctx.fillStyle = '#2ECC71';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Heat, Pressure', arrowX, y - 20);
            this.ctx.fillText('Catalyst', arrowX, y - 5);
        }

        // Polymer (polyethylene)
        const polymerX = x + width * 0.8;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.fillText('Polymer', polymerX, y - 50);

        if (options.showRepeatingUnit) {
            // Repeating unit with brackets
            this.ctx.strokeStyle = '#333333';
            this.ctx.lineWidth = 2;
            
            // Left bracket
            this.ctx.beginPath();
            this.ctx.moveTo(polymerX - 60, y - 40);
            this.ctx.lineTo(polymerX - 70, y - 40);
            this.ctx.lineTo(polymerX - 70, y + 40);
            this.ctx.lineTo(polymerX - 60, y + 40);
            this.ctx.stroke();

            // Right bracket
            this.ctx.beginPath();
            this.ctx.moveTo(polymerX + 60, y - 40);
            this.ctx.lineTo(polymerX + 70, y - 40);
            this.ctx.lineTo(polymerX + 70, y + 40);
            this.ctx.lineTo(polymerX + 60, y + 40);
            this.ctx.stroke();

            // n subscript
            this.ctx.fillStyle = '#333333';
            this.ctx.font = '14px Arial';
            this.ctx.fillText('n', polymerX + 80, y + 35);

            // Repeating unit structure
            this.ctx.strokeStyle = '#333333';
            this.ctx.lineWidth = 3;
            
            // C-C single bond
            this.ctx.beginPath();
            this.ctx.moveTo(polymerX - 30, y);
            this.ctx.lineTo(polymerX + 30, y);
            this.ctx.stroke();

            // Carbons
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillText('C', polymerX - 30, y);
            this.ctx.fillText('C', polymerX + 30, y);

            // Hydrogens
            this.ctx.font = '14px Arial';
            this.ctx.fillText('H', polymerX - 30, y - 25);
            this.ctx.fillText('H', polymerX - 30, y + 25);
            this.ctx.fillText('H', polymerX + 30, y - 25);
            this.ctx.fillText('H', polymerX + 30, y + 25);

            // Continuation lines
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(polymerX - 75, y);
            this.ctx.lineTo(polymerX - 55, y);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(polymerX + 55, y);
            this.ctx.lineTo(polymerX + 75, y);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }
    }

    renderAromatic(diagram, x, y, size, options) {
        const { molecule } = diagram;

        const radius = size * 0.4;

        // Benzene ring
        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 3;

        // Hexagon
        this.ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
            const px = x + radius * Math.cos(angle);
            const py = y + radius * Math.sin(angle);
            
            if (i === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        }
        this.ctx.closePath();
        this.ctx.stroke();

        // Resonance structures
        if (options.showResonance) {
            // Alternating double bonds (structure 1)
            for (let i = 0; i < 6; i += 2) {
                const angle1 = (i / 6) * Math.PI * 2 - Math.PI / 2;
                const angle2 = ((i + 1) / 6) * Math.PI * 2 - Math.PI / 2;
                
                const perpAngle = angle1 + (angle2 - angle1) / 2;
                const offset = 8;
                
                const px1 = x + radius * Math.cos(angle1);
                const py1 = y + radius * Math.sin(angle1);
                const px2 = x + radius * Math.cos(angle2);
                const py2 = y + radius * Math.sin(angle2);
                
                const offsetX = Math.cos(perpAngle + Math.PI / 2) * offset;
                const offsetY = Math.sin(perpAngle + Math.PI / 2) * offset;

                this.ctx.beginPath();
                this.ctx.moveTo(px1 + offsetX, py1 + offsetY);
                this.ctx.lineTo(px2 + offsetX, py2 + offsetY);
                this.ctx.stroke();
            }
        }

        // Delocalized electron cloud
        if (options.showElectronCloud) {
            const cloudRadius = radius * 0.6;
            
            // Inner circle
            const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, cloudRadius);
            gradient.addColorStop(0, 'rgba(52, 152, 219, 0.3)');
            gradient.addColorStop(1, 'rgba(52, 152, 219, 0)');
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(x, y, cloudRadius, 0, Math.PI * 2);
            this.ctx.fill();

            // Center notation
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(x, y, cloudRadius * 0.7, 0, Math.PI * 2);
            this.ctx.stroke();

            this.ctx.fillStyle = '#3498DB';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText('6π e⁻', x, y);
        }

        // Carbon positions (optional)
        if (options.showLabels) {
            this.ctx.fillStyle = '#666666';
            this.ctx.font = '13px Arial';
            
            for (let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
                const labelRadius = radius + 25;
                const px = x + labelRadius * Math.cos(angle);
                const py = y + labelRadius * Math.sin(angle);
                
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(`C${i + 1}`, px, py);
            }
        }
    }

    renderParticleStates(diagram, x, y, width, height, options) {
        const { states } = diagram;
        
        const stateWidth = width / states.length;
        const boxHeight = height * 0.8;

        states.forEach((state, index) => {
            const bx = x + index * stateWidth;
            const by = y - boxHeight / 2;

            // Box
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(bx + 10, by, stateWidth - 20, boxHeight);

            // Label
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(state.charAt(0).toUpperCase() + state.slice(1), bx + stateWidth / 2, by - 15);

            // Draw particles
            const particleRadius = 8;
            let particleCount, arrangement;

            switch(state) {
                case 'solid':
                    particleCount = 36;
                    arrangement = 'ordered';
                    break;
                case 'liquid':
                    particleCount = 30;
                    arrangement = 'loose';
                    break;
                case 'gas':
                    particleCount = 12;
                    arrangement = 'random';
                    break;
            }

            if (arrangement === 'ordered') {
                // Regular grid for solid
                const rows = 6, cols = 6;
                const spacing = (stateWidth - 40) / cols;
                
                for (let row = 0; row < rows; row++) {
                    for (let col = 0; col < cols; col++) {
                        const px = bx + 20 + col * spacing + spacing / 2;
                        const py = by + 20 + row * (boxHeight - 40) / rows;
                        
                        const gradient = this.ctx.createRadialGradient(px - 2, py - 2, 0, px, py, particleRadius);
                        gradient.addColorStop(0, '#E8F4F8');
                        gradient.addColorStop(1, '#3498DB');
                        
                        this.ctx.fillStyle = gradient;
                        this.ctx.beginPath();
                        this.ctx.arc(px, py, particleRadius, 0, Math.PI * 2);
                        this.ctx.fill();
                    }
                }
            } else if (arrangement === 'loose') {
                // Somewhat organized for liquid
                for (let i = 0; i < particleCount; i++) {
                    const px = bx + 20 + Math.random() * (stateWidth - 40);
                    const py = by + 20 + Math.random() * (boxHeight - 40);
                    
                    const gradient = this.ctx.createRadialGradient(px - 2, py - 2, 0, px, py, particleRadius);
                    gradient.addColorStop(0, '#E8F8F5');
                    gradient.addColorStop(1, '#2ECC71');
                    
                    this.ctx.fillStyle = gradient;
                    this.ctx.beginPath();
                    this.ctx.arc(px, py, particleRadius, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            } else {
                // Random for gas
                for (let i = 0; i < particleCount; i++) {
                    const px = bx + 20 + Math.random() * (stateWidth - 40);
                    const py = by + 20 + Math.random() * (boxHeight - 40);
                    
                    const gradient = this.ctx.createRadialGradient(px - 2, py - 2, 0, px, py, particleRadius);
                    gradient.addColorStop(0, '#FEF5E7');
                    gradient.addColorStop(1, '#F39C12');
                    
                    this.ctx.fillStyle = gradient;
                    this.ctx.beginPath();
                    this.ctx.arc(px, py, particleRadius, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            }

            // Properties
            if (options.showLabels) {
                this.ctx.fillStyle = '#555555';
                this.ctx.font = '11px Arial';
                this.ctx.textAlign = 'center';
                
                const properties = {
                    solid: ['Fixed shape', 'Fixed volume', 'Particles vibrate'],
                    liquid: ['No fixed shape', 'Fixed volume', 'Particles move'],
                    gas: ['No fixed shape', 'No fixed volume', 'Particles fast']
                };
                
                properties[state].forEach((prop, i) => {
                    this.ctx.fillText(prop, bx + stateWidth / 2, by + boxHeight + 20 + i * 15);
                });
            }
        });
    }

    renderParticleMotion(diagram, x, y, width, height, options) {
        const { type, particleCount } = diagram;

        // Container
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);

        // Background
        this.ctx.fillStyle = '#F8F9FA';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, height);

        if (type === 'diffusion') {
            // Left side: concentrated particles
            for (let i = 0; i < particleCount / 2; i++) {
                const px = x - width / 2 + 20 + Math.random() * (width / 4);
                const py = y - height / 2 + 20 + Math.random() * (height - 40);
                
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.beginPath();
                this.ctx.arc(px, py, 6, 0, Math.PI * 2);
                this.ctx.fill();
            }

            // Right side: sparse particles
            for (let i = 0; i < particleCount / 4; i++) {
                const px = x + width / 4 + Math.random() * (width / 4 - 20);
                const py = y - height / 2 + 20 + Math.random() * (height - 40);
                
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.beginPath();
                this.ctx.arc(px, py, 6, 0, Math.PI * 2);
                this.ctx.fill();
            }

            // Divider (permeable membrane)
            this.ctx.strokeStyle = 'rgba(52, 73, 94, 0.3)';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([10, 10]);
            this.ctx.beginPath();
            this.ctx.moveTo(x, y - height / 2);
            this.ctx.lineTo(x, y + height / 2);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            // Arrows showing diffusion
            if (options.showTime) {
                this.ctx.strokeStyle = '#3498DB';
                this.ctx.fillStyle = '#3498DB';
                this.ctx.lineWidth = 2;
                
                for (let i = 0; i < 5; i++) {
                    const ay = y - height / 3 + (i * height / 8);
                    this.ctx.beginPath();
                    this.ctx.moveTo(x - 30, ay);
                    this.ctx.lineTo(x + 30, ay);
                    this.ctx.stroke();
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(x + 30, ay);
                    this.ctx.lineTo(x + 25, ay - 3);
                    this.ctx.lineTo(x + 25, ay + 3);
                    this.ctx.closePath();
                    this.ctx.fill();
                }
            }

        } else if (type === 'brownian_motion') {
            // Large particle in center
            const centerParticle = { x: x, y: y };
            
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(centerParticle.x, centerParticle.y, 15, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.strokeStyle = '#C0392B';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            // Random path
            if (options.showPaths) {
                this.ctx.strokeStyle = '#3498DB';
                this.ctx.lineWidth = 1.5;
                this.ctx.setLineDash([3, 3]);
                this.ctx.beginPath();
                this.ctx.moveTo(centerParticle.x, centerParticle.y);
                
                let currentX = centerParticle.x;
                let currentY = centerParticle.y;
                
                for (let i = 0; i < 20; i++) {
                    currentX += (Math.random() - 0.5) * 30;
                    currentY += (Math.random() - 0.5) * 30;
                    currentX = Math.max(x - width / 2 + 30, Math.min(x + width / 2 - 30, currentX));
                    currentY = Math.max(y - height / 2 + 30, Math.min(y + height / 2 - 30, currentY));
                    this.ctx.lineTo(currentX, currentY);
                }
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            }

            // Small surrounding particles
            for (let i = 0; i < particleCount; i++) {
                const px = x - width / 2 + 20 + Math.random() * (width - 40);
                const py = y - height / 2 + 20 + Math.random() * (height - 40);
                
                this.ctx.fillStyle = '#95A5A6';
                this.ctx.beginPath();
                this.ctx.arc(px, py, 3, 0, Math.PI * 2);
                this.ctx.fill();
            }

            // Collision arrows
            if (options.showCollisions) {
                this.ctx.strokeStyle = '#F39C12';
                this.ctx.fillStyle = '#F39C12';
                this.ctx.lineWidth = 2;
                
                for (let i = 0; i < 6; i++) {
                    const angle = (i / 6) * Math.PI * 2;
                    const distance = 25;
                    const arrowLength = 15;
                    
                    const startX = centerParticle.x + Math.cos(angle) * distance;
                    const startY = centerParticle.y + Math.sin(angle) * distance;
                    const endX = startX + Math.cos(angle) * arrowLength;
                    const endY = startY + Math.sin(angle) * arrowLength;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(startX, startY);
                    this.ctx.lineTo(endX, endY);
                    this.ctx.stroke();
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(endX, endY);
                    this.ctx.lineTo(endX - Math.cos(angle + Math.PI / 6) * 5, endY - Math.sin(angle + Math.PI / 6) * 5);
                    this.ctx.lineTo(endX - Math.cos(angle - Math.PI / 6) * 5, endY - Math.sin(angle - Math.PI / 6) * 5);
                    this.ctx.closePath();
                    this.ctx.fill();
                }
            }
        }
    }

    renderHeatingCoolingCurve(diagram, x, y, width, height, options) {
        const { type, substance } = diagram;

        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        // Y axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.stroke();
        
        // X axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 40, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Temperature (°C)', 0, 0);
        this.ctx.restore();
        
        this.ctx.fillText('Time (minutes)', x, y + height / 2 + 35);

        // Heating curve data points
        const points = [
            { x: 0, y: 0.8, label: 'Solid' },
            { x: 0.2, y: 0.6, label: '' },
            { x: 0.3, y: 0.6, label: 'Melting' },
            { x: 0.5, y: 0.3, label: 'Liquid' },
            { x: 0.7, y: 0.1, label: '' },
            { x: 0.75, y: 0.1, label: 'Boiling' },
            { x: 1, y: -0.2, label: 'Gas' }
        ];

        // Convert to canvas coordinates
        const canvasPoints = points.map(p => ({
            x: x - width / 2 + p.x * width * 0.9,
            y: y + height / 2 - (p.y + 0.3) * height * 0.8,
            label: p.label
        }));

        // Draw curve
        this.ctx.strokeStyle = type === 'heating_curve' ? '#E74C3C' : '#3498DB';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        canvasPoints.forEach((p, i) => {
            if (i === 0) {
                this.ctx.moveTo(p.x, p.y);
            } else {
                this.ctx.lineTo(p.x, p.y);
            }
        });
        this.ctx.stroke();

        // Phase labels and plateaus
        if (options.showPhases) {
        canvasPoints.forEach((p, i) => {
                if (p.label) {
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.font = 'bold 12px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(p.label, p.x, p.y - 15);
                }
            });
        }

        // Highlight plateaus (phase changes)
        if (options.showPlateaus) {
            // Melting plateau
            this.ctx.fillStyle = 'rgba(155, 89, 182, 0.2)';
            this.ctx.fillRect(
                canvasPoints[2].x,
                canvasPoints[2].y - 20,
                canvasPoints[3].x - canvasPoints[2].x,
                40
            );
            
            // Boiling plateau
            this.ctx.fillRect(
                canvasPoints[5].x,
                canvasPoints[5].y - 20,
                canvasPoints[6].x - canvasPoints[5].x,
                40
            );

            // Temperature labels
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            
            if (substance === 'water') {
                this.ctx.fillText('0°C', x - width / 2 - 35, canvasPoints[2].y + 5);
                this.ctx.fillText('100°C', x - width / 2 - 35, canvasPoints[5].y + 5);
            }

            // Dashed lines to axis
            this.ctx.strokeStyle = '#9B59B6';
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([3, 3]);
            
            this.ctx.beginPath();
            this.ctx.moveTo(x - width / 2, canvasPoints[2].y);
            this.ctx.lineTo(canvasPoints[2].x, canvasPoints[2].y);
            this.ctx.stroke();
            
            this.ctx.beginPath();
            this.ctx.moveTo(x - width / 2, canvasPoints[5].y);
            this.ctx.lineTo(canvasPoints[5].x, canvasPoints[5].y);
            this.ctx.stroke();
            
            this.ctx.setLineDash([]);
        }

        // Energy explanation
        this.ctx.fillStyle = '#555555';
        this.ctx.font = '11px Arial';
        this.ctx.textAlign = 'left';
        
        const notes = [
            'Slopes: Temperature increases',
            'Plateaus: Phase change (constant T)',
            'Energy breaks intermolecular forces'
        ];
        
        notes.forEach((note, i) => {
            this.ctx.fillText(note, x - width / 2 + 10, y - height / 2 + 20 + i * 15);
        });
    }

    renderIntermolecularForces(diagram, x, y, width, height, options) {
        const { forces } = diagram;

        const forceHeight = height / forces.length;

        const forceData = {
            london: {
                name: 'London Dispersion Forces',
                strength: 'Weak',
                description: 'Temporary dipoles',
                color: '#3498DB',
                example: 'CH₄, I₂'
            },
            dipole: {
                name: 'Dipole-Dipole Forces',
                strength: 'Medium',
                description: 'Permanent dipoles',
                color: '#F39C12',
                example: 'HCl, CH₃Cl'
            },
            hydrogen: {
                name: 'Hydrogen Bonding',
                strength: 'Strong',
                description: 'H bonded to N, O, or F',
                color: '#E74C3C',
                example: 'H₂O, NH₃, HF'
            }
        };

        forces.forEach((force, index) => {
            const data = forceData[force];
            if (!data) return;

            const fy = y - height / 2 + index * forceHeight + forceHeight / 2;

            // Background box
            this.ctx.fillStyle = this.lightenColor(data.color, 70);
            this.ctx.fillRect(x, fy - forceHeight / 2 + 10, width - 20, forceHeight - 20);
            
            this.ctx.strokeStyle = data.color;
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x, fy - forceHeight / 2 + 10, width - 20, forceHeight - 20);

            // Force name
            this.ctx.fillStyle = data.color;
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(data.name, x + 20, fy - 40);

            // Visual representation
            const vizX = x + 50;
            
            if (force === 'london') {
                // Neutral molecules with temporary dipoles
                this.drawMolecule(vizX, fy, 20, '#95A5A6', false);
                this.drawMolecule(vizX + 80, fy, 20, '#95A5A6', false);
                
                // Temporary dipoles
                this.ctx.fillStyle = '#3498DB';
                this.ctx.font = '14px Arial';
                this.ctx.fillText('δ+', vizX - 12, fy);
                this.ctx.fillText('δ−', vizX + 12, fy);
                this.ctx.fillText('δ−', vizX + 68, fy);
                this.ctx.fillText('δ+', vizX + 92, fy);
                
                // Weak attraction
                this.ctx.strokeStyle = data.color;
                this.ctx.lineWidth = 1;
                this.ctx.setLineDash([2, 2]);
                this.ctx.beginPath();
                this.ctx.moveTo(vizX + 20, fy);
                this.ctx.lineTo(vizX + 60, fy);
                this.ctx.stroke();
                this.ctx.setLineDash([]);

            } else if (force === 'dipole') {
                // Polar molecules with permanent dipoles
                this.drawMolecule(vizX, fy, 20, '#F39C12', true);
                this.drawMolecule(vizX + 80, fy, 20, '#F39C12', true);
                
                // Dipole arrows
                this.drawDipoleArrow(vizX - 15, fy, vizX + 15, fy, '#F39C12');
                this.drawDipoleArrow(vizX + 95, fy, vizX + 65, fy, '#F39C12');
                
                // Attraction
                this.ctx.strokeStyle = data.color;
                this.ctx.lineWidth = 2;
                this.ctx.setLineDash([3, 2]);
                this.ctx.beginPath();
                this.ctx.moveTo(vizX + 20, fy);
                this.ctx.lineTo(vizX + 60, fy);
                this.ctx.stroke();
                this.ctx.setLineDash([]);

            } else if (force === 'hydrogen') {
                // Water molecules with H-bonding
                const water1 = { x: vizX, y: fy };
                const water2 = { x: vizX + 90, y: fy - 20 };
                
                // First water molecule
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.beginPath();
                this.ctx.arc(water1.x, water1.y, 18, 0, Math.PI * 2);
                this.ctx.fill();
                
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('O', water1.x, water1.y + 5);
                
                // H atoms
                this.ctx.fillStyle = '#333333';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.fillText('H', water1.x - 25, water1.y - 10);
                this.ctx.fillText('H', water1.x + 25, water1.y - 10);
                
                this.ctx.strokeStyle = '#666666';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(water1.x, water1.y);
                this.ctx.lineTo(water1.x - 20, water1.y - 8);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(water1.x, water1.y);
                this.ctx.lineTo(water1.x + 20, water1.y - 8);
                this.ctx.stroke();

                // Second water molecule
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.beginPath();
                this.ctx.arc(water2.x, water2.y, 18, 0, Math.PI * 2);
                this.ctx.fill();
                
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('O', water2.x, water2.y + 5);
                
                this.ctx.fillStyle = '#333333';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.fillText('H', water2.x - 25, water2.y + 15);
                this.ctx.fillText('H', water2.x + 25, water2.y + 15);
                
                this.ctx.strokeStyle = '#666666';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(water2.x, water2.y);
                this.ctx.lineTo(water2.x - 20, water2.y + 12);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(water2.x, water2.y);
                this.ctx.lineTo(water2.x + 20, water2.y + 12);
                this.ctx.stroke();

                // Hydrogen bond
                this.ctx.strokeStyle = '#E74C3C';
                this.ctx.lineWidth = 3;
                this.ctx.setLineDash([5, 3]);
                this.ctx.beginPath();
                this.ctx.moveTo(water1.x + 25, water1.y - 10);
                this.ctx.lineTo(water2.x - 10, water2.y + 10);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
                
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.fillText('H-bond', vizX + 60, fy - 15);
            }

            // Strength and description
            if (options.showStrength) {
                this.ctx.fillStyle = '#555555';
                this.ctx.font = '13px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(`Strength: ${data.strength}`, x + width - 250, fy - 20);
                this.ctx.fillText(data.description, x + width - 250, fy);
            }

            // Examples
            if (options.showExamples) {
                this.ctx.fillStyle = '#666666';
                this.ctx.font = '12px Arial';
                this.ctx.fillText(`Example: ${data.example}`, x + width - 250, fy + 25);
            }
        });

        // Strength comparison
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Increasing Strength →', x + width / 2, y + height / 2 + 20);
    }

    drawMolecule(x, y, radius, color, isPolar) {
        const gradient = this.ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, 0, x, y, radius);
        gradient.addColorStop(0, this.lightenColor(color, 40));
        gradient.addColorStop(1, color);
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.strokeStyle = this.darkenColor(color, 30);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    }

    drawDipoleArrow(x1, y1, x2, y2, color) {
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
        this.ctx.lineWidth = 2;
        
        // Arrow line
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
        
        // Arrow head
        const angle = Math.atan2(y2 - y1, x2 - x1);
        this.ctx.beginPath();
        this.ctx.moveTo(x2, y2);
        this.ctx.lineTo(x2 - 8 * Math.cos(angle - Math.PI / 6), y2 - 8 * Math.sin(angle - Math.PI / 6));
        this.ctx.lineTo(x2 - 8 * Math.cos(angle + Math.PI / 6), y2 - 8 * Math.sin(angle + Math.PI / 6));
        this.ctx.closePath();
        this.ctx.fill();
        
        // Plus sign at start
        this.ctx.fillStyle = color;
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('+', x1, y1 + 5);
    }

    renderEnergyProfile(diagram, x, y, width, height, options) {
        const { reactionType, activationEnergy, deltaH, type } = diagram;

        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        // Y axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.stroke();
        
        // X axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 40, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Energy', 0, 0);
        this.ctx.restore();
        
        this.ctx.fillText('Reaction Progress', x, y + height / 2 + 35);

        // Energy levels
        const reactantsY = reactionType === 'exothermic' ? y + height / 6 : y + height / 4;
        const productsY = reactionType === 'exothermic' ? y + height / 3 : y + height / 8;
        const transitionY = y - height / 4;

        // Reactants level
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2 + 50, reactantsY);
        this.ctx.lineTo(x - width / 6, reactantsY);
        this.ctx.stroke();

        this.ctx.fillStyle = '#3498DB';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Reactants', x - width / 3, reactantsY + 25);

        // Energy curve to transition state
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 6, reactantsY);
        this.ctx.quadraticCurveTo(
            x - width / 12, transitionY - height / 10,
            x, transitionY
        );
        this.ctx.stroke();

        // Transition state
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.arc(x, transitionY, 6, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillText('Transition', x, transitionY - 20);
        this.ctx.fillText('State ‡', x, transitionY - 5);

        // Curve to products
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.moveTo(x, transitionY);
        this.ctx.quadraticCurveTo(
            x + width / 12, (transitionY + productsY) / 2,
            x + width / 6, productsY
        );
        this.ctx.stroke();

        // Products level
        this.ctx.strokeStyle = '#2ECC71';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x + width / 6, productsY);
        this.ctx.lineTo(x + width / 2 - 50, productsY);
        this.ctx.stroke();

        this.ctx.fillStyle = '#2ECC71';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Products', x + width / 3, productsY + 25);

        // Activation energy arrow
        if (options.showActivationEnergy || type === 'catalyst_effect') {
            this.ctx.strokeStyle = '#9B59B6';
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 3]);
            
            const arrowX = x - width / 4;
            this.ctx.beginPath();
            this.ctx.moveTo(arrowX, reactantsY);
            this.ctx.lineTo(arrowX, transitionY);
            this.ctx.stroke();
            
            // Arrow heads
            this.ctx.beginPath();
            this.ctx.moveTo(arrowX, transitionY);
            this.ctx.lineTo(arrowX - 4, transitionY + 8);
            this.ctx.lineTo(arrowX + 4, transitionY + 8);
            this.ctx.closePath();
            this.ctx.fill();
            
            this.ctx.beginPath();
            this.ctx.moveTo(arrowX, reactantsY);
            this.ctx.lineTo(arrowX - 4, reactantsY - 8);
            this.ctx.lineTo(arrowX + 4, reactantsY - 8);
            this.ctx.closePath();
            this.ctx.fill();
            
            this.ctx.setLineDash([]);

            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Eₐ', arrowX - 20, (reactantsY + transitionY) / 2);
        }

        // Delta H arrow
        if (options.showDeltaH) {
            this.ctx.strokeStyle = '#F39C12';
            this.ctx.fillStyle = '#F39C12';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 3]);
            
            const dhX = x + width / 2 - 80;
            this.ctx.beginPath();
            this.ctx.moveTo(dhX, reactantsY);
            this.ctx.lineTo(dhX, productsY);
            this.ctx.stroke();
            
            // Arrow head
            if (reactionType === 'exothermic') {
                this.ctx.beginPath();
                this.ctx.moveTo(dhX, productsY);
                this.ctx.lineTo(dhX - 4, productsY - 8);
                this.ctx.lineTo(dhX + 4, productsY - 8);
                this.ctx.closePath();
                this.ctx.fill();
            } else {
                this.ctx.beginPath();
                this.ctx.moveTo(dhX, productsY);
                this.ctx.lineTo(dhX - 4, productsY + 8);
                this.ctx.lineTo(dhX + 4, productsY + 8);
                this.ctx.closePath();
                this.ctx.fill();
            }
            
            this.ctx.setLineDash([]);

            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            const sign = reactionType === 'exothermic' ? '−' : '+';
            this.ctx.fillText(`ΔH ${sign}`, dhX + 25, (reactantsY + productsY) / 2);
        }

        // Catalyst pathway
        if (options.showCatalyst || type === 'catalyst_effect') {
            const catTransitionY = y - height / 6;
            
            this.ctx.strokeStyle = '#16A085';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([3, 3]);
            
            this.ctx.beginPath();
            this.ctx.moveTo(x - width / 6, reactantsY);
            this.ctx.quadraticCurveTo(
                x - width / 12, catTransitionY - height / 20,
                x, catTransitionY
            );
            this.ctx.quadraticCurveTo(
                x + width / 12, (catTransitionY + productsY) / 2,
                x + width / 6, productsY
            );
            this.ctx.stroke();
            
            this.ctx.setLineDash([]);

            this.ctx.fillStyle = '#16A085';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('With', x, catTransitionY - 15);
            this.ctx.fillText('Catalyst', x, catTransitionY);

            // Lowered Ea
            this.ctx.strokeStyle = '#16A085';
            this.ctx.fillStyle = '#16A085';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([3, 2]);
            
            const catArrowX = x - width / 8;
            this.ctx.beginPath();
            this.ctx.moveTo(catArrowX, reactantsY);
            this.ctx.lineTo(catArrowX, catTransitionY);
            this.ctx.stroke();
            
            this.ctx.beginPath();
            this.ctx.moveTo(catArrowX, catTransitionY);
            this.ctx.lineTo(catArrowX - 3, catTransitionY + 6);
            this.ctx.lineTo(catArrowX + 3, catTransitionY + 6);
            this.ctx.closePath();
            this.ctx.fill();
            
            this.ctx.setLineDash([]);

            this.ctx.font = '10px Arial';
            this.ctx.fillText('Lower Eₐ', catArrowX - 25, (reactantsY + catTransitionY) / 2);
        }
    }

    renderCollisionTheory(diagram, x, y, width, height, options) {
        const { particles } = diagram;

        // Title sections
        const sectionWidth = width / 2;

        // Unsuccessful collision
        const unsuccessX = x - sectionWidth / 2;
        
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Unsuccessful Collision', unsuccessX, y - height / 2 + 30);

        // Wrong orientation or low energy
        const particle1 = { x: unsuccessX - 50, y: y };
        const particle2 = { x: unsuccessX + 50, y: y };

        this.drawMolecule(particle1.x, particle1.y, 25, '#95A5A6', false);
        this.drawMolecule(particle2.x, particle2.y, 25, '#95A5A6', false);

        // Motion arrows
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.fillStyle = '#95A5A6';
        this.ctx.lineWidth = 2;
        
        this.drawMotionArrow(particle1.x + 30, particle1.y, 15, 0);
        this.drawMotionArrow(particle2.x - 30, particle2.y, 15, Math.PI);

        // X mark
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(unsuccessX - 15, y + 60);
        this.ctx.lineTo(unsuccessX + 15, y + 80);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(unsuccessX + 15, y + 60);
        this.ctx.lineTo(unsuccessX - 15, y + 80);
        this.ctx.stroke();

        this.ctx.fillStyle = '#555555';
        this.ctx.font = '12px Arial';
        this.ctx.fillText('Wrong orientation or', unsuccessX, y + 100);
        this.ctx.fillText('insufficient energy', unsuccessX, y + 115);

        // Successful collision
        const successX = x + sectionWidth / 2;
        
        this.ctx.fillStyle = '#2ECC71';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.fillText('Successful Collision', successX, y - height / 2 + 30);

        // Correct orientation and high energy
        const particle3 = { x: successX - 60, y: y - 20 };
        const particle4 = { x: successX + 60, y: y + 20 };

        if (options.showOrientation) {
            // Show active sites
            this.drawMolecule(particle3.x, particle3.y, 25, '#3498DB', false);
            this.drawMolecule(particle4.x, particle4.y, 25, '#3498DB', false);

            // Active sites marked
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(particle3.x + 18, particle3.y, 6, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.arc(particle4.x - 18, particle4.y, 6, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // Motion arrows (faster)
        this.ctx.strokeStyle = '#2ECC71';
        this.ctx.fillStyle = '#2ECC71';
        this.ctx.lineWidth = 3;
        
        this.drawMotionArrow(particle3.x + 30, particle3.y, 20, -Math.PI / 6);
        this.drawMotionArrow(particle4.x - 30, particle4.y, 20, Math.PI + Math.PI / 6);

        // Check mark
        this.ctx.strokeStyle = '#2ECC71';
        this.ctx.lineWidth = 4;
        this.ctx.lineCap = 'round';
        this.ctx.beginPath();
        this.ctx.moveTo(successX - 15, y + 70);
        this.ctx.lineTo(successX - 5, y + 80);
        this.ctx.lineTo(successX + 20, y + 55);
        this.ctx.stroke();
        this.ctx.lineCap = 'butt';

        if (options.showEnergy) {
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '12px Arial';
            this.ctx.fillText('Correct orientation &', successX, y + 100);
            this.ctx.fillText('E ≥ Eₐ (activation energy)', successX, y + 115);
        }

        // Requirements box
        const reqY = y + height / 2 - 60;
        
        this.ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
        this.ctx.fillRect(x - width / 2 + 20, reqY, width - 40, 50);
        
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - width / 2 + 20, reqY, width - 40, 50);

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('For Reaction: Particles must collide with', x, reqY + 20);
        this.ctx.fillText('(1) Sufficient energy AND (2) Correct orientation', x, reqY + 38);
    }

    drawMotionArrow(x, y, length, angle) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(angle);

        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(length, 0);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(length, 0);
        this.ctx.lineTo(length - 6, -4);
        this.ctx.lineTo(length - 6, 4);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.restore();
    }

    renderEnthalpyDiagram(diagram, x, y, width, height, options) {
        const { reactionType, deltaH } = diagram;

        // Energy level diagram
        const levelWidth = width * 0.6;
        const reactantsY = reactionType === 'endothermic' ? y + height / 4 : y - height / 6;
        const productsY = reactionType === 'endothermic' ? y - height / 6 : y + height / 4;
        // Reactants level
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(x - levelWidth / 2, reactantsY);
        this.ctx.lineTo(x, reactantsY);
        this.ctx.stroke();

        this.ctx.fillStyle = '#3498DB';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Reactants', x - levelWidth / 2, reactantsY - 15);

        // Products level
        this.ctx.strokeStyle = '#2ECC71';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(x, productsY);
        this.ctx.lineTo(x + levelWidth / 2, productsY);
        this.ctx.stroke();

        this.ctx.fillStyle = '#2ECC71';
        this.ctx.textAlign = 'right';
        this.ctx.fillText('Products', x + levelWidth / 2, productsY - 15);

        // Delta H arrow
        if (options.showDeltaH) {
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.lineWidth = 3;
            
            const arrowX = x + levelWidth / 2 + 60;
            
            this.ctx.beginPath();
            this.ctx.moveTo(arrowX, reactantsY);
            this.ctx.lineTo(arrowX, productsY);
            this.ctx.stroke();

            // Arrow head
            if (reactionType === 'endothermic') {
                this.ctx.beginPath();
                this.ctx.moveTo(arrowX, productsY);
                this.ctx.lineTo(arrowX - 6, productsY + 10);
                this.ctx.lineTo(arrowX + 6, productsY + 10);
                this.ctx.closePath();
                this.ctx.fill();
                
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('ΔH > 0', arrowX + 15, (reactantsY + productsY) / 2);
                this.ctx.fillText('(Endothermic)', arrowX + 15, (reactantsY + productsY) / 2 + 20);
            } else {
                this.ctx.beginPath();
                this.ctx.moveTo(arrowX, productsY);
                this.ctx.lineTo(arrowX - 6, productsY - 10);
                this.ctx.lineTo(arrowX + 6, productsY - 10);
                this.ctx.closePath();
                this.ctx.fill();
                
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('ΔH < 0', arrowX + 15, (reactantsY + productsY) / 2);
                this.ctx.fillText('(Exothermic)', arrowX + 15, (reactantsY + productsY) / 2 + 20);
            }
        }

        // Energy label
        if (options.showArrows) {
            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.lineWidth = 2;
            
            // Y axis
            this.ctx.beginPath();
            this.ctx.moveTo(x - levelWidth / 2 - 40, y - height / 2 + 40);
            this.ctx.lineTo(x - levelWidth / 2 - 40, y + height / 2 - 40);
            this.ctx.stroke();

            // Arrow
            this.ctx.fillStyle = '#95A5A6';
            this.ctx.beginPath();
            this.ctx.moveTo(x - levelWidth / 2 - 40, y - height / 2 + 40);
            this.ctx.lineTo(x - levelWidth / 2 - 45, y - height / 2 + 50);
            this.ctx.lineTo(x - levelWidth / 2 - 35, y - height / 2 + 50);
            this.ctx.closePath();
            this.ctx.fill();

            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.save();
            this.ctx.translate(x - levelWidth / 2 - 65, y);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.fillText('Energy (Enthalpy)', 0, 0);
            this.ctx.restore();
        }

        // Reaction equation
        const eqY = y + height / 2 - 30;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = '14px Arial';
        this.ctx.textAlign = 'center';
        
        if (deltaH) {
            this.ctx.fillText(`ΔH = ${deltaH} kJ/mol`, x, eqY);
        }

        // Energy annotation
        if (reactionType === 'endothermic') {
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '12px Arial';
            this.ctx.fillText('Energy absorbed from surroundings', x, eqY + 20);
            this.ctx.fillText('Temperature decreases', x, eqY + 35);
        } else {
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '12px Arial';
            this.ctx.fillText('Energy released to surroundings', x, eqY + 20);
            this.ctx.fillText('Temperature increases', x, eqY + 35);
        }
    }

    renderDissociation(diagram, x, y, size, options) {
        const { compound } = diagram;

        // Before dissociation
        const beforeX = x - size / 2;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Before (Solid)', beforeX, y - size / 2 - 20);

        // NaCl crystal
        const crystalSize = 80;
        const spacing = 25;
        
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const isNa = (row + col) % 2 === 0;
                const color = isNa ? '#9B59B6' : '#2ECC71';
                const label = isNa ? 'Na⁺' : 'Cl⁻';
                
                const px = beforeX - spacing + col * spacing;
                const py = y - spacing + row * spacing;
                
                const gradient = this.ctx.createRadialGradient(px - 5, py - 5, 0, px, py, 15);
                gradient.addColorStop(0, this.lightenColor(color, 40));
                gradient.addColorStop(1, color);
                
                this.ctx.fillStyle = gradient;
                this.ctx.beginPath();
                this.ctx.arc(px, py, 15, 0, Math.PI * 2);
                this.ctx.fill();
                
                this.ctx.strokeStyle = this.darkenColor(color, 30);
                this.ctx.lineWidth = 2;
                this.ctx.stroke();

                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 9px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(label, px, py);
            }
        }

        // Arrow
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.fillStyle = '#3498DB';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(beforeX + 60, y);
        this.ctx.lineTo(beforeX + 120, y);
        this.ctx.stroke();
        
        this.ctx.beginPath();
        this.ctx.moveTo(beforeX + 120, y);
        this.ctx.lineTo(beforeX + 115, y - 5);
        this.ctx.lineTo(beforeX + 115, y + 5);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('H₂O', beforeX + 90, y - 15);

        // After dissociation
        const afterX = x + size / 2;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.fillText('After (Aqueous)', afterX, y - size / 2 - 20);

        // Hydrated ions
        if (options.showWater) {
            // Na+ with water molecules
            const naX = afterX - 50;
            
            // Central Na+
            const gradient1 = this.ctx.createRadialGradient(naX - 5, y - 5, 0, naX, y, 18);
            gradient1.addColorStop(0, '#D7BDE2');
            gradient1.addColorStop(1, '#9B59B6');
            
            this.ctx.fillStyle = gradient1;
            this.ctx.beginPath();
            this.ctx.arc(naX, y, 18, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.strokeStyle = '#7D3C98';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText('Na⁺', naX, y);

            // Water molecules around Na+
            for (let i = 0; i < 4; i++) {
                const angle = (i / 4) * Math.PI * 2;
                const waterX = naX + Math.cos(angle) * 40;
                const waterY = y + Math.sin(angle) * 40;
                
                this.ctx.fillStyle = 'rgba(52, 152, 219, 0.5)';
                this.ctx.beginPath();
                this.ctx.arc(waterX, waterY, 10, 0, Math.PI * 2);
                this.ctx.fill();
                
                this.ctx.strokeStyle = '#2980B9';
                this.ctx.lineWidth = 1;
                this.ctx.stroke();

                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = '9px Arial';
                this.ctx.fillText('H₂O', waterX, waterY);
            }

            // Cl- with water molecules
            const clX = afterX + 50;
            
            // Central Cl-
            const gradient2 = this.ctx.createRadialGradient(clX - 5, y - 5, 0, clX, y, 18);
            gradient2.addColorStop(0, '#A9DFBF');
            gradient2.addColorStop(1, '#2ECC71');
            
            this.ctx.fillStyle = gradient2;
            this.ctx.beginPath();
            this.ctx.arc(clX, y, 18, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.strokeStyle = '#229954';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('Cl⁻', clX, y);

            // Water molecules around Cl-
            for (let i = 0; i < 4; i++) {
                const angle = (i / 4) * Math.PI * 2;
                const waterX = clX + Math.cos(angle) * 40;
                const waterY = y + Math.sin(angle) * 40;
                
                this.ctx.fillStyle = 'rgba(52, 152, 219, 0.5)';
                this.ctx.beginPath();
                this.ctx.arc(waterX, waterY, 10, 0, Math.PI * 2);
                this.ctx.fill();
                
                this.ctx.strokeStyle = '#2980B9';
                this.ctx.lineWidth = 1;
                this.ctx.stroke();

                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = '9px Arial';
                this.ctx.fillText('H₂O', waterX, waterY);
            }
        }

        if (options.showIons) {
            // Equation
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('NaCl(s) → Na⁺(aq) + Cl⁻(aq)', x, y + size / 2 + 30);
        }
    }

    renderIonHydration(diagram, x, y, size, options) {
        const { ion } = diagram;

        // Central ion
        const isPositive = ion.includes('+');
        const color = isPositive ? '#9B59B6' : '#E74C3C';
        const ionRadius = 25;

        const gradient = this.ctx.createRadialGradient(x - 8, y - 8, 0, x, y, ionRadius);
        gradient.addColorStop(0, this.lightenColor(color, 40));
        gradient.addColorStop(1, color);
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(x, y, ionRadius, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.strokeStyle = this.darkenColor(color, 30);
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(ion, x, y);

        // Water molecules
        const waterCount = 6;
        const waterDistance = size * 0.3;

        for (let i = 0; i < waterCount; i++) {
            const angle = (i / waterCount) * Math.PI * 2;
            const waterX = x + Math.cos(angle) * waterDistance;
            const waterY = y + Math.sin(angle) * waterDistance;

            // Water molecule
            const waterRadius = 18;
            
            this.ctx.fillStyle = 'rgba(52, 152, 219, 0.6)';
            this.ctx.beginPath();
            this.ctx.arc(waterX, waterY, waterRadius, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.strokeStyle = '#2980B9';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            // O atom
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(waterX, waterY, 8, 0, Math.PI * 2);
            this.ctx.fill();

            // H atoms
            if (options.showWaterDipoles) {
                const hAngle = angle + Math.PI;
                const hDistance = 12;
                
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.beginPath();
                this.ctx.arc(
                    waterX + Math.cos(hAngle - 0.3) * hDistance,
                    waterY + Math.sin(hAngle - 0.3) * hDistance,
                    5, 0, Math.PI * 2
                );
                this.ctx.fill();
                
                this.ctx.beginPath();
                this.ctx.arc(
                    waterX + Math.cos(hAngle + 0.3) * hDistance,
                    waterY + Math.sin(hAngle + 0.3) * hDistance,
                    5, 0, Math.PI * 2
                );
                this.ctx.fill();

                // Dipole orientation
                const dipoleColor = isPositive ? '#3498DB' : '#E74C3C';
                this.ctx.strokeStyle = dipoleColor;
                this.ctx.lineWidth = 1.5;
                this.ctx.setLineDash([2, 2]);
                this.ctx.beginPath();
                this.ctx.moveTo(x, y);
                this.ctx.lineTo(waterX, waterY);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            }

            // Labels
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '10px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('H₂O', waterX, waterY + 2);
        }

        // Hydration shell label
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.arc(x, y, waterDistance + 25, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.fillStyle = '#3498DB';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Hydration Shell', x, y + waterDistance + 50);

        // Orientation note
        if (isPositive) {
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '11px Arial';
            this.ctx.fillText('O (δ−) oriented toward cation', x, y - size / 2 - 20);
        } else {
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '11px Arial';
            this.ctx.fillText('H (δ+) oriented toward anion', x, y - size / 2 - 20);
        }
    }

    renderPHScale(diagram, x, y, width, height, options) {
        const { range } = diagram;

        const scaleWidth = width * 0.9;
        const scaleHeight = height * 0.5;
        const cellWidth = scaleWidth / (range[1] - range[0] + 1);

        const colors = [
            '#8B0000', '#B22222', '#DC143C', '#FF0000', '#FF4500', '#FF6347', '#FFA500',
            '#00FF00', '#7FFF00', '#ADFF2F', '#9ACD32', '#6B8E23', '#556B2F', '#483D8B'
        ];

        // pH scale bar
        for (let i = range[0]; i <= range[1]; i++) {
            const cellX = x - scaleWidth / 2 + (i - range[0]) * cellWidth;
            const color = colors[i] || '#CCCCCC';

            // Gradient for each cell
            const gradient = this.ctx.createLinearGradient(cellX, y - scaleHeight / 2, cellX, y + scaleHeight / 2);
            gradient.addColorStop(0, this.lightenColor(color, 20));
            gradient.addColorStop(1, color);
            
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(cellX, y - scaleHeight / 2, cellWidth, scaleHeight);

            // Border
            this.ctx.strokeStyle = '#FFFFFF';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(cellX, y - scaleHeight / 2, cellWidth, scaleHeight);

            // pH number
            this.ctx.fillStyle = i < 7 || i > 12 ? '#FFFFFF' : '#000000';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(i.toString(), cellX + cellWidth / 2, y);
        }

        // Labels
        if (options.showColors) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            
            this.ctx.fillText('ACIDIC', x - scaleWidth / 3, y + scaleHeight / 2 + 30);
            this.ctx.fillText('NEUTRAL', x, y + scaleHeight / 2 + 30);
            this.ctx.fillText('BASIC', x + scaleWidth / 3, y + scaleHeight / 2 + 30);
        }

        // Examples
        if (options.showExamples) {
            const examples = [
                { pH: 1, name: 'Stomach acid', yOffset: -80 },
                { pH: 2, name: 'Lemon juice', yOffset: 80 },
                { pH: 4, name: 'Tomato juice', yOffset: -80 },
                { pH: 7, name: 'Pure water', yOffset: 80 },
                { pH: 8, name: 'Seawater', yOffset: -80 },
                { pH: 10, name: 'Milk of magnesia', yOffset: 80 },
                { pH: 13, name: 'Bleach', yOffset: -80 }
            ];

            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';

            examples.forEach(ex => {
                const exX = x - scaleWidth / 2 + (ex.pH - range[0] + 0.5) * cellWidth;
                const exY = y + (ex.yOffset > 0 ? scaleHeight / 2 : -scaleHeight / 2) + ex.yOffset;

                this.ctx.fillStyle = '#555555';
                this.ctx.fillText(ex.name, exX, exY);

                // Connection line
                this.ctx.strokeStyle = '#999999';
                this.ctx.lineWidth = 1;
                this.ctx.setLineDash([2, 2]);
                this.ctx.beginPath();
                this.ctx.moveTo(exX, y + (ex.yOffset > 0 ? scaleHeight / 2 : -scaleHeight / 2));
                this.ctx.lineTo(exX, exY - 15 * Math.sign(ex.yOffset));
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            });
        }

        // [H+] concentration
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('[H⁺] increases →', x - scaleWidth / 3, y - scaleHeight / 2 - 30);
        this.ctx.fillText('← [OH⁻] increases', x + scaleWidth / 3, y - scaleHeight / 2 - 30);
    }

    renderTitrationCurve(diagram, x, y, width, height, options) {
        const { titration } = diagram;

        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        // Y axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.stroke();
        
        // X axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 40, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('pH', 0, 0);
        this.ctx.restore();
        
        this.ctx.fillText('Volume of Base Added (mL)', x, y + height / 2 + 35);

        // pH scale on Y axis
        this.ctx.fillStyle = '#555555';
        this.ctx.font = '11px Arial';
        this.ctx.textAlign = 'right';
        
        for (let pH = 0; pH <= 14; pH += 2) {
            const py = y + height / 2 - (pH / 14) * height * 0.9;
            this.ctx.fillText(pH.toString(), x - width / 2 - 10, py + 4);
            
            // Grid line
            this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(x - width / 2, py);
            this.ctx.lineTo(x + width / 2, py);
            this.ctx.stroke();
        }

        // Titration curve
        const points = [];
        
        if (titration === 'strong_acid_strong_base') {
            // S-shaped curve
            for (let vol = 0; vol <= 50; vol++) {
                let pH;
                if (vol < 24) {
                    pH = 1 + vol * 0.12; // Gradual rise
                } else if (vol < 26) {
                    pH = 3 + (vol - 24) * 4; // Sharp rise at equivalence
                } else {
                    pH = 11 + (vol - 26) * 0.12; // Gradual rise
                }
                pH = Math.min(14, Math.max(0, pH));
                
                const px = x - width / 2 + (vol / 50) * width * 0.9;
                const py = y + height / 2 - (pH / 14) * height * 0.9;
                points.push([px, py, vol, pH]);
            }
        }

        // Draw curve
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        points.forEach((p, i) => {
            if (i === 0) {
                this.ctx.moveTo(p[0], p[1]);
            } else {
                this.ctx.lineTo(p[0], p[1]);
            }
        });
        this.ctx.stroke();

        // Equivalence point
        if (options.showEquivalencePoint) {
            const eqPoint = points[25];
            
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(eqPoint[0], eqPoint[1], 6, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(eqPoint[0], y + height / 2);
            this.ctx.lineTo(eqPoint[0], eqPoint[1]);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Equivalence Point', eqPoint[0], eqPoint[1] - 20);
            this.ctx.fillText(`pH ≈ ${eqPoint[3].toFixed(1)}`, eqPoint[0], eqPoint[1] - 5);
        }

        // Half-equivalence point (buffer region)
        if (options.showBuffer) {
            const halfEqPoint = points[12];
            
            this.ctx.fillStyle = '#F39C12';
            this.ctx.beginPath();
            this.ctx.arc(halfEqPoint[0], halfEqPoint[1], 5, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Half-equivalence', halfEqPoint[0] + 10, halfEqPoint[1] - 10);
            this.ctx.fillText('(Buffer region)', halfEqPoint[0] + 10, halfEqPoint[1] + 5);
        }
    }

    renderSolubilityCurve(diagram, x, y, width, height, options) {
        const { compounds } = diagram;

        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        // Y axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.stroke();
        
        // X axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 50, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Solubility (g/100g H₂O)', 0, 0);
        this.ctx.restore();
        
        this.ctx.fillText('Temperature (°C)', x, y + height / 2 + 40);

        // Grid
        this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.lineWidth = 1;
        
        for (let t = 0; t <= 100; t += 20) {
            const gx = x - width / 2 + (t / 100) * width * 0.9;
            this.ctx.beginPath();
            this.ctx.moveTo(gx, y - height / 2);
            this.ctx.lineTo(gx, y + height / 2);
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(t.toString(), gx, y + height / 2 + 15);
        }

        // Compound curves
        const colors = ['#E74C3C', '#3498DB', '#2ECC71'];
        const curveData = {
            'KNO3': { type: 'steep', color: colors[0] },
            'NaCl': { type: 'flat', color: colors[1] },
            'Ce2(SO4)3': { type: 'inverse', color: colors[2] }
        };

        compounds.forEach((compound, idx) => {
            const data = curveData[compound];
            if (!data) return;

            const points = [];
            
            for (let temp = 0; temp <= 100; temp += 5) {
                let solubility;
                
                if (data.type === 'steep') {
                    // KNO3 - steep increase
                    solubility = 10 + temp * 2;
                } else if (data.type === 'flat') {
                    // NaCl - slight increase
                    solubility = 35 + temp * 0.1;
                } else if (data.type === 'inverse') {
                    // Ce2(SO4)3 - decreases with temperature
                    solubility = 60 - temp * 0.5;
                }
                
                const px = x - width / 2 + (temp / 100) * width * 0.9;
                const py = y + height / 2 - (solubility / 220) * height * 0.9;
                points.push([px, py]);
            }

            // Draw curve
            this.ctx.strokeStyle = data.color;
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            points.forEach((p, i) => {
                if (i === 0) {
                    this.ctx.moveTo(p[0], p[1]);
                } else {
                    this.ctx.lineTo(p[0], p[1]);
                }
            });
            this.ctx.stroke();

            // Label
            if (options.showLabels) {
                const labelPoint = points[Math.floor(points.length * 0.7)];
                this.ctx.fillStyle = data.color;
                this.ctx.font = 'bold 13px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(compound, labelPoint[0] + 10, labelPoint[1]);
            }
        });

        // Legend
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x + width / 2 - 180, y - height / 2 + 20, 160, compounds.length * 25 + 20);
        
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        this.ctx.fillRect(x + width / 2 - 180, y - height / 2 + 20, 160, compounds.length * 25 + 20);

        compounds.forEach((compound, idx) => {
            const ly = y - height / 2 + 40 + idx * 25;
            const data = curveData[compound];
            
            this.ctx.strokeStyle = data.color;
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(x + width / 2 - 170, ly);
            this.ctx.lineTo(x + width / 2 - 140, ly);
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(compound, x + width / 2 - 130, ly + 4);
        });
    }

    renderIndicatorChart(diagram, x, y, width, height, options) {
        const { indicators } = diagram;

        const rowHeight = height / indicators.length;

        const indicatorData = {
            'phenolphthalein': { range: [8.2, 10], colorAcid: '#FFFFFF', colorBase: '#FF00FF', name: 'Phenolphthalein' },
            'methylOrange': { range: [3.1, 4.4], colorAcid: '#FF4500', colorBase: '#FFD700', name: 'Methyl Orange' },
            'bromothymolBlue': { range: [6.0, 7.6], colorAcid: '#FFD700', colorBase: '#0000FF', name: 'Bromothymol Blue' }
        };

        indicators.forEach((indicator, index) => {
            const data = indicatorData[indicator];
            if (!data) return;

            const ry = y - height / 2 + index * rowHeight;

            // Row background
            this.ctx.fillStyle = index % 2 === 0 ? '#F8F9FA' : '#FFFFFF';
            this.ctx.fillRect(x, ry, width, rowHeight);

            // Indicator name
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(data.name, x + 20, ry + rowHeight / 2 - 20);

            // pH range
            this.ctx.font = '12px Arial';
            this.ctx.fillText(`pH ${data.range[0]} - ${data.range[1]}`, x + 20, ry + rowHeight / 2 + 5);

            // Color swatches
            if (options.showColorChange) {
                const swatchY = ry + rowHeight / 2 - 15;
                const swatchSize = 30;
                
                // Acid color
                this.ctx.fillStyle = data.colorAcid;
                this.ctx.fillRect(x + 250, swatchY, swatchSize, swatchSize);
                this.ctx.strokeStyle = '#333333';
                this.ctx.lineWidth = 2;
                this.ctx.strokeRect(x + 250, swatchY, swatchSize, swatchSize);
                
                this.ctx.fillStyle = '#555555';
                this.ctx.font = '11px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Acid', x + 265, swatchY + swatchSize + 15);

                // Arrow
                this.ctx.strokeStyle = '#2ECC71';
                this.ctx.fillStyle = '#2ECC71';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(x + 290, ry + rowHeight / 2);
                this.ctx.lineTo(x + 330, ry + rowHeight / 2);
                this.ctx.stroke();
                
                this.ctx.beginPath();
                this.ctx.moveTo(x + 330, ry + rowHeight / 2);
                this.ctx.lineTo(x + 325, ry + rowHeight / 2 - 4);
                this.ctx.lineTo(x + 325, ry + rowHeight / 2 + 4);
                this.ctx.closePath();
                this.ctx.fill();

                // Base color
                this.ctx.fillStyle = data.colorBase;
                this.ctx.fillRect(x + 340, swatchY, swatchSize, swatchSize);
                this.ctx.strokeStyle = '#333333';
                this.ctx.lineWidth = 2;
                this.ctx.strokeRect(x + 340, swatchY, swatchSize, swatchSize);
                
                this.ctx.fillStyle = '#555555';
                this.ctx.font = '11px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Base', x + 355, swatchY + swatchSize + 15);
            }

            // pH range visualization
            if (options.showpHRange) {
                const scaleWidth = 200;
                const scaleX = x + width - scaleWidth - 20;
                
                // pH scale bar (0-14)
                this.ctx.strokeStyle = '#CCCCCC';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(scaleX, ry + rowHeight / 2 - 10, scaleWidth, 20);
                
                // Transition range highlight
                const startX = scaleX + (data.range[0] / 14) * scaleWidth;
                const endX = scaleX + (data.range[1] / 14) * scaleWidth;
                
                const gradient = this.ctx.createLinearGradient(startX, 0, endX, 0);
                gradient.addColorStop(0, data.colorAcid);
                gradient.addColorStop(1, data.colorBase);
                
                this.ctx.fillStyle = gradient;
                this.ctx.fillRect(startX, ry + rowHeight / 2 - 10, endX - startX, 20);
            }

            // Border
            this.ctx.strokeStyle = '#E0E0E0';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(x, ry + rowHeight);
            this.ctx.lineTo(x + width, ry + rowHeight);
            this.ctx.stroke();
        });
    }

    renderElectrochemicalCell(diagram, x, y, width, height, options) {
        const { type, anode, cathode } = diagram;

        const isGalvanic = type === 'galvanic_cell';

        // Left half-cell (anode in galvanic, cathode in electrolytic)
        const leftX = x - width / 4;
        const beakerWidth = width * 0.35;
        const beakerHeight = height * 0.6;

        // Left beaker
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(leftX - beakerWidth / 2, y - beakerHeight / 2);
        this.ctx.lineTo(leftX - beakerWidth / 2, y + beakerHeight / 2);
        this.ctx.lineTo(leftX + beakerWidth / 2, y + beakerHeight / 2);
        this.ctx.lineTo(leftX + beakerWidth / 2, y - beakerHeight / 2);
        this.ctx.stroke();

        // Solution
        this.ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
        this.ctx.fillRect(leftX - beakerWidth / 2 + 5, y - beakerHeight / 2 + 20, beakerWidth - 10, beakerHeight - 25);

        // Electrode
        const electrodeWidth = 10;
        const electrodeHeight = beakerHeight * 0.8;
        
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillRect(leftX - electrodeWidth / 2, y - electrodeHeight / 2, electrodeWidth, electrodeHeight);
        
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(leftX - electrodeWidth / 2, y - electrodeHeight / 2, electrodeWidth, electrodeHeight);

        // Label
        const leftLabel = isGalvanic ? `Anode (${anode})` : `Cathode (${cathode})`;
        this.ctx.fillStyle = isGalvanic ? '#E74C3C' : '#3498DB';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(leftLabel, leftX, y - beakerHeight / 2 - 20);

        // Solution label
        this.ctx.fillStyle = '#555555';
        this.ctx.font = '12px Arial';
        const leftSolution = isGalvanic ? `${anode}SO₄(aq)` : `${cathode}SO₄(aq)`;
        this.ctx.fillText(leftSolution, leftX, y + beakerHeight / 2 + 20);

        // Right half-cell
        const rightX = x + width / 4;

        // Right beaker
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(rightX - beakerWidth / 2, y - beakerHeight / 2);
        this.ctx.lineTo(rightX - beakerWidth / 2, y + beakerHeight / 2);
        this.ctx.lineTo(rightX + beakerWidth / 2, y + beakerHeight / 2);
        this.ctx.lineTo(rightX + beakerWidth / 2, y - beakerHeight / 2);
        this.ctx.stroke();

        // Solution
        this.ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
        this.ctx.fillRect(rightX - beakerWidth / 2 + 5, y - beakerHeight / 2 + 20, beakerWidth - 10, beakerHeight - 25);

        // Electrode
        this.ctx.fillStyle = '#D4AF37';
        this.ctx.fillRect(rightX - electrodeWidth / 2, y - electrodeHeight / 2, electrodeWidth, electrodeHeight);
        
        this.ctx.strokeStyle = '#B8860B';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(rightX - electrodeWidth / 2, y - electrodeHeight / 2, electrodeWidth, electrodeHeight);

        // Label
        const rightLabel = isGalvanic ? `Cathode (${cathode})` : `Anode (${anode})`;
        this.ctx.fillStyle = isGalvanic ? '#3498DB' : '#E74C3C';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText(rightLabel, rightX, y - beakerHeight / 2 - 20);

        // Solution label
        this.ctx.fillStyle = '#555555';
        this.ctx.font = '12px Arial';
        const rightSolution = isGalvanic ? `${cathode}SO₄(aq)` : `${anode}SO₄(aq)`;
        this.ctx.fillText(rightSolution, rightX, y + beakerHeight / 2 + 20);

        // Wire connection
        const wireY = y - beakerHeight / 2 - 60;
        
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(leftX, y - electrodeHeight / 2);
        this.ctx.lineTo(leftX, wireY);
        this.ctx.lineTo(rightX, wireY);
        this.ctx.lineTo(rightX, y - electrodeHeight / 2);
        this.ctx.stroke();

        // Electron flow
        if (options.showElectronFlow) {
            this.ctx.strokeStyle = '#F39C12';
            this.ctx.fillStyle = '#F39C12';
            this.ctx.lineWidth = 2;

            const arrowCount = 3;
            for (let i = 0; i < arrowCount; i++) {
                const arrowX = leftX + (rightX - leftX) * (i + 1) / (arrowCount + 1);
                
                this.ctx.beginPath();
                this.ctx.arc(arrowX, wireY, 4, 0, Math.PI * 2);
                this.ctx.fill();
                
                // Arrow
                const arrowDir = isGalvanic ? 1 : -1;
                this.ctx.beginPath();
                this.ctx.moveTo(arrowX + arrowDir * 10, wireY);
                this.ctx.lineTo(arrowX + arrowDir * 5, wireY - 4);
                this.ctx.lineTo(arrowX + arrowDir * 5, wireY + 4);
                this.ctx.closePath();
                this.ctx.fill();
            }

            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('e⁻ flow', x, wireY - 15);
        }

        // Voltmeter or power source
        const deviceY = wireY;
        const deviceSize = 40;
        
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.beginPath();
        this.ctx.arc(x, deviceY, deviceSize / 2, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        
        if (isGalvanic) {
            this.ctx.fillText('V', x, deviceY);
            this.ctx.font = '10px Arial';
            this.ctx.fillText('Voltmeter', x, deviceY + deviceSize / 2 + 15);
        } else {
            this.ctx.fillText('⚡', x, deviceY);
            this.ctx.font = '10px Arial';
            this.ctx.fillText('Power Source', x, deviceY + deviceSize / 2 + 15);
        }

        // Salt bridge
        if (options.showSaltBridge) {
            const bridgeY = y + 20;
            const bridgeWidth = rightX - leftX - beakerWidth / 2;
            const bridgeHeight = 20;
            
            this.ctx.fillStyle = 'rgba(189, 195, 199, 0.8)';
            this.ctx.beginPath();
            this.ctx.arc(leftX + beakerWidth / 4, bridgeY, bridgeHeight / 2, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.fillRect(leftX + beakerWidth / 4, bridgeY - bridgeHeight / 2, bridgeWidth, bridgeHeight);
            this.ctx.beginPath();
            this.ctx.arc(rightX - beakerWidth / 4, bridgeY, bridgeHeight / 2, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.strokeStyle = '#7F8C8D';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(leftX + beakerWidth / 4, bridgeY, bridgeHeight / 2, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(leftX + beakerWidth / 4, bridgeY - bridgeHeight / 2);
            this.ctx.lineTo(rightX - beakerWidth / 4, bridgeY - bridgeHeight / 2);
            this.ctx.lineTo(rightX - beakerWidth / 4, bridgeY + bridgeHeight / 2);
            this.ctx.lineTo(leftX + beakerWidth / 4, bridgeY + bridgeHeight / 2);
            this.ctx.stroke();

            this.ctx.fillStyle = '#555555';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Salt Bridge', x, bridgeY + bridgeHeight / 2 + 15);
        }

        // Ion movement
        if (options.showIonFlow) {
            // Cations moving
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            
            for (let i = 0; i < 3; i++) {
                const ionY = bridgeY - 5 + i * 5;
                this.ctx.fillText('+', leftX + beakerWidth / 4 + i * 30, ionY);
            }

            // Anions moving
            this.ctx.fillStyle = '#3498DB';
            for (let i = 0; i < 3; i++) {
                const ionY = bridgeY + 5 - i * 5;
                this.ctx.fillText('−', rightX - beakerWidth / 4 - i * 30, ionY);
            }
        }
    }

    renderElectrodeProcesses(diagram, x, y, width, height, options) {
        const { reactions } = diagram;

        const processWidth = width / 2;

        // Oxidation (Anode)
        const oxX = x - processWidth / 2;
        
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('OXIDATION (Anode)', oxX, y - height / 2 + 30);

        // Electrode
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillRect(oxX - 10, y - 100, 20, 200);
        
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(oxX - 10, y - 100, 20, 200);

        // Metal atom
        this.ctx.fillStyle = '#95A5A6';
        this.ctx.beginPath();
        this.ctx.arc(oxX, y - 50, 15, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.strokeStyle = '#7F8C8D';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('M', oxX, y - 50);

        // Arrow showing loss of electrons
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(oxX + 20, y - 50);
        this.ctx.lineTo(oxX + 60, y - 50);
        this.ctx.stroke();
        
        this.ctx.beginPath();
        this.ctx.moveTo(oxX + 60, y - 50);
        this.ctx.lineTo(oxX + 55, y - 54);
        this.ctx.lineTo(oxX + 55, y - 46);
        this.ctx.closePath();
        this.ctx.fill();

        // Metal ion in solution
        this.ctx.fillStyle = '#9B59B6';
        this.ctx.beginPath();
        this.ctx.arc(oxX + 80, y - 50, 12, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillText('M', oxX + 80, y - 52);
        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillText('n+', oxX + 88, y - 56);

        // Electrons to circuit
        if (options.showElectrons) {
            for (let i = 0; i < 3; i++) {
                const ex = oxX + i * 25;
                const ey = y - 120 - i * 10;
                
                this.ctx.fillStyle = '#F39C12';
                this.ctx.beginPath();
                this.ctx.arc(ex, ey, 5, 0, Math.PI * 2);
                this.ctx.fill();
                
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 8px Arial';
                this.ctx.fillText('e⁻', ex, ey + 2);
            }

            this.ctx.strokeStyle = '#F39C12';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(oxX, y - 100);
            this.ctx.lineTo(oxX, y - 140);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }

        // Half-equation
        if (options.showHalfReactions) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('M(s) → M^n+(aq) + ne⁻', oxX, y + 120);
            this.ctx.font = 'italic 11px Arial';
            this.ctx.fillStyle = '#555555';
            this.ctx.fillText('(Loss of electrons)', oxX, y + 140);
        }

        // Reduction (Cathode)
        const redX = x + processWidth / 2;
        
        this.ctx.fillStyle = '#3498DB';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('REDUCTION (Cathode)', redX, y - height / 2 + 30);

        // Electrode
        this.ctx.fillStyle = '#D4AF37';
        this.ctx.fillRect(redX - 10, y - 100, 20, 200);
        
        this.ctx.strokeStyle = '#B8860B';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(redX - 10, y - 100, 20, 200);

        // Metal ion in solution
        this.ctx.fillStyle = '#9B59B6';
        this.ctx.beginPath();
        this.ctx.arc(redX - 80, y - 50, 12, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 11px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('M', redX - 80, y - 52);
        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillText('n+', redX - 72, y - 56);

        // Arrow showing gain of electrons
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.fillStyle = '#3498DB';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(redX - 60, y - 50);
        this.ctx.lineTo(redX - 20, y - 50);
        this.ctx.stroke();
        
        this.ctx.beginPath();
        this.ctx.moveTo(redX - 20, y - 50);
        this.ctx.lineTo(redX - 25, y - 54);
        this.ctx.lineTo(redX - 25, y - 46);
        this.ctx.closePath();
        this.ctx.fill();

        // Metal atom deposited
        this.ctx.fillStyle = '#95A5A6';
        this.ctx.beginPath();
        this.ctx.arc(redX, y - 50, 15, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.strokeStyle = '#7F8C8D';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillText('M', redX, y - 50);

        // Electrons from circuit
        if (options.showElectrons) {
            for (let i = 0; i < 3; i++) {
                const ex = redX - i * 25;
                const ey = y - 120 - i * 10;
                
                this.ctx.fillStyle = '#F39C12';
                this.ctx.beginPath();
                this.ctx.arc(ex, ey, 5, 0, Math.PI * 2);
                this.ctx.fill();
                
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 8px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText('e⁻', ex, ey);
            }

            this.ctx.strokeStyle = '#F39C12';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(redX, y - 140);
            this.ctx.lineTo(redX, y - 100);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }

        // Half-equation
        if (options.showHalfReactions) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('M^n+(aq) + ne⁻ → M(s)', redX, y + 120);
            this.ctx.font = 'italic 11px Arial';
            this.ctx.fillStyle = '#555555';
            this.ctx.fillText('(Gain of electrons)', redX, y + 140);
        }

        // Divider
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([10, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - height / 2 + 60);
        this.ctx.lineTo(x, y + height / 2 - 60);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
    }

    renderElectrochemicalSeries(diagram, x, y, width, height, options) {
        const { elements } = diagram;

        const potentials = {
            'Li': -3.04, 'K': -2.93, 'Ca': -2.87, 'Na': -2.71, 'Mg': -2.37,
            'Al': -1.66, 'Zn': -0.76, 'Fe': -0.44, 'Pb': -0.13, 'H': 0.00,
            'Cu': +0.34, 'Ag': +0.80, 'Au': +1.50
        };

        const rowHeight = height / elements.length;

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Electrochemical Series', x, y - height / 2 - 20);

        // Header
        this.ctx.fillStyle = '#34495E';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, 40);

        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Element', x - width / 2 + 30, y - height / 2 + 25);
        this.ctx.fillText('Half-Reaction', x - width / 2 + 150, y - height / 2 + 25);
        this.ctx.textAlign = 'right';
        this.ctx.fillText('E° (V)', x + width / 2 - 30, y - height / 2 + 25);

        // Elements
        elements.forEach((element, index) => {
            const ry = y - height / 2 + 40 + index * rowHeight;
            const potential = potentials[element];

            // Alternating background
            if (index % 2 === 0) {
                this.ctx.fillStyle = '#F8F9FA';
                this.ctx.fillRect(x - width / 2, ry, width, rowHeight);
            }

            // Element symbol
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(element, x - width / 2 + 60, ry + rowHeight / 2 + 5);

            // Half-reaction
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'left';
            const halfReaction = element === 'H' ? 
                '2H⁺ + 2e⁻ → H₂' : 
                `${element}²⁺ + 2e⁻ → ${element}`;
            this.ctx.fillText(halfReaction, x - width / 2 + 150, ry + rowHeight / 2 + 5);

            // Standard potential
            const potentialColor = potential < 0 ? '#E74C3C' : '#2ECC71';
            this.ctx.fillStyle = potentialColor;
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText(potential.toFixed(2), x + width / 2 - 30, ry + rowHeight / 2 + 5);

            // Divider
            this.ctx.strokeStyle = '#E0E0E0';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(x - width / 2, ry + rowHeight);
            this.ctx.lineTo(x + width / 2, ry + rowHeight);
            this.ctx.stroke();
        });

        // Arrow showing trend
        if (options.showArrow) {
            const arrowX = x + width / 2 + 50;
            const arrowTop = y - height / 2 + 60;
            const arrowBottom = y + height / 2 - 20;

            this.ctx.strokeStyle = '#3498DB';
            this.ctx.fillStyle = '#3498DB';
            this.ctx.lineWidth = 3;

            // Vertical line
            this.ctx.beginPath();
            this.ctx.moveTo(arrowX, arrowTop);
            this.ctx.lineTo(arrowX, arrowBottom);
            this.ctx.stroke();

            // Arrow heads
            this.ctx.beginPath();
            this.ctx.moveTo(arrowX, arrowTop);
            this.ctx.lineTo(arrowX - 6, arrowTop + 12);
            this.ctx.lineTo(arrowX + 6, arrowTop + 12);
            this.ctx.closePath();
            this.ctx.fill();

            // Labels
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Stronger', arrowX + 15, arrowTop + 20);
            this.ctx.fillText('Oxidizing', arrowX + 15, arrowTop + 35);
            this.ctx.fillText('Agent', arrowX + 15, arrowTop + 50);

            this.ctx.fillText('Stronger', arrowX + 15, arrowBottom - 40);
            this.ctx.fillText('Reducing', arrowX + 15, arrowBottom - 25);
            this.ctx.fillText('Agent', arrowX + 15, arrowBottom - 10);
        }

        // Potentials legend
        if (options.showPotentials) {
            const legendY = y + height / 2 + 40;

            this.ctx.fillStyle = '#555555';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('E° > 0: Good oxidizing agents (gain electrons easily)', x, legendY);
            this.ctx.fillText('E° < 0: Good reducing agents (lose electrons easily)', x, legendY + 20);
        }
    }

    // Remaining stub methods - implementing key ones

    renderPhaseDiagram(diagram, x, y, width, height, options) {
        const { substance } = diagram;

        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        // Y axis (Pressure)
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.stroke();
        
        // X axis (Temperature)
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 45, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Pressure', 0, 0);
        this.ctx.restore();
        
        this.ctx.fillText('Temperature', x, y + height / 2 + 35);

        // Phase regions
        const regions = [
            { name: 'SOLID', x: x - width / 3, y: y - height / 4, color: 'rgba(52, 152, 219, 0.2)' },
            { name: 'LIQUID', x: x - width / 6, y: y + height / 6, color: 'rgba(46, 204, 113, 0.2)' },
            { name: 'GAS', x: x + width / 4, y: y + height / 4, color: 'rgba(241, 196, 15, 0.2)' }
        ];

        // Solid region
        this.ctx.fillStyle = regions[0].color;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 4, y - height / 4);
        this.ctx.lineTo(x - width / 6, y + height / 2);
        this.ctx.closePath();
        this.ctx.fill();

        // Liquid region
        this.ctx.fillStyle = regions[1].color;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 4, y - height / 4);
        this.ctx.lineTo(x, y);
        this.ctx.lineTo(x + width / 8, y + height / 2);
        this.ctx.lineTo(x - width / 6, y + height / 2);
        this.ctx.closePath();
        this.ctx.fill();

        // Gas region
        this.ctx.fillStyle = regions[2].color;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + width / 2, y - height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 8, y + height / 2);
        this.ctx.closePath();
        this.ctx.fill();

        // Phase boundaries
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;

        // Solid-Liquid boundary
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 4, y - height / 4);
        this.ctx.lineTo(x - width / 6, y + height / 2);
        this.ctx.stroke();

        // Liquid-Gas boundary (curved)
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.quadraticCurveTo(x + width / 6, y + height / 6, x + width / 8, y + height / 2);
        this.ctx.stroke();

        // Solid-Gas boundary
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 4, y - height / 4);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();

        // Phase labels
        regions.forEach(region => {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(region.name, region.x, region.y);
        });

        // Critical point
        if (options.showCriticalPoint) {
            const cpX = x + width / 8;
            const cpY = y + height / 2;

            this.ctx.fillStyle = '#9B59B6';
            this.ctx.beginPath();
            this.ctx.arc(cpX, cpY, 6, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Critical Point', cpX + 10, cpY);
        }

        // Triple point
        if (options.showTriplePoint) {
            const tpX = x - width / 4;
            const tpY = y - height / 4;

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(tpX, tpY, 6, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('Triple Point', tpX - 10, tpY);
        }

        // Phase regions with boundaries
        if (options.showPhaseRegions) {
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('All three phases coexist', x - width / 4, y - height / 4 - 15);
        }
    }

}

export { ChemistryDiagramsRegistry, ChemistryDiagramRenderer };
