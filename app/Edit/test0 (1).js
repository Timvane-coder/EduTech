// ============================================================================
// example-usage.js
// Interactive terminal-based test suite for Anatomical Diagrams
// Uses: @napi-rs/canvas  |  inquirer (v9+, ESM)  |  chalk (v5+, ESM)
//
// Run:  node example-usage.js
//       node example-usage.js --all
//       node example-usage.js --system heartAnatomy
//
// Output PNGs are saved to ./output/<diagramKey>/<filename>.png
// ============================================================================

import { createCanvas }             from '@napi-rs/canvas';
import inquirer                     from 'inquirer';
import chalk                        from 'chalk';
import fs                           from 'fs';
import path                         from 'path';
import { fileURLToPath }            from 'url';

import { AnatomicalDiagramsRegistry } from './register.js';
import { AnatomicalShapes }           from './anatomyshapes.js';
import { AnatomicalDiagramRenderer }  from './render.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─────────────────────────────────────────────────────────────────────────────
// CANVAS + FILE HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

/**
 * Creates an @napi-rs/canvas, renders a diagram into it, and saves a PNG.
 */
function renderAndSave(diagramKey, options, width, height, outputPath) {
    const canvas   = createCanvas(width, height);
    const renderer = new AnatomicalDiagramRenderer(canvas);
    renderer.renderDiagram(diagramKey, 0, 0, width, height, options);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
}

// ─────────────────────────────────────────────────────────────────────────────
// DIAGRAM DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────

const DIAGRAMS = {

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
                cases: ['trachea', 'bronchi', 'leftLung', 'rightLung', 'alveoli', 'diaphragm'].map(comp => ({
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

