getTopicRelevance(topicType) {
    const relevance = {
        // Organic Chemistry
        hydrocarbons: "Hydrocarbons are the backbone of all organic chemistry and the basis of the fossil fuel industry",
        functional_groups: "Functional groups determine chemical reactivity and are central to drug design and synthesis",
        organic_reactions: "Understanding mechanisms allows chemists to predict products and design syntheses",
        stereochemistry: "Stereochemistry profoundly affects biological activity; essential for pharmaceutical chemistry",
        spectroscopy: "Spectroscopic methods are the primary tools for structural identification in modern chemistry",
        polymers: "Polymers are among the most commercially important materials and exemplify condensation/addition chemistry",

        // Acid-Base Chemistry
        acid_base_definitions: "Acid-base definitions underpin all of chemistry and biology; every enzyme mechanism, drug interaction, and industrial process involves proton or electron pair transfer",
        ph_calculations: "pH calculations quantify acidity in systems ranging from blood and ocean water to industrial reactors; mastery is essential for any quantitative chemistry",
        buffer_systems: "Buffer systems maintain stable pH in biological fluids, pharmaceutical formulations, and analytical chemistry; the carbonate buffer in blood is literally life-sustaining",
        titration: "Titration is the cornerstone of quantitative analytical chemistry; used daily in pharmaceutical QC, food testing, environmental monitoring, and clinical analysis",
        acid_base_organic: "The pKa values of organic functional groups govern reactivity, drug bioavailability, enzyme catalysis, and synthetic strategy; essential for medicinal and biological chemistry",

        // Stoichiometry
        mole_concept: "The mole concept is the fundamental bridge between the microscopic world of atoms and the macroscopic world of measurable masses and volumes; underpins all quantitative chemistry",
        chemical_equations: "Balanced equations encode the quantitative relationships in every chemical reaction; the mole ratio is the essential tool for all stoichiometric calculations",
        limiting_reagent: "The limiting reagent concept explains why reactions stop and determines the maximum possible yield; critical for industrial process optimization and cost control",
        percentage_yield: "Percentage yield and atom economy measure the real-world efficiency of chemical reactions; central to green chemistry and pharmaceutical manufacturing economics",
        solution_stoichiometry: "Solution stoichiometry and titration are the foundations of quantitative analytical chemistry; used in pharmaceuticals, food testing, environmental monitoring, and clinical analysis",
        gas_stoichiometry: "Gas stoichiometry connects the ideal gas law to reaction calculations; essential for understanding industrial gas-phase processes, fuel cells, and atmospheric chemistry",

        // Redox Chemistry
        redox_fundamentals: "Redox reactions — involving electron transfer — underpin energy generation (combustion, respiration, batteries), industrial synthesis (chlor-alkali, aluminium smelting), corrosion, and every electrochemical technology from smartphones to electric vehicles",
        electrochemical_cells: "Electrochemical cells convert chemical energy to electrical energy; the standard electrode potential series quantifies oxidizing and reducing power and predicts spontaneity of all redox reactions; batteries and fuel cells are direct applications",
        electrolysis: "Electrolysis drives non-spontaneous redox reactions using electrical energy; it is responsible for the industrial production of aluminium, chlorine, sodium hydroxide, and hydrogen, and underpins electroplating and electrorefining",
        redox_titrations: "Redox titrations provide precise quantitative analysis for a vast range of species — iron content in steel, vitamin C in food, dissolved oxygen in water, available chlorine in bleach — using permanganate, dichromate, and iodometric methods",
        corrosion_and_protection: "Corrosion costs 3−4% of global GDP annually; understanding it as an electrochemical process enables rational design of protection systems — sacrificial anodes, galvanizing, cathodic protection — saving billions in infrastructure costs"
    };

    return relevance[topicType] || "Important chemistry concept with wide-ranging applications";
}

suggestRelatedTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        // Organic Chemistry
        hydrocarbons: ['functional_groups', 'organic_reactions'],
        functional_groups: ['hydrocarbons', 'organic_reactions', 'spectroscopy', 'acid_base_organic'],
        organic_reactions: ['functional_groups', 'stereochemistry', 'acid_base_organic', 'redox_fundamentals'],
        stereochemistry: ['organic_reactions', 'spectroscopy'],
        spectroscopy: ['functional_groups', 'organic_reactions'],
        polymers: ['organic_reactions', 'functional_groups'],

        // Acid-Base Chemistry
        acid_base_definitions: ['ph_calculations', 'buffer_systems', 'acid_base_organic'],
        ph_calculations: ['acid_base_definitions', 'buffer_systems', 'titration'],
        buffer_systems: ['ph_calculations', 'titration', 'acid_base_organic'],
        titration: ['ph_calculations', 'buffer_systems', 'solution_stoichiometry', 'redox_titrations'],
        acid_base_organic: ['functional_groups', 'organic_reactions', 'ph_calculations'],

        // Stoichiometry
        mole_concept: ['chemical_equations', 'solution_stoichiometry', 'gas_stoichiometry'],
        chemical_equations: ['mole_concept', 'limiting_reagent', 'percentage_yield', 'redox_fundamentals'],
        limiting_reagent: ['chemical_equations', 'percentage_yield', 'solution_stoichiometry'],
        percentage_yield: ['limiting_reagent', 'chemical_equations', 'solution_stoichiometry'],
        solution_stoichiometry: ['mole_concept', 'chemical_equations', 'limiting_reagent', 'titration', 'redox_titrations'],
        gas_stoichiometry: ['mole_concept', 'chemical_equations', 'limiting_reagent'],

        // Redox Chemistry
        redox_fundamentals: ['electrochemical_cells', 'electrolysis', 'redox_titrations', 'chemical_equations', 'corrosion_and_protection'],
        electrochemical_cells: ['redox_fundamentals', 'electrolysis', 'corrosion_and_protection', 'ph_calculations'],
        electrolysis: ['electrochemical_cells', 'redox_fundamentals', 'mole_concept', 'solution_stoichiometry'],
        redox_titrations: ['redox_fundamentals', 'titration', 'solution_stoichiometry', 'mole_concept'],
        corrosion_and_protection: ['redox_fundamentals', 'electrochemical_cells', 'functional_groups']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => {
        const organicTopic = this.organicTopics?.[type];
        const acidBaseTopic = this.acidBaseTopics?.[type];
        const stoichTopic = this.stoichiometryTopics?.[type];
        const redoxTopic = this.redoxTopics?.[type];
        const topic = organicTopic || acidBaseTopic || stoichTopic || redoxTopic;
        return {
            type,
            name: topic?.name,
            description: topic?.description
        };
    }).filter(t => t.name);
}

getRelevantChemistryDiagrams(type) {
    const diagramTypes = {
        // Organic Chemistry
        hydrocarbons: [
            'methane_structure',
            'ethene_pi_bond',
            'benzene_delocalization',
            'alkane_homologous_series',
            'geometric_isomers_but2ene'
        ],
        functional_groups: [
            'functional_group_overview_table',
            'alcohol_oxidation_ladder',
            'carbonyl_group_structure',
            'carboxylic_acid_dimer',
            'amine_basicity_comparison'
        ],
        organic_reactions: [
            'sn2_mechanism_inversion',
            'sn1_carbocation_intermediate',
            'e2_antiperiplanar',
            'markovnikov_addition',
            'bromonium_ion_anti_addition',
            'reaction_energy_profile'
        ],
        stereochemistry: [
            'chiral_centre_four_groups',
            'enantiomers_mirror_image',
            'cip_priority_assignment',
            'ez_alkene_isomers',
            'meso_compound_symmetry',
            'fischer_projection'
        ],
        spectroscopy: [
            'ir_spectrum_carbonyl',
            'h_nmr_splitting_patterns',
            'mass_spectrum_fragmentation',
            'uv_vis_conjugation',
            'nmr_chemical_shift_table'
        ],
        polymers: [
            'addition_polymerization_mechanism',
            'condensation_polymerization_nylon',
            'polyethylene_repeat_unit',
            'pet_polyester_structure',
            'thermoplastic_vs_thermoset'
        ],

        // Acid-Base Chemistry
        acid_base_definitions: [
            'bronsted_lowry_proton_transfer',
            'lewis_acid_base_adduct',
            'conjugate_pair_diagram',
            'arrhenius_vs_bronsted_comparison',
            'amphoteric_water_diagram',
            'strong_vs_weak_acid_dissociation'
        ],
        ph_calculations: [
            'ph_scale_with_examples',
            'ice_table_weak_acid',
            'ph_vs_concentration_graph',
            'ka_kb_kw_relationship_triangle',
            'degree_of_dissociation_vs_concentration',
            'polyprotic_acid_successive_ka'
        ],
        buffer_systems: [
            'henderson_hasselbalch_derivation',
            'buffer_action_diagram_acid_added',
            'buffer_action_diagram_base_added',
            'buffer_capacity_bell_curve',
            'blood_carbonate_buffer_system',
            'ph_range_buffer_selection_table'
        ],
        titration: [
            'titration_apparatus_labelled',
            'strong_acid_strong_base_curve',
            'weak_acid_strong_base_curve',
            'strong_acid_weak_base_curve',
            'indicator_transition_ranges_table',
            'half_equivalence_point_diagram',
            'equivalence_point_identification'
        ],
        acid_base_organic: [
            'pka_ladder_organic_compounds',
            'acetate_resonance_structures',
            'phenoxide_resonance_ring',
            'inductive_effect_chloroacetic_series',
            'amine_basicity_comparison',
            'amino_acid_zwitterion_pI',
            'hammett_sigma_rho_plot'
        ],

        // Stoichiometry
        mole_concept: [
            'mole_conversion_roadmap',
            'avogadro_number_scale',
            'molar_mass_calculation_table',
            'empirical_vs_molecular_formula',
            'percent_composition_pie_chart'
        ],
        chemical_equations: [
            'balancing_equations_atom_count',
            'stoichiometry_four_step_pathway',
            'mole_ratio_from_coefficients',
            'conservation_of_mass_diagram',
            'reaction_type_summary_table'
        ],
        limiting_reagent: [
            'limiting_reagent_graph_two_lines',
            'limiting_reagent_sandwich_analogy',
            'moles_product_comparison_table',
            'excess_reagent_remaining_calculation',
            'stoichiometric_point_diagram'
        ],
        percentage_yield: [
            'actual_vs_theoretical_yield_bar',
            'atom_economy_comparison_table',
            'reasons_for_low_yield_diagram',
            'green_chemistry_metrics_overview',
            'yield_vs_atom_economy_venn'
        ],
        solution_stoichiometry: [
            'molarity_formula_triangle',
            'dilution_c1v1_c2v2_diagram',
            'titration_apparatus_labelled',
            'titration_curve_strong_strong',
            'indicator_ph_range_table'
        ],
        gas_stoichiometry: [
            'ideal_gas_law_variables_diagram',
            'molar_volume_at_stp_satp',
            'dalton_partial_pressure_diagram',
            'gas_collection_over_water',
            'pv_nrt_unit_guide',
            'combined_gas_law_diagram'
        ],

        // Redox Chemistry
        redox_fundamentals: [
            'oil_rig_electron_transfer_diagram',
            'oxidation_state_rules_table',
            'half_equation_balancing_acidic',
            'half_equation_balancing_basic',
            'oxidation_state_manganese_series',
            'oxidation_state_nitrogen_series',
            'oxidation_state_sulfur_series',
            'redox_reaction_electron_flow_diagram'
        ],
        electrochemical_cells: [
            'daniel_cell_labelled_diagram',
            'standard_electrode_potential_table',
            'salt_bridge_ion_migration',
            'nernst_equation_graph',
            'cell_notation_examples',
            'galvanic_vs_electrolytic_comparison',
            'gibbs_energy_ecell_relationship',
            'hydrogen_fuel_cell_diagram',
            'lead_acid_battery_diagram',
            'lithium_ion_battery_diagram'
        ],
        electrolysis: [
            'electrolytic_cell_labelled_diagram',
            'faraday_first_law_graph',
            'selective_discharge_table',
            'copper_sulfate_electrolysis_diagram',
            'chlor_alkali_membrane_cell',
            'hall_heroult_cell_diagram',
            'downs_cell_molten_nacl',
            'electroplating_setup_diagram',
            'faraday_calculation_flowchart'
        ],
        redox_titrations: [
            'permanganate_titration_setup',
            'titration_curve_redox',
            'iodometric_two_step_diagram',
            'starch_iodine_indicator_diagram',
            'mole_ratio_permanganate_iron',
            'dichromate_titration_setup',
            'bleach_iodometric_flowchart',
            'redox_titration_calculations_pathway'
        ],
        corrosion_and_protection: [
            'iron_rusting_electrochemical_diagram',
            'ferroxyl_indicator_results',
            'galvanic_corrosion_bimetallic',
            'sacrificial_anode_zinc_iron',
            'galvanizing_vs_tinplating_comparison',
            'cathodic_protection_pipeline',
            'stainless_steel_passive_layer',
            'electrochemical_series_corrosion',
            'rust_formation_stages_diagram',
            'corrosion_conditions_test_tubes'
        ]
    };

    return diagramTypes[type] || [];
}

generateChemistryAnalogy(concept) {
    const analogies = {
        // Organic Chemistry — Structure
        chirality: "Like left and right hands — identical atoms arranged differently, non-superimposable mirror images",
        enantiomers: "Like a pair of gloves — identical in composition but one fits the left hand, one the right",
        functionalGroup: "Like different tools in a toolbox — each has a specific function regardless of the handle",
        homologousSeries: "Like a ladder — each rung adds one CH₂, with gradually changing properties",
        aromaticity: "Like a roundabout — electrons flow continuously around the ring rather than being fixed",

        // Organic Chemistry — Bonding
        hydrogenBonding: "Like Velcro — weak individually but strong when many are present; explains high boiling points",
        londonForces: "Like static electricity — temporary, but larger molecules have more 'surface area' for sticking",
        resonance: "Like a hybrid car — the true structure is a blend, not one structure or the other",
        doubleBond: "Like a railway track — two parallel connections, one sigma and one pi; rotation is restricted",

        // Organic Chemistry — Reactions
        nucleophile: "Like a moth attracted to light — seeks out electron-poor (positive/partially positive) centres",
        electrophile: "Like a vacuum cleaner — seeks electron-rich areas to pull electrons toward it",
        carbocation: "Like a beggar holding out an empty hand — very eager to accept electrons from a donor",
        sn2Backside: "Like an umbrella turning inside out in the wind — inversion of the central carbon",
        sn1Carbocation: "Like a revolving door — ionization creates a flat, open intermediate that can be entered from either side",
        markovnikovRule: "Rich get richer: the carbon that already has more H atoms gets the extra H from HX",
        catalysis: "Like a ramp instead of a wall — lowers the energy barrier without changing the start or finish",
        leChatelierPrinciple: "Like a see-saw — disturbing the balance causes the reaction to shift to restore it",

        // Organic Chemistry — Spectroscopy
        NMRChemicalShift: "Like living in a neighbourhood — nearby electronegative groups change the 'environment' felt by H atoms",
        nmrSplitting: "Like neighbours waving — adjacent H atoms 'communicate' and split each other's signals",
        IRAbsorption: "Like a tuning fork — each bond vibrates at a specific frequency matching certain IR radiation",
        massSpecFragmentation: "Like a pinball machine — the molecular ion breaks apart into characteristic fragments",

        // Organic Chemistry — Polymers
        polymer: "Like a pearl necklace — many identical or similar beads (monomers) strung together in a chain",
        additionPolymerization: "Like a chain of paper clips — each clip (monomer) opens its double bond and hooks onto the next",
        condensationPolymerization: "Like snapping Lego bricks together — each connection releases a small molecule (water), like the click sound",
        crosslinking: "Like a fisherman's net — extra connections between chains make the material stronger and more rigid",

        // Acid-Base Chemistry
        acidBaseReaction: "Like a hot potato — the proton is passed from the acid (donor) to the base (acceptor); the reaction proceeds toward the side where the 'potato' is held by the weaker pair",
        pHScale: "Like a volume dial — each step of 1 pH unit represents a 10-fold change in [H⁺]; the dial is logarithmic, not linear",
        pKa: "Like a tug-of-war score — a lower pKa means the acid is winning (more dissociated); a higher pKa means the proton is held more tightly",
        bufferSolution: "Like a shock absorber on a car — resists sudden changes (in pH rather than bumps in the road); works best when centred at its optimal position (pH = pKa)",
        bufferCapacity: "Like the size of that shock absorber — a bigger buffer (more concentrated) can absorb more acid or base before the pH changes significantly",
        hendersonHasselbalch: "Like a recipe adjustment — tells you exactly how much weak acid vs conjugate base to mix to hit your target pH",
        conjugateBase: "Like the shadow of an acid — formed when the acid gives up its proton; always weaker than the original acid",
        strongAcid: "Like a one-way door — once the proton leaves, it does not come back; complete dissociation",
        weakAcid: "Like a revolving door — the proton goes back and forth between the acid and water; partial dissociation establishes an equilibrium",
        equivalencePoint: "Like the exact moment the scales balance — stoichiometrically equal moles of acid and base have reacted",
        titrationEndpoint: "Like a traffic light changing — the indicator signals that the reaction is (approximately) complete",
        bufferExhaustion: "Like a sponge that has absorbed as much water as it can — once all the conjugate base has been consumed by added acid (or all the weak acid by added base), the buffer can no longer resist pH change",
        lewisAcid: "Like an empty parking space — ready to accept an electron pair (a car) from a Lewis base",
        lewisBase: "Like a car looking for a parking space — has an electron pair ready to donate to a Lewis acid",
        resonanceStabilization: "Like spreading the load across multiple beams in a bridge — the negative charge in acetate is shared between two oxygens, making the structure more stable than if it were on just one",
        inductiveEffect: "Like a relay race — the electron-withdrawing effect of a chlorine atom is passed along the carbon chain, getting weaker with each step",
        pKaLadder: "Like a height chart — compounds at the top (higher pKa) are weaker acids; compounds at the bottom (lower pKa) are stronger; the reaction always moves the proton downhill (from weaker-held to stronger-held pair)",

        // Stoichiometry — Mole Concept
        mole: "Like a 'dozen' but enormously bigger — just as a dozen always means 12, a mole always means 6.022×10²³ of anything",
        avogadroNumber: "Like grains of sand on all Earth's beaches multiplied millions of times — the scale needed because atoms are unimaginably small",
        molarMass: "Like knowing that a dozen eggs weighs a certain amount — molar mass tells you how much one mole of a substance weighs",
        empiricalFormula: "Like simplifying a fraction — CH₂O is the 'simplest form' of C₆H₁₂O₆, just as 1/2 is the simplest form of 3/6",

        // Stoichiometry — Equations and Ratios
        balancedEquation: "Like a recipe — the coefficients tell you the exact proportions of ingredients needed and products made",
        moleRatio: "Like a recipe ratio — if a recipe needs 2 cups flour per 1 cup sugar, you can scale up or down but keep the ratio",
        stoichiometryPathway: "Like currency exchange — convert your starting currency (grams) to a universal currency (moles), exchange at the reaction's rate, then convert back",

        // Stoichiometry — Limiting Reagent
        limitingReagent: "Like making sandwiches — if you have 10 slices of bread but only 3 slices of cheese, you can only make 3 sandwiches; the cheese is the limiting reagent",
        excessReagent: "Like the leftover bread after making sandwiches — the excess reagent is what remains when the limiting reagent is used up",
        theoreticalYield: "Like the maximum number of sandwiches you could possibly make — determined entirely by whichever ingredient runs out first",

        // Stoichiometry — Yield
        percentageYield: "Like a baker who intended to make 12 biscuits but some stuck to the tray and some broke — they got fewer than the maximum possible",
        atomEconomy: "Like a carpenter who uses most of the wood with little waste vs one who throws away half — atom economy measures how much of the starting material ends up as the desired product",

        // Stoichiometry — Solutions
        molarity: "Like the strength of coffee — more coffee granules (moles of solute) dissolved in the same volume of water makes a more concentrated (higher molarity) solution",
        dilution: "Like adding water to orange squash — you haven't changed the total amount of flavour (moles of solute), just spread it through more water (increased volume)",
        titration: "Like filling a glass to exactly the brim without overflowing — you add precise amounts of one solution until exactly the right amount has reacted with the other",

        // Stoichiometry — Gases
        idealGasLaw: "Like a perfectly obedient crowd — ideal gas molecules follow PV=nRT exactly because they ignore each other (no intermolecular forces, no volume of their own)",
        molarVolume: "Like equal-sized boxes — at the same temperature and pressure, one mole of ANY gas takes up the same volume (22.4 L at STP)",
        daltonLaw: "Like independent musicians playing at once — each gas exerts its own pressure independently, and the total is just the sum of all individual contributions",

        // Redox Chemistry — Fundamentals
        oxidationIsLoss: "Like losing your wallet — the species being oxidized is losing its electrons (its wealth); OIL: Oxidation Is Loss",
        reductionIsGain: "Like finding money — the species being reduced gains electrons; RIG: Reduction Is Gain",
        oxidizingAgent: "Like a pickpocket — it takes electrons from the species it oxidizes; paradoxically, the oxidizing agent is itself reduced (it receives what it steals)",
        reducingAgent: "Like a philanthropist — it donates electrons to whatever it reduces; in the process it becomes oxidized itself",
        redoxCouple: "Like a seesaw — the oxidized and reduced forms of a species are always linked; push one up and the other comes down",
        oxidationState: "Like a financial ledger — a bookkeeping tool that tracks where the electrons have formally 'gone'; not real charges but a useful accounting fiction",
        disproportionation: "Like a business that simultaneously gains customers in one region and loses them in another — the same species is both oxidised and reduced",
        halfEquation: "Like splitting a financial transaction into debit and credit halves — the oxidation half and reduction half must balance before the books close",

        // Redox Chemistry — Electrochemical Cells
        electrochemicalCell: "Like a water wheel powered by a river — spontaneous electron flow (the river current) does useful work (turns the wheel = generates electricity) as it falls from high energy (anode) to low energy (cathode)",
        standardElectrodePotential: "Like a league table for oxidizing power — the higher a species appears (more positive E°), the stronger an oxidizing agent it is; the lower it appears, the stronger the reducing agent",
        saltBridge: "Like a completing wire in an electrical circuit — it allows ions to flow and neutralize charge buildup that would otherwise stop the reaction",
        E_cell: "Like the voltage difference between two stories of a building — the further apart two half-cells are on the E° ladder, the greater the voltage (and driving force) of the cell",
        nernstEquation: "Like adjusting a recipe for altitude — standard E° assumes perfect conditions; Nernst corrects for actual concentrations, just as a recipe must be adjusted for altitude",
        cellNotation: "Like a shorthand address — anode | anode solution || cathode solution | cathode tells you exactly who is where in the cell",
        fuelCell: "Like an engine that converts fuel directly to electricity rather than first burning it — much more efficient because it bypasses the heat-to-work conversion step",

        // Redox Chemistry — Electrolysis
        electrolysis: "Like pumping water uphill — an external electrical source provides the energy to drive the reaction in the non-spontaneous direction",
        faradayFirstLaw: "Like buying chocolate — the more money you spend (charge passed), the more chocolate you get (mass deposited); perfectly proportional",
        faradayConstant: "Like the exchange rate — F = 96,485 C/mol converts between electrical charge and chemical amount; one mole of electrons costs exactly one Faraday",
        selectiveDischarge: "Like a queue at customs — the ion with the most favourable reduction potential jumps to the front; other ions wait until it is exhausted",
        activeAnode: "Like a soluble ink cartridge — the anode material dissolves into solution rather than a fixed anion being oxidized; replenishes what the cathode deposits",
        electrolysisVsGalvanic: "Like charging vs using a battery — galvanic cell releases stored chemical energy as electricity; electrolytic cell uses electricity to create chemical energy",

        // Redox Chemistry — Titrations
        permanganateSelfIndicating: "Like a built-in alarm clock — you do not need an external indicator; the purple colour of KMnO₄ vanishes when Fe²⁺ is present and reappears permanently at the endpoint",
        iodometricIndirect: "Like a relay race with two legs — the oxidizing agent first converts I⁻ to I₂ (leg 1); then I₂ is measured by titration with thiosulfate (leg 2); two mole ratios chain together",
        starchIndicator: "Like a sensitive alarm — the starch turns deep blue-black in the presence of even trace I₂, then instantly goes colourless when the last I₂ is consumed at the endpoint",

        // Redox Chemistry — Corrosion
        corrosionElectrochemical: "Like a short-circuit battery on the surface of the metal — anodic and cathodic regions form a tiny galvanic cell; the metal is consumed as the anode",
        sacrificialAnode: "Like a bodyguard who takes the bullet — the zinc or magnesium anode is consumed preferentially because it has a lower electrode potential, while the protected iron remains intact",
        galvanizingVsTinplating: "Like two types of security guard — zinc is loyal even when its coat is breached (still sacrifices itself); tin turns treacherous when scratched (becomes cathode, accelerates iron corrosion)",
        passiveOxideLayer: "Like a self-healing armour — when aluminium or chromium is scratched, the oxide layer reforms in air within seconds, renewing protection automatically",
        impressedCurrentProtection: "Like paying protection money — an external power supply continuously makes the pipeline or structure the cathode; it can never be oxidized as long as the current flows"
    };

    return analogies[concept] || "An important chemistry concept with wide-ranging applications";
}

adaptChemistryLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                // Organic Chemistry terms
                'nucleophile': 'electron donor',
                'electrophile': 'electron acceptor',
                'bimolecular': 'two-molecule',
                'unimolecular': 'one-molecule',
                'homolytic fission': 'equal bond breaking (each atom gets one electron)',
                'heterolytic fission': 'unequal bond breaking (one atom gets both electrons)',
                'deprotonation': 'loss of a proton (H⁺)',
                'protonation': 'gaining a proton (H⁺)',
                'carbocation': 'positively charged carbon intermediate',
                'carbanion': 'negatively charged carbon intermediate',
                'stereocentre': 'carbon with four different groups',
                'enantiomers': 'non-superimposable mirror images',
                'diastereomers': 'stereoisomers that are not mirror images',

                // Acid-Base terms
                'Brønsted-Lowry acid': 'proton (H⁺) donor',
                'Brønsted-Lowry base': 'proton (H⁺) acceptor',
                'Lewis acid': 'electron pair acceptor',
                'Lewis base': 'electron pair donor',
                'conjugate base': 'species left after the acid donates a proton',
                'conjugate acid': 'species formed when the base accepts a proton',
                'amphoteric': 'can act as both an acid and a base',
                'amphiprotic': 'can both donate and accept a proton',
                'autoionization': 'self-ionization of water (H₂O ⇌ H⁺ + OH⁻)',
                'dissociation constant': 'equilibrium constant for ionization',
                'buffer capacity': 'how much acid or base a buffer can absorb before pH changes significantly',
                'Henderson-Hasselbalch': 'equation for calculating pH of a buffer solution',
                'equivalence point': 'point where exactly enough titrant has been added to react with all the analyte',
                'pKa': 'measure of acid strength (lower = stronger acid)',
                'inductive effect': 'electron withdrawal through the carbon chain',
                'resonance stabilization': 'spreading of negative charge over multiple atoms by electron delocalization',

                // Stoichiometry terms
                'mole': 'mole (a counting unit; 1 mole = 6.022×10²³ particles)',
                'molar mass': 'molar mass (mass of one mole in g/mol)',
                'stoichiometry': 'stoichiometry (quantitative relationships in chemical reactions)',
                'stoichiometric': 'in the exact ratio required by the balanced equation',
                'limiting reagent': 'limiting reagent (the reactant that runs out first)',
                'excess reagent': 'excess reagent (the reactant with some left over)',
                'theoretical yield': 'theoretical yield (maximum possible amount of product)',
                'actual yield': 'actual yield (amount of product actually obtained)',
                'molarity': 'molarity (concentration in moles per litre)',
                'empirical formula': 'empirical formula (simplest whole-number ratio of atoms)',
                'mole fraction': 'mole fraction (proportion of one gas in a mixture)',
                'partial pressure': 'partial pressure (pressure that one gas in a mixture contributes)',

                // Redox terms
                'oxidation': 'oxidation (loss of electrons; increase in oxidation state)',
                'reduction': 'reduction (gain of electrons; decrease in oxidation state)',
                'oxidizing agent': 'oxidizing agent (the species that accepts electrons and is itself reduced)',
                'reducing agent': 'reducing agent (the species that donates electrons and is itself oxidized)',
                'oxidation state': 'oxidation state (a bookkeeping number showing how many electrons an atom has formally gained or lost)',
                'half-equation': 'half-equation (equation showing just the oxidation or just the reduction step, with electrons shown explicitly)',
                'galvanic cell': 'galvanic cell (electrochemical cell that generates electricity from a spontaneous reaction)',
                'electrolytic cell': 'electrolytic cell (electrochemical cell that uses electricity to drive a non-spontaneous reaction)',
                'anode': 'anode (electrode where oxidation occurs)',
                'cathode': 'cathode (electrode where reduction occurs)',
                'electrode potential': 'electrode potential (measure of a half-cell\'s tendency to be reduced)',
                'salt bridge': 'salt bridge (connects two half-cells to allow ion flow and complete the circuit)',
                'electrolysis': 'electrolysis (using electricity to split a compound or drive a non-spontaneous reaction)',
                'Faraday constant': 'Faraday constant (F = 96,485 C/mol; charge carried by one mole of electrons)',
                'selective discharge': 'selective discharge (preferential discharge of one ion over another at an electrode)',
                'sacrificial anode': 'sacrificial anode (a more reactive metal that corrodes instead of the protected metal)',
                'galvanizing': 'galvanizing (coating iron or steel with zinc to prevent corrosion)',
                'corrosion': 'corrosion (gradual destruction of a metal by electrochemical reaction with its surroundings)',
                'disproportionation': 'disproportionation (a reaction where the same element is simultaneously oxidized and reduced)',
                'permanganate': 'permanganate (KMnO₄; powerful purple oxidizing agent used in redox titrations)',
                'iodometric': 'iodometric (two-step indirect titration via liberation of iodine from iodide)'
            }
        },
        intermediate: {
            replacements: {
                // Organic Chemistry
                'nucleophilic substitution': 'nucleophilic substitution (SN)',
                'electrophilic addition': 'electrophilic addition (EA)',
                'bimolecular': 'bimolecular (involves two species in rate-limiting step)',

                // Acid-Base
                'Brønsted-Lowry': 'Brønsted-Lowry (proton transfer definition)',
                'Henderson-Hasselbalch equation': 'Henderson-Hasselbalch equation (pH = pKa + log([A⁻]/[HA]))',
                'buffer capacity': 'buffer capacity (β = dn/dpH; moles of acid/base absorbed per unit pH change)',
                'half-equivalence point': 'half-equivalence point (where pH = pKa for weak acid titration)',
                'salt hydrolysis': 'salt hydrolysis (reaction of anion or cation with water to change pH)',
                'isoelectric point': 'isoelectric point (pI = pH of zero net charge for amino acids)',

                // Stoichiometry
                'mole ratio': 'mole ratio (from coefficients in balanced equation)',
                'molarity': 'molarity (c = n/V, mol/L)',
                'ideal gas law': 'ideal gas law (PV = nRT)',
                'atom economy': 'atom economy (% of reactant atoms in desired product)',
                'titrant': 'titrant (solution added from the burette)',

                // Redox
                'standard electrode potential': 'standard electrode potential (E°; reduction potential measured vs SHE at 25°C, 1 mol dm⁻³)',
                'standard hydrogen electrode': 'standard hydrogen electrode (SHE; reference half-cell with E° = 0.00 V by definition)',
                'Nernst equation': 'Nernst equation (E = E° − (RT/nF)ln Q; corrects E° for non-standard concentrations)',
                'EMF': 'EMF (electromotive force; maximum cell potential under zero-current conditions)',
                'Faraday\'s First Law': 'Faraday\'s First Law (mass deposited ∝ charge passed; m ∝ Q = It)',
                'Faraday\'s Second Law': 'Faraday\'s Second Law (for same charge, moles deposited ∝ 1/|z| where z = ion charge)',
                'redox couple': 'redox couple (oxidized/reduced pair, e.g., Fe³⁺/Fe²⁺; linked by electron transfer)',
                'cell notation': 'cell notation (shorthand: anode | anode solution || cathode solution | cathode)',
                'cathode protection': 'cathodic protection (preventing corrosion by making the structure the cathode)',
                'iodometric titration': 'iodometric titration (indirect: oxidizing agent → I₂ → titrated with Na₂S₂O₃; starch indicator)',
                'permanganate titration': 'permanganate titration (self-indicating redox titration with KMnO₄; purple → colourless)'
            }
        },
        advanced: {
            replacements: {
                // Organic Chemistry
                'nucleophile': 'nucleophile (Lewis base, electron-pair donor)',
                'electrophile': 'electrophile (Lewis acid, electron-pair acceptor)',
                'SN2': 'SN2 (concerted backside attack, second-order kinetics)',
                'SN1': 'SN1 (stepwise via carbocation, first-order kinetics)',
                'elimination': 'β-elimination (E1 or E2 depending on conditions)',
                'Markovnikov': "Markovnikov's rule (addition via more stable carbocation)",

                // Acid-Base
                'Lewis acid': 'Lewis acid (electron pair acceptor; encompasses all Brønsted-Lowry acids and more)',
                'Henderson-Hasselbalch': 'Henderson-Hasselbalch equation (pH = pKa + log([A⁻]/[HA]); derived from Ka expression)',
                'buffer capacity': 'buffer capacity β = 2.303 × C × Ka[H⁺] / (Ka + [H⁺])²; maximum at pH = pKa',
                'pKa': 'pKa = −log(Ka); thermodynamic measure of Brønsted acid strength in a given solvent',
                'inductive effect': 'inductive effect (through-bond σ-electron withdrawal; decreases ~3× per carbon from substituent)',
                'Hammett equation': 'Hammett equation (log(Ka/Ka0) = σρ; quantitative linear free energy relationship)',
                'isoelectric point': 'isoelectric point pI = (pKa₁ + pKa₂)/2 for simple amino acids; pH of zero electrophoretic mobility',

                // Stoichiometry
                'mole': 'mole (SI base unit of amount of substance; 1 mol = 6.02214076×10²³ entities)',
                'limiting reagent': 'limiting reagent (reactant that determines theoretical yield; completely consumed)',
                'atom economy': 'atom economy = [M(desired product) / ΣM(all products)] × 100% (Trost, 1991)',
                'ideal gas': 'ideal gas (zero molecular volume, no intermolecular forces; obeys PV = nRT exactly)',
                'standard solution': 'standard solution (accurately known concentration, prepared from a primary standard)',
                'back titration': 'back titration (excess standard added; unreacted excess determined by second titration)',

                // Redox
                'standard electrode potential': 'standard electrode potential E° (reduction potential relative to SHE; ΔG° = −nFE°; linked to K by ln K = nFE°/RT)',
                'Nernst equation': 'Nernst equation E = E° − (RT/nF)ln Q (at 298K: E = E° − 0.0257/n × ln Q or E = E° − 0.0592/n × log Q)',
                'E°cell': 'E°cell = E°cathode − E°anode (both as reduction potentials); related to ΔG° = −nFE°cell and K by ln K = nFE°cell/RT',
                'disproportionation': 'disproportionation (comproportionation reverse; single species simultaneously oxidized and reduced; spontaneous when E° of higher couple > E° of lower couple)',
                'overpotential': 'overpotential η (additional voltage required beyond thermodynamic minimum to drive electrode reaction at practical rate; kinetic phenomenon)',
                'Faraday\'s laws': 'Faraday\'s laws (m = ItM/Fz; connects electrical charge Q = It to chemical amount via F = 96485 C mol⁻¹)',
                'Hall-Héroult process': 'Hall-Héroult process (electrolysis of Al₂O₃ dissolved in molten cryolite at 950°C; Al deposited at cathode, O₂ at carbon anode; ~14 kWh/kg Al)',
                'chlor-alkali process': 'chlor-alkali process (electrolysis of concentrated brine using membrane cell; produces Cl₂, H₂, and NaOH; ion-exchange membrane prevents product mixing)',
                'iodometric titration': 'iodometric titration (indirect two-step method: oxidizing agent + KI → I₂; then I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻; starch indicator added near endpoint)',
                'cathodic protection': 'cathodic protection (sacrificial anode: E°(anode) < E°(protected metal); or impressed current making structure the cathode; prevents anodic oxidation)'
            }
        }
    };

    const levelAdaptation = adaptations[level] || adaptations.intermediate;
    let adaptedText = text;

    for (const [term, replacement] of Object.entries(levelAdaptation.replacements)) {
        const regex = new RegExp(`\\b${term}\\b`, 'gi');
        adaptedText = adaptedText.replace(regex, replacement);
    }

    return adaptedText;
}

addChemistryConceptualConnections(content) {
    if (!this.includeConceptualConnections) return content;

    const connections = {
        // Organic Chemistry
        hydrocarbons: "Hydrocarbons are the starting point for all organic chemistry. Adding functional groups to hydrocarbon frameworks gives compounds with specific reactivity. Aromatic hydrocarbons follow different rules from aliphatic ones. Carbon's tetravalency and ability to form stable C−C chains is why organic chemistry is so vast.",
        functional_groups: "Functional groups are the reactive sites on organic molecules. Polarity of functional groups determines intermolecular forces, physical properties, and reactivity. Understanding which functional groups are present is the first step in predicting reactions. Groups can be interconverted through oxidation, reduction, and other reactions. Acid-base properties (pKa) are directly tied to functional group identity.",
        organic_reactions: "Reactions are rationalised through mechanisms — step-by-step electron movements. The same principles (nucleophile attacks electrophile, electrons flow from high to low density) apply throughout organic chemistry. Thermodynamics determines whether a reaction can occur; kinetics determines how fast. Many reactions are in competition (substitution vs elimination).",
        stereochemistry: "Stereochemistry connects structure to biological activity and reaction outcomes. The same connectivity with different 3D arrangement can mean the difference between an active drug and an inactive (or toxic) one. Reactions have stereochemical consequences (SN2 → inversion; E2 → anti elimination).",
        spectroscopy: "Spectroscopy connects the physical interaction of matter with radiation to structural information. Each technique is complementary: IR confirms functional groups, NMR reveals carbon skeleton and H environments, MS gives molecular formula. Together they allow unambiguous structure determination.",
        polymers: "Polymers exemplify the power of simple repeating reactions. Addition polymerization uses alkene chemistry; condensation polymerization uses functional group reactions (esterification, amide formation) on a grand scale. Polymer properties emerge from chain length, branching, crosslinking, and tacticity.",

        // Acid-Base Chemistry
        acid_base_definitions: "The three acid-base definitions are not contradictory but complementary — each is more general than the last. Arrhenius is sufficient for aqueous neutralization. Brønsted-Lowry is essential for biological chemistry (enzyme mechanisms, protein ionization). Lewis is required for coordination chemistry, catalysis, and understanding why BF₃ and AlCl₃ are such effective catalysts. All nucleophile-electrophile chemistry in organic reactions can be understood through the Lewis acid-base lens.",
        ph_calculations: "pH calculations connect the macroscopic world of measurable quantities (concentration, volume) to the microscopic equilibrium between ionized and un-ionized forms of acids and bases. The Ka equilibrium expression is the bridge. pH governs the ionization state of every organic acid and base functional group — it determines whether a drug molecule is neutral (membrane-permeable) or ionized (water-soluble but impermeable). pH calculations also underpin all titration calculations and buffer design.",
        buffer_systems: "Buffer systems represent the practical application of weak acid-base equilibria in real systems. The Henderson-Hasselbalch equation shows that only the ratio [A⁻]/[HA] matters for pH — this is why buffers work regardless of total concentration. Buffers connect directly to biological chemistry: blood pH (7.35−7.45) is maintained by the carbonate buffer and respiratory regulation; intracellular pH is maintained by phosphate and protein buffers. Buffer theory also explains the shape of titration curves — the flat regions are buffer regions.",
        titration: "Titration is the experimental embodiment of stoichiometry and acid-base equilibria working together. The mole relationship between acid and base (from the balanced equation) enables concentration determination. The shape of the titration curve is determined by the Ka of the weak acid: the buffer region reflects Henderson-Hasselbalch behaviour; the equivalence point pH reflects conjugate base hydrolysis; the choice of indicator reflects matching its pKa to the equivalence point pH. Titration connects quantitative analysis to structural chemistry.",
        acid_base_organic: "The pKa values of organic functional groups are the quantitative embodiment of electronic effects: resonance, induction, hybridization, and solvation. pKa differences allow chemists to predict which direction an acid-base reaction will go (toward the weaker acid) and to choose appropriate bases for deprotonation reactions in synthesis. In biochemistry, the pKa values of amino acid residues determine enzyme activity, protein folding, and receptor binding. Drug bioavailability depends critically on pKa relative to physiological pH.",

        // Stoichiometry
        mole_concept: "The mole concept is the bridge between the invisible atomic world and the measurable laboratory world. Every stoichiometric calculation begins and ends with converting to and from moles. Molar mass connects the periodic table directly to the balance. Empirical formulas connect mass measurements to molecular identity.",
        chemical_equations: "Balanced equations encode the conservation of mass and the quantitative ratios of every chemical reaction. The mole ratio extracted from the balanced equation is the key conversion factor in all stoichiometric calculations. Understanding equation types (synthesis, decomposition, redox, neutralization) helps predict products.",
        limiting_reagent: "The limiting reagent concept unifies mole ratios with real experimental conditions where reactants are rarely mixed in perfect stoichiometric proportions. It connects to thermodynamics (yield is maximized at stoichiometric ratio) and industrial chemistry (optimizing reagent ratios saves cost). The excess reagent calculation directly follows from the limiting reagent identification.",
        percentage_yield: "Percentage yield bridges theoretical stoichiometry with experimental reality. It connects to green chemistry through atom economy — a metric that evaluates how much of the reactant mass ends up as the desired product regardless of yield. Both metrics together define the true efficiency of a chemical process.",
        solution_stoichiometry: "Solution stoichiometry connects the mole concept to liquid-phase reactions, which are how most chemistry is performed in the lab and in living systems. Molarity is a universal language for concentration. Titration is a practical embodiment of the equivalence point concept — the moment when moles of acid exactly equal moles of base (scaled by stoichiometric ratio).",
        gas_stoichiometry: "Gas stoichiometry connects the ideal gas law (a macroscopic empirical law) to the atomic mole concept. Avogadro's Law — that equal volumes contain equal numbers of molecules — means volume ratios directly give mole ratios for gases, enormously simplifying calculations. Dalton's Law shows that gases in a mixture act independently.",

        // Redox Chemistry
        redox_fundamentals: "Redox chemistry is the language of energy transfer in chemistry. Every combustion reaction, every battery, every biological energy-generating process is a redox reaction. The concept of oxidation states provides a systematic bookkeeping tool that works even for covalent compounds. Balancing redox equations with half-equations is the foundation for all electrochemical calculations. Redox connects directly to acid-base chemistry (proton and electron transfer often occur together), stoichiometry (Faraday's laws), and organic chemistry (oxidation of alcohols, reduction of carbonyls).",
        electrochemical_cells: "The galvanic cell is the physical embodiment of spontaneous redox thermodynamics. E°cell is directly related to ΔG° (ΔG° = −nFE°cell) and equilibrium constant K (ln K = nFE°/RT) — connecting electrochemistry to thermodynamics. The Nernst equation connects concentration (from solution chemistry) to cell potential. Standard electrode potentials form a hierarchy that predicts spontaneity of any redox reaction, not just in cells. Battery technology directly applies these principles to portable energy storage.",
        electrolysis: "Electrolysis is the reverse of a galvanic cell — electrical energy drives a thermodynamically unfavourable reaction. Faraday's laws connect electrical charge (Q = It, from physics) to chemical amount (n = Q/F, from chemistry) — a perfect bridge between the two disciplines. Industrial electrolysis (aluminium smelting, chlor-alkali) is among the largest energy consumers in manufacturing. The same principles govern electroplating (a controlled deposition process) and electrorefining (purification by selective dissolution and deposition).",
        redox_titrations: "Redox titrations extend volumetric analysis to electron-transfer reactions. They require the same skills as acid-base titrations (mole calculations, indicator choice, titre reading) but use the half-equation stoichiometry instead of neutralization ratios. Permanganate titrations (MnO₄⁻:Fe²⁺ = 1:5) and iodometric titrations (two-step chain) are the most important types. Redox titrations also connect to electrochemistry: the redox couples used in titrations appear in the standard electrode potential table.",
        corrosion_and_protection: "Corrosion is an uncontrolled galvanic cell operating on the metal's surface — it requires an electrolyte, an anode (metal oxidized), and a cathode (oxygen reduced). The electrochemical series directly predicts which metal corrodes in bimetallic contacts. Protection strategies exploit the same electrochemical principles in reverse: sacrificial protection uses a deliberate more-reactive anode; cathodic protection makes the metal the cathode. Passivation (Al, Cr, stainless steel) works by forming an impermeable oxide layer that interrupts the electrochemical cell."
    };

    content.conceptualConnections = connections[this.currentProblem?.type] ||
        "This topic connects to fundamental principles of chemistry";

    return content;
}

addChemistryComparativeContext(content) {
    if (!this.includeComparisons) return content;

    const comparativeData = {
        // Organic Chemistry
        hydrocarbons: {
            bondTypes: "Alkane (C−C, sp³) vs alkene (C=C, sp²) vs alkyne (C≡C, sp): reactivity increases with unsaturation",
            aromaticVsAliphatic: "Aromatic: stable, electrophilic substitution preferred; aliphatic alkene: reactive, electrophilic addition"
        },
        functional_groups: {
            carbonylReactivity: "Acid chloride > anhydride > aldehyde > ketone > ester > amide (decreasing electrophilicity of C=O)",
            acidStrength: "Carboxylic acid (pKa ~4.5) >> phenol (pKa ~10) >> alcohol (pKa ~16) >> terminal alkyne (pKa ~25)"
        },
        organic_reactions: {
            sn1vsSN2: "SN2: concerted, inversion, favored by primary substrate + strong Nu + aprotic solvent. SN1: stepwise, racemization, favored by tertiary + weak Nu + protic solvent",
            additionVsSubstitution: "Alkenes: addition (π bond reactive). Benzene: substitution (aromaticity preserved). Choice depends on substrate."
        },
        stereochemistry: {
            enantiomersVsDiastereomers: "Enantiomers: identical physical properties except optical rotation; same reactions with achiral reagents. Diastereomers: different physical properties; different reaction rates.",
            mesovRacemic: "Both optically inactive, but meso = single compound; racemic = equimolar mixture of two enantiomers"
        },
        spectroscopy: {
            irvsNMR: "IR: quick functional group identification; NMR: detailed structural connectivity; both needed for full determination",
            H1vsC13NMR: "¹H NMR: faster, more sensitive, gives splitting patterns; ¹³C NMR: wider range, one peak per C, no splitting in broadband mode"
        },
        polymers: {
            additionVsCondensation: "Addition: no byproduct, alkene monomers, chain-growth. Condensation: H₂O lost, bifunctional monomers, step-growth",
            thermoplasticVsThermoset: "Thermoplastic: linear/branched chains, meltable, recyclable. Thermoset: crosslinked 3D network, not meltable, not recyclable"
        },

        // Acid-Base Chemistry
        acid_base_definitions: {
            definitionBreadth: "Arrhenius (narrowest: H⁺/OH⁻ in water only) < Brønsted-Lowry (any proton transfer, any solvent) < Lewis (any electron pair transfer; broadest)",
            strongVsWeak: "Strong acid: Ka >> 1, [H⁺] = Ca, complete dissociation. Weak acid: Ka << 1, [H⁺] = √(Ka×Ca) (approx.), partial dissociation",
            acidVsBase: "Brønsted-Lowry acid (H⁺ donor) is always a Lewis acid (H⁺ is the ultimate electron pair acceptor). Every Brønsted-Lowry base is a Lewis base; not every Lewis base is a Brønsted-Lowry base",
            conjugatePairStrength: "Stronger acid → weaker conjugate base; Ka × Kb(conjugate) = Kw = 10⁻¹⁴. HCl (strong acid) → Cl⁻ (negligibly weak base). CH₃COOH (weak acid) → CH₃COO⁻ (weak base)"
        },
        ph_calculations: {
            strongVsWeakAcid: "Strong acid 0.1 mol L⁻¹: [H⁺] = 0.1, pH = 1.00. Weak acid 0.1 mol L⁻¹ (Ka=1.8×10⁻⁵): [H⁺] = 1.34×10⁻³, pH = 2.87. Same concentration, very different pH",
            calculationMethod: "Strong acid/base: direct from concentration. Weak acid/base: ICE table + Ka/Kb expression (approximation or quadratic). Salt: determine if cation/anion hydrolyzes, then treat as weak acid/base",
            approximationValidity: "Ca/Ka > 100: use √(Ka×Ca). Ca/Ka = 10−100: borderline, check 5% rule. Ca/Ka < 10: must use quadratic",
            phVsPoh: "pH + pOH = 14.00 at 25°C only; at 37°C pH + pOH = 13.62 (Kw = 2.4×10⁻¹⁴). Neutral pH = 7.00 only at 25°C"
        },
        buffer_systems: {
            bufferVsWater: "50 mL acetate buffer (0.1 mol L⁻¹, pH 4.76) + 0.5 mmol NaOH: ΔpH = +0.09. 50 mL water + 0.5 mmol NaOH: ΔpH = +2.00. Buffer is 22× more resistant",
            bufferChoiceByPH: "Need pH 4.5−5.5: acetate buffer (pKa 4.76). pH 6.5−7.5: phosphate buffer (pKa 7.20). pH 9−10: ammonium buffer (pKa 9.25). Always choose pKa within 1 unit of target pH",
            capacityVsConcentration: "pH 4.76 buffer, 0.1 mol L⁻¹: β_max = 0.0576 mol L⁻¹ per pH unit. pH 4.76 buffer, 0.2 mol L⁻¹: β_max = 0.115 mol L⁻¹ per pH unit. Capacity doubles with concentration",
            carbonateVsPhosphate: "Carbonate (pKa 6.35/10.33): blood buffer; CO₂ regulation by lungs. Phosphate (pKa 7.20): intracellular buffer; renal regulation. Both operate near physiological pH but different compartments"
        },
        titration: {
            equivalencePointPH: "Strong/strong: pH 7.00. Weak acid/strong base: pH > 7 (conjugate base hydrolysis, typically 8.5−9). Strong acid/weak base: pH < 7 (conjugate acid hydrolysis, typically 5−5.5). Weak/weak: no sharp equivalence point",
            indicatorChoice: "Strong/strong: any indicator pH 3−11 works (steep curve spans wide range). Weak acid/strong base: phenolphthalein (8.2−10.0) required. Strong acid/weak base: methyl orange (3.1−4.4) or methyl red (4.2−6.3) required",
            endpointVsEquivalence: "Ideal: endpoint = equivalence point. Reality: always a small difference (indicator error). Minimize by: correct indicator choice, sharp color change technique, or use pH meter",
            primaryVsSecondary: "Primary standard (KHP, Na₂CO₃): pure, stable, high Mr; weighed out directly. Secondary standard (NaOH, HCl): made approximately then standardized against primary standard"
        },
        acid_base_organic: {
            acidStrengthOrder: "Trichloroacetic (pKa 0.66) < Dichloroacetic (1.48) < Chloroacetic (2.86) < Formic (3.75) < Acetic (4.76) < Propionic (4.87) — each Cl adds ~1.4 pKa units of acidity",
            phenolVsAlcohol: "Phenol (pKa 9.99): 10⁶ times stronger acid than cyclohexanol (pKa ~16). Reason: phenoxide has 4 resonance structures delocalizing O⁻ into ring; alkoxide has no resonance",
            amineBasicityOrder: "Alkylamine (pKb ~3−4) > NH₃ (pKb 4.74) > Arylamine (pKb ~9−10) > Amide (pKb ~15). Electron donation increases basicity; resonance delocalization drastically decreases it",
            hybridizationEffect: "C−H acidity: sp (HC≡CR, pKa 25) >> sp² (H₂C=CHR, pKa 44) >> sp³ (RCH₃, pKa ~50). More s-character = more electronegative carbon = more acidic. Terminal alkynes are uniquely useful as synthetic building blocks"
        },

        // Stoichiometry
        mole_concept: {
            molesVsMass: "Mass (g) measures weight; moles measure amount of substance (number of particles). Same mass of different substances ≠ same number of particles",
            empiricalVsMolecular: "Empirical formula: simplest ratio (CH₂O). Molecular formula: actual formula (C₆H₁₂O₆). Molecular = n × empirical; n found from molar mass",
            arVsMolarMass: "Relative atomic mass (Ar): dimensionless ratio on the ¹²C scale. Molar mass (g/mol): same numerical value but with units; mass of 1 mol"
        },
        chemical_equations: {
            massVsMoleRatio: "Mass ratios are NOT the same as mole ratios. Always convert to moles before applying stoichiometric ratios from balanced equations",
            stoichiometricVsNon: "Stoichiometric mixture: reactants in exact ratio; neither is in excess. Non-stoichiometric: one is limiting, one is excess",
            completeVsIncomplete: "Complete combustion (excess O₂): → CO₂ + H₂O. Incomplete combustion (limited O₂): → CO + H₂O (or soot + H₂O)"
        },
        limiting_reagent: {
            limitingVsExcess: "Limiting reagent: completely consumed; determines theoretical yield. Excess reagent: partially consumed; amount remaining calculable",
            methodAVsMethodB: "Moles of product method: convert each reactant to moles of product, compare. Mole ratio method: compare actual ratio with required ratio. Both give same answer",
            theoreticalVsActual: "Theoretical yield: calculated from limiting reagent assuming 100% conversion. Actual yield: experimentally obtained. Ratio gives % yield"
        },
        percentage_yield: {
            yieldVsAtomEconomy: "% yield: measures efficiency of the specific experiment (0−100%). Atom economy: measures efficiency of the balanced reaction itself (fixed for a given equation). High atom economy + high yield = green chemistry ideal",
            singleStepVsMultiStep: "Single step: overall yield = % yield of that step. Multi-step: overall yield = product of all individual yields (e.g., 85%×85%×85% = 61.4%)",
            absoluteVsRelativeYield: "Absolute yield (grams obtained) depends on scale; percentage yield is scale-independent and comparable between experiments"
        },
        solution_stoichiometry: {
            molarityVsMolality: "Molarity (mol/L solution): changes with temperature (volume expands). Molality (mol/kg solvent): temperature-independent; used for colligative properties",
            endpointVsEquivalence: "Equivalence point: theoretical point where stoichiometric quantities have reacted. Endpoint: observed color change of indicator. For strong acid/base these coincide closely",
            primaryVsSecondaryStandard: "Primary standard: pure, stable, high molar mass, can be weighed and dissolved to make solution of exactly known concentration. Secondary standard: standardized against a primary standard"
        },
        gas_stoichiometry: {
            idealVsReal: "Ideal gas: no volume, no intermolecular forces; PV=nRT exactly. Real gas: deviates at high P and low T; van der Waals equation more accurate",
            stpVsSatp: "STP (0°C, 100 kPa): molar volume 22.4 L/mol. SATP (25°C, 100 kPa): molar volume 24.8 L/mol. Always state which standard conditions are being used",
            rValueComparison: "R = 8.314 J/mol/K = 8.314 Pa·m³/mol/K = 8.314 L·kPa/mol/K = 0.08206 L·atm/mol/K. Choose R based on pressure and volume units"
        },

        // Redox Chemistry
        redox_fundamentals: {
            oilRigSummary: "OIL: Oxidation Is Loss (of electrons; oxidation state increases). RIG: Reduction Is Gain (of electrons; oxidation state decreases). Both occur simultaneously in every redox reaction",
            oxidizingVsReducingAgent: "Oxidizing agent: accepts electrons; is itself reduced; causes oxidation of other species. Reducing agent: donates electrons; is itself oxidized; causes reduction of other species — the naming is from the perspective of what they do TO the other species",
            acidicVsBasicBalancing: "Acidic solution: add H₂O to balance O, H⁺ to balance H, e⁻ to balance charge. Basic solution: same first steps, then add OH⁻ to both sides to neutralize H⁺. Never add both H⁺ and OH⁻ to the same side",
            oxidationStateVsIonicCharge: "Oxidation state is a formal bookkeeping number, not a real charge. Na⁺ has real charge +1 and oxidation state +1. Mn in MnO₄⁻ has oxidation state +7 but is not an Mn⁷⁺ ion; it is covalently bonded. Do not confuse these."
        },
        electrochemical_cells: {
            galvanicVsElectrolytic: "Galvanic cell: spontaneous redox → electrical energy; anode is NEGATIVE (electrons flow out); cathode is POSITIVE. Electrolytic cell: electrical energy → non-spontaneous redox; anode is POSITIVE (connected to +ve terminal); cathode is NEGATIVE. Anode = oxidation in BOTH types; cathode = reduction in BOTH types",
            E_cellVsGibbs: "E°cell = E°cathode − E°anode (both as reduction potentials). Positive E°cell ↔ Negative ΔG° ↔ K > 1 ↔ Spontaneous forward reaction. All three are different expressions of the same thermodynamic truth",
            standardVsNonStandard: "Standard conditions (25°C, 1 mol dm⁻³, 1 atm): use E°. Non-standard concentrations: use Nernst equation E = E° − (0.0592/n) × log Q at 298K. Increasing [oxidizing agent] increases E; increasing [reducing agent] decreases E",
            primaryVsSecondaryVsFuel: "Primary battery: irreversible; Zn-MnO₂ alkaline (1.5V). Secondary battery: reversible rechargeable; Li-ion (3.6V), Pb-acid (2V/cell). Fuel cell: continuous; H₂/O₂ (1.23V theoretical). Voltage × charge × efficiency = usable energy"
        },
        electrolysis: {
            activeVsInertElectrode: "Inert electrode (Pt, graphite): electrode does not react; anion or water oxidized at anode. Active electrode (Cu anode in CuSO₄): electrode metal dissolves (Cu → Cu²⁺ + 2e⁻) rather than water or anion being oxidized; [Cu²⁺] stays constant",
            moltenVsAqueous: "Molten ionic compound: only cation and anion present; straightforward discharge. Aqueous solution: H₂O competes; selective discharge at cathode depends on E°; at anode depends on [anion] and E°",
            currentVsCharge: "Current (A) alone does not determine mass deposited; charge Q = It (A × s = C) determines mass. Double the current but halve the time: same charge, same mass deposited",
            industrialComparison: "Hall-Héroult (Al): 14 kWh/kg at 950°C; Al₂O₃ in molten cryolite. Chlor-alkali (Cl₂/NaOH): ambient T; membrane cell; ~2.5 kWh/kg Cl₂. Copper refining: 99.99% purity; ambient T; CuSO₄ electrolyte; 0.3 kWh/kg Cu"
        },
        redox_titrations: {
            permanganateVsDichromate: "KMnO₄: self-indicating (purple/colourless); NOT a primary standard; requires standardization; in H₂SO₄ only (not HCl); Mn⁷⁺→Mn²⁺ (5e⁻). K₂Cr₂O₇: IS a primary standard; external indicator needed; Cr⁶⁺→Cr³⁺ (3e⁻ per Cr, 6e⁻ per formula unit); toxic/carcinogenic",
            directVsIndirectTitration: "Direct (permanganate, dichromate): titrant reacts directly with analyte. Indirect iodometric: analyte first reacts with KI to liberate I₂; then I₂ titrated with Na₂S₂O₃. Two mole ratio steps required for indirect",
            starchIndicatorTiming: "Add starch when solution is pale straw/yellow (near endpoint), NOT at start. At high [I₂]: starch-I₂ complex is irreversible and can mask the endpoint. At low [I₂] near endpoint: complex is reversible and endpoint is sharp",
            acidChoiceForPermanganate: "H₂SO₄ (dilute): correct acid for permanganate titrations. HCl: NEVER use with KMnO₄ — Cl⁻ is oxidized to Cl₂ by MnO₄⁻ (false high result). HNO₃: avoid (oxidizing acid; can interfere)"
        },
        corrosion_and_protection: {
            galvanizingVsTinplating: "Galvanizing (Zn coating): E°(Zn) < E°(Fe); Zn is anodic to Fe; acts as sacrificial anode when coating breached; protects even when scratched. Tin plating: E°(Sn) > E°(Fe); Sn is cathodic to Fe; when coating breached, Fe becomes anode and corrodes FASTER due to galvanic coupling (large cathodic area). Galvanizing is far superior for corrosion protection when mechanical damage is possible",
            sacrificialVsImpressedCurrent: "Sacrificial anode: simple, passive, no power needed; must be replaced periodically; limited range. Impressed current: active, adjustable, can protect very large structures; requires power supply and monitoring; risk of hydrogen embrittlement if over-protected",
            rustVsAluminiumOxide: "Fe₂O₃·nH₂O (rust): porous, non-adherent, falls off; continuously exposes fresh Fe to corrosion (no passivation). Al₂O₃: dense, adherent, impermeable; self-healing in air; prevents further corrosion. Key difference: rust does not protect; aluminium oxide does",
            wetVsDryCorrosion: "Electrochemical (wet) corrosion: requires electrolyte (moisture); forms galvanic cells; dominant at ambient temperatures. Dry oxidation: direct chemical reaction of metal with O₂ at high temperatures; relevant for furnace components, turbine blades"
        }
    };

    if (comparativeData[this.currentProblem?.type]) {
        content.comparativeContext = comparativeData[this.currentProblem.type];
    }

    return content;
}

validateChemistryContent(content) {
    const validationResults = {
        isValid: true,
        warnings: [],
        suggestions: []
    };

    if (!content.topic) {
        validationResults.warnings.push("Missing topic title");
        validationResults.isValid = false;
    }

    if (!content.summary) {
        validationResults.suggestions.push("Consider adding a summary");
    }

    const hasOrganicContent =
        content.classification ||
        content.mainGroups ||
        content.substitutionReactions ||
        content.additionReactions ||
        content.techniques ||
        content.fundamentals;

    const hasAcidBaseContent =
        content.definitions ||
        content.calculationMethods ||
        content.hendersonHasselbalch ||
        content.titrationCurves ||
        content.structuralEffectsOnAcidity ||
        content.pKaValues ||
        content.composition ||
        content.conjugatePairs;

    const hasStoichiometryContent =
        content.keyFormulas ||
        content.workedExamples ||
        content.stoichiometryPathway ||
        content.identificationMethod ||
        content.titrationTechnique ||
        content.idealGasLawApplications ||
        content.molarMassCalculations;

    const hasRedoxContent =
        content.oxidationStateRules ||
        content.balancingMethods ||
        content.standardElectrodePotentials ||
        content.faradaysLaws ||
        content.electrolysisOfAqueousSolutions ||
        content.permanganateTitrations ||
        content.mechanismOfIronRusting ||
        content.danielCell ||
        content.protectionMethods ||
        content.keyFormulae;

    if (!hasOrganicContent && !hasAcidBaseContent && !hasStoichiometryContent && !hasRedoxContent) {
        validationResults.warnings.push("Limited substantive content detected");
    }

    if (!content.examples && !content.workedExamples && !content.practiceProblems) {
        validationResults.suggestions.push("Consider adding concrete examples or worked problems");
    }

    if (!content.applications && !content.contextualScenarios) {
        validationResults.suggestions.push("Consider adding real-world applications or contextual scenarios");
    }

    if (!content.keyDefinitions && !content.keyFormulas && !content.keyFormulae) {
        validationResults.suggestions.push("Consider adding key definitions or key formulas");
    }

    if (!content.commonMisconceptions && !content.misconceptions) {
        validationResults.suggestions.push("Consider adding common misconceptions to aid learning");
    }

    return validationResults;
}

calculateChemistryContentCompleteness() {
    if (!this.currentContent) return 0;

    let score = 0;
    const maxScore = 12;

    if (this.currentContent.topic) score += 1;
    if (this.currentContent.summary) score += 1;

    if (this.currentContent.examples || this.currentContent.workedExamples || this.currentContent.practiceProblems) score += 1;

    if (this.currentContent.applications || this.currentContent.contextualScenarios) score += 1;

    const hasOrganicMainContent =
        this.currentContent.classification ||
        this.currentContent.mainGroups ||
        this.currentContent.substitutionReactions ||
        this.currentContent.techniques ||
        this.currentContent.additionPolymerization;

    const hasAcidBaseMainContent =
        this.currentContent.definitions ||
        this.currentContent.calculationMethods ||
        this.currentContent.hendersonHasselbalch ||
        this.currentContent.titrationCurves ||
        this.currentContent.structuralEffectsOnAcidity ||
        this.currentContent.pKaValues ||
        this.currentContent.composition ||
        this.currentContent.bufferCapacity;

    const hasStoichiometryMainContent =
        this.currentContent.keyFormulas ||
        this.currentContent.stoichiometryPathway ||
        this.currentContent.identificationMethod ||
        this.currentContent.titrationTechnique ||
        this.currentContent.molarMassCalculations ||
        this.currentContent.idealGasLawApplications ||
        this.currentContent.atomEconomy;

    const hasRedoxMainContent =
        this.currentContent.oxidationStateRules ||
        this.currentContent.balancingMethods ||
        this.currentContent.standardElectrodePotentials ||
        this.currentContent.faradaysLaws ||
        this.currentContent.electrolysisOfAqueousSolutions ||
        this.currentContent.permanganateTitrations ||
        this.currentContent.mechanismOfIronRusting ||
        this.currentContent.danielCell ||
        this.currentContent.protectionMethods ||
        this.currentContent.keyFormulae;

    if (hasOrganicMainContent || hasAcidBaseMainContent || hasStoichiometryMainContent || hasRedoxMainContent) score += 2;

    if (this.currentContent.assessmentQuestions) score += 1;
    if (this.currentContent.contextualScenarios) score += 1;
    if (this.currentContent.commonMisconceptions || this.currentContent.misconceptions) score += 1;
    if (this.currentContent.relatedExperiments?.length > 0) score += 1;
    if (this.currentContent.keyDefinitions || this.currentContent.keyFormulas || this.currentContent.keyFormulae) score += 1;
    if (this.currentContent.metacognitivePrompts) score += 1;

    return Math.round((score / maxScore) * 100);
}

getChemistryContentQualityMetrics() {
    return {
        completeness: this.calculateChemistryContentCompleteness(),
        hasExamples: !!(
            this.currentContent?.examples ||
            this.currentContent?.workedExamples ||
            this.currentContent?.practiceProblems
        ),
        hasApplications: !!(
            this.currentContent?.applications ||
            this.currentContent?.contextualScenarios
        ),
        hasContextualScenarios: !!this.currentContent?.contextualScenarios,
        hasMisconceptions: !!(
            this.currentContent?.misconceptions ||
            this.currentContent?.commonMisconceptions
        ),
        hasAssessmentQuestions: !!this.currentContent?.assessmentQuestions,
        hasKeyDefinitions: !!(
            this.currentContent?.keyDefinitions ||
            this.currentContent?.keyFormulas ||
            this.currentContent?.keyFormulae
        ),
        hasWorkedExamples: !!this.currentContent?.workedExamples,
        hasPracticeProblems: !!this.currentContent?.practiceProblems,
        hasMetacognitiveSupport: !!this.currentContent?.metacognitivePrompts,
        hasRelatedExperiments: !!(this.currentContent?.relatedExperiments?.length > 0),
        detailLevel: this.explanationLevel,
        includesVisualizations: this.includeVisualizations,
        includesExperiments: this.includeExperiments,
        adaptiveDifficulty: this.adaptiveDifficulty,
        metacognitiveSupport: this.metacognitiveSupport,
        contentCategory: this.currentContent?.category || 'unknown',
        topicType: this.currentProblem?.type || 'unknown'
    };
}

generateChemistryContentSummary() {
    if (!this.currentContent) return null;

    const summary = {
        topic: this.currentContent.topic,
        category: this.currentContent.category,
        summary: this.currentContent.summary,
        keyPoints: [],
        coverage: {},
        difficulty: this.currentProblem?.difficulty
    };

    if (this.currentContent.classification || this.currentContent.mainGroups) {
        summary.keyPoints.push("Classification and types covered");
        const groups = this.currentContent.mainGroups || this.currentContent.classification;
        summary.coverage.groups = groups ? Object.keys(groups).length : 0;
    }

    if (this.currentContent.definitions || this.currentContent.calculationMethods) {
        summary.keyPoints.push("Acid-base definitions and calculation methods covered");
        summary.coverage.acidBaseDefinitions = !!this.currentContent.definitions;
        summary.coverage.calculationMethods = !!(this.currentContent.calculationMethods);
    }

    if (this.currentContent.hendersonHasselbalch || this.currentContent.bufferCapacity) {
        summary.keyPoints.push("Buffer theory and Henderson-Hasselbalch equation included");
        summary.coverage.bufferTheory = true;
    }

    if (this.currentContent.titrationCurves || this.currentContent.indicators) {
        summary.keyPoints.push("Titration curves and indicator selection covered");
        summary.coverage.titrationCurves = !!(this.currentContent.titrationCurves);
        summary.coverage.indicators = !!(this.currentContent.indicators);
    }

    if (this.currentContent.pKaValues || this.currentContent.structuralEffectsOnAcidity) {
        summary.keyPoints.push("pKa values and structural effects on acidity/basicity included");
        summary.coverage.pKaData = !!(this.currentContent.pKaValues);
        summary.coverage.structuralEffects = !!(this.currentContent.structuralEffectsOnAcidity);
    }

    // Redox-specific summary points
    if (this.currentContent.oxidationStateRules || this.currentContent.balancingMethods) {
        summary.keyPoints.push("Oxidation state rules and half-equation balancing methods covered");
        summary.coverage.oxidationStates = !!(this.currentContent.oxidationStateRules);
        summary.coverage.balancingMethods = !!(this.currentContent.balancingMethods);
    }

    if (this.currentContent.standardElectrodePotentials || this.currentContent.danielCell) {
        summary.keyPoints.push("Standard electrode potentials and galvanic cell theory included");
        summary.coverage.electrodePotentials = !!(this.currentContent.standardElectrodePotentials);
        summary.coverage.danielCell = !!(this.currentContent.danielCell);
    }

    if (this.currentContent.faradaysLaws || this.currentContent.electrolysisOfAqueousSolutions) {
        summary.keyPoints.push("Faraday's laws and electrolysis products covered");
        summary.coverage.faradaysLaws = !!(this.currentContent.faradaysLaws);
        summary.coverage.electrolysisProducts = !!(this.currentContent.electrolysisOfAqueousSolutions);
    }

    if (this.currentContent.permanganateTitrations || this.currentContent.iodometricTitrations) {
        summary.keyPoints.push("Permanganate and iodometric redox titration methods included");
        summary.coverage.permanganateTitrations = !!(this.currentContent.permanganateTitrations);
        summary.coverage.iodometricTitrations = !!(this.currentContent.iodometricTitrations);
    }

    if (this.currentContent.mechanismOfIronRusting || this.currentContent.protectionMethods) {
        summary.keyPoints.push("Corrosion mechanism and protection strategies covered");
        summary.coverage.corrosionMechanism = !!(this.currentContent.mechanismOfIronRusting);
        summary.coverage.protectionMethods = !!(this.currentContent.protectionMethods);
    }

    if (this.currentContent.keyFormulas || this.currentContent.keyFormulae) {
        summary.keyPoints.push("Key formulas and equations provided");
        const formulas = this.currentContent.keyFormulas || this.currentContent.keyFormulae;
        summary.coverage.formulas = Object.keys(formulas).length;
    }

    if (this.currentContent.workedExamples) {
        summary.keyPoints.push("Worked examples with step-by-step solutions included");
        summary.coverage.workedExamples = Array.isArray(this.currentContent.workedExamples)
            ? this.currentContent.workedExamples.length : 'multiple';
    }

    if (this.currentContent.examples) {
        summary.keyPoints.push("Compound/reaction examples included");
        summary.coverage.examples = Array.isArray(this.currentContent.examples)
            ? this.currentContent.examples.length : 'multiple';
    }

    if (this.currentContent.practiceProblems) {
        summary.keyPoints.push("Practice problems at varied difficulty levels included");
        summary.coverage.practiceProblems = Array.isArray(this.currentContent.practiceProblems)
            ? this.currentContent.practiceProblems.length : 'multiple';
    }

    if (this.currentContent.applications || this.currentContent.contextualScenarios) {
        summary.keyPoints.push("Real-world applications and contextual scenarios discussed");
        summary.coverage.applications = true;
    }

    if (this.currentContent.assessmentQuestions) {
        summary.keyPoints.push("Bloom's taxonomy assessment questions at six levels provided");
        summary.coverage.assessmentLevels = Object.keys(this.currentContent.assessmentQuestions).length;
    }

    if (this.currentContent.commonMisconceptions || this.currentContent.misconceptions) {
        summary.keyPoints.push("Common misconceptions identified with clarification strategies");
        summary.coverage.misconceptions = true;
    }

    if (this.currentContent.relatedExperiments) {
        summary.keyPoints.push("Laboratory experiments linked");
        summary.coverage.experiments = this.currentContent.relatedExperiments.length;
    }

    if (this.currentContent.keyDefinitions) {
        summary.keyPoints.push("Key definitions provided");
        summary.coverage.definitions = Object.keys(this.currentContent.keyDefinitions).length;
    }

    return summary;
}

assessChemistryContentDifficulty() {
    if (!this.currentContent) return 'unknown';

    let difficultyScore = 0;

    const organicBasicTopics = ['hydrocarbons'];
    const organicIntermediateTopics = ['functional_groups', 'polymers'];
    const organicAdvancedTopics = ['organic_reactions', 'stereochemistry', 'spectroscopy'];

    const acidBaseBeginnerTopics = ['acid_base_definitions'];
    const acidBaseIntermediateTopics = ['ph_calculations', 'buffer_systems', 'titration'];
    const acidBaseAdvancedTopics = ['acid_base_organic'];

    const stoichiometryBasicTopics = ['mole_concept', 'chemical_equations'];
    const stoichiometryIntermediateTopics = ['limiting_reagent', 'percentage_yield', 'solution_stoichiometry'];
    const stoichiometryAdvancedTopics = ['gas_stoichiometry'];

    const redoxBeginnerTopics = ['redox_fundamentals'];
    const redoxIntermediateTopics = ['electrochemical_cells', 'electrolysis', 'redox_titrations', 'corrosion_and_protection'];
    const redoxAdvancedTopics = [];

    const topicType = this.currentProblem?.type;

    if (
        organicBasicTopics.includes(topicType) ||
        stoichiometryBasicTopics.includes(topicType) ||
        acidBaseBeginnerTopics.includes(topicType) ||
        redoxBeginnerTopics.includes(topicType)
    ) {
        difficultyScore += 1;
    } else if (
        organicIntermediateTopics.includes(topicType) ||
        stoichiometryIntermediateTopics.includes(topicType) ||
        acidBaseIntermediateTopics.includes(topicType) ||
        redoxIntermediateTopics.includes(topicType)
    ) {
        difficultyScore += 2;
    } else if (
        organicAdvancedTopics.includes(topicType) ||
        stoichiometryAdvancedTopics.includes(topicType) ||
        acidBaseAdvancedTopics.includes(topicType) ||
        redoxAdvancedTopics.includes(topicType)
    ) {
        difficultyScore += 3;
    }

    if (this.explanationLevel === 'advanced') difficultyScore += 1;
    if (this.explanationLevel === 'basic') difficultyScore -= 1;

    if (difficultyScore <= 1) return 'beginner';
    if (difficultyScore <= 3) return 'intermediate';
    return 'advanced';
}

generateChemistryLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        // Organic Chemistry
        hydrocarbons: [
            "Name and draw structural formulae for alkanes, alkenes, alkynes, and simple arenes using IUPAC nomenclature",
            "Identify and explain structural and geometric isomerism in hydrocarbons",
            "Predict products of combustion, halogenation, and addition reactions",
            "Explain the concept of aromaticity and why benzene undergoes substitution rather than addition",
            "Calculate degree of unsaturation from molecular formula"
        ],
        functional_groups: [
            "Identify and name the major organic functional groups from structural formulae",
            "Predict physical properties (boiling point, solubility) from functional group analysis",
            "Describe characteristic reactions of alcohols, aldehydes, ketones, carboxylic acids, and amines",
            "Explain trends in acidity and basicity in terms of structure and resonance",
            "Distinguish between isomeric functional group compounds using chemical tests and spectroscopy"
        ],
        organic_reactions: [
            "Explain the difference between SN1 and SN2 mechanisms in terms of kinetics and stereochemistry",
            "Predict the major product of nucleophilic substitution reactions given substrate and conditions",
            "Apply Markovnikov's rule and anti-Markovnikov conditions to electrophilic addition",
            "Draw complete electron-pushing mechanisms using curved arrow notation",
            "Distinguish between elimination and substitution products based on substrate and reagent"
        ],
        stereochemistry: [
            "Identify stereocentres and determine R or S configuration using CIP rules",
            "Distinguish between enantiomers, diastereomers, and meso compounds",
            "Assign E or Z configuration to geometric isomers of alkenes",
            "Explain the concept of optical activity and predict activity of pure enantiomers vs racemic mixtures",
            "Rationalise the pharmacological importance of stereochemistry with specific examples"
        ],
        spectroscopy: [
            "Identify functional groups from key IR absorption wavenumbers",
            "Interpret ¹H NMR spectra in terms of chemical shift, integration, and splitting patterns",
            "Determine molecular mass and identify molecular formula from mass spectra",
            "Apply the degree of unsaturation formula to narrow down possible structures",
            "Combine spectral data from multiple techniques to propose a complete structure"
        ],
        polymers: [
            "Distinguish between addition and condensation polymerization with examples",
            "Draw the repeat unit of common addition polymers from their monomers",
            "Identify the functional group linkage in polyesters and polyamides",
            "Compare properties and applications of thermoplastic vs thermosetting polymers",
            "Discuss environmental implications of synthetic polymers and sustainable alternatives"
        ],

        // Acid-Base Chemistry
        acid_base_definitions: [
            "State and apply the Arrhenius, Brønsted-Lowry, and Lewis definitions of acids and bases",
            "Identify conjugate acid-base pairs in given acid-base reactions",
            "Explain why a Lewis acid or base may not necessarily be a Brønsted-Lowry acid or base",
            "Classify given compounds as strong or weak acids/bases and justify with reference to Ka/Kb",
            "Explain the autoionization of water and derive the relationship pH + pOH = pKw"
        ],
        ph_calculations: [
            "Calculate pH of strong acids and bases directly from concentration",
            "Set up and solve ICE table expressions for weak acid and base pH calculations",
            "Apply the 5% approximation rule and validate its use for a given Ka/Ca ratio",
            "Solve the quadratic equation for [H⁺] when the approximation is not valid",
            "Calculate pH of salt solutions by identifying and quantifying hydrolysis reactions"
        ],
        buffer_systems: [
            "Explain the composition and mechanism of action of a buffer solution",
            "Apply the Henderson-Hasselbalch equation to calculate buffer pH and required component ratios",
            "Calculate the pH change when a given amount of strong acid or base is added to a buffer",
            "Explain buffer capacity and identify conditions that maximize it",
            "Describe the carbonate and phosphate buffer systems in biological fluids"
        ],
        titration: [
            "Describe the procedure for an accurate acid-base titration and identify sources of error",
            "Sketch and interpret titration curves for strong/strong, weak acid/strong base, and strong acid/weak base combinations",
            "Select an appropriate indicator for a given titration and justify the choice",
            "Calculate the concentration of an analyte from titration data",
            "Explain why the equivalence point pH differs for different acid-base combinations"
        ],
        acid_base_organic: [
            "Rank organic compounds in order of acid or base strength and justify using resonance, inductive, and hybridization effects",
            "Explain quantitatively why halogenation of acetic acid increases its acidity",
            "Predict the direction and calculate the equilibrium constant for organic acid-base reactions using pKa values",
            "Explain the ionization states of amino acids as a function of pH and calculate the isoelectric point",
            "Apply pKa reasoning to predict the basicity of amines, arylamines, and amides"
        ],

        // Stoichiometry
        mole_concept: [
            "Define the mole and state the value of Avogadro's constant with correct units",
            "Calculate molar mass of any compound from atomic masses on the periodic table",
            "Convert between mass (g), amount (mol), and number of particles using n = m/M and N = n × Nₐ",
            "Determine the empirical formula of a compound from percentage composition by mass",
            "Find the molecular formula given empirical formula and molar mass"
        ],
        chemical_equations: [
            "Balance chemical equations by inspection, ensuring conservation of atoms",
            "Extract mole ratios from balanced equations and use them in stoichiometric calculations",
            "Perform mass-to-mass calculations using the four-step stoichiometry pathway",
            "Classify reactions by type (synthesis, decomposition, combustion, neutralization, redox)",
            "Verify conservation of mass in balanced equations numerically"
        ],
        limiting_reagent: [
            "Define limiting reagent and excess reagent and explain their significance",
            "Identify the limiting reagent by converting all reactant masses to moles of product",
            "Calculate the theoretical yield of product from the limiting reagent",
            "Calculate the mass of excess reagent remaining after reaction is complete",
            "Interpret a limiting reagent graph (product mass vs reactant mass) and identify the stoichiometric point"
        ],
        percentage_yield: [
            "Calculate percentage yield from actual and theoretical yield data",
            "Identify and explain reasons why actual yield is less than theoretical yield",
            "Calculate atom economy for a reaction given the balanced equation and molar masses",
            "Compare percentage yield and atom economy as complementary measures of reaction efficiency",
            "Apply green chemistry principles to evaluate and compare synthetic routes"
        ],
        solution_stoichiometry: [
            "Calculate molarity from mass of solute and volume of solution, and vice versa",
            "Apply the dilution equation c₁V₁ = c₂V₂ to calculate concentrations after dilution",
            "Describe the procedure for an accurate acid-base titration including technique for concordant titres",
            "Calculate the concentration of an analyte from titration data using the mole ratio from the balanced equation",
            "Select an appropriate indicator for a given acid-base titration and justify the choice"
        ],
        gas_stoichiometry: [
            "Apply the ideal gas law PV = nRT to calculate any one of P, V, n, or T given the others",
            "Use the molar volume at STP (22.4 L/mol) and SATP (24.8 L/mol) in stoichiometric calculations",
            "Apply Avogadro's Law to use volume ratios as mole ratios for gaseous reactions at constant T and P",
            "Apply Dalton's Law of partial pressures, including correction for water vapor when collecting gas over water",
            "Calculate the molar mass of an unknown gas from P, V, T, and mass data"
        ],

        // Redox Chemistry
        redox_fundamentals: [
            "Define oxidation and reduction in terms of electron transfer (OIL RIG) and changes in oxidation state",
            "Assign oxidation states to all atoms in a compound or ion using the standard rules",
            "Identify the oxidizing agent and reducing agent in any redox equation",
            "Write and balance half-equations for oxidation and reduction processes in acidic and basic solution",
            "Combine balanced half-equations to produce a complete balanced ionic redox equation"
        ],
        electrochemical_cells: [
            "Describe the components and operation of a galvanic (Daniel) cell, including the role of the salt bridge",
            "Calculate the standard cell potential E°cell from standard electrode potentials using E°cell = E°cathode − E°anode",
            "Predict the spontaneity of a redox reaction from E°cell and relate to ΔG° using ΔG° = −nFE°cell",
            "Apply the Nernst equation to calculate cell potential at non-standard concentrations",
            "Write cell notation and interpret given cell notation to identify electrode reactions and calculate E°cell"
        ],
        electrolysis: [
            "State Faraday's First and Second Laws of Electrolysis and apply them quantitatively",
            "Use the formula m = ItM/(Fz) to calculate mass of product deposited or dissolved during electrolysis",
            "Predict the products of electrolysis of molten salts and aqueous solutions, justifying by selective discharge",
            "Describe the industrial processes for aluminium smelting (Hall-Héroult) and chlor-alkali production",
            "Distinguish between active and inert electrodes and explain their different effects on electrode products"
        ],
        redox_titrations: [
            "Describe the procedure for a permanganate titration, including acid choice and endpoint recognition",
            "Calculate the concentration of Fe²⁺ or other analytes from permanganate titration data using the 1:5 mole ratio",
            "Explain the principle of iodometric titration and describe the two-step sequence with starch indicator",
            "Calculate analyte concentration from iodometric titration data, applying both mole ratio steps",
            "Evaluate the advantages of K₂Cr₂O₇ as a primary standard over KMnO₄ and explain indicator requirements"
        ],
        corrosion_and_protection: [
            "Describe corrosion of iron as an electrochemical process and write the half-equations for the anodic and cathodic reactions",
            "Explain why both oxygen and water are necessary for iron to rust",
            "Predict which metal corrodes preferentially in a bimetallic couple using the electrochemical series",
            "Explain the mechanism of sacrificial protection and identify suitable sacrificial anode metals",
            "Evaluate the effectiveness of different corrosion protection methods (galvanizing, tin plating, cathodic protection, passive layers) with reference to electrochemical principles"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand the key concepts and definitions in this topic",
        "Perform quantitative calculations using the relevant formulas",
        "Apply the concepts to novel problems and real-world contexts",
        "Connect the topic to related areas of chemistry"
    ];
}

identifyChemistryPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        // Organic Chemistry
        hydrocarbons: [
            "Atomic structure (electron configuration, valence electrons)",
            "Chemical bonding (covalent bonding, sigma and pi bonds)",
            "Molecular geometry (VSEPR theory, bond angles)",
            "Basic algebra for formula manipulation"
        ],
        functional_groups: [
            "Hydrocarbons (nomenclature and basic structure)",
            "Electronegativity and polarity",
            "Intermolecular forces (H-bonding, London dispersion, dipole-dipole)",
            "Acid-base chemistry (Brønsted-Lowry, pKa concept)"
        ],
        organic_reactions: [
            "Functional groups (especially alcohols, alkyl halides, carbonyl compounds, amines)",
            "Electronegativity and polarity (to identify nucleophilic/electrophilic sites)",
            "Thermodynamics (ΔG, activation energy, equilibrium)",
            "Basic kinetics (rate equations, rate-determining step)"
        ],
        stereochemistry: [
            "Hydrocarbons and functional groups (naming and structures)",
            "Molecular geometry (sp³ tetrahedral, sp² trigonal planar)",
            "Understanding of structural isomers (constitutional isomers)",
            "Organic reactions (to understand stereochemical outcomes)"
        ],
        spectroscopy: [
            "Functional groups (to interpret IR and NMR data)",
            "Electromagnetic spectrum (UV, IR, radiofrequency regions)",
            "Atomic structure (nuclear spin for NMR)",
            "Organic reactions (to rationalise fragmentation in MS)"
        ],
        polymers: [
            "Hydrocarbons (alkenes for addition polymerization)",
            "Functional groups (esters and amides for condensation polymers)",
            "Organic reactions (addition and condensation reaction mechanisms)",
            "Basic thermodynamics (to understand polymerization driving forces)"
        ],

        // Acid-Base Chemistry
        acid_base_definitions: [
            "Atomic structure (electron pairs, lone pairs, Lewis structures)",
            "Chemical bonding (polarity, electronegativity)",
            "Basic equilibrium concepts (reversible reactions, equilibrium constants)",
            "Simple ionic equations (dissolution of salts)"
        ],
        ph_calculations: [
            "Acid-base definitions (Brønsted-Lowry; Ka and Kb concepts)",
            "Logarithm mathematics (log, antilog, converting between Ka and pKa)",
            "Algebraic manipulation (solving quadratic equations)",
            "Equilibrium constants (ICE table method)"
        ],
        buffer_systems: [
            "pH calculations (weak acid equilibria; Henderson-Hasselbalch derivation)",
            "Acid-base definitions (conjugate pairs; strong vs weak acid/base)",
            "Equilibrium (Le Chatelier's principle)",
            "Basic algebra (rearranging Henderson-Hasselbalch for ratio or pH)"
        ],
        titration: [
            "pH calculations (to calculate pH at various points on titration curve)",
            "Buffer systems (buffer region of titration curve)",
            "Stoichiometry (mole calculations; concentration)",
            "Acid-base definitions (equivalence point chemistry)"
        ],
        acid_base_organic: [
            "pH calculations (pKa, Ka; weak acid equilibria)",
            "Organic functional groups (carboxylic acids, alcohols, phenols, amines, amides)",
            "Resonance structures (electron delocalization in carboxylate, phenoxide)",
            "Inductive effects (electronegativity transmission through bonds)",
            "Hybridization (sp, sp², sp³ and their s-character)"
        ],

        // Stoichiometry
        mole_concept: [
            "Atomic structure (protons, neutrons, electrons; atomic number and mass number)",
            "The periodic table (atomic masses, element symbols)",
            "Chemical formulas (how to read subscripts in molecular formulas)",
            "Basic arithmetic and scientific notation"
        ],
        chemical_equations: [
            "Mole concept (converting mass to moles using n = m/M)",
            "Chemical formulas and nomenclature (to write correct reactants and products)",
            "Atomic symbols and the periodic table",
            "Basic algebra (solving for unknown quantities in equations)"
        ],
        limiting_reagent: [
            "Mole concept (n = m/M conversion)",
            "Balanced chemical equations (extracting mole ratios)",
            "Four-step stoichiometry pathway (mass-to-mass calculations)",
            "Comparison of ratios (to identify which reactant is deficient)"
        ],
        percentage_yield: [
            "Limiting reagent (theoretical yield calculation)",
            "Chemical equations (balanced equation required for atom economy)",
            "Mole concept (molar masses for atom economy calculation)",
            "Percentage calculations (basic arithmetic)"
        ],
        solution_stoichiometry: [
            "Mole concept (n = m/M; amount of substance)",
            "Chemical equations (mole ratios for reaction stoichiometry)",
            "Acid-base chemistry (neutralization, pH concepts helpful)",
            "Unit conversions (mL to L; mg to g)"
        ],
        gas_stoichiometry: [
            "Mole concept (moles and molar mass)",
            "Chemical equations (mole ratios for gas-phase reactions)",
            "Gas laws (Boyle's, Charles's, Gay-Lussac's; or ideal gas law directly)",
            "Temperature conversion (°C to K: add 273.15)",
            "Pressure units (kPa, atm, Pa and their conversions)"
        ],

        // Redox Chemistry
        redox_fundamentals: [
            "Atomic structure (electrons, electron configuration, electron transfer)",
            "Ionic equations and ionic compounds (charge on common ions)",
            "Periodic table (groups, periods, electronegativity trends)",
            "Basic algebra (solving oxidation state equations)"
        ],
        electrochemical_cells: [
            "Redox fundamentals (oxidation states, half-equations, electron transfer)",
            "Thermodynamics (ΔG, spontaneity, equilibrium constants)",
            "Ionic equations (how to write net ionic equations for cell reactions)",
            "Logarithm mathematics (for Nernst equation and ln K = nFE°/RT)"
        ],
        electrolysis: [
            "Redox fundamentals (oxidation at anode, reduction at cathode)",
            "Electrochemical cells (electrode polarity, electrode reactions)",
            "Mole concept (for Faraday's law calculations: n = Q/F)",
            "Standard electrode potentials (for selective discharge prediction)"
        ],
        redox_titrations: [
            "Redox fundamentals (half-equations, mole ratios from balanced equations)",
            "Acid-base titrations (burette technique, indicator use, concordant titres)",
            "Solution stoichiometry (molarity, n = cV, percentage calculations)",
            "Standard electrode potentials (to understand why permanganate and dichromate are suitable oxidizing agents)"
        ],
        corrosion_and_protection: [
            "Redox fundamentals (oxidation of metals, reduction of oxygen)",
            "Electrochemical cells (galvanic cell principle; electrode potentials)",
            "Standard electrode potential series (to predict which metal corrodes in bimetallic couple)",
            "Electrolysis (impressed current cathodic protection uses electrolytic principles)"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "Basic chemistry (atomic structure, bonding)",
        "Algebra and quantitative reasoning"
    ];
}

generateChemistryStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        // Organic Chemistry
        hydrocarbons: [
            "Build physical models (ball-and-stick) to visualize 3D structures",
            "Practice IUPAC naming systematically: find longest chain, number from correct end, name substituents",
            "Memorize the general formulae: alkane CₙH₂ₙ₊₂, alkene CₙH₂ₙ, alkyne CₙH₂ₙ₋₂",
            "Always test for aromatic character with degree of unsaturation (DoU = 4 suggests benzene ring)",
            "Use color-coding for different bond types when drawing structures"
        ],
        functional_groups: [
            "Create a functional group 'cheat sheet' with structure, key reactions, and example compound",
            "Group functional groups by the element they contain (O-containing, N-containing, etc.)",
            "Practice predicting boiling points by considering H-bonding and chain length",
            "Learn the oxidation 'ladder': alcohol → aldehyde/ketone → carboxylic acid",
            "Remember: Tollens' and Fehling's tests distinguish aldehydes from ketones"
        ],
        organic_reactions: [
            "Always draw the mechanism with curved arrows — do not skip this step",
            "Identify the nucleophile and electrophile first before drawing any arrows",
            "For SN1/SN2: check substrate (1°, 2°, 3°) and nucleophile strength first",
            "Recall Markovnikov's rule: H⁺ adds to the carbon that already has MORE H atoms",
            "Practice predicting stereochemistry: SN2 → inversion; SN1 → racemization; E2 → anti"
        ],
        stereochemistry: [
            "Use molecular models — stereochemistry is a 3D topic and cannot be fully understood from 2D",
            "For R/S: assign priorities 1-4 by atomic number, then orient group 4 away from you",
            "Remember: R/S tells you configuration; (+)/(−) tells you optical rotation — they are NOT directly related",
            "Check for internal symmetry before calling a compound chiral (could be meso)",
            "For E/Z: apply CIP to each end of the double bond separately"
        ],
        spectroscopy: [
            "Always start with degree of unsaturation (DoU) from molecular formula — it constrains possibilities",
            "Memorize the key IR wavenumbers: broad 2500-3300 = carboxylic acid; 3200-3550 = alcohol; 1715 = ketone; 1735 = ester",
            "For NMR: remember the rough ranges — aromatic ~7 ppm, aldehyde ~10 ppm, alkyl ~1-3 ppm",
            "Integration tells you RATIO of H atoms; chemical shift tells you ENVIRONMENT",
            "Work systematically: MS → formula → DoU → IR functional groups → NMR connectivity → propose structure"
        ],
        polymers: [
            "Draw out the monomers and the repeat unit side by side to see the structural relationship",
            "Condensation polymers always have a functional group linkage (ester, amide) and lose a small molecule",
            "Addition polymers: just open the double bond and connect — no atoms are lost",
            "Connect to functional group chemistry: polyesters use esterification; polyamides use amide formation",
            "Remember the naming convention for nylons: Nylon 6,6 = 6C diamine + 6C diacid; Nylon 6 = single 6C monomer"
        ],

        // Acid-Base Chemistry
        acid_base_definitions: [
            "Draw a diagram comparing the three definitions side by side: Arrhenius (narrowest) → Brønsted-Lowry → Lewis (broadest)",
            "Always identify the conjugate acid-base pairs in every acid-base equation; this verifies you understand the proton transfer",
            "Remember the key insight: every Brønsted-Lowry acid-base reaction is simultaneously a Lewis acid-base reaction — H⁺ is the Lewis acid",
            "Test yourself: for each of NH₃, BF₃, H₂O, Fe³⁺ — which definitions apply? (builds fluency with all three)",
            "Make a strong vs weak acid/base flash card set: list all 7 strong acids; for weak acids, group by functional group (carboxylic acids, amines, etc.)"
        ],
        ph_calculations: [
            "Always start every pH calculation by asking: strong or weak? This determines your entire calculation strategy",
            "For weak acids: write the ICE table EVERY TIME, even when you use the approximation — this builds correct habits",
            "Check the 5% rule explicitly: calculate x/Ca × 100%; if > 5% use the quadratic, do not force the approximation",
            "Memorize the logarithm shortcuts: pH = −log(10⁻³) = 3.00; pH = −log(5×10⁻³) = 3.00 − log(5) = 3.00 − 0.70 = 2.30",
            "Work pH problems backwards to verify: convert your pH back to [H⁺], substitute into Ka expression, check it equals Ka"
        ],
        buffer_systems: [
            "Memorize Henderson-Hasselbalch as pH = pKa + log(base/acid) — 'base over acid', NOT acid over base",
            "Always check: is the target pH within pKa ± 1 of the weak acid you are using? If not, choose a different buffer system",
            "Practice the 'what happens when I add acid/base' calculation type — set up a before/after mole table for HA and A⁻",
            "Remember: at the half-equivalence point during a titration, pH = pKa — this is how pKa is measured experimentally",
            "Connect buffer pH to the 20:1 ratio in blood carbonate buffer: pH = 6.10 + log(20) = 6.10 + 1.30 = 7.40 — derive it yourself"
        ],
        titration: [
            "Sketch all four types of titration curves from memory, marking: starting pH, buffer region, half-equivalence point, equivalence point, post-equivalence pH",
            "For weak acid/strong base: calculate equivalence point pH using Kb(conjugate base) = Kw/Ka — practice this calculation type",
            "Indicator selection rule: transition range must overlap the steep portion; NEVER use methyl orange for weak acid/strong base",
            "In calculations: ALWAYS write the balanced equation first and identify the mole ratio — do not assume 1:1",
            "In the lab: add NaOH dropwise when within 2 mL of expected endpoint; a single drop can change pH by several units near equivalence"
        ],
        acid_base_organic: [
            "Create a pKa ladder on one A4 page: list every functional group from strongest acid (top) to weakest; refer to it constantly until memorized",
            "For each pKa comparison, always ask: 'Is there resonance stabilization of the conjugate base? Is there an inductive effect? What is the hybridization?'",
            "Practice predicting reaction direction: if pKa(reactant acid) < pKa(product acid), reaction is favored — the 'higher pKa wins' rule",
            "For amines: always compare to NH₃ first, then ask whether substituents donate (alkyl → stronger base) or accept (aryl, acyl → weaker base)",
            "For amino acids: draw the three ionization forms (cationic, zwitterion, anionic) and practice identifying which form predominates at any given pH"
        ],

        // Stoichiometry
        mole_concept: [
            "Use the mole 'road map': draw a diagram with mass, moles, and particles at three corners and the conversion factors on the arrows (÷M, ×M, ÷Nₐ, ×Nₐ)",
            "Always show units in calculations and cancel them — if your units don't cancel correctly, your calculation is wrong",
            "For empirical formula: take 100 g, convert % to grams, divide by Ar, divide by smallest, round to whole numbers",
            "The multiplier for molecular formula is always a whole number (1, 2, 3…): n = Mr / empirical formula mass",
            "Practice writing molar masses for 20 common compounds until it becomes automatic"
        ],
        chemical_equations: [
            "Never balance equations by changing subscripts — only change coefficients in front of formulas",
            "Use the four-step pathway for every stoichiometry calculation: mass A → moles A → moles B → mass B",
            "Write the mole ratio as a fraction before using it: (coefficient B / coefficient A) — this prevents ratio inversion errors",
            "Check conservation of mass: total mass of reactants should equal total mass of products",
            "For combustion of hydrocarbons: balance C first, then H, then O — always in this order"
        ],
        limiting_reagent: [
            "Always convert both reactants to moles BEFORE comparing — mass comparison is meaningless without moles",
            "Use the 'moles of product' method: convert each reactant to moles of product; whichever gives less product is the limiting reagent",
            "Draw a small table with rows for each reactant to organize limiting reagent calculations",
            "Calculate excess reagent explicitly — don't just say 'some remains'; calculate exactly how much",
            "Use the sandwich/recipe analogy to build intuition before applying the mathematical method"
        ],
        percentage_yield: [
            "Remember the formula: % yield = (actual / theoretical) × 100% — actual is always the numerator",
            "If your calculated % yield exceeds 100%, recheck your theoretical yield calculation first",
            "For atom economy, only put the desired product's molar mass in the numerator; put ALL products (including byproducts) in the denominator",
            "Make a table comparing % yield and atom economy when evaluating green chemistry — they measure different things",
            "Connect low yield to specific experimental causes (reversible reaction? side reaction? transfer loss?) — this develops scientific thinking"
        ],
        solution_stoichiometry: [
            "Always convert volumes from mL to L before using c = n/V (divide mL by 1000)",
            "For c₁V₁ = c₂V₂: the units of V must match on both sides (both mL or both L)",
            "In titration: write the balanced equation first and identify the mole ratio before calculating",
            "Average only concordant titres (within ±0.10 mL) — don't include the rough titration in the average",
            "For non-1:1 titrations: write n(acid) = n(base) / mole ratio, not n(acid) = n(base)"
        ],
        gas_stoichiometry: [
            "ALWAYS convert temperature to Kelvin: T(K) = T(°C) + 273.15 — using Celsius in PV=nRT gives completely wrong answers",
            "Check which R value to use based on your pressure unit: 8.314 for Pa or kPa; 0.08206 for atm",
            "For gas collected over water: P(gas) = P(total) − P(water vapor); always apply this correction",
            "At STP (0°C, 100 kPa): use 22.4 L/mol. At SATP (25°C, 100 kPa): use 24.8 L/mol. State which you are using",
            "For gas-phase reactions at constant T and P, volume ratios equal mole ratios — this shortcut saves many steps"
        ],

        // Redox Chemistry
        redox_fundamentals: [
            "Memorize OIL RIG first: Oxidation Is Loss, Reduction Is Gain — write it at the top of every redox problem until it is automatic",
            "For oxidation states: work through the rules in order — O is −2 (unless peroxide), H is +1 (unless metal hydride), sum must equal charge",
            "ALWAYS write out both half-equations before combining — never try to balance redox equations in one step",
            "Count electrons in both half-equations and multiply to equalize BEFORE adding — do not add unequal electrons",
            "After balancing, do a final check: count atoms of each element AND total charge on each side — both must match"
        ],
        electrochemical_cells: [
            "Make a labelled diagram of the Daniel cell from memory, showing: anode, cathode, salt bridge, electron flow direction, ion migration direction",
            "For E°cell: always use the formula E°cell = E°cathode − E°anode (both as REDUCTION potentials from the table) — never add them",
            "Remember: E° values are INTENSIVE properties (like temperature) — do NOT multiply by stoichiometric coefficients",
            "Practise the ΔG° → E°cell → K triangle: all three are expressions of the same thermodynamics and can be interconverted",
            "For Nernst equation: write Q correctly from the balanced overall cell equation; Q = [products]/[reactants] in the usual sense"
        ],
        electrolysis: [
            "Learn the mnemonic PANIC for electrolytic cell: Positive Anode, Negative Is Cathode — opposite polarity to galvanic cell",
            "Always start Faraday calculations with Q = It, then n(e⁻) = Q/F, then n(product) using the half-equation stoichiometry",
            "Write the half-equation at cathode and anode FIRST before starting any calculation — this identifies z (the charge on the ion)",
            "For aqueous solutions: ask 'which ion is more easily discharged at this electrode?' before assuming the product",
            "Check your answer dimensionally: m = ItM/(Fz); units = A × s × g/mol / (C/mol) = g ✓"
        ],
        redox_titrations: [
            "Write the FULL balanced ionic equation for every permanganate or dichromate titration before calculating — you need the mole ratio",
            "For permanganate: MnO₄⁻:Fe²⁺ = 1:5 — drill this ratio until automatic; a common exam error is using 1:1",
            "Never use HCl to acidify permanganate titrations — Cl⁻ is oxidized, giving falsely high iron results; always use H₂SO₄",
            "For iodometric titrations: write both steps explicitly — n(I₂) = n(thiosulfate)/2; n(analyte) = n(I₂) × appropriate ratio",
            "Add starch indicator only when the iodine solution has turned pale straw — adding it too early with high [I₂] can give irreversible complex"
        ],
        corrosion_and_protection: [
            "Draw the electrochemical corrosion diagram: anodic region (Fe → Fe²⁺ + 2e⁻), cathodic region (O₂ + 2H₂O + 4e⁻ → 4OH⁻), electron flow through metal, ion flow through moisture film",
            "Memorize the key rule: in a bimetallic couple, the metal with the MORE NEGATIVE E° is anodic (corrodes); the one with MORE POSITIVE E° is cathodic (protected)",
            "To compare galvanizing vs tin plating: E°(Zn) = −0.76 V; E°(Sn) = −0.14 V; E°(Fe) = −0.44 V. Zn is more negative than Fe (sacrificial). Sn is more positive than Fe (galvanic corrosion accelerator when scratched)",
            "Connect each protection method to its electrochemical principle: paint (breaks circuit), sacrificial anode (provides lower-E° anode), impressed current (makes structure the cathode), passive layer (blocks electrolyte access)",
            "Remember: rust is porous and non-adherent (does NOT protect). Al₂O₃ is dense and adherent (DOES protect — this explains why Al is so corrosion-resistant despite E° = −1.66 V)"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Draw structures and diagrams whenever possible — chemistry is very visual",
        "Practice calculations regularly, showing all units and conversion factors",
        "Connect new concepts to ones you already know",
        "Look for patterns: similar compounds and similar conditions lead to similar outcomes"
    ];
}

generateChemistryProcessTimeline(processName) {
    const timelines = {
        // Organic Chemistry timelines
        'Structure Determination Strategy': [
            { step: '1. Molecular formula', action: 'Obtain from high-resolution MS or elemental analysis' },
            { step: '2. Degree of unsaturation', action: 'Calculate DoU = (2C+2+N−H−X)/2; DoU ≥ 4 suggests aromatic' },
            { step: '3. IR interpretation', action: 'Identify functional groups (C=O? O−H? N−H?)' },
            { step: '4. ¹H NMR analysis', action: 'Count environments; read chemical shifts; note integration and splitting' },
            { step: '5. ¹³C NMR / DEPT', action: 'Count carbons; identify C=O (>160 ppm); distinguish CH₃/CH₂/CH/C' },
            { step: '6. MS fragments', action: 'Identify characteristic losses; confirm molecular ion' },
            { step: '7. Propose structure', action: 'Build structure consistent with ALL data; check molecular formula' },
            { step: '8. Verify', action: 'Confirm each spectral feature is explained by proposed structure' }
        ],
        'Reaction Mechanism Drawing': [
            { step: '1. Identify substrate', action: 'Draw the starting material; label functional groups' },
            { step: '2. Identify reagent', action: 'Is it nucleophilic? Electrophilic? Base? Acid? Radical initiator?' },
            { step: '3. Find reactive sites', action: 'Locate electrophilic centre in substrate (or nucleophilic site for electrophilic attack)' },
            { step: '4. Draw first step', action: 'Move electron pair with curved arrow from Nu/e-source to electrophile' },
            { step: '5. Draw intermediate', action: 'Show any ion or radical intermediate formed' },
            { step: '6. Complete mechanism', action: 'Continue until product reached; show all steps' },
            { step: '7. Check atoms', action: 'Verify atom count balances; check all valences are correct' },
            { step: '8. State stereochemistry', action: 'Specify stereochemical outcome (inversion, retention, racemization)' }
        ],
        'Synthesis Planning (Retrosynthesis)': [
            { step: '1. Identify target', action: 'Draw the target molecule and identify its functional groups' },
            { step: '2. Last step', action: 'What reaction could form the final bond or functional group?' },
            { step: '3. Work backwards', action: 'Identify precursor(s) for each step' },
            { step: '4. Check availability', action: 'Are starting materials commercially available or simple?' },
            { step: '5. Forward synthesis', action: 'Write the synthesis forward with all reagents and conditions' },
            { step: '6. Stereochemistry', action: 'Check that each step gives correct stereochemical outcome' },
            { step: '7. Protecting groups', action: 'Are any functional groups sensitive to required conditions?' }
        ],
        'IUPAC Naming Procedure': [
            { step: '1. Find longest chain', action: 'Identify the longest continuous carbon chain = parent chain' },
            { step: '2. Identify suffix', action: 'Alkane (−ane), alkene (−ene), alkyne (−yne), or functional group suffix' },
            { step: '3. Number the chain', action: 'Number from end that gives lowest locants to substituents (or multiple bond)' },
            { step: '4. Name substituents', action: 'Identify and name branches (methyl, ethyl, etc.) and other substituents' },
            { step: '5. Alphabetical order', action: 'List substituents alphabetically (ignoring di-, tri- prefixes)' },
            { step: '6. Assemble name', action: 'Combine: locants-substituents-parent chain-suffix' },
            { step: '7. Check stereochemistry', action: 'Add (R)/(S) or (E)/(Z) if required by the structure' }
        ],

        // Acid-Base Chemistry timelines
        'pH Calculation Strategy': [
            { step: '1. Identify species', action: 'Determine if solution contains strong acid, weak acid, strong base, weak base, or salt' },
            { step: '2. Write equilibrium', action: 'Write the relevant dissociation/ionization equation (HA ⇌ H⁺ + A⁻ or B + H₂O ⇌ BH⁺ + OH⁻)' },
            { step: '3. Set up ICE table', action: 'Fill in Initial, Change, Equilibrium rows with variable x for unknown [H⁺] or [OH⁻]' },
            { step: '4. Check approximation', action: 'Is Ca/Ka > 100? If yes, use x ≈ √(Ka × Ca). If no, solve the full quadratic' },
            { step: '5. Solve for x', action: 'Calculate [H⁺] (for acid) or [OH⁻] (for base); validate approximation if used (x/Ca < 5%)' },
            { step: '6. Calculate pH', action: 'pH = −log[H⁺] directly; or for base: pOH = −log[OH⁻] then pH = 14.00 − pOH' },
            { step: '7. Verify answer', action: 'Check: acid solution pH < 7; base solution pH > 7; neutral near 7 (at 25°C)' }
        ],
        'Buffer Preparation Procedure': [
            { step: '1. Select weak acid', action: 'Choose weak acid whose pKa is within ±1 pH unit of desired buffer pH' },
            { step: '2. Calculate ratio', action: 'Use Henderson-Hasselbalch: [A⁻]/[HA] = 10^(target pH − pKa)' },
            { step: '3. Determine concentrations', action: 'Choose total buffer concentration (higher = greater capacity); split by ratio' },
            { step: '4. Prepare solution', action: 'Dissolve calculated masses/volumes of weak acid and conjugate base salt in ~80% final volume of distilled water' },
            { step: '5. Adjust pH', action: 'Measure pH with calibrated meter; adjust with small amounts of acid or base to exact target' },
            { step: '6. Make to volume', action: 'Transfer to volumetric flask; make up to final volume with distilled water' },
            { step: '7. Verify and label', action: 'Check pH; label with composition, pH, concentration, date; store appropriately' }
        ],
        'Acid-Base Titration Procedure': [
            { step: '1. Standardize titrant', action: 'If using NaOH: standardize against KHP primary standard; calculate exact [NaOH]' },
            { step: '2. Prepare analyte', action: 'Pipette exact volume of analyte into conical flask; add distilled water if needed (does not affect moles)' },
            { step: '3. Select indicator', action: 'Choose indicator whose transition range overlaps the steep portion near the expected equivalence point pH' },
            { step: '4. Add indicator', action: 'Add 2−3 drops only; too much indicator consumes significant moles and distorts endpoint' },
            { step: '5. Rough titration', action: 'Add titrant rapidly to within ~1 mL of expected endpoint; determine approximate volume; note color change' },
            { step: '6. Accurate titrations', action: 'Repeat 3 times with dropwise addition near endpoint; stop at first faint persistent color change (30 s)' },
            { step: '7. Select concordant titres', action: 'Identify titres within ±0.10 mL; average these only (discard rough titration)' },
            { step: '8. Calculate', action: 'n(titrant) = [titrant] × V(L); n(analyte) = n(titrant) × stoichiometric ratio; [analyte] = n/V(L)' }
        ],
        'pKa Determination by Titration': [
            { step: '1. Prepare weak acid solution', action: 'Dissolve accurately weighed weak acid in distilled water; record exact concentration' },
            { step: '2. Set up titration with pH meter', action: 'Calibrate pH meter; immerse electrode in acid solution; record initial pH' },
            { step: '3. Add NaOH in increments', action: 'Add 0.5−1.0 mL increments; record pH after each addition; slow to 0.1 mL near equivalence' },
            { step: '4. Identify equivalence point', action: 'Locate steepest part of titration curve (greatest ΔpH/ΔV); this is equivalence point volume Ve' },
            { step: '5. Find half-equivalence point', action: 'Half-equivalence volume = Ve/2; read pH at this volume from the curve' },
            { step: '6. Read pKa', action: 'At half-equivalence point, [HA] = [A⁻], so pH = pKa + log(1) = pKa; read directly from graph' },
            { step: '7. Verify', action: 'Compare to literature pKa; calculate Ka = 10^(−pKa); check equivalence point pH (should be > 7)' }
        ],
        'Organic Acid Strength Prediction': [
            { step: '1. Identify the acidic proton', action: 'Locate the H that will be lost (e.g., O−H, N−H, terminal C−H)' },
            { step: '2. Draw conjugate base', action: 'Remove the proton; draw the resulting anion clearly' },
            { step: '3. Assess resonance', action: 'Can the negative charge be delocalized? How many resonance structures? Over how many atoms?' },
            { step: '4. Assess inductive effects', action: 'Are there EWG near the acidic site? Count how many and their distance (α, β, γ)' },
            { step: '5. Assess hybridization', action: 'What hybridization is the atom bearing the negative charge? sp³ < sp² < sp in ability to stabilize' },
            { step: '6. Rank factors', action: 'Resonance usually dominates; then inductive; then hybridization; then solvation effects' },
            { step: '7. Assign approximate pKa', action: 'Use known reference values (acetic acid pKa 4.76) and adjustments for each effect to estimate' }
        ],

        // Stoichiometry timelines
        'Four-Step Stoichiometry Pathway': [
            { step: '1. Balance equation', action: 'Write and balance the chemical equation; identify all species' },
            { step: '2. Identify mole ratio', action: 'Extract the mole ratio between the substance given and substance required from coefficients' },
            { step: '3. Convert given mass to moles', action: 'n = m / M; calculate molar mass of given substance from periodic table' },
            { step: '4. Apply mole ratio', action: 'n(required) = n(given) × [coeff(required) / coeff(given)]' },
            { step: '5. Convert moles to required units', action: 'Mass: m = n × M; Particles: N = n × Nₐ; Gas volume: V = n × Vm or PV = nRT' },
            { step: '6. Check answer', action: 'Check units are correct; verify conservation of mass; check answer is chemically reasonable' }
        ],
        'Limiting Reagent Calculation': [
            { step: '1. Balance equation', action: 'Write and balance the chemical equation' },
            { step: '2. Convert ALL reactants to moles', action: 'n = m/M for each reactant given' },
            { step: '3. Calculate moles of product from each reactant', action: 'For each reactant: n(product) = n(reactant) × [coeff(product)/coeff(reactant)]' },
            { step: '4. Identify limiting reagent', action: 'The reactant giving the LEAST moles of product is the limiting reagent' },
            { step: '5. Calculate theoretical yield', action: 'Use the limiting reagent moles × mole ratio × M(product) = theoretical yield (g)' },
            { step: '6. Calculate excess reagent remaining', action: 'Moles consumed = mol(limiting) × [coeff(excess)/coeff(limiting)]; moles remaining = initial − consumed' }
        ],
        'Titration Procedure': [
            { step: '1. Prepare standard solution', action: 'Weigh primary standard accurately; dissolve; transfer to volumetric flask; make up to mark; mix' },
            { step: '2. Set up burette', action: 'Rinse burette with titrant; fill; remove air bubble from tip; record initial reading' },
            { step: '3. Pipette analyte', action: 'Rinse pipette with analyte solution; pipette exact volume into conical flask' },
            { step: '4. Add indicator', action: 'Add 2-3 drops of appropriate indicator to flask' },
            { step: '5. Titrate', action: 'Add titrant from burette, swirling flask; slow to dropwise near endpoint' },
            { step: '6. Record endpoint', action: 'Stop at first permanent color change; record final burette reading; titre = final − initial' },
            { step: '7. Repeat for concordance', action: 'Repeat until ≥2 concordant titres within ±0.10 mL; average concordant values' },
            { step: '8. Calculate', action: 'n(titrant) = c × V(L); n(analyte) = n(titrant) × mole ratio; c(analyte) = n/V(L)' }
        ],
        'Ideal Gas Law Problem Strategy': [
            { step: '1. List known variables', action: 'Identify which of P, V, n, T are known; convert T to Kelvin; convert units consistently' },
            { step: '2. Choose correct R', action: 'R = 8.314 L·kPa/mol/K if P in kPa, V in L; R = 0.08206 L·atm/mol/K if P in atm' },
            { step: '3. Apply PV = nRT', action: 'Solve algebraically for the unknown variable' },
            { step: '4. Check Dalton\'s Law', action: 'If gas is collected over water: P(gas) = P(total) − P(water vapor at that temperature)' },
            { step: '5. Link to stoichiometry', action: 'Use n from ideal gas law as moles in stoichiometry calculation if needed' },
            { step: '6. Verify units and magnitude', action: 'Check units cancel; verify answer is physically reasonable (e.g., positive P, V, T in Kelvin > 0)' }
        ],
        'Empirical Formula Determination': [
            { step: '1. Get percentage composition', action: 'From experimental data or given % by mass of each element' },
            { step: '2. Assume 100 g sample', action: 'Mass of each element (g) = percentage value numerically' },
            { step: '3. Convert to moles', action: 'n(element) = mass / Ar for each element' },
            { step: '4. Divide by smallest', action: 'Divide all mole values by the smallest mole value' },
            { step: '5. Round to whole numbers', action: 'If ratio is 1.5 → multiply all by 2; if 1.33 → multiply by 3; if 1.25 → multiply by 4' },
            { step: '6. Write empirical formula', action: 'Use whole-number ratios as subscripts' },
            { step: '7. Find molecular formula', action: 'n = Mr / empirical formula mass; molecular formula = (empirical formula)ₙ' }
        ],

        // Redox Chemistry timelines
        'Redox Half-Equation Balancing (Acidic)': [
            { step: '1. Write skeleton half-equations', action: 'Separate oxidation and reduction; write unbalanced skeleton with species identified' },
            { step: '2. Balance atoms other than O and H', action: 'Balance Mn, Fe, Cr, S, etc. first using coefficients' },
            { step: '3. Balance O with H₂O', action: 'Add H₂O molecules to the side deficient in O atoms' },
            { step: '4. Balance H with H⁺', action: 'Add H⁺ ions to the side deficient in H atoms' },
            { step: '5. Balance charge with electrons', action: 'Add e⁻ to the MORE POSITIVE side to equalize charge; oxidation: e⁻ on right; reduction: e⁻ on left' },
            { step: '6. Equalize electrons', action: 'Multiply each half-equation by appropriate factor so electrons cancel exactly' },
            { step: '7. Add and simplify', action: 'Add the two half-equations; cancel electrons and any species appearing on both sides' },
            { step: '8. Verify', action: 'Count all atoms AND check total charge is equal on both sides' }
        ],
        'Cell Potential Calculation': [
            { step: '1. Identify half-reactions', action: 'From the cell notation or description, identify which species is oxidized (anode) and which is reduced (cathode)' },
            { step: '2. Look up E° values', action: 'Find standard reduction potentials from data table for both half-cells (as reduction potentials)' },
            { step: '3. Calculate E°cell', action: 'E°cell = E°cathode − E°anode (both as reduction potentials from table; do NOT reverse the sign)' },
            { step: '4. Determine spontaneity', action: 'E°cell > 0: spontaneous forward reaction. E°cell < 0: non-spontaneous (reverse is spontaneous)' },
            { step: '5. Calculate ΔG° (if required)', action: 'ΔG° = −nFE°cell where n = electrons transferred; F = 96485 C mol⁻¹' },
            { step: '6. Calculate K (if required)', action: 'ln K = nFE°cell / RT = nE°cell / 0.02569 (at 298 K); or log K = nE°cell / 0.0592' },
            { step: '7. Apply Nernst if non-standard', action: 'E = E° − (0.0592/n) × log Q; calculate Q from actual concentrations' }
        ],
        'Faraday Law Electrolysis Calculation': [
            { step: '1. Write electrode half-equations', action: 'Identify cathode reaction (reduction) and anode reaction (oxidation); note charge z on ion deposited/evolved' },
            { step: '2. Calculate charge Q', action: 'Q = I × t; ensure current in amperes (A) and time in seconds (s); Q in coulombs (C)' },
            { step: '3. Calculate moles of electrons', action: 'n(e⁻) = Q / F = Q / 96485' },
            { step: '4. Apply half-equation stoichiometry', action: 'n(product) = n(e⁻) / z  where z = charge on ion (e.g., z = 2 for Cu²⁺; z = 3 for Al³⁺)' },
            { step: '5. Calculate mass or volume', action: 'For solid: m = n × M. For gas: V = n × Vm (at stated T, P) or PV = nRT' },
            { step: '6. Check units', action: 'Verify: m = ItM/(Fz) gives grams; all units should cancel correctly' },
            { step: '7. Calculate efficiency if given actual vs theoretical', action: 'Efficiency (%) = (actual mass / theoretical mass) × 100' }
        ],
        'Permanganate Titration Procedure': [
            { step: '1. Prepare iron(II) solution', action: 'Dissolve accurately weighed sample in dilute H₂SO₄; transfer quantitatively to volumetric flask; make to mark' },
            { step: '2. Rinse and fill burette', action: 'Rinse burette 3× with KMnO₄ solution; fill to 0.00 mL; remove air bubble from tip' },
            { step: '3. Pipette analyte into flask', action: 'Pipette 25.00 mL of Fe²⁺ solution into conical flask' },
            { step: '4. Acidify', action: 'Add ~25 mL dilute H₂SO₄ to flask (NOT HCl); ensures Mn⁷⁺ → Mn²⁺ with correct stoichiometry' },
            { step: '5. No indicator needed', action: 'KMnO₄ is self-indicating; no additional indicator required' },
            { step: '6. Titrate and observe', action: 'Add KMnO₄ from burette; purple colour immediately disappears (Fe²⁺ reduces MnO₄⁻); swirl continuously' },
            { step: '7. Identify endpoint', action: 'Endpoint: first PERMANENT PALE PINK colour lasting > 30 seconds; NOT purple (that = overshoot)' },
            { step: '8. Calculate', action: 'n(MnO₄⁻) = c × V(L); n(Fe²⁺) = 5 × n(MnO₄⁻); [Fe²⁺] = n(Fe²⁺) / V(analyte in L)' }
        ],
        'Iodometric Titration Procedure': [
            { step: '1. React oxidizing agent with excess KI', action: 'Add accurately measured oxidizing agent to excess KI(aq) in acidified solution; I₂ liberated' },
            { step: '2. Observe colour change', action: 'Solution turns brown (I₂ in KI is brown I₃⁻); confirms liberation of I₂' },
            { step: '3. Prepare Na₂S₂O₃ in burette', action: 'Rinse burette; fill with standardized Na₂S₂O₃ solution; record initial reading' },
            { step: '4. Titrate with thiosulfate', action: 'Add Na₂S₂O₃ from burette; brown colour fades toward pale straw/yellow' },
            { step: '5. Add starch indicator', action: 'When solution is PALE STRAW coloured (near endpoint): add 1 mL freshly prepared starch solution; solution turns deep blue-black' },
            { step: '6. Continue to endpoint', action: 'Add Na₂S₂O₃ dropwise; endpoint = disappearance of blue-black colour to colourless; permanent after 30 s' },
            { step: '7. Calculate — Step 1 mole ratio', action: 'n(S₂O₃²⁻) = c × V(L); n(I₂) = n(S₂O₃²⁻) / 2  [from I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻]' },
            { step: '8. Calculate — Step 2 mole ratio', action: 'n(oxidizing agent) = n(I₂) × appropriate ratio from Step 1 equation; calculate concentration or percentage' }
        ],
        'Corrosion Investigation Setup': [
            { step: '1. Prepare iron samples', action: 'Cut or obtain identical iron nails; clean with sandpaper; dip briefly in dilute HCl to remove oxide; rinse; dry' },
            { step: '2. Set up condition tubes', action: 'Tube 1: distilled water (control). Tube 2: dry air over CaCl₂. Tube 3: O₂-free water (boiled, sealed with oil). Tube 4: brine (3% NaCl). Tube 5: acidic water (pH 3)' },
            { step: '3. Set up protection tubes (in brine)', action: 'Tube 6: nail + Zn strip (sacrificial). Tube 7: nail + Cu strip (galvanic coupling). Tube 8: nail coated with petroleum jelly. Tube 9: nail fully painted. Tube 10: galvanized nail' },
            { step: '4. Record initial state', action: 'Photograph or describe initial appearance of each nail; weigh if quantitative comparison desired' },
            { step: '5. Incubate', action: 'Leave undisturbed for 24−72 h (or 7 days at room temperature); seal tubes to control conditions' },
            { step: '6. Observe and record', action: 'Note: extent of rust, colour of solution, location of rust on nail; assign rust level 0−5' },
            { step: '7. Ferroxyl indicator (optional)', action: 'Set agar + K₄[Fe(CN)₆] + phenolphthalein; embed nail; observe blue (Fe²⁺, anodic) and pink (OH⁻, cathodic) regions' },
            { step: '8. Analyse and conclude', action: 'Rank conditions by corrosion severity; relate each protection method to electrochemical principle' }
        ]
    };

    return timelines[processName] || [];
}

generateChemistryContentHierarchy() {
    if (!this.currentContent) return null;

    const hierarchy = {
        root: this.currentContent.topic,
        category: this.currentContent.category,
        children: []
    };

    // Organic Chemistry — Classification/main groups section
    if (this.currentContent.classification || this.currentContent.mainGroups) {
        const groups = this.currentContent.mainGroups || this.currentContent.classification;
        hierarchy.children.push({
            name: 'Classification',
            type: 'section',
            subItems: groups ? Object.keys(groups) : []
        });
    }

    // Acid-Base — Definitions section
    if (this.currentContent.definitions) {
        hierarchy.children.push({
            name: 'Acid-Base Definitions',
            type: 'section',
            subItems: Object.keys(this.currentContent.definitions)
        });
    }

    // Acid-Base — Conjugate pairs and strong/weak
    if (this.currentContent.conjugatePairs || this.currentContent.strongVsWeak) {
        hierarchy.children.push({
            name: 'Conjugate Pairs and Acid-Base Strength',
            type: 'section'
        });
    }

    // Stoichiometry — Key formulas section
    if (this.currentContent.keyFormulas) {
        hierarchy.children.push({
            name: 'Key Formulas',
            type: 'section',
            subItems: Object.keys(this.currentContent.keyFormulas)
        });
    }

    // Redox — Key formulae section
    if (this.currentContent.keyFormulae) {
        hierarchy.children.push({
            name: 'Key Formulae',
            type: 'section',
            subItems: Object.keys(this.currentContent.keyFormulae)
        });
    }

    // Shared — Key definitions
    if (this.currentContent.keyDefinitions) {
        hierarchy.children.push({
            name: 'Key Definitions',
            type: 'section',
            count: Object.keys(this.currentContent.keyDefinitions).length
        });
    }

    // Organic Chemistry — Structure and bonding
    if (this.currentContent.structure || this.currentContent.fundamentals) {
        hierarchy.children.push({
            name: 'Structure and Bonding',
            type: 'section'
        });
    }

    // Acid-Base — Calculation methods (pH, Ka, Kb)
    if (this.currentContent.calculationMethods) {
        hierarchy.children.push({
            name: 'Calculation Methods',
            type: 'section',
            subItems: Object.keys(this.currentContent.calculationMethods)
        });
    }

    // Acid-Base — Henderson-Hasselbalch and buffer capacity
    if (this.currentContent.hendersonHasselbalch || this.currentContent.bufferCapacity) {
        hierarchy.children.push({
            name: 'Henderson-Hasselbalch Equation and Buffer Capacity',
            type: 'section'
        });
    }

    // Acid-Base — Titration curves and indicators
    if (this.currentContent.titrationCurves || this.currentContent.indicators) {
        hierarchy.children.push({
            name: 'Titration Curves and Indicators',
            type: 'section',
            subItems: this.currentContent.titrationCurves ? Object.keys(this.currentContent.titrationCurves) : []
        });
    }

    // Acid-Base — pKa values and structural effects
    if (this.currentContent.pKaValues || this.currentContent.structuralEffectsOnAcidity) {
        hierarchy.children.push({
            name: 'pKa Values and Structural Effects on Acidity/Basicity',
            type: 'section'
        });
    }

    // Acid-Base — Biological buffer systems
    if (this.currentContent.biologicalSystems || this.currentContent.selectingBuffer) {
        hierarchy.children.push({
            name: 'Biological Buffer Systems and Buffer Selection',
            type: 'section'
        });
    }

    // Redox — Oxidation state rules and balancing
    if (this.currentContent.oxidationStateRules || this.currentContent.balancingMethods) {
        hierarchy.children.push({
            name: 'Oxidation States and Half-Equation Balancing',
            type: 'section',
            subItems: [
                ...(this.currentContent.oxidationStateRules ? ['Oxidation State Rules'] : []),
                ...(this.currentContent.balancingMethods ? Object.keys(this.currentContent.balancingMethods) : [])
            ]
        });
    }

    // Redox — Common oxidation states table
    if (this.currentContent.commonOxidationStates) {
        hierarchy.children.push({
            name: 'Common Oxidation States of Transition Metals',
            type: 'section',
            subItems: Object.keys(this.currentContent.commonOxidationStates)
        });
    }

    // Redox — Standard electrode potentials table
    if (this.currentContent.standardElectrodePotentials) {
        hierarchy.children.push({
            name: 'Standard Electrode Potentials',
            type: 'section',
            subItems: Object.keys(this.currentContent.standardElectrodePotentials)
        });
    }

    // Redox — Cell potential calculations (Nernst, ΔG, K)
    if (this.currentContent.cellPotentialCalculations || this.currentContent.danielCell) {
        hierarchy.children.push({
            name: 'Cell Potential Calculations and Daniel Cell',
            type: 'section',
            subItems: [
                ...(this.currentContent.cellPotentialCalculations ? Object.keys(this.currentContent.cellPotentialCalculations) : []),
                ...(this.currentContent.danielCell ? ['Daniel Cell Components and Reactions'] : [])
            ]
        });
    }

    // Redox — Battery types
    if (this.currentContent.batteryTypes) {
        hierarchy.children.push({
            name: 'Battery Types',
            type: 'section',
            subItems: Object.keys(this.currentContent.batteryTypes)
        });
    }

    // Redox — Faraday's laws and electrolysis of molten/aqueous
    if (this.currentContent.faradaysLaws || this.currentContent.electrolysisOfAqueousSolutions || this.currentContent.electrolysisOfMoltenSalts) {
        hierarchy.children.push({
            name: "Faraday's Laws and Electrolysis Products",
            type: 'section',
            subItems: [
                ...(this.currentContent.faradaysLaws ? ["Faraday's Laws and Calculations"] : []),
                ...(this.currentContent.electrolysisOfMoltenSalts ? ['Electrolysis of Molten Salts'] : []),
                ...(this.currentContent.electrolysisOfAqueousSolutions ? ['Electrolysis of Aqueous Solutions'] : [])
            ]
        });
    }

    // Redox — Industrial applications
    if (this.currentContent.industrialApplications) {
        hierarchy.children.push({
            name: 'Industrial Applications',
            type: 'section',
            count: Array.isArray(this.currentContent.industrialApplications)
                ? this.currentContent.industrialApplications.length : null
        });
    }

    // Redox — Permanganate, dichromate, iodometric titrations
    if (this.currentContent.permanganateTitrations || this.currentContent.dichromateTitrations || this.currentContent.iodometricTitrations) {
        hierarchy.children.push({
            name: 'Redox Titration Methods',
            type: 'section',
            subItems: [
                ...(this.currentContent.permanganateTitrations ? ['Permanganate Titrations'] : []),
                ...(this.currentContent.dichromateTitrations ? ['Dichromate Titrations'] : []),
                ...(this.currentContent.iodometricTitrations ? ['Iodometric Titrations'] : [])
            ]
        });
    }

    // Redox — Corrosion mechanism and protection methods
    if (this.currentContent.mechanismOfIronRusting || this.currentContent.protectionMethods) {
        hierarchy.children.push({
            name: 'Corrosion Mechanism and Protection Methods',
            type: 'section',
            subItems: [
                ...(this.currentContent.mechanismOfIronRusting ? ['Mechanism of Iron Rusting', 'Galvanic Corrosion'] : []),
                ...(this.currentContent.protectionMethods ? Object.keys(this.currentContent.protectionMethods) : [])
            ]
        });
    }

    // Stoichiometry — Calculation pathway or procedure
    if (
        this.currentContent.stoichiometryPathway ||
        this.currentContent.identificationMethod ||
        this.currentContent.titrationTechnique ||
        this.currentContent.idealGasLawApplications
    ) {
        hierarchy.children.push({
            name: 'Calculation Methods and Procedures',
            type: 'section'
        });
    }

    // Organic Chemistry — Reactions and mechanisms
    if (
        this.currentContent.substitutionReactions ||
        this.currentContent.additionReactions ||
        this.currentContent.eliminationReactions ||
        this.currentContent.reactionTypes
    ) {
        hierarchy.children.push({
            name: 'Reactions and Mechanisms',
            type: 'section'
        });
    }

    // Spectroscopy techniques or gas law applications
    if (this.currentContent.techniques || this.currentContent.methods) {
        hierarchy.children.push({
            name: 'Techniques and Methods',
            type: 'section'
        });
    }

    // Polymer sections
    if (this.currentContent.additionPolymerization || this.currentContent.condensationPolymerization) {
        hierarchy.children.push({
            name: 'Polymerization Types',
            type: 'section'
        });
    }

    // Comparisons and atom economy
    if (this.currentContent.comparisonTable || this.currentContent.reactivityTrends || this.currentContent.atomEconomy || this.currentContent.comparativeContext) {
        hierarchy.children.push({
            name: 'Comparisons and Context',
            type: 'section'
        });
    }

    // Worked examples
    if (this.currentContent.workedExamples) {
        hierarchy.children.push({
            name: 'Worked Examples',
            type: 'section',
            count: Array.isArray(this.currentContent.workedExamples)
                ? this.currentContent.workedExamples.length : null
        });
    }

    // Practice problems
    if (this.currentContent.practiceProblems) {
        hierarchy.children.push({
            name: 'Practice Problems',
            type: 'section',
            count: Array.isArray(this.currentContent.practiceProblems)
                ? this.currentContent.practiceProblems.length : null
        });
    }

    // Compound/reaction examples
    if (this.currentContent.examples) {
        hierarchy.children.push({
            name: 'Key Examples',
            type: 'section',
            count: Array.isArray(this.currentContent.examples) ? this.currentContent.examples.length : null
        });
    }

    // Contextual scenarios / applications
    if (this.currentContent.contextualScenarios || this.currentContent.applications) {
        hierarchy.children.push({
            name: 'Real-World Applications',
            type: 'section',
            count: Array.isArray(this.currentContent.contextualScenarios)
                ? this.currentContent.contextualScenarios.length : null
        });
    }

    // Misconceptions
    if (this.currentContent.commonMisconceptions || this.currentContent.misconceptions) {
        hierarchy.children.push({
            name: 'Common Misconceptions',
            type: 'section'
        });
    }

    // Assessment
    if (this.currentContent.assessmentQuestions) {
        hierarchy.children.push({
            name: 'Assessment Questions',
            type: 'section',
            subItems: Object.keys(this.currentContent.assessmentQuestions)
        });
    }

    // Related experiments
    if (this.currentContent.relatedExperiments?.length > 0) {
        hierarchy.children.push({
            name: 'Related Laboratory Experiments',
            type: 'section',
            count: this.currentContent.relatedExperiments.length
        });
    }

    return hierarchy;
}

generateChemistryContent(problem, content) {
    const contentSections = [];

    contentSections.push(this.generateOverviewSection(problem, content));

    // Organic Chemistry sections
    if (content.classification || content.mainGroups) {
        contentSections.push(this.generateClassificationSection(content));
    }

    if (content.structure || content.fundamentals) {
        contentSections.push(this.generateStructureSection(content));
    }

    if (
        content.substitutionReactions ||
        content.additionReactions ||
        content.eliminationReactions ||
        content.reactionTypes
    ) {
        contentSections.push(this.generateReactionsSection(content));
    }

    if (content.techniques || content.methods) {
        contentSections.push(this.generateTechniquesSection(content));
    }

    if (content.additionPolymerization || content.condensationPolymerization) {
        contentSections.push(this.generatePolymerSection(content));
    }

    // Acid-Base Chemistry sections
    if (content.definitions) {
        contentSections.push(this.generateAcidBaseDefinitionsSection(content));
    }

    if (content.conjugatePairs || content.strongVsWeak) {
        contentSections.push(this.generateConjugatePairsSection(content));
    }

    if (content.calculationMethods) {
        contentSections.push(this.generatePhCalculationsSection(content));
    }

    if (content.hendersonHasselbalch || content.bufferCapacity || content.composition) {
        contentSections.push(this.generateBufferSection(content));
    }

    if (content.titrationCurves || content.indicators) {
        contentSections.push(this.generateTitrationCurvesSection(content));
    }

    if (content.pKaValues || content.structuralEffectsOnAcidity || content.structuralEffectsOnBasicity) {
        contentSections.push(this.generateOrganicAcidBaseSection(content));
    }

    if (content.biologicalSystems || content.selectingBuffer) {
        contentSections.push(this.generateBiologicalBuffersSection(content));
    }

    // Stoichiometry sections
    if (content.keyFormulas) {
        contentSections.push(this.generateKeyFormulasSection(content));
    }

    if (content.stoichiometryPathway || content.identificationMethod) {
        contentSections.push(this.generateCalculationMethodSection(content));
    }

    if (content.workedExamples) {
        contentSections.push(this.generateWorkedExamplesSection(content));
    }

    if (content.practiceProblems) {
        contentSections.push(this.generatePracticeProblemsSection(content));
    }

    if (content.titrationTechnique) {
        contentSections.push(this.generateTitrationSection(content));
    }

    if (content.idealGasLawApplications || content.pressureUnits || content.avogadroLaw) {
        contentSections.push(this.generateGasLawSection(content));
    }

    if (content.atomEconomy) {
        contentSections.push(this.generateAtomEconomySection(content));
    }

    // Redox Chemistry sections
    if (content.oxidationStateRules || content.balancingMethods) {
        contentSections.push(this.generateRedoxFundamentalsSection(content));
    }

    if (content.commonOxidationStates) {
        contentSections.push(this.generateOxidationStatesTableSection(content));
    }

    if (content.standardElectrodePotentials || content.cellPotentialCalculations || content.danielCell) {
        contentSections.push(this.generateElectrochemicalCellsSection(content));
    }

    if (content.batteryTypes) {
        contentSections.push(this.generateBatteryTypesSection(content));
    }

    if (content.faradaysLaws || content.electrolysisOfMoltenSalts || content.electrolysisOfAqueousSolutions) {
        contentSections.push(this.generateElectrolysisSection(content));
    }

    if (content.industrialApplications) {
        contentSections.push(this.generateIndustrialApplicationsSection(content));
    }

    if (content.permanganateTitrations || content.dichromateTitrations || content.iodometricTitrations) {
        contentSections.push(this.generateRedoxTitrationsSection(content));
    }

    if (content.mechanismOfIronRusting || content.protectionMethods) {
        contentSections.push(this.generateCorrosionSection(content));
    }

    if (content.keyFormulae) {
        contentSections.push(this.generateRedoxKeyFormulaeSection(content));
    }

    // Shared sections (all disciplines)
    if (content.comparisonTable || content.reactivityTrends || content.comparativeContext) {
        contentSections.push(this.generateComparisonSection(content));
    }

    if (content.examples) {
        contentSections.push(this.generateExamplesSection(content));
    }

    if (content.contextualScenarios) {
        contentSections.push(this.generateContextualScenariosSection(content));
    }

    if (content.commonMisconceptions || content.misconceptions) {
        contentSections.push(this.generateMisconceptionsSection(content));
    }

    if (this.includeExperiments && content.relatedExperiments) {
        contentSections.push(this.generateRelatedExperimentsSection(content));
    }

    if (content.metacognitivePrompts) {
        contentSections.push(this.generateMetacognitiveSection(content));
    }

    if (content.assessmentQuestions) {
        contentSections.push(this.generateAssessmentSection(content));
    }

    if (content.applications) {
        contentSections.push(this.generateApplicationsSection(content));
    }

    return contentSections.filter(section => section !== null);
}

// ========================================
// REDOX-SPECIFIC SECTION GENERATORS
// ========================================

generateRedoxFundamentalsSection(content) {
    if (!content.oxidationStateRules && !content.balancingMethods) return null;
    return {
        sectionType: 'redox_fundamentals',
        title: 'Oxidation States and Half-Equation Balancing',
        oxidationStateRules: content.oxidationStateRules || null,
        balancingMethods: content.balancingMethods || null,
        lesson: content.lesson?.balancingMethods || null,
        examples: content.examples || null
    };
}

generateOxidationStatesTableSection(content) {
    if (!content.commonOxidationStates) return null;
    return {
        sectionType: 'oxidation_states_table',
        title: 'Common Oxidation States of Key Elements',
        commonOxidationStates: content.commonOxidationStates,
        displayHint: 'table_with_colors'
    };
}

generateElectrochemicalCellsSection(content) {
    if (!content.standardElectrodePotentials && !content.cellPotentialCalculations && !content.danielCell) return null;
    return {
        sectionType: 'electrochemical_cells',
        title: 'Standard Electrode Potentials and Cell Calculations',
        standardElectrodePotentials: content.standardElectrodePotentials || null,
        cellPotentialCalculations: content.cellPotentialCalculations || null,
        danielCell: content.danielCell || null,
        keyFormulae: content.keyFormulae || null,
        workedExamples: content.workedExamples || null
    };
}

generateBatteryTypesSection(content) {
    if (!content.batteryTypes) return null;
    return {
        sectionType: 'battery_types',
        title: 'Battery and Fuel Cell Technologies',
        batteryTypes: content.batteryTypes,
        contextualConnection: 'Applications of electrochemical cell principles to energy storage'
    };
}

generateElectrolysisSection(content) {
    if (!content.faradaysLaws && !content.electrolysisOfMoltenSalts && !content.electrolysisOfAqueousSolutions) return null;
    return {
        sectionType: 'electrolysis',
        title: "Electrolysis and Faraday's Laws",
        faradaysLaws: content.faradaysLaws || null,
        electrolysisOfMoltenSalts: content.electrolysisOfMoltenSalts || null,
        electrolysisOfAqueousSolutions: content.electrolysisOfAqueousSolutions || null,
        selectiveDischarge: content.selectiveDischarge || null,
        keyFormulae: content.keyFormulae || null,
        workedExamples: content.workedExamples || null
    };
}

generateIndustrialApplicationsSection(content) {
    if (!content.industrialApplications) return null;
    return {
        sectionType: 'industrial_applications',
        title: 'Industrial Applications of Redox Chemistry',
        industrialApplications: content.industrialApplications,
        contextualNote: 'Real-world scale applications of electrolysis and redox principles'
    };
}

generateRedoxTitrationsSection(content) {
    if (!content.permanganateTitrations && !content.dichromateTitrations && !content.iodometricTitrations) return null;
    return {
        sectionType: 'redox_titrations',
        title: 'Redox Titration Methods',
        permanganateTitrations: content.permanganateTitrations || null,
        dichromateTitrations: content.dichromateTitrations || null,
        iodometricTitrations: content.iodometricTitrations || null,
        keyFormulae: content.keyFormulae || null,
        workedExamples: content.workedExamples || null
    };
}

generateCorrosionSection(content) {
    if (!content.mechanismOfIronRusting && !content.protectionMethods) return null;
    return {
        sectionType: 'corrosion_and_protection',
        title: 'Corrosion Mechanism and Protection Methods',
        mechanismOfIronRusting: content.mechanismOfIronRusting || null,
        protectionMethods: content.protectionMethods || null,
        protectionComparison: content.protectionComparison || null,
        economicAndEnvironmentalImpact: content.economicAndEnvironmentalImpact || null,
        workedExamples: content.workedExamples || null
    };
}

generateRedoxKeyFormulaeSection(content) {
    if (!content.keyFormulae) return null;
    return {
        sectionType: 'redox_key_formulae',
        title: 'Key Formulae for Redox Calculations',
        keyFormulae: content.keyFormulae,
        faradayConstant: content.faradayConstant || { value: 'F = 96,485 C mol⁻¹', meaning: 'Charge carried by one mole of electrons' }
    };
}
