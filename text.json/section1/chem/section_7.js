

initializeMisconceptionDatabase() 

this.commonMisconceptions = { 


particleModel: {
    'Particle Motion': [
        "Particles in a solid do not move — FALSE: solid particles vibrate continuously about their fixed positions; only at absolute zero (0 K) would particle motion theoretically cease",
        "At higher temperatures, all particles move faster — PARTIALLY FALSE: temperature determines the MEAN kinetic energy; at any given temperature, particles have a distribution of speeds (Maxwell-Boltzmann distribution); some move faster and some slower than the mean",
        "Particles in a liquid move faster than particles in a gas at the same temperature — FALSE: at the same temperature, gas particles have the same mean kinetic energy as liquid particles of the same mass; gas particles move more freely because intermolecular forces are negligible, but their mean speed is not necessarily higher",
        "Diffusion stops when equilibrium is reached — FALSE: random particle motion continues at equilibrium; the NET diffusion is zero (equal movement in all directions) but individual particles continue to move randomly"
    ],
    'Temperature and Heat': [
        "Temperature and heat are the same thing — FALSE: temperature is a measure of mean kinetic energy per particle; heat (thermal energy) is the total internal energy transferred due to a temperature difference; a large cold object can contain more thermal energy than a small hot object",
        "A higher temperature always means more heat energy in the substance — FALSE: a large mass at low temperature can have more total thermal energy than a small mass at high temperature; Q = mcΔT shows that both mass and temperature determine energy content"
    ]
},

statesOfMatter: {
    'State Properties': [
        "Liquids are compressible like gases — FALSE: liquids are nearly incompressible; liquid particles are in close contact and there is no significant space between them to compress; the bulk modulus of water is approximately 2.2 GPa",
        "Gases always have a lower density than liquids of the same substance — GENERALLY TRUE but not universal: at very high pressures, gas density increases significantly; supercritical fluids (above critical temperature and pressure) have gas-like and liquid-like properties simultaneously",
        "Ice is less dense than water because it contains air bubbles — FALSE: pure ice (without air bubbles) is still less dense than liquid water (917 vs 1000 kg/m³) due to the open hexagonal lattice structure of hydrogen-bonded ice",
        "A solid always becomes a liquid before becoming a gas — FALSE: sublimation (solid → gas directly) occurs for substances such as iodine, dry ice (CO₂), and ammonium chloride; whether a substance passes through a liquid phase depends on the pressure and temperature conditions"
    ],
    'Particle Arrangement': [
        "Liquid particles are arranged randomly and far apart — PARTIALLY FALSE: liquid particles are close together (similar spacing to a solid) but in an irregular arrangement; it is only the arrangement that is random, not the spacing",
        "Gas particles are stationary between collisions — FALSE: gas particles travel in straight lines at high speed between collisions; they are not stationary — they are moving at typically hundreds of metres per second"
    ]
},

changesOfState: {
    'Latent Heat': [
        "The temperature rises during melting because energy is being supplied — FALSE: during melting at constant pressure, the temperature remains constant; all energy input goes to breaking intermolecular forces (latent heat of fusion), not to increasing kinetic energy",
        "Latent heat is 'wasted' energy because it does not raise the temperature — FALSE: latent heat does essential work — it overcomes intermolecular forces to change the state of the substance; it is not wasted but rather stored as potential energy in the increased particle separation",
        "The specific latent heat of fusion and vaporisation of the same substance are similar in value — FALSE: for water, L_v (2,260,000 J/kg) is approximately 6.8 times larger than L_f (334,000 J/kg); vaporisation requires full particle separation while fusion only disrupts the regular lattice",
        "Q = mcΔT should be used to calculate the energy for a change of state — FALSE: during a change of state ΔT = 0; using Q = mcΔT gives zero, which is wrong; Q = mL must be used for changes of state"
    ],
    'Evaporation vs Boiling': [
        "Evaporation and boiling are the same process — FALSE: evaporation occurs only at the liquid surface at any temperature below the boiling point; boiling occurs throughout the entire liquid only at the boiling point",
        "Boiling point is a fixed temperature for all conditions — FALSE: boiling point depends on external pressure; at lower pressure (e.g. at altitude), the boiling point decreases; in a pressure cooker, it increases",
        "Evaporation cools a liquid because the liquid loses heat to the environment — FALSE: evaporation cools the liquid because the most energetic particles escape, reducing the mean kinetic energy of the remaining particles — it is an internal redistribution of energy, not heat loss to the environment"
    ]
},

gasLaws: {
    'Temperature Conversion': [
        "Temperature in Celsius can be used in gas law calculations — FALSE: gas laws are based on absolute (Kelvin) temperature; using Celsius produces mathematically incorrect results because 0°C is not the same as zero particle motion; conversion T(K) = T(°C) + 273 is mandatory",
        "Doubling the temperature in Celsius doubles the gas volume at constant pressure — FALSE: doubling the Celsius temperature does not double the Kelvin temperature (e.g. 20°C = 293 K; doubled Celsius = 40°C = 313 K — not doubled in Kelvin); volume doubles only when the Kelvin temperature doubles"
    ],
    'Gas Law Application': [
        "Boyle's law states that pressure and volume are directly proportional — FALSE: Boyle's law states they are INVERSELY proportional (pV = constant); when volume increases, pressure decreases and vice versa",
        "The combined gas law can be used when the amount of gas changes — FALSE: all three gas laws (and the combined form) apply only to a FIXED MASS of gas; if gas escapes or is added, the ideal gas equation (pV = nRT) must be used",
        "Absolute zero means the temperature cannot go any lower — TRUE in a theoretical sense but commonly misunderstood: absolute zero (0 K = −273°C) is the theoretical temperature at which all particle motion ceases; it is unattainable in practice but scientists have cooled matter to within billionths of a degree of it",
        "Gas pressure depends only on the speed of particles — INCOMPLETE: pressure depends on both the speed (force per collision) and the frequency of collisions with the walls; both increase with temperature, and frequency also increases when volume decreases"
    ]
},

diffusionAndPressure: {
    'Diffusion': [
        "Heavier gases diffuse faster than lighter gases — FALSE: Graham's law states that lighter gases (lower molar mass) diffuse faster; at the same temperature, equal mean kinetic energies mean lighter particles must move faster (½mv² = constant → v ∝ 1/√m)",
        "Diffusion only occurs in gases — FALSE: diffusion occurs in liquids (e.g. a drop of dye spreads through water) and even in some solids (very slowly); diffusion occurs wherever there is particle motion and a concentration gradient",
        "Diffusion occurs because particles are 'attracted' to lower concentration regions — FALSE: diffusion is driven purely by random particle motion; there is no force attracting particles to lower concentration; the net movement is a statistical outcome of random motion when more particles are on one side than the other",
        "Diffusion is complete when all particles are on the same side — FALSE: diffusion reaches equilibrium when particles are uniformly distributed throughout the available space, not concentrated on one side"
    ],
    'Gas Pressure': [
        "Gas pressure decreases when temperature increases at constant volume — FALSE: higher temperature → faster particles → more frequent and more forceful collisions with walls → higher pressure (pressure-temperature law: p ∝ T at constant volume)",
        "A gas exerts pressure only on the walls of the container, not on other gas particles — FALSE: gas particles exert forces on each other during collisions; it is the collisions with the container walls that we measure as pressure, but particle-particle collisions are also occurring continuously"
    ]
},

reactionRates: {
    'Collision Theory': [
        "Reaction order equals the stoichiometric coefficient in the balanced equation — FALSE: reaction orders are always determined experimentally; they have no necessary relationship to stoichiometric coefficients and can only coincidentally agree",
        "Increasing temperature increases rate purely by increasing the number of collisions — INCOMPLETE/MISLEADING: the dominant effect is the dramatic increase in the fraction of molecules with E ≥ Eₐ (Boltzmann factor); the increase in collision frequency from higher molecular speeds is a much smaller secondary effect",
        "A higher concentration always means a faster rate regardless of the order — FALSE: for a zero-order reactant, doubling concentration has no effect on rate; the concentration effect depends entirely on the order with respect to that species",
        "Rate and speed of reaction are the same thing — FALSE: rate has specific units (mol dm⁻³ s⁻¹) and is defined as the change in concentration per unit time; 'speed' is informal and imprecise"
    ],
    'Rate Equations': [
        "The units of k are always s⁻¹ — FALSE: units of k depend on the overall order of reaction; they are mol dm⁻³ s⁻¹ (zero order), s⁻¹ (first order), mol⁻¹ dm³ s⁻¹ (second order), mol⁻² dm⁶ s⁻¹ (third order)",
        "The half-life of any reaction is constant — FALSE: only first-order reactions have a constant half-life (t½ = 0.693/k); zero-order half-life decreases over time; second-order half-life increases over time",
        "Changing temperature changes the order of the reaction — FALSE: temperature changes the rate constant k (via the Arrhenius equation) but does not change the reaction orders m and n, which are fixed properties of the mechanism"
    ]
},

activationEnergy: {
    'Maxwell–Boltzmann Distribution': [
        "At higher temperature, the Maxwell–Boltzmann curve becomes taller — FALSE: the curve becomes broader and the peak moves lower; the total area is conserved (represents all molecules); a taller curve at the same peak position would require more molecules",
        "The Maxwell–Boltzmann distribution shows the range of speeds of molecules — PARTIALLY IMPRECISE: strictly it shows the distribution of kinetic energies (or speeds); at A-Level it is usually presented as an energy distribution; both are valid Maxwell–Boltzmann distributions but they have different shapes",
        "A catalyst shifts the Maxwell–Boltzmann curve — FALSE: a catalyst does not change the temperature of the system and therefore does not change the Maxwell–Boltzmann distribution; it lowers Eₐ so that a larger fraction of the unchanged distribution exceeds the new threshold",
        "Adding a catalyst increases the number of molecules above Eₐ — IMPRECISELY STATED: a catalyst lowers Eₐ so that more molecules from the existing distribution exceed the new, lower threshold; it does not change the distribution or create new high-energy molecules"
    ],
    'Energy Profile Diagrams': [
        "A catalyst changes ΔH on the energy profile diagram — FALSE: a catalyst only lowers the transition state peak (Eₐ); the energy levels of reactants and products, and therefore ΔH, are completely unchanged",
        "Eₐ(reverse) = Eₐ(forward) − ΔH — INCORRECT SIGN CONVENTION IN SOME CASES: the correct relationship is Eₐ(reverse) = Eₐ(forward) − ΔH for an exothermic reaction, but for an endothermic reaction Eₐ(reverse) = Eₐ(forward) − ΔH where ΔH is positive and Eₐ(reverse) < Eₐ(forward). General formula: Eₐ(reverse) = Eₐ(forward) − ΔH (where ΔH carries its sign). Always derive from the diagram rather than memorising a formula"
    ]
},

equilibrium: {
    'Le Chatelier\'s Principle': [
        "A catalyst shifts the equilibrium position toward products — FALSE: a catalyst increases the rate of both forward and reverse reactions equally; the equilibrium position is unchanged; only the time to reach equilibrium decreases",
        "Increasing pressure always shifts equilibrium toward products — FALSE: pressure shifts equilibrium toward the side with fewer moles of gas; if products are on the side with more gas moles, increasing pressure shifts equilibrium toward reactants",
        "Adding more reactant to an equilibrium mixture increases Kc — FALSE: Kc depends only on temperature; adding reactant shifts the position of equilibrium (more product formed) but Kc is numerically unchanged",
        "At equilibrium, forward and reverse rates are zero — FALSE: equilibrium is a dynamic state; both reactions continue at equal, non-zero rates; it is only the NET rate that is zero"
    ],
    'Equilibrium Constant': [
        "Pure solids appear in the Kc expression with concentration written as a constant — FALSE: pure solids and pure liquids are omitted entirely from Kc expressions because their concentration (activity) is defined as 1 by convention",
        "A large Kc means the reaction proceeds quickly — FALSE: Kc is a thermodynamic quantity relating to the position of equilibrium (how far); rate is controlled by Eₐ (kinetics). A large Kc could describe a thermodynamically favourable but kinetically very slow reaction",
        "Kc and Kp always have the same value — FALSE: Kp = Kc(RT)^Δn; they are equal only when Δn (change in moles of gas) = 0"
    ]
},

enthalpyEntropy: {
    'Enthalpy': [
        "Enthalpy change equals the bond energy of the molecule — FALSE: ΔH for a reaction is the energy difference between the total bonds broken (reactants) and total bonds formed (products); it is not a property of a single molecule",
        "An exothermic reaction always has a lower activation energy than an endothermic one — FALSE: Eₐ and ΔH are independent; an exothermic reaction can have a very high Eₐ (e.g. thermite at room temperature); an endothermic reaction can have a low Eₐ",
        "Bond enthalpy calculations give exact values of ΔH — FALSE: bond enthalpies are averages over a range of molecular environments; they give approximate ΔH values; exact values require Hess's law cycles using standard enthalpies of formation or combustion"
    ],
    'Entropy': [
        "Entropy is the same as disorder — SIMPLIFIED/IMPRECISE: entropy is more precisely the dispersal of energy among the available microstates of a system; 'disorder' is a useful intuitive guide but can be misleading for some systems (e.g. dissolving a gas in liquid may increase 'disorder' but decrease entropy of the gas phase)",
        "ΔS is always positive for spontaneous reactions — FALSE: many spontaneous reactions have ΔS < 0 (e.g. crystallisation, gas absorption); spontaneity requires ΔG < 0, which can be achieved with negative ΔS if ΔH is sufficiently negative"
    ],
    'Gibbs Free Energy': [
        "ΔG < 0 means the reaction occurs quickly — FALSE: ΔG determines thermodynamic feasibility (will it happen?); rate is determined by Eₐ (how fast?); these are entirely independent. Diamond converting to graphite has ΔG < 0 but proceeds at a negligible rate",
        "If ΔG > 0 the reaction cannot occur under any conditions — FALSE: ΔG > 0 means the reaction is non-spontaneous under standard conditions (298 K, 1 mol dm⁻³, 100 kPa); it may become spontaneous at different temperatures (if ΔS > 0, the reaction becomes spontaneous when T > ΔH/ΔS)",
        "The units of ΔG and ΔH are the same but ΔS has different units — CORRECT IN FACT BUT A TRAP: ΔH and ΔG are both in kJ/mol; ΔS is in J K⁻¹ mol⁻¹. The trap is in ΔG = ΔH − TΔS: ΔS must be converted from J to kJ (divide by 1000) before subtracting — failure to do this is the most common numerical error in this topic"
    ]
},

gibbsFreeEnergy: {
    'Spontaneity and Feasibility': [
        "A thermodynamically spontaneous reaction will always proceed at an observable rate — FALSE: spontaneous (ΔG < 0) refers only to the direction a reaction tends; kinetics (Eₐ) determines whether it proceeds at a measurable rate. Many spontaneous reactions are kinetically inert under normal conditions",
        "Equilibrium constant K is dimensionless — TECHNICALLY CORRECT but often ignored at A-Level: thermodynamically, K is defined using activities (dimensionless quantities), so K is dimensionless. However at A-Level, Kc and Kp are typically quoted with units derived from concentration and pressure terms — be consistent with the convention used",
        "ΔG = ΔG° for all conditions — FALSE: ΔG° applies only at standard conditions (298 K, 1 mol dm⁻³, 100 kPa); ΔG = ΔG° + RT ln Q for non-standard conditions, where Q is the reaction quotient. At equilibrium Q = K and ΔG = 0"
    ]
},

redoxDefinitions: {
    'Oxidation and Reduction Definitions': [
        "Oxidation means gaining oxygen — PARTIALLY TRUE but insufficient: this definition applies only to reactions with oxygen; the A-Level definition is loss of electrons (or increase in oxidation state), which applies universally to all redox reactions including those with no oxygen present",
        "Reduction means losing oxygen — PARTIALLY TRUE but insufficient: same limitation as above; the correct general definition is gain of electrons (or decrease in oxidation state)",
        "The oxidising agent is the species that is oxidised — FALSE: the oxidising agent IS reduced; it causes oxidation of the other species by accepting electrons; the reducing agent IS oxidised",
        "Oxidation and reduction can occur independently in separate reactions — FALSE: oxidation and reduction are always simultaneous — electrons lost by one species must immediately be gained by another; there is no 'free' electron pool"
    ],
    'Agent Identification': [
        "The oxidising agent gains electrons from the other species — TRUE but commonly stated the wrong way around: the oxidising agent accepts electrons, causing the other species to be oxidised (electron donor = reducing agent; electron acceptor = oxidising agent)",
        "A species can be an oxidising agent in one reaction and a reducing agent in another — TRUE and important: for example, H₂O₂ acts as an oxidising agent with Fe²⁺ but as a reducing agent with MnO₄⁻; students should not treat oxidising/reducing character as fixed properties of a compound"
    ]
},

oxidationStates: {
    'Assignment Errors': [
        "Oxygen always has an oxidation state of −2 — FALSE: oxygen is −1 in peroxides (H₂O₂, Na₂O₂, BaO₂); +2 in OF₂ (F is more electronegative and always −1); −½ in superoxides (KO₂); students who apply −2 universally will incorrectly identify H₂O₂ as a normal water-like species",
        "Hydrogen always has an oxidation state of +1 — FALSE: hydrogen is −1 in metal hydrides (NaH, CaH₂, LiAlH₄); this exception is critical for recognising LiAlH₄ as a reducing agent",
        "The oxidation state of an element in a neutral compound can be non-integer — TRUE in average terms (e.g. Fe₃O₄ gives average O.S. of Fe = +8/3) but the actual individual oxidation states are always integers; non-integer values signal a mixed-valence compound, not a genuine fractional O.S.",
        "A positive oxidation state means the atom has lost electrons — CAREFUL: oxidation state is a formal bookkeeping device, not a description of actual electron density; in covalent compounds, no electrons are fully transferred; the oxidation state is assigned AS IF the more electronegative atom takes both electrons",
        "The sum of oxidation states in any species equals zero — FALSE: it equals zero only for neutral molecules; for polyatomic ions, the sum equals the ionic charge; applying the neutral rule to ions gives wrong values"
    ],
    'Identifying Redox from O.S. Changes': [
        "If an element appears in both reactants and products with the same oxidation state, it is not involved in the redox — TRUE: unchanged O.S. = spectator in the redox process; this is important in identifying which species are the actual oxidant and reductant in complex equations",
        "An increase in oxidation state means electrons were gained — FALSE: INCREASE in O.S. = oxidation = electron LOSS; this reversal is one of the most frequent exam errors"
    ]
},

redoxEquations: {
    'Half-Equation Balancing Errors': [
        "H atoms in half-equations are balanced by adding H₂ or H — FALSE: in acid, hydrogen is balanced by adding H⁺; in alkaline conditions, by adding H₂O and OH⁻; never balance H by adding free H atoms or H₂ molecules",
        "Electrons are added to the side that is more negative (to make it more positive) — INCORRECT REASONING: electrons are added to the side that is more positive in order to equalise the charge; add e⁻ to the side with greater positive charge (or less negative charge)",
        "After combining two half-equations, any electrons remaining can be ignored — FALSE: if electrons have not fully cancelled, the scaling was wrong; there must be zero electrons in the final overall equation; any remaining e⁻ indicates an error in the combination step",
        "Half-equations in acid use OH⁻ — FALSE: in acid conditions, use H⁺ and H₂O; OH⁻ is used in alkaline conditions; mixing these gives wrong products and wrong charge balance"
    ],
    'Disproportionation': [
        "Disproportionation can occur if two different compounds of the same element react — FALSE: true disproportionation requires the SAME species (same compound, same oxidation state of the element) to be both oxidised and reduced; two different compounds of the same element reacting is comproportionation (the reverse)",
        "In disproportionation, the element must go to +1 and −1 as the products — FALSE: the products can be any two different oxidation states; what is required is that BOTH are different from the starting O.S. and one is higher, one is lower (e.g. Cu⁺ → Cu⁰ and Cu²⁺, not necessarily +1/−1)"
    ]
},

electrochemistry: {
    'E° and Feasibility': [
        "E°cell > 0 means the reaction will definitely occur at a measurable rate — FALSE: E°cell predicts thermodynamic feasibility only; kinetic barriers (high activation energy) may prevent the reaction from proceeding at a measurable rate even when E°cell is strongly positive",
        "E°cell = E°(anode) − E°(cathode) — FALSE: the correct formula is E°cell = E°(cathode) − E°(anode); cathode = higher E° = reduction; reversing gives a negative value and the wrong feasibility conclusion",
        "A half-reaction with a more negative E° will always act as the cathode — FALSE: the more negative E° half-reaction has less tendency to be reduced — it runs as oxidation (anode); the half-reaction with more positive E° runs as reduction (cathode)",
        "E° values change if you multiply the half-equation by a coefficient — FALSE: E° is an intensive property (per unit electron); it does not change if the half-equation is multiplied by 2 or 3; only the number of electrons changes, not the potential",
        "Standard conditions for E° measurement include any acid concentration — FALSE: standard conditions specifically require 1 mol dm⁻³ for all ions in solution; changing H⁺ concentration (e.g. in permanganate half-reaction) alters the actual electrode potential, though E° remains fixed as a reference value"
    ],
    'Cell Construction': [
        "The salt bridge completes the electron flow circuit — FALSE: electrons flow through the external wire; the salt bridge completes the IONIC circuit, allowing ions to move between solutions to maintain charge neutrality (prevent charge build-up that would stop the reaction)",
        "Any electrolyte can be used in the salt bridge — MOSTLY TRUE but with important exceptions: the salt bridge electrolyte must not react with either half-cell solution; KNO₃ and KCl are common choices; KCl cannot be used if either half-cell contains Ag⁺ (AgCl would precipitate) or Pb²⁺"
    ]
},

redoxTitrations: {
    'Practical Errors': [
        "HCl can be used to acidify KMnO₄ solutions in titrations — FALSE: Cl⁻ is oxidised by MnO₄⁻ (2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂ + 8H₂O), introducing a side reaction that consumes KMnO₄ and gives falsely high apparent titration volumes; always use dilute H₂SO₄",
        "Starch indicator should be added at the start of an iodine-thiosulfate titration — FALSE: at high I₂ concentrations, the starch-iodine complex is very stable and may not fully dissociate at the endpoint, giving a falsely late endpoint; add starch only when the solution is pale yellow (nearly all I₂ consumed)",
        "The endpoint of a KMnO₄ titration is when the solution becomes completely colourless — FALSE: the endpoint is the first permanent pale pink colour — indicating the first drop of excess KMnO₄; a perfectly colourless solution at the endpoint would mean the titration was stopped slightly early",
        "The molar ratio in all redox titrations is 1:1 — FALSE: the ratio depends on the balanced equation; for MnO₄⁻/Fe²⁺ it is 1:5; for Cr₂O₇²⁻/Fe²⁺ it is 1:6; for I₂/S₂O₃²⁻ it is 1:2; for MnO₄⁻/C₂O₄²⁻ it is 2:5; always derive the ratio from the balanced equation, not from the formulas alone"
    ]
},

ionicBonding: {
    'Electron Transfer and Structure': [
        "Ionic bonds involve shared electrons like covalent bonds — FALSE: ionic bonding involves complete electron transfer; the resulting ions are held by electrostatic attraction between opposite charges; there is no electron sharing",
        "Ionic compounds always have very high melting points — OVERSIMPLIFICATION: melting point depends on lattice enthalpy, which depends on both ion charges AND ion radii; NaI (mp 661°C) has a much lower melting point than MgO (mp 2852°C) because Mg²⁺/O²⁻ have higher charges and smaller radii; not all ionic compounds are refractory",
        "The formula of an ionic compound shows the actual number of ions — FALSE: the formula (e.g. NaCl, MgCl₂) shows the simplest whole-number ratio of ions in the lattice; there are no discrete NaCl molecules — the lattice extends indefinitely in 3D",
        "Ionic compounds dissolve in all solvents — FALSE: ionic compounds dissolve preferentially in polar solvents (water); they are generally insoluble in non-polar solvents (hexane, CCl₄) because non-polar solvents cannot solvate (hydrate) the ions sufficiently to compensate for lattice disruption"
    ],
    'Conductivity': [
        "Solid ionic compounds conduct electricity — FALSE: in the solid state, ions are fixed in lattice positions and cannot migrate under an applied voltage; conduction requires free mobile charge carriers",
        "Ionic compounds always conduct when dissolved in water — MOSTLY TRUE but with exceptions: strongly ionic compounds dissociate completely; some ionic compounds hydrolyse or have low solubility, reducing conductivity; never state this as an absolute rule without qualification"
    ]
},

covalentBonding: {
    'Lewis Structures and Electron Counting': [
        "Double bonds count as two electron pairs in VSEPR — FALSE: in VSEPR, a double bond (or triple bond) counts as ONE electron group (one bonding region); only the number of bonding regions and lone pairs determines shape; π bonds do not contribute additional repulsion in VSEPR",
        "All atoms in covalent molecules obey the octet rule — FALSE: exceptions include: electron-deficient molecules (BF₃ — B has 6 electrons only); expanded octets (PCl₅, SF₆ — P and S can accommodate 10 or 12 electrons using d orbitals); and odd-electron radicals (NO, NO₂)",
        "Dative bonds are weaker than ordinary covalent bonds — FALSE: once formed, a dative bond is identical in strength and length to an ordinary covalent bond of the same type; the distinction is only in the origin of the electrons (both from one atom), not in the resulting bond properties"
    ],
    'Molecular Shape and Polarity': [
        "A molecule with polar bonds is always a polar molecule — FALSE: the molecule must have both polar bonds AND asymmetric geometry (non-cancelling dipoles); CO₂ and CCl₄ have polar bonds but are non-polar because their bond dipoles cancel by symmetry",
        "H₂O has a tetrahedral shape — FALSE: 'tetrahedral' describes the electron pair geometry around O (4 pairs); the molecular shape (defined by atom positions only) is bent/V-shaped; shape is determined by atom arrangement, not electron pair arrangement",
        "The bond angle in all molecules with four electron pairs around the central atom is 109.5° — FALSE: 109.5° is the ideal angle for four bonding pairs with NO lone pairs (e.g. CH₄); lone pairs reduce the angle below this ideal; NH₃ has 107°, H₂O has 104.5°"
    ]
},

metallicBonding: {
    'Electron Sea Model': [
        "Metals conduct because they have 'free electrons' that escape from atoms — IMPRECISE: valence electrons are delocalised across the metallic lattice but are not 'free' in the sense of escaping; they remain within the metal structure, moving under an applied potential difference",
        "All metals have the same strength of metallic bonding — FALSE: metallic bond strength varies enormously (Na melts at 98°C; W at 3422°C); it depends on the number of delocalised electrons per atom and the charge density of the cation",
        "Metals are brittle like ionic compounds — FALSE: metals are malleable and ductile because metallic bonds are non-directional; layers of cations can slide past each other without breaking the bonds (the electron sea reforms around ions in new positions); ionic crystals shatter because sliding brings like charges into alignment, causing electrostatic repulsion"
    ],
    'Trends': [
        "Melting point always increases across a period for metals — OVERSIMPLIFICATION: in Period 3, melting point increases from Na to Al (more delocalised electrons); in Period 4 and beyond, transition metal melting points peak in the middle of the d-block (maximum unpaired d electrons available for bonding); the simple Group 1–3 trend does not extend to transition metals"
    ]
},

intermolecularForces: {
    'Hydrogen Bonding': [
        "Any molecule containing hydrogen can form hydrogen bonds — FALSE: H-bonding requires H bonded specifically to N, O, or F; H bonded to C, S, P, or other atoms does not form hydrogen bonds; alkanes (C–H bonds only) have no H-bonding despite containing many H atoms",
        "Hydrogen bonding occurs within the H₂O molecule itself — CONFUSED TERMINOLOGY: the O–H bond within a water molecule is a covalent bond (intramolecular); hydrogen bonding is an intermolecular force occurring BETWEEN different water molecules (or between different regions of the same large molecule in intramolecular H-bonding); they must not be confused",
        "Hydrogen bonds are a type of covalent bond — FALSE: hydrogen bonds are intermolecular forces (~5–40 kJ/mol); covalent bonds are intramolecular bonds (~200–500 kJ/mol); hydrogen bonds are approximately 10× weaker than typical covalent bonds"
    ],
    'London Forces': [
        "London dispersion forces only act between non-polar molecules — FALSE: London forces act between ALL molecules regardless of polarity; polar molecules experience London forces IN ADDITION to dipole–dipole and/or H-bonding forces; the total intermolecular interaction is the sum of all applicable forces",
        "London forces are negligible — FALSE: London forces are the dominant intermolecular force in large molecules; for heavy noble gases (Xe), large alkanes (C₁₀H₂₂), and iodine (I₂), London forces are strong enough to make the substance a liquid or solid at room temperature despite having no dipole",
        "Branching increases London dispersion forces — FALSE: branching reduces surface area of molecular contact; London forces depend on the area of contact between molecules (more contact = more simultaneous induced dipoles); branched molecules have smaller surface area and therefore WEAKER London forces than straight-chain isomers of the same molecular formula"
    ],
    'Structure and Properties Confusion': [
        "Breaking intermolecular forces means breaking covalent bonds — FALSE: when simple molecular substances melt or boil, only the intermolecular forces (London, dipole–dipole, H-bonds) are overcome; the covalent bonds within each molecule remain fully intact; this is the single most frequently made error in this entire topic",
        "Graphite has a high melting point because it has a giant ionic structure — FALSE: graphite is a giant COVALENT structure (all bonds are covalent C–C σ bonds within layers and delocalised π bonds); it has no ionic character; its high melting point arises because millions of covalent bonds must be broken simultaneously"
    ]
},

structureAndProperties: {
    'Misattributing Properties to Wrong Structure Type': [
        "All solids with high melting points are ionic — FALSE: giant covalent structures (diamond >3500°C, SiO₂ 1710°C) have very high melting points; some metals also have very high melting points (W 3422°C); a high melting point alone does not identify the structure type — conductivity and solubility must also be tested",
        "All non-conductors are simple molecular substances — FALSE: diamond and SiO₂ are giant covalent structures that do not conduct; they have very high melting points unlike simple molecular substances; graphite is an exception — it is a giant covalent structure that DOES conduct along its layers",
        "Solubility in water indicates ionic bonding — FALSE: many molecular substances dissolve in water (sugar, ethanol, ammonia) because they can form hydrogen bonds or dipole interactions with water; solubility in water is not diagnostic of ionic bonding; you must also test conductivity of the solution — ionic solutions conduct, molecular solutions do not (unless the solute is an acid/base that ionises)"
    ]
},

subatomicParticles: {
    'Particle Properties': [
        "Electrons have significant mass and contribute meaningfully to atomic mass — FALSE: electrons have relative mass 1/1836 ≈ 0.0005; their contribution to atomic mass is negligible; all practical atomic mass calculations use protons + neutrons only",
        "Protons and neutrons have exactly the same mass — APPROXIMATELY TRUE but technically false: proton relative mass = 1.00728; neutron relative mass = 1.00867; the neutron is very slightly heavier; for A-Level both are treated as relative mass 1",
        "The atomic number changes when an ion forms — FALSE: atomic number (proton number, Z) is fixed for an element and never changes in chemical reactions; only the number of electrons changes when ions form",
        "Isotopes of the same element are in different positions on the periodic table — FALSE: isotopes are placed in the same position because the periodic table is arranged by proton number, not mass number; all isotopes of an element have the same Z"
    ],
    'Nuclear Notation': [
        "The top number in nuclear notation is the proton number — FALSE: the top-left number is the mass number (A = protons + neutrons); the bottom-left number is the atomic number (Z = protons only)",
        "Neutron number is written directly in nuclear notation — FALSE: neutron number is not shown directly; it must be calculated as N = A − Z from the numbers that are shown"
    ]
},

electronicConfiguration: {
    'Filling Rules': [
        "Electrons fill orbitals in the order 1, 2, 3, 4 without distinction of subshell — FALSE: electrons fill in order of increasing subshell energy: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p — the 4s fills before 3d, which is not the same as filling shell 4 before shell 3",
        "Hund's rule means electrons always pair up as soon as possible — FALSE: Hund's rule states the opposite — degenerate orbitals are occupied singly with parallel spins before any pairing occurs; electrons pair only when all degenerate orbitals are singly occupied",
        "Pauli exclusion principle means no two electrons can be in the same atom — FALSE: it means no two electrons in the same atom can have the same set of four quantum numbers; in practice, each orbital holds at most 2 electrons and they must have opposite spins",
        "The noble gas core shorthand [Ar] includes the 3d electrons — FALSE: [Ar] represents exactly the configuration of argon: 1s² 2s² 2p⁶ 3s² 3p⁶; the 3d electrons in transition metals are written explicitly after [Ar]"
    ],
    'Transition Metal Configurations': [
        "When transition metals form ions, 3d electrons are removed before 4s electrons — FALSE: this is the opposite of the correct rule; 4s electrons are removed first (from the highest principal quantum number), then 3d electrons; Fe²⁺ is [Ar] 3d⁶ not [Ar] 3d⁴ 4s²",
        "All transition metals follow the Aufbau filling order for their neutral atom configuration — FALSE: chromium (Z=24) has [Ar] 3d⁵ 4s¹ rather than [Ar] 3d⁴ 4s², and copper (Z=29) has [Ar] 3d¹⁰ 4s¹ rather than [Ar] 3d⁹ 4s²; these exceptions arise from the extra stability of half-filled and fully-filled 3d subshells",
        "An element with a filled outer shell is always chemically inert — FALSE: noble gases are inert due to their filled outer shells, but transition metals with filled 3d subshells (e.g. Zn: [Ar] 3d¹⁰ 4s²) are chemically reactive; full d subshells do not confer inertness"
    ]
},

ionisationEnergy: {
    'Definition and Equation Errors': [
        "Ionisation energy is the energy to remove an electron from any atom — INCOMPLETE: the definition requires the atom to be gaseous and in its ground state; liquid or solid atoms involve additional energy terms; the equation must include state symbol (g) for all species",
        "The second ionisation energy refers to removing an electron from a different atom — FALSE: all successive ionisation energies refer to the same atom; the second IE removes the second electron from the same species that was singly ionised: X⁺(g) → X²⁺(g) + e⁻",
        "Ionisation energy can be exothermic — FALSE: removing an electron always requires energy input (endothermic); first ionisation energy is always positive (ΔH > 0); the only exothermic electron process is electron affinity (adding an electron)"
    ],
    'Trend Explanations': [
        "The Mg→Al drop in IE is caused by electron-electron repulsion — FALSE: the cause is that Al's 3p¹ electron is in a higher-energy subshell (3p > 3s in energy) and is additionally shielded by the 3s² electrons; repulsion is not the primary factor for this specific anomaly",
        "IE decreases down a group because nuclear charge decreases — FALSE: nuclear charge increases down a group; IE decreases because the increase in shielding from additional inner electron shells and the increase in atomic radius (outer electrons further from nucleus) outweigh the increased nuclear charge",
        "IE always increases across a period with no exceptions — FALSE: there are two systematic exceptions in every period: the drop from Group 2 to Group 3 (e.g. Mg to Al) and the drop from Group 5 to Group 6 (e.g. P to S); these are predictable and examinable",
        "A large jump in successive IE means the atom is changing to a different element — FALSE: the atom remains the same element; the large jump indicates that the next electron to be removed is from a shell much closer to the nucleus (inner shell), requiring far more energy"
    ]
},

isotopesAndMassSpectrometry: {
    'Isotope Concepts': [
        "Isotopes of the same element have different chemical properties — FALSE: chemical properties are determined by electron configuration, which depends only on proton number (Z); all isotopes of an element have the same Z and therefore the same electron configuration and identical chemical reactivity",
        "Relative atomic mass is always a whole number — FALSE: Ar is a weighted mean of isotopic masses; because most elements exist as mixtures of isotopes, Ar is almost never a whole number (e.g. Cl = 35.45, Cu = 63.55)",
        "An element can only have two isotopes — FALSE: many elements have three or more naturally occurring isotopes (e.g. oxygen has three: ¹⁶O, ¹⁷O, ¹⁸O; tin has ten)"
    ],
    'Mass Spectrometry Errors': [
        "Relative atomic mass from a mass spectrum is calculated by adding all m/z values and dividing by the number of peaks — FALSE: this is a simple mean and ignores abundance; the correct method is the weighted mean: Ar = Σ(m/z × abundance) ÷ Σ(abundance)",
        "The mass spectrum gives the mass of whole molecules directly — PARTIALLY TRUE only for molecular ions (M⁺); when fragmentation occurs, many peaks appear at m/z values lower than the molecular mass, corresponding to fragment ions; the molecular ion peak (M⁺) gives the molecular mass only if it is visible and identifiable",
        "Ionisation in mass spectrometry involves adding electrons to the sample — FALSE: electron ionisation removes an electron from the sample atom/molecule (using high-energy bombardment electrons) to produce a positive ion M⁺; the sample loses an electron",
        "Heavier ions are deflected more in the magnetic field of a mass spectrometer — FALSE: heavier ions are deflected LESS (larger radius of curvature r ∝ √m for ions with the same charge and kinetic energy); lighter ions follow a tighter curve and reach the detector at a lower magnetic field strength"
    ]
},

periodicTrends: {
    'Shielding and Effective Nuclear Charge': [
        "Shielding increases uniformly with each additional electron — FALSE: electrons in the same subshell shield each other very poorly; shielding is most effective from inner shells (n−1 and below); adding electrons to the same shell adds very little extra shielding while the nuclear charge increases — this is why IE generally increases across a period",
        "Effective nuclear charge is the same as the atomic number — FALSE: effective nuclear charge (Z_eff) = Z − shielding constant; it is always less than Z for any electron except the 1s electron in hydrogen; Z_eff is the net charge experienced by a specific electron after accounting for repulsion from all inner electrons",
        "All electrons in the same shell experience the same effective nuclear charge — APPROXIMATELY TRUE for s and p electrons, but false for d electrons relative to s/p electrons; 3d electrons have a more complex radial distribution and experience a different effective nuclear charge than 3s or 3p electrons"
    ]
},


alcoholsAndPhenols: {
    'Oxidation Reactions': [
        "Tertiary alcohols react slowly with dichromate — FALSE: tertiary alcohols do not react at all with acidified dichromate; there is no H atom on the C–OH carbon for oxidation to occur; the orange colour persists unchanged",
        "Reflux and distillation give the same oxidation product from a primary alcohol — FALSE: distillation removes the aldehyde product as it forms (preventing over-oxidation); reflux keeps the aldehyde in contact with excess [O], driving oxidation to the carboxylic acid; the conditions, not the reagent, determine the product",
        "All alcohols are oxidised to carboxylic acids by acidified dichromate — FALSE: secondary alcohols are oxidised only to ketones (which resist further oxidation under these conditions); tertiary alcohols are not oxidised at all",
        "The orange-to-green colour change of dichromate is a test specific to alcohols — FALSE: the colour change indicates any reducing agent has reacted; aldehydes also turn dichromate green (they are further oxidised to carboxylic acids)"
    ],
    'Phenol vs Alcohol Distinction': [
        "Phenol and ethanol have similar acid strengths because both react with sodium metal — FALSE: both react with Na (any –OH compound does), but phenol (pKa 10) is ~10⁶ times more acidic than ethanol (pKa 16); the observation is identical but the extent of ionisation is vastly different",
        "Phenol reacts with NaOH because it is an alcohol — FALSE: simple aliphatic alcohols do NOT react with NaOH (too weakly acidic); phenol reacts because delocalisation of its negative charge into the aromatic ring stabilises the phenoxide ion, making phenol sufficiently acidic to donate H⁺ to a strong base",
        "Phenol decolourises bromine water by the same mechanism as alkenes — FALSE: alkenes react by electrophilic addition across the C=C; phenol reacts by electrophilic aromatic substitution (the –OH group activates the ring, making three H atoms replaceable by Br at ortho and para positions — producing tribromophenol)"
    ]
},

halogenoalkanes: {
    'Mechanism and Rate': [
        "C–F bonds are the most reactive in nucleophilic substitution because they are the most polar — FALSE: C–F is the strongest bond (484 kJ/mol) and the hardest to break; despite being most polarised, fluoroalkanes are the least reactive toward nucleophilic substitution; bond enthalpy dominates over polarity in determining reactivity",
        "SN2 can occur at tertiary carbons if the nucleophile is sufficiently strong — FALSE: SN2 requires back-side attack at the carbon being displaced; three alkyl groups around a tertiary carbon create steric hindrance that physically blocks approach of any nucleophile; SN2 does not occur at tertiary centres regardless of nucleophile strength",
        "SN1 and SN2 are alternative descriptions of the same reaction — FALSE: they are mechanistically distinct — SN1 proceeds via a carbocation intermediate in two steps; SN2 is a concerted one-step process; they differ in rate equation, stereochemical outcome, and substrate preference",
        "Aqueous and ethanolic KOH give the same product — FALSE: aqueous KOH (polar protic solvent, OH⁻ as nucleophile) favours substitution → alcohol product; ethanolic KOH (less polar solvent, OH⁻ acting as base) favours elimination → alkene product; the solvent fundamentally changes the product"
    ],
    'Stereochemistry': [
        "SN1 always produces one enantiomer — FALSE: SN1 proceeds via a planar carbocation that can be attacked from either face → racemic mixture (50:50 enantiomers) forms; obtaining a single enantiomer from SN1 is not possible without chiral control",
        "SN2 causes retention of configuration at the chiral centre — FALSE: SN2 causes inversion of configuration (Walden inversion); the nucleophile attacks from exactly opposite the leaving group, flipping the three remaining groups like an umbrella"
    ]
},

carbonylCompounds: {
    'Structural Distinction': [
        "Aldehydes and ketones have the same reactivity because both contain C=O — FALSE: the presence of H on the aldehyde carbonyl carbon makes it oxidisable (Tollens', Fehling's positive); ketones have no H on the carbonyl carbon and cannot be oxidised under these conditions",
        "The nucleophile in HCN addition to a carbonyl attacks the oxygen — FALSE: the nucleophile (CN⁻) attacks the electrophilic carbon (Cδ+), not the nucleophilic oxygen (Oδ⁻); this is the fundamental principle of nucleophilic addition — nucleophile attacks the electrophile",
        "2,4-DNP (Brady's reagent) distinguishes aldehydes from ketones — FALSE: 2,4-DNP gives an orange precipitate with all carbonyl compounds (aldehydes and ketones alike); it confirms the presence of C=O but does not distinguish between aldehyde and ketone"
    ],
    'Distinguishing Tests': [
        "Only ketones give a positive iodoform test — FALSE: ethanal (an aldehyde) gives a positive iodoform test because it has the CH₃C=O group; methyl ketones AND ethanal are both positive; ethanol (oxidised to ethanal under iodoform conditions) is also positive",
        "Fehling's solution and Tollens' reagent give identical results for all aldehydes — FALSE: Tollens' reagent gives a positive result with both aliphatic and aromatic aldehydes (e.g. benzaldehyde); Fehling's solution is not reliably positive with aromatic aldehydes; they are not interchangeable tests",
        "A positive Tollens' test means the compound is definitely an aldehyde — MOSTLY TRUE but not exclusive: certain other reducing compounds (e.g. some α-hydroxy ketones like fructose) can also give a positive Tollens' under alkaline conditions via enolisation; Tollens' positive is strong evidence for an aldehyde but requires corroborating tests for certainty"
    ]
},

carboxylicAcidsAndDerivatives: {
    'Reactivity of Derivatives': [
        "Carboxylic acids and acyl chlorides react at similar rates with alcohols because both have a carbonyl group — FALSE: acyl chlorides react much faster (within seconds at room temperature) while carboxylic acids require heating and a catalyst; Cl⁻ is a far superior leaving group to OH⁻, and the carbonyl C in acyl chlorides is more electrophilic",
        "Nucleophilic acyl substitution is a one-step concerted mechanism like SN2 — FALSE: nucleophilic acyl substitution proceeds via two steps — addition of the nucleophile to form a tetrahedral intermediate, then elimination of the leaving group to restore the C=O; there is always an intermediate, unlike SN2",
        "Esters are hydrolysed by water alone at room temperature — FALSE: esters are kinetically stable to water at room temperature without a catalyst; acid catalysis (dilute H₂SO₄, reflux) or base catalysis (NaOH, reflux) is required to hydrolyse esters at a useful rate"
    ],
    'Acid-Base and Hydrolysis': [
        "Carboxylic acids are fully dissociated in water like HCl — FALSE: carboxylic acids are weak acids (pKa 4–5); they are only partially dissociated in water; the equilibrium lies predominantly on the side of the undissociated acid",
        "Base hydrolysis of esters is reversible like acid hydrolysis — FALSE: base hydrolysis (saponification) produces a carboxylate salt (RCOO⁻), which is thermodynamically stable and cannot re-esterify because the carboxylate carbon is insufficiently electrophilic; the reaction is irreversible and goes to completion",
        "Phenol can be esterified directly with a carboxylic acid under standard conditions — FALSE: phenol is a weaker nucleophile than aliphatic alcohols (lone pair delocalised into ring) and does not esterify efficiently with carboxylic acids under standard heating/H₂SO₄ conditions; acyl chlorides or acid anhydrides are required to esterify phenol"
    ]
},

organicSynthesis: {
    'Route Planning Errors': [
        "Any halogenoalkane can be converted to an amine simply by adding NaOH — FALSE: NaOH(aq) gives substitution to an alcohol, not an amine; to introduce –NH₂, excess ammonia in ethanol must be used (NH₃ acts as the nucleophile) — but multiple substitution can occur to give secondary and tertiary amines as well",
        "Oxidation of an alcohol always gives a carboxylic acid — FALSE: primary alcohols give an aldehyde under distillation conditions and a carboxylic acid under reflux; secondary alcohols give only a ketone (not a carboxylic acid) under any standard conditions; the product depends on both the alcohol class and the conditions",
        "The nitrile route (using KCN) adds a –CN group without changing the carbon count — FALSE: reacting RX with KCN adds one carbon to the chain (the CN carbon becomes the new terminal carbon); after hydrolysis (CN → COOH), the product has one more carbon than the starting halogenoalkane — this is the key synthetic advantage of the nitrile route for chain extension",
        "Elimination with KOH/ethanol always gives one alkene product — FALSE: when a secondary or tertiary halogenoalkane has H atoms on more than one adjacent carbon (β-carbons), elimination can give two different alkenes; Zaitsev's rule predicts the more substituted alkene is the major product, but both are formed"
    ]
},


acidBaseDefinitions: {
    'Definitions and Models': [
        "Strong acid means concentrated acid — FALSE: strength refers to the degree of dissociation (Ka value); concentration refers to mol dm⁻³; a dilute HCl solution is still a strong acid; a concentrated ethanoic acid solution is still a weak acid",
        "A base and an alkali are the same thing — FALSE: all alkalis are bases, but not all bases are alkalis; a base is any proton acceptor (Brønsted–Lowry) or electron pair donor (Lewis); an alkali specifically dissolves in water to produce OH⁻; CuO is a base but not an alkali",
        "Water cannot act as a Brønsted–Lowry acid — FALSE: water donates a proton in reactions with strong bases (e.g. H₂O + NH₂⁻ → OH⁻ + NH₃); water is amphoteric — it acts as an acid when reacting with a stronger base and as a base when reacting with a stronger acid",
        "A conjugate base is always negatively charged — FALSE: the conjugate base of a cationic acid has no charge (e.g. NH₄⁺ donates H⁺ to give NH₃, which is neutral); charge on the conjugate base depends on the charge of the parent acid"
    ],
    'Proton Transfer': [
        "In the reaction HA + H₂O ⇌ H₃O⁺ + A⁻, water is the acid — FALSE: water accepts a proton from HA and is therefore the Brønsted–Lowry base; the resulting H₃O⁺ is the conjugate acid of water",
        "HCl is a Brønsted–Lowry acid only in water — FALSE: HCl can donate a proton to any base, including in non-aqueous solvents; for example, HCl + NH₃(gas) → NH₄Cl in the gas phase — this is a Brønsted–Lowry acid–base reaction with no water present"
    ]
},

pHAndStrength: {
    'pH Calculations': [
        "pH of a weak acid = −log[acid] — FALSE: for a weak acid, [H⁺] ≠ [acid] because the acid only partially dissociates; the correct approach is [H⁺] = √(Ka × c) using the equilibrium expression",
        "pH of a base = −log[OH⁻] — FALSE: this gives pOH, not pH; always convert using Kw: [H⁺] = Kw/[OH⁻], then pH = −log[H⁺]; alternatively pH = 14 − pOH (at 25°C only)",
        "Neutral pH is always 7 — FALSE: neutral means [H⁺] = [OH⁻], which gives pH = 7 ONLY at 25°C where Kw = 10⁻¹⁴; at higher temperatures, Kw increases so neutral pH falls below 7; at 37°C, neutral pH ≈ 6.81",
        "A solution with pH 4 is twice as acidic as a solution with pH 8 — FALSE: pH is a logarithmic scale; pH 4 has [H⁺] = 10⁻⁴; pH 8 has [H⁺] = 10⁻⁸; the ratio is 10⁻⁴/10⁻⁸ = 10,000 — not 2"
    ],
    'Acid Strength and Ka': [
        "A larger Ka means a weaker acid — FALSE: larger Ka = more dissociation = stronger acid; Ka = [H⁺][A⁻]/[HA]: a large Ka means a large numerator relative to denominator = more product formed = more H⁺ = stronger acid",
        "A lower pKa means a weaker acid — FALSE: pKa = −log Ka; lower pKa = larger Ka = stronger acid; the negative sign means the scale is inverted",
        "The approximation [H⁺] = √(Ka × c) is always valid — FALSE: it is only valid when degree of dissociation < 5%; for acids with high Ka or low concentration, the quadratic must be solved"
    ]
},

buffers: {
    'Buffer Mechanism': [
        "A buffer prevents any change in pH — FALSE: a buffer resists pH change; it does not prevent it; adding sufficient acid or alkali will exceed the buffer capacity and cause a significant pH change",
        "Any weak acid solution is a buffer — FALSE: a buffer requires BOTH a weak acid AND its conjugate base in comparable concentrations; a solution of weak acid alone has very little conjugate base and has limited buffering capacity",
        "Buffer capacity is determined only by the pKa — FALSE: buffer capacity (the moles of acid or alkali a buffer can absorb) depends on the absolute concentrations of HA and A⁻, not just their ratio; a 1.0 mol dm⁻³ buffer has 10× the capacity of a 0.1 mol dm⁻³ buffer at the same ratio and pH",
        "The Henderson–Hasselbalch equation puts [HA] in the numerator — FALSE: the correct form is pH = pKa + log([A⁻]/[HA]); the conjugate BASE [A⁻] is always the numerator; inverting gives the wrong sign and therefore the wrong pH"
    ],
    'Buffer pH': [
        "A buffer can only work at pH 7 — FALSE: a buffer works at the pH range pKa ± 1 of the weak acid used; ethanoate buffer works around pH 4.76; phosphate buffer around pH 7.2; ammonium buffer around pH 9.25",
        "Adding water to a buffer significantly changes its pH — FALSE: dilution changes [HA] and [A⁻] proportionally, so the ratio [A⁻]/[HA] is unchanged; by Henderson–Hasselbalch, pH = pKa + log(ratio) is therefore unchanged on dilution (though capacity is reduced)"
    ]
},

titrations: {
    'Equivalence Point and Indicators': [
        "The equivalence point is always at pH 7 — FALSE: equivalence point pH depends on the nature of the salt formed; strong acid + strong base → pH 7; weak acid + strong base → pH > 7; strong acid + weak base → pH < 7",
        "Any indicator can be used for any titration — FALSE: the indicator must change colour within the sharp pH jump at the equivalence point; if the indicator's colour change range does not encompass the equivalence point pH, a false end point is recorded",
        "The end point equals the equivalence point — FALSE: the equivalence point is the stoichiometric completion (moles acid = moles base — a chemical criterion); the end point is where the indicator changes colour (an observational criterion); the goal is to select an indicator where these two points coincide",
        "Methyl orange is suitable for weak acid–strong base titrations — FALSE: methyl orange changes colour between pH 3.1 and 4.4; the equivalence point for a weak acid–strong base titration is at pH 8–10; methyl orange changes colour far before the equivalence point, giving a titre that is too small"
    ],
    'Titration Curves': [
        "The half-equivalence point is at half the pH of the equivalence point — FALSE: the half-equivalence point is the volume midpoint (half the titre) where pH = pKa; the pH at this point is a property of the weak acid, not half the equivalence point pH",
        "A weak acid titration curve is simply a shifted version of a strong acid curve — FALSE: the curves have fundamentally different shapes; the weak acid curve has a buffer region (gradual slope) visible before the equivalence point that the strong acid curve does not, and the starting pH is higher and the equivalence point pH is above 7"
    ]
},

neutralisation: {
    'Neutralisation Products': [
        "Neutralisation always produces a neutral (pH 7) solution — FALSE: neutralisation produces a salt + water, but the salt solution may be acidic, alkaline, or neutral depending on the parent acid/base strengths; NaCl is neutral; CH₃COONa is alkaline; NH₄Cl is acidic",
        "All neutralisation reactions are exothermic by the same amount — FALSE: the standard enthalpy of neutralisation of strong acid + strong base is approximately −57 kJ mol⁻¹ (for H⁺ + OH⁻ → H₂O); for weak acids or bases, part of the enthalpy is used to drive dissociation, so the neutralisation enthalpy is less exothermic"
    ]
},


molesAndMass: {
    'Mole Concept': [
        "The mole is a very large number with no physical meaning — FALSE: the mole is the SI unit of amount of substance, defined as the amount containing exactly 6.022 × 10²³ elementary entities; it is as physically meaningful as a 'dozen' (12) but scaled for atoms",
        "Molar mass and relative molecular mass (Mr) are the same thing — PARTIALLY FALSE: they are numerically equal, but Mr is dimensionless (a ratio) while molar mass has units of g mol⁻¹; confusing them leads to unit errors in calculations",
        "One mole of hydrogen has a mass of 1.0 g — FALSE: this is true only for hydrogen atoms (H); one mole of hydrogen molecules (H₂) has a mass of 2.0 g; always specify whether the entity is an atom, molecule, or ion"
    ],
    'Stoichiometric Ratios': [
        "All chemical reactions have a 1:1 mole ratio between reactants — FALSE: the mole ratio is given by the stoichiometric coefficients in the balanced equation; for H₂SO₄ + 2NaOH, the ratio is 1:2",
        "The limiting reagent is always the reactant with the smaller mass — FALSE: limiting reagent is determined by moles relative to stoichiometric requirement, not by mass; a smaller mass substance may have more moles if its molar mass is lower",
        "Excess reagent is completely consumed in the reaction — FALSE: by definition, the excess reagent is the one NOT completely consumed; some always remains after the reaction"
    ],
    'Yield Calculations': [
        "Percentage yield can exceed 100% — FALSE: this is physically impossible by conservation of mass; if a student calculates >100%, the actual and theoretical yields have been inverted, or the theoretical yield calculation is wrong",
        "Atom economy and percentage yield measure the same thing — FALSE: atom economy is fixed by the balanced equation and measures the fraction of reactant atoms incorporated into the desired product; percentage yield depends on experimental conditions and measures how much of the theoretical maximum was actually obtained",
        "A reaction with 100% atom economy will always have 100% percentage yield — FALSE: atom economy and percentage yield are independent; even a reaction with 100% atom economy (single product) may have low percentage yield due to incomplete reaction or product loss during workup"
    ]
},

concentration: {
    'Volume Units': [
        "Concentration in mol dm⁻³ can be calculated by dividing moles by volume in cm³ — FALSE: volume must be in dm³ (divide cm³ by 1000); using cm³ directly gives a concentration 1000 times too small",
        "1 dm³ = 100 cm³ — FALSE: 1 dm³ = 1000 cm³ (1 decimetre = 10 cm; 1 dm³ = 10³ cm³)",
        "mol dm⁻³ and mol/L are different units — FALSE: 1 dm³ = 1 litre; mol dm⁻³ = mol L⁻¹ = M (molarity) — all are the same unit expressed differently"
    ],
    'Standard Solutions and Dilution': [
        "Adding solute to water changes the volume of solution by exactly the solute's volume — FALSE: dissolving a solid in water results in a volume that is not simply additive (due to solvation and packing effects); this is why standard solutions are made by dissolving in part of the water first, then making up to the mark in a volumetric flask",
        "Dilution changes the concentration and the number of moles of solute — FALSE: dilution changes concentration but NOT the number of moles of solute; the same number of moles is spread through a larger volume (c₁V₁ = c₂V₂ relies on n being constant)",
        "A measuring cylinder is adequate for preparing a standard solution — FALSE: a measuring cylinder has a tolerance of ±2–5%, which introduces unacceptable error; a volumetric flask (tolerance ±0.1–0.2%) is required for any standard solution"
    ]
},

gasStoichiometry: {
    'Molar Volume': [
        "The molar volume of a gas is 24.0 dm³ mol⁻¹ under all conditions — FALSE: 24.0 dm³ mol⁻¹ applies ONLY at RTP (25°C, 1 atm); at STP (0°C, 1 atm) it is 22.4 dm³ mol⁻¹; at other conditions use pV = nRT",
        "Heavier gases have a smaller molar volume than lighter gases at the same temperature and pressure — FALSE: by Avogadro's law, all gases have the same molar volume at the same T and P regardless of molar mass; volume is determined by the number of molecules and their kinetic energy, not their mass",
        "Gas volume in dm³ can be substituted directly into pV = nRT — FALSE: pV = nRT requires V in m³ (divide dm³ by 1000), p in Pa, and T in K; substituting dm³ gives an answer 1000× too large"
    ],
    'Ideal Gas Equation': [
        "Temperature in pV = nRT can be in °C — FALSE: T must always be in Kelvin; T(K) = T(°C) + 273; using °C would give a completely wrong answer (and a negative value for temperatures below 0°C, which is unphysical)",
        "Real gases always behave as ideal gases — FALSE: real gases deviate from ideal behaviour at high pressure (intermolecular attractions reduce volume) and low temperature (molecules move slowly enough for attractions to matter); ideal gas behaviour is an approximation",
        "The ideal gas constant R has different values depending on units — TRUE but requires care: R = 8.314 J mol⁻¹ K⁻¹ = 8.314 Pa m³ mol⁻¹ K⁻¹ = 0.08206 L atm mol⁻¹ K⁻¹; using the wrong value of R for the chosen units gives a wrong answer; always use R = 8.314 with SI units (Pa, m³, K)"
    ]
},

titrations: {
    'Equivalence Point and Indicators': [
        "The equivalence point is always at pH 7 — FALSE: this is true only for strong acid/strong base titrations; weak acid/strong base equivalence points occur at pH > 7 (alkaline) because the conjugate base hydrolyses; strong acid/weak base equivalence points occur at pH < 7",
        "Any indicator can be used for any acid-base titration — FALSE: the indicator must have its transition range bracketing the pH at the equivalence point; using methyl orange (pH 3.1–4.4) for a weak acid/strong base titration gives an end point far from the equivalence point, producing a systematic error",
        "The end point and equivalence point are identical — FALSE: the end point is where the indicator changes colour; the equivalence point is where stoichiometrically equivalent amounts have reacted; a good indicator choice minimises the difference between them, but they are conceptually distinct"
    ],
    'Titration Calculations': [
        "The mole ratio in a titration is always 1:1 between acid and base — FALSE: H₂SO₄ + 2NaOH has a 1:2 ratio; H₃PO₄ + 3NaOH has a 1:3 ratio; always read the ratio from the balanced equation",
        "A larger titre always means a higher concentration of the analyte — FALSE: a larger titre means more titrant was required; this could indicate higher analyte concentration OR a lower titrant concentration; titre alone does not determine concentration without knowing both volumes and concentrations",
        "Back titration gives the moles of analyte directly from the titre — FALSE: back titration gives the moles of UNREACTED excess reagent; the moles of analyte = moles of reagent added − moles of unreacted reagent; a subtraction step is always required"
    ]
},

limitingReagents: {
    'Conceptual Errors': [
        "The reagent present in the smaller volume is the limiting reagent — FALSE: for solutions, the reagent present in fewer moles (calculated from c × V) is potentially limiting, but must be compared against the stoichiometric ratio, not the volume alone",
        "Once the limiting reagent is used up, the reaction reverses — FALSE: for irreversible reactions, the reaction simply stops when the limiting reagent is consumed; no reversal occurs; the excess reagent remains unchanged",
        "Adding more of the excess reagent will increase the yield — FALSE: adding more of the excess reagent makes no difference because the limiting reagent is already fully consumed; only adding more of the LIMITING reagent increases yield"
    ]
},


equilibriumConcept: {
    'Dynamic Nature': [
        "Equilibrium means the reaction has stopped — FALSE: at dynamic equilibrium, both forward and reverse reactions continue at equal rates; concentrations are constant because rate forward = rate reverse, not because reaction has ceased",
        "Equilibrium means equal concentrations of reactants and products — FALSE: equal concentrations would mean Kc = 1; at most equilibria Kc ≠ 1, and concentrations of reactants and products at equilibrium are generally different; what is equal are the RATES of forward and reverse reaction",
        "Once equilibrium is established, no further changes occur even if conditions change — FALSE: equilibrium is a dynamic state that responds to any perturbation (Le Chatelier's principle); only in a perfectly isolated system with no external changes is equilibrium indefinitely stable",
        "A system reaches equilibrium faster if it starts from the products side rather than the reactants side — FALSE: the same equilibrium position is reached regardless of which direction the reaction starts from (given the same total amounts of material); this follows from the fact that Kc is a fixed constant at a given temperature"
    ],
    'Closed System Requirement': [
        "Equilibrium can be established in an open container — FALSE: if products (especially gases) escape continuously, the reverse reaction cannot proceed; without reverse reaction there is no equilibrium — reaction proceeds to completion; a closed system is essential",
        "Removing products prevents equilibrium from ever being reached — PARTIALLY TRUE but misleading: continuously removing product means the system is not closed; in an open system, equilibrium is not established; however, this is the basis of industrial strategies (e.g. Haber process NH₃ removal) — the distinction is that yield is maximised in a flow reactor where product is removed, not that equilibrium per se is 'prevented'"
    ]
},

leChatelierPrinciple: {
    'Catalyst Misconceptions': [
        "A catalyst shifts the equilibrium position to the right (toward products) — FALSE: a catalyst lowers activation energy equally for forward and reverse reactions; both rates increase by the same factor; the equilibrium ratio of products to reactants (Kc) is unchanged; catalyst only speeds attainment of equilibrium",
        "A catalyst increases the yield of product at equilibrium — FALSE: yield is determined by the equilibrium position, which is determined by Kc, which is determined by temperature; a catalyst does not change Kc, temperature, or equilibrium position, so it does not change yield",
        "Without a catalyst, the Haber process would give the same yield but take longer — CORRECT in principle but misleading in practice: without catalyst, the reaction at 450°C would take so long that no commercial production is possible; the catalyst is essential for economic viability, not merely for convenience"
    ],
    'Pressure Misconceptions': [
        "Increasing pressure always shifts equilibrium to the right — FALSE: pressure shifts equilibrium toward the side with fewer moles of GAS; if more moles of gas are on the right (product side), increasing pressure shifts equilibrium LEFT; if gas moles are equal on both sides, pressure has no effect on position",
        "Pressure affects equilibria involving only liquids or solids — FALSE: liquids and solids are essentially incompressible; their concentrations are not significantly affected by pressure changes; only gas-phase species are affected by pressure changes in equilibria",
        "Adding an inert gas at constant volume shifts the equilibrium — FALSE: adding an inert gas at constant volume does not change the concentrations of any reacting species (they still occupy the same volume); no shift occurs. Note: adding inert gas at constant PRESSURE does expand the volume, diluting all gas concentrations — this can shift the equilibrium toward more gas moles"
    ],
    'Kc Misconceptions': [
        "Changing reactant concentration changes Kc — FALSE: Kc depends only on temperature; adding reactant shifts the equilibrium position (changes concentrations) but the new concentrations still satisfy the same Kc value",
        "Increasing pressure changes Kc — FALSE: Kc is independent of pressure; pressure shifts equilibrium position without altering Kc; the new equilibrium concentrations still give the same Kc",
        "Kc increases when the reaction is shifted to the right — FALSE: shifting the equilibrium right means concentrations adjust, but the RATIO [products]^x / [reactants]^y always returns to Kc; you cannot change Kc by shifting equilibrium; Kc is only changed by temperature"
    ]
},

equilibriumConstant: {
    'Writing Kc Expressions': [
        "Stoichiometric coefficients are multiplied by concentration rather than used as exponents — FALSE: in Kc = [C]^c[D]^d / [A]^a[B]^b, the coefficients a, b, c, d are POWERS (exponents), not multiplying factors; writing 2[NH₃] instead of [NH₃]² is a fundamental error",
        "Pure solids and liquids are included in the Kc expression — FALSE: pure solids and liquids have constant 'concentrations' (activity = 1) at a given temperature; they are incorporated into the constant Kc and do not appear in the equilibrium expression; only aqueous and gaseous species appear",
        "Kc must always have units — FALSE: units depend on stoichiometry; for reactions where the total power of concentrations in numerator equals denominator (e.g. H₂ + I₂ ⇌ 2HI), Kc is dimensionless; units must always be derived, not assumed"
    ],
    'ICE Table Errors': [
        "Initial concentrations are used in the Kc expression — FALSE: Kc must be calculated from EQUILIBRIUM concentrations (the E row of the ICE table); initial concentrations are only the starting point for the calculation",
        "All species change by the same amount x in the ICE table — FALSE: changes in concentrations are scaled by stoichiometric coefficients; for N₂ + 3H₂ ⇌ 2NH₃, if [N₂] changes by −x, then [H₂] changes by −3x and [NH₃] changes by +2x",
        "Kc can be negative or zero — FALSE: Kc is always a positive number because it is a ratio of concentration terms raised to positive powers; a very small Kc (e.g. 10⁻³⁰) is not zero — it means products are present in trace amounts, not that the reaction does not occur at all"
    ]
},

industrialEquilibrium: {
    'Haber Process': [
        "The Haber process uses high temperature to increase the yield of ammonia — FALSE: the forward reaction is exothermic (ΔH = −92 kJ mol⁻¹); increasing temperature shifts equilibrium LEFT (Le Chatelier), decreasing yield; high temperature is used despite lower yield because rate is too slow at lower temperatures",
        "The iron catalyst in the Haber process increases the yield per pass — FALSE: the catalyst only increases the rate of reaching equilibrium; the equilibrium position (and therefore yield per pass ~15%) is determined by temperature and pressure, not by the catalyst",
        "The Haber process goes to completion because pressure is so high — FALSE: even at 200 atm, only ~15% conversion per pass is achieved at 450°C; this is because Kc at 450°C is small (Kc ≈ 0.06 mol⁻² dm⁶); high pressure improves but does not complete the reaction; overall high yield is achieved by recycling unreacted gases, not by complete conversion per pass",
        "Removing ammonia from the Haber process vessel changes Kc — FALSE: removing NH₃ shifts equilibrium right (Le Chatelier) by decreasing [NH₃] below its equilibrium value; the system produces more NH₃ to restore equilibrium; Kc itself is unchanged because temperature is unchanged"
    ],
    'Contact Process': [
        "The Contact process uses high pressure like the Haber process because products have fewer moles of gas — PARTIALLY CORRECT reasoning but WRONG conclusion: while the gas mole reduction (3 → 2) means higher pressure would shift equilibrium right, the Contact process uses near-atmospheric pressure because Kc at 450°C already gives ~99.5% conversion — the yield gain from higher pressure is negligible and does not justify the engineering cost",
        "V₂O₅ in the Contact process is consumed during the reaction — FALSE: V₂O₅ is a catalyst; it is regenerated in the catalytic cycle (V⁵⁺ → V⁴⁺ → V⁵⁺); net consumption of V₂O₅ is zero across the catalytic cycle"
    ]
},

hydrocarbonBasics: {
    'Structural Understanding': [
        "Cycloalkanes are unsaturated because they form a ring — FALSE: cycloalkanes contain only C–C and C–H single bonds; they are saturated; the ring does not constitute unsaturation",
        "A longer carbon chain always means a higher boiling point regardless of structure — PARTIALLY FALSE: chain length increases boiling point, but branching reduces it; both effects operate simultaneously",
        "Hydrocarbons are polar molecules — FALSE: C–H bonds have negligible polarity (electronegativity difference ~0.4); hydrocarbons are essentially non-polar; they interact only via London dispersion forces",
        "All compounds with the same molecular formula have the same boiling point — FALSE: structural isomers have the same formula but different molecular shapes, leading to different surface areas and different London forces"
    ],
    'Homologous Series': [
        "The homologous series changes by a CH₃ unit between members — FALSE: each member differs by CH₂ (a methylene unit), not CH₃ (a methyl group)",
        "Alkanes and cycloalkanes have the same general formula — FALSE: alkanes = CₙH₂ₙ₊₂; cycloalkanes = CₙH₂ₙ (same as alkenes); they can only be distinguished by their reactivity and the absence of a π bond in cycloalkanes"
    ]
},

alkaneReactivity: {
    'Free-Radical Mechanism': [
        "Free-radical substitution uses double-headed (ionic) curly arrows — FALSE: free-radical mechanisms use single-headed fishhook arrows (one electron transfers); double-headed arrows denote ionic (two-electron) mechanisms",
        "Only one termination step is possible — FALSE: any two radical species present can combine; for methane chlorination there are three termination steps: Cl• + Cl•, CH₃• + Cl•, and CH₃• + CH₃•",
        "UV light provides the energy for the entire reaction — FALSE: UV light provides energy only for the initiation step (homolytic fission of X₂); the propagation steps are exothermic and proceed without further light input",
        "Free-radical substitution is a chain reaction that requires UV light throughout — FALSE: once initiated, the chain propagates independently; UV light is only needed at the start"
    ],
    'Combustion': [
        "Incomplete combustion always produces both CO and C (soot) — FALSE: incomplete combustion can produce CO only (no soot), or C only, or a mixture, depending on the degree of oxygen limitation",
        "Complete combustion is always preferred because it produces more energy — MOSTLY TRUE but oversimplified: in some industrial contexts (e.g. carbon black production), incomplete combustion to soot is deliberately controlled"
    ]
},

alkeneCycloalkane: {
    'Electrophilic Addition': [
        "In electrophilic addition, the curly arrow goes FROM H TO the π bond (the electrophile attacks the bond) — FALSE: the π bond (nucleophile, electron donor) attacks H (electrophile, electron acceptor); the arrow goes FROM the π bond TO H",
        "The major product of HX addition is always the one where X adds to the carbon bearing fewer H atoms — STATED BACKWARDS: Markovnikov's rule says H adds to the carbon bearing MORE H atoms (the more substituted carbon gets X, which is derived from the more stable secondary/tertiary carbocation)",
        "Bromine water and bromine in CCl₄ give the same product from an alkene — FALSE: Br₂/H₂O (bromine water) gives a bromohydrin (OH adds at one carbon) because water acts as a nucleophile in the second step; Br₂/CCl₄ gives a dibromo product (no water nucleophile present)",
        "Cycloalkanes decolourise bromine water because they contain a ring — FALSE: cycloalkanes are saturated; only π bonds react with Br₂ by electrophilic addition; rings confer no reactivity toward electrophiles"
    ],
    'Geometric Isomerism': [
        "Any alkene shows geometric isomerism — FALSE: only alkenes where BOTH carbons of the double bond carry two DIFFERENT groups show geometric isomerism; terminal alkenes (=CH₂) do not",
        "Geometric isomers can be interconverted by heating — FALSE: interconversion requires breaking the π bond (bond enthalpy ~250 kJ/mol); this does not occur under normal heating; only very high temperatures or photochemical isomerisation can interconvert them",
        "cis isomers always have higher boiling points than trans isomers — GENERALLY TRUE for simple cases but not universal; the relationship depends on molecular dipole and packing efficiency; students should not treat this as an absolute rule without reasoning"
    ]
},

aromaticity: {
    'Benzene Structure': [
        "Benzene has three C=C double bonds that alternate around the ring (the Kekulé model is correct) — FALSE: all six C–C bonds are equal length (140 pm); there are no alternating single and double bonds; the π electrons are fully delocalised",
        "The circle drawn inside the benzene ring represents six electrons and is purely symbolic — PARTIALLY FALSE: it is symbolic, but it specifically represents the six delocalised π electrons distributed symmetrically above and below the ring plane — this has real chemical consequences (stability, substitution reactivity)",
        "Benzene will decolourise bromine water — FALSE: benzene does NOT decolourise bromine water under standard conditions because electrophilic addition would destroy the delocalised π system, losing 152 kJ/mol of stabilisation; a Lewis acid catalyst is required for substitution"
    ],
    'Electrophilic Aromatic Substitution': [
        "In nitration, HNO₃ directly attacks benzene — FALSE: HNO₃ alone is not electrophilic enough to attack benzene; concentrated H₂SO₄ is required to generate the nitronium ion (NO₂⁺), which is the actual electrophile",
        "The arenium ion intermediate in EAS is aromatic — FALSE: the arenium ion has one sp³ carbon (the carbon bonded to both H and the incoming electrophile); this breaks the continuous p orbital overlap and the intermediate is NOT aromatic",
        "Benzene undergoes addition with Br₂ if heated — FALSE: even at elevated temperature, benzene requires a Lewis acid halogen carrier (AlBr₃, FeBr₃) to polarise Br₂ into an effective electrophile for substitution; heating alone does not cause addition"
    ]
},

nomenclature: {
    'IUPAC Naming Errors': [
        "The longest chain can be found by counting carbons in one direction from the molecule — FALSE: the longest chain must be found by systematically examining all possible continuous carbon chains, not just the most obvious path",
        "Substituents are numbered from the left end of the molecule as drawn — FALSE: the chain is numbered from the end that gives substituents the LOWEST locant set; the 'left' end as drawn may not be the correct starting point",
        "Multiplying prefixes (di-, tri-) are included when alphabetically ordering substituents — FALSE: when ordering substituents alphabetically, the multiplying prefixes (di-, tri-, sec-, tert-) are IGNORED; only the root substituent name is used for alphabetical ordering",
        "A five-carbon chain with a methyl branch at C4 should be named 4-methylpentane — FALSE: the lowest locant rule requires numbering from the other end, which gives methyl at C2; the correct name is 2-methylpentane"
    ]
}

};

    this.clarificationStrategies = {

        // ── CELL BIOLOGY ─────────────────────────────────────────────────────

        prokaryote_has_dna: {
            method: 'Explicit correction anchor: "Prokaryotes lack a MEMBRANE-BOUND NUCLEUS — not DNA." Draw a prokaryotic cell diagram with DNA explicitly labelled in the nucleoid region (a defined zone with no surrounding membrane). Write this distinction in bold at the top of any prokaryote-eukaryote comparison exercise: lacking a nucleus ≠ lacking DNA. Test: ask the student to state where E. coli DNA is located before they answer any question about prokaryotes.',
            effectiveness: 'Very high for the persistent "no nucleus = no DNA" confusion'
        },

        facilitated_diffusion_no_atp: {
            method: 'Analogy: facilitated diffusion is like a slide in a playground — gravity (the concentration gradient) does all the work; the slide structure (the channel or carrier protein) merely provides a preferred pathway. Active transport is like a lift — it takes you AGAINST gravity (against the gradient) and requires power (ATP). Write the slide/lift analogy above every transport diagram until the classification is automatic without looking up the energy requirement.',
            effectiveness: 'Very high for distinguishing facilitated diffusion from active transport'
        }

};

const EndSection8 = "close"