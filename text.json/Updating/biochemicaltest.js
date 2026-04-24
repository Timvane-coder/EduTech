import { createCanvas }  from '@napi-rs/canvas';
import inquirer          from 'inquirer';
import chalk             from 'chalk';
import fs                from 'fs';
import path              from 'path';
import { fileURLToPath } from 'url';

import EnhancedSpreadsheetWorkbook from './worksheet.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Single shared workbook instance — owns the biochemicalRenderer
const workbook = new EnhancedSpreadsheetWorkbook();

// ─────────────────────────────────────────────────────────────────────────────
// CANVAS + FILE HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

/**
 * Uses the workbook's managed biochemicalRenderer to render and save a PNG.
 */
function renderAndSave(diagramKey, options, width, height, outputPath) {
    const canvas = createCanvas(width, height);
    workbook.biochemicalRenderer.canvas = canvas;
    workbook.biochemicalRenderer.ctx    = canvas.getContext('2d');
    workbook.biochemicalRenderer.renderDiagram(diagramKey, 0, 0, width, height, options);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
}

// ─────────────────────────────────────────────────────────────────────────────
// DIAGRAM DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────






// ─────────────────────────────────────────────────────────────────────────────
// DIAGRAM TEST DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────

const DIAGRAMS = {

    // ── Benedict's Test for Reducing Sugars ──────────────────────────────────
    benedictsTest: {
        label:  "Benedict's Test for Reducing Sugars",
        tag:    'BENE',
        width:  720,
        height: 560,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `bene_step_${step}.png`,
                    desc: [
                        "Step 1 — Benedict's Reagent (blue Cu²⁺)",
                        'Step 2 — Adding Food Sample',
                        'Step 3 — Heating in Water Bath',
                        'Step 4 — Colour Change Observation',
                        'Step 5 — Results Table & Interpretation'
                    ][step - 1],
                    options: {
                        component:          'complete',
                        sugarConcentration: step >= 4 ? 'high' : 'negative',
                        drawingStep:        step,
                        showLabels:         true,
                        showInset:          step === 5,
                        insetType:          'colour-gradient'
                    }
                }))
            },
            {
                name: 'All Sugar Concentrations (Step 4)',
                cases: ['negative', 'trace', 'low', 'medium', 'high'].map(conc => ({
                    filename: `bene_conc_${conc}.png`,
                    desc:     `Benedict's — ${conc} reducing sugar`,
                    options:  {
                        component:          'complete',
                        sugarConcentration: conc,
                        drawingStep:        4,
                        showLabels:         true,
                        showInset:          false
                    }
                }))
            },
            {
                name: 'Step 5 with All Insets',
                cases: ['colour-gradient', 'redox-reaction', 'copper-reduction', 'sugar-structures'].map(inset => ({
                    filename: `bene_inset_${inset.replace(/\//g, '-')}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        component:          'complete',
                        sugarConcentration: 'high',
                        drawingStep:        5,
                        showLabels:         true,
                        showInset:          true,
                        insetType:          inset
                    }
                }))
            }
        ]
    },

    // ── Iodine Test for Starch ────────────────────────────────────────────────
    iodineTest: {
        label:  'Iodine Test for Starch',
        tag:    'IODI',
        width:  680,
        height: 520,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `iodi_step_${step}.png`,
                    desc: [
                        'Step 1 — Iodine/KI Reagent',
                        'Step 2 — Spotting Tile Preparation',
                        'Step 3 — Dropper Application',
                        'Step 4 — Colour Change Observation',
                        'Step 5 — Results Table & Interpretation'
                    ][step - 1],
                    options: {
                        component:    'complete',
                        starchPresent: 'present',
                        drawingStep:  step,
                        showLabels:   true,
                        showInset:    step === 5,
                        insetType:    'amylose-helix'
                    }
                }))
            },
            {
                name: 'Positive vs Negative Results',
                cases: ['present', 'absent'].map(state => ({
                    filename: `iodi_starch_${state}.png`,
                    desc:     `Iodine test — starch ${state}`,
                    options:  {
                        component:    'complete',
                        starchPresent: state,
                        drawingStep:  4,
                        showLabels:   true,
                        showInset:    false
                    }
                }))
            },
            {
                name: 'Step 5 with All Insets',
                cases: ['amylose-helix', 'iodine-complex', 'colour-comparison', 'starch-structure'].map(inset => ({
                    filename: `iodi_inset_${inset.replace(/\//g, '-')}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        component:    'complete',
                        starchPresent: 'present',
                        drawingStep:  5,
                        showLabels:   true,
                        showInset:    true,
                        insetType:    inset
                    }
                }))
            }
        ]
    },

    // ── Biuret Test for Proteins ──────────────────────────────────────────────
    biuretTest: {
        label:  'Biuret Test for Proteins',
        tag:    'BIUR',
        width:  700,
        height: 540,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `biur_step_${step}.png`,
                    desc: [
                        'Step 1 — Adding NaOH Solution',
                        'Step 2 — Adding Dilute CuSO₄',
                        'Step 3 — Mixing (Biuret Reagent in situ)',
                        'Step 4 — Purple/Lilac Colour Observation',
                        'Step 5 — Results Table & Interpretation'
                    ][step - 1],
                    options: {
                        component:      'complete',
                        proteinPresent: 'present',
                        drawingStep:    step,
                        showLabels:     true,
                        showInset:      step === 5,
                        insetType:      'peptide-bond-detail'
                    }
                }))
            },
            {
                name: 'Positive vs Negative Results',
                cases: ['present', 'absent'].map(state => ({
                    filename: `biur_protein_${state}.png`,
                    desc:     `Biuret test — protein ${state}`,
                    options:  {
                        component:      'complete',
                        proteinPresent: state,
                        drawingStep:    4,
                        showLabels:     true,
                        showInset:      false
                    }
                }))
            },
            {
                name: 'Step 5 with All Insets',
                cases: ['peptide-bond-detail', 'copper-coordination', 'colour-comparison', 'protein-structure'].map(inset => ({
                    filename: `biur_inset_${inset.replace(/\//g, '-')}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        component:      'complete',
                        proteinPresent: 'present',
                        drawingStep:    5,
                        showLabels:     true,
                        showInset:      true,
                        insetType:      inset
                    }
                }))
            }
        ]
    },

    // ── Sudan III/IV Test for Lipids ──────────────────────────────────────────
    sudanTest: {
        label:  'Sudan III/IV Test for Lipids',
        tag:    'SUDA',
        width:  700,
        height: 560,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `suda_step_${step}.png`,
                    desc: [
                        'Step 1 — Sudan III/IV Dye Solution',
                        'Step 2 — Adding Food Sample',
                        'Step 3 — Shaking / Mixing',
                        'Step 4 — Layer Separation & Red Staining',
                        'Step 5 — Results Table & Interpretation'
                    ][step - 1],
                    options: {
                        component:   'complete',
                        lipidPresent: 'present',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'lipid-bilayer'
                    }
                }))
            },
            {
                name: 'Positive vs Negative Results',
                cases: ['present', 'absent'].map(state => ({
                    filename: `suda_lipid_${state}.png`,
                    desc:     `Sudan test — lipid ${state}`,
                    options:  {
                        component:   'complete',
                        lipidPresent: state,
                        drawingStep: 4,
                        showLabels:  true,
                        showInset:   false
                    }
                }))
            },
            {
                name: 'Step 5 with All Insets',
                cases: ['lipid-bilayer', 'dye-solubility', 'emulsion-detail', 'triglyceride-structure'].map(inset => ({
                    filename: `suda_inset_${inset.replace(/\//g, '-')}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        component:   'complete',
                        lipidPresent: 'present',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },



    // ── Heart Anatomy ─────────────────────────────────────────────────────────
    heartAnatomy: {
        label:  'Heart Anatomy',
        tag:    'HEART',
        width:  620,
        height: 560,
        groups: [
            {
                name: 'Step-by-Step Build (whole heart)',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `heart_step_${step}.png`,
                    desc: [
                        'Step 1 — Overall Heart Shape (Outer Outline)',
                        'Step 2 — Center Dividing Curve',
                        'Step 3 — Atria & Ventricles',
                        'Step 4 — Major Blood Vessels & Valves',
                        'Step 5 — Final Outline & Labels'
                    ][step - 1],
                    options: {
                        chamber:       'wholeheart',
                        drawingStep:   step,
                        showLabels:    true,
                        showBloodFlow: step === 5,
                        showInset:     step === 5,
                        insetType:     'cardiac-cycle'
                    }
                }))
            },
            {
                name: 'Individual Chambers',
                cases: ['rightAtrium', 'rightVentricle', 'leftAtrium', 'leftVentricle'].map(ch => ({
                    filename: `heart_chamber_${ch}.png`,
                    desc:     `Chamber — ${ch}`,
                    options:  { chamber: ch, showLabels: true }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['cardiac-cycle', 'conduction-system', 'coronary-circulation', 'valve-mechanism'].map(inset => ({
                    filename: `heart_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        chamber:       'wholeheart',
                        drawingStep:   5,
                        showLabels:    true,
                        showBloodFlow: true,
                        showInset:     true,
                        insetType:     inset
                    }
                }))
            }
        ]
    },

    // ── Circulatory System ────────────────────────────────────────────────────
    circulatorySystem: {
        label:  'Circulatory System',
        tag:    'CIRC',
        width:  620,
        height: 720,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `circ_step_${step}.png`,
                    desc: [
                        'Step 1 — Lungs (Start at the Top)',
                        'Step 2 — Heart (Below the Lungs)',
                        'Step 3 — Pulmonary Circulation (Heart to Lungs)',
                        'Step 4 — Systemic Circulation (Heart to Body)',
                        'Step 5 — Complete with Labels & Direction Arrows'
                    ][step - 1],
                    options: {
                        component:       'complete',
                        drawingStep:     step,
                        showLabels:      true,
                        showOxygenation: step >= 3,
                        showInset:       step === 5,
                        insetType:       'capillary-exchange'
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['capillary-exchange', 'gas-exchange', 'valve-mechanism', 'cardiac-cycle'].map(inset => ({
                    filename: `circ_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        component:       'complete',
                        drawingStep:     5,
                        showLabels:      true,
                        showOxygenation: true,
                        showInset:       true,
                        insetType:       inset
                    }
                }))
            }
        ]
    },

    // ── Respiratory System ────────────────────────────────────────────────────
    respiratorySystem: {
        label:  'Respiratory System',
        tag:    'RESP',
        width:  560,
        height: 680,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `resp_step_${step}.png`,
                    desc: [
                        'Step 1 — Nasal Cavity & Trachea',
                        'Step 2 — Primary Bronchi',
                        'Step 3 — Lungs (Left 2 lobes, Right 3 lobes)',
                        'Step 4 — Bronchioles & Alveoli',
                        'Step 5 — Diaphragm & Complete Labels'
                    ][step - 1],
                    options: {
                        component:   'complete',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'gas-exchange'
                    }
                }))
            },
            {
                name: 'Individual Components',
                cases: [
                    'mouth', 'esophagus', 'stomach',
                    'small-intestine', 'large-intestine',
                    'liver', 'pancreas', 'gallbladder'
                ].map(comp => ({
                    filename: `resp_component_${comp}.png`,
                    desc:     `Component — ${comp}`,
                    width:    300,
                    height:   320,
                    options:  { component: comp, showLabels: true }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['gas-exchange', 'alveolar-structure', 'surfactant-function', 'oxygen-hemoglobin'].map(inset => ({
                    filename: `resp_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        component:   'complete',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Digestive System ──────────────────────────────────────────────────────
    digestiveSystem: {
        label:  'Digestive System',
        tag:    'DIGE',
        width:  560,
        height: 720,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `dige_step_${step}.png`,
                    desc: [
                        'Step 1 — Mouth & Esophagus',
                        'Step 2 — Stomach',
                        'Step 3 — Liver, Pancreas & Gallbladder',
                        'Step 4 — Small & Large Intestines',
                        'Step 5 — Complete with Labels & Digestion Notes'
                    ][step - 1],
                    options: {
                        component:   'complete',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'villi-structure'
                    }
                }))
            },
            {
                name: 'Individual Components',
                cases: [
                    'mouth', 'esophagus', 'stomach',
                    'small-intestine', 'large-intestine',
                    'liver', 'pancreas', 'gallbladder'
                ].map(comp => ({
                    filename: `dige_component_${comp}.png`,
                    desc:     `Component — ${comp}`,
                    width:    320,
                    height:   320,
                    options:  { component: comp, showLabels: true }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['villi-structure', 'enzyme-action', 'peristalsis', 'bile-production'].map(inset => ({
                    filename: `dige_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        component:   'complete',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Nervous System ────────────────────────────────────────────────────────
    nervousSystem: {
        label:  'Nervous System',
        tag:    'NERV',
        width:  500,
        height: 720,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `nerv_step_${step}.png`,
                    desc: [
                        'Step 1 — Brain',
                        'Step 2 — Spinal Cord',
                        'Step 3 — Cranial Nerves',
                        'Step 4 — Spinal Nerves & Peripheral Branches',
                        'Step 5 — Complete with Autonomic Divisions & Labels'
                    ][step - 1],
                    options: {
                        component:   'complete',
                        division:    'both',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'action-potential'
                    }
                }))
            },
            {
                name: 'Individual Components',
                cases: [
                    'brain', 'spinal-cord', 'cranial-nerves',
                    'spinal-nerves', 'autonomic'
                ].map(comp => ({
                    filename: `nerv_component_${comp}.png`,
                    desc:     `Component — ${comp}`,
                    width:    340,
                    height:   400,
                    options:  { component: comp, showLabels: true }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: [
                    'action-potential', 'neurotransmitter-release',
                    'saltatory-conduction', 'synapse-detail'
                ].map(inset => ({
                    filename: `nerv_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        component:   'complete',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Neuron Structure ──────────────────────────────────────────────────────
    neuronStructure: {
        label:  'Neuron Structure',
        tag:    'NEUR',
        width:  800,
        height: 420,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `neur_step_${step}.png`,
                    desc: [
                        'Step 1 — Cell Body (Soma)',
                        'Step 2 — Dendrites (Input)',
                        'Step 3 — Axon & Myelin Sheath',
                        'Step 4 — Axon Terminals & Synapse',
                        'Step 5 — Complete with Signal Direction'
                    ][step - 1],
                    options: {
                        component:   'complete',
                        state:       step === 5 ? 'action-potential' : 'resting',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'action-potential'
                    }
                }))
            },
            {
                name: 'Individual Components',
                cases: [
                    'dendrites', 'soma', 'axon',
                    'myelin', 'terminals', 'nodes-of-ranvier'
                ].map(comp => ({
                    filename: `neur_component_${comp}.png`,
                    desc:     `Component — ${comp}`,
                    width:    420,
                    height:   300,
                    options:  { component: comp, showLabels: true }
                }))
            },
            {
                name: 'Different States',
                cases: ['resting', 'action-potential', 'refractory'].map(state => ({
                    filename: `neur_state_${state}.png`,
                    desc:     `State — ${state}`,
                    options:  {
                        component:   'complete',
                        state,
                        drawingStep: 5,
                        showLabels:  true
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: [
                    'action-potential', 'neurotransmitter-release',
                    'saltatory-conduction', 'synapse-detail'
                ].map(inset => ({
                    filename: `neur_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        component:   'complete',
                        state:       'action-potential',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Skeletal System ───────────────────────────────────────────────────────
    skeletalSystem: {
        label:  'Skeletal System',
        tag:    'SKEL',
        width:  480,
        height: 720,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `skel_step_${step}.png`,
                    desc: [
                        'Step 1 — Axial Skeleton (Skull, Spine, Ribcage)',
                        'Step 2 — Pectoral Girdle & Upper Limbs',
                        'Step 3 — Pelvic Girdle & Lower Limbs',
                        'Step 4 — Hands & Feet',
                        'Step 5 — Complete with Labels & Bone Counts'
                    ][step - 1],
                    options: {
                        region:      'complete',
                        view:        'anterior',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'bone-structure'
                    }
                }))
            },
            {
                name: 'Individual Regions',
                cases: [
                    'axial', 'appendicular', 'skull',
                    'ribcage', 'spine', 'pelvis',
                    'upper-limb', 'lower-limb'
                ].map(region => ({
                    filename: `skel_region_${region}.png`,
                    desc:     `Region — ${region}`,
                    width:    340,
                    height:   400,
                    options:  { region, view: 'anterior', showLabels: true }
                }))
            },
            {
                name: 'Different Views (complete skeleton)',
                cases: ['anterior', 'posterior', 'lateral'].map(view => ({
                    filename: `skel_view_${view}.png`,
                    desc:     `View — ${view}`,
                    options:  {
                        region:      'complete',
                        view,
                        drawingStep: 5,
                        showLabels:  true
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['bone-structure', 'joint-types', 'osteon', 'cartilage'].map(inset => ({
                    filename: `skel_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        region:      'complete',
                        view:        'anterior',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Urinary System ────────────────────────────────────────────────────────
    urinarySystem: {
        label:  'Urinary System',
        tag:    'URIN',
        width:  500,
        height: 680,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `urin_step_${step}.png`,
                    desc: [
                        'Step 1 — Kidneys & Adrenal Glands',
                        'Step 2 — Ureters',
                        'Step 3 — Urinary Bladder',
                        'Step 4 — Urethra',
                        'Step 5 — Complete with Labels & Nephron Callout'
                    ][step - 1],
                    options: {
                        component:   'complete',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'nephron-detail'
                    }
                }))
            },
            {
                name: 'Individual Components',
                cases: [
                    'kidney', 'nephron', 'ureter',
                    'bladder', 'urethra', 'glomerulus'
                ].map(comp => ({
                    filename: `urin_component_${comp}.png`,
                    desc:     `Component — ${comp}`,
                    width:    360,
                    height:   360,
                    options:  { component: comp, showLabels: true }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: [
                    'nephron-detail', 'glomerular-filtration',
                    'countercurrent', 'urine-formation'
                ].map(inset => ({
                    filename: `urin_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        component:   'complete',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Eye Anatomy ───────────────────────────────────────────────────────────
    eyeAnatomy: {
        label:  'Eye Anatomy',
        tag:    'EYE',
        width:  620,
        height: 560,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `eye_step_${step}.png`,
                    desc: [
                        'Step 1 — Outer Coat (Sclera & Cornea)',
                        'Step 2 — Middle Coat (Choroid, Ciliary Body & Iris)',
                        'Step 3 — Inner Coat (Retina, Optic Disc & Blood Vessels)',
                        'Step 4 — Lens, Chambers & Humours',
                        'Step 5 — Complete with Labels & Light Path'
                    ][step - 1],
                    options: {
                        component:   'complete',
                        process:     step === 5 ? 'light-refraction' : 'structure',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'retinal-layers'
                    }
                }))
            },
            {
                name: 'Individual Components',
                cases: [
                    'cornea', 'lens', 'retina',
                    'optic-nerve', 'iris', 'ciliary-body'
                ].map(comp => ({
                    filename: `eye_component_${comp}.png`,
                    desc:     `Component — ${comp}`,
                    width:    360,
                    height:   360,
                    options:  { component: comp, process: 'structure', showLabels: true }
                }))
            },
            {
                name: 'Different Processes',
                cases: ['structure', 'light-refraction', 'accommodation'].map(process => ({
                    filename: `eye_process_${process}.png`,
                    desc:     `Process — ${process}`,
                    options:  {
                        component:   'complete',
                        process,
                        drawingStep: 5,
                        showLabels:  true
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: [
                    'retinal-layers', 'accommodation',
                    'visual-pathway', 'photoreceptors'
                ].map(inset => ({
                    filename: `eye_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        component:   'complete',
                        process:     'light-refraction',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },




// ── Animal Cell ───────────────────────────────────────────────────────────
    animalCell: {
        label:  'Animal Cell',
        tag:    'ACELL',
        width:  620,
        height: 580,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `acell_step_${step}.png`,
                    desc: [
                        'Step 1 — Cell Membrane & Cytoplasm',
                        'Step 2 — Nucleus & Nucleolus',
                        'Step 3 — Mitochondria',
                        'Step 4 — ER, Golgi & Vesicles',
                        'Step 5 — All Organelles & Labels'
                    ][step - 1],
                    options: {
                        view:               'complete',
                        organelleHighlight: null,
                        drawingStep:        step,
                        showLabels:         true,
                        showInset:          step === 5,
                        insetType:          'nucleus-detail'
                    }
                }))
            },
            {
                name: 'Individual Organelle Views',
                cases: [
                    { view: 'nucleus',               desc: 'Nucleus (detailed)',                  filename: 'acell_view_nucleus.png'           },
                    { view: 'mitochondria',          desc: 'Mitochondria (detailed)',             filename: 'acell_view_mitochondria.png'      },
                    { view: 'endoplasmicReticulum',  desc: 'Endoplasmic Reticulum',              filename: 'acell_view_er.png'                },
                    { view: 'golgiApparatus',        desc: 'Golgi Apparatus',                    filename: 'acell_view_golgi.png'             },
                    { view: 'lysosome',              desc: 'Lysosome',                           filename: 'acell_view_lysosome.png'          },
                    { view: 'ribosome',              desc: 'Ribosome',                           filename: 'acell_view_ribosome.png'          },
                    { view: 'centriole',             desc: 'Centriole',                          filename: 'acell_view_centriole.png'         },
                    { view: 'cytoskeleton',          desc: 'Cytoskeleton',                       filename: 'acell_view_cytoskeleton.png'      },
                    { view: 'peroxisome',            desc: 'Peroxisome',                         filename: 'acell_view_peroxisome.png'        },
                    { view: 'vesicle',               desc: 'Vesicle',                            filename: 'acell_view_vesicle.png'           },
                    { view: 'actinFilament',         desc: 'Actin Filament',                     filename: 'acell_view_actin.png'             },
                    { view: 'microtubule',           desc: 'Microtubule',                        filename: 'acell_view_microtubule.png'       },
                    { view: 'cytoplasm',             desc: 'Cytoplasm (detailed)',               filename: 'acell_view_cytoplasm.png'         },
                    { view: 'nuclearPore',           desc: 'Nuclear Pore',                       filename: 'acell_view_nuclear_pore.png'      },
                    { view: 'chromatinFiber',        desc: 'Chromatin Fiber',                    filename: 'acell_view_chromatin.png'         },
                    { view: 'nuclearLamina',         desc: 'Nuclear Lamina',                     filename: 'acell_view_lamina.png'            },
                ].map(({ view, desc, filename }) => ({
                    filename,
                    desc,
                    options: { view, showLabels: true }
                }))
            },
            {
                name: 'Complete Cell with Organelle Highlights',
                cases: [
                    'membrane', 'nucleus', 'mitochondria', 'endoplasmicReticulum',
                    'golgiApparatus', 'lysosome', 'ribosome', 'centriole',
                    'cytoskeleton', 'peroxisome', 'vesicle', 'all'
                ].map(highlight => ({
                    filename: `acell_highlight_${highlight}.png`,
                    desc:     `Complete cell — highlight: ${highlight}`,
                    options:  {
                        view:               'complete',
                        organelleHighlight: highlight,
                        showLabels:         true,
                        showInset:          false
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: [
                    'nucleus-detail', 'mitochondria-detail', 'er-detail',
                    'golgi-detail', 'ribosome-detail', 'centriole-detail'
                ].map(inset => ({
                    filename: `acell_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        view:               'complete',
                        organelleHighlight: null,
                        drawingStep:        5,
                        showLabels:         true,
                        showInset:          true,
                        insetType:          inset
                    }
                }))
            }
        ]
    },

    // ── Plant Cell ────────────────────────────────────────────────────────────
    plantCell: {
        label:  'Plant Cell',
        tag:    'PCELL',
        width:  640,
        height: 620,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `pcell_step_${step}.png`,
                    desc: [
                        'Step 1 — Cell Wall & Membrane',
                        'Step 2 — Central Vacuole',
                        'Step 3 — Nucleus',
                        'Step 4 — Chloroplasts & Plastids',
                        'Step 5 — All Structures & Labels'
                    ][step - 1],
                    options: {
                        view:             'complete',
                        processHighlight: null,
                        drawingStep:      step,
                        showLabels:       true,
                        showInset:        step === 5,
                        insetType:        'chloroplast-detail'
                    }
                }))
            },
            {
                name: 'Individual Structure Views',
                cases: [
                    { view: 'cellWall',            desc: 'Cell Wall',                     filename: 'pcell_view_cellwall.png'          },
                    { view: 'chloroplast',          desc: 'Chloroplast',                  filename: 'pcell_view_chloroplast.png'       },
                    { view: 'vacuole',              desc: 'Central Vacuole',              filename: 'pcell_view_vacuole.png'           },
                    { view: 'plasmodesmata',        desc: 'Plasmodesmata',                filename: 'pcell_view_plasmodesmata.png'     },
                    { view: 'chloroplastGranum',    desc: 'Chloroplast Granum (detail)',  filename: 'pcell_view_granum.png'           },
                    { view: 'middleLamella',        desc: 'Middle Lamella',               filename: 'pcell_view_lamella.png'          },
                    { view: 'primaryPit',           desc: 'Primary Pit',                  filename: 'pcell_view_primary_pit.png'      },
                    { view: 'secondaryWall',        desc: 'Secondary Cell Wall',          filename: 'pcell_view_secondary_wall.png'   },
                    { view: 'amyloplast',           desc: 'Amyloplast',                   filename: 'pcell_view_amyloplast.png'       },
                    { view: 'chromoplast',          desc: 'Chromoplast',                  filename: 'pcell_view_chromoplast.png'      },
                    { view: 'leucoplast',           desc: 'Leucoplast',                   filename: 'pcell_view_leucoplast.png'       },
                    { view: 'cytoplasmicStreaming',  desc: 'Cytoplasmic Streaming',       filename: 'pcell_view_streaming.png'        },
                ].map(({ view, desc, filename }) => ({
                    filename,
                    desc,
                    options: { view, showLabels: true }
                }))
            },
            {
                name: 'Complete Cell with Process Highlights',
                cases: [
                    'photosynthesis', 'turgorPressure', 'cytoplasmicStreaming',
                    'cellWallFormation', 'plasmodesmata', 'nucleus',
                    'chloroplast', 'vacuole', 'mitochondria', 'all'
                ].map(highlight => ({
                    filename: `pcell_highlight_${highlight}.png`,
                    desc:     `Complete cell — highlight: ${highlight}`,
                    options:  {
                        view:             'complete',
                        processHighlight: highlight,
                        showLabels:       true,
                        showInset:        false
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: [
                    'chloroplast-detail', 'cell-wall-layers', 'plasmodesmata-detail',
                    'vacuole-function', 'granum-thylakoid', 'turgor-pressure'
                ].map(inset => ({
                    filename: `pcell_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        view:             'complete',
                        processHighlight: null,
                        drawingStep:      5,
                        showLabels:       true,
                        showInset:        true,
                        insetType:        inset
                    }
                }))
            }
        ]
    },

    // ── Cell Membrane ─────────────────────────────────────────────────────────
    // ── Cell Membrane ─────────────────────────────────────────────────────────
    cellMembrane: {
        label:  'Cell Membrane',
        tag:    'CMEM',
        width:  720,
        height: 440,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [
                    {
                        filename: 'cmem_step_1.png',
                        desc:     'Step 1 — Phospholipid Bilayer',
                        options:  {
                            view:        'phospholipidBilayer',
                            drawingStep: 1,
                            showLabels:  true,
                            showInset:   false
                        }
                    },
                    {
                        filename: 'cmem_step_2.png',
                        desc:     'Step 2 — Integral & Peripheral Proteins',
                        options:  {
                            view:        'membraneProteins',
                            drawingStep: 2,
                            showLabels:  true,
                            showInset:   false
                        }
                    },
                    {
                        filename: 'cmem_step_3.png',
                        desc:     'Step 3 — Transport Mechanisms',
                        options:  {
                            view:        'transportMechanisms',
                            drawingStep: 3,
                            showLabels:  true,
                            showInset:   false
                        }
                    },
                    {
                        filename: 'cmem_step_4.png',
                        desc:     'Step 4 — Receptor & Enzyme Proteins',
                        options:  {
                            view:        'receptorProtein',
                            drawingStep: 4,
                            showLabels:  true,
                            showInset:   false
                        }
                    },
                    {
                        filename: 'cmem_step_5.png',
                        desc:     'Step 5 — Complete Fluid Mosaic Model',
                        options:  {
                            view:        'fluidMosaicModel',
                            drawingStep: 5,
                            showLabels:  true,
                            showInset:   true,
                            insetType:   'phospholipid-structure'
                        }
                    }
                ]
            },
            {
                name: 'Individual Membrane Views',
                cases: [
                    { view: 'fluidMosaicModel',     desc: 'Fluid Mosaic Model (complete)',   filename: 'cmem_view_fluid_mosaic.png'  },
                    { view: 'phospholipidBilayer',  desc: 'Phospholipid Bilayer',            filename: 'cmem_view_bilayer.png'       },
                    { view: 'membraneProteins',     desc: 'Membrane Proteins',               filename: 'cmem_view_proteins.png'      },
                    { view: 'transportMechanisms',  desc: 'Transport Mechanisms (overview)', filename: 'cmem_view_transport.png'     },
                    { view: 'endocytosis',          desc: 'Endocytosis',                     filename: 'cmem_view_endocytosis.png'   },
                    { view: 'exocytosis',           desc: 'Exocytosis',                      filename: 'cmem_view_exocytosis.png'    },
                    { view: 'osmosis',              desc: 'Osmosis',                         filename: 'cmem_view_osmosis.png'       },
                    { view: 'facilitatedDiffusion', desc: 'Facilitated Diffusion',           filename: 'cmem_view_facilitated.png'   },
                    { view: 'ionChannel',           desc: 'Ion Channel (gated)',             filename: 'cmem_view_ion_channel.png'   },
                    { view: 'atpase',               desc: 'ATPase Pump',                    filename: 'cmem_view_atpase.png'        },
                    { view: 'cotransporter',        desc: 'Cotransporter',                  filename: 'cmem_view_cotransporter.png' },
                    { view: 'aquaporin',            desc: 'Aquaporin (water channel)',       filename: 'cmem_view_aquaporin.png'     },
                    { view: 'junctionProteins',     desc: 'Junction Proteins',              filename: 'cmem_view_junctions.png'    },
                    { view: 'receptorProtein',      desc: 'Receptor Protein',               filename: 'cmem_view_receptor.png'     },
                    { view: 'enzymeProtein',        desc: 'Enzyme Protein',                 filename: 'cmem_view_enzyme.png'       },
                ].map(({ view, desc, filename }) => ({
                    filename,
                    desc,
                    options: { view, showLabels: true }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: [
                    'phospholipid-structure',
                    'protein-types',
                    'active-vs-passive',
                    'osmosis-diagram',
                    'ion-channel-gating',
                    'membrane-fluidity'
                ].map(inset => ({
                    filename: `cmem_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        view:        'fluidMosaicModel',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Cell Division ─────────────────────────────────────────────────────────
    cellDivision: {
        label:  'Cell Division',
        tag:    'CDIV',
        width:  720,
        height: 620,
        groups: [
            {
                name: 'Step-by-Step Build (Mitosis)',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `cdiv_step_${step}.png`,
                    desc: [
                        'Step 1 — Interphase (DNA replication)',
                        'Step 2 — Prophase (Chromosomes condense)',
                        'Step 3 — Metaphase (Alignment)',
                        'Step 4 — Anaphase (Separation)',
                        'Step 5 — Telophase & Cytokinesis'
                    ][step - 1],
                    options: {
                        view:        'complete',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'cell-cycle-checkpoints'
                    }
                }))
            },
            {
                name: 'Mitosis Phase Views',
                cases: [
                    { view: 'prophase',   desc: 'Prophase',   filename: 'cdiv_mitosis_prophase.png'   },
                    { view: 'metaphase',  desc: 'Metaphase',  filename: 'cdiv_mitosis_metaphase.png'  },
                    { view: 'anaphase',   desc: 'Anaphase',   filename: 'cdiv_mitosis_anaphase.png'   },
                    { view: 'telophase',  desc: 'Telophase',  filename: 'cdiv_mitosis_telophase.png'  },
                ].map(({ view, desc, filename }) => ({
                    filename,
                    desc,
                    options: { view, showLabels: true }
                }))
            },
            {
                name: 'Meiosis Phase Views',
                cases: [
                    { view: 'meiosisProphase1',   desc: 'Meiosis — Prophase I',   filename: 'cdiv_meiosis_prophase1.png'   },
                    { view: 'meiosisMetaphase1',  desc: 'Meiosis — Metaphase I',  filename: 'cdiv_meiosis_metaphase1.png'  },
                    { view: 'meiosisAnaphase1',   desc: 'Meiosis — Anaphase I',   filename: 'cdiv_meiosis_anaphase1.png'   },
                    { view: 'meiosis2',           desc: 'Meiosis II (overview)',  filename: 'cdiv_meiosis2.png'            },
                ].map(({ view, desc, filename }) => ({
                    filename,
                    desc,
                    options: { view, showLabels: true }
                }))
            },
            {
                name: 'Supporting Structures',
                cases: [
                    { view: 'cellCycle',      desc: 'Cell Cycle diagram',          filename: 'cdiv_cell_cycle.png'      },
                    { view: 'chromosome',     desc: 'Chromosome structure',         filename: 'cdiv_chromosome.png'      },
                    { view: 'spindleFiber',   desc: 'Spindle Fiber',               filename: 'cdiv_spindle.png'         },
                    { view: 'centrosome',     desc: 'Centrosome',                  filename: 'cdiv_centrosome.png'      },
                    { view: 'cleavageFurrow', desc: 'Cleavage Furrow (animal)',    filename: 'cdiv_cleavage.png'        },
                    { view: 'cellPlate',      desc: 'Cell Plate (plant)',          filename: 'cdiv_cell_plate.png'      },
                ].map(({ view, desc, filename }) => ({
                    filename,
                    desc,
                    options: { view, showLabels: true }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: [
                    'cell-cycle-checkpoints', 'chromosome-structure', 'spindle-assembly',
                    'cytokinesis-detail', 'crossing-over', 'independent-assortment'
                ].map(inset => ({
                    filename: `cdiv_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        view:        'complete',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Cellular Respiration ──────────────────────────────────────────────────
    cellularRespiration: {
        label:  'Cellular Respiration',
        tag:    'RESP2',
        width:  820,
        height: 580,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `cresp_step_${step}.png`,
                    desc: [
                        'Step 1 — Glycolysis (Cytoplasm)',
                        'Step 2 — Pyruvate Oxidation',
                        'Step 3 — Krebs Cycle (Matrix)',
                        'Step 4 — Electron Transport Chain',
                        'Step 5 — Complete Pathway & ATP Yield'
                    ][step - 1],
                    options: {
                        view:        'complete',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'net-atp-yield'
                    }
                }))
            },
            {
                name: 'Individual Pathway Views',
                cases: [
                    { view: 'glycolysis',              desc: 'Glycolysis (detailed)',                filename: 'cresp_view_glycolysis.png'  },
                    { view: 'krebsCycle',              desc: 'Krebs Cycle (detailed)',               filename: 'cresp_view_krebs.png'       },
                    { view: 'electronTransportChain',  desc: 'Electron Transport Chain (detailed)',  filename: 'cresp_view_etc.png'         },
                    { view: 'atpSynthase',             desc: 'ATP Synthase (detailed)',              filename: 'cresp_view_atpsynthase.png' },
                ].map(({ view, desc, filename }) => ({
                    filename,
                    desc,
                    options: { view, showLabels: true }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: [
                    'net-atp-yield', 'atp-structure', 'nadh-fadh2-role',
                    'proton-gradient', 'fermentation-pathway', 'substrate-level-phosphorylation'
                ].map(inset => ({
                    filename: `cresp_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        view:        'complete',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]

    },


    // ── Cellular Respiration ──────────────────────────────────────────────────
cellularRespiration: {
    label:  'Cellular Respiration',
    tag:    'RESP3',
    width:  900,
    height: 700,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `cellresp_step_${step}.png`,
                desc: [
                    'Step 1 — Glycolysis (Cytoplasm)',
                    'Step 2 — Pyruvate → Acetyl-CoA (Bridge Reaction)',
                    'Step 3 — Krebs Cycle (Mitochondrial Matrix)',
                    'Step 4 — Electron Transport Chain (Inner Membrane)',
                    'Step 5 — Complete with ATP Totals'
                ][step - 1],
                options: {
                    stage:       'complete',
                    location:    'mitochondria',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 5,
                    insetType:   'atp-yield-summary'
                }
            }))
        },
        {
            name: 'Individual Stages',
            cases: [
                { stage: 'glycolysis',              label: 'Glycolysis'                    },
                { stage: 'krebs-cycle',             label: 'Krebs Cycle (Citric Acid)'     },
                { stage: 'electron-transport',      label: 'Electron Transport Chain'      },
                { stage: 'oxidative-phosphorylation', label: 'Oxidative Phosphorylation'   },
            ].map(({ stage, label }) => ({
                filename: `cellresp_stage_${stage}.png`,
                desc:     `Stage — ${label}`,
                options:  { stage, location: 'mitochondria', showLabels: true }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: [
                'atp-yield-summary',
                'nadh-fadh2-roles',
                'proton-gradient',
                'substrate-level-vs-oxidative'
            ].map(inset => ({
                filename: `cellresp_inset_${inset}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    stage:       'complete',
                    location:    'mitochondria',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Electron Transport Chain ──────────────────────────────────────────────
electronTransportChain: {
    label:  'Electron Transport Chain',
    tag:    'ETC',
    width:  900,
    height: 600,
    groups: [
        {
            name: 'Individual Complexes',
            cases: [
                { complex: 'complete',    label: 'Complete ETC Overview'       },
                { complex: 'complex-I',   label: 'Complex I — NADH Dehydrogenase' },
                { complex: 'complex-II',  label: 'Complex II — Succinate Dehydrogenase' },
                { complex: 'complex-III', label: 'Complex III — Cytochrome bc₁' },
                { complex: 'complex-IV',  label: 'Complex IV — Cytochrome c Oxidase' },
                { complex: 'atp-synthase',label: 'Complex V — ATP Synthase'    },
            ].map(({ complex, label }) => ({
                filename: `etc_complex_${complex}.png`,
                desc:     label,
                options:  { complex, process: 'overview', showLabels: true }
            }))
        },
        {
            name: 'Complete ETC with Different Insets',
            cases: [
                'q-cycle-detail',
                'atp-synthase-rotation',
                'proton-motive-force',
                'inhibitors'
            ].map(inset => ({
                filename: `etc_inset_${inset}.png`,
                desc:     `Complete ETC + inset: ${inset}`,
                options:  {
                    complex:   'complete',
                    process:   'overview',
                    showLabels: true,
                    showInset:  true,
                    insetType:  inset
                }
            }))
        },
        {
            name: 'Complexes with Insets',
            cases: [
                { complex: 'complex-I',    inset: 'proton-motive-force'    },
                { complex: 'complex-III',  inset: 'q-cycle-detail'         },
                { complex: 'complex-IV',   inset: 'inhibitors'             },
                { complex: 'atp-synthase', inset: 'atp-synthase-rotation'  },
            ].map(({ complex, inset }) => ({
                filename: `etc_${complex}_with_inset.png`,
                desc:     `${complex} + inset: ${inset}`,
                options:  {
                    complex,
                    process:   'overview',
                    showLabels: true,
                    showInset:  true,
                    insetType:  inset
                }
            }))
        }
    ]
},

// ── Photosynthesis ────────────────────────────────────────────────────────
photosynthesisDetailed: {
    label:  'Photosynthesis',
    tag:    'PHOTO1',
    width:  900,
    height: 800,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3].map(step => ({
                filename: `photo_step_${step}.png`,
                desc: [
                    'Step 1 — Light-Dependent Reactions (Thylakoid)',
                    'Step 2 — Calvin Cycle / Carbon Fixation (Stroma)',
                    'Step 3 — Both Reactions Combined'
                ][step - 1],
                options: {
                    reaction:    'both',
                    detail:      'overview',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 3,
                    insetType:   'z-scheme'
                }
            }))
        },
        {
            name: 'Individual Reactions',
            cases: [
                { reaction: 'light-dependent',  label: 'Light-Dependent Reactions (Z-scheme)' },
                { reaction: 'light-independent', label: 'Light-Independent Reactions (Calvin)'  },
                { reaction: 'electron-transport', label: 'Photosynthetic Electron Transport'   },
                { reaction: 'carbon-fixation',   label: 'Carbon Fixation Detail'               },
            ].map(({ reaction, label }) => ({
                filename: `photo_reaction_${reaction}.png`,
                desc:     `Reaction — ${label}`,
                options:  { reaction, detail: 'overview', showLabels: true }
            }))
        },
        {
            name: 'Step 3 with Different Insets',
            cases: [
                'z-scheme',
                'calvin-cycle-phases',
                'rubisco-mechanism',
                'photorespiration-comparison'
            ].map(inset => ({
                filename: `photo_inset_${inset}.png`,
                desc:     `Both reactions + inset: ${inset}`,
                options:  {
                    reaction:    'both',
                    detail:      'overview',
                    drawingStep: 3,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── ATP Structure & Cycle ─────────────────────────────────────────────────
atpStructure: {
    label:  'ATP Structure & Cycle',
    tag:    'ATP',
    width:  800,
    height: 600,
    groups: [
        {
            name: 'All Views',
            cases: [
                { view: 'structure',  label: 'ATP Molecular Structure'              },
                { view: 'hydrolysis', label: 'ATP Hydrolysis — Energy Release'      },
                { view: 'synthesis',  label: 'ATP Synthesis — Energy Storage'       },
                { view: 'cycle',      label: 'ATP–ADP Cycle — Energy Currency'      },
            ].map(({ view, label }) => ({
                filename: `atp_view_${view}.png`,
                desc:     label,
                options:  { view, process: 'overview', showLabels: true }
            }))
        },
        {
            name: 'Views with Insets',
            cases: [
                { view: 'structure',  inset: 'high-energy-bonds'     },
                { view: 'hydrolysis', inset: 'delta-g-values'         },
                { view: 'synthesis',  inset: 'phosphorylation-types'  },
                { view: 'cycle',      inset: 'atp-uses-in-cell'       },
            ].map(({ view, inset }) => ({
                filename: `atp_${view}_inset_${inset}.png`,
                desc:     `${view} view + inset: ${inset}`,
                options:  {
                    view,
                    process:   'overview',
                    showLabels: true,
                    showInset:  true,
                    insetType:  inset
                }
            }))
        },
        {
            name: 'All Insets (structure view)',
            cases: [
                'high-energy-bonds',
                'delta-g-values',
                'atp-uses-in-cell',
                'phosphorylation-types'
            ].map(inset => ({
                filename: `atp_inset_${inset}.png`,
                desc:     `Structure view + inset: ${inset}`,
                options:  {
                    view:      'structure',
                    process:   'overview',
                    showLabels: true,
                    showInset:  true,
                    insetType:  inset
                }
            }))
        }
    ]
},

// ── Mitochondrion ─────────────────────────────────────────────────────────
mitochondrion: {
    label:  'Mitochondrion',
    tag:    'MITO',
    width:  800,
    height: 600,
    groups: [
        {
            name: 'All Views',
            cases: [
                { view: 'complete',       label: 'Complete Mitochondrion'          },
                { view: 'outer-membrane', label: 'Outer Membrane & Porins'         },
                { view: 'inner-membrane', label: 'Inner Membrane & ETC Complexes'  },
                { view: 'matrix',         label: 'Matrix — Krebs Enzymes & mtDNA'  },
                { view: 'cristae',        label: 'Cristae — Folded Inner Membrane' },
            ].map(({ view, label }) => ({
                filename: `mito_view_${view}.png`,
                desc:     label,
                options:  { view, component: 'overview', showLabels: true }
            }))
        },
        {
            name: 'Complete View with Different Insets',
            cases: [
                'cristae-surface-area',
                'membrane-permeability',
                'import-machinery',
                'endosymbiosis'
            ].map(inset => ({
                filename: `mito_inset_${inset}.png`,
                desc:     `Complete view + inset: ${inset}`,
                options:  {
                    view:      'complete',
                    component: 'overview',
                    showLabels: true,
                    showInset:  true,
                    insetType:  inset
                }
            }))
        },
        {
            name: 'Views with Matched Insets',
            cases: [
                { view: 'outer-membrane', inset: 'membrane-permeability' },
                { view: 'inner-membrane', inset: 'cristae-surface-area'  },
                { view: 'matrix',         inset: 'endosymbiosis'         },
                { view: 'cristae',        inset: 'import-machinery'      },
            ].map(({ view, inset }) => ({
                filename: `mito_${view}_with_inset.png`,
                desc:     `${view} + inset: ${inset}`,
                options:  {
                    view,
                    component: 'overview',
                    showLabels: true,
                    showInset:  true,
                    insetType:  inset
                }
            }))
        }
    ]
},

// ── Chloroplast Structure ─────────────────────────────────────────────────
chloroplastStructure: {
    label:  'Chloroplast Structure',
    tag:    'CHLO',
    width:  800,
    height: 650,
    groups: [
        {
            name: 'All Views',
            cases: [
                { view: 'complete',       label: 'Complete Chloroplast'              },
                { view: 'outer-membrane', label: 'Envelope Membranes (TOC/TIC)'     },
                { view: 'thylakoid',      label: 'Thylakoid Membrane & Complexes'   },
                { view: 'stroma',         label: 'Stroma — Calvin Enzymes & cpDNA'  },
                { view: 'grana',          label: 'Grana — Thylakoid Stacks'         },
            ].map(({ view, label }) => ({
                filename: `chlo_view_${view}.png`,
                desc:     label,
                options:  { view, component: 'overview', showLabels: true }
            }))
        },
        {
            name: 'Complete View with Different Insets',
            cases: [
                'thylakoid-membrane-proteins',
                'grana-stacking-reason',
                'stroma-vs-thylakoid',
                'cp-vs-mito'
            ].map(inset => ({
                filename: `chlo_inset_${inset}.png`,
                desc:     `Complete view + inset: ${inset}`,
                options:  {
                    view:      'complete',
                    component: 'overview',
                    showLabels: true,
                    showInset:  true,
                    insetType:  inset
                }
            }))
        },
        {
            name: 'Views with Matched Insets',
            cases: [
                { view: 'thylakoid',      inset: 'thylakoid-membrane-proteins' },
                { view: 'grana',          inset: 'grana-stacking-reason'        },
                { view: 'stroma',         inset: 'stroma-vs-thylakoid'          },
                { view: 'outer-membrane', inset: 'cp-vs-mito'                   },
            ].map(({ view, inset }) => ({
                filename: `chlo_${view}_with_inset.png`,
                desc:     `${view} + inset: ${inset}`,
                options:  {
                    view,
                    component: 'overview',
                    showLabels: true,
                    showInset:  true,
                    insetType:  inset
                }
            }))
        }
    ]
},

    // ── DNA Structure ─────────────────────────────────────────────────────────
dnaStructure: {
    label:  'DNA Structure',
    tag:    'DNA',
    width:  500,
    height: 650,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `dna_step_${step}.png`,
                desc: [
                    'Step 1 — Sugar-Phosphate Backbone',
                    'Step 2 — Nitrogenous Bases',
                    'Step 3 — Hydrogen Bonds',
                    'Step 4 — Antiparallel Orientation',
                    'Step 5 — Complete Double Helix'
                ][step - 1],
                options: {
                    view:          'doubleHelix',
                    componentFocus:'complete',
                    drawingStep:   step,
                    showLabels:    true,
                    showInset:     step === 5,
                    insetType:     'base-pair-detail'
                }
            }))
        },
        {
            name: 'Individual Views',
            cases: [
                { view: 'doubleHelix',       componentFocus: 'complete',        desc: 'Double Helix — Complete'           },
                { view: 'doubleHelix',       componentFocus: 'backbone',        desc: 'Double Helix — Backbone Focus'     },
                { view: 'doubleHelix',       componentFocus: 'bases',           desc: 'Double Helix — Bases Focus'        },
                { view: 'doubleHelix',       componentFocus: 'hydrogen-bonds',  desc: 'Double Helix — Hydrogen Bonds'     },
                { view: 'doubleHelix',       componentFocus: 'antiparallel',    desc: 'Double Helix — Antiparallel'       },
                { view: 'basePairs',         componentFocus: 'complete',        desc: 'Base Pairs — A·T and G·C'          },
                { view: 'sugarPhosphate',    componentFocus: 'complete',        desc: 'Sugar-Phosphate Backbone'          },
                { view: 'nucleotide',        componentFocus: 'complete',        desc: 'Nucleotide Structure'              },
                { view: 'major-minor-grooves', componentFocus: 'complete',      desc: 'Major & Minor Grooves'             }
            ].map(tc => ({
                filename: `dna_view_${tc.view}_${tc.componentFocus}.png`,
                desc:     tc.desc,
                options:  { view: tc.view, componentFocus: tc.componentFocus, showLabels: true }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['base-pair-detail', 'nucleotide-structure', 'major-minor-groove-detail', 'dna-dimensions'].map(inset => ({
                filename: `dna_inset_${inset}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    view:          'doubleHelix',
                    componentFocus:'complete',
                    drawingStep:   5,
                    showLabels:    true,
                    showInset:     true,
                    insetType:     inset
                }
            }))
        }
    ]
},

// ── DNA Replication ───────────────────────────────────────────────────────
dnaReplication: {
    label:  'DNA Replication',
    tag:    'REPL',
    width:  700,
    height: 500,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `repl_step_${step}.png`,
                desc: [
                    'Step 1 — Initiation & Origin of Replication',
                    'Step 2 — Leading Strand Synthesis',
                    'Step 3 — Lagging Strand & Okazaki Fragments',
                    'Step 4 — Full Elongation at Fork',
                    'Step 5 — Termination & Daughter Molecules'
                ][step - 1],
                options: {
                    stage:          'elongation',
                    enzymeHighlight:'all',
                    drawingStep:    step,
                    showLabels:     true,
                    showInset:      step === 5,
                    insetType:      'replication-fork-detail'
                }
            }))
        },
        {
            name: 'Individual Stages',
            cases: [
                { stage: 'initiation',    enzymeHighlight: 'helicase',      desc: 'Initiation — Origin & Helicase'      },
                { stage: 'leading-strand',enzymeHighlight: 'dna-polymerase',desc: 'Leading Strand — Continuous'         },
                { stage: 'lagging-strand',enzymeHighlight: 'primase',       desc: 'Lagging Strand — Okazaki Fragments'  },
                { stage: 'elongation',    enzymeHighlight: 'all',           desc: 'Elongation — All Enzymes'            },
                { stage: 'elongation',    enzymeHighlight: 'ligase',        desc: 'Elongation — Ligase Focus'           },
                { stage: 'termination',   enzymeHighlight: 'all',           desc: 'Termination — Daughter Molecules'    }
            ].map(tc => ({
                filename: `repl_stage_${tc.stage}_${tc.enzymeHighlight}.png`,
                desc:     tc.desc,
                options:  { stage: tc.stage, enzymeHighlight: tc.enzymeHighlight, showLabels: true }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['okazaki-fragments', 'replication-fork-detail', 'helicase-mechanism', 'proofreading'].map(inset => ({
                filename: `repl_inset_${inset}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    stage:          'elongation',
                    enzymeHighlight:'all',
                    drawingStep:    5,
                    showLabels:     true,
                    showInset:      true,
                    insetType:      inset
                }
            }))
        }
    ]
},

// ── Transcription ─────────────────────────────────────────────────────────
transcription: {
    label:  'Transcription',
    tag:    'TRNS',
    width:  650,
    height: 550,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `trns_step_${step}.png`,
                desc: [
                    'Step 1 — Promoter Recognition & Initiation',
                    'Step 2 — Elongation & Transcription Bubble',
                    'Step 3 — Termination & Release',
                    'Step 4 — RNA Processing & Splicing',
                    'Step 5 — Complete Transcription Overview'
                ][step - 1],
                options: {
                    stage:      'elongation',
                    detail:     'overview',
                    drawingStep: step,
                    showLabels: true,
                    showInset:  step === 5,
                    insetType:  'rna-polymerase-detail'
                }
            }))
        },
        {
            name: 'Individual Stages',
            cases: [
                { stage: 'initiation',    detail: 'promoter',             desc: 'Initiation — Promoter & TATA Box'         },
                { stage: 'initiation',    detail: 'transcription-factors', desc: 'Initiation — Transcription Factors'      },
                { stage: 'initiation',    detail: 'enhancers',            desc: 'Initiation — Enhancer Regions'            },
                { stage: 'initiation',    detail: 'rna-polymerase',       desc: 'Initiation — RNA Polymerase II'           },
                { stage: 'elongation',    detail: 'transcription-bubble', desc: 'Elongation — Transcription Bubble'        },
                { stage: 'elongation',    detail: 'overview',             desc: 'Elongation — NTP Addition'                },
                { stage: 'termination',   detail: 'rna-polymerase',       desc: 'Termination — Hairpin & Poly-U'           },
                { stage: 'rna-processing',detail: 'rna-splicing',         desc: 'RNA Processing — Splicing & Modifications'}
            ].map(tc => ({
                filename: `trns_stage_${tc.stage}_${tc.detail}.png`,
                desc:     tc.desc,
                options:  { stage: tc.stage, detail: tc.detail, showLabels: true }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['rna-polymerase-detail', 'splicing-mechanism', 'cap-tail-addition', 'promoter-elements'].map(inset => ({
                filename: `trns_inset_${inset}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    stage:      'elongation',
                    detail:     'overview',
                    drawingStep: 5,
                    showLabels: true,
                    showInset:  true,
                    insetType:  inset
                }
            }))
        }
    ]
},

// ── Translation ───────────────────────────────────────────────────────────
translation: {
    label:  'Translation',
    tag:    'TRAN',
    width:  700,
    height: 550,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `tran_step_${step}.png`,
                desc: [
                    'Step 1 — Ribosome Assembly & Binding Sites',
                    'Step 2 — Initiation Complex Formation',
                    'Step 3 — Elongation & Peptide Bond Formation',
                    'Step 4 — Termination & Polypeptide Release',
                    'Step 5 — Complete Translation Overview'
                ][step - 1],
                options: {
                    stage:         'elongation',
                    componentFocus:'complete',
                    drawingStep:   step,
                    showLabels:    true,
                    showInset:     step === 5,
                    insetType:     'ribosome-sites'
                }
            }))
        },
        {
            name: 'Individual Stages',
            cases: [
                { stage: 'ribosome-binding', componentFocus: 'ribosome',    desc: 'Ribosome — A, P, E Sites Detail'      },
                { stage: 'initiation',       componentFocus: 'ribosome',    desc: 'Initiation — 40S + 60S Assembly'      },
                { stage: 'initiation',       componentFocus: 'trna',        desc: 'Initiation — Initiator tRNA (Met)'    },
                { stage: 'elongation',       componentFocus: 'trna',        desc: 'Elongation — tRNA at A, P, E Sites'   },
                { stage: 'elongation',       componentFocus: 'peptide-bond',desc: 'Elongation — Peptide Bond Formation'  },
                { stage: 'elongation',       componentFocus: 'amino-acids', desc: 'Elongation — Growing Polypeptide'     },
                { stage: 'elongation',       componentFocus: 'complete',    desc: 'Elongation — Complete View'           },
                { stage: 'termination',      componentFocus: 'amino-acids', desc: 'Termination — Stop Codon & Release'   }
            ].map(tc => ({
                filename: `tran_stage_${tc.stage}_${tc.componentFocus}.png`,
                desc:     tc.desc,
                options:  { stage: tc.stage, componentFocus: tc.componentFocus, showLabels: true }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['peptide-bond-formation', 'trna-charging', 'ribosome-sites', 'polysome'].map(inset => ({
                filename: `tran_inset_${inset}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    stage:         'elongation',
                    componentFocus:'complete',
                    drawingStep:   5,
                    showLabels:    true,
                    showInset:     true,
                    insetType:     inset
                }
            }))
        }
    ]
},

// ── RNA Structure ─────────────────────────────────────────────────────────
rnaStructure: {
    label:  'RNA Structure',
    tag:    'RNA',
    width:  650,
    height: 550,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4].map(step => ({
                filename: `rna_step_${step}.png`,
                desc: [
                    'Step 1 — mRNA Structure',
                    'Step 2 — tRNA Cloverleaf',
                    'Step 3 — rRNA & Ribosomal Role',
                    'Step 4 — RNA Type Comparison'
                ][step - 1],
                options: {
                    rnaType:     'comparison',
                    feature:     'structure',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 4,
                    insetType:   'trna-3d-structure'
                }
            }))
        },
        {
            name: 'RNA Types — Structure Feature',
            cases: [
                { rnaType: 'mRNA',       feature: 'structure',      desc: 'mRNA — Full Structure (cap, UTR, CDS, polyA)' },
                { rnaType: 'mRNA',       feature: 'modifications',  desc: 'mRNA — Modifications (cap & polyA detail)'    },
                { rnaType: 'mRNA',       feature: 'function',       desc: 'mRNA — Functional Regions'                    },
                { rnaType: 'mRNA',       feature: 'processing',     desc: 'mRNA — Processing (splice sites)'             },
                { rnaType: 'tRNA',       feature: 'structure',      desc: 'tRNA — Cloverleaf 2D Structure'               },
                { rnaType: 'tRNA',       feature: 'function',       desc: 'tRNA — 3D L-Shape & Function'                 },
                { rnaType: 'tRNA',       feature: 'modifications',  desc: 'tRNA — Modified Bases'                        },
                { rnaType: 'rRNA',       feature: 'structure',      desc: 'rRNA — Secondary Structure Loops'             },
                { rnaType: 'rRNA',       feature: 'function',       desc: 'rRNA — Functional Domains (PTC, Decoding)'   },
                { rnaType: 'rRNA',       feature: 'modifications',  desc: 'rRNA — Modified Nucleotides'                  },
                { rnaType: 'comparison', feature: 'structure',      desc: 'Comparison — All RNA Types'                   }
            ].map(tc => ({
                filename: `rna_type_${tc.rnaType}_${tc.feature}.png`,
                desc:     tc.desc,
                options:  { rnaType: tc.rnaType, feature: tc.feature, showLabels: true }
            }))
        },
        {
            name: 'Step 4 with Different Insets',
            cases: ['trna-3d-structure', 'mrna-features', 'rrna-domains', 'rna-modifications'].map(inset => ({
                filename: `rna_inset_${inset}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    rnaType:     'comparison',
                    feature:     'structure',
                    drawingStep: 4,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Codon Chart ───────────────────────────────────────────────────────────
codonChart: {
    label:  'Codon Chart',
    tag:    'CODN',
    width:  750,
    height: 600,
    groups: [
        {
            name: 'Display Formats',
            cases: [
                { display: 'table',    feature: 'standard',    desc: 'Table — Standard Codon Table'         },
                { display: 'table',    feature: 'start-codons',desc: 'Table — Start Codon Highlighted'      },
                { display: 'table',    feature: 'stop-codons', desc: 'Table — Stop Codons Highlighted'      },
                { display: 'table',    feature: 'degeneracy',  desc: 'Table — Degeneracy Note'              },
                { display: 'table',    feature: 'wobble',      desc: 'Table — Wobble Hypothesis Note'       },
                { display: 'circular', feature: 'standard',    desc: 'Circular — Concentric Ring Chart'     },
                { display: 'circular', feature: 'stop-codons', desc: 'Circular — Stop Codons Highlighted'   },
                { display: 'wheel',    feature: 'standard',    desc: 'Wheel — Amino Acid Wedge Chart'       },
                { display: 'wheel',    feature: 'degeneracy',  desc: 'Wheel — Degeneracy Legend'            },
                { display: 'wheel',    feature: 'wobble',      desc: 'Wheel — With Codon Labels at Edge'    }
            ].map(tc => ({
                filename: `codn_${tc.display}_${tc.feature}.png`,
                desc:     tc.desc,
                options:  { display: tc.display, feature: tc.feature, showLabels: true }
            }))
        },
        {
            name: 'With Insets',
            cases: [
                { display: 'table',    inset: 'wobble-base-pairing',  desc: 'Table + Wobble Base Pairing inset'    },
                { display: 'table',    inset: 'codon-degeneracy',     desc: 'Table + Codon Degeneracy Bar Chart'   },
                { display: 'table',    inset: 'reading-frame',        desc: 'Table + Reading Frame inset'          },
                { display: 'table',    inset: 'start-stop-summary',   desc: 'Table + Start/Stop Summary inset'     },
                { display: 'circular', inset: 'wobble-base-pairing',  desc: 'Circular + Wobble inset'              },
                { display: 'wheel',    inset: 'codon-degeneracy',     desc: 'Wheel + Degeneracy inset'             }
            ].map(tc => ({
                filename: `codn_${tc.display}_inset_${tc.inset}.png`,
                desc:     tc.desc,
                options:  {
                    display:   tc.display,
                    feature:   'standard',
                    showLabels:true,
                    showInset: true,
                    insetType: tc.inset
                }
            }))
        }
    ]
},


// ── Bacteria Structure ────────────────────────────────────────────────────
bacteriaStructure: {
    label:  'Bacteria Structure',
    tag:    'BACT',
    width:  700,
    height: 500,
    groups: [
        {
            name: 'Step-by-Step Build (gram-negative)',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `bact_step_${step}.png`,
                desc: [
                    'Step 1 — Cell Membrane',
                    'Step 2 — Cell Wall (Peptidoglycan Layer)',
                    'Step 3 — Nucleoid & Plasmids',
                    'Step 4 — Flagella & Pili',
                    'Step 5 — Complete with Labels'
                ][step - 1],
                options: {
                    type:        'gram-negative',
                    structure:   'complete',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 5,
                    insetType:   'gram-stain-comparison'
                }
            }))
        },
        {
            name: 'By Bacteria Type (Step 5)',
            cases: ['gram-positive', 'gram-negative', 'archaea'].map(type => ({
                filename: `bact_type_${type.replace('-', '_')}.png`,
                desc:     `Type — ${type}`,
                options:  {
                    type,
                    structure:   'complete',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   false
                }
            }))
        },
        {
            name: 'Isolated Structures',
            cases: ['cell-wall', 'membrane', 'nucleoid', 'plasmids', 'flagella', 'pili'].map(structure => ({
                filename: `bact_structure_${structure.replace('-', '_')}.png`,
                desc:     `Structure — ${structure}`,
                options:  {
                    type:      'gram-negative',
                    structure,
                    showLabels: true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['gram-stain-comparison', 'peptidoglycan-detail', 'flagella-basal-body', 'pili-conjugation'].map(inset => ({
                filename: `bact_inset_${inset.replace(/-/g, '_')}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    type:        'gram-negative',
                    structure:   'complete',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Virus Structure ───────────────────────────────────────────────────────
virusStructure: {
    label:  'Virus Structure',
    tag:    'VIRU',
    width:  600,
    height: 600,
    groups: [
        {
            name: 'Step-by-Step Build (bacteriophage)',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `viru_step_${step}.png`,
                desc: [
                    'Step 1 — Nucleic Acid (Genome)',
                    'Step 2 — Capsid / Protein Coat',
                    'Step 3 — Viral Envelope (if present)',
                    'Step 4 — Spike / Surface Proteins',
                    'Step 5 — Complete with Labels'
                ][step - 1],
                options: {
                    type:        'bacteriophage',
                    component:   'complete',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 5,
                    insetType:   'lytic-vs-lysogenic'
                }
            }))
        },
        {
            name: 'By Virus Type (Step 5)',
            cases: ['bacteriophage', 'enveloped', 'non-enveloped', 'retrovirus'].map(type => ({
                filename: `viru_type_${type.replace('-', '_')}.png`,
                desc:     `Type — ${type}`,
                options:  {
                    type,
                    component:   'complete',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   false
                }
            }))
        },
        {
            name: 'Isolated Components',
            cases: ['capsid', 'envelope', 'spike-proteins', 'nucleic-acid', 'enzymes'].map(component => ({
                filename: `viru_component_${component.replace('-', '_')}.png`,
                desc:     `Component — ${component}`,
                options:  {
                    type:      'enveloped',
                    component,
                    showLabels: true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['lytic-vs-lysogenic', 'receptor-binding', 'capsid-symmetry', 'genome-types'].map(inset => ({
                filename: `viru_inset_${inset.replace(/-/g, '_')}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    type:        'bacteriophage',
                    component:   'complete',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Fungal Cell ───────────────────────────────────────────────────────────
fungalCell: {
    label:  'Fungal Cell',
    tag:    'FUNG',
    width:  650,
    height: 550,
    groups: [
        {
            name: 'Step-by-Step Build (yeast form)',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `fung_step_${step}.png`,
                desc: [
                    'Step 1 — Chitin Cell Wall & Membrane',
                    'Step 2 — Nucleus & Organelles',
                    'Step 3 — Hyphal Filaments',
                    'Step 4 — Mycelium Network',
                    'Step 5 — Fruiting Body (Complete)'
                ][step - 1],
                options: {
                    structure:   'cell',
                    form:        'yeast',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 5,
                    insetType:   'chitin-wall-detail'
                }
            }))
        },
        {
            name: 'By Form (Step 2 — Cell Level)',
            cases: ['yeast', 'mold'].map(form => ({
                filename: `fung_form_${form}.png`,
                desc:     `Cell form — ${form}`,
                options:  {
                    structure:   'cell',
                    form,
                    drawingStep: 2,
                    showLabels:  true,
                    showInset:   false
                }
            }))
        },
        {
            name: 'Isolated Structures',
            cases: ['hyphae', 'mycelium', 'fruiting-body'].map(structure => ({
                filename: `fung_structure_${structure.replace('-', '_')}.png`,
                desc:     `Structure — ${structure}`,
                options:  {
                    structure,
                    form:       'yeast',
                    showLabels: true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['chitin-wall-detail', 'septum-pore', 'spore-types', 'dimorphism'].map(inset => ({
                filename: `fung_inset_${inset.replace(/-/g, '_')}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    structure:   'cell',
                    form:        'yeast',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Protists ──────────────────────────────────────────────────────────────
protists: {
    label:  'Protists',
    tag:    'PROT',
    width:  700,
    height: 600,
    groups: [
        {
            name: 'Step-by-Step Build (diversity overview)',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `prot_step_${step}.png`,
                desc: [
                    'Step 1 — Amoeba (Pseudopodia)',
                    'Step 2 — Paramecium (Cilia)',
                    'Step 3 — Euglena (Flagellum & Eyespot)',
                    'Step 4 — Diatom (Silica Frustule)',
                    'Step 5 — Protist Diversity Overview'
                ][step - 1],
                options: {
                    protistType: 'all',
                    feature:     'structure',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 5,
                    insetType:   'axoneme-9plus2'
                }
            }))
        },
        {
            name: 'Individual Protist Types',
            cases: ['amoeba', 'paramecium', 'euglena', 'volvox', 'diatom', 'plasmodium'].map(protistType => ({
                filename: `prot_type_${protistType}.png`,
                desc:     `Protist — ${protistType}`,
                options:  {
                    protistType,
                    feature:    'structure',
                    showLabels: true
                }
            }))
        },
        {
            name: 'Features by Protist',
            cases: [
                { protistType: 'amoeba',     feature: 'feeding',      filename: 'prot_amoeba_feeding.png',      desc: 'Amoeba — feeding (phagocytosis)'         },
                { protistType: 'paramecium', feature: 'locomotion',   filename: 'prot_paramecium_locomotion.png',desc: 'Paramecium — locomotion (cilia)'         },
                { protistType: 'euglena',    feature: 'locomotion',   filename: 'prot_euglena_locomotion.png',   desc: 'Euglena — locomotion (flagellum)'        },
                { protistType: 'volvox',     feature: 'reproduction', filename: 'prot_volvox_reproduction.png',  desc: 'Volvox — reproduction (daughter colonies)'},
                { protistType: 'plasmodium', feature: 'reproduction', filename: 'prot_plasmodium_lifecycle.png', desc: 'Plasmodium — life stages'                },
                { protistType: 'diatom',     feature: 'structure',    filename: 'prot_diatom_frustule.png',      desc: 'Diatom — silica frustule detail'         }
            ].map(tc => ({
                filename: tc.filename,
                desc:     tc.desc,
                options:  {
                    protistType: tc.protistType,
                    feature:     tc.feature,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['axoneme-9plus2', 'contractile-vacuole', 'apical-complex', 'frustule-detail'].map(inset => ({
                filename: `prot_inset_${inset.replace(/-/g, '_')}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    protistType: 'all',
                    feature:     'structure',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

    // ── Immune Response ───────────────────────────────────────────────────────
immuneResponse: {
    label:  'Immune Response',
    tag:    'IMMU',
    width:  700,
    height: 500,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `immu_step_${step}.png`,
                desc: [
                    'Step 1 — Pathogen Recognition',
                    'Step 2 — Immune Cell Activation',
                    'Step 3 — Effector Response',
                    'Step 4 — Memory Cell Formation',
                    'Step 5 — Complete Response Overview'
                ][step - 1],
                options: {
                    responseType: 'both',
                    drawingStep:  step,
                    showLabels:   true,
                    showInset:    step === 5,
                    insetType:    'mhc-presentation'
                }
            }))
        },
        {
            name: 'Response Types',
            cases: ['innate', 'adaptive', 'both'].map(responseType => ({
                filename: `immu_response_${responseType}.png`,
                desc:     `Response Type — ${responseType}`,
                options:  {
                    responseType,
                    drawingStep: 5,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Individual Stages',
            cases: ['recognition', 'activation', 'effector', 'memory'].map(stage => ({
                filename: `immu_stage_${stage}.png`,
                desc:     `Stage — ${stage}`,
                options:  {
                    responseType: 'both',
                    stage,
                    drawingStep:  ['recognition', 'activation', 'effector', 'memory']
                                    .indexOf(stage) + 1,
                    showLabels:   true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['toll-like-receptors', 'cytokine-signaling', 'mhc-presentation', 'clonal-selection'].map(inset => ({
                filename: `immu_inset_${inset}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    responseType: 'both',
                    drawingStep:  5,
                    showLabels:   true,
                    showInset:    true,
                    insetType:    inset
                }
            }))
        }
    ]
},

// ── Vaccination ───────────────────────────────────────────────────────────
vaccination: {
    label:  'Vaccination',
    tag:    'VACC',
    width:  700,
    height: 520,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `vacc_step_${step}.png`,
                desc: [
                    'Step 1 — Vaccine Administration',
                    'Step 2 — Antigen Recognition',
                    'Step 3 — Primary Immune Response',
                    'Step 4 — Memory Cell Formation',
                    'Step 5 — Secondary Response (Rapid & Stronger)'
                ][step - 1],
                options: {
                    vaccineType: 'mrna',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 5,
                    insetType:   'antibody-titer'
                }
            }))
        },
        {
            name: 'Vaccine Types',
            cases: ['live-attenuated', 'inactivated', 'mrna'].map(vaccineType => ({
                filename: `vacc_type_${vaccineType}.png`,
                desc:     `Vaccine Type — ${vaccineType}`,
                options:  {
                    vaccineType,
                    drawingStep: 5,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Individual Stages',
            cases: [
                { stage: 'administration',     step: 1 },
                { stage: 'recognition',        step: 2 },
                { stage: 'primary-response',   step: 3 },
                { stage: 'memory-formation',   step: 4 },
                { stage: 'secondary-response', step: 5 }
            ].map(({ stage, step }) => ({
                filename: `vacc_stage_${stage}.png`,
                desc:     `Stage — ${stage}`,
                options:  {
                    vaccineType: 'mrna',
                    stage,
                    drawingStep: step,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['antibody-titer', 'b-cell-activation', 'memory-longevity', 'herd-immunity-threshold'].map(inset => ({
                filename: `vacc_inset_${inset}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    vaccineType: 'mrna',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Blood Cells ───────────────────────────────────────────────────────────
bloodCells: {
    label:  'Blood Cells',
    tag:    'BLOD',
    width:  700,
    height: 520,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `blod_step_${step}.png`,
                desc: [
                    'Step 1 — Red Blood Cells (Erythrocytes)',
                    'Step 2 — Platelets (Thrombocytes)',
                    'Step 3 — White Blood Cells (Leukocytes)',
                    'Step 4 — Neutrophil Detail',
                    'Step 5 — All Blood Cell Types'
                ][step - 1],
                options: {
                    cellType:    'all',
                    func:        'structure',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 5,
                    insetType:   'wbc-differential'
                }
            }))
        },
        {
            name: 'Cell Types — Structure',
            cases: [
                'erythrocytes', 'leukocytes', 'platelets',
                'neutrophils', 'lymphocytes', 'monocytes',
                'eosinophils', 'basophils'
            ].map(cellType => ({
                filename: `blod_type_${cellType}.png`,
                desc:     `Cell Type (structure) — ${cellType}`,
                options:  {
                    cellType,
                    func:        'structure',
                    drawingStep: 5,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Cell Types — Immune Defence',
            cases: [
                'neutrophils', 'lymphocytes', 'monocytes',
                'eosinophils', 'basophils'
            ].map(cellType => ({
                filename: `blod_defense_${cellType}.png`,
                desc:     `Cell Type (immune-defence) — ${cellType}`,
                options:  {
                    cellType,
                    func:        'immune-defense',
                    drawingStep: 5,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Functions — RBC & Platelet',
            cases: [
                { cellType: 'erythrocytes', func: 'oxygen-transport', label: 'RBC — Oxygen Transport'  },
                { cellType: 'platelets',    func: 'clotting',         label: 'Platelets — Clotting'    }
            ].map(({ cellType, func, label }) => ({
                filename: `blod_func_${cellType}_${func}.png`,
                desc:     label,
                options:  {
                    cellType,
                    func,
                    drawingStep: 5,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['blood-composition', 'hematopoiesis', 'rbc-lifespan', 'wbc-differential'].map(inset => ({
                filename: `blod_inset_${inset}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    cellType:    'all',
                    func:        'structure',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Antibody Structure ────────────────────────────────────────────────────
antibodyStructure: {
    label:  'Antibody Structure',
    tag:    'ABDY',
    width:  600,
    height: 560,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `abdy_step_${step}.png`,
                desc: [
                    'Step 1 — Heavy Chains & Fc Stem',
                    'Step 2 — Light Chains',
                    'Step 3 — Variable Regions (CDRs)',
                    'Step 4 — Fab Fragments',
                    'Step 5 — Complete with Antigen Binding'
                ][step - 1],
                options: {
                    region:      'complete',
                    type:        'IgG',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 5,
                    insetType:   'isotype-comparison'
                }
            }))
        },
        {
            name: 'Isotype Variants',
            cases: ['IgG', 'IgM', 'IgA', 'IgE', 'IgD'].map(type => ({
                filename: `abdy_isotype_${type}.png`,
                desc:     `Isotype — ${type}`,
                options:  {
                    region:      'complete',
                    type,
                    drawingStep: 5,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Region Highlights',
            cases: [
                { region: 'fab',             label: 'Fab Fragment'              },
                { region: 'fc',              label: 'Fc Region'                 },
                { region: 'variable-region', label: 'Variable Region'           },
                { region: 'constant-region', label: 'Constant Region'           },
                { region: 'antigen-binding', label: 'Antigen-Binding Site'      },
                { region: 'hinge',           label: 'Hinge Region'              }
            ].map(({ region, label }) => ({
                filename: `abdy_region_${region}.png`,
                desc:     `Region — ${label}`,
                options:  {
                    region,
                    type:        'IgG',
                    drawingStep: 5,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['disulfide-bonds', 'fab-detail', 'fc-effector-functions', 'isotype-comparison'].map(inset => ({
                filename: `abdy_inset_${inset}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    region:      'complete',
                    type:        'IgG',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Pathogen Types ────────────────────────────────────────────────────────
pathogenTypes: {
    label:  'Pathogen Types',
    tag:    'PATH',
    width:  700,
    height: 520,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `path_step_${step}.png`,
                desc: [
                    'Step 1 — Bacteria',
                    'Step 2 — Viruses',
                    'Step 3 — Fungi',
                    'Step 4 — Protozoa',
                    'Step 5 — All Pathogen Types'
                ][step - 1],
                options: {
                    pathogen:       'all',
                    characteristic: 'structure',
                    drawingStep:    step,
                    showLabels:     true,
                    showInset:      step === 5,
                    insetType:      'size-comparison'
                }
            }))
        },
        {
            name: 'Pathogens — Structure',
            cases: ['bacteria', 'viruses', 'fungi', 'protozoa', 'helminths', 'prions'].map(pathogen => ({
                filename: `path_structure_${pathogen}.png`,
                desc:     `Pathogen Structure — ${pathogen}`,
                options:  {
                    pathogen,
                    characteristic: 'structure',
                    drawingStep:    5,
                    showLabels:     true
                }
            }))
        },
        {
            name: 'Pathogens — Reproduction',
            cases: ['bacteria', 'viruses', 'fungi', 'protozoa', 'helminths', 'prions'].map(pathogen => ({
                filename: `path_reproduction_${pathogen}.png`,
                desc:     `Pathogen Reproduction — ${pathogen}`,
                options:  {
                    pathogen,
                    characteristic: 'reproduction',
                    drawingStep:    5,
                    showLabels:     true
                }
            }))
        },
        {
            name: 'All Types — Size Comparison',
            cases: [{
                filename: `path_all_size.png`,
                desc:     'All Pathogens — Size Comparison',
                options:  {
                    pathogen:       'all',
                    characteristic: 'size',
                    drawingStep:    5,
                    showLabels:     true
                }
            }]
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['size-comparison', 'gram-stain', 'viral-replication-cycle', 'antibiotic-targets'].map(inset => ({
                filename: `path_inset_${inset}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    pathogen:       'all',
                    characteristic: 'structure',
                    drawingStep:    5,
                    showLabels:     true,
                    showInset:      true,
                    insetType:      inset
                }
            }))
        }
    ]
},

// ── Inflammation ──────────────────────────────────────────────────────────
inflammation: {
    label:  'Inflammation',
    tag:    'INFL',
    width:  700,
    height: 520,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `infl_step_${step}.png`,
                desc: [
                    'Step 1 — Tissue Damage & DAMPs',
                    'Step 2 — Chemical Mediator Release',
                    'Step 3 — Vasodilation & Increased Permeability',
                    'Step 4 — Phagocyte Recruitment (Extravasation)',
                    'Step 5 — Complete Inflammation Overview'
                ][step - 1],
                options: {
                    type:        'acute',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 5,
                    insetType:   'cardinal-signs'
                }
            }))
        },
        {
            name: 'Inflammation Types',
            cases: ['acute', 'chronic'].map(type => ({
                filename: `infl_type_${type}.png`,
                desc:     `Inflammation Type — ${type}`,
                options:  {
                    type,
                    stage:       'complete',
                    drawingStep: 5,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Individual Stages',
            cases: [
                { stage: 'tissue-damage',        step: 1, label: 'Tissue Damage & DAMPs'        },
                { stage: 'chemical-signals',      step: 2, label: 'Chemical Mediator Release'    },
                { stage: 'vasodilation',          step: 3, label: 'Vasodilation & Permeability'  },
                { stage: 'phagocyte-recruitment', step: 4, label: 'Phagocyte Recruitment'        },
                { stage: 'tissue-repair',         step: 5, label: 'Tissue Repair'                }
            ].map(({ stage, step, label }) => ({
                filename: `infl_stage_${stage}.png`,
                desc:     `Stage — ${label}`,
                options:  {
                    type:        'acute',
                    stage,
                    drawingStep: step,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Chronic Inflammation Stages',
            cases: [
                { stage: 'tissue-damage',        label: 'Chronic — Tissue Damage'      },
                { stage: 'chemical-signals',      label: 'Chronic — Mediator Release'   },
                { stage: 'tissue-repair',         label: 'Chronic — Fibrosis Risk'      }
            ].map(({ stage, label }) => ({
                filename: `infl_chronic_${stage}.png`,
                desc:     label,
                options:  {
                    type:        'chronic',
                    stage,
                    drawingStep: 5,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['cardinal-signs', 'eicosanoid-pathway', 'neutrophil-extravasation', 'resolution-signals'].map(inset => ({
                filename: `infl_inset_${inset}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    type:        'acute',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Disease Transmission ──────────────────────────────────────────────────
diseaseTransmission: {
    label:  'Disease Transmission',
    tag:    'DTRN',
    width:  700,
    height: 520,
    groups: [
        {
            name: 'Step-by-Step Build (Malaria)',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `dtrn_malaria_step_${step}.png`,
                desc: [
                    'Step 1 — Initial Infection',
                    'Step 2 — Incubation Period',
                    'Step 3 — Vector Acquisition & Spread',
                    'Step 4 — Pathogen Development in Vector',
                    'Step 5 — Complete Transmission Cycle'
                ][step - 1],
                options: {
                    diseaseType: 'malaria',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 5,
                    insetType:   'r-naught'
                }
            }))
        },
        {
            name: 'Disease Types — Complete Cycle',
            cases: ['malaria', 'dengue', 'lyme', 'zika', 'plague', 'typhus'].map(diseaseType => ({
                filename: `dtrn_disease_${diseaseType}.png`,
                desc:     `Complete Cycle — ${diseaseType}`,
                options:  {
                    diseaseType,
                    stage:       'complete',
                    drawingStep: 5,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Individual Stages (Malaria)',
            cases: [
                { stage: 'infection',          step: 1, label: 'Initial Infection'                  },
                { stage: 'incubation',         step: 2, label: 'Incubation Period'                  },
                { stage: 'transmission',       step: 3, label: 'Vector Acquisition'                 },
                { stage: 'vector-acquisition', step: 4, label: 'Pathogen Development in Vector'     }
            ].map(({ stage, step, label }) => ({
                filename: `dtrn_stage_${stage}.png`,
                desc:     `Stage — ${label}`,
                options:  {
                    diseaseType: 'malaria',
                    stage,
                    drawingStep: step,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Cross-Disease Stage Comparison',
            cases: ['dengue', 'lyme', 'zika'].map(diseaseType => ({
                filename: `dtrn_vector_${diseaseType}.png`,
                desc:     `Vector Acquisition Stage — ${diseaseType}`,
                options:  {
                    diseaseType,
                    stage:       'vector-acquisition',
                    drawingStep: 4,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['r-naught', 'incubation-periods', 'geographic-distribution', 'prevention-methods'].map(inset => ({
                filename: `dtrn_inset_${inset}.png`,
                desc:     `Full diagram + inset: ${inset}`,
                options:  {
                    diseaseType: 'malaria',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},




    // ── Food Web ──────────────────────────────────────────────────────────────────
foodWeb: {
    label:  'Food Web',
    tag:    'FWEB',
    width:  700,
    height: 600,
    groups: [
        {
            name: 'Step-by-Step Build (Terrestrial)',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `foodweb_terrestrial_step_${step}.png`,
                desc: [
                    'Step 1 — Producers (Grass, Trees, Shrubs)',
                    'Step 2 — + Primary Consumers (Rabbit, Deer, Grasshopper)',
                    'Step 3 — + Secondary Consumers (Snake, Fox, Bird)',
                    'Step 4 — + Tertiary Consumers (Hawk, Wolf)',
                    'Step 5 — + Decomposers & All Feeding Connections'
                ][step - 1],
                options: {
                    trophicLevel: 'complete',
                    ecosystem:    'terrestrial',
                    drawingStep:  step,
                    showLabels:   true,
                    showInset:    step === 5,
                    insetType:    'energy-flow'
                }
            }))
        },
        {
            name: 'Step-by-Step Build (Aquatic)',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `foodweb_aquatic_step_${step}.png`,
                desc: [
                    'Step 1 — Producers (Phytoplankton, Algae, Kelp)',
                    'Step 2 — + Primary Consumers (Zooplankton, Shrimp, Small Fish)',
                    'Step 3 — + Secondary Consumers (Medium Fish, Squid, Seal)',
                    'Step 4 — + Tertiary Consumers (Shark, Killer Whale)',
                    'Step 5 — + Decomposers & All Feeding Connections'
                ][step - 1],
                options: {
                    trophicLevel: 'complete',
                    ecosystem:    'aquatic',
                    drawingStep:  step,
                    showLabels:   true,
                    showInset:    step === 5,
                    insetType:    'energy-flow'
                }
            }))
        },
        {
            name: 'Individual Trophic Levels',
            cases: [
                { level: 'producers',          label: 'Producers Only',           eco: 'terrestrial' },
                { level: 'primary-consumers',  label: 'Primary Consumers Only',   eco: 'terrestrial' },
                { level: 'secondary-consumers',label: 'Secondary Consumers Only', eco: 'terrestrial' },
                { level: 'tertiary-consumers', label: 'Tertiary Consumers Only',  eco: 'terrestrial' },
                { level: 'decomposers',        label: 'Decomposers Only',         eco: 'terrestrial' },
                { level: 'producers',          label: 'Aquatic Producers Only',   eco: 'aquatic'     }
            ].map(({ level, label, eco }) => ({
                filename: `foodweb_${eco}_${level}.png`,
                desc:     `${label} (${eco})`,
                options:  {
                    trophicLevel: level,
                    ecosystem:    eco,
                    drawingStep:  5,
                    showLabels:   true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['energy-flow', 'trophic-efficiency', 'biomagnification'].map(inset => ({
                filename: `foodweb_inset_${inset}.png`,
                desc:     `Complete Food Web + inset: ${inset}`,
                options:  {
                    trophicLevel: 'complete',
                    ecosystem:    'terrestrial',
                    drawingStep:  5,
                    showLabels:   true,
                    showInset:    true,
                    insetType:    inset
                }
            }))
        }
    ]
},

// ── Carbon Cycle ──────────────────────────────────────────────────────────────
carbonCycle: {
    label:  'Carbon Cycle',
    tag:    'CARB',
    width:  700,
    height: 600,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `carbon_step_${step}.png`,
                desc: [
                    'Step 1 — Atmosphere (CO₂ Reservoir)',
                    'Step 2 — + Photosynthesis (Atmosphere → Plants)',
                    'Step 3 — + Respiration & Decomposition',
                    'Step 4 — + Fossil Fuels & Combustion',
                    'Step 5 — + Ocean Absorption & Complete Cycle'
                ][step - 1],
                options: {
                    process:     'complete',
                    reservoir:   'atmosphere',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 5,
                    insetType:   'co2-molecule'
                }
            }))
        },
        {
            name: 'Individual Processes',
            cases: [
                { process: 'photosynthesis',   desc: 'Photosynthesis — CO₂ uptake by plants'        },
                { process: 'respiration',      desc: 'Respiration — CO₂ release by organisms'       },
                { process: 'decomposition',    desc: 'Decomposition — CO₂ from dead matter'         },
                { process: 'combustion',       desc: 'Combustion — CO₂ from fossil fuel burning'    },
                { process: 'ocean-absorption', desc: 'Ocean Absorption — CO₂ dissolved in seawater' }
            ].map(({ process, desc }) => ({
                filename: `carbon_process_${process}.png`,
                desc,
                options:  {
                    process,
                    drawingStep: 5,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['co2-molecule', 'greenhouse-effect', 'carbon-reservoirs'].map(inset => ({
                filename: `carbon_inset_${inset}.png`,
                desc:     `Complete Carbon Cycle + inset: ${inset}`,
                options:  {
                    process:     'complete',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Food Chain ────────────────────────────────────────────────────────────────
foodChain: {
    label:  'Food Chain',
    tag:    'FCHN',
    width:  500,
    height: 700,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3].map(step => ({
                filename: `foodchain_step_${step}.png`,
                desc: [
                    'Step 1 — Simple Food Chain (4 Trophic Levels)',
                    'Step 2 — Extended Food Chain (6 Trophic Levels)',
                    'Step 3 — Detrital Food Chain'
                ][step - 1],
                options: {
                    ecosystem:   'terrestrial',
                    length:      'simple',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 1,
                    insetType:   'ten-percent-rule'
                }
            }))
        },
        {
            name: 'Simple Chain by Ecosystem',
            cases: [
                { eco: 'terrestrial', desc: 'Terrestrial — Grass → Grasshopper → Frog → Snake' },
                { eco: 'aquatic',     desc: 'Aquatic — Phytoplankton → Zooplankton → Small → Large Fish' },
                { eco: 'marine',      desc: 'Marine — Algae → Shrimp → Small Fish → Tuna' }
            ].map(({ eco, desc }) => ({
                filename: `foodchain_simple_${eco}.png`,
                desc,
                options:  {
                    ecosystem:   eco,
                    length:      'simple',
                    drawingStep: 1,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Extended Chain by Ecosystem',
            cases: [
                { eco: 'terrestrial', desc: 'Terrestrial Extended — Plants → … → Eagle' },
                { eco: 'aquatic',     desc: 'Aquatic Extended — Phytoplankton → … → Killer Whale' },
                { eco: 'marine',      desc: 'Marine Extended — Phytoplankton → … → Shark' }
            ].map(({ eco, desc }) => ({
                filename: `foodchain_extended_${eco}.png`,
                desc,
                options:  {
                    ecosystem:   eco,
                    length:      'extended',
                    drawingStep: 2,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Step 1 with Different Insets',
            cases: ['ten-percent-rule', 'energy-loss', 'trophic-pyramid'].map(inset => ({
                filename: `foodchain_inset_${inset}.png`,
                desc:     `Simple Food Chain + inset: ${inset}`,
                options:  {
                    ecosystem:   'terrestrial',
                    drawingStep: 1,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Energy Pyramid ────────────────────────────────────────────────────────────
energyPyramid: {
    label:  'Energy Pyramid',
    tag:    'EPYR',
    width:  600,
    height: 550,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3].map(step => ({
                filename: `epyramid_step_${step}.png`,
                desc: [
                    'Step 1 — Energy Pyramid (kJ values, 10% Rule)',
                    'Step 2 — Biomass Pyramid (kg dry mass)',
                    'Step 3 — Pyramid of Numbers (individual counts)'
                ][step - 1],
                options: {
                    type:        'energy',
                    ecosystem:   'terrestrial',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 1,
                    insetType:   'energy-loss-heat'
                }
            }))
        },
        {
            name: 'Pyramid Types',
            cases: [
                { type: 'energy',  desc: 'Energy Pyramid — 10,000 / 1,000 / 100 / 10 kJ' },
                { type: 'biomass', desc: 'Biomass Pyramid — 10,000 / 1,000 / 100 / 10 kg' },
                { type: 'numbers', desc: 'Numbers Pyramid — 1,000,000 → 1 individual'      }
            ].map(({ type, desc }) => ({
                filename: `epyramid_type_${type}.png`,
                desc,
                options:  {
                    type,
                    ecosystem:   'terrestrial',
                    drawingStep: ['energy','biomass','numbers'].indexOf(type) + 1,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Step 1 with Different Insets',
            cases: ['energy-loss-heat', 'lindeman-efficiency', 'inverted-pyramid'].map(inset => ({
                filename: `epyramid_inset_${inset}.png`,
                desc:     `Energy Pyramid + inset: ${inset}`,
                options:  {
                    type:        'energy',
                    ecosystem:   'terrestrial',
                    drawingStep: 1,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Nitrogen Cycle ────────────────────────────────────────────────────────────
nitrogenCycle: {
    label:  'Nitrogen Cycle',
    tag:    'NITR',
    width:  700,
    height: 650,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `nitrogen_step_${step}.png`,
                desc: [
                    'Step 1 — Atmosphere (N₂ Reservoir, 78%)',
                    'Step 2 — + Nitrogen Fixation (N₂ → NH₃, Bacteria)',
                    'Step 3 — + Nitrification (NH₃ → NO₂⁻ → NO₃⁻)',
                    'Step 4 — + Assimilation (Plant Uptake → Animals)',
                    'Step 5 — + Denitrification & Ammonification (Complete Cycle)'
                ][step - 1],
                options: {
                    process:     'complete',
                    organism:    'all',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 5,
                    insetType:   'n2-molecule'
                }
            }))
        },
        {
            name: 'Individual Processes',
            cases: [
                { process: 'fixation',        desc: 'Nitrogen Fixation — N₂ → NH₃ (Rhizobium, lightning)' },
                { process: 'nitrification',   desc: 'Nitrification — NH₃ → NO₂⁻ → NO₃⁻ (Nitrosomonas, Nitrobacter)' },
                { process: 'assimilation',    desc: 'Assimilation — NO₃⁻ uptake by plant roots → proteins' },
                { process: 'denitrification', desc: 'Denitrification — NO₃⁻ → N₂ (Pseudomonas, anaerobic)' }
            ].map(({ process, desc }) => ({
                filename: `nitrogen_process_${process}.png`,
                desc,
                options:  {
                    process,
                    organism:    'all',
                    drawingStep: 5,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['n2-molecule', 'rhizobium-nodule', 'nitrogen-forms'].map(inset => ({
                filename: `nitrogen_inset_${inset}.png`,
                desc:     `Complete Nitrogen Cycle + inset: ${inset}`,
                options:  {
                    process:     'complete',
                    organism:    'all',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Water Cycle ───────────────────────────────────────────────────────────────
waterCycle: {
    label:  'Water Cycle',
    tag:    'WATR',
    width:  750,
    height: 600,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `water_step_${step}.png`,
                desc: [
                    'Step 1 — Landscape, Sun & Ocean (Scene Setup)',
                    'Step 2 — + Evaporation & Transpiration Arrows',
                    'Step 3 — + Condensation & Cloud Formation',
                    'Step 4 — + Precipitation (Rain & Snow)',
                    'Step 5 — + Infiltration, Runoff, Groundwater & Legend'
                ][step - 1],
                options: {
                    process:     'complete',
                    scale:       'global',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 5,
                    insetType:   'water-molecule'
                }
            }))
        },
        {
            name: 'Individual Processes',
            cases: [
                { process: 'evaporation',   desc: 'Evaporation — liquid water → water vapour (solar energy)' },
                { process: 'condensation',  desc: 'Condensation — vapour → droplets → cloud formation'      },
                { process: 'precipitation', desc: 'Precipitation — rain, snow, sleet, hail'                  },
                { process: 'infiltration',  desc: 'Infiltration — water seeping through soil layers'         },
                { process: 'runoff',        desc: 'Surface Runoff — overland flow to streams & rivers'       }
            ].map(({ process, desc }) => ({
                filename: `water_process_${process}.png`,
                desc,
                options:  {
                    process,
                    scale:       'global',
                    drawingStep: 5,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['water-molecule', 'transpiration-detail', 'groundwater-flow'].map(inset => ({
                filename: `water_inset_${inset}.png`,
                desc:     `Complete Water Cycle + inset: ${inset}`,
                options:  {
                    process:     'complete',
                    scale:       'global',
                    drawingStep: 5,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Population Growth ─────────────────────────────────────────────────────────
populationGrowth: {
    label:  'Population Growth',
    tag:    'POPG',
    width:  650,
    height: 550,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3].map(step => ({
                filename: `popgrowth_step_${step}.png`,
                desc: [
                    'Step 1 — Exponential Growth (J-curve, dN/dt = rN)',
                    'Step 2 — + Logistic Growth (S-curve) & Carrying Capacity (K)',
                    'Step 3 — + Phase Labels, Equations, K/2 & Comparison Legend'
                ][step - 1],
                options: {
                    curveType:   'both',
                    phase:       'complete',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 3,
                    insetType:   'growth-equation'
                }
            }))
        },
        {
            name: 'Individual Curve Types',
            cases: [
                { curve: 'exponential', step: 1, desc: 'Exponential Growth only (J-curve) — unlimited resources'   },
                { curve: 'logistic',    step: 2, desc: 'Logistic Growth only (S-curve) — density-dependent limits' },
                { curve: 'both',        step: 3, desc: 'Both curves compared side-by-side with phase zones'        }
            ].map(({ curve, step, desc }) => ({
                filename: `popgrowth_curve_${curve}.png`,
                desc,
                options:  {
                    curveType:   curve,
                    phase:       'complete',
                    drawingStep: step,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Step 3 with Different Insets',
            cases: ['growth-equation', 'density-dependence', 'limiting-factors'].map(inset => ({
                filename: `popgrowth_inset_${inset}.png`,
                desc:     `Complete Growth Models + inset: ${inset}`,
                options:  {
                    curveType:   'both',
                    phase:       'complete',
                    drawingStep: 3,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},

// ── Ecosystem ─────────────────────────────────────────────────────────────────
ecosystem: {
    label:  'Ecosystem Components',
    tag:    'ECOS',
    width:  700,
    height: 600,
    groups: [
        {
            name: 'Step-by-Step Build (Forest)',
            cases: [1, 2, 3, 4, 5].map(step => ({
                filename: `ecosystem_forest_step_${step}.png`,
                desc: [
                    'Step 1 — Abiotic Factors (Sunlight, Water, Temperature, Air)',
                    'Step 2 — + Producers (Trees, Ferns, Shrubs)',
                    'Step 3 — + Consumers (Herbivores & Carnivores)',
                    'Step 4 — + Decomposers & Nutrient Return Arrow',
                    'Step 5 — + Energy Flow, Solar Input & Legend'
                ][step - 1],
                options: {
                    ecosystemType: 'forest',
                    component:     'complete',
                    drawingStep:   step,
                    showLabels:    true,
                    showInset:     step === 5,
                    insetType:     'energy-nutrient-flow'
                }
            }))
        },
        {
            name: 'Ecosystem Types (Step 5)',
            cases: [
                { type: 'forest',    desc: 'Forest Ecosystem — trees, deer, foxes, decomposers'     },
                { type: 'aquatic',   desc: 'Aquatic Ecosystem — algae, fish, decomposers'           },
                { type: 'grassland', desc: 'Grassland Ecosystem — grasses, rabbits, hawks'          },
                { type: 'desert',    desc: 'Desert Ecosystem — cacti, lizards, snakes'              }
            ].map(({ type, desc }) => ({
                filename: `ecosystem_type_${type}.png`,
                desc,
                options:  {
                    ecosystemType: type,
                    component:     'complete',
                    drawingStep:   5,
                    showLabels:    true
                }
            }))
        },
        {
            name: 'Individual Components',
            cases: [
                { comp: 'abiotic',     desc: 'Abiotic Factors only — sunlight, water, temp, air, soil, pH' },
                { comp: 'biotic',      desc: 'Biotic Factors only — producers, consumers, decomposers'     },
                { comp: 'producers',   desc: 'Producers only — autotrophs, photosynthesis'                 },
                { comp: 'consumers',   desc: 'Consumers only — herbivores, carnivores, omnivores'          },
                { comp: 'decomposers', desc: 'Decomposers only — bacteria, fungi, nutrient cycling'        }
            ].map(({ comp, desc }) => ({
                filename: `ecosystem_component_${comp}.png`,
                desc,
                options:  {
                    ecosystemType: 'forest',
                    component:     comp,
                    drawingStep:   5,
                    showLabels:    true
                }
            }))
        },
        {
            name: 'Step 5 with Different Insets',
            cases: ['energy-nutrient-flow', 'symbiosis', 'niche-concept'].map(inset => ({
                filename: `ecosystem_inset_${inset}.png`,
                desc:     `Complete Forest Ecosystem + inset: ${inset}`,
                options:  {
                    ecosystemType: 'forest',
                    component:     'complete',
                    drawingStep:   5,
                    showLabels:    true,
                    showInset:     true,
                    insetType:     inset
                }
            }))
        }
    ]
},

// ── Biomes ────────────────────────────────────────────────────────────────────
biomes: {
    label:  'World Biomes',
    tag:    'BIOM',
    width:  750,
    height: 600,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3].map(step => ({
                filename: `biomes_step_${step}.png`,
                desc: [
                    'Step 1 — All 8 Biomes (Colour-Coded Tiles)',
                    'Step 2 — + Climate Ranges (Temperature & Precipitation)',
                    'Step 3 — + Characteristic Organisms & NPP Productivity'
                ][step - 1],
                options: {
                    biome:         'all',
                    characteristic:'climate',
                    drawingStep:   step,
                    showLabels:    true,
                    showInset:     step === 3,
                    insetType:     'climate-graph'
                }
            }))
        },
        {
            name: 'Characteristics View',
            cases: [
                { char: 'climate',     desc: 'Biomes — Climate classification (temperature & precipitation)' },
                { char: 'organisms',   desc: 'Biomes — Characteristic organisms per biome'                  },
                { char: 'adaptations', desc: 'Biomes — Organism adaptations to biome conditions'            },
                { char: 'productivity',desc: 'Biomes — Net Primary Productivity (NPP) comparison'           }
            ].map(({ char, desc }) => ({
                filename: `biomes_char_${char}.png`,
                desc,
                options:  {
                    biome:         'all',
                    characteristic: char,
                    drawingStep:   3,
                    showLabels:    true
                }
            }))
        },
        {
            name: 'Step 3 with Different Insets',
            cases: ['climate-graph', 'whittaker-diagram', 'species-richness'].map(inset => ({
                filename: `biomes_inset_${inset}.png`,
                desc:     `All Biomes (Step 3) + inset: ${inset}`,
                options:  {
                    biome:         'all',
                    characteristic:'climate',
                    drawingStep:   3,
                    showLabels:    true,
                    showInset:     true,
                    insetType:     inset
                }
            }))
        }
    ]
},

// ── Predator-Prey Dynamics ────────────────────────────────────────────────────
predatorPrey: {
    label:  'Predator-Prey Dynamics',
    tag:    'PRED',
    width:  800,
    height: 500,
    groups: [
        {
            name: 'Step-by-Step Build',
            cases: [1, 2, 3].map(step => ({
                filename: `predprey_step_${step}.png`,
                desc: [
                    'Step 1 — Prey Population Over Time (J-shaped oscillation)',
                    'Step 2 — + Predator Population with Time Lag Annotation',
                    'Step 3 — + Phase Plot Panel & Lotka-Volterra Equations'
                ][step - 1],
                options: {
                    display:     'both',
                    phase:       'complete',
                    drawingStep: step,
                    showLabels:  true,
                    showInset:   step === 3,
                    insetType:   'lotka-volterra-equations'
                }
            }))
        },
        {
            name: 'Display Modes',
            cases: [
                { display: 'time-series', step: 1, desc: 'Time Series only — prey & predator oscillations over time' },
                { display: 'phase-plot',  step: 2, desc: 'Phase Plot only — predator vs prey spiral to equilibrium'  },
                { display: 'both',        step: 3, desc: 'Both panels combined — time series + phase plot'           }
            ].map(({ display, step, desc }) => ({
                filename: `predprey_display_${display.replace('-','_')}.png`,
                desc,
                options:  {
                    display,
                    phase:       'complete',
                    drawingStep: step,
                    showLabels:  true
                }
            }))
        },
        {
            name: 'Step 3 with Different Insets',
            cases: ['lotka-volterra-equations', 'lag-explanation', 'equilibrium-point'].map(inset => ({
                filename: `predprey_inset_${inset.replace(/-/g,'_')}.png`,
                desc:     `Complete Predator-Prey + inset: ${inset}`,
                options:  {
                    display:     'both',
                    phase:       'complete',
                    drawingStep: 3,
                    showLabels:  true,
                    showInset:   true,
                    insetType:   inset
                }
            }))
        }
    ]
},


    // ═══════════════════════════════════════════════════════════════════════════
    // PLANT BIOLOGY DIAGRAMS
    // ═══════════════════════════════════════════════════════════════════════════

    // ── Leaf Cross-Section ────────────────────────────────────────────────────
    leafCrossSection: {
        label:  'Leaf Cross-Section',
        tag:    'LEAF',
        width:  700,
        height: 480,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `leaf_step_${step}.png`,
                    desc: [
                        'Step 1 — Cuticle Layer',
                        'Step 2 — Epidermis & Stomata',
                        'Step 3 — Palisade Mesophyll',
                        'Step 4 — Spongy Mesophyll',
                        'Step 5 — Complete with Vascular Bundle & Labels'
                    ][step - 1],
                    options: {
                        layer:       'complete',
                        process:     'structure',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'stomata-mechanism'
                    }
                }))
            },
            {
                name: 'Individual Layers',
                cases: ['cuticle', 'epidermis', 'palisade', 'spongy', 'vascular'].map(layer => ({
                    filename: `leaf_layer_${layer}.png`,
                    desc:     `Layer — ${layer}`,
                    options:  { layer, process: 'structure', showLabels: true }
                }))
            },
            {
                name: 'Different Processes (Step 5)',
                cases: ['structure', 'photosynthesis', 'transpiration', 'gas-exchange'].map(process => ({
                    filename: `leaf_process_${process}.png`,
                    desc:     `Process — ${process}`,
                    options:  {
                        layer:       'complete',
                        process,
                        drawingStep: 5,
                        showLabels:  true
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['stomata-mechanism', 'chloroplast-detail', 'gas-exchange-detail', 'transpiration-stream'].map(inset => ({
                    filename: `leaf_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        layer:       'complete',
                        process:     'structure',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Photosynthesis ────────────────────────────────────────────────────────
    photosynthesis: {
        label:  'Photosynthesis',
        tag:    'PHOT',
        width:  750,
        height: 560,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `phot_step_${step}.png`,
                    desc: [
                        'Step 1 — Chloroplast Overview',
                        'Step 2 — Light-Dependent Reactions',
                        'Step 3 — ATP & NADPH Production',
                        'Step 4 — Calvin Cycle',
                        'Step 5 — Complete with Equation & Labels'
                    ][step - 1],
                    options: {
                        stage:       'complete',
                        detail:      'overview',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'chloroplast-ultrastructure'
                    }
                }))
            },
            {
                name: 'Individual Stages',
                cases: ['light-reactions', 'calvin-cycle', 'electron-transport'].map(stage => ({
                    filename: `phot_stage_${stage}.png`,
                    desc:     `Stage — ${stage}`,
                    options:  { stage, detail: 'overview', showLabels: true }
                }))
            },
            {
                name: 'Different Detail Levels (Step 5)',
                cases: ['overview', 'z-scheme', 'atp-synthesis', 'carbon-fixation', 'reduction', 'regeneration'].map(detail => ({
                    filename: `phot_detail_${detail}.png`,
                    desc:     `Detail — ${detail}`,
                    options:  {
                        stage:       'complete',
                        detail,
                        drawingStep: 5,
                        showLabels:  true
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['chloroplast-ultrastructure', 'atp-synthase', 'rubisco-enzyme', 'photorespiration'].map(inset => ({
                    filename: `phot_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        stage:       'complete',
                        detail:      'overview',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Flower Structure ──────────────────────────────────────────────────────
    flowerStructure: {
        label:  'Flower Structure',
        tag:    'FLOW',
        width:  640,
        height: 700,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `flow_step_${step}.png`,
                    desc: [
                        'Step 1 — Receptacle & Sepals',
                        'Step 2 — Petals',
                        'Step 3 — Stamens (Male Organs)',
                        'Step 4 — Pistil (Female Organ)',
                        'Step 5 — Complete with Labels'
                    ][step - 1],
                    options: {
                        component:   'complete',
                        stage:       'mature',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'pollen-grain-detail'
                    }
                }))
            },
            {
                name: 'Individual Components',
                cases: ['petals', 'sepals', 'stamen', 'pistil', 'ovary', 'anther'].map(component => ({
                    filename: `flow_component_${component}.png`,
                    desc:     `Component — ${component}`,
                    width:    360,
                    height:   400,
                    options:  { component, stage: 'mature', showLabels: true }
                }))
            },
            {
                name: 'Different Stages (Step 5)',
                cases: ['mature', 'pollination', 'fertilization', 'seed-development'].map(stage => ({
                    filename: `flow_stage_${stage}.png`,
                    desc:     `Stage — ${stage}`,
                    options:  {
                        component:   'complete',
                        stage,
                        drawingStep: 5,
                        showLabels:  true
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['pollen-grain-detail', 'ovule-structure', 'double-fertilization', 'seed-coat-layers'].map(inset => ({
                    filename: `flow_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        component:   'complete',
                        stage:       'mature',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Stomata Structure ─────────────────────────────────────────────────────
    stomataStructure: {
        label:  'Stomata Structure',
        tag:    'STOM',
        width:  700,
        height: 500,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `stom_step_${step}.png`,
                    desc: [
                        'Step 1 — Epidermal Cells',
                        'Step 2 — Guard Cells',
                        'Step 3 — Stomatal Pore',
                        'Step 4 — Chloroplasts in Guard Cells',
                        'Step 5 — Complete with Mechanism & Labels'
                    ][step - 1],
                    options: {
                        state:       'both',
                        view:        'surface',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'turgor-pressure'
                    }
                }))
            },
            {
                name: 'Open vs Closed States',
                cases: ['open', 'closed', 'both'].map(state => ({
                    filename: `stom_state_${state}.png`,
                    desc:     `State — ${state}`,
                    options:  {
                        state,
                        view:        'surface',
                        drawingStep: 5,
                        showLabels:  true
                    }
                }))
            },
            {
                name: 'Different Views (Step 5)',
                cases: ['surface', 'cross-section', 'mechanism'].map(view => ({
                    filename: `stom_view_${view}.png`,
                    desc:     `View — ${view}`,
                    options:  {
                        state:       'both',
                        view,
                        drawingStep: 5,
                        showLabels:  true
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['turgor-pressure', 'ion-transport', 'abscisic-acid', 'circadian-rhythm'].map(inset => ({
                    filename: `stom_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        state:       'both',
                        view:        'surface',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Xylem & Phloem ────────────────────────────────────────────────────────
    xylemPhloem: {
        label:  'Xylem & Phloem',
        tag:    'VASC',
        width:  700,
        height: 600,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `vasc_step_${step}.png`,
                    desc: [
                        'Step 1 — Bundle Sheath',
                        'Step 2 — Xylem Vessels',
                        'Step 3 — Phloem Sieve Tubes',
                        'Step 4 — Companion Cells',
                        'Step 5 — Complete with Transport Arrows & Labels'
                    ][step - 1],
                    options: {
                        tissue:      'both',
                        transport:   'structure',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'cohesion-tension-theory'
                    }
                }))
            },
            {
                name: 'Individual Tissues',
                cases: ['xylem', 'phloem'].map(tissue => ({
                    filename: `vasc_tissue_${tissue}.png`,
                    desc:     `Tissue — ${tissue}`,
                    options:  { tissue, transport: 'structure', showLabels: true }
                }))
            },
            {
                name: 'Different Transport Modes (Step 5)',
                cases: ['structure', 'water-movement', 'sugar-movement', 'pressure-flow', 'cohesion-tension'].map(transport => ({
                    filename: `vasc_transport_${transport}.png`,
                    desc:     `Transport — ${transport}`,
                    options:  {
                        tissue:      'both',
                        transport,
                        drawingStep: 5,
                        showLabels:  true
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['cohesion-tension-theory', 'sieve-plate-detail', 'companion-cell-function', 'loading-unloading'].map(inset => ({
                    filename: `vasc_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        tissue:      'both',
                        transport:   'structure',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Seed Germination ──────────────────────────────────────────────────────
    seedGermination: {
        label:  'Seed Germination',
        tag:    'GERM',
        width:  900,
        height: 560,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `germ_step_${step}.png`,
                    desc: [
                        'Step 1 — Dry Seed',
                        'Step 2 — Imbibition (Water Uptake)',
                        'Step 3 — Radicle Emergence',
                        'Step 4 — Shoot Emergence',
                        'Step 5 — Young Seedling'
                    ][step - 1],
                    options: {
                        stage:       'complete',
                        seedType:    'dicot',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'seed-internal-anatomy'
                    }
                }))
            },
            {
                name: 'Specific Stages',
                cases: ['imbibition', 'activation', 'radicle-emergence', 'shoot-emergence', 'seedling'].map(stage => ({
                    filename: `germ_stage_${stage}.png`,
                    desc:     `Stage — ${stage}`,
                    options:  { stage, seedType: 'dicot', showLabels: true }
                }))
            },
            {
                name: 'Dicot vs Monocot (Step 5)',
                cases: ['dicot', 'monocot'].map(seedType => ({
                    filename: `germ_seedtype_${seedType}.png`,
                    desc:     `Seed type — ${seedType}`,
                    options:  {
                        stage:       'complete',
                        seedType,
                        drawingStep: 5,
                        showLabels:  true
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['seed-internal-anatomy', 'cotyledon-role', 'hormone-activation', 'root-cap-detail'].map(inset => ({
                    filename: `germ_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        stage:       'complete',
                        seedType:    'dicot',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Plant Tropisms ────────────────────────────────────────────────────────
    plantTropisms: {
        label:  'Plant Tropisms',
        tag:    'TROP',
        width:  800,
        height: 600,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `trop_step_${step}.png`,
                    desc: [
                        'Step 1 — Stimulus Source',
                        'Step 2 — Stimulus Perception',
                        'Step 3 — Auxin Redistribution',
                        'Step 4 — Differential Cell Elongation',
                        'Step 5 — Complete Growth Response'
                    ][step - 1],
                    options: {
                        tropismType: 'all',
                        mechanism:   'overview',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'auxin-action'
                    }
                }))
            },
            {
                name: 'Individual Tropism Types',
                cases: ['phototropism', 'gravitropism', 'thigmotropism', 'hydrotropism'].map(tropismType => ({
                    filename: `trop_type_${tropismType}.png`,
                    desc:     `Tropism — ${tropismType}`,
                    options:  { tropismType, mechanism: 'overview', showLabels: true }
                }))
            },
            {
                name: 'Different Mechanisms (Step 5)',
                cases: ['overview', 'auxin-distribution', 'cell-elongation', 'statoliths', 'differential-growth', 'response'].map(mechanism => ({
                    filename: `trop_mechanism_${mechanism}.png`,
                    desc:     `Mechanism — ${mechanism}`,
                    options:  {
                        tropismType: 'all',
                        mechanism,
                        drawingStep: 5,
                        showLabels:  true
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['auxin-action', 'statoliths-detail', 'cell-wall-loosening', 'signal-transduction'].map(inset => ({
                    filename: `trop_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        tropismType: 'all',
                        mechanism:   'overview',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Root System ───────────────────────────────────────────────────────────
    rootSystem: {
        label:  'Root System',
        tag:    'ROOT',
        width:  700,
        height: 650,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `root_step_${step}.png`,
                    desc: [
                        'Step 1 — Primary Root',
                        'Step 2 — Lateral Roots',
                        'Step 3 — Root Hairs',
                        'Step 4 — Root Cap & Meristem',
                        'Step 5 — Complete with Labels'
                    ][step - 1],
                    options: {
                        type:        'complete',
                        process:     'structure',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'root-hair-cell'
                    }
                }))
            },
            {
                name: 'Root System Types',
                cases: ['taproot', 'fibrous'].map(type => ({
                    filename: `root_type_${type}.png`,
                    desc:     `Type — ${type}`,
                    options:  { type, process: 'structure', showLabels: true }
                }))
            },
            {
                name: 'Different Processes (Step 5)',
                cases: ['structure', 'water-uptake', 'mineral-absorption', 'anchorage'].map(process => ({
                    filename: `root_process_${process}.png`,
                    desc:     `Process — ${process}`,
                    options:  {
                        type:        'complete',
                        process,
                        drawingStep: 5,
                        showLabels:  true
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['root-hair-cell', 'osmosis-uptake', 'endodermis-casparian', 'mycorrhizae'].map(inset => ({
                    filename: `root_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        type:        'complete',
                        process:     'structure',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Stem System ───────────────────────────────────────────────────────────
    stemSystem: {
        label:  'Stem System',
        tag:    'STEM',
        width:  620,
        height: 720,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `stem_step_${step}.png`,
                    desc: [
                        'Step 1 — Epidermis',
                        'Step 2 — Cortex',
                        'Step 3 — Vascular Bundles',
                        'Step 4 — Nodes, Buds & Leaves',
                        'Step 5 — Complete Shoot System'
                    ][step - 1],
                    options: {
                        type:        'complete',
                        process:     'structure',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'node-detail'
                    }
                }))
            },
            {
                name: 'Stem Types',
                cases: ['longitudinal', 'shoot'].map(type => ({
                    filename: `stem_type_${type}.png`,
                    desc:     `Type — ${type}`,
                    options:  { type, process: 'structure', showLabels: true }
                }))
            },
            {
                name: 'Different Processes (Step 5)',
                cases: ['structure', 'transport', 'growth', 'support'].map(process => ({
                    filename: `stem_process_${process}.png`,
                    desc:     `Process — ${process}`,
                    options:  {
                        type:        'complete',
                        process,
                        drawingStep: 5,
                        showLabels:  true
                    }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['node-detail', 'axillary-bud', 'lenticel-structure', 'pith-function'].map(inset => ({
                    filename: `stem_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        type:        'complete',
                        process:     'structure',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    },

    // ── Leaf Arrangement (Phyllotaxis) ────────────────────────────────────────
    leafArrangement: {
        label:  'Leaf Arrangement (Phyllotaxis)',
        tag:    'PHYL',
        width:  900,
        height: 600,
        groups: [
            {
                name: 'Step-by-Step Build',
                cases: [1, 2, 3, 4, 5].map(step => ({
                    filename: `phyl_step_${step}.png`,
                    desc: [
                        'Step 1 — Central Stem',
                        'Step 2 — Nodes',
                        'Step 3 — Leaf Blades',
                        'Step 4 — Leaf Venation',
                        'Step 5 — All Patterns Labeled'
                    ][step - 1],
                    options: {
                        pattern:     'complete',
                        drawingStep: step,
                        showLabels:  true,
                        showInset:   step === 5,
                        insetType:   'golden-angle'
                    }
                }))
            },
            {
                name: 'Individual Patterns',
                cases: ['alternate', 'opposite', 'whorled', 'spiral'].map(pattern => ({
                    filename: `phyl_pattern_${pattern}.png`,
                    desc:     `Pattern — ${pattern}`,
                    options:  { pattern, showLabels: true }
                }))
            },
            {
                name: 'Step 5 with Different Insets',
                cases: ['golden-angle', 'light-interception', 'fibonacci-sequence', 'leaf-mosaic'].map(inset => ({
                    filename: `phyl_inset_${inset}.png`,
                    desc:     `Full diagram + inset: ${inset}`,
                    options:  {
                        pattern:     'complete',
                        drawingStep: 5,
                        showLabels:  true,
                        showInset:   true,
                        insetType:   inset
                    }
                }))
            }
        ]
    }

};

// ─────────────────────────────────────────────────────────────────────────────
// TERMINAL UI HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function printBanner() {
    console.clear();
    console.log(chalk.bold.cyan('╔══════════════════════════════════════════════════════════╗'));
    console.log(chalk.bold.cyan('║      ANATOMICAL DIAGRAMS — Interactive Test Suite        ║'));
    console.log(chalk.bold.cyan('║      @napi-rs/canvas  •  Node.js  •  PNG Output          ║'));
    console.log(chalk.bold.cyan('╚══════════════════════════════════════════════════════════╝'));
    console.log();
}

function printSuccess(filePath) {
    console.log(chalk.green('  ✔  Saved → ') + chalk.white.underline(filePath));
}

function printError(msg) {
    console.log(chalk.red('  ✘  Error: ') + msg);
}

function printSectionHeader(text) {
    console.log();
    console.log(chalk.bold.yellow('  --- ' + text + ' ---'));
}

function printStats(count, dir, elapsed) {
    console.log();
    console.log(
        chalk.bold.green(`  ✔  ${count} PNG${count !== 1 ? 's' : ''} saved to `) +
        chalk.white.underline(dir) +
        chalk.gray(` in ${elapsed}ms`)
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER ACTIONS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Render every case in a single group and save PNGs.
 * Returns the number of files successfully written.
 */
function renderGroup(diagramKey, group, baseDir, diagramDef) {
    printSectionHeader(group.name);
    let count = 0;

    for (const tc of group.cases) {
        const w       = tc.width  || diagramDef.width;
        const h       = tc.height || diagramDef.height;
        const dir     = path.join(baseDir, diagramKey);
        ensureDir(dir);
        const outPath = path.join(dir, tc.filename);

        try {
            renderAndSave(diagramKey, tc.options, w, h, outPath);
            console.log(chalk.gray(`     ${tc.desc}`));
            printSuccess(outPath);
            count++;
        } catch (err) {
            console.log(chalk.gray(`     ${tc.desc}`));
            printError(err.message);
        }
    }

    return count;
}

/** Render ALL groups for ALL diagram systems. */
function renderAll(outputDir) {
    const t0 = Date.now();
    let total = 0;

    for (const [key, def] of Object.entries(DIAGRAMS)) {
        console.log();
        console.log(chalk.bold.magenta(`  [${def.tag}]  ${def.label}`));
        for (const group of def.groups) {
            total += renderGroup(key, group, outputDir, def);
        }
    }

    printStats(total, outputDir, Date.now() - t0);
}

// ─────────────────────────────────────────────────────────────────────────────
// INTERACTIVE MENUS
// ─────────────────────────────────────────────────────────────────────────────

async function promptContinue() {
    await inquirer.prompt([
        {
            type:    'input',
            name:    '_',
            message: chalk.gray('Press Enter to continue...')
        }
    ]);
}

async function showMenu(title, items) {
    console.log();
    console.log(chalk.bold.yellow(`  ${title}`));
    console.log(chalk.gray('  ' + '-'.repeat(50)));

    items.forEach((item, i) => {
        const num = chalk.bold.cyan(`  ${String(i + 1).padStart(2, ' ')}.`);
        console.log(`${num} ${item.label}`);
    });

    console.log();

    while (true) {
        const { input } = await inquirer.prompt([
            {
                type:    'input',
                name:    'input',
                message: chalk.bold('  Enter number:')
            }
        ]);

        const trimmed = input.trim();
        const num     = parseInt(trimmed, 10);

        if (!isNaN(num) && num >= 1 && num <= items.length) {
            return items[num - 1].value;
        }

        console.log(chalk.red(`  Invalid choice "${trimmed}". Enter a number between 1 and ${items.length}.`));
    }
}

// ── Main menu ─────────────────────────────────────────────────────────────────
async function menuMain(outputDir) {
    printBanner();
    console.log(chalk.gray(`  Output directory: ${outputDir}\n`));

    const items = [
        ...Object.entries(DIAGRAMS).map(([key, def]) => ({
            label: `[${def.tag}] ${def.label}`,
            value: key
        })),
        { label: '[*] Render ALL diagrams (all steps, all groups)', value: '__all__'  },
        { label: '[D] Change output directory',                     value: '__dir__'  },
        { label: '[X] Exit',                                        value: '__exit__' }
    ];

    const system = await showMenu('Select a diagram system:', items);

    if (system === '__exit__') {
        console.log(chalk.cyan('\n  Bye!\n'));
        process.exit(0);
    }

    if (system === '__all__') {
        printBanner();
        renderAll(outputDir);
        await promptContinue();
        return menuMain(outputDir);
    }

    if (system === '__dir__') {
        const { newDir } = await inquirer.prompt([
            {
                type:    'input',
                name:    'newDir',
                message: '  Enter new output directory path:',
                default: outputDir
            }
        ]);
        const resolved = path.resolve((newDir + '').trim() || outputDir);
        ensureDir(resolved);
        return menuMain(resolved);
    }

    return menuSystem(system, outputDir);
}

// ── System menu ───────────────────────────────────────────────────────────────
async function menuSystem(diagramKey, outputDir) {
    const def = DIAGRAMS[diagramKey];

    printBanner();
    console.log(chalk.bold.magenta(`  [${def.tag}] ${def.label}\n`));

    const items = [
        ...def.groups.map((g, i) => ({
            label: `${g.name}  (${g.cases.length} diagrams)`,
            value: i
        })),
        { label: `[*] Render ALL groups for ${def.label}`, value: '__all__'  },
        { label: '[<] Back to main menu',                   value: '__back__' }
    ];

    const groupIdx = await showMenu('Select a group:', items);

    if (groupIdx === '__back__') return menuMain(outputDir);

    if (groupIdx === '__all__') {
        printBanner();
        console.log(chalk.bold.magenta(`  [${def.tag}] ${def.label}\n`));
        const t0    = Date.now();
        let   total = 0;
        for (const group of def.groups) {
            total += renderGroup(diagramKey, group, outputDir, def);
        }
        printStats(total, path.join(outputDir, diagramKey), Date.now() - t0);
        await promptContinue();
        return menuSystem(diagramKey, outputDir);
    }

    return menuGroup(diagramKey, groupIdx, outputDir);
}

// ── Group menu ────────────────────────────────────────────────────────────────
async function menuGroup(diagramKey, groupIdx, outputDir) {
    const def   = DIAGRAMS[diagramKey];
    const group = def.groups[groupIdx];

    printBanner();
    console.log(chalk.bold.magenta(`  [${def.tag}] ${def.label}  >  ${group.name}\n`));

    const items = [
        ...group.cases.map((tc, i) => ({
            label: tc.desc,
            value: i
        })),
        { label: '[*] Render ALL cases in this group', value: '__all__'  },
        { label: '[<] Back to group list',             value: '__back__' }
    ];

    const caseIdx = await showMenu('Select a diagram to render:', items);

    if (caseIdx === '__back__') return menuSystem(diagramKey, outputDir);

    if (caseIdx === '__all__') {
        const t0    = Date.now();
        const count = renderGroup(diagramKey, group, outputDir, def);
        printStats(count, path.join(outputDir, diagramKey), Date.now() - t0);
        await promptContinue();
        return menuGroup(diagramKey, groupIdx, outputDir);
    }

    const tc      = group.cases[caseIdx];
    const w       = tc.width  || def.width;
    const h       = tc.height || def.height;
    const dir     = path.join(outputDir, diagramKey);
    ensureDir(dir);
    const outPath = path.join(dir, tc.filename);

    console.log();
    console.log(chalk.cyan('  Rendering: ') + tc.desc);
    console.log(chalk.gray(`  Canvas: ${w} x ${h}px`));

    try {
        const t0 = Date.now();
        renderAndSave(diagramKey, tc.options, w, h, outPath);
        console.log(chalk.green(`  Done in ${Date.now() - t0}ms`));
        printSuccess(outPath);
    } catch (err) {
        printError(err.message);
        console.error(chalk.red(err.stack));
    }

    await promptContinue();
    return menuGroup(diagramKey, groupIdx, outputDir);
}

// ─────────────────────────────────────────────────────────────────────────────
// ENTRY POINT
// ─────────────────────────────────────────────────────────────────────────────

async function main() {
    const defaultOutputDir = path.join(__dirname, 'output');
    ensureDir(defaultOutputDir);

    // Non-interactive: --all
    if (process.argv.includes('--all')) {
        printBanner();
        renderAll(defaultOutputDir);
        process.exit(0);
    }

    // Non-interactive: --system <key>
    const sysFlag = process.argv.indexOf('--system');
    if (sysFlag !== -1) {
        const key = process.argv[sysFlag + 1];
        if (!key || !DIAGRAMS[key]) {
            console.error(chalk.red(`Unknown --system value: "${key || ''}"`));
            console.error(chalk.gray('Available: ' + Object.keys(DIAGRAMS).join(', ')));
            process.exit(1);
        }
        printBanner();
        const def   = DIAGRAMS[key];
        const t0    = Date.now();
        let   total = 0;
        console.log(chalk.bold.magenta(`  [${def.tag}]  ${def.label}`));
        for (const group of def.groups) {
            total += renderGroup(key, group, defaultOutputDir, def);
        }
        printStats(total, path.join(defaultOutputDir, key), Date.now() - t0);
        process.exit(0);
    }

    // Interactive mode
    await menuMain(defaultOutputDir);
}

main().catch(err => {
    console.error(chalk.red('\nFatal error:'), err);
    process.exit(1);
});
