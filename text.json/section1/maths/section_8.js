

algebraicInequalities: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about inequality symbols, notation conventions, and rules — including the sign-reversal rule — without requiring explanation. The student reproduces definitions and procedural rules accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning or justification required. Inability to recall the sign-reversal rule at this level indicates the student cannot safely proceed to solving.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response gives correct facts with no explanation. 'The inequality sign reverses when you divide by a negative number' is remember-level. Explaining why it reverses — connecting to the order-reversing property of multiplication by a negative — crosses into understand.",
            examples: {
                inequalityFundamentals:      "State the four inequality symbols and the meaning of each. Identify the difference between a strict inequality and a non-strict inequality, and state how each is represented on a number line.",
                linearInequalities:          "State the sign-reversal rule. Write the interval notation for x ≥ −3 and for −2 < x < 5.",
                compoundInequalities:        "Define 'compound inequality'. State the difference between an 'and' inequality and an 'or' inequality in terms of their solution sets.",
                absoluteValueInequalities:   "State the rule for solving |f(x)| < k and the rule for solving |f(x)| > k. Name the type of compound inequality each produces."
            }
        },

        understand: {
            description: "Explain the meaning and reasoning behind inequality rules — particularly why the sign reverses and why absolute value splits into two cases. The student connects the algebra to the geometry of the number line.",
            cognitiveDemand: "Translation and interpretation. The student rephrases rules with reasoning and connects algebraic results to graphical representations. A student who can only state 'the sign flips' without explaining why has not yet reached understand.",
            verbs: ["Explain", "Justify", "Interpret", "Describe", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires mechanism, not just fact. 'An or inequality has two separate rays on the number line' is remember. 'An or inequality has two separate rays because the union of two solution sets is all values satisfying either condition — and if those conditions pull in opposite directions, the regions cannot overlap' is understand.",
            examples: {
                inequalityFundamentals:      "Explain why the solution to a linear inequality is a range of values rather than a single value. Use a specific example to show that infinitely many values satisfy a typical linear inequality.",
                linearInequalities:          "Explain, using a numerical example (such as starting from 3 < 8), why multiplying both sides by −1 reverses the inequality direction. Connect your explanation to the order of negative numbers on the number line.",
                compoundInequalities:        "Explain the geometric difference between the solution to an 'and' compound inequality and the solution to an 'or' compound inequality. Use the terms 'intersection' and 'union' and illustrate each with a number line sketch.",
                absoluteValueInequalities:   "Explain why |x| < 5 produces the bounded interval −5 < x < 5 while |x| > 5 produces the two outward rays x < −5 or x > 5. Your explanation must use the distance interpretation of absolute value."
            }
        },

        apply: {
            description: "Solve a linear, compound, or absolute value inequality not seen before in exactly this form. The student selects the correct procedure, executes all steps (including the sign-reversal check), and expresses the solution in all required forms.",
            cognitiveDemand: "Procedure execution in a novel situation. The student identifies which type of inequality is presented, chooses the appropriate solving strategy, and carries it through accurately. A common failure is executing the correct steps but forgetting to reverse the sign in exactly one of them.",
            verbs: ["Solve", "Find", "Calculate", "Graph", "Determine", "Express", "Write"],
            whatDistinguishesThisLevel: "Apply requires the student to solve a new problem, not reproduce a worked example. The student must handle the sign-reversal decision independently — if the teacher has highlighted in advance that a reversal is needed, the task is no longer apply-level.",
            examples: {
                inequalityFundamentals:      "A package delivery service charges £3.50 per kg plus a £5 handling fee. A customer's budget is at most £40. Write and solve an inequality to find the maximum weight of package they can send.",
                linearInequalities:          "Solve each inequality, showing all steps, graphing the solution on a number line, and expressing the solution in interval notation: (a) −3x + 7 < −8; (b) 4(2x − 1) ≥ 3(x + 5); (c) x/3 + 4 > x/2 − 1.",
                compoundInequalities:        "Solve and graph: (a) −5 ≤ 3x + 1 < 10; (b) 2x + 3 < 1 OR 4x − 5 ≥ 11. Express each solution in interval notation.",
                absoluteValueInequalities:   "Solve: (a) |4x − 3| ≤ 9; (b) |2x + 5| > 3; (c) |x − 7| < −2. For each, express the solution in interval notation and graph on a number line."
            }
        },

        analyze: {
            description: "Examine an inequality, a solution, or a context to identify structure, classify the type, determine the nature of the solution set, or draw conclusions from evidence not directly given. The student works from information to conclusion.",
            cognitiveDemand: "Decomposition and inference. The student classifies, compares, or interprets without being told the conclusion. Analysis of errors in a solution — identifying where a sign reversal was omitted — requires seeing what should have happened and comparing it to what did.",
            verbs: ["Identify", "Classify", "Determine", "Analyse", "Compare", "Deduce", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given the solution x > 3 and a number line with the region x < 3 shaded, identify the error' requires the student to compare the algebraic solution to the graphical representation, identify the contradiction, and name the error — none of this is given to them.",
            examples: {
                inequalityFundamentals:      "A number line shows a closed circle at x = 2 with shading to the right. Three students write the corresponding inequality as x > 2, x ≥ 2, and x ≤ 2 respectively. Analyse each response — identify which is correct, explain why each incorrect response fails, and state the single feature of the number line that distinguishes ≥ from >.",
                linearInequalities:          "A student solves −5x ≤ 20 and obtains x ≤ −4. Another student obtains x ≥ −4. Analyse both solutions step by step — determine which is correct, identify precisely where any error occurred and which rule was violated, and verify the correct answer using a test value.",
                compoundInequalities:        "Given the solution set (−∞, 1) ∪ (4, ∞), determine the original 'or' compound inequality that produced it (there is more than one valid answer — give one and justify it). Then write an 'and' compound inequality whose solution has the same boundary values. Compare the two solution sets and describe the relationship between them.",
                absoluteValueInequalities:   "A student solves |3x − 6| > 9 and writes −9 < 3x − 6 < 9 as their first step. Analyse this solution — identify the error in the first step, explain which case of the absolute value rule applies here, write the correct split, and complete the correct solution."
            }
        },

        evaluate: {
            description: "Make a supported judgement about a claim, method, or solution — identifying what is wrong, applying the correct mathematical criterion, and stating the correction. A judgement without justification does not meet this level.",
            cognitiveDemand: "Judgement with criterion and correction. The student must identify the flaw (not just 'this is wrong'), explain why it fails mathematically, and produce the correct answer or approach.",
            verbs: ["Evaluate", "Critique", "Assess", "Justify", "Appraise", "Verify", "Judge"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a mathematical standard, not just error-spotting. 'The student forgot the sign-reversal rule' identifies an error (analyze level). 'The student divided by −3 without reversing the sign; the correct application of the sign-reversal rule gives x < 2 not x > 2; a test value such as x = 0 confirms the correct answer since −3(0) = 0 > −6 is TRUE' is evaluate-level because it names the rule, applies it, and verifies.",
            examples: {
                inequalityFundamentals:      "A student writes the compound inequality x > −1 AND x > 5 and claims the solution is x > −1 because '-1 is smaller and so covers more numbers'. Evaluate this reasoning — identify the logical flaw, state what the 'and' connective requires, determine the correct solution set, and graph both the student's incorrect answer and the correct answer on the same number line.",
                linearInequalities:          "A student solves −2(x + 3) ≥ 10 step by step: −2x + 3 ≥ 10 → −2x ≥ 7 → x ≥ −3.5. Evaluate the complete solution — identify every error (there may be more than one), state the rule violated at each error, and produce the fully correct solution with verification.",
                compoundInequalities:        "A student solves |x − 4| < 3 and writes the solution as x < −1 OR x > 7. Evaluate this answer — state which absolute value rule the student has applied, determine whether that rule is appropriate for a less-than absolute value inequality, produce the correct solution, and explain geometrically why the student's answer and the correct answer are structurally different.",
                absoluteValueInequalities:   "A student claims: 'Since |expression| is always positive, the inequality |2x − 1| > −5 has no solution because you cannot be greater than a negative distance.' Evaluate this claim in full — identify the correct mathematical reasoning about |expression| vs a negative right-hand side, state the correct conclusion for a greater-than absolute value inequality with a negative RHS, and give the solution set."
            }
        },

        create: {
            description: "Generate an original, internally consistent, mathematically correct inequality problem or model from given constraints. The student integrates multiple concepts — problem formulation, solving, graphing, interval notation, and contextual interpretation — into a coherent original output.",
            cognitiveDemand: "Synthesis and original production. The student constructs something new that could not be produced by memorising or reproducing a worked example. A strong create-level response is self-consistent, satisfies all specified constraints, and demonstrates understanding across multiple sub-topics simultaneously.",
            verbs: ["Design", "Construct", "Formulate", "Create", "Develop", "Model", "Derive"],
            whatDistinguishesThisLevel: "Create requires original output with multiple integrated components. 'Construct an absolute value inequality with solution (−3, 7)' requires the student to reverse-engineer the boundary values into the correct absolute value form, verify the result produces that exact solution, and justify every step — all of which requires synthesis, not procedure following.",
            examples: {
                inequalityFundamentals:      "Create a real-world scenario (not speed limits, budgets, or ride heights) modelled by a compound 'and' inequality with a bounded interval solution. Write the scenario, define the variable, write the inequality, solve it, graph the solution on a number line, and write three values that satisfy the inequality and two that do not, justifying each.",
                linearInequalities:          "Construct a linear inequality in one variable that satisfies ALL of the following: the solution involves a sign reversal; the solution is x ≤ 3; the inequality requires at least three steps to solve; the inequality contains brackets. Show that your inequality satisfies all four conditions, solve it from scratch as if you did not know the answer, and verify.",
                compoundInequalities:        "Design a real-world context (not covered in this lesson) that naturally produces an 'or' compound inequality with solution (−∞, −2) ∪ [5, ∞). Write the scenario, formulate the inequality system, solve each part, verify the solution, and construct a follow-up question that asks whether a specific value is in the feasible range.",
                absoluteValueInequalities:   "Construct an absolute value inequality |ax + b| ≤ c whose solution is exactly [−1, 5]. Find valid values of a, b, and c (there are multiple correct answers — find two distinct sets). For each, verify by substituting the boundary values and one interior point. Then modify one inequality so that the solution is (−1, 5) instead of [−1, 5] and explain the single change required."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Solves one-step inequalities (x + 3 > 7) but treats the result as a single value rather than a range",
                "Does not reverse the inequality sign when dividing by a negative coefficient",
                "Confuses open and closed circles on the number line — uses a closed circle for strict inequalities",
                "Cannot distinguish 'and' from 'or' compound inequalities — attempts to shade both regions for 'and' or only the overlap for 'or'",
                "Attempts to split absolute value inequalities into two cases but writes both cases as the same direction (e.g. both as positive, not one positive and one negative)"
            ],
            immediateNextSteps: [
                "For solution-as-range confusion: immediately after solving any inequality, substitute three values — one clearly inside the solution, one clearly outside, and the boundary value — to confirm the solution is a set of infinitely many values, not one number.",
                "For sign-reversal omission: before every inequality problem, write 'DIVIDING/MULTIPLYING BY NEGATIVE → FLIP THE SIGN' at the top of the page. After every division or multiplication step, ask explicitly: 'Was the divisor/multiplier negative?' Only then move to the next step.",
                "For open/closed circle confusion: create a single reference card with all four inequality types, their circle types, and an example. Keep it visible during every number line problem. The mnemonic: strict inequalities are 'strict about exclusion' → open circle.",
                "For and/or confusion: draw the set theory Venn diagram. AND = intersection (inside both circles). OR = union (inside either circle). Label every compound inequality with its connective before attempting to solve either part.",
                "For absolute value splitting: learn the two rules as a paired fact, always together — '<k splits into bounded and-interval; >k splits into or with two rays'. Write both on the same card and never look up one without seeing the other."
            ],
            misconceptionsToAddress: [
                "Solution is a single value → verify with three test values",
                "No sign reversal → mandatory check before every division step",
                "AND/OR confusion → Venn diagram reference"
            ]
        },

        developing: {
            characteristics: [
                "Reverses the inequality sign correctly in simple cases but omits the reversal when the negative coefficient emerges mid-problem (e.g. after expanding brackets)",
                "Solves simple compound inequalities but does not operate on all three sections simultaneously in double-inequalities — applies operations to only two of the three parts",
                "Sets up absolute value inequalities correctly for the 'less than' case but writes both branches in the same direction for the 'greater than' case",
                "Graphs number line solutions correctly but cannot convert fluently between inequality notation, interval notation, and the number line",
                "Correctly identifies that an absolute value inequality with a negative RHS is special but incorrectly concludes both cases (< and >) have no solution"
            ],
            immediateNextSteps: [
                "For mid-problem sign-reversal omission: after expanding brackets, stop and re-identify the coefficient of the variable. If it is now negative (even if it wasn't before expanding), the reversal rule may apply at the next step. Never assume the coefficient sign from the original equation.",
                "For double-inequality three-section errors: draw vertical lines to separate the three sections visually and operate on all three in a single column. Write L | M | R at the top of each step and ensure the same operation appears in all three columns.",
                "For absolute value 'greater than' direction error: draw the number line for |x| > k and ask: 'which values are MORE than k units from zero?' Answer: values to the LEFT of −k AND values to the RIGHT of k — two outward directions. This visual always produces the correct 'or' split.",
                "For notation conversion: create a three-column translation table (inequality / interval / number line) and practise converting in all six directions (inequality→interval, interval→number line, etc.) with ten examples before mixing in any solving.",
                "For negative RHS confusion: add a row to the absolute value rules card: 'RHS < 0: |expr| < negative → NO SOLUTION; |expr| > negative → ALL REALS'. Always check the sign of k before beginning to solve."
            ],
            misconceptionsToAddress: [
                "Post-bracket coefficient sign miss → re-identify coefficient after every expansion",
                "Greater-than absolute value direction error → number line distance visualisation",
                "Negative RHS all-cases confusion → add explicit row to rules card"
            ]
        },

        proficient: {
            characteristics: [
                "Solves all types of linear, compound, and absolute value inequalities fluently, consistently reversing the sign when required",
                "Expresses solutions in inequality notation, interval notation, and number line graphs without prompted reminders",
                "Identifies and handles special cases (negative RHS, zero RHS) in absolute value inequalities without error",
                "Graphs two-variable inequalities with correct boundary line style (dashed vs solid) and correct half-plane shading",
                "Translates real-world constraint language into the correct inequality and interprets the solution in context"
            ],
            immediateNextSteps: [
                "Deepen two-variable work: graph systems of two linear inequalities and identify the feasible region. Find vertices of the feasible region by solving the system of boundary equations. This is the direct entry point to linear programming.",
                "Explore quadratic inequalities: solve ax² + bx + c > 0 using factoring and a sign chart. Compare the solution structure to linear inequalities — both produce unions and intersections, but quadratic solutions may involve two separate intervals rather than a ray.",
                "Connect to functions and domain: write the domain of f(x) = √(3x − 6) as an inequality (3x − 6 ≥ 0 → x ≥ 2) and the domain of g(x) = 1/(x² − 4) as a compound inequality. This connects inequality solving directly to function analysis.",
                "Explore integer constraints: given a continuous inequality solution, determine which integer values satisfy it and contrast with the continuous case. This previews integer programming and combinatorial reasoning.",
                "Practice writing inequalities from graphs: given a shaded half-plane, write the corresponding inequality. This requires inferring the boundary line equation, checking the boundary style (solid/dashed), and confirming the shading direction with a test point."
            ],
            misconceptionsToAddress: [
                "Shading 'above' by default → always test a point; never assume direction",
                "Interval notation with brackets at infinity → reinforce: infinity always takes a parenthesis"
            ]
        },

        expert: {
            characteristics: [
                "Proves the sign-reversal rule from the definition of inequality and the multiplicative order property of real numbers",
                "Solves systems of linear inequalities in two variables, identifies the feasible region, and finds its vertices by solving systems of boundary equations",
                "Constructs reverse-engineering problems: given a solution set, formulates the original inequality",
                "Connects absolute value inequalities to the epsilon-delta definition of limits in calculus",
                "Models multi-constraint real-world problems as systems of linear inequalities and identifies the optimal solution within the feasible region"
            ],
            immediateNextSteps: [
                "Derive the triangle inequality |a + b| ≤ |a| + |b| from the definition of absolute value and the properties of real numbers. Interpret it geometrically as a statement about distances. This connects inequality algebra to metric spaces in higher mathematics.",
                "Study linear programming at introductory level: formulate the objective function and constraint inequalities for a two-variable optimisation problem, graph the feasible region, identify vertices, and evaluate the objective function at each vertex to find the optimum. This applies all inequality skills in an integrated applied context.",
                "Investigate how the absolute value inequalities encountered here generalize in calculus: |f(x) − L| < ε is the definition of a limit. Write this out for a specific function and limit, solve the corresponding inequality for x, and interpret the result as a neighbourhood around a point.",
                "Explore rational inequalities: solve (2x − 1)/(x + 3) > 0 using a sign chart, critical values, and test intervals. Compare the approach to linear and absolute value inequalities — the sign-chart method is a generalisation of the test-value technique used throughout this lesson."
            ],
            misconceptionsToAddress: [
                "Feasible region misidentification → verify by testing interior point against all constraints simultaneously",
                "Triangle inequality confused with ordinary sum → always test with a = 3, b = −5 to show |−2| ≤ 3 + 5"
            ]
        }
    }
},


simplification: {
            knowledgeLevel: {

                remember: {
                    description: "Retrieve stored definitions, identities, and index laws from memory without requiring explanation. The student reproduces facts accurately.",
                    cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required.",
                    verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
                    whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'aᵐ × aⁿ = aᵐ⁺ⁿ' is remember-level. Adding 'because you are counting how many times a is multiplied in total' crosses into understand.",
                    examples: {
                        likeTerm:              "State the definition of like terms. Identify which of the following are like terms: 3x², 2x, −x², 4xy, 5x².",
                        expandingBrackets:     "Write the FOIL acronym and state what each letter stands for. Write the identity for (a + b)² and (a − b)².",
                        indexLaws:             "List all six index laws (multiplication, division, power, power of a product, zero index, negative index). Write each using algebraic notation.",
                        fractionSimplification:"Define HCF. State the rule for simplifying an algebraic fraction in one sentence."
                    }
                },

                understand: {
                    description: "Explain the meaning and reasoning behind rules — connect the algebra to an underlying principle or to a geometric/numerical illustration.",
                    cognitiveDemand: "Translation and interpretation. The student explains WHY, not just WHAT.",
                    verbs: ["Explain", "Justify", "Interpret", "Connect", "Distinguish", "Describe", "Contrast"],
                    whatDistinguishesThisLevel: "Understand requires a mechanism. 'a⁰ = 1' is remember. 'a⁰ = 1 because a⁰ = aⁿ ÷ aⁿ = 1 by the division law — it is a consequence, not an arbitrary rule' is understand.",
                    examples: {
                        likeTerm:              "Explain why 3x² and 3x are not like terms even though both contain x and the same coefficient. Use the idea of different quantities to make your explanation concrete.",
                        expandingBrackets:     "Explain why (x + 5)² ≠ x² + 25. Use a numerical substitution (e.g. x = 2) to show that the missing term changes the value, then identify what the missing term is.",
                        indexLaws:             "Explain why a⁰ = 1 by applying the division law to aⁿ ÷ aⁿ. Then explain why a⁻ⁿ = 1/aⁿ by applying the same law to a² ÷ a⁵.",
                        fractionSimplification:"Explain why (x + 4)/(x + 9) cannot be simplified, while (2x + 8)/(x + 4) can. Use the words 'factor' and 'term' in your explanation to distinguish the two cases."
                    }
                },

                apply: {
                    description: "Use known rules and procedures to simplify expressions and fractions in problems not seen before in exactly this form.",
                    cognitiveDemand: "Procedure execution in a novel situation. The student selects the correct technique and carries it through accurately.",
                    verbs: ["Simplify", "Expand", "Factorise", "Calculate", "Evaluate", "Express"],
                    whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. Executing the procedure on a specific expression the student has not seen before is apply-level.",
                    examples: {
                        likeTerm:              "Simplify: 7ab² − 3a²b + 2ab² + 5a²b − ab. Show grouping of like terms at each step.",
                        expandingBrackets:     "Expand and simplify: (3x − 4)(2x + 5) − 2(x − 3)². Show all intermediate steps.",
                        indexLaws:             "Simplify: (4x³y²) × (2xy³) ÷ (8x²y). Express the answer with positive indices only.",
                        fractionSimplification:"Simplify: (x² − 9) / (x² + x − 6). Show factorisation steps and state any required conditions on x."
                    }
                },

                analyze: {
                    description: "Break down an expression, identify structure, determine whether simplification is possible, and justify conclusions from evidence.",
                    cognitiveDemand: "Decomposition and inference. The student reaches a conclusion not directly given and supports it with mathematical reasoning.",
                    verbs: ["Determine", "Identify", "Classify", "Analyse", "Deduce", "Compare", "Investigate"],
                    whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion without being told what the conclusion is. Deciding whether an expression is fully simplified, determining what type of factorisation applies, or comparing two simplification paths are all analyze-level tasks.",
                    examples: {
                        likeTerm:              "An expression after partial simplification is: 5x²y − 2xy² + 3x²y − xy² + 4x. Determine whether this expression is fully simplified. If not, identify which terms can still be collected and complete the simplification. Verify by substituting x = 1, y = 2 into both forms.",
                        expandingBrackets:     "Two students expand (2x + 3)²: Student A gets 4x² + 9; Student B gets 4x² + 12x + 9. Analyse both expansions step by step. Identify which is correct, identify the specific error in the incorrect expansion, and use a numerical check (x = 1) to confirm your analysis.",
                        indexLaws:             "Analyse the expression: (x³y⁻²)² / (x⁻¹y³). Identify which index laws apply at each stage, apply them in the correct order, and determine whether the final form can be written without any negative indices. State your reasoning at each step.",
                        fractionSimplification:"Given three algebraic fractions: (i) (2x + 6)/(x + 3), (ii) (x² − 4)/(x + 2), (iii) (x + 5)/(x + 2). Analyse each — determine which can be simplified, show the simplification where possible, and explain why simplification is not possible for the others."
                    }
                },

                evaluate: {
                    description: "Judge the validity, accuracy, or efficiency of a simplification, factorisation, or index manipulation. Identify the specific error, state the violated rule, and produce the correct result.",
                    cognitiveDemand: "Judgement with justification against a mathematical standard.",
                    verbs: ["Evaluate", "Critique", "Verify", "Assess", "Judge", "Justify", "Appraise"],
                    whatDistinguishesThisLevel: "Evaluate requires a judgement against a criterion. Saying 'Student A is wrong' is not evaluate-level. Saying 'Student A incorrectly applied the distributive law to only the first term inside the bracket, violating the rule that every term must be multiplied; the correct expansion is...' is evaluate-level.",
                    examples: {
                        likeTerm:              "A student simplifies 4x² + 3x − x² + 2x to get 3x² + 5x². Evaluate this — identify what error the student made in treating the terms, state the correct approach with full working, and verify the correct answer by substituting x = 2 into both the original and the simplified expression.",
                        expandingBrackets:     "A student expands −3(x − 4) as −3x − 12. Evaluate this — identify the sign error precisely, state the correct application of the distributive law with a negative factor, give the correct expansion, and verify using x = 5.",
                        indexLaws:             "A student simplifies x⁴ × x³ as x¹² (multiplying instead of adding the indices). Evaluate this — identify the specific law that was misapplied, state what the correct law requires, give the correct answer, and verify using x = 2 by computing both x⁴ × x³ and x⁷ numerically.",
                        fractionSimplification:"A student simplifies (x + 6)/(x + 3) = 2 by 'cancelling x and dividing 6 by 3'. Evaluate this reasoning — identify the fundamental error (cancelling terms vs cancelling factors), show using x = 4 that the student's answer is incorrect, and state the correct conclusion about whether this fraction can be simplified."
                    }
                },

                create: {
                    description: "Generate original expressions, problems, or models that satisfy specified algebraic constraints. Combine multiple simplification skills in a coherent, original output.",
                    cognitiveDemand: "Synthesis and original production. Requires combining multiple concepts in an internally consistent output.",
                    verbs: ["Construct", "Design", "Create", "Formulate", "Derive", "Generate", "Invent"],
                    whatDistinguishesThisLevel: "Create requires producing something new, not reproducing or applying a memorised procedure. Designing an expression with specified properties requires understanding what each structural choice produces.",
                    examples: {
                        likeTerm:              "Construct an expression in three variables (x, y, z) that: (a) contains exactly 8 terms before simplification, (b) simplifies to exactly 4 terms, (c) includes at least one negative coefficient in the simplified form. Write the original unsimplified expression, show the full simplification, and verify by counting terms at each stage.",
                        expandingBrackets:     "Design two different pairs of double brackets that both expand to x² + 7x + 12. For each pair, verify by FOIL expansion. Then explain why having the same expanded form does not mean the factorised forms are identical — and identify the one factorisation that uses only integer coefficients.",
                        indexLaws:             "Construct an expression involving at least three different index laws (e.g. multiplication, power, and negative index) that simplifies to 4x³/y². Show each law being applied at each step with explicit labelling. Then substitute x = 2, y = 1 to verify that your starting expression and simplified result give the same numerical value.",
                        fractionSimplification:"Formulate a real-world algebraic fraction problem in a context of your choice (not manufacturing output or recipe scaling) where: the numerator is a factorisable quadratic, the denominator is linear, and the simplified fraction is a linear expression. Write the fraction, solve it, interpret the result in your context, and explain why the simplified form is more useful than the original for answering a specific question about your scenario."
                    }
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Attempts to combine unlike terms (e.g. 3x + 2x² = 5x³ or 3x + 2 = 5x)",
                        "Applies the distributive law only to the first term inside a bracket, missing subsequent terms",
                        "Writes (a + b)² = a² + b² — omitting the 2ab term entirely",
                        "States that aᵐ × aⁿ = aᵐⁿ (multiplies indices instead of adding) and confuses multiplication and power laws",
                        "Attempts to cancel individual numbers from numerator and denominator of an algebraic fraction regardless of whether they form a common factor"
                    ],
                    immediateNextSteps: [
                        "For unlike terms: circle the variable part of every term in one colour before attempting to collect. Only terms whose circled variable parts are identical may be combined. Do this for 10 expressions before attempting collection without the circling step.",
                        "For distributive law: draw an arrow from the outside factor to every single term inside the bracket before writing any products. Count the arrows — there must be one arrow per term. Never write any product until all arrows are drawn.",
                        "For (a + b)²: always rewrite as (a + b)(a + b) before expanding. Never expand directly from the squared notation. After expanding, count the terms — a correct expansion of two two-term brackets always produces four terms before collection.",
                        "For index law confusion: write a numerical test before applying any law: 2³ × 2⁴ = 8 × 16 = 128, and 2³⁺⁴ = 2⁷ = 128 ✓. This confirms the addition law. Then 2³ × 3⁴ — different bases, so no index law applies — calculate directly: 8 × 81 = 648.",
                        "For cancelling fractions: write 'I can only cancel FACTORS — things multiplied together, not added together' at the top of every algebraic fraction problem until the habit is fixed."
                    ],
                    misconceptionsToAddress: [
                        "Unlike terms combined → circling variable parts habit",
                        "(a+b)² missing 2ab → always rewrite as double brackets first",
                        "Index multiplication confused → numerical verification habit"
                    ]
                },

                developing: {
                    characteristics: [
                        "Collects like terms reliably for single-variable expressions but makes errors with expressions containing multiple variable parts (e.g. confuses ab and a²b)",
                        "Expands single brackets correctly with a positive factor but makes sign errors with negative factors",
                        "Applies multiplication and division index laws correctly but confuses the power law: writes (x²)³ = x⁵ (adds instead of multiplies)",
                        "Can simplify numerical fractions but attempts to cancel individual terms in algebraic fractions rather than common factors",
                        "Expands double brackets correctly using FOIL but forgets to collect the middle terms"
                    ],
                    immediateNextSteps: [
                        "For multi-variable like terms: write the variable part of each term in a box before collecting. The box for 3ab should read 'ab'; the box for 5a²b should read 'a²b'. Only match boxes that are identical — ab ≠ a²b even though both contain a and b.",
                        "For negative bracket errors: before expanding any bracket, write the sign of the outside factor explicitly: if negative, write 'EVERY SIGN INSIDE FLIPS' next to the bracket. Expand term by term, checking the sign of each product before writing it.",
                        "For power law: test (x²)³ numerically using x = 2: (4)³ = 64. Now check 2²×³ = 2⁶ = 64 ✓. Then check 2²⁺³ = 2⁵ = 32 ✗. The numerical check immediately shows that the power law requires multiplication of indices, not addition.",
                        "For FOIL collection: after expanding, draw a ring around the two middle terms before collecting. Labelling them 'INNER' and 'OUTER' in different colours makes them visible before collection.",
                        "For algebraic fractions: always factorise both numerator and denominator completely before any cancellation. Write the factorised forms on separate lines — never cancel from the unfactorised expression."
                    ],
                    misconceptionsToAddress: [
                        "Multi-variable term confusion → boxing the variable part habit",
                        "Power law addition error → numerical verification",
                        "Algebraic fraction term cancellation → enforce factorise-first rule"
                    ]
                },

                proficient: {
                    characteristics: [
                        "Collects like terms in complex multi-variable, multi-power expressions without error",
                        "Expands single and double brackets correctly including with negative factors and squared brackets",
                        "Applies all six index laws fluently including with fractional and negative indices",
                        "Simplifies algebraic fractions by factorising numerator and denominator and cancelling common factors",
                        "Can factorise expressions with a numerical and variable HCF extracted simultaneously"
                    ],
                    immediateNextSteps: [
                        "Extend to factorising trinomials: given ax² + bx + c with a = 1, find two numbers that multiply to c and add to b. This is the natural next step from single-bracket factorisation and a prerequisite for solving quadratic equations.",
                        "Practise adding and subtracting algebraic fractions with different denominators — find the LCM of the denominators, create equivalent fractions, combine, and simplify. This combines fraction skills with like-term collection.",
                        "Explore the difference-of-squares pattern deeply: given any expression of the form a² − b², immediately factorise as (a+b)(a−b). Practise recognising disguised examples: 4x² − 9 = (2x+3)(2x−3); x⁴ − 1 = (x²+1)(x²−1) = (x²+1)(x+1)(x−1).",
                        "Connect index notation to surds: rewrite √x as x^(1/2), ∛x as x^(1/3), and practice simplifying expressions like x^(1/2) × x^(3/2) using the multiplication law. This bridges index laws to further algebra and calculus."
                    ],
                    misconceptionsToAddress: [
                        "Partial factorisation (missing part of the HCF): always check that the remaining bracket can be factorised further",
                        "Adding fractions by adding denominators: reinforce LCM-first routine before any fraction addition"
                    ]
                },

                expert: {
                    characteristics: [
                        "Factorises trinomials including where a ≠ 1 using inspection or the AC method",
                        "Manipulates complex algebraic fractions requiring factorisation of both quadratic numerator and denominator",
                        "Evaluates and simplifies expressions with fractional and negative indices fluently without a calculator",
                        "Recognises and applies special product identities (difference of squares, perfect square) as simplification shortcuts",
                        "Connects simplification to subsequent algebraic work: identifies when a simplified form enables a next step (e.g. cancelled factor reveals a zero, simplified fraction enables equation solving)"
                    ],
                    immediateNextSteps: [
                        "Explore rational expressions: add, subtract, multiply, and divide complex algebraic fractions requiring full factorisation before every operation. This consolidates all simplification skills in a single problem type.",
                        "Investigate partial fractions: given a rational expression with a factorisable denominator (e.g. 5/(x²-1)), decompose into A/(x+1) + B/(x-1). This reverses the fraction addition skill and previews integration techniques in calculus.",
                        "Derive the binomial theorem for (a + b)³ and (a + b)⁴ by extending double-bracket expansion. Identify Pascal's triangle as the coefficient pattern and connect to combinatorics.",
                        "Apply simplification in proof: prove that the difference of two consecutive square numbers is always odd. Write n² − (n−1)² = n² − n² + 2n − 1 = 2n − 1. This demonstrates that simplification is the mechanism of algebraic proof."
                    ],
                    misconceptionsToAddress: [
                        "Complex fraction simplification: reinforce that conditions (x ≠ a) must be stated whenever factors are cancelled",
                        "Index law application to sums: x^(1/2) + x^(1/2) ≠ x — reinforce that index laws apply to products, not sums"
                    ]
                }
            }
        },

factorization: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored factorization identities, definitions, and procedure names from memory without requiring explanation of why they work. The student reproduces facts accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. A student who cannot do this cannot access any higher level of factorization.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'The difference of squares identity is a² − b² = (a + b)(a − b)' is remember-level. Explaining why the identity holds by expanding (a + b)(a − b) crosses into understand.",
            examples: {
                factorFactorization:     "State what factorization means and write the difference of squares identity. Identify which of the following is a perfect square: x², 2x², 9, 15.",
                commonFactorTechniques:  "List the steps for extracting the HCF from a multi-term expression. Write the HCF of 12x²y and 8xy².",
                quadraticFactorization:  "State the condition on p and q for x² + bx + c = (x + p)(x + q). Name the two methods for factorizing ax² + bx + c when a ≠ 1.",
                differenceOfSquares:     "Write the difference of two squares identity. State whether x² + 16 can be factorized over the real numbers and give a reason in one sentence."
            }
        },

        understand: {
            description: "Explain the meaning behind factorization facts — why a technique works, what it connects to, and what a result means. The student demonstrates WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. The student explains a mechanism, connects factorization to expansion, or interprets a factorized form in context.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires a reason or mechanism. 'a² + b² cannot be factorized' is remember. 'a² + b² cannot be factorized over the reals because there are no two real numbers with sum 0 and product b² unless b = 0' is understand.",
            examples: {
                factorFactorization:     "Explain why factorization is called the inverse of expansion. Use a specific example to show that expanding the factorized form always recovers the original expression.",
                commonFactorTechniques:  "Explain why extracting the HCF is always the first step in factorization, using a two-step example to show how failing to extract the HCF first makes subsequent steps harder.",
                quadraticFactorization:  "Explain why the AC method splits the middle term into two parts before grouping. Use the example 2x² + 7x + 3 to show that the two parts m and n must satisfy m + n = b and mn = ac.",
                differenceOfSquares:     "Explain why a² − b² = (a + b)(a − b) by expanding (a + b)(a − b) step by step. Then explain why a² + b² does not factorize by attempting to write it as (a + ?)(a + ?) and showing no real values of ? work."
            }
        },

        apply: {
            description: "Use known factorization techniques to factorize or solve a problem not seen before in exactly this form. The student selects the correct technique and applies it accurately.",
            cognitiveDemand: "Procedure execution in a novel situation. The student identifies which technique applies (HCF, grouping, quadratic, difference of squares), sets it up correctly, and carries it through.",
            verbs: ["Factorize", "Solve", "Find", "Simplify", "Determine", "Calculate"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Factorize 3x² − 27' requires the student to extract HCF first (3), then apply difference of squares to (x² − 9). Merely reciting the difference of squares identity without applying it is understand, not apply.",
            examples: {
                factorFactorization:     "Factorize completely: (a) x² + 9x + 18; (b) 3x² − 75; (c) 2x³ + 6x² − 8x. Show all steps and verify each answer by expanding.",
                commonFactorTechniques:  "Factorize completely: (a) 15x²y − 10xy²; (b) 4a³b² + 6a²b³ − 2a²b². Show step-by-step extraction of the HCF and verify each result.",
                quadraticFactorization:  "Factorize using the AC method: (a) 3x² + 11x + 6; (b) 4x² − 8x − 5. Show the calculation of a × c, the identification of m and n, the split, and the grouping steps in full.",
                differenceOfSquares:     "Factorize: (a) 25x² − 49; (b) x⁴ − 81; (c) 2x² − 50. Show each step and state which identity or technique is used at each stage."
            }
        },

        analyze: {
            description: "Examine a factorization problem or result to identify structure, detect errors, classify expressions, or draw conclusions not directly stated. The student works from evidence to conclusion.",
            cognitiveDemand: "Decomposition and inference from evidence. The student classifies, detects, or deduces without being given the answer.",
            verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Compare", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from given information to a non-obvious conclusion. 'Determine which of the following are fully factorized' requires inspecting each expression for further factorizable components — the conclusion is not given.",
            examples: {
                factorFactorization:     "Five expressions are given: (a) 2(x + 3)(x − 3); (b) (x + 2)(x + 2); (c) 3x(x² − 9); (d) (2x + 4)(x − 1); (e) x(x + 5)(x − 5). Determine which are fully factorized and which can be factorized further. For each that is not fully factorized, complete the factorization.",
                commonFactorTechniques:  "A student claims that the HCF of 12x³y² and 18x²y³ is 6xy². Analyse this claim — calculate the correct HCF showing all steps for both numerical and variable components, identify any error, and factorize 12x³y² + 18x²y³ using the correct HCF.",
                quadraticFactorization:  "Without factorizing, determine whether each quadratic can be factorized over the integers: (a) x² + 5x + 6; (b) x² + 5x + 7; (c) 2x² − x − 6. For each, calculate the discriminant b² − 4ac and interpret its value to reach your conclusion.",
                differenceOfSquares:     "Three expressions are given: (a) x² − 12; (b) 9x² − 25; (c) x² + 4. Analyse each — determine whether it is a difference of two squares, a sum of two squares, or neither. For those that are a difference of squares, factorize. For those that are not, explain why they cannot be factorized using this identity."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the correctness or quality of a factorization, a claim, or a method. The student identifies what is wrong, explains the criterion by which it fails, and produces the correction.",
            cognitiveDemand: "Judgement with justification against a mathematical standard. Simply saying 'this is wrong' is not evaluate-level — the student must cite the specific rule violated and produce the full correct solution.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Justify", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a mathematical standard. 'A student writes (a + b)² = a² + b². Evaluate this.' The student must identify the error (missing 2ab), state the correct identity, and explain that the student confused squaring a sum with squaring each term individually.",
            examples: {
                factorFactorization:     "A student factorizes x² − 5x + 6 as (x − 2)(x + 3). Evaluate this answer — expand (x − 2)(x + 3), determine whether it reproduces the original expression, identify precisely what values of p and q are needed, and give the correct factorization with verification.",
                commonFactorTechniques:  "A student factorizes 6x² + 9x as 3(2x + 9x). Evaluate this working — identify exactly where the error occurs (which step and what the error is), explain the correct procedure for extracting the HCF, and give the correct factorized form with verification.",
                quadraticFactorization:  "A student attempts to factorize 2x² + 5x + 3 using the AC method and obtains (x + 1)(2x + 3). Evaluate this factorization by expanding (x + 1)(2x + 3), comparing to the original expression, identifying any discrepancy, and providing the correct factorization with all AC method steps shown.",
                differenceOfSquares:     "A student writes x² + 9 = (x + 3)(x − 3). Evaluate this claim — expand (x + 3)(x − 3) and compare it to x² + 9, identify the precise error, state the correct factorized form of x² − 9, and explain why x² + 9 cannot be factorized over the real numbers."
            }
        },

        create: {
            description: "Generate something new: an expression with specified factorization properties, an original problem, a real-world model, or a derivation from constraints. The student integrates multiple factorization concepts into a coherent, original output.",
            cognitiveDemand: "Synthesis and original production. The student produces an output that did not exist before, requiring the combination of multiple techniques and concepts.",
            verbs: ["Design", "Construct", "Formulate", "Derive", "Create", "Model", "Develop"],
            whatDistinguishesThisLevel: "Create requires original output, not retrieval or procedure execution. 'Construct a quadratic expression whose roots are x = 3 and x = −5, write it in expanded form, factorize it to verify, and design a word problem whose answer depends on finding these roots' requires synthesis of multiple skills and cannot be done by reproducing a memorised example.",
            examples: {
                factorFactorization:     "Design a real-world scenario (not projectile motion and not area problems) that leads to a quadratic equation. Write the equation, factorize it to find the solutions, interpret both solutions in context (including any that must be rejected on physical grounds), and explain what the factorized form reveals that the expanded form does not.",
                commonFactorTechniques:  "Construct three different algebraic expressions — one that requires only HCF extraction, one that requires HCF then difference of squares, and one that requires HCF then quadratic factorization — such that the HCF in each case is 4x². Show the full factorization of each expression and verify by expanding.",
                quadraticFactorization:  "Formulate a quadratic equation with integer coefficients whose solutions are x = 2/3 and x = −5. Derive the equation by working backwards from the factors, expand it to standard form, factorize it from scratch using the AC method, and verify the solutions satisfy the original equation.",
                differenceOfSquares:     "Create an algebraic puzzle: write two different expressions, one that looks like a difference of squares but is not (because one term is not a perfect square), and one that is a perfect square trinomial. For each, explain clearly how a student should recognise what it is, what technique applies, and carry out the correct factorization or state why factorization over the integers is impossible."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can extract a numerical HCF from simple two-term expressions but omits variable components from the HCF",
                "Attempts quadratic factorization by trial and error without a systematic method — guesses brackets without verifying by expansion",
                "Confuses the difference of squares with the sum of squares — attempts to factorize x² + 9 as (x + 3)(x − 3)",
                "Applies the zero-product property to non-zero right-hand sides (e.g. sets each factor equal to 5 instead of 0 when the product equals 5)",
                "Writes (a + b)² = a² + b², omitting the middle term 2ab"
            ],
            immediateNextSteps: [
                "For HCF omitting variables: write the HCF extraction as two separate steps — (1) HCF of numbers only, (2) HCF of variable parts (lowest power of each variable present in ALL terms) — then multiply the two results together before dividing.",
                "For trial-and-error quadratic attempts: enforce the sum-and-product rule in writing before any bracket is written. Write 'I need p + q = ___ and p × q = ___' at the start of every quadratic factorization problem. Do not write any bracket until p and q are confirmed.",
                "For sum vs difference of squares confusion: write both identities side by side — a² − b² = (a + b)(a − b) and a² + b² = CANNOT BE FACTORIZED — and underline the minus sign in the first. Before attempting any two-term factorization, ask: 'Is this minus or plus?'",
                "For zero-product property errors: before every equation-solving step, rewrite the equation with 0 on the right side explicitly. Write the rule at the top: 'Zero-product property requires = 0.' Do not proceed until the equation is rearranged.",
                "For (a+b)² errors: derive the expansion from scratch each time — (a + b)(a + b) = a² + ab + ab + b² = a² + 2ab + b². Do this derivation for five examples until the middle term 2ab is automatic."
            ],
            misconceptionsToAddress: [
                "x² + 9 = (x + 3)(x − 3) → sum vs difference of squares side-by-side card",
                "(a + b)² = a² + b² → derive the expansion from (a + b)(a + b) every time",
                "HCF omits variable → two-step HCF extraction procedure"
            ]
        },

        developing: {
            characteristics: [
                "Correctly extracts HCF for single-variable expressions but makes errors with two-variable HCFs",
                "Can factorize monic quadratics (a = 1) reliably but has not yet mastered the AC method for a ≠ 1",
                "Recognizes the difference of squares identity for simple cases (x² − 9) but misses it when coefficients are involved (4x² − 25)",
                "Makes sign errors when factorizing by grouping — incorrect sign when extracting a negative HCF from the second pair",
                "Forgets to check whether the result of extracting HCF can be factorized further"
            ],
            immediateNextSteps: [
                "For two-variable HCF errors: treat numerical and variable parts completely separately — HCF of numbers first, then for each letter write the minimum power appearing in all terms. Combine at the end. Practise on five two-variable examples before moving to expressions with three variables.",
                "For AC method: before every non-monic quadratic, write 'a × c = ___' at the top of the working. List ALL factor pairs of a × c systematically (not randomly) until the pair summing to b is found. Never skip the listing step.",
                "For (4x² − 25) type: extend the difference of squares checklist — 'Is the coefficient of x² a perfect square? (4 = 2²) Is the constant a perfect square? (25 = 5²)' Write a and b from a² = first term and b² = second term before writing the factorization.",
                "For grouping sign errors: when extracting the HCF from a negative group, always substitute the factored form back immediately (before moving to the next step) and confirm the signs match. For −5x + 10: write −5(x − 2) and immediately verify: −5(x) + (−5)(−2) = −5x + 10 ✓.",
                "For incomplete multi-step factorization: add a final check at the end of every problem: 'Can any factor in my answer be factorized further?' Apply this as a mandatory step before writing the final answer."
            ],
            misconceptionsToAddress: [
                "Missing (4x² − 25) as difference of squares → extend the checklist to coefficients",
                "AC method skipping factor listing → enforce systematic listing",
                "Incomplete factorization → mandatory further-factorization check"
            ]
        },

        proficient: {
            characteristics: [
                "Factorizes all standard forms (HCF, grouping, monic quadratic, non-monic quadratic via AC method, difference of squares, perfect square trinomial) accurately",
                "Selects the appropriate technique quickly based on the number of terms and the form of the expression",
                "Solves quadratic equations by factorization including rearrangement and application of the zero-product property",
                "Recognizes multi-step factorization problems and applies HCF before any other technique without prompting",
                "Simplifies algebraic fractions by factorizing numerator and denominator and cancelling common factors"
            ],
            immediateNextSteps: [
                "Factorize higher-degree polynomials: given a cubic ax³ + bx² + cx + d, use the factor theorem (if p is a root, (x − p) is a factor) to find one linear factor, then divide to obtain a quadratic, and factorize the quadratic. This extends all current techniques to degree 3.",
                "Partial fractions: given an algebraic fraction with a factorisable denominator, decompose it into partial fractions — this is the reverse of adding fractions and requires fluent factorization of the denominator.",
                "Factorization and the discriminant: connect the discriminant b² − 4ac to factorizability — if the discriminant is a perfect square and the coefficients are integers, the quadratic factorizes over the integers; if not, it is irreducible over the integers. Use this to quickly classify quadratics before attempting factorization.",
                "Factorize sum and difference of cubes: a³ + b³ = (a + b)(a² − ab + b²) and a³ − b³ = (a − b)(a² + ab + b²). These are the next special identities beyond the quadratic case and appear frequently in university entrance problems."
            ],
            misconceptionsToAddress: [
                "Irreducibility over integers vs. over reals: develop the habit of stating the number system when declaring an expression 'cannot be factorized'",
                "Cancelling incorrectly in algebraic fractions: only factors (multiplied terms) can be cancelled, never terms (added/subtracted terms)"
            ]
        },

        expert: {
            characteristics: [
                "Factors polynomials of degree 3 and above using the factor theorem and polynomial division",
                "Applies factorization to simplify complex algebraic fractions and partial fraction decompositions",
                "Connects the factorized form of a polynomial to its graph (x-intercepts, multiplicity of roots, end behaviour)",
                "Uses the discriminant to classify quadratics as having two real roots, one repeated root, or no real roots without attempting factorization",
                "Derives and applies the sum and difference of cubes identities"
            ],
            immediateNextSteps: [
                "Gaussian integers: explore factorization over the Gaussian integers (complex numbers of the form a + bi where a and b are integers). Here, x² + 1 = (x + i)(x − i) — expressions that were irreducible over the reals now factorize. This connects factorization to complex numbers and the Fundamental Theorem of Algebra.",
                "Unique factorization and the Fundamental Theorem of Algebra: study the formal statement that every polynomial of degree n over ℂ has exactly n roots (counted with multiplicity). Connect this to the factored form as a product of exactly n linear factors.",
                "Factorization in modular arithmetic: factorize x² − 1 modulo 8. The answer has more solutions than over the integers (0, 1, 3, 5, 7) — this introduces the concept that unique factorization does not always hold, which underpins modern cryptography.",
                "Resultants and discriminants: derive the discriminant b² − 4ac from first principles by completing the square on the general quadratic, and connect it to the resultant of a polynomial and its derivative — a higher-algebra generalization."
            ],
            misconceptionsToAddress: [
                "All polynomials factorize over the reals → only degree 1 always factorizes; higher degrees may be irreducible",
                "Roots and factors are the same thing → a root is a value; a factor is an expression; they are connected by the Factor Theorem, not identical"
            ]
        }
    }
},

transformations: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored definitions, coordinate rules, and properties of each transformation type from memory without requiring explanation.",
            cognitiveDemand: "Verbatim or near-verbatim recall of rules, names, and definitions. No reasoning required. Students who cannot do this cannot access higher levels.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label", "Recall"],
            whatDistinguishesThisLevel: "A remember-level response gives the correct fact with no explanation. 'The rule for reflection in y = x is (x, y) → (y, x)' is remember-level. Adding 'because swapping coordinates moves the point to the opposite side of the diagonal' crosses into understand.",
            examples: {
                translationBasics:   "State the coordinate rule for a translation by vector (a over b). Name the two properties of a shape that are always preserved by a translation.",
                reflectionBasics:    "Write the coordinate rule for reflection in: (a) the x-axis; (b) the y-axis; (c) the line y = x. List what is preserved and what changes under reflection.",
                rotationBasics:      "State the coordinate rules for: (a) 90° anticlockwise rotation about the origin; (b) 180° rotation about the origin. Name the three pieces of information required to fully describe a rotation.",
                enlargementBasics:   "State the coordinate rule for enlargement with scale factor k from the origin. Identify what 'scale factor k = 1/3' means for the size of the image relative to the object."
            }
        },

        understand: {
            description: "Explain why transformation rules work, connect algebraic rules to geometric outcomes, and interpret what transformation properties mean.",
            cognitiveDemand: "Translation and interpretation. The student explains a mechanism or connection, not just a fact. An explanation the student cannot produce by pure memorisation demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires a reason, not just a rule. 'Reflecting in y = x swaps the coordinates' is remember. 'Reflecting in y = x swaps the coordinates because the line y = x is the perpendicular bisector of the segment from any point (a, b) to the point (b, a), which can be shown by checking midpoint and gradient' is understand.",
            examples: {
                translationBasics:   "Explain why a translation preserves both the size and orientation of a shape, connecting your answer to the fact that every point moves by the same vector.",
                reflectionBasics:    "Explain why reflection reverses orientation. Use the example of reflecting a triangle with vertices labelled clockwise — explain what happens to the labelling order in the image and why.",
                rotationBasics:      "Explain why 90° clockwise and 270° anticlockwise produce the same image. Connect to the idea that both rotations represent the same physical turn but described in opposite directions.",
                enlargementBasics:   "Explain why the area of an image under enlargement with scale factor k is k² times the area of the object, not k times. Use a specific rectangle to illustrate."
            }
        },

        apply: {
            description: "Use transformation rules and coordinate methods to find image coordinates or write equations of mirror lines in unseen problems.",
            cognitiveDemand: "Procedure execution in a novel situation. The student selects the correct rule, applies it correctly to each vertex, and presents the complete image. A common failure is applying the rule to only some vertices.",
            verbs: ["Calculate", "Find", "Apply", "Determine", "Plot", "Map", "Transform"],
            whatDistinguishesThisLevel: "Apply requires working on a specific, unseen problem — not repeating a memorised example. Solving a rotation problem with a non-origin centre is apply-level; reciting the rotate–translate–untranslate steps without executing them is understand.",
            examples: {
                translationBasics:   "Triangle XYZ has vertices X(−2, 1), Y(3, 1), Z(3, 5). Translate the triangle by vector (4 over −3). Write the coordinates of the image vertices X′, Y′, Z′ and state the length of X′Y′.",
                reflectionBasics:    "Reflect quadrilateral ABCD with A(1, 3), B(4, 3), C(4, 6), D(1, 6) in the line y = 2. Show all working and write the coordinates of the image vertices.",
                rotationBasics:      "Rotate point P(4, −1) by 90° anticlockwise about the centre C(1, 2). Show the translate–rotate–untranslate method in full.",
                enlargementBasics:   "Enlarge triangle with vertices (2, 1), (6, 1), (6, 4) by scale factor −2 from centre (1, 1). Find the image vertices and state the area of the image triangle."
            }
        },

        analyze: {
            description: "Identify which transformation has been applied from object and image information, determine missing parameters (centre, scale factor, mirror line), and analyse the structure of combined transformations.",
            cognitiveDemand: "Inference from evidence. The student reaches a conclusion — which transformation, what centre, what scale factor — not given to them directly, and justifies it from coordinates or diagrams.",
            verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Find the centre of", "Describe fully"],
            whatDistinguishesThisLevel: "Analyze requires deriving a conclusion from data rather than applying a known formula. 'Given object and image coordinates, determine the transformation' is analyze — the student must compare coordinates, detect the pattern, identify the transformation type, and find all parameters.",
            examples: {
                translationBasics:   "Shape A has vertices (1, 1), (3, 1), (3, 4). Its image B has vertices (−2, 4), (0, 4), (0, 7). Determine fully the transformation that maps A to B, justifying your answer.",
                reflectionBasics:    "Point P(3, 5) maps to P′(5, 3) under a reflection. Determine the equation of the mirror line. Show your reasoning using the midpoint and gradient of PP′.",
                rotationBasics:      "Triangle T has vertices (2, 0), (5, 0), (5, 3). Its image T′ has vertices (0, −2), (0, −5), (−3, −5). Determine the angle, direction, and centre of the rotation that maps T to T′. Show your full method.",
                enlargementBasics:   "Rectangle ABCD has vertices A(1, 1), B(3, 1), C(3, 2), D(1, 2). Its image A′B′C′D′ has vertices A′(−2, −2), B′(4, −2), C′(4, 1), D′(−2, 1). Determine the scale factor and centre of enlargement."
            }
        },

        evaluate: {
            description: "Judge the validity or completeness of a transformation description, a set of image coordinates, or a student's method. Identify precisely what is wrong and give the correction.",
            cognitiveDemand: "Judgement with mathematical justification. Identifying an error is not enough — the student must state the criterion violated and produce the correct result.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Identify the error", "Correct"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a mathematical standard. 'A student says a rotation by 90° anticlockwise maps (3, 2) to (−3, 2) — evaluate this claim' requires the student to check using the rule (x, y) → (−y, x) giving (−2, 3), identify the error (incorrect rule applied), state the correct rule, and give the correct image.",
            examples: {
                translationBasics:   "A student describes a transformation as 'moved 3 right and 4 down.' Evaluate whether this is a complete description of a transformation in formal mathematics, identify what is missing, and write the complete correct description.",
                reflectionBasics:    "A student reflects P(4, 2) in the line y = x and obtains P′(−4, −2). Evaluate the student's answer — identify the precise error in the rule applied, state the correct rule, find the correct image, and explain geometrically why (−4, −2) cannot be the reflection of (4, 2) in y = x.",
                rotationBasics:      "A student describes a transformation as 'a rotation of 90°.' Evaluate whether this is a complete description, list exactly what information is missing, and explain why the omitted details are each essential.",
                enlargementBasics:   "A student enlarges a shape with scale factor 3 from centre (2, 1) by applying the rule (x, y) → (3x, 3y) to each point. Evaluate this method — identify the error, explain what is wrong with this rule when the centre is not the origin, and give the correct general rule."
            }
        },

        create: {
            description: "Design original transformation problems, construct multi-step transformation sequences, model real-world situations using transformations, or derive combined results.",
            cognitiveDemand: "Synthesis and original production. The student produces something that did not exist before and must combine multiple concepts. A strong response is internally consistent and addresses all specified constraints.",
            verbs: ["Design", "Construct", "Formulate", "Create", "Model", "Derive", "Develop", "Compose"],
            whatDistinguishesThisLevel: "Create requires original, constrained output. 'Design a shape and two transformations such that the final image is congruent to the object and in the same orientation, but in a different position' requires inventing a shape, choosing two transformations whose combination preserves orientation, executing both, and verifying the result — none of which can be done by reproducing a memorised example.",
            examples: {
                translationBasics:   "Design a logo for a company that demonstrates at least two different types of transformation symmetry. Describe each transformation precisely using correct mathematical language, give the coordinates of the original and image shapes, and explain what property of each transformation makes it suitable for a logo design.",
                reflectionBasics:    "Create a symmetric pattern on a coordinate grid by starting with a triangle of your choice in the first quadrant and applying a sequence of reflections in at least two different mirror lines. Describe each reflection fully, give all image coordinates, and determine whether the final image is a translation, rotation, or reflection of the original triangle.",
                rotationBasics:      "Construct a point P and two different rotation centres C₁ and C₂ such that rotating P by 180° about C₁ and then by 180° about C₂ produces a result that is equivalent to a specific translation. State the translation vector and prove algebraically that the composition of the two 180° rotations gives this translation.",
                enlargementBasics:   "Formulate a real-world scenario (not a map or a camera) in which an enlargement with a fractional scale factor arises naturally. Write the mathematical model, identify the scale factor and centre of enlargement in context, solve a problem using the model, and calculate the ratio of the areas of the original and image shapes."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can identify that a shape has moved or changed but cannot name the transformation type or state its defining properties",
                "Applies the translation vector to only some vertices, missing others",
                "Confuses reflection in y = x with reflection in the x-axis — negates coordinates instead of swapping them",
                "Cannot distinguish clockwise from anticlockwise rotation — rotates in the wrong direction approximately half the time",
                "Applies the enlargement rule (kx, ky) regardless of where the centre is — always enlarges from the origin",
                "Cannot state the minimum information needed to describe any transformation fully"
            ],
            immediateNextSteps: [
                "For vertex omission: always list all vertices of the shape in a column before transforming. Work through the column systematically — never apply the rule to just one point and move on.",
                "For reflection confusion: make four separate diagrams, one per standard mirror line. On each, plot a point like (3, 2) and its image under that reflection. Label the rule in words on the diagram. Keep these four reference diagrams visible until the rules are automatic.",
                "For rotation direction: draw a clock face on the coordinate plane. Clockwise = same direction as clock hands. Anticlockwise = opposite. Always physically rotate your pencil before applying the rule.",
                "For non-origin enlargement: always rewrite the rule as (cx + k(x − cx), cy + k(y − cy)) fully before substituting. Never simplify to (kx, ky) until you have confirmed cx = cy = 0.",
                "For descriptions: memorise the minimum information table as a checklist and tick each requirement before finishing any description question."
            ],
            misconceptionsToAddress: [
                "Reflection in y = x negates coordinates → make the four-reflections reference diagram",
                "Enlargement always from origin → always write out the full non-origin rule",
                "Clockwise/anticlockwise confusion → clock-face diagram habit"
            ]
        },

        developing: {
            characteristics: [
                "Applies all four transformation rules correctly when the mirror line or centre is at the origin or on an axis, but makes errors for off-axis lines or non-origin centres",
                "Can describe translations and reflections fully but omits direction or centre when describing rotations",
                "Can identify that an enlargement has occurred but calculates the scale factor incorrectly by dividing object length by image length (inverted ratio)",
                "Cannot yet find the centre of rotation using the perpendicular bisector method",
                "Applies combined transformations in the wrong order approximately a third of the time"
            ],
            immediateNextSteps: [
                "For off-axis reflections: derive the rule for y = k by asking 'how far is the point from the mirror line, and where is the point the same distance on the other side?' Always work from the geometric definition rather than memorising a separate formula.",
                "For rotation descriptions: before writing the description, always ask three questions in order: (1) where is the centre? (2) what is the angle? (3) which direction? Never allow yourself to write a rotation description without answering all three.",
                "For scale factor direction: scale factor = image length ÷ object length (image over object, not object over image). Practise computing this ratio for five pairs before any full enlargement problem.",
                "For finding centre of rotation: practise the perpendicular bisector method on three examples. The key steps are: draw the segment from each object vertex to its image vertex, then bisect each segment perpendicularly. The intersection is the centre.",
                "For combined transformations: always label the steps as 'Step 1:' and 'Step 2:' before starting, apply them strictly in order, and check that the output of Step 1 is used as the input of Step 2."
            ],
            misconceptionsToAddress: [
                "Inverted scale factor → image ÷ object rule",
                "Incomplete rotation descriptions → three-question checklist",
                "Wrong order in combined transformations → label steps before starting"
            ]
        },

        proficient: {
            characteristics: [
                "Applies all four transformation types correctly to any polygon in any position, including non-origin centres and off-axis mirror lines",
                "Describes all four transformations fully with the correct minimum information",
                "Can find the centre of rotation from object and image coordinates using perpendicular bisectors",
                "Can find the centre of enlargement and scale factor from object and image coordinates",
                "Correctly applies two transformations in sequence, in the correct order"
            ],
            immediateNextSteps: [
                "Explore the equivalence of combined transformations: prove that reflecting a shape in two parallel lines produces a translation, and find the translation vector in terms of the distance between the lines.",
                "Introduce transformation matrices: write each standard transformation as a 2×2 matrix and verify that matrix multiplication gives the same result as applying the coordinate rule. This previews the linear algebra connection.",
                "Explore negative scale factor enlargements in depth: investigate the relationship between k = −1 from a given centre and a 180° rotation about that centre — are they always the same transformation?",
                "Investigate invariant points: for which transformations (other than the identity) does a point map to itself? Prove that translations have no invariant points, reflections have a line of invariant points, rotations (except 180°) have only the centre, and enlargements (except k = 1 or k = −1) have only the centre.",
                "Apply transformations to functions: explore how reflecting y = f(x) in the x-axis gives y = −f(x) and in the y-axis gives y = f(−x) — connecting geometric transformations to function transformations in algebra and calculus."
            ],
            misconceptionsToAddress: [
                "Assuming all transformations commute → demonstrate a specific counterexample and explain why order matters algebraically",
                "Believing negative scale factor is impossible → work three examples with negative k and verify the image is on the opposite side of the centre"
            ]
        },

        expert: {
            characteristics: [
                "Derives coordinate rules for all standard transformations from geometric first principles",
                "Identifies single equivalent transformations for any combination of two isometries",
                "Connects transformations to matrix representations and can compose transformation matrices",
                "Models real-world problems (optics, robotics, design) using transformation mathematics",
                "Explores invariant properties and uses them to classify transformations algebraically"
            ],
            immediateNextSteps: [
                "Derive the general rotation matrix: starting from the geometric definition of rotation, prove that the image of (x, y) under anticlockwise rotation by angle θ is (x cosθ − y sinθ, x sinθ + y cosθ). Verify the standard 90° and 180° cases from this formula.",
                "Investigate the group structure of transformations: show that the set of all isometries of the plane is closed under composition, has an identity (zero translation), and each transformation has an inverse. Explore which subsets form groups.",
                "Apply homogeneous coordinates: show how translations — unlike linear transformations — can be represented as matrix multiplication by using 3×3 matrices with a homogeneous coordinate. This is the framework used in all computer graphics systems.",
                "Explore affine transformations: generalise the transformations in this lesson to the class of all transformations of the form (x, y) → (ax + by + e, cx + dy + f), which includes shears and general linear maps. Determine which of the four lesson transformations are affine."
            ],
            misconceptionsToAddress: [
                "Rotation matrix as separate memorised rule rather than derived formula → derive from cos/sin geometry each time until internalised",
                "Combined transformations always producible as a single rotation or translation → introduce the case of reflection followed by rotation, which may produce a glide reflection — not covered by the four standard types"
            ]
        }
    }
},

functions: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored definitions, notation rules, and properties of functions from memory without requiring explanation. The student reproduces facts accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. Foundational for all higher levels.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response states the fact without explaining why. 'A function assigns exactly one output to each input' is remember-level. Adding an explanation of why this matters or connecting it to a graph crosses into understand.",
            examples: {
                functionDefinition: "State the definition of a function. Identify which of the following mappings are functions: (a) {(1,2),(2,3),(3,2)}, (b) {(1,2),(1,3),(2,4)}, (c) {(2,5),(3,5),(4,5)}.",
                functionNotation:   "Write the meaning of f(3) in words. List the steps for evaluating a function at a given input value.",
                domainAndRange:     "State the two conditions that restrict the domain of a function (division by zero; square root of a negative). Identify the domain of f(x) = 1/x.",
                typesOfFunctions:   "Name four types of functions. Write the general form of a quadratic function. Identify the shape of the graph of f(x) = 2ˣ."
            }
        },

        understand: {
            description: "Explain the meaning behind function concepts — why the vertical line test works, why domain restrictions exist, why f(x) notation is used. The student demonstrates WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. The student explains a mechanism, connects algebra to geometry, or rephrases a concept in their own terms.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires a reason. 'The vertical line test works because each vertical line represents one input value — if it crosses the graph twice, that input has two outputs, violating the function definition' is understand-level. Simply stating 'use the vertical line test' is remember.",
            examples: {
                functionDefinition: "Explain why the vertical line test determines whether a graph represents a function. Your answer must reference the definition of a function and connect the test to the one-output-per-input rule.",
                functionNotation:   "Explain why f(x) does not mean f multiplied by x. Describe what f(x + h) asks you to compute and why it is different from f(x) + h.",
                domainAndRange:     "Explain why division by zero is excluded from the domain of a rational function. Use the example f(x) = 1/(x − 3) and connect the algebraic restriction to the graphical feature (vertical asymptote) it produces.",
                typesOfFunctions:   "Explain why an exponential function f(x) = 2ˣ can never produce a negative output. Connect your explanation to the range and to the horizontal asymptote at y = 0."
            }
        },

        apply: {
            description: "Use known procedures — evaluating functions, finding domains, describing transformations, computing composites — to solve problems not seen before in exactly this form.",
            cognitiveDemand: "Procedure execution in a novel situation. The student selects the correct method, sets it up, and carries it through without being told which method to use.",
            verbs: ["Calculate", "Evaluate", "Find", "Determine", "Compute", "Graph", "Write"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Evaluate f(−3) for f(x) = x² + 2x − 5' requires executing the substitution procedure on a specific, new input. Merely describing how substitution works is understand.",
            examples: {
                functionDefinition: "Use the vertical line test to determine whether each relation is a function. For each that is a function, state whether it is one-to-one using the horizontal line test.",
                functionNotation:   "Given f(x) = 3x² − x + 2, find: (a) f(0); (b) f(−3); (c) f(2a); (d) the value of x for which f(x) = 14.",
                domainAndRange:     "Find the domain of each function, expressing your answer in interval notation: (a) f(x) = √(3x − 9); (b) g(x) = (x + 2)/((x − 1)(x + 4)); (c) h(x) = √(x + 5)/(x − 2).",
                typesOfFunctions:   "Describe the transformations that map f(x) = x² to g(x) = −2(x + 3)² + 7. State the coordinates of the vertex and the range of g(x)."
            }
        },

        analyze: {
            description: "Break down information about functions to identify structure, patterns, and relationships. The student derives conclusions not given to them — from graphs, tables, equations, or contextual descriptions.",
            cognitiveDemand: "Decomposition and inference from evidence. The student reaches a justified conclusion from the evidence, not from memory of a formula.",
            verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Compare", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given a table of values, determine whether the function is linear, quadratic, or exponential and justify your decision using the pattern of differences or ratios' requires examining evidence and reasoning to a conclusion — not executing a procedure.",
            examples: {
                functionDefinition: "A graph is provided. Determine whether it represents a function, whether that function is one-to-one, and what transformations would be needed to produce a function that is both one-to-one and onto from a given domain to codomain.",
                functionNotation:   "Given f(x) = 2x + 1 and g(x) = x² − 4, find f(g(x)) and g(f(x)). Analyse the results — identify values of x for which f(g(x)) = g(f(x)) and explain why the two composites are equal only at those points.",
                domainAndRange:     "A function h has the property that h(x) = h(−x) for all x (it is an even function). Analyse what this means for its graph, for its domain and range, and explain how this knowledge simplifies finding the range.",
                typesOfFunctions:   "A table gives values of an unknown function: x = 0, 1, 2, 3 and y = 3, 6, 12, 24. Analyse the data to determine the function type, write an explicit formula, and identify the growth factor and starting value in context."
            }
        },

        evaluate: {
            description: "Make a supported mathematical judgement: assess whether a claimed function property is correct, identify errors in solutions, or critique a choice of model. The student provides a specific criterion and correction.",
            cognitiveDemand: "Judgement with justification. A correct claim of 'wrong' is not evaluate-level — the student must say precisely what is wrong, why it fails mathematically, and what the correct answer is.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Justify", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a mathematical standard. 'A student claims f⁻¹(x) = 1/f(x). Evaluate this.' The student must identify this as incorrect (judgement), explain that f⁻¹ denotes the inverse function (undoing f) not the reciprocal of f (criterion), and give a correct example showing the difference (correction).",
            examples: {
                functionDefinition: "A student says 'the mapping {(1,2),(2,4),(2,6)} is a function because each output appears only once.' Evaluate this reasoning — identify the error precisely, state the correct definition, and explain why this mapping is not a function.",
                functionNotation:   "A student evaluates f(x + 3) for f(x) = x² + 1 and writes f(x + 3) = x² + 1 + 3 = x² + 4. Evaluate this work — identify the precise error in substitution, carry out the correct evaluation, and explain the general principle for evaluating f(expression).",
                domainAndRange:     "A student finds the range of f(x) = (x − 1)² + 4 as 'all real numbers' because 'a parabola goes on forever'. Evaluate this claim — identify the error, state the correct range with justification referencing the minimum value of a squared term, and sketch the graph to support your answer.",
                typesOfFunctions:   "A student is asked to find the inverse of f(x) = x² and writes f⁻¹(x) = √x without any domain restriction. Evaluate this answer — explain why x² does not have an inverse without restriction, state what restriction is needed and why, and give the correct inverse with its domain."
            }
        },

        create: {
            description: "Produce something original: a function model for a real-world scenario, a function with specified properties, a composite function satisfying given conditions, or a complete analysis of a novel function.",
            cognitiveDemand: "Synthesis and original production. The output did not exist before and requires combining multiple concepts coherently. There is no single correct answer — quality is assessed by internal consistency, mathematical correctness, and completeness.",
            verbs: ["Design", "Construct", "Formulate", "Derive", "Create", "Model", "Develop"],
            whatDistinguishesThisLevel: "Create requires original output that could not be produced by memorising a template. 'Design a function that models a real-world scenario, has a restricted domain, a maximum value, and is not one-to-one. Find the range, identify the vertex, and explain what each parameter means in context.' No example in this lesson does exactly this.",
            examples: {
                functionDefinition: "Design a mapping that is NOT a function and modify it in two different ways to make it a function — one modification producing a one-to-one function and the other producing a many-to-one function. For each version, draw the mapping diagram, state the domain and range, and apply the vertical line test on a sketch.",
                functionNotation:   "Construct two functions f and g such that f(g(x)) = 4x² − 12x + 9 and g(f(x)) ≠ f(g(x)). Show your construction explicitly, verify f(g(x)) by expanding, verify g(f(x)) differs, and explain the algebraic reason for the difference.",
                domainAndRange:     "Create a real-world scenario that is modelled by a function with both a root restriction and a denominator restriction on its domain, so that the domain has a gap (e.g. [a, b) ∪ (b, +∞)). Write the function, derive the domain fully, find f at three specific values in the domain, and interpret the excluded value in your scenario's physical context.",
                typesOfFunctions:   "Formulate a complete transformation problem: write a base function f(x), apply at least four distinct transformations (horizontal/vertical translation, reflection, vertical stretch) in sequence to produce g(x). Write the equation of g(x), state the domain and range of both f and g, sketch both graphs on the same axes, and write one exam-style question about the transformation that a classmate could answer using only the graph."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Reads f(x) as 'f times x' and attempts to treat the bracket as multiplication",
                "Cannot distinguish between a function and a relation — does not apply the vertical line test correctly",
                "Evaluates f(3) by writing f(3) = f + 3 rather than substituting x = 3 into the rule",
                "Cannot identify the domain restriction from a fraction — sets the numerator (not the denominator) to zero",
                "Confuses domain and range — identifies the domain as the y-values and vice versa",
                "Cannot identify the type of function from its equation or graph"
            ],
            immediateNextSteps: [
                "For f(x) as multiplication: always write 'f(x) means the OUTPUT when INPUT is x' at the top of each page. Draw an input-output machine diagram: x → [RULE] → f(x). This physical separation prevents the multiplication misconception.",
                "For vertical line test: draw five graphs (parabola, circle, straight line, V-shape, spiral). Practice drawing vertical lines at three different x-positions on each. Count intersections each time. Record 'at most one intersection = function'. Do this for ten graphs before attempting algebraic problems.",
                "For evaluation errors: use a placeholder technique — rewrite the rule replacing x with an empty box: f(□) = 3(□)² + 2. Then fill the box with the given input value. Never write f(3) = f + 3.",
                "For domain and range confusion: domain = inputs = x-axis = horizontal; range = outputs = y-axis = vertical. Write this explicitly at the start of every domain/range problem. Draw arrows from 'domain' pointing to the x-axis.",
                "For denominator restriction: set denominator = 0 as a single mechanical step written first, before attempting any other algebra. Circle the result and write 'EXCLUDED FROM DOMAIN' in capital letters."
            ],
            misconceptionsToAddress: [
                "f(x) = f × x → input-output machine diagram",
                "Numerator = 0 for domain → always set DENOMINATOR = 0 first",
                "Domain = y-values → write domain = x, range = y explicitly every time"
            ]
        },

        developing: {
            characteristics: [
                "Evaluates f(a) correctly for numbers but makes errors with f(x + h) — adds h to the whole expression rather than substituting (x + h) for x",
                "Identifies domain restrictions for fractions and roots in isolation but misses combined restrictions",
                "Can describe individual transformations but cannot apply them in combination correctly — applies vertical shifts to x-values and horizontal shifts to y-values",
                "Computes f(g(a)) correctly (composite at a number) but cannot form f(g(x)) as an algebraic expression",
                "Identifies that a function needs to be one-to-one for an inverse to exist but cannot restrict the domain to achieve this"
            ],
            immediateNextSteps: [
                "For f(x + h) errors: use the placeholder box method — write f(□) = [rule with □]. Then place (x + h) in every box: f(x + h) = [rule with (x + h)]. Expand only after substituting. Never skip the substitution step.",
                "For combined domain restrictions: list all restrictions separately as a numbered list before combining. (1) Root restriction: expression ≥ 0. (2) Denominator restriction: denominator ≠ 0. Only after listing both separately, find the intersection using a number line.",
                "For transformation confusion: make a reference card — outside f means vertical (affects y), inside f means horizontal (affects x, direction reverses). Check every transformation by testing one point: verify that the transformed point satisfies the new equation.",
                "For composite expressions: write out the chain explicitly in three lines: (1) g(x) = [result], (2) f(g(x)) means f applied to [result from step 1], (3) substitute [step 1 result] everywhere x appears in f. Never attempt to write f(g(x)) in one line.",
                "For inverse and one-to-one: always apply the horizontal line test before finding an inverse. If the function fails, identify a restricted domain visually (the largest domain on which the function is increasing or decreasing) and state it explicitly before proceeding."
            ],
            misconceptionsToAddress: [
                "f(x + h) = f(x) + h → use placeholder box every time",
                "Transformation direction confusion → make and use reference card: outside = vertical, inside = horizontal (reversed)",
                "Composite in one step → enforce three-line chain method"
            ]
        },

        proficient: {
            characteristics: [
                "Evaluates functions correctly for numbers, negative values, and algebraic expressions",
                "Finds the domain of rational, root, and combined functions using interval notation",
                "Identifies and applies all four basic transformations (translation, reflection, stretch) from a function's equation",
                "Computes composite functions f(g(x)) algebraically and evaluates at specific points",
                "Finds the inverse of linear and simple non-linear functions and verifies using f⁻¹(f(x)) = x"
            ],
            immediateNextSteps: [
                "Deepen transformations: apply transformations in combination and determine, given the graph of g(x) = a·f(bx − h) + k, all four parameters by reading the graph — not just describing a known example.",
                "Explore piecewise functions: define a function by different rules on different intervals, evaluate it for values in each interval, graph it with correct open/closed circles at boundaries, and find its domain and range.",
                "Investigate composite functions and domain: determine the domain of f(g(x)) — identify values of x where g(x) is outside the domain of f, and express the restricted composite domain correctly.",
                "Connect inverses to graphs: given the graph of f, sketch f⁻¹ by reflecting in y = x without algebraically finding the inverse formula. Then verify with the formula. This connects the geometric and algebraic representations.",
                "Extend to rational function analysis: sketch the graph of f(x) = (ax + b)/(cx + d) by finding intercepts, vertical and horizontal asymptotes, and checking end behaviour — connecting domain analysis to graphical features."
            ],
            misconceptionsToAddress: [
                "Treating composite domain as the same as the domain of the outer function → always check that g(x) is in the domain of f",
                "Assuming the graph of f⁻¹ is a rotation rather than a reflection → verify by checking specific points"
            ]
        },

        expert: {
            characteristics: [
                "Derives properties of function families (symmetry, asymptotes, end behaviour) from first principles",
                "Determines the domain of composite functions including all boundary cases",
                "Analyses transformations of non-standard functions from their equations and graphs",
                "Decomposes a complex function into simpler components (e.g. identifies f and g given f(g(x)))",
                "Connects function properties (injectivity, surjectivity, bijectivity) to the existence and uniqueness of inverses"
            ],
            immediateNextSteps: [
                "Investigate even and odd functions: prove algebraically that f(−x) = f(x) characterises even functions (symmetric about y-axis) and f(−x) = −f(x) characterises odd functions (symmetric about origin). Test standard functions and determine which products/sums of even/odd functions preserve these properties.",
                "Explore function decomposition: given h(x) = √(3x² − 1), express h as f(g(x)) for non-trivial choices of f and g. Show multiple valid decompositions. Connect to the chain rule in calculus, where each decomposition corresponds to a different application of the rule.",
                "Study iteration and fixed points: given f(x) = (x + 2)/3, find f(f(x)), f(f(f(x))). Find the fixed point p where f(p) = p and investigate what happens to f ⁿ(x) (f applied n times) as n → ∞ for different starting values. This previews the study of sequences and limits.",
                "Connect bijectivity and inverse functions formally: prove that a function f has an inverse that is a function if and only if f is bijective. Construct an example where restricting the codomain converts a surjection into a bijection, and explain what this means for the inverse."
            ],
            misconceptionsToAddress: [
                "All functions have inverses → prove necessity of bijectivity with explicit counterexamples",
                "Decomposition is unique → show two valid decompositions for one composite and explain both"
            ]
        }
    }
},


angles: {
            knowledgeLevel: {

                remember: {
                    description: "Retrieve stored definitions, classifications, and rules about angles from memory without requiring explanation. The student names angle types, states rules, and reproduces formulas accurately.",
                    cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. Correct facts without justification.",
                    verbs: ["State", "Name", "List", "Identify", "Define", "Label", "Write"],
                    whatDistinguishesThisLevel: "A remember-level response restates facts correctly but adds no explanation. 'Alternate angles are equal' is remember-level. 'Alternate angles are equal because...' crosses into understand.",
                    examples: {
                        angleBasics:         "Name the six types of angle and give the degree range for each. State the rule for angles on a straight line and angles around a point.",
                        angleRelationships:  "List the three angle relationships formed when a transversal crosses parallel lines. State whether each pair is equal or supplementary.",
                        anglesInTriangles:   "State the interior angle sum of a triangle. Write the exterior angle theorem as a rule in words.",
                        anglesInPolygons:    "Write the formula for the interior angle sum of an n-sided polygon. State the exterior angle sum of any convex polygon."
                    }
                },

                understand: {
                    description: "Explain why angle rules are true — connect the rule to its geometric or algebraic cause. The student demonstrates the mechanism, not just the fact.",
                    cognitiveDemand: "Translation and interpretation. The student explains using a reason, a diagram reference, or a logical chain — not just repeating the rule.",
                    verbs: ["Explain", "Justify", "Describe", "Connect", "Interpret", "Contrast", "Paraphrase"],
                    whatDistinguishesThisLevel: "Understand requires a mechanism. 'Co-interior angles sum to 180°' is remember. 'Co-interior angles sum to 180° because corresponding angles are equal and co-interior plus corresponding angles together form a straight line' is understand.",
                    examples: {
                        angleBasics:         "Explain why vertically opposite angles must be equal, using the fact that each forms a supplementary pair with the same adjacent angle.",
                        angleRelationships:  "Explain the difference between alternate angles and co-interior angles using both the shape they form on a diagram (Z vs C) and their relationship (equal vs supplementary).",
                        anglesInTriangles:   "Explain how the proof that triangle angles sum to 180° uses the alternate angles theorem. Why is a parallel line drawn through one vertex in the proof?",
                        anglesInPolygons:    "Explain why the interior angle sum formula is (n − 2) × 180°. Your answer must reference the triangulation method and explain where the (n − 2) comes from."
                    }
                },

                apply: {
                    description: "Use angle rules and formulas to find unknown angles in a new, unseen configuration. The student selects the correct rule, sets up the equation, and calculates accurately.",
                    cognitiveDemand: "Procedure execution in a novel situation. The student decides which rule applies, constructs the equation, and solves it correctly.",
                    verbs: ["Calculate", "Find", "Determine", "Solve", "Work out"],
                    whatDistinguishesThisLevel: "Apply requires a fresh problem, not a repeated template. The student must recognise which rule applies without being told.",
                    examples: {
                        angleBasics:         "Two angles on a straight line are 3x + 20° and x − 8°. Find x and both angles. State the rule you used.",
                        angleRelationships:  "A transversal crosses two parallel lines. Two co-interior angles are 4x + 15° and 2x + 9°. Find x and both angles. Verify using the co-interior rule.",
                        anglesInTriangles:   "An isosceles triangle has an apex angle of 3x − 6°. Its base angles are each x + 30°. Find x and all three angles. Verify using the triangle angle sum.",
                        anglesInPolygons:    "A regular polygon has an exterior angle of 24°. Find the number of sides, the interior angle, and the total interior angle sum."
                    }
                },

                analyze: {
                    description: "Examine diagrams, data, or geometric configurations to identify angle relationships, classify triangles or polygons, or determine whether lines are parallel. The student draws conclusions from evidence rather than from a given rule.",
                    cognitiveDemand: "Decomposition and inference. The student reaches a conclusion by examining structure, not by executing a given procedure.",
                    verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Compare", "Prove"],
                    whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given two angles, determine whether the lines are parallel' requires examining the angles, identifying the relationship, and reaching a conclusion — not following a given method.",
                    examples: {
                        angleBasics:         "Four angles meet at a point: 2x + 10°, 3x − 5°, x + 25°, and 90°. Determine x, find all four angles, identify what type each one is, and verify that they sum correctly.",
                        angleRelationships:  "Two lines are cut by a transversal. The angles on one side of the transversal between the lines are 65° and 115°. Analyse whether the two lines are parallel, giving a full justification using the co-interior angle rule.",
                        anglesInTriangles:   "A triangle has angles in the ratio 2 : 3 : 5. Analyse: classify the triangle by angles, determine all three angle values, identify whether the triangle contains an obtuse angle, and find the exterior angle at each vertex.",
                        anglesInPolygons:    "A polygon has interior angles summing to 1260°. Analyse: determine the number of sides, classify the polygon, calculate each interior angle if the polygon is regular, and find the exterior angle of the regular version."
                    }
                },

                evaluate: {
                    description: "Make a justified judgement about the validity of a claim, solution, or reasoning involving angles. The student identifies what is wrong, states the criterion by which it fails, and provides the correct solution.",
                    cognitiveDemand: "Judgement with justification. 'This is wrong' is insufficient — the student must state why using a specific angle rule, and produce the correct answer.",
                    verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Justify", "Appraise"],
                    whatDistinguishesThisLevel: "Evaluate requires a judgement against a mathematical standard with a stated reason and correction. Simply finding the correct answer without critiquing the given solution is apply, not evaluate.",
                    examples: {
                        angleBasics:         "A student states: 'Vertically opposite angles are equal because they are on opposite sides of the intersection.' Evaluate this explanation — identify whether the conclusion is correct, assess whether the reason given is mathematically valid or incomplete, and provide the correct justification.",
                        angleRelationships:  "A student identifies two angles of 70° and 110° formed by a transversal and concludes: 'These are alternate angles, so the lines are parallel.' Evaluate this reasoning — identify whether the conclusion is correct, assess whether 70° and 110° can be alternate angles, and state what type of angle pair 70° and 110° actually form if the lines are parallel.",
                        anglesInTriangles:   "A student solving a triangle with angles x, 2x, and 3x + 30° obtains x = 25° and states all three angles as 25°, 50°, and 105°. Evaluate the solution completely — verify the algebra, check the angle sum, and assess whether the triangle classification the student gives ('acute triangle') is correct.",
                        anglesInPolygons:    "A student claims: 'The exterior angle of a regular hexagon is 60° because the interior angle is 120° and 120° ÷ 2 = 60°.' Evaluate this claim — is the answer correct, is the method valid or coincidental, and state the correct method for finding the exterior angle of any regular polygon."
                    }
                },

                create: {
                    description: "Design an original geometric problem, construct a proof, or build a polygon specification from constraints. The student synthesises multiple angle concepts into a coherent, original output.",
                    cognitiveDemand: "Synthesis and original production. The student produces an output that combines multiple concepts and cannot be completed by retrieving or executing a single memorised procedure.",
                    verbs: ["Design", "Construct", "Formulate", "Derive", "Create", "Prove", "Develop"],
                    whatDistinguishesThisLevel: "Create requires original output. Designing a problem requires generating a configuration, verifying it works, solving it, and articulating why it is well-formed — none of which is possible by reproducing a memorised example.",
                    examples: {
                        angleBasics:         "Design a diagram involving at least four angles meeting at a point such that exactly two of the angles are obtuse, two are acute, and one pair is vertically opposite. Write the value of each angle, verify they sum to 360°, and write two algebra-based questions about your diagram with full worked solutions.",
                        angleRelationships:  "Construct a proof that co-interior angles sum to 180° using only the following known facts: (1) corresponding angles are equal; (2) angles on a straight line sum to 180°. Your proof must include a labelled diagram, a step-by-step logical argument, and a statement of what each step relies on.",
                        anglesInTriangles:   "Design a multi-step triangle problem using parallel lines and a transversal that requires the student to use alternate angles, the exterior angle theorem, and the triangle angle sum in sequence to find an unknown angle. Solve your problem fully and explain why all three rules are needed and cannot be omitted.",
                        anglesInPolygons:    "A client asks you to design a regular polygon room with interior angles between 130° and 140°. Determine all valid regular polygons meeting this specification, calculate their interior and exterior angles, and write a recommendation justifying which polygon gives the most practical room shape, considering both angle size and the number of walls."
                    }
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Confuses acute and obtuse angles — cannot reliably classify without measuring",
                        "Does not distinguish between angles on a line (180°) and angles around a point (360°) — applies 180° to both situations",
                        "Confuses alternate and corresponding angles — uses the Z and F shapes interchangeably or incorrectly",
                        "Applies the triangle angle sum (180°) to quadrilaterals",
                        "Cannot find missing polygon angles because they do not know the interior angle sum formula"
                    ],
                    immediateNextSteps: [
                        "For angle classification: draw a right angle (90°) in the centre of a page and label it. Draw one angle smaller than it (acute) and one larger but less than a straight line (obtuse). Label the range of each. Every time you classify an angle, compare it visually to the 90° reference before deciding.",
                        "For 180° vs 360°: draw the two diagrams on one card. Card front: angles on a LINE (flat, 180° arc on one side). Card back: angles AROUND a POINT (full circle, 360°). The key difference is whether you see a straight line or a full circle surrounding the point.",
                        "For alternate vs corresponding: draw the Z and F shapes in large, clear diagrams. Label alternate angles (Z — inside the parallel lines, opposite sides of transversal) and corresponding angles (F — same side of transversal, same position at each crossing). Colour each type differently and do not proceed to calculation until you have identified the shape.",
                        "For triangle vs polygon angle sums: always write n = (number of sides) first, then write the formula (n − 2) × 180° before substituting. This prevents applying 180° to polygons with more sides.",
                        "For polygon formula: memorise one anchor value — a quadrilateral has angle sum 360°. Verify: (4 − 2) × 180° = 360° ✓. Use this as a reality check for all other polygon calculations."
                    ],
                    misconceptionsToAddress: [
                        "Angles on a line vs angles around a point confusion → two-diagram card",
                        "Z vs F shape mix-up → colour-coded diagrams before any calculation",
                        "Triangle rule applied to all polygons → always write n and formula first"
                    ]
                },

                developing: {
                    characteristics: [
                        "Can classify angles and apply angles-on-a-line and angles-around-a-point correctly for simple cases",
                        "Can identify corresponding and alternate angles but confuses co-interior angles with one of these",
                        "Can solve for missing angles in a triangle when given two angles, but makes errors with algebraic expressions",
                        "Knows the polygon formula but applies it inconsistently — sometimes uses (n − 2) × 180° ÷ n for all polygons rather than only regular ones",
                        "Forgets to apply the exterior angle theorem and instead uses the long route (find all angles, then subtract)"
                    ],
                    immediateNextSteps: [
                        "For co-interior confusion: the key is the C-shape and the word 'co' meaning 'together on the same side.' Co-interior angles are on the SAME side and ADD to 180°. Alternate (Z) are on OPPOSITE sides and are EQUAL. Write 'SAME SIDE → ADD; OPPOSITE SIDES → EQUAL' on your diagram every time.",
                        "For algebraic triangle problems: before attempting to solve, write the sum equation first — angle 1 + angle 2 + angle 3 = 180° — and substitute the expressions before simplifying. The equation structure prevents substitution errors.",
                        "For regular vs general polygon confusion: the formula (n − 2) × 180° gives the TOTAL for any polygon. Dividing by n gives EACH angle for REGULAR polygons only. Write 'TOTAL ÷ n = each angle ONLY if REGULAR' at the top of every polygon problem.",
                        "For the exterior angle theorem: practise identifying the exterior angle (the angle formed by extending a side) before attempting the calculation. Mark it clearly on the diagram. Then apply the shortcut: exterior = sum of two remote interior angles.",
                        "For multi-step angle problems: number each step and write the rule used next to it (e.g. 'Step 1 — alternate angles: a = 70°'). This annotation prevents losing track in longer chains of reasoning."
                    ],
                    misconceptionsToAddress: [
                        "Co-interior vs alternate confusion → SAME SIDE/OPPOSITE SIDES annotation",
                        "Regular polygon formula applied to irregular → write TOTAL before dividing",
                        "Exterior angle theorem bypassed → identify and mark exterior angle first"
                    ]
                },

                proficient: {
                    characteristics: [
                        "Accurately applies all three parallel-line angle rules and can identify which applies from a diagram without prompting",
                        "Solves multi-step angle problems in triangles and polygons, including those requiring algebra",
                        "Can find the number of sides of a regular polygon from its interior or exterior angle",
                        "Applies the exterior angle theorem fluently as a shortcut",
                        "Can prove lines are parallel from given angle information"
                    ],
                    immediateNextSteps: [
                        "Deepen parallel-line work: encounter configurations with three or more parallel lines and multiple transversals, requiring chains of reasoning (use alternate angles at one intersection to find an angle, then use co-interior at another).",
                        "Connect angles to proof: write a formal two-column proof that the exterior angle of a triangle equals the sum of the two remote interior angles, citing each rule used. This develops the logical structure needed for formal geometric proof.",
                        "Explore tessellation: determine which regular polygons tessellate using the interior angle divisibility argument. Extend to semi-regular tessellations (two types of regular polygon meeting at each vertex).",
                        "Connect to trigonometry: use the angle-in-a-right-triangle setting to introduce sine, cosine, and tangent as ratios. The 30-60-90 and 45-45-90 special triangles emerge from the angle rules already mastered.",
                        "Introduce circle theorems: prove that the angle at the centre is twice the angle at the circumference using only the isosceles triangle property (two equal radii) and the triangle angle sum."
                    ],
                    misconceptionsToAddress: [
                        "Angle chain errors: losing track of which angles have been established — annotate each found angle on the diagram immediately",
                        "Assuming all polygons are regular: state explicitly whether a polygon is regular before using the per-angle formula"
                    ]
                },

                expert: {
                    characteristics: [
                        "Proves all standard angle theorems from first principles, citing only the straight-line and full-rotation postulates",
                        "Constructs original multi-step geometric proofs involving parallel lines, triangles, and polygons",
                        "Applies angle reasoning to non-standard configurations, including overlapping shapes and compound figures",
                        "Connects angle properties to circle theorems and can prove the basic circle angle results",
                        "Can use angle reasoning to determine conditions under which geometric configurations are possible or impossible"
                    ],
                    immediateNextSteps: [
                        "Prove all five standard circle theorems from the angle-at-centre theorem: (1) angle in semicircle = 90°; (2) angles in same segment equal; (3) opposite angles of cyclic quadrilateral sum to 180°; (4) tangent-radius angle = 90°; (5) alternate segment theorem.",
                        "Investigate the angle bisector in a triangle: prove that the three angle bisectors of a triangle meet at a single point (the incentre) using the exterior angle theorem and the angle sum rule.",
                        "Explore spherical geometry: on the surface of a sphere, triangle angle sums exceed 180°. Investigate what happens to the polygon angle formulas and the parallel-line rules in non-Euclidean geometry — this is the geometry of GPS navigation and general relativity.",
                        "Formalise the tessellation proof: prove algebraically that only equilateral triangles, squares, and regular hexagons tile the plane using the divisibility argument n | 360 combined with the regular polygon interior angle formula."
                    ],
                    misconceptionsToAddress: [
                        "Angle-in-a-semicircle assumed without proof → prove from the centre-circumference theorem",
                        "Tessellation by intuition → replace with the algebraic divisibility argument"
                    ]
                }
            }
        },


trigonometry: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored definitions, ratios, identities, formulas, and special angle values from memory without requiring explanation. The student reproduces trigonometric facts accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. The student recites SOHCAHTOA, special angle values, identity statements, and formula names without needing to derive or explain them.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Recall"],
            whatDistinguishesThisLevel: "A remember-level response contains correct trigonometric facts but no explanation of why they are true. 'sin 30° = 1/2' is remember-level. 'sin 30° = 1/2 because in a 30-60-90 triangle derived from an equilateral triangle...' crosses into understand.",
            examples: {
                trigRatioBasics:       "State the SOHCAHTOA definitions of sin, cos, and tan. Write the exact values of sin, cos, and tan at 45° and 60°.",
                unitCircleAndRadians:  "State the conversion factor between degrees and radians. Write the arc length formula and sector area formula, identifying every variable.",
                trigGraphs:            "State the period and amplitude of y = sin x and y = cos x. Name the x-values where y = tan x is undefined in the range 0° to 360°.",
                triangleApplications:  "Write the sine rule and the cosine rule. State when each is used."
            }
        },

        understand: {
            description: "Explain why trigonometric facts are true — connect ratios to geometry, connect the unit circle to graphs, and interpret what a trig value means in context.",
            cognitiveDemand: "Translation and interpretation. The student explains mechanisms, not just names them. A correct explanation requiring the student's own reasoning (not memorised wording) demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Derive"],
            whatDistinguishesThisLevel: "Understand goes beyond remember by requiring a reason grounded in geometry or logic. 'sin²θ + cos²θ = 1' is remember. 'sin²θ + cos²θ = 1 because on the unit circle, a point at angle θ has coordinates (cos θ, sin θ), and the circle has radius 1, so by Pythagoras x² + y² = 1' is understand.",
            examples: {
                trigRatioBasics:       "Explain why sin θ and cos θ can never exceed 1 or fall below −1 for any angle θ. Connect your explanation to the definition of the ratios and to the unit circle.",
                unitCircleAndRadians:  "Explain why the arc length formula s = rθ only works when θ is in radians. Use the definition of a radian to justify this algebraically.",
                trigGraphs:            "Explain why the cosine graph is identical to the sine graph shifted 90° to the left. Use the unit circle definition of both functions to justify this relationship.",
                triangleApplications:  "Explain why the cosine rule reduces to Pythagoras' theorem when the included angle is 90°. Show this algebraically and explain the geometric meaning."
            }
        },

        apply: {
            description: "Use trigonometric methods, formulas, and rules to solve problems not seen before in exactly this form. The student selects the correct tool, sets it up correctly, and carries it through.",
            cognitiveDemand: "Procedure execution in a novel situation. The student identifies which ratio, rule, or formula applies and executes it accurately on new numerical values.",
            verbs: ["Calculate", "Solve", "Find", "Determine", "Evaluate", "Convert"],
            whatDistinguishesThisLevel: "Apply requires execution, not just description. 'Solve for θ if tan θ = 1.4 in the range 0° to 360°' requires the student to compute the principal value, use CAST to identify the second quadrant answer, and state both solutions. Describing this process without computing is understand.",
            examples: {
                trigRatioBasics:       "A ladder 6 m long leans against a vertical wall. The base of the ladder is 2.5 m from the wall. Find the angle the ladder makes with the ground and the height the ladder reaches up the wall.",
                unitCircleAndRadians:  "Find all solutions to sin θ = −0.75 in the range 0° ≤ θ ≤ 360°. Give answers to 1 decimal place. Then convert both solutions to radians.",
                trigGraphs:            "For y = 4 cos(3x − 45°) − 2: state the amplitude, period, phase shift, vertical shift, maximum value, and minimum value. Sketch one full cycle, labelling key points.",
                triangleApplications:  "In triangle PQR, PQ = 9 cm, QR = 11 cm, and angle PQR = 72°. Find PR using the cosine rule and then find angle QPR using the sine rule."
            }
        },

        analyze: {
            description: "Break down trigonometric problems, equations, or graphs to identify underlying structure, classify relationships, and draw conclusions from evidence.",
            cognitiveDemand: "Decomposition and inference. The student draws a conclusion not given to them — whether about the shape of a graph, the number of solutions to an equation, or the relationship between sides and angles — and justifies it.",
            verbs: ["Identify", "Determine", "Classify", "Deduce", "Interpret", "Compare", "Analyse"],
            whatDistinguishesThisLevel: "Analyze requires reasoning from evidence to conclusion. 'Given f(x) = 2 sin(x) + 1 and g(x) = −cos(x), determine how many times the graphs intersect in 0° to 360°' requires analysing both functions' properties, considering where they might equal each other, and deducing the count from structure — not executing a memorised algorithm.",
            examples: {
                trigRatioBasics:       "A student claims that in every right-angled triangle with one angle of 30°, the hypotenuse is always exactly twice the shortest side. Analyse this claim — determine whether it is always true, sometimes true, or never true, and justify using the exact values of sin 30° and the definition of the sine ratio.",
                unitCircleAndRadians:  "Analyse the equation 2cos²θ − cos θ − 1 = 0. Without solving, determine the maximum number of solutions possible in 0° to 360°, then factor and solve fully, classifying the type of equation (linear, quadratic in cos θ) and stating the role the CAST diagram plays in finding all solutions.",
                trigGraphs:            "Two transformations of y = sin x are defined: f(x) = sin(2x) and g(x) = 2 sin(x). Analyse how each transformation changes (a) the period, (b) the amplitude, (c) the x-intercepts, and (d) the maximum value. Determine the x-values in 0° ≤ x ≤ 360° where f(x) = g(x).",
                triangleApplications:  "A triangle has sides 5, 12, and 13. Analyse whether this is a right-angled triangle using both Pythagoras' theorem and the cosine rule, and explain why both methods must give the same conclusion."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, accuracy, or quality of a trigonometric claim, solution, or method. The student identifies what is wrong, explains the criterion by which it fails, and provides the correction.",
            cognitiveDemand: "Judgement with justification. Simply identifying an error is insufficient — the student must state the mathematical criterion it violates and produce the fully correct solution.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Justify", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a mathematical standard. 'A student states that sin 150° = −0.5. Evaluate this.' requires identifying the error (150° is in quadrant 2, where sin is positive), stating the correct value (sin 150° = +0.5 using the related angle 30°), and explaining why using CAST.",
            examples: {
                trigRatioBasics:       "A student solves for the hypotenuse of a right-angled triangle with opposite side 8 cm and angle 40°: they write sin 40° = 8/hyp → hyp = 8 × sin 40° = 5.14 cm. Evaluate this solution — identify the specific step where the error occurs, state the correct rearrangement, and give the correct answer.",
                unitCircleAndRadians:  "A student solves cos θ = −0.4 in the range 0° ≤ θ ≤ 360° and gives the single answer θ = 113.6°. Evaluate this — determine whether the student has applied CAST correctly, identify how many solutions should exist and in which quadrants, and provide the complete correct solution set.",
                trigGraphs:            "A student states that the graph of y = sin(x − 30°) is the graph of y = sin x shifted 30° to the right because 'subtracting 30° moves everything right'. Evaluate this reasoning — state whether the conclusion is correct or incorrect, explain the general rule for the direction of phase shifts with full justification, and verify with a specific coordinate.",
                triangleApplications:  "A student applies the cosine rule to a triangle with sides a = 6, b = 8 and angle B = 50°, computing b² = a² + c² − 2ac cos B. Evaluate whether the correct form of the cosine rule has been applied — identify any structural error, state which information is given (SAS or SSA), determine which version of the rule is appropriate, and rewrite the correct equation."
            }
        },

        create: {
            description: "Generate something new: a trigonometric model for a real-world scenario, an original proof strategy, a designed graph with specified properties, or a problem constructed to a set of constraints. The student integrates multiple trigonometric concepts into a coherent, original output.",
            cognitiveDemand: "Synthesis and original production. The student combines several trig concepts to produce something that did not exist before — an original model, a designed problem, or a novel proof path.",
            verbs: ["Design", "Construct", "Formulate", "Derive", "Create", "Model", "Develop"],
            whatDistinguishesThisLevel: "Create requires original output, not retrieval or procedure execution. 'Design a real-world scenario modelled by a transformed sine function; identify all transformation parameters in context; sketch the graph; and use the equation to answer a practical question' requires generating the context, constructing the function, and producing original reasoning — none of which is available from a memorised example.",
            examples: {
                trigRatioBasics:       "Create a real-world scenario (not a ladder or a cliff) that requires using two different trigonometric ratios in sequence to find an unknown length or angle. Draw and label the diagram, write the two equations, solve them in full, and explain what each trig ratio represents physically in your scenario.",
                unitCircleAndRadians:  "Construct a trigonometric equation of the form a cos²θ + b cos θ + c = 0 that has exactly two distinct solutions in 0° ≤ θ ≤ 360°. Solve it fully, showing factoring and CAST reasoning, and verify both solutions by substitution. Then explain how you ensured exactly two solutions when designing the equation.",
                trigGraphs:            "Design a sinusoidal function y = a sin(bx + c) + d that satisfies all of the following: maximum value 7, minimum value −1, period 120°, and the graph reaches its first maximum at x = 20°. Show the derivation of each parameter from these constraints, sketch the graph for 0° ≤ x ≤ 360°, and label all maximum and minimum points with their exact coordinates.",
                triangleApplications:  "Formulate a navigation or surveying problem that requires using both the sine rule and the cosine rule in sequence. The problem must involve a real context (not abstract triangle ABC), produce non-trivial numerical answers, and conclude with an area calculation using Area = ½ab sin C. Provide full working and explain at each step why the chosen rule is appropriate."
            }
        }
    },

    understandingLevels: {

        novice: {
            characteristics: [
                "Knows the phrase SOHCAHTOA but cannot consistently identify the opposite and adjacent sides when the reference angle changes",
                "Can use a calculator to find sin, cos, tan of an angle but cannot use the inverse functions (sin⁻¹, cos⁻¹, tan⁻¹) to find an angle",
                "Confuses degrees and radians — does not switch calculator mode and applies degree values to radian formulas",
                "Knows sin²θ + cos²θ = 1 as a phrase but cannot use it to simplify an expression or solve an equation",
                "Applies the sine rule to all triangles including SAS cases where the cosine rule is needed",
                "Finds only one solution to a trig equation without using CAST to find the second"
            ],
            immediateNextSteps: [
                "For SOHCAHTOA labelling: every time you start a right-triangle problem, physically write H (hypotenuse — longest side, opposite right angle), O (opposite — across from your reference angle), A (adjacent — beside your reference angle, not the hypotenuse) on the diagram before touching a formula. Re-label if the reference angle changes.",
                "For inverse functions: understand the distinction between 'sin 30° = 0.5 (angle → ratio)' and 'sin⁻¹(0.5) = 30° (ratio → angle)'. Practice 10 examples of each in isolation before combining them in a problem.",
                "For degree/radian confusion: write at the top of every problem 'MODE: degrees' or 'MODE: radians' and set your calculator before beginning. A simple check: sin(π/6) should equal 0.5 in radian mode and give a wrong answer in degree mode. Use this as your mode-verification test.",
                "For the Pythagorean identity: write sin²θ + cos²θ = 1 and underneath write its two rearrangements (sin²θ = 1 − cos²θ and cos²θ = 1 − sin²θ). Practise spotting these forms in expressions — if you see '1 − sin²' or '1 − cos²', immediately replace it.",
                "For single-solution errors: after finding the principal value with the inverse function, always draw a CAST diagram and ask 'in which other quadrant does this ratio have the same sign?' before writing your final answer. Never skip this step."
            ],
            misconceptionsToAddress: [
                "Opposite/adjacent reversal → re-label diagram before every problem",
                "Degree/radian mode errors → write mode at top of every calculation",
                "Single solution only → CAST check mandatory after every principal value"
            ]
        },

        developing: {
            characteristics: [
                "Can find sides and angles in right-angled triangles reliably but makes errors with obtuse triangles",
                "Converts between degrees and radians correctly for standard angles but errors with non-standard values",
                "Can sketch y = sin x and y = cos x but cannot apply transformations (amplitude, period, phase shift) confidently",
                "Uses sin rule for AAS correctly but applies it to SAS by mistake",
                "Finds both solutions to a trig equation in the range 0°–360° for positive trig values but misses solutions when the value is negative",
                "Can state sin²θ + cos²θ = 1 but cannot use it to prove identities or solve equations"
            ],
            immediateNextSteps: [
                "For transformation graphs: identify the four parameters in y = a sin(bx + c) + d in isolation before sketching. Write: amplitude = |a|, period = 360°/b, phase shift = −c/b, vertical shift = d. Do not attempt the sketch until all four are written down. Then build the graph by starting from y = sin x and applying each transformation in order.",
                "For rule selection: create a decision card with the hierarchy: right angle present → SOHCAHTOA; two angles + any side → sine rule; two sides + included angle → cosine rule; all three sides → cosine rule; two sides + non-included angle → sine rule (check ambiguous case). Consult this card before beginning every triangle problem.",
                "For negative trig equations: when the trig value is negative, identify the two quadrants where that function is negative (using CAST) before looking up the reference angle. The error pattern is finding the reference angle first and forgetting to adjust for the negative sign. Reverse this order for negative values.",
                "For identity proofs: start every proof by writing 'LHS only' or 'RHS only' at the top and committing to working on one side. The most powerful first moves are: (1) express everything in terms of sin and cos, (2) look for a Pythagorean substitution, (3) create a common denominator for fractions. Practise these three moves on five identities before attempting harder ones.",
                "For arc length/area: before using s = rθ or A = ½r²θ, convert the angle to radians if it is given in degrees. Make this a mandatory first step — write 'θ in radians = ...' before the formula."
            ],
            misconceptionsToAddress: [
                "Sine rule applied to SAS → decision card for rule selection",
                "Negative equation single solution → identify quadrants before reference angle",
                "Transformation parameter errors → write all four parameters before sketching"
            ]
        },

        proficient: {
            characteristics: [
                "Solves right-triangle problems fluently and finds all solutions to trig equations in any given range",
                "Applies transformations to trig graphs accurately and reads off all parameters from an equation or a sketch",
                "Selects between sine and cosine rule appropriately and executes both correctly, including angle-finding with the cosine rule",
                "Uses the Pythagorean identity to simplify expressions and solve quadratic-in-trig equations",
                "Applies arc length and sector area formulas in radian mode without error",
                "Recognises the ambiguous case (SSA) and checks for two solutions"
            ],
            immediateNextSteps: [
                "Deepen identity work: practise proving the derived identities (1 + tan²θ = sec²θ; 1 + cot²θ = cosec²θ) from the primary identity by dividing through. Then prove four non-trivial identities from scratch — aiming for clean, one-side-only proofs with clear algebraic steps.",
                "Introduce double angle formulas: memorise sin 2A = 2 sin A cos A and the three forms of cos 2A. Use them to (a) find exact values (e.g. sin 120° from sin 2 × 60°), (b) simplify expressions, and (c) solve equations like cos 2θ = sin θ by substituting the appropriate form of cos 2θ to create a quadratic.",
                "Explore the general solution: for each of sin θ = k, cos θ = k, and tan θ = k, write the general solution formula (e.g. sin θ = k → θ = 180°n + (−1)ⁿ sin⁻¹(k)) and verify it generates the correct specific solutions in [0°, 360°]. This previews A-level/Further content.",
                "Apply trig to 3D: find the angle between a line and a plane by identifying the right-angle triangle formed by the line, its projection onto the plane, and the perpendicular from the endpoint to the plane. Practise three examples — this extends SOHCAHTOA into three dimensions.",
                "Connect to vectors: compute the angle between two 2D vectors using cos θ = (a·b)/(|a||b|). Verify that this matches the geometric angle from a diagram. This connects the cosine rule to vector dot products."
            ],
            misconceptionsToAddress: [
                "Identity proof crossing the equals sign → strict one-side-only discipline",
                "Missing ambiguous case check → make it a mandatory final step for all SSA problems"
            ]
        },

        expert: {
            characteristics: [
                "Derives all standard identities from first principles and proves non-trivial identities fluently",
                "Applies double angle formulas to solve equations and evaluate exact expressions",
                "Solves trig equations requiring substitution of identities (e.g. converting a sin²θ + b cos θ + c = 0 to a quadratic in cos θ)",
                "Models real-world periodic phenomena with a full trig function (amplitude, period, phase, vertical shift) and interprets all parameters in context",
                "Connects trigonometry to vectors, complex numbers, and calculus derivatives"
            ],
            immediateNextSteps: [
                "Derive the addition formulas: prove sin(A + B) = sin A cos B + cos A sin B using the unit circle or rotation matrix approach. Then derive the double angle formulas as special cases. Understanding derivations prevents the common error of misremembering signs.",
                "Investigate the R sin(θ + α) form: express a sin θ + b cos θ in the form R sin(θ + α) by matching coefficients. This technique solves equations of the form a sin θ + b cos θ = c and finds maximum/minimum values of such expressions — a frequent advanced exam topic.",
                "Explore inverse trig graphs: sketch y = sin⁻¹(x), y = cos⁻¹(x), y = tan⁻¹(x), noting domain restrictions, ranges, and the relationship to the original function graphs. Connect to the idea of restricting the domain to make a function one-to-one.",
                "Connect to complex numbers: verify Euler's formula e^(iθ) = cos θ + i sin θ for θ = π and θ = π/2. Use it to derive the addition formula for cos(A + B) by computing e^(i(A+B)) = e^(iA)·e^(iB) and expanding. This unifies trigonometry with exponential functions at the deepest level.",
                "Explore small angle approximations: verify that sin θ ≈ θ, cos θ ≈ 1 − θ²/2, and tan θ ≈ θ for small θ in radians using a table of values. Apply these to derive the period of a simple pendulum from its differential equation of motion."
            ],
            misconceptionsToAddress: [
                "Misremembering cos 2A form → always derive from cos(A+A) rather than memorise",
                "Treating sin⁻¹ as 1/sin → careful notation discipline; use arcsin for the inverse function"
            ]
        }
    }
},

const EndSection8 = "close"