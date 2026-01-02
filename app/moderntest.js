 import { EnhancedPhysicsMathematicalWorkbook } from './physicsworkbook.js';
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

// ============== PHOTOELECTRIC EFFECT - RELATED PROBLEMS GENERATOR ==============

function generateRelatedPhotoelectricEffect() {
    const relatedProblems = [];

    // Problem 1: Basic Photoelectric Effect
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Photoelectric Effect',
        problem: 'Light with frequency 8.0×10¹⁴ Hz strikes a metal surface with work function 2.5 eV. Calculate the maximum kinetic energy of ejected electrons.',
        parameters: { 
            frequency: 8.0e14, 
            workFunction: 2.5 * 1.602176634e-19 
        },
        type: 'photoelectric_effect',
        context: { difficulty: 'beginner', topic: 'Photoelectric Effect' },
        subparts: [
            'Given: f = 8.0×10¹⁴ Hz, φ = 2.5 eV',
            'Convert work function: φ = 2.5 × 1.602×10⁻¹⁹ = 4.005×10⁻¹⁹ J',
            'Calculate photon energy: E = hf',
            'E = (6.626×10⁻³⁴)(8.0×10¹⁴) = 5.301×10⁻¹⁹ J',
            'Compare E to φ: 5.301×10⁻¹⁹ > 4.005×10⁻¹⁹ (ejection occurs)',
            'K_max = E - φ = 5.301×10⁻¹⁹ - 4.005×10⁻¹⁹',
            'K_max = 1.296×10⁻¹⁹ J = 0.809 eV',
            'Verify: Energy is conserved, K_max > 0'
        ],
        helper: 'Use Einstein\'s photoelectric equation: K_max = hf - φ',
        solution: 'K_max = 0.809 eV',
        realWorldContext: 'Solar panels and photodetectors use this principle'
    });

    // Problem 2: Threshold Frequency
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Finding Threshold Frequency',
        problem: 'A metal surface has a work function of 3.2 eV. What is the threshold frequency for photoelectric emission?',
        parameters: { 
            workFunction: 3.2 * 1.602176634e-19 
        },
        type: 'photoelectric_effect',
        context: { difficulty: 'beginner', topic: 'Threshold Frequency' },
        subparts: [
            'Given: φ = 3.2 eV = 5.127×10⁻¹⁹ J',
            'At threshold: E_photon = φ (no kinetic energy)',
            'hf_threshold = φ',
            'f_threshold = φ/h = 5.127×10⁻¹⁹ / 6.626×10⁻³⁴',
            'f_threshold = 7.74×10¹⁴ Hz',
            'Wavelength: λ = c/f = 3×10⁸ / 7.74×10¹⁴',
            'λ = 387.6 nm (UV region)',
            'Below this frequency, no ejection occurs'
        ],
        helper: 'At threshold: photon energy exactly equals work function',
        solution: 'f_threshold = 7.74×10¹⁴ Hz',
        realWorldContext: 'Determines which light colors can trigger photoelectric effect'
    });

    // Problem 3: Stopping Potential
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Stopping Potential Measurement',
        problem: 'UV light with λ = 250 nm illuminates a cesium surface (φ = 1.9 eV). Find the stopping potential required to prevent electron emission.',
        parameters: { 
            wavelength: 250e-9,
            workFunction: 1.9 * 1.602176634e-19 
        },
        type: 'photoelectric_effect',
        context: { difficulty: 'intermediate', topic: 'Stopping Potential' },
        subparts: [
            'Given: λ = 250 nm = 250×10⁻⁹ m, φ = 1.9 eV',
            'Calculate frequency: f = c/λ = 3×10⁸ / 250×10⁻⁹',
            'f = 1.2×10¹⁵ Hz',
            'Photon energy: E = hf = 6.626×10⁻³⁴ × 1.2×10¹⁵',
            'E = 7.951×10⁻¹⁹ J = 4.96 eV',
            'K_max = E - φ = 4.96 - 1.9 = 3.06 eV',
            'Stopping potential: eV_s = K_max',
            'V_s = K_max/e = 3.06 V',
            'At this voltage, fastest electrons are stopped'
        ],
        helper: 'Stopping potential equals maximum kinetic energy in eV',
        solution: 'V_s = 3.06 V',
        realWorldContext: 'Used to measure electron kinetic energies precisely'
    });

    // Problem 4: Multiple Wavelengths
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Comparing Different Wavelengths',
        problem: 'A metal with φ = 2.8 eV is illuminated by two sources: (a) λ₁ = 300 nm and (b) λ₂ = 500 nm. Which wavelength(s) cause photoelectric emission?',
        parameters: { 
            workFunction: 2.8 * 1.602176634e-19,
            wavelength1: 300e-9,
            wavelength2: 500e-9
        },
        type: 'photoelectric_effect',
        context: { difficulty: 'intermediate', topic: 'Wavelength Comparison' },
        subparts: [
            'Given: φ = 2.8 eV = 4.486×10⁻¹⁹ J',
            'For λ₁ = 300 nm:',
            'E₁ = hc/λ₁ = (6.626×10⁻³⁴)(3×10⁸) / 300×10⁻⁹',
            'E₁ = 6.626×10⁻¹⁹ J = 4.14 eV > φ ✓ (ejection)',
            'K_max,1 = 4.14 - 2.8 = 1.34 eV',
            'For λ₂ = 500 nm:',
            'E₂ = hc/λ₂ = (6.626×10⁻³⁴)(3×10⁸) / 500×10⁻⁹',
            'E₂ = 3.976×10⁻¹⁹ J = 2.48 eV < φ ✗ (no ejection)',
            'Only 300 nm light causes photoelectric effect'
        ],
        helper: 'Shorter wavelength = higher energy; check E > φ for each',
        solution: 'Only λ₁ = 300 nm causes emission',
        realWorldContext: 'Explains why only certain light colors work for specific metals'
    });

    // Problem 5: Power and Photon Rate
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Photon Flux Calculation',
        problem: 'A 5 mW laser (λ = 400 nm) illuminates a surface. How many photons strike the surface per second?',
        parameters: { 
            power: 5e-3,
            wavelength: 400e-9
        },
        type: 'photoelectric_effect',
        context: { difficulty: 'intermediate', topic: 'Photon Flux' },
        subparts: [
            'Given: P = 5 mW = 5×10⁻³ W, λ = 400 nm',
            'Energy per photon: E = hc/λ',
            'E = (6.626×10⁻³⁴)(3×10⁸) / 400×10⁻⁹',
            'E = 4.970×10⁻¹⁹ J per photon',
            'Power = Energy per second',
            'Number of photons: N = P/E',
            'N = 5×10⁻³ / 4.970×10⁻¹⁹',
            'N = 1.006×10¹⁶ photons/second',
            'This is the photon flux'
        ],
        helper: 'Divide total power by energy per photon',
        solution: 'N = 1.006×10¹⁶ photons/s',
        realWorldContext: 'Important for laser applications and light detectors'
    });

    // Problem 6: Work Function Determination
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Experimental Work Function',
        problem: 'Light of frequency 7.5×10¹⁴ Hz produces electrons with K_max = 1.2 eV. Find the work function of the metal.',
        parameters: { 
            frequency: 7.5e14,
            kineticEnergy: 1.2 * 1.602176634e-19
        },
        type: 'photoelectric_effect',
        context: { difficulty: 'intermediate', topic: 'Work Function Determination' },
        subparts: [
            'Given: f = 7.5×10¹⁴ Hz, K_max = 1.2 eV',
            'Photon energy: E = hf',
            'E = 6.626×10⁻³⁴ × 7.5×10¹⁴ = 4.970×10⁻¹⁹ J',
            'E = 3.10 eV',
            'From Einstein equation: K_max = E - φ',
            'φ = E - K_max = 3.10 - 1.2 = 1.90 eV',
            'Convert: φ = 1.90 × 1.602×10⁻¹⁹ = 3.044×10⁻¹⁹ J',
            'This metal is likely cesium (φ ≈ 1.9 eV)'
        ],
        helper: 'Rearrange photoelectric equation: φ = hf - K_max',
        solution: 'φ = 1.90 eV',
        realWorldContext: 'Method used to determine metal properties experimentally'
    });

    // Problem 7: Quantum Efficiency
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Quantum Efficiency',
        problem: 'A photocathode with φ = 2.0 eV is illuminated by 450 nm light. If the quantum efficiency is 15%, how many electrons are ejected per 1000 incident photons?',
        parameters: { 
            workFunction: 2.0 * 1.602176634e-19,
            wavelength: 450e-9,
            efficiency: 0.15
        },
        type: 'photoelectric_effect',
        context: { difficulty: 'advanced', topic: 'Quantum Efficiency' },
        subparts: [
            'Given: φ = 2.0 eV, λ = 450 nm, η = 15%',
            'Calculate photon energy: E = hc/λ',
            'E = (6.626×10⁻³⁴)(3×10⁸) / 450×10⁻⁹',
            'E = 4.417×10⁻¹⁹ J = 2.76 eV',
            'Check threshold: 2.76 eV > 2.0 eV ✓ (can eject)',
            'With 100% efficiency: 1000 electrons',
            'With 15% efficiency: N = 1000 × 0.15 = 150 electrons',
            'Not all photons produce electrons due to material limitations'
        ],
        helper: 'Multiply number of photons by quantum efficiency',
        solution: '150 electrons ejected',
        realWorldContext: 'Real photodetectors have efficiency less than 100%'
    });

    return relatedProblems;
}

// ============== COMPTON SCATTERING - RELATED PROBLEMS GENERATOR ==============

function generateRelatedComptonScattering() {
    const relatedProblems = [];

    // Problem 1: Basic Compton Scattering
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Compton Scattering',
        problem: 'An X-ray photon with λ = 0.050 nm scatters off an electron at 90°. Find the wavelength shift and final wavelength.',
        parameters: { 
            wavelengthInitial: 0.050e-9,
            theta: Math.PI / 2
        },
        type: 'compton_scattering',
        context: { difficulty: 'beginner', topic: 'Compton Scattering' },
        subparts: [
            'Given: λ₀ = 0.050 nm, θ = 90°',
            'Compton wavelength: λ_c = h/(m_e c)',
            'λ_c = 6.626×10⁻³⁴ / [(9.109×10⁻³¹)(3×10⁸)]',
            'λ_c = 2.426×10⁻¹² m = 0.002426 nm',
            'Wavelength shift: Δλ = λ_c(1 - cos θ)',
            'Δλ = 0.002426(1 - cos 90°) = 0.002426(1 - 0)',
            'Δλ = 0.002426 nm',
            'Final wavelength: λ_f = λ₀ + Δλ',
            'λ_f = 0.050 + 0.002426 = 0.052426 nm',
            'Photon loses energy to electron'
        ],
        helper: 'Use Compton formula: Δλ = (h/m_e c)(1 - cos θ)',
        solution: 'Δλ = 0.002426 nm, λ_f = 0.052426 nm',
        realWorldContext: 'X-ray scattering used in material analysis'
    });

    // Problem 2: Maximum Wavelength Shift
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Maximum Compton Shift',
        problem: 'What scattering angle produces the maximum wavelength shift in Compton scattering? Calculate this maximum shift.',
        parameters: { 
            theta: Math.PI
        },
        type: 'compton_scattering',
        context: { difficulty: 'beginner', topic: 'Maximum Compton Shift' },
        subparts: [
            'Wavelength shift: Δλ = λ_c(1 - cos θ)',
            'Maximum when (1 - cos θ) is maximum',
            'This occurs when cos θ = -1, so θ = 180°',
            'Backscattering gives maximum shift',
            'Δλ_max = λ_c(1 - (-1)) = 2λ_c',
            'λ_c = 2.426×10⁻¹² m',
            'Δλ_max = 2 × 2.426×10⁻¹² = 4.852×10⁻¹² m',
            'Δλ_max = 0.004852 nm',
            'This is twice the Compton wavelength'
        ],
        helper: 'Maximum shift occurs at 180° (backscattering)',
        solution: 'θ = 180°, Δλ_max = 0.004852 nm',
        realWorldContext: 'Important for understanding collision dynamics'
    });

    // Problem 3: Energy Transfer
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Energy Transfer to Electron',
        problem: 'A 0.100 nm X-ray photon scatters at 60° off an electron. Calculate: (a) final wavelength, (b) energy transferred to electron.',
        parameters: { 
            wavelengthInitial: 0.100e-9,
            theta: Math.PI / 3
        },
        type: 'compton_scattering',
        context: { difficulty: 'intermediate', topic: 'Compton Energy Transfer' },
        subparts: [
            'Given: λ₀ = 0.100 nm, θ = 60°',
            '(a) Wavelength shift:',
            'Δλ = λ_c(1 - cos 60°) = 0.002426(1 - 0.5)',
            'Δλ = 0.001213 nm',
            'λ_f = 0.100 + 0.001213 = 0.101213 nm',
            '(b) Energy calculations:',
            'E₀ = hc/λ₀ = (6.626×10⁻³⁴)(3×10⁸) / 0.100×10⁻⁹',
            'E₀ = 1.988×10⁻¹⁵ J = 12.40 keV',
            'E_f = hc/λ_f = 1.963×10⁻¹⁵ J = 12.25 keV',
            'Energy to electron: ΔE = E₀ - E_f = 0.15 keV',
            'Electron gains kinetic energy from photon'
        ],
        helper: 'Energy lost by photon = energy gained by electron',
        solution: '(a) λ_f = 0.101213 nm, (b) ΔE = 0.15 keV',
        realWorldContext: 'Medical imaging and radiation therapy applications'
    });

    // Problem 4: Recoil Electron Angle
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Electron Recoil Direction',
        problem: 'In Compton scattering at 90°, if the photon energy is initially 100 keV, find the recoil electron kinetic energy.',
        parameters: { 
            energyInitial: 100e3 * 1.602176634e-19,
            theta: Math.PI / 2
        },
        type: 'compton_scattering',
        context: { difficulty: 'advanced', topic: 'Recoil Electron Kinematics' },
        subparts: [
            'Given: E₀ = 100 keV, θ = 90°',
            'Convert to wavelength: λ₀ = hc/E₀',
            'λ₀ = (6.626×10⁻³⁴)(3×10⁸) / (100×10³×1.602×10⁻¹⁹)',
            'λ₀ = 0.01240 nm',
            'Compton shift: Δλ = 0.002426(1 - 0) = 0.002426 nm',
            'Final wavelength: λ_f = 0.01240 + 0.002426 = 0.014826 nm',
            'Final energy: E_f = hc/λ_f = 83.64 keV',
            'Electron kinetic energy: K_e = E₀ - E_f',
            'K_e = 100 - 83.64 = 16.36 keV',
            'Conservation of energy verified'
        ],
        helper: 'Use energy conservation: E₀ = E_f + K_electron',
        solution: 'K_e = 16.36 keV',
        realWorldContext: 'Understanding radiation damage in materials'
    });

    // Problem 5: Compton Wavelength Significance
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Compton Wavelength',
        problem: 'Calculate the Compton wavelength of an electron. What is its physical significance?',
        parameters: {},
        type: 'compton_scattering',
        context: { difficulty: 'intermediate', topic: 'Compton Wavelength' },
        subparts: [
            'Compton wavelength: λ_c = h/(m_e c)',
            'Substitute values:',
            'λ_c = 6.626×10⁻³⁴ / [(9.109×10⁻³¹)(3×10⁸)]',
            'λ_c = 2.426×10⁻¹² m = 2.426 pm',
            'Physical significance:',
            '• Natural length scale for quantum electron interactions',
            '• Photons with λ ≈ λ_c have energy comparable to m_e c²',
            '• Below this scale, particle creation becomes important',
            '• Fundamental constant in quantum electrodynamics',
            'Corresponds to energy: E = hc/λ_c = 511 keV (rest mass)'
        ],
        helper: 'Compton wavelength sets scale for relativistic quantum effects',
        solution: 'λ_c = 2.426 pm',
        realWorldContext: 'Fundamental scale in particle physics'
    });

    // Problem 6: No Scattering Angle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Forward Scattering',
        problem: 'What is the wavelength shift for Compton scattering at 0° (forward direction)? Explain the result.',
        parameters: { 
            theta: 0
        },
        type: 'compton_scattering',
        context: { difficulty: 'beginner', topic: 'Forward Scattering' },
        subparts: [
            'Given: θ = 0°',
            'Compton formula: Δλ = λ_c(1 - cos θ)',
            'Δλ = 0.002426(1 - cos 0°)',
            'Δλ = 0.002426(1 - 1) = 0',
            'No wavelength shift!',
            'Physical explanation:',
            '• No collision occurred',
            '• Photon passes by without interacting',
            '• No energy/momentum transfer',
            '• This is not really scattering',
            'Meaningful scattering requires θ > 0'
        ],
        helper: 'Zero angle means no collision, hence no shift',
        solution: 'Δλ = 0 (no scattering)',
        realWorldContext: 'Only actual collisions produce observable effects'
    });

    // Problem 7: High Energy Limit
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'High Energy Compton Scattering',
        problem: 'A 1 MeV gamma ray scatters at 120° off an electron. Calculate the scattered photon energy and electron recoil energy.',
        parameters: { 
            energyInitial: 1e6 * 1.602176634e-19,
            theta: 120 * Math.PI / 180
        },
        type: 'compton_scattering',
        context: { difficulty: 'advanced', topic: 'High Energy Compton Scattering' },
        subparts: [
            'Given: E₀ = 1 MeV, θ = 120°',
            'Find initial wavelength: λ₀ = hc/E₀',
            'λ₀ = 1.240×10⁻¹² m = 0.001240 nm',
            'Compton shift: Δλ = λ_c(1 - cos 120°)',
            'Δλ = 0.002426(1 - (-0.5)) = 0.003639 nm',
            'Final wavelength: λ_f = 0.001240 + 0.003639 = 0.004879 nm',
            'Final energy: E_f = hc/λ_f = 254.2 keV',
            'Electron energy: K_e = 1000 - 254.2 = 745.8 keV',
            'Large energy transfer at high energies',
            'Electron gains most of the energy'
        ],
        helper: 'At high energies, electrons can gain significant energy',
        solution: 'E_f = 254.2 keV, K_e = 745.8 keV',
        realWorldContext: 'Important in gamma ray astronomy and nuclear physics'
    });

    return relatedProblems;
}

// ============== ATOMIC SPECTRA - RELATED PROBLEMS GENERATOR ==============

function generateRelatedAtomicSpectra() {
    const relatedProblems = [];

    // Problem 1: Hydrogen Spectrum - Visible Light
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Balmer Series - Visible Spectrum',
        problem: 'Calculate the wavelength of light emitted when an electron in hydrogen transitions from n=3 to n=2 (first line of Balmer series).',
        parameters: { 
            nInitial: 3,
            nFinal: 2
        },
        type: 'bohr_model',
        context: { difficulty: 'beginner', topic: 'Hydrogen Spectrum - Balmer Series' },
        subparts: [
            'Given: n_i = 3, n_f = 2 (Balmer alpha line)',
            'Energy levels: E_n = -13.6 eV / n²',
            'E_3 = -13.6 / 9 = -1.511 eV',
            'E_2 = -13.6 / 4 = -3.400 eV',
            'Energy difference: ΔE = E_2 - E_3',
            'ΔE = -3.400 - (-1.511) = -1.889 eV',
            'Photon energy: E_photon = |ΔE| = 1.889 eV',
            'Convert to Joules: 1.889 × 1.602×10⁻¹⁹ = 3.026×10⁻¹⁹ J',
            'Wavelength: λ = hc/E = (6.626×10⁻³⁴)(3×10⁸) / 3.026×10⁻¹⁹',
            'λ = 656.3 nm (red light - H-alpha line)',
            'This is visible in hydrogen gas discharge tubes'
        ],
        helper: 'Use Bohr model: E_n = -13.6 eV/n², then λ = hc/ΔE',
        solution: 'λ = 656.3 nm (red)',
        realWorldContext: 'Famous red line seen in nebulae and stars'
    });

    // Problem 2: Lyman Series - UV
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Lyman Series - Ultraviolet',
        problem: 'Find the wavelength of the Lyman alpha line (n=2 to n=1 transition in hydrogen). In what region of the spectrum does it fall?',
        parameters: { 
            nInitial: 2,
            nFinal: 1
        },
        type: 'bohr_model',
        context: { difficulty: 'beginner', topic: 'Lyman Series' },
        subparts: [
            'Given: n_i = 2, n_f = 1 (Lyman alpha)',
            'E_2 = -13.6 / 4 = -3.400 eV',
            'E_1 = -13.6 / 1 = -13.600 eV',
            'ΔE = -13.600 - (-3.400) = -10.200 eV',
            'E_photon = 10.200 eV = 1.634×10⁻¹⁸ J',
            'λ = hc/E = (6.626×10⁻³⁴)(3×10⁸) / 1.634×10⁻¹⁸',
            'λ = 121.5 nm',
            'This is in the ultraviolet region',
            'Cannot be observed from ground (absorbed by atmosphere)',
            'Lyman series: all transitions ending at n=1',
            'Important in astronomy for studying distant hydrogen'
        ],
        helper: 'Lyman series (n→1) produces UV photons',
        solution: 'λ = 121.5 nm (UV)',
        realWorldContext: 'Observed in space telescopes studying interstellar hydrogen'
    });

    // Problem 3: Paschen Series - Infrared
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Paschen Series - Infrared',
        problem: 'Calculate the wavelength for the n=4 to n=3 transition (Paschen alpha line). What type of radiation is this?',
        parameters: { 
            nInitial: 4,
            nFinal: 3
        },
        type: 'bohr_model',
        context: { difficulty: 'intermediate', topic: 'Paschen Series' },
        subparts: [
            'Given: n_i = 4, n_f = 3 (Paschen alpha)',
            'E_4 = -13.6 / 16 = -0.850 eV',
            'E_3 = -13.6 / 9 = -1.511 eV',
            'ΔE = -1.511 - (-0.850) = -0.661 eV',
            'E_photon = 0.661 eV = 1.059×10⁻¹⁹ J',
            'λ = hc/E = (6.626×10⁻³⁴)(3×10⁸) / 1.059×10⁻¹⁹',
            'λ = 1875 nm = 1.875 μm',
            'This is infrared radiation',
            'Paschen series: all transitions to n=3',
            'Not visible to human eye',
            'Detected with infrared sensors'
        ],
        helper: 'Paschen series (n→3) produces infrared photons',
        solution: 'λ = 1875 nm (infrared)',
        realWorldContext: 'Used in IR spectroscopy of astronomical objects'
    });

    // Problem 4: Series Limit
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Series Limit Energy',
        problem: 'What is the shortest wavelength (series limit) in the Balmer series? What does this represent physically?',
        parameters: { 
            nInitial: Infinity,
            nFinal: 2
        },
        type: 'bohr_model',
        context: { difficulty: 'intermediate', topic: 'Series Limits' },
        subparts: [
            'Series limit: n_i = ∞, n_f = 2',
            'E_∞ = -13.6 / ∞ = 0 eV (ionization)',
            'E_2 = -13.6 / 4 = -3.400 eV',
            'Maximum energy photon: ΔE = 0 - (-3.400) = 3.400 eV',
            'Convert: 3.400 × 1.602×10⁻¹⁹ = 5.447×10⁻¹⁹ J',
            'Minimum wavelength: λ_min = hc/E_max',
            'λ_min = (6.626×10⁻³⁴)(3×10⁸) / 5.447×10⁻¹⁹',
            'λ_min = 364.6 nm (UV)',
            'Physical meaning:',
            '• Electron starts from rest at infinity',
            '• Falls to n=2 level',
            '• Maximum possible energy release for Balmer series',
            '• Corresponds to ionization energy from n=2'
        ],
        helper: 'Series limit: transition from n=∞ to final state',
        solution: 'λ_min = 364.6 nm',
        realWorldContext: 'Sets boundary between bound and continuum states'
    });

    // Problem 5: Rydberg Formula
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Rydberg Formula Application',
        problem: 'Use the Rydberg formula to find the wavelength of the n=5 to n=2 transition. Verify with Bohr model.',
        parameters: { 
            nInitial: 5,
            nFinal: 2
        },
        type: 'rydberg_formula',
        context: { difficulty: 'intermediate', topic: 'Rydberg Formula' },
        subparts: [
            'Given: n_i = 5, n_f = 2',
            'Rydberg formula: 1/λ = R_H(1/n_f² - 1/n_i²)',
            'R_H = 1.097×10⁷ m⁻¹ (Rydberg constant)',
            '1/λ = 1.097×10⁷(1/4 - 1/25)',
            '1/λ = 1.097×10⁷(0.25 - 0.04)',
            '1/λ = 1.097×10⁷(0.21) = 2.304×10⁶ m⁻¹',
            'λ = 1/(2.304×10⁶) = 434.0 nm (violet)',
            'Verification with Bohr:',
            'ΔE = 13.6(1/4 - 1/25) = 2.856 eV',
            'λ = 1240 eV·nm / 2.856 eV = 434.2 nm ✓',
            'Part of Balmer series (visible spectrum)'
        ],
        helper: 'Rydberg formula directly gives wavelength from quantum numbers',
        solution: 'λ = 434.0 nm (violet)',
        realWorldContext: 'Empirical formula discovered before quantum mechanics'
    });

    // Problem 6: Ionization Energy
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Ionization from Excited State',
        problem: 'How much energy is required to ionize a hydrogen atom from the n=3 state? What wavelength photon could do this?',
        parameters: { 
            n: 3
        },
        type: 'bohr_model',
        context: { difficulty: 'intermediate', topic: 'Ionization Energy' },
        subparts: [
            'Given: Initial state n=3',
            'Ionization: electron goes to n=∞',
            'E_3 = -13.6 / 9 = -1.511 eV',
            'E_∞ = 0 eV (free electron)',
            'Ionization energy: E_ion = E_∞ - E_3',
            'E_ion = 0 - (-1.511) = 1.511 eV',
            'Convert: 1.511 × 1.602×10⁻¹⁹ = 2.421×10⁻¹⁹ J',
            'Maximum wavelength photon: λ_max = hc/E_ion',
            'λ_max = (6.626×10⁻³⁴)(3×10⁸) / 2.421×10⁻¹⁹',
            'λ_max = 820.5 nm (near infrared)',
            'Less energy needed than ground state (13.6 eV)',
            'Excited atoms easier to ionize'
        ],
        helper: 'Ionization energy = |E_n| for state n',
        solution: 'E_ion = 1.511 eV, λ_max = 820.5 nm',
        realWorldContext: 'Important in plasma physics and astrophysics'
    });

    // Problem 7: Multi-Transition Path
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Cascade Transitions',
        problem: 'An electron cascades from n=4 to n=1 via two paths: (A) 4→2→1 and (B) 4→3→1. Calculate wavelengths for each path and compare total energies.',
        parameters: { 
            nInitial: 4,
            nFinal: 1
        },
        type: 'bohr_model',
        context: { difficulty: 'advanced', topic: 'Multi-Step Transitions' },
        subparts: [
            'Energy levels: E_4=-0.85, E_3=-1.51, E_2=-3.40, E_1=-13.6 eV',
            'Path A: 4→2→1',
            '  Transition 4→2: ΔE = -3.40-(-0.85) = -2.55 eV',
            '  λ₁ = 1240/2.55 = 486.3 nm (blue-green)',
            '  Transition 2→1: ΔE = -13.6-(-3.40) = -10.2 eV',
            '  λ₂ = 1240/10.2 = 121.6 nm (UV)',
            'Path B: 4→3→1',
            '  Transition 4→3: ΔE = -1.51-(-0.85) = -0.66 eV',
            '  λ₃ = 1240/0.66 = 1878.8 nm (IR)',
            '  Transition 3→1: ΔE = -13.6-(-1.51) = -12.09 eV',
            '  λ₄ = 1240/12.09 = 102.6 nm (UV)',
            'Total energy both paths: -13.6-(-0.85) = -12.75 eV',
            'Energy conservation: path independent!',
            'Different photons emitted, same total energy'
        ],
        helper: 'Total energy change is path-independent',
        solution: 'Path A: 486.3 nm, 121.6 nm; Path B: 1878.8 nm, 102.6 nm',
        realWorldContext: 'Explains complex spectra from excited atoms'
    });

    return relatedProblems;
}

// ============== BOHR MODEL - RELATED PROBLEMS GENERATOR ==============

function generateRelatedBohrModel() {
    const relatedProblems = [];

    // Problem 1: Orbital Radius
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Bohr Radius Calculation',
        problem: 'Calculate the radius of the first three Bohr orbits (n=1,2,3) in hydrogen. How does radius scale with n?',
        parameters: { 
            n1: 1,
            n2: 2,
            n3: 3
        },
        type: 'bohr_model',
        context: { difficulty: 'beginner', topic: 'Bohr Orbital Radius' },
        subparts: [
            'Bohr radius formula: r_n = n²a₀',
            'where a₀ = 0.529 Å (Bohr radius)',
            'For n=1: r₁ = 1² × 0.529 = 0.529 Å',
            'For n=2: r₂ = 2² × 0.529 = 2.116 Å',
            'For n=3: r₃ = 3² × 0.529 = 4.761 Å',
            'Radius ratio: r₁:r₂:r₃ = 1:4:9',
            'Radius scales as n²',
            'Higher orbits are much larger',
            'Physical interpretation:',
            '• Angular momentum increases with n',
            '• Centripetal force decreases with distance',
            '• Electron speed decreases in higher orbits'
        ],
        helper: 'Orbital radius: r_n = n²a₀ where a₀ = 0.529 Å',
        solution: 'r₁=0.529 Å, r₂=2.116 Å, r₃=4.761 Å',
        realWorldContext: 'Determines size of hydrogen atom in different states'
    });

    // Problem 2: Electron Velocity
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electron Speed in Orbits',
        problem: 'Calculate the speed of an electron in the n=1 and n=3 orbits of hydrogen. Compare to speed of light.',
        parameters: { 
            n1: 1,
            n2: 3
        },
        type: 'bohr_model',
        context: { difficulty: 'intermediate', topic: 'Electron Velocity' },
        subparts: [
            'Velocity formula: v_n = (e²)/(2ε₀hn) = c/137n',
            'where c = 3×10⁸ m/s, 137 = fine structure constant⁻¹',
            'For n=1: v₁ = (3×10⁸)/137 = 2.19×10⁶ m/s',
            'As fraction of c: v₁/c = 1/137 = 0.0073 (0.73%)',
            'For n=3: v₃ = v₁/3 = 7.30×10⁵ m/s',
            'v₃/c = 1/411 = 0.0024 (0.24%)',
            'Velocity decreases with n: v_n ∝ 1/n',
            'Non-relativistic: v << c ✓',
            'Bohr model valid for hydrogen',
            'Higher orbits: slower electrons, less tightly bound'
        ],
        helper: 'Electron velocity: v_n = (2.19×10⁶ m/s)/n',
        solution: 'v₁ = 2.19×10⁶ m/s, v₃ = 7.30×10⁵ m/s',
        realWorldContext: 'Justifies non-relativistic treatment of hydrogen'
    });

    // Problem 3: Quantized Angular Momentum
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Angular Momentum Quantization',
        problem: 'Calculate the angular momentum of an electron in the n=1, n=2, and n=4 states. Verify Bohr\'s quantization condition.',
        parameters: { 
            n1: 1,
            n2: 2,
            n3: 4
        },
        type: 'bohr_model',
        context: { difficulty: 'intermediate', topic: 'Angular Momentum Quantization' },
        subparts: [
            'Bohr quantization: L = nℏ',
            'where ℏ = h/(2π) = 1.055×10⁻³⁴ J·s',
            'For n=1: L₁ = 1 × 1.055×10⁻³⁴ = 1.055×10⁻³⁴ J·s',
            'For n=2: L₂ = 2 × 1.055×10⁻³⁴ = 2.110×10⁻³⁴ J·s',
            'For n=4: L₄ = 4 × 1.055×10⁻³⁴ = 4.220×10⁻³⁴ J·s',
            'Ratio: L₁:L₂:L₄ = 1:2:4 = n₁:n₂:n₄ ✓',
            'Angular momentum increases linearly with n',
            'This was Bohr\'s key postulate',
            'Classical physics allows any value',
            'Quantum mechanics: only discrete values allowed'
        ],
        helper: 'Bohr\'s condition: L = nℏ (quantized angular momentum)',
        solution: 'L₁=ℏ, L₂=2ℏ, L₄=4ℏ',
        realWorldContext: 'Foundation of quantum mechanical angular momentum'
    });

    // Problem 4: Photon Frequency
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Photon Frequency Calculation',
        problem: 'Find the frequency of the photon emitted in the n=3 to n=2 transition (Balmer alpha line).',
        parameters: { 
            nInitial: 3,
            nFinal: 2
        },
        type: 'bohr_model',
        context: { difficulty: 'beginner', topic: 'Photon Frequency' },
        subparts: [
            'Given: n_i=3, n_f=2',
            'Energy difference: ΔE = 13.6 eV(1/n_f² - 1/n_i²)',
            'ΔE = 13.6(1/4 - 1/9) = 13.6(0.25 - 0.111)',
            'ΔE = 13.6 × 0.139 = 1.889 eV',
            'Convert to Joules: 1.889 × 1.602×10⁻¹⁹ = 3.026×10⁻¹⁹ J',
            'Photon frequency: f = E/h',
            'f = 3.026×10⁻¹⁹ / 6.626×10⁻³⁴',
            'f = 4.568×10¹⁴ Hz',
            'Wavelength: λ = c/f = 3×10⁸ / 4.568×10¹⁴',
            'λ = 656.9 nm (red light)',
            'This is the H-alpha line'
        ],
        helper: 'Frequency from energy: f = ΔE/h',
        solution: 'f = 4.568×10¹⁴ Hz',
        realWorldContext: 'Determines color of spectral lines'
    });

    // Problem 5: Hydrogen-like Ions
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Hydrogen-like Ions',
        problem: 'Calculate the ground state energy of He⁺ (Z=2) and Li²⁺ (Z=3) using the modified Bohr model.',
        parameters: { 
            Z_He: 2,
            Z_Li: 3,
            n: 1
        },
        type: 'bohr_model',
        context: { difficulty: 'advanced', topic: 'Hydrogen-like Ions' },
        subparts: [
            'Modified Bohr: E_n = -13.6 Z² / n² eV',
            'where Z = nuclear charge',
            'For He⁺ (Z=2, n=1):',
            'E₁ = -13.6 × 2² / 1² = -13.6 × 4 = -54.4 eV',
            'For Li²⁺ (Z=3, n=1):',
            'E₁ = -13.6 × 3² / 1² = -13.6 × 9 = -122.4 eV',
            'Comparison with H:',
            '• H: -13.6 eV',
            '• He⁺: -54.4 eV (4× more bound)',
            '• Li²⁺: -122.4 eV (9× more bound)',
            'Higher Z → stronger nuclear attraction',
            'Energy scales as Z²',
            'Ionization energy also scales as Z²'
        ],
        helper: 'For hydrogen-like ions: E_n = -13.6Z²/n² eV',
        solution: 'He⁺: -54.4 eV, Li²⁺: -122.4 eV',
        realWorldContext: 'Explains spectra of ionized helium and lithium'
    });

    // Problem 6: Transition Probability
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multiple Decay Paths',
        problem: 'An electron in n=4 can decay to n=1 via different paths. List all possible direct transitions and calculate their wavelengths.',
        parameters: { 
            nInitial: 4
        },
        type: 'bohr_model',
        context: { difficulty: 'advanced', topic: 'Transition Paths' },
        subparts: [
            'From n=4, electron can transition to n=3, 2, or 1',
            'Transition 4→3 (Paschen):',
            '  ΔE = 13.6(1/9 - 1/16) = 0.661 eV',
            '  λ = 1876 nm (IR)',
            'Transition 4→2 (Balmer):',
            '  ΔE = 13.6(1/4 - 1/16) = 2.55 eV',
            '  λ = 486 nm (blue-green)',
            'Transition 4→1 (Lyman):',
            '  ΔE = 13.6(1/1 - 1/16) = 12.75 eV',
            '  λ = 97.2 nm (UV)',
            'Cascade example: 4→3→2→1',
            '  Emits three photons: 1876 nm, 656 nm, 122 nm',
            'Total energy same regardless of path',
            'Selection rules determine probability of each path'
        ],
        helper: 'All downward transitions are possible, with varying probabilities',
        solution: '4→3: 1876 nm, 4→2: 486 nm, 4→1: 97.2 nm',
        realWorldContext: 'Creates complex emission spectra in gas discharge'
    });

    // Problem 7: Bohr Model Limitations
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Bohr Model Validity',
        problem: 'The Bohr model works well for hydrogen but fails for helium (2 electrons). Explain why and calculate the error for helium\'s ground state.',
        parameters: { 
            atom: 'helium'
        },
        type: 'bohr_model',
        context: { difficulty: 'intermediate', topic: 'Bohr Model Limitations' },
        subparts: [
            'Bohr model assumptions:',
            '• Single electron orbiting nucleus',
            '• No electron-electron repulsion',
            '• Circular orbits (no ellipses)',
            'For helium (2 electrons, Z=2):',
            'Naive Bohr prediction (ignoring e⁻-e⁻ repulsion):',
            '  E = 2 × (-13.6 × 4) = -108.8 eV',
            'Experimental value: E = -79.0 eV',
            'Error: -108.8 - (-79.0) = -29.8 eV',
            'Error percentage: 29.8/79.0 × 100 = 38%',
            'Electron-electron repulsion reduces binding',
            'Quantum mechanics needed for multi-electron atoms',
            'Bohr model: historical stepping stone'
        ],
        helper: 'Bohr model only accurate for one-electron systems',
        solution: 'Bohr predicts -108.8 eV, actual is -79.0 eV (38% error)',
        realWorldContext: 'Led to development of quantum mechanics'
    });

    return relatedProblems;
}

// ============== QUANTUM MECHANICS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedQuantumMechanics() {
    const relatedProblems = [];

    // Problem 1: De Broglie Wavelength - Electron
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'De Broglie Wavelength of Electron',
        problem: 'An electron is accelerated through a potential difference of 100 V. Calculate its de Broglie wavelength.',
        parameters: { 
            voltage: 100,
            mass: 9.109e-31
        },
        type: 'de_broglie',
        context: { difficulty: 'beginner', topic: 'De Broglie Wavelength' },
        subparts: [
            'Given: V = 100 V, m_e = 9.109×10⁻³¹ kg',
            'Kinetic energy: K = eV = 100 eV',
            'Convert: K = 100 × 1.602×10⁻¹⁹ = 1.602×10⁻¹⁷ J',
            'Find velocity: K = ½mv²',
            'v² = 2K/m = 2 × 1.602×10⁻¹⁷ / 9.109×10⁻³¹',
            'v = 5.93×10⁶ m/s (non-relativistic ✓)',
            'Momentum: p = mv = 9.109×10⁻³¹ × 5.93×10⁶',
            'p = 5.40×10⁻²⁴ kg·m/s',
            'De Broglie wavelength: λ = h/p',
            'λ = 6.626×10⁻³⁴ / 5.40×10⁻²⁴',
            'λ = 1.23×10⁻¹⁰ m = 0.123 nm',
            'Comparable to atomic spacing!'
        ],
        helper: 'Find momentum from energy, then λ = h/p',
        solution: 'λ = 0.123 nm',
        realWorldContext: 'Used in electron microscopes and diffraction'
    });

    // Problem 2: De Broglie Wavelength - Macroscopic
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'De Broglie Wavelength of Baseball',
        problem: 'Calculate the de Broglie wavelength of a 0.15 kg baseball moving at 40 m/s. Why don\'t we observe wave effects?',
        parameters: { 
            mass: 0.15,
            velocity: 40
        },
        type: 'de_broglie',
        context: { difficulty: 'beginner', topic: 'Classical vs Quantum' },
        subparts: [
            'Given: m = 0.15 kg, v = 40 m/s',
            'Momentum: p = mv = 0.15 × 40 = 6.0 kg·m/s',
            'De Broglie wavelength: λ = h/p',
            'λ = 6.626×10⁻³⁴ / 6.0',
            'λ = 1.10×10⁻³⁴ m',
            'This is incredibly small!',
            'Comparison:',
            '• Atomic diameter: ~10⁻¹⁰ m',
            '• Nuclear diameter: ~10⁻¹⁵ m',
            '• Baseball λ: ~10⁻³⁴ m (20 orders smaller!)',
            'Wave effects negligible for macroscopic objects',
            'Classical mechanics valid when λ << object size',
            'Quantum effects only observable at atomic scale'
        ],
        helper: 'Macroscopic objects have negligibly small wavelengths',
        solution: 'λ = 1.10×10⁻³⁴ m (unmeasurably small)',
        realWorldContext: 'Explains why we don\'t see quantum effects in daily life'
    });

    // Problem 3: Uncertainty Principle - Position-Momentum
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Heisenberg Uncertainty Principle',
        problem: 'An electron is confined to a region of 1.0 nm. What is the minimum uncertainty in its momentum and velocity?',
        parameters: { 
            deltaX: 1.0e-9
        },
        type: 'uncertainty_principle',
        context: { difficulty: 'intermediate', topic: 'Position-Momentum Uncertainty' },
        subparts: [
            'Given: Δx = 1.0 nm = 1.0×10⁻⁹ m',
            'Uncertainty principle: ΔxΔp ≥ ℏ/2',
            'where ℏ = 1.055×10⁻³⁴ J·s',
            'Minimum momentum uncertainty:',
            'Δp = ℏ/(2Δx) = 1.055×10⁻³⁴ / (2 × 1.0×10⁻⁹)',
            'Δp = 5.27×10⁻²⁶ kg·m/s',
            'Velocity uncertainty: Δv = Δp/m_e',
            'Δv = 5.27×10⁻²⁶ / 9.109×10⁻³¹',
            'Δv = 5.79×10⁴ m/s = 57.9 km/s',
            'Cannot know both position and velocity precisely!',
            'Tighter confinement → larger momentum uncertainty',
            'Fundamental limit, not measurement limitation'
        ],
        helper: 'Use ΔxΔp ≥ ℏ/2 to find minimum Δp',
        solution: 'Δp = 5.27×10⁻²⁶ kg·m/s, Δv = 57.9 km/s',
        realWorldContext: 'Fundamental quantum limit on measurement'
    });

    // Problem 4: Uncertainty Principle - Energy-Time
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Energy-Time Uncertainty',
        problem: 'An excited atomic state has a lifetime of 10⁻⁸ s. What is the minimum uncertainty in the energy of this state?',
        parameters: { 
            deltaT: 1e-8
        },
        type: 'uncertainty_principle',
        context: { difficulty: 'intermediate', topic: 'Energy-Time Uncertainty' },
        subparts: [
            'Given: Δt = 10⁻⁸ s (lifetime)',
            'Energy-time uncertainty: ΔEΔt ≥ ℏ/2',
            'Minimum energy uncertainty:',
            'ΔE = ℏ/(2Δt) = 1.055×10⁻³⁴ / (2 × 10⁻⁸)',
            'ΔE = 5.27×10⁻²⁷ J',
            'Convert to eV: ΔE = 5.27×10⁻²⁷ / 1.602×10⁻¹⁹',
            'ΔE = 3.29×10⁻⁸ eV = 32.9 neV',
            'This causes spectral line broadening',
            'Natural linewidth: Δλ/λ ≈ ΔE/E',
            'Shorter lifetime → broader spectral line',
            'Heisenberg microscope thought experiment',
            'Applies to all quantum systems'
        ],
        helper: 'Use ΔEΔt ≥ ℏ/2 to find minimum ΔE',
        solution: 'ΔE = 3.29×10⁻⁸ eV',
        realWorldContext: 'Causes natural broadening of spectral lines'
    });

    // Problem 5: Wave Packet
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Wave Packet Spreading',
        problem: 'A wave packet representing an electron has initial width Δx₀ = 1 nm. If the momentum uncertainty is at the Heisenberg limit, estimate how fast the packet spreads.',
        parameters: { 
            deltaX0: 1e-9,
            mass: 9.109e-31
        },
        type: 'uncertainty_principle',
        context: { difficulty: 'advanced', topic: 'Wave Packet Dynamics' },
        subparts: [
            'Given: Δx₀ = 1 nm = 1×10⁻⁹ m',
            'At Heisenberg limit: Δp = ℏ/(2Δx₀)',
            'Δp = 1.055×10⁻³⁴ / (2 × 1×10⁻⁹) = 5.27×10⁻²⁶ kg·m/s',
            'Velocity spread: Δv = Δp/m_e',
            'Δv = 5.27×10⁻²⁶ / 9.109×10⁻³¹ = 5.79×10⁴ m/s',
            'After time t, width: Δx(t) ≈ Δx₀ + Δv·t',
            'After 1 ns: Δx = 1×10⁻⁹ + 5.79×10⁴ × 10⁻⁹',
            'Δx ≈ 1×10⁻⁹ + 5.79×10⁻⁵ ≈ 5.79×10⁻⁵ m = 58 μm',
            'Packet spreads from 1 nm to 58 μm in 1 ns!',
            'Spreading rate: ~5.79×10⁴ m/s',
            'Free particles: wave packets always spread',
            'Potential wells can prevent spreading'
        ],
        helper: 'Wave packets spread due to velocity uncertainty',
        solution: 'Spreading rate ≈ 5.79×10⁴ m/s',
        realWorldContext: 'Important in quantum computing and particle physics'
    });

    // Problem 6: Particle in a Box
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Infinite Potential Well',
        problem: 'An electron is confined to a 1D box of length L = 0.5 nm. Calculate the energies of the first three quantum states.',
        parameters: { 
            length: 0.5e-9,
            mass: 9.109e-31
        },
        type: 'de_broglie',
        context: { difficulty: 'advanced', topic: 'Particle in a Box' },
        subparts: [
            'Given: L = 0.5 nm, m_e = 9.109×10⁻³¹ kg',
            'Energy levels: E_n = n²h²/(8mL²)',
            'For n=1 (ground state):',
            'E₁ = 1² × (6.626×10⁻³⁴)² / [8 × 9.109×10⁻³¹ × (0.5×10⁻⁹)²]',
            'E₁ = 2.41×10⁻¹⁹ J = 1.50 eV',
            'For n=2 (first excited):',
            'E₂ = 4E₁ = 9.64×10⁻¹⁹ J = 6.02 eV',
            'For n=3 (second excited):',
            'E₃ = 9E₁ = 2.17×10⁻¹⁸ J = 13.5 eV',
            'Energy spacing increases: ΔE₁₂ = 4.52 eV, ΔE₂₃ = 7.53 eV',
            'Zero-point energy: E₁ ≠ 0 (quantum effect)',
            'E_n ∝ n² (quadratic spacing)',
            'Smaller box → higher energies'
        ],
        helper: 'Use E_n = n²h²/(8mL²) for particle in box',
        solution: 'E₁=1.50 eV, E₂=6.02 eV, E₃=13.5 eV',
        realWorldContext: 'Model for electrons in quantum dots and molecules'
    });

    // Problem 7: Quantum Tunneling Probability
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Tunneling Through a Barrier',
        problem: 'An electron with E = 5 eV encounters a potential barrier of height V₀ = 10 eV and width L = 0.2 nm. Estimate the tunneling probability.',
        parameters: { 
            energy: 5 * 1.602176634e-19,
            barrierHeight: 10 * 1.602176634e-19,
            barrierWidth: 0.2e-9
        },
        type: 'de_broglie',
        context: { difficulty: 'advanced', topic: 'Quantum Tunneling' },
        subparts: [
            'Given: E = 5 eV, V₀ = 10 eV, L = 0.2 nm',
            'Classical physics: E < V₀ → reflection (T = 0)',
            'Quantum mechanics: finite tunneling probability',
            'Decay constant: κ = √[2m(V₀ - E)]/ℏ',
            'V₀ - E = 5 eV = 8.01×10⁻¹⁹ J',
            'κ = √[2 × 9.109×10⁻³¹ × 8.01×10⁻¹⁹] / 1.055×10⁻³⁴',
            'κ = 1.15×10¹⁰ m⁻¹',
            'Tunneling probability: T ≈ e^(-2κL)',
            'T = e^(-2 × 1.15×10¹⁰ × 0.2×10⁻⁹)',
            'T = e^(-4.6) = 0.010 = 1.0%',
            'About 1 in 100 electrons tunnel through!',
            'Classical: impossible; Quantum: 1% probability',
            'Thinner/lower barriers → higher tunneling'
        ],
        helper: 'Use T ≈ e^(-2κL) where κ = √[2m(V₀-E)]/ℏ',
        solution: 'T ≈ 1.0% (quantum tunneling)',
        realWorldContext: 'Basis for STM, radioactive decay, and tunnel diodes'
    });

    return relatedProblems;
}

// ============== WAVE-PARTICLE DUALITY - RELATED PROBLEMS GENERATOR ==============

function generateRelatedWaveParticleDuality() {
    const relatedProblems = [];

    // Problem 1: Double-Slit Interference
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Electron Double-Slit Experiment',
        problem: 'Electrons with kinetic energy 50 eV pass through a double slit with separation d = 1 μm. At what angle is the first interference maximum on a screen 1 m away?',
        parameters: { 
            kineticEnergy: 50 * 1.602176634e-19,
            slitSeparation: 1e-6,
            screenDistance: 1
        },
        type: 'de_broglie',
        context: { difficulty: 'intermediate', topic: 'Wave-Particle Duality' },
        subparts: [
            'Given: K = 50 eV, d = 1 μm, L = 1 m',
            'Find de Broglie wavelength:',
            'K = ½mv² → v = √(2K/m)',
            'v = √(2 × 50 × 1.602×10⁻¹⁹ / 9.109×10⁻³¹)',
            'v = 4.19×10⁶ m/s',
            'λ = h/(mv) = 6.626×10⁻³⁴ / (9.109×10⁻³¹ × 4.19×10⁶)',
            'λ = 1.73×10⁻¹⁰ m = 0.173 nm',
            'First maximum: d sin θ = λ',
            'sin θ = λ/d = 1.73×10⁻¹⁰ / 1×10⁻⁶',
            'sin θ = 1.73×10⁻⁴',
            'θ = 0.0099° ≈ 0.01°',
            'Position on screen: y = L tan θ ≈ L θ',
            'y = 1 × 1.73×10⁻⁴ = 0.173 mm',
            'Electrons show wave interference!'
        ],
        helper: 'Treat electrons as waves: d sin θ = nλ',
        solution: 'θ = 0.01°, y = 0.173 mm',
        realWorldContext: 'Demonstrates wave nature of particles'
    });

    // Problem 2: Davisson-Germer Experiment
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electron Diffraction from Crystal',
        problem: 'Electrons accelerated through 54 V show a diffraction peak at 50° from a nickel crystal with d-spacing 0.215 nm. Verify this confirms de Broglie\'s hypothesis.',
        parameters: { 
            voltage: 54,
            angle: 50 * Math.PI / 180,
            dSpacing: 0.215e-9
        },
        type: 'de_broglie',
        context: { difficulty: 'intermediate', topic: 'Electron Diffraction' },
        subparts: [
            'Given: V = 54 V, θ = 50°, d = 0.215 nm',
            'Calculate electron wavelength from voltage:',
            'K = eV = 54 eV = 8.65×10⁻¹⁸ J',
            'λ = h/p = h/√(2mK)',
            'λ = 6.626×10⁻³⁴ / √(2 × 9.109×10⁻³¹ × 8.65×10⁻¹⁸)',
            'λ = 1.67×10⁻¹⁰ m = 0.167 nm',
            'Bragg\'s law: 2d sin θ = nλ',
            'For n=1: λ_Bragg = 2 × 0.215 × sin 50°',
            'λ_Bragg = 2 × 0.215 × 0.766 = 0.329 nm',
            'Hmm, doesn\'t match! Use n=2:',
            'λ = 0.329/2 = 0.165 nm ≈ 0.167 nm ✓',
            'Excellent agreement with de Broglie prediction!',
            'This 1927 experiment confirmed wave nature of electrons',
            'Won Nobel Prize in Physics 1937'
        ],
        helper: 'Compare calculated λ with Bragg\'s law prediction',
        solution: 'λ_calc = 0.167 nm matches λ_Bragg = 0.165 nm',
        realWorldContext: 'Historic experiment confirming quantum mechanics'
    });

    // Problem 3: Neutron Diffraction
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Thermal Neutron Wavelength',
        problem: 'Thermal neutrons at room temperature (T = 300 K) are used for diffraction studies. Calculate their de Broglie wavelength.',
        parameters: { 
            temperature: 300,
            mass: 1.675e-27
        },
        type: 'de_broglie',
        context: { difficulty: 'intermediate', topic: 'Neutron Diffraction' },
        subparts: [
            'Given: T = 300 K, m_n = 1.675×10⁻²⁷ kg',
            'Thermal energy: E = (3/2)k_B T',
            'k_B = 1.381×10⁻²³ J/K',
            'E = 1.5 × 1.381×10⁻²³ × 300 = 6.21×10⁻²¹ J',
            'E = 0.0388 eV (thermal energy)',
            'Average kinetic energy: K = ½mv²',
            'v = √(2K/m) = √(2 × 6.21×10⁻²¹ / 1.675×10⁻²⁷)',
            'v = 2.72×10³ m/s',
            'De Broglie wavelength: λ = h/(m_n v)',
            'λ = 6.626×10⁻³⁴ / (1.675×10⁻²⁷ × 2.72×10³)',
            'λ = 1.45×10⁻¹⁰ m = 0.145 nm = 1.45 Å',
            'Comparable to atomic spacing in crystals!',
            'Ideal for studying crystal structures',
            'Complementary to X-ray diffraction'
        ],
        helper: 'Thermal energy: E = (3/2)k_B T, then find λ',
        solution: 'λ = 1.45 Å',
        realWorldContext: 'Used in materials science and biology'
    });

    // Problem 4: Complementarity Principle
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Which-Way Information',
        problem: 'In a double-slit experiment, adding detectors to determine which slit the electron passes through destroys the interference pattern. If the detector has position uncertainty Δx, what is the minimum Δx that preserves the pattern?',
        parameters: { 
            slitSeparation: 1e-6
        },
        type: 'uncertainty_principle',
        context: { difficulty: 'advanced', topic: 'Complementarity Principle' },
        subparts: [
            'Given: slit separation d = 1 μm',
            'For interference: paths must be indistinguishable',
            'Which-way information requires: Δx < d',
            'But this gives momentum kick: Δp ≥ ℏ/(2Δx)',
            'For d = 1 μm and Δx = d/2 = 0.5 μm:',
            'Δp ≥ 1.055×10⁻³⁴ / (2 × 0.5×10⁻⁶)',
            'Δp ≥ 1.06×10⁻²⁸ kg·m/s',
            'This changes velocity: Δv = Δp/m_e = 1.16×10² m/s',
            'Angular deviation: Δθ ≈ Δv/v',
            'For 50 eV electrons: v = 4.19×10⁶ m/s',
            'Δθ ≈ 1.16×10² / 4.19×10⁶ = 2.77×10⁻⁵ rad',
            'This smears out interference fringes!',
            'To preserve pattern: Δx >> d',
            'Complementarity: cannot have both wave and particle info'
        ],
        helper: 'Measurement collapses wave function, destroys interference',
        solution: 'Need Δx >> d to preserve interference',
        realWorldContext: 'Fundamental principle of quantum mechanics'
    });

    // Problem 5: Photon vs Electron Wavelength
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Comparing Photon and Electron',
        problem: 'Compare the wavelengths of: (a) a 10 eV photon, (b) a 10 eV electron. Explain the difference.',
        parameters: { 
            energy: 10 * 1.602176634e-19
        },
        type: 'de_broglie',
        context: { difficulty: 'beginner', topic: 'Photon vs Matter Waves' },
        subparts: [
            'Given: E = 10 eV for both',
            '(a) Photon wavelength:',
            'E = hc/λ → λ = hc/E',
            'λ_photon = (6.626×10⁻³⁴ × 3×10⁸) / (10 × 1.602×10⁻¹⁹)',
            'λ_photon = 124 nm (UV light)',
            '(b) Electron wavelength:',
            'K = ½mv² = 10 eV',
            'v = √(2K/m) = √(2 × 10 × 1.602×10⁻¹⁹ / 9.109×10⁻³¹)',
            'v = 1.87×10⁶ m/s',
            'λ_electron = h/(mv) = 6.626×10⁻³⁴ / (9.109×10⁻³¹ × 1.87×10⁶)',
            'λ_electron = 0.388 nm',
            'Ratio: λ_photon/λ_electron = 124/0.388 = 320',
            'Photon wavelength much longer!',
            'Reason: photon has no rest mass (E = pc)',
            'Electron has rest mass (E² = p²c² + m²c⁴)'
        ],
        helper: 'Photons: E = hc/λ; Electrons: λ = h/√(2mK)',
        solution: 'λ_photon = 124 nm, λ_electron = 0.388 nm',
        realWorldContext: 'Why electron microscopes have better resolution than optical'
    });

    // Problem 6: Matter Wave Group Velocity
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Phase vs Group Velocity',
        problem: 'Show that for a free particle, the group velocity of its matter wave equals its classical velocity, while phase velocity is v/2.',
        parameters: { 
            energy: 100 * 1.602176634e-19,
            mass: 9.109e-31
        },
        type: 'de_broglie',
        context: { difficulty: 'advanced', topic: 'Wave Packet Dynamics' },
        subparts: [
            'Given: K = 100 eV, non-relativistic',
            'Classical velocity: v = √(2K/m)',
            'v = √(2 × 100 × 1.602×10⁻¹⁹ / 9.109×10⁻³¹)',
            'v = 5.93×10⁶ m/s',
            'Matter wave: ω = E/ℏ, k = p/ℏ',
            'Phase velocity: v_p = ω/k = E/p',
            'E = p²/(2m) → v_p = p/(2m) = v/2',
            'v_p = 2.97×10⁶ m/s = v/2 ✓',
            'Group velocity: v_g = dω/dk',
            'ω = ℏk²/(2m) → dω/dk = ℏk/m = p/m = v',
            'v_g = 5.93×10⁶ m/s = v ✓',
            'Physical interpretation:',
            '• Group velocity = particle velocity (observable)',
            '• Phase velocity has no direct physical meaning',
            '• Wave packet moves at group velocity'
        ],
        helper: 'Group velocity v_g = dω/dk = particle velocity',
        solution: 'v_p = v/2 = 2.97×10⁶ m/s, v_g = v = 5.93×10⁶ m/s',
        realWorldContext: 'Explains how quantum waves relate to classical motion'
    });

    // Problem 7: Macroscopic Quantum Coherence
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Quantum Coherence Length',
        problem: 'A beam of electrons at 100 eV has energy spread ΔE = 0.1 eV. Estimate the coherence length of the beam.',
        parameters: { 
            energy: 100 * 1.602176634e-19,
            energySpread: 0.1 * 1.602176634e-19
        },
        type: 'uncertainty_principle',
        context: { difficulty: 'advanced', topic: 'Quantum Coherence' },
        subparts: [
            'Given: E = 100 eV, ΔE = 0.1 eV',
            'Find central wavelength:',
            'λ = h/√(2mE) = 6.626×10⁻³⁴ / √(2 × 9.109×10⁻³¹ × 160.2×10⁻¹⁹)',
            'λ = 0.123 nm',
            'Wavelength spread: Δλ/λ ≈ ΔE/(2E)',
            'Δλ/λ = 0.1/(2 × 100) = 0.0005',
            'Δλ = 0.0005 × 0.123 = 6.15×10⁻⁵ nm',
            'Coherence length: L_c ≈ λ²/Δλ',
            'L_c = (0.123)² / (6.15×10⁻⁵) = 246 nm',
            'Alternative: L_c ≈ ℏv/(2ΔE)',
            'v = 5.93×10⁶ m/s',
            'L_c = 1.055×10⁻³⁴ × 5.93×10⁶ / (2 × 0.1 × 1.602×10⁻¹⁹)',
            'L_c = 195 nm (same order)',
            'Interference observable over this distance'
        ],
        helper: 'Coherence length: L_c ≈ λ²/Δλ ≈ ℏv/(2ΔE)',
        solution: 'L_c ≈ 200 nm',
        realWorldContext: 'Limits resolution in electron holography and interferometry'
    });

    return relatedProblems;
}

// ============== SOLVER FUNCTIONS ==============

function solvePhotoelectricRelatedProblems() {
    const problems = generateRelatedPhotoelectricEffect();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Photoelectric Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedPhysicsMathematicalWorkbook({
            theme: 'physics',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solvePhysicsProblem({
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

function solveComptonRelatedProblems() {
    const problems = generateRelatedComptonScattering();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Compton Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedPhysicsMathematicalWorkbook({
            theme: 'physics',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solvePhysicsProblem({
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

function solveAtomicSpectraRelatedProblems() {
    const problems = generateRelatedAtomicSpectra();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Atomic Spectra Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedPhysicsMathematicalWorkbook({
            theme: 'physics',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solvePhysicsProblem({
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

function solveBohrModelRelatedProblems() {
    const problems = generateRelatedBohrModel();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Bohr Model Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedPhysicsMathematicalWorkbook({
            theme: 'physics',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solvePhysicsProblem({
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

function solveQuantumMechanicsRelatedProblems() {
    const problems = generateRelatedQuantumMechanics();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Quantum Mechanics Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedPhysicsMathematicalWorkbook({
            theme: 'physics',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solvePhysicsProblem({
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

function solveWaveParticleDualityRelatedProblems() {
    const problems = generateRelatedWaveParticleDuality();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Wave-Particle Duality Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedPhysicsMathematicalWorkbook({
            theme: 'physics',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solvePhysicsProblem({
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

// ============== COMPREHENSIVE DOCUMENT GENERATION ==============

async function generateComprehensiveDocument() {
    console.log('Generating Comprehensive Modern Physics Workbook with Related Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Modern Physics Workbook',
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
            text: 'Photoelectric Effect, Compton Scattering, Atomic Spectra, Bohr Model, Quantum Mechanics, and Wave-Particle Duality',
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

    // Part I: Photoelectric Effect
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Photoelectric Effect (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const photoelectricProblems = generateRelatedPhotoelectricEffect();
    photoelectricProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Compton Scattering
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Compton Scattering (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const comptonProblems = generateRelatedComptonScattering();
    comptonProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Atomic Spectra
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Atomic Spectra (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const atomicSpectraProblems = generateRelatedAtomicSpectra();
    atomicSpectraProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 15}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Bohr Model
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Bohr Model (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const bohrModelProblems = generateRelatedBohrModel();
    bohrModelProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 22}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Quantum Mechanics
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Quantum Mechanics (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const quantumMechanicsProblems = generateRelatedQuantumMechanics();
    quantumMechanicsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 29}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VI: Wave-Particle Duality
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Wave-Particle Duality (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const waveParticleDualityProblems = generateRelatedWaveParticleDuality();
    waveParticleDualityProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 36}. ${problem.scenario}: ${problem.problem}`,
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

    // ============== PART I: PHOTOELECTRIC EFFECT ==============
    console.log('\nProcessing Part I: Photoelectric Effect...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Photoelectric Effect',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const photoelectricSolved = solvePhotoelectricRelatedProblems();
    photoelectricSolved.forEach((solved, index) => {
        console.log(`  Adding Photoelectric Problem ${index + 1} to document...`);

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

    // ============== PART II: COMPTON SCATTERING ==============
    console.log('\nProcessing Part II: Compton Scattering...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Compton Scattering',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const comptonSolved = solveComptonRelatedProblems();
    comptonSolved.forEach((solved, index) => {
        console.log(`  Adding Compton Problem ${index + 1} to document...`);

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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 }
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART III: ATOMIC SPECTRA ==============
    console.log('\nProcessing Part III: Atomic Spectra...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Atomic Spectra',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const atomicSpectraSolved = solveAtomicSpectraRelatedProblems();
    atomicSpectraSolved.forEach((solved, index) => {
        console.log(`  Adding Atomic Spectra Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 15}: ${solved.problem.scenario}`,
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

    // ============== PART IV: BOHR MODEL ==============
    console.log('\nProcessing Part IV: Bohr Model...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Bohr Model',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const bohrModelSolved = solveBohrModelRelatedProblems();
    bohrModelSolved.forEach((solved, index) => {
        console.log(`  Adding Bohr Model Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 22}: ${solved.problem.scenario}`,
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

    // ============== PART V: QUANTUM MECHANICS ==============
    console.log('\nProcessing Part V: Quantum Mechanics...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Quantum Mechanics',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const quantumMechanicsSolved = solveQuantumMechanicsRelatedProblems();
    quantumMechanicsSolved.forEach((solved, index) => {
        console.log(`  Adding Quantum Mechanics Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 29}: ${solved.problem.scenario}`,
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

    // ============== PART VI: WAVE-PARTICLE DUALITY ==============
    console.log('\nProcessing Part VI: Wave-Particle Duality...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Wave-Particle Duality',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const waveParticleDualitySolved = solveWaveParticleDualityRelatedProblems();
    waveParticleDualitySolved.forEach((solved, index) => {
        console.log(`  Adding Wave-Particle Duality Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 36}: ${solved.problem.scenario}`,
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
        const filename = 'comprehensive_modern_physics_workbook_with_related_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE MODERN PHYSICS DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 42');
        console.log('    - Photoelectric Effect: 7 problems');
        console.log('    - Compton Scattering: 7 problems');
        console.log('    - Atomic Spectra: 7 problems');
        console.log('    - Bohr Model: 7 problems');
        console.log('    - Quantum Mechanics: 7 problems');
        console.log('    - Wave-Particle Duality: 7 problems');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Part I: Photoelectric Effect (Problems 1-7)');
        console.log('  • Part II: Compton Scattering (Problems 8-14)');
        console.log('  • Part III: Atomic Spectra (Problems 15-21)');
        console.log('  • Part IV: Bohr Model (Problems 22-28)');
        console.log('  • Part V: Quantum Mechanics (Problems 29-35)');
        console.log('  • Part VI: Wave-Particle Duality (Problems 36-42)');
        console.log('\n📄 EXPECTED PAGES: 150+ pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level');
        console.log('  • Helper tips for quick guidance');
        console.log('  • Real-world context and applications');
        console.log('  • Complete step-by-step solution with physics insights');
        console.log('  • Enhanced explanations and verification');
        console.log('  • Key physics concepts and theory');
        console.log('  • Physical constants used');
        console.log('  • Pedagogical notes for teaching');
        console.log('  • Alternative solution methods');
        console.log('  • Common mistakes and error prevention');
        console.log('  • Physical interpretations of results');
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
