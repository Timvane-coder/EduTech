

// ==================== NUCLEAR PHYSICS GENERATORS WITH DIAGRAMS ====================

generateRelatedRadioactiveDecayPhysicsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Alpha Decay Process',
        problem: 'Radium-226 undergoes alpha decay. Draw the nuclear process and write the decay equation.',
        parameters: {
            decayType: 'alpha',
            parentNucleus: 'Ra-226',
            daughterNucleus: 'Rn-222'
        },
        type: 'radioactive_decay_physics',
        subparts: [
            'Alpha particle: ⁴₂He (2 protons, 2 neutrons)',
            'Radium-226: ²²⁶₈₈Ra',
            'Alpha decay: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He',
            'Mass number decreases by 4',
            'Atomic number decreases by 2',
            'Produces radon-222 and helium nucleus'
        ],
        helper: 'Alpha decay: A → (A-4) + ⁴He; Z → (Z-2)',
        realWorldContext: 'Radioactive dating, nuclear decay chains',
        diagramInfo: {
            type: 'nuclear_decay_physics',
            registryKey: 'alphaDecayDiagram',
            renderOptions: {
                decayType: 'alpha',
                parentNucleus: 'Ra-226',
                daughterNucleus: 'Rn-222',
                showParent: true,
                showProducts: true,
                showEquation: true,
                showEnergy: true
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
                const filename = `physics_alpha_decay_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Beta Decay Process',
        problem: 'Carbon-14 undergoes beta-minus decay. Draw the process and explain neutrino emission.',
        parameters: {
            decayType: 'beta',
            parentNucleus: 'C-14',
            daughterNucleus: 'N-14'
        },
        type: 'radioactive_decay_physics',
        subparts: [
            'Beta-minus decay: neutron → proton + electron + antineutrino',
            '¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄ₑ',
            'Mass number stays same (14)',
            'Atomic number increases by 1 (6 → 7)',
            'Antineutrino carries away energy and momentum',
            'Used in radiocarbon dating'
        ],
        helper: 'Beta-minus: n → p + e⁻ + ν̄; Z increases by 1, A unchanged',
        realWorldContext: 'Carbon dating, medical tracers',
        diagramInfo: {
            type: 'nuclear_decay_physics',
            registryKey: 'betaDecayDiagram',
            renderOptions: {
                decayType: 'beta',
                parentNucleus: 'C-14',
                daughterNucleus: 'N-14',
                showParent: true,
                showProducts: true,
                showNeutrino: true,
                showEquation: true
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
                const filename = `physics_beta_decay_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Radioactive Half-Life',
        problem: 'Isotope has half-life of 5730 years (C-14). Starting with 100 g, draw decay curve and find amount after 11,460 years.',
        parameters: {
            isotope: 'C-14',
            halfLife: 5730,
            initialAmount: 100,
            timeElapsed: 11460
        },
        type: 'radioactive_decay_physics',
        subparts: [
            'Number of half-lives: n = t/t₁/₂ = 11,460/5,730 = 2',
            'After 1 half-life: 100/2 = 50 g',
            'After 2 half-lives: 50/2 = 25 g',
            'Formula: N(t) = N₀(½)^n = 100(½)² = 25 g',
            'Exponential decay: N(t) = N₀e^(-λt)',
            'Decay constant: λ = ln(2)/t₁/₂'
        ],
        helper: 'Half-life: N(t) = N₀(½)^(t/t₁/₂); λ = 0.693/t₁/₂',
        realWorldContext: 'Dating artifacts, medical isotopes',
        diagramInfo: {
            type: 'half_life_graph',
            registryKey: 'halfLifeGraph',
            renderOptions: {
                isotope: 'C-14',
                halfLife: 5730,
                initialAmount: 100,
                showHalfLives: true,
                showExponential: true,
                showPercentages: true
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
                const filename = `physics_half_life_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedNuclearReactionsPhysicsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Nuclear Structure',
        problem: 'Draw the nuclear structure of Carbon-12 showing protons and neutrons. Calculate the nuclear radius.',
        parameters: {
            protons: 6,
            neutrons: 6,
            element: 'C-12'
        },
        type: 'nuclear_reactions_physics',
        subparts: [
            'Carbon-12: 6 protons, 6 neutrons',
            'Total nucleons: A = 12',
            'Nuclear radius: r = r₀A^(1/3), where r₀ = 1.2 fm',
            'r = 1.2 × 12^(1/3) = 1.2 × 2.29 = 2.75 fm',
            'Nuclear density extremely high: ~10¹⁷ kg/m³',
            'Protons and neutrons held by strong nuclear force'
        ],
        helper: 'Nuclear radius: r = r₀A^(1/3), r₀ = 1.2 fm = 1.2×10⁻¹⁵ m',
        realWorldContext: 'Understanding atomic nuclei',
        diagramInfo: {
            type: 'nuclear_structure_physics',
            registryKey: 'nuclearStructurePhysics',
            renderOptions: {
                protons: 6,
                neutrons: 6,
                element: 'C-12',
                showProtons: true,
                showNeutrons: true,
                showLabels: true,
                showForces: false
            },
            canvasSize: { width: 700, height: 700 }
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
                const filename = `physics_nuclear_structure_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedBindingEnergyDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Nuclear Binding Energy Curve',
        problem: 'Draw the binding energy per nucleon vs mass number curve. Identify regions favorable for fission and fusion.',
        parameters: {
            showPeak: true,
            showFissionRegion: true,
            showFusionRegion: true
        },
        type: 'binding_energy',
        subparts: [
            'Binding energy per nucleon: BE/A',
            'Peak at Fe-56 (Iron): most stable nucleus',
            'BE/A ≈ 8.8 MeV for Fe-56',
            'Light nuclei (A < 56): Fusion releases energy',
            'Heavy nuclei (A > 56): Fission releases energy',
            'Stars fuse light elements up to iron'
        ],
        helper: 'BE = Δmc²; Higher BE/A = more stable',
        realWorldContext: 'Nuclear stability, stellar nucleosynthesis',
        diagramInfo: {
            type: 'binding_energy_curve',
            registryKey: 'bindingEnergyCurve',
            renderOptions: {
                showPeak: true,
                showFissionRegion: true,
                showFusionRegion: true,
                showElements: true
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
                const filename = `physics_binding_energy_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedFissionFusionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Nuclear Fission Process',
        problem: 'U-235 absorbs a neutron and undergoes fission into Ba-141, Kr-92, and 3 neutrons. Draw the process and explain chain reaction.',
        parameters: {
            nucleus: 'U-235',
            products: ['Ba-141', 'Kr-92'],
            neutrons: 3
        },
        type: 'fission_fusion',
        subparts: [
            'Fission equation: ²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n + energy',
            'Check: 235 + 1 = 141 + 92 + 3 = 236 ✓',
            'Each fission releases ~200 MeV',
            'Produces 3 neutrons → can trigger 3 more fissions',
            'Chain reaction: self-sustaining if critical mass reached',
            'Used in nuclear reactors and weapons'
        ],
        helper: 'Fission: Heavy nucleus splits; releases neutrons and energy',
        realWorldContext: 'Nuclear power plants, atomic bombs',
        diagramInfo: {
            type: 'fission_diagram',
            registryKey: 'nuclearFissionDiagram',
            renderOptions: {
                nucleus: 'U-235',
                products: ['Ba-141', 'Kr-92'],
                neutrons: 3,
                showNeutron: true,
                showProducts: true,
                showNeutrons: true,
                showEnergy: true
            },
            canvasSize: { width: 1000, height: 600 }
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
                const filename = `physics_fission_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Nuclear Fusion Process',
        problem: 'Deuterium and tritium fuse to form helium. Draw D-T fusion reaction and calculate energy release.',
        parameters: {
            reactants: ['H-2', 'H-3'],
            product: 'He-4'
        },
        type: 'fission_fusion',
        subparts: [
            'D-T fusion: ²H + ³H → ⁴He + n + energy',
            'Mass check: 2 + 3 = 4 + 1 = 5 ✓',
            'Energy released: ~17.6 MeV per reaction',
            'Requires very high temperature (millions of degrees)',
            'Occurs in stars and fusion reactors',
            'Clean energy source (no radioactive waste like fission)'
        ],
        helper: 'Fusion: Light nuclei combine; requires high temperature and pressure',
        realWorldContext: 'Stars, fusion reactors, hydrogen bombs',
        diagramInfo: {
            type: 'fusion_diagram',
            registryKey: 'nuclearFusionDiagram',
            renderOptions: {
                reactants: ['H-2', 'H-3'],
                product: 'He-4',
                showReactants: true,
                showProduct: true,
                showNeutron: true,
                showEnergy: true
            },
            canvasSize: { width: 1000, height: 600 }
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
                const filename = `physics_fusion_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Nuclear Chain Reaction',
        problem: 'Draw a chain reaction diagram showing 3 generations with branching factor of 2. Explain criticality.',
        parameters: {
            generations: 3,
            branchingFactor: 2
        },
        type: 'fission_fusion',
        subparts: [
            'Generation 0: 1 fission event',
            'Generation 1: 2 fission events (branching factor = 2)',
            'Generation 2: 4 fission events',
            'Generation 3: 8 fission events',
            'Subcritical: k < 1 (reaction dies out)',
            'Critical: k = 1 (sustained reaction)',
            'Supercritical: k > 1 (exponential growth)'
        ],
        helper: 'Chain reaction: k = neutrons produced/neutrons absorbed',
        realWorldContext: 'Nuclear reactor control, critical mass',
        diagramInfo: {
            type: 'chain_reaction_diagram',
            registryKey: 'chainReactionDiagram',
            renderOptions: {
                generations: 3,
                branchingFactor: 2,
                showGenerations: true,
                showNeutrons: true,
                showFissions: true
            },
            canvasSize: { width: 1000, height: 700 }
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
                const filename = `physics_chain_reaction_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedRadiationDetectionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Radiation Penetration Power',
        problem: 'Compare penetration of alpha, beta, and gamma radiation through materials. Draw penetration diagram.',
        parameters: {
            radiationTypes: ['alpha', 'beta', 'gamma']
        },
        type: 'radiation_detection',
        subparts: [
            'Alpha (α): Stopped by paper or skin',
            'Helium nuclei, +2 charge, heavy',
            'Beta (β): Stopped by aluminum foil',
            'Electrons, -1 charge, lighter than alpha',
            'Gamma (γ): Requires thick lead or concrete',
            'EM radiation, no charge, very penetrating',
            'Ionizing power: α > β > γ (inverse of penetration)'
        ],
        helper: 'Alpha: least penetrating, most ionizing; Gamma: most penetrating, least ionizing',
        realWorldContext: 'Radiation shielding, safety protocols',
        diagramInfo: {
            type: 'radiation_penetration',
            registryKey: 'radiationPenetration',
            renderOptions: {
                radiationTypes: ['alpha', 'beta', 'gamma'],
                showBarriers: true,
                showPaths: true,
                showLabels: true
            },
            canvasSize: { width: 1000, height: 600 }
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
                const filename = `physics_radiation_penetration_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedGravitationDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Gravitational Force Between Masses',
        problem: 'Two spheres with masses 100 kg and 200 kg are separated by 2 m. Draw the gravitational force diagram and calculate the force between them. (G = 6.67×10⁻¹¹ N·m²/kg²)',
        parameters: {
            mass1: 100,
            mass2: 200,
            distance: 2,
            G: 6.67e-11
        },
        type: 'gravitation',
        subparts: [
            'Newton\'s law of gravitation: F = Gm₁m₂/r²',
            'G = 6.67×10⁻¹¹ N·m²/kg² (universal gravitational constant)',
            'F = (6.67×10⁻¹¹)(100)(200)/(2²)',
            'F = (6.67×10⁻¹¹)(20,000)/4',
            'F = 1.334×10⁻⁶/4 = 3.335×10⁻⁷ N',
            'Very small force (gravity is weakest fundamental force)',
            'Forces are equal and opposite (Newton\'s 3rd law)'
        ],
        helper: 'Gravitation: F = Gm₁m₂/r²; G = 6.67×10⁻¹¹ N·m²/kg²',
        realWorldContext: 'Gravitational attraction between objects',
        diagramInfo: {
            type: 'gravitational_force',
            registryKey: 'gravitationalForceDiagram',
            renderOptions: {
                mass1: 100,
                mass2: 200,
                distance: 2,
                showForceVectors: true,
                showDistanceLabel: true,
                showMasses: true,
                showEquation: true
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
                const filename = `physics_gravitational_force_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Gravitational Field and Acceleration',
        problem: 'Calculate Earth\'s gravitational field strength at its surface. Draw field lines around Earth. (M_Earth = 5.97×10²⁴ kg, R_Earth = 6.37×10⁶ m)',
        parameters: {
            mass: 5.97e24,
            radius: 6.37e6,
            G: 6.67e-11
        },
        type: 'gravitation',
        subparts: [
            'Gravitational field strength: g = GM/r²',
            'At Earth\'s surface: r = R_Earth',
            'g = (6.67×10⁻¹¹)(5.97×10²⁴)/(6.37×10⁶)²',
            'g = (3.98×10¹⁴)/(4.06×10¹³)',
            'g = 9.81 m/s² (acceleration due to gravity)',
            'This is why all objects fall at 9.8 m/s² near Earth\'s surface',
            'Field strength = acceleration of free-falling object'
        ],
        helper: 'Gravitational field: g = GM/r²; At surface: g = GM/R²',
        realWorldContext: 'Weight, free fall, projectile motion',
        diagramInfo: {
            type: 'gravitational_field',
            registryKey: 'gravitationalFieldDiagram',
            renderOptions: {
                centralMass: 'Earth',
                showFieldLines: true,
                showTestMass: true,
                showAcceleration: true,
                showEquation: true,
                numFieldLines: 16
            },
            canvasSize: { width: 800, height: 800 }
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
                const filename = `physics_gravitational_field_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Orbital Velocity and Period',
        problem: 'Satellite orbits Earth at altitude 400 km. Draw orbit and calculate orbital velocity and period. (R_Earth = 6.37×10⁶ m)',
        parameters: {
            altitude: 400e3,
            earthRadius: 6.37e6,
            earthMass: 5.97e24,
            G: 6.67e-11
        },
        type: 'gravitation',
        subparts: [
            'Orbital radius: r = R_Earth + h = 6.37×10⁶ + 0.4×10⁶ = 6.77×10⁶ m',
            'For circular orbit: gravitational force = centripetal force',
            'GMm/r² = mv²/r → v = √(GM/r)',
            'v = √[(6.67×10⁻¹¹)(5.97×10²⁴)/(6.77×10⁶)]',
            'v = √(5.88×10⁷) = 7,670 m/s = 7.67 km/s',
            'Orbital period: T = 2πr/v = 2π(6.77×10⁶)/7,670',
            'T = 5,546 s = 92.4 minutes',
            'ISS orbits at similar altitude with ~90 min period'
        ],
        helper: 'Orbital velocity: v = √(GM/r); Period: T = 2πr/v = 2π√(r³/GM)',
        realWorldContext: 'Satellites, ISS, GPS satellites',
        diagramInfo: {
            type: 'orbital_motion',
            registryKey: 'orbitalMotionDiagram',
            renderOptions: {
                centralBody: 'Earth',
                orbitRadius: 200,
                showVelocity: true,
                showCentripetalForce: true,
                showGravitationalForce: true,
                showPeriod: true
            },
            canvasSize: { width: 900, height: 900 }
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
                const filename = `physics_orbital_motion_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Kepler\'s Third Law',
        problem: 'Mars orbits Sun at 1.52 AU. Earth\'s orbital period is 1 year. Draw comparative orbits and calculate Mars\' orbital period using Kepler\'s third law.',
        parameters: {
            earthDistance: 1.0,
            marsDistance: 1.52,
            earthPeriod: 1.0
        },
        type: 'gravitation',
        subparts: [
            'Kepler\'s third law: T² ∝ r³ for objects orbiting same body',
            'Ratio form: (T₂/T₁)² = (r₂/r₁)³',
            '(T_Mars/T_Earth)² = (1.52/1.0)³',
            '(T_Mars/1)² = (1.52)³ = 3.51',
            'T_Mars = √3.51 = 1.87 years',
            'Mars takes 1.87 Earth years to orbit Sun',
            'Law applies to all planets orbiting Sun'
        ],
        helper: 'Kepler\'s 3rd law: T² = (4π²/GM)r³; Ratio: (T₂/T₁)² = (r₂/r₁)³',
        realWorldContext: 'Planetary orbits, exoplanet detection',
        diagramInfo: {
            type: 'kepler_orbits',
            registryKey: 'keplerThirdLawDiagram',
            renderOptions: {
                centralBody: 'Sun',
                orbits: [
                    { name: 'Earth', radius: 100, period: 1.0, color: '#3498DB' },
                    { name: 'Mars', radius: 152, period: 1.87, color: '#E74C3C' }
                ],
                showPeriods: true,
                showDistances: true,
                showEquation: true
            },
            canvasSize: { width: 1000, height: 1000 }
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
                const filename = `physics_kepler_orbits_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Gravitational Potential Energy',
        problem: 'Calculate energy needed to lift 1000 kg satellite from Earth\'s surface to 400 km altitude. Draw energy diagram.',
        parameters: {
            mass: 1000,
            altitude: 400e3,
            earthRadius: 6.37e6,
            earthMass: 5.97e24,
            G: 6.67e-11
        },
        type: 'gravitation',
        subparts: [
            'Gravitational PE: U = -GMm/r (zero at infinity)',
            'At surface: U₁ = -(6.67×10⁻¹¹)(5.97×10²⁴)(1000)/(6.37×10⁶)',
            'U₁ = -6.25×10¹⁰ J',
            'At altitude: r₂ = 6.37×10⁶ + 0.4×10⁶ = 6.77×10⁶ m',
            'U₂ = -(6.67×10⁻¹¹)(5.97×10²⁴)(1000)/(6.77×10⁶)',
            'U₂ = -5.88×10¹⁰ J',
            'Energy needed: ΔE = U₂ - U₁ = -5.88×10¹⁰ - (-6.25×10¹⁰)',
            'ΔE = 3.7×10⁹ J = 3.7 GJ',
            'Note: Cannot use mgh for large altitude changes'
        ],
        helper: 'Gravitational PE: U = -GMm/r; Work = ΔU; Escape energy at U = 0',
        realWorldContext: 'Rocket launches, satellite deployment',
        diagramInfo: {
            type: 'gravitational_potential',
            registryKey: 'gravitationalPotentialDiagram',
            renderOptions: {
                centralBody: 'Earth',
                showPotentialCurve: true,
                showEnergyLevels: true,
                highlightPositions: [
                    { r: 6.37e6, label: 'Surface' },
                    { r: 6.77e6, label: '400 km altitude' }
                ],
                showWorkDone: true
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
                const filename = `physics_gravitational_potential_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Escape Velocity',
        problem: 'Calculate escape velocity from Earth\'s surface. Draw energy diagram showing kinetic and potential energy. (M_Earth = 5.97×10²⁴ kg, R_Earth = 6.37×10⁶ m)',
        parameters: {
            earthMass: 5.97e24,
            earthRadius: 6.37e6,
            G: 6.67e-11
        },
        type: 'gravitation',
        subparts: [
            'Escape velocity: minimum speed to reach infinity',
            'At escape: total energy = 0 (KE + PE = 0)',
            '½mv² - GMm/R = 0',
            'v_escape = √(2GM/R)',
            'v_e = √[2(6.67×10⁻¹¹)(5.97×10²⁴)/(6.37×10⁶)]',
            'v_e = √(1.25×10⁸) = 11,180 m/s = 11.2 km/s',
            'Independent of mass of escaping object',
            'Rockets must exceed this speed to leave Earth'
        ],
        helper: 'Escape velocity: v_e = √(2GM/R); Independent of object mass',
        realWorldContext: 'Space missions, rocket design',
        diagramInfo: {
            type: 'escape_velocity',
            registryKey: 'escapeVelocityDiagram',
            renderOptions: {
                centralBody: 'Earth',
                showEnergyDiagram: true,
                showTrajectories: true,
                showVelocityVectors: true,
                showEscapeCondition: true,
                showEquation: true
            },
            canvasSize: { width: 1000, height: 800 }
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
                const filename = `physics_escape_velocity_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Geostationary Orbit',
        problem: 'Calculate the altitude of a geostationary satellite that orbits Earth once per 24 hours. Draw orbit diagram showing Earth\'s rotation.',
        parameters: {
            period: 86400,
            earthMass: 5.97e24,
            earthRadius: 6.37e6,
            G: 6.67e-11
        },
        type: 'gravitation',
        subparts: [
            'Geostationary: T = 24 hours = 86,400 s',
            'Kepler\'s 3rd law: T² = (4π²/GM)r³',
            'r³ = GMT²/(4π²)',
            'r³ = (6.67×10⁻¹¹)(5.97×10²⁴)(86,400)²/(4π²)',
            'r³ = 7.54×10²² m³',
            'r = 4.22×10⁷ m = 42,200 km',
            'Altitude: h = r - R_Earth = 42,200 - 6,370 = 35,800 km',
            'All geostationary satellites at this altitude above equator'
        ],
        helper: 'Geostationary: T = 24 hrs, altitude ≈ 35,800 km above equator',
        realWorldContext: 'Communication satellites, weather satellites',
        diagramInfo: {
            type: 'geostationary_orbit',
            registryKey: 'geostationaryOrbitDiagram',
            renderOptions: {
                showEarth: true,
                showRotation: true,
                showOrbit: true,
                showSatellite: true,
                showAltitude: true,
                showEquator: true,
                show24HourPeriod: true
            },
            canvasSize: { width: 900, height: 900 }
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
                const filename = `physics_geostationary_orbit_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Weightlessness in Orbit',
        problem: 'Astronaut in ISS at 400 km altitude feels weightless. Draw free body diagram and explain why. Calculate gravitational force on 70 kg astronaut at this altitude.',
        parameters: {
            mass: 70,
            altitude: 400e3,
            earthRadius: 6.37e6,
            earthMass: 5.97e24,
            G: 6.67e-11
        },
        type: 'gravitation',
        subparts: [
            'Orbital radius: r = 6.37×10⁶ + 0.4×10⁶ = 6.77×10⁶ m',
            'Gravitational force: F = GMm/r²',
            'F = (6.67×10⁻¹¹)(5.97×10²⁴)(70)/(6.77×10⁶)²',
            'F = 608 N (about 88% of surface weight)',
            'Surface weight: W = mg = 70 × 9.8 = 686 N',
            'Weightlessness: astronaut and ISS both in free fall',
            'Both accelerate toward Earth at same rate',
            'No normal force from floor → feels weightless',
            'Gravity still present but both falling together'
        ],
        helper: 'Weightlessness = free fall; Both astronaut and spacecraft fall together',
        realWorldContext: 'Space stations, astronaut experience',
        diagramInfo: {
            type: 'weightlessness',
            registryKey: 'weightlessnessOrbitDiagram',
            renderOptions: {
                showISS: true,
                showAstronaut: true,
                showGravityVector: true,
                showFreeFall: true,
                showComparison: true,
                showExplanation: true
            },
            canvasSize: { width: 1000, height: 700 }
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
                const filename = `physics_weightlessness_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

const EndSection8 = "close";