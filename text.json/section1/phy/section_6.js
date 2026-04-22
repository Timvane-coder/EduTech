

initializeMisconceptionDatabase() 



this.commonMisconceptions = { 


zerothLaw: {
    'Temperature vs Heat Sensation': [
        'Temperature is what you feel when you touch something — FALSE: touch senses the rate of heat flow TO or FROM your skin (determined by thermal conductivity and temperature difference), not temperature directly. Metal at 20°C feels colder than wood at 20°C because metal conducts heat away from skin faster — both are at the same temperature.',
        'Two objects that feel the same temperature are always at the same temperature — ONLY TRUE if steady state has been reached AND if the objects have similar thermal conductivities. A common misconception resolved by the Zeroth Law: only a calibrated thermometer in thermal equilibrium gives an objective temperature reading.',
        'Temperature and heat content are equivalent — FALSE: temperature is an intensive property (does not depend on amount of substance); heat is energy in transit. A swimming pool at 20°C has far more thermal energy than a spark at 10,000°C — yet the spark has the higher temperature.'
    ],
    'Thermometry': [
        'Different thermometer types will give different readings for the same object — FALSE for calibrated thermometers in thermal equilibrium with the object. The Zeroth Law guarantees agreement. Different readings indicate measurement error, different locations, or insufficient equilibration time — not a failure of the Zeroth Law.',
        'Absolute zero means molecules stop moving completely — OVERSIMPLIFICATION: classical mechanics predicts this, but quantum mechanics requires a residual zero-point energy even at 0 K. Molecular motion reaches its minimum but does not cease. Absolute zero is thermodynamically unattainable in any case (Third Law).'
    ]
},

firstLaw: {
    'Energy Confusion': [
        'Heat is stored in objects — FALSE: objects store internal energy (thermal energy). Heat is energy in transit across a boundary. Once transferred, it becomes internal energy of the receiving system — we no longer call it heat. "An object contains heat" is physically incorrect; "an object contains internal energy" is correct.',
        'Work and heat are equivalent and interchangeable in all contexts — PARTIALLY CORRECT: both are measured in joules and both change a system\'s internal energy (First Law). However, they differ in quality: work is fully convertible to other forms of energy; heat can never be fully converted to work (Second Law). Calling them equivalent ignores their thermodynamic distinction.',
        'If ΔU = 0 then no heat flows and no work is done — FALSE: ΔU = 0 means Q = W — heat and work are equal in magnitude. For an isothermal ideal gas process, ΔU = 0 but both Q > 0 and W > 0 (or both negative). The common error is concluding that ΔU = 0 implies Q = 0 AND W = 0.'
    ],
    'Sign Convention Errors': [
        'Work done on a gas is positive in all conventions — FALSE: in the physics convention, W is work done BY the system; compression (work ON the gas) gives W < 0. In the engineering convention, W_on is positive. Always identify the convention before assigning signs — mixing conventions is the most common source of sign errors in thermodynamics.',
        'Heat always flows into a system during expansion — FALSE: isothermal expansion requires Q > 0 (heat flows in to maintain T constant against the cooling caused by expansion). But adiabatic expansion has Q = 0. Isobaric cooling (gas compressed and cooled simultaneously) can have Q < 0 while W < 0. Heat and work signs are independent.'
    ],
    'Process Errors': [
        'An isothermal process has no heat exchange — OPPOSITE: isothermal means constant temperature, so for an ideal gas ΔU = 0 and Q = W — heat flow is exactly equal to work done. The ADIABATIC process has no heat exchange (Q = 0). Confusing isothermal with adiabatic is a critical and common error.'
    ]
},

secondLaw: {
    'Efficiency Misconceptions': [
        '100% efficient engines are impossible because of friction and heat loss — INCOMPLETE: friction and heat loss are practical limitations. But even a theoretically perfect, frictionless engine is limited to the Carnot efficiency by the Second Law. The limitation is fundamental — not engineering. A 100% efficient engine would require T_C = 0 K (Third Law: unattainable).',
        'A more efficient engine just needs better engineering — FALSE for exceeding Carnot: no engineering refinement can exceed η_C = 1 − T_C/T_H. Engineering improves efficiency toward the Carnot limit; it cannot cross it. This is why combined-cycle gas turbines aim to approximate Carnot by minimising irreversibilities, not by exceeding the Carnot formula.',
        'Refrigerators with COP > 1 violate energy conservation — FALSE: COP = Q_C/W > 1 is normal and expected. The refrigerator moves heat — it does not create it. Q_H = Q_C + W (energy is conserved: heat deposited equals heat removed plus work input). A COP of 3 means 1 J of electrical work moves 3 J of heat from cold to hot — the total energy deposited in the kitchen (4 J) is fully accounted for.'
    ],
    'Entropy Misconceptions': [
        'Entropy is the same as disorder — OVERSIMPLIFICATION that misleads in many cases: entropy is k_B·ln(Ω) where Ω is the number of microstates. Disorder is a useful analogy for gases and mixing but fails for: (1) liquid water has lower entropy than ice but is arguably more "disordered"; (2) a polymer chain in solution — more conformations = more entropy, but "disorder" is ambiguous. Use microstates as the primary concept.',
        'Entropy always increases everywhere — FALSE: the Second Law applies to isolated systems. Entropy of a system can decrease if entropy of surroundings increases more. Life, crystal formation, and refrigerators all reduce local entropy — without violating the Second Law because ΔS_surroundings more than compensates.',
        'Reversible processes are fast processes — OPPOSITE: reversible processes must be quasi-static — proceeding infinitely slowly through a sequence of equilibrium states. Fast processes are highly irreversible (e.g. free expansion, shock waves). Speed and reversibility are inversely related in thermodynamics.',
        'A process where ΔS_system < 0 violates the Second Law — FALSE: only ΔS_universe < 0 violates the Second Law. ΔS_system can be negative if ΔS_surroundings > |ΔS_system|. Cooling an object, crystallisation, and all refrigeration processes have ΔS_system < 0 — none violate the Second Law because the surroundings gain at least as much entropy.'
    ]
},

entropyAndDisorder: {
    'Statistical Entropy': [
        'Entropy measures the amount of energy in a system — FALSE: entropy measures the dispersal of energy — the number of ways the system\'s energy can be distributed among its microstates. A system can have high entropy with low internal energy (cold gas in large volume) or low entropy with high internal energy (hot crystal near 0 K).',
        'Low entropy means low temperature — FALSE: entropy depends on both temperature and volume (and other variables). A very dilute gas at room temperature can have higher entropy than a dense gas at high temperature. S = k_B·ln(Ω) — Ω depends on energy AND the volume of phase space available.',
        'Entropy cannot decrease in any process — FALSE: entropy of a subsystem can decrease. Only entropy of the universe (isolated system) cannot decrease. This misconception prevents students from correctly analysing refrigerators, living systems, and crystallisation.'
    ],
    'Third Law Errors': [
        'At absolute zero, all molecular motion stops — INCORRECT: zero-point quantum energy persists at 0 K. Entropy is zero (single microstate for a perfect crystal) but kinetic energy is not zero.',
        'Absolute zero can be reached with sufficient cooling technology — FALSE by the Third Law: as T → 0, the heat capacity of all systems → 0, so each incremental cooling step removes less and less entropy. An infinite number of steps would be required. This is not a technology limitation — it is a consequence of the Third Law.'
    ]
},

heatEnginesAndEfficiency: {
    'Carnot Misapplications': [
        'Carnot efficiency can be calculated using Celsius temperatures — CRITICAL ERROR: η_C = 1 − T_C/T_H requires absolute (Kelvin) temperatures. Using T_C = 30°C and T_H = 500°C: wrong answer = 1 − 30/500 = 0.94 = 94%; correct answer = 1 − 303/773 = 0.608 = 60.8%. The error exceeds 50% — always convert to Kelvin first.',
        'Carnot efficiency is what real engines achieve — FALSE: Carnot efficiency is the MAXIMUM for any engine between two temperatures. Real engines achieve substantially less due to irreversibilities: friction, finite temperature differences in heat transfer, non-ideal gases, turbulence. Carnot sets the ceiling, not the typical value.',
        'Increasing fuel burn rate improves a heat engine\'s efficiency — FALSE: efficiency depends on temperature ratio T_C/T_H, not power output. Burning more fuel raises T_H slightly (if combustion temperature changes) but also increases irreversibilities. Efficiency = W/Q_H — increasing Q_H without increasing the temperature ratio does not improve efficiency.',
        'A heat pump COP can never be greater than 1 — FALSE: COP_heat pump = Q_H/W = T_H/(T_H − T_C). For T_H = 293 K and T_C = 273 K: COP = 293/20 = 14.65. A heat pump can deliver 14 times more heat energy than the electrical work it consumes — this does not violate energy conservation because most of the delivered heat comes from the cold reservoir, not from the electricity.'
    ]
},

radioactivityBasics: {
    'Decay Randomness': [
        'A nucleus will definitely decay after one half-life — FALSE: half-life is the time for half of a LARGE SAMPLE to decay on average. Any individual nucleus has a 50% probability of decaying within one half-life and a 50% probability of surviving. A nucleus that has existed for 10 half-lives without decaying has exactly the same probability of decaying in the next second as a newly formed nucleus — radioactive decay has no memory.',
        'Radioactive decay can be predicted precisely for individual nuclei — FALSE: quantum mechanics establishes that decay is fundamentally probabilistic. The decay constant λ gives the probability of decay per unit time for one nucleus — not the time at which it will decay. This is not a limitation of our knowledge but a fundamental feature of quantum reality.',
        'After two half-lives, all the radioactive material has decayed — FALSE: after one T½, half remains; after two T½, one quarter remains; after n T½, (½)^n remains. The material never reaches exactly zero — the exponential function approaches but never touches zero. In practice, after ~10 half-lives the activity is less than 0.1% of initial, but some nuclei remain.'
    ],
    'Activity Concepts': [
        'Activity and number of nuclei are the same thing — FALSE: activity A = λN. A source with a large N but tiny λ (long T½) can have very low activity. A source with small N but large λ (short T½) can have very high activity. For example: 1 kg of U-238 (T½ = 4.47 × 10⁹ years) has A ≈ 12,400 Bq; 1 μg of Po-210 (T½ = 138 days) has A ≈ 1.66 × 10⁸ Bq — a million times more activity despite being a million times less mass.',
        'A source with lower activity is always less dangerous — OVERSIMPLIFICATION: biological hazard depends on activity, radiation type, energy, exposure route (internal vs external), and organ sensitivity. A low-activity alpha emitter inside the body can deliver a very high local equivalent dose to surrounding tissue despite low total activity.'
    ]
},

nuclearDecayTypes: {
    'Decay Equation Errors': [
        'Gamma decay changes the atomic number — FALSE: gamma radiation is a photon (electromagnetic radiation) with no mass and no charge. Gamma emission changes only the nuclear energy state, not Z or A. The nuclide before and after gamma emission is the same element with the same mass number.',
        'Beta-plus decay is the same as beta-minus decay but for positively charged atoms — FALSE: beta-plus emits a positron (antielectron) and a neutrino; beta-minus emits an electron and an antineutrino. Beta-plus decreases Z by 1 (proton → neutron); beta-minus increases Z by 1 (neutron → proton). The physical processes are distinct at the quark level and occur in opposite nuclear stability situations.',
        'The electron emitted in beta-minus decay was orbiting the nucleus before decay — FALSE: the electron did not pre-exist in the nucleus. It is created at the moment of decay when a down quark converts to an up quark via the weak force. The nucleus contains quarks, not electrons; the electron is a new particle produced in the decay process.'
    ],
    'Penetration vs Ionisation': [
        'The most penetrating radiation is always the most dangerous — FALSE: penetrating power and ionising power are inversely related. Alpha particles are the least penetrating (stopped by paper) but the most ionising — they deposit their energy in a very short path, causing dense localised ionisation. Gamma is the most penetrating but least ionising per unit path length. For internal contamination, alpha is by far the most biologically damaging per unit activity (w_R = 20 vs w_R = 1 for gamma).',
        'Radiation that cannot penetrate skin is harmless — FALSE: for external sources, alpha particles not penetrating skin is indeed protective. But if an alpha emitter is ingested, inhaled, or enters through a wound, the alpha particles are directly in contact with living tissue and cause severe localised radiation damage. The 2006 poisoning of Alexander Litvinenko by Po-210 (an alpha emitter) is a tragic demonstration of internal alpha contamination.'
    ]
},

halfLifeAndDecay: {
    'Half-Life Misconceptions': [
        'Half-life is the time for a nucleus to decay halfway — MEANINGLESS: a nucleus either has decayed or has not — there is no halfway state. Half-life is the time for HALF THE NUCLEI IN A LARGE SAMPLE to decay (i.e. for the activity to halve). For an individual nucleus, there is no concept of partial decay.',
        'After the half-life, the remaining nuclei are weaker or closer to decaying — FALSE: undecayed nuclei have no memory of their age. A nucleus that has survived for 1000 half-lives has exactly the same probability of decaying in the next second as a newly produced nucleus. This is the memorylessness property of exponential decay, which follows from the constant probability λ.',
        'The decay constant λ depends on external conditions such as temperature, pressure, or chemical bonding — FALSE for nuclear decay: λ is determined entirely by the internal nuclear structure. Nuclear energy scales (MeV) are a million times larger than chemical/thermal energy scales (eV) — external conditions cannot meaningfully influence nuclear decay rates. (A minor exception: electron capture rates can be slightly affected by the electron density at the nucleus, which varies minutely with chemical environment, but this is negligible for practical purposes.)'
    ],
    'Calculation Errors': [
        'The (½)^n formula can be used when n is not a whole number — TECHNICALLY CORRECT but calculation-prone: (½)^2.3 can be calculated but requires converting to exponential form: (½)^2.3 = e^(−2.3 × ln2) = e^(−1.594) = 0.203. Students who try to compute (½)^2.3 by halving 2.3 times make an error. For non-integer n, always use A(t) = A₀e^(−λt) directly with the correct λ.',
        'Time units for λ and t must always be seconds — FALSE: they must be CONSISTENT. If T½ is given in days, λ is in day⁻¹, and t must be in days. Converting everything to seconds is always safe but is unnecessary and increases calculation complexity. The critical rule: T½, λ, and t must all use the same time unit in any one calculation.'
    ]
},

nuclearReactions: {
    'Mass-Energy Misconceptions': [
        'In nuclear reactions, mass is destroyed to create energy — IMPRECISE: mass is converted to energy (and vice versa). Mass and energy are different forms of the same quantity, related by E = mc². No quantity is destroyed — the total mass-energy of the system is conserved. A more precise statement: the rest mass of the products is less than the rest mass of the reactants; the difference appears as kinetic energy of the products.',
        'Nuclear reactors work by destroying atoms — FALSE: nuclear reactors use fission — the splitting of heavy nuclei (primarily U-235) into smaller nuclei. The nucleons (protons and neutrons) are rearranged but not destroyed. The total number of protons and neutrons is conserved. Only a tiny fraction of the reactant mass (~0.09%) is converted to energy.',
        'The binding energy is the energy stored in the nucleus — MISLEADING: binding energy is the energy that MUST BE SUPPLIED to completely separate a nucleus into its constituent free nucleons. It is not energy stored waiting to be released — it is an energy deficit. The bound nucleus has LESS energy (and less mass) than its separated components. Energy is released when nuclei rearrange to increase their binding energy per nucleon.'
    ],
    'Fission and Fusion Confusion': [
        'Fusion always releases more energy than fission — CONTEXT-DEPENDENT: per reaction event, D-T fusion releases 17.6 MeV vs ~200 MeV for U-235 fission. But per unit mass of fuel, D-T fusion releases ~337 TJ/kg vs ~82 TJ/kg for U-235 fission — fusion wins per unit mass. The confusion arises from conflating energy per event (fission wins) with energy per kilogram of fuel (fusion wins). The correct comparison depends on the context.',
        'A nuclear power station can explode like an atomic bomb — FALSE: a reactor cannot undergo a nuclear explosion. A bomb requires supercritical geometry (rapid assembly of > critical mass) and weapon-grade fuel (>90% U-235 or Pu-239 enrichment). Reactor fuel is 3–5% U-235 — far below bomb-grade. The worst credible reactor accident is a steam explosion and core meltdown (as at Chernobyl and Fukushima) — catastrophic, but physically incapable of producing a nuclear detonation.',
        'Radioactive waste from nuclear power is mostly from the reactor structure — FALSE: the dominant radioactive waste by activity is fission products — nuclei produced when U-235 splits. These are embedded in the spent fuel. The reactor structure does become mildly activated (via neutron capture) but contributes far less activity than the spent fuel itself.'
    ]
},

radiationSafety: {
    'Dose and Risk': [
        'More radiation exposure always means proportionally more cancer risk — ASSUMED MODEL, not proven: the linear no-threshold (LNT) model assumes risk is proportional to dose at all dose levels, with no safe threshold. This is a conservative assumption used for radiation protection policy. Some evidence suggests very low doses may be harmless or even marginally beneficial (radiation hormesis), while very high doses follow a linear relationship with harm. LNT is a regulatory tool, not a proven biological law at low doses.',
        'Natural background radiation is always safe — OVERSIMPLIFICATION: background radiation includes sources that definitely contribute to cancer risk (e.g. radon gas is the second leading cause of lung cancer after smoking in many countries, responsible for ~1,100 deaths per year in the UK). "Natural" does not mean "harmless" — it means the source is not anthropogenic.',
        'Radiation contamination and irradiation are the same — FALSE: irradiation means exposure to a radiation source external to the body; once the source is removed, exposure stops. Contamination means radioactive material has been deposited on or inside the body, continuing to irradiate tissues. Internal contamination with an alpha emitter (e.g. polonium-210) is far more dangerous than external irradiation with the same activity, because alpha particles — which are harmless through external exposure — deliver their full ionising energy to surrounding tissue.'
    ]
},

reflectionBasics: {
    'Angle Measurement': [
        'Angles of incidence and reflection are measured from the surface — CRITICAL ERROR: all angles in optics are measured from the normal (a line perpendicular to the surface at the point of incidence). Measuring from the surface gives an angle equal to 90° minus the correct value, producing completely wrong results in calculations. Always draw the normal first, before drawing any rays.',
        'The normal must be vertical — FALSE: the normal is always perpendicular to the surface at the point of contact, regardless of the surface orientation. A surface tilted at 30° has a normal tilted at 60° from vertical. The key is perpendicularity to the local surface, not to gravity.',
        'A flat mirror reverses front and back — IMPRECISE: a plane mirror performs lateral inversion (left-right reversal) in the axis perpendicular to the mirror surface. It does not reverse front and back in the sense of depth. The image appears to be the same distance behind the mirror as the object is in front, with the same orientation in depth.'
    ],
    'Image Properties': [
        'Virtual images do not exist or cannot be seen — FALSE: virtual images are seen every time you look in a mirror. They appear to come from behind the mirror surface. What virtual images cannot do is be projected onto a screen — they require your eye (or a camera) to converge the apparently diverging rays.',
        'A concave mirror always magnifies — FALSE: a concave mirror magnifies only when the object is between F and the mirror (producing a virtual image) or between F and 2F (producing a real magnified image). For objects beyond 2F, it produces a real, diminished image — exactly like a camera focusing a distant scene.',
        'Convex mirrors always form real images — CRITICAL ERROR: convex (diverging) mirrors always form virtual, upright, diminished images regardless of object position. Real images require reflected rays to converge — convex mirrors always cause divergence.'
    ]
},

refractionBasics: {
    'Direction of Bending': [
        'Light bends away from the normal when entering a denser medium — CRITICAL ERROR: light bends TOWARD the normal when entering a denser (higher n) medium. Physical reason: light slows down upon entering a denser medium; the side of the wavefront that enters first slows first, rotating the entire wavefront toward the normal. Away from normal occurs when going from dense to less dense (speeding up).',
        'Refraction only occurs at large angles — FALSE: refraction occurs at any angle of incidence except exactly 0° (normal incidence). Even at 1°, there is a small refraction. The effect is just less visible at small angles.',
        'Optical density is the same as mass density — FALSE: optical density refers to a medium\'s ability to slow light, measured by its refractive index. A material can have high mass density but low optical density (e.g. certain oils) or low mass density but high optical density (e.g. some glasses). The two properties are unrelated.'
    ],
    'Refractive Index': [
        'A higher refractive index means the medium is physically denser — FALSE: n = c/v measures how much the medium slows light, which depends on its electronic structure (polarisability), not mass density. Diamond (n = 2.42) is dense, but certain optical glasses match diamond\'s n at much lower mass densities. Liquid water (n = 1.33) is denser than ice (n = 1.31) but both have similar n.',
        'The refractive index can be less than 1 for some materials — FALSE for optical frequencies: n = c/v, and v ≤ c for all known materials at optical frequencies, so n ≥ 1. (Note: phase velocity can exceed c in specific metamaterial or plasma contexts, but this does not violate relativity and is not relevant at this level.)',
        'Snell\'s Law only applies to glass — FALSE: Snell\'s Law applies at any boundary between two media with different refractive indices — air-water, water-ice, glass-oil, any combination. It is a universal geometric law of refraction.'
    ]
},

totalInternalReflection: {
    'Conditions for TIR': [
        'TIR can occur when light travels from air into glass — CRITICAL ERROR: TIR only occurs when light travels from a DENSER medium (higher n) to a LESS DENSE medium (lower n). From air (n=1) into glass (n=1.52), light is entering a denser medium — TIR is impossible regardless of the angle. If n₂ > n₁, sinθ_c = n₂/n₁ > 1, which has no real solution — confirming TIR is geometrically impossible in this direction.',
        'TIR occurs at exactly the critical angle — IMPRECISE: TIR occurs for all angles greater than or equal to the critical angle (θᵢ ≥ θ_c). At exactly θ_c, the refracted ray travels along the boundary (θ₂ = 90°) — this is the transition point. For any angle above θ_c, TIR is complete. For any angle below θ_c, partial refraction and partial reflection occur simultaneously.',
        'TIR means 100% of incident light is reflected with no loss — CORRECT for the ideal geometric boundary, but in practice: surface imperfections, contamination of the cladding, evanescent wave penetration into the cladding, and absorption within the core all cause small losses. Real optical fibres have 0.2 dB/km loss despite TIR.'
    ],
    'Critical Angle': [
        'The critical angle is the same for all glass types — FALSE: sin(θ_c) = n₂/n₁, so θ_c depends on the specific n of the glass. Crown glass (n = 1.52) gives θ_c = 41.1°; flint glass (n = 1.62) gives θ_c = 38.1°; diamond (n = 2.42) gives θ_c = 24.4°. Different glass types have distinctly different critical angles.',
        'A larger critical angle means better TIR trapping — FALSE: a SMALLER critical angle means TIR is triggered at a smaller angle of incidence, trapping a LARGER range of ray angles within the medium. Diamond\'s small θ_c (24.4°) traps most of the light inside; glass\'s larger θ_c (41.1°) traps less. Smaller θ_c = better trapping.'
    ]
},

lensesAndMirrors: {
    'Sign Convention Errors': [
        'Virtual images always have a negative image distance — TRUE by convention for lenses (real is positive): virtual images form on the same side as the object, giving negative v. This is correct but must be applied consistently — the sign convention must be stated and maintained for the entire problem.',
        'A concave lens has a negative focal length — TRUE for the real-is-positive sign convention. A diverging (concave) lens causes parallel rays to appear to diverge from a focal point on the same side as the incoming light — this is a virtual focal point, giving negative f.',
        'Magnification is always positive for upright images — TRUE for the formula m = −v/u. When v is negative (virtual image, same side as object) and u is positive, m = −(negative)/positive = positive → upright image. When both u and v are positive (real image), m = −v/u < 0 → inverted image.'
    ],
    'Image Formation Misconceptions': [
        'A converging lens always converges light to a point — FALSE: a converging lens converges parallel rays to the focal point. Diverging rays from an object inside F are made less divergent by the lens but still diverge after it — producing a virtual image, not a convergence. \'Converging lens\' describes what it does to parallel rays, not to all rays.',
        'A thicker lens always has a shorter focal length — OVERSIMPLIFICATION: focal length depends on the radii of curvature of both surfaces and the refractive index, according to the lensmaker\'s equation 1/f = (n−1)(1/R₁ − 1/R₂). Thickness alone does not determine focal length — a thick lens with nearly flat surfaces can have a longer focal length than a thin lens with highly curved surfaces.',
        'The thin lens equation does not apply to mirrors — FALSE in terms of mathematical form: the mirror equation 1/f = 1/u + 1/v is identical in form to the thin lens equation, with the same sign conventions (real is positive for both). The physics differs (reflection vs refraction) but the geometric relationship between object, image, and focal point follows the same algebraic form.'
    ],
    'Real vs Virtual Image': [
        'A virtual image cannot be photographed — FALSE: a camera (or the eye) can photograph or detect a virtual image. The eye or camera lens converges the apparently diverging rays that appear to come from the virtual image location and forms a real image on the retina or sensor. A virtual image cannot be projected onto a screen without using a second optical element.',
        'Real images are always larger than virtual images from the same lens — FALSE: a converging lens produces a diminished real image for objects far beyond 2F (camera configuration) and a magnified virtual image for objects just inside F (magnifying glass configuration). Both are possible with the same lens; size depends on object distance, not image type.'
    ]
},

opticalInstruments: {
    'Vision Defects': [
        'Short-sighted people cannot see anything clearly — FALSE: myopic people see near objects clearly (their near point may be normal) but cannot focus on distant objects. Their far point is less than infinity — a point they can see clearly but beyond which objects blur. Only distance vision is impaired.',
        'Glasses lenses increase the power of the eye — IMPRECISE: for myopia, the corrective diverging lens reduces the effective power of the eye-lens system, moving the focal point back to the retina. For hyperopia, the converging lens adds power, moving the focal point forward. The spectacle lens adjusts the total system power, not simply increases it.',
        'A stronger prescription means a greater dioptric power — TRUE in magnitude but requires sign: a −5.00 D lens has more corrective effect than a −1.00 D lens and both are stronger than 0 D. But a +3.00 D lens and a −3.00 D lens have the same magnitude (3 D) but opposite effects (one converging, one diverging). "Stronger" must specify the sign context.'
    ]
},



waveBasics: {
    'Matter Transport': [
        'Waves carry matter from source to receiver — FALSE: waves transfer energy, not matter. Individual particles oscillate about a fixed equilibrium position and return to it. A cork floating on water bobs up and down as a wave passes — it does not travel with the wave toward the shore.',
        'Faster waves mean particles move faster — FALSE: wave speed (how fast the wave pattern travels) and particle speed (how fast individual particles oscillate) are completely separate quantities. A high-frequency, low-amplitude wave can have a fast wave speed but slow particle oscillation.',
        'Amplitude determines wave speed — FALSE: wave speed is determined by the medium (e.g. tension and linear density for a string; bulk modulus and density for sound). Amplitude determines the energy of the wave. Doubling the amplitude quadruples the energy but does not change wave speed in a linear medium.'
    ],
    'Wave Equation Errors': [
        'Frequency changes when a wave enters a new medium — CRITICAL ERROR: frequency is set by the source and cannot change at a boundary. If 440 compressions per second leave the source, 440 must arrive at the boundary per second. Only wave speed (set by the medium) and wavelength (adjusting to maintain v = fλ) change.',
        'Wave speed depends on frequency — FALSE for non-dispersive media: v depends on medium properties only (e.g. v_sound depends on air density and bulk modulus, not on the pitch of the sound). Frequency and wavelength both change when v changes, but neither causes v to change.',
        'Wavelength and amplitude are the same thing — FALSE: wavelength (λ) is a horizontal distance (crest to crest), measured in metres along the propagation direction. Amplitude (A) is a vertical distance (equilibrium to crest), also in metres but perpendicular to propagation. On a displacement-distance graph, confusing vertical and horizontal measurements gives a completely wrong answer.'
    ]
},

transverseAndLongitudinal: {
    'Type Classification': [
        'Sound is a transverse wave — FALSE: sound is a longitudinal wave. Compressions and rarefactions propagate parallel to the direction of energy transfer. Only transverse waves show particle oscillation perpendicular to propagation.',
        'All waves in liquids are longitudinal — FALSE: surface water waves are approximately transverse (particles move in ellipses or circles). Seismic S-waves (transverse) cannot travel through liquids, but light (transverse electromagnetic) travels through transparent liquids freely.',
        'Electromagnetic waves require air to travel — FALSE: EM waves are oscillating electric and magnetic fields — they require no medium. Light from the Sun travels through 150 million km of near-vacuum. It is sound (longitudinal mechanical wave) that requires a medium, not light.'
    ],
    'Polarisation': [
        'Longitudinal waves can be polarised — FALSE: polarisation restricts oscillation to one plane. Longitudinal waves oscillate along the propagation direction only — there is no other plane to restrict to. Only transverse waves have perpendicular oscillation directions that can be selectively transmitted.',
        'Polarisation reduces wave speed — FALSE: a polaroid filter selects one oscillation plane and absorbs the other; it does not affect the speed of the transmitted wave. The filtered wave travels at the same speed as the incident wave, just with reduced amplitude and intensity.'
    ]
},

waveBehaviour: {
    'Interference Conditions': [
        'Path difference = 2λ gives destructive interference — FALSE: 2λ is a whole-number multiple of λ, giving constructive interference (waves arrive in phase). Destructive interference requires a half-integer path difference: 0.5λ, 1.5λ, 2.5λ, etc. The test: divide path difference by λ — whole number = constructive; ends in .5 = destructive.',
        'Destructive interference destroys energy — FALSE: energy is conserved; it is redistributed in space. At nodes (destructive interference points), displacement is zero but the energy appears at the antinodes (constructive points). The average energy across the interference pattern equals the total energy from both sources.',
        'Two waves always interfere to give zero when they meet — FALSE: complete destructive interference (zero resultant) requires equal amplitudes AND exact antiphase. If amplitudes differ or the phase difference is not exactly 180°, partial interference gives a non-zero resultant.'
    ],
    'Diffraction': [
        'Diffraction only occurs at very small gaps — FALSE: diffraction is significant whenever gap width is comparable to or smaller than wavelength. Sound (λ ≈ cm to m) diffracts through ordinary doorways. Radio waves (λ ≈ metres) diffract around hills. It appears that only small gaps produce diffraction because visible light has λ ≈ 500 nm, so only nanometre-scale gaps (like atomic crystal planes) produce observable light diffraction.',
        'Diffraction changes wave speed — FALSE: diffraction is the spreading of a wave after passing through a gap or around an obstacle. The wave speed, frequency, and wavelength are unchanged by diffraction — only the direction of propagation of different parts of the wavefront changes.',
        'Larger gaps produce more diffraction — FALSE: this is the opposite of reality. Larger gaps (gap >> λ) produce minimal diffraction — the wave passes through as a nearly undisturbed beam. Smaller gaps (gap ≈ λ or smaller) produce the greatest angular spreading.'
    ],
    'Standing Waves': [
        'Standing waves travel through the medium like other waves — FALSE: standing waves are stationary interference patterns — they do not propagate. Nodes are permanently stationary; antinodes oscillate with maximum amplitude at fixed positions. The name "standing" is chosen precisely because the pattern stands still.',
        'Any frequency produces a standing wave on a string — FALSE: standing waves require that a whole number of half-wavelengths fit exactly between the boundaries: L = nλ/2. Only discrete resonant frequencies (fₙ = nv/2L) satisfy this condition. All other frequencies produce a travelling wave pattern that does not resonate.',
        'Nodes have zero energy in a standing wave — MISLEADING: nodes have zero displacement and zero kinetic energy at the moment of maximum displacement elsewhere, but maximum potential energy (in the field sense) passes through nodes as the wave pattern oscillates. The time-averaged energy at a node is non-zero in a real string.'
    ]
},

soundWaves: {
    'Medium Dependence': [
        'Sound travels fastest in air because air is everywhere — FALSE: sound travels slowest in gases, faster in liquids, and fastest in solids. Steel transmits sound at 5100 m·s⁻¹; water at 1480 m·s⁻¹; air at 340 m·s⁻¹. Greater intermolecular forces and closer particle spacing in solids and liquids allow compressions to propagate faster.',
        'Sound cannot travel through solids — FALSE: this is one of the most pervasive misconceptions in wave physics. Sound travels through all material media — solids, liquids, and gases. Placing your ear against a long metal fence and tapping the far end demonstrates conduction of sound through solid metal far better than through air.',
        'Louder sounds travel faster — FALSE: sound speed in a given medium is independent of amplitude (loudness). A shout and a whisper travel at exactly the same speed in the same air. Amplitude determines energy and perceived loudness only.'
    ],
    'Intensity and Decibels': [
        'Doubling the number of identical sound sources doubles the sound level in decibels — FALSE: doubling the number of identical sources doubles the intensity (I₂ = 2I₁). The dB increase is 10 log₁₀(2) ≈ 3 dB, not a doubling of the dB level. Ten identical sources give only +10 dB, not 10× the dB value.',
        'A sound level of 0 dB means silence — FALSE: 0 dB corresponds to the threshold of human hearing, I₀ = 10⁻¹² W·m⁻², which is a real (if tiny) sound intensity. Negative dB values are physically possible — they simply mean the intensity is below the reference threshold I₀. True silence (zero intensity) would be −∞ dB.'
    ]
},

electromagneticWaves: {
    'Medium and Speed': [
        'Different EM waves travel at different speeds in vacuum — FALSE: all EM waves travel at exactly c = 3.00 × 10⁸ m·s⁻¹ in vacuum, regardless of frequency or wavelength. Radio waves and gamma rays travel at the same speed. They do travel at different speeds in material media, causing dispersion (the basis for prisms separating white light into a spectrum).',
        'Radio waves travel faster than gamma rays because they have longer wavelengths — FALSE: v = fλ, but for EM waves in vacuum, v is fixed at c regardless of f or λ. Higher frequency = shorter wavelength, but same speed. The enormous frequency difference between radio and gamma rays accounts for the enormous wavelength difference — not a speed difference.'
    ],
    'Ionisation and Energy': [
        'All EM radiation is dangerous — FALSE: radio waves, microwaves, and infrared are non-ionising — they lack sufficient energy per photon to remove electrons from atoms or break chemical bonds (at normal intensities). Microwave ovens are safe by design because the radiation causes molecular rotation (heating) rather than ionisation. UV, X-rays, and gamma rays are ionising and can damage DNA.',
        'Microwaves cook food by making molecules vibrate faster — IMPRECISE: microwaves cause polar molecules (primarily water) to rotate rapidly by coupling with the oscillating electric field. This rotational energy is transferred to neighbouring molecules via collisions, producing heat — it is the collisions (conduction within the food) that actually heat the food uniformly, not direct microwave absorption at every point.'
    ]
},

currentFlow: {
    'Current Consumption': [
        "Current is used up as it flows around a circuit — FALSE: current is the rate of charge flow, and charge is conserved (KCL). The same current that enters a resistor leaves it. What is 'used up' (transferred to the component) is energy, not charge or current. A common symptom of this misconception is believing that the component nearest the battery gets the most current.",
        "The component closer to the positive terminal of the battery receives more current — FALSE: in a series circuit, current is identical everywhere by KCL. The position of a component in the series loop has no effect on the current through it.",
        "Current flows instantly everywhere in the circuit the moment the switch closes — IMPRECISE: the electric field propagates at near the speed of light, so the effect is practically instantaneous. However, individual electrons have a drift velocity of fractions of mm/s. The signal (field) travels fast; the charge carriers move slowly."
    ],
    'Conventional vs Electron Flow': [
        "Conventional current flows in the direction electrons move — FALSE: conventional current is defined from positive to negative terminal (the direction a positive charge would flow). Electrons (negative charges) flow from negative to positive — opposite to conventional current. Both descriptions are correct; they describe the same physical phenomenon from different perspectives.",
        "In electrolytes, electrons carry the current — FALSE: in solutions and electrolytes, current is carried by ions (positive and negative). Electrons carry current in metals; ions carry current in solutions; holes and electrons carry current in semiconductors."
    ]
},

voltageAndPotential: {
    'EMF vs Voltage': [
        "EMF is the same as terminal voltage — FALSE: EMF (ε) is the energy supplied per unit charge by the source, measured at open circuit (no current). Terminal voltage is the voltage across the battery terminals when current flows: V_terminal = ε − Ir. They are equal only when r = 0 (ideal battery) or I = 0 (open circuit).",
        "A battery with higher voltage always delivers more current — FALSE: current depends on both voltage and total resistance (including internal resistance): I = ε/(R+r). A high-voltage battery connected to a high external resistance may deliver less current than a lower-voltage battery with very low external resistance.",
        "Voltage is a property of a single point — FALSE: voltage (potential difference) is always defined between TWO points. It is meaningless to ask 'what is the voltage at point A' without specifying a reference point. In circuits, we conventionally set the negative terminal of the battery as zero volts (ground) and measure all voltages relative to it."
    ],
    'Energy Transfer': [
        "The battery pushes charge around the circuit and the charge carries the energy — MISLEADING: the battery creates an electric field throughout the circuit instantaneously. Energy is transported by the electromagnetic field (specifically by the Poynting vector outside the wires), not by the drifting electrons themselves. The electron drift velocity is far too slow to account for the instantaneous energy delivery observed. This distinction matters at advanced level but the field picture is the physically correct one.",
        "A voltmeter measures how much electricity has passed — FALSE: a voltmeter measures potential difference (energy per unit charge) between two points. An ammeter measures current (charge per unit time). These are completely different quantities and require different instruments."
    ]
},

resistanceAndOhmsLaw: {
    'Ohm\'s Law Universality': [
        "Ohm's Law (V = IR) applies to all electrical components — FALSE: Ohm's Law applies only to ohmic conductors — those where R is constant regardless of current or voltage. Filament lamps, diodes, thermistors, and LEDs are non-ohmic: their resistance changes with operating conditions. V = IR can still be used to calculate resistance at a specific operating point, but R is not a constant for these components.",
        "A straight line through the origin on an I-V graph always means the component is ohmic — FALSE: the graph must be a straight line for ALL values of V (or at least a wide range), not just at one point. A diode's I-V graph is not straight overall even if a tangent at one point passes near the origin.",
        "Resistance always opposes current, so it always reduces the useful power in a circuit — MISCONCEPTION: resistance in a lamp converts electrical energy to light and heat — this is the desired function, not a loss. Resistance is only 'wasteful' in transmission wires where heat generation is undesired. In a heater element, R converting electrical energy to heat is the entire purpose."
    ],
    'Resistivity': [
        "A longer wire has more resistance, so it would carry less current — only partially correct: a longer wire has higher resistance (R = ρL/A), so for the same voltage, less current flows. But the wire's resistance is just one component of the total circuit resistance — the effect on current depends on whether the wire's resistance is significant relative to the total circuit.",
        "A thicker wire has more resistance because it has more material — FALSE: a thicker wire has LOWER resistance. Greater cross-sectional area A reduces R (R = ρL/A): more area means more parallel paths for electrons, reducing total resistance. This is the opposite of the naive expectation."
    ]
},

seriesAndParallelCircuits: {
    'Series Circuit Misconceptions': [
        "In a series circuit, the component nearest the battery receives the most energy (or current) — FALSE: current is identical everywhere in a series circuit (KCL). Energy delivered to each component depends on its resistance — the highest-resistance component receives the most voltage (V = IR) and most power (P = I²R), regardless of position.",
        "Adding more resistors in series increases the current — FALSE: adding series resistance increases R_total, which reduces current (I = V/R_total). Series resistors always reduce total current for a fixed supply voltage.",
        "Removing one component from a series circuit only stops that component — FALSE: a series circuit has only one current path. Breaking the circuit anywhere (component fails open-circuit, wire disconnects) stops current everywhere. This is why old-style series Christmas lights went out completely when one bulb failed."
    ],
    'Parallel Circuit Misconceptions': [
        "In a parallel circuit, the total current is the same as in each branch — FALSE: KCL states that total current splits between branches. I_total = I₁ + I₂ + I₃. Each branch carries a fraction of the total current, determined by its resistance.",
        "Adding more branches in parallel increases total resistance — FALSE: each additional parallel branch provides another path for current, reducing total resistance. 1/R_total = 1/R₁ + 1/R₂ + ... increases with each added term, so R_total decreases.",
        "Parallel circuits use more power than series circuits with the same components — TRUE, but for the right reason: in parallel, each component receives full supply voltage; in series, voltage is shared. Higher voltage per component means more current and more power per component. Total power is the sum — parallel configurations deliver far more total power for the same supply and same components."
    ],
    'Mixed Circuit Errors': [
        "The two-resistor parallel shortcut (R₁R₂)/(R₁+R₂) works for any number of resistors — FALSE: this formula is only valid for exactly two resistors in parallel. For three or more, use the full reciprocal method: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...",
        "Kirchhoff's Laws only apply to simple circuits — FALSE: KCL and KVL apply to any circuit regardless of complexity, linearity, or the number of components. They are universal conservation laws, not approximations."
    ]
},

electricalPower: {
    'Power and Energy Confusion': [
        "A higher-wattage appliance always costs more to run — FALSE: cost depends on energy consumed (E = Pt), not power alone. A 2000 W heater used for 1 hour costs the same as a 1 W device used for 2000 hours. A 100 W lamp on for 10 hours uses the same energy as a 1000 W kettle on for 1 hour.",
        "Power is the same as energy — FALSE: power is the RATE of energy transfer (watts = joules per second). Energy is the total transferred (joules). Confusing them leads to errors like 'a 60 W lamp uses 60 joules' without specifying a time.",
        "The three power formulae give different answers for the same situation — FALSE: P = IV, P = I²R, and P = V²/R are all mathematically equivalent (derived from each other using V = IR). If they give different answers, either V = IR does not hold (non-ohmic component at a different operating point than assumed) or a substitution error has been made. Always cross-check with a second power formula."
    ],
    'Joule Heating': [
        "Only resistors generate heat; other components (lamps, motors) do not — FALSE: any component with resistance dissipates power as heat via I²R, even if it also performs useful work. A motor converts most electrical energy to mechanical work, but its winding resistance still generates waste heat. The question is what fraction of input power becomes useful output vs waste heat.",
        "Current destroys itself in a resistor, which is why it heats up — FALSE: current is conserved (same entering and leaving the resistor — KCL). What is transferred to the resistor is energy — the kinetic energy of drifting electrons is transferred to the lattice through collisions, increasing internal (thermal) energy, which we observe as heating."
    ]
},


newtonLaws: {
    'First Law Misconceptions': [
        'Objects need a continuous force to keep moving — FALSE (Aristotelian error): Newtons First Law states the opposite. Objects maintain constant velocity unless a net force acts. The sensation that pushing is required arises because friction constantly decelerates objects on Earth — the push counteracts friction, not maintains motion. In space, a thrown ball travels forever with no force applied.',
        'Heavier objects fall faster than lighter ones — FALSE: acceleration due to gravity g = F/m = mg/m = g, independent of mass. Air resistance creates differences in practice (a feather vs a hammer in air) but in vacuum all objects fall with identical acceleration. This was demonstrated on the Moon by Apollo 15 astronaut David Scott.',
        'An object at rest has no forces acting on it — FALSE: a stationary object typically has multiple forces in balance (equilibrium). A book on a table has weight downward and normal reaction upward — two forces, not zero forces. Zero net force, not zero force, is the condition for constant velocity (including rest).'
    ],
    'Second Law Misconceptions': [
        'Applied force equals net force — CRITICAL ERROR: F_net = ma uses NET force — the vector sum of ALL forces. A car accelerating at 2 m·s⁻² with mass 1200 kg has F_net = 2400 N, but the engine force might be 3200 N with 800 N of friction. Using the engine force in F = ma gives the wrong acceleration. Always draw the free body diagram first.',
        'Acceleration is always in the direction of motion — FALSE: acceleration is in the direction of NET FORCE, which may differ from direction of motion. A thrown ball moving upward decelerates — it is moving upward but accelerating downward (gravity acts downward regardless of direction of motion). A car rounding a curve accelerates toward the centre while moving tangentially.',
        'Greater mass means greater speed for the same force — FALSE: greater mass means lesser acceleration (a = F/m). Greater speed requires greater impulse (Ft) or sustained force over time, not just larger force at one instant.'
    ],
    'Third Law Misconceptions': [
        'Newtons Third Law force pairs act on the same object and cancel out — FUNDAMENTAL ERROR: Third Law pairs ALWAYS act on different objects. Force A on B is paired with Force B on A — one force on each. They cannot cancel because cancellation requires two forces on the same object. When a horse pulls a cart, the cart does exert an equal backward force on the horse — but this acts on the horse, not on the cart. The cart accelerates because the horses pull on it exceeds friction — not because Third Law forces cancel.',
        'If action and reaction are equal and opposite, nothing can ever accelerate — FALSE: see above. Acceleration results from the NET force on a single object. The reaction force acts on a different object and is irrelevant to the original objects acceleration. A rocket accelerates because net force on the rocket = thrust − weight ≠ 0, even though the rocket exerts an equal and opposite force on the exhaust gases (a different object).',
        'Bigger/stronger objects exert bigger forces — FALSE: Third Law forces are always exactly equal in magnitude regardless of mass, speed, or perceived strength. A truck colliding with a bicycle exerts the same magnitude force on the bicycle as the bicycle exerts on the truck — by Newtons Third Law exactly. The different outcomes arise from F = ma: the same force gives very different accelerations to very different masses.'
    ]
},

forcesAndEquilibrium: {
    'Friction Misconceptions': [
        'Friction always opposes motion — IMPRECISE: static friction opposes the tendency to slide, not necessarily actual motion. A person walking forward is propelled by friction acting forward on their foot from the ground — this friction acts in the direction of motion. If the ground were frictionless (ice), walking would be impossible. Friction opposes relative sliding between surfaces, which may be in the direction of overall motion.',
        'Friction depends on contact area — FALSE: the classical friction law f = μN is independent of contact area. A large flat box and a small box of the same mass on the same surface experience the same friction force. This is why tyres are wide for cornering grip (maximising N via downforce) but width alone does not increase friction — the normal force is what matters.',
        'Kinetic friction is always less than static friction — CONTEXT-SPECIFIC: μ_kinetic < μ_static for the same surface pair — this is a general empirical result. But this does not mean kinetic friction force is smaller than static — both equal μN and the normal force is the same. The practical implication is: it requires more force to initiate sliding than to maintain it, which is why objects often slip suddenly rather than gradually.',
        'Objects on an inclined plane have weight along the slope — IMPRECISE: the full weight mg acts vertically downward. It is only the COMPONENT of weight along the slope that equals mg·sin θ. The full weight vector does not change direction just because the surface is inclined. Students must resolve the weight vector — not relocate it — when analysing inclined planes.'
    ],
    'Equilibrium Misconceptions': [
        'Equilibrium means no forces act on the object — FALSE: equilibrium means net force (and net torque) = 0. Multiple forces can act on an object in equilibrium — they simply sum to zero vectorially. A bridge is in equilibrium under its own weight, traffic loads, and support reactions — all simultaneously present and balanced.',
        'If an object is in equilibrium, it must be stationary — FALSE: Newtons First Law states that constant velocity (including zero velocity) corresponds to zero net force. A car travelling at constant speed on a straight road is in translational equilibrium — driving force equals friction. Equilibrium means constant velocity, not necessarily zero velocity.'
    ]
},

kinematicsBasics: {
    'Suvat Application Errors': [
        'Suvat equations apply to any motion — FALSE: suvat equations require constant (uniform) acceleration throughout the period of interest. They cannot be applied to: projectile motion over the full trajectory if air resistance acts (which makes drag force velocity-dependent, changing acceleration); a car journey with varying speed; a falling object near terminal velocity where drag changes acceleration. Always verify constant acceleration before applying suvat.',
        'Deceleration is negative acceleration — PARTIALLY CORRECT but misleading: deceleration means the magnitude of velocity is decreasing. Whether the acceleration is numerically positive or negative depends on the defined positive direction. If rightward is positive and the object moves rightward while slowing, a is negative. If leftward is positive and the same object moves rightward while slowing, a is positive. The term "deceleration" obscures the sign — always define positive direction and assign signs explicitly.',
        'Displacement equals distance — FALSE for non-linear or non-monotonic motion: displacement is the vector from start to finish; distance is the total path length. A ball thrown upward 20 m that returns to the starting point has zero displacement but 40 m distance. Suvat equations use displacement s, not distance. For a ball returning to the same height: s = 0 in the vertical direction for the complete flight.'
    ],
    'Projectile Misconceptions': [
        'A horizontally launched projectile falls more slowly because the horizontal motion "supports" it — FALSE: the horizontal and vertical motions are completely independent. The vertical acceleration is always g = 9.81 m·s⁻² downward regardless of horizontal speed. A bullet fired horizontally and a bullet dropped simultaneously from the same height hit the ground at the same time — demonstrated experimentally and following directly from component independence.',
        'The fastest point of a projectile trajectory is at the launch — FALSE for angled launches: horizontal speed is constant throughout. At the apex, vertical speed is zero so total speed = horizontal component (minimum speed, not maximum). At launch, total speed = √(u_x² + u_y²) > u_x. On landing, total speed equals launch speed (symmetric trajectory, same height). For a horizontally launched projectile, maximum speed is at the landing point.'
    ]
},

energyAndWork: {
    'Work and Energy Misconceptions': [
        'Work is done whenever a force is applied — FALSE: work requires force AND displacement in the direction of the force. Holding a heavy bag stationary requires a large force but does zero work (s = 0). A satellite in circular orbit experiences centripetal force (gravity) but gravity does zero work because it is perpendicular to the displacement (θ = 90°, cos 90° = 0). The correct definition is W = Fs·cos θ — angle is critical.',
        'Energy is lost when friction acts — IMPRECISE: energy is never destroyed (First Law of Thermodynamics). When friction acts, mechanical (kinetic + potential) energy converts to internal (thermal) energy — heat in the surfaces. The total energoy of the system is conserved; the mechanical energy is not. Students who say "energy is lost to friction" mean mechanical energy converts to thermal energy — this distinction matters for advanced work.',
        'An object must be moving to have energy — FALSE: gravitational potential energy (Eₚ = mgh) requires position, not motion. A boulder at height h above the ground has energy by virtue of its position, not its velocity. Chemical energy, elastic potential energy, and nuclear energy are all stored in stationary objects. The confusion arises from over-familiarity with kinetic energy as the only form considered in introductory problems.'
    ],
    'Conservation Errors': [
        'Energy conservation applies to all collisions — FALSE: energy conservation (mechanical) applies only when no non-conservative forces act — i.e. no friction, no inelastic deformation, no air resistance. In collisions, inelastic deformation, heat, and sound convert kinetic energy — it is not conserved as mechanical energy. MOMENTUM is conserved in all collisions (in a closed system). Never use energy conservation to find post-collision velocities unless the collision is explicitly stated to be elastic.',
        'Gravitational PE = mgh requires height above the ground — FALSE: h is the height change relative to any arbitrary reference level. The choice of reference level does not affect energy changes (ΔEₚ = mgΔh is independent of reference). In roller coaster problems, taking the lowest point as h = 0 is convenient. In projectile problems, taking launch height as h = 0 simplifies calculation. The reference level is a choice, not a physical constraint.'
    ]
},

momentumAndImpulse: {
    'Momentum Conservation Errors': [
        'Momentum is conserved in all situations — FALSE: momentum is conserved only in closed systems with no net external force. A ball rolling to a stop loses momentum to friction (external force from ground). A rocket accelerating gains momentum — but total system momentum (rocket + exhaust) is conserved. The condition "no net external force" is essential. In most collision problems, the collision time is short enough that external forces (friction, gravity for horizontal motion) contribute negligible impulse — this is the justification for applying conservation.',
        'Kinetic energy is conserved in collisions — FALSE unless the collision is elastic: all real macroscopic collisions are inelastic to some degree — deformation, heat, and sound absorb kinetic energy. Billiard balls are approximately elastic; car crashes are highly inelastic. Kinetic energy conservation is an idealisation valid only for elastic collisions. When in doubt, use momentum conservation only — it is always valid for closed systems.',
        'Impulse changes an object\'s speed — IMPRECISE: impulse changes MOMENTUM (a vector). Momentum = mv in a direction. If the impulse is in the same direction as the velocity, speed increases. If opposite, speed decreases. If perpendicular, the direction changes with speed approximately unchanged (for small impulses). This distinction matters: a goalkeeper saving a shot experiences a large impulse that reverses ball direction — this is a larger momentum change (and impulse) than one that simply stops the ball.'
    ],
    'Impulse Calculation Errors': [
        'Using the average force directly to calculate impulse requires knowing the time — TRUE, but students often calculate force without time and then cannot find impulse: the correct approach when given a velocity change is J = Δp = m(v − u), which gives impulse without needing force or time. Force can then be found if time is known: F_avg = J/Δt. Many students try to calculate impulse via force when momentum change is the more direct route.',
        'Equal impulse means equal force — FALSE: J = FΔt. The same impulse can result from large F and small Δt or small F and large Δt. An airbag and a rigid dashboard can deliver the same impulse (same Δp for the same crash) but with very different forces because they extend the stopping time differently. This is the fundamental principle of impact protection — never equate impulse with force without considering time.'
    ]
},



conductionBasics: {
    'Heat vs Temperature': [
        'Heat and temperature are the same thing — FALSE: temperature is average kinetic energy of particles (intensive property); heat is energy transferred between objects due to temperature difference (extensive, measured in joules). A spark has high temperature but negligible heat; the ocean has low temperature but enormous heat content.',
        'Objects contain heat — FALSE: objects contain internal energy (thermal energy); heat is energy in transit. We say heat flows, not that objects have heat. Once transferred, it becomes internal energy, not stored heat.',
        'A hot object has more heat than a cold object — OVERSIMPLIFICATION: it has higher temperature; whether it has more thermal energy depends on mass and specific heat capacity. 1 kg of water at 30°C contains more thermal energy than 1 g of steel at 200°C.'
    ],
    'Conduction Mechanism': [
        'All materials conduct heat equally — FALSE: thermal conductivity varies by a factor of 10,000 between copper (k = 400) and aerogel (k = 0.015)',
        'Insulators are cold to touch — FALSE: at room temperature, insulators feel approximately room temperature. Metals feel cold because they rapidly conduct heat away from your skin; foam feels room temperature because it cannot conduct heat away quickly. The sensation reflects conductivity, not temperature.',
        'Thicker walls always reduce heat loss by the same factor — FALSE: the reduction follows Q/t = kAΔT/Δx, so doubling thickness halves heat loss only if k and A and ΔT are unchanged. If other layers dominate total R, adding more of a low-R material has negligible effect.'
    ],
    'Fourier Law Errors': [
        'The negative sign in Fourier\'s Law means heat flows backward — FALSE: the negative sign simply indicates that heat flows in the direction of decreasing temperature (down the gradient). If we take ΔT = T_hot − T_cold (positive), the magnitude formula Q/t = kAΔT/Δx gives a positive rate in the hot-to-cold direction.',
        'Fourier\'s Law gives total heat transferred — FALSE: Q/t is the RATE of heat transfer (watts), not total heat (joules). Total heat requires multiplying by time: Q = (Q/t) × t.'
    ]
},

convectionBasics: {
    'Convection Mechanism': [
        'Convection occurs in solids — FALSE: convection requires bulk movement of a fluid. Solids cannot flow. Heat transfer in solids occurs exclusively by conduction.',
        'Hot air rises because it is lighter — IMPRECISE: hot air rises because thermal expansion decreases its density, making it less dense than the surrounding cooler air. Buoyancy force (Archimedes principle) then pushes the less dense air upward. "Lighter" conflates mass with density.',
        'Forced convection is always better than natural convection — OVERSIMPLIFICATION: forced convection gives higher h values (typically 10–100× natural convection), but it requires energy input (fan, pump). For passive systems where energy efficiency matters, natural convection may be preferred despite lower rates.',
        'Convection heats objects directly through fluid contact — PARTIALLY MISLEADING: the fluid acts as the energy carrier. Thermal energy is first transferred from the hot surface to the fluid by conduction at the boundary layer, then the fluid moves (carrying the energy), then energy transfers from the fluid to the cool surface by conduction again. Convection is a fluid transport mechanism for conductive heat transfer.'
    ]
},

radiationBasics: {
    'Temperature Scale Error': [
        'Stefan-Boltzmann Law works with Celsius temperatures — CRITICAL ERROR: P = εσT⁴ requires T in Kelvin absolutely. Using T = 100°C gives T⁴ = 10⁸, but the correct T = 373 K gives T⁴ = 1.93 × 10¹⁰ — an error factor of 193. This error produces answers hundreds to thousands of times smaller than the true value.',
        'An object at 0°C emits no radiation — FALSE: 0°C = 273 K. Radiation is emitted by any object above 0 K (absolute zero). At 273 K, P/A = 5.67 × 10⁻⁸ × 273⁴ = 315 W·m⁻² — a substantial emission.'
    ],
    'Emissivity Misconceptions': [
        'A shiny surface reflects radiation and therefore does not absorb it — CORRECT CONCLUSION but needs precision: by Kirchhoff\'s Law, a good reflector (low ε) is also a poor absorber. High reflectivity (ρ) and low emissivity (ε) are two sides of the same property: ε + ρ = 1 for opaque surfaces. A polished silver surface with ε = 0.02 reflects 98% of incident radiation.',
        'Black objects are always hotter in sunlight because they absorb more radiation — CORRECT for steady state, but students often overlook that black objects also emit more radiation. At equilibrium, a black object in sunlight reaches a lower temperature than expected from absorption alone because it also radiates more. The equilibrium temperature depends on the balance of absorption and emission.'
    ],
    'Radiation Medium': [
        'Radiation needs air to travel — FALSE: radiation is electromagnetic waves and requires no medium. It travels through vacuum at the speed of light (3 × 10⁸ m·s⁻¹). The Sun-Earth heat transfer occurs across 150 million km of near-vacuum.',
        'Radiation only occurs at very high temperatures — FALSE: all objects above 0 K emit radiation. Humans, at 310 K, emit approximately 500 W·m⁻² in the infrared. The misconception arises because we only see radiation (visible light) from very hot objects, but all objects radiate in infrared.'
    ]
},

thermalEquilibrium: {
    'Equilibrium Concept': [
        'Objects reach thermal equilibrium instantaneously on contact — FALSE: thermal equilibrium is approached asymptotically according to Newton\'s Law of Cooling. The rate decreases as temperature difference decreases. True equilibrium (zero temperature difference) is approached but never exactly reached in finite time.',
        'When two objects reach thermal equilibrium, they have the same amount of heat — FALSE: at equilibrium, they have the same temperature. Their thermal energy contents depend on mass and specific heat capacity — a large cold object and a small hot object reaching equilibrium will share a final temperature but have very different internal energies.',
        'An insulated object stays at constant temperature forever — FALSE: perfect insulation is an idealisation. Real insulators reduce heat flow but never eliminate it. Additionally, if the object is above absolute zero, it radiates energy — insulation prevents conduction and convection but not radiation.'
    ],
    'Newton\'s Cooling Errors': [
        'The cooling constant k is the same for all objects — FALSE: k = hA/(mc) and depends on the convective coefficient h (depends on fluid and geometry), surface area A, mass m, and specific heat capacity c. Small objects with large surface area cool faster (higher k) than large, heavy objects.',
        'Cooling rate is constant over time — FALSE: the differential equation dT/dt = −k(T − T_amb) shows that cooling rate is proportional to current temperature excess. As the object cools, the rate decreases. Only for infinitesimally small time intervals and negligible cooling is a linear approximation valid.'
    ]
},

insulationAndConductors: {
    'Insulator Properties': [
        'Better insulation always means thicker walls — FALSE: choosing a material with lower k is far more effective per unit thickness. A 5 cm aerogel layer (k = 0.015) provides more thermal resistance than 10 m of brick (k = 0.8).',
        'Air is a poor insulator because it is a gas and gases conduct heat — PARTIALLY INCORRECT: stationary air is an excellent insulator (k = 0.026 W·m⁻¹·K⁻¹, similar to foam). The problem with air spaces in walls is that air can circulate, causing convective heat transfer. Double glazing works because the gap is narrow enough to suppress convection — the air is effectively stationary.',
        'Vacuum is the perfect insulator — TRUE for conduction and convection (no medium), but FALSE for radiation — radiation travels through vacuum freely. A thermos uses a vacuum to eliminate conduction and convection, but must use silvered walls to reduce radiation. Without silvering, a vacuum flask would lose heat rapidly by radiation.'
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
        },

        osmosis_water_not_solute: {
            method: 'Explicit anchor: "In OSMOSIS — WATER moves, not solute." Draw a semipermeable membrane with water molecules (small circles) on both sides and solute molecules (large circles) on one side only. Draw a thick arrow showing the net direction of WATER movement towards higher solute concentration. Repeat: the large solute molecules cannot cross in pure osmosis; only small water molecules redistribute. Write "water moves, not solute" on every osmosis diagram before beginning.',
            effectiveness: 'Very high for preventing the common solute-movement error in osmosis'
        }

     };
     const EndSection6 = "close"