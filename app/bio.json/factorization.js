Here is the updated initializeContextualScenarios() method with rich, case-study-style scenarios:
initializeContextualScenarios() {
    this.contextualScenarios = {
        common_factor: [
            {
                scenario: "Garden Plot Division",
                context: "A community garden has a rectangular plot with area 12x² + 8x square metres. The garden committee wants to divide it into equal-width strips for different vegetable families.",
                problem: "The plot has width 4x metres. How many strips of equal width can be created, and what is the length of each strip?",
                application: "Factor the area: 12x² + 8x = 4x(3x + 2). Since width = 4x, each strip has length (3x + 2) metres.",
                question: "If x = 2 metres, what are the actual dimensions of the plot, and how many 2-metre-wide strips fit across it?",
                answer: "Width = 4(2) = 8 m; length = 3(2) + 2 = 8 m; area = 64 m². The 4x factor tells us 4 strips of width x = 2 m fit across.",
                extension: "The GCF 4x represents both the width of each strip and the number of x-unit widths — factoring reveals hidden structure in the dimensions."
            },
            {
                scenario: "School Timetable Allocation",
                context: "A school has 15a²b hours of science lessons, 25ab² hours of mathematics, and 10ab hours of English across all year groups per term. The head teacher wants to find the largest equal block of time that divides all three allocations.",
                problem: "Find the GCF of 15a²b, 25ab², and 10ab to determine the largest equal time block.",
                application: "GCF(15, 25, 10) = 5; GCF(a², a, a) = a; GCF(b, b², b) = b → GCF = 5ab. So 15a²b + 25ab² + 10ab = 5ab(3a + 5b + 2).",
                question: "If a = 2 weeks and b = 3 weeks, what is the size of each equal time block, and how many blocks are allocated to each subject?",
                answer: "GCF = 5(2)(3) = 30 hours per block. Science: 3a = 6 blocks; Maths: 5b = 15 blocks; English: 2 blocks.",
                extension: "Factoring out the GCF reveals the relative allocation ratios (3a : 5b : 2) clearly — impossible to see without factoring."
            },
            {
                scenario: "Packaging Design",
                context: "A factory produces boxes with volume 24x³ + 36x² − 12x cubic centimetres. An engineer needs to identify the largest common structural unit to minimise material waste.",
                problem: "Factor the volume expression to find the GCF, which represents the base unit of construction.",
                application: "GCF(24, 36, 12) = 12; GCF(x³, x², x) = x → GCF = 12x. Volume = 12x(2x² + 3x − 1).",
                question: "If x = 5 cm, what is the volume of the base unit, and how many units make up the total box volume?",
                answer: "Base unit = 12(5) = 60 cm³. Multiplier = 2(25) + 3(5) − 1 = 50 + 15 − 1 = 64. Total volume = 60 × 64 = 3840 cm³.",
                extension: "The GCF represents the modular unit of manufacture — factoring enables engineers to identify standardizable components."
            },
            {
                scenario: "Prize Money Distribution",
                context: "Three sports teams won prize money of £18x²y, £24xy², and £6x²y² respectively. The organizers want to distribute equal shares to each player across all three teams combined.",
                problem: "Find the GCF to determine the largest equal payment that divides all three prize amounts exactly.",
                application: "GCF(18, 24, 6) = 6; GCF(x², x, x²) = x; GCF(y, y², y²) = y → GCF = 6xy. Total = 6xy(3x + 4y + xy).",
                question: "If x represents 3 team members and y represents 4 rounds played, what is each equal payment?",
                answer: "GCF = 6(3)(4) = £72 per equal share. The bracket (3x + 4y + xy) = 9 + 16 + 12 = 37 gives the total number of shares.",
                extension: "Without GCF extraction, distributing fairly would require calculating three separate divisions — factoring reveals the single divisor instantly."
            }
        ],

        grouping: [
            {
                scenario: "Rectangular Field Dimensions",
                context: "A farmer's field has area x³ + 3x² + 4x + 12 square metres. The farmer needs to know the length and width to plan irrigation channels along each edge.",
                problem: "Factor x³ + 3x² + 4x + 12 by grouping to find the field's dimensions.",
                application: "Group: (x³ + 3x²) + (4x + 12) = x²(x + 3) + 4(x + 3) = (x + 3)(x² + 4).",
                question: "If x = 6 metres, what are the actual dimensions and total area?",
                answer: "Length = x + 3 = 9 m; width factor = x² + 4 = 40 m equivalent. Area = 9 × 40 = 360 m².",
                extension: "Grouping reveals that one dimension depends linearly on x while the other depends quadratically — crucial for understanding how the field scales."
            },
            {
                scenario: "Construction Contract Splitting",
                context: "A building firm's revenue model is ax + ay + bx + by pounds, where a and b represent two contractors and x and y represent two project phases. The firm needs to split responsibilities clearly.",
                problem: "Factor ax + ay + bx + by to separate the two contractors' shares across both phases.",
                application: "Group: a(x + y) + b(x + y) = (x + y)(a + b). Each contractor's share = (a or b) × (x + y).",
                question: "If contractor A earns £3000 per phase, contractor B earns £2000 per phase, phase x = 4 weeks, and phase y = 6 weeks: what does each contractor earn?",
                answer: "Total weeks = x + y = 10. Contractor A earns 3000 × 10 = £30,000; Contractor B earns 2000 × 10 = £20,000. Combined = £50,000.",
                extension: "The factored form (x + y)(a + b) makes it clear that each contractor is paid over the same total time — the grouping separates contractor responsibility from project duration."
            },
            {
                scenario: "Chemistry Reaction Rates",
                context: "A chemist models a reaction where the rate is 2x³ − x² + 6x − 3, measured in moles per second. She needs to find the critical concentration x at which the rate equals zero.",
                problem: "Factor 2x³ − x² + 6x − 3 by grouping, then solve for x when rate = 0.",
                application: "Group: (2x³ − x²) + (6x − 3) = x²(2x − 1) + 3(2x − 1) = (2x − 1)(x² + 3).",
                question: "At what value of x does the reaction rate equal zero? Why does only one solution exist for positive concentrations?",
                answer: "Set (2x − 1)(x² + 3) = 0. From 2x − 1 = 0: x = 0.5 mol. The factor x² + 3 = 0 has no real solutions (discriminant < 0), so x = 0.5 is the only critical concentration.",
                extension: "Grouping exposes the single physically meaningful root — x² + 3 being irreducible is as important as finding x = 0.5."
            },
            {
                scenario: "Music Festival Stage Booking",
                context: "A festival organiser models total stage cost as 3x² + 6x + 5x + 10 pounds, where x represents the number of acts. She needs to separate fixed booking fees from per-act costs.",
                problem: "Factor 3x² + 6x + 5x + 10 by grouping to identify the cost structure.",
                application: "Group: (3x² + 6x) + (5x + 10) = 3x(x + 2) + 5(x + 2) = (x + 2)(3x + 5).",
                question: "If 8 acts are booked (x = 8), what is the total cost, and how does factoring help the organiser predict costs for different numbers of acts?",
                answer: "Total cost = (8 + 2)(3 × 8 + 5) = 10 × 29 = £290. The factored form (x+2)(3x+5) makes it easy to evaluate for any x without expanding.",
                extension: "The factored form reveals a structure: costs scale with both (x + 2) and (3x + 5) simultaneously — visible only after grouping."
            }
        ],

        difference_of_squares: [
            {
                scenario: "Mental Arithmetic for Market Traders",
                context: "A market trader needs to quickly calculate 47 × 53 in his head to price a bulk order. He remembers a trick from school involving the difference of squares.",
                problem: "Calculate 47 × 53 using the difference of squares identity without a calculator.",
                application: "Write 47 × 53 = (50 − 3)(50 + 3) = 50² − 3² = 2500 − 9 = 2491.",
                question: "Use the same technique to calculate 38 × 42, 95 × 105, and 23 × 17. What is the time advantage over traditional multiplication?",
                answer: "38×42 = (40−2)(40+2) = 1600−4 = 1596; 95×105 = 100²−5² = 9975; 23×17 = (20+3)(20−3) = 400−9 = 391.",
                extension: "The identity a²−b² = (a+b)(a−b) means any product of numbers equidistant from a round number can be computed as one square minus a small square."
            },
            {
                scenario: "Rationalising Denominators in Architecture",
                context: "An architect calculates the diagonal brace needed for a doorframe and arrives at the expression 1/(√7 + 2) metres. She needs a rational denominator to enter the measurement into CAD software.",
                problem: "Rationalise 1/(√7 + 2) by multiplying by the conjugate.",
                application: "Multiply numerator and denominator by (√7 − 2): (√7 − 2)/((√7)² − 2²) = (√7 − 2)/(7 − 4) = (√7 − 2)/3.",
                question: "What is the approximate decimal value, and why is a rational denominator essential for engineering precision?",
                answer: "(√7 − 2)/3 ≈ (2.646 − 2)/3 ≈ 0.215 m. Rational denominators prevent rounding errors from cascading through further calculations.",
                extension: "The conjugate trick works because (a + √b)(a − √b) = a² − b is always rational when a and b are rational — a direct application of a² − b² = (a+b)(a−b)."
            },
            {
                scenario: "Security Fencing Problem",
                context: "A school wants to fence a square playground of side (x + 4) metres, then later extend it to side (x + 4) metres and remove a smaller square corner of side 3 metres for a building. They need to calculate the remaining fenced area.",
                problem: "Express the remaining area as a difference of squares and factor it.",
                application: "Remaining area = (x + 4)² − 3² = ((x + 4) + 3)((x + 4) − 3) = (x + 7)(x + 1).",
                question: "If x = 6 metres, what is the remaining area in factored form and as a number?",
                answer: "(6 + 7)(6 + 1) = 13 × 7 = 91 m². The factored form makes it easy to see how the area scales with changes to x.",
                extension: "The factored form (x+7)(x+1) gives the new rectangular dimensions of the remaining area — more useful for planning than the expanded form."
            },
            {
                scenario: "Profit and Loss Comparison",
                context: "Two competing shops each sell a product. Shop A charges (3x + 5) pounds and Shop B charges (3x − 5) pounds. An economist wants to compare the difference in their revenue when each sells x² units.",
                problem: "Find the difference in revenues: (3x + 5)x² − (3x − 5)x².",
                application: "Factor out x²: x²[(3x + 5) − (3x − 5)] = x²[10] = 10x². Alternatively, note revenue difference = x²[(3x)² − 5² ... but direct: difference = 10x².",
                question: "If x = 100 units, what is the revenue difference, and which shop generates more revenue?",
                answer: "10(100)² = £100,000. Shop A generates £100,000 more revenue than Shop B.",
                extension: "Factoring transforms a seemingly complex revenue difference into a transparent relationship: difference scales with x² — useful for forecasting."
            }
        ],

        perfect_square_trinomial: [
            {
                scenario: "Square Patio Design",
                context: "A homeowner is designing a square patio with side length (x + 5) metres. A builder quotes based on the expanded tile count and needs to verify the area calculation is correct.",
                problem: "Expand (x + 5)² and verify it equals x² + 10x + 25. Then reverse the process: show that x² + 10x + 25 is a perfect square trinomial.",
                application: "Middle term test: 2 × √(x²) × √(25) = 2 × x × 5 = 10x ✓. So x² + 10x + 25 = (x + 5)².",
                question: "If x = 7 metres, what is the patio area using both the factored form and the trinomial, and do they agree?",
                answer: "(7 + 5)² = 12² = 144 m². Trinomial: 49 + 70 + 25 = 144 m² ✓. They agree.",
                extension: "Recognizing the patio as a perfect square means the builder only needs one dimension — the side length (x + 5) — instead of computing three separate area contributions."
            },
            {
                scenario: "Projectile Maximum Height",
                context: "A ball is thrown upward and its height in metres is modelled by h = −t² + 8t − 16, where t is time in seconds. A physics student needs to find the maximum height.",
                problem: "Rewrite −t² + 8t − 16 in completed square form to find the maximum height and when it occurs.",
                application: "Factor out −1: −(t² − 8t + 16) = −(t − 4)². Maximum when (t − 4)² = 0, i.e., t = 4 seconds. Maximum height = 0 metres.",
                question: "What does a maximum height of 0 mean physically? What does the factored form −(t − 4)² tell you about the ball's trajectory?",
                answer: "The ball is thrown from height 0 and returns to height 0 at its peak — so it never rises above ground. This means the throw was purely horizontal or the model represents a ball rolled along the ground. The perfect square tells us t = 4 is a double root: the ball only touches h = 0 at one instant.",
                extension: "The perfect square trinomial reveals a double root graphically: the parabola touches the t-axis at exactly one point without crossing — a tangent intersection."
            },
            {
                scenario: "Framing a Photograph",
                context: "A photographer wants to create a square mat border of uniform width w around a photo. The total framed area (photo + border) must equal x² + 12x + 36 square centimetres.",
                problem: "Factor x² + 12x + 36 to find the total side length of the framed photograph.",
                application: "Middle term test: 2 × x × 6 = 12x ✓. So x² + 12x + 36 = (x + 6)². Total side = (x + 6) cm.",
                question: "If the photo is x = 10 cm wide, what is the total framed size, and what is the border width?",
                answer: "Total side = 10 + 6 = 16 cm. Since the total is (x + 6), the border adds 6 cm in total, meaning border width = 3 cm on each side.",
                extension: "Factoring exposes the border width (6/2 = 3 cm) without any additional calculation — the structure of the perfect square contains all the geometric information."
            },
            {
                scenario: "Completing the Square for Minimum Cost",
                context: "A company's weekly cost in pounds is modelled by C = 2x² − 20x + 58, where x is the number of units produced. The manager wants to find the production level that minimises cost.",
                problem: "Complete the square to rewrite C in vertex form, then identify the minimum cost and optimal production level.",
                application: "C = 2(x² − 10x) + 58 = 2(x² − 10x + 25 − 25) + 58 = 2(x − 5)² − 50 + 58 = 2(x − 5)² + 8.",
                question: "What is the minimum weekly cost and at what production level does it occur? What happens to cost if production increases or decreases by 1 unit from the optimum?",
                answer: "Minimum cost = £8 at x = 5 units. At x = 4 or x = 6: C = 2(1)² + 8 = £10 — cost increases by £2 for each unit away from optimum.",
                extension: "The coefficient 2 in front of the perfect square is the rate of cost increase per squared deviation from optimum — connecting algebra to economic sensitivity analysis."
            }
        ],

        trinomial_ac_method: [
            {
                scenario: "Ticket Pricing Strategy",
                context: "A theatre's weekly revenue in pounds is modelled by R = 2x² + 11x + 5, where x is the ticket price in pounds above a base rate. The manager wants to find two possible pricing structures that give the same revenue.",
                problem: "Factor 2x² + 11x + 5 using the AC method to find two expressions representing alternative pricing structures.",
                application: "ac = 10; find p, q: p × q = 10, p + q = 11 → p = 1, q = 10. Split: 2x² + x + 10x + 5 = x(2x + 1) + 5(2x + 1) = (2x + 1)(x + 5).",
                question: "If x = 3 (£3 above base rate), what is the revenue? Interpret the two factors as separate pricing components.",
                answer: "Revenue = (2×3 + 1)(3 + 5) = 7 × 8 = £56. Factor (2x+1) might represent price-per-seat component; (x+5) represents the audience size component at that price.",
                extension: "Each factor equalling zero gives a break-even price: 2x+1=0 gives x = −0.5 (below base — loss scenario); x+5=0 gives x = −5 (impossible). This tells the manager there are no profitable zero-revenue prices above the base rate."
            },
            {
                scenario: "Ball Trajectory Over a Fence",
                context: "A cricket ball is hit and its height in metres is h = −3t² + 7t + 6, where t is time in seconds. The wicket keeper needs to know exactly when the ball hits the ground to position himself.",
                problem: "Factor −3t² + 7t + 6 using the AC method to find when h = 0.",
                application: "Factor out −1: −(3t² − 7t − 6). AC = −18; find p, q: p × q = −18, p + q = −7 → p = −9, q = 2. Split: 3t² − 9t + 2t − 6 = 3t(t − 3) + 2(t − 3) = (t − 3)(3t + 2). So h = −(t − 3)(3t + 2).",
                question: "When does the ball hit the ground? Which solution is physically meaningful and why?",
                answer: "Set h = 0: (t − 3)(3t + 2) = 0 → t = 3 or t = −2/3. Time must be positive, so t = 3 seconds. The wicket keeper has 3 seconds to position himself.",
                extension: "The discarded negative solution t = −2/3 represents a mathematical extrapolation before the ball was hit — factoring reveals both solutions, but physical context determines which is valid."
            },
            {
                scenario: "Room Tile Layout",
                context: "A tiler is calculating how many tiles to order. The total tile count for a room is 6x² + 13x + 6, where x represents the number of tiles in the base row. She wants to visualize the layout as a rectangular grid.",
                problem: "Factor 6x² + 13x + 6 using the AC method to find the grid dimensions.",
                application: "ac = 36; find p, q: p × q = 36, p + q = 13 → p = 4, q = 9. Split: 6x² + 4x + 9x + 6 = 2x(3x + 2) + 3(3x + 2) = (3x + 2)(2x + 3).",
                question: "If x = 5 tiles per base row, what are the grid dimensions and total tile count?",
                answer: "Dimensions: (3×5 + 2) × (2×5 + 3) = 17 × 13 = 221 tiles. The tiler should order 221 tiles plus 10% waste allowance ≈ 244 tiles.",
                extension: "The factored form (3x+2)(2x+3) tells the tiler the grid is never square (3x+2 ≠ 2x+3 for positive x), which affects the visual pattern of the tiling."
            },
            {
                scenario: "Compound Interest Comparison",
                context: "An investor compares two accounts. Account A grows by a factor of 3x² − 5x − 2, and Account B grows by a factor of 2x² − 3x − 9 over the same period, where x is the annual interest multiplier. She wants to factor both to compare growth structures.",
                problem: "Factor both expressions using the AC method.",
                application: "For 3x²−5x−2: ac=−6; p,q: (−6)(1)=−6, −6+1=−5 ✓. Split: 3x²−6x+x−2 = 3x(x−2)+1(x−2) = (x−2)(3x+1). For 2x²−3x−9: ac=−18; p,q: (−6)(3)=−18, −6+3=−3 ✓. Split: 2x²−6x+3x−9 = 2x(x−3)+3(x−3) = (x−3)(2x+3).",
                question: "If x = 1.05 (5% annual growth), which account grows faster, and what do the factored roots tell the investor?",
                answer: "Account A at x=1.05: (1.05−2)(3×1.05+1) = (−0.95)(4.15) = −3.94 (decreasing — rate below break-even of x=2). Account B at x=1.05: (1.05−3)(2×1.05+3) = (−1.95)(5.1) = −9.95 (also decreasing). Both accounts need x > 2 or x > 3 respectively to show positive growth — the factored roots reveal the minimum required interest rates.",
                extension: "The roots of each factored form are the break-even multipliers — a direct application of the Zero Product Property that makes financial analysis transparent."
            }
        ],

        sum_difference_cubes: [
            {
                scenario: "Storage Container Volume",
                context: "A warehouse manager has a large cubic storage unit of volume x³ cubic metres and a smaller cubic unit of volume 27 cubic metres. She needs to calculate the volume difference to plan for a spacer unit that fills the gap between them.",
                problem: "Factor x³ − 27 to express the volume difference in terms of linear and quadratic dimensions.",
                application: "a = x, b = 3 (since 27 = 3³). Difference of cubes: (x − 3)(x² + 3x + 9).",
                question: "If x = 6 metres, what is the volume difference? Interpret the two factors geometrically.",
                answer: "Volume difference = (6−3)(36+18+9) = 3 × 63 = 189 m³. The linear factor (x−3) represents the height difference between containers; the quadratic (x²+3x+9) involves cross-sectional area components.",
                extension: "The irreducibility of x²+3x+9 (discriminant = 9−36 = −27 < 0) confirms no further geometric decomposition into real rectangular components is possible."
            },
            {
                scenario: "Combined Volume of Two Sculptures",
                context: "An artist casts two cubic bronze sculptures — one with side length x cm and one with side length 5 cm. She wants to inscribe the combined volume as a factored expression on the base.",
                problem: "Express the total volume x³ + 125 in fully factored form.",
                application: "125 = 5³. Sum of cubes: (x + 5)(x² − 5x + 25).",
                question: "If x = 10 cm, verify the factored form gives the correct total volume.",
                answer: "Total = 10³ + 5³ = 1000 + 125 = 1125 cm³. Factored: (10+5)(100−50+25) = 15 × 75 = 1125 cm³ ✓.",
                extension: "The quadratic factor x²−5x+25 at x=10 equals 75, which has no obvious geometric meaning — but it is derived algebraically and always gives the correct result."
            },
            {
                scenario: "Population Growth Comparison",
                context: "A biologist models two bacterial populations over t hours: Colony A has population t³ and Colony B has population 64. She needs to factor their population difference to analyse when one overtakes the other.",
                problem: "Factor t³ − 64 to find when Colony A's population exceeds Colony B's by a structured amount.",
                application: "64 = 4³. Difference of cubes: (t − 4)(t² + 4t + 16).",
                question: "At what time t = 4 does the difference become zero? What does each factor tell the biologist?",
                answer: "At t = 4: (4−4)(16+16+16) = 0 × 48 = 0. The populations are equal at t = 4 hours. The linear factor (t−4) confirms t = 4 is the crossing point. The quadratic t²+4t+16 has discriminant 16−64 = −48 < 0, so t = 4 is the only real crossing — populations are equal exactly once.",
                extension: "The irreducibility of t²+4t+16 means there is exactly one time of equal population — if it were reducible, there could be multiple crossing times."
            },
            {
                scenario: "Speed of Sound Problem",
                context: "An engineer uses the expression 8v³ + 1 to model a pressure-wave component in an acoustic design, where v is the speed ratio. Factoring it helps identify resonant components.",
                problem: "Factor 8v³ + 1 using the sum of cubes formula.",
                application: "8v³ = (2v)³ and 1 = 1³. Sum of cubes: a = 2v, b = 1. Result: (2v + 1)(4v² − 2v + 1).",
                question: "At what value of v does the expression equal zero? Does the quadratic factor contribute any additional real zeros?",
                answer: "Set (2v+1) = 0: v = −0.5. Quadratic 4v²−2v+1: discriminant = 4−16 = −12 < 0. No real zeros from quadratic factor. Only one real zero: v = −0.5.",
                extension: "In engineering, complex roots correspond to oscillatory (resonant) rather than decaying modes — the irreducible quadratic factor signals oscillatory acoustic behaviour."
            }
        ],

        complete_factorization: [
            {
                scenario: "Swimming Pool Capacity Planning",
                context: "A council engineer models the usable volume of a community swimming pool as 3x⁴ − 48 cubic metres, where x is a scaling factor. She needs to fully factor this expression to identify the critical scaling dimensions.",
                problem: "Completely factor 3x⁴ − 48 and interpret each factor.",
                application: "Step 1 — GCF: 3(x⁴ − 16). Step 2 — Difference of squares: 3(x² + 4)(x² − 4). Step 3 — Factor again: 3(x² + 4)(x + 2)(x − 2). x² + 4 is irreducible (sum of squares).",
                question: "At what value of x is the volume zero? What does x = −2 mean in context, and why does x² + 4 = 0 have no physical solution?",
                answer: "Volume = 0 at x = 2 (pool at minimum viable scale) and x = −2 (mathematical but physically meaningless — negative scale). x² + 4 = 0 has no real solutions, confirming no other scaling issues exist.",
                extension: "The complete factored form 3(x²+4)(x+2)(x−2) allows the engineer to assess stability: only x = 2 is the physically meaningful capacity threshold."
            },
            {
                scenario: "Roller Coaster Height Model",
                context: "A theme park engineer models the height profile of a roller coaster section as h = 2x³ + 10x² + 12x metres above ground level, where x is the horizontal position in metres. Fully factoring this reveals the ground-level positions (h = 0).",
                problem: "Completely factor 2x³ + 10x² + 12x.",
                application: "Step 1 — GCF: 2x(x² + 5x + 6). Step 2 — Trinomial: p × q = 6, p + q = 5 → p=2, q=3. Result: 2x(x + 2)(x + 3).",
                question: "At what positions is the track at ground level? What does the factor 2x tell the engineer about the track at x = 0?",
                answer: "Ground level (h=0) at x = 0, x = −2, x = −3. At x = 0 (start), the track is at ground level. x = −2 and x = −3 are positions behind the start — relevant for the full track layout.",
                extension: "The factor 2x means the steepness at ground level is proportional to 2, compared to other crossings — the coefficient carries engineering meaning about the angle of the track."
            },
            {
                scenario: "Genetics Population Model",
                context: "A geneticist models allele frequency distribution as f = x⁵ − x³ − x² + 1, where x is a frequency parameter. Completely factoring reveals the equilibrium points where the model predicts stable populations.",
                problem: "Completely factor x⁵ − x³ − x² + 1.",
                application: "Group: (x⁵ − x³) − (x² − 1) = x³(x² − 1) − 1(x² − 1) = (x² − 1)(x³ − 1). Factor each: x²−1 = (x+1)(x−1); x³−1 = (x−1)(x²+x+1). Combine: (x+1)(x−1)²(x²+x+1).",
                question: "How many distinct equilibrium points (real zeros) does the model have? What is the significance of the repeated factor (x−1)²?",
                answer: "Real zeros: x = −1 and x = 1 (repeated). The quadratic x²+x+1 has discriminant 1−4 = −3 < 0, so no additional real zeros. The repeated factor (x−1)² means x = 1 is a stable equilibrium — the population approaches it tangentially rather than crossing through.",
                extension: "A repeated root corresponds to a tangent crossing on the graph — in population genetics, this means the system approaches but does not oscillate around the equilibrium at x = 1."
            },
            {
                scenario: "Bridge Load Distribution",
                context: "A structural engineer models the load distribution function across a bridge section as L = 4x⁵ − 64x, measured in kilonewtons. She needs to find all the load-zero positions to ensure safety at every span support.",
                problem: "Completely factor 4x⁵ − 64x.",
                application: "GCF: 4x(x⁴ − 16). Difference of squares: 4x(x² + 4)(x² − 4). Factor again: 4x(x² + 4)(x + 2)(x − 2). x² + 4 is irreducible.",
                question: "At which span positions is the load zero? Why does x² + 4 = 0 provide no load-zero positions, and what does this mean structurally?",
                answer: "Load = 0 at x = 0, x = 2, x = −2. The irreducible factor x²+4 confirms there are no other real zero-load positions — the engineer knows exactly where to place the three support columns.",
                extension: "Had x²+4 been reducible, there would be additional zero-load positions, potentially requiring more supports — the irreducibility result directly reduces construction cost."
            }
        ]
    };
}

