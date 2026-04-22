

initializeAssessmentRubrics() {
 



this.assessmentRubrics = {


probability: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored definitions, rules, and formulas about probability from memory without requiring explanation of why they are true. The student reproduces facts accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. A student who cannot yet do this cannot access any higher level.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)' is remember-level. Explaining why you subtract P(A ∩ B) crosses into understand.",
            examples: {
                basicProbability:        "State the formula for theoretical probability. Define sample space and event. Write the probability scale from impossible to certain with numerical values.",
                probabilityRules:        "Write the addition rule for (a) any two events and (b) mutually exclusive events. State what mutually exclusive means. Write the multiplication rule for independent events.",
                conditionalProbability:  "State the formula for conditional probability P(A|B). Write Bayes' theorem. Define what it means for two events to be independent in terms of conditional probability.",
                combinedEvents:          "List the five steps for constructing a tree diagram. State what the probabilities on all complete paths of a tree diagram must sum to."
            }
        },

        understand: {
            description: "Explain the meaning behind probability rules — connect formulas to the counting principles that justify them, and interpret calculated probabilities in context.",
            cognitiveDemand: "Translation and interpretation. The student explains WHY, not just WHAT. A correct explanation the student could not produce by memorising demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand goes beyond remember by requiring a mechanism. 'Mutually exclusive events cannot both occur' is remember. 'Mutually exclusive events have P(A ∩ B) = 0, so the addition rule simplifies because there are no outcomes to double-subtract' is understand.",
            examples: {
                basicProbability:        "Explain why the Law of Large Numbers guarantees that experimental probability approaches theoretical probability, and why a small number of trials (e.g. 10 coin flips) might give a result far from 0.5.",
                probabilityRules:        "Explain why the addition rule subtracts P(A ∩ B). Use a Venn diagram to illustrate which outcomes are being counted twice without this correction and why subtracting once fixes the count.",
                conditionalProbability:  "Explain why P(A|B) is generally different from P(B|A). Describe a real-world scenario where confusing the two leads to a serious error. Explain what it means for A and B to be independent in plain language and connect this to the formula P(B|A) = P(B).",
                combinedEvents:          "Explain why the probability on the second level of a tree diagram must be conditional on the first-level outcome rather than the marginal probability, using the idea of a reduced sample space."
            }
        },

        apply: {
            description: "Use known probability formulas, rules, and techniques to solve a problem not seen before in exactly this form. The student selects the correct tool and applies it accurately.",
            cognitiveDemand: "Procedure execution in a novel situation. The student decides which formula applies, sets it up correctly, and carries it through. Common failure: knowing the formula but using the wrong probability in the denominator of a conditional probability.",
            verbs: ["Calculate", "Find", "Determine", "Construct", "Complete", "Apply"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Calculate P(A ∪ B) given P(A) = 0.4, P(B) = 0.35, P(A ∩ B) = 0.15' requires executing the procedure for specific values. Merely stating the formula is understand, not apply.",
            examples: {
                basicProbability:        "A spinner has sections coloured red (3), blue (5), green (2). Find P(red), P(not green), and P(blue or red). If spun twice (independently), find P(both spins land on blue).",
                probabilityRules:        "From a two-way table of 200 people classified by gender and preference, calculate P(female), P(prefers option A), P(female and prefers A), P(female or prefers A), and test whether gender and preference are independent.",
                conditionalProbability:  "A bag contains 5 red and 3 blue balls. Two are drawn without replacement. Draw a tree diagram, label all branches with correct conditional probabilities, and find P(one of each colour).",
                combinedEvents:          "Three machines in a factory operate independently with reliabilities 0.90, 0.85, and 0.92. Find the probability that all three work, that at least two work, and that exactly one works."
            }
        },

        analyze: {
            description: "Decompose a probability scenario to identify the underlying structure — determine which rules apply, identify dependence or independence, derive probabilities from information presented indirectly.",
            cognitiveDemand: "Decomposition and inference. The student reaches a conclusion not given to them and justifies it from the evidence provided in the problem.",
            verbs: ["Determine", "Classify", "Deduce", "Analyse", "Identify", "Investigate", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2, determine whether A and B are independent and whether they are mutually exclusive' requires testing both conditions rather than applying a given formula directly.",
            examples: {
                basicProbability:        "A six-sided die is rolled 120 times. Each face appears between 17 and 23 times. Analyse whether the die is fair, justify your reasoning using the Law of Large Numbers, and determine how many rolls would be needed to be more confident in your conclusion.",
                probabilityRules:        "Given P(A) = 0.6, P(B) = 0.5, and P(A ∪ B) = 0.8: determine P(A ∩ B); determine whether A and B are mutually exclusive; determine whether A and B are independent. Justify each conclusion with a calculation.",
                conditionalProbability:  "A medical test gives a positive result for 90% of people who have a condition and 8% of people who do not. The condition affects 2% of the population. Analyse whether a positive test result should be considered strong evidence of the condition, calculating P(condition | positive test) and interpreting the result.",
                combinedEvents:          "A student claims that rolling two fair dice and getting a sum greater than 9 has probability 3/18. Analyse this claim: construct the full sample space, count the favourable outcomes, and determine whether the student is correct. If not, identify likely source of the error."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a probability claim, calculation, or reasoning chain. The student identifies what is wrong, states the criterion by which it fails, and produces the correct result.",
            cognitiveDemand: "Judgement with justification against a mathematical standard. Simply saying 'this is wrong' is not evaluate-level — the student must say why and correct it.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Justify", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement. 'A student says P(A or B) = P(A) + P(B) for all events — evaluate this.' The student must identify the claim as incorrect when A and B are not mutually exclusive, state the correct general rule, and show with an example where the student's formula overcounts.",
            examples: {
                basicProbability:        "A student says: 'I flipped a coin 10 times and got 7 heads, so the coin is biased.' Evaluate this reasoning — state how many heads you would expect from a fair coin, explain why 7 heads in 10 flips is not conclusive evidence of bias, and describe what evidence would be needed to make a stronger case.",
                probabilityRules:        "A student calculates P(Heart or King) = 13/52 + 4/52 = 17/52 from a standard deck. Evaluate this solution — identify the error, state the correct formula, determine the correct answer, and identify the specific card that was double-counted.",
                conditionalProbability:  "A prosecutor argues: 'The probability of finding this DNA evidence if the defendant is innocent is only 1 in 1000, so there is a 99.9% chance the defendant is guilty.' Evaluate this argument — identify the specific logical error (confusing P(evidence | innocent) with P(innocent | evidence)), and explain using Bayes' theorem why this reasoning is flawed.",
                combinedEvents:          "A student constructs a tree diagram for drawing two balls without replacement from a bag of 3 red and 2 blue balls. On the second level, they use the probabilities 3/5 and 2/5 for all branches regardless of the first outcome. Evaluate this tree diagram — identify precisely which branches are incorrect, state what the correct conditional probabilities should be on each branch, and explain the principle that was violated."
            }
        },

        create: {
            description: "Design an original probability scenario, construct a complete probability model from specified constraints, or derive a formula from first principles. The student integrates multiple concepts into a coherent, original output.",
            cognitiveDemand: "Synthesis and original production. The output must be internally consistent, mathematically correct, and address all specified constraints. Reproducing a memorised example is not create-level.",
            verbs: ["Design", "Construct", "Formulate", "Derive", "Create", "Model", "Develop"],
            whatDistinguishesThisLevel: "Create requires original output. 'Design a real-world scenario that requires Bayes' theorem and produces a counterintuitive result' requires generating the scenario, setting up the correct probability model, performing the calculation, and explaining why the result surprises most people.",
            examples: {
                basicProbability:        "Design an experiment (not a coin flip or die roll) with exactly five equally likely outcomes. Write the complete sample space. Define three events — one with probability 1/5, one with probability 3/5, and one with probability 0. Verify that your definitions are consistent. Write two questions about your experiment that require combining probabilities and provide full worked solutions.",
                probabilityRules:        "Construct a two-way table for 300 people classified by two characteristics of your choice where the two characteristics are NOT independent. Include all marginal totals, verify they are consistent, calculate P(A), P(B), P(A ∩ B), and P(A ∪ B), and prove from the table values that independence does not hold. Then modify the table so that independence does hold.",
                conditionalProbability:  "Formulate a realistic Bayesian inference problem from a field of your choice (not medical testing and not spam filtering). Define a prior probability, a likelihood, compute the posterior using Bayes' theorem, and write an explanation of the result that would be understandable to someone with no probability knowledge.",
                combinedEvents:          "Design a two-stage probability game with the following properties: the probability of winning at stage 1 is 2/3; the probability of winning at stage 2 depends on the outcome of stage 1 (specify both conditional probabilities); the overall probability of winning both stages is between 0.3 and 0.4. Draw the complete tree diagram, verify your design achieves the required overall probability, calculate the expected number of wins in 100 plays of the game, and design a fair entry fee given the prize is £5."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Calculates simple theoretical probabilities correctly for single events but confuses numerator and denominator",
                "Lists some outcomes in a sample space but misses systematic enumeration (e.g. forgets (1,2) and (2,1) are distinct outcomes when rolling two dice)",
                "Adds P(A) and P(B) without subtracting P(A ∩ B) for non-mutually-exclusive events",
                "Cannot yet distinguish between independent and dependent events in context",
                "Treats P(A|B) and P(B|A) as interchangeable"
            ],
            immediateNextSteps: [
                "For sample space errors: always use a systematic grid or tree before counting. For two dice, draw the 6×6 grid and fill every cell before counting favourable outcomes. Never count mentally for two-stage experiments.",
                "For the addition rule double-counting: draw a Venn diagram for every A or B question. Shade A in one colour, B in another, the overlap in a third. Count physically: the overlap is being counted twice without the correction. Always subtract P(A ∩ B).",
                "For independence vs dependence: ask 'does drawing the first ball change what's in the bag?' If yes (no replacement), the events are dependent and you must use conditional probabilities on the second level of the tree. If no (with replacement), events are independent.",
                "For confusing P(A|B) and P(B|A): always read the condition (the event after the vertical bar) as the denominator — it is the restricted sample space you are working within. P(A|B) means you are inside B and asking how much of B is also A."
            ],
            misconceptionsToAddress: [
                "P(A or B) = P(A) + P(B) always → draw Venn diagram showing the overlap being double-counted",
                "P(A|B) = P(B|A) → use a numerical example where both are clearly different"
            ]
        },

        developing: {
            characteristics: [
                "Applies the addition rule correctly for mutually exclusive events but forgets the intersection term for non-mutually-exclusive events",
                "Constructs tree diagrams but uses marginal probabilities on second-level branches instead of conditional probabilities",
                "Can identify that events are dependent when told but cannot reliably adjust probabilities for the second draw in sampling-without-replacement problems",
                "Can state Bayes' theorem but cannot correctly identify which probability plays which role (prior, likelihood, evidence)",
                "Calculates expected value correctly when probabilities are given but makes errors assigning probabilities to outcomes first"
            ],
            immediateNextSteps: [
                "For tree diagram second-level errors: before writing any probability on a second branch, ask 'given I am on this first branch — what does my sample look like now?' Write the updated composition explicitly before calculating the conditional probability. Never copy the first-level probabilities to the second level.",
                "For Bayes' theorem role confusion: label P(A) as PRIOR (your starting belief before evidence), P(B|A) as LIKELIHOOD (probability of seeing this evidence if your hypothesis is true), and P(B) as EVIDENCE (total probability of seeing this evidence, calculated by the total probability formula). Write all three labels before applying the formula.",
                "For expected value with probability assignment: always write a complete probability distribution table — list every possible outcome, its value, and its probability — before multiplying and summing. Verify that probabilities sum to 1 before computing E(X)."
            ],
            misconceptionsToAddress: [
                "Same probability on all tree branches → write updated bag composition before each second-level branch",
                "P(A) as posterior without updating → label prior, likelihood, evidence explicitly before applying Bayes"
            ]
        },

        proficient: {
            characteristics: [
                "Applies all standard probability rules (complement, addition, multiplication, conditional) accurately and selects the correct rule for each problem type",
                "Constructs complete, correctly labelled tree diagrams for two-stage experiments and reads off any required probability by identifying and summing the correct paths",
                "Distinguishes between with-replacement and without-replacement scenarios and correctly calculates conditional probabilities in each",
                "Applies Bayes' theorem correctly to reverse conditional probabilities in standard scenarios",
                "Calculates expected value from a complete probability distribution and interprets it in context"
            ],
            immediateNextSteps: [
                "Extend to three-stage experiments: draw a three-level tree and calculate path probabilities that require multiplying three conditional probabilities. Check that all 2³ = 8 paths sum to 1.",
                "Explore the total probability formula in depth: P(B) = Σ P(B|Aᵢ) × P(Aᵢ) for a partition of the sample space. Practice with three or four partition elements before applying Bayes' theorem.",
                "Connect probability to the binomial distribution: given n independent trials with P(success) = p, derive the probability of exactly k successes using the multiplication rule and combinatorics. Verify that the binomial formula C(n,k)pᵏ(1−p)ⁿ⁻ᵏ produces the same result as the tree diagram for small n.",
                "Explore conditional independence: two events A and B are conditionally independent given C if P(A ∩ B | C) = P(A|C) × P(B|C). Find an example where A and B are marginally dependent but conditionally independent."
            ],
            misconceptionsToAddress: [
                "All paths on tree are equally likely → verify that path probabilities are products of branch labels, not equal fractions",
                "Binomial applies to dependent events → always confirm independence before applying the formula"
            ]
        },

        expert: {
            characteristics: [
                "Derives the addition rule, multiplication rule, and Bayes' theorem from the Kolmogorov axioms and the definition of conditional probability",
                "Models multi-stage, multi-outcome experiments with complete probability trees and extracts any marginal, joint, or conditional probability by inspection",
                "Applies Bayes' theorem in iterative form — updating a prior probability sequentially as each piece of evidence arrives",
                "Calculates expected value for discrete distributions with multiple outcomes and interprets variance as a measure of risk",
                "Identifies and corrects common probability fallacies (prosecutor's fallacy, base rate neglect, gambler's fallacy) in context"
            ],
            immediateNextSteps: [
                "Derive the binomial distribution: show that P(X = k) = C(n,k)pᵏ(1−p)ⁿ⁻ᵏ from first principles using the multiplication rule for independent events and combinatorial counting of k-success sequences.",
                "Explore the law of total expectation: E(X) = E[E(X|Y)] — the expected value of a conditional expected value equals the unconditional expected value. Apply to a two-stage pricing problem.",
                "Investigate Bayesian updating in sequence: start with a prior, apply Bayes' theorem after the first observation, use the posterior as the new prior, apply Bayes' theorem after the second observation, and compare the final posterior to applying both observations simultaneously. They must agree.",
                "Connect probability to information theory: the entropy H(X) = −Σ P(x) log₂ P(x) measures uncertainty. Show that H is maximised when all outcomes are equally likely and minimised when one outcome is certain. Connect to the intuition that probability 0 and probability 1 convey no surprise."
            ],
            misconceptionsToAddress: [
                "Posterior after updating depends on observation order → show mathematically that sequential and simultaneous Bayesian updating give identical results",
                "Expected value determines optimal strategy completely → introduce variance as a measure of risk and show two games with identical E(X) but different variances"
            ]
        }
    }
},

setTheory: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored definitions, symbols, and laws of set theory from memory. The student reproduces correct notation and identifies set elements, operations, and relationships accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall of definitions and symbols. No reasoning required beyond recognition. A student who cannot yet do this cannot access higher levels.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response states the correct definition or symbol without explanation. 'A ∪ B contains all elements in A or B' is remember-level. Adding 'because union corresponds to the logical OR operation, which is true when at least one condition holds' crosses into understand.",
            examples: {
                setNotationAndMembership: "State the meaning of ∈ and ∉. List all elements of A = {x ∈ ℕ : x² ≤ 25}.",
                setOperations:            "Write the definition of A ∩ B. State De Morgan's First Law in symbolic form.",
                vennDiagrams:             "Label the four regions of a two-set Venn diagram (A only, A∩B, B only, outside both) using set notation.",
                setRelationships:         "State the difference between ⊆ and ⊂. Write the formula |P(A)| = 2^|A| and state what each symbol means."
            }
        },

        understand: {
            description: "Explain the meaning and reasoning behind set theory facts — connect notation to meaning, connect operations to logical equivalents, and interpret results in context.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, connects, or explains rather than reciting. Understanding is demonstrated when a student can explain WHY a rule holds, not just WHAT it says.",
            verbs: ["Explain", "Justify", "Interpret", "Connect", "Contrast", "Describe", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand goes beyond remember by requiring mechanism or logical connection. 'The empty set is a subset of every set' is remember. 'The empty set is a subset of every set because the subset condition (every element of ∅ must be in A) is vacuously satisfied — ∅ has no elements to violate the condition' is understand.",
            examples: {
                setNotationAndMembership: "Explain why {∅} ≠ ∅, connecting the distinction to the definition of cardinality. Why does |∅| = 0 but |{∅}| = 1?",
                setOperations:            "Explain why the inclusion-exclusion formula subtracts |A ∩ B| when computing |A ∪ B|. Connect to the idea of double-counting and draw a Venn diagram to support your explanation.",
                vennDiagrams:             "Explain why, when filling a three-set Venn diagram, you must start with the centre region (A ∩ B ∩ C) rather than the individual-set regions. What error occurs if you start from the outside?",
                setRelationships:         "Explain the difference between A ⊂ B and A ⊆ B using an example where one holds but not the other, and an example where both hold simultaneously."
            }
        },

        apply: {
            description: "Execute set operations, apply formulas, and solve unfamiliar problems by selecting and using the correct set-theoretic tools accurately.",
            cognitiveDemand: "Procedure execution in a novel context. The student selects the correct operation or formula, sets it up properly, and carries it through to a correct answer. Common failure: correct formula recalled but applied to wrong values.",
            verbs: ["Calculate", "Find", "Determine", "List", "Draw", "Solve", "Construct"],
            whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. Computing A ∩ B from unfamiliar sets, filling a new Venn diagram from given data, or applying inclusion-exclusion to a new word problem all require apply-level work.",
            examples: {
                setNotationAndMembership: "Given U = {integers from 1 to 20}, A = {multiples of 3}, B = {multiples of 4}. List the elements of A, B, A ∪ B, A ∩ B, A′, and A \\ B.",
                setOperations:            "Given |U| = 150, |A| = 80, |B| = 65, |A ∩ B| = 35, find |A ∪ B|, |A′|, |B′|, |A \\ B|, |(A ∪ B)′|. Show all working.",
                vennDiagrams:             "In a group of 80 people, 45 speak French, 38 speak German, and 20 speak both. Draw and fully label a two-set Venn diagram. Find how many speak neither language.",
                setRelationships:         "List all subsets of A = {p, q, r}. Verify that |P(A)| = 2³ = 8 by counting. Identify which subsets are proper subsets of A."
            }
        },

        analyze: {
            description: "Examine set relationships, Venn diagrams, or problem structures to identify patterns, determine outcomes, and draw conclusions not given directly.",
            cognitiveDemand: "Decomposition and inference. The student works from evidence to a conclusion. The conclusion is not given — it must be derived by examining the structure of the sets or the problem.",
            verbs: ["Determine", "Identify", "Classify", "Analyse", "Deduce", "Compare", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given two sets, determine whether they are equal, one is a subset of the other, or they are disjoint' requires examining the set structures systematically and reaching a justified conclusion — not applying a stated formula.",
            examples: {
                setNotationAndMembership: "Given A = {x ∈ ℤ : x² < 16} and B = {x ∈ ℤ : |x| ≤ 3}, list both sets and analyse their relationship — are they equal, is one a subset of the other, or neither? Justify by comparing elements.",
                setOperations:            "Three sets A, B, C satisfy: |A ∪ B ∪ C| = 60, |A| = 30, |B| = 25, |C| = 20, |A ∩ B| = 10, |A ∩ C| = 8. Using the inclusion-exclusion formula, determine |B ∩ C| and |A ∩ B ∩ C|. Interpret what |A ∩ B ∩ C| means in context.",
                vennDiagrams:             "A completed Venn diagram for sets A and B shows regions: A only = 15, A∩B = 20, B only = 10, outside = 5. Determine |U|, |A|, |B|, |A ∪ B|, |A′|, |B \\ A|, and |(A ∩ B)′|. Analyse whether A ⊆ B, B ⊆ A, or neither.",
                setRelationships:         "Analyse the statement 'If A ⊆ B and B ⊆ C, then A ⊆ C.' Prove this using the definition of subset (element-by-element argument). Then provide a concrete example with three explicitly listed sets to illustrate the result."
            }
        },

        evaluate: {
            description: "Judge the correctness or quality of a set-theoretic claim, worked solution, or argument using precise mathematical criteria.",
            cognitiveDemand: "Judgement with justification. Identifying an error is insufficient — the student must state the precise mathematical criterion violated and produce the correct result.",
            verbs: ["Evaluate", "Critique", "Verify", "Assess", "Judge", "Justify", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a mathematical standard. 'A student claims A \\ B = B \\ A — evaluate this.' The student must identify it as incorrect (judgement), provide a counterexample showing A \\ B ≠ B \\ A (criterion), and state that set difference is not commutative (principle).",
            examples: {
                setNotationAndMembership: "A student claims '{∅} = ∅ because both are empty.' Evaluate this claim — identify the precise error, compute |{∅}| and |∅|, and explain what element {∅} actually contains.",
                setOperations:            "A student computes |A ∪ B| for |A| = 40, |B| = 30, |A ∩ B| = 10 and obtains |A ∪ B| = 80 by adding 40 + 30 + 10. Evaluate this working — identify the error precisely, state the correct formula, compute the correct answer, and explain why elements in A ∩ B must be subtracted rather than added.",
                vennDiagrams:             "A student fills a three-set Venn diagram by first placing |A| = 30 in the A circle, then |B| = 25 in the B circle, then |C| = 20 in the C circle — placing the full counts in each circle before addressing overlaps. The student obtains a total of 75 and subtracts overlaps afterwards. Evaluate this strategy — identify why it produces double-counting errors and explain the correct centre-outward method.",
                setRelationships:         "A student states: 'Since every element of A = {2, 4} is in B = {1, 2, 3, 4, 5}, A and B are equal sets.' Evaluate this claim — identify the error, state the correct relationship between A and B using ⊆ and ⊂, and explain what additional condition would be required for A = B."
            }
        },

        create: {
            description: "Generate original set-theoretic constructions: design sets with specified properties, formulate real-world models, construct proofs, or synthesise multiple concepts into a coherent new problem.",
            cognitiveDemand: "Synthesis and original production. The student produces something that did not exist before, requiring the integration of multiple set theory concepts. Strong create-level responses are internally consistent, mathematically correct, and address all constraints.",
            verbs: ["Design", "Construct", "Formulate", "Derive", "Create", "Model", "Prove"],
            whatDistinguishesThisLevel: "Create requires original output that cannot be produced by recalling or executing a procedure. Designing a three-set scenario from scratch, proving a set identity from definitions, or constructing a set with specified cardinality and intersection properties all require genuine synthesis.",
            examples: {
                setNotationAndMembership: "Create a real-world scenario (not libraries or medical screening) that requires defining three sets with a meaningful universal set. Write the sets in both roster and set-builder notation. Formulate and answer three questions about your sets using different set operations, showing full working for each.",
                setOperations:            "Prove that A \\ B = A ∩ B′ using only the definitions of set difference and complement (element-by-element argument). Then use this identity to derive a formula for |A \\ B| in terms of |A| and |A ∩ B|. Verify your formula with a numerical example.",
                vennDiagrams:             "Design a three-set survey problem: specify the context, choose three overlapping attributes, and assign realistic counts to all seven Venn regions. From your region counts, compute all seven cardinalities (|A|, |B|, |C|, |A∩B|, |A∩C|, |B∩C|, |A∩B∩C|) and verify using inclusion-exclusion. Write two follow-up questions and solve them.",
                setRelationships:         "Construct a chain of four sets A ⊂ B ⊂ C ⊂ D where each is a proper subset of the next, and each set has a real-world interpretation. Compute |P(A)|, |P(B)|, |P(C)|, |P(D)| and express the pattern you observe. Prove from the definition of proper subset that if A ⊂ B then A ≠ B."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Confuses ∈ (membership) with ⊆ (subset) — writes 2 ⊆ {1,2,3} instead of 2 ∈ {1,2,3}",
                "Treats {∅} as the empty set — does not recognise it as a set containing one element",
                "Computes A ∪ B by listing elements of A and B with duplicates — does not remove repeated elements",
                "Fills Venn diagrams by placing |A| in the entire left circle — does not subtract the overlap from the A-only region",
                "Cannot list all subsets of a set with three elements — lists some but misses ∅ and the full set",
                "Cannot identify disjoint sets — looks for shared elements without checking the intersection"
            ],
            immediateNextSteps: [
                "For ∈ vs ⊆ confusion: write two sentences for every set exercise — 'a ∈ A means a is an element'; 'B ⊆ A means B is a subset, i.e. every element of B is in A'. Before writing any symbol, ask: 'Am I relating an element to a set (use ∈) or a set to a set (use ⊆)?'",
                "For {∅} vs ∅: draw two boxes — one empty box labelled '∅ — nothing inside, cardinality 0'; one box containing a small circle labelled '{∅} — one thing inside (the empty set), cardinality 1'. Keep this drawing visible for every set theory problem.",
                "For duplicates in union: always write 'unique elements only' after every union operation and scan the list for any element appearing more than once. Underline duplicates and cross them out.",
                "For Venn diagram filling: always fill the intersection (overlap) first, then subtract: A only = |A| − |A∩B|. Never place the full |A| count in the A circle without subtracting the overlap.",
                "For listing subsets: use the systematic size-by-size approach — size 0 (∅), size 1 (each single element), size 2 (each pair), etc. Count the subsets at each size and verify the total equals 2ⁿ."
            ],
            misconceptionsToAddress: [
                "∈ vs ⊆ conflation → element-to-set vs set-to-set sentence drill",
                "{∅} = ∅ → cardinality boxes diagram",
                "Venn diagram without subtracting overlap → intersection-first habit"
            ]
        },

        developing: {
            characteristics: [
                "Can perform union and intersection on explicitly listed sets but makes errors with set-builder notation sets",
                "Can fill a two-set Venn diagram when given |A∩B| directly, but cannot derive |A∩B| from a word problem",
                "Applies inclusion-exclusion formula for two sets but makes sign errors on the three-set formula",
                "Confuses A \\ B with B \\ A — does not consistently recognise the asymmetry of set difference",
                "Can state De Morgan's Laws but cannot verify them or apply them to simplify expressions"
            ],
            immediateNextSteps: [
                "For set-builder notation: always convert to a listed set first — write out the elements satisfying the condition before performing any operations. This converts an abstract rule into a concrete roster.",
                "For deriving |A∩B| from word problems: identify the key phrase — 'both', 'and', 'at the same time' all signal intersection. Write |A∩B| = (what is given explicitly about both conditions) before attempting any other calculation.",
                "For the three-set inclusion-exclusion: memorise the rhythm 'add singles, subtract pairs, add triple' and write the formula in this rhythm every time: + |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|. Never skip to the formula without writing the rhythm.",
                "For A \\ B asymmetry: always annotate A \\ B as 'start with A, remove what is also in B' and B \\ A as 'start with B, remove what is also in A'. The subject of the sentence (A or B) is what you start with.",
                "For De Morgan's Laws: verify each law on a small example (|U| = 6 elements) before applying it in a general proof. Seeing the law hold numerically builds confidence in applying it symbolically."
            ],
            misconceptionsToAddress: [
                "Three-set inclusion-exclusion sign errors → rhythm mantra",
                "A \\ B vs B \\ A confusion → 'start with' annotation",
                "De Morgan's Law application → numerical verification first"
            ]
        },

        proficient: {
            characteristics: [
                "Performs all four set operations correctly on both listed and set-builder notation sets",
                "Fills two-set Venn diagrams accurately from word problem data, including deriving |A∩B| from context",
                "Applies inclusion-exclusion correctly for both two-set and three-set problems",
                "Correctly identifies subset, proper subset, equal, and disjoint relationships",
                "Verifies De Morgan's Laws with numerical examples and applies them to simplify expressions"
            ],
            immediateNextSteps: [
                "Prove set identities formally: prove A \\ B = A ∩ B′ using element-by-element argument (let x ∈ A \\ B, show x ∈ A ∩ B′, and vice versa). This transitions from computational to proof-based set theory.",
                "Explore the power set structure: for A = {1,2,3,4}, list all 16 subsets and organise them by cardinality. Count subsets of each size using binomial coefficients C(4,0), C(4,1), C(4,2), C(4,3), C(4,4) and verify 1+4+6+4+1=16. Connect to Pascal's triangle.",
                "Connect sets to probability: for a sample space U, define events A and B as subsets. Express P(A ∪ B) = P(A) + P(B) − P(A ∩ B) as a direct consequence of the cardinality inclusion-exclusion formula divided by |U|.",
                "Explore symmetric difference: define A △ B = (A \\ B) ∪ (B \\ A) — elements in exactly one of the two sets. Show that A △ B = (A ∪ B) \\ (A ∩ B). This previews ring theory (symmetric difference as addition in the Boolean ring).",
                "Apply set theory to logic: construct a truth table for (P ∨ Q) and (P ∧ Q) and match each row to the corresponding Venn region. Map ¬P to A′ and verify De Morgan's Laws hold in both the set and logic interpretations."
            ],
            misconceptionsToAddress: [
                "Computational fluency without proof understanding → element-by-element identity proofs",
                "Power set cardinality as a formula without structure → binomial coefficient breakdown"
            ]
        },

        expert: {
            characteristics: [
                "Proves set identities formally using element-by-element arguments or algebraic manipulation of set laws",
                "Applies inclusion-exclusion to complex multi-set problems and interprets results in sophisticated contexts",
                "Connects set theory to logic (Boolean algebra), probability, and computing (relational databases)",
                "Derives the cardinality of a power set from first principles using binary representation",
                "Identifies and proves transitivity of subset relations and other structural properties"
            ],
            immediateNextSteps: [
                "Derive the power set cardinality formula from binary strings: each subset of A = {a₁,...,aₙ} corresponds to a unique binary string of length n (1 if the element is included, 0 if not). The number of binary strings of length n is 2ⁿ. This is the combinatorial proof of |P(A)| = 2ⁿ.",
                "Prove the inclusion-exclusion principle for three sets from the two-set case: use the fact that |A ∪ B ∪ C| = |(A ∪ B) ∪ C| and apply the two-set formula twice. This inductive approach previews how the general n-set formula is derived.",
                "Explore infinite sets: distinguish between countably infinite sets (ℕ, ℤ, ℚ — all in bijection with ℕ) and uncountably infinite sets (ℝ — Cantor's diagonal argument). This is the frontier of foundational set theory and addresses the question 'are all infinite sets the same size?'",
                "Connect to relational databases: translate five SQL queries (SELECT, WHERE AND, WHERE OR, EXCEPT, IN) into their set-operation equivalents and explain why database query optimisers use set algebraic properties (commutativity, associativity, distributivity) to improve performance."
            ],
            misconceptionsToAddress: [
                "All infinite sets are the same size → Cantor's diagonal argument",
                "Set laws are axioms rather than provable → derive key laws from element-by-element definitions"
            ]
        }
    }
},

numberTheory: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored definitions, rules, and procedures of number theory from memory without requiring explanation of why they are true. The student reproduces facts, notation, and rules accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot yet do this, they cannot access any higher level of number theory.",
            verbs: ["State", "Write", "List", "Define", "Identify", "Name", "Recall"],
            whatDistinguishesThisLevel: "A remember-level response reproduces correct facts without explaining them. 'A prime number has exactly two factors: 1 and itself' is remember-level. Explaining why 1 is excluded from the definition of prime crosses into understand.",
            examples: {
                divisibilityAndFactors: "State the divisibility rule for 3. List all factors of 48. Define what it means for b to divide a using the notation b | a.",
                primesAndComposites:    "Define prime number and composite number. State why 1 is neither prime nor composite. List all prime numbers less than 30.",
                gcdAndLcm:              "State what GCD stands for and write its definition. State the formula connecting GCD and LCM: lcm(a,b) × gcd(a,b) = a × b.",
                modularArithmetic:      "State what a ≡ b (mod n) means. Write the congruence for 47 divided by 5. Name the rule for modular multiplication."
            }
        },

        understand: {
            description: "Explain the meaning behind number theory facts — connect definitions to their consequences, connect procedures to their mathematical justification, and interpret results in context.",
            cognitiveDemand: "Translation and interpretation. The student explains WHY a definition is stated as it is, or connects an algebraic fact to its geometric or arithmetic meaning.",
            verbs: ["Explain", "Justify", "Interpret", "Connect", "Contrast", "Describe", "Illustrate"],
            whatDistinguishesThisLevel: "Understand requires mechanism and reason. 'The LCM uses the higher power of each prime' is remember. 'The LCM must be divisible by both numbers, so it must contain every prime factor of each — and since higher powers capture more factors, we take the maximum exponent' is understand.",
            examples: {
                divisibilityAndFactors: "Explain why the divisibility rule for 9 (digit sum divisible by 9) works. Your explanation should reference the fact that 10 ≡ 1 (mod 9), so each digit contributes its face value to the sum modulo 9.",
                primesAndComposites:    "Explain why the primality test only requires checking divisibility up to √n. Use the concept of factor pairs — if n = a × b with a ≤ b, what can you conclude about a relative to √n?",
                gcdAndLcm:              "Explain why gcd(a, b) uses lower powers and lcm(a, b) uses higher powers when working from prime factorisations. Connect this to what GCD and LCM each require of their prime factors.",
                modularArithmetic:      "Explain why the last digit of any power of a number follows a repeating cycle. Connect this to the fact that the last digit is determined by the value modulo 10, and powers of any fixed base modulo 10 must eventually repeat."
            }
        },

        apply: {
            description: "Use number theory procedures — divisibility rules, prime factorisation, Euclidean algorithm, modular arithmetic — to solve a specific, unseen problem.",
            cognitiveDemand: "Procedure execution in a novel situation. The student selects and correctly executes the appropriate method for the given numbers.",
            verbs: ["Find", "Calculate", "Determine", "Express", "Apply", "Factorise", "Evaluate"],
            whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. 'Find gcd(84, 56) using the Euclidean algorithm' requires procedure execution, not just recitation of the algorithm steps.",
            examples: {
                divisibilityAndFactors: "Without performing full division, determine which of 2, 3, 4, 5, 6, 9, 10 divide exactly into 7,560. Justify each answer using the appropriate divisibility rule.",
                primesAndComposites:    "Find the prime factorisation of 1,260. Express your answer in index form. Use your factorisation to find the number of factors 1,260 has.",
                gcdAndLcm:              "Find gcd(252, 168) using the Euclidean algorithm. Then find lcm(252, 168) using the GCD–LCM relationship formula. Show all steps.",
                modularArithmetic:      "Find the last digit of 3⁴⁷. Show your working by identifying the repeating cycle of powers of 3 modulo 10 and using it to evaluate 3⁴⁷ mod 10."
            }
        },

        analyze: {
            description: "Break down a number-theoretic problem to identify structure, classify numbers, draw inferences, and reach conclusions from evidence rather than being told the answer.",
            cognitiveDemand: "Decomposition and inference. The student examines the structure of numbers or a presented argument and derives a conclusion that was not stated explicitly.",
            verbs: ["Determine", "Classify", "Investigate", "Identify", "Deduce", "Compare", "Analyse"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to a non-obvious conclusion. 'Given two numbers' prime factorisations, determine the number of common factors they share' requires systematic analysis of shared prime structure, not mere procedure execution.",
            examples: {
                divisibilityAndFactors: "A number N has digit sum 27 and its last three digits form the number 816. Without computing N, determine the complete list of values from {2, 3, 4, 5, 6, 8, 9} that divide N. Justify each conclusion using the appropriate rule.",
                primesAndComposites:    "A student claims that no prime greater than 3 can be of the form 3k + 2 for any positive integer k. Investigate this claim by testing several cases, identify whether it is true or false, and explain the correct pattern for the form of primes greater than 3.",
                gcdAndLcm:              "Two numbers have GCD 12 and LCM 360. Their sum is 84. Find the two numbers. Show the analysis required to determine all possibilities consistent with the given GCD and LCM.",
                modularArithmetic:      "A number N leaves remainder 3 when divided by 7 and remainder 5 when divided by 9. By systematically checking residues, find the smallest positive integer N satisfying both conditions. Explain your search strategy."
            }
        },

        evaluate: {
            description: "Judge the correctness of a claim, solution, or argument in number theory. Identify precisely what is wrong, state the violated rule or definition, and produce the correct result.",
            cognitiveDemand: "Judgement with justification against a mathematical criterion. Simply identifying an error as 'wrong' is insufficient — the student must name the specific rule broken and provide the correction.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Justify", "Appraise", "Judge"],
            whatDistinguishesThisLevel: "Evaluate requires a verdict plus evidence. 'A student claims gcd(36, 48) = 6 — evaluate this' requires identifying the error (they found a common factor, not the greatest), computing the correct GCD = 12, and explaining what 'greatest' means in this context.",
            examples: {
                divisibilityAndFactors: "A student says '4,251 is divisible by 9 because 4+2+5+1 = 12 and 12 is divisible by 3.' Evaluate this argument — identify the rule being confused, check the correct divisibility test for 9, and state whether 4,251 is divisible by 9.",
                primesAndComposites:    "A student tests whether 221 is prime by checking divisibility by 2, 3, 5, and 7 only, then concluding it is prime. Evaluate this primality test — identify the flaw (what prime was missed?), find the correct factorisation of 221, and state the complete list of primes that must be tested.",
                gcdAndLcm:              "A student finds gcd(180, 126) using prime factorisations as follows: 180 = 2² × 3² × 5 and 126 = 2 × 3² × 7. The student takes the higher power of each shared prime and writes gcd = 2² × 3² = 36. Evaluate this method — identify what rule was applied incorrectly, state the correct rule for GCD, and give the correct answer.",
                modularArithmetic:      "A student evaluates (−11) mod 4 as −3 because '−11 ÷ 4 leaves remainder −3.' Evaluate this — explain why −3 is not a valid answer for a remainder modulo 4, state the convention for remainders in modular arithmetic, and give the correct value of (−11) mod 4."
            }
        },

        create: {
            description: "Generate original number-theoretic objects, problems, or models: design numbers with specified properties, formulate real-world scenarios, construct proofs by example or counterexample, or build systematic investigations.",
            cognitiveDemand: "Synthesis and original production. The student combines multiple concepts into a coherent, mathematically correct original output that could not be produced by memorising a worked example.",
            verbs: ["Design", "Construct", "Formulate", "Create", "Generate", "Derive", "Devise"],
            whatDistinguishesThisLevel: "Create requires an original output satisfying multiple constraints simultaneously. 'Design a three-digit number divisible by 3, 4, and 7 but not by 5 or 9, find its prime factorisation, and explain how you constructed it' requires combining divisibility constraints, prime structure knowledge, and number construction — none of which is retrievable from a single example.",
            examples: {
                divisibilityAndFactors: "Design a five-digit number that is divisible by 3, 4, and 6 but not by 5, 8, or 9. Show how you constructed it by applying each divisibility rule deliberately, find its complete prime factorisation, and list all of its factors.",
                primesAndComposites:    "Construct two different composite numbers between 100 and 200, each with exactly four prime factors (counting multiplicity) in their prime factorisations, at least one of which must have a repeated prime factor. Find the GCD and LCM of your two numbers and verify your answers using both the prime factorisation method and the GCD–LCM relationship.",
                gcdAndLcm:              "Devise a real-world word problem (not packaging, tiling, or traffic lights) whose solution requires finding both the GCD and LCM of two numbers. Write the complete problem, identify the role played by each of GCD and LCM in the solution, solve it in full, and explain why both quantities are needed.",
                modularArithmetic:      "Design a 9-digit number and a valid check digit for a hypothetical checksum scheme that uses the weighted sum 9d₁ + 8d₂ + 7d₃ + 6d₄ + 5d₅ + 4d₆ + 3d₇ + 2d₈ + d₉ + d₁₀ ≡ 0 (mod 11). Show all working. Then demonstrate that swapping two adjacent digits in your number causes the checksum to fail."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Lists factors of small numbers but misses factor pairs for larger numbers (e.g. omits 18 as a factor of 36 while listing 2, 3, 4)",
                "Identifies small primes (2, 3, 5, 7) correctly but claims 1 is prime and is uncertain about numbers like 51 or 91",
                "Can produce a factor tree for small numbers but cannot find prime factorisations of numbers with repeated prime factors (e.g. writes 36 = 2 × 3 × 6 rather than 2² × 3²)",
                "Confuses GCD and LCM — applies the wrong operation or confuses which uses lower vs higher powers",
                "Cannot evaluate expressions in modular arithmetic; interprets 'mod' as the division operation rather than the remainder"
            ],
            immediateNextSteps: [
                "For missing factors: always list factors in pairs starting from 1. Write 1 and n, then 2 and n/2 (if divisible), then 3 and n/3, and so on, stopping when the two numbers in a pair meet or cross. This systematic pairing guarantees no factor is missed.",
                "For the '1 is prime' error: memorise the definition precisely — a prime has EXACTLY TWO positive divisors. List the divisors of 1: just {1}. Count them: one divisor. The definition requires two. 1 fails the definition. Write this once per session until it is automatic.",
                "For prime factorisations with repeated factors: after completing a factor tree, write all the prime leaves in a list and then collect like terms using exponent notation. Practice writing 36 = 2 × 2 × 3 × 3 = 2² × 3² explicitly — the intermediate expanded form is essential.",
                "For GCD vs LCM confusion: use the memory cue 'GCD is small (Greatest Divisor = smaller than both numbers); LCM is large (Least Multiple = larger than both numbers).' Draw both on a number line relative to a and b to make this concrete.",
                "For modular arithmetic: always compute a mod n by performing the division and writing the remainder explicitly. Practice: 23 ÷ 5 = 4 remainder 3, so 23 mod 5 = 3. Do ten such calculations before attempting any modular arithmetic problem."
            ],
            misconceptionsToAddress: [
                "1 is prime → definition counts: exactly two divisors",
                "GCD–LCM confusion → GCD small, LCM large: draw on number line",
                "Missing factor pairs → systematic paired listing from 1"
            ]
        },

        developing: {
            characteristics: [
                "Finds prime factorisations of two-to-three digit numbers correctly but makes errors with numbers that have a prime factor greater than 10 (e.g. fails to recognise 91 = 7 × 13)",
                "Correctly applies GCD by listing factors but cannot apply the prime factorisation method reliably — confuses higher and lower powers",
                "Knows the Euclidean algorithm procedure but loses track of which remainder to use next",
                "Evaluates simple modular arithmetic (single reduction) but cannot apply it to multi-step calculations or large powers",
                "Applies divisibility rules for 2, 3, and 5 reliably but misapplies the rule for 4 (checks last digit instead of last two digits)"
            ],
            immediateNextSteps: [
                "For large prime factors: when the repeated-division method stalls at an unfamiliar quotient, test divisibility by primes in order (7, 11, 13, ...) up to the square root of the quotient. Practice primality testing of numbers between 49 and 169 — the range where non-obvious prime factors appear most frequently.",
                "For GCD prime factorisation method: write both factorisations in a two-row table aligned by prime base. For each column (prime), circle the LOWER exponent — this is the GCD contribution. Separately circle the HIGHER exponent for LCM. This visual alignment prevents confusion between the two operations.",
                "For the Euclidean algorithm: lay out each step as a long-division calculation written vertically — dividend, divisor, quotient, remainder — and draw an arrow from the remainder to become the new dividend. Never attempt the next step without completing the arrow. This prevents the most common error: using the quotient instead of the remainder.",
                "For modular arithmetic with large numbers: reduce the base first before raising to the power. Practice computing the cycle of remainders for a given base (e.g. powers of 3 mod 10: 3, 9, 7, 1, repeat) before applying it to large exponents.",
                "For the rule of 4: write the rule explicitly at the top of every problem — 'last TWO digits' — then underline the last two digits of the number before applying the test."
            ],
            misconceptionsToAddress: [
                "Failing to find large prime factors → systematic prime testing up to √n",
                "GCD uses higher power → two-row table with explicit lower/higher circling",
                "Euclidean algorithm using quotient instead of remainder → remainder-arrow diagram"
            ]
        },

        proficient: {
            characteristics: [
                "Finds prime factorisations of numbers up to four digits quickly and in index form",
                "Applies all three GCD methods (listing, prime factorisation, Euclidean algorithm) correctly and selects the most efficient for a given pair",
                "Uses the GCD–LCM relationship formula reliably to avoid computing LCM from scratch",
                "Evaluates expressions modulo n accurately, including multi-step calculations and last-digit problems",
                "Applies divisibility rules to determine divisibility without explicit division for all standard rules (2, 3, 4, 5, 6, 8, 9, 10)"
            ],
            immediateNextSteps: [
                "Extend modular arithmetic to solving linear congruences: given ax ≡ b (mod n), find x by trial or by finding the multiplicative inverse of a modulo n. Start with small moduli (n ≤ 12) and verify all solutions.",
                "Investigate the number of factors formula: if n = p₁^a₁ × p₂^a₂ × ... × pₖ^aₖ, then the number of factors of n is (a₁+1)(a₂+1)···(aₖ+1). Derive this formula by counting choices for each prime's exponent. Apply it to find numbers with exactly 12 factors.",
                "Explore the Chinese Remainder Theorem (introductory): find a number that leaves remainder 2 when divided by 3, remainder 3 when divided by 5, and remainder 2 when divided by 7. Use systematic residue search and then verify the solution. This previews one of the most powerful tools in number theory.",
                "Connect prime factorisation to fraction arithmetic: simplify complex fractions by factorising numerator and denominator, cancelling common factors. Show that this is equivalent to dividing numerator and denominator by their GCD."
            ],
            misconceptionsToAddress: [
                "Always using listing method for GCD regardless of size → enforce method selection based on number size",
                "Forgetting to verify modular arithmetic solutions by substitution → always check: does a ≡ b (mod n) hold?"
            ]
        },

        expert: {
            characteristics: [
                "Derives divisibility rules from first principles using modular arithmetic (e.g. proves the rule for 3 using the fact that 10 ≡ 1 mod 3)",
                "Applies the Euclidean algorithm to three or more numbers by repeated pairwise application",
                "Solves simple linear congruences ax ≡ b (mod n) and understands the role of gcd(a, n) in determining solvability",
                "Connects prime factorisation to the number-of-factors formula and uses it to find numbers with a prescribed number of factors",
                "Applies modular arithmetic to multi-step cryptographic reasoning, checksums, and calendar calculations"
            ],
            immediateNextSteps: [
                "Study Euler's Totient Function φ(n): the count of integers from 1 to n that are coprime to n. Compute φ(n) for prime powers and products of primes. Verify Euler's theorem: if gcd(a, n) = 1 then a^φ(n) ≡ 1 (mod n). This is the mathematical heart of RSA encryption.",
                "Prove that there are infinitely many primes using Euclid's original proof by contradiction: assume finitely many primes p₁, ..., pₙ; consider N = p₁ × p₂ × ... × pₙ + 1 and derive a contradiction.",
                "Investigate perfect numbers: a perfect number equals the sum of its proper divisors (e.g. 6 = 1+2+3, 28 = 1+2+4+7+14). Use prime factorisation to verify these and research the connection to Mersenne primes.",
                "Explore the distribution of primes: compute the prime counting function π(n) for n = 10, 100, 1000 and compare with the approximation n/ln(n) given by the Prime Number Theorem. This connects number theory to analysis and one of the most important theorems in all of mathematics."
            ],
            misconceptionsToAddress: [
                "All linear congruences are solvable → gcd(a,n) must divide b for ax ≡ b (mod n) to have solutions",
                "The number of primes is finite → study Euclid's proof"
            ]
        }
    }
},

coordinateGeometry: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored formulas, definitions, and rules about coordinate geometry from memory. The student reproduces facts accurately without needing to explain why they are true.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. Cannot access any higher level without this foundation.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct formulas and definitions with no explanation. 'The distance formula is √[(x₂−x₁)²+(y₂−y₁)²]' is remember-level. Explaining why it follows from Pythagoras crosses into understand.",
            examples: {
                coordinateGeometryBasics: "State the distance formula. Write the coordinates of the midpoint of a segment joining (x₁,y₁) and (x₂,y₂).",
                distanceAndMidpoint:      "Write the formula for the midpoint of a segment. State what condition must hold for point P to be on a circle with centre C and radius r.",
                linesAndGradients:        "State the condition for two lines to be parallel in terms of their gradients. State the condition for perpendicularity.",
                circlesOnPlane:           "Write the equation of a circle with centre (a, b) and radius r. Name the method used to convert an expanded circle equation to centre-radius form."
            }
        },

        understand: {
            description: "Explain the meaning behind coordinate geometry facts — connect algebra to geometry, interpret results in context, and justify why formulas work.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, connects, or explains rather than repeating.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Derive"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or reason. 'The distance formula is √[(x₂−x₁)²+(y₂−y₁)²]' is remember. 'The distance formula comes from drawing a right-angled triangle where the segment is the hypotenuse — the horizontal leg is |x₂−x₁| and the vertical leg is |y₂−y₁|, so Pythagoras gives d² = (x₂−x₁)²+(y₂−y₁)²' is understand.",
            examples: {
                coordinateGeometryBasics: "Explain why the distance formula is derived from the Pythagorean theorem, drawing and labelling the relevant right-angled triangle.",
                distanceAndMidpoint:      "Explain why the midpoint formula takes the average of the x-coordinates and the average of the y-coordinates — connect this to the idea of finding the halfway point on each axis independently.",
                linesAndGradients:        "Explain why the perpendicular bisector of segment AB is the locus of all points equidistant from A and B. Your answer must connect this geometric definition to the algebraic steps used to find the perpendicular bisector.",
                circlesOnPlane:           "Explain why the equation (x−a)²+(y−b)²=r² represents a circle. Your answer must reference the definition of a circle and connect it to the distance formula."
            }
        },

        apply: {
            description: "Use known formulas and methods to solve unfamiliar problems. The student selects the correct tool and applies it accurately in a new context.",
            cognitiveDemand: "Procedure execution in a novel situation. Knows which formula to use, substitutes correctly, and completes the calculation.",
            verbs: ["Calculate", "Find", "Determine", "Write the equation of", "Solve", "Show"],
            whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. The student executes the procedure correctly for a specific given case.",
            examples: {
                coordinateGeometryBasics: "Find the distance between P(−3, 2) and Q(5, −4). Find the midpoint of PQ. Verify your midpoint by checking that its distance to P equals its distance to Q.",
                distanceAndMidpoint:      "The midpoint of AB is M(4, −1) and A = (1, 3). Find the coordinates of B. Then calculate the length of AB.",
                linesAndGradients:        "Find the equation of the perpendicular bisector of the segment joining A(−2, 4) and B(6, 0). Express your answer in the form y = mx + c.",
                circlesOnPlane:           "Find the centre and radius of the circle x²+y²−8x+6y−11=0 by completing the square. Write the equation in centre-radius form."
            }
        },

        analyze: {
            description: "Break down information to identify geometric relationships, classify configurations, and derive conclusions from evidence not directly given.",
            cognitiveDemand: "Decomposition and inference from evidence. The student reaches conclusions that require multiple calculation steps and geometric reasoning.",
            verbs: ["Determine", "Classify", "Analyse", "Deduce", "Prove", "Identify", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given three points, determine whether they are collinear and, if not, find the triangle type' requires computing multiple gradients or distances and combining the results to reach a geometric conclusion.",
            examples: {
                coordinateGeometryBasics: "The points A(0, 0), B(4, 3), and C(8, 6) are given. Determine whether they are collinear using two different methods. If collinear, find the equation of the line; if not, explain what figure they define.",
                distanceAndMidpoint:      "The vertices of a quadrilateral are P(0,0), Q(4,2), R(6,6), S(2,4). Calculate the lengths of all four sides and both diagonals. Classify the quadrilateral as accurately as possible (parallelogram, rectangle, rhombus, square) and justify every claim using the computed values.",
                linesAndGradients:        "Three lines are given: L₁: y = (1/2)x + 3, L₂: 2x − y = 1, L₃: y = −2x + 7. Without graphing, determine all pairwise geometric relationships (parallel, perpendicular, or neither). Find all pairwise intersection points. Determine whether the three lines are concurrent.",
                circlesOnPlane:           "Two circles are given: C₁: (x−1)²+(y−2)²=25 and C₂: (x−4)²+(y−6)²=16. Calculate the distance between their centres. Determine whether the circles intersect, are tangent, one contains the other, or are external to each other. Justify fully."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, accuracy, or quality of a coordinate geometry claim, method, or solution. Identify precisely what is wrong, state the mathematical criterion by which it fails, and give the correct answer.",
            cognitiveDemand: "Judgement with justification. 'This is wrong' alone is not evaluate-level — the student must specify the error and produce a correction.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Justify", "Appraise", "Identify the error in"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a mathematical standard with specific justification and correction.",
            examples: {
                coordinateGeometryBasics: "A student claims the distance from A(2,3) to B(5,7) is √[(5+2)²+(7+3)²] = √(49+100) = √149. Evaluate this — identify the error precisely, state the correct formula application, and give the correct distance.",
                distanceAndMidpoint:      "A student finds the midpoint of A(3,8) and B(7,2) as (5, 3) by computing ((3+7)/2, (8+2)/2) = (10/2, 10/2) = (5,5). Evaluate the student's working line by line — identify the arithmetic error, give the correct midpoint, and verify it using the distance formula.",
                linesAndGradients:        "A student says 'the tangent to the circle x²+y²=50 at the point (5,5) has gradient 1 because the radius to (5,5) has gradient (5−0)/(5−0) = 1, and the tangent has the same gradient as the radius.' Evaluate this claim — identify the error in the reasoning, state the correct gradient of the tangent, and write the correct equation of the tangent.",
                circlesOnPlane:           "A student is given x²+y²+4x−10y+20=0 and writes: 'Completing the square: (x+2)²+(y−5)²=20, so the centre is (2,−5) and radius = √20.' Evaluate every step — identify any sign errors in reading the centre, state the correct centre and radius, and verify by checking one point on the circle."
            }
        },

        create: {
            description: "Generate original coordinate geometry configurations, proofs, or models that satisfy specified constraints. Integrates multiple concepts into a coherent, internally consistent output.",
            cognitiveDemand: "Synthesis and original production. The student produces something that requires combining distance, midpoint, gradient, and circle concepts in a non-routine way.",
            verbs: ["Design", "Construct", "Formulate", "Prove", "Create", "Derive", "Develop"],
            whatDistinguishesThisLevel: "Create requires original output. Designing a set of points forming a specific quadrilateral, then proving its properties using coordinate methods, cannot be achieved by reproducing a memorised example.",
            examples: {
                coordinateGeometryBasics: "Design a coordinate geometry problem that requires both the distance formula and the midpoint formula to solve. Write the problem, provide the full solution, and then design a follow-up question that uses your result.",
                distanceAndMidpoint:      "Construct the coordinates of a right-angled isosceles triangle in the first quadrant with the right angle at the origin, legs of length 5√2, and hypotenuse from (5,5) to another vertex you must determine. Prove using the distance formula that the triangle has the specified properties.",
                linesAndGradients:        "Construct a quadrilateral whose vertices you choose (no vertex at the origin) such that (a) one pair of opposite sides is parallel, (b) the diagonals are perpendicular, and (c) neither diagonal passes through the origin. Write all four vertex coordinates, find all gradient evidence, and prove each stated property algebraically.",
                circlesOnPlane:           "Design a circle and a line such that they intersect at exactly two points with integer coordinates. Write both equations, verify the intersection points algebraically using substitution and the quadratic formula, and determine the length of the chord formed by the two intersection points."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can plot points correctly in the first quadrant but makes sign errors in quadrants 2, 3, and 4",
                "Knows the distance formula exists but inverts it to (y₂−y₁)² + (x₂−x₁)² without recognising this is algebraically identical, yet confuses the formula with the gradient formula",
                "Adds coordinates instead of averaging them when finding the midpoint",
                "Can state the circle equation (x−a)²+(y−b)²=r² but reads the centre as (a,b) = the numbers appearing in the equation rather than their opposites",
                "Cannot distinguish between the expanded form of a circle equation and a general quadratic"
            ],
            immediateNextSteps: [
                "For quadrant sign errors: draw and label all four quadrants with example points in each before every session. Use the mnemonic 'All Students Take Calculus' for the quadrant sign pattern of trig ratios — repurpose for coordinate signs (+,+), (−,+), (−,−), (+,−).",
                "For midpoint confusion: write out the formula as 'average the x-coordinates, average the y-coordinates' in words before substituting numbers. Verify every midpoint by checking that its distance to each endpoint is equal.",
                "For circle centre sign confusion: rewrite (x−a)²+(y−b)²=r² as 'x minus a, so centre x-coordinate is +a; y minus b, so centre y-coordinate is +b.' The centre coordinates are always opposite in sign to what appears in the brackets.",
                "For distance vs gradient confusion: label both formulas with the operation — distance ADDS the squared differences under a root; gradient DIVIDES one difference by the other. Never substitute into one formula using the structure of the other."
            ],
            misconceptionsToAddress: [
                "Midpoint = sum not average → write formula in words first",
                "Circle centre sign reversal → 'opposite of what you see in brackets'",
                "Distance formula vs gradient formula confusion → label the operation structure"
            ]
        },

        developing: {
            characteristics: [
                "Applies distance and midpoint formulas correctly for straightforward cases but makes errors when coordinates are negative or fractional",
                "Can find the gradient between two points and write the equation of a line, but struggles to find the perpendicular bisector without explicit prompting",
                "Completes the square for x-terms correctly but forgets to adjust the right-hand side of the circle equation after completing the square",
                "Can write the circle equation from centre and radius but cannot reverse the process from expanded form reliably",
                "Identifies that a tangent is perpendicular to the radius but applies the radius gradient rather than its negative reciprocal as the tangent gradient"
            ],
            immediateNextSteps: [
                "For perpendicular bisector: build the four-step habit — (1) midpoint, (2) gradient of segment, (3) negative reciprocal gradient, (4) equation through midpoint. Write these four steps as headings before starting every perpendicular bisector problem.",
                "For completing the square on circle equations: after completing the square on both sides, immediately write 'adjusted RHS = original RHS + constant added for x + constant added for y' as a check line. Never skip the right-hand side adjustment.",
                "For tangent gradient: draw a small diagram every time — sketch the circle, mark the centre, draw the radius to the given point, and label the radius gradient. Then write 'tangent gradient = negative reciprocal' and compute it before writing any equation.",
                "For negative coordinate errors: substitute negative coordinates inside brackets explicitly as (x−(−3)) = (x+3) and (y−(−2)) = (y+2) — never skip the bracket-within-bracket step."
            ],
            misconceptionsToAddress: [
                "Forgetting RHS adjustment in completing the square → mandatory check line",
                "Tangent gradient = radius gradient → always draw the radius diagram first",
                "Perpendicular bisector steps omitted → four-step heading template"
            ]
        },

        proficient: {
            characteristics: [
                "Applies distance, midpoint, and gradient formulas fluently with signed and fractional coordinates",
                "Finds the equation of a perpendicular bisector from scratch; identifies parallel and perpendicular lines from equations",
                "Converts circle equations between centre-radius and expanded forms by completing the square on both variables",
                "Finds intersection points of a line and circle using substitution and the quadratic formula",
                "Can determine from the discriminant whether a line is a secant, tangent, or external to a circle"
            ],
            immediateNextSteps: [
                "Deepen circle work: given three points, find the equation of the circle passing through all three by setting up three simultaneous equations in the expanded form parameters g, f, c. This requires solving a 3×3 linear system — connecting coordinate geometry to systems of equations.",
                "Explore the radical axis: subtract the equations of two circles to find the line through their intersection points. Connect this to the fact that subtracting two circle equations cancels the quadratic terms and yields a linear equation.",
                "Coordinate proofs: prove a specific geometric theorem (e.g. the angle in a semicircle is 90°) using coordinates. This requires combining gradient conditions with circle equations — a true synthesis task.",
                "Connect to vectors: express the gradient as the ratio of vector components and interpret the perpendicular condition m₁m₂ = −1 as the dot product of direction vectors being zero."
            ],
            misconceptionsToAddress: [
                "Discriminant interpretation confusion → tabulate all three cases (positive, zero, negative) with geometric meaning before every line-circle problem",
                "Assuming the circle through three points is unique — it always is (unless collinear) — but the calculation must be set up correctly as a system"
            ]
        },

        expert: {
            characteristics: [
                "Derives the distance and midpoint formulas from first principles using the Pythagorean theorem and the definition of average",
                "Proves geometric theorems using coordinate methods, choosing strategic axis placement to simplify algebra",
                "Finds the equation of a circle through three given points by solving a system of equations",
                "Applies the radical axis theorem; determines internal and external tangents between two circles",
                "Connects coordinate geometry to vectors, parametric equations, and calculus-readiness topics"
            ],
            immediateNextSteps: [
                "Derive the formula for the perpendicular distance from a point (x₀, y₀) to the line ax+by+c=0: d = |ax₀+by₀+c|/√(a²+b²). Use this to find the shortest distance from a point to a line without finding the foot of the perpendicular.",
                "Investigate the locus: find the equation of the locus of a point that moves so that its distance from A(2,0) is always twice its distance from B(−1,0). Show this locus is a circle and find its centre and radius. This previews the general definition of a circle as a locus.",
                "Explore parametric equations: express the circle x²+y²=r² in parametric form as x = r cos θ, y = r sin θ. Connect this to trigonometry and to the definition of sine and cosine on the unit circle.",
                "Apply coordinate geometry to conic sections: examine the general second-degree equation Ax²+Bxy+Cy²+Dx+Ey+F=0 and classify it as a circle, ellipse, parabola, or hyperbola using the discriminant B²−4AC."
            ],
            misconceptionsToAddress: [
                "Assuming all loci are circles — the locus definition must be checked algebraically each time",
                "Over-relying on numerical coordinates in proofs — expert-level proofs use general variable coordinates to cover all cases"
            ]
        }
    }
},

matrices: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored definitions, notation conventions, rules, and formulas about matrices from memory without requiring explanation of why they hold. The student reproduces facts accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot do this, they cannot access any higher level of matrix work.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation of why. 'The determinant of [[a,b],[c,d]] is ad − bc' is remember. 'The determinant is ad − bc, which means that if the two rows are proportional then ad = bc and the determinant is zero because...' crosses into understand.",
            examples: {
                matrixBasics:           "State the order of the matrix A = [[3,1,−2],[0,4,7]]. Identify the element a₂₃. Write the 3×3 identity matrix.",
                matrixOperations:       "State the compatibility condition for matrix multiplication. List two properties of matrix multiplication that differ from scalar multiplication.",
                determinantsAndInverses:"Write the formula for the determinant of a 2×2 matrix. State the condition on the determinant that must hold for a matrix to have an inverse.",
                matrixEquations:        "State the matrix equation that represents a system of linear equations. Write the formula for the solution vector X in terms of A and B."
            }
        },

        understand: {
            description: "Explain the meaning behind matrix facts — connect cause to effect, connect algebraic rules to geometric interpretations, and interpret what a result means. The student demonstrates WHY, not just WHAT.",
            cognitiveDemand: "Translation, interpretation, and connection. A correct explanation the student could not produce by memorising the definition demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Illustrate"],
            whatDistinguishesThisLevel: "Understand goes beyond remember by requiring a reason or mechanism. 'AB ≠ BA' is remember. 'AB ≠ BA because matrix multiplication computes different dot products depending on which matrix's rows are used — applying transformation B then A gives a different composed result than applying A then B, just as rotating then reflecting gives a different outcome than reflecting then rotating' is understand.",
            examples: {
                matrixBasics:           "Explain why it is meaningful to say that a 2×2 matrix represents a transformation of the plane. Connect the matrix-vector product Av to the image of the point v under the transformation.",
                matrixOperations:       "Explain why matrix multiplication is not commutative. Use a concrete geometric example involving two specific transformations (e.g. a rotation and a reflection) to illustrate why the order of multiplication matters.",
                determinantsAndInverses:"Explain why a matrix with det = 0 cannot have an inverse. Connect this to the geometric idea of what the matrix does to the plane and to the algebraic consequence when solving AX = B.",
                matrixEquations:        "Explain why the solution to AX = B is written as X = A⁻¹B and not X = BA⁻¹. What property of matrix multiplication makes the order critical here?"
            }
        },

        apply: {
            description: "Use known matrix formulas, rules, and procedures to solve a problem not seen before in exactly this form. The student selects the correct procedure, sets it up correctly, and carries it through without error.",
            cognitiveDemand: "Procedure execution in a novel situation. The student decides which formula or method applies, executes it correctly, and checks the result. A common failure is knowing the formula but making element-level arithmetic errors.",
            verbs: ["Calculate", "Compute", "Find", "Solve", "Determine", "Multiply", "Invert"],
            whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. Computing the product of two specific 2×2 matrices requires executing the dot product procedure for all four elements. Merely describing the procedure without executing it remains at understand.",
            examples: {
                matrixBasics:           "Given A = [[2,−1],[3,4]] and B = [[0,5],[−2,1]], compute 2A − B and Aᵀ. State the order of each result.",
                matrixOperations:       "Given A = [[1,3],[2,0]] and B = [[4,−1],[1,2]], compute AB and BA. Show all dot product calculations and confirm that AB ≠ BA.",
                determinantsAndInverses:"Find the inverse of A = [[7,3],[4,2]]. Show the determinant calculation, the adjugate matrix, and verify by computing AA⁻¹.",
                matrixEquations:        "Solve the system 3x + y = 11, x + 4y = 14 using the matrix equation AX = B. Show every step: constructing A, computing det(A), finding A⁻¹, and computing X = A⁻¹B. Verify in both original equations."
            }
        },

        analyze: {
            description: "Break down a matrix problem, result, or scenario to identify structure, classify the system, and derive conclusions not explicitly given. The student reaches a conclusion from evidence rather than executing a prescribed procedure.",
            cognitiveDemand: "Decomposition and inference from evidence. The student works from given information to a conclusion that requires reasoning rather than calculation alone.",
            verbs: ["Determine", "Classify", "Analyse", "Deduce", "Identify", "Compare", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion without being told the answer. 'Given the equations, determine without full solving whether the system has a unique solution' requires computing det(A) and interpreting its meaning — both the calculation and the interpretive step are required.",
            examples: {
                matrixBasics:           "A student is given three matrices A (2×3), B (3×2), and C (2×2). Analyse which products AB, BA, AC, CA, BC, CB are defined. For each defined product, state the order of the result. Identify which product, if any, is guaranteed to be a square matrix regardless of the entries.",
                matrixOperations:       "Given A = [[k, 2],[3, 6]], determine all values of k for which AB = BA for B = [[1,0],[0,2]]. Compute both products in terms of k, set them equal, and identify the condition on k. Interpret geometrically what the result means.",
                determinantsAndInverses:"Given the matrix A = [[2,4],[1,2]], analyse whether A is singular. Compute det(A), describe what the determinant value implies about the rows of A, state whether the system Ax = b can have a unique solution for any b, and give a geometric interpretation of what the transformation A does to the plane.",
                matrixEquations:        "Three systems of equations are presented: (a) A has det = 5; (b) B has det = 0 and is inconsistent when tested; (c) C has det = 0 but is consistent. Analyse each system — state the number of solutions, the geometric interpretation, and the algebraic signal that would appear if attempting to solve by matrix methods."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, accuracy, or quality of a matrix computation, method selection, or conclusion. The student identifies what is wrong, states the specific criterion by which it fails, and provides the correction.",
            cognitiveDemand: "Judgement with justification against a specific mathematical criterion. Simply stating 'this is wrong' is not evaluate-level — the student must specify the exact error, cite the rule violated, and produce the correct result.",
            verbs: ["Evaluate", "Critique", "Verify", "Assess", "Identify the error in", "Judge", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student computes AB = BA for two specific matrices — evaluate this claim' requires computing both products, identifying which claim is correct, explaining why commutativity fails in general, and stating when AB = BA does hold.",
            examples: {
                matrixBasics:           "A student claims that any two matrices of the same order can be multiplied together. Evaluate this claim — identify the correct condition for matrix multiplication, provide a specific counterexample using matrices of the same order, and state the correct compatibility condition.",
                matrixOperations:       "A student computes the product A = [[2,1],[3,4]] and B = [[1,0],[2,3]] and states AB = [[4,3],[11,12]]. Evaluate this work — verify the computation element by element, identify any error precisely (specifying which row-column combination is wrong and showing the correct dot product), and state the correct result.",
                determinantsAndInverses:"A student finds det([[3,6],[1,2]]) = (3)(2) − (6)(1) = 0, then writes the inverse as (1/0)·[[2,−6],[−1,3]] and concludes the inverse is undefined because of division by zero. Evaluate the student's process and conclusion separately — the determinant calculation may be correct, but evaluate whether the conclusion is stated with correct mathematical language and complete explanation.",
                matrixEquations:        "A student solves AX = B by writing X = BA⁻¹. Evaluate this solution method — state precisely which property of matrix arithmetic makes this invalid, show what the correct operation produces vs what the student computed, and construct a simple 2×2 numerical example demonstrating that BA⁻¹ ≠ A⁻¹B in general."
            }
        },

        create: {
            description: "Generate something new: a matrix model for a real-world context, an original system of equations encoded as a matrix equation, a transformation sequence with a specified outcome, or a problem set with specified properties. The student integrates multiple concepts into a coherent original output.",
            cognitiveDemand: "Synthesis and original production. The output did not exist before the student created it and requires combining multiple concepts. A strong create-level response is internally consistent, mathematically correct, and satisfies all specified constraints.",
            verbs: ["Design", "Construct", "Formulate", "Create", "Derive", "Develop", "Model"],
            whatDistinguishesThisLevel: "Create requires original output, not reproduction of a memorised example. Designing a matrix model for a specific context, constructing a transformation with a given determinant, or building a problem whose solution has prescribed properties all require creation — none can be done by recalling a prior example.",
            examples: {
                matrixBasics:           "Design a 2×2 matrix that represents a transformation with the following properties: it doubles all distances from the origin, it preserves orientation (positive determinant), and it maps the point (1, 0) to the point (0, 2). Write the matrix, verify each property using the determinant and a matrix-vector calculation, and describe geometrically what the transformation does to the unit square.",
                matrixOperations:       "Construct two 2×2 matrices A and B such that AB = O (the zero matrix) but A ≠ O and B ≠ O. Show your matrices satisfy this property. Explain what this result reveals about matrix multiplication — specifically, why the existence of AB = O does not imply A = O or B = O (unlike scalar multiplication where ab = 0 implies a = 0 or b = 0).",
                determinantsAndInverses:"Formulate a real-world scenario (not cryptography, not structural engineering) that requires finding the inverse of a 2×2 matrix to solve. Write the scenario, define all variables clearly, set up the matrix equation, compute the inverse, solve for the unknowns, and interpret the solution in context. Include a follow-up question that uses the same inverse to answer a second variant of the problem.",
                matrixEquations:        "Design a system of two equations in two unknowns that is modelled by a matrix equation AX = B where: the coefficient matrix A has determinant 6, the solution is x = 2 and y = −1, and both equations contain negative coefficients. Show how you constructed A and B, set up the full matrix equation, solve it using A⁻¹, and verify your solution satisfies both original equations."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Confuses the order of a matrix — states a 3×2 matrix as having 2 rows and 3 columns",
                "Attempts to add matrices of different orders without recognising the incompatibility",
                "Applies matrix multiplication element-by-element (as if it were addition), not using the dot product rule",
                "Cannot recall the determinant formula or confuses it as ad + bc instead of ad − bc",
                "Does not know what the identity matrix looks like or why it matters",
                "Treats matrix equations as scalar equations and writes A⁻¹ without checking that det(A) ≠ 0"
            ],
            immediateNextSteps: [
                "For order confusion: always write 'rows × columns' and label every matrix immediately on encounter — write '2×3: 2 rows, 3 columns' next to every matrix for the first ten problems. The row count is always stated first.",
                "For addition incompatibility: before adding or subtracting, write the order of each matrix and physically check they match. If orders differ, write 'UNDEFINED — orders do not match' and stop.",
                "For multiplication errors: practise the dot product of two vectors first (row vector times column vector gives a single number) before attempting full matrix multiplication. Do ten row-by-column dot products in isolation before attempting a 2×2 product.",
                "For determinant formula: write 'ad − bc' in large letters at the top of every page with a labelled diagram: a is top-left, b is top-right, c is bottom-left, d is bottom-right. The product goes main diagonal (\\) minus off-diagonal (/).",
                "For the identity matrix: draw I₂ = [[1,0],[0,1]] and verify AI = A for one specific matrix A — compute the product by hand. Repeat with IA = A. The identity matrix is the only matrix for which both products equal A."
            ],
            misconceptionsToAddress: [
                "Matrix multiplication is element-wise like addition → dot product drill in isolation first",
                "Order stated as columns × rows → label all matrices rows × columns on encounter",
                "Determinant is ad + bc → coloured diagonal diagram (main minus off)"
            ]
        },

        developing: {
            characteristics: [
                "Can add and scalar-multiply matrices correctly but makes sign errors in matrix multiplication (especially with negative entries)",
                "Computes the determinant correctly for simple matrices but makes errors when entries are fractions or large numbers",
                "Knows the inverse formula but applies the steps in the wrong order (divides before swapping/negating, or negates the diagonal instead of the off-diagonal)",
                "Sets up the matrix equation AX = B correctly but multiplies X = BA⁻¹ instead of X = A⁻¹B",
                "Can identify that a matrix has no inverse when told det = 0 but cannot recognise this algebraically in context"
            ],
            immediateNextSteps: [
                "For sign errors in multiplication: write each dot product on a separate line before adding — never compute a sum of products in one step. Circle every negative sign in the original matrices before beginning any multiplication.",
                "For inverse step order: memorise the sequence as 'Swap, Negate, Divide' — always in this order. After computing the determinant, write the adjugate matrix in a box before dividing; do not combine the division with the swap/negate step.",
                "For the order of AX = B solution: write 'X = A⁻¹B — inverse goes on the LEFT of B' on every problem. Then check: A⁻¹ is on the left, B is on the right. Any other arrangement is incorrect.",
                "For singular matrix recognition: practise computing det for ten matrices and classifying each as singular or non-singular before attempting any inverse. Build the habit of computing det as the first step of any inverse problem.",
                "For fraction determinants: multiply through to clear fractions before computing the determinant when possible, or carry fractions carefully using the a/b × c/d = ac/bd rule one term at a time."
            ],
            misconceptionsToAddress: [
                "Negating the diagonal in the inverse formula → mnemonic: 'Swap the diagonal (a↔d), negate the off-diagonal (b,c)'",
                "X = BA⁻¹ instead of A⁻¹B → write the rule as a boxed reminder before every matrix equation problem",
                "Sign errors in multiplication → separate line for each dot product term"
            ]
        },

        proficient: {
            characteristics: [
                "Multiplies matrices of varying orders correctly and checks compatibility before beginning",
                "Finds 2×2 determinants and inverses reliably, including with fractional entries",
                "Solves 2×2 matrix equations correctly, verifying the solution in both original equations",
                "Identifies singular matrices from their structure (e.g. proportional rows) without always computing the determinant",
                "Can write the standard transformation matrices for rotation by 90°/180° and reflections in the axes"
            ],
            immediateNextSteps: [
                "Extend to 3×3 determinants: practise cofactor expansion along row 1 for five 3×3 matrices. Connect to the 2×2 formula — each minor is itself a 2×2 determinant.",
                "Compose two transformations: compute the product of two standard transformation matrices and identify the resulting single transformation geometrically. Do this for five pairs (e.g. two rotations, a rotation then a reflection, two reflections).",
                "Explore eigenvalues (introductory): for a 2×2 matrix A, find values λ such that det(A − λI) = 0 — this is the characteristic equation. Solve for λ in two cases. Preview: these λ values are the scaling factors along the transformation's special directions.",
                "Connect to row reduction: solve a 3×3 system using Gaussian elimination — forward elimination reduces the matrix to upper triangular form, then back-substitution gives the solution. Compare efficiency with the inverse method for larger systems.",
                "Investigate the determinant of a product: verify det(AB) = det(A)·det(B) for three pairs of 2×2 matrices and explain why this is equivalent to saying area scale factors multiply when transformations are composed."
            ],
            misconceptionsToAddress: [
                "Assuming any square matrix is invertible → test det before attempting any inverse",
                "Applying the 2×2 inverse formula to 3×3 matrices → explicitly state the formula changes for larger matrices"
            ]
        },

        expert: {
            characteristics: [
                "Computes 3×3 determinants by cofactor expansion along any row or column, choosing the row with the most zeros for efficiency",
                "Interprets the determinant geometrically as a volume (or area) scale factor and connects its sign to orientation",
                "Solves systems of equations using both the inverse method and row reduction, choosing the method appropriate to the system size",
                "Composes multiple transformations and identifies the geometric meaning of the result from the matrix alone",
                "Recognises and works with symmetric matrices, connecting the property A = Aᵀ to real-world applications (covariance, stiffness)"
            ],
            immediateNextSteps: [
                "Derive the 2×2 inverse formula from first principles: set A·A⁻¹ = I and solve the four simultaneous equations for the four unknown entries of A⁻¹ — this shows that the formula is not arbitrary but a direct consequence of the definition of the inverse.",
                "Investigate LU decomposition: factorise a 3×3 matrix into the product of a lower triangular matrix L and an upper triangular matrix U. Solve LU·x = b by forward substitution then back substitution. Compare the computational cost to direct inversion.",
                "Explore eigenvalues and eigenvectors: for a 2×2 matrix A, find all λ and corresponding vectors v such that Av = λv. Connect to the geometry of the transformation — eigenvectors are directions that the transformation only scales (not rotates).",
                "Connect to the rank-nullity theorem: define the rank of a matrix as the number of linearly independent rows/columns, and connect rank to the dimension of the solution space of Ax = 0. Show that a singular matrix has rank less than n and therefore maps the plane onto a lower-dimensional subspace."
            ],
            misconceptionsToAddress: [
                "Assuming det(A + B) = det(A) + det(B) — this is false; verify with a counterexample and connect to why the determinant is multiplicative but not additive",
                "Believing all square matrices are diagonalisable — introduce the concept of repeated eigenvalues and defective matrices as a preview of more advanced linear algebra"
            ]
        }
    }
},

vectors: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored definitions, notation conventions, and formulas about vectors from memory without requiring explanation. The student reproduces facts accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot yet do this, they cannot access any higher level.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'The dot product of two perpendicular vectors is zero' is remember-level. Explaining why this follows from a · b = |a||b|cosθ when θ = 90° crosses into understand.",
            examples: {
                vectorBasics:       "State the formula for the magnitude of a vector (2, −3, 6). List the three standard unit vectors in 3D space and write each as a column vector.",
                vectorOperations:   "Write the rule for adding two vectors in component form. State the geometric interpretation of scalar multiplication by −1.",
                dotProduct:         "Write both the algebraic and geometric formulas for the dot product. State the condition on the dot product for two vectors to be perpendicular.",
                vectorApplications: "State the formula for the work done by a constant force F acting over displacement d. Write the formula for the displacement vector AB⃗ in terms of position vectors a and b."
            }
        },

        understand: {
            description: "Explain the meaning behind facts — connect magnitude to geometry, explain why the dot product is a scalar not a vector, interpret what the angle formula means physically.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, connects, or explains rather than repeating. A correct explanation the student could not produce by memorisation demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand goes beyond remember by requiring a mechanism or reason. 'The dot product is zero when vectors are perpendicular' is remember. 'The dot product is zero when vectors are perpendicular because a · b = |a||b|cosθ and cos90° = 0, meaning no component of one vector acts in the direction of the other' is understand.",
            examples: {
                vectorBasics:       "Explain why the magnitude formula |a| = √(a₁² + a₂²) is simply the Pythagorean theorem applied to the component right triangle. Draw the triangle and label each side.",
                vectorOperations:   "Explain the geometric difference between a + b and a − b using the triangle law. Why does −b point in the opposite direction to b, and what does this mean when you draw a − b?",
                dotProduct:         "Explain why the dot product a · b = |a||b|cosθ equals zero when θ = 90°. Connect this algebraically to the component formula and explain why it means the vectors share no common direction.",
                vectorApplications: "Explain why only the component of force in the direction of motion does work. Use the formula W = F · d = |F||d|cosθ and explain what happens when θ = 90° (force perpendicular to displacement)."
            }
        },

        apply: {
            description: "Use known formulas and rules to solve a vector problem not seen before in exactly this form. The student selects the correct tool and applies it accurately.",
            cognitiveDemand: "Procedure execution in a novel situation. The student decides which formula applies, sets it up correctly, and carries it through without error.",
            verbs: ["Calculate", "Find", "Compute", "Determine", "Solve", "Write the vector"],
            whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. Computing the angle between (2, 3) and (1, −1) requires the student to execute the dot product procedure for a specific pair.",
            examples: {
                vectorBasics:       "A point A has position vector (3, −1, 2) and B has position vector (−1, 4, 6). Find: (a) AB⃗, (b) |AB⃗|, (c) the unit vector in the direction of AB⃗.",
                vectorOperations:   "Given a = 2i − 3j and b = i + 4j, find: (a) a + 2b, (b) |a − b|, (c) the value of λ such that a + λb is parallel to the vector (7, 0).",
                dotProduct:         "Find the angle between vectors p = (3, 1, −2) and q = (0, 4, 1). Give your answer in degrees to one decimal place. Show all steps.",
                vectorApplications: "A force F = (6, −2) N acts on a particle which moves with displacement d = (3, 5) m. Calculate the work done by the force. A second force G = (−1, 4) N also acts. Find the work done by G over the same displacement."
            }
        },

        analyze: {
            description: "Decompose a vector problem, identify geometric relationships from algebraic evidence, and reach conclusions not stated in the problem. The student moves from information to derived insight.",
            cognitiveDemand: "Decomposition and inference from evidence. The student reaches a geometric or algebraic conclusion not given to them and justifies it.",
            verbs: ["Determine", "Identify", "Classify", "Analyse", "Deduce", "Compare", "Verify"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion without being told the method. 'Given three points, determine whether they are collinear' requires finding displacement vectors and testing for the scalar multiple relationship — the student must choose this approach.",
            examples: {
                vectorBasics:       "Points A, B, C have position vectors a = (1, 2), b = (3, 6), c = (5, 10). Determine whether A, B, C are collinear using vectors. Show the test used and state your conclusion.",
                vectorOperations:   "Vectors a = (2, k) and b = (k, 8) are given. Find all values of k for which: (a) a and b are parallel, (b) |a| = |b|. Explain the geometric meaning of each condition.",
                dotProduct:         "Triangle with vertices P = (0, 0), Q = (4, 0), R = (4, 3) is given. Using dot products, verify that the triangle contains a right angle and identify at which vertex it occurs.",
                vectorApplications: "Two forces F₁ = (a, 4) N and F₂ = (6, b) N act on a particle in equilibrium with a third force F₃ = (−8, −7) N. Determine the values of a and b. Then analyse whether F₁ and F₂ are perpendicular to each other."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a vector claim, solution, or method. The student identifies what is wrong, explains the criterion by which it fails, and states the correction.",
            cognitiveDemand: "Judgement with justification. Saying 'this is wrong' is not evaluate-level — the student must say why using a specific mathematical criterion and produce the correction.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Justify", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a mathematical standard. A student's claim about a dot product being a vector must be evaluated: identify the claim as incorrect, state that the dot product is a scalar by definition, explain the criterion (a · b = a₁b₁ + a₂b₂ produces a number not a tuple), and state the correct result.",
            examples: {
                vectorBasics:       "A student states that the unit vector in the direction of a = (3, 4) is (3, 4) / √(3² + 4²)² = (3, 4) / 625. Evaluate this work — identify the error in the denominator, state the correct calculation, find the correct unit vector, and verify your answer.",
                vectorOperations:   "A student computes a − b for a = (5, 2) and b = (1, −3) and obtains (4, −1). Evaluate this solution, showing the correct component-by-component calculation and identifying whether an error was made and where.",
                dotProduct:         "A student finds a · b = 14 for a = (2, 3) and b = (1, 4) and concludes 'the vectors are parallel because the dot product is positive.' Evaluate this reasoning fully — identify the logical error, state the correct condition for parallelism, test whether a and b are actually parallel, and find the angle between them.",
                vectorApplications: "A student calculates the work done by F = (3, −5) over displacement d = (4, 2) as |F||d|cos90° = 0, claiming the vectors are perpendicular. Evaluate this conclusion — compute the dot product directly to verify or refute the student's claim, and explain what the dot product tells you about the angle."
            }
        },

        create: {
            description: "Generate something original: a vector model for a real-world scenario, a proof using vectors, a problem designed to a specification, or a system of vector equations with given properties. The student integrates multiple concepts into a coherent original output.",
            cognitiveDemand: "Synthesis and original production. The student produces output that did not exist before, requiring the combination of multiple concepts.",
            verbs: ["Design", "Construct", "Formulate", "Derive", "Create", "Model", "Prove"],
            whatDistinguishesThisLevel: "Create requires original output. 'Design a 2D scenario modelled by a vector equation and prove a geometric property using dot products' cannot be completed by reproducing a memorised example — it requires generating a new scenario and applying multiple techniques to it.",
            examples: {
                vectorBasics:       "Create a 3D navigation scenario (not a ship and not a drone) that is modelled by two consecutive displacement vectors. Write the position vectors at each stage, find the resultant displacement, and interpret the magnitude in context. Design a follow-up question that requires the unit vector of the resultant.",
                vectorOperations:   "Construct two non-zero vectors a and b in 2D such that: |a + b| = |a − b|. Prove algebraically (using the magnitude formula and dot product) that your condition implies a · b = 0. Explain what this means geometrically for the parallelogram formed by a and b.",
                dotProduct:         "Design a real-world scenario (not a suitcase or a kayak) where the dot product is used to compute a physically meaningful quantity. Write the vectors involved, compute the dot product, interpret the result in context, and design two follow-up questions at different difficulty levels.",
                vectorApplications: "Formulate a vector proof of the following: if ABCD is a rectangle with position vectors a, b, c, d, then the diagonals AC⃗ and BD⃗ are equal in length. State any properties of a rectangle you use as vector conditions (e.g. perpendicular adjacent sides), carry out the proof using position and displacement vectors, and extend by determining under which additional condition the diagonals of a quadrilateral bisect each other."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can identify that a vector has magnitude and direction but cannot write a vector in component form from a diagram",
                "Confuses speed (scalar) with velocity (vector) and magnitude with the vector itself",
                "Computes magnitude as a₁ + a₂ (adds components) rather than √(a₁² + a₂²)",
                "Cannot perform vector addition — adds magnitudes instead of components",
                "Believes the dot product is a vector, not a scalar",
                "Cannot identify the displacement vector AB⃗ — may write a − b instead of b − a"
            ],
            immediateNextSteps: [
                "For magnitude confusion: draw the component right triangle for three different vectors. Label the horizontal leg a₁, the vertical leg a₂, and the hypotenuse |a|. Apply Pythagoras each time. Only after this diagram is automatic should any formula be attempted.",
                "For vector addition: use the triangle law physically — draw a on paper, place b at the tip of a, and draw the resultant from start to end. Then confirm that the components add numerically. Do 5 geometric additions before any algebraic ones.",
                "For scalar vs vector confusion in dot product: after every dot product calculation, write the result as a single number and draw a circle around it, labelling it 'SCALAR'. This physical action interrupts the vector-result assumption.",
                "For AB⃗ direction: use the mnemonic 'B minus A — you go from A to B, so subtract where you started'. Write this on top of every displacement problem until automatic.",
                "For speed/velocity: create a two-column table — left: scalars (speed, distance, mass, time, temperature); right: vectors (velocity, displacement, force, acceleration). Add examples from daily life to each column."
            ],
            misconceptionsToAddress: [
                "Magnitude = sum of components → draw Pythagoras triangle for every magnitude calculation",
                "Vector addition = scalar addition of magnitudes → triangle law physical drawing first",
                "Dot product is a vector → circle the scalar result on every calculation"
            ]
        },

        developing: {
            characteristics: [
                "Can add and subtract vectors in component form but makes sign errors with negative components",
                "Can compute magnitude correctly in 2D but forgets the third component in 3D",
                "Finds the dot product correctly using the algebraic formula but cannot connect it to the angle formula",
                "Can state the perpendicularity condition (dot product = 0) but cannot use it to solve for an unknown in a vector",
                "Confuses the condition for parallel vectors (scalar multiple) with the condition for perpendicular vectors (dot product = 0)"
            ],
            immediateNextSteps: [
                "For sign errors in components: before adding or subtracting, write each component on a separate line with its sign explicitly shown. Never condense two operations into one line until accuracy is consistent.",
                "For 3D magnitude: write the formula |a| = √(a₁² + a₂² + a₃²) at the top of every 3D problem. After computing, count the number of squared terms — it must equal the number of dimensions.",
                "For dot product to angle connection: practise the three-step sequence on 5 pairs of vectors: (1) compute a · b algebraically, (2) compute |a| and |b|, (3) substitute into cosθ = (a · b) / (|a||b|) and use arccos. Do not skip directly to the angle — write all three steps every time.",
                "For parallel vs perpendicular confusion: make a comparison card with two columns. Parallel: a = kb (scalar multiple, same/opposite direction, dot product = |a||b| or −|a||b|). Perpendicular: a · b = 0 (90°, no scalar multiple). Review before every problem.",
                "For using perpendicularity to find unknowns: always set up the equation a · b = 0 explicitly before solving. Never try to spot the value of t by inspection."
            ],
            misconceptionsToAddress: [
                "Parallel = perpendicular confusion → two-column comparison card, review before every problem",
                "Angle formula skipped → enforce three-step sequence written out fully",
                "3D magnitude missing component → count squared terms before taking square root"
            ]
        },

        proficient: {
            characteristics: [
                "Performs all vector operations (addition, subtraction, scalar multiplication, magnitude, dot product) fluently and accurately in both 2D and 3D",
                "Finds angles between vectors using the dot product formula without prompting",
                "Tests for parallel and perpendicular vectors using the correct conditions",
                "Finds displacement vectors and midpoints using position vector subtraction",
                "Applies vectors to resultant force, relative velocity, and work done problems"
            ],
            immediateNextSteps: [
                "Extend to vector projection: given a = (3, 5) and b = (1, 0), compute the projection of a onto b algebraically and verify geometrically by drawing the perpendicular from a to the line of b. Then compute the projection onto a non-axis vector and interpret the result.",
                "Explore collinearity proofs: given three points A, B, C, prove they are collinear by showing AB⃗ = λAC⃗ for some scalar λ. Practice with five sets of points before generalising the technique to general position vectors a, b, c.",
                "Connect to linear algebra: show that any vector in 2D can be written as a linear combination of i and j. Then show that any two non-parallel, non-zero vectors form a basis for 2D — any third vector can be expressed in terms of them. This previews linear independence.",
                "Apply the section formula to internal and external division: find the point P dividing AB externally in ratio 2:1 and interpret geometrically what 'external division' means (P lies on the line AB but outside the segment).",
                "Investigate perpendicular distance from a point to a line using projection: find the distance from point C to the line through A and B as |AC⃗ − proj_{AB⃗}(AC⃗)|."
            ],
            misconceptionsToAddress: [
                "Projection confused with component — a component is a scalar (the length), a projection is a vector (in the direction of b); make this distinction explicit",
                "Collinearity confused with equality — collinear means one vector is a scalar multiple of another, not that the vectors are equal"
            ]
        },

        expert: {
            characteristics: [
                "Constructs vector proofs of geometric results (midpoint theorem, collinearity, parallelogram law) from first principles",
                "Uses the dot product to establish geometric properties (perpendicular diagonals, equal lengths) without coordinates",
                "Applies relative velocity and vector resolution to multi-step applied problems",
                "Works fluently in 3D including finding angles between 3D vectors and projecting onto 3D axes",
                "Connects vectors to linear algebra (linear combinations, basis, linear independence)"
            ],
            immediateNextSteps: [
                "Derive the cosine rule using vectors: express a triangle with sides a, b, c as vectors, use a + b + c = 0, compute |c|² = c · c by substituting c = −a − b, and expand using dot product properties. This produces c² = a² + b² − 2abcosC — the cosine rule derived vectorially.",
                "Investigate the cross product (3D): define a × b as the vector perpendicular to both a and b with magnitude |a||b|sinθ. Compute a × b for a = (1, 0, 0) and b = (0, 1, 0) to recover k = (0, 0, 1). Contrast with dot product: dot product gives a scalar measuring alignment; cross product gives a vector measuring perpendicularity.",
                "Explore vector equations of lines: express the line through point A with direction d as r = a + td. Find the point where two lines intersect (solve the system) or establish that they are skew. This previews Further Mathematics mechanics and geometry.",
                "Apply vectors to moments in mechanics: moment = r × F (cross product of position and force vectors). Compute the moment of a force about a point and interpret the magnitude as the rotational effect."
            ],
            misconceptionsToAddress: [
                "Cross product confused with dot product → contrast output type (vector vs scalar) and application (area/perpendicularity vs angle/work)",
                "Cosine rule seen as separate from vectors → derive it vectorially to unify the two topics"
            ]
        }
    }
},

const EndSection7 = "close"