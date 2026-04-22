



initializeAssessmentRubrics() {

 


this.assessmentRubrics = { 

thermodynamics: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about the laws of thermodynamics, key equations, and definitions from memory without reasoning.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No derivation or reasoning required.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Recall"],
            whatDistinguishesThisLevel: "A remember response states laws and equations correctly without explanation. 'The First Law is ΔU = Q − W' is remember. Explaining why ΔU = 0 for an isothermal ideal gas process crosses into understand.",
            examples: {
                zerothLaw:          "State the Zeroth Law of Thermodynamics. Define thermal equilibrium. List the four laws of thermodynamics by name.",
                firstLaw:           "Write the First Law equation. Define internal energy, heat, and work. State the sign convention for Q and W used in the physics convention.",
                secondLaw:          "State the Kelvin-Planck statement of the Second Law. Write the Carnot efficiency equation. Define entropy.",
                entropyAndDisorder: "Write Boltzmann's equation. State what Ω represents. State the condition for a spontaneous process in terms of ΔS_universe.",
                processes:          "Name the four standard thermodynamic processes and state the constraint that defines each."
            }
        },

        understand: {
            description: "Explain the physical meaning of thermodynamic laws — connect cause to effect and principle to consequence.",
            cognitiveDemand: "Causal explanation — the student explains WHY, not just WHAT.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Contrast", "Paraphrase", "Connect"],
            whatDistinguishesThisLevel: "Understand requires mechanism or reason. 'Entropy increases in irreversible processes because the universe moves toward its most probable macrostate' is understand. 'Entropy increases in irreversible processes' alone is remember.",
            examples: {
                zerothLaw:          "Explain why the Zeroth Law is necessary for thermometry. Your answer must address what property of temperature the law establishes and why two thermometers of different types must agree.",
                firstLaw:           "Explain why ΔU = 0 for an isothermal process involving an ideal gas but Q ≠ 0 and W ≠ 0. Connect this to the definition of internal energy for an ideal gas.",
                secondLaw:          "Explain why no heat engine can achieve 100% efficiency using the Second Law. Your answer must reference entropy, not merely state the Carnot equation.",
                entropyAndDisorder: "Explain why a gas expanding into a vacuum is irreversible using the statistical (Boltzmann) interpretation of entropy. Your answer must reference microstates.",
                carnotCycle:        "Explain why the Carnot cycle is the most efficient possible cycle operating between two given temperatures. Identify which of its four steps are reversible and why."
            }
        },

        apply: {
            description: "Use thermodynamic equations to solve problems not previously encountered in exactly this form.",
            cognitiveDemand: "Procedure execution in a novel situation. Common failures: wrong sign convention; using Celsius in Carnot equation; forgetting ΔU = 0 for isothermal ideal gas.",
            verbs: ["Calculate", "Determine", "Apply", "Solve", "Predict", "Use", "Compute"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Calculate Carnot efficiency for T_H = 700 K, T_C = 350 K' is apply. 'Write the Carnot equation' is remember.",
            examples: {
                zerothLaw:          "A thermometer is calibrated at the ice point (0°C) and steam point (100°C). It reads 62°C in an unknown liquid. A second thermometer reads 63°C. Using the Zeroth Law, state what additional information is needed to decide whether they disagree.",
                firstLaw:           "A gas absorbs 850 J of heat and simultaneously expands, doing 320 J of work on its surroundings. Calculate the change in internal energy. State whether the gas temperature increases or decreases for an ideal gas.",
                secondLaw:          "A heat engine absorbs 8,000 J per cycle from a reservoir at 900 K and rejects heat to a reservoir at 350 K. Calculate: (a) Carnot efficiency; (b) maximum work output; (c) minimum heat rejected.",
                entropyAndDisorder: "2 kg of copper (c = 385 J·kg⁻¹·K⁻¹) is heated from 300 K to 500 K. Calculate the entropy change of the copper.",
                refrigerator:       "A refrigerator maintains an interior at 255 K (−18°C) in a kitchen at 295 K (22°C). It consumes 200 W of electrical power and has COP = 3.2. Calculate: (a) the heat removed from the interior per second; (b) the heat deposited in the kitchen per second."
            }
        },

        analyze: {
            description: "Break down experimental data, engine performance figures, or entropy calculations to identify patterns and draw thermodynamic conclusions.",
            cognitiveDemand: "Decomposition and inference from evidence. The student works from data toward thermodynamic conclusions.",
            verbs: ["Analyse", "Identify", "Deduce", "Classify", "Determine", "Interpret", "Distinguish"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence. 'Given an engine's Q_H, Q_C, and reservoir temperatures, determine whether it operates above, below, or at the Carnot limit and identify what this implies' is analyze.",
            examples: {
                zerothLaw:          "Three objects A, B, and C are placed in sequence: A with B (equilibrium reached), then B with C (equilibrium reached). Without placing A and C together, analyse what the Zeroth Law allows you to conclude about A and C, and identify one experimental scenario where the conclusion could be wrong.",
                firstLaw:           "P-V data for a gas cycle are given as four (P, V) coordinate pairs. Identify each process type (isothermal, adiabatic, isobaric, isochoric), calculate the work done in each, and determine the net work output of the cycle. Deduce whether ΔU_cycle = 0 and explain why.",
                secondLaw:          "An engine operates between 800 K and 300 K, absorbs 5,000 J, and produces 2,800 J of work. Analyse whether this engine violates the Second Law. Calculate ΔS_universe per cycle and interpret the result.",
                entropyAndDisorder: "Entropy data for a substance from 0 K to 500 K are provided as a table of S vs T. Analyse the shape of the curve at (a) very low T; (b) at a phase transition; (c) at high T. Identify what each feature reveals about the molecular behaviour of the substance.",
                processes:          "A gas undergoes a cycle: isothermal expansion, then isochoric cooling, then isobaric compression back to the start. For each step, determine the sign of Q, W, and ΔU. Calculate the net work and net heat for the full cycle and verify consistency with the First Law."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a thermodynamic claim, engine performance, or model assumption.",
            cognitiveDemand: "Judgement with justification — the student identifies an error or limitation, explains the criterion by which it fails, and states what is correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Appraise", "Defend"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a thermodynamic standard. Simply calculating the correct value is apply-level. Judging whether a claimed device is possible, and why, is evaluate.",
            examples: {
                zerothLaw:          "A manufacturer claims their thermometer 'measures absolute temperature directly without calibration'. Evaluate this claim using the Zeroth Law — identify what calibration provides that direct measurement cannot.",
                firstLaw:           "An inventor claims a device that absorbs 1,000 J of heat from a reservoir and produces 1,000 J of work with no other interaction. Evaluate whether this device is possible. Identify which law it violates, if any, and whether it violates the First or Second Law or both.",
                secondLaw:          "A student argues: 'Entropy always increases, so all natural processes are irreversible — therefore a perfectly reversible engine is impossible in principle, not just in practice.' Evaluate this argument — identify what is correct, what is an overstatement, and what the Carnot cycle represents physically.",
                entropyAndDisorder: "Evaluate the common statement that 'entropy is a measure of disorder'. Identify two cases where the disorder analogy correctly predicts the direction of entropy change, and two cases where the disorder analogy is misleading or incorrect. Propose a more precise statement.",
                carnotCycle:        "A power station engineer claims that increasing the cold reservoir temperature from 30°C to 60°C while keeping the hot reservoir at 500°C would improve efficiency, as 'hotter is better on both sides'. Evaluate this claim quantitatively — calculate efficiencies before and after and explain the direction of change."
            }
        },

        create: {
            description: "Generate an original thermodynamic analysis, engine design, experimental protocol, or argument by synthesising multiple concepts.",
            cognitiveDemand: "Original synthesis. No single procedure produces the output — the student must integrate multiple concepts.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output that cannot be produced by recalling a single procedure. Designing a power cycle optimised for a specific temperature constraint requires integrating Carnot theory, process types, and real-world engineering constraints.",
            examples: {
                zerothLaw:          "Construct a thought experiment that demonstrates why the Zeroth Law is logically necessary — show what would happen in a universe where thermal equilibrium was not transitive. Your answer must identify at least two contradictions that would arise in thermometry.",
                firstLaw:           "Design a calorimeter experiment to measure the specific heat capacity of an unknown metal. Specify: (a) the experimental setup and measurements; (b) how you apply the First Law to calculate c; (c) sources of error and corrections; (d) how you would verify your result is not contaminated by heat exchange with surroundings.",
                secondLaw:          "Propose a thermodynamic cycle for a solar thermal power plant where the hot reservoir temperature varies throughout the day (500–900 K) and the cold reservoir is a river at 290 K. Specify: (a) how you would calculate average Carnot efficiency; (b) why the plant efficiency drops in the evening; (c) a strategy to maintain output as T_H falls.",
                entropyAndDisorder: "Formulate an entropy-based argument to explain why a scrambled egg cannot spontaneously unscramble itself. Your argument must: (a) identify the relevant macrostates and reason about their relative Ω values; (b) calculate an order-of-magnitude estimate of ΔS for the unscrambling process; (c) connect this to the direction of time.",
                carnotCycle:        "Derive the Carnot efficiency equation η_C = 1 − T_C/T_H from the condition ΔS_universe = 0 for a reversible cycle, without using any engine-specific assumptions. Show each algebraic step and state the physical interpretation of each step."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Confuses heat and temperature — uses Q and T interchangeably",
                "Cannot state the First Law with correct sign convention",
                "Does not know that Carnot efficiency requires Kelvin temperatures",
                "Believes entropy means 'mess' or 'disorder' in a vague everyday sense",
                "Cannot distinguish the four thermodynamic processes by their constraints",
                "Believes a 100% efficient engine violates the First Law rather than the Second"
            ],
            immediateNextSteps: [
                "Build the Q vs ΔU distinction: Q is energy crossing a boundary (joules, path-dependent). ΔU is the change in stored energy (state-dependent). Write these on separate cards and never use them interchangeably. Practise: 'an isothermal process has ΔU = 0 but Q ≠ 0' — this sentence is your test.",
                "Memorise the First Law as a sentence before the equation: 'Change in internal energy equals heat added minus work done by the system.' Then write ΔU = Q − W. Map each word to each symbol. Check sign convention: compression (W < 0 done by gas) increases ΔU — does your equation give this? Yes: ΔU = Q − (−W) = Q + W_on.",
                "For Carnot, write at the top of every calculation: 'KELVIN ONLY'. Convert every temperature before substituting. Practice: η = 1 − 27/327 = 1 − 300/600 = 0.5 (NOT 1 − 27/327 = 0.917, which is wrong by a factor of ~2).",
                "Replace 'entropy = disorder' with 'entropy = number of microstates (Ω)'. Practice: a shuffled pack of cards has higher Ω than an ordered pack — this matches intuition. A dissolved gas has higher Ω than compressed gas — this also matches. Use Ω as your primary concept; disorder is a secondary analogy that sometimes misleads."
            ],
            misconceptionsToAddress: [
                "Heat = temperature → Q/ΔU distinction cards above",
                "Celsius in Carnot → KELVIN ONLY rule",
                "100% efficiency violates First Law → it violates Second Law; First Law alone allows 100%"
            ]
        },

        developing: {
            characteristics: [
                "Applies First Law correctly for single processes but struggles with cycles (where ΔU_cycle = 0)",
                "Correctly calculates Carnot efficiency but confuses it with actual efficiency",
                "Understands entropy increases but cannot calculate ΔS for non-isothermal processes",
                "Confuses COP of refrigerator with efficiency — believes COP > 1 is impossible",
                "Cannot correctly assign Q, W, ΔU signs for all four process types simultaneously",
                "Understands Kelvin requirement for Carnot but sometimes applies it only to one temperature"
            ],
            immediateNextSteps: [
                "For cycles: always start by writing ΔU_cycle = 0. This immediately gives: net Q = net W over the cycle. Use this to check your work — if net Q ≠ net W, you have a sign error somewhere.",
                "Create a four-process summary table: process | constraint | W formula | Q formula | ΔU result. Fill it without looking at notes, then check. Repeat until automatic. Use this table for every process problem before beginning calculation.",
                "For entropy of non-isothermal processes: ΔS = mc·ln(T_f/T_i). Practice this formula for five different heating scenarios — verify that ΔS > 0 when T_f > T_i (system gains entropy when heated). Connect to ΔS = Q/T: heating at low T generates more entropy per joule than heating at high T.",
                "For COP: write 'COP = heat moved / work input' — this ratio can be > 1 because the refrigerator moves heat (not converts it). The work is only the extra energy added beyond the heat moved from the cold reservoir. Practice calculating Q_H = Q_C + W for five different COP scenarios."
            ],
            misconceptionsToAddress: [
                "ΔU_cycle ≠ 0 error → explicit ΔU_cycle = 0 step at start of every cycle problem",
                "COP > 1 impossible → 'moves heat, doesn't create it' reframe",
                "Non-isothermal entropy → mc·ln formula card"
            ]
        },

        proficient: {
            characteristics: [
                "Applies all four process equations correctly including adiabatic work formula",
                "Correctly calculates ΔS_universe and identifies process reversibility",
                "Uses Carnot efficiency as an upper bound to evaluate real engine claims",
                "Understands enthalpy H = U + PV and uses ΔH = Q_P correctly",
                "Can derive Newton's Cooling exponential from the rate equation",
                "Connects Boltzmann's entropy to thermodynamic entropy for simple cases"
            ],
            immediateNextSteps: [
                "Derive the Carnot efficiency from entropy alone: for a reversible cycle, ΔS_universe = 0. So ΔS_hot + ΔS_cold = 0 → −Q_H/T_H + Q_C/T_C = 0 → Q_C/Q_H = T_C/T_H → η = 1 − Q_C/Q_H = 1 − T_C/T_H. This derivation reveals that Carnot efficiency is a direct consequence of entropy, not an independent result.",
                "Explore Gibbs free energy G = H − TS. Understand that at constant T and P, ΔG < 0 for a spontaneous process — this unifies the First Law (enthalpy) and Second Law (entropy) into a single spontaneity criterion. Calculate ΔG for a simple chemical reaction using tabulated ΔH and ΔS values.",
                "Analyse a real engine's irreversibilities: for a given Q_H, Q_C, T_H, T_C, calculate actual efficiency, Carnot efficiency, ΔS_universe per cycle, and the 'lost work' (W_Carnot − W_actual). Understand that lost work = T_C × ΔS_universe (Gouy-Stodola theorem) — a quantitative measure of irreversibility."
            ],
            misconceptionsToAddress: [
                "Treating Carnot efficiency as achievable in practice → real irreversibilities always keep η < η_C",
                "Using ΔH = Q universally → only true at constant pressure; at constant volume, ΔU = Q"
            ]
        },

        expert: {
            characteristics: [
                "Derives thermodynamic identities from fundamental relations (dU = TdS − PdV)",
                "Analyses complex cycles (Rankine, Otto, Brayton) by decomposing into standard processes",
                "Applies Gibbs free energy to predict chemical and phase equilibrium",
                "Connects statistical mechanics (partition function) to thermodynamic quantities",
                "Evaluates real engineering systems against thermodynamic limits with quantitative irreversibility analysis"
            ],
            immediateNextSteps: [
                "Derive all thermodynamic potentials from the fundamental relation dU = TdS − PdV using Legendre transforms: H = U + PV (dH = TdS + VdP), A = U − TS (Helmholtz), G = H − TS (dG = −SdT + VdP). Understand why each potential is minimised at equilibrium under different constraint pairs.",
                "Calculate the entropy change for free expansion of an ideal gas into a vacuum (Q = 0, W = 0, ΔU = 0 for ideal gas) using the Boltzmann equation — count microstates before and after by treating molecules as distinguishable. Compare to ΔS = nR·ln(V_f/V_i) from thermodynamics. Reconcile the two approaches.",
                "Analyse the Otto cycle (idealised petrol engine) quantitatively: calculate efficiency as η = 1 − r^(1−γ) where r is compression ratio and γ = C_p/C_v. Identify which process is most irreversible in a real engine and quantify its entropy generation per cycle."
            ],
            misconceptionsToAddress: [
                "Treating thermodynamic potentials as interchangeable → each is only minimised under its own specific constraints (T,V for A; T,P for G)"
            ]
        }
    }
},


nuclearPhysics: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about nuclear structure, decay types, equations, and constants from memory without requiring understanding of mechanisms.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response states facts without explanation. 'Beta-minus decay increases Z by 1' is remember. Explaining why a neutron-rich nucleus undergoes β⁻ decay crosses into understand.",
            examples: {
                radioactivityBasics:   "State what is meant by activity and give its SI unit. Write the nuclide notation for carbon-14. Define half-life.",
                nuclearDecayTypes:     "Name the four types of radioactive decay. State the change in Z and A for each. Identify which type requires no change in Z or A.",
                halfLifeAndDecay:      "Write the radioactive decay law N(t) = N₀e^(−λt). State the relationship between T½ and λ. Define the decay constant.",
                nuclearReactions:      "State Einstein's mass-energy equation. Write the conversion factor between atomic mass units and MeV. Define binding energy per nucleon.",
                bindingEnergy:         "Identify the nucleus with the highest binding energy per nucleon. State whether fission or fusion is relevant for nuclei heavier than iron."
            }
        },

        understand: {
            description: "Explain the physical reasoning behind nuclear phenomena — connect stability to decay mode, decay law to physical randomness, and binding energy to energy release.",
            cognitiveDemand: "Causal explanation. The student must explain WHY, not just state WHAT. A mechanism or logical chain is required.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires mechanism. 'Neutron-rich nuclei undergo β⁻ decay because a neutron converts to a proton, reducing N/Z toward stability' is understand. 'Neutron-rich nuclei undergo β⁻ decay' is remember.",
            examples: {
                radioactivityBasics:   "Explain why radioactive decay is described as a random process, yet the exponential decay law is precise for large samples. Your answer must connect individual nuclear probability to ensemble statistical behaviour.",
                nuclearDecayTypes:     "Explain why alpha particles have the highest ionising power per unit path length despite being the least penetrating. Your answer must connect charge, mass, and interaction with orbital electrons.",
                halfLifeAndDecay:      "Explain why the rate of radioactive decay decreases over time, using the equation A = λN. Your answer must identify which quantity changes and why.",
                nuclearReactions:      "Explain why nuclei on either side of iron-56 on the binding energy curve can both release energy despite iron-56 being the most stable. Connect the concept of moving toward the binding energy peak.",
                fissionFusion:         "Explain why controlled nuclear fusion has proved far more technically challenging than controlled fission, despite being the mechanism powering the Sun."
            }
        },

        apply: {
            description: "Use nuclear physics equations to solve unseen quantitative problems — decay equations, half-life calculations, mass defect, and energy release.",
            cognitiveDemand: "Procedure execution in a new context. Common failures: inconsistent time units, using atomic number instead of mass number in decay equations, omitting Kelvin conversion analogy (here: omitting the u to MeV conversion).",
            verbs: ["Calculate", "Determine", "Predict", "Write", "Apply", "Use", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a novel problem. Writing a decay equation for a given nuclide and calculating λ from T½ are both apply-level tasks.",
            examples: {
                radioactivityBasics:   "A radioactive source has initial activity 800 Bq and decay constant λ = 0.023 min⁻¹. Calculate the activity after 45 minutes. Calculate the number of undecayed nuclei remaining at this time.",
                nuclearDecayTypes:     "Write the complete decay equation for beta-minus decay of phosphorus-32 (³²₁₅P). Identify the daughter nuclide. State the changes in Z, A, and N.",
                halfLifeAndDecay:      "Cobalt-60 (T½ = 5.27 years) is used in radiotherapy. A hospital source has initial activity 1.5 × 10¹¹ Bq. Calculate the activity after 10.54 years. Calculate the time for activity to fall to 10% of its initial value.",
                nuclearReactions:      "Given atomic masses: ²³⁵U = 235.043930 u, ⁹⁹Zr = 98.916512 u, ¹³³Sn = 132.915250 u, n = 1.008665 u, calculate the energy released in MeV for the fission reaction: ²³⁵U + n → ⁹⁹Zr + ¹³³Sn + 4n.",
                bindingEnergy:         "Calculate the mass defect and binding energy per nucleon for lithium-7 (³Li). Given: m(⁷Li) = 7.016003 u; m_p = 1.007276 u; m_n = 1.008665 u."
            }
        },

        analyze: {
            description: "Interpret decay curves, compare isotope properties, identify decay modes from data, and deduce nuclear properties from experimental evidence.",
            cognitiveDemand: "Decomposition and inference from data or graphs. The student works from evidence to conclusion.",
            verbs: ["Identify", "Determine", "Deduce", "Analyse", "Classify", "Interpret", "Distinguish"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence. Given a decay curve and identifying the half-life graphically, then deducing whether the data fit exponential decay, is analyze-level.",
            examples: {
                radioactivityBasics:   "Activity data for an unknown source: t (min): 0, 10, 20, 30, 40; A (kBq): 240, 170, 120, 85, 60. Plot ln(A) against t, determine the half-life from the gradient, and identify whether the decay is consistent with a single isotope. Determine the decay constant.",
                nuclearDecayTypes:     "A nucleus with Z = 56, A = 131 is neutron-rich relative to the stability band. Predict and justify its decay mode. Write the complete decay equation. Predict whether the daughter is likely to be stable or to decay further.",
                halfLifeAndDecay:      "Two radioactive sources, X (T½ = 2 hours, A₀ = 1000 Bq) and Y (T½ = 10 hours, A₀ = 200 Bq). Analyse: (a) which has greater activity at t = 0; (b) at what time t their activities are equal; (c) which is more radioactive after 20 hours.",
                nuclearReactions:      "The binding energy per nucleon curve shows values: ²H = 1.11 MeV/nucleon; ⁴He = 7.07 MeV/nucleon; ⁵⁶Fe = 8.79 MeV/nucleon; ²³⁵U = 7.59 MeV/nucleon. Analyse which reactions release energy: (a) ²H + ²H → ⁴He; (b) ²³⁵U fission to products averaging 8.4 MeV/nucleon; (c) ⁴He + ⁴He → ⁸Be (BE/A = 7.06 MeV/nucleon). Justify each answer.",
                stability:             "Three nuclides: ¹³⁷₅₅Cs (N=82, Z=55), ²⁰⁸₈₂Pb (N=126, Z=82), ¹³¹₅₃I (N=78, Z=53). Analyse the stability of each using the N/Z ratio and magic number concept. Predict the decay mode of each unstable nuclide."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a nuclear physics claim, the appropriateness of a model, or the safety and ethics of a nuclear application.",
            cognitiveDemand: "Judgement with justification against an identified criterion. The student must engage with the claim, not merely restate correct information.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement. 'Assess whether carbon-14 dating is reliable for a 100,000-year-old sample' requires the student to apply quantitative reasoning and conclude with a supported verdict.",
            examples: {
                radioactivityBasics:   "Evaluate the statement: 'Background radiation from natural sources is always safe because it is natural.' Identify the claim, assess whether 'natural' implies 'safe' using the concept of equivalent dose, and conclude with a supported judgement.",
                nuclearDecayTypes:     "Evaluate the claim: 'Gamma radiation is the most dangerous form because it is the most penetrating.' Assess this claim for (a) external exposure and (b) internal exposure, using the radiation weighting factors for α, β, and γ. Conclude whether the claim is correct, partially correct, or incorrect.",
                halfLifeAndDecay:      "Evaluate whether strontium-90 (T½ = 28.8 years) from nuclear fallout poses a greater long-term health risk than iodine-131 (T½ = 8 days) released in the same incident. Consider activity over time, biological uptake, and the timescale of exposure.",
                nuclearReactions:      "Evaluate the claim: 'Nuclear fusion is a clean, limitless energy source that will solve the global energy crisis.' Assess the claim against: (a) the scientific feasibility of sustained D-T fusion; (b) the availability of fuel; (c) the waste products; (d) current progress toward net energy gain.",
                fissionVsFusion:       "Evaluate which presents the greater long-term energy security: fission or fusion. Consider fuel availability, waste management, engineering readiness, and energy yield per unit mass. Your answer must reach a supported conclusion."
            }
        },

        create: {
            description: "Design an experimental investigation, a radiation safety protocol, or an original analysis framework by integrating multiple nuclear physics concepts.",
            cognitiveDemand: "Original synthesis. The student assembles concepts into a coherent new output addressing a specific brief — no single equation produces the answer.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output. Designing a protocol to determine the half-life of an unknown isotope from activity measurements, including data analysis method and error assessment, cannot be done by recalling a single procedure.",
            examples: {
                radioactivityBasics:   "Design an experiment to measure the half-life of protactinium-234 (T½ ≈ 1.17 min) using a Geiger-Müller tube and a uranium-in-equilibrium source. Specify: (a) measurement procedure and time intervals; (b) how you will correct for background radiation; (c) the graphical analysis method to extract T½; (d) sources of uncertainty and how to minimise them.",
                nuclearDecayTypes:     "Construct a decay chain diagram for uranium-238, showing at least four successive decays. For each step: write the complete decay equation, identify the decay type, and state the half-life. Identify the first stable product in the chain.",
                halfLifeAndDecay:      "Formulate a radiation management plan for a hospital nuclear medicine department receiving ¹³¹I (T½ = 8.02 days) at initial activity 50 GBq. Specify: (a) the activity at 7-day intervals for 6 weeks; (b) when the source requires replacement for therapeutic use (activity < 1 GBq); (c) waste disposal timing based on activity falling below regulatory limits (< 100 Bq); (d) staff dose minimisation strategy using inverse square law and shielding.",
                nuclearReactions:      "Design a conceptual nuclear fusion reactor for the D-T reaction. Specify: (a) why the plasma must be at ~10⁸ K; (b) two confinement strategies (magnetic and inertial); (c) using the Stefan-Boltzmann Law, calculate the power radiated per unit area by the plasma at 10⁸ K — compare to the fusion power output to assess the energy balance challenge; (d) the composition and management of tritium fuel, including its radioactivity (T½ = 12.3 years).",
                safety:                "Develop a radiation risk assessment framework for three occupational exposure scenarios: (a) a radiographer using X-rays; (b) a nuclear medicine technologist handling ¹³¹I; (c) a nuclear power station worker in a controlled area. For each, specify the dominant radiation type, shielding strategy, dose limit (in mSv/year), and monitoring method."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Confuses atomic number (Z) and mass number (A) when writing decay equations",
                "Cannot distinguish between the three main radiation types in terms of charge, mass, or penetration",
                "Believes radioactive decay is predictable for individual nuclei ('the nucleus will decay after exactly one half-life')",
                "Confuses activity (Bq) with number of nuclei (N) — uses them interchangeably",
                "Cannot convert between T½ and λ",
                "Does not know that gamma decay produces no change in Z or A"
            ],
            immediateNextSteps: [
                "Build nuclide notation fluency: write ᴬ_Z X for ten elements, always labelling 'A = mass number (top) = protons + neutrons' and 'Z = atomic number (bottom) = protons'. Never write a decay equation without first identifying A and Z of the parent explicitly.",
                "Make a physical properties table for the three radiation types: draw three columns (α, β, γ), four rows (particle/wave, charge, mass, stopped by). Fill every cell before touching any decay equation. Stick this table to your desk.",
                "Correct the half-life misconception with a coin-flip analogy: flip 100 coins — on average 50 show heads after one flip (one 'half-life'), but you cannot predict which individual coin. The individual nucleus is like one coin; the half-life law describes the average behaviour of billions of coins simultaneously.",
                "For activity vs nuclei: write on every problem 'A = λN' — activity is NOT the number of nuclei. A (becquerels) = how fast nuclei are decaying right now. N = how many undecayed nuclei exist. They are related by the decay constant λ.",
                "For T½ and λ: memorise one equation only: T½ = ln2/λ = 0.693/λ. Practice deriving λ from T½ and T½ from λ for five different isotopes before any decay law calculation."
            ],
            misconceptionsToAddress: [
                "Z vs A confusion → nuclide notation labelling drill above",
                "Half-life = time for one nucleus to decay → coin-flip analogy above",
                "Activity = number of nuclei → write A = λN on every problem"
            ]
        },

        developing: {
            characteristics: [
                "Writes decay equations correctly for alpha and beta-minus but makes errors with beta-plus and gamma",
                "Can calculate activity after n half-lives using (½)^n but struggles with the exponential form for non-integer time ratios",
                "Calculates λ from T½ correctly when T½ is in seconds but makes unit conversion errors for T½ in years or days",
                "Confuses mass defect with mass number",
                "Can use E = Δm × 931.5 but forgets to first calculate Δm correctly (adds wrong masses)",
                "Knows that binding energy per nucleon peaks at iron but cannot use this to predict whether a reaction releases or absorbs energy"
            ],
            immediateNextSteps: [
                "For gamma and beta-plus equations: write a template for each on a card. Beta-plus: Z decreases by 1, A unchanged, ⁰₊₁e emitted. Gamma: Z unchanged, A unchanged, * notation for excited state removed. Practice writing five equations of each type with the template visible, then five without.",
                "For non-integer half-life time ratios: always use A(t) = A₀e^(−λt) as the primary method. Reserve (½)^(t/T½) for quick checks when t/T½ is an integer. Practice five problems where t/T½ = 1.7, 2.3, 0.5, 4.2, 7.8 — explicitly choosing the exponential form.",
                "For T½ unit conversion: establish a unit conversion checklist. Before calculating λ: (1) write T½ with its units; (2) convert to seconds explicitly; (3) then calculate λ = 0.693/T½(s). Write this three-step checklist at the top of every decay problem until automatic.",
                "For mass defect: write 'Δm = (mass of separated nucleons) − (mass of nucleus)'. Always list: number of protons × m_p + number of neutrons × m_n = m_nucleons. Then subtract m_nucleus. Never skip the explicit listing step.",
                "For binding energy curve predictions: the rule is 'does this reaction increase average BE/nucleon?' If yes → energy released. Draw the curve schematically before every reaction energy question. Mark where reactants and products sit on the curve."
            ],
            misconceptionsToAddress: [
                "Beta-plus equation errors → template card drill above",
                "Non-integer half-life errors → primary exponential form training above",
                "Mass defect calculation errors → explicit listing procedure above"
            ]
        },

        proficient: {
            characteristics: [
                "Writes all four decay equation types fluently with correct conservation of A and Z",
                "Applies both forms of the decay law (exponential and half-life) and solves for N, A, or t as required",
                "Converts T½ to λ correctly in any time unit and uses the result consistently",
                "Calculates mass defect and binding energy per nucleon for any nuclide given atomic masses",
                "Calculates energy released in fission and fusion reactions from mass data",
                "Can identify the dominant radiation type and decay mode from N/Z ratio and stability considerations"
            ],
            immediateNextSteps: [
                "Extend to decay chains: given a parent nuclide undergoing multiple successive decays (e.g. ²³⁸U → ²³⁴Th → ²³⁴Pa → ²³⁴U), write all decay equations, identify all decay types, and calculate the atomic number and mass number at each step. Track N/Z ratio to explain why each step occurs.",
                "Explore secular equilibrium: if a parent has T½ >> daughter T½, the system reaches secular equilibrium where A_parent = A_daughter. Derive this from the activity equations and apply to a practical example (e.g. Ra-226 and its short-lived daughters in radon gas exposure assessment).",
                "Connect binding energy to the semi-empirical mass formula (liquid drop model): BE = a_V·A − a_S·A^(2/3) − a_C·Z(Z−1)/A^(1/3) − a_A·(A−2Z)²/A + δ. Calculate BE for several nuclides and compare to tabulated values — understand which term dominates for light vs heavy nuclei.",
                "Investigate the Geiger-Nuttall law connecting alpha decay half-life to decay energy: log(T½) ∝ 1/√E_α. Calculate T½ for several alpha emitters and plot against 1/√E_α to verify the linear relationship — this directly links quantum tunnelling theory to observable half-lives."
            ],
            misconceptionsToAddress: [
                "Assuming decay chains terminate after one step → decay chain exercise above reveals multi-step nature",
                "Treating all nuclei as decaying independently in a mixture → secular equilibrium concept above"
            ]
        },

        expert: {
            characteristics: [
                "Derives the exponential decay law from the fundamental probabilistic assumption dN/dt = −λN",
                "Applies the Bateman equations for decay chains with multiple successive isotopes",
                "Connects alpha decay to quantum tunnelling through the Gamow factor and Geiger-Nuttall law",
                "Analyses reactor physics using the four-factor formula and delayed neutron fraction",
                "Critically evaluates dose, risk, and LNT (linear no-threshold) model assumptions in radiation protection"
            ],
            immediateNextSteps: [
                "Derive the exponential decay law rigorously: start from 'the probability of a nucleus decaying in dt is λ·dt' → for N nuclei, expected decays in dt: dN = −λN·dt → dN/N = −λ·dt → integrate: ln(N/N₀) = −λt → N = N₀e^(−λt). Every step has a physical interpretation — annotate each.",
                "Explore the Fermi age theory of neutron moderation: neutrons slow from ~2 MeV to thermal (~0.025 eV) through elastic collisions. Calculate the number of collisions required to thermalise a neutron in water vs graphite, using average logarithmic energy decrement ξ = 1 + [(A−1)²/2A]·ln[(A−1)/(A+1)].",
                "Investigate inertial confinement fusion (ICF): calculate the Lawson criterion (nτ > 10²⁰ m⁻³·s for D-T fusion) and estimate the required plasma density and confinement time for a laser-driven pellet. Compare to magnetic confinement in tokamaks."
            ],
            misconceptionsToAddress: [
                "Treating λ as empirical rather than fundamental → derivation above reveals its probabilistic basis",
                "Assuming LNT model is universally accepted → critical evaluation of radiation risk models at expert level"
            ]
        }
    }
},

optics: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about optical laws, definitions, and equations from memory without requiring understanding of why they are true.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response states correct facts without explanation. 'Snell's Law is n₁sinθ₁ = n₂sinθ₂' is remember. Explaining why the ray bends toward the normal when entering a denser medium crosses into understand.",
            examples: {
                reflectionBasics:       "State the Law of Reflection. Define specular and diffuse reflection. Identify from which line all angles in optics are measured.",
                refractionBasics:       "Write Snell's Law and define each symbol. State the refractive index of water and crown glass. Define optical density.",
                totalInternalReflection:"State the two conditions required for total internal reflection. Write the formula for critical angle.",
                lensesAndMirrors:       "Write the thin lens equation. Define focal length, real image, and virtual image. State the sign convention for a converging lens.",
                opticalInstruments:     "Name two defects of vision and state which type of lens corrects each. Define angular magnification."
            }
        },

        understand: {
            description: "Explain the physical meaning behind optical laws and phenomena — connect cause to effect and geometry to behaviour.",
            cognitiveDemand: "Translation and interpretation — the student explains WHY, not just WHAT.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or reason. 'Light bends toward the normal when entering glass because it slows down' is understand. 'Light bends toward the normal' alone is remember.",
            examples: {
                reflectionBasics:       "Explain why a rough surface produces diffuse reflection even though each individual point on the surface obeys the Law of Reflection exactly.",
                refractionBasics:       "Explain why a straw appears bent when partially submerged in a glass of water. Your answer must describe what happens to the light ray at the water-air boundary and how the brain interprets this.",
                totalInternalReflection:"Explain why total internal reflection can only occur when light travels from a denser to a less dense medium, never in the reverse direction.",
                lensesAndMirrors:       "Explain why a converging lens placed with an object between the lens and the focal point produces a virtual image rather than a real one.",
                opticalInstruments:     "Explain why short-sightedness is corrected by a diverging lens. Your answer must describe where the uncorrected image forms and how the lens shifts it."
            }
        },

        apply: {
            description: "Use optical equations to solve problems not previously seen in exactly this form. The student selects the correct equation, applies sign conventions correctly, and carries the calculation through.",
            cognitiveDemand: "Procedure execution in a novel situation. A common failure: using the wrong sign convention or measuring angles from the surface rather than the normal.",
            verbs: ["Calculate", "Determine", "Predict", "Sketch", "Apply", "Use", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Calculate the image distance for an object 20 cm from a converging lens of focal length 12 cm' is apply.",
            examples: {
                reflectionBasics:       "An object is placed 12 cm in front of a concave mirror of focal length 8 cm. Calculate the image distance, magnification, and describe the image fully.",
                refractionBasics:       "A ray of light passes from water (n = 1.33) into glass (n = 1.60) at an angle of incidence of 50°. Calculate the angle of refraction and state whether the ray bends toward or away from the normal.",
                totalInternalReflection:"Flint glass has n = 1.62. Calculate its critical angle for a glass–air boundary. A ray strikes this boundary at 40°. Determine whether total internal reflection occurs.",
                lensesAndMirrors:       "A converging lens of focal length 15 cm has an object placed 10 cm from it. Calculate the image distance, magnification, and image height if the object is 4 cm tall.",
                opticalInstruments:     "A telescope has objective focal length 90 cm and eyepiece focal length 3 cm. Calculate its angular magnification and the separation of lenses when adjusted for relaxed viewing."
            }
        },

        analyze: {
            description: "Break down experimental data, ray diagrams, or complex scenarios to identify patterns, draw conclusions, and determine the optical behaviour of a given system.",
            cognitiveDemand: "Decomposition and inference from evidence. The student works from data or a scenario to a conclusion rather than from a formula to an answer.",
            verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Distinguish", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence. 'Given image and object distances, determine the focal length and classify the lens type' is analyze — the student must infer the unknown from the pattern.",
            examples: {
                reflectionBasics:       "Image distance data from a concave mirror experiment are provided for five object distances. Plot 1/u against 1/v and use the graph to determine the focal length. Assess whether the data support the mirror equation.",
                refractionBasics:       "A ray of light is observed to travel through three parallel layers of glass, water, and air, bending at each boundary. Angle measurements at each boundary are given. Analyse the data to determine the refractive index of the glass layer.",
                totalInternalReflection:"An optical fibre is tested by increasing the angle of a light beam entering one end. Beyond a certain input angle, no light exits the far end. Analyse what this observation tells you about TIR and the NA of the fibre. Calculate the critical angle from the threshold input angle.",
                lensesAndMirrors:       "An object is moved progressively from 100 cm to 5 cm from a converging lens of focal length 20 cm. Image distances are recorded. Analyse how magnification changes as the object crosses the focal point and explain why the image type changes at that position.",
                opticalInstruments:     "A student constructs a refracting telescope with two lenses and observes that the image is inverted. They propose inserting a third converging lens to erect the image. Analyse the optical consequences: what happens to magnification, tube length, and image brightness?"
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the limitations of an optical model, or the quality of an experimental design.",
            cognitiveDemand: "Judgement with justification — the student identifies an error or limitation, explains the criterion by which it fails, and states what would be correct or better.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. Simply restating the correct answer without engaging with the claim is understand-level, not evaluate.",
            examples: {
                reflectionBasics:       "A student claims that a convex mirror with focal length 15 cm can form a real image of an object placed 30 cm away. Evaluate this claim, showing whether it is possible using the mirror equation, and explain what property of convex mirrors determines the outcome.",
                refractionBasics:       "Evaluate the claim: 'A thicker glass block bends light more than a thin one.' Identify whether this is correct, when it is approximately true, what factor actually determines the angle of refraction, and what 'thickness' genuinely does affect.",
                totalInternalReflection:"Evaluate the suitability of plastic optical fibre (POF, n_core = 1.49, n_cladding = 1.41) compared to silica glass fibre (n_core = 1.50, n_cladding = 1.46) for a 10 km data link. Calculate the critical angle and numerical aperture for each and assess the trade-offs.",
                lensesAndMirrors:       "A student uses the thin lens equation to calculate the power needed for spectacles for a patient whose far point is 4 m, obtaining P = −0.25 D. Evaluate whether this answer is correct, check the calculation, and assess whether this prescription represents a significant refractive error requiring correction.",
                opticalInstruments:     "Evaluate the statement: 'A microscope with a shorter objective focal length always produces a better image.' Identify what 'better' might mean, what a shorter f_obj achieves, and what limitations prevent indefinitely reducing f_obj."
            }
        },

        create: {
            description: "Generate an original experimental design, optical system specification, or analytical framework by integrating multiple optics concepts.",
            cognitiveDemand: "Synthesis and original production. The student assembles multiple concepts into a coherent new output that addresses a specific brief.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output that cannot be produced by recalling a single procedure. Designing a two-lens imaging system requires integrating focal length, magnification, sign conventions, and image relay — no single equation produces the full answer.",
            examples: {
                reflectionBasics:       "Design a heliostat system using flat mirrors that tracks the Sun across the sky and directs sunlight to a fixed point on a building. Specify: (a) how the mirror angle must change as the Sun moves; (b) the geometric relationship between solar elevation angle, mirror angle, and target direction; (c) how you would automate the mirror rotation.",
                refractionBasics:       "Design an experiment to measure the refractive index of an unknown liquid using only a glass block, ruler, protractor, laser pointer, and semicircular tank. Specify: (a) the optical configuration; (b) the measurements taken; (c) how Snell's Law is applied to calculate n; (d) sources of error and how to reduce them.",
                totalInternalReflection:"Design a fibre-optic illumination system for a dentist's handpiece that must: (a) deliver 5 W of white light to the tooth surface; (b) fit within a 4 mm diameter instrument; (c) withstand autoclave sterilisation at 134°C. Specify fibre type, bundle diameter, and coupling arrangement, with justification for each choice.",
                lensesAndMirrors:       "Design a projection system for a classroom using a converging lens that will project an image 3 m wide on a screen 5 m from the lens. Specify: (a) the required magnification; (b) the object distance; (c) the required focal length; (d) the minimum lens diameter to avoid vignetting (image cutoff at edges); (e) whether the image will be upright or inverted and how this affects the slide orientation.",
                opticalInstruments:     "Formulate a design specification for a simple two-lens astronomical telescope that must magnify 40× and fit within a 1.2 m tube. Derive the required focal lengths, specify the lens positions, describe the image properties (orientation, real/virtual), and calculate the exit pupil diameter needed for comfortable eye relief."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Measures angles from the surface rather than from the normal",
                "Cannot apply Snell's Law without a worked example visible",
                "Confuses refractive index with optical density (mass density misconception)",
                "Believes TIR can occur when going from air into glass",
                "Cannot distinguish real images from virtual images",
                "Does not apply sign conventions consistently in the lens equation"
            ],
            immediateNextSteps: [
                "Establish the normal immediately: before drawing any ray diagram, draw the surface, then draw a dotted line perpendicular to it at the point of incidence — this is the normal. Every angle is measured from this line. Do this for ten surfaces in different orientations until it is automatic.",
                "For Snell's Law: write the formula with n₁ and θ₁ always on the same side, n₂ and θ₂ always on the other. Before substituting, write down which medium is 1 and which is 2. Always check: entering denser medium → θ₂ should be smaller than θ₁.",
                "For the real/virtual distinction: memorise the single physical test — a real image CAN be caught on a screen (projector screen, paper, retina). A virtual image CANNOT be projected. Cover this test on a card and apply it to every image before deciding.",
                "For TIR: memorise the direction rule with a physical image — 'TIR only traps light trying to escape from the denser medium.' Draw an arrow pointing outward from a fish in water toward the surface. TIR is what stops the light getting out when the angle is too steep — it traps the fish's light inside the water."
            ],
            misconceptionsToAddress: [
                "Angles from surface → draw normal first, always",
                "TIR direction error → 'escaping from denser medium' physical image",
                "Real/virtual confusion → projectable-on-screen test"
            ]
        },

        developing: {
            characteristics: [
                "Applies Snell's Law correctly for single boundaries",
                "Calculates critical angle correctly but makes errors about when TIR applies",
                "Uses thin lens equation but makes sign convention errors",
                "Draws the correct number of rays in ray diagrams but locates them inaccurately",
                "Confuses angular magnification with linear magnification",
                "Cannot calculate lens power or combine lens powers"
            ],
            immediateNextSteps: [
                "For sign conventions: write a colour-coded reference card. Real distances (real object, real image) — blue. Virtual distances (virtual image) — red. Negative f — red. Apply colour before substituting every time until errors stop.",
                "For TIR two-condition check: write as a two-step gate. Gate 1: Is light in the DENSER medium? If no, stop — TIR impossible. Gate 2: Is θ > θ_c? If yes, TIR occurs. Practice applying the two-gate check to ten scenarios before doing any calculation.",
                "For lens power: practice converting between focal length and power: f = 10 cm → P = 1/0.10 = +10 D; f = −25 cm → P = 1/(−0.25) = −4 D. Do twenty conversions in both directions. Then practice P_total = P₁ + P₂ for three combined-lens problems.",
                "For ray diagrams: draw the three standard rays from the object tip, one at a time. Ray 1: parallel to axis, then through F. Ray 2: through optical centre, straight through. Ray 3: through near F, then parallel. Where any two rays cross is the image. Practice until each ray is drawn correctly in under 30 seconds."
            ],
            misconceptionsToAddress: [
                "Sign convention errors → colour-coded reference card",
                "TIR condition errors → two-gate sequential check",
                "Power confusion → focal length ↔ dioptre conversion drill"
            ]
        },

        proficient: {
            characteristics: [
                "Applies Snell's Law and thin lens equation fluently with correct sign conventions",
                "Correctly calculates critical angle and applies TIR conditions without error",
                "Draws accurate ray diagrams for all object positions relative to F and 2F",
                "Calculates magnification correctly including sign interpretation",
                "Applies lens power addition for combined systems",
                "Correctly identifies and describes image properties for all standard configurations"
            ],
            immediateNextSteps: [
                "Extend to lensmaker's equation: 1/f = (n−1)(1/R₁ − 1/R₂), where R₁ and R₂ are the radii of curvature of the two lens surfaces. This connects the physical shape of a lens to its focal length — explaining why a more strongly curved surface gives a shorter f and higher power.",
                "Investigate chromatic aberration quantitatively using the Abbe number V = (n_D − 1)/(n_F − n_C), where subscripts D, F, C denote specific Fraunhofer spectral lines. Low V → high dispersion → more chromatic aberration. Research why flint glass (low V) is combined with crown glass (high V) in achromatic doublets.",
                "Connect the thin lens equation to the Gaussian optics matrix method: represent each optical element as a 2×2 ray transfer matrix and multiply matrices to find the overall system behaviour. This generalises the thin lens equation to thick lenses and complex multi-element systems.",
                "Derive the mirror and lens equations from first principles using similar triangles in a ray diagram — confirming the equations geometrically rather than accepting them as given formulas."
            ],
            misconceptionsToAddress: [
                "Treating all lenses as thin (no thickness) → introduce lensmaker's equation and thick lens concepts",
                "Assuming white light focuses at a single point → chromatic aberration and achromatic doublet design"
            ]
        },

        expert: {
            characteristics: [
                "Derives the thin lens equation from similar triangles without reference to memorised formula",
                "Analyses multi-lens optical systems using sequential application of the lens equation",
                "Connects Snell's Law to Fermat's Principle of least time as the underlying unifying principle",
                "Evaluates optical instruments quantitatively — magnification, resolution, field of view, and aberrations",
                "Applies the lensmaker's equation to connect lens geometry to optical power"
            ],
            immediateNextSteps: [
                "Derive Snell's Law from Fermat's Principle: set up the optical path length n₁L₁ + n₂L₂ as a function of the crossing point x on the boundary; differentiate with respect to x and set equal to zero (minimum time condition); show that this yields n₁sinθ₁ = n₂sinθ₂. This derivation unifies all of geometric optics under one variational principle.",
                "Investigate the Rayleigh criterion for angular resolution: θ_min = 1.22λ/D, where D is aperture diameter. Calculate the theoretical resolution of the human eye (D = 3 mm pupil, λ = 550 nm) and compare to the Hubble Space Telescope (D = 2.4 m). This extends ray optics into wave optics, showing why large apertures are needed for high-resolution imaging.",
                "Study the matrix optics approach: propagation through free space and refraction at a surface are each represented by 2×2 matrices; complex systems reduce to a single matrix product. Apply to analyse a thick lens or a Keplerian telescope as a matrix system."
            ],
            misconceptionsToAddress: [
                "Treating geometric optics as complete — resolution and diffraction require wave optics: Rayleigh criterion analysis above",
                "Treating Snell's Law as an empirical rule — Fermat's Principle derivation reveals its deep physical origin"
            ]
        }
    }
},

waves: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about wave properties, types, equations, and the electromagnetic spectrum from memory without requiring understanding of why they are true.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response states correct facts without explanation. 'v = fλ' is remember. Explaining why wavelength halves when frequency doubles crosses into understand.",
            examples: {
                waveBasics:              "State the wave equation. Define amplitude, frequency, wavelength, and period. Give the SI unit for each.",
                transverseAndLongitudinal: "Name the two types of mechanical wave. State which type sound is. Identify which type can be polarised.",
                waveBehaviour:           "State the law of reflection. Define constructive and destructive interference. Name the condition on path difference for each.",
                soundWaves:              "State the approximate speed of sound in air. List the three media (solid, liquid, gas) in order of decreasing sound speed.",
                electromagneticSpectrum: "List the seven regions of the EM spectrum in order of increasing frequency. State the speed of all EM waves in a vacuum."
            }
        },

        understand: {
            description: "Explain the physical meaning behind wave equations and behaviours — connect cause to effect and property to observation.",
            cognitiveDemand: "Translation and interpretation — the student explains WHY, not just WHAT.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or reason. 'Diffraction is greatest when gap ≈ wavelength because the gap acts as a new point source and the wavelength determines the angular spread' is understand. 'Diffraction happens at gaps' is remember.",
            examples: {
                waveBasics:              "Explain why wavelength changes but frequency does not when a wave passes from one medium to another. Your answer must identify what sets frequency and what sets wave speed.",
                transverseAndLongitudinal: "Explain why longitudinal waves cannot be polarised. Your answer must identify what polarisation restricts and why that restriction is impossible for longitudinal oscillation.",
                waveBehaviour:           "Explain why destructive interference does not violate energy conservation — where does the energy go at a node?",
                soundWaves:              "Explain why sound travels faster in steel than in air, using a particle model of the two media.",
                electromagneticSpectrum: "Explain why gamma rays are more biologically damaging than radio waves of equal intensity, using the concept of energy per photon."
            }
        },

        apply: {
            description: "Use wave equations to solve problems not previously seen in exactly this form. Student selects the correct equation, substitutes correctly, and completes the calculation.",
            cognitiveDemand: "Procedure execution in a novel situation. Common failure: forgetting to check whether path difference is integer or half-integer multiple of λ.",
            verbs: ["Calculate", "Determine", "Predict", "Apply", "Use", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Calculate the wavelength of a 200 Hz sound in water' is apply. 'State the wave equation' is remember.",
            examples: {
                waveBasics:              "A wave has frequency 250 Hz and wavelength 1.36 m. Calculate the wave speed. Then calculate the wavelength if frequency is doubled while speed remains constant.",
                transverseAndLongitudinal: "A sound wave at 880 Hz travels through air (v = 340 m·s⁻¹) and then enters a steel rod (v = 5100 m·s⁻¹). Calculate the wavelength in air and in steel. State what happens to the frequency.",
                waveBehaviour:           "Two coherent wave sources emit at 500 Hz. Speed of sound = 340 m·s⁻¹. Point X is 3.40 m from source A and 4.05 m from source B. Determine whether X is a constructive or destructive interference point.",
                soundWaves:              "A point source of sound produces intensity 5.0 × 10⁻⁴ W·m⁻² at 2.0 m. Calculate the intensity at 8.0 m. Calculate the sound level in dB at each distance.",
                standingWaves:           "A guitar string of length 0.65 m has wave speed 400 m·s⁻¹. Calculate the fundamental frequency and the frequencies of the second and third harmonics."
            }
        },

        analyze: {
            description: "Interpret wave data, graphs, or complex scenarios to identify patterns, determine wave properties, or classify wave behaviour.",
            cognitiveDemand: "Decomposition and inference from evidence. Student works from data to conclusion rather than from a formula to an answer.",
            verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Distinguish", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence. 'Given a displacement-time graph, determine the period, frequency, amplitude, and wave speed given the wavelength' is analyze — student must read from a graph and chain calculations.",
            examples: {
                waveBasics:              "A displacement-distance graph shows a sinusoidal wave. Read off the amplitude and wavelength. If the wave travels at 240 m·s⁻¹, calculate the frequency and period. Sketch the graph 0.25 period later and annotate the direction the wave is travelling.",
                transverseAndLongitudinal: "Seismic data from three monitoring stations give P-wave arrival times. Using P-wave speed 7.5 km·s⁻¹ and S-wave speed 4.3 km·s⁻¹, analyse the time delay at each station to triangulate the earthquake epicentre distance from each station.",
                waveBehaviour:           "An interference pattern produced by two speakers shows loud regions at 0°, ±22°, ±48° and quiet regions at ±11°, ±34°. The speakers are 1.5 m apart and emit at 680 Hz. Analyse the pattern to verify the path difference conditions and determine v_sound from the data.",
                soundWaves:              "Intensity measurements at four distances from a speaker are recorded: 1 m → 400 mW·m⁻², 2 m → 100 mW·m⁻², 3 m → 44 mW·m⁻², 4 m → 25 mW·m⁻². Analyse whether these data conform to the inverse square law by plotting I against 1/r² and assessing linearity.",
                standingWaves:           "A string fixed at both ends is driven at various frequencies. Resonance is observed at 120 Hz, 240 Hz, 360 Hz, and 480 Hz but not at 180 Hz. Analyse this pattern: identify the fundamental frequency, determine which harmonics are present, calculate the string length if v = 240 m·s⁻¹, and explain why 180 Hz does not produce resonance."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, appropriateness of a wave model, or quality of a wave experiment.",
            cognitiveDemand: "Judgement with justification — the student identifies an error or limitation, explains the criterion by which it fails, and states what would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'The student concluded destructive interference because path difference = 2λ — evaluate this conclusion' requires identifying that 2λ is constructive, explaining the error, and stating the correct conclusion.",
            examples: {
                waveBasics:              "A student states: 'When a wave moves from shallow to deep water, both the wave speed and frequency increase.' Evaluate this claim — identify which part is correct, which is incorrect, and explain what actually happens to each property using v = fλ.",
                transverseAndLongitudinal: "Evaluate the following experimental design for measuring the speed of sound: 'Two students stand 50 m apart. One claps; the other starts a stopwatch on hearing the clap and stops it on hearing an echo from a wall 200 m beyond the first student.' Identify sources of error and estimate their magnitude relative to the expected time interval.",
                waveBehaviour:           "A student calculates that placing two speakers 0.5 m apart emitting at 340 Hz will produce destructive interference directly between them. Evaluate this — is the point midway between two equal, in-phase sources a node or antinode? Show the path difference calculation and identify the student's conceptual error.",
                soundWaves:              "Evaluate the inverse square law as a model for sound intensity in a concert hall, identifying at least three ways in which a real hall violates the assumptions of the model, and state whether each violation increases or decreases intensity compared to the open-air prediction.",
                standingWaves:           "A student claims: 'A closed pipe produces all harmonics just like an open pipe, but starting from a higher fundamental frequency.' Evaluate this statement — identify what is correct, what is incorrect, and provide the correct description of which harmonics a closed pipe supports and why."
            }
        },

        create: {
            description: "Generate an original experimental design, wave-based engineering solution, or analytical framework by integrating multiple wave concepts.",
            cognitiveDemand: "Synthesis and original production — the student assembles multiple concepts into a coherent new output addressing a specific brief.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output that cannot be produced by recalling a single procedure. Designing an ultrasound depth-finder requires integrating v = fλ, reflection, time-distance calculation, and resolution considerations — no single equation produces the answer.",
            examples: {
                waveBasics:              "Design an experiment to measure the speed of microwaves using a microwave oven (with its turntable removed) and a bar of chocolate. Specify: (a) the physical phenomenon you are exploiting; (b) what you measure and how; (c) any additional data needed; (d) the calculation procedure; (e) sources of uncertainty.",
                transverseAndLongitudinal: "Propose a method to determine whether an unknown wave is transverse or longitudinal using only a pair of polaroid filters and a light source. Specify: (a) the experimental procedure; (b) the expected observation for each wave type; (c) what conclusion follows from each outcome; (d) a limitation of the method.",
                waveBehaviour:           "Design a two-slit interference experiment using a laser (λ = 632 nm) to measure the slit separation. Specify: (a) the equation linking fringe spacing, slit separation, wavelength, and screen distance; (b) the measurements you would take; (c) how you would calculate slit separation; (d) how you would reduce the percentage uncertainty in the fringe spacing measurement.",
                soundWaves:              "Construct an experimental protocol to verify that intensity follows an inverse square law for a small speaker in a large open space. Specify: (a) equipment and measurement positions; (b) how you will control variables; (c) the graph you will plot to linearise the data; (d) how you will determine whether the data confirm the law; (e) why indoor measurements would give systematically different results.",
                standingWaves:           "Design a method to determine the speed of transverse waves on a string using a signal generator, vibration generator, pulley, and hanging masses. Specify: (a) how standing waves are produced and detected; (b) which harmonic you will use and why; (c) the measurements taken and calculation of wave speed; (d) how you would verify the relationship v = √(T/μ) by varying tension T."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Cannot distinguish transverse from longitudinal waves by oscillation direction",
                "Confuses wave speed with particle speed — believes faster waves mean particles move faster",
                "Applies v = fλ but substitutes wavelength in cm or mm without converting to metres",
                "Believes frequency changes when a wave enters a new medium",
                "Cannot describe compressions and rarefactions in a longitudinal wave",
                "Believes waves carry matter from source to receiver"
            ],
            immediateNextSteps: [
                "Draw both wave types from scratch before touching any equation: transverse — draw a rope with particles oscillating up-down while the wave moves right; longitudinal — draw a slinky with particles oscillating left-right while compressions move right. Label the oscillation direction and the propagation direction with different-coloured arrows on each diagram. Do this three times without looking at notes.",
                "Build the 'frequency is fixed by the source' rule as a verbal mantra: say out loud, 'Frequency never changes at a boundary — only speed and wavelength change.' Write it on a card and read it before every refraction problem.",
                "For unit errors in v = fλ: always write the unit alongside every value before substituting. Check that m·s⁻¹ = Hz × m = s⁻¹ × m. If your wavelength is in cm, convert immediately: write λ = 5 cm = 0.05 m on the working line before substituting.",
                "For the matter-transport misconception: watch a video of a stadium 'wave' — spectators (particles) move up and down, but the wave pattern travels around the stadium. Connect this to ocean waves: a cork floats up and down at a fixed location while the wave travels past it. Draw the cork's path (circular/elliptical) to show no net displacement."
            ],
            misconceptionsToAddress: [
                "Wave carries matter → cork-in-water demonstration and diagram above",
                "Frequency changes in new medium → mantra card above",
                "Unit errors in v = fλ → unit-check protocol above"
            ]
        },

        developing: {
            characteristics: [
                "Applies v = fλ correctly for straightforward problems but makes errors when rearranging for λ or f",
                "Identifies transverse vs longitudinal correctly from descriptions but cannot explain polarisation",
                "Uses path difference correctly for constructive interference but confuses the condition for destructive",
                "Understands reflection law but cannot apply Snell's Law to calculate refraction angles",
                "Calculates fundamental frequency of a string but cannot extend to higher harmonics",
                "Confuses amplitude with wavelength when reading wave diagrams"
            ],
            immediateNextSteps: [
                "For path difference confusion: make two cards. Card 1: 'Constructive: Δd = nλ (n = 0, 1, 2, ...) — whole number of wavelengths.' Card 2: 'Destructive: Δd = (n + ½)λ — half-integer number of wavelengths.' Before every interference calculation, physically write the path difference in terms of λ and classify it.",
                "For Snell's Law: draw a boundary line and two rays (incident and refracted) on every problem before writing any numbers. Label θ₁ and θ₂ from the normal. Write n₁ sin θ₁ = n₂ sin θ₂. Then substitute. Never substitute before drawing — most errors come from using the wrong angle.",
                "For harmonic series errors: remember the pattern for a string fixed at both ends — nth harmonic fits n half-wavelengths: L = nλ/2. So λₙ = 2L/n and fₙ = nv/(2L). Write this derivation from scratch for n = 1, 2, 3 and check: f₂ = 2f₁ always. If your second harmonic is not exactly double the fundamental, there is an error.",
                "For amplitude vs wavelength reading errors: on a displacement-distance graph, amplitude is the maximum height from the equilibrium line (vertical); wavelength is the horizontal distance for one complete cycle. Colour-code them on practice graphs: amplitude in red (vertical arrow), wavelength in blue (horizontal arrow)."
            ],
            misconceptionsToAddress: [
                "Destructive condition nλ (should be (n+½)λ) → two-card distinction above",
                "Wrong angle in Snell's Law → draw-first protocol above",
                "Amplitude vs wavelength reading → colour-coding protocol above"
            ]
        },

        proficient: {
            characteristics: [
                "Applies all wave equations fluently with correct unit handling",
                "Correctly uses Snell's Law and can determine critical angle and total internal reflection conditions",
                "Analyses interference patterns by calculating path difference and classifying points",
                "Calculates resonant frequencies for strings and both open and closed pipes",
                "Applies inverse square law for intensity and converts between intensity and decibels",
                "Can explain polarisation and use Malus's Law"
            ],
            immediateNextSteps: [
                "Extend to two-source interference pattern geometry: derive the condition for the angle θₙ of the nth maximum for two coherent sources: d sin θₙ = nλ. Apply this to calculate the angular positions of all maxima for a given speaker separation and frequency. Plot the predicted pattern and compare to the condition for minima.",
                "Investigate total internal reflection: derive the critical angle formula sin θ_c = n₂/n₁ (for n₁ > n₂). Calculate θ_c for glass-air, water-air, and glass-water interfaces. Connect to optical fibres: calculate the acceptance cone angle for a fibre with n_core = 1.52 and n_cladding = 1.48.",
                "Connect standing wave harmonics to musical timbre: record a guitar string using a spectrum analyser app; identify the fundamental and harmonic frequencies present; calculate the theoretical harmonic series and compare. Explain why a plucked string near the bridge sounds brighter (more high harmonics) than one plucked at the middle (more fundamental).",
                "Derive the decibel scale from the definition: show that a doubling of intensity corresponds to +3.0 dB, that a 10-fold increase is +10 dB, and that a 100-fold increase is +20 dB. Calculate the dB difference corresponding to the inverse square law intensity ratio when distance is doubled."
            ],
            misconceptionsToAddress: [
                "Confusing critical angle geometry → derive sin θ_c = n₂/n₁ from Snell's Law explicitly",
                "Applying open-pipe harmonics to closed pipes → always write 'closed = odd harmonics only' before each closed-pipe problem"
            ]
        },

        expert: {
            characteristics: [
                "Derives the wave equation from the physical properties of the medium (tension and linear density for strings; bulk modulus and density for sound)",
                "Analyses complex multi-source interference patterns including diffraction gratings",
                "Connects Doppler effect quantitatively to source and observer velocities for both sound and EM waves",
                "Applies Huygen's principle to explain diffraction and refraction from first principles",
                "Connects wave physics to quantum mechanics through de Broglie wavelength and wave-particle duality"
            ],
            immediateNextSteps: [
                "Derive the speed of transverse waves on a string: consider a small arc of the string under tension T with linear density μ; apply Newton's second law to the arc to obtain v = √(T/μ). Verify units. Calculate v for a guitar string (T = 70 N, μ = 5 × 10⁻⁴ kg·m⁻¹) and compare to the experimentally measured fundamental frequency.",
                "Analyse a diffraction grating problem using d sin θ = nλ: calculate all observable maxima for white light (400–700 nm) through a 600 lines/mm grating. Identify which orders overlap for different colours and determine the angular width of the first-order spectrum. Connect to spectrometer operation.",
                "Derive the Doppler formula from first principles for a moving source: consider the compression of wavelengths in front of a moving source and dilation behind. Show f_observed = f_source × v/(v − v_source) for approach and v/(v + v_source) for recession. Apply to calculate the red shift of a galaxy receding at 0.01c."
            ],
            misconceptionsToAddress: [
                "Treating wave speed as a universal constant → v = √(T/μ) derivation shows it depends entirely on medium properties"
            ]
        }
    }
},


electricity: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts, equations, and definitions relating to current, voltage, resistance, and circuit rules from memory without requiring explanation.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Give the value of"],
            whatDistinguishesThisLevel: "A remember-level response states correct facts without explaining them. 'Ohm's Law is V = IR' is remember. Explaining what resistance physically is crosses into understand.",
            examples: {
                currentFlow:             "State the equation relating charge, current, and time. Give the SI unit of each quantity. State the charge on one electron.",
                voltageAndPotential:     "Define potential difference and state its SI unit. Write the equation relating energy, charge, and voltage.",
                resistanceAndOhmsLaw:    "Write Ohm's Law. State the equation for the resistance of a wire in terms of resistivity, length, and area.",
                seriesAndParallelCircuits: "State the rules for current and voltage in a series circuit and in a parallel circuit. Write the equations for total resistance in each case.",
                electricalPower:         "Write all three equations for electrical power. State the equation for electrical energy and give the conversion between joules and kilowatt-hours."
            }
        },

        understand: {
            description: "Explain the physical meaning of electrical quantities and circuit rules — connect cause and effect, distinguish related concepts, and interpret equations in terms of physical mechanisms.",
            cognitiveDemand: "Translation and interpretation. The student explains WHY, not just WHAT.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Distinguish", "Connect", "Contrast"],
            whatDistinguishesThisLevel: "Understand requires a reason or mechanism. 'Resistance increases with length because there are more lattice collisions for electrons to make' is understand. 'Resistance increases with length' alone is remember.",
            examples: {
                currentFlow:             "Explain why conventional current direction is opposite to the direction of electron flow. Your answer must identify what conventional current represents and when the convention was established.",
                voltageAndPotential:     "Explain the distinction between EMF and terminal voltage. Your answer must identify what causes the difference and under what condition they would be equal.",
                resistanceAndOhmsLaw:    "Explain why a filament lamp is described as non-ohmic. Your answer must reference what 'ohmic' means and identify the physical process that makes the lamp's resistance non-constant.",
                seriesAndParallelCircuits: "Explain why adding more resistors in parallel reduces the total resistance, even though you are adding more material to the circuit. Your answer must use the concept of current paths.",
                electricalPower:         "Explain why power transmission cables carry electrical energy at high voltage. Your answer must identify which power equation shows the advantage and explain the mechanism of energy loss in cables."
            }
        },

        apply: {
            description: "Use electrical equations to solve problems not previously seen in exactly this form. Select the correct equation, substitute correctly, and carry the calculation through with appropriate unit handling.",
            cognitiveDemand: "Procedure execution in a novel situation. Common failures: choosing the wrong power equation, adding parallel resistances directly, or forgetting to take reciprocals.",
            verbs: ["Calculate", "Determine", "Find", "Apply", "Use", "Solve", "Predict"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Calculate the current through a 15 Ω resistor connected to a 9 V battery' is apply. 'Write Ohm's Law' is remember.",
            examples: {
                currentFlow:             "A charge of 45 C passes through a lamp in 3 minutes. Calculate the current. Then calculate the number of electrons that passed in this time.",
                voltageAndPotential:     "A battery of EMF 6.0 V and internal resistance 0.8 Ω is connected to an external resistance of 4.2 Ω. Calculate the current, terminal voltage, and power wasted in the internal resistance.",
                resistanceAndOhmsLaw:    "A copper wire (ρ = 1.7 × 10⁻⁸ Ω·m) is 5.0 m long and has diameter 0.8 mm. Calculate its cross-sectional area and resistance. Then calculate the current if 230 V is applied — comment on whether this is realistic.",
                seriesAndParallelCircuits: "Three resistors of 3 Ω, 6 Ω, and 9 Ω are connected in parallel across an 18 V supply. Calculate the total resistance, total current, and current through each branch.",
                electricalPower:         "A 60 W lamp and a 100 W lamp are both rated for 230 V. Calculate the resistance of each. If connected in series across 230 V, calculate the current, and the power dissipated by each. Which is brighter in series — and is this the same as in parallel?"
            }
        },

        analyze: {
            description: "Decompose circuit problems or experimental data to identify patterns, apply Kirchhoff's Laws to multi-loop circuits, and determine operating conditions for complex configurations.",
            cognitiveDemand: "Decomposition and inference. The student works from circuit structure or data to conclusions — not directly from a single formula.",
            verbs: ["Analyse", "Determine", "Deduce", "Identify", "Classify", "Interpret", "Distinguish"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence or structure. 'Given an I-V graph, determine whether the component is ohmic and calculate resistance at a specific operating point' is analyze.",
            examples: {
                currentFlow:             "Current-time data for a charging capacitor are given. Analyse whether the current decays exponentially by plotting ln(I) against t and assessing linearity. Determine the time constant from the gradient.",
                voltageAndPotential:     "A battery's terminal voltage is measured at 11.8 V when supplying 2 A and 11.2 V when supplying 5 A. Analyse these two data points to determine the battery's EMF and internal resistance. Show the algebraic method.",
                resistanceAndOhmsLaw:    "An I-V graph for an unknown component shows a curved line through the origin that steepens at higher voltages. Analyse whether this component is ohmic, determine its resistance at V = 2 V and V = 6 V from the graph, and identify the likely component type.",
                seriesAndParallelCircuits: "A complex circuit has a 12 V source connected to R₁ = 4 Ω in series with a parallel combination of R₂ = 6 Ω and R₃ = 12 Ω. Analyse the circuit by first reducing the parallel combination, then apply Ohm's Law to find all currents and voltages. Verify using KVL and KCL.",
                electricalPower:         "A student has two resistors: 10 Ω and 40 Ω, connected to a 20 V supply. Analyse the power dissipated by each in both series and parallel configurations. Determine in which configuration total power is greater and explain why using P = V²/R_total."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the appropriateness of a model, or the quality of a circuit design or experimental procedure in an electrical context.",
            cognitiveDemand: "Judgement with justification against a stated standard. Simply restating the correct answer without engaging with the claim is understand-level, not evaluate.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Verify", "Appraise", "Defend"],
            whatDistinguishesThisLevel: "Evaluate requires identifying an error or limitation AND explaining the criterion by which it fails AND stating what would be correct or better.",
            examples: {
                currentFlow:             "A student states: 'Electrons in a wire travel at nearly the speed of light, which is why lights come on immediately when the switch is closed.' Evaluate this statement — identify what is correct, what is incorrect, and what actually propagates at near the speed of light.",
                voltageAndPotential:     "Evaluate the claim: 'A battery with higher EMF always delivers more power to an external circuit.' Identify the conditions under which this is and is not true, using the internal resistance model to support your argument with equations.",
                resistanceAndOhmsLaw:    "A student measures V and I for a filament lamp and plots I vs V. They draw a straight line of best fit and conclude: 'The lamp obeys Ohm's Law because the graph passes through the origin.' Evaluate this conclusion — identify the error in the student's reasoning and explain what the shape of a correct I-V graph for a lamp actually reveals.",
                seriesAndParallelCircuits: "Evaluate the following circuit design for a set of five identical 12 V lamps to be operated from a 12 V supply: the student connects all five in series. Assess whether the lamps will operate at rated brightness, calculate the voltage each receives, and redesign the circuit to make all lamps operate correctly.",
                electricalPower:         "Evaluate the claim that 'a higher-wattage appliance always costs more to run.' Identify the condition under which this is true, and construct a counter-example using two appliances with different power ratings and usage times to demonstrate when the lower-wattage appliance costs more."
            }
        },

        create: {
            description: "Design an original circuit, experimental investigation, or analytical system by integrating multiple electrical concepts to meet a specified brief.",
            cognitiveDemand: "Synthesis and original production. The student assembles multiple concepts into a coherent output that cannot be produced by recalling a single procedure.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output integrating multiple concepts. Designing a temperature-sensing alarm circuit requires integrating thermistor behaviour, voltage dividers, resistance changes, and threshold switching — no single equation produces the answer.",
            examples: {
                currentFlow:             "Design a circuit that uses a current sensor to measure the flow rate of a conducting liquid through a pipe (flow rate is proportional to the conductivity change caused by a tracer chemical). Specify: (a) the measurement principle; (b) how Q = It is used to infer total volume flow; (c) required sensor sensitivity; (d) a calibration procedure.",
                voltageAndPotential:     "Design an experiment to measure the EMF and internal resistance of a battery without a voltmeter. Specify the circuit, the measurements to take, how you will process the data to extract ε and r, and the sources of error that must be minimised.",
                resistanceAndOhmsLaw:    "Design a resistive touch screen for a simple one-dimensional position sensor. Two resistive strips face each other; pressing at position x creates a voltage divider. Derive the equation relating output voltage to x, specify the resistivity and geometry needed for a 0–5 V output range over 20 cm, and identify limitations of this design.",
                seriesAndParallelCircuits: "Design a lighting circuit for a room that meets all of the following requirements: (1) each of four lights operates at full rated brightness; (2) each light can be switched independently; (3) a single master switch can turn all lights off; (4) a fuse protects the entire circuit. Produce a fully labelled circuit diagram with specified component values and justify each design decision.",
                electricalPower:         "Formulate a method for a household to determine which appliances account for the majority of their electricity bill. Your method must: (a) identify the three power equations and select the appropriate one for each appliance type; (b) account for appliances that are on standby; (c) produce a ranked list of consumption by appliance; (d) propose two changes with calculated annual savings in both kWh and pounds."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Confuses current and voltage — uses terms interchangeably or believes they are the same thing",
                "Cannot apply Ohm's Law without a numerical example in front of them",
                "Believes current is 'used up' as it flows around a circuit",
                "Cannot calculate total resistance for even a simple parallel circuit",
                "Does not know which quantity (current or voltage) is the same in series vs parallel",
                "Confuses EMF with voltage and does not know what internal resistance is"
            ],
            immediateNextSteps: [
                "Build the current-voltage distinction using the water analogy: current (I) = flow rate of water (litres per second); voltage (V) = water pressure; resistance (R) = pipe narrowness. Write this analogy on a card and check every new concept against it.",
                "Correct the 'current is used up' misconception immediately: draw a simple series circuit; label the current as the same at every point. State KCL explicitly: 'charge cannot disappear at any point'. Count the same number of electrons entering and leaving every component.",
                "For series vs parallel memory: draw two circuits side by side. Series: one path, same current everywhere, voltage divides. Parallel: multiple paths, same voltage, current divides. Label both from memory three times until automatic.",
                "For Ohm's Law: build a triangle (V at top, I and R at bottom separated by a multiplication sign). Cover the quantity you want to find — what remains is how to calculate it. Practice with five simple numbers before any circuit problem.",
                "For parallel resistance: never add resistances directly in parallel. Write '1/R_total = 1/R₁ + 1/R₂' at the top of every parallel problem in large text until the reciprocal method is automatic."
            ],
            misconceptionsToAddress: [
                "Current = voltage → water analogy card above",
                "Current used up → KCL explanation and diagram above",
                "Parallel R adds directly → reciprocal rule written on every problem"
            ]
        },

        developing: {
            characteristics: [
                "Applies Ohm's Law correctly for single resistors but makes errors in multi-component circuits",
                "Calculates series resistance correctly but makes reciprocal errors for parallel circuits",
                "Understands that current is the same in series but sometimes applies this incorrectly to parallel branches",
                "Can calculate power using P = IV but does not know when to use P = I²R or P = V²/R",
                "Understands EMF concept but cannot apply internal resistance equation to find terminal voltage",
                "Confuses total circuit current with branch currents in parallel circuits"
            ],
            immediateNextSteps: [
                "For multi-component circuits: always reduce the circuit step by step. Combine parallel resistors first, then treat as series. Draw the simplified circuit at each stage — never attempt the full circuit in one step.",
                "For the three power equations: make three cards. Card 1: P = IV — use when you know both I and V. Card 2: P = I²R — use when you know I and R but not V. Card 3: P = V²/R — use when you know V and R but not I. Practice identifying which card applies for five different problems before calculating.",
                "For internal resistance: draw the battery as an EMF source (ε) with a small resistor r inside. V_terminal = ε − Ir — the terminal voltage is always less than EMF when current flows. Practise finding ε given V_terminal and I (rearrange: ε = V_terminal + Ir).",
                "For parallel circuit confusion: label every junction clearly; apply KCL at each junction explicitly before solving. Write 'I_in = I_out' at every node as a check."
            ],
            misconceptionsToAddress: [
                "Circuit reduction errors → step-by-step simplification above",
                "Wrong power equation → three-card selection system above",
                "EMF vs terminal voltage → draw battery with internal r above"
            ]
        },

        proficient: {
            characteristics: [
                "Fluently applies all circuit equations for series, parallel, and mixed circuits",
                "Applies internal resistance model correctly and can determine ε and r from two sets of V-I measurements",
                "Uses all three power equations, selecting efficiently",
                "Interprets I-V graphs for ohmic and non-ohmic components",
                "Can set up and solve simple two-loop Kirchhoff problems",
                "Understands voltage divider principle and applies it to LDR and thermistor sensor circuits"
            ],
            immediateNextSteps: [
                "Extend to Wheatstone bridge circuits: four resistors in a diamond with a galvanometer across the middle. At balance: R₁/R₂ = R₃/R₄ and galvanometer reads zero. Derive this balance condition using KVL and solve a practical resistance measurement problem.",
                "Explore the maximum power transfer theorem: power delivered to external resistance R is maximum when R = r (internal resistance). Derive this by differentiating P = ε²R/(R+r)² with respect to R and setting dP/dR = 0. Connect to impedance matching in audio and communications engineering.",
                "Analyse a full Kirchhoff two-loop problem with two EMF sources, setting up and solving simultaneous equations. Verify each answer by checking KCL at every junction and KVL around every loop.",
                "Investigate the behaviour of capacitors in DC circuits: charging through a resistor follows Q(t) = Q_max(1 − e^(−t/RC)). Connect this exponential form to the Newton's Cooling equation in heat transfer — both describe the same mathematical structure."
            ],
            misconceptionsToAddress: [
                "Assuming Ohm's Law applies to non-ohmic components → always check if the I-V graph is linear before using V = IR as a fixed ratio",
                "Assuming maximum power means maximum voltage → the maximum power transfer theorem shows this depends on the relationship between R and r"
            ]
        },

        expert: {
            characteristics: [
                "Derives circuit rules from Kirchhoff's Laws rather than memorising series/parallel formulae separately",
                "Analyses multi-loop circuits systematically using mesh or nodal analysis",
                "Connects circuit behaviour to underlying physics — drift velocity, electron density, Fermi level",
                "Evaluates the limits of Ohm's Law — non-linear materials, superconductors, vacuum diodes",
                "Applies Thevenin and Norton equivalent circuit theorems to simplify complex networks",
                "Connects electrical principles to biological, industrial, and engineering contexts with quantitative precision"
            ],
            immediateNextSteps: [
                "Derive Thevenin's theorem: any linear two-terminal network is equivalent to a single voltage source V_th in series with a single resistance R_th. Apply it to simplify a complex ladder network into a single source and resistor, then verify by computing the original and equivalent circuits give identical responses to a test load.",
                "Investigate semiconductor physics: explain why silicon resistance decreases with temperature using band theory — the energy gap between valence and conduction bands, and how thermal energy promotes electrons across it. Connect to the exponential I-V characteristic of a diode (Shockley equation: I = I₀(e^(eV/kT) − 1)).",
                "Derive the drift velocity equation: I = nAve, where n = charge carrier density, A = cross-sectional area, v = drift velocity, e = electron charge. Calculate the drift velocity in a copper wire carrying 1 A with n = 8.5 × 10²⁸ m⁻³ and A = 1 mm². Explain why the result (fractions of mm/s) seems paradoxical given that signals travel at near c."
            ],
            misconceptionsToAddress: [
                "Treating Kirchhoff's Laws as circuit rules rather than conservation laws → derive both from first principles (charge conservation and energy conservation) before applying them"
            ]
        }
    }
},

mechanics: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts, equations, definitions, and laws of mechanics from memory without requiring understanding of why they are true.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response states correct facts without explanation. 'Newton's Second Law is F = ma' is remember. Explaining why mass resists acceleration crosses into understand.",
            examples: {
                newtonLaws:           "State Newton's Three Laws of Motion. Define mass, weight, and force and give SI units for each.",
                forcesAndEquilibrium: "State the two conditions for static equilibrium. List four types of forces that commonly appear on free body diagrams.",
                kinematicsBasics:     "Write the four suvat equations. Define displacement, velocity, and acceleration including their vector nature.",
                energyAndWork:        "State the work-energy theorem. Write the equations for kinetic energy and gravitational potential energy.",
                momentumAndImpulse:   "Define momentum and impulse. State the law of conservation of momentum and the condition under which it applies."
            }
        },

        understand: {
            description: "Explain the physical meaning behind Newton's laws, the link between force and motion, and the distinction between scalar and vector quantities.",
            cognitiveDemand: "Translation and interpretation — the student explains WHY, not just WHAT. A causal explanation with a mechanism demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires a mechanism. 'Newton's First Law means a moving object needs no force to keep moving — force is only required to change motion' is understand. 'Objects need force to keep moving' is a misconception at remember level.",
            examples: {
                newtonLaws:           "Explain why passengers lurch forward when a bus brakes. Your answer must reference inertia and Newton's First Law without using the phrase 'tendency to keep moving' as a substitute for the physical explanation.",
                forcesAndEquilibrium: "Explain why the tension in a suspension cable increases as the cable angle with the horizontal decreases. Use force resolution to support your explanation.",
                kinematicsBasics:     "Explain why the suvat equations cannot be applied to a car journey that includes traffic lights. What condition must be satisfied and how would you identify it from a velocity-time graph?",
                energyAndWork:        "Explain why a centripetal force does no work on an object moving in a circle. Your answer must reference the definition W = Fs·cos θ.",
                momentumAndImpulse:   "Explain why airbags reduce injury severity in a collision. Your answer must use the impulse-momentum theorem and explicitly state what quantity is the same with and without an airbag."
            }
        },

        apply: {
            description: "Use mechanics equations to solve unseen numerical problems by selecting the correct equation, substituting correctly, and carrying the calculation through.",
            cognitiveDemand: "Procedure execution in a novel situation. A common failure: applying F = ma without first finding the net force.",
            verbs: ["Calculate", "Determine", "Predict", "Solve", "Apply", "Use", "Find"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Calculate the acceleration of a 3 kg block under a 12 N net force' is apply. 'What is Newton's Second Law?' is remember.",
            examples: {
                newtonLaws:           "A 900 kg car accelerates from 0 to 25 m·s⁻¹ in 10 s. Frictional resistance is 350 N. Calculate the engine driving force and the net force.",
                forcesAndEquilibrium: "A 10 kg box rests on a plane inclined at 35°. μ = 0.45. Calculate the normal reaction, required friction force, and maximum available friction. State whether the box slides.",
                kinematicsBasics:     "A stone is thrown horizontally from a cliff 45 m high at 12 m·s⁻¹. Calculate the time to reach the ground, horizontal range, and speed on impact.",
                energyAndWork:        "A 60 kg cyclist free-wheels from rest down a 50 m slope inclined at 8°. Friction does 1800 J of work against the cyclist. Calculate speed at the bottom.",
                momentumAndImpulse:   "A 0.15 kg ball moving at 20 m·s⁻¹ is struck by a bat and rebounds at 25 m·s⁻¹ in the opposite direction. The contact lasts 0.008 s. Calculate the impulse and average force."
            }
        },

        analyze: {
            description: "Break down multi-force scenarios, motion graphs, or collision data to identify dominant effects, classify motion types, and draw evidence-based conclusions.",
            cognitiveDemand: "Decomposition and inference from evidence. The student works from data or a complex scenario to conclusions rather than from a formula to an answer.",
            verbs: ["Identify", "Classify", "Deduce", "Analyse", "Determine", "Distinguish", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence. Given a velocity-time graph, identifying phases of acceleration, deceleration, and constant velocity, then calculating net force in each phase — this is analyze.",
            examples: {
                newtonLaws:           "A velocity-time graph shows: 0–5 s: linear increase from 0 to 10 m·s⁻¹; 5–15 s: constant at 10 m·s⁻¹; 15–20 s: linear decrease to 0. Mass = 1200 kg. Determine the net force in each phase, identify the phase where the driving force equals friction, and calculate the work done by net force in the first phase.",
                forcesAndEquilibrium: "Force-extension data for a cable are provided: F (kN): 0, 10, 20, 30, 40, 50; extension (mm): 0, 2.1, 4.0, 5.9, 7.8, 11.5. Analyse whether the cable obeys Hooke's Law throughout, identify the elastic limit, and determine the spring constant in the linear region.",
                kinematicsBasics:     "Range-angle data for a projectile launched at 18 m·s⁻¹ are: 20°→59 m; 30°→52 m; 40°→32 m. Wait — these are inconsistent with theory. Analyse the data: identify which results are anomalous, explain what physical effect (air resistance) could cause the discrepancy at higher angles, and calculate the theoretical range at 30° to compare.",
                energyAndWork:        "A skier descends 200 m vertically. Speed at the top is 5 m·s⁻¹; speed at the bottom is 38 m·s⁻¹. Mass = 75 kg. Analyse the energy budget: calculate initial and final mechanical energy, determine total energy lost to friction, calculate average friction force if the slope length is 800 m.",
                momentumAndImpulse:   "Collision data: 2 kg cart A at 4 m·s⁻¹ collides with 3 kg cart B at rest. After collision: A moves at 0.4 m·s⁻¹, B moves at 2.4 m·s⁻¹. Analyse: verify momentum conservation, calculate KE before and after, classify the collision type and calculate the fraction of KE lost."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the appropriateness of a model, or the quality of an experimental design in mechanics.",
            cognitiveDemand: "Judgement with justification — the student identifies an error or limitation, states the criterion by which it fails, and gives a correct or better alternative.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Justify", "Appraise", "Judge"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. Restating the correct answer without engaging with the specific claim is understand-level, not evaluate.",
            examples: {
                newtonLaws:           "A student states: 'When a horse pulls a cart, the cart pulls back on the horse with equal force by Newton's Third Law, so the horse and cart can never accelerate — the forces always cancel.' Evaluate this argument. Identify precisely what is wrong, which system each force acts on, and show what the correct analysis predicts.",
                forcesAndEquilibrium: "Evaluate the claim that 'friction always opposes motion.' Identify two distinct cases where this statement is misleading or incorrect — one where friction acts in the direction of motion and one where friction acts on a stationary object — and explain the correct statement for each.",
                kinematicsBasics:     "A student uses suvat equations to calculate the landing speed of a skydiver by setting u = 0 and a = 9.81 m·s⁻¹ for the entire fall. Evaluate this calculation — identify the assumption that makes it invalid for a skydiver, state which force the student has neglected, and describe what actually happens to acceleration during a real freefall.",
                energyAndWork:        "Evaluate the following energy calculation: 'A 1000 kg car travelling at 20 m·s⁻¹ brakes to rest. All kinetic energy converts to gravitational PE as the car slows, so it gains height Δh = v²/(2g) = 20.4 m.' Identify every error in this reasoning and provide the correct analysis.",
                momentumAndImpulse:   "A student calculates the speed after a perfectly inelastic collision using kinetic energy conservation rather than momentum conservation. Evaluate this approach — state why it is incorrect, identify what assumption it makes, calculate the error in predicted speed for a specific numerical example, and state the correct conservation principle to use."
            }
        },

        create: {
            description: "Generate an original experimental design, engineering solution, or multi-step analytical framework by integrating multiple mechanics concepts.",
            cognitiveDemand: "Synthesis and original production. The student assembles multiple concepts into a coherent new output that cannot be produced by recalling a single procedure.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output. Designing a vehicle safety test that measures impulse, verifies Newton's laws, and quantifies energy loss requires integrating kinematics, Newton's laws, energy methods, and impulse-momentum — no single equation produces the design.",
            examples: {
                newtonLaws:           "Design an experiment to verify Newton's Second Law (F ∝ a for constant mass, and a ∝ 1/m for constant force) using a dynamics trolley, pulley, and hanging masses. Specify: equipment and setup; how you will vary F while keeping m constant; how you will vary m while keeping F constant; data collection method; how you will plot the data to give a straight line; sources of error and how you will minimise them.",
                forcesAndEquilibrium: "Formulate a procedure to determine experimentally the coefficient of static friction between two surfaces using only a protractor, a flat board, and a test object. Derive the relationship between critical angle and μ from first principles. Describe how you would conduct multiple trials and calculate μ with an uncertainty estimate.",
                kinematicsBasics:     "Design an experiment to measure g using a free-fall method. Specify the apparatus, the measurement you will take, how you will calculate g from your data using a suvat equation, how you will plot your results to obtain g graphically, and a full uncertainty analysis identifying the dominant source of error.",
                energyAndWork:        "Construct an energy audit for a ski jump: the athlete starts from rest at height H, travels down a curved slope, launches at angle θ at height h, and lands at horizontal distance R. Derive expressions for: (a) launch speed assuming friction removes fraction f of initial PE; (b) time of flight; (c) R in terms of launch speed and angle. Identify which parameter (H, θ, or f) has the greatest effect on R and justify using your expressions.",
                momentumAndImpulse:   "Design a crash test protocol to compare the protective performance of two airbag systems. Specify: the test vehicle mass and speed; how you will measure the force-time profile during the crash; how you will extract impulse and peak force from the data; the criteria you will use to judge which system is superior; and how the protocol accounts for variation in occupant mass."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Confuses mass and weight — uses kg and N interchangeably",
                "Believes objects need a continuous force to keep moving (Aristotelian misconception)",
                "Applies Newton's Third Law force pairs to the same object, concluding nothing can ever accelerate",
                "Uses speed and velocity interchangeably, ignoring vector nature",
                "Cannot identify which suvat equation to use — attempts to apply all four simultaneously",
                "Applies energy conservation to inelastic collisions"
            ],
            immediateNextSteps: [
                "Address the mass-weight distinction with a single concrete example: a 10 kg object has mass 10 kg everywhere in the universe; its weight is 10 × 9.81 = 98.1 N on Earth, 10 × 1.62 = 16.2 N on the Moon, and 0 N in deep space. Write W = mg on every problem involving gravitational force until automatic.",
                "For Newton's First Law: drop a book on a table. It stays put — no horizontal force is needed to keep it there. Push it and let go — it immediately slows due to friction. The stopping is caused by friction (a force), not by the absence of the original push. Repeat until the misconception that motion requires continuous force is replaced by its opposite.",
                "For Newton's Third Law: draw two separate free body diagrams — one for object A, one for object B. The Third Law pair appears once on each diagram, never twice on the same diagram. Practice with: horse-cart, foot-ground during walking, rocket-exhaust. Never put both Third Law partners on the same diagram.",
                "For suvat selection: create the selection table — rows are the four equations, columns are s, u, v, a, t. Mark which variables appear in each equation. When given a problem, identify three known variables and one unknown; the missing (fourth) variable determines the row — select the equation that does not contain the missing variable.",
                "For collision misconceptions: write on a card in red ink: 'COLLISIONS — use MOMENTUM conservation. KE is only conserved in elastic collisions. Apply energy conservation AFTER the collision (for swinging, rolling etc.), never DURING it.'"
            ],
            misconceptionsToAddress: [
                "Motion requires continuous force → Newton's First Law demonstration above",
                "Third Law forces cancel on same object → two separate free body diagrams above",
                "Mass equals weight → W = mg with Moon/Earth comparison above"
            ]
        },

        developing: {
            characteristics: [
                "Applies F = ma correctly for single-force problems but forgets to find net force in multi-force situations",
                "Selects suvat equations correctly most of the time but makes sign errors with deceleration",
                "Understands energy conservation conceptually but makes errors with the friction term",
                "Calculates momentum before and after collisions but does not verify conservation or check sign conventions",
                "Confuses work done by a specific force with net work done in the work-energy theorem",
                "Resolves forces on inclined planes but consistently places sin and cos on the wrong components"
            ],
            immediateNextSteps: [
                "For multi-force F = ma errors: always draw the free body diagram first. Identify every force. Add them vectorially to find F_net. Only then write F_net = ma and substitute. Never substitute the applied force directly — build the habit of the extra step.",
                "For suvat sign errors: at the top of every suvat problem, write 'positive direction = ___' and assign deceleration as negative explicitly. Write a = −7.5 m·s⁻² rather than 'deceleration of 7.5 m·s⁻²' — the sign must appear in the equation.",
                "For energy-friction errors: write the energy equation as Eₖ_initial + Eₚ_initial − W_friction = Eₖ_final + Eₚ_final. The friction term always subtracts (energy lost). Rearrange before substituting numbers.",
                "For inclined plane sin/cos confusion: derive once using a specific example at 0° and 90°. At 0° (flat): component along slope = 0 (sin 0° = 0); component perpendicular = mg (cos 0° = 1). At 90° (vertical): component along slope = mg (sin 90° = 1); component perpendicular = 0 (cos 90° = 0). This derivation is self-correcting and makes the rule memorable."
            ],
            misconceptionsToAddress: [
                "Applied force equals net force → mandatory free body diagram before every F = ma application",
                "Sin/cos on inclined planes → 0° and 90° boundary check as above"
            ]
        },

        proficient: {
            characteristics: [
                "Applies all Newton's laws fluently with correct vector treatment",
                "Solves suvat problems efficiently including projectile motion with component resolution",
                "Applies conservation of energy correctly with friction as a work term",
                "Applies conservation of momentum to both elastic and inelastic collisions with correct sign treatment",
                "Calculates impulse and connects it to force-time area under a graph",
                "Can identify which conservation law applies to which phase of a mechanical problem"
            ],
            immediateNextSteps: [
                "Extend to variable forces: if force varies with position or time (e.g. a spring: F = −kx), the suvat equations and simple F = ma no longer apply. Research how integration of F·dx gives work done by a variable force — this bridges mechanics to calculus and unlocks spring problems.",
                "Explore the moment of inertia concept: rotational analogue of Newton's Second Law is τ = Iα. Calculate I for simple shapes (ring, disc, rod) and apply to rolling problems — a rolling ball conserves both translational and rotational KE simultaneously.",
                "Connect momentum and energy via the centre of mass frame: in the CM frame, total momentum is always zero. This frame simplifies elastic collision calculations enormously. Derive the velocity exchange formula for elastic collisions between equal masses from momentum and energy conservation simultaneously.",
                "Investigate terminal velocity: at terminal velocity, F_net = 0, so drag = weight. Since drag ∝ v², terminal velocity increases with the square root of weight-to-drag-coefficient ratio. Apply this to parachute design — calculate the required parachute area to achieve a safe landing speed."
            ],
            misconceptionsToAddress: [
                "Suvat applicable to non-uniform acceleration → explicitly check that a is constant before applying",
                "Kinetic energy conserved in inelastic collision → always classify collision type before deciding which conservation laws to apply"
            ]
        },

        expert: {
            characteristics: [
                "Derives the suvat equations from first principles using calculus (v = ∫a·dt, s = ∫v·dt)",
                "Analyses multi-body systems with internal forces, applying Newton's laws to each body separately",
                "Applies the work-energy theorem using integration for variable forces (W = ∫F·ds)",
                "Analyses rotational mechanics including torque, moment of inertia, and conservation of angular momentum",
                "Connects Newtonian mechanics to Lagrangian or Hamiltonian formulations conceptually",
                "Critically evaluates where classical mechanics breaks down (relativistic speeds, quantum scale)"
            ],
            immediateNextSteps: [
                "Derive conservation of momentum from Newton's Third Law and Second Law simultaneously: for two interacting objects, F₁₂ = −F₂₁ (Third Law). Applying Second Law to each: m₁a₁ = F₁₂ and m₂a₂ = F₂₁. Adding: m₁a₁ + m₂a₂ = 0, i.e. d(m₁v₁ + m₂v₂)/dt = 0. Total momentum is constant. This derivation shows conservation of momentum is not a separate law — it follows from Newton's laws for closed systems.",
                "Investigate the limitations of Newton's mechanics: at speeds above ~0.1c, relativistic corrections become measurable (time dilation, length contraction, mass-energy equivalence). At the quantum scale, uncertainty principle prevents simultaneous precise knowledge of position and momentum. Map exactly where your Classical Mechanics toolkit remains valid.",
                "Explore Lagrangian mechanics: instead of forces, use the Lagrangian L = T − V (kinetic minus potential energy). The Euler-Lagrange equation d/dt(∂L/∂q̇) − ∂L/∂q = 0 gives equations of motion without ever drawing a free body diagram — powerful for constrained systems like pendulums and coupled oscillators."
            ],
            misconceptionsToAddress: [
                "Newton's Laws are always exact → they are approximations valid at low speeds and macroscopic scales; study where they break down",
                "Conservation of momentum is a separate postulate → derive it from Newton's laws as above"
            ]
        }
    }
},


heatTransfer: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about heat transfer mechanisms, equations, and material properties from memory without requiring understanding of why they are true.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response states correct facts without explanation. 'Fourier's Law is Q/t = kA(ΔT/Δx)' is remember. Explaining why thickness is in the denominator crosses into understand.",
            examples: {
                conductionBasics:   "State Fourier's Law and identify what each symbol represents. List three materials in order of decreasing thermal conductivity.",
                convectionBasics:   "Name the two types of convection. State Newton's Law of Cooling and identify each variable.",
                radiationBasics:    "Write the Stefan-Boltzmann Law. State the value of σ. Define emissivity.",
                thermalEquilibrium: "State the condition for thermal equilibrium. Write Newton's Law of Cooling in its exponential form.",
                mechanisms:         "Identify which heat transfer mechanism requires no medium. Name the carrier in each of the three mechanisms."
            }
        },

        understand: {
            description: "Explain the physical meaning behind equations and concepts — connect cause to effect and structure to function in heat transfer contexts.",
            cognitiveDemand: "Translation and interpretation — the student explains WHY, not just WHAT. A correct causal explanation demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or reason. 'Metals conduct heat well because they have free electrons' is understand. 'Metals conduct well' alone is remember.",
            examples: {
                conductionBasics:   "Explain why metals are better conductors than non-metals at the atomic level — your answer must identify the role of free electrons in energy transport.",
                convectionBasics:   "Explain why natural convection currents form above a hot surface. Your answer must connect density change to temperature change to buoyant force.",
                radiationBasics:    "Explain why the Stefan-Boltzmann Law uses T⁴ rather than T — specifically, what physical process makes radiated power so sensitive to temperature.",
                thermalEquilibrium: "Explain why objects cool exponentially rather than linearly when placed in a cooler environment. Connect the rate of cooling to the driving force.",
                mechanisms:         "Explain why radiation is the only mechanism that works in a vacuum. Your answer must identify what carries energy in conduction and convection that is absent in a vacuum."
            }
        },

        apply: {
            description: "Use heat transfer equations to solve problems not previously seen in exactly this form. The student selects the correct equation, substitutes correctly, and carries the calculation through.",
            cognitiveDemand: "Procedure execution in a novel situation. A common failure: knowing the equation but substituting the wrong values or forgetting to convert to Kelvin for radiation.",
            verbs: ["Calculate", "Determine", "Predict", "Sketch", "Apply", "Use", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Calculate heat loss through a 0.15 m concrete wall' is apply. 'What is Fourier's Law?' is remember.",
            examples: {
                conductionBasics:   "A steel rod (k = 50 W·m⁻¹·K⁻¹, length 0.40 m, area 5 × 10⁻⁴ m²) has one end at 300°C and the other at 50°C. Calculate the rate of heat conduction through the rod.",
                convectionBasics:   "A flat plate at 80°C is exposed to air at 25°C. The convective heat transfer coefficient is h = 20 W·m⁻²·K⁻¹ and the plate area is 0.5 m². Calculate the convective heat transfer rate.",
                radiationBasics:    "A blackbody sphere of radius 0.1 m is at 500°C. Calculate the total power radiated. Show the conversion from Celsius to Kelvin explicitly.",
                thermalEquilibrium: "A hot object at 150°C cools in a room at 22°C with cooling constant k = 0.04 min⁻¹. Calculate its temperature after 30 minutes.",
                compositeWall:      "A composite wall consists of 8 cm brick (k = 0.7) and 5 cm insulation (k = 0.04), both with area 15 m². Indoor temp = 18°C, outdoor = −8°C. Calculate total thermal resistance and heat loss rate."
            }
        },

        analyze: {
            description: "Break down experimental data, graphs, or complex scenarios to identify patterns, draw conclusions, and determine the dominant mechanism operating in a given situation.",
            cognitiveDemand: "Decomposition and inference from evidence. The student works from data to conclusion rather than from a formula to an answer.",
            verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Distinguish", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence. 'Given a cooling curve, determine the cooling constant and identify whether Newton's Law of Cooling applies' is analyze — the student must test the data against the model.",
            examples: {
                conductionBasics:   "Temperature-position data for a composite wall are given. Analyse where the steepest temperature gradient occurs and deduce which layer has the lowest thermal conductivity. Justify using Fourier's Law.",
                convectionBasics:   "Two cooling experiments are conducted: identical hot plates, one in still air and one with a fan running. Cooling rates are 20 W and 120 W respectively. Analyse which type of convection each represents and calculate the convective coefficient in each case.",
                radiationBasics:    "A body cools in a vacuum at two temperatures: 900 K and 450 K. Analyse the ratio of radiated powers at these two temperatures and explain why radiation becomes dominant at higher temperatures compared to conduction and convection.",
                thermalEquilibrium: "Temperature-time data for a cooling object are provided: t (min): 0, 5, 10, 15, 20; T (°C): 80, 61, 47, 37, 30; T_ambient = 20°C. Analyse whether these data fit Newton's Law of Cooling by plotting ln(T − T_amb) against t and assessing linearity.",
                mechanisms:         "An astronaut's suit must manage heat transfer in a vacuum environment. Analyse which heat transfer mechanisms are relevant, which are absent, and what engineering solutions target each relevant mechanism."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, appropriateness of a model, or quality of an experimental design in the context of heat transfer.",
            cognitiveDemand: "Judgement with justification — the student identifies an error or limitation, explains the criterion by which it fails, and states what would be correct or better.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. Simply restating the correct answer without engaging with the claim is understand-level, not evaluate.",
            examples: {
                conductionBasics:   "A student claims that doubling the thickness of insulation will halve the rate of heat loss regardless of what other layers are present. Evaluate this claim — identify when it is correct, when it is not, and what additional information is needed.",
                convectionBasics:   "Evaluate the claim that 'radiators heat rooms primarily by radiation'. Assess this using quantitative reasoning about the relative contributions of convection and radiation at typical radiator temperatures.",
                radiationBasics:    "A researcher uses T in Celsius in the Stefan-Boltzmann equation and obtains a result. Evaluate the magnitude of the error introduced, calculate the correct answer for T = 100°C, and explain why the error is so large.",
                thermalEquilibrium: "Evaluate Newton's Law of Cooling as a model for estimating time of death in forensic science. Identify the assumptions the model makes, assess which are realistic and which are violated in practice, and conclude whether the method should be used as the sole evidence in a legal case.",
                mechanisms:         "A student states: 'A thermos flask works by preventing conduction, so the liquid inside stays hot forever.' Evaluate this statement — identify what the thermos does and does not prevent, and explain why 'forever' is not achievable."
            }
        },

        create: {
            description: "Generate an original experimental design, thermal engineering solution, or analytical framework by integrating multiple heat transfer concepts.",
            cognitiveDemand: "Synthesis and original production. The student assembles multiple concepts into a coherent new output that addresses a specific brief.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output that cannot be produced by recalling a single procedure. Designing a passive house heating system requires integrating conduction (insulation), convection (ventilation), and radiation (solar gain) — no single equation produces the answer.",
            examples: {
                conductionBasics:   "Design a composite wall for a cold-storage facility maintaining −20°C inside in a climate reaching 40°C outside. Specify materials, thicknesses, and order of layers. Calculate total R and maximum heat gain. Justify every material choice with reference to k values.",
                convectionBasics:   "Propose a passive cooling system for a data centre that uses natural convection exclusively. Specify: (a) the geometry of the airflow path; (b) how temperature difference drives airflow; (c) how you would calculate the heat removal rate; (d) limitations of this approach vs forced convection.",
                radiationBasics:    "Design a spacecraft thermal management system for a satellite in low Earth orbit where T_space = 3 K. The satellite generates 500 W of internal heat. Specify: (a) why conduction and convection are irrelevant; (b) the surface area and emissivity needed to radiate 500 W at a target operating temperature of 300 K; (c) how you would verify your design using Stefan-Boltzmann calculations.",
                thermalEquilibrium: "Construct an experimental protocol to measure the Newton's Law of Cooling constant k for a metal cylinder. Specify: (a) equipment and measurement method; (b) data collection procedure with time intervals; (c) how you will linearise the data to extract k graphically; (d) sources of error and how you will minimise them.",
                mechanisms:         "Formulate a decision framework a thermal engineer could use to determine which heat transfer mechanism(s) to target in an engineering problem. The framework must correctly identify the dominant mechanism for: (a) space heating of a building; (b) cooling of a microprocessor; (c) heat loss from the Sun to Earth; (d) cooking on an electric hob."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the three mechanisms of heat transfer but cannot consistently describe what carries energy in each",
                "Confuses heat and temperature — uses terms interchangeably",
                "Cannot apply Fourier's Law without a worked example in front of them",
                "Does not know to convert to Kelvin for Stefan-Boltzmann calculations",
                "Cannot distinguish natural from forced convection",
                "Believes insulating materials are 'cold' rather than understanding they resist heat flow"
            ],
            immediateNextSteps: [
                "Build the heat-vs-temperature distinction immediately: heat is energy in transit (joules), temperature is average kinetic energy (kelvin or celsius). Write one sentence for each on a card and never use the terms interchangeably again.",
                "For each mechanism, draw one diagram showing what moves: vibrating molecules touching (conduction), rising fluid parcels (convection), wavy lines through empty space (radiation). Do not touch any equation until these three diagrams are automatic.",
                "Practice one Fourier's Law calculation with explicit unit checking before moving on: write out every variable with its unit, check units cancel to give watts, then calculate. Repeat three times with different numbers.",
                "For Stefan-Boltzmann, write at the top of every problem in large text: 'KELVIN ONLY — add 273'. Practice converting five temperatures before any calculation.",
                "For the insulation misconception: handle a piece of foam insulation — it feels room temperature because it conducts heat away so slowly. Then touch metal — it feels cold because it conducts rapidly. This physical experience corrects the misconception more reliably than text."
            ],
            misconceptionsToAddress: [
                "Heat = temperature → use joules vs kelvin distinction on every problem",
                "Stefan-Boltzmann in Celsius → Kelvin-only rule written on every problem",
                "Insulators feel cold → physical handling exercise above"
            ]
        },

        developing: {
            characteristics: [
                "Applies Fourier's Law for single layers correctly most of the time",
                "Understands thermal resistance concept but makes errors adding layers in series",
                "Correctly identifies that Stefan-Boltzmann requires Kelvin but sometimes makes T⁴ calculation errors",
                "Understands convection direction (hot rises) but cannot quantitatively apply Newton's Law of Cooling",
                "Can name emissivity but does not understand its effect on Stefan-Boltzmann calculations",
                "Confuses Newton's Law of Cooling (convection rate equation) with Newton's Cooling equation (temperature vs time)"
            ],
            immediateNextSteps: [
                "For composite walls: always calculate each layer's R separately first, writing R₁ = L₁/(k₁A), R₂ = L₂/(k₂A) on separate lines before adding. Never add them in a single step until this layout is automatic.",
                "For T⁴ calculations: calculate T² first, then square the result. Write this as a two-step process. Skipping directly to T⁴ causes most calculation errors.",
                "For Newton's Cooling confusion: write two cards. Card 1: 'Rate equation: Q/t = hA·ΔT — gives power in watts at an instant.' Card 2: 'Temperature equation: T(t) = T_amb + ΔT₀·e^(−kt) — gives temperature at any time.' Use different colours for the two cards.",
                "For emissivity: practise calculating P for the same object with ε = 1.0, 0.95, 0.5, and 0.1 at T = 500 K. Observe that the 10-fold emissivity difference gives a 10-fold power difference. Connect: high ε = good emitter AND good absorber; low ε = poor emitter AND poor absorber (shiny surfaces)."
            ],
            misconceptionsToAddress: [
                "Composite resistance errors → layer-by-layer calculation layout above",
                "T⁴ calculation errors → two-step squaring procedure above",
                "Two Newton's Law confusion → colour-coded card distinction above"
            ]
        },

        proficient: {
            characteristics: [
                "Applies all three mechanism equations fluently with correct unit handling",
                "Correctly calculates composite wall thermal resistance and heat flow",
                "Uses Newton's Cooling exponential equation to find both T at a given time and t at a given temperature",
                "Correctly applies net radiation formula P_net = εσA(T_hot⁴ − T_cold⁴)",
                "Uses Wien's Law to predict peak emission wavelengths",
                "Can identify which mechanism dominates in a given engineering scenario"
            ],
            immediateNextSteps: [
                "Extend to parallel thermal resistances: research how double-glazing with edge spacers creates a parallel conduction path that reduces total R. Calculate the combined R for a window with a metal frame edge conducting in parallel with the glass-argon system.",
                "Explore the Biot number: Bi = hL/k. When Bi << 0.1, the object can be treated as spatially uniform for Newton's Cooling calculations. When Bi is large, spatial temperature gradients matter. Calculate Bi for a steel sphere cooling in air — determine whether the lumped capacitance (Newton's Cooling) approximation is valid.",
                "Connect all three mechanisms for a real system: analyse a thermos flask quantitatively — calculate heat loss by residual conduction through the stopper, residual convection through the partial vacuum, and radiation between the silvered walls. Determine which mechanism dominates and by how much.",
                "Explore the concept of thermal time constant: τ = mc/(hA). Calculate τ for different objects and connect it to how quickly Newton's Cooling k is. Understand why small, light objects cool faster than large, heavy ones."
            ],
            misconceptionsToAddress: [
                "Net radiation error (using T instead of T_hot⁴ − T_cold⁴) → always write net radiation formula explicitly before substituting",
                "Forgetting all three mechanisms operate simultaneously → thermos flask analysis above forces consideration of each"
            ]
        },
        expert: {
            characteristics: [
                "Derives Fourier's Law from first principles using Fick's Law of diffusion analogy and dimensional analysis",
                "Analyses complex multi-mechanism problems — calculates and compares contributions from conduction, convection, and radiation simultaneously",
                "Critically evaluates the validity of Newton's Law of Cooling for a given system by calculating the Biot number",
                "Connects Wien's Law and Stefan-Boltzmann Law to blackbody radiation theory and Planck's equation",
                "Applies heat transfer principles to engineering optimisation — e.g. fin design, heat exchanger efficiency, passive building thermal mass"
            ],
            immediateNextSteps: [
                "Derive the exponential cooling equation from Newton's convective rate law: start from dQ/dt = hA(T − T_amb), recognise Q = mc·T for a body of mass m and specific heat c, write mc·dT/dt = −hA(T − T_amb), separate variables, and integrate to obtain T(t) = T_amb + (T_0 − T_amb)e^(−hAt/mc). This derivation reveals what the cooling constant k actually represents physically: k = hA/(mc).",
                "Investigate the Planck radiation law and how Stefan-Boltzmann and Wien's Laws are derived from it by integration and differentiation respectively — connecting empirical heat transfer to quantum statistical mechanics.",
                "Design a real engineering optimisation: a heat sink for a 100 W processor must maintain junction temperature below 85°C with ambient at 25°C. Calculate required fin geometry using extended surface analysis, specifying fin number, length, and material to meet the thermal resistance budget."
            ],
            misconceptionsToAddress: [
                "Treating k in Newton's Cooling as a pure empirical constant → derivation above reveals k = hA/(mc), showing it depends on object properties and convective conditions"
            ]
        }
    }
}

};

const EndSection3 = "close"