// ============================================================================
// examinationGenerator.js
//
// Examination problem generators for chemistry | biology | physics | mathematics
//
// Architecture mirrors BiochemicalShapes.js:
//   - One static dispatcher per subject  (drawBenedictsTest equivalent)
//   - One static method per problem type (drawCompleteBenedictsTest equivalent)
//   - Problems without diagrams follow generateLithiumIonCellVoltagechem101 shape
//   - Problems with diagrams    follow generateCholeraChlorideChannelbio101  shape
// ============================================================================

class ExaminationGenerator {

    // ════════════════════════════════════════════════════════════════════════
    // CHEMISTRY DISPATCHER
    // problemTypes: mole_calculations | alkanes | functional_groups_diagram |
    //               galvanic_cells | electrolysis_diagram | equilibrium_constants |
    //               titrations_diagram | electron_configuration |
    //               atomic_structure_diagram
    // ════════════════════════════════════════════════════════════════════════

    static generateChemistryProblem(problemType, originalProblem, originalSolution, options) {
        switch (problemType) {
            case 'mole_calculations':
                return this.generateMoleCalculationschem101(originalProblem, originalSolution, options);
            case 'alkanes':
                return this.generateAlkaneschem101(originalProblem, originalSolution, options);
            case 'functional_groups_diagram':
                return this.generateFunctionalGroupsDiagramchem101(originalProblem, originalSolution, options);
            case 'galvanic_cells':
                return this.generateGalvanicCellschem101(originalProblem, originalSolution, options);
            case 'electrolysis_diagram':
                return this.generateElectrolysisDiagramchem101(originalProblem, originalSolution, options);
            case 'equilibrium_constants':
                return this.generateEquilibriumConstantschem101(originalProblem, originalSolution, options);
            case 'titrations_diagram':
                return this.generateTitrationsDiagramchem101(originalProblem, originalSolution, options);
            case 'electron_configuration':
                return this.generateElectronConfigurationchem101(originalProblem, originalSolution, options);
            case 'atomic_structure_diagram':
                return this.generateAtomicStructureDiagramchem101(originalProblem, originalSolution, options);
        }
    }

    // ════════════════════════════════════════════════════════════════════════
    // BIOLOGY DISPATCHER
    // problemTypes: cell_division | cell_structure_diagram | mendelian_genetics |
    //               translation_diagram | ecosystems | nervous_system |
    //               excretory_system_diagram | plant_structure |
    //               bacteria_diagram | pathogens
    // ════════════════════════════════════════════════════════════════════════

    static generateBiologyProblem(problemType, originalProblem, originalSolution, options) {
        switch (problemType) {
            case 'cell_division':
                return this.generateCellDivisionbio101(originalProblem, originalSolution, options);
            case 'cell_structure_diagram':
                return this.generateCellStructureDiagrambio101(originalProblem, originalSolution, options);
            case 'mendelian_genetics':
                return this.generateMendelianGeneticsbio101(originalProblem, originalSolution, options);
            case 'translation_diagram':
                return this.generateTranslationDiagrambio101(originalProblem, originalSolution, options);
            case 'ecosystems':
                return this.generateEcosystemsbio101(originalProblem, originalSolution, options);
            case 'nervous_system':
                return this.generateNervousSystembio101(originalProblem, originalSolution, options);
            case 'excretory_system_diagram':
                return this.generateExcretorySystemDiagrambio101(originalProblem, originalSolution, options);
            case 'plant_structure':
                return this.generatePlantStructurebio101(originalProblem, originalSolution, options);
            case 'bacteria_diagram':
                return this.generateBacteriaDiagrambio101(originalProblem, originalSolution, options);
            case 'pathogens':
                return this.generatePathogensbio101(originalProblem, originalSolution, options);
        }
    }

    // ════════════════════════════════════════════════════════════════════════
    // PHYSICS DISPATCHER
    // problemTypes: kinematics | forces_and_newtons_laws | energy_work_power |
    //               waves_and_properties | circuits_and_ohms_law |
    //               nuclear_physics | electromagnetism | pressure_and_moments |
    //               thermal_physics | optics_ray_diagrams
    // ════════════════════════════════════════════════════════════════════════

    static generatePhysicsProblem(problemType, originalProblem, originalSolution, options) {
        switch (problemType) {
            case 'kinematics':
                return this.generateKinematicsphy101(originalProblem, originalSolution, options);
            case 'forces_and_newtons_laws':
                return this.generateForcesAndNewtonsLawsphy101(originalProblem, originalSolution, options);
            case 'energy_work_power':
                return this.generateEnergyWorkPowerphy101(originalProblem, originalSolution, options);
            case 'waves_and_properties':
                return this.generateWavesAndPropertiesphy101(originalProblem, originalSolution, options);
            case 'circuits_and_ohms_law':
                return this.generateCircuitsAndOhmsLawphy101(originalProblem, originalSolution, options);
            case 'nuclear_physics':
                return this.generateNuclearPhysicsphy101(originalProblem, originalSolution, options);
            case 'electromagnetism':
                return this.generateElectromagnetismphy101(originalProblem, originalSolution, options);
            case 'pressure_and_moments':
                return this.generatePressureAndMomentsphy101(originalProblem, originalSolution, options);
            case 'thermal_physics':
                return this.generateThermalPhysicsphy101(originalProblem, originalSolution, options);
            case 'optics_ray_diagrams':
                return this.generateOpticsRayDiagramsphy101(originalProblem, originalSolution, options);
        }
    }

    // ════════════════════════════════════════════════════════════════════════
    // MATHEMATICS DISPATCHER
    // problemTypes: algebra_equations | quadratic_equations | trigonometry |
    //               geometry_and_mensuration | statistics_and_probability |
    //               vectors_and_matrices | calculus_differentiation |
    //               calculus_integration | number_and_arithmetic |
    //               sequences_and_series
    // ════════════════════════════════════════════════════════════════════════

    static generateMathematicsProblem(problemType, originalProblem, originalSolution, options) {
        switch (problemType) {
            case 'algebra_equations':
                return this.generateAlgebraEquationsmat101(originalProblem, originalSolution, options);
            case 'quadratic_equations':
                return this.generateQuadraticEquationsmat101(originalProblem, originalSolution, options);
            case 'trigonometry':
                return this.generateTrigonometrymat101(originalProblem, originalSolution, options);
            case 'geometry_and_mensuration':
                return this.generateGeometryAndMensurationmat101(originalProblem, originalSolution, options);
            case 'statistics_and_probability':
                return this.generateStatisticsAndProbabilitymat101(originalProblem, originalSolution, options);
            case 'vectors_and_matrices':
                return this.generateVectorsAndMatricesmat101(originalProblem, originalSolution, options);
            case 'calculus_differentiation':
                return this.generateCalculusDifferentiationmat101(originalProblem, originalSolution, options);
            case 'calculus_integration':
                return this.generateCalculusIntegrationmat101(originalProblem, originalSolution, options);
            case 'number_and_arithmetic':
                return this.generateNumberAndArithmeticmat101(originalProblem, originalSolution, options);
            case 'sequences_and_series':
                return this.generateSequencesAndSeriesmat101(originalProblem, originalSolution, options);
        }
    }


    // ════════════════════════════════════════════════════════════════════════
    // CHEMISTRY PROBLEM GENERATORS
    // ════════════════════════════════════════════════════════════════════════

    static generateMoleCalculationschem101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Industrial Ammonia Synthesis: Haber Process Yield',
            problem: 'In an industrial Haber process reactor, 56 kg of nitrogen gas reacts with excess hydrogen gas. Calculate the theoretical mass of ammonia produced, and explain why the actual yield in industry is always lower than the theoretical yield.',
            parameters: {
                massNitrogen: 56,
                molarMassN2: 28,
                molarMassNH3: 17,
                molesN2: 2000,
                theoreticalMassNH3: 68,
                units: 'kg',
                equation: 'N₂ + 3H₂ → 2NH₃'
            },
            type: 'mole_calculations',
            context: 'The Haber process synthesises ammonia from nitrogen and hydrogen at 450 °C, 200 atm, and an iron catalyst. Ammonia is the precursor to fertilisers that feed roughly half the world\'s population. Despite its importance, the reaction is reversible and the equilibrium conversion is incomplete at industrial conditions.',
            application: 'Moles = mass ÷ molar mass. For N₂: n = 56,000 g ÷ 28 g mol⁻¹ = 2,000 mol. From the equation N₂ + 3H₂ → 2NH₃, the molar ratio N₂ : NH₃ = 1 : 2. Theoretical moles NH₃ = 4,000 mol. Theoretical mass = 4,000 × 17 = 68,000 g = 68 kg. The actual yield is lower because the reaction is reversible (equilibrium is not fully on the products side at industrial conditions), some reactant escapes before reacting, and side reactions may consume reactants.',
            question: 'If the actual yield in a particular reactor run is 46.24 kg of ammonia from 56 kg of nitrogen, calculate the percentage yield. State one industrial adjustment that increases the percentage yield without changing the equilibrium position.',
            answer: 'Percentage yield = (actual yield ÷ theoretical yield) × 100 = (46,240 ÷ 68,000) × 100 = 68.0%. One adjustment: increasing the rate of removal of ammonia from the equilibrium mixture (e.g. by liquefying and separating it) drives the equilibrium rightward by Le Chatelier\'s principle, increasing conversion per pass and thus the effective yield over multiple recycle passes.',
            extension: 'The concept of atom economy (Trost, 1991) complements percentage yield. Atom economy = (molar mass of desired product ÷ sum of molar masses of all products) × 100. For the Haber process the only product is NH₃, so atom economy = 100% — the reaction is perfectly atom-economical. Low percentage yield and high atom economy together motivate the industrial recycling of unreacted N₂ and H₂.',
            helper: 'moles = mass ÷ molar mass; use the stoichiometric ratio from the balanced equation to convert moles of reactant to moles of product; % yield = (actual ÷ theoretical) × 100.'
        };
    }

    static generateAlkaneschem101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Crude Oil Refining: Cracking Long-Chain Alkanes',
            problem: 'Draw the full structural formula of decane (C₁₀H₂₂) and write a balanced equation for one possible thermal cracking reaction that produces octane and ethene. Explain why cracking is economically important.',
            parameters: {
                startingAlkane: 'decane',
                molecularFormula: 'C₁₀H₂₂',
                products: ['octane C₈H₁₈', 'ethene C₂H₄'],
                crackingType: 'thermal',
                temperature: '450–750 °C',
                homologousSeries: 'alkanes',
                generalFormula: 'CₙH₂ₙ₊₂'
            },
            type: 'alkanes',
            context: 'Crude oil contains a mixture of hydrocarbons. Long-chain alkanes (heavy fractions) are less useful and less in demand than shorter-chain alkanes and alkenes. Cracking — thermal or catalytic — breaks C–C bonds in long chains to produce shorter, more valuable molecules including petrol-range alkanes and alkenes (feedstock for polymers).',
            application: 'Decane: CH₃–(CH₂)₈–CH₃. Thermal cracking equation: C₁₀H₂₂ → C₈H₁₈ + C₂H₄. Check: C: 10 = 8+2 ✓; H: 22 = 18+4 ✓. The homologous series of alkanes has general formula CₙH₂ₙ₊₂. Each member differs by CH₂. Boiling points increase with chain length due to greater London dispersion forces (more electrons → stronger temporary dipoles).',
            question: 'Write an alternative cracking equation for decane that produces propene (C₃H₆) and one other product. Name the other product and state what type of reaction propene can undergo that decane cannot, giving a reason.',
            answer: 'C₁₀H₂₂ → C₇H₁₆ (heptane) + C₃H₆. Check: C 10=7+3 ✓; H 22=16+6 ✓. Propene can undergo addition reactions (e.g. with Br₂, HBr, H₂O) because it contains a C=C double bond (π bond). Decane has no double bond — it is saturated — so it can only undergo substitution (e.g. free-radical halogenation) or combustion.',
            extension: 'Catalytic cracking uses a zeolite catalyst at lower temperatures (~500 °C) and produces a higher proportion of branched alkanes and aromatic compounds, which have higher octane ratings than straight-chain alkanes — making catalytic cracking preferred for petrol production. The zeolite\'s acidic pores facilitate carbocation intermediates, giving different product distributions from purely thermal cracking.',
            helper: 'General formula for alkanes: CₙH₂ₙ₊₂. Cracking: large alkane → smaller alkane + alkene. Balance C then H. Alkenes have C=C — they are unsaturated — and undergo addition reactions.',
            diagramInfo: {
                type: 'structuralFormula',
                registryKey: 'alkaneStructure',
                renderOptions: {
                    title: 'Decane Structural Formula & Cracking',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1000, height: 600 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new ChemistryDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `alkane_structure_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateFunctionalGroupsDiagramchem101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Pharmaceutical Synthesis: Identifying Functional Groups in Aspirin',
            problem: 'Draw the structural formula of aspirin (2-acetoxybenzoic acid, C₉H₈O₄). Identify and name all functional groups present and predict one chemical property arising from each group.',
            parameters: {
                compound: 'aspirin',
                IUPACname: '2-acetoxybenzoic acid',
                molecularFormula: 'C₉H₈O₄',
                functionalGroups: ['carboxylic acid –COOH', 'ester –COO–', 'benzene ring (aromatic)'],
                molarMass: 180.16
            },
            type: 'functional_groups_diagram',
            context: 'Aspirin is one of the most widely used drugs in the world. Its synthesis from salicylic acid and ethanoic anhydride is a classic A-Level practical. Identifying functional groups allows chemists to predict reactivity, solubility, and biological activity of a molecule.',
            application: 'The –COOH (carboxylic acid) group makes aspirin weakly acidic (donates H⁺, reacts with Na₂CO₃ to give CO₂). The –COO– (ester) group makes aspirin susceptible to hydrolysis (acid or base catalysed), which is why aspirin degrades to salicylic acid and ethanoic acid in moist conditions. The benzene ring undergoes electrophilic substitution rather than addition (delocalised π system stabilises the ring against addition).',
            question: 'Aspirin can be hydrolysed in aqueous NaOH. Write the structural formulae of the two products and name the type of reaction. State which product would react with sodium carbonate solution and write a word equation for that reaction.',
            answer: 'Hydrolysis (ester hydrolysis / saponification): aspirin + 2NaOH → sodium salicylate + sodium ethanoate. (Or in acid: + H₂O → salicylic acid + ethanoic acid.) Type: hydrolysis (nucleophilic acyl substitution at ester carbonyl). The carboxylic acid group in salicylic acid reacts with Na₂CO₃: salicylic acid + Na₂CO₃ → sodium salicylate + H₂O + CO₂.',
            extension: 'The discovery that aspirin inhibits cyclooxygenase (COX) enzymes by irreversibly acetylating a serine residue in the active site illustrates how a functional group (here the ester/acetyl group) determines pharmacological mechanism. COX inhibition reduces prostaglandin synthesis — the biochemical basis of aspirin\'s anti-inflammatory, analgesic, and antiplatelet actions.',
            helper: 'Carboxylic acid: –COOH; Ester: –COO–; Ester hydrolysis requires water (acid cat.) or aqueous alkali (base cat.). Benzene → electrophilic substitution.',
            diagramInfo: {
                type: 'structuralFormula',
                registryKey: 'aspirinFunctionalGroups',
                renderOptions: {
                    title: 'Aspirin — Functional Groups Identified',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 900, height: 700 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new ChemistryDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `aspirin_functional_groups_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateGalvanicCellschem101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Electrochemical Cells in Electric Vehicles: The Lithium-Ion Cell',
            problem: 'Explain, using the concept of electrode potential, why a lithium-ion cell has a much higher cell voltage than a Daniel cell (Zn/Cu), and why pure lithium metal cannot be used as the anode directly in an aqueous electrolyte.',
            parameters: {
                cathodePotential: 0.56,
                anodePotential: -3.04,
                danielCellEMF: 1.10,
                cellType: 'lithium-ion',
                electrolyte: 'non-aqueous organic',
                nominalVoltage: 3.7
            },
            type: 'galvanic_cells',
            context: 'Lithium-ion batteries power electric vehicles and portable electronics. Each cell involves oxidation at the anode (graphite intercalated with Li, releasing Li⁺ and e⁻) and reduction at the cathode (typically LiCoO₂, where Co³⁺ is reduced to Co²⁺ as Li⁺ inserts). The cell potential is approximately +3.7 V — much higher than a standard zinc-copper cell (+1.10 V) — enabling high energy density.',
            application: 'Cell potential depends on the difference in E° between cathode and anode. Li⁺/Li has E° = −3.04 V — one of the most negative values in the electrochemical series. The large difference between the cathode (CoO₂ reduction, high E°) and the lithium anode (very low E°) gives a large E°cell. If pure Li metal contacted aqueous electrolyte: Li(s) + H₂O → LiOH + ½H₂ — Li (E° = −3.04 V) spontaneously reduces water (E° = −0.83 V in neutral water). This reaction is violent and would destroy the cell. Lithium-ion cells use a non-aqueous (organic) electrolyte and intercalated lithium (not pure metal) to circumvent this kinetic hazard.',
            question: 'The following standard electrode potentials are given: CoO₂/LiCoO₂, E° ≈ +0.56 V; Li⁺/Li, E° = −3.04 V. Calculate the theoretical E°cell for one lithium-ion cell and compare it to the Daniel cell (E°cell = +1.10 V). Comment on the significance for electric vehicle range.',
            answer: 'E°cell = E°(cathode) − E°(anode) = +0.56 − (−3.04) = +3.60 V. This is 3.3 times higher than the Daniel cell. Higher cell voltage with the same charge (moles of electrons transferred) means more electrical energy per mole of reactant (W = QV; greater V for same Q = greater W). Electric vehicles use high-voltage, high-energy-density cells to maximise range per unit mass of battery — the approximately 3.7 V per cell means fewer cells in series are needed to achieve the 400–800 V battery pack voltage typical of modern EVs.',
            extension: 'The Nernst equation (E = E° − (RT/nF)lnQ) modifies the cell potential based on actual concentrations — as a lithium-ion cell discharges, the Li⁺ concentration in the electrolyte changes, and the actual cell voltage drops below E°. This explains the characteristic discharge curve of a battery, where voltage declines as charge is removed.',
            helper: 'E°cell = E°(cathode) − E°(anode); more negative anode E° and more positive cathode E° gives larger cell voltage.',
            diagramInfo: {
                type: 'galvanicCell',
                registryKey: 'lithiumIonCell',
                renderOptions: {
                    title: 'Lithium-Ion Galvanic Cell',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1000, height: 800 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new ChemistryDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `lithium_ion_cell_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateElectrolysisDiagramchem101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Aluminium Extraction: The Hall–Héroult Process',
            problem: 'In the Hall–Héroult process, aluminium oxide (Al₂O₃) dissolved in molten cryolite is electrolysed to produce aluminium. Write half-equations for each electrode and explain why carbon anodes must be replaced regularly.',
            parameters: {
                electrolyte: 'Al₂O₃ in molten cryolite (Na₃AlF₆)',
                cathodeProduct: 'aluminium metal',
                anodeProduct: 'oxygen (and CO₂)',
                anodeMaterial: 'carbon (graphite)',
                cathodeReaction: 'Al³⁺ + 3e⁻ → Al',
                anodeReaction: '2O²⁻ → O₂ + 4e⁻',
                operatingTemp: '950–980 °C'
            },
            type: 'electrolysis_diagram',
            context: 'Aluminium cannot be extracted by carbon reduction (Al is more reactive than carbon in the electrochemical series). Electrolysis of molten Al₂O₃ is necessary. Cryolite lowers the melting point from ~2050 °C to ~950 °C, reducing energy costs. The process is energy-intensive — approximately 15 kWh per kg of aluminium — making recycling aluminium 95% more energy-efficient.',
            application: 'Cathode (reduction): Al³⁺ + 3e⁻ → Al (molten metal collects at the bottom). Anode (oxidation): 2O²⁻ → O₂ + 4e⁻. The oxygen produced at 950 °C reacts with the carbon anodes: C(s) + O₂(g) → CO₂(g). This oxidises and erodes the anodes, which must therefore be regularly replaced — a significant operational cost.',
            question: 'Calculate the mass of aluminium deposited when a current of 150,000 A flows for 24 hours. (F = 96,500 C mol⁻¹; Ar Al = 27)',
            answer: 'Charge Q = I × t = 150,000 × (24 × 3600) = 150,000 × 86,400 = 1.296 × 10¹⁰ C. Moles of electrons = Q ÷ F = 1.296 × 10¹⁰ ÷ 96,500 = 1.343 × 10⁵ mol e⁻. From Al³⁺ + 3e⁻ → Al: moles Al = 1.343 × 10⁵ ÷ 3 = 4.476 × 10⁴ mol. Mass Al = 4.476 × 10⁴ × 27 = 1.209 × 10⁶ g ≈ 1,209 kg ≈ 1.21 tonnes.',
            extension: 'The Bayer process precedes Hall–Héroult: bauxite (Al₂O₃·xH₂O) is dissolved in hot concentrated NaOH, filtered to remove iron oxide impurities, then re-precipitated as pure Al(OH)₃ and calcined to Al₂O₃. The combination of Bayer + Hall–Héroult is the only viable large-scale industrial route for primary aluminium production.',
            helper: 'Q = It; moles e⁻ = Q ÷ F; use stoichiometry of half-equation to find moles of product; mass = moles × Ar.',
            diagramInfo: {
                type: 'electrolyticCell',
                registryKey: 'hallHeroultElectrolysis',
                renderOptions: {
                    title: 'Hall–Héroult Electrolytic Cell',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1000, height: 800 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new ChemistryDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `hall_heroult_electrolysis_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateEquilibriumConstantschem101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Contact Process: Optimising SO₃ Yield in Sulfuric Acid Manufacture',
            problem: 'Write the Kc expression for the equilibrium 2SO₂(g) + O₂(g) ⇌ 2SO₃(g). At 450 °C, Kc = 1.7 × 10⁴ mol⁻¹ dm³. Explain what this value indicates about the position of equilibrium and why 450 °C is chosen industrially despite a lower Kc at higher temperatures.',
            parameters: {
                equation: '2SO₂(g) + O₂(g) ⇌ 2SO₃(g)',
                temperature: 450,
                Kc: 1.7e4,
                units: 'mol⁻¹ dm³',
                reactionType: 'reversible exothermic',
                deltaH: -196,
                catalyst: 'V₂O₅ (vanadium pentoxide)'
            },
            type: 'equilibrium_constants',
            context: 'Sulfuric acid is the most widely manufactured chemical in the world. The Contact Process oxidises SO₂ to SO₃ over a V₂O₅ catalyst. SO₃ is then absorbed into concentrated H₂SO₄ to form oleum. The reaction is exothermic and reversible: temperature and pressure both affect equilibrium yield and rate.',
            application: 'Kc = [SO₃]² ÷ ([SO₂]² × [O₂]). A large Kc (1.7 × 10⁴) indicates the equilibrium lies far to the right — products strongly favoured. The reaction is exothermic (ΔH = −196 kJ mol⁻¹): increasing temperature decreases Kc (shifts equilibrium left, less SO₃). At lower temperatures Kc is larger (better yield) but the rate is too slow without catalyst. 450 °C is a compromise: sufficient rate with catalyst and acceptable equilibrium yield (~98%). Higher pressure also favours products (3 mol gas → 2 mol) but the yield is already high so extra pressure costs are unjustified.',
            question: 'At equilibrium at 450 °C, [SO₂] = 0.0200 mol dm⁻³ and [O₂] = 0.0100 mol dm⁻³. Calculate [SO₃] at equilibrium.',
            answer: 'Kc = [SO₃]² ÷ ([SO₂]² × [O₂]) = 1.7 × 10⁴. [SO₃]² = 1.7 × 10⁴ × (0.0200)² × 0.0100 = 1.7 × 10⁴ × 4 × 10⁻⁴ × 10⁻² = 1.7 × 10⁴ × 4 × 10⁻⁶ = 0.068. [SO₃] = √0.068 = 0.261 mol dm⁻³.',
            extension: 'Kp is the equilibrium constant expressed in terms of partial pressures and is related to Kc by Kp = Kc(RT)^Δn, where Δn is the change in moles of gas. For this reaction Δn = 2 − 3 = −1, so Kp = Kc(RT)⁻¹ — Kp has different units and a different numerical value from Kc at the same temperature.',
            helper: 'Kc = [products]^stoich ÷ [reactants]^stoich; units from powers of concentration; large Kc → products favoured; exothermic reaction: higher T → lower Kc.'
        };
    }

    static generateTitrationsDiagramchem101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Acid Rain Analysis: Titrating a Lake Water Sample',
            problem: 'A 25.00 cm³ sample of acidified lake water is titrated against 0.0200 mol dm⁻³ NaOH solution. The mean titre is 18.40 cm³. Calculate the concentration of H⁺ ions in the lake water in mol dm⁻³ and convert to pH. Sketch and annotate the expected titration curve.',
            parameters: {
                sampleVolume: 25.00,
                NaOHconcentration: 0.0200,
                meanTitre: 18.40,
                units: 'cm³',
                reaction: 'H⁺(aq) + OH⁻(aq) → H₂O(l)',
                indicator: 'phenolphthalein',
                equivalencePointpH: 7
            },
            type: 'titrations_diagram',
            context: 'Acid rain — formed when SO₂ and NOₓ dissolve in rainwater to form sulfurous/sulfuric and nitric acids — can lower lake pH to below 5, killing aquatic life. Monitoring lake pH by titration allows environmental scientists to quantify acidity and determine liming requirements.',
            application: 'n(NaOH) = c × V = 0.0200 × (18.40 ÷ 1000) = 3.68 × 10⁻⁴ mol. Ratio H⁺ : OH⁻ = 1:1, so n(H⁺) = 3.68 × 10⁻⁴ mol. c(H⁺) = n ÷ V = 3.68 × 10⁻⁴ ÷ 0.02500 = 0.01472 mol dm⁻³. pH = −log[H⁺] = −log(0.01472) = 1.832 ≈ 1.83. Strong acid–strong base curve: starts low pH (~1.8), nearly flat, then sharp vertical rise at equivalence point (pH 7), then levels at high pH (~12–13).',
            question: 'Explain why phenolphthalein is suitable as an indicator for a strong acid–strong base titration but would be unsuitable for a weak acid–strong base titration. Name a more appropriate indicator for the weak acid–strong base case and give its pH range.',
            answer: 'The strong acid–strong base equivalence point is at pH 7, and the near-vertical portion of the titration curve spans approximately pH 3–11 — well within phenolphthalein\'s colour-change range (pH 8.2–10.0). For a weak acid–strong base titration, the equivalence point is above pH 7 (e.g. ~pH 9 for ethanoic acid and NaOH) and the vertical portion is narrower and at higher pH. Phenolphthalein (pH 8.2–10.0) still works here. A more appropriate choice for the weak-acid case when needing a sharp endpoint at the exact equivalence pH is thymol blue (pH range 8.0–9.6) or thymolphthalein. For weak base–strong acid titrations, methyl orange (pH 3.1–4.4) is appropriate.',
            extension: 'Back titration is used when the analyte is insoluble or reacts too slowly for direct titration. For example, the purity of a calcium carbonate antacid tablet: dissolve in excess known HCl, then back-titrate the excess HCl with NaOH — the difference gives moles of HCl consumed by CaCO₃, and hence its mass.',
            helper: 'n = cV (V in dm³); ratio from balanced equation; c = n ÷ V; pH = −log[H⁺]; strong acid–strong base equivalence at pH 7.',
            diagramInfo: {
                type: 'titrationCurve',
                registryKey: 'strongAcidStrongBaseTitration',
                renderOptions: {
                    title: 'Strong Acid–Strong Base Titration Curve',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 900, height: 700 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new ChemistryDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `titration_curve_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateElectronConfigurationchem101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Transition Metals in Catalysis: Chromium\'s Anomalous Configuration',
            problem: 'Write the full electron configuration of chromium (Z = 24) and explain why it is anomalous compared to the expected [Ar] 3d⁴ 4s². Relate this to chromium\'s catalytic behaviour and oxidation states.',
            parameters: {
                element: 'chromium',
                atomicNumber: 24,
                expectedConfig: '[Ar] 3d⁴ 4s²',
                actualConfig: '[Ar] 3d⁵ 4s¹',
                anomalyReason: 'extra stability of half-filled 3d subshell',
                commonOxidationStates: ['+2', '+3', '+6'],
                catalyticApplication: 'Phillips catalyst for polyethylene synthesis'
            },
            type: 'electron_configuration',
            context: 'Chromium\'s electron configuration is one of two classical A-Level anomalies (the other is copper, [Ar] 3d¹⁰ 4s¹). Both arise because half-filled or fully-filled d subshells have extra stability from exchange energy. Transition metals are defined by having at least one ion with a partially filled d subshell — enabling variable oxidation states and catalytic activity.',
            application: 'Expected: [Ar] 3d⁴ 4s². Actual: [Ar] 3d⁵ 4s¹. The 3d⁵ configuration has all five d orbitals singly occupied (maximum exchange energy / half-filled stability). This is more stable than 3d⁴ 4s² by a margin that outweighs the cost of moving an electron from 4s to 3d. Common oxidation states: Cr²⁺ [Ar]3d⁴, Cr³⁺ [Ar]3d³ (most stable in solution — kinetically inert octahedral complexes), Cr⁶⁺ [Ar] (strong oxidising agent in dichromate Cr₂O₇²⁻).',
            question: 'Write the electron configuration of Cr³⁺ and explain why transition metal ions can act as catalysts, using Cr³⁺/Cr²⁺ as a specific example. Include a relevant industrial application.',
            answer: 'Cr³⁺: [Ar] 3d³. Transition metal ions catalyse reactions by offering alternative low-energy pathways through changes in oxidation state. Cr³⁺ can be reduced to Cr²⁺ (gaining an electron) and then re-oxidised — acting as an electron shuttle. In the Phillips catalyst (Cr on silica, used to polymerise ethene), Cr cycles between +2 and +3/+4 states during chain initiation and growth, producing high-density polyethylene (HDPE) without the need for aluminium co-catalysts.',
            extension: 'Spin crossover complexes of Cr and Fe can reversibly switch between high-spin and low-spin states in response to temperature, pressure, or light — a property exploited in molecular memory devices and sensors. The ability to tune the energy gap between spin states by varying the ligand field strength (spectrochemical series) is at the heart of inorganic materials design.',
            helper: 'Fill subshells in order: 1s 2s 2p 3s 3p 4s 3d… Anomalies: Cr [Ar]3d⁵4s¹ and Cu [Ar]3d¹⁰4s¹. To form ion: remove 4s electrons first, then 3d.'
        };
    }

    static generateAtomicStructureDiagramchem101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Medical Isotopes: Technetium-99m in Nuclear Medicine',
            problem: 'Technetium-99m (⁹⁹ᵐTc, Z = 43) is the most widely used radioisotope in diagnostic nuclear medicine. Draw a nuclear notation diagram for ⁹⁹Tc and state the number of protons, neutrons, and electrons in a neutral atom and in a Tc⁺ ion. Explain what the \'m\' in 99m signifies.',
            parameters: {
                element: 'technetium',
                symbol: 'Tc',
                atomicNumber: 43,
                massNumber: 99,
                protons: 43,
                neutrons: 56,
                electronsNeutral: 43,
                metastableIsomer: true,
                halfLifeTc99m: '6.02 hours',
                emission: 'gamma ray (140 keV)',
                medicalUse: 'bone scans, cardiac imaging, sentinel lymph node biopsy'
            },
            type: 'atomic_structure_diagram',
            context: 'Over 40 million nuclear medicine procedures are performed annually worldwide, the majority using ⁹⁹ᵐTc. It decays by gamma emission (140 keV) — ideal for detection by gamma camera — with minimal beta emission, reducing patient radiation dose. Its 6-hour half-life means activity drops to <4% in 24 hours, limiting patient exposure. It is produced in hospitals from a molybdenum-99 generator.',
            application: 'Nuclear notation: ⁹⁹₄₃Tc. Protons = 43 (atomic number). Mass number = 99 = protons + neutrons → neutrons = 99 − 43 = 56. Neutral atom: 43 electrons. Tc⁺ ion: 42 electrons (lost one electron). The \'m\' denotes a metastable nuclear isomer — the nucleus is in an excited (higher energy) state and decays to ground-state ⁹⁹Tc by emitting a gamma photon (not by changing proton or neutron number). ⁹⁹ᵐTc and ⁹⁹Tc are isomers: same mass number, same atomic number, different nuclear energy states.',
            question: 'A hospital generator initially contains 4.00 GBq of ⁹⁹ᵐTc (t½ = 6.02 h). Calculate the activity remaining after 18 hours and explain why the generator must be replaced or re-eluted regularly.',
            answer: 'Number of half-lives in 18 h = 18 ÷ 6.02 ≈ 2.99 ≈ 3. Activity = A₀ × (½)³ = 4.00 × (1/8) = 0.500 GBq. After 18 hours, only 12.5% of the initial activity remains — insufficient for clinical imaging (typically need >1 GBq per scan). The ⁹⁹Mo parent (t½ = 66 h) continues to decay, producing fresh ⁹⁹ᵐTc, so the generator can be re-eluted daily. After approximately one week the ⁹⁹Mo activity itself has fallen to <10% and the generator is replaced.',
            extension: 'The Bateman equations describe radioactive parent–daughter ingrowth: for a ⁹⁹Mo/⁹⁹ᵐTc generator, the daughter activity grows from zero after elution, reaches a transient equilibrium (daughter activity slightly exceeds parent), then declines together with the parent. This transient equilibrium (λ_daughter > λ_parent) is distinct from secular equilibrium (λ_daughter >> λ_parent) seen in long-lived parents like Ra-226/Rn-222.',
            helper: 'Mass number = protons + neutrons; atomic number = protons = electrons (neutral atom); ion: adjust electron count by charge; A = A₀(½)^(t/t½).',
            diagramInfo: {
                type: 'atomicStructure',
                registryKey: 'technetiumNuclearNotation',
                renderOptions: {
                    title: 'Technetium-99m: Nuclear Notation & Structure',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 900, height: 700 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new ChemistryDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `technetium_atomic_structure_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }


    // ════════════════════════════════════════════════════════════════════════
    // BIOLOGY PROBLEM GENERATORS
    // ════════════════════════════════════════════════════════════════════════

    static generateCellDivisionbio101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Cancer Biology: Uncontrolled Mitosis in Tumour Formation',
            problem: 'Describe, with reference to chromosome behaviour, what happens during prophase, metaphase, anaphase, and telophase of mitosis. Explain how a failure in the spindle assembly checkpoint during metaphase can lead to aneuploidy and tumour formation.',
            parameters: {
                divisionType: 'mitosis',
                stages: ['prophase', 'metaphase', 'anaphase', 'telophase'],
                chromosomeNumber: 46,
                checkpointFailed: 'spindle assembly checkpoint (SAC)',
                resultOfFailure: 'aneuploidy',
                clinicalLink: 'tumour formation / chromosomal instability'
            },
            type: 'cell_division',
            context: 'Mitosis produces genetically identical daughter cells for growth and repair. Precise chromosome segregation depends on the spindle assembly checkpoint (SAC), which delays anaphase until every kinetochore is correctly attached to spindle fibres from opposite poles (amphitelic attachment). Failure of the SAC is observed in ~90% of solid tumours and contributes to chromosomal instability (CIN) — a hallmark of cancer.',
            application: 'Prophase: chromatin condenses into visible chromosomes (each consisting of two sister chromatids joined at centromere); nuclear envelope breaks down; spindle forms from centrioles. Metaphase: chromosomes align at the metaphase plate; spindle fibres attach to kinetochores. The SAC monitors kinetochore–microtubule attachment; it signals "wait" until every pair is correctly amphitelically attached. Anaphase: cohesins cleaved; sister chromatids pulled to opposite poles by shortening spindle fibres. Telophase: chromosomes decondense; nuclear envelopes re-form around each set; cytokinesis follows.',
            question: 'Colchicine inhibits tubulin polymerisation, preventing spindle formation. Explain why colchicine arrests cells in metaphase and suggest why colchicine-based drugs (colcemid) are used in cancer chemotherapy and in preparing karyotypes.',
            answer: 'Without spindle fibres, kinetochores remain unattached. The SAC continuously generates a "wait" signal (via the mitotic checkpoint complex, MCC), preventing the anaphase-promoting complex/cyclosome (APC/C) from ubiquitinating securin and cyclin B. Anaphase cannot proceed — cells arrest in metaphase. In chemotherapy: rapidly dividing cancer cells spend more time in mitosis and are therefore disproportionately killed by mitotic arrest, leading to apoptosis (mitotic catastrophe). In karyotyping: colcemid-arrested metaphase cells provide maximally condensed, individually distinct chromosomes that can be spread, stained (G-banding), and counted — ideal for detecting numerical or structural aberrations.',
            extension: 'Taxol (paclitaxel) stabilises polymerised microtubules rather than preventing polymerisation. Both colchicine and taxol arrest mitosis but by opposite mechanisms — both exploit the SAC\'s sensitivity to any deviation from correct spindle dynamics. The aurora kinase inhibitors represent a newer class targeting SAC signalling components directly.',
            helper: 'PMAT: Prophase — condense; Metaphase — middle; Anaphase — apart; Telophase — two nuclei. SAC checks kinetochore attachment before allowing anaphase.',
            diagramInfo: {
                type: 'cellDivision',
                registryKey: 'mitosisStageDiagram',
                renderOptions: {
                    title: 'Stages of Mitosis with Chromosome Behaviour',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1200, height: 800 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new BiologyDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `mitosis_stages_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateCellStructureDiagrambio101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Electron Microscopy: Comparing Prokaryotic and Eukaryotic Cells',
            problem: 'Using labelled diagrams, compare the ultrastructure of a typical animal cell, a plant cell, and a bacterial cell. For each organelle identified, state its function and explain why bacterial cells lack membrane-bound organelles.',
            parameters: {
                cellTypes: ['animal cell', 'plant cell', 'bacterial cell (prokaryote)'],
                animalOrganelles: ['nucleus', 'mitochondria', 'rough ER', 'smooth ER', 'Golgi apparatus', 'lysosomes', 'ribosomes (80S)', 'cell membrane'],
                plantOnlyOrganelles: ['cell wall (cellulose)', 'chloroplasts', 'central vacuole', 'plasmodesmata'],
                bacterialFeatures: ['nucleoid', '70S ribosomes', 'cell wall (peptidoglycan)', 'plasmid', 'pili', 'flagellum'],
                scalingMagnification: 'electron microscope (×10,000–×100,000)'
            },
            type: 'cell_structure_diagram',
            context: 'Electron microscopy (transmission and scanning) revealed ultrastructure invisible to light microscopy. The endosymbiotic theory (Lynn Margulis) proposes that mitochondria and chloroplasts arose from prokaryotic ancestors engulfed by a host cell — supported by their double membranes, 70S ribosomes, and circular DNA. This theory transformed our understanding of eukaryotic evolution.',
            application: 'Nucleus (double membrane, pores): stores DNA, controls gene expression. Mitochondria (double membrane, cristae): ATP synthesis via oxidative phosphorylation. Rough ER (ribosome-studded): protein synthesis and folding. Golgi apparatus (stack of cisternae): post-translational modification and vesicle packaging. Chloroplasts (thylakoid membranes, stroma): photosynthesis. Bacterial cells lack membrane-bound organelles because they diverged before the endosymbiotic events that gave eukaryotes their compartmentalised structure — their smaller genome and simpler metabolism do not require the functional compartmentalisation that organelles provide.',
            question: 'A student views a cell under a light microscope and observes: a large central vacuole, a cell wall, and green organelles. They cannot see any ribosomes. Identify the cell type, explain why ribosomes are not visible, and calculate the actual size of a chloroplast that appears 12 mm long under a magnification of ×5,000.',
            answer: 'Plant cell — large central vacuole, cellulose cell wall, and chloroplasts are diagnostic features of plant cells. Ribosomes (diameter ~20 nm) are far below the resolution limit of a light microscope (~200 nm); only electron microscopy can resolve them. Actual size = image size ÷ magnification = 12 mm ÷ 5,000 = 0.0024 mm = 2.4 μm. (Typical chloroplast length 4–8 μm, so 2.4 μm is somewhat small but plausible for a thin cross-section.)',
            extension: 'Cryo-electron tomography (cryo-ET) now allows three-dimensional reconstruction of organelles at near-atomic resolution within intact, vitrified cells — without chemical fixation or staining artefacts. This technique has revealed the dynamic architecture of the nuclear pore complex, mitochondrial cristae, and cytoskeletal networks in situ, transforming structural cell biology.',
            helper: 'Magnification = image size ÷ actual size; actual size = image ÷ magnification. Convert units consistently (mm → μm: × 1000). Prokaryote features: no nucleus, 70S ribosomes, peptidoglycan wall.',
            diagramInfo: {
                type: 'cellStructure',
                registryKey: 'cellUltrastructureComparison',
                renderOptions: {
                    title: 'Animal, Plant & Bacterial Cell Ultrastructure',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1200, height: 900 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new BiologyDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `cell_ultrastructure_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateMendelianGeneticsbio101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Sickle-Cell Disease: Codominance and Heterozygote Advantage',
            problem: 'Sickle-cell disease is caused by a recessive allele (Hbˢ). The normal allele is HbA. Heterozygotes (HbA Hbˢ) show codominance — they produce both normal and sickle haemoglobin. Construct a Punnett square for a cross between two heterozygous parents and calculate the expected phenotypic ratio. Explain why the Hbˢ allele is maintained at high frequency in malaria-endemic regions.',
            parameters: {
                allele1: 'HbA (normal haemoglobin)',
                allele2: 'Hbˢ (sickle haemoglobin)',
                inheritancePattern: 'codominance / incomplete dominance',
                parentGenotypes: ['HbA Hbˢ', 'HbA Hbˢ'],
                expectedRatio: '1 HbA HbA : 2 HbA Hbˢ : 1 Hbˢ Hbˢ',
                heterozygoteAdvantage: 'resistance to Plasmodium falciparum malaria'
            },
            type: 'mendelian_genetics',
            context: 'Sickle-cell disease arises from a single nucleotide substitution (A→T at codon 6 of the HBB gene), replacing glutamate with valine in the β-globin chain. In heterozygotes, sickling in low-oxygen environments ruptures red blood cells, which are hostile to Plasmodium. This balancing selection maintains the Hbˢ allele at ~20–30% frequency in sub-Saharan Africa — a textbook example of heterozygote advantage.',
            application: 'Punnett square (HbA Hbˢ × HbA Hbˢ): HbA HbA (25%) — unaffected; HbA Hbˢ (50%) — sickle-cell trait (carrier, codominant phenotype: both types of Hb present); Hbˢ Hbˢ (25%) — sickle-cell disease. Phenotypic ratio 1:2:1. Heterozygote advantage: sickle-cell trait carriers have higher fitness in malaria-endemic environments than either homozygote (HbA HbA more susceptible to malaria; Hbˢ Hbˢ die early of sickle-cell disease). This balancing selection prevents allele elimination.',
            question: 'If two carriers (HbA Hbˢ) have four children, calculate the probability that exactly two children will be unaffected (HbA HbA). State the rule of probability you are applying.',
            answer: 'P(HbA HbA per child) = 0.25. Using the binomial probability rule: P(exactly 2 out of 4) = C(4,2) × (0.25)² × (0.75)² = 6 × 0.0625 × 0.5625 = 6 × 0.03516 = 0.2109 ≈ 21.1%. Rule applied: the product rule (independent events) combined with the binomial theorem, because each birth is an independent event and we are choosing a specific number of successes from a fixed number of trials.',
            extension: 'Gene therapy trials for sickle-cell disease (e.g. using lentiviral vectors or CRISPR-Cas9 to re-activate foetal haemoglobin production by silencing BCL11A) represent the frontier of curative treatment. The 2023 FDA approval of Casgevy (exa-cel, a CRISPR-based therapy) for sickle-cell disease marked the first regulatory approval of a CRISPR medicine.',
            helper: 'Codominance: both alleles expressed simultaneously in heterozygote. Punnett square: list parental gametes on each axis, fill in offspring genotypes. Binomial probability: C(n,k) × p^k × (1−p)^(n−k).',
            diagramInfo: {
                type: 'geneticsCross',
                registryKey: 'sickleCellPunnettSquare',
                renderOptions: {
                    title: 'Sickle-Cell Trait: Codominant Inheritance Punnett Square',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 900, height: 800 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new BiologyDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `sickle_cell_genetics_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateTranslationDiagrambio101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Antibiotic Resistance: How Streptomycin Disrupts Bacterial Translation',
            problem: 'Describe the process of translation at a bacterial 70S ribosome, identifying the roles of the A, P, and E sites, codons, anticodons, and peptidyl transferase. Explain why streptomycin kills bacteria by targeting the 30S ribosomal subunit but does not harm eukaryotic cells at therapeutic doses.',
            parameters: {
                ribosomeType: '70S (30S + 50S subunits)',
                mRNADirection: '5\' to 3\'',
                initiationCodon: 'AUG (methionine)',
                sites: ['A site (aminoacyl)', 'P site (peptidyl)', 'E site (exit)'],
                antibiotic: 'streptomycin',
                targetSubunit: '30S',
                mechanism: 'misreading of mRNA codons → mistranslation → non-functional proteins',
                selectivityReason: 'eukaryotes have 80S ribosomes (40S + 60S) — different 30S target structure'
            },
            type: 'translation_diagram',
            context: 'Streptomycin was the first antibiotic effective against tuberculosis (Mycobacterium tuberculosis). It binds to the 16S rRNA of the 30S subunit, causing conformational changes that increase misreading errors during decoding — incorporating wrong amino acids, producing dysfunctional proteins, and ultimately disrupting membrane integrity. Resistance arises via mutations to rpsL (encoding ribosomal protein S12) or 16S rRNA methylation.',
            application: 'Translation: mRNA (5′→3′) threads through ribosome. Initiator tRNA (carrying Met) enters P site, anticodon base-pairs with AUG. Next charged tRNA enters A site (anticodon pairs with next codon). Peptidyl transferase (23S rRNA ribozyme) catalyses peptide bond formation, transferring growing chain to tRNA in A site. Translocation: ribosome moves 3 nucleotides in 3′ direction — A→P, P→E, E site tRNA exits. Repeat until stop codon (UAA/UAG/UGA) — no tRNA match — release factor causes polypeptide release. Streptomycin: binds 16S rRNA near decoding centre, distorts A-site, causes near-cognate tRNA acceptance → mistranslation. Eukaryotic 40S subunit has a different 18S rRNA structure — streptomycin does not bind with sufficient affinity to cause toxicity at therapeutic concentrations.',
            question: 'A mutation in the rpsL gene changes a lysine (AAA) codon in the S12 protein to an arginine (AGA) codon. Identify the anticodon of the tRNA that normally delivers lysine. Explain whether this point mutation is a transition or transversion and why rpsL mutations confer streptomycin resistance.',
            answer: 'Codon for Lys: 5\'-AAA-3\'. tRNA anticodon (antiparallel, complementary, 3\'→5\' on tRNA): 3\'-UUU-5\', written conventionally as 5\'-UUU-3\'. Mutation AAA → AGA: A→G at second position. Both A and G are purines — this is a transition (purine → purine). Resistance: the rpsL protein S12 stabilises ribosome fidelity; the Lys→Arg change in S12 alters the 30S conformation at the streptomycin binding site, reducing drug affinity. The mutant ribosome is not bound by streptomycin and so misreading is not induced — the cell survives. Interestingly, some rpsL mutations cause hyperaccurate ribosomes (lower basal error rate than wild-type).',
            extension: 'Ribosome profiling (Ribo-seq) maps ribosome positions on every mRNA genome-wide with codon-level resolution. By treating cells with streptomycin and performing Ribo-seq, researchers can identify which codons are most susceptible to misreading — linking antibiotic mechanism to translational error hotspots across the entire translatome.',
            helper: 'Anticodon is complementary and antiparallel to codon; A pairs with U, G pairs with C. Transition: purine↔purine or pyrimidine↔pyrimidine. Transversion: purine↔pyrimidine.',
            diagramInfo: {
                type: 'translation',
                registryKey: 'bacterialRibosomeTranslation',
                renderOptions: {
                    title: 'Bacterial Translation: 70S Ribosome & Streptomycin Target',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1200, height: 900 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new BiologyDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `translation_diagram_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateEcosystemsbio101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Yellowstone Wolf Reintroduction: Trophic Cascades and Ecosystem Recovery',
            problem: 'Grey wolves were reintroduced to Yellowstone National Park in 1995. Construct a food web with at least four trophic levels and use it to explain the trophic cascade that followed wolf reintroduction, including changes to plant biomass, elk populations, and river morphology.',
            parameters: {
                ecosystem: 'Yellowstone National Park temperate forest',
                keystone: 'grey wolf (Canis lupus)',
                trophicLevels: 4,
                foodWebSpecies: ['grasses & willows', 'elk', 'beaver', 'grey wolf', 'coyote', 'rabbit', 'hawk'],
                cascadeType: 'trophic cascade (top-down control)',
                riverEffect: 'trophodynamic geomorphology — riverbank stabilisation'
            },
            type: 'ecosystems',
            context: 'The 70-year absence of wolves from Yellowstone led to elk overgrazing riparian vegetation. Wolf reintroduction triggered a cascade: reduced elk numbers and changed elk behaviour (avoiding river valleys) → vegetation recovery → beaver return → dam construction → river channel narrowing and stabilisation. This is one of the most studied examples of a trophic cascade and keystone predator effect.',
            application: 'Food web: grasses/willows → elk → wolf; grasses → rabbit → coyote → wolf; hawk feeds on rabbit/coyote. Trophic cascade: wolves (top predator) suppress elk (herbivore, trophic level 2). Elk avoid grazing in open river valleys (landscape of fear). Willows and aspens recover along riverbanks (trophic level 1). Beavers (dependent on willows) return — their dams slow water flow, raise water table, create wetland habitats. Increased vegetation roots stabilise river banks — channels narrow and meander less. Biodiversity increases at all levels.',
            question: 'Using the 10% energy transfer rule, calculate the energy available to wolves (trophic level 3) if the total plant productivity (trophic level 1) in the study area is 10⁶ kJ per year. Show your working. State two reasons why the actual energy available to wolves would be less than this calculated value.',
            answer: 'TL1 → TL2 (elk): 10⁶ × 0.10 = 10⁵ kJ. TL2 → TL3 (wolf): 10⁵ × 0.10 = 10⁴ kJ. Actual energy available to wolves would be less because: (1) not all elk are eaten by wolves — some die from other causes, some energy is lost in faeces, urine, and undigested material that is never assimilated; (2) the 10% rule is an average — actual ecological efficiency varies (typically 5–20%) depending on organism type, food quality, and environmental conditions. Also: energy is lost as heat in cellular respiration at every trophic level.',
            extension: 'Rewilding — the large-scale restoration of ecosystems through the reintroduction of keystone species — is increasingly advocated as a climate change mitigation strategy. Restored predator–prey dynamics can increase carbon sequestration: wolf → elk → riparian vegetation recovery → increased above- and below-ground carbon storage. This "trophic rewilding" approach is being trialled in European projects involving lynx, brown bear, and bison reintroduction.',
            helper: '10% energy transfer: multiply by 0.10 at each trophic level. Food web: arrows point from prey to predator (direction of energy flow). Trophic cascade: top-down regulation of ecosystem by predator.',
            diagramInfo: {
                type: 'foodWeb',
                registryKey: 'yellowstoneFoodWeb',
                renderOptions: {
                    title: 'Yellowstone Food Web: Trophic Cascade',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1200, height: 900 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new BiologyDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `yellowstone_food_web_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateNervousSystembio101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Myasthenia Gravis: Autoimmune Attack on the Neuromuscular Junction',
            problem: 'Describe synaptic transmission at the neuromuscular junction (NMJ), from the arrival of an action potential to muscle contraction. Explain the pathophysiology of myasthenia gravis and why acetylcholinesterase inhibitors improve symptoms.',
            parameters: {
                synapse: 'neuromuscular junction (NMJ)',
                neurotransmitter: 'acetylcholine (ACh)',
                receptor: 'nicotinic acetylcholine receptor (nAChR)',
                disease: 'myasthenia gravis',
                mechanism: 'autoantibodies against nAChR reduce receptor density',
                treatment: 'acetylcholinesterase (AChE) inhibitor e.g. neostigmine',
                enzyme: 'acetylcholinesterase (AChE)'
            },
            type: 'nervous_system',
            context: 'Myasthenia gravis (MG) is an autoimmune disease in which IgG antibodies target nAChRs at the NMJ, reducing their number by receptor internalisation and complement-mediated destruction. The result is progressive muscle weakness worsened by exertion. Understanding synaptic transmission at the NMJ is directly applicable to explaining both the disease mechanism and its treatment.',
            application: 'Normal NMJ transmission: action potential arrives at motor neurone terminal → voltage-gated Ca²⁺ channels open → Ca²⁺ influx → vesicles fuse with pre-synaptic membrane → ACh released by exocytosis → ACh diffuses across synaptic cleft → binds nAChRs on motor end-plate → Na⁺ influx → end-plate potential (EPP) → depolarisation triggers muscle action potential → muscle contracts. AChE in cleft rapidly hydrolyses ACh → acetate + choline → reuptake and resynthesis. In MG: fewer functional nAChRs → EPP below threshold → muscle fails to contract. AChE inhibitors (neostigmine) block ACh hydrolysis → ACh accumulates in cleft → longer binding time → more receptors activated despite reduced receptor number → stronger EPP → symptom improvement.',
            question: 'A patient with MG is given neostigmine (an AChE inhibitor). After treatment, their muscle strength improves but they develop excessive salivation, bradycardia, and miosis. Using your knowledge of the autonomic nervous system, explain these side effects.',
            answer: 'Neostigmine inhibits AChE throughout the body, not only at NMJs. ACh is also the neurotransmitter at all parasympathetic postganglionic synapses (muscarinic receptors). Accumulation of ACh at muscarinic receptors in salivary glands causes excessive salivation; in the sinoatrial node it causes bradycardia (reduced heart rate); in the iris sphincter muscle it causes miosis (pupil constriction). These are SLUDGE effects (Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis) — classic parasympathomimetic symptoms. Atropine (a muscarinic antagonist) can be co-administered to block these peripheral side effects while leaving the NMJ (nicotinic) effects intact.',
            extension: 'The discovery that the electric organ of Torpedo californica (a ray) is a rich source of nAChRs enabled biochemical characterisation of the receptor before molecular cloning was possible. Torpedo nAChR was the first ion channel to be purified and reconstituted — a landmark in membrane biochemistry that underpinned decades of subsequent ion channel research and drug discovery.',
            helper: 'NMJ: Ca²⁺ triggers ACh exocytosis; ACh binds nAChR; Na⁺ in → depolarisation → muscle action potential. AChE breaks down ACh. MG: fewer receptors → weaker EPP.',
            diagramInfo: {
                type: 'synapse',
                registryKey: 'neuromuscularJunctionDiagram',
                renderOptions: {
                    title: 'Neuromuscular Junction: Normal Transmission & Myasthenia Gravis',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1000, height: 900 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new BiologyDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `nmj_nervous_system_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateExcretorySystemDiagrambio101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Diabetes Insipidus: Disrupted Osmoregulation in the Nephron',
            problem: 'Trace the journey of water and solutes through a nephron from the glomerulus to the collecting duct, identifying the processes of ultrafiltration, selective reabsorption, and tubular secretion. Explain how ADH controls water reabsorption and why a deficiency of ADH (or its receptor) causes diabetes insipidus.',
            parameters: {
                organ: 'kidney',
                structure: 'nephron',
                regions: ['Bowman\'s capsule', 'proximal convoluted tubule', 'loop of Henle', 'distal convoluted tubule', 'collecting duct'],
                hormone: 'ADH (antidiuretic hormone / vasopressin)',
                hormoneTarget: 'V2 receptor on collecting duct principal cells',
                mechanism: 'aquaporin-2 insertion → increased water permeability',
                disease: 'diabetes insipidus',
                symptom: 'polyuria (up to 20 L/day), polydipsia'
            },
            type: 'excretory_system_diagram',
            context: 'Diabetes insipidus (DI) is caused either by insufficient ADH secretion from the posterior pituitary (central DI) or by renal unresponsiveness to ADH (nephrogenic DI, often due to mutations in the V2 receptor or aquaporin-2 gene). The result is failure to concentrate urine, leading to massive dilute urine output. It is distinct from diabetes mellitus, which involves insulin and glucose.',
            application: 'Glomerulus/Bowman\'s capsule: ultrafiltration — size- and charge-selective; proteins and cells remain in blood. PCT: selective reabsorption of ~65% filtered water, all glucose, amino acids (co-transport with Na⁺), urea (partial). Loop of Henle: countercurrent multiplier creates medullary osmotic gradient (up to ~1200 mOsm in inner medulla). Ascending limb: impermeable to water, actively pumps Na⁺/K⁺/Cl⁻ out — dilutes tubular fluid. DCT: fine-tuning of Na⁺ and K⁺. Collecting duct: ADH binds V2R → cAMP → PKA → phosphorylation → aquaporin-2 vesicles fuse with apical membrane → water follows osmotic gradient into medullary interstitium → into vasa recta → excreted in concentrated urine. Without ADH: aquaporin-2 not inserted → collecting duct impermeable to water → dilute, copious urine (DI).',
            question: 'Explain why glucose is not normally found in urine but appears in the urine of individuals with uncontrolled type 2 diabetes mellitus. Name the mechanism and the transporter responsible for glucose reabsorption in the PCT.',
            answer: 'Glucose is freely filtered at the glomerulus (low molecular mass, uncharged). It is normally completely reabsorbed in the PCT by SGLT2 (sodium-glucose cotransporter 2) on the apical membrane, driven by the Na⁺ gradient maintained by Na⁺/K⁺-ATPase on the basolateral membrane (secondary active transport). The transport maximum (Tm) for glucose reabsorption is approximately 11 mmol L⁻¹ plasma glucose. In uncontrolled type 2 diabetes, blood glucose exceeds this Tm (renal threshold) — the tubular carriers are saturated — and glucose remains in the filtrate, appearing in urine (glucosuria). SGLT2 inhibitors (gliflozins) deliberately exploit this threshold as a diabetes treatment, blocking glucose reabsorption to promote urinary glucose excretion.',
            extension: 'Aquaporin-2 (AQP2) trafficking is regulated by ubiquitination and phosphorylation — a paradigm for regulated transporter trafficking. AQP2 mutations cause autosomal recessive nephrogenic DI. The drug dDAVP (desmopressin, a synthetic ADH analogue) treats central DI by replacing the missing hormone; nephrogenic DI is treated with thiazide diuretics and low-sodium diet (paradoxically reducing urine output by reducing ECF volume).',
            helper: 'Ultrafiltration at glomerulus (size/pressure); reabsorption in PCT (most), loop (gradient), collecting duct (ADH-regulated). ADH → aquaporins → water reabsorption → concentrated urine.',
            diagramInfo: {
                type: 'nephron',
                registryKey: 'nephronOsmoregulation',
                renderOptions: {
                    title: 'Nephron Structure: Ultrafiltration to Collecting Duct',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1000, height: 1000 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new BiologyDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `nephron_excretory_system_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generatePlantStructurebio101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Drought Adaptation: Xerophyte Anatomy and Water Conservation',
            problem: 'Draw and annotate a transverse section of a mesophyte leaf and a xerophyte leaf (e.g. Marram grass). Identify the tissue adaptations in the xerophyte that reduce water loss, linking each adaptation to its mechanism of action.',
            parameters: {
                mesophyte: 'typical dicot leaf',
                xerophyte: 'Marram grass (Ammophila arenaria)',
                keyTissues: ['epidermis', 'palisade mesophyll', 'spongy mesophyll', 'xylem', 'phloem', 'guard cells', 'stomata'],
                xerophyteAdaptations: ['rolled leaf', 'sunken stomata in pits', 'thick waxy cuticle', 'hinge cells', 'dense leaf hairs (trichomes)', 'reduced surface area:volume ratio'],
                transpirationPath: 'stomata → sub-stomatal air space → mesophyll → xylem'
            },
            type: 'plant_structure',
            context: 'Marram grass colonises sand dunes — an extreme xeric environment with high wind, high light intensity, low humidity, and low soil water availability. Its leaves roll inward in dry conditions, trapping a humid microclimate around the sunken stomata, drastically reducing the water vapour concentration gradient and thus transpiration rate.',
            application: 'Rolled leaf: reduces the external surface area exposed to dry air; traps a humid boundary layer. Sunken stomata (in crypts/pits): the stagnant humid air in pits reduces the water vapour concentration gradient between leaf interior and atmosphere — transpiration slows. Thick waxy cuticle: impermeability reduces cuticular transpiration. Hinge cells (bulliform cells): large, thin-walled epidermal cells in upper epidermis that lose turgor in drought → leaf rolls inward automatically (passive hydraulic mechanism). Dense trichomes: further trap humid air; reflect intense sunlight reducing temperature and thus leaf-to-air vapour pressure deficit. Reduced S:V: less total surface area per unit volume of photosynthetic tissue.',
            question: 'Explain how the opening and closing of stomata in a mesophyte is controlled by guard cell turgor pressure. Include the role of K⁺ ions, aquaporins, and the signal transduction pathway triggered by abscisic acid (ABA) during water stress.',
            answer: 'Opening: blue light and low CO₂ activate H⁺-ATPases (proton pumps) in guard cell plasma membrane → proton export → hyperpolarisation → K⁺ influx through inward-rectifying K⁺ channels (KAT1/KAT2) → increased solute concentration → water enters by osmosis through aquaporins → guard cells swell → stomata open. Closing (ABA pathway): water stress → ABA accumulates → ABA binds PYR/PYL receptor → inhibits PP2C phosphatases → activates SnRK2 kinases → phosphorylate and open SLAC1 anion channels → Cl⁻ and malate²⁻ exit → depolarisation activates outward K⁺ channels → K⁺ exits → guard cell loses solute → water exits by osmosis → turgor decreases → stomata close.',
            extension: 'The discovery of the PYR/PYL-PP2C-SnRK2 ABA signalling module (complete by ~2009–2010) provided the molecular framework for engineering drought-tolerant crops. Overexpression of DREB/CBF transcription factors or manipulation of ABA sensitivity (via modified PYL receptors that are constitutively active) are active strategies in crop biotechnology for food security under climate change.',
            helper: 'Guard cells: K⁺ in → water in by osmosis → turgid → stoma opens. ABA triggers K⁺ out → water out → flaccid → stoma closes. Xerophyte adaptations reduce transpiration by reducing the vapour pressure gradient or surface area.',
            diagramInfo: {
                type: 'leafTransverseSection',
                registryKey: 'xerophyteLeafAnatomy',
                renderOptions: {
                    title: 'Mesophyte vs Xerophyte (Marram Grass) Leaf TS',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1200, height: 900 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new BiologyDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `xerophyte_leaf_structure_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateBacteriaDiagrambio101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Antibiotic Resistance: MRSA and Bacterial Cell Wall Structure',
            problem: 'Draw and label the ultrastructure of a typical Gram-positive bacterium such as Staphylococcus aureus. Explain how the thick peptidoglycan cell wall is targeted by β-lactam antibiotics (e.g. methicillin), and why MRSA is resistant to these drugs.',
            parameters: {
                organism: 'Staphylococcus aureus (Gram-positive)',
                resistantStrain: 'MRSA (methicillin-resistant S. aureus)',
                structures: ['plasma membrane', 'thick peptidoglycan layer', 'teichoic acids', 'nucleoid (circular chromosome)', 'plasmid', '70S ribosomes', 'flagellum (absent in S. aureus)', 'pili (absent in S. aureus)', 'capsule (some strains)'],
                antibioticMechanism: 'β-lactam ring binds penicillin-binding proteins (PBPs) → inhibits transpeptidation → weakened cross-linking → osmotic lysis',
                resistanceMechanism: 'mecA gene encodes PBP2a — low affinity for β-lactam antibiotics'
            },
            type: 'bacteria_diagram',
            context: 'MRSA causes an estimated 150,000 deaths annually in Europe. Resistance arose through horizontal gene transfer of the mecA gene (carried on the staphylococcal cassette chromosome mec, SCCmec). PBP2a continues cross-linking peptidoglycan even in the presence of β-lactams — conferring resistance to virtually all penicillins and cephalosporins. Vancomycin (a glycopeptide targeting the D-Ala-D-Ala terminus of peptidoglycan precursors) remains a treatment of last resort.',
            application: 'Gram-positive cell wall: 20–80 nm thick peptidoglycan layer (vs. 2–7 nm in Gram-negative) — retains crystal violet in Gram stain. Peptidoglycan: glycan strands of alternating N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM), cross-linked by short peptide bridges via transpeptidation reaction catalysed by PBPs. β-lactams: structural analogues of D-Ala-D-Ala dipeptide — irreversibly acylate PBP active site → transpeptidation blocked → peptidoglycan strands not cross-linked → wall weakened → osmotic pressure causes lysis. MRSA: mecA-encoded PBP2a has reduced affinity for β-lactam drugs — acts as backup transpeptidase, maintaining cell wall integrity.',
            question: 'Vancomycin resistance (VRE in enterococci; VRSA rarely in S. aureus) is mediated by VanA — an enzyme that replaces the D-Ala-D-Ala terminus of peptidoglycan precursors with D-Ala-D-Lac. Explain why this modification prevents vancomycin binding and suggest why vancomycin resistance emerged much later than methicillin resistance (methicillin introduced 1960; significant vancomycin resistance emerged ~1986–90s).',
            answer: 'Vancomycin binds the D-Ala-D-Ala terminus via five hydrogen bonds. Substitution of the terminal Ala with lactate (D-Lac) eliminates one critical hydrogen bond (the NH-CO interaction) — reducing binding affinity ~1,000-fold. Despite similar overall geometry, the carbonyl oxygen of D-Lac repels the vancomycin carbonyl rather than accepting a hydrogen bond. Vancomycin resistance emerged later because: (1) vancomycin was introduced later (1958, but widespread use post-MRSA, from ~1980s) — less selection pressure; (2) the van gene cluster is more complex (vanH, vanA, vanX, vanR, vanS — five co-regulated genes) — a higher genetic barrier to resistance than a single mecA gene; (3) van genes encode a complete alternative pathway that requires coordinate regulation, making spontaneous single-step resistance much rarer.',
            extension: 'The development of daptomycin (a lipopeptide that disrupts Gram-positive membranes by Ca²⁺-dependent insertion), linezolid (an oxazolidinone that binds the 23S rRNA of the 50S subunit, blocking initiation), and ceftaroline (a 5th-generation cephalosporin with activity against PBP2a) represents the multi-pronged pharmacological response to MRSA. Each targets a different bacterial vulnerability, illustrating rational antibiotic design guided by mechanistic understanding of resistance.',
            helper: 'Gram-positive: thick peptidoglycan + teichoic acids, no outer membrane. β-lactam: inhibits PBP transpeptidation → osmotic lysis. MRSA: PBP2a (mecA) → low β-lactam affinity → wall still cross-linked.',
            diagramInfo: {
                type: 'bacterialCell',
                registryKey: 'gramPositiveBacteriumDiagram',
                renderOptions: {
                    title: 'Gram-Positive Bacterium (S. aureus) Ultrastructure',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1000, height: 800 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new BiologyDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `bacteria_diagram_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generatePathogensbio101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Cholera: Hijacking the Chloride Channel',
            problem: 'Explain using membrane transport principles why the permanent opening of Cl⁻ channels causes water to flow into the intestinal lumen.',
            parameters: {
                pathogen: 'Vibrio cholerae',
                toxinTarget: 'CFTR chloride channel',
                mechanism: 'cAMP-PKA phosphorylation',
                transportType: 'facilitated diffusion',
                secondaryTransporter: 'SGLT1',
                clinicalApplication: 'Oral Rehydration Therapy'
            },
            type: 'pathogens',
            context: 'Vibrio cholerae produces cholera toxin, which permanently activates adenylyl cyclase in intestinal epithelial cells by ADP-ribosylating Gαs, massively elevating cAMP. This activates PKA, which phosphorylates and permanently opens CFTR chloride channels. Cl⁻ flows out of cells into the intestinal lumen; water follows by osmosis. The result is profuse watery diarrhoea — up to 20 litres per day.',
            application: 'CFTR opening causes Cl⁻ to move down its electrochemical gradient from cytoplasm to intestinal lumen (facilitated diffusion via channel — no ATP required). This increases the osmolarity of the intestinal lumen. Water then moves by osmosis from the lower-osmolarity intracellular and interstitial fluid into the higher-osmolarity lumen. The result is massive fluid loss.',
            question: 'Oral rehydration therapy (ORS) — a solution of glucose, sodium, and water — saves millions of lives from cholera annually. Using your knowledge of membrane transport, explain why adding glucose to the rehydration solution enhances sodium and water absorption.',
            answer: 'The Na⁺/glucose cotransporter (SGLT1) in intestinal epithelial cells is a secondary active transporter — it uses the Na⁺ electrochemical gradient (maintained by Na⁺/K⁺-ATPase) to co-transport Na⁺ and glucose together into the cell. Glucose in ORS activates SGLT1, driving Na⁺ absorption. Water follows Na⁺ osmotically. Critically, SGLT1 is not affected by cholera toxin — it remains functional even when CFTR is permanently open, allowing ORS to partially offset fluid loss.',
            extension: 'SGLT2 inhibitors (empagliflozin, dapagliflozin) are diabetes drugs that block glucose reabsorption in kidney proximal tubules, causing glucose excretion in urine. They exploit the same cotransporter family (SGLTs) in a different tissue — demonstrating how understanding a single membrane transport mechanism can yield multiple therapeutic applications across different organs.',
            helper: 'Facilitated diffusion requires no ATP — movement is down the electrochemical gradient via channel proteins; osmosis follows solute concentration gradients.'
        };
    }


    // ════════════════════════════════════════════════════════════════════════
    // PHYSICS PROBLEM GENERATORS
    // ════════════════════════════════════════════════════════════════════════

    static generateKinematicsphy101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Spacecraft Re-entry: Deceleration from Orbital Velocity',
            problem: 'A spacecraft re-enters the atmosphere at 7,800 m s⁻¹ and decelerates uniformly to 120 m s⁻¹ over a distance of 400 km. Calculate the deceleration and the time taken. Sketch the velocity–time graph and identify the area representing displacement.',
            parameters: {
                initialVelocity: 7800,
                finalVelocity: 120,
                displacement: 400000,
                units: 'm, s, m/s, m/s²',
                SUVATequation: 'v² = u² + 2as',
                graphType: 'velocity-time'
            },
            type: 'kinematics',
            context: 'During atmospheric re-entry, spacecraft convert enormous kinetic energy into heat via friction with the upper atmosphere. The deceleration is not uniform in reality (atmospheric density increases exponentially with decreasing altitude), but uniform deceleration is a standard examination model. Spacecraft re-enter at angles of 5–7° — too shallow causes skipping out; too steep causes overheating.',
            application: 'Using v² = u² + 2as: (120)² = (7800)² − 2a(400,000). 14,400 = 60,840,000 − 800,000a. 800,000a = 60,825,600. a = 76.0 m s⁻². Deceleration = 76.0 m s⁻² (magnitude). Time: v = u − at → 120 = 7800 − 76.0t → t = 7680 ÷ 76.0 = 101 s. V-t graph: straight line from (0, 7800) to (101, 120). Area under graph (trapezium) = displacement = ½(7800 + 120)(101) = ½ × 7920 × 101 = 399,960 ≈ 400,000 m ✓.',
            question: 'During the final approach at 120 m s⁻¹, parachutes deploy, providing an additional deceleration. If the spacecraft must reach 5 m s⁻¹ within 2,500 m, calculate the total deceleration required during parachute deployment. Compare this to g = 9.81 m s⁻² and comment on the physiological stress on any passengers.',
            answer: 'v² = u² + 2as: (5)² = (120)² − 2a(2500). 25 = 14,400 − 5000a. 5000a = 14,375. a = 2.875 m s⁻² ≈ 2.88 m s⁻². 2.88 ÷ 9.81 = 0.29g. This deceleration is less than g — physiologically trivial for passengers in a reclined position. (Note: the initial re-entry deceleration of 76 m s⁻² = 7.75g — at the upper limit of human tolerance for sustained g-forces; astronauts in supine position can tolerate ~8g transverse.)',
            extension: 'The Tsiolkovsky rocket equation (Δv = v_e × ln(m₀/m_f)) governs how much velocity change a rocket can achieve. Atmospheric re-entry does not require propellant — it exploits aerodynamic drag and gravity — but the heat generated requires thermal protection systems (TPS). The Space Shuttle used carbon-carbon composite leading edges and silica tiles, while modern capsules (Orion, Crew Dragon) use ablative heat shields where material vaporises, carrying heat away from the structure.',
            helper: 'SUVAT: v² = u² + 2as for distance without time; v = u + at for time. Area under v-t graph = displacement. Deceleration = negative acceleration magnitude.'
        };
    }

    static generateForcesAndNewtonsLawsphy101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Bridge Engineering: Resultant Forces on a Suspension Cable',
            problem: 'A suspension bridge cable supports a 2,400 kg traffic load at a point where the cable makes an angle of 18° with the horizontal on each side. Draw a free-body diagram showing all forces acting at this point, resolve forces, and calculate the tension in each cable segment.',
            parameters: {
                mass: 2400,
                g: 9.81,
                weight: 23544,
                cableAngle: 18,
                symmetrical: true,
                units: 'kg, N, degrees'
            },
            type: 'forces_and_newtons_laws',
            context: 'Suspension bridges support loads via cables in tension. The cable profile forms a catenary (under self-weight) or parabola (under uniform distributed load). At each point of load application, the cable tension is resolved into horizontal and vertical components. Civil engineers must calculate maximum cable tension to specify cable cross-section and material.',
            application: 'Weight W = mg = 2400 × 9.81 = 23,544 N (downward). By symmetry, each cable segment carries equal tension T. Vertical equilibrium: 2T sin18° = 23,544. T = 23,544 ÷ (2 × sin18°) = 23,544 ÷ (2 × 0.3090) = 23,544 ÷ 0.6180 = 38,098 N ≈ 38,100 N. Horizontal: T cos18° = T cos18° (equal and opposite — net horizontal force zero). Free-body diagram: point load, two cable tensions at 18° above horizontal on each side, weight downward.',
            question: 'If the same load is supported but the cable angle is reduced to 8° (a shallower cable), calculate the new tension. Explain why shallow suspension cables create much larger tensions and why there is a minimum practical cable sag ratio in bridge engineering.',
            answer: 'T = 23,544 ÷ (2 sin8°) = 23,544 ÷ (2 × 0.1392) = 23,544 ÷ 0.2783 = 84,600 N ≈ 84,600 N. At 8° the tension is 84,600/38,100 ≈ 2.2 times greater than at 18°. As angle → 0°, sin θ → 0, so T → ∞: an infinitely shallow cable would require infinite tension. This is why bridges have a minimum sag-to-span ratio (typically 1:8 to 1:10) — too shallow and cable tensions become impractically large, requiring excessively massive cables and anchorages. Engineers also allow for dynamic loads (wind, traffic — modelled via impact factors) which add to static tensions.',
            extension: 'The catenary curve y = a·cosh(x/a) describes the shape of a cable under its own weight. This differs from the parabola (under uniform distributed load) and the two coincide only approximately. The catenary was first solved mathematically by Leibniz, Huygens, and Johann Bernoulli in 1691 — a landmark in the history of calculus applied to physical problems.',
            helper: 'Resolve vertically: 2T sinθ = W; T = W ÷ (2 sinθ). Small angles give large tensions. Free-body: weight down, two tensions along cable directions.',
            diagramInfo: {
                type: 'freebody',
                registryKey: 'suspensionCableFBD',
                renderOptions: {
                    title: 'Suspension Cable Free-Body Diagram',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 900, height: 700 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new PhysicsDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `suspension_cable_fbd_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateEnergyWorkPowerphy101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Wind Turbine Efficiency: Betz Limit and Power Output',
            problem: 'A wind turbine with blade radius 45 m operates in wind of speed 12 m s⁻¹. Air density is 1.23 kg m⁻³. Calculate the maximum theoretical power available from the wind passing through the turbine disc and the actual power output if the turbine\'s efficiency is 42%.',
            parameters: {
                bladeRadius: 45,
                windSpeed: 12,
                airDensity: 1.23,
                efficiency: 0.42,
                betzLimit: 0.593,
                units: 'm, m/s, kg/m³, W'
            },
            type: 'energy_work_power',
            context: 'Wind turbines extract kinetic energy from moving air. The Betz limit (1919) proves that no turbine can extract more than 59.3% of the wind\'s kinetic energy — because the wind behind the turbine must still be moving (to carry mass away) and cannot be completely stopped. Modern turbines achieve 45–50% of total available wind power, approaching the Betz limit.',
            application: 'Cross-sectional area A = πr² = π × 45² = 6,362 m². Mass flow rate ṁ = ρAv = 1.23 × 6,362 × 12 = 93,866 kg s⁻¹. Power in wind = ½ṁv² = ½ × 93,866 × 144 = 6,758,352 W ≈ 6.76 MW. This is the total kinetic energy flux through the disc. Actual output = 6.76 × 0.42 = 2.84 MW. (Note: Betz limit gives maximum extractable = 6.76 × 0.593 = 4.01 MW; a real turbine at 42% is operating at 42/59.3 = 70.8% of the Betz limit — a realistic figure for modern turbines.)',
            question: 'The wind speed doubles from 12 m s⁻¹ to 24 m s⁻¹. Calculate the new power output (assuming same efficiency) and explain why the relationship between wind speed and power output makes consistent wind speed critical for turbine siting.',
            answer: 'P ∝ v³ (since P = ½ρAv³). Doubling v multiplies P by 2³ = 8. New power = 2.84 × 8 = 22.7 MW. The cubic relationship means that small increases in average wind speed give large increases in energy yield — a site with average wind speed 25% higher produces (1.25)³ = 1.95× the energy of a slower site with otherwise identical turbines. This explains why offshore and elevated sites command premium value: consistent high wind speeds have an outsized effect on annual energy output. Wind speed variability (intermittency) is also important: the mean of v³ ≠ (mean of v)³, so the actual energy yield must integrate the power curve over the wind speed distribution (Weibull distribution in practice).',
            extension: 'The power coefficient Cp is the fraction of wind power extracted, defined as P_extracted ÷ P_wind = P/(½ρAv³). Betz showed that Cp,max = 16/27 ≈ 0.593. Modern turbines publish Cp curves as a function of tip-speed ratio (TSR = blade-tip speed ÷ wind speed) — peak Cp typically occurs at TSR ≈ 6–9. Blade pitch control and variable-speed generators allow turbines to maintain optimal TSR across a range of wind speeds.',
            helper: 'P_wind = ½ρAv³; A = πr². Efficiency = useful output ÷ total input. Power scales as v³ — doubling speed → 8× power.'
        };
    }

    static generateWavesAndPropertiesphy101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Medical Ultrasound: Frequency, Resolution, and Tissue Penetration',
            problem: 'An ultrasound probe operates at 5 MHz. The speed of sound in soft tissue is 1,540 m s⁻¹. Calculate the wavelength. Explain why higher frequencies give better image resolution but poorer penetration depth, and sketch one complete longitudinal wave indicating compression and rarefaction.',
            parameters: {
                frequency: 5e6,
                speedInTissue: 1540,
                wavelength: 3.08e-4,
                units: 'Hz, m/s, m',
                waveType: 'longitudinal',
                application: 'diagnostic medical ultrasound'
            },
            type: 'waves_and_properties',
            context: 'Medical ultrasound uses frequencies of 2–15 MHz. The spatial resolution of an ultrasound image is approximately equal to the wavelength — shorter wavelengths (higher frequencies) resolve finer structures. However, higher-frequency waves are more strongly attenuated by tissue (attenuation ∝ frequency) — they do not penetrate as deeply. Clinicians choose frequency based on depth of target: 15 MHz for superficial structures (thyroid, carotid), 3 MHz for deep abdominal organs.',
            application: 'λ = v/f = 1,540 ÷ 5×10⁶ = 3.08 × 10⁻⁴ m = 0.308 mm. Resolution ≈ wavelength: at 5 MHz, structures separated by less than ~0.3 mm cannot be distinguished. Higher frequency → shorter λ → better resolution. However, ultrasound attenuation in tissue follows: α ≈ 0.5 dB cm⁻¹ MHz⁻¹ (approx.). At 5 MHz: attenuation ~2.5 dB cm⁻¹ — halves intensity approximately every 4–5 cm. At 15 MHz: 7.5 dB cm⁻¹ — limited to ~2 cm depth. Trade-off: high f = good resolution, shallow; low f = poor resolution, deep.',
            question: 'Calculate the wavelength at 2.5 MHz in soft tissue. A foetal heart at 12 cm depth is to be imaged. Explain whether 2.5 MHz or 5 MHz is more appropriate and calculate the time delay between transmitting a pulse and receiving the echo from the foetal heart. (Speed of sound in tissue = 1,540 m s⁻¹)',
            answer: 'λ at 2.5 MHz = 1,540 ÷ 2.5×10⁶ = 6.16 × 10⁻⁴ m = 0.616 mm. For a target at 12 cm depth: 2.5 MHz is more appropriate — better penetration (lower attenuation) to reach the target. At 5 MHz, attenuation would be approximately 2× greater per cm, severely limiting signal strength at 12 cm. Time delay = total path ÷ speed = 2 × 0.12 ÷ 1,540 = 0.24 ÷ 1,540 = 1.56 × 10⁻⁴ s = 156 μs. (Factor of 2 because pulse travels to target and back.)',
            extension: 'Doppler ultrasound exploits the Doppler effect (f_observed = f_source × (v_sound ± v_observer) / (v_sound ∓ v_source)) to measure blood flow velocity by detecting the frequency shift between transmitted and received echoes from moving red blood cells. Colour Doppler maps flow direction and speed across 2D images — essential for cardiac valve assessment. The Doppler equation for ultrasound: Δf = 2f₀v·cosθ/c, where v is blood velocity and θ is the angle between beam and vessel.',
            helper: 'v = fλ → λ = v/f. Time = distance/speed; double distance for return echo. Longitudinal wave: particles oscillate along direction of propagation; compressions and rarefactions.',
            diagramInfo: {
                type: 'wave',
                registryKey: 'longitudinalWaveDiagram',
                renderOptions: {
                    title: 'Longitudinal Wave: Compressions & Rarefactions',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1000, height: 600 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new PhysicsDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `longitudinal_wave_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateCircuitsAndOhmsLawphy101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'EV Battery Management: Internal Resistance and Terminal Voltage',
            problem: 'An EV battery pack has an EMF of 400 V and an internal resistance of 0.08 Ω. When supplying a current of 250 A to the drive motor, calculate the terminal voltage, power dissipated internally, and the efficiency of power transfer to the motor. Draw the circuit diagram including the internal resistance.',
            parameters: {
                emf: 400,
                internalResistance: 0.08,
                current: 250,
                terminalVoltage: 380,
                internalPowerLoss: 5000,
                motorPower: 95000,
                efficiency: 95,
                units: 'V, Ω, A, W'
            },
            type: 'circuits_and_ohms_law',
            context: 'Internal resistance in EV battery packs causes voltage drop under load and generates heat — a key engineering challenge. Real battery management systems (BMS) monitor cell temperature, state of charge, and current to prevent thermal runaway. At high currents (fast acceleration or rapid charging), internal resistance losses are significant and limit battery longevity.',
            application: 'Terminal voltage V = EMF − Ir = 400 − (250 × 0.08) = 400 − 20 = 380 V. Internal power loss P_internal = I²r = 250² × 0.08 = 62,500 × 0.08 = 5,000 W = 5 kW. Motor power P_motor = V × I = 380 × 250 = 95,000 W = 95 kW. Total power = EMF × I = 400 × 250 = 100 kW. Efficiency = P_useful ÷ P_total = 95,000 ÷ 100,000 = 95%. Circuit: EMF source with internal resistance r in series, then external load (motor) R_ext.',
            question: 'During rapid DC charging at 500 A, calculate the terminal voltage seen by the charger, the internal power dissipation, and comment on why battery temperature management is critical at high charging currents. (EMF = 400 V, r = 0.08 Ω)',
            answer: 'During charging, current flows into the battery so: V_charger = EMF + Ir = 400 + (500 × 0.08) = 400 + 40 = 440 V (the charger must supply 440 V to force 500 A into the pack). Internal power dissipation = I²r = 500² × 0.08 = 250,000 × 0.08 = 20,000 W = 20 kW. This is 4× the dissipation at 250 A driving (since P ∝ I² and I doubled gives 4× power). 20 kW of heat generated internally in a battery pack — if not managed, cell temperatures rise rapidly, accelerating degradation and risking thermal runaway (exothermic decomposition of electrolyte and electrode materials). BMS systems throttle charging current if temperature exceeds ~45 °C, which is why peak charge rate is not always achievable in practice.',
            extension: 'The Ragone plot compares energy density (Wh kg⁻¹) vs power density (W kg⁻¹) for different energy storage technologies. Batteries have high energy density but limited power density (internal resistance limits current); supercapacitors have high power density but low energy density. Hybrid systems combining a battery with a supercapacitor buffer allow high-current transients (e.g. regenerative braking) to be handled by the supercapacitor, reducing stress on the battery — extending its cycle life.',
            helper: 'V_terminal = EMF − Ir (discharging); V_terminal = EMF + Ir (charging). P = I²r for internal losses. Efficiency = P_external ÷ P_total.',
            diagramInfo: {
                type: 'circuit',
                registryKey: 'batteryInternalResistanceCircuit',
                renderOptions: {
                    title: 'EV Battery Circuit with Internal Resistance',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 900, height: 700 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new PhysicsDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `battery_circuit_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateNuclearPhysicsphy101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Nuclear Fusion Power: Mass Deficit and Binding Energy in Deuterium-Tritium Fusion',
            problem: 'In a deuterium-tritium fusion reaction, ²₁H + ³₁H → ⁴₂He + ¹₀n. Given the atomic masses (u): D = 2.01410, T = 3.01605, He-4 = 4.00260, n = 1.00867, calculate the mass deficit, the energy released per reaction (in MeV), and comment on its significance for fusion power generation.',
            parameters: {
                massD: 2.01410,
                massT: 3.01605,
                massHe4: 4.00260,
                massNeutron: 1.00867,
                massDeficit: 0.01888,
                energyPerReactionMeV: 17.59,
                uToMeV: 931.5,
                units: 'u, MeV'
            },
            type: 'nuclear_physics',
            context: 'D-T fusion releases 17.59 MeV per reaction — approximately 3.5 times the energy of D-D fusion. The International Thermonuclear Experimental Reactor (ITER) in southern France is designed to demonstrate net fusion energy gain (Q > 1). D-T fusion requires plasma temperatures of ~150 million °C (10× hotter than the sun\'s core, compensated by higher density confinement in tokamaks).',
            application: 'Mass deficit Δm = (m_D + m_T) − (m_He4 + m_n) = (2.01410 + 3.01605) − (4.00260 + 1.00867) = 5.03015 − 5.01127 = 0.01888 u. Energy = Δm × 931.5 MeV u⁻¹ = 0.01888 × 931.5 = 17.59 MeV. Per reaction this is 17.59 × 1.60 × 10⁻¹³ = 2.81 × 10⁻¹² J. Significance: 1 gram of D-T fuel (mixed) contains ~1.20 × 10²³ pairs → 1.20 × 10²³ × 2.81 × 10⁻¹² J = 3.37 × 10¹¹ J ≈ 337 GJ — equivalent to ~80 tonnes of TNT or ~93,700 kWh per gram of fuel.',
            question: 'Write the nuclear equation for alpha decay of U-238, and for beta-minus decay of C-14. For C-14 (t½ = 5,730 years), calculate what fraction of the original C-14 remains in a sample that is 17,190 years old.',
            answer: 'Alpha decay of U-238: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He. (Mass number 238−4=234, atomic number 92−2=90 → thorium-234). Beta-minus decay of C-14: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e (+ antineutrino). (Mass number unchanged, atomic number increases by 1 → N-14). Fraction remaining: t = 17,190 years = 3 × t½. N/N₀ = (½)³ = 1/8 = 0.125, i.e. 12.5% remains.',
            extension: 'The nuclear binding energy per nucleon curve peaks at iron-56 (Fe-56, 8.79 MeV per nucleon). Elements lighter than Fe release energy by fusion; elements heavier than Fe release energy by fission. This explains why the sun fuses hydrogen (far left of curve) and why nuclear power plants fission uranium-235 (far right of curve) — both are moving toward the energy minimum at iron.',
            helper: 'Δm = reactant masses − product masses (in u); E = Δm × 931.5 MeV. Half-life: N = N₀(½)^(t/t½). Alpha: A−4, Z−2. Beta−: A same, Z+1.'
        };
    }

    static generateElectromagnetismphy101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'MRI Scanners: Electromagnetic Induction in Gradient Coils',
            problem: 'A rectangular coil of 500 turns, dimensions 0.12 m × 0.08 m, rotates at 3,000 rpm in a uniform magnetic field of 1.5 T. Calculate the peak EMF induced. Draw the graph of EMF against time over two complete cycles, labelling peak EMF, period, and the positions of zero-crossing.',
            parameters: {
                turns: 500,
                length: 0.12,
                width: 0.08,
                angularVelocity_rpm: 3000,
                angularVelocity_rads: 100 * Math.PI,
                magneticField: 1.5,
                area: 0.0096,
                peakEMF: 2261,
                period: 0.02,
                units: 'turns, m, T, rad/s, V, s'
            },
            type: 'electromagnetism',
            context: 'The rotating coil is the fundamental model for AC generators. In MRI machines, rapidly switching gradient coils (not rotating — but the induction principle is identical) produce the spatial encoding fields. The loud banging noise in MRI is the Lorentz force on gradient coil windings when current pulses are switched — the coils experience forces (F = BIL) as current interacts with the strong static magnetic field.',
            application: 'ω = 3000 rpm × (2π/60) = 100π rad s⁻¹ ≈ 314.2 rad s⁻¹. A = 0.12 × 0.08 = 9.6 × 10⁻³ m². Peak EMF: ε₀ = NBAω = 500 × 1.5 × 9.6 × 10⁻³ × 314.2 = 500 × 1.5 × 0.009600 × 314.2 = 500 × 4.524 = 2,262 V ≈ 2,260 V. Period T = 2π/ω = 2π ÷ 314.2 = 0.02 s = 20 ms. EMF = ε₀ sin(ωt): zero when coil plane perpendicular to field (maximum flux, zero rate of change); peak when coil plane parallel to field (zero flux, maximum rate of change).',
            question: 'A transformer steps the generator output down from 2,260 V (rms ≈ 1,598 V) to 230 V rms for domestic supply. If the primary coil has 3,000 turns, calculate the number of secondary turns. State one assumption made and explain why transformers only work with AC.',
            answer: 'V_s/V_p = N_s/N_p → N_s = N_p × (V_s/V_p) = 3,000 × (230/1,598) = 3,000 × 0.1439 = 432 turns. Assumption: 100% efficiency (ideal transformer — no flux leakage, no resistance losses, no eddy current losses). Transformers only work with AC because they rely on electromagnetic induction — a changing magnetic flux (dΦ/dt) is required to induce an EMF in the secondary. DC produces a constant flux → dΦ/dt = 0 → no induced EMF. Only alternating current in the primary creates a continuously changing magnetic field (and flux linkage through the secondary).',
            extension: 'Wireless charging (Qi standard) uses resonant inductive coupling — two coils tuned to the same resonant frequency. At resonance, energy transfer is maximised even at greater distances than simple inductive coupling. The physics is identical to two coupled LC oscillators — when driving frequency matches natural frequency, large oscillation amplitudes result with high energy transfer efficiency. Modern Qi 2.0 achieves 15 W at ~80% efficiency over millimetre gaps.',
            helper: 'ε₀ = NBAω; ω(rad/s) = rpm × 2π/60. EMF = ε₀sin(ωt): zero when flux maximum, peak when flux zero. Transformer: V_s/V_p = N_s/N_p.',
            diagramInfo: {
                type: 'electromagnetism',
                registryKey: 'acGeneratorEMFGraph',
                renderOptions: {
                    title: 'AC Generator: EMF vs Time (2 cycles)',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1000, height: 700 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new PhysicsDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `ac_generator_emf_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generatePressureAndMomentsphy101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Hydraulic Aircraft Brakes: Pressure Transmission and Mechanical Advantage',
            problem: 'In an aircraft hydraulic brake system, a pilot applies 200 N to a brake pedal. The master cylinder piston has area 4.0 cm², and the slave (caliper) cylinder piston has area 60 cm². Calculate the hydraulic pressure transmitted and the braking force at the caliper. Draw a free-body diagram of the hydraulic system.',
            parameters: {
                appliedForce: 200,
                masterArea: 4.0e-4,
                slaveArea: 60e-4,
                hydraulicPressure: 500000,
                brakingForce: 3000,
                mechanicalAdvantage: 15,
                units: 'N, m², Pa, N'
            },
            type: 'pressure_and_moments',
            context: 'Pascal\'s principle states that pressure applied to an enclosed fluid is transmitted equally throughout the fluid. Hydraulic systems amplify force (mechanical advantage = A_slave/A_master) while conserving energy (work in = work out, so a smaller piston moves further than the larger one). Aircraft braking systems must apply large braking forces — multiple caliper pistons per wheel, with typical hydraulic pressures of 3,000–5,000 psi (20–35 MPa) in commercial aircraft.',
            application: 'Pressure P = F/A = 200 ÷ (4.0 × 10⁻⁴) = 500,000 Pa = 5 × 10⁵ Pa. By Pascal\'s principle, this pressure acts on the slave piston: F_slave = P × A_slave = 500,000 × (60 × 10⁻⁴) = 500,000 × 0.006 = 3,000 N. Mechanical advantage = F_slave ÷ F_applied = 3,000 ÷ 200 = 15. Note: energy conserved — master piston moves 15× further than slave piston.',
            question: 'A see-saw has a pivot at its centre. Child A (mass 35 kg) sits 1.8 m from the pivot. Where must child B (mass 42 kg) sit to achieve balance? State the principle of moments and explain why the see-saw is in stable equilibrium when balanced.',
            answer: 'Principle of moments: for a body in rotational equilibrium, the sum of clockwise moments equals the sum of anticlockwise moments about any point. Clockwise moment (A) = F_A × d_A = (35 × 9.81) × 1.8 = 343.35 × 1.8 = 617.9 N m. For balance: F_B × d_B = 617.9. (42 × 9.81) × d_B = 617.9. 412.02 × d_B = 617.9. d_B = 617.9 ÷ 412.02 = 1.50 m. Child B sits 1.50 m from the pivot. Stable equilibrium: when the see-saw is displaced, the heavier side\'s moment increases (the lowering child moves further from the pivot) and the raised child\'s moment decreases — this does not restore equilibrium. Actually a horizontal balanced see-saw is neutral equilibrium: any small displacement with same distances maintains equal moments. However, if the pivot is below the centre of mass (as in a physical see-saw with rounded fulcrum), displaced positions have a restoring torque — making it stable.',
            extension: 'Pressure in fluids increases with depth: P = P₀ + ρgh. This is the basis for barometry, depth gauges, and the anaerobic pressure changes experienced by deep-sea organisms and submarines. The deepest point of the ocean (Challenger Deep, ~11 km) has pressure ~110 MPa — equivalent to 110 kg cm⁻². Hydraulic fluid compressibility at such pressures becomes non-negligible and must be factored into deep-sea hydraulic system design.',
            helper: 'P = F/A; Pascal\'s principle: same P throughout fluid; F₂ = P × A₂. Moments: F × perpendicular distance from pivot; balanced: Σclockwise = Σanticlockwise.',
            diagramInfo: {
                type: 'hydraulicSystem',
                registryKey: 'hydraulicBrakeDiagram',
                renderOptions: {
                    title: 'Hydraulic Brake System: Pascal\'s Principle',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1000, height: 700 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new PhysicsDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `hydraulic_brake_diagram_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateThermalPhysicsphy101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Thermal Energy Storage: Molten Salt in Concentrated Solar Power Plants',
            problem: 'A concentrated solar power (CSP) plant stores thermal energy in 1,200 tonnes of molten salt (specific heat capacity 1,500 J kg⁻¹ K⁻¹). The salt is heated from 290 °C to 565 °C during the day. Calculate the total energy stored and the power that could be supplied for 8 hours overnight.',
            parameters: {
                mass: 1.2e6,
                specificHeatCapacity: 1500,
                deltaT: 275,
                energyStored: 4.95e11,
                supplyDuration: 28800,
                powerOutput: 17187500,
                units: 'kg, J/kg/K, K, J, s, W'
            },
            type: 'thermal_physics',
            context: 'Molten salt thermal storage is the key technology enabling solar energy to supply power after sunset. Plants like Gemasolar (Spain) and Noor III (Morocco) store heat at 565 °C in nitrate salt mixtures (KNO₃/NaNO₃). The salt\'s high heat capacity and low cost make it economically attractive. Unlike battery storage, it degrades negligibly over thousands of cycles.',
            application: 'ΔT = 565 − 290 = 275 K (= 275 °C for differences). Q = mcΔT = 1.2 × 10⁶ × 1,500 × 275 = 1.2 × 10⁶ × 412,500 = 4.95 × 10¹¹ J = 495 GJ. If supplied over 8 hours: P = Q/t = 4.95 × 10¹¹ ÷ (8 × 3600) = 4.95 × 10¹¹ ÷ 28,800 = 1.719 × 10⁷ W ≈ 17.2 MW. (Gemasolar actual output ~19.9 MW — consistent order of magnitude.)',
            question: 'Steam is generated from the hot salt to drive turbines. 50 kg of water at 20 °C must be converted to steam at 100 °C. Calculate the total energy required. (c_water = 4,200 J kg⁻¹ K⁻¹; L_vap = 2.26 × 10⁶ J kg⁻¹)',
            answer: 'Step 1 — heating water 20 °C → 100 °C: Q₁ = mcΔT = 50 × 4,200 × 80 = 16,800,000 J = 16.8 MJ. Step 2 — vaporising at 100 °C: Q₂ = mL = 50 × 2.26 × 10⁶ = 1.13 × 10⁸ J = 113 MJ. Total Q = Q₁ + Q₂ = 16.8 + 113 = 129.8 MJ ≈ 130 MJ. Note: the latent heat term dominates — 85% of energy goes to phase change, not temperature rise. This is why steam engines are efficient energy carriers: large latent heat stores energy at constant temperature.',
            extension: 'The Carnot efficiency η = 1 − T_cold/T_hot (in Kelvin) sets the theoretical maximum efficiency for any heat engine. For a CSP turbine: T_hot = 565 + 273 = 838 K; T_cold (condenser) ≈ 40 °C = 313 K. η_Carnot = 1 − 313/838 = 62.6%. Real turbine efficiencies ~40–45% — achieving ~64–72% of the Carnot limit, which is typical for well-designed power cycles.',
            helper: 'Q = mcΔT (sensible heat); Q = mL (latent heat during phase change). ΔT in K = ΔT in °C. Power = Energy ÷ time. Two separate Q calculations needed when both heating and phase change occur.'
        };
    }

    static generateOpticsRayDiagramsphy101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Fibre-Optic Endoscopy: Total Internal Reflection and Numerical Aperture',
            problem: 'A glass optical fibre has refractive index n = 1.62 and is surrounded by cladding of refractive index n = 1.52. Calculate the critical angle for total internal reflection at the core-cladding interface. Draw a ray diagram showing a ray successfully propagating by TIR and a ray that refracts into the cladding.',
            parameters: {
                coreRefractiveIndex: 1.62,
                claddingRefractiveIndex: 1.52,
                criticalAngle: 69.8,
                numericalAperture: 0.567,
                acceptanceAngle: 34.5,
                units: 'degrees'
            },
            type: 'optics_ray_diagrams',
            context: 'Optical fibres are the backbone of global internet infrastructure and surgical endoscopes. Total internal reflection (TIR) confines light within the fibre core. Cladding — a lower-refractive-index glass layer — is essential: without it, scratches or contact with other surfaces would allow light to escape. Single-mode fibres (core ~9 μm) carry one light mode for long-haul telecoms; multi-mode fibres (core ~50–62.5 μm) carry many modes for short distances and endoscopes.',
            application: 'Critical angle θ_c: sin θ_c = n₂/n₁ = 1.52/1.62 = 0.9383. θ_c = sin⁻¹(0.9383) = 69.8°. For TIR, the angle of incidence at the core-cladding boundary must exceed 69.8°. Any ray striking the boundary at > 69.8° is totally internally reflected and propagates along the fibre. A ray striking at < 69.8° refracts into the cladding and is lost. Numerical aperture NA = √(n₁² − n₂²) = √(1.62² − 1.52²) = √(2.6244 − 2.3104) = √0.3140 = 0.5604.',
            question: 'Calculate the maximum acceptance angle (half-angle of the acceptance cone) for a ray entering the fibre end face from air (n = 1.00), given NA = 0.560. A laser beam enters the fibre at 20° to the axis. Show whether this ray will propagate by TIR.',
            answer: 'Acceptance angle: sin θ_accept = NA/n_air = 0.560/1.00. θ_accept = sin⁻¹(0.560) = 34.1°. The acceptance cone has a half-angle of 34.1° — any ray entering within 34.1° of the fibre axis will undergo TIR and propagate. A ray at 20° to the axis is within the acceptance cone (20° < 34.1°) → it will propagate by TIR. Verification: at the end face, Snell\'s law gives the refracted angle inside the glass: n_air × sin20° = 1.62 × sinθ_glass. sinθ_glass = sin20°/1.62 = 0.3420/1.62 = 0.2111 → θ_glass = 12.2° to the axis → angle to normal at core-cladding boundary = 90° − 12.2° = 77.8° > θ_c (69.8°) ✓ — TIR occurs.',
            extension: 'Photonic crystal fibres (PCF) achieve light confinement through a periodic microstructure of air holes rather than a higher refractive-index core. This allows "endlessly single-mode" operation, anomalous group velocity dispersion, and extreme nonlinearities — enabling supercontinuum generation (white-light laser) from ultrashort pulses. PCFs are central to optical coherence tomography (OCT) — a non-invasive imaging technique achieving micrometre resolution in biological tissue.',
            helper: 'Critical angle: sinθ_c = n₂/n₁ (TIR occurs when θ_i > θ_c). NA = √(n₁² − n₂²). Acceptance angle: sinθ = NA. Snell\'s law: n₁sinθ₁ = n₂sinθ₂.',
            diagramInfo: {
                type: 'rayDiagram',
                registryKey: 'opticalFibreTIR',
                renderOptions: {
                    title: 'Optical Fibre: Total Internal Reflection Ray Diagram',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 1000, height: 600 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new PhysicsDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `optical_fibre_tir_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }


    // ════════════════════════════════════════════════════════════════════════
    // MATHEMATICS PROBLEM GENERATORS
    // ════════════════════════════════════════════════════════════════════════

    static generateAlgebraEquationsmat101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Mobile Phone Plan Optimisation: Solving Simultaneous Equations',
            problem: 'Plan A costs £x per month with no data limit. Plan B costs £y per month for 10 GB data. A business user needs 3 Plan A and 2 Plan B phones, paying £310 per month. A private user needs 1 Plan A and 4 Plan B phones, paying £270 per month. Write and solve simultaneous equations to find x and y.',
            parameters: {
                equation1: '3x + 2y = 310',
                equation2: 'x + 4y = 270',
                solution: { x: 70, y: 50 },
                method: 'elimination or substitution',
                units: '£'
            },
            type: 'algebra_equations',
            context: 'Simultaneous equations appear whenever two unknowns must be determined from two independent constraints. They underlie resource allocation, supply-demand analysis, network flow problems, and are the scalar form of matrix systems encountered at A-Level and university.',
            application: 'Equation 1: 3x + 2y = 310. Equation 2: x + 4y = 270. Elimination: multiply Eq2 by 3: 3x + 12y = 810. Subtract Eq1: 10y = 500 → y = 50. Substitute: x + 4(50) = 270 → x = 270 − 200 = 70. Check Eq1: 3(70) + 2(50) = 210 + 100 = 310 ✓.',
            question: 'A third corporate plan C costs £z per month per phone. A company takes 2 Plan A, 1 Plan B, and 3 Plan C phones for £365 per month. Find z using your values of x and y. Then factorise the expression 6x² − 11xy − 10y² using these values as a check.',
            answer: 'z: 2(70) + 1(50) + 3z = 365 → 140 + 50 + 3z = 365 → 3z = 175 → z = 58.33... ≈ £58.33 per month. Factorisation of 6x² − 11xy − 10y²: find factors (ax + by)(cx + dy) with ac=6, bd=−10, ad+bc=−11. Try (2x − 5y)(3x + 2y): 6x² + 4xy − 15xy − 10y² = 6x² − 11xy − 10y² ✓. Check with x=70, y=50: 6(4900) − 11(3500) − 10(2500) = 29,400 − 38,500 − 25,000 = −34,100. (2×70 − 5×50)(3×70 + 2×50) = (140−250)(210+100) = (−110)(310) = −34,100 ✓.',
            extension: 'Systems of n simultaneous linear equations in n unknowns are solved efficiently using Gaussian elimination or LU decomposition — the matrix approach. For very large systems (millions of equations in CFD or machine learning), iterative methods (conjugate gradient, GMRES) are used. The condition number of the coefficient matrix determines numerical stability — a high condition number (near-singular matrix) means small errors in the data propagate to large errors in the solution.',
            helper: 'Elimination: multiply equations to match a coefficient, then subtract/add. Substitution: isolate one variable and substitute. Always verify in both original equations.'
        };
    }

    static generateQuadraticEquationsmat101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Projectile Motion: Optimising the Launch Angle for Maximum Range',
            problem: 'A ball is launched from ground level with initial vertical velocity component u_y = (30 − 5t) m s⁻¹, modelled as h = 30t − 5t² for height h in metres. Find the time of flight and maximum height, showing all algebraic working. Then solve 2x² − 3x − 5 = 0 by factorisation and verify using the quadratic formula.',
            parameters: {
                heightEquation: 'h = 30t - 5t²',
                maxHeightTime: 3,
                maxHeight: 45,
                timeOfFlight: 6,
                quadraticToSolve: '2x² - 3x - 5 = 0',
                roots: [2.5, -1],
                discriminant: 49
            },
            type: 'quadratic_equations',
            context: 'Quadratic equations govern all constant-acceleration motion (parabolic trajectories), optimal resource allocation problems (maximising revenue = price × quantity where both depend on a variable), and the roots of characteristic polynomials in differential equations.',
            application: 'Maximum height: dh/dt = 30 − 10t = 0 → t = 3 s. h_max = 30(3) − 5(9) = 90 − 45 = 45 m. Time of flight: h = 0 → 30t − 5t² = 0 → 5t(6 − t) = 0 → t = 0 or t = 6 s. Quadratic 2x² − 3x − 5 = 0: factorisation — find two numbers multiplying to 2×(−5) = −10 and adding to −3: (−5) and (+2). 2x² − 5x + 2x − 5 = 0 → x(2x−5) + 1(2x−5) = 0 → (x+1)(2x−5) = 0 → x = −1 or x = 2.5. Quadratic formula check: x = (3 ± √(9 + 40))/4 = (3 ± 7)/4 → x = 10/4 = 2.5 or x = −4/4 = −1 ✓.',
            question: 'A company\'s profit P (£ thousands) is modelled by P = −2x² + 12x − 10, where x is the selling price in £ (1 ≤ x ≤ 8). Find the selling price that maximises profit by completing the square. State the maximum profit and the prices at which the company breaks even.',
            answer: 'Complete the square: P = −2(x² − 6x) − 10 = −2(x² − 6x + 9 − 9) − 10 = −2(x − 3)² + 18 − 10 = −2(x − 3)² + 8. Maximum profit = £8,000 at x = £3. Break-even: P = 0 → −2x² + 12x − 10 = 0 → x² − 6x + 5 = 0 → (x−1)(x−5) = 0 → x = £1 or x = £5. The company breaks even at selling prices of £1 and £5.',
            extension: 'The discriminant b² − 4ac encodes the nature of roots: positive → two real roots (parabola crosses x-axis twice); zero → one repeated root (parabola tangent to x-axis — the profit model\'s vertex just touches zero profit at those prices); negative → no real roots (parabola entirely above or below x-axis). In engineering, the discriminant of a characteristic equation determines whether a system is overdamped (b² > 4ac), critically damped (b² = 4ac), or underdamped (b² < 4ac) — directly affecting oscillatory behaviour.',
            helper: 'h max: set dh/dt = 0 or complete the square. Time of flight: set h = 0, factorise. Complete the square: P = a(x−h)² + k where vertex at (h,k). Break-even: set P = 0.'
        };
    }

    static generateTrigonometrymat101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Navigation: Triangulating a Ship\'s Position Using the Cosine Rule',
            problem: 'A coastguard station at A and a lighthouse at B are 45 km apart. A ship S is detected: the bearing from A to S is 052° and the bearing from B to S is 312°. Calculate the distance AS and the distance BS using the sine rule. Then verify using the cosine rule.',
            parameters: {
                AB: 45,
                bearingAS: 52,
                bearingBS: 312,
                angleAtA: 52,
                angleAtB: 48,
                angleAtS: 80,
                AS: 34.1,
                BS: 33.7,
                units: 'km, degrees'
            },
            type: 'trigonometry',
            context: 'Triangulation is the fundamental technique of land surveying, GPS positioning, and radar tracking. Given two known points and angle measurements to an unknown point, the triangle can be solved uniquely (as long as the angles are not degenerate). All GPS receivers use trilateration (distances rather than angles), but the underlying trigonometry is the same.',
            application: 'Interior angle at A: bearing from A to B is 090° (east, since B is directly east — but working from bearings). Angle SAB: bearing AB = 090°, bearing AS = 052° → angle at A = 90° − 52° = 38°. Angle SBA: bearing BA = 270°, bearing BS = 312° → angle at B = 312° − 270° = 42°. Angle at S = 180° − 38° − 42° = 100°. Sine rule: AS/sin42° = AB/sinS = 45/sin100°. AS = 45 × sin42°/sin100° = 45 × 0.6691/0.9848 = 30.58/0.9848 = 30.1 km. BS = 45 × sin38°/sin100° = 45 × 0.6157/0.9848 = 27.71/0.9848 = 28.1 km.',
            question: 'A surveyor measures a triangular plot of land with sides a = 120 m, b = 85 m, and the included angle C = 67°. Calculate the area of the plot. Then find the third side c and all remaining angles.',
            answer: 'Area = ½ab sinC = ½ × 120 × 85 × sin67° = ½ × 10,200 × 0.9205 = 4,694 m² ≈ 4,690 m². Cosine rule for c: c² = a² + b² − 2ab cosC = 14,400 + 7,225 − 2(120)(85)cos67° = 21,625 − 20,400 × 0.3907 = 21,625 − 7,970 = 13,655. c = √13,655 = 116.9 m ≈ 117 m. Sine rule for angle A: sinA/a = sinC/c → sinA = 120 × sin67°/116.9 = 120 × 0.9205/116.9 = 110.46/116.9 = 0.9449 → A = 70.7°. Angle B = 180° − 67° − 70.7° = 42.3°.',
            extension: 'The haversine formula adapts the cosine rule for spherical geometry to calculate great-circle distances between two GPS coordinates: d = 2r·arcsin(√(sin²(Δφ/2) + cosφ₁·cosφ₂·sin²(Δλ/2))). This is used in every navigation app to compute distances on Earth\'s curved surface. For distances under ~100 km the flat-earth approximation introduces errors of less than 0.3% — relevant precision threshold for many engineering applications.',
            helper: 'Sine rule: a/sinA = b/sinB = c/sinC. Cosine rule: c² = a² + b² − 2ab cosC. Area = ½ab sinC. Angles in triangle sum to 180°.',
            diagramInfo: {
                type: 'triangle',
                registryKey: 'navigationTriangulationDiagram',
                renderOptions: {
                    title: 'Triangulation: Coastguard, Lighthouse & Ship',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 900, height: 800 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new MathsDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `navigation_triangle_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateGeometryAndMensurationmat101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Architecture: Volume and Surface Area of a Domed Building',
            problem: 'A sports arena has a hemispherical dome of radius 40 m sitting on a cylindrical base of radius 40 m and height 15 m. Calculate the total volume of the arena (hemisphere + cylinder) and the total external surface area to be clad (curved cylinder wall + hemisphere surface, excluding the floor).',
            parameters: {
                radius: 40,
                cylinderHeight: 15,
                hemisphereVolume: 134041,
                cylinderVolume: 75398,
                totalVolume: 209440,
                curvedCylinderArea: 3770,
                hemisphereArea: 10053,
                totalCladdingArea: 13823,
                units: 'm, m², m³'
            },
            type: 'geometry_and_mensuration',
            context: 'Architects and quantity surveyors routinely calculate volumes (for heating/cooling loads, air change rates) and surface areas (for cladding, thermal insulation cost estimates). The dome is one of the oldest and most efficient structural forms — it distributes load into compression, allowing stone structures to span large distances without steel reinforcement.',
            application: 'Hemisphere volume = ²⁄₃πr³ = ²⁄₃ × π × 40³ = ²⁄₃ × π × 64,000 = 134,041 m³. Cylinder volume = πr²h = π × 1,600 × 15 = 75,398 m³. Total = 134,041 + 75,398 = 209,440 m³ ≈ 209,000 m³. Curved cylinder wall area = 2πrh = 2π × 40 × 15 = 3,770 m². Hemisphere curved surface area = 2πr² = 2π × 1,600 = 10,053 m². Total cladding = 3,770 + 10,053 = 13,823 m² ≈ 13,800 m².',
            question: 'The dome is to be painted. Paint covers 12 m² per litre and costs £8.50 per litre. Calculate the cost of painting only the hemisphere surface. If the cylindrical walls have 6 rectangular windows each 4 m × 3 m, recalculate the cost of painting the cylinder wall excluding windows.',
            answer: 'Hemisphere area = 10,053 m². Litres needed = 10,053 ÷ 12 = 837.8 litres. Cost = 837.8 × £8.50 = £7,121 ≈ £7,120. Window area = 6 × (4 × 3) = 72 m². Paintable cylinder wall = 3,770 − 72 = 3,698 m². Litres = 3,698 ÷ 12 = 308.2 litres. Cost = 308.2 × £8.50 = £2,620.',
            extension: 'The isoperimetric theorem states that among all shapes with a given surface area, the sphere encloses the maximum volume. Equivalently, for a given volume, the sphere has the minimum surface area. This is why soap bubbles are spherical (minimising surface energy = surface area × surface tension) and why biological cells are often approximately spherical. The theorem was known to Pappus of Alexandria (~4th century AD) but rigorously proved only in the 19th century.',
            helper: 'Sphere volume = 4/3πr³ → hemisphere = 2/3πr³. Sphere surface area = 4πr² → hemisphere curved = 2πr². Cylinder volume = πr²h. Curved cylinder = 2πrh.',
            diagramInfo: {
                type: 'solid',
                registryKey: 'domeArenaDiagram',
                renderOptions: {
                    title: 'Sports Arena: Hemisphere + Cylinder Mensuration',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 900, height: 800 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new MathsDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `dome_arena_geometry_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateStatisticsAndProbabilitymat101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Clinical Trials: Sensitivity, Specificity, and Conditional Probability',
            problem: 'A diagnostic test for a disease has sensitivity 92% (P(positive | disease) = 0.92) and specificity 88% (P(negative | no disease) = 0.88). The disease prevalence in the population is 3%. A randomly selected patient tests positive. Use a tree diagram to calculate the probability they actually have the disease (positive predictive value).',
            parameters: {
                sensitivity: 0.92,
                specificity: 0.88,
                prevalence: 0.03,
                truePositiveRate: 0.0276,
                falsePositiveRate: 0.1164,
                positivePredictiveValue: 0.192,
                units: 'probability (0–1)'
            },
            type: 'statistics_and_probability',
            context: 'Positive predictive value (PPV) is the probability that a patient testing positive actually has the disease. Counterintuitively, even highly accurate tests can have low PPV for rare diseases — because false positives from the large healthy population outnumber true positives from the small diseased population. This is Bayes\' theorem in medical statistics and has profound implications for screening programme design.',
            application: 'Tree diagram: Disease (0.03) → Positive (0.92) = 0.0276; Disease (0.03) → Negative (0.08) = 0.0024. No disease (0.97) → Positive (0.12) = 0.1164; No disease (0.97) → Negative (0.88) = 0.8536. P(positive) = 0.0276 + 0.1164 = 0.1440. PPV = P(disease | positive) = P(disease AND positive) ÷ P(positive) = 0.0276 ÷ 0.1440 = 0.1917 ≈ 19.2%. Only ~19% of patients testing positive actually have the disease — 81% are false positives!',
            question: 'Calculate the negative predictive value (NPV — probability of being disease-free given a negative test). Comment on whether this test is more useful for ruling in or ruling out the disease in this population.',
            answer: 'P(negative) = 0.0024 + 0.8536 = 0.8560. NPV = P(no disease | negative) = P(no disease AND negative) ÷ P(negative) = 0.8536 ÷ 0.8560 = 0.9972 ≈ 99.7%. The NPV (99.7%) is excellent — a negative test result almost certainly rules out disease. The PPV (19.2%) is poor — a positive result is more likely a false positive than a true positive, given the low prevalence. This test is far more useful for ruling out the disease (high NPV, high sensitivity) than ruling it in (poor PPV). In clinical practice this test would be used as a screening tool — a negative result gives reassurance; a positive result triggers a more specific confirmatory test.',
            extension: 'Bayes\' theorem: P(A|B) = P(B|A)P(A)/P(B). The PPV calculation is a direct application. The likelihood ratio (LR+ = sensitivity/(1−specificity)) quantifies how much a positive test updates the pre-test probability. Here LR+ = 0.92/(1−0.88) = 0.92/0.12 = 7.67. Pre-test odds = 0.03/0.97 = 0.0309. Post-test odds = 0.0309 × 7.67 = 0.237. Post-test probability = 0.237/1.237 = 19.2% ✓ — agreeing with the tree diagram approach.',
            helper: 'Tree diagram: split at disease/no disease (prevalence), then at positive/negative (sensitivity/specificity). P(disease | positive) = P(both) ÷ P(positive). 1−sensitivity = false negative rate; 1−specificity = false positive rate.'
        };
    }

    static generateVectorsAndMatricesmat101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: '3D Computer Graphics: Rotation Matrices in Game Engines',
            problem: 'Matrix A = [[2, 1], [3, −1]] represents a linear transformation. Find: (a) the determinant of A; (b) the inverse A⁻¹; (c) the image of the point P(3, −2) under transformation A; (d) verify A × A⁻¹ = I.',
            parameters: {
                matrix: [[2, 1], [3, -1]],
                determinant: -5,
                inverse: [[-0.2, -0.2], [-0.6, 0.4]],
                pointP: [3, -2],
                imageOfP: [4, 11],
                units: 'matrix entries, coordinates'
            },
            type: 'vectors_and_matrices',
            context: 'Transformation matrices are the foundation of 3D computer graphics. Every rotation, scaling, shearing, and projection in a game engine or CAD program is a matrix multiplication. GPU hardware is optimised for parallel matrix operations — modern GPUs can perform tens of trillions of floating-point operations per second to handle millions of matrix multiplications per frame.',
            application: 'det(A) = (2)(−1) − (1)(3) = −2 − 3 = −5. Inverse: A⁻¹ = (1/det) × [[d, −b], [−c, a]] = (1/−5) × [[−1, −1], [−3, 2]] = [[0.2, 0.2], [0.6, −0.4]]. Image of P(3,−2): A × [3, −2]ᵀ = [2×3 + 1×(−2), 3×3 + (−1)×(−2)] = [6−2, 9+2] = [4, 11]. Verify: A × A⁻¹ = [[2,1],[3,−1]] × [[0.2,0.2],[0.6,−0.4]] = [[2×0.2+1×0.6, 2×0.2+1×(−0.4)],[3×0.2+(−1)×0.6, 3×0.2+(−1)×(−0.4)]] = [[0.4+0.6, 0.4−0.4],[0.6−0.6, 0.6+0.4]] = [[1,0],[0,1]] = I ✓.',
            question: 'The transformation T maps a unit square with vertices O(0,0), A(1,0), B(1,1), C(0,1) using matrix A above. Find the coordinates of all four image vertices and calculate the area of the transformed shape. State the relationship between the area scale factor and det(A).',
            answer: 'O(0,0) → A[0,0] = (0,0). A(1,0) → [2×1+1×0, 3×1+(-1)×0] = (2,3). B(1,1) → [2+1, 3−1] = (3,2). C(0,1) → [0+1, 0−1] = (1,−1). Area of original unit square = 1. Area of image = |det(A)| × area of original = |−5| × 1 = 5. Verify by Shoelace formula for (0,0),(2,3),(3,2),(1,−1): Area = ½|x₁(y₂−y₄)+x₂(y₃−y₁)+x₃(y₄−y₂)+x₄(y₁−y₃)| = ½|0(3−(−1))+2(2−0)+3(−1−3)+1(0−2)| = ½|0+4+(−12)+(−2)| = ½|−10| = 5 ✓. Area scale factor = |det(A)| — the determinant gives the ratio of output area to input area for any region.',
            extension: 'Singular matrices (det = 0) represent transformations that collapse the plane into a line or point — they are non-invertible. In solving systems Ax = b: if det(A) = 0, either no solution (inconsistent) or infinitely many solutions (dependent system) exist. This connects matrix algebra to the geometric notion of linear dependence — column vectors of A are linearly dependent when det(A) = 0.',
            helper: 'det([[a,b],[c,d]]) = ad − bc. Inverse = (1/det)[[d,−b],[−c,a]]. Matrix × vector: row × column. Area scale factor = |det|.',
            diagramInfo: {
                type: 'transformation',
                registryKey: 'matrixTransformationDiagram',
                renderOptions: {
                    title: 'Matrix Transformation of Unit Square',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 900, height: 800 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new MathsDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `matrix_transformation_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateCalculusDifferentiationmat101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Engineering Design: Minimising Material in a Cylindrical Can',
            problem: 'A cylindrical tin can must hold exactly 500 cm³. Express the total surface area S in terms of the radius r only. Differentiate to find the value of r that minimises S, and verify it is a minimum. Calculate the optimal height and the minimum surface area.',
            parameters: {
                volume: 500,
                surfaceAreaFormula: 'S = 2πr² + 1000/r',
                dSdr: '4πr - 1000/r²',
                optimalRadius: 4.30,
                optimalHeight: 8.60,
                minSurfaceArea: 348.7,
                units: 'cm, cm², cm³'
            },
            type: 'calculus_differentiation',
            context: 'Optimisation problems — finding maxima and minima — are among the most practically important applications of calculus. Materials cost for packaging is proportional to surface area; maximising volume for a given surface area (or minimising surface area for a given volume) is a ubiquitous engineering design constraint.',
            application: 'V = πr²h = 500 → h = 500/(πr²). S = 2πr² + 2πrh = 2πr² + 2πr × 500/(πr²) = 2πr² + 1000/r. dS/dr = 4πr − 1000/r². Set = 0: 4πr = 1000/r² → r³ = 1000/(4π) = 79.58 → r = 4.301 cm. d²S/dr² = 4π + 2000/r³ > 0 for all r > 0 → minimum confirmed. h = 500/(π × 4.301²) = 500/(58.12) = 8.602 cm ≈ 8.60 cm. Note: h = 2r — the optimal can is a cylinder where height equals diameter. S_min = 2π(4.301²) + 1000/4.301 = 116.24 + 232.51 = 348.7 cm².',
            question: 'A rectangle is inscribed in a circle of radius 5. Let the rectangle have width 2x. Express the area A in terms of x, differentiate, and find the maximum area. Identify the shape of the rectangle at maximum area.',
            answer: 'Height of rectangle: by Pythagoras, half-height = √(25 − x²). Full height = 2√(25 − x²). A = 2x × 2√(25 − x²) = 4x√(25 − x²). dA/dx = 4√(25−x²) + 4x × (−x)/√(25−x²) = [4(25−x²) − 4x²]/√(25−x²) = [100−8x²]/√(25−x²). Set numerator = 0: 100 = 8x² → x² = 12.5 → x = √12.5 = 2.5√2. Height = 2√(25−12.5) = 2√12.5 = 5√2. Width = 2x = 5√2. Width = Height = 5√2 → the rectangle is a square. A_max = 5√2 × 5√2 = 50 cm². The square is the rectangle with maximum area inscribed in a circle — an instance of the isoperimetric principle.',
            extension: 'Lagrange multipliers extend constrained optimisation to functions of multiple variables: maximise f(x,y) subject to g(x,y) = 0 by solving ∇f = λ∇g simultaneously with the constraint. The can optimisation is a one-variable problem (constraint already substituted), but a three-variable packaging problem (box length, width, height with fixed surface area) requires Lagrange multipliers or substitution of two constraints — core university mathematics.',
            helper: 'Express one variable in terms of the other using the constraint (V fixed). S in terms of r only. dS/dr = 0 gives minimum/maximum. Confirm minimum: d²S/dr² > 0.'
        };
    }

    static generateCalculusIntegrationmat101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Environmental Science: Carbon Sequestration Rate in a Forest',
            problem: 'A forest sequesters carbon at a rate modelled by R(t) = 6t² − 18t + 12 tonnes per year (t = years since planting, 0 ≤ t ≤ 5). Find the total carbon sequestered over the first 5 years by integration. Also find the area between the curve y = x² − 4 and the x-axis.',
            parameters: {
                rateFunction: 'R(t) = 6t² - 18t + 12',
                integralBounds: [0, 5],
                totalSequestered: 65,
                curveFunction: 'y = x² - 4',
                curveRoots: [-2, 2],
                areaUnderCurve: 32 / 3,
                units: 'tonnes, years, square units'
            },
            type: 'calculus_integration',
            context: 'Definite integration computes the accumulated quantity when a rate is given. This is fundamental to environmental modelling (carbon budgets), pharmacokinetics (drug exposure = area under concentration-time curve), economics (consumer surplus = area between demand curve and price line), and physics (displacement = area under velocity-time graph).',
            application: '∫₀⁵ (6t² − 18t + 12) dt = [2t³ − 9t² + 12t]₀⁵ = (2×125 − 9×25 + 12×5) − 0 = (250 − 225 + 60) = 85 tonnes. Area between y = x² − 4 and x-axis: y = 0 at x = ±2. The curve is below x-axis for −2 < x < 2. Area = |∫₋₂² (x² − 4) dx| = |[x³/3 − 4x]₋₂²| = |(8/3 − 8) − (−8/3 + 8)| = |8/3 − 8 + 8/3 − 8| = |16/3 − 16| = |16/3 − 48/3| = 32/3 ≈ 10.67 square units.',
            question: 'Using integration, find the area enclosed between the curves y = x² and y = x + 2. Sketch the region.',
            answer: 'Intersections: x² = x + 2 → x² − x − 2 = 0 → (x−2)(x+1) = 0 → x = −1 or x = 2. Between these points, y = x + 2 is above y = x². Area = ∫₋₁² (x + 2 − x²) dx = [x²/2 + 2x − x³/3]₋₁². At x=2: 4/2 + 4 − 8/3 = 2 + 4 − 8/3 = 6 − 8/3 = 10/3. At x=−1: 1/2 − 2 + 1/3 = 3/6 − 12/6 + 2/6 = −7/6. Area = 10/3 − (−7/6) = 20/6 + 7/6 = 27/6 = 9/2 = 4.5 square units.',
            extension: 'The Fundamental Theorem of Calculus (FTC) has two parts: FTC1 states that if F(x) = ∫ₐˣ f(t)dt, then F′(x) = f(x) — differentiation and integration are inverse operations. FTC2 states that ∫ₐᵇ f(x)dx = F(b) − F(a) where F is any antiderivative. Together they unite the apparently disparate operations of finding tangents (differential calculus, Fermat, Barrow) and finding areas (integral calculus, Cavalieri, Wallis) — a unification attributed to Newton and Leibniz independently in the 1660s–70s.',
            helper: 'Power rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C. Definite integral = F(b) − F(a). Area between curves = ∫(top − bottom) over the interval between intersection points. For area below x-axis, take the absolute value.',
            diagramInfo: {
                type: 'integral',
                registryKey: 'areaUnderCurveDiagram',
                renderOptions: {
                    title: 'Area Between Curves: y = x² and y = x + 2',
                    showLabels: true,
                    type: 'generic'
                },
                canvasSize: { width: 900, height: 800 }
            },
            generateDiagram: async function() {
                try {
                    console.log('Starting diagram generation for:', this.scenario);
                    const renderer = new MathsDiagramsRenderer();
                    const canvas = await renderer.renderDiagram(
                        this.diagramInfo.registryKey,
                        0, 0,
                        this.diagramInfo.canvasSize.width,
                        this.diagramInfo.canvasSize.height,
                        this.diagramInfo.renderOptions
                    );
                    const buffer = await canvas.encode('png');
                    const filename = `area_between_curves_${Date.now()}.png`;
                    fs.writeFileSync(filename, buffer);
                    console.log(`✓ Successfully generated: ${filename}`);
                    return { success: true, filename: filename, path: `./${filename}` };
                } catch (error) {
                    console.error(`✗ Error generating diagram:`, error);
                    return { success: false, error: error.message, stack: error.stack };
                }
            }
        };
    }

    static generateNumberAndArithmeticmat101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Compound Interest and Standard Form: National Debt Calculations',
            problem: 'The UK national debt is approximately £2.6 × 10¹² (2.6 trillion pounds). Interest is charged at 3.8% per annum. Calculate the annual interest payment in standard form. A repayment of £5.2 × 10¹⁰ per year is made. How many years to repay (ignoring accruing interest)? Express as a surd: √75 + √48 − √27.',
            parameters: {
                nationalDebt: 2.6e12,
                interestRate: 0.038,
                annualInterest: 9.88e10,
                annualRepayment: 5.2e10,
                yearsToRepay: 50,
                surd: '√75 + √48 − √27',
                surdAnswer: '6√3',
                units: '£, years'
            },
            type: 'number_and_arithmetic',
            context: 'Standard form (scientific notation) is essential when working with quantities spanning many orders of magnitude — from the diameter of a proton (10⁻¹⁵ m) to the observable universe (10²⁶ m). Surds — irrational square roots expressed exactly — arise in geometry, trigonometry, and physics wherever exact answers are required.',
            application: 'Annual interest = 2.6 × 10¹² × 0.038 = 9.88 × 10¹⁰. Years to repay = 2.6 × 10¹² ÷ 5.2 × 10¹⁰ = (2.6 ÷ 5.2) × 10²  = 0.5 × 100 = 50 years. Surd simplification: √75 = √(25×3) = 5√3; √48 = √(16×3) = 4√3; √27 = √(9×3) = 3√3. 5√3 + 4√3 − 3√3 = 6√3.',
            question: 'Evaluate: (a) (2.4 × 10⁻³) × (5.0 × 10⁸) ÷ (6.0 × 10²); (b) Express 0.000847 in standard form; (c) Rationalise the denominator: 6 ÷ (2 + √3); (d) Without a calculator, estimate √(0.0049) × 400.',
            answer: '(a) (2.4 × 5.0 / 6.0) × 10⁻³⁺⁸⁻² = 2.0 × 10³. (b) 8.47 × 10⁻⁴. (c) Multiply by (2−√3)/(2−√3): 6(2−√3)/((2+√3)(2−√3)) = 6(2−√3)/(4−3) = 6(2−√3)/1 = 12 − 6√3. (d) √0.0049 = 0.07 (since 7² = 49, move decimal: √(49 × 10⁻⁴) = 7 × 10⁻² = 0.07). 0.07 × 400 = 28.',
            extension: 'Benford\'s Law states that in naturally occurring datasets (stock prices, population figures, physical constants, accounting records), the leading digit d appears with frequency log₁₀(1 + 1/d). This gives 1 as the leading digit ~30% of the time and 9 only ~5% of the time. Forensic accountants use Benford\'s Law to detect fraud: fabricated numbers tend to have a uniform distribution of leading digits, deviating significantly from the expected logarithmic distribution.',
            helper: 'Standard form: a × 10ⁿ where 1 ≤ a < 10. Surd simplification: factor out the largest perfect square. Rationalise: multiply numerator and denominator by the conjugate of the denominator.'
        };
    }

    static generateSequencesAndSeriesmat101(originalProblem, originalSolution, options) {
        return {
            difficulty: 'harder',
            scenario: 'Population Modelling: Geometric Growth and the Limits of Resources',
            problem: 'A bacterial colony starts with 500 bacteria and doubles every 20 minutes. Write the first five terms of this geometric sequence. Find the term formula and calculate the population after 3 hours. Then find the sum of the first 10 terms of the arithmetic series 7 + 11 + 15 + ...',
            parameters: {
                firstTerm: 500,
                commonRatio: 2,
                doublingTime: 20,
                timeElapsed: 180,
                termsElapsed: 9,
                populationAfter3h: 256000,
                arithFirstTerm: 7,
                commonDifference: 4,
                arithSum10: 250
            },
            type: 'sequences_and_series',
            context: 'Geometric sequences model exponential growth (bacteria, compound interest, nuclear chain reactions) and decay (radioactivity, drug clearance, cooling). Arithmetic sequences model linear accumulation (uniform savings, uniform motion, equally-spaced measurements). Understanding both is fundamental to mathematical modelling across science, economics, and engineering.',
            application: 'Geometric sequence: 500, 1000, 2000, 4000, 8000. aₙ = 500 × 2^(n−1). 3 hours = 180 minutes = 9 doublings → n = 10. a₁₀ = 500 × 2⁹ = 500 × 512 = 256,000 bacteria. Arithmetic series 7+11+15+...: a=7, d=4. S₁₀ = n/2 × (2a + (n−1)d) = 10/2 × (14 + 36) = 5 × 50 = 250.',
            question: 'For the geometric series 3 + 6 + 12 + 24 + ..., find: (a) the sum of the first 12 terms; (b) prove the sum to infinity does not exist; (c) for the series 1 + 1/2 + 1/4 + ..., find the sum to infinity and the smallest n such that Sₙ > 1.99.',
            answer: '(a) a=3, r=2. S₁₂ = 3(2¹²−1)/(2−1) = 3 × 4095 = 12,285. (b) |r| = 2 > 1 → terms increase without bound → sum → ∞ → sum to infinity does not exist. A geometric series converges only when |r| < 1. (c) a=1, r=1/2. S∞ = a/(1−r) = 1/(1−1/2) = 2. Sₙ > 1.99: 1×(1−(1/2)ⁿ)/(1−1/2) > 1.99 → 2(1−(1/2)ⁿ) > 1.99 → 1−(1/2)ⁿ > 0.995 → (1/2)ⁿ < 0.005 → n × ln(0.5) < ln(0.005) → n > ln(0.005)/ln(0.5) = (−5.298)/(−0.693) = 7.65 → n ≥ 8. Check: S₈ = 2(1−(1/2)⁸) = 2(1−1/256) = 2×255/256 = 1.9922 > 1.99 ✓.',
            extension: 'The Basel problem (∑₁^∞ 1/n² = π²/6) was solved by Euler in 1734, establishing the connection between infinite series and π. This identity connects number theory (the Riemann zeta function ζ(2)) to geometry — an unexpected bridge between two areas of mathematics. The Riemann hypothesis — one of the Millennium Prize Problems (each worth $1 million) — concerns the zeros of the complex extension of the zeta function and remains unsolved.',
            helper: 'Geometric: aₙ = ar^(n−1); Sₙ = a(rⁿ−1)/(r−1); S∞ = a/(1−r) only if |r|<1. Arithmetic: aₙ = a+(n−1)d; Sₙ = n/2(2a+(n−1)d) or n/2(a+l).'
        };
    }
}

export { ExaminationGenerator };
