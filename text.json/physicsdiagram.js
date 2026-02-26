import { createCanvas } from '@napi-rs/canvas';
import ExcelJS from 'exceljs';
import fs from 'fs';
import os from 'os';
import path from 'path';
import readline from 'readline';
import * as math from 'mathjs';
import GIFEncoder from 'gifencoder';
import { PassThrough } from 'stream';



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



class PhysicsDiagramRenderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
    }

    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = PhysicsDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) throw new Error(`Physics diagram '${diagramKey}' not found`);

        const mergedOptions = { ...diagram.defaultOptions, ...options };

        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, width, height);
        this.drawTitle(mergedOptions.title, width / 2, 30);

        const centerX = width / 2;
        const centerY = height / 2 + 30;

        try {
            switch (diagram.type) {
                // Mechanics
                case 'free_body_diagram':
                    this.renderFreeBodyDiagram(diagram, centerX, centerY, Math.min(width, height) * 0.4, mergedOptions); break;
                case 'vector_diagram':
                    this.renderVectorDiagram(diagram, centerX, centerY, Math.min(width, height) * 0.6, mergedOptions); break;
                case 'motion_graphs':
                    this.renderMotionGraphs(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'projectile_motion':
                    this.renderProjectileMotion(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'inclined_plane':
                    this.renderInclinedPlane(diagram, centerX, centerY, width * 0.7, height * 0.6, mergedOptions); break;
                case 'momentum_collision':
                    this.renderMomentumCollision(diagram, centerX, centerY, width * 0.85, height * 0.6, mergedOptions); break;
                case 'circular_motion':
                    this.renderCircularMotion(diagram, centerX, centerY, Math.min(width, height) * 0.5, mergedOptions); break;
                case 'work_energy_chart':
                    this.renderWorkEnergyChart(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions); break;
                case 'spring_harmonic':
                    this.renderSpringHarmonic(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions); break;
                case 'torque_lever':
                    this.renderTorqueLever(diagram, centerX, centerY, width * 0.85, height * 0.6, mergedOptions); break;
                // Waves
                case 'wave_types':
                    this.renderWaveTypes(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'wavefront':
                    this.renderWavefront(diagram, centerX, centerY, Math.min(width, height) * 0.6, mergedOptions); break;
                case 'reflection_refraction':
                    this.renderReflectionRefraction(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions); break;
                case 'wave_interference':
                    this.renderWaveInterference(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions); break;
                case 'standing_waves':
                    this.renderStandingWaves(diagram, centerX, centerY, width * 0.85, height * 0.6, mergedOptions); break;
                case 'doppler_effect':
                    this.renderDopplerEffect(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'sound_pressure':
                    this.renderSoundPressure(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'diffraction':
                    this.renderDiffraction(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                // Thermodynamics
                case 'heating_curve_physics':
                    this.renderHeatingCurvePhysics(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'phase_diagram_physics':
                    this.renderPhaseDiagramPhysics(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'pv_diagram':
                    this.renderPVDiagram(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions); break;
                case 'carnot_cycle':
                    this.renderCarnotCycle(diagram, centerX, centerY, width * 0.85, height * 0.8, mergedOptions); break;
                case 'heat_transfer':
                    this.renderHeatTransfer(diagram, 50, centerY, width * 0.9, height * 0.7, mergedOptions); break;
                case 'kinetic_theory':
                    this.renderKineticTheory(diagram, centerX, centerY, Math.min(width, height) * 0.6, mergedOptions); break;
                // Electricity & Magnetism
                case 'electric_field':
                    this.renderElectricField(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions); break;
                case 'circuit_diagram':
                    this.renderCircuitDiagram(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions); break;
                case 'series_parallel':
                    this.renderSeriesParallel(diagram, centerX, centerY, width * 0.9, height * 0.8, mergedOptions); break;
                case 'potential_distance':
                    this.renderPotentialDistance(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'magnetic_field':
                    this.renderMagneticField(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions); break;
                case 'em_induction':
                    this.renderEMInduction(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions); break;
                case 'transformer':
                    this.renderTransformer(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions); break;
                case 'capacitor_curve':
                    this.renderCapacitorCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'lorentz_force':
                    this.renderLorentzForce(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions); break;
                // Optics
                case 'mirror_ray_diagram':
                    this.renderMirrorRayDiagram(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'lens_ray_diagram':
                    this.renderLensRayDiagram(diagram, centerX, centerY, width * 0.9, height * 0.7, mergedOptions); break;
                case 'snells_law':
                    this.renderSnellsLaw(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions); break;
                case 'total_internal_reflection':
                    this.renderTotalInternalReflection(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions); break;
                case 'prism_dispersion':
                    this.renderPrismDispersion(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions); break;
                case 'optical_fiber':
                    this.renderOpticalFiber(diagram, centerX, centerY, width * 0.85, height * 0.5, mergedOptions); break;
                case 'optical_interference':
                    this.renderOpticalInterference(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'polarization':
                    this.renderPolarization(diagram, centerX, centerY, width * 0.85, height * 0.6, mergedOptions); break;
                // Modern Physics
                case 'photoelectric_effect':
                    this.renderPhotoelectricEffect(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions); break;
                case 'emission_spectra':
                    this.renderEmissionSpectra(diagram, centerX, centerY, width * 0.85, height * 0.75, mergedOptions); break;
                case 'blackbody_radiation':
                    this.renderBlackbodyRadiation(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'quantum_tunneling':
                    this.renderQuantumTunneling(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'electron_probability':
                    this.renderElectronProbability(diagram, centerX, centerY, Math.min(width, height) * 0.6, mergedOptions); break;
                case 'wave_particle_duality':
                    this.renderWaveParticleDuality(diagram, centerX, centerY, width * 0.9, height * 0.7, mergedOptions); break;
                case 'de_broglie':
                    this.renderDeBroglie(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                // Relativity
                case 'spacetime_diagram':
                    this.renderSpacetimeDiagram(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions); break;
                case 'time_dilation':
                    this.renderTimeDilation(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'length_contraction':
                    this.renderLengthContraction(diagram, centerX, centerY, width * 0.85, height * 0.6, mergedOptions); break;
                case 'curved_spacetime':
                    this.renderCurvedSpacetime(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions); break;
                case 'twin_paradox':
                    this.renderTwinParadox(diagram, centerX, centerY, width * 0.85, height * 0.8, mergedOptions); break;
                case 'velocity_addition':
                    this.renderVelocityAddition(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                // Nuclear Physics
                case 'nuclear_structure_physics':
                    this.renderNuclearStructurePhysics(diagram, centerX, centerY, Math.min(width, height) * 0.5, mergedOptions); break;
                case 'nuclear_decay_physics':
                    this.renderNuclearDecayPhysics(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'half_life_graph':
                    this.renderHalfLifeGraph(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'binding_energy_curve':
                    this.renderBindingEnergyCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions); break;
                case 'fission_diagram':
                    this.renderFissionDiagram(diagram, centerX, centerY, width * 0.9, height * 0.7, mergedOptions); break;
                case 'fusion_diagram':
                    this.renderFusionDiagram(diagram, centerX, centerY, width * 0.9, height * 0.7, mergedOptions); break;
                case 'chain_reaction_diagram':
                    this.renderChainReactionDiagram(diagram, centerX, centerY, width * 0.9, height * 0.8, mergedOptions); break;
                case 'reactor_diagram':
                    this.renderReactorDiagram(diagram, centerX, centerY, width * 0.8, height * 0.75, mergedOptions); break;
                case 'mass_defect':
                    this.renderMassDefect(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions); break;
                case 'radiation_penetration':
                    this.renderRadiationPenetration(diagram, centerX, centerY, width * 0.9, height * 0.7, mergedOptions); break;
                // Particle Physics
                case 'standard_model':
                    this.renderStandardModel(diagram, centerX, centerY, width * 0.9, height * 0.85, mergedOptions); break;
                case 'feynman_diagram':
                    this.renderFeynmanDiagram(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions); break;
                case 'quark_structure':
                    this.renderQuarkStructure(diagram, centerX, centerY, Math.min(width, height) * 0.5, mergedOptions); break;
                case 'accelerator':
                    this.renderAccelerator(diagram, centerX, centerY, Math.min(width, height) * 0.7, mergedOptions); break;
                case 'collision_tracks':
                    this.renderCollisionTracks(diagram, centerX, centerY, Math.min(width, height) * 0.7, mergedOptions); break;
                default:
                    this.renderPlaceholder(diagram, centerX, centerY, width * 0.7, height * 0.5);
            }
            this.drawDiagramInfo(diagram, 20, height - 60, mergedOptions);
        } catch (error) {
            console.error(`Error rendering ${diagramKey}:`, error);
            this.renderError(diagram, centerX, centerY, width * 0.7, height * 0.5, error.message);
        }
        this.ctx.restore();
    }

    // ========== UTILITY METHODS ==========

    renderPlaceholder(diagram, x, y, width, height) {
        this.ctx.strokeStyle = '#999999';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([10, 5]);
        this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#f5f5f5';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, height);
        this.ctx.fillStyle = '#555555';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(`${diagram.name}`, x, y - 10);
        this.ctx.font = '13px Arial';
        this.ctx.fillText('(Renderer in development)', x, y + 15);
    }

    renderError(diagram, x, y, width, height, errorMsg) {
        this.ctx.fillStyle = '#f0f0f0';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, height);
        this.ctx.strokeStyle = '#222222';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);
        this.ctx.fillStyle = '#222222';
        this.ctx.font = 'bold 40px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('⚠', x, y - 30);
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Rendering Error', x, y + 10);
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#444444';
        this.wrapText(errorMsg, x, y + 35, width * 0.9, 16);
    }

    wrapText(text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        let currentY = y;
        words.forEach((word, index) => {
            const testLine = line + word + ' ';
            if (this.ctx.measureText(testLine).width > maxWidth && index > 0) {
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
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 22px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(title, x, y);
    }

    drawDiagramInfo(diagram, x, y, options) {
        this.ctx.fillStyle = 'rgba(240,240,240,0.95)';
        this.ctx.strokeStyle = '#aaaaaa';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.roundRect(x, y, 320, 80, 6);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`Category: ${diagram.category || 'Physics'}`, x + 12, y + 16);
        this.ctx.fillText(`Type: ${(diagram.type || 'diagram').replace(/_/g, ' ')}`, x + 12, y + 34);
        const analogies = PhysicsDiagramsRegistry.getAnalogies(diagram.name);
        if (analogies.length > 0) {
            this.ctx.font = 'italic 10px Arial';
            this.ctx.fillStyle = '#444444';
            this.ctx.fillText(`Analogy: ${analogies[0]}`, x + 12, y + 56);
        }
    }

    drawArrowVector(x1, y1, x2, y2, color, lineWidth = 2) {
        const headLength = 12;
        const angle = Math.atan2(y2 - y1, x2 - x1);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = lineWidth;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
        this.ctx.fillStyle = '#000000';
        this.ctx.beginPath();
        this.ctx.moveTo(x2, y2);
        this.ctx.lineTo(x2 - headLength * Math.cos(angle - Math.PI / 6), y2 - headLength * Math.sin(angle - Math.PI / 6));
        this.ctx.lineTo(x2 - headLength * Math.cos(angle + Math.PI / 6), y2 - headLength * Math.sin(angle + Math.PI / 6));
        this.ctx.closePath();
        this.ctx.fill();
    }

    drawCoordinateAxes(x, y, size) {
        this.drawArrowVector(x, y, x + size, y, '#000000', 1.5);
        this.drawArrowVector(x, y, x, y - size, '#000000', 1.5);
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'italic 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('x', x + size + 12, y + 5);
        this.ctx.fillText('y', x - 5, y - size - 8);
    }

    drawGrid(x, y, width, height, gridSize) {
        this.ctx.strokeStyle = '#dddddd';
        this.ctx.lineWidth = 0.5;
        for (let i = 0; i <= width / gridSize; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(x + i * gridSize, y);
            this.ctx.lineTo(x + i * gridSize, y + height);
            this.ctx.stroke();
        }
        for (let i = 0; i <= height / gridSize; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + i * gridSize);
            this.ctx.lineTo(x + width, y + i * gridSize);
            this.ctx.stroke();
        }
    }

    drawGridLines(x, y, width, height, numX, numY) {
        this.ctx.strokeStyle = '#dddddd';
        this.ctx.lineWidth = 0.5;
        const dx = width / numX;
        const dy = height / numY;
        for (let i = 0; i <= numX; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(x + i * dx, y);
            this.ctx.lineTo(x + i * dx, y + height);
            this.ctx.stroke();
        }
        for (let i = 0; i <= numY; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + i * dy);
            this.ctx.lineTo(x + width, y + i * dy);
            this.ctx.stroke();
        }
    }

    drawSpring(x1, y1, x2, y2, coils, amplitude) {
        const length = x2 - x1;
        const segmentLength = length / (coils * 4);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        for (let i = 0; i <= coils * 4; i++) {
            const x = x1 + i * segmentLength;
            let y = y1;
            if (i % 4 === 1) y = y1 - amplitude;
            else if (i % 4 === 3) y = y1 + amplitude;
            this.ctx.lineTo(x, y);
        }
        this.ctx.stroke();
    }

    drawTriangle(x, y, width, height, color) {
        this.ctx.fillStyle = '#666666';
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    }

    drawCurvedArrow(x, y, radius, counterClockwise, color) {
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        this.ctx.lineWidth = 2;
        const startAngle = counterClockwise ? 0 : Math.PI;
        const endAngle = counterClockwise ? Math.PI * 1.5 : Math.PI * 2.5;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        this.ctx.stroke();
        const arrowX = x + radius * Math.cos(endAngle);
        const arrowY = y + radius * Math.sin(endAngle);
        const arrowAngle = endAngle + (counterClockwise ? Math.PI / 2 : -Math.PI / 2);
        this.ctx.beginPath();
        this.ctx.moveTo(arrowX, arrowY);
        this.ctx.lineTo(arrowX + 10 * Math.cos(arrowAngle - 0.4), arrowY + 10 * Math.sin(arrowAngle - 0.4));
        this.ctx.lineTo(arrowX + 10 * Math.cos(arrowAngle + 0.4), arrowY + 10 * Math.sin(arrowAngle + 0.4));
        this.ctx.closePath();
        this.ctx.fill();
    }

    drawBatterySymbol(x, y, voltage, horizontal) {
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        if (horizontal) {
            this.ctx.beginPath(); this.ctx.moveTo(x - 15, y - 10); this.ctx.lineTo(x - 15, y + 10); this.ctx.stroke();
            this.ctx.lineWidth = 3;
            this.ctx.beginPath(); this.ctx.moveTo(x + 15, y - 6); this.ctx.lineTo(x + 15, y + 6); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(x - 25, y); this.ctx.lineTo(x - 15, y); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(x + 15, y); this.ctx.lineTo(x + 25, y); this.ctx.stroke();
            this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText(`${voltage}V`, x, y - 20);
        } else {
            this.ctx.beginPath(); this.ctx.moveTo(x - 10, y - 15); this.ctx.lineTo(x + 10, y - 15); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(x - 6, y + 15); this.ctx.lineTo(x + 6, y + 15); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(x, y - 25); this.ctx.lineTo(x, y - 15); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(x, y + 15); this.ctx.lineTo(x, y + 25); this.ctx.stroke();
            this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'left';
            this.ctx.fillText(`${voltage}V`, x + 15, y);
        }
    }

    drawResistorSymbol(comp, x, y, options) {
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - 30); this.ctx.lineTo(x, y - 20);
        this.ctx.lineTo(x - 8, y - 15); this.ctx.lineTo(x + 8, y - 5);
        this.ctx.lineTo(x - 8, y + 5); this.ctx.lineTo(x + 8, y + 15);
        this.ctx.lineTo(x, y + 20); this.ctx.lineTo(x, y + 30);
        this.ctx.stroke();
        if (options && options.showValues) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'left';
            this.ctx.fillText(`${comp.resistance}Ω`, x + 15, y);
        }
    }

    drawResistorSymbolHorizontal(x, y, resistance) {
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x - 30, y); this.ctx.lineTo(x - 20, y);
        this.ctx.lineTo(x - 15, y - 8); this.ctx.lineTo(x - 5, y + 8);
        this.ctx.lineTo(x + 5, y - 8); this.ctx.lineTo(x + 15, y + 8);
        this.ctx.lineTo(x + 20, y); this.ctx.lineTo(x + 30, y);
        this.ctx.stroke();
        this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText(`${resistance}Ω`, x, y - 15);
    }

    drawObserver(x, y, color) {
        this.ctx.fillStyle = '#000000';
        this.ctx.beginPath(); this.ctx.arc(x, y - 15, 10, 0, Math.PI * 2); this.ctx.fill();
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
        this.ctx.beginPath(); this.ctx.moveTo(x, y - 5); this.ctx.lineTo(x, y + 15); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x - 10, y); this.ctx.lineTo(x + 10, y); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x, y + 15); this.ctx.lineTo(x - 8, y + 25); this.ctx.moveTo(x, y + 15); this.ctx.lineTo(x + 8, y + 25); this.ctx.stroke();
    }

    getOrdinal(n) {
        const s = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    }

    drawCompass(cx, cy, magnetX, magnetY) {
        this.ctx.fillStyle = '#eeeeee';
        this.ctx.beginPath(); this.ctx.arc(cx, cy, 12, 0, Math.PI * 2); this.ctx.fill();
        this.ctx.strokeStyle = '#555555'; this.ctx.lineWidth = 1; this.ctx.stroke();
        const angle = Math.atan2(cy - magnetY, cx - magnetX);
        this.ctx.save(); this.ctx.translate(cx, cy); this.ctx.rotate(angle);
        this.ctx.fillStyle = '#000000';
        this.ctx.beginPath(); this.ctx.moveTo(10, 0); this.ctx.lineTo(0, -3); this.ctx.lineTo(0, 3); this.ctx.closePath(); this.ctx.fill();
        this.ctx.fillStyle = '#888888';
        this.ctx.beginPath(); this.ctx.moveTo(-10, 0); this.ctx.lineTo(0, -3); this.ctx.lineTo(0, 3); this.ctx.closePath(); this.ctx.fill();
        this.ctx.restore();
    }

    drawCircuitComponent(component, x, y, options) {
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        switch (component.type) {
            case 'battery':
                this.ctx.beginPath(); this.ctx.moveTo(x - 20, y - 10); this.ctx.lineTo(x + 20, y - 10); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.moveTo(x - 12, y + 10); this.ctx.lineTo(x + 12, y + 10); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.moveTo(x, y - 10); this.ctx.lineTo(x, y - 30); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.moveTo(x, y + 10); this.ctx.lineTo(x, y + 30); this.ctx.stroke();
                if (options.showValues) { this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center'; this.ctx.fillText(`${component.voltage}V`, x + 35, y); }
                break;
            case 'resistor':
                this.drawResistorSymbol(component, x, y, options); break;
            case 'capacitor':
                this.ctx.beginPath(); this.ctx.moveTo(x, y - 30); this.ctx.lineTo(x, y - 5); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.moveTo(x - 15, y - 5); this.ctx.lineTo(x + 15, y - 5); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.moveTo(x - 15, y + 5); this.ctx.lineTo(x + 15, y + 5); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.moveTo(x, y + 5); this.ctx.lineTo(x, y + 30); this.ctx.stroke();
                if (options.showValues) { this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'left'; this.ctx.fillText(`${component.capacitance}μF`, x + 20, y); }
                break;
            case 'switch':
                this.ctx.beginPath(); this.ctx.moveTo(x, y - 30); this.ctx.lineTo(x, y - 10); this.ctx.stroke();
                if (component.state === 'closed') { this.ctx.beginPath(); this.ctx.moveTo(x, y - 10); this.ctx.lineTo(x, y + 10); this.ctx.stroke(); }
                else { this.ctx.beginPath(); this.ctx.moveTo(x, y - 10); this.ctx.lineTo(x + 15, y); this.ctx.stroke(); }
                this.ctx.beginPath(); this.ctx.moveTo(x, y + 10); this.ctx.lineTo(x, y + 30); this.ctx.stroke();
                this.ctx.fillStyle = '#000000'; this.ctx.beginPath(); this.ctx.arc(x, y - 10, 3, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.beginPath(); this.ctx.arc(x, y + 10, 3, 0, Math.PI * 2); this.ctx.fill();
                break;
        }
        if (options.showSymbols) { this.ctx.fillStyle = '#555555'; this.ctx.font = '10px Arial'; this.ctx.textAlign = 'center'; this.ctx.fillText(component.type, x, y + 50); }
    }

    // ========== MECHANICS ==========

    renderFreeBodyDiagram(diagram, x, y, size, options) {
        const boxSize = size * 0.3;
        this.ctx.fillStyle = '#cccccc';
        this.ctx.fillRect(x - boxSize / 2, y - boxSize / 2, boxSize, boxSize);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.strokeRect(x - boxSize / 2, y - boxSize / 2, boxSize, boxSize);
        this.ctx.fillStyle = '#000000';
        this.ctx.beginPath(); this.ctx.arc(x, y, 5, 0, Math.PI * 2); this.ctx.fill();
        const scale = size * 0.01;
        diagram.forces.forEach((force, i) => {
            const angleRad = (force.angle * Math.PI) / 180;
            const length = force.magnitude * scale;
            const endX = x + length * Math.cos(angleRad);
            const endY = y - length * Math.sin(angleRad);
            // Use different dash patterns for different forces
            const dashPatterns = [[], [6,3], [2,4], [8,4,2,4]];
            this.ctx.setLineDash(dashPatterns[i % dashPatterns.length]);
            this.drawArrowVector(x, y, endX, endY, '#000000', 3);
            this.ctx.setLineDash([]);
            if (options.showLabels) {
                this.ctx.fillStyle = '#000000';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                const labelX = endX + 20 * Math.cos(angleRad);
                const labelY = endY - 20 * Math.sin(angleRad);
                this.ctx.fillText(force.name, labelX, labelY);
                if (options.showMagnitudes) { this.ctx.font = '12px Arial'; this.ctx.fillText(`${force.magnitude}N`, labelX, labelY + 15); }
            }
        });
        this.drawCoordinateAxes(x + size * 0.6, y + size * 0.4, size * 0.15);
    }

    renderVectorDiagram(diagram, x, y, size, options) {
        const scale = size / 100;
        if (options.showGrid) this.drawGrid(x - size / 2, y - size / 2, size, size, 20);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.drawArrowVector(x - size / 2, y, x + size / 2, y, '#000000', 2);
        this.drawArrowVector(x, y + size / 2, x, y - size / 2, '#000000', 2);
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'italic 14px Arial';
        this.ctx.fillText('x', x + size / 2 + 15, y);
        this.ctx.fillText('y', x, y - size / 2 - 10);
        let currentX = x, currentY = y;
        const dashPatterns = [[], [6, 3], [2, 4]];
        diagram.vectors.forEach((vec, index) => {
            const endX = currentX + vec.x * scale;
            const endY = currentY - vec.y * scale;
            this.ctx.setLineDash(dashPatterns[index % dashPatterns.length]);
            this.drawArrowVector(currentX, currentY, endX, endY, '#000000', 3);
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 16px Arial';
            this.ctx.fillText(vec.label, (currentX + endX) / 2 + 15, (currentY + endY) / 2 - 10);
            if (options.showComponents) {
                this.ctx.setLineDash([4, 4]); this.ctx.strokeStyle = '#666666'; this.ctx.lineWidth = 1;
                this.ctx.beginPath(); this.ctx.moveTo(currentX, currentY); this.ctx.lineTo(endX, currentY); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.moveTo(endX, currentY); this.ctx.lineTo(endX, endY); this.ctx.stroke();
                this.ctx.setLineDash([]);
            }
            currentX = endX; currentY = endY;
        });
        if (options.showResultant && diagram.showResultant) {
            this.ctx.lineWidth = 4;
            this.drawArrowVector(x, y, currentX, currentY, '#000000', 4);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 16px Arial';
            this.ctx.fillText('R', (x + currentX) / 2 + 15, (y + currentY) / 2 - 10);
        }
    }

    renderMotionGraphs(diagram, x, y, width, height, options) {
        const margin = 50;
        const gW = width - 2 * margin, gH = height - 2 * margin;
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y + gH / 2); this.ctx.lineTo(x + gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y - gH / 2); this.ctx.lineTo(x - gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'italic 14px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Time (s)', x, y + gH / 2 + 35);
        this.ctx.save(); this.ctx.translate(x - gW / 2 - 35, y); this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Velocity (m/s)', 0, 0); this.ctx.restore();
        if (options.showGrid) this.drawGridLines(x - gW / 2, y - gH / 2, gW, gH, 10, 10);
        const segments = diagram.segments;
        const maxTime = Math.max(...segments.map(s => s.time));
        const maxValue = Math.max(...segments.map(s => Math.abs(s.value)));
        if (options.showArea && diagram.graphType === 'velocity-time') {
            this.ctx.fillStyle = 'rgba(0,0,0,0.08)';
            this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y + gH / 2);
            segments.forEach(seg => { this.ctx.lineTo(x - gW / 2 + (seg.time / maxTime) * gW, y + gH / 2 - (seg.value / (maxValue * 1.2)) * gH); });
            this.ctx.lineTo(x - gW / 2 + gW, y + gH / 2); this.ctx.closePath(); this.ctx.fill();
            this.ctx.fillStyle = '#000000'; this.ctx.font = '12px Arial';
            this.ctx.fillText('Area = displacement', x, y + gH / 2 - 20);
        }
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3; this.ctx.beginPath();
        segments.forEach((seg, index) => {
            const px = x - gW / 2 + (seg.time / maxTime) * gW;
            const py = y + gH / 2 - (seg.value / (maxValue * 1.2)) * gH;
            if (index === 0) this.ctx.moveTo(px, py); else this.ctx.lineTo(px, py);
        });
        this.ctx.stroke();
        segments.forEach(seg => {
            const px = x - gW / 2 + (seg.time / maxTime) * gW;
            const py = y + gH / 2 - (seg.value / (maxValue * 1.2)) * gH;
            this.ctx.fillStyle = '#000000'; this.ctx.beginPath(); this.ctx.arc(px, py, 5, 0, Math.PI * 2); this.ctx.fill();
        });
    }

    renderProjectileMotion(diagram, x, y, width, height, options) {
        const v0 = diagram.initialVelocity;
        const angle = (diagram.launchAngle * Math.PI) / 180;
        const g = 9.8;
        const v0x = v0 * Math.cos(angle), v0y = v0 * Math.sin(angle);
        const timeOfFlight = (2 * v0y) / g;
        const range = v0x * timeOfFlight;
        const maxHeight = (v0y * v0y) / (2 * g);
        const scale = Math.min(width / (range * 1.2), height / (maxHeight * 2.5));
        const groundY = y + height / 2 - 50;
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 2, groundY); this.ctx.lineTo(x + width / 2, groundY); this.ctx.stroke();
        if (options.showTrajectory) {
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2.5; this.ctx.setLineDash([8, 4]);
            this.ctx.beginPath();
            for (let i = 0; i <= 50; i++) {
                const t = (i / 50) * timeOfFlight;
                const px = x - width / 2 + 50 + v0x * t * scale;
                const py = groundY - (v0y * t - 0.5 * g * t * t) * scale;
                if (i === 0) this.ctx.moveTo(px, py); else this.ctx.lineTo(px, py);
            }
            this.ctx.stroke(); this.ctx.setLineDash([]);
        }
        if (options.showVelocityVectors) {
            [0, timeOfFlight / 4, timeOfFlight / 2, 3 * timeOfFlight / 4].forEach(t => {
                const px = x - width / 2 + 50 + v0x * t * scale;
                const py = groundY - (v0y * t - 0.5 * g * t * t) * scale;
                const vx = v0x, vy = v0y - g * t;
                this.drawArrowVector(px, py, px + vx * 3, py - vy * 3, '#000000', 2);
                if (options.showComponents) {
                    this.ctx.setLineDash([4, 3]);
                    this.drawArrowVector(px, py, px + vx * 3, py, '#000000', 1.5);
                    this.drawArrowVector(px, py, px, py - vy * 3, '#000000', 1.5);
                    this.ctx.setLineDash([]);
                }
            });
        }
        if (options.showRange) {
            const rangeX = x - width / 2 + 50 + range * scale;
            this.ctx.setLineDash([5, 5]); this.ctx.strokeStyle = '#555555'; this.ctx.lineWidth = 1;
            this.ctx.beginPath(); this.ctx.moveTo(rangeX, groundY); this.ctx.lineTo(rangeX, groundY + 30); this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#000000'; this.ctx.font = '12px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText(`Range: ${range.toFixed(1)}m`, x, groundY + 45);
        }
    }

    renderInclinedPlane(diagram, x, y, width, height, options) {
        const angle = (diagram.angle * Math.PI) / 180;
        const planeLength = width * 0.6;
        const planeHeight = planeLength * Math.sin(angle);
        this.ctx.fillStyle = '#e0e0e0'; this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - planeLength / 2, y + height / 3);
        this.ctx.lineTo(x + planeLength / 2, y + height / 3);
        this.ctx.lineTo(x + planeLength / 2, y + height / 3 - planeHeight);
        this.ctx.closePath(); this.ctx.fill(); this.ctx.stroke();
        const boxSize = 40;
        const boxCenterX = x;
        const boxCenterY = y + height / 3 - (planeLength / 2) * Math.sin(angle) - boxSize / 2;
        this.ctx.save(); this.ctx.translate(boxCenterX, boxCenterY); this.ctx.rotate(-angle);
        this.ctx.fillStyle = '#aaaaaa'; this.ctx.fillRect(-boxSize / 2, -boxSize / 2, boxSize, boxSize);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.strokeRect(-boxSize / 2, -boxSize / 2, boxSize, boxSize); this.ctx.restore();
        if (options.showForceComponents) {
            const mg = diagram.mass * 9.8, scale = 2;
            const dashPatterns = [[], [6, 3], [2, 4], [8, 4]];
            const forces = [
                { dx: 0, dy: mg * scale, label: 'mg' },
                { dx: mg * Math.sin(angle) * scale * Math.cos(angle), dy: mg * Math.sin(angle) * scale * Math.sin(angle), label: 'mg sinθ' },
                { dx: -mg * Math.cos(angle) * scale * Math.sin(angle), dy: mg * Math.cos(angle) * scale * Math.cos(angle), label: 'mg cosθ' },
                { dx: mg * Math.cos(angle) * scale * Math.sin(angle), dy: -mg * Math.cos(angle) * scale * Math.cos(angle), label: 'N' }
            ];
            forces.forEach((f, i) => {
                this.ctx.setLineDash(dashPatterns[i]);
                this.drawArrowVector(boxCenterX, boxCenterY, boxCenterX + f.dx, boxCenterY + f.dy, '#000000', 2.5);
                this.ctx.setLineDash([]);
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText(f.label, boxCenterX + f.dx + 15, boxCenterY + f.dy - 5);
            });
            if (options.showFriction && diagram.friction) {
                const friction = 0.3 * mg * Math.cos(angle);
                this.ctx.setLineDash([3, 3]);
                this.drawArrowVector(boxCenterX, boxCenterY, boxCenterX - friction * scale * Math.cos(angle), boxCenterY - friction * scale * Math.sin(angle), '#000000', 2);
                this.ctx.setLineDash([]);
                this.ctx.fillText('f', boxCenterX - friction * scale * Math.cos(angle), boxCenterY - friction * scale * Math.sin(angle) - 8);
            }
        }
        if (options.showAngles) {
            const arcRadius = 50;
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 1.5;
            this.ctx.beginPath(); this.ctx.arc(x + planeLength / 2, y + height / 3, arcRadius, Math.PI, Math.PI + angle, false); this.ctx.stroke();
            this.ctx.fillStyle = '#000000'; this.ctx.font = '14px Arial';
            this.ctx.fillText(`${diagram.angle}°`, x + planeLength / 2 - 40, y + height / 3 - 15);
        }
    }

    renderMomentumCollision(diagram, x, y, width, height, options) {
        const boxSize = 60, spacing = width * 0.15;
        const beforeY = y - height / 3, afterY = y + height / 3;
        const m1 = diagram.objects[0].mass, m2 = diagram.objects[1].mass;
        const v1i = diagram.objects[0].velocity, v2i = diagram.objects[1].velocity;
        let v1f, v2f;
        if (diagram.collisionType === 'elastic') { v1f = ((m1 - m2) * v1i + 2 * m2 * v2i) / (m1 + m2); v2f = ((m2 - m1) * v2i + 2 * m1 * v1i) / (m1 + m2); }
        else if (diagram.collisionType === 'perfectly_inelastic') { v1f = v2f = (m1 * v1i + m2 * v2i) / (m1 + m2); }
        else { v1f = ((m1 - 0.5 * m2) * v1i + 1.5 * m2 * v2i) / (m1 + m2); v2f = ((m2 - 0.5 * m1) * v2i + 1.5 * m1 * v1i) / (m1 + m2); }
        const fillPatterns = ['#aaaaaa', '#dddddd'];
        const renderObjects = (objY, velocities, label) => {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 16px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText(label, x, objY - 80);
            diagram.objects.forEach((obj, index) => {
                const objX = x + (index - 0.5) * spacing;
                this.ctx.fillStyle = fillPatterns[index];
                this.ctx.fillRect(objX - boxSize / 2, objY - boxSize / 2, boxSize, boxSize);
                this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2.5;
                this.ctx.strokeRect(objX - boxSize / 2, objY - boxSize / 2, boxSize, boxSize);
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText(`${obj.mass}kg`, objX, objY + 5);
                const vf = velocities[index], vLength = vf * 8;
                this.ctx.setLineDash(index === 1 ? [5, 3] : []);
                this.drawArrowVector(objX + (vf > 0 ? boxSize / 2 : -boxSize / 2), objY, objX + (vf > 0 ? boxSize / 2 : -boxSize / 2) + vLength, objY, '#000000', 2.5);
                this.ctx.setLineDash([]);
                this.ctx.font = '12px Arial';
                this.ctx.fillText(`v=${vf.toFixed(1)}m/s`, objX + (vf > 0 ? boxSize / 2 : -boxSize / 2) + vLength / 2, objY - 20);
            });
        };
        if (options.showBefore) { renderObjects(beforeY, [v1i, v2i], 'Before Collision'); }
        if (options.showAfter) { renderObjects(afterY, [v1f, v2f], 'After Collision'); }
        if (options.showMomentum) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
            if (options.showBefore) this.ctx.fillText(`Total p = ${(m1 * v1i + m2 * v2i).toFixed(1)} kg·m/s`, x, beforeY + 60);
            if (options.showAfter) this.ctx.fillText(`Total p = ${(m1 * v1f + m2 * v2f).toFixed(1)} kg·m/s`, x, afterY + 60);
        }
        if (options.showEnergy && options.showAfter) {
            const KEi = 0.5 * m1 * v1i * v1i + 0.5 * m2 * v2i * v2i;
            const KEf = 0.5 * m1 * v1f * v1f + 0.5 * m2 * v2f * v2f;
            this.ctx.fillText(`KE: ${KEi.toFixed(1)}J → ${KEf.toFixed(1)}J`, x, afterY + 80);
        }
    }

    renderCircularMotion(diagram, x, y, size, options) {
        this.ctx.strokeStyle = '#aaaaaa'; this.ctx.lineWidth = 1.5; this.ctx.setLineDash([8, 5]);
        this.ctx.beginPath(); this.ctx.arc(x, y, size, 0, Math.PI * 2); this.ctx.stroke(); this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#000000'; this.ctx.beginPath(); this.ctx.arc(x, y, 5, 0, Math.PI * 2); this.ctx.fill();
        const objX = x, objY = y - size;
        this.ctx.fillStyle = '#888888'; this.ctx.beginPath(); this.ctx.arc(objX, objY, 15, 0, Math.PI * 2); this.ctx.fill();
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.stroke();
        this.ctx.setLineDash([3, 3]); this.ctx.strokeStyle = '#666666'; this.ctx.lineWidth = 1;
        this.ctx.beginPath(); this.ctx.moveTo(x, y); this.ctx.lineTo(objX, objY); this.ctx.stroke(); this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#555555'; this.ctx.font = '12px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('r', x + size / 3, y - size / 2);
        if (options.showVelocity) {
            this.drawArrowVector(objX, objY, objX + diagram.velocity * 3, objY, '#000000', 3);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.fillText('v', objX + diagram.velocity * 3 + 15, objY);
        }
        if (options.showAcceleration) {
            this.ctx.setLineDash([5, 3]);
            this.drawArrowVector(objX, objY, x, y, '#000000', 3);
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.fillText('ac', x + 15, y - size / 2);
        }
        if (options.showCentripetalForce) {
            this.ctx.lineWidth = 3;
            this.drawArrowVector(objX, objY, x, y + 20, '#000000', 3);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.fillText('Fc', x - 30, y - size / 2);
        }
    }

    renderWorkEnergyChart(diagram, x, y, width, height, options) {
        const barWidth = 80;
        const maxEnergy = Math.max(diagram.initialKE + diagram.initialPE, diagram.finalKE + diagram.finalPE + Math.abs(diagram.workDone)) * 1.2;
        const scale = (height * 0.6) / maxEnergy;
        const positions = [
            { label: 'Initial KE', value: diagram.initialKE, fill: '#aaaaaa', x: x - width / 3 },
            { label: 'Initial PE', value: diagram.initialPE, fill: '#cccccc', x: x - width / 6 },
            { label: 'Work Done', value: Math.abs(diagram.workDone), fill: '#888888', x: x },
            { label: 'Final KE', value: diagram.finalKE, fill: '#aaaaaa', x: x + width / 6 },
            { label: 'Final PE', value: diagram.finalPE, fill: '#cccccc', x: x + width / 3 }
        ];
        positions.forEach((pos, i) => {
            const barHeight = pos.value * scale;
            const barY = y + height / 2 - barHeight;
            this.ctx.fillStyle = pos.fill; this.ctx.fillRect(pos.x - barWidth / 2, barY, barWidth, barHeight);
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
            this.ctx.strokeRect(pos.x - barWidth / 2, barY, barWidth, barHeight);
            if (options.showValues) {
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText(`${pos.value}J`, pos.x, barY + barHeight / 2 + 5);
            }
            this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center';
            this.wrapText(pos.label, pos.x, y + height / 2 + 15, barWidth, 13);
        });
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 2, y + height / 2); this.ctx.lineTo(x + width / 2, y + height / 2); this.ctx.stroke();
        if (options.showTotal) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText(`Initial: ${diagram.initialKE + diagram.initialPE}J → Final: ${diagram.finalKE + diagram.finalPE}J`, x, y - height / 2 + 20);
        }
    }

    renderSpringHarmonic(diagram, x, y, width, height, options) {
        const wallX = x - width / 3;
        this.ctx.fillStyle = '#888888'; this.ctx.fillRect(wallX - 10, y - 100, 10, 200);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 1.5;
        for (let i = -100; i < 100; i += 10) { this.ctx.beginPath(); this.ctx.moveTo(wallX - 10, y + i); this.ctx.lineTo(wallX - 20, y + i + 10); this.ctx.stroke(); }
        const springEndX = wallX + 150;
        this.drawSpring(wallX, y, springEndX, y, 20, 15);
        const massSize = 50;
        this.ctx.fillStyle = '#cccccc'; this.ctx.fillRect(springEndX - 5, y - massSize / 2, massSize, massSize);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.strokeRect(springEndX - 5, y - massSize / 2, massSize, massSize);
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText(`m=${diagram.mass}kg`, springEndX + massSize / 2 - 5, y + 5);
        if (options.showDisplacement) {
            const amp = diagram.amplitude;
            this.ctx.setLineDash([5, 5]); this.ctx.strokeStyle = '#555555'; this.ctx.lineWidth = 1.5;
            this.ctx.beginPath(); this.ctx.moveTo(springEndX - amp, y - 80); this.ctx.lineTo(springEndX - amp, y + 80); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(springEndX + amp, y - 80); this.ctx.lineTo(springEndX + amp, y + 80); this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#000000'; this.ctx.font = '12px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('-A', springEndX - amp, y - 90); this.ctx.fillText('+A', springEndX + amp, y - 90); this.ctx.fillText('x=0', springEndX, y - 90);
        }
        if (options.showForce) {
            this.drawArrowVector(springEndX + diagram.amplitude, y + 80, springEndX + diagram.amplitude - 60, y + 80, '#000000', 2.5);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('F = -kx', springEndX + diagram.amplitude - 30, y + 100);
        }
        if (options.showEnergy) {
            const KEmax = 0.5 * diagram.mass * Math.pow(diagram.amplitude * Math.sqrt(diagram.springConstant / diagram.mass), 2);
            const PEmax = 0.5 * diagram.springConstant * diagram.amplitude * diagram.amplitude;
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'left';
            this.ctx.fillText(`KE(max) = ${KEmax.toFixed(2)}J`, x - width / 2 + 20, y + height / 2 - 40);
            this.ctx.fillText(`PE(max) = ${PEmax.toFixed(2)}J`, x - width / 2 + 20, y + height / 2 - 20);
            this.ctx.fillText(`Total E = ${PEmax.toFixed(2)}J`, x - width / 2 + 20, y + height / 2);
        }
    }

    renderTorqueLever(diagram, x, y, width, height, options) {
        const leverLength = diagram.leverLength;
        const fulcrumPos = diagram.fulcrumPosition;
        const leverY = y;
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 8; this.ctx.lineCap = 'round';
        this.ctx.beginPath(); this.ctx.moveTo(x - leverLength / 2, leverY); this.ctx.lineTo(x + leverLength / 2, leverY); this.ctx.stroke();
        const fulcrumX = x - leverLength / 2 + fulcrumPos * leverLength;
        this.drawTriangle(fulcrumX, leverY + 25, 40, 40, '#666666');
        const force1X = x - leverLength / 2 + leverLength * 0.2;
        const force2X = x + leverLength / 2 - leverLength * 0.2;
        if (options.showForces) {
            this.drawArrowVector(force1X, leverY - 40, force1X, leverY - 40 - diagram.force1 * 2, '#000000', 3);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText(`F₁=${diagram.force1}N`, force1X, leverY - 50 - diagram.force1 * 2);
            this.ctx.setLineDash([5, 3]);
            this.drawArrowVector(force2X, leverY - 40, force2X, leverY - 40 - diagram.force2 * 2, '#000000', 3);
            this.ctx.setLineDash([]);
            this.ctx.fillText(`F₂=${diagram.force2}N`, force2X, leverY - 50 - diagram.force2 * 2);
        }
        if (options.showMomentArms) {
            const r1 = Math.abs(force1X - fulcrumX), r2 = Math.abs(force2X - fulcrumX);
            this.ctx.setLineDash([5, 5]); this.ctx.strokeStyle = '#555555'; this.ctx.lineWidth = 2;
            this.ctx.beginPath(); this.ctx.moveTo(fulcrumX, leverY + 50); this.ctx.lineTo(force1X, leverY + 50); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(fulcrumX, leverY + 50); this.ctx.lineTo(force2X, leverY + 50); this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#000000'; this.ctx.font = '12px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText(`r₁=${r1.toFixed(0)}cm`, (fulcrumX + force1X) / 2, leverY + 70);
            this.ctx.fillText(`r₂=${r2.toFixed(0)}cm`, (fulcrumX + force2X) / 2, leverY + 70);
            const torque1 = diagram.force1 * r1, torque2 = diagram.force2 * r2;
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillText(`τ₁=${torque1.toFixed(0)} N·cm (CCW)`, x, y - height / 2 + 30);
            this.ctx.fillText(`τ₂=${torque2.toFixed(0)} N·cm (CW)`, x, y - height / 2 + 50);
        }
        if (options.showRotation) {
            const torque1 = diagram.force1 * Math.abs(force1X - fulcrumX);
            const torque2 = diagram.force2 * Math.abs(force2X - fulcrumX);
            if (Math.abs(torque1 - torque2) > 1) {
                this.drawCurvedArrow(fulcrumX, leverY - 60, 30, torque1 > torque2, '#000000');
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText(`Rotates ${torque1 > torque2 ? 'CCW' : 'CW'}`, fulcrumX, leverY - 100);
            } else {
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText('Equilibrium ✓', fulcrumX, leverY - 90);
            }
        }
    }

    // ========== WAVES & SOUND ==========

    renderWaveTypes(diagram, x, y, width, height, options) {
        const waveWidth = width * 0.9, wavelength = diagram.wavelength, amplitude = diagram.amplitude;
        const numCycles = waveWidth / wavelength;
        const transY = y - height / 4;
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 15px Arial'; this.ctx.textAlign = 'left';
        this.ctx.fillText('Transverse Wave', x - width / 2, transY - amplitude / 2 - 15);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3; this.ctx.beginPath();
        for (let i = 0; i <= 100; i++) {
            const px = x - waveWidth / 2 + (i / 100) * waveWidth;
            const py = transY + amplitude * Math.sin((i / 100) * numCycles * 2 * Math.PI);
            if (i === 0) this.ctx.moveTo(px, py); else this.ctx.lineTo(px, py);
        }
        this.ctx.stroke();
        if (options.showParticles) {
            for (let i = 0; i < 5; i++) {
                const px = x - waveWidth / 2 + (i / 4) * waveWidth;
                const py = transY + amplitude * Math.sin((i / 4) * numCycles * 2 * Math.PI);
                this.ctx.fillStyle = '#000000'; this.ctx.beginPath(); this.ctx.arc(px, py, 6, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.setLineDash([3, 3]);
                this.drawArrowVector(px + 15, py, px + 15, py - 18, '#000000', 1.5);
                this.drawArrowVector(px + 15, py, px + 15, py + 18, '#000000', 1.5);
                this.ctx.setLineDash([]);
            }
        }
        const longY = y + height / 4;
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 15px Arial'; this.ctx.textAlign = 'left';
        this.ctx.fillText('Longitudinal Wave', x - width / 2, longY - amplitude / 2 - 15);
        if (options.showParticles) {
            const particleRows = 5, particlesPerWave = 40;
            for (let row = 0; row < particleRows; row++) {
                for (let i = 0; i < particlesPerWave; i++) {
                    const baseX = x - waveWidth / 2 + (i / particlesPerWave) * waveWidth;
                    const phase = (i / particlesPerWave) * numCycles * 2 * Math.PI;
                    const displacement = amplitude * 0.3 * Math.sin(phase);
                    const density = Math.abs(Math.cos(phase));
                    this.ctx.fillStyle = `rgba(0,0,0,${0.2 + density * 0.6})`;
                    this.ctx.beginPath(); this.ctx.arc(baseX + displacement, longY + (row - particleRows / 2) * 8, 3 + density * 2, 0, Math.PI * 2); this.ctx.fill();
                }
            }
            this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('C = Compression  R = Rarefaction', x, longY + amplitude + 35);
        }
        if (options.showLabels) {
            this.ctx.strokeStyle = '#555555'; this.ctx.lineWidth = 1.5; this.ctx.setLineDash([4, 4]);
            this.ctx.beginPath(); this.ctx.moveTo(x - waveWidth / 2, transY + amplitude + 20); this.ctx.lineTo(x - waveWidth / 2 + wavelength, transY + amplitude + 20); this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('λ (wavelength)', x - waveWidth / 2 + wavelength / 2, transY + amplitude + 36);
            this.ctx.setLineDash([3, 3]); this.ctx.strokeStyle = '#555555';
            this.ctx.beginPath(); this.ctx.moveTo(x - waveWidth / 2 - 30, transY); this.ctx.lineTo(x - waveWidth / 2 - 30, transY - amplitude); this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 11px Arial'; this.ctx.textAlign = 'right';
            this.ctx.fillText('A', x - waveWidth / 2 - 35, transY - amplitude / 2);
        }
    }

    renderWavefront(diagram, x, y, size, options) {
        if (options.showSource) {
            this.ctx.fillStyle = '#000000'; this.ctx.beginPath(); this.ctx.arc(x, y, 8, 0, Math.PI * 2); this.ctx.fill();
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('Source', x, y - 15);
        }
        this.ctx.lineWidth = 2;
        for (let i = 1; i <= diagram.numWavefronts; i++) {
            const radius = i * diagram.wavelength;
            if (radius < size) {
                const gray = Math.floor(50 + (i / diagram.numWavefronts) * 150);
                this.ctx.strokeStyle = `rgb(${gray},${gray},${gray})`;
                this.ctx.beginPath(); this.ctx.arc(x, y, radius, 0, Math.PI * 2); this.ctx.stroke();
            }
        }
        if (options.showRays) {
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 1.5; this.ctx.setLineDash([5, 5]);
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * 2 * Math.PI;
                this.drawArrowVector(x, y, x + size * Math.cos(angle), y + size * Math.sin(angle), '#000000', 1.5);
            }
            this.ctx.setLineDash([]);
        }
        this.ctx.strokeStyle = '#555555'; this.ctx.lineWidth = 1.5; this.ctx.setLineDash([3, 3]);
        this.ctx.beginPath(); this.ctx.moveTo(x, y); this.ctx.lineTo(x + diagram.wavelength, y); this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('λ', x + diagram.wavelength / 2, y - 10);
    }

    renderReflectionRefraction(diagram, x, y, width, height, options) {
        const incidentAngle = (diagram.incidentAngle * Math.PI) / 180;
        const sinTheta2 = (diagram.n1 / diagram.n2) * Math.sin(incidentAngle);
        const refractionAngle = Math.asin(Math.min(1, sinTheta2));
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 2, y); this.ctx.lineTo(x + width / 2, y); this.ctx.stroke();
        this.ctx.fillStyle = 'rgba(0,0,0,0.06)'; this.ctx.fillRect(x - width / 2, y, width, height / 2 - 50);
        this.ctx.fillStyle = '#555555'; this.ctx.font = '13px Arial'; this.ctx.textAlign = 'right';
        this.ctx.fillText(`n₁ = ${diagram.n1}`, x - width / 2 + 80, y - 15);
        this.ctx.fillText(`n₂ = ${diagram.n2}`, x - width / 2 + 80, y + 30);
        if (options.showNormals) {
            this.ctx.strokeStyle = '#aaaaaa'; this.ctx.lineWidth = 1; this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath(); this.ctx.moveTo(x, y - height / 2 + 50); this.ctx.lineTo(x, y + height / 2 - 50); this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#888888'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'left';
            this.ctx.fillText('Normal', x + 5, y - height / 2 + 65);
        }
        const rayLength = height * 0.35;
        this.drawArrowVector(x - rayLength * Math.sin(incidentAngle), y - rayLength * Math.cos(incidentAngle), x, y, '#000000', 3);
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Incident', x - rayLength * Math.sin(incidentAngle) - 25, y - rayLength * Math.cos(incidentAngle));
        this.ctx.setLineDash([5, 3]);
        this.drawArrowVector(x, y, x + rayLength * Math.sin(incidentAngle), y - rayLength * Math.cos(incidentAngle), '#000000', 3);
        this.ctx.setLineDash([]);
        this.ctx.fillText('Reflected', x + rayLength * Math.sin(incidentAngle) + 25, y - rayLength * Math.cos(incidentAngle));
        this.ctx.setLineDash([8, 4]);
        this.drawArrowVector(x, y, x + rayLength * Math.sin(refractionAngle), y + rayLength * Math.cos(refractionAngle), '#000000', 3);
        this.ctx.setLineDash([]);
        this.ctx.fillText('Refracted', x + rayLength * Math.sin(refractionAngle) + 25, y + rayLength * Math.cos(refractionAngle));
        if (options.showAngles) {
            const arc = 40;
            this.ctx.strokeStyle = '#444444'; this.ctx.lineWidth = 1.5;
            this.ctx.beginPath(); this.ctx.arc(x, y, arc, -Math.PI / 2, -Math.PI / 2 - incidentAngle, true); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.arc(x, y, arc, Math.PI / 2, Math.PI / 2 + refractionAngle, false); this.ctx.stroke();
            this.ctx.fillStyle = '#000000'; this.ctx.font = '12px Arial';
            this.ctx.fillText(`θ₁=${diagram.incidentAngle}°`, x - 70, y - 20);
            this.ctx.fillText(`θ₂=${(refractionAngle * 180 / Math.PI).toFixed(1)}°`, x + 55, y + 40);
        }
        if (options.showSnellsLaw) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText("n₁sinθ₁ = n₂sinθ₂", x, y - height / 2 + 30);
        }
    }

    renderWaveInterference(diagram, x, y, width, height, options) {
        const { separation, wavelength } = diagram;
        const source1X = x - separation / 2, source1Y = y;
        const source2X = x + separation / 2, source2Y = y;
        if (options.showSources) {
            this.ctx.fillStyle = '#000000';
            this.ctx.beginPath(); this.ctx.arc(source1X, source1Y, 10, 0, Math.PI * 2); this.ctx.fill();
            this.ctx.beginPath(); this.ctx.arc(source2X, source2Y, 10, 0, Math.PI * 2); this.ctx.fill();
            this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('S₁', source1X, source1Y - 18); this.ctx.fillText('S₂', source2X, source2Y - 18);
        }
        const gridSize = 5, maxDist = Math.min(width, height) * 0.45;
        for (let px = x - maxDist; px < x + maxDist; px += gridSize) {
            for (let py = y - maxDist; py < y + maxDist; py += gridSize) {
                const d1 = Math.sqrt((px - source1X) ** 2 + (py - source1Y) ** 2);
                const d2 = Math.sqrt((px - source2X) ** 2 + (py - source2Y) ** 2);
                const amplitude = Math.cos(((Math.abs(d1 - d2)) / wavelength) * 2 * Math.PI);
                if (amplitude > 0.7) { this.ctx.fillStyle = `rgba(0,0,0,${amplitude * 0.4})`; this.ctx.fillRect(px, py, gridSize, gridSize); }
                else if (amplitude < -0.7) { this.ctx.fillStyle = `rgba(0,0,0,0.05)`; this.ctx.fillRect(px, py, gridSize, gridSize); }
            }
        }
        const numCycles = waveWidth => waveWidth / wavelength;
        if (options.showNodes) {
            this.ctx.strokeStyle = '#444444'; this.ctx.lineWidth = 1.5; this.ctx.setLineDash([5, 5]);
            for (let n = 1; n <= 5; n++) {
                const angle = Math.asin((n - 0.5) * wavelength / separation);
                if (!isNaN(angle)) {
                    [1, -1].forEach(dir => {
                        this.ctx.beginPath(); this.ctx.moveTo(x, y);
                        this.ctx.lineTo(x + maxDist * Math.cos(angle), y + dir * maxDist * Math.sin(angle)); this.ctx.stroke();
                    });
                }
            }
            this.ctx.setLineDash([]);
        }
        if (options.showAntinodes) {
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.setLineDash([8, 4]);
            this.ctx.beginPath(); this.ctx.moveTo(x, y); this.ctx.lineTo(x + maxDist, y); this.ctx.stroke();
            this.ctx.setLineDash([]);
        }
        this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'left';
        this.ctx.fillText('Dark: Constructive', x - width / 2 + 15, y - height / 2 + 40);
        this.ctx.fillText('Light: Destructive', x - width / 2 + 15, y - height / 2 + 58);
    }

    renderStandingWaves(diagram, x, y, width, height, options) {
        const { harmonic, length, amplitude } = diagram;
        this.ctx.fillStyle = '#000000';
        this.ctx.beginPath(); this.ctx.arc(x - length / 2, y, 8, 0, Math.PI * 2); this.ctx.fill();
        this.ctx.beginPath(); this.ctx.arc(x + length / 2, y, 8, 0, Math.PI * 2); this.ctx.fill();
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3; this.ctx.beginPath();
        for (let i = 0; i <= 100; i++) {
            const px = x - length / 2 + (i / 100) * length;
            const py = y + amplitude * Math.sin((harmonic * Math.PI * (i / 100) * length) / length);
            if (i === 0) this.ctx.moveTo(px, py); else this.ctx.lineTo(px, py);
        }
        this.ctx.stroke();
        this.ctx.setLineDash([5, 5]); this.ctx.lineWidth = 1.5; this.ctx.strokeStyle = '#888888';
        for (let sign of [1, -1]) {
            this.ctx.beginPath();
            for (let i = 0; i <= 100; i++) {
                const px = x - length / 2 + (i / 100) * length;
                const py = y + sign * amplitude * Math.sin((harmonic * Math.PI * i) / 100);
                if (i === 0) this.ctx.moveTo(px, py); else this.ctx.lineTo(px, py);
            }
            this.ctx.stroke();
        }
        this.ctx.setLineDash([]);
        if (options.showNodes) {
            this.ctx.fillStyle = '#000000';
            for (let n = 0; n <= harmonic; n++) {
                const nx = x - length / 2 + (n / harmonic) * length;
                this.ctx.beginPath(); this.ctx.arc(nx, y, 6, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.font = 'bold 11px Arial'; this.ctx.textAlign = 'center'; this.ctx.fillText('N', nx, y + 25);
            }
        }
        if (options.showAntinodes) {
            this.ctx.fillStyle = '#555555';
            for (let n = 0; n < harmonic; n++) {
                const ax = x - length / 2 + ((n + 0.5) / harmonic) * length;
                this.ctx.beginPath(); this.ctx.arc(ax, y + amplitude, 6, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.beginPath(); this.ctx.arc(ax, y - amplitude, 6, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.font = 'bold 11px Arial'; this.ctx.textAlign = 'center'; this.ctx.fillText('A', ax, y + amplitude + 20);
            }
        }
        const wl = (2 * length) / harmonic;
        this.ctx.strokeStyle = '#444444'; this.ctx.lineWidth = 1.5; this.ctx.setLineDash([3, 3]);
        this.ctx.beginPath(); this.ctx.moveTo(x - length / 2, y - amplitude - 30); this.ctx.lineTo(x - length / 2 + wl, y - amplitude - 30); this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText(`λ=${wl.toFixed(1)}cm`, x - length / 2 + wl / 2, y - amplitude - 42);
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText(`${harmonic}${this.getOrdinal(harmonic)} Harmonic (n=${harmonic})`, x, y - height / 2 + 30);
    }

    renderDopplerEffect(diagram, x, y, width, height, options) {
        const velocity = diagram.sourceVelocity, wavelength = 40, numWavefronts = 6;
        const dirX = diagram.direction === 'right' ? 1 : (diagram.direction === 'left' ? -1 : 0);
        if (options.showVelocity) {
            this.drawArrowVector(x, y - 70, x + dirX * 80, y - 70, '#000000', 3);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('v (source)', x + dirX * 40, y - 80);
        }
        this.ctx.fillStyle = '#888888'; this.ctx.beginPath(); this.ctx.arc(x, y, 12, 0, Math.PI * 2); this.ctx.fill();
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.stroke();
        if (options.showWavefronts) {
            for (let i = 1; i <= numWavefronts; i++) {
                const shift = velocity * wavelength * i * dirX;
                const gray = Math.floor(80 + (i / numWavefronts) * 120);
                this.ctx.strokeStyle = `rgb(${gray},${gray},${gray})`;
                this.ctx.lineWidth = 2;
                this.ctx.beginPath(); this.ctx.arc(x + shift, y, i * wavelength, 0, Math.PI * 2); this.ctx.stroke();
            }
        }
        if (options.showFrequencyChange) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('Compressed (f↑)', x + dirX * 150, y - 100);
            this.ctx.font = '12px Arial'; this.ctx.fillText("λ' < λ", x + dirX * 150, y - 85);
            this.ctx.font = 'bold 13px Arial'; this.ctx.fillText('Stretched (f↓)', x - dirX * 150, y - 100);
            this.ctx.font = '12px Arial'; this.ctx.fillText("λ' > λ", x - dirX * 150, y - 85);
            this.drawObserver(x + dirX * 150, y + 80, '#000000');
            this.drawObserver(x - dirX * 150, y + 80, '#000000');
        }
    }

    renderSoundPressure(diagram, x, y, width, height, options) {
        const amplitude = diagram.amplitude;
        const wavelength = width / 3;
        const axisY = y;
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 2, axisY); this.ctx.lineTo(x + width / 2, axisY); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 2, axisY - height / 3); this.ctx.lineTo(x - width / 2, axisY + height / 3); this.ctx.stroke();
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'italic 13px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Position', x, axisY + height / 3 + 25);
        this.ctx.save(); this.ctx.translate(x - width / 2 - 30, axisY); this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Pressure', 0, 0); this.ctx.restore();
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3; this.ctx.beginPath();
        for (let i = 0; i <= 100; i++) {
            const px = x - width / 2 + (i / 100) * width;
            const py = axisY - amplitude * Math.sin((i / 100) * (width / wavelength) * 2 * Math.PI);
            if (i === 0) this.ctx.moveTo(px, py); else this.ctx.lineTo(px, py);
        }
        this.ctx.stroke();
        const numCycles = Math.floor(width / wavelength);
        if (options.showCompressions) {
            for (let n = 0; n < numCycles; n++) {
                const cx = x - width / 2 + n * wavelength;
                this.ctx.fillStyle = 'rgba(0,0,0,0.12)'; this.ctx.fillRect(cx, axisY - height / 3, wavelength / 2, 2 * height / 3);
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 11px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText('C', cx + wavelength / 4, axisY + height / 3 + 14);
            }
        }
        if (options.showRarefactions) {
            for (let n = 0; n < numCycles; n++) {
                const cx = x - width / 2 + n * wavelength + wavelength / 2;
                this.ctx.fillStyle = 'rgba(0,0,0,0.04)'; this.ctx.fillRect(cx, axisY - height / 3, wavelength / 2, 2 * height / 3);
                this.ctx.fillStyle = '#555555'; this.ctx.font = 'bold 11px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText('R', cx + wavelength / 4, axisY + height / 3 + 14);
            }
        }
        this.ctx.strokeStyle = '#555555'; this.ctx.lineWidth = 1.5; this.ctx.setLineDash([4, 4]);
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 2, axisY - height / 3 - 20); this.ctx.lineTo(x - width / 2 + wavelength, axisY - height / 3 - 20); this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('λ', x - width / 2 + wavelength / 2, axisY - height / 3 - 32);
        this.ctx.fillText(`Frequency: ${diagram.frequency} Hz`, x, y - height / 2 + 28);
    }

    renderDiffraction(diagram, x, y, width, height, options) {
        const { slitWidth, slitSeparation, wavelength } = diagram;
        const screenDistance = width * 0.6;
        const barrierX = x - width / 3;
        this.ctx.fillStyle = '#555555'; this.ctx.fillRect(barrierX - 5, y - height / 2 + 50, 10, height - 100);
        if (diagram.slitType === 'double') {
            const s1Y = y - slitSeparation / 2, s2Y = y + slitSeparation / 2;
            this.ctx.clearRect(barrierX - 6, s1Y - slitWidth / 2, 12, slitWidth);
            this.ctx.clearRect(barrierX - 6, s2Y - slitWidth / 2, 12, slitWidth);
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
            this.ctx.strokeRect(barrierX - 5, s1Y - slitWidth / 2, 10, slitWidth);
            this.ctx.strokeRect(barrierX - 5, s2Y - slitWidth / 2, 10, slitWidth);
        } else {
            this.ctx.clearRect(barrierX - 6, y - slitWidth / 2, 12, slitWidth);
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
            this.ctx.strokeRect(barrierX - 5, y - slitWidth / 2, 10, slitWidth);
        }
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 1.5;
        for (let i = 0; i < 5; i++) {
            this.drawArrowVector(barrierX - 80 - i * 12, y, barrierX - 68 - i * 12, y, '#000000', 1.5);
        }
        const screenX = barrierX + screenDistance;
        this.ctx.fillStyle = '#e0e0e0'; this.ctx.fillRect(screenX - 5, y - height / 2 + 50, 10, height - 100);
        this.ctx.strokeStyle = '#555555'; this.ctx.lineWidth = 2;
        this.ctx.strokeRect(screenX - 5, y - height / 2 + 50, 10, height - 100);
        if (options.showPattern) {
            const patternHeight = height - 100;
            for (let py = 0; py < patternHeight; py++) {
                const yPos = y - height / 2 + 50 + py;
                const angle = Math.atan((yPos - y) / screenDistance);
                let intensity;
                if (diagram.slitType === 'double') {
                    const beta = (Math.PI * slitSeparation * Math.sin(angle)) / wavelength;
                    intensity = Math.pow(Math.cos(beta), 2);
                } else {
                    const alpha = (Math.PI * slitWidth * Math.sin(angle)) / wavelength;
                    intensity = Math.abs(alpha) < 0.001 ? 1 : Math.pow(Math.sin(alpha) / alpha, 2);
                }
                const c = Math.floor(255 - intensity * 220);
                this.ctx.fillStyle = `rgb(${c},${c},${c})`; this.ctx.fillRect(screenX + 10, yPos, 30, 2);
            }
        }
        if (options.showIntensity) {
            const graphX = screenX + 50, graphWidth = 100, graphHeight = height - 100;
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.beginPath();
            for (let py = 0; py < graphHeight; py++) {
                const yPos = y - height / 2 + 50 + py;
                const angle = Math.atan((yPos - y) / screenDistance);
                let intensity;
                if (diagram.slitType === 'double') {
                    const beta = (Math.PI * slitSeparation * Math.sin(angle)) / wavelength;
                    intensity = Math.pow(Math.cos(beta), 2);
                } else {
                    const alpha = (Math.PI * slitWidth * Math.sin(angle)) / wavelength;
                    intensity = Math.abs(alpha) < 0.001 ? 1 : Math.pow(Math.sin(alpha) / alpha, 2);
                }
                const plotX = graphX + intensity * graphWidth;
                if (py === 0) this.ctx.moveTo(plotX, yPos); else this.ctx.lineTo(plotX, yPos);
            }
            this.ctx.stroke();
            this.ctx.strokeStyle = '#999999'; this.ctx.lineWidth = 1;
            this.ctx.beginPath(); this.ctx.moveTo(graphX, y - height / 2 + 50); this.ctx.lineTo(graphX, y + height / 2 - 50); this.ctx.stroke();
            this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('Intensity', graphX + graphWidth / 2, y + height / 2 - 30);
        }
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText(diagram.slitType === 'double' ? 'Double Slit' : 'Single Slit', barrierX, y - height / 2 + 30);
        this.ctx.fillText('Screen', screenX, y - height / 2 + 30);
    }

    // ========== THERMODYNAMICS ==========

    renderHeatingCurvePhysics(diagram, x, y, width, height, options) {
        const gW = width - 100, gH = height - 100;
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y + gH / 2); this.ctx.lineTo(x + gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y - gH / 2); this.ctx.lineTo(x - gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'italic 13px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Heat Added (Q)', x, y + gH / 2 + 35);
        this.ctx.save(); this.ctx.translate(x - gW / 2 - 40, y); this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Temperature (°C)', 0, 0); this.ctx.restore();
        const segments = [
            { label: 'Ice', slope: 1, length: 0.15, phase: 'solid' },
            { label: 'Melting (0°C)', slope: 0, length: 0.2, phase: 'transition' },
            { label: 'Water', slope: 1, length: 0.25, phase: 'liquid' },
            { label: 'Boiling (100°C)', slope: 0, length: 0.2, phase: 'transition' },
            { label: 'Steam', slope: 0.8, length: 0.2, phase: 'gas' }
        ];
        let cx = x - gW / 2, cy = y + gH / 2 - 50;
        if (options.showPhases) {
            const phasePatterns = ['solid', 'transition', 'liquid', 'transition', 'gas'];
            let px = cx;
            segments.forEach(seg => {
                const sw = seg.length * gW;
                if (seg.phase === 'solid') this.ctx.fillStyle = 'rgba(0,0,0,0.08)';
                else if (seg.phase === 'liquid') this.ctx.fillStyle = 'rgba(0,0,0,0.05)';
                else if (seg.phase === 'gas') this.ctx.fillStyle = 'rgba(0,0,0,0.02)';
                else this.ctx.fillStyle = 'rgba(0,0,0,0)';
                this.ctx.fillRect(px, y - gH / 2, sw, gH);
                if (seg.phase !== 'transition') {
                    this.ctx.fillStyle = 'rgba(0,0,0,0.25)'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
                    this.ctx.fillText(seg.phase.toUpperCase(), px + sw / 2, y - gH / 2 + 25);
                }
                px += sw;
            });
        }
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3; this.ctx.beginPath(); this.ctx.moveTo(cx, cy);
        segments.forEach(seg => {
            const sw = seg.length * gW, sh = seg.slope * 140;
            if (seg.slope === 0) { this.ctx.setLineDash([8, 4]); } else { this.ctx.setLineDash([]); }
            this.ctx.lineTo(cx + sw, cy - sh);
            if (options.showLabels) {
                this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText(seg.label, cx + sw / 2, (cy + cy - sh) / 2 - 12);
            }
            cx += sw; cy -= sh;
        });
        this.ctx.stroke(); this.ctx.setLineDash([]);
    }

    renderPhaseDiagramPhysics(diagram, x, y, width, height, options) {
        const gW = width - 100, gH = height - 100;
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y + gH / 2); this.ctx.lineTo(x + gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y - gH / 2); this.ctx.lineTo(x - gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'italic 13px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Temperature', x, y + gH / 2 + 35);
        this.ctx.save(); this.ctx.translate(x - gW / 2 - 40, y); this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Pressure', 0, 0); this.ctx.restore();
        const sx = x - gW / 2, sy = y + gH / 2;
        // Phase boundary lines
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2.5;
        // Solid-liquid (nearly vertical)
        this.ctx.beginPath(); this.ctx.moveTo(sx + gW * 0.46, sy); this.ctx.lineTo(sx + gW * 0.44, sy - gH * 0.9); this.ctx.stroke();
        // Liquid-gas (curved)
        this.ctx.beginPath(); this.ctx.moveTo(sx + gW * 0.46, sy - gH * 0.1);
        this.ctx.bezierCurveTo(sx + gW * 0.5, sy - gH * 0.3, sx + gW * 0.7, sy - gH * 0.6, sx + gW * 0.85, sy - gH * 0.75); this.ctx.stroke();
        // Solid-gas (sublimation)
        this.ctx.setLineDash([5, 3]);
        this.ctx.beginPath(); this.ctx.moveTo(sx + gW * 0.2, sy); this.ctx.lineTo(sx + gW * 0.46, sy - gH * 0.1); this.ctx.stroke();
        this.ctx.setLineDash([]);
        if (options.showPhaseRegions) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 16px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('SOLID', sx + gW * 0.25, y - gH * 0.1);
            this.ctx.fillText('LIQUID', sx + gW * 0.55, y - gH * 0.3);
            this.ctx.fillText('GAS', sx + gW * 0.75, y + gH * 0.2);
        }
        if (options.showTriplePoint) {
            const tpX = sx + gW * 0.46, tpY = sy - gH * 0.1;
            this.ctx.fillStyle = '#000000'; this.ctx.beginPath(); this.ctx.arc(tpX, tpY, 6, 0, Math.PI * 2); this.ctx.fill();
            this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'left'; this.ctx.fillText('Triple Point', tpX + 10, tpY - 8);
        }
        if (options.showCriticalPoint) {
            const cpX = sx + gW * 0.85, cpY = sy - gH * 0.75;
            this.ctx.fillStyle = '#555555'; this.ctx.beginPath(); this.ctx.arc(cpX, cpY, 6, 0, Math.PI * 2); this.ctx.fill();
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'right';
            this.ctx.fillText('Critical Point', cpX - 10, cpY - 8);
        }
    }

    renderPVDiagram(diagram, x, y, width, height, options) {
        const gW = width - 100, gH = height - 100;
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y + gH / 2); this.ctx.lineTo(x + gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y - gH / 2); this.ctx.lineTo(x - gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'italic 13px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Volume (V)', x, y + gH / 2 + 35);
        this.ctx.save(); this.ctx.translate(x - gW / 2 - 40, y); this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Pressure (P)', 0, 0); this.ctx.restore();
        const V1 = diagram.initialV, P1 = diagram.initialP;
        let V2 = diagram.finalV, P2;
        const processType = diagram.processType;
        if (processType === 'isothermal') P2 = (P1 * V1) / V2;
        else if (processType === 'isobaric') P2 = P1;
        else if (processType === 'isochoric') { V2 = V1; P2 = P1 * 1.5; }
        else if (processType === 'adiabatic') P2 = P1 * Math.pow(V1 / V2, 1.4);
        else P2 = P1;
        const maxV = Math.max(V1, V2) * 1.2, maxP = Math.max(P1, P2) * 1.2;
        const scX = gW / maxV, scY = gH / maxP;
        if (options.showWork && processType !== 'isochoric') {
            this.ctx.fillStyle = 'rgba(0,0,0,0.1)'; this.ctx.beginPath();
            this.ctx.moveTo(x - gW / 2 + V1 * scX, y + gH / 2);
            if (processType === 'isothermal' || processType === 'adiabatic') {
                for (let i = 0; i <= 50; i++) {
                    const V = V1 + (V2 - V1) * (i / 50);
                    const P = processType === 'isothermal' ? (P1 * V1) / V : P1 * Math.pow(V1 / V, 1.4);
                    this.ctx.lineTo(x - gW / 2 + V * scX, y + gH / 2 - P * scY);
                }
            } else { this.ctx.lineTo(x - gW / 2 + V1 * scX, y + gH / 2 - P1 * scY); this.ctx.lineTo(x - gW / 2 + V2 * scX, y + gH / 2 - P2 * scY); }
            this.ctx.lineTo(x - gW / 2 + V2 * scX, y + gH / 2); this.ctx.closePath(); this.ctx.fill();
        }
        if (options.showCurve) {
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3; this.ctx.beginPath();
            if (processType === 'isothermal') {
                for (let i = 0; i <= 60; i++) { const V = V1 + (V2 - V1) * (i / 60); const P = (P1 * V1) / V; if (i === 0) this.ctx.moveTo(x - gW / 2 + V * scX, y + gH / 2 - P * scY); else this.ctx.lineTo(x - gW / 2 + V * scX, y + gH / 2 - P * scY); }
            } else if (processType === 'isobaric') {
                this.ctx.moveTo(x - gW / 2 + V1 * scX, y + gH / 2 - P1 * scY); this.ctx.lineTo(x - gW / 2 + V2 * scX, y + gH / 2 - P2 * scY);
            } else if (processType === 'isochoric') {
                this.ctx.moveTo(x - gW / 2 + V1 * scX, y + gH / 2 - P1 * scY); this.ctx.lineTo(x - gW / 2 + V1 * scX, y + gH / 2 - P2 * scY);
            } else if (processType === 'adiabatic') {
                for (let i = 0; i <= 60; i++) { const V = V1 + (V2 - V1) * (i / 60); const P = P1 * Math.pow(V1 / V, 1.4); if (i === 0) this.ctx.moveTo(x - gW / 2 + V * scX, y + gH / 2 - P * scY); else this.ctx.lineTo(x - gW / 2 + V * scX, y + gH / 2 - P * scY); }
            }
            this.ctx.stroke();
        }
        const pt1X = x - gW / 2 + V1 * scX, pt1Y = y + gH / 2 - P1 * scY;
        const pt2X = x - gW / 2 + V2 * scX, pt2Y = y + gH / 2 - P2 * scY;
        this.ctx.fillStyle = '#000000';
        this.ctx.beginPath(); this.ctx.arc(pt1X, pt1Y, 7, 0, Math.PI * 2); this.ctx.fill();
        this.ctx.fillStyle = '#555555';
        this.ctx.beginPath(); this.ctx.arc(pt2X, pt2Y, 7, 0, Math.PI * 2); this.ctx.fill();
        if (options.showLabels) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('Initial', pt1X, pt1Y - 15); this.ctx.fillText('Final', pt2X, pt2Y - 15);
        }
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 15px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText(`${processType.charAt(0).toUpperCase() + processType.slice(1)} Process`, x, y - gH / 2 - 20);
    }

    renderCarnotCycle(diagram, x, y, width, height, options) {
        const gW = width * 0.5, gH = height * 0.6;
        const pvX = x - width / 4, pvY = y;
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.beginPath(); this.ctx.moveTo(pvX - gW / 2, pvY + gH / 2); this.ctx.lineTo(pvX + gW / 2, pvY + gH / 2); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(pvX - gW / 2, pvY - gH / 2); this.ctx.lineTo(pvX - gW / 2, pvY + gH / 2); this.ctx.stroke();
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'italic 12px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('V', pvX, pvY + gH / 2 + 22);
        this.ctx.save(); this.ctx.translate(pvX - gW / 2 - 22, pvY); this.ctx.rotate(-Math.PI / 2); this.ctx.fillText('P', 0, 0); this.ctx.restore();
        if (options.showPVDiagram) {
            const pts = [{ V: 30, P: 80 }, { V: 70, P: 50 }, { V: 90, P: 25 }, { V: 40, P: 40 }];
            const scX = gW / 120, scY = gH / 100;
            const toCanvasX = V => pvX - gW / 2 + V * scX;
            const toCanvasY = P => pvY + gH / 2 - P * scY;
            const dashStyles = [[], [6, 3], [], [6, 3]];
            const labels = ['A→B: Isothermal Exp.', 'B→C: Adiabatic Exp.', 'C→D: Isothermal Comp.', 'D→A: Adiabatic Comp.'];
            // Draw each stage
            [[0, 1], [1, 2], [2, 3], [3, 0]].forEach(([i, j], stageIdx) => {
                this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2.5;
                this.ctx.setLineDash(dashStyles[stageIdx]);
                this.ctx.beginPath();
                for (let k = 0; k <= 20; k++) {
                    const t = k / 20;
                    const V = pts[i].V + (pts[j].V - pts[i].V) * t;
                    let P;
                    if (stageIdx === 0 || stageIdx === 2) P = (pts[i].P * pts[i].V) / V;
                    else P = pts[i].P * Math.pow(pts[i].V / V, 1.4);
                    if (k === 0) this.ctx.moveTo(toCanvasX(V), toCanvasY(P));
                    else this.ctx.lineTo(toCanvasX(V), toCanvasY(P));
                }
                this.ctx.stroke(); this.ctx.setLineDash([]);
            });
            pts.forEach((pt, i) => {
                this.ctx.fillStyle = '#000000'; this.ctx.beginPath(); this.ctx.arc(toCanvasX(pt.V), toCanvasY(pt.P), 5, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText(String.fromCharCode(65 + i), toCanvasX(pt.V), toCanvasY(pt.P) - 12);
            });
        }
        if (options.showStages) {
            const sx = x + width / 3 - 80, sy = y - height / 3;
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'left';
            this.ctx.fillText('Carnot Stages:', sx, sy);
            const stageTxt = ['1. A→B: Isothermal Exp. (absorbs Qh)', '2. B→C: Adiabatic Exp.', '3. C→D: Isothermal Comp. (releases Qc)', '4. D→A: Adiabatic Comp.'];
            stageTxt.forEach((t, i) => { this.ctx.font = '12px Arial'; this.ctx.fillText(t, sx, sy + 22 + i * 28); });
        }
        if (options.showEfficiency) {
            const eff = ((diagram.Th - diagram.Tc) / diagram.Th * 100).toFixed(1);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText(`η = (Th-Tc)/Th = ${eff}%`, x, y + height / 2 - 20);
        }
    }

    renderHeatTransfer(diagram, x, y, width, height, options) {
        const sW = width / 3;
        // Conduction
        const condX = x + sW / 2;
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 15px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Conduction', condX, y - height / 3);
        this.ctx.fillStyle = '#222222'; this.ctx.fillRect(condX - 60, y - 50, 30, 100);
        this.ctx.fillStyle = '#aaaaaa'; this.ctx.fillRect(condX - 30, y - 20, 80, 40);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.strokeRect(condX - 30, y - 20, 80, 40);
        this.ctx.fillStyle = '#cccccc'; this.ctx.fillRect(condX + 50, y - 50, 30, 100);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.strokeRect(condX - 60, y - 50, 30, 100); this.ctx.strokeRect(condX + 50, y - 50, 30, 100);
        if (options.showArrows) {
            for (let i = 0; i < 3; i++) {
                this.drawArrowVector(condX - 35 + i * 25, y, condX - 20 + i * 25, y, '#000000', 2);
            }
        }
        if (options.showLabels) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('Hot', condX - 45, y - 62); this.ctx.fillText('Cold', condX + 65, y - 62);
            this.ctx.fillText('Direct contact', condX, y + 80); this.ctx.fillText('(e.g. metal rod)', condX, y + 95);
        }
        // Convection
        const convX = x + sW * 1.5;
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 15px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Convection', convX, y - height / 3);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
        this.ctx.strokeRect(convX - 60, y - 60, 120, 120);
        this.ctx.fillStyle = 'rgba(0,0,0,0.08)'; this.ctx.fillRect(convX - 58, y - 58, 116, 116);
        this.ctx.fillStyle = '#333333'; this.ctx.fillRect(convX - 40, y + 62, 80, 12);
        if (options.showArrows) {
            this.ctx.setLineDash([5, 5]); this.ctx.strokeStyle = '#333333'; this.ctx.lineWidth = 2;
            this.ctx.beginPath(); this.ctx.moveTo(convX - 20, y + 50); this.ctx.lineTo(convX - 20, y - 40); this.ctx.lineTo(convX + 30, y - 40); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(convX + 30, y - 40); this.ctx.lineTo(convX + 30, y + 50); this.ctx.lineTo(convX - 20, y + 50); this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.drawArrowVector(convX - 20, y + 20, convX - 20, y - 10, '#000000', 2);
            this.drawArrowVector(convX + 30, y - 10, convX + 30, y + 20, '#555555', 2);
        }
        if (options.showLabels) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('Fluid motion', convX, y + 95); this.ctx.fillText('(e.g. boiling water)', convX, y + 110);
        }
        // Radiation
        const radX = x + sW * 2.5;
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 15px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Radiation', radX, y - height / 3);
        this.ctx.fillStyle = '#333333'; this.ctx.beginPath(); this.ctx.arc(radX - 40, y, 25, 0, Math.PI * 2); this.ctx.fill();
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2;
            this.ctx.beginPath(); this.ctx.moveTo(radX - 40 + Math.cos(a) * 30, y + Math.sin(a) * 30);
            this.ctx.lineTo(radX - 40 + Math.cos(a) * 40, y + Math.sin(a) * 40); this.ctx.stroke();
        }
        if (options.showArrows) {
            for (let i = 0; i < 4; i++) {
                const wY = y - 30 + i * 20;
                this.ctx.strokeStyle = '#555555'; this.ctx.lineWidth = 1.5; this.ctx.beginPath();
                for (let j = 0; j < 30; j++) {
                    const wx = radX - 10 + j * 2;
                    if (j === 0) this.ctx.moveTo(wx, wY + 6 * Math.sin(j * 0.5)); else this.ctx.lineTo(wx, wY + 6 * Math.sin(j * 0.5));
                }
                this.ctx.stroke();
                this.drawArrowVector(radX + 45, wY, radX + 55, wY, '#000000', 1.5);
            }
        }
        this.ctx.fillStyle = '#888888'; this.ctx.fillRect(radX + 50, y - 25, 30, 50);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.strokeRect(radX + 50, y - 25, 30, 50);
        if (options.showLabels) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('No medium needed', radX, y + 80); this.ctx.fillText('(e.g. Sun→Earth)', radX, y + 95);
        }
    }

    renderKineticTheory(diagram, x, y, size, options) {
        const cSize = size * 0.9;
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
        this.ctx.strokeRect(x - cSize / 2, y - cSize / 2, cSize, cSize);
        this.ctx.fillStyle = 'rgba(0,0,0,0.03)'; this.ctx.fillRect(x - cSize / 2, y - cSize / 2, cSize, cSize);
        const speedFactor = Math.sqrt(diagram.temperature / 300);
        // Use seeded positions for reproducibility
        const seed = (n) => { let s = n * 9301 + 49297; return (s % 233280) / 233280; };
        for (let i = 0; i < diagram.numParticles; i++) {
            const px = x - cSize / 2 + 10 + seed(i * 2) * (cSize - 20);
            const py = y - cSize / 2 + 10 + seed(i * 2 + 1) * (cSize - 20);
            const gray = Math.floor(100 + seed(i) * 100);
            this.ctx.fillStyle = `rgb(${gray},${gray},${gray})`;
            this.ctx.beginPath(); this.ctx.arc(px, py, 5, 0, Math.PI * 2); this.ctx.fill();
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 1; this.ctx.stroke();
            if (options.showVelocityVectors) {
                const ang = seed(i * 3) * Math.PI * 2;
                const spd = (8 + seed(i * 4) * 12) * speedFactor;
                this.drawArrowVector(px, py, px + spd * Math.cos(ang), py + spd * Math.sin(ang), '#000000', 1.5);
            }
        }
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText(`T = ${diagram.temperature}K`, x, y - cSize / 2 - 18);
        this.ctx.font = '12px Arial'; this.ctx.fillText('KE ∝ Temperature', x, y + cSize / 2 + 22);
    }

    // ========== ELECTRICITY & MAGNETISM ==========

    renderElectricField(diagram, x, y, width, height, options) {
        const charges = diagram.charges;
        if (options.showFieldLines) {
            const numLines = options.numLines || 16;
            charges.forEach((charge, ci) => {
                const chargeX = x + charge.x, chargeY = y + charge.y;
                const sign = charge.charge > 0 ? 1 : -1;
                for (let i = 0; i < numLines; i++) {
                    const angle = (i / numLines) * 2 * Math.PI;
                    const dashStyle = ci === 0 ? [] : [4, 3];
                    this.ctx.setLineDash(dashStyle);
                    this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 1.5; this.ctx.beginPath();
                    let cx2 = chargeX + 15 * Math.cos(angle), cy2 = chargeY + 15 * Math.sin(angle);
                    this.ctx.moveTo(cx2, cy2);
                    for (let step = 0; step < 50; step++) {
                        let Ex = 0, Ey = 0;
                        charges.forEach(q => {
                            const qx = x + q.x, qy = y + q.y;
                            const dx = cx2 - qx, dy = cy2 - qy, r2 = dx * dx + dy * dy, r = Math.sqrt(r2);
                            if (r > 5) { const E = q.charge / r2; Ex += E * (dx / r); Ey += E * (dy / r); }
                        });
                        const Em = Math.sqrt(Ex * Ex + Ey * Ey);
                        if (Em > 0) {
                            cx2 += (Ex / Em) * 5 * sign; cy2 += (Ey / Em) * 5 * sign;
                            if (Math.abs(cx2 - x) > width / 2 || Math.abs(cy2 - y) > height / 2) break;
                            let close = false;
                            charges.forEach(q => { if (q.charge * sign < 0 && Math.sqrt((cx2 - (x + q.x)) ** 2 + (cy2 - (y + q.y)) ** 2) < 15) close = true; });
                            if (close) break;
                            this.ctx.lineTo(cx2, cy2);
                        } else break;
                    }
                    this.ctx.stroke(); this.ctx.setLineDash([]);
                }
            });
        }
        if (options.showCharges) {
            charges.forEach(charge => {
                const chargeX = x + charge.x, chargeY = y + charge.y;
                const sign = charge.charge > 0 ? 1 : -1;
                const gray = sign > 0 ? '#333333' : '#999999';
                this.ctx.fillStyle = gray; this.ctx.beginPath(); this.ctx.arc(chargeX, chargeY, 18, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.stroke();
                this.ctx.fillStyle = '#ffffff'; this.ctx.font = 'bold 20px Arial'; this.ctx.textAlign = 'center'; this.ctx.textBaseline = 'middle';
                this.ctx.fillText(sign > 0 ? '+' : '−', chargeX, chargeY);
                this.ctx.textBaseline = 'alphabetic';
                if (charge.label) {
                    this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial';
                    this.ctx.fillText(charge.label, chargeX, chargeY - 25);
                }
            });
        }
    }

    renderCircuitDiagram(diagram, x, y, width, height, options) {
        const components = diagram.components;
        if (diagram.configuration === 'series') {
            const spacing = width / (components.length + 1);
            const circuitY = y;
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
            this.ctx.beginPath(); this.ctx.moveTo(x - width / 2, circuitY - 60); this.ctx.lineTo(x + width / 2, circuitY - 60); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(x - width / 2, circuitY + 60); this.ctx.lineTo(x + width / 2, circuitY + 60); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(x - width / 2, circuitY - 60); this.ctx.lineTo(x - width / 2, circuitY + 60); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(x + width / 2, circuitY - 60); this.ctx.lineTo(x + width / 2, circuitY + 60); this.ctx.stroke();
            components.forEach((comp, index) => {
                const compX = x - width / 2 + (index + 1) * spacing;
                this.ctx.beginPath(); this.ctx.moveTo(compX, circuitY - 60); this.ctx.lineTo(compX, circuitY - 30); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.moveTo(compX, circuitY + 30); this.ctx.lineTo(compX, circuitY + 60); this.ctx.stroke();
                this.drawCircuitComponent(comp, compX, circuitY, options);
            });
            if (options.showCurrent) {
                this.drawArrowVector(x + width / 2 - 50, circuitY - 60, x + width / 2 - 20, circuitY - 60, '#000000', 2);
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText('I', x + width / 2 - 35, circuitY - 72);
            }
        }
    }

    renderSeriesParallel(diagram, x, y, width, height, options) {
        const voltage = diagram.voltage, resistors = diagram.resistors;
        const seriesY = y - height / 4;
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 15px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Series Circuit', x, seriesY - 80);
        const spacing = (width * 0.6) / (resistors.length + 1);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 3, seriesY); this.ctx.lineTo(x + width / 3, seriesY); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 3, seriesY + 60); this.ctx.lineTo(x + width / 3, seriesY + 60); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 3, seriesY); this.ctx.lineTo(x - width / 3, seriesY + 60); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x + width / 3, seriesY); this.ctx.lineTo(x + width / 3, seriesY + 60); this.ctx.stroke();
        this.drawBatterySymbol(x - width / 3 + spacing * 0.5, seriesY + 30, voltage, false);
        resistors.forEach((R, index) => {
            const rx = x - width / 3 + (index + 1.5) * spacing;
            this.ctx.beginPath(); this.ctx.moveTo(rx, seriesY); this.ctx.lineTo(rx, seriesY + 30); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(rx, seriesY + 60); this.ctx.lineTo(rx, seriesY + 30); this.ctx.stroke();
            this.drawResistorSymbol({ resistance: R }, rx, seriesY + 30, options);
        });
        if (options.showCalculations) {
            const Rt = resistors.reduce((a, b) => a + b, 0);
            this.ctx.fillStyle = '#000000'; this.ctx.font = '12px Arial'; this.ctx.textAlign = 'left';
            this.ctx.fillText(`R_total = ${Rt}Ω  I = ${(voltage / Rt).toFixed(2)}A (same throughout)`, x - width / 2 + 20, seriesY + 90);
        }
        const parallelY = y + height / 4;
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 15px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Parallel Circuit', x, parallelY - 80);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 3, parallelY - 40); this.ctx.lineTo(x + width / 3, parallelY - 40); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 3, parallelY + 40); this.ctx.lineTo(x + width / 3, parallelY + 40); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 3, parallelY - 40); this.ctx.lineTo(x - width / 3, parallelY + 40); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x + width / 3, parallelY - 40); this.ctx.lineTo(x + width / 3, parallelY + 40); this.ctx.stroke();
        this.drawBatterySymbol(x - width / 3 - 40, parallelY, voltage, true);
        const branchSpacing = 70 / (resistors.length + 1);
        resistors.forEach((R, index) => {
            const ry = parallelY - 35 + (index + 1) * branchSpacing;
            this.ctx.beginPath(); this.ctx.moveTo(x - width / 3, ry); this.ctx.lineTo(x - width / 6, ry); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(x + width / 6, ry); this.ctx.lineTo(x + width / 3, ry); this.ctx.stroke();
            this.drawResistorSymbolHorizontal(x, ry, R);
        });
        if (options.showCalculations) {
            const invR = resistors.reduce((a, R) => a + 1 / R, 0);
            this.ctx.fillStyle = '#000000'; this.ctx.font = '12px Arial'; this.ctx.textAlign = 'left';
            this.ctx.fillText(`R_total = ${(1 / invR).toFixed(2)}Ω  V = ${voltage}V across each`, x - width / 2 + 20, parallelY + 70);
        }
    }

    renderPotentialDistance(diagram, x, y, width, height, options) {
        const gW = width - 100, gH = height - 100;
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y + gH / 2); this.ctx.lineTo(x + gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y - gH / 2); this.ctx.lineTo(x - gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'italic 13px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Distance (r)', x, y + gH / 2 + 35);
        this.ctx.save(); this.ctx.translate(x - gW / 2 - 40, y); this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Electric Potential (V)', 0, 0); this.ctx.restore();
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3; this.ctx.beginPath();
        for (let i = 5; i <= 100; i++) {
            const V = (9 * diagram.chargeQ) / i;
            const px = x - gW / 2 + (i / 100) * gW;
            const py = y + gH / 2 - V / 2;
            if (i === 5) this.ctx.moveTo(px, py); else this.ctx.lineTo(px, py);
        }
        this.ctx.stroke();
        this.ctx.setLineDash([4, 4]); this.ctx.strokeStyle = '#aaaaaa'; this.ctx.lineWidth = 1;
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y + gH / 2); this.ctx.lineTo(x + gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#555555'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'right';
        this.ctx.fillText('V → 0 as r → ∞', x + gW / 2 - 5, y + gH / 2 - 10);
        if (options.showEquation) { this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.textAlign = 'center'; this.ctx.fillText('V = kQ/r', x, y - gH / 2 - 20); }
    }

    renderMagneticField(diagram, x, y, width, height, options) {
        if (diagram.sourceType === 'bar_magnet') {
            const mW = 120, mH = 40;
            this.ctx.fillStyle = '#333333'; this.ctx.fillRect(x - mW / 2, y - mH / 2, mW / 2, mH);
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.strokeRect(x - mW / 2, y - mH / 2, mW / 2, mH);
            this.ctx.fillStyle = '#aaaaaa'; this.ctx.fillRect(x, y - mH / 2, mW / 2, mH);
            this.ctx.strokeRect(x, y - mH / 2, mW / 2, mH);
            if (options.showPoles) {
                this.ctx.fillStyle = '#ffffff'; this.ctx.font = 'bold 20px Arial'; this.ctx.textAlign = 'center'; this.ctx.textBaseline = 'middle';
                this.ctx.fillText('N', x - mW / 4, y); this.ctx.fillText('S', x + mW / 4, y); this.ctx.textBaseline = 'alphabetic';
            }
            if (options.showFieldLines) {
                this.ctx.lineWidth = 2;
                for (let i = 0; i < 6; i++) {
                    const yOff = (i - 2.5) * 18;
                    this.ctx.strokeStyle = i % 2 === 0 ? '#000000' : '#555555';
                    this.ctx.beginPath();
                    this.ctx.moveTo(x - mW / 2, y + yOff);
                    const cpYSign = Math.sign(yOff || 1);
                    this.ctx.bezierCurveTo(x - mW / 2 - 100, y + yOff - 60 * cpYSign, x + mW / 2 + 100, y + yOff - 60 * cpYSign, x + mW / 2, y + yOff);
                    this.ctx.stroke();
                }
                this.ctx.strokeStyle = '#999999'; this.ctx.setLineDash([3, 3]);
                for (let i = 0; i < 3; i++) {
                    const yOff = (i - 1) * 12;
                    this.drawArrowVector(x + mW / 4, y + yOff, x - mW / 4, y + yOff, '#999999', 1.5);
                }
                this.ctx.setLineDash([]);
            }
            if (options.showCompass) {
                [{ x: x - 150, y: y - 80 }, { x: x, y: y - 100 }, { x: x + 150, y: y - 80 }, { x: x - 150, y: y + 80 }, { x: x, y: y + 100 }, { x: x + 150, y: y + 80 }]
                    .forEach(pos => this.drawCompass(pos.x, pos.y, x, y));
            }
        }
    }

    renderEMInduction(diagram, x, y, width, height, options) {
        const coilX = x + width / 4, coilY = y, magnetX = x - width / 4, magnetY = y;
        const mW = 40, mH = 100, coilW = 80, nTurns = diagram.coilTurns;
        if (options.showMagnet) {
            this.ctx.fillStyle = '#333333'; this.ctx.fillRect(magnetX - mW / 2, magnetY - mH / 2, mW, mH / 2);
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.strokeRect(magnetX - mW / 2, magnetY - mH / 2, mW, mH / 2);
            this.ctx.fillStyle = '#aaaaaa'; this.ctx.fillRect(magnetX - mW / 2, magnetY, mW, mH / 2);
            this.ctx.strokeRect(magnetX - mW / 2, magnetY, mW, mH / 2);
            this.ctx.fillStyle = '#ffffff'; this.ctx.font = 'bold 18px Arial'; this.ctx.textAlign = 'center'; this.ctx.textBaseline = 'middle';
            this.ctx.fillText('N', magnetX, magnetY - mH / 4); this.ctx.fillText('S', magnetX, magnetY + mH / 4); this.ctx.textBaseline = 'alphabetic';
            if (diagram.magnetMoving) {
                this.drawArrowVector(magnetX, magnetY - mH / 2 - 20, magnetX, magnetY - mH / 2 - 55, '#000000', 3);
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText('v', magnetX + 12, magnetY - mH / 2 - 35);
            }
        }
        if (options.showCoil) {
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
            for (let i = 0; i < nTurns; i++) {
                const yOff = (i - (nTurns - 1) / 2) * (100 / nTurns);
                this.ctx.beginPath(); this.ctx.ellipse(coilX, coilY + yOff, coilW / 2, 100 / (nTurns * 2), 0, 0, Math.PI * 2); this.ctx.stroke();
            }
            this.ctx.lineWidth = 2;
            this.ctx.beginPath(); this.ctx.moveTo(coilX - coilW / 2, coilY - 50); this.ctx.lineTo(coilX - coilW / 2 - 30, coilY - 50); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(coilX - coilW / 2, coilY + 50); this.ctx.lineTo(coilX - coilW / 2 - 30, coilY + 50); this.ctx.stroke();
            const gX = coilX - coilW / 2 - 60;
            this.ctx.beginPath(); this.ctx.arc(gX, coilY, 22, 0, Math.PI * 2); this.ctx.stroke();
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 16px Arial'; this.ctx.textAlign = 'center'; this.ctx.textBaseline = 'middle';
            this.ctx.fillText('G', gX, coilY + 4); this.ctx.textBaseline = 'alphabetic';
        }
        if (options.showFlux) {
            this.ctx.strokeStyle = '#555555'; this.ctx.lineWidth = 1.5; this.ctx.setLineDash([5, 5]);
            for (let i = -2; i <= 2; i++) {
                this.ctx.beginPath(); this.ctx.moveTo(magnetX + 25, magnetY + i * 18); this.ctx.lineTo(coilX - 50, magnetY + i * 18); this.ctx.stroke();
                this.drawArrowVector(magnetX + 55, magnetY + i * 18, magnetX + 68, magnetY + i * 18, '#555555', 1.5);
            }
            this.ctx.setLineDash([]);
        }
        if (options.showCurrent && diagram.magnetMoving) {
            this.drawArrowVector(coilX - 50, coilY - 40, coilX - 35, coilY - 40, '#000000', 2);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('Induced I', coilX, coilY - 80);
        }
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText("Faraday's Law: ε = −N(dΦ/dt)", x, y + height / 2 - 20);
    }

    renderTransformer(diagram, x, y, width, height, options) {
        const cW = 100, cH = 200, coilW = 60;
        if (options.showCore) {
            this.ctx.fillStyle = '#bbbbbb'; this.ctx.fillRect(x - cW / 2, y - cH / 2, cW, cH);
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
            this.ctx.strokeRect(x - cW / 2, y - cH / 2, cW, cH);
            this.ctx.strokeStyle = '#999999'; this.ctx.lineWidth = 1;
            for (let i = 0; i < 10; i++) {
                const ly = y - cH / 2 + i * (cH / 10);
                this.ctx.beginPath(); this.ctx.moveTo(x - cW / 2, ly); this.ctx.lineTo(x + cW / 2, ly); this.ctx.stroke();
            }
        }
        const primaryX = x - cW / 2 - coilW / 2;
        const secondaryX = x + cW / 2 + coilW / 2;
        if (options.showTurns) {
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
            for (let i = 0; i < 8; i++) {
                const ty = y - cH / 2 + 12 + i * (cH - 24) / 7;
                this.ctx.beginPath(); this.ctx.arc(primaryX, ty - 8, 13, 0, Math.PI); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.arc(primaryX, ty + 8, 13, Math.PI, 0); this.ctx.stroke();
            }
            this.ctx.beginPath(); this.ctx.moveTo(primaryX, y - cH / 2 - 20); this.ctx.lineTo(primaryX, y - cH / 2); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(primaryX, y + cH / 2); this.ctx.lineTo(primaryX, y + cH / 2 + 20); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(primaryX - 30, y - cH / 2 - 20); this.ctx.lineTo(primaryX, y - cH / 2 - 20); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(primaryX, y + cH / 2 + 20); this.ctx.lineTo(primaryX - 30, y + cH / 2 + 20); this.ctx.stroke();
            const acX = primaryX - 55;
            this.ctx.beginPath(); this.ctx.arc(acX, y, 22, 0, Math.PI * 2); this.ctx.stroke();
            this.ctx.lineWidth = 1.5; this.ctx.beginPath();
            for (let i = 0; i <= 20; i++) { const wx = acX - 13 + (i / 20) * 26, wy = y + 8 * Math.sin((i / 20) * Math.PI * 2); if (i === 0) this.ctx.moveTo(wx, wy); else this.ctx.lineTo(wx, wy); }
            this.ctx.stroke();
            this.ctx.lineWidth = 3;
            for (let i = 0; i < 10; i++) {
                const ty = y - cH / 2 + 10 + i * (cH - 20) / 9;
                this.ctx.setLineDash([]);
                this.ctx.beginPath(); this.ctx.arc(secondaryX, ty - 7, 13, 0, Math.PI); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.arc(secondaryX, ty + 7, 13, Math.PI, 0); this.ctx.stroke();
            }
            this.ctx.setLineDash([]);
            this.ctx.beginPath(); this.ctx.moveTo(secondaryX, y - cH / 2 - 20); this.ctx.lineTo(secondaryX, y - cH / 2); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(secondaryX, y + cH / 2); this.ctx.lineTo(secondaryX, y + cH / 2 + 20); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(secondaryX, y - cH / 2 - 20); this.ctx.lineTo(secondaryX + 30, y - cH / 2 - 20); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(secondaryX + 30, y + cH / 2 + 20); this.ctx.lineTo(secondaryX, y + cH / 2 + 20); this.ctx.stroke();
            this.drawResistorSymbolHorizontal(secondaryX + 60, y, 100);
        }
        if (options.showVoltages) {
            const Vs = (diagram.secondaryTurns / diagram.primaryTurns) * diagram.inputVoltage;
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText(`Vp = ${diagram.inputVoltage}V`, primaryX - 55, y - 50);
            this.ctx.font = '11px Arial'; this.ctx.fillText(`Np = ${diagram.primaryTurns}`, primaryX - 55, y + 50);
            this.ctx.font = 'bold 13px Arial'; this.ctx.fillText(`Vs = ${Vs}V`, secondaryX + 60, y - 50);
            this.ctx.font = '11px Arial'; this.ctx.fillText(`Ns = ${diagram.secondaryTurns}`, secondaryX + 60, y + 50);
            this.ctx.font = 'bold 14px Arial'; this.ctx.fillText('Vs/Vp = Ns/Np', x, y + height / 2 - 20);
        }
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Primary', primaryX, y - cH / 2 - 48); this.ctx.fillText('Secondary', secondaryX, y - cH / 2 - 48);
    }

    renderCapacitorCurve(diagram, x, y, width, height, options) {
        const gW = width - 100, gH = height - 100;
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y + gH / 2); this.ctx.lineTo(x + gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y - gH / 2); this.ctx.lineTo(x - gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'italic 13px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Time (s)', x, y + gH / 2 + 35);
        this.ctx.save(); this.ctx.translate(x - gW / 2 - 40, y); this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Voltage / Charge', 0, 0); this.ctx.restore();
        const C = diagram.capacitance / 1000000, R = diagram.resistance, V0 = diagram.voltage, tau = R * C, maxTime = tau * 5;
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3; this.ctx.beginPath();
        for (let i = 0; i <= 100; i++) {
            const t = (i / 100) * maxTime;
            const V = diagram.curveType === 'charging' ? V0 * (1 - Math.exp(-t / tau)) : V0 * Math.exp(-t / tau);
            const px = x - gW / 2 + (t / maxTime) * gW, py = y + gH / 2 - (V / V0) * gH * 0.9;
            if (i === 0) this.ctx.moveTo(px, py); else this.ctx.lineTo(px, py);
        }
        this.ctx.stroke();
        if (options.showTimeConstant) {
            const tauX = x - gW / 2 + (tau / maxTime) * gW;
            const tauV = diagram.curveType === 'charging' ? V0 * (1 - Math.exp(-1)) : V0 * Math.exp(-1);
            const tauY = y + gH / 2 - (tauV / V0) * gH * 0.9;
            this.ctx.strokeStyle = '#555555'; this.ctx.lineWidth = 1.5; this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath(); this.ctx.moveTo(tauX, y + gH / 2); this.ctx.lineTo(tauX, tauY); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, tauY); this.ctx.lineTo(tauX, tauY); this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('τ = RC', tauX, y + gH / 2 + 20);
            this.ctx.textAlign = 'right';
            this.ctx.fillText(diagram.curveType === 'charging' ? '63%' : '37%', x - gW / 2 - 5, tauY + 5);
        }
        if (options.showEquation) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText(diagram.curveType === 'charging' ? 'V(t) = V₀(1 − e^(−t/τ))' : 'V(t) = V₀e^(−t/τ)', x, y - gH / 2 - 22);
        }
        const asymY = diagram.curveType === 'charging' ? y + gH / 2 - gH * 0.9 : y + gH / 2;
        this.ctx.strokeStyle = '#aaaaaa'; this.ctx.lineWidth = 1; this.ctx.setLineDash([3, 3]);
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, asymY); this.ctx.lineTo(x + gW / 2, asymY); this.ctx.stroke(); this.ctx.setLineDash([]);
    }

    renderLorentzForce(diagram, x, y, width, height, options) {
        if (options.showField) {
            const B = diagram.magneticField, gridSize = 60;
            for (let gx = -2; gx <= 2; gx++) {
                for (let gy = -2; gy <= 2; gy++) {
                    const fx = x + gx * gridSize, fy = y + gy * gridSize;
                    if (Math.abs(fx - x) > 30 || Math.abs(fy - y) > 30) {
                        this.ctx.strokeStyle = '#aaaaaa'; this.ctx.lineWidth = 1.5;
                        if (B.direction === 'into_page') {
                            this.ctx.beginPath(); this.ctx.moveTo(fx - 7, fy - 7); this.ctx.lineTo(fx + 7, fy + 7); this.ctx.stroke();
                            this.ctx.beginPath(); this.ctx.moveTo(fx + 7, fy - 7); this.ctx.lineTo(fx - 7, fy + 7); this.ctx.stroke();
                        } else {
                            this.ctx.fillStyle = '#888888'; this.ctx.beginPath(); this.ctx.arc(fx, fy, 4, 0, Math.PI * 2); this.ctx.fill();
                            this.ctx.strokeStyle = '#aaaaaa'; this.ctx.beginPath(); this.ctx.arc(fx, fy, 8, 0, Math.PI * 2); this.ctx.stroke();
                        }
                    }
                }
            }
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'left';
            this.ctx.fillText(B.direction === 'into_page' ? 'B (into page) ⊗' : 'B (out of page) ⊙', x + width / 2 - 160, y - height / 2 + 30);
        }
        this.ctx.fillStyle = '#888888'; this.ctx.beginPath(); this.ctx.arc(x, y, 15, 0, Math.PI * 2); this.ctx.fill();
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.stroke();
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 18px Arial'; this.ctx.textAlign = 'center'; this.ctx.textBaseline = 'middle';
        this.ctx.fillText(diagram.charge > 0 ? '+' : '−', x, y); this.ctx.textBaseline = 'alphabetic';
        if (options.showVelocity) {
            const v = diagram.velocity, vLen = Math.sqrt(v.x * v.x + v.y * v.y) * 3;
            const vA = Math.atan2(-v.y, v.x);
            this.drawArrowVector(x + 20, y, x + 20 + vLen * Math.cos(vA), y - vLen * Math.sin(vA), '#000000', 3);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('v', x + 20 + vLen * Math.cos(vA) + 15, y - vLen * Math.sin(vA));
        }
        if (options.showForce) {
            const v = diagram.velocity, B = diagram.magneticField, q = diagram.charge;
            const vA = Math.atan2(-v.y, v.x);
            const fA = B.direction === 'into_page' ? (q > 0 ? vA - Math.PI / 2 : vA + Math.PI / 2) : (q > 0 ? vA + Math.PI / 2 : vA - Math.PI / 2);
            this.ctx.setLineDash([]);
            this.drawArrowVector(x, y, x + 80 * Math.cos(fA), y + 80 * Math.sin(fA), '#000000', 4);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('F', x + 80 * Math.cos(fA) + 14 * Math.cos(fA), y + 80 * Math.sin(fA) + 14 * Math.sin(fA));
        }
        if (options.showRightHandRule) {
            const rx = x - width / 2 + 80, ry = y + height / 2 - 80;
            this.ctx.fillStyle = '#f0f0f0'; this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 1.5;
            this.ctx.beginPath(); this.ctx.roundRect(rx - 70, ry - 50, 140, 80, 5); this.ctx.fill(); this.ctx.stroke();
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 11px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('Right-Hand Rule:', rx, ry - 30);
            this.ctx.font = '10px Arial';
            this.ctx.fillText('Fingers: v  |  Palm: B', rx, ry - 10);
            this.ctx.fillText('Thumb: F (if q > 0)', rx, ry + 8);
        }
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 16px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('F = q(v × B)', x, y - height / 2 + 30);
    }

    // ========== OPTICS ==========

    renderMirrorRayDiagram(diagram, x, y, width, height, options) {
        const mirrorType = diagram.mirrorType;
        const f = diagram.focalLength || 100;
        const objectDist = diagram.objectDistance;
        const objectHeight = diagram.objectHeight;
        const mirrorX = x;
        const axisY = y;

        // Principal axis
        this.ctx.strokeStyle = '#aaaaaa'; this.ctx.lineWidth = 1; this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 2, axisY); this.ctx.lineTo(x + width / 2, axisY); this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Draw mirror
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 4;
        if (mirrorType === 'plane') {
            this.ctx.beginPath(); this.ctx.moveTo(mirrorX, axisY - height / 3); this.ctx.lineTo(mirrorX, axisY + height / 3); this.ctx.stroke();
            this.ctx.fillStyle = '#cccccc'; this.ctx.fillRect(mirrorX, axisY - height / 3, 10, 2 * height / 3);
        } else if (mirrorType === 'concave') {
            this.ctx.beginPath(); this.ctx.arc(mirrorX + 150, axisY, 200, Math.PI - 0.7, Math.PI + 0.7); this.ctx.stroke();
            // Hatching to show reflective side
            for (let i = -3; i <= 3; i++) {
                const ay = axisY + i * 30;
                const ax = mirrorX + 150 - Math.sqrt(200 * 200 - i * i * 30 * 30 / 4);
                this.ctx.strokeStyle = '#888888'; this.ctx.lineWidth = 1.5;
                this.ctx.beginPath(); this.ctx.moveTo(ax, ay); this.ctx.lineTo(ax + 12, ay - 8); this.ctx.stroke();
            }
        } else if (mirrorType === 'convex') {
            this.ctx.beginPath(); this.ctx.arc(mirrorX - 150, axisY, 200, -0.7, 0.7); this.ctx.stroke();
            for (let i = -3; i <= 3; i++) {
                const ay = axisY + i * 30;
                const ax = mirrorX - 150 + Math.sqrt(200 * 200 - i * i * 30 * 30 / 4);
                this.ctx.strokeStyle = '#888888'; this.ctx.lineWidth = 1.5;
                this.ctx.beginPath(); this.ctx.moveTo(ax, ay); this.ctx.lineTo(ax + 12, ay + 8); this.ctx.stroke();
            }
        }
        this.ctx.strokeStyle = '#000000';

        // Object arrow
        const objX = mirrorX - objectDist;
        if (options.showObject) {
            this.drawArrowVector(objX, axisY, objX, axisY - objectHeight, '#000000', 3);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('Object', objX, axisY + 25);
        }

        // Focal and center points
        if (mirrorType !== 'plane') {
            const focalX = mirrorType === 'concave' ? mirrorX - Math.abs(f) : mirrorX + Math.abs(f);
            const centerX = mirrorType === 'concave' ? mirrorX - 2 * Math.abs(f) : mirrorX + 2 * Math.abs(f);
            if (options.showFocalPoint) {
                this.ctx.fillStyle = '#000000'; this.ctx.beginPath(); this.ctx.arc(focalX, axisY, 5, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center'; this.ctx.fillText('F', focalX, axisY + 20);
            }
            if (options.showCenter) {
                this.ctx.fillStyle = '#555555'; this.ctx.beginPath(); this.ctx.arc(centerX, axisY, 5, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center'; this.ctx.fillText('C', centerX, axisY + 20);
            }
        }

        // Rays and image
        if (options.showRays && options.showImage) {
            const objTipY = axisY - objectHeight;
            const dashPatterns = [[], [6, 3], [3, 3]];

            if (mirrorType === 'plane') {
                const imgX = mirrorX + objectDist;
                // Ray 1
                this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.setLineDash([]);
                this.drawArrowVector(objX, objTipY, mirrorX, objTipY, '#000000', 2);
                this.drawArrowVector(mirrorX, objTipY, mirrorX + 100, objTipY, '#000000', 2);
                // Virtual extension
                this.ctx.setLineDash([5, 5]);
                this.ctx.beginPath(); this.ctx.moveTo(mirrorX, objTipY); this.ctx.lineTo(imgX, objTipY); this.ctx.stroke();
                this.ctx.setLineDash([]);
                // Virtual image
                this.ctx.setLineDash([5, 5]);
                this.drawArrowVector(imgX, axisY, imgX, axisY - objectHeight, '#000000', 2.5);
                this.ctx.setLineDash([]);
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText('Virtual Image', imgX, axisY + 30);
            } else if (mirrorType === 'concave') {
                const u = -objectDist, focal = -Math.abs(f);
                const v = (focal * u) / (u - focal);
                const mag = -v / u;
                const imgH = mag * objectHeight;
                const imgX = mirrorX - Math.abs(v);
                const focalX = mirrorX - Math.abs(f);

                // Ray 1: parallel → through F
                this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.setLineDash([]);
                this.drawArrowVector(objX, objTipY, mirrorX, objTipY, '#000000', 2);
                this.drawArrowVector(mirrorX, objTipY, imgX, axisY - imgH, '#000000', 2);
                // Ray 2: through center
                this.ctx.setLineDash([6, 3]);
                this.drawArrowVector(objX, objTipY, imgX, axisY - imgH, '#000000', 2);
                this.ctx.setLineDash([]);
                // Ray 3: through F → parallel
                this.ctx.setLineDash([3, 3]);
                this.drawArrowVector(objX, objTipY, focalX, axisY, '#000000', 1.5);
                this.drawArrowVector(focalX, axisY, imgX, axisY - imgH, '#000000', 1.5);
                this.ctx.setLineDash([]);
                // Image
                if (v < 0) {
                    this.drawArrowVector(imgX, axisY, imgX, axisY - imgH, '#000000', 3);
                    this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
                    this.ctx.fillText(imgH < 0 ? 'Real, Inverted' : 'Real, Upright', imgX, axisY + 30);
                } else {
                    this.ctx.setLineDash([5, 5]);
                    this.drawArrowVector(imgX, axisY, imgX, axisY - Math.abs(imgH), '#000000', 2.5);
                    this.ctx.setLineDash([]);
                    this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
                    this.ctx.fillText('Virtual Image', imgX, axisY + 30);
                }
            } else if (mirrorType === 'convex') {
                const u = -objectDist, focal = Math.abs(f);
                const v = (focal * u) / (u + focal);
                const mag = v / u;
                const imgH = mag * objectHeight;
                const imgX = mirrorX - v;

                this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
                this.drawArrowVector(objX, objTipY, mirrorX, objTipY, '#000000', 2);
                this.drawArrowVector(mirrorX, objTipY, mirrorX + 80, objTipY + 40, '#000000', 2);
                this.ctx.setLineDash([5, 5]);
                this.ctx.beginPath(); this.ctx.moveTo(mirrorX, objTipY); this.ctx.lineTo(imgX, axisY - imgH); this.ctx.stroke();
                this.ctx.setLineDash([6, 3]);
                this.drawArrowVector(objX, objTipY, mirrorX, axisY - objectHeight / 2, '#000000', 2);
                this.drawArrowVector(mirrorX, axisY - objectHeight / 2, mirrorX + 80, axisY + objectHeight / 2, '#000000', 2);
                this.ctx.setLineDash([5, 5]);
                this.ctx.beginPath(); this.ctx.moveTo(mirrorX, axisY - objectHeight / 2); this.ctx.lineTo(imgX, axisY - imgH); this.ctx.stroke();
                this.ctx.setLineDash([]);
                this.ctx.setLineDash([5, 5]);
                this.drawArrowVector(imgX, axisY, imgX, axisY - imgH, '#000000', 2.5);
                this.ctx.setLineDash([]);
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText('Virtual, Upright, Diminished', imgX, axisY + 30);
            }
        }
        if (options.showNormals && mirrorType === 'plane') {
            this.ctx.strokeStyle = '#bbbbbb'; this.ctx.lineWidth = 1; this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath(); this.ctx.moveTo(mirrorX - 60, axisY - objectHeight / 2); this.ctx.lineTo(mirrorX + 60, axisY - objectHeight / 2); this.ctx.stroke();
            this.ctx.setLineDash([]);
        }
    }

    renderLensRayDiagram(diagram, x, y, width, height, options) {
        const lensType = diagram.lensType;
        const f = diagram.focalLength;
        const objectDist = diagram.objectDistance;
        const objectHeight = diagram.objectHeight;
        const lensX = x, axisY = y;
        const lensH = height * 0.5;

        // Principal axis
        this.ctx.strokeStyle = '#aaaaaa'; this.ctx.lineWidth = 1; this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 2, axisY); this.ctx.lineTo(x + width / 2, axisY); this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Draw lens
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
        if (lensType === 'convex') {
            this.ctx.beginPath(); this.ctx.arc(lensX - 20, axisY, lensH / 2 + 20, -Math.PI / 2 + 0.3, Math.PI / 2 - 0.3); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.arc(lensX + 20, axisY, lensH / 2 + 20, Math.PI / 2 + 0.3, -Math.PI / 2 - 0.3); this.ctx.stroke();
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath(); this.ctx.moveTo(lensX, axisY - lensH / 2); this.ctx.lineTo(lensX, axisY + lensH / 2); this.ctx.stroke();
        } else {
            this.ctx.beginPath(); this.ctx.arc(lensX + 40, axisY, lensH / 2 + 40, Math.PI / 2 + 0.5, -Math.PI / 2 - 0.5, true); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.arc(lensX - 40, axisY, lensH / 2 + 40, -Math.PI / 2 + 0.5, Math.PI / 2 - 0.5, true); this.ctx.stroke();
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath(); this.ctx.moveTo(lensX, axisY - lensH / 2); this.ctx.lineTo(lensX, axisY + lensH / 2); this.ctx.stroke();
        }

        // Object
        const objX = lensX - objectDist, objTipY = axisY - objectHeight;
        if (options.showObject) {
            this.drawArrowVector(objX, axisY, objX, objTipY, '#000000', 3);
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('Object', objX, axisY + 25);
        }

        // Focal points
        if (options.showFocalPoints) {
            [lensX - Math.abs(f), lensX + Math.abs(f)].forEach((fx, i) => {
                this.ctx.fillStyle = '#000000'; this.ctx.beginPath(); this.ctx.arc(fx, axisY, 5, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center'; this.ctx.fillText('F', fx, axisY + 20);
            });
            [lensX - 2 * Math.abs(f), lensX + 2 * Math.abs(f)].forEach(fx => {
                this.ctx.fillStyle = '#555555'; this.ctx.beginPath(); this.ctx.arc(fx, axisY, 5, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center'; this.ctx.fillText('2F', fx, axisY + 20);
            });
        }

        // Rays and image
        if (options.showPrincipalRays && options.showImage) {
            const u = -objectDist;
            const v = (f * u) / (u - f);
            const mag = -v / u;
            const imgH = mag * objectHeight;
            const imgX = lensX - v;

            if (lensType === 'convex') {
                // Ray 1: parallel → through right F
                this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.setLineDash([]);
                this.drawArrowVector(objX, objTipY, lensX, objTipY, '#000000', 2);
                this.drawArrowVector(lensX, objTipY, imgX, axisY - imgH, '#000000', 2);
                // Ray 2: through center (straight)
                this.ctx.setLineDash([6, 3]);
                this.drawArrowVector(objX, objTipY, imgX, axisY - imgH, '#000000', 2);
                this.ctx.setLineDash([]);
                // Ray 3: through left F → parallel
                const fL = lensX - Math.abs(f);
                const slope = (objTipY - axisY) / (objX - fL);
                const atLens = objTipY + slope * (lensX - objX);
                this.ctx.setLineDash([3, 3]);
                this.drawArrowVector(objX, objTipY, lensX, atLens, '#000000', 1.5);
                this.drawArrowVector(lensX, atLens, imgX, axisY - imgH, '#000000', 1.5);
                this.ctx.setLineDash([]);
                // Image
                if (v < 0) {
                    this.drawArrowVector(imgX, axisY, imgX, axisY - imgH, '#000000', 3);
                    this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
                    this.ctx.fillText(imgH < 0 ? 'Real, Inverted' : 'Real', imgX, axisY + 28);
                } else {
                    this.ctx.setLineDash([5, 5]);
                    this.drawArrowVector(imgX, axisY, imgX, axisY - Math.abs(imgH), '#000000', 2.5);
                    this.ctx.setLineDash([]);
                    this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
                    this.ctx.fillText('Virtual, Upright', imgX, axisY + 28);
                }
            } else {
                // Concave lens: always virtual, upright, diminished
                const vc = (f * u) / (u - f);
                const magC = vc / u;
                const imgHc = magC * objectHeight;
                const imgXc = lensX - vc;

                // Ray 1: parallel → diverges from left F
                this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.setLineDash([]);
                this.drawArrowVector(objX, objTipY, lensX, objTipY, '#000000', 2);
                this.drawArrowVector(lensX, objTipY, lensX + 130, objTipY + 70, '#000000', 2);
                this.ctx.setLineDash([5, 5]);
                this.ctx.beginPath(); this.ctx.moveTo(lensX, objTipY); this.ctx.lineTo(imgXc, axisY - imgHc); this.ctx.stroke();
                // Ray 2: toward center
                this.ctx.setLineDash([6, 3]);
                this.drawArrowVector(objX, objTipY, imgXc, axisY - imgHc, '#000000', 2);
                this.ctx.setLineDash([]);
                // Virtual image
                this.ctx.setLineDash([5, 5]);
                this.drawArrowVector(imgXc, axisY, imgXc, axisY - imgHc, '#000000', 2.5);
                this.ctx.setLineDash([]);
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText('Virtual, Upright, Diminished', imgXc, axisY + 28);
            }
        }
    }

    renderSnellsLaw(diagram, x, y, width, height, options) {
        const n1 = diagram.n1, n2 = diagram.n2;
        const incidentAngle = (diagram.incidentAngle * Math.PI) / 180;
        const refractionAngle = Math.asin((n1 / n2) * Math.sin(incidentAngle));
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 2, y); this.ctx.lineTo(x + width / 2, y); this.ctx.stroke();
        this.ctx.fillStyle = 'rgba(0,0,0,0.07)'; this.ctx.fillRect(x - width / 2, y, width, height / 2);
        this.ctx.fillStyle = '#000000'; this.ctx.font = '13px Arial'; this.ctx.textAlign = 'left';
        this.ctx.fillText(`n₁ = ${n1}`, x - width / 2 + 10, y - 15);
        this.ctx.fillText(`n₂ = ${n2}`, x - width / 2 + 10, y + 30);
        if (options.showNormals) {
            this.ctx.strokeStyle = '#bbbbbb'; this.ctx.lineWidth = 1; this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath(); this.ctx.moveTo(x, y - height / 2); this.ctx.lineTo(x, y + height / 2); this.ctx.stroke();
            this.ctx.setLineDash([]);
        }
        const rL = height * 0.35;
        this.drawArrowVector(x - rL * Math.sin(incidentAngle), y - rL * Math.cos(incidentAngle), x, y, '#000000', 3);
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Incident', x - rL * Math.sin(incidentAngle) - 30, y - rL * Math.cos(incidentAngle));
        this.ctx.setLineDash([5, 3]);
        this.drawArrowVector(x, y, x + rL * Math.sin(refractionAngle), y + rL * Math.cos(refractionAngle), '#000000', 3);
        this.ctx.setLineDash([]);
        this.ctx.fillText('Refracted', x + rL * Math.sin(refractionAngle) + 30, y + rL * Math.cos(refractionAngle));
        if (options.showAngles) {
            const arc = 45;
            this.ctx.strokeStyle = '#444444'; this.ctx.lineWidth = 1.5;
            this.ctx.beginPath(); this.ctx.arc(x, y, arc, -Math.PI / 2, -Math.PI / 2 - incidentAngle, true); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.arc(x, y, arc, Math.PI / 2, Math.PI / 2 + refractionAngle); this.ctx.stroke();
            this.ctx.fillStyle = '#000000'; this.ctx.font = '12px Arial'; this.ctx.textAlign = 'right';
            this.ctx.fillText(`θ₁=${diagram.incidentAngle}°`, x - arc - 8, y - 12);
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`θ₂=${(refractionAngle * 180 / Math.PI).toFixed(1)}°`, x + arc + 8, y + 25);
        }
        if (options.showEquation) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 16px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('n₁ sin θ₁ = n₂ sin θ₂', x, y - height / 2 + 55);
        }
    }

    renderTotalInternalReflection(diagram, x, y, width, height, options) {
        const n1 = diagram.n1, n2 = diagram.n2;
        const criticalAngle = Math.asin(n2 / n1);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
        this.ctx.beginPath(); this.ctx.moveTo(x - width / 2, y); this.ctx.lineTo(x + width / 2, y); this.ctx.stroke();
        this.ctx.fillStyle = 'rgba(0,0,0,0.08)'; this.ctx.fillRect(x - width / 2, y, width, height / 2);
        this.ctx.fillStyle = '#000000'; this.ctx.font = '13px Arial'; this.ctx.textAlign = 'left';
        this.ctx.fillText(`n₁ = ${n1} (dense)`, x - width / 2 + 10, y + 25);
        this.ctx.fillText(`n₂ = ${n2} (less dense)`, x - width / 2 + 10, y - 15);
        this.ctx.strokeStyle = '#bbbbbb'; this.ctx.lineWidth = 1; this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath(); this.ctx.moveTo(x, y - height / 2); this.ctx.lineTo(x, y + height / 2); this.ctx.stroke();
        this.ctx.setLineDash([]);
        if (options.showMultipleAngles) {
            const cases = [
                { a: criticalAngle * 0.7, ox: x - width / 3, label: 'Below θc (partial refraction)' },
                { a: criticalAngle, ox: x, label: 'At θc (grazes surface)' },
                { a: criticalAngle * 1.25, ox: x + width / 3, label: 'Above θc (TIR)' }
            ];
            cases.forEach(({ a, ox, label }) => {
                const rL = height * 0.28;
                this.drawArrowVector(ox - rL * Math.sin(a), y + rL * Math.cos(a), ox, y, '#000000', 2);
                if (a < criticalAngle) {
                    const rA = Math.asin((n1 / n2) * Math.sin(a));
                    this.ctx.setLineDash([5, 3]);
                    this.drawArrowVector(ox, y, ox + rL * Math.sin(rA), y - rL * Math.cos(rA), '#000000', 2);
                    this.ctx.setLineDash([]);
                } else if (Math.abs(a - criticalAngle) < 0.05) {
                    this.drawArrowVector(ox, y, ox + rL, y, '#000000', 2);
                } else {
                    this.ctx.setLineDash([6, 3]);
                    this.drawArrowVector(ox, y, ox + rL * Math.sin(a), y + rL * Math.cos(a), '#000000', 2);
                    this.ctx.setLineDash([]);
                }
                this.ctx.fillStyle = '#000000'; this.ctx.font = '10px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText(label, ox, y + height / 2 - 20);
            });
        } else {
            const angle = (diagram.angle * Math.PI) / 180;
            const rL = height * 0.35;
            this.drawArrowVector(x - rL * Math.sin(angle), y + rL * Math.cos(angle), x, y, '#000000', 3);
            if (angle >= criticalAngle) {
                this.ctx.setLineDash([6, 3]);
                this.drawArrowVector(x, y, x + rL * Math.sin(angle), y + rL * Math.cos(angle), '#000000', 3);
                this.ctx.setLineDash([]);
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText('Total Internal Reflection', x, y - height / 2 + 55);
            } else {
                const rA = Math.asin((n1 / n2) * Math.sin(angle));
                this.ctx.setLineDash([5, 3]);
                this.drawArrowVector(x, y, x + rL * Math.sin(rA), y - rL * Math.cos(rA), '#000000', 3);
                this.ctx.setLineDash([]);
            }
        }
        if (options.showCriticalAngle) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText(`Critical Angle θc = ${(criticalAngle * 180 / Math.PI).toFixed(1)}°   sin(θc) = n₂/n₁`, x, y + height / 2 - 45);
        }
    }

    renderPrismDispersion(diagram, x, y, width, height, options) {
        const pSize = 150;
        // Prism
        this.ctx.fillStyle = 'rgba(0,0,0,0.07)'; this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x - pSize / 2, y + pSize / 3);
        this.ctx.lineTo(x + pSize / 2, y + pSize / 3);
        this.ctx.lineTo(x, y - pSize / 2);
        this.ctx.closePath(); this.ctx.fill(); this.ctx.stroke();
        // Incident ray
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 4;
        this.drawArrowVector(x - pSize / 2 - 100, y, x - pSize / 2 + 15, y, '#000000', 4);
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('White Light', x - pSize / 2 - 50, y - 15);
        // Spectrum (different line weights/dashes to distinguish colors in B&W)
        if (options.showSpectrum) {
            const exitX = x + pSize / 2 - 15, exitY = y + 15;
            const rays = [
                { angle: 0.04, dash: [], weight: 2.5, label: 'Red' },
                { angle: 0.08, dash: [8, 3], weight: 2, label: 'Orange' },
                { angle: 0.11, dash: [], weight: 1.8, label: 'Yellow' },
                { angle: 0.14, dash: [5, 3], weight: 1.6, label: 'Green' },
                { angle: 0.17, dash: [], weight: 1.4, label: 'Blue' },
                { angle: 0.20, dash: [3, 3], weight: 1.2, label: 'Indigo' },
                { angle: 0.23, dash: [], weight: 1, label: 'Violet' }
            ];
            rays.forEach((r, i) => {
                const rL = 120;
                const endX = exitX + rL * Math.cos(r.angle), endY = exitY + rL * Math.sin(r.angle);
                const gray = Math.floor(30 + i * 30);
                this.ctx.strokeStyle = `rgb(${gray},${gray},${gray})`; this.ctx.lineWidth = r.weight; this.ctx.setLineDash(r.dash);
                this.ctx.beginPath(); this.ctx.moveTo(exitX, exitY); this.ctx.lineTo(endX, endY); this.ctx.stroke();
                this.ctx.setLineDash([]);
                if (i % 2 === 0) {
                    this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'left';
                    this.ctx.fillText(r.label, endX + 5, endY + 4);
                }
            });
        }
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Dispersion: Violet bends most, Red least', x, y - height / 2 + 30);
    }

    renderOpticalFiber(diagram, x, y, width, height, options) {
        const fL = diagram.fiberLength, fR = 30;
        if (options.showCladding) {
            const clad = 8;
            this.ctx.fillStyle = 'rgba(0,0,0,0.05)';
            this.ctx.fillRect(x - fL / 2, y - fR - clad, fL, clad);
            this.ctx.fillRect(x - fL / 2, y + fR, fL, clad);
            this.ctx.strokeStyle = '#aaaaaa'; this.ctx.lineWidth = 1;
            this.ctx.strokeRect(x - fL / 2, y - fR - clad, fL, clad);
            this.ctx.strokeRect(x - fL / 2, y + fR, fL, clad);
            this.ctx.fillStyle = '#555555'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'left';
            this.ctx.fillText('Cladding (n₂)', x - fL / 2 + 8, y - fR - 2);
        }
        if (options.showCore) {
            this.ctx.fillStyle = 'rgba(0,0,0,0.06)'; this.ctx.fillRect(x - fL / 2, y - fR, fL, fR * 2);
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x - fL / 2, y - fR, fL, fR * 2);
            this.ctx.fillStyle = '#555555'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'left';
            this.ctx.fillText('Core (n₁)', x - fL / 2 + 8, y + 5);
        }
        if (options.showReflections) {
            const seg = fL / diagram.numReflections;
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2.5; this.ctx.beginPath();
            let cx2 = x - fL / 2, cy2 = y, dir = 1;
            this.ctx.moveTo(cx2, cy2);
            for (let i = 0; i < diagram.numReflections; i++) {
                cx2 += seg; cy2 = y + dir * fR * 1.8;
                this.ctx.lineTo(cx2, cy2);
                this.ctx.fillStyle = '#333333'; this.ctx.beginPath(); this.ctx.arc(cx2, cy2, 4, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.beginPath();
                if (i < diagram.numReflections - 1) { const nx = cx2 + seg, ny = y + (-dir) * fR * 1.8; this.ctx.moveTo(cx2, cy2); this.ctx.lineTo(nx, ny); }
                dir *= -1;
            }
            this.ctx.moveTo(cx2, cy2); this.ctx.lineTo(x + fL / 2, y); this.ctx.stroke();
        }
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Input', x - fL / 2 - 35, y + 5); this.ctx.fillText('Output', x + fL / 2 + 35, y + 5);
        this.ctx.fillText('Total Internal Reflection in Optical Fibre', x, y - fR - 48);
    }

    renderOpticalInterference(diagram, x, y, width, height, options) {
        const { slitSeparation, wavelength, screenDistance } = diagram;
        const scaledDist = Math.min(screenDistance / 10, width * 0.5);
        const slitX = x - width / 3;
        this.ctx.fillStyle = '#555555'; this.ctx.fillRect(slitX - 5, y - height / 3, 10, height * 2 / 3);
        const s1Y = y - slitSeparation / 2, s2Y = y + slitSeparation / 2;
        this.ctx.clearRect(slitX - 6, s1Y - 10, 12, 20); this.ctx.clearRect(slitX - 6, s2Y - 10, 12, 20);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.strokeRect(slitX - 5, s1Y - 10, 10, 20); this.ctx.strokeRect(slitX - 5, s2Y - 10, 10, 20);
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('S₁', slitX - 18, s1Y + 5); this.ctx.fillText('S₂', slitX - 18, s2Y + 5);
        const screenX = slitX + scaledDist;
        this.ctx.fillStyle = '#e0e0e0'; this.ctx.fillRect(screenX - 5, y - height / 3, 10, height * 2 / 3);
        this.ctx.strokeStyle = '#888888'; this.ctx.lineWidth = 2; this.ctx.strokeRect(screenX - 5, y - height / 3, 10, height * 2 / 3);
        if (options.showFringes) {
            const pH = height * 2 / 3;
            for (let py = 0; py < pH; py++) {
                const yPos = y - height / 3 + py;
                const angle = Math.atan((yPos - y) / scaledDist);
                const pathDiff = slitSeparation * Math.sin(angle);
                const phase = (2 * Math.PI * pathDiff) / wavelength;
                const intensity = Math.pow(Math.cos(phase / 2), 2);
                const c = Math.floor(255 - intensity * 200);
                this.ctx.fillStyle = `rgb(${c},${c},${c})`; this.ctx.fillRect(screenX + 10, yPos, 30, 2);
            }
        }
        if (options.showIntensity) {
            const graphX = screenX + 50, gW = 80, gH = height * 2 / 3;
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.beginPath();
            for (let py = 0; py < gH; py++) {
                const yPos = y - height / 3 + py;
                const angle = Math.atan((yPos - y) / scaledDist);
                const pathDiff = slitSeparation * Math.sin(angle);
                const phase = (2 * Math.PI * pathDiff) / wavelength;
                const intensity = Math.pow(Math.cos(phase / 2), 2);
                if (py === 0) this.ctx.moveTo(graphX + intensity * gW, yPos);
                else this.ctx.lineTo(graphX + intensity * gW, yPos);
            }
            this.ctx.stroke();
            this.ctx.strokeStyle = '#aaaaaa'; this.ctx.lineWidth = 1;
            this.ctx.beginPath(); this.ctx.moveTo(graphX, y - height / 3); this.ctx.lineTo(graphX, y + height / 3); this.ctx.stroke();
        }
        this.ctx.setLineDash([4, 4]); this.ctx.strokeStyle = '#888888'; this.ctx.lineWidth = 1.5;
        this.ctx.beginPath(); this.ctx.moveTo(slitX, s1Y); this.ctx.lineTo(screenX, y); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(slitX, s2Y); this.ctx.lineTo(screenX, y); this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Central Maximum', screenX, y - height / 3 - 18);
        this.ctx.fillText('Screen', screenX, y - height / 3 + 18);
    }

    renderPolarization(diagram, x, y, width, height, options) {
        const sW = width / 3;
        const unpX = x - sW, polX = x, polisedX = x + sW;
        // Unpolarized
        if (options.showUnpolarized) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('Unpolarized Light', unpX, y - height / 3);
            for (let i = 0; i < 12; i++) {
                const angle = (i / 12) * Math.PI;
                this.ctx.strokeStyle = i % 2 === 0 ? '#000000' : '#666666'; this.ctx.lineWidth = 1.5;
                this.ctx.beginPath(); this.ctx.moveTo(unpX - 35 * Math.cos(angle), y - 35 * Math.sin(angle));
                this.ctx.lineTo(unpX + 35 * Math.cos(angle), y + 35 * Math.sin(angle)); this.ctx.stroke();
            }
            this.drawArrowVector(unpX - 80, y, unpX - 55, y, '#000000', 2);
        }
        // Polarizer
        if (options.showPolarizer) {
            this.ctx.fillStyle = '#999999'; this.ctx.fillRect(polX - 5, y - height / 4, 10, height / 2);
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.strokeRect(polX - 5, y - height / 4, 10, height / 2);
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 1;
            for (let i = 0; i < 10; i++) {
                const ly = y - height / 4 + (i / 9) * (height / 2);
                this.ctx.beginPath(); this.ctx.moveTo(polX - 15, ly); this.ctx.lineTo(polX + 15, ly); this.ctx.stroke();
            }
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 12px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('Polarizer', polX, y - height / 4 - 18);
        }
        // Polarized
        if (options.showPolarized) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('Polarized Light', polisedX, y - height / 3);
            for (let i = 0; i < 5; i++) {
                const wx = polisedX - 55 + i * 25;
                this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2.5;
                this.ctx.beginPath(); this.ctx.moveTo(wx, y - 45); this.ctx.lineTo(wx, y + 45); this.ctx.stroke();
                this.drawArrowVector(wx, y - 25, wx, y - 38, '#000000', 1.5);
            }
            this.drawArrowVector(polisedX + 55, y, polisedX + 75, y, '#000000', 2);
        }
        this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Only one orientation passes  |  Intensity reduced ~50%', x, y + height / 3 + 20);
    }

    // ========== MODERN PHYSICS ==========

    renderPhotoelectricEffect(diagram, x, y, width, height, options) {
        // Metal surface
        this.ctx.fillStyle = '#cccccc';
        this.ctx.fillRect(x - width / 2 + 50, y + 50, width - 100, 80);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - width / 2 + 50, y + 50, width - 100, 80);
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Metal Surface', x, y + 100);

        // Photons (incoming)
        if (options.showPhotons) {
            for (let i = 0; i < 4; i++) {
                const px = x - 120 + i * 40;
                this.ctx.setLineDash(i % 2 === 0 ? [] : [5, 3]);
                this.drawArrowVector(px, y - 60, px, y + 45, '#000000', 2.5);
                this.ctx.setLineDash([]);
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 11px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText('hf', px, y - 70);
            }
        }

        // Electrons (ejected)
        if (options.showElectrons) {
            const ePositions = [-80, -20, 40, 100];
            ePositions.forEach((ex, i) => {
                const ey = y + 130 + i * 5;
                this.ctx.fillStyle = '#555555'; this.ctx.beginPath(); this.ctx.arc(x + ex, ey, 6, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 1; this.ctx.stroke();
                this.drawArrowVector(x + ex, ey, x + ex + (i % 2 === 0 ? -20 : 20), ey - 40, '#000000', 2);
                this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center';
                this.ctx.fillText('e⁻', x + ex, ey + 15);
            });
        }

        // Energy levels
        if (options.showEnergyLevels) {
            this.ctx.strokeStyle = '#555555'; this.ctx.lineWidth = 1.5; this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath(); this.ctx.moveTo(x - width / 2 + 30, y + 50); this.ctx.lineTo(x + width / 2 - 30, y + 50); this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#000000'; this.ctx.font = '12px Arial'; this.ctx.textAlign = 'left';
            this.ctx.fillText(`Work function φ = ${diagram.workFunction} eV`, x + width / 2 - 230, y + 45);
            this.ctx.fillText(`Photon energy hf = ${diagram.photonEnergy} eV`, x + width / 2 - 230, y + 18);
            this.ctx.fillText(`KE(max) = ${(diagram.photonEnergy - diagram.workFunction).toFixed(1)} eV`, x + width / 2 - 230, y - 10);
        }

        if (options.showEquation) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 15px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('KE(max) = hf − φ', x, y - height / 2 + 40);
        }
    }

    renderEmissionSpectra(diagram, x, y, width, height, options) {
        // Energy level diagram
        if (options.showEnergyLevels) {
            const levels = [
                { n: 1, E: -13.6, y: y + 120 },
                { n: 2, E: -3.4, y: y + 60 },
                { n: 3, E: -1.51, y: y + 20 },
                { n: 4, E: -0.85, y: y - 10 },
                { n: 5, E: -0.54, y: y - 30 }
            ];
            const lX = x - width / 3;
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
            levels.forEach(lev => {
                this.ctx.beginPath(); this.ctx.moveTo(lX - 40, lev.y); this.ctx.lineTo(lX + 40, lev.y); this.ctx.stroke();
                this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 11px Arial'; this.ctx.textAlign = 'right';
                this.ctx.fillText(`n=${lev.n} (${lev.E}eV)`, lX - 44, lev.y + 5);
            });
            if (options.showTransitions && diagram.transitions) {
                const dashStyles = [[], [5, 3], [3, 3]];
                diagram.transitions.forEach((tr, i) => {
                    const fromLevel = levels.find(l => l.n === tr.n1);
                    const toLevel = levels.find(l => l.n === tr.n2);
                    if (fromLevel && toLevel) {
                        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2; this.ctx.setLineDash(dashStyles[i % 3]);
                        this.drawArrowVector(lX + 10 + i * 8, fromLevel.y, lX + 10 + i * 8, toLevel.y, '#000000', 2);
                        this.ctx.setLineDash([]);
                        this.ctx.fillStyle = '#000000'; this.ctx.font = '10px Arial'; this.ctx.textAlign = 'left';
                        this.ctx.fillText(`${tr.wavelength}nm`, lX + 55, (fromLevel.y + toLevel.y) / 2);
                    }
                });
            }
        }
        // Spectrum bar
        if (options.showSpectrum) {
            const specY = y + 160, barH = 40;
            this.ctx.fillStyle = '#000000'; this.ctx.fillRect(x - 80, specY, 400, barH);
            if (diagram.transitions) {
                diagram.transitions.forEach((tr, i) => {
                    const normWL = (tr.wavelength - 380) / (750 - 380);
                    const sx = x - 80 + normWL * 400;
                    const lineW = 4 - i;
                    this.ctx.fillStyle = '#ffffff'; this.ctx.fillRect(sx - lineW / 2, specY, lineW, barH);
                    this.ctx.fillStyle = '#000000'; this.ctx.font = '10px Arial'; this.ctx.textAlign = 'center';
                    this.ctx.fillText(`${tr.wavelength}nm`, sx, specY + barH + 15);
                });
            }
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x - 80, specY, 400, barH);
        }
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText(`${diagram.element ? diagram.element.charAt(0).toUpperCase() + diagram.element.slice(1) : 'Hydrogen'} Emission Spectrum`, x, y - height / 2 + 30);
    }

    renderBlackbodyRadiation(diagram, x, y, width, height, options) {
        const gW = width - 100, gH = height - 100;
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y + gH / 2); this.ctx.lineTo(x + gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y - gH / 2); this.ctx.lineTo(x - gW / 2, y + gH / 2); this.ctx.stroke();
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'italic 13px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Wavelength (nm)', x, y + gH / 2 + 35);
        this.ctx.save(); this.ctx.translate(x - gW / 2 - 40, y); this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Intensity', 0, 0); this.ctx.restore();
        if (options.showGrid) this.drawGridLines(x - gW / 2, y - gH / 2, gW, gH, 8, 6);
        const temps = diagram.temperatures;
        const dashStyles = [[], [8, 4], [4, 4], [2, 4]];
        temps.forEach((T, i) => {
            const peakWL = 2898000 / T;
            const maxI = Math.pow(T / 3000, 4);
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2 + (temps.length - i) * 0.5;
            this.ctx.setLineDash(dashStyles[i % dashStyles.length]);
            this.ctx.beginPath();
            for (let j = 1; j <= 100; j++) {
                const wl = 200 + j * 10;
                const intensity = (1 / Math.pow(wl, 5)) * (1 / (Math.exp(14400000 / (wl * T)) - 1));
                const normI = intensity / (1 / Math.pow(peakWL, 5) * (1 / (Math.exp(14400000 / (peakWL * T)) - 1)));
                const px = x - gW / 2 + ((wl - 200) / 800) * gW;
                const py = y + gH / 2 - (normI * maxI / (temps.length * 0.4)) * gH;
                const clampY = Math.max(y - gH / 2, Math.min(y + gH / 2, py));
                if (j === 1) this.ctx.moveTo(px, clampY); else this.ctx.lineTo(px, clampY);
            }
            this.ctx.stroke(); this.ctx.setLineDash([]);
            if (options.showPeaks) {
                const peakPx = x - gW / 2 + ((peakWL - 200) / 800) * gW;
                this.ctx.strokeStyle = '#999999'; this.ctx.lineWidth = 1; this.ctx.setLineDash([3, 3]);
                this.ctx.beginPath(); this.ctx.moveTo(peakPx, y - gH / 2); this.ctx.lineTo(peakPx, y + gH / 2); this.ctx.stroke();
                this.ctx.setLineDash([]);
            }
            this.ctx.fillStyle = '#000000'; this.ctx.font = '11px Arial'; this.ctx.textAlign = 'left';
            this.ctx.fillText(`${T}K`, x + gW / 2 + 5, y + gH / 2 - i * 20 - 10);
        });
        if (options.showWiensLaw) {
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 13px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText("Wien's Law: λ_peak × T = 2.898×10⁶ nm·K", x, y - gH / 2 - 20);
        }
    }

    renderQuantumTunneling(diagram, x, y, width, height, options) {
        const gW = width * 0.9, gH = height * 0.7;
        const barrierW = diagram.barrierWidth * 2, barrierH = diagram.barrierHeight * 15;
        const barrierX = x, bTop = y - barrierH / 2;
        // Potential well regions
        this.ctx.fillStyle = 'rgba(0,0,0,0.06)';
        this.ctx.fillRect(x - gW / 2, bTop, (gW / 2 - barrierW / 2), barrierH);
        this.ctx.fillRect(x + barrierW / 2, bTop, (gW / 2 - barrierW / 2), barrierH);
        // Barrier
        this.ctx.fillStyle = '#cccccc';
        this.ctx.fillRect(barrierX - barrierW / 2, bTop, barrierW, barrierH);
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2.5;
        this.ctx.strokeRect(barrierX - barrierW / 2, bTop, barrierW, barrierH);
        // Potential energy lines
        this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 3;
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, y + gH / 2 - 20); this.ctx.lineTo(x - barrierW / 2, y + gH / 2 - 20); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(x + barrierW / 2, y + gH / 2 - 20); this.ctx.lineTo(x + gW / 2, y + gH / 2 - 20); this.ctx.stroke();
        // Particle energy line
        const eY = y + gH / 2 - 20 - diagram.particleEnergy * 10;
        this.ctx.setLineDash([8, 4]); this.ctx.strokeStyle = '#555555'; this.ctx.lineWidth = 2;
        this.ctx.beginPath(); this.ctx.moveTo(x - gW / 2, eY); this.ctx.lineTo(x + gW / 2, eY); this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#000000'; this.ctx.font = '12px Arial'; this.ctx.textAlign = 'right';
        this.ctx.fillText(`E = ${diagram.particleEnergy}`, x - gW / 2 - 5, eY + 5);
        this.ctx.fillText(`V = ${diagram.barrierHeight}`, barrierX + barrierW + 5, bTop + 15);
        // Wavefunction
        if (options.showWavefunction) {
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2.5;
            const wY = y;
            // Incident region
            this.ctx.beginPath();
            for (let i = 0; i <= 60; i++) {
                const wx = x - gW / 2 + (i / 60) * (gW / 2 - barrierW / 2);
                const wy = wY + 30 * Math.sin(i * 0.3);
                if (i === 0) this.ctx.moveTo(wx, wy); else this.ctx.lineTo(wx, wy);
            }
            this.ctx.stroke();
            // Evanescent in barrier
            this.ctx.strokeStyle = '#666666'; this.ctx.lineWidth = 2; this.ctx.setLineDash([3, 2]);
            this.ctx.beginPath();
            for (let i = 0; i <= 30; i++) {
                const wx = x - barrierW / 2 + (i / 30) * barrierW;
                const wy = wY + 30 * Math.exp(-i * 0.1) * Math.sin(i * 0.3);
                if (i === 0) this.ctx.moveTo(wx, wy); else this.ctx.lineTo(wx, wy);
            }
            this.ctx.stroke(); this.ctx.setLineDash([]);
            // Transmitted (smaller amplitude)
            this.ctx.strokeStyle = '#444444'; this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            for (let i = 0; i <= 50; i++) {
                const wx = x + barrierW / 2 + (i / 50) * (gW / 2 - barrierW / 2);
                const wy = wY + 12 * Math.sin(i * 0.3);
                if (i === 0) this.ctx.moveTo(wx, wy); else this.ctx.lineTo(wx, wy);
            }
            this.ctx.stroke();
        }
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText('Quantum Tunneling Through Potential Barrier', x, y - height / 2 + 30);
        this.ctx.font = '12px Arial';
        this.ctx.fillText('Particle tunnels even when E < V', x, y + height / 2 - 20);
    }

    renderElectronProbability(diagram, x, y, size, options) {
        if (options.showProbabilityCloud) {
            const maxR = size;
            const orbital = diagram.orbital;
            for (let r = 1; r <= maxR; r += 2) {
                let density;
                if (orbital === '1s') density = Math.exp(-2 * r / (maxR * 0.4));
                else if (orbital === '2s') density = Math.pow(1 - r / (maxR * 0.5), 2) * Math.exp(-r / (maxR * 0.5));
                else density = Math.pow(r / maxR, 2) * Math.exp(-r / (maxR * 0.3));
                const gray = Math.floor(255 - density * 220);
                this.ctx.strokeStyle = `rgb(${gray},${gray},${gray})`; this.ctx.lineWidth = 2;
                this.ctx.beginPath(); this.ctx.arc(x, y, r, 0, Math.PI * 2); this.ctx.stroke();
            }
        }
        if (options.showRadialDistribution) {
            const gW = size * 1.8, gH = size * 0.6;
            const gX = x - gW / 2, gY = y + size + 20;
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2;
            this.ctx.beginPath(); this.ctx.moveTo(gX, gY + gH); this.ctx.lineTo(gX + gW, gY + gH); this.ctx.stroke();
            this.ctx.beginPath(); this.ctx.moveTo(gX, gY); this.ctx.lineTo(gX, gY + gH); this.ctx.stroke();
            this.ctx.fillStyle = '#000000'; this.ctx.font = 'italic 11px Arial'; this.ctx.textAlign = 'center';
            this.ctx.fillText('r (distance from nucleus)', gX + gW / 2, gY + gH + 18);
            this.ctx.save(); this.ctx.translate(gX - 22, gY + gH / 2); this.ctx.rotate(-Math.PI / 2);
            this.ctx.fillText('P(r)', 0, 0); this.ctx.restore();
            this.ctx.strokeStyle = '#000000'; this.ctx.lineWidth = 2.5; this.ctx.beginPath();
            for (let i = 1; i <= 80; i++) {
                const r = (i / 80) * gW;
                const rn = r / gW;
                const P = (rn * rn) * Math.exp(-2 * rn / 0.25);
                const px2 = gX + r, py2 = gY + gH - P * gH * 8;
                const clampPy = Math.max(gY, Math.min(gY + gH, py2));
                if (i === 1) this.ctx.moveTo(px2, clampPy); else this.ctx.lineTo(px2, clampPy);
            }
            this.ctx.stroke();
        }
        this.ctx.fillStyle = '#000000'; this.ctx.font = 'bold 14px Arial'; this.ctx.textAlign = 'center';
        this.ctx.fillText(`Orbital: ${diagram.orbital}`, x, y - size - 18);
    }

    }


export {PhysicsDiagramsRegistry,PhysicsDiagramRenderer};
