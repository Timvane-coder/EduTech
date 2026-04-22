

initializeMisconceptionDatabase() 




this.commonMisconceptions = {


basicProbability: {
    'Probability Scale and Interpretation': [
        'A probability of 0.99 means the event will definitely happen — FALSE: probability 0.99 means the event will happen approximately 99% of the time in the long run, not that it is guaranteed on any specific trial; a probability of exactly 1 is the only guarantee',
        'If an event has probability 1/2, it must happen exactly half the time in any set of trials — FALSE: P = 1/2 describes the long-run frequency; in 10 trials you might get 3 or 7 occurrences, and both are consistent with a fair probability of 1/2',
        'After a long run of tails, heads becomes more likely on the next flip — FALSE: this is the Gambler\'s Fallacy; coins have no memory — each flip is independent and P(heads) = 1/2 regardless of previous results',
        'Experimental probability of 0 means the event is impossible — FALSE: an event with theoretical probability P > 0 may simply not have occurred in a small sample; experimental probability from few trials is an unreliable estimate'
    ],
    'Sample Space Errors': [
        'When listing outcomes of two dice, (2,5) and (5,2) are the same outcome — FALSE: (2,5) means die 1 shows 2 and die 2 shows 5; (5,2) is the reverse — they are distinct outcomes and must both appear in the sample space',
        'The sample space for flipping three coins has 6 outcomes — FALSE: each coin has 2 outcomes, and by the fundamental counting principle, three coins have 2³ = 8 outcomes: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT',
        'Every outcome in a sample space is equally likely — FALSE: equally likely outcomes are an assumption that must be verified, not a universal truth; outcomes for a drawing pin (point-up vs point-down) are not equally likely'
    ]
},

probabilityRules: {
    'Addition Rule Errors': [
        'P(A or B) = P(A) + P(B) always — FALSE: this formula only applies when A and B are mutually exclusive; for non-mutually-exclusive events, the intersection must be subtracted: P(A ∪ B) = P(A) + P(B) − P(A ∩ B); without the subtraction, outcomes in both A and B are double-counted',
        'Mutually exclusive events are the same as independent events — FALSE: mutually exclusive events with non-zero probabilities are actually DEPENDENT — if A occurs, B cannot occur, so knowing A occurred drastically changes P(B); independent events can both occur freely',
        'If P(A) + P(B) > 1, the events must be mutually exclusive — FALSE: P(A) + P(B) > 1 simply means the events overlap (they are not mutually exclusive); it implies P(A ∩ B) > 0 because P(A ∪ B) ≤ 1 requires subtraction of the intersection'
    ],
    'Multiplication Rule Errors': [
        'P(A and B) = P(A) × P(B) always — FALSE: this formula only applies when A and B are independent; for dependent events, P(A ∩ B) = P(A) × P(B|A), where P(B|A) is the conditional probability of B given A has occurred',
        'Consecutive events are always independent — FALSE: events are independent only when the outcome of one does not affect the probability of the other; drawing without replacement makes consecutive draws dependent because the pool changes'
    ]
},

conditionalProbability: {
    'Conditional Probability Formula Errors': [
        'P(A|B) = P(A) / P(B) — FALSE: the correct formula is P(A|B) = P(A ∩ B) / P(B); the numerator is the joint probability P(A ∩ B), not the marginal P(A); using P(A) in the numerator gives a meaningless result whenever A and B are not independent',
        'P(A|B) = P(B|A) — FALSE: these are generally different probabilities; P(disease | positive test) is the probability that a person with a positive test has the disease; P(positive test | disease) is the test\'s sensitivity — confusing these is the Prosecutor\'s Fallacy, a serious error in legal and medical reasoning',
        'If P(A|B) = P(A), then A and B are related — FALSE: P(A|B) = P(A) is the definition of independence — it means knowing B occurred gives no information about A; this is the condition for NO relationship, not a relationship'
    ],
    'Tree Diagram Errors': [
        'The probabilities on the second level of a tree diagram are the same as on the first level — FALSE: second-level probabilities are CONDITIONAL on the first-level outcome; for experiments without replacement, the composition of the remaining pool changes after the first draw, so all second-level probabilities must be recalculated',
        'All paths in a tree diagram have the same probability — FALSE: path probabilities are products of their branch probabilities, which vary; only when all branches at every level are equal (as in a fair coin) do all paths share equal probability; always multiply along branches to find path probabilities',
        'You add probabilities along a path to find the path probability — FALSE: you MULTIPLY probabilities along a path (this is the multiplication rule for conditional events); you ADD across paths when combining multiple paths that satisfy the required event'
    ],
    'Bayes\' Theorem Errors': [
        'A high P(evidence | hypothesis) means the hypothesis is likely given the evidence — FALSE: this is the Prosecutor\'s Fallacy; P(evidence | hypothesis) can be high while P(hypothesis | evidence) is low if the prior P(hypothesis) is very small (e.g. a rare disease with a sensitive test)',
        'Bayes\' theorem is only used in medical problems — FALSE: Bayes\' theorem is the universal rule for reversing conditional probabilities; it applies in spam filtering, forensic science, weather forecasting, financial risk, and any situation where you want to update a prior belief using evidence',
        'The prior probability does not affect the posterior when the evidence is strong — FALSE: the prior always affects the posterior; a very low prior (rare event) can keep the posterior low even with strong evidence — this is why base rate neglect is a systematic error in human reasoning'
    ]
},

combinedEvents: {
    'Combined Event Calculation Errors': [
        'P(at least one A) = P(A on first trial) + P(A on second trial) — FALSE: this double-counts the case where A occurs on both trials; the correct approach uses the complement: P(at least one A) = 1 − P(A occurs on no trial) = 1 − P(Aᶜ)ⁿ for n independent trials',
        'P(exactly one of A or B) = P(A ∪ B) — FALSE: P(A ∪ B) includes the case where both A and B occur; exactly one of A or B is P(A only) + P(B only) = P(A ∪ B) − P(A ∩ B)',
        'For three independent events, P(all three occur) = P(A) + P(B) + P(C) — FALSE: for independent events, joint probabilities are found by MULTIPLICATION: P(A ∩ B ∩ C) = P(A) × P(B) × P(C); addition is used for unions, not intersections'
    ],
    'Independence and Dependence in Sequences': [
        'Replacement does not affect the probability of the second draw — FALSE: with replacement, the composition of the pool is restored and draws are independent; without replacement, one item is removed and the conditional probabilities of all remaining outcomes change for the second draw',
        'If two events are described together in one problem, they must be dependent — FALSE: events in the same problem can be independent; coin flips, dice rolls, and any sampling with replacement produces independent events even within the same experiment'
    ]
},

distributions: {
    'Expected Value Errors': [
        'The expected value of a random variable is always one of its possible values — FALSE: E(X) is a weighted average and need not be achievable; the expected number of heads in two coin flips is 1, which is a possible value, but the expected value of a die roll is 3.5, which is not a possible outcome',
        'A higher expected value always means a better decision — FALSE: expected value ignores variability (risk); two options with the same E(X) can have very different distributions of outcomes; the option with higher variance may be unsuitable for a risk-averse decision-maker even if E(X) is identical',
        'If E(X) = 0, the game is worthless to play — FALSE: E(X) = 0 defines a FAIR game — one with no systematic advantage or disadvantage in the long run; whether to play depends on the stakes, the player\'s risk tolerance, and whether the experience itself has value',
        'The expected value tells you what will happen in the next trial — FALSE: E(X) describes the long-run average over many trials; in a single trial, any outcome in the sample space can occur regardless of E(X)'
    ]
},



setNotationAndMembership: {
    'Empty Set Confusion': [
        '{∅} is the same as ∅ — FALSE: ∅ is the empty set with no elements and cardinality 0; {∅} is a set containing one element (the empty set itself) and has cardinality 1',
        '{} and ∅ are different notations for different objects — FALSE: {} and ∅ are two valid notations for exactly the same object, the unique empty set',
        'The empty set is not a subset of any non-empty set because it has no elements — FALSE: ∅ is a subset of every set, including every non-empty set; the subset condition is vacuously satisfied because ∅ has no elements that could fail to belong to another set'
    ],
    'Membership vs Subset Confusion': [
        '2 ⊆ {1, 2, 3} is correct notation — FALSE: 2 is an element, not a set, so the correct notation is 2 ∈ {1,2,3}; ⊆ relates two sets, not an element to a set',
        '{2} ∈ {1, 2, 3} is correct because 2 is in the set — FALSE: {2} is a set, not an element of {1,2,3}; {2} ⊆ {1,2,3} is correct; {2} ∈ {{1},{2},{3}} would be correct (if the set contained the set {2} as an element)',
        'A ⊆ B and A ∈ B mean the same thing — FALSE: A ⊆ B means every element of A is in B (set-to-set relationship); A ∈ B means A itself is an element of B (element-to-set relationship); both can be true simultaneously only in specific constructions such as power sets'
    ],
    'Set Equality and Repetition': [
        '{1, 1, 2, 3} is a set with four elements — FALSE: sets contain only distinct elements; {1,1,2,3} = {1,2,3}, a set with three elements; repetition in the listing is redundant but does not change the set',
        '{1, 2, 3} ≠ {3, 1, 2} because the order is different — FALSE: sets are unordered collections; {1,2,3} and {3,1,2} are identical sets because they contain exactly the same elements'
    ]
},

setOperations: {
    'Union Errors': [
        'A ∪ B includes every element of A and every element of B, so elements in both are listed twice — FALSE: A ∪ B is a set, and sets contain no duplicates; elements in both A and B appear exactly once in A ∪ B',
        '|A ∪ B| = |A| + |B| always — FALSE: this formula only holds when A and B are disjoint (A ∩ B = ∅); in general |A ∪ B| = |A| + |B| − |A ∩ B|, subtracting the overlap that would otherwise be counted twice',
        'A ∪ ∅ = ∅ because union with nothing gives nothing — FALSE: A ∪ ∅ = A; the empty set contributes no elements, so the union is just A unchanged — the identity law for union'
    ],
    'Intersection Errors': [
        'A ∩ B is everything in A plus everything in B — FALSE: that describes union; A ∩ B contains only elements that are simultaneously in BOTH A and B',
        'If |A| = 20 and |B| = 15 then |A ∩ B| ≤ 15 is not guaranteed — FALSE: |A ∩ B| ≤ min(|A|, |B|) = 15 is always guaranteed; the intersection cannot be larger than either set, because every element of A ∩ B must be in both A and in B',
        'A ∩ ∅ = A because A is unchanged — FALSE: A ∩ ∅ = ∅; no element can be in both A and the empty set simultaneously'
    ],
    'Complement and Difference Errors': [
        "A′ can be found without knowing U — FALSE: complement is always defined relative to the universal set; A′ = U \\ A, and without a specified U, the complement is undefined",
        'A \\ B = B \\ A — FALSE: set difference is not commutative; A \\ B removes from A anything in B; B \\ A removes from B anything in A — these produce different sets unless A = B',
        'A \\ B is the same as A ∩ B — FALSE: A \\ B = A ∩ B′ (elements in A but NOT in B); A ∩ B is elements in both A and B — these are disjoint from each other'
    ],
    'De Morgan\'s Laws Errors': [
        "(A ∪ B)′ = A′ ∪ B′ — FALSE: this violates De Morgan's First Law; the correct identity is (A ∪ B)′ = A′ ∩ B′ — the complement of a union is the intersection of the complements, not the union",
        'Distributing a complement means removing the bracket and adding primes to each set without changing the operation — FALSE: distributing a complement changes the operation (∪ becomes ∩, or ∩ becomes ∪) as well as adding primes; forgetting to change the operation is the most common De Morgan error'
    ]
},

vennDiagrams: {
    'Two-Set Venn Errors': [
        'The number |A| is placed in the left circle of the Venn diagram, representing only the elements in A — FALSE: the left circle represents all elements of A, including those in A ∩ B; the left region ONLY (A \\ B) should contain |A| − |A ∩ B|, not the full |A|',
        'If |A ∪ B| = |A| + |B|, then A and B must be disjoint — TRUE (this is correct): when A and B are disjoint, |A ∩ B| = 0 and the formula simplifies to |A ∪ B| = |A| + |B|; this implication is valid but students often apply the simplified formula to non-disjoint sets, which is the error',
        'The region outside both circles but inside U represents (A ∩ B)′ — FALSE: the region outside both circles represents (A ∪ B)′ — elements in neither A nor B; (A ∩ B)′ includes the outside region AND the A-only and B-only regions — it is everything except the overlap'
    ],
    'Three-Set Venn Errors': [
        'In a three-set Venn diagram, filling starts by placing |A| in the A circle, |B| in the B circle, and |C| in the C circle — FALSE: this approach double-counts (and triple-counts) the overlapping regions; always start with |A ∩ B ∩ C| in the centre and work outward, subtracting at each step',
        'The three-set inclusion-exclusion formula is |A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| — FALSE (incomplete): the correct formula also adds back |A ∩ B ∩ C|; omitting the final term gives an answer that is too small by |A ∩ B ∩ C|',
        'A Venn diagram with seven filled regions and a correct total guarantees correct individual region values — FALSE: it is possible for the seven region values to sum correctly to |A ∪ B ∪ C| while individual regions are wrong due to compensating errors; always verify each region against the given pairwise and triple intersection values'
    ]
},

setRelationships: {
    'Subset Errors': [
        'A ⊆ B and A ⊂ B mean the same thing — FALSE: A ⊆ B allows A = B; A ⊂ B requires A ≠ B (A must be strictly smaller); every proper subset is a subset, but not every subset is a proper subset',
        'If |A| = |B| then A = B — FALSE: two sets can have the same number of elements while containing completely different elements, e.g. {1,2,3} and {4,5,6} both have cardinality 3 but are not equal; equal cardinality is necessary but not sufficient for set equality',
        'A set A cannot be a subset of itself because a subset must be smaller — FALSE: by definition, A ⊆ A for every set A; the subset condition (every element of A is in A) is trivially satisfied; A ⊂ A (proper subset) is false, but A ⊆ A is always true'
    ],
    'Power Set Errors': [
        '∅ is not in the power set of A because the power set contains subsets and ∅ is not a real subset — FALSE: ∅ is a subset of every set, including A, so ∅ ∈ P(A) always; the power set contains all subsets, including the empty set and A itself',
        'The power set of A = {1,2,3} has 6 elements because there are C(3,2)=3 two-element subsets and C(3,1)=3 one-element subsets — FALSE: this counts only size-1 and size-2 subsets; the full power set also includes ∅ (size 0) and {1,2,3} (size 3), giving 1+3+3+1=8=2³ subsets in total',
        '|P(A)| = 2|A| (multiplying, not exponentiating) — FALSE: the formula is |P(A)| = 2^|A| (two to the power of |A|); for |A|=3, this gives 8 not 6; the exponential growth reflects the binary (include/exclude) decision made independently for each element'
    ]
},

cardinalityAndSpecialSets: {
    'Cardinality Errors': [
        'Cardinality counts how many times elements appear, including repetitions — FALSE: cardinality counts distinct elements only; {a,a,b,c} has cardinality 3, not 4',
        'The cardinality of an infinite set is ∞, and all infinite sets have the same cardinality — FALSE: Cantor proved that some infinite sets are strictly larger than others; ℕ and ℚ are countably infinite (same cardinality), but ℝ is uncountably infinite and strictly larger — there is no bijection from ℕ to ℝ',
        '|A ∩ B| can be larger than both |A| and |B| — FALSE: A ∩ B ⊆ A and A ∩ B ⊆ B, so |A ∩ B| ≤ |A| and |A ∩ B| ≤ |B|; the intersection cannot exceed either set in size'
    ],
    'Number Set Errors': [
        'Every integer is a natural number — FALSE: ℕ contains only positive integers (and sometimes 0 depending on convention); negative integers such as −1, −2 are in ℤ but not in ℕ; ℕ ⊂ ℤ (ℕ is a proper subset of ℤ)',
        'Every rational number is an integer — FALSE: integers are a proper subset of rationals (ℤ ⊂ ℚ); fractions like 1/2 and −3/4 are rational but not integers',
        'π is a rational number because it can be approximated by 22/7 — FALSE: 22/7 is a rational approximation of π, not π itself; π is irrational — it cannot be expressed as p/q for any integers p and q; π ∈ ℝ but π ∉ ℚ'
    ]
},



divisibilityAndFactors: {
    'Factor Listing Errors': [
        'Factors only come in small numbers — FALSE: every number n has itself and 1 as factors; for composite n, factors can be as large as n/2; systematic paired listing prevents missing large factors',
        'The only factors of a number are its prime factors — FALSE: factors include all divisors, not just prime ones; 12 has factors 1, 2, 3, 4, 6, 12 — only 2 and 3 are prime, but 4, 6, and 12 are also factors',
        'A number cannot be a factor of itself — FALSE: every positive integer n divides itself (n = 1 × n), so n is always a factor of n'
    ],
    'Divisibility Rule Misapplication': [
        'The divisibility rule for 4 checks only the last digit — FALSE: divisibility by 4 requires the LAST TWO digits to form a number divisible by 4; the last digit alone is insufficient (e.g. 14 ends in 4 but 14 ÷ 4 = 3.5)',
        'The divisibility rule for 6 only requires the number to be even — FALSE: divisibility by 6 requires the number to be divisible by BOTH 2 AND 3; being even is necessary but not sufficient (e.g. 14 is even but not divisible by 3, so not divisible by 6)',
        'The digit-sum rule for 3 and the digit-sum rule for 9 are the same test — FALSE: the digit sum must be divisible by 3 for divisibility by 3, and divisible by 9 for divisibility by 9; divisibility by 9 is a stricter condition (every multiple of 9 is a multiple of 3, but not every multiple of 3 is a multiple of 9)'
    ]
},

primesAndComposites: {
    'Prime Number Errors': [
        '1 is a prime number — FALSE: a prime has exactly two positive divisors; 1 has only one positive divisor (itself); 1 is neither prime nor composite and is excluded by definition to preserve the uniqueness of prime factorisations',
        '2 is not prime because it is even — FALSE: 2 is prime; it has exactly two positive divisors (1 and 2); 2 is the only even prime; all even numbers greater than 2 are composite because they are divisible by 2',
        'All odd numbers are prime — FALSE: odd composite numbers are common (9 = 3², 15 = 3×5, 21 = 3×7, 25 = 5², 35 = 5×7, ...); being odd is necessary but not sufficient for primality'
    ],
    'Primality Testing Errors': [
        'To test whether n is prime, you must check all numbers from 2 to n−1 — FALSE: you only need to check primes up to √n; any composite factor of n must have a co-factor smaller than √n, so the smaller factor will be detected first',
        'A number not divisible by 2, 3, or 5 must be prime — FALSE: this only holds for n ≤ 48; the first prime not covered by {2, 3, 5} is 7, and 7² = 49 is the first composite number that requires checking up to 7; for example, 91 = 7 × 13 is composite despite not being divisible by 2, 3, or 5',
        'The prime factorisation of a number is different depending on the order you divide — FALSE: the Fundamental Theorem of Arithmetic guarantees that the prime factorisation is unique regardless of the order factors are found; different factor trees always produce the same set of prime factors'
    ]
},

gcdAndLcm: {
    'GCD Method Errors': [
        'The GCD uses the HIGHER power of each shared prime factor — FALSE: the GCD uses the LOWER power of each shared prime; the GCD must divide both numbers, so it cannot contain any prime to a higher power than either number possesses',
        'The GCD of two numbers can be larger than either number — FALSE: the GCD is always less than or equal to the smaller of the two numbers (since it must divide the smaller number, it cannot exceed it)',
        'If two numbers share no common factors other than 1, their GCD is 0 — FALSE: if gcd(a, b) = 1, the numbers are coprime; the GCD is 1, not 0; gcd of any two positive integers is always at least 1'
    ],
    'LCM Method Errors': [
        'The LCM uses the LOWER power of each prime factor — FALSE: the LCM uses the HIGHER power of each prime factor appearing in either number; the LCM must be divisible by both numbers, so it must include each prime to at least the highest power it appears in either factorisation',
        'The LCM is always the product of the two numbers — FALSE: the LCM equals the product only when gcd(a, b) = 1 (i.e. when the numbers are coprime); otherwise lcm(a,b) = (a × b) / gcd(a, b), which is smaller than the product whenever gcd > 1',
        'The LCM must include only primes that appear in both factorisations — FALSE: the LCM must include every prime that appears in EITHER factorisation (not only shared ones); this is the key difference from the GCD, which only takes primes shared by both'
    ]
},

modularArithmetic: {
    'Congruence and Remainder Errors': [
        'The remainder in modular arithmetic can be negative — FALSE: by convention, the remainder a mod n always lies in the range [0, n−1]; when a is negative, the mathematical remainder is adjusted: e.g. (−13) mod 4 = 3, not −1, because −13 = (−4)×4 + 3',
        'a mod n gives a fraction if a is not divisible by n — FALSE: a mod n is always an integer — it is the remainder after integer division, which is always between 0 and n−1 inclusive; no fractions are involved',
        'If a ≡ b (mod n), then a = b — FALSE: a ≡ b (mod n) means a and b differ by a multiple of n, not that they are equal; e.g. 17 ≡ 3 (mod 7) because 17 − 3 = 14 = 2×7, but 17 ≠ 3'
    ],
    'Modular Arithmetic Operation Errors': [
        'You cannot multiply or add in modular arithmetic — FALSE: modular arithmetic is fully compatible with addition, subtraction, and multiplication; the key property is that you can reduce before or after the operation: (a × b) mod n = ((a mod n) × (b mod n)) mod n',
        'The last digit of a large power is always the same as the last digit of the base — FALSE: the last digit of powers cycles through a repeating pattern (e.g. 3¹ ends in 3, 3² in 9, 3³ in 7, 3⁴ in 1, then repeats); the base digit only recurs at specific positions in the cycle',
        'If a number is even, its powers are all divisible by every even number — FALSE: powers of 2 are divisible by powers of 2 only; for example, 2⁵ = 32 is divisible by 4 and 8 but not by 6 (since 32 ÷ 6 = 5 remainder 2); divisibility of a power depends on the prime factorisation of the base, not just its parity'
    ]
},

numberSets: {
    'Integer Classification Errors': [
        'Every number is either prime or composite — FALSE: the number 1 belongs to neither category; additionally, zero is an integer that is neither prime nor composite; the classification prime/composite applies only to positive integers greater than 1',
        'Negative numbers can be prime — FALSE: primality is defined only for positive integers greater than 1; negative integers, zero, and 1 are all excluded from the prime/composite classification by definition',
        'A composite number has exactly four factors — FALSE: composite numbers can have any number of factors greater than two; primes have exactly two factors (1 and themselves); composites have at least three factors but can have many more (e.g. 12 has six factors: 1, 2, 3, 4, 6, 12)'
    ],
    'Factor and Multiple Confusion': [
        'Factors and multiples are the same thing — FALSE: factors of n are numbers that divide n exactly (smaller than or equal to n); multiples of n are numbers that n divides exactly (greater than or equal to n); 3 is a factor of 12 but 12 is a multiple of 3 — the relationship is directional',
        'Every multiple of n is larger than n — FALSE: n itself is a multiple of n (n = 1 × n); multiples of n include n, 2n, 3n, ... so n is the smallest positive multiple of itself',
        'Two numbers that share a common factor must share all common factors — FALSE: 12 and 18 share common factors 1, 2, 3, and 6; 12 and 10 share common factors 1 and 2 only; the set of common factors depends on the specific pair and is exactly the set of factors of their GCD'
    ]
},

coordinateGeometryBasics: {
    'Distance Formula Errors': [
        'The distance from A(x₁,y₁) to B(x₂,y₂) is (x₂−x₁)+(y₂−y₁) — FALSE: the distance formula requires squaring the differences, adding, and taking the square root; simply adding differences gives the wrong result and can be negative',
        'The order of subtraction matters in the distance formula: d from A to B ≠ d from B to A — FALSE: since differences are squared, (x₂−x₁)² = (x₁−x₂)², so distance is always symmetric and non-negative',
        'The distance formula is the same as the gradient formula — FALSE: the distance formula adds squared differences under a root; the gradient formula divides one difference by the other; conflating the two is the single most common coordinate geometry error',
        'If two points have the same x-coordinate, the distance formula cannot be applied — FALSE: if x₁=x₂, then (x₂−x₁)²=0 and the distance reduces to |y₂−y₁|, which is correct for a vertical segment'
    ],
    'Midpoint Formula Errors': [
        'The midpoint is found by subtracting the coordinates: M = ((x₂−x₁)/2, (y₂−y₁)/2) — FALSE: the midpoint is found by ADDING and averaging: M = ((x₁+x₂)/2, (y₁+y₂)/2)',
        'The midpoint formula gives a distance, not a point — FALSE: the midpoint formula produces a coordinate pair (an ordered pair), not a scalar distance',
        'If one coordinate of an endpoint is negative, the midpoint formula cannot be applied — FALSE: the formula works for all real coordinates; simply substitute the negative value carefully into the formula'
    ]
},

distanceAndMidpoint: {
    'Perpendicular Bisector Errors': [
        'The perpendicular bisector of AB has the same gradient as AB — FALSE: the perpendicular bisector is perpendicular to AB, so its gradient is the negative reciprocal of the gradient of AB; using the same gradient gives a parallel line through the midpoint, not the perpendicular bisector',
        'The perpendicular bisector of AB passes through A or B — FALSE: the perpendicular bisector passes through the MIDPOINT of AB, not the endpoints; using an endpoint instead of the midpoint is a very common setup error',
        'Any line perpendicular to AB is its perpendicular bisector — FALSE: a perpendicular bisector must both be perpendicular to AB AND pass through its midpoint; a line can be perpendicular to AB without passing through the midpoint'
    ],
    'Endpoint from Midpoint Errors': [
        'To find the missing endpoint B given midpoint M and endpoint A, subtract A from M: B = M − A — FALSE: the correct procedure is B = 2M − A (multiply the midpoint coordinates by 2 and subtract A), derived from rearranging the midpoint formula',
        'The midpoint of a segment must have integer coordinates — FALSE: if the endpoints have coordinates of mixed parity (one odd, one even in each pair), the midpoint will have fractional coordinates'
    ]
},

linesAndGradients: {
    'Gradient and Line Equation Errors': [
        'The gradient of a line from A to B depends on which point is labelled first — FALSE: gradient is symmetric: (y₂−y₁)/(x₂−x₁) = (y₁−y₂)/(x₁−x₂); either point can be labelled (x₁,y₁) and the result is the same',
        'In the point-slope form y−y₁=m(x−x₁), you substitute the y-intercept for y₁ — FALSE: (x₁,y₁) is any known point on the line, not necessarily the y-intercept; the y-intercept is the specific point where x₁=0',
        'A line with gradient 0 has no equation — FALSE: a line with gradient 0 is horizontal and has equation y = c where c is the y-coordinate of every point on the line',
        'Two lines with different equations must intersect — FALSE: parallel lines have different equations (different y-intercepts) but never intersect; only lines with different gradients are guaranteed to intersect'
    ],
    'Perpendicular Gradient Errors': [
        'The perpendicular to a line with gradient m has gradient −m — FALSE: the perpendicular gradient is −1/m (negative reciprocal), not simply the negative of m; only when m=1 or m=−1 are these the same',
        'If a line has gradient 0 (horizontal), there is no perpendicular — FALSE: the perpendicular to a horizontal line is a vertical line with undefined gradient (equation x = constant); the perpendicular always exists',
        'The product of perpendicular gradients is 1 — FALSE: the product of perpendicular gradients is −1; confusing this sign is a very common examination error'
    ]
},

circlesOnPlane: {
    'Circle Equation Sign Errors': [
        'The circle (x−3)²+(y+2)²=25 has centre (−3,2) — FALSE: the centre is (3,−2); the centre coordinates are opposite in sign to the values that appear inside the brackets when the equation is written as (x−a)²+(y−b)²=r²',
        'The circle (x+4)²+(y−1)²=9 has centre (4,1) — FALSE: rewrite as (x−(−4))²+(y−1)²=9, giving centre (−4,1); the x-coordinate of the centre is −4 (opposite to the +4 visible in the equation)',
        'The radius of (x−2)²+(y+3)²=16 is 16 — FALSE: r²=16 so r=4; the radius is the square root of the right-hand side, not the right-hand side itself'
    ],
    'Completing the Square Errors': [
        'When completing the square to find the circle centre, you only need to complete the square for x — FALSE: you must complete the square separately for both the x-terms and the y-terms; omitting one variable gives the wrong centre and radius',
        'After completing the square, the right-hand side stays unchanged — FALSE: constants added to complete the square on the left must be added to the right-hand side to maintain equality; forgetting to adjust the RHS is the most common completing-the-square error',
        'Completing the square for y²+6y gives (y+3)²+9 — FALSE: completing the square gives (y+3)²−9 (subtract 9, not add 9); the constant to be moved to the right is −9, not +9; this sign error corrupts the radius calculation'
    ],
    'Tangent Errors': [
        'The tangent to a circle at a point has the same gradient as the radius to that point — FALSE: the tangent is perpendicular to the radius, so the tangent gradient is the negative reciprocal of the radius gradient; using the same gradient gives the radius line, not the tangent',
        'A tangent to a circle touches it at two closely spaced points — FALSE: a tangent touches the circle at exactly one point; the discriminant of the line-circle quadratic equals zero at a tangent, confirming a repeated (not two distinct) root',
        'The tangent condition (discriminant = 0) applies only to circles — FALSE: discriminant = 0 means a line touches a curve at exactly one point for any conic section, including parabolas and ellipses'
    ]
},

geometricProofs: {
    'Coordinate Proof Strategy Errors': [
        'In a coordinate proof, you should place one vertex at (1,1) to avoid confusion with the origin — FALSE: placing a vertex at the origin (0,0) simplifies every distance and gradient calculation involving that vertex, since one term disappears; the origin is always the optimal starting point',
        'A coordinate proof only works for specific numerical cases — FALSE: coordinate proofs use general variable coordinates (e.g. A(0,0), B(a,0), C(b,c)) to represent all possible cases of the geometric figure; the result holds for all valid values of the variables',
        'If a coordinate proof produces the same numerical answer for two quantities, those quantities are equal in general — FALSE: in a general coordinate proof, variable expressions (not specific numbers) must be shown to be identical; a specific numerical example only verifies one case, not the general theorem'
    ]
},




matrixBasics: {
    'Order and Indexing Errors': [
        'The order of a matrix is stated as columns × rows — FALSE: the convention is always rows × columns; a matrix with 3 rows and 2 columns is a 3×2 matrix, never a 2×3',
        'The element aᵢⱼ is in column i and row j — FALSE: the row index i always precedes the column index j; aᵢⱼ is in row i, column j',
        'A 2×3 matrix and a 3×2 matrix are the same thing — FALSE: they have different structures (different numbers of rows and columns); they cannot be added or equated, and they produce products of different orders',
        'A square matrix must have all equal entries — FALSE: a square matrix simply has equal numbers of rows and columns (m = n); the entries can be anything'
    ],
    'Notation Errors': [
        'The identity matrix has 1s everywhere — FALSE: the identity matrix I has 1s only on the main diagonal and 0s everywhere else; a matrix of all 1s is not the identity',
        'The zero matrix and the number zero are interchangeable in matrix equations — FALSE: the zero matrix O has a specific order; writing O where a scalar 0 is needed (or vice versa) is a type error',
        'The transpose Aᵀ is the inverse of A — FALSE: the transpose and inverse are different operations; the transpose swaps rows and columns, the inverse satisfies AA⁻¹ = I; they are equal only for orthogonal matrices'
    ]
},

matrixOperations: {
    'Addition and Scalar Multiplication Errors': [
        'Matrices of different orders can be added if you pad the smaller one with zeros — FALSE: matrix addition is defined only for matrices of identical order; there is no standard padding operation for addition',
        'Scalar multiplication changes the order of a matrix — FALSE: multiplying by a scalar k multiplies every element by k but leaves the order (m×n) unchanged',
        'A − B equals B − A for matrices — FALSE: matrix subtraction is not commutative; A − B = −(B − A), not B − A'
    ],
    'Matrix Multiplication Errors': [
        'Matrix multiplication is performed element-by-element like addition — FALSE: matrix multiplication uses the row-by-column dot product rule; element (AB)ᵢⱼ is the dot product of row i of A with column j of B, not the product of individual corresponding elements',
        'AB = BA for any two matrices — FALSE: matrix multiplication is not commutative in general; for most pairs of matrices, AB ≠ BA, and the two products may not even both be defined',
        'If AB = AC then B = C — FALSE: the cancellation law does not hold for matrices; AB = AC implies B = C only if A is invertible (det(A) ≠ 0)',
        'If AB = O then A = O or B = O — FALSE: the zero-product property does not hold for matrices; two non-zero matrices can multiply to give the zero matrix',
        'A 2×3 matrix can be multiplied by a 2×4 matrix — FALSE: the number of columns of the first matrix (3) must equal the number of rows of the second matrix (2); since 3 ≠ 2, this product is undefined',
        'The product of two n×n matrices has order 2n×2n — FALSE: the product of two n×n matrices is always n×n; the inner dimensions cancel and the outer dimensions give the order of the result'
    ]
},

determinantsAndInverses: {
    'Determinant Errors': [
        'The determinant of [[a,b],[c,d]] is ad + bc — FALSE: the determinant is ad − bc (main diagonal product MINUS off-diagonal product); the subtraction is the source of the most common determinant errors',
        'The determinant of a non-square matrix can be computed using the same formula — FALSE: the determinant is defined only for square matrices; asking for the determinant of a 2×3 matrix is undefined',
        'det(A + B) = det(A) + det(B) — FALSE: determinants do not distribute over addition; the correct product rule is det(AB) = det(A)·det(B), which applies to multiplication, not addition',
        'det(kA) = k·det(A) for an n×n matrix — FALSE: det(kA) = kⁿ·det(A) where n is the matrix dimension; for a 2×2 matrix, det(2A) = 4·det(A), not 2·det(A)'
    ],
    'Inverse Errors': [
        'Every matrix has an inverse — FALSE: only square matrices with non-zero determinant have inverses; singular matrices (det = 0) have no inverse',
        'The inverse of [[a,b],[c,d]] is [[1/a, 1/b],[1/c, 1/d]] (reciprocal of each element) — FALSE: the inverse formula requires swapping the diagonal elements, negating the off-diagonal elements, and dividing the whole matrix by det(A); element-wise reciprocals give an entirely different matrix',
        'In the 2×2 inverse formula, the diagonal elements are negated and the off-diagonal elements are swapped — FALSE: it is the DIAGONAL elements that are SWAPPED (a↔d) and the OFF-DIAGONAL elements that are NEGATED (b→−b, c→−c); confusing which operation applies to which position is the most common inverse error',
        'A singular matrix means the system has no solution — FALSE: a singular coefficient matrix means there is no unique solution; there may be no solution (inconsistent system) or infinitely many solutions (dependent system); only examining the original equations determines which case applies'
    ]
},

matrixEquations: {
    'Solution Order Errors': [
        'The solution to AX = B is X = BA⁻¹ — FALSE: the correct solution is X = A⁻¹B; pre-multiplying both sides by A⁻¹ on the LEFT gives A⁻¹AX = A⁻¹B → IX = A⁻¹B → X = A⁻¹B; writing BA⁻¹ instead violates the order-dependence of matrix multiplication',
        'In AX = B, you can "divide both sides by A" as you would a scalar equation — FALSE: matrices cannot be divided; the correct operation is multiplication by the inverse on the appropriate side (left-multiplication by A⁻¹)',
        'The system AX = B can be solved by computing det(A)/det(B) — FALSE: this is not a defined operation; the solution requires computing A⁻¹ and then the product A⁻¹B'
    ],
    'Interpretation Errors': [
        'If the matrix method produces a unique solution, the lines must be perpendicular — FALSE: a unique solution (det(A) ≠ 0) means the lines intersect at exactly one point; they can intersect at any angle — perpendicularity is a special case, not a requirement',
        'A system with det(A) = 0 always has no solution — FALSE: det(A) = 0 means no unique solution exists, but the system may have infinitely many solutions (dependent lines) or no solution at all (parallel lines); the distinction requires examining the equations directly',
        'Once x is found in a matrix solution, the system is fully solved — FALSE: the solution vector X contains all unknowns simultaneously; both components must be extracted, expressed as an ordered pair, and verified in both original equations'
    ]
},

transformations: {
    'Transformation Order Errors': [
        'Applying transformation A then transformation B is represented by the matrix AB — FALSE: if B is applied first and then A, the combined matrix is AB (the first transformation to be applied appears on the RIGHT of the product); applying A first then B would be BA; this reversal of order confuses most students initially',
        'The matrix for a rotation by 90° anticlockwise is [[1,0],[0,−1]] — FALSE: [[1,0],[0,−1]] is the reflection in the x-axis; the 90° anticlockwise rotation matrix is [[0,−1],[1,0]]',
        'Rotation matrices change the distances of points from the origin — FALSE: rotation preserves all distances from the origin; this is reflected in the fact that all rotation matrices have det = 1 (area scale factor = 1) and their inverses equal their transposes (orthogonal matrices)'
    ],
    'Determinant-Transformation Connection Errors': [
        'A matrix with a large determinant produces a large rotation — FALSE: the determinant measures area scaling, not angle of rotation; a rotation matrix always has det = 1 regardless of the angle; a matrix with a large determinant performs large scaling, not large rotation',
        'A negative determinant means the transformation has no geometric interpretation — FALSE: a negative determinant means orientation is reversed (like a reflection); the absolute value of the determinant still gives the area scale factor correctly',
        'If det(A) = 0, the transformation simply produces the zero matrix — FALSE: a matrix with det = 0 collapses the plane onto a lower-dimensional space (a line or a point), mapping every point in the plane to a point on that line; the zero matrix is only one specific case of a singular transformation'
    ]
},



vectorBasics: {
    'Scalar vs Vector Confusion': [
        'Speed and velocity are the same thing — FALSE: speed is a scalar (magnitude only); velocity is a vector (magnitude and direction); a car travelling at 60 km/h has a speed of 60 km/h but its velocity is 60 km/h due north (or whatever direction it is travelling)',
        'The magnitude of a vector is the same as the vector — FALSE: the magnitude |a| is a positive scalar (a single number); the vector a is a directed object with components; |a| = 5 and a = (3, 4) are different types of object',
        'A vector with a negative component is a negative vector — FALSE: a vector can have negative components simply because it points in a negative coordinate direction; the vector (−3, 4) is a perfectly valid vector with magnitude 5, not a negative quantity',
        'The zero vector is the same as the scalar 0 — FALSE: the zero vector 0 = (0, 0) is a vector with magnitude 0 and no defined direction; the scalar 0 is a number; they are different mathematical objects even though both use the symbol 0'
    ],
    'Magnitude Errors': [
        'The magnitude of (a, b) is a + b — FALSE: magnitude is √(a² + b²); adding components does not give the length of the vector except in the special case where both components are zero',
        'The magnitude of (a, b, c) is √(a² + b²), forgetting the third component — FALSE: in 3D, all three components must be squared and summed: |a| = √(a₁² + a₂² + a₃²)',
        'A unit vector has components (1, 1) or (1, 0, 0, ...) — FALSE: a unit vector has magnitude 1, meaning √(a₁² + a₂²...) = 1; (1, 1) has magnitude √2 ≠ 1 and is not a unit vector; only i = (1, 0), j = (0, 1), k = (0, 0, 1) are standard unit vectors'
    ]
},

vectorOperations: {
    'Addition and Subtraction Errors': [
        'Vector addition gives the longer of the two vectors — FALSE: the resultant of two vectors can be longer or shorter than either individual vector depending on the angle between them; two antiparallel vectors of equal magnitude add to give the zero vector',
        'AB⃗ = a − b (position vector of A minus position vector of B) — FALSE: the vector FROM A TO B is AB⃗ = b − a (destination minus departure); a − b gives the vector from B to A, which is the reverse direction',
        'You can only add vectors that are in the same direction — FALSE: vectors in any direction can be added using the triangle law or by adding corresponding components; the restriction is that vectors must be in the same vector space (same dimension)',
        'Subtracting a vector and adding its negative are different operations — FALSE: a − b = a + (−b); subtracting b is identical to adding the vector −b (same magnitude as b, opposite direction)'
    ],
    'Scalar Multiplication Errors': [
        'Multiplying a vector by a negative scalar gives the zero vector — FALSE: multiplying by a negative scalar reverses the direction and scales the magnitude; −2a has magnitude 2|a| pointing in the opposite direction to a; only multiplying by scalar 0 gives the zero vector',
        'The magnitude of ka equals k × |a| for all scalars k — FALSE: the magnitude of ka equals |k| × |a| (the absolute value of k times the magnitude); if k = −3, then |ka| = 3|a|, not −3|a| (magnitude is always non-negative)'
    ]
},

dotProduct: {
    'Output Type Errors': [
        'The dot product of two vectors is a vector — FALSE: the dot product a · b = a₁b₁ + a₂b₂ is always a scalar (a single number); there is no direction associated with it; this is why it is also called the scalar product',
        'The dot product of two vectors gives a vector in the direction perpendicular to both — FALSE: that describes the cross product (defined in 3D only); the dot product gives a scalar; confusing these two products is one of the most common errors in advanced vector work'
    ],
    'Perpendicularity and Parallelism Confusion': [
        'If the dot product is zero, the vectors are parallel — FALSE: a · b = 0 means the vectors are PERPENDICULAR (at 90°); parallel vectors have the MAXIMUM dot product (|a||b| if same direction, −|a||b| if opposite)',
        'If the dot product is non-zero, the vectors are not perpendicular — TRUE but incomplete: a non-zero dot product means the angle is not 90°; the vectors could still be nearly perpendicular (small dot product) or nearly parallel (large dot product close to |a||b|)',
        'To test for parallel vectors, compute the dot product and check if it equals |a||b| — IMPRECISE and error-prone: the reliable test for parallel vectors is to check if a = kb for some scalar k (i.e. whether the ratios of corresponding components are equal); using the dot product requires also knowing both magnitudes, introducing additional calculation and potential error'
    ],
    'Angle Formula Errors': [
        'The angle between two vectors is always acute — FALSE: the dot product can be negative, giving cosθ < 0 and therefore θ obtuse (between 90° and 180°); the angle between two vectors is always between 0° and 180° inclusive and can be any value in that range',
        'θ = arccos(a · b) — FALSE: the correct formula is θ = arccos(a · b / (|a||b|)); omitting the division by the product of magnitudes gives a completely wrong answer unless both vectors happen to be unit vectors',
        'The dot product formula gives the angle between the tails of the vectors — TRUE only if both vectors are drawn from the same point; if the vectors are drawn head-to-tail (as in the triangle law of addition), the angle between them must be interpreted carefully relative to their actual directions'
    ]
},

vectorMagnitudeDirection: {
    'Unit Vector Errors': [
        'The unit vector of a is a / |a|² — FALSE: the unit vector is a / |a| (divide by magnitude, not magnitude squared); dividing by |a|² gives a vector with magnitude 1/|a|, not 1',
        'The unit vector in the direction of (3, 4) is (3/5, 4/5) but its magnitude is 3/5 + 4/5 = 7/5 — FALSE: the magnitude of a unit vector is always 1; the magnitude of (3/5, 4/5) is √((3/5)² + (4/5)²) = √(9/25 + 16/25) = √(25/25) = 1',
        'There is only one unit vector for each direction — TRUE: for a given non-zero direction, there is exactly one unit vector in that direction (and one in the opposite direction); the unit vector â is unique for a given a'
    ],
    'Direction Errors': [
        'A vector with a larger magnitude points more in the positive x-direction — FALSE: magnitude and direction are independent; a vector (0.1, 0) points in the positive x-direction and has small magnitude; a vector (0, 1000) has large magnitude but no x-component whatsoever',
        'Two vectors with the same magnitude must be equal — FALSE: vectors with the same magnitude can point in any direction; they are equal only if they have both the same magnitude AND the same direction (equivalently, identical components)'
    ]
},

vectorApplications: {
    'Resultant Force Errors': [
        'The resultant force is always in the direction of the larger force — FALSE: the resultant is the vector sum and depends on the directions of all forces; two equal forces at right angles produce a resultant at 45° to each, regardless of which force is considered larger',
        'If an object is in equilibrium, the forces are all zero — FALSE: equilibrium means the VECTOR SUM of all forces is zero (the resultant is the zero vector); individual forces are non-zero and balance each other; this is the principle of the balanced scale'
    ],
    'Relative Velocity Errors': [
        'The actual speed of a boat in a current is the boat speed minus the current speed — FALSE: speeds cannot simply be subtracted because they are magnitudes of vectors; the actual velocity is the VECTOR SUM of boat velocity and current velocity; the actual speed is the magnitude of this vector sum',
        'If a boat points north and the current flows east, the boat travels northeast — APPROXIMATELY TRUE in direction but the exact angle depends on the ratio of speeds; arctan(current speed / boat speed) gives the angle east of north, not necessarily 45°',
        'To cross a river directly, the boat should point perpendicular to the bank — FALSE: pointing perpendicular to the bank (directly across) results in drift downstream; to cross directly (with no drift), the boat must point upstream at angle arcsin(current speed / boat speed) to the bank'
    ],
    'Work Done Errors': [
        'The work done by a force is always force times distance — TRUE only when the force is parallel to the displacement; in general W = F · d = |F||d|cosθ; if the force is at an angle, only the component of force in the direction of motion does work',
        'A perpendicular force does negative work — FALSE: a force perpendicular to displacement does ZERO work (cos90° = 0), not negative work; negative work occurs when the force has a component opposing the motion (obtuse angle between F and d)',
        'If the dot product W = F · d is negative, the calculation must be wrong — FALSE: negative work is physically meaningful; it means the force has a component opposing the direction of motion, removing energy from the system (e.g. friction, braking forces)'
    ]
},

inequalityFundamentals: {
    'Symbol and Notation Errors': [
        'An open circle on the number line means the value is included in the solution — FALSE: an open circle indicates the boundary value is EXCLUDED; a closed (filled) circle indicates inclusion',
        'x > 3 and x ≥ 3 have the same solution set — FALSE: x > 3 excludes 3 (open circle); x ≥ 3 includes 3 (closed circle); the boundary value 3 itself is in one solution set but not the other',
        'Interval notation [3, ∞) means the same as (3, ∞) — FALSE: the bracket [ includes 3 (corresponds to ≥); the parenthesis ( excludes 3 (corresponds to >); the choice between them changes whether the boundary is a solution',
        '∞ can be included in an interval using a bracket: [3, ∞] — FALSE: infinity is not a number and cannot be reached or included; it always takes a parenthesis, never a bracket: [3, ∞) is correct; [3, ∞] is undefined'
    ],
    'Solution Set Misconceptions': [
        'The solution to a linear inequality is a single value, like the solution to an equation — FALSE: the solution to a linear inequality is an infinite set of values forming a ray or interval; an equation gives a point, an inequality gives a region',
        'You can check an inequality solution by substituting only the boundary value — FALSE: substituting the boundary value checks whether the boundary is included or excluded but does not verify the direction of shading; you must substitute a value strictly inside the claimed solution set',
        'A linear inequality always has solutions — FALSE: this is true for simple linear inequalities but false for absolute value inequalities (|f(x)| < k with k < 0 has no solution) and for and compound inequalities with contradictory conditions (x > 5 AND x < 2)'
    ]
},

linearInequalities: {
    'Sign-Reversal Errors': [
        'The inequality sign reverses when you subtract a number from both sides — FALSE: the sign reverses ONLY when you multiply or divide both sides by a NEGATIVE number; subtraction (of any number, positive or negative) never reverses the sign',
        'The inequality sign reverses when you move a term to the other side — FALSE: moving a term (applying the inverse operation to both sides) does not trigger reversal; the reversal applies only to multiplication or division by a negative',
        'Dividing by a negative coefficient only reverses the sign if the coefficient is on the left side — FALSE: the sign-reversal rule applies whenever either side is multiplied or divided by any negative number, regardless of position',
        'You only need to reverse the inequality when the variable has a negative coefficient from the start — FALSE: a negative coefficient can emerge mid-solution after expanding brackets or collecting terms; you must check the sign of the coefficient at the moment of division, not at the start of the problem',
        'The inequality sign reverses twice if you apply two negative operations, and so the final sign is the same as the original — TRUE in principle but dangerous in practice: two reversals do cancel, but this reasoning is error-prone; it is safer to reverse at each step independently and track the sign throughout'
    ],
    'Solving Process Errors': [
        'When solving an inequality, you only need to apply operations to the variable side — FALSE: the same operation must be applied to BOTH sides simultaneously; applying an operation to only one side destroys the inequality relationship',
        'After solving a linear inequality, you should always express x on the left side — PARTIALLY FALSE: the mathematical content is identical whether written x > 3 or 3 < x, but convention places x on the left; more importantly, students sometimes flip the direction of x without flipping the sign, giving an error',
        'The solution to a linear inequality with a fraction can be expressed as x < 3/2 or x < 1.5 but not both — FALSE: these are identical; inequality solutions can be expressed as fractions, decimals, or mixed numbers as appropriate to context'
    ]
},

compoundInequalities: {
    'AND vs OR Confusion': [
        'An "and" compound inequality always has a larger solution set than an "or" inequality — FALSE: "and" (intersection) produces the smaller or equal solution set; "or" (union) produces the larger or equal solution set; intersection can only reduce a set, union can only expand it',
        'If x > 5 AND x > 2, the solution is x > 2 because 2 is the smaller value — FALSE: the "and" condition requires BOTH to be satisfied simultaneously; values of x must satisfy x > 5 AND x > 2, meaning only x > 5 works (values between 2 and 5 satisfy x > 2 but not x > 5)',
        'If x > 5 OR x > 2, the solution is x > 5 because 5 is the larger value — FALSE: the "or" condition requires at least one to be satisfied; any value greater than 2 satisfies at least the second condition, so the solution is x > 2',
        '"And" compound inequalities always have solutions — FALSE: x > 5 AND x < 2 has no solution because no number can simultaneously be greater than 5 and less than 2; the solution set is empty (∅)',
        '"Or" compound inequalities always produce two separate rays on the number line — FALSE: if the two conditions overlap or are adjacent, the union covers a larger contiguous region or even all real numbers; e.g. x < 5 OR x > 2 covers all real numbers since every number is either less than 5 or greater than 2 (or both)'
    ],
    'Double Inequality Errors': [
        'In a double inequality a < 2x + 3 < b, you only apply operations to the middle and one end — FALSE: all operations must be applied to ALL THREE sections simultaneously; applying to only two of the three sections destroys the compound inequality',
        'A double inequality can be split into two separate inequalities and solved completely independently — PARTIALLY TRUE but RISKY: splitting and solving separately is valid, but students who do this often forget to recombine the results into an intersection and shade the wrong region',
        'The double inequality a < f(x) < b can only be solved if the coefficient of x in f(x) is positive — FALSE: if the coefficient is negative and you divide all three sections by it, you must reverse BOTH inequality signs; the result becomes b/coefficient > x > a/coefficient which can be rewritten correctly'
    ]
},

absoluteValueInequalities: {
    'Rule Application Errors': [
        'Both |f(x)| < k and |f(x)| > k produce a bounded interval −k < f(x) < k — FALSE: only the LESS-THAN case produces a bounded interval; the GREATER-THAN case produces two outward rays: f(x) < −k OR f(x) > k',
        'The absolute value rule |f(x)| < k gives f(x) < k only (one branch) — FALSE: the less-than rule produces two branches simultaneously forming a double inequality: −k < f(x) < k; taking only the positive branch misses half the constraint',
        'You can begin solving an absolute value inequality without first isolating the absolute value expression — FALSE: the case-split rules apply only when the absolute value is isolated on one side; expressions like |2x + 1| − 3 < 4 must have the 3 added first to give |2x + 1| < 7 before splitting',
        'For |f(x)| > k, the solution f(x) < −k OR f(x) > k can be written as a single double inequality −k > f(x) > k — FALSE: this notation is mathematically meaningless (it requires f(x) to be simultaneously less than −k and greater than k); the "or" structure cannot be compressed into a single double inequality'
    ],
    'Special Case Errors': [
        'If the right-hand side of an absolute value inequality is negative, you still apply the standard rules and solve — FALSE: when k < 0, the result is immediate without any algebra: |f(x)| < k has NO SOLUTION (absolute value can never be negative); |f(x)| > k is ALL REAL NUMBERS (absolute value always exceeds any negative number)',
        'If the right-hand side is zero, |f(x)| < 0 has one solution (f(x) = 0) — FALSE: |f(x)| < 0 has NO SOLUTION since absolute value is always ≥ 0 and can never be strictly less than 0; |f(x)| = 0 has exactly one solution (f(x) = 0); |f(x)| > 0 has all real numbers except where f(x) = 0',
        'Absolute value expressions can be negative for some values of x — FALSE: the absolute value of any real expression is always greater than or equal to zero by definition; |f(x)| ≥ 0 for all real x regardless of what f(x) is'
    ]
},

inequalitiesInContext: {
    'Modelling Translation Errors': [
        '"At least 5" translates to x > 5 — FALSE: "at least 5" means 5 or more → x ≥ 5 (non-strict, includes 5); "more than 5" translates to x > 5 (strict, excludes 5); these are different constraints and the boundary value matters in context',
        '"No more than 10" translates to x > 10 — FALSE: "no more than" means the value must not exceed 10 → x ≤ 10; the phrase "no more" signals a maximum constraint, not a minimum',
        '"The temperature exceeds 20°C" is the same as "the temperature is at least 20°C" — FALSE: "exceeds" is a strict inequality (T > 20, excluding exactly 20°C); "at least" is non-strict (T ≥ 20, including exactly 20°C); for physical safety constraints, this distinction can matter',
        'In applied problems, non-integer solutions should always be rounded to the nearest integer — FALSE: the direction of rounding depends on context; for a minimum (e.g. must sell at least 21.3 items), round UP to 22; for a maximum (e.g. weight must not exceed 14.7 kg), the maximum integer value satisfying the inequality is 14, so round DOWN; always round in the direction that keeps the constraint satisfied'
    ],
    'Two-Variable Inequality Errors': [
        'The solution region of y > 2x − 3 is always above the line y = 2x − 3 — FALSE: whether to shade above or below depends entirely on which region satisfies the inequality; always test the origin (or another off-line point) to determine the correct region; for some inequalities (e.g. y < 2x − 3), the solution is BELOW the line',
        'The boundary line of a two-variable inequality is always dashed — FALSE: the boundary is dashed only for STRICT inequalities (< or >); for non-strict inequalities (≤ or ≥), the boundary line is SOLID because points on the line are part of the solution',
        'You can test the point (0, 0) to determine which half-plane to shade for any two-variable inequality — MOSTLY TRUE but with a critical exception: if the boundary line passes through the origin, (0, 0) lies ON the line and cannot be used as a test point; in this case, choose any other point clearly on one side of the line'
    ]
},


likeTerm: {
            'Like Term Identification Errors': [
                '3x and 3x² are like terms because they have the same coefficient and the same letter — FALSE: like terms must share identical variable parts including powers; 3x has variable part x and 3x² has variable part x² — these are different quantities entirely',
                '5ab and 5ba are unlike terms because the letters appear in a different order — FALSE: multiplication is commutative so ab = ba; 5ab and 5ba are identical terms and can be combined to give 10ab',
                'You can add any two terms together as long as they contain the same letter somewhere — FALSE: 4x²y and 3xy² both contain x and y but their variable parts (x²y vs xy²) are different; they cannot be combined',
                'A constant (number with no variable) and a variable term are like terms — FALSE: the constant 7 and the term 7x are completely different; 7 has no variable part and 7x has variable part x'
            ],
            'Collecting Errors': [
                'When collecting like terms, the powers also add: 3x² + 2x² = 5x⁴ — FALSE: only the coefficients add; the variable part stays unchanged: 3x² + 2x² = 5x²',
                'You can combine unlike terms by writing them next to each other without a sign: 3x + 2y = 5xy — FALSE: 3x and 2y are unlike terms; their sum is written as 3x + 2y and cannot be further simplified',
                'Collecting like terms changes the value of the expression — FALSE: collecting like terms rewrites the expression in an equivalent form; substituting any value of the variable gives identical results before and after collection'
            ]
        },

        expandingBrackets: {
            'Distributive Law Errors': [
                'Only the first term inside the bracket is multiplied by the outside factor: 3(x + 4) = 3x + 4 — FALSE: the distributive law requires every term inside the bracket to be multiplied: 3(x + 4) = 3x + 12',
                'A negative sign before a bracket only applies to the first term: −(2x − 5) = −2x − 5 — FALSE: the negative sign negates every term inside: −(2x − 5) = −2x + 5',
                'A negative factor outside does not change the signs inside if the terms are already negative: −2(−3x + 4) = −6x + 4 — FALSE: −2 × (−3x) = +6x and −2 × 4 = −8, giving 6x − 8'
            ],
            'Double Bracket and Special Product Errors': [
                '(a + b)² = a² + b² — FALSE: squaring a binomial always produces a middle term; (a + b)² = a² + 2ab + b². Numerical proof: (3 + 4)² = 49 but 3² + 4² = 25 ≠ 49',
                '(a − b)² = a² − b² — FALSE: (a − b)² = a² − 2ab + b²; the result that equals a² − b² is the PRODUCT (a + b)(a − b), not the square of a difference',
                'In (a + b)(a − b), there are four distinct terms in the expansion — FALSE: the outer and inner products are +ab and −ab, which cancel exactly; the result is only two terms: a² − b²',
                'FOIL produces three terms for (x + 3)(x + 5): x², 3x + 5x, and 15 — FALSE: FOIL produces exactly four products (First, Outer, Inner, Last); the two middle terms (3x and 5x here) are separate products that happen to be like terms and can subsequently be collected'
            ]
        },

        indexLaws: {
            'Multiplication and Power Law Confusion': [
                'x² × x³ = x⁶ — FALSE: when multiplying powers of the same base, add the indices; x² × x³ = x²⁺³ = x⁵. The error is multiplying the indices instead of adding them',
                '(x²)³ = x⁵ — FALSE: when raising a power to a power, multiply the indices; (x²)³ = x²×³ = x⁶. The error is adding the indices instead of multiplying them',
                '2³ × 3⁴ = 6⁷ — FALSE: index laws for multiplication apply only when the bases are identical; 2³ × 3⁴ has different bases (2 and 3) and must be evaluated directly: 8 × 81 = 648'
            ],
            'Zero and Negative Index Errors': [
                'a⁰ = 0 — FALSE: any non-zero base raised to the power zero equals 1; a⁰ = 1 because aⁿ ÷ aⁿ = 1 by the division law and equals a⁰ by the index subtraction rule',
                'x⁻² = −x² — FALSE: a negative index means the reciprocal, not a negative value; x⁻² = 1/x². Negative index indicates position (in the denominator), not sign',
                '3x⁻² means (3x)⁻² — FALSE: the negative index applies only to x unless brackets indicate otherwise; 3x⁻² = 3 × x⁻² = 3/x²; (3x)⁻² = 1/(3x)² = 1/(9x²)'
            ],
            'Fractional Index Errors': [
                '8^(2/3) means 8² ÷ 3 — FALSE: a fractional index a^(m/n) means the nth root of a, raised to the power m; 8^(2/3) = (∛8)² = 2² = 4. The fraction is an exponent, not a division instruction',
                'Always apply the power before the root to evaluate a^(m/n) — INADVISABLE (not strictly false but impractical): applying the root first keeps numbers manageable; 64^(5/6) via root first: ⁶√64 = 2, then 2⁵ = 32. Via power first: 64⁵ = 1073741824, then take the 6th root — same answer but vastly harder arithmetic'
            ]
        },

        fractionSimplification: {
            'Term vs Factor Cancellation': [
                '(x + 5)/(x + 9) simplifies to 5/9 by cancelling the x — FALSE: x is a term (connected by addition), not a factor (connected by multiplication); only common factors can be cancelled; this fraction cannot be simplified at all',
                '(2x + 8)/(2x + 6) simplifies to 8/6 = 4/3 by cancelling the 2x — FALSE: 2x is a term in both numerator and denominator, not a common factor; the correct approach is to factorise: 2(x + 4)/[2(x + 3)] = (x + 4)/(x + 3)',
                'Cancelling factors is the same as cancelling terms — FALSE: a factor is something multiplied (can be extracted outside a bracket); a term is something added or subtracted. Cancellation is valid only for factors that appear in both numerator and denominator'
            ],
            'Simplification Process Errors': [
                'You can simplify an algebraic fraction without factorising first — FALSE (for expressions involving sums): any numerator or denominator containing addition or subtraction must be fully factorised before any cancellation is attempted; cancelling from unfactorised expressions almost always produces incorrect results',
                'Once a factor is cancelled, no condition on x is necessary — FALSE: when a factor containing a variable (e.g. x + 3) is cancelled, the value of x that makes that factor zero (x = −3) must be excluded; the simplified fraction is only equivalent to the original for x ≠ −3',
                'A fraction is simplified when no individual number appears in both numerator and denominator — FALSE: a fraction like (2x + 4)/(4x + 8) still simplifies even though no identical number appears in both, because factorising gives 2(x+2)/[4(x+2)] = 1/2'
            ]
        },

        algebraicFractions: {
            'Adding Fractions Errors': [
                'To add fractions, add the numerators and add the denominators: 1/(2x) + 1/(3x) = 2/(5x) — FALSE: fractions are added by finding a common denominator (LCM) and expressing both fractions over it before adding only the numerators; 1/(2x) + 1/(3x) = 3/(6x) + 2/(6x) = 5/(6x)',
                'Two fractions with the same denominator can be added by cancelling the denominator: (x+1)/(x+2) + (x+3)/(x+2) = (x+1) + (x+3) — INCOMPLETE: the denominator is shared but not cancelled; the correct result is (2x+4)/(x+2), which then simplifies to 2(x+2)/(x+2) = 2 (for x ≠ −2)',
                'When simplifying the result of adding algebraic fractions, you can cancel individual terms in the numerator with the denominator — FALSE: after adding fractions, the resulting numerator must be factorised completely before any cancellation with the denominator is attempted'
            ]
        },

factorFactorization: {
    'Factorization Fundamentals': [
        'Factorization means dividing by something — FALSE: factorization means rewriting as a product; no division occurs; the original expression and the factorized form are equivalent',
        'A factorized expression is smaller or simpler than the original — FALSE: factorization changes the form but not the value; (x + 2)(x + 3) and x² + 5x + 6 are exactly equal for all values of x',
        'If an expression cannot be factorized with integers, it cannot be factorized at all — FALSE: an expression may be irreducible over the integers but factorisable over the rationals, reals, or complex numbers; stating the domain matters',
        'The factorized form and the expanded form are different expressions — FALSE: they are two representations of the same expression; substituting any value of x into both must give the same result'
    ],
    'Zero-Product Property Errors': [
        'If (x + 2)(x − 3) = 12, then x + 2 = 12 or x − 3 = 12 — FALSE: the zero-product property requires the product to equal ZERO; it cannot be applied to any other value',
        'If ab = 0, then a = 0 AND b = 0 — FALSE: the zero-product property states a = 0 OR b = 0 (at least one of them is zero; both can be, but only one needs to be)',
        'A quadratic equation always has two different solutions — FALSE: a quadratic may have two distinct solutions, one repeated solution (from a perfect square factor), or no real solutions; the discriminant determines which case applies'
    ]
},

commonFactorTechniques: {
    'HCF Extraction Errors': [
        'The HCF of the coefficients is all you need to extract — FALSE: the HCF must include both the numerical part (HCF of coefficients) and the variable part (lowest power of each variable appearing in ALL terms)',
        'If one term has no variable, the variable HCF is zero — FALSE: if one term has no variable (e.g. the constant 6 in 6x² + 9x + 3), the variable is effectively x⁰ = 1; the variable HCF is x⁰ = 1, meaning no variable is extracted; only the numerical HCF applies',
        'After extracting the HCF, the remaining bracket can be left without checking further — FALSE: the remaining bracket must always be inspected for further factorization; a correctly extracted HCF does not guarantee the result is fully factorized',
        'The HCF of 4x² and 6x³ is 2x² because 2 is HCF of coefficients and x² is the highest power — FALSE: the variable HCF is the LOWEST power of x appearing in both terms; x² is correct in this case since x² ≤ x³, but students often incorrectly take the highest power'
    ],
    'Grouping Errors': [
        'Factorization by grouping only works when the first two terms have a common factor — FALSE: sometimes the terms must be reordered so that each pair has a useful common factor; the grouping is a choice, and different groupings may or may not work',
        'When extracting a negative HCF from a group, the signs inside the bracket stay the same — FALSE: extracting a negative factor changes the sign of every term inside the bracket; −5x + 10 = −5(x − 2), not −5(x + 2)'
    ]
},

quadraticFactorization: {
    'Monic Quadratic Errors': [
        'To factorize x² + bx + c, find two numbers that add to c and multiply to b — FALSE: the two numbers must add to b (the coefficient of x) and multiply to c (the constant); reversing these conditions produces a completely different and incorrect factorization',
        'If no integer factor pair works, the quadratic cannot be factorized — PARTIALLY FALSE: the quadratic may not factorize over the integers but may factorize over the rationals; additionally, some quadratics with integer coefficients genuinely have no real factors (discriminant negative); the discriminant b² − 4ac should be checked before concluding irreducibility',
        'The sign of c in x² + bx + c tells you the sign of the larger factor — FALSE: the sign of c tells you whether the factors have the same sign (c > 0) or opposite signs (c < 0); the sign of b then determines which sign dominates'
    ],
    'Non-Monic Quadratic Errors': [
        'The AC method for ax² + bx + c requires finding two numbers that add to b and multiply to b — FALSE: the two numbers must add to b and multiply to a × c (the product of the leading coefficient and the constant, not just c alone)',
        'After splitting the middle term in the AC method, it does not matter how the four terms are grouped — FALSE: the grouping must be chosen so that each pair shares a common factor that produces the same bracket in both groups; incorrect grouping will not yield a common bracket'
    ]
},

differenceOfSquares: {
    'Sum vs Difference Confusion': [
        'a² + b² = (a + b)(a − b) — FALSE: this is the difference of squares; the SUM of two squares a² + b² does NOT factorize over the real numbers; (a + b)(a − b) expands to a² − b², not a² + b²',
        'x² + 9 can be factorized as (x + 3)(x + 3) or (x + 3)(x − 3) — FALSE: (x + 3)² = x² + 6x + 9 ≠ x² + 9; and (x + 3)(x − 3) = x² − 9 ≠ x² + 9; the sum of squares x² + 9 is irreducible over the reals',
        'The difference of squares identity only applies when the coefficient of x² is 1 — FALSE: 4x² − 9 = (2x)² − (3)² = (2x + 3)(2x − 3); the identity applies to any expression a² − b² regardless of whether a = x or a = 2x or a = 3x etc.'
    ],
    'Perfect Square Trinomial Errors': [
        '(a + b)² = a² + b² — FALSE: this is the most common algebraic identity error in all of secondary mathematics; the correct expansion is (a + b)² = a² + 2ab + b²; the middle term 2ab is never zero unless a = 0 or b = 0',
        '(a − b)² = a² − b² — FALSE: (a − b)² = a² − 2ab + b²; the result is a TRINOMIAL, not a binomial; confusing this with the difference of squares leads to completely incorrect factorizations',
        'A trinomial is a perfect square if the first and last terms are perfect squares — INCOMPLETE: this is a necessary but not sufficient condition; the middle term must also equal exactly 2ab where a and b are the square roots of the first and last terms; x² + 8x + 9 has perfect square first and last terms but 2(x)(3) = 6x ≠ 8x, so it is NOT a perfect square trinomial'
    ]
},

factorizationApplications: {
    'Equation Solving Errors': [
        'To solve a quadratic, factorize it immediately without checking whether one side equals zero — FALSE: factorization for equation solving requires zero on one side; if the equation is 2x² = 5x + 3, rearranging to 2x² − 5x − 3 = 0 is the first and mandatory step before factorizing',
        'Once the quadratic is factorized, substitute the constant back in to get the solution — FALSE: the zero-product property is applied to each factor separately; set each factor equal to zero and solve two linear equations',
        'If x = 2 is one solution of a quadratic equation, the other solution must be x = −2 — FALSE: this is only true if the equation is of the form x² − 4 = 0 (i.e. a difference of squares with no x term); in general, the two roots of a quadratic are not negatives of each other unless b = 0 in ax² + bx + c'
    ],
    'Algebraic Fraction Simplification': [
        'Common terms (not factors) can be cancelled in an algebraic fraction — FALSE: only common FACTORS (multiplied quantities) can be cancelled; in (x² − 4)/(x − 2), the x² and x are NOT factors of the numerator and denominator respectively — the numerator must first be factorized to (x + 2)(x − 2) before the common factor (x − 2) can be cancelled',
        'After simplifying an algebraic fraction by cancelling, no restriction on the variable is needed — FALSE: any value that made the original denominator equal to zero must be excluded even after simplification; for (x + 2)(x − 2)/(x − 2) = x + 2, the restriction x ≠ 2 must be stated because the original fraction was undefined at x = 2'
    ]
},

translationBasics: {
    'Vector Notation and Direction': [
        'A translation vector (3 over −2) moves the shape 3 up and 2 left — FALSE: the top number is the horizontal component (right is positive) and the bottom number is the vertical component (up is positive); (3 over −2) moves 3 right and 2 down',
        'You only need to translate one vertex and the rest of the shape follows automatically without calculation — FALSE: the translation rule must be applied individually to every vertex; assuming the shape moves as a rigid block is the right idea but the coordinates of each vertex must each be computed explicitly',
        'A translation by (0 over 0) changes the shape — FALSE: (0 over 0) is the identity translation; every point maps to itself and the image is identical to the object',
        'Two shapes being congruent means one is a translation of the other — FALSE: congruent shapes can be related by any isometry (translation, rotation, or reflection); congruence does not imply translation specifically'
    ],
    'Properties Confusion': [
        'A translation changes the orientation of the shape — FALSE: translation preserves orientation exactly; the shape slides without rotating or flipping',
        'A translation can change the size of the shape — FALSE: translation is an isometry and preserves all lengths and angles; a shape that appears different in size has not been translated but enlarged or otherwise scaled'
    ]
},

reflectionBasics: {
    'Mirror Line Rules': [
        'Reflecting in y = x negates both coordinates: (a, b) → (−a, −b) — FALSE: reflecting in y = x swaps the coordinates: (a, b) → (b, a). Negating both coordinates is the rule for 180° rotation about the origin, not reflection in y = x',
        'Reflecting in the x-axis swaps the coordinates — FALSE: reflecting in the x-axis negates the y-coordinate: (x, y) → (x, −y). Swapping coordinates is the rule for reflection in y = x, not the x-axis',
        'The rule for reflection in x = k is (x, y) → (−x, y) — FALSE: this is the rule for the y-axis (x = 0). For a general vertical line x = k, the rule is (x, y) → (2k − x, y), which is a different formula',
        'To reflect in y = −x, just negate both coordinates — FALSE: reflecting in y = −x gives (x, y) → (−y, −x): the coordinates swap and both are negated. Simply negating both coordinates without swapping gives (−x, −y), which is a 180° rotation'
    ],
    'Orientation and Properties': [
        'Reflection preserves orientation — FALSE: reflection reverses orientation. A clockwise-labelled triangle becomes anticlockwise-labelled after reflection — this is one of the fundamental differences between reflection and the other isometries',
        'The image and object in a reflection are on the same side of the mirror line — FALSE: the object and image are always on opposite sides of the mirror line, at equal perpendicular distances from it',
        'Any point can be invariant under a reflection — FALSE: invariant points under reflection are exactly the points on the mirror line itself; any point not on the mirror line maps to a different point'
    ]
},

rotationBasics: {
    'Direction and Angle Errors': [
        '90° anticlockwise gives (x, y) → (y, −x) — FALSE: this is the rule for 90° clockwise. The 90° anticlockwise rule is (x, y) → (−y, x). Confusing clockwise and anticlockwise is the single most common rotation error',
        'Rotating by 180° clockwise and 180° anticlockwise give different results — FALSE: a 180° rotation gives the same image regardless of direction; (x, y) → (−x, −y) in both cases. Direction only needs to be stated for angles other than 0° and 180°',
        'The rotation angle is measured from the origin, not the centre — FALSE: the rotation angle is the angle turned about the centre of rotation; the origin is only relevant when it is the centre'
    ],
    'Centre and Description Errors': [
        'A rotation of 90° anticlockwise gives the same rule regardless of the centre of rotation — FALSE: (x, y) → (−y, x) is only the rule when the centre is the origin; for any other centre the translate–rotate–untranslate method must be used',
        'Saying \'rotation of 90° anticlockwise\' is a complete description — FALSE: the centre of rotation is also required; without it, the rotation is not uniquely defined — infinitely many 90° anticlockwise rotations exist, one for every possible centre point',
        'The centre of rotation always lies inside the shape — FALSE: the centre of rotation can be anywhere in the plane, including outside the shape, on its boundary, or at a vertex'
    ]
},

enlargementBasics: {
    'Scale Factor Errors': [
        'A scale factor of 1/3 means the image is 3 times larger than the object — FALSE: scale factor 1/3 means every length in the image is 1/3 of the corresponding length in the object; the image is smaller than the object',
        'Scale factor = object length ÷ image length — FALSE: scale factor = image length ÷ object length (image over object). Inverting this ratio gives the reciprocal of the correct scale factor',
        'A negative scale factor is impossible — FALSE: a negative scale factor is perfectly valid; it produces an image on the opposite side of the centre of enlargement, with the image inverted (effectively rotated 180° relative to a positive scale factor of the same magnitude)',
        'Area is multiplied by k when lengths are multiplied by k — FALSE: area is a two-dimensional measurement; when every length is multiplied by k, area is multiplied by k² (not k). A scale factor of 3 multiplies lengths by 3 but area by 9'
    ],
    'Centre of Enlargement Errors': [
        'The enlargement rule is always (x, y) → (kx, ky) — FALSE: this rule is only valid when the centre of enlargement is the origin (0, 0). For any other centre (cx, cy), the correct rule is (cx + k(x − cx), cy + k(y − cy)). Using the origin rule for a non-origin centre is the most common enlargement error',
        'The centre of enlargement is always inside the shape — FALSE: the centre of enlargement can be anywhere — inside the shape, on its boundary, or outside it entirely; many standard exam questions place the centre outside',
        'A scale factor of 1 produces a different (larger) image — FALSE: scale factor k = 1 maps every point to itself; the image and object are identical. Scale factor k = −1 produces a congruent image on the opposite side of the centre (equivalent to 180° rotation about the centre)'
    ]
},

combinedTransformations: {
    'Order and Commutativity Errors': [
        'The order in which two transformations are applied does not matter — FALSE: transformations generally do not commute. Applying A then B gives a different result from applying B then A, except in special cases (e.g. two translations always commute; two rotations about the same centre commute)',
        'Applying two translations in either order gives the same result — TRUE but this is an exception: translations always commute because vector addition is commutative: (a over b) + (c over d) = (c over d) + (a over b). This is one of the very few cases where order does not matter',
        'Any combination of two isometries can be described as one of the four standard transformation types — FALSE: a rotation followed by a reflection (or a reflection followed by a rotation) may produce a glide reflection — a reflection combined with a translation parallel to the mirror line — which is not one of the four standard types studied at this level'
    ],
    'Equivalence Errors': [
        'Two reflections in any two lines always produce a rotation — FALSE: two reflections in parallel lines produce a translation, not a rotation. Only two reflections in intersecting lines produce a rotation. The distance between parallel lines determines the translation magnitude; the angle between intersecting lines determines the rotation angle',
        'The result of combining two transformations depends only on the types, not on the specific parameters — FALSE: the specific mirror lines, centres, angles, and vectors all affect the combined result; you cannot determine the outcome from transformation types alone'
    ]
},



functionDefinition: {
    'Definition Errors': [
        'A mapping is a function if every OUTPUT has exactly one input — FALSE: the function rule requires every INPUT to have exactly one output; multiple inputs sharing one output (many-to-one) is perfectly valid for a function',
        'A relation and a function are the same thing — FALSE: every function is a relation, but not every relation is a function; the function rule adds the constraint that each input maps to exactly one output',
        'A function must pair different inputs with different outputs — FALSE: this would make every function one-to-one; functions allow many inputs to share one output (e.g. f(x) = x² maps both 3 and −3 to 9)',
        'A circle on a coordinate plane represents a function — FALSE: a circle fails the vertical line test; any vertical line through the interior of the circle intersects it at two points, giving two outputs for one input'
    ],
    'Vertical Line Test Errors': [
        'The vertical line test checks whether a graph is a straight line — FALSE: the vertical line test checks whether every input (x-value) has at most one output (y-value); it applies to curves, not just lines',
        'If a graph has a gap, it cannot be a function — FALSE: a function can have gaps in its graph (e.g. a piecewise function or a rational function with a hole); what matters is that no x-value maps to two different y-values',
        'Passing the vertical line test means the function is one-to-one — FALSE: the vertical line test establishes that the graph IS a function; the HORIZONTAL line test determines whether it is one-to-one'
    ]
},

functionNotation: {
    'Notation Reading Errors': [
        'f(x) means f multiplied by x — FALSE: f(x) means "the output of function f when the input is x"; the bracket denotes function application, not multiplication; writing 3f(x) means 3 times the output, not f times (3x)',
        'f⁻¹(x) means 1/f(x) or (f(x))⁻¹ — FALSE: the superscript −1 on a function name denotes the INVERSE function (the function that undoes f); it is completely different from the reciprocal 1/f(x)',
        'f(x + 3) means f(x) + 3 — FALSE: f(x + 3) means replace every x in the rule with (x + 3); f(x) + 3 means evaluate f(x) first and then add 3 to the result; these are different operations producing different expressions'
    ],
    'Evaluation Errors': [
        'To find f(x + h), add h to the final expression f(x) rather than substituting (x + h) for x — FALSE: substitute (x + h) in place of every x in the rule before any simplification; only then expand and collect like terms',
        'f(ab) = f(a) · f(b) in general — FALSE: this would only be true for very specific function types (exponential functions satisfy this); for a general function, f(ab) ≠ f(a)·f(b)',
        'If f(a) = f(b), then a = b — FALSE: this is only true for one-to-one functions; for many-to-one functions (e.g. f(x) = x²), f(3) = f(−3) = 9, but 3 ≠ −3'
    ]
},

domainAndRange: {
    'Domain Errors': [
        'The domain of a function is always all real numbers — FALSE: rational functions exclude values that make the denominator zero; square root functions (over reals) exclude values that make the radicand negative; contextual functions may have additional restrictions',
        'To find where a rational function is undefined, set the NUMERATOR to zero — FALSE: set the DENOMINATOR to zero; the numerator being zero makes the function equal to zero (which is defined), not undefined',
        'The domain and range are always the same set — FALSE: domain and range are independently determined; for f(x) = x², the domain is all real numbers but the range is only non-negative reals',
        'A function always has the domain stated in the problem, never more or less — FALSE: when no domain is stated, the domain is the NATURAL domain — the largest set of real numbers for which the function is defined; contextual restrictions may then narrow this further'
    ],
    'Range Errors': [
        'The range of f(x) = (x − 3)² is all non-negative reals because squared terms are non-negative — PARTIALLY FALSE: while (x − 3)² ≥ 0 is correct, the range also depends on any vertical shift; f(x) = (x − 3)² + 4 has range [4, +∞), not [0, +∞)',
        'The range of an exponential function f(x) = 2ˣ includes all real numbers — FALSE: 2ˣ > 0 for all real x; the range is (0, +∞); the exponential function never reaches zero and is never negative (it has a horizontal asymptote at y = 0)',
        'To find the range, just substitute domain values and see what you get — INSUFFICIENT: substituting a few values gives sample outputs but not the complete range; determine the range by either graphing completely, using the vertex formula for quadratics, or setting y = f(x) and solving for x to identify all achievable y-values'
    ]
},

typesOfFunctions: {
    'Function Family Confusion': [
        'An exponential function f(x) = x³ has x as the exponent — FALSE: in f(x) = x³, x is the BASE and 3 is the fixed exponent (this is a POWER function, not exponential); an exponential function has the variable in the EXPONENT: f(x) = 3ˣ',
        'A quadratic function can have any number of x-intercepts — FALSE: a quadratic has at most 2 x-intercepts (from the quadratic formula, Δ = b² − 4ac determines 0, 1, or 2 real roots); it cannot have 3 or more',
        'The graph of f(x) = 2ˣ passes through the origin — FALSE: f(0) = 2⁰ = 1, so the graph passes through (0, 1), not the origin; all exponential functions of the form f(x) = aˣ (a > 0) pass through (0, 1)'
    ],
    'Transformation Errors': [
        'The transformation f(x − 3) shifts the graph 3 units to the LEFT — FALSE: f(x − 3) shifts the graph 3 units to the RIGHT; replacing x with (x − 3) moves the graph in the POSITIVE x-direction (counterintuitive: the minus sign inside means rightward shift)',
        'The transformation f(x) + 3 and f(x + 3) produce the same graph — FALSE: f(x) + 3 shifts the graph 3 units UPWARD (outside the function, affects y); f(x + 3) shifts the graph 3 units to the LEFT (inside the function, affects x in the opposite direction)',
        'A vertical stretch by factor 3 and a horizontal compression by factor 3 always produce the same graph — FALSE: vertical stretch by 3 gives 3·f(x) (every y-value multiplied by 3); horizontal compression by factor 3 gives f(3x) (every x-value divided by 3); for a general function, these produce different graphs'
    ]
},

transformations: {
    'Direction and Order Errors': [
        'Transformations can be applied in any order without affecting the result — FALSE: for combined transformations, order matters; applying a vertical stretch before a vertical translation gives a different result from applying the translation first (the stretch amplifies the translation if applied second)',
        'A negative sign in front of f(x) reflects the graph in the y-axis — FALSE: −f(x) reflects in the x-axis (every y-value changes sign); f(−x) reflects in the y-axis (every x-value changes sign)',
        'Multiplying inside the function by 2, as in f(2x), stretches the graph horizontally by factor 2 — FALSE: f(2x) COMPRESSES the graph horizontally by factor 2 (every x-coordinate is halved); to stretch horizontally by factor 2, write f(x/2) or f((1/2)x)'
    ],
    'Domain and Range Under Transformations': [
        'Transformations never change the domain or range of a function — FALSE: vertical translations change the range (shift it up or down); horizontal translations change the domain (shift it); reflections change the sign of domain or range values; stretches scale the domain or range',
        'If f has range [0, +∞), then −f(x) also has range [0, +∞) — FALSE: −f(x) reflects in the x-axis, so every non-negative output becomes non-positive; the range of −f(x) is (−∞, 0]'
    ]
},

angleBasics: {
            'Angle Classification Errors': [
                'A reflex angle is not a real angle — FALSE: reflex angles (between 180° and 360°) are fully valid; they appear whenever the larger rotation between two rays is measured',
                'A straight angle (180°) is not an angle because it looks like a line — FALSE: a straight angle is a specific, well-defined angle type; the two rays point in exactly opposite directions',
                'You cannot have an angle of 0° or 360° — FALSE: a 0° angle means the two rays coincide (no rotation); a 360° angle is a full turn; both are degenerate but valid cases',
                'A larger-looking angle on a diagram is always larger in degrees — FALSE: angles are not reliably determined by diagram appearance unless stated to be drawn accurately; always use given values or calculate from rules'
            ],
            'Angles at a Point Errors': [
                'Angles on a straight line always means exactly two angles that sum to 180° — FALSE: any number of angles can sit on a straight line; all of them together sum to 180°, not just any two of them',
                'Vertically opposite angles are the angles next to each other at an intersection — FALSE: vertically opposite angles are the non-adjacent pairs — the ones across from each other; adjacent angles at an intersection are supplementary, not vertically opposite',
                'If two angles are equal they must be vertically opposite — FALSE: equal angles can arise from many rules (alternate angles, corresponding angles, base angles of isosceles triangles); equality alone does not imply vertically opposite'
            ]
        },

        angleRelationships: {
            'Parallel Line Angle Errors': [
                'Alternate angles and co-interior angles are the same thing because both involve parallel lines — FALSE: alternate angles are equal (Z-shape, opposite sides of transversal); co-interior angles are supplementary (C-shape, same side of transversal); confusing these gives the wrong equation',
                'Corresponding angles sum to 180° — FALSE: corresponding angles are EQUAL (not supplementary); it is co-interior angles that sum to 180°',
                'Parallel line angle rules apply to any two lines cut by a transversal — FALSE: corresponding, alternate, and co-interior rules only hold when the lines are confirmed to be parallel; applying them to non-parallel lines gives incorrect results',
                'Co-interior angles are equal because they look symmetrical — FALSE: co-interior angles are supplementary (sum to 180°), not equal; their apparent symmetry on a diagram is misleading if the transversal is not perpendicular to the parallel lines'
            ],
            'Proving Parallel Lines': [
                'If two lines look parallel on a diagram, the parallel-line rules can be used — FALSE: unless parallel lines are explicitly stated or proved, angle rules for parallel lines cannot be applied; diagrams are not evidence of parallelism',
                'Equal angles always prove that lines are parallel — FALSE: only specific pairs of equal angles prove parallelism: equal corresponding angles, or equal alternate angles; equal vertically opposite angles say nothing about whether other lines are parallel'
            ]
        },

        anglesInTriangles: {
            'Triangle Angle Sum Errors': [
                'The angles of a triangle sum to 360° — FALSE: 360° is the sum of angles around a point or the exterior angle sum of any polygon; triangle interior angles sum to 180°',
                'The exterior angle of a triangle is 360° minus the interior angle — FALSE: the exterior angle is 180° minus the adjacent interior angle (straight line rule), not 360° minus anything',
                'The exterior angle theorem applies to any angle outside the triangle — FALSE: it applies specifically to the angle formed by extending one side of the triangle; other external angles have no special relationship to the interior angles',
                'All triangles with the same angles are the same triangle — FALSE: two triangles with the same angles are similar (same shape) but not necessarily congruent (same size); size is determined by side lengths, not angles'
            ],
            'Special Triangle Errors': [
                'An isosceles triangle always has a vertical axis of symmetry — FALSE: an isosceles triangle has a line of symmetry through the apex and the midpoint of the base, but this line is only vertical if the triangle is drawn with the base horizontal; the geometry is the same regardless of orientation',
                'A right-angled triangle cannot be isosceles — FALSE: a right isosceles triangle has angles 90°, 45°, 45°; it is both right-angled and isosceles',
                'The largest angle in a triangle is always opposite the longest side — TRUE, not a misconception; this is a correct fact worth reinforcing positively — but students often forget it or apply it in reverse, thinking the longest side is always opposite the right angle'
            ]
        },

        anglesInPolygons: {
            'Formula Application Errors': [
                'The formula (n − 2) × 180° gives each interior angle of a polygon — FALSE: it gives the TOTAL interior angle sum; to find each angle of a regular polygon, you must also divide by n',
                '360° ÷ n gives the interior angle of a regular polygon — FALSE: 360° ÷ n gives the EXTERIOR angle of a regular polygon; the interior angle is 180° − (360° ÷ n) or equivalently (n − 2) × 180° ÷ n',
                'The formula (n − 2) × 180° works only for regular polygons — FALSE: the formula gives the interior angle sum for ANY polygon with n sides, regular or irregular; it is only the per-angle division by n that requires the polygon to be regular',
                'The exterior angle sum of a polygon depends on the number of sides — FALSE: the exterior angle sum of ANY convex polygon is always 360°, regardless of the number of sides'
            ],
            'Polygon Identification Errors': [
                'A polygon with all sides equal must have all angles equal — FALSE: a rhombus has all sides equal but angles are not all equal; both conditions (equal sides AND equal angles) are required for a polygon to be regular',
                'Adding one more side to a polygon always adds 180° to the interior angle sum — TRUE and worth reinforcing: each additional side adds one more triangle to the triangulation, adding exactly 180° to the total; this is why the formula increases by 180° for each unit increase in n'
            ]
        },

        circleAngles: {
            'Circle Theorem Errors': [
                'The angle at the circumference is twice the angle at the centre — FALSE: this is the exact reverse of the correct theorem; the angle at the CENTRE is twice the angle at the CIRCUMFERENCE (subtended by the same arc)',
                'The angle in a semicircle can be any size depending on where on the semicircle the point is — FALSE: the angle in a semicircle is always exactly 90°, regardless of where the point on the semicircle is placed; it is a fixed consequence of the centre-circumference theorem',
                'Circle theorems apply to any point inside or outside the circle — FALSE: the circumference theorems specifically require the point to be ON the circle; points inside the circle produce larger angles, points outside produce smaller angles'
            ]
        },


trigRatioBasics: {
    'SOHCAHTOA Labelling Errors': [
        'The adjacent side is always the horizontal side and the opposite side is always the vertical side — FALSE: opposite and adjacent are defined relative to the reference angle, not relative to the orientation of the triangle on the page; rotating a diagram changes which side is horizontal but does not change which is opposite or adjacent to a given angle',
        'The hypotenuse changes depending on which angle is the reference angle — FALSE: the hypotenuse is always the side opposite the right angle and is always the longest side; only opposite and adjacent change with the reference angle',
        'sin θ = adjacent/hypotenuse — FALSE: sin uses the Opposite side (SOH); adjacent/hypotenuse is cosine (CAH); confusing these two is the most common single error in right-triangle trigonometry',
        'You can use SOHCAHTOA in any triangle — FALSE: SOHCAHTOA only applies to right-angled triangles; for non-right-angled triangles, the sine rule or cosine rule must be used'
    ],
    'Inverse Trig Function Errors': [
        'sin⁻¹(x) means 1/sin(x) (the reciprocal of sine) — FALSE: sin⁻¹(x) is the inverse function (arcsin), giving the angle whose sine is x; the reciprocal of sin is cosec, written as cosec(x) or (sin x)⁻¹',
        'The output of sin⁻¹ is always between 0° and 360° — FALSE: the principal range of sin⁻¹ is −90° to 90°; finding all solutions in a wider range requires using CAST and adding further solutions beyond the principal value',
        'If sin θ = 0.7, then θ = sin⁻¹(0.7) is the only solution — FALSE: in the range 0° to 360°, there are two solutions; the second is 180° minus the principal value (since sin is positive in both quadrant 1 and quadrant 2)'
    ]
},

unitCircleAndRadians: {
    'Radian Measure Errors': [
        'Radians and degrees are just two names for the same measurement with different numbers — MISLEADING: while both measure the same geometric quantity (angle), they are not interchangeable in formulas; s = rθ and A = ½r²θ require θ in radians; substituting degrees gives a numerically wrong and dimensionally inconsistent result',
        '1 radian = 180° — FALSE: π radians = 180°, so 1 radian = 180°/π ≈ 57.3°; the confusion arises from misremembering the conversion as 1 rad = 180° instead of π rad = 180°',
        'To convert radians to degrees, multiply by 180 — INCOMPLETE and often wrong: the correct operation is to multiply by 180/π; multiplying by 180 alone gives a value π times too large'
    ],
    'Unit Circle and CAST Errors': [
        'The unit circle only applies to angles between 0° and 90° — FALSE: the unit circle defines sin and cos for all real angles; this extension to all quadrants is precisely the purpose of the unit circle definition',
        'In quadrant 2, both sin and cos are positive because coordinates can be positive in that region — FALSE: in quadrant 2, x is negative and y is positive; since cos θ = x-coordinate and sin θ = y-coordinate on the unit circle, cos is negative and sin is positive in quadrant 2',
        'CAST says Cos is in quadrant 1 — FALSE: CAST lists the one ratio (other than in quadrant 1 where all are positive) that is positive in each quadrant, moving anticlockwise from quadrant 4: Cosine is positive in quadrant 4, not quadrant 1'
    ]
},

trigGraphs: {
    'Graph Feature Errors': [
        'The amplitude of y = a sin x is a — PARTIALLY FALSE: the amplitude is |a|, the absolute value; if a is negative the graph is reflected in the x-axis but the amplitude (half the peak-to-peak distance) is still the positive value |a|',
        'The period of y = sin(bx) is b × 360° — FALSE: the period is 360°/b (or 2π/b in radians); increasing b compresses the graph horizontally (shorter period), not stretches it',
        'A phase shift of y = sin(x − 30°) moves the graph 30° to the left — FALSE: y = sin(x − 30°) is shifted 30° to the RIGHT; subtracting inside the argument shifts right, adding shifts left; the formula is phase shift = −c/b where the equation is sin(bx + c)',
        'y = cos x and y = sin x are completely different functions — FALSE: cos x = sin(x + 90°); the cosine graph is the sine graph shifted 90° to the left; they differ only in phase, having identical amplitude, period, and range'
    ],
    'Tangent Graph Errors': [
        'y = tan x has amplitude 1 like sin and cos — FALSE: y = tan x has no amplitude; it has no maximum or minimum value (its range is all real numbers) and the concept of amplitude does not apply to it',
        'y = tan x has period 360° like sin and cos — FALSE: y = tan x has period 180° (π radians), half the period of sin and cos; this is because tan repeats with every half-revolution of the unit circle',
        'The vertical asymptotes of y = tan x occur where sin x = 0 — FALSE: tan x = sin x / cos x, so asymptotes occur where cos x = 0 (the denominator is zero), at x = 90° + 180°n, not where sin x = 0'
    ]
},

trigIdentities: {
    'Pythagorean Identity Misuse': [
        'sin²θ means sin(θ²) — FALSE: sin²θ is the standard notation for (sin θ)², the square of the sine of θ; sin(θ²) would mean taking the sine of θ squared, which is a completely different expression',
        '1 − sin²θ = cos θ (dropping the square on cos) — FALSE: 1 − sin²θ = cos²θ, not cos θ; the identity is between squares on both sides; losing the square on cos gives an equation that is not generally true',
        'sin²θ + cos²θ = 1 only holds for acute angles — FALSE: the Pythagorean identity holds for all real values of θ without exception; it is derived from the unit circle equation x² + y² = 1 which holds everywhere'
    ],
    'Identity Proof Errors': [
        'To prove an identity, you can move terms across the equals sign — FALSE: the equals sign in an identity proof represents what you are trying to show, not an established truth; moving terms across assumes the identity is true before proving it (circular reasoning); always work on one side only',
        'If both sides simplify to the same number (e.g. both equal 1) for one value of θ, the identity is proved — FALSE: an identity must hold for all valid values of θ; checking one numerical value is verification, not proof; a disproof requires only one counterexample, but a proof requires showing it holds generally'
    ]
},

triangleApplications: {
    'Sine Rule Errors': [
        'The sine rule can always be applied to find any unknown in any triangle — FALSE: the sine rule requires a matched angle-side pair (knowing an angle and the side opposite it) plus one more piece of information; for SAS problems (two sides and the included angle), the cosine rule must be used instead',
        'When using the sine rule to find an angle, there is always exactly one solution — FALSE: the sine rule gives sin B = (b sin A)/a; since sin B = sin(180° − B), there may be two valid triangles (the ambiguous case SSA) when the given angle is acute and b > a; always check whether 180° minus the found angle also gives a valid triangle',
        'The sine rule gives a/sin A where A is any angle — FALSE: A must be the angle directly opposite side a; the sine rule pairs each side with its opposite angle; using a non-opposite angle produces an incorrect ratio'
    ],
    'Cosine Rule Errors': [
        'The cosine rule formula is a² = b² + c² + 2bc cos A — FALSE: the correct formula is a² = b² + c² − 2bc cos A with a minus sign; the + version is the most common sign error in the cosine rule and always produces an incorrect (too large) value for a²',
        'The cosine rule applies when any two sides and any angle are given — FALSE: the cosine rule for finding a side requires the INCLUDED angle (the angle between the two known sides); if the given angle is not between the two given sides (SSA case), use the sine rule instead',
        'When finding an angle using the cosine rule, a negative value of cos A means an error was made — FALSE: a negative value of cos A is expected and correct when angle A is obtuse (between 90° and 180°); it simply means the angle is in the second quadrant where cosine is negative; cos⁻¹ of a negative number gives an angle between 90° and 180°, which is the correct obtuse angle'
    ]
},

subjectOfFormula: {
            'Identifying the Subject': [
                'The subject of a formula is always on the left side — FALSE: the subject is whichever variable is isolated on one side by itself; writing m = F/a and F/a = m are equivalent, and either can be read as "m is the subject"',
                'A formula can only have one valid subject — FALSE: any variable in a formula can be made the subject by rearranging; all versions express the same relationship and are equally valid',
                'Rearranging a formula changes the relationship it describes — FALSE: rearranging changes the form but not the content; F = ma and m = F/a describe identically the same physical relationship between force, mass, and acceleration'
            ],
            'Scope of Rearranging': [
                'If a variable does not appear explicitly (e.g. the denominator contains a product), it cannot be made the subject — FALSE: any variable in the formula can be isolated through a sequence of inverse operations, though the number of steps may be large',
                'Constants like π or 2 can be moved to the other side in the same way as variables — TRUE in principle but the inverse operation for a constant multiplier is division, not subtraction; the same balance-principle applies regardless of whether the term is a variable or a constant'
            ]
        },

        inverseOperations: {
            'Wrong Order of Undoing': [
                'When rearranging v = u + at for t, the first step is to divide by a — FALSE: the last operation applied to the t-side was adding u; the first inverse operation must therefore be subtracting u, not dividing by a; applying operations in the wrong order produces an incorrect rearrangement',
                'The order in which you undo operations does not matter as long as you apply each inverse eventually — FALSE: applying inverse operations in the wrong order produces an expression that is not equivalent to the original formula; order is determined by the reverse of the order in which operations were originally applied'
            ],
            'Applying Operations to Part of a Side': [
                'When dividing both sides by a, you divide only the term containing a on one side — FALSE: dividing both sides means dividing the ENTIRE side by a, including every term; dividing only one term violates the balance principle and produces an inequality rather than an equation',
                'When subtracting at from v = u + at, you write v − at = u + at − at, but the right side simplifies to u + 0 so the at was never really part of the right side — This reasoning is correct in result but wrong in logic: at was always a term on the right side; subtracting at from both sides is what removes it; it does not disappear by itself'
            ]
        },

        multiStepRearranging: {
            'Missing the Factorise Step': [
                'When the target variable appears on both sides, you can isolate it by moving all other terms to the opposite side without factorising — FALSE: after collecting x-terms (e.g. ax − cx = d − b), x still appears as a coefficient in two terms; only factorising (x(a − c) = d − b) reduces this to a single instance of x that can then be isolated by division',
                'Factorising is an optional simplification step, not a required step — FALSE: when the target variable appears in multiple terms, factorising is structurally necessary; without it, there is no single step that isolates the variable',
                'ax − cx simplifies to ax by cancelling the cx — FALSE: ax − cx = x(a − c) by the distributive law; cx cannot be cancelled from ax as if it were a common factor in a fraction; these are subtracted terms, not a fraction'
            ],
            'Expanding Before Collecting': [
                'When the target variable appears inside a bracket, you can factorise before expanding — FALSE: if the bracket contains other terms (not just the target variable), the bracket must be expanded first so all instances of the target variable are visible before collecting',
                'If the target variable is inside a bracket multiplied by another expression, the bracket can be divided away directly — SOMETIMES TRUE but only if the entire bracket equals the target variable; if the bracket contains the target variable plus other terms, dividing by the bracket does not isolate the target variable'
            ]
        },

        fractionsAndRoots: {
            'Square Root Distribution': [
                '√(a² + b²) = a + b — FALSE: this is the most dangerous misconception in this topic; the square root of a sum is NOT the sum of the square roots; numerically: √(9 + 16) = √25 = 5, but √9 + √16 = 3 + 4 = 7 ≠ 5',
                '√(a² + b²) = √(a²) + √(b²) = a + b — FALSE: the distributive property does not apply to square roots over addition; this error is equivalent to claiming (a + b)² = a² + b², which omits the cross-term 2ab',
                'When squaring both sides of T/(2π) = √(l/g), the left side becomes T²/(2π²) — FALSE: squaring T/(2π) means squaring the entire fraction as a unit: (T/(2π))² = T²/(4π²), not T²/(2π²); the denominator 2π is squared as a whole, giving (2π)² = 4π²'
            ],
            'Denominator Handling': [
                'To make t the subject of s = d/t, divide both sides by t — FALSE: t is already in the denominator; dividing both sides by t puts t² in the denominator, making the problem worse; the correct first step is to multiply both sides by t',
                'When a variable is in the denominator, it can be moved to the numerator by adding it to both sides — FALSE: moving a variable between numerator and denominator requires multiplication or division, not addition or subtraction; adding t to both sides of s = d/t gives s + t = d/t + t, which does not isolate t',
                'Taking the reciprocal of both sides reverses all operations — PARTIALLY TRUE but imprecise: taking the reciprocal of 1/x = expression gives x = 1/expression, which is correct; however, taking the reciprocal of (a + b)/c = expression gives c/(a + b) = 1/expression, which is only one of several steps needed; the reciprocal operation applies to the entire side as a single fraction'
            ]
        },

        rearrangingWithSquares: {
            'Squaring Individual Terms': [
                'To eliminate a square root applied to a sum, take the square root of each individual term — FALSE: √(a + b) ≠ √a + √b; the square root must be eliminated by squaring the entire expression (a + b), not its parts',
                'Squaring both sides of a = √b + c gives a² = b + c² — FALSE: squaring both sides means squaring each complete side; the right side (√b + c) must be squared as a unit: (√b + c)² = b + 2c√b + c²; the middle cross-term 2c√b is always omitted by students who square individual terms'
            ],
            'Sign Ambiguity': [
                'When square-rooting both sides of x² = 25, the only solution is x = 5 — FALSE: x² = 25 has two solutions: x = 5 and x = −5; in physical contexts (e.g. speed, length) only the positive root is meaningful, but algebraically both roots are valid and the ± symbol must be written',
                'For physical formulae, only the positive square root is ever relevant — MOSTLY TRUE for magnitudes (speed, length, area) but not universally; in some physics contexts, both positive and negative solutions are physically meaningful (e.g. displacement, velocity)'
            ]
        },

quadraticEquations: {
    'Quadratic Formula Errors': [
        'Taking only the positive square root in the quadratic formula: √(b²−4ac) only — FALSE: the ± symbol is essential; the formula yields two solutions x = (−b + √Δ)/2a and x = (−b − √Δ)/2a; taking only one gives an incomplete solution set',
        'Treating a = 1 when the equation has a leading coefficient other than 1 — FALSE: if the equation is 3x² + 2x − 1 = 0, then a = 3, not 1; always identify a, b, c from the standard form ax² + bx + c = 0 before substituting',
        'Computing −b incorrectly when b is negative: if b = −5, then −b = −(−5) = 5, not −5 — FALSE: students often substitute −b as b without negating; always write −(b) with the bracket to force the sign change',
        'Computing the discriminant as b² − 4ac but squaring only the number in b, not the sign: if b = −3, then b² = (−3)² = 9, not −9 — FALSE: squaring a negative always gives a positive result; b² is always ≥ 0'
    ],
    'Square Root Errors': [
        'x² = 9 implies x = 3 — FALSE: taking the square root of both sides gives x = ±3; both values satisfy x² = 9; the negative root is always present and must not be omitted',
        '√(x²) = x — FALSE: √(x²) = |x|, which equals x only when x ≥ 0; for x < 0, √(x²) = −x; this distinction matters when solving equations by taking square roots',
        'A negative discriminant means you made an arithmetic error — FALSE: Δ < 0 is a valid algebraic result meaning the quadratic has no real roots; it is not an error indicator; the parabola simply does not cross the x-axis'
    ],
    'Factoring Errors': [
        'The Zero Product Property applies when the product equals any constant: if AB = 6, then A = 6 or B = 6 — FALSE: the Zero Product Property applies ONLY when the product equals zero; always rearrange to standard form (= 0) before factoring',
        'Factoring is complete when the quadratic is written as a product of two linear factors with integer coefficients — FALSE: not all quadratics factor over the integers; when factoring fails, the quadratic formula must be used'
    ]
},

polynomialEquations: {
    'Factor Theorem Errors': [
        'If f(2) = 4, then (x − 4) is a factor — FALSE: the Factor Theorem states that (x − a) is a factor if and only if f(a) = 0; f(2) = 4 means x = 2 is NOT a root and (x − 2) is not a factor',
        'Testing one root and finding it valid means all roots have been found — FALSE: for a degree-n polynomial, finding one root (x − a) gives a factor; dividing gives a depressed polynomial of degree n−1 which must itself be solved to find all remaining roots',
        'A degree-3 polynomial always has three distinct roots — FALSE: a degree-3 polynomial has at most three real roots but may have one real root and two complex roots, or a repeated root reducing the count of distinct values'
    ],
    'Multiplicity Errors': [
        'A root of multiplicity 2 means the polynomial has two separate roots equal to that value — FALSE: multiplicity 2 means (x − a)² is a factor; geometrically, the graph touches but does not cross the x-axis at x = a; it is one root, not two',
        'The graph of a polynomial always crosses the x-axis at every root — FALSE: the graph crosses only at roots with odd multiplicity; it touches (bounces) at roots with even multiplicity'
    ]
},

const EndSection13 = "close"