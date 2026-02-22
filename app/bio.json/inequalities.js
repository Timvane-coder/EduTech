Here are the detailed implementations for all 9 inequality topic handlers:
// ========================================
    // DETAILED TOPIC HANDLER IMPLEMENTATIONS
    // ========================================

    handleLinearInequalities(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Linear Inequalities",
            category: 'inequalities',
            summary: "Linear inequalities are solved like linear equations with one critical rule: multiplying or dividing by a negative number reverses the inequality sign. Solutions are infinite sets expressed as intervals on the real number line.",

            definitions: {
                inequality: {
                    definition: "A mathematical statement using <, >, ≤, or ≥ asserting that one expression is greater or less than another",
                    contrastWithEquation: "An equation has at most finitely many solutions; a linear inequality typically has infinitely many solutions forming an interval"
                },
                solutionSet: {
                    definition: "The complete set of all real values satisfying the inequality",
                    forms: "Expressed as an inequality (x > 3), in interval notation (3, +∞), or on a number line graph"
                },
                equivalentInequalities: {
                    definition: "Two inequalities are equivalent if they have the same solution set",
                    example: "3x > 6 and x > 2 are equivalent — produced by dividing both sides by 3"
                },
                boundaryPoint: {
                    definition: "The value where the inequality becomes equality; the endpoint of the solution interval",
                    openVsClosed: "Strict inequalities (<, >) give open (excluded) boundary points; non-strict (≤, ≥) give closed (included) boundary points"
                },
                intervalNotation: {
                    openInterval: "(a, b) — both endpoints excluded; corresponds to a < x < b",
                    closedInterval: "[a, b] — both endpoints included; corresponds to a ≤ x ≤ b",
                    halfOpenRight: "[a, b) — left included, right excluded",
                    halfOpenLeft: "(a, b] — left excluded, right included",
                    unboundedRight: "(a, +∞) for x > a; [a, +∞) for x ≥ a",
                    unboundedLeft: "(−∞, a) for x < a; (−∞, a] for x ≤ a",
                    infinityNote: "Infinity (±∞) is never a value; always use ( or ) with ∞, never [ or ]"
                }
            },

            properties: {
                additionProperty: {
                    statement: "Adding or subtracting the same quantity from both sides preserves the inequality",
                    rule: "If a < b, then a + c < b + c for any real c",
                    example: "x − 3 < 7 → x < 10 (added 3 to both sides — direction preserved)"
                },
                multiplicationProperty: {
                    positiveMultiplier: {
                        statement: "Multiplying or dividing by a positive number preserves the inequality direction",
                        rule: "If a < b and c > 0, then ac < bc",
                        example: "2x < 8 → x < 4 (divided by 2 — direction preserved)"
                    },
                    negativeMultiplier: {
                        statement: "Multiplying or dividing by a negative number REVERSES the inequality direction",
                        rule: "If a < b and c < 0, then ac > bc — the REVERSAL RULE",
                        example: "−3x < 12 → x > −4 (divided by −3 — direction reversed)",
                        whyItWorks: "On the number line, multiplying by −1 reflects every point through 0, reversing the order. If 2 < 5, then −2 > −5.",
                        numericalVerification: "Start: −3(2) = −6 < 12 ✓. After solving: x > −4 → test x = 0: −3(0) = 0 < 12 ✓. Test x = −5 (outside): −3(−5) = 15 > 12 — correctly excluded ✓"
                    }
                },
                transitivity: {
                    statement: "If a < b and b < c, then a < c",
                    useInInequalities: "Allows chaining comparisons in three-part inequalities"
                }
            },

            solveProcess: {
                generalSteps: [
                    "Step 1: Expand all brackets on both sides",
                    "Step 2: Collect like terms — simplify each side",
                    "Step 3: Move variable terms to one side, constant terms to the other",
                    "Step 4: Isolate the variable by multiplying or dividing — REVERSE SIGN if dividing/multiplying by negative",
                    "Step 5: Write solution as inequality, interval notation, and number line",
                    "Step 6: Verify by substituting a test point from within the solution set and checking it satisfies the original inequality",
                    "Step 7: Also test a point outside the solution set to confirm it does NOT satisfy the inequality"
                ],
                reversalChecklist: {
                    reverseWhen: ["Dividing both sides by a negative coefficient", "Multiplying both sides by a negative number", "Moving a variable term across the inequality when it requires multiplying by −1"],
                    doNotReverseWhen: ["Adding or subtracting any term", "Multiplying or dividing by a positive number", "Moving a constant term across the inequality"]
                },
                verificationMethod: {
                    step1: "Choose a test value clearly inside the solution interval",
                    step2: "Substitute into the ORIGINAL inequality (not the simplified form)",
                    step3: "Confirm the inequality is satisfied",
                    step4: "Choose a test value clearly outside the solution interval",
                    step5: "Confirm the original inequality is NOT satisfied",
                    example: "For x > 4: test x = 6 (inside) and x = 2 (outside) in the original expression"
                }
            },

            workedExamples: [
                {
                    title: "Simple one-step linear inequality",
                    expression: "3x − 5 > 7",
                    steps: [
                        "3x > 12     (added 5 to both sides)",
                        "x > 4       (divided by 3 — positive, no reversal)"
                    ],
                    solution: "x > 4",
                    interval: "(4, +∞)",
                    numberLine: "Open circle at 4; arrow pointing right",
                    verify: "Test x = 6: 3(6) − 5 = 13 > 7 ✓. Test x = 2: 3(2) − 5 = 1 > 7 ✗ (correctly excluded)"
                },
                {
                    title: "Negative coefficient requiring reversal",
                    expression: "−2x + 3 ≤ 11",
                    steps: [
                        "−2x ≤ 8     (subtracted 3 from both sides)",
                        "x ≥ −4      (divided by −2 — REVERSED sign)"
                    ],
                    solution: "x ≥ −4",
                    interval: "[−4, +∞)",
                    numberLine: "Closed circle at −4; arrow pointing right",
                    verify: "Test x = 0: −2(0) + 3 = 3 ≤ 11 ✓. Test x = −5: −2(−5) + 3 = 13 ≤ 11 ✗ (correctly excluded)"
                },
                {
                    title: "Two-step with brackets",
                    expression: "2(3x − 1) < 4x + 8",
                    steps: [
                        "6x − 2 < 4x + 8    (expanded brackets)",
                        "2x − 2 < 8          (subtracted 4x from both sides)",
                        "2x < 10             (added 2 to both sides)",
                        "x < 5               (divided by 2 — positive, no reversal)"
                    ],
                    solution: "x < 5",
                    interval: "(−∞, 5)",
                    numberLine: "Open circle at 5; arrow pointing left",
                    verify: "Test x = 3: 2(8) = 16 < 4(3)+8 = 20 ✓. Test x = 7: 2(20) = 40 < 4(7)+8 = 36 ✗"
                },
                {
                    title: "Fractional coefficients",
                    expression: "(x/3) + 2 ≥ (x/2) − 1",
                    steps: [
                        "Multiply through by 6 (LCM of 3 and 2):",
                        "2x + 12 ≥ 3x − 6",
                        "12 + 6 ≥ 3x − 2x    (moved variable to right, constant to left)",
                        "18 ≥ x",
                        "x ≤ 18"
                    ],
                    solution: "x ≤ 18",
                    interval: "(−∞, 18]",
                    verify: "Test x = 0: 0/3 + 2 = 2 ≥ 0/2 − 1 = −1 ✓. Test x = 20: 20/3 + 2 ≈ 8.67 ≥ 20/2 − 1 = 9 ✗"
                },
                {
                    title: "No solution case",
                    expression: "3x + 5 < 3(x − 2)",
                    steps: [
                        "3x + 5 < 3x − 6    (expanded)",
                        "5 < −6             (subtracted 3x from both sides)"
                    ],
                    solution: "No solution — 5 < −6 is a false statement regardless of x",
                    interval: "∅",
                    explanation: "When the variable cancels and a false constant inequality remains, there is no solution"
                },
                {
                    title: "All real numbers solution",
                    expression: "2x − 1 > 2(x − 3)",
                    steps: [
                        "2x − 1 > 2x − 6    (expanded)",
                        "−1 > −6            (subtracted 2x from both sides)"
                    ],
                    solution: "All real numbers — −1 > −6 is always true regardless of x",
                    interval: "(−∞, +∞)",
                    explanation: "When the variable cancels and a true constant inequality remains, all real numbers are solutions"
                }
            ],

            specialConsiderations: {
                integerSolutions: "If context requires integer solutions, identify integers within the continuous solution interval",
                contextualRestrictions: "Real-world variables often have natural restrictions (e.g., x > 0 for length, x ≥ 0 for count) — intersect with the mathematical solution",
                rearrangementFlexibility: "Can move terms in any valid order; choose the arrangement that avoids a negative coefficient on the variable when possible"
            },

            connectionToOtherTopics: {
                compoundInequalities: "Two linear inequalities joined with AND or OR",
                absoluteValue: "Absolute value inequalities reduce to compound linear inequalities after case splitting",
                linearProgramming: "Systems of linear inequalities define feasible regions in multi-variable optimisation",
                equations: "The boundary point is found by solving the corresponding linear equation"
            },

            commonErrors: this.commonMisconceptions.linear_inequalities,
            assessmentQuestions: this.assessmentQuestions.linear_inequalities,
            contextualScenarios: this.contextualScenarios.linear_inequalities
        };

        if (/fraction|decimal|coefficient/i.test(input)) {
            content.focus = 'fractionalCoefficients';
        } else if (/no.?solution|contradict/i.test(input)) {
            content.focus = 'noSolutionCase';
        } else if (/all.?real|always.?true/i.test(input)) {
            content.focus = 'allRealsCase';
        } else if (/negative.*coefficient|coefficient.*negative/i.test(input)) {
            content.focus = 'reversalRule';
        }

        return content;
    }

    handleCompoundInequalities(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Compound Inequalities",
            category: 'inequalities',
            summary: "Compound inequalities connect two inequalities with AND (both must hold — intersection) or OR (at least one must hold — union). AND produces a single bounded or empty interval; OR produces two separate rays or all real numbers.",

            definitions: {
                compoundInequality: {
                    definition: "Two inequalities joined by the logical connective AND or OR",
                    AND: "x satisfies P AND Q if x satisfies both P and Q simultaneously",
                    OR: "x satisfies P OR Q if x satisfies at least one of P or Q"
                },
                intersection: {
                    definition: "The set of values satisfying BOTH conditions; the overlap of both solution sets",
                    notation: "A ∩ B — read 'A intersect B'",
                    numberLineInterpretation: "The region shaded by both inequalities on the number line"
                },
                union: {
                    definition: "The set of values satisfying AT LEAST ONE condition; the combined region of both solution sets",
                    notation: "A ∪ B — read 'A union B'",
                    numberLineInterpretation: "All regions shaded by either inequality on the number line"
                },
                threePartInequality: {
                    definition: "A compact AND inequality written as a < expression < b",
                    equivalence: "a < 2x + 1 < b is equivalent to '2x + 1 > a AND 2x + 1 < b'",
                    requirement: "Three-part form is valid only when the same variable expression appears in the middle part"
                }
            },

            andInequalitySolving: {
                method: "Solve each inequality independently; find the intersection of the two solution sets",
                intersectionRules: {
                    overlappingIntervals: "The intersection is the overlapping portion",
                    disjointIntervals: "If solution sets do not overlap, intersection = ∅ (no solution)",
                    oneContainsOther: "If one solution set contains the other, intersection = the smaller set",
                    example: "x > −1 AND x < 4: both conditions hold for −1 < x < 4 → (−1, 4)"
                },
                graphicalMethod: {
                    step1: "Graph first inequality's solution on number line",
                    step2: "Graph second inequality's solution on same number line (different colour or line)",
                    step3: "The AND solution is where BOTH are shaded"
                },
                threePartMethod: {
                    principle: "Perform the SAME operation on ALL THREE parts simultaneously",
                    steps: [
                        "Isolate the middle expression by applying identical operations to left, middle, and right",
                        "Each operation maintains equivalence of all three parts",
                        "Never operate on only two parts of a three-part inequality"
                    ],
                    example: {
                        expression: "−3 < 2x + 1 < 7",
                        step1: "−3 − 1 < 2x < 7 − 1   →   −4 < 2x < 6",
                        step2: "−2 < x < 3",
                        interval: "(−2, 3)"
                    }
                }
            },

            orInequalitySolving: {
                method: "Solve each inequality independently; find the union of the two solution sets",
                unionRules: {
                    separateIntervals: "If solution sets do not overlap, union = both intervals joined with ∪",
                    overlappingIntervals: "If solution sets overlap, union = the larger combined interval",
                    complementaryIntervals: "If solution sets together cover all reals, union = (−∞, +∞)",
                    example: "x < −1 OR x > 3: union = (−∞, −1) ∪ (3, +∞)"
                },
                graphicalMethod: {
                    step1: "Graph each inequality's solution on the number line",
                    step2: "The OR solution is any region shaded by EITHER inequality"
                }
            },

            workedExamples: [
                {
                    title: "AND inequality — bounded interval",
                    expression: "x + 2 > 1 AND x − 3 < 2",
                    solvePart1: "x > −1",
                    solvePart2: "x < 5",
                    intersection: "x > −1 AND x < 5 → −1 < x < 5",
                    interval: "(−1, 5)",
                    numberLine: "Open circle at −1, open circle at 5, shaded between them"
                },
                {
                    title: "AND inequality — no solution",
                    expression: "2x − 1 > 7 AND 3x + 2 < 8",
                    solvePart1: "x > 4",
                    solvePart2: "x < 2",
                    intersection: "x > 4 AND x < 2 — impossible; no number is simultaneously greater than 4 and less than 2",
                    interval: "∅",
                    numberLine: "Two non-overlapping arrows with no shared region"
                },
                {
                    title: "OR inequality — two separate rays",
                    expression: "2x − 1 < −3 OR 3x + 2 > 11",
                    solvePart1: "x < −1",
                    solvePart2: "x > 3",
                    union: "x < −1 OR x > 3",
                    interval: "(−∞, −1) ∪ (3, +∞)",
                    numberLine: "Open circle at −1 with arrow left; open circle at 3 with arrow right"
                },
                {
                    title: "OR inequality — all real numbers",
                    expression: "x + 1 < 3 OR x − 2 > −4",
                    solvePart1: "x < 2",
                    solvePart2: "x > −2",
                    union: "x < 2 OR x > −2. Since every real number is either < 2 or > −2 (or both), the union is all reals",
                    interval: "(−∞, +∞)",
                    note: "Test x = 0: 0 < 2 ✓ → satisfies first condition. Test x = 100: 100 > −2 ✓ → satisfies second. Every real number satisfies at least one."
                },
                {
                    title: "Three-part inequality",
                    expression: "−5 ≤ 3x − 2 ≤ 7",
                    step1: "Add 2 to all three parts: −3 ≤ 3x ≤ 9",
                    step2: "Divide all three by 3 (positive — no reversal): −1 ≤ x ≤ 3",
                    interval: "[−1, 3]",
                    numberLine: "Closed circle at −1, closed circle at 3, shaded between them",
                    verify: "Test x = 0: −5 ≤ 3(0)−2 = −2 ≤ 7 ✓. Test x = 4: −5 ≤ 3(4)−2 = 10 ≤ 7 ✗"
                },
                {
                    title: "Three-part inequality with negative division",
                    expression: "4 < −2x + 2 ≤ 10",
                    step1: "Subtract 2 from all parts: 2 < −2x ≤ 8",
                    step2: "Divide by −2 — REVERSE BOTH inequality signs: −1 > x ≥ −4",
                    rewrite: "−4 ≤ x < −1 (rewriting in standard left-to-right order)",
                    interval: "[−4, −1)",
                    note: "When dividing a three-part inequality by a negative number, BOTH inequality signs reverse simultaneously"
                }
            ],

            setNotation: {
                AND: "{x : x > a} ∩ {x : x < b} = {x : a < x < b}",
                OR: "{x : x < a} ∪ {x : x > b}",
                interval_to_set: "(a, b) = {x ∈ ℝ : a < x < b}"
            },

            connectionToOtherTopics: {
                absoluteValue: "Both |x| < c and |x| > c resolve into compound inequalities — AND and OR respectively",
                linearProgramming: "Systems of linear inequalities are compound AND conditions in two variables",
                domains: "Compound inequalities naturally express restricted domains (e.g., x > 0 AND x ≠ 2)"
            },

            commonErrors: this.commonMisconceptions.compound_inequalities,
            assessmentQuestions: this.assessmentQuestions.compound_inequalities,
            contextualScenarios: this.contextualScenarios.compound_inequalities
        };

        if (/three.?part|double|middle/i.test(input)) {
            content.focus = 'threePartInequality';
        } else if (/\bor\b/i.test(input)) {
            content.focus = 'orUnion';
        } else if (/\band\b/i.test(input)) {
            content.focus = 'andIntersection';
        } else if (/no.?solution|empty/i.test(input)) {
            content.focus = 'noSolution';
        }

        return content;
    }

    handleAbsoluteValueInequalities(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Absolute Value Inequalities",
            category: 'inequalities',
            summary: "Absolute value measures distance from zero on the number line. |expression| < c gives a bounded interval (AND compound inequality); |expression| > c gives two separate rays (OR compound inequality). Always identify the sign of c before applying any rule.",

            definitions: {
                absoluteValue: {
                    definition: "The distance of a number from zero on the number line; always non-negative",
                    algebraicDefinition: "|x| = x if x ≥ 0; |x| = −x if x < 0",
                    distanceInterpretation: "|x − c| = the distance between x and c on the number line",
                    examples: "|5| = 5; |−7| = 7; |0| = 0; |x − 3| = distance from x to 3"
                },
                neighbourhood: {
                    definition: "The set of all points within distance r of centre c",
                    inequality: "|x − c| < r defines the open interval (c − r, c + r)",
                    closed: "|x − c| ≤ r defines the closed interval [c − r, c + r]"
                }
            },

            coreCases: {
                lessThan: {
                    form: "|ax + b| < c",
                    prerequisite: "c must be positive for any solution to exist",
                    equivalent: "−c < ax + b < c   (AND compound inequality)",
                    solution: "A single bounded interval",
                    memory: "'Less thAND' — less-than absolute value → AND → single interval",
                    proof: "|ax+b| < c means ax+b is within distance c of 0, so −c < ax+b < c",
                    steps: [
                        "Confirm c > 0",
                        "Write −c < ax + b < c",
                        "Solve the three-part inequality by operating on all three parts simultaneously",
                        "Write solution in interval notation"
                    ]
                },
                greaterThan: {
                    form: "|ax + b| > c",
                    prerequisite: "Solution is all reals if c < 0; standard procedure if c ≥ 0",
                    equivalent: "ax + b < −c   OR   ax + b > c   (OR compound inequality)",
                    solution: "Two separate rays",
                    memory: "'GreatOR than' — greater-than absolute value → OR → two intervals",
                    proof: "|ax+b| > c means ax+b is more than distance c from 0, so it must be to the left of −c or to the right of c",
                    steps: [
                        "Write two separate inequalities: ax + b < −c and ax + b > c",
                        "Solve each independently",
                        "Join with OR; express as union of two intervals"
                    ]
                },
                nonStrict: {
                    lessThanOrEqual: "|ax + b| ≤ c → −c ≤ ax + b ≤ c (closed interval with ≤)",
                    greaterThanOrEqual: "|ax + b| ≥ c → ax + b ≤ −c OR ax + b ≥ c (closed endpoint rays)"
                }
            },

            specialCases: {
                cPositive: "Normal procedure — apply AND or OR as appropriate",
                cZero: {
                    lessThan: "|expr| < 0 — absolute value is never negative → No solution (∅)",
                    equal: "|expr| = 0 → expr = 0 (single point solution)",
                    greaterThan: "|expr| > 0 → expr ≠ 0 (all reals except the zero of the expression)",
                    greaterOrEqual: "|expr| ≥ 0 — always true for all real numbers → (−∞, +∞)"
                },
                cNegative: {
                    lessThan: "|expr| < c where c < 0 — impossible (absolute value is always ≥ 0 > c) → No solution (∅)",
                    greaterThan: "|expr| > c where c < 0 — always true (absolute value is always ≥ 0 > c) → All real numbers (−∞, +∞)"
                },
                isolateFirst: {
                    importance: "Must isolate the absolute value expression before splitting into cases",
                    example: "3|x − 2| + 1 < 10 → 3|x − 2| < 9 → |x − 2| < 3 → THEN split into AND compound"
                }
            },

            workedExamples: [
                {
                    title: "Basic less-than (bounded interval)",
                    expression: "|2x − 3| < 7",
                    check: "c = 7 > 0 ✓",
                    split: "−7 < 2x − 3 < 7",
                    step1: "−4 < 2x < 10   (added 3 to all parts)",
                    step2: "−2 < x < 5     (divided by 2)",
                    interval: "(−2, 5)",
                    geometricMeaning: "All points within distance 7 of x = 3/2 on the number line",
                    verify: "Test x = 0: |2(0)−3| = 3 < 7 ✓. Test x = 6: |2(6)−3| = 9 < 7 ✗"
                },
                {
                    title: "Basic greater-than (two rays)",
                    expression: "|3x + 1| ≥ 5",
                    check: "c = 5 > 0 ✓",
                    split: "3x + 1 ≤ −5   OR   3x + 1 ≥ 5",
                    solvePart1: "3x ≤ −6 → x ≤ −2",
                    solvePart2: "3x ≥ 4 → x ≥ 4/3",
                    interval: "(−∞, −2] ∪ [4/3, +∞)",
                    verify: "Test x = −3: |3(−3)+1| = |−8| = 8 ≥ 5 ✓. Test x = 0: |1| = 1 ≥ 5 ✗"
                },
                {
                    title: "Isolate absolute value first",
                    expression: "3|x − 2| + 1 < 10",
                    step1: "3|x − 2| < 9   (subtracted 1)",
                    step2: "|x − 2| < 3    (divided by 3 — positive, no change)",
                    step3: "−3 < x − 2 < 3  (AND compound inequality)",
                    step4: "−1 < x < 5     (added 2)",
                    interval: "(−1, 5)",
                    note: "Isolating |x − 2| is essential before splitting — do not split before isolation"
                },
                {
                    title: "Negative right side — no solution",
                    expression: "|x − 4| < −2",
                    check: "c = −2 < 0",
                    conclusion: "Absolute value is always ≥ 0; it can never be less than −2",
                    interval: "∅ (no solution)",
                    verify: "There is no real number for which distance from 4 is negative"
                },
                {
                    title: "Negative right side — all reals",
                    expression: "|2x + 1| > −3",
                    check: "c = −3 < 0",
                    conclusion: "Absolute value is always ≥ 0 > −3; every real number satisfies this",
                    interval: "(−∞, +∞)",
                    verify: "Test x = 0: |1| = 1 > −3 ✓. Test x = −1000: |−1999| = 1999 > −3 ✓"
                },
                {
                    title: "Greater-than-or-equal with zero",
                    expression: "|3x − 6| ≥ 0",
                    check: "c = 0",
                    conclusion: "Absolute value is always ≥ 0; every real number satisfies this",
                    interval: "(−∞, +∞)",
                    note: "This is trivially true for all x — unlike |expr| > 0 which excludes the zero"
                },
                {
                    title: "Two absolute values",
                    expression: "|x + 1| < |x − 3|",
                    method: "Squaring both sides (valid since both sides ≥ 0): (x+1)² < (x−3)²",
                    expand: "x²+2x+1 < x²−6x+9 → 8x < 8 → x < 1",
                    interval: "(−∞, 1)",
                    geometricMeaning: "Points closer to −1 than to 3 — those to the left of the midpoint 1"
                }
            ],

            distanceApplications: {
                toleranceProblems: {
                    form: "|measurement − target| ≤ tolerance",
                    example: "|x − 50| ≤ 0.5 means x is within 0.5 of the target of 50: 49.5 ≤ x ≤ 50.5",
                    realWorld: "Engineering tolerances, quality control, measurement uncertainty"
                },
                errorBounds: {
                    form: "|approximate − exact| < ε",
                    example: "|x − π| < 0.001 means x approximates π to within 0.001",
                    realWorld: "Numerical methods, scientific measurement, GPS accuracy"
                }
            },

            connectionToOtherTopics: {
                compoundInequalities: "Every absolute value inequality resolves into a compound AND or OR inequality",
                distanceMetric: "|x − y| defines the standard metric on the real number line",
                epsilonDelta: "|x − c| < δ appears in the ε-δ definition of limits in calculus",
                complexNumbers: "For complex z, |z| < r defines a disc in the complex plane"
            },

            commonErrors: this.commonMisconceptions.absolute_value_inequalities,
            assessmentQuestions: this.assessmentQuestions.absolute_value_inequalities,
            contextualScenarios: this.contextualScenarios.absolute_value_inequalities
        };

        if (/isolat|first.*step/i.test(input)) {
            content.focus = 'isolatingAbsoluteValue';
        } else if (/two.*absolute|absolute.*absolute/i.test(input)) {
            content.focus = 'twoAbsoluteValues';
        } else if (/negative.*side|no.*solution/i.test(input)) {
            content.focus = 'specialCases';
        } else if (/distance|tolerance|error/i.test(input)) {
            content.focus = 'distanceInterpretation';
        }

        return content;
    }

    handleQuadraticInequalities(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Quadratic Inequalities",
            category: 'inequalities',
            summary: "A quadratic inequality asks where the parabola y = ax² + bx + c lies above or below the x-axis. Find the roots first, then use a sign chart or parabola sketch to determine which regions satisfy the inequality.",

            definitions: {
                quadraticInequality: {
                    definition: "An inequality of the form ax² + bx + c OP 0 (OP is <, >, ≤, or ≥) where a ≠ 0",
                    graphicalMeaning: "Asks for x-values where the parabola y = ax² + bx + c is above or below the x-axis"
                },
                roots: {
                    definition: "The x-values where ax² + bx + c = 0; the boundary points of the solution",
                    role: "Roots divide the real line into regions within which the quadratic maintains a constant sign"
                },
                signChart: {
                    definition: "A table tracking the sign of an expression in each region defined by its critical values",
                    purpose: "Determines where the quadratic is positive or negative without evaluating every point"
                }
            },

            methodSteps: {
                fullProcedure: [
                    "Step 1: Rearrange so one side is 0 — move all terms to the left side",
                    "Step 2: Find roots — solve ax² + bx + c = 0 by factoring, completing the square, or quadratic formula",
                    "Step 3: Determine the number of roots using the discriminant Δ = b² − 4ac",
                    "Step 4: If two distinct roots r₁ < r₂: label three regions on the number line: (−∞, r₁), (r₁, r₂), (r₂, +∞)",
                    "Step 5: Determine the sign of the quadratic in each region (test a point or use the parabola sign rule)",
                    "Step 6: Identify regions satisfying the inequality condition",
                    "Step 7: Apply endpoint rule — include endpoints for ≤/≥; exclude for </>"
                ],
                rearrangementNote: "Always rearrange to ax² + bx + c OP 0 BEFORE applying sign rules — the sign rules assume one side is 0"
            },

            discriminantCases: {
                positiveDelta: {
                    condition: "Δ = b² − 4ac > 0",
                    roots: "Two distinct real roots r₁ < r₂",
                    regions: "Three regions: (−∞, r₁), (r₁, r₂), (r₂, +∞)",
                    parabola: "Crosses x-axis at two points",
                    signPattern_a_positive: "Sign pattern: +, −, + (positive outside roots, negative between)",
                    signPattern_a_negative: "Sign pattern: −, +, − (negative outside roots, positive between)"
                },
                zeroDelta: {
                    condition: "Δ = b² − 4ac = 0",
                    roots: "One repeated root r (touching point)",
                    regions: "Two regions: (−∞, r) and (r, +∞); both same sign as a",
                    parabola: "Touches x-axis at exactly one point — tangent to x-axis",
                    signPattern: "Both regions have same sign as a; expression equals 0 only at x = r"
                },
                negativeDelta: {
                    condition: "Δ = b² − 4ac < 0",
                    roots: "No real roots",
                    regions: "Entire real line has one constant sign: same sign as a",
                    parabola: "Does not touch x-axis at all",
                    consequence: "ax²+bx+c > 0 for all x if a > 0; < 0 for all x if a < 0"
                }
            },

            signRules: {
                aPositive_twoRoots: {
                    parabola: "Opens upward; positive outside roots, negative between roots",
                    greaterThanZero: "x < r₁ or x > r₂ → (−∞, r₁) ∪ (r₂, +∞)",
                    lessThanZero: "r₁ < x < r₂ → (r₁, r₂)"
                },
                aNegative_twoRoots: {
                    parabola: "Opens downward; negative outside roots, positive between roots",
                    greaterThanZero: "r₁ < x < r₂ → (r₁, r₂)",
                    lessThanZero: "x < r₁ or x > r₂ → (−∞, r₁) ∪ (r₂, +∞)"
                },
                aPositive_noRoots: {
                    always: "Expression always positive — solution to > 0 is (−∞, +∞); solution to < 0 is ∅"
                },
                aNegative_noRoots: {
                    always: "Expression always negative — solution to < 0 is (−∞, +∞); solution to > 0 is ∅"
                },
                repeatedRoot: {
                    nonStrict: "For a > 0: (x−r)² ≥ 0 for all x → solution to ≥ 0 is (−∞, +∞); solution to ≤ 0 is {r}",
                    strict: "For a > 0: (x−r)² > 0 for x ≠ r → solution to > 0 is (−∞, r) ∪ (r, +∞); solution to < 0 is ∅"
                }
            },

            signChartConstruction: {
                factoredForm: {
                    method: "If factored as a(x − r₁)(x − r₂), track sign of each factor separately",
                    rows: "Row 1: (x − r₁); Row 2: (x − r₂); Row 3: product a(x−r₁)(x−r₂)",
                    signRulePerFactor: "Factor (x − r) is negative for x < r; positive for x > r",
                    example: "(x−2)(x−5): for x<2 both factors negative → product positive; 2<x<5 first positive, second negative → product negative; x>5 both positive → product positive"
                }
            },

            workedExamples: [
                {
                    title: "Standard quadratic — two roots, a > 0",
                    expression: "x² − 5x + 6 < 0",
                    step1: "Already in standard form (right side = 0)",
                    step2: "Factor: (x − 2)(x − 3) < 0. Roots: x = 2, x = 3",
                    step3: "Δ = 25 − 24 = 1 > 0 → two distinct roots",
                    signChart: [
                        ["Region", "x < 2", "x = 2", "2 < x < 3", "x = 3", "x > 3"],
                        ["(x − 2)", "−", "0", "+", "+", "+"],
                        ["(x − 3)", "−", "−", "−", "0", "+"],
                        ["Product", "+", "0", "−", "0", "+"]
                    ],
                    solution: "Product < 0 in region 2 < x < 3",
                    interval: "(2, 3)",
                    verify: "Test x = 2.5: (0.5)(−0.5) = −0.25 < 0 ✓. Test x = 0: (−2)(−3) = 6 > 0 ✗"
                },
                {
                    title: "Rearrangement required",
                    expression: "2x² > 5x + 3",
                    step1: "Rearrange: 2x² − 5x − 3 > 0",
                    step2: "Factor: (2x + 1)(x − 3) > 0. Roots: x = −1/2, x = 3",
                    signChart: [
                        ["Region", "x < −1/2", "−1/2 < x < 3", "x > 3"],
                        ["(2x+1)", "−", "+", "+"],
                        ["(x−3)", "−", "−", "+"],
                        ["Product", "+", "−", "+"]
                    ],
                    solution: "Product > 0 in regions x < −1/2 and x > 3",
                    interval: "(−∞, −1/2) ∪ (3, +∞)",
                    verify: "Test x = −1: (−1)(−4) = 4 > 0 ✓. Test x = 0: (1)(−3) = −3 > 0 ✗"
                },
                {
                    title: "Perfect square — repeated root",
                    expression: "x² − 6x + 9 ≥ 0",
                    step1: "Factor: (x − 3)² ≥ 0",
                    step2: "A perfect square is always ≥ 0; equals 0 only at x = 3",
                    solution: "All real numbers",
                    interval: "(−∞, +∞)",
                    note: "The solution to (x−3)² < 0 would be ∅; (x−3)² > 0 would be (−∞,3) ∪ (3,+∞)"
                },
                {
                    title: "No real roots — negative discriminant",
                    expression: "x² + 2x + 5 > 0",
                    step1: "Discriminant: 4 − 20 = −16 < 0 → no real roots",
                    step2: "Leading coefficient a = 1 > 0 → parabola always above x-axis",
                    solution: "All real numbers",
                    interval: "(−∞, +∞)",
                    note: "For x² + 2x + 5 < 0: no solution (∅) — expression never negative"
                },
                {
                    title: "a < 0 — downward parabola",
                    expression: "−x² + 4x − 3 ≥ 0",
                    step1: "Factor out −1: −(x² − 4x + 3) ≥ 0 → (x² − 4x + 3) ≤ 0  (reversed sign)",
                    step2: "Factor: (x − 1)(x − 3) ≤ 0. Roots: x = 1, x = 3",
                    step3: "a = 1 > 0 in (x−1)(x−3): negative between roots",
                    solution: "1 ≤ x ≤ 3",
                    interval: "[1, 3]",
                    alternativeMethod: "Directly: a = −1 < 0; positive between roots 1 and 3 → −x²+4x−3 ≥ 0 for 1 ≤ x ≤ 3"
                },
                {
                    title: "Using quadratic formula for irrational roots",
                    expression: "x² − 3x − 1 > 0",
                    roots: "x = (3 ± √13)/2; r₁ = (3 − √13)/2 ≈ −0.303; r₂ = (3 + √13)/2 ≈ 3.303",
                    signPattern: "a = 1 > 0 → positive outside roots",
                    solution: "x < (3−√13)/2 or x > (3+√13)/2",
                    interval: "(−∞, (3−√13)/2) ∪ ((3+√13)/2, +∞)"
                }
            ],

            graphicalInterpretation: {
                above_x_axis: "ax² + bx + c > 0 corresponds to x-values where parabola is ABOVE x-axis",
                below_x_axis: "ax² + bx + c < 0 corresponds to x-values where parabola is BELOW x-axis",
                on_x_axis: "ax² + bx + c = 0 gives the x-intercepts (roots)",
                vertex: "The vertex gives the maximum (a < 0) or minimum (a > 0) value — relevant for feasibility checks"
            },

            connectionToOtherTopics: {
                polynomialInequalities: "Quadratic inequalities are the degree-2 case of the general polynomial inequality procedure",
                completingTheSquare: "Completing the square reveals the vertex and confirms the sign for no-root cases",
                discriminant: "The discriminant determines the number of solutions and the structure of the solution set",
                parabolaGraphs: "Graphing the parabola provides a complete visual solution to any quadratic inequality"
            },

            commonErrors: this.commonMisconceptions.quadratic_inequalities,
            assessmentQuestions: this.assessmentQuestions.quadratic_inequalities,
            contextualScenarios: this.contextualScenarios.quadratic_inequalities
        };

        if (/sign.*chart|chart/i.test(input)) {
            content.focus = 'signChartMethod';
        } else if (/graph|parabola|visual/i.test(input)) {
            content.focus = 'graphicalMethod';
        } else if (/discriminant|no.*root|repeated.*root/i.test(input)) {
            content.focus = 'discriminantCases';
        } else if (/rearrang|standard.*form/i.test(input)) {
            content.focus = 'rearrangement';
        }

        return content;
    }

    handlePolynomialInequalities(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Polynomial Inequalities",
            category: 'inequalities',
            summary: "Polynomial inequalities of degree ≥ 3 are solved by completely factoring the polynomial and constructing a comprehensive sign chart. Multiplicity determines whether each root causes a sign change (odd multiplicity) or not (even multiplicity).",

            definitions: {
                polynomialInequality: {
                    definition: "An inequality P(x) OP 0 where P(x) is a polynomial of degree n ≥ 1",
                    generalForm: "aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀ OP 0"
                },
                multiplicity: {
                    definition: "The number of times a root r appears as a factor in the fully factored polynomial",
                    significance: "Determines the behaviour of the polynomial at that root — whether it crosses or touches the x-axis",
                    oddMultiplicity: "Sign changes at this root — polynomial crosses x-axis",
                    evenMultiplicity: "No sign change at this root — polynomial touches but does not cross x-axis"
                },
                leadingTerm: {
                    definition: "The term with the highest power of x: aₙxⁿ",
                    roleInSignChart: "Determines the sign of the polynomial for |x| very large (rightmost region sign)",
                    rule: "For large positive x: sign = sign of aₙ (if n even) or sign of aₙ (if n odd); for large negative x: sign = sign of aₙ if n even; opposite sign of aₙ if n odd"
                }
            },

            signChartMethod: {
                fullProcedure: [
                    "Step 1: Move all terms to one side; right side = 0",
                    "Step 2: Factor the polynomial COMPLETELY (GCF first, then all possible factors)",
                    "Step 3: Identify all real roots and their multiplicities",
                    "Step 4: Place all distinct roots on a number line in ascending order",
                    "Step 5: Label n+1 regions (n = number of distinct roots)",
                    "Step 6: Determine the sign of the polynomial in the RIGHTMOST region using the leading term",
                    "Step 7: Moving left through each root, apply multiplicity rule:",
                    "         — Odd multiplicity: CHANGE the sign",
                    "         — Even multiplicity: KEEP the same sign",
                    "Step 8: Verify with at least one test point from any region",
                    "Step 9: Identify regions satisfying the inequality; apply endpoint inclusion rule"
                ],
                multiplicityRuleDetail: {
                    whyOddChanges: "An odd-multiplicity factor (x−r)^(2k+1) changes sign as x passes through r; the product of all factors therefore changes overall sign",
                    whyEvenDoesNot: "An even-multiplicity factor (x−r)^(2k) is always non-negative; it does not change sign at r — the overall sign is unaffected",
                    practicalApplication: "Allows building the entire sign chart from the rightmost region outward without test points for every region"
                },
                irreducibleQuadraticFactors: {
                    definition: "A quadratic factor with negative discriminant: always positive for all real x",
                    treatment: "Does not change sign anywhere — contributes a constant positive factor to the sign chart; can be ignored in sign analysis",
                    example: "(x² + x + 1) has Δ = 1 − 4 = −3 < 0 → always positive → does not affect sign chart"
                }
            },

            workedExamples: [
                {
                    title: "Cubic inequality — three distinct roots",
                    expression: "(x + 2)(x − 1)(x − 3) > 0",
                    roots: "x = −2, x = 1, x = 3 (all multiplicity 1 — all odd)",
                    regions: "4 regions: x<−2, −2<x<1, 1<x<3, x>3",
                    rightmostSign: "Leading term = x³ (a=1>0, odd degree) → positive for large positive x → rightmost region: +",
                    signChart: [
                        ["Region", "x < −2", "−2 < x < 1", "1 < x < 3", "x > 3"],
                        ["Sign", "−", "+", "−", "+"],
                        ["Sign change at:", "(odd mult.)", "(odd mult.)", "(odd mult.)", ""]
                    ],
                    derivation: "Rightmost: +. Moving left through x=3 (odd mult.): −. Through x=1 (odd): +. Through x=−2 (odd): −.",
                    solution: "Need > 0: regions −2<x<1 and x>3",
                    interval: "(−2, 1) ∪ (3, +∞)",
                    verify: "Test x = 0: (2)(−1)(−3) = 6 > 0 ✓. Test x = 2: (4)(1)(−1) = −4 > 0 ✗"
                },
                {
                    title: "Even multiplicity — no sign change",
                    expression: "x²(x − 4) ≤ 0",
                    roots: "x = 0 (multiplicity 2 — even); x = 4 (multiplicity 1 — odd)",
                    rightmostSign: "Leading term = x³ → positive for large positive x → rightmost: +",
                    signChart: [
                        ["Region", "x < 0", "0 < x < 4", "x > 4"],
                        ["Sign", "−", "−", "+"],
                        ["Change at x=0:", "Even — no change", "", ""],
                        ["Change at x=4:", "", "Odd — changes", ""]
                    ],
                    derivation: "Rightmost: +. Moving through x=4 (odd): −. Moving through x=0 (even): − (no change). Leftmost: −.",
                    solution: "Need ≤ 0: regions x<0, x=0, 0<x<4, x=4 → x ≤ 4",
                    interval: "(−∞, 4]",
                    note: "The even multiplicity at x=0 means the sign does not change there — both regions adjacent to x=0 are negative"
                },
                {
                    title: "Mixed multiplicities",
                    expression: "(x + 1)²(x − 2)³(x − 5) ≥ 0",
                    roots: "x = −1 (mult. 2, even); x = 2 (mult. 3, odd); x = 5 (mult. 1, odd)",
                    rightmostSign: "Leading term = x⁶ (positive, even degree) → + for large |x| → rightmost: +",
                    signChart: [
                        ["Region", "x < −1", "−1 < x < 2", "2 < x < 5", "x > 5"],
                        ["Sign", "+", "+", "−", "+"]
                    ],
                    derivation: "Rightmost: +. Through x=5 (odd): −. Through x=2 (odd): +. Through x=−1 (even): + (no change).",
                    solution: "Need ≥ 0: x<−1, x=−1, −1<x<2, x=2, x=5, x>5 → all except 2<x<5",
                    interval: "(−∞, 2] ∪ [5, +∞)",
                    note: "The endpoint x=2 is included because expression = 0 there and we need ≥ 0"
                },
                {
                    title: "Polynomial requiring factoring first",
                    expression: "x³ − x > 0",
                    factor: "x(x² − 1) = x(x+1)(x−1)",
                    roots: "x = −1, x = 0, x = 1 (all multiplicity 1)",
                    rightmostSign: "Leading term x³, a=1>0 → positive rightmost",
                    signs: "Rightmost: +; through x=1 (odd): −; through x=0 (odd): +; through x=−1 (odd): −",
                    interval: "(−1, 0) ∪ (1, +∞)",
                    verify: "Test x = 0.5: (0.5)(1.5)(−0.5) = −0.375 > 0? No — incorrect. Re-examine: (x)(x+1)(x−1) at x=0.5: (0.5)(1.5)(−0.5) = −0.375 < 0. Region (−1,0) at x=−0.5: (−0.5)(0.5)(−1.5) = 0.375 > 0 ✓"
                },
                {
                    title: "Quartic with irreducible quadratic factor",
                    expression: "(x² + 1)(x − 3)(x + 2) < 0",
                    factors: "(x² + 1): always positive (Δ = 0 − 4 < 0) → ignore in sign analysis",
                    effectiveInequality: "Sign determined entirely by (x − 3)(x + 2) < 0",
                    roots: "x = −2 and x = 3 (from (x+2)(x−3))",
                    interval: "(−2, 3)",
                    explanation: "Since x²+1 > 0 always, the inequality (x²+1)(x−3)(x+2) < 0 reduces to (x−3)(x+2) < 0"
                }
            ],

            endpointSummary: {
                strictInequality: "< or >: all critical points (roots) are excluded — open circles, open intervals",
                nonStrict: "≤ or ≥: roots where expression = 0 are included — closed circles, closed intervals",
                undefinedPoints: "Not applicable for pure polynomial inequalities (polynomials are defined everywhere)"
            },

            connectionToOtherTopics: {
                quadraticInequalities: "Polynomial inequalities with n = 2; sign chart method is identical",
                rationalInequalities: "Rational inequalities use the same sign chart method with additional undefined points from the denominator",
                factorization: "Complete factorization is a prerequisite — partial factorization leads to missing critical points",
                calculusDerivatives: "Sign of f'(x) (first derivative) determines increasing/decreasing intervals — solved as a polynomial inequality"
            },

            commonErrors: this.commonMisconceptions.polynomial_inequalities,
            assessmentQuestions: this.assessmentQuestions.polynomial_inequalities,
            contextualScenarios: this.contextualScenarios.polynomial_inequalities
        };

        if (/multiplicity|double.*root|triple.*root/i.test(input)) {
            content.focus = 'multiplicityRule';
        } else if (/irreducible|quadratic.*factor|always.*positive/i.test(input)) {
            content.focus = 'irreducibleQuadraticFactor';
        } else if (/leading|rightmost|sign.*first/i.test(input)) {
            content.focus = 'leadingTermSignRule';
        }

        return content;
    }

    handleRadicalInequalities(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Radical Inequalities",
            category: 'inequalities',
            summary: "Radical inequalities require two simultaneous conditions: the algebraic inequality and the domain restriction (radicand ≥ 0 for even-index roots). Always find the domain first, solve the inequality algebraically, then intersect both conditions. Check for extraneous solutions.",

            definitions: {
                radicand: {
                    definition: "The expression under the radical sign",
                    restriction: "For even-index radicals (square root, fourth root, etc.): radicand must be ≥ 0",
                    oddIndex: "For odd-index radicals (cube root, fifth root, etc.): radicand can be any real number"
                },
                domain: {
                    definition: "The set of all x-values for which the radical expression is defined",
                    evenRoot: "√f(x) requires f(x) ≥ 0 — solve this inequality first",
                    oddRoot: "∛f(x) is defined for all real x — no domain restriction"
                },
                extraneousSolution: {
                    definition: "A value that satisfies the transformed (squared) inequality but NOT the original radical inequality",
                    cause: "Squaring both sides can introduce solutions that are invalid in the original",
                    prevention: "Always verify final solutions in the original radical inequality"
                }
            },

            solvingStrategies: {
                evenRootFullProcess: {
                    step1: "DOMAIN: Set radicand ≥ 0 and solve — this is the domain D",
                    step2: "SIGN CHECK: Determine the sign of the right-hand side (RHS)",
                    step3a: {
                        condition: "If RHS < 0:",
                        lessThan: "√f(x) < negative → No solution (√f(x) ≥ 0 > negative always)",
                        greaterThan: "√f(x) > negative → All domain values (true whenever f(x) ≥ 0) → solution = D"
                    },
                    step3b: {
                        condition: "If RHS ≥ 0:",
                        procedure: "Square both sides — valid since both sides are non-negative",
                        lessThan: "√f(x) < g(x) [g(x) ≥ 0]: square → f(x) < [g(x)]² → solve → intersect with D",
                        greaterThan: "√f(x) > g(x) [g(x) ≥ 0]: square → f(x) > [g(x)]² → solve → intersect with D"
                    },
                    step4: "INTERSECT: Final solution = (algebraic solution) ∩ D",
                    step5: "VERIFY: Substitute test values into ORIGINAL inequality"
                },
                caseAnalysisMethod: {
                    use: "When RHS contains x (e.g., √(x+1) > x − 1), split into cases based on RHS sign",
                    case1: "Case 1: RHS < 0 (i.e., g(x) < 0): √f(x) is always ≥ 0 > RHS → all x in this case's range within D satisfy inequality",
                    case2: "Case 2: RHS ≥ 0 (i.e., g(x) ≥ 0): both sides non-negative → square both sides → solve → intersect with D and case constraint",
                    combine: "Union of solutions from Case 1 and Case 2"
                },
                oddRootMethod: {
                    procedure: "No domain restriction needed; odd root function is monotone for all reals",
                    cubingBothSides: "∛f(x) < g(x) → f(x) < [g(x)]³ (cubing preserves inequality direction)",
                    note: "Valid for all real values — no sign check required"
                }
            },

            workedExamples: [
                {
                    title: "Basic square root less-than",
                    expression: "√(2x − 3) < 5",
                    step1: "Domain: 2x − 3 ≥ 0 → x ≥ 3/2. Domain D = [3/2, +∞)",
                    step2: "RHS = 5 > 0 → can square both sides",
                    step3: "Square: 2x − 3 < 25 → 2x < 28 → x < 14",
                    step4: "Intersect: x ≥ 3/2 AND x < 14",
                    interval: "[3/2, 14)",
                    verify: "Test x = 5: √(10−3) = √7 ≈ 2.65 < 5 ✓. Test x = 15: not in domain ✗. Test x = 1: not in domain (radicand negative)"
                },
                {
                    title: "Square root greater-than with constant",
                    expression: "√(x + 4) ≥ 3",
                    step1: "Domain: x + 4 ≥ 0 → x ≥ −4. D = [−4, +∞)",
                    step2: "RHS = 3 ≥ 0 → square both sides",
                    step3: "x + 4 ≥ 9 → x ≥ 5",
                    step4: "Intersect: x ≥ −4 AND x ≥ 5 → x ≥ 5",
                    interval: "[5, +∞)",
                    verify: "Test x = 9: √13 ≈ 3.6 ≥ 3 ✓. Test x = 0: √4 = 2 < 3 ✗"
                },
                {
                    title: "RHS contains x — case analysis",
                    expression: "√(x + 1) > x − 1",
                    step1: "Domain: x + 1 ≥ 0 → x ≥ −1. D = [−1, +∞)",
                    case1: {
                        condition: "x − 1 < 0, i.e., x < 1",
                        reasoning: "LHS = √(x+1) ≥ 0 > (x−1). Inequality automatically satisfied for all x in D with x < 1",
                        partialSolution: "[−1, 1)"
                    },
                    case2: {
                        condition: "x − 1 ≥ 0, i.e., x ≥ 1",
                        bothSidesNonNeg: "Can square: x + 1 > (x−1)² = x² − 2x + 1 → 0 > x² − 3x → 0 > x(x−3) → 0 < x < 3",
                        intersectWithCase: "Intersect with x ≥ 1: 1 ≤ x < 3"
                    },
                    combinedSolution: "[−1, 1) ∪ [1, 3) = [−1, 3)",
                    interval: "[−1, 3)",
                    verify: "Test x = 0: √1 = 1 > −1 ✓. Test x = 2: √3 ≈ 1.73 > 1 ✓. Test x = 4: √5 ≈ 2.24 > 3 ✗"
                },
                {
                    title: "Negative RHS — all domain values",
                    expression: "√(3x + 1) > −4",
                    step1: "Domain: 3x + 1 ≥ 0 → x ≥ −1/3. D = [−1/3, +∞)",
                    step2: "RHS = −4 < 0. Since √(3x+1) ≥ 0 > −4 for all x in D, the inequality is always satisfied",
                    interval: "[−1/3, +∞)",
                    note: "The domain restriction is the entire constraint here — the inequality itself imposes no additional restriction"
                },
                {
                    title: "Negative RHS — no solution",
                    expression: "√(x + 5) < −1",
                    step1: "RHS = −1 < 0",
                    step2: "√(x+5) ≥ 0 always. A non-negative number cannot be less than −1",
                    interval: "∅ (no solution regardless of domain)"
                },
                {
                    title: "Cube root inequality — no domain restriction",
                    expression: "∛(2x − 1) > 3",
                    step1: "No domain restriction (cube root defined for all reals)",
                    step2: "Cube function is increasing → cube both sides (direction preserved)",
                    step3: "2x − 1 > 27 → 2x > 28 → x > 14",
                    interval: "(14, +∞)",
                    verify: "Test x = 15: ∛(29) ≈ 3.07 > 3 ✓. Test x = 0: ∛(−1) = −1 > 3 ✗"
                },
                {
                    title: "Squaring introduces extraneous solution — check required",
                    expression: "√(x + 3) ≤ x − 1",
                    step1: "Domain: x + 3 ≥ 0 → x ≥ −3. D = [−3, +∞)",
                    step2: "RHS = x − 1. Need to also ensure x − 1 ≥ 0 for squaring to be valid → x ≥ 1",
                    step3: "For x ≥ 1: square: x + 3 ≤ (x−1)² = x²−2x+1 → 0 ≤ x²−3x−2",
                    step4: "Roots of x²−3x−2=0: x = (3±√17)/2. Approximately: r₁ ≈ −0.56, r₂ ≈ 3.56",
                    step5: "x²−3x−2 ≥ 0 for x ≤ r₁ or x ≥ r₂. Intersect with x ≥ 1: x ≥ (3+√17)/2",
                    step6: "Also intersect with domain x ≥ −3: final answer x ≥ (3+√17)/2",
                    interval: "[(3+√17)/2, +∞)",
                    verify: "Must check in original: test x = 4: √7 ≈ 2.65 ≤ 3 ✓. Test x = 0: in domain, but x < 1, so case doesn't apply. For x = 0 case: would need RHS < 0 which gives no solution."
                }
            ],

            domainIntersectionVisualized: {
                description: "The domain D and the algebraic solution A are both computed on the number line; the final answer is the portion of A that lies inside D",
                method: "Shade D; shade A; final answer is the doubly-shaded region"
            },

            connectionToOtherTopics: {
                domainRestrictionsInFunctions: "Radical inequality domain restriction is identical to the domain of the corresponding radical function",
                quadraticInequalities: "Squaring both sides often leads to a quadratic inequality to solve",
                absoluteValue: "√(x²) = |x| — connects absolute value to square root and their respective inequalities",
                realAnalysis: "Domain restrictions for radicals appear in Calculus I when finding domains and ranges"
            },

            commonErrors: this.commonMisconceptions.radical_inequalities,
            assessmentQuestions: this.assessmentQuestions.radical_inequalities,
            contextualScenarios: this.contextualScenarios.radical_inequalities
        };

        if (/cube.*root|odd.*root/i.test(input)) {
            content.focus = 'oddRootCase';
        } else if (/extraneous|check.*solution/i.test(input)) {
            content.focus = 'extraneousSolutions';
        } else if (/domain|radicand/i.test(input)) {
            content.focus = 'domainRestriction';
        } else if (/case.*analysis|rhs.*variable/i.test(input)) {
            content.focus = 'caseAnalysis';
        }

        return content;
    }

    handleRationalInequalities(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Rational Inequalities",
            category: 'inequalities',
            summary: "Rational inequalities must NEVER be solved by multiplying both sides by an expression containing x (its sign is unknown). Rearrange to f(x)/g(x) OP 0, combine into a single fraction, then construct a sign chart including both zeros (numerator) and undefined points (denominator). Undefined points are ALWAYS excluded from solutions.",

            definitions: {
                rationalExpression: {
                    definition: "A fraction whose numerator and denominator are polynomials",
                    form: "P(x)/Q(x) where P and Q are polynomials and Q(x) ≠ 0"
                },
                zeros: {
                    definition: "Values where the rational expression equals zero — numerator = 0 and denominator ≠ 0",
                    inclusionRule: "Include in solution for ≤ and ≥ (expression = 0 satisfies ≤ 0 and ≥ 0); exclude for < and >"
                },
                undefinedPoints: {
                    definition: "Values where the denominator equals zero — expression is undefined",
                    inclusionRule: "ALWAYS excluded from the solution — the expression does not exist at these points",
                    criticalDistinction: "Unlike zeros, undefined points are excluded regardless of whether the inequality is strict or non-strict"
                },
                criticalPoints: {
                    definition: "The combined set of zeros and undefined points — all values that divide the number line into regions for sign analysis",
                    numberLineRole: "n critical points create n+1 regions of constant sign"
                }
            },

            whyNotMultiply: {
                explanation: "When we multiply both sides of an inequality by an expression, the direction of the inequality depends on the sign of that expression. If the expression contains x, its sign varies — sometimes positive, sometimes negative. Multiplying without knowing the sign leads to an incorrect (or two separate) result.",
                correctApproach: "Move all terms to one side → create f(x)/g(x) OP 0 → use sign chart",
                example: {
                    wrong: "(x+1)/(x−2) > 3 → multiply both sides by (x−2) → gets x+1 > 3(x−2) → misses the case when x−2 < 0",
                    correct: "(x+1)/(x−2) − 3 > 0 → (x+1−3(x−2))/(x−2) > 0 → (7−2x)/(x−2) > 0 → sign chart"
                }
            },

            solvingSteps: {
                fullProcedure: [
                    "Step 1: Move all terms to ONE side — create OP 0 form",
                    "Step 2: Combine all fractions into a SINGLE fraction with one numerator and one denominator",
                    "Step 3: Factor numerator and denominator completely",
                    "Step 4: Find zeros: set numerator = 0 (where expression = 0)",
                    "Step 5: Find undefined points: set denominator = 0 (where expression is undefined)",
                    "Step 6: Place all critical points on a number line",
                    "Step 7: Test the sign of the rational expression in each region between critical points",
                    "Step 8: Select regions satisfying the inequality",
                    "Step 9: Apply endpoint rules:",
                    "        • Zeros of NUMERATOR: include if ≤ or ≥; exclude if < or >",
                    "        • Zeros of DENOMINATOR: ALWAYS exclude",
                    "Step 10: Write final solution in interval notation"
                ],
                combiningFractions: {
                    method: "Find common denominator; combine into single fraction; fully factor result",
                    example: "(x+1)/(x−2) > 3 → (x+1)/(x−2) − 3 > 0 → (x+1−3(x−2))/(x−2) > 0 → (7−2x)/(x−2) > 0"
                }
            },

            signChartForRational: {
                method: "Create rows for numerator factors and denominator factors; multiply signs for each region",
                denominatorSign: "Denominator zero creates a critical point with a vertical asymptote — sign changes at odd-multiplicity denominator roots; does not change at even-multiplicity",
                combinedSign: "Sign of rational expression = (sign of numerator) / (sign of denominator) = product of signs of all factors"
            },

            workedExamples: [
                {
                    title: "Basic rational inequality — already in OP 0 form",
                    expression: "(x − 2)/(x + 1) > 0",
                    criticalPoints: "Numerator zero: x = 2; Denominator zero (undefined): x = −1",
                    regions: "3 regions: x < −1, −1 < x < 2, x > 2",
                    signChart: [
                        ["Region", "x < −1", "−1 < x < 2", "x > 2"],
                        ["(x−2)", "−", "−", "+"],
                        ["(x+1)", "−", "+", "+"],
                        ["Fraction", "+", "−", "+"]
                    ],
                    solution: "Need > 0: x < −1 or x > 2 (both endpoints excluded — strict inequality and x=−1 undefined)",
                    interval: "(−∞, −1) ∪ (2, +∞)"
                },
                {
                    title: "Must rearrange first",
                    expression: "(2x − 1)/(x + 3) ≤ 2",
                    step1: "(2x−1)/(x+3) − 2 ≤ 0",
                    step2: "(2x−1 − 2(x+3))/(x+3) ≤ 0 → (2x−1−2x−6)/(x+3) ≤ 0 → −7/(x+3) ≤ 0",
                    step3: "Numerator −7: always negative, no zero. Denominator zero: x = −3",
                    signChart: [
                        ["Region", "x < −3", "x > −3"],
                        ["−7", "−", "−"],
                        ["(x+3)", "−", "+"],
                        ["Fraction", "+", "−"]
                    ],
                    solution: "Need ≤ 0: x > −3 (fraction is negative here). Numerator −7 ≠ 0 ever, so no equality point to include. Denominator zero x = −3 always excluded.",
                    interval: "(−3, +∞)"
                },
                {
                    title: "Factored numerator and denominator",
                    expression: "(x² − 1)/(x − 3) ≤ 0",
                    factor: "(x+1)(x−1)/(x−3) ≤ 0",
                    criticalPoints: "Numerator zeros: x = −1, x = 1; Denominator zero (undefined): x = 3",
                    regions: "4 regions: x<−1, −1<x<1, 1<x<3, x>3",
                    signChart: [
                        ["Region", "x < −1", "−1 < x < 1", "1 < x < 3", "x > 3"],
                        ["(x+1)", "−", "+", "+", "+"],
                        ["(x−1)", "−", "−", "+", "+"],
                        ["(x−3)", "−", "−", "−", "+"],
                        ["Fraction", "−", "+", "−", "+"]
                    ],
                    solution: "Need ≤ 0: x < −1 and 1 < x < 3. Include numerator zeros x=−1 and x=1 (≤). Exclude denominator zero x=3.",
                    interval: "(−∞, −1] ∪ [1, 3)"
                },
                {
                    title: "Cancellation — excluded point retained",
                    expression: "(x² − 4)/(x² − x − 2) ≥ 0",
                    factor: "(x+2)(x−2) / ((x+2)(x−1)) ≥ 0",
                    cancellation: "Common factor (x+2) cancels — but x = −2 REMAINS excluded (denominator zero in original)",
                    simplified: "(x−2)/(x−1) ≥ 0 with x ≠ −2",
                    criticalPoints: "Numerator zero: x = 2; Denominator zero: x = 1; Also excluded: x = −2",
                    regions: "4 regions: x<−2, −2<x<1, 1<x<2, x>2",
                    signChart: [
                        ["Region", "x < −2", "−2 < x < 1", "1 < x < 2", "x > 2"],
                        ["(x−2)", "−", "−", "−", "+"],
                        ["(x−1)", "−", "−", "+", "+"],
                        ["Fraction", "+", "+", "−", "+"]
                    ],
                    solution: "Need ≥ 0: x<−2, −2<x<1, x≥2 (include x=2). x=−2 excluded (original denominator zero). x=1 excluded (denominator zero).",
                    interval: "(−∞, −2) ∪ (−2, 1) ∪ [2, +∞)"
                },
                {
                    title: "No solution case",
                    expression: "(x² + 1)/(x² + 4) < 0",
                    analysis: "Numerator x²+1 > 0 always (Δ=−4<0); Denominator x²+4 > 0 always (Δ=−16<0)",
                    fraction: "Positive/positive = always positive",
                    interval: "∅ (fraction is always > 0, never < 0)"
                }
            ],

            endpointDecisionTable: [
                ["Point Type", "Strict (<, >)", "Non-strict (≤, ≥)", "Rule"],
                ["Numerator zero (expression = 0)", "Excluded", "Included", "Based on inequality type"],
                ["Denominator zero (undefined)", "Excluded", "Excluded", "ALWAYS excluded"],
                ["Other critical points", "N/A", "N/A", "Polynomial inequalities have none"]
            ],

            connectionToOtherTopics: {
                polynomialInequalities: "Sign chart method is identical; rational inequalities add undefined points",
                algebraicFractions: "Combining fractions (Step 2) requires fluency with algebraic fraction operations",
                asymptotes: "Denominator zeros correspond to vertical asymptotes of the rational function's graph",
                partialFractions: "Rational inequality solutions help understand valid domains for partial fraction decomposition"
            },

            commonErrors: this.commonMisconceptions.rational_inequalities,
            assessmentQuestions: this.assessmentQuestions.rational_inequalities,
            contextualScenarios: this.contextualScenarios.rational_inequalities
        };

        if (/cancel|common.*factor/i.test(input)) {
            content.focus = 'cancellationAndExcludedPoints';
        } else if (/combine|single.*fraction|rearrang/i.test(input)) {
            content.focus = 'combiningFractions';
        } else if (/why.*not.*multiply|multiply.*both/i.test(input)) {
            content.focus = 'whyNotMultiply';
        } else if (/undefined|denominator.*zero/i.test(input)) {
            content.focus = 'undefinedPoints';
        }

        return content;
    }

    handleExponentialInequalities(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Exponential Inequalities",
            category: 'inequalities',
            summary: "Exponential functions are strictly monotone. For base a > 1 (increasing): same inequality direction as exponents. For base 0 < a < 1 (decreasing): inequality direction reverses. When bases differ or matching is impossible, apply logarithms to both sides.",

            definitions: {
                exponentialFunction: {
                    definition: "A function of the form f(x) = aˣ where a > 0 and a ≠ 1",
                    domain: "All real numbers",
                    range: "(0, +∞) — always positive",
                    baseGreaterOne: "a > 1: strictly increasing — as x increases, aˣ increases",
                    baseBetweenZeroOne: "0 < a < 1: strictly decreasing — as x increases, aˣ decreases"
                },
                monotone: {
                    definition: "A function is monotone if it is either always increasing or always decreasing",
                    significance: "Monotone functions preserve or reverse inequality direction consistently — no sign changes to worry about",
                    exponentialMonotonicity: "Exponential functions are strictly monotone — their inequality direction rule is therefore consistent"
                }
            },

            coreRules: {
                sameBase_increasing: {
                    condition: "a > 1 (base greater than 1 — increasing function)",
                    rule: "aᵘ OP aᵛ ↔ u OP v (SAME direction)",
                    examples: ["2^(3x) > 2^(x+4) → 3x > x+4 → 2x > 4 → x > 2", "10^(2x−1) ≤ 10^(3) → 2x−1 ≤ 3 → x ≤ 2"],
                    reasoning: "Since a > 1 is increasing, larger exponent gives larger value — inequality direction is preserved"
                },
                sameBase_decreasing: {
                    condition: "0 < a < 1 (base between 0 and 1 — decreasing function)",
                    rule: "aᵘ OP aᵛ ↔ u REVERSED-OP v (REVERSED direction)",
                    examples: ["(1/2)^x < (1/2)^3 → x > 3 (direction reversed since base < 1)", "(0.1)^(2x) ≥ (0.1)^4 → 2x ≤ 4 → x ≤ 2"],
                    reasoning: "Since 0 < a < 1 is decreasing, larger exponent gives SMALLER value — inequality direction reverses",
                    memory: "SHRINK (0 < a < 1) → FLIP the inequality. GROW (a > 1) → KEEP the inequality."
                },
                convertToSameBase: {
                    method: "If possible, rewrite both sides as powers of the same base, then compare exponents",
                    example: "4^x > 32: write 4 = 2² and 32 = 2⁵ → 2^(2x) > 2^5 → 2x > 5 → x > 5/2"
                },
                applyLogarithm: {
                    when: "When bases cannot be matched or differ fundamentally",
                    rule: "Apply ln (or log₁₀) to both sides — valid since log is increasing and arguments must be positive",
                    direction: "ln is increasing → applying ln preserves inequality direction (for positive arguments)",
                    example: "3^x > 7 → x·ln3 > ln7 → x > ln7/ln3 = log₃7",
                    restriction: "Arguments of logarithm must be positive — exponential functions are always positive, so this is automatically satisfied"
                },
                substitution: {
                    when: "When the inequality involves two different powers of the same base (e.g., 4^x and 2^x)",
                    method: "Let t = a^x (always t > 0); convert to polynomial inequality in t; solve for t; convert back to x",
                    example: {
                        expression: "4^x − 3·2^x − 4 > 0",
                        substitute: "Let t = 2^x (t > 0). Then 4^x = (2^x)² = t². Inequality: t² − 3t − 4 > 0",
                        solveInT: "(t−4)(t+1) > 0. Since t > 0: reject t < −1 and 0 < t < 4; solution: t > 4",
                        convertBack: "2^x > 4 = 2² → x > 2 (base 2 > 1, same direction)",
                        interval: "(2, +∞)"
                    }
                }
            },

            workedExamples: [
                {
                    title: "Same base, base > 1",
                    expression: "3^(2x−1) < 27",
                    step1: "Write 27 = 3³",
                    step2: "3^(2x−1) < 3³",
                    step3: "Base 3 > 1 → same direction: 2x − 1 < 3",
                    step4: "2x < 4 → x < 2",
                    interval: "(−∞, 2)",
                    verify: "Test x = 0: 3^(−1) = 1/3 < 27 ✓. Test x = 3: 3^5 = 243 < 27 ✗"
                },
                {
                    title: "Same base, 0 < base < 1 — direction reverses",
                    expression: "(1/2)^x > 8",
                    step1: "Write 8 = 2³ = (1/2)^(−3)",
                    step2: "(1/2)^x > (1/2)^(−3)",
                    step3: "Base 1/2 < 1 → REVERSE direction: x < −3",
                    interval: "(−∞, −3)",
                    alternativeMethod: "Write as 2^(−x) > 2^3 → base 2 > 1 → −x > 3 → x < −3 ✓ (same result)",
                    verify: "Test x = −4: (1/2)^(−4) = 16 > 8 ✓. Test x = 0: 1 > 8 ✗"
                },
                {
                    title: "Convert to common base",
                    expression: "8^(x+1) ≤ 4^(2x−1)",
                    step1: "Write 8 = 2³ and 4 = 2²: 2^(3(x+1)) ≤ 2^(2(2x−1))",
                    step2: "2^(3x+3) ≤ 2^(4x−2)",
                    step3: "Base 2 > 1 → same direction: 3x + 3 ≤ 4x − 2",
                    step4: "5 ≤ x → x ≥ 5",
                    interval: "[5, +∞)"
                },
                {
                    title: "Different bases — apply logarithm",
                    expression: "5^x ≤ 3",
                    step1: "Cannot match bases. Apply ln to both sides (3 > 0, 5^x > 0 — valid)",
                    step2: "ln(5^x) ≤ ln(3) → x·ln5 ≤ ln3",
                    step3: "ln5 > 0 (since 5 > 1), so divide without reversing: x ≤ ln3/ln5 = log₅3",
                    step4: "log₅3 ≈ 0.682",
                    interval: "(−∞, log₅3] = (−∞, ln3/ln3 ≈ 0.682]",
                    verify: "Test x = 0: 5^0 = 1 ≤ 3 ✓. Test x = 1: 5 ≤ 3 ✗"
                },
                {
                    title: "Logarithm application with coefficient",
                    expression: "2^(3x) > 10",
                    step1: "Apply ln: 3x·ln2 > ln10",
                    step2: "3x > ln10/ln2 = log₂10 ≈ 3.322",
                    step3: "x > log₂10/3 ≈ 1.107",
                    interval: "(log₂10 / 3, +∞)"
                },
                {
                    title: "Substitution method",
                    expression: "9^x − 4·3^x + 3 ≤ 0",
                    substitute: "Let t = 3^x (t > 0). Then 9^x = (3^x)² = t². Inequality: t² − 4t + 3 ≤ 0",
                    solveInT: "Factor: (t−1)(t−3) ≤ 0 → 1 ≤ t ≤ 3",
                    convertBack: "1 ≤ 3^x ≤ 3 → 3^0 ≤ 3^x ≤ 3^1 (base 3 > 1, same direction) → 0 ≤ x ≤ 1",
                    interval: "[0, 1]",
                    verify: "Test x = 0.5: 9^0.5 − 4·3^0.5 + 3 = 3 − 4(1.732) + 3 ≈ −0.928 ≤ 0 ✓"
                }
            ],

            exponentialInequalityStructure: {
                twoSidedExponential: "Both sides are exponential expressions → match bases or apply log",
                exponentialVsConstant: "One side constant → write constant as power of base (if possible) or apply log",
                combinedExponentials: "Two exponential terms with the same base → substitution method",
                mixedWithPolynomial: "Apply log to exponential side; solve the resulting inequality"
            },

            connectionToOtherTopics: {
                logarithmicInequalities: "Applying log to both sides of an exponential inequality produces a logarithmic inequality — the techniques are inverses",
                monotonicity: "The direction rule follows from the monotonicity of the exponential function — studied in function theory",
                compoundInterest: "Exponential inequality models: when does investment exceed target?",
                populationModels: "When does population exceed a threshold? — exponential inequality"
            },

            commonErrors: this.commonMisconceptions.exponential_inequalities,
            assessmentQuestions: this.assessmentQuestions.exponential_inequalities,
            contextualScenarios: this.contextualScenarios.exponential_inequalities
        };

        if (/substitut|let.*t.*=/i.test(input)) {
            content.focus = 'substitutionMethod';
        } else if (/common.*base|same.*base/i.test(input)) {
            content.focus = 'sameBaseMethod';
        } else if (/logarithm|ln|apply.*log/i.test(input)) {
            content.focus = 'logarithmMethod';
        } else if (/base.*less.*one|0.*<.*a.*<.*1|decreas/i.test(input)) {
            content.focus = 'decreasingBaseRule';
        }

        return content;
    }

    handleLogarithmicInequalities(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Logarithmic Inequalities",
            category: 'inequalities',
            summary: "Logarithmic inequalities require three simultaneous considerations: (1) domain restriction (argument > 0 — strictly positive), (2) direction rule (base > 1 preserves inequality; 0 < base < 1 reverses it), and (3) intersection of algebraic solution with domain. Extraneous solutions are common — always verify.",

            definitions: {
                logarithm: {
                    definition: "logₐ(x) is the exponent to which base a must be raised to produce x: if logₐ(x) = y then aʸ = x",
                    basea: "Base a must satisfy a > 0 and a ≠ 1",
                    argument: "The argument x of logₐ(x) must be strictly positive: x > 0",
                    domain: "Domain of logₐ(f(x)) is {x : f(x) > 0}"
                },
                naturalLog: {
                    definition: "ln(x) = logₑ(x) — logarithm with base e ≈ 2.718",
                    sameRules: "All inequality rules for logₐ apply to ln (since e > 1, always preserves direction)"
                },
                logFunction_increasing: {
                    condition: "base a > 1",
                    behaviour: "Strictly increasing: if u > v (and both u, v > 0), then logₐ(u) > logₐ(v)",
                    inequalityRule: "logₐ(u) OP logₐ(v) ↔ u OP v (same direction), provided u, v > 0"
                },
                logFunction_decreasing: {
                    condition: "0 < a < 1",
                    behaviour: "Strictly decreasing: if u > v (and both u, v > 0), then logₐ(u) < logₐ(v)",
                    inequalityRule: "logₐ(u) OP logₐ(v) ↔ u REVERSED-OP v (reversed direction), provided u, v > 0"
                }
            },

            coreRules: {
                logVsConstant_increasing: {
                    form: "logₐ(f(x)) OP k  (a > 1)",
                    convert: "logₐ(f(x)) OP logₐ(aᵏ) → f(x) OP aᵏ (same direction), with domain f(x) > 0",
                    example: "log₂(x − 1) < 3 → x − 1 < 2³ = 8 → x < 9; domain: x > 1; final: 1 < x < 9"
                },
                logVsConstant_decreasing: {
                    form: "logₐ(f(x)) OP k  (0 < a < 1)",
                    convert: "f(x) REVERSED-OP aᵏ (direction reverses), with domain f(x) > 0",
                    example: "log_(1/3)(x) > −2 → x < (1/3)^(−2) = 9 (reversed); domain: x > 0; final: 0 < x < 9"
                },
                logVsLog_sameBase_increasing: {
                    form: "logₐ(f(x)) OP logₐ(g(x))  (a > 1)",
                    convert: "f(x) OP g(x) (same direction), with domains f(x) > 0 AND g(x) > 0",
                    example: "log₂(x) < log₂(x+3) → x < x+3 → 0 < 3 (always true); domain: x > 0 AND x+3 > 0 → x > 0"
                },
                logVsLog_sameBase_decreasing: {
                    form: "logₐ(f(x)) OP logₐ(g(x))  (0 < a < 1)",
                    convert: "f(x) REVERSED-OP g(x) (reversed direction), with domains f(x) > 0 AND g(x) > 0"
                },
                logVsLog_differentBase: {
                    method: "Convert to same base using change of base: logₐ(x) = ln(x)/ln(a)",
                    or: "Convert both sides to exponential form and compare"
                }
            },

            solvingProcess: {
                fullProcedure: [
                    "Step 1: DOMAIN — identify all logarithm arguments; set each strictly > 0; solve to find domain D",
                    "Step 2: IDENTIFY BASE — determine whether base a > 1 (increasing) or 0 < a < 1 (decreasing)",
                    "Step 3: CONVERT — apply the appropriate direction rule to remove the logarithm",
                    "         • a > 1: convert logₐ(expr) OP c → expr OP aᶜ (same direction)",
                    "         • 0 < a < 1: convert logₐ(expr) OP c → expr REVERSED-OP aᶜ (reversed direction)",
                    "Step 4: SOLVE — solve the resulting algebraic inequality",
                    "Step 5: INTERSECT — final solution = (algebraic solution) ∩ D",
                    "Step 6: VERIFY — substitute test values into the ORIGINAL logarithmic inequality"
                ],
                domainFirst: {
                    importance: "Domain restriction is non-negotiable — an argument ≤ 0 makes the logarithm undefined",
                    commonMistake: "Students often find the algebraic solution without the domain and get incorrect answers",
                    practicalTip: "If the algebraic solution is entirely within the domain, the domain restriction is automatically satisfied — but must still be checked"
                },
                productAndQuotientLog: {
                    productRule: "log(f(x)·g(x)) = log(f(x)) + log(g(x)) — apply only when f(x) > 0 AND g(x) > 0",
                    quotientRule: "log(f(x)/g(x)) = log(f(x)) − log(g(x)) — only valid when f(x) > 0 AND g(x) > 0",
                    dangerousStep: "Combining log terms can narrow or shift domain — always re-check domain after any log property application"
                }
            },

            workedExamples: [
                {
                    title: "log > constant, base > 1",
                    expression: "log₂(x − 1) < 3",
                    step1: "Domain: x − 1 > 0 → x > 1. D = (1, +∞)",
                    step2: "Base 2 > 1 → increasing → same direction",
                    step3: "x − 1 < 2³ = 8 → x < 9",
                    step4: "Intersect: x > 1 AND x < 9",
                    interval: "(1, 9)",
                    verify: "Test x = 4: log₂(3) ≈ 1.58 < 3 ✓. Test x = 10: x = 10 not in (1,9) ✗. Test x = 0: outside domain ✗"
                },
                {
                    title: "log > constant, 0 < base < 1 — direction reverses",
                    expression: "log_(1/3)(2x + 1) ≥ −2",
                    step1: "Domain: 2x + 1 > 0 → x > −1/2. D = (−1/2, +∞)",
                    step2: "Base 1/3 < 1 → decreasing → REVERSE direction",
                    step3: "2x + 1 ≤ (1/3)^(−2) = 9 (reversed ≥ becomes ≤) → x ≤ 4",
                    step4: "Intersect: x > −1/2 AND x ≤ 4",
                    interval: "(−1/2, 4]",
                    verify: "Test x = 0: log_(1/3)(1) = 0 ≥ −2 ✓. Test x = 5: out of solution set ✗"
                },
                {
                    title: "log vs log, same base > 1",
                    expression: "log₃(x + 2) > log₃(2x − 1)",
                    step1: "Domain: x + 2 > 0 AND 2x − 1 > 0 → x > −2 AND x > 1/2. D = (1/2, +∞)",
                    step2: "Base 3 > 1 → same direction: x + 2 > 2x − 1 → 3 > x → x < 3",
                    step3: "Intersect: x > 1/2 AND x < 3",
                    interval: "(1/2, 3)",
                    verify: "Test x = 1: log₃(3) = 1 > log₃(1) = 0 ✓. Test x = 4: log₃(6) ≈ 1.63 > log₃(7) ≈ 1.77? No ✗"
                },
                {
                    title: "log with product rule",
                    expression: "ln(x) + ln(x − 2) < ln(8)",
                    step1: "Domain: x > 0 AND x − 2 > 0 → x > 2. D = (2, +∞)",
                    step2: "Apply product rule: ln(x(x−2)) < ln(8)",
                    step3: "Base e > 1 → same direction: x(x−2) < 8 → x² − 2x − 8 < 0 → (x−4)(x+2) < 0 → −2 < x < 4",
                    step4: "Intersect with D: x > 2 AND x < 4",
                    interval: "(2, 4)",
                    verify: "Test x = 3: ln(3) + ln(1) = ln(3) ≈ 1.10 < ln(8) ≈ 2.08 ✓. Test x = 5: ln(5)+ln(3) = ln(15) ≈ 2.71 < 2.08 ✗"
                },
                {
                    title: "Change of base — different bases",
                    expression: "log₂(x) > log₄(x + 3)",
                    step1: "Domain: x > 0 AND x + 3 > 0 → x > 0. D = (0, +∞)",
                    step2: "Convert log₄(x+3) using change of base: log₄(x+3) = log₂(x+3)/log₂(4) = log₂(x+3)/2",
                    step3: "Inequality: log₂(x) > log₂(x+3)/2",
                    step4: "Multiply both sides by 2: 2·log₂(x) > log₂(x+3) → log₂(x²) > log₂(x+3)",
                    step5: "Base 2 > 1: x² > x+3 → x² − x − 3 > 0",
                    roots: "x = (1 ± √13)/2; r₁ ≈ −1.30, r₂ ≈ 2.30",
                    step6: "x² − x − 3 > 0 for x < r₁ or x > r₂",
                    step7: "Intersect with D (x > 0): x > (1+√13)/2",
                    interval: "((1+√13)/2, +∞)"
                },
                {
                    title: "No solution after domain intersection",
                    expression: "log₅(x² + 1) < 0",
                    step1: "Domain: x² + 1 > 0 always. D = (−∞, +∞)",
                    step2: "Base 5 > 1: x² + 1 < 5^0 = 1 → x² < 0",
                    step3: "x² ≥ 0 always — x² < 0 is impossible",
                    interval: "∅",
                    explanation: "log₅(x²+1) ≥ 0 always since x²+1 ≥ 1 = 5^0; the logarithm is never negative here"
                },
                {
                    title: "All real numbers solution",
                    expression: "log₃(x² + 3) > 0",
                    step1: "Domain: x² + 3 > 0 always. D = (−∞, +∞)",
                    step2: "Base 3 > 1: x² + 3 > 3^0 = 1 → x² + 3 > 1 → x² > −2",
                    step3: "x² ≥ 0 > −2 always",
                    interval: "(−∞, +∞)",
                    explanation: "log₃(x²+3) > 0 since x²+3 ≥ 3 > 1 = 3^0 always"
                }
            ],

            logBaseDirectionSummary: [
                ["Base", "Function Type", "logₐ(f) OP k converts to", "logₐ(f) OP logₐ(g) converts to"],
                ["a > 1", "Increasing", "f(x) OP aᵏ (SAME direction)", "f(x) OP g(x) (SAME direction)"],
                ["0 < a < 1", "Decreasing", "f(x) REVERSED-OP aᵏ (REVERSED)", "f(x) REVERSED-OP g(x) (REVERSED)"],
                ["e (natural)", "Increasing (e≈2.72>1)", "f(x) OP eᵏ (SAME direction)", "f(x) OP g(x) (SAME direction)"],
                ["10 (common)", "Increasing (10>1)", "f(x) OP 10ᵏ (SAME direction)", "f(x) OP g(x) (SAME direction)"]
            ],

            domainPitfalls: {
                combinedLog: "When combining log terms (product/quotient rule), the combined domain may be stricter than each term individually",
                example: "log(x) + log(x−2): combining gives log(x(x−2)) but domain requires x > 0 AND x−2 > 0 → x > 2 (stricter than x > 0 alone)",
                extraneousSolutions: "Always recheck solutions against the ORIGINAL domain (before any log property application)",
                zeroArgument: "logₐ(0) is undefined — this is more restrictive than the domain of polynomials or radicals"
            },

            connectionToOtherTopics: {
                exponentialInequalities: "Applying antilogarithm (exponentiation) to a log inequality produces an exponential inequality — inverse techniques",
                changeOfBase: "log_a(x) = ln(x)/ln(a) = log(x)/log(a) — used to convert between bases for comparison",
                domainOfLogFunctions: "The domain restriction for logarithmic inequalities is identical to the domain of the corresponding log function",
                calculusApplications: "Log inequalities arise in convergence tests for series, L'Hôpital's rule, and growth rate comparisons"
            },

            commonErrors: this.commonMisconceptions.logarithmic_inequalities,
            assessmentQuestions: this.assessmentQuestions.logarithmic_inequalities,
            contextualScenarios: this.contextualScenarios.logarithmic_inequalities
        };

        if (/domain|argument.*positive/i.test(input)) {
            content.focus = 'domainRestriction';
        } else if (/base.*less.*one|0.*<.*a.*<.*1|decreas/i.test(input)) {
            content.focus = 'decreasingBaseRule';
        } else if (/product.*rule|combine.*log|sum.*log/i.test(input)) {
            content.focus = 'logProductRule';
        } else if (/change.*base|different.*base/i.test(input)) {
            content.focus = 'changeOfBase';
        } else if (/extraneous|check/i.test(input)) {
            content.focus = 'extraneousSolutions';
        }

        return content;
    }
