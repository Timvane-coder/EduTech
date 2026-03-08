// ====================================================================
// CELL DIVISION VISUALIZATION – MODULAR OOP ARCHITECTURE
// Mirrors: CirculatorySystem → CellDivisionSystem
//          Heart              → Nucleus
//          BloodVessel        → Spindle / Membrane paths
//          BloodCell          → Chromosome / Protein particles
//          ParticleSystem     → ChromosomeSystem
//          SceneManager       → PhaseManager (Interphase→Cytokinesis)
//          Disease scenarios  → Mutation scenarios
// ====================================================================

// ==================== CONFIGURATION ====================
const CONFIG = {
    canvas: {
        width:  1200,
        height: 800
    },
    cell: {
        centerX: 600,
        centerY: 400,
        radius:  220          // resting membrane radius
    },
    nucleus: {
        radius: 90
    },
    chromosomes: {
        count: 6,             // pairs shown (simplified; human=23 pairs)
        condensedSize: 28,
        relaxedSize: 18
    },
    proteins: {
        count: 60,
        size:  3,
        speed: 40             // px / sec
    },
    animation: {
        fps: 60
    },
    mutations: {
        nondisjunction: { extraChromosomes: 2, color: '#ff5e6a' },
        polyploidy:     { chromatinMultiplier: 2 },
        deletion:       { missingCount: 2, color: '#ffcc02' }
    }
};

// ==================== UTILITY CLASSES ====================
// (identical API surface as circulatory Vector2D / Color)

class Vector2D {
    constructor(x = 0, y = 0) { this.x = x; this.y = y; }

    add(v)            { return new Vector2D(this.x + v.x, this.y + v.y); }
    subtract(v)       { return new Vector2D(this.x - v.x, this.y - v.y); }
    multiply(s)       { return new Vector2D(this.x * s,   this.y * s); }
    magnitude()       { return Math.sqrt(this.x * this.x + this.y * this.y); }
    normalize()       { const m = this.magnitude(); return m > 0 ? this.multiply(1/m) : new Vector2D(); }
    distance(v)       { return Math.sqrt((this.x-v.x)**2 + (this.y-v.y)**2); }
    lerp(v, t)        { return new Vector2D(this.x+(v.x-this.x)*t, this.y+(v.y-this.y)*t); }
    clone()           { return new Vector2D(this.x, this.y); }
    static random(minX, maxX, minY, maxY) {
        return new Vector2D(
            minX + Math.random()*(maxX-minX),
            minY + Math.random()*(maxY-minY)
        );
    }
}

class Color {
    constructor(r, g, b, a = 1) { this.r = r; this.g = g; this.b = b; this.a = a; }
    toString() { return `rgba(${this.r|0},${this.g|0},${this.b|0},${this.a})`; }

    static fromHex(hex) {
        const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return m ? new Color(+('0x'+m[1]), +('0x'+m[2]), +('0x'+m[3])) : new Color(255,255,255);
    }

    lerp(target, t) {
        return new Color(
            this.r + (target.r - this.r)*t,
            this.g + (target.g - this.g)*t,
            this.b + (target.b - this.b)*t,
            this.a + (target.a - this.a)*t
        );
    }

    withAlpha(a) { return new Color(this.r, this.g, this.b, a); }
}

// Palette constants
const PAL = {
    MEMBRANE:    new Color(80, 200, 180, 0.7),
    CYTOPLASM:   new Color(30, 55, 100, 0.15),
    NUCLEUS_BG:  new Color(25, 40, 80,  0.55),
    NUCLEUS_RM:  new Color(100,180,220, 0.5),
    NUCLEOLUS:   new Color(160,100,200, 0.8),
    SPINDLE:     new Color(180,200,255, 0.5),
    SPINDLE_ATT: new Color(200,220,255, 0.75),
    PROTEIN:     new Color(255,200,80,  0.7),
    CHROMO: [
        new Color(255, 94, 106),   // red
        new Color(79, 195, 247),   // blue
        new Color(255, 204, 2),    // gold
        new Color(240, 98, 146),   // pink
        new Color(105,240,174),    // lime
        new Color(255,183, 77)     // amber
    ]
};

// ==================== CANVAS RENDERER ====================
// (same abstraction layer as circulatory CanvasRenderer)

class CanvasRenderer {
    constructor(canvasId, w, h) {
        this.canvas = document.getElementById(canvasId);
        this.ctx    = this.canvas.getContext('2d');
        this.width  = w;
        this.height = h;
        this.canvas.width  = w;
        this.canvas.height = h;
    }

    clear() { this.ctx.clearRect(0, 0, this.width, this.height); }

    // ── primitives ──
    drawCircle(x, y, r, fill, stroke, lw = 1.5) {
        const c = this.ctx;
        c.beginPath();
        c.arc(x, y, r, 0, Math.PI*2);
        if (fill)   { c.fillStyle = fill;   c.fill(); }
        if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); }
    }

    drawEllipse(x, y, rx, ry, fill, stroke, lw = 1.5, rotation = 0) {
        const c = this.ctx;
        c.save();
        c.translate(x, y);
        c.rotate(rotation);
        c.beginPath();
        c.ellipse(0, 0, rx, ry, 0, 0, Math.PI*2);
        if (fill)   { c.fillStyle = fill;   c.fill(); }
        if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); }
        c.restore();
    }

    drawPath(points, stroke, lw = 2, closed = false) {
        if (points.length < 2) return;
        const c = this.ctx;
        c.beginPath();
        c.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) c.lineTo(points[i].x, points[i].y);
        if (closed) c.closePath();
        c.strokeStyle = stroke;
        c.lineWidth   = lw;
        c.stroke();
    }

    drawCurve(pts, stroke, lw = 2) {
        // Quadratic multi-segment curve
        if (pts.length < 2) return;
        const c = this.ctx;
        c.beginPath();
        c.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length - 1; i++) {
            const mx = (pts[i].x + pts[i+1].x) * 0.5;
            const my = (pts[i].y + pts[i+1].y) * 0.5;
            c.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
        }
        const last = pts[pts.length-1];
        c.lineTo(last.x, last.y);
        c.strokeStyle = stroke;
        c.lineWidth   = lw;
        c.stroke();
    }

    fillPolygon(points, fill) {
        if (points.length < 3) return;
        const c = this.ctx;
        c.beginPath();
        c.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) c.lineTo(points[i].x, points[i].y);
        c.closePath();
        c.fillStyle = fill;
        c.fill();
    }

    drawText(text, x, y, font = '13px Inter', color = '#fff', align = 'center') {
        const c = this.ctx;
        c.font = font;
        c.fillStyle = color;
        c.textAlign = align;
        c.textBaseline = 'middle';
        c.fillText(text, x, y);
    }

    drawRadialGradient(x, y, r, stops) {
        const g = this.ctx.createRadialGradient(x, y, 0, x, y, r);
        stops.forEach(s => g.addColorStop(s.t, s.c));
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, Math.PI*2);
        this.ctx.fillStyle = g;
        this.ctx.fill();
    }

    drawLinearGradientRect(x, y, w, h, angle, stops) {
        const c = this.ctx;
        c.save();
        c.translate(x, y);
        c.rotate(angle);
        const g = c.createLinearGradient(-w/2, 0, w/2, 0);
        stops.forEach(s => g.addColorStop(s.t, s.c));
        c.fillStyle = g;
        c.fillRect(-w/2, -h/2, w, h);
        c.restore();
    }

    // convenience: shadow + glow helper
    withGlow(color, blur, fn) {
        const c = this.ctx;
        c.save();
        c.shadowColor = color;
        c.shadowBlur  = blur;
        fn(c);
        c.restore();
    }
}

// ==================== ANATOMICAL STRUCTURES ====================
// Each mirrors a class from the circulatory system (opacity-driven fade,
// draw() / update(dt) contract, labels gated by window.showLabels).

// ── CellMembrane ──────────────────────────────────────────────────
// Mirrors: BloodVessel (path-based, opacity, label)
// Animates: pinch during cytokinesis
class CellMembrane {
    constructor(cx, cy, radius) {
        this.center = new Vector2D(cx, cy);
        this.radius = radius;
        this.opacity = 1;
        this.pinchProgress = 0;   // 0 → 1 during cytokinesis
        this.wobble = 0;          // time-driven micro-wobble
    }

    draw(renderer, time) {
        if (this.opacity <= 0) return;
        this.wobble = time * 0.002;

        const cx = this.center.x, cy = this.center.y;
        const r  = this.radius;
        const c  = renderer.ctx;
        const p  = this.pinchProgress;

        c.save();
        c.globalAlpha = this.opacity;

        if (p < 0.01) {
            // ── intact circle with organic wobble ──
            c.beginPath();
            const segments = 64;
            for (let i = 0; i <= segments; i++) {
                const a  = (i / segments) * Math.PI * 2;
                const wr = r + Math.sin(a*3 + this.wobble)*2 + Math.sin(a*5 + this.wobble*1.3)*1.2;
                const x  = cx + Math.cos(a) * wr;
                const y  = cy + Math.sin(a) * wr;
                i === 0 ? c.moveTo(x, y) : c.lineTo(x, y);
            }
            c.closePath();

            // fill glow
            const grd = c.createRadialGradient(cx, cy, r*0.7, cx, cy, r+12);
            grd.addColorStop(0, 'rgba(80,200,180,0)');
            grd.addColorStop(0.6,'rgba(80,200,180,0.06)');
            grd.addColorStop(1, 'rgba(80,200,180,0.2)');
            c.fillStyle = grd;
            c.fill();

            // stroke
            c.strokeStyle = PAL.MEMBRANE.withAlpha(0.75).toString();
            c.lineWidth   = 3.5;
            c.shadowColor = PAL.MEMBRANE.withAlpha(0.5).toString();
            c.shadowBlur  = 10;
            c.stroke();

        } else {
            // ── pinching (figure-8 shape) ──
            this.drawPinched(c, cx, cy, r, p);
        }

        c.restore();
    }

    drawPinched(c, cx, cy, r, p) {
        // Two lobes pulling apart vertically
        const sep    = p * 60;          // separation distance
        const pinch  = p * r * 0.85;    // how much the waist narrows
        const lr     = r * (1 - p*0.15); // each lobe radius shrinks slightly

        // top lobe
        c.beginPath();
        c.ellipse(cx, cy - sep, lr, lr - pinch*0.3, 0, 0, Math.PI*2);
        c.strokeStyle = PAL.MEMBRANE.withAlpha(0.75).toString();
        c.lineWidth   = 3.5;
        c.shadowColor = PAL.MEMBRANE.withAlpha(0.4).toString();
        c.shadowBlur  = 10;
        c.stroke();

        // bottom lobe
        c.beginPath();
        c.ellipse(cx, cy + sep, lr, lr - pinch*0.3, 0, 0, Math.PI*2);
        c.stroke();

        // connecting waist (narrows to 0)
        if (p < 0.9) {
            const waist = (1 - p/0.9) * r * 0.45;
            c.beginPath();
            c.moveTo(cx - waist, cy - sep * 0.3);
            c.lineTo(cx - waist, cy + sep * 0.3);
            c.moveTo(cx + waist, cy - sep * 0.3);
            c.lineTo(cx + waist, cy + sep * 0.3);
            c.lineWidth = 3;
            c.stroke();
        }
    }

    update() { /* state driven externally by phase progress */ }
}

// ── Organelle ─────────────────────────────────────────────────────
// Mirrors: Organ  (name, position, size, color, opacity, label)
class Organelle {
    constructor(name, position, rx, ry, color, rotation = 0) {
        this.name     = name;
        this.position = position;
        this.rx       = rx;
        this.ry       = ry;
        this.color    = color;       // Color instance
        this.rotation = rotation;
        this.opacity  = 0;           // fades in with scroll
        this.baseY    = position.y;  // for gentle float
    }

    draw(renderer, time) {
        if (this.opacity <= 0) return;
        // gentle vertical float
        const floatY = Math.sin(time * 0.001 + this.position.x) * 2.5;
        const x = this.position.x;
        const y = this.baseY + floatY;
        const col = this.color.withAlpha(this.opacity * this.color.a);

        renderer.drawEllipse(x, y, this.rx, this.ry, col.toString(),
            this.color.withAlpha(this.opacity * 0.6).toString(), 1.5, this.rotation);

        if (window.showLabels && this.opacity > 0.5) {
            renderer.drawText(this.name, x, y + this.ry + 14,
                '10px Inter', `rgba(255,255,255,${this.opacity*0.7})`);
        }
    }

    update() {}
}

// ── Nucleus ───────────────────────────────────────────────────────
// Mirrors: Heart  (contains sub-structures, contracts, orchestrates)
class Nucleus {
    constructor(cx, cy) {
        this.center = new Vector2D(cx, cy);
        this.radius = CONFIG.nucleus.radius;
        this.opacity = 0;
        this.isBreakingDown = false;     // prophase: envelope dissolves
        this.breakdownProg  = 0;         // 0→1
        this.isReforming    = false;     // telophase: two nuclei re-form
        this.reformProg     = 0;
        this.nucleolus = null;           // inner structure
    }

    createNucleolus() {
        this.nucleolus = {
            position: this.center.clone(),
            rx: 22, ry: 18,
            opacity: 1
        };
    }

    draw(renderer, time) {
        if (this.opacity <= 0 && !this.isReforming) return;

        const cx = this.center.x, cy = this.center.y;
        const c  = renderer.ctx;
        const effOpacity = this.isBreakingDown
            ? this.opacity * (1 - this.breakdownProg)
            : this.opacity;

        if (effOpacity > 0.01) {
            c.save();
            c.globalAlpha = effOpacity;

            // nuclear envelope glow
            renderer.drawRadialGradient(cx, cy, this.radius + 15, [
                { t: 0,   c: 'rgba(25,40,80,0)' },
                { t: 0.6, c: 'rgba(25,40,80,0.12)' },
                { t: 1,   c: 'rgba(100,180,220,0.15)' }
            ]);

            // nuclear envelope
            renderer.drawCircle(cx, cy, this.radius,
                PAL.NUCLEUS_BG.toString(),
                PAL.NUCLEUS_RM.withAlpha(effOpacity).toString(), 2.5);

            // nuclear pores (small dots on envelope)
            for (let i = 0; i < 12; i++) {
                const a = (i / 12) * Math.PI * 2 + time * 0.0005;
                renderer.drawCircle(
                    cx + Math.cos(a) * this.radius,
                    cy + Math.sin(a) * this.radius,
                    3, 'rgba(100,180,220,0.5)', null);
            }

            // nucleolus
            if (this.nucleolus && this.nucleolus.opacity > 0) {
                renderer.drawEllipse(cx, cy,
                    this.nucleolus.rx, this.nucleolus.ry,
                    PAL.NUCLEOLUS.withAlpha(this.nucleolus.opacity).toString(),
                    PAL.NUCLEOLUS.withAlpha(this.nucleolus.opacity * 0.6).toString(), 1.5);
            }

            c.restore();
        }

        // ── telophase: two daughter nuclei ──
        if (this.isReforming) {
            const sep = this.reformProg * 55;
            const a   = this.reformProg;
            const r   = this.radius * (0.7 + a * 0.3);

            // top nucleus
            c.save();
            c.globalAlpha = a;
            renderer.drawCircle(cx, cy - sep, r,
                PAL.NUCLEUS_BG.toString(),
                PAL.NUCLEUS_RM.withAlpha(a).toString(), 2);
            // bottom nucleus
            renderer.drawCircle(cx, cy + sep, r,
                PAL.NUCLEUS_BG.toString(),
                PAL.NUCLEUS_RM.withAlpha(a).toString(), 2);
            c.restore();
        }
    }

    beginBreakdown() { this.isBreakingDown = true; this.breakdownProg = 0; }
    beginReform()    { this.isReforming    = true; this.reformProg    = 0; }

    update(dt) {
        if (this.isBreakingDown && this.breakdownProg < 1) {
            this.breakdownProg = Math.min(1, this.breakdownProg + dt * 0.0008);
        }
    }
}

// ── Centrosome ────────────────────────────────────────────────────
// Mirrors: Organ  (positioned structure with label)
// Two centrosomes migrate to opposite poles during prophase
class Centrosome {
    constructor(cx, cy) {
        this.center  = new Vector2D(cx, cy);
        this.target  = new Vector2D(cx, cy);
        this.opacity = 0;
        this.position = new Vector2D(cx, cy);   // current animated pos
        // aster rays
        this.rays = 9;
    }

    draw(renderer, time) {
        if (this.opacity <= 0) return;
        const x = this.position.x, y = this.position.y;
        const c = renderer.ctx;

        c.save();
        c.globalAlpha = this.opacity;

        // aster rays (radiating lines)
        c.strokeStyle = 'rgba(180,200,255,0.25)';
        c.lineWidth   = 1;
        for (let i = 0; i < this.rays; i++) {
            const a = (i / this.rays) * Math.PI * 2 + time * 0.0008;
            c.beginPath();
            c.moveTo(x, y);
            c.lineTo(x + Math.cos(a)*50, y + Math.sin(a)*50);
            c.stroke();
        }

        // core body
        renderer.drawRadialGradient(x, y, 12, [
            { t: 0, c: 'rgba(220,230,255,0.9)' },
            { t: 0.5, c: 'rgba(160,180,255,0.7)' },
            { t: 1, c: 'rgba(100,130,220,0)' }
        ]);
        renderer.drawCircle(x, y, 7, 'rgba(220,230,255,0.95)', 'rgba(180,200,255,0.8)', 1.5);

        if (window.showLabels) {
            renderer.drawText('Centrosome', x, y - 18, '10px Inter', 'rgba(180,200,255,0.8)');
        }

        c.restore();
    }

    update(dt) {
        // lerp toward target
        this.position = this.position.lerp(this.target, dt * 0.003);
    }
}

// ── Spindle ───────────────────────────────────────────────────────
// Mirrors: BloodVessel (path-based structure, opacity, label)
// Drawn as bezier curves from centrosome → metaphase plate → other centrosome
class Spindle {
    constructor() {
        this.opacity  = 0;
        this.poleA    = new Vector2D(600, 400); // top centrosome pos
        this.poleB    = new Vector2D(600, 400); // bottom centrosome pos
        this.fiberCount = 16;
        this.attachedChromosomes = []; // indices that have kinetochore attachment
    }

    draw(renderer, time) {
        if (this.opacity <= 0) return;
        const c = renderer.ctx;
        c.save();
        c.globalAlpha = this.opacity;

        const ax = this.poleA.x, ay = this.poleA.y;
        const bx = this.poleB.x, by = this.poleB.y;
        const mx = (ax+bx)/2,   my = (ay+by)/2;

        // non-kinetochore (interpolar) fibers – faint, cross at midpoint
        c.strokeStyle = PAL.SPINDLE.withAlpha(0.22).toString();
        c.lineWidth   = 1;
        for (let i = 0; i < 10; i++) {
            const offset = (i - 5) * 6;
            c.beginPath();
            c.moveTo(ax + offset*0.5, ay);
            c.quadraticCurveTo(mx + offset, my, bx + offset*0.5, by);
            c.stroke();
        }

        // kinetochore fibers – brighter, attach to metaphase plate area
        c.strokeStyle = PAL.SPINDLE_ATT.withAlpha(0.4).toString();
        c.lineWidth   = 1.6;
        const kCount  = 8;
        for (let i = 0; i < kCount; i++) {
            const spread = (i - kCount/2 + 0.5) * 10;
            // from pole A down to mid
            c.beginPath();
            c.moveTo(ax, ay);
            c.quadraticCurveTo(ax + spread, (ay+my)/2, mx + spread*0.6, my);
            c.stroke();
            // from pole B up to mid
            c.beginPath();
            c.moveTo(bx, by);
            c.quadraticCurveTo(bx + spread, (by+my)/2, mx + spread*0.6, my);
            c.stroke();
        }

        c.restore();
    }

    update() {}
}

// ── Chromosome ────────────────────────────────────────────────────
// Mirrors: BloodCell  (particle with position, pathProgress, type)
// States: relaxed → condensed → aligned → separating → arrived
class Chromosome {
    constructor(id, color, position) {
        this.id       = id;
        this.color    = color;             // Color
        this.position = position.clone();  // current
        this.target   = position.clone();  // where it's heading
        this.opacity  = 1;
        this.size     = CONFIG.chromosomes.relaxedSize;
        this.state    = 'relaxed';         // relaxed|condensed|aligned|separating|arrived
        this.isCondensed = false;
        this.isSister    = false;          // after replication: drawn as X shape
        this.separatedA  = null;           // after anaphase split: two single chromatids
        this.separatedB  = null;
        this.deleted     = false;          // mutation: deletion
        // wobble seed
        this.seed = Math.random() * Math.PI * 2;
    }

    draw(renderer, time) {
        if (!this.isActive || this.deleted) return;
        if (this.opacity <= 0) return;

        const x = this.position.x;
        const y = this.position.y;
        const c = renderer.ctx;
        const s = this.size;
        const col = this.color.withAlpha(this.opacity);

        c.save();
        c.globalAlpha = this.opacity;

        if (this.state === 'separating' || this.state === 'arrived') {
            // draw two individual chromatids moving apart
            if (this.separatedA && this.separatedB) {
                this._drawSingleChromatid(renderer, this.separatedA, s*0.85);
                this._drawSingleChromatid(renderer, this.separatedB, s*0.85);
            }
        } else if (this.isSister) {
            // ── X-shape sister chromatids joined at centromere ──
            const wobble = Math.sin(time*0.002 + this.seed) * (this.state === 'relaxed' ? 2 : 0);
            const px = x + wobble, py = y + wobble;

            // glow
            renderer.drawRadialGradient(px, py, s*1.4, [
                { t: 0, c: col.withAlpha(0.3).toString() },
                { t: 1, c: col.withAlpha(0).toString() }
            ]);

            // two arms
            const arm = s * 0.85;
            // left arm
            c.beginPath();
            c.moveTo(px - arm*0.6, py - arm);
            c.quadraticCurveTo(px - arm*0.7, py, px, py);
            c.quadraticCurveTo(px - arm*0.7, py, px - arm*0.6, py + arm);
            c.strokeStyle = col.toString();
            c.lineWidth   = 5;
            c.lineCap     = 'round';
            c.stroke();
            // right arm
            c.beginPath();
            c.moveTo(px + arm*0.6, py - arm);
            c.quadraticCurveTo(px + arm*0.7, py, px, py);
            c.quadraticCurveTo(px + arm*0.7, py, px + arm*0.6, py + arm);
            c.stroke();

            // centromere knot
            renderer.drawCircle(px, py, 4, col.toString(), col.withAlpha(0.5).toString(), 1);

            // label
            if (window.showLabels && this.state === 'aligned') {
                renderer.drawText(`Chr ${this.id+1}`, px, py - s - 4, '9px Inter',
                    col.withAlpha(0.8).toString());
            }
        } else {
            // single chromosome (pre-replication or after separation)
            this._drawSingleChromatid(renderer, this.position, s);
        }

        c.restore();
    }

    _drawSingleChromatid(renderer, pos, size) {
        const c  = renderer.ctx;
        const col = this.color.withAlpha(this.opacity);

        // glow
        renderer.drawRadialGradient(pos.x, pos.y, size, [
            { t: 0, c: col.withAlpha(0.25).toString() },
            { t: 1, c: col.withAlpha(0).toString()    }
        ]);

        // J-shape single chromatid
        c.beginPath();
        c.moveTo(pos.x - size*0.25, pos.y - size*0.7);
        c.quadraticCurveTo(pos.x - size*0.3, pos.y, pos.x, pos.y + size*0.2);
        c.quadraticCurveTo(pos.x + size*0.3, pos.y, pos.x + size*0.25, pos.y - size*0.7);
        c.strokeStyle = col.toString();
        c.lineWidth   = 4.5;
        c.lineCap     = 'round';
        c.stroke();
    }

    condense() {
        this.isCondensed = true;
        this.isSister    = true;
        this.size        = CONFIG.chromosomes.condensedSize;
        this.state       = 'condensed';
    }

    align(target) {
        this.target = target.clone();
        this.state  = 'aligned';
    }

    separate(targetA, targetB) {
        this.state      = 'separating';
        this.separatedA = this.position.clone();
        this.separatedB = this.position.clone();
        this.separatedA._target = targetA.clone();
        this.separatedB._target = targetB.clone();
    }

    update(dt) {
        // lerp main position toward target
        this.position = this.position.lerp(this.target, dt * 0.004);

        // lerp separated chromatids
        if (this.separatedA && this.separatedA._target) {
            this.separatedA = this.separatedA.lerp(this.separatedA._target, dt * 0.004);
            this.separatedA._target = this.separatedA._target; // keep ref
        }
        if (this.separatedB && this.separatedB._target) {
            this.separatedB = this.separatedB.lerp(this.separatedB._target, dt * 0.004);
            this.separatedB._target = this.separatedB._target;
        }
    }

    get isActive() { return !this.deleted && this.opacity > 0; }
}

// ── Protein (particle) ────────────────────────────────────────────
// Mirrors: BloodCell  (floating particle in cytoplasm)
class Protein {
    constructor(position, velocity) {
        this.position = position;
        this.velocity = velocity;
        this.opacity  = 0.7 + Math.random()*0.3;
        this.size     = 2 + Math.random()*2;
        this.hue      = Math.random(); // lerp between two tones
        this.isActive = true;
        this.seed     = Math.random() * Math.PI * 2;
    }

    draw(renderer, time) {
        if (!this.isActive) return;
        const x = this.position.x;
        const y = this.position.y;
        const col = PAL.PROTEIN.lerp(new Color(150,220,255), this.hue).withAlpha(this.opacity * 0.8);

        renderer.drawCircle(x, y, this.size, col.toString(), null);
    }

    update(dt, bounds) {
        // Brownian-ish motion
        this.velocity.x += (Math.random()-0.5) * 8;
        this.velocity.y += (Math.random()-0.5) * 8;
        // damping
        this.velocity.x *= 0.96;
        this.velocity.y *= 0.96;

        this.position.x += this.velocity.x * dt * 0.05;
        this.position.y += this.velocity.y * dt * 0.05;

        // bounce off membrane bounds (circle)
        const dx = this.position.x - bounds.cx;
        const dy = this.position.y - bounds.cy;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist > bounds.r - 8) {
            const nx = dx/dist, ny = dy/dist;
            this.position.x = bounds.cx + nx*(bounds.r - 10);
            this.position.y = bounds.cy + ny*(bounds.r - 10);
            this.velocity.x -= 2*nx * (this.velocity.x*nx + this.velocity.y*ny);
            this.velocity.y -= 2*ny * (this.velocity.x*nx + this.velocity.y*ny);
        }
    }
}

// ==================== CHROMOSOME SYSTEM ====================
// Mirrors: ParticleSystem (manages collection, spawn, pause, draw)

class ChromosomeSystem {
    constructor() {
        this.chromosomes = [];
        this.proteins    = [];
        this.isPaused    = false;
        this.speedMult   = 1.0;
    }

    spawnChromosomes(cx, cy, count) {
        this.chromosomes = [];
        const r = CONFIG.nucleus.radius * 0.6;
        for (let i = 0; i < count; i++) {
            const angle  = (i / count) * Math.PI * 2;
            const dist   = r * (0.4 + Math.random()*0.5);
            const pos    = new Vector2D(cx + Math.cos(angle)*dist, cy + Math.sin(angle)*dist);
            const color  = PAL.CHROMO[i % PAL.CHROMO.length];
            this.chromosomes.push(new Chromosome(i, color, pos));
        }
    }

    spawnProteins(cx, cy, membraneR, count) {
        this.proteins = [];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist  = 20 + Math.random() * (membraneR - 40);
            const pos   = new Vector2D(cx + Math.cos(angle)*dist, cy + Math.sin(angle)*dist);
            const vel   = new Vector2D((Math.random()-0.5)*30, (Math.random()-0.5)*30);
            this.proteins.push(new Protein(pos, vel));
        }
    }

    draw(renderer, time) {
        // proteins first (background layer)
        this.proteins.forEach(p => p.draw(renderer, time));
        // chromosomes on top
        this.chromosomes.forEach(ch => ch.draw(renderer, time));
    }

    update(dt, bounds) {
        if (this.isPaused) return;
        const effDt = dt * this.speedMult;
        this.chromosomes.forEach(ch => ch.update(effDt));
        this.proteins.forEach(p  => p.update(effDt, bounds));
    }

    pause()  { this.isPaused = true;  }
    resume() { this.isPaused = false; }

    getActiveCount() { return this.chromosomes.filter(c => c.isActive).length; }
}

// ==================== CELL DIVISION SYSTEM ====================
// Mirrors: CirculatorySystem (orchestrator holding all sub-systems)

class CellDivisionSystem {
    constructor() {
        this.membrane      = null;
        this.nucleus       = null;
        this.organelles    = [];
        this.centrosomeA   = null;  // migrates "up"
        this.centrosomeB   = null;  // migrates "down"
        this.spindle       = null;
        this.chromosomeSystem = new ChromosomeSystem();
        this.currentMutation  = 'normal';
        this.phase            = 'interphase';
    }

    initialize(cx, cy) {
        this.membrane    = new CellMembrane(cx, cy, CONFIG.cell.radius);
        this.nucleus     = new Nucleus(cx, cy);
        this.nucleus.createNucleolus();
        this.centrosomeA = new Centrosome(cx, cy);
        this.centrosomeB = new Centrosome(cx, cy);
        this.spindle     = new Spindle();

        this.createOrganelles(cx, cy);
        this.chromosomeSystem.spawnChromosomes(cx, cy, CONFIG.chromosomes.count);
        this.chromosomeSystem.spawnProteins(cx, cy, CONFIG.cell.radius - 15, CONFIG.proteins.count);
    }

    createOrganelles(cx, cy) {
        this.organelles = [
            new Organelle('ER',          new Vector2D(cx-70, cy+40),  28, 14, new Color(100,170,220,0.45), 0.3),
            new Organelle('Golgi',       new Vector2D(cx+60, cy+55),  22, 10, new Color(170,130,220,0.5),  0.15),
            new Organelle('Mitochond.',  new Vector2D(cx-55, cy-50),  18, 9,  new Color(220,140,100,0.55), 0.2),
            new Organelle('Mitochond.',  new Vector2D(cx+45, cy-40),  16, 8,  new Color(220,140,100,0.55), 0.4),
            new Organelle('Ribosome',    new Vector2D(cx+30, cy+30),  6,  6,  new Color(200,200,150,0.6),  0),
            new Organelle('Ribosome',    new Vector2D(cx-40, cy+20),  5,  5,  new Color(200,200,150,0.6),  0.5),
            new Organelle('Lysosome',    new Vector2D(cx-20, cy+65),  10, 10, new Color(200,100,100,0.5),  0),
        ];
    }

    // ── mutation scenarios (mirrors applyScenario) ──
    applyMutation(type) {
        this.currentMutation = type;
        // reset chromosomes first
        this.chromosomeSystem.chromosomes.forEach(ch => { ch.deleted = false; });

        switch(type) {
            case 'nondisjunction': this.applyNondisjunction(); break;
            case 'polyploidy':     this.applyPolyploidy();     break;
            case 'deletion':       this.applyDeletion();       break;
            default:               break; // normal – no changes
        }
    }

    applyNondisjunction() {
        // Add extra chromosomes (simulated: duplicate last two colours)
        const cx = CONFIG.cell.centerX, cy = CONFIG.cell.centerY;
        const extras = CONFIG.mutations.nondisjunction.extraChromosomes;
        for (let i = 0; i < extras; i++) {
            const baseIdx = this.chromosomeSystem.chromosomes.length - 1 - i;
            const base    = this.chromosomeSystem.chromosomes[baseIdx];
            const pos     = new Vector2D(cx + (Math.random()-0.5)*80, cy + (Math.random()-0.5)*80);
            const ch = new Chromosome(baseIdx, PAL.CHROMO[baseIdx % PAL.CHROMO.length], pos);
            ch.isSister = base.isSister;
            ch.size     = base.size;
            ch.state    = base.state;
            this.chromosomeSystem.chromosomes.push(ch);
        }
    }

    applyPolyploidy() {
        // Duplicate entire set
        const cx = CONFIG.cell.centerX, cy = CONFIG.cell.centerY;
        const origCount = this.chromosomeSystem.chromosomes.length;
        for (let i = 0; i < origCount; i++) {
            const base = this.chromosomeSystem.chromosomes[i];
            const pos  = new Vector2D(cx + (Math.random()-0.5)*100, cy + (Math.random()-0.5)*100);
            const ch   = new Chromosome(i, base.color, pos);
            ch.isSister  = base.isSister;
            ch.size      = base.size;
            ch.state     = base.state;
            this.chromosomeSystem.chromosomes.push(ch);
        }
    }

    applyDeletion() {
        // Mark some chromosomes as deleted
        const count = CONFIG.mutations.deletion.missingCount;
        for (let i = 0; i < count && i < this.chromosomeSystem.chromosomes.length; i++) {
            this.chromosomeSystem.chromosomes[i].deleted = true;
        }
    }

    // ── main update / draw ──
    update(dt) {
        this.centrosomeA.update(dt);
        this.centrosomeB.update(dt);
        this.nucleus.update(dt);
        this.chromosomeSystem.update(dt, {
            cx: CONFIG.cell.centerX,
            cy: CONFIG.cell.centerY,
            r:  CONFIG.cell.radius - 15
        });
    }

    draw(mainRenderer, particleRenderer, time) {
        const cx = CONFIG.cell.centerX, cy = CONFIG.cell.centerY;

        // 1. Cytoplasm fill (soft radial gradient)
        mainRenderer.drawRadialGradient(cx, cy, CONFIG.cell.radius, [
            { t: 0,   c: 'rgba(20,40,70,0.35)' },
            { t: 0.7, c: 'rgba(15,30,55,0.25)' },
            { t: 1,   c: 'rgba(10,20,40,0.1)'  }
        ]);

        // 2. Organelles (main canvas, behind everything)
        this.organelles.forEach(org => org.draw(mainRenderer, time));

        // 3. Spindle (main canvas)
        this.spindle.draw(mainRenderer, time);

        // 4. Nucleus (main canvas)
        this.nucleus.draw(mainRenderer, time);

        // 5. Centrosomes
        this.centrosomeA.draw(mainRenderer, time);
        this.centrosomeB.draw(mainRenderer, time);

        // 6. Cell membrane (main canvas, on top of internals)
        this.membrane.draw(mainRenderer, time);

        // 7. Proteins + Chromosomes → particle canvas
        this.chromosomeSystem.draw(particleRenderer, time);
    }
}

// ==================== PHASE / SCENE MANAGER ====================
// Mirrors: SceneManager  (scroll-driven phases with onEnter + onUpdate(progress))

class PhaseManager {
    constructor(system) {
        this.system       = system;
        this.currentPhase = null;
        this.phases       = this.definePhases();
    }

    definePhases() {
        return [
            {
                name: 'Welcome',
                scrollStart: 0, scrollEnd: 350,
                onEnter:  () => this.phaseWelcome(),
                onUpdate: (p) => this.updateWelcome(p)
            },
            {
                name: 'Interphase',
                scrollStart: 350, scrollEnd: 1000,
                onEnter:  () => this.phaseInterphase(),
                onUpdate: (p) => this.updateInterphase(p)
            },
            {
                name: 'S-Phase (DNA Replication)',
                scrollStart: 1000, scrollEnd: 1600,
                onEnter:  () => this.phaseSPhase(),
                onUpdate: (p) => this.updateSPhase(p)
            },
            {
                name: 'Prophase',
                scrollStart: 1600, scrollEnd: 2300,
                onEnter:  () => this.phaseProphase(),
                onUpdate: (p) => this.updateProphase(p)
            },
            {
                name: 'Metaphase',
                scrollStart: 2300, scrollEnd: 3100,
                onEnter:  () => this.phaseMetaphase(),
                onUpdate: (p) => this.updateMetaphase(p)
            },
            {
                name: 'Anaphase',
                scrollStart: 3100, scrollEnd: 3900,
                onEnter:  () => this.phaseAnaphase(),
                onUpdate: (p) => this.updateAnaphase(p)
            },
            {
                name: 'Telophase',
                scrollStart: 3900, scrollEnd: 4600,
                onEnter:  () => this.phaseTelophase(),
                onUpdate: (p) => this.updateTelophase(p)
            },
            {
                name: 'Cytokinesis',
                scrollStart: 4600, scrollEnd: 5400,
                onEnter:  () => this.phaseCytokinesis(),
                onUpdate: (p) => this.updateCytokinesis(p)
            },
            {
                name: 'Complete',
                scrollStart: 5400, scrollEnd: 6200,
                onEnter:  () => this.phaseComplete(),
                onUpdate: (p) => this.updateComplete(p)
            }
        ];
    }

    // ================================================================
    // PHASE IMPLEMENTATIONS
    // ================================================================

    // ── Welcome ──
    phaseWelcome() {
        setText("Welcome to Cell Division — scroll to watch mitosis unfold");
        this.system.nucleus.opacity = 0;
        this.system.centrosomeA.opacity = 0;
        this.system.centrosomeB.opacity = 0;
        this.system.spindle.opacity     = 0;
        this.system.organelles.forEach(o => o.opacity = 0);
        this.system.chromosomeSystem.proteins.forEach(p => p.isActive = false);
    }
    updateWelcome(p) {
        // Fade in just the bare cell
        this.system.membrane.opacity = Math.min(1, p * 2);
        // fade in proteins gently
        this.system.chromosomeSystem.proteins.forEach(pr => { pr.isActive = p > 0.3; });
    }

    // ── Interphase ──
    phaseInterphase() {
        setText("🧬 <strong>Interphase</strong> — The cell prepares for division. Organelles are active, DNA is relaxed.");
        document.getElementById('info-cell').classList.add('visible');
        this.setPhaseIndicator('interphase');
        this.system.nucleus.opacity = 1;
        this.system.nucleus.isBreakingDown = false;
        this.system.nucleus.breakdownProg  = 0;
        this.system.nucleus.isReforming    = false;
        this.system.nucleus.reformProg     = 0;
        if (this.system.nucleus.nucleolus) this.system.nucleus.nucleolus.opacity = 1;
    }
    updateInterphase(p) {
        // Fade in organelles staggered
        this.system.organelles.forEach((o, i) => {
            const start = (i / this.system.organelles.length) * 0.6;
            if (p > start) o.opacity = Math.min(1, (p - start) * 3);
        });
        // chromosomes visible inside nucleus (relaxed, no sister)
        this.system.chromosomeSystem.chromosomes.forEach(ch => {
            ch.opacity = Math.min(1, p * 2);
            ch.isSister = false;
            ch.size     = CONFIG.chromosomes.relaxedSize;
            ch.state    = 'relaxed';
            ch.deleted  = false;
        });
        this.system.nucleus.opacity = 1;
        this.updateStats(p * 100, 0);
    }

    // ── S-Phase ──
    phaseSPhase() {
        setText("🔄 <strong>S-Phase</strong> — DNA replication begins. Each chromosome is duplicated into sister chromatids.");
        document.getElementById('info-dna').classList.add('visible');
        this.setPhaseIndicator('interphase'); // still interphase umbrella
    }
    updateSPhase(p) {
        // Chromosomes visually "thicken" — lerp size toward condensed but not fully condensed yet
        this.system.chromosomeSystem.chromosomes.forEach((ch, i) => {
            const chrStart = (i / this.system.chromosomeSystem.chromosomes.length) * 0.6;
            if (p > chrStart) {
                const localP = Math.min(1, (p - chrStart) / 0.4);
                ch.size      = CONFIG.chromosomes.relaxedSize + (CONFIG.chromosomes.condensedSize - CONFIG.chromosomes.relaxedSize) * localP * 0.5;
                ch.isSister  = localP > 0.3;  // X shape appears partway through
            }
        });
        this.updateStats(p * 100, p * 100);
    }

    // ── Prophase ──
    phaseProphase() {
        setText("🌀 <strong>Prophase</strong> — Chromosomes condense. The nuclear envelope begins to dissolve. Centrosomes migrate to opposite poles.");
        document.getElementById('info-mitosis').classList.add('visible');
        this.setPhaseIndicator('prophase');
        this.system.nucleus.beginBreakdown();
        // condense all chromosomes
        this.system.chromosomeSystem.chromosomes.forEach(ch => { ch.condense(); });
    }
    updateProphase(p) {
        const cx = CONFIG.cell.centerX, cy = CONFIG.cell.centerY;

        // nuclear envelope dissolving
        this.system.nucleus.breakdownProg = p;
        // nucleolus fades
        if (this.system.nucleus.nucleolus) this.system.nucleus.nucleolus.opacity = 1 - p;

        // centrosomes appear and migrate apart
        this.system.centrosomeA.opacity = Math.min(1, p * 3);
        this.system.centrosomeB.opacity = Math.min(1, p * 3);
        const poleOffset = 100 + p * 50;
        this.system.centrosomeA.target = new Vector2D(cx, cy - poleOffset);
        this.system.centrosomeB.target = new Vector2D(cx, cy + poleOffset);

        // chromosomes start to spread outward from nucleus center
        this.system.chromosomeSystem.chromosomes.forEach((ch, i) => {
            const angle = (i / this.system.chromosomeSystem.chromosomes.length) * Math.PI * 2;
            const dist  = 40 + p * 25;
            ch.target = new Vector2D(cx + Math.cos(angle)*dist, cy + Math.sin(angle)*dist);
        });

        this.updateStats(100, 100);
    }

    // ── Metaphase ──
    phaseMetaphase() {
        setText("📍 <strong>Metaphase</strong> — Chromosomes line up at the cell's equator (metaphase plate). Spindle fibers attach to each centromere.");
        this.setPhaseIndicator('metaphase');
        // show spindle
        this.system.spindle.opacity = 1;
        // update spindle poles
        this.system.spindle.poleA = this.system.centrosomeA.position.clone();
        this.system.spindle.poleB = this.system.centrosomeB.position.clone();
    }
    updateMetaphase(p) {
        const cx = CONFIG.cell.centerX, cy = CONFIG.cell.centerY;

        // fade in spindle
        this.system.spindle.opacity = Math.min(1, p * 3);
        // continuously update spindle poles from centrosomes
        this.system.spindle.poleA = this.system.centrosomeA.position.clone();
        this.system.spindle.poleB = this.system.centrosomeB.position.clone();

        // chromosomes converge onto metaphase plate (horizontal line at cy)
        const activeChros = this.system.chromosomeSystem.chromosomes.filter(c => !c.deleted);
        activeChros.forEach((ch, i) => {
            const spread = (i - (activeChros.length-1)/2) * 18;
            const targetX = cx + spread;
            ch.target = new Vector2D(targetX, cy);
            ch.state  = 'aligned';
        });

        this.updateStats(100, 100);
    }

    // ── Anaphase ──
    phaseAnaphase() {
        setText("⬆️⬇️ <strong>Anaphase</strong> — Sister chromatids are pulled apart toward opposite poles by the spindle fibers.");
        this.setPhaseIndicator('anaphase');
        // trigger separation on each chromosome
        const cx = CONFIG.cell.centerX, cy = CONFIG.cell.centerY;
        const poleAy = this.system.centrosomeA.position.y;
        const poleBY = this.system.centrosomeB.position.y;

        const activeChros = this.system.chromosomeSystem.chromosomes.filter(c => !c.deleted);
        activeChros.forEach((ch, i) => {
            const spread = (i - (activeChros.length-1)/2) * 14;
            ch.separate(
                new Vector2D(cx + spread*0.6, poleAy + 30),
                new Vector2D(cx + spread*0.6, poleBY - 30)
            );
        });
    }
    updateAnaphase(p) {
        const cx  = CONFIG.cell.centerX, cy = CONFIG.cell.centerY;
        const pAy = this.system.centrosomeA.position.y;
        const pBy = this.system.centrosomeB.position.y;

        // lerp separated chromatids further toward poles
        const activeChros = this.system.chromosomeSystem.chromosomes.filter(c => !c.deleted);
        activeChros.forEach((ch, i) => {
            if (ch.separatedA && ch.separatedB) {
                const spread = (i - (activeChros.length-1)/2) * 14;
                // re-set targets with increasing depth
                ch.separatedA._target = new Vector2D(cx + spread*0.5, pAy + 40 - p*25);
                ch.separatedB._target = new Vector2D(cx + spread*0.5, pBy - 40 + p*25);
            }
        });

        // spindle starts fading
        if (p > 0.6) this.system.spindle.opacity = 1 - (p-0.6)/0.4;

        this.updateStats(100, 100);
    }

    // ── Telophase ──
    phaseTelophase() {
        setText("🔵 <strong>Telophase</strong> — Two new nuclei begin to form around each set of chromosomes. The spindle disappears.");
        this.setPhaseIndicator('telophase');
        this.system.spindle.opacity = 0;
        // begin nucleus reformation
        this.system.nucleus.isBreakingDown = false;
        this.system.nucleus.opacity        = 0;
        this.system.nucleus.beginReform();
    }
    updateTelophase(p) {
        this.system.nucleus.reformProg = p;

        // fade chromosomes slightly as they become enclosed
        this.system.chromosomeSystem.chromosomes.forEach(ch => {
            if (p > 0.5) ch.opacity = 1 - (p-0.5)*0.6;
        });

        this.updateStats(100, 100);
    }

    // ── Cytokinesis ──
    phaseCytokinesis() {
        setText("🔀 <strong>Cytokinesis</strong> — The cytoplasm divides. A cleavage furrow pinches the cell into two daughter cells.");
        this.setPhaseIndicator('cytokinesis');
        // show controls & mutation selector
        document.getElementById('control-panel').style.display    = 'block';
        document.getElementById('mutation-selector').style.display = 'flex';
        document.getElementById('info-panels').style.display       = 'block';
        document.getElementById('info-stats').classList.add('visible');
    }
    updateCytokinesis(p) {
        this.system.membrane.pinchProgress = p;
        // organelles fade
        this.system.organelles.forEach(o => { if (p > 0.3) o.opacity = Math.max(0, 1 - (p-0.3)/0.7); });
        this.updateStats(100, 100);
    }

    // ── Complete ──
    phaseComplete() {
        setText("✅ <strong>Division Complete!</strong> — Two genetically identical daughter cells. Try a mutation scenario above!");
        this.setPhaseIndicator('cytokinesis');
        document.getElementById('control-panel').style.display     = 'block';
        document.getElementById('mutation-selector').style.display  = 'flex';
        document.getElementById('info-panels').style.display        = 'block';
        document.getElementById('info-stats').classList.add('visible');
    }
    updateComplete(p) {
        this.system.membrane.pinchProgress = 1;
        // everything stays faded
    }

    // ================================================================
    // HELPERS
    // ================================================================

    setPhaseIndicator(phaseName) {
        document.querySelectorAll('.phase-dot').forEach(dot => {
            dot.classList.remove('active', 'completed');
        });
        const order = ['interphase','prophase','metaphase','anaphase','telophase','cytokinesis'];
        const idx   = order.indexOf(phaseName);
        document.querySelectorAll('.phase-dot').forEach((dot, i) => {
            if (i < idx)  dot.classList.add('completed');
            if (i === idx) dot.classList.add('active');
        });
        // show phase indicator bar
        document.getElementById('phase-indicator').style.display = 'flex';
    }

    updateStats(dnaReplPct, divPct) {
        setEl('dna-pct',      Math.round(dnaReplPct));
        setEl('div-progress', Math.round(divPct));
        setEl('chromo-count', this.system.chromosomeSystem.getActiveCount());
    }

    // ── scroll → phase router (mirrors SceneManager.update) ──
    update(scrollPosition) {
        const phase = this.phases.find(ph =>
            scrollPosition >= ph.scrollStart && scrollPosition < ph.scrollEnd
        );
        if (!phase) return;

        if (this.currentPhase !== phase) {
            phase.onEnter();
            this.currentPhase = phase;
            this.system.phase = phase.name;
        }

        const progress = (scrollPosition - phase.scrollStart) /
                         (phase.scrollEnd - phase.scrollStart);
        phase.onUpdate(Math.max(0, Math.min(1, progress)));
    }
}

// ==================== MAIN APPLICATION ====================
// Mirrors: CirculatoryApp  (renderers, event listeners, RAF loop)

class CellDivisionApp {
    constructor() {
        this.mainRenderer     = null;
        this.particleRenderer = null;
        this.system           = null;
        this.phaseManager     = null;
        this.lastTime         = 0;
        this.isRunning        = false;
        this.showLabels       = true;
        window.showLabels     = true;
    }

    initialize() {
        this.mainRenderer     = new CanvasRenderer('mainCanvas',     CONFIG.canvas.width, CONFIG.canvas.height);
        this.particleRenderer = new CanvasRenderer('particleCanvas', CONFIG.canvas.width, CONFIG.canvas.height);

        this.system = new CellDivisionSystem();
        this.system.initialize(CONFIG.cell.centerX, CONFIG.cell.centerY);

        this.phaseManager = new PhaseManager(this.system);

        this.setupEventListeners();

        this.isRunning = true;
        this.lastTime  = performance.now();
        this.animate();

        console.log('[CellDivision] Initialized.');
    }

    setupEventListeners() {
        // Toggle labels
        const labelsBtn = document.getElementById('toggle-labels');
        if (labelsBtn) {
            labelsBtn.addEventListener('click', () => {
                this.showLabels       = !this.showLabels;
                window.showLabels     = this.showLabels;
                labelsBtn.textContent = this.showLabels ? 'Hide Labels' : 'Show Labels';
            });
        }

        // Toggle flow / pause
        const flowBtn = document.getElementById('toggle-flow');
        if (flowBtn) {
            flowBtn.addEventListener('click', () => {
                if (this.system.chromosomeSystem.isPaused) {
                    this.system.chromosomeSystem.resume();
                    flowBtn.textContent = 'Pause Animation';
                } else {
                    this.system.chromosomeSystem.pause();
                    flowBtn.textContent = 'Resume Animation';
                }
            });
        }

        // Speed slider
        const speedSlider = document.getElementById('speed-slider');
        const speedValue  = document.getElementById('speed-value');
        if (speedSlider) {
            speedSlider.addEventListener('input', (e) => {
                const v = parseFloat(e.target.value);
                this.system.chromosomeSystem.speedMult = v;
                if (speedValue) speedValue.textContent = v.toFixed(1) + 'x';
            });
        }

        // Mutation selector
        const mutationSelect = document.getElementById('mutation');
        if (mutationSelect) {
            mutationSelect.addEventListener('change', (e) => {
                this.system.applyMutation(e.target.value);
                this.showMutationWarning(e.target.value);
            });
        }
    }

    showMutationWarning(type) {
        const el = document.getElementById('text');
        switch(type) {
            case 'nondisjunction':
                el.innerHTML = '⚠️ <strong>Nondisjunction:</strong> Chromosomes fail to separate — daughter cells get abnormal counts (e.g. trisomy 21 / Down syndrome)';
                el.style.background = 'rgba(255,94,106,0.25)';
                break;
            case 'polyploidy':
                el.innerHTML = '⚠️ <strong>Polyploidy:</strong> The entire genome is duplicated — cells end up with 3× or 4× the normal chromosome set';
                el.style.background = 'rgba(255,183,77,0.25)';
                break;
            case 'deletion':
                el.innerHTML = '⚠️ <strong>Deletion:</strong> Some chromosomes are lost entirely — critical genetic material is missing';
                el.style.background = 'rgba(255,204,2,0.25)';
                break;
            default:
                el.style.background = 'rgba(8,14,30,0.85)';
                break;
        }
    }

    // ── RAF loop ──
    animate() {
        if (!this.isRunning) return;

        const now = performance.now();
        const dt  = Math.min(now - this.lastTime, 50); // cap at 50 ms
        this.lastTime = now;

        this.mainRenderer.clear();
        this.particleRenderer.clear();

        this.system.update(dt);
        this.system.draw(this.mainRenderer, this.particleRenderer, now);

        requestAnimationFrame(() => this.animate());
    }

    handleScroll(scrollPosition) {
        this.phaseManager.update(scrollPosition);
    }

    destroy() {
        this.isRunning = false;
    }
}

// ==================== TINY DOM HELPERS ====================
function setText(html) {
    document.getElementById('text').innerHTML = html;
}
function setEl(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
}

// ==================== BOOTSTRAP ====================
let app = null;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (scroll === 0) {
        document.getElementById('scroll').style.display = 'block';
        document.getElementById('arrow').style.display  = 'block';
    }

    if (scroll > 10) {
        document.getElementById('main').style.opacity  = '1';
        document.getElementById('scroll').style.display = 'none';
        document.getElementById('arrow').style.display  = 'none';
    }

    if (scroll > 50 && !app) {
        app = new CellDivisionApp();
        app.initialize();
    }

    if (app) app.handleScroll(scroll);

    // back-to-top button
    document.getElementById('myBtn').style.display = scroll > 5000 ? 'block' : 'none';
}

// ── welcome alert (mirrors circulatory welcome) ──
window.addEventListener('load', () => {
    setTimeout(() => {
        alert(
            'Welcome to Cell Division!\n\n' +
            'Watch a complete mitosis cycle unfold.\n\n' +
            'Features:\n' +
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

// ── cleanup ──
window.addEventListener('beforeunload', () => { if (app) app.destroy(); });
