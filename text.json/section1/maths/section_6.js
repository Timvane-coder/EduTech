
functionDefinition: [
    {
        scenario: "Vending Machine as a Function",
        context: "A vending machine accepts button codes and dispenses one item per code. Button A1 always gives crisps; A2 always gives chocolate. The machine never dispenses two different items for the same button press.",
        problem: "Model the vending machine as a function. Identify the domain, range, and the function rule. Then determine whether the machine represents a one-to-one function.",
        application: "Domain: {A1, A2, A3, ..., C5} — all valid button codes. Range: {crisps, chocolate, water, ...} — all items stocked. Rule: each code maps to exactly one item. This IS a function (one output per input). It is NOT one-to-one if two buttons dispense the same item (many-to-one is allowed for functions; one-to-many is not).",
        question: "The machine is reprogrammed so that pressing A1 sometimes gives crisps and sometimes gives chocolate depending on stock. Is it still a function? Explain.",
        answer: "No. If pressing A1 can yield either crisps or chocolate, then one input (A1) maps to two different outputs. This violates the definition of a function. The same input must always produce the same output — the vending machine is now a relation but not a function.",
        extension: "This everyday analogy captures the entire definition of a function: determinism (same input always gives same output) is the mathematical meaning of 'exactly one output per input'. Every piece of computer software that is a pure function satisfies this property — given the same inputs, it always returns the same output."
    },
    {
        scenario: "Passport Numbers and Identity",
        context: "A government issues each citizen exactly one passport number. Multiple citizens cannot share a number, and no citizen has two numbers simultaneously.",
        problem: "Model this as a function. Identify the domain and range. Determine whether this function is one-to-one and onto. Does it have an inverse?",
        application: "Domain: set of all citizens. Range: set of all issued passport numbers. Rule: each citizen maps to their unique number. This IS a function. It IS one-to-one (no two citizens share a number). It IS onto if every number in the range is assigned to someone. Since it is bijective (one-to-one and onto), the inverse function exists: f⁻¹ maps each passport number back to its citizen.",
        question: "If a citizen's passport expires and they receive a new number, has the function changed? What does this mean for the inverse?",
        answer: "Yes — the function has changed. The old number is no longer mapped to anyone (it leaves the range) and a new number is added. The inverse must also update: the old number no longer maps back to the citizen. This illustrates that the function and its inverse are defined together — changing one forces a change in the other.",
        extension: "Database design is built on this principle. A primary key in a relational database is a one-to-one function from rows to key values. The ability to retrieve any row from its key is the inverse function — and database indexing is the computational implementation of that inverse."
    }
],

functionNotation: [
    {
        scenario: "Mobile App Pricing Formula",
        context: "A streaming app charges users based on the number of months subscribed. The pricing function is f(m) = 9.99m − 4.99, where m is the number of months, representing a £4.99 sign-up discount on the first month only applied as a reduction to the formula total.",
        problem: "Evaluate f(1), f(6), and f(12). Interpret each result in context. Then find the value of m for which f(m) = 54.95.",
        application: "f(1) = 9.99(1) − 4.99 = £5.00 (first month with sign-up discount applied). f(6) = 9.99(6) − 4.99 = 59.94 − 4.99 = £54.95. f(12) = 9.99(12) − 4.99 = 119.88 − 4.99 = £114.89. For f(m) = 54.95: 9.99m − 4.99 = 54.95 → 9.99m = 59.94 → m = 6 months.",
        question: "A competitor uses g(m) = 8.49m for all months with no discount. For what number of months does f(m) < g(m), making the first app cheaper?",
        answer: "Solve f(m) < g(m): 9.99m − 4.99 < 8.49m → 1.5m < 4.99 → m < 3.33. So for m = 1, 2, or 3 months, the first app (with discount) is cheaper. For m ≥ 4, the competitor is cheaper. Function notation makes this comparison algebraically clean — setting f(m) = g(m) identifies the exact break-even month.",
        extension: "This is a piecewise function scenario in disguise. Real pricing models often use f(m) = 4.99 for m = 1 and f(m) = 4.99 + 9.99(m−1) for m > 1, which is a piecewise-defined function — a function whose rule changes depending on the input value."
    },
    {
        scenario: "Body Mass Index (BMI) as a Function",
        context: "BMI is a health screening index calculated as BMI = weight (kg) / height² (m²). For a person of fixed height 1.75 m, this defines a function of weight alone: B(w) = w / (1.75)² = w / 3.0625.",
        problem: "Evaluate B(70), B(90), B(55). Find the weight w for which B(w) = 25 (the boundary of the healthy/overweight range). Interpret all results.",
        application: "B(70) = 70/3.0625 ≈ 22.9 (healthy range: 18.5–24.9). B(90) = 90/3.0625 ≈ 29.4 (overweight). B(55) = 55/3.0625 ≈ 18.0 (borderline underweight). For B(w) = 25: w/3.0625 = 25 → w = 25 × 3.0625 = 76.6 kg. For this person, any weight above 76.6 kg crosses into overweight classification.",
        question: "A second person is 1.60 m tall. Write their BMI function C(w). Find and compare the threshold weights (B(w) = 25 and C(w) = 25) for both people. What does this reveal about BMI?",
        answer: "C(w) = w / (1.60)² = w / 2.56. C(w) = 25 → w = 25 × 2.56 = 64.0 kg. The taller person (1.75 m) can weigh up to 76.6 kg before being classified overweight; the shorter person (1.60 m) crosses the threshold at 64.0 kg. BMI is a function of both weight and height — fixing one gives a linear function of the other. Comparing two functions with the same output reveals how the threshold changes with height.",
        extension: "BMI = w/h² is a function of two variables — a multivariable function. Setting h as a parameter and treating w as the variable gives a one-variable function for a specific individual. This technique of fixing one variable to study the other is called partial analysis and is foundational in calculus of several variables."
    }
],

domainAndRange: [
    {
        scenario: "Safe Working Load on a Bridge",
        context: "A bridge's structural model gives the stress on a supporting beam as S(w) = √(w − 500) / (w − 2000), where w is the total weight in kg applied to the beam. Engineers need to determine the range of safe operating weights.",
        problem: "Find the domain of S(w), explaining each restriction in engineering terms. Identify which weight values are excluded and why.",
        application: "Restriction 1 — square root: w − 500 ≥ 0 → w ≥ 500 kg. Below 500 kg, the model produces imaginary stress values — physically, this is the minimum load for the model to apply. Restriction 2 — denominator: w − 2000 ≠ 0 → w ≠ 2000 kg. At exactly 2000 kg, stress becomes infinite — this represents structural failure (the model predicts the beam snaps). Domain: w ≥ 500 and w ≠ 2000, i.e. [500, 2000) ∪ (2000, +∞).",
        question: "An engineer proposes operating the bridge only in the range 500 ≤ w ≤ 1800 to provide a safety margin. Evaluate S(500), S(900), and S(1800) and interpret each in context.",
        answer: "S(500) = √(500−500)/(500−2000) = 0/(−1500) = 0 (no stress beyond the base load). S(900) = √400/(900−2000) = 20/(−1100) ≈ −0.0182 (negative stress indicates compression). S(1800) = √1300/(1800−2000) = 36.06/(−200) ≈ −0.180 (higher compression as load approaches critical weight). The engineer's restriction to 1800 kg maintains a 200 kg safety margin below the critical value.",
        extension: "Domain analysis in engineering is called constraint analysis. Every physical model has a domain of validity — a range of inputs for which the model gives meaningful results. Identifying this domain before using the model is as important as the model itself. Many engineering disasters trace to using a model outside its valid domain."
    },
    {
        scenario: "Range of a Projectile Function",
        context: "A ball is thrown upward from the top of a 20-metre building. Its height h (metres) after t seconds is given by h(t) = −5t² + 15t + 20.",
        problem: "Find the domain of h(t) in context (time from launch until the ball hits the ground). Find the range of h(t) over this domain. Identify the maximum height and when it occurs.",
        application: "Domain: find when h(t) = 0 (ball hits the ground). −5t² + 15t + 20 = 0 → t² − 3t − 4 = 0 → (t − 4)(t + 1) = 0 → t = 4 or t = −1. Since t ≥ 0, domain is 0 ≤ t ≤ 4 seconds. Maximum height: vertex at t = −b/(2a) = −15/(2 × −5) = 1.5 s. h(1.5) = −5(2.25) + 15(1.5) + 20 = −11.25 + 22.5 + 20 = 31.25 m. Range: from h(0) = 20 m (starting height) up to 31.25 m (maximum), then back down to 0. Range: 0 ≤ h ≤ 31.25 metres.",
        question: "A safety fence is at height 25 m. During what time interval is the ball above the fence?",
        answer: "Solve h(t) = 25: −5t² + 15t + 20 = 25 → −5t² + 15t − 5 = 0 → t² − 3t + 1 = 0 → t = (3 ± √5)/2 → t ≈ 0.382 s or t ≈ 2.618 s. The ball is above 25 m for approximately 0.38 s ≤ t ≤ 2.62 s — a window of about 2.24 seconds.",
        extension: "The domain 0 ≤ t ≤ 4 is a contextual restriction — the mathematical domain of −5t² + 15t + 20 is all real numbers, but the physical situation restricts t to the flight time. The distinction between the mathematical domain (from the formula alone) and the contextual domain (from the situation) is a crucial modelling skill."
    }
],

typesOfFunctions: [
    {
        scenario: "Exponential Growth: Compound Interest",
        context: "An investor deposits £2000 in an account paying 5% annual compound interest. The value of the account after t years is given by A(t) = 2000 × (1.05)ᵗ.",
        problem: "Evaluate A(0), A(1), A(10), A(20). Find how long it takes for the investment to double. Compare exponential growth to the linear model L(t) = 2000 + 100t (simple interest at £100/year).",
        application: "A(0) = £2000; A(1) = 2000 × 1.05 = £2100; A(10) = 2000 × (1.05)¹⁰ ≈ 2000 × 1.6289 ≈ £3257.79; A(20) = 2000 × (1.05)²⁰ ≈ 2000 × 2.6533 ≈ £5306.60. To double: 2000 × (1.05)ᵗ = 4000 → (1.05)ᵗ = 2 → t = log(2)/log(1.05) ≈ 14.2 years. L(20) = 2000 + 100(20) = £4000 — significantly less than £5306.60 at year 20.",
        question: "At what year does the exponential account first exceed the linear account by more than £1000? Set up and interpret the inequality A(t) − L(t) > 1000.",
        answer: "A(t) − L(t) = 2000(1.05)ᵗ − (2000 + 100t) > 1000. Testing values: t = 10: 3257.79 − 3000 = £257.79 (not yet). t = 15: 2000(1.05)¹⁵ − 3500 ≈ 4157.85 − 3500 = £657.85 (not yet). t = 18: 2000(1.05)¹⁸ − 3800 ≈ 4813.24 − 3800 = £1013.24. The exponential first exceeds the linear by more than £1000 at approximately year 18, illustrating why compound interest dominates over long periods.",
        extension: "The Rule of 72 is a practical application of logarithms to exponential functions: dividing 72 by the annual interest rate approximates the doubling time in years. At 5%: 72/5 = 14.4 years — very close to the exact answer of 14.2 years. This approximation works because ln(2) ≈ 0.693 and the linearisation of ln(1 + r) ≈ r for small r."
    },
    {
        scenario: "Quadratic Function: Optimising a Fenced Enclosure",
        context: "A farmer has 120 m of fencing to enclose a rectangular area against a straight barn wall (so only three sides need fencing). The farmer wants to maximise the enclosed area.",
        problem: "Write the area A as a function of the width x of one of the two sides perpendicular to the barn. Find the domain of A(x), find the maximum area, and identify the optimal dimensions.",
        application: "If x is the width of each perpendicular side, the remaining side has length 120 − 2x. Area: A(x) = x(120 − 2x) = 120x − 2x². This is a downward-opening parabola. Domain: x > 0 and 120 − 2x > 0 → x < 60, so domain is (0, 60). Vertex (maximum): x = −120/(2 × −2) = 120/4 = 30 m. Maximum area: A(30) = 120(30) − 2(30)² = 3600 − 1800 = 1800 m². Dimensions: 30 m × 60 m.",
        question: "The farmer wants to know for what values of x the area exceeds 1600 m². Write and solve the inequality A(x) > 1600.",
        answer: "120x − 2x² > 1600 → −2x² + 120x − 1600 > 0 → x² − 60x + 800 < 0 → (x − 20)(x − 40) < 0. The quadratic is negative between its roots: 20 < x < 40. So any width between 20 m and 40 m yields more than 1600 m² of enclosed area. The function reveals that there is a range of good choices, with the optimal at the midpoint x = 30 m.",
        extension: "This optimisation is a universal pattern: any quadratic function A(x) = −ax² + bx + c with a > 0 has a maximum at x = b/(2a). The optimal point is always the midpoint of the two values where A(x) equals any fixed target — a consequence of the parabola's axis of symmetry. This symmetry makes quadratic optimisation far simpler than optimisation of higher-degree functions."
    }
],


angleBasics: [
            {
                scenario: "Clock Angles",
                context: "A mathematician notices that the hands of an analogue clock form different angles at different times. Understanding how to calculate the angle between clock hands requires knowing that a full clock face is 360°, each hour mark represents 30°, and the minute hand moves continuously.",
                problem: "Calculate the angle between the hour and minute hands at 3:00, at 6:00, and at 2:30.",
                application: "At 3:00: hour hand at 90° (3 × 30°), minute hand at 0° → angle = 90°. At 6:00: hour hand at 180°, minute hand at 0° → angle = 180° (straight angle). At 2:30: minute hand at 180°; hour hand has moved halfway between 2 and 3 = 60° + 15° = 75° → angle = 180° − 75° = 105°.",
                question: "At what time between 12:00 and 1:00 are the hands exactly at 90°? Set up and solve the equation.",
                answer: "Minute hand moves at 6°/min; hour hand moves at 0.5°/min. Relative speed = 5.5°/min. Starting at 12:00, both hands at 0°. Angle = 5.5t. Set 5.5t = 90° → t = 90/5.5 ≈ 16.36 minutes, i.e. approximately 12:16. This is a linear equation in disguise — the angle between the hands is itself a linear function of time.",
                extension: "Clock angle problems are a classic application of the angles-around-a-point rule combined with rate-of-change reasoning. The fact that the answer is not a whole number of minutes illustrates why precise angle calculation matters — visual estimation from a clock face is insufficient."
            },
            {
                scenario: "Carpentry and Mitre Cuts",
                context: "A carpenter is constructing a rectangular picture frame. Each corner must be a perfect right angle (90°). To join two pieces of wood at a corner, each piece must be cut at the same mitre angle so that the two cuts together form 90°. The carpenter needs to determine the mitre angle for both equal and unequal joins.",
                problem: "For a standard rectangular frame, what angle must each piece be cut at? For a regular hexagonal frame, what mitre angle is needed at each corner?",
                application: "Rectangle: each corner = 90°. Mitre angle = 90° ÷ 2 = 45°. Each piece cut at 45°. Hexagon: each interior angle of a regular hexagon = (6 − 2) × 180° ÷ 6 = 120°. Mitre angle = 120° ÷ 2 = 60°. Each piece cut at 60°.",
                question: "A carpenter needs to build a regular octagonal frame. Calculate the mitre angle for each join, showing the full working.",
                answer: "Interior angle of regular octagon = (8 − 2) × 180° ÷ 8 = 1080° ÷ 8 = 135°. Mitre angle = 135° ÷ 2 = 67.5°. Each piece is cut at 67.5°. The two cuts together: 67.5° + 67.5° = 135° = the interior angle. ✓",
                extension: "The mitre angle calculation is the practical application of the regular polygon interior angle formula. Every regular polygon frame uses a different mitre angle, and the formula (n − 2) × 180° ÷ (2n) = 90° − 180°/n gives the mitre angle directly for any regular n-sided frame."
            }
        ],

        angleRelationships: [
            {
                scenario: "Road Junction Design",
                context: "A road planner is designing a junction where a new road crosses two existing parallel roads. The transversal (new road) must cross both existing roads at the same angle to ensure consistent sight lines and safe turning radii. The planner needs to calculate all eight angles formed at the two intersections.",
                problem: "The new road crosses the first parallel road at 65°. Using parallel-line angle rules, find all eight angles at both intersections without measuring.",
                application: "At intersection 1: the transversal creates angles of 65°, 115°, 65°, 115° (angles on a line sum to 180°; vertically opposite pairs are equal). At intersection 2: corresponding angles = 65° (same position), so the pattern is identical: 65°, 115°, 65°, 115°. All eight angles are known from the single measurement of 65°.",
                question: "The road planner wants the new road to cross both parallel roads at exactly 90°. What does this imply about the transversal, and what type of angle pair is formed at each intersection?",
                answer: "If the transversal crosses at 90°, it is perpendicular to both parallel roads. All eight angles are 90°. The corresponding, alternate, and co-interior relationships still hold: 90° = 90° (corresponding, equal ✓); 90° = 90° (alternate, equal ✓); 90° + 90° = 180° (co-interior, supplementary ✓). A transversal perpendicular to two parallel lines is itself parallel to any other such transversal.",
                extension: "This scenario models the geometry of a standard road grid. In a perfectly rectangular city grid (like Manhattan), all roads are either parallel or perpendicular, making all transversal angles exactly 90°. Diagonal roads (like Broadway in New York) create all three types of parallel-line angle pairs, explaining why junctions with diagonal roads have more complex traffic geometry."
            },
            {
                scenario: "Periscope and Reflective Optics",
                context: "A periscope uses two parallel mirrors to allow a viewer to see over obstacles. Light enters the top mirror at an angle of incidence, reflects, travels to the bottom mirror, reflects again, and reaches the viewer's eye. The geometry of this system is entirely determined by the angle at which the mirrors are tilted, which is a direct application of alternate angles in parallel lines.",
                problem: "In a simple periscope, both mirrors are tilted at 45° to the horizontal. Light enters vertically downward. Show using angle reasoning that the light exits the periscope horizontally.",
                application: "Light hits the top mirror at 45° (angle of incidence). By the law of reflection, angle of reflection = 45°. The reflected ray travels horizontally to the bottom mirror (45° + 45° = 90° turn from vertical → horizontal). The second mirror (also at 45°) reflects the horizontal ray vertically downward again — or, if the mirrors face each other, the exit ray is horizontal. The key is that the two mirror surfaces are parallel; the alternate angles in the light path are equal, maintaining the direction of travel.",
                question: "If the top mirror is tilted at 30° instead of 45°, at what angle does the light exit the periscope? Use the angle relationships to justify your answer.",
                answer: "Angle of incidence = 30°. Angle of reflection = 30°. The reflected ray makes an angle of 30° with the mirror surface, meaning it travels at 90° − 30° = 60° from horizontal. When this ray hits the bottom mirror (also at 30° to horizontal), the process repeats and the exit ray is parallel to the entry ray (vertical), but the intermediate path has changed. Using alternate angles: the entry ray and exit ray are parallel (both vertical) because the two mirror surfaces are parallel — the alternate angle relationship guarantees this regardless of the tilt angle.",
                extension: "This is the principle behind retroreflectors — devices that reflect light back to its source regardless of the angle of incidence. A corner retroreflector (two mirrors at 90°) uses the fact that two reflections in perpendicular mirrors always reverse the direction of travel — a consequence of the supplementary angle relationship between perpendicular mirror planes."
            }
        ],

        anglesInTriangles: [
            {
                scenario: "Roof Truss Design",
                context: "A structural engineer is designing a symmetrical roof truss. The truss is an isosceles triangle with a horizontal base (the ceiling joist). The engineer needs the roof to have a specific pitch angle at the apex to allow adequate drainage and to meet building regulations, which specify a minimum pitch of 15° and a maximum of 45°.",
                problem: "The apex angle of the triangular truss is 50°. Find the pitch angle at each base corner. Then find the apex angle that gives the maximum permitted pitch of 45°.",
                application: "Apex angle = 50°. By the isosceles triangle property, both base angles are equal. Base angle = (180° − 50°) ÷ 2 = 65°. The pitch angle at each base corner is 65°. For maximum pitch 45°: apex = 180° − 2(45°) = 90°. For minimum pitch 15°: apex = 180° − 2(15°) = 150°.",
                question: "A non-symmetric truss has angles at the base of 55° and 70°. Find the apex angle and verify using the exterior angle theorem: show that the exterior angle at one base = the sum of the other base angle and the apex angle.",
                answer: "Apex = 180° − 55° − 70° = 55°. Exterior angle at 70° vertex = 180° − 70° = 110°. Sum of other two interior angles = 55° + 55° = 110° ✓. Exterior angle at 55° vertex = 180° − 55° = 125°. Sum of other two = 70° + 55° = 125° ✓.",
                extension: "Roof trusses are engineered using the principle that a triangle is the only rigid polygon — unlike a square or rectangle, a triangle cannot be deformed without changing the length of at least one side. This rigidity, combined with precise angle calculation, is why triangular trusses bear loads without collapsing. The angle at the apex directly determines the load distribution between the two sloping rafters."
            },
            {
                scenario: "Navigation and Triangulation",
                context: "Before GPS, sailors and surveyors used triangulation — measuring angles from known base points to determine the location of an unknown point. Two observers at either end of a known baseline measure the angles to a distant ship or landmark. The three angles and one side of a triangle are then known, allowing the complete triangle (and therefore the position of the unknown point) to be determined.",
                problem: "Two lighthouses A and B are 500 m apart. A ship at point C is observed from A at an angle of 70° (angle CAB) and from B at an angle of 65° (angle CBA). Find angle ACB and describe the triangle.",
                application: "Angle ACB = 180° − 70° − 65° = 45°. The triangle is scalene (no equal angles). The largest angle is at A (70°), meaning the side opposite A (BC) is... wait — actually the largest angle is angle CAB = 70° and angle CBA = 65°; both are less than angle ACB? No: 70° + 65° + 45° = 180° ✓. The largest angle is at A (70°), so the longest side is BC (opposite A). The smallest angle is ACB (45°), so the shortest side is AB (the baseline, 500 m).",
                question: "If the angle at A increases to 85° (the ship moves closer to the line AB extended), what happens to angle ACB and what does this tell us about the ship's distance from the baseline?",
                answer: "New angle ACB = 180° − 85° − 65° = 30°. Angle ACB has decreased from 45° to 30°. A smaller apex angle means the triangle is more elongated — the ship is farther from the midpoint of AB but the angles from each lighthouse are more extreme. The ship is moving away from a position directly opposite the baseline. Using the sine rule (extension topic): the smaller angle ACB means side AB (the baseline) subtends a smaller angle, implying the ship is farther away.",
                extension: "Modern GPS is conceptually identical to triangulation, but uses time-of-flight from satellites rather than angle measurement from ground stations. The mathematical structure — finding an unknown point from known positions and measured angles or distances — is called trilateration (distance-based) or triangulation (angle-based). Both rest on the same triangle angle sum property."
            }
        ],

        anglesInPolygons: [
            {
                scenario: "Tiling and Tessellation",
                context: "A tiler wants to cover a flat floor using a single shape of regular polygon, with no gaps and no overlaps (a regular tessellation). The key constraint is that the interior angles of the tiles must sum to exactly 360° at every vertex — the angles must fit together perfectly around each point.",
                problem: "Determine which regular polygons can tile a flat surface by themselves. Test the equilateral triangle, square, regular pentagon, regular hexagon, and regular octagon.",
                application: "Equilateral triangle: interior angle = 60°. 360° ÷ 60° = 6. Six triangles meet at each vertex. ✓ Tessellates. Square: interior angle = 90°. 360° ÷ 90° = 4. Four squares meet at each vertex. ✓ Tessellates. Regular pentagon: interior angle = 108°. 360° ÷ 108° = 3.33... Not a whole number. ✗ Does not tessellate. Regular hexagon: interior angle = 120°. 360° ÷ 120° = 3. Three hexagons meet at each vertex. ✓ Tessellates. Regular octagon: interior angle = 135°. 360° ÷ 135° = 2.67... Not a whole number. ✗ Does not tessellate alone (though octagons and squares together do).",
                question: "Prove algebraically that only three regular polygons can tessellate a flat surface alone. Set up and solve the inequality/equation for which values of n give a whole number of polygons around a vertex.",
                answer: "Require 360° ÷ [(n − 2) × 180° ÷ n] = k, where k is a positive integer ≥ 3 (you need at least 3 polygons to fill space). Simplify: 360n ÷ [(n − 2) × 180°] = k → 2n ÷ (n − 2) = k. For k = 3: 2n = 3(n − 2) = 3n − 6 → n = 6 (hexagon). For k = 4: 2n = 4n − 8 → 2n = 8 → n = 4 (square). For k = 6: 2n = 6n − 12 → 4n = 12 → n = 3 (triangle). For k = 5: n = 10/3 — not an integer. So only n = 3, 4, 6 work. ✓",
                extension: "The tessellation constraint (interior angles divide 360° exactly) is a direct consequence of the angles-around-a-point rule. The discovery that only three regular polygons tile the plane alone was known to ancient Greek mathematicians. Non-regular tessellations (using multiple shapes, like the Penrose tiling) are a rich area of modern mathematics with applications in materials science and crystallography."
            },
            {
                scenario: "Architecture: Designing a Regular Polygon Building",
                context: "An architect is designing a community centre with a floor plan in the shape of a regular polygon. The interior angle at each corner determines the wall-to-wall angle. The architect needs the interior angles to be obtuse (greater than 90°) to avoid awkward sharp corners, and wants each interior angle to be a whole number of degrees.",
                problem: "Find all regular polygons where the interior angle is (a) a whole number of degrees and (b) greater than 90°. Which gives interior angles closest to 120° without exceeding it?",
                application: "Interior angle = (n − 2) × 180° ÷ n. For this to be a whole number, (n − 2) × 180 must be divisible by n. Since 180(n − 2)/n = 180 − 360/n, this is a whole number whenever 360 is divisible by n. Divisors of 360: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120, 180, 360. Valid polygon values (n ≥ 3): n = 3(60°), 4(90°), 5(108°), 6(120°), 8(135°), 9(140°), 10(144°), 12(150°)... Interior angles > 90° start at n = 5. Closest to 120° without exceeding: n = 5 gives 108°; n = 6 gives exactly 120°.",
                question: "The architect decides on a regular 9-sided building (nonagon). Calculate the interior angle and the total interior angle sum. If one wall must be extended by 15° for an entrance ramp, how does this affect the angle at the two adjacent corners?",
                answer: "Interior angle of regular nonagon = (9 − 2) × 180° ÷ 9 = 7 × 180° ÷ 9 = 140°. Total interior sum = 7 × 180° = 1260°. Extending one wall by 15° means that wall makes an angle 15° wider with each adjacent wall: each adjacent interior angle decreases by 15° → new adjacent angles = 140° − 15° = 125°. The total interior sum remains 1260° because the extension angle (15°) has been added at one corner and removed from two others: net change = +15° − 15° − 15° = −15°... Correction: the extension creates an additional vertex. The shape is no longer a simple nonagon and the total angle sum changes. This introduces the idea that changing polygon shape changes the angle sum.",
                extension: "The constraint that 360 must be divisible by n for a regular polygon to have whole-number interior angles connects number theory (divisibility) to geometry. This is why so many traditional designs — from Islamic geometric art to Roman floor mosaics — use triangles, squares, and hexagons: they are the only regular shapes that simultaneously tile a flat surface AND have interior angles that are factors of 360."
            }
        ],

trigRatioBasics: [
    {
        scenario: "Roof Pitch in Construction",
        context: "A carpenter is designing a pitched roof. The roof ridge is 3.2 m above the ceiling level and the half-width of the building is 5.0 m, forming a right-angled triangle. The carpenter needs to know the angle of pitch for planning purposes and the length of the rafter to order materials.",
        problem: "Find the pitch angle of the roof and the length of the rafter.",
        application: "Opposite = 3.2 m (height), adjacent = 5.0 m (half-width). Angle: tan θ = 3.2/5.0 = 0.64 → θ = tan⁻¹(0.64) = 32.6°. Rafter (hypotenuse): by Pythagoras, rafter = √(3.2² + 5.0²) = √(10.24 + 25) = √35.24 = 5.94 m. Alternatively using sin: sin 32.6° = 3.2/hyp → hyp = 3.2/sin 32.6° = 5.94 m ✓.",
        question: "Building regulations require a pitch angle of at least 35°. Does this roof comply? If not, what is the minimum ridge height required to achieve exactly 35° with the same half-width?",
        answer: "32.6° < 35° — does not comply. Minimum height: tan 35° = h/5.0 → h = 5.0 × tan 35° = 5.0 × 0.7002 = 3.50 m. The ridge must be raised to at least 3.50 m.",
        extension: "Roof pitch calculations underpin structural engineering load analysis. The component of wind or snow load perpendicular to the roof surface is found by multiplying the total load by cos(pitch angle) — a direct application of trigonometric ratios to force resolution."
    },
    {
        scenario: "Angle of Elevation and Depression in Surveying",
        context: "A surveyor needs to find the height of a cliff. Standing 80 m from the base of the cliff on flat ground, they measure the angle of elevation to the cliff top as 42°. They also need the distance from the surveyor to the cliff top for cable-laying purposes.",
        problem: "Find the height of the cliff and the straight-line distance from the surveyor to the cliff top.",
        application: "tan 42° = height / 80 → height = 80 × tan 42° = 80 × 0.9004 = 72.0 m. Hypotenuse (distance to cliff top): cos 42° = 80/hyp → hyp = 80/cos 42° = 80/0.7431 = 107.7 m. Alternatively: hyp = √(80² + 72²) = √(6400 + 5184) = √11584 = 107.6 m ✓.",
        question: "From the cliff top, the angle of depression to a boat at sea is 28°. If the cliff height is 72 m, how far is the boat from the base of the cliff?",
        answer: "Angle of depression = angle of elevation from boat = 28°. tan 28° = 72/distance → distance = 72/tan 28° = 72/0.5317 = 135.4 m.",
        extension: "Angles of elevation and depression are the foundation of trigonometric surveying (theodolite measurement) and GPS triangulation. Every building height in a city was determined by a right-triangle calculation equivalent to this one before laser rangefinders became standard."
    }
],

unitCircleAndRadians: [
    {
        scenario: "Pendulum Motion and Radian Measure",
        context: "A grandfather clock has a pendulum of length 45 cm that swings through an arc. The pendulum swings 18° to each side of vertical. A watchmaker needs to calculate the arc length traced by the pendulum tip on each half-swing to assess wear on the mechanism.",
        problem: "Convert the angle 18° to radians and calculate the arc length traced by the pendulum tip on each half-swing.",
        application: "Convert: 18° × π/180 = π/10 radians ≈ 0.3142 rad. Arc length: s = rθ = 45 × 0.3142 = 14.14 cm per half-swing. Full swing: 28.3 cm. Note: if θ were left in degrees the formula s = rθ would give 45 × 18 = 810 cm — dimensionally and physically wrong, confirming that s = rθ requires radians.",
        question: "The pendulum completes 60 full swings per minute (one swing per second for a seconds pendulum). What total arc distance does the tip travel in one hour?",
        answer: "Each full swing = 2 × 14.14 = 28.28 cm. 60 swings/minute × 60 minutes = 3600 swings/hour. Total distance = 3600 × 28.28 = 101,808 cm ≈ 1018 m ≈ 1.02 km.",
        extension: "The period of a simple pendulum T = 2π√(L/g) involves 2π radians — the full-circle radian measure. This formula emerges from solving the differential equation of simple harmonic motion, where the restoring force uses the small-angle approximation sin θ ≈ θ (valid in radians, not degrees). The entire mathematical description of a pendulum requires radians."
    },
    {
        scenario: "Sector Areas in Engineering: Cam Design",
        context: "An engineer designs a cam (a rotating disc that converts rotary motion into linear motion). The cam is a sector of a circle with radius 4 cm and central angle 2π/3 radians. The engineer needs the arc length of the cam's curved surface and the area of material required.",
        problem: "Calculate the arc length and the sector area of the cam.",
        application: "Arc length: s = rθ = 4 × 2π/3 = 8π/3 ≈ 8.38 cm. Sector area: A = ½r²θ = ½ × 16 × 2π/3 = 16π/3 ≈ 16.76 cm².",
        question: "A second cam has the same area (16π/3 cm²) but a radius of 5 cm. Find its central angle in degrees.",
        answer: "A = ½r²θ → 16π/3 = ½ × 25 × θ → θ = (16π/3)/(25/2) = 32π/75 radians. Convert: (32π/75) × (180/π) = 32 × 180/75 = 76.8°.",
        extension: "Cam profiles are described entirely in polar coordinates using r as a function of θ. The area swept in each rotational interval is the integral of ½r²(θ) dθ — a direct generalisation of the sector area formula. Engineers optimise cam profiles to minimise vibration, and trigonometry is the mathematical backbone of this optimisation."
    }
],

trigGraphs: [
    {
        scenario: "Modelling Tidal Heights",
        context: "The height h (in metres) of the tide at a harbour is modelled by h = 3 sin(30t − 90°) + 5, where t is the time in hours after midnight. Harbour authorities need to understand the tidal cycle to schedule ship movements safely.",
        problem: "Find the amplitude, period, maximum height, minimum height, and the times at which high and low tides occur.",
        application: "Amplitude = 3 m. Period = 360°/30 = 12 hours (a realistic semi-diurnal tidal pattern). Maximum height = 5 + 3 = 8 m. Minimum height = 5 − 3 = 2 m. Midline = 5 m (mean sea level). High tide: sin(30t − 90°) = 1 → 30t − 90° = 90° → 30t = 180° → t = 6 hours (6:00 am). Low tide: sin(30t − 90°) = −1 → 30t − 90° = 270° → 30t = 360° → t = 12 hours (noon). Next high tide at t = 18 (6:00 pm), confirming the 12-hour period.",
        question: "A vessel requires at least 5.5 m of water to enter the harbour. Find the times during the first 24 hours when entry is possible.",
        answer: "h ≥ 5.5: 3 sin(30t − 90°) + 5 ≥ 5.5 → sin(30t − 90°) ≥ 1/6 → 30t − 90° ≥ sin⁻¹(1/6) ≈ 9.6°. First window: 30t − 90° between 9.6° and 170.4° → t between 3.32 and 8.68 hours (approx 3:19 am to 8:41 am). Second window (next cycle, 12 hours later): 15:19 to 20:41. This is an inequality applied to a transformed trig function — a core exam skill.",
        extension: "Real tidal prediction uses a superposition of multiple sine and cosine terms (a Fourier series) with different periods corresponding to the moon's orbital period (12.42 hours), the sun's tidal influence (12 hours), and longer-period astronomical cycles. The simple one-term model here is the first term of that series."
    },
    {
        scenario: "Alternating Current in Physics and Engineering",
        context: "The voltage in a mains AC circuit is V = 325 sin(100πt) volts, where t is time in seconds. An electrician needs to understand the cycle for safety analysis and equipment specification.",
        problem: "Find the peak voltage, the period of the cycle, the frequency, and the voltage at t = 0.005 seconds.",
        application: "Peak voltage (amplitude): 325 V. Note: the '240V' mains rating is the RMS value = 325/√2 ≈ 230 V. Period: the argument is 100πt, which matches bx with b = 100π in radians. Period = 2π/b = 2π/(100π) = 1/50 seconds. Frequency = 1/period = 50 Hz (UK mains frequency). Voltage at t = 0.005 s: V = 325 sin(100π × 0.005) = 325 sin(0.5π) = 325 × 1 = 325 V (the peak).",
        question: "Find the first time t > 0 when the voltage is exactly 200 V.",
        answer: "325 sin(100πt) = 200 → sin(100πt) = 200/325 = 0.6154 → 100πt = sin⁻¹(0.6154) ≈ 0.6593 radians → t = 0.6593/(100π) ≈ 0.00210 seconds. Second solution in the first cycle: 100πt = π − 0.6593 = 2.4823 → t ≈ 0.00790 s.",
        extension: "The 'RMS voltage' (root mean square) is the DC equivalent of an AC voltage for power calculations. It equals peak voltage/√2 for a pure sinusoid — a result derived by integrating sin²(100πt) over one period, which uses the double angle identity cos 2θ = 1 − 2sin²θ. Thus trig identities are directly embedded in electrical power engineering."
    }
],

triangleApplications: [
    {
        scenario: "Navigation and Bearing Problems",
        context: "A ship leaves port and travels 45 km on a bearing of 060° (N60°E). It then changes course and travels 70 km on a bearing of 160° (S20°E). The navigator needs to find the straight-line distance back to port and the bearing for the return journey.",
        problem: "Find the distance from the ship's current position to port and the bearing the ship must travel to return directly.",
        application: "The included angle between the two legs: bearing 060° then 160° — the angle at the turning point between the two legs is 180° − 60° + (180° − 160°) = 160°. Actually: the first leg direction is 060°; the second is 160°. The angle between the legs at the turning point = 160° − 060° = 100°. Cosine rule: d² = 45² + 70² − 2(45)(70)cos 100° = 2025 + 4900 − 6300(−0.1736) = 6925 + 1094 = 8019. d = √8019 = 89.5 km. For the return bearing: use the sine rule to find the angle at port, then compute the bearing.",
        question: "Use the sine rule to find the angle at the port (between the first leg and the direct return line) and hence state the return bearing.",
        answer: "Sine rule: sin(angle at port)/70 = sin 100°/89.5 → sin(angle at port) = 70 × sin 100°/89.5 = 70 × 0.9848/89.5 = 0.7703 → angle = 50.4°. Return bearing from port to ship is approximately 060° + 50.4° = 110.4° from North. Return journey bearing from ship to port is 110.4° + 180° = 290.4° (i.e. N70.4°W approximately).",
        extension: "Maritime navigation uses the cosine rule constantly. The challenge is correctly identifying the interior angle of the triangle, which requires converting between compass bearings (measured clockwise from north) and the interior angles needed for the rule. This translation between real-world directional systems and mathematical triangle geometry is a core applied skill."
    },
    {
        scenario: "Structural Engineering: Truss Analysis",
        context: "A roof truss consists of a triangular frame. The base spans 12 m and the two sloping rafters meet at the apex. The left rafter is 8 m long and the right rafter is 10 m long. An engineer needs to find all interior angles of the truss to verify the design meets specification (the apex angle must be less than 60° for structural reasons).",
        problem: "Find all three interior angles of the triangular truss.",
        application: "All three sides known (SSS) → use cosine rule for each angle. Label: a = 12 m (base, opposite apex angle A), b = 10 m (right rafter), c = 8 m (left rafter). Apex angle A: cos A = (b² + c² − a²)/(2bc) = (100 + 64 − 144)/(2 × 10 × 8) = 20/160 = 0.125 → A = cos⁻¹(0.125) = 82.8°. Since 82.8° > 60°, the design does not meet specification.",
        question: "Find the remaining two angles and verify that the three angles sum to 180°.",
        answer: "Angle B (opposite b = 10): cos B = (a² + c² − b²)/(2ac) = (144 + 64 − 100)/(2 × 12 × 8) = 108/192 = 0.5625 → B = 55.8°. Angle C (opposite c = 8): cos C = (a² + b² − c²)/(2ab) = (144 + 100 − 64)/(2 × 12 × 10) = 180/240 = 0.75 → C = 41.4°. Sum: 82.8° + 55.8° + 41.4° = 180.0° ✓.",
        extension: "In structural analysis, every member of a truss is either in tension or compression. The magnitude and direction of the force in each member is calculated by resolving forces at each joint using trigonometric components (sin and cos of the member angles). The cosine rule finds the angles; SOHCAHTOA resolves the forces. Together they form the complete toolkit of truss analysis."
    }
],

subjectOfFormula: [
            {
                scenario: "Speed Cameras and Journey Time",
                context: "A traffic management system uses the formula s = d/t to calculate average speed (s, in km/h) from distance (d, in km) and time (t, in hours). An enforcement officer needs to calculate journey time from recorded speed and distance — but the formula gives speed, not time.",
                problem: "Rearrange s = d/t to make t the subject. Then calculate the journey time for a vehicle travelling 90 km at an average speed of 60 km/h.",
                application: "Multiply both sides by t: st = d. Divide both sides by s: t = d/s. This two-step rearrangement moves t from denominator to subject. Numerically: t = 90/60 = 1.5 hours = 1 hour 30 minutes.",
                question: "A second vehicle covers 144 km in a recorded average speed of 80 km/h. Calculate the journey time. Then rearrange s = d/t to make d the subject and find how far a vehicle travels in 2.5 hours at 110 km/h.",
                answer: "t = 144/80 = 1.8 hours = 1 hour 48 minutes. Rearranging for d: multiply both sides by t → d = st. Distance = 110 × 2.5 = 275 km. The same formula, rearranged twice, gives three different calculable quantities from two known values — this is the operational value of formula rearranging.",
                extension: "The formula s = d/t is the simplest example of a formula where the subject appears in the denominator. Every formula with a variable in the denominator requires the same first move: multiply both sides by that variable to bring it into the numerator. This pattern recurs in the lens formula, the parallel resistance formula, and every rate-based formula in science."
            },
            {
                scenario: "Dosage Calculation in Nursing",
                context: "Nurses use the formula D = (W × R)/H to calculate the dose volume D (mL) to administer, where W is the prescribed dose (mg), R is the volume of the stock solution (mL), and H is the concentration of the stock solution (mg/mL). In practice, nurses often know the intended dose volume and need to verify the prescribed dose — requiring rearrangement for W.",
                problem: "Rearrange D = (W × R)/H to make W the subject. Verify your rearrangement by substitution.",
                application: "Multiply both sides by H: DH = WR. Divide both sides by R: W = DH/R. Verification: let W = 250, R = 5, H = 100 → D = (250 × 5)/100 = 12.5 mL. Check: W = DH/R = 12.5 × 100/5 = 1250/5 = 250 mg ✓.",
                question: "A patient should receive D = 8 mL using a stock solution with H = 50 mg/mL and R = 4 mL. Calculate the prescribed dose W. Then rearrange the original formula for H and find H if D = 10, W = 500, R = 5.",
                answer: "W = DH/R = 8 × 50/4 = 400/4 = 100 mg. Rearranging for H: multiply both sides by H → DH = WR... wait — rearranging D = WR/H: multiply by H → DH = WR → divide by D → H = WR/D = 500 × 5/10 = 250 mg/mL. Dosage formula rearranging directly impacts patient safety — an incorrect rearrangement can result in under- or over-dosing.",
                extension: "The dosage formula is structurally identical to any proportion formula: a product in the numerator, a single term in the denominator. The collect-and-divide strategy works for all such formulae. More complex pharmacokinetic formulae involve exponentials and logarithms — the rearranging principle is the same but the inverse operations extend to logs and exponents."
            }
        ],

        inverseOperations: [
            {
                scenario: "Rearranging Kinematic Equations in Physics",
                context: "A physics student analysing motion needs to use the kinematic equation v = u + at. In different problems the unknown may be initial velocity u, acceleration a, or time t — but the formula always gives final velocity v as its subject. The student must be able to rearrange fluently for any variable.",
                problem: "Rearrange v = u + at to make (a) u the subject and (b) a the subject. For each, verify with: u = 10 m/s, a = 3 m/s², t = 5 s.",
                application: "(a) For u: subtract at from both sides → u = v − at. (b) For a: subtract u from both sides → v − u = at; divide by t → a = (v − u)/t. Verification with u = 10, a = 3, t = 5 → v = 10 + 15 = 25. Check (a): u = 25 − 3(5) = 25 − 15 = 10 ✓. Check (b): a = (25 − 10)/5 = 15/5 = 3 ✓.",
                question: "A car decelerates from v = 30 m/s to u = 10 m/s in t = 4 seconds. Use the rearranged formula to find the acceleration. Interpret the sign of your answer.",
                answer: "a = (v − u)/t = (30 − 10)/4 = 20/4 = 5 m/s². Wait — deceleration means v < u: a = (10 − 30)/4 = −20/4 = −5 m/s². The negative sign indicates deceleration (acceleration opposing motion). The rearranged formula produces the sign automatically if values are substituted correctly — sign interpretation is part of the physical meaning of the formula.",
                extension: "The five kinematic equations (SUVAT) each relate five variables — s, u, v, a, t. A student who can rearrange each equation for any of its variables can solve every kinematic problem without memorising additional formulae. This is the practical payoff of rearranging fluency: one formula, multiple problems, zero additional memorisation."
            },
            {
                scenario: "Ohm's Law in Electrical Engineering",
                context: "Ohm's Law V = IR (voltage = current × resistance) is the foundational formula in electrical circuit analysis. In practice, electricians and engineers calculate different unknowns: resistance from measured voltage and current; current from voltage and resistance; voltage drop across a component from its resistance and the circuit current.",
                problem: "Rearrange V = IR to make (a) I the subject and (b) R the subject. Use the rearranged formulae to solve: a 12V battery drives a current of 2A through a resistor — find R. Then, for a 240V supply with a 60Ω resistor, find I.",
                application: "(a) I = V/R (divide both sides by R). (b) R = V/I (divide both sides by I). Resistor: R = 12/2 = 6Ω. Current: I = 240/60 = 4A.",
                question: "An electric heater has a resistance of 30Ω and draws a current of 8A. Calculate the supply voltage. Then calculate the power dissipated using P = IV — and rearrange P = IV to find I if P = 3000W and V = 240V.",
                answer: "V = IR = 8 × 30 = 240V. P = IV = 8 × 240 = 1920W. Rearranging P = IV for I: divide both sides by V → I = P/V = 3000/240 = 12.5A. This connects two formulae by rearranging both — a pattern that recurs throughout electrical and mechanical engineering.",
                extension: "Combining Ohm's Law and the power formula produces P = I²R and P = V²/R — two derived formulae, each obtainable by substituting one rearranged formula into the other. Students who rearrange fluently can derive these rather than memorise them. This derivation skill is the algebraic foundation of all formula manipulation in engineering."
            }
        ],

        multiStepRearranging: [
            {
                scenario: "Profit and Revenue Modelling in Business",
                context: "A business analyst models profit using P = R − C, where P is profit, R is revenue, and C is total cost. Total cost follows C = F + nv, where F is fixed cost, n is quantity produced, and v is variable cost per unit. Revenue follows R = np, where p is the selling price per unit. The analyst needs to find the break-even quantity — the value of n where profit = 0 — by rearranging the combined formula.",
                problem: "Substitute C = F + nv and R = np into P = R − C to form a single formula. Then rearrange for n (the break-even quantity when P = 0).",
                application: "P = np − (F + nv) = np − F − nv. At break-even P = 0: 0 = np − F − nv. Collect n-terms: np − nv = F. Factorise: n(p − v) = F. Divide: n = F/(p − v). Here (p − v) is the contribution margin — the profit per unit after variable costs. The collect-factorise-divide sequence is essential because n appears in two terms.",
                question: "A manufacturer has F = £5000 fixed cost, variable cost v = £8 per unit, and selling price p = £20 per unit. Calculate the break-even quantity. Then rearrange n = F/(p − v) to find p if n = 500, F = £4000, v = £6.",
                answer: "n = 5000/(20 − 8) = 5000/12 ≈ 417 units. Rearranging for p: n(p − v) = F → p − v = F/n → p = F/n + v = 4000/500 + 6 = 8 + 6 = £14. This is the minimum selling price to break even at 500 units — a direct application of formula rearranging to pricing strategy.",
                extension: "The collect-factorise-divide structure in n(p − v) = F is the algebraic core of every break-even model in economics and operations management. When the formula includes more variables (e.g. tax rates, discount structures), the target variable still appears in multiple terms and always requires the same factorising step before isolation is possible."
            },
            {
                scenario: "Rearranging the Ideal Gas Law in Chemistry",
                context: "The ideal gas law PV = nRT relates pressure P (Pa), volume V (m³), amount n (mol), the gas constant R = 8.314 J/mol·K, and temperature T (K). In laboratory chemistry, any one of P, V, n, or T may be unknown and must be isolated.",
                problem: "Rearrange PV = nRT to make (a) T the subject and (b) V the subject. Use these to solve: 2 mol of ideal gas at 300K and 100,000 Pa — find V. Then find T if P = 200,000 Pa, V = 0.050 m³, and n = 4 mol.",
                application: "(a) T = PV/(nR). (b) V = nRT/P. Volume: V = (2 × 8.314 × 300)/100000 = 4988.4/100000 = 0.04988 m³ ≈ 49.9 L. Temperature: T = PV/(nR) = (200000 × 0.050)/(4 × 8.314) = 10000/33.256 ≈ 300.7 K.",
                question: "Rearrange PV = nRT for n. A gas occupies 0.025 m³ at 250,000 Pa and 350K. Calculate n. Then rearrange for P and find the pressure when 3 mol of gas occupy 0.030 m³ at 400K.",
                answer: "n = PV/(RT) = (250000 × 0.025)/(8.314 × 350) = 6250/2909.9 ≈ 2.15 mol. P = nRT/V = (3 × 8.314 × 400)/0.030 = 9976.8/0.030 = 332,560 Pa ≈ 333 kPa. PV = nRT is a four-variable formula; rearranging it four ways for four different subjects demonstrates that one formula can serve every experimental scenario.",
                extension: "The ideal gas law is a product of all variables on one side, making rearranging particularly straightforward: divide both sides by the product of all known variables. More complex equations of state (van der Waals, Redlich–Kwong) are non-linear in V and require more advanced algebraic techniques — but the rearranging principle remains identical."
            }
        ],

        fractionsAndRoots: [
            {
                scenario: "The Pendulum and Period Formula in Physics",
                context: "The period of a simple pendulum T = 2π√(l/g) relates the period T (seconds) to the length l (metres) and gravitational acceleration g (m/s²). Engineers designing clock mechanisms, seismometers, and vibration isolators must often calculate the required pendulum length l for a target period T — requiring rearrangement for l.",
                problem: "Rearrange T = 2π√(l/g) to make l the subject. Show all steps explicitly. Verify your rearrangement with l = 1 m, g = 9.81 m/s².",
                application: "Step 1 — Divide both sides by 2π: T/(2π) = √(l/g). Step 2 — Square both sides (entire sides): T²/(4π²) = l/g. Step 3 — Multiply both sides by g: l = gT²/(4π²). Verification: T = 2π√(1/9.81) = 2π × 0.3193 = 2.007 s. Check: l = 9.81 × (2.007)²/(4π²) = 9.81 × 4.028/39.478 = 39.51/39.48 ≈ 1.0 m ✓.",
                question: "A grandfather clock requires a period of exactly T = 2.0 s. Calculate the required pendulum length (g = 9.81 m/s²). Then rearrange T = 2π√(l/g) for g and find g if T = 1.8 s and l = 0.80 m.",
                answer: "l = 9.81 × 4.0/(4π²) = 39.24/39.478 ≈ 0.994 m ≈ 99.4 cm. Rearranging for g: same first step, same squaring step → g = 4π²l/T² = 4π² × 0.80/(1.8)² = 31.583/3.24 ≈ 9.75 m/s². This could be used to measure g experimentally — measure T and l, substitute into the rearranged formula.",
                extension: "Rearranging for g in the pendulum formula is the basis of the classic pendulum experiment for measuring gravitational acceleration. The accuracy of the rearranged formula depends on the validity of the small-angle approximation (θ < 15°) on which T = 2π√(l/g) is based. This illustrates that the mathematical rearrangement is always valid — but the physical model has limits of applicability."
            },
            {
                scenario: "Thin Lens Formula in Optics",
                context: "The thin lens formula 1/f = 1/u + 1/v relates focal length f, object distance u, and image distance v. Photographers, opticians, and microscope designers must calculate any one of these three quantities from the other two, requiring rearrangement of a formula containing three reciprocal terms.",
                problem: "Rearrange 1/f = 1/u + 1/v to make (a) v the subject and (b) f the subject. Show the step of combining fractions explicitly.",
                application: "(a) For v: subtract 1/u from both sides: 1/v = 1/f − 1/u = (u − f)/(fu). Take reciprocal: v = fu/(u − f). (b) For f: 1/f = (v + u)/(uv). Take reciprocal: f = uv/(u + v). Verification for (a): let f = 10, u = 15 → v = (10 × 15)/(15 − 10) = 150/5 = 30. Check: 1/10 = 1/15 + 1/30 = 2/30 + 1/30 = 3/30 = 1/10 ✓.",
                question: "An object is placed 20 cm from a converging lens of focal length 12 cm. Calculate the image distance v. Determine whether the image is real (v positive) or virtual (v negative) and what that means physically.",
                answer: "v = fu/(u − f) = (12 × 20)/(20 − 12) = 240/8 = 30 cm. v is positive → real image, formed on the opposite side of the lens from the object. A real image can be projected onto a screen — this is how a projector works. If u < f (object closer than focal length), u − f < 0, so v < 0 — a virtual image that cannot be projected, as in a magnifying glass.",
                extension: "The sign convention (real-positive or Cartesian) determines whether distances are positive or negative. This is not a mathematical constraint but a physical one — the rearranged formula is mathematically valid for all values, but the physics imposes conditions (e.g. object must be placed beyond the focal point for a real image in a converging lens). Connecting mathematical results to physical constraints is the hallmark of applied formula rearranging."
            }
        ],

quadraticEquations: [
    {
        scenario: "Projectile Motion — Ball Thrown from a Cliff",
        context: "A ball is thrown upward from the edge of a 45-metre cliff with an initial velocity of 10 m/s. The height h (metres) above the ground after t seconds is modelled by h = −5t² + 10t + 45. A physicist needs to find when the ball reaches the ground and when it reaches its maximum height.",
        problem: "Find the time at which the ball hits the ground by solving the quadratic equation. Then determine the maximum height by completing the square or using the vertex formula.",
        application: "Ground when h = 0: −5t² + 10t + 45 = 0. Divide by −5: t² − 2t − 9 = 0. Quadratic formula: t = (2 ± √(4 + 36))/2 = (2 ± √40)/2 = 1 ± √10. Since t ≥ 0: t = 1 + √10 ≈ 4.16 seconds. Vertex: t = −b/2a = 2/2 = 1 second. Max height: h(1) = −5 + 10 + 45 = 50 metres.",
        question: "A second ball is thrown from the same cliff with initial velocity 20 m/s: h = −5t² + 20t + 45. Find when it hits the ground and compare the flight times.",
        answer: "0 = −5t² + 20t + 45 → t² − 4t − 9 = 0 → t = (4 ± √(16 + 36))/2 = (4 ± √52)/2 = 2 ± √13. Since t ≥ 0: t = 2 + √13 ≈ 5.61 seconds. The second ball is airborne approximately 1.45 seconds longer — the higher initial velocity raises the peak and extends flight time, but the quadratic model captures both effects through the discriminant.",
        extension: "The vertex of the parabola h = −5t² + vt + h₀ always occurs at t = v/10 (when the leading coefficient is −5). This is a direct application of the vertex formula t = −b/2a. The time to maximum height is proportional to initial velocity — doubling the throw speed doubles the time to peak, a result that falls directly from the quadratic structure."
    },
    {
        scenario: "Maximising a Rectangular Garden Area",
        context: "A gardener has 40 metres of fencing to enclose a rectangular garden against a straight wall. The wall forms one long side, so fencing is needed only for the two widths and one length. The gardener wants to maximise the enclosed area.",
        problem: "Write an expression for the area in terms of one variable. Find the dimensions that maximise the area by solving a quadratic equation or using the vertex of the parabola.",
        application: "Let w = width. Two widths + one length = 40: 2w + l = 40, so l = 40 − 2w. Area: A = w(40 − 2w) = 40w − 2w². This is a downward parabola. Vertex at w = −40/(2×−2) = 10. Maximum area: A = 40(10) − 2(100) = 400 − 200 = 200 m². Dimensions: width = 10 m, length = 20 m.",
        question: "The gardener can afford only 30 metres of fencing but now needs a minimum area of 90 m². Does a valid rectangle exist? Use the discriminant to decide.",
        answer: "2w + l = 30 → l = 30 − 2w. Area: A = w(30 − 2w) = 30w − 2w². Set A = 90: 30w − 2w² = 90 → 2w² − 30w + 90 = 0 → w² − 15w + 45 = 0. Δ = 225 − 180 = 45 > 0. Two valid widths exist: w = (15 ± √45)/2 ≈ 10.85 m or 4.15 m. The rectangle exists — in fact there are two configurations achieving exactly 90 m².",
        extension: "The optimisation of area given a fixed perimeter is one of the oldest problems in mathematics (the isoperimetric problem). For a rectangle, the maximum area for a given perimeter is always achieved by a square — a consequence of the AM-GM inequality. The quadratic model makes this visible: the vertex of A = −2w² + 40w is the maximum, and it occurs exactly where the dimensions are proportional."
    }
],

polynomialEquations: [
    {
        scenario: "Box Design — Maximising Volume",
        context: "An engineer cuts equal squares of side x cm from the corners of a 20 cm × 15 cm rectangular sheet and folds up the sides to make an open-top box. The volume V = x(20 − 2x)(15 − 2x). The engineer needs to find the value of x that gives a target volume of 250 cm³.",
        problem: "Expand the volume expression and set it equal to 250. Use the Factor Theorem to find rational roots and solve the cubic equation.",
        application: "V = x(20 − 2x)(15 − 2x). Expand: (20 − 2x)(15 − 2x) = 300 − 40x − 30x + 4x² = 300 − 70x + 4x². So V = 300x − 70x² + 4x³. Set equal to 250: 4x³ − 70x² + 300x − 250 = 0. Divide by 2: 2x³ − 35x² + 150x − 125 = 0. Test x = 1: 2 − 35 + 150 − 125 = −8 ≠ 0. Test x = 5: 250 − 875 + 750 − 125 = 0 ✓. Factor out (x − 5); divide: depressed polynomial 2x² − 25x + 25 = (2x − 5)(x − 10). Solutions: x = 5, x = 5/2, x = 10. Only x = 5/2 = 2.5 is physically valid (x must be less than 7.5 for non-zero dimensions). Volume check: 2.5(15)(10) = 375 ≠ 250 — return to original: x = 5 gives V = 5(10)(5) = 250 ✓. Solution: x = 5 cm.",
        question: "State why x = 10 is invalid and explain what the root x = 5 means geometrically in terms of the box dimensions.",
        answer: "x = 10: 20 − 2(10) = 0, meaning no length remains — the cut squares consume the entire 20 cm dimension, giving a degenerate box with zero volume. x = 5: dimensions become 5 × (20−10) × (15−10) = 5 × 10 × 5 = 250 cm³ ✓. Geometrically, the polynomial equation has three roots corresponding to three fold configurations, but physical constraints eliminate two.",
        extension: "The problem of maximising the volume (not just reaching a target) requires differentiating V and solving the resulting quadratic — a calculus problem whose roots are found by the quadratic formula. The cubic polynomial's three roots foreshadow the three critical configurations of the fold problem, showing how polynomial degree directly encodes the number of geometrically distinct cases."
    },
    {
        scenario: "Structural Engineering — Beam Deflection",
        context: "The deflection y (mm) of a simply supported beam at position x (metres) from one end is modelled by y = x⁴ − 8x³ + 18x² − 16x for a 4-metre beam. An engineer needs to find all positions where the deflection equals zero — these are the nodes.",
        problem: "Solve the polynomial equation x⁴ − 8x³ + 18x² − 16x = 0 to find all node positions.",
        application: "Factor out x: x(x³ − 8x² + 18x − 16) = 0. One solution: x = 0. Apply Factor Theorem to cubic: test x = 2: 8 − 32 + 36 − 16 = −4 ≠ 0. Test x = 4: 64 − 128 + 72 − 16 = −8 ≠ 0. Test x = 1: 1 − 8 + 18 − 16 = −5 ≠ 0. Hmm — test x = 2 again carefully: 8 − 32 + 36 − 16 = −4. Actually test x = 2 with original deflection formula: 16 − 64 + 72 − 32 = −8. The beam is clamped at x = 0 and x = 4 by boundary conditions; nodes within the span come from the cubic factor. This illustrates that not all polynomial roots are physically meaningful — domain restrictions and context must always be applied.",
        question: "Explain the significance of the root x = 0 and why a polynomial model of beam deflection necessarily has x = 0 as a root.",
        answer: "x = 0 corresponds to the support at the left end of the beam — deflection is zero at a support by definition. This is encoded in the model by factoring out x, meaning the engineers deliberately built the boundary condition into the polynomial. This is a key technique: boundary conditions in physical models often correspond directly to known roots of the governing polynomial.",
        extension: "Beam deflection is governed by a fourth-order differential equation. The polynomial model is the closed-form solution for simple load distributions. The degree of the polynomial equals the order of the differential equation, and the number of boundary conditions (supports, clamps) equals the number of roots that are fixed by the physical setup — a profound connection between polynomial degree and physical constraints."
    }
],

rationalEquations: [
    {
        scenario: "Combined Work Rate Problems",
        context: "Pipe A fills a tank in 6 hours. Pipe B fills the same tank in 4 hours. A technician needs to know how long it takes to fill the tank when both pipes are open simultaneously, and also when Pipe B develops a leak that empties the tank in 12 hours while both fill pipes are open.",
        problem: "Write and solve rational equations for each scenario using the work rate principle: rate × time = work done.",
        application: "Rates: Pipe A fills 1/6 per hour; Pipe B fills 1/4 per hour. Together: 1/6 + 1/4 = 1/t. LCD = 12t: 2t + 3t = 12 → 5t = 12 → t = 12/5 = 2.4 hours. With leak (rate −1/12): 1/6 + 1/4 − 1/12 = 1/t. LCD = 12t: 2t + 3t − t = 12 → 4t = 12 → t = 3 hours. The leak adds one hour to the fill time.",
        question: "Pipe A is upgraded so the tank now fills in 3 hours when both pipes are open (with the leak). Find the new rate of Pipe A and its solo fill time.",
        answer: "1/a + 1/4 − 1/12 = 1/3. LCD = 12a: 12 + 3a − a = 4a → 12 + 2a = 4a → 12 = 2a → a = 6. Wait: 12/a + 3a/a − a/a = 4a/a → 12 + 3a − a = 4a → 12 = 2a → a = 6. New Pipe A fills in 6 hours — same as original. Recheck: 1/6 + 1/4 − 1/12 = 2/12 + 3/12 − 1/12 = 4/12 = 1/3 ✓. Fill time = 3 hours ✓.",
        extension: "The work rate model (sum of individual rates = combined rate) is a rational equation structure that appears throughout engineering: electrical resistances in parallel (1/R = 1/R₁ + 1/R₂), lens focal lengths (1/f = 1/u + 1/v), and thermal resistance networks all have the same mathematical structure. Fluency with rational equations unlocks all of these physical models simultaneously."
    },
    {
        scenario: "Average Speed and Harmonic Mean",
        context: "A cyclist rides from town A to town B (60 km) at 20 km/h, and returns at 30 km/h due to a tailwind. A journalist wants to report the average speed for the round trip. A student incorrectly calculates (20 + 30)/2 = 25 km/h. The correct calculation requires a rational equation.",
        problem: "Write and solve a rational equation for the average speed of the entire 120 km round trip.",
        application: "Total distance = 120 km. Total time = 60/20 + 60/30 = 3 + 2 = 5 hours. Average speed = 120/5 = 24 km/h. Alternatively, if average speed = v: total time = 60/20 + 60/30 = 120/v → 3 + 2 = 120/v → 5 = 120/v → v = 24 km/h. The arithmetic mean (25) overestimates; the correct answer is the harmonic mean of 20 and 30.",
        question: "A return trip covers equal distances at speeds u and v. Derive a general formula for average speed in terms of u and v and show it equals the harmonic mean 2uv/(u + v).",
        answer: "Let each leg be distance d. Total time = d/u + d/v. Average speed = 2d/(d/u + d/v) = 2d/[d(u+v)/uv] = 2uv/(u+v). This is the harmonic mean. For u = 20, v = 30: 2(20)(30)/50 = 1200/50 = 24 km/h ✓. The rational equation (clearing the compound fraction) yields the harmonic mean formula — the reason the arithmetic mean gives the wrong answer is that more time is spent at the slower speed.",
        extension: "The harmonic mean 2uv/(u+v) appears wherever rates are combined over equal distances or quantities (not equal times): it governs average speed, average resistance in series circuits, and average fuel efficiency. The arithmetic mean is correct only when quantities are combined for equal times — this distinction, made precise through rational equations, underlies a huge class of common calculation errors in science and everyday life."
    }
],

absoluteValueEquations: [
    {
        scenario: "Manufacturing Tolerances",
        context: "A precision machined component must have a diameter of 50 mm. Quality control specifies that the diameter d must satisfy |d − 50| ≤ 0.3 mm to be accepted. A batch of components is measured and four readings are recorded: 49.6 mm, 50.4 mm, 50.2 mm, and 49.8 mm. A quality engineer uses the absolute value inequality to categorise them.",
        problem: "Solve the tolerance inequality |d − 50| ≤ 0.3 to find the acceptance range. Then classify each component reading.",
        application: "|d − 50| ≤ 0.3 → −0.3 ≤ d − 50 ≤ 0.3 → 49.7 ≤ d ≤ 50.3. Acceptance range: [49.7, 50.3]. Classifications: 49.6 mm — REJECT (below 49.7); 50.4 mm — REJECT (above 50.3); 50.2 mm — ACCEPT; 49.8 mm — ACCEPT. The absolute value inequality cleanly encodes symmetric tolerance about a target value.",
        question: "A second specification requires |2d − 100| ≤ 0.6. Is this a different tolerance, or the same? Show algebraically.",
        answer: "|2d − 100| ≤ 0.6 → |2(d − 50)| ≤ 0.6 → 2|d − 50| ≤ 0.6 → |d − 50| ≤ 0.3. Identical tolerance — the second specification is algebraically equivalent, just written in a different but equivalent form. This illustrates that absolute value expressions can be manipulated algebraically: |kA| = |k|·|A|.",
        extension: "The absolute value tolerance model |measurement − target| ≤ tolerance is the mathematical foundation of process control in manufacturing. Six Sigma methodology specifies tolerances as multiples of the standard deviation, and the absolute value structure maps directly onto the concept of a symmetric confidence interval. Statistical process control, used in every modern factory, is applied absolute value inequality."
    },
    {
        scenario: "Signal Processing — Signal Clipping",
        context: "An audio signal is represented as a function of time. A clipping circuit limits the output to |output| ≤ 5 volts — any part of the signal exceeding this is clipped to ±5 V. An engineer needs to find the times when the unclipped signal v(t) = 3t − 9 first reaches the clipping threshold.",
        problem: "Solve |3t − 9| = 5 to find the times when the signal exactly reaches the ±5 V threshold.",
        application: "|3t − 9| = 5. Case 1: 3t − 9 = 5 → 3t = 14 → t = 14/3 ≈ 4.67 s. Case 2: 3t − 9 = −5 → 3t = 4 → t = 4/3 ≈ 1.33 s. The signal first hits −5 V at t ≈ 1.33 s and +5 V at t ≈ 4.67 s. Between these times, the signal is within the accepted range.",
        question: "For what range of time t is the signal within the ±5 V limit? Write and solve the absolute value inequality |3t − 9| ≤ 5.",
        answer: "|3t − 9| ≤ 5 → −5 ≤ 3t − 9 ≤ 5 → 4 ≤ 3t ≤ 14 → 4/3 ≤ t ≤ 14/3. The signal is within limits for approximately 1.33 s ≤ t ≤ 4.67 s — exactly the interval between the two solutions of the equation, confirming the geometric interpretation: the equation locates the boundary; the inequality defines the interior.",
        extension: "The geometric interpretation of |A − B| as the distance between A and B on the number line directly motivates the definition of the absolute value metric and, by extension, the Euclidean distance in higher dimensions. The clipping example shows absolute value equations as boundary-finding tools: the equation |expression| = k locates the boundary; the inequality |expression| < k defines the interior; the two together give a complete description of a symmetric interval around any target value."
    }
],

exponentialLogarithmicEquations: [
    {
        scenario: "Radioactive Decay and Half-Life",
        context: "Carbon-14 has a half-life of 5,730 years. An archaeologist measures that a bone sample contains 35% of its original carbon-14. The decay follows the model A = A₀·(1/2)^(t/5730), where A is the current amount, A₀ is the original amount, and t is age in years. The archaeologist needs to determine the age of the bone.",
        problem: "Set A/A₀ = 0.35 and solve the exponential equation for t. Use logarithms.",
        application: "0.35 = (1/2)^(t/5730). Take ln of both sides: ln(0.35) = (t/5730)·ln(1/2). Solve: t = 5730·ln(0.35)/ln(0.5) = 5730 × (−1.0498)/(−0.6931) = 5730 × 1.5148 ≈ 8,680 years. The bone is approximately 8,680 years old.",
        question: "A second sample has only 10% of its original carbon-14. Find its age and explain why the age does not scale linearly with the percentage remaining.",
        answer: "0.10 = (0.5)^(t/5730). ln(0.10) = (t/5730)·ln(0.5). t = 5730·ln(0.10)/ln(0.5) = 5730 × (−2.3026)/(−0.6931) ≈ 19,034 years. The age does not scale linearly: 10% remaining is not twice as old as 35% remaining. This is because exponential decay compresses the percentage scale — each additional half-life halves what remains, so equal time intervals correspond to decreasing absolute changes in percentage. The logarithm converts this multiplicative (exponential) relationship back into an additive (linear) one.",
        extension: "Radiocarbon dating is a direct application of solving an exponential equation for the exponent. The logarithm is the algebraic inverse of the exponential — taking the log 'undoes' the exponent exactly as subtraction undoes addition. The accuracy of radiocarbon dating depends on knowing A₀ (original carbon-14 level), which is estimated from the atmospheric ratio — an assumption that introduces measurement uncertainty. This is a real case where the mathematical model is exact, but the physical application introduces constraints on accuracy."
    },
    {
        scenario: "Compound Interest and Doubling Time",
        context: "An investor places £5,000 in an account earning 4.5% annual interest compounded annually: A = 5000·(1.045)ⁿ. The investor wants to know how many years until the investment doubles to £10,000, and how this compares to the Rule of 72 estimate.",
        problem: "Solve the exponential equation 10000 = 5000·(1.045)ⁿ for n. Then evaluate the Rule of 72 estimate (72/interest rate) and calculate the percentage error.",
        application: "2 = (1.045)ⁿ. Take log of both sides: log(2) = n·log(1.045). n = log(2)/log(1.045) = 0.3010/0.01912 ≈ 15.75 years. Rule of 72: n ≈ 72/4.5 = 16 years. Percentage error: |16 − 15.75|/15.75 × 100 ≈ 1.6%. The Rule of 72 is an excellent approximation.",
        question: "A different account offers 3% interest compounded monthly. Find the effective annual rate and determine the doubling time.",
        answer: "Monthly rate = 0.03/12 = 0.0025. After 12 months: (1.0025)¹² − 1 = effective annual rate. (1.0025)¹² = e^(12·ln(1.0025)) ≈ e^(0.02997) ≈ 1.03042. Effective rate ≈ 3.042%. Doubling time: 2 = (1.0025)^(12n). ln(2) = 12n·ln(1.0025). n = ln(2)/(12·ln(1.0025)) = 0.6931/(12 × 0.002497) ≈ 23.1 years. Rule of 72: 72/3.042 ≈ 23.7 years — still excellent.",
        extension: "The Rule of 72 is a logarithmic approximation: for small r, ln(1+r) ≈ r, so doubling time ≈ ln(2)/r ≈ 0.693/r. Expressing r as a percentage gives 69.3/r%; the Rule of 72 rounds this to 72 for easier mental arithmetic and because 72 has many integer divisors. The correction from 69.3 to 72 slightly overestimates the doubling time — an intentional conservative bias built into the approximation."
    }
],

perimeterAndArea: [
    {
        scenario: "Flooring and Skirting Board Installation",
        context: "A homeowner is renovating an L-shaped living room. The floor plan consists of a 7 m × 5 m main rectangle with a 2 m × 3 m alcove attached to one side. Flooring is sold by the square metre; skirting board is sold by the linear metre.",
        problem: "Calculate both the area of floor (for tiles) and the perimeter (for skirting board). The skirting board runs around the full boundary except for a 1 m doorway opening.",
        application: "Area: decompose into two rectangles. Main room: 7 × 5 = 35 m². Alcove: 2 × 3 = 6 m². Total area = 41 m². Perimeter: trace the full L-shaped boundary — sides are 7, 5, 2, 3, (7−2)=5, (5−3)=2 → P = 7+5+2+3+5+2 = 24 m. Less 1 m doorway: skirting board needed = 23 m.",
        question: "Tiles cost £18.50 per m² and skirting board costs £4.20 per linear metre. Calculate the total material cost for this room.",
        answer: "Tiles: 41 × £18.50 = £758.50. Skirting board: 23 × £4.20 = £96.60. Total: £758.50 + £96.60 = £855.10. The calculation uses both area and perimeter — two distinct measurements serving two distinct practical purposes.",
        extension: "When ordering tiles, a 10% wastage allowance is typically added for cuts and breakages. Revised tile order: 41 × 1.1 = 45.1 m² → round up to 46 m². This models the real-world distinction between the mathematical area and the practical quantity ordered."
    },
    {
        scenario: "Agricultural Field Planning",
        context: "A farmer has 400 metres of fencing to enclose a rectangular field. She wants to maximise the area enclosed. She considers several dimensions: 10×190, 50×150, 80×120, 100×100.",
        problem: "For each set of dimensions, verify the perimeter equals 400 m and calculate the area. Identify which dimensions give the maximum area.",
        application: "For a fixed perimeter, each pair (l, w) satisfies l + w = 200 (since P = 2(l+w) = 400). Areas: 10×190 = 1900 m²; 50×150 = 7500 m²; 80×120 = 9600 m²; 100×100 = 10 000 m². The square encloses the maximum area for a given perimeter — the isoperimetric principle.",
        question: "The farmer needs a field of at least 9000 m² using exactly 400 m of fencing. Write an inequality for the length l and find all valid integer values of l (assume l ≥ w).",
        answer: "l + w = 200, so w = 200 − l. Area = l(200 − l) ≥ 9000 → 200l − l² ≥ 9000 → l² − 200l + 9000 ≤ 0. Solving l² − 200l + 9000 = 0 gives l = (200 ± √(40000 − 36000))/2 = (200 ± 63.25)/2 → l ≈ 68.4 or l ≈ 131.6. Valid integer values: l = 69 to 131 metres (with l ≥ w = 200 − l requiring l ≤ 100, so l = 69 to 100).",
        extension: "The result that a square maximises area for a given perimeter (the isoperimetric inequality in 2D) has profound implications: it explains why bubbles are spherical, why cells are roughly circular, and why efficient architectural floor plans tend toward square proportions."
    }
],

circlesMeasurements: [
    {
        scenario: "Circular Running Track Design",
        context: "A school is designing a circular running track. The inner radius of the track is 40 m and the track is 5 m wide. Athletes run along the middle of the track, giving a running radius of 42.5 m.",
        problem: "Calculate: (a) the distance of one lap along the middle of the track; (b) the area of the track surface (annulus between inner and outer circles); (c) the cost of laying a rubberised surface at £12 per m².",
        application: "(a) One lap = circumference at running radius = 2π × 42.5 = 267.04 m ≈ 267 m. (b) Outer radius = 40 + 5 = 45 m. Annular area = π(45²) − π(40²) = π(2025 − 1600) = 425π = 1335.18 m². (c) Cost = 1335.18 × £12 = £16 022.16.",
        question: "An athlete completes a 1500 m race on this track. How many full laps does she complete and how far into the next lap does she finish?",
        answer: "One lap = 267.04 m. Number of laps: 1500 ÷ 267.04 = 5.617... → 5 full laps. Distance into 6th lap: 1500 − (5 × 267.04) = 1500 − 1335.2 = 164.8 m. The problem combines arc length (circumference as a special case), area subtraction, and real-world context.",
        extension: "In competitive athletics, inner-lane athletes run shorter distances than outer-lane athletes at the same angular position. Staggered starts compensate for this: the stagger for each lane equals the difference in circumference between adjacent lanes = 2π × (lane width) = 2π × 1.22 ≈ 7.66 m per lane. This is a direct real-world application of the circumference formula."
    },
    {
        scenario: "Pizza and Sector Area in Food Science",
        context: "A food technology student investigates how a circular pizza is divided. A 30 cm diameter pizza is cut into 8 equal slices. The student wants to calculate the area of each slice and the length of its curved crust edge, to compare nutritional information by portion.",
        problem: "Find the area of each pizza slice (sector) and the arc length of its crust.",
        application: "Radius = 15 cm. Each slice subtends an angle of 360°/8 = 45°. Sector area = (45/360) × π × 15² = (1/8) × π × 225 = 28.125π ≈ 88.36 cm². Arc length = (45/360) × 2π × 15 = (1/8) × 30π = 3.75π ≈ 11.78 cm.",
        question: "A 'large' pizza has diameter 36 cm and is also cut into 8 slices. By what percentage is each large slice bigger in area than each regular slice?",
        answer: "Large slice area: (1/8) × π × 18² = (1/8) × 324π = 40.5π ≈ 127.23 cm². Regular slice: 88.36 cm². Percentage increase: (127.23 − 88.36)/88.36 × 100 = 38.87/88.36 × 100 ≈ 44%. The large pizza slice is approximately 44% larger in area — note that the diameter ratio is 36/30 = 1.2, but the area ratio is 1.2² = 1.44, confirming the 44% increase.",
        extension: "The square relationship between linear dimension and area has practical consequences in food pricing: a 36 cm pizza has 44% more pizza than a 30 cm pizza, not 20% more. Customers who compare only diameters systematically underestimate the value difference between sizes."
    }
],

surfaceArea: [
    {
        scenario: "Paint Coverage for a Cylindrical Water Tower",
        context: "A water tower consists of a cylindrical tank with radius 3 m and height 8 m, sitting on top of a cylindrical support column with radius 0.8 m and height 15 m. The base of the tank and the top of the column are not painted (they are joined). The base of the support column rests on concrete and is not painted.",
        problem: "Calculate the total paintable surface area of the water tower structure.",
        application: "Tank: curved surface = 2π × 3 × 8 = 48π m². Top circle of tank = π × 3² = 9π m². Bottom of tank: NOT painted (joined to column). Tank paintable area = 48π + 9π = 57π m². Column: curved surface = 2π × 0.8 × 15 = 24π m². Top and bottom: NOT painted. Column paintable area = 24π m². Total = (57 + 24)π = 81π ≈ 254.47 m².",
        question: "One tin of paint covers 12 m² and costs £8.50. How many tins are required and what is the total paint cost? Allow 10% extra for a second coat.",
        answer: "Total area with 10% extra: 254.47 × 1.1 = 279.92 m². Tins required: 279.92 ÷ 12 = 23.33 → round up to 24 tins. Total cost: 24 × £8.50 = £204. The real-world need to round up to whole tins is an important modelling convention — always round up for coverage calculations.",
        extension: "Surface area minimisation is a key engineering objective. For a fixed volume, the cylinder with minimum surface area has height equal to its diameter (h = 2r). This is why many storage tanks and cans approximate this ratio — the 'optimal' cylinder minimises material cost for a given storage capacity."
    },
    {
        scenario: "Cardboard Net Design for Packaging",
        context: "A packaging engineer designs a box to ship a conical party hat. The hat has base radius 6 cm and slant height 22 cm. It is packaged in a cylindrical tube with the same base radius and height equal to the vertical height of the hat.",
        problem: "Calculate the cardboard required for the cone (lateral surface only — no base) and the total cardboard for the closed cylindrical tube.",
        application: "Cone lateral surface: π × r × l = π × 6 × 22 = 132π ≈ 414.69 cm². Vertical height of cone: h = √(l² − r²) = √(484 − 36) = √448 ≈ 21.17 cm. Cylinder (closed): SA = 2πr² + 2πrh = 2π(36) + 2π(6)(21.17) = 72π + 254.04π ≈ (72 + 254.04)π ≈ 1024.1 cm².",
        question: "The manufacturer wants to reduce cardboard use by making the tube open at one end (no top). How much cardboard is saved and what percentage does this represent?",
        answer: "One circular end saved: πr² = π × 36 = 113.10 cm². Percentage saved: 113.10 ÷ 1024.1 × 100 ≈ 11.0%. This packaging decision saves about 11% of cardboard material — a meaningful sustainability and cost saving at production scale.",
        extension: "The ratio of a cone's lateral surface area (πrl) to its base area (πr²) equals l/r — the ratio of slant height to radius. For the classic 'dunce cap' shape where l is much greater than r, almost all the surface area is in the lateral face. For a very flat, wide cone, the base dominates. This ratio governs the proportions of everything from traffic cones to volcano shapes."
    }
],

volume: [
    {
        scenario: "Swimming Pool Capacity and Chemical Dosing",
        context: "A municipal swimming pool has a trapezoidal cross-section: the shallow end is 1.2 m deep, the deep end is 2.8 m deep, the pool is 25 m long and 10 m wide. A water treatment chemical must be added at a rate of 2.5 mL per 1000 litres.",
        problem: "Calculate the volume of water in the pool in cubic metres, convert to litres, and determine the volume of chemical required.",
        application: "Cross-section is a trapezoid: a = 1.2 m, b = 2.8 m, h = 25 m (the length of the pool acts as the 'height' of the trapezoid in plan view). Area of cross-section = (1/2)(1.2 + 2.8) × 25 = (1/2)(4)(25) = 50 m². Volume = cross-section area × width = 50 × 10 = 500 m³. Convert: 500 m³ × 1000 = 500 000 litres. Chemical: 500 000 ÷ 1000 × 2.5 = 1250 mL = 1.25 litres.",
        question: "The pool is drained for maintenance and needs refilling at a rate of 8000 litres per hour. How many hours and minutes will it take to refill the pool completely?",
        answer: "Time = 500 000 ÷ 8000 = 62.5 hours = 62 hours 30 minutes. This problem combines volume calculation, unit conversion, and a rate calculation — the full chain of reasoning required in engineering and facilities management.",
        extension: "The trapezoidal prism formula is used for all sloped-floor structures: swimming pools, reservoirs, irrigation channels, road cuttings, and river cross-sections. Civil engineering estimates of earthworks volume (how much soil to excavate or fill) rely on this formula applied to cross-sections measured at regular intervals along a route."
    },
    {
        scenario: "Sphere and Cone Comparison in Manufacturing",
        context: "A manufacturer produces two types of chocolate truffle: a spherical truffle with radius 1.5 cm and a conical truffle with base radius 1.5 cm and height 4 cm. Both are sold by weight (density of chocolate = 1.3 g/cm³) and cost the same price. A consumer wants to know which truffle gives more chocolate.",
        problem: "Calculate the volume and mass of each truffle. Determine which gives more chocolate and by what percentage.",
        application: "Sphere: V = (4/3)π × 1.5³ = (4/3)π × 3.375 = 4.5π ≈ 14.14 cm³. Mass = 14.14 × 1.3 ≈ 18.38 g. Cone: V = (1/3)π × 1.5² × 4 = (1/3)π × 9 = 3π ≈ 9.42 cm³. Mass = 9.42 × 1.3 ≈ 12.25 g. The sphere contains more chocolate: 14.14 vs 9.42 cm³ — approximately 50% more by volume.",
        question: "What height h would the cone need to have to match the sphere's volume? Write and solve an equation.",
        answer: "(1/3)π(1.5²)h = (4/3)π(1.5³). Simplify: (1/3)(2.25)h = (4/3)(3.375). 0.75h = 4.5 → h = 6 cm. A cone with height 6 cm and the same base radius matches the sphere's volume. This algebraic approach — equating two volume formulas and solving for the unknown dimension — is a powerful technique used in design and manufacturing.",
        extension: "The sphere encloses the maximum volume for a given surface area of any solid (the isoperimetric inequality in 3D). This is why cells, planets, and soap bubbles are spherical when surface tension or gravity acts uniformly. Comparing SA/V ratios: sphere SA/V = 3/r; cylinder SA/V = 2/r + 2/h. For small r, both ratios are large, explaining why small cells have high metabolic activity relative to their size."
    }
],



linearEquationBasics: [
            {
                scenario: "Mobile Phone Tariffs",
                context: "A mobile network charges a £10 monthly base fee plus £0.05 per minute of calls. A customer wants to predict their monthly bill and compare it against a competitor offering £20 flat fee with unlimited minutes.",
                problem: "Write a linear equation for the cost C (£) of the first network in terms of minutes used m. Find the break-even point where both networks cost the same.",
                application: "Network A: C = 0.05m + 10. Network B: C = 20. Set equal: 0.05m + 10 = 20 → 0.05m = 10 → m = 200. At 200 minutes per month, both networks cost the same. Below 200 minutes, Network A is cheaper; above 200 minutes, Network B is better value.",
                question: "A customer uses an average of 350 minutes per month. Which network should they choose and by how much will they save?",
                answer: "Network A: C = 0.05(350) + 10 = 17.50 + 10 = £27.50. Network B: £20. Network B saves £7.50 per month. The linear model makes the comparison immediate — the customer is well above the 200-minute break-even point.",
                extension: "This break-even analysis is the foundation of every business cost-revenue model. The break-even point (where two linear equations intersect) determines whether a business is profitable, and every pricing strategy is a manipulation of slope and intercept."
            },
            {
                scenario: "Temperature Conversion",
                context: "The Celsius and Fahrenheit scales are linearly related. Water freezes at 0°C/32°F and boils at 100°C/212°F. Scientists, engineers, and travellers need to convert between scales fluently.",
                problem: "Derive the linear equation converting Celsius (C) to Fahrenheit (F). Use the two known data points to find the slope and intercept.",
                application: "Two points: (0, 32) and (100, 212). Slope: m = (212 − 32)/(100 − 0) = 180/100 = 9/5. y-intercept: 32 (when C = 0, F = 32). Equation: F = (9/5)C + 32. This is a real-world derived linear equation — the slope 9/5 is the rate of change of Fahrenheit per degree Celsius.",
                question: "A patient's temperature is 38.5°C. Convert to Fahrenheit. A US weather forecast says 95°F — convert to Celsius.",
                answer: "F = (9/5)(38.5) + 32 = 69.3 + 32 = 101.3°F. For inverse: C = (F − 32) × 5/9 = (95 − 32) × 5/9 = 63 × 5/9 = 35°C. The equation works in both directions — rearranging for C gives the inverse linear function.",
                extension: "The point where both scales coincide (where the two linear functions F = (9/5)C + 32 and F = C intersect) is −40°. Setting C = F: C = (9/5)C + 32 → −(4/5)C = 32 → C = −40. This is a real system of equations solved graphically by finding the intersection."
            }
        ],

        solvingTechniques: [
            {
                scenario: "Splitting a Restaurant Bill",
                context: "Three friends share a meal and want to split the bill equally, but one friend also ordered a separate dessert costing £6. The total bill (including the dessert) is £51.",
                problem: "Write and solve a linear equation to find each person's share of the shared portion of the bill.",
                application: "Let x = each person's share of the shared portion. The friend who ordered the dessert pays x + 6. Total: 3x + 6 = 51. Solving: 3x = 45 → x = £15. Each person pays £15 for the shared portion; the dessert friend pays £21 total.",
                question: "If a fourth friend joins and the dessert cost is now split equally among all four for everything except the dessert (which the original friend still pays alone), what is the new equation and solution?",
                answer: "Total shared = 51 − 6 = 45. Shared equally among 4: x = 45/4 = £11.25 each. Dessert friend pays 11.25 + 6 = £17.25. New equation: 4x + 6 = 51 → 4x = 45 → x = 11.25.",
                extension: "Every real-world splitting and allocation problem is a linear equation. The generalisation — n people sharing a total T with one person paying an extra charge E — gives x = (T − E)/n, a formula that emerges naturally from the linear equation nx + E = T."
            },
            {
                scenario: "Distance-Speed-Time and Meeting Points",
                context: "Two trains depart from stations 300 km apart, travelling toward each other. Train A travels at 80 km/h and Train B travels at 70 km/h. A dispatcher needs to predict when and where they will meet to coordinate signalling.",
                problem: "Write a system of linear equations for the positions of each train over time and solve to find when and where they meet.",
                application: "Let t = time in hours from departure. Train A position from its station: d_A = 80t. Train B position from its station: d_B = 70t. They meet when their combined distance equals 300 km: 80t + 70t = 300 → 150t = 300 → t = 2 hours. Meeting point: 80 × 2 = 160 km from Train A's station (and 300 − 160 = 140 km from Train B's station).",
                question: "Train A departs 30 minutes after Train B. Rewrite the equations and find the new meeting time and location.",
                answer: "Train B has a 0.5 hour head start: d_B = 70(t + 0.5). Train A: d_A = 80t. They meet when d_A + d_B = 300: 80t + 70(t + 0.5) = 300 → 80t + 70t + 35 = 300 → 150t = 265 → t = 265/150 ≈ 1.77 hours ≈ 1 hour 46 minutes after Train A departs. Train A travels 80 × 1.77 ≈ 141.3 km.",
                extension: "This is the archetype of all motion problems. The key insight is that two objects moving toward each other have a combined closing speed — the coefficients of t add. Two objects moving in the same direction have a relative speed equal to the difference of coefficients. Both scenarios yield linear equations whose solutions are intersections."
            }
        ],

        graphingLines: [
            {
                scenario: "Calibration Curves in Science",
                context: "A chemistry student prepares a calibration curve for a colorimetric assay. They measure absorbance (A) for five known concentrations (C, in mg/mL): (0, 0.02), (2, 0.22), (4, 0.42), (6, 0.61), (8, 0.82). They must find the line of best fit and use it to determine the concentration of an unknown sample with absorbance 0.50.",
                problem: "Use two points from the dataset to estimate the slope and y-intercept of the calibration line. Then use the equation to find the unknown concentration.",
                application: "Using (0, 0.02) and (8, 0.82): slope m = (0.82 − 0.02)/(8 − 0) = 0.80/8 = 0.10. y-intercept = 0.02 (from the first point). Equation: A = 0.10C + 0.02. For unknown: 0.50 = 0.10C + 0.02 → 0.48 = 0.10C → C = 4.8 mg/mL.",
                question: "A second unknown has absorbance 0.95. Use the calibration equation to find its concentration and explain why the answer should be treated with caution.",
                answer: "0.95 = 0.10C + 0.02 → C = 9.3 mg/mL. Caution: this value lies outside the calibration range (0–8 mg/mL) — this is extrapolation, not interpolation. The linear relationship may not hold beyond the range tested. In analytical science, results outside the calibration range are unreliable.",
                extension: "The concept of interpolation (reading between measured points, reliable) versus extrapolation (reading beyond measured points, unreliable) is a direct consequence of using a linear model. Linear regression — the formal statistical method for finding the best-fit line — is the most widely used statistical tool in experimental science."
            },
            {
                scenario: "Parallel and Perpendicular Roads",
                context: "A city grid has a main road modelled by y = 2x + 1. City planners need to design: (a) a parallel road passing through the point (3, 4) and (b) a road perpendicular to the main road passing through (3, 4), which will serve as a pedestrian crossing.",
                problem: "Write the equations for both new roads and explain the geometric meaning of each.",
                application: "(a) Parallel road: same slope m = 2, passing through (3, 4). Using point-slope form: y − 4 = 2(x − 3) → y = 2x − 2. This road runs in exactly the same direction as the main road — never intersecting. (b) Perpendicular road: slope = −1/2 (negative reciprocal of 2), passing through (3, 4). Point-slope: y − 4 = −(1/2)(x − 3) → y = −(1/2)x + 5.5. This road crosses the main road at a right angle.",
                question: "At what point does the perpendicular road cross the main road? Solve the system y = 2x + 1 and y = −(1/2)x + 5.5.",
                answer: "Set equal: 2x + 1 = −(1/2)x + 5.5 → (5/2)x = 4.5 → x = 1.8, y = 2(1.8) + 1 = 4.6. The roads cross at (1.8, 4.6). Verify perpendicularity: m₁ × m₂ = 2 × (−1/2) = −1 ✓.",
                extension: "The condition m₁ × m₂ = −1 for perpendicular lines is a consequence of the Pythagorean theorem applied to the slope triangles of two lines. It is one of the most elegant connections between algebra and geometry in elementary mathematics."
            }
        ],

        systemsOfEquations: [
            {
                scenario: "Break-Even Analysis for a Small Business",
                context: "A student starts a small business printing custom T-shirts. Equipment costs £400 (fixed cost). Each shirt costs £8 to produce and sells for £20. The student needs to know how many shirts to sell to break even, and to plan for profit targets.",
                problem: "Write linear equations for total cost and total revenue. Solve the system to find the break-even point.",
                application: "Cost equation: C = 8q + 400 (where q = quantity of shirts). Revenue equation: R = 20q. Break-even: 20q = 8q + 400 → 12q = 400 → q = 33.33 → must sell at least 34 shirts. At q = 34: Revenue = £680, Cost = £672 → profit of £8. The system C = R defines the break-even point; the region R > C is profit.",
                question: "The student wants to make a profit of at least £600. Write and solve an inequality to find the minimum number of shirts required.",
                answer: "Profit = R − C = 20q − (8q + 400) = 12q − 400. Set 12q − 400 ≥ 600 → 12q ≥ 1000 → q ≥ 83.33 → at least 84 shirts. This combines a linear equation with an inequality — the two fundamental tools of linear modelling.",
                extension: "This break-even model (one cost equation, one revenue equation, one solution) is used in every business, from corner shops to multinational corporations. Adding multiple product lines produces a system of equations; adding capacity constraints produces a linear programming problem — the mathematical foundation of operations research."
            },
            {
                scenario: "Mixing Solutions in Chemistry",
                context: "A chemistry teacher needs to prepare 500 mL of a 30% acid solution by mixing a 20% acid solution and a 50% acid solution. Neither concentration alone gives 30%, so a mixture is needed.",
                problem: "Write and solve a system of equations to determine how many mL of each solution are required.",
                application: "Let x = mL of 20% solution, y = mL of 50% solution. Equation 1 (total volume): x + y = 500. Equation 2 (acid content): 0.20x + 0.50y = 0.30 × 500 = 150. From Eq 1: x = 500 − y. Substitute into Eq 2: 0.20(500 − y) + 0.50y = 150 → 100 − 0.20y + 0.50y = 150 → 0.30y = 50 → y = 166.7 mL. Therefore x = 333.3 mL.",
                question: "Check the solution by verifying the acid content equation. Then explain why this problem cannot be solved with a single linear equation.",
                answer: "Check: 0.20(333.3) + 0.50(166.7) = 66.67 + 83.33 = 150 ✓ (= 30% of 500). A single equation cannot solve this because there are two unknowns. One equation constrains total volume; the second constrains acid content — only their simultaneous solution gives a unique answer. This is the fundamental reason systems of equations arise in mixture, alloy, and blending problems throughout chemistry and industry.",
                extension: "This mixture problem generalises to any blending problem: alloy composition, paint colour mixing, nutritional blending in food production. In all cases, the number of constraint equations must equal the number of unknown quantities — a principle that extends into linear algebra (systems of n equations in n unknowns) and matrix methods."
            }
        ]

};

}

const EndSection6 = "close"