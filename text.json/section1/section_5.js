

tropisms: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about tropisms, auxin, and the Went experiment from memory without requiring understanding of why they are true. The student reproduces correct information without yet needing to explain mechanisms.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot yet do this, they cannot access any higher level.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct terms and facts but no causal explanation. 'Phototropism is growth toward light' is remember-level. 'Phototropism occurs because auxin redistributes to the shaded side, causing greater elongation there' crosses into understand.",
            examples: {
                tropismBasics:   "Define tropism and distinguish positive from negative tropism. Name four types of plant tropism.",
                phototropism:    "Name the hormone responsible for phototropic bending. Identify the type of light receptor involved in phototropism.",
                gravitropism:    "Name the organelles that act as gravity sensors in root cap cells. State the direction of root and shoot growth in positive and negative gravitropism.",
                auxinMechanism:  "State what auxin (IAA) stands for. List two effects of auxin on plant cells.",
                wentExperiment:  "Name the scientist who first isolated auxin in agar blocks. List the steps of the Went experiment in the correct order."
            }
        },

        understand: {
            description: "Explain the mechanisms connecting stimulus to growth response — connect auxin redistribution to differential elongation, connect statolith sedimentation to root bending direction. The student must demonstrate they know WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. The student explains a mechanism or causal sequence. A correct explanation that the student could not produce by memorising a question-answer pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or a reason. 'Auxin accumulates on the shaded side' is remember. 'Auxin accumulates on the shaded side because phototropin activation triggers lateral PIN carrier redistribution, moving auxin away from the lit side' is understand — the student supplies the causal link.",
            examples: {
                tropismBasics:   "Explain why tropisms are described as growth responses rather than movements. Your answer must reference what is actually happening at the cellular level.",
                phototropism:    "Explain the sequence of events from blue light striking the shoot tip to the shoot bending toward the light source. Your answer must include: receptor, hormone redistribution, and cellular response.",
                gravitropism:    "Explain why shoots and roots bend in opposite directions in response to gravity, even though both respond to the same auxin signal. Your answer must reference the differential sensitivity of root and shoot cells to auxin concentration.",
                auxinMechanism:  "Justify why a concentration of auxin that promotes shoot elongation actively inhibits root elongation. Connect this to the concept of optimal concentration and the shape of the auxin dose-response curve.",
                wentExperiment:  "Explain why Went's experiment was performed in the dark, and what would have been wrong with the conclusion if it had been performed in light."
            }
        },

        apply: {
            description: "Use the principles of tropism, auxin distribution, and concentration effects to predict outcomes in novel experimental or ecological scenarios. The student selects the correct concept and applies it to produce a specific prediction or explanation.",
            cognitiveDemand: "Procedure execution or concept application in a novel situation. The student decides which tropism principle applies and uses it correctly. A common failure: knowing that 'more auxin = more growth in shoots' without applying the concentration threshold correctly to roots.",
            verbs: ["Predict", "Determine", "Apply", "Sketch", "Calculate", "Use", "Describe the outcome of"],
            whatDistinguishesThisLevel: "Apply requires a new scenario — not a memorised example. 'Predict what happens to auxin distribution when a seedling is illuminated from the left' requires the student to apply the phototropism mechanism to produce a specific, directional answer.",
            examples: {
                tropismBasics:   "A seedling is placed on its side in a dark chamber. Predict the growth direction of (a) the shoot and (b) the root after 24 hours. Explain each prediction using the appropriate tropism mechanism.",
                phototropism:    "A coleoptile tip is removed and placed on an agar block for 2 hours in the dark. The agar block is then placed on the right side of a tipless coleoptile stump (in the dark). Predict the direction of bending and the mechanism.",
                gravitropism:    "A potted plant is placed on its side so that the shoot is horizontal. Describe the auxin distribution that will develop on the upper and lower sides of the shoot, and predict the direction of subsequent growth.",
                auxinMechanism:  "Using the auxin dose-response curve, predict whether a concentration of 10⁻⁸ mol/L will promote or inhibit growth in (a) a shoot and (b) a root. Justify each prediction with reference to optimal concentration for each organ.",
                wentExperiment:  "Predict what would happen in Went's experiment if the agar block were placed centrally (symmetrically) on the tipless coleoptile stump, in the dark. Explain your prediction."
            }
        },

        analyze: {
            description: "Break down experimental data or tropism scenarios into their components, identify patterns, and draw conclusions from evidence. The student moves from observation to mechanism — they are not told what the answer is.",
            cognitiveDemand: "Decomposition and inference from evidence. The student is given data or observations and must determine what they mean. A key marker: the student reaches a conclusion not given to them and justifies it from the evidence provided.",
            verbs: ["Identify", "Determine", "Deduce", "Analyse", "Distinguish", "Interpret", "Classify"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. Given a table of bending angles under different light wavelengths, the student must deduce which wavelengths are active in phototropism and identify what receptor is likely responsible — this cannot be answered by reproducing a memorised fact.",
            examples: {
                tropismBasics:   "A seedling is grown in a rotating clinostat (which continuously rotates the plant, averaging out the direction of gravity). After two weeks the shoot grows straight upward and the root grows straight downward. A student claims this disproves gravitropism. Analyse the student's reasoning and evaluate whether the data support this conclusion.",
                phototropism:    "The following bending angles are measured for coleoptiles illuminated with light of different wavelengths: 400 nm = 28°; 450 nm = 32°; 550 nm = 4°; 660 nm = 1°; 700 nm = 0°. Analyse these data to deduce the action spectrum of phototropism and identify the most likely receptor class.",
                gravitropism:    "A starch-deficient (pgm) Arabidopsis mutant shows only 20% of the gravitropic curvature of the wild type. A student concludes that statoliths are entirely responsible for gravitropism. Analyse the data — does this conclusion follow from the evidence? What does the residual 20% response suggest?",
                auxinMechanism:  "An experiment applies auxin at concentrations of 10⁻¹², 10⁻¹⁰, 10⁻⁸, 10⁻⁶, and 10⁻⁴ mol/L to isolated root and shoot sections. Growth data show that the concentration producing maximum root growth (10⁻¹⁰) inhibits shoot growth below the control. Analyse what this reveals about the relative sensitivity of root and shoot tissue and the shape of the dose-response curve for each.",
                wentExperiment:  "Boysen-Jensen (1913) showed that a coleoptile tip separated from its base by a gelatin layer still produced phototropic bending, but a tip separated by a mica sheet did not. Analyse what these two results together prove about the nature of the phototropic signal."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the quality of an experimental design, or the correctness of a proposed explanation. The student applies criteria, weighs evidence, identifies flaws, and defends a position.",
            cognitiveDemand: "Judgement with justification. The student identifies an error, explains why it fails against a scientific criterion, and states what would be correct. Simply saying 'this is wrong' is not evaluate-level — the student must say why and how.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims that roots grow down because they are heavier — evaluate this claim' requires the student to state the claim is incorrect, explain that roots are not passively pulled but actively grow downward via gravitropism, cite statolith sedimentation as the mechanism, and offer confirmatory evidence (horizontal root correction experiments).",
            examples: {
                tropismBasics:   "A student defines a tropism as 'when a plant moves toward or away from a stimulus.' Evaluate this definition — identify the specific error, explain what a tropism actually is at the cellular level, and give an example that illustrates why 'movement' is the wrong term.",
                phototropism:    "Evaluate the following experimental design: a student places a coleoptile in white light from the left and measures the angle of bending after 2 hours as evidence that 'light causes phototropism.' Identify two methodological weaknesses in this design and propose improvements for each.",
                gravitropism:    "Evaluate the claim: 'Shoots grow upward because they are lighter than roots and float toward the surface.' Identify the specific scientific error in this claim, explain the actual mechanism (gravitropism), and describe one piece of experimental evidence that refutes the claim.",
                auxinMechanism:  "A textbook states: 'More auxin always means more growth.' Evaluate this statement for accuracy, identifying the specific conditions under which it is true and the specific conditions under which it is false. In your evaluation, address both organ type and concentration range.",
                wentExperiment:  "Evaluate the Went experiment as evidence that 'light causes auxin to move to the shaded side.' Identify what the experiment does and does not directly prove, and explain what additional experiment would be needed to confirm lateral transport of auxin."
            }
        },

        create: {
            description: "Generate something new: an experimental design to test a tropism hypothesis, an annotated diagram integrating multiple mechanisms, a proposed hormonal model for an observed response, or a novel agricultural application. The student integrates multiple tropism concepts into a coherent, original output.",
            cognitiveDemand: "Synthesis and original production. The student produces an output that did not exist before and that requires combining multiple concepts. A strong create-level response is internally consistent, scientifically plausible, and addresses the brief completely.",
            verbs: ["Design", "Propose", "Construct", "Formulate", "Develop", "Plan", "Derive"],
            whatDistinguishesThisLevel: "Create requires original output. 'Design an experiment to determine whether the root cap is the gravity sensor for gravitropism' requires the student to specify: how to remove/shield the root cap, controls, how to measure gravitropic response, and what result would confirm or refute the hypothesis. This cannot be answered by reproducing a memorised procedure.",
            examples: {
                tropismBasics:   "Design a controlled experiment to test whether thigmotropism in a climbing plant (e.g. pea tendrils) is dependent on auxin. Your design must specify: (a) how you will provide a controlled touch stimulus; (b) how you will manipulate auxin levels (inhibitor, exogenous application, or mutant); (c) your dependent variable and how you will measure it; (d) appropriate controls; (e) the result that would confirm auxin dependence.",
                phototropism:    "Construct a fully annotated diagram showing the complete sequence of events from blue light striking the left side of a coleoptile tip to the coleoptile bending toward that light source. Your diagram must label and annotate: phototropin location, PIN carrier redistribution, auxin concentration on each side, elongation zone cells, and the resultant bending direction.",
                gravitropism:    "Propose a molecular model to explain how statolith sedimentation in the root cap generates a lateral auxin gradient in the elongation zone. Your model must: (a) identify the cellular structures involved at each step; (b) specify the role of PIN auxin efflux carriers; (c) explain how the signal is transmitted from the root cap to the elongation zone; (d) predict what a PIN-knockout mutant would show.",
                auxinMechanism:  "Formulate a detailed experimental protocol to determine the optimal auxin concentration for root elongation in a plant species of your choice. Include: (a) the range of IAA concentrations you would test and why; (b) how you would control for confounding variables; (c) how you would measure root elongation precisely; (d) how you would plot the results to produce a dose-response curve; (e) how you would identify the optimal concentration from the curve.",
                wentExperiment:  "Design an updated version of the Went experiment using modern techniques. Specify how you would use radioactively labelled IAA (¹⁴C-IAA) and autoradiography (or a modern fluorescent auxin reporter such as DII-VENUS) to directly visualise lateral auxin redistribution in a coleoptile illuminated from one side. State what this would confirm or add to Went's original conclusions."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name phototropism and gravitropism but cannot distinguish them clearly",
                "Knows auxin is 'the plant hormone' but cannot connect it mechanistically to bending",
                "Believes plants 'move' toward light rather than grow asymmetrically",
                "Cannot explain why shoots and roots respond oppositely to gravity",
                "Confuses the shoot tip as 'where bending occurs' rather than 'where auxin is produced'"
            ],
            immediateNextSteps: [
                "Draw two panels side by side: a plant bending and an animal moving. Label what is happening in each — 'irreversible cell elongation on one side' vs 'muscle contraction'. Internalise that tropisms are growth, not movement.",
                "Draw the catalytic cycle for auxin redistribution: tip → lateral transport → shaded side → elongation → bending. Annotate each arrow before attempting any question.",
                "Use the number line anchor for concentration: draw a scale from 10⁻¹² to 10⁻⁴ mol/L. Mark the optimal concentration for shoots (~10⁻⁸) and roots (~10⁻¹⁰). Shade the inhibitory zone for each. Refer to this diagram on every practice question.",
                "Draw the Went experiment step by step as a storyboard — four panels, no words. Then add the one-sentence conclusion under each panel.",
                "Before any gravitropism question: write the rule — 'Roots: positive gravitropism (downward). Shoots: negative gravitropism (upward). Same auxin, opposite effects.' Write it every time until it is automatic."
            ],
            misconceptionsToAddress: [
                "Tropism = movement → growth panel diagram (above)",
                "Auxin cause is unknown → auxin redistribution cycle (above)",
                "Same response in roots and shoots → number line anchor (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can correctly state that auxin redistributes to the shaded side in phototropism",
                "Understands that shoots bend toward light and roots grow downward but struggles to explain both from the same auxin principle",
                "Can describe the Went experiment steps but cannot critically evaluate its conclusions",
                "Confuses phototropin (blue-light receptor) with phytochrome (red-light receptor)",
                "Cannot distinguish thigmotropism from gravitropism in an unfamiliar scenario"
            ],
            immediateNextSteps: [
                "Draw the auxin dose-response curve for roots and shoots on the same axes — two curves. Mark 10⁻⁸ mol/L on both. Read off: shoots are in the 'promote' zone; roots are in the 'inhibit' zone. Use this diagram for all gravitropism questions.",
                "For receptor confusion: make a comparison card — phototropin (blue light, 400–500 nm, phototropism and stomatal opening) vs phytochrome (red/far-red, germination and shade avoidance). Never describe phototropism without naming phototropin specifically.",
                "For Went experiment evaluation: practise stating what it proves and what it does not prove. It proves a diffusible chemical causes bending. It does NOT directly prove that light moves auxin laterally — that required additional experiments with labelled IAA.",
                "For thigmotropism: focus on the cellular mechanism (Ca²⁺ influx, local auxin redistribution) and give one specific example (pea tendril, hop vine). Do not describe it as 'the same as phototropism but with touch.'"
            ],
            misconceptionsToAddress: [
                "Dose-response curve confusion → dual-axis diagram (above)",
                "Phototropin vs phytochrome → receptor comparison card (above)",
                "Went experiment over-interpretation → what it proves/doesn't prove exercise (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Correctly explains auxin redistribution mechanisms for both phototropism and gravitropism with reference to PIN carriers",
                "Accurately uses the dose-response curve to predict root and shoot responses at specific auxin concentrations",
                "Can describe the Went experiment and assess its limitations",
                "Connects statolith sedimentation to lateral PIN carrier redistribution in gravitropism",
                "Distinguishes all four major tropisms by stimulus, receptor, and response direction"
            ],
            immediateNextSteps: [
                "Investigate the molecular structure of phototropins: look up the LOV (light-oxygen-voltage) domain and the FMN chromophore. Understand why only blue light (not red) activates this domain.",
                "Derive the practical implication of the auxin dose-response curve: if the optimal shoot concentration is applied uniformly to a horizontal plant, what happens to the shoot? To the root? Work through this algebraically and check with a diagram.",
                "Research one modern technique for visualising auxin distribution in living plants (e.g. DII-VENUS reporter, DR5:GFP) and explain how it improves on the Avena curvature assay.",
                "Connect gravitropism to apical dominance: both are auxin-mediated, but apical dominance involves shoot-tip auxin suppressing lateral buds rather than causing bending. Draw a unified auxin signalling map connecting both phenomena."
            ],
            misconceptionsToAddress: [
                "PIN carriers as passive channels → research active polar transport to confirm directional, energy-dependent auxin movement",
                "Statolith role as fully understood → review pgm mutant data to recognise remaining uncertainty about gravity sensing"
            ]
        },

        expert: {
            characteristics: [
                "Connects phototropin signalling cascade molecularly: PHOT1 autophosphorylation → downstream kinase cascade → PIN relocalisation",
                "Critically evaluates the evidence for and against the Cholodny-Went hypothesis (that lateral auxin redistribution alone fully explains phototropism)",
                "Integrates multiple hormones: auxin, ethylene, ABA in tropism responses",
                "Connects tropism mechanisms to applied biotechnology: herbicide design, rooting powder concentrations, microgravity agriculture"
            ],
            immediateNextSteps: [
                "Critically read a recent paper challenging the Cholodny-Went hypothesis (e.g. Ding et al., 2011, showing that growth promotion on the shaded side, not inhibition on the lit side, is the primary driver in some species). Evaluate whether the evidence requires modifying the standard model.",
                "Investigate the interaction between phototropism and gravitropism when both act simultaneously (e.g. a horizontal shoot illuminated from below) — predict the resultant growth direction using vector addition of both auxin gradients.",
                "Research the molecular basis of hydrotropism: identify MIZ1, ABCG25, and ABA's role, and construct a signal transduction diagram from moisture gradient to root bending.",
                "Analyse the pharmacokinetics of 2,4-D as a herbicide: why does it accumulate in broadleaf plants? What degradation enzymes do monocots express that dicots lack? How does this connect to the concept of selective toxicity in pharmacology?"
            ],
            misconceptionsToAddress: [
                "Cholodny-Went as the complete explanation → read primary literature showing phototropism is more complex in some systems",
                "Auxin as the only tropism hormone → construct an integrated diagram including ethylene, ABA, and cytokinin interactions"
            ]
        }
    }
},

plantHormones: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about plant hormone identity, sites of synthesis, transport routes, and key physiological effects without requiring mechanistic explanation.",
            cognitiveDemand: "Verbatim or near-verbatim recall. The student reproduces facts about which hormone does what — no causal reasoning required.",
            verbs: ["State", "List", "Name", "Identify", "Define", "Label", "Match"],
            whatDistinguishesThisLevel: "A remember-level response contains correct hormone-function pairings but no mechanism. 'ABA causes stomatal closure' is remember-level. 'ABA causes stomatal closure by activating anion channels via SnRK2 kinase' crosses into understand.",
            examples: {
                hormoneFundamentals: "Name the five classical plant hormone classes. For each, state its primary site of biosynthesis.",
                auxin:               "State the direction of polar auxin transport in a shoot. Name the protein family responsible for auxin efflux.",
                gibberellinsAndCytokinins: "List two physiological effects of gibberellins and two of cytokinins. Identify which hormone class is synthesised primarily in root meristems.",
                abaAndEthylene:      "Define abscission. Name the two hormones most associated with leaf abscission.",
                applications:        "Identify one agricultural application for each of the five plant hormone classes."
            }
        },

        understand: {
            description: "Explain the mechanism, rationale, or biological significance behind hormone actions — connecting stimulus to response and structure to function.",
            cognitiveDemand: "The student must supply a causal link, not merely repeat a fact. An explanation that requires knowing WHY qualifies; a correct statement that could have been memorised from a question-answer pair does not.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "'Gibberellins promote stem elongation' is remember. 'Gibberellins promote stem elongation by triggering degradation of DELLA repressor proteins, releasing transcription factors that activate cell wall loosening genes' is understand — the student must supply the DELLA mechanism.",
            examples: {
                hormoneFundamentals: "Explain why plant hormone effects depend on the ratio of hormones present rather than the concentration of a single hormone alone. Use the auxin:cytokinin ratio as your example.",
                auxin:               "Explain the Cholodny-Went hypothesis for phototropism — specifically, how a unilateral light stimulus produces differential auxin distribution and asymmetric growth.",
                gibberellinsAndCytokinins: "Explain the molecular basis of gibberellin action using the DELLA protein degradation model. Justify why GA-insensitive DELLA mutants are constitutively dwarf.",
                abaAndEthylene:      "Explain why ethylene-triggered ripening is autocatalytic in climacteric fruits but not in non-climacteric fruits. Your answer must reference ACC synthase gene expression.",
                applications:        "Explain why 1-MCP (1-methylcyclopropene) extends the shelf life of cut flowers and ripening fruit, connecting its mechanism of action at the receptor level to the downstream physiological effects it prevents."
            }
        },

        apply: {
            description: "Use hormone concepts, mechanisms, and relationships to solve unfamiliar problems — predicting outcomes, interpreting experimental setups, or calculating/determining specific results.",
            cognitiveDemand: "The student selects the correct hormonal concept and uses it in a novel context. Failure at this level typically involves knowing the concept but misidentifying which hormone or which direction of effect applies.",
            verbs: ["Predict", "Determine", "Sketch", "Apply", "Calculate", "Use", "Solve"],
            whatDistinguishesThisLevel: "'Explain what apical dominance is' is understand. 'Predict what will happen to lateral bud growth if the shoot apex is removed and predict the effect of applying IAA paste to the cut surface' is apply — the student must work through the hormone logic to reach a specific, novel prediction.",
            examples: {
                hormoneFundamentals: "A botanist applies cytokinin to the lateral buds of an intact plant with a dominant shoot apex. Predict whether lateral buds will grow, and explain your prediction using the auxin:cytokinin ratio concept.",
                auxin:               "A coleoptile is illuminated from the left. Sketch the auxin distribution across the cross-section of the shoot tip after 30 minutes of unilateral illumination. Predict which side of the coleoptile will elongate more, and determine the direction of curvature.",
                gibberellinsAndCytokinins: "Barley seeds are germinated in the presence of an inhibitor of gibberellin biosynthesis. Predict the effect on α-amylase production in the aleurone layer, on starch mobilisation in the endosperm, and on seedling vigour. Apply the GA-DELLA signalling mechanism in your answer.",
                abaAndEthylene:      "Predict the effect on post-harvest shelf life of storing apples in an atmosphere containing 5 ppm 1-MCP. Apply your knowledge of the ethylene biosynthesis pathway and the ETR1 receptor mechanism in your prediction.",
                applications:        "A grower applies 2,4-D (synthetic auxin herbicide) to a wheat field containing both wheat and broadleaf weeds. Predict the outcome for each plant type and explain the physiological basis for selectivity."
            }
        },

        analyze: {
            description: "Break down experimental data or complex scenarios to identify patterns, classify mechanisms, draw evidence-based conclusions, and distinguish between alternative hormonal explanations.",
            cognitiveDemand: "The student works from evidence to conclusion rather than from a formula to an answer. The conclusion is not provided — the student derives it from the data or scenario.",
            verbs: ["Identify", "Deduce", "Classify", "Analyse", "Distinguish", "Determine", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires the student to reach a conclusion not given to them. 'Given that applying GA to a dwarf mutant fails to rescue height, determine where in the GA signalling pathway the mutation acts' is analyze — the student must reason from negative evidence to a pathway position.",
            examples: {
                hormoneFundamentals: "An experiment measures shoot elongation rate in plants treated with: (a) GA alone; (b) ABA alone; (c) GA + ABA together; (d) no hormone. Results: (a) 3× control; (b) 0.4× control; (c) 1.1× control; (d) 1× control. Analyse the interaction between GA and ABA, identify whether the interaction is synergistic or antagonistic, and determine what the combined treatment result tells you about the relative potency of each hormone.",
                auxin:               "A decapitated oat coleoptile is fitted with an agar block containing auxin placed asymmetrically on the left half of the cut surface. After 2 hours, the coleoptile has curved to the right. Identify which side has elongated more, determine the direction of auxin flow from the block, and deduce whether the result is consistent with the Cholodny-Went hypothesis.",
                gibberellinsAndCytokinins: "A researcher treats plants with GA and observes tall plants. A second researcher treats a different dwarf mutant with GA and observes no height change. Analyse what the difference in response reveals about the molecular basis of dwarfism in each mutant. Classify each mutant as GA-deficient or GA-insensitive and justify your classification.",
                abaAndEthylene:      "Stomatal conductance measurements in an Arabidopsis mutant show that stomata remain open even when whole plants are subjected to severe water stress. ABA levels in the mutant are normal. Identify where in the ABA signalling pathway the defect most likely lies, and justify your reasoning by distinguishing between defects in ABA biosynthesis, ABA perception, and downstream signalling.",
                applications:        "An orchard manager notices that apples stored in a cold room next to ethylene-generating ripening bananas spoil faster than apples stored alone. Analyse the mechanism responsible, identify the role of autocatalytic ethylene in propagating the effect, and determine what storage modification would prevent this outcome."
            }
        },

        evaluate: {
            description: "Make a justified judgement about the correctness of a claim, the validity of an experimental design, or the relative merits of alternative explanations in plant hormone biology.",
            cognitiveDemand: "Judgement with justification against a stated criterion. The student identifies what is wrong or limited, explains WHY using biological principles, and states the correct position or improved approach.",
            verbs: ["Evaluate", "Critique", "Assess", "Appraise", "Judge", "Defend", "Justify"],
            whatDistinguishesThisLevel: "Simply restating the correct fact is understand, not evaluate. Evaluate requires engaging with the incorrect claim, identifying the specific error, and explaining the criterion by which it fails.",
            examples: {
                hormoneFundamentals: "Evaluate the claim: 'Plant hormones act exactly like animal hormones — they are produced in one specialised gland and transported in the blood to target organs.' Identify at least three specific ways in which plant hormone biology differs from animal endocrine signalling, and assess whether any part of the animal hormone analogy is legitimately applicable.",
                auxin:               "A student states: 'Auxin always promotes cell elongation — higher auxin always means more growth.' Evaluate this claim in full, identifying the conditions under which it is true, the conditions under which it is false, and the specific organ and concentration range where the opposite effect is observed.",
                gibberellinsAndCytokinins: "A researcher claims: 'Gibberellins and cytokinins have opposite effects on plant growth — one promotes elongation and the other inhibits it.' Evaluate whether this characterisation is accurate, identifying the specific processes each hormone affects, where the claim is an oversimplification, and where it contains a kernel of truth.",
                abaAndEthylene:      "Evaluate the statement: 'ABA is a growth inhibitor and therefore harmful to plant health.' Assess this claim against specific evidence, identify the adaptive functions of ABA in stress responses, and explain why characterising a hormone as simply 'inhibitory' or 'stimulatory' is biologically misleading.",
                applications:        "Evaluate whether spraying ripening tomatoes with an ethylene receptor blocker (1-MCP) is a scientifically sound post-harvest strategy. Your evaluation must address: mechanism of action, effectiveness against both internal and external ethylene sources, potential limitations, and any unintended effects on fruit quality parameters beyond shelf life."
            }
        },

        create: {
            description: "Generate original, scientifically coherent outputs — experimental designs, regulatory pathway models, agricultural strategies, or novel predictions — that integrate multiple plant hormone concepts.",
            cognitiveDemand: "Synthesis and original production. The student assembles multiple concepts into a new, internally consistent output that addresses a specific problem. Cannot be answered by reproducing a memorised procedure.",
            verbs: ["Design", "Propose", "Construct", "Develop", "Formulate", "Plan", "Derive"],
            whatDistinguishesThisLevel: "Create requires original output that integrates multiple hormone concepts. 'Design an experiment distinguishing a GA-deficient from a GA-insensitive mutant' requires the student to specify treatments, predictions for each mutant type, controls, measurements, and the logic of the diagnosis — none of which can be recalled from a single source.",
            examples: {
                hormoneFundamentals: "Construct a fully annotated hormone interaction network diagram for a single plant cell showing all five classical hormones. For each pair of hormones that interact, draw an arrow labelled either 'synergistic' or 'antagonistic' and annotate the specific response they jointly control. The diagram must be internally consistent — no contradictory interactions.",
                auxin:               "Design an experiment using decapitated coleoptiles, agar blocks, and light sources to demonstrate that: (a) auxin is the chemical mediator of phototropism; (b) the redistribution of auxin (not its destruction) is responsible for tropic curvature. Specify all controls, predict the curvature outcome for each treatment, and explain what result would falsify the Cholodny-Went hypothesis.",
                gibberellinsAndCytokinins: "Propose a GA application strategy for a barley malting company that wants to accelerate germination and maximise α-amylase production while minimising seedling elongation (which wastes resources). Your strategy must specify: (a) the dose and timing of GA application; (b) any antagonistic hormones that might be co-applied; (c) how you would measure success; (d) any risks to grain quality that must be monitored.",
                abaAndEthylene:      "Design a complete experiment to determine whether a novel Arabidopsis mutant with constitutively closed stomata carries a defect in ABA biosynthesis or in ABA signalling. Your design must include: (a) ABA measurement method; (b) exogenous ABA rescue test; (c) genetic approach to identify the mutation; (d) expected results for each possible mutant class.",
                applications:        "Formulate a comprehensive post-harvest management protocol for a tomato distributor that extends shelf life from 7 to 21 days without reducing eating quality. Your protocol must integrate: controlled atmosphere storage (specify O₂ and CO₂ concentrations with physiological justification), ethylene scrubbing or blocking strategy (specify agent and mechanism), temperature management, and the point at which ethylene exposure would be used to trigger final ripening before retail."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the five hormone classes but cannot reliably match each to its biosynthesis site or transport mechanism",
                "Conflates auxin 'promotes growth' with 'always promotes growth' — unaware of biphasic dose-response",
                "Cannot explain the Cholodny-Went hypothesis beyond 'auxin moves to the shaded side'",
                "Confuses the site and mechanism of ABA action — describes ABA as 'blocking water channels' rather than triggering ion efflux",
                "Treats hormone interactions as purely additive rather than ratio-dependent",
                "Cannot distinguish climacteric from non-climacteric fruit"
            ],
            immediateNextSteps: [
                "Build a five-row reference table before any other study: hormone name | biosynthesis site | transport route | primary effect | one application. Master this table before attempting any mechanism.",
                "For the auxin dose-response curve: draw it with a pencil immediately — mark the stimulatory zone for shoots, the inhibitory zone for roots, and the optimal concentration for each organ on the same curve. Never describe auxin as simply 'promoting growth' without annotating which organ and which concentration range.",
                "For the Cholodny-Went hypothesis: practise the four-step sequence until automatic: (1) unilateral light → (2) lateral auxin redistribution to shaded side → (3) greater elongation on shaded side → (4) curvature toward light. Draw this four-panel sequence without notes.",
                "For ABA stomatal closure: learn the three-step molecular sequence first — ABA binds PYR → PP2C inhibited → SnRK2 active → anion channels open. Add the downstream ion movements only after these three steps are automatic.",
                "For climacteric vs non-climacteric: use two specific examples from daily life — banana and tomato (climacteric, ripen off plant, respond to ethylene); grape and citrus (non-climacteric, must ripen on plant). The distinction is autocatalytic ethylene — write this phrase on every question involving fruit ripening."
            ],
            misconceptionsToAddress: [
                "Auxin always promotes growth → biphasic dose-response diagram showing root inhibition (above)",
                "ABA blocks water channels → replace with correct ion channel cascade (above)",
                "Hormones act independently → auxin:cytokinin ratio exercise (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can describe the Cholodny-Went mechanism but cannot explain the molecular basis of differential auxin redistribution (PIN protein relocalisation)",
                "Understands DELLA degradation conceptually but confuses GA-deficient with GA-insensitive phenotypes",
                "Can describe ABA stomatal closure in general terms but cannot name the specific molecular components (PYR, PP2C, SnRK2, SLAC1)",
                "Correctly identifies that ethylene promotes ripening but cannot explain autocatalytic amplification",
                "Recognises auxin:cytokinin ratio concept but cannot predict specific tissue culture outcomes for given ratio values"
            ],
            immediateNextSteps: [
                "For PIN proteins: draw a single plant cell with PIN proteins asymmetrically located on the basal membrane. Draw the auxin entering via AUX1 and exiting via PIN. Then draw a second cell below, receiving auxin from the first. This cell-to-cell relay creates directionality — labelling it polar auxin transport. Practise this two-cell diagram until PIN asymmetry is intuitively linked to directionality.",
                "For GA-deficient vs GA-insensitive: construct a 2×2 decision table — rows are 'apply exogenous GA' and 'do not apply GA'; columns are 'GA-deficient mutant' and 'GA-insensitive mutant'. Fill in the height outcome for each cell. GA-deficient rescues with exogenous GA; GA-insensitive does not. This table resolves the most common confusion in gibberellin genetics.",
                "For ABA pathway components: use the acronym PASS: PYR binds ABA → PP2C inhibited → SnRK2 active → SLAC1 opens. Learn the acronym first, then connect each letter to its full name and function.",
                "For autocatalytic ethylene: draw a positive feedback arrow: ethylene → ACC synthase induction → more ethylene → ... Label this as 'autocatalytic' and connect it to the 'one ripe apple spoils the barrel' phenomenon. Write 'positive feedback' on every ripening question.",
                "For tissue culture ratios: practise three specific combinations — high IAA/low BAP (roots form), low IAA/high BAP (shoots form), balanced (callus). Then predict the outcome for two novel ratios not in your notes."
            ],
            misconceptionsToAddress: [
                "GA-deficient vs GA-insensitive confusion → 2×2 rescue table (above)",
                "Ethylene as passive ripening signal → autocatalytic positive feedback diagram (above)",
                "ABA pathway as a single step → PASS acronym cascade (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Correctly traces the full ABA signal transduction pathway from receptor to stomatal closure, naming all major components",
                "Distinguishes GA-deficient from GA-insensitive mutants and correctly predicts rescue experiments",
                "Connects polar auxin transport to PIN protein asymmetry and the role of vesicle trafficking in PIN relocalisation",
                "Correctly predicts tissue culture organogenesis outcomes for given auxin:cytokinin ratios",
                "Can explain autocatalytic ethylene production and distinguish climacteric from non-climacteric fruit at the molecular level",
                "Connects plant hormone applications (1-MCP, GA in brewing, 2,4-D herbicides) to their underlying mechanisms"
            ],
            immediateNextSteps: [
                "Investigate PIN protein cycling: research how the inhibitor brefeldin A (BFA) prevents PIN recycling to the plasma membrane, disrupting polar auxin transport. This connects membrane trafficking to hormone signalling at a mechanistic level beyond the standard curriculum.",
                "Connect GA signalling to the Green Revolution: research the Rht alleles in semi-dwarf wheat and explain how GA-insensitive DELLA mutants produced the yield gains of the Green Revolution — connecting crop genetics, hormone biology, and food security.",
                "Calculate the physiological auxin concentration window: look up published dose-response curves for IAA on root and shoot elongation. Identify the optimal concentration for each organ and calculate the ratio of inhibitory to optimal concentration for roots. This quantitative exercise reinforces the biphasic nature of auxin response.",
                "Investigate the ABA receptor discovery through chemical genetics: the story of pyrabactin and the discovery of the PYR/PYL/RCAR receptor family illustrates how chemical tools can reveal unknown signalling components — research this as a case study in experimental plant biology."
            ],
            misconceptionsToAddress: [
                "Vmax/Km parallel for hormone concentration and receptor saturation → connect to receptor affinity concepts from biochemistry",
                "Hormone transport as simple diffusion → reinforce that auxin uses specific carrier proteins (AUX1/PIN) requiring energy"
            ]
        },

        expert: {
            characteristics: [
                "Critically evaluates experimental evidence for hormone mechanisms — identifies controls, assesses whether mutant phenotypes are consistent with proposed models, and identifies alternative interpretations",
                "Connects plant hormone signalling to fundamental cell biology (ubiquitin-proteasome pathway, vesicle trafficking, ion channel gating)",
                "Designs multi-hormone experiments with full controls, including hormone concentration ranges, timing, and appropriate mutant genotypes",
                "Applies plant hormone knowledge to crop improvement strategies, evaluating cost-benefit trade-offs of hormone treatments in agriculture",
                "Integrates evolutionary perspective — discusses conservation of hormone signalling across plant lineages and evolutionary origins of hormone systems"
            ],
            immediateNextSteps: [
                "Read and critique a primary research paper reporting a novel ABA signalling component — assess whether the genetic and biochemical evidence supports the proposed model, identify missing controls, and evaluate whether the phenotype is fully explained.",
                "Design a CRISPR-based crop improvement experiment targeting a plant hormone signalling component — specify which gene, what modification, what expected phenotype, what off-target risks, and how you would test for unintended effects on hormone homeostasis.",
                "Investigate metabolic control analysis applied to the ethylene biosynthesis pathway: identify the rate-limiting step under stress conditions vs ripening conditions and assess whether ACC synthase or ACC oxidase is the more appropriate agrochemical target at each developmental stage.",
                "Explore hormone signalling in bryophytes and algae: investigate which components of auxin and ABA signalling are conserved in early-diverging land plants, and assess what this tells us about the evolutionary origins of hormone-regulated development."
            ],
            misconceptionsToAddress: [
                "Hormone signalling as simple ligand-receptor → reinforce the complexity of SCF ubiquitin ligase complexes, co-receptor mechanisms, and proteasome-mediated signal transduction"
            ]
        }
    }
},


plantTransport: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about plant transport structures, definitions, and direction of movement without requiring understanding of mechanisms.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot recall basic structural facts (xylem = dead cells; phloem = living), they cannot access mechanistic questions.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response reproduces facts without causal explanation. 'Xylem transports water from root to shoot' is remember. 'Xylem transports water from root to shoot because transpiration creates a tension that pulls the cohesive water column upward' crosses into understand.",
            examples: {
                xylemAndWaterMovement:    "State two structural features of xylem vessels that adapt them for water transport. Name the two forces that maintain water continuity in xylem.",
                phloemAndTranslocation:   "Name the two types of cells in functional phloem tissue. State the direction of translocation in phloem relative to source and sink.",
                osmosisAndWaterPotential: "Write the water potential equation. State the water potential of pure water at atmospheric pressure.",
                transpiration:            "List four environmental factors that increase the rate of transpiration. Name the hormone responsible for stomatal closure during drought.",
                rootUptake:               "Name the three pathways by which water moves through root cortex cells. State the name and chemical composition of the structure that blocks the apoplast pathway at the endodermis."
            }
        },

        understand: {
            description: "Explain mechanisms — connect structure to function, cause to effect, and interpret why a feature produces its observed consequence.",
            cognitiveDemand: "The student must supply a causal link, not repeat a fact. Structural descriptions without functional explanation remain at remember level.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Account for"],
            whatDistinguishesThisLevel: "Understand requires a WHY or HOW. 'The Casparian strip blocks the apoplast' is remember. 'The Casparian strip forces water into the symplast, allowing the endodermis to selectively regulate which ions enter the xylem, because only the symplast pathway involves crossing a membrane where transporters can exercise selectivity' is understand.",
            examples: {
                xylemAndWaterMovement:    "Explain why xylem vessel elements must be dead at functional maturity. Your answer must connect the absence of cell contents to the functional requirement for unobstructed water flow and resistance to tensile forces.",
                phloemAndTranslocation:   "Explain why active loading of sucrose at the source is essential for the mass flow hypothesis to work. Your answer must connect ATP expenditure to the osmotic and pressure consequences that drive bulk flow.",
                osmosisAndWaterPotential: "Explain why adding solutes to pure water always reduces water potential. Connect the concept of solute potential to the thermodynamic behaviour of water molecules.",
                transpiration:            "Explain how the guard cell mechanism responds to blue light to open stomata. Your answer must trace the sequence from photoreceptor activation through K⁺ movement to turgor change to aperture change.",
                rootUptake:               "Explain why the Casparian strip does not prevent water from entering the xylem but does allow the plant to regulate ion composition of xylem sap."
            }
        },

        apply: {
            description: "Use water potential equations, pathway logic, and physiological principles to solve novel problems involving specific numerical values or new scenarios.",
            cognitiveDemand: "Select the correct equation or concept, set it up correctly for the given scenario, and derive a specific answer. A common failure: using Ψ = Ψs + Ψp but omitting the pressure potential term.",
            verbs: ["Calculate", "Determine", "Predict", "Trace", "Apply", "Solve", "Sketch"],
            whatDistinguishesThisLevel: "Apply requires a new calculation or prediction — not a reproduced worked example. 'Calculate Ψ for a cell with Ψs = −0.9 MPa and Ψp = +0.3 MPa' is apply. 'Explain what water potential is' is understand.",
            examples: {
                xylemAndWaterMovement:    "Trace the complete pathway of a water molecule from soil water to the atmosphere, naming every tissue, cell, and pathway it passes through. State the water potential at each stage and confirm that it decreases in the direction of movement.",
                phloemAndTranslocation:   "A plant is treated with an inhibitor of ATP synthesis in the phloem companion cells only. Predict the effect on: (a) sucrose concentration in sieve tubes at source; (b) pressure at the source end of phloem; (c) mass flow velocity; (d) sugar delivery to roots.",
                osmosisAndWaterPotential: "Cell A has Ψs = −0.8 MPa and Ψp = +0.5 MPa. Cell B has Ψs = −1.1 MPa and Ψp = +0.4 MPa. Calculate the water potential of each cell and predict the direction of water movement between them.",
                transpiration:            "A potometer records water uptake of 2.4 mL in 10 minutes. The leaf area of the shoot is 60 cm². Calculate the rate of water uptake per unit leaf area per minute. If the fan is then turned on and the rate increases by 40%, calculate the new rate.",
                rootUptake:               "Explain what would happen to ion uptake by root cells if all ATP synthesis in root cortex cells were inhibited. Apply your knowledge of the apoplast, symplast, and Casparian strip pathways to justify your answer."
            }
        },

        analyze: {
            description: "Interpret experimental data or complex scenarios by decomposing evidence, identifying patterns, and deriving conclusions that were not stated in the question.",
            cognitiveDemand: "The student derives a conclusion from evidence rather than applying a formula to get an answer. A key marker: the student reaches an identification or interpretation not given in the question.",
            verbs: ["Identify", "Deduce", "Analyse", "Distinguish", "Interpret", "Classify", "Determine"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given that girdling above the roots kills the roots but not the shoot, deduce what substance is transported in the tissue removed' requires the student to reason from effect to cause — the affected organ depends on the removed tissue, so the tissue must supply that organ.",
            examples: {
                xylemAndWaterMovement:    "A scientist injects a dye into the xylem at the base of a stem at time 0. At time 30 min the dye is detected 45 cm up the stem. At time 60 min it is detected at 120 cm. Analyse whether xylem transport velocity is constant, accelerating, or decelerating, and suggest one environmental factor that could explain the pattern.",
                phloemAndTranslocation:   "An experimenter supplies ¹⁴CO₂ to a single mature leaf. After 2 hours, radioactivity is detected in the roots, young leaves, and developing fruit, but not in adjacent mature leaves. Analyse what this distribution reveals about: (a) the source-sink status of the labelled leaf; (b) the direction of phloem transport; (c) why mature adjacent leaves show no label.",
                osmosisAndWaterPotential: "Potato cylinders are placed in five sucrose solutions: 0.1, 0.2, 0.3, 0.4, 0.5 M. The following changes in mass are recorded: +8%, +4%, 0%, −5%, −11%. Analyse the data to determine the water potential of the potato tissue and explain why the relationship between sucrose concentration and mass change is not perfectly linear.",
                transpiration:            "A student measures stomatal density on the upper and lower leaf surfaces of three species: (a) lily pad floating on water: upper = 60, lower = 0 per mm²; (b) sunflower: upper = 10, lower = 180 per mm²; (c) pine needle: upper = 0, lower = 40 per mm² in sunken crypts. Analyse what the distribution reveals about each plant's water availability and transpiration strategy.",
                rootUptake:               "A student grows two sets of plants: Set A in normal nutrient solution, Set B in nutrient solution plus a metabolic inhibitor that blocks active transport. Set B plants show healthy shoot growth but severe mineral deficiency symptoms. Analyse how this is possible — why can water enter roots but not minerals — using your knowledge of the pathways and the Casparian strip."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the quality of experimental evidence, or the adequacy of an explanation. State the criterion by which it succeeds or fails.",
            cognitiveDemand: "Judgement with justification. The student identifies a flaw or limitation, states the criterion by which it fails, and provides the correction. 'This is wrong' is not evaluate-level — the student must say why and how.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Defend", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a verdict against a standard. 'Evaluate the mass flow hypothesis as an explanation for phloem transport' requires the student to cite specific supporting evidence, identify specific limitations or gaps, and reach a reasoned conclusion about whether the evidence is sufficient.",
            examples: {
                xylemAndWaterMovement:    "Evaluate the cohesion-tension theory as an explanation for water transport to the top of a 100-metre redwood tree. Your evaluation must: cite specific supporting evidence; identify the theoretical challenge of maintaining water under −2 MPa tension without cavitation; and assess whether the theory is adequate or requires modification.",
                phloemAndTranslocation:   "Evaluate the mass flow hypothesis for phloem transport. Your evaluation must: (a) cite at least two pieces of supporting experimental evidence; (b) identify at least two phenomena the hypothesis does not satisfactorily explain; (c) conclude whether the hypothesis should be accepted, modified, or replaced, with justification.",
                osmosisAndWaterPotential: "A student claims: 'A cell with Ψs = −1.2 MPa has a lower water potential than a cell with Ψs = −0.6 MPa, so water will always flow from the second cell into the first.' Evaluate this claim fully — identify what is correct, identify what is incomplete or potentially wrong, and state the condition under which the prediction would not hold.",
                transpiration:            "A student uses a potometer to measure transpiration and reports: 'My results show the transpiration rate under fan conditions was 0.8 mL/min/cm² compared to 0.3 mL/min/cm² without the fan — this proves the fan caused increased transpiration.' Evaluate the validity of this conclusion, identifying any assumptions, sources of error, and limitations of the potometer as a measure of transpiration.",
                rootUptake:               "Evaluate whether the apoplast pathway or the symplast pathway is more important for water uptake in the root cortex. Your answer must consider: speed of each pathway; selectivity; energy requirement; the effect of the Casparian strip; and conditions under which each pathway predominates."
            }
        },

        create: {
            description: "Generate an original, coherent output — an experimental design, a mechanistic model, a comparative diagram, or an applied solution — that integrates multiple concepts from the lesson.",
            cognitiveDemand: "Synthesis and original production. The student produces something that did not exist before, combining multiple concepts. A strong create-level response is internally consistent, scientifically plausible, and fully addresses the brief.",
            verbs: ["Design", "Propose", "Construct", "Develop", "Formulate", "Plan", "Derive"],
            whatDistinguishesThisLevel: "Create requires original output, not retrieval or calculation. 'Design an experiment to investigate the effect of ABA concentration on stomatal aperture' requires the student to specify plant material, ABA concentrations, measurement method for aperture, controls, replication, and statistical analysis.",
            examples: {
                xylemAndWaterMovement:    "Design a complete experiment to determine whether cohesion-tension or root pressure is the primary driver of water transport in a herbaceous plant. Specify: (a) how you would independently measure each mechanism's contribution; (b) what treatments you would use (e.g. cutting shoot, adding metabolic inhibitors); (c) what measurements you would take and how; (d) what result would support each hypothesis.",
                phloemAndTranslocation:   "Propose an experiment using radioactive ¹⁴C-labelled sucrose to determine whether phloem transport in a bean plant is bidirectional (i.e. can move both up and down simultaneously). Include: (a) where you would apply the label; (b) how and when you would sample for radioactivity; (c) what result would confirm bidirectionality; (d) what controls you would include and why.",
                osmosisAndWaterPotential: "Construct a fully annotated diagram showing the water potential values at each stage of the soil-plant-atmosphere continuum for a well-watered plant on a sunny day, and separately for the same plant during drought. For each stage, label the Ψs and Ψp components where applicable. Write three sentences explaining how the diagrams change during drought and what physiological responses this triggers.",
                transpiration:            "Design a controlled investigation to determine the effect of leaf wax thickness on transpiration rate, using leaves from plants grown under different humidity conditions. Include: (a) how you would quantify leaf wax thickness; (b) how you would measure transpiration rate; (c) what variables must be controlled; (d) how you would analyse and present the data; (e) what results would confirm or refute the hypothesis that thicker wax reduces transpiration.",
                rootUptake:               "Formulate a model explaining how a plant growing in saline soil could survive by combining: (a) the Casparian strip as a selective barrier; (b) active ion exclusion by endodermal membrane transporters; (c) osmotic adjustment in root cells to maintain a water potential gradient from soil into root. Your model must specify which ions are excluded, which are accumulated, and how the resulting water potential gradient allows water uptake."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can state that xylem carries water and phloem carries sugar, but cannot explain the mechanisms",
                "Knows that water moves by osmosis but cannot apply water potential equations",
                "Confuses the direction of water movement — states water moves from low to high concentration",
                "Cannot distinguish apoplast from symplast pathways",
                "Treats transpiration as purely wasteful rather than as the driver of xylem transport",
                "Confuses xylem and phloem cell types (states xylem is living; states phloem is dead)"
            ],
            immediateNextSteps: [
                "Before anything else: draw a simple transverse section of a vascular bundle with xylem (dead, thick-walled, lignified) on the inside and phloem (living, thin-walled, sieve tubes) on the outside. Label each. Annotate: xylem = dead = water; phloem = living = sugar. Return to this drawing before every question until the cell types are automatic.",
                "For water potential direction: write the rule in red at the top of every page — 'Water moves from HIGH Ψ (less negative) to LOW Ψ (more negative).' Do not write 'from low concentration to high' — that is osmosis language and leads to errors when Ψp is involved.",
                "For the water potential equation: practise only Ψ = Ψs + Ψp with numerical values in which Ψp = 0 first (flaccid cells). Once correct answers are automatic, introduce non-zero Ψp.",
                "Draw apoplast vs symplast as two physically separate routes on a root cortex diagram — apoplast in blue (outside membranes, through walls), symplast in red (inside membranes, through plasmodesmata). Use colour-coding consistently.",
                "For transpiration: use the analogy of a towel drying on a washing line — the towel (leaf) loses water because air is drier; the loss creates a pull that draws water up. Transpiration is not waste — it is the engine of xylem transport."
            ],
            misconceptionsToAddress: [
                "Water moves from low to high Ψ → RED RULE above",
                "Xylem is living → cell type diagram",
                "Transpiration is purely wasteful → washing-line analogy"
            ]
        },

        developing: {
            characteristics: [
                "Correctly states xylem is dead and phloem is living with sieve tubes and companion cells",
                "Applies Ψ = Ψs + Ψp correctly for simple cases but confuses the sign of Ψp under tension",
                "Can describe cohesion-tension theory step by step but cannot explain what provides the energy for the process",
                "Understands that phloem flows from source to sink but cannot explain why active loading is required",
                "Can describe stomatal opening qualitatively but does not connect K⁺ movement to water potential change",
                "Confuses the apoplast pathway with the symplast — still uncertain which crosses membranes"
            ],
            immediateNextSteps: [
                "For the energy question in cohesion-tension: write explicitly — 'The energy comes from the sun driving evaporation at the leaf surface; the plant uses no ATP for xylem transport.' Contrast with phloem: 'The energy comes from ATP in companion cells driving active sucrose loading.' Repeat this comparison until automatic.",
                "For Ψp in tension: introduce the concept that xylem water under tension has a NEGATIVE Ψp — it is being pulled, not pushed. Use a syringe analogy: pulling the plunger creates negative pressure (tension) in the barrel. Annotate xylem diagrams with Ψp = −0.5 to −2 MPa values.",
                "For the K⁺-water potential link in guard cells: draw the sequence as a chain — K⁺ enters → solute concentration rises → Ψs falls → Ψ falls → water enters by osmosis → volume increases → turgor pressure rises → cell bows outward → stoma opens. Write it as an arrow chain and memorise the direction.",
                "For apoplast vs symplast: the key distinction is membrane crossing — apoplast NEVER crosses a membrane; symplast ALWAYS crosses at least one membrane to enter. Build this distinction into every description: 'The apoplast pathway does not cross any membranes; the symplast pathway crosses the plasma membrane on entry.'",
                "For phloem active loading: use the factory analogy — the source leaf is a factory that actively pumps sugar into the delivery truck (sieve tube); without the pump (active loading), there is no pressure difference, no bulk flow, no delivery to sinks."
            ],
            misconceptionsToAddress: [
                "Xylem transport requires ATP → energy source comparison (above)",
                "Ψp is always positive → tension concept with syringe analogy",
                "Guard cell mechanism without K⁺ → arrow chain diagram"
            ]
        },

        proficient: {
            characteristics: [
                "Applies Ψ = Ψs + Ψp fluently including negative Ψp values for xylem under tension",
                "Correctly traces the complete soil-plant-atmosphere water potential gradient with numerical estimates",
                "Explains cohesion-tension and mass flow mechanisms with specific reference to molecular properties of water and osmotic principles",
                "Predicts the effect of environmental variables on transpiration rate with mechanistic justification",
                "Interprets experimental data (potometer readings, radiotracer distributions, plasmolysis experiments)",
                "Can compare xylem and phloem in a detailed table and explain why each tissue has its observed structure"
            ],
            immediateNextSteps: [
                "Calculate solute potential using Ψs = −iCRT for a range of solute concentrations and temperatures — practise until the arithmetic is fluent and the effect of temperature on Ψs is intuitive.",
                "Investigate aquaporins: research how aquaporin expression is regulated by drought and cold, and connect this to the transmembrane pathway — this represents the molecular layer beneath the tissue-level transport model.",
                "Explore the Münch pressure flow model quantitatively: look up measured phloem sap speeds (0.3–1.5 m/hr) and sieve tube turgor pressures (0.8–1.5 MPa) and connect these values to the equation: flow rate = (ΔΨp × r⁴) / (8ηL) (Hagen-Poiseuille law for tube flow).",
                "Analyse a published stomatal conductance dataset: find gs (stomatal conductance) values plotted against irradiance, CO₂, and VPD (vapour pressure deficit) for a crop species — interpret the response curves and connect each factor to the guard cell mechanism.",
                "Examine cavitation vulnerability curves: look up percent loss of conductance vs xylem tension plots for a drought-tolerant and a drought-sensitive species — interpret what P50 (the tension at which 50% of conductance is lost) means for each species' drought strategy."
            ],
            misconceptionsToAddress: [
                "Phloem flow rate is constant → show how source photosynthesis rate and sink demand both modulate flow",
                "Transpiration rate is set only by stomatal aperture → include boundary layer resistance and Ψ gradient to atmosphere"
            ]
        },

        expert: {
            characteristics: [
                "Derives water potential equations from thermodynamic principles and applies them to non-standard scenarios (e.g. freezing, high altitude)",
                "Critically evaluates the evidence for cohesion-tension and mass flow hypotheses, identifying the unresolved questions",
                "Connects stomatal physiology to whole-plant water use efficiency and crop modelling",
                "Integrates xylem and phloem as a coupled system — explains how xylem water recirculates through phloem",
                "Applies plant transport principles to biotechnological problems (herbicide delivery, drought-tolerance engineering)"
            ],
            immediateNextSteps: [
                "Critically analyse the evidence against cohesion-tension: investigate the Canny controversy (1995 onwards) in which direct pressure measurements seemed to contradict the theory — assess whether the anomalous results were methodological artefacts or genuine challenges.",
                "Derive the van't Hoff equation for osmotic pressure and connect it to Ψs = −iCRT — understand the thermodynamic basis of why solute potential is always negative.",
                "Investigate phloem loading diversity: research apoplastic loading (with H⁺/sucrose symporter) vs symplastic loading (through plasmodesmata) in different species — understand why some plants cannot be killed by phloem-mobile herbicides.",
                "Explore stomatal optimisation theory: investigate the idea that stomata are optimised to maximise photosynthetic carbon gain per unit water lost (intrinsic water use efficiency, WUEi) — connect this to crop breeding targets for drought tolerance."
            ],
            misconceptionsToAddress: [
                "Mass flow hypothesis is fully proven → evaluate the unanswered questions about sieve plate crossing",
                "Cohesion-tension is uncontested → engage with the metastability controversy"
            ]
        }
    }
},


plantStructure: {
            knowledgeLevel: {

                remember: {
                    description: "Retrieve stored facts about plant structure and function from memory without requiring understanding of mechanisms. The student reproduces terminology, tissue names, cell types, and directional transport facts accurately.",
                    cognitiveDemand: "Verbatim or near-verbatim recall. No mechanism required. If a student cannot name the cell types of the xylem or identify the three tissue systems, they cannot access any higher-level reasoning about plant function.",
                    verbs: ["Name", "List", "State", "Identify", "Define", "Label", "Write"],
                    whatDistinguishesThisLevel: "A remember-level response reproduces facts without explanation. 'Xylem transports water upward' is remember-level. 'Xylem transports water upward because transpiration creates tension in the water column' crosses into understand. The student produces the correct label or fact but does not yet supply mechanism.",
                    examples: {
                        plantCells:              "Name the three types of ground tissue cells and state whether each is living or dead at maturity.",
                        plantTissues:            "List the three plant tissue systems and state the primary function of each.",
                        rootsAndStems:           "Identify, from outermost to innermost, the tissue layers visible in a dicot root cross-section. State the name and single primary function of each layer.",
                        leavesAndPhotosynthesis: "Label the following on a leaf cross-section diagram: upper epidermis, palisade mesophyll, spongy mesophyll, lower epidermis, stoma, guard cell, vein.",
                        transportSystems:        "State the direction of transport in xylem and in phloem. Name the two cell types found in xylem and the two found in phloem. State whether each cell type is living or dead at maturity."
                    }
                },

                understand: {
                    description: "Explain the relationship between structure and function in plant tissues and organs. The student demonstrates they understand WHY a structure has a particular form, connecting anatomy to the biological problem it solves.",
                    cognitiveDemand: "Causal explanation. The student does not merely state that something happens but explains how and why the structural feature enables the function. A correct explanation that could not have been produced by memorising a single fact demonstrates understanding.",
                    verbs: ["Explain", "Describe", "Justify", "Connect", "Contrast", "Interpret", "Relate"],
                    whatDistinguishesThisLevel: "Understand requires mechanism or reason. 'Palisade mesophyll is at the top of the leaf' is remember. 'Palisade mesophyll is at the top of the leaf because it receives the most direct light, and its columnar cells packed with chloroplasts maximise the number of chloroplasts exposed to incoming photons before light is absorbed by the first layer' is understand. The causal chain — light → structure → chloroplast density → function — must be present.",
                    examples: {
                        plantCells:              "Explain why xylem vessel elements are more efficient water conductors than tracheids, connecting the structural differences between the two cell types to the physical factors that determine flow rate.",
                        plantTissues:            "Explain why the apical meristem must be protected at all costs for the plant's survival, and describe two structural features that provide this protection in roots and in shoot buds.",
                        rootsAndStems:           "Explain the function of the Casparian strip in terms of the pathway of water movement through the root. Your answer must distinguish between the apoplastic and symplastic pathways and explain what the Casparian strip forces water to do.",
                        leavesAndPhotosynthesis: "Explain why having two structurally distinct mesophyll layers — palisade and spongy — is more efficient for the leaf than having a single uniform mesophyll layer. Address both light capture and gas exchange in your answer.",
                        transportSystems:        "Explain the pressure-flow model of phloem transport. Your answer must explain what creates high pressure at the source, what creates low pressure at the sink, and why this drives directional flow of phloem sap."
                    }
                },

                apply: {
                    description: "Use knowledge of plant structure and transport mechanisms to solve problems not encountered in the exact form before. The student selects the correct concept and applies it to a new situation to generate a specific prediction, calculation, or diagram.",
                    cognitiveDemand: "Procedure execution in a novel context. The student must identify which concept applies, then use it to generate a specific answer. A common failure is knowing the concept but misidentifying which plant organ, cell type, or pathway is relevant in the new scenario.",
                    verbs: ["Predict", "Apply", "Calculate", "Sketch", "Determine", "Use", "Solve"],
                    whatDistinguishesThisLevel: "Apply requires the student to transfer a concept to a new situation and generate a specific output — a prediction, a diagram, or a numerical result. 'Predict what happens to stomatal aperture when a leaf is transferred from light to darkness' requires the student to apply the guard cell mechanism to a new stimulus — the answer (stomata close) must be derived, not recalled from a previously studied example. Apply differs from understand because the output is a new specific answer rather than a general explanation.",
                    examples: {
                        plantCells:              "A student treats a plant stem with a chemical that inhibits lignin synthesis. Predict the effect on: (a) the mechanical support of the stem; (b) the ability of xylem to conduct water; (c) the appearance of sclerenchyma fibres in cross-section. Apply your knowledge of each cell type to each prediction.",
                        plantTissues:            "A crop plant is grown in a nutrient solution lacking potassium. Apply your knowledge of guard cell physiology to predict the effect on: (a) stomatal aperture; (b) water loss by transpiration; (c) CO₂ entry and photosynthesis rate.",
                        rootsAndStems:           "A plant's roots are submerged in a solution of sodium chloride at a concentration higher than the cell sap of root cells. Apply the concept of water potential to predict: (a) the direction of water movement across root cell membranes; (b) the effect on turgor pressure in root cortex cells; (c) the visible consequence for the plant above ground.",
                        leavesAndPhotosynthesis: "Predict the effect on net photosynthesis rate of: (a) painting the upper leaf surface with petroleum jelly; (b) painting the lower surface with petroleum jelly; (c) painting both surfaces. Apply leaf anatomy to justify each prediction.",
                        transportSystems:        "A plant is treated with an inhibitor of ATP synthase in phloem companion cells. Apply the pressure-flow model to predict the effect on: (a) sucrose loading into the phloem at the source leaf; (b) turgor pressure in source sieve tubes; (c) flow rate in phloem; (d) growth of a developing fruit sink."
                    }
                },

                analyze: {
                    description: "Interpret experimental data or anatomical observations about plant structure to draw conclusions that were not given. The student breaks down complex information, identifies patterns, and infers mechanism or identity from evidence.",
                    cognitiveDemand: "Decomposition and evidence-based inference. The student is given data, micrographs, or experimental results and must determine what they mean. A key marker: the student reaches a conclusion not stated in the question and justifies it from the evidence provided.",
                    verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Distinguish", "Interpret"],
                    whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given this light micrograph of a stem cross-section, identify whether it is from a monocot or dicot and justify your answer from three visible features' is analyze — the student must examine the image, identify the vascular bundle pattern and other features, and deduce the plant type. This is different from apply, where the student is told the situation and generates a prediction.",
                    examples: {
                        plantCells:              "A light micrograph shows cells with: thick walls staining darkly with phloroglucinol reagent, no visible cytoplasm, and a hollow lumen. The cells are long and tapered with overlapping ends containing numerous small pits. Identify the cell type, justify your identification from each feature, and state which tissue system it belongs to.",
                        plantTissues:            "Cross-sections of two stems are provided. Stem A shows vascular bundles arranged in a ring, with pith in the centre and cortex outside the ring. Stem B shows vascular bundles scattered throughout the ground tissue with no distinct pith or cortex. Identify the type of plant each stem belongs to and deduce three additional structural differences you would expect to find in the roots and leaves of each plant.",
                        rootsAndStems:           "An experiment measures the concentration of calcium ions in the water entering the root apoplast, the water in root cortex cells (symplast), and the water in xylem vessels. Calcium is high in the apoplast, low in the cortex symplast, and present at an intermediate concentration in the xylem. Analyse what this data tells you about: (a) the role of the endodermis; (b) the mechanism by which calcium enters the xylem; (c) whether calcium transport into the xylem is passive or active.",
                        leavesAndPhotosynthesis: "Stomatal conductance data are collected from the same plant under four conditions: (1) high light, ambient CO₂; (2) high light, elevated CO₂; (3) darkness, ambient CO₂; (4) high light, drought stress. Conductance values are: 300, 80, 20, 40 mmol m⁻² s⁻¹ respectively. Analyse each data point, identify the dominant regulatory signal in each condition, and explain the mechanism connecting signal to guard cell response.",
                        transportSystems:        "An aphid's stylet is inserted into a phloem sieve tube of a leaf (source) and one of a root (sink). Phloem sap exudes from the source stylet at a faster rate than from the root stylet. Analyse what this difference in exudation rate tells you about: (a) the turgor pressure difference between source and sink; (b) the direction and driving force of phloem flow; (c) what would happen to exudation rates if the source leaf were darkened for 2 hours."
                    }
                },

                evaluate: {
                    description: "Make a supported judgement about the validity of a claim, the adequacy of an explanation, or the quality of an experimental design concerning plant structure and function. The student identifies specifically what is wrong or limited and explains why, using a biological criterion.",
                    cognitiveDemand: "Judgement with justification against a criterion. The student must identify an error or limitation, state the criterion by which it fails, and often produce a correction. Simply restating the correct information without engaging with the specific claim is understand-level.",
                    verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Verify", "Defend"],
                    whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims that transpiration is wasteful because the plant is just losing water.' The student must state that this claim is incorrect as a value judgement (judgement), explain that transpiration drives the cohesion-tension mechanism that is the only means of moving water up tall plants, and note that stomata do not open for the purpose of transpiration but for CO₂ uptake — transpiration is a physical consequence, not a wasteful process (criterion and correction). Merely stating that transpiration drives water uptake is understand, not evaluate.",
                    examples: {
                        plantCells:              "Evaluate the following claim: 'Collenchyma and sclerenchyma perform the same function and could be used interchangeably in plant tissues that require mechanical support.' In your evaluation, specify in what ways the claim is correct, in what ways it is incorrect, and under what specific biological circumstances each cell type is the appropriate support tissue.",
                        plantTissues:            "A student states: 'Since phloem cells are alive and xylem cells are dead, phloem must be more important for plant survival.' Evaluate this claim in full. Address: (a) whether 'aliveness' is a valid criterion for importance; (b) why xylem cells need to be dead to function; (c) what would happen to the plant if xylem were replaced by living cells with cytoplasm intact.",
                        rootsAndStems:           "A researcher concludes from an experiment that the Casparian strip completely prevents any ions from entering the vascular cylinder passively. Evaluate this conclusion — identify one piece of evidence that would support it and one that would challenge it, and state what the Casparian strip actually does and does not prevent.",
                        leavesAndPhotosynthesis: "Evaluate the claim that 'plants should keep stomata open all the time to maximise photosynthesis.' Your evaluation must address: the trade-off between CO₂ gain and water loss; the conditions under which the claim approaches being correct; the conditions under which it is strongly wrong; and the biological mechanism by which plants optimise rather than maximise stomatal aperture.",
                        transportSystems:        "Evaluate the cohesion-tension theory of xylem transport. Identify two pieces of strong supporting evidence for the theory and one significant challenge or limitation it faces. Conclude with a reasoned statement about whether the theory should be accepted, modified, or rejected based on current evidence."
                    }
                },

                create: {
                    description: "Generate an original output — an experimental design, a mechanistic model, a comparative diagram, a management strategy — that integrates multiple aspects of plant structure and function. The student produces something that did not exist before and that could not be produced by applying a single remembered procedure.",
                    cognitiveDemand: "Synthesis and original production. The student combines concepts from cell biology, tissue anatomy, organ structure, and transport physiology into a coherent new output that addresses a specific goal. Strong create-level responses are internally consistent and scientifically plausible.",
                    verbs: ["Design", "Propose", "Construct", "Develop", "Plan", "Formulate", "Create"],
                    whatDistinguishesThisLevel: "Create requires original synthesis, not reproduction. 'Design an experiment to determine whether xylem or phloem is the primary pathway for long-distance phosphate transport in a dicot' requires the student to specify a radiolabelling approach, controls, sampling strategy, how they would distinguish xylem from phloem transport, and how they would interpret ambiguous results — integrating knowledge of both transport systems, root anatomy, experimental methodology, and the biology of phosphate. This cannot be answered by retrieving a memorised protocol.",
                    examples: {
                        plantCells:              "Propose a diagnostic staining protocol that a student could use to distinguish parenchyma, collenchyma, sclerenchyma, xylem, and phloem in a single stem cross-section using no more than two histochemical stains. For each stain, specify what it detects chemically, how each cell type would react, and how you would distinguish cell types that react similarly to both stains.",
                        plantTissues:            "Design a tissue culture propagation protocol for a commercially valuable orchid. Your protocol must: (a) identify which meristematic tissue you would harvest and why; (b) describe the conditions required to maintain undifferentiated growth; (c) describe the conditions required to induce shoot organogenesis; (d) describe how the regenerated plantlets would be hardened off and transferred to soil; (e) identify one risk of somaclonal variation and explain its anatomical basis.",
                        rootsAndStems:           "Construct a fully annotated diagram of a dicot root cross-section that would be used to teach the concept of selective mineral absorption to a new student. Your diagram must show: all tissue layers correctly labelled; the two pathways of water movement (apoplast and symplast); the location and role of the Casparian strip; the site of active ion transport; and the destination of absorbed ions. Annotate each feature with a one-sentence functional explanation.",
                        leavesAndPhotosynthesis: "Design a controlled experiment to determine the optimum stomatal conductance for maximising the ratio of carbon gained to water lost (water-use efficiency) in a wheat crop under two scenarios: (a) well-watered conditions; (b) moderate drought stress. Specify the measurements you would take, the controls, the treatments, and how you would use the data to derive a recommendation for irrigation management.",
                        transportSystems:        "Formulate a complete mechanistic explanation for why a tall tree (>100 m) can transport water from root to canopy, incorporating: the role of root pressure; the properties of water that make cohesion-tension possible; the anatomical features of xylem that prevent vessel collapse under tension; the role of stomatal regulation in modulating transpiration pull; and the point at which the mechanism is predicted to fail under extreme drought. Your explanation should be suitable as a teaching resource for an advanced biology class."
                    }
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can name the three tissue systems but cannot correctly assign specific cell types to each",
                        "Knows that xylem carries water and phloem carries sugar but cannot explain the mechanism of either",
                        "Treats all plant cells as essentially identical, failing to connect cell structure to cell function",
                        "Confuses the apoplast and symplast pathways, or believes water takes only one route",
                        "Cannot correctly identify whether xylem or phloem cells are alive at maturity",
                        "Describes transpiration as 'wasteful' without recognising its role in driving xylem transport"
                    ],
                    immediateNextSteps: [
                        "Before anything else: draw and label one of each cell type (parenchyma, collenchyma, sclerenchyma, tracheid, vessel element, sieve tube + companion cell, guard cell) with a one-word function label. Do not write descriptions — just draw, label, and function. Repeat until each cell type triggers its function automatically.",
                        "For the xylem/phloem living/dead confusion: write this sentence and underline it — 'Xylem cells die and become hollow tubes; phloem cells stay alive but lose their nucleus.' Build two contrasting diagrams: an empty hollow xylem tube and a living sieve-tube element with its companion cell. Never describe either without using this contrast.",
                        "For the tissue system confusion: draw the three tissue systems as three concentric layers in a stem cross-section — dermal (outer), vascular (bundles), ground (everything between). Label three cell types that belong to each. This single diagram encodes all three tissue systems simultaneously.",
                        "For transpiration: draw the cohesion-tension chain as a cartoon in five steps — (1) sun evaporates water from leaf; (2) tension in xylem; (3) water cohesion holds column together; (4) water pulled from soil; (5) minerals arrive at leaf. Follow the water from soil to atmosphere before attempting any detail.",
                        "For apoplast vs symplast: use a colour-coded diagram — blue for apoplast (stays outside membranes), red for symplast (goes through cells). Draw both routes side by side through three cortex cells, then show the blue route being blocked at the endodermis (Casparian strip) while the red route continues. This single diagram resolves most confusion."
                    ],
                    misconceptionsToAddress: [
                        "All plant cells are the same → cell type drawing exercise (above)",
                        "Xylem cells are alive → hollow tube diagram (above)",
                        "Transpiration is wasteful → cohesion-tension chain (above)"
                    ]
                },

                developing: {
                    characteristics: [
                        "Correctly identifies xylem and phloem cell types and their living/dead status in most questions",
                        "Can explain cohesion-tension in general terms but confuses the starting point (transpiration at the leaf) with the endpoint (water entering at the root)",
                        "Knows the Casparian strip blocks apoplastic transport but cannot explain why this matters for selective absorption",
                        "Can draw a root cross-section with correct layers but mislabels endodermis and pericycle, or confuses their functions",
                        "Knows stomata open in light but cannot explain the K⁺ mechanism connecting light to guard cell turgor",
                        "Confuses source and sink terminology, sometimes reversing which end is which"
                    ],
                    immediateNextSteps: [
                        "For cohesion-tension direction confusion: always start explanations at the leaf (evaporation creates tension) and trace backwards to the root (water drawn in from soil). Write the five-step chain as a numbered sequence before answering any question about xylem transport — direction errors drop dramatically when students follow the chain rather than recall isolated facts.",
                        "For the endodermis/Casparian strip function: use the 'customs checkpoint' analogy — the Casparian strip is a border where all materials must pass through the cell (customs officer checks the manifest) before entering the vascular cylinder. Anything that tries to sneak through the wall is blocked. Practise answering: 'What happens to an ion that can only travel in the apoplast — can it get past the endodermis?' before moving on.",
                        "For guard cell mechanism: draw the guard cell in two states — open (K⁺ inside, water inside, cell bowed) and closed (K⁺ out, water out, cell straight). Label the K⁺/H⁺ pump. Write the causal chain: 'light → proton pump active → H⁺ out → K⁺ in → water follows → turgor rises → cell bows → pore opens.' Do not try to memorise the states — memorise the causal chain and derive the states from it.",
                        "For source-sink confusion: anchor with a concrete example first — 'the leaf is always the source in summer because it is making sugar; the fruit is always the sink because it is storing sugar.' Then generalise: source = makes or exports; sink = stores or uses. Test with five examples (root, stem, developing seed, mature leaf, young leaf) before moving to abstract descriptions.",
                        "For root cross-section layer confusion: learn the layers as a mnemonic journey inward — 'Every Careful Person Enters Very Precisely' — Epidermis, Cortex, Pericycle [outer edge of stele], Endodermis [between cortex and pericycle], Vascular cylinder. Practise drawing the cross-section while reciting the mnemonic."
                    ],
                    misconceptionsToAddress: [
                        "Cohesion-tension direction confusion → five-step chain, start at leaf (above)",
                        "Casparian strip as total barrier → customs checkpoint analogy (above)",
                        "Guard cell mechanism unknown → K⁺ chain diagram (above)"
                    ]
                },

                proficient: {
                    characteristics: [
                        "Explains cohesion-tension and pressure-flow mechanistically with correct causal sequences",
                        "Correctly identifies inhibition type from Lineweaver-Burk features — equivalent fluency with guard cell physiology",
                        "Connects leaf anatomy precisely to photosynthetic efficiency: palisade density, mesophyll air spaces, vein spacing",
                        "Distinguishes monocot and dicot anatomy at root, stem, and leaf level with justification",
                        "Can explain the role of companion cells in supporting sieve-tube element function",
                        "Applies water potential concepts correctly to predict direction of water movement across root cells"
                    ],
                    immediateNextSteps: [
                        "Extend xylem transport to secondary xylem: research how heartwood formation affects hydraulic conductivity and why old wood at the centre of a tree trunk no longer conducts water — this connects secondary growth anatomy to transport physiology.",
                        "Extend phloem biology to molecular detail: research how sucrose/H⁺ cotransporters (SUT proteins) load sucrose at the source — connect the molecular mechanism to the pressure-flow model at the membrane level.",
                        "Analyse stomatal scaling: research how the density and size of stomata in a leaf are traded off (more small stomata vs fewer large ones) and how this affects the maximum stomatal conductance achievable — connect to leaf anatomy and evolutionary adaptation.",
                        "Investigate CAM and C4 photosynthesis from a leaf anatomy perspective: identify the specific anatomical features of C4 leaves (Kranz anatomy, bundle sheath chloroplasts) and CAM leaves (large vacuoles, succulence) that enable their respective carbon-concentrating mechanisms.",
                        "Attempt water potential calculations: given osmotic potential and pressure potential values for cells along a root, calculate water potential at each point and determine the direction of water movement. Connect to osmosis and turgor concepts."
                    ],
                    misconceptionsToAddress: [
                        "Vmax as enzyme-only property [equivalent here]: Vmax equivalent — 'phloem flow rate is a property of the phloem alone' → derive that flow rate depends on source strength (photosynthesis rate), sink strength (demand at sink), and phloem conductivity together",
                        "Stomata open for transpiration → restate clearly: stomata open for CO₂; transpiration is a physical consequence of open pores, not their purpose"
                    ]
                },

                expert: {
                    characteristics: [
                        "Integrates cell biology, tissue anatomy, organ physiology, and whole-plant responses into unified explanations",
                        "Analyses hydraulic architecture — xylem conductivity, vulnerability to cavitation, stomatal regulation — as an integrated system",
                        "Evaluates experimental evidence for cohesion-tension and pressure-flow critically, identifying limitations and outstanding questions",
                        "Connects plant structural adaptations to ecological context: drought adaptation, shade adaptation, nutrient-poor soil strategies",
                        "Designs multi-level experiments integrating molecular, cellular, and whole-plant measurements"
                    ],
                    immediateNextSteps: [
                        "Critically evaluate the cohesion-tension theory's known challenges: the observed xylem sap under tension should cavitate at much lower tensions than observed — research the role of pit membrane nanobubble management and xylem refilling under positive root pressure. Identify where the theory is incomplete.",
                        "Read an original research paper on phloem loading strategy (apoplastic vs symplastic) in a specific crop species — evaluate the experimental evidence for the proposed mechanism and identify alternative interpretations of the data.",
                        "Investigate systems-level plant hydraulics: research the concept of hydraulic conductance as a whole-plant trait integrating root, stem, and leaf resistances in series — derive how cavitation in one organ affects the entire hydraulic pathway.",
                        "Connect plant anatomy to metabolomics: investigate how the anatomical compartmentalisation of secondary metabolite synthesis (e.g. alkaloids in laticifers, glucosinolates in vacuoles) reflects both biosynthetic logic and ecological function (herbivore defence)."
                    ],
                    misconceptionsToAddress: [
                        "Cohesion-tension as fully proven → examine empirical challenges to the metastable water column hypothesis and remaining unresolved questions"
                    ]
                }
            }
        },





leafSystem: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about leaf structure and function from memory without requiring understanding. The student reproduces labels, definitions, and stated facts accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot name the layers of the leaf in order, they cannot explain why they are ordered that way.",
            verbs: ["State", "Name", "List", "Label", "Identify", "Define", "Write"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts with no mechanistic explanation. 'Palisade mesophyll cells are tightly packed and contain many chloroplasts' is remember-level. Adding 'because this maximises light capture' crosses into understand.",
            examples: {
                leafAnatomy:    "Name the tissue layers of a dicot leaf from upper to lower surface in the correct order. State which layer is the primary site of photosynthesis.",
                gasExchange:    "State the direction of CO₂ movement during active photosynthesis and identify the structures through which it passes.",
                transpiration:  "Define transpiration. List three environmental factors that increase transpiration rate.",
                photosynthesis: "State the overall equation for photosynthesis. Name the two regions of the chloroplast where the light reactions and the Calvin cycle occur respectively.",
                adaptations:    "List four structural adaptations of a xerophyte leaf and name one example plant that shows each adaptation."
            }
        },

        understand: {
            description: "Explain the functional significance of leaf structures — connect anatomy to physiology, connect structure to function, and explain why a particular arrangement exists.",
            cognitiveDemand: "Translation and interpretation. The student must supply the causal link between structure and function, not merely name the structure.",
            verbs: ["Explain", "Describe", "Justify", "Connect", "Contrast", "Interpret", "Relate"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or reason. 'The palisade layer is near the upper surface' is remember. 'The palisade layer is near the upper surface because it receives the most intense light, and palisade cells are packed with chloroplasts to maximise photosynthesis at high irradiance' is understand.",
            examples: {
                leafAnatomy:    "Explain why the palisade mesophyll is positioned immediately below the upper epidermis rather than below the spongy mesophyll. Your answer must connect cell structure to light capture efficiency.",
                gasExchange:    "Explain how the spongy mesophyll layer facilitates CO₂ delivery to palisade cells. Your answer must identify the role of intercellular air spaces and the cell wall water film.",
                transpiration:  "Explain the cohesion-tension mechanism of water transport from leaf mesophyll to xylem vessel. Your answer must identify the role of water potential gradients at each step.",
                photosynthesis: "Explain why guard cells contain chloroplasts while all other epidermal cells do not, and connect this to the mechanism of stomatal opening in light.",
                adaptations:    "Explain why a xerophyte leaf has sunken stomata rather than surface-level stomata. Your answer must identify the physical mechanism by which the sunken position reduces transpiration."
            }
        },

        apply: {
            description: "Use known principles (Fick's law, water potential, stomatal mechanism) to make predictions or solve quantitative problems in new contexts.",
            cognitiveDemand: "Procedure execution in a novel situation. The student selects the correct principle and applies it correctly to a scenario not seen before.",
            verbs: ["Calculate", "Predict", "Determine", "Sketch", "Apply", "Use", "Evaluate the effect of"],
            whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. Predicting the effect of high wind speed on potometer bubble movement rate, and explaining each step, is apply — it requires combining knowledge of transpiration rate determinants with potometer operation.",
            examples: {
                leafAnatomy:    "A student obtains transverse sections of two leaves: Leaf A has four palisade cell layers and a thick cuticle; Leaf B has one palisade layer and a thin cuticle. Predict which leaf is adapted to high light intensity and which to shade. Justify using two structural features from each.",
                gasExchange:    "Using Fick's law, predict how each of the following changes would affect CO₂ diffusion into the leaf: (a) leaf area doubles; (b) intercellular CO₂ concentration rises from 200 to 350 ppm; (c) diffusion distance from stoma to palisade cell increases. For each, state the direction of effect and the Fick's law term it alters.",
                transpiration:  "A potometer records a bubble movement of 5 cm in 10 minutes under standard conditions. Predict the new bubble movement rate when (a) a fan is directed at the leaf; (b) the leaf is enclosed in a polythene bag. For each, identify the environmental variable changed and explain the mechanism.",
                photosynthesis: "A leaf is placed in a sealed transparent container in bright light. The CO₂ concentration inside initially falls and then stabilises. Apply your understanding of the relationship between photosynthesis, respiration, and CO₂ gradient to explain the stable endpoint.",
                adaptations:    "Apply the concept of water potential gradient to explain why increasing wind speed increases transpiration rate. Your answer must identify where the gradient exists, what wind does to the humidity of the air, and how this changes the rate of diffusion."
            }
        },

        analyze: {
            description: "Examine experimental data or complex scenarios to identify patterns, deduce relationships, and draw conclusions from evidence.",
            cognitiveDemand: "Decomposition and inference. The student works from data to conclusion — not from a formula to an answer. The conclusion is not given; it must be derived.",
            verbs: ["Identify", "Deduce", "Analyse", "Interpret", "Classify", "Compare", "Distinguish"],
            whatDistinguishesThisLevel: "Analyze requires evidence-to-conclusion reasoning. 'Given stomatal density data for five species across a rainfall gradient, identify the trend and propose the selective pressure' is analyze — the student must examine the data pattern and infer the mechanism.",
            examples: {
                leafAnatomy:    "Electron micrographs of two leaf cross-sections are provided. Leaf 1 shows deeply sunken stomata, rolled margins, and trichome-lined pits. Leaf 2 shows stomata only on the upper surface, large aerenchyma spaces, and no cuticle. Analyse each micrograph — identify the environment each leaf is adapted to, and for each structural feature observed, state the functional advantage it confers.",
                gasExchange:    "CO₂ concentration inside a leaf cuvette is monitored over 24 hours (light period 6:00–20:00). Describe the expected pattern of CO₂ concentration across the 24-hour period. Analyse the data pattern in terms of the relative rates of photosynthesis and respiration at each phase, and identify the times at which stomata are likely to be open and closed.",
                transpiration:  "Transpiration rate (mL/h) data are provided for a plant under five conditions: darkness, low light, bright light, bright light + fan, bright light + humidity chamber. The rates are: 0.1, 0.8, 2.1, 3.4, 0.5. Analyse which condition produced which rate, justify each assignment, and identify which two conditions produce rates closest to the bright light control and explain why.",
                photosynthesis: "Net photosynthesis rate (μmol CO₂ m⁻² s⁻¹) is plotted against irradiance for a sun plant and a shade plant. The shade plant reaches light saturation at 200 μmol m⁻² s⁻¹; the sun plant at 800 μmol m⁻² s⁻¹. Both have the same maximum net photosynthesis at saturation. Analyse what this pattern reveals about the differences in leaf anatomy and chloroplast biochemistry between the two plants.",
                adaptations:    "Stomatal density (stomata per mm²) is measured for five grass species along an aridity gradient from humid coastal grassland to semi-arid desert. The data show a declining trend from 280 to 85 stomata per mm². Analyse the relationship, propose the selective mechanism, and identify what trade-off this adaptation imposes on the desert species regarding photosynthesis."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, an experimental design, or a proposed mechanism. The student applies criteria to assess quality, accuracy, or suitability.",
            cognitiveDemand: "Judgement with justification. The student identifies a flaw or error, explains the criterion by which it fails, and states what would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Defend", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims transpiration is driven by active pumping in the xylem — evaluate this.' The student must reject the claim, identify the correct mechanism (cohesion-tension, passive), explain why active pumping is mechanically impossible in dead xylem vessels (no energy), and propose the correct alternative.",
            examples: {
                leafAnatomy:    "A student states: 'The epidermis is the most important layer for photosynthesis because it is at the surface and receives the most light.' Evaluate this claim — identify the error, explain which layer is the primary site of photosynthesis and why, and describe what the epidermis actually contributes to leaf function.",
                gasExchange:    "A researcher claims: 'Increasing stomatal density will always increase net photosynthesis rate.' Evaluate this claim — state the conditions under which it would be true, identify the conditions under which it would not hold, and explain the physiological reason for any limitation.",
                transpiration:  "A student designs a potometer experiment and records the rate of bubble movement as 'the rate of transpiration.' Evaluate whether bubble movement rate is an accurate measure of transpiration rate. Identify any assumptions the student is making and describe one condition under which the assumption would be violated.",
                photosynthesis: "Evaluate the claim that 'stomata should remain open at all times to maximise CO₂ entry and therefore maximise photosynthesis.' Address at least three reasons why continuous stomatal opening would be disadvantageous, and explain how the stomatal opening mechanism represents an adaptive trade-off.",
                adaptations:    "A student evaluates a plant for xerophyte adaptations and concludes: 'This plant is a xerophyte because it has a thick cuticle.' Evaluate the sufficiency of this single criterion — explain what additional features would be expected in a genuine xerophyte, why a thick cuticle alone does not confirm xerophyte classification, and propose a more complete evaluation framework."
            }
        },

        create: {
            description: "Generate an original output — experimental design, annotated diagram, comparative model, or novel explanatory framework — by integrating multiple concepts from the lesson.",
            cognitiveDemand: "Synthesis and original production. The student's output did not exist before and requires combining multiple concepts. A strong create-level response is internally consistent, scientifically plausible, and fully addresses the brief.",
            verbs: ["Design", "Propose", "Construct", "Develop", "Plan", "Formulate", "Produce"],
            whatDistinguishesThisLevel: "Create requires original output — not calculation or retrieval. 'Design an experiment to determine how wind speed affects transpiration rate using a potometer' requires specifying the setup, variables, controls, measurement method, and data analysis — it cannot be answered by reproducing a memorised procedure.",
            examples: {
                leafAnatomy:    "Produce a fully annotated transverse section diagram of an idealised dicot leaf adapted to high light intensity in a temperate environment. For each layer shown: (a) name the tissue; (b) describe its cell structure; (c) state its primary function; (d) explain how its position within the leaf is essential for that function. Your diagram must show at least seven distinct layers or structures.",
                gasExchange:    "Design a controlled experiment to determine the effect of CO₂ concentration on net photosynthesis rate in leaf discs. Specify: (a) how you would manipulate CO₂ concentration across at least five levels; (b) how you would measure net photosynthesis rate; (c) what variables you would control and how; (d) how you would analyse the data and what result you would expect; (e) what control you would include to confirm that the leaf discs are photosynthetically viable.",
                transpiration:  "Construct a fully annotated flow diagram showing the complete pathway of a water molecule from soil solution to water vapour in the atmosphere. For each step in the pathway, label: the driving force (water potential gradient / osmosis / cohesion-tension / diffusion); the structure through which the water moves; and the mechanism of movement. Include at least eight distinct steps.",
                photosynthesis: "Propose a research investigation to compare the water use efficiency of a C3 crop species (e.g. wheat) and a C4 crop species (e.g. maize) under three temperature conditions (15°C, 25°C, 35°C). Your proposal must include: (a) the hypothesis; (b) the measurement approach for both CO₂ assimilation and transpiration; (c) the predicted outcome based on C3 vs C4 biochemistry; (d) the expected interaction between temperature and WUE; (e) the agricultural implication of the result.",
                adaptations:    "Formulate a comprehensive evaluation framework for classifying an unknown plant as xerophyte, hydrophyte, sun plant, or shade plant using only a leaf cross-section under a light microscope. Your framework must be structured as a decision key — each decision must be based on a single observable feature. The key must correctly classify all four types and must specify which microscopic feature distinguishes each branch of the key."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the main leaf layers (epidermis, palisade, spongy, vein) but cannot order them correctly or describe their functions",
                "Knows photosynthesis occurs in leaves but cannot connect chloroplast location to specific tissue layers",
                "Cannot explain the difference between transpiration and photosynthesis — often conflates water movement with sugar production",
                "Understands stomata are holes but cannot explain how they open or close",
                "Cannot connect leaf anatomy to Fick's law or to any quantitative concept"
            ],
            immediateNextSteps: [
                "Before learning function: draw a blank transverse leaf section with seven blank boxes stacked vertically and label each layer by name and cell shape only — no functions yet. Repeat until the vertical order is automatic.",
                "Use a 'flat sandwich' analogy for the leaf: bread = epidermis (protection, transparent); cheese = palisade (where the work happens); salad = spongy (gaps for air); bread = lower epidermis (holes = stomata). Pin this image before adding any biological detail.",
                "Separate transpiration from photosynthesis using two separate single-sentence definitions written on two different index cards — never combine them on the same card. Read both cards before every practice session until distinction is automatic.",
                "For stomatal opening: first draw just the two guard cells as two curved sausages with a gap between them. Add only one concept at a time: (1) they get fatter when full of water; (2) they get thinner when empty. Only after mastering this add the K⁺ pump mechanism.",
                "Read each layer of the leaf and match it to exactly one function using a simple table: layer | one function | one reason. Only one function per layer initially — complexity comes later."
            ],
            misconceptionsToAddress: [
                "All cells in the leaf photosynthesise → palisade diagram showing chloroplast density vs epidermis (zero chloroplasts)",
                "Transpiration = photosynthesis → two definition cards (above)",
                "Stomata are always open → stomatal opening/closing sequence diagram"
            ]
        },

        developing: {
            characteristics: [
                "Correctly orders and describes most leaf layers but confuses palisade and spongy mesophyll functions",
                "Understands that stomata open in light but cannot explain the K⁺ pump mechanism in sequence",
                "Can describe transpiration as water loss but cannot explain the cohesion-tension mechanism",
                "Distinguishes xerophyte from hydrophyte at a surface level (e.g. thick cuticle vs thin cuticle) but cannot explain the physiological logic",
                "Can apply Fick's law to simple cases but does not connect its terms to specific leaf structural features"
            ],
            immediateNextSteps: [
                "For the K⁺ pump mechanism: write it as a numbered sequence (1–6 steps) without looking at notes. Check against the complete sequence. Focus on the step that is missing or wrong and rewrite that step only. Repeat daily for three days.",
                "For cohesion-tension: draw the pathway as a chain: evaporation → mesophyll water potential drops → water moves into mesophyll from neighbouring cells → gradient propagates to xylem → tension in xylem → water pulled from roots. Annotate each arrow with its specific mechanism (osmosis / diffusion / cohesion). Do not proceed to the next arrow until the previous mechanism is correctly labelled.",
                "For xerophyte logic: for each adaptation, ask 'which physical variable does this reduce?' — reduced leaf area → reduced total evaporative surface; sunken stomata → reduced water potential gradient; rolled leaf → reduced wind effect. Build a two-column table: adaptation | physical variable reduced.",
                "For Fick's law and leaf: write the equation. Under each variable, write the leaf structure that changes it: area → lamina size; concentration difference → CO₂ gradient maintained by photosynthesis; distance → leaf thickness and stomatal position. This bridges equation to anatomy.",
                "Practice distinguishing palisade from spongy mesophyll: draw both cell types side by side. Palisade: tall columns, tightly packed, many chloroplasts, primary photosynthesis. Spongy: irregular, large air spaces, moderate chloroplasts, primary gas distribution. Never confuse function by drawing both types in every answer."
            ],
            misconceptionsToAddress: [
                "Palisade and spongy mesophyll have the same function → side-by-side diagram comparison (above)",
                "Stomata open in darkness → K⁺ pump trigger is blue light — review trigger before reviewing mechanism",
                "Water is actively pumped up the xylem → cohesion-tension chain diagram (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Accurately describes all leaf layers, their cell types, and their functions in connected explanations",
                "Explains the complete stomatal K⁺ pump mechanism in sequence without reference to notes",
                "Correctly applies cohesion-tension to predict the effect of changing transpiration rate on water column tension",
                "Compares xerophyte, hydrophyte, sun, and shade plant adaptations with mechanistic justifications",
                "Applies Fick's law quantitatively to leaf gas exchange problems"
            ],
            immediateNextSteps: [
                "Extend beyond dicot leaf anatomy: compare a C4 leaf cross-section (with Kranz anatomy) to a C3 leaf. Identify the bundle sheath cells and explain their role in the CO₂ concentrating mechanism.",
                "Calculate water use efficiency: find published Vmax and Km values for Rubisco from C3 and C4 species and compare their CO₂ affinities — connect biochemical affinity to the requirement for high vs low CO₂ concentration at the active site.",
                "Apply the stomatal response to ABA in a drought scenario: trace the full signal from soil water deficit → root ABA synthesis → xylem transport → leaf guard cell ABA receptor → K⁺ efflux → stomatal closure. Practise writing this in under 5 minutes.",
                "Quantify the Fick's law analysis: if leaf thickness doubles, area halves, and CO₂ gradient increases by 50%, calculate the net change in diffusion rate.",
                "Investigate apoplastic vs symplastic water pathways through the mesophyll and connect them to the Casparian strip in the root — this provides the system-level context for the cohesion-tension mechanism."
            ],
            misconceptionsToAddress: [
                "C4 plants simply have more chloroplasts → Kranz anatomy diagram distinguishing mesophyll vs bundle sheath function",
                "WUE is purely a stomatal property → connect to Rubisco biochemistry and CO₂ affinity"
            ]
        },

        expert: {
            characteristics: [
                "Derives gas exchange equations from Fick's law with specific leaf structural parameters",
                "Analyses published stomatal conductance and CO₂ assimilation data — identifies limiting factors, evaluates experimental design, and interprets A/Ci curves",
                "Connects leaf anatomy to global carbon and water fluxes in ecosystem models",
                "Critically evaluates evolutionary trade-offs in leaf design — explains why no leaf is simultaneously perfectly adapted for maximum photosynthesis and minimum water loss"
            ],
            immediateNextSteps: [
                "Analyse A/Ci response curves (net photosynthesis vs intercellular CO₂): identify the Rubisco-limited and RuBP-regeneration-limited phases, extract Vcmax and Jmax, and connect these biochemical parameters to the leaf anatomy and environmental conditions of the measurement.",
                "Model the transpiration stream: given leaf area, stomatal conductance, vapour pressure deficit, and atmospheric CO₂, calculate canopy water use efficiency — compare to published values for forest vs grassland ecosystems.",
                "Critically evaluate the evolutionary constraint argument: using published data on stomatal conductance, photosynthesis, and transpiration across 150 plant species, test whether a trade-off curve exists and what species violate it and why.",
                "Investigate the stomatal opening signal transduction pathway in molecular detail: PYR/PYL ABA receptors → PP2C phosphatase inhibition → SnRK2 kinase activation → SLAC1 anion channel opening → membrane depolarisation → K⁺ efflux. Connect each molecular component to a specific aspect of guard cell turgor regulation."
            ],
            misconceptionsToAddress: [
                "Lineweaver-Burk analogy for gas exchange: non-linear limitation curves require multi-parameter fitting, not simple graphical interception — explore non-linear regression for A/Ci curves"
            ]
        }
    }
},


rootSystems: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about root structure, function, and terminology from memory without requiring understanding of why they are true. The student reproduces definitions, labels, lists, and named structures accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. A student who cannot do this cannot access any higher level in root systems.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct factual content with no explanation. 'The Casparian strip is made of suberin' is remember. 'The Casparian strip is made of suberin, which blocks apoplastic flow because suberin is hydrophobic' crosses into understand.",
            examples: {
                rootBasics:     "Name the two main root system types. For each, name two plant examples.",
                rootAbsorption: "List the three water movement pathways from soil to xylem. Define the Casparian strip and state its chemical composition.",
                rootAdaptations:"Name four specialised root types and one plant example of each.",
                rootSymbiosis:  "Define mycorrhiza. Name the two main types. State one benefit the plant receives and one benefit the fungus receives.",
                rootAnatomy:    "Label the following on a root cross-section diagram: epidermis, cortex, endodermis, pericycle, xylem, phloem."
            }
        },

        understand: {
            description: "Explain the meaning behind root system facts — connect structure to function, cause to effect, and mechanism to outcome. The student must demonstrate they understand WHY structures are arranged as they are.",
            cognitiveDemand: "Translation and interpretation. The student explains, connects, or justifies rather than repeating. A mechanistic explanation the student could not produce by memorising the question-answer pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand goes beyond remember by requiring a mechanism or reason. 'The Casparian strip blocks apoplastic flow' is remember. 'The Casparian strip blocks apoplastic flow because its suberin band is hydrophobic, forcing water through the plasma membrane where selective transporters can control what passes' is understand.",
            examples: {
                rootBasics:     "Explain why a fibrous root system is better than a taproot system for preventing soil erosion, connecting root architecture to soil-binding mechanism.",
                rootAbsorption: "Explain why the Casparian strip is necessary for selective ion uptake. Your answer must explain what would happen to xylem ion composition if the Casparian strip were absent.",
                rootAdaptations:"Explain why pneumatophores are an effective solution to root anoxia in waterlogged soil. Identify the specific problem and how the structure solves it.",
                rootSymbiosis:  "Explain why mycorrhizal fungi are particularly important for phosphorus absorption, connecting phosphate mobility in soil to the physical dimensions of fungal hyphae relative to root hairs.",
                rootAnatomy:    "Explain why xylem is positioned at the centre of the root rather than at the periphery, connecting position to function."
            }
        },

        apply: {
            description: "Use known principles, pathways, and concepts to predict outcomes, solve problems, or trace processes through novel contexts not seen before in exactly this form.",
            cognitiveDemand: "Procedure execution in a novel situation. The student selects the correct concept and applies it correctly. A common failure is knowing the concept but applying it to the wrong structure or context.",
            verbs: ["Predict", "Trace", "Calculate", "Determine", "Sketch", "Apply", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Trace the path of a nitrate ion from the soil solution to the xylem' requires the student to sequence: soil → root hair (active uptake) → cortex symplast → across endodermis (symplast only, Casparian strip blocks apoplast) → pericycle → xylem loading. This is applying the pathway knowledge to produce a sequence the student has not been given.",
            examples: {
                rootBasics:     "Predict how root architecture would change if a dandelion plant were grown in compacted soil versus loose sandy soil. Apply specific root growth responses to each condition.",
                rootAbsorption: "Trace the complete pathway of a water molecule from the soil surface to the xylem vessel, naming every tissue and pathway used and stating at which point apoplastic movement must stop.",
                rootAdaptations:"A botanist discovers a plant growing in a salt marsh with specialised root tip structures that appear to exclude Na⁺ before it enters the root. Apply your knowledge of root uptake pathways to explain how such exclusion could work at the cellular level.",
                rootSymbiosis:  "A farmer inoculates soybean seeds with Bradyrhizobium before planting. Predict the sequence of events from initial bacterial contact with the root hair to the formation of a functional nitrogen-fixing nodule.",
                rootAnatomy:    "Sketch a labelled diagram of the root maturation zone in cross-section, showing the correct position of all major tissues. Add arrows showing the apoplast pathway and the point at which it is blocked."
            }
        },

        analyze: {
            description: "Break down experimental data or complex scenarios to identify patterns, relationships, and conclusions. The student derives meaning from evidence rather than being told what the evidence means.",
            cognitiveDemand: "Decomposition and inference. The student works from data or observation to a conclusion not given to them. Key marker: the conclusion must be justified from the evidence provided.",
            verbs: ["Identify", "Determine", "Deduce", "Distinguish", "Interpret", "Analyse", "Classify"],
            whatDistinguishesThisLevel: "Analyze requires reasoning from evidence. 'A plant has high xylem Na⁺ when grown in saline soil, but a related halophyte has low xylem Na⁺ in the same soil. Analyse the difference.' The student must identify that the Casparian strip or endodermal transporters differ, and deduce a specific mechanism — this cannot be answered by recalling a fact.",
            examples: {
                rootBasics:     "Root growth data are provided for a plant grown in nutrient-poor conditions: lateral root density increased 3-fold and root hair length increased 2-fold, but taproot elongation was unchanged. Analyse what these data reveal about the plant's nutrient acquisition strategy and which nutrient is most likely limiting.",
                rootAbsorption: "An experiment shows that plants treated with a suberin biosynthesis inhibitor accumulate 5× more Na⁺ in their shoots when grown in saline soil. Analyse what this result reveals about the function of suberin in roots and identify which specific structure has been disrupted.",
                rootAdaptations:"Cross-sections of two root samples are provided: Sample A has extensive aerenchyma in the cortex; Sample B has dense, compact cortex cells. Analyse what environment each root is adapted to and identify the specific functional advantage of aerenchyma in that environment.",
                rootSymbiosis:  "A forest plot treated with high phosphate fertiliser shows declining mycorrhizal colonisation over three years while an untreated adjacent plot maintains high colonisation. Analyse the mechanism driving this pattern, identifying what cost-benefit calculation the plant is performing.",
                rootAnatomy:    "An electron micrograph shows a root endodermal cell with heavily thickened inner tangential wall (Casparian strip position extended). Deduce what environmental stress this plant is likely experiencing, and explain your reasoning."
            }
        },

        evaluate: {
            description: "Make a supported judgement about a claim, experimental design, proposed mechanism, or management practice. The student applies criteria, identifies flaws or strengths, and defends a conclusion.",
            cognitiveDemand: "Judgement with justification. The student identifies what is wrong or right, explains the standard by which it fails or succeeds, and states what would be correct or improved.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Defend", "Justify"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims mycorrhizal fungi are parasites because they extract carbon from the plant.' The student must judge this incorrect, explain the criterion (parasitism requires net harm to the host; mycorrhizal associations increase plant nutrient uptake and fitness), and state why the mutual exchange makes the relationship mutualistic, not parasitic.",
            examples: {
                rootBasics:     "A student claims: 'Deep-rooted plants are always better adapted to dry climates because they can access groundwater.' Evaluate this claim in full — identify conditions under which it is true, conditions under which it fails, and give a specific counter-example.",
                rootAbsorption: "Evaluate the following experimental design: a researcher claims to have demonstrated apoplastic water transport by injecting dye into the soil and showing it appears in the xylem within 30 seconds. Identify any assumptions the researcher is making and state whether this evidence is sufficient to conclude that apoplastic transport was the route used.",
                rootAdaptations:"Evaluate whether haustorial root parasitism (as in Striga witchweed) represents an adaptation or a degeneration of normal root function. Assess from both the parasite's and host's perspective.",
                rootSymbiosis:  "Evaluate the recommendation that all crop seeds should be inoculated with mycorrhizal fungi before planting. Assess the circumstances under which this is beneficial, when it would be unnecessary, and when it might be actively counterproductive.",
                rootAnatomy:    "A student states: 'The pericycle is unimportant because it lies between the endodermis and the vascular tissue and has no obvious absorption function.' Evaluate this statement, identifying at least two pericycle functions the student has overlooked and explaining their significance."
            }
        },

        create: {
            description: "Generate something original: an experimental design, a comparative analysis framework, a novel adaptive strategy, an annotated pathway, or a management plan. The student integrates multiple concepts into a coherent, original output.",
            cognitiveDemand: "Synthesis and original production. The student produces output that did not exist before by combining multiple concepts. Strong create-level responses are internally consistent, biologically plausible, and fully address the brief.",
            verbs: ["Design", "Propose", "Construct", "Develop", "Formulate", "Plan", "Produce"],
            whatDistinguishesThisLevel: "Create requires original synthesis. 'Design an experiment to test whether the Casparian strip is necessary for selective ion uptake' requires the student to specify a method for disrupting suberisation, a way to measure ion selectivity, appropriate controls, and how to interpret results — integrating anatomy, physiology, and experimental design.",
            examples: {
                rootBasics:     "Design an experiment to compare the effectiveness of taproot vs fibrous root systems in preventing soil erosion under simulated rainfall. Specify: plant species, soil type, rainfall simulation method, erosion measurement, controls, and how you would analyse and interpret the results.",
                rootAbsorption: "Propose a complete experiment to determine whether a novel gene (GeneX) you have identified in rice encodes an ion channel or an ion pump in root epidermal cells. Your proposal must include: expression analysis, cellular localisation, electrophysiology, and phenotypic analysis of knockout plants.",
                rootAdaptations:"Propose how you would engineer a crop species currently sensitive to waterlogging to survive flooded conditions for up to two weeks. Your proposal must address: (a) which root structural modification would allow O₂ delivery; (b) which genetic changes would produce this structure; (c) how you would confirm the modification works; (d) what trade-offs or risks the modification might introduce.",
                rootSymbiosis:  "Construct a fully annotated diagram showing the complete sequence of events from initial Rhizobium-legume root hair contact to a mature, active nitrogen-fixing nodule. For each stage, annotate: the molecular signal involved, the plant response, and the bacterial developmental change. Include leghemoglobin and its role in the final structure.",
                rootAnatomy:    "Formulate a dichotomous identification key that could be used to determine which of the following root types is present in a cross-section specimen: normal dicot root, normal monocot root, root with Casparian strip damage, root from waterlogged habitat (aerenchyma), storage root. Your key must use only observable anatomical features and work through yes/no questions."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the two root system types and give examples",
                "Knows roots absorb water and anchor plants but cannot describe the cellular mechanism",
                "Cannot locate the Casparian strip or explain its function",
                "Confuses mycorrhizae with parasites",
                "Cannot distinguish apoplast from symplast pathways",
                "Treats root hairs as a separate cell type rather than extensions of epidermal cells"
            ],
            immediateNextSteps: [
                "Start with a physical diagram: draw a root cross-section freehand (no labels yet), then add labels from outside in — epidermis, cortex, endodermis, pericycle, xylem, phloem — and repeat until it is automatic without reference.",
                "For root hairs: find a real root hair specimen under a microscope or in an image. Observe that the hair is continuous with the epidermal cell body — it is not a separate structure. Annotate the continuity in your diagram.",
                "For apoplast vs symplast: use a colour-coding system. Colour apoplast flow blue (through walls, outside plasma membrane). Colour symplast flow red (through cytoplasm, inside plasma membrane). Trace each colour on the same diagram and mark in yellow exactly where the blue must stop (Casparian strip).",
                "For mycorrhizae: draw the mutualism exchange diagram — plant gives sugar (arrow to fungus), fungus gives phosphorus (arrow to plant). Label each arrow. Say aloud: 'Both benefit — this is mutualism, not parasitism.' Repeat this exercise before every practice question on symbiosis.",
                "For the Casparian strip: use the customs analogy. Draw the strip as a wall across the corridor (apoplast). Draw a customs gate (plasma membrane) that checks each ion individually. Practise explaining this to someone else without using the diagram."
            ],
            misconceptionsToAddress: [
                "Root hairs are a separate cell type → microscopy observation showing continuity with epidermal cell",
                "Mycorrhizae are parasites → mutualism exchange diagram",
                "Roots only absorb water → list all root functions before every revision session"
            ]
        },

        developing: {
            characteristics: [
                "Can describe root anatomy in the correct order but sometimes omits the pericycle",
                "Understands the Casparian strip blocks apoplastic flow but cannot fully explain the consequence for ion selectivity",
                "Can name the three water pathways but confuses transmembrane with symplast",
                "Knows mycorrhizae provide phosphorus but cannot explain why phosphorus specifically benefits from fungal delivery",
                "Can identify taproot vs fibrous systems but cannot explain all adaptive consequences",
                "Confuses root nodule leghemoglobin function with haemoglobin in blood"
            ],
            immediateNextSteps: [
                "For the pericycle: add it to every root cross-section you draw with the annotation 'lateral root origin' — this single function makes its position logical (inside endodermis, outside vascular tissue) and prevents omission.",
                "For Casparian strip consequence: immediately after drawing the strip blocking apoplastic flow, draw a continuation: the ion must now cross the plasma membrane via a protein transporter. Draw the transporter as a gated door. Write: 'No transporter = no entry. This is how selectivity works.'",
                "For phosphorus and fungi: draw the phosphorus depletion zone as a halo around the root. Draw root hairs reaching to the edge of the halo but not beyond. Draw fungal hyphae extending centimetres past the halo into fresh phosphorus-containing soil. This single diagram explains why fungi provide what root hairs cannot.",
                "For leghemoglobin: write the paradox explicitly — 'nitrogenase needs NO O₂; bacteroid respiration needs O₂. Leghemoglobin delivers O₂ quickly without allowing it to accumulate.' Draw this as a buffer diagram. Compare to haemoglobin releasing O₂ to muscle: identical logic.",
                "For transmembrane vs symplast: the transmembrane pathway crosses membranes at each cell boundary separately; the symplast pathway moves through the cytoplasm of connected cells without repeatedly crossing membranes. Draw a three-cell strip and trace each pathway with arrows."
            ],
            misconceptionsToAddress: [
                "Pericycle omission → always include with 'lateral root origin' label",
                "Phosphorus and mycorrhizae: why not other nutrients → depletion zone and diffusion diagram",
                "Transmembrane vs symplast confusion → three-cell diagram comparing pathways"
            ]
        },

        proficient: {
            characteristics: [
                "Can draw and label a complete root cross-section accurately from memory",
                "Can trace water and ion pathways from soil to xylem with correct identification of Casparian strip function",
                "Explains mycorrhizal and nitrogen-fixing symbioses correctly with exchange diagram",
                "Understands all three water pathways and can explain aquaporin regulation",
                "Can classify root adaptations by environment and explain the adaptive logic",
                "Can connect root-to-shoot signalling (ABA, cytokinin) to drought and nutrient responses"
            ],
            immediateNextSteps: [
                "Extend to root pressure and xylem loading: research how ions are actively loaded into xylem vessels by the pericycle, and how this creates osmotic pressure that drives root pressure — connect this to guttation as an observable consequence.",
                "Explore the rhizosphere microbiome: the zone of soil influenced by root exudates supports thousands of bacterial species, many of which solubilise phosphorus, produce growth hormones, or suppress pathogens. Map the chemical signals that recruit these bacteria and compare with Rhizobium signalling.",
                "Calculate the actual mycorrhizal contribution: given that fungal hyphae (diameter ~2–5 μm) can extend 10 cm from the root surface, calculate the additional soil volume explored by fungal hyphae compared to root hairs alone for a 1 cm root segment. Express as a fold-increase.",
                "Research the ABA drought response pathway in detail: from root perception of water deficit → ABA synthesis → xylem transport → stomatal guard cell signal transduction → stomatal closure. Identify the kinase and phosphatase involved in guard cell ABA signalling."
            ],
            misconceptionsToAddress: [
                "Xylem loading as passive → derive that ion concentration in xylem often exceeds soil concentration, proving active loading against a gradient"
            ]
        },

        expert: {
            characteristics: [
                "Can explain and evaluate the molecular basis of Casparian strip formation (SGN1/SGN3 signalling pathway, CASP proteins, suberin polymerisation)",
                "Can design root physiology experiments including appropriate controls for confounding factors",
                "Can critically evaluate primary literature on mycorrhizal carbon transfer including methodological limitations",
                "Connects root architecture to ecosystem-level processes (carbon cycling, nitrogen cycling, soil formation)",
                "Can apply root uptake knowledge to crop improvement design including genetic targets"
            ],
            immediateNextSteps: [
                "Read and critically evaluate a primary research paper on Casparian strip biosynthesis — identify which mutant phenotype proved the strip's function, what the controls were, and whether the conclusions are fully supported by the evidence.",
                "Investigate metabolic control of root development: how does the plant balance carbon allocation between root growth, root exudate production, and mycorrhizal carbon supply? What are the tradeoffs and how is the balance regulated at the molecular level?",
                "Explore the evolution of root nodules: nitrogen-fixing symbiosis has evolved independently in multiple plant lineages but always involves the same molecular pathway (the common symbiosis pathway). Research what this convergence implies about evolutionary constraints on plant-microbe interactions."
            ],
            misconceptionsToAddress: [
                "Mycorrhizal transfer as altruism → review primary evidence that transfer follows sink-source gradients, not directed plant signals; evaluate what constitutes evidence for plant agency in nutrient transfer"
            ]
        }
    }
},

const EndSection5 = "close"