// ============================================================================
// biochemicalTests-usage.js
// Interactive terminal-based test suite for Biochemical Food Tests
// Uses: @napi-rs/canvas  |  inquirer (v9+, ESM)  |  chalk (v5+, ESM)
//
// Run:  node biochemicalTests-usage.js
//       node biochemicalTests-usage.js --all
//       node biochemicalTests-usage.js --system benedictsTest
//
// Output PNGs are saved to ./output/<diagramKey>/<filename>.png
// ============================================================================

import { createCanvas }             from '@napi-rs/canvas';
import inquirer                     from 'inquirer';
import chalk                        from 'chalk';
import fs                           from 'fs';
import path                         from 'path';
import { fileURLToPath }            from 'url';

import { BiochemicalTestsRegistry } from './biochemicalTestsRegister.js';
import { BiochemicalShapes }        from './biochemicalShapes.js';
import { BiochemicalDiagramRenderer } from './biochemicalRenderer.js';

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
    const renderer = new BiochemicalDiagramRenderer(canvas);
    renderer.renderDiagram(diagramKey, 0, 0, width, height, options);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
}

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
    }
};

// ─────────────────────────────────────────────────────────────────────────────
// RENDERING ENGINE
// ─────────────────────────────────────────────────────────────────────────────

async function renderGroup(diagramKey, group, diagramDef) {
    const baseDir = path.join(__dirname, 'output', diagramKey);
    ensureDir(baseDir);

    console.log(chalk.cyan(`\n  📋 ${group.name}`));

    let passed = 0, failed = 0;

    for (const testCase of group.cases) {
        const w = testCase.width  || diagramDef.width;
        const h = testCase.height || diagramDef.height;
        const outputPath = path.join(baseDir, testCase.filename);

        process.stdout.write(`    ${testCase.desc.padEnd(62)}`);
        try {
            renderAndSave(diagramKey, testCase.options, w, h, outputPath);
            process.stdout.write(chalk.green(' ✓ OK\n'));
            passed++;
        } catch (err) {
            process.stdout.write(chalk.red(` ✗ FAIL\n`));
            console.error(chalk.red(`      Error: ${err.message}`));
            failed++;
        }
    }

    return { passed, failed };
}

async function renderDiagramSuite(diagramKey, diagramDef) {
    const def = BiochemicalTestsRegistry.getDiagram(diagramKey);
    console.log(chalk.bold.yellow(`\n[${ diagramDef.tag }] ${diagramDef.label}`));
    if (def) {
        console.log(chalk.grey(`       ${def.description}`));
    }

    let totalPassed = 0, totalFailed = 0;

    for (const group of diagramDef.groups) {
        const { passed, failed } = await renderGroup(diagramKey, group, diagramDef);
        totalPassed += passed;
        totalFailed += failed;
    }

    const status = totalFailed === 0
        ? chalk.green(`✓ ${totalPassed} passed`)
        : chalk.red(`✗ ${totalFailed} failed`) + chalk.green(` / ${totalPassed} passed`);
    console.log(`\n  Summary: ${status}`);

    return { totalPassed, totalFailed };
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI ARGUMENT PARSING
// ─────────────────────────────────────────────────────────────────────────────

const args    = process.argv.slice(2);
const runAll  = args.includes('--all');
const sysIdx  = args.indexOf('--system');
const sysKey  = sysIdx !== -1 ? args[sysIdx + 1] : null;

// ─────────────────────────────────────────────────────────────────────────────
// INTERACTIVE MENU
// ─────────────────────────────────────────────────────────────────────────────

async function interactiveMenu() {
    console.log(chalk.bold.blue('\n══════════════════════════════════════════════'));
    console.log(chalk.bold.blue('  Biochemical Food Tests — Diagram Test Suite'));
    console.log(chalk.bold.blue('══════════════════════════════════════════════\n'));

    BiochemicalTestsRegistry.printSummary();
    console.log('');

    const choices = [
        { name: 'Run ALL tests (all 4 biochemical tests)', value: '__all__' },
        new inquirer.Separator('── Individual Tests ──────────────────────────'),
        ...Object.entries(DIAGRAMS).map(([key, def]) => ({
            name: `[${def.tag}] ${def.label}`,
            value: key
        })),
        new inquirer.Separator(),
        { name: 'Exit', value: '__exit__' }
    ];

    const { selected } = await inquirer.prompt([{
        type:    'list',
        name:    'selected',
        message: 'Select a test to render:',
        choices
    }]);

    if (selected === '__exit__') {
        console.log(chalk.grey('\nGoodbye.\n'));
        process.exit(0);
    }

    if (selected === '__all__') {
        await runAllDiagrams();
    } else {
        await renderDiagramSuite(selected, DIAGRAMS[selected]);
        console.log(chalk.grey(`\n  PNGs saved to ./output/${selected}/\n`));
    }

    // Ask to continue
    const { again } = await inquirer.prompt([{
        type:    'confirm',
        name:    'again',
        message: 'Return to menu?',
        default: true
    }]);

    if (again) await interactiveMenu();
}

async function runAllDiagrams() {
    console.log(chalk.bold('\n▶  Rendering all biochemical test diagrams…\n'));
    let grandPassed = 0, grandFailed = 0;

    for (const [key, def] of Object.entries(DIAGRAMS)) {
        const { totalPassed, totalFailed } = await renderDiagramSuite(key, def);
        grandPassed += totalPassed;
        grandFailed += totalFailed;
    }

    console.log(chalk.bold('\n══════════════════════════════════════════════'));
    console.log(chalk.bold('  FINAL RESULTS'));
    console.log(chalk.bold('══════════════════════════════════════════════'));
    console.log(`  Total passed : ${chalk.green(grandPassed)}`);
    console.log(`  Total failed : ${grandFailed > 0 ? chalk.red(grandFailed) : chalk.green(grandFailed)}`);
    console.log(`  Output dir   : ${chalk.cyan(path.join(__dirname, 'output'))}`);
    console.log('');
}

// ─────────────────────────────────────────────────────────────────────────────
// ENTRY POINT
// ─────────────────────────────────────────────────────────────────────────────

(async () => {
    if (runAll) {
        await runAllDiagrams();
    } else if (sysKey) {
        if (!DIAGRAMS[sysKey]) {
            console.error(chalk.red(`\nUnknown diagram key: "${sysKey}"`));
            console.log('Available keys:', Object.keys(DIAGRAMS).join(', '));
            process.exit(1);
        }
        await renderDiagramSuite(sysKey, DIAGRAMS[sysKey]);
        console.log(chalk.grey(`\n  PNGs saved to ./output/${sysKey}/\n`));
    } else {
        await interactiveMenu();
    }
})();
