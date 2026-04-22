

rationalEquations: {
    'Clearing Denominators': [
        'Only the fractions need to be multiplied by the LCD, not the whole-number terms — FALSE: every single term on both sides must be multiplied by the LCD; failing to multiply whole-number terms by the LCD is the most common algebraic error in rational equation solving',
        'The LCD only needs to be found for the left-hand side — FALSE: the LCD is the same for both sides because it is the least common multiple of ALL denominators in the entire equation'
    ],
    'Extraneous Solutions': [
        'After solving a rational equation, the answer is complete once all solutions are found algebraically — FALSE: any solution that makes a denominator in the original equation equal to zero is extraneous and must be discarded; checking against restrictions is mandatory, not optional',
        'An equation with restrictions always has fewer solutions than a similar equation without restrictions — FALSE: restrictions only eliminate solutions that happen to equal the restricted values; many rational equations have solutions that are not restricted values, and the restriction has no effect on those solutions',
        'If solving produces 0 = 0 or 1 = 1 (an identity) after clearing the denominator, the solution is 0 or 1 — FALSE: an identity means the two sides are equivalent for all non-restricted x values, not just x = 0 or x = 1; however, if the only value satisfying the identity is a restricted value, the equation has no solution'
    ]
},

absoluteValueEquations: {
    'Case-Splitting Errors': [
        'Splitting |ax + b| = cx + d into cases before isolating the absolute value — FALSE: you must isolate the absolute value expression (get it alone on one side) before splitting into cases; splitting with other terms still attached to the absolute value side produces incorrect cases',
        '|expression| = k always splits into two cases — FALSE: if k = 0, there is exactly one case (expression = 0); if k < 0, there are zero cases (no solution); only k > 0 produces two cases',
        'The two cases for |A| = B are always A = B and A = −B — FALSE: this is correct only when B is a constant or an expression that does not contain the same variable; for |A| = B where B also contains x, both resulting solutions must be substituted back into the ORIGINAL equation to check for extraneous solutions'
    ],
    'Sign Errors': [
        'Absolute value makes everything positive, so |−5| = −5 — FALSE: |−5| = 5; absolute value converts negative values to their positive equivalent; the result is always ≥ 0',
        '|a + b| = |a| + |b| always — FALSE: this is the triangle inequality, which states |a + b| ≤ |a| + |b|; equality holds only when a and b have the same sign; for example, |3 + (−5)| = |−2| = 2, but |3| + |−5| = 8 ≠ 2'
    ]
},

exponentialLogarithmicEquations: {
    'Logarithm Law Errors': [
        'log(A + B) = log(A) + log(B) — FALSE: the product law states log(A × B) = log(A) + log(B); the log of a SUM cannot be split; this is the single most common logarithm error and has no valid simplification',
        'log(A − B) = log(A) − log(B) — FALSE: the quotient law states log(A/B) = log(A) − log(B); the log of a DIFFERENCE cannot be split',
        'log(Aⁿ) = (log(A))ⁿ — FALSE: the power rule states log(Aⁿ) = n·log(A); the exponent moves to become a multiplier IN FRONT of the log, not an exponent of the whole log expression',
        '(log(A))(log(B)) = log(AB) — FALSE: the product law applies to log(A) + log(B) = log(AB); multiplying two logarithms has no standard simplification'
    ],
    'Exponent and Log Errors': [
        'aˣ = aʸ implies x = y only when a > 0 — TRUE but incomplete: this also requires a ≠ 1; if a = 1, then 1ˣ = 1 = 1ʸ for all x and y, making the equation an identity with infinite solutions',
        'Taking log of both sides of aˣ = b requires the base of the log to match a — FALSE: any consistent logarithm base can be used; using log base 10 or natural log both produce the same answer via the change-of-base formula',
        'log(x) is defined for all real x — FALSE: the domain of log(x) is x > 0 only; log(0) is undefined (the argument approaches −∞) and log of any negative number is undefined over the real numbers; this restriction is the source of extraneous solutions in logarithmic equations'
    ]
},


perimeterAndArea: {
    'Perimeter vs Area Confusion': [
        'Perimeter and area measure the same property of a shape — FALSE: perimeter measures the total length of the boundary (one-dimensional, in linear units); area measures the space enclosed inside the boundary (two-dimensional, in square units); they are completely different measurements that can vary independently',
        'A shape with a larger area always has a larger perimeter — FALSE: area and perimeter are independent; a very thin, long rectangle can have a large perimeter but small area, while a near-square shape can have a large area with relatively small perimeter',
        'Adding up the sides of a shape gives the area — FALSE: adding all sides gives the perimeter; area requires multiplying dimensions according to the shape-specific formula',
        'If two shapes have the same area, they must have the same perimeter — FALSE: many different shapes have equal areas but very different perimeters; a 1×16 rectangle and a 4×4 square both have area 16 cm² but perimeters of 34 cm and 16 cm respectively'
    ],
    'Height Confusion': [
        'The height in a triangle area formula is the length of any side — FALSE: the height must be the perpendicular height — the shortest distance from the base to the opposite vertex, drawn at exactly 90° to the base; using a slant side overestimates the area',
        'The height in a parallelogram area formula is the slant side — FALSE: the height is the perpendicular distance between the two parallel bases, not the slant side connecting them; using the slant side instead of the perpendicular height is the most common error in parallelogram area calculations',
        'For a right-angled triangle, any side can be used as the height — FALSE: the base and height must be perpendicular to each other; in a right-angled triangle, the two legs are perpendicular to each other, so either leg can be the base with the other as the height — but the hypotenuse cannot serve as either base or height in this way'
    ],
    'Composite Shape Errors': [
        'When finding the perimeter of a composite shape, include all sides of all component shapes — FALSE: only the outer boundary edges are included in the perimeter; internal edges where shapes are joined must be excluded',
        'The area of a composite shape is always found by addition — FALSE: if the composite shape is formed by removing a section (e.g. a shape with a hole or a notch), the area of the removed section must be subtracted; only joining shapes together uses addition'
    ]
},

circlesMeasurements: {
    'Radius vs Diameter': [
        'The radius and diameter are interchangeable in circle formulas — FALSE: radius r and diameter d are related by d = 2r; using diameter where radius is required (e.g. A = π × d² instead of A = π × r²) produces an answer four times too large',
        'Circumference = πr — FALSE: circumference = 2πr = πd; both forms use either the radius (with factor 2) or the diameter (without factor 2) — the factor of 2 is required when using radius',
        'Area = πd² — FALSE: area = πr²; if diameter d is given, the radius must be halved first before squaring — the error of squaring the diameter gives an answer four times too large'
    ],
    'Sector and Arc Errors': [
        'Arc length and sector area use the same formula — FALSE: arc length = (θ/360) × 2πr (linear, one-dimensional); sector area = (θ/360) × πr² (two-dimensional); using the arc length formula to find sector area omits the r² and gives a dimensionally incorrect result',
        'A sector with angle 180° has half the area and half the circumference of the full circle — FALSE: a semicircle has half the area (correct: πr²/2) but its perimeter is NOT half the circumference — the perimeter of a semicircle is the arc length (πr) PLUS the diameter (2r), giving πr + 2r total',
        'The central angle in the arc length formula must be in degrees — CONTEXT-DEPENDENT: the formula (θ/360) × 2πr applies when θ is in degrees; if θ is in radians, the formula simplifies to arc length = rθ without the 360 factor; always check which unit the angle is given in'
    ]
},

surfaceArea: {
    'Face Omission Errors': [
        'The surface area of a cylinder is just 2πrh — FALSE: a closed cylinder has two circular ends plus the curved surface; the complete formula is 2πr² + 2πrh; omitting the circular ends gives only the lateral surface area, not the total surface area',
        'The surface area of a cuboid is found by calculating one face and multiplying by 6 — FALSE: this is only correct for a cube (all six faces identical); a cuboid has three pairs of distinct rectangular faces and the formula is 2(lw + lh + wh)',
        'The surface area of a cone is just πrl (the curved surface only) — FALSE: a closed cone includes the circular base πr²; total SA = πr² + πrl; omitting the base is correct only when the cone is described as open (like an ice cream cone without a bottom)'
    ],
    'Height Confusion in Surface Area': [
        'The slant height and vertical height are the same in a cone — FALSE: the slant height l is the distance along the surface from the base edge to the apex; the vertical height h is the perpendicular distance from the base centre to the apex; they are related by l = √(r² + h²)',
        'The cone surface area formula uses the vertical height h — FALSE: the curved surface area formula πrl uses the slant height l, not the vertical height h; vertical height is used in the volume formula only',
        'For a square pyramid, the slant height is the same as the perpendicular height — FALSE: the slant height is the height of a triangular face (measured from base edge midpoint to apex); the perpendicular height is the vertical distance from base to apex; the slant height is always greater than the perpendicular height'
    ]
},

volume: {
    'Missing Factor of 1/3': [
        'The volume of a cone is πr²h — FALSE: the volume of a cone is (1/3)πr²h; the factor of 1/3 is essential — omitting it gives a result three times too large; the 1/3 arises because a cone occupies exactly one-third of the volume of the cylinder with the same base and height',
        'The volume of a pyramid is base area × height — FALSE: the volume of a pyramid is (1/3) × base area × height; the factor of 1/3 applies to ALL pyramids regardless of the shape of the base, just as it applies to all cones',
        'The volume of a sphere is (4/3)πr² — FALSE: the volume of a sphere is (4/3)πr³; the exponent is 3 (radius cubed), not 2; using r² gives a result with the wrong dimensions (area, not volume)'
    ],
    'Height Confusion in Volume': [
        'The volume of a cone uses the slant height — FALSE: cone volume V = (1/3)πr²h uses the perpendicular vertical height h from base to apex; slant height is used in the surface area formula, not the volume formula',
        'For a prism, volume = perimeter of cross-section × length — FALSE: volume = AREA of cross-section × length; the perimeter of the cross-section is used (together with the length) in the lateral surface area calculation, not volume'
    ]
},

unitsAndConversion: {
    'Linear Factor Applied to Area': [
        '1 m² = 100 cm² — FALSE: 1 m² = 10 000 cm² (because 1 m = 100 cm, so 1 m² = 100² cm² = 10 000 cm²); applying the linear conversion factor of 100 to area gives an answer 100 times too small',
        '1 m² = 1000 cm² — FALSE: area conversions use the square of the linear factor; 1 m = 100 cm, therefore 1 m² = 100 × 100 = 10 000 cm²',
        'To convert cm² to mm², multiply by 10 — FALSE: 1 cm = 10 mm, so 1 cm² = 10² mm² = 100 mm²; the conversion factor for area is 100, not 10'
    ],
    'Linear Factor Applied to Volume': [
        '1 m³ = 100 cm³ — FALSE: 1 m³ = 1 000 000 cm³ (because 1 m = 100 cm, so 1 m³ = 100³ cm³ = 1 000 000 cm³)',
        '1 m³ = 1000 cm³ — FALSE: this confuses cubic metres with litres; 1 litre = 1000 cm³ is correct, and 1 m³ = 1000 litres is correct, but these are two separate conversions that must not be merged into 1 m³ = 1000 cm³',
        'Volume and capacity units are always different — FALSE: 1 cm³ = 1 mL and 1000 cm³ = 1 litre; these equalities mean volume formulas can be applied directly to capacity problems by using the cm³ result and converting to millilitres or litres'
    ]
},



linearEquationBasics: {
            'Slope and Intercept Confusion': [
                'The y-intercept is the coefficient of x in y = mx + b — FALSE: the y-intercept is b, the standalone constant; m is the coefficient of x (the slope)',
                'A larger coefficient of x means a higher y-intercept — FALSE: the coefficient of x is the slope; slope and y-intercept are completely independent parameters',
                'y = 7 has an undefined slope because there is no x — FALSE: y = 7 is a horizontal line with slope 0; a constant function has zero rate of change',
                'x = 5 has slope 5 — FALSE: x = 5 is a vertical line; its slope is undefined (division by zero in the slope formula), not equal to 5'
            ],
            'Equation Forms': [
                'There is only one correct form for writing a linear equation — FALSE: slope-intercept, standard, and point-slope are all valid and equivalent; choice of form depends on what information is given and what is needed',
                'The equation of a line must always be written in slope-intercept form — FALSE: standard form and point-slope form are equally valid and often more convenient for certain problems',
                'If a linear equation has fractions, it cannot be in standard form — FALSE: standard form requires integer coefficients, so multiply through to clear fractions; fractions in the equation do not disqualify it from having a standard-form equivalent'
            ]
        },

        solvingTechniques: {
            'Equation Solving Errors': [
                'When moving a term to the other side, you just move it without changing its sign — FALSE: moving a term requires applying the inverse operation to both sides, which changes the sign of that term',
                'You can add a term to one side of an equation without adding it to the other — FALSE: the equality principle requires all operations to be applied to both sides identically',
                'Multiplying out brackets means only the first term inside the bracket is multiplied — FALSE: the distributive law requires every term inside the bracket to be multiplied by the factor outside',
                'Once you find x in a two-variable system, you have found the complete solution — FALSE: finding x is only half the solution; you must back-substitute to find y and then verify both values in both equations'
            ],
            'Inequality Errors': [
                'The inequality sign never changes direction when solving — FALSE: multiplying or dividing both sides by a NEGATIVE number reverses the inequality direction',
                'The inequality sign changes direction whenever you subtract — FALSE: the sign only reverses when multiplying or dividing by a negative; subtracting (even subtracting a negative number) does not reverse the inequality',
                'Solving an inequality gives the same result as solving the corresponding equation — MOSTLY FALSE: the procedures are similar but the solution to an inequality is a range, not a single value; and the sign-reversal rule has no equivalent in equations'
            ]
        },

        graphingLines: {
            'Slope Errors': [
                'Slope is run divided by rise (horizontal change over vertical change) — FALSE: slope is rise over run — vertical change (Δy) divided by horizontal change (Δx)',
                'A steeper line always has a larger (more positive) slope — FALSE: a steeper line has a larger absolute value of slope; a steeply falling line has a large negative slope, not a large positive one',
                'Slope is always a whole number — FALSE: slopes can be fractions, decimals, zero, or undefined; a slope of 2/3 means the line rises 2 for every 3 horizontal units',
                'Two different lines can have the same slope and the same y-intercept — FALSE: if two lines share both slope and y-intercept, they are the same line (coincident), not two different lines'
            ],
            'Graphing Procedure Errors': [
                'To graph y = mx + b, start at the origin and apply the slope — FALSE: always start at the y-intercept (0, b), not the origin, unless b = 0',
                'You only need one point to draw a line — FALSE: a unique line requires at least two points; one point allows infinitely many lines through it',
                'The x-intercept is found by setting x = 0 — FALSE: the x-intercept is found by setting y = 0 (the x-axis is where y = 0); setting x = 0 gives the y-intercept'
            ]
        },

        systemsOfEquations: {
            'Solution Interpretation Errors': [
                'If algebra produces 0 = 0 when solving a system, the answer is 0 — FALSE: 0 = 0 is a true identity, meaning the two equations are equivalent (same line) and the system has infinitely many solutions',
                'If algebra produces a contradiction like 0 = 5 when solving a system, you made an arithmetic error — FALSE: a contradiction means the system is inconsistent — the lines are parallel and there is genuinely no solution',
                'A system of two equations always has exactly one solution — FALSE: a system can have one solution (intersecting lines), no solution (parallel lines), or infinitely many solutions (identical lines)',
                'Once you find x in a system, the solution is complete — FALSE: you must find both x and y, express the solution as an ordered pair (x, y), and verify both values in both original equations'
            ],
            'Method Errors': [
                'In elimination, you always add the two equations — FALSE: you add when the target variable has opposite signs; you subtract when it has the same sign; incorrectly adding instead of subtracting is a common source of error',
                'Substitution always requires one equation to already have y isolated — FALSE: you can rearrange either equation to express either variable in terms of the other before substituting; choose the rearrangement that gives the simplest expression',
                'The graphical method always gives the exact solution — FALSE: the graphical method gives approximate solutions unless the intersection falls exactly on grid points; for non-integer solutions, algebraic methods are required for accuracy'
            ]
        },

        inequalities: {
            'Inequality Sign Reversal': [
                'The inequality sign reverses when you subtract a number — FALSE: it reverses ONLY when multiplying or dividing by a negative number; subtracting any number (positive or negative) does not reverse the sign',
                'Dividing by a negative coefficient on the right side reverses the sign — FALSE: only dividing by a negative NUMBER on either side reverses the sign; the sign of the number doing the dividing is what matters, not which side it started on',
                'The inequality sign reverses when you move a term to the other side — FALSE: moving a term (changing sign of that term and placing on the other side) does not reverse the inequality; the reversal applies only to ×/÷ by a negative'
            ],
            'Solution Set Errors': [
                'The solution to a linear inequality is a single number like the solution to an equation — FALSE: the solution to a linear inequality is a range of values (an infinite set), represented as an interval or a shaded region on a number line',
                'x > 3 and x ≥ 3 have the same solution set — FALSE: x > 3 excludes 3 itself (open circle); x ≥ 3 includes 3 (closed circle); the distinction matters whenever 3 is tested as a boundary value',
                'The solution region of a linear inequality in two variables is always above the boundary line — FALSE: whether to shade above or below depends on which region satisfies the inequality, determined by testing a specific point (typically the origin) in the original inequality'
            ]
        }

     };

    this.clarificationStrategies = {

        // ── CELL BIOLOGY ─────────────────────────────────────────────────────

        prokaryote_has_dna: {
            method: 'Explicit correction anchor: "Prokaryotes lack a MEMBRANE-BOUND NUCLEUS — not DNA." Draw a prokaryotic cell diagram with DNA explicitly labelled in the nucleoid region (a defined zone with no surrounding membrane). Write this distinction in bold at the top of any prokaryote-eukaryote comparison exercise: lacking a nucleus ≠ lacking DNA. Test: ask the student to state where E. coli DNA is located before they answer any question about prokaryotes.',
            effectiveness: 'Very high for the persistent "no nucleus = no DNA" confusion'
        },

        facilitated_diffusion_no_atp: {
            method: 'Analogy: facilitated diffusion is like a slide in a playground — gravity (the concentration gradient) does all the work; the slide structure (the channel or carrier protein) merely provides a preferred pathway. Active transport is like a lift — it takes you AGAINST gravity (against the gradient) and requires power (ATP). Write the slide/lift analogy above every transport diagram until the classification is automatic without looking up the energy requirement.',
            effectiveness: 'Very high for distinguishing facilitated diffusion from active transport'
        }

    };
const EndSection14 = "close"