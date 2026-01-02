import { EnhancedRelativityMathematicalWorkbook } from './relativityworkbook.js';
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

// ============== RELATIVITY PROBLEM GENERATORS ==============

// 1. TIME DILATION RELATED PROBLEMS
function generateRelatedTimeDilation() {
    const relatedProblems = [];

    // Problem 1: GPS Satellite Time Dilation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'GPS Satellite Time Dilation',
        problem: 'A GPS satellite orbits Earth at 3,870 m/s. If 1 day passes on the satellite, how much time passes on Earth?',
        parameters: { 
            v: 3870, 
            tau: 86400  // 1 day in seconds
        },
        type: 'time_dilation',
        context: { difficulty: 'beginner', topic: 'Time Dilation - Low Speed Regime' },
        subparts: [
            'Given: v = 3,870 m/s, τ₀ = 86,400 s (1 day)',
            'Step 1: Calculate β = v/c = 3,870 / 299,792,458',
            'β ≈ 1.291 × 10⁻⁵',
            'Step 2: Calculate γ = 1/√(1 - β²)',
            'γ ≈ 1.00000000008334',
            'Step 3: Apply Δt = γ·τ₀',
            'Δt ≈ 86,400.00000720 s',
            'Time difference: ~7.2 microseconds per day',
            'This small effect accumulates and must be corrected in GPS systems'
        ],
        helper: 'At low speeds, γ ≈ 1, so effects are tiny but measurable',
        solution: 'Δt ≈ 86,400.000007 s (7.2 μs more on Earth)',
        realWorldContext: 'GPS satellites must account for this time dilation to maintain accuracy within meters'
    });

    // Problem 2: Particle Accelerator - Moderate Speed
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Particle Accelerator Time Dilation',
        problem: 'A proton travels at 0.6c in an accelerator. If 1 microsecond passes in the proton\'s frame, how much time passes in the lab?',
        parameters: { 
            v: 0.6 * 299792458,
            tau: 1e-6  // 1 microsecond
        },
        type: 'time_dilation',
        context: { difficulty: 'intermediate', topic: 'Time Dilation - Moderate Speed' },
        subparts: [
            'Given: v = 0.6c, τ₀ = 1 μs',
            'Step 1: β = v/c = 0.6',
            'Step 2: Calculate γ = 1/√(1 - β²)',
            'γ = 1/√(1 - 0.36) = 1/√0.64 = 1/0.8 = 1.25',
            'Step 3: Δt = γ·τ₀ = 1.25 × 1 μs = 1.25 μs',
            'Time difference: 0.25 μs',
            'The lab observer measures 25% more time elapsed'
        ],
        helper: 'At v = 0.6c, time dilation becomes significant (25% effect)',
        solution: 'Δt = 1.25 μs',
        realWorldContext: 'Particle accelerators routinely observe these time dilation effects in unstable particle lifetimes'
    });

    // Problem 3: Cosmic Ray Muon
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Cosmic Ray Muon Lifetime',
        problem: 'A muon traveling at 0.98c has a proper lifetime of 2.2 μs. How far does it travel before decaying as measured from Earth?',
        parameters: { 
            v: 0.98 * 299792458,
            tau: 2.2e-6
        },
        type: 'time_dilation',
        context: { difficulty: 'intermediate', topic: 'Time Dilation - High Speed' },
        subparts: [
            'Given: v = 0.98c, τ₀ = 2.2 μs',
            'Step 1: β = 0.98',
            'Step 2: γ = 1/√(1 - 0.98²) = 1/√0.0396 ≈ 5.025',
            'Step 3: Lab lifetime: Δt = 5.025 × 2.2 μs ≈ 11.055 μs',
            'Step 4: Distance = v × Δt',
            'd = 0.98 × 299,792,458 m/s × 11.055 × 10⁻⁶ s',
            'd ≈ 3,247 m ≈ 3.25 km',
            'Without time dilation: d = 0.98c × 2.2 μs ≈ 646 m',
            'Time dilation allows muons to reach Earth\'s surface'
        ],
        helper: 'High-speed particles live longer in the lab frame',
        solution: 'Distance ≈ 3.25 km',
        realWorldContext: 'This explains why cosmic ray muons created high in the atmosphere reach sea level'
    });

    // Problem 4: Twin Paradox - Space Travel
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Twin Paradox - Interstellar Travel',
        problem: 'An astronaut travels to a star 10 light-years away at 0.9c. How much does she age compared to her twin on Earth?',
        parameters: { 
            v: 0.9 * 299792458,
            t_earth: 2 * 10 / 0.9 * 365.25 * 24 * 3600  // Round trip time
        },
        type: 'twin_paradox',
        context: { difficulty: 'advanced', topic: 'Twin Paradox Application' },
        subparts: [
            'Given: Distance = 10 ly, v = 0.9c',
            'Step 1: Earth time for round trip',
            't_Earth = 2 × 10 ly / 0.9c ≈ 22.22 years',
            'Step 2: Calculate γ',
            'γ = 1/√(1 - 0.81) = 1/√0.19 ≈ 2.294',
            'Step 3: Ship time (proper time)',
            'τ_ship = t_Earth / γ = 22.22 / 2.294 ≈ 9.69 years',
            'Step 4: Age difference',
            'Δage = 22.22 - 9.69 ≈ 12.53 years',
            'The traveling twin ages 12.53 years less'
        ],
        helper: 'The traveling twin experiences less proper time',
        solution: 'Astronaut ages 9.69 years, Earth twin ages 22.22 years',
        realWorldContext: 'Demonstrates time dilation in human terms for interstellar travel'
    });

    // Problem 5: Ultra-Relativistic Particle
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Ultra-Relativistic Proton',
        problem: 'A proton in the LHC travels at 0.999999991c. If it completes one orbit (27 km) in its own frame, how much time passes in the lab?',
        parameters: { 
            v: 0.999999991 * 299792458,
            tau: 27000 / (0.999999991 * 299792458)
        },
        type: 'time_dilation',
        context: { difficulty: 'advanced', topic: 'Extreme Time Dilation' },
        subparts: [
            'Given: v = 0.999999991c, orbit length = 27 km',
            'Step 1: β = 0.999999991',
            'Step 2: γ = 1/√(1 - β²)',
            '1 - β² = 1 - 0.999999982 = 1.8 × 10⁻⁸',
            'γ ≈ 7,454',
            'Step 3: Proper time for one orbit',
            'τ₀ = L/(vγ) in proton frame (length contracted)',
            'Lab time: Δt = L/v ≈ 90 μs',
            'Proton time: τ ≈ 90 μs / 7,454 ≈ 12 ns',
            'Extreme time dilation: factor of ~7,500'
        ],
        helper: 'As v → c, γ → ∞, causing extreme time dilation',
        solution: 'γ ≈ 7,454; extreme time dilation',
        realWorldContext: 'LHC protons experience time 7,500 times slower than lab frame'
    });

    return relatedProblems;
}

// 2. LENGTH CONTRACTION RELATED PROBLEMS
function generateRelatedLengthContraction() {
    const relatedProblems = [];

    // Problem 1: Relativistic Spaceship
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Contracted Spaceship Length',
        problem: 'A 100m spaceship travels at 0.8c. What is its length as measured by a stationary observer?',
        parameters: { 
            v: 0.8 * 299792458,
            L0: 100
        },
        type: 'length_contraction',
        context: { difficulty: 'beginner', topic: 'Length Contraction - Basic' },
        subparts: [
            'Given: L₀ = 100 m, v = 0.8c',
            'Step 1: β = v/c = 0.8',
            'Step 2: γ = 1/√(1 - β²) = 1/√(1 - 0.64)',
            'γ = 1/√0.36 = 1/0.6 ≈ 1.667',
            'Step 3: L = L₀/γ = 100/1.667 ≈ 60 m',
            'The spaceship appears 60 m long',
            'Contraction: 40 m (40% shorter)',
            'Only the dimension along motion contracts'
        ],
        helper: 'Length contraction: L = L₀/γ = L₀√(1 - v²/c²)',
        solution: 'L ≈ 60 m (40% contraction)',
        realWorldContext: 'Moving objects appear compressed in the direction of motion'
    });

    // Problem 2: Muon Path Through Atmosphere
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Atmospheric Thickness in Muon Frame',
        problem: 'From Earth, the atmosphere is 10 km thick. A muon traveling at 0.98c measures what thickness?',
        parameters: { 
            v: 0.98 * 299792458,
            L0: 10000
        },
        type: 'length_contraction',
        context: { difficulty: 'intermediate', topic: 'Length Contraction - Atmosphere' },
        subparts: [
            'Given: L₀ = 10 km = 10,000 m (Earth frame), v = 0.98c',
            'Step 1: β = 0.98',
            'Step 2: γ = 1/√(1 - 0.98²) ≈ 5.025',
            'Step 3: In muon frame, atmosphere is contracted',
            'L = L₀/γ = 10,000/5.025 ≈ 1,990 m ≈ 2 km',
            'From muon\'s perspective: only 2 km to travel',
            'This explains how muons reach Earth\'s surface',
            'Complementary to time dilation explanation'
        ],
        helper: 'Length contraction and time dilation are two views of same effect',
        solution: 'L ≈ 2 km in muon frame',
        realWorldContext: 'Explains cosmic ray muon paradox from muon\'s reference frame'
    });

    // Problem 3: Particle Beam Length
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Contracted Particle Beam',
        problem: 'A 1 m long particle beam travels at 0.95c. What length does a stationary observer measure?',
        parameters: { 
            v: 0.95 * 299792458,
            L0: 1
        },
        type: 'length_contraction',
        context: { difficulty: 'intermediate', topic: 'Length Contraction - High Speed' },
        subparts: [
            'Given: L₀ = 1 m, v = 0.95c',
            'Step 1: β = 0.95',
            'Step 2: γ = 1/√(1 - 0.95²) = 1/√0.0975 ≈ 3.203',
            'Step 3: L = L₀/γ = 1/3.203 ≈ 0.312 m',
            'Contracted length: 31.2 cm',
            'Contraction: 68.8% of original length',
            'Width and height remain 1 m (perpendicular dimensions)'
        ],
        helper: 'Only parallel dimension contracts; perpendicular unchanged',
        solution: 'L ≈ 0.312 m (31.2 cm)',
        realWorldContext: 'Particle beam optics must account for relativistic length changes'
    });

    // Problem 4: Barn-Pole Paradox
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Barn-Pole Paradox',
        problem: 'A 10m pole travels at 0.866c toward a 5m barn. In the barn frame, does the pole fit inside?',
        parameters: { 
            v: 0.866 * 299792458,
            L0: 10
        },
        type: 'length_contraction',
        context: { difficulty: 'advanced', topic: 'Relativity Paradox Resolution' },
        subparts: [
            'Given: Pole L₀ = 10 m, Barn = 5 m, v = 0.866c',
            'Step 1: β = 0.866',
            'Step 2: γ = 1/√(1 - 0.866²) = 1/√0.25 = 2',
            'Step 3: In barn frame',
            'Pole length: L = 10/2 = 5 m',
            'Yes! Pole fits exactly in 5m barn',
            'Step 4: In pole frame',
            'Barn length: L = 5/2 = 2.5 m',
            'Pole doesn\'t fit (pole is 10m in its own frame)',
            'Resolution: Relativity of simultaneity',
            'Events "both ends inside" are not simultaneous in all frames'
        ],
        helper: 'Paradox resolved by relativity of simultaneity',
        solution: 'Fits in barn frame; doesn\'t fit in pole frame (both correct!)',
        realWorldContext: 'Classic thought experiment demonstrating frame-dependent measurements'
    });

    // Problem 5: LHC Proton Perspective
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'LHC Ring from Proton Frame',
        problem: 'The LHC ring is 27 km. A proton at 0.999999991c measures what circumference?',
        parameters: { 
            v: 0.999999991 * 299792458,
            L0: 27000
        },
        type: 'length_contraction',
        context: { difficulty: 'advanced', topic: 'Extreme Length Contraction' },
        subparts: [
            'Given: L₀ = 27 km, v = 0.999999991c',
            'Step 1: β = 0.999999991',
            'Step 2: 1 - β² ≈ 1.8 × 10⁻⁸',
            'γ ≈ 7,454',
            'Step 3: In proton frame',
            'L = L₀/γ = 27,000/7,454 ≈ 3.62 m',
            'The 27 km ring appears only 3.62 m!',
            'Extreme contraction by factor of ~7,500',
            'This is why protons can complete many orbits per second'
        ],
        helper: 'Ultra-relativistic particles see dramatically contracted distances',
        solution: 'L ≈ 3.62 m in proton frame',
        realWorldContext: 'LHC protons "see" the entire 27km ring as just 3.6 meters'
    });

    return relatedProblems;
}

// 3. RELATIVISTIC MOMENTUM RELATED PROBLEMS
function generateRelatedRelativisticMomentum() {
    const relatedProblems = [];

    // Problem 1: Electron Momentum
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Electron Relativistic Momentum',
        problem: 'Calculate the momentum of an electron (m = 9.11×10⁻³¹ kg) traveling at 0.5c.',
        parameters: { 
            m: 9.11e-31,
            v: 0.5 * 299792458
        },
        type: 'relativistic_momentum',
        context: { difficulty: 'beginner', topic: 'Relativistic Momentum - Basic' },
        subparts: [
            'Given: m = 9.11 × 10⁻³¹ kg, v = 0.5c',
            'Step 1: β = 0.5',
            'Step 2: γ = 1/√(1 - 0.25) = 1/√0.75 ≈ 1.155',
            'Step 3: p_rel = γmv',
            'p = 1.155 × 9.11×10⁻³¹ × 1.5×10⁸',
            'p ≈ 1.58 × 10⁻²² kg·m/s',
            'Step 4: Classical momentum',
            'p_classical = mv = 1.37 × 10⁻²² kg·m/s',
            'Relativistic correction: 15.5% higher'
        ],
        helper: 'p = γmv accounts for increased inertia at high speeds',
        solution: 'p ≈ 1.58 × 10⁻²² kg·m/s',
        realWorldContext: 'Electron microscopes and particle accelerators must use relativistic momentum'
    });

    // Problem 2: Proton in Accelerator
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Proton Momentum Increase',
        problem: 'A proton (m = 1.67×10⁻²⁷ kg) accelerates from 0.1c to 0.9c. How does its momentum change?',
        parameters: { 
            m: 1.67e-27,
            v: 0.9 * 299792458,
            v_initial: 0.1 * 299792458
        },
        type: 'relativistic_momentum',
        context: { difficulty: 'intermediate', topic: 'Momentum Change' },
        subparts: [
            'Given: m = 1.67 × 10⁻²⁷ kg',
            'Initial: v₁ = 0.1c, Final: v₂ = 0.9c',
            'Step 1: Initial momentum',
            'γ₁ = 1/√(1 - 0.01) ≈ 1.005',
            'p₁ = 1.005 × 1.67×10⁻²⁷ × 0.1c ≈ 5.03×10⁻²⁰ kg·m/s',
            'Step 2: Final momentum',
            'γ₂ = 1/√(1 - 0.81) ≈ 2.294',
            'p₂ = 2.294 × 1.67×10⁻²⁷ × 0.9c ≈ 1.03×10⁻¹⁸ kg·m/s',
            'Step 3: Change',
            'Δp = p₂ - p₁ ≈ 9.8×10⁻¹⁹ kg·m/s',
            'Momentum increased by factor of ~20'
        ],
        helper: 'Momentum grows rapidly as velocity approaches c',
        solution: 'Δp ≈ 9.8 × 10⁻¹⁹ kg·m/s',
        realWorldContext: 'Shows why accelerating particles near c requires enormous energy'
    });

    // Problem 3: Collision Problem
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Relativistic Collision Conservation',
        problem: 'Two protons (each 1.67×10⁻²⁷ kg) collide head-on at 0.8c. What is the total momentum?',
        parameters: { 
            m: 1.67e-27,
            v: 0.8 * 299792458
        },
        type: 'relativistic_momentum',
        context: { difficulty: 'intermediate', topic: 'Momentum Conservation' },
        subparts: [
            'Given: m = 1.67 × 10⁻²⁷ kg, v = 0.8c each',
            'Head-on collision: v₁ = +0.8c, v₂ = -0.8c',
            'Step 1: Calculate γ',
            'γ = 1/√(1 - 0.64) = 1.667',
            'Step 2: Momentum of each proton',
            'p₁ = +γmv = +1.667 × 1.67×10⁻²⁷ × 0.8c',
            'p₁ ≈ +6.68 × 10⁻¹⁹ kg·m/s',
            'p₂ = -6.68 × 10⁻¹⁹ kg·m/s',
            'Step 3: Total momentum',
            'p_total = p₁ + p₂ = 0',
            'Momentum conserved in center-of-mass frame'
        ],
        helper: 'Momentum is conserved in relativistic collisions',
        solution: 'p_total = 0 (symmetric collision)',
        realWorldContext: 'Particle colliders use relativistic momentum conservation for analysis'
    });

    // Problem 4: Ultra-Relativistic Momentum
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Ultra-Relativistic Regime',
        problem: 'An electron travels at 0.9999c. How does its momentum compare to classical prediction?',
        parameters: { 
            m: 9.11e-31,
            v: 0.9999 * 299792458
        },
        type: 'relativistic_momentum',
        context: { difficulty: 'advanced', topic: 'Ultra-Relativistic Momentum' },
        subparts: [
            'Given: m = 9.11 × 10⁻³¹ kg, v = 0.9999c',
            'Step 1: γ = 1/√(1 - 0.9999²)',
            '1 - β² = 1.9999 × 10⁻⁴',
            'γ ≈ 70.71',
            'Step 2: Relativistic momentum',
            'p_rel = 70.71 × 9.11×10⁻³¹ × 0.9999c',
            'p_rel ≈ 1.93 × 10⁻²¹ kg·m/s',
            'Step 3: Classical momentum',
            'p_class = mv ≈ 2.73 × 10⁻²³ kg·m/s',
            'Step 4: Ratio',
            'p_rel/p_class ≈ 70.7',
            'Relativistic momentum is 70 times larger!'
        ],
        helper: 'Near c, momentum grows without bound',
        solution: 'p_rel ≈ 70 times p_classical',
        realWorldContext: 'Explains why particles can\'t reach light speed - infinite momentum needed'
    });

    // Problem 5: Momentum-Energy Relation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Momentum-Energy Verification',
        problem: 'A particle has momentum 5×10⁻²⁰ kg·m/s and mass 9.11×10⁻³¹ kg. Verify E² = (pc)² + (mc²)².',
        parameters: { 
            m: 9.11e-31,
            p: 5e-20
        },
        type: 'relativistic_momentum',
        context: { difficulty: 'advanced', topic: 'Energy-Momentum Relation' },
        subparts: [
            'Given: p = 5 × 10⁻²⁰ kg·m/s, m = 9.11 × 10⁻³¹ kg',
            'Step 1: Calculate (pc)²',
            '(pc)² = (5×10⁻²⁰ × 3×10⁸)² = 2.25 × 10⁻² J²',
            'Step 2: Calculate (mc²)²',
            '(mc²)² = (9.11×10⁻³¹ × 9×10¹⁶)² = 6.72 × 10⁻²⁸ J²',
            'Step 3: Total energy squared',
            'E² = (pc)² + (mc²)² ≈ 2.25 × 10⁻² J²',
            'E ≈ 1.5 × 10⁻¹¹ J',
            'Step 4: Verify from velocity',
            'v = pc²/E, γ = E/(mc²)',
            'Relationship verified: E² = (pc)² + (mc²)²'
        ],
        helper: 'Energy-momentum relation is fundamental in relativity',
        solution: 'E ≈ 1.5 × 10⁻¹¹ J; relation verified',
        realWorldContext: 'Used in particle physics to determine particle properties'
    });

    return relatedProblems;
}

// 4. MASS-ENERGY EQUIVALENCE RELATED PROBLEMS
function generateRelatedMassEnergyEquivalence() {
    const relatedProblems = [];

    // Problem 1: Small Mass Energy Content
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Energy in Everyday Objects',
        problem: 'Calculate the rest energy of a 1 gram paperclip. How many tons of TNT is this equivalent to?',
        parameters: { 
            m: 0.001  // 1 gram in kg
        },
        type: 'mass_energy',
        context: { difficulty: 'beginner', topic: 'E = mc² - Basic Application' },
        subparts: [
            'Given: m = 1 g = 0.001 kg',
            'Step 1: Apply E = mc²',
            'E = 0.001 × (3×10⁸)²',
            'E = 0.001 × 9×10¹⁶',
            'E = 9 × 10¹³ J = 90 TJ (terajoules)',
            'Step 2: Convert to TNT equivalent',
            '1 ton TNT = 4.184 × 10⁹ J',
            'TNT = 9×10¹³ / 4.184×10⁹',
            'TNT ≈ 21,500 tons',
            'Equivalent to a small nuclear bomb!'
        ],
        helper: 'Even tiny masses contain enormous energy',
        solution: 'E = 9 × 10¹³ J ≈ 21,500 tons TNT',
        realWorldContext: 'Shows why nuclear reactions release so much energy'
    });

    // Problem 2: Electron Rest Energy
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electron Rest Mass Energy',
        problem: 'Calculate the rest energy of an electron (9.11×10⁻³¹ kg) in joules and MeV.',
        parameters: { 
            m: 9.11e-31
        },
        type: 'mass_energy',
        context: { difficulty: 'beginner', topic: 'Particle Rest Energy' },
        subparts: [
            'Given: m_e = 9.11 × 10⁻³¹ kg',
            'Step 1: Calculate E = mc²',
            'E = 9.11×10⁻³¹ × (2.998×10⁸)²',
            'E = 9.11×10⁻³¹ × 8.988×10¹⁶',
            'E ≈ 8.19 × 10⁻¹⁴ J',
            'Step 2: Convert to eV',
            '1 eV = 1.602 × 10⁻¹⁹ J',
            'E = 8.19×10⁻¹⁴ / 1.602×10⁻¹⁹',
            'E ≈ 5.11 × 10⁵ eV = 0.511 MeV',
            'This is a fundamental constant in physics',
            'Used extensively in particle physics calculations'
        ],
        helper: 'Electron rest mass: 0.511 MeV/c² (memorize this!)',
        solution: 'E = 8.19 × 10⁻¹⁴ J = 0.511 MeV',
        realWorldContext: 'Electron-positron pair creation requires minimum 1.022 MeV (2 × 0.511 MeV)'
    });

    // Problem 3: Proton Rest Energy
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Proton Rest Mass Energy',
        problem: 'A proton has mass 1.673×10⁻²⁷ kg. Calculate its rest energy in MeV.',
        parameters: { 
            m: 1.673e-27
        },
        type: 'mass_energy',
        context: { difficulty: 'intermediate', topic: 'Nucleon Rest Energy' },
        subparts: [
            'Given: m_p = 1.673 × 10⁻²⁷ kg',
            'Step 1: E = mc²',
            'E = 1.673×10⁻²⁷ × (2.998×10⁸)²',
            'E ≈ 1.503 × 10⁻¹⁰ J',
            'Step 2: Convert to MeV',
            'E = 1.503×10⁻¹⁰ / 1.602×10⁻¹³',
            'E ≈ 938.3 MeV',
            'Step 3: Compare to electron',
            'Ratio: 938.3 / 0.511 ≈ 1,836',
            'Proton is ~1,836 times more massive than electron'
        ],
        helper: 'Proton rest mass: 938.3 MeV/c²',
        solution: 'E = 938.3 MeV',
        realWorldContext: 'Proton mass sets the scale for nuclear physics'
    });

    // Problem 4: Nuclear Binding Energy
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Nuclear Binding Energy',
        problem: 'Helium-4 nucleus has 2 protons and 2 neutrons. If the bound nucleus has mass 6.644×10⁻²⁷ kg, find the binding energy.',
        parameters: { 
            m_proton: 1.673e-27,
            m_neutron: 1.675e-27,
            m_He4: 6.644e-27
        },
        type: 'mass_energy',
        context: { difficulty: 'intermediate', topic: 'Nuclear Binding Energy' },
        subparts: [
            'Given: 2 protons + 2 neutrons → He-4',
            'm_p = 1.673×10⁻²⁷ kg, m_n = 1.675×10⁻²⁷ kg',
            'm_He4 = 6.644×10⁻²⁷ kg',
            'Step 1: Total mass of separated nucleons',
            'm_total = 2(1.673×10⁻²⁷) + 2(1.675×10⁻²⁷)',
            'm_total = 6.696 × 10⁻²⁷ kg',
            'Step 2: Mass defect',
            'Δm = 6.696×10⁻²⁷ - 6.644×10⁻²⁷',
            'Δm = 5.2 × 10⁻²⁹ kg',
            'Step 3: Binding energy',
            'BE = Δm × c² = 5.2×10⁻²⁹ × 9×10¹⁶',
            'BE = 4.68 × 10⁻¹² J = 29.2 MeV',
            'Step 4: Binding energy per nucleon',
            'BE/nucleon = 29.2 / 4 = 7.3 MeV',
            'This energy must be supplied to break apart He-4'
        ],
        helper: 'Mass defect converts to binding energy',
        solution: 'BE = 29.2 MeV (7.3 MeV per nucleon)',
        realWorldContext: 'Explains stability of helium nucleus and energy from fusion'
    });

    // Problem 5: Annihilation Energy
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Electron-Positron Annihilation',
        problem: 'An electron and positron (each 9.11×10⁻³¹ kg) annihilate. What is the total energy of the photons produced?',
        parameters: { 
            m: 9.11e-31
        },
        type: 'mass_energy',
        context: { difficulty: 'intermediate', topic: 'Particle Annihilation' },
        subparts: [
            'Given: m_e = m_e+ = 9.11 × 10⁻³¹ kg',
            'Step 1: Total mass',
            'm_total = 2 × 9.11×10⁻³¹ = 1.822×10⁻³⁰ kg',
            'Step 2: Energy from E = mc²',
            'E = 1.822×10⁻³⁰ × 9×10¹⁶',
            'E = 1.64 × 10⁻¹³ J',
            'Step 3: Convert to MeV',
            'E = 1.64×10⁻¹³ / 1.602×10⁻¹³',
            'E = 1.022 MeV',
            'Step 4: Two photons produced',
            'Each photon: 0.511 MeV',
            'Conservation: E_total = 2 × E_rest',
            'Photons emitted in opposite directions (momentum conservation)'
        ],
        helper: 'Total annihilation: all mass → energy',
        solution: 'E_total = 1.022 MeV (two 0.511 MeV photons)',
        realWorldContext: 'Used in PET scans (Positron Emission Tomography)'
    });

    // Problem 6: Solar Energy Production
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Solar Fusion Energy',
        problem: 'The Sun converts 4 million tons of mass to energy per second. What is the power output?',
        parameters: { 
            m: 4e9  // 4 million tons = 4×10⁹ kg
        },
        type: 'mass_energy',
        context: { difficulty: 'advanced', topic: 'Stellar Energy Production' },
        subparts: [
            'Given: Δm = 4 × 10⁶ tons/s = 4 × 10⁹ kg/s',
            'Step 1: Energy per second',
            'E = mc² = 4×10⁹ × 9×10¹⁶',
            'E = 3.6 × 10²⁶ J/s',
            'Step 2: Power',
            'P = 3.6 × 10²⁶ W',
            'This is the Sun\'s luminosity',
            'Step 3: Compare to human power usage',
            'World power ≈ 2 × 10¹³ W',
            'Sun produces 18 trillion times more',
            'Step 4: Energy reaching Earth',
            'Solar constant ≈ 1,360 W/m² at Earth'
        ],
        helper: 'Nuclear fusion in stars converts mass to energy',
        solution: 'P = 3.6 × 10²⁶ W (Sun\'s luminosity)',
        realWorldContext: 'All solar energy comes from mass-energy conversion via fusion'
    });

    // Problem 7: Kinetic Energy at High Speed
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Relativistic Kinetic Energy',
        problem: 'An electron accelerates from rest to 0.9c. How much energy was added?',
        parameters: { 
            m: 9.11e-31,
            v: 0.9 * 299792458
        },
        type: 'relativistic_energy',
        context: { difficulty: 'advanced', topic: 'Relativistic Kinetic Energy' },
        subparts: [
            'Given: m = 9.11×10⁻³¹ kg, v = 0.9c',
            'Step 1: Rest energy',
            'E₀ = mc² = 8.19 × 10⁻¹⁴ J = 0.511 MeV',
            'Step 2: Lorentz factor',
            'γ = 1/√(1 - 0.81) = 1/√0.19 ≈ 2.294',
            'Step 3: Total energy',
            'E = γmc² = 2.294 × 0.511 = 1.172 MeV',
            'Step 4: Kinetic energy',
            'K = E - E₀ = 1.172 - 0.511',
            'K = 0.661 MeV',
            'Step 5: Compare to classical',
            'K_classical = ½mv² = 0.5 × 0.511 × 0.81',
            'K_classical = 0.207 MeV',
            'Relativistic is 3.2× larger!'
        ],
        helper: 'K = (γ - 1)mc² at relativistic speeds',
        solution: 'K = 0.661 MeV',
        realWorldContext: 'Particle accelerators must account for relativistic energy increase'
    });

    return relatedProblems;
}

// 5. LORENTZ TRANSFORMATIONS RELATED PROBLEMS
function generateRelatedLorentzTransformations() {
    const relatedProblems = [];

    // Problem 1: Basic Coordinate Transformation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Lorentz Transformation',
        problem: 'A frame S\' moves at 0.6c relative to S. An event occurs at x=100m, t=1μs in S. Find coordinates in S\'.',
        parameters: { 
            x: 100,
            t: 1e-6,
            v: 0.6 * 299792458
        },
        type: 'lorentz_transformation',
        context: { difficulty: 'beginner', topic: 'Lorentz Transformation - Basic' },
        subparts: [
            'Given: x = 100 m, t = 1 μs, v = 0.6c (S\' moving)',
            'Step 1: Calculate γ',
            'β = 0.6',
            'γ = 1/√(1 - 0.36) = 1/0.8 = 1.25',
            'Step 2: Transform position',
            'x\' = γ(x - vt)',
            'x\' = 1.25(100 - 0.6×3×10⁸×10⁻⁶)',
            'x\' = 1.25(100 - 180) = -100 m',
            'Step 3: Transform time',
            't\' = γ(t - vx/c²)',
            't\' = 1.25(10⁻⁶ - 0.6×100/c)',
            't\' = 1.25(10⁻⁶ - 2×10⁻⁷)',
            't\' = 1.25 × 0.8×10⁻⁶ = 1.0 μs',
            'Coordinates in S\': x\' = -100 m, t\' = 1.0 μs'
        ],
        helper: 'x\' = γ(x - vt), t\' = γ(t - vx/c²)',
        solution: 'x\' = -100 m, t\' = 1.0 μs',
        realWorldContext: 'Foundation for understanding how events appear in different frames'
    });

    // Problem 2: Relativity of Simultaneity
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Relativity of Simultaneity',
        problem: 'Two events occur simultaneously in frame S at x₁=0, x₂=300m at t=0. In frame S\' (v=0.8c), are they simultaneous?',
        parameters: { 
            x1: 0,
            x2: 300,
            t: 0,
            v: 0.8 * 299792458
        },
        type: 'lorentz_transformation',
        context: { difficulty: 'intermediate', topic: 'Relativity of Simultaneity' },
        subparts: [
            'Given: Event 1: (x₁=0, t=0), Event 2: (x₂=300m, t=0)',
            'Frame S\' moves at v = 0.8c',
            'Step 1: γ = 1/√(1 - 0.64) = 1.667',
            'Step 2: Transform Event 1',
            't₁\' = γ(t - vx₁/c²) = 1.667(0 - 0) = 0',
            'Step 3: Transform Event 2',
            't₂\' = γ(t - vx₂/c²)',
            't₂\' = 1.667(0 - 0.8×300/c)',
            't₂\' = 1.667 × (-240/c)',
            't₂\' = -1.667 × 8×10⁻⁷ = -1.33 μs',
            'Step 4: Time difference in S\'',
            'Δt\' = t₂\' - t₁\' = -1.33 μs',
            'NOT simultaneous in S\'!',
            'Event 2 happens 1.33 μs BEFORE Event 1 in S\''
        ],
        helper: 'Simultaneity is relative - depends on reference frame',
        solution: 'Not simultaneous; Δt\' = -1.33 μs',
        realWorldContext: 'Shows that "at the same time" is frame-dependent'
    });

    // Problem 3: Spacetime Interval Invariance
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Spacetime Interval Invariance',
        problem: 'Verify that spacetime interval is invariant for event at x=500m, t=2μs when S\' moves at 0.5c.',
        parameters: { 
            x: 500,
            t: 2e-6,
            v: 0.5 * 299792458
        },
        type: 'spacetime_interval',
        context: { difficulty: 'intermediate', topic: 'Spacetime Interval' },
        subparts: [
            'Given: x = 500 m, t = 2 μs, v = 0.5c',
            'Step 1: Calculate interval in S',
            's² = c²t² - x²',
            's² = (3×10⁸)²(2×10⁻⁶)² - 500²',
            's² = 3.6×10⁵ - 2.5×10⁵ = 1.1×10⁵ m²',
            'Step 2: Transform to S\'',
            'γ = 1/√(1 - 0.25) = 1.155',
            'x\' = 1.155(500 - 0.5c×2×10⁻⁶) = 1.155(500 - 300)',
            'x\' = 231 m',
            't\' = 1.155(2×10⁻⁶ - 0.5×500/c)',
            't\' = 1.155(2×10⁻⁶ - 8.33×10⁻⁷) = 1.348 μs',
            'Step 3: Calculate interval in S\'',
            's\'² = c²t\'² - x\'²',
            's\'² = (3×10⁸)²(1.348×10⁻⁶)² - 231²',
            's\'² ≈ 1.1×10⁵ m²',
            'Step 4: Verify',
            's² = s\'² ✓ Invariant!'
        ],
        helper: 'Spacetime interval s² = c²Δt² - Δx² is invariant',
        solution: 's² = 1.1×10⁵ m² (same in all frames)',
        realWorldContext: 'Fundamental invariant in special relativity - like distance in Euclidean space'
    });

    // Problem 4: Velocity Addition
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Relativistic Velocity Addition',
        problem: 'A rocket moving at 0.8c relative to Earth fires a missile at 0.7c. What is the missile speed relative to Earth?',
        parameters: { 
            v1: 0.8 * 299792458,
            v2: 0.7 * 299792458
        },
        type: 'relativistic_velocity',
        context: { difficulty: 'intermediate', topic: 'Velocity Addition Formula' },
        subparts: [
            'Given: v_rocket = 0.8c, v_missile_rocket = 0.7c',
            'Need: v_missile_earth',
            'Step 1: Velocity addition formula',
            'v = (v₁ + v₂)/(1 + v₁v₂/c²)',
            'Step 2: In beta form',
            'β₁ = 0.8, β₂ = 0.7',
            'β = (β₁ + β₂)/(1 + β₁β₂)',
            'β = (0.8 + 0.7)/(1 + 0.8×0.7)',
            'β = 1.5/(1 + 0.56) = 1.5/1.56',
            'β ≈ 0.962',
            'Step 3: Convert to velocity',
            'v = 0.962c ≈ 2.88 × 10⁸ m/s',
            'Step 4: Compare to classical',
            'v_classical = 0.8c + 0.7c = 1.5c (impossible!)',
            'Relativity ensures v < c'
        ],
        helper: 'Velocities don\'t add linearly at high speeds',
        solution: 'v ≈ 0.962c',
        realWorldContext: 'Ensures nothing exceeds light speed, preserving causality'
    });

    // Problem 5: Length Contraction via Lorentz Transform
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Deriving Length Contraction',
        problem: 'A rod at rest in S\' has ends at x₁\'=0 and x₂\'=10m at t\'=0. Find its length in S (v=0.6c).',
        parameters: { 
            x1_prime: 0,
            x2_prime: 10,
            t_prime: 0,
            v: 0.6 * 299792458
        },
        type: 'lorentz_transformation',
        context: { difficulty: 'advanced', topic: 'Length Contraction Derivation' },
        subparts: [
            'Given: Rod in S\' from x₁\'=0 to x₂\'=10m at t\'=0',
            'S\' moves at v = 0.6c relative to S',
            'Step 1: Inverse Lorentz transformation',
            'γ = 1.25',
            'x = γ(x\' + vt\')',
            'Step 2: Transform both ends',
            'At t\'=0:',
            'x₁ = 1.25(0 + 0) = 0',
            'x₂ = 1.25(10 + 0) = 12.5 m',
            'Step 3: BUT these are at different times in S!',
            't₁ = γ(t\' + vx₁\'/c²) = 0',
            't₂ = γ(0 + 0.6×10/c) = 1.25 × 2×10⁻⁸ s',
            'Step 4: Measure simultaneously in S at t=0',
            'Need x₂ when t₂=0 (simultaneous measurement)',
            'Moving at v, position changes',
            'Proper analysis: L = L₀/γ = 10/1.25 = 8m',
            'This is length contraction formula'
        ],
        helper: 'Must measure endpoints simultaneously in each frame',
        solution: 'L = 8 m in frame S',
        realWorldContext: 'Shows how length contraction emerges from Lorentz transformations'
    });

    // Problem 6: Doppler Effect via Transformation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Relativistic Doppler Effect',
        problem: 'A source emits light at 600 nm while moving toward you at 0.6c. What wavelength do you observe?',
        parameters: { 
            lambda_source: 600e-9,
            v: 0.6 * 299792458,
            approaching: true
        },
        type: 'doppler_effect',
        context: { difficulty: 'intermediate', topic: 'Relativistic Doppler Effect' },
        subparts: [
            'Given: λ₀ = 600 nm, v = 0.6c (approaching)',
            'Step 1: Frequency in source frame',
            'f₀ = c/λ₀ = 3×10⁸/600×10⁻⁹',
            'f₀ = 5 × 10¹⁴ Hz',
            'Step 2: Doppler formula (approaching)',
            'f = f₀√((1 + β)/(1 - β))',
            'f = 5×10¹⁴√((1.6)/(0.4))',
            'f = 5×10¹⁴√4 = 1×10¹⁵ Hz',
            'Step 3: Observed wavelength',
            'λ = c/f = 3×10⁸/10¹⁵',
            'λ = 3×10⁻⁷ m = 300 nm',
            'Step 4: Shift analysis',
            'Blueshift: 600 nm → 300 nm',
            'Factor of 2 decrease (higher energy)'
        ],
        helper: 'Approaching: blueshift; Receding: redshift',
        solution: 'λ_observed = 300 nm (blueshift)',
        realWorldContext: 'Used in astronomy to measure velocities of stars and galaxies'
    });

    // Problem 7: Time Dilation via Lorentz Transform
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Time Dilation from Lorentz Transform',
        problem: 'A clock at rest at x\'=0 in S\' ticks at t\'=0 and t\'=1s. What are the tick times in S (v=0.8c)?',
        parameters: { 
            x_prime: 0,
            t1_prime: 0,
            t2_prime: 1,
            v: 0.8 * 299792458
        },
        type: 'lorentz_transformation',
        context: { difficulty: 'advanced', topic: 'Time Dilation Derivation' },
        subparts: [
            'Given: Clock at x\'=0 ticks at t\'=0 and t\'=1s',
            'Frame S\' moves at v = 0.8c',
            'Step 1: γ = 1/√(1-0.64) = 1.667',
            'Step 2: Transform first tick',
            't₁ = γ(t₁\' + vx\'/c²) = 1.667(0 + 0) = 0',
            'x₁ = γ(x\' + vt₁\') = 0',
            'Step 3: Transform second tick',
            't₂ = γ(t₂\' + vx\'/c²)',
            't₂ = 1.667(1 + 0) = 1.667 s',
            'x₂ = γ(0 + 0.8c×1) = 1.667 × 0.8c',
            'Step 4: Time between ticks in S',
            'Δt = t₂ - t₁ = 1.667 s',
            'Step 5: Verify time dilation',
            'Δt = γΔt\' = 1.667 × 1 = 1.667 s ✓',
            'Moving clock ticks slower'
        ],
        helper: 'Time dilation: Δt = γΔτ where Δτ is proper time',
        solution: 'Δt = 1.667 s in frame S',
        realWorldContext: 'Shows how time dilation emerges from Lorentz transformations'
    });

    return relatedProblems;
}

// ============== SOLVER FUNCTIONS ==============

function solveTimeDilationRelatedProblems() {
    const problems = generateRelatedTimeDilation();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Time Dilation Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedRelativityMathematicalWorkbook({
            theme: 'physics',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includePhysicalInterpretation: true,
            includeUnitsAnalysis: true
        });

        workbook.solveRelativityProblem({
            scenario: problem.problem,
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

function solveLengthContractionRelatedProblems() {
    const problems = generateRelatedLengthContraction();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Length Contraction Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedRelativityMathematicalWorkbook({
            theme: 'physics',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includePhysicalInterpretation: true,
            includeUnitsAnalysis: true
        });

        workbook.solveRelativityProblem({
            scenario: problem.problem,
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

function solveRelativisticMomentumRelatedProblems() {
    const problems = generateRelatedRelativisticMomentum();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Relativistic Momentum Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedRelativityMathematicalWorkbook({
            theme: 'physics',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includePhysicalInterpretation: true,
            includeUnitsAnalysis: true
        });

        workbook.solveRelativityProblem({
            scenario: problem.problem,
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

function solveMassEnergyEquivalenceRelatedProblems() {
    const problems = generateRelatedMassEnergyEquivalence();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Mass-Energy Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedRelativityMathematicalWorkbook({
            theme: 'physics',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includePhysicalInterpretation: true,
            includeUnitsAnalysis: true
        });

        workbook.solveRelativityProblem({
            scenario: problem.problem,
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

function solveLorentzTransformationsRelatedProblems() {
    const problems = generateRelatedLorentzTransformations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Lorentz Transformation Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedRelativityMathematicalWorkbook({
            theme: 'physics',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            includePhysicalInterpretation: true,
            includeUnitsAnalysis: true
        });

        workbook.solveRelativityProblem({
            scenario: problem.problem,
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

// ============== COMPREHENSIVE RELATIVITY DOCUMENT GENERATION ==============

async function generateComprehensiveRelativityDocument() {
    console.log('Generating Comprehensive Special Relativity Workbook with Related Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Special Relativity Workbook',
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
            text: 'Time Dilation, Length Contraction, Momentum, Energy, and Lorentz Transformations',
            spacing: { after: 300 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Generated: ${new Date().toLocaleString()}`,
            spacing: { after: 400 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Speed of Light: c = 299,792,458 m/s',
            spacing: { after: 600 },
            alignment: docx.AlignmentType.CENTER,
            bold: true
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

    // Part I: Time Dilation
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Time Dilation (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const timeDilationProblems = generateRelatedTimeDilation();
    timeDilationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Length Contraction
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Length Contraction (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const lengthContractionProblems = generateRelatedLengthContraction();
    lengthContractionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 6}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Relativistic Momentum
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Relativistic Momentum (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const momentumProblems = generateRelatedRelativisticMomentum();
    momentumProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 11}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Mass-Energy Equivalence
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Mass-Energy Equivalence (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const massEnergyProblems = generateRelatedMassEnergyEquivalence();
    massEnergyProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 16}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Lorentz Transformations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Lorentz Transformations (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const lorentzProblems = generateRelatedLorentzTransformations();
    lorentzProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 23}. ${problem.scenario}: ${problem.problem}`,
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

    // ============== INTRODUCTION TO SPECIAL RELATIVITY ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Introduction to Special Relativity',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Fundamental Postulates',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '1. The laws of physics are the same in all inertial reference frames.',
            spacing: { after: 100 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: '2. The speed of light in vacuum is the same in all inertial reference frames, regardless of the motion of the source or observer: c = 299,792,458 m/s.',
            spacing: { after: 200 }
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Key Concepts',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 200 }
        })
    );

    const keyConcepts = [
        'Proper Time (τ₀): Time measured in the rest frame of an object',
        'Proper Length (L₀): Length measured in the rest frame of an object',
        'Lorentz Factor (γ): γ = 1/√(1 - v²/c²), quantifies relativistic effects',
        'β Parameter: β = v/c, dimensionless velocity',
        'Invariant Quantities: Spacetime interval, rest mass, electric charge',
        'Frame-Dependent Quantities: Time intervals, lengths, simultaneity'
    ];

    keyConcepts.forEach(concept => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${concept}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: 'Essential Formulas',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 200 }
        })
    );

    const essentialFormulas = [
        'Lorentz Factor: γ = 1/√(1 - v²/c²)',
        'Time Dilation: Δt = γτ₀',
        'Length Contraction: L = L₀/γ',
        'Relativistic Momentum: p = γmv',
        'Total Energy: E = γmc²',
        'Rest Energy: E₀ = mc²',
        'Kinetic Energy: K = (γ - 1)mc²',
        'Energy-Momentum Relation: E² = (pc)² + (mc²)²',
        'Velocity Addition: v = (v₁ + v₂)/(1 + v₁v₂/c²)',
        'Lorentz Transformation: x\' = γ(x - vt), t\' = γ(t - vx/c²)'
    ];

    essentialFormulas.forEach(formula => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${formula}`,
                spacing: { after: 100 }
            })
        );
    });

    // ============== PART I: TIME DILATION ==============
    console.log('\nProcessing Part I: Time Dilation...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Time Dilation',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Physical Principle: Moving clocks run slower. Time passes more slowly in a moving reference frame relative to a stationary observer. This is not an optical illusion but a real physical effect that has been verified experimentally countless times.',
            spacing: { after: 300 },
            italics: true
        })
    );

    const timeDilationSolved = solveTimeDilationRelatedProblems();
    timeDilationSolved.forEach((solved, index) => {
        console.log(`  Adding Time Dilation Problem ${index + 1} to document...`);

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
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART II: LENGTH CONTRACTION ==============
    console.log('\nProcessing Part II: Length Contraction...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Length Contraction',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Physical Principle: Moving objects are contracted in the direction of motion. Length contraction (Lorentz contraction) states that objects moving at relativistic speeds appear shorter along the direction of motion. Only the parallel dimension contracts; perpendicular dimensions remain unchanged.',
            spacing: { after: 300 },
            italics: true
        })
    );

    const lengthContractionSolved = solveLengthContractionRelatedProblems();
    lengthContractionSolved.forEach((solved, index) => {
        console.log(`  Adding Length Contraction Problem ${index + 1} to document...`);

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
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART III: RELATIVISTIC MOMENTUM ==============
    console.log('\nProcessing Part III: Relativistic Momentum...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Relativistic Momentum',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Physical Principle: Momentum increases without bound as velocity approaches c. Classical momentum p = mv fails at high speeds. Relativistic momentum p = γmv accounts for the increased inertia of moving objects. As v → c, momentum → ∞, making it impossible to accelerate massive objects to light speed.',
            spacing: { after: 300 },
            italics: true
        })
    );

    const momentumSolved = solveRelativisticMomentumRelatedProblems();
    momentumSolved.forEach((solved, index) => {
        console.log(`  Adding Relativistic Momentum Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 11}: ${solved.problem.scenario}`,
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
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IV: MASS-ENERGY EQUIVALENCE ==============
    console.log('\nProcessing Part IV: Mass-Energy Equivalence...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Mass-Energy Equivalence',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Physical Principle: Mass and energy are equivalent (E = mc²). Einstein\'s famous equation reveals that mass is a concentrated form of energy. The conversion factor c² is enormous, meaning tiny amounts of mass contain tremendous energy. This principle underlies nuclear reactions, particle physics, and our understanding of the universe.',
            spacing: { after: 300 },
            italics: true
        })
    );

    const massEnergySolved = solveMassEnergyEquivalenceRelatedProblems();
    massEnergySolved.forEach((solved, index) => {
        console.log(`  Adding Mass-Energy Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 16}: ${solved.problem.scenario}`,
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
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART V: LORENTZ TRANSFORMATIONS ==============
    console.log('\nProcessing Part V: Lorentz Transformations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Lorentz Transformations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Physical Principle: Space and time are interconnected. Lorentz transformations relate coordinates in different inertial frames. They replace Galilean transformations at high speeds and reveal that space and time are not independent but form a unified four-dimensional spacetime. The transformations preserve the spacetime interval, showing it as an invariant quantity.',
            spacing: { after: 300 },
            italics: true
        })
    );

    const lorentzSolved = solveLorentzTransformationsRelatedProblems();
    lorentzSolved.forEach((solved, index) => {
        console.log(`  Adding Lorentz Transformation Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 23}: ${solved.problem.scenario}`,
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
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== APPENDIX: COMMON CONSTANTS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Appendix: Physical Constants',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const physicalConstants = [
        'Speed of light: c = 299,792,458 m/s ≈ 3.00 × 10⁸ m/s',
        'Electron mass: m_e = 9.109 × 10⁻³¹ kg',
        'Electron rest energy: 0.511 MeV/c²',
        'Proton mass: m_p = 1.673 × 10⁻²⁷ kg',
        'Proton rest energy: 938.3 MeV/c²',
        'Neutron mass: m_n = 1.675 × 10⁻²⁷ kg',
        'Elementary charge: e = 1.602 × 10⁻¹⁹ C',
        'Conversion: 1 eV = 1.602 × 10⁻¹⁹ J',
        'Conversion: 1 ton TNT = 4.184 × 10⁹ J',
        'Planck constant: h = 6.626 × 10⁻³⁴ J·s'
    ];

    physicalConstants.forEach(constant => {
        documentChildren.push(
            new docx.Paragraph({
                text: `• ${constant}`,
                spacing: { after: 100 }
            })
        );
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
        const filename = 'comprehensive_special_relativity_workbook.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE RELATIVITY DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 29');
        console.log('    - Time Dilation: 5 problems');
        console.log('    - Length Contraction: 5 problems');
        console.log('    - Relativistic Momentum: 5 problems');
        console.log('    - Mass-Energy Equivalence: 7 problems');
        console.log('    - Lorentz Transformations: 7 problems');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Introduction to Special Relativity');
        console.log('  • Part I: Time Dilation (Problems 1-5)');
        console.log('  • Part II: Length Contraction (Problems 6-10)');
        console.log('  • Part III: Relativistic Momentum (Problems 11-15)');
        console.log('  • Part IV: Mass-Energy Equivalence (Problems 16-22)');
        console.log('  • Part V: Lorentz Transformations (Problems 23-29)');
        console.log('  • Appendix: Physical Constants');
        console.log('\n📄 EXPECTED PAGES: 120+ pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level');
        console.log('  • Helper tips for quick guidance');
        console.log('  • Real-world context and applications');
        console.log('  • Complete step-by-step solution');
        console.log('  • Enhanced physics explanations');
        console.log('  • Physical interpretation of results');
        console.log('  • Verification with proper units');
        console.log('  • Key concepts and theory');
        console.log('  • Pedagogical notes for teaching');
        console.log('  • Alternative solution methods');
        console.log('  • Common mistakes and error prevention');
        console.log('  • Dimensional analysis');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE COMPREHENSIVE RELATIVITY DOCUMENT GENERATION ==============

generateComprehensiveRelativityDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
