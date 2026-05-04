// ====================================================================
// CELL DIVISION VISUALIZATION
//
// GHOST SYSTEM (v3 — robust, no extra DOM elements):
//   Every animation frame:
//     1.  clearRect on mainCanvas + particleCanvas
//     2.  GHOST PASS  — draw entire cell at final/developed state
//                       with globalAlpha = CONFIG.ghost.opacity (0.07)
//     3.  SCENE PASS  — draw phase-driven elements at their current
//                       opacity (0 → 1) on top of the ghost
//
//   As the user scrolls, each element transitions from invisible
//   (0 opacity, only the ghost shows) to fully bright (1 opacity,
//   ghost is visually eclipsed by the scene layer on top).
//   No separate canvas elements, no DOM injection needed.
// ====================================================================

// ==================== CONFIGURATION ====================
const CONFIG = {
    canvas:      { width: 1200, height: 800 },
    cell:        { centerX: 600, centerY: 400, radius: 220 },
    nucleus:     { radius: 90 },
    chromosomes: { count: 6, condensedSize: 28, relaxedSize: 18 },
    proteins:    { count: 60 },
    ghost:       { opacity: 0.07 },
    mutations: {
        nondisjunction: { extraChromosomes: 2 },
        deletion:       { missingCount: 2 }
    }
};

// ==================== VECTOR2D ====================
class Vector2D {
    constructor(x = 0, y = 0) { this.x = x; this.y = y; }
    add(v)      { return new Vector2D(this.x + v.x, this.y + v.y); }
    subtract(v) { return new Vector2D(this.x - v.x, this.y - v.y); }
    multiply(s) { return new Vector2D(this.x * s, this.y * s); }
    magnitude() { return Math.sqrt(this.x * this.x + this.y * this.y); }
    normalize()  { const m = this.magnitude(); return m > 0 ? this.multiply(1 / m) : new Vector2D(); }
    distance(v)  { return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2); }
    lerp(v, t)   { return new Vector2D(this.x + (v.x - this.x) * t, this.y + (v.y - this.y) * t); }
    clone()      { return new Vector2D(this.x, this.y); }
}

// ==================== COLOR ====================
class Color {
    constructor(r, g, b, a = 1) { this.r = r; this.g = g; this.b = b; this.a = a; }
    toString() { return `rgba(${this.r | 0},${this.g | 0},${this.b | 0},${this.a})`; }
    withAlpha(a) { return new Color(this.r, this.g, this.b, Math.max(0, Math.min(1, a))); }
    lerp(t, c) {
        return new Color(
            this.r + (c.r - this.r) * t, this.g + (c.g - this.g) * t,
            this.b + (c.b - this.b) * t, this.a + (c.a - this.a) * t
        );
    }
}

const PAL = {
    MEMBRANE:   new Color(80, 200, 180, 0.7),
    NUCLEUS_BG: new Color(25, 40, 80, 0.55),
    NUCLEUS_RM: new Color(100, 180, 220, 0.5),
    NUCLEOLUS:  new Color(160, 100, 200, 0.8),
    SPINDLE:    new Color(180, 200, 255, 0.5),
    SPINDLE_K:  new Color(200, 220, 255, 0.75),
    PROTEIN:    new Color(255, 200, 80, 0.7),
    CHROMO: [
        new Color(255, 94, 106),  new Color(79, 195, 247),
        new Color(255, 204, 2),   new Color(240, 98, 146),
        new Color(105, 240, 174), new Color(255, 183, 77)
    ]
};

// ==================== CANVAS RENDERER ====================
class CanvasRenderer {
    constructor(id, w, h) {
        this.canvas = document.getElementById(id);
        this.ctx    = this.canvas.getContext('2d');
        this.width  = w; this.height = h;
        this.canvas.width = w; this.canvas.height = h;
    }

    clear() { this.ctx.clearRect(0, 0, this.width, this.height); }

    // Execute fn() with ctx.globalAlpha set cleanly to `alpha`
    withAlpha(alpha, fn) {
        if (alpha <= 0) return;
        const c = this.ctx;
        c.save();
        c.globalAlpha = Math.min(1, alpha);
        fn();
        c.restore();
    }

    circle(x, y, r, fill, stroke, lw = 1.5) {
        const c = this.ctx;
        c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2);
        if (fill)   { c.fillStyle   = fill;   c.fill(); }
        if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); }
    }

    ellipse(x, y, rx, ry, fill, stroke, lw = 1.5, rot = 0) {
        const c = this.ctx;
        c.save(); c.translate(x, y); c.rotate(rot);
        c.beginPath(); c.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        if (fill)   { c.fillStyle   = fill;   c.fill(); }
        if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); }
        c.restore();
    }

    radialGrad(x, y, r, stops) {
        const g = this.ctx.createRadialGradient(x, y, 0, x, y, r);
        stops.forEach(s => g.addColorStop(s.t, s.c));
        const c = this.ctx;
        c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2);
        c.fillStyle = g; c.fill();
    }

    text(str, x, y, font = '12px Inter', color = '#fff', align = 'center') {
        const c = this.ctx;
        c.font = font; c.fillStyle = color;
        c.textAlign = align; c.textBaseline = 'middle';
        c.fillText(str, x, y);
    }
}

// ==================== CELL MEMBRANE ====================
class CellMembrane {
    constructor(cx, cy, r) {
        this.cx = cx; this.cy = cy; this.r = r;
        this.opacity = 1; this.pinch = 0; this.wobble = 0;
    }

    // `opacity` param: pass explicit value for ghost (1.0) or undefined to use this.opacity
    draw(R, time, opacity) {
        const eff = (opacity !== undefined) ? opacity : this.opacity;
        R.withAlpha(eff, () => {
            const { cx, cy, r } = this;
            const p = this.pinch;
            this.wobble = time * 0.002;
            if (p < 0.01) { this._whole(R, cx, cy, r); }
            else          { this._pinched(R, cx, cy, r, p); }
        });
    }

    _whole(R, cx, cy, r) {
        const c = R.ctx;
        c.beginPath();
        for (let i = 0; i <= 64; i++) {
            const a  = (i / 64) * Math.PI * 2;
            const wr = r + Math.sin(a * 3 + this.wobble) * 2 + Math.sin(a * 5 + this.wobble * 1.3) * 1.2;
            const x  = cx + Math.cos(a) * wr, y = cy + Math.sin(a) * wr;
            i === 0 ? c.moveTo(x, y) : c.lineTo(x, y);
        }
        c.closePath();
        const grd = c.createRadialGradient(cx, cy, r * 0.7, cx, cy, r + 12);
        grd.addColorStop(0, 'rgba(80,200,180,0)');
        grd.addColorStop(0.6, 'rgba(80,200,180,0.06)');
        grd.addColorStop(1, 'rgba(80,200,180,0.2)');
        c.fillStyle = grd; c.fill();
        c.strokeStyle = PAL.MEMBRANE.withAlpha(0.75).toString();
        c.lineWidth = 3.5;
        c.shadowColor = PAL.MEMBRANE.withAlpha(0.5).toString();
        c.shadowBlur = 10;
        c.stroke();
        c.shadowBlur = 0;
    }

    _pinched(R, cx, cy, r, p) {
        const c   = R.ctx;
        const sep = p * 60, pinch = p * r * 0.85, lr = r * (1 - p * 0.15);
        c.shadowColor = PAL.MEMBRANE.withAlpha(0.4).toString(); c.shadowBlur = 10;
        c.strokeStyle = PAL.MEMBRANE.withAlpha(0.75).toString(); c.lineWidth = 3.5;
        c.beginPath(); c.ellipse(cx, cy - sep, lr, lr - pinch * 0.3, 0, 0, Math.PI * 2); c.stroke();
        c.beginPath(); c.ellipse(cx, cy + sep, lr, lr - pinch * 0.3, 0, 0, Math.PI * 2); c.stroke();
        if (p < 0.9) {
            const waist = (1 - p / 0.9) * r * 0.45;
            c.beginPath();
            c.moveTo(cx - waist, cy - sep * 0.3); c.lineTo(cx - waist, cy + sep * 0.3);
            c.moveTo(cx + waist, cy - sep * 0.3); c.lineTo(cx + waist, cy + sep * 0.3);
            c.lineWidth = 3; c.stroke();
        }
        c.shadowBlur = 0;
    }

    update() {}
}

// ==================== ORGANELLE ====================
class Organelle {
    constructor(name, pos, rx, ry, color, rot = 0) {
        this.name = name; this.pos = pos; this.rx = rx; this.ry = ry;
        this.color = color; this.rot = rot; this.opacity = 0; this.baseY = pos.y;
    }

    draw(R, time, opacity) {
        const eff = (opacity !== undefined) ? opacity : this.opacity;
        R.withAlpha(eff, () => {
            const floatY = Math.sin(time * 0.001 + this.pos.x) * 2.5;
            const x = this.pos.x, y = this.baseY + floatY;
            R.ellipse(x, y, this.rx, this.ry,
                this.color.withAlpha(this.color.a).toString(),
                this.color.withAlpha(0.6).toString(), 1.5, this.rot);
            if (window.showLabels && eff > 0.5)
                R.text(this.name, x, y + this.ry + 14, '10px Inter', 'rgba(255,255,255,0.7)');
        });
    }

    update() {}
}

// ==================== NUCLEUS ====================
class Nucleus {
    constructor(cx, cy) {
        this.cx = cx; this.cy = cy; this.r = CONFIG.nucleus.radius;
        this.opacity = 0; this.breakdownProg = 0; this.reformProg = 0;
        this.isBreakingDown = false; this.isReforming = false;
        this.nucleolusOpacity = 1;
    }

    draw(R, time, opacity, breakdownOverride, reformOverride) {
        const eff = (opacity          !== undefined) ? opacity          : this.opacity;
        const bd  = (breakdownOverride !== undefined) ? breakdownOverride : (this.isBreakingDown ? this.breakdownProg : 0);
        const rf  = (reformOverride    !== undefined) ? reformOverride    : (this.isReforming    ? this.reformProg    : 0);
        const { cx, cy, r } = this;
        const bodyAlpha = eff * (1 - bd);

        if (bodyAlpha > 0.001) {
            R.withAlpha(bodyAlpha, () => {
                R.radialGrad(cx, cy, r + 15, [
                    { t: 0, c: 'rgba(25,40,80,0)' },
                    { t: 0.6, c: 'rgba(25,40,80,0.12)' },
                    { t: 1, c: 'rgba(100,180,220,0.15)' }
                ]);
                R.circle(cx, cy, r, PAL.NUCLEUS_BG.toString(), PAL.NUCLEUS_RM.withAlpha(0.5).toString(), 2.5);
                const c = R.ctx;
                for (let i = 0; i < 12; i++) {
                    const a = (i / 12) * Math.PI * 2 + time * 0.0005;
                    R.circle(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 3, 'rgba(100,180,220,0.5)', null);
                }
                if (this.nucleolusOpacity > 0)
                    R.ellipse(cx, cy, 22, 18,
                        PAL.NUCLEOLUS.withAlpha(this.nucleolusOpacity).toString(),
                        PAL.NUCLEOLUS.withAlpha(this.nucleolusOpacity * 0.6).toString(), 1.5);
            });
        }

        if (rf > 0) {
            const sep = rf * 55, dr = r * (0.7 + rf * 0.3);
            R.withAlpha(eff * rf, () => {
                R.circle(cx, cy - sep, dr, PAL.NUCLEUS_BG.toString(), PAL.NUCLEUS_RM.withAlpha(rf).toString(), 2);
                R.circle(cx, cy + sep, dr, PAL.NUCLEUS_BG.toString(), PAL.NUCLEUS_RM.withAlpha(rf).toString(), 2);
            });
        }
    }

    beginBreakdown() { this.isBreakingDown = true;  this.breakdownProg = 0; }
    beginReform()    { this.isReforming    = true;  this.reformProg    = 0; }

    update(dt) {
        if (this.isBreakingDown && this.breakdownProg < 1)
            this.breakdownProg = Math.min(1, this.breakdownProg + dt * 0.0008);
    }
}

// ==================== CENTROSOME ====================
class Centrosome {
    constructor(cx, cy) {
        this.position = new Vector2D(cx, cy);
        this.target   = new Vector2D(cx, cy);
        this.opacity  = 0; this.rays = 9;
    }

    draw(R, time, position, opacity) {
        const eff = (opacity  !== undefined) ? opacity  : this.opacity;
        const pos = (position !== undefined) ? position : this.position;
        R.withAlpha(eff, () => {
            const { x, y } = pos;
            const c = R.ctx;
            c.strokeStyle = 'rgba(180,200,255,0.25)'; c.lineWidth = 1;
            for (let i = 0; i < this.rays; i++) {
                const a = (i / this.rays) * Math.PI * 2 + time * 0.0008;
                c.beginPath(); c.moveTo(x, y);
                c.lineTo(x + Math.cos(a) * 50, y + Math.sin(a) * 50); c.stroke();
            }
            R.radialGrad(x, y, 12, [
                { t: 0, c: 'rgba(220,230,255,0.9)' },
                { t: 0.5, c: 'rgba(160,180,255,0.7)' },
                { t: 1, c: 'rgba(100,130,220,0)' }
            ]);
            R.circle(x, y, 7, 'rgba(220,230,255,0.95)', 'rgba(180,200,255,0.8)', 1.5);
            if (window.showLabels)
                R.text('Centrosome', x, y - 18, '10px Inter', 'rgba(180,200,255,0.8)');
        });
    }

    update(dt) { this.position = this.position.lerp(this.target, dt * 0.003); }
}

// ==================== SPINDLE ====================
class Spindle {
    constructor() {
        this.opacity = 0;
        this.poleA   = new Vector2D(600, 400);
        this.poleB   = new Vector2D(600, 400);
    }

    draw(R, time, poleA, poleB, opacity) {
        const eff = (opacity !== undefined) ? opacity : this.opacity;
        const pA  = (poleA  !== undefined) ? poleA  : this.poleA;
        const pB  = (poleB  !== undefined) ? poleB  : this.poleB;
        R.withAlpha(eff, () => {
            const ax = pA.x, ay = pA.y, bx = pB.x, by = pB.y;
            const mx = (ax + bx) / 2, my = (ay + by) / 2;
            const c  = R.ctx;
            c.strokeStyle = PAL.SPINDLE.withAlpha(0.22).toString(); c.lineWidth = 1;
            for (let i = 0; i < 10; i++) {
                const off = (i - 5) * 6;
                c.beginPath();
                c.moveTo(ax + off * 0.5, ay);
                c.quadraticCurveTo(mx + off, my, bx + off * 0.5, by);
                c.stroke();
            }
            c.strokeStyle = PAL.SPINDLE_K.withAlpha(0.4).toString(); c.lineWidth = 1.6;
            for (let i = 0; i < 8; i++) {
                const sp = (i - 3.5) * 10;
                c.beginPath(); c.moveTo(ax, ay);
                c.quadraticCurveTo(ax + sp, (ay + my) / 2, mx + sp * 0.6, my); c.stroke();
                c.beginPath(); c.moveTo(bx, by);
                c.quadraticCurveTo(bx + sp, (by + my) / 2, mx + sp * 0.6, my); c.stroke();
            }
        });
    }

    update() {}
}

// ==================== CHROMOSOME ====================
class Chromosome {
    constructor(id, color, pos) {
        this.id = id; this.color = color;
        this.position = pos.clone(); this.target = pos.clone();
        this.opacity = 1; this.size = CONFIG.chromosomes.relaxedSize;
        this.state = 'relaxed'; this.isSister = false; this.deleted = false;
        this.separatedA = null; this.separatedB = null;
        this.seed = Math.random() * Math.PI * 2;
    }

    // Core painter — opacity must be passed explicitly, no defaults
    drawAt(R, time, pos, size, sister, opacity) {
        if (this.deleted) return;
        R.withAlpha(opacity, () => {
            const col = this.color.withAlpha(1);
            if (sister) { this._sister(R, time, pos, size, col); }
            else        { this._single(R, pos, size, col); }
        });
    }

    _sister(R, time, pos, size, col) {
        const wobble = Math.sin(time * 0.002 + this.seed) * (this.state === 'relaxed' ? 2 : 0);
        const px = pos.x + wobble, py = pos.y + wobble;
        R.radialGrad(px, py, size * 1.4, [
            { t: 0, c: col.withAlpha(0.3).toString() }, { t: 1, c: col.withAlpha(0).toString() }
        ]);
        const arm = size * 0.85;
        const c = R.ctx;
        c.strokeStyle = col.toString(); c.lineWidth = 5; c.lineCap = 'round';
        c.beginPath();
        c.moveTo(px - arm * 0.6, py - arm);
        c.quadraticCurveTo(px - arm * 0.7, py, px, py);
        c.quadraticCurveTo(px - arm * 0.7, py, px - arm * 0.6, py + arm);
        c.stroke();
        c.beginPath();
        c.moveTo(px + arm * 0.6, py - arm);
        c.quadraticCurveTo(px + arm * 0.7, py, px, py);
        c.quadraticCurveTo(px + arm * 0.7, py, px + arm * 0.6, py + arm);
        c.stroke();
        R.circle(px, py, 4, col.toString(), col.withAlpha(0.5).toString(), 1);
        if (window.showLabels && this.state === 'aligned')
            R.text(`Chr ${this.id + 1}`, px, py - size - 4, '9px Inter', col.withAlpha(0.8).toString());
    }

    _single(R, pos, size, col) {
        R.radialGrad(pos.x, pos.y, size, [
            { t: 0, c: col.withAlpha(0.25).toString() }, { t: 1, c: col.withAlpha(0).toString() }
        ]);
        const c = R.ctx;
        c.beginPath();
        c.moveTo(pos.x - size * 0.25, pos.y - size * 0.7);
        c.quadraticCurveTo(pos.x - size * 0.3, pos.y, pos.x, pos.y + size * 0.2);
        c.quadraticCurveTo(pos.x + size * 0.3, pos.y, pos.x + size * 0.25, pos.y - size * 0.7);
        c.strokeStyle = col.toString(); c.lineWidth = 4.5; c.lineCap = 'round'; c.stroke();
    }

    // Scene draw
    draw(R, time) {
        if (!this.isActive) return;
        if ((this.state === 'separating' || this.state === 'arrived') && this.separatedA && this.separatedB) {
            this.drawAt(R, time, this.separatedA, this.size * 0.85, false, this.opacity);
            this.drawAt(R, time, this.separatedB, this.size * 0.85, false, this.opacity);
        } else {
            this.drawAt(R, time, this.position, this.size, this.isSister, this.opacity);
        }
    }

    // Ghost draw: condensed sister chromatid form at ghost position
    drawGhost(R, time, ghostPos) {
        if (this.deleted) return;
        this.drawAt(R, time, ghostPos, CONFIG.chromosomes.condensedSize, true, 1);
    }

    condense() { this.isSister = true; this.size = CONFIG.chromosomes.condensedSize; this.state = 'condensed'; }
    align(t)   { this.target = t.clone(); this.state = 'aligned'; }

    separate(tA, tB) {
        this.state      = 'separating';
        this.separatedA = this.position.clone();
        this.separatedB = this.position.clone();
        this.separatedA._target = tA.clone();
        this.separatedB._target = tB.clone();
    }

    update(dt) {
        this.position = this.position.lerp(this.target, dt * 0.004);
        if (this.separatedA && this.separatedA._target) {
            const t = this.separatedA._target;
            this.separatedA = this.separatedA.lerp(t, dt * 0.004);
            this.separatedA._target = t;
        }
        if (this.separatedB && this.separatedB._target) {
            const t = this.separatedB._target;
            this.separatedB = this.separatedB.lerp(t, dt * 0.004);
            this.separatedB._target = t;
        }
    }

    get isActive() { return !this.deleted && this.opacity > 0; }
}

// ==================== PROTEIN ====================
class Protein {
    constructor(pos, vel) {
        this.position = pos; this.velocity = vel;
        this.opacity  = 0.7 + Math.random() * 0.3;
        this.size     = 2 + Math.random() * 2;
        this.hue      = Math.random(); this.isActive = true;
    }

    draw(R) {
        if (!this.isActive) return;
        const col = PAL.PROTEIN.lerp(this.hue, new Color(150, 220, 255)).withAlpha(this.opacity * 0.8);
        R.circle(this.position.x, this.position.y, this.size, col.toString(), null);
    }

    drawGhost(R) {
        const col = PAL.PROTEIN.lerp(this.hue, new Color(150, 220, 255)).withAlpha(0.8);
        R.circle(this.position.x, this.position.y, this.size, col.toString(), null);
    }

    update(dt, bounds) {
        this.velocity.x += (Math.random() - 0.5) * 8;
        this.velocity.y += (Math.random() - 0.5) * 8;
        this.velocity.x *= 0.96; this.velocity.y *= 0.96;
        this.position.x += this.velocity.x * dt * 0.05;
        this.position.y += this.velocity.y * dt * 0.05;
        const dx = this.position.x - bounds.cx, dy = this.position.y - bounds.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > bounds.r - 8) {
            const nx = dx / dist, ny = dy / dist;
            this.position.x = bounds.cx + nx * (bounds.r - 10);
            this.position.y = bounds.cy + ny * (bounds.r - 10);
            this.velocity.x -= 2 * nx * (this.velocity.x * nx + this.velocity.y * ny);
            this.velocity.y -= 2 * ny * (this.velocity.x * nx + this.velocity.y * ny);
        }
    }
}

// ==================== CHROMOSOME SYSTEM ====================
class ChromosomeSystem {
    constructor() {
        this.chromosomes = []; this.proteins = [];
        this.isPaused    = false; this.speedMult = 1;
    }

    spawnChromosomes(cx, cy, count) {
        this.chromosomes = [];
        const r = CONFIG.nucleus.radius * 0.6;
        for (let i = 0; i < count; i++) {
            const a = (i / count) * Math.PI * 2;
            const d = r * (0.4 + Math.random() * 0.5);
            const pos = new Vector2D(cx + Math.cos(a) * d, cy + Math.sin(a) * d);
            this.chromosomes.push(new Chromosome(i, PAL.CHROMO[i % PAL.CHROMO.length], pos));
        }
    }

    spawnProteins(cx, cy, memR, count) {
        this.proteins = [];
        for (let i = 0; i < count; i++) {
            const a   = Math.random() * Math.PI * 2;
            const d   = 20 + Math.random() * (memR - 40);
            const pos = new Vector2D(cx + Math.cos(a) * d, cy + Math.sin(a) * d);
            const vel = new Vector2D((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30);
            this.proteins.push(new Protein(pos, vel));
        }
    }

    // Ghost pass — draws at opacity=1; outer withAlpha handles dimming
    drawGhost(R, time, ghostPos) {
        this.proteins.forEach(p => p.drawGhost(R));
        this.chromosomes.forEach((ch, i) => ch.drawGhost(R, time, ghostPos[i] || ch.position));
    }

    // Scene pass
    drawScene(R, time) {
        this.proteins.forEach(p  => p.draw(R));
        this.chromosomes.forEach(ch => ch.draw(R, time));
    }

    update(dt, bounds) {
        if (this.isPaused) return;
        const e = dt * this.speedMult;
        this.chromosomes.forEach(ch => ch.update(e));
        this.proteins.forEach(p   => p.update(e, bounds));
    }

    pause()       { this.isPaused = true;  }
    resume()      { this.isPaused = false; }
    activeCount() { return this.chromosomes.filter(c => c.isActive).length; }
}

// ==================== CELL DIVISION SYSTEM ====================
class CellDivisionSystem {
    constructor() {
        this.membrane   = null; this.nucleus    = null;
        this.organelles = [];
        this.centA      = null; this.centB      = null;
        this.spindle    = null;
        this.chromSys   = new ChromosomeSystem();
        this.phase      = 'interphase';

        // Final-state positions for ghost (computed once in initialize)
        this._ghostCentA  = null;
        this._ghostCentB  = null;
        this._ghostChromo = [];
    }

    initialize(cx, cy) {
        this.membrane = new CellMembrane(cx, cy, CONFIG.cell.radius);
        this.nucleus  = new Nucleus(cx, cy);
        this.centA    = new Centrosome(cx, cy);
        this.centB    = new Centrosome(cx, cy);
        this.spindle  = new Spindle();

        this._makeOrganelles(cx, cy);
        this.chromSys.spawnChromosomes(cx, cy, CONFIG.chromosomes.count);
        this.chromSys.spawnProteins(cx, cy, CONFIG.cell.radius - 15, CONFIG.proteins.count);

        // Ghost positions — fully migrated poles
        this._ghostCentA = new Vector2D(cx, cy - 150);
        this._ghostCentB = new Vector2D(cx, cy + 150);

        // Ghost chromosomes — metaphase plate spread
        const n = CONFIG.chromosomes.count;
        for (let i = 0; i < n; i++) {
            const spread = (i - (n - 1) / 2) * 18;
            this._ghostChromo.push(new Vector2D(cx + spread, cy));
        }
    }

    _makeOrganelles(cx, cy) {
        this.organelles = [
            new Organelle('ER',         new Vector2D(cx - 70, cy + 40), 28, 14, new Color(100, 170, 220, 0.45), 0.3),
            new Organelle('Golgi',      new Vector2D(cx + 60, cy + 55), 22, 10, new Color(170, 130, 220, 0.5),  0.15),
            new Organelle('Mitochond.', new Vector2D(cx - 55, cy - 50), 18, 9,  new Color(220, 140, 100, 0.55), 0.2),
            new Organelle('Mitochond.', new Vector2D(cx + 45, cy - 40), 16, 8,  new Color(220, 140, 100, 0.55), 0.4),
            new Organelle('Ribosome',   new Vector2D(cx + 30, cy + 30), 6,  6,  new Color(200, 200, 150, 0.6),  0),
            new Organelle('Ribosome',   new Vector2D(cx - 40, cy + 20), 5,  5,  new Color(200, 200, 150, 0.6),  0.5),
            new Organelle('Lysosome',   new Vector2D(cx - 20, cy + 65), 10, 10, new Color(200, 100, 100, 0.5),  0),
        ];
    }

    // ── GHOST PASS ────────────────────────────────────────────────
    // Draws the fully-developed end-state of the whole cell at
    // CONFIG.ghost.opacity — called every frame BEFORE the scene pass.
    drawGhost(mainR, partR, time) {
        const g  = CONFIG.ghost.opacity;
        const cx = CONFIG.cell.centerX, cy = CONFIG.cell.centerY;

        mainR.withAlpha(g, () => {
            mainR.radialGrad(cx, cy, CONFIG.cell.radius, [
                { t: 0,   c: 'rgba(20,40,70,0.35)' },
                { t: 0.7, c: 'rgba(15,30,55,0.25)'  },
                { t: 1,   c: 'rgba(10,20,40,0.1)'   }
            ]);
            this.organelles.forEach(o  => o.draw(mainR, time, 1));
            this.spindle.draw(mainR, time, this._ghostCentA, this._ghostCentB, 1);
            this.nucleus.draw(mainR, time, 1, 0, 0);
            this.centA.draw(mainR, time, this._ghostCentA, 1);
            this.centB.draw(mainR, time, this._ghostCentB, 1);
            this.membrane.draw(mainR, time, 1);
        });

        partR.withAlpha(g, () => {
            this.chromSys.drawGhost(partR, time, this._ghostChromo);
        });
    }

    // ── SCENE PASS ────────────────────────────────────────────────
    // Draws phase-driven layers at their current opacity (0 → 1).
    // Where opacity > ghost level, the element visually "brightens".
    draw(mainR, partR, time) {
        const cx = CONFIG.cell.centerX, cy = CONFIG.cell.centerY;

        mainR.radialGrad(cx, cy, CONFIG.cell.radius, [
            { t: 0,   c: 'rgba(20,40,70,0.35)' },
            { t: 0.7, c: 'rgba(15,30,55,0.25)'  },
            { t: 1,   c: 'rgba(10,20,40,0.1)'   }
        ]);

        this.organelles.forEach(o => o.draw(mainR, time));
        this.spindle.draw(mainR, time);
        this.nucleus.draw(mainR, time);
        this.centA.draw(mainR, time);
        this.centB.draw(mainR, time);
        this.membrane.draw(mainR, time);

        this.chromSys.drawScene(partR, time);
    }

    update(dt) {
        this.centA.update(dt); this.centB.update(dt);
        this.nucleus.update(dt);
        this.chromSys.update(dt, {
            cx: CONFIG.cell.centerX, cy: CONFIG.cell.centerY,
            r:  CONFIG.cell.radius - 15
        });
    }

    // ── Mutations ──
    applyMutation(type) {
        this.chromSys.chromosomes.forEach(ch => { ch.deleted = false; });
        const cx = CONFIG.cell.centerX, cy = CONFIG.cell.centerY;

        if (type === 'nondisjunction') {
            const extras = CONFIG.mutations.nondisjunction.extraChromosomes;
            for (let i = 0; i < extras; i++) {
                const base = this.chromSys.chromosomes[this.chromSys.chromosomes.length - 1 - i];
                const pos  = new Vector2D(cx + (Math.random() - 0.5) * 80, cy + (Math.random() - 0.5) * 80);
                const ch   = new Chromosome(base.id, base.color, pos);
                ch.isSister = base.isSister; ch.size = base.size; ch.state = base.state;
                this.chromSys.chromosomes.push(ch);
            }
        } else if (type === 'polyploidy') {
            const orig = [...this.chromSys.chromosomes];
            orig.forEach(base => {
                const pos = new Vector2D(cx + (Math.random() - 0.5) * 100, cy + (Math.random() - 0.5) * 100);
                const ch  = new Chromosome(base.id, base.color, pos);
                ch.isSister = base.isSister; ch.size = base.size; ch.state = base.state;
                this.chromSys.chromosomes.push(ch);
            });
        } else if (type === 'deletion') {
            const n = CONFIG.mutations.deletion.missingCount;
            for (let i = 0; i < n && i < this.chromSys.chromosomes.length; i++)
                this.chromSys.chromosomes[i].deleted = true;
        }
    }
}

// ==================== PHASE MANAGER ====================
class PhaseManager {
    constructor(sys) {
        this.sys     = sys;
        this.current = null;
        this.phases  = this._define();
    }

    _define() {
        return [
            { name: 'Welcome',     start: 0,    end: 350,  enter: () => this._eWelcome(),     update: p => this._uWelcome(p)     },
            { name: 'Interphase',  start: 350,  end: 1000, enter: () => this._eInterphase(),  update: p => this._uInterphase(p)  },
            { name: 'S-Phase',     start: 1000, end: 1600, enter: () => this._eSPhase(),      update: p => this._uSPhase(p)      },
            { name: 'Prophase',    start: 1600, end: 2300, enter: () => this._eProphase(),    update: p => this._uProphase(p)    },
            { name: 'Metaphase',   start: 2300, end: 3100, enter: () => this._eMetaphase(),   update: p => this._uMetaphase(p)   },
            { name: 'Anaphase',    start: 3100, end: 3900, enter: () => this._eAnaphase(),    update: p => this._uAnaphase(p)    },
            { name: 'Telophase',   start: 3900, end: 4600, enter: () => this._eTelophase(),   update: p => this._uTelophase(p)   },
            { name: 'Cytokinesis', start: 4600, end: 5400, enter: () => this._eCytokinesis(), update: p => this._uCytokinesis(p) },
            { name: 'Complete',    start: 5400, end: 6200, enter: () => this._eComplete(),    update: p => this._uComplete(p)    },
        ];
    }

    tick(scroll) {
        const phase = this.phases.find(ph => scroll >= ph.start && scroll < ph.end);
        if (!phase) return;
        if (this.current !== phase) { phase.enter(); this.current = phase; this.sys.phase = phase.name; }
        const p = Math.max(0, Math.min(1, (scroll - phase.start) / (phase.end - phase.start)));
        phase.update(p);
    }

    // ── Welcome ──────────────────────────────────────────────────
    _eWelcome() {
        setText("Welcome to Cell Division — scroll to watch mitosis unfold");
        const s = this.sys;
        // Everything starts invisible — ghost provides the dim skeleton
        s.nucleus.opacity = 0; s.centA.opacity = 0; s.centB.opacity = 0; s.spindle.opacity = 0;
        s.organelles.forEach(o => o.opacity = 0);
        s.chromSys.chromosomes.forEach(ch => {
            ch.opacity = 0; ch.isSister = false;
            ch.size = CONFIG.chromosomes.relaxedSize; ch.state = 'relaxed'; ch.deleted = false;
        });
        s.chromSys.proteins.forEach(p => p.isActive = false);
        s.membrane.opacity = 0; s.membrane.pinch = 0;
    }
    _uWelcome(p) {
        // First thing to brighten: the cell membrane outline
        this.sys.membrane.opacity = Math.min(1, p * 3);
        this.sys.chromSys.proteins.forEach(pr => { pr.isActive = p > 0.2; });
    }

    // ── Interphase ────────────────────────────────────────────────
    _eInterphase() {
        setText("🧬 <strong>Interphase</strong> — The cell prepares for division. Organelles are active, DNA is relaxed.");
        document.getElementById('info-cell').classList.add('visible');
        this._setDots('interphase');
        const s = this.sys;
        s.membrane.opacity = 1; s.membrane.pinch = 0;
        s.nucleus.isBreakingDown = false; s.nucleus.breakdownProg = 0;
        s.nucleus.isReforming    = false; s.nucleus.reformProg    = 0;
        s.nucleus.nucleolusOpacity = 1;
    }
    _uInterphase(p) {
        const s = this.sys;
        s.nucleus.opacity = Math.min(1, p * 2);
        s.organelles.forEach((o, i) => {
            const start = (i / s.organelles.length) * 0.5;
            if (p > start) o.opacity = Math.min(1, (p - start) * 3);
        });
        s.chromSys.chromosomes.forEach(ch => {
            ch.opacity = Math.min(1, p * 2);
            ch.isSister = false; ch.size = CONFIG.chromosomes.relaxedSize;
            ch.state = 'relaxed'; ch.deleted = false;
        });
        this._stats(p * 100, 0);
    }

    // ── S-Phase ───────────────────────────────────────────────────
    _eSPhase() {
        setText("🔄 <strong>S-Phase</strong> — DNA replication begins. Each chromosome is duplicated into sister chromatids.");
        document.getElementById('info-dna').classList.add('visible');
        this._setDots('interphase');
        const s = this.sys;
        s.nucleus.opacity = 1;
        s.organelles.forEach(o => { if (o.opacity < 0.5) o.opacity = 0.5; });
    }
    _uSPhase(p) {
        this.sys.chromSys.chromosomes.forEach((ch, i) => {
            const s0 = (i / this.sys.chromSys.chromosomes.length) * 0.6;
            if (p > s0) {
                const lp = Math.min(1, (p - s0) / 0.4);
                ch.size = CONFIG.chromosomes.relaxedSize
                    + (CONFIG.chromosomes.condensedSize - CONFIG.chromosomes.relaxedSize) * lp * 0.5;
                ch.isSister = lp > 0.3; ch.opacity = 1;
            }
        });
        this._stats(p * 100, p * 100);
    }

    // ── Prophase ──────────────────────────────────────────────────
    _eProphase() {
        setText("🌀 <strong>Prophase</strong> — Chromosomes condense. Nuclear envelope dissolves. Centrosomes migrate to poles.");
        document.getElementById('info-mitosis').classList.add('visible');
        this._setDots('prophase');
        const s = this.sys;
        s.nucleus.beginBreakdown();
        s.chromSys.chromosomes.forEach(ch => ch.condense());
        s.centA.opacity = 0; s.centB.opacity = 0;
    }
    _uProphase(p) {
        const s = this.sys;
        const cx = CONFIG.cell.centerX, cy = CONFIG.cell.centerY;
        s.nucleus.opacity = 1; s.nucleus.breakdownProg = p;
        s.nucleus.nucleolusOpacity = 1 - p;
        s.centA.opacity = Math.min(1, p * 3); s.centB.opacity = Math.min(1, p * 3);
        const off = 100 + p * 50;
        s.centA.target = new Vector2D(cx, cy - off);
        s.centB.target = new Vector2D(cx, cy + off);
        s.chromSys.chromosomes.forEach((ch, i) => {
            const a = (i / s.chromSys.chromosomes.length) * Math.PI * 2;
            ch.target = new Vector2D(cx + Math.cos(a) * (40 + p * 25), cy + Math.sin(a) * (40 + p * 25));
            ch.opacity = 1;
        });
        this._stats(100, 100);
    }

    // ── Metaphase ─────────────────────────────────────────────────
    _eMetaphase() {
        setText("📍 <strong>Metaphase</strong> — Chromosomes align at the metaphase plate. Spindle fibers attach to centromeres.");
        this._setDots('metaphase');
        const s = this.sys;
        s.spindle.opacity = 0; s.nucleus.opacity = 0;
        s.spindle.poleA = s.centA.position.clone();
        s.spindle.poleB = s.centB.position.clone();
    }
    _uMetaphase(p) {
        const s = this.sys;
        const cx = CONFIG.cell.centerX, cy = CONFIG.cell.centerY;
        s.spindle.opacity = Math.min(1, p * 3);
        s.spindle.poleA = s.centA.position.clone();
        s.spindle.poleB = s.centB.position.clone();
        const active = s.chromSys.chromosomes.filter(c => !c.deleted);
        active.forEach((ch, i) => {
            const sp = (i - (active.length - 1) / 2) * 18;
            ch.target = new Vector2D(cx + sp, cy); ch.state = 'aligned'; ch.opacity = 1;
        });
        this._stats(100, 100);
    }

    // ── Anaphase ──────────────────────────────────────────────────
    _eAnaphase() {
        setText("⬆️⬇️ <strong>Anaphase</strong> — Sister chromatids are pulled to opposite poles by spindle fibers.");
        this._setDots('anaphase');
        const s = this.sys;
        const cx = CONFIG.cell.centerX;
        const ay = s.centA.position.y, by = s.centB.position.y;
        s.chromSys.chromosomes.filter(c => !c.deleted).forEach((ch, i, arr) => {
            const sp = (i - (arr.length - 1) / 2) * 14;
            ch.separate(new Vector2D(cx + sp * 0.6, ay + 30), new Vector2D(cx + sp * 0.6, by - 30));
        });
    }
    _uAnaphase(p) {
        const s = this.sys;
        const cx = CONFIG.cell.centerX;
        const ay = s.centA.position.y, by = s.centB.position.y;
        s.chromSys.chromosomes.filter(c => !c.deleted).forEach((ch, i, arr) => {
            if (ch.separatedA && ch.separatedB) {
                const sp = (i - (arr.length - 1) / 2) * 14;
                ch.separatedA._target = new Vector2D(cx + sp * 0.5, ay + 40 - p * 25);
                ch.separatedB._target = new Vector2D(cx + sp * 0.5, by - 40 + p * 25);
                ch.opacity = 1;
            }
        });
        if (p > 0.6) s.spindle.opacity = 1 - (p - 0.6) / 0.4;
        this._stats(100, 100);
    }

    // ── Telophase ─────────────────────────────────────────────────
    _eTelophase() {
        setText("🔵 <strong>Telophase</strong> — Two new nuclei form around each set of chromosomes. Spindle disappears.");
        this._setDots('telophase');
        const s = this.sys;
        s.spindle.opacity = 0; s.nucleus.opacity = 1;
        s.nucleus.isBreakingDown = false; s.nucleus.breakdownProg = 0;
        s.nucleus.beginReform();
    }
    _uTelophase(p) {
        this.sys.nucleus.reformProg = p;
        this.sys.chromSys.chromosomes.forEach(ch => {
            if (p > 0.5) ch.opacity = Math.max(0, 1 - (p - 0.5) * 1.5);
        });
        this._stats(100, 100);
    }

    // ── Cytokinesis ───────────────────────────────────────────────
    _eCytokinesis() {
        setText("🔀 <strong>Cytokinesis</strong> — The cytoplasm divides. A cleavage furrow pinches the cell into two daughter cells.");
        this._setDots('cytokinesis');
        this._showControls();
    }
    _uCytokinesis(p) {
        this.sys.membrane.pinch = p;
        this.sys.organelles.forEach(o => {
            if (p > 0.3) o.opacity = Math.max(0, 1 - (p - 0.3) / 0.7);
        });
        this._stats(100, 100);
    }

    // ── Complete ──────────────────────────────────────────────────
    _eComplete() {
        setText("✅ <strong>Division Complete!</strong> — Two genetically identical daughter cells. Try a mutation scenario above!");
        this._setDots('cytokinesis');
        this._showControls();
    }
    _uComplete() { this.sys.membrane.pinch = 1; }

    // ── Helpers ───────────────────────────────────────────────────
    _showControls() {
        document.getElementById('control-panel').style.display     = 'block';
        document.getElementById('mutation-selector').style.display = 'flex';
        document.getElementById('info-panels').style.display       = 'block';
        document.getElementById('info-stats').classList.add('visible');
    }

    _setDots(name) {
        const order = ['interphase', 'prophase', 'metaphase', 'anaphase', 'telophase', 'cytokinesis'];
        const idx   = order.indexOf(name);
        document.querySelectorAll('.phase-dot').forEach((d, i) => {
            d.classList.remove('active', 'completed');
            if (i < idx)  d.classList.add('completed');
            if (i === idx) d.classList.add('active');
        });
        document.getElementById('phase-indicator').style.display = 'flex';
    }

    _stats(dna, div) {
        setEl('dna-pct',      Math.round(dna));
        setEl('div-progress', Math.round(div));
        setEl('chromo-count', this.sys.chromSys.activeCount());
    }
}

// ==================== MAIN APP ====================
class CellDivisionApp {
    constructor() {
        this.mainR = null; this.partR = null;
        this.sys   = null; this.pm   = null;
        this.lastTime = 0; this.running = false;
        window.showLabels = true;
    }

    initialize() {
        this.mainR = new CanvasRenderer('mainCanvas',     CONFIG.canvas.width, CONFIG.canvas.height);
        this.partR = new CanvasRenderer('particleCanvas', CONFIG.canvas.width, CONFIG.canvas.height);

        this.sys = new CellDivisionSystem();
        this.sys.initialize(CONFIG.cell.centerX, CONFIG.cell.centerY);

        this.pm = new PhaseManager(this.sys);
        this._setupEvents();

        this.running  = true;
        this.lastTime = performance.now();
        this._frame();
        console.log('[CellDivision] v3 — per-frame ghost active');
    }

    _frame() {
        if (!this.running) return;
        const now = performance.now();
        const dt  = Math.min(now - this.lastTime, 50);
        this.lastTime = now;

        // 1. Clear both canvases
        this.mainR.clear();
        this.partR.clear();

        // 2. Ghost pass — dim skeleton of the fully-developed cell, every frame
        this.sys.drawGhost(this.mainR, this.partR, now);

        // 3. Scene pass — phase-driven elements at current opacity, on top of ghost
        this.sys.draw(this.mainR, this.partR, now);

        // 4. Physics update
        this.sys.update(dt);

        requestAnimationFrame(() => this._frame());
    }

    handleScroll(scroll) { this.pm.tick(scroll); }

    _setupEvents() {
        const lb = document.getElementById('toggle-labels');
        if (lb) lb.addEventListener('click', () => {
            window.showLabels = !window.showLabels;
            lb.textContent = window.showLabels ? 'Hide Labels' : 'Show Labels';
        });

        const fb = document.getElementById('toggle-flow');
        if (fb) fb.addEventListener('click', () => {
            const paused = this.sys.chromSys.isPaused;
            paused ? this.sys.chromSys.resume() : this.sys.chromSys.pause();
            fb.textContent = paused ? 'Pause Animation' : 'Resume Animation';
        });

        const sl = document.getElementById('speed-slider');
        const sv = document.getElementById('speed-value');
        if (sl) sl.addEventListener('input', e => {
            const v = parseFloat(e.target.value);
            this.sys.chromSys.speedMult = v;
            if (sv) sv.textContent = v.toFixed(1) + 'x';
        });

        const mt = document.getElementById('mutation');
        if (mt) mt.addEventListener('change', e => {
            this.sys.applyMutation(e.target.value);
            this._mutationMsg(e.target.value);
        });
    }

    _mutationMsg(type) {
        const el   = document.getElementById('text');
        const msgs = {
            nondisjunction: ['⚠️ <strong>Nondisjunction:</strong> Chromosomes fail to separate — daughter cells get abnormal counts (e.g. trisomy 21 / Down syndrome)', 'rgba(255,94,106,0.25)'],
            polyploidy:     ['⚠️ <strong>Polyploidy:</strong> The entire genome is duplicated — cells end up with 3× or 4× the normal chromosome set', 'rgba(255,183,77,0.25)'],
            deletion:       ['⚠️ <strong>Deletion:</strong> Some chromosomes are lost entirely — critical genetic material is missing', 'rgba(255,204,2,0.25)'],
        };
        if (msgs[type]) { el.innerHTML = msgs[type][0]; el.style.background = msgs[type][1]; }
        else el.style.background = 'rgba(8,14,30,0.85)';
    }

    destroy() { this.running = false; }
}

// ==================== DOM HELPERS ====================
function setText(html) { document.getElementById('text').innerHTML = html; }
function setEl(id, val) { const e = document.getElementById(id); if (e) e.textContent = val; }

// ==================== BOOTSTRAP ====================
let app = null;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (scroll === 0) {
        document.getElementById('scroll').style.display = 'block';
        document.getElementById('arrow').style.display  = 'block';
    }
    if (scroll > 10) {
        document.getElementById('main').style.opacity   = '1';
        document.getElementById('scroll').style.display = 'none';
        document.getElementById('arrow').style.display  = 'none';
    }

    // Initialise on the very first scroll tick
    if (scroll > 0 && !app) {
        app = new CellDivisionApp();
        app.initialize();
    }

    if (app) app.handleScroll(scroll);

    document.getElementById('myBtn').style.display = scroll > 5000 ? 'block' : 'none';
};

window.addEventListener('load', () => {
    setTimeout(() => {
        alert(
            'Welcome to Cell Division!\n\n' +
            'Watch a complete mitosis cycle unfold.\n\n' +
            'Features:\n' +
            '✓ Ghost silhouette visible from first scroll\n' +
            '✓ Full cell with nucleus & organelles\n' +
            '✓ DNA replication (S-Phase)\n' +
            '✓ All 5 mitosis phases animated\n' +
            '✓ Spindle fibers & centrosomes\n' +
            '✓ Cytokinesis membrane pinch\n' +
            '✓ Mutation scenarios (Nondisjunction, Polyploidy, Deletion)\n\n' +
            'Scroll slowly to explore! 🧬'
        );
    }, 300);
});

window.addEventListener('beforeunload', () => { if (app) app.destroy(); });
