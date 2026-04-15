/**
 * calculator-interactive.js
 *
 * Interactive CLI session for GraphingCalculatorGame.
 * Run with:  node calculator-interactive.js
 *
 * All SVG output files are written to ./temp/
 */

import readline from 'readline';
import { GraphingCalculatorGame } from './graphing.js';

// ─────────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────────

const RESET  = '\x1b[0m';
const BOLD   = '\x1b[1m';
const CYAN   = '\x1b[36m';
const GREEN  = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RED    = '\x1b[31m';
const DIM    = '\x1b[2m';

const c  = (color, text) => `${color}${text}${RESET}`;
const hr = (char = '─', len = 60) => c(DIM, char.repeat(len));

function printBanner() {
    console.clear();
    console.log();
    console.log(c(CYAN, BOLD + '  ╔══════════════════════════════════════════╗'));
    console.log(c(CYAN,       '  ║   📐  GRAPHING CALCULATOR  (SVG mode)    ║'));
    console.log(c(CYAN,       '  ╚══════════════════════════════════════════╝') + RESET);
    console.log();
    console.log(c(DIM, '  Type an equation, shape, vector, or matrix.'));
    console.log(c(DIM, '  Type  help  for all commands.  quit  to exit.'));
    console.log();
}

// ─────────────────────────────────────────────
//  Input router
//  Returns true if the app should keep running.
// ─────────────────────────────────────────────

async function handleInput(raw, game) {
    const input = raw.trim();
    if (!input) return true;

    const lower = input.toLowerCase();

    // ── exit ────────────────────────────────
    if (lower === 'quit' || lower === 'exit') {
        console.log(c(GREEN, '\n  Goodbye! SVG files are in ./temp/\n'));
        return false;
    }

    // ── informational commands ───────────────
    if (lower === 'help')      { game.displayHelp();        return true; }
    if (lower === 'formulas')  { game.displayAllFormulas();  return true; }
    if (lower === 'status')    { console.log('\n  ' + game.getCalculatorStatus()); return true; }
    if (lower === 'graph')     { game.displayCurrentGraph(); return true; }

    // ── history commands ─────────────────────
    if (lower === 'history') {
        if (game.equationHistory.length) {
            console.log(c(CYAN, '\n  📈 Equation history:'));
            game.equationHistory.forEach(e => console.log('    ' + e));
        }
        game.displayShapeHistory('triangle',      game.triangleHistory);
        game.displayShapeHistory('circle',        game.circleHistory);
        game.displayShapeHistory('rectangle',     game.rectangleHistory);
        game.displayShapeHistory('square',        game.squareHistory);
        game.displayShapeHistory('parallelogram', game.parallelogramHistory);
        game.displayShapeHistory('polygon',       game.polygonHistory);
        game.displayShapeHistory('ellipse',       game.ellipseHistory);
        game.displayShapeHistory('quadrilateral', game.quadrilateralHistory);
        game.displayShapeHistory('trapezoid',     game.trapezoidHistory);
        game.displayShapeHistory('sphere',        game.sphereHistory);
        game.displayShapeHistory('cylinder',      game.cylinderHistory);
        game.displayShapeHistory('cone',          game.coneHistory);
        game.displayShapeHistory('cube',          game.cubeHistory);
        return true;
    }

    if (lower === 'triangles')      { game.displayShapeHistory('triangle',      game.triangleHistory);      return true; }
    if (lower === 'circles')        { game.displayShapeHistory('circle',        game.circleHistory);        return true; }
    if (lower === 'rectangles')     { game.displayShapeHistory('rectangle',     game.rectangleHistory);     return true; }
    if (lower === 'squares')        { game.displayShapeHistory('square',        game.squareHistory);        return true; }
    if (lower === 'parallelograms') { game.displayShapeHistory('parallelogram', game.parallelogramHistory); return true; }
    if (lower === 'polygons')       { game.displayShapeHistory('polygon',       game.polygonHistory);       return true; }
    if (lower === 'ellipses')       { game.displayShapeHistory('ellipse',       game.ellipseHistory);       return true; }
    if (lower === 'quadrilaterals') { game.displayShapeHistory('quadrilateral', game.quadrilateralHistory); return true; }
    if (lower === 'trapezoids')     { game.displayShapeHistory('trapezoid',     game.trapezoidHistory);     return true; }
    if (lower === 'spheres')        { game.displayShapeHistory('sphere',        game.sphereHistory);        return true; }
    if (lower === 'cylinders')      { game.displayShapeHistory('cylinder',      game.cylinderHistory);      return true; }
    if (lower === 'cones')          { game.displayShapeHistory('cone',          game.coneHistory);          return true; }
    if (lower === 'cubes')          { game.displayShapeHistory('cube',          game.cubeHistory);          return true; }
    if (lower === 'vectors'  || lower === 'vhistory') {
        if (game.vectorHistory.length) {
            console.log(c(CYAN, '\n  ➡️  Vector history:'));
            game.vectorHistory.forEach(v => console.log(`    ${v.id}. ${v.input}`));
        } else { console.log('  No vectors added yet.'); }
        return true;
    }
    if (lower === 'matrices' || lower === 'mhistory') {
        if (game.matrixHistory.length) {
            console.log(c(CYAN, '\n  🔢 Matrix history:'));
            game.matrixHistory.forEach(m => console.log(`    ${m.id}. ${m.input}`));
        } else { console.log('  No matrices added yet.'); }
        return true;
    }

    // ── management ───────────────────────────
    if (lower === 'clear') {
        game.clearAll();
        console.log(c(GREEN, '  ✓ All items cleared.'));
        return true;
    }

    if (lower === 'undo') {
        game.undoLast();
        return true;
    }

    if (lower === 'save') {
        await game.saveCurrentGraph();
        return true;
    }

    // ── theme ────────────────────────────────
    if (lower.startsWith('theme')) {
        const name = lower.split(/\s+/)[1];
        if (!name) {
            console.log(c(YELLOW, '  Usage: theme <standard|dark|scientific>'));
        } else if (game.changeTheme(name)) {
            console.log(c(GREEN, `  ✓ Theme changed to "${name}".`));
        } else {
            console.log(c(RED, `  ✗ Unknown theme "${name}". Try: standard, dark, scientific`));
        }
        return true;
    }

    // ── zoom / viewing window ────────────────
    if (lower.startsWith('zoom')) {
        const parts = lower.split(/\s+/).slice(1).map(Number);
        if (parts.length !== 4 || parts.some(isNaN)) {
            console.log(c(YELLOW, '  Usage: zoom <xMin> <xMax> <yMin> <yMax>'));
            console.log(c(DIM,    '  Example: zoom -5 5 -5 5'));
        } else {
            const [xMin, xMax, yMin, yMax] = parts;
            if (game.setViewingWindow(xMin, xMax, yMin, yMax)) {
                console.log(c(GREEN, `  ✓ Window set to x[${xMin}, ${xMax}] y[${yMin}, ${yMax}].`));
            } else {
                console.log(c(RED, '  ✗ Invalid window. Min must be less than Max.'));
            }
        }
        return true;
    }

    // ── 2-D shapes ───────────────────────────
    if (lower.startsWith('triangle'))      { game.addTriangle(input);      return true; }
    if (lower.startsWith('circle'))        { game.addCircle(input);        return true; }

    // Shapes below require methods to exist on the game instance.
    // They are called defensively so missing implementations fail gracefully.
    const shapeDispatch = {
        rectangle:     'addRectangle',
        square:        'addSquare',
        parallelogram: 'addParallelogram',
        polygon:       'addPolygon',
        ellipse:       'addEllipse',
        quadrilateral: 'addQuadrilateral',
        trapezoid:     'addTrapezoid',
        sphere:        'addSphere',
        cylinder:      'addCylinder',
        cone:          'addCone',
        cube:          'addCube',
        vector:        'addVector',
        vectors:       'addVector',
        matrix:        'addMatrix',
    };

    for (const [prefix, method] of Object.entries(shapeDispatch)) {
        if (lower.startsWith(prefix)) {
            if (typeof game[method] === 'function') {
                game[method](input);
            } else {
                console.log(c(YELLOW, `  ⚠  ${method}() is not yet implemented in this build.`));
            }
            return true;
        }
    }

    // ── equation (fallback) ──────────────────
    if (input.includes('=') || input.includes('x') || input.match(/^y\s*=/)) {
        game.addEquation(input);
        return true;
    }

    // ── unknown input ────────────────────────
    console.log(c(RED, `  ✗ Unrecognised input: "${input}"`));
    console.log(c(DIM, '    Type  help  for a list of commands.'));
    return true;
}

// ─────────────────────────────────────────────
//  Demo: run a preset sequence, then go live
// ─────────────────────────────────────────────

async function runDemo(game) {
    console.log(hr());
    console.log(c(YELLOW, BOLD + '  ▶  Running quick demo …') + RESET);
    console.log(hr());
    console.log();

    const demoInputs = [
        // equations
        'y=x**2',
        'y=sin(x)',
        'y=2x+3',
        'y=log(x)',
        'y=abs(x-2)',
        'y=sqrt(x)',

        // 2-D shapes
        'triangle A(0,0) B(4,0) C(2,3)',
        'circle center(0,0) radius 5',

        // info
        'status',
    ];

    for (const cmd of demoInputs) {
        console.log(hr('·'));
        console.log(c(CYAN, `  ❯ ${cmd}`));
        console.log();
        const cont = await handleInput(cmd, game);
        if (!cont) return;
        console.log();
    }

    console.log(hr());
    console.log(c(GREEN, '  ✓ Demo complete. SVG files written to ./temp/'));
    console.log(hr());
    console.log();
}

// ─────────────────────────────────────────────
//  Main entry point
// ─────────────────────────────────────────────

async function main() {
    const game = new GraphingCalculatorGame();

    printBanner();

    // Ask whether to run the demo first
    const rl = readline.createInterface({
        input:  process.stdin,
        output: process.stdout,
        terminal: false,
    });

    // Helper: prompt and wait for one line
    const ask = (question) =>
        new Promise(resolve => rl.question(question, resolve));

    const runDemoAnswer = await ask(
        c(YELLOW, '  Run the built-in demo first? [Y/n] ')
    );
    console.log();

    if (!runDemoAnswer.trim().toLowerCase().startsWith('n')) {
        await runDemo(game);
    }

    // ── interactive REPL ─────────────────────
    console.log(c(BOLD + CYAN, '  ┌─ Interactive mode ─────────────────────┐'));
    console.log(c(BOLD + CYAN, '  │  Enter commands below. Type quit/exit. │'));
    console.log(c(BOLD + CYAN, '  └────────────────────────────────────────┘'));
    console.log();

    const prompt = c(CYAN, '  ❯ ');

    const loop = async () => {
        process.stdout.write(prompt);

        for await (const line of rl) {
            const keepGoing = await handleInput(line, game);
            console.log();
            if (!keepGoing) {
                rl.close();
                return;
            }
            process.stdout.write(prompt);
        }
    };

    await loop();
}

main().catch(err => {
    console.error('\n  Fatal error:', err);
    process.exit(1);
});
