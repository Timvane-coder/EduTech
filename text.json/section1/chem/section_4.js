



initializeAssessmentRubrics() { 

this.assessmentRubrics = { 


matterParticleTheory: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about particle arrangement, motion, and forces in each state; names and directions of changes of state; equations for latent heat and gas laws; and the Kelvin conversion.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No causal reasoning required. A student who cannot perform at this level cannot access higher-order questions on this topic.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Give"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts with no explanation. 'The equation for latent heat is Q = mL' is remember. Adding 'where L is the energy needed to break intermolecular forces per kilogram' moves into understand.",
            examples: {
                particleModel:      "State three properties of particles according to the kinetic particle theory. Define the term 'diffusion'.",
                statesOfMatter:     "List the arrangement, motion, and intermolecular force characteristics of particles in a solid, a liquid, and a gas.",
                changesOfState:     "Name all six changes of state and state the direction of each (e.g. solid → liquid). Write the equation for specific latent heat.",
                gasLaws:            "State Boyle's law in words and in symbols. Write the equation for Charles's law. State the value of absolute zero in both Kelvin and Celsius."
            }
        },

        understand: {
            description: "Explain the particle-level reason for macroscopic observations — connect state properties to particle behaviour, explain why changes of state produce flat lines, explain gas pressure in terms of collisions.",
            cognitiveDemand: "Causal link required. 'Gases are compressible' is remember. 'Gases are compressible because their particles are widely separated, so the empty space between them can be reduced without the particles themselves being compressed' is understand.",
            verbs: ["Explain", "Justify", "Describe", "Contrast", "Interpret", "Connect"],
            whatDistinguishesThisLevel: "Understand requires the mechanism. Stating that temperature stays constant during melting is remember. Explaining that energy input at the melting point is used to overcome intermolecular forces rather than increase particle kinetic energy, so temperature (which measures mean kinetic energy) does not rise, is understand.",
            examples: {
                particleModel:      "Explain why diffusion is slower in liquids than in gases. Your answer must reference particle spacing, collision frequency, and mean free path.",
                statesOfMatter:     "Explain why gases are much less dense than liquids. Your answer must reference particle separation and its cause.",
                changesOfState:     "Explain why the temperature remains constant during boiling, even though energy is continuously being supplied to the liquid. Reference kinetic energy and intermolecular forces.",
                gasLaws:            "Explain, using the particle collision model, why the pressure of a gas at constant volume increases when the temperature is raised."
            }
        },

        apply: {
            description: "Use equations (Q = mL, Q = mcΔT, gas law equations, Graham's law) and the particle model to solve quantitative or qualitative problems in new contexts.",
            cognitiveDemand: "Correct procedure execution in a new context. Key failure modes: using Q = mcΔT during a state change; forgetting to convert to Kelvin; inverting pressure or volume ratios in gas law equations.",
            verbs: ["Calculate", "Apply", "Predict", "Determine", "Use", "Find", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a new calculation or prediction. Writing Q = mL is remember. Selecting Q = mL (not Q = mcΔT) for a change-of-state situation, substituting correctly, and calculating energy with correct units is apply.",
            examples: {
                particleModel:      "Ammonia (M = 17 g/mol) and nitrogen (M = 28 g/mol) are released simultaneously. Calculate the ratio of their diffusion rates. Predict which gas reaches the far end of a tube first.",
                statesOfMatter:     "A gas is compressed from 800 cm³ to 200 cm³ at constant temperature. The original pressure is 50 kPa. Calculate the final pressure using Boyle's law.",
                changesOfState:     "Calculate the energy needed to completely evaporate 3 kg of water at 100°C. (L_v = 2,260,000 J/kg.) Then calculate the additional energy needed to raise the resulting steam from 100°C to 150°C. (c_steam = 2,010 J/kg·°C.)",
                gasLaws:            "A gas occupies 500 cm³ at 27°C and 120 kPa. It is heated to 87°C and expanded to 600 cm³. Calculate the new pressure using the combined gas law."
            }
        },

        analyze: {
            description: "Interpret heating/cooling curve data, identify changes of state from graph features, deduce particle behaviour from experimental observations, or analyse patterns in gas law data.",
            cognitiveDemand: "Inference from evidence. The conclusion was not given and requires reasoning from provided data. Identifying a flat line on a heating curve and deducing the change of state and energy value are analyse tasks.",
            verbs: ["Deduce", "Identify", "Analyse", "Determine", "Interpret", "Classify", "Compare"],
            whatDistinguishesThisLevel: "Analyse requires working from evidence to conclusion. 'State the melting point of substance X' from a heating curve is recall. 'From the heating curve data, calculate the specific latent heat of fusion of substance X, given that the heater supplies 500 J/min and the mass is 0.2 kg' requires the student to read the duration of the flat line, calculate total energy, and divide by mass.",
            examples: {
                particleModel:      "Bromine vapour is released at one end of a 120 cm sealed tube. After 5 minutes, the brown colour has spread 72 cm. A lighter gas (M = 4 g/mol) is released from the same end simultaneously. Calculate how far the lighter gas has spread in the same time, using Graham's law.",
                statesOfMatter:     "A student records the following data for a gas: (p₁ = 100 kPa, V₁ = 500 cm³); (p₂ = 200 kPa, V₂ = 250 cm³); (p₃ = 50 kPa, V₃ = 1000 cm³). Analyse whether this data is consistent with Boyle's law. Show all working.",
                changesOfState:     "A heating curve shows temperature rising from −10°C to 0°C over 2 minutes, flat at 0°C for 5 minutes, rising from 0°C to 100°C over 10 minutes, flat at 100°C for 20 minutes. The heater supplies 600 J/min and the sample has a mass of 0.3 kg. Calculate the specific latent heats of fusion and vaporisation from this data.",
                gasLaws:            "A sealed syringe contains 60 cm³ of gas at 25°C. The plunger is slowly pushed in until the volume is 20 cm³. The temperature is then raised until the pressure returns to its original value. Calculate the final temperature in °C. Show which gas laws you apply at each stage."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a particle-model explanation, a gas law application, or a heating curve interpretation. State a verdict, identify the specific error, apply the correct principle, and restate the correct answer.",
            cognitiveDemand: "Judgement with justification. Identifying an error without explaining the principle violated is not evaluate-level. The student must state what is wrong, why it is wrong by reference to a specific law or principle, and what would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Justify", "Appraise", "Verify", "Judge"],
            whatDistinguishesThisLevel: "Evaluate requires a standard. 'A student says the flat line on a heating curve means no energy is being transferred.' The student must state this is incorrect, identify that energy IS being transferred (the heater is on), explain that the energy is used to break intermolecular forces (not increase kinetic energy), and therefore temperature does not rise during the state change.",
            examples: {
                particleModel:      "Evaluate the statement: 'Particles in a solid do not move at all — this is why solids have a fixed shape.' Identify the specific error, state what solid particles actually do, and explain why this motion is consistent with the solid having a fixed shape.",
                statesOfMatter:     "Evaluate this student calculation of Charles's law: 'A gas at 20°C and 400 cm³ is heated to 40°C. New volume = 400 × (40/20) = 800 cm³.' Identify the error, state the principle violated, and calculate the correct answer.",
                changesOfState:     "Evaluate the claim: 'The specific latent heat of vaporisation and specific latent heat of fusion for water are similar in value, since both involve a change of state.' Identify the factual error, state the actual values, and explain using particle theory why L_v >> L_f.",
                gasLaws:            "A student applies Boyle's law to a situation where a gas in a car engine is compressed and simultaneously heated by the combustion reaction. Evaluate whether Boyle's law is the appropriate law to apply. Identify which law(s) should be used instead and explain why."
            }
        },

        create: {
            description: "Design an experiment, formulate a particle-model explanation for an unseen phenomenon, derive a prediction from first principles, or construct a multi-step quantitative analysis combining two or more gas laws or energy equations.",
            cognitiveDemand: "Original integration. The student must combine multiple principles to produce something new — an experimental design, a multi-step calculation, or an explanation of a novel phenomenon.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Plan", "Develop"],
            whatDistinguishesThisLevel: "Create requires integration that cannot be achieved by recall. 'Design an experiment to determine the specific latent heat of vaporisation of ethanol' requires the student to integrate: measurement of mass, use of an immersion heater with known power rating, timing to find energy supplied, correction for heat losses, and application of Q = mL — no single recalled fact produces this experimental design.",
            examples: {
                particleModel:      "Design a complete experiment to verify Graham's law using ammonia and hydrochloric acid gases in a sealed tube. Include: method for releasing both gases simultaneously, how you will measure diffusion distance, how you will identify the meeting point, what result you expect, and one source of error that could make the result deviate from the predicted ratio.",
                statesOfMatter:     "Construct a full quantitative analysis of the energy changes when 500 g of steam at 120°C is cooled to ice at −10°C. Use: c_steam = 2,010 J/kg°C; L_v = 2,260,000 J/kg; c_water = 4,200 J/kg°C; L_f = 334,000 J/kg; c_ice = 2,090 J/kg°C. Calculate the energy released at each stage and the total energy released.",
                changesOfState:     "Propose a particle-model explanation for the observation that evaporation from a liquid surface causes the liquid to cool, using the concept of the distribution of kinetic energies among particles. Your explanation must derive the cooling effect from first principles without using the term 'latent heat' — explain it entirely in terms of particle kinetic energy.",
                gasLaws:            "Formulate a logical derivation of the combined gas law from Boyle's law and Charles's law, using proportionality arguments. State clearly what is held constant at each step. Then apply the combined gas law to calculate the volume of 1 mole of an ideal gas at standard temperature and pressure (0°C, 101 kPa), given that at 25°C and 101 kPa it occupies 24.5 L."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the three states of matter but cannot describe particle arrangement or motion for each",
                "Confuses temperature with heat — does not understand that temperature measures mean kinetic energy",
                "Cannot explain the flat line on a heating curve — says 'the substance is absorbing heat but not getting hotter, so the heat is wasted'",
                "Uses Q = mcΔT for change-of-state calculations, not recognising that ΔT = 0",
                "Does not convert temperatures to Kelvin in gas law problems"
            ],
            immediateNextSteps: [
                "Draw three labelled particle diagrams (solid/liquid/gas) from memory before every topic session. Annotate each with: arrangement (regular/irregular/random), spacing (touching/touching/far apart), and motion type (vibration/sliding/rapid random). Never describe a state without these three features.",
                "Make a 'which equation?' decision card: Question 1 — Is the substance changing temperature but NOT changing state? → Q = mcΔT. Question 2 — Is the substance changing state at constant temperature? → Q = mL. Practise identifying which scenario applies before selecting the equation.",
                "Write 'T must be in Kelvin' at the top of every gas law practice page. Write the conversion T(K) = T(°C) + 273 immediately below. Always convert before writing any other values.",
                "Connect temperature to particle motion with one sentence written after every state description: 'Temperature = mean kinetic energy of particles.' This replaces the vague notion that temperature is 'how hot something is'."
            ],
            misconceptionsToAddress: [
                "Solid particles do not move → solid particles vibrate continuously about fixed positions",
                "The flat line on a heating curve means heat is wasted → energy is being used to break intermolecular forces, not raise kinetic energy",
                "Temperature and heat are the same thing → temperature measures mean kinetic energy; heat is energy transferred due to temperature difference"
            ]
        },

        developing: {
            characteristics: [
                "Can describe particle properties for each state but gives incomplete explanations (e.g. 'gases are compressible because there is space between particles' without explaining why solids/liquids are not)",
                "Applies Q = mL correctly for simple calculations but confuses L_f and L_v",
                "Applies Boyle's law and Charles's law in isolation but cannot combine them",
                "States Markovnikov's rule for gas pressure ('more collisions = more pressure') but cannot quantitatively connect temperature increase to pressure increase",
                "Converts temperature to Kelvin inconsistently — sometimes forgets"
            ],
            immediateNextSteps: [
                "For latent heat values: memorise that L_v >> L_f using the mnemonic 'Vaporisation Violently Vast' — the latent heat of vaporisation of water is 2,260,000 J/kg (nearly 7× the latent heat of fusion of 334,000 J/kg). Always connect to the particle reason: vaporisation requires complete separation; fusion only disrupts the regular lattice.",
                "For combined gas law problems: always check which variables are constant before choosing an equation. Write three labels: 'p changes?', 'V changes?', 'T changes?' Mark YES or NO for each. If only one is constant, identify which law applies. If all three change, use the combined equation.",
                "Build a gas law verification habit: after every calculation, check the direction of change. If you calculated that pressure increased when volume increased at constant temperature — you have made an error. Invert your ratio and recalculate.",
                "Practise the full energy cooling calculation (steam → ice) step by step at least three times until you can identify all five stages automatically: (1) cool steam; (2) condense; (3) cool water; (4) freeze; (5) cool ice."
            ],
            misconceptionsToAddress: [
                "L_f ≈ L_v → L_v is approximately 7× L_f for water; vaporisation requires far more energy per kg",
                "Boyle's law applies when temperature changes → Boyle's law requires constant temperature; the pressure-temperature law applies at constant volume",
                "Absolute zero means particles stop completely → absolute zero is the theoretical limit at which all kinetic energy would cease; it is not physically achievable"
            ]
        },

        proficient: {
            characteristics: [
                "Draws accurate, annotated particle diagrams for all three states and all six changes of state",
                "Correctly selects Q = mL or Q = mcΔT and applies latent heat values accurately, including multi-stage energy calculations",
                "Applies all three gas laws and the combined gas law correctly, always converting to Kelvin",
                "Explains the flat line on heating curves using kinetic energy and intermolecular forces",
                "Applies Graham's law to compare diffusion rates and calculate meeting positions"
            ],
            immediateNextSteps: [
                "Extend to quantitative pressure-temperature reasoning: given a gas at known conditions, calculate the new pressure or temperature for a given volume change and temperature change simultaneously using the combined gas law — practise five varied examples.",
                "Connect the gas laws to absolute zero: extrapolate Charles's law data (volume vs temperature in Kelvin) to find where volume would reach zero — this predicts absolute zero at −273°C. Perform this graphical extrapolation once to embed the concept of absolute zero as a physical consequence of the model.",
                "Apply the particle model to explain non-ideal gas behaviour qualitatively: at very high pressure or low temperature, gas particles are forced close enough together that intermolecular forces become significant — the gas deviates from Boyle's law. Connect to real gas vs ideal gas distinction.",
                "Analyse multi-stage heating curve calculations with heat loss corrections: if the heater power is known but the flat line is shorter than expected, calculate the implied latent heat and compare to the accepted value — identify heat loss to the environment as the discrepancy source."
            ],
            misconceptionsToAddress: [
                "Boiling occurs only at 100°C → boiling point depends on pressure; at reduced pressure, water boils below 100°C",
                "Diffusion only occurs in gases → diffusion occurs in liquids too, but much more slowly due to reduced particle speed and increased collision frequency"
            ]
        },

        expert: {
            characteristics: [
                "Derives the gas laws from kinetic theory principles (pressure = rate of momentum transfer from particle collisions)",
                "Calculates multi-stage energy changes across three state transitions correctly and efficiently",
                "Applies Graham's law including derivation from mean kinetic energy equality at constant temperature",
                "Evaluates the limitations of the ideal gas model and identifies conditions under which real gases deviate",
                "Connects latent heat to intermolecular potential energy diagrams"
            ],
            immediateNextSteps: [
                "Derive Graham's law from first principles: at constant temperature, mean kinetic energy is equal for all gases. ½m₁v₁² = ½m₂v₂² → v₁/v₂ = √(m₂/m₁) → rate₁/rate₂ = √(M₂/M₁). Carry out this derivation without reference — understanding the derivation makes the law unforgettable.",
                "Investigate the van der Waals equation as a correction to ideal gas behaviour: (p + a/V²)(V − b) = nRT. Interpret 'a/V²' as the pressure correction for intermolecular attraction and 'b' as the volume correction for finite particle size. Apply qualitatively to explain why real gas pressure is lower than ideal at high density.",
                "Connect to thermodynamics: the latent heat of vaporisation equals the increase in enthalpy when intermolecular potential energy increases to zero (full separation) at constant temperature. This connects Q = mL to the potential energy well diagram for intermolecular forces — bridging particle theory and thermodynamics.",
                "Apply the ideal gas equation pV = nRT to connect the gas laws to molar quantities. Verify that at STP (0°C, 101 kPa), 1 mol of an ideal gas occupies 22.4 L — a fundamental constant of chemistry that emerges directly from the gas laws."
            ],
            misconceptionsToAddress: [
                "All gases behave identically under all conditions → real gases deviate from ideal behaviour at high pressure and low temperature where intermolecular forces and particle volume become significant",
                "The gas laws apply to any process → the gas laws apply strictly to fixed masses of ideal gas; phase changes and chemical reactions require different treatment"
            ]
        }
    }
},


kinematicsThermodynamics: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about rate factors, formulae, conditions, definitions, and sign conventions without requiring explanation of why they are true.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot recall ΔG = ΔH − TΔS or the form of the rate equation, they cannot access higher-order questions.",
            verbs: ["State", "Write", "List", "Define", "Give", "Identify", "Name"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'Kc increases when temperature is raised for an endothermic reaction' is remember-level. Explaining why requires understanding of Le Chatelier's principle and is understand-level.",
            examples: {
                reactionRates:     "State four factors that affect the rate of a chemical reaction. Define activation energy. Write the general form of the rate equation for a reaction between A and B.",
                activationEnergy:  "State what is meant by the term 'activation energy'. Describe the key features of a Maxwell–Boltzmann distribution curve. State how a catalyst affects Eₐ and ΔH.",
                equilibrium:       "State Le Chatelier's principle. Write the Kc expression for N₂ + 3H₂ ⇌ 2NH₃. State what happens to K when temperature is raised for an exothermic reaction.",
                enthalpyEntropy:   "Define standard enthalpy of formation. State Hess's law. Give the units of entropy and of Gibbs free energy. Write the equation relating ΔG, ΔH, and ΔS."
            }
        },

        understand: {
            description: "Explain the chemical reasoning behind observations — connect molecular behaviour to measurable rate changes, mechanism to equilibrium position, and entropy to spontaneity.",
            cognitiveDemand: "The student must supply a causal link. 'Increasing temperature increases rate' is remember. 'Increasing temperature shifts the Maxwell–Boltzmann distribution to higher energies, increasing the fraction of molecules with energy ≥ Eₐ, so more collisions per second are successful' is understand.",
            verbs: ["Explain", "Justify", "Describe", "Contrast", "Interpret", "Account for"],
            whatDistinguishesThisLevel: "Understand requires the mechanism or reason. Stating that Kc decreases when temperature rises for an exothermic reaction is remember. Explaining that raising T shifts the equilibrium in the endothermic (reverse) direction by Le Chatelier's principle, so product concentrations fall relative to reactant concentrations, decreasing the value of the Kc numerator relative to the denominator — this is understand.",
            examples: {
                reactionRates:     "Explain why the rate of reaction between marble chips and HCl increases when the chips are crushed into powder. Reference collision frequency and the collision theory criteria.",
                activationEnergy:  "Explain why a catalyst increases reaction rate without changing ΔH or the equilibrium position. Your answer must reference the Maxwell–Boltzmann distribution and activation energy.",
                equilibrium:       "Explain why increasing pressure increases the yield of NH₃ in the Haber process. Reference moles of gaseous species on each side and Le Chatelier's principle.",
                enthalpyEntropy:   "Explain why the decomposition of CaCO₃ is non-spontaneous at room temperature but spontaneous above ~840°C, using the equation ΔG = ΔH − TΔS and the sign of each term."
            }
        },

        apply: {
            description: "Use rate equations, Hess's law cycles, Kc expressions, and ΔG calculations to solve unfamiliar numerical and procedural problems.",
            cognitiveDemand: "Procedure execution in a new context. A common failure: setting up the Hess cycle correctly but getting the sign wrong for the reversed equation.",
            verbs: ["Calculate", "Determine", "Write", "Apply", "Predict", "Use", "Draw"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Determine the rate equation and value of k from three sets of initial rate data' requires selecting the correct pairs of experiments, calculating concentration ratios and rate ratios, solving for orders, substituting to find k, and deriving units — output that cannot be produced by memorising a definition.",
            examples: {
                reactionRates:     "From the following initial rate data [table provided], determine the order with respect to each reactant, write the rate equation, and calculate k with units.",
                activationEnergy:  "Draw an energy profile diagram for an exothermic reaction with Eₐ(forward) = 60 kJ/mol and ΔH = −40 kJ/mol. Calculate Eₐ(reverse) and add a dashed line showing the effect of a catalyst reducing Eₐ(forward) by 25 kJ/mol.",
                equilibrium:       "At equilibrium, [H₂] = 0.40, [I₂] = 0.40, [HI] = 2.4 mol dm⁻³ for H₂ + I₂ ⇌ 2HI. Calculate Kc and determine its units.",
                enthalpyEntropy:   "Calculate ΔG° at 500 K for a reaction where ΔH° = −120 kJ/mol and ΔS° = −250 J K⁻¹ mol⁻¹. State whether the reaction is spontaneous and determine the crossover temperature."
            }
        },

        analyze: {
            description: "Interpret experimental data, rate graphs, or thermodynamic data to draw conclusions not directly given. Deduce rate orders from concentration–time graphs, identify reaction types from ΔH and ΔS combinations, or infer equilibrium shifts from data.",
            cognitiveDemand: "Decomposition and inference. The student derives a conclusion from evidence. A key marker: the answer requires reasoning from multiple pieces of data, not recall of a single fact.",
            verbs: ["Deduce", "Interpret", "Analyse", "Determine", "Identify", "Classify", "Infer"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. Given a concentration–time graph showing a constant half-life, the student must deduce the reaction is first order, calculate k from t½ = 0.693/k, and predict the concentration at a given time — not merely state the definition of first order.",
            examples: {
                reactionRates:     "A concentration–time graph for reactant A shows that [A] falls from 0.80 to 0.40 mol dm⁻³ in 25 s, then from 0.40 to 0.20 mol dm⁻³ in 25 s. Analyse the data to determine the order with respect to A, calculate k, and predict [A] after 100 s.",
                activationEnergy:  "A reaction has rate constants k = 0.015 s⁻¹ at 300 K and k = 0.12 s⁻¹ at 340 K. Analyse this data to determine whether a catalyst has been added (Eₐ unchanged) or temperature alone has changed, by calculating the ratio of rate constants and comparing with the Boltzmann factor prediction.",
                equilibrium:       "The value of Kc for A ⇌ B is 0.25 at 400 K and 2.5 at 600 K. Analyse this data to determine whether the forward reaction is exothermic or endothermic, justifying your reasoning with reference to Le Chatelier's principle.",
                enthalpyEntropy:   "A reaction has ΔH° = +85 kJ/mol and ΔS° = +200 J K⁻¹ mol⁻¹. Analyse the ΔG = ΔH − TΔS expression to: (a) predict spontaneity at 298 K and at 700 K; (b) calculate the crossover temperature; (c) explain the physical meaning of this temperature in terms of enthalpy and entropy drives."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, student calculation, mechanism, or interpretation. The student must state a verdict, identify the criterion, and correct any error.",
            cognitiveDemand: "Judgement with justification. Identifying an error without explaining WHY it is wrong is not evaluate-level. The student must state what is wrong, why it is wrong (citing the relevant principle), and what the correct answer is.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Verify", "Justify"],
            whatDistinguishesThisLevel: "Evaluate requires a standard against which to judge. 'Evaluate the claim that a catalyst increases the equilibrium yield of NH₃ in the Haber process.' The student must: identify the claim as incorrect; state that a catalyst increases rate of attainment of equilibrium but does not change K or equilibrium position; explain that K depends only on temperature; and state what does increase yield (higher pressure, lower temperature).",
            examples: {
                reactionRates:     "A student states: 'The order of reaction with respect to A is 2 because the stoichiometric coefficient of A in the balanced equation is 2.' Evaluate this statement fully — identify the error, state the correct principle, and describe how the order should actually be determined.",
                activationEnergy:  "Evaluate the following Maxwell–Boltzmann diagram description: 'At higher temperature, the curve shifts upward and becomes taller, showing more molecules have energy above Eₐ.' Identify every error in this description and provide a corrected description.",
                equilibrium:       "Evaluate the claim: 'Adding an iron catalyst to the Haber process increases the yield of NH₃ at equilibrium because it speeds up the forward reaction more than the reverse reaction.' Identify any errors and justify the correct account of catalyst action on equilibrium.",
                enthalpyEntropy:   "A student calculates ΔG = −120 − (298 × 250) = −74,620 kJ/mol for a reaction with ΔH = −120 kJ/mol and ΔS° = 250 J K⁻¹ mol⁻¹. Evaluate this calculation — identify the error, state the correct procedure, and calculate the correct value of ΔG."
            }
        },

        create: {
            description: "Generate an original output: design an experiment to determine rate orders, propose a synthesis route using thermodynamic feasibility, construct a Hess's law cycle for an unmeasurable reaction, or formulate a multi-step argument from first principles.",
            cognitiveDemand: "Synthesis and original production. The student integrates multiple concepts to produce something that cannot be answered by recalling any single fact or procedure.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Plan", "Formulate", "Develop"],
            whatDistinguishesThisLevel: "Create requires integration. 'Design an experiment to determine whether the decomposition of H₂O₂ is first or second order' requires selecting an appropriate measurement technique, planning time-concentration data collection, describing how to plot the data to distinguish orders, and predicting what each graph shape would indicate — no single recalled procedure produces this answer.",
            examples: {
                reactionRates:     "Design a complete experimental method to determine the rate equation for the reaction between sodium thiosulfate and hydrochloric acid. Include: how you will measure rate; how you will vary concentration systematically; how you will calculate orders; how you will determine k; and one control variable and why it is necessary.",
                activationEnergy:  "Propose a method to determine the activation energy of the decomposition of hydrogen peroxide using the Arrhenius equation (k = Ae^(−Eₐ/RT)). Include: what measurements you will make; how you will manipulate the Arrhenius equation to produce a linear graph (ln k vs 1/T); what the slope of this graph represents; and how you will calculate Eₐ from the slope.",
                equilibrium:       "Construct a fully annotated argument demonstrating that the industrial Haber process conditions (450°C, 200 atm, Fe catalyst) represent an optimised compromise between kinetics and thermodynamics. Your argument must address: (a) why 25°C would be thermodynamically superior but commercially impossible; (b) why 900°C would be kinetically faster but thermodynamically unacceptable; (c) why 1000 atm would increase yield but is rejected on engineering grounds; (d) the role of the catalyst in the compromise.",
                enthalpyEntropy:   "Formulate a logical argument from first principles — using ΔG = ΔH − TΔS and ΔG° = −RT ln K — that explains why a highly exothermic reaction with a small negative ΔS can have a lower equilibrium constant at high temperature than at low temperature, and connect this to the Le Chatelier prediction for an exothermic equilibrium when temperature is raised."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Confuses rate and equilibrium — believes a faster reaction always gives a higher yield",
                "States that reaction orders come from stoichiometric coefficients in the balanced equation",
                "Cannot draw a Maxwell–Boltzmann curve from memory; attempts to draw a symmetrical bell curve",
                "Confuses ΔH (enthalpy change, kJ/mol) with Eₐ (activation energy) — treats them as interchangeable",
                "Believes increasing temperature always shifts equilibrium to the right",
                "Forgets to convert ΔS from J to kJ when calculating ΔG"
            ],
            immediateNextSteps: [
                "Firmly separate kinetics and thermodynamics in your notes: write 'Kinetics = HOW FAST' and 'Thermodynamics = HOW FAR AND WHETHER' in large text at the top of each section. Never conflate rate with yield.",
                "Memorise: 'Orders are ALWAYS experimental — NEVER from stoichiometry.' Write this on every rate equation question before starting.",
                "Draw the Maxwell–Boltzmann curve daily from memory for one week: starts at zero, rises to a peak (Emp), falls asymptotically without touching the x-axis. Add Eₐ marker and shade the area to its right. Label: most probable energy, mean energy, Eₐ, shaded area = fraction reacting.",
                "Build a unit-checking routine: before any ΔG = ΔH − TΔS calculation, write the units of each term and verify they match. Convert ΔS to kJ K⁻¹ mol⁻¹ before substituting."
            ],
            misconceptionsToAddress: [
                "Orders from stoichiometry → always experimental",
                "Higher temperature always increases yield → depends on whether reaction is exo- or endothermic",
                "ΔH and Eₐ are the same → ΔH is the energy difference between reactants and products; Eₐ is the energy barrier between reactants and transition state; they are entirely independent quantities"
            ]
        },

        developing: {
            characteristics: [
                "Correctly identifies rate orders from initial rate data but makes errors when concentration ratios are not simple integers",
                "Draws the Maxwell–Boltzmann curve reasonably but confuses how temperature and catalyst change the diagram",
                "Applies Le Chatelier's principle correctly for concentration and pressure changes but incorrectly states that all changes to the system change Kc",
                "Correctly writes Hess's law cycles for simple cases but makes sign errors when reversing equations",
                "Sets up ΔG = ΔH − TΔS correctly but evaluates spontaneity incorrectly for the ΔH < 0, ΔS < 0 case"
            ],
            immediateNextSteps: [
                "For Maxwell–Boltzmann diagrams: practise drawing both effects (temperature and catalyst) on the SAME base diagram. Temperature: draw a new, broader, lower-peaked curve with the same Eₐ line and shade the larger area. Catalyst: draw the SAME curve with a new, lower Eₐ line and shade the larger area. Never mix these — one changes the curve; the other changes the threshold.",
                "For Kc and Le Chatelier: write at the top of every equilibrium question: 'ONLY TEMPERATURE CHANGES Kc.' Memorise this as an absolute rule. Every other change (concentration, pressure, catalyst) shifts position of equilibrium without altering K.",
                "For ΔH < 0, ΔS < 0: plug in numbers. At 298 K: ΔG = ΔH − (298 × ΔS). With both negative, TΔS is positive — so ΔG = (negative) − (positive). Compare magnitudes to determine sign. At high T, the TΔS term grows, potentially making ΔG positive. Always calculate; never assume.",
                "For Hess's law sign errors: when reversing an equation, reverse the sign of ΔH. When multiplying an equation by a factor, multiply ΔH by the same factor. Write these rules explicitly before beginning every Hess's law calculation."
            ],
            misconceptionsToAddress: [
                "Any change to an equilibrium system changes Kc → only temperature changes K",
                "Temperature changes Maxwell–Boltzmann distribution and Eₐ simultaneously → temperature shifts the distribution only; Eₐ is a fixed property of the reaction (catalyst changes Eₐ, not temperature)",
                "ΔH < 0 and ΔS < 0 always gives ΔG < 0 → only at temperatures where |ΔH| > T|ΔS|"
            ]
        },

        proficient: {
            characteristics: [
                "Determines rate equations from initial rate data fluently, including non-integer ratios requiring logarithmic reasoning",
                "Draws and interprets Maxwell–Boltzmann diagrams correctly for temperature and catalyst effects, and annotates energy profile diagrams with all required labels",
                "Writes Kc expressions correctly, calculates K values, and predicts equilibrium shifts for all three perturbation types",
                "Calculates ΔG correctly with appropriate unit conversion, determines spontaneity for all four ΔH/ΔS combinations, and calculates crossover temperatures",
                "Applies Hess's law fluently using both formation and combustion cycles"
            ],
            immediateNextSteps: [
                "Extend to the Arrhenius equation: practice plotting ln k vs 1/T to determine Eₐ from slope = −Eₐ/R. Connect this quantitatively to the Boltzmann factor argument.",
                "Connect ΔG° = −RT ln K: given ΔG° values, calculate K and interpret the magnitude. Given K values, calculate ΔG° and interpret spontaneity. This bridges thermodynamics and equilibrium quantitatively.",
                "Work through integrated rate law problems: for first-order reactions, practise using [A] = [A]₀e^(−kt) to calculate concentration at time t. For second-order, practise 1/[A] = 1/[A]₀ + kt. Plot both to confirm linearity.",
                "Apply thermodynamic reasoning to industrial processes beyond Haber: the Contact process (SO₃ synthesis), the synthesis of ethanol, and the methanol synthesis process all involve the same kinetic-thermodynamic compromise. Analyse conditions for each."
            ],
            misconceptionsToAddress: [
                "First-order half-life depends on initial concentration → for first order only, t½ = 0.693/k is constant regardless of concentration",
                "Bond enthalpy calculations give exact ΔH values → they give approximate values because bond enthalpies are averages; formation/combustion cycles give exact values for specific compounds"
            ]
        },

        expert: {
            characteristics: [
                "Derives rate laws for multi-step mechanisms using the rate-determining step",
                "Applies the Arrhenius equation quantitatively to calculate Eₐ from rate constant data at two temperatures",
                "Uses ΔG° = −RT ln K to calculate equilibrium constants from thermodynamic data and vice versa",
                "Evaluates industrial process conditions using integrated kinetic and thermodynamic arguments",
                "Distinguishes kinetic and thermodynamic control of reaction outcomes"
            ],
            immediateNextSteps: [
                "Investigate the pre-exponential factor A in the Arrhenius equation — it encodes collision frequency and steric factor. Connect this to the orientation criterion in collision theory and explain why A varies between reactions.",
                "Explore coupled equilibria: in systems where two equilibria share a common species, a shift in one equilibrium perturbs the other. Apply this to the carbonate buffer system and to polyprotic acid equilibria in biochemistry.",
                "Derive the relationship between Kc and Kp (Kp = Kc(RT)^Δn) from first principles using the ideal gas law. Apply this to calculate Kp for the Haber process from Kc, and verify that Kp and Kc differ significantly when Δn ≠ 0.",
                "Connect the sign of ΔS_surroundings (= −ΔH_system/T) to spontaneity: the second law ΔS_universe > 0 for spontaneous processes is identical to ΔG < 0 — derive this equivalence mathematically and appreciate that ΔG is simply a convenient restatement of the second law in terms of system properties only."
            ],
            misconceptionsToAddress: [
                "ΔG < 0 means the reaction is fast → ΔG determines thermodynamic feasibility only; rate is controlled by Eₐ independently",
                "Equilibrium constants are dimensionless → technically correct in the thermodynamic definition (based on activities), but at A-Level Kc and Kp carry units derived from concentration/pressure terms — be consistent with the convention used by the examining board"
            ]
        }
    }
},

redoxChemistry: {
    knowledgeLevel: {

        remember: {
            description: "Recall stored facts about redox definitions, oxidation state rules, half-equations, E° values, and titration conditions from memory without requiring explanation.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No causal reasoning required. If a student cannot do this, they cannot access any higher level.",
            verbs: ["State", "Write", "List", "Define", "Give", "Identify", "Name"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts and no explanation. 'Oxidation is loss of electrons' is remember-level. 'Oxidation is loss of electrons because...' crosses into understand.",
            examples: {
                redoxDefinitions:   "Define oxidation and reduction in terms of electron transfer. State what is meant by an oxidising agent and a reducing agent.",
                oxidationStates:    "State the six rules for assigning oxidation states in order of priority. Give the oxidation state of Mn in KMnO₄.",
                redoxEquations:     "Write the balanced half-equation for the reduction of MnO₄⁻ to Mn²⁺ in acidic solution. State the conditions used to acidify KMnO₄ in a titration and give one reason why HCl cannot be used.",
                electrochemistry:   "State what is meant by standard electrode potential. Define the standard hydrogen electrode, including all standard conditions."
            }
        },

        understand: {
            description: "Explain the chemical reasons behind redox observations — connect oxidation state changes to electron transfer, E° values to driving force, and disproportionation conditions to mechanism.",
            cognitiveDemand: "The student must supply a causal link. 'KMnO₄ is reduced in the titration' is remember. 'KMnO₄ acts as the oxidising agent — it accepts 5 electrons per MnO₄⁻ ion as manganese is reduced from +7 to +2, which is why the solution decolourises from purple to colourless at the endpoint' is understand.",
            verbs: ["Explain", "Justify", "Describe", "Contrast", "Interpret", "Connect"],
            whatDistinguishesThisLevel: "Understand requires the reason. Stating E°cell > 0 means feasible is remember. Explaining that a positive E°cell means the reaction releases free energy (ΔG = −nFE°cell < 0) and the electron transfer is thermodynamically driven from the lower to the higher E° half-cell is understand.",
            examples: {
                redoxDefinitions:   "Explain why the oxidising agent in a redox reaction is always reduced. Use the electron transfer definition to justify this, and give a specific example.",
                oxidationStates:    "Explain why the oxidation state of oxygen is −1 in H₂O₂ but −2 in H₂O. Reference the rule hierarchy and the peroxide exception.",
                redoxEquations:     "Explain what is meant by disproportionation and why it requires the same element in the same oxidation state to undergo both oxidation and reduction. Give one example from the chlorine reactions.",
                electrochemistry:   "Explain why a positive E°cell indicates a thermodynamically feasible reaction but does not guarantee a reaction will occur at an observable rate. Distinguish between thermodynamic and kinetic control."
            }
        },

        apply: {
            description: "Use oxidation state rules, half-equation balancing methods, the E°cell formula, and titration stoichiometry to solve novel problems.",
            cognitiveDemand: "Procedure execution in a new context. The student selects the right approach and executes it correctly. Common failure points: wrong electron balance in half-equations; wrong order of subtraction for E°cell; using incorrect molar ratio in titration calculations.",
            verbs: ["Calculate", "Write", "Balance", "Assign", "Predict", "Combine", "Determine"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Write and balance the half-equation for Cr₂O₇²⁻ → Cr³⁺ in acid' requires assigning oxidation states, balancing atoms in the correct order, and balancing charge — it cannot be produced by memorising a definition.",
            examples: {
                redoxDefinitions:   "In the reaction: 2H₂O₂ → 2H₂O + O₂, assign oxidation states to all species, identify what is oxidised and what is reduced, and name the oxidising and reducing agents.",
                oxidationStates:    "Assign oxidation states to all atoms in: (a) Na₂Cr₂O₇; (b) ClO₃⁻; (c) Fe₃O₄ (contains both Fe²⁺ and Fe³⁺ — state the average O.S. and explain why). Identify which compound contains the most oxidised transition metal.",
                redoxEquations:     "Write the balanced half-equation for the oxidation of C₂O₄²⁻ (oxalate) to CO₂ in acidic solution. Combine with the MnO₄⁻ half-equation to give the overall balanced ionic equation.",
                electrochemistry:   "Given E°(Cl₂/Cl⁻) = +1.36 V and E°(Br₂/Br⁻) = +1.07 V, calculate E°cell for the reaction of Cl₂ with Br⁻. Write the balanced overall ionic equation and state whether the reaction is feasible."
            }
        },

        analyze: {
            description: "Break down experimental data, E° tables, titration results, or reaction equations to draw conclusions not directly stated. Identify oxidation state patterns, deduce the identity of unknown species from redox evidence, or determine which species acts as oxidant/reductant from data.",
            cognitiveDemand: "Decomposition and inference. The student derives a conclusion from evidence. Key marker: the conclusion was not given and requires reasoning from provided data.",
            verbs: ["Deduce", "Classify", "Analyse", "Determine", "Distinguish", "Interpret", "Identify"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given that compound X decolourises acidified KMnO₄ and reacts 1:5 in molar ratio, determine the number of electrons transferred per molecule of X' requires the student to reason from two pieces of evidence — not recall a single fact.",
            examples: {
                redoxDefinitions:   "A student mixes solutions of Fe²⁺ and Ce⁴⁺. The solution immediately turns from yellow to pale coloured. Given E°(Ce⁴⁺/Ce³⁺) = +1.44 V and E°(Fe³⁺/Fe²⁺) = +0.77 V, analyse what has happened: identify which species is oxidised and reduced, calculate E°cell, and write the overall ionic equation.",
                oxidationStates:    "The oxidation states of nitrogen in five compounds are: NH₃ (−3), N₂H₄ (−2), N₂ (0), NO (+2), HNO₃ (+5). Analyse this data to identify: (a) the range of nitrogen's oxidation states; (b) which compound could act as both an oxidising and reducing agent; (c) which is the most powerful reducing agent based on O.S. alone.",
                redoxEquations:     "25.0 cm³ of an unknown iron(II) solution required 18.40 cm³ of 0.0200 mol dm⁻³ KMnO₄ for complete oxidation. Analyse the data to find the concentration of Fe²⁺ and, given that the iron came from dissolving an iron ore sample of 0.500 g in acid, calculate the percentage by mass of iron in the ore.",
                electrochemistry:   "The following E° values are given: Sn⁴⁺/Sn²⁺ = +0.15 V; Fe³⁺/Fe²⁺ = +0.77 V; I₂/I⁻ = +0.54 V. Analyse which species from the list could oxidise Sn²⁺ to Sn⁴⁺ and which could not. For each case, calculate E°cell and explain the conclusion."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the adequacy of a half-equation, the correctness of a feasibility prediction, or the reliability of experimental data. State a verdict, the criterion, and the correction.",
            cognitiveDemand: "Judgement with justification. Simply identifying an error is not evaluate-level. The student must state WHAT is wrong, WHY it is wrong by reference to a principle, and WHAT the correct response is.",
            verbs: ["Evaluate", "Critique", "Assess", "Justify", "Appraise", "Verify", "Judge"],
            whatDistinguishesThisLevel: "Evaluate requires a standard of judgement. 'A student calculates E°cell = E°(anode) − E°(cathode). Evaluate.' The student must identify the error in the formula, state the correct formula, recalculate the correct value, and state how this affects the feasibility conclusion.",
            examples: {
                redoxDefinitions:   "Evaluate the claim: 'In the reaction Cl₂ + 2KBr → 2KCl + Br₂, Cl₂ is the reducing agent because it loses its combined state and becomes a product.' Identify the error, state the correct identification, and justify using electron transfer and oxidation state evidence.",
                oxidationStates:    "A student assigns oxidation states in H₂O₂ as H = +1 and O = −2, concluding the compound is normal water. Evaluate this assignment — identify the specific rule the student failed to apply, state the correct oxidation state of O in H₂O₂, and explain what consequence this has for the redox chemistry of H₂O₂.",
                redoxEquations:     "Evaluate the following student half-equation for the reduction of MnO₄⁻ to Mn²⁺: 'MnO₄⁻ + 5e⁻ → Mn²⁺ + 4O²⁻.' Identify all errors — assess whether atoms are balanced, whether charge is balanced, and whether the species are chemically reasonable. Write the correct half-equation.",
                electrochemistry:   "Evaluate the following statement: 'Since E°cell for the reaction of Zn with Cu²⁺ is +1.10 V (positive), this reaction is both thermodynamically feasible and will definitely occur at a measurable rate at room temperature.' Identify which part of this statement is correct and which part is incorrect, and explain the distinction using appropriate chemical principles."
            }
        },

        create: {
            description: "Design an experiment, construct a multi-step argument, derive a mechanism, or plan a synthetic or analytical procedure that integrates multiple redox concepts and cannot be answered by recalling any single fact or rule.",
            cognitiveDemand: "Original production requiring integration. The student assembles concepts from across the topic into a coherent new output.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Plan", "Formulate", "Develop"],
            whatDistinguishesThisLevel: "Create requires integration. 'Design a quantitative method to determine the percentage purity of an iron(II) sulfate sample using KMnO₄ titration' requires the student to: plan the dissolution, choose the acid (H₂SO₄ not HCl), write the balanced equation, plan the titration, derive the calculation, and consider sources of error — no single recalled fact produces this output.",
            examples: {
                redoxDefinitions:   "Propose a series of tests to determine whether an unknown yellow solution contains Fe³⁺, Cr₂O₇²⁻, or I₂. For each test, state the reagent, expected observation for each species, and the chemical basis of each observation. Design the tests in a logical sequence that would provide unambiguous identification.",
                oxidationStates:    "Construct a logical argument, using oxidation state evidence only, that demonstrates the reaction: 3MnO₄²⁻ + 2H₂O → 2MnO₄⁻ + MnO₂ + 4OH⁻ is a disproportionation of manganate(VI). Calculate the oxidation state of Mn in each species, identify which atoms are oxidised and reduced, and verify that the electron transfer is balanced.",
                redoxEquations:     "Design a complete experimental procedure to determine the concentration of SO₂ in a wine sample using iodometric titration. Include: preparation of reagents; the sequence of additions (and why the starch indicator is added last); the balanced equation; the calculation; and two potential sources of error with explanations of how to minimise them.",
                electrochemistry:   "Formulate a complete argument — using E° data, cell notation, and electrode reactions — for why a Daniell cell (Zn/Cu) spontaneously produces 1.10 V, identifying the cathode and anode, writing both half-equations, drawing the cell diagram with salt bridge, and explaining the role of the salt bridge in maintaining electrical neutrality during operation."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Defines oxidation as 'gaining oxygen' and reduction as 'losing oxygen' — does not use the electron transfer definition",
                "Cannot assign oxidation states beyond simple compounds; fails on polyatomic ions or peroxides",
                "Writes half-equations without balancing charge; uses H atoms rather than H⁺ to balance hydrogen",
                "Confuses the oxidising agent with the species that is oxidised",
                "Cannot calculate E°cell; applies E° data as a ranking without a formula"
            ],
            immediateNextSteps: [
                "Replace the oxygen definition of oxidation/reduction with the electron definition permanently. Write 'OIL RIG' on every page of redox notes until the electron transfer definition is automatic. Never use the oxygen definition in an equation or explanation.",
                "Practise oxidation state assignment on 20 compounds using the six rules in strict priority order. Cover the answer and reassign for each. Do not attempt half-equations until oxidation state assignment is automatic for all common species including peroxides, polyatomic ions, and transition metals.",
                "For the oxidising/reducing agent confusion: write the following statement and repeat it: 'The oxidising agent IS reduced. The reducing agent IS oxidised.' Make a card with 'What does the oxidising agent DO? It gets reduced.' Apply this to three examples before moving on.",
                "Build a conditions table for redox titrations before attempting any calculation: KMnO₄ — acid used, colour change, endpoint, self-indicating or not. Fill every cell and test without notes."
            ],
            misconceptionsToAddress: [
                "Oxidation = gaining oxygen → always use the electron transfer definition; the oxygen definition is a subset and is insufficient for A-Level",
                "Oxidising agent = species that is oxidised → the oxidising agent IS reduced; it causes oxidation of the other species by accepting electrons",
                "Oxygen in all compounds = −2 → peroxide exception (−1) must be memorised; it applies in H₂O₂, Na₂O₂, BaO₂, and all peroxide species"
            ]
        },

        developing: {
            characteristics: [
                "Uses the electron transfer definition of redox correctly but confuses which species gains and which loses electrons in a complex equation",
                "Assigns oxidation states correctly for common species but makes errors with unusual species (e.g. Fe₃O₄, S₄O₆²⁻, ClO₃⁻)",
                "Can write simple half-equations but makes charge-balance errors; frequently omits H⁺ or uses wrong number of electrons",
                "Applies E°cell = E°(cathode) − E°(anode) but sometimes reverses cathode and anode identification",
                "Knows KMnO₄ is self-indicating but cannot explain the mechanism; uses HCl to acidify without recognising the interference problem"
            ],
            immediateNextSteps: [
                "For half-equation balancing: follow the exact five-step sequence every time (main element → O with H₂O → H with H⁺ → charge with e⁻ → verify). Never skip steps. Verify charge on BOTH sides independently — do not check by difference.",
                "For E°cell: always write 'cathode = higher E° = reduction' and 'anode = lower E° = oxidation' before applying the formula. Underline which half-reaction has the higher E° before calculating. Reversing cathode/anode is the single most common error in this section.",
                "For titration acid choice: practise the reasoning — 'HCl: Cl⁻ is oxidised by MnO₄⁻ → interference. HNO₃: is itself an oxidising agent → interference. H₂SO₄: neither Cl⁻ nor the acid reacts with MnO₄⁻ → no interference. Always H₂SO₄.' Make this a reflex.",
                "For disproportionation: always write the starting oxidation state of the element, then the two final oxidation states. If both changes originate from the same element in the same species, it is disproportionation. If they originate from two different compounds, it is not."
            ],
            misconceptionsToAddress: [
                "Half-equation charge balance using wrong number of e⁻ → always verify by summing all charges independently on each side, not by calculating the difference",
                "E°cell = E°(anode) − E°(cathode) → correct formula is always E°(cathode) − E°(anode); cathode = higher E° = site of reduction",
                "Starch added at the start of I₂/thiosulfate titration → add starch only when the solution is pale yellow (near endpoint); excess I₂ binds irreversibly to starch if added too early"
            ]
        },

        proficient: {
            characteristics: [
                "Assigns oxidation states correctly for all common species including Fe₃O₄, peroxides, polyatomic oxyanions, and mixed oxidation state compounds",
                "Balances half-equations correctly in acid including for multi-atom species (Cr₂O₇²⁻, MnO₄⁻, C₂O₄²⁻)",
                "Combines half-equations correctly, scaling for electron balance, and verifies the overall equation by atom and charge count",
                "Calculates E°cell correctly, predicts feasibility, and identifies cathode and anode from E° values",
                "Performs redox titration calculations including the 1:5 MnO₄⁻/Fe²⁺ ratio without prompting",
                "Identifies disproportionation reactions and writes the supporting oxidation state evidence"
            ],
            immediateNextSteps: [
                "Extend to non-standard conditions: consider qualitatively how increasing H⁺ concentration affects the E° of MnO₄⁻/Mn²⁺ (Le Chatelier's principle — more H⁺ shifts equilibrium right, increases reduction tendency, increases E°). Apply this reasoning to predict how pH change affects cell potential.",
                "Work through the electrochemical extraction of metals: write the half-equations for aluminium electrolysis (Al³⁺ + 3e⁻ → Al at cathode; 2O²⁻ → O₂ + 4e⁻ at anode) and explain why cryolite is used (lowers melting point of Al₂O₃ to make electrolysis practical).",
                "Practise indirect iodometric methods: set up the two-stage calculation (oxidising agent → I₂ → thiosulfate titration) for CuSO₄ determination. The chain of molar ratios (Cu²⁺ : I₂ : S₂O₃²⁻ = 2:1:2) requires careful stoichiometric tracking.",
                "Connect redox to thermodynamics: ΔG° = −nFE°cell. Calculate ΔG° for the Daniell cell and the MnO₄⁻/Fe²⁺ reaction. Interpret the sign and magnitude of ΔG° in terms of spontaneity and energy release."
            ],
            misconceptionsToAddress: [
                "E°cell > 0 guarantees observable reaction → thermodynamic feasibility and kinetic accessibility are independent; many reactions with positive E°cell are kinetically inert at room temperature",
                "Molar ratio in titration always 1:1 → the ratio comes from the balanced equation; for MnO₄⁻/Fe²⁺ it is 1:5; for I₂/S₂O₃²⁻ it is 1:2; always derive from the equation"
            ]
        },

        expert: {
            characteristics: [
                "Derives E°cell from ΔG° using ΔG° = −nFE°cell and connects to equilibrium constant via ΔG° = −RTlnK",
                "Applies the Nernst equation qualitatively to predict how concentration change affects cell potential",
                "Constructs multi-step synthetic arguments integrating oxidation states, half-equations, E°, and stoichiometry",
                "Evaluates the reliability of redox titration results, identifying sources of systematic and random error",
                "Applies Hückel's rule-equivalent thinking to aromatic redox (ferrocene, quinones) — connects organic and inorganic redox"
            ],
            immediateNextSteps: [
                "Derive the relationship ΔG° = −nFE°cell from first principles using work = charge × potential difference. Apply to calculate the maximum electrical work output of a hydrogen fuel cell (E°cell = +1.23 V; n = 2; calculate ΔG° per mole of H₂O formed) and compare to the enthalpy of combustion.",
                "Explore the Frost diagram (oxidation state stability diagram) for nitrogen and chlorine — these diagrams plot oxidation state against free energy and immediately show which species are thermodynamically stable, which will disproportionate, and which are strong oxidants or reductants.",
                "Connect redox chemistry to biological electron transport: in oxidative phosphorylation, electrons are transferred from NADH (E° ≈ −0.32 V) along a chain of carriers to O₂ (E° = +0.82 V). Calculate E°cell for the full NADH/O₂ couple and derive the maximum number of ATP molecules synthesisable per NADH (approximately 2.5 under physiological conditions).",
                "Critically evaluate the limitations of standard electrode potentials as predictors: temperature effects, concentration effects, overpotential (the extra voltage required in practice, especially for O₂ evolution), and the role of activation energy in electrolysis. These concepts bridge A-Level electrochemistry to industrial process design."
            ],
            misconceptionsToAddress: [
                "ΔG° and E°cell are alternative measures of the same quantity — ΔG° = −nFE°cell connects them quantitatively; a student who knows only E°cell cannot calculate ΔG° without this equation",
                "Overpotential: in practice, electrolysis cells require a voltage significantly higher than E°cell to drive the reaction at a useful rate; this 'overpotential' is a kinetic phenomenon absent from equilibrium E° considerations"
            ]
        }
    }
},

chemicalBonding: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about bond types, structures, shapes, and properties from memory without requiring explanation of the underlying reasons.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot recall these facts, they cannot access any higher-level question on this topic.",
            verbs: ["State", "List", "Name", "Identify", "Write", "Give", "Define"],
            whatDistinguishesThisLevel: "A remember-level response contains a fact with no causal explanation. 'Water has a bent shape with a bond angle of 104.5°' is remember-level. Adding 'because two lone pairs on O exert greater repulsion than bonding pairs...' crosses into understand.",
            examples: {
                ionicBonding:         "State two properties of ionic compounds. Define the term 'lattice enthalpy'. Write the dot-cross diagram for the formation of calcium chloride.",
                covalentBonding:      "State the bond angles in methane, ammonia, and water. Define electronegativity. Name the type of bond present in HCl and in H₂O.",
                metallicBonding:      "State the metallic bonding model in one sentence. List three physical properties of metals that are explained by metallic bonding.",
                intermolecularForces: "Name the three types of intermolecular force in order of increasing strength. State the condition required for hydrogen bonding to occur."
            }
        },

        understand: {
            description: "Explain the chemical reasons behind observed properties, connecting bonding model to physical behaviour, molecular shape to polarity, and intermolecular force type to boiling point.",
            cognitiveDemand: "Causal links required. Stating 'water has a high boiling point because of hydrogen bonding' is remember-level. Explaining WHY water forms hydrogen bonds and how each bond's energy contributes to boiling point is understand-level.",
            verbs: ["Explain", "Justify", "Describe", "Account for", "Contrast", "Connect", "Interpret"],
            whatDistinguishesThisLevel: "Understand requires the mechanism or reason behind a fact. 'Ionic compounds conduct when molten but not solid' is remember. 'In the solid state, ions are fixed in lattice positions and cannot migrate; melting releases ions to move freely under an applied voltage' is understand.",
            examples: {
                ionicBonding:         "Explain why magnesium oxide has a higher melting point than sodium chloride, using lattice structure and ion charge/size arguments.",
                covalentBonding:      "Explain why BF₃ is a non-polar molecule despite containing polar B–F bonds. Your answer must address molecular geometry and dipole vector cancellation.",
                metallicBonding:      "Explain why metals are malleable but ionic crystals are brittle. Your answer must reference the nature of bonding (directional vs non-directional) and what happens at the atomic level when layers are displaced.",
                intermolecularForces: "Explain why the boiling point of H₂O (100°C) is much higher than that of H₂S (−60°C), despite H₂S having a larger molar mass. Your answer must identify the specific intermolecular force responsible and explain why H₂O can form it while H₂S cannot."
            }
        },

        apply: {
            description: "Use VSEPR rules, bond polarity principles, intermolecular force analysis, or structure-property relationships to solve novel problems not directly recalled from memory.",
            cognitiveDemand: "Procedure execution in new context. Common failure: applying VSEPR correctly to find shape but then incorrectly assessing polarity by ignoring dipole geometry.",
            verbs: ["Predict", "Draw", "Determine", "Apply", "Name", "Calculate", "Select"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Predict the shape and bond angle of XeF₄' cannot be answered by recall alone — the student must apply VSEPR to 6 electron pairs (4 bonding + 2 lone), recognise the square planar shape and 90° angles, and correctly place lone pairs opposite each other.",
            examples: {
                ionicBonding:         "Predict the formula of the ionic compound formed between aluminium and sulfide ions. Draw the dot-cross diagram, showing all electrons and correct charges. Explain why the ratio of ions is 2:3.",
                covalentBonding:      "For each of the following: (i) PCl₃; (ii) SF₄; (iii) XeF₂ — predict the number of bonding and lone pairs on the central atom, the molecular shape, and the approximate bond angles. Show your VSEPR reasoning for each.",
                metallicBonding:      "Place the following metals in order of increasing melting point and justify your order using the metallic bonding model: Na, Mg, Al, K. Your answer must reference the number of delocalised electrons per atom and the charge density of the cation for each metal.",
                intermolecularForces: "For each substance — (i) ethanol (C₂H₅OH); (ii) dimethyl ether (CH₃OCH₃); (iii) propane (C₃H₈) — identify all intermolecular forces present and predict the order of boiling points. Justify your ranking."
            }
        },

        analyze: {
            description: "Decompose structural data, bonding evidence, or experimental observations to reach conclusions that were not directly provided. Deduce structure from property data or identify the structural feature responsible for an observed property.",
            cognitiveDemand: "Decomposition and inference from evidence. A key marker: the conclusion was not given and requires reasoning from provided data.",
            verbs: ["Deduce", "Identify", "Determine", "Distinguish", "Analyse", "Classify", "Interpret"],
            whatDistinguishesThisLevel: "Analyse requires working from evidence. 'Compound X has a high melting point, conducts electricity when molten but not solid, and is insoluble in hexane. Deduce the type of bonding and structure' — the student must work from three properties simultaneously to eliminate alternatives and confirm ionic lattice.",
            examples: {
                ionicBonding:         "Compound A: melting point 801°C, conducts when molten, dissolves in water. Compound B: melting point 1275°C, conducts when molten, dissolves in water but releases heat. Analyse the data to identify the structure type of each, and explain why compound B has a higher melting point than compound A using ionic charge and radius arguments. (A = NaCl; B = MgO — do not reveal this to the student.)",
                covalentBonding:      "The bond angles in NF₃ (102.5°) are smaller than in NH₃ (107°), despite both being trigonal pyramidal. Analyse this difference — identify the structural feature responsible and explain why F substituents produce a smaller angle than H substituents on N.",
                metallicBonding:      "Iron (Fe) and copper (Cu) are both transition metals used in construction and electronics respectively. Fe melts at 1538°C; Cu melts at 1085°C. Analyse this difference using metallic bonding — consider the number of electrons available for delocalisation and the relative charge densities of Fe²⁺/Fe³⁺ and Cu⁺/Cu²⁺.",
                intermolecularForces: "The boiling points of the hydrogen halides are: HF 19.5°C, HCl −85°C, HBr −67°C, HI −35°C. Analyse the trend. Identify which compound deviates from the expected pattern and explain fully why, identifying the specific intermolecular force responsible for the anomaly."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the correctness of a claim, the adequacy of a model, or the validity of experimental evidence. State a verdict, identify the criterion, and provide the correct account.",
            cognitiveDemand: "Judgement with justification. Identifying an error is not sufficient — the student must state WHAT is wrong, WHY it is wrong by reference to a chemical principle, and WHAT is correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Verify", "Justify"],
            whatDistinguishesThisLevel: "Evaluate requires a standard of correctness. 'A student claims that when ice melts, covalent O–H bonds break. Evaluate.' The student must: state the claim is incorrect; apply the criterion (only intermolecular H-bonds are overcome on melting); state what is actually broken; and explain what happens to the covalent O–H bonds (they remain intact).",
            examples: {
                ionicBonding:         "Evaluate the claim: 'Ionic compounds always have very high melting points because ionic bonds are extremely strong.' Identify the assumption being made, describe a counterexample, and explain what additional factor (beyond bond strength) determines the melting point of an ionic compound.",
                covalentBonding:      "A student states: 'CCl₄ is a polar molecule because it contains four polar C–Cl bonds.' Evaluate this statement fully — identify what is correct, identify the specific error, explain the correct assessment using molecular geometry, and state the correct conclusion about the polarity of CCl₄.",
                metallicBonding:      "Evaluate the following student explanation of why metals conduct electricity: 'Metals conduct because they have lots of electrons and electrons carry charge, so the charge can flow.' Identify what is correct in this answer, what important structural detail is missing, and rewrite a complete, accurate explanation of metallic conduction that would earn full marks.",
                intermolecularForces: "Evaluate the claim: 'HF has the highest boiling point of the hydrogen halides because it has the most electrons and therefore the strongest London dispersion forces.' Identify every error in this reasoning — state the correct reason for HF's anomalously high boiling point and explain why HF (with fewer electrons than HCl, HBr, HI) has a higher boiling point despite weaker London forces."
            }
        },

        create: {
            description: "Generate an original output — design a test sequence to identify structure type, construct an argument for a bonding model from experimental evidence, propose a structural modification to alter physical properties, or formulate a multi-step analysis of an unknown compound.",
            cognitiveDemand: "Synthesis and original production integrating multiple concepts. Cannot be answered by recalling any single procedure.",
            verbs: ["Design", "Propose", "Construct", "Formulate", "Plan", "Develop", "Derive"],
            whatDistinguishesThisLevel: "Create requires integration. 'Design a practical procedure to determine whether an unknown white solid is ionic or giant covalent' requires the student to propose tests (melting point estimation, conductivity solid vs molten vs dissolved, solubility in water and hexane), predict outcomes for each structure type, identify which combination of results discriminates between the two, and account for safety.",
            examples: {
                ionicBonding:         "Construct a Born-Haber cycle for the formation of sodium chloride from its elements, labelling each enthalpy term. Use the cycle to explain why sodium chloride is stable despite the large positive ionisation energy of Na — identify the thermodynamic driving forces that make the overall enthalpy of formation negative.",
                covalentBonding:      "Design a complete argument — using VSEPR, electronegativity, and dipole analysis — that determines from first principles whether PCl₅ is a polar or non-polar molecule. Your argument must: determine the molecular shape; assess the polarity of each P–Cl bond; determine whether the dipoles cancel; and state the conclusion with justification.",
                metallicBonding:      "Propose a structural explanation for why stainless steel (iron + ~18% chromium + ~8% nickel) is harder than pure iron, using the metallic bonding model. Extend your explanation to predict whether an alloy of Na and K would be harder or softer than pure Na, justifying your prediction.",
                intermolecularForces: "Formulate a set of criteria that a pharmaceutical chemist would use to predict whether a drug molecule will (a) dissolve in water (blood plasma), (b) cross cell membranes (lipid bilayers), and (c) be excreted rapidly in urine. For each criterion, identify the relevant intermolecular force and name one specific structural feature of the drug molecule that promotes or hinders it."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name ionic and covalent bonds but confuses which elements form each",
                "Draws dot-cross diagrams for simple molecules (H₂, HCl) but makes errors on molecules with lone pairs or double bonds",
                "States 'water is polar' without being able to explain why or what polarity means",
                "Confuses intermolecular forces with intramolecular bonds — says 'covalent bonds break when water boils'",
                "Describes metallic bonding as 'electrons flowing freely' without reference to ion lattice or electrostatic attraction"
            ],
            immediateNextSteps: [
                "Memorise the electronegativity series (F > O > N ≈ Cl > Br > C ≈ H > metals) using a mnemonic before attempting any polarity question. Draw δ+/δ− on three practice bonds (H–F, C–O, H–Cl) until automatic.",
                "Draw the four structure types (ionic lattice, simple molecular, giant covalent, metallic) from memory as 2D diagrams, labelling the particles present and the forces acting between them. Do not attempt property questions until all four diagrams can be produced from memory.",
                "Replace 'bonds break when water boils' with the correct statement: 'hydrogen bonds between water molecules are overcome on boiling; the O–H covalent bonds within each water molecule remain intact.' Write this correction out in full each time the error occurs.",
                "Build a properties table from scratch: four structure types as rows, five properties (melting point, conductivity solid, conductivity molten, conductivity dissolved, solubility in water) as columns. Fill each cell with a one-word answer (high/low/yes/no). This table is the foundation of all structure-property questions."
            ],
            misconceptionsToAddress: [
                "Ionic compounds have shared electrons → ionic bonds involve complete transfer; no sharing",
                "Covalent bonds break when molecular substances melt → only intermolecular forces are overcome on melting",
                "Polar bonds make a molecule polar → must also check whether bond dipoles cancel by molecular symmetry"
            ]
        },

        developing: {
            characteristics: [
                "Can apply VSEPR to molecules with 0 or 1 lone pair but struggles with 2 or more lone pairs",
                "Identifies hydrogen bonding in H₂O and NH₃ but cannot state the formal requirement (N/O/F–H bond + lone pair on N/O/F)",
                "Compares boiling points using intermolecular force type but neglects the contribution of molecular size (London forces)",
                "Knows ionic compounds conduct when molten but cannot explain the mechanism at the ion level",
                "Confuses the shape description with the electron pair geometry (e.g. says H₂O is tetrahedral)"
            ],
            immediateNextSteps: [
                "For VSEPR with multiple lone pairs: always start by counting ALL electron pairs around the central atom (bonding + lone). Use the table: 4 pairs (0 LP = tetrahedral, 1 LP = trigonal pyramidal, 2 LP = bent). 5 pairs (0 LP = trigonal bipyramidal, 1 LP = seesaw, 2 LP = T-shape). 6 pairs (0 LP = octahedral, 1 LP = square pyramidal, 2 LP = square planar). Never attempt a shape without completing this count first.",
                "For hydrogen bonding: always state the formal requirement before applying it. Write: 'H-bonding requires a N/O/F–H bond AND a lone pair on N, O, or F on the adjacent molecule.' Check BOTH requirements for any molecule before concluding H-bonding is present or absent.",
                "For boiling point comparisons: always address TWO factors in sequence: (1) type of intermolecular force (H-bonding > dipole–dipole > London); (2) if same force type, then molecular size/surface area. One-factor answers lose marks.",
                "For conductivity: always state the mechanism. 'Conducts when molten because ions are free to move and carry charge under an applied voltage' — never just say 'ions can move.'"
            ],
            misconceptionsToAddress: [
                "H₂O has a tetrahedral shape → tetrahedral is the electron pair geometry; the molecular shape (based on atom positions) is bent",
                "Any molecule with H can form hydrogen bonds → only H bonded to N, O, or F forms H-bonds; H bonded to C does not",
                "Larger molar mass always means stronger intermolecular forces → must specify the type; H-bonding in small molecules can dominate over London forces in larger non-polar molecules"
            ]
        },

        proficient: {
            characteristics: [
                "Applies VSEPR correctly to all standard geometries including expanded octets (PCl₅, SF₆, XeF₄)",
                "Correctly assesses molecular polarity by combining bond polarity with dipole vector geometry",
                "Explains all three types of intermolecular force mechanistically and ranks substances correctly by boiling point",
                "Compares metallic bond strength using electron number and charge density arguments",
                "Explains ionic, giant covalent, and metallic conductivity correctly with mechanistic detail",
                "Can draw and interpret dot-cross diagrams for multi-atom covalent molecules including dative bonds"
            ],
            immediateNextSteps: [
                "Extend to formal charge calculation: formal charge = (valence electrons) − (lone pair electrons) − ½(bonding electrons). Apply to SO₂, SO₃, NO₂, and CO — these species have resonance structures and formal charges that explain their reactivity.",
                "Investigate the Born-Haber cycle: connect lattice enthalpy to measurable quantities and understand why MgO has a larger lattice enthalpy than NaCl (charge effect) and why LiF has a larger lattice enthalpy than LiI (radius effect). Calculate a lattice enthalpy from a given Born-Haber cycle.",
                "Apply intermolecular forces to trends in more complex molecules: explain why alkanoic acids (e.g. ethanoic acid) have higher boiling points than expected from their Mr due to hydrogen-bonded dimer formation. Explain why the boiling points of straight-chain alcohols increase with chain length despite constant H-bonding.",
                "Connect graphite's conductivity to the band theory model: the delocalised π electrons in graphite form a half-filled band (valence and conduction band overlap along the layer plane), making it a conductor along layers but an insulator perpendicular to layers (no delocalised electrons between layers)."
            ],
            misconceptionsToAddress: [
                "Double bonds count as 'two electron pairs' in VSEPR → a double bond counts as ONE electron group (one bonding region); π bonds do not contribute additional repulsion in VSEPR",
                "Graphite conducts because layers slide → layer sliding explains lubrication; conductivity arises from delocalised π electrons between layers (a separate and independent structural feature)"
            ]
        },

        expert: {
            characteristics: [
                "Derives molecular shapes and polarities for unfamiliar molecules from first principles with no reference materials",
                "Applies Born-Haber cycle analysis to calculate unknown thermodynamic quantities",
                "Connects intermolecular forces to solubility, partition coefficients, and biological membrane transport",
                "Analyses metallic properties in terms of band theory (overlap of atomic orbitals into conduction bands)",
                "Evaluates the limitations of simple bonding models (VSEPR fails for transition metal complexes; ionic model breaks down for highly polarisable ions)"
            ],
            immediateNextSteps: [
                "Investigate Fajans' rules: when does an 'ionic' compound behave covalently? High charge density cations (small, highly charged: Al³⁺, Li⁺) polarise large, diffuse anions (I⁻, S²⁻), introducing covalent character. Apply Fajans' rules to predict which aluminium halide is most covalent in character.",
                "Explore molecular orbital theory for H₂ and O₂: the Lewis model fails for O₂ (predicts all electrons paired; O₂ is actually paramagnetic with 2 unpaired electrons). Molecular orbital theory (bonding and antibonding MOs) correctly predicts O₂'s paramagnetic ground state — a fundamental limitation of Lewis/VSEPR models.",
                "Apply the concept of polarisability to London force comparisons beyond simple diatomics: branching in hydrocarbons reduces surface area and therefore polarisability (fewer instantaneous dipole contacts), explaining the boiling point-branching relationship in alkanes from an intermolecular force perspective.",
                "Investigate hydrogen bond directionality: unlike London forces (non-directional), H-bonds have a preferred geometry (X–H···Y angle close to 180° is optimal). This directionality is why H-bonds give rise to specific 3D structures in proteins and DNA rather than random aggregates."
            ],
            misconceptionsToAddress: [
                "The ionic model is always applicable to compounds of metals and non-metals → highly polarising cations (Al³⁺, Be²⁺) produce compounds with significant covalent character; AlCl₃ is predominantly covalent",
                "VSEPR is universally applicable → VSEPR fails for transition metal complexes (d orbital geometry, crystal field effects dominate) and for molecules where resonance is significant"
            ]
        }
    }
},

atomicStructure: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about subatomic particles, electronic configuration notation, isotope definitions, and ionisation energy equations from memory without requiring explanation.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot do this, they cannot access higher levels.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Give"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts with no explanation. 'A proton has relative mass 1 and charge +1' is remember-level. Adding 'because it consists of three quarks...' crosses into understand.",
            examples: {
                subatomicParticles:         "State the relative mass, relative charge, and location for each of the three subatomic particles. Write the standard notation for ⁵⁶₂₆Fe and identify the number of each subatomic particle in a neutral atom.",
                electronicConfiguration:    "Write the full electronic configuration for sodium (Z=11) and chlorine (Z=17). State Hund's rule and the Pauli exclusion principle.",
                ionisationEnergy:           "Define first ionisation energy. Write the equation representing the first ionisation energy of magnesium, including state symbols.",
                isotopesAndMassSpectrometry:"Define the term isotope. State what is meant by relative atomic mass. List the four stages of a mass spectrometer in order."
            }
        },

        understand: {
            description: "Explain the chemical or physical reasons behind observations — connect electronic configuration to chemical behaviour, ionisation energy trends to nuclear charge and shielding, and isotope properties to subatomic particle counts.",
            cognitiveDemand: "The student must supply a causal link. 'IE increases across a period' is remember. 'IE increases across a period because nuclear charge increases while the number of shielding inner electrons remains approximately constant, so effective nuclear charge on the outer electron increases' is understand.",
            verbs: ["Explain", "Justify", "Describe", "Contrast", "Interpret", "Connect"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or reason. Stating that sodium has a lower IE than magnesium is remember. Explaining that sodium has one 3s electron while magnesium has two, with the same shielding — but that the critical difference is that Na's 3s electron experiences lower effective nuclear charge (Z_eff = 11 − shielding vs Mg's 12 − shielding) leading to weaker attraction — is understand.",
            examples: {
                subatomicParticles:         "Explain why isotopes of the same element have identical chemical properties but different physical properties. Your answer must reference electronic configuration and the role of electrons in chemical bonding.",
                electronicConfiguration:    "Explain why the 4s subshell fills before the 3d subshell in neutral atoms, but 4s electrons are lost before 3d electrons when transition metals form positive ions. Reference relative orbital energies in your answer.",
                ionisationEnergy:           "Explain why the first ionisation energy of aluminium (577 kJ/mol) is lower than that of magnesium (738 kJ/mol), despite aluminium having the greater nuclear charge. Reference subshell energies and shielding.",
                isotopesAndMassSpectrometry:"Explain how a mass spectrometer separates ²³⁵U from ²³⁸U. Your answer must describe the role of each stage (ionisation, acceleration, deflection, detection) and explain at which stage separation actually occurs."
            }
        },

        apply: {
            description: "Use formulae, configuration rules, and definitions to solve novel problems — calculating Ar from data, writing configurations for unfamiliar elements or ions, interpreting mass spectra, or deducing particle numbers from nuclear symbols.",
            cognitiveDemand: "Procedure execution in a new context. A common failure: knowing the weighted mean formula but dividing by the number of isotopes rather than total abundance.",
            verbs: ["Calculate", "Write", "Determine", "Predict", "Deduce", "Apply"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Write the electronic configuration of V²⁺ (Z = 23) and draw its 3d box notation' cannot be answered by memorising a definition — it requires applying filling rules, then the ionisation rule (remove from 4s first), and Hund's rule for the resulting 3d³.",
            examples: {
                subatomicParticles:         "The nuclide ⁶³₂₉Cu forms a Cu²⁺ ion. Calculate the number of protons, neutrons, and electrons in this ion. Show all working.",
                electronicConfiguration:    "Write the full electronic configuration of: (a) vanadium (Z=23); (b) V²⁺; (c) V³⁺. Draw the 3d box notation for each, applying Hund's rule correctly.",
                ionisationEnergy:           "The successive ionisation energies (kJ/mol) of element Z are: 419, 3051, 4412, 5877, 7975, 9649, 11343, 14944. Deduce which group element Z belongs to. Justify your answer. Suggest the identity of Z.",
                isotopesAndMassSpectrometry:"A mass spectrum of boron shows two peaks: m/z = 10 (relative abundance 198) and m/z = 11 (relative abundance 802). Calculate the relative atomic mass of boron to 2 decimal places, showing full working."
            }
        },

        analyze: {
            description: "Break down data, spectra, or configuration information to draw conclusions not directly given — identify patterns in IE data, deduce shell structure from successive IE graphs, determine an unknown element from particle data, or identify the source of anomalies in IE trends.",
            cognitiveDemand: "Decomposition and inference. The student derives a conclusion from evidence rather than recalling a fact.",
            verbs: ["Deduce", "Identify", "Analyse", "Determine", "Interpret", "Classify", "Explain the pattern"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'A graph of log(IE) vs electron number for an unknown element shows a large jump after removing the 3rd electron. Determine the group.' requires reading the graph, identifying the jump, connecting it to the shell model, and deducing group 3 — not recalling a definition.",
            examples: {
                subatomicParticles:         "Two nuclides are given: ¹⁴₆C and ¹⁴₇N. Analyse whether these are isotopes of each other. Justify your reasoning using all three subatomic particle numbers.",
                electronicConfiguration:    "An element has the electronic configuration [Ar] 3d¹⁰ 4s¹. Analyse whether this is an expected Aufbau configuration or an exception. Identify the element. Predict its most common oxidation state and write the configuration of the resulting ion.",
                ionisationEnergy:           "The first ionisation energies (kJ/mol) of successive elements in Period 3 are: Na 496, Mg 738, Al 577, Si 786, P 1012, S 1000, Cl 1251, Ar 1521. Analyse this data and identify all anomalies. For each anomaly, provide a mechanistic explanation involving electronic configuration.",
                isotopesAndMassSpectrometry:"A mass spectrum of an element shows three peaks at m/z = 28 (92.2%), m/z = 29 (4.7%), m/z = 30 (3.1%). Analyse the data to: (a) identify the element; (b) calculate its Ar to 2 d.p.; (c) explain why the peak heights differ so dramatically."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the correctness of a configuration, or the quality of reasoning about ionisation energies or isotopes. State a verdict, apply the correct criterion, and correct any errors.",
            cognitiveDemand: "Judgement with justification. Identifying an error without explaining the criterion is not evaluate-level.",
            verbs: ["Evaluate", "Critique", "Assess", "Justify", "Judge", "Appraise", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a standard against which to judge. 'A student writes the configuration of Fe²⁺ as [Ar] 3d⁴ 4s². Evaluate.' The student must: identify the error; apply the criterion (remove 4s before 3d when forming ions); state the correct configuration [Ar] 3d⁶; and explain why the rule is opposite to the Aufbau filling order.",
            examples: {
                subatomicParticles:         "A student states: 'The mass number of an element can vary because different atoms of the same element can contain different numbers of protons.' Evaluate this statement — identify all errors and provide the correct explanation.",
                electronicConfiguration:    "A student writes the electronic configuration of Fe²⁺ as [Ar] 3d⁴ 4s². Evaluate this configuration — state whether it is correct, identify the error if present, explain what rule has been violated, and write the correct configuration.",
                ionisationEnergy:           "A student explains the lower first IE of oxygen compared to nitrogen as follows: 'Oxygen has a higher nuclear charge, so its electrons are held more tightly, but it also has more electrons which repel each other — these two effects cancel perfectly, giving oxygen a lower IE.' Evaluate this explanation — identify what is correct, what is imprecise or incorrect, and provide a more rigorous explanation.",
                isotopesAndMassSpectrometry:"A student calculates the relative atomic mass of an element from its mass spectrum by adding the m/z values of all peaks and dividing by the number of peaks. Evaluate this method — identify the conceptual error, explain what the correct method is, and show with an example why the student's method gives an incorrect answer."
            }
        },

        create: {
            description: "Generate an original output: design an experiment using IE data to identify an unknown element, construct a logical argument for shell structure from first principles, derive the expected number of large jumps in IE data for any element, or formulate a decision procedure for writing configurations of ions.",
            cognitiveDemand: "Synthesis and original production. The student integrates multiple concepts to produce something that cannot be answered by recalling any single fact or procedure.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Plan", "Formulate", "Develop"],
            whatDistinguishesThisLevel: "Create requires integration. 'Design an experimental procedure using successive ionisation energy data to determine whether an unknown element is in Group 2 or Group 3, and explain how you would distinguish between them.' No single recalled fact answers this — it requires knowing what successive IE data looks like, where jumps occur for Group 2 vs 3, and how to design a controlled test.",
            examples: {
                subatomicParticles:         "Construct an argument — from first principles of nuclear charge and electron arrangement — that explains why all isotopes of a given element are placed in the same position in the periodic table, while elements with the same mass number (isobars) are placed in different positions.",
                electronicConfiguration:    "Derive a general rule for predicting the electronic configuration of any transition metal ion with a 2+ or 3+ charge, and test your rule on: Mn²⁺ (Z=25), Co³⁺ (Z=27), and Zn²⁺ (Z=30). Identify any cases where the result is unexpected and explain why.",
                ionisationEnergy:           "Design a procedure by which a forensic scientist could use successive ionisation energy data alone to identify an unknown pure metallic element. Your procedure must specify: (a) what data to collect; (b) how to identify the group from the data; (c) how to narrow down the period; (d) how to confirm the identity. Test your procedure on the IE data: 590, 1145, 4912, 6474, 8144, 10496, 12320, 15000 kJ/mol.",
                isotopesAndMassSpectrometry:"Propose a method using mass spectrometry that could, in principle, determine whether a sample of water (H₂O) was collected from a glacier (enriched in ¹⁶O) or from a tropical ocean (relatively enriched in ¹⁸O). Include: (a) how the sample would be prepared; (b) what peaks would appear in the mass spectrum; (c) how the ¹⁸O:¹⁶O ratio would be calculated; (d) what conclusion would be drawn from a specific hypothetical result."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Confuses atomic number and mass number — cannot reliably calculate neutron number",
                "Knows electrons are 'in shells' but cannot write a configuration beyond the first three elements",
                "States that isotopes have different chemical properties — the most fundamental misconception",
                "Cannot write the ionisation energy equation with correct state symbols",
                "Thinks the mass spectrum gives the mass of the whole molecule, not individual isotopes"
            ],
            immediateNextSteps: [
                "Memorise the mnemonic 'Protons = Atomic number; Neutrons = Mass − Atomic' before any other work. Write ₁₇³⁵Cl and derive: protons = 17, neutrons = 35 − 17 = 18, electrons = 17. Repeat for five different nuclides until automatic.",
                "Build the subshell filling order as a physical card stack: write 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p on separate cards. Arrange them in energy order. Add electrons one at a time, placing them on the correct card. Do not proceed to writing configurations until this physical sequence is fluent.",
                "Replace 'isotopes have different chemical properties' with 'isotopes are chemically identical — same electrons, same configuration, same bonding' every time you write about isotopes. The chemical/physical property distinction is the single most tested isotope concept.",
                "Write the ionisation energy equation for five different elements, always including state symbols: X(g) → X⁺(g) + e⁻. Never omit (g). State symbols are tested directly in examinations."
            ],
            misconceptionsToAddress: [
                "Isotopes have different chemical properties → same electrons, same configuration, chemically identical",
                "Mass number = number of protons → mass number = protons + neutrons; protons = atomic number only",
                "Electrons fill in order 1, 2, 3, 4... without subshell structure → the 4s fills before 3d"
            ]
        },

        developing: {
            characteristics: [
                "Can write configurations for Periods 1–3 correctly but struggles with 4s/3d ordering for transition metals",
                "Can identify the group from successive IE data if the jump is obvious but cannot explain why the jump occurs",
                "Applies the Ar weighted mean formula but divides by the number of isotopes rather than total abundance",
                "Knows the four stages of mass spectrometry by name but cannot explain the physics of deflection",
                "Can state the general IE trend across a period but cannot explain the Mg→Al and P→S anomalies"
            ],
            immediateNextSteps: [
                "For 4s/3d: memorise the two-rule system explicitly. Rule 1 (filling): 4s fills before 3d in neutral atoms. Rule 2 (ionisation): 4s is removed before 3d when forming ions. Practise both rules on Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn — writing both the neutral atom and 2+ ion configurations for each.",
                "For Ar from mass spectra: always write the formula Ar = Σ(m/z × abundance) ÷ Σ(abundance) before every calculation. Never divide by the number of peaks. Practise with the boron, neon, and chlorine examples from the lesson until the formula is automatic.",
                "For the IE anomalies: always write out the full electronic configuration of both elements before explaining. For Mg→Al: write Mg 1s² 2s² 2p⁶ 3s² and Al 1s² 2s² 2p⁶ 3s² 3p¹ side by side. The explanation must name the specific subshell (3p is higher energy than 3s) and the extra shielding by 3s electrons. For P→S: draw the box notation to show the paired orbital in S.",
                "For successive IE jumps: practise the rule 'the group number = number of electrons removed before the large jump'. Test on five examples with known answers, then on two unknowns."
            ],
            misconceptionsToAddress: [
                "Dividing by number of isotopes in Ar calculation → divide by total abundance (it is a weighted mean)",
                "Removing 3d electrons before 4s when forming transition metal ions → always remove from highest n first",
                "Mg→Al anomaly explained as 'electron repulsion' → it is subshell energy (3p higher than 3s) plus partial shielding"
            ]
        },

        proficient: {
            characteristics: [
                "Writes electronic configurations for all Period 4 elements (including Cu and Cr exceptions) correctly",
                "Interprets successive IE graphs fluently — identifies group, estimates period from absolute IE values",
                "Calculates Ar correctly from both percentage data and mass spectra using the weighted mean formula",
                "Explains all six IE trends across Period 3 (both anomalies with full mechanistic reasoning)",
                "Describes all four stages of mass spectrometry with the physics of each stage"
            ],
            immediateNextSteps: [
                "Extend successive IE interpretation: given IE data for a Period 4 transition metal, deduce the group AND the likely element by combining group number (from jump position) with approximate IE magnitude. Practise on Sc, Ti, V, Mn, Fe.",
                "Connect electronic configuration to the structure of the periodic table: identify s-block, p-block, d-block, and f-block from first principles, and explain why Period 4 contains 18 elements (2 from 4s + 10 from 3d + 6 from 4p) while Period 2 contains only 8.",
                "Practise mass spectrum interpretation for molecules (not just atoms): understand that molecular ions M⁺ appear at m/z = molecular mass, and fragmentation peaks at lower m/z correspond to known functional group losses.",
                "Work through the mathematical derivation of the Ar formula from first principles: if a sample has N₁ atoms of isotope 1 (mass m₁) and N₂ atoms of isotope 2 (mass m₂), total mass = N₁m₁ + N₂m₂, mean mass per atom = (N₁m₁ + N₂m₂)/(N₁ + N₂) — the weighted mean formula."
            ],
            misconceptionsToAddress: [
                "Assuming all IE anomalies are due to electron repulsion — the Mg→Al anomaly is specifically subshell energy, not repulsion",
                "Confusing the mass spectrum x-axis as 'mass' rather than 'm/z' — for singly-charged ions m/z = m, but for doubly-charged ions m/z = m/2"
            ]
        },

        expert: {
            characteristics: [
                "Derives general formulae for electron capacity, ionisation energy trends, and Ar from first principles",
                "Predicts electronic configurations for ions of any element, including f-block (lanthanides/actinides)",
                "Connects successive IE data quantitatively to effective nuclear charge calculations (Slater's rules)",
                "Interprets complex mass spectra including doubly-charged ions, molecular ions, and fragmentation patterns",
                "Applies the shell model to explain reactivity patterns beyond IE — electron affinity, electronegativity, atomic radius"
            ],
            immediateNextSteps: [
                "Apply Slater's rules to calculate effective nuclear charge (Z_eff) for specific electrons and compare Z_eff values for corresponding electrons across a period and down a group. Verify that calculated trends match observed IE trends.",
                "Investigate the quantum mechanical basis of orbital shapes: s orbitals are spherical because they have zero angular momentum; p orbitals are dumbbell-shaped because l = 1. Connect the number of orbitals in each subshell (2l + 1) to the l quantum number.",
                "Calculate the expected mass spectrum peaks for a diatomic molecule containing isotopes (e.g. HCl — predict all peaks at m/z = 36, 37, 38 corresponding to H³⁵Cl⁺, H³⁷Cl⁺ combinations) and their relative abundances from isotope percentages.",
                "Explore the Born-Haber cycle as an application of ionisation energy in thermochemical calculations — IE is one of the quantitative steps required to construct lattice enthalpy cycles for ionic compounds."
            ],
            misconceptionsToAddress: [
                "Assuming effective nuclear charge increases uniformly across a period — it does, but shielding is not perfectly constant (d electrons shield less effectively than s and p electrons for the same shell, contributing to the lanthanide contraction)",
                "Treating orbital energy order as fixed — in transition metal ions, the relative energies of 3d and 4s reverse compared to the neutral atom, which is why the ionisation order reverses"
            ]
        }
    }
},


organicChemistry: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about functional group classification, reaction conditions, reagents, and product names from memory without requiring mechanistic explanation.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No causal reasoning required. A student who cannot do this cannot access mechanistic or synthetic questions.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Give"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no reasoning. 'Aldehydes give a silver mirror with Tollens' reagent' is remember-level. Adding 'because the aldehyde reduces Ag⁺ to Ag⁰ by acting as a reducing agent while being oxidised to a carboxylate ion' crosses into understand.",
            examples: {
                alcoholsAndPhenols:           "State the reagents and conditions for the oxidation of a primary alcohol to a carboxylic acid. Name the type of reaction and the colour change observed.",
                halogenoalkanes:              "Write the overall equation for the hydrolysis of bromoethane with aqueous NaOH. State which mechanism applies and define SN2.",
                carbonylCompounds:            "List the reagents for Tollens' test, Fehling's solution, and the iodoform test. State the observation for a positive result in each case.",
                carboxylicAcidsAndDerivatives:"Name the products of the reaction between ethanoyl chloride and ethanol. Write the equation and state the mechanism type.",
                organicSynthesis:             "State the reagents and conditions required to convert a primary halogenoalkane into: (a) an alcohol; (b) an alkene; (c) a nitrile."
            }
        },

        understand: {
            description: "Explain the chemical reasoning behind observations — connect functional group structure to reactivity, mechanism to product, and reagent choice to outcome.",
            cognitiveDemand: "The student must supply a causal link connecting structure to behaviour. Listing reagents is remember. Explaining why NaOH in ethanol gives elimination while NaOH in water gives substitution (different nucleophile/base strength and solvation) is understand.",
            verbs: ["Explain", "Justify", "Describe", "Contrast", "Interpret", "Connect"],
            whatDistinguishesThisLevel: "Understand requires the mechanistic or thermodynamic reason. Stating that tertiary alcohols do not react with dichromate is remember. Explaining that tertiary alcohols have no H atom on the carbon bearing –OH, so oxidation (which requires removing H) cannot occur — this is understand.",
            examples: {
                alcoholsAndPhenols:           "Explain why phenol reacts with bromine water without a Lewis acid catalyst, while benzene requires AlBr₃. Your answer must reference the effect of the –OH group on ring electron density.",
                halogenoalkanes:              "Explain why the rate of hydrolysis of halogenoalkanes increases in the order RF < RCl < RBr < RI, even though C–F is the most polar bond. Reference bond enthalpies in your answer.",
                carbonylCompounds:            "Explain why aldehydes give a positive Tollens' test but ketones do not, using the structural difference at the carbonyl carbon and the concept of oxidation state.",
                carboxylicAcidsAndDerivatives:"Explain why base hydrolysis of an ester (saponification) is irreversible while acid hydrolysis is reversible. Your answer must reference the properties of the carboxylate ion product.",
                organicSynthesis:             "Explain why the conversion of propan-1-ol to propanal requires distillation of the product, while conversion to propanoic acid requires reflux. Reference the mechanism of oxidation and product stability."
            }
        },

        apply: {
            description: "Use reaction conditions, mechanism templates, and functional group relationships to solve novel problems — drawing mechanisms for unseen substrates, predicting products, naming compounds, or balancing equations.",
            cognitiveDemand: "Procedure execution in a new context. The student selects the correct mechanism type, applies curly arrows correctly, and identifies products — output that cannot be generated by memorising a definition alone.",
            verbs: ["Draw", "Predict", "Write", "Name", "Apply", "Calculate", "Propose"],
            whatDistinguishesThisLevel: "Apply requires a new problem. Drawing the SN2 mechanism for the reaction of 1-chlorobutane with KCN in ethanol requires: identifying CN⁻ as the nucleophile; recognising primary substrate → SN2; drawing the correct curly arrows (back-side attack); identifying the nitrile product; and noting the chain has grown by one carbon.",
            examples: {
                alcoholsAndPhenols:           "Draw the full mechanism for the formation of ethyl propanoate from propanoic acid and ethanol. Identify the catalyst, state whether the reaction is reversible, and show how yield can be improved.",
                halogenoalkanes:              "Draw the full SN1 mechanism for the hydrolysis of 2-bromo-2-methylbutane with water. Show the carbocation intermediate and explain the stereochemical outcome at the chiral centre.",
                carbonylCompounds:            "Draw the full curly arrow mechanism for the nucleophilic addition of HCN to propanone. Name the product and identify the new chiral centre formed. State whether a racemic mixture or a single enantiomer is produced.",
                carboxylicAcidsAndDerivatives:"Draw the full mechanism for the reaction of propanoyl chloride with methylamine (CH₃NH₂). Name the product. Explain why acyl chlorides react faster with amines than carboxylic acids do.",
                organicSynthesis:             "Starting from ethene, propose a two-step synthesis of ethanoic acid. For each step, write the equation, state the reagents and conditions, and identify the mechanism type."
            }
        },

        analyze: {
            description: "Break down experimental observations, spectral data, or reaction outcomes to draw non-obvious conclusions — deduce functional group identity from test results, infer mechanism from product distribution, or identify structural features from data.",
            cognitiveDemand: "Decomposition and inference. The conclusion was not directly given — it must be derived by reasoning from evidence. A student who simply recalls 'aldehydes give a silver mirror' is at remember level; a student who uses three test results together to deduce a specific molecular structure is at analyze level.",
            verbs: ["Deduce", "Identify", "Classify", "Analyse", "Determine", "Distinguish", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'A compound with formula C₃H₆O gives a positive Tollens' test and a negative iodoform test — identify the compound and justify' requires the student to: eliminate ketone (Tollens' positive → aldehyde); identify possible aldehydes with C₃H₆O; apply iodoform criterion (negative → no CH₃CO group) to choose propanal over ethanal; then verify.",
            examples: {
                alcoholsAndPhenols:           "Four organic compounds react as follows: Compound A reacts with Na to give H₂; reacts with NaOH; decolourises bromine water without UV light. Compound B reacts with Na to give H₂; does not react with NaOH; does not decolourise bromine water. Identify the functional group in each compound and name a specific compound consistent with each set of observations.",
                halogenoalkanes:              "In the silver nitrate test for halide ions (AgNO₃/ethanol), three halogenoalkanes give precipitates in the order: compound A (immediate yellow precipitate), compound B (cream precipitate after 30 s), compound C (white precipitate after 5 min). Identify the halogen in each compound, justify the rate order using bond enthalpies, and name the mechanism by which hydrolysis occurs.",
                carbonylCompounds:            "An unknown compound C₄H₈O: gives orange precipitate with 2,4-DNP; gives no silver mirror with Tollens'; gives no yellow precipitate with I₂/NaOH. Deduce the class of compound, eliminate all alternatives, and name a specific structure consistent with all three observations.",
                carboxylicAcidsAndDerivatives:"Compound X (C₃H₆O₂) effervesces with Na₂CO₃ solution and reacts with ethanol in the presence of H₂SO₄ to give a sweet-smelling product. Compound Y (C₃H₆O₂) does not react with Na₂CO₃ but hydrolyses in dilute HCl to give an alcohol and an acid. Identify the functional group in X and Y, and write the structural formula of each.",
                organicSynthesis:             "A student carries out the following sequence: but-1-ene + HBr → A; A + KOH(ethanol), heat → B; B + HBr → C. Identify compounds A, B, and C. Explain why C is a different structural isomer from A, and state which mechanism governs each step."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the correctness of a proposed mechanism, the suitability of reagents, or the quality of evidence. The student must state a verdict, apply a criterion, and correct any error.",
            cognitiveDemand: "Judgement with justification. Simply identifying an error is not evaluate-level. The student must state what is wrong, why it is wrong by reference to a chemical principle, and what the correct answer is.",
            verbs: ["Evaluate", "Critique", "Assess", "Justify", "Judge", "Appraise", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a standard. 'A student proposes that bromoethane reacts with NaOH by SN1 because a carbocation intermediate is more stable than the transition state in SN2.' The evaluating student must: state this is incorrect; apply the criterion (primary substrates disfavour SN1 — primary carbocations are too unstable); state the correct mechanism (SN2); and explain the correct rate equation.",
            examples: {
                alcoholsAndPhenols:           "Evaluate the statement: 'Phenol and ethanol both react with NaOH because they are both alcohols — the –OH group in both cases donates H⁺ to the base.' Identify the error in reasoning about ethanol's behaviour, explain the difference in acidity between phenol (pKa ~10) and ethanol (pKa ~16), and provide the correct chemical explanation for why phenol reacts with NaOH while ethanol does not.",
                halogenoalkanes:              "A student proposes the following SN2 mechanism for the reaction of 2-bromo-2-methylpropane with OH⁻: a single curly arrow from OH⁻ to the central carbon, and Br departing simultaneously. Evaluate this proposal — identify whether SN2 or SN1 is the correct mechanism for this substrate, explain why, and describe the actual mechanism with correct step sequence and stereochemical outcome.",
                carbonylCompounds:            "Evaluate the following student response to 'Explain why ketones do not give a positive Tollens' test': 'Ketones do not react with Tollens' reagent because they are non-polar molecules and cannot dissolve in the aqueous reagent.' Identify all errors in this explanation and provide the correct structural and oxidation-state-based explanation.",
                carboxylicAcidsAndDerivatives:"A student states: 'Acyl chlorides and carboxylic acids both undergo nucleophilic acyl substitution, so they should react at the same rate with ethanol.' Evaluate this claim — identify the structural difference that causes the large rate difference, reference leaving group ability and carbonyl electrophilicity, and state which is faster and by approximately how many orders of magnitude.",
                organicSynthesis:             "Evaluate the following proposed synthesis of 2-aminopropane from propan-2-ol: Step 1: propan-2-ol + HBr → 2-bromopropane; Step 2: 2-bromopropane + NaOH(aq) → 2-aminopropane. Identify the error in step 2 (wrong reagent for the target product), state the correct reagent for step 2, and explain why the proposed NaOH step gives the wrong product."
            }
        },

        create: {
            description: "Generate an original output: design a multi-step synthesis route, construct a testing scheme for unknown compounds, derive a mechanism for an unseen reaction type, or formulate a structural argument from first principles.",
            cognitiveDemand: "Synthesis and original production. The student integrates multiple concepts and cannot answer by recalling any single fact. A key marker: the output requires choices (which reagent? which mechanism? which order of steps?) that cannot be avoided.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Plan", "Formulate", "Develop"],
            whatDistinguishesThisLevel: "Create requires integration. 'Design a synthesis of N-methylethanamide from ethanoic acid and methylamine in the minimum number of steps, maximising yield' requires the student to recognise that direct amide formation from acid + amine is slow and low-yielding; propose activation via acyl chloride; write the two-step route; and justify each step's reagents and conditions.",
            examples: {
                alcoholsAndPhenols:           "Design a three-step synthesis of ethyl ethanoate starting from ethanol only (no other carbon sources). State all reagents and conditions, write balanced equations for each step, and explain why each intermediate step is necessary.",
                halogenoalkanes:              "Propose a synthetic route to make 2-aminobutane from but-1-ene, using no more than three steps. For each step: write the equation; state the reagents and conditions; classify the mechanism. Justify the regiochemistry of each step using Markovnikov's rule or SN2 preference as appropriate.",
                carbonylCompounds:            "Construct a testing scheme using no more than four chemical tests to identify four unknown compounds: pentanal, pentan-3-one, pentan-2-one, and pentan-1-ol. For each test: state the reagent; predict the observation for each compound; explain the chemical basis; and show how the observations collectively identify all four compounds uniquely.",
                carboxylicAcidsAndDerivatives:"Formulate a synthetic route from benzene to aspirin (2-acetoxybenzoic acid = 2-(ethanoyloxy)benzoic acid) in no more than four steps. Each step must include: reagents, conditions, mechanism type, and equation. Identify which step installs the –OH group and which performs the esterification, and justify the order of steps.",
                organicSynthesis:             "Develop a retrosynthetic analysis and forward synthesis for the conversion of propane to propanoic acid via the nitrile route (using CN⁻ to extend the carbon chain). Compare this route with the direct oxidation route (propane → 1-bromopropane → propan-1-ol → propanoic acid) in terms of: number of steps; atom economy concept; and selectivity issues at each step."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Cannot reliably distinguish between aldehyde and ketone structures — writes both as R–C=O without understanding the structural distinction",
                "Confuses oxidation conditions: does not know that distillation gives aldehyde from primary alcohol, reflux gives carboxylic acid",
                "Applies SN2 mechanism to tertiary substrates without checking substrate class",
                "States 'bromine water decolourises' for all organic compounds without specifying the mechanism",
                "Cannot draw a curly arrow mechanism for nucleophilic substitution — places arrow on the wrong bond or in the wrong direction"
            ],
            immediateNextSteps: [
                "Build and memorise a functional group card set: one card per group, with structural formula, one named example, one reaction, and one test. Complete the set for: alcohol, aldehyde, ketone, carboxylic acid, ester, halogenoalkane, amine, amide. Do not attempt mechanisms until this card set is automatic.",
                "Draw the oxidation ladder for primary alcohols: primary alcohol → aldehyde (distil) → carboxylic acid (reflux). Label each rung with reagent and condition. For secondary alcohol: add a branch → ketone (stops here). For tertiary: add 'no reaction'. Reproduce this diagram from memory daily for one week.",
                "For every nucleophilic substitution question, first classify the substrate as primary, secondary, or tertiary BEFORE choosing SN1 or SN2. Make this a rule: classify first, then mechanise.",
                "Practise drawing two-step curly arrow mechanisms for SN2 (OH⁻ + primary halogenoalkane → alcohol + halide). Label each arrow: 'lone pair donor' or 'bond breaks to halide'. Reproduce five examples before attempting SN1."
            ],
            misconceptionsToAddress: [
                "Aldehydes and ketones are the same because both have C=O → aldehydes have H on the carbonyl carbon; ketones do not — this determines oxidisability",
                "All halogens make halogenoalkanes equally reactive → C–I reacts fastest (lowest bond enthalpy); C–F does not react (highest bond enthalpy)",
                "Distillation and reflux both give the same product from alcohol oxidation → distillation traps the aldehyde; reflux gives over-oxidation to carboxylic acid"
            ]
        },

        developing: {
            characteristics: [
                "Correctly classifies alcohols as primary, secondary, or tertiary and predicts oxidation products, but confuses distillation vs reflux conditions",
                "Draws the SN2 mechanism correctly for primary substrates but attempts SN2 for tertiary substrates",
                "Knows Tollens' and Fehling's tests but cannot explain mechanistically why ketones do not react",
                "Can draw the ester formation equation but cannot draw the mechanism or explain why the reaction is reversible",
                "Applies iodoform test correctly for propanone but does not recognise ethanol as a positive (because it is first oxidised to ethanal)"
            ],
            immediateNextSteps: [
                "For SN1 vs SN2: use a two-column decision table. Column 1: substrate type (primary → SN2 preferred; tertiary → SN1 preferred; secondary → competition). Column 2: conditions (strong nucleophile/weak base → SN2; weak nucleophile/strong base or polar protic solvent → SN1). Fill this table and apply it mechanically to every question before choosing a mechanism.",
                "For Tollens' vs Fehling's vs iodoform: make three overlapping circles (Venn diagram). Circle 1 (Tollens'): all aldehydes. Circle 2 (Fehling's): aliphatic aldehydes only (aromatic aldehydes do not always give a positive result). Circle 3 (iodoform): ethanal, methyl ketones, ethanol (and other CH₃CHOH compounds). Memorise which compounds fall in overlapping regions.",
                "For ester hydrolysis reversibility: always draw the two equations — acid hydrolysis with ⇌ (reversible); base hydrolysis with → (irreversible). Annotate why: carboxylate ion formed in base hydrolysis cannot attack an alcohol to reverse the reaction. Reproduce this comparison once per study session until automatic.",
                "Iodoform positive compounds: make a list — ethanal, all CH₃COR ketones, ethanol, all CH₃CH(OH)R alcohols. Test yourself: for any carbonyl compound presented, decide iodoform positive or negative before checking."
            ],
            misconceptionsToAddress: [
                "SN2 can occur at tertiary carbons if a strong nucleophile is used → steric hindrance prevents SN2 at tertiary carbons regardless of nucleophile strength; only SN1 operates at tertiary centres",
                "Fehling's test is equivalent to Tollens' test → Fehling's does not give a positive result with aromatic aldehydes (benzaldehyde); Tollens' does — they are not interchangeable",
                "Ethanol does not give a positive iodoform test → ethanol is oxidised to ethanal by I₂/NaOH under iodoform test conditions; the ethanal then undergoes iodination; ethanol gives a positive iodoform test"
            ]
        },

        proficient: {
            characteristics: [
                "Draws complete and correct mechanisms for SN1, SN2, nucleophilic addition (HCN to carbonyls), and nucleophilic acyl substitution (acyl chloride + alcohol/amine)",
                "Applies all distinguishing tests correctly and interprets results to identify unknown compounds",
                "Plans simple two-step synthesis routes connecting functional group interconversions",
                "Explains the irreversibility of base hydrolysis of esters using carboxylate ion stability",
                "Correctly identifies geometric isomers and chiral centres produced in nucleophilic addition reactions"
            ],
            immediateNextSteps: [
                "Extend synthesis planning to three-step routes: practise working backwards (retrosynthesis) from a target molecule. For any target, identify the functional group, identify the one-step transformation that installs it, identify the immediate precursor, and repeat. Always verify the forward route after retrosynthesis.",
                "Connect nucleophilic acyl substitution to amide bond formation: practise drawing the mechanism for acyl chloride + amine → amide step by step, including the tetrahedral intermediate and HCl loss. This is the mechanistic foundation of peptide bond formation.",
                "Investigate directing effects on further reactions of products: if a synthesis produces a chiral centre, discuss whether a racemic mixture or single enantiomer is expected, and why (open reaction vs enzyme-catalysed).",
                "Practise writing rate equations for SN1 and SN2 and connecting them to the mechanism: SN2 rate = k[RX][Nu]; SN1 rate = k[RX]. Confirm that the rate equation distinguishes the two mechanisms experimentally."
            ],
            misconceptionsToAddress: [
                "Racemisation only occurs in SN1 → SN2 gives inversion of configuration (Walden inversion), not retention or racemisation; racemisation is specific to SN1 via a planar carbocation intermediate",
                "Acyl chloride reaction with an alcohol is a simple substitution at carbon → nucleophilic acyl substitution proceeds via an addition-elimination sequence through a tetrahedral intermediate, not a concerted SN2 displacement"
            ]
        },

        expert: {
            characteristics: [
                "Designs multi-step synthesis routes with full mechanistic justification, awareness of competing reactions, and optimisation of yield",
                "Analyses kinetic vs thermodynamic control in organic reactions (e.g. substitution vs elimination competition)",
                "Evaluates structural evidence for reaction mechanism (isotope labelling, stereochemical outcome, rate law) and connects to proposed mechanism",
                "Applies nucleophilic acyl substitution to biological systems (peptide bond formation, ester hydrolysis by lipases)",
                "Extends iodoform test, oxidation behaviour, and hydrolysis to structurally complex molecules"
            ],
            immediateNextSteps: [
                "Investigate the Hammond postulate applied to SN1: for endothermic carbocation formation (rate-determining step), the transition state resembles the product (carbocation). Therefore transition state stability ∝ carbocation stability. Use this to quantitatively compare tertiary > secondary > primary rates of SN1.",
                "Connect ester hydrolysis mechanism to enzymatic catalysis: lipases (esterases) use a catalytic triad (Ser, His, Asp) to perform nucleophilic acyl substitution. Map the enzymatic mechanism onto the chemical mechanism: the serine –OH acts as the nucleophile; the tetrahedral intermediate is stabilised by an oxyanion hole. This directly extends the A-Level mechanism to biochemistry.",
                "Explore the E1/E2 competition in elimination reactions: E2 requires a syn-periplanar or anti-periplanar arrangement of H and X; E1 proceeds via carbocation and is substrate-independent of base. Apply to cyclohexyl halides where axial/equatorial positioning determines which elimination product is formed.",
                "Derive the degree of unsaturation (DoU = (2C + 2 + N − H − X)/2) for all carbonyl compounds studied and verify: aldehyde/ketone DoU = 1 (C=O); carboxylic acid DoU = 1 (C=O only, not counting OH); ester DoU = 1; amide DoU = 1. Use DoU to rapidly constrain possible structures from molecular formula before applying spectral or chemical tests."
            ],
            misconceptionsToAddress: [
                "Elimination always gives the more substituted alkene (Zaitsev's rule) → bulky bases (e.g. potassium tert-butoxide) give the less substituted alkene (Hofmann product) due to steric preference for the less hindered β-hydrogen — this is an important selectivity concept in advanced synthesis",
                "Base strength and nucleophilicity are the same → a strong base is not always a good nucleophile; large polarisable nucleophiles (I⁻, RS⁻) are excellent SN2 nucleophiles but are weak bases; small hard bases (F⁻, RO⁻) are strong bases but poor SN2 nucleophiles due to high solvation energy"
            ]
        }
    }
},

acidsAndBases: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored definitions, formulae, equations, and conditions relating to acids, bases, pH, Ka, Kw, and titrations without requiring explanation.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. Students who cannot perform this level cannot access calculations or evaluations.",
            verbs: ["State", "Write", "List", "Define", "Give", "Name", "Identify"],
            whatDistinguishesThisLevel: "A remember-level response gives the formula or definition without mechanism. 'Ka = [H⁺][A⁻]/[HA]' is remember-level. Explaining why [HA] is in the denominator is understand-level.",
            examples: {
                acidBaseDefinitions: "State the Brønsted–Lowry definitions of an acid and a base. Write the expression for Ka of a weak acid HA. Define the term 'conjugate acid–base pair'.",
                pHAndStrength:       "State the formula for pH. Write the expression for Kw. Give the value of Kw at 25°C and state the pH of pure water at 25°C.",
                buffers:             "State what a buffer solution is. List the two components required for an acidic buffer. Write the Henderson–Hasselbalch equation.",
                titrations:          "State the difference between equivalence point and end point. Name one suitable indicator for a strong acid–strong base titration and state its colour change."
            }
        },

        understand: {
            description: "Explain chemical reasoning behind observations and equations — connect Ka to acid strength, explain why weak acids only partially dissociate, explain why buffers resist pH change, explain indicator selection criteria.",
            cognitiveDemand: "The student must supply a causal link. Stating 'a buffer resists pH change' is remember. Explaining that added H⁺ is absorbed by the conjugate base reservoir A⁻ (H⁺ + A⁻ → HA) while added OH⁻ is absorbed by the weak acid reservoir HA (OH⁻ + HA → A⁻ + H₂O), so [H⁺] changes only minimally — that is understand.",
            verbs: ["Explain", "Justify", "Describe", "Contrast", "Interpret", "Connect"],
            whatDistinguishesThisLevel: "Understanding requires causal explanation. 'Strong acids fully dissociate' is remember. 'Strong acids fully dissociate because their Ka >> 1, meaning the equilibrium lies so far to the right that essentially no HA remains undissociated — the reverse reaction is negligible' is understand.",
            examples: {
                acidBaseDefinitions: "Explain why the Brønsted–Lowry definition of an acid is more general than the Arrhenius definition. Illustrate with an example of a reaction that the Arrhenius definition cannot account for.",
                pHAndStrength:       "Explain why two acids with the same concentration but different Ka values have different pH values. Your answer must reference the degree of dissociation and how it relates to [H⁺].",
                buffers:             "Explain how an ethanoate buffer (CH₃COOH/CH₃COO⁻) resists pH change when (a) HCl is added and (b) NaOH is added. Write equations for both processes.",
                titrations:          "Explain why the equivalence point of a weak acid–strong base titration is above pH 7, using the concept of salt hydrolysis. Explain why phenolphthalein is appropriate and methyl orange is not."
            }
        },

        apply: {
            description: "Execute pH calculations, Ka/pKa conversions, Henderson–Hasselbalch applications, titration calculations, and indicator selection in novel problems.",
            cognitiveDemand: "Procedure execution in a new context. A common failure: knowing [H⁺] = √(Ka × c) but not verifying the approximation, or using pOH as if it equals pH for a base.",
            verbs: ["Calculate", "Determine", "Write", "Apply", "Predict", "Construct"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Calculate the pH of 0.0500 mol dm⁻³ propanoic acid given Ka = 1.34 × 10⁻⁵ mol dm⁻³' demands executing the approximation method correctly in an unfamiliar context — not recalling a pre-memorised answer.",
            examples: {
                acidBaseDefinitions: "Write the equation for the dissociation of H₂SO₄ in water. Identify the conjugate pairs in the equation HF + NH₃ ⇌ F⁻ + NH₄⁺.",
                pHAndStrength:       "Calculate the pH of: (a) 0.0500 mol dm⁻³ HNO₃; (b) 0.0200 mol dm⁻³ NaOH; (c) 0.150 mol dm⁻³ methanoic acid (Ka = 1.77 × 10⁻⁴ mol dm⁻³). Show full working including the approximation check for (c).",
                buffers:             "A buffer contains 0.300 mol dm⁻³ NH₃ and 0.200 mol dm⁻³ NH₄Cl. Given pKa(NH₄⁺) = 9.25, calculate the pH of this buffer using the Henderson–Hasselbalch equation.",
                titrations:          "25.0 cm³ of 0.120 mol dm⁻³ HCl is titrated against 0.0800 mol dm⁻³ NaOH. Calculate the volume of NaOH required to reach the equivalence point. Calculate the pH at the equivalence point."
            }
        },

        analyze: {
            description: "Interpret experimental data (titration curves, conductivity measurements, pH readings) to draw conclusions about acid strength, buffer capacity, pKa, or the identity of unknown acids.",
            cognitiveDemand: "Decomposition and inference. The student derives a conclusion from provided data that was not directly given. A key marker: the answer requires processing the data, not recalling a fact.",
            verbs: ["Deduce", "Determine", "Analyse", "Interpret", "Classify", "Identify", "Compare"],
            whatDistinguishesThisLevel: "Analyze requires working from data to conclusion. 'Given the titration curve data below, determine the pKa of the unknown acid and identify whether it is a stronger or weaker acid than ethanoic acid' cannot be answered by recalling a definition — it requires reading the half-equivalence point from the curve and comparing pKa values.",
            examples: {
                acidBaseDefinitions: "Three acids A, B, and C have Ka values of 4.5 × 10⁻², 6.2 × 10⁻⁵, and 1.8 × 10⁻¹⁰. Classify each as strong or weak. Rank in order of increasing acid strength. Predict which produces the highest [H⁺] at equal concentration.",
                pHAndStrength:       "A 0.100 mol dm⁻³ solution of acid X has pH = 3.15. Determine whether X is a strong or weak acid, calculate Ka if weak, and calculate the degree of dissociation. Compare the strength of X to ethanoic acid (Ka = 1.74 × 10⁻⁵ mol dm⁻³).",
                buffers:             "A buffer is prepared at pH 4.50 using propanoic acid (pKa = 4.87). Calculate [A⁻]/[HA] and determine whether the buffer contains more weak acid or more conjugate base. State how buffer capacity changes if the ratio is shifted further from 1:1.",
                titrations:          "From the following titration data for HA vs NaOH: at 10.0 cm³ NaOH pH = 3.86; at 20.0 cm³ NaOH pH = 4.56; at 30.0 cm³ NaOH pH = 5.14; equivalence at 40.0 cm³ NaOH. Determine pKa, Ka, and the initial concentration of HA, given NaOH concentration is 0.100 mol dm⁻³."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the suitability of a calculation method, the correctness of an indicator selection, or the adequacy of a structural argument about acid–base behaviour.",
            cognitiveDemand: "Judgement with justification. The student must state a verdict, apply a criterion, identify what is wrong and why, and provide the correct version.",
            verbs: ["Evaluate", "Critique", "Assess", "Justify", "Judge", "Appraise", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a standard against which to judge. 'A student says: methyl orange is a suitable indicator for titrating ethanoic acid with NaOH. Evaluate.' requires: identifying the error; applying the criterion (indicator pKa must match equivalence point pH); calculating or stating the equivalence point pH; explaining why methyl orange fails; and stating the correct choice.",
            examples: {
                acidBaseDefinitions: "Evaluate the claim: 'Water cannot be classified as a Brønsted–Lowry acid because it produces neither H⁺ nor OH⁻ as its primary dissociation product.' Identify whether this claim is correct and justify using the autoionisation of water.",
                pHAndStrength:       "A student calculates the pH of 0.050 mol dm⁻³ NH₃ (Kb = 1.8 × 10⁻⁵) as follows: [OH⁻] = √(1.8 × 10⁻⁵ × 0.050) = 9.5 × 10⁻⁴; pH = −log(9.5 × 10⁻⁴) = 3.02. Identify all errors in this calculation and provide the correct working and answer.",
                buffers:             "Evaluate the statement: 'A buffer solution prevents any change in pH when acid or alkali is added.' Identify the specific error in this claim, explain what buffers actually do, and describe the conditions under which a buffer's resistance to pH change fails.",
                titrations:          "A student uses methyl orange indicator for the titration of 0.100 mol dm⁻³ CH₃COOH with 0.100 mol dm⁻³ NaOH and records a titre of 18.5 cm³ against an expected 25.0 cm³. Evaluate the student's choice of indicator — explain why the titre is too small and how the incorrect indicator selection causes this systematic error."
            }
        },

        create: {
            description: "Design an experimental procedure, derive an expression from first principles, construct a multi-step argument from evidence, or plan a buffer preparation for a specified pH target.",
            cognitiveDemand: "Synthesis and original production. The student produces an output that integrates multiple concepts and cannot be answered by recalling any single fact or procedure.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Plan", "Formulate", "Develop"],
            whatDistinguishesThisLevel: "Create requires integration. 'Derive the Henderson–Hasselbalch equation from the Ka expression' requires applying −log₁₀ to the rearranged Ka equation and recognising that log([H⁺]) = −pH and −log(Ka) = pKa — no single recalled step produces this answer.",
            examples: {
                acidBaseDefinitions: "Propose a series of tests to distinguish between: (a) a strong acid and a weak acid at equal concentration; (b) an acidic, neutral, and alkaline salt solution. For each test, state the method, expected observations, and the chemical reason.",
                pHAndStrength:       "Derive the expression [H⁺] = √(Ka × c) for a weak acid from the Ka equilibrium expression, stating clearly the approximation made and the condition under which it is valid. Derive the alternative quadratic form for cases where the approximation is invalid.",
                buffers:             "Design a buffer for use in an enzyme assay that requires pH 6.80. Given pKa values of: phosphate (H₂PO₄⁻/HPO₄²⁻) = 7.20; citrate = 6.40; MES = 6.15 — select the most appropriate buffer system, calculate the required [A⁻]/[HA] ratio, and determine the mass of each component needed to prepare 500 cm³ of 0.050 mol dm⁻³ buffer.",
                titrations:          "Construct a full titration curve (sketch with annotated pH values at key points) for the titration of 25.0 cm³ of 0.100 mol dm⁻³ ethanoic acid (pKa = 4.76) with 0.100 mol dm⁻³ NaOH. Label: starting pH; half-equivalence point pH and volume; equivalence point pH and volume; post-equivalence region. Justify the pH at each labelled point with a calculation or explanation."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Confuses Ka with Kw and cannot write the Ka expression from memory",
                "States pH = −log[acid] for weak acids without recognising that [H⁺] ≠ [acid] for weak acids",
                "Describes acids as 'corrosive' or 'sour' rather than using Brønsted–Lowry definitions",
                "Cannot identify conjugate acid–base pairs in an equation",
                "Does not know the value of Kw or that it is used to find [H⁺] from [OH⁻]"
            ],
            immediateNextSteps: [
                "Memorise Ka = [H⁺][A⁻]/[HA] and Kw = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴ on two separate flashcards. Write each expression from memory 10 times. Every calculation begins by writing the relevant equilibrium expression first.",
                "For conjugate pairs: practise the rule 'conjugate pair = species differing by one H⁺'. For every reaction equation, draw arrows: one pointing from acid to conjugate base (label −H⁺), one from base to conjugate acid (label +H⁺). Do this for 10 different reactions before attempting calculations.",
                "For Kw: practise the two-step pathway: Step 1: [OH⁻] = c(base) for strong base; Step 2: [H⁺] = Kw/[OH⁻]; Step 3: pH = −log[H⁺]. Write this pathway on a card and apply it to five strong base problems before attempting weak base calculations.",
                "Build a strong acid vs weak acid comparison table: [H⁺] relative to c / Ka expression / pH calculation method / degree of dissociation. Identify the differences before attempting any pH calculation."
            ],
            misconceptionsToAddress: [
                "pH = −log[acid] for weak acids → [H⁺] ≠ [acid] for a weak acid; must use Ka and the approximation",
                "Strong acid = concentrated acid → strength and concentration are independent; a dilute HCl solution is still a strong acid (fully dissociated)",
                "Kw only applies to pure water → Kw applies to all aqueous solutions at 25°C; it is used in all strong base pH calculations"
            ]
        },

        developing: {
            characteristics: [
                "Can write Ka but inverts the ratio (writes [HA]/[H⁺][A⁻] instead of [H⁺][A⁻]/[HA])",
                "Applies [H⁺] = √(Ka × c) correctly but omits the approximation check",
                "Knows buffers 'resist pH change' but cannot write the equations for H⁺ or OH⁻ absorption",
                "Knows phenolphthalein is used for weak acid titrations but cannot explain why",
                "Confuses the half-equivalence point with the equivalence point"
            ],
            immediateNextSteps: [
                "For every weak acid pH calculation: write out ALL five steps: (1) equilibrium equation; (2) Ka expression; (3) approximation statement; (4) calculate [H⁺]; (5) check: degree of dissociation < 5%? If not, solve the quadratic. Never skip step 5.",
                "For buffer mechanism: practise writing the two equations (absorbing H⁺ and absorbing OH⁻) every time you write a buffer explanation. Labelled template: 'Added H⁺ reacts with A⁻: A⁻ + H⁺ → HA. Added OH⁻ reacts with HA: HA + OH⁻ → A⁻ + H₂O.' Reproduce these without prompting before attempting any buffer evaluation question.",
                "For titration indicator selection: always calculate or state the equivalence point pH FIRST. Then ask: 'Does this indicator change colour range include the equivalence point pH?' This logical sequence prevents the systematic error of choosing the wrong indicator.",
                "For the half-equivalence point: memorise the relationship pH = pKa at the half-equivalence point and practice reading pKa from a titration curve by identifying the volume at the midpoint of the buffer region."
            ],
            misconceptionsToAddress: [
                "Ka expression inverted → Ka = [products]/[reactants] for HA ⇌ H⁺ + A⁻: Ka = [H⁺][A⁻]/[HA]; [HA] is in the denominator",
                "Buffer 'prevents' pH change → buffers resist pH change; with sufficient acid or base addition the buffer is overwhelmed (capacity exceeded)",
                "Equivalence point always at pH 7 → only for strong acid + strong base; weak acid + strong base gives pH > 7; strong acid + weak base gives pH < 7"
            ]
        },

        proficient: {
            characteristics: [
                "Calculates pH of strong and weak acids and bases correctly with appropriate significant figures",
                "Applies Henderson–Hasselbalch correctly including cases where [A⁻]/[HA] is not 1:1",
                "Correctly selects and justifies indicator choice for all three titration types",
                "Can read pKa from a titration curve at the half-equivalence point",
                "Predicts the acidic/alkaline/neutral nature of salt solutions from parent acid/base strengths",
                "Verifies the weak acid approximation and can set up the quadratic when necessary"
            ],
            immediateNextSteps: [
                "Extend to polyprotic acid pH calculations: for H₂CO₃ (Ka₁ = 4.3 × 10⁻⁷, Ka₂ = 4.8 × 10⁻¹¹), calculate pH of 0.100 mol dm⁻³ solution using only Ka₁ (Ka₂ contribution to [H⁺] is negligible). Derive the general rule for when Ka₂ contribution can be ignored.",
                "Practise buffer capacity calculations: given an initial buffer composition, calculate the new pH after adding a specified amount of strong acid or alkali using mole balance followed by Henderson–Hasselbalch. This extends the buffer topic beyond the simple ratio calculation.",
                "Derive the Ka expression for a weak base equilibrium: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻; Kb = [NH₄⁺][OH⁻]/[NH₃]. Connect Ka and Kb via the relationship Ka × Kb = Kw at 25°C. Use this to convert between pKa(NH₄⁺) and pKb(NH₃).",
                "Practise the full titration curve construction for weak acid/strong base: calculate pH at initial point, quarter-equivalence, half-equivalence, equivalence, and 1.1× equivalence. These five calculations define the shape of the curve completely."
            ],
            misconceptionsToAddress: [
                "Ka × Kb = Kw applies only to a conjugate acid–base pair — NH₄⁺/NH₃ is a conjugate pair; Ka(NH₄⁺) × Kb(NH₃) = Kw; this does not apply to unrelated acids and bases",
                "Degree of dissociation increases on dilution for weak acids — this is counterintuitive but follows from Le Chatelier's principle; dilution shifts equilibrium right; α increases even as [H⁺] decreases"
            ]
        },

        expert: {
            characteristics: [
                "Derives Henderson–Hasselbalch from Ka without prompting",
                "Calculates buffer pH after addition of acid or alkali using mole balance then Henderson–Hasselbalch",
                "Designs buffer systems for specific biological or industrial pH targets, selecting from available weak acid/base pairs",
                "Interprets polyprotic acid titration curves with multiple equivalence points",
                "Applies Ka × Kb = Kw to interconvert Ka and Kb for conjugate pairs",
                "Analyses temperature effects on Kw (Kw increases with temperature; neutral pH is not 7 above 25°C)"
            ],
            immediateNextSteps: [
                "Investigate the effect of temperature on Kw and the definition of neutrality. At 37°C, Kw ≈ 2.4 × 10⁻¹⁴. Calculate the neutral pH at 37°C (pH = −log√Kw = 6.81). Explain why blood at pH 7.4 at 37°C is still alkaline even though the neutral pH is 6.81 at body temperature.",
                "Explore activity coefficients: the Debye–Hückel equation corrects for ion–ion interactions in concentrated solutions, which cause Ka to appear different from its thermodynamic value. For A-Level purposes, all calculations assume ideal behaviour (activity = concentration), but understanding this limitation is essential for advanced work.",
                "Calculate the pH of a salt of a weak acid and a weak base (e.g. ammonium ethanoate, NH₄CH₃COO): pH = 7 + ½(pKa(acid) − pKa(conjugate acid of base)) = 7 + ½(4.76 − 9.25) = 7 − 2.245 ≈ 4.76. This shows that even when both Ka and Kb are equal (Ka(CH₃COOH) and Kb(NH₃) both ≈ 10⁻⁵), the pH equals pKa of the acid.",
                "Derive the expression for the pH at the equivalence point of a weak acid titration in terms of Ka and c(salt): at equivalence, A⁻ hydrolyses: A⁻ + H₂O ⇌ HA + OH⁻; Khydrolysis = Kw/Ka. [OH⁻] = √(Kw × c/Ka). pH = 14 − pOH. Apply to calculate the pH at equivalence for the ethanoic acid/NaOH titration."
            ],
            misconceptionsToAddress: [
                "Neutral pH is always 7 → neutral means [H⁺] = [OH⁻], not pH = 7; at temperatures above 25°C Kw > 10⁻¹⁴ so neutral pH < 7; neutral pH is −log√Kw",
                "Buffer capacity is independent of absolute concentrations → capacity (moles of acid/base that can be neutralised before significant pH change) scales with the absolute moles of HA and A⁻; a 1.0 mol dm⁻³ buffer has 10× the capacity of a 0.1 mol dm⁻³ buffer at the same ratio"
            ]
        }
    }
},


stoichiometry: {
    knowledgeLevel: {

        remember: {
            description: "Recall definitions, formulae, constants, and procedural facts about stoichiometry without requiring explanation of why they are true.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot state n = m/M or Avogadro's constant, all higher-level stoichiometry is inaccessible.",
            verbs: ["State", "Write", "List", "Define", "Give", "Identify", "Name"],
            whatDistinguishesThisLevel: "A remember-level response states facts without causal explanation. 'The molar volume of a gas at RTP is 24.0 dm³ mol⁻¹' is remember. 'The molar volume is 24.0 dm³ mol⁻¹ because at 25°C and 1 atm, the average kinetic energy of gas molecules results in this volume per mole according to ideal gas behaviour' crosses into understand.",
            examples: {
                molesAndMass:       "State the equation linking moles, mass, and molar mass. Define the term 'limiting reagent'. Give the value of Avogadro's constant with its unit.",
                concentration:      "Write the equation linking concentration, moles, and volume. State the units of concentration in the SI system. Define the term 'standard solution'.",
                gasStoichiometry:   "State the molar volume of a gas at RTP and at STP. Write the ideal gas equation and identify each symbol and its SI unit.",
                titrations:         "State the difference between the equivalence point and the end point in a titration. Name two indicators suitable for acid-base titrations and state the colour change at the end point for each."
            }
        },

        understand: {
            description: "Explain the chemical and mathematical reasoning behind stoichiometric relationships — why the mole ratio matters, why concentration depends on volume, why limiting reagent controls yield.",
            cognitiveDemand: "The student supplies a causal link. 'Percentage yield is less than 100%' is remember. 'Percentage yield is less than 100% because of incomplete reactions, side reactions, mechanical losses during separation and purification, and product retained on glassware — factors unrelated to the stoichiometry itself' is understand.",
            verbs: ["Explain", "Justify", "Describe", "Interpret", "Connect", "Contrast"],
            whatDistinguishesThisLevel: "Understand requires mechanism or reason. Stating that atom economy = 51.1% is remember/apply. Explaining that this means 48.9% of the reactant atoms are wasted in byproduct, and that this is a fixed property of the equation regardless of conditions, is understand.",
            examples: {
                molesAndMass:       "Explain why the limiting reagent — not the excess reagent — determines the theoretical yield. Use a specific equation to illustrate, connecting the concept to mole ratios.",
                concentration:      "Explain why concentration in mol dm⁻³ must be calculated using volume in dm³ rather than cm³. Explain what error arises if this conversion is omitted.",
                gasStoichiometry:   "Explain why all gases have the same molar volume at the same temperature and pressure, regardless of their molar mass. Connect your answer to the kinetic theory of gases and Avogadro's law.",
                titrations:         "Explain why the choice of indicator affects the accuracy of a titration result, using the concepts of pH at equivalence point and indicator transition range in your answer."
            }
        },

        apply: {
            description: "Execute stoichiometric calculations correctly in novel problems — calculating moles, yields, concentrations, gas volumes, and titration results for unfamiliar substances and equations.",
            cognitiveDemand: "Procedure execution with correct units, ratio, and rounding. A common failure: knowing n = m/M but applying it with Mr (dimensionless) instead of M (in g mol⁻¹), or failing to divide cm³ by 1000.",
            verbs: ["Calculate", "Determine", "Find", "Predict", "Apply", "Convert", "Balance"],
            whatDistinguishesThisLevel: "Apply requires a novel problem. 'Calculate the theoretical yield of NaCl when 4.00 g of NaOH reacts with excess HCl' requires: calculate moles of NaOH, apply 1:1 ratio, convert to mass of NaCl — a multi-step execution the student cannot answer by recalling a definition.",
            examples: {
                molesAndMass:       "A student reacts 3.25 g of zinc with excess hydrochloric acid: Zn + 2HCl → ZnCl₂ + H₂. Calculate: (a) moles of Zn; (b) theoretical moles of H₂; (c) volume of H₂ at RTP in dm³. (Ar: Zn = 65.4)",
                concentration:      "Describe the preparation of 250 cm³ of 0.200 mol dm⁻³ NaCl solution from solid NaCl. Include: (a) the mass of NaCl required; (b) the sequence of operations; (c) the glassware used and why. (Ar: Na = 23.0, Cl = 35.5)",
                gasStoichiometry:   "2.50 g of calcium carbonate (CaCO₃) reacts completely with excess HCl: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Calculate the volume of CO₂ produced at RTP in cm³. (Ar: Ca = 40.1, C = 12.0, O = 16.0)",
                titrations:         "25.0 cm³ of H₂SO₄ (aq) required 31.20 cm³ of 0.100 mol dm⁻³ NaOH at the equivalence point. Equation: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Calculate the concentration of the H₂SO₄ solution."
            }
        },

        analyze: {
            description: "Interpret data, identify patterns, deduce unknowns, and classify reactions from experimental results — working from evidence to conclusion in stoichiometric contexts.",
            cognitiveDemand: "Decomposition and inference. The student derives a conclusion not directly given. A key marker: the student must reason from experimental results (titres, masses, volumes) rather than simply execute a formula.",
            verbs: ["Deduce", "Determine", "Identify", "Classify", "Analyse", "Interpret", "Distinguish"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence. 'A student reacts 2.00 g of an unknown metal M with excess HCl and collects 1680 cm³ of H₂ at RTP. Determine the molar mass of M.' This requires: find n(H₂), apply ratio to find n(M), calculate M from n and mass — not just formula substitution, but reasoning from type of reaction (metal + acid = salt + H₂).",
            examples: {
                molesAndMass:       "Combustion analysis of 1.00 g of an unknown compound gives 2.00 g CO₂ and 0.818 g H₂O. Determine the empirical formula and, given that Mr = 78.0, determine the molecular formula.",
                concentration:      "A student dilutes 10.0 cm³ of stock HCl solution to 500 cm³. A 25.0 cm³ sample of the diluted solution requires 22.10 cm³ of 0.100 mol dm⁻³ NaOH in a titration. Determine the concentration of the original stock HCl solution.",
                gasStoichiometry:   "A 0.500 g sample of an impure calcium carbonate rock is reacted with excess HCl and the CO₂ collected. At 25°C and 101 kPa, 94.0 cm³ of CO₂ is measured. Calculate the percentage purity of the CaCO₃ in the rock, assuming all CO₂ comes from CaCO₃.",
                titrations:         "In a back titration, 1.50 g of an impure sample of CaCO₃ is treated with 50.0 cm³ of 1.00 mol dm⁻³ HCl (excess). The mixture is filtered and 25.0 cm³ of the filtrate requires 18.80 cm³ of 0.500 mol dm⁻³ NaOH (for HCl + NaOH → NaCl + H₂O). Determine the percentage purity of CaCO₃ in the sample."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a calculation, the correctness of a method, the adequacy of experimental design, or the reasonableness of a result. The student must state a verdict, explain the criterion, and correct any errors.",
            cognitiveDemand: "Judgement with justification against an explicit criterion. Spotting a wrong answer is not sufficient — the student must explain WHY it is wrong using a chemical or mathematical standard.",
            verbs: ["Evaluate", "Critique", "Assess", "Justify", "Verify", "Appraise", "Judge"],
            whatDistinguishesThisLevel: "Evaluate requires a standard. 'A student calculates a percentage yield of 112%. Evaluate this result.' The student must: identify that >100% is physically impossible; explain the criterion (actual yield cannot exceed theoretical yield by conservation of mass); identify possible sources of error (sample not dry, wrong theoretical yield calculation, wrong actual mass).",
            examples: {
                molesAndMass:       "A student claims the limiting reagent in the reaction of 4.00 g Fe with 4.00 g S (Fe + S → FeS) is sulfur, because sulfur has a smaller molar mass. Evaluate this claim — identify the error in reasoning, perform the correct analysis, and state the actual limiting reagent. (Ar: Fe = 55.8, S = 32.1)",
                concentration:      "A student prepares a 0.100 mol dm⁻³ NaCl solution by dissolving 5.85 g of NaCl in 100 cm³ of water in a beaker, then transferring to a 1000 cm³ volumetric flask and making up to 1000 cm³. Evaluate whether this procedure produces a solution of exactly 0.100 mol dm⁻³, identifying any errors and their effect on concentration.",
                gasStoichiometry:   "A student uses pV = nRT and substitutes p = 100 kPa, V = 500 cm³, T = 25°C, R = 8.314 to calculate n. They obtain n = 0.0242 mol. Evaluate this calculation — identify all unit errors, state the correct procedure, and calculate the correct answer.",
                titrations:         "A student performs a titration of ethanoic acid (CH₃COOH) with NaOH using methyl orange as the indicator and records an end point at which the solution turns orange. Evaluate the suitability of this indicator and the reliability of the result, justifying your answer using the pH at the equivalence point of this reaction."
            }
        },

        create: {
            description: "Design an experimental method, construct a multi-step calculation strategy, propose a synthesis route, or formulate a complete analytical procedure for a novel stoichiometric problem.",
            cognitiveDemand: "Synthesis and original production integrating multiple concepts. No single recalled fact or procedure produces the output — the student must combine mole calculations, experimental technique, and chemical knowledge.",
            verbs: ["Design", "Propose", "Construct", "Plan", "Formulate", "Develop", "Derive"],
            whatDistinguishesThisLevel: "Create requires integration across multiple sub-skills. 'Design a complete experimental procedure to determine the percentage of CaCO₃ in a limestone sample, using a titration method' requires: design the sample dissolution (HCl addition), back titration plan with NaOH, choice of indicator, calculation of results including back-titration stoichiometry, and identification of sources of error.",
            examples: {
                molesAndMass:       "A manufacturer produces two industrial routes to the same compound. Route A: single step, yield 65%, atom economy 90%. Route B: two steps, individual yields 80% and 85%, atom economy of each step 70% and 95%. Construct a calculation that compares the overall percentage yield and overall atom economy of both routes and recommend which is preferable, justifying your recommendation with reference to both metrics.",
                concentration:      "Design a complete procedure to prepare 250.0 cm³ of exactly 0.0500 mol dm⁻³ sulfuric acid (H₂SO₄) from a concentrated stock solution of density 1.83 g cm⁻³ and mass fraction 0.980. Include all calculations (volume of stock to measure), apparatus choice with justification, safety precautions, and sources of uncertainty.",
                gasStoichiometry:   "Derive the relationship between the molar volume at RTP (24.0 dm³ mol⁻¹) and the ideal gas equation (pV = nRT), showing clearly what values of p and T correspond to RTP and verifying that the equation gives 24.0 dm³ mol⁻¹ under these conditions.",
                titrations:         "Design a complete back titration procedure to determine the percentage purity of an aspirin tablet (C₉H₈O₄) that also contains starch binder. Include: the principle of the back titration; all reagents and their approximate concentrations; the indicator and its justification; the calculation method from titre to percentage purity; and two sources of systematic error with their direction of effect on the result."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can state n = m/M but routinely applies it with incorrect units (using Mr as if it had units, or omitting mol⁻¹)",
                "Applies a 1:1 mole ratio by default without reading the stoichiometric coefficients from the equation",
                "Confuses mass and moles when identifying the limiting reagent — selects the reactant with the smaller mass",
                "Does not convert cm³ to dm³ before applying c = n/V",
                "Cannot distinguish between percentage yield (depends on conditions) and atom economy (depends on equation)"
            ],
            immediateNextSteps: [
                "Write n = m/M on every calculation as the first step, including units on every quantity: n (mol) = m (g) / M (g mol⁻¹). Practise this with five different compounds before attempting ratio work.",
                "After balancing any equation, immediately write the mole ratio as a fraction beneath the relevant species. Never apply a ratio without extracting it explicitly from the equation.",
                "For any limiting reagent problem: always convert both reagents to moles first; then ask 'how much of reagent B do I need to react with all of reagent A?' and compare to what is available. Never compare masses directly.",
                "Write 'cm³ → dm³: divide by 1000' at the top of every concentration calculation. Make this the first operation, before any other substitution."
            ],
            misconceptionsToAddress: [
                "The reagent with the smaller mass is always the limiting reagent → must convert to moles and compare against stoichiometric requirement",
                "All reactions have a 1:1 mole ratio → always read the coefficients from the balanced equation",
                "Concentration in mol dm⁻³ can be calculated using V in cm³ → always divide cm³ by 1000 first"
            ]
        },

        developing: {
            characteristics: [
                "Correctly calculates moles from mass and from concentration × volume; errors arise in multi-step problems when applying the ratio and converting back",
                "Can identify the limiting reagent with two reagents but struggles when three or more reactants are given",
                "Confuses percentage yield calculation with atom economy calculation",
                "Can perform a straightforward titration calculation (1:1 ratio) but applies 1:1 incorrectly for H₂SO₄ + NaOH (1:2 ratio)",
                "Applies the molar volume 24.0 dm³ mol⁻¹ without checking whether RTP conditions apply"
            ],
            immediateNextSteps: [
                "For percentage yield vs atom economy: write two separate boxed formulae and label them with what they measure. % yield: varies with conditions, measures efficiency of a specific experiment. Atom economy: fixed by the equation, measures inherent greenness. Test using one reaction: calculate both and state verbally what each number means.",
                "For non-1:1 titrations: after calculating moles of titrant, always write the mole ratio as a fraction before multiplying. e.g. n(H₂SO₄) = n(NaOH) × (1/2). Never skip this step.",
                "For gas molar volume: before using 24.0 dm³ mol⁻¹, explicitly check: 'Is this at 25°C and 1 atm?' If not, use pV = nRT. Add this check as a written annotation on every gas calculation.",
                "For three-reagent limiting problems: find the moles of each reagent, then calculate how much of reagents B and C each mole of A requires. Check which runs out first by comparing available moles against required ratios."
            ],
            misconceptionsToAddress: [
                "Percentage yield and atom economy measure the same thing → percentage yield depends on experimental efficiency; atom economy is fixed by the equation",
                "H₂SO₄ + NaOH is 1:1 → it is 1:2; H₂SO₄ has two ionisable protons",
                "24.0 dm³ mol⁻¹ applies at all conditions → it applies only at RTP (25°C, 1 atm); use pV = nRT for other conditions"
            ]
        },

        proficient: {
            characteristics: [
                "Executes all standard mole calculations (mass, concentration, gas volume, titration) correctly with appropriate units and significant figures",
                "Correctly identifies limiting reagents and calculates theoretical yield and excess reagent mass",
                "Calculates both percentage yield and atom economy correctly and can explain the difference conceptually",
                "Performs titration calculations with non-1:1 ratios correctly",
                "Can determine empirical formulae from percentage composition data",
                "Uses pV = nRT with correct SI units and can verify results against the 24.0 dm³ mol⁻¹ shortcut"
            ],
            immediateNextSteps: [
                "Extend to back titrations: practise the two-stage logic (moles added − moles remaining = moles reacted) for three different types of back titration (acid-base, redox, complexometric).",
                "Connect stoichiometry to uncertainty: calculate the percentage uncertainty in a titration result arising from the uncertainty in the burette reading (±0.05 cm³ per reading, two readings per titre) and the volumetric pipette (±0.06 cm³).",
                "Practise empirical formula from combustion data where oxygen is also present in the compound — remember to find mass of O by subtraction (m(O) = m(compound) − m(C) − m(H)) before calculating moles.",
                "Work problems involving dilution series: calculate concentrations after two or more serial dilutions, applying c₁V₁ = c₂V₂ at each step."
            ],
            misconceptionsToAddress: [
                "Empirical formula from % composition: dividing by atomic mass gives moles, not the ratio directly — must then divide each by the smallest mole value",
                "In back titrations: subtracting the sample titre from the blank (rather than blank from sample) gives a negative value — always (excess added) − (remaining) = reacted"
            ]
        },

        expert: {
            characteristics: [
                "Designs multi-step analytical procedures integrating stoichiometry with experimental technique and uncertainty analysis",
                "Derives empirical and molecular formulae from spectroscopic and combustion data simultaneously",
                "Evaluates the green credentials of industrial processes using both atom economy and percentage yield in combination",
                "Applies pV = nRT to non-ideal scenarios and discusses deviations from ideal behaviour",
                "Connects stoichiometric mole calculations to electrochemistry (Faraday's laws), thermochemistry (Hess's law scaling), and kinetics (rate calculations)"
            ],
            immediateNextSteps: [
                "Investigate the van der Waals equation (P + a/V²)(V − b) = RT as a correction to ideal gas behaviour — calculate when ideal gas assumptions introduce >1% error.",
                "Explore the concept of equivalent mass in titrimetry — why acids and bases are sometimes expressed in equivalents rather than moles — and connect to the historical development of titration before the mole concept was formalised.",
                "Derive the relationship between Faraday's constant (96485 C mol⁻¹) and Avogadro's constant via the elementary charge — connecting electrochemistry directly to the mole definition.",
                "Investigate isotope dilution mass spectrometry (IDMS) — the most accurate analytical method for determining concentration — and explain how it uses stoichiometric mole ratios of a labelled isotope spike."
            ],
            misconceptionsToAddress: [
                "Real gases behave ideally at all conditions → deviations are significant at high pressures (intermolecular attractions reduce V) and low temperatures (molecules are slower, attractions matter more)",
                "Atom economy fully captures a reaction's environmental impact → energy use, solvent waste, and feedstock renewability are not captured by atom economy alone"
            ]
        }
    }
},

dynamicEquilibrium: {
    knowledgeLevel: {

        remember: {
            description: "Recall facts about equilibrium definitions, Kc expressions, Le Chatelier's principle, and industrial conditions from memory without requiring explanation.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. A student who cannot perform at this level cannot access any higher level in this topic.",
            verbs: ["State", "Write", "List", "Define", "Give", "Identify", "Name"],
            whatDistinguishesThisLevel: "A remember-level response gives the correct fact with no causal explanation. 'Kc depends only on temperature' is remember-level. Adding 'because temperature is the only factor that alters the activation energy of the forward and reverse reactions differently' crosses into understand.",
            examples: {
                equilibriumConcept:    "Define dynamic equilibrium. State the two conditions required for a system to reach equilibrium. Write the equilibrium expression Kc for: H₂(g) + I₂(g) ⇌ 2HI(g).",
                leChatelierPrinciple:  "State Le Chatelier's principle. List the effects on equilibrium position of: (a) increasing reactant concentration; (b) increasing pressure when products have fewer gas moles; (c) increasing temperature for an exothermic forward reaction.",
                equilibriumConstant:   "Write the Kc expression for N₂(g) + 3H₂(g) ⇌ 2NH₃(g). State the units of Kc for this reaction. State which two factors do NOT change the value of Kc.",
                industrialEquilibrium: "State the temperature, pressure, and catalyst used in the Haber process. Write the equation for the Haber process, including the enthalpy change and state symbols."
            }
        },

        understand: {
            description: "Explain the chemical reasoning behind equilibrium observations — connect molecular-level dynamics to macroscopic behaviour, and connect Le Chatelier's principle to the direction of rate change.",
            cognitiveDemand: "Causal link required. 'A catalyst does not change equilibrium position' is remember. 'A catalyst lowers activation energy equally for both forward and reverse reactions, so the ratio of forward to reverse rate is unchanged, meaning the equilibrium concentrations — and therefore Kc — are identical' is understand.",
            verbs: ["Explain", "Justify", "Describe", "Contrast", "Interpret", "Connect"],
            whatDistinguishesThisLevel: "Understand requires mechanism or reason. Stating that increasing temperature shifts an exothermic equilibrium left is remember. Explaining that temperature increases the rate of the endothermic (reverse) reaction proportionally more than the exothermic (forward) reaction, because the reverse reaction has a higher activation energy relative to the new energy input, so the reverse rate exceeds the forward rate until a new equilibrium is established at lower [products] — that is understand.",
            examples: {
                equilibriumConcept:    "Explain, at the molecular level, why the concentrations of reactants and products remain constant at dynamic equilibrium even though the reaction is still proceeding in both directions.",
                leChatelierPrinciple:  "Explain why adding a catalyst to a system at equilibrium does not shift the equilibrium position or change Kc, but does allow the equilibrium to be reached more quickly.",
                equilibriumConstant:   "Explain why changing the concentration of a reactant does not change the value of Kc, using the Kc expression and the concept of equilibrium shift to support your answer.",
                industrialEquilibrium: "Explain why the Haber process uses a temperature of 450°C rather than a lower temperature such as 150°C, even though a lower temperature would give a higher yield of ammonia. Your answer must address both rate and equilibrium position."
            }
        },

        apply: {
            description: "Use Le Chatelier's principle, Kc expressions, and ICE table methodology to solve novel numerical or predictive problems.",
            cognitiveDemand: "Procedure execution in a new context. A common failure: writing the Kc expression with concentrations multiplied by coefficients rather than raised to the power of coefficients.",
            verbs: ["Calculate", "Predict", "Write", "Apply", "Determine", "Construct", "Use"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Calculate Kc given equilibrium concentrations' requires setting up the expression correctly, substituting the right values, computing, and determining units — none of which is produced by memorising a definition.",
            examples: {
                equilibriumConcept:    "A closed vessel contains SO₂, O₂, and SO₃ at equilibrium at 450°C. Predict the effect on the equilibrium position and on [SO₃] of: (a) adding more SO₂; (b) removing O₂; (c) halving the volume of the vessel (doubling the pressure). Justify each prediction.",
                leChatelierPrinciple:  "For the reaction PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)  ΔH = +88 kJ mol⁻¹: predict the effect on yield of PCl₃ of (a) increasing temperature; (b) increasing pressure; (c) adding a catalyst. For each, state whether Kc changes and justify your answer.",
                equilibriumConstant:   "At 500°C, 0.200 mol H₂ and 0.200 mol I₂ are placed in a 1.00 dm³ flask. At equilibrium, [HI] = 0.320 mol dm⁻³. Using an ICE table, calculate Kc for H₂(g) + I₂(g) ⇌ 2HI(g) and determine its units.",
                industrialEquilibrium: "Using the data: cyclohexene + H₂ ⇌ cyclohexane ΔH = −120 kJ mol⁻¹, predict the effect on Kc of raising the temperature from 25°C to 150°C. State whether the yield of cyclohexane increases or decreases and justify your answer using the sign of ΔH."
            }
        },

        analyze: {
            description: "Decompose experimental data, Kc values, or equilibrium mixtures to draw conclusions not directly given — deduce ΔH sign from Kc–temperature data, identify equilibrium position from Kc magnitude, or determine reaction direction from non-equilibrium concentrations.",
            cognitiveDemand: "Inference from evidence. The conclusion is not given and requires reasoning from provided data.",
            verbs: ["Deduce", "Determine", "Analyse", "Classify", "Interpret", "Distinguish", "Identify"],
            whatDistinguishesThisLevel: "Analyse requires working from evidence to conclusion. 'Given that Kc increases as temperature rises, determine whether the forward reaction is exo- or endothermic' requires the student to reason: increasing T increases Kc → products more favoured at higher T → system shifts right when T increases → endothermic direction is right → forward reaction is endothermic — ΔH > 0.",
            examples: {
                equilibriumConcept:    "The following Kc values are given for a reaction at different temperatures: 300 K: Kc = 2.4 × 10⁻³; 400 K: Kc = 8.7 × 10⁻²; 500 K: Kc = 1.9. Analyse this data to determine: (a) whether the forward reaction is exothermic or endothermic; (b) at which temperature reactants are most favoured; (c) the qualitative effect on yield of cooling the reaction mixture.",
                leChatelierPrinciple:  "A student mixes 0.500 mol dm⁻³ N₂, 1.500 mol dm⁻³ H₂, and 0.200 mol dm⁻³ NH₃ in a vessel at 450°C. The Kc at 450°C is 0.0602 mol⁻² dm⁶. Calculate the reaction quotient Q and determine whether the system will shift left, right, or is already at equilibrium. Show all working.",
                equilibriumConstant:   "Three reactions have the following Kc values at 25°C: Reaction 1: Kc = 1.8 × 10⁻⁵; Reaction 2: Kc = 3.4 × 10⁸; Reaction 3: Kc = 1.2. Analyse what each value implies about the equilibrium composition and classify each as: (a) effectively goes to completion; (b) effectively does not proceed; (c) mixture of reactants and products present.",
                industrialEquilibrium: "The yield of NH₃ per pass in the Haber process at different conditions is: 200 atm/450°C: 15%; 200 atm/350°C: 30%; 400 atm/450°C: 25%. Analyse these data to explain: (a) why lowering temperature increases yield at constant pressure; (b) why increasing pressure at constant temperature increases yield; (c) why 350°C and 200 atm are not used industrially despite giving higher yield than 450°C and 200 atm."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the correctness of a Kc calculation, or the adequacy of reasoning about equilibrium. The student must state a verdict, explain the criterion, and correct any error.",
            cognitiveDemand: "Judgement with justification. Identifying an error alone is not evaluate-level — the student must state what is wrong, why it is wrong by which criterion, and what would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Justify", "Appraise", "Verify", "Judge"],
            whatDistinguishesThisLevel: "Evaluate requires a standard against which to judge. 'A student claims adding a catalyst to the Haber process shifts equilibrium right and increases yield. Evaluate.' The student must: (a) identify the claim is incorrect; (b) apply the criterion (catalyst lowers Ea equally for both reactions; does not change Kc); (c) state what the catalyst actually does (speeds up equilibrium attainment); (d) explain why yield is unchanged.",
            examples: {
                equilibriumConcept:    "Evaluate the following statement: 'At dynamic equilibrium, the reaction has stopped because the concentrations of reactants and products are no longer changing.' Identify the specific conceptual error, explain what dynamic equilibrium actually means at the molecular level, and state what evidence (e.g. isotopic labelling) demonstrates that reaction continues at equilibrium.",
                leChatelierPrinciple:  "A student writes: 'Increasing the pressure in the Haber process increases the value of Kc, which is why more ammonia is produced.' Evaluate this statement — identify all errors, state what actually changes when pressure is increased, and explain why the yield increases without any change to Kc.",
                equilibriumConstant:   "A student calculates Kc for CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O as follows: Kc = (0.667 × 2) × (0.667 × 2) / (0.333 × 1) × (0.333 × 1) = 16. Evaluate this calculation — identify the error the student has made, explain the correct method, and calculate the correct value of Kc.",
                industrialEquilibrium: "Evaluate the claim: 'The Haber process should be run at the lowest possible temperature to maximise both yield and rate of ammonia production.' Identify all errors in this claim, explain the rate–yield trade-off quantitatively (using Arrhenius reasoning), and state the actual compromise temperature used and why."
            }
        },

        create: {
            description: "Generate an original output — design an experiment to determine Kc, construct a logical argument for optimal industrial conditions, derive an equilibrium expression for an unfamiliar reaction, or formulate a multi-variable analysis of a novel industrial process.",
            cognitiveDemand: "Synthesis and original production integrating multiple concepts. No single recalled fact or procedure produces the answer.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Plan", "Formulate", "Develop"],
            whatDistinguishesThisLevel: "Create requires integration. 'Design an experiment to determine Kc for the esterification of ethanoic acid with ethanol at 60°C' requires the student to: specify initial conditions and volumes; identify how to measure the equilibrium concentration of one species (e.g. titration of remaining acid); construct the ICE table to find all equilibrium concentrations; write the Kc expression; perform the calculation; consider sources of error. No single recalled procedure produces this.",
            examples: {
                equilibriumConcept:    "Construct a detailed argument — using rate theory, the concept of dynamic equilibrium, and the mathematical form of Kc — that explains why the equilibrium position (concentrations) changes when a reactant is added, but Kc does not. Your argument must include a worked numerical example using a simple Kc expression.",
                leChatelierPrinciple:  "Design an experiment using the chromate–dichromate equilibrium (CrO₄²⁻/Cr₂O₇²⁻) to demonstrate Le Chatelier's principle to a class. Specify: reagents; procedure; expected observations for addition of acid and base; controls; and how you would explain each colour change mechanistically to students.",
                equilibriumConstant:   "Derive a general expression for the equilibrium yield (as a fraction of maximum possible) for a 1:1:1:1 equilibrium system (A + B ⇌ C + D) in terms of Kc, given equal initial concentrations of A and B. Show all algebraic steps. Then plot (mentally or numerically) how yield varies as Kc increases from 0.1 to 100, and identify the Kc value at which yield exceeds 90%.",
                industrialEquilibrium: "Formulate a complete analysis of the optimal conditions for the Contact process (2SO₂ + O₂ ⇌ 2SO₃, ΔH = −196 kJ mol⁻¹), including: (a) the temperature choice and rate–yield trade-off; (b) the pressure choice and why it differs from the Haber process; (c) the catalyst choice and mechanism; (d) the SO₃ absorption method and why water is not used directly. For each decision, state the relevant principle (Le Chatelier, kinetics, safety, economics) and justify the choice."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Describes equilibrium as 'the reaction has stopped' — the static misconception",
                "Cannot write a Kc expression from a balanced equation",
                "States Le Chatelier's principle but applies it incorrectly (e.g. 'adding reactant increases rate so equilibrium shifts right' without understanding the mechanism)",
                "Confuses the effect on Kc with the effect on equilibrium position — states that adding reactant changes Kc",
                "Cannot identify which side of an equilibrium has more moles of gas to apply pressure arguments"
            ],
            immediateNextSteps: [
                "Replace 'reaction stops at equilibrium' with 'forward rate = reverse rate' in every written response. Practice drawing a rate-time graph showing forward rate decreasing and reverse rate increasing until they meet — this visual encodes the dynamic nature.",
                "Practise writing Kc expressions for 10 different equations before attempting any Le Chatelier questions. The skill of reading stoichiometric coefficients as powers must be automatic.",
                "Build a Le Chatelier decision flowchart: (1) What is being changed? (2) Is the changed species a reactant or product? (3) Which direction does equilibrium shift? (4) Does Kc change? Answer step 4 with 'only if temperature changes' every time.",
                "Make a 'Kc changes only with temperature' flashcard and test it daily for one week until the association is automatic."
            ],
            misconceptionsToAddress: [
                "Equilibrium = reaction stopped → always write 'forward rate = reverse rate; reaction continues in both directions'",
                "Adding reactant changes Kc → Kc changes only with temperature; adding reactant shifts position but Kc is constant",
                "Catalyst shifts equilibrium right → catalyst only affects rate; both forward and reverse rates increase equally"
            ]
        },

        developing: {
            characteristics: [
                "Writes Kc expressions correctly for simple equations but makes errors with non-unit stoichiometry or forgets to exclude solids",
                "Applies Le Chatelier's principle to concentration and temperature correctly but makes errors with pressure (e.g. applies pressure shift to reactions with equal gas moles)",
                "States that temperature changes Kc but cannot correctly predict whether Kc increases or decreases for a given ΔH",
                "Sets up an ICE table but makes arithmetic errors or uses initial concentrations in the Kc expression",
                "Explains the Haber process conditions qualitatively but cannot connect the explanation to Kc values or quantitative yield data"
            ],
            immediateNextSteps: [
                "For pressure questions: always count gas moles on each side FIRST before applying any Le Chatelier argument. Write the count explicitly. If equal moles, write 'no effect' and stop.",
                "For temperature and Kc direction: use the mnemonic 'Exothermic = heat is a product; adding heat (increase T) shifts LEFT = Kc decreases'. Apply this as a two-step check: (1) is ΔH negative (exothermic) or positive (endothermic)? (2) does increasing T shift toward or away from products?",
                "For ICE tables: always label the three rows I, C, E explicitly. Circle the equilibrium row. Never substitute values from any other row into Kc. Check by computing Kc with your E values and verifying it matches the given Kc.",
                "Practise five ICE table calculations from scratch weekly until the method is automatic. Target: complete a standard Kc calculation in under 6 minutes."
            ],
            misconceptionsToAddress: [
                "Pressure shifts equilibrium even when gas moles are equal → always count moles of gas on each side first; equal moles = no pressure effect",
                "Increasing T always decreases Kc → only true for exothermic forward reactions; for endothermic forward reactions, increasing T increases Kc",
                "ICE table C row uses the coefficient value directly → C row values are calculated from the stoichiometric ratio multiplied by the change in the reference species"
            ]
        },

        proficient: {
            characteristics: [
                "Writes and evaluates Kc expressions correctly including units for any stoichiometry",
                "Completes ICE table calculations accurately, including solving quadratic equations when the simplification x << initial concentration is not valid",
                "Correctly predicts the direction and magnitude of equilibrium shifts for all perturbations including combined changes",
                "Explains the Haber and Contact process compromise conditions using both thermodynamic (Kc, ΔH) and kinetic (activation energy, rate) arguments",
                "Can calculate the reaction quotient Q and compare it to Kc to predict direction of shift"
            ],
            immediateNextSteps: [
                "Extend to heterogeneous equilibria: write Kc expressions for reactions involving solids and liquids, explaining why these species are excluded (constant activity).",
                "Practise combined-change questions: 'temperature is increased AND pressure is decreased — predict the effect on equilibrium position and on Kc.' These require two independent Le Chatelier analyses and a combined conclusion.",
                "Learn the relationship between Kc and Kp (where Kp uses partial pressures): Kp = Kc(RT)^Δn where Δn = moles of gas on product side minus reactant side. Apply to the Haber and Contact processes.",
                "Practise Q vs Kc comparison questions: given non-equilibrium concentrations, calculate Q, compare to Kc, and state whether reaction proceeds left or right and by how much."
            ],
            misconceptionsToAddress: [
                "Solids are included in Kc expressions → pure solids and liquids are excluded because their 'concentrations' are constant and incorporated into Kc",
                "Q = Kc means the reaction has stopped → Q = Kc means equilibrium has been reached; the reaction continues dynamically"
            ]
        },

        expert: {
            characteristics: [
                "Derives Kc expressions from first principles using chemical potential and the relationship ΔG° = −RT ln Kc",
                "Interprets the temperature dependence of Kc using the van't Hoff equation: d(ln Kc)/dT = ΔH°/RT²",
                "Analyses multi-step industrial processes (Haber, Contact, steam reforming) as integrated systems with multiple coupled equilibria",
                "Designs novel reaction schemes selecting conditions to exploit Le Chatelier's principle for maximum yield",
                "Connects equilibrium constant to Gibbs free energy: ΔG = ΔG° + RT ln Q; at equilibrium ΔG = 0, Q = Kc, so ΔG° = −RT ln Kc"
            ],
            immediateNextSteps: [
                "Derive the van't Hoff equation from the Gibbs–Helmholtz equation and use it to calculate how Kc changes with temperature given ΔH°. Apply to the Haber process to predict Kc at 500°C given Kc at 450°C and ΔH = −92 kJ mol⁻¹.",
                "Investigate coupled equilibria: in the steam reforming of methane (CH₄ + H₂O ⇌ CO + 3H₂), the water-gas shift reaction (CO + H₂O ⇌ CO₂ + H₂) operates simultaneously. Analyse how Le Chatelier's principle applies to the coupled system.",
                "Connect Kc to ΔG°: for the Haber process at 298 K, Kc ≈ 6 × 10⁵. Calculate ΔG° using ΔG° = −RT ln Kc and interpret its sign and magnitude.",
                "Explore the concept of activity and why concentrations are used as approximations: true thermodynamic Kc is expressed in terms of dimensionless activities (concentration / standard concentration), explaining why Kc is formally dimensionless in rigorous thermodynamics."
            ],
            misconceptionsToAddress: [
                "Kc has fixed units determined by the reaction → in rigorous thermodynamics, Kc is dimensionless (activities are dimensionless ratios); the apparent units arise from the approximation of using concentrations directly",
                "Le Chatelier's principle is a fundamental law → it is a heuristic derived from the more fundamental thermodynamic requirement that systems minimise Gibbs free energy; Le Chatelier's principle is a consequence of thermodynamics, not an independent postulate"
            ]
        }
    }
},


hydrocarbons: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about hydrocarbon classification, formulae, naming rules, and reaction conditions from memory without requiring explanation of why they are true.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot do this, they cannot access higher levels.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Give"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'The general formula for alkanes is CₙH₂ₙ₊₂' is remember-level. Adding 'because each carbon forms 4 bonds and...' crosses into understand.",
            examples: {
                hydrocarbonBasics: "State the general formula for alkanes. Name the first four members of the alkane homologous series.",
                alkaneReactivity:  "State the three stages of free-radical substitution. Write the overall equation for the chlorination of methane.",
                alkeneCycloalkane: "List four reagents that undergo addition reactions with alkenes. State the conditions for each.",
                aromaticity:       "State what is meant by delocalisation in benzene. Write the equation for the nitration of benzene, including all reagents and conditions.",
                nomenclature:      "Give the IUPAC names of: (a) C₄H₁₀ straight chain; (b) an alkane with a methyl branch at C2 on a propane chain."
            }
        },

        understand: {
            description: "Explain the chemical reasons behind observations — connect structure to reactivity, mechanism to product, and molecular forces to physical properties.",
            cognitiveDemand: "The student must supply a causal link. 'Benzene undergoes substitution' is remember. 'Benzene undergoes substitution rather than addition because addition would destroy the delocalised π system and lose 152 kJ/mol of stabilisation energy, which is thermodynamically unfavourable' is understand.",
            verbs: ["Explain", "Justify", "Describe", "Contrast", "Interpret", "Connect"],
            whatDistinguishesThisLevel: "Understand requires the mechanism or reason. Stating that bromine water decolourises with alkenes is remember. Explaining that the electron-rich π bond acts as a nucleophile and donates to the electrophilic Br₂, causing addition across the double bond and decolourisation, is understand.",
            examples: {
                hydrocarbonBasics: "Explain why 2-methylbutane has a lower boiling point than pentane despite having the same molecular formula. Your answer must reference intermolecular forces and molecular geometry.",
                alkaneReactivity:  "Explain why alkanes do not react with bromine water at room temperature in the dark, but do react when UV light is shone on a mixture of alkane and Br₂ vapour. Reference the bond type in alkanes and the initiation step.",
                alkeneCycloalkane: "Explain why alkenes decolourise bromine water but cycloalkanes do not, even though both contain ring or chain carbon frameworks.",
                aromaticity:       "Explain why benzene reacts by electrophilic aromatic substitution rather than electrophilic addition, despite containing six π electrons. Your answer must reference delocalisation energy and thermodynamics.",
                nomenclature:      "Explain why IUPAC rules require numbering the carbon chain from the end nearest a substituent, rather than from either end arbitrarily."
            }
        },

        apply: {
            description: "Use nomenclature rules, mechanism templates, equations, and concepts to solve novel problems — naming unfamiliar structures, drawing mechanisms, balancing equations, or predicting products.",
            cognitiveDemand: "Procedure execution in a new context. The student selects the right approach and carries it through correctly. A common failure: knowing the mechanism but placing curly arrows in the wrong direction.",
            verbs: ["Name", "Draw", "Balance", "Predict", "Write", "Apply", "Calculate"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Write the mechanism for HBr addition to propene' requires drawing curly arrows correctly, identifying the two possible carbocations, applying Markovnikov's rule to select the major product, and writing the product structure — output that cannot be produced by memorising a definition.",
            examples: {
                hydrocarbonBasics: "Name the following compound using IUPAC rules: CH₃–CH(CH₂CH₃)–CH₂–CH₂–CH₃. Show your working (longest chain, numbering, substituent identification).",
                alkaneReactivity:  "Write the full mechanism for the free-radical bromination of propane under UV light, including all initiation, propagation, and termination steps. State which propagation step produces the major product and identify all possible termination products.",
                alkeneCycloalkane: "Draw the full curly arrow mechanism for the addition of HBr to but-1-ene. Identify the major and minor products, explaining your choice using carbocation stability.",
                aromaticity:       "Draw the full curly arrow mechanism for the nitration of benzene, beginning with the generation of the nitronium ion. Include all intermediates and show restoration of aromaticity.",
                nomenclature:      "Draw the structural formula of 2-methylpentane and 3-methylpentane. Circle the longest carbon chain in each. Explain why the name '2-methylpentane' is correct and '4-methylpentane' for the same molecule is incorrect."
            }
        },

        analyze: {
            description: "Break down experimental data, reaction outcomes, or structural information to draw conclusions not directly given. Identify patterns, deduce structure from evidence, or determine reaction type from observation.",
            cognitiveDemand: "Decomposition and inference. The student derives a conclusion from evidence. A key marker: the conclusion was not given and requires reasoning from provided data.",
            verbs: ["Deduce", "Identify", "Classify", "Analyse", "Determine", "Distinguish", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given that compound X decolourises bromine water but does not decolourise permanganate, determine what functional group is present' requires the student to reason from two pieces of evidence — not recall a fact.",
            examples: {
                hydrocarbonBasics: "Three alkane isomers of C₆H₁₄ have boiling points: hexane 69°C, 2-methylpentane 60°C, 2,2-dimethylbutane 50°C. Analyse the trend and identify the structural feature that correlates with decreasing boiling point. Explain the underlying intermolecular force argument.",
                alkaneReactivity:  "A reaction between methane and excess Cl₂ under UV light produces a mixture of CH₃Cl, CH₂Cl₂, CHCl₃, and CCl₄. Analyse why multiple products form and identify which propagation sequences lead to CH₂Cl₂. Explain how termination steps account for the presence of traces of ethane in the product mixture.",
                alkeneCycloalkane: "An unknown compound C₄H₈ decolourises bromine water rapidly and shows geometric isomerism. Deduce the structure, explain why it shows geometric isomerism, and draw both geometric isomers.",
                aromaticity:       "The enthalpy of hydrogenation of benzene is −208 kJ/mol, while cyclohex-1,3,5-triene (theoretical) would be −360 kJ/mol. Analyse this data to calculate the delocalisation energy of benzene and explain what this value reveals about the bonding in benzene compared to a Kekulé structure.",
                nomenclature:      "A student names the compound CH₃–C(CH₃)₂–CH₂–CH₃ as '2-methylbutane'. Analyse whether this name is correct. If incorrect, identify the error, explain the correct IUPAC analysis, and provide the correct name."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the adequacy of evidence, the suitability of a mechanism, or the correctness of reasoning. The student must state a verdict, explain the criterion by which it is judged, and correct errors.",
            cognitiveDemand: "Judgement with justification. Simply identifying an error without explaining the criterion is not evaluate-level. The student must state WHAT is wrong, WHY it is wrong, and WHAT would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Justify", "Judge", "Appraise", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a standard against which to judge. 'A student claims benzene has three C=C double bonds and will decolourise bromine water. Evaluate.' The student must: identify the claim is incorrect; apply the criterion (delocalised structure, thermochemical evidence); state what benzene actually does; and explain what structural model accounts for the observation.",
            examples: {
                hydrocarbonBasics: "Evaluate the claim: 'All isomers of C₅H₁₂ have the same boiling point because they have the same molecular formula and therefore the same London dispersion forces.' Identify the specific error in this reasoning and provide a corrected explanation with reference to molecular shape.",
                alkaneReactivity:  "A student draws the propagation step of chlorination as: CH₃• + Cl₂ → CH₃Cl₂. Evaluate this student's equation — identify whether the species on each side are chemically reasonable, state what the error is, and write the correct equation.",
                alkeneCycloalkane: "Evaluate the statement: 'The major product of HBr addition to propene is 1-bromopropane because H adds to C1 and Br adds to C2, following the alphabetical rule.' Identify all errors in this claim, state Markovnikov's rule correctly, and justify the correct major product using carbocation stability.",
                aromaticity:       "A student states: 'Benzene can be represented as cyclohexatriene with three alternating double bonds.' Evaluate this model — state two specific pieces of evidence that contradict it and explain what structural model better accounts for each piece of evidence.",
                nomenclature:      "Evaluate the following IUPAC name: '4-methylpentane.' Identify the error in applying the lowest locant rule, state the correct name for the compound, and explain the rule that was violated."
            }
        },

        create: {
            description: "Generate an original output: design a synthesis route, construct an experimental method to distinguish compounds, derive a mechanism for an unseen reaction, or formulate a structural argument from first principles.",
            cognitiveDemand: "Synthesis and original production. The student produces something that requires integrating multiple concepts and cannot be answered by recalling any single fact or procedure.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Plan", "Formulate", "Develop"],
            whatDistinguishesThisLevel: "Create requires integration. 'Design a two-step synthesis of 2-bromopropane from propane' requires the student to: recognise propane must first be dehydrogenated or cracked to propene; then apply electrophilic addition of HBr with Markovnikov regioselectivity. No single recalled fact produces this answer.",
            examples: {
                hydrocarbonBasics: "Propose a series of simple chemical tests that would allow you to distinguish between hexane, hex-1-ene, and benzene — three colourless liquids. For each test, state the reagent, expected observation for each compound, and the chemical reason for each observation.",
                alkaneReactivity:  "Design an experiment to determine whether the chlorination of propane by UV light produces predominantly 1-chloropropane or 2-chloropropane. Include: the experimental setup, how you would separate and identify the products, what you would expect to find, and how the relative stability of primary vs secondary radicals would explain the result.",
                alkeneCycloalkane: "Derive the full mechanism for the addition of Cl₂ to cyclohexene, proposing a cyclic halonium ion intermediate rather than an open carbocation. Explain what stereochemical prediction follows from a cyclic intermediate (anti addition) and how you would test this prediction experimentally.",
                aromaticity:       "Formulate a logical argument — from first principles of bonding and thermodynamics — that explains why benzene cannot be represented as cyclohexatriene, cannot undergo electrophilic addition, and must instead react by substitution. Your argument must use at least three independent lines of evidence.",
                nomenclature:      "Construct a decision-tree algorithm that a student could follow to correctly assign IUPAC names to any branched alkane with up to 8 carbons. The algorithm must resolve: (a) how to find the longest chain; (b) how to number the chain; (c) how to name and position substituents; (d) how to handle multiple identical substituents. Test your algorithm on two worked examples."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the first four alkanes (methane to butane) but struggles beyond butane",
                "Knows alkenes have a double bond but cannot explain what sp² hybridisation means",
                "Can write the overall equation for free-radical substitution but cannot draw the three-stage mechanism",
                "Describes benzene as 'having three double bonds' — the Kekulé error",
                "Confuses conditions: does not know that free-radical substitution requires UV light specifically"
            ],
            immediateNextSteps: [
                "Memorise the 10 chain-length prefixes (meth- through dec-) using a mnemonic before attempting any naming. Do not proceed to branched naming until the parent names are automatic.",
                "Draw the free-radical mechanism for methane + Cl₂ in three labelled boxes (initiation / propagation × 2 / termination × 3). Label each curly arrow with 'homolytic' or 'heterolytic'. Reproduce this without notes until automatic.",
                "Replace 'benzene has three double bonds' with a drawn delocalised structure (circle in ring) every time you write benzene. Never draw alternating bonds. The habit of correct representation removes the misconception.",
                "Build a conditions table: reaction type / reagents and conditions / product — for combustion, free-radical substitution, and the four addition reactions of alkenes. Fill every cell before starting mechanism practice."
            ],
            misconceptionsToAddress: [
                "Benzene has three double bonds → always draw delocalised circle",
                "Free-radical substitution happens at room temperature in light → UV light is specifically needed for initiation (homolytic fission of X₂)",
                "Alkenes and cycloalkanes both react with bromine water → only alkenes (π bond present); cycloalkanes are saturated"
            ]
        },

        developing: {
            characteristics: [
                "Can name straight-chain alkanes and alkenes correctly; struggles with multiple substituents or alphabetical ordering",
                "Can write the initiation and first propagation step but omits termination or writes only one termination equation",
                "Applies Markovnikov's rule by rote ('H goes to the carbon with more Hs') but cannot explain it via carbocation stability",
                "Knows benzene undergoes substitution but cannot draw the arenium ion intermediate or explain why proton loss restores aromaticity",
                "Confuses the conditions for different addition reactions (e.g. states Ni catalyst for HBr addition)"
            ],
            immediateNextSteps: [
                "For Markovnikov's rule: always draw BOTH possible carbocations before selecting the product. Label each as primary, secondary, or tertiary. State why secondary > primary stability (alkyl groups donate electron density). Only then write the product.",
                "For the nitration mechanism: practise the three steps independently until each is automatic: (1) generate NO₂⁺; (2) ring attacks NO₂⁺ → arenium ion; (3) H⁺ lost → aromaticity restored. Never skip step 1.",
                "For termination steps: always write all three possible termination equations. Make a habit: after writing the two propagation steps, always ask 'what are the two radical species present?' and write all three pair combinations.",
                "Build a conditions grid specifically for alkene addition: reaction type / reagents / temperature/pressure / catalyst / product. Cover and reproduce weekly. No mechanism work until conditions are memorised."
            ],
            misconceptionsToAddress: [
                "Markovnikov's rule as a memorised rule without mechanistic basis → always justify via carbocation stability",
                "Arenium ion drawn as a fully aromatic ring → the arenium ion has one sp³ carbon and is NOT aromatic at that step",
                "Only one termination equation written → all three radical combination possibilities must be stated"
            ]
        },

        proficient: {
            characteristics: [
                "Names branched alkanes and alkenes fluently, including alphabetical ordering of substituents and correct lowest-locant numbering",
                "Draws complete free-radical and electrophilic addition mechanisms with correct curly arrow direction and intermediate structures",
                "Correctly draws and interprets the full EAS nitration mechanism including arenium ion structure",
                "Explains benzene's stability using delocalisation energy and thermochemical evidence",
                "Can identify geometric isomers correctly and explain the structural requirement",
                "Can predict combustion products and balance equations including fractional O₂ coefficients"
            ],
            immediateNextSteps: [
                "Extend electrophilic addition to bromonium ion mechanism for Br₂ addition — explain why anti addition is observed and connect to the cyclic intermediate.",
                "Connect hydrocarbon reactions to industrial context: write the cracking equation for a specific long-chain alkane, calculate the degree of unsaturation of the products, and identify which are suitable for polymerisation.",
                "Work through directing effects of substituents on EAS: predict whether –CH₃ or –NO₂ on a ring directs an incoming electrophile to ortho/para or meta, using the electronic argument (activating vs deactivating).",
                "Practise multi-step naming problems with two or more different substituents, applying alphabetical ordering and verifying the lowest locant rule applies to the full set of substituents collectively."
            ],
            misconceptionsToAddress: [
                "Anti addition vs syn addition — bromonium ion mechanism gives anti product; catalytic hydrogenation gives syn product (both H atoms from same Ni surface face)",
                "Activating vs deactivating substituents — electron-donating groups activate benzene ring (react faster than benzene); electron-withdrawing groups deactivate (react slower)"
            ]
        },


        expert: {
            characteristics: [
                "Derives general formulae for each hydrocarbon class from first principles of carbon valency",
                "Designs multi-step synthesis routes from a hydrocarbon starting material to a specified product",
                "Analyses reaction mixtures (product distribution in free-radical substitution, regioselectivity in addition) quantitatively using radical or carbocation stability arguments",
                "Evaluates published structural evidence (bond lengths, thermochemical data) for benzene's structure",
                "Applies Hückel's rule to predict aromaticity beyond benzene (naphthalene, pyridine, furan)"
            ],
            immediateNextSteps: [
                "Investigate the Hammond postulate — in endothermic steps (like carbocation formation), the transition state resembles the product; therefore tertiary carbocation stability directly reflects transition state stability. Apply this to explain why Markovnikov addition is kinetically controlled.",
                "Explore radical stability: tertiary > secondary > primary radicals, mirroring carbocation stability. Use this to predict the major product of free-radical halogenation of isobutane, where secondary and primary H atoms are present in unequal numbers.",
                "Connect hydrocarbon chemistry to spectroscopy: predict the ¹H NMR chemical shifts for benzene vs cyclohexane vs cyclohexene and explain the differences using ring current (aromatic) and π electron effects.",
                "Derive the degree of unsaturation (index of hydrogen deficiency) formula: DoU = (2C + 2 + N − H − X)/2. Apply to molecular formulae to predict the number of rings + double bonds before drawing a structure."
            ],
            misconceptionsToAddress: [
                "Markovnikov's rule as purely kinetic vs thermodynamic control → for HBr addition under normal conditions, the reaction is kinetically controlled (determined by activation energy of carbocation formation, not product stability)",
                "Radical halogenation selectivity: bromine is far more selective than chlorine (Br• is less reactive, more discriminating between primary, secondary, tertiary C–H bonds) — this is an important distinction for A-Level and beyond"
            ]
        }
    }
}

};


const EndSection5 = "close"