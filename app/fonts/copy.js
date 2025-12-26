import { EnhancedLinearMathematicalWorkbook } from './linearworkbook.js';
import { EnhancedQuadraticMathematicalWorkbook } from './quadraticworkbook.js';
import { EnhancedSimultaneousEquationsWorkbook } from './SimultaneousWorkbook.js';
import { EnhancedPolynomialMathematicalWorkbook } from './polynomialworkbook.js'
import { EnhancedTriangleMathematicalWorkbook } from './TriangleWorkbook.js';
import { EnhancedCircleGeometryWorkbook } from './CircleWorkbook.js';
import { EnhancedQuadrilateralsMathematicalWorkbook } from './QuadrilateralsWorkbook.js';
import { EnhancedAnglesMathematicalWorkbook } from './AnglesWorkbook.js';
import { EnhancedSimilarityCongruenceWorkbook } from './SimilarityCongruenceWorkbook.js';
import * as docx from 'docx';
import fs from 'fs';
import path from 'path';


// ============== UTILITY FUNCTION ==============

// Generate all workbook sections for a problem
function generateProblemSections(workbookInstance) {
    const workbook = workbookInstance.currentWorkbook;
    if (!workbook) {
        console.error('No workbook generated');
        return [];
    }

    const sections = [];

    // Process each section
    workbook.sections.forEach((section, sectionIndex) => {
        // Section title
        sections.push(
            new docx.Paragraph({
                text: section.title,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 }
            })
        );

        // Section content
        if (section.data && Array.isArray(section.data)) {
            section.data.forEach(row => {
                if (Array.isArray(row)) {
                    // Handle table-like data
                    if (row.length === 2 && row[0] && row[1]) {
                        // Key-value pair
                        sections.push(
                            new docx.Paragraph({
                                children: [
                                    new docx.TextRun({
                                        text: `${row[0]}: `,
                                        bold: true
                                    }),
                                    new docx.TextRun({
                                        text: String(row[1])
                                    })
                                ],
                                spacing: { after: 100 }
                            })
                        );
                    } else if (row[0] === '' && row[1] === '') {
                        // Spacing row
                        sections.push(
                            new docx.Paragraph({
                                text: '',
                                spacing: { after: 200 }
                            })
                        );
                    } else if (row.length > 2) {
                        // Multi-column row (like verification tables)
                        sections.push(
                            new docx.Paragraph({
                                text: row.join(' | '),
                                spacing: { after: 100 }
                            })
                        );
                    }
                }
            });
        }

        // Add extra spacing after section
        sections.push(
            new docx.Paragraph({
                text: '',
                spacing: { after: 300 }
            })
        );
    });

    return sections;
}


// ============== TRIANGLE - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTriangleProblems() {
    const relatedProblems = [];

    // Problem 1: Basic Pythagorean Theorem
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Pythagorean Theorem - Find Hypotenuse',
        problem: 'A right triangle has legs of length 3 and 4. Find the hypotenuse.',
        parameters: { a: 3, b: 4, findSide: 'c' },
        type: 'pythagorean',
        context: { difficulty: 'beginner', topic: 'Pythagorean Theorem' },
        subparts: [
            'Given: Right triangle with legs a = 3 and b = 4',
            'Find: Hypotenuse c',
            'Formula: c² = a² + b²',
            'c² = 3² + 4²',
            'c² = 9 + 16 = 25',
            'c = √25 = 5',
            'The hypotenuse is 5 units'
        ],
        helper: 'Square the legs, add them, then take the square root',
        solution: 'c = 5',
        realWorldContext: 'Finding diagonal distances, construction measurements'
    });

    // Problem 2: Pythagorean - Find Leg
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Pythagorean Theorem - Find Missing Leg',
        problem: 'A right triangle has hypotenuse 13 and one leg 5. Find the other leg.',
        parameters: { b: 5, c: 13, findSide: 'a' },
        type: 'pythagorean',
        context: { difficulty: 'beginner', topic: 'Pythagorean Theorem' },
        subparts: [
            'Given: Hypotenuse c = 13, leg b = 5',
            'Find: Leg a',
            'Formula: a² = c² - b²',
            'a² = 13² - 5²',
            'a² = 169 - 25 = 144',
            'a = √144 = 12',
            'The missing leg is 12 units'
        ],
        helper: 'Subtract the known leg squared from hypotenuse squared',
        solution: 'a = 12',
        realWorldContext: 'Finding unknown dimensions in construction'
    });

    // Problem 3: Triangle Area - Base and Height
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Triangle Area from Base and Height',
        problem: 'Find the area of a triangle with base 8 cm and height 5 cm.',
        parameters: { base: 8, height: 5, findWhat: 'area' },
        type: 'triangle_area_base_height',
        context: { difficulty: 'beginner', topic: 'Triangle Area' },
        subparts: [
            'Given: base = 8 cm, height = 5 cm',
            'Formula: A = (1/2) × base × height',
            'A = (1/2) × 8 × 5',
            'A = (1/2) × 40',
            'A = 20 square cm',
            'The area is 20 cm²'
        ],
        helper: 'Multiply base by height, then divide by 2',
        solution: 'Area = 20 cm²',
        realWorldContext: 'Calculating material needed for triangular surfaces'
    });

    // Problem 4: Heron's Formula
    relatedProblems.push({
        difficulty: 'harder',
        scenario: "Triangle Area - Heron's Formula",
        problem: 'Find the area of a triangle with sides 5, 6, and 7.',
        parameters: { a: 5, b: 6, c: 7 },
        type: 'triangle_area_herons',
        context: { difficulty: 'intermediate', topic: "Heron's Formula" },
        subparts: [
            'Given: sides a = 5, b = 6, c = 7',
            'Step 1: Calculate semi-perimeter',
            's = (a + b + c)/2 = (5 + 6 + 7)/2 = 9',
            'Step 2: Apply Heron\'s formula',
            'A = √[s(s-a)(s-b)(s-c)]',
            'A = √[9(9-5)(9-6)(9-7)]',
            'A = √[9 × 4 × 3 × 2]',
            'A = √216 ≈ 14.70 square units'
        ],
        helper: 'Calculate semi-perimeter first, then apply formula',
        solution: 'Area ≈ 14.70 square units',
        realWorldContext: 'Finding area when only sides are known'
    });

    // Problem 5: Triangle Angles
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Find Missing Angle',
        problem: 'Two angles of a triangle measure 65° and 48°. Find the third angle.',
        parameters: { angleA: 65, angleB: 48, findAngle: 'C' },
        type: 'triangle_angles',
        context: { difficulty: 'beginner', topic: 'Triangle Angle Sum' },
        subparts: [
            'Given: ∠A = 65°, ∠B = 48°',
            'Find: ∠C',
            'Angle sum property: ∠A + ∠B + ∠C = 180°',
            '65° + 48° + ∠C = 180°',
            '113° + ∠C = 180°',
            '∠C = 180° - 113°',
            '∠C = 67°'
        ],
        helper: 'All triangle angles sum to 180°',
        solution: '∠C = 67°',
        realWorldContext: 'Navigation, engineering design, architecture'
    });

    // Problem 6: Law of Sines
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Law of Sines - Find Side',
        problem: 'In triangle ABC, angle A = 30°, angle B = 45°, and side b = 10. Find side a.',
        parameters: { angleA: 30, angleB: 45, b: 10, findWhat: 'side' },
        type: 'law_of_sines',
        context: { difficulty: 'intermediate', topic: 'Law of Sines' },
        subparts: [
            'Given: ∠A = 30°, ∠B = 45°, side b = 10',
            'Find: side a',
            'Law of Sines: a/sin(A) = b/sin(B)',
            'a/sin(30°) = 10/sin(45°)',
            'a/0.5 = 10/0.7071',
            'a = 10 × 0.5/0.7071',
            'a ≈ 7.07 units'
        ],
        helper: 'Match each side with its opposite angle',
        solution: 'a ≈ 7.07 units',
        realWorldContext: 'Surveying, navigation calculations'
    });

    // Problem 7: Law of Cosines
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Law of Cosines - Find Side (SAS)',
        problem: 'A triangle has sides a = 7, b = 8, and included angle C = 60°. Find side c.',
        parameters: { a: 7, b: 8, angleC: 60, findWhat: 'side' },
        type: 'law_of_cosines',
        context: { difficulty: 'intermediate', topic: 'Law of Cosines' },
        subparts: [
            'Given: a = 7, b = 8, ∠C = 60°',
            'Find: side c',
            'Law of Cosines: c² = a² + b² - 2ab cos(C)',
            'c² = 7² + 8² - 2(7)(8)cos(60°)',
            'c² = 49 + 64 - 112(0.5)',
            'c² = 113 - 56 = 57',
            'c = √57 ≈ 7.55 units'
        ],
        helper: 'Use when you have two sides and the included angle',
        solution: 'c ≈ 7.55 units',
        realWorldContext: 'Engineering, physics force calculations'
    });

    // Problem 8: Triangle Inequality
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Triangle Inequality Theorem',
        problem: 'Can sides of length 5, 7, and 13 form a valid triangle?',
        parameters: { a: 5, b: 7, c: 13 },
        type: 'triangle_inequality',
        context: { difficulty: 'beginner', topic: 'Triangle Inequality' },
        subparts: [
            'Given: sides 5, 7, 13',
            'Check: sum of any two sides > third side',
            'Test 1: 5 + 7 = 12, is 12 > 13? NO',
            'Test 2: 5 + 13 = 18, is 18 > 7? YES',
            'Test 3: 7 + 13 = 20, is 20 > 5? YES',
            'Since 5 + 7 is NOT greater than 13,',
            'these sides CANNOT form a triangle'
        ],
        helper: 'Sum of any two sides must exceed the third',
        solution: 'No valid triangle',
        realWorldContext: 'Validating measurements before construction'
    });

    // Problem 9: 45-45-90 Triangle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: '45-45-90 Special Right Triangle',
        problem: 'In a 45-45-90 triangle, if each leg is 6, find the hypotenuse.',
        parameters: { type: '45-45-90', knownSide: 'leg', knownValue: 6 },
        type: 'special_right_triangles',
        context: { difficulty: 'beginner', topic: 'Special Right Triangles' },
        subparts: [
            'Given: 45-45-90 triangle with legs = 6',
            'Ratio: 1 : 1 : √2',
            'If legs = 6, then hypotenuse = 6√2',
            'Hypotenuse = 6 × 1.414',
            'Hypotenuse ≈ 8.49 units',
            'Exact answer: 6√2'
        ],
        helper: 'In 45-45-90, hypotenuse = leg × √2',
        solution: 'Hypotenuse = 6√2 ≈ 8.49',
        realWorldContext: 'Diagonal measurements in squares'
    });

    // Problem 10: 30-60-90 Triangle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: '30-60-90 Special Right Triangle',
        problem: 'In a 30-60-90 triangle, if the short leg is 5, find the other sides.',
        parameters: { type: '30-60-90', knownSide: 'short', knownValue: 5 },
        type: 'special_right_triangles',
        context: { difficulty: 'beginner', topic: 'Special Right Triangles' },
        subparts: [
            'Given: 30-60-90 triangle, short leg = 5',
            'Ratio: 1 : √3 : 2',
            'Short leg = 5',
            'Long leg = 5√3 ≈ 8.66',
            'Hypotenuse = 2 × 5 = 10',
            'All sides: 5, 5√3, 10'
        ],
        helper: 'Multiply short leg by √3 for long leg, by 2 for hypotenuse',
        solution: 'Long leg = 5√3, Hypotenuse = 10',
        realWorldContext: 'Common in engineering and construction'
    });

    // Problem 11: SAS Area Formula
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Triangle Area with SAS',
        problem: 'Find area of triangle with sides a = 10, b = 12, and included angle C = 45°.',
        parameters: { a: 10, b: 12, angleC: 45 },
        type: 'triangle_area_sas',
        context: { difficulty: 'intermediate', topic: 'Triangle Area - SAS' },
        subparts: [
            'Given: a = 10, b = 12, ∠C = 45°',
            'Formula: A = (1/2)ab sin(C)',
            'A = (1/2)(10)(12)sin(45°)',
            'A = 60 × sin(45°)',
            'A = 60 × 0.7071',
            'A ≈ 42.43 square units'
        ],
        helper: 'Use when you have two sides and included angle',
        solution: 'Area ≈ 42.43 square units',
        realWorldContext: 'Land surveying and area calculations'
    });

    // Problem 12: Coordinate Triangle
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Triangle in Coordinate Geometry',
        problem: 'Find perimeter and area of triangle with vertices A(0,0), B(6,0), C(3,4).',
        parameters: { 
            vertices: [
                { x: 0, y: 0 },
                { x: 6, y: 0 },
                { x: 3, y: 4 }
            ],
            findWhat: 'all'
        },
        type: 'coordinate_triangles',
        context: { difficulty: 'intermediate', topic: 'Coordinate Geometry Triangles' },
        subparts: [
            'Given: A(0,0), B(6,0), C(3,4)',
            'Side AB: √[(6-0)² + (0-0)²] = 6',
            'Side BC: √[(3-6)² + (4-0)²] = √(9+16) = 5',
            'Side AC: √[(3-0)² + (4-0)²] = √(9+16) = 5',
            'Perimeter = 6 + 5 + 5 = 16 units',
            'Area = (1/2)|0(0-4) + 6(4-0) + 3(0-0)|',
            'Area = (1/2)|0 + 24 + 0| = 12 square units'
        ],
        helper: 'Use distance formula for sides, coordinate formula for area',
        solution: 'Perimeter = 16, Area = 12',
        realWorldContext: 'GPS calculations, computer graphics'
    });

    return relatedProblems;
}

// ============== CIRCLE GEOMETRY - RELATED PROBLEMS GENERATOR ==============

function generateRelatedCircleProblems() {
    const relatedProblems = [];

    // Problem 1: Standard Form Circle
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Standard Form Circle',
        problem: 'Find center and radius: (x - 2)² + (y + 3)² = 25',
        parameters: { h: 2, k: -3, rSquared: 25 },
        type: 'standard_form',
        context: { difficulty: 'beginner', topic: 'Circle Equations - Standard Form' },
        subparts: [
            'Given: (x - 2)² + (y + 3)² = 25',
            'Standard form: (x - h)² + (y - k)² = r²',
            'Compare: h = 2, k = -3, r² = 25',
            'Center: (2, -3)',
            'Radius: r = √25 = 5',
            'Check: Point (7, -3) should be on circle',
            'Distance from center: √[(7-2)² + (-3-(-3))²] = √25 = 5 ✓'
        ],
        helper: 'In (x - h)², center x-coordinate is +h, not -h',
        solution: 'Center: (2, -3), Radius: 5',
        realWorldContext: 'Finding location and size of circular regions'
    });

    // Problem 2: General Form to Standard Form
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'General Form Conversion',
        problem: 'Convert to standard form: x² + y² - 6x + 4y - 12 = 0',
        parameters: { D: -6, E: 4, F: -12 },
        type: 'general_form',
        context: { difficulty: 'intermediate', topic: 'Converting Circle Forms' },
        subparts: [
            'Given: x² + y² - 6x + 4y - 12 = 0',
            'Group: (x² - 6x) + (y² + 4y) = 12',
            'Complete square for x: (x² - 6x + 9) = (x - 3)²',
            'Complete square for y: (y² + 4y + 4) = (y + 2)²',
            'Add 9 + 4 to both sides:',
            '(x - 3)² + (y + 2)² = 12 + 9 + 4 = 25',
            'Center: (3, -2)',
            'Radius: r = √25 = 5'
        ],
        helper: 'Complete the square for both x and y',
        solution: 'Center: (3, -2), Radius: 5',
        realWorldContext: 'Converting between equation forms'
    });

    // Problem 3: Area and Circumference
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Circle Measurements',
        problem: 'Find area and circumference of circle with radius 7',
        parameters: { radius: 7 },
        type: 'area_circumference',
        context: { difficulty: 'beginner', topic: 'Circle Area and Circumference' },
        subparts: [
            'Given: radius r = 7',
            'Circumference: C = 2πr',
            'C = 2π(7) = 14π ≈ 43.98',
            'Area: A = πr²',
            'A = π(7)² = 49π ≈ 153.94',
            'Diameter: d = 2r = 14'
        ],
        helper: 'Remember: C = 2πr and A = πr²',
        solution: 'Area: 49π, Circumference: 14π',
        realWorldContext: 'Calculating circular measurements'
    });

    // Problem 4: Arc Length
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Arc Length Calculation',
        problem: 'Find arc length: radius = 10, central angle = 60°',
        parameters: { radius: 10, angle: 60, angleUnit: 'degrees' },
        type: 'arc_length',
        context: { difficulty: 'intermediate', topic: 'Arc Length' },
        subparts: [
            'Given: r = 10, θ = 60°',
            'Arc length formula: L = (θ/360°) × 2πr',
            'L = (60/360) × 2π(10)',
            'L = (1/6) × 20π',
            'L = (20π/6) = (10π/3) ≈ 10.47',
            'Alternative (radians): θ = π/3, L = θr = (π/3)(10) = 10π/3'
        ],
        helper: 'Arc is a fraction of the full circumference',
        solution: 'Arc length: 10π/3 ≈ 10.47',
        realWorldContext: 'Measuring curved distances'
    });

    // Problem 5: Sector Area
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sector Area Calculation',
        problem: 'Find sector area: radius = 8, central angle = 90°',
        parameters: { radius: 8, angle: 90, angleUnit: 'degrees' },
        type: 'sector_area',
        context: { difficulty: 'intermediate', topic: 'Sector Area' },
        subparts: [
            'Given: r = 8, θ = 90°',
            'Sector area formula: A = (θ/360°) × πr²',
            'A = (90/360) × π(8)²',
            'A = (1/4) × 64π',
            'A = 16π ≈ 50.27',
            'This is 1/4 of the full circle area'
        ],
        helper: 'Sector is a "slice" of the circle',
        solution: 'Sector area: 16π ≈ 50.27',
        realWorldContext: 'Pizza slice, pie chart calculations'
    });

    // Problem 6: Chord Length
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Chord Length Problem',
        problem: 'Find chord length: radius = 13, distance from center = 5',
        parameters: { radius: 13, distance: 5 },
        type: 'chord_length',
        context: { difficulty: 'intermediate', topic: 'Chord Properties' },
        subparts: [
            'Given: r = 13, d = 5 (perpendicular distance)',
            'Chord length formula: L = 2√(r² - d²)',
            'L = 2√(13² - 5²)',
            'L = 2√(169 - 25)',
            'L = 2√144',
            'L = 2(12) = 24',
            'Check using Pythagorean theorem: 5² + 12² = 13² ✓'
        ],
        helper: 'Use Pythagorean theorem with half-chord',
        solution: 'Chord length: 24',
        realWorldContext: 'Bridge arch, tunnel design'
    });

    // Problem 7: Tangent Line
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Tangent Line Equation',
        problem: 'Find tangent to circle x² + y² = 25 at point (3, 4)',
        parameters: { h: 0, k: 0, r: 5, pointX: 3, pointY: 4 },
        type: 'tangent_line',
        context: { difficulty: 'intermediate', topic: 'Tangent Lines' },
        subparts: [
            'Given: Circle x² + y² = 25, Point (3, 4)',
            'Center: (0, 0), Radius: 5',
            'Check point on circle: 3² + 4² = 9 + 16 = 25 ✓',
            'Radius slope: m_r = (4-0)/(3-0) = 4/3',
            'Tangent perpendicular to radius',
            'Tangent slope: m_t = -1/(4/3) = -3/4',
            'Tangent equation: y - 4 = (-3/4)(x - 3)',
            'Simplified: 3x + 4y = 25'
        ],
        helper: 'Tangent is perpendicular to radius at contact point',
        solution: 'Tangent: 3x + 4y = 25',
        realWorldContext: 'Wheel touching ground, optical systems'
    });

    // Problem 8: Circle Intersection
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Circle Intersection',
        problem: 'Find intersection: x² + y² = 25 and (x-3)² + y² = 16',
        parameters: { h1: 0, k1: 0, r1: 5, h2: 3, k2: 0, r2: 4 },
        type: 'circle_intersection',
        context: { difficulty: 'advanced', topic: 'Circle Intersections' },
        subparts: [
            'Circle 1: x² + y² = 25 (center (0,0), radius 5)',
            'Circle 2: (x-3)² + y² = 16 (center (3,0), radius 4)',
            'Distance between centers: d = 3',
            'Since |r₁ - r₂| < d < r₁ + r₂',
            '(5-4) < 3 < (5+4) → 1 < 3 < 9',
            'Two intersection points exist',
            'Subtract equations to find x:',
            'x² - (x-3)² = 25 - 16',
            'x = 2.5',
            'Solve for y: y = ±√18.75 ≈ ±4.33'
        ],
        helper: 'Compare distance with sum and difference of radii',
        solution: 'Two intersection points at x = 2.5',
        realWorldContext: 'Overlapping coverage areas, GPS'
    });

    // Problem 9: Circle Through Three Points
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Circle Through Three Points',
        problem: 'Find circle through points (0,0), (4,0), (0,3)',
        parameters: { x1: 0, y1: 0, x2: 4, y2: 0, x3: 0, y3: 3 },
        type: 'circle_three_points',
        context: { difficulty: 'advanced', topic: 'Circle Determination' },
        subparts: [
            'Given three points: (0,0), (4,0), (0,3)',
            'Check not collinear (they form a triangle)',
            'Center (h,k) equidistant from all points',
            'From (0,0): h² + k² = r²',
            'From (4,0): (h-4)² + k² = r²',
            'From (0,3): h² + (k-3)² = r²',
            'Solving: h = 2, k = 1.5',
            'r² = 2² + 1.5² = 6.25',
            'r = 2.5',
            'Equation: (x-2)² + (y-1.5)² = 6.25'
        ],
        helper: 'Use equal distances from center to each point',
        solution: 'Center: (2, 1.5), Radius: 2.5',
        realWorldContext: 'Circumcircle of triangle, curve fitting'
    });

    // Problem 10: Inscribed Angle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Inscribed Angle Theorem',
        problem: 'Central angle = 80°, find inscribed angle',
        parameters: { centralAngle: 80, angleUnit: 'degrees' },
        type: 'inscribed_angle',
        context: { difficulty: 'intermediate', topic: 'Inscribed Angles' },
        subparts: [
            'Given: Central angle = 80°',
            'Inscribed Angle Theorem:',
            'Inscribed angle = (1/2) × Central angle',
            'Inscribed angle = (1/2) × 80°',
            'Inscribed angle = 40°',
            'Any inscribed angle subtending same arc = 40°'
        ],
        helper: 'Inscribed angle is half the central angle',
        solution: 'Inscribed angle: 40°',
        realWorldContext: 'Navigation, surveying angles'
    });

    return relatedProblems;
}

function generateRelatedQuadrilaterals() {
    const relatedProblems = [];

    // Problem 1: Square - Find All Measurements from Side
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Square - Complete Analysis',
        problem: 'Find all measurements of a square with side length 8 units',
        parameters: { side: 8 },
        type: 'square',
        context: { difficulty: 'beginner', topic: 'Square Properties' },
        subparts: [
            'Given: Side length s = 8 units',
            'Calculate perimeter: P = 4s = 4(8) = 32 units',
            'Calculate area: A = s² = 8² = 64 square units',
            'Calculate diagonal: d = s√2 = 8√2 ≈ 11.31 units',
            'All angles = 90°',
            'All sides equal: 8 units each'
        ],
        helper: 'In a square, all measurements can be derived from the side length',
        solution: 'P = 32 units, A = 64 sq units, d = 8√2 units',
        realWorldContext: 'Floor tiles, chess boards, square frames'
    });

    // Problem 2: Rectangle - Find Missing Dimension
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Rectangle - Find Width from Area',
        problem: 'A rectangle has area 72 square units and length 9 units. Find the width and perimeter.',
        parameters: { area: 72, length: 9 },
        type: 'rectangle',
        context: { difficulty: 'beginner', topic: 'Rectangle Dimensions' },
        subparts: [
            'Given: Area A = 72 sq units, Length l = 9 units',
            'Formula: A = l × w',
            'Solve for width: w = A/l = 72/9 = 8 units',
            'Calculate perimeter: P = 2(l + w) = 2(9 + 8) = 34 units',
            'Calculate diagonal: d = √(l² + w²) = √(81 + 64) = √145 ≈ 12.04 units',
            'Check: 9 × 8 = 72 ✓'
        ],
        helper: 'Use area formula to find missing dimension, then calculate other measurements',
        solution: 'Width = 8 units, Perimeter = 34 units',
        realWorldContext: 'Room dimensions, screen sizes, picture frames'
    });

    // Problem 3: Parallelogram - Area and Angles
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Parallelogram - Area Calculation',
        problem: 'Find the area of a parallelogram with base 12 cm, height 7 cm, and one angle 60°',
        parameters: { base: 12, height: 7, angle: 60 },
        type: 'parallelogram',
        context: { difficulty: 'intermediate', topic: 'Parallelogram Area' },
        subparts: [
            'Given: Base b = 12 cm, Height h = 7 cm, Angle = 60°',
            'Area formula: A = base × height',
            'A = 12 × 7 = 84 square cm',
            'Note: Height is perpendicular to base',
            'Consecutive angle = 180° - 60° = 120°',
            'Opposite angles are equal: 60° and 120°',
            'Perimeter = 2(base + side) - need side length for this'
        ],
        helper: 'Area uses perpendicular height, not the side length',
        solution: 'Area = 84 square cm',
        realWorldContext: 'Parallelogram-shaped gardens, structural supports'
    });

    // Problem 4: Rhombus - Area from Diagonals
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Rhombus - Area from Diagonals',
        problem: 'Find the area and perimeter of a rhombus with diagonals 16 cm and 12 cm',
        parameters: { diagonal1: 16, diagonal2: 12 },
        type: 'rhombus',
        context: { difficulty: 'intermediate', topic: 'Rhombus Properties' },
        subparts: [
            'Given: Diagonal d₁ = 16 cm, Diagonal d₂ = 12 cm',
            'Area formula: A = (d₁ × d₂)/2',
            'A = (16 × 12)/2 = 192/2 = 96 square cm',
            'Find side using: 4s² = d₁² + d₂²',
            '4s² = 16² + 12² = 256 + 144 = 400',
            's² = 100, s = 10 cm',
            'Perimeter: P = 4s = 4(10) = 40 cm',
            'Check: Diagonals are perpendicular ✓'
        ],
        helper: 'Rhombus diagonals are perpendicular, use special area formula',
        solution: 'Area = 96 sq cm, Perimeter = 40 cm',
        realWorldContext: 'Diamond shapes, kite designs, decorative patterns'
    });

    // Problem 5: Trapezoid - Area Calculation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Trapezoid - Area and Median',
        problem: 'Find the area and median of a trapezoid with bases 14 cm and 8 cm, height 5 cm',
        parameters: { base1: 14, base2: 8, height: 5 },
        type: 'trapezoid',
        context: { difficulty: 'intermediate', topic: 'Trapezoid Measurements' },
        subparts: [
            'Given: Base₁ = 14 cm, Base₂ = 8 cm, Height h = 5 cm',
            'Median formula: m = (b₁ + b₂)/2',
            'm = (14 + 8)/2 = 22/2 = 11 cm',
            'Area formula: A = ((b₁ + b₂)/2) × h',
            'A = 11 × 5 = 55 square cm',
            'Alternative: A = median × height = 11 × 5 = 55 ✓',
            'The median is parallel to both bases'
        ],
        helper: 'Average the bases first, then multiply by height',
        solution: 'Area = 55 sq cm, Median = 11 cm',
        realWorldContext: 'Bridge supports, architectural designs, trapezoidal plots'
    });

    // Problem 6: Kite - Area from Diagonals
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Kite - Area and Perimeter',
        problem: 'Find the area of a kite with diagonals 18 cm and 10 cm, and consecutive sides 13 cm and 15 cm',
        parameters: { diagonal1: 18, diagonal2: 10, side1: 13, side2: 15 },
        type: 'kite',
        context: { difficulty: 'intermediate', topic: 'Kite Properties' },
        subparts: [
            'Given: d₁ = 18 cm, d₂ = 10 cm, sides a = 13 cm, b = 15 cm',
            'Area formula: A = (d₁ × d₂)/2',
            'A = (18 × 10)/2 = 180/2 = 90 square cm',
            'Perimeter: P = 2(a + b)',
            'P = 2(13 + 15) = 2(28) = 56 cm',
            'Properties: Diagonals are perpendicular',
            'One diagonal bisects the other'
        ],
        helper: 'Kite area uses perpendicular diagonals like rhombus',
        solution: 'Area = 90 sq cm, Perimeter = 56 cm',
        realWorldContext: 'Kite flying, decorative designs, molecular structures'
    });

    // Problem 7: Coordinate Geometry - Quadrilateral Classification
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Coordinate Quadrilateral - Classification',
        problem: 'Classify the quadrilateral with vertices A(0,0), B(4,0), C(4,3), D(0,3) and find its area',
        parameters: { 
            vertices: [
                { x: 0, y: 0 },
                { x: 4, y: 0 },
                { x: 4, y: 3 },
                { x: 0, y: 3 }
            ]
        },
        type: 'coordinate_geometry',
        context: { difficulty: 'intermediate', topic: 'Coordinate Geometry Quadrilaterals' },
        subparts: [
            'Given vertices: A(0,0), B(4,0), C(4,3), D(0,3)',
            'Calculate side lengths:',
            'AB = 4, BC = 3, CD = 4, DA = 3',
            'Opposite sides equal: AB = CD, BC = DA',
            'Check angles using slopes:',
            'Slope AB = 0, Slope BC = undefined (vertical)',
            'All angles are 90° (perpendicular sides)',
            'Classification: Rectangle',
            'Area = length × width = 4 × 3 = 12 square units'
        ],
        helper: 'Use distance formula for sides, check perpendicularity with slopes',
        solution: 'Rectangle with Area = 12 sq units',
        realWorldContext: 'Computer graphics, GIS mapping, CAD design'
    });

    // Problem 8: Square from Diagonal
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Square - Find Side from Diagonal',
        problem: 'A square has a diagonal of 10√2 cm. Find its side length, area, and perimeter.',
        parameters: { diagonal: 10 * Math.sqrt(2) },
        type: 'square',
        context: { difficulty: 'intermediate', topic: 'Square with Diagonal' },
        subparts: [
            'Given: Diagonal d = 10√2 cm',
            'Relationship: d = s√2',
            'Solve for side: s = d/√2 = (10√2)/√2 = 10 cm',
            'Alternative: s = d√2/2 = 10√2 × √2/2 = 10 cm',
            'Area: A = s² = 10² = 100 square cm',
            'Perimeter: P = 4s = 4(10) = 40 cm',
            'Check: 10√2 = 10 × 1.414... ≈ 14.14 cm ✓'
        ],
        helper: 'Diagonal of square equals side × √2',
        solution: 'Side = 10 cm, Area = 100 sq cm, Perimeter = 40 cm',
        realWorldContext: 'Diagonal measurements in construction'
    });

    // Problem 9: Isosceles Trapezoid
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Isosceles Trapezoid - Complete Analysis',
        problem: 'An isosceles trapezoid has bases 20 cm and 12 cm, and equal legs of 5 cm. Find area and height.',
        parameters: { base1: 20, base2: 12, leg: 5 },
        type: 'isosceles_trapezoid',
        context: { difficulty: 'intermediate', topic: 'Isosceles Trapezoid' },
        subparts: [
            'Given: Base₁ = 20 cm, Base₂ = 12 cm, Legs = 5 cm each',
            'Difference in bases: 20 - 12 = 8 cm',
            'Each side extends: 8/2 = 4 cm beyond shorter base',
            'Form right triangle: leg = 5 cm, base = 4 cm',
            'Height: h = √(5² - 4²) = √(25 - 16) = √9 = 3 cm',
            'Area: A = ((20 + 12)/2) × 3 = 16 × 3 = 48 square cm',
            'Perimeter: P = 20 + 12 + 5 + 5 = 42 cm'
        ],
        helper: 'Use Pythagorean theorem to find height from leg and base difference',
        solution: 'Height = 3 cm, Area = 48 sq cm',
        realWorldContext: 'Architectural arches, container designs'
    });

    // Problem 10: Rhombus with Angle
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Rhombus - Area from Side and Angle',
        problem: 'A rhombus has side 10 cm and one angle 60°. Find its area and diagonals.',
        parameters: { side: 10, angle: 60 },
        type: 'rhombus',
        context: { difficulty: 'advanced', topic: 'Rhombus with Trigonometry' },
        subparts: [
            'Given: Side s = 10 cm, Angle θ = 60°',
            'Area formula: A = s² sin(θ)',
            'A = 10² × sin(60°) = 100 × (√3/2) = 50√3 ≈ 86.60 square cm',
            'To find diagonals, use law of cosines:',
            'd₁² = 2s²(1 - cos θ) = 2(100)(1 - 0.5) = 100',
            'd₁ = 10 cm',
            'd₂² = 2s²(1 + cos θ) = 2(100)(1 + 0.5) = 300',
            'd₂ = 10√3 ≈ 17.32 cm',
            'Check: A = (d₁ × d₂)/2 = (10 × 10√3)/2 = 50√3 ✓'
        ],
        helper: 'Use trigonometry when given side and angle',
        solution: 'Area = 50√3 sq cm, d₁ = 10 cm, d₂ = 10√3 cm',
        realWorldContext: 'Advanced geometry problems, engineering applications'
    });

    return relatedProblems;
}

function generateRelatedAngleProblems() {
    const relatedProblems = [];

    // Problem 1: Complementary Angles
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Complementary Angles',
        problem: 'Find the complement of a 35° angle',
        parameters: { angle1: 35 },
        type: 'complementary',
        context: { difficulty: 'beginner', topic: 'Complementary Angles' },
        subparts: [
            'Given: One angle = 35°',
            'Complementary angles sum to 90°',
            'Set up equation: 35° + x = 90°',
            'Solve: x = 90° - 35° = 55°',
            'The complement is 55°',
            'Check: 35° + 55° = 90° ✓'
        ],
        helper: 'Complementary angles add up to 90°',
        solution: '55°',
        realWorldContext: 'Right angle problems in carpentry and construction'
    });

    // Problem 2: Supplementary Angles
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Supplementary Angles',
        problem: 'Two supplementary angles where one is 3 times the other. Find both angles.',
        parameters: { relationship: '3x' },
        type: 'supplementary',
        context: { difficulty: 'intermediate', topic: 'Supplementary Angles' },
        subparts: [
            'Let smaller angle = x°',
            'Larger angle = 3x°',
            'Supplementary: x + 3x = 180°',
            '4x = 180°',
            'x = 45°',
            'Larger angle = 3(45°) = 135°',
            'Angles are 45° and 135°',
            'Check: 45° + 135° = 180° ✓'
        ],
        helper: 'Supplementary angles add up to 180°',
        solution: '45° and 135°',
        realWorldContext: 'Linear pairs in architecture and design'
    });

    // Problem 3: Vertical Angles
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Vertical Angles',
        problem: 'Two lines intersect. If one angle is 65°, find all four angles.',
        parameters: { angle1: 65 },
        type: 'vertical',
        context: { difficulty: 'beginner', topic: 'Vertical Angles' },
        subparts: [
            'Given: One angle = 65°',
            'Vertical angles are equal',
            'Angle opposite to 65° = 65°',
            'Adjacent angles are supplementary',
            'Adjacent angle = 180° - 65° = 115°',
            'Other vertical angle = 115°',
            'All four angles: 65°, 115°, 65°, 115°',
            'Check: 65° + 115° + 65° + 115° = 360° ✓'
        ],
        helper: 'Vertical angles are equal; adjacent angles sum to 180°',
        solution: '65°, 115°, 65°, 115°',
        realWorldContext: 'Intersection design in civil engineering'
    });

    // Problem 4: Triangle Angle Sum
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Triangle Angle Sum',
        problem: 'In a triangle, two angles are 45° and 70°. Find the third angle.',
        parameters: { angleA: 45, angleB: 70 },
        type: 'triangle_sum',
        context: { difficulty: 'beginner', topic: 'Triangle Angle Sum' },
        subparts: [
            'Given: ∠A = 45°, ∠B = 70°',
            'Triangle angle sum = 180°',
            '∠A + ∠B + ∠C = 180°',
            '45° + 70° + ∠C = 180°',
            '115° + ∠C = 180°',
            '∠C = 180° - 115° = 65°',
            'Third angle = 65°',
            'Check: 45° + 70° + 65° = 180° ✓'
        ],
        helper: 'All triangle angles sum to 180°',
        solution: '65°',
        realWorldContext: 'Triangulation in surveying and navigation'
    });

    // Problem 5: Exterior Angle Theorem
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Exterior Angle Theorem',
        problem: 'An exterior angle of a triangle is 110°. One remote interior angle is 45°. Find the other remote interior angle.',
        parameters: { exteriorAngle: 110, remoteInterior1: 45 },
        type: 'exterior_angle',
        context: { difficulty: 'intermediate', topic: 'Exterior Angle Theorem' },
        subparts: [
            'Given: Exterior angle = 110°',
            'One remote interior = 45°',
            'Exterior angle = sum of remote interiors',
            '110° = 45° + x',
            'x = 110° - 45° = 65°',
            'Other remote interior = 65°',
            'Check: 45° + 65° = 110° ✓'
        ],
        helper: 'Exterior angle equals sum of two remote interior angles',
        solution: '65°',
        realWorldContext: 'Structural analysis in engineering'
    });

    // Problem 6: Polygon Interior Angles
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polygon Interior Angles',
        problem: 'Find the sum of interior angles of a hexagon (6 sides).',
        parameters: { sides: 6 },
        type: 'polygon_interior',
        context: { difficulty: 'intermediate', topic: 'Polygon Interior Angles' },
        subparts: [
            'Given: Hexagon has 6 sides (n = 6)',
            'Formula: (n - 2) × 180°',
            'Sum = (6 - 2) × 180°',
            'Sum = 4 × 180°',
            'Sum = 720°',
            'Each angle in regular hexagon:',
            '720° ÷ 6 = 120°',
            'Interior angle sum = 720°'
        ],
        helper: 'Use formula (n-2) × 180° for n-sided polygon',
        solution: '720°',
        realWorldContext: 'Design of hexagonal structures and honeycomb patterns'
    });

    // Problem 7: Regular Polygon
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Regular Polygon',
        problem: 'Each interior angle of a regular polygon is 144°. How many sides does it have?',
        parameters: { singleAngle: 144, regularPolygon: true },
        type: 'polygon_interior',
        context: { difficulty: 'intermediate', topic: 'Regular Polygons' },
        subparts: [
            'Given: Each interior angle = 144°',
            'Formula for regular polygon: (n-2)×180°/n = 144°',
            'Cross multiply: (n-2)×180 = 144n',
            '180n - 360 = 144n',
            '36n = 360',
            'n = 10',
            'Alternative: 360°/(180° - 144°) = 360°/36° = 10',
            'The polygon has 10 sides (decagon)'
        ],
        helper: 'Work backwards from angle measure to find sides',
        solution: '10 sides (decagon)',
        realWorldContext: 'Geometric design and tessellation'
    });

    // Problem 8: Parallel Lines and Transversal
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Parallel Lines with Transversal',
        problem: 'A transversal crosses two parallel lines. If one angle is 55°, find the corresponding angle.',
        parameters: { angle1: 55 },
        type: 'parallel_transversal',
        context: { difficulty: 'intermediate', topic: 'Parallel Lines and Transversals' },
        subparts: [
            'Given: One angle = 55°',
            'Lines are parallel',
            'Corresponding angles are equal',
            'Corresponding angle = 55°',
            'Alternate interior = 55°',
            'Co-interior = 180° - 55° = 125°',
            'Adjacent supplementary = 125°'
        ],
        helper: 'Corresponding angles are equal when lines are parallel',
        solution: 'Corresponding: 55°, Co-interior: 125°',
        realWorldContext: 'Railroad tracks and parallel structure design'
    });

    // Problem 9: Angle Bisector
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Angle Bisector',
        problem: 'An angle of 84° is bisected. Find the measure of each resulting angle.',
        parameters: { originalAngle: 84 },
        type: 'angle_bisector',
        context: { difficulty: 'beginner', topic: 'Angle Bisectors' },
        subparts: [
            'Given: Original angle = 84°',
            'Bisector divides angle into two equal parts',
            'Each part = 84° ÷ 2',
            'Each part = 42°',
            'Both angles = 42° each',
            'Check: 42° + 42° = 84° ✓'
        ],
        helper: 'Bisector creates two equal angles',
        solution: '42° each',
        realWorldContext: 'Construction and geometric design'
    });

    // Problem 10: Inscribed Angle
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Inscribed Angle',
        problem: 'An inscribed angle intercepts an arc of 140°. Find the inscribed angle.',
        parameters: { arcMeasure: 140 },
        type: 'inscribed_angle',
        context: { difficulty: 'intermediate', topic: 'Inscribed Angles in Circles' },
        subparts: [
            'Given: Intercepted arc = 140°',
            'Inscribed angle theorem:',
            'Inscribed angle = (1/2) × arc',
            'Inscribed angle = (1/2) × 140°',
            'Inscribed angle = 70°',
            'Central angle = 140° (equals arc)',
            'Inscribed angle is half of central angle'
        ],
        helper: 'Inscribed angle is half the intercepted arc',
        solution: '70°',
        realWorldContext: 'Circle geometry in astronomy and design'
    });

    // Problem 11: Central Angle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Central Angle',
        problem: 'A central angle measures 75°. Find the arc it intercepts.',
        parameters: { centralAngle: 75 },
        type: 'central_angle',
        context: { difficulty: 'beginner', topic: 'Central Angles in Circles' },
        subparts: [
            'Given: Central angle = 75°',
            'Central angle property:',
            'Central angle = arc measure',
            'Arc = 75°',
            'If radius = r, arc length = (75°/360°) × 2πr',
            'Arc measure = 75°'
        ],
        helper: 'Central angle equals its intercepted arc',
        solution: '75°',
        realWorldContext: 'Pie charts and sector calculations'
    });

    // Problem 12: Isosceles Triangle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Isosceles Triangle Angles',
        problem: 'In an isosceles triangle, the vertex angle is 40°. Find the base angles.',
        parameters: { angleA: 40 },
        type: 'triangle_sum',
        context: { difficulty: 'intermediate', topic: 'Isosceles Triangle Properties' },
        subparts: [
            'Given: Vertex angle = 40°',
            'Isosceles: two base angles are equal',
            'Let each base angle = x',
            '40° + x + x = 180°',
            '40° + 2x = 180°',
            '2x = 140°',
            'x = 70°',
            'Each base angle = 70°',
            'Check: 40° + 70° + 70° = 180° ✓'
        ],
        helper: 'In isosceles triangles, base angles are equal',
        solution: '70° each',
        realWorldContext: 'Symmetrical design and architecture'
    });

    return relatedProblems;
}


function generateRelatedSimilarityCongruence() {
    const relatedProblems = [];

    // Problem 1: SSS Congruence
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'SSS Congruence',
        problem: 'Triangle ABC has sides 5, 7, 9. Triangle DEF has sides 5, 7, 9. Are they congruent?',
        parameters: {
            triangle1: { sides: [5, 7, 9] },
            triangle2: { sides: [5, 7, 9] }
        },
        type: 'sss_congruence',
        context: { difficulty: 'beginner', topic: 'Triangle Congruence - SSS' },
        subparts: [
            'Given: △ABC with sides 5, 7, 9',
            '       △DEF with sides 5, 7, 9',
            'Compare all three pairs of sides:',
            'Side 1: 5 = 5 ✓',
            'Side 2: 7 = 7 ✓',
            'Side 3: 9 = 9 ✓',
            'All three pairs of sides are equal',
            'By SSS Postulate: △ABC ≅ △DEF'
        ],
        helper: 'SSS: If all three sides are equal, triangles are congruent',
        solution: 'Yes, △ABC ≅ △DEF by SSS',
        realWorldContext: 'Ensuring identical triangular parts in manufacturing'
    });

    // Problem 2: SAS Congruence
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'SAS Congruence',
        problem: 'Triangle ABC has sides AB=6, AC=8, ∠A=50°. Triangle DEF has sides DE=6, DF=8, ∠D=50°. Are they congruent?',
        parameters: {
            triangle1: { side1: 6, angle: 50, side2: 8 },
            triangle2: { side1: 6, angle: 50, side2: 8 }
        },
        type: 'sas_congruence',
        context: { difficulty: 'beginner', topic: 'Triangle Congruence - SAS' },
        subparts: [
            'Given: △ABC with AB=6, ∠A=50°, AC=8',
            '       △DEF with DE=6, ∠D=50°, DF=8',
            'Check SAS conditions:',
            'Side 1: AB=6, DE=6 ✓',
            'Included angle: ∠A=50°, ∠D=50° ✓',
            'Side 2: AC=8, DF=8 ✓',
            'Two sides and included angle are equal',
            'By SAS Postulate: △ABC ≅ △DEF'
        ],
        helper: 'SAS: Two sides and included angle must be equal',
        solution: 'Yes, △ABC ≅ △DEF by SAS',
        realWorldContext: 'Structural engineering with angle constraints'
    });

    // Problem 3: AA Similarity
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'AA Similarity',
        problem: 'Triangle ABC has ∠A=40°, ∠B=60°. Triangle DEF has ∠D=40°, ∠E=60°. Are they similar?',
        parameters: {
            triangle1: { angle1: 40, angle2: 60 },
            triangle2: { angle1: 40, angle2: 60 }
        },
        type: 'aa_similarity',
        context: { difficulty: 'beginner', topic: 'Triangle Similarity - AA' },
        subparts: [
            'Given: △ABC with ∠A=40°, ∠B=60°',
            '       △DEF with ∠D=40°, ∠E=60°',
            'Compare angles:',
            'Angle pair 1: ∠A=40°, ∠D=40° ✓',
            'Angle pair 2: ∠B=60°, ∠E=60° ✓',
            'Calculate third angles:',
            '∠C = 180° - 40° - 60° = 80°',
            '∠F = 180° - 40° - 60° = 80°',
            'Two pairs of angles are equal',
            'By AA Theorem: △ABC ~ △DEF'
        ],
        helper: 'AA: If two angles are equal, triangles are similar',
        solution: 'Yes, △ABC ~ △DEF by AA',
        realWorldContext: 'Scale models and blueprints'
    });

    // Problem 4: Scale Factor
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Scale Factor Calculation',
        problem: 'A triangle has sides 3, 4, 5. A similar triangle has sides 6, 8, 10. Find the scale factor.',
        parameters: {
            figure1Measurement: 6,
            figure2Measurement: 3,
            measurementType: 'side'
        },
        type: 'scale_factor',
        context: { difficulty: 'intermediate', topic: 'Scale Factor' },
        subparts: [
            'Given: Small triangle sides: 3, 4, 5',
            '       Large triangle sides: 6, 8, 10',
            'Calculate scale factor:',
            'k = 6/3 = 2',
            'Verify with other sides:',
            '8/4 = 2 ✓',
            '10/5 = 2 ✓',
            'All ratios equal 2',
            'Linear scale factor: k = 2',
            'Area scale factor: k² = 4',
            'Volume scale factor: k³ = 8'
        ],
        helper: 'Scale factor = larger dimension / smaller dimension',
        solution: 'k = 2 (linear), k² = 4 (area), k³ = 8 (volume)',
        realWorldContext: 'Map scales and model building'
    });

    // Problem 5: Missing Side in Similar Triangles
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Find Missing Side',
        problem: 'Triangle ABC ~ Triangle DEF. If AB=4, DE=6, BC=5, find EF.',
        parameters: {
            knownSide1Triangle1: 4,
            knownSide1Triangle2: 6,
            knownSide2Triangle1: 5,
            unknownSide: 'EF'
        },
        type: 'find_missing_side_similar',
        context: { difficulty: 'intermediate', topic: 'Similar Triangles - Missing Sides' },
        subparts: [
            'Given: △ABC ~ △DEF',
            '       AB=4, DE=6, BC=5, EF=?',
            'Set up proportion:',
            'AB/DE = BC/EF',
            '4/6 = 5/EF',
            'Cross multiply:',
            '4 × EF = 6 × 5',
            '4 × EF = 30',
            'EF = 30/4 = 7.5',
            'Check: 4/6 = 5/7.5 → 2/3 = 2/3 ✓'
        ],
        helper: 'Set up proportion with corresponding sides',
        solution: 'EF = 7.5',
        realWorldContext: 'Indirect measurement problems'
    });

    // Problem 6: Shadow Problem
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Shadow Problem',
        problem: 'A 6-foot person casts a 4-foot shadow. A tree casts a 20-foot shadow. How tall is the tree?',
        parameters: {
            object1Height: 6,
            object1Shadow: 4,
            object2Shadow: 20,
            findObject2Height: true
        },
        type: 'shadow_problem',
        context: { difficulty: 'intermediate', topic: 'Indirect Measurement - Shadows' },
        subparts: [
            'Given: Person height=6 ft, shadow=4 ft',
            '       Tree shadow=20 ft, height=?',
            'Same time → same sun angle → similar triangles',
            'Set up proportion:',
            'person height/person shadow = tree height/tree shadow',
            '6/4 = h/20',
            'Cross multiply:',
            '4h = 6 × 20',
            '4h = 120',
            'h = 30 feet',
            'Check: 6/4 = 30/20 → 1.5 = 1.5 ✓'
        ],
        helper: 'Same time means same sun angle, creating similar triangles',
        solution: 'Tree height = 30 feet',
        realWorldContext: 'Measuring heights indirectly using shadows'
    });

    // Problem 7: Geometric Mean - Altitude
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Geometric Mean - Altitude',
        problem: 'In right triangle ABC, altitude to hypotenuse creates segments of 4 and 9. Find the altitude.',
        parameters: {
            segment1: 4,
            segment2: 9
        },
        type: 'geometric_mean_altitude',
        context: { difficulty: 'intermediate', topic: 'Geometric Mean - Altitude Theorem' },
        subparts: [
            'Given: Right triangle, altitude to hypotenuse',
            '       Segments: 4 and 9',
            'Altitude Theorem: h² = segment1 × segment2',
            'h² = 4 × 9',
            'h² = 36',
            'h = √36',
            'h = 6',
            'The altitude is the geometric mean of the segments',
            'Verify: 4/6 = 6/9 → 2/3 = 2/3 ✓'
        ],
        helper: 'Altitude squared equals product of segments',
        solution: 'Altitude = 6',
        realWorldContext: 'Right triangle relationships in construction'
    });

    // Problem 8: ASA Congruence
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'ASA Congruence',
        problem: 'Triangle ABC: ∠A=45°, AB=10, ∠B=60°. Triangle DEF: ∠D=45°, DE=10, ∠E=60°. Congruent?',
        parameters: {
            triangle1: { angle1: 45, side: 10, angle2: 60 },
            triangle2: { angle1: 45, side: 10, angle2: 60 }
        },
        type: 'asa_congruence',
        context: { difficulty: 'beginner', topic: 'Triangle Congruence - ASA' },
        subparts: [
            'Given: △ABC with ∠A=45°, AB=10, ∠B=60°',
            '       △DEF with ∠D=45°, DE=10, ∠E=60°',
            'Check ASA conditions:',
            'Angle 1: ∠A=45°, ∠D=45° ✓',
            'Included side: AB=10, DE=10 ✓',
            'Angle 2: ∠B=60°, ∠E=60° ✓',
            'Two angles and included side are equal',
            'By ASA Postulate: △ABC ≅ △DEF'
        ],
        helper: 'ASA: Two angles and included side must match',
        solution: 'Yes, △ABC ≅ △DEF by ASA',
        realWorldContext: 'Angle-based construction verification'
    });

    // Problem 9: SAS~ Similarity
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'SAS~ Similarity',
        problem: 'Triangle ABC: AB=6, ∠A=50°, AC=9. Triangle DEF: DE=4, ∠D=50°, DF=6. Similar?',
        parameters: {
            triangle1: { side1: 6, angle: 50, side2: 9 },
            triangle2: { side1: 4, angle: 50, side2: 6 }
        },
        type: 'sas_similarity',
        context: { difficulty: 'intermediate', topic: 'Triangle Similarity - SAS~' },
        subparts: [
            'Given: △ABC with AB=6, ∠A=50°, AC=9',
            '       △DEF with DE=4, ∠D=50°, DF=6',
            'Check SAS~ conditions:',
            'Angles: ∠A=50°, ∠D=50° ✓',
            'Side ratios:',
            'AB/DE = 6/4 = 1.5',
            'AC/DF = 9/6 = 1.5',
            'Ratios are equal ✓',
            'Two sides proportional and included angle equal',
            'By SAS~ Theorem: △ABC ~ △DEF',
            'Scale factor k = 1.5'
        ],
        helper: 'SAS~: Two sides proportional with equal included angle',
        solution: 'Yes, △ABC ~ △DEF by SAS~, k=1.5',
        realWorldContext: 'Proportional design with angle constraints'
    });

    // Problem 10: Area Ratio
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Area Ratio of Similar Figures',
        problem: 'Two similar triangles have scale factor 3. If smaller has area 12 cm², find larger area.',
        parameters: {
            scaleFactor: 3,
            area1: 12,
            findArea2: false
        },
        type: 'area_ratio_similar',
        context: { difficulty: 'intermediate', topic: 'Area Ratios' },
        subparts: [
            'Given: Scale factor k = 3',
            '       Small triangle area = 12 cm²',
            'Area scale factor = k²',
            'k² = 3² = 9',
            'Large area = small area × k²',
            'Large area = 12 × 9',
            'Large area = 108 cm²',
            'Verify: 108/12 = 9 = 3² ✓'
        ],
        helper: 'Area scales by square of linear scale factor',
        solution: 'Large area = 108 cm²',
        realWorldContext: 'Calculating material needs for scaled designs'
    });

    return relatedProblems;
}



// ============== LINEAR EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedLinearEquations() {
    const relatedProblems = [];

    // Problem 1: One-Step Equation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'One-Step Equation',
        problem: 'Solve for x: x + 5 = 12',
        parameters: { m: 1, b: 5, c: 12 },
        type: 'simple_linear',
        context: { difficulty: 'beginner', topic: 'Linear Equations' },
        subparts: [
            'Given: x + 5 = 12',
            'Goal: Isolate x',
            'Subtract 5 from both sides:',
            'x + 5 - 5 = 12 - 5',
            'x = 7',
            'Check: 7 + 5 = 12 ✓'
        ],
        helper: 'Do the opposite operation to both sides',
        solution: 'x = 7',
        realWorldContext: 'Finding unknown values in simple situations'
    });

    // Problem 2: Two-Step Equation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Two-Step Equation',
        problem: 'Solve for x: 3x - 7 = 14',
        parameters: { m: 3, b: -7, c: 14 },
        type: 'simple_linear',
        context: { difficulty: 'beginner', topic: 'Linear Equations' },
        subparts: [
            'Given: 3x - 7 = 14',
            'Step 1: Add 7 to both sides',
            '3x - 7 + 7 = 14 + 7',
            '3x = 21',
            'Step 2: Divide both sides by 3',
            '3x/3 = 21/3',
            'x = 7',
            'Check: 3(7) - 7 = 21 - 7 = 14 ✓'
        ],
        helper: 'First undo addition/subtraction, then undo multiplication/division',
        solution: 'x = 7',
        realWorldContext: 'Solving problems with multiple operations'
    });

    // Problem 3: Equation with Variables on Both Sides
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Equation with Variables on Both Sides',
        problem: 'Solve for x: 5x + 3 = 2x + 18',
        parameters: { m: 5, b: 3, c: 18, m2: 2 },
        type: 'simple_linear',
        context: { difficulty: 'intermediate', topic: 'Linear Equations' },
        subparts: [
            'Given: 5x + 3 = 2x + 18',
            'Step 1: Collect x terms on left (subtract 2x from both sides)',
            '5x - 2x + 3 = 2x - 2x + 18',
            '3x + 3 = 18',
            'Step 2: Subtract 3 from both sides',
            '3x + 3 - 3 = 18 - 3',
            '3x = 15',
            'Step 3: Divide both sides by 3',
            'x = 5',
            'Check: 5(5) + 3 = 25 + 3 = 28, and 2(5) + 18 = 10 + 18 = 28 ✓'
        ],
        helper: 'Collect variables on one side, constants on other',
        solution: 'x = 5',
        realWorldContext: 'Comparing different scenarios'
    });

    // Problem 4: Equation with Fractions
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Equation with Fractions',
        problem: 'Solve for x: (x/4) + 2 = 5',
        parameters: { m: 0.25, b: 2, c: 5 },
        type: 'simple_linear',
        context: { difficulty: 'intermediate', topic: 'Linear Equations' },
        subparts: [
            'Given: x/4 + 2 = 5',
            'Step 1: Subtract 2 from both sides',
            'x/4 = 3',
            'Step 2: Multiply both sides by 4',
            '4 × (x/4) = 4 × 3',
            'x = 12',
            'Alternative: Clear fraction first by multiplying everything by 4',
            '4(x/4) + 4(2) = 4(5)',
            'x + 8 = 20',
            'x = 12',
            'Check: 12/4 + 2 = 3 + 2 = 5 ✓'
        ],
        helper: 'Either clear fractions first or isolate the fraction term',
        solution: 'x = 12',
        realWorldContext: 'Solving problems involving parts or portions'
    });

    // Problem 5: Linear Inequality
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Linear Inequality',
        problem: 'Solve: -2x + 7 > 3',
        parameters: { m: -2, b: 7, c: 3, operator: '>' },
        type: 'linear_inequality',
        context: { difficulty: 'intermediate', topic: 'Linear Inequalities' },
        subparts: [
            'Given: -2x + 7 > 3',
            'Subtract 7 from both sides',
            '-2x > -4',
            'Divide by -2 (remember to flip inequality)',
            'x < 2',
            'Solution: x < 2 or (-∞, 2)'
        ],
        helper: 'Flip inequality when dividing/multiplying by negative',
        solution: 'x < 2',
        realWorldContext: 'Finding range of valid solutions'
    });

    // Problem 6: Absolute Value Equation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Absolute Value Equation',
        problem: 'Solve: |2x - 3| = 7',
        parameters: { a: 2, b: -3, c: 7 },
        type: 'absolute_value_equation',
        context: { difficulty: 'intermediate', topic: 'Absolute Value Equations' },
        subparts: [
            'Given: |2x - 3| = 7',
            'Case 1: 2x - 3 = 7',
            '2x = 10',
            'x = 5',
            'Case 2: 2x - 3 = -7',
            '2x = -4',
            'x = -2',
            'Solutions: x = 5 or x = -2'
        ],
        helper: 'Split into two cases: positive and negative',
        solution: 'x = 5 or x = -2',
        realWorldContext: 'Distance and magnitude problems'
    });

    // Problem 7: System of 2x2 Equations
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'System of Linear Equations',
        problem: 'Solve: 2x + 3y = 8 and 4x - y = 5',
        parameters: { a1: 2, b1: 3, c1: 8, a2: 4, b2: -1, c2: 5 },
        type: 'system_2x2',
        context: { difficulty: 'advanced', topic: 'Systems of Linear Equations' },
        subparts: [
            'Given: 2x + 3y = 8 ... (1)',
            '       4x - y = 5 ... (2)',
            'From equation (2): y = 4x - 5',
            'Substitute into (1):',
            '2x + 3(4x - 5) = 8',
            '2x + 12x - 15 = 8',
            '14x = 23',
            'x = 23/14',
            'y = 4(23/14) - 5 = -3/14',
            'Solution: x = 23/14, y = -3/14'
        ],
        helper: 'Use substitution or elimination method',
        solution: 'x = 23/14, y = -3/14',
        realWorldContext: 'Problems with multiple constraints'
    });

    return relatedProblems;
}

// ============== QUADRATIC EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedQuadraticEquations() {
    const relatedProblems = [];

    // Problem 1: Factoring Simple Quadratic
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Factoring Simple Quadratic',
        problem: 'Solve by factoring: x² - 5x + 6 = 0',
        parameters: { a: 1, b: -5, c: 6 },
        type: 'factoring_quadratic',
        context: { difficulty: 'beginner', topic: 'Factoring Quadratics' },
        subparts: [
            'Given: x² - 5x + 6 = 0',
            'Need two numbers that: multiply to 6, add to -5',
            'Numbers: -2 and -3 (since -2 × -3 = 6, -2 + -3 = -5)',
            'Factor: (x - 2)(x - 3) = 0',
            'Set each factor = 0:',
            'x - 2 = 0  →  x = 2',
            'x - 3 = 0  →  x = 3',
            'Solutions: x = 2 or x = 3',
            'Check x=2: (2)² - 5(2) + 6 = 4 - 10 + 6 = 0 ✓',
            'Check x=3: (3)² - 5(3) + 6 = 9 - 15 + 6 = 0 ✓'
        ],
        helper: 'Find two numbers that multiply to c and add to b',
        solution: 'x = 2 or x = 3',
        realWorldContext: 'Finding values that satisfy a condition'
    });

    // Problem 2: Quadratic Formula
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Quadratic Formula',
        problem: 'Solve using quadratic formula: 2x² + 5x - 3 = 0',
        parameters: { a: 2, b: 5, c: -3 },
        type: 'quadratic_formula',
        context: { difficulty: 'intermediate', topic: 'Quadratic Formula' },
        subparts: [
            'Given: 2x² + 5x - 3 = 0',
            'Identify: a = 2, b = 5, c = -3',
            'Quadratic formula: x = [-b ± √(b² - 4ac)] / 2a',
            'Calculate discriminant: b² - 4ac',
            '= (5)² - 4(2)(-3)',
            '= 25 + 24 = 49',
            'Substitute into formula:',
            'x = [-5 ± √49] / (2 × 2)',
            'x = [-5 ± 7] / 4',
            'Solution 1: x = (-5 + 7)/4 = 2/4 = 1/2',
            'Solution 2: x = (-5 - 7)/4 = -12/4 = -3',
            'Solutions: x = 1/2 or x = -3'
        ],
        helper: 'Quadratic formula works for all quadratics',
        solution: 'x = 1/2 or x = -3',
        realWorldContext: 'Universal method for any quadratic equation'
    });

    // Problem 3: Completing the Square
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Completing the Square',
        problem: 'Solve by completing the square: x² + 6x + 5 = 0',
        parameters: { a: 1, b: 6, c: 5 },
        type: 'completing_square',
        context: { difficulty: 'intermediate', topic: 'Completing the Square' },
        subparts: [
            'Given: x² + 6x + 5 = 0',
            'Move constant to right: x² + 6x = -5',
            'Take half of b coefficient: 6/2 = 3',
            'Square it: 3² = 9',
            'Add 9 to both sides: x² + 6x + 9 = -5 + 9',
            'Left side is perfect square: (x + 3)² = 4',
            'Take square root: x + 3 = ±2',
            'Solve: x + 3 = 2  →  x = -1',
            '      x + 3 = -2  →  x = -5',
            'Solutions: x = -1 or x = -5',
            'Check: For x=-1: (-1)² + 6(-1) + 5 = 1 - 6 + 5 = 0 ✓'
        ],
        helper: 'Make perfect square trinomial by adding (b/2)²',
        solution: 'x = -1 or x = -5',
        realWorldContext: 'Converting to vertex form for graphing'
    });

    // Problem 4: Standard Quadratic
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Standard Quadratic',
        problem: 'Solve: x² + 7x + 12 = 0',
        parameters: { a: 1, b: 7, c: 12 },
        type: 'standard_quadratic',
        context: { difficulty: 'beginner', topic: 'Standard Quadratic Equations' },
        subparts: [
            'Given: x² + 7x + 12 = 0',
            'Factor: (x + 3)(x + 4) = 0',
            'x + 3 = 0  →  x = -3',
            'x + 4 = 0  →  x = -4',
            'Solutions: x = -3 or x = -4'
        ],
        helper: 'Factor and apply zero product property',
        solution: 'x = -3 or x = -4',
        realWorldContext: 'Basic quadratic solving'
    });

    // Problem 5: Quadratic Inequality
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Quadratic Inequality',
        problem: 'Solve: x² - 4x + 3 > 0',
        parameters: { a: 1, b: -4, c: 3, operator: '>' },
        type: 'quadratic_inequality',
        context: { difficulty: 'intermediate', topic: 'Quadratic Inequalities' },
        subparts: [
            'Given: x² - 4x + 3 > 0',
            'Factor: (x - 1)(x - 3) > 0',
            'Critical points: x = 1, x = 3',
            'Test intervals: (-∞, 1), (1, 3), (3, ∞)',
            'Solution: x < 1 or x > 3',
            'Interval notation: (-∞, 1) ∪ (3, ∞)'
        ],
        helper: 'Find roots, then test intervals',
        solution: 'x < 1 or x > 3',
        realWorldContext: 'Range problems with constraints'
    });

    // Problem 6: Vertex Form
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Vertex Form Analysis',
        problem: 'Analyze: f(x) = 2x² - 8x + 10',
        parameters: { a: 2, b: -8, c: 10 },
        type: 'vertex_form',
        context: { difficulty: 'intermediate', topic: 'Vertex Form Analysis' },
        subparts: [
            'Given: f(x) = 2x² - 8x + 10',
            'Complete the square:',
            'f(x) = 2(x² - 4x) + 10',
            'f(x) = 2(x² - 4x + 4 - 4) + 10',
            'f(x) = 2(x - 2)² - 8 + 10',
            'f(x) = 2(x - 2)² + 2',
            'Vertex: (2, 2)',
            'Opens upward (a > 0)',
            'Minimum value: 2 at x = 2'
        ],
        helper: 'Convert to vertex form a(x-h)² + k',
        solution: 'Vertex: (2, 2), Min: 2',
        realWorldContext: 'Finding maximum/minimum values'
    });

    // Problem 7: Function Analysis
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Quadratic Function Analysis',
        problem: 'Analyze: f(x) = -x² + 4x + 5',
        parameters: { a: -1, b: 4, c: 5 },
        type: 'function_analysis',
        context: { difficulty: 'intermediate', topic: 'Quadratic Function Analysis' },
        subparts: [
            'Given: f(x) = -x² + 4x + 5',
            'Vertex: x = -b/2a = -4/(-2) = 2',
            'f(2) = -(2)² + 4(2) + 5 = 9',
            'Vertex: (2, 9)',
            'Opens downward (a < 0)',
            'Maximum value: 9',
            'Y-intercept: (0, 5)',
            'X-intercepts: solve -x² + 4x + 5 = 0'
        ],
        helper: 'Find vertex, direction, and intercepts',
        solution: 'Vertex: (2, 9), Max: 9',
        realWorldContext: 'Complete function analysis'
    });

    // Problem 8: Complex Solutions
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Solutions',
        problem: 'Solve: x² + 2x + 5 = 0',
        parameters: { a: 1, b: 2, c: 5 },
        type: 'complex_solutions',
        context: { difficulty: 'advanced', topic: 'Complex Solutions' },
        subparts: [
            'Given: x² + 2x + 5 = 0',
            'Discriminant: b² - 4ac = 4 - 20 = -16 < 0',
            'Complex solutions exist',
            'x = [-2 ± √(-16)] / 2',
            'x = [-2 ± 4i] / 2',
            'x = -1 ± 2i',
            'Solutions: x = -1 + 2i or x = -1 - 2i'
        ],
        helper: 'Negative discriminant means complex solutions',
        solution: 'x = -1 ± 2i',
        realWorldContext: 'Advanced algebra with imaginary numbers'
    });

    // Problem 9: Optimization
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Optimization Problem',
        problem: 'Maximize: f(x) = -2x² + 8x + 3',
        parameters: { a: -2, b: 8, c: 3, optimizationType: 'maximize' },
        type: 'optimization',
        context: { difficulty: 'intermediate', topic: 'Quadratic Optimization' },
        subparts: [
            'Given: f(x) = -2x² + 8x + 3',
            'Since a < 0, parabola opens downward',
            'Maximum at vertex',
            'x = -b/2a = -8/(-4) = 2',
            'f(2) = -2(2)² + 8(2) + 3 = 11',
            'Maximum value: 11 at x = 2'
        ],
        helper: 'Vertex gives maximum (a<0) or minimum (a>0)',
        solution: 'Maximum: 11 at x = 2',
        realWorldContext: 'Finding optimal values in real problems'
    });

    return relatedProblems;
}

// ============== SIMULTANEOUS EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedSimultaneousEquations() {
    const relatedProblems = [];

    // Problem 1: Substitution Method
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Substitution Method',
        problem: 'Solve: 2x + y = 7 and x - y = 2',
        parameters: { equations: ['2x + y = 7', 'x - y = 2'] },
        type: 'system_2x2_substitution',
        context: { difficulty: 'beginner', topic: 'Substitution Method' },
        subparts: [
            'Given: 2x + y = 7 ... (1)',
            '       x - y = 2 ... (2)',
            'From (2): x = y + 2',
            'Substitute into (1):',
            '2(y + 2) + y = 7',
            '2y + 4 + y = 7',
            '3y = 3',
            'y = 1',
            'Substitute back: x = 1 + 2 = 3',
            'Solution: x = 3, y = 1'
        ],
        helper: 'Solve one equation for a variable, substitute',
        solution: 'x = 3, y = 1',
        realWorldContext: 'Finding values satisfying multiple conditions'
    });

    // Problem 2: Elimination Method
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Elimination Method',
        problem: 'Solve: 3x + 2y = 12 and 2x - y = 1',
        parameters: { equations: ['3x + 2y = 12', '2x - y = 1'] },
        type: 'system_2x2_elimination',
        context: { difficulty: 'intermediate', topic: 'Elimination Method' },
        subparts: [
            'Given: 3x + 2y = 12 ... (1)',
            '       2x - y = 1 ... (2)',
            'Multiply (2) by 2: 4x - 2y = 2 ... (3)',
            'Add (1) + (3):',
            '7x = 14',
            'x = 2',
            'Substitute into (2):',
            '2(2) - y = 1',
            'y = 3',
            'Solution: x = 2, y = 3'
        ],
        helper: 'Add/subtract equations to eliminate a variable',
        solution: 'x = 2, y = 3',
        realWorldContext: 'Solving systems efficiently'
    });

    // Problem 3: Graphical Method
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Graphical Method',
        problem: 'Solve: x + y = 5 and 2x - y = 1',
        parameters: { equations: ['x + y = 5', '2x - y = 1'] },
        type: 'system_2x2_graphical',
        context: { difficulty: 'beginner', topic: 'Graphical Method' },
        subparts: [
            'Given: x + y = 5 ... (1)',
            '       2x - y = 1 ... (2)',
            'Rewrite in slope-intercept form:',
            '(1): y = -x + 5',
            '(2): y = 2x - 1',
            'Graph both lines',
            'Intersection point is solution',
            'Add equations: 3x = 6, x = 2',
            'Substitute: 2 + y = 5, y = 3',
            'Solution: x = 2, y = 3'
        ],
        helper: 'Graph lines and find intersection',
        solution: 'x = 2, y = 3',
        realWorldContext: 'Visual representation of solutions'
    });

    // Problem 4: Matrix Method (Cramer's Rule)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Matrix Method',
        problem: 'Solve: 4x + 3y = 10 and 2x - 5y = -4',
        parameters: { equations: ['4x + 3y = 10', '2x - 5y = -4'] },
        type: 'system_2x2_matrix',
        context: { difficulty: 'intermediate', topic: 'Matrix Method (Cramer\'s Rule)' },
        subparts: [
            'Given: 4x + 3y = 10',
            '       2x - 5y = -4',
            'Coefficient matrix: |4  3|',
            '                    |2 -5|',
            'D = 4(-5) - 3(2) = -20 - 6 = -26',
            'Dx = |10  3|  = 10(-5) - 3(-4) = -38',
            '     |-4 -5|',
            'Dy = |4  10| = 4(-4) - 10(2) = -36',
            '     |2  -4|',
            'x = Dx/D = -38/-26 = 19/13',
            'y = Dy/D = -36/-26 = 18/13',
            'Solution: x = 19/13, y = 18/13'
        ],
        helper: 'Use determinants to solve system',
        solution: 'x = 19/13, y = 18/13',
        realWorldContext: 'Advanced algebraic method'
    });

    // Problem 5: 3x3 System
    relatedProblems.push({
        difficulty: 'harder',
        scenario: '3×3 System',
        problem: 'Solve: x + y + z = 6, 2x - y + z = 3, x + 2y - z = 2',
        parameters: { equations: ['x + y + z = 6', '2x - y + z = 3', 'x + 2y - z = 2'] },
        type: 'system_3x3',
        context: { difficulty: 'advanced', topic: '3×3 System of Equations' },
        subparts: [
            'Given: x + y + z = 6 ... (1)',
            '       2x - y + z = 3 ... (2)',
            '       x + 2y - z = 2 ... (3)',
            'Eliminate z: Add (1) + (3):',
            '2x + 3y = 8 ... (4)',
            'Add (2) + (3):',
            '3x + y = 5 ... (5)',
            'From (5): y = 5 - 3x',
            'Substitute into (4):',
            '2x + 3(5 - 3x) = 8',
            '2x + 15 - 9x = 8',
            '-7x = -7, x = 1',
            'y = 5 - 3(1) = 2',
            'From (1): 1 + 2 + z = 6, z = 3',
            'Solution: x = 1, y = 2, z = 3'
        ],
        helper: 'Eliminate variables systematically',
        solution: 'x = 1, y = 2, z = 3',
        realWorldContext: 'Complex systems with three unknowns'
    });

    // Problem 6: No Solution (Parallel Lines)
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'No Solution System',
        problem: 'Solve: 2x + y = 5 and 4x + 2y = 7',
        parameters: { equations: ['2x + y = 5', '4x + 2y = 7'] },
        type: 'system_2x2_no_solution',
        context: { difficulty: 'intermediate', topic: 'Inconsistent Systems' },
        subparts: [
            'Given: 2x + y = 5 ... (1)',
            '       4x + 2y = 7 ... (2)',
            'Multiply (1) by 2: 4x + 2y = 10 ... (3)',
            'Compare (2) and (3):',
            '4x + 2y = 7',
            '4x + 2y = 10',
            'This is impossible! (7 ≠ 10)',
            'The lines are parallel',
            'No solution exists',
            'System is inconsistent'
        ],
        helper: 'Parallel lines never intersect',
        solution: 'No solution (inconsistent system)',
        realWorldContext: 'Identifying impossible conditions'
    });

    // Problem 7: Infinite Solutions (Dependent)
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Infinite Solutions',
        problem: 'Solve: 3x - 2y = 6 and 6x - 4y = 12',
        parameters: { equations: ['3x - 2y = 6', '6x - 4y = 12'] },
        type: 'system_2x2_infinite',
        context: { difficulty: 'intermediate', topic: 'Dependent Systems' },
        subparts: [
            'Given: 3x - 2y = 6 ... (1)',
            '       6x - 4y = 12 ... (2)',
            'Notice (2) = 2 × (1)',
            '6x - 4y = 2(3x - 2y) = 2(6) = 12',
            'Both equations represent the same line',
            'Infinite solutions along the line',
            'General solution: y = (3x - 6)/2',
            'Or: x = (2y + 6)/3'
        ],
        helper: 'Same line means infinite intersection points',
        solution: 'Infinite solutions: y = (3x - 6)/2',
        realWorldContext: 'Dependent equations yield infinite solutions'
    });

    return relatedProblems;
}

// ============== POLYNOMIAL EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedPolynomials() {
    const relatedProblems = [];

    // Problem 1: Quadratic Standard Form
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Quadratic Standard Form',
        problem: 'Solve: x² - 7x + 12 = 0',
        parameters: { a: 1, b: -7, c: 12 },
        type: 'quadratic_standard',
        context: { difficulty: 'beginner', topic: 'Quadratic Equations - Standard Form' },
        subparts: [
            'Given: x² - 7x + 12 = 0',
            'Factor: (x - 3)(x - 4) = 0',
            'x - 3 = 0  →  x = 3',
            'x - 4 = 0  →  x = 4',
            'Solutions: x = 3 or x = 4',
            'Check x=3: (3)² - 7(3) + 12 = 9 - 21 + 12 = 0 ✓',
            'Check x=4: (4)² - 7(4) + 12 = 16 - 28 + 12 = 0 ✓'
        ],
        helper: 'Factor and apply zero product property',
        solution: 'x = 3 or x = 4',
        realWorldContext: 'Basic polynomial solving'
    });

    // Problem 2: Quadratic Factoring
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Quadratic Factoring',
        problem: 'Solve: x² + 5x + 6 = 0',
        parameters: { a: 1, b: 5, c: 6 },
        type: 'quadratic_factoring',
        context: { difficulty: 'beginner', topic: 'Quadratic Equations - Factoring Method' },
        subparts: [
            'Given: x² + 5x + 6 = 0',
            'Need two numbers that multiply to 6 and add to 5',
            'Numbers: 2 and 3',
            'Factor: (x + 2)(x + 3) = 0',
            'x + 2 = 0  →  x = -2',
            'x + 3 = 0  →  x = -3',
            'Solutions: x = -2 or x = -3',
            'Check: (-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0 ✓'
        ],
        helper: 'Find factors that multiply to c and add to b',
        solution: 'x = -2 or x = -3',
        realWorldContext: 'Factoring techniques'
    });

    // Problem 3: Completing the Square
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Completing the Square',
        problem: 'Solve: x² - 4x + 1 = 0',
        parameters: { a: 1, b: -4, c: 1 },
        type: 'completing_square',
        context: { difficulty: 'intermediate', topic: 'Completing the Square' },
        subparts: [
            'Given: x² - 4x + 1 = 0',
            'Move constant: x² - 4x = -1',
            'Half of -4 is -2, square it: (-2)² = 4',
            'Add 4 to both sides: x² - 4x + 4 = -1 + 4',
            '(x - 2)² = 3',
            'x - 2 = ±√3',
            'x = 2 ± √3',
            'Solutions: x = 2 + √3 or x = 2 - √3',
            'Approximate: x ≈ 3.732 or x ≈ 0.268'
        ],
        helper: 'Add (b/2)² to both sides to complete square',
        solution: 'x = 2 ± √3',
        realWorldContext: 'Exact solutions using completing square'
    });

    // Problem 4: Cubic Equation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Cubic Equation',
        problem: 'Solve: x³ - 6x² + 11x - 6 = 0',
        parameters: { a: 1, b: -6, c: 11, d: -6 },
        type: 'cubic_equation',
        context: { difficulty: 'advanced', topic: 'Cubic Equations' },
        subparts: [
            'Given: x³ - 6x² + 11x - 6 = 0',
            'Try rational roots (factors of 6): ±1, ±2, ±3, ±6',
            'Test x = 1: 1 - 6 + 11 - 6 = 0 ✓',
            'x = 1 is a root, so (x - 1) is a factor',
            'Divide: (x³ - 6x² + 11x - 6) ÷ (x - 1)',
            'Result: x² - 5x + 6',
            'Factor: (x - 1)(x² - 5x + 6) = 0',
            '(x - 1)(x - 2)(x - 3) = 0',
            'Solutions: x = 1, x = 2, x = 3'
        ],
        helper: 'Use rational root theorem, then factor',
        solution: 'x = 1, x = 2, x = 3',
        realWorldContext: 'Higher degree polynomial solving'
    });

    // Problem 5: Rational Root Theorem
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Rational Root Theorem',
        problem: 'Find rational roots: x³ - 4x² + x + 6 = 0',
        parameters: { coefficients: [1, -4, 1, 6] },
        type: 'rational_root',
        context: { difficulty: 'intermediate', topic: 'Rational Root Theorem' },
        subparts: [
            'Given: x³ - 4x² + x + 6 = 0',
            'Rational Root Theorem: p/q where',
            'p divides constant term (6): ±1, ±2, ±3, ±6',
            'q divides leading coefficient (1): ±1',
            'Possible rational roots: ±1, ±2, ±3, ±6',
            'Test x = -1: -1 - 4 - 1 + 6 = 0 ✓',
            'Test x = 2: 8 - 16 + 2 + 6 = 0 ✓',
            'Test x = 3: 27 - 36 + 3 + 6 = 0 ✓',
            'Rational roots: x = -1, x = 2, x = 3'
        ],
        helper: 'Test factors of constant/leading coefficient',
        solution: 'x = -1, x = 2, x = 3',
        realWorldContext: 'Finding rational solutions systematically'
    });

    // Problem 6: Synthetic Division
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Synthetic Division',
        problem: 'Divide: (x³ - 3x² + 2x + 4) ÷ (x - 2)',
        parameters: { coefficients: [1, -3, 2, 4], divisor: 2 },
        type: 'synthetic_division',
        context: { difficulty: 'intermediate', topic: 'Synthetic Division' },
        subparts: [
            'Given: (x³ - 3x² + 2x + 4) ÷ (x - 2)',
            'Set up synthetic division with divisor = 2',
            'Coefficients: 1  -3   2   4',
            '              ↓   2  -2   0',
            '             _______________',
            '              1  -1   0   4',
            'Quotient: x² - x + 0 = x² - x',
            'Remainder: 4',
            'Result: x² - x + 4/(x - 2)'
        ],
        helper: 'Use synthetic division for (x - a) divisors',
        solution: 'x² - x, remainder 4',
        realWorldContext: 'Efficient polynomial division'
    });

    // Problem 7: Polynomial Inequality
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polynomial Inequality',
        problem: 'Solve: x² - 5x + 6 > 0',
        parameters: { coefficients: [1, -5, 6], operator: '>' },
        type: 'polynomial_inequality',
        context: { difficulty: 'intermediate', topic: 'Polynomial Inequalities' },
        subparts: [
            'Given: x² - 5x + 6 > 0',
            'Factor: (x - 2)(x - 3) > 0',
            'Critical points: x = 2, x = 3',
            'Test intervals:',
            'x < 2: Test x = 0: (0-2)(0-3) = 6 > 0 ✓',
            '2 < x < 3: Test x = 2.5: (0.5)(-0.5) < 0 ✗',
            'x > 3: Test x = 4: (2)(1) = 2 > 0 ✓',
            'Solution: x < 2 or x > 3',
            'Interval notation: (-∞, 2) ∪ (3, ∞)'
        ],
        helper: 'Find roots, test intervals between them',
        solution: 'x < 2 or x > 3',
        realWorldContext: 'Finding valid ranges in inequalities'
    });

    // Problem 8: Polynomial Graphing
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polynomial Graphing',
        problem: 'Analyze: f(x) = x³ - 2x² - 5x + 6',
        parameters: { coefficients: [1, -2, -5, 6] },
        type: 'polynomial_graphing',
        context: { difficulty: 'intermediate', topic: 'Polynomial Graphing Analysis' },
        subparts: [
            'Given: f(x) = x³ - 2x² - 5x + 6',
            'Find zeros (x-intercepts):',
            'Test x = 1: 1 - 2 - 5 + 6 = 0 ✓',
            'Factor: (x - 1)(x² - x - 6)',
            '= (x - 1)(x - 3)(x + 2)',
            'Zeros: x = -2, 1, 3',
            'Y-intercept: f(0) = 6',
            'End behavior: As x → ∞, f(x) → ∞',
            '             As x → -∞, f(x) → -∞',
            'Degree 3 (odd), positive leading coefficient'
        ],
        helper: 'Find zeros, intercepts, and end behavior',
        solution: 'Zeros: x = -2, 1, 3',
        realWorldContext: 'Complete polynomial analysis'
    });

    return relatedProblems;
}

// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============


function solveTriangleRelatedProblems() {
    const problems = generateRelatedTriangleProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Triangle Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTriangleMathematicalWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solveTriangleProblem({
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}


/**function solveCircleRelatedProblems() {
    const problems = generateRelatedCircleProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Circle Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedCircleGeometryWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        // Prepare equation based on problem
        let equation = problem.problem.split(': ')[1] || problem.problem;

        workbook.solveCircleProblem({
            equation: equation,
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}
*/


function solveQuadrilateralRelatedProblems() {
    const problems = generateRelatedQuadrilaterals();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Quadrilateral Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedQuadrilateralsMathematicalWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solveQuadrilateralProblem({
            quadrilateralType: problem.type,
            parameters: problem.parameters,
            problem: problem.problem,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}


function solveAngleRelatedProblems() {
    const problems = generateRelatedAngleProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Angle Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAnglesMathematicalWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        // Prepare equation/scenario based on problem
        let scenario = problem.problem;

        workbook.solveAngleProblem({
            equation: scenario,
            scenario: scenario,
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}


function solveSimilarityCongruenceRelatedProblems() {
    const problems = generateRelatedSimilarityCongruence();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Similarity/Congruence Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSimilarityCongruenceWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solveSimilarityCongruenceProblem({
            problemType: problem.type,
            parameters: problem.parameters,
            scenario: problem.scenario,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}



function solveLinearRelatedProblems() {
    const problems = generateRelatedLinearEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Linear Problem ${index + 1}: ${problem.scenario}`);
        
        const workbook = new EnhancedLinearMathematicalWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        // Prepare equation based on problem type
        let equation = problem.problem.split(': ')[1] || problem.problem;
        
        workbook.solveLinearProblem({
            equation: equation,
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveQuadraticRelatedProblems() {
    const problems = generateRelatedQuadraticEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Quadratic Problem ${index + 1}: ${problem.scenario}`);
        
        const workbook = new EnhancedQuadraticMathematicalWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        // Prepare equation based on problem
        let equation = problem.problem.split(': ')[1] || problem.problem;
        
        workbook.solveQuadraticProblem({
            equation: equation,
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveSimultaneousRelatedProblems() {
    const problems = generateRelatedSimultaneousEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Simultaneous Problem ${index + 1}: ${problem.scenario}`);
        
        const workbook = new EnhancedSimultaneousEquationsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solveSimultaneousSystem({
            equations: problem.parameters.equations,
            method: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}



// ============== COMPREHENSIVE DOCUMENT GENERATION ==============

async function generateComprehensiveDocument() {
    console.log('Generating Comprehensive Algebra Workbook with Related Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Algebra Workbook',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Complete Guide with Related Problems',
            spacing: { after: 150 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Linear, Quadratic, Simultaneous, and Polynomial Equations',
            spacing: { after: 300 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Generated: ${new Date().toLocaleString()}`,
            spacing: { after: 600 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    // ============== TABLE OF CONTENTS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Table of Contents',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { after: 200 }
        })
    );

    // Part I: Linear Algebra
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Linear Algebra (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const linearProblems = generateRelatedLinearEquations();
    linearProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Quadratic Algebra
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Quadratic Algebra (9 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const quadraticProblems = generateRelatedQuadraticEquations();
    quadraticProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Simultaneous Equations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Simultaneous Equations (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const simultaneousProblems = generateRelatedSimultaneousEquations();
    simultaneousProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 17}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Polynomial Equations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Polynomial Equations (8 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const polynomialProblems = generateRelatedPolynomials();
    polynomialProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 24}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );


     // Part V: Triangle Geometry (NEW)
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Triangle Geometry (12 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const triangleProblems = generateRelatedTriangleProblems();
    triangleProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );



    // Part VI: Circle Geometry (NEW)
   /** documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Circle Geometry (10 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const circleProblems = generateRelatedCircleProblems();
    circleProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );

    */
    // Part VII: Quadrilaterals (NEW)
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Quadrilaterals (10 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const quadrilateralProblems = generateRelatedQuadrilaterals();
    quadrilateralProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );


     // Part VII: Angle Geometry (NEW)
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Angle Geometry (12 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const angleProblems = generateRelatedAngleProblems();
    angleProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );


      // Part VIII: Similarity & Congruence
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Similarity & Congruence (10 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const similarityProblems = generateRelatedSimilarityCongruence();
    similarityProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );

    // ============== PART I: LINEAR ALGEBRA ==============
    console.log('\nProcessing Part I: Linear Algebra...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Linear Algebra',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const linearSolved = solveLinearRelatedProblems();
    linearSolved.forEach((solved, index) => {
        console.log(`  Adding Linear Problem ${index + 1} to document...`);
        
        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 1}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART II: QUADRATIC ALGEBRA ==============
    console.log('\nProcessing Part II: Quadratic Algebra...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Quadratic Algebra',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const quadraticSolved = solveQuadraticRelatedProblems();
    quadraticSolved.forEach((solved, index) => {
        console.log(`  Adding Quadratic Problem ${index + 1} to document...`);
        
        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 8}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART III: SIMULTANEOUS EQUATIONS ==============
    console.log('\nProcessing Part III: Simultaneous Equations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Simultaneous Equations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const simultaneousSolved = solveSimultaneousRelatedProblems();
    simultaneousSolved.forEach((solved, index) => {
        console.log(`  Adding Simultaneous Problem ${index + 1} to document...`);
        
        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 17}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IV: POLYNOMIAL EQUATIONS ==============
  



    // ============== PART V: TRIANGLE GEOMETRY (NEW) ==============
    console.log('\nProcessing Part V: Triangle Geometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Triangle Geometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const triangleSolved = solveTriangleRelatedProblems();
    triangleSolved.forEach((solved, index) => {
        console.log(`  Adding Triangle Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });


    // ============== PART VI: CIRCLE GEOMETRY (NEW) ==============
    /**console.log('\nProcessing Part V: Circle Geometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Circle Geometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const circleSolved = solveCircleRelatedProblems();
    circleSolved.forEach((solved, index) => {
        console.log(`  Adding Circle Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });
    */
     // ============== PART VII: QUADRILATERALS (NEW SECTION) ==============
    console.log('\nProcessing Part V: Quadrilaterals...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Quadrilaterals',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const quadrilateralSolved = solveQuadrilateralRelatedProblems();
    quadrilateralSolved.forEach((solved, index) => {
        console.log(`  Adding Quadrilateral Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });


    
    // ============== PART VIII: ANGLE GEOMETRY (NEW) ==============
    console.log('\nProcessing Part V: Angle Geometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Angle Geometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const angleSolved = solveAngleRelatedProblems();
    angleSolved.forEach((solved, index) => {
        console.log(`  Adding Angle Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

      // ============== PART V: SIMILARITY & CONGRUENCE ==============
    console.log('\nProcessing Part V: Similarity & Congruence...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Similarity & Congruence',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const similaritySolved = solveSimilarityCongruenceRelatedProblems();
    similaritySolved.forEach((solved, index) => {
        console.log(`  Adding Similarity/Congruence Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });


    // ============== CREATE AND SAVE DOCUMENT ==============
    const doc = new docx.Document({
        sections: [{
            properties: {
                page: {
                    margin: {
                        top: 720,    // 0.5 inch
                        right: 720,
                        bottom: 720,
                        left: 720
                    }
                }
            },
            children: documentChildren
        }]
    });

    // Save the document
    try {
        const buffer = await docx.Packer.toBuffer(doc);
        const filename = 'comprehensive_algebra_workbook_with_related_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 31');
        console.log('    - Linear Algebra: 7 problems');
        console.log('    - Quadratic Algebra: 9 problems');
        console.log('    - Simultaneous Equations: 7 problems');
        console.log('    - Polynomial Equations: 8 problems');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Part I: Linear Algebra (Problems 1-7)');
        console.log('  • Part II: Quadratic Algebra (Problems 8-16)');
        console.log('  • Part III: Simultaneous Equations (Problems 17-23)');
        console.log('  • Part IV: Polynomial Equations (Problems 24-31)');
        console.log('\n📄 EXPECTED PAGES: 100+ pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level');
        console.log('  • Helper tips for quick guidance');
        console.log('  • Complete step-by-step solution');
        console.log('  • Enhanced explanations and verification');
        console.log('  • Key concepts and pedagogical notes');
        console.log('  • Alternative solution methods');
        console.log('  • Real-world context and applications');
        console.log('  • Common mistakes and error prevention');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE COMPREHENSIVE DOCUMENT GENERATION ==============

generateComprehensiveDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
