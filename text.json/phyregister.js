
import { createCanvas } from '@napi-rs/canvas';
import ExcelJS from 'exceljs';
import fs from 'fs';
import os from 'os';
import path from 'path';
import readline from 'readline';
import * as math from 'mathjs';
import GIFEncoder from 'gifencoder';
import { PassThrough } from 'stream';



// ============================================================================
// PHYSICS DIAGRAMS REGISTRY - Complete Physics Visualization System
// ============================================================================

class PhysicsDiagramsRegistry {
    static diagrams = {
        // ===== 1. MECHANICS =====
        'freeBodyDiagram': {
            name: 'Free Body Diagram',
            category: 'Mechanics',
            description: 'Force vectors acting on an object',
            type: 'free_body_diagram',
            forces: [
                { name: 'Weight', magnitude: 50, angle: 270, color: '#E74C3C' },
                { name: 'Normal', magnitude: 50, angle: 90, color: '#3498DB' },
                { name: 'Applied', magnitude: 30, angle: 0, color: '#2ECC71' }
            ],
            defaultOptions: {
                title: 'Free Body Diagram',
                showLabels: true,
                showMagnitudes: true,
                showAngles: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorDiagram': {
            name: 'Vector Addition Diagram',
            category: 'Mechanics',
            description: 'Vector addition using tip-to-tail method',
            type: 'vector_diagram',
            vectors: [
                { x: 40, y: 30, label: 'A', color: '#E74C3C' },
                { x: 30, y: -20, label: 'B', color: '#3498DB' }
            ],
            showResultant: true,
            defaultOptions: {
                title: 'Vector Addition',
                showComponents: true,
                showResultant: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'motionGraphs': {
            name: 'Motion Graphs (s-t, v-t, a-t)',
            category: 'Mechanics',
            description: 'Kinematic graphs showing motion relationships',
            type: 'motion_graphs',
            graphType: 'velocity-time',
            segments: [
                { time: 0, value: 0, label: 'Rest' },
                { time: 2, value: 10, label: 'Accelerating' },
                { time: 5, value: 10, label: 'Constant velocity' },
                { time: 7, value: 0, label: 'Decelerating' }
            ],
            defaultOptions: {
                title: 'Velocity-Time Graph',
                showArea: true,
                showSlope: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'projectileMotion': {
            name: 'Projectile Motion Trajectory',
            category: 'Mechanics',
            description: 'Parabolic path of projectile motion',
            type: 'projectile_motion',
            initialVelocity: 20,
            launchAngle: 45,
            defaultOptions: {
                title: 'Projectile Motion',
                showVelocityVectors: true,
                showComponents: true,
                showTrajectory: true,
                showRange: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'inclinedPlane': {
            name: 'Inclined Plane Diagram',
            category: 'Mechanics',
            description: 'Forces on an object on an incline',
            type: 'inclined_plane',
            angle: 30,
            mass: 10,
            friction: true,
            defaultOptions: {
                title: 'Inclined Plane',
                showForceComponents: true,
                showAngles: true,
                showFriction: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'momentumCollision': {
            name: 'Momentum Collision Diagram',
            category: 'Mechanics',
            description: 'Before and after collision comparison',
            type: 'momentum_collision',
            collisionType: 'elastic',
            objects: [
                { mass: 2, velocity: 5, color: '#E74C3C' },
                { mass: 3, velocity: -3, color: '#3498DB' }
            ],
            defaultOptions: {
                title: 'Elastic Collision',
                showBefore: true,
                showAfter: true,
                showMomentum: true,
                showEnergy: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'circularMotion': {
            name: 'Circular Motion Diagram',
            category: 'Mechanics',
            description: 'Centripetal force and circular motion',
            type: 'circular_motion',
            radius: 100,
            velocity: 15,
            defaultOptions: {
                title: 'Circular Motion',
                showCentripetalForce: true,
                showVelocity: true,
                showAcceleration: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'workEnergyBarChart': {
            name: 'Work-Energy Bar Chart',
            category: 'Mechanics',
            description: 'Energy transformation bar chart',
            type: 'work_energy_chart',
            initialKE: 100,
            initialPE: 0,
            finalKE: 50,
            finalPE: 40,
            workDone: -10,
            defaultOptions: {
                title: 'Work-Energy Transformation',
                showValues: true,
                showTotal: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'springHarmonicMotion': {
            name: 'Spring Harmonic Oscillator',
            category: 'Mechanics',
            description: 'Simple harmonic motion of a spring',
            type: 'spring_harmonic',
            amplitude: 50,
            springConstant: 10,
            mass: 2,
            defaultOptions: {
                title: 'Simple Harmonic Motion - Spring',
                showDisplacement: true,
                showForce: true,
                showEnergy: true,
                animate: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'torqueLeverDiagram': {
            name: 'Torque and Lever Diagram',
            category: 'Mechanics',
            description: 'Lever showing torque and moment arm',
            type: 'torque_lever',
            leverLength: 200,
            fulcrumPosition: 0.3,
            force1: 50,
            force2: 30,
            defaultOptions: {
                title: 'Torque on a Lever',
                showMomentArms: true,
                showForces: true,
                showRotation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. WAVES & SOUND =====
        'transverseLongitudinalWaves': {
            name: 'Transverse vs Longitudinal Waves',
            category: 'Waves & Sound',
            description: 'Comparison of wave types',
            type: 'wave_types',
            wavelength: 100,
            amplitude: 30,
            defaultOptions: {
                title: 'Transverse vs Longitudinal Waves',
                showParticles: true,
                showLabels: true,
                animate: false,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'wavefrontDiagram': {
            name: 'Wavefront Diagram',
            category: 'Waves & Sound',
            description: 'Circular wavefronts from point source',
            type: 'wavefront',
            wavelength: 40,
            numWavefronts: 5,
            defaultOptions: {
                title: 'Wavefronts',
                showSource: true,
                showRays: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionRefraction': {
            name: 'Reflection and Refraction',
            category: 'Waves & Sound',
            description: 'Wave behavior at boundaries',
            type: 'reflection_refraction',
            incidentAngle: 30,
            n1: 1.0,
            n2: 1.5,
            defaultOptions: {
                title: 'Reflection and Refraction',
                showNormals: true,
                showAngles: true,
                showSnellsLaw: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'waveInterference': {
            name: 'Wave Interference Pattern',
            category: 'Waves & Sound',
            description: 'Constructive and destructive interference',
            type: 'wave_interference',
            separation: 100,
            wavelength: 30,
            defaultOptions: {
                title: 'Wave Interference',
                showSources: true,
                showNodes: true,
                showAntinodes: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'standingWaves': {
            name: 'Standing Waves on String',
            category: 'Waves & Sound',
            description: 'Harmonics and nodes on vibrating string',
            type: 'standing_waves',
            harmonic: 3,
            length: 300,
            amplitude: 40,
            defaultOptions: {
                title: 'Standing Waves - 3rd Harmonic',
                showNodes: true,
                showAntinodes: true,
                animate: false,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dopplerEffect': {
            name: 'Doppler Effect Diagram',
            category: 'Waves & Sound',
            description: 'Wavefront compression/expansion',
            type: 'doppler_effect',
            sourceVelocity: 0.5,
            direction: 'right',
            defaultOptions: {
                title: 'Doppler Effect',
                showWavefronts: true,
                showVelocity: true,
                showFrequencyChange: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'soundWavePressure': {
            name: 'Sound Wave Pressure Graph',
            category: 'Waves & Sound',
            description: 'Pressure variation in sound wave',
            type: 'sound_pressure',
            frequency: 440,
            amplitude: 50,
            defaultOptions: {
                title: 'Sound Wave - Pressure vs Position',
                showCompressions: true,
                showRarefactions: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'diffractionPattern': {
            name: 'Diffraction Pattern',
            category: 'Waves & Sound',
            description: 'Single and double slit diffraction',
            type: 'diffraction',
            slitType: 'double',
            slitWidth: 20,
            slitSeparation: 80,
            wavelength: 10,
            defaultOptions: {
                title: 'Double Slit Diffraction',
                showIntensity: true,
                showPattern: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. THERMODYNAMICS & HEAT =====
        'heatingCurvePhysics': {
            name: 'Heating Curve',
            category: 'Thermodynamics',
            description: 'Temperature vs heat added showing phase changes',
            type: 'heating_curve_physics',
            substance: 'water',
            defaultOptions: {
                title: 'Heating Curve - Water',
                showPhases: true,
                showPlateaus: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'phaseDiagramPhysics': {
            name: 'Phase Diagram (P-T)',
            category: 'Thermodynamics',
            description: 'Pressure vs temperature phase diagram',
            type: 'phase_diagram_physics',
            substance: 'water',
            defaultOptions: {
                title: 'Phase Diagram',
                showTriplePoint: true,
                showCriticalPoint: true,
                showPhaseRegions: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pvDiagram': {
            name: 'P-V Diagram',
            category: 'Thermodynamics',
            description: 'Pressure-volume diagram for gas processes',
            type: 'pv_diagram',
            processType: 'isothermal',
            initialP: 100,
            initialV: 50,
            finalV: 150,
            defaultOptions: {
                title: 'P-V Diagram - Isothermal Process',
                showWork: true,
                showCurve: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'carnotCycle': {
            name: 'Carnot Cycle Diagram',
            category: 'Thermodynamics',
            description: 'Ideal heat engine cycle',
            type: 'carnot_cycle',
            Th: 500,
            Tc: 300,
            defaultOptions: {
                title: 'Carnot Cycle',
                showStages: true,
                showEfficiency: true,
                showPVDiagram: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'heatTransferModes': {
            name: 'Heat Transfer Modes',
            category: 'Thermodynamics',
            description: 'Conduction, convection, radiation',
            type: 'heat_transfer',
            modes: ['conduction', 'convection', 'radiation'],
            defaultOptions: {
                title: 'Heat Transfer Modes',
                showParticles: true,
                showArrows: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'kineticTheoryParticles': {
            name: 'Kinetic Theory Particle Model',
            category: 'Thermodynamics',
            description: 'Gas particles in motion',
            type: 'kinetic_theory',
            numParticles: 50,
            temperature: 300,
            defaultOptions: {
                title: 'Kinetic Theory of Gases',
                showVelocityVectors: true,
                showCollisions: false,
                animate: false,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. ELECTRICITY & MAGNETISM =====
        'electricFieldLines': {
            name: 'Electric Field Lines',
            category: 'Electricity & Magnetism',
            description: 'Field lines around charges',
            type: 'electric_field',
            charges: [
                { x: -100, y: 0, charge: 1, label: '+Q' },
                { x: 100, y: 0, charge: -1, label: '-Q' }
            ],
            defaultOptions: {
                title: 'Electric Field Lines',
                showCharges: true,
                showFieldLines: true,
                numLines: 16,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'circuitDiagram': {
            name: 'Electric Circuit Diagram',
            category: 'Electricity & Magnetism',
            description: 'Standard circuit with components',
            type: 'circuit_diagram',
            components: [
                { type: 'battery', voltage: 12 },
                { type: 'resistor', resistance: 100 },
                { type: 'capacitor', capacitance: 10 },
                { type: 'switch', state: 'closed' }
            ],
            configuration: 'series',
            defaultOptions: {
                title: 'Electric Circuit',
                showValues: true,
                showCurrent: true,
                showSymbols: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'seriesParallelCircuits': {
            name: 'Series vs Parallel Circuits',
            category: 'Electricity & Magnetism',
            description: 'Comparison of circuit configurations',
            type: 'series_parallel',
            voltage: 12,
            resistors: [100, 200, 150],
            defaultOptions: {
                title: 'Series vs Parallel Circuits',
                showBoth: true,
                showCalculations: true,
                showCurrent: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'potentialDistanceGraph': {
            name: 'Electric Potential vs Distance',
            category: 'Electricity & Magnetism',
            description: 'Potential gradient graph',
            type: 'potential_distance',
            chargeQ: 10,
            defaultOptions: {
                title: 'Electric Potential vs Distance',
                showFieldStrength: false,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'magneticFieldLines': {
            name: 'Magnetic Field Lines',
            category: 'Electricity & Magnetism',
            description: 'Field around magnets and current-carrying wires',
            type: 'magnetic_field',
            sourceType: 'bar_magnet',
            defaultOptions: {
                title: 'Magnetic Field Lines - Bar Magnet',
                showPoles: true,
                showFieldLines: true,
                showCompass: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electromagneticInduction': {
            name: 'Electromagnetic Induction',
            category: 'Electricity & Magnetism',
            description: 'Induced current from changing flux',
            type: 'em_induction',
            coilTurns: 5,
            magnetMoving: true,
            defaultOptions: {
                title: 'Electromagnetic Induction',
                showMagnet: true,
                showCoil: true,
                showCurrent: true,
                showFlux: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'transformer': {
            name: 'Transformer Diagram',
            category: 'Electricity & Magnetism',
            description: 'Step-up/step-down transformer',
            type: 'transformer',
            primaryTurns: 100,
            secondaryTurns: 500,
            inputVoltage: 120,
            defaultOptions: {
                title: 'Transformer',
                showCore: true,
                showTurns: true,
                showVoltages: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'capacitorChargeCurve': {
            name: 'Capacitor Charge/Discharge Curve',
            category: 'Electricity & Magnetism',
            description: 'Exponential charge and discharge',
            type: 'capacitor_curve',
            capacitance: 100,
            resistance: 1000,
            voltage: 12,
            curveType: 'charging',
            defaultOptions: {
                title: 'Capacitor Charging Curve',
                showTimeConstant: true,
                showEquation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lorentzForce': {
            name: 'Lorentz Force Diagram',
            category: 'Electricity & Magnetism',
            description: 'Force on charged particle in magnetic field',
            type: 'lorentz_force',
            velocity: { x: 50, y: 0 },
            magneticField: { direction: 'into_page', magnitude: 1 },
            charge: 1,
            defaultOptions: {
                title: 'Lorentz Force',
                showVelocity: true,
                showField: true,
                showForce: true,
                showRightHandRule: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. OPTICS =====
        'planeMirrorRayDiagram': {
            name: 'Plane Mirror Ray Diagram',
            category: 'Optics',
            description: 'Image formation in plane mirror',
            type: 'mirror_ray_diagram',
            mirrorType: 'plane',
            objectDistance: 100,
            objectHeight: 50,
            defaultOptions: {
                title: 'Plane Mirror',
                showObject: true,
                showImage: true,
                showRays: true,
                showNormals: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'concaveMirrorRayDiagram': {
            name: 'Concave Mirror Ray Diagram',
            category: 'Optics',
            description: 'Image formation in concave mirror',
            type: 'mirror_ray_diagram',
            mirrorType: 'concave',
            focalLength: 100,
            objectDistance: 150,
            objectHeight: 50,
            defaultOptions: {
                title: 'Concave Mirror',
                showObject: true,
                showImage: true,
                showRays: true,
                showFocalPoint: true,
                showCenter: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'convexMirrorRayDiagram': {
            name: 'Convex Mirror Ray Diagram',
            category: 'Optics',
            description: 'Image formation in convex mirror',
            type: 'mirror_ray_diagram',
            mirrorType: 'convex',
            focalLength: -100,
            objectDistance: 150,
            objectHeight: 50,
            defaultOptions: {
                title: 'Convex Mirror',
                showObject: true,
                showImage: true,
                showRays: true,
                showFocalPoint: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'convexLensRayDiagram': {
            name: 'Convex Lens Ray Diagram',
            category: 'Optics',
            description: 'Image formation through convex lens',
            type: 'lens_ray_diagram',
            lensType: 'convex',
            focalLength: 100,
            objectDistance: 150,
            objectHeight: 50,
            defaultOptions: {
                title: 'Convex Lens',
                showObject: true,
                showImage: true,
                showPrincipalRays: true,
                showFocalPoints: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'concaveLensRayDiagram': {
            name: 'Concave Lens Ray Diagram',
            category: 'Optics',
            description: 'Image formation through concave lens',
            type: 'lens_ray_diagram',
            lensType: 'concave',
            focalLength: -100,
            objectDistance: 150,
            objectHeight: 50,
            defaultOptions: {
                title: 'Concave Lens',
                showObject: true,
                showImage: true,
                showPrincipalRays: true,
                showFocalPoints: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'snellsLawRefraction': {
            name: "Snell's Law Refraction",
            category: 'Optics',
            description: 'Light bending at interface',
            type: 'snells_law',
            n1: 1.0,
            n2: 1.5,
            incidentAngle: 30,
            defaultOptions: {
                title: "Snell's Law",
                showAngles: true,
                showNormals: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'totalInternalReflection': {
            name: 'Total Internal Reflection',
            category: 'Optics',
            description: 'Critical angle and TIR',
            type: 'total_internal_reflection',
            n1: 1.5,
            n2: 1.0,
            angle: 50,
            defaultOptions: {
                title: 'Total Internal Reflection',
                showCriticalAngle: true,
                showMultipleAngles: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'prismDispersion': {
            name: 'Prism Dispersion (Rainbow)',
            category: 'Optics',
            description: 'White light separation into spectrum',
            type: 'prism_dispersion',
            prismAngle: 60,
            defaultOptions: {
                title: 'Dispersion Through Prism',
                showSpectrum: true,
                showAngles: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'opticalFiber': {
            name: 'Optical Fiber Diagram',
            category: 'Optics',
            description: 'Light propagation in fiber optic cable',
            type: 'optical_fiber',
            fiberLength: 300,
            numReflections: 5,
            defaultOptions: {
                title: 'Optical Fiber',
                showCore: true,
                showCladding: true,
                showReflections: true,
                width: 900,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'diffractionInterferencePattern': {
            name: 'Optical Interference Pattern',
            category: 'Optics',
            description: 'Intensity pattern from interference',
            type: 'optical_interference',
            slitSeparation: 0.5,
            wavelength: 600,
            screenDistance: 1000,
            defaultOptions: {
                title: 'Double Slit Interference',
                showFringes: true,
                showIntensity: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'polarizationDiagram': {
            name: 'Light Polarization',
            category: 'Optics',
            description: 'Polarization of light waves',
            type: 'polarization',
            polarizationType: 'linear',
            defaultOptions: {
                title: 'Light Polarization',
                showUnpolarized: true,
                showPolarizer: true,
                showPolarized: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. MODERN PHYSICS (QUANTUM) =====
        'photoelectricEffect': {
            name: 'Photoelectric Effect',
            category: 'Modern Physics',
            description: 'Photons ejecting electrons from metal',
            type: 'photoelectric_effect',
            workFunction: 2.0,
            photonEnergy: 3.0,
            defaultOptions: {
                title: 'Photoelectric Effect',
                showPhotons: true,
                showElectrons: true,
                showEnergyLevels: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lineEmissionSpectra': {
            name: 'Line Emission Spectra',
            category: 'Modern Physics',
            description: 'Discrete spectral lines from atoms',
            type: 'emission_spectra',
            element: 'hydrogen',
            transitions: [
                { n1: 3, n2: 2, wavelength: 656 },
                { n1: 4, n2: 2, wavelength: 486 },
                { n1: 5, n2: 2, wavelength: 434 }
            ],
            defaultOptions: {
                title: 'Hydrogen Emission Spectrum',
                showEnergyLevels: true,
                showSpectrum: true,
                showTransitions: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'blackbodyRadiation': {
            name: 'Blackbody Radiation Curves',
            category: 'Modern Physics',
            description: 'Intensity vs wavelength at different temperatures',
            type: 'blackbody_radiation',
            temperatures: [3000, 4000, 5000, 6000],
            defaultOptions: {
                title: 'Blackbody Radiation',
                showPeaks: true,
                showWiensLaw: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quantumTunneling': {
            name: 'Quantum Tunneling Diagram',
            category: 'Modern Physics',
            description: 'Particle tunneling through potential barrier',
            type: 'quantum_tunneling',
            barrierHeight: 10,
            barrierWidth: 50,
            particleEnergy: 7,
            defaultOptions: {
                title: 'Quantum Tunneling',
                showPotentialWell: true,
                showWavefunction: true,
                showProbability: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electronProbabilityDistribution': {
            name: 'Electron Probability Distribution',
            category: 'Modern Physics',
            description: 'Orbital probability density',
            type: 'electron_probability',
            orbital: '1s',
            defaultOptions: {
                title: 'Electron Probability - 1s Orbital',
                showRadialDistribution: true,
                showProbabilityCloud: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'waveParticleDuality': {
            name: 'Wave-Particle Duality',
            category: 'Modern Physics',
            description: 'Dual nature of matter and light',
            type: 'wave_particle_duality',
            particle: 'electron',
            defaultOptions: {
                title: 'Wave-Particle Duality',
                showWaveNature: true,
                showParticleNature: true,
                showExperiment: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }

        },

        'deBroglieWavelength': {
            name: 'de Broglie Wavelength',
            category: 'Modern Physics',
            description: 'Matter waves for moving particles',
            type: 'de_broglie',
            particle: 'electron',
            velocity: 1e6,
            defaultOptions: {
                title: 'de Broglie Wavelength',
                showWaveform: true,
                showEquation: true,
                showComparison: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. RELATIVITY =====
        'spacetimeDiagram': {
            name: 'Spacetime Diagram',
            category: 'Relativity',
            description: 'Worldlines in spacetime',
            type: 'spacetime_diagram',
            events: [
                { x: 0, t: 0, label: 'A' },
                { x: 50, t: 100, label: 'B' },
                { x: -30, t: 80, label: 'C' }
            ],
            defaultOptions: {
                title: 'Spacetime Diagram',
                showLightCones: true,
                showWorldlines: true,
                showAxes: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'timeDilation': {
            name: 'Time Dilation Graph',
            category: 'Relativity',
            description: 'Time dilation vs velocity',
            type: 'time_dilation',
            defaultOptions: {
                title: 'Time Dilation',
                showLorentzFactor: true,
                showEquation: true,
                showExample: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lengthContraction': {
            name: 'Length Contraction',
            category: 'Relativity',
            description: 'Object contraction at high velocity',
            type: 'length_contraction',
            properLength: 100,
            velocity: 0.8,
            defaultOptions: {
                title: 'Length Contraction',
                showRestFrame: true,
                showMovingFrame: true,
                showEquation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'curvedSpacetime': {
            name: 'Curved Spacetime (Gravity)',
            category: 'Relativity',
            description: 'Rubber sheet model of gravity',
            type: 'curved_spacetime',
            mass: 100,
            defaultOptions: {
                title: 'Curved Spacetime',
                showGrid: true,
                showMass: true,
                showOrbits: true,
                show3D: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'twinParadox': {
            name: 'Twin Paradox Diagram',
            category: 'Relativity',
            description: 'Time dilation in twin paradox',
            type: 'twin_paradox',
            tripDuration: 10,
            velocity: 0.9,
            defaultOptions: {
                title: 'Twin Paradox',
                showSpacetimePath: true,
                showAges: true,
                showExplanation: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'velocityAddition': {
            name: 'Relativistic Velocity Addition',
            category: 'Relativity',
            description: 'Velocity addition formula diagram',
            type: 'velocity_addition',
            v1: 0.6,
            v2: 0.7,
            defaultOptions: {
                title: 'Relativistic Velocity Addition',
                showClassical: true,
                showRelativistic: true,
                showComparison: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 8. NUCLEAR PHYSICS =====
        'nuclearStructurePhysics': {
            name: 'Nuclear Structure',
            category: 'Nuclear Physics',
            description: 'Protons and neutrons in nucleus',
            type: 'nuclear_structure_physics',
            protons: 6,
            neutrons: 6,
            element: 'C-12',
            defaultOptions: {
                title: 'Nuclear Structure - Carbon-12',
                showProtons: true,
                showNeutrons: true,
                showLabels: true,
                showForces: false,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'alphaDecayDiagram': {
            name: 'Alpha Decay',
            category: 'Nuclear Physics',
            description: 'Alpha particle emission from nucleus',
            type: 'nuclear_decay_physics',
            decayType: 'alpha',
            parentNucleus: 'Ra-226',
            daughterNucleus: 'Rn-222',
            defaultOptions: {
                title: 'Alpha Decay',
                showParent: true,
                showProducts: true,
                showEquation: true,
                showEnergy: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'betaDecayDiagram': {
            name: 'Beta Decay',
            category: 'Nuclear Physics',
            description: 'Beta particle and antineutrino emission',
            type: 'nuclear_decay_physics',
            decayType: 'beta',
            parentNucleus: 'C-14',
            daughterNucleus: 'N-14',
            defaultOptions: {
                title: 'Beta Decay',
                showParent: true,
                showProducts: true,
                showNeutrino: true,
                showEquation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gammaDecayDiagram': {
            name: 'Gamma Decay',
            category: 'Nuclear Physics',
            description: 'Gamma ray emission from excited nucleus',
            type: 'nuclear_decay_physics',
            decayType: 'gamma',
            nucleus: 'Co-60',
            defaultOptions: {
                title: 'Gamma Decay',
                showEnergyLevels: true,
                showPhoton: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'halfLifeGraph': {
            name: 'Radioactive Half-Life Graph',
            category: 'Nuclear Physics',
            description: 'Exponential decay showing half-lives',
            type: 'half_life_graph',
            isotope: 'C-14',
            halfLife: 5730,
            initialAmount: 100,
            defaultOptions: {
                title: 'Half-Life Decay Curve',
                showHalfLives: true,
                showExponential: true,
                showPercentages: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bindingEnergyCurve': {
            name: 'Nuclear Binding Energy Curve',
            category: 'Nuclear Physics',
            description: 'Binding energy per nucleon vs mass number',
            type: 'binding_energy_curve',
            defaultOptions: {
                title: 'Nuclear Binding Energy per Nucleon',
                showPeak: true,
                showFissionRegion: true,
                showFusionRegion: true,
                showElements: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearFissionDiagram': {
            name: 'Nuclear Fission',
            category: 'Nuclear Physics',
            description: 'Heavy nucleus splitting into fragments',
            type: 'fission_diagram',
            nucleus: 'U-235',
            products: ['Ba-141', 'Kr-92'],
            neutrons: 3,
            defaultOptions: {
                title: 'Nuclear Fission - U-235',
                showNeutron: true,
                showProducts: true,
                showNeutrons: true,
                showEnergy: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearFusionDiagram': {
            name: 'Nuclear Fusion',
            category: 'Nuclear Physics',
            description: 'Light nuclei combining',
            type: 'fusion_diagram',
            reactants: ['H-2', 'H-3'],
            product: 'He-4',
            defaultOptions: {
                title: 'Nuclear Fusion - D-T Reaction',
                showReactants: true,
                showProduct: true,
                showNeutron: true,
                showEnergy: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chainReactionDiagram': {
            name: 'Nuclear Chain Reaction',
            category: 'Nuclear Physics',
            description: 'Self-sustaining fission chain',
            type: 'chain_reaction_diagram',
            generations: 3,
            branchingFactor: 2,
            defaultOptions: {
                title: 'Nuclear Chain Reaction',
                showGenerations: true,
                showNeutrons: true,
                showFissions: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearReactorDiagram': {
            name: 'Nuclear Reactor Diagram',
            category: 'Nuclear Physics',
            description: 'Components of nuclear power reactor',
            type: 'reactor_diagram',
            reactorType: 'PWR',
            defaultOptions: {
                title: 'Pressurized Water Reactor',
                showCore: true,
                showControlRods: true,
                showCoolant: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'massDefectChart': {
            name: 'Mass Defect Chart',
            category: 'Nuclear Physics',
            description: 'Mass-energy equivalence in nucleus',
            type: 'mass_defect',
            nucleus: 'He-4',
            defaultOptions: {
                title: 'Mass Defect - Helium-4',
                showComponents: true,
                showActualMass: true,
                showDefect: true,
                showEnergy: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'radiationPenetration': {
            name: 'Radiation Penetration Power',
            category: 'Nuclear Physics',
            description: 'Alpha, beta, gamma penetration comparison',
            type: 'radiation_penetration',
            radiationTypes: ['alpha', 'beta', 'gamma'],
            defaultOptions: {
                title: 'Radiation Penetration',
                showBarriers: true,
                showPaths: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 9. PARTICLE PHYSICS =====
        'standardModelChart': {
            name: 'Standard Model of Particles',
            category: 'Particle Physics',
            description: 'Fundamental particles chart',
            type: 'standard_model',
            defaultOptions: {
                title: 'Standard Model',
                showQuarks: true,
                showLeptons: true,
                showBosons: true,
                showProperties: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'feynmanDiagram': {
            name: 'Feynman Diagram',
            category: 'Particle Physics',
            description: 'Particle interaction diagram',
            type: 'feynman_diagram',
            interaction: 'electron_positron_annihilation',
            defaultOptions: {
                title: 'e⁺e⁻ Annihilation',
                showParticles: true,
                showVertices: true,
                showTime: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quarkStructure': {
            name: 'Quark Structure of Hadrons',
            category: 'Particle Physics',
            description: 'Quark composition of protons, neutrons, mesons',
            type: 'quark_structure',
            particle: 'proton',
            defaultOptions: {
                title: 'Quark Structure - Proton (uud)',
                showQuarks: true,
                showColors: true,
                showCharges: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'particleAccelerator': {
            name: 'Particle Accelerator Layout',
            category: 'Particle Physics',
            description: 'Circular accelerator schematic',
            type: 'accelerator',
            acceleratorType: 'synchrotron',
            defaultOptions: {
                title: 'Particle Accelerator',
                showBeamPath: true,
                showMagnets: true,
                showDetectors: true,
                showCollisionPoint: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'particleCollisionTracks': {
            name: 'Particle Collision Tracks',
            category: 'Particle Physics',
            description: 'Detector tracks from particle collision',
            type: 'collision_tracks',
            collisionEnergy: 1000,
            defaultOptions: {
                title: 'Particle Collision Tracks',
                showTracks: true,
                showMagneticField: true,
                showCurvature: true,
                width: 800,
                height: 800,
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
            'Mechanics': 'Forces, motion, energy, momentum, and rotational dynamics',
            'Waves & Sound': 'Wave properties, interference, standing waves, and acoustics',
            'Thermodynamics': 'Heat, temperature, phase changes, and thermodynamic processes',
            'Electricity & Magnetism': 'Electric fields, circuits, magnetic fields, and induction',
            'Optics': 'Light behavior, mirrors, lenses, refraction, and optical phenomena',
            'Modern Physics': 'Quantum mechanics, photoelectric effect, and wave-particle duality',
            'Relativity': 'Special relativity, time dilation, length contraction, and spacetime',
            'Nuclear Physics': 'Radioactivity, nuclear reactions, fission, fusion, and decay',
            'Particle Physics': 'Fundamental particles, quarks, and particle interactions'
        };
        return descriptions[category] || 'Physics diagrams';
    }

    static getAnalogies(diagramKey) {
        const analogies = {
            'freeBodyDiagram': ['Forces as arrows showing pushes and pulls', 'Like tug-of-war ropes pulling in different directions'],
            'inclinedPlane': ['Like pushing a wheelbarrow up a hill', 'Sliding down a playground slide'],
            'momentumCollision': ['Bowling balls hitting pins', 'Car crash at intersection'],
            'circularMotion': ['Ball on a string spinning around', 'Planets orbiting the sun'],
            'torqueLeverDiagram': ['Opening a door with handle vs near hinges', 'Seesaw balance'],
            'transverseLongitudinalWaves': ['Water ripples vs sound through air', 'Rope shake vs slinky push'],
            'dopplerEffect': ['Ambulance siren passing by', 'Train whistle changing pitch'],
            'reflectionRefraction': ['Mirror reflections', 'Straw appearing bent in water'],
            'kineticTheoryParticles': ['Bouncing balls in a box', 'Bees flying in a hive'],
            'electricFieldLines': ['Iron filings around magnet', 'Wind flow lines on weather map'],
            'circuitDiagram': ['Water flowing through pipes', 'Traffic flow on highways'],
            'planeMirrorRayDiagram': ['Looking at yourself in bathroom mirror', 'Camera viewfinder'],
            'convexLensRayDiagram': ['Magnifying glass focusing sunlight', 'Camera lens focusing image'],
            'prismDispersion': ['Rainbow after rain', 'CD reflecting light'],
            'photoelectricEffect': ['Coins popping out of slot machine', 'Kicking ball off a platform'],
            'spacetimeDiagram': ['Map with time as vertical axis', 'Trajectory of airplane on map over time'],
            'curvedSpacetime': ['Rubber sheet with bowling ball', 'Trampoline with heavy weight'],
            'nuclearFissionDiagram': ['Splitting firewood releases energy', 'Breaking apart large molecule'],
            'nuclearFusionDiagram': ['Two magnets forced together', 'Pressing clay balls together'],
            'halfLifeGraph': ['Half the sand in hourglass dropping each time', 'Population decay'],
            'quarkStructure': ['Legos building larger structures', 'Atoms making molecules']
        };
        return analogies[diagramKey] || [];
    }
}

// ============================================================================
// PHYSICS DIAGRAM RENDERER
// ============================================================================



export {PhysicsDiagramsRegistry,PhysicsDiagramRenderer};
