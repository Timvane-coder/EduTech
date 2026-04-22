

cellularRespiration: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about cellular respiration from memory without requiring understanding of mechanisms or connections. The student reproduces accurate information without yet being expected to explain why it is true.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. A student who cannot yet do this cannot access any higher level.",
            verbs: ["State", "List", "Name", "Identify", "Write", "Label", "Define"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'Glycolysis produces 2 net ATP and 2 NADH' is remember-level. 'Glycolysis produces 2 net ATP and 2 NADH because 4 ATP are produced but 2 are consumed in the investment phase' begins to cross into understand.",
            examples: {
                respirationBasics:  "State the four stages of aerobic respiration in order. For each, name its location in the cell.",
                glycolysis:         "List the net products of glycolysis per glucose molecule. State the location of glycolysis.",
                krebs:              "Write the products generated per turn of the Krebs cycle. State how many times it turns per glucose.",
                electronTransport:  "Name the four complexes of the ETC. For each, identify whether it pumps protons and how many.",
                anaerobicFermentation: "Name the two types of fermentation. For each, state the organism, the products, and the net ATP yield."
            }
        },

        understand: {
            description: "Explain the meaning behind facts — connect cause to effect, explain the purpose of each stage, and interpret why the process is organised as it is. The student must demonstrate they know WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. The student paraphrases, connects, or explains rather than repeating. A correct causal explanation the student could not have produced by memorising the question-answer pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or reason. 'FADH2 produces less ATP than NADH' is remember. 'FADH2 produces less ATP than NADH because its electrons enter the ETC at Complex II, which does not pump protons — so fewer protons are pumped per electron pair, generating a smaller gradient contribution' is understand.",
            examples: {
                respirationBasics:  "Explain why O2 is described as the final electron acceptor rather than a substrate, and clarify at which point in aerobic respiration it is consumed.",
                glycolysis:         "Explain why glycolysis has an investment phase that consumes ATP before producing it — what is achieved by phosphorylating glucose before splitting it?",
                krebs:              "Explain why the Krebs cycle is considered the hub of metabolism, not merely a source of ATP — reference its role in generating biosynthetic precursors and electron carriers.",
                electronTransport:  "Explain the chemiosmotic mechanism in full: how does electron transport lead to ATP synthesis? Your answer must describe the roles of both the ETC and ATP synthase and the proton gradient connecting them.",
                anaerobicFermentation: "Explain why fermentation does not produce ATP directly, yet is essential for ATP production in anaerobic conditions. Your answer must explain the role of NAD+ regeneration."
            }
        },

        apply: {
            description: "Use known equations, rules, and concepts to solve a novel problem. The student selects the correct framework and executes it in a context not seen before in exactly this form.",
            cognitiveDemand: "Procedure execution in a novel situation. The student decides which concept applies, sets it up correctly, and produces a numerical answer, sketch, or specific prediction.",
            verbs: ["Calculate", "Determine", "Predict", "Apply", "Sketch", "Use", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Calculate total ATP from a given NADH and FADH2 count' requires correct application of P/O ratios to numbers the student has not seen before. 'Explain what NADH is' is understand, not apply.",
            examples: {
                respirationBasics:  "Calculate the total ATP yield from complete aerobic oxidation of one glucose, showing your working by stage. Use the modern P/O ratios (2.5 per NADH, 1.5 per FADH2).",
                glycolysis:         "Predict the immediate effect on glycolytic flux if cellular ATP concentration doubles while AMP falls to near zero. Apply PFK's allosteric regulation specifically.",
                krebs:              "A cell oxidises two molecules of acetyl-CoA through the Krebs cycle. Calculate the total NADH, FADH2, and ATP produced. Then calculate the ATP that would eventually be generated when these carriers are oxidised by the ETC.",
                electronTransport:  "Predict what happens to the proton gradient, ATP synthesis rate, and ETC electron flow when oligomycin is added to a cell. Explain the sequence of events.",
                anaerobicFermentation: "A yeast cell has exhausted its oxygen supply. Predict: (a) what happens to its NADH/NAD+ ratio; (b) what pathway is activated; (c) what the net ATP yield per glucose will be; (d) what products will accumulate."
            }
        },

        analyze: {
            description: "Break down experimental data or a complex scenario into components, identify patterns, and draw conclusions from evidence. The student is not told the answer and must derive it from data.",
            cognitiveDemand: "Decomposition and inference from evidence. The student reaches a conclusion not given to them and can justify it from the evidence provided.",
            verbs: ["Identify", "Determine", "Deduce", "Analyse", "Interpret", "Distinguish", "Classify"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given that this inhibitor reduces O2 consumption but does not affect CO2 release in a fermentation assay, identify its site of action' requires the student to reason from two pieces of data to a mechanistic conclusion.",
            examples: {
                respirationBasics:  "A cell treated with inhibitor X shows: normal CO2 production, zero O2 consumption, high NADH accumulation, and high lactate output. Identify the site of inhibition and justify your identification using each piece of data.",
                glycolysis:         "Data: a tumour cell consumes glucose at 20× the rate of the surrounding normal tissue, despite adequate O2. Analyse the metabolic state of the tumour cell, identifying which pathway is overactive, what regulatory state PFK is likely in, and what this suggests about the cell's primary metabolic need.",
                krebs:              "A patient's muscle biopsy shows severely reduced isocitrate dehydrogenase activity, elevated citrate levels, and normal Complex I function. Analyse the consequences for the Krebs cycle, NADH production, and ATP synthesis. Predict what happens to cellular ATP/AMP ratio.",
                electronTransport:  "Mitochondria are treated with compound Y. O2 consumption increases, NADH levels fall rapidly, the proton gradient cannot be detected, and ATP production falls to near zero. Analyse whether compound Y is an ETC inhibitor, an ATP synthase inhibitor, or a membrane uncoupler. Justify your conclusion using each data point.",
                anaerobicFermentation: "A muscle performing a 400m race at maximum intensity shows: falling pH, rising lactate, rising AMP, and rising ADP after 30 seconds. Analyse how each of these changes affects glycolytic flux, and explain why the athlete cannot maintain this metabolic state beyond ~90 seconds."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, experimental design, or conclusion. The student identifies flaws, explains the criterion by which they fail, and states what would be correct.",
            cognitiveDemand: "Judgement with justification. The student states whether a claim is correct, explains why using the relevant criterion, and provides the correct information.",
            verbs: ["Evaluate", "Critique", "Assess", "Justify", "Appraise", "Defend", "Judge"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'Evaluate the claim that cyanide kills cells by preventing glycolysis' — the student must state this is incorrect, explain that cyanide blocks Complex IV not glycolysis, explain how this halts the ETC and ATP synthesis, and state the correct mechanism. Simply restating that cyanide blocks Complex IV without engaging with the claim is understand-level.",
            examples: {
                respirationBasics:  "Evaluate: 'The theoretical maximum ATP yield from glucose is 36–38 ATP, and any calculation giving a lower value is incorrect.' State whether this claim is valid, identify the source of the discrepancy, and state the currently accepted yield with its biochemical basis.",
                glycolysis:         "Evaluate the experimental design: a student measures glycolytic rate by monitoring CO2 production from a yeast culture. Identify whether CO2 is a valid marker for glycolytic activity specifically, assess what CO2 production actually reflects, and propose a more appropriate assay for glycolytic flux.",
                krebs:              "A student states: 'The Krebs cycle is the main ATP-producing stage of respiration because it is the most complex pathway.' Evaluate this claim — identify what the Krebs cycle actually contributes directly, what produces the majority of ATP, and why the student's reasoning is flawed.",
                electronTransport:  "Evaluate the following statement: 'Uncoupling the ETC from ATP synthesis is always harmful because it wastes energy.' Assess this claim against the criterion of physiological function in brown adipose tissue and state under what conditions uncoupling is beneficial, with a specific molecular mechanism.",
                anaerobicFermentation: "Evaluate: 'Lactic acid causes muscle fatigue during intense exercise.' Identify what evidence supports a role for pH change, distinguish lactic acid from lactate and H+, and assess whether lactate itself is harmful or actually beneficial — referencing its role as a fuel for other tissues."
            }
        },

        create: {
            description: "Generate something new: an experimental design, a regulatory model, a pathway reconstruction, a drug mechanism proposal, or a systems-level analysis. The student integrates multiple concepts into a coherent, original output.",
            cognitiveDemand: "Synthesis and original production. The student assembles multiple concepts from the lesson into an output that did not previously exist and that addresses a specific goal.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Develop", "Formulate", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output. 'Design an experiment to test whether compound Z is an ETC inhibitor or an uncoupler' requires the student to specify measurements (O2 consumption, proton gradient, ATP production, heat output), controls, predictions for each compound type, and how data interpretation would distinguish the two possibilities.",
            examples: {
                respirationBasics:  "Design an experiment to determine the P/O ratio (ATP produced per O2 consumed) of isolated mitochondria. Specify: (a) how you would isolate mitochondria; (b) how you would measure O2 consumption; (c) how you would measure ATP production; (d) what substrate concentrations you would use; (e) what controls you would include; (f) how you would calculate the P/O ratio from your data.",
                glycolysis:         "Construct a regulatory model of glycolysis showing how PFK integrates signals from both the cell's energy state (ATP/AMP ratio) and the Krebs cycle (citrate) to set glycolytic rate. Your model should: (a) show all activators and inhibitors of PFK with their binding sites; (b) indicate what metabolic state each signal represents; (c) explain what would happen if PFK lost its allosteric regulatory sites; (d) predict the physiological consequence in a cell undergoing rapid ATP hydrolysis.",
                krebs:              "Propose a hypothesis to explain why the Krebs cycle intermediate α-ketoglutarate accumulates in some cancer cells (IDH-mutant cancers). Your proposal should: (a) identify the normal function of isocitrate dehydrogenase (IDH); (b) explain what the IDH mutation causes; (c) propose how this alters Krebs cycle flux; (d) predict what happens to NADH production and ATP synthesis; (e) suggest one therapeutic strategy targeting this metabolic vulnerability.",
                electronTransport:  "Design a drug screening protocol to identify specific inhibitors of Complex III (cytochrome bc1) that could serve as antifungal agents (fungal Complex III differs slightly from mammalian). Your protocol must: (a) specify how you would measure Complex III activity; (b) explain how you would test selectivity against human vs fungal Complex III; (c) describe how you would use Lineweaver-Burk analysis to determine whether a hit compound is competitive or non-competitive for the ubiquinol substrate; (d) explain how you would confirm that cell death is due to ATP depletion rather than another mechanism.",
                anaerobicFermentation: "Formulate a complete metabolic explanation for the observation that red blood cells (RBCs) produce lactate even in the presence of oxygen. Your explanation must address: (a) why RBCs cannot perform aerobic respiration; (b) what enzyme activity they rely on; (c) what happens to the lactate produced; (d) how this creates a metabolic partnership with other tissues; (e) predict what would happen to blood pH if RBC glycolysis were suddenly inhibited by fluoride (a glycolytic inhibitor) in a patient."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the four stages of respiration but frequently mislocates glycolysis in the mitochondria",
                "Knows that ATP is produced but cannot distinguish substrate-level from oxidative phosphorylation",
                "Cannot accurately state the net ATP yield from any single stage without reference material",
                "Confuses cellular respiration with breathing (pulmonary ventilation)",
                "Believes CO2 is produced at all stages including glycolysis",
                "Cannot distinguish the roles of NADH and FADH2 from ATP"
            ],
            immediateNextSteps: [
                "Before any quantitative work: draw a cell with a mitochondrion and label the cytoplasm, outer membrane, inner membrane, matrix, and intermembrane space. Then place each stage name in the correct compartment. Repeat until automatic.",
                "Memorise the four products of the Krebs cycle per turn as a single unit: '3 NADH, 1 FADH2, 1 ATP, 2 CO2.' Never learn one without the others. Then immediately multiply by 2 for per-glucose yield.",
                "Resolve the CO2 error immediately: write on paper 'CO2 is ONLY produced in: (1) pyruvate oxidation ×2 and (2) Krebs cycle ×4. GLYCOLYSIS produces NO CO2.' Refer to this before every respiration question until automatic.",
                "Resolve the respiration vs breathing distinction: write 'Cellular respiration = biochemistry in cells. Breathing = moving air in lungs. They are connected (breathing supplies O2 for ETC) but are not the same process.' Use the full phrase 'cellular respiration' in every exam answer.",
                "Build the net glycolysis yield from scratch: '4 ATP made minus 2 ATP used = NET 2 ATP.' Practise this subtraction every time glycolysis is mentioned until the net figure is reflexive."
            ],
            misconceptionsToAddress: [
                "Glycolysis in mitochondria → location labelling drill (above)",
                "CO2 from glycolysis → CO2 correction card (above)",
                "Cellular respiration = breathing → full-phrase habit (above)"
            ]
        },

        developing: {
            characteristics: [
                "Correctly locates all four stages but makes errors in per-stage ATP/NADH/FADH2 yield",
                "Understands that the ETC generates most ATP but cannot explain the proton gradient mechanism",
                "Distinguishes aerobic from anaerobic but cannot explain why fermentation regenerates NAD+ rather than directly producing ATP",
                "Can name allosteric regulators of PFK but cannot explain the metabolic signal each represents",
                "Quotes 36–38 ATP rather than the modern ~30–32 estimate",
                "Cannot explain why FADH2 produces less ATP than NADH"
            ],
            immediateNextSteps: [
                "For the proton gradient mechanism: draw the inner mitochondrial membrane with ETC on one side and ATP synthase on the other. Add H+ arrows: pumped OUT by I, III, IV; flowing IN through ATP synthase. Label: matrix, IMS, proton motive force. Never describe chemiosmosis without first drawing this.",
                "For fermentation NAD+ logic: write the fermentation equation emphasising the NAD+ product: 'Pyruvate + NADH → Lactate + NAD+.' Circle the NAD+ product and write 'This NAD+ goes BACK to glycolysis.' Draw the arrow connecting fermentation's NAD+ output to glycolysis's NAD+ requirement.",
                "Update ATP yield immediately: cross out 36–38 in all notes and replace with ~30–32. Write the three reasons for the reduction (shuttle cost, proton leak, export cost) as a permanent annotation.",
                "For FADH2 vs NADH ATP difference: memorise the entry point rule — 'NADH enters at Complex I (pumps 4H+); FADH2 enters at Complex II (pumps 0H+).' Connect this to the ATP difference (2.5 vs 1.5) via the proton count.",
                "For allosteric regulators: memorise the metabolic signal each represents, not just the names. 'AMP/ADP = energy DEFICIT → activate PFK. ATP/citrate = energy SURPLUS → inhibit PFK.' Test by covering the signal column and reconstructing from the molecule name alone."
            ],
            misconceptionsToAddress: [
                "36–38 ATP figure → immediate note correction (above)",
                "FADH2 = same ATP as NADH → entry point rule (above)",
                "Fermentation produces ATP → NAD+ logic diagram (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Accurately calculates total ATP yield per glucose using modern P/O ratios, accounting for shuttle differences",
                "Explains the chemiosmotic mechanism fully and correctly, including the rotary mechanism of ATP synthase",
                "Identifies the site of action of major respiratory inhibitors (cyanide, oligomycin, rotenone, DNP) and predicts consequences",
                "Connects allosteric regulation of PFK, PDH, and isocitrate dehydrogenase to the cell's energy state",
                "Distinguishes lactic acid fermentation from alcoholic fermentation and explains the NAD+ regeneration function precisely",
                "Explains the Warburg effect and its metabolic rationale"
            ],
            immediateNextSteps: [
                "Calculate ATP yield separately assuming all-malate-aspartate shuttle vs all-glycerol-3-phosphate shuttle for cytoplasmic NADH — compare the two yields and understand why the real value is between them.",
                "Study the P/O ratio controversy: research why the historical 36–38 value persisted, what experimental approaches gave the modern ~30–32 value (direct measurement using isolated mitochondria with oxygen electrodes and ATP chemiluminescence), and what the current uncertainty range is.",
                "Investigate metabolic control analysis at the systems level: how do changes in PFK activity affect flux through the entire glycolytic pathway? Research flux control coefficients and understand why the enzyme with the highest flux control coefficient is not always the most allosterically regulated.",
                "Connect respiration to anabolic pathways: identify where Krebs cycle intermediates are drawn off for biosynthesis (citrate → fatty acid synthesis; α-ketoglutarate → amino acids; oxaloacetate → gluconeogenesis) and explain how anaplerotic reactions replenish depleted intermediates.",
                "Apply respiratory biochemistry to a clinical scenario: research how mitochondria-targeted antioxidants (e.g. MitoQ) are being investigated for diseases involving mitochondrial dysfunction — trace the mechanism from ETC electron leak to reactive oxygen species to cellular damage to therapeutic intervention."
            ],
            misconceptionsToAddress: [
                "Vmax-like thinking: believing all ETC capacity is used at rest → research how electron flow is regulated by proton gradient backpressure (respiratory control)",
                "Krebs cycle as ATP source → quantify: 2 ATP directly vs ~20 ATP from NADH/FADH2 via ETC"
            ]
        },

        expert: {
            characteristics: [
                "Derives the proton stoichiometry of ATP synthesis from first principles using F0 rotor subunit count and known P/O ratios",
                "Designs kinetic experiments to determine P/O ratio and distinguish ETC inhibitors from uncouplers",
                "Analyses published bioenergetics data — assesses whether steady state was achieved, whether substrate concentrations were saturating, and whether reported P/O ratios are biologically plausible",
                "Connects ETC function to reactive oxygen species production — explains how partial reduction of O2 at Complex I and III produces superoxide under high NADH/NAD+ conditions",
                "Applies Mitchell's chemiosmotic theory historically and critically — understands what experimental evidence established it and what alternative hypotheses were displaced"
            ],
            immediateNextSteps: [
                "Derive the theoretical P/O ratio from the c-ring stoichiometry of ATP synthase: if the bovine mitochondrial ATP synthase F0 has 8 c-subunits and each rotation of 360° synthesises 3 ATP (one per β-subunit), calculate how many protons are required per ATP (8/3 ≈ 2.67) and compare this to measured P/O ratios.",
                "Critically evaluate Mitchell's chemiosmotic hypothesis: identify the three key predictions it made (proton gradient across inner membrane, pH difference, membrane potential) and identify the experimental evidence that confirmed each. Identify the competing 'conformational coupling' and 'direct chemical coupling' hypotheses that Mitchell's theory displaced.",
                "Investigate reactive oxygen species production at Complex I and III: under what conditions does partial reduction of O2 to superoxide occur? How does the NADH/NAD+ ratio (linked to the proton gradient) affect this? Connect to diseases of mitochondrial dysfunction and the biology of ageing.",
                "Apply thermodynamic analysis: using ΔG = −nFΔE (where ΔE is the reduction potential difference between NADH and O2), calculate the theoretical free energy available from NADH oxidation and compare it to the actual ATP synthesised. Calculate the thermodynamic efficiency of oxidative phosphorylation and compare it to a petrol engine."
            ],
            misconceptionsToAddress: [
                "ATP synthase as a simple pore → study the binding change mechanism (Boyer's Nobel prize work) and understand the three conformational states of the β-subunit",
                "Proton motive force as purely a pH gradient → quantify the two components (ΔpH and Δψ) and their relative contributions in mammalian vs plant mitochondria"
            ]
        }
    }
},


calvinCycle: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about the Calvin cycle from memory without requiring understanding of why they are true. The student reproduces names, definitions, stoichiometric values, stage names, and the identity of key molecules and enzymes accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response gives correct facts with no explanation. 'The Calvin cycle has three stages: fixation, reduction, and regeneration' is remember-level. Adding why fixation must come before reduction crosses into understand.",
            examples: {
                calvinCycleBasics: "Name the three stages of the Calvin cycle. State the location in the cell where the Calvin cycle occurs.",
                carbonFixation:    "Name the enzyme that catalyses carbon fixation. State the full name of the molecule to which CO₂ is attached.",
                energyUsage:       "State how many ATP and how many NADPH are required to fix three molecules of CO₂ (one net G3P). Identify which stage consumes NADPH.",
                cycleRegulation:   "Name two enzymes of the Calvin cycle that are activated by the thioredoxin system. State what RuBisCO activase does."
            }
        },

        understand: {
            description: "Explain the meaning behind facts — connect cause to effect, connect structure to function, and interpret what a result means biologically. The student must demonstrate WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, connects, or explains rather than repeating.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand goes beyond remember by requiring a mechanism or reason. 'The Calvin cycle stops in the dark' is remember. 'The Calvin cycle stops in the dark because ATP and NADPH from the light reactions are no longer produced, and key enzymes are inactivated when thioredoxin returns to its oxidised state' is understand.",
            examples: {
                calvinCycleBasics: "Explain why three turns of the Calvin cycle produce only one net G3P rather than three. Your answer must account for what happens to all six G3P molecules produced.",
                carbonFixation:    "Explain why RuBisCO is described as both carboxylase and oxygenase, and why this dual activity is a problem for plant productivity.",
                energyUsage:       "Explain why the ATP:NADPH ratio required by the Calvin cycle (3:2) matches the output ratio of the light reactions, and why this match is important for photosynthetic efficiency.",
                cycleRegulation:   "Explain why inhibiting thioredoxin activity in the light would reduce Calvin cycle rate even if CO₂, ATP, and NADPH were all abundant."
            }
        },

        apply: {
            description: "Use known equations, stoichiometric rules, and concepts to solve a problem in a new context. The student selects the right approach and executes it correctly.",
            cognitiveDemand: "Procedure execution in a novel situation. The student determines which concept applies and uses it correctly.",
            verbs: ["Calculate", "Determine", "Predict", "Trace", "Apply", "Solve", "Use"],
            whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. 'Calculate how many ATP are needed to produce 10 glucose molecules' requires correct stoichiometric reasoning applied to an unfamiliar quantity.",
            examples: {
                calvinCycleBasics: "Calculate the total number of ATP and NADPH molecules consumed during the synthesis of five glucose molecules via the Calvin cycle. Show all working.",
                carbonFixation:    "Trace the fate of a single ¹⁴C atom introduced as ¹⁴CO₂ through the Calvin cycle. Name the compound in which the label first appears, then the next two compounds through which it passes.",
                energyUsage:       "A chloroplast is producing ATP and NADPH in a 2:1 ratio rather than 3:2. Predict which stage of the Calvin cycle will become rate-limiting first and explain why.",
                cycleRegulation:   "Predict the effect on Calvin cycle activity of adding an inhibitor of phosphoribulokinase (the enzyme that phosphorylates Ru5P to form RuBP). Trace the consequence through all three stages."
            }
        },

        analyze: {
            description: "Break down experimental data or a complex scenario into components, identify patterns, and draw conclusions from evidence. The student moves from data to interpretation without being told the answer.",
            cognitiveDemand: "Decomposition and inference from evidence. The student examines a result and derives what it reveals.",
            verbs: ["Identify", "Determine", "Deduce", "Analyse", "Distinguish", "Interpret", "Classify"],
            whatDistinguishesThisLevel: "Analyze requires the student to work from evidence to conclusion. Given an experiment where ¹⁴CO₂ labelling shows 3-PGA accumulating but G3P does not, the student must diagnose which stage is blocked and explain the evidence.",
            examples: {
                calvinCycleBasics: "An experiment exposes algae to ¹⁴CO₂ for 2 seconds vs 60 seconds. At 2 seconds, only 3-PGA is heavily labelled; at 60 seconds, G3P, RuBP, and sucrose are also labelled. Analyse what each time point reveals about the sequence and rate of the three Calvin cycle stages.",
                carbonFixation:    "Enzyme kinetics data show: RuBisCO kcat (carboxylase) = 5 s⁻¹, Km(CO₂) = 10 μM; RuBisCO kcat (oxygenase) = 2 s⁻¹, Km(O₂) = 350 μM. At atmospheric CO₂ (8 μM dissolved) and O₂ (250 μM dissolved), analyse which activity dominates and predict the net impact on carbon fixation.",
                energyUsage:       "A plant is transferred from 200 μmol photons/m²/s to 800 μmol photons/m²/s. ATP and NADPH production doubles but Calvin cycle rate increases by only 20%. Analyse what is limiting the Calvin cycle response and identify at least two possible bottlenecks.",
                cycleRegulation:   "A mutant plant lacks a functional thioredoxin reductase. Analyse how this would affect: (a) Calvin cycle enzyme activity in the light; (b) net G3P production; (c) plant growth compared to wild type. Justify each prediction with reference to specific regulated enzymes."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, accuracy, or quality of a claim, experimental design, or conclusion. The student applies criteria, weighs evidence, and defends a position.",
            cognitiveDemand: "Judgement with justification. The student identifies a flaw or error, explains the criterion by which it fails, and states what would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Defend", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. Simply restating the correct fact without engaging with the claim being evaluated is understand-level, not evaluate.",
            examples: {
                calvinCycleBasics: "A student states: 'The Calvin cycle is the light-independent stage of photosynthesis, so it can operate continuously in darkness as long as CO₂ is available.' Evaluate this claim in full — identify what is correct, what is incorrect, and explain the specific dependencies that make the claim false.",
                carbonFixation:    "Evaluate the claim that RuBisCO's dual carboxylase/oxygenase activity is simply a design flaw with no evolutionary explanation. Your evaluation must address the atmospheric conditions under which RuBisCO evolved and why the oxygenase activity was not eliminated by selection.",
                energyUsage:       "A textbook states: 'Glucose is the direct product of the Calvin cycle.' Evaluate this statement — identify what is inaccurate, explain what the actual direct product is, and describe the additional steps required to produce glucose.",
                cycleRegulation:   "Evaluate whether C4 photosynthesis is always superior to C3 photosynthesis, or only under specific environmental conditions. Your evaluation must address at least three environmental variables and the metabolic cost of the C4 CO₂-concentrating mechanism."
            }
        },

        create: {
            description: "Generate something original — an experimental design, annotated diagram, regulatory model, or argument — that integrates multiple Calvin cycle concepts into a coherent, novel output.",
            cognitiveDemand: "Synthesis and original production. The student assembles a new output that requires combining multiple concepts.",
            verbs: ["Design", "Construct", "Propose", "Formulate", "Develop", "Derive", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output that cannot be produced by reproducing a memorised procedure. Designing an experiment to test a specific hypothesis about Calvin cycle regulation requires integrating experimental design, kinetics, and regulatory biology.",
            examples: {
                calvinCycleBasics: "Construct a fully annotated diagram of three complete turns of the Calvin cycle. For each turn: show each carbon atom entering as CO₂, label the three stages, identify where ATP is consumed and where NADPH is consumed, and label the one net G3P that is exported at the end. Use a carbon-counting approach to verify your stoichiometry.",
                carbonFixation:    "Design an experiment using ¹⁴CO₂ pulse-chase labelling to determine the rate of carbon fixation and the half-life of the 3-PGA pool in a C3 plant under two conditions: (a) optimal temperature and CO₂; (b) 38°C with atmospheric CO₂. Specify your controls, measurement time points, and how you would use the data to calculate fixation rate.",
                energyUsage:       "Propose a strategy for engineering a more energy-efficient Calvin cycle in a C3 crop. Your proposal must: (a) identify the specific ATP or NADPH cost that you would reduce; (b) describe the enzyme modification or pathway change that would achieve this; (c) predict the stoichiometric improvement in glucose yield per ATP invested; (d) identify one potential negative consequence of your modification.",
                cycleRegulation:   "Formulate a model explaining how a single environmental signal (drought) propagates from stomatal closure through changed CO₂/O₂ ratios, altered RuBisCO activity, reduced G3P output, and ultimately reduced plant growth. Your model must name each molecular intermediate in the signalling cascade and specify whether each step is a direct or indirect consequence of the previous one."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the three stages of the Calvin cycle but cannot reliably order them",
                "Knows that RuBisCO fixes CO₂ but does not know what RuBP is or why it matters",
                "Believes the Calvin cycle produces glucose directly rather than G3P",
                "Cannot state the ATP and NADPH stoichiometry for even one net G3P",
                "Treats the Calvin cycle as entirely independent of light",
                "Confuses the location of the light reactions (thylakoid) with the Calvin cycle (stroma)"
            ],
            immediateNextSteps: [
                "Before any stoichiometry: draw the cycle as three labelled boxes connected by arrows — Fixation → Reduction → Regeneration — and write one sentence under each box describing what goes in and what comes out. Do not add numbers yet.",
                "Establish the RuBP anchor: write 'RuBP (C5) + CO₂ → 2× 3-PGA (C3)' on a card and recite it until automatic. Emphasise that RuBP is the CO₂ acceptor and must be regenerated — this is why the cycle is a cycle.",
                "Fix the glucose misconception immediately: draw an arrow from G3P to glucose and write '2 G3P → 1 glucose (outside the Calvin cycle)'. Do not describe glucose as a Calvin cycle product.",
                "Establish the light dependence: write 'Calvin cycle borrows ATP and NADPH from the light reactions' — draw an arrow from thylakoid (ATP, NADPH production) to stroma (Calvin cycle consumption). Repeat until the dependence is internalised.",
                "Learn the compartments by drawing a chloroplast cross-section: label the thylakoid membrane (light reactions), thylakoid lumen, and stroma (Calvin cycle). Colour-code each compartment and what happens there."
            ],
            misconceptionsToAddress: [
                "Calvin cycle = light-independent = runs in the dark → light dependence diagram (above)",
                "Glucose is the direct Calvin cycle product → G3P arrow to glucose (above)",
                "CO₂ is fixed onto nothing — what is RuBP? → RuBP anchor card (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can describe all three stages in sequence with correct inputs and outputs",
                "Knows that 3 CO₂ → 1 net G3P but cannot reliably explain why only 1 of 6 G3P is exported",
                "Understands that ATP and NADPH come from the light reactions but cannot explain the 3:2 ratio or what happens when it is disrupted",
                "Can name photorespiration but cannot explain the molecular mechanism",
                "Confuses thioredoxin regulation with feedback inhibition by product",
                "Knows C4 plants exist but cannot explain the spatial separation of CO₂ fixation"
            ],
            immediateNextSteps: [
                "For the 5-out-of-6 G3P question: draw all six G3P molecules produced per three turns. Circle five in red (return to regeneration) and one in green (exported). Write: '5 return to make 3 RuBP; 1 exits as the net product.' Practise this diagram until automatic.",
                "For the 3:2 ratio: write the stoichiometry as a fraction: ATP per net G3P = 9; NADPH per net G3P = 6; ratio = 9:6 = 3:2. Then write the light reaction output: for every two NADPH produced, three ATP are produced. Match the two fractions and write: 'The Calvin cycle and light reactions are stoichiometrically coupled.'",
                "For photorespiration: draw RuBisCO active site with two competing molecules — CO₂ and O₂ — shown competing for the same binding site. Label: carboxylation → 2× 3-PGA (good); oxygenation → 1× 3-PGA + 1× 2-phosphoglycolate (wasteful). Explain that O₂ wins when its concentration is high relative to CO₂.",
                "For thioredoxin: draw a two-state diagram — enzyme with intact disulfide bond (dark, inactive) and enzyme with reduced SH groups (light, active). Label thioredoxin as the reductant. This is covalent modification by light signal, not feedback inhibition.",
                "For C4: draw a leaf cross-section showing mesophyll cells and bundle sheath cells. Draw the CO₂ fixation arrow in mesophyll (PEP carboxylase → OAA), transport arrow to bundle sheath, and Calvin cycle arrow in bundle sheath (RuBisCO). Label: 'CO₂ concentrated here; RuBisCO never sees low CO₂.'"
            ],
            misconceptionsToAddress: [
                "All 6 G3P are exported → 5-of-6 diagram (above)",
                "Thioredoxin = feedback inhibition → two-state covalent diagram (above)",
                "C4 = faster Calvin cycle → spatial CO₂ concentration diagram (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Accurately states and uses the full stoichiometry: 9 ATP + 6 NADPH per net G3P; 18 ATP + 12 NADPH per glucose",
                "Explains photorespiration mechanistically including the fate of 2-phosphoglycolate",
                "Explains thioredoxin regulation and RuBisCO activase at the level of enzyme activation state",
                "Compares C3, C4, and CAM in terms of mechanism, ecological advantage, and metabolic cost",
                "Interprets experimental data (e.g. ¹⁴C labelling time courses) correctly",
                "Can calculate RuBisCO carboxylase vs oxygenase rates given kinetic parameters and substrate concentrations"
            ],
            immediateNextSteps: [
                "Calculate catalytic efficiency for RuBisCO carboxylase: kcat/Km(CO₂) ≈ 5/0.01 mM = 500 mM⁻¹s⁻¹ — compare to typical enzymes (~10⁶–10⁸ M⁻¹s⁻¹ = 10³–10⁵ mM⁻¹s⁻¹). Note RuBisCO is extremely inefficient; its abundance compensates.",
                "Work through the photorespiratory pathway in detail: 2-phosphoglycolate → glycolate (chloroplast) → glyoxylate → glycine (peroxisome) → serine + CO₂ + NH₃ (mitochondria) → 3-PGA (chloroplast). Annotate the ATP and reducing equivalent cost of recovering carbon from 2-PG.",
                "Derive the ATP:NADPH = 3:2 ratio from the Z-scheme: count ATP produced per two electrons through the linear chain (roughly 2.5 ATP per NADPH generated via the chemiosmotic mechanism). Then verify this matches the Calvin cycle demand.",
                "Connect Calvin cycle carbon partitioning to whole-plant physiology: research the triose phosphate/phosphate antiporter and explain how Pᵢ availability in the stroma regulates the starch:sucrose balance.",
                "Investigate alternative carbon fixation pathways: compare the Calvin cycle (reductive pentose phosphate pathway) to the reductive TCA cycle used by some bacteria and archaea — in terms of ATP cost, CO₂ acceptor, and ecological distribution."
            ],
            misconceptionsToAddress: [
                "RuBisCO is just slow — nothing to be done → explore directed evolution and protein engineering attempts to improve specificity",
                "C4 is always better than C3 → calculate the ATP cost of the CO₂ pump and identify conditions where C3 outperforms C4"
            ]
        },

        expert: {
            characteristics: [
                "Derives the stoichiometric equations for the Calvin cycle from carbon-counting principles without reference to notes",
                "Analyses kinetic data for RuBisCO under varying CO₂ and O₂ concentrations to predict carboxylation/oxygenation rates",
                "Designs experiments to test specific regulatory hypotheses about thioredoxin, RuBisCO activase, or Pᵢ sensing",
                "Evaluates published research on synthetic carbon fixation pathways or CRISPR-based RuBisCO engineering",
                "Connects Calvin cycle regulation to whole-plant carbon balance, sink–source relations, and crop yield modelling"
            ],
            immediateNextSteps: [
                "Critically evaluate a published paper on an alternative synthetic carbon fixation pathway (e.g. the CETCH cycle or the crotonyl-CoA/ethylmalonyl-CoA/hydroxybutyryl-CoA cycle): assess the claimed ATP efficiency advantage over the Calvin cycle, identify what assumptions are made, and evaluate whether the proposed pathway is thermodynamically feasible at physiological conditions.",
                "Apply metabolic control analysis to the Calvin cycle: look up the flux control coefficients published for RuBisCO, phosphoribulokinase, and fructose-1,6-bisphosphatase in C3 leaves — determine which enzyme exerts the greatest control over overall flux and why this differs from the assumption that RuBisCO always limits the Calvin cycle.",
                "Model the photorespiratory penalty quantitatively: at 25°C and 38°C, given published Km and kcat values for both RuBisCO activities, calculate the ratio of oxygenation to carboxylation events and the consequent reduction in net CO₂ fixation per 100 turnovers.",
                "Investigate CRISPR engineering of RuBisCO activase thermostability: read a primary paper and evaluate whether the reported improvement in heat tolerance is sufficient to protect yields under IPCC high-emission warming scenarios for 2050–2100."
            ],
            misconceptionsToAddress: [
                "RuBisCO limits the Calvin cycle under all conditions → metabolic control analysis shows other enzymes can be limiting depending on conditions",
                "C4 photosynthesis has no cost → calculate the 2 ATP per CO₂ pump cost and the conditions where this makes C4 disadvantageous"
            ]
        }
    }
},



lightReactions: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about light reactions from memory without requiring understanding of why they are true.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'P680 is the reaction centre of PSII' is remember-level. Explaining why P680 must have a very positive reduction potential to oxidise water crosses into understand.",
            examples: {
                lightReactionBasics: "State where in the chloroplast the light reactions occur. Name the two products of the light reactions that are used by the Calvin cycle.",
                photosystems:        "Name the reaction centre chlorophyll of PSII and PSI. State the wavelength each absorbs maximally.",
                ETC:                 "List the components of the electron transport chain in order from PSII to PSI.",
                photophosphorylation:"Define chemiosmosis. State the difference in products between cyclic and non-cyclic photophosphorylation.",
                waterSplitting:      "Write the equation for photolysis of water. State which photosystem catalyses this reaction."
            }
        },

        understand: {
            description: "Explain the meaning behind facts — connect cause to effect, connect structure to function, and interpret what a result means in biological terms.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, connects, or explains rather than repeating.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "'P680 is the reaction centre of PSII' is remember. 'P680 must have an extremely positive reduction potential in its oxidised form (P680⁺) because it needs to oxidise water, which is a very poor electron donor — only the strongest biological oxidising agent can pull electrons from water' is understand.",
            examples: {
                lightReactionBasics: "Explain why two photosystems are needed rather than one, using the concept of reduction potentials and the energy gap between water and NADP+.",
                photosystems:        "Explain why fluorescence increases when DCMU is added to a leaf, connecting your answer to the three possible fates of an excited electron in a chlorophyll molecule.",
                ETC:                 "Explain how the cytochrome b6f complex couples downhill electron flow to the uphill movement of protons against their concentration gradient.",
                photophosphorylation:"Explain why the proton gradient in chloroplasts drives ATP synthesis, and identify which direction protons flow through ATP synthase relative to the thylakoid membrane.",
                waterSplitting:      "Explain why oxygen released during photosynthesis comes from water and not from CO₂. Describe the experiment that proved this."
            }
        },

        apply: {
            description: "Use known concepts, diagrams, and relationships to solve a problem that has not been seen before in exactly this form.",
            cognitiveDemand: "Procedure execution in a novel situation. The student must select the right concept and deploy it correctly.",
            verbs: ["Calculate", "Determine", "Predict", "Sketch", "Apply", "Use", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Predict the effect of adding DCMU on O₂ evolution and NADPH production' requires the student to trace the electron pathway and determine which outputs are upstream and downstream of the block.",
            examples: {
                lightReactionBasics: "A plant is exposed to only green light (550 nm). Predict the rate of light reactions relative to a plant in white light. Explain by reference to chlorophyll absorption spectra.",
                photosystems:        "Predict what would happen to electron flow through PSI if plastocyanin were selectively destroyed. Trace the consequences for NADPH production and O₂ evolution.",
                ETC:                 "An uncoupler collapses the H⁺ gradient across the thylakoid membrane without affecting electron transport. Predict the effect on: (a) O₂ evolution; (b) NADPH production; (c) ATP synthesis.",
                photophosphorylation:"A plant switches from non-cyclic to cyclic photophosphorylation. Apply your knowledge of both pathways to predict the effect on: (a) O₂ evolution; (b) NADPH production; (c) ATP production.",
                waterSplitting:      "If ¹⁸O-labelled water is supplied to a plant and all CO₂ contains normal ¹⁶O, predict the isotopic composition of (a) the O₂ released and (b) the first carbohydrate produced in the Calvin cycle."
            }
        },

        analyze: {
            description: "Break down experimental data or a complex scenario to identify patterns, draw conclusions, and determine meaning from evidence.",
            cognitiveDemand: "Decomposition and inference from evidence. The student reaches a conclusion not given to them and justifies it from the data provided.",
            verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Distinguish", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given this absorption spectrum and action spectrum, determine which pigments drive photosynthesis' — the student must compare the two curves, identify where they overlap, and deduce which pigments are photosynthetically active.",
            examples: {
                lightReactionBasics: "The action spectrum of photosynthesis shows peaks at ~430 nm and ~680 nm but a trough at ~550 nm. The absorption spectrum of chlorophyll a shows the same pattern. Analyse what this correspondence proves about the relationship between pigment absorption and photosynthetic activity.",
                photosystems:        "Isolated thylakoids are treated with an inhibitor. O₂ evolution stops immediately, but NADPH production continues briefly before also stopping. Analyse which component the inhibitor blocks and justify your answer with reference to the order of electron carriers in the Z-scheme.",
                ETC:                 "Measurement of the pH inside isolated thylakoids shows it drops by 3 units (becomes more acidic) upon illumination. Analyse what process causes this acidification and predict the effect on ATP synthesis rate if a buffer is added to prevent the pH change.",
                photophosphorylation:"An organism is found to produce ATP in the light but no NADPH and no O₂. Analyse what type of photophosphorylation it is performing. Identify which photosystem(s) must be active and what the electron donor and acceptor are.",
                waterSplitting:      "The Kok S-state cycle shows that the oxygen-evolving complex accumulates four oxidising charges before releasing one O₂ molecule. Analyse why releasing O₂ requires four charges to accumulate rather than two, connecting your answer to the chemistry of water and O-O bond formation."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, accuracy, or quality of a claim, experimental design, or conclusion.",
            cognitiveDemand: "Judgement with justification. The student identifies a flaw or error, states the criterion by which it fails, and states what would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student says oxygen in photosynthesis comes from CO₂ — evaluate this.' The student must state it is incorrect, cite the isotope labelling evidence, explain the correct source, and state what experiment proved it.",
            examples: {
                lightReactionBasics: "Evaluate the claim: 'Light reactions produce glucose.' Identify exactly what the light reactions do and do not produce, and explain what additional process is required before glucose is formed.",
                photosystems:        "A student states that P700 absorbs more energy per photon than P680 because '700 > 680.' Evaluate this claim. State whether it is correct or incorrect, explain the relationship between wavelength and photon energy, and identify which photosystem absorbs higher-energy photons.",
                ETC:                 "A researcher claims that blocking the cytochrome b6f complex with an inhibitor would only affect ATP synthesis and would have no effect on NADPH production. Evaluate this claim by tracing the electron pathway and identifying the consequences at each downstream step.",
                photophosphorylation:"Evaluate the statement: 'Cyclic photophosphorylation is a backup pathway of no importance in normal photosynthesis.' Assess this against the evidence regarding the ATP:NADPH ratio demand of the Calvin cycle and the conditions under which cyclic flow is activated.",
                waterSplitting:      "A student designs an experiment to test whether oxygen in photosynthesis comes from water by measuring total O₂ output with and without ¹⁸O-labelled water. Evaluate whether this experimental design would provide convincing evidence, identifying what control is missing and what additional measurement would strengthen the conclusion."
            }
        },

        create: {
            description: "Generate something new: an experimental design, a mechanistic model, a pathway diagram, or an original analysis that integrates multiple concepts.",
            cognitiveDemand: "Synthesis and original production. The output requires combining multiple concepts and cannot be answered by reproducing a memorised procedure.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output. 'Design an experiment to determine whether a novel compound is a PSII inhibitor or a PSI inhibitor' requires the student to specify measurements (O₂, NADPH, fluorescence), controls, and how each measurement pattern would distinguish the two possibilities.",
            examples: {
                lightReactionBasics: "Design an experiment using isolated chloroplasts to separately measure the contributions of PSII and PSI to total NADPH production. Specify: (a) what inhibitors or conditions you would use to isolate each photosystem's contribution; (b) what you would measure and how; (c) what result would confirm each photosystem's role; (d) what controls are needed.",
                photosystems:        "Construct a fully annotated Z-scheme diagram from memory showing: all electron carriers in order; reduction potential on the y-axis (approximate values); the two points of photon input; the site of water splitting; the site of NADPH formation; the direction of spontaneous (downhill) vs light-driven (uphill) electron movement. Annotate where ATP synthesis is coupled to electron flow.",
                ETC:                 "Propose an experiment to measure the number of H⁺ pumped into the thylakoid lumen per O₂ molecule released. Describe: (a) how you would measure lumen acidification; (b) how you would measure O₂ simultaneously; (c) how you would calculate the H⁺:O₂ ratio; (d) what result would be expected if the Q-cycle is operating at full capacity.",
                photophosphorylation:"Formulate a model explaining how a plant cell regulates the balance between cyclic and non-cyclic photophosphorylation in response to varying Calvin cycle demand. Your model must specify: (a) the signal that indicates ATP deficiency relative to NADPH; (b) how this signal redirects electron flow at PSI toward the cyclic pathway; (c) a prediction your model makes that could be tested experimentally.",
                waterSplitting:      "Design an artificial photosynthesis device that replicates the Z-scheme to produce hydrogen fuel from water. Specify: (a) the two light-absorbing components and their required reduction potentials; (b) the reactions occurring at each component; (c) the major technical challenge in replicating the oxygen-evolving complex; (d) how you would verify that O₂ is produced from water and H₂ from protons rather than from any other source."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can state that light reactions occur in the thylakoid membrane and produce ATP and NADPH",
                "Knows that oxygen is released but cannot state it comes from water splitting",
                "Conflates light reactions with the entire process of photosynthesis",
                "Cannot distinguish PSII from PSI or explain why two photosystems are needed",
                "Associates 'photosynthesis' with CO₂ fixation rather than the light-capture stage"
            ],
            immediateNextSteps: [
                "Draw the chloroplast and physically locate the thylakoid membranes and stroma before touching any chemistry. Label granum, thylakoid, and stroma. Annotate: 'light reactions here (thylakoid membrane)' and 'Calvin cycle here (stroma).'",
                "Write the summary equation for light reactions only — no glucose: Light + H₂O + ADP + NADP⁺ → ATP + NADPH + O₂. Repeat until this is automatic and does not include CO₂ or glucose.",
                "Draw two separate boxes labelled PSII and PSI. In PSII box write: absorbs light, splits water, releases O₂. In PSI box write: absorbs light, makes NADPH. Connect with an arrow labelled 'electrons.' This is the entire conceptual framework — master it before any detail.",
                "Use the memory anchor: PSII comes first in the sequence even though its number is lower — 'II before I in the electron pathway.' Write it on every diagram.",
                "Before any equation: confirm verbally — 'oxygen comes from water, not CO₂' — three times before each practice session until it requires no effort."
            ],
            misconceptionsToAddress: [
                "Light reactions make glucose → summary equation correction (above)",
                "Oxygen comes from CO₂ → isotope labelling anchor (above)",
                "Photosynthesis = Calvin cycle only → two-stage diagram (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can name PSII and PSI and their reaction centres (P680, P700) but confuses which comes first",
                "Understands that electrons flow from water to NADP⁺ but cannot name intermediate carriers",
                "Knows chemiosmosis produces ATP but cannot explain the source of the proton gradient",
                "Confuses cyclic with non-cyclic photophosphorylation — cannot reliably state which produces O₂",
                "Cannot explain why two photosystems are needed in terms of reduction potentials"
            ],
            immediateNextSteps: [
                "Memorise the electron carrier sequence as a sentence: 'Water feeds PSII, PQ carries to b6f, PC carries to PSI, then ferredoxin to NADP⁺.' Write it ten times then draw it from memory.",
                "For the proton gradient: identify all three H⁺ sources with a colour-coded diagram — water splitting (blue), PQH₂ oxidation at cyt b6f (red), NADPH formation consuming stromal H⁺ (green). Annotate each arrow with 'into lumen' or 'from stroma.'",
                "For cyclic vs non-cyclic: use the output as the discriminator. Ask: 'Does it produce O₂?' Yes → non-cyclic. No → cyclic. 'Does it produce NADPH?' Yes → non-cyclic. No → cyclic. Drill these two questions on ten flashcard scenarios.",
                "For the two-photosystem logic: draw a simple energy diagram with water at the bottom (+0.82 V), NADP⁺ at the top (−0.32 V), and a single photon arrow. Show that the arrow is not tall enough to span the gap. Then draw two arrows (PSII boost + PSI boost) that together span it. Annotate the ETC energy drop between them.",
                "For PSII/PSI order confusion: use the mnemonic 'Water to Two to One to NADPH' — PSII handles water, PSI handles NADPH. The numbers count in the direction of electron flow when read as word position."
            ],
            misconceptionsToAddress: [
                "PSII vs PSI order → 'Water to Two to One' mnemonic (above)",
                "Cyclic vs non-cyclic confusion → two-question output discriminator (above)",
                "Proton gradient source → three-colour H⁺ diagram (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Correctly traces the full Z-scheme from water splitting to NADPH formation",
                "Explains chemiosmosis with reference to all three H⁺ sources and CF0-CF1 ATP synthase",
                "Distinguishes cyclic from non-cyclic photophosphorylation in terms of pathway, products, and metabolic rationale",
                "Can predict the effect of specific inhibitors (DCMU, uncouplers) on individual light reaction outputs",
                "Connects the light reaction products (ATP, NADPH) to their specific uses in the Calvin cycle"
            ],
            immediateNextSteps: [
                "Quantify the proton stoichiometry: count H⁺ contributed per 2 electrons from each source (water splitting = 4H⁺, Q-cycle at cyt b6f = 4H⁺, stromal H⁺ consumption = 1). Calculate total H⁺ per O₂ released and convert to ATP yield using H⁺:ATP ratio.",
                "Work through the ATP:NADPH ratio problem quantitatively: calculate how much ATP non-cyclic photophosphorylation produces per 2 NADPH and compare to Calvin cycle's 3:2 demand. Calculate the deficit and show how cyclic flow closes it.",
                "Study photoinhibition: research the D1 protein degradation cycle and explain why excess light is damaging, what the xanthophyll cycle does to protect PSII, and how non-photochemical quenching (NPQ) works as a photoprotective mechanism.",
                "Connect to C4 and CAM photosynthesis: identify how these strategies modify the demand placed on light reactions and how the deployment of cyclic vs non-cyclic photophosphorylation differs between mesophyll and bundle sheath cells in C4 plants.",
                "Derive the quantum requirement: calculate the minimum number of photons needed to fix one CO₂ into glucose, accounting for ATP and NADPH stoichiometry, and compare to the theoretical minimum (8 photons) and experimental measurements (~9–10 photons)."
            ],
            misconceptionsToAddress: [
                "Vague notion that 'more light = more ATP linearly' → introduce light saturation point and photoinhibition",
                "Assumption that non-cyclic always dominates → ATP:NADPH ratio analysis (above)"
            ]
        },

        expert: {
            characteristics: [
                "Derives the proton stoichiometry of the Z-scheme from first principles and connects it to ATP yield",
                "Analyses published action spectra and fluorescence data to identify photosynthetic components and their states",
                "Evaluates experimental designs for measuring photosynthetic electron flow and identifies sources of error",
                "Connects light reaction biophysics to evolutionary origins, agricultural applications, and artificial photosynthesis",
                "Can apply reduction potential reasoning to predict thermodynamic feasibility of electron transfer steps"
            ],
            immediateNextSteps: [
                "Read and critically evaluate the original Hill (1939) paper on isolated chloroplast electron transfer and the Ruben-Kamen (1941) ¹⁸O isotope labelling experiment — assess what each proved and what assumptions were required.",
                "Investigate the Kok S-state cycle for O₂ evolution in detail: draw all five S-states (S0–S4), annotate the charge accumulation at the Mn₄CaO₅ cluster, and explain why four flashes of light produce O₂ on the third flash in dark-adapted samples — connect to the stoichiometry of PSII.",
                "Apply the Nernst equation to calculate the driving force for each electron transfer step in the Z-scheme given the standard reduction potentials, and identify which steps are thermodynamically driven by the photon and which are spontaneous.",
                "Critically evaluate the artificial photosynthesis literature: read one primary research paper on water oxidation catalysts and assess whether the reported turnover numbers approach biological OEC performance — identify the gap and the proposed strategies to close it."
            ],
            misconceptionsToAddress: [
                "Assumption that biological ETC components have perfectly matched reduction potentials → Nernst equation analysis reveals thermodynamic driving forces at each step",
                "Artificial photosynthesis as a solved problem → primary literature evaluation (above)"
            ]
        }
    }
},


microbialGrowth: {
            knowledgeLevel: {

                remember: {
                    description: "Retrieve stored facts about microbial growth from memory without requiring understanding of mechanism. The student is not yet expected to explain why — only to reproduce definitions, equations, and classifications accurately.",
                    cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. A student who cannot recall that stationary phase involves equal growth and death rates cannot access any higher level of analysis.",
                    verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
                    whatDistinguishesThisLevel: "A remember-level response contains correct facts with no explanation. 'The lag phase is when cells adapt to new conditions' is remember-level. Adding 'because cells must synthesise inducible enzymes before they can metabolise the available nutrients' crosses into understand.",
                    examples: {
                        growthBasics:    "State the equation for calculating population size after n generations. Define generation time.",
                        growthCurve:     "List the four phases of the bacterial growth curve in order. For each, state whether viable cell count is increasing, stable, or decreasing.",
                        environmentalFactors: "Name the five categories of microorganism defined by oxygen requirement. For each, state whether O₂ is required and whether it is tolerated.",
                        growthControl:   "Define sterilisation, disinfection, and antisepsis. State the difference between bacteriostatic and bactericidal agents.",
                        measurement:     "List three direct and two indirect methods of measuring microbial growth. For each, state what is measured (viable cells, total cells, or biomass)."
                    }
                },

                understand: {
                    description: "Explain the biological mechanism behind facts — connect structure to function, cause to effect, and molecular event to population-level outcome. The student must demonstrate WHY, not just WHAT.",
                    cognitiveDemand: "Translation and interpretation. The student must supply a causal mechanism linking two facts. A response that could have been produced by memorising a question-answer pair does not meet this criterion.",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
                    whatDistinguishesThisLevel: "Understand requires a mechanism. 'Lag phase cells are not dividing' is remember. 'Lag phase cells are not dividing because they require time to upregulate the specific enzymes needed to metabolise the available substrates and repair any DNA damage accumulated during storage' is understand — the student has provided the causal mechanism.",
                    examples: {
                        growthBasics:    "Explain why microbial growth is described using logarithms rather than raw cell numbers, specifically referencing what happens to the magnitude of population change during exponential phase.",
                        growthCurve:     "Explain the molecular events that cause a culture to transition from exponential phase to stationary phase. Your answer must address at least two distinct causes and explain how each limits cell division.",
                        environmentalFactors: "Explain why obligate anaerobes are killed by oxygen, connecting the answer to specific enzymatic deficiencies. Contrast with the mechanism by which aerotolerant anaerobes survive oxygen exposure.",
                        growthControl:   "Explain why autoclaving (121°C, 15 psi, 15 min) achieves sterilisation while boiling at 100°C for 15 min does not. Your answer must reference the physical chemistry of steam under pressure.",
                        measurement:     "Explain why turbidimetry (OD₆₀₀) may overestimate viable cell count in a culture that has entered late stationary phase. Connect the answer to what OD₆₀₀ physically measures."
                    }
                },

                apply: {
                    description: "Use growth equations, D-value formulas, and classification criteria to solve a problem not seen before in exactly this form. The student selects the correct tool and executes it in a new context.",
                    cognitiveDemand: "Procedure execution in a novel situation. A common failure at this level: knowing the formula but substituting values incorrectly, or failing to convert time units before calculating generation number.",
                    verbs: ["Calculate", "Determine", "Predict", "Classify", "Apply", "Use", "Solve"],
                    whatDistinguishesThisLevel: "Apply requires an unseen problem. 'Calculate Nt when N₀ = 10³, g = 30 min, t = 3 hours' requires the student to convert time to minutes, calculate n, and substitute correctly — it cannot be answered by recalling a memorised example.",
                    examples: {
                        growthBasics:    "A culture of E. coli begins at N₀ = 5 × 10³ CFU/mL and has a generation time of 25 minutes. Calculate the viable count after 3 hours. Express your answer in scientific notation and as log₁₀ CFU/mL.",
                        growthCurve:     "Using the growth equations, calculate how many generations are required to grow from 10² to 10⁸ CFU. If the generation time is 45 minutes, how long will this take? Identify which growth phase this calculation assumes.",
                        environmentalFactors: "A food product has aw = 0.88 and is stored at 10°C. The pathogen of concern is Staphylococcus aureus (minimum aw = 0.83, minimum temperature = 7°C). Determine whether growth is possible and identify which factor(s) are limiting.",
                        growthControl:   "The D-value of a bacterial endospore at 121°C is 2 minutes. Calculate the time required to achieve a 10-log reduction from an initial load of 10⁸ spores. State whether this constitutes sterilisation.",
                        measurement:     "A serial dilution experiment produces 178 colonies on a plate that received 0.1 mL of a 10⁻⁵ dilution. Calculate the original viable count in CFU/mL. Show all working."
                    }
                },

                analyze: {
                    description: "Break down experimental data or a complex scenario into components, identify patterns, and draw conclusions from evidence. The student moves from data to interpretation without being told the answer.",
                    cognitiveDemand: "Decomposition and inference from evidence. The student examines data (a growth curve, a plate count, an OD reading, a D-value table) and derives a conclusion that was not provided.",
                    verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Distinguish", "Interpret"],
                    whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given this growth curve data set, determine the generation time and identify which phase the culture is in at hour 8' is analyze — the student must examine the data pattern, calculate the slope, and characterise the growth phase.",
                    examples: {
                        growthBasics:    "The following OD₆₀₀ readings are taken every 30 minutes: 0.05, 0.05, 0.06, 0.10, 0.19, 0.38, 0.75, 0.74, 0.73. Plot these data (log₁₀ scale), identify the four growth phases, estimate the generation time from the exponential region, and explain why OD₆₀₀ plateaus while the culture may still contain viable cells.",
                        growthCurve:     "A researcher reports that adding a carbon source at hour 10 (stationary phase) causes no increase in growth rate, but adding it at hour 3 (late exponential) extends exponential growth by 2 hours. Analyse what this result reveals about the cause(s) of stationary phase in this culture.",
                        environmentalFactors: "An unknown bacterium is tested under five oxygen conditions: grows vigorously at 21% O₂; grows at 2% O₂; does not grow at 0% O₂; is killed after 1 hour at 21% O₂ when inoculum is very small. Classify the oxygen requirement category and justify using all four observations.",
                        growthControl:   "Sterilisation runs using biological indicators (G. stearothermophilus spores, D₁₂₁ = 1.5 min) show: 10-minute run → 2/10 indicators positive; 15-minute run → 0/10 indicators positive; 20-minute run → 0/10 indicators positive. Analyse whether 10 minutes is sufficient for sterilisation, calculate the theoretical survival probability at 10 minutes, and explain the result.",
                        measurement:     "Plate counts from three serial dilutions of the same sample give: 10⁻⁴ dilution → TNTC (too numerous to count); 10⁻⁵ → 312 colonies; 10⁻⁶ → 29 colonies. Analyse which plate gives the most reliable count, calculate the original concentration, and explain why the other two plates are unsuitable."
                    }
                },

                evaluate: {
                    description: "Make a supported judgement about the validity, accuracy, or appropriateness of a claim, method, or experimental conclusion. The student must apply criteria, weigh evidence, and defend a position with specific justification.",
                    cognitiveDemand: "Judgement with justification against a standard. The student identifies what is wrong, explains the criterion by which it fails, and states what would be correct.",
                    verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
                    whatDistinguishesThisLevel: "Evaluate requires a judgement, not just a correction. 'A student claims turbidimetry is the best method for counting viable bacteria in a late-stationary-phase culture — evaluate this.' The student must judge it incorrect (the judgement), explain that OD₆₀₀ detects all particles including dead cells and cell debris, which accumulate in stationary phase, causing OD to overestimate viable count (the criterion), and state that plate counting is the appropriate method (the correction).",
                    examples: {
                        growthBasics:    "A student concludes that because log₁₀(N) increases by 1 unit every 30 minutes in exponential phase, the culture doubles every 10 minutes. Evaluate this reasoning fully — identify the mathematical error, state the correct relationship between a 1 log₁₀ unit increase and population doubling, and calculate the correct generation time.",
                        growthCurve:     "A food safety officer states: 'Pasteurised milk is safe because pasteurisation kills all bacteria.' Evaluate this claim — state which types of organisms survive pasteurisation and under what storage conditions, and propose what additional control measures are required to ensure safety.",
                        environmentalFactors: "Evaluate the claim: 'Refrigeration at 4°C prevents all microbial growth in food.' Identify the specific category of microorganism for which this claim is false, give two examples, explain why they grow at refrigeration temperatures, and state the implication for food safety.",
                        growthControl:   "A hospital policy states that boiling instruments in water for 30 minutes constitutes sterilisation. Evaluate this policy — identify the specific organisms that survive boiling, explain the physical chemistry of why 100°C boiling water cannot achieve sterilisation, and state the correct procedure and conditions required.",
                        measurement:     "Evaluate the use of OD₆₀₀ as the sole method for tracking antibiotic efficacy against E. coli. Identify two specific scenarios where OD₆₀₀ would give misleading results and state what additional measurement would be required in each case."
                    }
                },

                create: {
                    description: "Generate something new: an experimental design, a growth control protocol, a sterilisation validation plan, or a predictive growth model. The student integrates multiple concepts into a coherent, original, scientifically plausible output.",
                    cognitiveDemand: "Synthesis and original production. The output cannot be produced by recalling any single memorised procedure — it requires assembling multiple concepts from the lesson into a new plan.",
                    verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
                    whatDistinguishesThisLevel: "Create requires original output. 'Design a complete growth curve experiment for an unknown bacterium' requires specifying inoculum preparation, time points, measurement methods, controls, data transformation, and phase identification criteria — integrating measurement methods, growth mathematics, and experimental design.",
                    examples: {
                        growthBasics:    "Design a complete experiment to determine the generation time of an unknown bacterium isolated from a hot spring. Specify: (a) how you would prepare a standardised inoculum; (b) what growth medium and temperature you would use and why; (c) what measurement method you would use and at what time intervals; (d) how you would transform the data to calculate generation time; (e) what controls you would include.",
                        growthCurve:     "Construct a fully annotated growth curve diagram for a batch fermentation producing recombinant protein. For each phase, specify: the metabolic events occurring; the appropriate action a bioprocess engineer would take (e.g. add nutrients, harvest product, adjust aeration); and how you would measure both cell density and product concentration. Justify the timing of each intervention using growth curve physiology.",
                        environmentalFactors: "Formulate a 'hurdle technology' food preservation strategy for a chilled, ready-to-eat meat product. Identify three independent environmental factors, specify the target level for each factor, explain which pathogens each hurdle targets, and justify why multiple hurdles are needed. Include a risk assessment identifying which pathogen remains of greatest concern despite your strategy.",
                        growthControl:   "Propose a complete sterilisation validation protocol for a new surgical instrument. Include: (a) identification of the target organism and its D-value; (b) calculation of the required process time to achieve sterility assurance level (SAL) of 10⁻⁶ from a worst-case bioburden; (c) choice of sterilisation method with justification; (d) biological indicator selection and placement; (e) criteria for accepting or rejecting a sterilisation run.",
                        measurement:     "Design a method comparison study to evaluate whether turbidimetry or plate counting better tracks E. coli growth during a 24-hour batch fermentation that includes exponential, stationary, and death phases. Specify: sampling frequency; how you will perform both measurements on the same sample; what discrepancies you expect at each phase and why; and how you will statistically assess agreement between the two methods."
                    }
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can define binary fission and generation time but confuses generation time with growth rate",
                        "Knows the four phases by name but cannot explain the molecular cause of each transition",
                        "Cannot perform growth calculations without step-by-step guidance",
                        "Confuses sterilisation with disinfection; treats pasteurisation as equivalent to sterilisation",
                        "Does not distinguish viable count from total count methods",
                        "Cannot classify oxygen requirement groups beyond aerobe and anaerobe"
                    ],
                    immediateNextSteps: [
                        "Before any calculation: draw the growth curve from scratch, label all four phases, and write one sentence on the cause of each transition. Do not proceed to equations until this is automatic.",
                        "For generation time vs growth rate: write the relationship μ = 0.693/g explicitly on every problem. Practise calculating μ from g and g from μ with five different values until the reciprocal relationship is internalised.",
                        "For growth calculations: always write out the formula Nt = N₀ × 2ⁿ first, then identify each variable from the problem before substituting. Convert all times to the same unit before calculating n = t/g.",
                        "For sterilisation terminology: build a four-row table (sterilisation, disinfection, antisepsis, pasteurisation) with columns: what is eliminated, what survives, where it is used. Memorise by covering columns and reconstructing.",
                        "For viable vs total count: draw two diagrams of a late-stationary-phase culture — one showing only viable cells (what plate counting measures) and one showing all cells including dead ones and debris (what OD₆₀₀ measures). Label what each method detects."
                    ],
                    misconceptionsToAddress: [
                        "Growth = cell size increase → redefine with population diagrams showing cell number doubling",
                        "Lag phase = dormancy → explain active enzyme synthesis and DNA repair occurring in lag phase",
                        "Pasteurisation = sterilisation → D-value table showing endospore survival at 100°C"
                    ]
                },

                developing: {
                    characteristics: [
                        "Can apply growth equations for straightforward problems but makes unit conversion errors (hours vs minutes)",
                        "Correctly identifies lag and exponential phases on growth curve data but struggles to distinguish stationary from early death phase",
                        "Distinguishes aerobe from anaerobe reliably but confuses microaerophile with facultative anaerobe",
                        "Understands D-value conceptually but cannot use it to calculate required process time",
                        "Can choose between plate counting and OD₆₀₀ for simple cases but does not know when to use membrane filtration",
                        "Identifies bacteriostatic vs bactericidal in theory but cannot apply to clinical scenarios"
                    ],
                    immediateNextSteps: [
                        "For unit conversion errors: begin every growth calculation by writing 'g = ___ min, t = ___ min, n = t/g = ___' — never use hours in the same formula as a generation time given in minutes without first converting.",
                        "For stationary vs death phase distinction: practise reading growth curves where the y-axis is log₁₀(viable count) — stationary is a flat line; death is a downward slope. Find five published growth curves and identify the transition point between stationary and death.",
                        "For oxygen classification: build a five-row comparison table with exactly three columns: needs O₂, tolerates O₂, specific example. Fill every cell. Cover the 'needs O₂' column and reconstruct from the example alone.",
                        "For D-value calculations: practise the formula 'required time = D × number of log reductions needed' with five different scenarios varying starting load and target SAL. Work backwards from the target to the required log reduction before calculating time.",
                        "For membrane filtration: add it to the measurement methods table. Use case: sample is too dilute for direct count but cannot be cultured in liquid (e.g. water quality monitoring for E. coli at 1 CFU/100 mL)."
                    ],
                    misconceptionsToAddress: [
                        "Microaerophile = facultative anaerobe → comparison table with three columns: O₂ needed, O₂ tolerated, O₂ level",
                        "D-value = time to kill all bacteria → correct to 90% reduction per D-value; sterilisation requires multiple D-values",
                        "OD₆₀₀ measures living cells → demonstrate with late stationary phase data where OD is stable but viable count drops"
                    ]
                },

                proficient: {
                    characteristics: [
                        "Performs all growth calculations fluently including n, g, μ, and log₁₀(Nt) in multi-step problems",
                        "Correctly identifies all four growth phases from raw data and explains the molecular cause of each transition",
                        "Selects appropriate measurement methods for given scenarios and justifies the choice",
                        "Uses D-value calculations to design sterilisation cycles and evaluate their adequacy",
                        "Correctly classifies all five oxygen requirement groups and connects classification to enzymatic mechanism",
                        "Applies the D-value concept to food canning, autoclaving, and radiation sterilisation scenarios"
                    ],
                    immediateNextSteps: [
                        "Extend to continuous culture: research the chemostat and turbidostat — derive how dilution rate (D = F/V) relates to specific growth rate at steady state (μ = D). Understand why the chemostat maintains cultures in exponential phase indefinitely.",
                        "Explore the Monod equation: μ = μmax × [S]/(Ks + [S]) — compare it to the Michaelis-Menten equation and identify the parallel between Ks (substrate concentration at half μmax) and Km. Connect nutrient limitation to growth rate quantitatively.",
                        "Investigate quorum sensing: research how bacteria sense population density and alter gene expression in response. Connect quorum sensing to biofilm formation and stationary phase stress responses.",
                        "Calculate SAL (Sterility Assurance Level) for pharmaceutical manufacturing: derive the required number of D-values for a 10⁻⁶ SAL from a realistic bioburden, and compare with the 12D botulinum standard in food canning.",
                        "Analyse a published antimicrobial susceptibility testing paper: identify MIC values, interpret time-kill curves, and distinguish bacteriostatic from bactericidal outcomes using the standard ≥3 log₁₀ reduction criterion."
                    ],
                    misconceptionsToAddress: [
                        "μ and g as synonymous → derive both from the growth equation to show their reciprocal relationship",
                        "Biofilm resistance as genetic resistance → distinguish phenotypic tolerance (EPS barrier, slow growth) from genetic resistance (resistant mutants)"
                    ]
                },

                expert: {
                    characteristics: [
                        "Derives growth equations from first principles and applies them in multi-variable optimisation problems",
                        "Designs and critiques complete growth characterisation experiments including controls, replicates, and statistical analysis",
                        "Applies D-value, z-value, and F-value calculations to thermal process design",
                        "Connects microbial growth kinetics to the Monod equation and chemostat theory",
                        "Analyses published growth data critically — identifies deviations from ideal kinetics, evaluates measurement method appropriateness, and assesses statistical validity"
                    ],
                    immediateNextSteps: [
                        "Derive the Monod equation from growth kinetics first principles and apply it to predict how a chemostat behaves at washout (D > μmax) — understand why the culture fails catastrophically at this point.",
                        "Perform a critical evaluation of a published food safety risk assessment: identify the assumptions made about D-value, initial bioburden, and temperature during distribution, and assess whether the safety margin is adequate.",
                        "Investigate persister cell biology: research the toxin-antitoxin systems underlying persister formation and evaluate whether persisters represent a fundamental challenge to the bacteriostatic/bactericidal distinction.",
                        "Apply metabolic flux analysis principles: connect microbial growth rate to specific rates of substrate consumption and product formation — the foundation of industrial bioprocess design."
                    ],
                    misconceptionsToAddress: [
                        "Growth curve as universal — explore deviations: diauxic growth (two exponential phases with a second lag in between when a preferred carbon source is exhausted and gene expression switches); cryptic growth (apparent stationary phase masking balanced growth and death)"
                    ]
                }
            }
        },

protists: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about protist groups, structures, and roles from memory without requiring explanation of why they are true.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts with no explanation of cause or mechanism. 'Oomycetes have cellulose cell walls' is remember-level. 'Oomycetes have cellulose cell walls, which distinguishes them from fungi and explains why antifungal drugs are ineffective against them' crosses into understand.",
            examples: {
                protistBasics:       "Name the five protist supergroups. List the two nutritional modes that together define mixotrophy.",
                protistClassification: "Identify the supergroup to which diatoms belong. Name the two components of a diatom frustule.",
                protistReproduction: "Define conjugation in ciliates. State what type of reproduction Plasmodium undergoes in the human host.",
                protistEcology:      "Name two protist human pathogens and the disease each causes. State the vector for Plasmodium falciparum."
            }
        },

        understand: {
            description: "Explain the meaning behind facts — connect structure to function, cause to effect, and interpret what a biological feature means in context.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, connects, or explains rather than repeating. A correct mechanistic explanation demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or reason. 'Oomycetes are not fungi' is remember. 'Oomycetes are not fungi because their cell walls are cellulose (not chitin), they are phylogenetically stramenopiles (not opisthokonts), and their zoospores have two flagella (fungi lack flagella)' is understand — the student supplies three lines of evidence with reasoning.",
            examples: {
                protistBasics:       "Explain why 'Protista' is no longer considered a valid kingdom in modern classification. Your answer must use the term paraphyletic and explain what it means.",
                protistClassification: "Explain why oomycetes were historically misclassified as fungi, and identify three cellular features that demonstrate they are stramenopiles.",
                protistReproduction: "Explain why Paramecium conjugation is classified as sexual reproduction despite not increasing cell number. Your answer must reference what happens to the micronucleus during the process.",
                protistEcology:      "Explain the mechanism by which rising sea temperature causes coral bleaching at the cellular level, referencing the role of reactive oxygen species."
            }
        },

        apply: {
            description: "Use known concepts, classifications, and principles to solve a problem or make a prediction in a context not previously encountered.",
            cognitiveDemand: "Procedure execution in a novel situation. The student selects the correct concept and applies it accurately to new data.",
            verbs: ["Predict", "Classify", "Determine", "Apply", "Calculate", "Sketch", "Use"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Classify the following organism: unicellular, photosynthetic, silica cell wall, no flagella' requires active classification using learned criteria, not recall of a memorised list.",
            examples: {
                protistBasics:       "A freshwater protist is observed to have a contractile vacuole that contracts every 6 seconds. Predict what would happen to the rate of contraction if the cell were transferred to a 0.9% NaCl solution. Apply osmosis principles specifically.",
                protistClassification: "Classify each of the following organisms into the correct supergroup, justifying each: (a) unicellular, two flagella, feeding groove, lacks mitochondria; (b) multicellular, photosynthetic, heteromorphic alternation of generations, mastigonemes on flagella; (c) amoeboid, calcium carbonate test, marine, reticulopodia.",
                protistReproduction: "P. falciparum has a 48-hour intraerythrocytic cycle. Predict the fever pattern for a patient infected with P. vivax, whose intraerythrocytic cycle takes 72 hours. Apply the connection between schizogony and fever timing.",
                protistEcology:      "Predict the immediate and long-term consequences for a coral reef ecosystem if Symbiodinium populations were experimentally eliminated. Apply your knowledge of zooxanthellae function and coral physiology specifically."
            }
        },

        analyze: {
            description: "Break down experimental data, life cycle diagrams, or ecological scenarios into components, identify patterns and relationships, and derive conclusions from evidence.",
            cognitiveDemand: "Decomposition and inference from evidence. The student reaches a conclusion not given to them and justifies it from provided data.",
            verbs: ["Identify", "Determine", "Deduce", "Analyse", "Distinguish", "Interpret", "Compare"],
            whatDistinguishesThisLevel: "Analyze requires the student to work from evidence to conclusion. 'Given a microscope image showing an organism with two nuclei, a ventral feeding groove, and no mitochondria, identify the supergroup and give the genus' is analyze — the student must connect multiple structural clues to a single correct conclusion.",
            examples: {
                protistBasics:       "A protist is observed with the following features: covered in rows of short appendages, two nuclei of different sizes, feeds on bacteria via an oral groove, and reproduces by transverse binary fission. Analyse these features and identify the group, supergroup, and one named example species. Justify each step of your reasoning.",
                protistClassification: "Electron microscopy of an unknown marine protist reveals: alveoli beneath the plasma membrane, two flagella (one encircling the cell transversely, one trailing longitudinally), and armoured cell covering with geometric patterning. Analyse these features to identify the group and supergroup. State which feature is most taxonomically decisive and why.",
                protistReproduction: "A diatom population is monitored over 30 generations of binary fission. Mean cell diameter decreases from 80 μm to 25 μm. Analyse what must happen next in the population life history, identify the type of reproduction involved, and explain the cellular mechanism that restores cell size.",
                protistEcology:      "Ocean monitoring data show a spring diatom bloom followed by a sharp decline in surface water silicate concentration, coinciding with a peak in particulate organic carbon flux to the deep ocean. Analyse these data to explain what biological process is responsible, which cellular structures are directly involved in the carbon flux, and what the long-term biogeochemical significance is."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, accuracy, or quality of a claim, classification, experimental design, or conclusion, applying biological criteria explicitly.",
            cognitiveDemand: "Judgement with justification. The student states a position, identifies the criterion by which it is assessed, and defends it with evidence.",
            verbs: ["Evaluate", "Critique", "Assess", "Justify", "Appraise", "Defend", "Judge"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims Euglena is a plant because it photosynthesises — evaluate this claim' requires the student to state the claim is incorrect, identify the criteria for classification (phylogeny, not nutrition), provide three lines of evidence against the claim (supergroup, pellicle structure, mixotrophy, heterotrophic feeding), and state the correct classification.",
            examples: {
                protistBasics:       "Evaluate the claim: 'Euglena should be classified as a plant because it is photosynthetic and green.' Identify all the criteria the student has used, explain which criteria are and are not valid for taxonomic classification, and give three lines of evidence that place Euglena correctly in Excavata rather than Archaeplastida.",
                protistClassification: "A 19th-century botanist classifies Phytophthora infestans as a fungus because it forms fungal-like hyphae and produces spores. Evaluate this classification decision — identify what evidence was used and why it led to misclassification, and state which three lines of evidence would have correctly identified it as a stramenopile if available at the time.",
                protistReproduction: "Evaluate the following student explanation of coral bleaching: 'Coral bleaching occurs because hot water directly kills the coral's cells.' Assess whether this is correct, identify what is missing or wrong in the mechanistic chain, and provide the complete accurate explanation at the cellular level.",
                protistEcology:      "Evaluate the claim: 'Targeting the Plasmodium parasite inside human red blood cells is sufficient for malaria eradication.' Assess this using your knowledge of the full Plasmodium life cycle, identify what the claim omits, and evaluate what additional intervention points would be needed for eradication."
            }
        },

        create: {
            description: "Generate an original output — an experimental design, annotated life cycle, conservation strategy, or classification system — by integrating multiple concepts from the protist lesson.",
            cognitiveDemand: "Synthesis and original production. The student produces an internally consistent, scientifically plausible output that addresses a specific goal and cannot be answered by reproducing memorised content.",
            verbs: ["Design", "Construct", "Propose", "Develop", "Formulate", "Plan", "Produce"],
            whatDistinguishesThisLevel: "Create requires assembling a new structure from multiple components. 'Design a field study to determine whether a coral reef in the Indo-Pacific is at risk of bleaching, and propose an intervention strategy' requires integrating protist biology, ecology, experimental design, and applied conservation.",
            examples: {
                protistBasics:       "Design an identification key for the five protist supergroups that a student could use in the field given only a light microscope and basic staining equipment. The key must include: (a) at least three observable features at each decision point; (b) a correct terminus for each of the five supergroups; (c) examples at each terminus. Test your key against Paramecium, Plasmodium, Euglena, a diatom, and Amoeba.",
                protistClassification: "Construct a detailed annotated diagram comparing the cell structure of three protists: Euglena (Excavata), Paramecium (Alveolata), and a diatom (Stramenopila). For each, annotate: (a) locomotion structure and mechanism; (b) nutritional strategy and relevant organelles; (c) osmoregulatory structure if present; (d) protective surface structure; (e) nucleus type and number. Use this to highlight one key feature that distinguishes each supergroup.",
                protistReproduction: "Construct a fully annotated life cycle diagram for Plasmodium falciparum. Your diagram must include: (a) all named stages in both the human host and mosquito vector; (b) the type of reproduction (sexual/asexual) at each stage; (c) the cell type invaded at each stage; (d) the clinical consequence associated with each human stage; (e) the stage targeted by each of the following interventions: insecticide-treated bed nets, artemisinin, and transmission-blocking vaccines.",
                protistEcology:      "Propose a research project to investigate whether inoculating bleached coral with thermally tolerant Symbiodinium clade D can restore reef health under conditions of chronic thermal stress. Your proposal must include: (a) hypothesis and null hypothesis; (b) experimental design with appropriate controls; (c) measurable outcomes and how they relate to coral health; (d) potential confounding variables; (e) ethical considerations for working in a protected reef ecosystem."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name some protist examples but cannot place them in supergroups",
                "Conflates protists with bacteria ('single-celled organisms are all the same')",
                "Cannot distinguish autotrophic from heterotrophic protists without prompting",
                "Believes all protists cause disease",
                "Treats 'Protista' as a valid monophyletic kingdom",
                "Cannot explain the difference between flagella and cilia structurally"
            ],
            immediateNextSteps: [
                "Before supergroups: establish that protists are eukaryotes (nucleus, membrane-bound organelles) — contrast one protist cell (Amoeba) with one prokaryote (E. coli) side by side, labelling five eukaryotic features absent in the prokaryote.",
                "Draw the 'protist umbrella': five supergroup branches, each with two examples, with animals/plants/fungi shown as twigs emerging from within the eukaryote tree — visually demonstrating paraphyly.",
                "Introduce only three nutritional categories first (photoautotroph/heterotroph/mixotroph) with one clear example each before any classification detail. Euglena as mixotroph is the most memorable entry point.",
                "Correct the 'all protists cause disease' error immediately with numbers: most protists are free-living and ecologically essential; only a small minority are parasitic. Provide the phytoplankton oxygen statistic (50% of global O₂) to reframe the group as beneficial.",
                "For flagella vs cilia: draw the same 9+2 diagram for both, then differentiate by number (few flagella vs many cilia) and beating pattern only — emphasise structural identity before behavioural difference."
            ],
            misconceptionsToAddress: [
                "Protists are prokaryotes → eukaryote feature comparison diagram (above)",
                "Protista is a valid kingdom → paraphyly umbrella diagram (above)",
                "All protists cause disease → phytoplankton statistic reframe (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can name three of five supergroups correctly with one example each",
                "Correctly identifies photoautotrophy and heterotrophy but struggles with mixotrophy",
                "Understands that oomycetes are not fungi but cannot give more than one line of evidence",
                "Can describe binary fission and conjugation but cannot explain what conjugation achieves genetically",
                "Knows Plasmodium causes malaria but cannot outline the life cycle stages",
                "Confuses contractile vacuole (osmoregulation) with food vacuole (digestion)"
            ],
            immediateNextSteps: [
                "For supergroup recall: build a one-page supergroup reference card with mnemonic ESAAO (Excavata, SAR, Archaeplastida, Amoebozoa, Opisthokonta) — two examples per supergroup, one defining feature per supergroup. Review daily for one week.",
                "For mixotrophy: frame it as a spectrum, not a category — draw a line from obligate autotroph (plant) through mixotroph (Euglena) to obligate heterotroph (Amoeba). Place three protists on the line. This prevents binary thinking about nutrition.",
                "For oomycete vs fungus: build a three-evidence table (cell wall, phylogeny, flagella) — fill all cells before attempting any evaluation question about oomycetes.",
                "For conjugation genetics: draw the micronucleus trajectory specifically — meiosis → four haploid products → three degenerate → one divides mitotically → one migrates to partner → fusion → new diploid micronucleus. Never describe conjugation without tracing this path.",
                "For contractile vs food vacuole: use colour-coding — contractile vacuole = blue (water/osmoregulation); food vacuole = orange (nutrition). On every Paramecium diagram, colour-code both and label their functions before any practice question."
            ],
            misconceptionsToAddress: [
                "Contractile vacuole = digestion → colour-coded dual vacuole diagram (above)",
                "Conjugation = asexual reproduction → micronucleus trajectory diagram (above)",
                "Oomycetes = fungi → three-evidence comparison table (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Correctly places all five supergroups with multiple examples and defining features",
                "Explains paraphyly using a phylogenetic tree and distinguishes it from polyphyly and monophyly",
                "Outlines the Plasmodium life cycle with correct stage names and host transitions",
                "Connects diatom frustule structure to the size reduction paradox and its resolution",
                "Explains coral bleaching at the cellular level including reactive oxygen species",
                "Can compare all three nutritional strategies with accurate protist examples and ecological significance"
            ],
            immediateNextSteps: [
                "Extend the Plasmodium cycle to connect specific stages to drug and vaccine targets — annotate every stage on the life cycle diagram with the intervention that targets it.",
                "Investigate secondary endosymbiosis: trace the membrane count argument for chloroplasts in Euglena (3 membranes) vs green algae (2 membranes) and draw the endosymbiotic event that explains the extra membrane.",
                "Connect protist ecology to quantitative data: look up the estimated annual carbon flux via the biological carbon pump and calculate what fraction of annual human CO₂ emissions it sequesters — this grounds the ecology in real numbers.",
                "Explore antigenic variation in Trypanosoma: research VSG (variant surface glycoprotein) switching and explain at the molecular level why this prevents effective vaccine development.",
                "Analyse real bleaching event data: find published records of Great Barrier Reef bleaching events (2016, 2017, 2020, 2022) and connect sea surface temperature anomalies to bleaching extent — apply the cellular mechanism to real-world data."
            ],
            misconceptionsToAddress: [
                "Apicoplast is photosynthetically active → clarify it is a non-photosynthetic relic plastid with biosynthetic (not light-harvesting) functions — a common error when students learn that apicomplexans evolved from photosynthetic ancestors"
            ]
        },

        expert: {
            characteristics: [
                "Constructs phylogenetic arguments for supergroup placement using molecular and ultrastructural evidence",
                "Analyses primary literature on protist biology — interprets phylogenetic trees, evaluates evidence for supergroup boundaries",
                "Connects endosymbiotic theory to plastid membrane counts across all supergroups (primary, secondary, tertiary endosymbiosis)",
                "Evaluates drug targets in protist parasites at the biochemical level (e.g. apicoplast fatty acid synthesis, kinetoplast mitochondrial genome)",
                "Critically assesses conservation strategies for protist-dependent ecosystems (coral reefs, diatom-based carbon sequestration)"
            ],
            immediateNextSteps: [
                "Read a primary paper on eukaryotic supergroup phylogenomics (e.g. Burki et al. 2020, 'The New Tree of Eukaryotes') — evaluate the evidence used to place each supergroup and identify which supergroup boundaries remain contested.",
                "Investigate the apicoplast as a drug target: research fatty acid synthesis pathway II (FASII) in the apicoplast, why it is absent in animals (making it parasite-specific), and which experimental drugs target it.",
                "Analyse the evidence for and against Symbiodinium clade D inoculation as a coral conservation strategy — evaluate the trade-offs between thermal tolerance and photosynthetic efficiency across Symbiodinium clades.",
                "Apply metabolic control analysis to diatom carbon flux: estimate what fraction of fixed carbon is exported to depth vs remineralised in the water column and evaluate what physical and biological factors determine this efficiency ratio."
            ],
            misconceptionsToAddress: [
                "Supergroup boundaries are fully resolved → the tree of eukaryotes remains actively debated, particularly the placement of Excavata (possibly non-monophyletic) — experts should know which nodes are well-supported and which are contested"
            ]
        }
    }
},


fungi: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about fungal biology from memory without requiring understanding of mechanisms. The student reproduces definitions, lists, and classifications accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot yet do this, no higher level is accessible.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts with no explanation. 'Chitin is the polysaccharide in fungal cell walls' is remember-level. Adding 'which distinguishes fungi from plants because...' crosses into understand.",
            examples: {
                fungiBasics:       "Define hypha, mycelium, septum, and coenocytic. State the chemical composition of fungal cell walls.",
                fungiNutrition:    "List three types of exoenzyme secreted by fungi. Name the two steps of absorptive nutrition in the correct order.",
                fungiReproduction: "List the four stages of the fungal sexual cycle in order. Name the sexual spore type produced by Ascomycota and by Basidiomycota.",
                fungiEcology:      "Name one fungal species that forms ectomycorrhizae and one that forms arbuscular mycorrhizae. State two ecological roles of fungi.",
                classification:    "List the five major fungal phyla. For each, identify the distinctive sexual reproductive structure."
            }
        },

        understand: {
            description: "Explain the meaning behind facts — why chitin is selectively toxic as a drug target, why external digestion requires exoenzymes, why the dikaryotic phase is distinct from diploidy. The student must demonstrate WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, connects, or explains. A correct causal explanation the student could not have produced by memorising the question-answer pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand goes beyond remember by requiring a mechanism or reason. 'Dikaryotic means n+n' is remember. 'Dikaryotic differs from diploid because two genetically distinct haploid nuclei coexist without fusing — karyogamy has not yet occurred — meaning the genomes remain separate and both are expressed' is understand.",
            examples: {
                fungiBasics:       "Explain why the hyphal body plan is well suited to absorptive nutrition. Your answer must connect surface area, substrate contact, and monomer absorption explicitly.",
                fungiNutrition:    "Explain why fungi must secrete exoenzymes before absorbing nutrients, with specific reference to why large polymers cannot be absorbed directly.",
                fungiReproduction: "Explain the biological significance of the dikaryotic phase. Your answer must distinguish n+n from 2n and explain what genetic advantage the dikaryotic state provides.",
                fungiEcology:      "Explain why white-rot fungi — but not brown-rot fungi — can fully mineralise dead wood. Your answer must identify the specific enzyme class responsible.",
                classification:    "Explain why Glomeromycota cannot be cultured in isolation from a plant host, connecting this to the metabolic dependency of obligate mutualists."
            }
        },

        apply: {
            description: "Use known concepts to solve a problem not seen before in this exact form. The student selects the relevant concept, applies it correctly, and produces a specific prediction, calculation, or classification.",
            cognitiveDemand: "Procedure execution in a novel situation. The student decides which concept applies, uses it correctly, and produces a concrete output.",
            verbs: ["Predict", "Classify", "Determine", "Apply", "Use", "Solve", "Identify from data"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Classify the following reaction as white-rot or brown-rot decomposition: a fungus degrades only the cellulose fraction of wood, leaving a brown lignin residue' requires applying the white/brown-rot distinction to a novel substrate description.",
            examples: {
                fungiBasics:       "A researcher finds a fungal specimen with coenocytic hyphae producing sporangiospores. Apply your knowledge of phylum characteristics to predict which phylum this specimen most likely belongs to. Justify using two criteria.",
                fungiNutrition:    "Predict what would happen to the growth of a saprotrophic fungus if its exoenzyme genes were deleted. Specify which step of absorptive nutrition would fail and what the consequence would be for hyphal extension.",
                fungiReproduction: "A Basidiomycete mycelium undergoes plasmogamy with a compatible partner. Predict the nuclear state of the resulting mycelium and state how long karyogamy would be expected to be delayed.",
                fungiEcology:      "Apply the concept of mycorrhizal nutrient exchange to predict what would happen to phosphorus uptake in a wheat crop if the soil mycorrhizal community were eliminated by fungicide treatment.",
                classification:    "Classify the following organism: produces flagellated zoospores, lives in pond water, reproduces sexually by producing thick-walled resting spores. State which phylum and justify using all three characteristics."
            }
        },

        analyze: {
            description: "Break down experimental data or a complex scenario into its components, identify patterns, and draw conclusions from evidence. The student moves from data to interpretation and must derive conclusions not given to them.",
            cognitiveDemand: "Decomposition and inference from evidence. The student reaches a conclusion justified from the provided evidence, not retrieved from memory.",
            verbs: ["Identify", "Determine", "Deduce", "Analyse", "Distinguish", "Interpret", "Compare"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'A fungus shows sigmoidal growth on cellulose but not on lignin, and produces pale-coloured wood residue. Determine its rot type and exoenzyme profile' — the student must assemble clues (pale residue = cellulose removed = brown-rot, but then recognise the contradiction with the given description and resolve it).",
            examples: {
                fungiBasics:       "A mycologist reports a fungal specimen with septate hyphae, cup-shaped fruiting bodies, and sexual spores produced inside sac-like structures in groups of eight. Analyse the evidence and identify the phylum and fruiting body type. Justify each identification step.",
                fungiNutrition:    "Enzyme assay data for three fungal isolates: Isolate A produces laccase and lignin peroxidase; Isolate B produces cellulase only; Isolate C produces protease and lipase but no cell wall-degrading enzymes. Analyse the nutritional strategy and likely ecological niche of each isolate.",
                fungiReproduction: "A researcher treats a Basidiomycete culture with a drug that prevents septal pore formation. Analyse what consequences this would have for (a) cytoplasmic streaming; (b) the dikaryotic state maintenance; (c) clamp connection function.",
                fungiEcology:      "In a forest plot where all ectomycorrhizal fungi were eliminated, seedling survival declined by 78% compared to controls, but established adult trees showed no immediate decline. Analyse why established trees and seedlings responded differently, connecting your answer to the carbon transfer function of mycorrhizal networks.",
                classification:    "Two fungal isolates both produce large fruiting bodies, but Isolate X shows clamp connections on dikaryotic hyphae while Isolate Y shows ascogenous hyphae developing from a fertilised ascogonium. Analyse the reproductive biology and identify the phylum of each isolate."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, accuracy, or quality of a claim, experimental design, or conclusion. The student must apply criteria, weigh evidence, and defend a position with explicit reasoning.",
            cognitiveDemand: "Judgement with justification. The student identifies an error or limitation, explains the criterion by which it fails, and states what would be correct or better.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Defend", "Appraise", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims fungi are more closely related to plants than to animals because both have cell walls — evaluate this claim' requires stating it is incorrect (judgement), explaining that cell wall presence is a convergent feature (criterion), and providing the correct evidence (fungi and animals are both opisthokonts, united by molecular phylogeny — correction).",
            examples: {
                fungiBasics:       "A biology textbook states: 'Fungi are simple, plant-like organisms that absorb nutrients from soil like plant roots do.' Evaluate this description, identifying every error or oversimplification and providing the correct statement for each.",
                fungiNutrition:    "A student claims: 'White-rot and brown-rot fungi both fully decompose dead wood — the colour difference is just cosmetic.' Evaluate this claim in full, specifying which component each type degrades, what remains after decomposition, and why the distinction matters ecologically.",
                fungiReproduction: "Evaluate whether a researcher is justified in concluding that a fungus is asexual because no sexual structures have been observed in culture over 12 months. Your evaluation must address: the possibility of cryptic sexuality, the conditions required to trigger sexual reproduction, and what additional experiments would be needed.",
                fungiEcology:      "Evaluate the claim that 'lichens demonstrate that parasitism and mutualism are fundamentally different relationships.' Consider evidence from recent research suggesting the photobiont may sometimes experience net harm, and conclude whether the lichen relationship is unambiguously mutualistic.",
                classification:    "A researcher proposes classifying Glomeromycota within Zygomycota because both groups were historically placed together and both reproduce asexually. Evaluate this proposal using molecular phylogenetic and reproductive biological criteria."
            }
        },

        create: {
            description: "Generate something new — an experimental design, a novel diagram, a model, or an integrated explanation — that requires combining multiple concepts from the lesson into a coherent original output.",
            cognitiveDemand: "Synthesis and original production. The student produces output that did not exist before and requires assembling multiple concepts. A strong create-level response is internally consistent, scientifically plausible, and fully addresses the brief.",
            verbs: ["Design", "Propose", "Construct", "Develop", "Formulate", "Plan", "Derive"],
            whatDistinguishesThisLevel: "Create requires original output. 'Design an experiment to determine whether an unknown fungal isolate is saprotrophic or biotrophic' cannot be answered by reproducing a memorised procedure — it requires designing substrate assays, culture conditions, host infection trials, and controls, integrating nutrition, ecology, and experimental design.",
            examples: {
                fungiBasics:       "Design a dichotomous identification key that could be used to assign an unknown fungal specimen to one of the five major phyla using only observable reproductive and hyphal characteristics. The key must correctly resolve all five phyla using yes/no questions about hyphal type, spore motility, sexual spore structure, and mating strategy.",
                fungiNutrition:    "Propose an experiment to determine which exoenzymes are responsible for the ability of an unknown soil fungus to grow on lignin as its sole carbon source. Include: (a) your experimental design and controls; (b) how you would collect and analyse culture filtrate for enzyme activity; (c) how you would confirm that the enzyme, not a metabolite, is responsible for lignin degradation; (d) how you would identify the specific enzyme by molecular means.",
                fungiReproduction: "Construct a fully annotated diagram of the complete sexual reproductive cycle of a Basidiomycete, from two haploid mycelia to basidiospore dispersal. Label: plasmogamy, dikaryotic mycelium, clamp connections, basidiocarp formation, basidia, karyogamy, meiosis, basidiospore production and dispersal. Annotate the ploidy at each stage.",
                fungiEcology:      "Formulate a research proposal to investigate whether mycorrhizal network carbon transfer between established trees and seedlings is sufficient to explain observed seedling survival rates in closed-canopy forest. Include: (a) your hypothesis; (b) experimental design with isotope labelling; (c) controls; (d) predicted results under the mycorrhizal transfer hypothesis and under the null hypothesis; (e) one potential confounding variable and how you would address it.",
                classification:    "Develop an annotated evolutionary timeline of the five fungal phyla, showing the sequence in which each phylum diverged, the key morphological or reproductive innovation that defines each phylum, and one representative organism per phylum. Connect each innovation to a specific ecological opportunity it enabled."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Knows that fungi are different from plants but cannot state the specific differences (no chlorophyll, chitin not cellulose, heterotrophic)",
                "Identifies the mushroom as 'the fungus' — does not know the mycelium is the organism",
                "Cannot distinguish sexual from asexual spores or name specific spore types",
                "Confuses mutualistic and parasitic ecological relationships",
                "Cannot distinguish dikaryotic (n+n) from diploid (2n)"
            ],
            immediateNextSteps: [
                "Before anything else, draw the three-kingdom comparison table: fungi (chitin, heterotrophic, no chlorophyll) vs plants (cellulose, autotrophic, chlorophyll) vs animals (no wall, heterotrophic, no chlorophyll). Memorise this before moving to any other content.",
                "Draw the mushroom-as-fruiting-body diagram: show the underground mycelium as the majority of the organism, with the mushroom as a small reproductive structure above ground. Write: 'Mushroom = fruit. Mycelium = tree.' Keep this diagram visible during all further study.",
                "Master the sexual cycle sequence before memorising spore names: plasmogamy → dikaryotic phase → karyogamy → meiosis → spore dispersal. Write the sequence from memory five times. Only then attach specific spore names to the meiosis step.",
                "Draw dikaryotic vs diploid with labelled separate nuclei (n+n) vs a single merged nucleus (2n). Write: 'Dikaryotic: two separate haploid nuclei, NOT fused.' Use different colours for the two nuclei.",
                "Use mutualism/parasitism/commensalism diagrams with arrows: mutualism = two arrows pointing toward each organism (both benefit); parasitism = one arrow toward fungus, one damage arrow toward host. Apply to mycorrhizae and pathogenic fungi."
            ],
            misconceptionsToAddress: [
                "Mushroom = organism → fruiting body diagram (above)",
                "Fungi are plants → three-kingdom comparison table (above)",
                "Dikaryotic = diploid → labelled nucleus diagram (above)"
            ]
        },

        developing: {
            characteristics: [
                "Correctly identifies fungi as heterotrophic eukaryotes with chitin cell walls",
                "Understands that the mycelium is the organism but cannot explain the adaptive advantage of the hyphal form",
                "Distinguishes sexual and asexual reproduction but confuses specific spore types across phyla",
                "Can name mycorrhizae as mutualistic but cannot describe the structural difference between ecto- and arbuscular types",
                "Can place fungi into the correct ecological role (decomposer/mutualist/pathogen) but cannot explain the mechanism"
            ],
            immediateNextSteps: [
                "For the hyphal body plan: calculate surface area-to-volume ratio for a sphere vs a cylinder of equal volume — observe how the cylinder (hypha) has far higher SA:V. Connect this explicitly to absorptive nutrition: more surface area = more absorption sites = higher nutrient uptake.",
                "For spore types: build a two-column table — sexual spores (meiotic, genetic diversity) vs asexual spores (mitotic, genetically identical). Then add a row for each phylum. Never add a new phylum until the existing entries are memorised.",
                "For mycorrhizae: draw ecto and arbuscular side by side. Ecto: hyphae between cells (Hartig net), mantle around root, NO cell entry. Arbuscular: hyphae inside cells, arbuscule inside plasma membrane invagination. Label the key difference: cell entry YES/NO.",
                "For ecological mechanisms: for each role (decomposer/mutualist/pathogen) write a specific enzyme or structural interaction — decomposer: cellulase/ligninase; mutualist: phosphorus transfer via arbuscule; pathogen: haustorium penetration.",
                "For phylum classification: focus first on Ascomycota vs Basidiomycota as they are most clinically and ecologically relevant. Ascomycota: ascus with ascospores (sac with spores inside). Basidiomycota: basidium with basidiospores (club with spores outside). Draw both structures."
            ],
            misconceptionsToAddress: [
                "Ecto vs arbuscular mycorrhizae confusion → side-by-side diagram with cell entry YES/NO (above)",
                "Spore type confusion → sexual/asexual table by phylum (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Explains absorptive nutrition mechanistically — exoenzyme secretion, polymer hydrolysis, monomer absorption via transporters",
                "Correctly distinguishes dikaryotic from diploid and explains the adaptive significance of the prolonged n+n phase",
                "Identifies all five phyla by their sexual reproductive structures and provides a specific ecological example for each",
                "Compares ectomycorrhizae and arbuscular mycorrhizae by structure, fungal partner, plant partner, and nutrient exchange",
                "Connects fungal ecology to biogeochemical cycling at the ecosystem level"
            ],
            immediateNextSteps: [
                "Investigate secondary metabolite production: research how penicillin is biosynthesised in Penicillium chrysogenum and why a fungus would produce an antibacterial compound — connect secondary metabolism to competitive exclusion of bacteria from shared substrates.",
                "Study the population genetics of mating types: most fungi have only two mating types (+ and −), but Schizophyllum commune has over 23,000 mating types. Research why more mating types increase the probability of successful compatible encounters in a sparse population.",
                "Analyse a published mycorrhizal network experiment using isotope labelling: evaluate the experimental design, identify controls, assess whether the data support the carbon transfer hypothesis, and identify one alternative explanation.",
                "Compare the pathogenesis mechanisms of three fungal pathogens: Candida (morphological switching from yeast to hyphae), Aspergillus (conidial evasion of immune response), and Cryptococcus (polysaccharide capsule). Identify the common theme of immune evasion.",
                "Explore the lichen physiology in detail: how does the fungal partner regulate the photobiont population density? Research the leaky mutualism hypothesis and evaluate whether lichens are truly mutualistic or whether the fungus exerts parasitic control over the photobiont."
            ],
            misconceptionsToAddress: [
                "Fungi as simple organisms → secondary metabolite complexity and mating type systems (above)",
                "Lichen as strict mutualism → leaky mutualism hypothesis (above)"
            ]
        },

        expert: {
            characteristics: [
                "Discusses fungal evolution in the context of molecular phylogenetics — opisthokonts, horizontal gene transfer of mating type loci, convergent evolution of fruiting body morphology",
                "Analyses mycorrhizal network dynamics using carbon flux data and isotope labelling experiments",
                "Connects fungal secondary metabolism to competitive ecology and pharmaceutical discovery",
                "Critically evaluates the classification of Glomeromycota and other phylogenetically contentious groups",
                "Designs experiments that distinguish alternative hypotheses about fungal ecology or physiology"
            ],
            immediateNextSteps: [
                "Read the primary literature on mycorrhizal network carbon transfer: specifically evaluate the Simard et al. (1997) Nature paper — assess the isotope labelling design, the controls used, and whether the data unambiguously support bidirectional carbon transfer or could be explained by alternative mechanisms.",
                "Investigate the holobiont concept as applied to lichens: evaluate whether the lichen should be conceptualised as a two-partner mutualism or as a complex multi-partner consortium including bacterial communities in the thallus.",
                "Study the molecular basis of fungal pathogenicity using comparative genomics: compare the genome of a pathogenic Fusarium species with a closely related non-pathogen — identify effector proteins, secondary metabolite clusters, and host-range determinants.",
                "Model the carbon cycle contribution of fungal decomposition: using published data on soil respiration rates and fungal biomass, estimate the fraction of annual terrestrial CO₂ flux attributable to fungal metabolism and evaluate the implications for climate change feedback loops."
            ],
            misconceptionsToAddress: [
                "Molecular phylogenetics may challenge any classification — always check whether the taxon under discussion has been revised by recent phylogenomic work"
            ]
        }
    }
},

viruses: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about viral structure, classification, replication, and drug/vaccine types from memory without requiring explanation of mechanisms.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot do this, they cannot access higher-level questions.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response reproduces facts without explanation. 'HIV is a retrovirus' is remember-level. 'HIV is a retrovirus because its ssRNA genome is reverse-transcribed to dsDNA and integrated into the host chromosome' crosses into understand.",
            examples: {
                virusBasics:           "List the structural components of an enveloped virus. Define tropism. State two differences between a virus and a bacterium.",
                viralReplication:      "List the nine steps of the HIV replication cycle in order. Name the three enzymes unique to HIV that are targeted by antiretroviral drugs.",
                viralPathogenesis:     "Define latency. Name two viruses that establish latency and the cell type in which each does so. List three cytopathic effects viruses can produce.",
                antiviralsAndVaccines: "List the five types of vaccine. For each, write one example. State the mechanism of action of oseltamivir in one sentence."
            }
        },

        understand: {
            description: "Explain the biological logic behind viral facts — connect genome type to replication strategy, connect structural features to environmental stability, and explain why specific drugs or vaccines work.",
            cognitiveDemand: "Translation and interpretation. The student must supply the causal connection, not just the fact.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or reason. 'Enveloped viruses are sensitive to detergent' is remember. 'Enveloped viruses are sensitive to detergent because their lipid bilayer envelope is disrupted by amphipathic molecules — destroying envelope integrity renders the virion unable to fuse with host cell membranes' is understand.",
            examples: {
                virusBasics:           "Explain why a virus that infects respiratory epithelial cells cannot infect neurons, even though neurons are also human cells. Your answer must reference tropism and receptor distribution.",
                viralReplication:      "Explain why the HIV provirus represents a barrier to cure that active replication drugs cannot overcome. Your answer must distinguish what antivirals target from what the latent provirus does not produce.",
                viralPathogenesis:     "Explain why much of the damage in severe viral infections (e.g. influenza, COVID-19) is immune-mediated rather than directly caused by the virus. Your answer must reference cytokine signalling.",
                antiviralsAndVaccines: "Explain why HAART uses three drugs from different classes simultaneously rather than a single maximally potent drug. Your answer must reference the probability of simultaneous resistance mutations."
            }
        },

        apply: {
            description: "Use classification rules, replication logic, or pharmacological principles to solve a new problem — classify an unknown virus, predict a drug effect, or work through a replication step in an unfamiliar virus.",
            cognitiveDemand: "Procedure execution in a novel context. The student selects the correct framework and applies it accurately.",
            verbs: ["Classify", "Predict", "Determine", "Calculate", "Apply", "Identify", "Deduce"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Classify hepatitis C virus (positive-sense ssRNA) using the Baltimore system and predict its replication site and polymerase requirement.' The student must apply Baltimore rules, not recall that HCV is Class IV.",
            examples: {
                virusBasics:           "A newly discovered virus has an icosahedral capsid with no envelope, a diameter of 30 nm, and is resistant to 70% ethanol. Predict: (a) its environmental stability; (b) likely transmission route; (c) why alcohol-based hand sanitiser would be ineffective against it.",
                viralReplication:      "A researcher treats HIV-infected cells with a drug that blocks protease activity. Predict: (a) whether new viral RNA and proteins will still be produced; (b) what the released virions will look like; (c) whether those virions will be infectious. Explain each prediction mechanistically.",
                viralPathogenesis:     "A patient presents with recurrent cold sores triggered by sun exposure. Apply your knowledge of HSV latency and reactivation to explain: (a) why the sores recur at the same site; (b) what cellular event UV triggers; (c) why antiviral suppressive therapy reduces but does not eliminate recurrences.",
                antiviralsAndVaccines: "An immunocompromised patient requires a vaccine against influenza. Apply your knowledge of vaccine types to identify which type would be contraindicated, which would be recommended, and justify each decision with a mechanistic reason."
            }
        },

        analyze: {
            description: "Break down experimental data, clinical scenarios, or molecular diagrams to identify patterns, deduce mechanisms, and draw justified conclusions from evidence.",
            cognitiveDemand: "Decomposition and inference from evidence. The student derives a conclusion not given to them, justified from the evidence provided.",
            verbs: ["Analyse", "Identify", "Deduce", "Distinguish", "Interpret", "Determine", "Classify"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'A Lineweaver-Burk plot shows equal y-intercepts and different x-intercepts — identify inhibition type' is analyze in enzymes; 'Given this viral growth curve and these drug treatment data, identify which step of replication is blocked and justify using the growth curve features' is the equivalent in virology.",
            examples: {
                virusBasics:           "Electron micrographs of an unknown virus show: icosahedral symmetry, diameter ~100 nm, no lipid membrane, and multiple spikes inserted directly into the capsid surface. Analyse the micrograph data to: (a) classify the virus by structural type; (b) predict its environmental stability and transmission route; (c) identify which vaccine platform would be most appropriate and why.",
                viralReplication:      "A one-step growth experiment with a new phage shows: latent period = 30 minutes; eclipse period = 20 minutes; burst size = 50. A second phage shows: latent period = 60 minutes; eclipse period = 45 minutes; burst size = 200. Analyse the replication strategies of each phage — which would outcompete the other in a bacterial population over 6 hours? Show your reasoning numerically.",
                viralPathogenesis:     "A patient with HIV has maintained undetectable viral load on HAART for 10 years. A CD4+ T cell count is performed: 350 cells/μL (below normal of 500–1500). Analyse why the CD4+ count remains below normal despite viral suppression and what this implies about the long-term immunological consequences of HIV infection.",
                antiviralsAndVaccines: "Kinetic data show: untreated influenza neuraminidase — Km = 0.8 mM, Vmax = 200 nmol/min. With oseltamivir — Km = 5.0 mM, Vmax = 200 nmol/min. With zanamivir — Km = 0.9 mM, Vmax = 80 nmol/min. Analyse: (a) the inhibition type for each drug; (b) which drug would be overcome by high substrate concentration; (c) which resistant mutation (NA H275Y increases oseltamivir Km 500-fold) would more severely impact each drug."
            }
        },

        evaluate: {
            description: "Make a justified judgement about the validity of a claim, adequacy of an experimental approach, clinical strategy, or drug design decision. Identify criteria, apply them to the evidence, and reach a defensible conclusion.",
            cognitiveDemand: "Judgement with justification. The student identifies a flaw or strength, states the criterion by which it is judged, and states the correct position.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Defend", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A public health official states that the annual influenza vaccine is unnecessary because the immune system remembers all flu strains from previous infections. Evaluate this claim.' The student must engage with the specific claim, apply their knowledge of antigenic drift, and reach a supported verdict — not just restate what antigenic drift is.",
            examples: {
                virusBasics:           "Evaluate the claim: 'Because enveloped viruses are more fragile in the environment, they are less dangerous pathogens than naked viruses.' Identify what is correct in the claim, what conflation is being made, and provide specific counterexamples that contradict the conclusion.",
                viralReplication:      "Evaluate the claim: 'mRNA vaccines could alter a patient's DNA because RNA can be converted to DNA, as occurs in HIV replication.' Identify precisely what is scientifically accurate in the claim, identify the critical molecular step that makes HIV reverse transcription possible that is absent in mRNA vaccine recipients, and deliver a clear verdict on whether the risk described is real.",
                viralPathogenesis:     "Evaluate the clinical strategy of withholding antiviral treatment from an HIV-positive patient whose CD4+ count is 600 cells/μL and viral load is detectable but low. Assess the current evidence-based guidelines, weigh the risks of early vs delayed treatment initiation, and reach a justified clinical recommendation.",
                antiviralsAndVaccines: "Evaluate the statement: 'Live attenuated vaccines are always superior to inactivated vaccines because they generate stronger immunity.' Assess the statement against the criteria of immune response breadth, safety in different patient populations, stability, and examples where inactivated vaccines are the standard of care. Deliver a nuanced verdict."
            }
        },

        create: {
            description: "Generate an original output — an experimental design, a drug strategy, a regulatory diagram, a classification key, or a public health model — by integrating multiple virology concepts into a coherent, scientifically plausible plan.",
            cognitiveDemand: "Synthesis and original production. The student assembles multiple concepts into a new output that addresses a specific goal.",
            verbs: ["Design", "Propose", "Construct", "Formulate", "Develop", "Plan", "Derive"],
            whatDistinguishesThisLevel: "Create requires original output. 'Design a combination antiviral regimen for a novel coronavirus, justifying each drug class chosen, predicting resistance patterns, and identifying the step of the viral life cycle targeted by each component.'",
            examples: {
                virusBasics:           "Design a laboratory protocol to determine whether an unknown clinical isolate is a virus or a bacterium. Specify: (a) the physical tests you would perform (filtration, antibiotic sensitivity); (b) the microscopy approaches; (c) the molecular tests; (d) what result from each test would distinguish virus from bacterium. Justify each test with the property it detects.",
                viralReplication:      "Propose a 'shock and kill' strategy to eliminate the HIV latent reservoir. Your proposal must specify: (a) which agent you would use to reactivate the provirus and why; (b) what drug combination you would use to prevent new infection during shock; (c) how the immune system or a therapeutic agent would kill the reactivated cells; (d) what experimental endpoints you would use to confirm reservoir reduction. Address at least two risks of this approach.",
                viralPathogenesis:     "Construct a diagram and explanatory text for the complete pathogenesis of HIV infection from initial exposure to AIDS. Include: (a) entry route and target cell; (b) acute viraemia phase and immune response; (c) establishment of latency and the latent reservoir; (d) mechanisms of gradual CD4+ T cell depletion; (e) immunological threshold for AIDS definition; (f) the two most common AIDS-defining illnesses and why they occur at low CD4+ counts.",
                antiviralsAndVaccines: "Formulate a vaccine development strategy for a newly emerged negative-sense RNA zoonotic virus with 40% case fatality rate. Specify: (a) which vaccine platform you would choose for rapid deployment and why; (b) which viral antigen you would target and why; (c) what adjuvant strategy you would use and why; (d) how you would design a phase I clinical trial; (e) what immune correlates of protection you would measure as endpoints."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can define virus, capsid, and envelope but cannot connect structural features to functional consequences",
                "Knows that viruses use host ribosomes but cannot explain what this means for antiviral drug design",
                "Can name HIV as a retrovirus but cannot explain what reverse transcription is or why it matters clinically",
                "Confuses bacteria and viruses; believes antibiotics treat viral infections",
                "Knows vaccines 'train the immune system' but cannot distinguish humoral from cellular immunity or vaccine types",
                "Cannot distinguish the eclipse period from the latent period or from biological latency"
            ],
            immediateNextSteps: [
                "Start with a single diagram: draw a naked vs enveloped virion side by side, label five components each, and write two functional consequences of the envelope (e.g. sensitivity to soap; membrane fusion entry). Do not proceed to replication until this is automatic.",
                "Build the 'virus vs bacterium vs human cell' three-column comparison table immediately: ribosomes (70S/80S/none), cell wall (yes/peptidoglycan/no), membrane (yes/yes/yes), own energy metabolism (yes/yes/no for virus). This table explains in one diagram why antibiotics don't work on viruses.",
                "For HIV: watch or draw a single-panel animation of reverse transcription — RNA → DNA using RT. Write one sentence: 'HIV is an RNA virus that makes DNA from its RNA genome using reverse transcriptase.' Repeat until automatic before touching any other HIV biology.",
                "For the eclipse/latency distinction: make two flash cards. Eclipse period card: 'The time inside a lytic infection when no intact virions are present — virus is disassembled and replicating.' Latency card: 'Long-term dormancy — viral genome present in host cell, not actively replicating, not detected by immune system.' Do not use these terms interchangeably.",
                "For antibiotics vs antivirals: write the sentence 'Antibiotics target BACTERIAL-specific structures. Viruses have none of these. Antivirals target VIRAL-specific enzymes (RT, integrase, protease, RdRp).' Paste this on the front of your virology notes."
            ],
            misconceptionsToAddress: [
                "Antibiotics treat viral infections → bacteria vs virus comparison table (above)",
                "Retroviruses have a DNA genome → RNA to DNA diagram with annotation (above)",
                "Eclipse period = viral clearance → eclipse vs latency flash cards (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can describe the HIV replication cycle step by step but makes errors in the order of reverse transcription and integration",
                "Correctly states that enveloped viruses are fragile but cannot explain why at the molecular level",
                "Can name two antiviral drug classes but cannot explain their mechanisms precisely",
                "Knows live attenuated vaccines are contraindicated in immunocompromised patients but cannot explain why",
                "Can name the Baltimore classes but cannot classify an unknown virus from its description alone",
                "Confuses antigenic drift with antigenic shift; knows both cause influenza variation but cannot connect each to pandemic vs seasonal risk"
            ],
            immediateNextSteps: [
                "For HIV cycle order: draw the cycle as a clock face with nine positions — label each position with the step name AND the enzyme that acts there. Test yourself by covering enzyme names and reconstructing them. Focus specifically on the RT → nuclear import → integrase sequence.",
                "For Baltimore classification: practise classifying 10 novel viruses using only genome description. Use the decision tree: dsDNA? → Class I. ssDNA? → II. dsRNA? → III. +ssRNA? → IV. −ssRNA? → V. ssRNA with RT → VI. dsDNA with RT → VII. Do not proceed until 10/10 correct.",
                "For drift vs shift: draw two diagrams. Drift: HA gene with multiple point mutation arrows accumulating over years → gradually mismatched antibodies. Shift: two viruses co-infecting one pig cell → reassorted segment combination → entirely new HA subtype → zero human immunity. Label each with pandemic risk level.",
                "For live attenuated contraindication: connect to immunology — 'live attenuated virus replicates in the host to generate immunity. In an immunocompromised host, replication is uncontrolled — the attenuated virus can cause disease.' Write this as a causal chain, not a memorised rule.",
                "For antiviral mechanisms: for each drug class, write the viral step targeted (not the drug name — the step), then the enzyme blocked, then why that enzyme is absent in host cells (selectivity basis). Selectivity is the concept to master here."
            ],
            misconceptionsToAddress: [
                "Drift vs shift conflation → two-diagram comparison (above)",
                "Live attenuated risk in immunocompromised → causal chain diagram (above)",
                "Baltimore class confusion → classification decision tree practice (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Can classify any virus by Baltimore system from a genome description and predict replication site and polymerase",
                "Correctly describes all major HIV drug classes, their targets, and why combination therapy prevents resistance",
                "Distinguishes cytopathic-effect-mediated from immune-mediated pathology with specific examples",
                "Can compare vaccine types by immune response, safety, and example with consistent accuracy",
                "Understands HSV and HIV latency at the molecular level including why current drugs cannot clear latent reservoirs",
                "Can connect viral immune evasion strategies to specific components of innate and adaptive immunity"
            ],
            immediateNextSteps: [
                "Deepen HIV drug resistance understanding: calculate the probability of dual and triple resistance mutations arising simultaneously (use error rate of 10⁻⁴ per base per cycle and genome size of 9,700 bp). Connect this calculation to the rationale for triple-drug HAART mathematically.",
                "Explore viral oncogenesis at the molecular level: for HPV E6/E7, write out the complete cell cycle pathway from G1 through S phase, annotating exactly where Rb and p53 act normally, and what happens at each checkpoint when E7 inactivates Rb and E6 degrades p53.",
                "Investigate the molecular basis of interferon resistance: research how specific viral proteins (influenza NS1, SARS-CoV-2 ORF6) block interferon signalling at specific steps in the JAK-STAT pathway. Draw the pathway and mark where each viral protein acts.",
                "Research one case study of antiviral drug resistance in depth (oseltamivir-resistant H275Y influenza or TDF-resistant HIV with K65R mutation): identify the specific amino acid change, how it alters drug binding without eliminating substrate binding, and what second-line agent is recommended.",
                "Connect viral evolution to population immunity: model antigenic drift mathematically — if HA drifts by one critical epitope mutation per year and antibody titres halve per year naturally, estimate the years before vaccination provides less than 50% protection. Connect this to annual vaccine reformulation policy."
            ],
            misconceptionsToAddress: [
                "All pathology is direct viral cytotoxicity → immune-mediated damage case studies",
                "Viral latency = low-level replication → molecular definition and clinical consequence table"
            ]
        },

        expert: {
            characteristics: [
                "Derives the rationale for HAART resistance prevention mathematically from viral mutation rates and burst sizes",
                "Analyses published one-step growth curves and viral kinetic data to draw mechanistic conclusions",
                "Integrates structural virology (cryo-EM data), molecular pharmacology (binding kinetics), and clinical outcomes in a unified analysis",
                "Connects viral pathogenesis to immune system function at the systems level — understanding how viral depletion of CD4+ cells dismantles the entire adaptive immune architecture",
                "Critically evaluates vaccine trial design — assesses endpoint selection, correlates of protection, and limitations of immunogenicity vs efficacy data"
            ],
            immediateNextSteps: [
                "Read and critically evaluate a primary research paper on a novel antiviral: assess the target selection rationale, the in vitro kinetic data (Ki, selectivity index), the resistance profile, and what additional experiments would be needed before clinical trial entry.",
                "Apply phylogenetic thinking to viral evolution: trace the molecular evolution of HIV from SIVcpz through the founder bottleneck to global pandemic clades — identify which genetic changes in Env enabled human-to-human transmission and what this implies for the evolutionary biology of viral emergence.",
                "Investigate CRISPR-based approaches to eliminating the HIV provirus: assess the technical barriers (guide RNA specificity, delivery to resting T cells, off-target cutting) and evaluate whether this approach is likely to succeed within a 10-year timeframe based on published preclinical data.",
                "Model viral spread using basic epidemiological parameters: use R₀ estimates for influenza, SARS-CoV-2, and measles. Connect R₀ to herd immunity threshold (1 − 1/R₀). Calculate the vaccine coverage needed for elimination vs eradication for each virus. Connect this to antigenic drift as a barrier to eradication."
            ],
            misconceptionsToAddress: [
                "Lineweaver-Burk as the gold standard for inhibitor characterisation → apply to neuraminidase inhibitor data and assess whether the double-reciprocal amplification of error affects the inhibition type conclusion"
            ]
        }
    }
},

bacteria: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about bacterial structure, reproduction, and classification from memory without requiring understanding of mechanism or significance.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot yet do this, they cannot access any higher level.",
            verbs: ["State", "List", "Name", "Identify", "Define", "Label", "Write"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts without explanation. 'Gram-positive bacteria have thick peptidoglycan' is remember-level. 'Gram-positive bacteria have thick peptidoglycan, which retains crystal violet because...' crosses into understand.",
            examples: {
                bacteriaBasics:      "State the definition of a prokaryote. List three structural features that distinguish bacteria from eukaryotic cells.",
                bacterialStructure:  "Name the four steps of the Gram staining procedure in order. State the colour result for Gram-positive and Gram-negative organisms.",
                reproduction:        "Define binary fission and generation time. Write the formula for calculating bacterial population size after n generations.",
                HGT:                 "List the three mechanisms of horizontal gene transfer. For each, state whether it requires a bacteriophage, a sex pilus, or neither.",
                metabolism:          "Name the five oxygen tolerance categories of bacteria. Give one example organism for each."
            }
        },

        understand: {
            description: "Explain the mechanism, connection, or biological significance behind facts — link structure to function, connect cause to effect, and interpret what a result means.",
            cognitiveDemand: "The student rephrases, connects, or explains rather than repeating. A correct mechanistic explanation the student could not have produced by memorising the Q&A pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or reason. 'Crystal violet is retained by Gram-positive bacteria' is remember. 'Crystal violet is retained because the thick peptidoglycan layer traps the crystal violet-iodine complex when decolouriser is applied, whereas the thin peptidoglycan of Gram-negative bacteria cannot retain it' is understand.",
            examples: {
                bacteriaBasics:      "Explain why bacteria can survive and reproduce without a membrane-bound nucleus, with specific reference to where transcription and translation occur in a prokaryotic cell.",
                bacterialStructure:  "Explain why Gram-negative bacteria are generally more resistant to antibiotics than Gram-positive bacteria. Your answer must reference both the outer membrane and the periplasmic space.",
                reproduction:        "Explain why the log phase of the growth curve is the period of maximum antibiotic effectiveness for bactericidal antibiotics. Connect your answer to the mechanism of action of at least one specific antibiotic class.",
                HGT:                 "Explain why conjugation is considered the most clinically dangerous mechanism of HGT. Your answer must explain what the F-plasmid encodes and why R-plasmids are dangerous when transferred.",
                metabolism:          "Explain why obligate anaerobes die in the presence of oxygen, using specific reference to toxic oxygen species and the absence of detoxifying enzymes."
            }
        },

        apply: {
            description: "Use known equations, classification schemes, and concepts to solve a new problem or make a specific prediction not encountered in exactly this form before.",
            cognitiveDemand: "The student selects the correct tool and uses it in a novel situation. A common failure here is knowing the formula but misidentifying which variables to substitute, or correctly identifying a mechanism but failing to apply it to the specific scenario.",
            verbs: ["Calculate", "Predict", "Classify", "Apply", "Use", "Determine", "Sketch"],
            whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. 'A bacterium has a generation time of 30 minutes. Calculate the number of bacteria after 4 hours starting from 100 cells' requires substitution into N = N₀ × 2ⁿ with correct unit conversion. Explaining what generation time means is understand, not apply.",
            examples: {
                bacteriaBasics:      "A bacterial infection begins with 500 cells at time zero. The generation time is 40 minutes. Calculate the number of bacteria after 4 hours. Show all working including the calculation of n.",
                bacterialStructure:  "An unknown bacterium is Gram-stained. It retains crystal violet and appears purple. Predict: (a) the relative thickness of its peptidoglycan layer; (b) whether it possesses an outer membrane; (c) its likely sensitivity to penicillin. Justify each prediction.",
                reproduction:        "Predict what would happen to the rate of spread of a resistance plasmid if the conjugation pilus were chemically blocked. Apply conjugation mechanism specifically.",
                HGT:                 "A hospital outbreak involves E. coli and Klebsiella pneumoniae both carrying the same carbapenem resistance gene. Identify the most likely HGT mechanism responsible and state the evidence from the scenario that supports your choice.",
                metabolism:          "Classify the following organism using the four-part metabolic classification: 'uses light energy; fixes CO₂ as carbon source; grows in the presence or absence of oxygen.' State the name of each classification category and the term for this organism."
            }
        },

        analyze: {
            description: "Break down experimental data, clinical scenarios, or molecular evidence into components; identify patterns; draw conclusions from evidence that was not directly stated.",
            cognitiveDemand: "Decomposition and inference. The student reaches a conclusion that was not given to them and justifies it from evidence. A key marker: the student uses data to identify what type of organism, mechanism, or resistance strategy is present.",
            verbs: ["Identify", "Deduce", "Analyse", "Interpret", "Distinguish", "Classify", "Determine"],
            whatDistinguishesThisLevel: "Analyze requires the student to work from evidence to conclusion. 'Given that an antibiotic-resistant strain has unchanged outer membrane permeability and no detectable β-lactamase, deduce the resistance mechanism' requires the student to reason through which mechanisms remain — target modification or efflux — and identify which fits best. This is different from applying a known formula.",
            examples: {
                bacteriaBasics:      "A clinical isolate fails to Gram stain as either positive or negative — it appears colourless after all steps. Identify at least two possible explanations for this result. For each, state what structural feature of the organism would account for the anomalous result.",
                bacterialStructure:  "Population data shows that adding penicillin to a bacterial culture reduces the viable count by 99.9% within 2 hours, but the remaining 0.1% survives indefinitely even at higher concentrations. Analyse whether this survival is most likely due to: (a) resistance, (b) tolerance, or (c) endospore formation. Justify your reasoning using the growth curve concept.",
                HGT:                 "An E. coli strain is sensitive to ampicillin. After co-culture with a resistant Klebsiella strain (in the presence of DNase, which degrades free DNA), the E. coli acquires ampicillin resistance. Analyse which HGT mechanism is responsible and which mechanism is ruled out by the DNase control. Justify fully.",
                metabolism:          "Enzyme assays show that a newly isolated bacterium produces both catalase (converts H₂O₂ to H₂O) and superoxide dismutase (converts O₂⁻ to H₂O₂). Analyse what this reveals about the organism's oxygen tolerance category, and predict in which environments it could survive.",
                antibioticResistance: "A strain of Pseudomonas aeruginosa is resistant to ciprofloxacin. Minimum inhibitory concentration testing shows: intracellular ciprofloxacin concentration is 10-fold lower than in a susceptible strain; DNA gyrase affinity for ciprofloxacin is unchanged. Identify the resistance mechanism and explain the evidence that supports your conclusion."
            }
        },

        evaluate: {
            description: "Make a supported judgement about a claim, experimental design, or conclusion — apply criteria, weigh evidence, identify flaws, and defend a position with full justification.",
            cognitiveDemand: "Judgement with justification. The student identifies an error or limitation, explains why it fails a specific criterion, and states what would be correct or better. Simply identifying that something is wrong is not evaluate-level.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Defend", "Appraise", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims that completing only half an antibiotic course is safe if symptoms resolve. Evaluate this claim.' The student must identify the claim's error (selection of resistant minority continues), apply the criterion (eradication of entire population required), and state the consequence (resistance enrichment and relapse). Merely restating that one should complete antibiotic courses is understand-level, not evaluate.",
            examples: {
                bacteriaBasics:      "Evaluate the statement: 'Bacteria are dangerous organisms that should be eliminated from all human environments.' Your response must weigh evidence from both sides — beneficial and harmful roles — and arrive at a reasoned, qualified conclusion.",
                bacterialStructure:  "A student proposes using alcohol hand gel to prevent C. diff transmission in a hospital ward. Evaluate whether this is appropriate, identifying the structural feature of C. diff that determines the effectiveness of this intervention and recommending an alternative with justification.",
                reproduction:        "Evaluate the following experimental design: A researcher claims to have measured the generation time of E. coli by sampling the culture every 30 minutes and counting colonies on agar. Identify two methodological weaknesses in this approach and state how each would affect the accuracy of the generation time calculated.",
                HGT:                 "Evaluate the claim: 'Antibiotic resistance is caused by antibiotic use.' Distinguish between the role of antibiotics in creating resistance mutations vs selecting for pre-existing resistance, citing evidence from evolutionary biology. State the correct relationship between antibiotic use and resistance evolution.",
                metabolism:          "A biotechnology company proposes using an obligate anaerobe to produce ethanol in a large industrial fermenter open to the air. Evaluate whether this is feasible, identifying the metabolic and structural reasons why it would or would not work, and suggest an alternative organism type with justification."
            }
        },

        create: {
            description: "Generate something new — an experimental design, a resistance management strategy, a metabolic pathway annotation, or a classification system — by integrating multiple concepts from across the lesson into a coherent, original output.",
            cognitiveDemand: "Synthesis and original production. The student produces an output that did not exist before and requires combining multiple concepts. A strong create-level response is internally consistent, scientifically plausible, and fully addresses the brief.",
            verbs: ["Design", "Propose", "Construct", "Develop", "Formulate", "Plan", "Devise"],
            whatDistinguishesThisLevel: "Create requires original output, not retrieval or calculation. 'Design a hospital infection control protocol for a ward experiencing a multi-drug resistant organism outbreak' requires the student to integrate knowledge of HGT mechanisms, resistance types, growth curve (antibiotic timing), disinfection strategies, and patient isolation — none of this can be answered from a memorised procedure.",
            examples: {
                bacteriaBasics:      "Design a practical experiment to estimate the generation time of a safe laboratory bacterium (e.g. E. coli K-12). Specify: (a) starting cell density and how you would measure it; (b) growth conditions and controls; (c) time points for sampling and the measurement method; (d) how you would calculate generation time from the data; (e) one potential source of error and how you would minimise it.",
                bacterialStructure:  "Propose a novel antibiotic strategy targeting a structural feature unique to Gram-negative bacteria (other than the cell wall). Specify: (a) the structural target; (b) the molecular mechanism of inhibition; (c) why this target is selective for bacteria over human cells; (d) one likely resistance mechanism and how the drug's design could minimise it.",
                reproduction:        "Construct a resistance management protocol for a hospital ICU experiencing an outbreak of carbapenem-resistant Klebsiella. Your protocol must integrate: (a) antibiotic stewardship measures that minimise selection pressure; (b) infection control measures that interrupt HGT; (c) patient cohorting strategy based on the growth curve; (d) laboratory surveillance to detect new resistance mechanisms.",
                HGT:                 "Devise an experiment to determine which mechanism of HGT is responsible for resistance transfer between two bacterial species in a clinical isolate pair. Specify the controls needed to rule out each alternative mechanism, the observable outcome that confirms each mechanism, and how you would distinguish generalised from specialised transduction.",
                metabolism:          "Formulate a metabolic profile for a hypothetical bacterium optimised for bioremediation of oil spills in cold (4°C), aerobic deep-ocean environments. Specify: (a) energy source; (b) carbon source; (c) oxygen requirement category; (d) expected temperature adaptation (psychrophile); (e) the metabolic pathway used to degrade hydrocarbons; (f) why this metabolic profile is better suited to this environment than a mesophilic heterotroph."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can state that bacteria are prokaryotes but cannot identify specific structural differences from eukaryotes",
                "Knows Gram-positive = purple and Gram-negative = pink but cannot explain why",
                "Cannot correctly apply N = N₀ × 2ⁿ without errors in calculating n from time and generation time",
                "Confuses the three HGT mechanisms, particularly transformation and transduction",
                "Believes antibiotics cause resistance rather than select for pre-existing resistant mutants",
                "Cannot distinguish viruses from bacteria — treats antibiotic treatment as applicable to both"
            ],
            immediateNextSteps: [
                "Before memorising anything: draw a prokaryotic and eukaryotic cell side by side with five labelled differences — do not proceed to Gram staining until this comparison is automatic.",
                "For Gram staining: memorise the four steps as a sequence using the acronym CIDS (Crystal violet → Iodine → Decolouriser → Safranin). For each step, write one sentence explaining what is happening to the cell wall. Do not memorise the colour result without understanding the mechanism.",
                "For generation time calculations: practise converting time to number of generations first. Always write n = time ÷ generation time before touching N = N₀ × 2ⁿ. Use small numbers (e.g. 2 hours, 30-minute generation time → n = 4) until the unit conversion is automatic.",
                "For HGT: learn one distinguishing feature for each mechanism only: transformation = naked DNA, no cell contact needed; transduction = requires a phage; conjugation = requires physical cell contact via pilus. Do not add more detail until these three anchors are solid.",
                "For antibiotic resistance: use the analogy of finding survivors after a flood — the flood (antibiotic) does not create flood-resistant people, it removes those who cannot survive. Resistant bacteria existed before the antibiotic; the antibiotic removes susceptible competitors."
            ],
            misconceptionsToAddress: [
                "Antibiotics cause resistance → survivor analogy (above)",
                "Viruses = bacteria → explicit comparison: viruses have no ribosomes, no cell wall, no independent metabolism; antibiotics have no target in viruses",
                "Gram stain colour memorised without mechanism → CIDS sequence with one-sentence mechanism for each step"
            ]
        },

        developing: {
            characteristics: [
                "Can correctly apply N = N₀ × 2ⁿ with occasional errors in unit conversion between time and generations",
                "Distinguishes Gram-positive from Gram-negative structurally but cannot explain LPS significance",
                "Can name all three HGT mechanisms but confuses generalised and specialised transduction",
                "Understands that antibiotics have different targets but cannot connect target to resistance mechanism",
                "Can describe binary fission steps but struggles to connect growth curve phases to clinical scenarios",
                "Classifies organisms as aerobe or anaerobe but confuses the five oxygen tolerance categories"
            ],
            immediateNextSteps: [
                "For LPS: add it to your Gram-negative cell diagram explicitly — draw the outer membrane as a separate bilayer with LPS molecules projecting outward. Annotate that LPS = lipid A (endotoxin) + O-antigen, and that lipid A triggers the inflammatory response. Connect to septic shock: Gram-negative bloodstream infection releases LPS → immune activation → systemic inflammation.",
                "For transduction: draw both types. Generalised: phage accidentally packages any bacterial DNA (like picking up a random file); specialised: phage integrates next to specific genes and takes only those genes when it excises. The key distinction is whether the genes transferred are random or location-specific.",
                "For antibiotic target → resistance table: create a three-column table: antibiotic class → cellular target → resistance mechanism. Complete one row at a time: penicillin → transpeptidase → β-lactamase OR altered PBP. Do not move to the next row until the first is solid.",
                "For growth curve and clinical scenarios: annotate the four phases with one clinical consequence each: lag = infection establishing, no symptoms yet; log = rapid symptom development, maximum antibiotic effectiveness; stationary = symptoms plateau, immune response engaging; death = resolution or sepsis. Use this annotated curve to explain any clinical timeline question.",
                "For oxygen categories: build a linear spectrum from obligate aerobe → microaerophile → facultative anaerobe → aerotolerant anaerobe → obligate anaerobe. Place one organism on each point. Understand that the key variable is the presence and activity of catalase and superoxide dismutase."
            ],
            misconceptionsToAddress: [
                "Generalised vs specialised transduction confusion → two-diagram approach (above)",
                "Antibiotic target not connected to resistance → target-resistance table (above)",
                "Oxygen categories reduced to 'aerobe' and 'anaerobe' → five-point spectrum (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Applies N = N₀ × 2ⁿ fluently, including reverse calculations (calculating generation time from population data)",
                "Correctly interprets Gram staining results and connects cell wall architecture to antibiotic sensitivity for specific drug classes",
                "Distinguishes all three HGT mechanisms and connects conjugation to multi-drug resistance plasmid spread",
                "Maps antibiotic class to mechanism and predicts the corresponding resistance mechanism",
                "Connects the bacterial growth curve to clinical scenarios including antibiotic timing and resistance emergence",
                "Classifies bacteria metabolically using all four classification axes"
            ],
            immediateNextSteps: [
                "Calculate generation time from growth data: given N₀ and N at time t, rearrange n = (log N − log N₀)/log 2 and g = t/n to derive generation time. Practise with five datasets including one where you must verify whether growth is exponential by checking that the doubling time is constant across intervals.",
                "Connect LPS to pharmacology: research why polymyxin antibiotics target Gram-negative bacteria specifically (they disrupt LPS in the outer membrane). Compare the mechanism of polymyxins to that of penicillin — one targets the outer membrane, one targets peptidoglycan synthesis. This deepens understanding of the Gram-negative outer membrane as an antibiotic barrier.",
                "Explore biofilm biology: read about how biofilm formation changes antibiotic sensitivity (bacteria in biofilms can be 100–1000× more resistant). Connect to: (a) the growth curve — biofilm bacteria are often in stationary phase; (b) reduced antibiotic penetration through the polysaccharide matrix; (c) clinical importance in prosthetic joint infections and chronic lung infections in cystic fibrosis.",
                "Map all antibiotic resistance mechanisms onto a single diagram of a Gram-negative cell: label where β-lactamase acts (periplasm), where efflux pumps act (inner membrane), where porin loss occurs (outer membrane), and where target modification occurs (ribosome or transpeptidase). This spatial diagram integrates all four resistance mechanisms visually."
            ],
            misconceptionsToAddress: [
                "Generation time as a fixed property of the species → show that it varies with temperature, nutrients, and growth phase",
                "Resistance mechanisms treated as separate lists → integrate all four onto the single-cell spatial diagram (above)"
            ]
        },

        expert: {
            characteristics: [
                "Derives population equations and applies them to predict epidemic dynamics and antibiotic dosing intervals",
                "Connects bacterial cell wall structure to the mechanism of every major antibiotic class and its corresponding resistance mechanism",
                "Analyses HGT in evolutionary terms — connects plasmid incompatibility groups, integrons, and transposons to resistance gene mobility",
                "Applies metabolic classification to predict ecological niche and biotechnology utility of any described organism",
                "Connects gut microbiome disruption to disease mechanisms at the systems level"
            ],
            immediateNextSteps: [
                "Study the pharmacodynamics of antibiotics: understand the distinction between time-dependent killing (e.g. β-lactams — efficacy depends on time above MIC) and concentration-dependent killing (e.g. aminoglycosides — efficacy depends on peak concentration relative to MIC). Apply these principles to determine optimal dosing regimens for each class.",
                "Investigate integrons and transposons as resistance gene vehicles: understand that individual resistance genes are often flanked by transposable elements (Tn) that allow them to move between plasmids and chromosomes. This explains how resistance gene cassettes assemble onto R-plasmids and why multi-drug resistance can emerge rapidly.",
                "Read a primary paper on CRISPR-Cas systems as bacterial immune systems: connect to the topic of HGT — CRISPR provides sequence-specific immunity against bacteriophages and foreign DNA, limiting transduction and transformation. Then connect to biotechnology: the same system was co-opted to create the CRISPR-Cas9 gene editing tool.",
                "Model antibiotic resistance spread using basic epidemiological mathematics: apply the concept of basic reproduction number (R₀) to resistance plasmids — if one resistant bacterium can transfer its plasmid to more than one other bacterium before being killed, resistance will spread exponentially in a bacterial population. This quantitative framing connects microbiology to epidemiology."
            ],
            misconceptionsToAddress: [
                "All HGT treated as equivalent in frequency and clinical impact → quantitative comparison of rates under clinical conditions",
                "CRISPR understood only as a biotechnology tool → frame it first as a bacterial immune system limiting HGT, then as a repurposed tool"
            ]
        }
    }
},

microbialGenetics: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about microbial genetics from memory without requiring understanding of mechanism or significance. The student reproduces definitions, lists, and named facts accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot perform at this level, no higher level is accessible.",
            verbs: ["State", "List", "Name", "Define", "Identify", "Label", "Write"],
            whatDistinguishesThisLevel: "A remember-level response reproduces information without explanation. 'Name the three mechanisms of horizontal gene transfer' is remember-level. Explaining how any of them works crosses into understand.",
            examples: {
                dnaReplication:  "State the names of the three models of DNA replication proposed before the Meselson-Stahl experiment. Name the enzyme responsible for synthesising new DNA strands in bacteria.",
                mutation:        "List four types of point mutation. For each, state the effect on the amino acid sequence of the encoded protein.",
                geneTransfer:    "Name the three mechanisms of horizontal gene transfer in bacteria. For each, identify whether direct cell-to-cell contact is required.",
                geneExpression:  "Define: promoter, operator, repressor, inducer, corepressor. State which genes are encoded in the lac operon.",
                regulation:      "Identify the default state (ON or OFF) of the lac operon and the trp operon. Name the molecule that acts as an inducer in the lac operon."
            }
        },

        understand: {
            description: "Explain the molecular mechanism behind a genetic process, connect structure to function, and interpret what a result means biologically. The student demonstrates they know WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. A correct mechanistic explanation that the student could not produce by memorising the question-answer pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires mechanism. 'The lac operon is turned on by allolactose' is remember. 'Allolactose binds the lac repressor, causing a conformational change that reduces its affinity for the operator, allowing RNA polymerase to transcribe the structural genes' is understand.",
            examples: {
                dnaReplication:  "Explain why DNA replication requires both a leading and a lagging strand, and why only the lagging strand is synthesised discontinuously. Your answer must reference the antiparallel nature of DNA and the directionality of DNA polymerase.",
                mutation:        "Explain why a frameshift mutation caused by a single nucleotide insertion is typically more damaging than a missense mutation. Reference the effect of each on the downstream protein sequence.",
                geneTransfer:    "Explain why Hfr × F⁻ crosses produce merodiploids that almost never become fully F⁺. Your answer must reference the position of the F factor in the Hfr chromosome and the mechanism of conjugal transfer.",
                geneExpression:  "Explain why the lac operon requires both the absence of active repressor AND the presence of the CAP-cAMP complex for maximal transcription. What is the biological advantage of this dual control?",
                regulation:      "Contrast the lac and trp operons with respect to their default state, the signal that changes expression, and the molecular mechanism of that change."
            }
        },

        apply: {
            description: "Use known rules, models, and mechanisms to solve a problem or make a prediction in a novel context not previously encountered in exactly this form.",
            cognitiveDemand: "Procedure execution in a novel situation. The student selects the correct model, applies it correctly, and produces a specific output (prediction, classification, calculation).",
            verbs: ["Predict", "Classify", "Determine", "Apply", "Sketch", "Describe the outcome of"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Predict the expression state of the lac operon when a cell is grown in lactose only' requires application of operon rules to a specific condition — the student is not reproducing a memorised answer but running the regulatory logic forward.",
            examples: {
                dnaReplication:  "A researcher labels bacterial DNA with ³H-thymidine for one generation, then transfers cells to unlabelled medium. Predict the distribution of radioactive label in daughter chromosomes after one and two additional divisions. Sketch the result and identify which replication model it supports.",
                mutation:        "The wild-type codon at position 6 of a protein is GAG (glutamic acid). Predict the effect on protein function if this codon is changed to: (a) GAA; (b) GTG; (c) TAG. Classify each mutation type.",
                geneTransfer:    "A competent F⁻ Streptococcus pneumoniae strain is mixed with DNA extracted from a streptomycin-resistant (str-r) strain. Describe the steps by which the F⁻ strain could become streptomycin-resistant. Identify the HGT mechanism.",
                geneExpression:  "Predict the transcriptional state of the lac operon under each condition: (a) lactose absent, glucose present; (b) lactose present, glucose absent; (c) lactose absent, glucose absent; (d) lactose present, glucose present.",
                regulation:      "A mutation destroys the attenuator region of the trp operon. Predict the effect on trp gene expression when intracellular tryptophan is high. Explain your reasoning."
            }
        },

        analyze: {
            description: "Break down experimental data or a complex genetic scenario into components, identify patterns, and draw conclusions that were not stated in the problem. The student moves from evidence to interpretation.",
            cognitiveDemand: "Decomposition and inference from evidence. The student reaches a conclusion not given to them and justifies it from the data or scenario.",
            verbs: ["Identify", "Deduce", "Analyse", "Classify", "Interpret", "Determine the mechanism of", "Distinguish"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion, not from a formula to an answer. Given data on resistance transfer frequencies, the student deduces whether HGT occurred by conjugation, transduction, or transformation — this requires pattern recognition and elimination, not calculation.",
            examples: {
                dnaReplication:  "A bacterial strain shows a 100-fold increase in spontaneous mutation rate. Sequencing reveals the mutD gene (encoding the ε subunit of DNA Pol III with 3'→5' exonuclease activity) is non-functional. Analyse how loss of this activity increases mutation rate. Identify which step of replication is compromised and classify the type of mutations expected to be elevated.",
                mutation:        "The Ames test is performed on three compounds: compound A gives 15 revertants (background: 12), compound B gives 380 revertants with S9 and 14 without S9, compound C gives 420 revertants without S9 and 430 with S9. Classify each compound and state what can be concluded about each.",
                geneTransfer:    "Bacterium X is resistant to chloramphenicol. When mixed with bacterium Y (sensitive), Y becomes resistant at a frequency of 10⁻³ per cell. Resistance transfer is blocked by DNase treatment but not by a filter that prevents cell contact. Analyse which HGT mechanism is responsible and justify using each experimental result.",
                geneExpression:  "A lacZ⁻ lacI⁺ strain is made merodiploid by introducing an F′ lac⁺ lacI⁻ episome. Analyse the transcriptional state of the lac structural genes. Is the lacZ gene on the chromosome expressed? Justify your answer using trans-acting and cis-acting logic.",
                regulation:      "An allosteric repressor protein shows sigmoidal binding to its corepressor rather than hyperbolic. Analyse what this reveals about repressor structure and explain the biological advantage of a switch-like response for a biosynthetic pathway repressor."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, experimental design, or conclusion. The student identifies an error or limitation, explains the criterion by which it fails, and states what would be correct.",
            cognitiveDemand: "Judgement with justification. The student must say not just that something is wrong but why — by reference to a specific mechanism, rule, or experimental standard.",
            verbs: ["Evaluate", "Critique", "Assess", "Justify", "Appraise", "Determine whether", "Defend"],
            whatDistinguishesThisLevel: "Evaluate requires engaging with a specific claim or design — not simply describing the correct situation. 'A student claims transformation always requires a pilus. Evaluate.' The student must identify the error (pilus is for conjugation), state what transformation actually requires (competence for naked DNA uptake), and explain why the student's claim is incorrect.",
            examples: {
                dnaReplication:  "A student claims that because DNA polymerase has 3'→5' exonuclease activity, it can synthesise DNA in both directions. Evaluate this claim precisely — identify what the 3'→5' exonuclease activity actually does, why synthesis direction is independent of it, and why all synthesis remains 5'→3'.",
                mutation:        "A researcher concludes that a chemical is not mutagenic because the Ames test gives negative results. Evaluate whether this is a valid conclusion, identifying at least two classes of mutagenic compounds that could give false-negative results in the standard Ames test.",
                geneTransfer:    "Evaluate the following claim: 'Conjugation is always more efficient than transformation for gene transfer between bacteria because it transfers more DNA.' Identify the contexts in which this claim is true and the contexts in which it is not, with mechanistic justification for each.",
                geneExpression:  "A student states: 'The lac repressor binds the inducer and is then degraded, allowing transcription.' Identify all errors in this statement, state the correct mechanism for each error, and explain how the student's model would differ from the actual model in terms of what happens when inducer is removed.",
                regulation:      "Evaluate whether the trp operon's dual control mechanism (repressor + attenuation) is redundant or functionally complementary. Assess the evidence for each position — specifically, what would happen to cellular tryptophan control if only one mechanism were present."
            }
        },

        create: {
            description: "Generate an original experimental design, model, diagram, or regulatory circuit by integrating multiple concepts from the lesson. The output must not exist before and must address a specific scientific goal.",
            cognitiveDemand: "Synthesis and original production. The student assembles multiple concepts into a coherent, internally consistent, novel output that could not be produced by recalling any single fact or formula.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Engineer"],
            whatDistinguishesThisLevel: "Create requires original production, not retrieval. 'Design an experiment to determine whether a newly discovered resistance gene is transferred by conjugation, transformation, or transduction' requires the student to devise the specific experimental conditions, controls, and criteria for distinguishing each mechanism — this cannot be answered by reproducing a memorised procedure.",
            examples: {
                dnaReplication:  "Design an experiment using density gradient centrifugation to determine whether replication of a newly discovered bacterial plasmid is semi-conservative, conservative, or dispersive. Specify: (a) labelling strategy; (b) how you would distinguish the three models by banding pattern; (c) controls; (d) what result at the third generation would definitively eliminate the dispersive model.",
                mutation:        "Propose a modified Ames test protocol that could detect mutagens that specifically cause transversion mutations (purine↔pyrimidine changes) rather than transitions. Specify: (a) what type of Salmonella strain you would engineer and why; (b) how you would confirm the type of reversion mutation occurring; (c) what positive and negative controls you would include.",
                geneTransfer:    "Design a complete experiment to determine whether antibiotic resistance in a clinical E. coli isolate is plasmid-borne and transferable by conjugation. Include: (a) how you would confirm resistance is plasmid-encoded; (b) mating experiment design including strains, markers, and selection conditions; (c) how you would confirm conjugation (vs transformation or transduction) is the mechanism; (d) what further tests would determine which resistance genes are present.",
                geneExpression:  "Engineer a synthetic two-input AND-gate gene circuit in E. coli that produces a fluorescent reporter protein ONLY when BOTH inducer A and inducer B are present. Using operon logic: (a) design the promoter/operator architecture; (b) specify which regulatory proteins you would use; (c) predict the reporter output under all four input combinations (A−B−, A+B−, A−B+, A+B+); (d) describe an experiment to verify each output state.",
                regulation:      "Construct a fully annotated regulatory circuit diagram for a hypothetical biosynthetic pathway (P→Q→R→S) that incorporates: (a) feedback inhibition of the first enzyme by product S; (b) a repressible operon for enzymes 1–3 with S as corepressor; (c) a positive regulatory element (activator protein) that increases transcription when precursor P accumulates. For each element, specify the molecular mechanism, reversibility, and response time."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can state that bacteria have circular chromosomes and may carry plasmids",
                "Knows transformation, transduction, and conjugation are HGT mechanisms but cannot distinguish them mechanistically",
                "Understands the lac operon has genes that are turned on by lactose but cannot explain the repressor mechanism",
                "Confuses mutation types — treats all base changes as equally damaging",
                "Does not distinguish plasmids from the chromosome — treats all DNA as equivalent",
                "Equates horizontal gene transfer with sexual reproduction in eukaryotes"
            ],
            immediateNextSteps: [
                "Before any mechanisms: draw the bacterial cell with chromosome (nucleoid), ribosomes, and one or two plasmids labelled as separate circles. Write: 'chromosome = essential genome; plasmid = optional extras.' Repeat until the structural distinction is automatic.",
                "For HGT: build a three-column table with only the column headers (mechanism / mediator / contact required?) and fill it in from scratch three times until the pattern is memorised, then add a one-line mechanism summary for each.",
                "For the lac operon: draw it in two states only — repressor ON (blocking, no lactose) and repressor OFF (allolactose bound, transcription occurring). Master these two states before introducing catabolite repression.",
                "For mutation types: classify mutations by consequence, not by cause. Create a decision tree: does the amino acid change? (no → silent); does it introduce a stop? (yes → nonsense); does it shift the reading frame? (yes → frameshift); otherwise → missense.",
                "For HGT vs vertical inheritance: use a river analogy — vertical inheritance is water flowing downstream (parent to offspring); HGT is a pipe connecting two different rivers (unrelated cells sharing DNA). Write the analogy beside your HGT table."
            ],
            misconceptionsToAddress: [
                "Plasmids = mini-chromosomes → draw them as separate optional circles",
                "All mutations are equally harmful → decision tree for mutation consequence classification",
                "HGT = bacterial sex → river analogy clarifying directionality"
            ]
        },

        developing: {
            characteristics: [
                "Can distinguish transformation, transduction, and conjugation by mediator and contact requirement",
                "Understands the lac repressor mechanism but confuses inducer (inactivates repressor) with corepressor (activates repressor)",
                "Can classify mutations as silent, missense, nonsense, or frameshift given a codon change",
                "Knows Hfr strains transfer chromosomal DNA but cannot explain why recipients are rarely F⁺",
                "Can state that catabolite repression involves glucose and cAMP but cannot explain the molecular chain",
                "Confuses generalised and specialised transduction — treats them as the same"
            ],
            immediateNextSteps: [
                "For inducer vs corepressor confusion: create a two-row comparison card — row 1: inducer (e.g. allolactose) → binds repressor → repressor INACTIVATED → operon ON; row 2: corepressor (e.g. tryptophan) → binds aporepressor → repressor ACTIVATED → operon OFF. Practise saying 'inducer inactivates; corepressor activates' until it is automatic.",
                "For catabolite repression: trace the signal chain step by step: glucose ↓ → adenylate cyclase active → cAMP ↑ → cAMP binds CAP → CAP-cAMP binds upstream site → RNAP recruited → transcription ↑. Write this chain as a flow diagram and reproduce it from memory.",
                "For Hfr × F⁻: draw the Hfr chromosome with the F factor split at the integration site, one end at the origin of transfer, the other end (carrying most of the F factor) at the end of the chromosome. Annotate: 'Transfer starts here — F factor comes last — rarely completes.' This diagram explains merodiploid formation and why F⁺ recipients are rare.",
                "For generalised vs specialised transduction: use a packaging analogy — generalised = phage accidentally grabs random bacterial DNA (any gene); specialised = phage excises imprecisely, grabbing only adjacent host genes (specific genes only). Make one diagram for each.",
                "For mutation classification practice: take 10 codon-change problems, work through the decision tree for each, and check accuracy before moving to phenotype prediction."
            ],
            misconceptionsToAddress: [
                "Inducer activates repressor → comparison card (above)",
                "Hfr always produces F⁺ → chromosome diagram with F factor position",
                "Generalised = specialised transduction → packaging analogy diagrams"
            ]
        },

        proficient: {
            characteristics: [
                "Explains lac operon dual control (repressor + catabolite repression) under all four glucose/lactose combinations",
                "Correctly predicts mutation phenotype from codon change including frameshift effects on downstream sequence",
                "Distinguishes F⁺, Hfr, and F′ strains and predicts outcomes of crosses between them",
                "Explains all four antibiotic resistance mechanisms at the molecular level",
                "Interprets Ames test results including the significance of S9 addition and pro-mutagen activation",
                "Connects operon logic to synthetic biology and industrial applications"
            ],
            immediateNextSteps: [
                "Work through all nine merodiploid complementation combinations for lac operon mutations (lacI⁻, lacO^c, lacZ⁻ in cis and trans configurations) — this is the most demanding application of operon logic and distinguishes proficient from expert.",
                "Apply trp operon attenuation: draw the four secondary structures of the trp leader RNA (1:2, 2:3, 3:4 hairpins) under conditions of high and low tryptophan. Explain how ribosome stalling at Trp codons determines which hairpin forms and whether termination occurs.",
                "Map a generalised transduction experiment: given marker frequencies in transductants, calculate the relative distances between three genes on the bacterial chromosome — connecting HGT mechanism to genetic mapping.",
                "For antibiotic resistance: for each of the four mechanisms, identify a specific clinical drug, the specific gene/protein involved, and the specific HGT mechanism by which resistance commonly spreads.",
                "Connect SOS response to mutation rate: calculate the approximate increase in mutation frequency during SOS induction and explain why this is evolutionarily advantageous in a dying population."
            ],
            misconceptionsToAddress: [
                "Vmax as enzyme-only property (analogous error: lac expression as lac-gene-only property) → derive from components to show regulatory dependence",
                "Catabolite repression as 'glucose blocks lac' without mechanism → trace the full adenylate cyclase → cAMP → CAP → promoter chain"
            ]
        },

        expert: {
            characteristics: [
                "Derives regulatory predictions for novel operon architectures from first principles",
                "Designs HGT experiments that can distinguish mechanisms and quantify transfer frequencies",
                "Analyses merodiploid complementation data to map cis vs trans regulatory elements",
                "Connects microbial genetics to evolutionary theory, epidemiology, and synthetic biology",
                "Critically evaluates published mutation or HGT data — identifies experimental limitations and alternative interpretations"
            ],
            immediateNextSteps: [
                "Read and critically evaluate the original Meselson-Stahl paper (1958): assess whether the data unambiguously support semi-conservative replication, identify potential artefacts, and evaluate the statistical power of the experiment.",
                "Apply the Luria-Delbrück fluctuation test: understand how it distinguished pre-adaptive (random) mutation from post-adaptive (Lamarckian) mutation. Calculate expected variance under each hypothesis and explain what the actual result demonstrated.",
                "Investigate CRISPR-Cas as a microbial HGT-related immune system: trace how spacers are acquired (adaptation), how they are expressed (crRNA), and how Cas nucleases destroy target DNA (interference) — connecting all three HGT mechanisms to the system's function.",
                "Design a synthetic operon that implements NOT-gate logic (gene OFF when inducer present, ON when absent) and compare its regulatory architecture to natural repressible operons."
            ],
            misconceptionsToAddress: [
                "Ames test as definitive carcinogenicity test → evaluate published false-negative rates and the classes of carcinogens that Ames-negative assays miss"
            ]
        }
    }
},

const EndSection9 = "close"