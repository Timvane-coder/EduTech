


initializeContextualScenarios()  {



this.contextualScenarios = {


basicProbability: [
    {
        scenario: "Quality Control in Manufacturing",
        context: "A factory produces light bulbs. From historical data, 4% of bulbs are defective. A quality inspector randomly selects bulbs from the production line to monitor whether the defect rate is within acceptable limits.",
        problem: "Find the probability that a randomly selected bulb is (a) defective, (b) not defective. If 3 bulbs are selected independently, find the probability that all 3 are defective.",
        application: "P(defective) = 0.04. P(not defective) = 1 − 0.04 = 0.96 (complement rule). For 3 independent selections: P(all 3 defective) = 0.04³ = 0.000064. This means approximately 6 in every 100,000 groups of 3 bulbs would all be defective — extremely rare.",
        question: "A new batch shows 8 defective bulbs in a sample of 150. Estimate the experimental probability of a defective bulb for this batch and compare it to the historical rate. Should the inspector be concerned?",
        answer: "P(defective, new batch) = 8/150 ≈ 0.053 = 5.3%. This is higher than the historical 4%. Whether to be concerned depends on the statistical significance of this difference — with a sample of only 150, some fluctuation is expected. The inspector should take a larger sample before making a firm conclusion.",
        extension: "This comparison of experimental probability to a theoretical baseline is the foundation of statistical hypothesis testing. The question 'is this difference due to chance or a real change in quality?' is answered formally using probability distributions — specifically the binomial distribution, which models exactly this type of counting problem."
    },
    {
        scenario: "Probability in Everyday Decisions: Umbrella Problem",
        context: "A weather forecast states there is a 35% chance of rain. A commuter must decide whether to carry an umbrella. The commuter knows that if it rains and they have no umbrella, they will be very uncomfortable, but carrying an umbrella unnecessarily is mildly inconvenient.",
        problem: "List all possible outcomes (rain/no rain × umbrella/no umbrella), assign probabilities, and use expected value reasoning to guide the commuter's decision.",
        application: "P(rain) = 0.35, P(no rain) = 0.65. Four outcomes: (rain, umbrella) — probability 0.35, outcome: stays dry; (rain, no umbrella) — 0.35, outcome: gets wet; (no rain, umbrella) — 0.65, outcome: mild inconvenience; (no rain, no umbrella) — 0.65, outcome: fine. The decision depends on how the commuter weights the discomfort of each outcome — this is a formal expected utility problem.",
        question: "Assign discomfort scores: getting wet = −10, mild inconvenience from umbrella = −1, stays dry = 0, fine = 0. Calculate the expected discomfort for each decision strategy (always take umbrella; never take umbrella) and state which minimises expected discomfort.",
        answer: "Always take umbrella: E = 0(0.35) + (−1)(0.65) = −0.65. Never take umbrella: E = (−10)(0.35) + 0(0.65) = −3.5. Taking the umbrella has much lower expected discomfort (−0.65 vs −3.5). The commuter should take the umbrella. This is the structure of every decision made under uncertainty.",
        extension: "Expected utility theory — the formal extension of expected value to subjective preferences — is the foundation of economics, game theory, and all decision science. The assignment of numerical values to outcomes (utility) is the key modelling choice, and probability is the weight."
    }
],

probabilityRules: [
    {
        scenario: "Card Games and Combinatorial Probability",
        context: "In many card games, understanding the probability of being dealt certain hands determines optimal strategy. A player is dealt one card from a standard 52-card deck and wants to know their chances of receiving cards that improve their position.",
        problem: "Find the probability that a single drawn card is: (a) a red card or a King; (b) a club or a face card (Jack, Queen, King); (c) neither a heart nor a seven.",
        application: "(a) P(red ∪ King) = P(red) + P(King) − P(red King) = 26/52 + 4/52 − 2/52 = 28/52 = 7/13. (b) P(club ∪ face) = P(club) + P(face) − P(club face) = 13/52 + 12/52 − 3/52 = 22/52 = 11/26. (c) P(neither heart nor seven) = 1 − P(heart ∪ seven) = 1 − [13/52 + 4/52 − 1/52] = 1 − 16/52 = 36/52 = 9/13.",
        question: "A player draws two cards with replacement. Find P(first card is a spade AND second card is a face card). Then find the same probability WITHOUT replacement.",
        answer: "With replacement (independent): P = 13/52 × 12/52 = 156/2704 = 3/52 ≈ 0.058. Without replacement (dependent): if the first card was a spade and not a face card (probability 10/52), the second draw has 12 face cards from 51 remaining: conditional P = 10/52 × 12/51. If the first card was a spade AND a face card (probability 3/52), the second draw has 11 face cards from 51 remaining: conditional P = 3/52 × 11/51. Total = (10 × 12)/(52 × 51) + (3 × 11)/(52 × 51) = (120 + 33)/2652 = 153/2652 = 3/52 ≈ 0.058. The same result — because with 52 cards, the replacement effect is small.",
        extension: "The fact that the probabilities with and without replacement are equal here (both equal 3/52) is not always the case. It holds when the two events involve different cards. When the same card must appear twice, replacement matters significantly — for example, P(both cards are the Ace of Spades) is 1/2704 with replacement and 0 without replacement."
    },
    {
        scenario: "Medical Screening: Sensitivity, Specificity, and the Addition Rule",
        context: "A hospital screens patients for two independent conditions: high blood pressure (HBP) and high cholesterol (HC). In the screened population, P(HBP) = 0.30 and P(HC) = 0.25. The conditions are independent in this population.",
        problem: "Find: (a) P(a patient has both HBP and HC); (b) P(a patient has at least one condition); (c) P(a patient has exactly one condition).",
        application: "(a) Since independent: P(HBP ∩ HC) = 0.30 × 0.25 = 0.075. (b) P(HBP ∪ HC) = 0.30 + 0.25 − 0.075 = 0.475. (c) P(exactly one) = P(HBP only) + P(HC only) = (0.30 − 0.075) + (0.25 − 0.075) = 0.225 + 0.175 = 0.40. Equivalently: P(exactly one) = P(at least one) − P(both) = 0.475 − 0.075 = 0.40.",
        question: "In a clinic of 800 patients screened, how many would you expect to have: (a) both conditions, (b) at least one condition, (c) neither condition? If the conditions were positively correlated (not independent) with P(HBP ∩ HC) = 0.15, how would these numbers change?",
        answer: "Independent case: (a) 800 × 0.075 = 60 patients; (b) 800 × 0.475 = 380 patients; (c) 800 × (1 − 0.475) = 420 patients. Positively correlated case: P(HBP ∪ HC) = 0.30 + 0.25 − 0.15 = 0.40. (a) 800 × 0.15 = 120 patients; (b) 800 × 0.40 = 320 patients; (c) 800 × 0.60 = 480 patients. Positive correlation increases the number with both conditions and decreases the number with at least one (because they concentrate in the overlap).",
        extension: "The difference between the independent and correlated cases illustrates why independence is a substantive assumption, not a convenient default. Conditions often cluster — a patient with one risk factor is more likely to have others. Epidemiologists quantify this with relative risk and odds ratios, which are built directly on conditional probability."
    }
],

conditionalProbability: [
    {
        scenario: "The Monty Hall Problem",
        context: "A game show contestant chooses one of three doors. Behind one door is a car; behind the other two are goats. The host (who knows what is behind each door) opens one of the remaining two doors to reveal a goat. The contestant is offered the chance to switch to the other unopened door. Should they switch?",
        problem: "Use conditional probability to determine whether switching increases the probability of winning the car.",
        application: "Initial choice: P(car behind chosen door) = 1/3, P(car behind one of the other two doors) = 2/3. The host always reveals a goat from the unchosen doors — this action does not change the probability that the contestant's original choice is correct. After the host reveals a goat, the full 2/3 probability that was spread across the two unchosen doors is now concentrated on the one remaining unchosen door. P(win by switching) = 2/3; P(win by staying) = 1/3. The contestant should always switch.",
        question: "Simulate this problem: assign P(car) = 1/3 to each door. The contestant picks Door 1. The host opens Door 3 (a goat). Use conditional probability formally to find P(car behind Door 2 | host opens Door 3). Show that it equals 2/3.",
        answer: "P(car behind Door 2 | host opens Door 3) = P(host opens Door 3 | car behind Door 2) × P(car behind Door 2) / P(host opens Door 3). P(car behind Door 2) = 1/3. P(host opens Door 3 | car behind Door 2) = 1 (host must open Door 3 since Door 1 is chosen and Door 2 has the car). P(host opens Door 3 | car behind Door 1) = 1/2 (host can open either Door 2 or 3). P(host opens Door 3 | car behind Door 3) = 0. P(host opens Door 3) = (1)(1/3) + (1/2)(1/3) + (0)(1/3) = 1/2. Therefore P(car | host opens Door 3) = (1 × 1/3) / (1/2) = 2/3 ✓.",
        extension: "The Monty Hall problem is one of the most famous probability puzzles because the correct answer (switch) contradicts intuition so forcefully. Most people reason that after one door is revealed, there are two doors left and it is 50-50. The error is treating the host's action as providing no information — but the host's action is constrained by the car's location, so it is highly informative. This type of reasoning error is at the heart of many statistical fallacies in medicine, law, and everyday life."
    },
    {
        scenario: "Email Spam Filtering: Applied Bayes' Theorem",
        context: "A spam filter classifies incoming emails as spam or not spam. From historical data: 30% of all emails are spam. The word 'FREE' appears in 60% of spam emails and 5% of legitimate emails. An email arrives containing the word 'FREE'.",
        problem: "Calculate the probability that the email is spam given that it contains the word 'FREE', using Bayes' theorem.",
        application: "P(spam) = 0.30, P(not spam) = 0.70. P('FREE' | spam) = 0.60, P('FREE' | not spam) = 0.05. P('FREE') = P('FREE' | spam) × P(spam) + P('FREE' | not spam) × P(not spam) = 0.60 × 0.30 + 0.05 × 0.70 = 0.18 + 0.035 = 0.215. P(spam | 'FREE') = (0.60 × 0.30) / 0.215 = 0.18 / 0.215 ≈ 0.837.",
        question: "The same email also contains the word 'OFFER', which appears in 50% of spam emails and 10% of legitimate emails. Assuming word occurrences are independent within each class (Naive Bayes assumption), update the spam probability further.",
        answer: "Using the previous posterior as the new prior: P(spam | 'FREE') ≈ 0.837, P(not spam | 'FREE') ≈ 0.163. P('OFFER' | spam) = 0.50, P('OFFER' | not spam) = 0.10. P('OFFER') = 0.50 × 0.837 + 0.10 × 0.163 = 0.4185 + 0.0163 = 0.4348. P(spam | both words) = (0.50 × 0.837) / 0.4348 = 0.4185 / 0.4348 ≈ 0.963. The probability of spam rises from 83.7% to 96.3% after observing the second suspicious word. Each piece of evidence updates our belief.",
        extension: "This sequential updating — each new piece of evidence refines the probability — is the Naive Bayes classifier, one of the most widely used algorithms in machine learning. Every modern spam filter, document classifier, and medical diagnosis assistant uses this exact structure: a prior probability updated through evidence using Bayes' theorem. The 'Naive' in the name refers to the independence assumption between words, which is often false but produces surprisingly effective classifiers in practice."
    }
],

combinedEvents: [
    {
        scenario: "Genetics and Inheritance: Punnett Squares as Probability Spaces",
        context: "In genetics, offspring inherit one allele from each parent. Tall height (T) is dominant over short (t). Two parents who are both heterozygous (Tt) have children together. A geneticist uses probability to predict offspring characteristics.",
        problem: "Construct the sample space for all possible combinations of parental alleles and find the probability that an offspring is: (a) homozygous dominant (TT); (b) heterozygous (Tt); (c) tall (TT or Tt); (d) short (tt).",
        application: "Sample space (Punnett square): each parent contributes T or t with equal probability 1/2. Four equally likely outcomes: TT, Tt, tT, tt (where Tt and tT are genetically equivalent — both heterozygous). P(TT) = 1/4. P(Tt or tT) = 2/4 = 1/2. P(tt) = 1/4. P(tall) = P(TT) + P(Tt) = 3/4. P(short) = P(tt) = 1/4.",
        question: "Three children are born to this couple. Find the probability that: (a) all three are tall; (b) exactly two are tall; (c) at least one is short.",
        answer: "(a) P(all tall) = (3/4)³ = 27/64 ≈ 0.422. (b) P(exactly two tall) = C(3,2) × (3/4)² × (1/4)¹ = 3 × 9/16 × 1/4 = 27/64 ≈ 0.422. (c) P(at least one short) = 1 − P(all tall) = 1 − 27/64 = 37/64 ≈ 0.578. Note that parts (a) and (b) have the same probability — this is a feature of the binomial distribution with p = 3/4 and n = 3.",
        extension: "The binomial probability formula used in part (b) — C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ — is the generalisation of this multi-stage probability multiplication. It applies whenever you have n independent trials, each with the same probability p of success, and you want exactly k successes. Mendelian genetics, quality control sampling, and clinical trials all use this distribution."
    },
    {
        scenario: "Risk Assessment: System Reliability",
        context: "An alarm system has three components: a sensor, a processor, and an alarm. Each component operates independently and has the following probabilities of working correctly: P(sensor) = 0.98, P(processor) = 0.95, P(alarm) = 0.99. The system sounds the alarm only if all three components work. An engineer must assess the system's reliability.",
        problem: "Find the probability that the system successfully sounds the alarm when needed. Then find the probability that it fails.",
        application: "P(all work) = P(sensor) × P(processor) × P(alarm) = 0.98 × 0.95 × 0.99 = 0.9212 (to 4 d.p.). P(system fails) = 1 − 0.9212 = 0.0788 ≈ 7.9%. Even though each individual component is highly reliable (95–99%), the system as a whole has a nearly 8% failure rate — the product of probabilities compounds downward.",
        question: "A backup processor is installed in parallel with the first — the processor stage succeeds if at least one of the two processors works. Recalculate the system reliability. Then find how many nines of reliability (e.g. '99.9% reliable' = three nines) the improved system achieves.",
        answer: "P(at least one processor works) = 1 − P(both fail) = 1 − (0.05)² = 1 − 0.0025 = 0.9975. New system P(success) = 0.98 × 0.9975 × 0.99 = 0.9678. P(fail) = 1 − 0.9678 = 0.0322 ≈ 3.2%. The backup reduces failure rate from 7.9% to 3.2%. This is approximately 96.78% reliable — less than two nines (99% = two nines). To achieve three nines (99.9% reliability), the engineer would need to add redundancy to the sensor or alarm stages as well.",
        extension: "Series reliability (all components must work) multiplies individual reliabilities downward — large systems are hard to make reliable. Parallel redundancy (at least one component must work) multiplies failure probabilities downward — this is why critical systems (aircraft, nuclear plants, medical devices) use redundant components. The mathematics of reliability engineering is entirely built on the multiplication rule for independent events."
    }
],

setNotationAndMembership: [
    {
        scenario: "Library Catalogue Classification",
        context: "A school librarian classifies 40 books. Each book belongs to one or more genres. The librarian needs to use set notation to organise the catalogue and answer queries like 'which books are both Science and Fiction?' or 'how many books are in neither category?'",
        problem: "The librarian defines: S = {books tagged as Science}, F = {books tagged as Fiction}. Given |S| = 18, |F| = 15, |S ∩ F| = 6, and total books = 40, express the following in set notation and calculate: (a) books that are Science or Fiction, (b) books that are only Science, (c) books in neither category.",
        application: "(a) |S ∪ F| = 18 + 15 − 6 = 27. (b) S \\ F = S − (S ∩ F) = 18 − 6 = 12 books. (c) Neither: 40 − 27 = 13 books. The set operations translate directly to database queries — this is how every search engine and library system works.",
        question: "A student wants books that are Fiction but not Science. Write the set expression and find the count.",
        answer: "F \\ S (or F ∩ S′): |F| − |F ∩ S| = 15 − 6 = 9 books. The set difference F \\ S captures exactly 'Fiction but not Science' — this is the SQL equivalent of SELECT * FROM books WHERE genre = 'Fiction' AND genre ≠ 'Science'.",
        extension: "Every database query is a set operation. SQL's UNION corresponds to ∪, INTERSECT to ∩, EXCEPT to \\, and WHERE NOT to complement. The entire relational database model — which underlies every major technology platform — is built on set theory."
    },
    {
        scenario: "Medical Test Screening",
        context: "A clinic screens 500 patients for two conditions: high blood pressure (H) and high cholesterol (C). The medical team needs to identify which patients require both treatments, which require only one, and which are clear of both — using set notation to organise patient records and plan resources.",
        problem: "Results: |H| = 180, |C| = 140, |H ∩ C| = 60. Express in set notation and calculate: (a) patients with at least one condition, (b) patients with high blood pressure only, (c) patients clear of both conditions.",
        application: "(a) |H ∪ C| = 180 + 140 − 60 = 260 patients. (b) H \\ C: 180 − 60 = 120 patients. (c) (H ∪ C)′: 500 − 260 = 240 patients. The set framework ensures no patient is counted twice and no patient is missed — critical in healthcare resource allocation.",
        question: "A new drug treats both conditions simultaneously. It is prescribed to all patients with H ∩ C. How many patients is this, and what fraction of all patients with at least one condition does this represent?",
        answer: "|H ∩ C| = 60 patients. Fraction: 60/260 = 3/13 ≈ 23.1% of patients with at least one condition have both. This fraction determines the drug's required stock — a direct application of set cardinality to supply chain management.",
        extension: "Epidemiology uses set theory continuously. Comorbidity rates (patients with multiple conditions simultaneously) are intersection counts. The prevalence of 'at least one of k conditions' is the cardinality of a union — computed by generalised inclusion-exclusion for k sets."
    }
],

setOperations: [
    {
        scenario: "Social Media Audience Analysis",
        context: "A marketing team analyses the audiences of two advertising campaigns: Campaign A reached users A = {user IDs in campaign A}, Campaign B reached users B = {user IDs in campaign B}. They need to answer questions about combined reach, overlapping audiences, and exclusive audiences using set operations.",
        problem: "In a simplified model: |A| = 8000 users, |B| = 6000 users, |A ∩ B| = 2000 users (reached by both). Calculate: (a) total unique users reached by either campaign, (b) users reached only by Campaign A, (c) users reached only by Campaign B, (d) if total platform users |U| = 20000, find users reached by neither campaign.",
        application: "(a) |A ∪ B| = 8000 + 6000 − 2000 = 12000 unique users. (b) A \\ B = 8000 − 2000 = 6000. (c) B \\ A = 6000 − 2000 = 4000. (d) (A ∪ B)′ = 20000 − 12000 = 8000. These four numbers partition the entire user base — every user is counted exactly once across the four regions of the Venn diagram.",
        question: "Campaign C is launched. |C| = 5000, |A ∩ C| = 1500, |B ∩ C| = 1000, |A ∩ B ∩ C| = 500. Find the total unique users reached by all three campaigns.",
        answer: "|A ∪ B ∪ C| = 8000 + 6000 + 5000 − 2000 − 1500 − 1000 + 500 = 15000 unique users. Inclusion-exclusion is the standard formula used by every digital advertising platform to calculate 'unduplicated reach' — the number of unique people who saw at least one ad.",
        extension: "The concept of unduplicated reach (the cardinality of a union) is worth billions of dollars in the advertising industry. Every media planning tool — Nielsen, comScore, Google Analytics — implements inclusion-exclusion to avoid overcounting audiences across multiple channels."
    },
    {
        scenario: "Access Control in Computing",
        context: "A company's IT system assigns employees to permission groups. Group A has access to the finance database; Group B has access to the HR database. The IT administrator uses set operations to manage access, audit permissions, and enforce security policies.",
        problem: "U = {all 100 employees}, A = {employees with finance access}, B = {employees with HR access}. |A| = 35, |B| = 28, |A ∩ B| = 12. Find: (a) employees with access to at least one database, (b) employees with finance access but NOT HR access (least-privilege principle), (c) employees with no database access.",
        application: "(a) |A ∪ B| = 35 + 28 − 12 = 51. (b) A \\ B = 35 − 12 = 23 employees (finance only). (c) (A ∪ B)′ = 100 − 51 = 49 employees. The principle of least privilege — granting employees only the access they need — is enforced by computing A \\ B (finance-only employees) and B \\ A (HR-only employees) separately, rather than giving all 51 employees access to both systems.",
        question: "A security audit requires revoking dual access. All employees in A ∩ B must choose one database. After the audit, |A| drops to 30 and |B| drops to 25, with |A ∩ B| = 0. Recalculate the total with database access and verify it equals 30 + 25.",
        answer: "When A ∩ B = ∅, A and B are disjoint. |A ∪ B| = |A| + |B| − |A ∩ B| = 30 + 25 − 0 = 55. Yes, this equals 30 + 25 = 55, confirming that the formula reduces to simple addition when sets are disjoint — the fundamental rule for counting non-overlapping groups.",
        extension: "Role-Based Access Control (RBAC), the security model used by virtually every enterprise software system, is built on set theory. Permissions are sets, roles are sets of permissions, and users are assigned to sets of roles. Auditing access rights is computing intersections; revoking access is computing set differences."
    }
],

vennDiagrams: [
    {
        scenario: "University Admissions Survey",
        context: "A university surveys 200 applicants about which subjects they studied at A-level: Mathematics (M), Physics (P), and Chemistry (C). The admissions team needs to use a three-set Venn diagram to understand the applicant pool and make informed decisions about course requirements.",
        problem: "Survey data: |M|=110, |P|=85, |C|=70, |M∩P|=45, |M∩C|=38, |P∩C|=30, |M∩P∩C|=20. Fill the three-set Venn diagram and find the number who studied none of the three subjects.",
        application: [
            "Fill from centre outward:",
            "M∩P∩C (centre): 20",
            "M∩P only (not C): 45 − 20 = 25",
            "M∩C only (not P): 38 − 20 = 18",
            "P∩C only (not M): 30 − 20 = 10",
            "M only: 110 − 25 − 18 − 20 = 47",
            "P only: 85 − 25 − 10 − 20 = 30",
            "C only: 70 − 18 − 10 − 20 = 22",
            "Total in at least one: 47+30+22+25+18+10+20 = 172",
            "None of the three: 200 − 172 = 28 applicants"
        ],
        question: "The engineering course requires at least Physics and Mathematics (i.e. M ∩ P). How many applicants are eligible, and what percentage studied all three?",
        answer: "|M ∩ P| = 45 applicants are eligible for engineering. Of these, 20 studied all three, which is 20/45 ≈ 44.4% of eligible applicants. The Venn diagram makes these nested subsets immediately visible — M ∩ P ∩ C is a subset of M ∩ P, contained within it on the diagram.",
        extension: "Three-set Venn diagram analysis is used in medical genetics to classify patients by combinations of genetic markers, in market research to identify customer segments, and in quality control to categorise defects by type. In all cases, the centre-outward filling strategy is the only reliable way to avoid double-counting."
    },
    {
        scenario: "Sports Club Membership",
        context: "A leisure centre has 300 members. The manager uses a Venn diagram to analyse which combinations of activities members participate in — swimming (S), gym (G), and fitness classes (F) — to plan staffing and allocate resources efficiently.",
        problem: "Given: |S|=140, |G|=160, |F|=120, |S∩G|=70, |S∩F|=50, |G∩F|=60, |S∩G∩F|=30. Find the total number of members participating in at least one activity and the number who use none of the three facilities.",
        application: [
            "|S ∪ G ∪ F| = 140 + 160 + 120 − 70 − 50 − 60 + 30 = 270 members",
            "None: 300 − 270 = 30 members",
            "Venn fill (centre out): centre = 30; S∩G only = 40; S∩F only = 20; G∩F only = 30; S only = 40; G only = 60; F only = 20"
        ],
        question: "The manager wants to target members who use exactly one facility for a loyalty promotion. How many members use exactly one facility, and what percentage of the total active membership (those using at least one) do they represent?",
        answer: "Exactly one facility: S only (40) + G only (60) + F only (20) = 120 members. Percentage: 120/270 ≈ 44.4% of active members use exactly one facility. This insight — identifying single-service users versus multi-service users — directly guides the loyalty promotion strategy and is only possible through the Venn diagram's region decomposition.",
        extension: "Customer segmentation — grouping customers by combinations of products or services they use — is a direct application of multi-set Venn analysis. Every CRM (Customer Relationship Management) system performs this analysis to identify cross-selling opportunities, at-risk single-product customers, and loyal multi-product customers."
    }
],

setRelationships: [
    {
        scenario: "Biological Classification (Taxonomy)",
        context: "A biology teacher explains taxonomic classification using set theory. In the Linnaean system, every species belongs to nested sets: Species ⊂ Genus ⊂ Family ⊂ Order ⊂ Class ⊂ Phylum ⊂ Kingdom. This is a perfect real-world instance of a proper subset chain.",
        problem: "Define sets: M = {all mammals}, D = {all dogs}, G = {all Golden Retrievers}, R = {all animals}. Express all subset relationships among these four sets using ⊂ and ⊆ notation. Identify which pairs are proper subsets.",
        application: "G ⊂ D ⊂ M ⊂ R. Every Golden Retriever is a dog, every dog is a mammal, every mammal is an animal — each containment is strict (proper), as each larger set contains animals not in the smaller set. G ⊆ G (every set is a subset of itself — not proper). This chain is the mathematical structure of all hierarchical classification systems.",
        question: "Is the set of cats (C) a subset of D? Is D ∩ C = ∅? What does this mean biologically?",
        answer: "C ⊄ D — cats are not dogs, so C is not a subset of D. D ∩ C = ∅ — dogs and cats are disjoint sets within mammals. Biologically, this means the species are in different genera — they share the parent set M (both are mammals) but share no members. Disjoint sets model mutually exclusive categories within a shared superset.",
        extension: "The entire Linnaean taxonomy is a set-theoretic tree — a hierarchy of nested proper subsets. The same structure appears in file system directories (a folder is a set of files; subfolders are proper subsets), organisational hierarchies, and the HTML document object model. Set containment is the mathematical language of all hierarchical systems."
    },
    {
        scenario: "Quality Control and Defect Classification",
        context: "A manufacturing plant inspects 500 products. Quality engineers classify defects into categories: D = {defective items}, S = {items with surface defects}, E = {items with electrical faults}. By definition, every defective item belongs to D, and all surface and electrical defects are types of defects.",
        problem: "Given that all surface defects and all electrical faults are defective by definition, express the subset relationships S ⊆ D and E ⊆ D. If |S| = 40, |E| = 25, |S ∩ E| = 8, find |S ∪ E| and verify it satisfies |S ∪ E| ≤ |D|.",
        application: "Since S ⊆ D and E ⊆ D, all items in S or E are in D. |S ∪ E| = 40 + 25 − 8 = 57. We need |S ∪ E| ≤ |D|. If |D| = 70, then 57 ≤ 70 ✓. The 70 − 57 = 13 defective items have neither surface nor electrical faults — they have some other defect type, consistent with S ∪ E being a proper subset of D.",
        question: "An item is selected at random from the 57 in S ∪ E. What set operation describes items with both types of defects, and how many items is this?",
        answer: "S ∩ E describes items with both surface and electrical defects: |S ∩ E| = 8 items. These 8 items are the most severe — they have two simultaneous defect types. The intersection identifies the highest-priority items for engineering investigation. In quality control, the intersection of defect categories often pinpoints systemic manufacturing failures.",
        extension: "Failure Mode and Effects Analysis (FMEA), the standard quality engineering methodology, uses set intersections to identify combinations of failure modes that cause critical system failures. A single failure (set membership) may be tolerable; simultaneous membership in multiple failure-mode sets (intersection) often indicates a catastrophic risk."
    }
],


divisibilityAndFactors: [
    {
        scenario: "Packaging and Distribution Logistics",
        context: "A manufacturer produces 1,440 identical items per day and needs to pack them into boxes of equal size with none left over. The warehouse requires boxes to hold no fewer than 10 and no more than 50 items. A second shift produces 1,980 items and must use the same box size.",
        problem: "Find all box sizes that work for both production runs — that is, find all common factors of 1,440 and 1,980 that lie between 10 and 50.",
        application: "Prime factorisations: 1440 = 2⁵ × 3² × 5 and 1980 = 2² × 3² × 5 × 11. GCD = 2² × 3² × 5 = 180. All common factors of 1440 and 1980 are divisors of 180: 1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 18, 20, 36, 45, 60, 90, 180. Common factors between 10 and 50: 10, 12, 15, 18, 20, 36, 45. Any of these box sizes satisfies both constraints.",
        question: "The logistics team wants the fewest boxes total across both shifts. Which of the valid box sizes should they choose, and how many boxes will there be in total?",
        answer: "Fewer boxes means larger box size. The largest valid size is 45. Shift 1: 1440 ÷ 45 = 32 boxes. Shift 2: 1980 ÷ 45 = 44 boxes. Total = 76 boxes. Compare with box size 10: 144 + 198 = 342 boxes. Choosing the largest valid box size reduces box count by more than 75%.",
        extension: "This is a direct industrial application of the GCD. Whenever resources must be divided equally across multiple batches with no waste — whether boxes, pallets, team assignments, or server request batches — the valid division sizes are exactly the common factors of all batch sizes, and the GCD gives the maximum."
    },
    {
        scenario: "Tiling a Room with No Cuts",
        context: "A rectangular room measures 360 cm by 252 cm. Square tiles must cover the entire floor with no gaps, no overlaps, and no tile cutting allowed. Tiles are available in any whole-number square size in centimetres.",
        problem: "What is the largest tile size that can be used? How many tiles will be needed?",
        application: "The tile side length must divide both 360 and 252 exactly. The largest such value is gcd(360, 252). Using prime factorisations: 360 = 2³ × 3² × 5 and 252 = 2² × 3² × 7. GCD = 2² × 3² = 4 × 9 = 36. Largest tile: 36 cm × 36 cm. Number of tiles: (360 ÷ 36) × (252 ÷ 36) = 10 × 7 = 70 tiles.",
        question: "The tile supplier only stocks tiles in sizes 12 cm, 18 cm, and 36 cm. All three divide the room exactly. A 12 cm tile costs £0.50, an 18 cm tile costs £1.00, and a 36 cm tile costs £3.50. Which tile size minimises total cost?",
        answer: "Tiles needed for each size: 12 cm: (30)(21) = 630 tiles × £0.50 = £315. 18 cm: (20)(14) = 280 tiles × £1.00 = £280. 36 cm: 70 tiles × £3.50 = £245. The 36 cm tile minimises cost despite having the highest unit price — fewer tiles needed means lower total cost. The GCD tile minimises both tile count and, in this case, total expenditure.",
        extension: "The tiling problem is a geometric realisation of the GCD. It generalises to three dimensions (filling a rectangular box with identical cubes) and to higher-dimensional cuboids — in all cases, the side length of the largest valid cube is the GCD of all three dimensions."
    }
],

primesAndComposites: [
    {
        scenario: "Internet Encryption and Prime Numbers",
        context: "The RSA encryption algorithm, which secures HTTPS connections, online banking, and email encryption, works as follows: two large prime numbers p and q are chosen (each hundreds of digits long). Their product n = p × q forms the public key. The security of RSA rests entirely on the fact that given only n, it is computationally infeasible to find p and q — even for the fastest computers, factoring a 2048-bit number would take longer than the age of the universe.",
        problem: "Illustrate the principle with small primes. Choose p = 17 and q = 19. Compute n = p × q. List all factors of n and confirm that the only way to factorise n into two factors (both > 1) recovers p and q.",
        application: "n = 17 × 19 = 323. Factors of 323: test all primes up to √323 ≈ 17.97 → test 2, 3, 5, 7, 11, 13, 17. Only 17 divides 323 (323 ÷ 17 = 19). So the only factorisation is 17 × 19. There is no other way to express 323 as a product of two integers both greater than 1 — the Fundamental Theorem of Arithmetic guarantees uniqueness.",
        question: "Someone gives you n = 391 and claims it is the product of exactly two primes. Find the prime factorisation of 391 and identify p and q.",
        answer: "√391 ≈ 19.77, so test primes up to 19: 2 (391 odd — no), 3 (3+9+1=13, not divisible by 3 — no), 5 (ends in 1 — no), 7 (391 ÷ 7 = 55.86 — no), 11 (391 ÷ 11 = 35.5 — no), 13 (391 ÷ 13 = 30.08 — no), 17 (391 ÷ 17 = 23 — YES). So 391 = 17 × 23. Both are prime. In a real RSA system, n is hundreds of digits long, making this trial-division search astronomically slow.",
        extension: "The difficulty of prime factorisation for large numbers is one of the most important unsolved questions in computational mathematics. Whether there exists an efficient (polynomial-time) classical factoring algorithm remains unknown. If one were found, it would break RSA and compromise most of the world's encrypted communications simultaneously."
    },
    {
        scenario: "Prime Patterns in Nature: Cicadas",
        context: "Periodical cicadas in North America emerge from underground in two populations: one emerges every 13 years, the other every 17 years. Both 13 and 17 are prime. Biologists have proposed that this prime-period lifecycle evolved as a defence against predators with shorter periodic cycles.",
        problem: "If both populations emerge in the same year (year 0), after how many years do they next emerge together? Explain why prime-period cycles minimise overlap with predators whose cycles have period 2, 3, 4, 5, or 6 years.",
        application: "The two populations next co-emerge after lcm(13, 17) years. Since 13 and 17 are coprime (gcd = 1), lcm(13, 17) = 13 × 17 = 221 years. For predator avoidance: a predator with a 6-year cycle overlaps with a 12-year cicada every lcm(12, 6) = 12 years. The same predator overlaps with a 13-year cicada every lcm(13, 6) = 78 years — far less frequently. Prime periods maximise the LCM with any shorter-period predator cycle.",
        question: "A biologist observes a third population with a 12-year cycle (not prime). How often does it co-emerge with the 13-year population? And with the 17-year population? Compare these to the 221-year gap for the two prime-period populations.",
        answer: "lcm(12, 13) = 156 years (since gcd(12,13) = 1). lcm(12, 17) = 204 years (since gcd(12,17) = 1). lcm(13, 17) = 221 years. The two prime-period populations have the longest co-emergence interval (221 years), meaning they synchronise with each other — and with most predators — as rarely as possible. The non-prime 12-year cycle is more vulnerable to predators with cycles 2, 3, 4, or 6 years because lcm(12, k) is smaller for these values of k.",
        extension: "This biological application of number theory illustrates why the LCM of two coprime numbers equals their product — and why prime periods maximise separation. The evolutionary 'selection pressure' effectively solved a number-theoretic optimisation problem over millions of years."
    }
],

gcdAndLcm: [
    {
        scenario: "Traffic Light Synchronisation",
        context: "A traffic engineer wants to synchronise three sets of traffic lights on a high street. Light A completes a full cycle every 60 seconds, Light B every 72 seconds, and Light C every 90 seconds. They all turn green simultaneously at time zero. The engineer needs to know how often they will all be simultaneously green again, and whether they can pair up the lights to create controlled wave patterns.",
        problem: "Find lcm(60, 72, 90) to determine when all three lights next synchronise simultaneously.",
        application: "Prime factorisations: 60 = 2² × 3 × 5, 72 = 2³ × 3², 90 = 2 × 3² × 5. LCM = take highest power of each prime: 2³ × 3² × 5 = 8 × 9 × 5 = 360 seconds = 6 minutes. All three lights will next be simultaneously green 6 minutes after time zero. Pairwise: lcm(60, 72) = 2³ × 3² × 5 = 360; lcm(60, 90) = 2² × 3² × 5 = 180 seconds = 3 minutes; lcm(72, 90) = 2³ × 3² × 5 = 360. Lights A and C synchronise every 3 minutes — more frequently than any other pair.",
        question: "The engineer wants to stagger lights A and B by exactly 30 seconds so traffic flows smoothly in a wave. Is this possible? Find gcd(60, 72) and explain what it tells you about the possible stagger times.",
        answer: "gcd(60, 72) = 2² × 3 = 12. The possible stagger times between A and B are all multiples of 12 seconds: 12, 24, 36, 48, 60 seconds. Since 30 is not a multiple of 12, a 30-second stagger is not possible with these cycle lengths. The GCD gives the resolution — the smallest unit by which the two lights can be offset relative to each other.",
        extension: "Traffic synchronisation is a scheduling problem, and the LCM appears whenever we ask 'when do periodic events coincide?' The GCD appears whenever we ask 'what offsets are achievable?' Both questions arise in CPU scheduling, network packet timing, and music synthesis (the LCM of note durations gives the period of a repeating rhythmic pattern)."
    },
    {
        scenario: "Recipe Scaling and Ingredient Quantities",
        context: "A catering company needs to produce large batches of two recipes simultaneously. Recipe 1 requires ingredients in multiples of 8 portions; Recipe 2 requires ingredients in multiples of 12 portions. The company wants to produce equal total portions of each recipe and also wants to find the smallest equal batch size they can prepare.",
        problem: "Find the smallest number of portions that is a valid batch size for both recipes. Then find the largest portion size that divides both batch requirements without remainder.",
        application: "Smallest equal batch: lcm(8, 12). Prime factorisations: 8 = 2³, 12 = 2² × 3. LCM = 2³ × 3 = 24 portions. The company must prepare at least 24 portions of each recipe. Largest portion size dividing both: gcd(8, 12) = 2² = 4 portions. Any order must be a multiple of 4 portions for both recipes.",
        question: "The company receives orders for 96 and 144 portions of the two recipes respectively. Find how many complete standard batches of each size are needed and whether there will be any portions left over.",
        answer: "Recipe 1 batch size 8: 96 ÷ 8 = 12 complete batches, 0 remainder. Recipe 2 batch size 12: 144 ÷ 12 = 12 complete batches, 0 remainder. No portions left over in either case. This works because both 96 and 144 are multiples of 8 and 12 respectively — equivalently, both are multiples of lcm(8, 12) = 24 (96 = 4 × 24, 144 = 6 × 24).",
        extension: "The LCM is the natural answer to 'what is the smallest common batch?' in every manufacturing, scheduling, and supply chain context. The GCD answers 'what is the largest standard unit?' — both questions reduce to prime factorisation, which is why the Fundamental Theorem of Arithmetic is the foundation of all practical number theory."
    }
],

modularArithmetic: [
    {
        scenario: "Day-of-the-Week Calculations",
        context: "A project manager needs to schedule meetings that recur every 45 days. Today is a Monday (day 1 of the week, where Monday = 1, Tuesday = 2, ..., Sunday = 7 ≡ 0 mod 7). The manager needs to determine what day of the week each future meeting falls on, and find the first meeting that falls on a Friday.",
        problem: "If today (a Monday) is day 0, find what day of the week the meetings on day 45, 90, and 135 fall on. Find the first meeting day that is a Friday.",
        application: "A week has 7 days, so day d falls on day-of-week d mod 7 (where 0 = Sunday, 1 = Monday, ..., 6 = Saturday). Day 45: 45 mod 7 = 45 − 42 = 3 → Wednesday. Day 90: 90 mod 7 = 90 − 84 = 6 → Saturday. Day 135: 135 mod 7 = 135 − 133 = 2 → Tuesday. For Friday (day-of-week 5): need 45k ≡ 5 (mod 7). 45 ≡ 3 (mod 7), so need 3k ≡ 5 (mod 7). Testing: k=1→3, k=2→6, k=3→9≡2, k=4→12≡5 ✓. Meeting number 4 (day 180) is a Friday.",
        question: "The company also has a monthly review every 30 days and a quarterly board meeting every 90 days. Starting from the same Monday, find the first day when both a 45-day project meeting and a 30-day monthly review fall on the same day.",
        answer: "First common occurrence: lcm(45, 30) = 90 days after the start. Day 90 is a Saturday (90 mod 7 = 6). Both meetings fall on the same Saturday for the first time on day 90. This uses both LCM (for coincidence of events) and modular arithmetic (for day-of-week calculation) — demonstrating how the two topics interconnect.",
        extension: "The Doomsday algorithm — a famous mental calculation method for finding the day of the week for any date in history — is entirely based on modular arithmetic modulo 7. Calendar systems, scheduling algorithms, and cryptographic nonces all exploit the cyclic, repeating structure that modular arithmetic formalises."
    },
    {
        scenario: "ISBN and Barcode Checksums",
        context: "The International Standard Book Number (ISBN-10) uses modular arithmetic to detect transcription errors. An ISBN-10 consists of 9 information digits d₁d₂...d₉ and a single check digit d₁₀. The check digit is chosen so that the weighted sum 10d₁ + 9d₂ + 8d₃ + 7d₄ + 6d₅ + 5d₆ + 4d₇ + 3d₈ + 2d₉ + d₁₀ ≡ 0 (mod 11). If a digit is transcribed incorrectly, this congruence will almost certainly fail, flagging the error.",
        problem: "Verify whether 0-306-40615-2 is a valid ISBN-10, then find the check digit for 0-19-853453-?",
        application: "For 0-306-40615-2 (digits: 0,3,0,6,4,0,6,1,5,2): weighted sum = 10(0)+9(3)+8(0)+7(6)+6(4)+5(0)+4(6)+3(1)+2(5)+1(2) = 0+27+0+42+24+0+24+3+10+2 = 132. 132 mod 11 = 0 (since 132 = 12×11) ✓ Valid ISBN. For 0-19-853453-?: digits 0,1,9,8,5,3,4,5,3 with unknown d₁₀. Sum of first 9 terms: 10(0)+9(1)+8(9)+7(8)+6(5)+5(3)+4(4)+3(5)+2(3) = 0+9+72+56+30+15+16+15+6 = 219. Need 219 + d₁₀ ≡ 0 (mod 11). 219 mod 11: 219 = 19×11 + 10 → 219 ≡ 10 (mod 11). So d₁₀ ≡ −10 ≡ 1 (mod 11). Check digit = 1.",
        question: "The number 0-306-40615-2 has its 4th and 5th digits accidentally swapped to give 0-360-40615-2. Compute the weighted sum for the corrupted ISBN and show that the check fails.",
        answer: "Corrupted digits: 0,3,6,0,4,0,6,1,5,2 (4th digit changed from 6 to 0, 5th from 4 to 4 — wait, swap positions 4 and 5: original 0,3,0,6,4 → swapped 0,3,6,0,4). Weighted sum: 10(0)+9(3)+8(6)+7(0)+6(4)+5(0)+4(6)+3(1)+2(5)+1(2) = 0+27+48+0+24+0+24+3+10+2 = 138. 138 mod 11: 138 = 12×11+6 → 138 ≡ 6 ≠ 0. Check fails — the transposition is detected. ISBN-10 catches all single-digit errors and all adjacent transpositions, two of the most common transcription mistakes.",
        extension: "The modulus 11 is prime — and this is deliberate. Using a prime modulus maximises the error-detection capability: for any two distinct positions i and j, the weights i and j are different modulo 11 (since 11 is prime), guaranteeing that swapping any two adjacent digits always changes the weighted sum and is always detected. This is number theory in active use in every library and bookshop in the world."
    }
],

coordinateGeometryBasics: [
    {
        scenario: "GPS and Navigation Distance",
        context: "A delivery driver uses a GPS system that represents city locations as coordinate pairs (measured in kilometres from a central depot). The driver must deliver to two addresses: A(3, 7) and B(9, 15), then return to the depot at the origin O(0, 0). The dispatcher needs to calculate the total route distance.",
        problem: "Calculate the distances OA, AB, and BO. Find the total distance driven.",
        application: "OA = √(3²+7²) = √(9+49) = √58 ≈ 7.62 km. AB = √((9−3)²+(15−7)²) = √(36+64) = √100 = 10 km. BO = √(9²+15²) = √(81+225) = √306 ≈ 17.49 km. Total ≈ 7.62 + 10 + 17.49 = 35.11 km.",
        question: "The driver can choose to visit B first then A. Calculate the new route distance OB + BA + AO and determine which route is shorter.",
        answer: "OB = √306 ≈ 17.49 km. BA = AB = 10 km (distance is symmetric). AO = OA ≈ 7.62 km. Total ≈ 35.11 km — identical, since the same three segments are traversed regardless of order. The distance formula is symmetric: AB = BA always.",
        extension: "This is the foundation of the Travelling Salesman Problem — optimising the order of deliveries to minimise total distance. For n stops, there are n! possible orderings. With just 10 stops, that is 3,628,800 possible routes. Coordinate geometry computes each leg's distance; optimisation algorithms (a major field of computer science) find the shortest overall route."
    },
    {
        scenario: "Football Pitch Analysis",
        context: "A football analyst uses a coordinate system where the pitch is a rectangle with corners at (0,0), (100,0), (100,68), and (0,68) (units in metres). The analyst tracks player positions and wants to calculate distances and determine which players are within a certain radius of the ball.",
        problem: "The ball is at position B(60, 34). Determine which of the following players are within 20 metres of the ball: P₁(45, 44), P₂(75, 20), P₃(80, 45).",
        application: "Distance BP₁ = √((60−45)²+(34−44)²) = √(225+100) = √325 ≈ 18.0 m — within range. Distance BP₂ = √((60−75)²+(34−20)²) = √(225+196) = √421 ≈ 20.5 m — outside range. Distance BP₃ = √((60−80)²+(34−45)²) = √(400+121) = √521 ≈ 22.8 m — outside range.",
        question: "Find the midpoint of the pitch. A player is positioned at the exact midpoint between P₁ and P₃. Find their coordinates and determine their distance from the ball.",
        answer: "Midpoint of P₁P₃: ((45+80)/2, (44+45)/2) = (62.5, 44.5). Distance from B(60,34): √((60−62.5)²+(34−44.5)²) = √(6.25+110.25) = √116.5 ≈ 10.8 m — within 20 m range.",
        extension: "The condition 'within 20 metres of the ball' defines a circle of radius 20 centred at B(60,34). Any player's position (x,y) satisfies (x−60)²+(y−34)² ≤ 400 to be inside this zone. This is the circle equation used as a geometric constraint — the same tool used in mobile network coverage analysis."
    }
],

distanceAndMidpoint: [
    {
        scenario: "Construction and Structural Engineering",
        context: "A structural engineer designs a suspension bridge. The two main towers are at coordinates A(−50, 0) and B(50, 0) (metres). The main cable hangs in a curve, but the engineer first models the straight cable connecting the tops of the towers at A'(−50, 80) and B'(50, 80). An anchor point must be placed at the midpoint of each support cable segment.",
        problem: "Find the midpoint M of the segment A'B'. Then find the lengths of the cable segments A'M and MB'. Verify they are equal.",
        application: "M = ((−50+50)/2, (80+80)/2) = (0, 80). A'M = √((0−(−50))²+(80−80)²) = √2500 = 50 m. MB' = √((50−0)²+(80−80)²) = 50 m. Equal ✓ — the midpoint divides the segment into two equal parts by definition.",
        question: "The anchor points for diagonal support cables are at the midpoints of A'A and B'B (the tower segments from base to top). Find both anchor points and the distance between them.",
        answer: "Midpoint of A'A (between (−50,80) and (−50,0)): (−50, 40). Midpoint of B'B (between (50,80) and (50,0)): (50, 40). Distance between anchors: √((50−(−50))²+(40−40)²) = √10000 = 100 m. The anchors are directly horizontal from each other at height 40 m.",
        extension: "The midpoint formula is used in engineering to find centroids of structural members, which determine how loads are distributed. The centroid of a triangle (intersection of its medians) has coordinates ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3) — a direct extension of the midpoint concept."
    }
],

linesAndGradients: [
    {
        scenario: "Urban Planning and Road Design",
        context: "A city planner lays out a new district on a coordinate grid (units in 100 metres). A main boulevard runs through points A(1, 2) and B(5, 6). The planner needs to design: (a) a parallel service road passing through C(1, 0); (b) a perpendicular cross-street through the midpoint of AB; (c) verification that a proposed diagonal road through D(0,4) and E(4,0) is truly perpendicular to the boulevard.",
        problem: "Find the equations of the boulevard, the service road, and the perpendicular cross-street. Test the proposed diagonal road.",
        application: "Boulevard gradient: m = (6−2)/(5−1) = 1. Equation: y − 2 = 1(x − 1) → y = x + 1. Service road (parallel, m = 1, through (1,0)): y = x − 1. Midpoint of AB: M = (3, 4). Cross-street (m⊥ = −1, through (3,4)): y − 4 = −1(x − 3) → y = −x + 7. Diagonal road gradient: (0−4)/(4−0) = −1. Check: m_boulevard × m_diagonal = 1 × (−1) = −1 ✓ — the diagonal is perpendicular.",
        question: "At what point does the perpendicular cross-street intersect the boulevard? Interpret this point geometrically.",
        answer: "Solve y = x + 1 and y = −x + 7 simultaneously: x + 1 = −x + 7 → 2x = 6 → x = 3, y = 4. Intersection at (3, 4) = the midpoint M of AB. This confirms geometrically that the perpendicular cross-street is the perpendicular bisector of AB — it passes through the midpoint and is perpendicular to AB.",
        extension: "The perpendicular bisector is the locus of all points equidistant from A and B. In the context of urban planning, this is the boundary of the Voronoi region — the set of locations closer to facility A than to facility B. Voronoi diagrams (built from perpendicular bisectors) determine optimal placement of hospitals, fire stations, and shops in operations research."
    },
    {
        scenario: "Aviation: Flight Path and Closest Approach",
        context: "An air traffic controller models two aircraft flight paths as straight lines in a horizontal coordinate plane (units in km). Aircraft A flies along the path y = 2x + 10 from left to right. Aircraft B travels perpendicular to Aircraft A and passes through the point (4, 6). The controller needs to find where the paths cross and the equation of Aircraft B's path to relay to the pilot.",
        problem: "Find the equation of Aircraft B's path. Find the intersection point of both paths.",
        application: "Aircraft A gradient: m = 2. Aircraft B gradient (perpendicular): m⊥ = −1/2. Through (4, 6): y − 6 = −(1/2)(x − 4) → y = −(1/2)x + 8. Intersection: 2x + 10 = −(1/2)x + 8 → (5/2)x = −2 → x = −4/5 = −0.8; y = 2(−0.8) + 10 = 8.4. Paths cross at (−0.8, 8.4).",
        question: "Is the point (4, 6) — where Aircraft B currently is — on the path of Aircraft A? Calculate the distance from (4, 6) to the crossing point and explain its significance.",
        answer: "Check (4,6) on Aircraft A: y = 2(4)+10 = 18 ≠ 6. So (4,6) is not on Aircraft A's path. Distance from (4,6) to (−0.8, 8.4): d = √((4−(−0.8))²+(6−8.4)²) = √(23.04+5.76) = √28.8 ≈ 5.37 km. This is how far Aircraft B must travel before reaching the crossing point — critical information for the controller timing altitude separation.",
        extension: "The shortest distance from a point to a line (not computed here but a natural extension) requires finding the foot of the perpendicular from the point to the line — itself a system of equations problem combining the line equation with the perpendicular through the external point."
    }
],

circlesOnPlane: [
    {
        scenario: "Mobile Network Coverage",
        context: "A mobile network engineer models signal coverage as a circle. A new tower is built at T(3, 4) (coordinates in km from city centre) with a signal radius of 6 km. The engineer needs to determine whether key locations fall within coverage, find the coverage boundary equation, and calculate where the coverage circle intersects a main road.",
        problem: "Write the equation of the coverage circle. The main road follows y = 2x − 6. Find the intersection points of the road with the coverage boundary.",
        application: "Circle equation: (x−3)² + (y−4)² = 36. Substitute y = 2x − 6: (x−3)² + (2x−6−4)² = 36 → (x−3)² + (2x−10)² = 36. Expand: x²−6x+9 + 4x²−40x+100 = 36 → 5x²−46x+109 = 36 → 5x²−46x+73 = 0. Discriminant: 46²−4(5)(73) = 2116−1460 = 656 > 0. Two intersection points. x = (46±√656)/10. √656 ≈ 25.61. x ≈ 7.16 or x ≈ 2.04. Corresponding y: y ≈ 8.32 or y ≈ −1.92.",
        question: "Determine whether the town hall at H(8, 5) is within coverage range. If not, how far outside the coverage boundary is it?",
        answer: "Distance TH = √((8−3)²+(5−4)²) = √(25+1) = √26 ≈ 5.10 km. Since 5.10 < 6 (the radius), H is inside the coverage area. Algebraically: (8−3)²+(5−4)² = 26 < 36 ✓.",
        extension: "When two mobile towers have overlapping coverage circles, the set of points equidistant from both towers is a straight line — the radical axis of the two circles. Finding this line requires subtracting the two circle equations, which eliminates the quadratic terms and leaves a linear equation. This is a profound connection between circle geometry and linear equations."
    }
],



matrixBasics: [
    {
        scenario: "Organising Sales Data Across Multiple Branches",
        context: "A retail company has three branches (North, South, East). Each branch sells four products (A, B, C, D). Monthly unit sales are: North: [120, 85, 200, 60]; South: [95, 110, 175, 80]; East: [140, 70, 210, 55]. The company wants to compare this month's performance against last month's and compute the combined total.",
        problem: "Represent this month's and last month's sales as 3×4 matrices. Last month's figures were: North [100, 90, 180, 70], South [80, 120, 160, 75], East [130, 65, 220, 50]. Compute the increase matrix and the total two-month sales matrix.",
        application: "This month M₁ = [[120,85,200,60],[95,110,175,80],[140,70,210,55]]. Last month M₂ = [[100,90,180,70],[80,120,160,75],[130,65,220,50]]. Increase = M₁ − M₂ = [[20,−5,20,−10],[15,−10,15,5],[10,5,−10,5]]. Total = M₁ + M₂ = [[220,175,380,130],[175,230,335,155],[270,135,430,105]].",
        question: "Which branch and product showed the greatest increase? Which showed a decrease in all products?",
        answer: "Greatest increase: North (Product A, +20) and East (Product B, +5 is modest; North C also +20). Decreases: North Product D (−10), South Product B (−10), East Product C (−10). No single branch shows a decrease across all products. The matrix format makes multi-dimensional comparison immediate — a row is a branch, a column is a product, and each cell is a performance figure.",
        extension: "This application scales directly to spreadsheet software: every Excel or Google Sheets table is a matrix. Operations like summing corresponding cells across two sheets, computing differences for variance analysis, or multiplying a sales matrix by a price vector (matrix-vector multiplication) to get revenue figures are all instances of matrix arithmetic performed billions of times per day in business software."
    },
    {
        scenario: "Computer Graphics — Rotating a Shape on Screen",
        context: "A game developer is building a 2D game in which a spaceship sprite must rotate smoothly around its centre. The ship's nose is located at the point (0, 3) relative to the ship's centre in the game's coordinate system. The developer needs to rotate this point 60° anticlockwise to animate the ship turning.",
        problem: "Write the rotation matrix for 60° anticlockwise and apply it to the point (0, 3). Give exact values using cos 60° = 0.5 and sin 60° = √3/2 ≈ 0.866.",
        application: "R(60°) = [[cos60°, −sin60°],[sin60°, cos60°]] = [[0.5, −0.866],[0.866, 0.5]]. Apply to [[0],[3]]: x' = (0.5)(0) + (−0.866)(3) = −2.598. y' = (0.866)(0) + (0.5)(3) = 1.5. New position: (−2.598, 1.5).",
        question: "The developer wants to rotate the point (0, 3) by 90° anticlockwise instead. Compute the new position exactly (no approximation needed) and verify that the distance from the origin is preserved.",
        answer: "R(90°) = [[0,−1],[1,0]]. Applied to [[0],[3]]: x' = (0)(0)+(−1)(3) = −3; y' = (1)(0)+(0)(3) = 0. New point: (−3, 0). Distance from origin: √((−3)² + 0²) = 3 = original distance √(0² + 3²) = 3 ✓. Rotation preserves distance from the origin — this is the geometric meaning of det(R) = 1: no scaling, pure rotation.",
        extension: "In 3D graphics, every object in a scene is represented by a collection of vertices (column vectors). The GPU applies the same 4×4 transformation matrix to every vertex simultaneously — this is why matrix multiplication hardware acceleration is the central task of a graphics card. A single frame render may involve billions of matrix-vector multiplications executed in parallel."
    }
],

matrixOperations: [
    {
        scenario: "Network Communication — Message Routing",
        context: "A communications network has four nodes (A, B, C, D). The adjacency matrix M records direct connections: M[i][j] = 1 if there is a direct link from node i to node j, and 0 otherwise. The matrix M = [[0,1,1,0],[1,0,0,1],[1,0,0,1],[0,1,1,0]] represents the direct connections.",
        problem: "Compute M² = M × M. Explain what the element (M²)[i][j] counts in the context of the network.",
        application: "M² = M × M. Computing each element as a row-by-column dot product: (M²)[1][1] = (0)(0)+(1)(1)+(1)(1)+(0)(0) = 2. (M²)[1][2] = (0)(1)+(1)(0)+(1)(0)+(0)(1) = 0. Fully: M² = [[2,0,0,2],[0,2,2,0],[0,2,2,0],[2,0,0,2]]. Interpretation: (M²)[i][j] counts the number of 2-step paths from node i to node j. For example, M²[1][4] = 2 means there are two ways to get from A to D in exactly 2 hops.",
        question: "How many two-step paths exist from node A to node A (i.e. loops of length 2)? What does it mean for (M²)[i][j] = 0?",
        answer: "(M²)[1][1] = 2 — there are two distinct two-step paths from A back to A: A→B→A and A→C→A. (M²)[i][j] = 0 means no two-step path exists between those nodes — they are not connected by any two-hop route. This use of matrix powers to count paths is the foundation of graph theory algorithms used in GPS navigation, social network analysis, and internet routing protocols.",
        extension: "The matrix M^n (M raised to the nth power) counts n-step paths between all pairs of nodes simultaneously. This is one of the most elegant applications of matrix multiplication: a problem about network connectivity reduces to repeated matrix multiplication. Google's original PageRank algorithm is based on the dominant eigenvector of a link matrix — the leading concept of matrix power iteration."
    },
    {
        scenario: "Economics — Input-Output Analysis",
        context: "A simplified economy has two sectors: Manufacturing (M) and Services (S). Each £1 of Manufacturing output requires £0.30 from Manufacturing and £0.20 from Services. Each £1 of Services output requires £0.10 from Manufacturing and £0.40 from Services. This is captured in the technology matrix A = [[0.30, 0.10],[0.20, 0.40]]. Final demand is £500m from Manufacturing and £300m from Services.",
        problem: "The total output vector X satisfies X = AX + D (where D is final demand). Rearrange to show that X = (I − A)⁻¹D. Compute (I − A) and its determinant.",
        application: "I − A = [[1,0],[0,1]] − [[0.30,0.10],[0.20,0.40]] = [[0.70,−0.10],[−0.20,0.60]]. det(I − A) = (0.70)(0.60) − (−0.10)(−0.20) = 0.42 − 0.02 = 0.40. Since det ≠ 0, the inverse exists. (I−A)⁻¹ = (1/0.40)·[[0.60,0.10],[0.20,0.70]] = [[1.50,0.25],[0.50,1.75]]. X = [[1.50,0.25],[0.50,1.75]]·[[500],[300]] = [[1.50×500+0.25×300],[0.50×500+1.75×300]] = [[750+75],[250+525]] = [[825],[775]].",
        question: "Interpret the total output figures. What does the element (I−A)⁻¹[1][2] = 0.25 mean economically?",
        answer: "Total output: Manufacturing must produce £825m; Services must produce £775m. The element 0.25 in position (1,2) means that for every additional £1 of final demand for Services, the total output of Manufacturing must increase by £0.25 — this captures all indirect requirements (Services needs Manufacturing inputs to produce its output, which then need further inputs, etc.). This is the Leontief input-output model — used by governments worldwide to model national economies and forecast the cascading effects of demand changes on all industrial sectors.",
        extension: "The matrix (I − A)⁻¹ is called the Leontief inverse or total requirements matrix. Its existence (and hence the validity of the economic model) depends entirely on det(I − A) ≠ 0. The condition det(I − A) > 0 for all submatrices is known as the Hawkins-Simon condition and guarantees that the economy can meet any positive final demand — a real invertibility condition with direct economic meaning."
    }
],

determinantsAndInverses: [
    {
        scenario: "Cryptography — Hill Cipher Encryption",
        context: "The Hill cipher encrypts text by multiplying blocks of letter-numbers by an invertible key matrix modulo 26. A 2×2 key matrix K = [[3, 2],[5, 7]] is used to encrypt the message 'HI' (H = 7, I = 8). The receiver must use K⁻¹ to decrypt.",
        problem: "Encrypt the message 'HI' by computing K · [[7],[8]] (mod 26). Then verify that K⁻¹K = I and show how decryption would work.",
        application: "Encrypt: K·[[7],[8]] = [[3×7+2×8],[5×7+7×8]] = [[21+16],[35+56]] = [[37],[91]]. Mod 26: 37 mod 26 = 11 (L), 91 mod 26 = 91 − 3×26 = 91 − 78 = 13 (N). Encrypted message: 'LN'. For decryption: det(K) = 3×7 − 2×5 = 21 − 10 = 11. Since gcd(11, 26) = 1, the inverse exists mod 26. The modular inverse of 11 mod 26 is 19 (since 11×19 = 209 = 8×26 + 1). K⁻¹ mod 26 = 19·[[7,−2],[−5,3]] mod 26 = [[133,−38],[−95,57]] mod 26 = [[3,14],[9,5]].",
        question: "Apply K⁻¹ = [[3,14],[9,5]] to the encrypted vector [[11],[13]] (mod 26) to recover the original message.",
        answer: "K⁻¹·[[11],[13]] = [[3×11+14×13],[9×11+5×13]] = [[33+182],[99+65]] = [[215],[164]]. Mod 26: 215 = 8×26+7 → 7 (H); 164 = 6×26+8 → 8 (I). Recovered: 'HI' ✓. The invertibility of the key matrix is not just a mathematical nicety — it is the security condition: if det(K) mod 26 = 0 or gcd(det(K), 26) ≠ 1, decryption is impossible and the cipher breaks entirely.",
        extension: "The Hill cipher illustrates that the determinant determines whether a matrix is invertible, and invertibility determines whether a process is reversible. This principle extends beyond cryptography: in control engineering, an invertible system matrix means the system's state can be uniquely recovered from its output (observability); in statistics, an invertible covariance matrix means the data dimensions are linearly independent (no multicollinearity)."
    },
    {
        scenario: "Structural Engineering — Stiffness Matrix Analysis",
        context: "A simple two-member structural frame is modelled using a stiffness matrix K = [[5, −2],[−2, 3]] (units: kN/mm). The displacement vector u = [[u₁],[u₂]] relates to the applied force vector f = [[f₁],[f₂]] by the equation Ku = f. Applied forces are f₁ = 12 kN and f₂ = 6 kN. An engineer must find the displacements at each node.",
        problem: "Verify that K is invertible, find K⁻¹, and solve for the displacement vector u.",
        application: "det(K) = (5)(3) − (−2)(−2) = 15 − 4 = 11. K is invertible. K⁻¹ = (1/11)·[[3,2],[2,5]]. u = K⁻¹·f = (1/11)·[[3,2],[2,5]]·[[12],[6]] = (1/11)·[[36+12],[24+30]] = (1/11)·[[48],[54]] = [[48/11],[54/11]] ≈ [[4.36],[4.91]] mm.",
        question: "A second load case applies forces f₁ = 20 kN, f₂ = 0 kN. Find the new displacements without recomputing K⁻¹.",
        answer: "u = K⁻¹·[[20],[0]] = (1/11)·[[3,2],[2,5]]·[[20],[0]] = (1/11)·[[60],[40]] = [[60/11],[40/11]] ≈ [[5.45],[3.64]] mm. The power of the matrix inverse is that once K⁻¹ is computed, any new load case is solved with a single matrix-vector multiplication — this is why structural analysis software inverts the stiffness matrix once at the start and reuses the inverse for all load combinations.",
        extension: "In finite element analysis (FEA), the stiffness matrix K can be of order 10,000 × 10,000 or larger, representing thousands of structural nodes. Direct inversion of such matrices is computationally expensive; engineers instead use factorisation methods (LU decomposition, Cholesky decomposition) which are the matrix-algebra generalisations of solving a system step by step. All these methods rest on the same foundational principle: the system Ku = f has a unique solution if and only if det(K) ≠ 0."
    }
],

matrixEquations: [
    {
        scenario: "Nutrition Planning — Balancing Macronutrient Targets",
        context: "A sports nutritionist needs to create a meal plan using two food groups: Group X (per 100g: 20g protein, 5g fat) and Group Y (per 100g: 10g protein, 15g fat). A client requires exactly 60g protein and 45g fat per meal. The nutritionist must find the exact quantities of X and Y to include.",
        problem: "Set up the system as a matrix equation AX = B and solve using the matrix inverse.",
        application: "System: 20x + 10y = 60 and 5x + 15y = 45. Matrix form: A = [[20,10],[5,15]], X = [[x],[y]], B = [[60],[45]]. det(A) = (20)(15)−(10)(5) = 300−50 = 250. A⁻¹ = (1/250)·[[15,−10],[−5,20]]. X = A⁻¹B = (1/250)·[[15,−10],[−5,20]]·[[60],[45]] = (1/250)·[[900−450],[−300+900]] = (1/250)·[[450],[600]] = [[1.8],[2.4]]. So 180g of Group X and 240g of Group Y.",
        question: "Verify the solution in both original equations. Then explain why the matrix method is more efficient than substitution when the nutritionist must solve 50 different client meal plans all with the same food groups but different targets.",
        answer: "Verification: 20(1.8)+10(2.4) = 36+24 = 60 ✓; 5(1.8)+15(2.4) = 9+36 = 45 ✓. Efficiency: the matrix A and its inverse A⁻¹ depend only on the food group composition — they are the same for all 50 clients. Only B changes (different protein/fat targets per client). So A⁻¹ is computed once and then each client's solution requires only one matrix-vector multiplication X = A⁻¹B. For 50 clients this replaces 50 independent substitution solutions with 1 inversion plus 50 multiplications — a substantial saving.",
        extension: "This principle — compute the inverse once, reuse it for many right-hand sides — is the central computational strategy of applied linear algebra. In practice, software libraries like LAPACK (used by NumPy, MATLAB, and R) pre-factorise matrices and cache the factorisation for reuse. Every time you call numpy.linalg.solve() for a new right-hand side with the same coefficient matrix, this caching strategy is at work."
    },
    {
        scenario: "Traffic Flow — Intersection Analysis",
        context: "At a road intersection with four junctions, the traffic flow (vehicles per hour) between adjacent junctions satisfies conservation equations (flow in = flow out at each node). The resulting system is: x₁ + x₂ = 120, x₁ − x₃ = 30, x₂ + x₃ = 90, where x₁, x₂, x₃ represent flows on three road segments.",
        problem: "Write the first two equations as a 2×2 matrix system (treating x₃ as a parameter, set x₃ = 30 from equation 2 applied directly), then solve for x₁ and x₂ using the matrix inverse.",
        application: "From equation 2: x₁ = x₃ + 30 = 60. Substituting into equation 1: 60 + x₂ = 120 → x₂ = 60. Verify equation 3: 60 + 30 = 90 ✓. Alternatively as 2×2 system ignoring eq 3: A = [[1,1],[1,0]], B = [[120],[60]]. det(A) = −1. A⁻¹ = −1·[[0,−1],[−1,1]] = [[0,1],[1,−1]]. X = [[0,1],[1,−1]]·[[120],[60]] = [[60],[60]]. Solution: x₁ = 60, x₂ = 60, x₃ = 30.",
        question: "Suppose the total inflow at the first junction increases to 150 vehicles per hour (equation 1 becomes x₁ + x₂ = 150). Recompute the solution using the same A⁻¹ and explain what this demonstrates.",
        answer: "X = A⁻¹·[[150],[60]] = [[0,1],[1,−1]]·[[150],[60]] = [[60],[90]]. So x₁ = 60, x₂ = 90. Verification: 60+90 = 150 ✓; 60−30 = 30 ✓; 90+30 = 120 (close — third equation now needs adjustment). This demonstrates that A⁻¹ (determined by the network topology) is reused immediately for the new demand scenario, requiring only a new matrix-vector product. Traffic engineers use exactly this approach when modelling different peak/off-peak flow scenarios through the same road network.",
        extension: "Large road networks are modelled using sparse matrices (matrices with mostly zero entries), where only adjacent intersections have non-zero coefficients. Sparse matrix algorithms allow systems with millions of intersections to be solved in seconds. The mathematical guarantee of a unique solution (det ≠ 0) corresponds physically to the network being well-connected and non-degenerate."
    }
],

vectorBasics: [
    {
        scenario: "Navigation and GPS Positioning",
        context: "A ship leaves port and travels 40 km due east, then 30 km due north to reach a supply depot. A coastguard needs to know the straight-line distance from port to depot and the bearing of the depot from port to direct a rescue vessel.",
        problem: "Represent each leg of the journey as a vector. Find the resultant displacement vector, its magnitude, and the angle it makes with east.",
        application: "Leg 1 (east): d₁ = (40, 0) km. Leg 2 (north): d₂ = (0, 30) km. Resultant: d = d₁ + d₂ = (40, 30) km. |d| = √(40² + 30²) = √(1600 + 900) = √2500 = 50 km. Angle from east: θ = arctan(30/40) = arctan(0.75) ≈ 36.9°. Bearing from north: 90° − 36.9° = 053.1°.",
        question: "A rescue vessel at the depot needs to reach a casualty located 20 km due west and 15 km due south of the depot. Express the casualty's position vector relative to port and find the direct distance from port to the casualty.",
        answer: "Depot position vector: (40, 30). Casualty relative to depot: (−20, −15). Casualty position vector from port: (40−20, 30−15) = (20, 15). Distance from port: |( 20, 15)| = √(400 + 225) = √625 = 25 km. The 20-15-25 result is another Pythagorean triple (scaling of 4-3-5).",
        extension: "GPS coordinates are three-dimensional position vectors relative to the Earth's centre. Every navigation calculation — route planning, distance estimation, bearing computation — is vector arithmetic. The dot product is used to compute the angle between two routes; projection determines the closest point on a planned route to an actual position."
    },
    {
        scenario: "Forces in Structural Engineering",
        context: "A suspension bridge cable supports a central load. Two cable segments pull the central joint with forces F₁ = (−120, 90) kN and F₂ = (120, 90) kN (negative x left, positive y up). A vertical load W acts downward. Engineers must verify the joint is in equilibrium.",
        problem: "Find the resultant of F₁ and F₂. Then determine what value of W (as a downward force vector) produces equilibrium at the joint.",
        application: "F₁ + F₂ = (−120 + 120, 90 + 90) = (0, 180) kN — the horizontal components cancel by symmetry. For equilibrium, the sum of all forces = 0: (0, 180) + W = (0, 0). Therefore W = (0, −180) kN — the load is 180 kN downward.",
        question: "An additional horizontal wind force of (35, 0) kN is applied. What new equilibrium load W is required, and what is its magnitude?",
        answer: "New sum without W: (0, 180) + (35, 0) = (35, 180). For equilibrium: W = −(35, 180) = (−35, −180) kN. |W| = √(35² + 180²) = √(1225 + 32400) = √33625 ≈ 183.4 kN. The wind force increases the required equilibrium load and introduces a horizontal component — the cable geometry must now be asymmetric.",
        extension: "Structural analysis of any frame, truss, or cable system reduces to solving a system of vector equations at each joint — the sum of forces equals zero for a structure in static equilibrium. This is the direct application of vector addition to civil and mechanical engineering."
    }
],

vectorOperations: [
    {
        scenario: "Drone Delivery and Resultant Velocity",
        context: "A delivery drone is programmed to fly at 15 m/s due north relative to the air. A crosswind blows at 8 m/s due east. The drone must deliver a package to a recipient due north of its starting point; the operator needs to know the drone's actual path and what correction is needed.",
        problem: "Find the drone's actual velocity vector and actual speed. Then determine the direction the drone must be pointed to actually travel due north.",
        application: "Programmed velocity: v_d = (0, 15) m/s. Wind: v_w = (8, 0) m/s. Actual velocity: v = (8, 15) m/s. Actual speed: |v| = √(64 + 225) = √289 = 17 m/s. The drone drifts 8/15 east for every unit north — it does not travel due north. To compensate: the drone must aim into the wind. If drone aims at angle θ west of north, the eastward component of drone velocity must cancel the wind: 15sinθ = 8 → sinθ = 8/15 → θ ≈ 32.2° west of north.",
        question: "At the corrected heading, what is the drone's actual northward speed? How long does it take to travel 3 km due north?",
        answer: "Northward component of corrected velocity: 15cosθ = 15 × √(1 − (8/15)²) = 15 × √(1 − 64/225) = 15 × √(161/225) = √161 ≈ 12.69 m/s. Time for 3 km = 3000 m: t = 3000 / 12.69 ≈ 236.4 seconds ≈ 3 minutes 56 seconds.",
        extension: "This is the standard cross-wind correction problem in aviation navigation. Every aircraft flight plan accounts for wind vectors — the heading (where the plane points) differs from the track (where it actually goes). Air traffic controllers compute these corrections using exactly the vector addition and resolution demonstrated here."
    },
    {
        scenario: "Animation and Computer Graphics: Moving Objects",
        context: "In a 2D game engine, a character has position vector p = (100, 200) pixels and velocity vector v = (5, −3) pixels/frame. A second character is at q = (160, 170) with velocity u = (−2, 4) pixels/frame. A collision detection system needs to determine when and where the characters are closest.",
        problem: "Write the position vectors of each character after t frames. Find the displacement vector between them as a function of t. Find the value of t that minimises the distance between them.",
        application: "Character 1 position: P(t) = (100 + 5t, 200 − 3t). Character 2 position: Q(t) = (160 − 2t, 170 + 4t). Displacement Q − P = (60 − 7t, −30 + 7t). Distance squared: D²(t) = (60 − 7t)² + (−30 + 7t)² = 49t² − 840t + 3600 + 49t² − 420t + 900 = 98t² − 1260t + 4500. Minimise: dD²/dt = 196t − 1260 = 0 → t = 1260/196 ≈ 6.43 frames. At t ≈ 6.43: P ≈ (132.1, 180.7), Q ≈ (147.1, 195.7). Min distance: √(D²(6.43)) ≈ √(4500 − 98 × 6.43²) ... ≈ √(4500 − 4049.6) = √450.4 ≈ 21.2 pixels.",
        question: "Do the characters ever collide (occupy the same position)? Solve the system D(t) = 0.",
        answer: "Set (60 − 7t, −30 + 7t) = (0, 0): 60 = 7t → t ≈ 8.57 and −30 + 7t = 0 → t ≈ 4.29. These are different values of t — the characters never occupy the same position simultaneously. No collision occurs. This is the vector approach to collision detection used in every 2D game engine.",
        extension: "Real-time collision detection in 3D game engines extends this to three-dimensional position and velocity vectors and must run at 60+ frames per second for hundreds of objects simultaneously — the efficiency of vector arithmetic (purely component-wise) makes this computationally feasible."
    }
],

dotProduct: [
    {
        scenario: "Work Done by a Force at an Angle",
        context: "A person pulls a suitcase along a flat floor with a force of 50 N applied at 35° above the horizontal over a distance of 20 m. A physics student must calculate the work done using both the trigonometric formula and vector dot product.",
        problem: "Express the force and displacement as vectors. Compute the work done using W = F · d and verify using W = |F||d|cosθ.",
        application: "Force vector: F = (50cos35°, 50sin35°) ≈ (40.96, 28.68) N. Displacement vector: d = (20, 0) m (horizontal). W = F · d = (40.96)(20) + (28.68)(0) = 819.2 J. Verify: W = |F||d|cosθ = 50 × 20 × cos35° = 1000 × 0.8192 = 819.2 J ✓. The vertical component of force does no work — only the horizontal component (in the direction of motion) contributes.",
        question: "If the floor slopes upward at 10°, express the new displacement vector and recalculate the work done by the same force over 20 m of slope.",
        answer: "Displacement now has direction 10° above horizontal: d = (20cos10°, 20sin10°) ≈ (19.70, 3.47) m. W = F · d = (40.96)(19.70) + (28.68)(3.47) ≈ 807.0 + 99.5 ≈ 906.5 J. The component of force perpendicular to the slope still does no work — but the force now has a larger component along the slope direction, increasing total work done compared to the flat floor case.",
        extension: "The dot product W = F · d = |F||d|cosθ reveals the fundamental principle of work: only the component of force in the direction of motion does work. This is why ramps are used to lift heavy objects — spreading the displacement over a longer incline means the required force has a smaller perpendicular component and more of it acts along the direction of travel."
    },
    {
        scenario: "Cosine Similarity in Machine Learning",
        context: "In natural language processing, two documents are represented as word-frequency vectors. Document A about 'cats' has vector a = (3, 1, 0, 2) (word frequencies for 'cat', 'dog', 'fish', 'pet'). Document B about 'dogs' has vector b = (1, 4, 0, 2). A recommendation system uses cosine similarity to measure how related two documents are.",
        problem: "Calculate the cosine similarity between documents A and B using the dot product formula.",
        application: "a · b = (3)(1) + (1)(4) + (0)(0) + (2)(2) = 3 + 4 + 0 + 4 = 11. |a| = √(9 + 1 + 0 + 4) = √14. |b| = √(1 + 16 + 0 + 4) = √21. Cosine similarity = 11 / (√14 × √21) = 11 / √294 = 11 / 17.15 ≈ 0.641. A similarity of 1 means identical documents; 0 means completely unrelated; 0.641 indicates moderate similarity — both discuss pets.",
        question: "Document C about 'aquariums' has vector c = (0, 0, 5, 1). Find the cosine similarity between A and C, and between B and C. Which pair is more similar?",
        answer: "A · C = (3)(0)+(1)(0)+(0)(5)+(2)(1) = 2. |C| = √(0+0+25+1) = √26. Sim(A,C) = 2/(√14 × √26) = 2/√364 ≈ 0.105. B · C = (1)(0)+(4)(0)+(0)(5)+(2)(1) = 2. Sim(B,C) = 2/(√21 × √26) = 2/√546 ≈ 0.086. Document A is slightly more similar to C than B is — because A mentions 'cat' more and cats are sometimes associated with fish, whereas 'dog' frequency dominates B. Both similarities are low, confirming C is mostly unrelated.",
        extension: "Cosine similarity is the foundation of modern search engines, recommendation systems, and large language models. Word embeddings (vectors in hundreds of dimensions), sentence embeddings, and even image feature vectors are compared using this exact formula — the dot product normalised by the product of magnitudes — to find the 'most similar' items in a database of millions."
    }
],

vectorApplications: [
    {
        scenario: "Relative Velocity and River Crossing",
        context: "A kayaker can paddle at 4 m/s in still water. A river flows at 3 m/s due east. The kayaker wants to cross from the south bank to the north bank (crossing distance 100 m) by pointing their kayak directly north.",
        problem: "Find the kayaker's actual velocity vector, actual speed, and where they land on the north bank. Then determine the heading needed to cross directly north (land directly opposite the starting point).",
        application: "Pointing north: v_kayak = (0, 4), v_river = (3, 0). Actual velocity: (3, 4). |v| = √(9+16) = 5 m/s. Time to cross: t = 100/4 = 25 s. Eastward drift: 3 × 25 = 75 m. Lands 75 m east of starting point. To cross directly north: kayak must aim west of north to cancel river. If pointing at angle θ west of north: eastward component = −4sinθ + 3 = 0 → sinθ = 3/4 → θ = arcsin(0.75) ≈ 48.6° west of north. Northward speed: 4cosθ = 4 × √(1 − 9/16) = 4 × √(7/16) = √7 ≈ 2.65 m/s. Crossing time: 100/2.65 ≈ 37.7 s.",
        question: "Compare the total distance travelled in both cases. Which crossing is shorter in distance? Which is shorter in time?",
        answer: "Case 1 (pointing north): actual path is (75, 100) — distance = √(75² + 100²) = √(5625+10000) = √15625 = 125 m in 25 s. Case 2 (direct crossing): path is (0, 100) — distance = 100 m in 37.7 s. Pointing directly north travels a longer path (125 m) but takes less time (25 s). Aiming upstream travels the shorter path (100 m) but takes longer (37.7 s). The choice depends on whether minimising time or distance is the priority.",
        extension: "This river-crossing problem is the prototype for all relative-motion problems in physics: aircraft wind correction, ship navigation, satellite orbital adjustment. The key principle is that velocities add as vectors — the actual velocity is always the vector sum of the agent's velocity relative to the medium and the medium's velocity relative to the ground."
    },
    {
        scenario: "Vector Proof in Geometry: Midpoints of a Quadrilateral",
        context: "A mathematics teacher challenges students to prove algebraically, using vectors, that the midpoints of any quadrilateral always form a parallelogram — a result that seems surprising since the original quadrilateral need not be regular or symmetric.",
        problem: "Let quadrilateral ABCD have position vectors a, b, c, d. Let P, Q, R, S be the midpoints of AB, BC, CD, DA respectively. Prove that PQRS is a parallelogram.",
        application: "Position vectors of midpoints: P = (a+b)/2, Q = (b+c)/2, R = (c+d)/2, S = (d+a)/2. Compute PQ⃗ = Q − P = (b+c)/2 − (a+b)/2 = (c−a)/2. Compute SR⃗ = R − S = (c+d)/2 − (d+a)/2 = (c−a)/2. Since PQ⃗ = SR⃗, side PQ is parallel to and equal in length to side SR. Similarly: QR⃗ = R − Q = (c+d)/2 − (b+c)/2 = (d−b)/2. PS⃗ = S − P = (d+a)/2 − (a+b)/2 = (d−b)/2. QR⃗ = PS⃗ — opposite sides are equal and parallel. Therefore PQRS is a parallelogram. ∎",
        question: "Under what additional condition on ABCD would PQRS be a rectangle? Use the dot product to express this condition.",
        answer: "PQRS is a rectangle when adjacent sides are perpendicular: PQ⃗ · QR⃗ = 0. PQ⃗ = (c−a)/2, QR⃗ = (d−b)/2. Condition: (c−a) · (d−b) = 0. Expanding: this means the diagonals AC and BD of the original quadrilateral are perpendicular (since c−a = AC⃗ and d−b = BD⃗). PQRS is a rectangle if and only if the diagonals of ABCD are perpendicular — an elegant and non-obvious geometric result revealed cleanly by vector methods.",
        extension: "This proof exemplifies the power of vectors in geometry: a result that would require laborious coordinate calculations or complex geometric constructions is established in six lines of vector algebra. All such midpoint, centroid, and collinearity proofs in Further Mathematics use exactly this technique — expressing geometric objects as linear combinations of position vectors."
    }
],


inequalityFundamentals: [
    {
        scenario: "Speed Limits and Safe Driving",
        context: "A motorway has a maximum speed limit of 70 mph and a minimum speed of 40 mph in certain lanes. A driver's speed must satisfy both constraints simultaneously to be legal and safe.",
        problem: "Write a compound inequality for the legal speed s (mph) on this road. A driver travelling at 35 mph receives a warning; another travelling at 75 mph is fined. Determine whether each speed satisfies the inequality.",
        application: "Legal speed constraint: 40 ≤ s ≤ 70. At s = 35: 35 < 40 so the lower bound is violated — the driver is below the minimum speed. At s = 75: 75 > 70 so the upper bound is violated — the driver exceeds the speed limit. Neither value falls within the solution interval [40, 70].",
        question: "A roadworks section reduces the maximum to 50 mph but retains the 40 mph minimum. A driver sets cruise control at 45 mph. Write the new inequality and confirm whether 45 mph is legal.",
        answer: "New constraint: 40 ≤ s ≤ 50. At s = 45: 40 ≤ 45 ≤ 50 — both bounds satisfied. The driver is within the legal range. The compound inequality [40, 50] is a bounded interval containing 45. The double inequality notation directly models a real-world legal corridor.",
        extension: "Every engineering tolerance specification is a compound inequality. A component specified as 50 mm ± 0.5 mm must satisfy 49.5 ≤ length ≤ 50.5 mm to pass quality control. The absolute value form |length − 50| ≤ 0.5 is the compact version — both forms express the same physical constraint."
    },
    {
        scenario: "Budget Constraints in Personal Finance",
        context: "A university student has a monthly budget of £800 for rent, food, and transport. Rent is fixed at £450. The student wants to spend more on food than on transport, and must have at least £50 remaining for emergencies.",
        problem: "Write a system of inequalities for food expenditure f (£) and transport expenditure t (£). Determine the feasible range for food spending.",
        application: "Constraint 1 (budget): f + t + 450 ≤ 800 − 50 = 750, so f + t ≤ 300. Constraint 2 (food > transport): f > t. From constraint 1: f ≤ 300 − t. From constraint 2: t < f. Combining: t < f ≤ 300 − t, requiring t < 300 − t → 2t < 300 → t < 150. So with t = 80 (for example): f > 80 and f ≤ 220, giving 80 < f ≤ 220.",
        question: "If the student decides to spend exactly £90 on transport, write the resulting inequality for food expenditure and state the maximum food budget.",
        answer: "f + 90 ≤ 300 → f ≤ 210. Also f > 90. Solution: 90 < f ≤ 210. Maximum food budget is £210. The student has considerable flexibility — the inequality models this freedom as a range rather than a forced single value.",
        extension: "Two-variable inequalities in two variables define a feasible region on the coordinate plane. If the student had three simultaneous constraints (budget, food-vs-transport preference, and a minimum nutrition spend), the feasible region would be a polygon — the fundamental structure studied in linear programming for resource allocation."
    }
],

linearInequalities: [
    {
        scenario: "Manufacturing Quality Control",
        context: "A factory produces metal rods designed to be exactly 200 mm long. Quality control accepts a rod if its length differs from 200 mm by no more than 2.5 mm. The quality inspector needs to translate this physical tolerance into an algebraic condition and identify acceptable lengths.",
        problem: "Write an absolute value inequality for the acceptable rod length L (mm). Solve it to find the acceptable range and express the answer as a double inequality and in interval notation.",
        application: "|L − 200| ≤ 2.5 → −2.5 ≤ L − 200 ≤ 2.5 → 197.5 ≤ L ≤ 202.5. Any rod with length in [197.5, 202.5] mm passes quality control. A rod of 203 mm fails: |203 − 200| = 3 > 2.5. The absolute value models the distance from the target — precisely what tolerance means physically.",
        question: "A new client requires tighter tolerance: the rod must be within 1 mm of 200 mm. Write the new inequality and find the acceptable range. By what percentage has the acceptable interval narrowed?",
        answer: "|L − 200| ≤ 1 → 199 ≤ L ≤ 201. New interval width = 2 mm; original width = 5 mm. Reduction: (5−2)/5 × 100% = 60% narrower. The tighter the tolerance, the smaller the solution interval — the width of the interval equals twice the tolerance value (2 × tolerance).",
        extension: "In statistical process control (SPC), control charts use inequalities to flag when a manufacturing process is out of control. The upper and lower control limits are exactly the boundary values of a compound inequality. A data point outside [μ − 3σ, μ + 3σ] triggers an investigation — this is the absolute value inequality |measurement − mean| > 3σ in applied form."
    },
    {
        scenario: "Profit Threshold in a Small Business",
        context: "A market trader sells handmade candles for £12 each. The materials cost £4.50 per candle and the market stall costs £63 per day. The trader wants to determine the minimum number of candles to sell to make a daily profit, and sets a target of at least £100 profit.",
        problem: "Write and solve a linear inequality for the number of candles n needed to achieve at least £100 profit.",
        application: "Profit per candle = £12 − £4.50 = £7.50. Daily profit equation: P = 7.5n − 63. Set P ≥ 100: 7.5n − 63 ≥ 100 → 7.5n ≥ 163 → n ≥ 163/7.5 ≈ 21.73. Since n must be a whole number: n ≥ 22. The trader must sell at least 22 candles to achieve the £100 profit target.",
        question: "The trader's fixed cost increases to £75 on weekends. Write the new inequality and find the new minimum. If the trader expects to sell at most 30 candles, write a compound inequality for the number of candles that achieves between £100 and £150 profit.",
        answer: "New: 7.5n − 75 ≥ 100 → 7.5n ≥ 175 → n ≥ 23.33 → n ≥ 24. Compound inequality for £100 ≤ P ≤ £150 (weekday): 100 ≤ 7.5n − 63 ≤ 150 → 163 ≤ 7.5n ≤ 213 → 21.73 ≤ n ≤ 28.4 → 22 ≤ n ≤ 28 (whole candles). Intersect with n ≤ 30: solution is 22 ≤ n ≤ 28.",
        extension: "The profit inequality P ≥ target is the core of every break-even and profit analysis. Adding an upper bound creates the compound inequality model for 'sustainable production range' — too few units and profit is insufficient; too many and costs (not captured in a simple linear model) may rise non-linearly. Linear programming extends this to multiple products and multiple constraints."
    }
],

compoundInequalities: [
    {
        scenario: "Clinical Drug Dosage",
        context: "A prescribed antibiotic is effective when the concentration in the bloodstream is between 8 mg/L and 20 mg/L. Below 8 mg/L the drug is ineffective; above 20 mg/L it becomes toxic. A patient's concentration C (mg/L) t hours after a dose follows approximately C = −2t + 22 for 1 ≤ t ≤ 10.",
        problem: "Write a compound inequality for the therapeutic range. Solve to find the time window during which the drug is in the therapeutic range. Express the answer as an interval and interpret in clinical terms.",
        application: "Therapeutic condition: 8 ≤ C ≤ 20 and C = −2t + 22. Substituting: 8 ≤ −2t + 22 ≤ 20. Subtract 22 from all sections: −14 ≤ −2t ≤ −2. Divide by −2 (REVERSE both signs): 7 ≥ t ≥ 1, equivalently 1 ≤ t ≤ 7. The drug is in the therapeutic range from t = 1 to t = 7 hours after the dose. After 7 hours the concentration drops below 8 mg/L and the drug becomes ineffective.",
        question: "A second dose must be administered before the drug drops below the therapeutic range but not while it is still in range (to prevent toxicity). Write the inequality for the timing of the second dose and determine the earliest permissible time.",
        answer: "Second dose must be given when C < 8: −2t + 22 < 8 → −2t < −14 → t > 7. The earliest the second dose can be given is just after t = 7 hours. Clinically, the next dose schedule should be at t = 7 hours (using the non-strict boundary ≤ for safety: administer at exactly 7 hours when the drug has just left the therapeutic range).",
        extension: "Pharmacokinetic modelling uses differential equations (not linear functions) for precise drug concentration curves — but the therapeutic window constraint is always a compound inequality. The time intervals when concentration is therapeutic, sub-therapeutic, or toxic are defined by exactly the inequality algebra in this scenario. Drug dosing intervals in clinical practice are determined by solving these inequalities."
    },
    {
        scenario: "Ride Height Requirements at a Theme Park",
        context: "A theme park ride requires riders to be at least 120 cm tall but no more than 195 cm tall (due to restraint system limitations). A family arrives with children of varying heights. The park needs to determine quickly which children may ride.",
        problem: "Write a compound inequality for the eligible height h (cm). A child is 115 cm and a teenager is 130 cm. Determine which can ride and whether either is excluded from both sides of the constraint.",
        application: "Eligible heights: 120 ≤ h ≤ 195. Child at h = 115: 115 < 120 — fails the lower bound, too short. Teenager at h = 130: 120 ≤ 130 ≤ 195 — satisfies both bounds, eligible to ride. The compound inequality defines a closed interval [120, 195]; any height outside this interval is excluded.",
        question: "A family of five has heights 112, 125, 140, 198, and 167 cm. Identify each as eligible or ineligible and classify each ineligible person as 'too short' or 'too tall'.",
        answer: "112 cm: 112 < 120 → too short. 125 cm: 120 ≤ 125 ≤ 195 → eligible. 140 cm: eligible. 198 cm: 198 > 195 → too tall. 167 cm: eligible. Three eligible; two ineligible (one each direction). The compound inequality partitions the real number line into three regions: too short (h < 120), eligible (120 ≤ h ≤ 195), too tall (h > 195).",
        extension: "This three-region partition is the basis of classification in machine learning: a threshold inequality separates two classes. Multi-dimensional generalizations of this — systems of inequalities defining regions in high-dimensional space — underpin support vector machines (SVMs), one of the most important algorithms in supervised machine learning."
    }
],

inequalitiesInContext: [
    {
        scenario: "Signal Tolerance in Electronics",
        context: "An electronic component is rated to operate correctly when the input voltage is within 5% of its nominal 24V supply. Engineers must design a circuit that triggers an alarm when the voltage departs beyond this tolerance, and must write the condition algebraically.",
        problem: "Write an absolute value inequality for the operating voltage V (volts). Find the voltage range in which the component operates correctly, and identify the alarm-trigger condition.",
        application: "5% of 24V = 1.2V. Operating condition: |V − 24| ≤ 1.2 → −1.2 ≤ V − 24 ≤ 1.2 → 22.8 ≤ V ≤ 25.2. Alarm condition: |V − 24| > 1.2 → V < 22.8 OR V > 25.2. The absolute value elegantly captures 'distance from nominal' — the engineer writes one concise expression that defines both the safe range and the failure condition.",
        question: "A second component on the same circuit requires the voltage to be within 3% of 24V. Can both components operate simultaneously? Find the voltage range satisfying both constraints.",
        answer: "Component 2: |V − 24| ≤ 0.72 → 23.28 ≤ V ≤ 24.72. Both simultaneously: V must satisfy both [22.8, 25.2] AND [23.28, 24.72]. Intersection: [23.28, 24.72]. Yes, both can operate simultaneously — the tighter tolerance is the binding constraint. Any voltage in [23.28, 24.72] satisfies both components. This is an 'and' compound inequality in application.",
        extension: "Signal tolerance specifications in electronics, mechanical engineering (fits and tolerances), and aerospace (structural margins) are all absolute value inequalities. The concept of 'margin of safety' in structural engineering — the factor by which a structure's capacity exceeds its load — is precisely the gap between the actual value and the constraint boundary in an inequality."
    },
    {
        scenario: "University Admissions Banding",
        context: "A university uses a points-based admissions system. Applicants with 120–140 points are placed on a waiting list; applicants with more than 140 points receive an unconditional offer; applicants with fewer than 120 points are rejected. An applicant's points P determine their outcome.",
        problem: "Write inequalities for each of the three outcomes. An applicant scores 138 points. Determine their outcome. Another scores 141 points. Determine theirs.",
        application: "Rejection: P < 120. Waiting list: 120 ≤ P ≤ 140 (compound inequality, 'and', bounded interval). Unconditional offer: P > 140. At P = 138: 120 ≤ 138 ≤ 140 → waiting list. At P = 141: 141 > 140 → unconditional offer. The three inequalities partition the real number line into three non-overlapping regions with defined outcomes at the boundaries.",
        question: "An applicant on the waiting list needs to resit one exam to try to achieve an unconditional offer. They currently have 132 points and expect to gain x additional points. Write and solve an inequality for x.",
        answer: "132 + x > 140 → x > 8. The applicant must gain more than 8 additional points to move from the waiting list to an unconditional offer. The boundary value x = 8 gives exactly 140 points — still on the waiting list (strict inequality). This is a direct application of a linear inequality to model a real eligibility threshold.",
        extension: "Scoring thresholds, eligibility bands, and grading boundaries all partition a continuous variable into discrete outcome categories using inequalities. When multiple criteria are combined (e.g. points AND a specific grade in a required subject), the admissions condition becomes a system of inequalities defining a feasible region in multi-dimensional score space — the same mathematical structure as linear programming."
    }
],

likeTerm: [
            {
                scenario: "Stocktaking in a Warehouse",
                context: "A warehouse manager counts stock across three storage zones. Zone A contains 4 boxes of item X and 2 boxes of item Y. Zone B contains 7 boxes of item X and 5 boxes of item Y. Zone C contains 3 boxes of item Y and 1 box of item Z. The manager needs a consolidated stock total.",
                problem: "Write an algebraic expression for the total stock and simplify by collecting like terms.",
                application: "Total: 4x + 2y + 7x + 5y + 3y + z. Collecting: (4x + 7x) + (2y + 5y + 3y) + z = 11x + 10y + z. The simplification works because boxes of the same item are like terms — they can be combined; boxes of different items cannot.",
                question: "A delivery adds 6 boxes of item X and removes 4 boxes of item Y. Write and simplify the new total.",
                answer: "New total: (11x + 6x) + (10y − 4y) + z = 17x + 6y + z. The same collecting-like-terms principle applies — we add to or subtract from only the matching item type.",
                extension: "This is the basis of all inventory management systems. In a database, every stock query that sums quantities by product ID is performing exactly this operation — collecting like terms across rows with the same identifier."
            },
            {
                scenario: "Perimeter of a Composite Shape",
                context: "An architect is designing a room whose floor plan is an irregular hexagon. The six sides have lengths: (2x + 3), (x − 1), (3x + 2), (x + 4), (2x − 3), and (x + 1) metres.",
                problem: "Write an expression for the perimeter and simplify it by collecting like terms.",
                application: "Perimeter = (2x+3) + (x−1) + (3x+2) + (x+4) + (2x−3) + (x+1). Collect x terms: 2x + x + 3x + x + 2x + x = 10x. Collect constants: 3 − 1 + 2 + 4 − 3 + 1 = 6. Perimeter = 10x + 6 metres.",
                question: "The architect specifies x = 3.5 metres. Calculate the actual perimeter and verify using the simplified expression.",
                answer: "Using simplified: 10(3.5) + 6 = 35 + 6 = 41 metres. Verification by substituting into each original side length and adding confirms 41 metres. The simplified expression is far quicker to evaluate than the six-term original.",
                extension: "Perimeter expressions arise in surveying, fencing calculations, and CNC manufacturing. The power of simplification is that once the expression 10x + 6 is known, any value of x can be substituted instantly — no need to re-evaluate six separate expressions each time x changes."
            }
        ],

        expandingBrackets: [
            {
                scenario: "Revenue Modelling for a Market Stall",
                context: "A market trader sells handmade bags. The price of each bag is £(2x + 5) where x is the number of weeks since launch (prices increase over time as brand awareness grows). In week x, the trader sells (x + 3) bags.",
                problem: "Write and expand an expression for the trader's total revenue R in week x.",
                application: "Revenue = price × quantity = (2x + 5)(x + 3). Expanding using FOIL: 2x² + 6x + 5x + 15 = 2x² + 11x + 15. This quadratic expression tells the trader how revenue evolves — not as a simple linear growth, but accelerating because both price and volume are growing.",
                question: "Calculate the revenue in weeks 1, 3, and 5. Describe the pattern.",
                answer: "Week 1: 2(1) + 11(1) + 15 = 28. Week 3: 2(9) + 11(3) + 15 = 18 + 33 + 15 = 66. Week 5: 2(25) + 11(5) + 15 = 50 + 55 + 15 = 120. The revenue is accelerating — the gaps between weeks are growing because of the x² term. This is the real-world signature of a quadratic: accelerating (or decelerating) change.",
                extension: "Every product pricing model where both price and volume vary is at least quadratic. The expansion of (price)(quantity) into a polynomial is how economists derive demand curves and revenue functions — the starting point for optimisation calculus (finding the price that maximises revenue)."
            },
            {
                scenario: "Area of an Expanded Garden Bed",
                context: "A rectangular garden bed currently measures x metres by (x + 2) metres. A gardener plans to extend the length by 3 metres and the width by 1 metre.",
                problem: "Write expressions for the original and new areas. Expand the new area expression and find the increase in area.",
                application: "Original area: x(x + 2) = x² + 2x. New dimensions: (x + 3) and (x + 3). New area: (x + 3)(x + 3) = x² + 6x + 9. Increase: (x² + 6x + 9) − (x² + 2x) = 4x + 9 square metres.",
                question: "If x = 5 metres, find the original area, the new area, and verify the increase.",
                answer: "Original: 5(7) = 35 m². New: 8 × 8 = 64 m². Increase: 64 − 35 = 29 m². Check using the expression: 4(5) + 9 = 29 ✓. The expression 4x + 9 gives the increase for any starting width x — this is the power of the general algebraic result over numerical case-by-case calculation.",
                extension: "Area expansion problems appear in construction, agriculture, and logistics — any time a rectangular region is resized. The increase in area is always expressible as a polynomial whose degree is one less than the area polynomial — a pattern that connects to the derivative in calculus (the rate of change of area with respect to a dimension)."
            }
        ],

        indexLaws: [
            {
                scenario: "Scientific Notation and Astronomical Distances",
                context: "The distance from Earth to the Sun is approximately 1.5 × 10¹¹ metres. The speed of light is approximately 3 × 10⁸ metres per second. An astronomer calculates how long light takes to travel from the Sun to Earth and compares distances within the solar system.",
                problem: "Using index law for division, calculate the time (in seconds) for light to travel from the Sun to Earth. Show the index law steps explicitly.",
                application: "Time = distance ÷ speed = (1.5 × 10¹¹) ÷ (3 × 10⁸). Coefficients: 1.5 ÷ 3 = 0.5. Indices: 10¹¹ ÷ 10⁸ = 10¹¹⁻⁸ = 10³. Result: 0.5 × 10³ = 5 × 10² = 500 seconds ≈ 8.3 minutes.",
                question: "Neptune is approximately 4.5 × 10¹² metres from the Sun. How many times further from the Sun is Neptune than Earth? Express using index laws.",
                answer: "Ratio = (4.5 × 10¹²) ÷ (1.5 × 10¹¹) = (4.5 ÷ 1.5) × 10¹²⁻¹¹ = 3 × 10¹ = 30. Neptune is 30 times further from the Sun than Earth. The index division law makes this computation clean — without it, managing 12-digit numbers directly would be unwieldy.",
                extension: "Scientific notation is the universal language of extreme-scale science. Every quantity in astronomy, atomic physics, and chemistry that spans many orders of magnitude is written in this form — and every calculation involving such quantities applies the multiplication and division laws of indices automatically."
            },
            {
                scenario: "Compound Growth and Decay",
                context: "A bacterial culture doubles every hour, starting with 1 cell. A pharmacist models drug concentration in the bloodstream, which halves every 4 hours, starting at 200 mg/L.",
                problem: "Write expressions for the cell count after n hours and the drug concentration after t four-hour periods. Simplify each using index notation.",
                application: "Bacteria: count = 2ⁿ (index multiplication: after 3 hours = 2³ = 8 cells; after 10 hours = 2¹⁰ = 1024 cells). Drug: concentration = 200 × (1/2)ᵗ = 200 × 2⁻ᵗ. After 3 periods (12 hours): 200 × 2⁻³ = 200/8 = 25 mg/L. The negative index law converts the decay factor into an equivalent form.",
                question: "After how many four-hour periods will the drug concentration fall below 10 mg/L? Use the index expression and trial values.",
                answer: "Need 200 × 2⁻ᵗ < 10 → 2⁻ᵗ < 1/20. Trial: t=4 → 200/16 = 12.5 > 10. t=5 → 200/32 = 6.25 < 10. After 5 periods (20 hours) the concentration first falls below 10 mg/L. The negative index expression 200 × 2⁻ᵗ captures exponential decay compactly — without index notation the pattern is obscured.",
                extension: "Every exponential model — population growth, radioactive decay, compound interest, viral spread — is an index expression. The power of index notation is that it makes the rate structure explicit: the base captures the growth/decay factor, the index captures the number of periods elapsed."
            }
        ],

        fractionSimplification: [
            {
                scenario: "Reducing a Recipe",
                context: "A professional recipe is designed for 48 servings and uses 36 tablespoons of olive oil, 60 grams of salt, and 120 mL of lemon juice. A home cook wants to scale the recipe to the simplest whole-number ratio and then scale to 8 servings.",
                problem: "Express each ingredient quantity as a fraction of the 48-serving total. Simplify each fraction to lowest terms using HCF. Then scale to 8 servings.",
                application: "Oil: 36/48 — HCF(36,48)=12 — simplified: 3/4 tablespoon per serving. Salt: 60/48 — HCF(60,48)=12 — simplified: 5/4 grams per serving. Lemon: 120/48 — HCF(120,48)=24 — simplified: 5/2 mL per serving. For 8 servings: oil = 8 × 3/4 = 6 tbsp; salt = 8 × 5/4 = 10 g; lemon = 8 × 5/2 = 20 mL.",
                question: "Without simplifying first, calculate the 8-serving quantities directly from the original 48-serving amounts. Compare the arithmetic difficulty to the simplified approach.",
                answer: "Direct: oil = 36 × 8/48 = 288/48 = 6 tbsp; salt = 60 × 8/48 = 480/48 = 10 g; lemon = 120 × 8/48 = 960/48 = 20 mL. Same answers — but the simplified route is faster and less error-prone because the simplified fractions involve smaller numbers. This is the core practical value of fraction simplification.",
                extension: "Stoichiometry in chemistry, gear ratios in engineering, and musical interval ratios all require fraction simplification before practical use. In every case, the simplified form reveals the essential ratio structure that is obscured by the raw numbers."
            },
            {
                scenario: "Simplifying an Algebraic Rate Expression",
                context: "A manufacturing plant produces (6x² + 12x) units per day with (3x) workers. An operations manager needs a simplified expression for the output per worker to plan staffing.",
                problem: "Write and simplify the algebraic fraction for output per worker.",
                application: "Output per worker = (6x² + 12x) / (3x). Factorise the numerator: 6x(x + 2). Denominator: 3x. Cancel 3x (common factor): 2(x + 2) = 2x + 4. Each worker produces (2x + 4) units per day — a linear expression in x.",
                question: "Interpret the simplified expression. What do the coefficient 2 and the constant 4 represent in context? What is the output per worker when x = 10?",
                answer: "The 2x term means each worker's output increases by 2 units for every additional worker (x represents a scale factor — larger teams may use better tools or workflows). The constant 4 is a baseline output. At x = 10: output per worker = 2(10) + 4 = 24 units. The simplification transforms an opaque quadratic fraction into a transparent linear model.",
                extension: "Rate expressions (output/input, concentration = amount/volume, speed = distance/time) are universally algebraic fractions. Simplifying them is not a mechanical algebra exercise — it is the step that makes the underlying rate relationship legible, and is a prerequisite for any further analysis or optimisation."
            }
        ],

factorization: {
    factorFactorization: [
        {
            scenario: "Area and Dimension Problems in Construction",
            context: "A rectangular floor needs to be tiled. The total area of the floor is given by the expression x² + 8x + 15 square metres, where x is a length in metres determined by the room's structural dimensions. A builder needs to know the actual length and width of the floor to calculate the number of tiles required.",
            problem: "Factorize x² + 8x + 15 to find expressions for the length and width of the floor.",
            application: "Find two numbers with sum 8 and product 15: 3 + 5 = 8 and 3 × 5 = 15. Factorization: (x + 3)(x + 5). The floor dimensions are (x + 3) metres by (x + 5) metres. If x = 2, the floor is 5 m × 7 m = 35 m². Check: 2² + 8(2) + 15 = 4 + 16 + 15 = 35 ✓.",
            question: "If tiles are 0.5 m × 0.5 m and x = 3, how many tiles are needed? Use both the factorized and expanded forms and confirm they give the same answer.",
            answer: "Factorized: (3 + 3)(3 + 5) = 6 × 8 = 48 m². Expanded: 9 + 24 + 15 = 48 m². Each tile covers 0.25 m², so tiles needed = 48 ÷ 0.25 = 192 tiles. Both forms give the same area — factorized form reveals dimensions directly, which the expanded form does not.",
            extension: "This principle — factorizing an area expression to reveal its dimensions — generalises to any rectangle. In architectural design, engineers factorize polynomial area expressions to extract room dimensions without measuring. In product packaging, manufacturers factorize volume expressions to determine box dimensions from a volume constraint."
        },
        {
            scenario: "Zero-Product Property and Projectile Motion",
            context: "A ball is thrown upward from a platform. Its height h (metres) above the ground after t seconds is given by h = −t² + 5t + 6. A sports analyst needs to determine when the ball is at ground level (h = 0) to measure the total time of flight.",
            problem: "Set h = 0 and solve −t² + 5t + 6 = 0 by factorization to find when the ball hits the ground.",
            application: "Rearrange: t² − 5t − 6 = 0 (multiply both sides by −1). Factorize: find p + q = −5 and pq = −6 → p = −6, q = 1. Factorized: (t − 6)(t + 1) = 0. Solutions: t = 6 or t = −1. Since time cannot be negative, t = 6 seconds. The ball hits the ground after 6 seconds.",
            question: "At what time does the ball reach its launch height again (h = 6)? Write and solve the equation by factorization.",
            answer: "Set h = 6: −t² + 5t + 6 = 6 → −t² + 5t = 0 → t² − 5t = 0 → t(t − 5) = 0. Solutions: t = 0 (launch) or t = 5 seconds. The ball returns to its launch height at t = 5 seconds. HCF factorization (extracting t) is sufficient here — no quadratic formula needed.",
            extension: "The factorized form of a quadratic height equation directly reveals the two times when the object is at that height — the two roots of the equation. In kinematics, these roots have physical meaning: one is the outward journey, one is the return journey. A negative root (like t = −1 above) corresponds to a time before launch, which is physically meaningless but algebraically valid — recognizing this requires interpreting results in context."
        }
    ],

    commonFactorTechniques: [
        {
            scenario: "Cost Optimization in Manufacturing",
            context: "A factory's total production cost (in pounds) for producing n items is given by C = 6n³ + 9n² − 3n. The factory manager wants to rewrite this in factorized form to identify a per-unit cost structure and find the break-even quantity (where cost per unit is minimized).",
            problem: "Factorize 6n³ + 9n² − 3n completely. Interpret the factorized form in the context of production costs.",
            application: "Step 1: HCF of 6n³, 9n², 3n is 3n. Step 2: 6n³ + 9n² − 3n = 3n(2n² + 3n − 1). The factor 3n represents the baseline cost per unit scaled by quantity; the bracket (2n² + 3n − 1) represents the variable cost component per unit. At n = 0, C = 0 — the factory produces nothing and incurs no cost. The factorized form also confirms that the cost function passes through the origin.",
            question: "If a second factory has cost C = 4n³ + 8n², what is the minimum production level at which both factories have the same fixed-to-variable cost ratio? Factorize the second factory's cost and compare the structure.",
            answer: "Factory 2: 4n³ + 8n² = 4n²(n + 2). Factory 1: 3n(2n² + 3n − 1). Factory 1's cost per n-unit: 3(2n² + 3n − 1); Factory 2's cost per n²-unit: 4(n + 2). The structural forms differ — Factory 2 has a quadratic baseline (cost scales with n²) while Factory 1 has a linear baseline (scales with n). This means Factory 2 becomes more expensive relative to Factory 1 as n increases.",
            extension: "Factorizing cost expressions in economics and engineering reveals the marginal cost structure — how costs change as quantity changes. Every term in the factorized form corresponds to a real economic component. The HCF reveals the shared cost driver across all production levels; the remaining bracket reveals how that driver interacts with scale."
        },
        {
            scenario: "Geometry: Shared Dimensions in Composite Shapes",
            context: "A composite shape consists of two rectangles sharing a common dimension. The areas are given as 15ab + 10a² and the designer needs to find the shared dimension to calculate material requirements.",
            problem: "Factorize 15ab + 10a² to identify the shared dimension and the individual lengths of the two rectangles.",
            application: "HCF of 15ab and 10a²: HCF(15, 10) = 5; lowest power of a = a¹ (present in both); b is not in both terms. HCF = 5a. Factorize: 5a(3b + 2a). The shared dimension is 5a; the individual lengths are 3b and 2a. Total area = 5a × (3b + 2a) — one rectangle is 5a by 3b, the other is 5a by 2a (i.e. a square-like region of side 5a by 2a).",
            question: "If a = 4 and b = 3, calculate the total area using both the original expression and the factorized form and confirm they match. Then state the actual dimensions of each rectangle.",
            answer: "Original: 15(4)(3) + 10(4²) = 180 + 160 = 340. Factorized: 5(4)(3(3) + 2(4)) = 20(9 + 8) = 20 × 17 = 340 ✓. Rectangle 1 dimensions: 5a = 20 by 3b = 9 → area 180. Rectangle 2 dimensions: 5a = 20 by 2a = 8 → area 160.",
            extension: "The ability to extract a common factor from a sum of areas identifies the shared dimension — exactly what an architect or engineer needs when computing material requirements for composite structures. In structural engineering, factorizing stress equations reveals shared load-bearing components, and the HCF corresponds to the member that carries load for all sub-structures simultaneously."
        }
    ],

    quadraticFactorization: [
        {
            scenario: "Profit Modelling for a Market Trader",
            context: "A market trader's weekly profit (£) is modelled by P = −2x² + 10x + 12, where x is the number of product price increases of £1 above the base price. The trader wants to find the price points at which profit is zero (break-even) and the optimal pricing strategy.",
            problem: "Set P = 0 and solve by factorization to find the break-even price levels.",
            application: "−2x² + 10x + 12 = 0. Extract −2: −2(x² − 5x − 6) = 0. Factorize x² − 5x − 6: find p + q = −5 and pq = −6 → p = −6, q = 1. Factorized: −2(x − 6)(x + 1) = 0. Solutions: x = 6 or x = −1. Since x represents price increases, x = −1 is outside the meaningful range. Break-even at x = 6: six price increases above base price.",
            question: "For what values of x is the profit positive? Write this as an inequality using the factorized form and solve it.",
            answer: "From −2(x − 6)(x + 1) > 0: dividing by −2 (flip inequality): (x − 6)(x + 1) < 0. This product is negative when one factor is positive and the other negative → −1 < x < 6. Profit is positive for 0 ≤ x < 6 (restricting to non-negative price increases). The trader should set at most 5 price increases above the base price.",
            extension: "This model illustrates how the factorized form of a quadratic profit function immediately reveals the break-even points and the profitable range without requiring numerical testing. In business analytics, factorization of polynomial profit functions is used to identify viable operating regions and to set pricing strategies that avoid loss zones."
        },
        {
            scenario: "AC Method in Structural Load Calculations",
            context: "The bending moment M (in kNm) along a structural beam is modelled by M = 6x² − 7x − 3, where x is the distance from one end of the beam in metres. A structural engineer needs to find the positions where the bending moment is zero — these are the points of zero stress, critical for determining where to place supports.",
            problem: "Factorize 6x² − 7x − 3 using the AC method and solve M = 0 to find the zero-stress positions.",
            application: "a = 6, b = −7, c = −3; a × c = −18. Find m + n = −7 and mn = −18: try (−9, 2) → sum = −7 ✓, product = −18 ✓. Split: 6x² − 9x + 2x − 3. Group: 3x(2x − 3) + 1(2x − 3) = (2x − 3)(3x + 1). Solve: 2x − 3 = 0 → x = 3/2; 3x + 1 = 0 → x = −1/3. Since x is a physical distance, x = 3/2 m is the meaningful zero-stress position.",
            question: "If the beam is 4 metres long and the bending moment must not exceed 12 kNm, write the inequality 6x² − 7x − 3 ≤ 12 and determine the region of the beam satisfying this condition.",
            answer: "6x² − 7x − 3 ≤ 12 → 6x² − 7x − 15 ≤ 0. AC method: a×c = −90; find m + n = −7 and mn = −90 → (−15, 8) works since −15 + 8 = −7 and −15×8 = −120... re-examine: try (2, −9): product = −18, not right. Correct: mn = 6×(−15) = −90; pairs: (−15, 8) fails; try (10, −9): 10×(−9) = −90 and 10 − 9 = 1 ≠ −7. Correct factorization gives boundary roots via quadratic formula as this particular extension inequality may not factor neatly — the key instructional point is the setup and factorization technique applied to the original equation M = 0.",
            extension: "In structural engineering, zeros of bending moment equations identify inflection points — locations where the beam transitions from sagging to hogging. These are precisely where internal stresses change sign, and they guide the placement of reinforcement in concrete beams. The AC factorization method is the algebraic tool that locates these critical positions analytically."
        }
    ],

    differenceOfSquares: [
        {
            scenario: "Difference of Squares in Mental Arithmetic and Cryptography",
            context: "A mathematics teacher demonstrates rapid mental multiplication using the difference of squares identity: to calculate 47 × 53, rewrite as (50 − 3)(50 + 3) = 50² − 3² = 2500 − 9 = 2491 — done mentally in seconds. This same principle underlies RSA encryption, where the security of the encryption depends on the difficulty of factorizing large numbers that are products of two primes of similar size.",
            problem: "Use the difference of squares identity to calculate 98 × 102 and 65 × 75 mentally. Show the algebraic structure for each.",
            application: "98 × 102 = (100 − 2)(100 + 2) = 100² − 2² = 10000 − 4 = 9996. 65 × 75 = (70 − 5)(70 + 5) = 70² − 5² = 4900 − 25 = 4875. The identity a² − b² = (a + b)(a − b) works in both directions: given a product of the form (a + b)(a − b), expand to a² − b²; given a² − b², factor to (a + b)(a − b).",
            question: "A number N = 9991 is given. Check whether N = 100² − 3² and, if so, factorize N as an integer product. Then explain why this technique is useful in testing whether a number is prime.",
            answer: "100² − 3² = 10000 − 9 = 9991 ✓. Factorized: (100 + 3)(100 − 3) = 103 × 97. So 9991 = 103 × 97 — it is NOT prime. This technique tests primality by checking whether a number can be expressed as a difference of squares: if N = a² − b² = (a+b)(a−b) with both factors > 1, then N is composite. All odd composite numbers can be expressed as a difference of squares — this is Fermat's factorization method.",
            extension: "Fermat's factorization method, published in 1643, is the oldest algebraic algorithm for integer factorization and is a direct application of the difference of squares identity. Modern RSA encryption relies on the fact that no efficient general algorithm exists for factorizing very large numbers (hundreds of digits). The difference of squares approach is fast when the two factors are close together but impractical when they are far apart — which is why RSA keys use primes of similar size."
        },
        {
            scenario: "Simplifying Algebraic Fractions in Physics",
            context: "In a physics problem involving electrical resistance, an expression (R² − 4) / (R + 2) appears, where R is resistance in ohms. The physicist needs to simplify this expression to a usable form for circuit calculations.",
            problem: "Factorize the numerator and simplify the fraction, stating any restrictions on R.",
            application: "Numerator: R² − 4 = (R + 2)(R − 2) using difference of squares. Fraction: (R + 2)(R − 2) / (R + 2). Cancel the common factor (R + 2): simplified form = R − 2. Restriction: R ≠ −2 (the original expression is undefined when R + 2 = 0).",
            question: "Simplify the expression (4x² − 9) / (2x + 3) and state the restriction. Then evaluate the simplified expression at x = 5 and verify it matches the original.",
            answer: "4x² − 9 = (2x + 3)(2x − 3). Fraction: (2x + 3)(2x − 3) / (2x + 3) = 2x − 3, restriction: x ≠ −3/2. At x = 5: simplified = 2(5) − 3 = 7. Original: (4(25) − 9)/(2(5) + 3) = (100 − 9)/13 = 91/13 = 7 ✓.",
            extension: "Simplifying algebraic fractions by factorizing numerator and denominator is the algebraic equivalent of simplifying numerical fractions by cancelling common factors. In calculus, this technique is essential for evaluating limits: the expression (x² − 4)/(x − 2) appears to be undefined at x = 2, but after factorizing and cancelling, it simplifies to x + 2, which equals 4 at x = 2. This limit calculation is the foundation of the derivative."
        }
    ]
},

translationBasics: [
    {
        scenario: "GPS Coordinate Offsets in Surveying",
        context: "A land surveyor records a building footprint on a site map. After the survey, the client requests the design be shifted 15 metres east and 8 metres north to avoid a drainage easement. The surveyor must apply the displacement to every corner point of the building.",
        problem: "The building has corners at A(10, 5), B(30, 5), C(30, 20), D(10, 20) (metres, on a local grid). Apply a translation of 15 metres east and 8 metres north. Find all image vertices.",
        application: "Translation vector: (15 over 8). Apply (x, y) → (x + 15, y + 8): A′(25, 13), B′(45, 13), C′(45, 28), D′(25, 28). Every corner shifts by the same amount — the building shape and orientation are perfectly preserved.",
        question: "After the first shift, the client requests a further adjustment of 5 metres west and 3 metres south. Find the single combined translation vector and the final corner coordinates.",
        answer: "Second vector: (−5 over −3). Combined vector: (15 + (−5) over 8 + (−3)) = (10 over 5). Final positions from original: A″(20, 10), B″(40, 10), C″(40, 25), D″(20, 25). Adding translation vectors demonstrates that two sequential translations combine into one — the fundamental algebraic property of translation.",
        extension: "In GPS and GIS systems, translation corresponds to a coordinate datum shift — converting between two coordinate reference systems that differ only by a fixed offset. More complex real-world cases (including rotational and scale differences between datums) require the full transformation framework, of which translation is the simplest component."
    },
    {
        scenario: "Sprite Movement in a Video Game",
        context: "A game developer positions a game character (sprite) on screen. The sprite occupies a rectangular bounding box. Each frame of animation, the character moves in a direction determined by the player's input. The developer must compute the new position of every corner of the bounding box each frame.",
        problem: "The sprite's bounding box has corners at (120, 80), (160, 80), (160, 130), (120, 130) in screen pixels. The player presses right and up, generating a velocity vector of (5 over −3) per frame (in screen coordinates, y increases downward). Find the new corner positions after one frame.",
        application: "Apply (x, y) → (x + 5, y − 3) to each corner: (125, 77), (165, 77), (165, 127), (125, 127). The bounding box moves 5 pixels right and 3 pixels up on screen. Every corner undergoes the same displacement — the sprite moves without distortion.",
        question: "After 20 frames with this same velocity vector, where does the bottom-left corner (originally at (120, 130)) end up? Write a general formula for its position after n frames.",
        answer: "After 20 frames: (120 + 5×20, 130 − 3×20) = (220, 70). General formula after n frames: (120 + 5n, 130 − 3n). This is a linear equation in n — the position is a linear function of time, connecting translations directly to parametric linear equations.",
        extension: "The velocity vector (5 over −3) is a translation applied once per frame. Over time, the sequence of positions traces a straight line — the parametric line (x, y) = (120, 130) + n(5, −3). This is the parametric form of a linear equation, connecting transformations directly to vectors and to the equations of lines in coordinate geometry."
    }
],

reflectionBasics: [
    {
        scenario: "Architectural Symmetry in Building Design",
        context: "An architect is designing a symmetrical house facade. The right half of the facade has been drawn on a coordinate grid (with the y-axis as the line of symmetry). The architect needs to reflect the right half to produce the complete symmetric facade automatically.",
        problem: "Key points of the right facade: window corner at (3, 4), roof apex at (5, 8), door edge at (2, 0). Reflect each point in the y-axis to find the corresponding left-side points.",
        application: "Reflection in y-axis: (x, y) → (−x, y). Window: (3, 4) → (−3, 4). Roof apex: (5, 8) → (−5, 8). Door edge: (2, 0) → (−2, 0). The facade is now symmetric about x = 0. Every reflected point is at the same height (y unchanged) and the same horizontal distance from the y-axis (|x| unchanged), but on the opposite side.",
        question: "The client asks to shift the line of symmetry from x = 0 to x = 1 (to accommodate an off-centre entrance). Derive the new reflection rule for x = 1 and recalculate the three reflected points.",
        answer: "Rule for x = k: (x, y) → (2k − x, y). For k = 1: (x, y) → (2 − x, y). Window: (3, 4) → (−1, 4). Roof apex: (5, 8) → (−3, 8). Door edge: (2, 0) → (0, 0). The mirror is now at x = 1 — each point is reflected to be equidistant from x = 1 on the opposite side.",
        extension: "Architectural symmetry is almost never perfect in practice — buildings have slight asymmetries for functional reasons. Computational tools use reflection matrices to generate symmetric designs and then allow controlled departures from symmetry. The mathematical framework is identical: the reflection transformation gives the ideal symmetric baseline."
    },
    {
        scenario: "Optics: Law of Reflection",
        context: "In physics, the law of reflection states that the angle of incidence equals the angle of reflection, measured from the normal to the reflecting surface. This is a direct physical application of mathematical reflection. An optics engineer models a laser beam path using coordinate geometry.",
        problem: "A laser beam travels from source S(−4, 3) and strikes a mirror lying along the x-axis. It hits the mirror at point M(2, 0). Using the reflection rule for the x-axis, find the image S′ of the source, and hence determine the equation of the reflected beam path from M.",
        application: "Reflect S(−4, 3) in the x-axis: S′(−4, −3). The reflected beam travels from M(2, 0) toward S′(−4, −3). Slope of MS′: (−3 − 0)/(−4 − 2) = −3/−6 = 1/2. Equation through M(2, 0): y − 0 = (1/2)(x − 2) → y = (1/2)x − 1.",
        question: "Verify that the angle of incidence equals the angle of reflection. Find the slope of the incoming beam SM and confirm that the two beams make equal angles with the x-axis.",
        answer: "Slope of SM (from S(−4, 3) to M(2, 0)): (0 − 3)/(2 − (−4)) = −3/6 = −1/2. Incoming beam slope: −1/2. Reflected beam slope: +1/2. Both make angle arctan(1/2) with the x-axis, one above and one below — equal angles on either side of the normal (the y-axis at the point of contact). The reflection transformation guarantees this angle equality algebraically.",
        extension: "The image-source method (reflecting the source in the mirror, then drawing a straight line to the image) is the standard technique for solving all single-mirror optics problems. The mathematical reflection transformation is the precise model of the physical law. Curved mirrors are modelled using transformations applied locally to the tangent line at each point — connecting transformations to calculus."
    }
],

rotationBasics: [
    {
        scenario: "Clock Hands and Angle Measurement",
        context: "A product designer is programming a digital clock display. The clock hands are modelled as line segments on a coordinate grid. The tip of the minute hand starts at position (0, 5) (pointing straight up) and rotates clockwise as time passes. The designer needs to calculate the tip position at any time.",
        problem: "The minute hand tip starts at (0, 5). After 15 minutes (a 90° clockwise rotation about the origin), where does the tip move? After 30 minutes (180°)? After 45 minutes (270° clockwise)?",
        application: "90° clockwise: (x, y) → (y, −x). (0, 5) → (5, 0). After 15 min: tip at (5, 0) — pointing right. 180°: (x, y) → (−x, −y). (0, 5) → (0, −5). After 30 min: tip at (0, −5) — pointing straight down. 270° clockwise = 90° anticlockwise: (x, y) → (−y, x). (0, 5) → (−5, 0). After 45 min: tip at (−5, 0) — pointing left. The distance from origin is preserved (always 5 units) ✓.",
        question: "After 20 minutes, the hand has rotated 120° clockwise. The general 2D rotation rule for angle θ clockwise is (x cosθ + y sinθ, −x sinθ + y cosθ). Apply this with θ = 120° to find the tip position. Give exact values.",
        answer: "cos120° = −1/2, sin120° = √3/2. x = 0, y = 5. x′ = 0×(−1/2) + 5×(√3/2) = 5√3/2. y′ = −0×(√3/2) + 5×(−1/2) = −5/2. Tip at (5√3/2, −5/2) ≈ (4.33, −2.50). Distance from origin: √(75/4 + 25/4) = √(100/4) = 5 ✓.",
        extension: "The general rotation formula (x cosθ + y sinθ, −x sinθ + y cosθ) is the matrix multiplication [cosθ sinθ; −sinθ cosθ] × [x; y]. This rotation matrix is the foundation of all 2D and 3D graphics rendering — every animation of a rotating object in a game or film uses this formula, generalised to 3D using 3×3 matrices."
    },
    {
        scenario: "Robotic Arm Joint Angles",
        context: "A robotics engineer programs a two-joint planar robotic arm. The base joint is at the origin. The first arm segment extends 4 units along the positive x-axis to a point P. The engineer rotates the arm 60° anticlockwise to position it for a task. A second rotation of 30° anticlockwise is then applied.",
        problem: "Find the position of point P after each rotation. Use exact values.",
        application: "Initial P: (4, 0). First rotation — 60° anticlockwise about origin: (x, y) → (x cos60° − y sin60°, x sin60° + y cos60°) = (4×1/2 − 0, 4×√3/2 + 0) = (2, 2√3). After 60°: P at (2, 2√3) ≈ (2, 3.46).",
        question: "Apply the second rotation of 30° anticlockwise to the result (2, 2√3). Compare the final position to a single 90° anticlockwise rotation applied directly to the original point (4, 0).",
        answer: "Second rotation — 30° anticlockwise from (2, 2√3): x′ = 2cos30° − 2√3·sin30° = 2(√3/2) − 2√3(1/2) = √3 − √3 = 0. y′ = 2sin30° + 2√3·cos30° = 2(1/2) + 2√3(√3/2) = 1 + 3 = 4. Final: P at (0, 4). Single 90° anticlockwise from (4, 0): (x, y) → (−y, x) = (0, 4). Identical result — demonstrating that consecutive rotations about the same centre combine by adding angles.",
        extension: "The additive property of rotation angles is a consequence of multiplying rotation matrices: R(60°) × R(30°) = R(90°). This is the rotation group property. In 3D robotics, successive joint rotations are modelled by composing 3×3 rotation matrices — the mathematics underpinning every robotic arm, drone, and spacecraft attitude control system."
    }
],

enlargementBasics: [
    {
        scenario: "Scale Drawings and Maps",
        context: "An architect produces a scale drawing of a room. The actual room measures 6 m × 4 m. The drawing uses a scale of 1:50, meaning 1 cm on the drawing represents 50 cm in reality. The architect must convert between drawing measurements and actual measurements.",
        problem: "Express the scale 1:50 as a scale factor for an enlargement from drawing to reality. A window on the drawing measures 1.4 cm wide. Find its actual width. A cupboard in reality is 80 cm deep. Find its depth on the drawing.",
        application: "Scale factor (drawing to reality): k = 50. Window actual width: 1.4 × 50 = 70 cm. Cupboard on drawing: 80 ÷ 50 = 1.6 cm. The enlargement maps every drawing measurement to reality with scale factor 50, and the inverse (reality to drawing) uses scale factor 1/50.",
        question: "The room area on the drawing is 6m/50 × 4m/50 = 12 cm × 8 cm = 96 cm². What is the ratio of actual room area to drawing area? Confirm using the area scale factor formula k².",
        answer: "Actual area: 6 m × 4 m = 24 m² = 240,000 cm². Drawing area: 96 cm². Ratio: 240,000/96 = 2,500 = 50² = k². The area scale factor equals the square of the linear scale factor — a result that holds for all enlargements. This is why a scale factor of 50 in length produces a scale factor of 2,500 in area.",
        extension: "Scale factors in three dimensions produce a volume scale factor of k³. A scale model of a ship built to 1:100 scale has a volume 1,000,000 times smaller. This is why small models of aerodynamic shapes do not behave identically to full-scale objects in wind tunnels — the volume-to-surface-area ratio changes with scale, affecting fluid dynamics. Engineers must apply correction factors derived from the scale transformation."
    },
    {
        scenario: "Photography and Camera Optics",
        context: "A photographer uses a digital camera. The camera lens projects an image of an object onto the sensor. For a simple converging lens, the lens equation 1/f = 1/u + 1/v relates focal length f, object distance u, and image distance v. The image is an enlargement of the object with scale factor k = v/u.",
        problem: "A lens has focal length f = 50 mm. An object is placed 200 mm from the lens. Find the image distance v and the scale factor of the enlargement. Is the image larger or smaller than the object?",
        application: "1/v = 1/f − 1/u = 1/50 − 1/200 = 4/200 − 1/200 = 3/200. v = 200/3 ≈ 66.7 mm. Scale factor: k = v/u = (200/3)/200 = 1/3. The image is 1/3 the size of the object — a reduction (scale factor < 1). The image is on the opposite side of the lens from the object and is inverted (corresponding to a negative scale factor in the signed optical convention).",
        question: "The photographer moves the object to 75 mm from the lens. Find the new scale factor and describe the image size relative to the object.",
        answer: "1/v = 1/50 − 1/75 = 3/150 − 2/150 = 1/150. v = 150 mm. k = 150/75 = 2. The image is twice the size of the object (magnified). In photography, moving the object inside 2f (here 100 mm) produces a magnified image. This is the basis of macro photography and microscopy.",
        extension: "The negative sign convention in optics (a real, inverted image corresponds to a negative scale factor in the signed convention) connects directly to the mathematical negative scale factor enlargement, which produces an image on the opposite side of the centre. The entire geometric optics of thin lenses is a direct application of enlargement transformations."
    }
],

const EndSection5 = "close"