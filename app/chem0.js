


// === REDOX CHEMISTRY PROBLEM GENERATORS ===

generateRelatedRedoxStoichiometry(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Complex Redox Reaction',
        problem: 'Balance in acidic: MnO4⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺',
        parameters: { equation: 'MnO4- + Fe2+ → Mn2+ + Fe3+', medium: 'acidic', method: 'half-reaction', findBalance: true },
        type: 'redox_stoichiometry',
        subparts: [
            'Write half-reactions: MnO4⁻ → Mn²⁺ and Fe²⁺ → Fe³⁺',
            'Balance O with H2O, H with H⁺, charge with e⁻',
            'Multiply to equalize electrons (5 Fe²⁺ for 1 MnO4⁻)',
            'Balanced: MnO4⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H2O'
        ],
        helper: 'Half-reaction method: 1) Split, 2) Balance each, 3) Equalize e⁻, 4) Add',
        realWorldContext: 'Permanganate titrations'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Redox',
        problem: 'Balance: Fe + O2 → Fe2O3 using oxidation states',
        parameters: { equation: 'Fe + O2 → Fe2O3', method: 'oxidation_states', findBalance: true },
        type: 'redox_stoichiometry',
        subparts: [
            'Assign oxidation states: Fe: 0 → +3, O: 0 → -2',
            'Fe loses 3e⁻ each, O gains 2e⁻ each',
            'Balance electrons: 4 Fe (12e⁻ lost) and 3 O2 (12e⁻ gained)',
            'Balanced: 4Fe + 3O2 → 2Fe2O3'
        ],
        helper: 'Oxidation number method: Balance atoms, then electrons',
        realWorldContext: 'Rust formation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Basic Solution Redox',
        problem: 'Balance in basic: ClO⁻ + I⁻ → Cl⁻ + I2',
        parameters: { equation: 'ClO- + I- → Cl- + I2', medium: 'basic', method: 'half-reaction', findBalance: true },
        type: 'redox_stoichiometry',
        subparts: [
            'Balance as if acidic first',
            'Add OH⁻ to neutralize H⁺ (forms H2O)',
            'Cancel water molecules on both sides',
            'Balanced: ClO⁻ + 2I⁻ + H2O → Cl⁻ + I2 + 2OH⁻'
        ],
        helper: 'Basic solution: Balance in acid, then add OH⁻ = H⁺ to form H2O',
        realWorldContext: 'Disinfection reactions'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Disproportionation',
        problem: 'Balance Cl2 + NaOH → NaCl + NaClO + H2O (cold, dilute)',
        parameters: { equation: 'Cl2 + NaOH → NaCl + NaClO + H2O', disproportionation: true, findBalance: true },
        type: 'redox_stoichiometry',
        subparts: [
            'Identify disproportionation: Cl2 (0) → Cl⁻ (-1) and ClO⁻ (+1)',
            'Same element both oxidized and reduced',
            'Balance: Cl2 + 2NaOH → NaCl + NaClO + H2O',
            'Note: One Cl reduced, one Cl oxidized'
        ],
        helper: 'Disproportionation: Same element undergoes both oxidation and reduction',
        realWorldContext: 'Hypochlorous acid formation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Electron Transfer',
        problem: 'Electrons transferred when 2 mol permanganate oxidizes iron(II)',
        parameters: { moles: 2, oxidant: 'MnO4-', reductant: 'Fe2+', findElectronTransfer: true },
        type: 'redox_stoichiometry',
        subparts: [
            'Each MnO4⁻ gains 5 electrons (Mn: +7 → +2)',
            'Each Fe²⁺ loses 1 electron (Fe: +2 → +3)',
            'For 2 mol MnO4⁻: 2 × 5 = 10 mol electrons transferred',
            'This oxidizes 10 mol Fe²⁺ to Fe³⁺'
        ],
        helper: 'Electrons transferred = moles × change in oxidation number',
        realWorldContext: 'Electrochemistry calculations'
    });

    return relatedProblems;
}

generateRelatedOxidationStates(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Assign Oxidation States',
        problem: 'Determine oxidation state of each atom in H2SO4',
        parameters: { compound: 'H2SO4', assignAllStates: true },
        type: 'oxidation_states',
        subparts: [
            'Assign H: +1 (rule: H is +1 except in hydrides)',
            'Assign O: -2 (rule: O is -2 except in peroxides)',
            'Calculate S: 2(+1) + S + 4(-2) = 0',
            'S = +6'
        ],
        helper: 'Rules: H = +1, O = -2 (usually), sum = charge; H2SO4: H(+1), S(+6), O(-2)',
        realWorldContext: 'Sulfuric acid oxidation analysis'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Oxidation States',
        problem: 'What is oxidation state of Cl in NaCl?',
        parameters: { compound: 'NaCl', element: 'Cl', findState: true },
        type: 'oxidation_states',
        subparts: [
            'Identify NaCl as ionic compound',
            'Na is +1 (Group 1 metal)',
            'Compound is neutral, so Cl must be -1',
            'Oxidation state of Cl: -1'
        ],
        helper: 'Ionic compounds: oxidation state = ionic charge; Na⁺Cl⁻',
        realWorldContext: 'Ionic compound oxidation states'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Peroxide Exception',
        problem: 'Oxidation state of O in H2O2 vs H2O. Explain difference.',
        parameters: { compounds: ['H2O2', 'H2O'], element: 'O', compareStates: true },
        type: 'oxidation_states',
        subparts: [
            'In H2O: O = -2 (normal state)',
            'In H2O2: 2(+1) + 2(O) = 0, so O = -1',
            'Peroxides contain O-O bond',
            'Exception: O is -1 in peroxides, not -2'
        ],
        helper: 'O usually -2, but -1 in peroxides (O-O bond), -½ in superoxides',
        realWorldContext: 'Peroxide oxidation state exception'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Variable Oxidation States',
        problem: 'Manganese compounds: MnO2, KMnO4, MnSO4. Find Mn oxidation state in each.',
        parameters: { compounds: ['MnO2', 'KMnO4', 'MnSO4'], element: 'Mn', findAllStates: true },
        type: 'oxidation_states',
        subparts: [
            'MnO2: Mn + 2(-2) = 0, Mn = +4',
            'KMnO4: (+1) + Mn + 4(-2) = 0, Mn = +7',
            'MnSO4: Mn + (+6) + 4(-2) = 0, Mn = +2',
            'Mn can have multiple oxidation states: +2, +4, +7'
        ],
        helper: 'Transition metals have variable oxidation states; Mn: +2 to +7',
        realWorldContext: 'Transition metal oxidation states'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Ions',
        problem: 'Oxidation state of Cr in [Cr(NH3)6]³⁺',
        parameters: { complexIon: '[Cr(NH3)6]3+', findMetalState: true },
        type: 'oxidation_states',
        subparts: [
            'NH3 is neutral ligand (oxidation state = 0)',
            'Total charge of complex = +3',
            'Cr + 6(0) = +3',
            'Oxidation state of Cr: +3'
        ],
        helper: 'Complex ions: Oxidation state of metal = charge - sum of ligand charges',
        realWorldContext: 'Coordination compound oxidation states'
    });

    return relatedProblems;
}

generateRelatedHalfReactions(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Write Half-Reactions',
        problem: 'Zn + Cu²⁺ → Zn²⁺ + Cu. Write oxidation and reduction half-reactions.',
        parameters: { equation: 'Zn + Cu2+ → Zn2+ + Cu', writeHalfReactions: true },
        type: 'half_reactions',
        subparts: [
            'Oxidation half-reaction: Zn → Zn²⁺ + 2e⁻',
            'Reduction half-reaction: Cu²⁺ + 2e⁻ → Cu',
            'Electrons lost = electrons gained',
            'Add to get overall equation'
        ],
        helper: 'Oxidation: loses e⁻ (LEO); Reduction: gains e⁻ (GER)',
        realWorldContext: 'Metal displacement reaction'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Identify Oxidation',
        problem: 'In half-reaction Fe²⁺ → Fe³⁺ + e⁻, is this oxidation or reduction?',
        parameters: { halfReaction: 'Fe2+ → Fe3+ + e-', identify: true },
        type: 'half_reactions',
        subparts: [
            'Fe loses an electron',
            'Oxidation state increases: +2 → +3',
            'Loss of electrons = oxidation',
            'Answer: This is oxidation'
        ],
        helper: 'OIL RIG: Oxidation Is Loss (of e⁻), Reduction Is Gain (of e⁻)',
        realWorldContext: 'Electron transfer identification'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Balance in Acidic Solution',
        problem: 'Balance: MnO4⁻ → Mn²⁺ (acidic solution)',
        parameters: { halfReaction: 'MnO4- → Mn2+', medium: 'acidic', balance: true },
        type: 'half_reactions',
        subparts: [
            'Balance Mn (already balanced)',
            'Balance O with H2O: MnO4⁻ → Mn²⁺ + 4H2O',
            'Balance H with H⁺: MnO4⁻ + 8H⁺ → Mn²⁺ + 4H2O',
            'Balance charge with e⁻: MnO4⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H2O'
        ],
        helper: 'Acidic: 1) Balance atoms except O,H; 2) Add H2O for O; 3) Add H⁺ for H; 4) Add e⁻ for charge',
        realWorldContext: 'Permanganate reduction'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Balance in Basic Solution',
        problem: 'Balance: ClO⁻ → Cl⁻ (basic solution)',
        parameters: { halfReaction: 'ClO- → Cl-', medium: 'basic', balance: true },
        type: 'half_reactions',
        subparts: [
            'Balance as if acidic: ClO⁻ + 2H⁺ + 2e⁻ → Cl⁻ + H2O',
            'Add 2OH⁻ to both sides to neutralize H⁺',
            'Left: ClO⁻ + 2H2O + 2e⁻',
            'Simplified: ClO⁻ + H2O + 2e⁻ → Cl⁻ + 2OH⁻'
        ],
        helper: 'Basic: Balance in acid, then add OH⁻ to neutralize all H⁺',
        realWorldContext: 'Hypochlorite reduction'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combine Half-Reactions',
        problem: 'Oxidation: Fe²⁺ → Fe³⁺. Reduction: Cr2O7²⁻ → Cr³⁺ (acidic). Write overall equation.',
        parameters: { oxidation: 'Fe2+ → Fe3+', reduction: 'Cr2O72- → Cr3+', medium: 'acidic', combineReactions: true },
        type: 'half_reactions',
        subparts: [
            'Balance reduction: Cr2O7²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H2O',
            'Balance oxidation: Fe²⁺ → Fe³⁺ + e⁻',
            'Multiply oxidation by 6 to equalize electrons',
            'Overall: Cr2O7²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H2O'
        ],
        helper: 'Combine: Multiply to equalize e⁻, add half-reactions, cancel electrons',
        realWorldContext: 'Dichromate titration'
    });

    return relatedProblems;
}

generateRelatedElectrochemistry(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Standard Cell Potential',
        problem: 'Calculate E°cell for Zn|Zn²⁺||Cu²⁺|Cu. E°(Zn²⁺/Zn)=-0.76V, E°(Cu²⁺/Cu)=+0.34V',
        parameters: { anode: 'Zn', cathode: 'Cu', E_anode: -0.76, E_cathode: 0.34, calculateEcell: true },
        type: 'electrochemistry',
        subparts: [
            'Identify anode (oxidation at Zn) and cathode (reduction at Cu)',
            'E°cell = E°cathode - E°anode',
            'E°cell = 0.34 - (-0.76) = 1.10 V',
            'Positive E° means spontaneous reaction'
        ],
        helper: 'formula: E°cell = E°cathode - E°anode; Positive E° = spontaneous',
        realWorldContext: 'Daniell cell'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Anode vs Cathode',
        problem: 'In galvanic cell, which electrode is positive? Where does oxidation occur?',
        parameters: { cellType: 'galvanic', identifyElectrodes: true },
        type: 'electrochemistry',
        subparts: [
            'In galvanic cell, cathode is positive electrode',
            'Anode is negative electrode',
            'Oxidation occurs at anode (loses electrons)',
            'Reduction occurs at cathode (gains electrons)'
        ],
        helper: 'Galvanic: Anode (-) = oxidation; Cathode (+) = reduction',
        realWorldContext: 'Cell electrode identification'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Nernst Equation',
        problem: 'E°cell = 1.10V for Zn-Cu cell. Calculate Ecell when [Zn²⁺]=0.1M, [Cu²⁺]=1.0M at 298K.',
        parameters: { Ecell_standard: 1.10, concentrations: { 'Zn2+': 0.1, 'Cu2+': 1.0 }, temperature: 298, useNernst: true },
        type: 'electrochemistry',
        subparts: [
            'Nernst equation: E = E° - (RT/nF)lnQ',
            'At 298K: E = E° - (0.0592/n)logQ',
            'Q = [Zn²⁺]/[Cu²⁺] = 0.1/1.0 = 0.1',
            'E = 1.10 - (0.0592/2)log(0.1) = 1.10 + 0.030 = 1.13 V'
        ],
        helper: 'Nernst: E = E° - (0.0592/n)logQ at 25°C; Q = [products]/[reactants]',
        realWorldContext: 'Non-standard cell potentials'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Spontaneity',
        problem: 'If E°cell > 0, is reaction spontaneous? Relate to ΔG.',
        parameters: { concept: 'spontaneity', relateToGibbs: true },
        type: 'electrochemistry',
        subparts: [
            'Relationship: ΔG° = -nFE°',
            'If E° > 0, then ΔG° < 0',
            'Negative ΔG means spontaneous',
            'Conclusion: E° > 0 indicates spontaneous reaction'
        ],
        helper: 'formula: ΔG° = -nFE°; E° > 0 → ΔG° < 0 → spontaneous',
        realWorldContext: 'Thermodynamics of electrochemical cells'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Equilibrium Constant',
        problem: 'Calculate K for Zn + Cu²⁺ ⇌ Zn²⁺ + Cu from E°cell = 1.10V. (Use: E° = (RT/nF)lnK)',
        parameters: { Ecell: 1.10, n: 2, calculateK: true },
        type: 'electrochemistry',
        subparts: [
            'At 298K: E° = (0.0592/n)logK',
            'Rearrange: logK = nE°/0.0592',
            'logK = (2 × 1.10)/0.0592 = 37.2',
            'K = 10³⁷·² ≈ 1.6 × 10³⁷ (very large, very favorable)'
        ],
        helper: 'formula: logK = nE°/0.0592 at 25°C; Large K means very favorable',
        realWorldContext: 'Cell potential and equilibrium'
    });

    return relatedProblems;
}

generateRelatedGalvaniCells(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Cell Diagram',
        problem: 'Write cell notation for: Zn|Zn²⁺(1M)||Ag⁺(1M)|Ag',
        parameters: { anode: 'Zn', cathode: 'Ag', writeCellNotation: true },
        type: 'galvanic_cells',
        subparts: [
            'Anode (oxidation) on left: Zn|Zn²⁺',
            'Salt bridge indicated by ||',
            'Cathode (reduction) on right: Ag⁺|Ag',
            'Full notation: Zn(s)|Zn²⁺(aq)||Ag⁺(aq)|Ag(s)'
        ],
        helper: 'Cell notation: Anode|Anode solution||Cathode solution|Cathode',
        realWorldContext: 'Standard cell notation'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Electron Flow',
        problem: 'In Zn-Cu galvanic cell, which direction do electrons flow in external circuit?',
        parameters: { cell: 'Zn-Cu', identifyElectronFlow: true },
        type: 'galvanic_cells',
        subparts: [
            'Electrons are produced at anode (Zn)',
            'Electrons are consumed at cathode (Cu)',
            'Flow: from anode to cathode',
            'Direction: Zn → external wire → Cu'
        ],
        helper: 'Electrons flow: Anode → wire → Cathode (outside the cell)',
        realWorldContext: 'Current direction in cells'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Salt Bridge Function',
        problem: 'Why is salt bridge necessary in galvanic cell? What happens without it?',
        parameters: { component: 'salt bridge', explainFunction: true },
        type: 'galvanic_cells',
        subparts: [
            'Salt bridge maintains electrical neutrality',
            'Anions migrate to anode compartment (becomes positive)',
            'Cations migrate to cathode compartment (becomes negative)',
            'Without it: charge buildup stops electron flow'
        ],
        helper: 'Salt bridge: Completes circuit, prevents charge buildup, maintains neutrality',
        realWorldContext: 'Ionic circuit completion'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Concentration Cells',
        problem: 'Cu|Cu²⁺(0.01M)||Cu²⁺(1.0M)|Cu. Calculate Ecell.',
        parameters: { concentrationCell: true, metal: 'Cu', concentrations: [0.01, 1.0], calculateEcell: true },
        type: 'galvanic_cells',
        subparts: [
            'E° = 0 (same metal/ion at both electrodes)',
            'Use Nernst: E = -(0.0592/2)log([Cu²⁺]anode/[Cu²⁺]cathode)',
            'E = -(0.0592/2)log(0.01/1.0)',
            'E = -(0.0592/2)(-2) = 0.0592 V'
        ],
        helper: 'Concentration cell: E° = 0; Cell runs due to concentration difference',
        realWorldContext: 'Concentration-driven cells'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Battery Design',
        problem: 'Design galvanic cell with E°cell ≈ 3V. Choose appropriate half-reactions.',
        parameters: { targetVoltage: 3.0, designCell: true, selectHalfReactions: true },
        type: 'galvanic_cells',
        subparts: [
            'Need large difference in reduction potentials',
            'Choose strong oxidizer (high E°): Li⁺/Li (-3.04V) as anode',
            'Choose strong reducer (low E°): F2/F⁻ (+2.87V) as cathode',
            'E°cell = 2.87 - (-3.04) = 5.91V (or choose milder couple for 3V)'
        ],
        helper: 'High voltage: Large ΔE° between half-reactions; Li and F2 give highest',
        realWorldContext: 'Practical battery design'
    });

    return relatedProblems;
}

generateRelatedElectrolysis(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electrolysis Products',
        problem: 'Predict products at anode and cathode during electrolysis of molten NaCl.',
        parameters: { electrolyte: 'NaCl', state: 'molten', predictProducts: true },
        type: 'electrolysis',
        subparts: [
            'Cathode (reduction): Na⁺ + e⁻ → Na(l)',
            'Anode (oxidation): 2Cl⁻ → Cl2(g) + 2e⁻',
            'Products: sodium metal at cathode, chlorine gas at anode',
            'Overall: 2NaCl(l) → 2Na(l) + Cl2(g)'
        ],
        helper: 'Molten salt: Cations reduced at cathode, anions oxidized at anode',
        realWorldContext: 'Industrial chlorine production'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Electrolysis vs Galvanic',
        problem: 'What is main difference between electrolytic and galvanic cells?',
        parameters: { compare: ['electrolytic', 'galvanic'], identifyDifferences: true },
        type: 'electrolysis',
        subparts: [
            'Galvanic: spontaneous, produces electricity',
            'Electrolytic: non-spontaneous, requires electricity input',
            'Galvanic: ΔG < 0, E > 0',
            'Electrolytic: ΔG > 0, E < 0 (external voltage applied)'
        ],
        helper: 'Galvanic = battery (makes electricity); Electrolytic = uses electricity',
        realWorldContext: 'Cell type comparison'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Faraday\'s Laws',
        problem: 'How many grams of Cu deposited when 2.00 A current passes for 1.00 hour through CuSO4?',
        parameters: { current: 2.00, time: 3600, compound: 'CuSO4', metal: 'Cu', calculateMass: true },
        type: 'electrolysis',
        subparts: [
            'Calculate charge: Q = It = 2.00 A × 3600 s = 7200 C',
            'Calculate moles of e⁻: n = Q/F = 7200/96500 = 0.0746 mol e⁻',
            'Cu²⁺ + 2e⁻ → Cu, so mol Cu = 0.0746/2 = 0.0373 mol',
            'Mass Cu = 0.0373 × 63.5 = 2.37 g'
        ],
        helper: 'Faraday\'s Law: n(e⁻) = Q/F = It/F; F = 96,500 C/mol',
        realWorldContext: 'Electroplating calculations'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Water Electrolysis',
        problem: 'Electrolysis of water: 2H2O → 2H2 + O2. Where is H2 produced? O2?',
        parameters: { electrolyte: 'water', identifyProducts: true, explainElectrodes: true },
        type: 'electrolysis',
        subparts: [
            'Cathode (reduction): 2H2O + 2e⁻ → H2 + 2OH⁻',
            'Anode (oxidation): 2H2O → O2 + 4H⁺ + 4e⁻',
            'H2 produced at cathode (negative electrode)',
            'O2 produced at anode (positive electrode)'
        ],
        helper: 'Water: H2 at cathode (reduction), O2 at anode (oxidation); Ratio 2:1',
        realWorldContext: 'Hydrogen production'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multiple Deposits',
        problem: 'Same current through CuSO4 and AgNO3 in series. Compare masses deposited.',
        parameters: { seriesCells: true, compounds: ['CuSO4', 'AgNO3'], compareMasses: true },
        type: 'electrolysis',
        subparts: [
            'Same charge (Q) passes through both',
            'Cu: n = Q/2F (Cu²⁺ + 2e⁻); Ag: n = Q/F (Ag⁺ + e⁻)',
            'Mass Cu = (Q/2F) × 63.5; Mass Ag = (Q/F) × 108',
            'Ratio: mCu/mAg = (63.5/2)/108 = 31.75/108 ≈ 0.294'
        ],
        helper: 'Series cells: Same Q; Different n depends on charge of ion',
        realWorldContext: 'Faraday\'s law applications'
    });

    return relatedProblems;
}


// === CHEMICAL BONDING & LEWIS STRUCTURES (continued) ===

generateRelatedVSEPR(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'VSEPR Prediction',
        problem: 'Predict molecular geometry for NH3 (3 bonds, 1 lone pair)',
        parameters: { molecule: 'NH3', bondingPairs: 3, lonePairs: 1, predictShape: true },
        type: 'vsepr_theory',
        subparts: [
            'Count total electron pairs: 3 bonding + 1 lone = 4 pairs',
            'Electron geometry: tetrahedral (4 pairs)',
            'Molecular geometry: trigonal pyramidal (3 atoms)',
            'Bond angle: ~107° (less than 109.5° due to lone pair repulsion)'
        ],
        helper: 'VSEPR: 4 e⁻ pairs → tetrahedral arrangement; 1 lone pair → pyramidal shape',
        realWorldContext: 'Ammonia molecular shape'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic VSEPR',
        problem: 'What is the shape of CH4 (4 bonding pairs, 0 lone pairs)?',
        parameters: { molecule: 'CH4', bondingPairs: 4, lonePairs: 0, predictShape: true },
        type: 'vsepr_theory',
        subparts: [
            'Count electron pairs: 4 bonding pairs',
            'No lone pairs on central carbon',
            'Shape: tetrahedral',
            'Bond angles: 109.5° (perfect tetrahedral)'
        ],
        helper: '4 bonding pairs, 0 lone pairs → tetrahedral; All angles 109.5°',
        realWorldContext: 'Methane molecular geometry'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Effect of Lone Pairs',
        problem: 'Compare bond angles: CH4 (109.5°), NH3 (~107°), H2O (~104.5°). Explain trend.',
        parameters: { molecules: ['CH4', 'NH3', 'H2O'], compareBondAngles: true, explainLonePairEffect: true },
        type: 'vsepr_theory',
        subparts: [
            'All have tetrahedral electron geometry',
            'CH4: 0 lone pairs, NH3: 1 lone pair, H2O: 2 lone pairs',
            'Lone pairs repel more strongly than bonding pairs',
            'More lone pairs → smaller bond angles (LP-BP > BP-BP repulsion)'
        ],
        helper: 'Repulsion order: LP-LP > LP-BP > BP-BP; More lone pairs → smaller bond angles',
        realWorldContext: 'Lone pair repulsion effects'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'T-shaped Geometry',
        problem: 'Predict shape of ClF3 (3 bonding, 2 lone pairs)',
        parameters: { molecule: 'ClF3', bondingPairs: 3, lonePairs: 2, predictShape: true },
        type: 'vsepr_theory',
        subparts: [
            'Total electron pairs: 3 + 2 = 5',
            'Electron geometry: trigonal bipyramidal',
            'Lone pairs occupy equatorial positions (less repulsion)',
            'Molecular shape: T-shaped'
        ],
        helper: '5 e⁻ pairs: trigonal bipyramidal; 2 LP equatorial → T-shaped',
        realWorldContext: 'Complex molecular geometries'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Square Planar Geometry',
        problem: 'XeF4 has square planar shape. Electron pairs = 6. Why not octahedral?',
        parameters: { molecule: 'XeF4', electronPairs: 6, actualShape: 'square planar', explainDeviation: true },
        type: 'vsepr_theory',
        subparts: [
            'Total: 4 bonding + 2 lone pairs = 6 electron pairs',
            'Electron geometry: octahedral',
            'Two lone pairs positioned opposite each other (minimize repulsion)',
            'Molecular geometry: square planar (4 F atoms in plane)'
        ],
        helper: '6 e⁻ pairs: octahedral; 2 LP opposite → square planar shape',
        realWorldContext: 'Xenon compound geometries'
    });

    return relatedProblems;
}

generateRelatedBondPolarity(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electronegativity Difference',
        problem: 'HCl bond: H (2.1), Cl (3.0). Calculate ΔEN and classify bond type.',
        parameters: { bond: 'H-Cl', electronegativities: { H: 2.1, Cl: 3.0 }, classifyBond: true },
        type: 'bond_polarity',
        subparts: [
            'Calculate ΔEN: |3.0 - 2.1| = 0.9',
            'Classification: 0-0.4 = nonpolar covalent, 0.4-1.7 = polar covalent, >1.7 = ionic',
            'ΔEN = 0.9 → polar covalent',
            'Partial charges: Hδ+ - Clδ- (Cl is more electronegative)'
        ],
        helper: 'ΔEN ranges: <0.4 nonpolar, 0.4-1.7 polar covalent, >1.7 ionic',
        realWorldContext: 'Polar covalent bonding'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Polar vs Nonpolar',
        problem: 'Is O2 polar or nonpolar? Explain.',
        parameters: { molecule: 'O2', determinePolarityAndExplain: true },
        type: 'bond_polarity',
        subparts: [
            'O2 has O=O double bond',
            'Both atoms are identical (same electronegativity)',
            'ΔEN = 0 (no electronegativity difference)',
            'Nonpolar covalent bond; nonpolar molecule'
        ],
        helper: 'Same atoms → ΔEN = 0 → nonpolar; Examples: H2, O2, N2, Cl2',
        realWorldContext: 'Molecular polarity basics'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Molecular Polarity vs Bond Polarity',
        problem: 'CO2 has polar bonds but is nonpolar. CCl4 has polar bonds but is nonpolar. Explain.',
        parameters: { molecules: ['CO2', 'CCl4'], polarBondsNonpolarMolecule: true, explainSymmetry: true },
        type: 'bond_polarity',
        subparts: [
            'CO2: O=C=O linear, polar C=O bonds point opposite directions',
            'Bond dipoles cancel due to symmetry → nonpolar molecule',
            'CCl4: tetrahedral, four C-Cl bonds symmetrically arranged',
            'All dipoles cancel → nonpolar molecule despite polar bonds'
        ],
        helper: 'Molecular polarity: depends on bond polarity AND molecular geometry (symmetry)',
        realWorldContext: 'Symmetry and molecular polarity'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Dipole Moment',
        problem: 'Which has larger dipole moment: H2O or H2S? Explain.',
        parameters: { molecules: ['H2O', 'H2S'], compareDipoleMoments: true },
        type: 'bond_polarity',
        subparts: [
            'Both are bent molecules (similar geometry)',
            'O is more electronegative than S',
            'H2O has larger ΔEN for O-H bonds vs H-S bonds',
            'H2O has larger dipole moment (1.85 D vs 0.97 D for H2S)'
        ],
        helper: 'Dipole moment depends on: ΔEN (bond polarity) and geometry',
        realWorldContext: 'Dipole moment comparisons'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Partial Charges',
        problem: 'In NH3, assign δ+ and δ- charges. N (3.0), H (2.1).',
        parameters: { molecule: 'NH3', electronegativities: { N: 3.0, H: 2.1 }, assignPartialCharges: true },
        type: 'bond_polarity',
        subparts: [
            'N is more electronegative than H (3.0 > 2.1)',
            'N attracts bonding electrons more strongly',
            'N has partial negative charge (δ-)',
            'Each H has partial positive charge (δ+); Structure: (δ+)H3N(δ-)'
        ],
        helper: 'More electronegative atom gets δ-; Less electronegative gets δ+',
        realWorldContext: 'Partial charge distribution'
    });

    return relatedProblems;
}

generateRelatedIntermolecularForces(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Identify IMF Types',
        problem: 'What intermolecular forces exist in liquid HF?',
        parameters: { substance: 'HF', identifyAllForces: true },
        type: 'intermolecular_forces',
        subparts: [
            'HF is polar (H-F bond is very polar)',
            'Contains H bonded to F (highly electronegative)',
            'Forces present: London dispersion (all molecules)',
            'Dipole-dipole and hydrogen bonding (strongest IMF in HF)'
        ],
        helper: 'H-bonding occurs when H bonds to N, O, or F',
        realWorldContext: 'Hydrogen bonding in HF'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'London Dispersion',
        problem: 'Why do all molecules exhibit London dispersion forces?',
        parameters: { concept: 'London dispersion', explainUniversality: true },
        type: 'intermolecular_forces',
        subparts: [
            'All molecules have electrons',
            'Electrons are in constant motion',
            'Temporary/instantaneous dipoles form',
            'These induce dipoles in neighboring molecules (universal attraction)'
        ],
        helper: 'London forces: temporary dipoles; Present in ALL molecules',
        realWorldContext: 'Universal intermolecular forces'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Boiling Point Trends',
        problem: 'Rank by boiling point: CH4, NH3, H2O, HF. Explain.',
        parameters: { molecules: ['CH4', 'NH3', 'H2O', 'HF'], rankBoilingPoints: true, explainIMF: true },
        type: 'intermolecular_forces',
        subparts: [
            'CH4: only London forces (weakest, lowest bp: -162°C)',
            'NH3: H-bonding but 1 lone pair (bp: -33°C)',
            'H2O: H-bonding with 2 lone pairs (more H-bonds, bp: 100°C)',
            'HF: strongest H-bonding but linear (bp: 20°C); Order: CH4 < NH3 < HF < H2O'
        ],
        helper: 'IMF strength order: H-bonding > dipole-dipole > London; More H-bonds → higher bp',
        realWorldContext: 'IMF strength and physical properties'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Hydrogen Bonding',
        problem: 'Which can form hydrogen bonds: CH4, NH3, H2O, CH3OH?',
        parameters: { molecules: ['CH4', 'NH3', 'H2O', 'CH3OH'], identifyHBonding: true },
        type: 'intermolecular_forces',
        subparts: [
            'H-bonding requires H bonded to N, O, or F',
            'CH4: no N, O, or F → no H-bonding',
            'NH3: H-N bonds → can H-bond',
            'H2O: H-O bonds → can H-bond; CH3OH: H-O bonds → can H-bond'
        ],
        helper: 'H-bonding: H must be bonded to N, O, or F (highly electronegative)',
        realWorldContext: 'Hydrogen bonding criteria'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Solubility and IMF',
        problem: 'Explain why ethanol (C2H5OH) dissolves in water but hexane (C6H14) does not.',
        parameters: { solvent: 'water', solutes: ['ethanol', 'hexane'], explainSolubility: true },
        type: 'intermolecular_forces',
        subparts: [
            '"Like dissolves like" principle',
            'Ethanol has -OH group → can H-bond with water → soluble',
            'Hexane is nonpolar (only London forces) → cannot H-bond',
            'Hexane cannot overcome water\'s H-bonding network → insoluble'
        ],
        helper: 'Solubility: "Like dissolves like"; Polar dissolves polar, nonpolar dissolves nonpolar',
        realWorldContext: '"Like dissolves like" principle'
    });

    return relatedProblems;
}

// === STATES OF MATTER & PARTICLE THEORY ===

generateRelatedStatesOfMatter(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Particle Arrangement',
        problem: 'Describe particle arrangement and motion in solid, liquid, and gas states.',
        parameters: { compareAllStates: true, describeParticles: true },
        type: 'states_of_matter',
        subparts: [
            'Solid: particles in fixed positions, vibrate in place, closely packed',
            'Liquid: particles close together, slide past each other, more kinetic energy',
            'Gas: particles far apart, move randomly and rapidly, highest kinetic energy',
            'Trend: solid < liquid < gas in terms of particle motion and energy'
        ],
        helper: 'KE: Solid (vibrate) < Liquid (slide) < Gas (free movement)',
        realWorldContext: 'Kinetic molecular theory'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'State Identification',
        problem: 'A substance has fixed volume but takes shape of container. What state?',
        parameters: { properties: 'fixed volume, variable shape', identifyState: true },
        type: 'states_of_matter',
        subparts: [
            'Fixed volume means incompressible (particles close)',
            'Variable shape means particles can move',
            'This combination describes a liquid',
            'Liquids conform to container shape but maintain constant volume'
        ],
        helper: 'Solid: fixed shape & volume; Liquid: fixed volume, variable shape; Gas: both variable',
        realWorldContext: 'Properties of matter states'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Plasma State',
        problem: 'Describe plasma state. Give examples and explain ionization.',
        parameters: { state: 'plasma', explainProperties: true, giveExamples: true },
        type: 'states_of_matter',
        subparts: [
            'Plasma: ionized gas with free electrons and ions',
            'Formed at very high temperatures (electrons stripped from atoms)',
            'Conducts electricity (unlike regular gases)',
            'Examples: stars (sun), lightning, neon signs, flames'
        ],
        helper: 'Plasma: 4th state, ionized gas, high energy, conducts electricity',
        realWorldContext: 'Fourth state of matter'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Density Comparison',
        problem: 'Why is ice less dense than liquid water? (Explain molecular structure)',
        parameters: { substance: 'water', anomaly: 'ice floats', explainMolecular: true },
        type: 'states_of_matter',
        subparts: [
            'Water forms hydrogen bonds',
            'In ice: H-bonds create hexagonal crystal structure with spaces',
            'In liquid: H-bonds constantly break/reform, molecules closer',
            'Ice structure is more open → lower density → ice floats'
        ],
        helper: 'Ice: H-bonded hexagonal structure with open spaces → less dense than liquid',
        realWorldContext: 'Water density anomaly'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Supercritical Fluids',
        problem: 'What is supercritical CO2? Properties and applications?',
        parameters: { concept: 'supercritical fluid', substance: 'CO2', explainAndApply: true },
        type: 'states_of_matter',
        subparts: [
            'Above critical temperature and pressure: no distinct liquid/gas phases',
            'Supercritical CO2: T > 31°C, P > 73 atm',
            'Properties: diffuses like gas, dissolves like liquid',
            'Applications: decaffeination, dry cleaning, extraction'
        ],
        helper: 'Supercritical: T > Tc and P > Pc; Hybrid properties of gas and liquid',
        realWorldContext: 'Advanced states of matter'
    });

    return relatedProblems;
}

generateRelatedPhaseChanges(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Heating Curve',
        problem: 'Ice at -20°C heated to steam at 120°C. Sketch heating curve and label phases.',
        parameters: { substance: 'water', startTemp: -20, endTemp: 120, drawHeatingCurve: true },
        type: 'phase_changes',
        subparts: [
            'Segment 1: ice warms -20°C to 0°C (slope)',
            'Segment 2: melting at 0°C (horizontal plateau)',
            'Segment 3: liquid water warms 0°C to 100°C (slope)',
            'Segment 4: boiling at 100°C (horizontal); Segment 5: steam warms above 100°C'
        ],
        helper: 'Heating curve: slopes = temp change; plateaus = phase change (constant T)',
        realWorldContext: 'Water heating curve'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Endothermic vs Exothermic',
        problem: 'Is condensation endothermic or exothermic? Explain.',
        parameters: { phaseChange: 'condensation', identifyEnergyChange: true },
        type: 'phase_changes',
        subparts: [
            'Condensation: gas → liquid',
            'Particles slow down and come closer together',
            'Energy is released as particles lose kinetic energy',
            'Exothermic process (ΔH < 0)'
        ],
        helper: 'Energy: Melting/vaporization/sublimation = endo (+); Freezing/condensation/deposition = exo (-)',
        realWorldContext: 'Energy in phase transitions'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Heat Calculation',
        problem: 'Heat needed to convert 50g ice at 0°C to water at 0°C. (ΔHfus = 334 J/g)',
        parameters: { mass: 50, phaseChange: 'melting', heatOfFusion: 334, calculateEnergy: true },
        type: 'phase_changes',
        subparts: [
            'Phase change at constant temperature (0°C)',
            'Use formula: q = m × ΔHfus',
            'Calculate: q = 50 g × 334 J/g',
            'q = 16,700 J = 16.7 kJ (energy absorbed)'
        ],
        helper: 'formula: q = m × ΔHfus (fusion) or q = m × ΔHvap (vaporization)',
        realWorldContext: 'Latent heat of fusion'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sublimation',
        problem: 'Dry ice (solid CO2) sublimates. Explain and give another example.',
        parameters: { substance: 'CO2', phaseChange: 'sublimation', explainAndGiveExamples: true },
        type: 'phase_changes',
        subparts: [
            'Sublimation: solid → gas (skips liquid phase)',
            'Dry ice at room temp and pressure directly becomes gas',
            'Other examples: iodine crystals, naphthalene (mothballs)',
            'Occurs when vapor pressure > atmospheric pressure below melting point'
        ],
        helper: 'Sublimation: solid → gas; Examples: dry ice, iodine, snow in freezer',
        realWorldContext: 'Direct solid-to-gas transition'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Phase Diagram',
        problem: 'Interpret water phase diagram: triple point, critical point, phase boundaries.',
        parameters: { substance: 'water', interpretPhaseDiagram: true, labelKeyPoints: true },
        type: 'phase_changes',
        subparts: [
            'Triple point: all 3 phases coexist (0.01°C, 0.006 atm for water)',
            'Critical point: above this, no distinct liquid/gas (374°C, 218 atm)',
            'Phase boundaries: solid-liquid, liquid-gas, solid-gas',
            'Water anomaly: solid-liquid line has negative slope (ice melts under pressure)'
        ],
        helper: 'Phase diagram: Triple point (3 phases), Critical point (no phase distinction)',
        realWorldContext: 'Phase equilibrium diagrams'
    });

    return relatedProblems;
}

generateRelatedGasLaws(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Boyle\'s Law',
        problem: 'Gas at 2.0 atm in 5.0 L. Pressure at 10.0 L (constant T)?',
        parameters: { P1: 2.0, V1: 5.0, V2: 10.0, law: 'Boyle', findP2: true },
        type: 'gas_laws',
        subparts: [
            'State Boyle\'s Law: P₁V₁ = P₂V₂ (constant T, n)',
            'Substitute values: (2.0)(5.0) = P₂(10.0)',
            'Solve: P₂ = 10.0/10.0 = 1.0 atm',
            'Pressure decreased as volume increased (inverse relationship)'
        ],
        helper: 'Boyle\'s Law: P₁V₁ = P₂V₂; Inverse relationship at constant T',
        realWorldContext: 'Pressure-volume relationship'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Charles\' Law',
        problem: 'Gas at 300 K occupies 2.0 L. Volume at 600 K (constant P)?',
        parameters: { T1: 300, V1: 2.0, T2: 600, law: 'Charles', findV2: true },
        type: 'gas_laws',
        subparts: [
            'State Charles\' Law: V₁/T₁ = V₂/T₂ (constant P, n)',
            'Substitute: 2.0/300 = V₂/600',
            'Solve: V₂ = (2.0 × 600)/300 = 4.0 L',
            'Volume doubled as temperature doubled (direct relationship)'
        ],
        helper: 'Charles\' Law: V₁/T₁ = V₂/T₂; Direct relationship at constant P; T in Kelvin!',
        realWorldContext: 'Temperature-volume relationship'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combined Gas Law',
        problem: 'Gas: 1.5 atm, 300 K, 4.0 L → 2.0 atm, 450 K, ? L',
        parameters: { P1: 1.5, T1: 300, V1: 4.0, P2: 2.0, T2: 450, findV2: true },
        type: 'gas_laws',
        subparts: [
            'Combined Gas Law: (P₁V₁)/T₁ = (P₂V₂)/T₂',
            'Substitute: (1.5 × 4.0)/300 = (2.0 × V₂)/450',
            'Solve: V₂ = (1.5 × 4.0 × 450)/(300 × 2.0)',
            'V₂ = 4.5 L'
        ],
        helper: 'Combined: (P₁V₁)/T₁ = (P₂V₂)/T₂; All three variables change',
        realWorldContext: 'Multiple variable changes'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ideal Gas Law',
        problem: '0.5 mol gas at 298 K, 1.0 atm. Calculate volume. (R = 0.0821 L·atm/mol·K)',
        parameters: { n: 0.5, T: 298, P: 1.0, R: 0.0821, findV: true },
        type: 'gas_laws',
        subparts: [
            'Ideal Gas Law: PV = nRT',
            'Rearrange: V = nRT/P',
            'Substitute: V = (0.5 × 0.0821 × 298)/1.0',
            'V = 12.2 L'
        ],
        helper: 'Ideal Gas: PV = nRT; R = 0.0821 L·atm/(mol·K)',
        realWorldContext: 'Ideal gas equation application'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Gas Density',
        problem: 'Calculate density of CO2 at STP using ideal gas law.',
        parameters: { gas: 'CO2', conditions: 'STP', calculateDensity: true },
        type: 'gas_laws',
        subparts: [
            'At STP: 1 mole occupies 22.4 L',
            'Molar mass CO2 = 44 g/mol',
            'Density = mass/volume = 44 g / 22.4 L',
            'Density = 1.96 g/L'
        ],
        helper: 'Density = M/Vm where M = molar mass, Vm = molar volume (22.4 L at STP)',
        realWorldContext: 'Molar mass and gas density'
    });

    return relatedProblems;
}

generateRelatedKineticMolecularTheory(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'KMT Postulates',
        problem: 'State the 5 main postulates of kinetic molecular theory.',
        parameters: { concept: 'KMT postulates', listAndExplain: true },
        type: 'kinetic_molecular_theory',
        subparts: [
            '1) Gas particles are in constant random motion',
            '2) Particle volume is negligible compared to container volume',
            '3) No attractive/repulsive forces between particles',
            '4) Collisions are perfectly elastic; 5) Average KE ∝ absolute temperature'
        ],
        helper: 'KMT: constant motion, negligible volume, no forces, elastic collisions, KE ∝ T',
        realWorldContext: 'Theoretical foundation of gas behavior'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Temperature and KE',
        problem: 'How does increasing temperature affect average kinetic energy of gas molecules?',
        parameters: { variable: 'temperature', effect: 'kinetic energy', explainRelationship: true },
        type: 'kinetic_molecular_theory',
        subparts: [
            'KE is directly proportional to absolute temperature (Kelvin)',
            'KE = (3/2)kT where k = Boltzmann constant',
            'Higher T → higher average KE',
            'Molecules move faster at higher temperatures'
        ],
        helper: 'KE ∝ T (Kelvin); KE = (3/2)kT; Higher T → faster molecules',
        realWorldContext: 'Temperature-energy relationship'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Root Mean Square Speed',
        problem: 'Calculate rms speed of O2 at 298 K. (urms = √(3RT/M))',
        parameters: { gas: 'O2', temperature: 298, calculateRMS: true },
        type: 'kinetic_molecular_theory',
        subparts: [
            'Formula: urms = √(3RT/M)',
            'R = 8.314 J/(mol·K), M = 0.032 kg/mol (in kg!)',
            'urms = √(3 × 8.314 × 298 / 0.032)',
            'urms = 482 m/s'
        ],
        helper: 'formula: urms = √(3RT/M); R = 8.314 J/(mol·K); M in kg/mol',
        realWorldContext: 'Molecular speeds in gases'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Real vs Ideal Gases',
        problem: 'Under what conditions do real gases deviate from ideal behavior?',
        parameters: { concept: 'real gas deviations', identifyConditions: true },
        type: 'kinetic_molecular_theory',
        subparts: [
            'High pressure: molecules closer together (volume significant)',
            'Low temperature: molecules slower (attractive forces significant)',
            'Polar molecules: stronger intermolecular forces',
            'Large molecules: greater volume and surface area'
        ],
        helper: 'Real gas deviations: high P (volume matters), low T (forces matter)',
        realWorldContext: 'Limitations of ideal gas model'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Graham\'s Law',
        problem: 'Rate of effusion: He vs O2. Calculate ratio. (M_He = 4, M_O2 = 32)',
        parameters: { gas1: 'He', gas2: 'O2', molarMasses: { He: 4, O2: 32 }, calculateRatio: true },
        type: 'kinetic_molecular_theory',
        subparts: [
            'Graham\'s Law: rate₁/rate₂ = √(M₂/M₁)',
            'Lighter gas effuses faster',
            'rate(He)/rate(O2) = √(32/4) = √8',
            'Ratio = 2.83:1 (He effuses 2.83 times faster)'
        ],
        helper: 'Graham\'s: rate₁/rate₂ = √(M₂/M₁); Lighter molecules move faster',
        realWorldContext: 'Gas effusion and diffusion'
    });

    return relatedProblems;
}

// === NUCLEAR CHEMISTRY ===

generateRelatedRadioactiveDecay(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alpha Decay',
        problem: 'Uranium-238 undergoes alpha decay. Write nuclear equation.',
        parameters: { isotope: '238-U', decayType: 'alpha', writeEquation: true },
        type: 'radioactive_decay',
        subparts: [
            'Alpha particle: ⁴₂He (2 protons, 2 neutrons)',
            'U loses 4 mass units, 2 atomic number',
            'Mass: 238 - 4 = 234; Atomic #: 92 - 2 = 90 (Th)',
            'Equation: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He'
        ],
        helper: 'Alpha decay: ⁴₂He emitted; Mass -4, Atomic # -2',
        realWorldContext: 'Uranium decay series'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Identify Decay Type',
        problem: '¹⁴₆C → ¹⁴₇N + ⁰₋₁e. What type of decay?',
        parameters: { equation: 'C-14 → N-14 + electron', identifyDecayType: true },
        type: 'radioactive_decay',
        subparts: [
            'Particle emitted: ⁰₋₁e (beta particle/electron)',
            'Mass number unchanged (14 → 14)',
            'Atomic number increased by 1 (6 → 7)',
            'This is beta-minus (β⁻) decay'
        ],
        helper: 'Beta-minus: ⁰₋₁e emitted; Mass same, Atomic # +1',
        realWorldContext: 'Carbon-14 dating'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Beta-Plus Decay',
        problem: '¹¹₆C undergoes β⁺ decay (positron emission). Write equation.',
        parameters: { isotope: 'C-11', decayType: 'beta-plus', writeEquation: true },
        type: 'radioactive_decay',
        subparts: [
            'Positron: ⁰₊₁e (positive electron)',
            'Proton converts to neutron',
            'Mass unchanged: 11; Atomic # decreases: 6 - 1 = 5 (B)',
            'Equation: ¹¹₆C → ¹¹₅B + ⁰₊₁e'
        ],
        helper: 'Beta-plus: ⁰₊₁e (positron) emitted; Mass same, Atomic # -1',
        realWorldContext: 'PET scan isotopes'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Gamma Emission',
        problem: 'After alpha decay, ²³⁴Th is in excited state. Emits gamma ray. Does mass or charge change?',
        parameters: { isotope: 'Th-234', decayType: 'gamma', analyzeChanges: true },
        type: 'radioactive_decay',
        subparts: [
            'Gamma ray: ⁰₀γ (high-energy photon)',
            'No particles emitted, only energy',
            'Mass number unchanged',
            'Atomic number unchanged; nucleus goes to lower energy state'
        ],
        helper: 'Gamma: ⁰₀γ emitted; No change in mass or atomic number',
        realWorldContext: 'Nuclear energy levels'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Decay Series',
        problem: '²³⁸U → ²³⁴Th → ²³⁴Pa → ²³⁴U. Identify each decay type.',
        parameters: { decaySeries: ['U-238', 'Th-234', 'Pa-234', 'U-234'], identifyEachStep: true },
        type: 'radioactive_decay',
        subparts: [
            'U-238 → Th-234: mass -4, Z -2 → alpha decay',
            'Th-234 → Pa-234: mass same, Z +1 → beta-minus decay',
            'Pa-234 → U-234: mass same, Z -1 → beta-plus decay',
            'Complete series leads eventually to stable Pb-206'
        ],
        helper: 'Track changes: ΔMass and ΔZ determine decay type',
        realWorldContext: 'Natural decay chains'
    });

    return relatedProblems;
}

generateRelatedNuclearEquations(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Balance Nuclear Equation',
        problem: '²³⁵U + ¹n → ? + ⁹⁰Sr + 3¹n (fission)',
        parameters: { equation: 'U-235 + n → ? + Sr-90 + 3n', balanceEquation: true },
        type: 'nuclear_equations',
        subparts: [
            'Balance mass: 235 + 1 = A + 90 + 3(1), so A = 143',
            'Balance atomic number: 92 + 0 = Z + 38 + 0, so Z = 54',
            'Element with Z = 54 is Xe (xenon)',
            'Answer: ¹⁴³₅₄Xe'
        ],
        helper: 'Balance: Total mass (top) and total atomic # (bottom) on both sides',
        realWorldContext: 'Nuclear fission'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Complete the Equation',
        problem: '²⁷₁₃Al + ⁴₂He → ? + ¹₀n',
        parameters: { equation: 'Al-27 + He-4 → ? + n', findProduct: true },
        type: 'nuclear_equations',
        subparts: [
            'Balance mass: 27 + 4 = A + 1, so A = 30',
            'Balance atomic #: 13 + 2 = Z + 0, so Z = 15',
            'Element Z = 15 is P (phosphorus)',
            'Product: ³⁰₁₅P'
        ],
        helper: 'Conservation: mass number and atomic number must balance',
        realWorldContext: 'Nuclear bombardment'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Fusion Equation',
        problem: '²H + ³H → ⁴He + ?. Complete and calculate energy released.',
        parameters: { equation: 'H-2 + H-3 → He-4 + ?', fusion: true, calculateEnergy: true },
        type: 'nuclear_equations',
        subparts: [
            'Balance mass: 2 + 3 = 4 + A, so A = 1',
            'Balance Z: 1 + 1 = 2 + Z, so Z = 0',
            'Particle: ¹₀n (neutron)',
            'Energy from E = mc² using mass defect'
        ],
        helper: 'Fusion: Light nuclei combine; Releases energy; ²H + ³H → ⁴He + ¹n',
        realWorldContext: 'Nuclear fusion in stars'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Neutron Capture',
        problem: '²³⁸U + ¹n → ? (forms next heavier isotope)',
        parameters: { reactant: 'U-238', capture: 'neutron', findProduct: true },
        type: 'nuclear_equations',
        subparts: [
            'Neutron has no charge, mass = 1',
            'Mass increases: 238 + 1 = 239',
            'Atomic number unchanged: 92',
            'Product: ²³⁹₉₂U (Uranium-239)'
        ],
        helper: 'Neutron capture: ¹₀n absorbed; Mass +1, Z unchanged',
        realWorldContext: 'Breeder reactor reactions'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Transmutation',
        problem: 'Nitrogen bombarded with alpha particles produces oxygen and proton. Write equation.',
        parameters: { target: 'N-14', projectile: 'alpha', products: ['O-17', 'proton'], writeEquation: true },
        type: 'nuclear_equations',
        subparts: [
            'Reactants: ¹⁴₇N + ⁴₂He',
            'Products: ¹⁷₈O + ¹₁H',
            'Check balance: Mass: 14+4=17+1 ✓; Z: 7+2=8+1 ✓',
            'Equation: ¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H'
        ],
        helper: 'Transmutation: One element converts to another via nuclear reaction',
        realWorldContext: 'Artificial transmutation'
    });

    return relatedProblems;
}

generateRelatedHalfLife(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Half-Life Calculation',
        problem: 'C-14 half-life = 5730 years. After 11,460 years, what fraction remains?',
        parameters: { isotope: 'C-14', halfLife: 5730, time: 11460, findFraction: true },
        type: 'half_life',
        subparts: [
            'Calculate number of half-lives: n = time/t₁/₂',
            'n = 11,460/5730 = 2 half-lives',
            'Fraction remaining = (1/2)ⁿ = (1/2)² = 1/4',
            'Answer: 1/4 or 25% remains'
        ],
        helper: 'Fraction remaining = (1/2)ⁿ where n = time/half-life',
        realWorldContext: 'Radiocarbon dating'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Half-Life',
        problem: '100g of isotope with t½ = 10 days. How much remains after 30 days?',
        parameters: { initialAmount: 100, halfLife: 10, time: 30, findRemaining: true },
        type: 'half_life',
        subparts: [
            'Number of half-lives: n = 30/10 = 3',
            'After each half-life, amount halves',
            'After 1: 50g; After 2: 25g; After 3: 12.5g',
            'Answer: 12.5 g remains'
        ],
        helper: 'After n half-lives: Amount = Initial × (1/2)ⁿ',
        realWorldContext: 'Radioactive decay calculation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Age Determination',
        problem: 'Fossil has 6.25% of original C-14. Age of fossil? (t½ = 5730 years)',
        parameters: { percentRemaining: 6.25, halfLife: 5730, findAge: true },
        type: 'half_life',
        subparts: [
            '6.25% = 0.0625 = (1/2)ⁿ',
            'Solve: 0.0625 = 1/16 = (1/2)⁴',
            'So n = 4 half-lives',
            'Age = 4 × 5730 = 22,920 years'
        ],
        helper: 'Find n from: (1/2)ⁿ = fraction remaining; Age = n × t₁/₂',
        realWorldContext: 'Archaeological dating'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'First-Order Kinetics',
        problem: 'Derive relationship: N = N₀(1/2)^(t/t½) from first-order kinetics.',
        parameters: { derivation: 'half-life equation', showSteps: true },
        type: 'half_life',
        subparts: [
            'First-order: ln(N/N₀) = -kt',
            'At t = t₁/₂: N = N₀/2, so ln(1/2) = -kt₁/₂',
            'Therefore: k = ln(2)/t₁/₂',
            'Substitute: N = N₀e^(-kt) = N₀(1/2)^(t/t₁/₂)'
        ],
        helper: 'Radioactive decay follows first-order kinetics',
        realWorldContext: 'Mathematical basis of decay'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Decay Constant',
        problem: 'I-131 t½ = 8 days. Calculate decay constant λ. (λ = ln(2)/t½)',
        parameters: { isotope: 'I-131', halfLife: 8, calculateDecayConstant: true },
        type: 'half_life',
        subparts: [
            'Formula: λ = ln(2)/t₁/₂',
            'λ = 0.693/8 days',
            'λ = 0.0866 day⁻¹',
            'This means 8.66% decays per day'
        ],
        helper: 'Decay constant: λ = 0.693/t₁/₂; Units: (time)⁻¹',
        realWorldContext: 'Medical isotope calculations'
    });

    return relatedProblems;
}

generateRelatedNuclearReactions(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Fission vs Fusion',
        problem: 'Compare nuclear fission and fusion: mass change, products, energy release.',
        parameters: { compareReactionTypes: ['fission', 'fusion'], analyzeAll: true },
        type: 'nuclear_reactions',
        subparts: [
            'Fission: heavy nucleus splits → 2 medium nuclei + neutrons',
            'Fusion: light nuclei combine → heavier nucleus',
            'Both: mass decreases (mass defect → energy via E=mc²)',
            'Fusion releases more energy per nucleon; Fission easier to achieve on Earth'
        ],
        helper: 'Fission: heavy splits; Fusion: light combines; Both release energy',
        realWorldContext: 'Nuclear energy sources'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Chain Reaction',
        problem: 'Explain why U-235 fission can sustain chain reaction.',
        parameters: { isotope: 'U-235', concept: 'chain reaction', explain: true },
        type: 'nuclear_reactions',
        subparts: [
            'Each fission releases 2-3 neutrons',
            'These neutrons can cause more fissions',
            'If ≥1 neutron causes another fission, reaction sustains itself',
            'Critical mass needed to prevent neutron escape'
        ],
        helper: 'Chain reaction: Each fission produces neutrons that cause more fissions',
        realWorldContext: 'Nuclear reactor principles'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Mass-Energy Equivalence',
        problem: 'In fusion: ²H + ³H → ⁴He + ¹n. Mass defect = 0.019 amu. Energy released? (E=mc²)',
        parameters: { reaction: 'D-T fusion', massDefect: 0.019, calculateEnergy: true },
        type: 'nuclear_reactions',
        subparts: [
            'Convert amu to kg: 0.019 amu × 1.66×10⁻²⁷ kg/amu',
            'Δm = 3.15×10⁻²⁹ kg',
            'E = mc² = (3.15×10⁻²⁹)(3×10⁸)²',
            'E = 2.84×10⁻¹² J = 17.7 MeV per reaction'
        ],
        helper: 'E = mc²; 1 amu = 931.5 MeV; Mass defect → energy',
        realWorldContext: 'Einstein\'s equation in nuclear reactions'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Critical Mass',
        problem: 'What is critical mass? Why is it necessary for nuclear weapons?',
        parameters: { concept: 'critical mass', explainImportance: true },
        type: 'nuclear_reactions',
        subparts: [
            'Critical mass: minimum amount needed for sustained chain reaction',
            'Below critical: too many neutrons escape (surface area/volume ratio)',
            'At critical: exactly one neutron per fission causes another fission',
            'Weapons need supercritical mass for rapid, uncontrolled reaction'
        ],
        helper: 'Critical mass: minimum amount for self-sustaining chain reaction',
        realWorldContext: 'Nuclear chain reaction control'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Binding Energy',
        problem: 'Calculate binding energy per nucleon for Fe-56. Is it highly stable?',
        parameters: { isotope: 'Fe-56', calculateBindingEnergy: true, assessStability: true },
        type: 'nuclear_reactions',
        subparts: [
            'Fe-56: 26 protons, 30 neutrons',
            'Mass defect = (26mp + 30mn) - actual mass',
            'Binding energy from E = Δmc²',
            'BE/nucleon ≈ 8.8 MeV (peak of curve → most stable nucleus)'
        ],
        helper: 'Binding energy per nucleon: measure of stability; Fe-56 has maximum',
        realWorldContext: 'Nuclear stability'
    });

    return relatedProblems;
}

// === LABORATORY CHEMISTRY ===

generateRelatedLabSafety(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Acid Spill Response',
        problem: 'Concentrated HCl spilled on bench. Describe proper cleanup procedure.',
        parameters: { hazard: 'acid spill', chemical: 'HCl', describeProcedure: true },
        type: 'lab_safety',
        subparts: [
            'Alert others and ensure area is ventilated',
            'Wear appropriate PPE (goggles, gloves, lab coat)',
            'Neutralize with sodium bicarbonate or neutralizing agent',
            'Clean with absorbent material, dispose as hazardous waste'
        ],
        helper: 'Acid spill: Alert, ventilate, PPE, neutralize, clean, dispose properly',
        realWorldContext: 'Chemical spill management'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic PPE',
        problem: 'List essential personal protective equipment (PPE) for chemistry lab.',
        parameters: { concept: 'PPE', listAndExplain: true },
        type: 'lab_safety',
        subparts: [
            'Safety goggles (protect eyes from splashes)',
            'Lab coat (protect skin and clothing)',
            'Gloves (nitrile or latex for chemical resistance)',
            'Closed-toe shoes (protect feet from spills/dropped items)'
        ],
        helper: 'Minimum PPE: Goggles, lab coat, gloves, closed shoes',
        realWorldContext: 'Laboratory safety basics'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Chemical Compatibility',
        problem: 'Why should acids and bases be stored separately? What about oxidizers and reducers?',
        parameters: { concept: 'chemical storage', explainIncompatibilities: true },
        type: 'lab_safety',
        subparts: [
            'Acids + bases → violent exothermic reaction, heat, spattering',
            'Oxidizers + reducers → fire/explosion risk',
            'Incompatible chemicals should be segregated by hazard class',
            'Use secondary containment to prevent mixing if spilled'
        ],
        helper: 'Incompatibles: Acids/bases separate; Oxidizers/reducers separate; Flammables away from heat',
        realWorldContext: 'Safe chemical storage'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Fire Safety',
        problem: 'Ethanol catches fire in lab. Which fire extinguisher type? Water appropriate?',
        parameters: { hazard: 'flammable liquid fire', chemical: 'ethanol', selectExtinguisher: true },
        type: 'lab_safety',
        subparts: [
            'Ethanol = Class B fire (flammable liquid)',
            'Use CO2 or dry chemical extinguisher',
            'DO NOT use water (spreads fire, ethanol is miscible)',
            'If small, smother with fire blanket or watch glass'
        ],
        helper: 'Fire classes: A (ordinary), B (flammable liquid), C (electrical), D (metal)',
        realWorldContext: 'Laboratory fire response'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Waste Disposal',
        problem: 'Proper disposal methods: (1) chromium waste, (2) broken thermometer, (3) organic solvents.',
        parameters: { wastes: ['heavy metal', 'mercury', 'organic solvent'], describeDisposal: true },
        type: 'lab_safety',
        subparts: [
            'Chromium: heavy metal waste container (toxic, regulated)',
            'Mercury thermometer: special mercury waste container (highly toxic)',
            'Organic solvents: halogenated vs non-halogenated waste containers',
            'Never pour hazardous waste down drain or in regular trash'
        ],
        helper: 'Waste disposal: Segregate by type; Use designated containers; Follow regulations',
        realWorldContext: 'Hazardous waste management'
    });

    return relatedProblems;
}

generateRelatedLabApparatus(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Choosing Apparatus',
        problem: 'Prepare exactly 250.0 mL of 0.100 M NaCl. Which glassware?',
        parameters: { task: 'prepare precise solution', volume: 250, selectApparatus: true },
        type: 'lab_apparatus',
        subparts: [
            'Need precise volume: use 250 mL volumetric flask',
            'Weigh NaCl on analytical balance',
            'Dissolve in water, transfer to volumetric flask',
            'Fill to mark with water (bottom of meniscus at mark)'
        ],
        helper: 'Precise volume: volumetric flask; Precise mass: analytical balance',
        realWorldContext: 'Solution preparation'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Apparatus Functions',
        problem: 'What is difference between beaker and Erlenmeyer flask? When to use each?',
        parameters: { compare: ['beaker', 'Erlenmeyer flask'], explainUses: true },
        type: 'lab_apparatus',
        subparts: [
            'Beaker: cylindrical, flat bottom, for holding/mixing',
            'Erlenmeyer: conical, narrow neck, for mixing/heating',
            'Beaker: easier to pour, stir; Erlenmeyer: less spillage when swirling',
            'Erlenmeyer better for titrations (can swirl without splashing)'
        ],
        helper: 'Beaker: holding; Erlenmeyer: mixing/heating/titrating',
        realWorldContext: 'Basic glassware selection'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Precision and Accuracy',
        problem: 'Rank by precision: graduated cylinder, beaker, volumetric flask, burette. Explain.',
        parameters: { apparatus: ['graduated cylinder', 'beaker', 'volumetric flask', 'burette'], rankPrecision: true },
        type: 'lab_apparatus',
        subparts: [
            'Least precise: beaker (±5%)',
            'Graduated cylinder (±1%)',
            'Volumetric flask (±0.1%)',
            'Most precise: burette (±0.05%); used for drop-by-drop delivery'
        ],
        helper: 'Precision ranking: Burette > Vol. flask > Grad. cylinder > Beaker',
        realWorldContext: 'Measurement precision in lab'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Titration Setup',
        problem: 'Describe proper setup for acid-base titration. Which apparatus needed?',
        parameters: { experiment: 'acid-base titration', listApparatus: true, describeSetup: true },
        type: 'lab_apparatus',
        subparts: [
            'Burette (for titrant - base), clamp, ring stand',
            'Erlenmeyer flask (for analyte - acid) with indicator',
            'Pipette or volumetric flask (precise volume of analyte)',
            'White tile under flask (see color change clearly)'
        ],
        helper: 'Titration: Burette (titrant), Erlenmeyer (sample), pipette (precise transfer)',
        realWorldContext: 'Titration equipment'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Apparatus Limitations',
        problem: 'Why use pipette instead of graduated cylinder for transferring 25.00 mL?',
        parameters: { compare: ['pipette', 'graduated cylinder'], explainPrecisionDifference: true },
        type: 'lab_apparatus',
        subparts: [
            'Pipette designed for single volume (25.00 mL) with high precision',
            'Graduated cylinder measures range of volumes (lower precision)',
            'Pipette: ±0.03 mL; Graduated cylinder: ±0.2 mL',
            'For analytical work requiring accuracy, use pipette'
        ],
        helper: 'TC (to contain): flask; TD (to deliver): pipette, burette; Pipette more precise',
        realWorldContext: 'Precision glassware selection'
    });

    return relatedProblems;
}

generateRelatedLabTechniques(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Filtration Setup',
        problem: 'Describe gravity filtration setup. When is vacuum filtration preferred?',
        parameters: { technique: 'filtration', compareTypes: ['gravity', 'vacuum'], describeSetup: true },
        type: 'lab_techniques',
        subparts: [
            'Gravity: filter paper in funnel, slow, for small amounts',
            'Vacuum: Büchner funnel, vacuum flask, faster',
            'Vacuum preferred for: larger volumes, fine precipitates',
            'Gravity better for: gelatinous precipitates (clog vacuum)'
        ],
        helper: 'Gravity: slow, gentle; Vacuum: fast, efficient for volumes',
        realWorldContext: 'Solid-liquid separation'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Dilution Technique',
        problem: 'Describe how to safely dilute concentrated H2SO4 with water.',
        parameters: { technique: 'acid dilution', chemical: 'H2SO4', describeProcedure: true },
        type: 'lab_techniques',
        subparts: [
            'Rule: "Add acid to water" NEVER reverse',
            'Add concentrated acid slowly to water (not water to acid)',
            'Swirl constantly to dissipate heat',
            'Exothermic: adding water to acid can cause violent boiling/spattering'
        ],
        helper: 'Safety: "Do as you oughta, add acid to water"; Never reverse!',
        realWorldContext: 'Safe dilution practices'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Recrystallization',
        problem: 'Purify impure benzoic acid by recrystallization. Describe complete procedure.',
        parameters: { technique: 'recrystallization', compound: 'benzoic acid', describeFullProcedure: true },
        type: 'lab_techniques',
        subparts: [
            '1) Dissolve impure solid in minimum hot solvent',
            '2) Filter hot to remove insoluble impurities',
            '3) Cool slowly to allow crystallization (pure crystals form)',
            '4) Filter, wash crystals, dry; Impurities stay in solution'
        ],
        helper: 'Recrystallization: Hot dissolve, filter hot, cool slowly, filter cold',
        realWorldContext: 'Solid purification method'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Distillation Types',
        problem: 'Compare simple distillation and fractional distillation. When to use each?',
        parameters: { technique: 'distillation', compareTypes: ['simple', 'fractional'], explainApplications: true },
        type: 'lab_techniques',
        subparts: [
            'Simple distillation: large boiling point difference (>25°C)',
            'Fractional distillation: small bp difference (<25°C), uses fractionating column',
            'Fractionating column provides multiple vaporization-condensation cycles',
            'Examples: Simple (water/salt), Fractional (ethanol/water, petroleum)'
        ],
        helper: 'Simple: Δbp > 25°C; Fractional: Δbp < 25°C (better separation)',
        realWorldContext: 'Liquid separation techniques'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Extraction',
        problem: 'Extract organic compound from aqueous solution using separatory funnel. Describe steps.',
        parameters: { technique: 'liquid-liquid extraction', apparatus: 'separatory funnel', describeSteps: true },
        type: 'lab_techniques',
        subparts: [
            '1) Add aqueous solution and organic solvent to sep funnel',
            '2) Stopper and shake (vent pressure frequently)',
            '3) Let layers separate (organic on top if less dense, bottom if more dense)',
            '4) Drain bottom layer, collect top layer; Repeat for better extraction'
        ],
        helper: 'Extraction: Mix, shake (vent!), separate layers, drain; "Like dissolves like"',
        realWorldContext: 'Solvent extraction'
    });

    return relatedProblems;
}

generateRelatedExperimentalDesign(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Controlled Experiment',
        problem: 'Design experiment to test effect of temperature on reaction rate. Identify variables.',
        parameters: { investigation: 'temperature vs rate', identifyVariables: true, designExperiment: true },
        type: 'experimental_design',
        subparts: [
            'Independent variable: temperature (what you change)',
            'Dependent variable: reaction rate (what you measure)',
            'Controlled variables: concentration, volume, catalyst, pressure',
            'Method: Run reaction at different temps, measure time for completion'
        ],
        helper: 'Independent (cause) → Dependent (effect); Control all other variables',
        realWorldContext: 'Kinetics investigation'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Variables',
        problem: 'Define: independent variable, dependent variable, controlled variables.',
        parameters: { concept: 'experimental variables', defineAll: true },
        type: 'experimental_design',
        subparts: [
            'Independent: variable you deliberately change/manipulate',
            'Dependent: variable that responds/changes as result',
            'Controlled: variables kept constant to ensure fair test',
            'Example: temp (indep) affects rate (dep), keep concentration constant (control)'
        ],
        helper: 'IV = cause (manipulated); DV = effect (measured); CV = kept constant',
        realWorldContext: 'Scientific method basics'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Error Analysis',
        problem: 'Measured concentration: 0.105 M (actual: 0.100 M). Calculate % error. Suggest sources.',
        parameters: { measured: 0.105, actual: 0.100, calculateError: true, identifySources: true },
        type: 'experimental_design',
        subparts: [
            '% error = |measured - actual|/actual × 100%',
            '% error = |0.105 - 0.100|/0.100 × 100% = 5%',
            'Possible sources: impure reagents, volumetric errors, incomplete dissolution',
            'Other sources: calibration errors, temperature effects, procedural mistakes'
        ],
        helper: '% error = |experimental - accepted|/accepted × 100%; Identify systematic/random errors',
        realWorldContext: 'Accuracy and precision'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Data Collection',
        problem: 'Investigating solubility vs temperature. How many trials? What data to record?',
        parameters: { investigation: 'solubility vs temperature', planDataCollection: true },
        type: 'experimental_design',
        subparts: [
            'Minimum 3 trials at each temperature (calculate average, assess precision)',
            'Record: temperature (°C), mass of solute dissolved (g), volume of solvent (mL)',
            'Calculate solubility (g/100 mL) for each trial',
            'Create data table and graph (temp vs solubility)'
        ],
        helper: 'Multiple trials: assess precision; Record raw data and calculate derived quantities',
        realWorldContext: 'Experimental planning'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Hypothesis Testing',
        problem: 'Hypothesis: "Increasing concentration increases reaction rate." Design experiment to test.',
        parameters: { hypothesis: 'concentration vs rate', designExperiment: true, predictResults: true },
        type: 'experimental_design',
        subparts: [
            'Independent variable: concentration (vary systematically)',
            'Dependent variable: rate (measure time or product formation)',
            'Method: React solutions of different concentrations, measure time',
            'Expected: higher concentration → faster rate (shorter time or more product)'
        ],
        helper: 'Test hypothesis: manipulate IV, measure DV, control other variables, analyze data',
        realWorldContext: 'Scientific investigation'
    });

    return relatedProblems;
}


// === ACID-BASE CHEMISTRY (Complete with subparts and helpers) ===

generateRelatedAcidBase(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Strong Acid-Strong Base',
        problem: '50 mL of 0.2 M HCl + 50 mL of 0.2 M NaOH. Final pH?',
        parameters: { acid: 'HCl', base: 'NaOH', acidVolume: 50, baseVolume: 50, acidMolarity: 0.2, baseMolarity: 0.2, findpH: true },
        type: 'acid_base_neutralization',
        subparts: [
            'Calculate moles: HCl = 0.05 L × 0.2 M = 0.01 mol; NaOH = 0.01 mol',
            'Reaction: HCl + NaOH → NaCl + H2O (1:1 ratio)',
            'Equal moles → complete neutralization',
            'pH = 7 (neutral solution, only NaCl present)'
        ],
        helper: 'Strong acid + strong base (equal amounts) → pH = 7',
        realWorldContext: 'Complete neutralization'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'pH of Strong Acid',
        problem: '0.01 M HCl solution. pH?',
        parameters: { compound: 'HCl', molarity: 0.01, findpH: true },
        type: 'acid_base_neutralization',
        subparts: [
            'HCl is strong acid (100% dissociation)',
            '[H⁺] = 0.01 M = 1 × 10⁻² M',
            'pH = -log[H⁺] = -log(0.01)',
            'pH = 2'
        ],
        helper: 'Strong acid: [H⁺] = concentration; pH = -log[H⁺]',
        realWorldContext: 'Strong acid pH'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Weak Acid Neutralization',
        problem: '100 mL of 0.1 M CH3COOH + 50 mL of 0.1 M NaOH. pH at equivalence point?',
        parameters: { acid: 'CH3COOH', base: 'NaOH', acidVolume: 100, baseVolume: 50, acidMolarity: 0.1, baseMolarity: 0.1, equivalencePoint: true, findpH: true },
        type: 'acid_base_neutralization',
        subparts: [
            'Moles acid: 0.01 mol; Moles base: 0.005 mol',
            'After reaction: 0.005 mol CH3COOH and 0.005 mol CH3COO⁻ remain',
            'This is a buffer (weak acid + conjugate base)',
            'Use Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])'
        ],
        helper: 'Weak acid + strong base (partial) → buffer; Use Henderson-Hasselbalch',
        realWorldContext: 'Weak acid titration'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Excess Acid',
        problem: '30 mL of 0.2 M HCl + 20 mL of 0.2 M NaOH. pH?',
        parameters: { acid: 'HCl', base: 'NaOH', acidVolume: 30, baseVolume: 20, acidMolarity: 0.2, baseMolarity: 0.2, excessAcid: true, findpH: true },
        type: 'acid_base_neutralization',
        subparts: [
            'Moles HCl: 0.03 × 0.2 = 0.006 mol; Moles NaOH: 0.02 × 0.2 = 0.004 mol',
            'After neutralization: 0.006 - 0.004 = 0.002 mol HCl remains',
            'Total volume: 50 mL = 0.05 L',
            '[H⁺] = 0.002/0.05 = 0.04 M; pH = -log(0.04) = 1.4'
        ],
        helper: 'Excess reagent: Calculate remaining moles, divide by total volume',
        realWorldContext: 'Excess reagent calculations'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Buffer at Equivalence',
        problem: 'Weak base-strong acid titration: equivalence point pH below 7',
        parameters: { base: 'NH3', acid: 'HCl', equivalencePoint: true, acidic: true, analyzepH: true },
        type: 'acid_base_neutralization',
        subparts: [
            'At equivalence: all NH3 converted to NH4⁺',
            'NH4⁺ is weak acid (conjugate acid of weak base)',
            'NH4⁺ + H2O ⇌ NH3 + H3O⁺',
            'Solution is acidic, pH < 7'
        ],
        helper: 'Weak base + strong acid at equivalence → conjugate acid → pH < 7',
        realWorldContext: 'Salt hydrolysis at equivalence point'
    });

    return relatedProblems;
}

generateRelatedpHCalculations(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Weak Acid pH',
        problem: 'pH of 0.1 M CH3COOH (Ka = 1.8×10⁻⁵)',
        parameters: { acid: 'CH3COOH', molarity: 0.1, Ka: 1.8e-5, findpH: true },
        type: 'ph_calculations',
        subparts: [
            'Set up ICE table: [H⁺] = [A⁻] = x, [HA] = 0.1 - x',
            'Ka = x²/(0.1 - x) ≈ x²/0.1 (assuming x << 0.1)',
            'x² = 1.8×10⁻⁵ × 0.1 = 1.8×10⁻⁶',
            'x = [H⁺] = 1.34×10⁻³ M; pH = -log(1.34×10⁻³) = 2.87'
        ],
        helper: 'Weak acid: Ka = [H⁺][A⁻]/[HA]; Use ICE table and approximation',
        realWorldContext: 'Weak acid ionization'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Strong Acid pH',
        problem: '0.001 M HCl. pH?',
        parameters: { compound: 'HCl', molarity: 0.001, findpH: true },
        type: 'ph_calculations',
        subparts: [
            'Strong acid: 100% dissociation',
            '[H⁺] = 0.001 M = 1×10⁻³ M',
            'pH = -log[H⁺] = -log(1×10⁻³)',
            'pH = 3'
        ],
        helper: 'Strong acid: [H⁺] = M; pH = -log[H⁺]',
        realWorldContext: 'Simple pH calculation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Weak Base pOH',
        problem: 'pOH of 0.05 M NH3 (Kb = 1.8×10⁻⁵). Find pH.',
        parameters: { base: 'NH3', molarity: 0.05, Kb: 1.8e-5, findpOH: true, findpH: true },
        type: 'ph_calculations',
        subparts: [
            'Kb = [NH4⁺][OH⁻]/[NH3] = x²/0.05',
            'x² = 1.8×10⁻⁵ × 0.05 = 9×10⁻⁷',
            'x = [OH⁻] = 9.49×10⁻⁴ M; pOH = 3.02',
            'pH = 14 - pOH = 14 - 3.02 = 10.98'
        ],
        helper: 'Weak base: Kb = [BH⁺][OH⁻]/[B]; pH + pOH = 14',
        realWorldContext: 'Base pH calculations'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Salt Hydrolysis pH',
        problem: 'pH of 0.1 M NaF (F⁻ is conjugate base, HF Ka = 3.5×10⁻⁴)',
        parameters: { salt: 'NaF', molarity: 0.1, conjugateBaseKa: 3.5e-4, findpH: true },
        type: 'ph_calculations',
        subparts: [
            'F⁻ is conjugate base of HF (weak acid)',
            'Kb = Kw/Ka = 1×10⁻¹⁴/(3.5×10⁻⁴) = 2.86×10⁻¹¹',
            'Kb = x²/0.1; x = [OH⁻] = 1.69×10⁻⁶ M',
            'pOH = 5.77; pH = 14 - 5.77 = 8.23'
        ],
        helper: 'Conjugate base: Kb = Kw/Ka; Calculate [OH⁻], then pH',
        realWorldContext: 'Salt hydrolysis'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Henderson-Hasselbalch',
        problem: 'pH of buffer with 0.1 M CH3COOH and 0.15 M NaCH3COO (Ka = 1.8×10⁻⁵)',
        parameters: { acid: 'CH3COOH', acidMolarity: 0.1, base: 'CH3COO-', baseMolarity: 0.15, Ka: 1.8e-5, useHenderson: true, findpH: true },
        type: 'ph_calculations',
        subparts: [
            'pKa = -log(1.8×10⁻⁵) = 4.74',
            'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])',
            'pH = 4.74 + log(0.15/0.1)',
            'pH = 4.74 + 0.18 = 4.92'
        ],
        helper: 'Buffer: pH = pKa + log([base]/[acid]); Henderson-Hasselbalch equation',
        realWorldContext: 'Buffer pH prediction'
    });

    return relatedProblems;
}

generateRelatedBuffers(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Buffer Capacity',
        problem: 'Buffer with 0.5 M CH3COOH/0.5 M CH3COONa. Add 0.01 mol HCl to 1 L. pH change?',
        parameters: { bufferType: 'acetate', acidConc: 0.5, baseConc: 0.5, volume: 1, addHCl: 0.01, findpHChange: true },
        type: 'buffers',
        subparts: [
            'Initial pH: pH = pKa + log(0.5/0.5) = pKa = 4.74',
            'After adding HCl: [HA] increases by 0.01, [A⁻] decreases by 0.01',
            'New: [HA] = 0.51 M, [A⁻] = 0.49 M',
            'New pH = 4.74 + log(0.49/0.51) = 4.72; ΔpH = 0.02'
        ],
        helper: 'Buffer: Added H⁺ reacts with A⁻; Added OH⁻ reacts with HA',
        realWorldContext: 'Buffer resistance to pH change'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Buffer Preparation',
        problem: 'Prepare buffer pH 4.7 using CH3COOH (Ka = 1.8×10⁻⁵). Molar ratio needed?',
        parameters: { acid: 'CH3COOH', targetpH: 4.7, Ka: 1.8e-5, findRatio: true },
        type: 'buffers',
        subparts: [
            'pKa = -log(1.8×10⁻⁵) = 4.74',
            'Henderson-Hasselbalch: 4.7 = 4.74 + log([A⁻]/[HA])',
            'log([A⁻]/[HA]) = 4.7 - 4.74 = -0.04',
            '[A⁻]/[HA] = 10⁻⁰·⁰⁴ = 0.91:1 (need more acid than base)'
        ],
        helper: 'Buffer design: pH = pKa + log([base]/[acid]); Solve for ratio',
        realWorldContext: 'Buffer design'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Buffer Range',
        problem: 'What is buffer range? When does buffer fail?',
        parameters: { concept: 'buffer_range', explain: true, limits: true },
        type: 'buffers',
        subparts: [
            'Buffer range: pKa ± 1 (effective buffering)',
            'Optimal: when [acid] ≈ [base] (pH ≈ pKa)',
            'Fails when: too much acid/base added (one component depleted)',
            'Also fails when: ratio [A⁻]/[HA] > 10 or < 0.1'
        ],
        helper: 'Buffer range: pKa ± 1; Best at pH = pKa',
        realWorldContext: 'Buffer limitations'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Adding Strong Base',
        problem: 'Same buffer as Problem 1. Add 0.01 mol NaOH to 1 L. pH change?',
        parameters: { bufferType: 'acetate', acidConc: 0.5, baseConc: 0.5, volume: 1, addNaOH: 0.01, findpHChange: true },
        type: 'buffers',
        subparts: [
            'Initial pH: 4.74',
            'OH⁻ reacts with HA: [HA] decreases by 0.01, [A⁻] increases by 0.01',
            'New: [HA] = 0.49 M, [A⁻] = 0.51 M',
            'New pH = 4.74 + log(0.51/0.49) = 4.76; ΔpH = 0.02'
        ],
        helper: 'Base addition: Removes HA, creates A⁻',
        realWorldContext: 'Buffer behavior with base addition'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polyprotic Buffers',
        problem: 'Design buffer using phosphoric acid (H3PO4). Three possible pH ranges?',
        parameters: { acid: 'H3PO4', polyprotic: true, bufferRanges: true },
        type: 'buffers',
        subparts: [
            'H3PO4 has three pKa values: pKa1 = 2.15, pKa2 = 7.20, pKa3 = 12.35',
            'Buffer 1: H3PO4/H2PO4⁻ (pH 1-3)',
            'Buffer 2: H2PO4⁻/HPO4²⁻ (pH 6-8, physiological)',
            'Buffer 3: HPO4²⁻/PO4³⁻ (pH 11-13)'
        ],
        helper: 'Polyprotic acids: Can create buffers at multiple pH ranges (each pKa)',
        realWorldContext: 'Polyprotic acid buffers'
    });

    return relatedProblems;
}

generateRelatedTitrations(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Acid Titration',
        problem: '25 mL unknown HCl requires 32.5 mL of 0.150 M NaOH. Molarity of HCl?',
        parameters: { unknownVolume: 25, unknownCompound: 'HCl', titrantVolume: 32.5, titrantMolarity: 0.150, titrantCompound: 'NaOH', findUnknownMolarity: true },
        type: 'titrations',
        subparts: [
            'Moles of NaOH used: 0.0325 L × 0.150 M = 0.004875 mol',
            'Reaction: HCl + NaOH → NaCl + H2O (1:1 ratio)',
            'Moles HCl = moles NaOH = 0.004875 mol',
            'Molarity HCl = 0.004875 mol / 0.025 L = 0.195 M'
        ],
        helper: 'M₁V₁ = M₂V₂ for 1:1 reactions; Calculate moles from known, use stoichiometry',
        realWorldContext: 'Acid-base titration analysis'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Equivalence Point',
        problem: 'At equivalence point: moles acid = moles base. Why?',
        parameters: { concept: 'equivalence_point', explain: true },
        type: 'titrations',
        subparts: [
            'Equivalence point: stoichiometric amounts have reacted',
            'All acid neutralized by base (or vice versa)',
            'For 1:1 reaction: moles acid = moles base',
            'Different from endpoint (indicator changes color)'
        ],
        helper: 'Equivalence: stoichiometric completion; Endpoint: indicator changes',
        realWorldContext: 'Titration theory'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Redox Titration',
        problem: '25 mL of 0.05 M Fe²⁺ titrated with 0.02 M KMnO4. Volume KMnO4 needed? (MnO4⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H2O)',
        parameters: { unknownCompound: 'Fe2+', unknownVolume: 25, unknownMolarity: 0.05, titrant: 'KMnO4', titrantMolarity: 0.02, redoxTitration: true, molRatio: 5, findTitrantVolume: true },
        type: 'titrations',
        subparts: [
            'Moles Fe²⁺: 0.025 L × 0.05 M = 0.00125 mol',
            'Mole ratio: 5 Fe²⁺ : 1 MnO4⁻',
            'Moles MnO4⁻ needed: 0.00125/5 = 0.00025 mol',
            'Volume MnO4⁻: 0.00025 mol / 0.02 M = 0.0125 L = 12.5 mL'
        ],
        helper: 'Redox titration: Use balanced equation for mole ratio',
        realWorldContext: 'Permanganate redox titration'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Titration Curve',
        problem: 'Sketch titration curve: weak acid + strong base',
        parameters: { acidType: 'weak', baseType: 'strong', sketchCurve: true, labelFeatures: true },
        type: 'titrations',
        subparts: [
            'Initial pH: weak acid (pH 3-6)',
            'Buffer region: gradual pH increase (before equivalence)',
            'Equivalence point: pH > 7 (conjugate base present)',
            'After equivalence: excess base, rapid pH increase'
        ],
        helper: 'Weak acid/strong base curve: starts low, buffer region, equiv > 7, steep rise after',
        realWorldContext: 'Titration curve features'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Back Titration',
        problem: 'Sample contains unknown acid. Excess NaOH added (0.1 M, 50 mL), then backtitrated with 0.05 M HCl (32.5 mL used). Find original acid amount.',
        parameters: { backTitration: true, excessBase: 0.1, baseVolume: 50, titrantAcid: 0.05, titrantVolume: 32.5, findOriginalAcidAmount: true },
        type: 'titrations',
        subparts: [
            'Moles NaOH added: 0.05 L × 0.1 M = 0.005 mol',
            'Moles HCl used in back titration: 0.0325 L × 0.05 M = 0.001625 mol',
            'Moles NaOH remaining = moles HCl = 0.001625 mol',
            'Moles of original acid = 0.005 - 0.001625 = 0.003375 mol'
        ],
        helper: 'Back titration: Excess reagent added, then titrate excess; Subtract to find original',
        realWorldContext: 'Back titration analysis'
    });

    return relatedProblems;
}

generateRelatedPolyproticAcids(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Phosphoric Acid Ionization',
        problem: 'H3PO4 → H⁺ + H2PO4⁻ (Ka1); H2PO4⁻ → H⁺ + HPO4²⁻ (Ka2); HPO4²⁻ → H⁺ + PO4³⁻ (Ka3)',
        parameters: { acid: 'H3PO4', Ka1: 7.5e-3, Ka2: 6.2e-8, Ka3: 2.2e-13, showAllIonizations: true },
        type: 'polyprotic_acids',
        subparts: [
            'Ka1 = 7.5×10⁻³ (first ionization, strongest)',
            'Ka2 = 6.2×10⁻⁸ (second ionization, weaker)',
            'Ka3 = 2.2×10⁻¹³ (third ionization, weakest)',
            'Each successive Ka is smaller (harder to remove H⁺ from negative ion)'
        ],
        helper: 'Polyprotic: Ka1 > Ka2 > Ka3; Each ionization weaker than previous',
        realWorldContext: 'Phosphoric acid system'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'First Ionization Dominance',
        problem: 'H3PO4 pH dominated by first ionization. pH of 0.1 M H3PO4?',
        parameters: { acid: 'H3PO4', molarity: 0.1, Ka1: 7.5e-3, findpH: true },
        type: 'polyprotic_acids',
        subparts: [
            'Ka1 >> Ka2, Ka3, so only first ionization matters for pH',
            'Ka1 = x²/0.1; 7.5×10⁻³ = x²/0.1',
            'x² = 7.5×10⁻⁴; x = 0.0274 M',
            'pH = -log(0.0274) = 1.56'
        ],
        helper: 'Polyprotic pH: Usually only first ionization matters (Ka1 >> Ka2)',
        realWorldContext: 'First ionization dominance'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Intermediate Form Ratio',
        problem: '[HPO4²⁻]/[H2PO4⁻] ratio at pH 7.21 (H2PO4⁻ Ka2 = 6.2×10⁻⁸)',
        parameters: { acid: 'H3PO4', pH: 7.21, Ka2: 6.2e-8, findRatio: true },
        type: 'polyprotic_acids',
        subparts: [
            'pKa2 = -log(6.2×10⁻⁸) = 7.21',
            'Henderson-Hasselbalch: pH = pKa2 + log([HPO4²⁻]/[H2PO4⁻])',
            '7.21 = 7.21 + log(ratio)',
            'Ratio = 1:1 (at pKa, concentrations are equal)'
        ],
        helper: 'At pH = pKa: [A⁻] = [HA] (ratio = 1)',
        realWorldContext: 'Intermediate species domination'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Triprotic Titration',
        problem: '50 mL of 0.1 M H3PO4 titrated with 0.1 M NaOH. Three equivalence points?',
        parameters: { acid: 'H3PO4', acidVolume: 50, acidMolarity: 0.1, titrant: 'NaOH', titrantMolarity: 0.1, multipleEquivalencePoints: true, findAllpH: true },
        type: 'polyprotic_acids',
        subparts: [
            '1st equiv: 50 mL NaOH, pH = (pKa1 + pKa2)/2 ≈ 4.7',
            '2nd equiv: 100 mL NaOH, pH = (pKa2 + pKa3)/2 ≈ 9.8',
            '3rd equiv: 150 mL NaOH, pH > 12 (PO4³⁻ in water)',
            'Each H⁺ requires same volume of base'
        ],
        helper: 'Polyprotic titration: Multiple equiv points; pH at equiv = average of adjacent pKa values',
        realWorldContext: 'Polyprotic acid titration'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Amphiprotic Species',
        problem: 'pH of 0.1 M NaHCO3 (H2CO3: Ka1=4.3×10⁻⁷, Ka2=5.6×10⁻¹¹)',
        parameters: { species: 'HCO3-', molarity: 0.1, Ka1: 4.3e-7, Ka2: 5.6e-11, amphiprotic: true, findpH: true },
        type: 'polyprotic_acids',
        subparts: [
            'HCO3⁻ is amphiprotic (can act as acid or base)',
            'pH ≈ (pKa1 + pKa2)/2 (approximation for amphiprotic)',
            'pKa1 = 6.37, pKa2 = 10.25',
            'pH ≈ (6.37 + 10.25)/2 = 8.31'
        ],
        helper: 'Amphiprotic pH ≈ (pKa1 + pKa2)/2; Simplification for intermediate species',
        realWorldContext: 'Amphiprotic species pH'
    });

    return relatedProblems;
}

// === EQUILIBRIUM CHEMISTRY (Complete with subparts and helpers) ===

generateRelatedEquilibriumConstants(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Calculate Kc',
        problem: 'N2(g) + 3H2(g) ⇌ 2NH3(g). At equilibrium: [N2]=0.2 M, [H2]=0.5 M, [NH3]=0.3 M. Kc?',
        parameters: { equation: 'N2 + 3H2 ⇌ 2NH3', concentrations: { 'N2': 0.2, 'H2': 0.5, 'NH3': 0.3 }, findKc: true },
        type: 'equilibrium_constants',
        subparts: [
            'Write Kc expression: Kc = [NH3]²/([N2][H2]³)',
            'Substitute equilibrium concentrations',
            'Kc = (0.3)²/((0.2)(0.5)³)',
            'Kc = 0.09/(0.2 × 0.125) = 0.09/0.025 = 3.6'
        ],
        helper: 'Kc = [products]^coefficients/[reactants]^coefficients; Use equilibrium concentrations only',
        realWorldContext: 'Haber process equilibrium'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Equilibrium',
        problem: 'A ⇌ 2B. [A]=0.1 M, [B]=0.2 M at equilibrium. Kc?',
        parameters: { equation: 'A ⇌ 2B', concentrations: { 'A': 0.1, 'B': 0.2 }, findKc: true },
        type: 'equilibrium_constants',subparts: [
            'Write Kc expression: Kc = [B]²/[A]',
            'Substitute values: Kc = (0.2)²/0.1',
            'Kc = 0.04/0.1',
            'Kc = 0.4'
        ],
        helper: 'Kc = [products]/[reactants] with stoichiometric coefficients as exponents',
        realWorldContext: 'Basic equilibrium calculation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Equilibrium with ICE Table',
        problem: 'Initial: 0.5 M A. Equilibrium constant Kc = 4. Find equilibrium [A] and [B] for A ⇌ 2B',
        parameters: { equation: 'A ⇌ 2B', initialConcentration: { 'A': 0.5 }, Kc: 4, useICE: true, findEquilibriumConcentrations: true },
        type: 'equilibrium_constants',
        subparts: [
            'ICE table: Initial [A]=0.5, [B]=0; Change [A]=-x, [B]=+2x',
            'Equilibrium: [A]=0.5-x, [B]=2x',
            'Kc = (2x)²/(0.5-x) = 4',
            'Solve: 4x² = 4(0.5-x); 4x² + 4x - 2 = 0; x = 0.366; [A]=0.134 M, [B]=0.732 M'
        ],
        helper: 'ICE table: Initial, Change, Equilibrium; Set up Kc equation and solve for x',
        realWorldContext: 'ICE table applications'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Kp from Kc',
        problem: 'For N2 + 3H2 ⇌ 2NH3, Kc = 0.5 at 450°C. Calculate Kp.',
        parameters: { equation: 'N2 + 3H2 ⇌ 2NH3', Kc: 0.5, temperature: 723.15, findKp: true },
        type: 'equilibrium_constants',
        subparts: [
            'Relationship: Kp = Kc(RT)^Δn',
            'Δn = (moles gas products) - (moles gas reactants) = 2 - 4 = -2',
            'R = 0.0821 L·atm/(mol·K), T = 723 K',
            'Kp = 0.5 × (0.0821 × 723)^(-2) = 0.5/(59.36)² = 1.42×10⁻⁴'
        ],
        helper: 'Kp = Kc(RT)^Δn where Δn = change in moles of gas',
        realWorldContext: 'Gas equilibrium constants'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Reverse Reaction',
        problem: 'Forward: A + B ⇌ C, Kc = 10. What\'s Kc for C ⇌ A + B?',
        parameters: { equation: 'A + B ⇌ C', Kc: 10, findReverseKc: true },
        type: 'equilibrium_constants',
        subparts: [
            'Reverse reaction has inverted equilibrium expression',
            'Kreverse = 1/Kforward',
            'Kreverse = 1/10',
            'Kreverse = 0.1'
        ],
        helper: 'Reverse reaction: Kreverse = 1/Kforward',
        realWorldContext: 'Reverse reaction equilibrium'
    });

    return relatedProblems;
}

generateRelatedLeChatelir(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Pressure Effect',
        problem: 'N2 + 3H2 ⇌ 2NH3 (exothermic). Increase pressure. Shift direction?',
        parameters: { equation: 'N2 + 3H2 ⇌ 2NH3', exothermic: true, disturbance: 'increase pressure', predictShift: true },
        type: 'le_chatelier',
        subparts: [
            'Count moles of gas: Left: 1 + 3 = 4 mol; Right: 2 mol',
            'Increase pressure favors side with fewer gas moles',
            'Shifts RIGHT (toward products, NH3)',
            'More NH3 produced, equilibrium position shifts right'
        ],
        helper: 'Pressure increase: shifts to side with fewer gas moles',
        realWorldContext: 'Haber process optimization'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Temperature Effect',
        problem: 'Exothermic reaction. Increase T. Equilibrium shifts?',
        parameters: { reaction: 'exothermic', disturbance: 'increase temperature', predictShift: true },
        type: 'le_chatelier',
        subparts: [
            'Exothermic: heat is a product (A + B ⇌ C + heat)',
            'Increasing T adds heat',
            'Shifts LEFT (toward reactants) to consume heat',
            'K decreases with increasing T for exothermic reactions'
        ],
        helper: 'Exothermic: ↑T shifts left (K↓); Endothermic: ↑T shifts right (K↑)',
        realWorldContext: 'Temperature equilibrium effects'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Concentration Change',
        problem: 'CO + H2O ⇌ CO2 + H2. Add more CO. Effect on CO2 production?',
        parameters: { equation: 'CO + H2O ⇌ CO2 + H2', addReactant: 'CO', analyzeProducts: true },
        type: 'le_chatelier',
        subparts: [
            'Adding CO increases reactant concentration',
            'System shifts RIGHT to consume added CO',
            'More CO2 and H2 produced',
            'New equilibrium established with higher product concentrations'
        ],
        helper: 'Add reactant: shifts toward products; Add product: shifts toward reactants',
        realWorldContext: 'Water-gas shift reaction'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Catalyst Effect',
        problem: 'Does catalyst shift equilibrium position?',
        parameters: { concept: 'catalyst effect', explain: true },
        type: 'le_chatelier',
        subparts: [
            'Catalyst speeds up both forward and reverse reactions equally',
            'Reaches equilibrium faster, but same final position',
            'Does NOT change K or equilibrium concentrations',
            'Only changes rate, not position'
        ],
        helper: 'Catalyst: faster equilibrium, same position; Does NOT shift equilibrium',
        realWorldContext: 'Catalyst misconceptions'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combined Effects',
        problem: 'Exothermic: 2SO2 + O2 ⇌ 2SO3. Increase P and decrease T. Net effect?',
        parameters: { equation: '2SO2 + O2 ⇌ 2SO3', exothermic: true, changes: ['increase pressure', 'decrease temperature'], netEffect: true },
        type: 'le_chatelier',
        subparts: [
            'Pressure: 3 mol left → 2 mol right; ↑P shifts RIGHT',
            'Temperature: exothermic; ↓T shifts RIGHT (favors heat release)',
            'Both changes favor product formation',
            'Net: significant shift RIGHT, more SO3 produced'
        ],
        helper: 'Multiple stresses: analyze each separately, then combine effects',
        realWorldContext: 'Contact process optimization'
    });

    return relatedProblems;
}

generateRelatedSolubilityEquilibria(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Calculate Ksp',
        problem: 'AgCl(s) ⇌ Ag⁺ + Cl⁻. At saturation: [Ag⁺] = [Cl⁻] = 1.3×10⁻⁵ M. Ksp?',
        parameters: { compound: 'AgCl', ions: ['Ag+', 'Cl-'], ionConcentrations: [1.3e-5, 1.3e-5], findKsp: true },
        type: 'solubility_equilibria',
        subparts: [
            'Write Ksp expression: Ksp = [Ag⁺][Cl⁻]',
            'Substitute saturation concentrations',
            'Ksp = (1.3×10⁻⁵)(1.3×10⁻⁵)',
            'Ksp = 1.69×10⁻¹⁰'
        ],
        helper: 'Ksp = [products] only; Solid not included; Use saturation concentrations',
        realWorldContext: 'Silver chloride solubility'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Ksp',
        problem: '[Ba²⁺] in saturated BaSO4 solution. Ksp(BaSO4) = 1.1×10⁻¹⁰. Find [SO4²⁻].',
        parameters: { compound: 'BaSO4', Ksp: 1.1e-10, findAllConcentrations: true },
        type: 'solubility_equilibria',
        subparts: [
            'BaSO4(s) ⇌ Ba²⁺ + SO4²⁻',
            'Ksp = [Ba²⁺][SO4²⁻] = 1.1×10⁻¹⁰',
            'Let s = solubility; [Ba²⁺] = [SO4²⁻] = s',
            's² = 1.1×10⁻¹⁰; s = 1.05×10⁻⁵ M for both ions'
        ],
        helper: 'Equal ion concentrations when coefficients are 1:1',
        realWorldContext: 'Barium sulfate precipitation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Solubility with Common Ion',
        problem: 'AgCl solubility in 0.1 M NaCl. Ksp(AgCl) = 1.8×10⁻¹⁰',
        parameters: { compound: 'AgCl', Ksp: 1.8e-10, commonIon: 'Cl-', commonIonConc: 0.1, findSolubility: true },
        type: 'solubility_equilibria',
        subparts: [
            'Common ion Cl⁻ already at 0.1 M from NaCl',
            'AgCl(s) ⇌ Ag⁺ + Cl⁻; Let s = [Ag⁺]',
            '[Cl⁻] = 0.1 + s ≈ 0.1 (s is very small)',
            'Ksp = s(0.1) = 1.8×10⁻¹⁰; s = 1.8×10⁻⁹ M (much less than in pure water)'
        ],
        helper: 'Common ion effect: decreases solubility; [common ion] = initial + s',
        realWorldContext: 'Common ion effect'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Precipitation Prediction',
        problem: 'Mix: 100 mL of 0.001 M AgNO3 + 100 mL of 0.001 M NaCl. Will AgCl precipitate? Ksp = 1.8×10⁻¹⁰',
        parameters: { mixing: true, solution1: 'AgNO3', conc1: 0.001, volume1: 100, solution2: 'NaCl', conc2: 0.001, volume2: 100, Ksp: 1.8e-10, predictPrecipitation: true },
        type: 'solubility_equilibria',
        subparts: [
            'After mixing: [Ag⁺] = [Cl⁻] = 0.001/2 = 0.0005 M (diluted)',
            'Calculate Q: Q = [Ag⁺][Cl⁻] = (0.0005)² = 2.5×10⁻⁷',
            'Compare: Q = 2.5×10⁻⁷ > Ksp = 1.8×10⁻¹⁰',
            'Q > Ksp, so YES, AgCl will precipitate'
        ],
        helper: 'Q > Ksp: precipitate forms; Q < Ksp: no precipitate; Q = Ksp: saturated',
        realWorldContext: 'Precipitation criteria'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polyprotic Salt',
        problem: 'Ca3(PO4)2(s) ⇌ 3Ca²⁺ + 2PO4³⁻. Ksp expression and solubility in water',
        parameters: { compound: 'Ca3(PO4)2', polyvalent: true, writeKspExpression: true, findSolubility: true },
        type: 'solubility_equilibria',
        subparts: [
            'Ksp = [Ca²⁺]³[PO4³⁻]²',
            'Let s = solubility; [Ca²⁺] = 3s, [PO4³⁻] = 2s',
            'Ksp = (3s)³(2s)² = 27s³ × 4s² = 108s⁵',
            'Solve for s: s = (Ksp/108)^(1/5)'
        ],
        helper: 'Polyvalent: coefficients affect concentrations; [ion] = coefficient × solubility',
        realWorldContext: 'Multivalent salt solubility'
    });

    return relatedProblems;
}

generateRelatedComplexIons(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Complex Formation Constant',
        problem: '[Ag(NH3)2]⁺ formation: Ag⁺ + 2NH3 ⇌ [Ag(NH3)2]⁺. Kf = 1.7×10⁷',
        parameters: { complex: '[Ag(NH3)2]+', Kf: 1.7e7, equilibrium: true },
        type: 'complex_ions',
        subparts: [
            'Kf = [[Ag(NH3)2]⁺]/([Ag⁺][NH3]²)',
            'Large Kf (10⁷) means reaction strongly favors complex formation',
            'Nearly all Ag⁺ converts to complex in presence of excess NH3',
            'Used to dissolve AgCl: AgCl(s) + 2NH3 → [Ag(NH3)2]⁺ + Cl⁻'
        ],
        helper: 'Formation constant Kf: Large Kf = stable complex',
        realWorldContext: 'Silver-ammonia complex'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Complex Formation',
        problem: 'Cu²⁺ + 4NH3 ⇌ [Cu(NH3)4]²⁺. Kf = 2.0×10¹³. Explain strong complex formation.',
        parameters: { complex: '[Cu(NH3)4]2+', Kf: 2.0e13, strongComplex: true },
        type: 'complex_ions',
        subparts: [
            'Very large Kf (10¹³) indicates extremely stable complex',
            'Cu²⁺ has empty d orbitals that accept NH3 lone pairs',
            'Forms coordinate covalent bonds (dative bonds)',
            'Deep blue color of complex indicates strong ligand field'
        ],
        helper: 'Complex formation: Metal accepts electron pairs from ligands',
        realWorldContext: 'Copper-ammonia complex'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Solubility with Complexation',
        problem: 'AgCl insoluble but dissolves in NH3. Explain using Ksp and Kf.',
        parameters: { precipitate: 'AgCl', ligand: 'NH3', dissolveByComplexation: true, explainMechanism: true },
        type: 'complex_ions',
        subparts: [
            'AgCl(s) ⇌ Ag⁺ + Cl⁻ (Ksp = 1.8×10⁻¹⁰, very small)',
            'Ag⁺ + 2NH3 ⇌ [Ag(NH3)2]⁺ (Kf = 1.7×10⁷, very large)',
            'NH3 removes Ag⁺ from solution, shifts AgCl dissolution right',
            'Overall: AgCl(s) + 2NH3 → [Ag(NH3)2]⁺ + Cl⁻; K = Ksp × Kf'
        ],
        helper: 'Complex formation can increase solubility by removing free metal ions',
        realWorldContext: 'Complexation solubilization'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Coordination Number',
        problem: 'Coordination number of Ag⁺ in [Ag(NH3)2]⁺ and Cu²⁺ in [Cu(NH3)4]²⁺',
        parameters: { complexes: ['[Ag(NH3)2]+', '[Cu(NH3)4]2+'], findCoordinationNumbers: true },
        type: 'complex_ions',
        subparts: [
            'Coordination number = number of ligands directly bonded to metal',
            '[Ag(NH3)2]⁺: 2 NH3 ligands → coordination number = 2',
            '[Cu(NH3)4]²⁺: 4 NH3 ligands → coordination number = 4',
            'Common coordination numbers: 2, 4, 6'
        ],
        helper: 'Coordination number = number of ligand bonds to central metal',
        realWorldContext: 'Metal coordination'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Stepwise Complex Formation',
        problem: '[Fe(CN)6]⁴⁻ forms stepwise. K1 >> K2 >> K3... Explain.',
        parameters: { complex: '[Fe(CN)6]^4-', stepwiseFormation: true, explainTrend: true },
        type: 'complex_ions',
        subparts: [
            'Each CN⁻ adds sequentially: Fe²⁺ + CN⁻ ⇌ [Fe(CN)]⁺, etc.',
            'K1 is largest (adding to bare metal ion)',
            'Each subsequent K is smaller (adding to increasingly negative complex)',
            'Electrostatic repulsion makes later additions less favorable'
        ],
        helper: 'Stepwise formation: K1 > K2 > K3...; Overall Kf = K1 × K2 × K3...',
        realWorldContext: 'Stepwise complexation'
    });

    return relatedProblems;
}

generateRelatedGasEquilibrium(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Kp Calculation',
        problem: 'N2O4 ⇌ 2NO2. Partial pressures: P(N2O4)=2.0 atm, P(NO2)=1.0 atm. Kp?',
        parameters: { equation: 'N2O4 ⇌ 2NO2', partialPressures: { 'N2O4': 2.0, 'NO2': 1.0 }, findKp: true },
        type: 'gas_equilibrium',
        subparts: [
            'Write Kp expression: Kp = P(NO2)²/P(N2O4)',
            'Substitute partial pressures',
            'Kp = (1.0)²/2.0',
            'Kp = 0.5 atm'
        ],
        helper: 'Kp = (P products)^coeff/(P reactants)^coeff; Use partial pressures',
        realWorldContext: 'Nitrogen oxide equilibria'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Equilibrium Pressure',
        problem: 'H2 + I2 ⇌ 2HI. Initial: 1 atm H2, 1 atm I2. Kp = 50.5 at 448°C. Equilibrium pressures?',
        parameters: { equation: 'H2 + I2 ⇌ 2HI', Kp: 50.5, initialPressures: { 'H2': 1, 'I2': 1 }, findEquilibriumPressures: true },
        type: 'gas_equilibrium',
        subparts: [
            'ICE: Initial P(H2)=1, P(I2)=1, P(HI)=0',
            'Change: -x, -x, +2x; Equilibrium: 1-x, 1-x, 2x',
            'Kp = (2x)²/((1-x)(1-x)) = 50.5',
            'Solve: 4x²/(1-x)² = 50.5; x = 0.78; P(H2)=P(I2)=0.22 atm, P(HI)=1.56 atm'
        ],
        helper: 'Gas equilibrium: Use ICE table with partial pressures',
        realWorldContext: 'Hydrogen-iodine equilibrium'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Gas Equilibrium with Inert Gas',
        problem: 'Add inert Ar to: 2NO2 ⇌ N2O4 system at constant volume. Effect?',
        parameters: { equation: '2NO2 ⇌ N2O4', addInertGas: true, constantVolume: true, analyzeEffect: true },
        type: 'gas_equilibrium',
        subparts: [
            'At constant volume: partial pressures unchanged',
            'Inert gas doesn\'t participate in reaction',
            'Total pressure increases, but partial pressures same',
            'No effect on equilibrium position (Kp depends only on partial pressures)'
        ],
        helper: 'Inert gas: No effect at constant V; Shifts at constant P (dilution effect)',
        realWorldContext: 'Inert gas effects'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Degree of Dissociation',
        problem: 'N2O4(g) ⇌ 2NO2(g). 50% dissociation at 1 atm. Degree of dissociation α = ?',
        parameters: { dissociation: 0.5, initialPressure: 1, findDegreeOfDissociation: true },
        type: 'gas_equilibrium',
        subparts: [
            'Degree of dissociation α = fraction dissociated',
            'α = 0.5 means 50% of N2O4 dissociates',
            'Initial: 1 atm N2O4; After: 0.5 atm N2O4, 1.0 atm NO2',
            'Kp = (1.0)²/0.5 = 2.0 atm'
        ],
        helper: 'Degree of dissociation α: fraction converted; 0 ≤ α ≤ 1',
        realWorldContext: 'Partial dissociation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Equilibrium Pressure Calculation',
        problem: 'SO2 + 0.5O2 ⇌ SO3. Initial: 1 atm SO2, 1 atm O2. Kp = 25. Equilibrium SO3 pressure?',
        parameters: { equation: 'SO2 + 0.5O2 ⇌ SO3', Kp: 25, initialPressures: { 'SO2': 1, 'O2': 1 }, findProductPressure: true },
        type: 'gas_equilibrium',
        subparts: [
            'ICE: P(SO2)=1-x, P(O2)=1-0.5x, P(SO3)=x',
            'Kp = x/((1-x)(1-0.5x)^0.5) = 25',
            'Solve iteratively or approximate',
            'x ≈ 0.96 atm (SO3 at equilibrium)'
        ],
        helper: 'Fractional coefficients allowed in gas equilibria',
        realWorldContext: 'Contact process equilibrium'
    });

    return relatedProblems;
}







    // === MAIN RELATED PROBLEMS GENERATION METHOD ===

    generateRelatedProblems(originalProblem, originalSolution, options = {}) {
        const {
            count = 5,
            difficultyRange = ['easier', 'similar', 'harder'],
            includeRealWorld = true,
            includeConceptualVariations = true
        } = options;

        try {
            const problemType = originalProblem.type;
            const generator = this.relatedProblemGenerators[problemType];
            
            if (!generator) {
                throw new Error(`No related problem generator for type: ${problemType}`);
            }

            const relatedProblems = generator.call(this, originalProblem, originalSolution, {
                count,
                difficultyRange,
                includeRealWorld,
                includeConceptualVariations
            });

            return {
                originalProblem: originalProblem,
                relatedProblems: relatedProblems,
                totalProblems: relatedProblems.length,
                category: this.getCategoryFromType(problemType),
                generatedAt: new Date().toISOString()
            };

        } catch (error) {
            throw new Error(`Failed to generate related problems: ${error.message}`);
        }
    }






