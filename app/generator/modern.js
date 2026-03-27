
// ==================== MODERN PHYSICS GENERATORS WITH DIAGRAMS ====================

generateRelatedPhotoelectricEffectDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Photoelectric Effect Analysis',
        problem: 'Photons of energy 3.0 eV strike metal surface with work function 2.0 eV. Draw the process and find maximum kinetic energy of ejected electrons.',
        parameters: {
            workFunction: 2.0,
            photonEnergy: 3.0
        },
        type: 'photoelectric_effect',
        subparts: [
            'Einstein\'s photoelectric equation: KE_max = hf - φ',
            'Photon energy: E = 3.0 eV',
            'Work function: φ = 2.0 eV',
            'KE_max = 3.0 - 2.0 = 1.0 eV',
            'Convert to joules: 1.0 eV × 1.6×10⁻¹⁹ J/eV = 1.6×10⁻¹⁹ J',
            'If hf < φ, no electrons ejected'
        ],
        helper: 'Photoelectric: KE_max = hf - φ; Threshold: f₀ = φ/h',
        realWorldContext: 'Solar cells, light sensors, quantum nature of light',
        diagramInfo: {
            type: 'photoelectric_effect',
            registryKey: 'photoelectricEffect',
            renderOptions: {
                workFunction: 2.0,
                photonEnergy: 3.0,
                showPhotons: true,
                showElectrons: true,
                showEnergyLevels: true,
                showEquation: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_photoelectric_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}



generateRelatedAtomicSpectraDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Hydrogen Emission Spectrum',
        problem: 'Hydrogen atom electron transitions from n=3 to n=2, n=4 to n=2, n=5 to n=2. Draw energy level diagram and emission spectrum.',
        parameters: {
            element: 'hydrogen',
            transitions: [
                { n1: 3, n2: 2, wavelength: 656 },
                { n1: 4, n2: 2, wavelength: 486 },
                { n1: 5, n2: 2, wavelength: 434 }
            ]
        },
        type: 'atomic_spectra',
        subparts: [
            'Energy levels: E_n = -13.6/n² eV',
            'Transition n=3→2: ΔE = E₃ - E₂ = -13.6(1/9 - 1/4) = 1.89 eV',
            'Photon wavelength: λ = hc/ΔE = 656 nm (red)',
            'n=4→2: ΔE = 2.55 eV, λ = 486 nm (cyan)',
            'n=5→2: ΔE = 2.86 eV, λ = 434 nm (violet)',
            'These form the Balmer series (visible light)'
        ],
        helper: 'Bohr model: E_n = -13.6/n² eV; ΔE = hf = hc/λ',
        realWorldContext: 'Spectroscopy, identifying elements, astronomy',
        diagramInfo: {
            type: 'emission_spectra',
            registryKey: 'lineEmissionSpectra',
            renderOptions: {
                element: 'hydrogen',
                transitions: [
                    { n1: 3, n2: 2, wavelength: 656 },
                    { n1: 4, n2: 2, wavelength: 486 },
                    { n1: 5, n2: 2, wavelength: 434 }
                ],
                showEnergyLevels: true,
                showSpectrum: true,
                showTransitions: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_emission_spectra_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedBohrModelDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Bohr Model Energy Levels',
        problem: 'Draw Bohr model energy level diagram for hydrogen. Calculate energy and radius for n=1, 2, 3.',
        parameters: {
            atom: 'hydrogen',
            levels: [1, 2, 3]
        },
        type: 'bohr_model',
        subparts: [
            'Bohr energy levels: Eₙ = -13.6/n² eV',
            'n=1: E₁ = -13.6/1² = -13.6 eV (ground state)',
            'n=2: E₂ = -13.6/4 = -3.4 eV',
            'n=3: E₃ = -13.6/9 = -1.51 eV',
            'Bohr radius: rₙ = n²r₀, r₀ = 0.529 Å',
            'n=1: r₁ = 0.529 Å',
            'n=2: r₂ = 4(0.529) = 2.12 Å',
            'n=3: r₃ = 9(0.529) = 4.76 Å',
            'Higher n → higher energy, larger radius'
        ],
        helper: 'Bohr: Eₙ = -13.6/n² eV, rₙ = n²(0.529 Å); n = 1, 2, 3...',
        realWorldContext: 'Atomic structure, spectroscopy',
        diagramInfo: {
            type: 'bohr_energy_levels',
            registryKey: 'bohrEnergyLevelDiagram',
            renderOptions: {
                atom: 'hydrogen',
                showLevels: [1, 2, 3, 4, 5],
                showEnergies: true,
                showRadii: true,
                showTransitions: false
            },
            canvasSize: { width: 800, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_bohr_energy_levels_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Bohr Model Transitions',
        problem: 'Electron in hydrogen transitions from n=4 to n=2. Draw transition and calculate photon wavelength.',
        parameters: {
            n_initial: 4,
            n_final: 2
        },
        type: 'bohr_model',
        subparts: [
            'Initial energy: E₄ = -13.6/16 = -0.85 eV',
            'Final energy: E₂ = -13.6/4 = -3.4 eV',
            'Energy difference: ΔE = E₄ - E₂ = -0.85 - (-3.4) = 2.55 eV',
            'Convert to joules: 2.55 × 1.6×10⁻¹⁹ = 4.08×10⁻¹⁹ J',
            'Photon energy: E = hf = hc/λ',
            'Wavelength: λ = hc/E = (6.63×10⁻³⁴)(3×10⁸)/(4.08×10⁻¹⁹)',
            'λ = 4.87×10⁻⁷ m = 487 nm (blue-green light)',
            'This is part of Balmer series (visible light)'
        ],
        helper: 'ΔE = hf = hc/λ; Balmer series: transitions to n=2',
        realWorldContext: 'Emission spectra, hydrogen lamp',
        diagramInfo: {
            type: 'bohr_transitions',
            registryKey: 'bohrTransitionDiagram',
            renderOptions: {
                n_initial: 4,
                n_final: 2,
                showEnergyLevels: true,
                showPhoton: true,
                showWavelength: true,
                showCalculation: true
            },
            canvasSize: { width: 800, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_bohr_transition_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedComptonScatteringDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Compton Scattering Event',
        problem: 'X-ray photon (λ₀ = 0.1 nm) scatters off electron at 90°. Draw scattering diagram and find scattered wavelength.',
        parameters: {
            initialWavelength: 0.1e-9,
            scatteringAngle: 90
        },
        type: 'compton_scattering',
        subparts: [
            'Compton equation: Δλ = λ - λ₀ = (h/mₑc)(1 - cos θ)',
            'Compton wavelength: λc = h/(mₑc) = 2.43×10⁻¹² m',
            'Angle: θ = 90°, cos(90°) = 0',
            'Δλ = 2.43×10⁻¹² (1 - 0) = 2.43×10⁻¹² m',
            'Scattered wavelength: λ = λ₀ + Δλ',
            'λ = 0.1×10⁻⁹ + 2.43×10⁻¹² = 1.0243×10⁻¹⁰ m',
            'λ ≈ 0.102 nm (slightly longer wavelength)',
            'Photon loses energy to recoil electron'
        ],
        helper: 'Compton: Δλ = (h/mₑc)(1 - cos θ); Demonstrates photon momentum',
        realWorldContext: 'X-ray scattering, particle nature of light',
        diagramInfo: {
            type: 'compton_scattering',
            registryKey: 'comptonScatteringDiagram',
            renderOptions: {
                initialWavelength: 0.1e-9,
                scatteringAngle: 90,
                showPhoton: true,
                showElectron: true,
                showMomentum: true,
                showWavelengthChange: true,
                showEquation: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_compton_scattering_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Compton Scattering Energy Transfer',
        problem: 'Photon with energy 100 keV scatters at 180° (backscatter). Calculate energy of scattered photon and recoil electron.',
        parameters: {
            initialEnergy: 100e3,
            scatteringAngle: 180
        },
        type: 'compton_scattering',
        subparts: [
            'Electron rest energy: E₀ = mₑc² = 511 keV',
            'For backscatter (θ = 180°): cos(180°) = -1',
            'Energy of scattered photon: E\' = E/(1 + (E/E₀)(1 - cos θ))',
            'E\' = 100/(1 + (100/511)(1 - (-1)))',
            'E\' = 100/(1 + (100/511)(2))',
            'E\' = 100/(1 + 0.391) = 100/1.391 = 71.9 keV',
            'Energy transferred to electron: ΔE = 100 - 71.9 = 28.1 keV',
            'Maximum energy transfer occurs at 180° scattering'
        ],
        helper: 'Compton: E\' = E/[1 + (E/mₑc²)(1 - cos θ)]; mₑc² = 511 keV',
        realWorldContext: 'X-ray imaging, gamma ray astronomy',
        diagramInfo: {
            type: 'compton_energy',
            registryKey: 'comptonEnergyDiagram',
            renderOptions: {
                initialEnergy: 100,
                scatteringAngle: 180,
                showEnergyLevels: true,
                showBackscatter: true,
                showElectronRecoil: true,
                showConservation: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_compton_energy_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedQuantumMechanicsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Quantum Tunneling Through Barrier',
        problem: 'Particle with energy 7 eV encounters potential barrier of height 10 eV and width 5 nm. Draw potential well and explain tunneling.',
        parameters: {
            barrierHeight: 10,
            barrierWidth: 50,
            particleEnergy: 7
        },
        type: 'quantum_mechanics',
        subparts: [
            'Classically: particle cannot pass (E < V)',
            'Quantum mechanically: wavefunction penetrates barrier',
            'Probability of tunneling depends on barrier width and height',
            'Tunneling probability: T ∝ e^(-2αL), where α depends on (V-E)',
            'Wavefunction decays exponentially inside barrier',
            'Non-zero probability to find particle beyond barrier'
        ],
        helper: 'Quantum tunneling allows particles to pass through classically forbidden regions',
        realWorldContext: 'Radioactive decay, scanning tunneling microscope, nuclear fusion in stars',
        diagramInfo: {
            type: 'quantum_tunneling',
            registryKey: 'quantumTunneling',
            renderOptions: {
                barrierHeight: 10,
                barrierWidth: 50,
                particleEnergy: 7,
                showPotentialWell: true,
                showWavefunction: true,
                showProbability: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_quantum_tunneling_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedWaveParticleDualityDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'de Broglie Wavelength',
        problem: 'Electron accelerated through 100 V potential. Calculate de Broglie wavelength. (m_e = 9.11×10⁻³¹ kg, e = 1.6×10⁻¹⁹ C)',
        parameters: {
            particle: 'electron',
            voltage: 100
        },
        type: 'wave_particle_duality',
        subparts: [
            'Kinetic energy: KE = eV = 1.6×10⁻¹⁹ × 100 = 1.6×10⁻¹⁷ J',
            'Velocity: KE = ½mv² → v = √(2KE/m) = √(2×1.6×10⁻¹⁷/9.11×10⁻³¹)',
            'v = 5.93×10⁶ m/s',
            'Momentum: p = mv = 9.11×10⁻³¹ × 5.93×10⁶ = 5.4×10⁻²⁴ kg·m/s',
            'de Broglie wavelength: λ = h/p = 6.63×10⁻³⁴/5.4×10⁻²⁴',
            'λ = 1.23×10⁻¹⁰ m = 0.123 nm (similar to X-ray wavelengths)'
        ],
        helper: 'de Broglie: λ = h/p = h/(mv); All matter has wave properties',
        realWorldContext: 'Electron microscopes, electron diffraction',
        diagramInfo: {
            type: 'de_broglie',
            registryKey: 'deBroglieWavelength',
            renderOptions: {
                particle: 'electron',
                velocity: 1e6,
                showWaveform: true,
                showEquation: true,
                showComparison: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_de_broglie_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

const EndSection6 = "close";