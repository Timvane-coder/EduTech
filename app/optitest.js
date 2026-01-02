
import { EnhancedOpticsWorkbook } from './optic.js';
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

// ============== REFLECTION - RELATED PROBLEMS GENERATOR ==============

function generateRelatedReflection() {
    const relatedProblems = [];

    // Problem 1: Basic Law of Reflection
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Law of Reflection - Basic',
        problem: 'A light ray strikes a plane mirror at an angle of incidence of 35°. What is the angle of reflection?',
        parameters: { theta_incident: 35 },
        type: 'reflection_basic',
        context: { difficulty: 'beginner', topic: 'Law of Reflection' },
        subparts: [
            'Given: Angle of incidence θᵢ = 35°',
            'Law of Reflection: θᵢ = θᵣ',
            'Therefore: θᵣ = 35°',
            'The angle of reflection equals the angle of incidence',
            'Both angles are measured from the normal (perpendicular to surface)'
        ],
        helper: 'Angle of incidence always equals angle of reflection',
        solution: 'θᵣ = 35°',
        realWorldContext: 'Mirrors, periscopes, and reflective surfaces'
    });

    // Problem 2: Plane Mirror Image Distance
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Plane Mirror Image',
        problem: 'An object is placed 2.5 m in front of a plane mirror. How far behind the mirror does the image appear?',
        parameters: { object_distance: 2.5 },
        type: 'reflection_basic',
        context: { difficulty: 'beginner', topic: 'Plane Mirror Properties' },
        subparts: [
            'Given: Object distance from mirror = 2.5 m',
            'For plane mirrors: Image distance = Object distance',
            'Image appears behind mirror',
            'Image distance = 2.5 m behind mirror',
            'Image is virtual, upright, and same size as object'
        ],
        helper: 'Plane mirror image distance equals object distance',
        solution: '2.5 m behind mirror',
        realWorldContext: 'Bathroom mirrors and dressing room mirrors'
    });

    // Problem 3: Multiple Reflections
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Multiple Reflections',
        problem: 'A light ray reflects off two perpendicular mirrors. If the incident angle on the first mirror is 40°, what is the final direction of the ray?',
        parameters: { theta_incident: 40, mirrors: 2 },
        type: 'reflection_basic',
        context: { difficulty: 'intermediate', topic: 'Multiple Reflections' },
        subparts: [
            'Given: θᵢ₁ = 40° on first mirror',
            'First reflection: θᵣ₁ = 40°',
            'Ray hits second mirror (perpendicular)',
            'Second incident angle: θᵢ₂ = 90° - 40° = 50°',
            'Second reflection: θᵣ₂ = 50°',
            'Final ray direction is parallel to original but opposite'
        ],
        helper: 'Apply law of reflection at each surface',
        solution: 'Ray returns parallel to original direction',
        realWorldContext: 'Corner reflectors and retroreflectors'
    });

    // Problem 4: Reflection from Curved Surface
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Reflection Angle Calculation',
        problem: 'A light ray strikes a surface at 25° from the surface itself (not from the normal). What is the angle of reflection measured from the normal?',
        parameters: { angle_from_surface: 25 },
        type: 'reflection_basic',
        context: { difficulty: 'intermediate', topic: 'Angle Measurement' },
        subparts: [
            'Given: Angle from surface = 25°',
            'Angle from normal = 90° - 25° = 65°',
            'This is the angle of incidence: θᵢ = 65°',
            'By law of reflection: θᵣ = θᵢ = 65°',
            'Angle of reflection from normal = 65°'
        ],
        helper: 'Convert surface angle to normal angle: 90° - angle',
        solution: 'θᵣ = 65° from normal',
        realWorldContext: 'Understanding angle measurement conventions'
    });

    // Problem 5: Periscope Design
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Periscope Mirror Angles',
        problem: 'In a periscope, two plane mirrors are parallel to each other. If light enters horizontally, at what angle should each mirror be tilted to make light exit horizontally?',
        parameters: { entry_angle: 0, exit_angle: 0 },
        type: 'reflection_basic',
        context: { difficulty: 'intermediate', topic: 'Periscope Design' },
        subparts: [
            'Goal: Horizontal entry and horizontal exit',
            'Light must turn 90° at first mirror',
            'For 90° turn, mirror must be at 45° to horizontal',
            'First mirror: 45° to horizontal',
            'Second mirror: also 45° to horizontal (parallel)',
            'Light reflects 90° at each mirror, exits horizontally'
        ],
        helper: 'Each mirror at 45° causes 90° direction change',
        solution: 'Both mirrors at 45° to horizontal',
        realWorldContext: 'Periscopes in submarines and tanks'
    });

    return relatedProblems;
}

// ============== REFRACTION - RELATED PROBLEMS GENERATOR ==============

function generateRelatedRefraction() {
    const relatedProblems = [];

    // Problem 1: Basic Snell's Law
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Snell\'s Law - Air to Water',
        problem: 'Light travels from air (n=1.00) into water (n=1.33) at an incident angle of 30°. What is the refracted angle?',
        parameters: { n1: 1.00, n2: 1.33, theta1: 30 },
        type: 'snells_law',
        context: { difficulty: 'beginner', topic: 'Snell\'s Law Basics' },
        subparts: [
            'Given: n₁ = 1.00 (air), n₂ = 1.33 (water), θ₁ = 30°',
            'Snell\'s Law: n₁ sin(θ₁) = n₂ sin(θ₂)',
            '1.00 × sin(30°) = 1.33 × sin(θ₂)',
            '0.5 = 1.33 × sin(θ₂)',
            'sin(θ₂) = 0.5/1.33 = 0.376',
            'θ₂ = arcsin(0.376) = 22.1°',
            'Light bends toward normal (denser medium)'
        ],
        helper: 'Light bends toward normal when entering denser medium',
        solution: 'θ₂ = 22.1°',
        realWorldContext: 'Light entering water, swimming pool depth perception'
    });

    // Problem 2: Glass to Air Refraction
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Snell\'s Law - Glass to Air',
        problem: 'Light exits from glass (n=1.5) into air (n=1.0) at 25° to the normal. What is the angle in air?',
        parameters: { n1: 1.5, n2: 1.0, theta1: 25 },
        type: 'snells_law',
        context: { difficulty: 'beginner', topic: 'Snell\'s Law Application' },
        subparts: [
            'Given: n₁ = 1.5 (glass), n₂ = 1.0 (air), θ₁ = 25°',
            'Snell\'s Law: n₁ sin(θ₁) = n₂ sin(θ₂)',
            '1.5 × sin(25°) = 1.0 × sin(θ₂)',
            '1.5 × 0.423 = sin(θ₂)',
            'sin(θ₂) = 0.634',
            'θ₂ = arcsin(0.634) = 39.3°',
            'Light bends away from normal (less dense medium)'
        ],
        helper: 'Light bends away from normal when entering less dense medium',
        solution: 'θ₂ = 39.3°',
        realWorldContext: 'Light exiting glass windows and lenses'
    });

    // Problem 3: Critical Angle - Water to Air
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Critical Angle Calculation',
        problem: 'Calculate the critical angle for light traveling from water (n=1.33) to air (n=1.00).',
        parameters: { n1: 1.33, n2: 1.00 },
        type: 'critical_angle',
        context: { difficulty: 'intermediate', topic: 'Total Internal Reflection' },
        subparts: [
            'Given: n₁ = 1.33 (water), n₂ = 1.00 (air)',
            'Critical angle formula: sin(θc) = n₂/n₁',
            'sin(θc) = 1.00/1.33 = 0.752',
            'θc = arcsin(0.752) = 48.8°',
            'For θ > 48.8°: Total Internal Reflection occurs',
            'For θ < 48.8°: Light refracts into air'
        ],
        helper: 'Critical angle: sin(θc) = n₂/n₁ when n₁ > n₂',
        solution: 'θc = 48.8°',
        realWorldContext: 'Fiber optics, underwater viewing, diamonds'
    });

    // Problem 4: Diamond Critical Angle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Diamond Critical Angle',
        problem: 'Find the critical angle for diamond (n=2.42) in air (n=1.00). Why do diamonds sparkle?',
        parameters: { n1: 2.42, n2: 1.00 },
        type: 'critical_angle',
        context: { difficulty: 'intermediate', topic: 'Total Internal Reflection in Gems' },
        subparts: [
            'Given: n₁ = 2.42 (diamond), n₂ = 1.00 (air)',
            'sin(θc) = n₂/n₁ = 1.00/2.42 = 0.413',
            'θc = arcsin(0.413) = 24.4°',
            'Very small critical angle!',
            'Light entering diamond is easily trapped',
            'Multiple internal reflections create sparkle',
            'Diamond cut designed to maximize this effect'
        ],
        helper: 'Higher refractive index = smaller critical angle',
        solution: 'θc = 24.4°; small angle causes sparkle',
        realWorldContext: 'Diamond cutting and jewelry design'
    });

    // Problem 5: Apparent Depth
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Apparent Depth in Water',
        problem: 'A coin lies at the bottom of a pool 2.0 m deep. How deep does it appear to someone looking from above?',
        parameters: { d_real: 2.0, n: 1.33 },
        type: 'apparent_depth',
        context: { difficulty: 'intermediate', topic: 'Refraction and Apparent Depth' },
        subparts: [
            'Given: Real depth = 2.0 m, n_water = 1.33',
            'Apparent depth formula: d_apparent = d_real / n',
            'd_apparent = 2.0 / 1.33',
            'd_apparent = 1.50 m',
            'Pool appears shallower by: 2.0 - 1.50 = 0.50 m',
            'Objects underwater appear closer than they are'
        ],
        helper: 'Apparent depth = Real depth / n',
        solution: 'Appears 1.50 m deep',
        realWorldContext: 'Swimming pools, fishing, underwater photography'
    });

    // Problem 6: Fiber Optics - Numerical Aperture
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Fiber Optics - Numerical Aperture',
        problem: 'An optical fiber has core index n=1.52 and cladding index n=1.48. Find the numerical aperture and acceptance angle.',
        parameters: { n_core: 1.52, n_cladding: 1.48 },
        type: 'fiber_optics_numerical_aperture',
        context: { difficulty: 'advanced', topic: 'Fiber Optics' },
        subparts: [
            'Given: n_core = 1.52, n_cladding = 1.48',
            'Numerical Aperture: NA = √(n_core² - n_cladding²)',
            'NA = √(1.52² - 1.48²)',
            'NA = √(2.3104 - 2.1904)',
            'NA = √0.12 = 0.346',
            'Acceptance angle: θₐ = arcsin(NA)',
            'θₐ = arcsin(0.346) = 20.3°',
            'Total acceptance cone = 2 × 20.3° = 40.6°'
        ],
        helper: 'NA determines light-gathering ability of fiber',
        solution: 'NA = 0.346, θₐ = 20.3°',
        realWorldContext: 'Internet fiber optics, medical endoscopy'
    });

    // Problem 7: Prism Dispersion
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Prism Deviation Angle',
        problem: 'A glass prism (n=1.5) has apex angle 60°. Estimate the deviation angle for small incident angles.',
        parameters: { n: 1.5, A: 60 },
        type: 'prism_dispersion',
        context: { difficulty: 'advanced', topic: 'Prism Optics' },
        subparts: [
            'Given: n = 1.5, apex angle A = 60°',
            'Small angle approximation: δ ≈ (n - 1)A',
            'δ ≈ (1.5 - 1) × 60°',
            'δ ≈ 0.5 × 60° = 30°',
            'Light deviates approximately 30°',
            'Different colors deviate by different amounts',
            'This creates dispersion (rainbow effect)'
        ],
        helper: 'For small angles: δ ≈ (n-1)A',
        solution: 'δ ≈ 30°',
        realWorldContext: 'Spectroscopy, rainbows, prism cameras'
    });

    return relatedProblems;
}

// ============== LENSES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedLenses() {
    const relatedProblems = [];

    // Problem 1: Converging Lens - Real Image
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Converging Lens - Real Image',
        problem: 'An object is placed 40 cm from a converging lens with focal length 15 cm. Find the image distance and magnification.',
        parameters: { f: 0.15, d_o: 0.40, focal_length: 0.15, object_distance: 0.40 },
        type: 'thin_lens',
        context: { difficulty: 'beginner', topic: 'Thin Lens Equation' },
        subparts: [
            'Given: f = 15 cm = 0.15 m, dₒ = 40 cm = 0.40 m',
            'Thin lens equation: 1/f = 1/dₒ + 1/dᵢ',
            '1/0.15 = 1/0.40 + 1/dᵢ',
            '6.667 = 2.5 + 1/dᵢ',
            '1/dᵢ = 4.167',
            'dᵢ = 0.24 m = 24 cm',
            'Magnification: M = -dᵢ/dₒ = -0.24/0.40 = -0.6',
            'Image is real (positive dᵢ), inverted (negative M), reduced (|M| < 1)'
        ],
        helper: 'Use 1/f = 1/dₒ + 1/dᵢ; positive f for converging lens',
        solution: 'dᵢ = 24 cm, M = -0.6 (real, inverted, reduced)',
        realWorldContext: 'Camera lenses, projectors'
    });

    // Problem 2: Converging Lens - Virtual Image
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Converging Lens - Magnifying Glass',
        problem: 'An object is 5 cm from a converging lens with focal length 10 cm. Where is the image formed?',
        parameters: { f: 0.10, d_o: 0.05 },
        type: 'thin_lens',
        context: { difficulty: 'intermediate', topic: 'Virtual Image Formation' },
        subparts: [
            'Given: f = 10 cm, dₒ = 5 cm (object inside focal point)',
            '1/f = 1/dₒ + 1/dᵢ',
            '1/10 = 1/5 + 1/dᵢ',
            '0.1 = 0.2 + 1/dᵢ',
            '1/dᵢ = -0.1',
            'dᵢ = -10 cm',
            'Magnification: M = -(-10)/5 = +2',
            'Image is virtual (negative dᵢ), upright (positive M), magnified (M > 1)'
        ],
        helper: 'Object inside focal point creates virtual image',
        solution: 'dᵢ = -10 cm, M = +2 (virtual, upright, magnified)',
        realWorldContext: 'Magnifying glasses, reading glasses'
    });

    // Problem 3: Diverging Lens
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Diverging Lens',
        problem: 'An object is 30 cm from a diverging lens with focal length -20 cm. Find the image position.',
        parameters: { f: -0.20, d_o: 0.30 },
        type: 'thin_lens',
        context: { difficulty: 'intermediate', topic: 'Diverging Lens' },
        subparts: [
            'Given: f = -20 cm (negative for diverging), dₒ = 30 cm',
            '1/f = 1/dₒ + 1/dᵢ',
            '1/(-20) = 1/30 + 1/dᵢ',
            '-0.05 = 0.0333 + 1/dᵢ',
            '1/dᵢ = -0.0833',
            'dᵢ = -12 cm',
            'Magnification: M = -(-12)/30 = +0.4',
            'Image is virtual, upright, reduced',
            'Diverging lenses always create virtual, upright, reduced images'
        ],
        helper: 'Diverging lens: f is negative, always virtual image',
        solution: 'dᵢ = -12 cm, M = +0.4 (virtual, upright, reduced)',
        realWorldContext: 'Correcting nearsightedness, security peepholes'
    });

    // Problem 4: Lens Power (Diopters)
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Optical Power in Diopters',
        problem: 'A lens has focal length 25 cm. What is its power in diopters? What type of lens is it?',
        parameters: { f: 0.25 },
        type: 'power_of_lens',
        context: { difficulty: 'beginner', topic: 'Lens Power' },
        subparts: [
            'Given: f = 25 cm = 0.25 m',
            'Power formula: P = 1/f (f in meters)',
            'P = 1/0.25 = 4 diopters',
            'Positive power → converging lens',
            'This is typical power for reading glasses',
            'Unit: diopters (D) = m⁻¹'
        ],
        helper: 'Power P = 1/f; positive P = converging lens',
        solution: 'P = +4 D (converging lens)',
        realWorldContext: 'Eyeglass prescriptions, contact lenses'
    });

    // Problem 5: Lensmaker's Equation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Lensmaker\'s Equation',
        problem: 'A biconvex lens made of glass (n=1.5) has both radii of curvature equal to 20 cm. Find the focal length.',
        parameters: { n: 1.5, R1: 0.20, R2: -0.20 },
        type: 'lensmakers_equation',
        context: { difficulty: 'advanced', topic: 'Lens Design' },
        subparts: [
            'Given: n = 1.5, R₁ = +20 cm, R₂ = -20 cm',
            'Sign convention: R₁ positive (convex), R₂ negative (convex)',
            'Lensmaker\'s equation: 1/f = (n-1)(1/R₁ - 1/R₂)',
            '1/f = (1.5-1)(1/0.20 - 1/(-0.20))',
            '1/f = 0.5(5 - (-5))',
            '1/f = 0.5 × 10 = 5',
            'f = 0.20 m = 20 cm',
            'Converging lens (positive f)'
        ],
        helper: 'Lensmaker: 1/f = (n-1)(1/R₁ - 1/R₂)',
        solution: 'f = 20 cm',
        realWorldContext: 'Lens manufacturing and design'
    });

    // Problem 6: Two Lens System
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Two Lens System',
        problem: 'Two converging lenses (f₁=10 cm, f₂=20 cm) are separated by 25 cm. An object is 15 cm from the first lens. Find the final image position.',
        parameters: { f1: 0.10, f2: 0.20, d_o1: 0.15, separation: 0.25 },
        type: 'thin_lens',
        context: { difficulty: 'advanced', topic: 'Multiple Lens Systems' },
        subparts: [
            'Given: f₁ = 10 cm, f₂ = 20 cm, dₒ₁ = 15 cm, separation = 25 cm',
            'Lens 1: 1/10 = 1/15 + 1/dᵢ₁',
            '1/dᵢ₁ = 1/10 - 1/15 = 0.0333',
            'dᵢ₁ = 30 cm (after lens 1)',
            'Object for lens 2: dₒ₂ = 25 - 30 = -5 cm (virtual object)',
            'Lens 2: 1/20 = 1/(-5) + 1/dᵢ₂',
            '1/dᵢ₂ = 1/20 + 1/5 = 0.25',
            'dᵢ₂ = 4 cm after lens 2',
            'Total distance from lens 1: 25 + 4 = 29 cm'
        ],
        helper: 'Solve for each lens sequentially',
        solution: 'Final image 29 cm from first lens',
        realWorldContext: 'Microscopes, telescopes, camera zoom lenses'
    });

    // Problem 7: Magnification Chain
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combined Magnification',
        problem: 'A 2 cm tall object is 30 cm from a lens with f=20 cm. What is the image height?',
        parameters: { f: 0.20, d_o: 0.30, h_o: 0.02 },
        type: 'lens_magnification',
        context: { difficulty: 'intermediate', topic: 'Magnification Calculations' },
        subparts: [
            'Given: f = 20 cm, dₒ = 30 cm, hₒ = 2 cm',
            'Find dᵢ: 1/20 = 1/30 + 1/dᵢ',
            '1/dᵢ = 1/20 - 1/30 = 0.0167',
            'dᵢ = 60 cm',
            'Magnification: M = -dᵢ/dₒ = -60/30 = -2',
            'Image height: hᵢ = M × hₒ = -2 × 2 = -4 cm',
            'Image is 4 cm tall, inverted (negative sign)'
        ],
        helper: 'M = -dᵢ/dₒ = hᵢ/hₒ',
        solution: 'hᵢ = 4 cm, inverted',
        realWorldContext: 'Image size calculations in optical systems'
    });

    return relatedProblems;
}

// ============== MIRRORS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedMirrors() {
    const relatedProblems = [];

    // Problem 1: Concave Mirror - Real Image
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Concave Mirror - Real Image',
        problem: 'An object is 30 cm from a concave mirror with focal length 10 cm. Find the image distance and characteristics.',
        parameters: { f: 0.10, d_o: 0.30, R: 0.20 },
        type: 'mirror_equation',
        context: { difficulty: 'beginner', topic: 'Concave Mirror Image Formation' },
        subparts: [
            'Given: f = 10 cm, dₒ = 30 cm',
            'Mirror equation: 1/f = 1/dₒ + 1/dᵢ',
            '1/10 = 1/30 + 1/dᵢ',
            '0.1 = 0.0333 + 1/dᵢ',
            '1/dᵢ = 0.0667',
            'dᵢ = 15 cm',
            'Magnification: M = -dᵢ/dₒ = -15/30 = -0.5',
            'Image is real (positive dᵢ), inverted, reduced'
        ],
        helper: 'Concave mirror can form real or virtual images',
        solution: 'dᵢ = 15 cm, M = -0.5 (real, inverted, reduced)',
        realWorldContext: 'Makeup mirrors, shaving mirrors, telescopes'
    });

    // Problem 2: Concave Mirror - Virtual Image
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Concave Mirror - Magnifying',
        problem: 'An object is 5 cm from a concave mirror with focal length 15 cm. Where is the image?',
        parameters: { f: 0.15, d_o: 0.05 },
        type: 'mirror_equation',
        context: { difficulty: 'intermediate', topic: 'Virtual Image in Concave Mirror' },
        subparts: [
            'Given: f = 15 cm, dₒ = 5 cm (inside focal point)',
            '1/15 = 1/5 + 1/dᵢ',
            '0.0667 = 0.2 + 1/dᵢ',
            '1/dᵢ = -0.1333','dᵢ = -7.5 cm',
            'Magnification: M = -(-7.5)/5 = +1.5',
            'Image is virtual (negative dᵢ), upright, magnified',
            'Object inside focal point → virtual, upright, magnified'
        ],
        helper: 'Object inside focal point of concave mirror gives magnified virtual image',
        solution: 'dᵢ = -7.5 cm, M = +1.5 (virtual, upright, magnified)',
        realWorldContext: 'Makeup mirrors, dental mirrors'
    });

    // Problem 3: Convex Mirror
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Convex Mirror - Security Mirror',
        problem: 'An object is 40 cm from a convex mirror with focal length -15 cm. Find the image position.',
        parameters: { f: -0.15, d_o: 0.40 },
        type: 'mirror_equation',
        context: { difficulty: 'intermediate', topic: 'Convex Mirror Properties' },
        subparts: [
            'Given: f = -15 cm (negative for convex), dₒ = 40 cm',
            '1/(-15) = 1/40 + 1/dᵢ',
            '-0.0667 = 0.025 + 1/dᵢ',
            '1/dᵢ = -0.0917',
            'dᵢ = -10.9 cm',
            'Magnification: M = -(-10.9)/40 = +0.27',
            'Image is virtual, upright, reduced',
            'Convex mirrors always give virtual, upright, reduced images'
        ],
        helper: 'Convex mirror: f negative, always virtual reduced image',
        solution: 'dᵢ = -10.9 cm, M = +0.27 (virtual, upright, reduced)',
        realWorldContext: 'Security mirrors, car side mirrors, store surveillance'
    });

    // Problem 4: Radius of Curvature
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Focal Length from Radius',
        problem: 'A concave mirror has radius of curvature 24 cm. What is its focal length?',
        parameters: { R: 0.24 },
        type: 'mirror_equation',
        context: { difficulty: 'beginner', topic: 'Mirror Focal Length' },
        subparts: [
            'Given: R = 24 cm',
            'Relationship: f = R/2',
            'f = 24/2 = 12 cm',
            'Positive f indicates concave mirror',
            'Focal point is halfway to center of curvature',
            'This is a fundamental property of spherical mirrors'
        ],
        helper: 'Focal length f = R/2 for spherical mirrors',
        solution: 'f = 12 cm',
        realWorldContext: 'Mirror manufacturing specifications'
    });

    // Problem 5: Satellite Dish (Parabolic Mirror)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Parabolic Reflector',
        problem: 'A satellite dish has diameter 2 m and focal length 0.4 m. Where should the receiver be placed?',
        parameters: { f: 0.4, diameter: 2.0 },
        type: 'mirror_equation',
        context: { difficulty: 'intermediate', topic: 'Parabolic Reflectors' },
        subparts: [
            'Given: f = 0.4 m = 40 cm',
            'For parabolic mirror, parallel rays converge at focus',
            'Receiver should be at focal point',
            'Distance from vertex: 40 cm',
            'Parallel incoming signals (from satellite) focus here',
            'Parabolic shape gives perfect focus (no spherical aberration)'
        ],
        helper: 'Parabolic mirrors focus parallel rays to focal point',
        solution: 'Receiver at 40 cm from vertex',
        realWorldContext: 'Satellite dishes, radio telescopes, solar concentrators'
    });

    // Problem 6: Mirror Magnification
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Magnification Analysis',
        problem: 'A concave mirror produces a real image with magnification -3. If the object is 8 cm from the mirror, find focal length.',
        parameters: { M: -3, d_o: 0.08 },
        type: 'mirror_equation',
        context: { difficulty: 'intermediate', topic: 'Working Backwards from Magnification' },
        subparts: [
            'Given: M = -3, dₒ = 8 cm',
            'From M = -dᵢ/dₒ: -3 = -dᵢ/8',
            'dᵢ = 24 cm',
            'Use mirror equation: 1/f = 1/dₒ + 1/dᵢ',
            '1/f = 1/8 + 1/24',
            '1/f = 3/24 + 1/24 = 4/24',
            'f = 6 cm',
            'Concave mirror (positive f)'
        ],
        helper: 'Use M to find dᵢ, then apply mirror equation',
        solution: 'f = 6 cm',
        realWorldContext: 'Mirror design for specific magnification'
    });

    // Problem 7: Spherical Aberration
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Mirror Center vs Edge Focus',
        problem: 'Why does a spherical concave mirror not perfectly focus parallel rays from its edge and center to the same point?',
        parameters: { concept: 'spherical_aberration' },
        type: 'mirror_equation',
        context: { difficulty: 'advanced', topic: 'Spherical Aberration' },
        subparts: [
            'Spherical mirror: constant radius R',
            'Rays near center focus at f ≈ R/2',
            'Rays from edge focus closer to mirror',
            'This is called spherical aberration',
            'Parabolic mirrors eliminate this problem',
            'Solution: use parabolic shape or limit aperture',
            'Quality telescopes use parabolic primary mirrors'
        ],
        helper: 'Spherical shape causes aberration; parabolic is ideal',
        solution: 'Spherical aberration due to geometry',
        realWorldContext: 'Telescope design, optical quality control'
    });

    return relatedProblems;
}

// ============== OPTICAL INSTRUMENTS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedOpticalInstruments() {
    const relatedProblems = [];

    // Problem 1: Compound Microscope
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Compound Microscope Magnification',
        problem: 'A microscope has objective focal length 0.5 cm and eyepiece focal length 2.5 cm. The tube length is 16 cm. Find total magnification.',
        parameters: { f_o: 0.005, f_e: 0.025, L: 0.16, d: 0.25 },
        type: 'compound_microscope',
        context: { difficulty: 'intermediate', topic: 'Microscope Optics' },
        subparts: [
            'Given: fₒ = 0.5 cm, fₑ = 2.5 cm, L = 16 cm, D = 25 cm',
            'Objective magnification: Mₒ = -L/fₒ',
            'Mₒ = -16/0.5 = -32',
            'Eyepiece magnification: Mₑ = D/fₑ',
            'Mₑ = 25/2.5 = 10',
            'Total magnification: M = Mₒ × Mₑ',
            'M = -32 × 10 = -320',
            'Object appears 320× larger, inverted'
        ],
        helper: 'M_total = M_objective × M_eyepiece',
        solution: 'M = -320× (inverted)',
        realWorldContext: 'Biology microscopes, medical diagnosis'
    });

    // Problem 2: Astronomical Telescope
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Refracting Telescope',
        problem: 'A telescope has objective focal length 100 cm and eyepiece focal length 5 cm. Find angular magnification and tube length.',
        parameters: { f_o: 1.00, f_e: 0.05 },
        type: 'telescope',
        context: { difficulty: 'intermediate', topic: 'Telescope Magnification' },
        subparts: [
            'Given: fₒ = 100 cm, fₑ = 5 cm',
            'Angular magnification: M = -fₒ/fₑ',
            'M = -100/5 = -20',
            'Magnifies angular size by 20×',
            'Tube length (for relaxed eye): L = fₒ + fₑ',
            'L = 100 + 5 = 105 cm',
            'Inverted image (negative M) is acceptable for astronomy'
        ],
        helper: 'M = -fₒ/fₑ for refracting telescope',
        solution: 'M = -20×, L = 105 cm',
        realWorldContext: 'Amateur astronomy, professional observatories'
    });

    // Problem 3: Camera f-number
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Camera Aperture (f-number)',
        problem: 'A camera lens has focal length 50 mm and aperture diameter 25 mm. What is the f-number?',
        parameters: { f: 0.050, D: 0.025 },
        type: 'thin_lens',
        context: { difficulty: 'beginner', topic: 'Camera Optics' },
        subparts: [
            'Given: f = 50 mm, D = 25 mm',
            'f-number: f/# = f/D',
            'f/# = 50/25 = 2',
            'Written as f/2 or f2',
            'Lower f-number = larger aperture = more light',
            'f/2 is a "fast" lens (good for low light)',
            'Typical range: f/1.4 (very fast) to f/22 (very slow)'
        ],
        helper: 'f-number = focal length / aperture diameter',
        solution: 'f/2',
        realWorldContext: 'Photography, camera lens specifications'
    });

    // Problem 4: Simple Magnifier
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Magnifying Glass',
        problem: 'A magnifying glass has focal length 10 cm. What is the angular magnification for a person with near point 25 cm?',
        parameters: { f: 0.10, d: 0.25 },
        type: 'lens_magnification',
        context: { difficulty: 'beginner', topic: 'Magnifying Glass' },
        subparts: [
            'Given: f = 10 cm, near point D = 25 cm',
            'Angular magnification (image at near point): M = D/f',
            'M = 25/10 = 2.5',
            'Object appears 2.5× larger',
            'Maximum magnification occurs with image at near point',
            'For relaxed eye (image at ∞): M = D/f = 25/10 = 2.5'
        ],
        helper: 'M = D/f where D is near point distance',
        solution: 'M = 2.5×',
        realWorldContext: 'Reading small print, examining details'
    });

    // Problem 5: Rayleigh Criterion - Telescope Resolution
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Telescope Resolution Limit',
        problem: 'A telescope has aperture 20 cm. What is the minimum resolvable angle for λ = 550 nm (green light)?',
        parameters: { D: 0.20, lambda: 550e-9 },
        type: 'rayleigh_criterion',
        context: { difficulty: 'advanced', topic: 'Resolution Limits' },
        subparts: [
            'Given: D = 20 cm = 0.2 m, λ = 550 nm = 550×10⁻⁹ m',
            'Rayleigh criterion: θₘᵢₙ = 1.22λ/D',
            'θₘᵢₙ = 1.22 × (550×10⁻⁹) / 0.2',
            'θₘᵢₙ = 3.355×10⁻⁶ radians',
            'Convert to arcseconds: θ = (3.355×10⁻⁶) × (206265)',
            'θ ≈ 0.69 arcseconds',
            'Larger aperture → better resolution'
        ],
        helper: 'θₘᵢₙ = 1.22λ/D (Rayleigh criterion)',
        solution: 'θₘᵢₙ = 0.69 arcseconds',
        realWorldContext: 'Telescope design, astronomical observations'
    });

    // Problem 6: Human Eye - Near and Far Points
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Human Eye Accommodation',
        problem: 'A normal eye has near point 25 cm and far point at infinity. What lens power is needed to read at 40 cm?',
        parameters: { near_point: 0.25, reading_distance: 0.40 },
        type: 'power_of_lens',
        context: { difficulty: 'intermediate', topic: 'Vision Correction' },
        subparts: [
            'Given: Natural near point = 25 cm, reading distance = 40 cm',
            'Need lens to make object at 40 cm appear at 25 cm',
            'Object distance: dₒ = 40 cm',
            'Image distance: dᵢ = -25 cm (virtual, same side)',
            '1/f = 1/dₒ + 1/dᵢ = 1/40 + 1/(-25)',
            '1/f = 0.025 - 0.040 = -0.015',
            'f = -66.7 cm = -0.667 m',
            'Power: P = 1/f = -1.5 D',
            'Negative power (diverging lens) for presbyopia correction'
        ],
        helper: 'Use thin lens equation with virtual image at near point',
        solution: 'P = -1.5 D (reading glasses)',
        realWorldContext: 'Reading glasses, presbyopia correction'
    });

    // Problem 7: Binoculars - Prism System
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Binocular Design',
        problem: 'Binoculars are marked "8×40". What does this mean? If objective focal length is 16 cm, find eyepiece focal length.',
        parameters: { magnification: 8, aperture: 40, f_o: 0.16 },
        type: 'telescope',
        context: { difficulty: 'intermediate', topic: 'Binocular Specifications' },
        subparts: [
            'Notation: 8×40 means:',
            '  - 8× magnification',
            '  - 40 mm objective aperture',
            'Given: M = -8 (inverted, but prisms correct it), fₒ = 16 cm',
            'Telescope formula: M = -fₒ/fₑ',
            '-8 = -16/fₑ',
            'fₑ = 2 cm',
            'Prisms fold light path, making binoculars compact',
            'Exit pupil: D_exit = D_objective/M = 40/8 = 5 mm'
        ],
        helper: 'First number is magnification, second is aperture (mm)',
        solution: 'fₑ = 2 cm, exit pupil = 5 mm',
        realWorldContext: 'Binoculars, field glasses, opera glasses'
    });

    return relatedProblems;
}

// ============== WAVE OPTICS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedWaveOptics() {
    const relatedProblems = [];

    // Problem 1: Double-Slit Interference - First Bright Fringe
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Young\'s Double-Slit - First Maximum',
        problem: 'Light (λ=500 nm) passes through slits separated by 0.2 mm. Find the angle to the first bright fringe.',
        parameters: { d: 0.0002, lambda: 500e-9, m: 1 },
        type: 'double_slit',
        context: { difficulty: 'intermediate', topic: 'Double-Slit Interference' },
        subparts: [
            'Given: λ = 500 nm = 500×10⁻⁹ m, d = 0.2 mm = 0.0002 m, m = 1',
            'Bright fringe condition: d sin(θ) = mλ',
            'For m = 1: d sin(θ) = λ',
            'sin(θ) = λ/d = (500×10⁻⁹)/0.0002',
            'sin(θ) = 0.0025',
            'θ = arcsin(0.0025) = 0.143°',
            'θ ≈ 0.00250 radians',
            'Very small angle (typical for interference)'
        ],
        helper: 'Bright fringes: d sin(θ) = mλ',
        solution: 'θ = 0.143° for m=1',
        realWorldContext: 'Demonstrating wave nature of light'
    });

    // Problem 2: Fringe Spacing on Screen
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Double-Slit Fringe Spacing',
        problem: 'Double slits (d=0.5 mm) are 2 m from a screen. For λ=600 nm, find the spacing between bright fringes.',
        parameters: { d: 0.0005, lambda: 600e-9, L: 2.0 },
        type: 'double_slit',
        context: { difficulty: 'intermediate', topic: 'Fringe Spacing Calculation' },
        subparts: [
            'Given: d = 0.5 mm, λ = 600 nm, L = 2 m',
            'Fringe spacing formula: Δy = λL/d',
            'Δy = (600×10⁻⁹ × 2) / 0.0005',
            'Δy = (1.2×10⁻⁶) / (5×10⁻⁴)',
            'Δy = 0.0024 m = 2.4 mm',
            'Adjacent bright fringes are 2.4 mm apart',
            'Smaller slit separation → larger fringe spacing'
        ],
        helper: 'Fringe spacing Δy = λL/d',
        solution: 'Δy = 2.4 mm',
        realWorldContext: 'Interference pattern analysis'
    });

    // Problem 3: Thin Film Interference - Soap Bubble
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Thin Film - Soap Bubble',
        problem: 'A soap bubble (n=1.33) appears red (λ=650 nm) in reflected light. What is the minimum thickness?',
        parameters: { n: 1.33, lambda: 650e-9, m: 0 },
        type: 'thin_film',
        context: { difficulty: 'advanced', topic: 'Thin Film Interference' },
        subparts: [
            'Given: n = 1.33, λ = 650 nm (in air)',
            'Light reflects from both surfaces',
            'Both reflections have phase change (rarer to denser)',
            'For constructive interference: 2nt = mλ (m = 0, 1, 2...)',
            'Minimum thickness: m = 0 doesn\'t work (t=0)',
            'Use m = 1: 2nt = λ',
            't = λ/(2n) = 650×10⁻⁹/(2×1.33)',
            't = 244 nm',
            'This creates red appearance in reflection'
        ],
        helper: 'For thin film: 2nt = (m+1/2)λ or mλ depending on reflections',
        solution: 't = 244 nm',
        realWorldContext: 'Soap bubbles, oil slicks, anti-reflective coatings'
    });

    // Problem 4: Thin Film - Anti-Reflective Coating
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Anti-Reflective Coating',
        problem: 'Design an anti-reflective coating (n=1.38) for glass (n=1.5) at λ=550 nm. Find minimum thickness.',
        parameters: { n: 1.38, n_glass: 1.5, lambda: 550e-9 },
        type: 'thin_film',
        context: { difficulty: 'advanced', topic: 'Optical Coatings' },
        subparts: [
            'Given: n_coating = 1.38, n_glass = 1.5, λ = 550 nm',
            'Want destructive interference in reflection',
            'Top surface: phase change (air to coating, n₁ < n₂)',
            'Bottom surface: phase change (coating to glass, n₁ < n₂)',
            'Both have phase change → total phase from path: 2nt',
            'For destructive: 2nt = (m + 1/2)λ',
            'Minimum: m = 0, so 2nt = λ/2',
            't = λ/(4n) = 550×10⁻⁹/(4×1.38)',
            't = 99.6 nm ≈ 100 nm',
            'Quarter-wave coating'
        ],
        helper: 'Destructive interference eliminates reflection',
        solution: 't = 100 nm (quarter-wavelength)',
        realWorldContext: 'Camera lenses, eyeglasses, telescope optics'
    });

    // Problem 5: Wavelength of Light from Interference
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Finding Wavelength from Interference',
        problem: 'Double slits (d=0.3 mm) produce a third bright fringe at 0.3° on a screen. Find the wavelength.',
        parameters: { d: 0.0003, theta: 0.3, m: 3 },
        type: 'double_slit',
        context: { difficulty: 'intermediate', topic: 'Determining Wavelength' },
        subparts: [
            'Given: d = 0.3 mm = 0.0003 m, θ = 0.3°, m = 3',
            'Bright fringe: d sin(θ) = mλ',
            'λ = d sin(θ)/m',
            'Convert angle: θ = 0.3° = 0.00524 radians',
            'sin(0.3°) = 0.00524',
            'λ = (0.0003 × 0.00524)/3',
            'λ = 5.24×10⁻⁷ m = 524 nm',
            'This is green-yellow light'
        ],
        helper: 'Rearrange d sin(θ) = mλ to solve for λ',
        solution: 'λ = 524 nm (green-yellow)',
        realWorldContext: 'Measuring wavelength of unknown light sources'
    });

    // Problem 6: Michelson Interferometer
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Michelson Interferometer',
        problem: 'A Michelson interferometer uses λ=633 nm. How far must a mirror move to shift the pattern by 100 fringes?',
        parameters: { lambda: 633e-9, fringe_shift: 100 },
        type: 'double_slit',
        context: { difficulty: 'advanced', topic: 'Precision Interferometry' },
        subparts: [
            'Given: λ = 633 nm, fringe shift = 100',
            'Each fringe shift corresponds to path change of λ',
            'Path difference = 2d (light travels to mirror and back)',
            'One fringe shift: 2d = λ, so d = λ/2',
            'For 100 fringes: d = 100 × (λ/2)',
            'd = 50λ = 50 × 633×10⁻⁹',
            'd = 3.165×10⁻⁵ m = 31.65 μm',
            'Mirror moves 31.65 micrometers'
        ],
        helper: 'Each fringe = λ/2 mirror movement',
        solution: 'd = 31.65 μm',
        realWorldContext: 'Precision distance measurement, gravitational wave detection'
    });

    // Problem 7: Coherence and Visibility
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Interference Pattern Visibility',
        problem: 'Why do interference fringes become less visible as slit separation increases? Explain coherence requirements.',
        parameters: { concept: 'coherence' },
        type: 'double_slit',
        context: { difficulty: 'advanced', topic: 'Coherence in Interference' },
        subparts: [
            'Interference requires coherent sources',
            'Coherence length: Lc = λ²/Δλ',
            'For white light: small Lc (few micrometers)',
            'For laser: large Lc (meters to kilometers)',
            'Path difference must be < Lc for visibility',
            'Large slit separation → large path differences',
            'Fringes wash out when path difference > Lc',
            'This is why lasers are preferred for interference'
        ],
        helper: 'Coherence length limits observable interference',
        solution: 'Requires path difference < coherence length',
        realWorldContext: 'Laser selection for interferometry'
    });

    return relatedProblems;
}

// ============== DIFFRACTION - RELATED PROBLEMS GENERATOR ==============

function generateRelatedDiffraction() {
    const relatedProblems = [];

    // Problem 1: Single-Slit Diffraction - First Minimum
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Single-Slit First Dark Fringe',
        problem: 'Light (λ=550 nm) passes through a slit of width 0.1 mm. Find the angle to the first dark fringe.',
        parameters: { a: 0.0001, lambda: 550e-9, m: 1 },
        type: 'single_slit',
        context: { difficulty: 'intermediate', topic: 'Single-Slit Diffraction' },
        subparts: [
            'Given: λ = 550 nm, a = 0.1 mm = 0.0001 m, m = 1',
            'Dark fringe condition: a sin(θ) = mλ',
            'For first dark fringe (m = 1):',
            'sin(θ) = λ/a = (550×10⁻⁹)/0.0001',
            'sin(θ) = 0.0055',
            'θ = arcsin(0.0055) = 0.315°',
            'θ ≈ 0.0055 radians',
            'Central maximum extends from -0.315° to +0.315°'
        ],
        helper: 'Dark fringes: a sin(θ) = mλ',
        solution: 'θ = 0.315° for first minimum',
        realWorldContext: 'Understanding diffraction limits'
    });

    // Problem 2: Single-Slit Central Maximum Width
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Single-Slit Central Maximum',
        problem: 'A slit of width 0.05 mm is 2 m from a screen. For λ=600 nm, find the width of the central bright fringe.',
        parameters: { a: 0.00005, lambda: 600e-9, L: 2.0 },
        type: 'single_slit',
        context: { difficulty: 'intermediate', topic: 'Central Maximum Calculation' },
        subparts: [
            'Given: a = 0.05 mm, λ = 600 nm, L = 2 m',
            'First minimum angle: sin(θ) = λ/a',
            'sin(θ) = (600×10⁻⁹)/0.00005 = 0.012',
            'For small angles: sin(θ) ≈ tan(θ) ≈ θ',
            'Position on screen: y = L tan(θ) ≈ Lθ',
            'y = L(λ/a) = 2 × 0.012 = 0.024 m',
            'Central maximum width: w = 2y = 2 × 0.024 = 0.048 m = 4.8 cm',
            'Narrower slit → wider central maximum'
        ],
        helper: 'Central width = 2λL/a',
        solution: 'w = 4.8 cm',
        realWorldContext: 'Diffraction pattern characterization'
    });

    // Problem 3: Diffraction Grating - First Order
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Diffraction Grating - First Order Maximum',
        problem: 'A grating with 500 lines/mm is illuminated with λ=600 nm light. Find the angle of the first-order maximum.',
        parameters: { lines_per_mm: 500, lambda: 600e-9, m: 1 },
        type: 'diffraction_grating',
        context: { difficulty: 'intermediate', topic: 'Diffraction Grating Basics' },
        subparts: [
            'Given: 500 lines/mm, λ = 600 nm, m = 1',
            'Grating spacing: d = 1/(500×10³) m = 2×10⁻⁶ m',
            'Grating equation: d sin(θ) = mλ',
            'sin(θ) = mλ/d = (1 × 600×10⁻⁹)/(2×10⁻⁶)',
            'sin(θ) = 0.3',
            'θ = arcsin(0.3) = 17.5°',
            'First-order spectrum appears at 17.5°'
        ],
        helper: 'Grating equation: d sin(θ) = mλ',
        solution: 'θ = 17.5°',
        realWorldContext: 'Spectroscopy, wavelength analysis, CD/DVD reading'
    });

    // Problem 4: Diffraction Grating - Maximum Order
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Maximum Observable Order',
        problem: 'A grating has d=2 μm. For λ=500 nm, what is the highest order maximum visible?',
        parameters: { d: 2e-6, lambda: 500e-9 },
        type: 'diffraction_grating',
        context: { difficulty: 'intermediate', topic: 'Order Limits in Gratings' },
        subparts: [
            'Given: d = 2 μm = 2×10⁻⁶ m, λ = 500 nm',
            'Maximum occurs when sin(θ) = 1 (θ = 90°)',
            'Grating equation: d sin(θ) = mλ',
            'Maximum: d(1) = m_max × λ',
            'm_max = d/λ = (2×10⁻⁶)/(500×10⁻⁹)',
            'm_max = 4',
            'Orders visible: m = 0, ±1, ±2, ±3, ±4',
            'Total of 9 maxima (including central m=0)'
        ],
        helper: 'Maximum order: m_max = d/λ (when sin(θ)=1)',
        solution: 'm_max = 4',
        realWorldContext: 'Grating design and spectral range'
    });

    // Problem 5: Resolving Power of Grating
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Grating Resolving Power',
        problem: 'A grating with 10,000 lines is used in second order (m=2). What is its resolving power? Can it separate λ₁=500.0 nm and λ₂=500.1 nm?',
        parameters: { N: 10000, m: 2, lambda1: 500.0e-9, lambda2: 500.1e-9 },
        type: 'diffraction_grating',
        context: { difficulty: 'advanced', topic: 'Spectral Resolution' },
        subparts: [
            'Given: N = 10,000 lines, m = 2, λ₁ = 500.0 nm, λ₂ = 500.1 nm',
            'Resolving power: R = mN',
            'R = 2 × 10,000 = 20,000',
            'This means R = λ/Δλ_min = 20,000',
            'Minimum resolvable Δλ = λ/R = 500/20,000 = 0.025 nm',
            'Given Δλ = 500.1 - 500.0 = 0.1 nm',
            'Since 0.1 nm > 0.025 nm: YES, can be separated',
            'The two wavelengths will appear as distinct peaks'
        ],
        helper: 'Resolving power R = mN',
        solution: 'R = 20,000; can separate the wavelengths',
        realWorldContext: 'High-resolution spectroscopy, astronomical spectroscopy'
    });

    // Problem 6: Circular Aperture Diffraction (Rayleigh Criterion)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Telescope Angular Resolution',
        problem: 'The Hubble Space Telescope has aperture D=2.4 m. What is its resolution limit for λ=550 nm?',
        parameters: { D: 2.4, lambda: 550e-9 },
        type: 'rayleigh_criterion',
        context: { difficulty: 'advanced', topic: 'Optical Resolution' },
        subparts: [
            'Given: D = 2.4 m, λ = 550 nm',
            'Rayleigh criterion: θ_min = 1.22λ/D',
            'θ_min = 1.22 × (550×10⁻⁹)/2.4',
            'θ_min = 2.80×10⁻⁷ radians',
            'Convert to arcseconds: θ = 2.80×10⁻⁷ × (206265)',
            'θ = 0.058 arcseconds',
            'This is 20× better than ground-based telescopes',
            'Diffraction sets ultimate resolution limit'
        ],
        helper: 'For circular aperture: θ_min = 1.22λ/D',
        solution: 'θ_min = 0.058 arcseconds',
        realWorldContext: 'Space telescope design, astronomical imaging'
    });

    // Problem 7: X-ray Diffraction (Bragg's Law)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'X-ray Crystal Diffraction',
        problem: 'X-rays (λ=0.15 nm) diffract from crystal planes separated by d=0.3 nm. Find the first-order diffraction angle.',
        parameters: { lambda: 0.15e-9, d: 0.3e-9, n: 1 },
        type: 'diffraction_grating',
        context: { difficulty: 'advanced', topic: 'X-ray Crystallography' },
        subparts: [
            'Given: λ = 0.15 nm, d = 0.3 nm, n = 1',
            'Bragg\'s Law: nλ = 2d sin(θ)',
            'Note: θ measured from crystal planes, not normal',
            'sin(θ) = nλ/(2d) = (1 × 0.15)/(2 × 0.3)',
            'sin(θ) = 0.25',
            'θ = arcsin(0.25) = 14.5°',
            'This is grazing angle to planes',
            'X-ray diffraction reveals crystal structure'
        ],
        helper: 'Bragg\'s Law: nλ = 2d sin(θ)',
        solution: 'θ = 14.5° (Bragg angle)',
        realWorldContext: 'Protein structure determination, materials science'
    });

    // Problem 8: Diffraction Limit of Microscope
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Microscope Resolution Limit',
        problem: 'A microscope objective has NA=1.4 (numerical aperture). For λ=500 nm, what is the minimum resolvable distance?',
        parameters: { NA: 1.4, lambda: 500e-9 },
        type: 'rayleigh_criterion',
        context: { difficulty: 'advanced', topic: 'Microscope Resolution' },
        subparts: [
            'Given: NA = 1.4, λ = 500 nm',
            'Microscope resolution: d_min = 0.61λ/NA',
            'd_min = 0.61 × (500×10⁻⁹)/1.4',
            'd_min = 218×10⁻⁹ m = 218 nm',
            'Objects closer than 218 nm cannot be resolved',
            'This is the diffraction limit of optical microscopy',
            'Electron microscopes bypass this by using shorter λ',
            'Super-resolution techniques can break this limit'
        ],
        helper: 'Microscope resolution: d_min = 0.61λ/NA',
        solution: 'd_min = 218 nm',
        realWorldContext: 'Microscopy limits, cell biology imaging'
    });

    return relatedProblems;
}

// ============== POLARIZATION - RELATED PROBLEMS GENERATOR ==============

function generateRelatedPolarization() {
    const relatedProblems = [];

    // Problem 1: Malus's Law - Basic
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Malus\'s Law - Single Polarizer',
        problem: 'Unpolarized light of intensity 100 W/m² passes through a polarizer. What is the transmitted intensity?',
        parameters: { I0: 100, polarizers: 1 },
        type: 'malus_law',
        context: { difficulty: 'beginner', topic: 'Polarization Basics' },
        subparts: [
            'Given: I₀ = 100 W/m² (unpolarized)',
            'First polarizer reduces unpolarized light by half',
            'I = I₀/2',
            'I = 100/2 = 50 W/m²',
            'Light becomes linearly polarized',
            'Polarization direction set by polarizer axis',
            'This is independent of polarizer orientation'
        ],
        helper: 'First polarizer: I = I₀/2 for unpolarized light',
        solution: 'I = 50 W/m²',
        realWorldContext: 'Polaroid sunglasses, camera filters'
    });

    // Problem 2: Malus's Law - Two Polarizers
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Malus\'s Law - Crossed Polarizers',
        problem: 'Unpolarized light (I₀=80 W/m²) passes through two polarizers at 45° to each other. Find the final intensity.',
        parameters: { I0: 80, theta: 45 },
        type: 'malus_law',
        context: { difficulty: 'intermediate', topic: 'Multiple Polarizers' },
        subparts: [
            'Given: I₀ = 80 W/m², θ = 45° between polarizers',
            'After first polarizer: I₁ = I₀/2 = 40 W/m²',
            'Malus\'s Law for second: I₂ = I₁ cos²(θ)',
            'I₂ = 40 × cos²(45°)',
            'cos(45°) = 0.707, cos²(45°) = 0.5',
            'I₂ = 40 × 0.5 = 20 W/m²',
            '25% of original intensity transmitted'
        ],
        helper: 'I = I₀ cos²(θ) for polarized light',
        solution: 'I₂ = 20 W/m²',
        realWorldContext: 'LCD displays, optical isolators'
    });

    // Problem 3: Completely Crossed Polarizers
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Crossed Polarizers - Extinction',
        problem: 'Two polarizers are oriented perpendicular to each other. If unpolarized light enters at 100 W/m², what exits?',
        parameters: { I0: 100, theta: 90 },
        type: 'malus_law',
        context: { difficulty: 'beginner', topic: 'Polarizer Extinction' },
        subparts: [
            'Given: I₀ = 100 W/m², θ = 90° (perpendicular)',
            'After first polarizer: I₁ = I₀/2 = 50 W/m²',
            'Second polarizer at 90°: I₂ = I₁ cos²(90°)',
            'cos(90°) = 0',
            'I₂ = 50 × 0² = 0 W/m²',
            'No light transmitted (complete extinction)',
            'This is basis of LCD technology'
        ],
        helper: 'Perpendicular polarizers block all light',
        solution: 'I₂ = 0 (complete extinction)',
        realWorldContext: 'LCD screens, optical shutters'
    });

    // Problem 4: Three Polarizers
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Three Polarizers - Transmission',
        problem: 'Unpolarized light passes through three polarizers at 0°, 45°, and 90°. Starting intensity is 100 W/m². Find final intensity.',
        parameters: { I0: 100, theta1: 0, theta2: 45, theta3: 90 },
        type: 'malus_law',
        context: { difficulty: 'intermediate', topic: 'Multiple Polarizer Systems' },
        subparts: [
            'Given: I₀ = 100 W/m², polarizers at 0°, 45°, 90°',
            'After 1st (0°): I₁ = I₀/2 = 50 W/m²',
            'After 2nd (45° from 1st): I₂ = I₁ cos²(45°)',
            'I₂ = 50 × 0.5 = 25 W/m²',
            'After 3rd (45° from 2nd, 90° from 1st): I₃ = I₂ cos²(45°)',
            'I₃ = 25 × 0.5 = 12.5 W/m²',
            'Middle polarizer allows some light through!',
            'Without middle: I = 0. With middle: I = 12.5 W/m²'
        ],
        helper: 'Apply Malus\'s law sequentially',
        solution: 'I₃ = 12.5 W/m²',
        realWorldContext: 'Optical modulation, light valves'
    });

    // Problem 5: Brewster's Angle - Glass
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Brewster\'s Angle for Glass',
        problem: 'Find Brewster\'s angle for light reflecting from glass (n=1.5) in air (n=1.0).',
        parameters: { n1: 1.0, n2: 1.5 },
        type: 'brewster_angle',
        context: { difficulty: 'intermediate', topic: 'Polarization by Reflection' },
        subparts: [
            'Given: n₁ = 1.0 (air), n₂ = 1.5 (glass)',
            'Brewster\'s angle: tan(θ_B) = n₂/n₁',
            'tan(θ_B) = 1.5/1.0 = 1.5',
            'θ_B = arctan(1.5) = 56.3°',
            'At this angle: reflected light is 100% polarized',
            'Refracted ray perpendicular to reflected ray',
            'θ_B + θ_r = 90° (reflected + refracted angles)'
        ],
        helper: 'Brewster: tan(θ_B) = n₂/n₁',
        solution: 'θ_B = 56.3°',
        realWorldContext: 'Polarizing filters, reducing glare'
    });

    // Problem 6: Brewster's Angle - Water
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Brewster\'s Angle for Water Surface',
        problem: 'Calculate Brewster\'s angle for light reflecting from a water surface (n=1.33).',
        parameters: { n1: 1.0, n2: 1.33 },
        type: 'brewster_angle',
        context: { difficulty: 'intermediate', topic: 'Polarization by Reflection' },
        subparts: [
            'Given: n₁ = 1.0 (air), n₂ = 1.33 (water)',
            'tan(θ_B) = n₂/n₁ = 1.33/1.0 = 1.33',
            'θ_B = arctan(1.33) = 53.1°',
            'Reflected light from water at this angle is polarized',
            'This is why polarizing sunglasses work well near water',
            'They block horizontally polarized reflected glare',
            'Fishermen use polarized glasses to see into water'
        ],
        helper: 'Reflected glare is polarized at Brewster angle',
        solution: 'θ_B = 53.1°',
        realWorldContext: 'Polarizing sunglasses, photography filters'
    });

    // Problem 7: Polarization by Scattering
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Sky Polarization',
        problem: 'Explain why skylight is partially polarized. At what viewing angle relative to the sun is polarization maximum?',
        parameters: { concept: 'scattering_polarization' },
        type: 'malus_law',
        context: { difficulty: 'advanced', topic: 'Polarization by Scattering' },
        subparts: [
            'Sunlight scatters off air molecules (Rayleigh scattering)',
            'Scattered light is polarized perpendicular to scattering plane',
            'Maximum polarization at 90° from sun direction',
            'This is why sky appears polarized',
            'Polarization degree varies with angle',
            'At sunrise/sunset, 90° from sun is overhead',
            'Insects and some animals use this for navigation',
            'Photographers use polarizers to darken blue sky'
        ],
        helper: 'Maximum polarization at 90° scattering angle',
        solution: '90° from sun gives maximum polarization',
        realWorldContext: 'Sky photography, animal navigation'
    });

    return relatedProblems;
}

// ============== SOLVER FUNCTIONS ==============

function solveReflectionRelatedProblems() {
    const problems = generateRelatedReflection();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Reflection Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOpticsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includeRayDiagrams: true,
            includePhysicalInsights: true
        });

        workbook.solveOpticsProblem({
            scenario: problem.problem,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveRefractionRelatedProblems() {
    const problems = generateRelatedRefraction();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Refraction Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOpticsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includeRayDiagrams: true,
            includePhysicalInsights: true
        });

        workbook.solveOpticsProblem({
            scenario: problem.problem,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveLensesRelatedProblems() {
    const problems = generateRelatedLenses();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Lenses Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOpticsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includeRayDiagrams: true,
            includePhysicalInsights: true
        });

        workbook.solveOpticsProblem({
            scenario: problem.problem,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveMirrorsRelatedProblems() {
    const problems = generateRelatedMirrors();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Mirrors Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOpticsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includeRayDiagrams: true,
            includePhysicalInsights: true
        });

        workbook.solveOpticsProblem({
            scenario: problem.problem,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveOpticalInstrumentsRelatedProblems() {
    const problems = generateRelatedOpticalInstruments();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Optical Instruments Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOpticsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includeRayDiagrams: true,
            includePhysicalInsights: true
        });

        workbook.solveOpticsProblem({
            scenario: problem.problem,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveWaveOpticsRelatedProblems() {
    const problems = generateRelatedWaveOptics();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Wave Optics Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOpticsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includeRayDiagrams: true,
            includePhysicalInsights: true
        });

        workbook.solveOpticsProblem({
            scenario: problem.problem,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveDiffractionRelatedProblems() {
    const problems = generateRelatedDiffraction();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Diffraction Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOpticsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includeRayDiagrams: true,
            includePhysicalInsights: true
        });

        workbook.solveOpticsProblem({
            scenario: problem.problem,
            parameters: problem.parameters,
            problemType: problem.type,
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

async function generateComprehensiveOpticsDocument() {
    console.log('Generating Comprehensive Optics Workbook with Related Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Optics Workbook',
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
            text: 'Reflection, Refraction, Lenses, Mirrors, Instruments, Wave Optics, and Diffraction',
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

    // Part I: Reflection
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Reflection (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const reflectionProblems = generateRelatedReflection();
    reflectionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Refraction
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Refraction and Total Internal Reflection (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const refractionProblems = generateRelatedRefraction();
    refractionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 6}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Lenses
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Lenses and Thin Lens Equation (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const lensesProblems = generateRelatedLenses();
    lensesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 13}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Mirrors
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Curved Mirrors (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const mirrorsProblems = generateRelatedMirrors();
    mirrorsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 20}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Optical Instruments
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Optical Instruments (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const instrumentsProblems = generateRelatedOpticalInstruments();
    instrumentsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 27}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VI: Wave Optics
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Wave Optics and Interference (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const waveOpticsProblems = generateRelatedWaveOptics();
    waveOpticsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 34}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VII: Diffraction
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Diffraction and Polarization (8 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const diffractionProblems = generateRelatedDiffraction();
    diffractionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 41}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Add polarization problems
    const polarizationProblems = generateRelatedPolarization();
    polarizationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 49}. ${problem.scenario}: ${problem.problem}`,
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

    // ============== PART I: REFLECTION ==============
    console.log('\nProcessing Part I: Reflection...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Reflection',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const reflectionSolved = solveReflectionRelatedProblems();
    reflectionSolved.forEach((solved, index) => {
        console.log(`  Adding Reflection Problem ${index + 1} to document...`);

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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 }
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART II: REFRACTION ==============
    console.log('\nProcessing Part II: Refraction...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Refraction and Total Internal Reflection',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const refractionSolved = solveRefractionRelatedProblems();
    refractionSolved.forEach((solved, index) => {
        console.log(`  Adding Refraction Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 6}: ${solved.problem.scenario}`,
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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 }
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART III: LENSES ==============
    console.log('\nProcessing Part III: Lenses...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Lenses and Thin Lens Equation',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const lensesSolved = solveLensesRelatedProblems();
    lensesSolved.forEach((solved, index) => {
        console.log(`  Adding Lenses Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 13}: ${solved.problem.scenario}`,
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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 }
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IV: MIRRORS ==============
    console.log('\nProcessing Part IV: Mirrors...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Curved Mirrors',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const mirrorsSolved = solveMirrorsRelatedProblems();
    mirrorsSolved.forEach((solved, index) => {
        console.log(`  Adding Mirrors Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 20}: ${solved.problem.scenario}`,
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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 }
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART V: OPTICAL INSTRUMENTS ==============
    console.log('\nProcessing Part V: Optical Instruments...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Optical Instruments',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const instrumentsSolved = solveOpticalInstrumentsRelatedProblems();
    instrumentsSolved.forEach((solved, index) => {
        console.log(`  Adding Optical Instruments Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 27}: ${solved.problem.scenario}`,
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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 }
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VI: WAVE OPTICS ==============
    console.log('\nProcessing Part VI: Wave Optics...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Wave Optics and Interference',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const waveOpticsSolved = solveWaveOpticsRelatedProblems();
    waveOpticsSolved.forEach((solved, index) => {
        console.log(`  Adding Wave Optics Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 34}: ${solved.problem.scenario}`,
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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 }
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VII: DIFFRACTION AND POLARIZATION ==============
    console.log('\nProcessing Part VII: Diffraction and Polarization...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Diffraction and Polarization',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const diffractionSolved = solveDiffractionRelatedProblems();
    diffractionSolved.forEach((solved, index) => {
        console.log(`  Adding Diffraction Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 41}: ${solved.problem.scenario}`,
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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 }
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // Add polarization problems
    console.log('\nProcessing Polarization Problems...');
    const polarizationSolved = [];
    polarizationProblems.forEach((problem, index) => {
        console.log(`  Solving Polarization Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOpticsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includeRayDiagrams: true,
            includePhysicalInsights: true
        });

        workbook.solveOpticsProblem({
            scenario: problem.problem,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        });

        polarizationSolved.push({
            problem: problem,
            workbook: workbook
        });
    });

    polarizationSolved.forEach((solved, index) => {
        console.log(`  Adding Polarization Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 49}: ${solved.problem.scenario}`,
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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 }
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
        const filename = 'comprehensive_optics_workbook_with_related_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE OPTICS DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 56');
        console.log('    - Reflection: 5 problems');
        console.log('    - Refraction: 7 problems');
        console.log('    - Lenses: 7 problems');
        console.log('    - Mirrors: 7 problems');
        console.log('    - Optical Instruments: 7 problems');
        console.log('    - Wave Optics: 7 problems');
        console.log('    - Diffraction: 8 problems');
        console.log('    - Polarization: 7 problems');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Part I: Reflection (Problems 1-5)');
        console.log('  • Part II: Refraction (Problems 6-12)');
        console.log('  • Part III: Lenses (Problems 13-19)');
        console.log('  • Part IV: Mirrors (Problems 20-26)');
        console.log('  • Part V: Optical Instruments (Problems 27-33)');
        console.log('  • Part VI: Wave Optics (Problems 34-40)');
        console.log('  • Part VII: Diffraction & Polarization (Problems 41-56)');
        console.log('\n📄 EXPECTED PAGES: 150+ pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level');
        console.log('  • Helper tips for quick guidance');
        console.log('  • Complete step-by-step solution');
        console.log('  • Enhanced explanations and verification');
        console.log('  • Physical insights and principles');
        console.log('  • Ray diagram information (where applicable)');
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

// ============== RUN THE COMPREHENSIVE OPTICS DOCUMENT GENERATION ==============

generateComprehensiveOpticsDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
