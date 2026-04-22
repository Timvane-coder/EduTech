

formulaRearranging: {
            knowledgeLevel: {

                remember: {
                    description: "Retrieve stored definitions, rules, and inverse operation pairs for formula rearranging from memory. The student can state what the subject of a formula is, list inverse operation pairs, and identify the subject of a given formula without rearranging it.",
                    cognitiveDemand: "Verbatim or near-verbatim recall. No procedural execution required. A student who cannot do this cannot access any rearranging procedure.",
                    verbs: ["State", "Identify", "List", "Name", "Write", "Define", "Label"],
                    whatDistinguishesThisLevel: "A remember-level response contains correct facts with no procedure. 'The inverse of squaring is taking the square root' is remember-level. Executing a rearrangement using that fact crosses into apply.",
                    examples: {
                        subjectOfFormula:    "State what is meant by the subject of a formula. Identify the subject of each: (a) v = u + at, (b) A = πr², (c) PV = nRT.",
                        inverseOperations:   "List the inverse operation for each: addition, multiplication, squaring, square-rooting, dividing by a constant.",
                        multiStepRearranging:"State the four-step strategy for rearranging when the target variable appears in more than one term.",
                        fractionsAndRoots:   "State the first step when rearranging a formula where the target variable appears in a denominator."
                    }
                },

                understand: {
                    description: "Explain why rearranging procedures work — connect the balance principle to the algebraic steps, explain why factorising is necessary when a variable appears in multiple terms, and interpret what a rearranged formula means.",
                    cognitiveDemand: "Translation and justification. The student explains the mechanism behind each step, not merely what the step is.",
                    verbs: ["Explain", "Justify", "Describe", "Connect", "Interpret", "Contrast", "Paraphrase"],
                    whatDistinguishesThisLevel: "Understand requires a reason. 'Divide both sides by a to isolate m in F = ma' is apply. 'We divide both sides by a because m is being multiplied by a — dividing both sides by the same non-zero quantity preserves equality and undoes the multiplication' is understand.",
                    examples: {
                        subjectOfFormula:    "Explain why rearranging a formula does not change the relationship it describes — only the variable it is most convenient to calculate. Use F = ma as an example and explain what m = F/a and a = F/m each represent physically.",
                        inverseOperations:   "Explain why the last operation applied to the target variable must be the first to be undone when rearranging. Use a numerical analogy: if you add 3 then multiply by 2 to get 10, explain in reverse order how to recover the starting number.",
                        multiStepRearranging:"Explain why you cannot isolate x in ax + bx = c by simply dividing both sides by a. Identify what step is missing and explain why it is mathematically necessary before division.",
                        fractionsAndRoots:   "Explain why √(a² + b²) ≠ a + b, using a specific numerical counterexample. Connect this to the rule that squaring or rooting must be applied to the complete side, not individual terms."
                    }
                },

                apply: {
                    description: "Execute rearrangement procedures correctly on formulae not seen before in exactly this form, selecting the appropriate strategy and carrying it through to completion.",
                    cognitiveDemand: "Procedure execution in a novel context. The student selects the appropriate strategy (one-step, two-step, collect-factorise-divide, clear-denominator, square/root) and applies it correctly to an unseen formula.",
                    verbs: ["Rearrange", "Make ... the subject", "Find", "Calculate", "Solve for", "Express ... in terms of"],
                    whatDistinguishesThisLevel: "Apply requires a new formula — not a repeated worked example. The student decides which sequence of steps is needed and carries it through. Stating the steps without executing them is understand.",
                    examples: {
                        subjectOfFormula:    "Rearrange each formula for the indicated variable: (a) P = 2l + 2w, make w the subject; (b) A = (1/2)bh, make b the subject; (c) C = 2πr, make r the subject.",
                        inverseOperations:   "Rearrange v = u + at for each variable in turn: (a) u, (b) a, (c) t. Show all steps and verify each rearrangement using u = 4, a = 2, t = 3.",
                        multiStepRearranging:"Rearrange 3x + ay = bx + c to make x the subject. Show every step including the factorising step.",
                        fractionsAndRoots:   "Rearrange KE = (1/2)mv² to make v the subject. Show all steps and verify with m = 5, v = 6."
                    }
                },

                analyze: {
                    description: "Examine a formula or a rearrangement attempt to identify structure, classify the type of rearrangement required, determine the correct sequence of steps, or deduce a result from the rearranged formula.",
                    cognitiveDemand: "Structural analysis and inference. The student works from the formula's structure to a conclusion not explicitly given.",
                    verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Compare", "Select"],
                    whatDistinguishesThisLevel: "Analyse requires examining structure and reaching a conclusion. 'What strategy is needed to rearrange ax + b = cx + d for x, and why?' requires recognising the two-sided structure, identifying the collect-factorise-divide strategy, and justifying why simpler strategies fail.",
                    examples: {
                        subjectOfFormula:    "Three formulae are given: (a) y = 3x + 7; (b) A = πr²; (c) 1/R = 1/R₁ + 1/R₂. For each, identify the rearranging strategy needed to make the indicated variable the subject (x, r, and R₁ respectively), justify your choice, and state which step in the strategy is most likely to produce an error.",
                        inverseOperations:   "A student is given the formula s = ut + (1/2)at² and asked to make a the subject. Analyse the formula — identify the operations applied to a, determine the correct rearranging sequence, and predict where the most common error would occur in a student solution.",
                        multiStepRearranging:"Given the formula P = E/(E + F) × 100, analyse the structure when making E the subject. Identify that E appears in both numerator and denominator, outline the steps required to handle this, and classify this as a more complex example of the collect-factorise-divide strategy.",
                        fractionsAndRoots:   "Analyse the following claim: 'To make r the subject of c² = a² + r², subtract a² from both sides to get r² = c² − a², then take the square root of each term to get r = c − a.' Identify the valid step and the invalid step, explain the error, and state the correct final expression."
                    }
                },

                evaluate: {
                    description: "Judge the correctness of a rearrangement — identify precisely where and why an error occurs, state the mathematical rule violated, and produce the correct rearrangement.",
                    cognitiveDemand: "Judgement with justification and correction. Simply identifying an answer as wrong is insufficient — the student must identify the step, the rule, and the correction.",
                    verbs: ["Evaluate", "Critique", "Verify", "Identify the error in", "Assess", "Judge", "Appraise"],
                    whatDistinguishesThisLevel: "Evaluate requires a criterion-based judgement. 'This is wrong because the student added instead of subtracted' is weak evaluate. 'The error occurs in Step 3 — the student divided only the left-side term (2x) by 2, rather than the entire left side (2x + 6) by 2, violating the balance principle which requires the same operation on the entire side' is full evaluate.",
                    examples: {
                        subjectOfFormula:    "A student rearranges A = πr² for r and writes r = A/π. Evaluate this solution — identify whether an error has been made, state precisely what step is missing, and give the correct answer.",
                        inverseOperations:   "A student rearranges v² = u² + 2as for s and writes s = v² + u²/2a. Evaluate this rearrangement — identify the error, state which operation was applied incorrectly, and produce the correct rearrangement with full working.",
                        multiStepRearranging:"A student rearranges ax + b = cx + d for x as follows: ax + b = cx + d → ax = cx + d − b → ax/c = x + (d − b)/c → solution 'x = something complicated'. Evaluate the student's approach — identify the structural error (not using collect-factorise-divide), explain what should have been done after Step 2, and produce the correct solution.",
                        fractionsAndRoots:   "A student rearranges T = 2π√(l/g) for l and writes: 'Divide by 2π: T/2π = √(l/g). Square both sides: T²/2π² = l/g. Multiply by g: l = gT²/2π².' Evaluate every step — identify the precise arithmetic error in the squaring step, state the correct result, and give the fully correct rearranged formula."
                    }
                },

                create: {
                    description: "Construct original formulae for specified scenarios, derive one formula from others through substitution and rearranging, or design problems that require multi-step rearranging involving specified techniques.",
                    cognitiveDemand: "Synthesis and original production. The student integrates multiple rearranging techniques to produce a novel output that satisfies all stated constraints.",
                    verbs: ["Derive", "Construct", "Formulate", "Design", "Create", "Combine", "Develop"],
                    whatDistinguishesThisLevel: "Create requires original output integrating multiple skills. 'Derive the formula for the stopping distance of a vehicle in terms of initial speed and deceleration by combining two kinematic equations and rearranging' requires selecting the right equations, substituting correctly, and rearranging the result — none of which can be done by retrieving a memorised example.",
                    examples: {
                        subjectOfFormula:    "Create a real-world formula (not from the lesson) containing at least three variables, where one variable appears in the denominator. Write the formula, describe its context, make each variable the subject in turn, verify one rearrangement numerically, and explain which rearrangement would be most useful in practice.",
                        inverseOperations:   "Derive the formula for the stopping distance s of a vehicle in terms of initial speed u and deceleration a. Use v² = u² + 2as with v = 0 (the vehicle stops). Show the rearrangement for s step by step. Then derive the formula for u in terms of s and a, and use it to find the initial speed of a vehicle that stops in 50 m with deceleration 8 m/s².",
                        multiStepRearranging:"Design a formula where the target variable x appears in exactly two terms on the same side of the equation, requiring the collect-factorise-divide strategy. Write the formula, present it as a contextualised problem, solve it to make x the subject showing every step, and verify the result by substituting specific values.",
                        fractionsAndRoots:   "Derive the formula for the focal length f of a lens system consisting of two thin lenses in contact with focal lengths f₁ and f₂, given that 1/f = 1/f₁ + 1/f₂. Make f₁ the subject, verify algebraically, and use your result to find f₁ if the combined focal length is 6 cm and f₂ = 15 cm."
                    }
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can identify the subject of a formula when it is written in standard form but cannot rearrange even a one-step formula reliably",
                        "Confuses the target variable with the subject — attempts to 'move' the target variable without applying inverse operations",
                        "Applies operations to only one term on a side rather than the entire side",
                        "Cannot handle the target variable in a denominator — attempts to divide rather than multiply to clear it",
                        "Does not verify rearrangements by substitution"
                    ],
                    immediateNextSteps: [
                        "For the 'moving terms' misconception: stop using the language of 'moving' entirely. Replace with 'I apply the inverse operation to BOTH sides.' Write this phrase at the top of every rearranging problem.",
                        "For applying operations to one term only: after every step, draw a vertical line between the two sides and ask: 'Did I do this to the WHOLE right side?' Circle the entire right side before applying the operation.",
                        "For denominator confusion: draw the formula as a fraction explicitly — if t is in the denominator, write s = d/t as s = d × (1/t), recognise that t is being divided by, and multiply both sides by t as the first step.",
                        "For verification: after every rearrangement, substitute three simple numbers into the original formula to get a fourth number, then check that the rearranged formula gives that fourth number back. Do this for every problem until it is habitual."
                    ],
                    misconceptionsToAddress: [
                        "Moving rather than applying inverse operations to both sides",
                        "Operation applied to one term only — enforce whole-side annotation",
                        "Denominator confusion — draw as fraction, multiply first"
                    ]
                },

                developing: {
                    characteristics: [
                        "Rearranges one-step and two-step formulae reliably but makes sign errors when the target variable is subtracted rather than added",
                        "Cannot yet identify when the target variable appears on both sides — attempts to proceed with inverse operations without collecting and factorising first",
                        "Clears single fractions correctly but cannot combine two fractional terms (e.g. 1/u + 1/v) into one before inverting",
                        "Squares both sides correctly when the square root is isolated but incorrectly distributes the square root over individual terms when the square root is not fully isolated first"
                    ],
                    immediateNextSteps: [
                        "For missing the collect-factorise step: before every rearrangement, audit the formula — circle every instance of the target variable. If there is more than one circle, write 'COLLECT AND FACTORISE FIRST' before touching the formula.",
                        "For combining fractions: practise adding algebraic fractions (1/a + 1/b = (a + b)/(ab)) as a separate drill before combining them in formula rearranging. This prerequisite skill is the bottleneck for the lens formula, resistance formula, and all reciprocal-sum formulae.",
                        "For square root distribution errors: draw a box around the entire expression under the square root sign. The rule is: you cannot split the box. Squaring removes the root sign but acts on the entire boxed expression.",
                        "For sign errors with subtracted variables: if the target variable appears as −x (negative), add x to both sides first before any other step, making it positive. Handling a negative target variable is the specific trigger for sign errors."
                    ],
                    misconceptionsToAddress: [
                        "Missing the collect-factorise step — audit target variable occurrences before starting",
                        "Fraction combining — prerequisite algebraic fractions drill",
                        "Square root distribution — box the radicand"
                    ]
                },

                proficient: {
                    characteristics: [
                        "Rearranges two-step and multi-step formulae (including collect-factorise-divide) correctly and efficiently",
                        "Clears fractions and combines fractional terms before isolating the subject",
                        "Squares and square-roots both sides correctly as a complete unit",
                        "Verifies rearrangements by numerical substitution routinely",
                        "Selects the rearranging strategy appropriate to the formula structure without guidance"
                    ],
                    immediateNextSteps: [
                        "Tackle formulae where the target variable appears under both a square root and in a product simultaneously — these require careful sequencing of squaring and division steps.",
                        "Practise rearranging formulae involving three or four variables for each variable in turn, tracking how the rearranged formula changes in structure across different subjects.",
                        "Connect rearranging to dimensional analysis: after rearranging a physics formula, check that the units of the rearranged expression match the expected units of the subject. This deepens understanding of what rearranging means physically.",
                        "Explore formulae that cannot be rearranged for a given variable using elementary methods — for example, formulae where the variable appears both inside and outside a trigonometric function. This introduces the idea of implicit equations and numerical methods."
                    ],
                    misconceptionsToAddress: [
                        "Overconfidence in complex cases — always verify numerically even when confident",
                        "Rushing the squaring step in multi-step rearranging — isolate the root fully before squaring"
                    ]
                },

                expert: {
                    characteristics: [
                        "Rearranges complex multi-variable formulae (e.g. PV = nRT, 1/f = 1/u + 1/v, T = 2π√(l/g)) for any variable fluently and without error",
                        "Derives new formulae by combining and rearranging multiple existing formulae",
                        "Identifies when a formula cannot be rearranged for a specific variable using elementary algebraic methods",
                        "Interprets the rearranged formula in physical or applied context, including sign conventions and domain restrictions",
                        "Connects rearranging to calculus: can rearrange implicit relationships involving derivatives"
                    ],
                    immediateNextSteps: [
                        "Derive the quadratic formula by completing the square on ax² + bx + c = 0 — this is the most demanding rearrangement in school mathematics and integrates every technique in this lesson.",
                        "Investigate the van der Waals equation (P + a/V²)(V − b) = nRT and explore why rearranging for V requires solving a cubic equation — connecting algebraic rearranging to its limits.",
                        "Connect implicit differentiation to formula rearranging: given x² + y² = r², differentiate both sides with respect to x and rearrange for dy/dx — the derivative of the circle equation.",
                        "Explore logarithmic and exponential rearranging: make t the subject of N = N₀e^(−λt), connecting inverse operations to the natural logarithm."
                    ],
                    misconceptionsToAddress: [
                        "Assuming every formula can be rearranged for every variable using elementary methods — introduce transcendental equations",
                        "Ignoring domain restrictions — for physical formulae, the rearranged formula may have mathematical solutions that are physically inadmissible"
                    ]
                }
            }
        },


equations: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored definitions, formulas, and procedural rules about equation types from memory without explanation. The student reproduces facts accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot yet do this, they cannot access higher levels of the topic.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Recall"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts with no explanation. 'The quadratic formula is x = (−b ± √(b²−4ac))/2a' is remember-level. Adding 'which works because completing the square on ax²+bx+c=0 yields...' crosses into understand.",
            examples: {
                quadraticEquations:           "State the quadratic formula. List the three methods for solving a quadratic equation. Identify the values of a, b, and c in 3x² − 5x + 2 = 0.",
                polynomialEquations:          "State the Factor Theorem. List the steps of synthetic division. Name the theorem that guarantees a degree-n polynomial has n roots.",
                rationalEquations:            "Define 'extraneous solution'. State the first step when solving any rational equation. Identify the restriction(s) for the equation 5/(x−3) = 2.",
                absoluteValueEquations:       "Write the two-case split for |expression| = k. State the condition under which |expression| = k has no solution. Define absolute value geometrically.",
                exponentialLogarithmicEquations: "State the change-of-base formula. Write the three logarithm laws. State what logₐ(x) = c means in exponential form."
            }
        },

        understand: {
            description: "Explain the meaning behind procedures — connect algebra to geometry, connect rules to their reasons, and interpret results in context. The student demonstrates WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. A student who can only recite a procedure has not yet demonstrated understanding — they must explain why the procedure works.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Distinguish", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires mechanism. 'The discriminant tells us the number of roots' is remember. 'The discriminant is the expression under the square root in the formula — when it is negative, no real square root exists, so the formula yields no real solution, which means the parabola never touches the x-axis' is understand.",
            examples: {
                quadraticEquations:           "Explain why Δ < 0 produces no real solutions, connecting the algebraic expression under the square root to the geometry of a parabola that doesn't cross the x-axis.",
                polynomialEquations:          "Explain why the Factor Theorem states that f(a) = 0 implies (x − a) is a factor. Use the analogy of division with remainder, showing that if remainder = 0, the division is exact.",
                rationalEquations:            "Explain why multiplying both sides of a rational equation by the LCD can introduce extraneous solutions. Use a specific equation where this occurs and show what goes wrong.",
                absoluteValueEquations:       "Explain why |expression| = k splits into two cases. Use the definition of absolute value as distance from zero to justify why both cases are necessary and correct.",
                exponentialLogarithmicEquations: "Explain why taking the logarithm of both sides of an exponential equation allows you to solve for an exponent. Connect to the definition of logarithm as the inverse of exponentiation."
            }
        },

        apply: {
            description: "Use known formulas, methods, and rules to solve unseen problems. The student selects the correct strategy and executes it accurately in a new context.",
            cognitiveDemand: "Procedure execution in a novel situation. A common failure at this level is knowing the formula but misidentifying a, b, c; or forgetting to check for extraneous solutions.",
            verbs: ["Solve", "Calculate", "Find", "Apply", "Determine", "Use", "Evaluate"],
            whatDistinguishesThisLevel: "Apply requires an unseen problem. Solving a type the student has practised repeatedly is apply only if the specific numbers are new. Reciting the steps without executing them is understand, not apply.",
            examples: {
                quadraticEquations:           "Solve 2x² + 3x − 5 = 0 using the quadratic formula. Show all steps, calculate the discriminant explicitly, and verify both solutions by substitution.",
                polynomialEquations:          "Show that x = −1 is a root of f(x) = 2x³ + x² − 5x − 2. Use synthetic division to find the depressed polynomial and solve the equation completely.",
                rationalEquations:            "Solve (x+2)/(x−1) + 1/x = 3. State all restrictions, clear the denominators, solve the resulting equation, and check for extraneous solutions.",
                absoluteValueEquations:       "Solve 2|3x − 1| + 4 = 14. Show the isolation step clearly, split into two cases, solve each, and verify both solutions in the original equation.",
                exponentialLogarithmicEquations: "Solve 4ˣ⁺¹ = 64 using the same-base method. Then solve 5ˣ = 40 using logarithms, giving the answer to 3 significant figures."
            }
        },

        analyze: {
            description: "Break down problems to identify patterns, structure, and relationships — move from evidence to conclusion without being told the answer.",
            cognitiveDemand: "Decomposition and inference. The student reaches a conclusion not stated in the problem and justifies it from mathematical evidence.",
            verbs: ["Determine", "Classify", "Analyse", "Identify", "Compare", "Deduce", "Examine"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to an unstated conclusion. 'Given this equation, determine its solution type before solving' forces the student to examine structure (discriminant, restrictions, exponent form) rather than execute a known procedure.",
            examples: {
                quadraticEquations:           "Without solving, analyse each equation to determine the number and nature of solutions: (a) 4x² − 4x + 1 = 0; (b) x² + 2x + 5 = 0; (c) 3x² − 12 = 0. For each, compute the discriminant, classify the solution type, and describe the corresponding parabola.",
                polynomialEquations:          "A polynomial f(x) is known to have degree 4 with leading coefficient positive. It has roots x = −2 (multiplicity 2) and x = 1 (multiplicity 1), and no other real roots. Deduce the remaining root and write the fully factored form of f(x). Analyse the behaviour of the graph at each root.",
                rationalEquations:            "Analyse the equation x/(x²−1) + 2/(x−1) = 3/(x+1). Before solving, identify all restrictions, rewrite with a common denominator, and determine whether a solution is possible. Identify which apparent solutions are extraneous.",
                absoluteValueEquations:       "Analyse the equation |2x + 3| = |x − 1|. Identify how many cases arise, solve each, and explain geometrically what the equation is asking in terms of distances on the number line.",
                exponentialLogarithmicEquations: "Analyse the equation 2ˣ = 3ˣ⁻¹. Take logarithms of both sides, identify the structure of the resulting linear equation in x, and solve. Then determine whether 2ˣ > 3ˣ⁻¹ or 2ˣ < 3ˣ⁻¹ for values of x greater than your solution."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity or quality of a solution, claim, or method — identify what is wrong, explain the criterion by which it fails, and produce the correction.",
            cognitiveDemand: "Judgement with justification. 'This is wrong' is not evaluate-level — the student must state the criterion violated, identify the exact error location, and give the correct solution.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Justify", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a mathematical standard. Finding an error is analyse; explaining why it is an error by reference to a specific rule, and correcting it, is evaluate.",
            examples: {
                quadraticEquations:           "A student solves x² = 9 and writes x = 3. Evaluate this solution — identify what has been omitted, state the correct complete solution set, and explain why omitting the negative root is a conceptual error (not just an arithmetic slip).",
                polynomialEquations:          "A student applies the Factor Theorem and concludes that since f(3) = 3, then (x − 3) is not a factor, therefore 3 is not a root. A second student says this is correctly reasoned. Evaluate both students' reasoning — confirm or refute, with full justification using the statement of the Factor Theorem.",
                rationalEquations:            "A student solves 6/(x−2) = 3 by multiplying both sides by (x−2) to get 6 = 3, concluding there is no solution. Evaluate this work — identify the arithmetic error in the multiplication step, give the correct equation after clearing the denominator, solve correctly, and verify.",
                absoluteValueEquations:       "A student solves |x + 4| = 2x − 1 by writing x + 4 = 2x − 1 and x + 4 = −(2x − 1) simultaneously, obtaining x = 5 and x = 1. The student accepts both. Evaluate this work — check both solutions in the original equation, identify which (if any) is extraneous and explain why, and state the correct solution set.",
                exponentialLogarithmicEquations: "A student solves log(x) + log(x−3) = 1 and obtains x = 5 and x = −2. The student reports both as valid. Evaluate this solution — identify the domain restriction, explain why x = −2 is extraneous, and confirm that x = 5 is the only valid solution by full substitution."
            }
        },

        create: {
            description: "Generate something new — a model, a designed equation, an original problem, or a complete contextual application — integrating multiple concepts into a coherent, original output.",
            cognitiveDemand: "Synthesis and original production. The student produces an output that did not exist before and requires combining multiple equation types or concepts.",
            verbs: ["Design", "Construct", "Formulate", "Create", "Model", "Develop", "Derive"],
            whatDistinguishesThisLevel: "Create requires original output that cannot be produced by recalling or executing a memorised procedure. Designing a problem with specified properties and solving it from scratch is create-level; solving a given problem is at most apply.",
            examples: {
                quadraticEquations:           "Design a real-world scenario (not projectile motion and not garden fencing) that produces a quadratic equation with exactly one solution (Δ = 0). Write the equation, verify the discriminant, solve it, and interpret the unique solution in context. Explain what the single solution means physically in your scenario.",
                polynomialEquations:          "Construct a degree-4 polynomial equation that has exactly two distinct positive real roots (one of multiplicity 2 and one of multiplicity 1) and one negative real root. Write it in expanded form, verify all roots using the Factor Theorem, and sketch the graph labelling all intercepts and indicating behaviour at each root.",
                rationalEquations:            "Create a rational equation that has exactly one valid solution and one extraneous solution. Show the complete solution process, identify and explain the extraneous solution, and then modify your equation so that both candidate solutions are valid. Show why neither is extraneous in the modified version.",
                absoluteValueEquations:       "Formulate a tolerance specification problem from a manufacturing or measurement context of your choice. The specification must involve an absolute value inequality with a compound expression (not just |x| ≤ k). Solve the inequality, interpret the solution range in context, and design one follow-up question requiring solving the corresponding absolute value equation.",
                exponentialLogarithmicEquations: "Model a real-world growth or decay process (not radioactive decay and not compound interest) using an exponential equation. State the model, identify the growth/decay rate and initial value, solve for the time to reach a specified threshold, and use logarithms to find the doubling or halving time. Verify your answer using the Rule of 72 or an analogous approximation and calculate the percentage error."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can identify a quadratic equation by its x² term but cannot consistently write it in standard form before applying the formula",
                "Applies the quadratic formula but frequently misidentifies a, b, or c — especially when b or c is negative",
                "Cannot factor a quadratic when the leading coefficient a ≠ 1",
                "Does not know the Factor Theorem and cannot identify rational root candidates for polynomials",
                "Has not encountered rational equations; multiplies only one term by the LCD rather than every term",
                "Treats |expression| = k by ignoring the absolute value and solving only the positive case"
            ],
            immediateNextSteps: [
                "For quadratic standard form: before touching the formula, always rewrite the equation as ax² + bx + c = 0 and box a, b, c. Do this for 10 equations where a, b, or c is negative, zero, or a fraction before attempting to evaluate the formula.",
                "For factoring with a ≠ 1: learn the AC method — multiply a×c, find two numbers multiplying to ac and adding to b, split the middle term, factor by grouping. Practise with five examples where a = 2, 3, and then a = 4.",
                "For the discriminant: before every quadratic, compute Δ = b² − 4ac first and state the expected number of solutions. This separates the discriminant calculation from the formula calculation and reduces errors.",
                "For absolute value: draw a number line and mark the distance interpretation — |x − 3| = 5 means 'x is 5 units from 3', giving x = 8 or x = −2. Visualise three examples geometrically before using the algebraic two-case procedure.",
                "For rational equations: highlight every fraction in the equation and write 'multiply EVERY term by LCD' before starting. Circle each term after multiplying to confirm none was missed."
            ],
            misconceptionsToAddress: [
                "Quadratic formula with wrong a, b, c → box and label before substituting",
                "Only one case for absolute value → number line distance diagram",
                "Multiplying only some terms by LCD → circle every term before and after"
            ]
        },

        developing: {
            characteristics: [
                "Applies the quadratic formula correctly when a = 1 but makes sign errors when a ≠ 1 or b is negative",
                "Can factor simple quadratics (a = 1) but cannot factor by grouping or use the AC method",
                "Recognises that rational equations need denominators cleared but forgets to check for extraneous solutions",
                "Solves absolute value equations correctly for k > 0 but does not check the case k ≤ 0 (failing to identify equations with no solution)",
                "Can solve exponential equations using the same-base method but does not yet know when to apply logarithms",
                "Confuses log(A + B) with log(A) + log(B)"
            ],
            immediateNextSteps: [
                "For sign errors in the quadratic formula: substitute b = −5 (for example) into −b as −(−5) = +5, writing the step explicitly. Never substitute directly into −b without the bracket — this is the single most common calculator-and-pencil error in all of algebra.",
                "For extraneous solutions: make 'state restrictions, then check all solutions against restrictions' a non-negotiable final step for every rational equation. Write 'DOMAIN CHECK' at the end of every problem before declaring the answer.",
                "For absolute value with k ≤ 0: before splitting into cases, write the right-hand side and ask 'is this ≥ 0?' If not, write 'No solution' immediately. Practise three problems where k < 0 and three where k = 0 to build this check into the habit.",
                "For logarithm laws: write the three laws (product, quotient, power) at the top of every logarithm problem until they are automatic. After every step that uses a log law, write which law was used in the margin.",
                "For log(A + B) error: write the counterexample log(1 + 9) = log(10) = 1, but log(1) + log(9) = 0 + 0.954 = 0.954 ≠ 1. Keep this counterexample visible during all log work."
            ],
            misconceptionsToAddress: [
                "−b sign error → write −(b) with explicit bracket",
                "Skipping extraneous solution check → 'DOMAIN CHECK' mandatory final step",
                "log(A+B) = log(A)+log(B) → counterexample card"
            ]
        },

        proficient: {
            characteristics: [
                "Solves all quadratic equations fluently using the most efficient method (factoring when possible, formula otherwise)",
                "Applies the Factor Theorem, performs synthetic division, and solves cubic equations by reducing degree",
                "Solves rational equations including those requiring factoring the denominator, and reliably identifies extraneous solutions",
                "Solves absolute value equations and inequalities, including |A| = |B| type",
                "Solves exponential and logarithmic equations using both same-base and logarithmic methods",
                "Recognises which equation family applies to an unseen problem and selects the opening strategy accordingly"
            ],
            immediateNextSteps: [
                "Deepen polynomial work: tackle quartic equations by substitution (e.g. let u = x² to convert a degree-4 equation into a quadratic in u). This 'equation in disguise' technique extends polynomial methods to non-polynomial forms.",
                "Connect quadratics to completing the square for vertex form: given any quadratic function, complete the square to find the vertex, axis of symmetry, and minimum/maximum value — linking equations to optimisation.",
                "Explore |A| = |B| equations: recognise these split into A = B or A = −B (not four cases) and connect to the geometric interpretation that A and B are equidistant from zero.",
                "Introduce natural logarithm and Euler's number: solve equations of the form eˣ = k using ln, and explore the connection between e and continuous compounding. Connect to the derivative of eˣ being itself.",
                "Explore simultaneous equations mixing types (e.g. a linear and a quadratic): solve by substitution, noting that the pair can have 0, 1, or 2 solutions — connecting the algebra to the geometry of a line intersecting a parabola."
            ],
            misconceptionsToAddress: [
                "Always using the quadratic formula regardless of factorability → practise spotting factorable forms first",
                "Only positive root when taking square roots → explicit ± habit",
                "|A| = |B| producing four cases → reduce to two cases with justification"
            ]
        },

        expert: {
            characteristics: [
                "Derives the quadratic formula by completing the square from first principles, explaining every step",
                "Solves degree-4 and higher polynomial equations using substitution, factoring, and the Fundamental Theorem",
                "Analyses equation systems combining multiple families (quadratic-exponential, rational-logarithmic)",
                "Constructs equation models for multi-variable real-world problems, identifies constraints, and interprets edge cases",
                "Connects the discriminant to the geometry of conics, and logarithm laws to index laws, at an algebraic proof level"
            ],
            immediateNextSteps: [
                "Prove the quadratic formula by completing the square on ax² + bx + c = 0 with full algebraic justification, then derive the sum and product of roots (Vieta's formulas): x₁ + x₂ = −b/a and x₁x₂ = c/a. Use Vieta's formulas to solve problems without finding the roots individually.",
                "Explore complex roots: when Δ < 0, express roots as a ± bi using i = √(−1). Verify that complex roots of polynomials with real coefficients always come in conjugate pairs.",
                "Investigate the natural logarithm rigorously: define ln(x) = ∫₁ˣ (1/t)dt and show that this definition satisfies all log laws. Connect to the derivative d/dx[ln(x)] = 1/x, previewing integral calculus.",
                "Explore transcendental equations (e.g. xeˣ = 1): show that these cannot be solved in closed form using elementary functions, requiring the Lambert W function or numerical methods. This illustrates the limits of algebraic solving.",
                "Investigate systems of nonlinear equations: solve a system of one linear and one quadratic equation geometrically (line intersects parabola) and algebraically, counting solutions and connecting to the discriminant of the reduced quadratic."
            ],
            misconceptionsToAddress: [
                "Complex roots mean 'no answer' → introduce ℂ as the natural extension of ℝ for polynomial roots",
                "All equations are solvable algebraically → transcendental equations requiring numerical methods"
            ]
        }
    }
},

geometricMeasurements: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored formulas, definitions, and unit conventions for geometric measurements from memory without requiring explanation of derivation or meaning.",
            cognitiveDemand: "Verbatim or near-verbatim recall of formulas and facts. No reasoning or derivation required.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Recall", "Label"],
            whatDistinguishesThisLevel: "A remember-level response produces a correct formula or definition but does not explain why it works. 'Area of a triangle = (1/2)bh' is remember-level. Adding 'because a triangle is half a rectangle with the same base and height' crosses into understand.",
            examples: {
                perimeterAndArea: "State the formula for the area of a trapezoid. List the units used for area and explain how they differ from units of perimeter.",
                circlesMeasurements: "Write the formulas for the circumference and area of a circle. Identify what r and d represent and state the relationship between them.",
                surfaceArea: "List the components of the surface area of a cylinder. Write the complete surface area formula for a closed cylinder.",
                volume: "State the volume formulas for a cuboid, a cylinder, a cone, and a sphere. Identify which formulas include the factor 1/3 and which include 4/3."
            }
        },

        understand: {
            description: "Explain the geometric reasoning behind formulas — why the formula has the structure it does, what each component represents geometrically, and how 2D and 3D measurements are connected.",
            cognitiveDemand: "Translation between geometric and algebraic representations; explanation of derivation; connection between formula structure and spatial meaning.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Derive", "Illustrate"],
            whatDistinguishesThisLevel: "Understand requires mechanism, not just reproduction. 'V = (1/3)πr²h for a cone' is remember. 'The factor of 1/3 arises because a cone occupies exactly one-third the volume of the cylinder with the same base and height — this can be shown by filling a cone and pouring into a cylinder three times to fill it' is understand.",
            examples: {
                perimeterAndArea: "Explain why the area formula for a parallelogram is A = bh rather than the product of two adjacent sides. Your answer must reference the perpendicular height and illustrate using a diagram showing the rearrangement into a rectangle.",
                circlesMeasurements: "Explain why the area of a sector with angle θ is (θ/360) of the full circle area. Connect this to the proportion of the full 360° angle that the sector represents.",
                surfaceArea: "Explain why the curved surface area of a cylinder is 2πrh by describing what happens when the lateral surface is unrolled into a flat rectangle. State what the dimensions of that rectangle are and why.",
                volume: "Explain why the volume formula for a pyramid includes the factor 1/3. You may use the relationship between a pyramid and a prism with the same base and height to support your explanation."
            }
        },

        apply: {
            description: "Use correct formulas in new, unseen problems — including multi-step problems requiring Pythagoras' theorem to find a missing dimension before applying a measurement formula.",
            cognitiveDemand: "Correct formula selection, accurate substitution, correct unit assignment. Includes problems where a preliminary calculation (e.g. finding slant height) is required before the main formula can be applied.",
            verbs: ["Calculate", "Find", "Determine", "Compute", "Solve for", "Work out"],
            whatDistinguishesThisLevel: "Apply requires working through a problem the student has not seen in exactly this form. Reproducing a worked example with the same numbers is remember; using the correct formula with new dimensions in a problem that requires a preliminary step is apply.",
            examples: {
                perimeterAndArea: "A trapezoid-shaped garden has parallel sides of 12 m and 18 m and perpendicular height 7.5 m. Find the area. A path of width 1 m runs around the entire outer boundary. Find the area of the path.",
                circlesMeasurements: "A sector has radius 12 cm and arc length 15.7 cm. Find the central angle of the sector to the nearest degree. Then find the area of the sector.",
                surfaceArea: "A cone has base diameter 10 cm and vertical height 12 cm. Find the total surface area. Show clearly how you found the slant height before applying the surface area formula.",
                volume: "A cylindrical can has a volume of 500 cm³ and a radius of 4 cm. Find the height of the can to 2 decimal places. Show all algebraic rearrangement steps clearly."
            }
        },

        analyze: {
            description: "Break down complex geometric situations to identify relationships, classify shapes, determine which measurements are needed, and draw conclusions from given information — working from evidence to a justified answer.",
            cognitiveDemand: "Decomposition of composite shapes; identification of which formula applies and which dimensions are relevant; inference of missing dimensions; comparison of measurements across different solids.",
            verbs: ["Identify", "Determine", "Classify", "Analyse", "Compare", "Deduce", "Decompose"],
            whatDistinguishesThisLevel: "Analyze requires working from a description or diagram to a conclusion that is not directly given. 'Given this composite shape, determine which decomposition strategy minimises calculation steps and find the area' requires strategic thinking, not just formula application.",
            examples: {
                perimeterAndArea: "A composite shape consists of a rectangle with a semicircle on one of its shorter ends. The rectangle is 10 cm × 6 cm. Analyse the shape to determine the total area and the total perimeter (including the curved boundary of the semicircle). Justify which parts of the rectangle's boundary are included in the perimeter calculation.",
                circlesMeasurements: "Three circles are given: Circle A has radius 4 cm; Circle B has diameter 10 cm; Circle C has circumference 25.13 cm. Without a calculator, determine which circle has the largest area and which has the smallest circumference. Justify by estimating each radius.",
                surfaceArea: "Two cuboids are given: Cuboid X is 8 cm × 6 cm × 4 cm; Cuboid Y is 12 cm × 4 cm × 4 cm. Both have the same volume. Analyse their surface areas — determine which has the greater surface area, calculate both, and explain what this difference means in a real-world packaging context.",
                volume: "A solid is formed by placing a cone of base radius 5 cm and height 6 cm on top of a cylinder of radius 5 cm and height 10 cm. Analyse the solid — identify all faces, determine which formula applies to each component, and find the total volume and total exterior surface area."
            }
        },

        evaluate: {
            description: "Judge the validity, accuracy, and appropriateness of geometric calculations, method choices, or unit assignments — identifying errors, stating the correct approach, and explaining the mathematical principle violated.",
            cognitiveDemand: "Judgement with justification against a specific geometric or algebraic principle. Identification of the exact step where an error occurs and correction of that step.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Appraise", "Identify the error in", "Justify"],
            whatDistinguishesThisLevel: "Evaluate requires naming the error and its cause precisely. 'The student made an arithmetic error' is not evaluate-level. 'The student used the slant height 13 cm instead of the perpendicular height 12 cm in V = (1/3)πr²h — the volume formula requires the perpendicular height; slant height is only used in the surface area formula' is evaluate-level.",
            examples: {
                perimeterAndArea: "A student calculates the area of a triangle with base 8 cm, slant side 7 cm, and perpendicular height 5 cm as A = (1/2) × 8 × 7 = 28 cm². Evaluate this solution — identify the precise error, state the correct value and formula, and explain why the height used must be perpendicular.",
                circlesMeasurements: "A student finds the area of a circle with diameter 6 cm as A = π × 6² = 36π cm². Evaluate the student's work — identify where the error occurs, state the correct area, and calculate the percentage error introduced by the mistake.",
                surfaceArea: "A student calculates the surface area of a cube with side 5 cm as SA = 5² = 25 cm². Evaluate this solution — identify how many faces were omitted, state the correct formula and calculation, and explain a strategy (using a net) that would prevent this error.",
                volume: "A student converts a volume of 2.5 m³ to cm³ by multiplying by 100 and obtains 250 cm³. Evaluate this conversion — identify the error in the conversion factor used, explain why volume conversions use the cube of the linear factor, and state the correct answer."
            }
        },

        create: {
            description: "Generate original geometric problems, design structures satisfying given constraints, derive formulas from first principles, or construct real-world models requiring multiple measurement calculations synthesised into a coherent solution.",
            cognitiveDemand: "Synthesis of multiple measurement concepts into a novel, internally consistent output. The student produces something that did not previously exist and that requires combining perimeter/area, surface area, and/or volume with algebraic reasoning.",
            verbs: ["Design", "Construct", "Formulate", "Derive", "Create", "Model", "Develop", "Optimise"],
            whatDistinguishesThisLevel: "Create requires original output constrained by specified requirements. 'Design a cylindrical container that holds exactly 1 litre of liquid and uses the minimum possible surface area of material, and justify your design mathematically' requires setting up equations, applying calculus or systematic trial, and producing a justified, original design.",
            examples: {
                perimeterAndArea: "A farmer has 300 m of fencing to enclose a rectangular field. One side of the field runs along a river and needs no fencing. Design the rectangle that maximises the enclosed area. Derive an area function in terms of one variable, justify your answer algebraically, and calculate the maximum area achievable.",
                circlesMeasurements: "Design a problem involving a composite shape made from two or more circles (or parts of circles) that requires both area and arc-length calculations. The problem must have a real-world context, require at least three steps to solve, and involve a non-trivial combination of sector and full-circle calculations. Provide a full worked solution.",
                surfaceArea: "A manufacturer wants to produce a closed cylindrical tin with volume exactly 400 cm³. Construct an equation for the total surface area of the tin in terms of its radius r alone. Use this to find the radius and height that minimise material use. Justify your answer and calculate the minimum surface area.",
                volume: "Create a real-world scenario involving at least two different 3D solids where the combined volume must meet a specific capacity requirement. Write the problem, construct the necessary equations, solve for any unknown dimensions, and include a practical follow-up question about cost or material use."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Confuses perimeter and area — applies an area formula to find a boundary length or adds dimensions to find area",
                "Uses the slant side of a triangle or parallelogram as the height in area formulas instead of the perpendicular height",
                "Uses diameter instead of radius when substituting into πr² or 2πr",
                "Cannot recall or apply more than the rectangle and triangle area formulas reliably",
                "Has no systematic method for surface area — lists some faces but omits others",
                "Cannot distinguish between units for length, area, and volume"
            ],
            immediateNextSteps: [
                "For perimeter vs area confusion: write a two-column definition list with a sketch for each. Column 1: Perimeter — draw an arrow going around the outside edge; 'adding up the boundary lengths; units are cm, m.' Column 2: Area — shade the inside of the shape; 'counting the squares inside; units are cm², m².' Before every problem, label it P or A based on this distinction.",
                "For perpendicular height confusion: in every triangle or parallelogram problem, draw a dotted line from the apex straight down to the base at 90° and label this line 'h (perpendicular height)'. Circle this value and only use this value in the formula — never the slant side.",
                "For radius vs diameter: write 'HALVE THE DIAMETER FIRST' at the top of every circle problem. Draw a circle with both d and r labelled before attempting any calculation.",
                "For surface area face omission: before calculating any surface area, draw the net of the solid on squared paper and count the faces. Write the area of each face in the corresponding face of the net. This makes missing faces immediately visible.",
                "For unit confusion: draw three columns labelled 'length (cm)', 'area (cm²)', 'volume (cm³)'. After every answer, place it in the correct column by asking 'how many dimensions did I multiply?'"
            ],
            misconceptionsToAddress: [
                "Perimeter = area confusion → two-column sketch definition",
                "Slant side as height → dotted perpendicular line drawn on every diagram",
                "Diameter as radius → halve before substituting"
            ]
        },

        developing: {
            characteristics: [
                "Calculates area and perimeter of standard shapes correctly but makes errors on composite shapes",
                "Applies circle formulas correctly when given radius but sometimes uses diameter directly",
                "Can calculate surface area of cuboids but omits the factor of 2 for opposite faces or forgets one pair of faces",
                "Applies volume formulas for prisms and cylinders but forgets the factor of 1/3 for cones and pyramids in approximately half of attempts",
                "Applies linear unit conversion factors to area and volume questions"
            ],
            immediateNextSteps: [
                "For composite shapes: develop a two-step annotation habit — (1) draw and label all component shapes with dimensions; (2) decide add or subtract for each component and write 'Total = A₁ + A₂' or 'Total = A₁ − A₂' before calculating. Never begin calculating before this plan is written.",
                "For the 1/3 factor in cones and pyramids: write on a card: 'PRISM/CYLINDER: V = A × h. PYRAMID/CONE: V = (1/3) × A × h. SPHERE: V = (4/3)πr³.' Before each volume problem, identify which category the solid belongs to and state the correct multiplier explicitly before substituting numbers.",
                "For surface area of prisms: use the formula SA = 2 × (cross-section area) + (perimeter of cross-section) × length. This structure prevents face-omission errors by systematically accounting for all faces.",
                "For unit conversion: create a table with three rows (length, area, volume) and record the conversion factor between each pair of units. Emphasise that area uses the square and volume uses the cube of the linear factor. Test with a specific example: 1 m = 100 cm; 1 m² = 100² = 10 000 cm²; 1 m³ = 100³ = 1 000 000 cm³.",
                "For cone slant height: write Pythagoras' formula l = √(r² + h²) on every cone surface area problem before applying any formula. Make finding l a mandatory first step."
            ],
            misconceptionsToAddress: [
                "Missing 1/3 factor → category identification habit before substituting",
                "Linear conversion applied to area → squared conversion table",
                "Surface area face omission → net-drawing habit"
            ]
        },

        proficient: {
            characteristics: [
                "Calculates perimeter, area, surface area, and volume for all standard shapes accurately",
                "Correctly uses Pythagoras' theorem to find slant height before applying cone surface area formula",
                "Finds unknown dimensions by rearranging area or volume formulas algebraically",
                "Decomposes composite shapes and composite solids without error",
                "Converts between metric units of area and volume reliably"
            ],
            immediateNextSteps: [
                "Explore optimisation: for a fixed volume, find the cylinder dimensions that minimise surface area. Set up SA in terms of r alone using V = πr²h to eliminate h, then systematically test values to find the minimum. This previews calculus differentiation and connects geometric measurement to algebraic reasoning.",
                "Investigate scale factors: if all linear dimensions of a solid are scaled by factor k, show algebraically that surface area scales by k² and volume scales by k³. Apply this to a practical problem: a model car is 1:20 scale — how much smaller is its fuel tank (volume) compared to the real car?",
                "Explore non-standard composite solids: calculate surface area and volume of a frustum (truncated cone), requiring knowledge of both full cone formulas and subtraction of the removed smaller cone.",
                "Connect to algebra: given only the surface area of a sphere (e.g. SA = 200 cm²), find the radius and volume without a worked template — this integrates all circle/sphere formulas in a single problem chain.",
                "Apply dimensional analysis to check answers: check that every intermediate and final answer carries the correct dimensional unit (cm, cm², or cm³) to detect formula errors before numerical completion."
            ],
            misconceptionsToAddress: [
                "SA formula components used for V and vice versa → dimensional checking habit (units must match the formula type)",
                "Perpendicular height confused with slant height in volume — review through cone/pyramid problems where both dimensions are given"
            ]
        },

        expert: {
            characteristics: [
                "Derives measurement formulas from first principles (e.g. derives sector area formula from the ratio of angles; derives cylinder surface area by unrolling)",
                "Solves optimisation problems: maximising area for fixed perimeter or minimising surface area for fixed volume",
                "Works confidently with composite and irregular solids, applying integration intuition",
                "Applies geometric measurement in multi-domain contexts: density, rates of flow, scale modelling",
                "Identifies and explains the geometric significance of constants (factor of 1/3 in pyramids and cones; 4/3 in spheres)"
            ],
            immediateNextSteps: [
                "Derive the volume of a sphere using Cavalieri's principle or shell integration (introductory): show conceptually that horizontal slices of a sphere have the same area as corresponding slices of a cylinder minus a double-cone, establishing V_sphere = (4/3)πr³ without memorisation.",
                "Investigate the isoperimetric inequality: prove that among all rectangles with the same perimeter P, the square encloses the maximum area. Show that A = l(P/2 − l) is maximised when l = P/4 using the AM-GM inequality or completing the square.",
                "Explore spherical vs cylindrical storage in engineering: compare the surface area-to-volume ratio of a sphere and a cylinder of the same volume. Show that the sphere always has a smaller SA/V ratio, explaining why spherical tanks are used for pressure vessels.",
                "Apply measurement to rates: water flows into a conical vessel (apex down) at 10 cm³/s. Given the cone dimensions, find the rate at which the water depth is increasing when the depth is 5 cm — a classic related-rates problem connecting volume, measurement, and calculus."
            ],
            misconceptionsToAddress: [
                "Formulas applied without understanding of derivation → produce at least one derivation from first principles per solid type",
                "Optimisation approached by trial without algebraic structure → introduce the function-and-extremum framework"
            ]
        }
    }
},



linearEquations: {
            knowledgeLevel: {

                remember: {
                    description: "Retrieve stored definitions, forms, and rules about linear equations from memory without requiring explanation of why they are true. The student reproduces facts accurately.",
                    cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot yet do this, they cannot access any higher level.",
                    verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
                    whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'Slope is rise over run' is remember-level. 'Slope is rise over run, which means a slope of 3 tells us that for every unit increase in x, y increases by 3, because...' crosses into understand.",
                    examples: {
                        linearEquationBasics: "State the slope-intercept form of a linear equation and identify what m and b each represent.",
                        solvingTechniques:    "List the four steps for solving a two-step linear equation. State what inverse operation undoes multiplication.",
                        graphingLines:        "Write the formula for calculating slope given two points. Identify the y-intercept of y = 4x − 7.",
                        systemsOfEquations:   "Name the three methods for solving a system of two linear equations. State the three possible numbers of solutions a system can have."
                    }
                },

                understand: {
                    description: "Explain the meaning behind facts — connect cause to effect, connect algebra to geometry, and interpret what a result means in context. The student demonstrates WHY, not just WHAT.",
                    cognitiveDemand: "Translation and interpretation. The student rephrases, connects, or explains rather than repeating. A correct explanation the student could not produce by memorising demonstrates understanding.",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
                    whatDistinguishesThisLevel: "Understand goes beyond remember by requiring a mechanism or reason. 'Parallel lines have equal slopes' is remember. 'Parallel lines have equal slopes because slope is the angle the line makes with the x-axis — two lines at the same angle in the same plane never meet' is understand.",
                    examples: {
                        linearEquationBasics: "Explain why the y-intercept is the value of y when x = 0, connecting this algebraically to the equation y = mx + b and geometrically to the coordinate plane.",
                        solvingTechniques:    "Explain why performing the same operation on both sides of an equation preserves equality. Use the analogy of a balanced scale if helpful.",
                        graphingLines:        "Explain why a line with undefined slope cannot be written in slope-intercept form, and what form is used instead. Connect to the geometry of vertical lines.",
                        systemsOfEquations:   "Explain why a system of two parallel lines has no solution, using both the algebraic sign (contradiction) and the geometric interpretation (non-intersecting lines)."
                    }
                },

                apply: {
                    description: "Use known formulas, methods, and rules to solve a problem not seen before in exactly this form. The student selects the correct tool and applies it accurately in a new context.",
                    cognitiveDemand: "Procedure execution in a novel situation. The student decides which formula or method applies, sets it up correctly, and carries it through. A common failure is knowing the formula but substituting incorrectly.",
                    verbs: ["Calculate", "Solve", "Find", "Graph", "Write the equation of", "Determine"],
                    whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. 'Solve 4x − 7 = 13' requires the student to execute the procedure for a specific equation. Merely reciting the steps without executing them is understand, not apply.",
                    examples: {
                        linearEquationBasics: "A plumber charges £50 call-out fee plus £40 per hour. Write a linear equation for the total cost C after h hours. Calculate the cost for a 3.5-hour job.",
                        solvingTechniques:    "Solve: 3(2x − 4) = 2x + 8. Show all steps and verify your answer by substitution.",
                        graphingLines:        "Write the equation of the line through (−1, 3) and (3, 11). Express your answer in slope-intercept form.",
                        systemsOfEquations:   "Solve by substitution: y = 3x − 2 and 2x + y = 13. Show all steps and verify in both equations."
                    }
                },

                analyze: {
                    description: "Break down data, graphs, or scenarios to identify patterns, relationships, and underlying structure. The student moves from information to conclusion — they are not told the answer and must derive it from evidence.",
                    cognitiveDemand: "Decomposition and inference from evidence. The student reaches a conclusion not given to them and justifies it from the evidence provided.",
                    verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Compare", "Interpret"],
                    whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given two equations, determine whether the system is consistent' requires examining the equations for slope and intercept, deducing whether lines are parallel, identical, or intersecting, and reaching a conclusion. This differs from apply, where the method is given.",
                    examples: {
                        linearEquationBasics: "A table of values is provided: x = 0, 1, 2, 3, 4 and y = 5, 8, 11, 14, 17. Determine whether the data represents a linear relationship, justify using the pattern of differences, find the equation, and predict y when x = 10.",
                        solvingTechniques:    "A student solves 2(x + 3) = 14 and obtains x = 4. Another student obtains x = 1. Analyse both solutions step by step, identify where any error occurred, and state the correct answer with full working.",
                        graphingLines:        "Three lines are given: y = 2x + 1, y = 2x − 5, and y = −(1/2)x + 3. Analyse the geometric relationships among the three lines — identify which pairs are parallel, which are perpendicular, and determine whether any two of them intersect and where.",
                        systemsOfEquations:   "Without solving, analyse whether the system 4x − 2y = 8 and 2x − y = 3 has one solution, no solution, or infinitely many solutions. Show your reasoning by examining the relationship between the equations."
                    }
                },

                evaluate: {
                    description: "Make a supported judgement about the validity, accuracy, or quality of a claim, method, or solution. The student identifies what is wrong, explains the criterion by which it fails, and states what would be correct.",
                    cognitiveDemand: "Judgement with justification. Simply saying 'this is wrong' is not evaluate-level — the student must say why, using a specific mathematical criterion, and produce the correction.",
                    verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Justify", "Appraise"],
                    whatDistinguishesThisLevel: "Evaluate requires a judgement against a mathematical standard. 'A student says the slope of the line through (2,3) and (5,3) is undefined — evaluate this.' The student must identify the claim as incorrect (judgement), explain that both points have the same y-value so Δy = 0 and slope = 0/3 = 0 making it a horizontal line (criterion), and state that undefined slope belongs to vertical lines (correction).",
                    examples: {
                        linearEquationBasics: "A student says 'the line y = −3x + 7 has a positive slope because the y-intercept 7 is positive.' Evaluate this claim — identify the error, state the correct value of the slope, and explain what a negative slope means geometrically.",
                        solvingTechniques:    "A student solving −3x > 12 obtains x > −4 without reversing the inequality sign. Evaluate the student's work — identify precisely where the error occurs, state the rule that was violated, and give the correct solution and its graph.",
                        graphingLines:        "A student claims that because y = 3x + 2 and y = 3x + 7 have the same slope, they must be the same line. Evaluate this reasoning in full — identify the flaw, explain what having the same slope but different intercepts means geometrically, and state how many solutions the system formed by these two equations has.",
                        systemsOfEquations:   "A student solves the system x + y = 10 and x + y = 15 by adding the equations and obtains 2x + 2y = 25. They then find x + y = 12.5. Evaluate this approach — identify the mathematical error, determine what the correct conclusion should be, and explain what this system's solution set actually is."
                    }
                },

                create: {
                    description: "Generate something new: a linear model for a real-world scenario, an original problem design, a system of equations for a given context, or a complete derivation from specified constraints. The student integrates multiple concepts into a coherent, original output.",
                    cognitiveDemand: "Synthesis and original production. The student produces an output that did not exist before and requires combining multiple concepts. A strong create-level response is internally consistent, mathematically correct, and addresses all specified constraints.",
                    verbs: ["Design", "Construct", "Formulate", "Derive", "Create", "Model", "Develop"],
                    whatDistinguishesThisLevel: "Create requires original output, not retrieval or procedure execution. 'Design a real-world scenario that is modelled by a system of two linear equations with exactly one solution, write the equations, solve them, and interpret the solution in context' requires generating the scenario, constructing appropriate equations, selecting and executing a solution method, and interpreting the result — none of which can be done by reproducing a memorised example.",
                    examples: {
                        linearEquationBasics: "Create a real-world scenario (not temperature conversion and not taxi fares) that is modelled by the equation y = 2.5x + 15. Identify what x, y, 2.5, and 15 represent in your context. Write three questions about your scenario that require using the equation and provide full worked solutions for each.",
                        solvingTechniques:    "Construct an equation of the form a(bx + c) = dx + e that has the solution x = −2. Show that your equation works, solve it from scratch as if you did not know the answer, and verify the solution. Then modify your equation so that it has no solution and explain the algebraic sign that reveals this.",
                        graphingLines:        "Design a coordinate geometry problem: specify three points, determine whether they are collinear (lie on the same line), and if not, find the equations of all three lines connecting them in pairs. Identify any parallel or perpendicular pairs among the three lines and justify each identification using slope.",
                        systemsOfEquations:   "Formulate a word problem that requires a system of two linear equations to solve, ensuring the solution involves non-integer values. Write the system, solve it using elimination, interpret the solution in context, and design one follow-up question that uses the solution to answer a further practical question."
                    }
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can identify that y = mx + b is a linear equation but cannot consistently identify m and b when the equation is rearranged",
                        "Confuses slope with y-intercept — reads the constant as the slope in some cases",
                        "Can solve one-step equations (x + 3 = 7) but makes errors on two-step equations",
                        "Cannot yet plot a line from an equation — plots individual points but does not connect them through the intercept-slope method",
                        "Treats x = 5 (a vertical line) as having slope 5 rather than undefined slope",
                        "Cannot distinguish between a system with no solution and one with infinitely many solutions"
                    ],
                    immediateNextSteps: [
                        "For slope vs intercept confusion: always rewrite the equation in the form y = mx + b before identifying anything. Circle m (the coefficient of x) in one colour and b (the standalone number) in another. Do this for 10 equations before attempting any graph.",
                        "For two-step equations: use the 'undo in reverse order' rule. Write the operations applied to x in order (e.g. ×3 then +4). Undo them in reverse order (−4 then ÷3). Practise this verbal annotation on every equation.",
                        "For graphing: always start at the y-intercept (plot the dot at (0, b) first) and then use rise/run from that dot to reach the second point. Never start from the origin unless b = 0.",
                        "For vertical vs horizontal lines: draw both on one diagram — horizontal line y = 3 (y is always 3, x changes freely) and vertical line x = 3 (x is always 3, y changes freely). Label each with its slope (0 vs undefined). Keep this diagram visible during all graphing work.",
                        "For systems outcomes: draw all three cases on one page — two crossing lines (one solution), two parallel lines (no solution), two identical lines (infinite solutions). For each, write one example equation pair."
                    ],
                    misconceptionsToAddress: [
                        "Slope = the number I see = y-intercept confusion → circle m and b in different colours before reading",
                        "x = a has slope a → horizontal vs vertical diagram",
                        "Two-step equation errors → undo-in-reverse annotation"
                    ]
                },

                developing: {
                    characteristics: [
                        "Can solve two-step equations reliably but makes sign errors with variables on both sides",
                        "Correctly identifies slope and y-intercept from y = mx + b but struggles when the equation is in standard form",
                        "Can graph a line from slope-intercept form but cannot write an equation from two points without guidance",
                        "Uses substitution to solve simple systems but makes errors when neither equation is pre-solved for a variable",
                        "Forgets to reverse the inequality sign when dividing by a negative number approximately half the time"
                    ],
                    immediateNextSteps: [
                        "For sign errors in solving: after each step, draw a vertical line between left and right sides and check that the operation was applied to the entire right side (not just one term). The most common error is 5x + 3 = 2x + 12 → subtracting 2x from left only.",
                        "For standard form: practise converting Ax + By = C to slope-intercept form in isolation — subtract Ax from both sides, divide by B. Do five conversions before attempting to graph from standard form directly.",
                        "For finding equations from two points: build the habit of three steps in order — (1) calculate slope using the formula, (2) substitute one point and the slope into y = mx + b to find b, (3) write the final equation. Never attempt to go from two points directly to the equation without these three steps written out.",
                        "For the inequality reversal: before every inequality problem, write at the top of the page: 'FLIP WHEN DIVIDING/MULTIPLYING BY NEGATIVE.' Do not proceed without this written. After solving, always check by substituting a test value.",
                        "For substitution with non-pre-solved systems: if neither equation gives y directly, choose the equation where isolating a variable involves the fewest steps and smallest numbers. Rearrange it explicitly before substituting — never substitute mid-rearrangement."
                    ],
                    misconceptionsToAddress: [
                        "Operation applied to one term only → vertical-line side-check habit",
                        "Inequality flip omission → write the rule before every problem",
                        "Guessing equation from two points → enforce three-step procedure"
                    ]
                },

                proficient: {
                    characteristics: [
                        "Solves all types of one-variable linear equations (including brackets and fractions) fluently and accurately",
                        "Writes the equation of a line given any two pieces of information (two points, slope and a point, slope and intercept)",
                        "Identifies the relationship between two lines (parallel, perpendicular, or intersecting) from their equations",
                        "Solves systems using both substitution and elimination, choosing the more efficient method for a given system",
                        "Classifies a system as consistent/independent, inconsistent, or dependent from its algebraic structure"
                    ],
                    immediateNextSteps: [
                        "Deepen system-solving: encounter systems where multiplication is needed before elimination (e.g. multiply both equations by different values to align coefficients). Practise the strategy of choosing which variable is cheapest to eliminate.",
                        "Connect equations to modelling: practise writing the equation from a word problem context — identify slope as rate of change and y-intercept as starting value for five different real-world scenarios before attempting numerical problems.",
                        "Explore three-equation systems (introductory): given three equations in three unknowns, apply elimination twice to reduce to a two-equation system, then solve as usual. This previews matrix methods and shows that the same logic scales.",
                        "Connect linear inequalities to systems: graph the solution region for a system of two linear inequalities — find the feasible region bounded by two lines. This is the entry point to linear programming.",
                        "Explore the distance from a point to a line: derive the formula using the perpendicular slope concept — this connects gradient, systems, and geometry in a single problem."
                    ],
                    misconceptionsToAddress: [
                        "Vmax as enzyme-only: N/A for this topic — equivalent misconception is 'slope depends only on one point' → derive slope formula explicitly from two points each time",
                        "Choosing elimination blindly: develop the habit of inspecting which variable is closest to being eliminated before multiplying"
                    ]
                },
                expert: {
                    characteristics: [
                        "Derives the slope formula and the point-slope form from first principles using the definition of a straight line",
                        "Connects the condition m₁ × m₂ = −1 for perpendicular lines to the Pythagorean theorem",
                        "Solves systems with fractional and decimal coefficients without error, using the most efficient method",
                        "Models multi-variable real-world problems as systems and interprets the solution in context, including edge cases (no solution, infinite solutions)",
                        "Applies linear equations to break-even analysis, mixtures, and rate-of-change problems across multiple domains"
                    ],
                    immediateNextSteps: [
                        "Derive the condition for perpendicular slopes: if line 1 has slope m, its perpendicular has slope −1/m. Prove this using the dot product of direction vectors (1, m) and (1, −1/m) equals zero — connecting linear equations to vector geometry.",
                        "Investigate linear regression: given a set of five data points, apply the least-squares formulas to find the line of best fit. Connect slope and intercept to the statistical concepts of rate of change and baseline value. Compute the residuals and interpret their size.",
                        "Explore parametric form: express a line as x = x₀ + at, y = y₀ + bt where (a, b) is a direction vector. Solve a system in parametric form and compare to the standard method — this previews vector equations of lines in Further Maths.",
                        "Apply linear systems to network flow: given a simple network diagram with three nodes and four edges, write the flow conservation equations (linear equations) and solve the system. This previews the engineering application of linear algebra."
                    ],
                    misconceptionsToAddress: [
                        "Linear regression line passes through all data points → introduce residuals and the idea of minimising total squared error",
                        "Unique solution always exists → explore degenerate systems (inconsistent and dependent) in modelling contexts"
                    ]
                }
            }
        }


};

const EndSection9 = "close"