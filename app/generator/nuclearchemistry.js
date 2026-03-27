
// ============================================================================
// NUCLEAR CHEMISTRY GENERATORS (4 generators)
// ============================================================================

generateRelatedRadioactiveDecayDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alpha Decay - Radium-226',
        problem: 'Write the nuclear equation for alpha decay of Radium-226. What is the daughter nucleus?',
        parameters: {
            parentNucleus: 'Ra-226',
            decayType: 'alpha',
            alphaParticle: '⁴₂He',
            daughterNucleus: 'Rn-222'
        },
        type: 'radioactive_decay',
        subparts: [
            'Alpha decay: nucleus emits ⁴₂He (α particle)',
            'Parent: ²²⁶₈₈Ra (mass = 226, atomic # = 88)',
            'Alpha particle: ⁴₂He (mass = 4, atomic # = 2)',
            'Mass number: 226 - 4 = 222',
            'Atomic number: 88 - 2 = 86',
            'Element with Z=86: Radon (Rn)',
            'Nuclear equation: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He',
            'Daughter nucleus: Radon-222'
        ],
        helper: 'Alpha decay: mass -4, atomic number -2',
        realWorldContext: 'Radon-222 in basements from radium decay',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'alphaDecay',
            renderOptions: {
                title: 'Alpha Decay - Radium-226',
                showParticle: true,
                showEquation: true,
                decayType: 'alpha',
                nucleus: 'Ra-226'
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `alpha_decay_radium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Beta Decay - Carbon-14',
        problem: 'Write the nuclear equation for beta decay of Carbon-14. Identify the daughter nucleus.',
        parameters: {
            parentNucleus: 'C-14',
            decayType: 'beta-minus',
            betaParticle: '⁰₋₁e',
            daughterNucleus: 'N-14'
        },
        type: 'radioactive_decay',
        subparts: [
            'Beta-minus decay: neutron → proton + electron',
            'Nucleus emits ⁰₋₁e (β⁻ particle)',
            'Parent: ¹⁴₆C (mass = 14, atomic # = 6)',
            'Beta particle: ⁰₋₁e (mass = 0, atomic # = -1)',
            'Mass number: 14 - 0 = 14 (unchanged)',
            'Atomic number: 6 - (-1) = 6 + 1 = 7',
            'Element with Z=7: Nitrogen (N)',
            'Nuclear equation: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e',
            'Daughter nucleus: Nitrogen-14'
        ],
        helper: 'Beta-minus decay: mass unchanged, atomic number +1',
        realWorldContext: 'Carbon-14 dating uses this decay',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'betaDecay',
            renderOptions: {
                title: 'Beta Decay - Carbon-14',
                showParticle: true,
                showEquation: true,
                decayType: 'beta',
                nucleus: 'C-14'
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `beta_decay_carbon14_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Decay Series - Multiple Steps',
        problem: 'Uranium-238 undergoes alpha decay, then beta decay. Write both equations and identify the final product.',
        parameters: {
            parentNucleus: 'U-238',
            step1: 'alpha',
            step2: 'beta',
            intermediate: 'Th-234',
            finalProduct: 'Pa-234'
        },
        type: 'radioactive_decay',
        subparts: [
            'Step 1: Alpha decay of U-238',
            '²³⁸₉₂U → ? + ⁴₂He',
            'Mass: 238 - 4 = 234',
            'Atomic #: 92 - 2 = 90 (Thorium)',
            'First equation: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He',
            'Step 2: Beta decay of Th-234',
            '²³⁴₉₀Th → ? + ⁰₋₁e',
            'Mass: 234 - 0 = 234',
            'Atomic #: 90 + 1 = 91 (Protactinium)',
            'Second equation: ²³⁴₉₀Th → ²³⁴₉₁Pa + ⁰₋₁e',
            'Final product: Protactinium-234'
        ],
        helper: 'Decay series: track mass and atomic numbers through each step',
        realWorldContext: 'U-238 decay chain leads eventually to stable Pb-206',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'alphaDecay',
            renderOptions: {
                title: 'Decay Series - U-238 → Th-234 → Pa-234',
                showParticle: true,
                showEquation: true,
                showSeries: true,
                decayType: 'series',
                nucleus: 'U-238'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `decay_series_uranium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Gamma Decay - Cobalt-60',
        problem: 'Explain what happens during gamma decay of Cobalt-60. Does the nucleus change identity?',
        parameters: {
            nucleus: 'Co-60',
            decayType: 'gamma',
            gammaRay: '⁰₀γ',
            identityChange: false
        },
        type: 'radioactive_decay',
        subparts: [
            'Gamma decay: emission of high-energy photon',
            'Nucleus in excited state releases energy',
            'Gamma ray: ⁰₀γ (no mass, no charge)',
            'Parent: ⁶⁰₂₇Co (excited state)',
            'Mass number: 60 - 0 = 60 (unchanged)',
            'Atomic number: 27 - 0 = 27 (unchanged)',
            'Nuclear equation: ⁶⁰₂₇Co* → ⁶⁰₂₇Co + ⁰₀γ',
            'Identity unchanged: still Cobalt-60',
            'Only energy state changes (excited → ground)',
            'Often follows alpha or beta decay'
        ],
        helper: 'Gamma decay: no change in mass or atomic number',
        realWorldContext: 'Co-60 gamma rays used in cancer radiation therapy',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'gammaDecay',
            renderOptions: {
                title: 'Gamma Decay - Cobalt-60',
                showWave: true,
                showEquation: true,
                decayType: 'gamma',
                nucleus: 'Co-60'
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `gamma_decay_cobalt_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Penetration Power Comparison',
        problem: 'Using the diagram, rank alpha, beta, and gamma radiation by penetration power. Explain the differences.',
        parameters: {
            radiations: ['alpha', 'beta', 'gamma'],
            penetrationOrder: 'alpha < beta < gamma',
            shielding: { alpha: 'paper', beta: 'aluminum', gamma: 'lead/concrete' }
        },
        type: 'radioactive_decay',
        subparts: [
            'ALPHA (α): ⁴₂He nucleus (2 protons + 2 neutrons)',
            'Large mass, +2 charge',
            'Strong interaction with matter',
            'Stopped by: paper, skin, few cm of air',
            'Least penetrating, most ionizing',
            'BETA (β⁻): electron (⁰₋₁e)',
            'Small mass, -1 charge',
            'Moderate interaction',
            'Stopped by: aluminum foil, plastic',
            'Medium penetration and ionization',
            'GAMMA (γ): high-energy photon (⁰₀γ)',
            'No mass, no charge',
            'Weak interaction with matter',
            'Stopped by: thick lead, concrete',
            'Most penetrating, least ionizing',
            'Penetration: γ > β > α'
        ],
        helper: 'Penetration ∝ 1/(mass × charge); ionizing power is inverse',
        realWorldContext: 'X-ray technicians use lead aprons (gamma shielding)',
        diagramInfo: {
            type: 'penetration',
            registryKey: 'penetrationPower',
            renderOptions: {
                title: 'Radiation Penetration Power',
                showBarriers: true,
                showLabels: true,
                radiations: ['alpha', 'beta', 'gamma']
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `penetration_power_comparison_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedNuclearEquationsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Balancing Nuclear Equations - Alpha',
        problem: 'Complete the nuclear equation: ²³⁹₉₄Pu → ? + ⁴₂He',
        parameters: {
            reactant: 'Pu-239',
            particle: 'alpha',
            product: 'U-235'
        },
        type: 'nuclear_equations',
        subparts: [
            'Nuclear equations must balance mass and atomic numbers',
            'Reactant: ²³⁹₉₄Pu (mass=239, Z=94)',
            'Alpha particle: ⁴₂He (mass=4, Z=2)',
            'Mass number: 239 = ? + 4',
            '? = 239 - 4 = 235',
            'Atomic number: 94 = ? + 2',
            '? = 94 - 2 = 92',
            'Element with Z=92: Uranium (U)',
            'Complete equation: ²³⁹₉₄Pu → ²³⁵₉₂U + ⁴₂He'
        ],
        helper: 'Check: sum of mass numbers equal, sum of atomic numbers equal',
        realWorldContext: 'Plutonium-239 used in nuclear weapons',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'alphaDecay',
            renderOptions: {
                title: 'Nuclear Equation - Pu-239 Alpha Decay',
                showParticle: true,
                showEquation: true,
                showBalancing: true,
                decayType: 'alpha',
                nucleus: 'Pu-239'
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `nuclear_equation_pu239_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Positron Emission',
        problem: 'Complete: ²²₁₁Na → ²²₁₀Ne + ?. What particle is emitted?',
        parameters: {
            reactant: 'Na-22',
            product: 'Ne-22',
            particle: 'positron'
        },
        type: 'nuclear_equations',
        subparts: [
            'Given: ²²₁₁Na → ²²₁₀Ne + ?',
            'Mass numbers: 22 = 22 + ?',
            '? has mass number 0',
            'Atomic numbers: 11 = 10 + ?',
            '? has atomic number +1',
            'Particle: ⁰₊₁e (positron, β⁺)',
            'Complete: ²²₁₁Na → ²²₁₀Ne + ⁰₊₁e',
            'Positron emission: proton → neutron + positron',
            'Atomic number decreases by 1'
        ],
        helper: 'Positron (β⁺): antiparticle of electron, charge +1',
        realWorldContext: 'Positron emission used in PET scans',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'betaDecay',
            renderOptions: {
                title: 'Positron Emission - Na-22',
                showParticle: true,
                showEquation: true,
                decayType: 'positron',
                nucleus: 'Na-22'
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `positron_emission_na22_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Nuclear Fission Equation',
        problem: 'Complete the fission equation: ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ? + 3¹₀n',
        parameters: {
            reactant: 'U-235',
            trigger: 'neutron',
            product1: 'Ba-141',
            product2: 'Kr-92',
            neutronsReleased: 3
        },
        type: 'nuclear_equations',
        subparts: [
            'Fission: heavy nucleus splits into two smaller nuclei',
            'Reactants: ²³⁵₉₂U + ¹₀n',
            'Total mass: 235 + 1 = 236',
            'Total atomic number: 92 + 0 = 92',
            'Products: ¹⁴¹₅₆Ba + ? + 3¹₀n',
            'Known mass: 141 + 3(1) = 144',
            'Unknown mass: 236 - 144 = 92',
            'Known atomic: 56 + 0 = 56',
            'Unknown atomic: 92 - 56 = 36',
            'Element Z=36: Krypton (Kr)',
            'Complete: ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3¹₀n'
        ],
        helper: 'Fission releases 2-3 neutrons → chain reaction possible',
        realWorldContext: 'U-235 fission powers nuclear reactors',
        diagramInfo: {
            type: 'fission',
            registryKey: 'nuclearFission',
            renderOptions: {
                title: 'Nuclear Fission - U-235',
                showNeutrons: true,
                showProducts: true,
                showEnergy: true,
                nucleus: 'U-235'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `nuclear_fission_u235_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Nuclear Fusion Equation',
        problem: 'Complete the fusion equation: ²₁H + ³₁H → ? + ¹₀n',
        parameters: {
            reactant1: 'H-2 (deuterium)',
            reactant2: 'H-3 (tritium)',
            product: 'He-4',
            neutron: true
        },
        type: 'nuclear_equations',
        subparts: [
            'Fusion: light nuclei combine to form heavier nucleus',
            'Reactants: ²₁H + ³₁H (deuterium + tritium)',
            'Total mass: 2 + 3 = 5',
            'Total atomic number: 1 + 1 = 2',
            'Products: ? + ¹₀n',
            'Neutron mass: 1',
            'Unknown mass: 5 - 1 = 4',
            'Unknown atomic: 2 - 0 = 2',
            'Element Z=2: Helium (He)',
            'Complete: ²₁H + ³₁H → ⁴₂He + ¹₀n',
            'Releases enormous energy (17.6 MeV)'
        ],
        helper: 'Fusion requires very high temperature (millions of K)',
        realWorldContext: 'Fusion powers the sun and stars',
        diagramInfo: {
            type: 'fusion',
            registryKey: 'nuclearFusion',
            renderOptions: {
                title: 'Nuclear Fusion - Deuterium + Tritium',
                showReactants: true,
                showProduct: true,
                showEnergy: true,
                reactants: ['H-2', 'H-3']
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `nuclear_fusion_deuterium_tritium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Transmutation - Artificial Element',
        problem: 'Complete the transmutation: ²³⁸₉₂U + ⁴₂He → ? + ¹₀n. What element is produced?',
        parameters: {
            target: 'U-238',
            projectile: 'alpha',
            product: 'Pu-241',
            process: 'transmutation'
        },
        type: 'nuclear_equations',
        subparts: [
            'Transmutation: converting one element to another',
            'Bombardment with particles',
            'Reactants: ²³⁸₉₂U + ⁴₂He',
            'Total mass: 238 + 4 = 242',
            'Total atomic: 92 + 2 = 94',
            'Products: ? + ¹₀n',
            'Neutron: mass=1, atomic=0',
            'Unknown mass: 242 - 1 = 241',
            'Unknown atomic: 94 - 0 = 94',
            'Element Z=94: Plutonium (Pu)',
            'Complete: ²³⁸₉₂U + ⁴₂He → ²⁴¹₉₄Pu + ¹₀n',
            'Plutonium is artificial (not found in nature)'
        ],
        helper: 'Transmutation creates elements beyond uranium',
        realWorldContext: 'How synthetic elements are created in labs',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'alphaDecay',
            renderOptions: {
                title: 'Transmutation - Creating Plutonium',
                showParticle: true,
                showEquation: true,
                showBombardment: true,
                decayType: 'transmutation',
                nucleus: 'U-238'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `transmutation_plutonium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedHalfLifeDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Half-Life Calculation - Iodine-131',
        problem: 'Iodine-131 has a half-life of 8 days. How much of a 40 g sample remains after 24 days?',
        parameters: {
            isotope: 'I-131',
            halfLife: 8,
            initialAmount: 40,
            time: 24,
            finalAmount: 5
        },
        type: 'half_life',
        subparts: [
            'Half-life: time for half of sample to decay',
            'Given: t₁/₂ = 8 days, initial = 40 g, time = 24 days',
            'Number of half-lives: 24 ÷ 8 = 3 half-lives',
            'After 1st half-life (8 days): 40 → 20 g',
            'After 2nd half-life (16 days): 20 → 10 g',
            'After 3rd half-life (24 days): 10 → 5 g',
            'Formula: N = N₀ × (1/2)ⁿ',
            'N = 40 × (1/2)³ = 40 × 1/8 = 5 g',
            'Answer: 5 g remains'
        ],
        helper: 'n = time elapsed / half-life; remaining = initial × (1/2)ⁿ',
        realWorldContext: 'I-131 used in thyroid cancer treatment',
        diagramInfo: {
            type: 'halfLife',
            registryKey: 'halfLifeGraph',
            renderOptions: {
                title: 'Half-Life - Iodine-131',
                showPeriods: true,
                showPercentages: true,
                halfLife: 8,
                isotope: 'I-131'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `half_life_iodine131_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Decay Curve - Visual Analysis',
        problem: 'Using the decay curve, determine what fraction of the original sample remains after 3 half-lives.',
        parameters: {
            halfLives: 3,
            fraction: '1/8',
            percentage: 12.5
        },
        type: 'half_life',
        subparts: [
            'Decay curve shows exponential decrease',
            'After each half-life: amount halved',
            'After 1 half-life: 1/2 remains (50%)',
            'After 2 half-lives: 1/4 remains (25%)',
            'After 3 half-lives: 1/8 remains (12.5%)',
            'Pattern: (1/2)ⁿ where n = number of half-lives',
            '(1/2)³ = 1/8',
            'Answer: 1/8 or 12.5% remains',
            '87.5% has decayed'
        ],
        helper: 'Each half-life: multiply remaining amount by 1/2',
        realWorldContext: 'Predicting radioactive decay over time',
        diagramInfo: {
            type: 'decayCurve',
            registryKey: 'radioactiveDecayCurve',
            renderOptions: {
                title: 'Radioactive Decay Curve',
                showHalfLives: true,
                showExponential: true,
                halfLife: 10,
                showFractions: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `decay_curve_analysis_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Carbon-14 Dating',
        problem: 'A fossil contains 25% of the original C-14. If t₁/₂ = 5730 years, how old is the fossil?',
        parameters: {
            isotope: 'C-14',
            halfLife: 5730,
            remainingPercent: 25,
            age: 11460
        },
        type: 'half_life',
        subparts: [
            'Given: 25% remains, t₁/₂ = 5730 years',
            '25% = 1/4 of original',
            'After 1 half-life: 100% → 50%',
            'After 2 half-lives: 50% → 25%',
            'Therefore: n = 2 half-lives',
            'Age = n × t₁/₂',
            'Age = 2 × 5730 years',
            'Age = 11,460 years',
            'Alternative: use (1/2)ⁿ = 0.25',
            'Solve: n = log(0.25)/log(0.5) = 2'
        ],
        helper: 'For fractions: 1/2 = 1 HL, 1/4 = 2 HL, 1/8 = 3 HL, 1/16 = 4 HL',
        realWorldContext: 'C-14 dating determines age of organic materials',
        diagramInfo: {
            type: 'decayCurve',
            registryKey: 'radioactiveDecayCurve',
            renderOptions: {
                title: 'Carbon-14 Dating Curve',
                showHalfLives: true,
                showExponential: true,
                isotope: 'C-14',
                halfLife: 5730,
                highlightPercent: 25
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `carbon14_dating_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Finding Half-Life from Data',
        problem: 'A 100 g sample decays to 25 g in 20 days. What is the half-life?',
        parameters: {
            initialAmount: 100,
            finalAmount: 25,
            time: 20,
            halfLife: 10
        },
        type: 'half_life',
        subparts: [
            'Given: N₀ = 100 g, N = 25 g, time = 20 days',
            'Find: t₁/₂ = ?',
            '25 g is what fraction of 100 g?',
            '25/100 = 1/4',
            '1/4 = (1/2)² → 2 half-lives elapsed',
            'Number of half-lives: n = 2',
            'Time = n × t₁/₂',
            '20 days = 2 × t₁/₂',
            't₁/₂ = 20/2 = 10 days',
            'Answer: Half-life is 10 days'
        ],
        helper: 'Find fraction remaining → determine n → divide time by n',
        realWorldContext: 'Determining half-life from experimental data',
        diagramInfo: {
            type: 'halfLife',
            registryKey: 'halfLifeGraph',
            renderOptions: {
                title: 'Determining Half-Life from Data',
                showPeriods: true,
                showPercentages: true,
                halfLife: 10,
                showCalculation: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `finding_half_life_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Non-Integer Half-Lives',
        problem: 'A 80 g sample of isotope X (t₁/₂ = 6 hours) decays for 15 hours. How much remains?',
        parameters: {
            initialAmount: 80,
            halfLife: 6,
            time: 15,
            finalAmount: 14.14
        },
        type: 'half_life',
        subparts: [
            'Given: N₀ = 80 g, t₁/₂ = 6 hours, time = 15 hours',
            'Number of half-lives: n = 15/6 = 2.5 half-lives',
            'Use formula: N = N₀ × (1/2)ⁿ',
            'N = 80 × (1/2)^2.5',
            'N = 80 × (1/2)^2 × (1/2)^0.5',
            'N = 80 × (1/4) × √(1/2)',
            'N = 20 × 0.707',
            'N = 14.14 g',
            'Or use calculator: 80 × 0.5^2.5 = 14.14 g',
            'Answer: 14.14 g remains'
        ],
        helper: 'For non-integer n: use (1/2)ⁿ with calculator or N = N₀e^(-0.693t/t₁/₂)',
        realWorldContext: 'Real decay doesnt stop at exact half-life intervals',
        diagramInfo: {
            type: 'decayCurve',
            registryKey: 'radioactiveDecayCurve',
            renderOptions: {
                title: 'Non-Integer Half-Lives',
                showHalfLives: true,
                showExponential: true,
                halfLife: 6,
                highlightTime: 15,
                showContinuous: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `non_integer_half_lives_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedNuclearReactionsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Nuclear Fission - Energy Release',
        problem: 'Explain why nuclear fission of U-235 releases enormous energy. Use the binding energy curve.',
        parameters: {
            reaction: 'fission',
            nucleus: 'U-235',
            products: ['medium-mass nuclei', 'neutrons'],
            energyRelease: 'large'
        },
        type: 'nuclear_reactions',
        subparts: [
            'Fission: heavy nucleus splits into two medium nuclei',
            'U-235 → Ba-141 + Kr-92 + 3 neutrons',
            'Binding energy per nucleon vs mass number curve',
            'U-235 (A=235): BE/nucleon ≈ 7.6 MeV',
            'Products (A≈90-140): BE/nucleon ≈ 8.5 MeV',
            'Products more stable (higher BE/nucleon)',
            'Mass defect converted to energy (E=mc²)',
            'Energy released ≈ 200 MeV per fission',
            'Millions of times more than chemical reactions'
        ],
        helper: 'Fission moves toward peak of BE curve → energy released',
        realWorldContext: 'Nuclear power plants use controlled fission',
        diagramInfo: {
            type: 'bindingEnergy',
            registryKey: 'bindingEnergyCurve',
            renderOptions: {
                title: 'Binding Energy Curve - Fission',
                showPeak: true,
                showFissionFusion: true,
                highlightFission: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `fission_energy_release_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Chain Reaction Mechanism',
        problem: 'Using the diagram, explain how a nuclear chain reaction becomes self-sustaining.',
        parameters: {
            trigger: 'neutron',
            neutronsReleased: '2-3 per fission',
            condition: 'critical mass'
        },
        type: 'nuclear_reactions',
        subparts: [
            'Chain reaction: one fission triggers more fissions',
            'Step 1: neutron hits U-235 nucleus',
            'Step 2: U-235 undergoes fission',
            'Step 3: releases 2-3 neutrons + energy',
            'Step 4: each neutron can cause another fission',
            'Generation 1: 1 fission → 3 neutrons',
            'Generation 2: 3 fissions → 9 neutrons',
            'Generation 3: 9 fissions → 27 neutrons',
            'Exponential growth if uncontrolled',
            'Critical mass: enough material for self-sustaining reaction',
            'Control rods absorb excess neutrons in reactor'
        ],
        helper: 'Controlled: steady rate; Uncontrolled: explosive (bomb)',
        realWorldContext: 'Nuclear reactors maintain controlled chain reactions',
        diagramInfo: {
            type: 'chainReaction',
            registryKey: 'chainReaction',
            renderOptions: {
                title: 'Nuclear Chain Reaction',
                showGenerations: true,
                showNeutrons: true,
                generations: 3
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `chain_reaction_mechanism_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Nuclear Fusion in Stars',
        problem: 'Explain why fusion is the energy source of stars. Why does it require such high temperatures?',
        parameters: {
            reaction: 'fusion',
            temperature: '15 million K',
            fuel: 'hydrogen',
            product: 'helium'
        },
        type: 'nuclear_reactions',
        subparts: [
            'Fusion: light nuclei combine to form heavier nucleus',
            'Sun: 4 ¹H → ⁴He + 2 positrons + energy',
            'Simplified: ²H + ³H → ⁴He + neutron',
            'Binding energy curve: fusion moves toward peak',
            'Products have higher BE/nucleon → energy released',
            'PROBLEM: protons repel (both positive)',
            'Need extremely high temperature (15 million K)',
            'High T → high kinetic energy',
            'Overcome electrostatic repulsion',
            'Nuclei get close enough for strong force',
            'Strong force >> electromagnetic force at close range',
            'Fusion occurs, releases 17.6 MeV',
            'Challenge on Earth: contain 100+ million K plasma'
        ],
        helper: 'Fusion requires high T to overcome electrostatic repulsion',
        realWorldContext: 'Sun fuses 600 million tons H/second',
        diagramInfo: {
            type: 'bindingEnergy',
            registryKey: 'bindingEnergyCurve',
            renderOptions: {
                title: 'Binding Energy Curve - Fusion',
                showPeak: true,
                showFissionFusion: true,
                highlightFusion: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `fusion_in_stars_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Fission vs Fusion Comparison',
        problem: 'Compare nuclear fission and fusion. Which releases more energy per unit mass?',
        parameters: {
            fission: { fuel: 'U-235', energy: '200 MeV', temp: 'room' },
            fusion: { fuel: 'H-2/H-3', energy: '17.6 MeV', temp: '100 million K' }
        },
        type: 'nuclear_reactions',
        subparts: [
            'FISSION:',
            '- Heavy nucleus → two lighter nuclei',
            '- Fuel: U-235, Pu-239',
            '- Energy: ~200 MeV per reaction',
            '- Releases 2-3 neutrons (chain reaction)',
            '- Occurs at room temperature',
            '- Produces radioactive waste',
            'FUSION:',
            '- Light nuclei → heavier nucleus',
            '- Fuel: H-2 (deuterium), H-3 (tritium)',
            '- Energy: ~17.6 MeV per D-T reaction',
            '- Requires 100+ million K temperature',
            '- Less radioactive waste',
            'Energy per unit mass: fusion > fission',
            'Fusion: 4× more energy per kg than fission',
            'But fusion much harder to achieve on Earth'
        ],
        helper: 'Both convert mass to energy (E=mc²)',
        realWorldContext: 'Fission: current tech; Fusion: future goal',
        diagramInfo: {
            type: 'fission',
            registryKey: 'nuclearFission',
            renderOptions: {
                title: 'Fission vs Fusion Comparison',
                showComparison: true,
                showEnergy: true,
                showBoth: true
            },
            canvasSize: { width: 1100, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `fission_vs_fusion_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Mass-Energy Equivalence',
        problem: 'In D-T fusion, the mass defect is 0.0189 u. Calculate the energy released (1 u = 931.5 MeV/c²).',
        parameters: {
            massDefect: 0.0189,
            conversionFactor: 931.5,
            energyReleased: 17.6
        },
        type: 'nuclear_reactions',
        subparts: [
            'Fusion: ²H + ³H → ⁴He + neutron',
            'Reactant masses: ²H = 2.0141 u, ³H = 3.0161 u',
            'Product masses: ⁴He = 4.0026 u, neutron = 1.0087 u',
            'Total reactant mass: 2.0141 + 3.0161 = 5.0302 u',
            'Total product mass: 4.0026 + 1.0087 = 5.0113 u',
            'Mass defect: Δm = 5.0302 - 5.0113 = 0.0189 u',
            'Einstein: E = mc² or E = Δm × c²',
            'Conversion: 1 u = 931.5 MeV/c²',
            'E = 0.0189 u × 931.5 MeV/u',
            'E = 17.6 MeV',
            'Missing mass converted to energy'
        ],
        helper: 'Mass defect × 931.5 = energy in MeV',
        realWorldContext: 'E=mc² explains nuclear energy release',
        diagramInfo: {
            type: 'fusion',
            registryKey: 'nuclearFusion',
            renderOptions: {
                title: 'Mass-Energy Equivalence in Fusion',
                showReactants: true,
                showProduct: true,
                showEnergy: true,
                showMassDefect: true,
                reactants: ['H-2', 'H-3']
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `mass_energy_equivalence_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

const EndSection4 = "close";