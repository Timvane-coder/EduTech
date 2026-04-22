

initializeStemTopics() {

this.lessons = {




probability: {
    title: "Probability: Foundations, Rules, and Applications",

    databaseLinks: {
        misconceptions: [
            'basicProbability',
            'probabilityRules',
            'conditionalProbability',
            'combinedEvents',
            'distributions'
        ],
        contextualScenarios: [
            'basicProbability',
            'probabilityRules',
            'conditionalProbability',
            'combinedEvents'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'graphingPractice',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'workedExampleAnalysis'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'basicProbability',
            'probabilityRules',
            'conditionalProbability',
            'combinedEvents'
        ]
    },

    conceptLinks: {
        "Probability measures the likelihood of an event occurring on a scale from 0 to 1": {
            misconceptions:       ['basicProbability'],
            scenarios:            ['basicProbability'],
            studyTips:            ['diagrams', 'flashcards'],
            assessmentRubrics:    ['remember', 'understand'],
            assessmentQuestions:  ['basicProbability']
        },
        "The addition rule calculates the probability of either of two events occurring": {
            misconceptions:       ['probabilityRules'],
            scenarios:            ['probabilityRules'],
            studyTips:            ['comparisonTables', 'flashcards'],
            assessmentRubrics:    ['remember', 'understand', 'apply'],
            assessmentQuestions:  ['probabilityRules']
        },
        "The multiplication rule calculates the probability of both of two events occurring": {
            misconceptions:       ['probabilityRules', 'conditionalProbability'],
            scenarios:            ['probabilityRules'],
            studyTips:            ['comparisonTables', 'diagrams'],
            assessmentRubrics:    ['understand', 'apply', 'analyze'],
            assessmentQuestions:  ['probabilityRules']
        },
        "Conditional probability measures the likelihood of an event given that another has occurred": {
            misconceptions:       ['conditionalProbability'],
            scenarios:            ['conditionalProbability'],
            studyTips:            ['diagrams', 'workedExampleAnalysis'],
            assessmentRubrics:    ['apply', 'analyze', 'evaluate'],
            assessmentQuestions:  ['conditionalProbability']
        },
        "Combined events and sample spaces systematically enumerate all possible outcomes": {
            misconceptions:       ['combinedEvents'],
            scenarios:            ['combinedEvents'],
            studyTips:            ['diagrams', 'comparisonTables', 'graphingPractice'],
            assessmentRubrics:    ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions:  ['combinedEvents']
        }
    },

    topicIntroduction: {
        overview: "Probability is the mathematics of uncertainty. It provides a precise numerical language for describing how likely events are — from the roll of a die to the reliability of a medical test, from weather forecasting to financial risk. In this lesson we build the complete framework: defining probability, enumerating sample spaces, applying the addition and multiplication rules, understanding independence and conditional probability, and connecting these ideas to real-world decision-making.",
        whyItMatters: "Every field that involves uncertainty uses probability. Medical researchers calculate the probability that a treatment works. Engineers calculate the probability that a system fails. Insurance companies price risk using probability models. Data scientists build classifiers using conditional probability (Bayes' theorem). Probability is the language in which the world's uncertainty is measured, and fluency in it is essential for any quantitative career.",
        bigPicture: "Probability assigns a number between 0 and 1 to every event in a sample space. A probability of 0 means the event cannot happen; a probability of 1 means it is certain. All other events fall somewhere in between. The rules of probability — addition, multiplication, complementation — are constraints that ensure these numbers are consistent and meaningful. Conditional probability refines our estimate of likelihood when new information arrives. Every probability calculation is ultimately an exercise in careful, systematic counting of outcomes.",
        priorKnowledge: [
            "Fractions, decimals, and percentages — and how to convert between them",
            "Basic set notation: union (∪), intersection (∩), complement (Aᶜ or A')",
            "Ratio and proportion",
            "Basic combinatorics: the idea of counting outcomes systematically",
            "The coordinate plane (for probability distributions and frequency diagrams)"
        ],
        topicRoadmap: [
            "Defining probability: the probability scale, experimental vs theoretical probability, and the Law of Large Numbers",
            "Sample spaces and events: listing outcomes, Venn diagrams, and two-way tables",
            "The complement rule: P(Aᶜ) = 1 − P(A)",
            "The addition rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B); mutually exclusive events",
            "The multiplication rule: P(A ∩ B) = P(A) × P(B|A); independent events",
            "Conditional probability: P(A|B) = P(A ∩ B) / P(B) and tree diagrams",
            "Bayes' theorem: reversing conditional probability",
            "Discrete probability distributions and expected value"
        ]
    },

    concepts: [
        "Probability measures the likelihood of an event occurring on a scale from 0 to 1",
        "The sample space is the set of all possible outcomes of an experiment",
        "The complement of an event A is everything in the sample space that is not A",
        "The addition rule calculates the probability of either of two events occurring",
        "The multiplication rule calculates the probability of both of two events occurring",
        "Conditional probability measures the likelihood of an event given that another has occurred",
        "Two events are independent if the occurrence of one does not affect the probability of the other",
        "Expected value is the long-run average outcome of a random process"
    ],

    theory: "Probability is a real-valued function defined on a sample space Ω that assigns to every event A a number P(A) satisfying three axioms (Kolmogorov, 1933): (1) P(A) ≥ 0 for all events A; (2) P(Ω) = 1; (3) for mutually exclusive events A and B, P(A ∪ B) = P(A) + P(B). All rules of probability — the complement rule, addition rule, multiplication rule, and Bayes' theorem — are consequences of these three axioms.",

    keyDefinitions: {
        "Experiment": "A process with an uncertain outcome that can be repeated under identical conditions",
        "Sample Space (Ω or S)": "The set of all possible outcomes of an experiment (e.g. {H, T} for a coin flip)",
        "Event": "A subset of the sample space — one or more outcomes grouped together (e.g. 'rolling an even number')",
        "Probability P(A)": "A number between 0 and 1 (inclusive) measuring the likelihood of event A",
        "Complement (Aᶜ)": "All outcomes in the sample space that are NOT in event A; P(Aᶜ) = 1 − P(A)",
        "Mutually Exclusive": "Two events that cannot both occur at the same time; P(A ∩ B) = 0",
        "Independent Events": "Two events where the occurrence of one does not change the probability of the other; P(A ∩ B) = P(A) × P(B)",
        "Dependent Events": "Two events where the occurrence of one changes the probability of the other",
        "Conditional Probability P(A|B)": "The probability of event A given that event B has already occurred; P(A|B) = P(A ∩ B) / P(B)",
        "Union (A ∪ B)": "The event that A or B or both occur",
        "Intersection (A ∩ B)": "The event that both A and B occur",
        "Expected Value E(X)": "The long-run average of a random variable X; E(X) = Σ x · P(X = x)"
    },

    probabilityScale: {
        impossible:   { value: 0,    description: "The event cannot occur under any circumstances", example: "Rolling a 7 on a standard die" },
        unlikely:     { value: "0 < P < 0.5", description: "The event occurs less often than not in the long run", example: "Rolling a 6 on a fair die: P = 1/6 ≈ 0.167" },
        evensChance:  { value: 0.5,  description: "The event is equally likely to occur or not occur", example: "Flipping heads on a fair coin: P = 1/2" },
        likely:       { value: "0.5 < P < 1", description: "The event occurs more often than not in the long run", example: "Rolling a number less than 5 on a fair die: P = 4/6 ≈ 0.667" },
        certain:      { value: 1,    description: "The event is guaranteed to occur", example: "Rolling a number between 1 and 6 on a standard die" }
    },

    theoreticalVsExperimental: {
        theoretical: {
            definition: "Calculated by reasoning about equally likely outcomes: P(A) = (number of outcomes in A) / (total number of equally likely outcomes)",
            assumption: "All outcomes in the sample space are equally likely",
            example: "P(rolling a 3) = 1/6 — there is one favourable outcome out of six equally likely outcomes",
            limitation: "Requires equally likely outcomes — does not apply directly to biased dice, loaded coins, or complex real-world events"
        },
        experimental: {
            definition: "Estimated from data: P(A) ≈ (number of times A occurred) / (total number of trials)",
            assumption: "The experiment is repeated many times under identical conditions",
            example: "A die is rolled 600 times and 3 appears 112 times: P(3) ≈ 112/600 ≈ 0.187",
            lawOfLargeNumbers: "As the number of trials increases, the experimental probability converges to the theoretical probability. With 6000 rolls instead of 600, the experimental P(3) would be closer to 1/6 = 0.167."
        },
        workedExample: {
            problem: "A drawing pin is dropped 200 times. It lands point-up 74 times and point-down 126 times. Estimate the probability it lands point-up and explain why theoretical probability cannot be applied here.",
            solution: [
                "Step 1 — Apply the experimental probability formula: P(point-up) = 74/200 = 0.37",
                "Step 2 — Express as a percentage: 37%",
                "Step 3 — Explain why theoretical probability fails: the two outcomes (point-up, point-down) are not equally likely — the physical shape of the drawing pin makes one outcome more probable than the other. Theoretical probability requires equally likely outcomes, so it cannot be applied.",
                "Step 4 — Interpret: if we dropped the pin 1000 times, we would expect approximately 370 point-up results."
            ]
        }
    },

    sampleSpacesAndEvents: {
        listing: {
            description: "For small experiments, list all outcomes systematically using a sample space diagram, table, or tree diagram",
            workedExample: {
                problem: "Two fair dice are rolled simultaneously. List the sample space and find P(sum = 7).",
                solution: [
                    "Step 1 — Construct the sample space using a 6×6 grid: rows represent Die 1 (1–6), columns represent Die 2 (1–6). Total outcomes = 36.",
                    "Step 2 — Identify outcomes where sum = 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — there are 6 such outcomes.",
                    "Step 3 — Apply the formula: P(sum = 7) = 6/36 = 1/6 ≈ 0.167",
                    "Interpretation: in the long run, approximately 1 in every 6 rolls of two dice will produce a sum of 7 — the most likely single sum."
                ]
            }
        },
        vennDiagrams: {
            description: "Venn diagrams represent events as overlapping circles within a rectangle (the sample space). The overlap represents the intersection A ∩ B.",
            regions: {
                AOnly:      "Outcomes in A but not B: P(A) − P(A ∩ B)",
                BOnly:      "Outcomes in B but not A: P(B) − P(A ∩ B)",
                AAndB:      "Outcomes in both A and B: P(A ∩ B)",
                Neither:    "Outcomes in neither A nor B: 1 − P(A ∪ B)"
            },
            workedExample: {
                problem: "In a class of 30 students, 18 study French (F), 12 study Spanish (S), and 7 study both. Find P(F), P(S), P(F ∩ S), P(F ∪ S), and P(neither).",
                solution: [
                    "Step 1 — Identify values: |F| = 18, |S| = 12, |F ∩ S| = 7, total = 30",
                    "Step 2 — P(F) = 18/30 = 3/5; P(S) = 12/30 = 2/5; P(F ∩ S) = 7/30",
                    "Step 3 — Apply the addition rule: P(F ∪ S) = P(F) + P(S) − P(F ∩ S) = 18/30 + 12/30 − 7/30 = 23/30",
                    "Step 4 — P(neither) = 1 − P(F ∪ S) = 1 − 23/30 = 7/30",
                    "Interpretation: 7 students study neither language; 7 students study both; 11 study French only; 5 study Spanish only."
                ]
            }
        },
        twoWayTables: {
            description: "Two-way (contingency) tables organise outcomes by two categorical variables. Each cell shows frequency or probability. Marginal totals appear in the final row and column.",
            workedExample: {
                problem: "200 people are surveyed on exercise habits and health status. 90 exercise regularly: 72 are healthy, 18 are not. 110 do not exercise regularly: 44 are healthy, 66 are not. Construct the two-way table and find P(healthy | exercises).",
                solution: [
                    "Step 1 — Construct the table:",
                    "               | Healthy | Not Healthy | Total",
                    "Exercises      |   72    |     18      |   90",
                    "Does not exercise |  44  |     66      |  110",
                    "Total          |  116    |     84      |  200",
                    "Step 2 — P(healthy | exercises) = 72/90 = 4/5 = 0.8",
                    "Step 3 — P(healthy | does not exercise) = 44/110 = 2/5 = 0.4",
                    "Interpretation: among those who exercise, 80% are healthy — twice the rate (40%) among non-exercisers. This does not prove causation, but the association is strong."
                ]
            }
        }
    },

    complementRule: {
        rule: "P(Aᶜ) = 1 − P(A)",
        rationale: "An event either occurs or it does not — these two possibilities are mutually exclusive and exhaustive, so their probabilities sum to 1.",
        workedExamples: [
            {
                problem: "The probability that a flight is delayed is 0.15. Find the probability that the flight is on time.",
                solution: [
                    "P(on time) = 1 − P(delayed) = 1 − 0.15 = 0.85",
                    "Interpretation: 85% of flights are on time."
                ]
            },
            {
                problem: "A bag contains 3 red, 5 blue, and 2 green counters. Find the probability of NOT drawing a blue counter.",
                solution: [
                    "Step 1 — Total counters: 3 + 5 + 2 = 10",
                    "Step 2 — P(blue) = 5/10 = 1/2",
                    "Step 3 — P(not blue) = 1 − 1/2 = 1/2",
                    "Alternative: P(not blue) = (3 + 2)/10 = 5/10 = 1/2 — direct counting confirms the result."
                ]
            }
        ]
    },

    additionRule: {
        generalRule: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
        rationale: "Adding P(A) and P(B) counts the intersection P(A ∩ B) twice — once in each term. Subtracting it once corrects for this double-counting.",
        mutuallyExclusiveCase: {
            rule: "If A and B are mutually exclusive: P(A ∪ B) = P(A) + P(B)",
            rationale: "Mutually exclusive events cannot both occur simultaneously, so P(A ∩ B) = 0 and the correction term disappears.",
            example: "A single die is rolled. P(rolling a 2 or a 5) = P(2) + P(5) = 1/6 + 1/6 = 2/6 = 1/3."
        },
        workedExample: {
            problem: "A card is drawn from a standard 52-card deck. Find the probability that it is a Heart or a King.",
            solution: [
                "Step 1 — Identify the events: A = Heart (13 cards), B = King (4 cards), A ∩ B = King of Hearts (1 card)",
                "Step 2 — Note these events are NOT mutually exclusive — the King of Hearts is in both sets",
                "Step 3 — Apply the general addition rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
                "Step 4 — Substitute: P(Heart ∪ King) = 13/52 + 4/52 − 1/52 = 16/52 = 4/13",
                "Check: count directly — 13 hearts + 3 non-heart kings = 16 favourable cards → 16/52 = 4/13 ✓"
            ]
        }
    },

    multiplicationRule: {
        generalRule: "P(A ∩ B) = P(A) × P(B|A)",
        rationale: "The probability that both A and B occur equals the probability A occurs multiplied by the probability B occurs given that A has already occurred.",
        independentCase: {
            rule: "If A and B are independent: P(A ∩ B) = P(A) × P(B)",
            rationale: "Independence means P(B|A) = P(B) — knowing A occurred gives no information about B — so the conditional probability simplifies to the unconditional probability.",
            test: "A and B are independent if and only if P(A ∩ B) = P(A) × P(B). This can be used both to verify independence and to calculate joint probabilities."
        },
        workedExamples: [
            {
                type: "Independent events (with replacement)",
                problem: "A bag contains 4 red and 6 blue balls. A ball is drawn, its colour noted, and replaced. A second ball is then drawn. Find P(both red).",
                solution: [
                    "Step 1 — Since the ball is replaced, the second draw is independent of the first",
                    "Step 2 — P(red on first draw) = 4/10 = 2/5",
                    "Step 3 — P(red on second draw) = 4/10 = 2/5 (bag composition unchanged)",
                    "Step 4 — P(both red) = 2/5 × 2/5 = 4/25 = 0.16"
                ]
            },
            {
                type: "Dependent events (without replacement)",
                problem: "A bag contains 4 red and 6 blue balls. A ball is drawn and NOT replaced. A second ball is then drawn. Find P(both red).",
                solution: [
                    "Step 1 — The events are dependent: removing a ball changes the bag composition",
                    "Step 2 — P(red on first draw) = 4/10 = 2/5",
                    "Step 3 — Given first ball was red, 3 red and 6 blue remain (9 total): P(red on second | red on first) = 3/9 = 1/3",
                    "Step 4 — Apply the general multiplication rule: P(both red) = P(first red) × P(second red | first red) = 2/5 × 1/3 = 2/15",
                    "Interpretation: without replacement, the probability of two reds drops from 4/25 = 0.16 to 2/15 ≈ 0.133, because the pool of red balls is depleted."
                ]
            }
        ]
    },

    conditionalProbability: {
        definition: "P(A|B) = P(A ∩ B) / P(B), provided P(B) > 0",
        interpretation: "P(A|B) is read as 'the probability of A given B'. It represents the probability of A within the restricted sample space where B is known to have occurred.",
        treeDiagrams: {
            description: "Tree diagrams systematically display conditional probabilities across sequential events. Each branch shows one outcome; the probability on each branch is the conditional probability given all previous branches. The probability of any path is the product of all branch probabilities along that path.",
            workedExample: {
                problem: "A factory has two machines. Machine A produces 60% of items; Machine B produces 40%. Machine A produces 3% defective items; Machine B produces 5% defective. An item is selected at random and found to be defective. Find the probability it came from Machine A.",
                solution: [
                    "Step 1 — Draw the tree: First branches — P(Machine A) = 0.6, P(Machine B) = 0.4",
                    "Step 2 — Second branches from A: P(defective | A) = 0.03, P(not defective | A) = 0.97",
                    "Step 3 — Second branches from B: P(defective | B) = 0.05, P(not defective | B) = 0.95",
                    "Step 4 — Calculate path probabilities:",
                    "  P(A and defective) = 0.6 × 0.03 = 0.018",
                    "  P(B and defective) = 0.4 × 0.05 = 0.020",
                    "Step 5 — Total P(defective) = 0.018 + 0.020 = 0.038",
                    "Step 6 — Apply conditional probability: P(A | defective) = P(A and defective) / P(defective) = 0.018 / 0.038 ≈ 0.474",
                    "Interpretation: despite Machine A producing more items overall, a defective item is roughly equally likely to have come from either machine because Machine B's defect rate is higher."
                ]
            }
        },
        bayesTheorem: {
            statement: "P(A|B) = [P(B|A) × P(A)] / P(B)",
            derivation: [
                "From the definition of conditional probability: P(A|B) = P(A ∩ B) / P(B)",
                "From the multiplication rule: P(A ∩ B) = P(B|A) × P(A)",
                "Substituting: P(A|B) = [P(B|A) × P(A)] / P(B)"
            ],
            interpretation: "Bayes' theorem allows us to reverse conditional probabilities. Given P(B|A) — the probability of evidence B given hypothesis A — it calculates P(A|B) — the probability of hypothesis A given the observed evidence B. This is the foundation of Bayesian inference.",
            medicalWorkedExample: {
                problem: "A disease affects 1% of a population. A test for the disease has 95% sensitivity (correctly identifies 95% of diseased individuals) and 90% specificity (correctly identifies 90% of healthy individuals). A person tests positive. Find the probability they actually have the disease.",
                solution: [
                    "Step 1 — Define events: D = has disease, T⁺ = tests positive",
                    "Step 2 — Known probabilities: P(D) = 0.01, P(Dᶜ) = 0.99, P(T⁺|D) = 0.95, P(T⁺|Dᶜ) = 0.10 (false positive rate = 1 − 0.90)",
                    "Step 3 — Calculate P(T⁺) using the total probability formula:",
                    "  P(T⁺) = P(T⁺|D) × P(D) + P(T⁺|Dᶜ) × P(Dᶜ)",
                    "  P(T⁺) = 0.95 × 0.01 + 0.10 × 0.99 = 0.0095 + 0.099 = 0.1085",
                    "Step 4 — Apply Bayes' theorem: P(D|T⁺) = [P(T⁺|D) × P(D)] / P(T⁺) = 0.0095 / 0.1085 ≈ 0.0876",
                    "Interpretation: even with a positive test result, there is only an 8.76% probability of actually having the disease. This counterintuitive result arises because the disease is rare — most positive tests come from the large healthy population rather than the small diseased population.",
                    "This is one of the most important and surprising results in applied probability, with profound implications for medical screening policy."
                ]
            }
        }
    },

    independenceVerification: {
        formalTest: "Events A and B are independent if and only if P(A ∩ B) = P(A) × P(B)",
        equivalentConditions: [
            "P(A|B) = P(A) — knowing B occurred does not change the probability of A",
            "P(B|A) = P(B) — knowing A occurred does not change the probability of B",
            "P(A ∩ B) = P(A) × P(B) — the joint probability equals the product of marginal probabilities"
        ],
        workedExample: {
            problem: "From a two-way table: P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.20. Are A and B independent?",
            solution: [
                "Step 1 — Test: P(A) × P(B) = 0.5 × 0.4 = 0.20",
                "Step 2 — Compare: P(A ∩ B) = 0.20 = P(A) × P(B)",
                "Conclusion: A and B are independent — knowing whether B occurred gives no information about whether A occurred."
            ]
        },
        commonConfusion: "Independence and mutual exclusivity are NOT the same. Mutually exclusive events with non-zero probabilities are actually DEPENDENT — if A occurs, B definitely cannot occur, so knowing A occurred drastically changes P(B)."
    },

    expectedValue: {
        definition: "E(X) = Σ x · P(X = x) — the sum of each possible value multiplied by its probability",
        interpretation: "The expected value is the long-run average outcome. It is not necessarily a value that X can actually take; it is the balance point of the probability distribution.",
        workedExamples: [
            {
                problem: "A game costs £2 to play. A fair die is rolled: rolling a 6 wins £10; rolling a 4 or 5 wins £3; rolling 1, 2, or 3 wins nothing. Calculate the expected profit per game.",
                solution: [
                    "Step 1 — Define profit X (after subtracting entry cost): roll 6 → profit = £10 − £2 = £8; roll 4 or 5 → £3 − £2 = £1; roll 1, 2, or 3 → £0 − £2 = −£2",
                    "Step 2 — Assign probabilities: P(X = 8) = 1/6; P(X = 1) = 2/6 = 1/3; P(X = −2) = 3/6 = 1/2",
                    "Step 3 — Calculate E(X): E(X) = 8 × (1/6) + 1 × (1/3) + (−2) × (1/2)",
                    "Step 4 — Evaluate: E(X) = 8/6 + 2/6 − 6/6 = 4/6 = 2/3 ≈ £0.67",
                    "Interpretation: on average, each game yields a profit of approximately 67 pence. In the long run, this game favours the player — though any single game might result in a £2 loss."
                ]
            },
            {
                problem: "An insurance company sells a policy for £150 per year. The probability of a claim is 0.02, and the average claim costs the company £5000. Calculate the expected profit per policy.",
                solution: [
                    "Step 1 — Outcomes: no claim (probability 0.98): profit = £150; claim (probability 0.02): profit = £150 − £5000 = −£4850",
                    "Step 2 — E(profit) = 150 × 0.98 + (−4850) × 0.02",
                    "Step 3 — Evaluate: E(profit) = 147 − 97 = £50",
                    "Interpretation: the company expects to make £50 profit per policy per year on average. This positive expected value is why insurance companies are profitable despite paying large individual claims."
                ]
            }
        ]
    },

    combinedEventsDiagrams: {
        treeDiagramProcedure: [
            "Draw one branch for each outcome of the first event, labelled with its probability",
            "From each first-level branch, draw one branch for each outcome of the second event, labelled with the conditional probability",
            "Multiply along branches to find the probability of each complete path",
            "Add path probabilities for outcomes that satisfy the desired event",
            "Check: all path probabilities must sum to 1"
        ],
        twoWayTableProcedure: [
            "Draw a table with one categorical variable as rows and the other as columns",
            "Enter frequencies or probabilities in each cell",
            "Complete the marginal totals (row totals and column totals)",
            "Verify the grand total equals the sample size (for frequencies) or 1 (for probabilities)",
            "Read off probabilities directly: P(A) = row total / grand total; P(A ∩ B) = cell value / grand total; P(A|B) = cell value / column total"
        ]
    },

    topicSummary: {
        coreInsights: [
            "Probability is a number between 0 and 1 assigned to every event; all probabilities in a sample space must sum to 1. These two facts — non-negativity and normalisation — underpin every calculation.",
            "The complement rule P(Aᶜ) = 1 − P(A) is the first tool to reach for whenever calculating the probability of an event directly seems harder than calculating its complement.",
            "The addition rule P(A ∪ B) = P(A) + P(B) − P(A ∩ B) corrects for double-counting the intersection. When events are mutually exclusive, the intersection is zero and the rule simplifies to direct addition.",
            "The multiplication rule P(A ∩ B) = P(A) × P(B|A) captures how probabilities compound across sequential events. When events are independent, it simplifies to P(A) × P(B).",
            "Conditional probability P(A|B) = P(A ∩ B) / P(B) formalises the idea of updating probability when new information arrives. It is the mathematical model of learning from evidence.",
            "Independence and mutual exclusivity are conceptually opposite: independent events can both occur freely; mutually exclusive events cannot both occur at all.",
            "Tree diagrams and two-way tables are not merely organisational aids — they make sample space structure visible and make conditional probabilities readable by inspection.",
            "Bayes' theorem reverses conditional probabilities and is the foundation of all Bayesian reasoning — the mathematical framework for updating beliefs as evidence accumulates."
        ],
        keyFormulas: {
            theoretical:         "P(A) = (favourable outcomes) / (total equally likely outcomes)",
            experimental:        "P(A) ≈ (frequency of A) / (total trials)",
            complement:          "P(Aᶜ) = 1 − P(A)",
            additionGeneral:     "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
            additionMutuallyExclusive: "P(A ∪ B) = P(A) + P(B) [if A ∩ B = ∅]",
            multiplicationGeneral:     "P(A ∩ B) = P(A) × P(B|A)",
            multiplicationIndependent: "P(A ∩ B) = P(A) × P(B) [if A and B independent]",
            conditionalProbability:    "P(A|B) = P(A ∩ B) / P(B)",
            bayesTheorem:              "P(A|B) = [P(B|A) × P(A)] / P(B)",
            expectedValue:             "E(X) = Σ x · P(X = x)"
        },
        commonMistakesToAvoid: [
            "Forgetting to subtract the intersection in the addition rule when events are not mutually exclusive — this double-counts outcomes in both events",
            "Confusing independence with mutual exclusivity — two non-trivial mutually exclusive events are always dependent, not independent",
            "Using P(A) × P(B) for dependent events — always check whether replacement is used in sampling problems",
            "Confusing P(A|B) with P(B|A) — the 'prosecutor's fallacy' of treating these as equal leads to serious errors in medical, legal, and scientific contexts",
            "Forgetting to check that all probabilities in a distribution sum to 1 before computing expected value",
            "Treating experimental probability from small samples as reliable — the Law of Large Numbers requires many trials"
        ],
        connections: [
            "Statistics: probability distributions (binomial, normal) are extensions of the discrete distributions introduced here",
            "Data Science: Naive Bayes classifiers and Bayesian networks are direct applications of conditional probability and Bayes' theorem",
            "Genetics: Mendelian inheritance uses probability trees identical in structure to multi-stage probability problems",
            "Finance: risk pricing, option valuation (Black-Scholes), and portfolio theory are built on probability theory",
            "Computing: probabilistic algorithms, randomised data structures, and machine learning all depend on probability"
        ],
        examReadinessChecklist: [
            "Can you calculate P(A ∪ B) without forgetting to subtract P(A ∩ B) for non-mutually-exclusive events?",
            "Can you construct a complete tree diagram for a two-stage experiment and correctly label each branch with a conditional probability?",
            "Can you calculate a conditional probability from a two-way table by reading the correct row or column total as the denominator?",
            "Can you test two events for independence using P(A ∩ B) = P(A) × P(B)?",
            "Can you apply Bayes' theorem to reverse a conditional probability (e.g. the medical testing scenario)?",
            "Can you calculate and correctly interpret expected value, including cases where E(X) is not itself a possible outcome?"
        ]
    }
},


setTheory: {
    title: "Set Theory: Foundations, Operations, and Applications",

    databaseLinks: {
        misconceptions: [
            'setNotationAndMembership',
            'setOperations',
            'vennDiagrams',
            'setRelationships',
            'cardinalityAndSpecialSets'
        ],
        contextualScenarios: [
            'setNotationAndMembership',
            'setOperations',
            'vennDiagrams',
            'setRelationships'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'workedExampleAnalysis'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'setNotationAndMembership',
            'setOperations',
            'vennDiagrams',
            'setRelationships'
        ]
    },

    conceptLinks: {
        "A set is a well-defined collection of distinct objects called elements": {
            misconceptions:      ['setNotationAndMembership'],
            scenarios:           ['setNotationAndMembership'],
            studyTips:           ['flashcards', 'diagrams'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['setNotationAndMembership']
        },
        "Sets are related through subsets, equality, and disjointness": {
            misconceptions:      ['setRelationships'],
            scenarios:           ['setRelationships'],
            studyTips:           ['comparisonTables', 'diagrams'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['setRelationships']
        },
        "Set operations combine or compare sets to form new sets": {
            misconceptions:      ['setOperations'],
            scenarios:           ['setOperations'],
            studyTips:           ['diagrams', 'comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze'],
            assessmentQuestions: ['setOperations']
        },
        "Venn diagrams represent sets and their relationships visually": {
            misconceptions:      ['vennDiagrams'],
            scenarios:           ['vennDiagrams'],
            studyTips:           ['diagrams', 'workedExampleAnalysis'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['vennDiagrams']
        },
        "Cardinality measures the size of a set and obeys counting laws": {
            misconceptions:      ['cardinalityAndSpecialSets'],
            scenarios:           ['setOperations'],
            studyTips:           ['flashcards', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['setNotationAndMembership']
        }
    },

    topicIntroduction: {
        overview: "Set theory is the language of mathematics. Every branch of mathematics — from arithmetic to calculus to statistics — ultimately rests on the concept of a set: a well-defined collection of distinct objects. In this lesson, we develop fluency in set notation, membership, relationships between sets, and the four fundamental operations (union, intersection, complement, and difference). We connect these abstract tools to concrete real-world classification, logic, probability, and database problems.",
        whyItMatters: "Set theory underpins the entire mathematical enterprise. In statistics, events are sets of outcomes. In logic, propositions correspond to sets of truth values. In computer science, databases are built on set operations — SQL queries are direct translations of union, intersection, and difference. In everyday reasoning, any time we classify, sort, or categorise objects, we are performing set theory. Understanding sets transforms vague ideas about 'groups of things' into precise, manipulable mathematical objects.",
        bigPicture: "A set is defined by its elements — either listed explicitly or described by a rule. Two sets can overlap (share elements), be nested (one contained in the other), or be entirely separate. The four operations — union (∪), intersection (∩), complement (A′), and difference (\\) — allow us to build new sets from existing ones, exactly as addition and multiplication build new numbers from existing ones. Venn diagrams make these relationships visible. The inclusion-exclusion principle counts elements without double-counting — a tool used everywhere from scheduling to probability.",
        priorKnowledge: [
            "Basic arithmetic: counting, addition, subtraction",
            "Logical connectives: AND, OR, NOT in everyday language",
            "Number systems: natural numbers, integers, rationals — these will serve as examples of sets",
            "Idea of a collection or group of objects",
            "Basic coordinate geometry (for Venn diagram placement only)"
        ],
        topicRoadmap: [
            "Defining a set: roster notation, set-builder notation, and the empty set",
            "Membership (∈) and non-membership (∉)",
            "Set relationships: subsets (⊆), proper subsets (⊂), equality, and disjoint sets",
            "Special sets: empty set (∅), universal set (U), number sets (ℕ, ℤ, ℚ, ℝ)",
            "Set operations: union (∪), intersection (∩), complement (A′), set difference (A \\ B)",
            "Venn diagrams: two-set and three-set problems",
            "Cardinality and the inclusion-exclusion principle",
            "Real-world applications: classification, logic, probability, databases"
        ]
    },

    concepts: [
        "A set is a well-defined collection of distinct objects called elements",
        "Sets are related through subsets, equality, and disjointness",
        "Set operations combine or compare sets to form new sets",
        "Venn diagrams represent sets and their relationships visually",
        "Cardinality measures the size of a set and obeys counting laws",
        "The inclusion-exclusion principle counts elements in unions without double-counting"
    ],

    theory: "Set theory, founded by Georg Cantor in the late nineteenth century, provides the axiomatic foundation for all of modern mathematics. A set is any well-defined collection of distinct objects (called elements or members). 'Well-defined' means there is an unambiguous rule determining whether any given object is or is not in the set. Sets are equal if and only if they contain exactly the same elements — order and repetition are irrelevant. From this single concept, all of mathematics can be constructed.",

    keyDefinitions: {
        "Set": "A well-defined collection of distinct objects, denoted by capital letters (A, B, C)",
        "Element / Member": "An object belonging to a set; 'a is an element of A' is written a ∈ A",
        "Roster Notation": "Listing all elements explicitly within curly braces: A = {1, 2, 3, 4}",
        "Set-Builder Notation": "Defining a set by a rule: A = {x : x is an even integer, 1 ≤ x ≤ 10}",
        "Empty Set (∅)": "The unique set containing no elements; written ∅ or {}; note {∅} is NOT the empty set — it is a set containing one element",
        "Universal Set (U)": "The set of all objects under consideration in a given context; all other sets in that context are subsets of U",
        "Subset (⊆)": "A is a subset of B (A ⊆ B) if every element of A is also an element of B; A may equal B",
        "Proper Subset (⊂)": "A is a proper subset of B (A ⊂ B) if A ⊆ B and A ≠ B — at least one element of B is not in A",
        "Equal Sets": "A = B if and only if A ⊆ B and B ⊆ A — they contain exactly the same elements",
        "Disjoint Sets": "Sets A and B are disjoint if A ∩ B = ∅ — they share no elements",
        "Cardinality": "The number of elements in a set A, written |A| or n(A)",
        "Power Set": "The set of all subsets of A, written P(A); if |A| = n then |P(A)| = 2ⁿ",
        "Union (∪)": "A ∪ B = {x : x ∈ A OR x ∈ B} — all elements in A, B, or both",
        "Intersection (∩)": "A ∩ B = {x : x ∈ A AND x ∈ B} — only elements in both A and B",
        "Complement (A′)": "A′ = {x ∈ U : x ∉ A} — all elements of the universal set not in A",
        "Set Difference (A \\ B)": "A \\ B = {x : x ∈ A AND x ∉ B} — elements of A that are not in B; also written A − B"
    },

    setNotation: {
        rosterNotation: {
            description: "Elements are listed explicitly, separated by commas, within curly braces",
            examples: [
                "A = {2, 4, 6, 8, 10} — the set of even numbers from 2 to 10",
                "B = {a, e, i, o, u} — the set of vowels in the English alphabet",
                "C = {Monday, Wednesday, Friday} — a set of weekdays"
            ],
            notes: "Order does not matter: {1, 2, 3} = {3, 1, 2}. Repetition is ignored: {1, 1, 2} = {1, 2}."
        },
        setBuilderNotation: {
            description: "Elements are defined by a property or rule: {variable : condition} or {variable | condition}",
            examples: [
                "A = {x : x ∈ ℤ, x > 0} — the set of positive integers (natural numbers)",
                "B = {x : x ∈ ℝ, x² < 9} — the set of real numbers whose square is less than 9 (i.e. −3 < x < 3)",
                "C = {n ∈ ℕ : n is divisible by 3 and n ≤ 30} — {3, 6, 9, 12, 15, 18, 21, 24, 27, 30}"
            ],
            notes: "Read the colon (:) or vertical bar (|) as 'such that'. Set-builder notation is essential for infinite sets that cannot be listed."
        },
        membershipWorkedExample: {
            problem: "Given A = {x ∈ ℤ : −2 ≤ x < 4}, list all elements of A. Then determine which of the following are true: (a) 0 ∈ A, (b) 4 ∈ A, (c) −2 ∈ A, (d) 3.5 ∈ A.",
            solution: [
                "Step 1 — Identify the conditions: x must be an integer (x ∈ ℤ), at least −2 (x ≥ −2), and strictly less than 4 (x < 4)",
                "Step 2 — List all integers satisfying −2 ≤ x < 4: A = {−2, −1, 0, 1, 2, 3}",
                "Step 3 — Check each statement:",
                "(a) 0 ∈ A — TRUE: 0 is in the list",
                "(b) 4 ∈ A — FALSE: 4 is excluded by the strict inequality x < 4",
                "(c) −2 ∈ A — TRUE: −2 is included by the non-strict inequality x ≥ −2",
                "(d) 3.5 ∈ A — FALSE: 3.5 is not an integer, and the condition requires x ∈ ℤ"
            ]
        }
    },

    specialSets: {
        emptySet: {
            definition: "∅ = {} — the set with no elements; |∅| = 0",
            criticalDistinction: "{∅} is NOT the empty set — it is a set with one element (the empty set itself); |{∅}| = 1",
            subsetProperty: "∅ is a subset of every set: for any set A, ∅ ⊆ A. This is vacuously true — there is no element of ∅ that could fail to be in A.",
            examples: [
                "{x ∈ ℝ : x² = −1} = ∅ — no real number has a negative square",
                "{n ∈ ℕ : n < 0} = ∅ — no natural number is negative"
            ]
        },
        universalSet: {
            definition: "U — the set of all objects relevant to the current problem; defines the context",
            examples: [
                "In a problem about integers: U = ℤ",
                "In a school survey problem: U = {all students in the school}",
                "In a card problem: U = {all 52 playing cards}"
            ],
            note: "The universal set is always defined by context. Complement is only meaningful relative to U."
        },
        numberSets: {
            "ℕ — Natural Numbers": "{1, 2, 3, 4, ...} — positive integers (some definitions include 0)",
            "ℤ — Integers": "{..., −3, −2, −1, 0, 1, 2, 3, ...} — all whole numbers, positive and negative",
            "ℚ — Rational Numbers": "{p/q : p, q ∈ ℤ, q ≠ 0} — numbers expressible as fractions of integers",
            "ℝ — Real Numbers": "All numbers on the number line, including irrationals like √2 and π",
            "ℂ — Complex Numbers": "Numbers of the form a + bi where a, b ∈ ℝ and i = √(−1)",
            hierarchy: "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ — each is a proper subset of the next"
        }
    },

    setRelationships: {
        subsets: {
            definition: "A ⊆ B means every element of A is also in B. Equivalently: if x ∈ A then x ∈ B.",
            properSubset: "A ⊂ B means A ⊆ B and A ≠ B — B has at least one element that A does not.",
            equality: "A = B means A ⊆ B and B ⊆ A — used as the standard proof strategy for set equality.",
            workedExample: {
                problem: "Given A = {2, 4}, B = {1, 2, 3, 4, 5}, C = {2, 4}, determine: (a) Is A ⊆ B? (b) Is A ⊂ B? (c) Is A = C? (d) Is B ⊆ A?",
                solution: [
                    "(a) A ⊆ B: check every element of A — 2 ∈ B ✓, 4 ∈ B ✓ — YES, A ⊆ B",
                    "(b) A ⊂ B: A ⊆ B (shown above) and A ≠ B (B has elements 1, 3, 5 not in A) — YES, A ⊂ B",
                    "(c) A = C: A = {2, 4} and C = {2, 4} contain exactly the same elements — YES, A = C",
                    "(d) B ⊆ A: check — 1 ∈ B but 1 ∉ A — FAILS immediately — NO, B ⊄ A"
                ]
            }
        },
        powerSet: {
            definition: "P(A) = the set of all subsets of A, including ∅ and A itself",
            cardinalityRule: "If |A| = n, then |P(A)| = 2ⁿ",
            workedExample: {
                problem: "Find P(A) for A = {1, 2, 3}. Verify the cardinality formula.",
                solution: [
                    "Step 1 — List all subsets systematically by size:",
                    "Size 0 (1 subset): ∅",
                    "Size 1 (3 subsets): {1}, {2}, {3}",
                    "Size 2 (3 subsets): {1,2}, {1,3}, {2,3}",
                    "Size 3 (1 subset): {1,2,3}",
                    "Step 2 — P(A) = {∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}}",
                    "Step 3 — Verify: |A| = 3, so |P(A)| = 2³ = 8 ✓ (count: 1 + 3 + 3 + 1 = 8)"
                ]
            }
        }
    },

    setOperations: {
        union: {
            definition: "A ∪ B = {x : x ∈ A OR x ∈ B} — all elements belonging to A, to B, or to both",
            note: "Elements in both A and B are listed only once in the union",
            workedExample: {
                problem: "Given A = {1, 3, 5, 7} and B = {3, 6, 7, 9}, find A ∪ B.",
                solution: [
                    "Step 1 — List all elements of A: 1, 3, 5, 7",
                    "Step 2 — Add elements of B not already listed: 6, 9 (3 and 7 are already included)",
                    "Step 3 — A ∪ B = {1, 3, 5, 6, 7, 9}",
                    "Verification: |A ∪ B| = 6. Note: |A| + |B| = 4 + 4 = 8, but 3 and 7 were counted twice, so |A ∪ B| = 8 − 2 = 6 ✓"
                ]
            }
        },
        intersection: {
            definition: "A ∩ B = {x : x ∈ A AND x ∈ B} — only elements belonging to both A and B simultaneously",
            workedExample: {
                problem: "Given A = {1, 3, 5, 7} and B = {3, 6, 7, 9}, find A ∩ B.",
                solution: [
                    "Step 1 — Check each element of A: is it also in B?",
                    "1 ∈ B? NO. 3 ∈ B? YES. 5 ∈ B? NO. 7 ∈ B? YES.",
                    "Step 2 — A ∩ B = {3, 7}",
                    "Interpretation: 3 and 7 are the only values shared by both sets"
                ]
            }
        },
        complement: {
            definition: "A′ = {x ∈ U : x ∉ A} — all elements of the universal set that are NOT in A",
            note: "Complement is always defined relative to a universal set U; without U, complement is meaningless",
            workedExample: {
                problem: "U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and A = {1, 3, 5, 7, 9}. Find A′.",
                solution: [
                    "Step 1 — A′ consists of elements in U but NOT in A",
                    "Step 2 — Check each element of U: 2 ∉ A ✓, 4 ∉ A ✓, 6 ∉ A ✓, 8 ∉ A ✓, 10 ∉ A ✓",
                    "Step 3 — A′ = {2, 4, 6, 8, 10}",
                    "Verification: |A| + |A′| = 5 + 5 = 10 = |U| ✓"
                ]
            }
        },
        setDifference: {
            definition: "A \\ B = {x : x ∈ A AND x ∉ B} — elements of A with elements of B removed",
            asymmetry: "A \\ B ≠ B \\ A in general — set difference is NOT commutative",
            workedExample: {
                problem: "Given A = {1, 3, 5, 7} and B = {3, 6, 7, 9}, find (a) A \\ B and (b) B \\ A.",
                solution: [
                    "(a) A \\ B: take A and remove any element also in B",
                    "3 ∈ B → remove; 7 ∈ B → remove; 1 ∉ B → keep; 5 ∉ B → keep",
                    "A \\ B = {1, 5}",
                    "(b) B \\ A: take B and remove any element also in A",
                    "3 ∈ A → remove; 7 ∈ A → remove; 6 ∉ A → keep; 9 ∉ A → keep",
                    "B \\ A = {6, 9}",
                    "Note: A \\ B ≠ B \\ A, confirming set difference is not commutative"
                ]
            }
        },
        deMorgansLaws: {
            firstLaw:  "(A ∪ B)′ = A′ ∩ B′ — the complement of a union equals the intersection of the complements",
            secondLaw: "(A ∩ B)′ = A′ ∪ B′ — the complement of an intersection equals the union of the complements",
            workedExample: {
                problem: "U = {1,2,3,4,5,6,7,8}, A = {1,2,3,4}, B = {3,4,5,6}. Verify De Morgan's First Law.",
                solution: [
                    "Step 1 — Find A ∪ B = {1,2,3,4,5,6}",
                    "Step 2 — Find (A ∪ B)′ = U \\ (A ∪ B) = {7,8}",
                    "Step 3 — Find A′ = {5,6,7,8} and B′ = {1,2,7,8}",
                    "Step 4 — Find A′ ∩ B′ = {7,8}",
                    "Step 5 — (A ∪ B)′ = {7,8} = A′ ∩ B′ = {7,8} ✓ — De Morgan's First Law verified"
                ]
            }
        }
    },

    vennDiagrams: {
        twoSets: {
            description: "Two overlapping circles inside a rectangle (representing U). The overlap represents A ∩ B. Left-only region is A \\ B. Right-only region is B \\ A. Outside both circles is (A ∪ B)′.",
            regions: {
                "A only (A \\ B)":        "Elements in A but not B",
                "A ∩ B (overlap)":         "Elements in both A and B",
                "B only (B \\ A)":        "Elements in B but not A",
                "(A ∪ B)′ (outside both)": "Elements in U but in neither A nor B"
            },
            workedExample: {
                problem: "In a class of 30 students, 18 study French (F), 14 study Spanish (S), and 8 study both. Draw a Venn diagram and find how many study neither language.",
                solution: [
                    "Step 1 — Fill the intersection first: F ∩ S = 8 students study both",
                    "Step 2 — French only (F \\ S): 18 − 8 = 10 students",
                    "Step 3 — Spanish only (S \\ F): 14 − 8 = 6 students",
                    "Step 4 — Total accounted for: 10 + 8 + 6 = 24 students",
                    "Step 5 — Neither: 30 − 24 = 6 students",
                    "Venn diagram: left circle (10), overlap (8), right circle (6), outside (6). Total: 30 ✓",
                    "Verification using inclusion-exclusion: |F ∪ S| = 18 + 14 − 8 = 24; neither = 30 − 24 = 6 ✓"
                ]
            }
        },
        threeSets: {
            description: "Three overlapping circles inside U, creating seven distinct regions plus the exterior.",
            regions: {
                "A only":        "In A, not B, not C",
                "B only":        "In B, not A, not C",
                "C only":        "In C, not A, not B",
                "A ∩ B only":    "In A and B, not C",
                "A ∩ C only":    "In A and C, not B",
                "B ∩ C only":    "In B and C, not A",
                "A ∩ B ∩ C":    "In all three sets",
                "Outside all":   "In U but not in A, B, or C"
            },
            workedExample: {
                problem: "A survey of 50 people asks about three streaming services: Netflix (N), Disney+ (D), Amazon (A). Results: |N|=28, |D|=22, |A|=20, |N∩D|=10, |N∩A|=8, |D∩A|=6, |N∩D∩A|=3. Find the number subscribing to at least one service and the number subscribing to none.",
                solution: [
                    "Step 1 — Apply the three-set inclusion-exclusion principle:",
                    "|N ∪ D ∪ A| = |N| + |D| + |A| − |N∩D| − |N∩A| − |D∩A| + |N∩D∩A|",
                    "Step 2 — Substitute values:",
                    "|N ∪ D ∪ A| = 28 + 22 + 20 − 10 − 8 − 6 + 3",
                    "Step 3 — Calculate: 70 − 24 + 3 = 49",
                    "Step 4 — Subscribing to at least one: 49 people",
                    "Step 5 — Subscribing to none: 50 − 49 = 1 person",
                    "Step 6 — Fill the Venn diagram from the centre outward:",
                    "Centre (all three): 3",
                    "N∩D only (not A): 10 − 3 = 7",
                    "N∩A only (not D): 8 − 3 = 5",
                    "D∩A only (not N): 6 − 3 = 3",
                    "N only: 28 − 7 − 5 − 3 = 13",
                    "D only: 22 − 7 − 3 − 3 = 9",
                    "A only: 20 − 5 − 3 − 3 = 9",
                    "Verification: 13 + 9 + 9 + 7 + 5 + 3 + 3 = 49 ✓"
                ]
            }
        }
    },

    cardinalityAndInclusionExclusion: {
        basicRules: {
            singleSet:    "|A| = number of distinct elements in A",
            complement:   "|A′| = |U| − |A|",
            disjointSets: "If A ∩ B = ∅, then |A ∪ B| = |A| + |B|"
        },
        inclusionExclusionTwoSets: {
            formula: "|A ∪ B| = |A| + |B| − |A ∩ B|",
            rationale: "Adding |A| and |B| counts elements in A ∩ B twice — subtracting |A ∩ B| once corrects the double-count",
            workedExample: {
                problem: "A school has 200 students. 120 study Maths (M), 90 study Science (S), and 50 study both. How many study at least one of Maths or Science? How many study neither?",
                solution: [
                    "Step 1 — Apply inclusion-exclusion: |M ∪ S| = |M| + |S| − |M ∩ S|",
                    "Step 2 — Substitute: |M ∪ S| = 120 + 90 − 50 = 160",
                    "Step 3 — At least one: 160 students",
                    "Step 4 — Neither: 200 − 160 = 40 students",
                    "Verification: 70 (M only) + 50 (both) + 40 (S only) + 40 (neither) = 200 ✓"
                ]
            }
        },
        inclusionExclusionThreeSets: {
            formula: "|A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|",
            rationale: "Adding three sets triple-counts the centre. Subtracting pairwise intersections over-corrects. Adding back the triple intersection restores the correct count.",
            memoryAid: "Add individuals, subtract pairs, add back the triple — a rhythm of +, −, +"
        }
    },

    setLaws: {
        commutativeLaws:  { union: "A ∪ B = B ∪ A", intersection: "A ∩ B = B ∩ A" },
        associativeLaws:  { union: "(A ∪ B) ∪ C = A ∪ (B ∪ C)", intersection: "(A ∩ B) ∩ C = A ∩ (B ∩ C)" },
        distributiveLaws: {
            unionOverIntersection:        "A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)",
            intersectionOverUnion:        "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)"
        },
        identityLaws:     { union: "A ∪ ∅ = A", intersection: "A ∩ U = A" },
        complementLaws:   { union: "A ∪ A′ = U", intersection: "A ∩ A′ = ∅", doubleComplement: "(A′)′ = A" },
        deMorgansLaws:    { first: "(A ∪ B)′ = A′ ∩ B′", second: "(A ∩ B)′ = A′ ∪ B′" },
        absorptionLaws:   { first: "A ∪ (A ∩ B) = A", second: "A ∩ (A ∪ B) = A" }
    },

    topicSummary: {
        coreInsights: [
            "A set is defined entirely by its elements — order and repetition are irrelevant. {1,2,3}, {3,2,1}, and {1,1,2,3} all denote the same set.",
            "The empty set ∅ is unique, is a subset of every set, and must not be confused with {∅} — a set containing one element.",
            "Every set operation has a precise logical equivalent: union = OR, intersection = AND, complement = NOT, difference = AND NOT.",
            "The inclusion-exclusion principle corrects the double-counting that occurs when taking unions of overlapping sets — the most important counting tool in combinatorics.",
            "De Morgan's Laws are the algebraic bridge between union and intersection: distributing a complement converts one operation to the other.",
            "The power set of a set with n elements has 2ⁿ subsets — a count that grows explosively and underlies binary representations in computing.",
            "Venn diagrams are a visual proof tool — filling regions from the inside (centre intersection) outward eliminates all double-counting errors.",
            "The hierarchy ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ is itself a set-theoretic statement — each number system is a proper subset of the next."
        ],
        keyFormulas: {
            inclusionExclusionTwo:   "|A ∪ B| = |A| + |B| − |A ∩ B|",
            inclusionExclusionThree: "|A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|",
            complementCardinality:   "|A′| = |U| − |A|",
            powerSetCardinality:     "|P(A)| = 2^|A|",
            deMorgansFirst:          "(A ∪ B)′ = A′ ∩ B′",
            deMorgansSecond:         "(A ∩ B)′ = A′ ∪ B′",
            setDifference:           "A \\ B = A ∩ B′"
        },
        operationsSummary: {
            union:        { symbol: "∪", logicEquivalent: "OR",     includesOverlap: "YES", commutative: "YES" },
            intersection: { symbol: "∩", logicEquivalent: "AND",    includesOverlap: "YES (only overlap)", commutative: "YES" },
            complement:   { symbol: "A′", logicEquivalent: "NOT",   requiresU: "YES", commutative: "N/A" },
            difference:   { symbol: "\\", logicEquivalent: "AND NOT", includesOverlap: "NO", commutative: "NO" }
        },
        commonMistakesToAvoid: [
            "Confusing ∅ (empty set) with {∅} (a set containing the empty set) — they have different cardinalities: 0 vs 1",
            "Forgetting to subtract |A ∩ B| in the inclusion-exclusion formula, leading to an overcount",
            "Filling a three-set Venn diagram from the outside in — always fill from the centre (A ∩ B ∩ C) outward",
            "Treating set difference as commutative — A \\ B and B \\ A are generally different sets",
            "Confusing subset (⊆, allows equality) with proper subset (⊂, requires strict containment)",
            "Applying complement without defining the universal set — A′ is meaningless without U"
        ],
        connections: [
            "Probability: events are sets; P(A ∪ B) = P(A) + P(B) − P(A ∩ B) is inclusion-exclusion for probabilities",
            "Logic: set union corresponds to logical OR; intersection to AND; complement to NOT — Boolean algebra is set algebra",
            "Computer Science: SQL SELECT, WHERE, JOIN, UNION, INTERSECT, EXCEPT are direct set operations on database tables",
            "Number Theory: prime numbers, perfect squares, and other number classes are sets defined by properties",
            "Functions: a function f: A → B is defined on sets A (domain) and B (codomain) — set theory is the language of functions"
        ],
        examReadinessChecklist: [
            "Can you convert between roster notation and set-builder notation for a given set?",
            "Can you determine whether A ⊆ B, A ⊂ B, A = B, or none of these, given two explicitly listed sets?",
            "Can you perform all four operations (∪, ∩, ′, \\) on given sets and verify using cardinality?",
            "Can you correctly fill a two-set Venn diagram given the four region counts?",
            "Can you apply the inclusion-exclusion principle for two sets and for three sets to word problems?",
            "Can you fill a three-set Venn diagram starting from the centre and working outward without double-counting?",
            "Can you state and apply both of De Morgan's Laws with a worked verification?"
        ]
    }
},


numberTheory: {
    title: "Number Theory: Divisibility, Primes, and Modular Arithmetic",

    databaseLinks: {
        misconceptions: [
            'divisibilityAndFactors',
            'primesAndComposites',
            'gcdAndLcm',
            'modularArithmetic',
            'numberSets'
        ],
        contextualScenarios: [
            'divisibilityAndFactors',
            'primesAndComposites',
            'gcdAndLcm',
            'modularArithmetic'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'graphingPractice',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'workedExampleAnalysis'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'divisibilityAndFactors',
            'primesAndComposites',
            'gcdAndLcm',
            'modularArithmetic'
        ]
    },

    conceptLinks: {
        "Divisibility describes whether one integer divides another with no remainder": {
            misconceptions:       ['divisibilityAndFactors'],
            scenarios:            ['divisibilityAndFactors'],
            studyTips:            ['diagrams', 'flashcards'],
            assessmentRubrics:    ['remember', 'understand'],
            assessmentQuestions:  ['divisibilityAndFactors']
        },
        "A prime number has exactly two distinct positive divisors: one and itself": {
            misconceptions:       ['primesAndComposites'],
            scenarios:            ['primesAndComposites'],
            studyTips:            ['diagrams', 'mnemonics'],
            assessmentRubrics:    ['remember', 'understand', 'apply'],
            assessmentQuestions:  ['primesAndComposites']
        },
        "Every integer greater than one has a unique prime factorisation": {
            misconceptions:       ['primesAndComposites', 'divisibilityAndFactors'],
            scenarios:            ['primesAndComposites'],
            studyTips:            ['diagrams', 'workedExampleAnalysis'],
            assessmentRubrics:    ['understand', 'apply', 'analyze'],
            assessmentQuestions:  ['primesAndComposites']
        },
        "The GCD is the largest integer that divides two numbers; the LCM is the smallest integer both divide": {
            misconceptions:       ['gcdAndLcm'],
            scenarios:            ['gcdAndLcm'],
            studyTips:            ['comparisonTables', 'flashcards', 'practiceRoutines'],
            assessmentRubrics:    ['apply', 'analyze', 'evaluate'],
            assessmentQuestions:  ['gcdAndLcm']
        },
        "Modular arithmetic describes the remainder when an integer is divided by a modulus": {
            misconceptions:       ['modularArithmetic'],
            scenarios:            ['modularArithmetic'],
            studyTips:            ['comparisonTables', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:    ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions:  ['modularArithmetic']
        }
    },

    topicIntroduction: {
        overview: "Number theory is the branch of mathematics concerned with the properties and relationships of integers. It asks deceptively simple questions — which numbers divide which other numbers? Which numbers are prime? What is the remainder when one number is divided by another? — and develops a rigorous framework for answering them. In this lesson, we explore divisibility, prime numbers and factorisation, greatest common divisors, least common multiples, and modular arithmetic, connecting each concept to both pure mathematical reasoning and real-world application.",
        whyItMatters: "Number theory is simultaneously the oldest and the most modern branch of mathematics. Ancient Greek mathematicians studied primes for their intrinsic beauty; today, the RSA encryption algorithm — which secures every online transaction, password, and private communication — rests entirely on the difficulty of factoring large numbers into primes. Divisibility rules streamline calculation; the Euclidean algorithm is one of the oldest and most efficient algorithms in existence; modular arithmetic underlies clocks, calendars, barcodes, checksums, and cryptography. Understanding number theory is understanding the arithmetic foundations of the digital world.",
        bigPicture: "Every positive integer has a unique fingerprint: its prime factorisation. From that factorisation, everything else follows — divisors, GCD, LCM, and divisibility properties. Modular arithmetic then extends the idea: rather than asking what a number is, it asks what category a number falls into when divided by a fixed modulus. This shift from exact values to equivalence classes is one of the most powerful abstractions in all of mathematics, previewing group theory, ring theory, and abstract algebra.",
        priorKnowledge: [
            "Arithmetic: multiplication and division of positive integers",
            "Concept of remainder in integer division",
            "Basic set notation: understanding what it means for a number to belong to a set",
            "Factor pairs: listing pairs of numbers that multiply to a given product",
            "Exponent notation: understanding that 2³ means 2 × 2 × 2"
        ],
        topicRoadmap: [
            "Divisibility: definition, notation, and divisibility rules",
            "Factors and multiples: listing, identifying, and applying",
            "Prime and composite numbers: definitions, the Sieve of Eratosthenes, primality testing",
            "Prime factorisation: factor trees, index form, and the Fundamental Theorem of Arithmetic",
            "Greatest Common Divisor (GCD): listing method, prime factorisation method, Euclidean algorithm",
            "Least Common Multiple (LCM): listing method, prime factorisation method, and the GCD–LCM relationship",
            "Modular arithmetic: congruence notation, clock arithmetic, applications to remainders and cyclic patterns"
        ]
    },

    concepts: [
        "Divisibility describes whether one integer divides another with no remainder",
        "A prime number has exactly two distinct positive divisors: one and itself",
        "Every integer greater than one has a unique prime factorisation",
        "The GCD is the largest integer that divides two numbers; the LCM is the smallest integer both divide",
        "Modular arithmetic describes the remainder when an integer is divided by a modulus",
        "The Euclidean algorithm finds the GCD efficiently using repeated division"
    ],

    theory: "Number theory studies the intrinsic properties of integers — their divisibility, primality, and arithmetic structure. Its central theorem, the Fundamental Theorem of Arithmetic, guarantees that every integer greater than one can be expressed as a product of primes in exactly one way (up to ordering). This uniqueness of prime factorisation is the foundation on which GCD, LCM, and modular arithmetic are all built.",

    keyDefinitions: {
        "Divisibility": "Integer a is divisible by integer b (written b | a) if there exists an integer k such that a = bk — equivalently, if dividing a by b leaves no remainder",
        "Factor (Divisor)": "An integer b is a factor of a if b | a; equivalently, b divides a exactly with no remainder",
        "Multiple": "An integer a is a multiple of b if b | a; equivalently, a = bk for some integer k",
        "Prime Number": "A positive integer greater than 1 whose only positive divisors are 1 and itself",
        "Composite Number": "A positive integer greater than 1 that has at least one positive divisor other than 1 and itself",
        "Prime Factorisation": "The expression of a positive integer as a product of prime numbers; e.g. 60 = 2² × 3 × 5",
        "Fundamental Theorem of Arithmetic": "Every integer greater than 1 is either prime or can be expressed as a unique product of primes (up to ordering)",
        "Greatest Common Divisor (GCD)": "The largest positive integer that divides both a and b; written gcd(a, b) or hcf(a, b)",
        "Least Common Multiple (LCM)": "The smallest positive integer that is divisible by both a and b; written lcm(a, b)",
        "Modular Arithmetic": "Arithmetic performed with remainders; a ≡ b (mod n) means a and b leave the same remainder when divided by n",
        "Congruence": "a ≡ b (mod n) — read 'a is congruent to b modulo n' — means n | (a − b)",
        "Coprime (Relatively Prime)": "Two integers a and b are coprime if gcd(a, b) = 1 — they share no common factor other than 1"
    },

    divisibilityRules: {
        overview: "A divisibility rule is a shortcut for determining whether a number is divisible by a given integer without performing the full division. These rules arise from the structure of our base-10 number system.",
        rules: {
            by2:  { rule: "The last digit is even (0, 2, 4, 6, or 8)", example: "374: last digit 4 is even → 374 is divisible by 2" },
            by3:  { rule: "The sum of all digits is divisible by 3", example: "471: 4+7+1 = 12, and 12 ÷ 3 = 4 → 471 is divisible by 3" },
            by4:  { rule: "The last two digits form a number divisible by 4", example: "1,348: last two digits 48, and 48 ÷ 4 = 12 → 1348 is divisible by 4" },
            by5:  { rule: "The last digit is 0 or 5", example: "835: last digit 5 → 835 is divisible by 5" },
            by6:  { rule: "The number is divisible by both 2 and 3", example: "522: even (÷2 ✓) and 5+2+2=9 divisible by 3 (÷3 ✓) → 522 is divisible by 6" },
            by8:  { rule: "The last three digits form a number divisible by 8", example: "3,816: last three digits 816, and 816 ÷ 8 = 102 → 3816 is divisible by 8" },
            by9:  { rule: "The sum of all digits is divisible by 9", example: "738: 7+3+8 = 18, and 18 ÷ 9 = 2 → 738 is divisible by 9" },
            by10: { rule: "The last digit is 0", example: "4,590: last digit 0 → 4590 is divisible by 10" }
        },
        workedExample: {
            problem: "Without dividing, determine which of 2, 3, 4, 5, 6, 9 divide exactly into 1,836.",
            solution: [
                "Step 1 — By 2: last digit is 6 (even) → YES",
                "Step 2 — By 3: digit sum = 1+8+3+6 = 18; 18 ÷ 3 = 6 → YES",
                "Step 3 — By 4: last two digits = 36; 36 ÷ 4 = 9 → YES",
                "Step 4 — By 5: last digit is 6, not 0 or 5 → NO",
                "Step 5 — By 6: divisible by both 2 and 3 → YES",
                "Step 6 — By 9: digit sum = 18; 18 ÷ 9 = 2 → YES",
                "Conclusion: 1,836 is divisible by 2, 3, 4, 6, and 9 but not by 5"
            ]
        }
    },

    primesAndFactorisation: {
        primeDefinition: "A prime number p is a positive integer greater than 1 with exactly two positive divisors: 1 and p itself. The number 1 is neither prime nor composite — it is a special case excluded by definition because including it would destroy the uniqueness of prime factorisations.",
        compositesDefinition: "A composite number has at least one divisor other than 1 and itself. Every composite number can be broken down into smaller factors.",
        specialCases: {
            one: "1 is neither prime nor composite — it has only one positive divisor (itself). The Fundamental Theorem of Arithmetic requires its exclusion.",
            two: "2 is the only even prime number — all other even numbers are divisible by 2 and therefore composite."
        },
        sieveOfEratosthenes: {
            description: "A systematic method for finding all primes up to a given limit N. List all integers from 2 to N. Starting from 2, cross out all multiples of 2 (excluding 2 itself). Move to the next uncrossed number (3) and cross out all its multiples. Repeat until you reach √N. All remaining uncrossed numbers are prime.",
            workedExample: {
                problem: "Find all primes up to 50 using the Sieve of Eratosthenes.",
                solution: [
                    "Step 1 — Write integers 2 to 50",
                    "Step 2 — Circle 2; cross out 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50",
                    "Step 3 — Circle 3 (not crossed); cross out 9, 15, 21, 27, 33, 39, 45 (6, 12,... already crossed)",
                    "Step 4 — Circle 5 (not crossed); cross out 25, 35 (others already crossed)",
                    "Step 5 — Circle 7 (not crossed); cross out 49 (others already crossed)",
                    "Step 6 — √50 ≈ 7.07, so we stop — all remaining uncrossed numbers are prime",
                    "Primes up to 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47"
                ]
            }
        },
        primalityTesting: {
            method: "To test whether n is prime, check divisibility by all primes up to and including √n. If none divide n exactly, then n is prime.",
            justification: "If n has a factor greater than √n, then the corresponding paired factor must be less than √n — so any composite n must have at least one factor at or below √n.",
            workedExample: {
                problem: "Determine whether 97 is prime.",
                solution: [
                    "Step 1 — Find √97 ≈ 9.85, so test all primes up to 9: these are 2, 3, 5, 7",
                    "Step 2 — By 2: 97 is odd → not divisible by 2",
                    "Step 3 — By 3: digit sum = 9+7 = 16; 16 is not divisible by 3 → not divisible by 3",
                    "Step 4 — By 5: last digit is 7, not 0 or 5 → not divisible by 5",
                    "Step 5 — By 7: 97 ÷ 7 = 13 remainder 6 → not divisible by 7",
                    "Conclusion: 97 has no prime factor ≤ √97, therefore 97 is prime"
                ]
            }
        },
        primeFactorisation: {
            definition: "Expressing a composite number as a product of prime factors in index (exponential) form. This representation is unique for every integer greater than 1.",
            factorTreeMethod: {
                description: "Repeatedly split a composite number into any two factors until all branches end in primes. The primes at the ends of all branches are the prime factors.",
                workedExample: {
                    problem: "Find the prime factorisation of 360 using a factor tree.",
                    solution: [
                        "Step 1 — Split 360 into 2 × 180",
                        "Step 2 — Split 180 into 2 × 90",
                        "Step 3 — Split 90 into 2 × 45",
                        "Step 4 — Split 45 into 3 × 15",
                        "Step 5 — Split 15 into 3 × 5",
                        "Step 6 — All branches end in primes: 2, 2, 2, 3, 3, 5",
                        "Step 7 — Collect in index form: 360 = 2³ × 3² × 5",
                        "Verification: 2³ × 3² × 5 = 8 × 9 × 5 = 8 × 45 = 360 ✓"
                    ]
                }
            },
            repeatedDivisionMethod: {
                description: "Divide the number by the smallest prime that divides it exactly. Repeat with the quotient until the quotient is 1. The prime factors are all the divisors used.",
                workedExample: {
                    problem: "Find the prime factorisation of 252 by repeated division.",
                    solution: [
                        "Step 1 — 252 ÷ 2 = 126",
                        "Step 2 — 126 ÷ 2 = 63",
                        "Step 3 — 63 ÷ 3 = 21",
                        "Step 4 — 21 ÷ 3 = 7",
                        "Step 5 — 7 ÷ 7 = 1 (7 is prime)",
                        "Step 6 — Collect: 252 = 2² × 3² × 7",
                        "Verification: 4 × 9 × 7 = 36 × 7 = 252 ✓"
                    ]
                }
            }
        }
    },

    gcdAndLcm: {
        gcd: {
            definition: "The Greatest Common Divisor (GCD) of two integers a and b — also called the Highest Common Factor (HCF) — is the largest positive integer that divides both a and b exactly.",
            listingMethod: {
                description: "List all factors of each number. Identify the common factors. The largest is the GCD.",
                workedExample: {
                    problem: "Find gcd(36, 48) by the listing method.",
                    solution: [
                        "Step 1 — Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36",
                        "Step 2 — Factors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48",
                        "Step 3 — Common factors: 1, 2, 3, 4, 6, 12",
                        "Step 4 — Largest common factor: gcd(36, 48) = 12"
                    ]
                }
            },
            primeFactorisationMethod: {
                description: "Express each number in prime factorised form. For each prime that appears in both factorisations, take it to the LOWER power. Multiply these together.",
                workedExample: {
                    problem: "Find gcd(360, 252) using prime factorisations.",
                    solution: [
                        "Step 1 — 360 = 2³ × 3² × 5",
                        "Step 2 — 252 = 2² × 3² × 7",
                        "Step 3 — Primes common to both: 2 and 3 (5 appears only in 360; 7 appears only in 252)",
                        "Step 4 — Take lower power of each: 2² (lower of 2³ and 2²) and 3² (lower of 3² and 3²)",
                        "Step 5 — gcd(360, 252) = 2² × 3² = 4 × 9 = 36",
                        "Verification: 360 ÷ 36 = 10 ✓; 252 ÷ 36 = 7 ✓"
                    ]
                }
            },
            euclideanAlgorithm: {
                description: "The most efficient method for large numbers. Repeatedly replace the larger number with the remainder when it is divided by the smaller, until the remainder is zero. The last non-zero remainder is the GCD.",
                principle: "Based on the theorem: gcd(a, b) = gcd(b, a mod b). The GCD of two numbers equals the GCD of the smaller and the remainder.",
                workedExample: {
                    problem: "Find gcd(1071, 462) using the Euclidean algorithm.",
                    solution: [
                        "Step 1 — 1071 = 2 × 462 + 147  →  gcd(1071, 462) = gcd(462, 147)",
                        "Step 2 — 462 = 3 × 147 + 21   →  gcd(462, 147) = gcd(147, 21)",
                        "Step 3 — 147 = 7 × 21 + 0     →  gcd(147, 21) = 21",
                        "Conclusion: gcd(1071, 462) = 21",
                        "Verification: 1071 ÷ 21 = 51 ✓; 462 ÷ 21 = 22 ✓"
                    ]
                }
            }
        },
        lcm: {
            definition: "The Least Common Multiple (LCM) of two integers a and b is the smallest positive integer that is divisible by both a and b.",
            listingMethod: {
                description: "List multiples of each number until you find the first one they share.",
                workedExample: {
                    problem: "Find lcm(8, 12) by the listing method.",
                    solution: [
                        "Step 1 — Multiples of 8: 8, 16, 24, 32, 40, ...",
                        "Step 2 — Multiples of 12: 12, 24, 36, 48, ...",
                        "Step 3 — First common multiple: 24",
                        "lcm(8, 12) = 24"
                    ]
                }
            },
            primeFactorisationMethod: {
                description: "Express each number in prime factorised form. For each prime that appears in either factorisation, take it to the HIGHER power. Multiply these together.",
                workedExample: {
                    problem: "Find lcm(360, 252) using prime factorisations.",
                    solution: [
                        "Step 1 — 360 = 2³ × 3² × 5",
                        "Step 2 — 252 = 2² × 3² × 7",
                        "Step 3 — All primes appearing in either: 2, 3, 5, 7",
                        "Step 4 — Take higher power of each: 2³, 3², 5¹, 7¹",
                        "Step 5 — lcm(360, 252) = 2³ × 3² × 5 × 7 = 8 × 9 × 5 × 7 = 2520",
                        "Verification: 2520 ÷ 360 = 7 ✓; 2520 ÷ 252 = 10 ✓"
                    ]
                }
            },
            gcdLcmRelationship: {
                formula: "lcm(a, b) = (a × b) / gcd(a, b)",
                explanation: "The product of two numbers equals the product of their GCD and LCM. This gives a shortcut: find the GCD (efficiently via the Euclidean algorithm) and compute the LCM from it.",
                workedExample: {
                    problem: "Use the GCD–LCM relationship to find lcm(360, 252), given that gcd(360, 252) = 36.",
                    solution: [
                        "Step 1 — Apply the formula: lcm(a, b) = (a × b) / gcd(a, b)",
                        "Step 2 — Substitute: lcm(360, 252) = (360 × 252) / 36",
                        "Step 3 — Calculate: 360 × 252 = 90,720",
                        "Step 4 — Divide: 90,720 / 36 = 2,520",
                        "lcm(360, 252) = 2,520 ✓ (consistent with prime factorisation method)"
                    ]
                }
            }
        }
    },

    modularArithmetic: {
        definition: "In modular arithmetic, we consider only the remainder after division by a fixed positive integer n, called the modulus. We write a ≡ b (mod n) — read 'a is congruent to b modulo n' — when a and b leave the same remainder when divided by n, equivalently when n divides (a − b).",
        clockAnalogy: "A 12-hour clock is modular arithmetic with modulus 12. After 12 o'clock, we return to 1, 2, 3 — not 13, 14, 15. So 15 ≡ 3 (mod 12), because 15 hours after midnight is 3 a.m. The clock wraps around every 12 hours.",
        findingRemainders: {
            method: "To find a (mod n): divide a by n and take the remainder. Alternatively, subtract multiples of n until the result is between 0 and n−1.",
            workedExample: {
                problem: "Find: (a) 47 mod 5, (b) 100 mod 7, (c) −13 mod 4.",
                solution: [
                    "(a) 47 ÷ 5 = 9 remainder 2 → 47 ≡ 2 (mod 5)",
                    "(b) 100 ÷ 7 = 14 remainder 2 → 100 ≡ 2 (mod 7)",
                    "(c) −13 ÷ 4: we need the remainder in [0, 3]. −13 = −4 × 4 + 3 → −13 ≡ 3 (mod 4). Check: 3 − (−13) = 16, and 4 | 16 ✓"
                ]
            }
        },
        arithmetic: {
            addition:       "( a + b ) mod n = ( (a mod n) + (b mod n) ) mod n",
            subtraction:    "( a − b ) mod n = ( (a mod n) − (b mod n) + n ) mod n",
            multiplication: "( a × b ) mod n = ( (a mod n) × (b mod n) ) mod n",
            workedExample: {
                problem: "Evaluate (a) (38 + 59) mod 7 and (b) (47 × 36) mod 5, without computing the full products first.",
                solution: [
                    "(a) 38 mod 7 = 3 (since 38 = 5×7 + 3); 59 mod 7 = 3 (since 59 = 8×7 + 3)",
                    "    (38 + 59) mod 7 = (3 + 3) mod 7 = 6 mod 7 = 6",
                    "    Verification: 38 + 59 = 97; 97 ÷ 7 = 13 remainder 6 ✓",
                    "(b) 47 mod 5 = 2; 36 mod 5 = 1",
                    "    (47 × 36) mod 5 = (2 × 1) mod 5 = 2",
                    "    Verification: 47 × 36 = 1692; 1692 ÷ 5 = 338 remainder 2 ✓"
                ]
            }
        },
        congruenceProperties: {
            reflexive:   "a ≡ a (mod n) — every number is congruent to itself",
            symmetric:   "If a ≡ b (mod n), then b ≡ a (mod n)",
            transitive:  "If a ≡ b (mod n) and b ≡ c (mod n), then a ≡ c (mod n)",
            additionRule:       "If a ≡ b (mod n) and c ≡ d (mod n), then a+c ≡ b+d (mod n)",
            multiplicationRule: "If a ≡ b (mod n) and c ≡ d (mod n), then ac ≡ bd (mod n)"
        },
        lastDigitPatterns: {
            description: "The last digit of a power follows a repeating cycle, determined by computing powers modulo 10.",
            workedExample: {
                problem: "Find the last digit of 7⁵³.",
                solution: [
                    "Step 1 — Compute powers of 7 mod 10: 7¹ ≡ 7, 7² ≡ 9, 7³ ≡ 3, 7⁴ ≡ 1 (mod 10)",
                    "Step 2 — The cycle length is 4: pattern repeats as 7, 9, 3, 1, 7, 9, 3, 1, ...",
                    "Step 3 — Find 53 mod 4: 53 = 13×4 + 1 → 53 ≡ 1 (mod 4)",
                    "Step 4 — The 1st position in the cycle is 7",
                    "Conclusion: 7⁵³ ends in 7",
                    "Verification: 7¹ ends in 7; 7⁵ ends in 7 (since 5 ≡ 1 mod 4); 7⁹ ends in 7 ✓"
                ]
            }
        }
    },

    topicSummary: {
        coreInsights: [
            "Divisibility is a relationship between integers — b | a means a = bk for some integer k, with zero remainder. The divisibility rules for 2, 3, 4, 5, 6, 9, and 10 are shortcuts derived from the base-10 structure of our number system.",
            "The Fundamental Theorem of Arithmetic guarantees that every integer greater than 1 has a unique prime factorisation. This uniqueness is the foundation of all of number theory — GCD, LCM, and modular arithmetic all flow from it.",
            "Testing whether n is prime requires checking divisibility only by primes up to √n. If no prime up to √n divides n, then n is prime.",
            "The GCD uses the LOWER powers of shared prime factors; the LCM uses the HIGHER powers of all prime factors from either number. These two operations are complementary.",
            "The Euclidean algorithm — gcd(a, b) = gcd(b, a mod b) — is one of the oldest algorithms in history and far more efficient than listing factors for large numbers.",
            "The fundamental relationship lcm(a, b) × gcd(a, b) = a × b connects GCD and LCM and provides a computational shortcut.",
            "Modular arithmetic replaces exact values with equivalence classes — numbers that share the same remainder under division by n are congruent. Arithmetic operations respect congruence: you can reduce before or after adding, subtracting, and multiplying.",
            "The last digit of a power follows a repeating cycle of period at most 4 for any base — a direct application of modular arithmetic modulo 10."
        ],
        keyFormulas: {
            divisibilityNotation: "b | a means 'b divides a', equivalently a = bk for some integer k",
            primalityTest:        "n is prime if no prime p ≤ √n divides n",
            gcdPrimeMethod:       "gcd(a, b) = product of common prime factors each to the LOWER power",
            lcmPrimeMethod:       "lcm(a, b) = product of all prime factors each to the HIGHER power",
            gcdLcmRelationship:   "lcm(a, b) × gcd(a, b) = a × b",
            euclideanAlgorithm:   "gcd(a, b) = gcd(b, a mod b), repeat until remainder = 0",
            congruenceDefinition: "a ≡ b (mod n)  ⟺  n | (a − b)  ⟺  a and b have the same remainder on division by n"
        },
        systemsOutcomeSummary: {
            prime:     { definition: "Exactly two divisors: 1 and itself", examples: "2, 3, 5, 7, 11, 13, ...", note: "1 is not prime" },
            composite: { definition: "More than two divisors", examples: "4, 6, 8, 9, 10, ...", note: "Always has a prime factor ≤ √n" },
            coprime:   { definition: "gcd(a, b) = 1", examples: "8 and 15 (gcd = 1)", note: "Need not be prime individually" }
        },
        commonMistakesToAvoid: [
            "Claiming 1 is prime — 1 has only one divisor (itself), so it fails the definition of prime",
            "Stopping the primality test before reaching √n — a composite number may have its smallest prime factor close to √n",
            "Using the HIGHER power for GCD or the LOWER power for LCM — it is the opposite in each case",
            "Concluding a system has no solution from 0 = 0 — in modular equations, identity results mean infinitely many solutions (all integers in the residue class)",
            "Forgetting to include primes that appear in only one number when computing the LCM",
            "Treating 'a mod n' as always positive when a is negative — the remainder must be adjusted to lie in [0, n−1]"
        ],
        connections: [
            "Cryptography: the RSA algorithm encodes messages using modular exponentiation and relies on the computational difficulty of prime factorisation of large numbers",
            "Computer Science: hash functions, checksums, and cyclic redundancy checks (CRC) all use modular arithmetic; the GCD and Euclidean algorithm appear in fraction simplification and signal processing",
            "Calendar and Clock Problems: day-of-week calculations, scheduling, and cyclic event problems are all modular arithmetic applications",
            "Algebra: the integers modulo n form a ring — introducing abstract algebraic structure from concrete number theory",
            "Fractions: simplifying a fraction to lowest terms requires finding the GCD of numerator and denominator"
        ],
        examReadinessChecklist: [
            "Can you apply all divisibility rules (2, 3, 4, 5, 6, 9, 10) to a four-or-five-digit number without performing the full division?",
            "Can you find the prime factorisation of any three-digit number using a factor tree or repeated division?",
            "Can you determine whether a number up to 200 is prime by testing divisibility up to its square root?",
            "Can you find the GCD of two numbers using all three methods (listing, prime factorisation, Euclidean algorithm) and select the most efficient for a given problem?",
            "Can you find the LCM using prime factorisation and also via the GCD–LCM relationship formula?",
            "Can you evaluate a (mod n) for any positive or negative integer a, including large values by reducing step by step?",
            "Can you find the last digit of a large power by identifying the cycle length modulo 10?"
        ]
    }
},


coordinateGeometry: {
    title: "Coordinate Geometry: Points, Lines, and Circles on the Plane",

    databaseLinks: {
        misconceptions: [
            'coordinateGeometryBasics',
            'distanceAndMidpoint',
            'linesAndGradients',
            'circlesOnPlane',
            'geometricProofs'
        ],
        contextualScenarios: [
            'coordinateGeometryBasics',
            'distanceAndMidpoint',
            'linesAndGradients',
            'circlesOnPlane'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'graphingPractice',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'workedExampleAnalysis'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'coordinateGeometryBasics',
            'distanceAndMidpoint',
            'linesAndGradients',
            'circlesOnPlane'
        ]
    },

    conceptLinks: {
        "The distance between two points is found using the Pythagorean theorem": {
            misconceptions:      ['coordinateGeometryBasics', 'distanceAndMidpoint'],
            scenarios:           ['coordinateGeometryBasics', 'distanceAndMidpoint'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['coordinateGeometryBasics', 'distanceAndMidpoint']
        },
        "The midpoint of a segment is the average of the endpoints' coordinates": {
            misconceptions:      ['distanceAndMidpoint'],
            scenarios:           ['distanceAndMidpoint'],
            studyTips:           ['flashcards', 'practiceRoutines'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['distanceAndMidpoint']
        },
        "Gradient describes the steepness and direction of a line between two points": {
            misconceptions:      ['linesAndGradients'],
            scenarios:           ['linesAndGradients'],
            studyTips:           ['diagrams', 'comparisonTables', 'graphingPractice'],
            assessmentRubrics:   ['remember', 'understand', 'apply', 'analyze'],
            assessmentQuestions: ['linesAndGradients']
        },
        "A circle is defined as all points equidistant from a fixed centre": {
            misconceptions:      ['circlesOnPlane'],
            scenarios:           ['circlesOnPlane'],
            studyTips:           ['diagrams', 'flashcards', 'workedExampleAnalysis'],
            assessmentRubrics:   ['understand', 'apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['circlesOnPlane']
        },
        "Coordinate geometry translates geometric relationships into algebraic equations": {
            misconceptions:      ['geometricProofs'],
            scenarios:           ['coordinateGeometryBasics', 'linesAndGradients'],
            studyTips:           ['workedExampleAnalysis', 'comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['analyze', 'evaluate', 'create'],
            assessmentQuestions: ['coordinateGeometryBasics', 'linesAndGradients']
        }
    },

    topicIntroduction: {
        overview: "Coordinate geometry — also called analytical geometry or Cartesian geometry — is the branch of mathematics that uses algebra to study geometric shapes. By placing figures on a numbered coordinate plane, every geometric property (distance, angle, parallelism, area) becomes a calculable quantity. In this lesson we develop the key tools: the distance formula, the midpoint formula, gradient, equations of lines, and the equation of a circle, and apply them to prove geometric results and solve real-world problems.",
        whyItMatters: "Coordinate geometry is the bridge between pure geometry and algebra. It underlies computer graphics (every pixel is a coordinate), GPS and mapping (positions are coordinate pairs), engineering design (CAD systems are built on coordinate geometry), robotics (movement is calculated algebraically), and data science (scatter plots and regression lines are coordinate geometry). The ability to translate a geometric picture into an equation — and vice versa — is one of the most powerful skills in all of mathematics.",
        bigPicture: "Every geometric object on the plane can be described algebraically. A point is an ordered pair (x, y). A line is a linear equation. A circle is a quadratic equation. A parabola is another quadratic equation. Distance is computed using the Pythagorean theorem. Angles are computed using gradient relationships. Coordinate geometry unifies these ideas: the same plane, the same axes, the same algebra — applied to an unlimited variety of shapes and configurations.",
        priorKnowledge: [
            "The coordinate plane: x-axis, y-axis, four quadrants, plotting points as ordered pairs (x, y)",
            "Pythagorean theorem: a² + b² = c² for a right-angled triangle",
            "Linear equations: slope-intercept form y = mx + b, standard form Ax + By = C",
            "Slope (gradient): m = (y₂ − y₁)/(x₂ − x₁); parallel and perpendicular slope conditions",
            "Expanding and factorising quadratic expressions",
            "Solving simultaneous equations: substitution and elimination"
        ],
        topicRoadmap: [
            "Plotting and interpreting points in all four quadrants",
            "The distance formula: deriving it from Pythagoras and applying it",
            "The midpoint formula: finding the centre of a segment",
            "Gradient between two points and its geometric interpretation",
            "Equations of lines: all three forms, perpendicular bisectors",
            "The equation of a circle: centre-radius form and expanded form",
            "Intersection of lines with circles",
            "Coordinate proofs of geometric properties"
        ]
    },

    concepts: [
        "The distance between two points is found using the Pythagorean theorem",
        "The midpoint of a segment is the average of the endpoints' coordinates",
        "Gradient describes the steepness and direction of a line between two points",
        "Parallel lines have equal gradients; perpendicular lines have gradients whose product is −1",
        "A circle is defined as all points equidistant from a fixed centre",
        "Coordinate geometry translates geometric relationships into algebraic equations"
    ],

    theory: "Coordinate geometry assigns numerical coordinates to every point in the plane and uses algebraic equations to describe geometric objects. It was developed by René Descartes in the 17th century and provides the foundation for calculus, vectors, and all of modern mathematical analysis. The central insight is that any geometric property — distance, midpoint, angle, area — can be expressed as a calculation on coordinates, making geometry accessible to algebraic manipulation.",

    keyDefinitions: {
        "Coordinate Plane": "A flat surface defined by two perpendicular number lines (x-axis and y-axis) intersecting at the origin (0, 0)",
        "Ordered Pair": "A point (x, y) where x is the horizontal position and y is the vertical position",
        "Distance Formula": "The length of the segment between (x₁, y₁) and (x₂, y₂): d = √[(x₂−x₁)² + (y₂−y₁)²]",
        "Midpoint": "The point exactly halfway between two endpoints: M = ((x₁+x₂)/2, (y₁+y₂)/2)",
        "Gradient (Slope)": "The rate of change of y with respect to x: m = (y₂−y₁)/(x₂−x₁)",
        "Collinear Points": "Three or more points that all lie on the same straight line",
        "Perpendicular Bisector": "The line that passes through the midpoint of a segment and is perpendicular to it",
        "Circle": "The set of all points in the plane that are a fixed distance (radius) from a fixed point (centre)",
        "Radius": "The fixed distance from the centre of a circle to any point on the circle",
        "Tangent to a Circle": "A line that touches the circle at exactly one point and is perpendicular to the radius at that point"
    },

    distanceFormula: {
        derivation: "Consider two points A(x₁, y₁) and B(x₂, y₂). Draw a right-angled triangle with AB as the hypotenuse: the horizontal leg has length |x₂ − x₁| and the vertical leg has length |y₂ − y₁|. By the Pythagorean theorem: AB² = (x₂−x₁)² + (y₂−y₁)², so AB = √[(x₂−x₁)² + (y₂−y₁)²].",
        formula: "d = √[(x₂−x₁)² + (y₂−y₁)²]",
        note: "Squaring removes the need for absolute values since (x₂−x₁)² = (x₁−x₂)² regardless of which point is labelled 1 or 2",
        workedExamples: [
            {
                type: "Basic distance calculation",
                problem: "Find the distance between A(1, 2) and B(5, 5).",
                solution: [
                    "Step 1 — Identify coordinates: (x₁, y₁) = (1, 2), (x₂, y₂) = (5, 5)",
                    "Step 2 — Apply the formula: d = √[(5−1)² + (5−2)²]",
                    "Step 3 — Compute differences: d = √[4² + 3²]",
                    "Step 4 — Square: d = √[16 + 9] = √25",
                    "Step 5 — Simplify: d = 5",
                    "Verification: the 3-4-5 Pythagorean triple confirms this is exact"
                ]
            },
            {
                type: "Proving a triangle is right-angled",
                problem: "The points P(0, 0), Q(4, 0), and R(4, 3) form a triangle. Show that the triangle is right-angled and find the length of the hypotenuse.",
                solution: [
                    "Step 1 — Find PQ: d = √[(4−0)² + (0−0)²] = √16 = 4",
                    "Step 2 — Find QR: d = √[(4−4)² + (3−0)²] = √9 = 3",
                    "Step 3 — Find PR (hypotenuse candidate): d = √[(4−0)² + (3−0)²] = √[16+9] = √25 = 5",
                    "Step 4 — Check Pythagorean theorem: PQ² + QR² = 16 + 9 = 25 = PR² ✓",
                    "Conclusion: triangle PQR is right-angled at Q; hypotenuse PR = 5"
                ]
            },
            {
                type: "Finding an unknown coordinate",
                problem: "The distance from A(3, y) to B(7, 2) is 5. Find the possible values of y.",
                solution: [
                    "Step 1 — Apply the distance formula: 5 = √[(7−3)² + (2−y)²]",
                    "Step 2 — Square both sides: 25 = 16 + (2−y)²",
                    "Step 3 — Subtract 16: (2−y)² = 9",
                    "Step 4 — Take square root: 2−y = ±3",
                    "Step 5 — Solve both cases: y = 2−3 = −1 or y = 2+3 = 5",
                    "Answer: y = −1 or y = 5"
                ]
            }
        ]
    },

    midpointFormula: {
        derivation: "The midpoint M of segment AB is the point halfway between A(x₁, y₁) and B(x₂, y₂). The x-coordinate of M is the average of x₁ and x₂; the y-coordinate is the average of y₁ and y₂.",
        formula: "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
        workedExamples: [
            {
                type: "Finding the midpoint",
                problem: "Find the midpoint of the segment joining A(−2, 5) and B(6, −1).",
                solution: [
                    "Step 1 — Apply the formula: M = ((−2+6)/2, (5+(−1))/2)",
                    "Step 2 — Compute: M = (4/2, 4/2)",
                    "Step 3 — Simplify: M = (2, 2)",
                    "Verification: check that AM = MB using the distance formula — both equal √(16+9) = 5 ✓"
                ]
            },
            {
                type: "Finding an endpoint given midpoint",
                problem: "M(3, −1) is the midpoint of segment AB. If A = (1, 4), find B.",
                solution: [
                    "Step 1 — Let B = (x, y). Use midpoint formula: (1+x)/2 = 3 and (4+y)/2 = −1",
                    "Step 2 — Solve for x: 1+x = 6 → x = 5",
                    "Step 3 — Solve for y: 4+y = −2 → y = −6",
                    "Answer: B = (5, −6)",
                    "Verification: midpoint of (1,4) and (5,−6) = ((1+5)/2, (4−6)/2) = (3, −1) ✓"
                ]
            }
        ]
    },

    gradientAndLines: {
        gradientFormula: "m = (y₂ − y₁) / (x₂ − x₁)",
        parallelCondition: "Two lines are parallel if and only if their gradients are equal: m₁ = m₂",
        perpendicularCondition: "Two lines are perpendicular if and only if m₁ × m₂ = −1 (gradients are negative reciprocals)",
        equationsOfLines: {
            slopeIntercept: "y = mx + c (m = gradient, c = y-intercept)",
            pointSlope:     "y − y₁ = m(x − x₁) (gradient m through point (x₁, y₁))",
            general:        "ax + by + c = 0"
        },
        perpendicularBisector: {
            definition: "The perpendicular bisector of segment AB passes through the midpoint of AB and is perpendicular to AB",
            procedure: [
                "Find the midpoint M of AB using the midpoint formula",
                "Find the gradient of AB using the gradient formula",
                "Find the gradient of the perpendicular bisector: m⊥ = −1/m_AB",
                "Write the equation of the line through M with gradient m⊥ using point-slope form"
            ],
            workedExample: {
                problem: "Find the equation of the perpendicular bisector of the segment joining A(2, 1) and B(6, 5).",
                solution: [
                    "Step 1 — Midpoint: M = ((2+6)/2, (1+5)/2) = (4, 3)",
                    "Step 2 — Gradient of AB: m = (5−1)/(6−2) = 4/4 = 1",
                    "Step 3 — Gradient of perpendicular bisector: m⊥ = −1/1 = −1",
                    "Step 4 — Equation through (4, 3) with gradient −1: y − 3 = −1(x − 4)",
                    "Step 5 — Simplify: y = −x + 7",
                    "Verification: check (4, 3) lies on y = −x + 7: 3 = −4 + 7 = 3 ✓"
                ]
            }
        },
        workedExamples: [
            {
                type: "Equation of a line through two points",
                problem: "Find the equation of the line through P(−1, 3) and Q(3, 11). Express in the form y = mx + c.",
                solution: [
                    "Step 1 — Gradient: m = (11−3)/(3−(−1)) = 8/4 = 2",
                    "Step 2 — Point-slope using P(−1, 3): y − 3 = 2(x − (−1))",
                    "Step 3 — Expand: y − 3 = 2x + 2",
                    "Step 4 — Rearrange: y = 2x + 5",
                    "Verification using Q(3, 11): y = 2(3) + 5 = 11 ✓"
                ]
            },
            {
                type: "Proving lines are perpendicular",
                problem: "Show that the line through A(0, 2) and B(3, 8) is perpendicular to the line through C(1, 5) and D(3, 4).",
                solution: [
                    "Step 1 — Gradient of AB: m₁ = (8−2)/(3−0) = 6/3 = 2",
                    "Step 2 — Gradient of CD: m₂ = (4−5)/(3−1) = −1/2",
                    "Step 3 — Check: m₁ × m₂ = 2 × (−1/2) = −1 ✓",
                    "Conclusion: the lines are perpendicular"
                ]
            },
            {
                type: "Collinearity of three points",
                problem: "Determine whether the points A(1, 2), B(3, 6), and C(5, 10) are collinear.",
                solution: [
                    "Step 1 — Gradient of AB: m = (6−2)/(3−1) = 4/2 = 2",
                    "Step 2 — Gradient of BC: m = (10−6)/(5−3) = 4/2 = 2",
                    "Step 3 — Since gradient AB = gradient BC = 2 and B is a shared point, A, B, C are collinear",
                    "Alternative: equation through A and B is y = 2x; check C: y = 2(5) = 10 ✓"
                ]
            }
        ]
    },

    circleEquations: {
        centreRadiusForm: {
            form: "(x − a)² + (y − b)² = r²",
            centre: "(a, b)",
            radius: "r",
            interpretation: "Every point (x, y) on the circle is exactly r units from the centre (a, b) — this is the definition of a circle expressed algebraically",
            specialCase: "Circle centred at the origin: x² + y² = r²"
        },
        expandedForm: {
            form: "x² + y² + 2gx + 2fy + c = 0",
            centre: "(−g, −f)",
            radius: "r = √(g² + f² − c)",
            condition: "This represents a real circle only when g² + f² − c > 0",
            derivation: "Expanding (x−a)² + (y−b)² = r² and letting g = −a, f = −b, c = a² + b² − r²"
        },
        workedExamples: [
            {
                type: "Writing the equation of a circle",
                problem: "Write the equation of the circle with centre (3, −2) and radius 5.",
                solution: [
                    "Step 1 — Apply centre-radius form: (x − 3)² + (y − (−2))² = 5²",
                    "Step 2 — Simplify: (x − 3)² + (y + 2)² = 25",
                    "Verification: check that (3+5, −2) = (8, −2) lies on the circle: (8−3)² + (−2+2)² = 25 + 0 = 25 ✓"
                ]
            },
            {
                type: "Finding centre and radius from expanded form",
                problem: "Find the centre and radius of the circle x² + y² − 6x + 4y − 12 = 0.",
                solution: [
                    "Step 1 — Group x and y terms: (x² − 6x) + (y² + 4y) = 12",
                    "Step 2 — Complete the square for x: (x − 3)² − 9",
                    "Step 3 — Complete the square for y: (y + 2)² − 4",
                    "Step 4 — Substitute: (x − 3)² − 9 + (y + 2)² − 4 = 12",
                    "Step 5 — Rearrange: (x − 3)² + (y + 2)² = 25",
                    "Centre = (3, −2), radius = √25 = 5"
                ]
            },
            {
                type: "Determining if a point is inside, on, or outside a circle",
                problem: "Circle C has equation (x − 2)² + (y − 1)² = 16. Determine whether the point P(5, 4) is inside, on, or outside the circle.",
                solution: [
                    "Step 1 — Substitute P(5, 4) into the left side: (5−2)² + (4−1)² = 9 + 9 = 18",
                    "Step 2 — Compare to r² = 16: 18 > 16",
                    "Conclusion: P is outside the circle (distance from centre > radius)"
                ]
            },
            {
                type: "Tangent to a circle at a given point",
                problem: "Find the equation of the tangent to the circle x² + y² = 25 at the point P(3, 4).",
                solution: [
                    "Step 1 — The radius OP has gradient: m = (4−0)/(3−0) = 4/3",
                    "Step 2 — The tangent is perpendicular to the radius at P, so its gradient is: m_t = −3/4",
                    "Step 3 — Equation of tangent through P(3, 4): y − 4 = −(3/4)(x − 3)",
                    "Step 4 — Multiply through by 4: 4y − 16 = −3(x − 3) = −3x + 9",
                    "Step 5 — Rearrange: 3x + 4y = 25",
                    "Verification: substitute P(3, 4): 3(3) + 4(4) = 9 + 16 = 25 ✓"
                ]
            }
        ],
        intersectionWithLines: {
            procedure: [
                "Substitute the equation of the line into the equation of the circle to eliminate one variable",
                "Rearrange into a quadratic equation in the remaining variable",
                "Solve the quadratic — the discriminant determines the number of intersections",
                "Back-substitute to find the corresponding values of the eliminated variable"
            ],
            discriminantInterpretation: {
                twoSolutions:    "b² − 4ac > 0: the line intersects the circle at two distinct points",
                oneSolution:     "b² − 4ac = 0: the line is a tangent — touches at exactly one point",
                noSolution:      "b² − 4ac < 0: the line does not intersect the circle"
            },
            workedExample: {
                problem: "Find the points of intersection of the line y = x + 1 and the circle x² + y² = 25.",
                solution: [
                    "Step 1 — Substitute y = x + 1 into x² + y² = 25: x² + (x+1)² = 25",
                    "Step 2 — Expand: x² + x² + 2x + 1 = 25",
                    "Step 3 — Simplify: 2x² + 2x − 24 = 0 → x² + x − 12 = 0",
                    "Step 4 — Factorise: (x + 4)(x − 3) = 0 → x = −4 or x = 3",
                    "Step 5 — Find y values: x = −4 → y = −3; x = 3 → y = 4",
                    "Intersection points: (−4, −3) and (3, 4)",
                    "Verification: (−4)² + (−3)² = 16 + 9 = 25 ✓; 3² + 4² = 9 + 16 = 25 ✓"
                ]
            }
        }
    },

    coordinateProofs: {
        purpose: "Coordinate proofs use algebra to verify geometric theorems that are difficult to prove using classical methods alone. A geometric property is proved by placing the figure on the coordinate plane, computing the relevant quantities algebraically, and demonstrating the property holds for all valid coordinate choices.",
        strategy: [
            "Place the figure on the coordinate plane — position it to minimise calculation (e.g. put one vertex at the origin, one side along an axis)",
            "Assign general coordinates using variables where specific values are not given",
            "Compute the required quantities (distances, midpoints, gradients) algebraically",
            "Show that the computed quantities satisfy the geometric property"
        ],
        workedExamples: [
            {
                type: "Proving the midpoint theorem",
                problem: "Prove that the segment joining the midpoints of two sides of a triangle is parallel to the third side and half its length.",
                solution: [
                    "Step 1 — Place triangle with vertices A(0, 0), B(2a, 0), C(2b, 2c) to make midpoint calculations clean",
                    "Step 2 — Find midpoint M of AC: M = ((0+2b)/2, (0+2c)/2) = (b, c)",
                    "Step 3 — Find midpoint N of BC: N = ((2a+2b)/2, (0+2c)/2) = (a+b, c)",
                    "Step 4 — Gradient of MN: m = (c−c)/((a+b)−b) = 0/a = 0",
                    "Step 5 — Gradient of AB: m = (0−0)/(2a−0) = 0",
                    "Step 6 — Both gradients are 0 → MN is parallel to AB ✓",
                    "Step 7 — Length of MN: |a+b − b| = a",
                    "Step 8 — Length of AB: 2a",
                    "Step 9 — MN = a = (1/2)(2a) = (1/2)AB ✓"
                ]
            },
            {
                type: "Proving diagonals of a rectangle bisect each other",
                problem: "Prove that the diagonals of a rectangle bisect each other.",
                solution: [
                    "Step 1 — Place rectangle with vertices A(0, 0), B(a, 0), C(a, b), D(0, b)",
                    "Step 2 — Midpoint of diagonal AC: M₁ = ((0+a)/2, (0+b)/2) = (a/2, b/2)",
                    "Step 3 — Midpoint of diagonal BD: M₂ = ((a+0)/2, (0+b)/2) = (a/2, b/2)",
                    "Step 4 — M₁ = M₂ → the diagonals share the same midpoint → they bisect each other ✓"
                ]
            }
        ]
    },

    topicSummary: {
        coreInsights: [
            "The distance formula d = √[(x₂−x₁)² + (y₂−y₁)²] is simply the Pythagorean theorem applied to a horizontal and vertical right-angled triangle — this derivation should be understood, not just memorised.",
            "The midpoint formula averages the coordinates: M = ((x₁+x₂)/2, (y₁+y₂)/2). It is the algebraic equivalent of finding the halfway point on each axis independently.",
            "Gradient is the rate of change of y per unit change in x. The condition m₁ × m₂ = −1 for perpendicular lines follows geometrically from rotating a direction vector by 90°.",
            "The perpendicular bisector of a segment passes through the midpoint and has the negative reciprocal gradient — it is the locus of all points equidistant from both endpoints.",
            "The circle equation (x−a)² + (y−b)² = r² encodes the definition of a circle (constant distance r from centre (a, b)) as an algebraic statement of the Pythagorean theorem.",
            "Completing the square converts the expanded form of a circle equation into centre-radius form — this is the same algebraic technique used for completing the square in quadratics.",
            "The discriminant of the quadratic formed when substituting a line into a circle determines whether the line is a secant (two intersections), tangent (one), or external (none).",
            "Coordinate proofs are a systematic method: place the figure strategically on axes, assign general coordinates, compute algebraically, and confirm the geometric property."
        ],
        keyFormulas: {
            distanceFormula:         "d = √[(x₂−x₁)² + (y₂−y₁)²]",
            midpointFormula:         "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
            gradientFormula:         "m = (y₂−y₁)/(x₂−x₁)",
            parallelCondition:       "m₁ = m₂",
            perpendicularCondition:  "m₁ × m₂ = −1",
            circleEquation:          "(x−a)² + (y−b)² = r²",
            expandedCircle:          "x² + y² + 2gx + 2fy + c = 0  (centre (−g,−f), r = √(g²+f²−c))",
            tangentAtPoint:          "Tangent at (x₁,y₁) on x²+y²=r² is: x·x₁ + y·y₁ = r²"
        },
        commonMistakesToAvoid: [
            "Subtracting coordinates in the wrong order in the distance formula — always square the differences so order does not matter, but be consistent to avoid sign errors in other contexts",
            "Confusing (x−a)² with (x+a)² when reading the centre from circle equation — the centre coordinates are opposite in sign to what appears in the brackets",
            "Forgetting to complete the square on BOTH x and y terms when converting from expanded to centre-radius form",
            "Using rise/run as run/rise — slope is always vertical change divided by horizontal change",
            "Concluding the three points are collinear from checking only two pairs of gradients without confirming a shared point — though in practice this is rarely an issue if done correctly",
            "Finding the gradient of the radius and using it (rather than its negative reciprocal) as the gradient of the tangent"
        ],
        connections: [
            "Pythagoras: the distance formula is the Pythagorean theorem in coordinate form",
            "Quadratic equations: completing the square for circle equations; the discriminant for line-circle intersections",
            "Linear equations: all line work in coordinate geometry builds directly on slope-intercept and point-slope forms",
            "Vectors: gradient is the ratio of vector components; perpendicular condition connects to the dot product being zero",
            "Calculus: the gradient formula anticipates the derivative — the gradient of the tangent at a point on a curve is the foundation of differential calculus",
            "Trigonometry: angle of inclination θ of a line satisfies tan θ = m, connecting gradient to trigonometric ratios"
        ],
        examReadinessChecklist: [
            "Can you apply the distance formula to find the length of any segment and to find an unknown coordinate?",
            "Can you find the midpoint of any segment and find an unknown endpoint given the midpoint?",
            "Can you write the equation of a line through two points, through a point with a given gradient, parallel to a given line, and perpendicular to a given line?",
            "Can you find the equation of the perpendicular bisector of a segment from scratch?",
            "Can you write the equation of a circle given centre and radius, and extract centre and radius from expanded form by completing the square?",
            "Can you determine the number of intersections between a line and circle using the discriminant?",
            "Can you find the equation of the tangent to a circle at a given point using the perpendicular radius?"
        ]
    }
},



matrices: {
    title: "Matrices: Operations, Transformations, and Systems",

    databaseLinks: {
        misconceptions: [
            'matrixBasics',
            'matrixOperations',
            'determinantsAndInverses',
            'matrixEquations',
            'transformations'
        ],
        contextualScenarios: [
            'matrixBasics',
            'matrixOperations',
            'determinantsAndInverses',
            'matrixEquations'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'graphingPractice',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'workedExampleAnalysis'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'matrixBasics',
            'matrixOperations',
            'determinantsAndInverses',
            'matrixEquations'
        ]
    },

    conceptLinks: {
        "A matrix is a rectangular array of numbers organised in rows and columns": {
            misconceptions:       ['matrixBasics'],
            scenarios:            ['matrixBasics'],
            studyTips:            ['diagrams', 'flashcards'],
            assessmentRubrics:    ['remember', 'understand'],
            assessmentQuestions:  ['matrixBasics']
        },
        "Matrix multiplication is defined by the row-by-column dot product rule and is not commutative": {
            misconceptions:       ['matrixOperations'],
            scenarios:            ['matrixOperations'],
            studyTips:            ['comparisonTables', 'flashcards', 'practiceRoutines'],
            assessmentRubrics:    ['remember', 'understand', 'apply'],
            assessmentQuestions:  ['matrixOperations']
        },
        "The determinant of a square matrix encodes whether the matrix has an inverse": {
            misconceptions:       ['determinantsAndInverses'],
            scenarios:            ['determinantsAndInverses'],
            studyTips:            ['diagrams', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:    ['understand', 'apply', 'analyze'],
            assessmentQuestions:  ['determinantsAndInverses']
        },
        "A matrix equation AX = B is solved by multiplying both sides by the inverse matrix A⁻¹": {
            misconceptions:       ['matrixEquations'],
            scenarios:            ['matrixEquations'],
            studyTips:            ['workedExampleAnalysis', 'practiceRoutines'],
            assessmentRubrics:    ['apply', 'analyze', 'evaluate'],
            assessmentQuestions:  ['matrixEquations']
        },
        "Matrices represent linear transformations of the plane including rotation, reflection, and scaling": {
            misconceptions:       ['transformations'],
            scenarios:            ['matrixBasics'],
            studyTips:            ['diagrams', 'graphingPractice', 'comparisonTables'],
            assessmentRubrics:    ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions:  ['matrixBasics']
        }
    },

    topicIntroduction: {
        overview: "A matrix is a rectangular grid of numbers that acts as a single mathematical object. Matrices organise data, encode systems of equations, and describe geometric transformations — all within a unified algebraic framework. In this lesson, we develop fluency in matrix notation, arithmetic operations, determinants, inverses, and the use of matrices to solve systems of linear equations and describe transformations of the plane.",
        whyItMatters: "Matrices are the computational backbone of virtually every quantitative field. Computer graphics use matrices to rotate, scale, and project images onto screens. Machine learning uses matrix multiplication at the core of neural network forward passes. Engineers use matrices to model structural forces and electrical networks. Economists use input-output matrices to model entire national economies. Mastery of matrices is the gateway to linear algebra, which is the mathematical language of the modern world.",
        bigPicture: "A matrix is a compact notation for a system of linear relationships. Adding matrices combines corresponding relationships; multiplying matrices composes them — applying one transformation after another. The determinant measures whether a matrix is invertible (whether the system it encodes has a unique solution). The inverse matrix undoes the transformation, and solving AX = B via X = A⁻¹B is the matrix equivalent of dividing both sides of a scalar equation by a coefficient. Every technique in this lesson is a different facet of the same geometric question: what does this matrix do to space?",
        priorKnowledge: [
            "Linear equations: solving, systems, slope-intercept form",
            "Arithmetic with integers, fractions, and negative numbers",
            "Order of operations and algebraic notation",
            "Coordinate geometry: the x-y plane and ordered pairs",
            "Basic function composition: applying one operation after another"
        ],
        topicRoadmap: [
            "Matrix notation: dimensions, elements, row and column indexing",
            "Matrix addition, subtraction, and scalar multiplication",
            "Matrix multiplication: the row-by-column dot product rule and when it is defined",
            "Special matrices: zero matrix, identity matrix, diagonal matrix, symmetric matrix",
            "Transpose of a matrix",
            "Determinant of a 2×2 matrix and its geometric meaning (area scale factor)",
            "Inverse of a 2×2 matrix and the conditions for invertibility",
            "Solving systems of linear equations using the matrix equation AX = B",
            "Matrices as linear transformations: rotation, reflection, scaling, and shear"
        ]
    },

    concepts: [
        "A matrix is a rectangular array of numbers organised in rows and columns",
        "Matrix addition and scalar multiplication operate element-by-element",
        "Matrix multiplication is defined by the row-by-column dot product rule and is not commutative",
        "The identity matrix I acts as the multiplicative identity: AI = IA = A",
        "The determinant of a square matrix encodes whether the matrix has an inverse",
        "A matrix equation AX = B is solved by multiplying both sides by the inverse matrix A⁻¹",
        "Matrices represent linear transformations of the plane including rotation, reflection, and scaling"
    ],

    theory: "A matrix is a rectangular array of numbers (or other mathematical objects) arranged in rows and columns, treated as a single entity subject to its own rules of arithmetic. Matrix algebra extends the algebra of numbers into higher dimensions, providing the language for linear transformations, systems of equations, and data structures across mathematics, science, and engineering. The fundamental insight of matrix theory is that linear relationships — equations of the form ax + by = c — can be compressed into a single matrix equation AX = B, transforming the problem of solving many equations simultaneously into the problem of inverting a single object.",

    keyDefinitions: {
        "Matrix": "A rectangular array of numbers arranged in m rows and n columns, denoted by a capital letter (e.g. A); described as an m×n matrix",
        "Element (Entry)": "An individual number within a matrix; the element in row i and column j of matrix A is written aᵢⱼ",
        "Order (Dimension)": "The size of a matrix expressed as m×n (rows × columns); a 3×2 matrix has 3 rows and 2 columns",
        "Square Matrix": "A matrix with equal numbers of rows and columns (m = n); only square matrices can have determinants and inverses",
        "Row Matrix": "A matrix with exactly one row (1×n); also called a row vector",
        "Column Matrix": "A matrix with exactly one column (m×1); also called a column vector",
        "Zero Matrix (O)": "A matrix in which every element is 0; the additive identity: A + O = A",
        "Identity Matrix (I)": "A square matrix with 1s on the main diagonal and 0s everywhere else; the multiplicative identity: AI = IA = A",
        "Transpose (Aᵀ)": "The matrix formed by swapping rows and columns of A; the element in row i, column j of Aᵀ is the element in row j, column i of A",
        "Symmetric Matrix": "A square matrix equal to its own transpose: A = Aᵀ; elements are symmetric about the main diagonal",
        "Determinant (det A or |A|)": "A scalar value computed from a square matrix encoding geometric and algebraic properties; for a 2×2 matrix: det A = ad − bc",
        "Singular Matrix": "A matrix whose determinant is zero; it has no inverse and the associated system of equations has either no solution or infinitely many",
        "Non-singular (Invertible) Matrix": "A matrix whose determinant is non-zero; it has a unique inverse",
        "Inverse Matrix (A⁻¹)": "The matrix such that A A⁻¹ = A⁻¹ A = I; exists only for non-singular square matrices",
        "Linear Transformation": "A function that maps vectors to vectors, preserving addition and scalar multiplication; every 2×2 matrix defines a linear transformation of the plane"
    },

    matrixNotation: {
        explanation: "A matrix is written using square or round brackets enclosing rows of numbers separated by spaces or commas. The order is always stated as rows × columns.",
        examples: {
            twoByTwo:   "A = [[3, 1], [−2, 4]] — a 2×2 matrix with a₁₁ = 3, a₁₂ = 1, a₂₁ = −2, a₂₂ = 4",
            twoByThree: "B = [[1, 0, −1], [2, 3, 5]] — a 2×3 matrix; 2 rows, 3 columns",
            threeByOne: "C = [[4], [−1], [2]] — a 3×1 column vector",
            identity2:  "I₂ = [[1, 0], [0, 1]] — the 2×2 identity matrix"
        },
        indexingNote: "The element aᵢⱼ is in the iᵗʰ row and jᵗʰ column. The row index always precedes the column index. In A = [[3, 1], [−2, 4]]: a₁₂ = 1 (row 1, column 2); a₂₁ = −2 (row 2, column 1)."
    },

    matrixAdditionAndSubtraction: {
        rule: "Two matrices can be added or subtracted only if they have the same order. Addition and subtraction are performed element-by-element: (A ± B)ᵢⱼ = aᵢⱼ ± bᵢⱼ",
        properties: {
            commutative: "A + B = B + A",
            associative: "A + (B + C) = (A + B) + C",
            additiveIdentity: "A + O = A (where O is the zero matrix of the same order)",
            additiveInverse: "A + (−A) = O"
        },
        workedExample: {
            problem: "Given A = [[3, −1], [2, 5]] and B = [[−2, 4], [1, −3]], find A + B and A − B.",
            solution: [
                "A + B: add corresponding elements",
                "Row 1: (3 + (−2), −1 + 4) = (1, 3)",
                "Row 2: (2 + 1, 5 + (−3)) = (3, 2)",
                "A + B = [[1, 3], [3, 2]]",
                "",
                "A − B: subtract corresponding elements",
                "Row 1: (3 − (−2), −1 − 4) = (5, −5)",
                "Row 2: (2 − 1, 5 − (−3)) = (1, 8)",
                "A − B = [[5, −5], [1, 8]]"
            ]
        }
    },

    scalarMultiplication: {
        rule: "Multiplying a matrix by a scalar k multiplies every element of the matrix by k: (kA)ᵢⱼ = k · aᵢⱼ",
        properties: {
            distributiveOverMatrices: "k(A + B) = kA + kB",
            distributiveOverScalars: "(k + l)A = kA + lA",
            associative: "k(lA) = (kl)A"
        },
        workedExample: {
            problem: "Given A = [[4, −2], [0, 6]], find 3A and −(1/2)A.",
            solution: [
                "3A: multiply every element by 3",
                "3A = [[12, −6], [0, 18]]",
                "",
                "−(1/2)A: multiply every element by −1/2",
                "−(1/2)A = [[−2, 1], [0, −3]]"
            ]
        }
    },

    matrixMultiplication: {
        compatibilityRule: "Matrix A (m×n) can be multiplied by matrix B (p×q) only if n = p (the number of columns of A equals the number of rows of B). The resulting matrix AB has order m×q.",
        dotProductRule: "The element in row i and column j of AB is the dot product of row i of A with column j of B: (AB)ᵢⱼ = Σₖ aᵢₖ bₖⱼ",
        nonCommutativity: "In general, AB ≠ BA. The order of multiplication matters. Even when both products are defined (for square matrices), they are usually different. This is the most important property distinguishing matrix multiplication from scalar multiplication.",
        properties: {
            associative:        "A(BC) = (AB)C",
            distributive:       "A(B + C) = AB + AC",
            identityElement:    "AI = IA = A",
            notCommutative:     "AB ≠ BA in general",
            transposeOfProduct: "(AB)ᵀ = BᵀAᵀ (note the reversal of order)"
        },
        workedExample2x2: {
            problem: "Given A = [[2, 3], [1, −1]] and B = [[4, 0], [−2, 5]], calculate AB and BA.",
            solution: [
                "AB: A is 2×2, B is 2×2 → AB is 2×2",
                "",
                "Row 1 of A × Column 1 of B: (2)(4) + (3)(−2) = 8 − 6 = 2",
                "Row 1 of A × Column 2 of B: (2)(0) + (3)(5) = 0 + 15 = 15",
                "Row 2 of A × Column 1 of B: (1)(4) + (−1)(−2) = 4 + 2 = 6",
                "Row 2 of A × Column 2 of B: (1)(0) + (−1)(5) = 0 − 5 = −5",
                "",
                "AB = [[2, 15], [6, −5]]",
                "",
                "BA: Row 1 of B × Column 1 of A: (4)(2) + (0)(1) = 8",
                "Row 1 of B × Column 2 of A: (4)(3) + (0)(−1) = 12",
                "Row 2 of B × Column 1 of A: (−2)(2) + (5)(1) = −4 + 5 = 1",
                "Row 2 of B × Column 2 of A: (−2)(3) + (5)(−1) = −6 − 5 = −11",
                "",
                "BA = [[8, 12], [1, −11]]",
                "",
                "Conclusion: AB ≠ BA — matrix multiplication is NOT commutative"
            ]
        },
        workedExampleCompatibility: {
            problem: "A is 2×3 and B is 3×4. State the order of AB and BA (if defined).",
            solution: [
                "AB: inner dimensions match (3 = 3) → defined. Order: 2×4 (outer dimensions of A and B)",
                "BA: B is 3×4, A is 2×3. Inner dimensions: 4 ≠ 2 → BA is NOT defined",
                "Conclusion: AB is defined (2×4); BA is not defined — a concrete demonstration that order is critical"
            ]
        }
    },

    transpose: {
        definition: "The transpose of an m×n matrix A is the n×m matrix Aᵀ formed by reflecting A across its main diagonal: the rows of A become the columns of Aᵀ, and vice versa.",
        properties: {
            doubleTranspose: "(Aᵀ)ᵀ = A",
            transposeOfSum: "(A + B)ᵀ = Aᵀ + Bᵀ",
            transposeOfProduct: "(AB)ᵀ = BᵀAᵀ",
            symmetricCondition: "A is symmetric if A = Aᵀ"
        },
        workedExample: {
            problem: "Find the transpose of A = [[1, 2, 3], [4, 5, 6]].",
            solution: [
                "A is 2×3, so Aᵀ is 3×2",
                "Row 1 of A becomes Column 1 of Aᵀ: [1, 4]",
                "Row 2 of A becomes Column 2 of Aᵀ: [2, 5]",
                "Row 3 does not exist — Column 3 of Aᵀ comes from the third element of each row of A: [3, 6]",
                "Aᵀ = [[1, 4], [2, 5], [3, 6]]",
                "Verify: (Aᵀ)ᵀ should return A — swapping rows/columns of [[1,4],[2,5],[3,6]] gives [[1,2,3],[4,5,6]] ✓"
            ]
        }
    },

    determinant: {
        definition2x2: "For a 2×2 matrix A = [[a, b], [c, d]], the determinant is: det(A) = |A| = ad − bc",
        geometricMeaning: "The absolute value of the determinant equals the area scale factor of the transformation represented by the matrix. If det(A) = 0, the transformation collapses the plane onto a line or point (the matrix is singular). If det(A) = 2, the matrix doubles all areas.",
        signMeaning: "A positive determinant preserves orientation (like a rotation); a negative determinant reverses orientation (like a reflection).",
        definition3x3: "For a 3×3 matrix, the determinant is computed by cofactor expansion along any row or column. Expanding along row 1: det(A) = a₁₁(a₂₂a₃₃ − a₂₃a₃₂) − a₁₂(a₂₁a₃₃ − a₂₃a₃₁) + a₁₃(a₂₁a₃₂ − a₂₂a₃₁)",
        workedExample2x2: {
            problem: "Find det(A) for A = [[5, 2], [3, 4]].",
            solution: [
                "det(A) = ad − bc",
                "a = 5, b = 2, c = 3, d = 4",
                "det(A) = (5)(4) − (2)(3)",
                "det(A) = 20 − 6 = 14",
                "Since det(A) = 14 ≠ 0, the matrix is non-singular (invertible)"
            ]
        },
        workedExample3x3: {
            problem: "Find det(A) for A = [[2, 1, 3], [0, −1, 4], [5, 2, −2]].",
            solution: [
                "Expand along row 1:",
                "det(A) = 2 · |[−1, 4], [2, −2]| − 1 · |[0, 4], [5, −2]| + 3 · |[0, −1], [5, 2]|",
                "",
                "Minor M₁₁ = (−1)(−2) − (4)(2) = 2 − 8 = −6",
                "Minor M₁₂ = (0)(−2) − (4)(5) = 0 − 20 = −20",
                "Minor M₁₃ = (0)(2) − (−1)(5) = 0 + 5 = 5",
                "",
                "det(A) = 2(−6) − 1(−20) + 3(5)",
                "det(A) = −12 + 20 + 15 = 23"
            ]
        },
        propertiesOfDeterminants: {
            singularCondition: "det(A) = 0 if and only if A is singular (non-invertible)",
            productRule: "det(AB) = det(A) · det(B)",
            transposeRule: "det(Aᵀ) = det(A)",
            scalarRule: "det(kA) = kⁿ · det(A) for an n×n matrix",
            rowOperation: "Swapping two rows of a matrix negates its determinant; multiplying a row by k multiplies the determinant by k"
        }
    },

    inverseMatrix: {
        definition: "The inverse of a square matrix A, written A⁻¹, is the unique matrix such that AA⁻¹ = A⁻¹A = I. It exists if and only if det(A) ≠ 0.",
        formula2x2: "For A = [[a, b], [c, d]] with det(A) = ad − bc ≠ 0: A⁻¹ = (1/det(A)) · [[d, −b], [−c, a]]. The procedure is: swap the diagonal elements (a ↔ d), negate the off-diagonal elements (b → −b, c → −c), then divide every element by det(A).",
        workedExample: {
            problem: "Find the inverse of A = [[5, 2], [3, 4]].",
            solution: [
                "Step 1 — Calculate det(A): det(A) = (5)(4) − (2)(3) = 20 − 6 = 14",
                "Step 2 — Check invertibility: det(A) = 14 ≠ 0 → A⁻¹ exists",
                "Step 3 — Apply the 2×2 inverse formula:",
                "   Swap diagonal: d = 4, a = 5 → [[4, ?], [?, 5]]",
                "   Negate off-diagonal: b = 2 → −2; c = 3 → −3",
                "   Adjugate matrix: [[4, −2], [−3, 5]]",
                "Step 4 — Divide by det(A) = 14:",
                "A⁻¹ = (1/14) · [[4, −2], [−3, 5]] = [[4/14, −2/14], [−3/14, 5/14]] = [[2/7, −1/7], [−3/14, 5/14]]",
                "",
                "Verification — compute AA⁻¹:",
                "Row 1 × Col 1: (5)(2/7) + (2)(−3/14) = 10/7 − 6/14 = 20/14 − 6/14 = 14/14 = 1 ✓",
                "Row 1 × Col 2: (5)(−1/7) + (2)(5/14) = −5/7 + 10/14 = −10/14 + 10/14 = 0 ✓",
                "Row 2 × Col 1: (3)(2/7) + (4)(−3/14) = 6/7 − 12/14 = 12/14 − 12/14 = 0 ✓",
                "Row 2 × Col 2: (3)(−1/7) + (4)(5/14) = −3/7 + 20/14 = −6/14 + 20/14 = 14/14 = 1 ✓",
                "AA⁻¹ = [[1, 0], [0, 1]] = I ✓"
            ]
        },
        singularMatrixExample: {
            problem: "Show that B = [[2, 4], [1, 2]] is singular.",
            solution: [
                "det(B) = (2)(2) − (4)(1) = 4 − 4 = 0",
                "Since det(B) = 0, B is singular — no inverse exists",
                "Geometric interpretation: the rows [2, 4] and [1, 2] are proportional (row 1 = 2 × row 2), meaning the matrix collapses the plane onto a line"
            ]
        }
    },

    solvingSystemsUsingMatrices: {
        matrixFormOfSystem: "A system of linear equations can be written in the compact form AX = B, where A is the coefficient matrix, X is the column vector of unknowns, and B is the column vector of constants.",
        solution: "If A is invertible (det(A) ≠ 0), the unique solution is X = A⁻¹B. Multiplying both sides on the left by A⁻¹: A⁻¹(AX) = A⁻¹B → IX = A⁻¹B → X = A⁻¹B.",
        warningOnOrder: "The multiplication must be A⁻¹B, NOT BA⁻¹ — because matrix multiplication is not commutative. Always pre-multiply both sides by A⁻¹.",
        workedExample: {
            problem: "Solve the system: 5x + 2y = 16, 3x + 4y = 18.",
            solution: [
                "Step 1 — Write as a matrix equation AX = B:",
                "A = [[5, 2], [3, 4]], X = [[x], [y]], B = [[16], [18]]",
                "",
                "Step 2 — Calculate det(A): det(A) = (5)(4) − (2)(3) = 20 − 6 = 14",
                "det(A) ≠ 0 → unique solution exists",
                "",
                "Step 3 — Find A⁻¹ using the 2×2 formula:",
                "A⁻¹ = (1/14) · [[4, −2], [−3, 5]]",
                "",
                "Step 4 — Multiply X = A⁻¹B:",
                "X = (1/14) · [[4, −2], [−3, 5]] · [[16], [18]]",
                "",
                "Row 1: (4)(16) + (−2)(18) = 64 − 36 = 28 → x = 28/14 = 2",
                "Row 2: (−3)(16) + (5)(18) = −48 + 90 = 42 → y = 42/14 = 3",
                "",
                "Solution: x = 2, y = 3",
                "",
                "Verification in original equations:",
                "Eq 1: 5(2) + 2(3) = 10 + 6 = 16 ✓",
                "Eq 2: 3(2) + 4(3) = 6 + 12 = 18 ✓"
            ]
        },
        whenSystemHasNoUniqueAnswer: "If det(A) = 0, the matrix method fails. The system either has no solution (inconsistent) or infinitely many solutions (dependent), distinguishable only by examining the equations directly or using row reduction."
    },

    linearTransformations: {
        introduction: "Every 2×2 matrix A defines a linear transformation of the plane. When a position vector v = [[x], [y]] is multiplied by A, the result Av is the image of that point under the transformation.",
        standardTransformations: {
            rotation: {
                matrixForm: "Rotation by angle θ anticlockwise: R(θ) = [[cos θ, −sin θ], [sin θ, cos θ]]",
                ninetyDegrees: "R(90°) = [[0, −1], [1, 0]]",
                oneEightyDegrees: "R(180°) = [[−1, 0], [0, −1]]",
                workedExample: {
                    problem: "Find the image of the point (3, 1) under a 90° anticlockwise rotation.",
                    solution: [
                        "Apply R(90°) = [[0, −1], [1, 0]] to v = [[3], [1]]:",
                        "Row 1: (0)(3) + (−1)(1) = −1",
                        "Row 2: (1)(3) + (0)(1) = 3",
                        "Image: [[−1], [3]] → point (−1, 3) ✓",
                        "Geometric check: rotating (3,1) by 90° anticlockwise maps it to (−1, 3) — the x and y coordinates are swapped and the new x is negated ✓"
                    ]
                }
            },
            reflection: {
                inXAxis:     "[[1, 0], [0, −1]] — y-coordinate negated",
                inYAxis:     "[[−1, 0], [0, 1]] — x-coordinate negated",
                inYEqualsX:  "[[0, 1], [1, 0]] — coordinates swapped",
                inYEqualsNegX: "[[0, −1], [−1, 0]] — coordinates swapped and negated"
            },
            scaling: {
                uniform:     "[[k, 0], [0, k]] — scales all distances by factor k from the origin",
                xAxisOnly:   "[[k, 0], [0, 1]] — stretches/compresses in the x-direction only",
                yAxisOnly:   "[[1, 0], [0, k]] — stretches/compresses in the y-direction only"
            },
            shear: {
                horizontal:  "[[1, k], [0, 1]] — shears horizontally; x-coordinates shift by k times y",
                vertical:    "[[1, 0], [k, 1]] — shears vertically; y-coordinates shift by k times x"
            }
        },
        compositionOfTransformations: {
            rule: "Applying transformation B followed by transformation A is represented by the matrix product AB. Note the reversal of order: the first transformation applied appears on the right of the product.",
            workedExample: {
                problem: "Find the single matrix representing a reflection in the x-axis followed by a 90° anticlockwise rotation. Apply it to the point (2, 3).",
                solution: [
                    "Reflection in x-axis: M = [[1, 0], [0, −1]]",
                    "90° rotation: R = [[0, −1], [1, 0]]",
                    "Combined transformation (reflection first, then rotation): C = R · M",
                    "",
                    "C = [[0, −1], [1, 0]] · [[1, 0], [0, −1]]",
                    "Row 1 × Col 1: (0)(1) + (−1)(0) = 0",
                    "Row 1 × Col 2: (0)(0) + (−1)(−1) = 1",
                    "Row 2 × Col 1: (1)(1) + (0)(0) = 1",
                    "Row 2 × Col 2: (1)(0) + (0)(−1) = 0",
                    "C = [[0, 1], [1, 0]]",
                    "",
                    "Apply C to (2, 3): C · [[2], [3]]",
                    "Row 1: (0)(2) + (1)(3) = 3",
                    "Row 2: (1)(2) + (0)(3) = 2",
                    "Image: (3, 2)",
                    "",
                    "Note: C = [[0, 1], [1, 0]] is the reflection matrix for y = x — the composition of reflection in x-axis then 90° rotation equals reflection in y = x"
                ]
            }
        },
        determinantAndArea: {
            rule: "For a transformation represented by matrix A, the area of any shape is scaled by |det(A)|. If det(A) = 0, the shape is collapsed to a lower-dimensional object (a line or point).",
            workedExample: {
                problem: "A unit square (area = 1) is transformed by A = [[3, 1], [0, 2]]. Find the area of the image and the determinant.",
                solution: [
                    "det(A) = (3)(2) − (1)(0) = 6 − 0 = 6",
                    "Area of image = |det(A)| × original area = 6 × 1 = 6 square units",
                    "Orientation: det(A) = 6 > 0 → orientation is preserved (no reflection)"
                ]
            }
        }
    },

    topicSummary: {
        coreInsights: [
            "A matrix is a single mathematical object encoding a rectangular array of values — it can represent data, a system of equations, or a geometric transformation, depending on context.",
            "Matrix addition and scalar multiplication are element-wise; matrix multiplication is not — it uses the row-by-column dot product rule, which is the source of most errors and most power.",
            "Matrix multiplication is not commutative (AB ≠ BA in general) — this is the most important property distinguishing matrix arithmetic from ordinary arithmetic and must never be forgotten.",
            "The compatibility rule for multiplication — the inner dimensions must match — must be checked before attempting any matrix product.",
            "The determinant of a 2×2 matrix A = [[a,b],[c,d]] is ad − bc; it encodes both invertibility (det ≠ 0 means invertible) and geometry (|det| = area scale factor of the transformation).",
            "The inverse of a 2×2 matrix is found by swapping the diagonal, negating the off-diagonal, and dividing by the determinant — a three-step process applied in that order.",
            "The matrix equation AX = B is solved by X = A⁻¹B — pre-multiplication by the inverse on the left, never post-multiplication on the right.",
            "Every 2×2 matrix is a linear transformation of the plane; familiar geometric actions (rotation, reflection, scaling, shear) all have exact matrix representations whose structure can be read and remembered."
        ],
        keyFormulas: {
            determinant2x2:      "det([[a,b],[c,d]]) = ad − bc",
            inverse2x2:          "A⁻¹ = (1/(ad−bc)) · [[d,−b],[−c,a]]",
            matrixEquation:      "AX = B → X = A⁻¹B",
            rotationMatrix:      "R(θ) = [[cos θ, −sin θ],[sin θ, cos θ]]",
            transposeProduct:    "(AB)ᵀ = BᵀAᵀ",
            determinantProduct:  "det(AB) = det(A)·det(B)",
            areaScaleFactor:     "Area scale factor = |det(A)|"
        },
        specialMatricesSummary: {
            zero:         { notation: "O", property: "A + O = A", analogy: "Additive identity — like adding 0 to a number" },
            identity:     { notation: "I", property: "AI = IA = A", analogy: "Multiplicative identity — like multiplying a number by 1" },
            singular:     { notation: "det(A) = 0", property: "No inverse exists", analogy: "Like trying to divide by 0" },
            symmetric:    { notation: "A = Aᵀ", property: "Symmetric about main diagonal", analogy: "Mirror image across the diagonal" }
        },
        commonMistakesToAvoid: [
            "Assuming AB = BA — matrix multiplication is NOT commutative; always write products in the specified order",
            "Attempting to multiply incompatible matrices — always check inner dimensions match before multiplying",
            "Using the wrong formula for the 2×2 inverse — swap the diagonal elements (a and d), negate the off-diagonals (b and c), THEN divide by det; do not negate the diagonal",
            "Computing det(A) as ab − cd or any variant other than ad − bc for [[a,b],[c,d]] — the product is always main diagonal minus off-diagonal",
            "Solving AX = B by writing X = BA⁻¹ instead of X = A⁻¹B — the inverse must pre-multiply B on the left",
            "Concluding that a singular matrix means no solution — it means no unique solution; infinitely many solutions are also possible",
            "Confusing the order of composed transformations — if B is applied first, then A, the combined matrix is AB, not BA"
        ],
        connections: [
            "Linear equations: every system of n linear equations in n unknowns can be written as a matrix equation AX = B",
            "Geometry: linear transformations (rotation, reflection, shear, scaling) are precisely the operations representable by matrix multiplication",
            "Computer graphics: all 2D and 3D rendering pipelines use matrix multiplication to transform coordinates, apply camera projections, and animate objects",
            "Statistics: covariance matrices encode relationships between variables; matrix operations underpin principal component analysis (PCA)",
            "Machine learning: neural network layers are matrix multiplications followed by non-linear functions; back-propagation uses the chain rule applied to matrix operations",
            "Calculus: the Jacobian matrix is the matrix of partial derivatives; it generalises the derivative to multi-variable functions using the determinant as the generalised area scale factor"
        ],
        examReadinessChecklist: [
            "Can you state the order of a matrix and extract any specific element using row-column indexing?",
            "Can you add, subtract, and scalar-multiply matrices without element-level errors?",
            "Can you multiply two matrices, checking compatibility first and computing each element as a dot product?",
            "Can you compute the determinant of a 2×2 matrix and use it to determine invertibility?",
            "Can you find the inverse of a 2×2 matrix using the swap-negate-divide formula and verify it by computing AA⁻¹?",
            "Can you express a system of simultaneous equations as AX = B and solve for X = A⁻¹B?",
            "Can you write the matrix for a rotation by 90° or 180°, a reflection in any standard axis, and a uniform scaling?",
            "Can you find the image of a point or shape under a matrix transformation and compute the area of the image using the determinant?"
        ]
    }
},

const EndSection1 = "close"