

cellCommunication: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about cell signalling from memory without requiring understanding of why they are true. The student reproduces definitions, names, and factual associations accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No causal reasoning required.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no mechanism. 'GPCRs have seven transmembrane helices' is remember-level. Explaining why this structure enables G protein coupling crosses into understand.",
            examples: {
                signallingBasics:    "Name the three stages of cell signalling. List the four types of signalling classified by distance (autocrine, paracrine, endocrine, synaptic).",
                receptorTypes:       "List the four major receptor classes. For each, state its location (membrane or intracellular) and one example ligand.",
                secondMessengers:    "Name three second messengers. For each, name the enzyme that produces it and the primary downstream target it activates.",
                signalAmplification: "State the sequence of proteins in the Ras/MAPK cascade from RTK activation to ERK. Name two second messengers that amplify the original signal."
            }
        },

        understand: {
            description: "Explain the meaning behind facts — connect signal to mechanism, connect receptor structure to function, and interpret what pathway activation means biologically.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, connects, or explains mechanism rather than repeating. Must supply causal links.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand goes beyond remember by requiring mechanism. 'Steroid hormones use intracellular receptors' is remember. 'Steroid hormones are lipid-soluble and therefore cross the membrane freely, allowing direct access to intracellular receptors where they function as transcription factors — unlike hydrophilic peptide hormones that cannot cross the membrane' is understand.",
            examples: {
                signallingBasics:    "Explain why hydrophilic signalling molecules (e.g. adrenaline) require cell-surface receptors, while hydrophobic signalling molecules (e.g. oestrogen) can use intracellular receptors. Your answer must reference the structure of the plasma membrane.",
                receptorTypes:       "Explain why ligand-gated ion channels produce responses within milliseconds while intracellular receptor responses take hours to days. Your answer must reference the number of molecular steps between ligand binding and cellular response.",
                secondMessengers:    "Explain what signal amplification means in the context of the cAMP-PKA pathway. Your answer must state at which step(s) the number of activated molecules increases.",
                signalAmplification: "Explain why a Ras G12V mutation (which eliminates GTPase activity) causes constitutively active downstream signalling. Your answer must reference the role of GTP hydrolysis in the normal signalling cycle."
            }
        },

        apply: {
            description: "Use known pathway logic to predict outcomes in scenarios that have not been seen before in exactly this form.",
            cognitiveDemand: "Procedure execution and prediction in novel contexts. The student selects the correct pathway, traces it correctly, and predicts the outcome.",
            verbs: ["Calculate", "Determine", "Predict", "Trace", "Apply", "Use", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a new prediction problem. 'Predict the effect of a phosphodiesterase inhibitor on cAMP levels and the downstream response' requires the student to recognise that degradation is blocked → cAMP accumulates → PKA more active → enhanced downstream effects. This is different from understanding what phosphodiesterase does.",
            examples: {
                signallingBasics:    "Predict the effect of a drug that permanently activates adenylyl cyclase in cardiac muscle cells. Trace the signalling pathway from adenylyl cyclase activation to the cellular response.",
                receptorTypes:       "A patient's cells have a loss-of-function mutation in the insulin receptor tyrosine kinase domain. Predict the effect on: (a) insulin binding; (b) receptor autophosphorylation; (c) IRS-1 activation; (d) GLUT4 surface expression; (e) blood glucose.",
                secondMessengers:    "A drug inhibits phospholipase C in smooth muscle cells stimulated by a Gq-coupled GPCR. Predict the effects on IP₃ production, ER Ca²⁺ release, and smooth muscle contraction.",
                signalAmplification: "The MAPK pathway has five sequential steps (RTK → Grb2/SOS → Ras → Raf → MEK → ERK). If each step activates 10 downstream molecules, calculate the total amplification factor from one RTK activation to the number of ERK molecules activated."
            }
        },

        analyze: {
            description: "Break down experimental data or a pathway diagram to identify patterns, determine what a result means, and draw conclusions from evidence.",
            cognitiveDemand: "Decomposition and inference from evidence. The student reaches a conclusion not given to them and justifies it from evidence.",
            verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Distinguish", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. Given data showing that a drug prevents cAMP accumulation without affecting receptor binding, analysing which step in the pathway is inhibited requires the student to eliminate receptor-level effects and implicate the G protein or adenylyl cyclase — this is inference from data, not formula application.",
            examples: {
                signallingBasics:    "A researcher adds adrenaline to isolated heart cells and observes increased cAMP and increased contraction rate. They then add a drug and observe: receptor binding unchanged, G protein activation unchanged, cAMP does not increase, contraction rate does not increase. Identify which step in the pathway is most likely inhibited by the drug and justify using the elimination logic.",
                receptorTypes:       "Two cell types respond differently to the same ligand: Cell type A responds within 1 ms; Cell type B responds within 2 hours. Analyse what receptor type each cell most likely uses, what the intracellular events are in each case, and what types of cellular response each is likely producing.",
                secondMessengers:    "An experiment shows that a signalling pathway activates Ca²⁺ release from the ER but does NOT require extracellular Ca²⁺. Analyse which second messenger is responsible, which receptor triggered its production, and which ER channel it acts on. Justify each step of your reasoning.",
                signalAmplification: "A patient's cancer cells show constitutive ERK activation despite normal EGF receptor levels and normal EGF concentrations. Identify the three most likely points of constitutive activation in the Ras/MAPK pathway and explain what molecular event at each point would produce this phenotype."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, accuracy, or quality of a claim, experimental design, or proposed pathway. Must apply criteria and defend a position.",
            cognitiveDemand: "Judgement with justification. The student identifies what is wrong, explains the criterion by which it fails, and states what would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires judgement against a standard. 'Evaluate the claim that blocking cAMP production will always block the physiological response to adrenaline.' The student must note that adrenaline also activates Gq-coupled pathways in some tissues, that downstream kinases may have cAMP-independent activation routes, and that the claim is therefore tissue-specific — not universal.",
            examples: {
                signallingBasics:    "A student states: 'Because steroid hormones act by changing gene expression, they always produce slower responses than peptide hormones.' Evaluate this claim — identify when it is true, when it is an oversimplification, and provide one example that challenges the claim.",
                receptorTypes:       "Evaluate the experimental design: a researcher measures total cellular cAMP levels before and after adding a GPCR agonist, concluding that cAMP is the only second messenger responsible for the observed cellular response. Identify the limitation of measuring total cAMP, and explain why a compartmentalised or kinetic measurement would be more informative.",
                secondMessengers:    "Evaluate the claim: 'Signal amplification means that larger signals always produce larger responses.' Identify the mechanism that prevents unlimited amplification, explain how cells avoid saturating their signalling pathways, and use one specific molecular termination mechanism to support your answer.",
                signalAmplification: "A drug company claims their compound X is an effective cancer treatment because it reduces Ras activity by 50% in cell culture. Evaluate whether this claim is sufficient evidence to advance X to clinical trials — address the issues of Ras isoform specificity, pathway redundancy, in vivo pharmacokinetics, and potential off-target effects on normal cells."
            }
        },

        create: {
            description: "Generate something new — an experimental design, a drug strategy, a novel signalling diagram, or an original proposal — integrating multiple concepts coherently.",
            cognitiveDemand: "Synthesis and original production. The student produces an output that requires combining multiple pathway concepts and is internally consistent and scientifically plausible.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output. 'Design a drug strategy to treat a cancer driven by constitutively active EGFR' requires the student to identify the target, choose an inhibition mechanism (competitive kinase inhibitor vs monoclonal antibody), predict resistance mechanisms, propose combination therapy, and specify how they would test efficacy — integrating receptor biology, kinetics, pharmacology, and cancer biology.",
            examples: {
                signallingBasics:    "Design an experiment to determine whether a newly discovered hormone uses a GPCR or an RTK as its primary receptor. Specify: (a) what molecular markers you would measure and why; (b) what pharmacological tools you would use to distinguish the two possibilities; (c) what controls you would include; (d) what result pattern would confirm each receptor type.",
                receptorTypes:       "Propose a therapeutic strategy for a cancer driven by constitutive EGFR signalling. Your proposal must address: (a) the mechanism of EGFR constitutive activation; (b) whether you would target the receptor directly or a downstream component; (c) one anticipated resistance mechanism and how you would counter it; (d) how you would test selectivity against normal cells.",
                secondMessengers:    "Construct an annotated signalling diagram for a GPCR pathway of your choice that incorporates: (a) the full sequence from ligand binding to cellular response; (b) at least two amplification steps with approximate fold-amplification; (c) at least two termination mechanisms; (d) one point where crosstalk with a second pathway occurs.",
                signalAmplification: "Formulate a hypothesis explaining why the same ligand (e.g. adrenaline) can produce different responses in different tissues (heart: increased rate; liver: glycogen breakdown; blood vessels: contraction or dilation). Design an experiment to test whether the difference is due to receptor subtype, G protein coupling, second messenger identity, or effector protein expression. Specify what you would measure in each tissue type."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the three stages of cell signalling (reception, transduction, response) but cannot explain what occurs at each stage",
                "Knows that receptors exist but cannot distinguish GPCRs from RTKs by mechanism",
                "Treats 'second messenger' as synonymous with 'signal' — does not understand it is produced intracellularly",
                "Cannot explain why steroid hormones use intracellular receptors",
                "Confuses signal amplification with signal strengthening (louder) rather than cascade multiplication"
            ],
            immediateNextSteps: [
                "Draw the three-stage signalling overview before any pathway detail: draw a cell, label the membrane, show the ligand outside, the receptor at the membrane, and a cascade inside ending at 'response'. Annotate each stage with one sentence. Do not proceed to specific pathways until this overview is automatic.",
                "Practise the membrane permeability rule with two columns: 'can cross membrane' (lipid-soluble, e.g. steroids, thyroid hormone) vs 'cannot cross membrane' (water-soluble, e.g. peptides, catecholamines). For each, state receptor type. Repeat until automatic.",
                "For second messengers: draw the cell with the receptor at the membrane and the second messenger (e.g. cAMP) as a dot produced inside the cell. Draw the original ligand staying outside. Use this to anchor: second messengers are made inside; the original signal stays outside.",
                "For signal amplification: use the branching tree analogy — one starting node produces two branches at step 1, each produces two at step 2, etc. Count total nodes at each level. Connect this explicitly to 'one hormone → millions of enzyme activations'.",
                "Focus only on two receptor types first (GPCR and intracellular receptor) — master the contrast before introducing RTKs and ion channels."
            ],
            misconceptionsToAddress: [
                "Second messenger = original signal → two-compartment diagram (above)",
                "All receptors are on the membrane → membrane permeability table (above)",
                "Amplification = louder, not multiplied → branching tree analogy (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can correctly name GPCR, RTK, and intracellular receptor types and their ligand types",
                "Can trace the cAMP-PKA pathway step by step but sometimes omits G protein activation",
                "Understands second messengers conceptually but confuses IP₃ and DAG roles",
                "Can explain signal amplification qualitatively but cannot calculate amplification factors",
                "Knows Ras is in the MAPK pathway but confuses it with heterotrimeric G proteins"
            ],
            immediateNextSteps: [
                "For IP₃ vs DAG: draw PIP₂ being cleaved by PLC into two products — draw IP₃ travelling to the ER (label: Ca²⁺ release) and DAG staying at the membrane (label: PKC activation). The spatial distinction is key — practise this diagram until both products and their distinct destinations are automatic.",
                "For the G protein omission: when writing the GPCR pathway, always start from the G protein as the first intracellular step — never jump from receptor to adenylyl cyclase. Write: 'Ligand → receptor → G protein (Gα GDP→GTP) → adenylyl cyclase → cAMP → PKA.' Check every answer for the G protein step.",
                "For Ras vs heterotrimeric G protein: draw both side by side — Gα is one subunit of a three-part complex; Ras is a completely separate, single-protein GTPase in the RTK pathway. Label which pathway uses each. Never use 'G protein' without specifying which type.",
                "For amplification calculation: practise the arithmetic with specific numbers — 'if each activated Raf activates 10 MEK molecules, and each MEK activates 10 ERK molecules, how many ERK molecules are activated by one Raf?' (100). Extend to five-step cascades.",
                "Focus one study session specifically on signal termination — list three mechanisms for each major pathway (GPCR/cAMP: phosphodiesterase, GTPase, receptor desensitisation; RTK: phosphatase, Ras GAP, receptor endocytosis). Termination is routinely omitted at this level."
            ],
            misconceptionsToAddress: [
                "IP₃ and DAG confusion → spatial diagram of PLC cleavage products (above)",
                "Ras = heterotrimeric G protein → side-by-side comparison diagram (above)",
                "Omitting termination mechanisms → dedicated termination study session (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Can trace the complete GPCR→cAMP→PKA and RTK→Ras→MAPK→ERK pathways accurately",
                "Correctly distinguishes all four receptor classes by mechanism, speed, and ligand type",
                "Can explain signal amplification quantitatively and identify where in a cascade each amplification step occurs",
                "Connects specific signalling defects to specific diseases (Ras mutations → cancer; insulin resistance → type 2 diabetes)",
                "Can explain signal termination for at least three pathways and its importance for preventing disease"
            ],
            immediateNextSteps: [
                "Investigate pathway crosstalk: look up how cAMP-PKA signalling can phosphorylate Raf, inhibiting the MAPK pathway — draw this crosstalk and explain why it matters for drug combinations.",
                "Research the PI3K/Akt pathway in detail — it branches from RTK activation in parallel with Ras/MAPK and is critical for cell survival. Add it to your RTK pathway diagram and label where it diverges from the Ras branch.",
                "Study receptor desensitisation at the molecular level: look up β-arrestin recruitment to phosphorylated GPCRs — how does β-arrestin both terminate G protein signalling and initiate a separate, G protein-independent signalling cascade? This reveals GPCRs as far more complex than the simple 'G protein activator' model.",
                "Connect signalling to pharmacology: for five clinical drugs (propranolol, tamoxifen, imatinib, metformin, amlodipine), identify the exact molecular target, the pathway it modulates, and the disease it treats. Construct this as a table.",
                "Explore the concept of signalling specificity vs promiscuity: if adrenaline activates multiple receptor subtypes (α1, α2, β1, β2, β3), each coupled to different G proteins, how does the body maintain specific responses in different tissues? Research adrenergic receptor subtype distribution."
            ],
            misconceptionsToAddress: [
                "RTK pathway and GPCR pathway as entirely separate → study PI3K branch and PKA-Raf crosstalk",
                "GPCRs only signal via G proteins → study β-arrestin signalling"
            ]
        },

        expert: {
            characteristics: [
                "Can explain pathway crosstalk between GPCR and RTK pathways at the molecular level",
                "Designs signalling experiments using specific pharmacological tools and molecular biology approaches",
                "Critically evaluates published signalling data — identifies which steps are proven vs inferred",
                "Connects signalling pathway logic to drug resistance mechanisms in cancer",
                "Can explain how spatial and temporal dynamics of second messengers (Ca²⁺ microdomains, cAMP compartmentalisation) contribute to signalling specificity"
            ],
            immediateNextSteps: [
                "Derive the concept of 'systems biology' of signalling: read one review paper on MAPK pathway modelling, noting how feedback loops (negative feedback from ERK to SOS, positive feedback from ERK to Ras via RSK) create bistable switching and pulse-like ERK activation dynamics.",
                "Critically evaluate a published paper reporting that a kinase inhibitor is effective in a cancer cell line — assess: is the claimed target actually the primary driver? Is the IC₅₀ achievable in vivo? Are off-target effects reported? Are resistance experiments included?",
                "Investigate synthetic lethality as a drug strategy: BRCA-mutant cancers are sensitive to PARP inhibitors — research how this exploits the interaction between two signalling/DNA-repair pathways and why it is a paradigm for targeting signalling network vulnerabilities.",
                "Study the structural basis of GPCR activation using cryo-EM structures — understand how the movement of transmembrane helices upon agonist binding opens the intracellular cavity for G protein coupling. Connect this structural event to the pharmacological distinction between full agonists, partial agonists, and inverse agonists."
            ],
            misconceptionsToAddress: [
                "Signalling pathways as linear and independent → ERK feedback loops and pathway crosstalk review",
                "IC₅₀ = Ki = effective drug dose in vivo → evaluate pharmacokinetics in published data"
            ]
        }
    }
},




cellularProcesses: {
    knowledgeLevel: {

        remember: {
            description: "Recall stored facts about cellular respiration, photosynthesis, the cell cycle, and membrane transport without requiring explanation of mechanisms or causes.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No causal reasoning required. If a student cannot recall basic facts at this level, no higher-level question is accessible.",
            verbs: ["State", "List", "Name", "Identify", "Write", "Label", "Define"],
            whatDistinguishesThisLevel: "A remember-level response produces correct facts with no mechanism. 'Glycolysis occurs in the cytoplasm and produces 2 ATP' is remember-level. Adding 'because...' crosses into understand.",
            examples: {
                cellularRespiration: "State the four stages of aerobic respiration in order. For each, state the subcellular location and the net ATP yield.",
                photosynthesis:      "Name the two stages of photosynthesis, state where each occurs in the chloroplast, and list the inputs and outputs of each stage.",
                cellCycle:           "List the phases of the cell cycle in order. Name the three main checkpoints and the phase at which each operates.",
                membraneTransport:   "Define osmosis. State what happens to an animal cell placed in a hypotonic solution."
            }
        },

        understand: {
            description: "Explain why each process works as it does — connecting structure to function, mechanism to outcome, and cause to effect.",
            cognitiveDemand: "The student must supply the causal link, not just the fact. Rephrasing in own words, connecting two concepts, or explaining why something is as it is demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Connect", "Contrast", "Interpret", "Paraphrase"],
            whatDistinguishesThisLevel: "'The proton gradient drives ATP synthesis' is remember. 'The proton gradient drives ATP synthesis because H⁺ flows down its electrochemical gradient through ATP synthase, releasing free energy used to phosphorylate ADP' is understand — the student supplies the mechanism.",
            examples: {
                cellularRespiration: "Explain why FADH₂ produces fewer ATP than NADH. Your answer must reference where each electron carrier donates its electrons in the ETC and how that determines how many H⁺ are pumped.",
                photosynthesis:      "Explain why the Calvin cycle is misleadingly called the 'dark reactions.' Your answer must reference the cycle's actual inputs and explain why it stops in prolonged darkness.",
                cellCycle:           "Explain how cyclin B-CDK1 triggers the onset of mitosis. Your answer must describe what cyclin B does to CDK1 and what CDK1 phosphorylates to initiate chromosome condensation and spindle assembly.",
                membraneTransport:   "Explain the difference between primary and secondary active transport. Justify why Na⁺-glucose cotransport is classified as active transport even though it does not directly hydrolyse ATP."
            }
        },

        apply: {
            description: "Use equations, rules, and principles to solve problems in new contexts — calculating ATP yields, predicting osmotic outcomes, or applying checkpoint logic to novel scenarios.",
            cognitiveDemand: "The student selects the correct tool and uses it accurately in a context not previously encountered in exactly this form. The output is a specific prediction, calculation, or diagram.",
            verbs: ["Calculate", "Predict", "Determine", "Sketch", "Apply", "Use", "Solve"],
            whatDistinguishesThisLevel: "Apply requires working through a new problem. 'Calculate the total ATP yield if only glycolysis and the Krebs cycle operate (no ETC)' forces the student to sum correctly from memory — this is different from reproducing a memorised total.",
            examples: {
                cellularRespiration: "A cell oxidises one molecule of glucose completely. Calculate the maximum number of ATP molecules produced, showing the contribution of each stage (glycolysis, pyruvate decarboxylation, Krebs cycle, oxidative phosphorylation). Use the modern estimate of 2.5 ATP per NADH and 1.5 ATP per FADH₂.",
                photosynthesis:      "Predict what happens to the rate of the Calvin cycle if a herbicide blocks photosystem I, preventing NADPH production. Identify which specific Calvin cycle reaction is immediately affected and explain why.",
                cellCycle:           "Predict the effect on cell cycle progression of a mutation that prevents cyclin B degradation at the end of mitosis. Identify at which stage cells would accumulate and explain the molecular reason.",
                membraneTransport:   "A red blood cell is placed in a solution of 0.3% NaCl (normal plasma is ~0.9% NaCl). Predict and explain what happens to the cell volume over 30 minutes, using osmosis principles."
            }
        },

        analyze: {
            description: "Examine experimental data or complex scenarios to identify patterns, deduce mechanisms, and draw evidence-based conclusions not given in the question.",
            cognitiveDemand: "The student works from evidence to conclusion. A key marker: the conclusion was not provided — the student derives it from data or a described scenario.",
            verbs: ["Identify", "Deduce", "Analyse", "Determine", "Distinguish", "Interpret", "Classify"],
            whatDistinguishesThisLevel: "Analyse requires inference. 'Given that blocking Complex I collapses the proton gradient but O₂ consumption continues via Complexes III and IV, what does this tell you about electron entry points?' requires the student to reason about the ETC architecture from functional data — this cannot be answered by recall alone.",
            examples: {
                cellularRespiration: "An inhibitor completely blocks Complex I of the ETC. O₂ consumption drops by 40% but does not stop. FADH₂ oxidation continues at normal rate. Analyse these observations: (a) which complexes are still active; (b) why O₂ consumption has not stopped completely; (c) what happens to NADH levels in the matrix; (d) what happens to ATP yield.",
                photosynthesis:      "Oxygen-18 (¹⁸O) labelled water is supplied to a plant. The evolved O₂ gas is found to contain ¹⁸O. CO₂ supplied does not contain ¹⁸O. Analyse what this isotope experiment tells us about the origin of photosynthetic O₂ and what it rules out.",
                cellCycle:           "Flow cytometry data show that a treated cell population has: 20% of cells in G1, 5% in S phase, 75% in G2/M. Untreated: 50% G1, 30% S, 20% G2/M. Analyse: (a) at which checkpoint has the drug caused arrest; (b) name two possible molecular targets that would produce this pattern; (c) predict the DNA content per cell in the accumulated population.",
                membraneTransport:   "Carrier protein X transports glucose across a membrane. At low glucose concentrations, transport rate increases linearly with concentration. At high concentrations, rate plateaus. Adding a structural analogue of glucose reduces the maximum transport rate but does not change the glucose concentration at half-maximum rate. Analyse: (a) what type of inhibition is this; (b) what does the plateau indicate; (c) how does this resemble enzyme kinetics."
            }
        },

        evaluate: {
            description: "Make justified judgements about claims, experimental designs, or conclusions — identifying errors, assessing methods, and defending positions using biological criteria.",
            cognitiveDemand: "Judgement with justification. The student identifies a flaw, states the criterion by which it fails, and states what would be correct. Simply identifying an error without explaining why it is wrong is not evaluate-level.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Defend", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a standard against which something is measured. 'A student claims fermentation produces ATP directly — evaluate this' requires: stating the claim is incorrect (judgement); explaining that fermentation only regenerates NAD⁺ with no substrate-level phosphorylation (criterion); correcting by stating ATP comes from glycolysis alone (correction).",
            examples: {
                cellularRespiration: "A textbook states the ATP yield from one glucose molecule is exactly 38. Evaluate this figure — identify why modern biochemists revise it to ~30–32, explain the assumptions the original figure made, and state which of those assumptions is now known to be inaccurate.",
                photosynthesis:      "Evaluate the experimental design: a student measures photosynthesis by counting O₂ bubbles from Elodea at different temperatures (10°C, 20°C, 30°C, 40°C) with no control for CO₂ concentration or light intensity. Identify all confounding variables, assess whether the student's conclusions about temperature effects are valid, and describe what controls should be added.",
                cellCycle:           "A researcher claims that because a drug increases p21 levels in cancer cells, it must be activating p53. Evaluate this reasoning — identify any alternative explanations for elevated p21, and state what additional experiment would be needed to confirm p53 activation specifically.",
                membraneTransport:   "Evaluate the statement: 'Simple diffusion is always faster than facilitated diffusion because it does not require a protein.' Identify under what conditions each statement is true or false, and explain the molecular reason for any cases where the statement is incorrect."
            }
        },

        create: {
            description: "Design experiments, construct integrated pathway diagrams, formulate hypotheses, or derive predictions by synthesising multiple concepts into an original coherent output.",
            cognitiveDemand: "Synthesis and original production. The student produces an output that requires combining multiple lesson concepts. It cannot be answered by reproducing any single memorised item.",
            verbs: ["Design", "Construct", "Propose", "Formulate", "Derive", "Plan", "Develop"],
            whatDistinguishesThisLevel: "Create requires an original, internally consistent output. 'Design an experiment to determine whether a drug disrupts the ETC or the Calvin cycle' requires the student to specify organism, treatment, measurements, controls, and expected results for each hypothesis — this is genuinely creative synthesis.",
            examples: {
                cellularRespiration: "Design an experiment using isolated mitochondria to determine whether a novel compound acts as an ETC inhibitor or an uncoupler. Specify: (a) what measurements you would take (O₂ consumption, membrane potential, ATP production); (b) what controls you would include; (c) what pattern of results would distinguish an ETC inhibitor from an uncoupler; (d) how you would determine which specific complex is inhibited.",
                photosynthesis:      "Construct a fully annotated diagram integrating the light-dependent reactions and the Calvin cycle, showing: (a) the flow of electrons from water to NADPH; (b) where ATP is produced and consumed; (c) where CO₂ enters and where glucose carbons exit; (d) the connection between the two stages via ATP and NADPH. Label every arrow with the molecule being transferred.",
                cellCycle:           "Formulate a strategy for a targeted cancer therapy directed at a tumour that overexpresses CDK4 and has lost one copy of the Rb gene. Your strategy must: (a) identify the specific molecular target; (b) predict the mechanism of the drug; (c) predict its effect on the G1-to-S transition; (d) identify a likely resistance mechanism and propose how to counter it.",
                membraneTransport:   "Design a complete experiment to determine the Km and Vmax of SGLT1 (the Na⁺-glucose cotransporter) in intestinal brush border membrane vesicles. Connect your design explicitly to enzyme kinetics methodology: specify substrate concentration range, measurement method, transformation of data, and how you would distinguish saturable carrier-mediated transport from non-saturable simple diffusion."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Knows that mitochondria produce ATP and chloroplasts do photosynthesis, but cannot name the stages or locations within each organelle",
                "Confuses glycolysis location (cytoplasm) with the Krebs cycle (mitochondrial matrix)",
                "Thinks fermentation produces ATP directly, not recognising it only regenerates NAD⁺",
                "Cannot name the phases of the cell cycle in order; confuses mitosis with the cell cycle as a whole",
                "Knows osmosis moves water but cannot predict whether a cell swells or shrinks in a given solution",
                "Confuses active and passive transport; cannot explain why active transport requires energy"
            ],
            immediateNextSteps: [
                "Draw a cell with mitochondrion and chloroplast. Inside each, label the specific compartments (matrix, inner membrane, thylakoid, stroma) before touching any equation. Do not proceed to ATP yields until compartments are automatic.",
                "Build a four-box table for respiration stages: columns = stage name, location, inputs, outputs. Fill glycolysis first. Verify: cytoplasm, glucose → pyruvate + 2 ATP + 2 NADH. Then add pyruvate decarboxylation, Krebs, and oxidative phosphorylation one row at a time.",
                "Fermentation: draw the glycolysis pathway ending at pyruvate. Draw an arrow from NADH → NAD⁺ labelled 'fermentation.' Draw the same arrow back to glycolysis to show that NAD⁺ allows glycolysis to continue. Never describe fermentation as ATP-producing — annotate the diagram explicitly: 'fermentation = NAD⁺ recycling only.'",
                "Cell cycle: draw a circle divided into G1, S, G2, M. Write next to each: what is the cell doing? What is the DNA content? Practise drawing this from memory until all four phases and their descriptions are automatic.",
                "Osmosis: use the rule 'water moves to where there is MORE solute (LESS water).' For every osmosis question, first identify which side has more solute. Then draw an arrow for water movement. Then predict cell volume change. Do not memorise outcomes directly — always derive from the rule."
            ],
            misconceptionsToAddress: [
                "Fermentation produces ATP → draw the fermentation diagram showing only NAD⁺ recycling",
                "Mitosis = cell cycle → draw the full four-phase cycle showing mitosis as only one of four phases",
                "Osmosis = solute movement → emphasise water movement; redraw the definition diagram"
            ]
        },

        developing: {
            characteristics: [
                "Can correctly identify the four stages of respiration and their locations",
                "Understands that the ETC produces most ATP but cannot explain how the proton gradient is established or used",
                "Knows that the Calvin cycle uses ATP and NADPH but confuses which step uses each",
                "Can correctly sequence the cell cycle phases but struggles to explain checkpoint molecular mechanisms",
                "Correctly predicts osmotic swelling/shrinking but cannot explain tonicity in clinical contexts",
                "Knows active transport requires ATP but cannot distinguish primary from secondary active transport"
            ],
            immediateNextSteps: [
                "For the proton gradient: draw the inner mitochondrial membrane with Complexes I, III, and IV on one side and ATP synthase separately. Draw arrows showing H⁺ being pumped into the intermembrane space by each complex. Draw a larger arrow showing H⁺ flowing back through ATP synthase. Label: 'electrochemical gradient drives ATP synthesis.' Do not describe chemiosmosis without first drawing this diagram.",
                "For the Calvin cycle steps: use the acronym FRR — Fix (CO₂ + RuBP → 3PG by RuBisCO), Reduce (3PG → G3P using ATP and NADPH), Regenerate (G3P → RuBP using ATP). Write which molecule (ATP, NADPH, or both) is consumed at each step — this is the most common confusion point.",
                "For cell cycle checkpoints: build a three-row table — checkpoint name, phase, what is being checked, molecular enforcer (p53/p21 for G1, Wee1/CDK1 for G2, MCC/APC-C for SAC). Do not memorise the table as a list — be able to reconstruct it from the question 'what would go wrong if this checkpoint failed?'",
                "For primary vs secondary active transport: primary = ATP directly hydrolysed (Na⁺/K⁺ pump example). Secondary = uses gradient created by primary transport (SGLT1 uses the Na⁺ gradient). The key test: does the protein itself have ATPase activity? If yes → primary. If no, but uses an ion gradient → secondary."
            ],
            misconceptionsToAddress: [
                "ETC directly makes ATP → draw the two separate steps: pumping H⁺ (ETC) then using H⁺ flow (ATP synthase)",
                "Calvin cycle uses only NADPH → FRR table showing ATP use at Fix and Regenerate steps",
                "All active transport uses ATP directly → primary vs secondary active transport distinction"
            ]
        },

        proficient: {
            characteristics: [
                "Correctly calculates ATP yield per glucose using modern estimates, accounting for each electron carrier",
                "Explains chemiosmosis mechanistically in both mitochondria and chloroplasts, including the direction of H⁺ movement in each organelle",
                "Describes the molecular mechanism of cell cycle checkpoints including cyclin-CDK complexes, Rb, E2F, and p53-p21",
                "Distinguishes all transport mechanisms (simple diffusion, facilitated diffusion, primary active, secondary active, vesicular) and gives accurate examples of each",
                "Connects photosynthesis and respiration as complementary processes with shared structural logic"
            ],
            immediateNextSteps: [
                "Calculate ATP yield accounting for the P/O ratio: NADH from glycolysis (cytoplasmic) must cross the inner mitochondrial membrane — the shuttle mechanism used (malate-aspartate vs glycerol-3-phosphate) affects ATP yield. Research both shuttles and calculate the difference in total ATP yield they produce.",
                "Connect electron transport chain inhibitors to ATP yield: for each of the following (rotenone = Complex I inhibitor; antimycin A = Complex III; oligomycin = ATP synthase; DNP = uncoupler), predict the effect on H⁺ gradient, O₂ consumption, and ATP production. Construct a 4×3 prediction table before looking up answers.",
                "Extend the cell cycle to cancer: for five specific oncogenes or tumour suppressors (Ras, Myc, p53, Rb, HER2), describe the normal function, the cancer mutation, and what cell cycle event is dysregulated. Connect each to a specific phase or checkpoint.",
                "Derive the water potential equation Ψ = Ψₛ + Ψₚ: explain what each term means physically, calculate Ψ for a plant cell with known solute concentration and turgor pressure, and predict in which direction water will move between two cells with different Ψ values."
            ],
            misconceptionsToAddress: [
                "NADH from glycolysis and the matrix have identical ATP yield → NADH shuttle difference explanation",
                "All six ETC electrons come from NADH → FADH₂ entry at Complex II bypass of Complex I"
            ]
        },

        expert: {
            characteristics: [
                "Derives the theoretical ATP yield from first principles using P/O ratios and proton stoichiometry",
                "Analyses regulation of both respiration and photosynthesis at the enzyme level (PFK allosteric control; RuBisCO activation by RuBisCO activase)",
                "Connects cell cycle regulation to signal transduction cascades (growth factor receptors → Ras → MAPK → cyclin D expression)",
                "Evaluates clinical applications of membrane transport principles (ORT, diuretic drugs, channelopathies)",
                "Critiques experimental designs in primary literature on cellular processes"
            ],
            immediateNextSteps: [
                "Derive the maximum theoretical ATP yield from glucose using the proton stoichiometry of each complex: Complex I pumps 4 H⁺/NADH; Complex III pumps 4 H⁺/2e⁻; Complex IV pumps 2 H⁺/2e⁻; ATP synthase requires ~2.7 H⁺/ATP. Calculate from first principles and compare to the empirical estimate of 30–32 ATP.",
                "Investigate metabolic flux analysis: research how ¹³C-labelled glucose is used to map carbon flow through glycolysis and the Krebs cycle in living cells — this is the experimental foundation of understanding metabolic control.",
                "Analyse a primary research paper on a cell cycle checkpoint inhibitor drug (e.g. palbociclib CDK4/6 inhibitor clinical trial data): assess the mechanism, patient selection criteria (which tumour types), resistance mechanisms observed, and how the biology predicts the clinical outcomes.",
                "Model the Calvin cycle stoichiometry: derive how many turns of the cycle are needed to produce one glucose (6 turns), account for every ATP and NADPH consumed, and verify that the equation 6CO₂ + 18 ATP + 12 NADPH → glucose is internally consistent."
            ],
            misconceptionsToAddress: [
                "Theoretical ATP yield is achievable in vivo → discuss proton leakage, shuttle costs, and the actual measured P/O ratio in intact mitochondria"
            ]
        }
    }
},


cellularMolecules: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about cellular molecules from memory without requiring understanding of why they are true. The student reproduces definitions, names, and classifications accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. The student must correctly name monomers, polymers, bond types, and structural features without needing to explain their significance.",
            verbs: ["State", "Name", "List", "Identify", "Define", "Label", "Write"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'Cellulose is made of β-glucose monomers joined by β-1,4-glycosidic bonds' is remember-level. Adding 'which means humans cannot digest it because amylase only cleaves α-linkages' crosses into understand.",
            examples: {
                macromoleculeBasics: "Name the four classes of biological macromolecule. State the monomer of each class and the bond that joins monomers.",
                carbohydrates:       "List the three polysaccharides covered in this lesson. For each, state the monomer, bond type, and one function.",
                lipids:              "State the three components of a phospholipid. Define the terms saturated and unsaturated as applied to fatty acids.",
                proteins:            "Name the four levels of protein structure. For each, state the bond type or interaction that stabilises it.",
                nucleicAcids:        "State the three components of a nucleotide. Write the complementary base pairing rules for DNA."
            }
        },

        understand: {
            description: "Explain the meaning behind facts — connect chemical structure to biological function, and interpret why a structural feature produces a particular property. The student must demonstrate they know WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. A correct explanation that the student could not have produced by memorising a question-answer pair demonstrates understanding. The student must supply the causal link between structure and function.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Compare"],
            whatDistinguishesThisLevel: "Understand goes beyond remember by requiring mechanism. 'Cellulose cannot be digested by humans' is remember. 'Cellulose cannot be digested by humans because amylase is specific for α-glycosidic bonds, whereas cellulose contains β-1,4 bonds — a different geometric configuration that the enzyme active site cannot accommodate' is understand. The causal mechanism must be explicit.",
            examples: {
                macromoleculeBasics: "Explain why condensation is necessary for polymer synthesis, and why hydrolysis is the reverse reaction. Your answer must identify what is released and consumed in each reaction, and why energy input is required for condensation.",
                carbohydrates:       "Explain why starch and cellulose have radically different physical properties and digestibility, despite both being composed of glucose monomers. Your answer must reference α vs β isomerism and its structural consequences.",
                lipids:              "Explain why phospholipids spontaneously form bilayers in aqueous solution. Your answer must use the terms hydrophilic, hydrophobic, and amphipathic, and explain the thermodynamic driving force.",
                proteins:            "Explain why a mutation that substitutes a hydrophilic amino acid in the protein interior with a hydrophobic one is likely to disrupt tertiary structure. Your answer must reference the forces stabilising tertiary structure and what happens to those forces with this substitution.",
                nucleicAcids:        "Explain why DNA is more chemically stable than RNA, referencing at least two structural differences at the molecular level."
            }
        },

        apply: {
            description: "Use known rules, structural features, and concepts to solve a problem that has not been seen before in exactly this form. The student selects the right concept and applies it correctly in a new context.",
            cognitiveDemand: "Procedure execution in a novel situation. The student must identify which concept is relevant, set it up correctly, and produce a specific output — a prediction, a classification, a diagram annotation, or a calculation.",
            verbs: ["Calculate", "Predict", "Classify", "Determine", "Sketch", "Apply", "Identify"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Predict the effect of replacing all unsaturated fatty acids in a membrane with saturated fatty acids on membrane fluidity at 37°C' requires applying the relationship between saturation and packing without being told the answer — this is apply, not understand.",
            examples: {
                macromoleculeBasics: "A dipeptide is formed from serine and lysine. Identify the bond formed, state what is released, and sketch the dipeptide showing both R-groups. Label the N-terminus and C-terminus.",
                carbohydrates:       "Predict the physical state (solid or liquid), digestibility by human amylase (yes or no), and energy storage function (yes or no) of: (a) a polysaccharide made of α-glucose, α-1,4 bonds, no branching; (b) a polysaccharide made of β-glucose, β-1,4 bonds; (c) a polysaccharide made of α-glucose, α-1,4 and α-1,6 bonds, highly branched.",
                lipids:              "Given a fatty acid chain C₁₈:2 (18 carbons, 2 double bonds), predict: (a) whether it is saturated or unsaturated; (b) its physical state at room temperature; (c) its effect on membrane fluidity when incorporated into a phospholipid bilayer. Justify each prediction.",
                proteins:            "An enzyme has a cysteine residue at position 14 and another at position 87. Apply your knowledge of tertiary structure to predict what bond will form between these residues, where in the protein this bond is likely to be located (interior or surface), and what effect breaking this bond would have on enzyme function.",
                nucleicAcids:        "A single-stranded DNA template reads 3'-ATCGGATCCA-5'. Write the complementary strand in the correct orientation, label both 5' and 3' ends, and identify all base pairs."
            }
        },

        analyze: {
            description: "Break down experimental data or a complex scenario into components, identify patterns and relationships, and draw conclusions from evidence. The student derives an interpretation that was not given to them.",
            cognitiveDemand: "Decomposition and inference from evidence. The student is given data or an observation and must determine what it reveals about molecular structure or function. A key marker: the conclusion was not provided — the student must derive it.",
            verbs: ["Identify", "Determine", "Deduce", "Analyse", "Distinguish", "Interpret", "Classify"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. Given an unknown polymer that: contains nitrogen, is hydrolysed by proteases, is composed of 20 different monomer types, and forms an α-helix — the student must identify it as a protein and justify using each piece of evidence. This requires integrating multiple properties, not just applying one rule.",
            examples: {
                macromoleculeBasics: "An unknown biological molecule is hydrolysed by lipase and yields glycerol and three fatty acids. A second unknown is hydrolysed by amylase and yields only glucose. A third is hydrolysed by a protease and yields amino acids of 12 different types. Identify each macromolecule class, state the bond that was cleaved in each case, and deduce whether each could be a structural or energy-storage molecule.",
                carbohydrates:       "Two polysaccharide samples are tested: sample A stains blue-black with iodine and is hydrolysed by amylase; sample B does not stain with iodine and is not hydrolysed by amylase, but forms rigid fibres when dried. Analyse the likely identity, bond type, and biological role of each sample, justifying each conclusion from the evidence.",
                lipids:              "A researcher measures the melting point of three lipid samples: A melts at 63°C; B melts at −9°C; C has no single melting point but forms a bilayer in water. Analyse the likely chemical nature of each sample (degree of saturation, structure type), justifying from the melting point and water behaviour data.",
                proteins:            "A protein is denatured by heat. Analysis shows: its primary structure is intact; it no longer binds its substrate; it aggregates in solution; it cannot be renatured by cooling. Analyse which levels of structure have been disrupted, which forces have been broken, and explain why aggregation occurs during denaturation rather than return to the native conformation.",
                nucleicAcids:        "A double-stranded DNA molecule has 22% adenine. Determine the percentage of each of the four bases. Then calculate the G+C content and predict whether this molecule would require a higher or lower denaturation temperature than a molecule with 30% adenine. Show all reasoning."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the accuracy of a structural assignment, or the quality of an experimental conclusion. The student must identify an error, explain the criterion by which it fails, and provide the correct answer.",
            cognitiveDemand: "Judgement with justification. The student must say why something is wrong, not just that it is wrong, and state what would be correct. Simply providing the correct information without engaging with the original claim is understand-level, not evaluate.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Verify", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a criterion. 'A student claims denaturation destroys the primary structure of a protein — evaluate this.' The student must state the claim is incorrect (judgement), explain that denaturation disrupts only secondary, tertiary, and quaternary structure by breaking non-covalent bonds and disulphide bonds, while the peptide bonds of the primary structure remain intact (criterion), and state what would actually be needed to destroy primary structure (extreme hydrolysis). Simply restating the definition of denaturation is understand-level.",
            examples: {
                macromoleculeBasics: "A student claims: 'Lipids are polymers like carbohydrates and proteins — they are just made of different monomers.' Evaluate this claim fully: identify the error, explain why lipids do not fit the polymer definition, and state what structural classification lipids do belong to.",
                carbohydrates:       "A student states: 'Glycogen and cellulose are both made of glucose, so they must have similar digestibility and function.' Evaluate this claim, identifying the precise molecular difference between glycogen and cellulose that explains their completely different digestibility and function.",
                lipids:              "Evaluate the claim: 'Saturated fats are always solid and unsaturated fats are always liquid at room temperature.' Identify any exceptions or nuances, explain the molecular basis for the general trend, and state the conditions under which this generalisation fails.",
                proteins:            "A student states: 'Denaturation by high temperature destroys the protein completely, including its amino acid sequence.' Evaluate this claim precisely — identify which levels of protein structure are disrupted by heat, which are not, and explain why primary structure is resistant to thermal denaturation.",
                nucleicAcids:        "A student claims: 'RNA and DNA contain the same bases, so they store genetic information equally well.' Evaluate this claim by identifying the base difference between RNA and DNA, explaining how this difference relates to the chemical stability of each molecule, and stating why DNA is the preferred long-term genetic storage molecule."
            }
        },

        create: {
            description: "Generate something new: an experimental design, a mechanistic model, a comparative diagram, or a novel application. The student integrates multiple concepts from the lesson into a coherent, original output that addresses a specific goal.",
            cognitiveDemand: "Synthesis and original production. The student produces an output that did not exist before and that requires combining multiple concepts. A strong create-level response is internally consistent, scientifically plausible, and fully addresses the brief.",
            verbs: ["Design", "Propose", "Construct", "Formulate", "Develop", "Plan", "Derive"],
            whatDistinguishesThisLevel: "Create requires original output, not retrieval. 'Design an experiment to determine whether an unknown polymer is a protein or a polysaccharide' requires specifying reagents (Biuret, Benedict's, iodine), expected results for each macromolecule class, controls, and how to interpret ambiguous results — integrating structural knowledge, experimental technique, and data interpretation into an original plan.",
            examples: {
                macromoleculeBasics: "Design a five-test biochemical identification scheme that could distinguish between a sample containing: (a) starch, (b) a reducing sugar, (c) a protein, (d) a lipid, (e) DNA. For each test, specify reagent, expected positive result, expected negative result, and which macromolecule class(es) each test is specific for.",
                carbohydrates:       "Formulate a hypothesis and experimental design to determine whether a newly discovered plant polysaccharide is more similar to starch or cellulose. Include: the structural tests you would perform (chemical and physical), the enzymatic tests you would perform, the expected results for each possibility, and how you would interpret ambiguous results.",
                lipids:              "Propose a lipid modification strategy for an organism engineered to survive in Arctic conditions (−5°C). Specify: (a) what changes to membrane phospholipid fatty acid composition you would make and why; (b) what changes to membrane cholesterol content you would make and why; (c) how you would verify that membrane fluidity is maintained at −5°C; (d) any trade-offs your modifications might introduce at warmer temperatures.",
                proteins:            "Design an experiment to determine whether the function of a newly discovered protein depends on its tertiary structure alone or also requires its quaternary structure. Your design must specify: (a) how you would dissociate quaternary structure without disrupting tertiary structure; (b) how you would measure protein function before and after dissociation; (c) appropriate controls; (d) how you would interpret each possible result.",
                nucleicAcids:        "Construct a fully annotated diagram of a DNA double helix showing: (a) the chemical structure of one complete nucleotide on each strand; (b) base pairing with H-bond numbers; (c) the antiparallel orientation with 5' and 3' ends labelled; (d) the phosphodiester backbone; (e) which strand would serve as the template for RNA synthesis during transcription, and in which direction RNA polymerase would move."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the four macromolecule classes but confuses which monomer belongs to which class",
                "Cannot distinguish condensation from hydrolysis without a reference",
                "Treats all polysaccharides as equivalent — does not differentiate starch from cellulose from glycogen",
                "Describes lipids as 'polymers made of fatty acids' — does not recognise that lipids are not true polymers",
                "Cannot name the four levels of protein structure; confuses secondary and tertiary structure",
                "Can state base pairing rules (A-T, G-C) but cannot explain why antiparallel orientation is required"
            ],
            immediateNextSteps: [
                "Build a one-page master table: macromolecule class | monomer | bond type | polymer example | function. Fill every cell from scratch without references. Repeat until automatic.",
                "Draw the condensation and hydrolysis reactions side by side using generic monomers. Annotate: condensation releases H₂O, requires energy; hydrolysis consumes H₂O, releases energy. Do not proceed to specific macromolecule chemistry until this is fluent.",
                "For lipids: write and underline 'Lipids are NOT polymers' before every lipids question. Draw a triglyceride and a phospholipid side by side — annotate that neither has a repeating monomer unit joined by a uniform bond type.",
                "For protein structure: use the mnemonic 'People Should Try Coffee' — Primary, Secondary, Tertiary, Quaternary. For each, draw a simple sketch (sequence of letters → helix/sheet → 3D blob → two blobs touching) and annotate the bond type for each level.",
                "For base pairing: write A=T (2 lines = 2 H-bonds) and G≡C (3 lines = 3 H-bonds) on every DNA question. Connect the H-bond number to GC content and melting temperature before moving to antiparallel orientation."
            ],
            misconceptionsToAddress: [
                "Lipids as polymers → draw triglyceride and annotate that three fatty acids + one glycerol ≠ repeating monomer unit",
                "All polysaccharides are equivalent → α vs β comparison table before any polysaccharide question",
                "Denaturation destroys the whole protein → draw denaturation as unwinding of coil with the amino acid chain still intact"
            ]
        },

        developing: {
            characteristics: [
                "Correctly names monomers and bond types for all four macromolecule classes",
                "Distinguishes starch from cellulose by bond type and digestibility but cannot explain the molecular mechanism of enzyme specificity",
                "Understands that phospholipids form bilayers but cannot explain the thermodynamic driving force",
                "Can name all four protein structure levels but confuses which bonds stabilise tertiary vs secondary structure",
                "Knows DNA is double-stranded and RNA is single-stranded but cannot explain the structural reason for greater DNA stability",
                "Can apply Chargaff's rules to calculate base percentages but makes arithmetic errors under exam conditions"
            ],
            immediateNextSteps: [
                "For enzyme specificity and α vs β bonds: draw amylase active site as a specific shape complementary to α-glucose orientation at C1. Then draw β-glucose with the -OH in the opposite position. Show physically that the β-glucose C1 -OH cannot enter the active site — connect geometry to specificity.",
                "For phospholipid bilayer thermodynamics: explain using two scenarios — (a) hydrophobic tails exposed to water: unfavourable, increases entropy of water; (b) tails buried away from water: favourable, maximises water entropy. The bilayer forms because it minimises the energetic cost of exposing hydrophobic regions to water.",
                "For protein bond hierarchy: make a bond type table with five rows (peptide bond, disulphide bond, ionic bond, hydrogen bond, hydrophobic interaction) and four columns: bond strength, where it acts (which structural level), broken by (heat/pH/reducing agents), example. Complete every cell.",
                "For Chargaff's rules under time pressure: practise the rule as a two-step algorithm — step 1: A% = T%; G% = C%; step 2: A+T+G+C = 100%. Drill with five different starting percentages until the calculation takes under 30 seconds.",
                "For RNA vs DNA stability: focus on the 2'-OH mechanism. Draw ribose and deoxyribose side by side; circle the 2'-OH in ribose. Draw the arrow showing intramolecular attack on the phosphodiester bond. This is the primary chemical instability of RNA — understand it before memorising the comparison list."
            ],
            misconceptionsToAddress: [
                "Secondary structure bonds = tertiary structure bonds → bond hierarchy table (above)",
                "α vs β linkage as minor difference → active site geometry diagram (above)",
                "Bilayer formation as a 'preference' → thermodynamic explanation using entropy (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Accurately explains the relationship between α/β anomers and macroscopic polysaccharide properties",
                "Correctly predicts effects of fatty acid composition on membrane fluidity and melting point",
                "Can identify the four protein structure levels and the specific forces at each level, including distinguishing backbone H-bonds (secondary) from R-group H-bonds (tertiary)",
                "Can apply Chargaff's rules, calculate GC content, and connect GC content to melting temperature",
                "Can explain phospholipid bilayer formation using hydrophobic effect terminology",
                "Can compare starch, glycogen, and cellulose fully across monomer, bond, branching, function, and digestibility"
            ],
            immediateNextSteps: [
                "Extend protein structure to cooperativity: study haemoglobin as a quaternary structure example. Explain why each subunit has a sigmoidal O₂ binding curve (cooperativity) and how the quaternary assembly produces this property from subunits that individually show hyperbolic binding.",
                "Explore glycoprotein and lipoprotein structure: investigate how carbohydrate chains are attached to proteins (N-glycosylation vs O-glycosylation) and how this affects protein folding, stability, and cell-surface recognition.",
                "Extend nucleic acid chemistry to DNA replication: connect complementary base pairing and antiparallel structure to the mechanism of DNA polymerase — specifically why it can only synthesise in the 5'→3' direction and the consequences for lagging strand synthesis.",
                "Calculate melting temperature (Tm) from first principles using the approximation 4°C per GC pair + 2°C per AT pair for a short oligonucleotide. Apply to primer design in PCR.",
                "Investigate post-translational modifications: phosphorylation, glycosylation, ubiquitination — how do these modifications alter protein function without changing primary structure? Connect to enzyme regulation content."
            ],
            misconceptionsToAddress: [
                "Secondary structure H-bonds are between backbone atoms, not R-groups — confirm by drawing an α-helix with H-bond donors and acceptors explicitly labelled on the backbone C=O and N-H",
                "Vmax as enzyme-only property → derive from Vmax = kcat × [E]total to show enzyme concentration dependence (cross-reference with enzymes lesson)"
            ]
        },

        expert: {
            characteristics: [
                "Can derive structural properties of novel polysaccharides from monomer identity and linkage type alone",
                "Can predict the consequences of specific amino acid substitutions on protein stability and function at the level of individual bond disruption",
                "Can connect lipid bilayer physics (fluidity, permeability) to membrane protein function and drug delivery design",
                "Can design nucleic acid hybridisation experiments (PCR, Southern blot, FISH) from first principles of base pairing thermodynamics",
                "Can critically evaluate experimental data identifying macromolecule type, structure, or modification"
            ],
            immediateNextSteps: [
                "Study the thermodynamics of protein folding: Gibbs free energy (ΔG = ΔH − TΔS), the balance between enthalpic stabilisation (bonds formed) and entropic cost (ordering of chain). Understand why proteins occupy a narrow energy minimum — only marginally stable relative to the unfolded state.",
                "Investigate the RNA world hypothesis: if RNA can be both an information carrier and a catalyst (ribozymes), what does this imply for the origin of life? Evaluate the evidence for RNA as the ancestral molecule preceding DNA.",
                "Critically analyse a published mutagenesis study: a paper mutates specific residues in a protein and measures the effect on stability (melting temperature) and activity. Predict the effect of each mutation from first principles before reading the results, then evaluate where your predictions were correct or incorrect and why.",
                "Study glycan biochemistry at an advanced level: investigate how the branching pattern of glycans on cell-surface glycoproteins encodes cell-type identity and modulates immune recognition — connecting carbohydrate chemistry to immunology."
            ],
            misconceptionsToAddress: [
                "Proteins as uniquely stable → thermodynamic analysis shows proteins are only marginally stable; ΔG of folding is only ~20–40 kJ/mol — small enough that physiological conditions can unfold them",
                "DNA as passively stable → DNA is actively maintained by repair enzymes; without constant repair, spontaneous deamination, oxidation, and hydrolysis would rapidly corrupt the sequence"
            ]
        }
    }
},




cellStructure: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about cell structure from memory without requiring understanding of why they are true. The student reproduces definitions, lists features, and identifies structures without being expected to explain function or mechanism.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. A student who cannot do this cannot access any higher level of this topic.",
            verbs: ["State", "List", "Name", "Identify", "Define", "Label", "Write"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts with no causal explanation. 'Mitochondria have a double membrane' is remember-level. 'Mitochondria have a double membrane because the inner membrane is derived from the engulfed prokaryote, consistent with endosymbiotic theory' crosses into understand.",
            examples: {
                cellBasics:           "State the three principles of cell theory. List four structures found in prokaryotic cells that are also found in eukaryotic cells.",
                organelles:           "List five organelles found in a eukaryotic animal cell. For each, state its primary function in one sentence.",
                membrane:             "Name the two main classes of membrane protein. State two functions of glycoproteins on the outer leaflet.",
                prokaryoteEukaryote:  "List six structural differences between a prokaryotic and a eukaryotic cell.",
                transport:            "Name three types of passive transport and one type of active transport. For each, state whether ATP is required."
            }
        },

        understand: {
            description: "Explain the functional significance of cell structures — connect structure to function, explain why a feature exists, and interpret what a structural difference means biologically.",
            cognitiveDemand: "Causal and mechanistic explanation. The student must supply a reason, not merely a fact. Understanding requires the student to explain WHY, not just WHAT.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand goes beyond remember by requiring a mechanism. 'Plant cells have a cell wall' is remember. 'Plant cells have a cell wall because they lack the cytoskeletal contractile machinery to resist osmotic swelling — the rigid cellulose wall provides the structural support needed to prevent lysis under turgor pressure' is understand.",
            examples: {
                cellBasics:           "Explain why the surface area to volume ratio limits the maximum size of a metabolically active cell. Your answer must connect the geometry of cell size to the rate of nutrient supply and waste removal.",
                organelles:           "Explain why the inner mitochondrial membrane is folded into cristae. Connect the structural adaptation to the function of oxidative phosphorylation, specifying which proteins are embedded in the cristae.",
                membrane:             "Explain why phospholipids with unsaturated fatty acid tails maintain greater membrane fluidity than those with saturated tails. Your answer must describe what happens at the molecular level between adjacent phospholipid tails.",
                prokaryoteEukaryote:  "Explain why prokaryotic cells can survive and reproduce without a nucleus, whereas all eukaryotic cells require one. Your answer must address how gene expression occurs in each cell type.",
                transport:            "Explain the difference between primary and secondary active transport. Your answer must specify the energy source for each and give one specific transporter as an example of each."
            }
        },

        apply: {
            description: "Use known principles and relationships to solve a problem or make a prediction in a new context. The student selects the correct concept and applies it correctly to data or a scenario they have not seen before.",
            cognitiveDemand: "Procedure or principle execution in a novel situation. The student must decide which concept applies, set it up correctly, and produce a specific answer — a calculation, a prediction, or a labelled diagram.",
            verbs: ["Calculate", "Predict", "Sketch", "Determine", "Apply", "Use", "Classify"],
            whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. 'Calculate the SA:V ratio for a cell of radius 3 μm and predict what would happen to this ratio if the radius doubled' requires the student to apply the formula and interpret the result.",
            examples: {
                cellBasics:           "A spherical cell has a radius of 5 μm. Calculate its surface area, volume, and SA:V ratio. Then predict what would happen to the cell's ability to supply its cytoplasm if its radius increased to 20 μm. Show all working.",
                organelles:           "A researcher uses differential centrifugation on a liver homogenate. They spin at 600g, 10,000g, and 100,000g. For each spin, identify the organelle(s) in the pellet and in the supernatant. Justify each answer by referencing organelle size and density.",
                membrane:             "Predict how decreasing temperature from 37°C to 10°C would affect the membrane fluidity of a mammalian cell that lacks cholesterol. Compare this to a cell with normal cholesterol content. Apply the fluid mosaic model specifically.",
                prokaryoteEukaryote:  "A new antibiotic compound targets the peptidyl transferase centre of the large ribosomal subunit. Predict whether this compound would kill bacteria, harm human cells, or both. Classify the subunit size in each organism and justify your prediction.",
                transport:            "Glucose concentration in the intestinal lumen is 2 mM. Intracellular glucose in the absorptive epithelial cell is 5 mM. Determine which transport mechanism must be responsible for glucose uptake from the lumen into the cell. Justify your answer and name the specific transporter involved."
            }
        },

        analyze: {
            description: "Break down experimental evidence or a complex biological scenario, identify the pattern or discrepancy, and derive a conclusion from evidence. The student is not told what the answer is — they must arrive at it.",
            cognitiveDemand: "Decomposition and inference. The student receives data or an observation and must determine what it reveals. A strong analysis reaches a specific, justified conclusion from the evidence rather than a general or vague one.",
            verbs: ["Identify", "Deduce", "Determine", "Analyse", "Classify", "Distinguish", "Infer"],
            whatDistinguishesThisLevel: "Analyze moves from evidence to conclusion without being told the answer. 'An organelle has circular DNA, 70S ribosomes, and divides by binary fission. Identify the organelle and deduce its evolutionary origin' requires the student to link three independent lines of evidence to a specific conclusion (mitochondrion, endosymbiotic origin). This is different from apply, where the procedure is given.",
            examples: {
                cellBasics:           "An unknown organelle is isolated by centrifugation. Biochemical analysis shows: (a) it contains circular DNA; (b) its ribosomes are inhibited by chloramphenicol (a 50S prokaryotic subunit inhibitor); (c) it is surrounded by two membranes; (d) it divides independently of the host cell cycle. Identify the organelle, state the evolutionary theory that accounts for all four observations, and list the evidence in order of strongest to weakest in supporting that theory.",
                organelles:           "An electron micrograph shows a cell with abundant rough ER, a well-developed Golgi apparatus, numerous secretory vesicles near the plasma membrane, and very few lysosomes. Analyse what type of cell this most likely represents and justify your answer by connecting each structural feature to a functional requirement.",
                membrane:             "The Frye-Edidin experiment fused mouse and human cells and observed that species-specific membrane proteins mixed completely within 40 minutes at 37°C but failed to mix at 4°C. Analyse what this experiment demonstrates about the plasma membrane, and identify what the low-temperature result reveals about the mechanism of protein mixing.",
                prokaryoteEukaryote:  "A patient has a genetic condition causing non-functional nuclear pore complexes. Analyse the consequences of this defect for: (a) mRNA export; (b) protein import into the nucleus; (c) ribosome biogenesis. For each consequence, explain the mechanism by which nuclear pore dysfunction produces the effect.",
                transport:            "A cell biologist treats cells with ouabain (a Na⁺/K⁺-ATPase inhibitor). Over time they observe: (1) intracellular Na⁺ increases; (2) intracellular K⁺ decreases; (3) the cell swells. Analyse the sequence of events causally — explain why each observation follows from the previous one, connecting Na⁺/K⁺-ATPase function to osmotic balance."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the quality of an experimental design, or the adequacy of a model. The student identifies a flaw or limitation, states the criterion by which it fails, and explains what would be correct.",
            cognitiveDemand: "Judgement with justification against a criterion. Simply saying 'this is wrong' is not evaluate-level — the student must say why it is wrong and what is correct, with reference to underlying principles.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Appraise", "Defend"],
            whatDistinguishesThisLevel: "Evaluate requires engagement with a specific claim or design. 'Evaluate the lock-and-key model as a complete description of membrane receptor-ligand binding' requires the student to identify what it explains correctly, what it fails to predict, and what model provides a better account — not just to state that induced fit is 'better'.",
            examples: {
                cellBasics:           "A student claims: 'Larger cells are always more efficient than smaller cells because they contain more organelles.' Evaluate this claim precisely — identify the geometric constraint the student has ignored, explain what efficiency means in terms of nutrient supply, and state the conditions under which a larger cell size is and is not advantageous.",
                organelles:           "A biology textbook states: 'Ribosomes are organelles found on the surface of the rough ER.' Evaluate the accuracy of this statement. Identify two errors in the statement, correct each with precision, and explain what 'organelle' should mean in a rigorous definition.",
                membrane:             "Evaluate the fluid mosaic model as a complete description of membrane structure in 2026. Identify two aspects of membrane organisation that the original 1972 Singer-Nicolson model underemphasised or did not account for, explain what evidence revealed these limitations, and describe how the model has been refined.",
                prokaryoteEukaryote:  "A researcher claims: 'Since mitochondria have their own DNA and divide independently, they are essentially separate organisms living inside eukaryotic cells and should be classified as prokaryotes.' Evaluate this claim — identify which aspects of mitochondrial biology support it, which aspects refute it, and reach a reasoned conclusion about the appropriate classification of mitochondria.",
                transport:            "A student designs an experiment to demonstrate osmosis using potato cylinders placed in solutions of varying sucrose concentration. They claim: 'If the potato cylinders increase in mass, water entered by active transport.' Evaluate the experimental claim — identify the specific error in the student's interpretation of the mechanism, explain the correct mechanism, and state one modification to the experiment that would allow distinction between osmosis and active water transport."
            }
        },

        create: {
            description: "Generate an original output — an experimental design, a model, a diagram integrating multiple systems, or a novel hypothesis — that requires combining multiple cell biology concepts into a coherent, scientifically plausible product.",
            cognitiveDemand: "Synthesis and original production. The student produces something that did not exist before, requiring integration of multiple concepts. A strong create-level response is internally consistent, addresses the brief completely, and could not be produced by memorising a single worked example.",
            verbs: ["Design", "Propose", "Construct", "Develop", "Formulate", "Plan", "Derive"],
            whatDistinguishesThisLevel: "Create requires original output, not retrieval or calculation. 'Design an experiment to test whether a novel compound disrupts membrane integrity using three independent assays' requires the student to specify the assay principle, what positive and negative results would look like, what controls to include, and how results from the three assays would be interpreted together.",
            examples: {
                cellBasics:           "Design a cell fractionation protocol to isolate pure plasma membrane vesicles from a neuronal cell culture. Specify: (a) homogenisation conditions and why; (b) the centrifugation sequence with speeds and rationale; (c) a density gradient step and why it is needed; (d) two biochemical markers you would use to confirm plasma membrane identity and exclude contamination from ER or Golgi.",
                organelles:           "Construct a fully annotated diagram of the secretory pathway from a ribosome on the rough ER to exocytosis of a glycoprotein. At each step, annotate: (a) the organelle or vesicle involved; (b) the specific modification that occurs; (c) the molecular machinery responsible (e.g. coat proteins, SNAREs, signal sequences). Indicate where quality control checkpoints occur and what happens to misfolded proteins.",
                membrane:             "Propose an experimental strategy to determine whether a novel drug disrupts membrane fluidity, membrane protein function, or both. Your strategy must include at least three independent assays, specify what result would indicate each mechanism, and explain what controls are required to distinguish drug effects on lipid phase from effects on specific protein conformations.",
                prokaryoteEukaryote:  "Formulate a hypothesis explaining why eukaryotic cells evolved membrane-bound organelles, using the endosymbiotic theory and the SA:V ratio constraint as your starting framework. Your hypothesis must: (a) explain the selective pressure favouring compartmentalisation; (b) propose why the nucleus evolved before the endomembrane system or vice versa; (c) identify one prediction of your hypothesis that could be tested experimentally.",
                transport:            "Design a complete experiment to characterise the transport mechanism by which a newly identified compound X enters cells. Your design must determine: (a) whether transport is active or passive (specify the assay); (b) whether a protein carrier is involved (specify the assay); (c) whether the compound is transported by endocytosis (specify the assay); (d) what controls are included for each assay and what positive vs negative results would mean."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can reproduce a list of organelles and their one-line functions",
                "Knows that prokaryotes lack a nucleus but cannot specify other structural differences",
                "Confuses the cell wall with the plasma membrane",
                "Cannot explain why small cells are better at exchange — knows cells are small but cannot connect to SA:V",
                "Describes the membrane as 'made of fat' without distinguishing phospholipid bilayer structure",
                "Treats mitochondria and chloroplasts as identical except for their function"
            ],
            immediateNextSteps: [
                "Draw a complete prokaryotic cell and a complete eukaryotic animal cell side-by-side from a labelled reference — then cover the reference and redraw. Focus on what is present in one and absent in the other.",
                "For the cell wall / membrane confusion: use a physical analogy — the plasma membrane is a flexible rubber glove (selective, flexible); the cell wall is a rigid wooden box placed around it (structural, non-selective). Draw both around the same cell.",
                "For SA:V: do the calculation for two different-sized cubes (side 1 cm vs side 2 cm) before applying it to cells. Show that doubling side length quarters the SA:V ratio. Connect this to the idea that larger objects have less surface per unit of internal volume.",
                "For the phospholipid bilayer: draw one phospholipid with its head and two tails. Then draw two rows facing each other (heads out, tails in) to show the bilayer. Label hydrophilic and hydrophobic regions. Do not attempt membrane proteins until this structure is automatic.",
                "For mitochondria vs chloroplasts: draw both side by side with their distinctive internal structures — cristae for mitochondria, thylakoid grana for chloroplasts. Label what reaction occurs in each compartment."
            ],
            misconceptionsToAddress: [
                "Cell wall = plasma membrane → physical analogy (above)",
                "SA:V concept → cube calculation before cell application (above)",
                "Membrane = 'fat layer' → phospholipid drawing exercise (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can list seven or more structural differences between prokaryotes and eukaryotes",
                "Understands that organelles compartmentalise functions but cannot explain why compartmentalisation is necessary",
                "Can calculate SA:V for a cube but not a sphere; sometimes inverts the relationship (larger cell = higher SA:V)",
                "Understands the bilayer structure but cannot explain what 'fluid' means in the fluid mosaic model",
                "Can name endosymbiotic theory but cannot state more than one piece of evidence",
                "Confuses the cis and trans faces of the Golgi or reverses the direction of the secretory pathway"
            ],
            immediateNextSteps: [
                "For compartmentalisation logic: ask 'why can't all reactions happen in one compartment?' Introduce two incompatible reactions (e.g. lysosomal acid hydrolases at pH 4.8 vs cytoplasmic enzymes at pH 7.2) and explain that separate membrane-bound environments allow both to function simultaneously.",
                "For SA:V direction: derive the formula SA:V = 3/r for a sphere explicitly and observe that as r increases, 3/r decreases. Write: 'Bigger cell → bigger r → smaller SA:V → less surface per unit volume → slower exchange.' Write this sequence every time until automatic.",
                "For fluidity: explain lateral diffusion — phospholipids and proteins can slide sideways within one leaflet. Use the Frye-Edidin experiment (mouse/human cell fusion) as concrete evidence. Fluidity ≠ liquid water fluidity — it means lateral mobility within the membrane plane.",
                "For the Golgi: draw a series of four stacked cisternae. Label cis at the top ('receives from ER via vesicles') and trans at the bottom ('ships to plasma membrane or lysosomes'). Draw vesicles arriving at cis and departing from trans with arrows.",
                "For endosymbiotic evidence: list all five standard pieces of evidence (circular DNA, 70S ribosomes, binary fission, double membrane, antibiotic sensitivity). For each, write one sentence explaining what feature of bacteria it parallels."
            ],
            misconceptionsToAddress: [
                "SA:V direction inversion → derive 3/r formula and write the sequence above",
                "Fluid mosaic = liquid → Frye-Edidin lateral diffusion explanation",
                "Golgi direction → cis/trans diagram with explicit arrows"
            ]
        },

        proficient: {
            characteristics: [
                "Correctly calculates SA:V for spheres and cubes and interprets results in biological context",
                "Can trace the complete secretory pathway from ribosome synthesis to exocytosis with organelle names and modifications",
                "Explains the fluid mosaic model including the roles of cholesterol, integral proteins, and glycolipids",
                "States at least four pieces of evidence for endosymbiotic theory and links each to a bacterial characteristic",
                "Can identify organelle type from electron micrograph features (cristae, grana, nuclear pores, ribosome density)",
                "Correctly predicts the outcome of differential centrifugation experiments"
            ],
            immediateNextSteps: [
                "Extend secretory pathway knowledge to include quality control: research ERAD (ER-associated degradation) and the unfolded protein response. Understand what happens to misfolded proteins at the ER quality control checkpoint.",
                "Explore membrane microdomains: research lipid rafts and explain why cholesterol and sphingolipids form ordered phases within the otherwise fluid bilayer. Connect lipid raft disruption to impaired signalling.",
                "Calculate kcat/Km equivalents for transport: research GLUT1 kinetics (Km for glucose ~1 mM) and compare to Na⁺-glucose co-transporter (SGLT1, Km ~6 mM). Reason about which transporter is appropriate in which tissue context (red blood cells vs intestine).",
                "Extend endosymbiotic theory: research gene transfer from mitochondrial/chloroplast genomes to the nuclear genome over evolutionary time — understand why mitochondria have lost most genes to the nucleus and what the exceptions (those retained in mitochondrial DNA) have in common.",
                "Practise organelle identification from micrographs: use a published atlas of electron micrographs and identify 10 different cell types by their organelle complement — connect each cell's organelle profile to its function."
            ],
            misconceptionsToAddress: [
                "Secretory pathway completeness → add ER quality control checkpoint",
                "Membrane as uniform bilayer → introduce lipid raft microdomains"
            ]
        },

        expert: {
            characteristics: [
                "Can critically evaluate experimental evidence for cell structure conclusions (e.g. assess whether a micrograph artefact could explain an observation)",
                "Applies cell biology to disease mechanisms at the molecular level (e.g. explains exactly how a nuclear pore mutation disrupts mRNA export)",
                "Connects membrane transport kinetics to Michaelis-Menten analogy for transporters",
                "Evaluates claims about the fluid mosaic model against post-1972 evidence including lipid rafts and membrane asymmetry",
                "Can design multi-step experiments integrating cell fractionation, electron microscopy, and biochemical assays"
            ],
            immediateNextSteps: [
                "Research the SNARE hypothesis of vesicle fusion: understand how v-SNAREs on vesicles pair with t-SNAREs on target membranes to drive membrane fusion — this connects vesicular transport to a molecular mechanism.",
                "Critically read the original Frye-Edidin paper: evaluate whether the observed protein mixing rates are consistent with simple lateral diffusion or require active transport mechanisms. Assess the controls used.",
                "Investigate the mitochondrial unfolded protein response (UPRmt) as a parallel to the ER UPR: compare the two quality control systems and identify their shared logic despite different molecular machinery.",
                "Apply metabolic control analysis logic to the secretory pathway: identify which step (ER exit, Golgi processing, or plasma membrane fusion) is rate-limiting under different conditions, and predict the consequences of inhibiting each step."
            ],
            misconceptionsToAddress: [
                "Fluid mosaic as a complete model → evaluate against lipid raft and membrane asymmetry evidence",
                "Vesicle transport as passive process → SNARE mechanism for energy-dependent targeted fusion"
            ]
        }
    }
},



bioenergetics: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about bioenergetics from memory without requiring understanding of mechanism or reason. The student reproduces correct information accurately but is not yet expected to explain, connect, or use it.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No causal reasoning required. A student who cannot perform at this level cannot access any higher level — knowing the facts is the prerequisite for everything above.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts with no explanation. 'Glycolysis yields a net of 2 ATP per glucose' is remember-level. 'Glycolysis yields a net 2 ATP per glucose because the investment phase costs 2 ATP and the payoff phase produces 4...' crosses into understand.",
            examples: {
                thermodynamics:  "Define ΔG. State what a negative ΔG indicates about whether a reaction is spontaneous.",
                atp:             "State the net ATP yield of glycolysis, the TCA cycle (as GTP), and oxidative phosphorylation per glucose. List the products of ATP hydrolysis.",
                glycolysis:      "Name the location of glycolysis. List the net products of glycolysis per glucose molecule.",
                tcaCycle:        "Name the inputs and outputs of one turn of the citric acid cycle. State how many NADH, FADH₂, and GTP are produced per turn.",
                etc:             "Name the four complexes of the electron transport chain in order. Identify the terminal electron acceptor.",
                photosynthesis:  "Write the overall equation for photosynthesis. Name the two stages of photosynthesis and their locations in the chloroplast."
            }
        },

        understand: {
            description: "Explain the meaning behind facts — connect cause to effect, connect structure to function, and interpret what a result means in metabolic terms. The student demonstrates WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, connects, or explains with a mechanism or reason. A correct explanation the student could not produce by memorising a question-answer pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or reason. 'FADH₂ yields fewer ATP than NADH' is remember. 'FADH₂ yields fewer ATP than NADH because it donates electrons at Complex II, bypassing Complex I, so fewer protons are pumped and a smaller gradient is generated' is understand — the student has supplied the causal chain.",
            examples: {
                thermodynamics:  "Explain why ATP hydrolysis releases more free energy inside the cell (~−50 kJ/mol) than the standard value (ΔG°' = −30.5 kJ/mol), with reference to actual intracellular concentrations of ATP, ADP, and Pᵢ.",
                atp:             "Explain why the cell uses ATP as its energy currency rather than directly coupling exergonic reactions to endergonic ones. Your answer must reference the concept of energy coupling and modularity.",
                glycolysis:      "Explain why PFK-1 is considered the key regulatory step of glycolysis rather than hexokinase or pyruvate kinase. Your answer must reference the logic of pathway control at commitment points.",
                tcaCycle:        "Explain why the citric acid cycle is described as amphibolic. Your answer must identify at least two biosynthetic pathways that draw intermediates from the TCA cycle.",
                etc:             "Explain why FADH₂ yields fewer ATP than NADH, tracing the electron path from each carrier through specific complexes and connecting it to the number of protons pumped.",
                photosynthesis:  "Explain why the Calvin cycle is sometimes called the 'light-independent' rather than 'dark' reactions — and why 'dark reactions' is misleading as a descriptor of what happens at night."
            }
        },

        apply: {
            description: "Use known equations, rules, and concepts to solve a problem not seen before in exactly this form. The student selects the right tool and uses it correctly in a novel context.",
            cognitiveDemand: "Procedure execution in a novel situation. The student must decide which concept or equation applies, set it up correctly, and carry it through. A common failure is knowing the formula but applying it to the wrong scenario.",
            verbs: ["Calculate", "Determine", "Predict", "Sketch", "Apply", "Use", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a new problem, not a repeated worked example. 'Calculate the ΔG°' of electron transfer from NADH to O₂ given the reduction potentials' requires substituting into ΔG°' = −nFΔE°' with correct sign conventions — a specific procedure applied to a specific novel pair of values.",
            examples: {
                thermodynamics:  "Given E°'(NAD⁺/NADH) = −0.32 V and E°'(O₂/H₂O) = +0.82 V, calculate ΔG°' for the transfer of 2 electrons from NADH to O₂. Show all substitution steps and state what physical process this energy drives in the cell.",
                atp:             "A cell consumes 3 × 10⁸ molecules of ATP per second. Calculate how many glucose molecules must be oxidised per second to sustain this demand, assuming complete aerobic oxidation and a yield of 30 ATP per glucose. Show all steps.",
                glycolysis:      "Calculate the number of NADH molecules produced by glycolysis from 5 molecules of glucose. Show your reasoning. Then predict how many additional ATP could be generated by the ETC from this NADH, using the P/O ratio of 2.5.",
                tcaCycle:        "One turn of the TCA cycle produces 3 NADH, 1 FADH₂, and 1 GTP. Calculate the maximum ATP yield from one full turn of the cycle (one acetyl-CoA) using modern P/O ratios. Show all steps.",
                etc:             "Rotenone inhibits Complex I. Predict the effect on: (a) NADH reoxidation; (b) total ATP yield per glucose; (c) O₂ consumption rate. Quantify where possible.",
                photosynthesis:  "The Calvin cycle requires 3 ATP and 2 NADPH per CO₂ fixed. Calculate the total ATP and NADPH needed to synthesise one molecule of glucose (6 carbons). Show all steps."
            }
        },

        analyze: {
            description: "Break down experimental data or a complex scenario into its components, identify patterns and relationships, and draw conclusions from evidence. The student moves from data to interpretation without being told the answer.",
            cognitiveDemand: "Decomposition and inference from evidence. The student is given data or a scenario and must determine what it means — reaching conclusions that were not provided and justifying them from the evidence.",
            verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Distinguish", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion rather than applying a formula. 'Given that adding oligomycin (ATP synthase inhibitor) stops O₂ consumption even though the ETC is intact, what does this reveal about the coupling between electron transport and ATP synthesis?' — the student must deduce from the observation the mechanistic relationship.",
            examples: {
                thermodynamics:  "A reaction has ΔH = −100 kJ/mol and ΔS = −200 J/mol·K. Calculate ΔG at 37°C. Analyse whether the reaction is spontaneous and identify which thermodynamic term opposes spontaneity at this temperature.",
                atp:             "A cell treated with oligomycin (ATP synthase inhibitor) shows: O₂ consumption drops dramatically, proton gradient increases beyond normal, and ETC complexes I–IV are still functional. Analyse these three observations together and deduce what they reveal about the relationship between the proton gradient and electron transport rate.",
                glycolysis:      "A cell is given ¹⁴C-labelled glucose with the label at carbon 1. After one round of glycolysis, which carbon position(s) in pyruvate will carry the ¹⁴C label? Trace the carbon atoms through the ten steps of glycolysis to justify your answer.",
                tcaCycle:        "Isotope labelling: ¹⁴C-acetyl-CoA (labelled on both carbons) enters the TCA cycle. In which turn(s) of the cycle are labelled carbons released as CO₂? Trace the carbons through the cycle steps to justify your answer — students commonly assume labelled CO₂ appears in the first turn; analyse whether this is correct.",
                etc:             "Data are given for a mitochondrial preparation: NADH oxidation rate (high), O₂ consumption rate (low), proton gradient (low), ATP synthesis rate (low). Antimycin A has been added. Analyse which complex is inhibited, what accumulates upstream of the block, and what the consequences are for ATP synthesis.",
                photosynthesis:  "A plant is kept in the light and its CO₂ fixation is monitored as O₂ concentration in the atmosphere is varied from 0.1% to 40%. CO₂ fixation rate decreases as O₂ rises. Analyse what this demonstrates about RuBisCO's activity and identify what metabolic process is being stimulated at high O₂."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, accuracy, or quality of a claim, experimental design, or conclusion, applying criteria and weighing evidence.",
            cognitiveDemand: "Judgement with justification. The student identifies a flaw, limitation, or error; explains the criterion by which it fails; and states what would be correct or what evidence would be needed.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A textbook states that aerobic respiration of one glucose yields 36–38 ATP. Evaluate this claim.' The student must state the claim is outdated (judgement), explain why modern chemiosmotic accounting gives ~30–32 (criterion: P/O ratios, shuttle costs), and identify what the correct answer is and why it differs.",
            examples: {
                thermodynamics:  "A student states: 'Exergonic reactions always proceed spontaneously in cells.' Evaluate this claim — identify under what conditions it is correct, identify a counterexample where ΔG°' is negative but the reaction does not proceed, and explain what additional information is needed to determine actual spontaneity in a cell.",
                atp:             "Evaluate the statement: 'The standard free energy of ATP hydrolysis (−30.5 kJ/mol) is the relevant value for calculating how much work ATP can do inside a cell.' Identify the error, explain why intracellular conditions differ from standard conditions, and state what value should be used and why.",
                glycolysis:      "A student is asked why fermentation is 'wasteful' and responds: 'Fermentation wastes energy because it only produces 2 ATP per glucose instead of 30.' Evaluate this response — identify what is correct, what is imprecise or misleading, and what a more complete explanation would add about the purpose and metabolic logic of fermentation.",
                etc:             "Evaluate the traditional textbook claim that aerobic respiration of one glucose yields 36–38 ATP. Identify the specific assumptions that produced this number, explain what modern biochemical measurements show, and state the currently accepted yield with justification.",
                photosynthesis:  "A researcher claims: 'Increasing atmospheric CO₂ concentration will always increase photosynthesis and plant growth.' Evaluate this claim — identify conditions under which it is supported, conditions under which it fails (e.g. temperature, photorespiration, water availability, nutrient limitation), and state whether the claim is an oversimplification.",
                uncoupling:      "Evaluate whether UCP1-activating drugs would be a safe and effective strategy for obesity treatment. Assess: mechanism of thermogenesis, potential for benefit, risks (hyperthermia, narrow therapeutic window), and how it compares to other metabolic interventions."
            }
        },

        create: {
            description: "Generate something new: an experimental design, a metabolic model, a novel pathway diagram, a derived equation, or an original drug strategy. The student integrates multiple concepts into a coherent, original output.",
            cognitiveDemand: "Synthesis and original production. The student produces an output that did not exist before, requiring the assembly of multiple concepts from the lesson. A strong create-level response is internally consistent, scientifically plausible, and addresses the brief completely.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output, not retrieval or calculation. 'Design an experiment to determine whether a drug is an ETC inhibitor or an uncoupler' requires specifying measurements (O₂ consumption, proton gradient, ATP synthesis), controls, expected results for each drug type, and how to distinguish the two mechanisms. This cannot be answered by reproducing a memorised procedure.",
            examples: {
                thermodynamics:  "Derive the relationship ΔG°' = −nFΔE°' from first principles — starting from the definitions of electrical work and free energy. State what each symbol represents physically. Then apply it to calculate ΔG°' for the reaction NADH + ½O₂ → NAD⁺ + H₂O and explain what this value represents for the electron transport chain.",
                atp:             "Propose a novel mechanism by which a cell could synthesise ATP without an electron transport chain or substrate-level phosphorylation, using only thermodynamic principles (e.g. exploiting a large concentration gradient or a light-driven conformational change). Assess the feasibility of your proposal against what is known about ATP synthase's binding change mechanism.",
                glycolysis:      "Design an experiment to determine whether a new compound inhibits glycolysis at the level of hexokinase, PFK-1, or pyruvate kinase. Specify: (a) what metabolites you would measure; (b) what pattern of metabolite accumulation and depletion would distinguish each enzyme as the target; (c) what controls are needed; (d) how you would confirm the inhibition type is competitive vs non-competitive.",
                etc:             "Design an experiment to distinguish between an ETC inhibitor and a proton ionophore (uncoupler) using only measurements of: O₂ consumption, proton gradient (ΔpH), membrane potential (Δψ), and ATP synthesis rate. Specify expected results for each compound type in a structured 4×2 table and explain the mechanistic basis of each prediction.",
                photosynthesis:  "Construct a fully annotated energy diagram tracing the flow of energy from a photon absorbed by P680 through: water oxidation, the Z-scheme, proton pumping, ATP synthesis, NADPH production, and CO₂ fixation by RuBisCO — all the way to the chemical energy stored in G3P. For each energy transformation, indicate whether energy is stored, transferred, or dissipated as heat, and identify the molecule carrying the energy at each stage."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can state that ATP is the energy currency of the cell and that glucose is broken down to release energy",
                "Knows the word 'glycolysis' but cannot name products, location, or net yield reliably",
                "Confuses glycolysis, the TCA cycle, and oxidative phosphorylation as a single 'energy-releasing process'",
                "Cannot distinguish between substrate-level and oxidative phosphorylation",
                "Believes oxygen is used in glycolysis or the TCA cycle",
                "Treats photosynthesis and respiration as opposite processes but cannot connect them mechanistically"
            ],
            immediateNextSteps: [
                "Before any equations: draw a flow diagram with three boxes (Glycolysis → TCA Cycle → Oxidative Phosphorylation), labelling the location of each (cytoplasm, mitochondrial matrix, inner mitochondrial membrane) and the major output category of each (ATP+NADH / NADH+FADH₂+GTP / ATP). Master this map before adding any detail.",
                "Practise the single sentence: 'Oxygen is used only at Complex IV of the electron transport chain — not in glycolysis or the TCA cycle.' Write it at the top of every practice page until it requires no effort.",
                "Build the ATP yield summary from scratch: 2 (glycolysis) + 2 (TCA GTP) + ~26–28 (oxidative phosphorylation) = ~30–32. Connect each number to its stage before attempting to derive or explain it.",
                "For photosynthesis: draw two boxes — light reactions (thylakoid, produces ATP + NADPH + O₂) and Calvin cycle (stroma, uses ATP + NADPH, fixes CO₂). Master the location and currency of each before studying the internal steps.",
                "Use the analogy: NADH and FADH₂ are 'charged batteries' — they carry electrons to the ETC where the charge is used to pump protons and make ATP, after which they are 'flat' (NAD⁺, FAD) and must be recharged by oxidising more fuel."
            ],
            misconceptionsToAddress: [
                "O₂ used in TCA cycle → flow diagram showing O₂ entry only at Complex IV",
                "All ATP comes from TCA cycle → ATP yield table assigning numbers to each stage",
                "Photosynthesis and respiration are just opposites → mechanistic comparison diagram"
            ]
        },

        developing: {
            characteristics: [
                "Can name the products of glycolysis and state the net ATP yield",
                "Understands that NADH and FADH₂ carry electrons to the ETC but confuses which complex accepts which carrier",
                "Knows the proton gradient drives ATP synthesis but cannot explain the binding change mechanism",
                "Can distinguish competitive from non-competitive inhibition in enzyme contexts but cannot apply this logic to ETC inhibitors vs uncouplers",
                "Knows photosystems I and II exist but confuses their order in the Z-scheme and which produces O₂",
                "States ATP yield as 36–38 per glucose (from textbook) without knowing this is outdated"
            ],
            immediateNextSteps: [
                "For NADH vs FADH₂ entry point: draw the ETC as a horizontal line with four complexes. Mark NADH entering at Complex I (left), FADH₂ entering at Complex II (middle-left), and O₂ at Complex IV (right). Annotate: 'FADH₂ skips Complex I — fewer protons pumped — fewer ATP'. Draw this five times from memory.",
                "For the proton-motive force: simulate it physically — imagine a dam (inner membrane) with water (protons) building up on one side (intermembrane space). ATP synthase is the turbine through which water flows. Draw the dam with the turbine, label all compartments, and annotate the flow direction.",
                "For ATP yield: update your notes to ~30–32. Write: 'NADH × 2.5 ATP; FADH₂ × 1.5 ATP. 10 NADH = 25 ATP; 2 FADH₂ = 3 ATP; 4 substrate-level = 4 ATP. Total ≈ 32.' Practise the calculation until automatic.",
                "For the Z-scheme: write it as a narrative — 'PSII absorbs light, excites electrons, uses them to oxidise water (O₂ produced), passes excited electrons down to PSI, PSI absorbs more light, passes electrons to NADP⁺ reductase to make NADPH.' Draw the energy level diagram with PSII on the left, PSI on the right, and electrons flowing downhill then being re-energised.",
                "For ETC inhibitors vs uncouplers: create a two-column table — inhibitors stop electron flow (O₂ drops, gradient drops, ATP drops); uncouplers allow electron flow but collapse the gradient (O₂ consumption continues or increases, gradient collapses, ATP drops). The key distinction: O₂ consumption is a differentiator."
            ],
            misconceptionsToAddress: [
                "FADH₂ enters at Complex I → ETC diagram with entry points clearly marked",
                "36–38 ATP yield → modern P/O ratio recalculation exercise",
                "PSII produces O₂ from CO₂ → Z-scheme narrative and diagram"
            ]
        },

        proficient: {
            characteristics: [
                "Can trace electron flow from NADH through all four ETC complexes to O₂, accounting for proton pumping at each step",
                "Can calculate ATP yield per glucose from modern P/O ratios with correct accounting for shuttle costs",
                "Understands the binding change mechanism of ATP synthase at the level of the three β-subunit conformational states",
                "Can distinguish ETC inhibitors from uncouplers and predict the effect of each on O₂ consumption, proton gradient, and ATP synthesis",
                "Can trace the Z-scheme from H₂O oxidation through PSI to NADPH production",
                "Understands Calvin cycle stoichiometry and can calculate ATP and NADPH costs per glucose synthesised"
            ],
            immediateNextSteps: [
                "Calculate the precise ATP cost of different substrates: compare fatty acid β-oxidation vs glucose oxidation — calculate total ATP per carbon for palmitate (16C) vs glucose (6C), accounting for the activation cost and NADH/FADH₂ produced per round of β-oxidation.",
                "Investigate the malate-aspartate shuttle vs the glycerol-3-phosphate shuttle: understand why cytoplasmic NADH from glycolysis yields 2.5 ATP in tissues using the malate-aspartate shuttle but only 1.5 ATP in tissues using the glycerol-3-phosphate shuttle — and how this affects total ATP per glucose.",
                "Extend photosynthesis to photorespiration: calculate how much carbon is lost and ATP wasted per RuBisCO oxygenase event, and compare this to the C4 pump cost — assess under what O₂:CO₂ ratios C4 is energetically advantageous.",
                "Explore the chemiosmotic equation: PMF = Δψ − (2.303 RT/F) × ΔpH. Assign typical values (Δψ ≈ −180 mV, ΔpH ≈ 0.5–1 unit) and calculate the total PMF — then assess the relative contributions of the electrical and chemical components."
            ],
            misconceptionsToAddress: [
                "Assuming all cytoplasmic NADH yields 2.5 ATP → shuttle mechanism distinction",
                "Treating the proton gradient as purely chemical → PMF equation showing electrical and chemical components"
            ]
        },

        expert: {
            characteristics: [
                "Can derive ATP yield from first principles using P/O ratios, H⁺/ATP stoichiometry, and shuttle costs",
                "Can apply the chemiosmotic equation to calculate PMF from membrane potential and pH gradient measurements",
                "Analyses published mitochondrial respiration data (oxygen flux traces, respiratory control ratios) and draws mechanistic conclusions",
                "Connects ETC bioenergetics to pharmacokinetic parameters (IC₅₀ for ETC inhibitors, therapeutic dosing of uncouplers)",
                "Evaluates the evidence for and against the chemiosmotic hypothesis in its historical context (Mitchell's original 1961 proposal vs biochemical confirmation)"
            ],
            immediateNextSteps: [
                "Read Mitchell's original 1961 Nature paper proposing chemiosmosis — identify the experimental evidence available at the time vs what was assumed, and evaluate how the hypothesis was tested and confirmed over the subsequent decade.",
                "Analyse a Seahorse XF Analyser oxygen consumption trace: identify basal respiration, ATP-linked respiration (oligomycin effect), maximal respiration (FCCP effect), and non-mitochondrial respiration (rotenone/antimycin effect). Calculate the spare respiratory capacity and mitochondrial coupling efficiency from the raw data.",
                "Derive the thermodynamic efficiency of oxidative phosphorylation: ΔG for NADH → O₂ is approximately −220 kJ/mol; ΔG for 2.5 ATP synthesis is approximately +76 kJ/mol. Calculate the thermodynamic efficiency and compare to a petrol engine.",
                "Investigate flux control analysis for the ETC: read about metabolic control analysis and flux control coefficients — determine which ETC complex is rate-limiting under different physiological conditions and how this changes the optimal target for pharmacological intervention."
            ],
            misconceptionsToAddress: [
                "Treating ATP yield as fixed — understand that P/O ratio varies with conditions, membrane leakiness, and proton leak"
            ]
        }
    }
},

const EndSection3 = "close"