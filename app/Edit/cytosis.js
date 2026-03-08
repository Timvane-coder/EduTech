// ====================================================================
// ENDOCYTOSIS & EXOCYTOSIS VISUALIZATION — MODULAR OOP ARCHITECTURE
// Mirrors: CirculatoryApp  →  TransportApp
//          CirculatorySystem → TransportSystem
//          Heart             → Cell (+ Membrane, Organelles)
//          BloodVessel       → Vesicle / TransportPath
//          BloodCell         → CargoParticle
//          ParticleSystem    → CargoSystem
//          SceneManager      → SceneManager  (scroll-driven)
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
        radius:  260          // outer membrane radius
    },
    membrane: {
        thickness: 14,        // bilayer visual thickness
        lipidCount: 120       // animated lipid "dots" on the bilayer
    },
    vesicle: {
        minRadius: 22,
        maxRadius: 48,
        speed: 1.4
    },
    cargo: {
        particleCount: 80,
        size: 5
    },
    animation: {
        fps: 60,
        dtCap: 50             // ms — cap delta so pausing doesn't cause jumps
    },
    // ── colour palette (matches CSS vars) ──
    colors: {
        cellBg:        'rgba(14, 22, 48, 0.55)',
        membraneFill:  'rgba(123, 140, 222, 0.45)',
        membraneStroke:'rgba(123, 140, 222, 0.85)',
        endoVesicle:   '#ff6b6b',
        exoVesicle:    '#4ecdc4',
        cargo:         '#f7dc6f',
        lysosome:      '#c0392b',
        nucleus:       'rgba(90, 60, 140, 0.7)',
        nucleusStroke: 'rgba(140, 110, 200, 0.9)',
        er:            'rgba(60, 100, 160, 0.5)',
        golgi:         'rgba(80, 160, 120, 0.6)',
        receptor:      '#e67e22',
        ligand:        '#f39c12',
        plaque:        'rgba(200, 180, 100, 0.85)'
    }
};

// ==================== UTILITY CLASSES ====================
class Vector2D {
    constructor(x = 0, y = 0) { this.x = x; this.y = y; }

    add(v)            { return new Vector2D(this.x + v.x, this.y + v.y); }
    subtract(v)       { return new Vector2D(this.x - v.x, this.y - v.y); }
    multiply(s)       { return new Vector2D(this.x * s,   this.y * s);   }
    magnitude()       { return Math.sqrt(this.x * this.x + this.y * this.y); }
    normalize() {
        const m = this.magnitude();
        return m > 0 ? new Vector2D(this.x / m, this.y / m) : new Vector2D(0, 0);
    }
    distance(v)       { return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2); }
    clone()           { return new Vector2D(this.x, this.y); }

    // Lerp towards target
    lerpTo(target, t) {
        return new Vector2D(
            this.x + (target.x - this.x) * t,
            this.y + (target.y - this.y) * t
        );
    }

    // Rotate by angle (radians)
    rotate(angle) {
        const cos = Math.cos(angle), sin = Math.sin(angle);
        return new Vector2D(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
    }
}

class Color {
    constructor(r, g, b, a = 1) { this.r = r; this.g = g; this.b = b; this.a = a; }
    toString() { return `rgba(${this.r|0},${this.g|0},${this.b|0},${this.a.toFixed(2)})`; }

    lerp(target, t) {
        return new Color(
            this.r + (target.r - this.r) * t,
            this.g + (target.g - this.g) * t,
            this.b + (target.b - this.b) * t,
            this.a + (target.a - this.a) * t
        );
    }

    static fromHex(hex) {
        const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return r ? new Color(parseInt(r[1],16), parseInt(r[2],16), parseInt(r[3],16)) : new Color(128,128,128);
    }
}

// ==================== CANVAS RENDERER ====================
// Thin wrapper — identical contract to the circulatory system's renderer
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
    drawCircle(x, y, r, fill, stroke, lw = 1) {
        const c = this.ctx;
        c.beginPath();
        c.arc(x, y, r, 0, Math.PI * 2);
        if (fill)   { c.fillStyle = fill; c.fill(); }
        if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); }
    }

    drawEllipse(x, y, rx, ry, fill, stroke, lw = 1, angle = 0) {
        const c = this.ctx;
        c.beginPath();
        c.ellipse(x, y, rx, ry, angle, 0, Math.PI * 2);
        if (fill)   { c.fillStyle = fill; c.fill(); }
        if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); }
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

    drawText(text, x, y, font = '14px Arial', color = '#fff', align = 'center') {
        const c = this.ctx;
        c.font      = font;
        c.fillStyle = color;
        c.textAlign = align;
        c.fillText(text, x, y);
    }

    drawGradientCircle(x, y, r, stops) {
        const g = this.ctx.createRadialGradient(x, y, 0, x, y, r);
        stops.forEach(s => g.addColorStop(s.offset, s.color));
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, Math.PI * 2);
        this.ctx.fillStyle = g;
        this.ctx.fill();
    }

    // Bezier helper
    drawBezier(p0, p1, p2, p3, stroke, lw = 2) {
        const c = this.ctx;
        c.beginPath();
        c.moveTo(p0.x, p0.y);
        c.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
        c.strokeStyle = stroke;
        c.lineWidth   = lw;
        c.stroke();
    }

    // Arc segment (used for membrane bending during endo/exo)
    drawArc(cx, cy, r, startAngle, endAngle, stroke, lw = 3) {
        const c = this.ctx;
        c.beginPath();
        c.arc(cx, cy, r, startAngle, endAngle);
        c.strokeStyle = stroke;
        c.lineWidth   = lw;
        c.stroke();
    }

    save()    { this.ctx.save(); }
    restore() { this.ctx.restore(); }
    translate(x, y) { this.ctx.translate(x, y); }
    rotate(a)       { this.ctx.rotate(a); }
}

// ==================== ANATOMICAL STRUCTURES ====================

/* ─── Lipid ─── a single animated "head+tail" on the membrane ring ─── */
class Lipid {
    constructor(angle, radius, layerOffset) {
        this.angle  = angle;          // position on circle
        this.radius = radius;         // distance from cell center
        this.layerOffset = layerOffset; // inner vs outer leaflet
        this.wobble = Math.random() * Math.PI * 2;  // phase for gentle float
    }

    draw(renderer, cx, cy, time) {
        const wobbleAmt = 1.2;
        const currentAngle = this.angle + Math.sin(time * 0.002 + this.wobble) * 0.012;
        const r = this.radius + Math.sin(time * 0.003 + this.wobble) * wobbleAmt;

        const x = cx + Math.cos(currentAngle) * r;
        const y = cy + Math.sin(currentAngle) * r;

        // Head (hydrophilic) — circle
        const headR = 3.2;
        renderer.drawCircle(x, y, headR,
            this.layerOffset > 0 ? 'rgba(123,140,222,0.7)' : 'rgba(123,140,222,0.55)',
            null
        );

        // Tail (hydrophobic) — short line toward cell center
        const tailLen = 7;
        const tailDirX = cx - x;
        const tailDirY = cy - y;
        const tailMag  = Math.sqrt(tailDirX*tailDirX + tailDirY*tailDirY) || 1;
        const tx = x + (tailDirX / tailMag) * tailLen * (this.layerOffset > 0 ? 1 : -1);
        const ty = y + (tailDirY / tailMag) * tailLen * (this.layerOffset > 0 ? 1 : -1);

        const c = renderer.ctx;
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(tx, ty);
        c.strokeStyle = 'rgba(100,120,200,0.45)';
        c.lineWidth   = 1.2;
        c.stroke();
    }
}

/* ─── CellMembrane ─── the phospholipid bilayer ring ─── */
class CellMembrane {
    constructor(center, radius) {
        this.center  = center;   // Vector2D
        this.radius  = radius;
        this.lipids  = [];
        this.opacity = 0;        // fades in during scene
        this.buildLipids();

        // Dynamic deformation zones (for endo / exo events)
        // Each: { angle, depth, progress, direction }  direction: 1 = inward (endo), -1 = outward (exo)
        this.deformations = [];
    }

    buildLipids() {
        const n = CONFIG.membrane.lipidCount;
        for (let i = 0; i < n; i++) {
            const angle = (i / n) * Math.PI * 2;
            // Outer leaflet
            this.lipids.push(new Lipid(angle, this.radius + 5, 1));
            // Inner leaflet
            this.lipids.push(new Lipid(angle, this.radius - 5, -1));
        }
    }

    // Add a transient deformation (membrane bending)
    addDeformation(angle, depth, direction) {
        this.deformations.push({ angle, depth, progress: 0, direction, maxProgress: 1 });
    }

    draw(renderer, time) {
        if (this.opacity <= 0) return;
        const cx = this.center.x, cy = this.center.y;

        // ── background glow ──
        renderer.drawGradientCircle(cx, cy, this.radius + 30, [
            { offset: 0,    color: 'rgba(123,140,222,0)' },
            { offset: 0.7,  color: 'rgba(123,140,222,0.04)' },
            { offset: 0.88, color: `rgba(123,140,222,${this.opacity * 0.18})` },
            { offset: 1,    color: 'rgba(123,140,222,0)' }
        ]);

        // ── base membrane ring (two strokes = bilayer) ──
        renderer.ctx.save();
        renderer.ctx.globalAlpha = this.opacity;

        // Outer stroke
        renderer.drawCircle(cx, cy, this.radius + 5, null, 'rgba(123,140,222,0.35)', 4);
        // Inner stroke
        renderer.drawCircle(cx, cy, this.radius - 5, null, 'rgba(123,140,222,0.28)', 3);
        // Fill band
        renderer.drawCircle(cx, cy, this.radius,     'rgba(123,140,222,0.08)', null);

        renderer.ctx.globalAlpha = 1;
        renderer.ctx.restore();

        // ── animated lipids ──
        renderer.ctx.save();
        renderer.ctx.globalAlpha = this.opacity;
        this.lipids.forEach(lip => lip.draw(renderer, cx, cy, time));
        renderer.ctx.globalAlpha = 1;
        renderer.ctx.restore();

        // ── deformation arcs ── (visual bending during transport events)
        this.deformations.forEach(d => {
            if (d.progress >= d.maxProgress) return;
            const bendRadius = d.depth * d.progress * d.direction;
            const arcSpan = 0.45;  // radians — how wide the bend is
            const c = renderer.ctx;
            c.save();
            c.globalAlpha = this.opacity * (1 - d.progress * 0.5);

            // Draw a deformed arc
            c.beginPath();
            const steps = 30;
            for (let i = 0; i <= steps; i++) {
                const t     = i / steps;
                const angle = d.angle - arcSpan + t * arcSpan * 2;
                // Gaussian-like bump at center
                const bump  = Math.exp(-((t - 0.5) ** 2) / 0.08) * bendRadius;
                const r     = this.radius + bump;
                const px    = cx + Math.cos(angle) * r;
                const py    = cy + Math.sin(angle) * r;
                i === 0 ? c.moveTo(px, py) : c.lineTo(px, py);
            }
            c.strokeStyle = d.direction > 0 ? CONFIG.colors.endoVesicle : CONFIG.colors.exoVesicle;
            c.lineWidth   = 3.5;
            c.stroke();
            c.restore();
        });
    }

    update(dt) {
        // Advance deformations
        this.deformations = this.deformations.filter(d => {
            d.progress += dt * 0.0015;
            return d.progress < d.maxProgress + 0.3;   // linger a bit then remove
        });
    }
}

/* ─── Organelle ─── Nucleus, ER, Golgi, Lysosome ─── */
class Organelle {
    constructor(name, position, rx, ry, fillColor, strokeColor, angle = 0) {
        this.name       = name;
        this.position   = position;
        this.rx         = rx;   // x-radius
        this.ry         = ry;   // y-radius
        this.fillColor  = fillColor;
        this.strokeColor= strokeColor;
        this.angle      = angle;
        this.opacity    = 0;
        this.pulsePhase = Math.random() * Math.PI * 2;
    }

    draw(renderer, time) {
        if (this.opacity <= 0) return;
        const pulse = 1 + Math.sin(time * 0.002 + this.pulsePhase) * 0.02;
        const x = this.position.x, y = this.position.y;

        renderer.ctx.save();
        renderer.ctx.globalAlpha = this.opacity;

        if (this.name === 'Nucleus') {
            // ── double-membrane nucleus ──
            renderer.drawEllipse(x, y, this.rx * pulse, this.ry * pulse,
                this.fillColor, null);
            // nuclear envelope (outer)
            renderer.drawEllipse(x, y, this.rx * pulse + 4, this.ry * pulse + 4,
                null, this.strokeColor, 2.5);
            // nuclear envelope (inner)
            renderer.drawEllipse(x, y, this.rx * pulse - 2, this.ry * pulse - 2,
                null, 'rgba(140,110,200,0.4)', 1.5);
            // nucleolus
            renderer.drawCircle(x - 4, y + 4, this.rx * 0.22, 'rgba(100,70,160,0.7)', null);

            // nuclear pore complexes (small dots on envelope)
            for (let i = 0; i < 8; i++) {
                const a = (i / 8) * Math.PI * 2 + time * 0.0005;
                const px = x + Math.cos(a) * (this.rx * pulse + 2);
                const py = y + Math.sin(a) * (this.ry * pulse + 2);
                renderer.drawCircle(px, py, 2.2, 'rgba(180,160,230,0.7)', null);
            }

        } else if (this.name === 'ER') {
            // ── Endoplasmic Reticulum — wavy ribbons ──
            const c = renderer.ctx;
            c.strokeStyle = this.strokeColor;
            c.lineWidth   = 3;
            for (let row = -1; row <= 1; row++) {
                c.beginPath();
                for (let i = 0; i <= 40; i++) {
                    const t  = i / 40;
                    const px = x - this.rx + t * this.rx * 2;
                    const py = y + row * 18 + Math.sin(t * Math.PI * 3 + time * 0.002 + row) * 10;
                    i === 0 ? c.moveTo(px, py) : c.lineTo(px, py);
                }
                c.stroke();
            }

        } else if (this.name === 'Golgi') {
            // ── Golgi — stacked cisternae ──
            const c = renderer.ctx;
            for (let i = -2; i <= 2; i++) {
                const shift = Math.sin(time * 0.002 + i) * 2;
                renderer.drawEllipse(
                    x + shift, y + i * 9,
                    this.rx, 4,
                    i === 0 ? 'rgba(80,180,140,0.65)' : 'rgba(80,160,120,0.4)',
                    'rgba(60,140,100,0.6)', 1.2
                );
            }

        } else if (this.name === 'Lysosome') {
            // ── Lysosome — pulsing digestion chamber ──
            const lp = 1 + Math.sin(time * 0.004 + this.pulsePhase) * 0.06;
            renderer.drawCircle(x, y, this.rx * lp, this.fillColor,
                this.strokeColor, 2.5);
            // internal "acid" speckles
            for (let i = 0; i < 6; i++) {
                const a = (i / 6) * Math.PI * 2 + time * 0.003;
                const d = this.rx * 0.5 * (0.5 + Math.sin(time * 0.005 + i) * 0.5);
                renderer.drawCircle(
                    x + Math.cos(a) * d,
                    y + Math.sin(a) * d,
                    1.8,
                    'rgba(255,180,100,0.6)', null
                );
            }
        }

        renderer.ctx.restore();

        // ── Label ──
        if (window.showLabels && this.opacity > 0.5) {
            const labelY = this.name === 'ER' ? y - this.ry - 8
                         : this.name === 'Golgi' ? y - 28
                         : y + this.ry + 15;
            renderer.drawText(this.name, x, labelY, 'bold 11px Arial',
                `rgba(255,255,255,${this.opacity * 0.85})`);
        }
    }
}

/* ─── Receptor ─── a transmembrane protein sitting on the membrane ─── */
class Receptor {
    constructor(angle, cellCenter, cellRadius) {
        this.angle      = angle;
        this.cellCenter = cellCenter;
        this.cellRadius = cellRadius;
        this.opacity    = 0;
        this.bound      = false;   // has a ligand attached?
        this.boundTime  = 0;
    }

    getPosition() {
        return new Vector2D(
            this.cellCenter.x + Math.cos(this.angle) * this.cellRadius,
            this.cellCenter.y + Math.sin(this.angle) * this.cellRadius
        );
    }

    draw(renderer, time) {
        if (this.opacity <= 0) return;
        const pos = this.getPosition();
        const cx  = this.cellCenter.x, cy = this.cellCenter.y;

        // Transmembrane stem
        const innerDir = new Vector2D(cx - pos.x, cy - pos.y).normalize();
        const stemEnd  = pos.add(innerDir.multiply(12));

        renderer.ctx.save();
        renderer.ctx.globalAlpha = this.opacity;

        const c = renderer.ctx;
        c.beginPath();
        c.moveTo(pos.x, pos.y);
        c.lineTo(stemEnd.x, stemEnd.y);
        c.strokeStyle = CONFIG.colors.receptor;
        c.lineWidth   = 3;
        c.stroke();

        // Extracellular domain (Y-shape)
        const outDir  = innerDir.multiply(-1);
        const armLen  = 7;
        const armBase = pos.add(outDir.multiply(4));

        const left  = armBase.add(outDir.rotate( 0.5).multiply(armLen));
        const right = armBase.add(outDir.rotate(-0.5).multiply(armLen));

        c.beginPath();
        c.moveTo(left.x,  left.y);
        c.lineTo(armBase.x, armBase.y);
        c.lineTo(right.x, right.y);
        c.strokeStyle = CONFIG.colors.receptor;
        c.lineWidth   = 2.5;
        c.stroke();

        // Binding tips
        renderer.drawCircle(left.x,  left.y,  2.2, CONFIG.colors.receptor, null);
        renderer.drawCircle(right.x, right.y, 2.2, CONFIG.colors.receptor, null);

        // ── Bound ligand ──
        if (this.bound) {
            renderer.drawCircle(armBase.x, armBase.y - 4, 4.5,
                CONFIG.colors.ligand, 'rgba(230,126,34,0.8)', 1.2);
        }

        renderer.ctx.restore();
    }

    update(dt) {
        if (this.bound) this.boundTime += dt;
    }
}

/* ─── Vesicle ─── the transport bubble (endosome, exosome, lysosomal vesicle …) ─── */
class Vesicle {
    constructor(position, radius, type, target) {
        this.position  = position.clone();  // Vector2D
        this.radius    = radius;
        this.type      = type;              // 'endocytic' | 'exocytic' | 'lysosomal' | 'secretory'
        this.target    = target;            // Vector2D — destination
        this.isActive  = true;
        this.opacity   = 1;
        this.progress  = 0;                 // 0 → 1 travel progress
        this.origin    = position.clone();  // start point
        this.cargo     = [];                // CargoParticle[]
        this.fusing    = false;             // currently fusing with membrane / lysosome?
        this.fuseProgress = 0;
        this.label     = '';
        this.phase     = Math.random() * Math.PI * 2; // wobble phase
    }

    get color() {
        switch (this.type) {
            case 'endocytic':  return CONFIG.colors.endoVesicle;
            case 'exocytic':   return CONFIG.colors.exoVesicle;
            case 'lysosomal':  return CONFIG.colors.lysosome;
            case 'secretory':  return CONFIG.colors.exoVesicle;
            default:           return '#aaa';
        }
    }

    draw(renderer, time) {
        if (!this.isActive || this.opacity <= 0) return;

        const x = this.position.x, y = this.position.y;
        const wobble = Math.sin(time * 0.003 + this.phase) * 1.5;
        const r = this.radius * (this.fusing ? (1 + this.fuseProgress * 0.3) : 1);

        renderer.ctx.save();
        renderer.ctx.globalAlpha = this.opacity;

        // ── Vesicle glow ──
        renderer.drawGradientCircle(x, y + wobble, r + 6, [
            { offset: 0,   color: this.color + '40' },
            { offset: 0.6, color: this.color + '18' },
            { offset: 1,   color: this.color + '00' }
        ]);

        // ── Vesicle membrane ──
        renderer.drawCircle(x, y + wobble, r,
            this.color + '28',
            this.color, 2.2
        );

        // ── Cargo inside ──
        this.cargo.forEach(c => {
            if (c.isActive) c.draw(renderer, time);
        });

        // ── Label ──
        if (window.showLabels && this.label && this.opacity > 0.6) {
            renderer.drawText(this.label, x, y + wobble - r - 7,
                '10px Arial', 'rgba(255,255,255,0.75)');
        }

        renderer.ctx.restore();
    }

    update(dt, speed) {
        if (!this.isActive) return;

        if (this.fusing) {
            this.fuseProgress += dt * 0.002;
            if (this.fuseProgress >= 1) {
                this.isActive = false;
                // release cargo
                this.cargo.forEach(c => { c.released = true; });
            }
            return;
        }

        // Travel toward target
        this.progress += (speed * dt * 0.0008);
        if (this.progress >= 1) {
            this.progress = 1;
            this.position = this.target.clone();
            this.startFusing();
        } else {
            this.position = this.origin.lerpTo(this.target, this.progress);
        }

        // Bobble cargo positions relative to vesicle
        this.cargo.forEach(c => {
            c.position = this.position.clone().add(c.offset);
        });
    }

    startFusing() {
        this.fusing = true;
        this.fuseProgress = 0;
    }
}

/* ─── CargoParticle ─── stuff inside vesicles (proteins, nutrients, bacteria …) ─── */
class CargoParticle {
    constructor(position, vesicleOffset, type) {
        this.position = position.clone();
        this.offset   = vesicleOffset;   // offset from vesicle center
        this.type     = type;            // 'protein' | 'nutrient' | 'pathogen' | 'neurotransmitter'
        this.isActive = true;
        this.released = false;
        this.size     = type === 'pathogen' ? 7 : type === 'protein' ? 4.5 : 3.5;
        this.phase    = Math.random() * Math.PI * 2;
    }

    get color() {
        switch (this.type) {
            case 'protein':        return '#f7dc6f';
            case 'nutrient':       return '#82e0aa';
            case 'pathogen':       return '#e74c3c';
            case 'neurotransmitter': return '#a569bd';
            default:               return '#ccc';
        }
    }

    draw(renderer, time) {
        if (!this.isActive) return;
        const wobble = Math.sin(time * 0.004 + this.phase) * 1.8;
        renderer.drawCircle(
            this.position.x,
            this.position.y + wobble,
            this.size,
            this.color + 'cc',
            this.color, 1
        );
    }
}

/* ─── Ligand ─── extracellular signal molecule that binds a receptor ─── */
class Ligand {
    constructor(startPosition, targetAngle, cellCenter, cellRadius) {
        this.position    = startPosition.clone();
        this.targetAngle = targetAngle;
        this.cellCenter  = cellCenter;
        this.cellRadius  = cellRadius;
        this.target      = new Vector2D(
            cellCenter.x + Math.cos(targetAngle) * (cellRadius + 10),
            cellCenter.y + Math.sin(targetAngle) * (cellRadius + 10)
        );
        this.progress = 0;
        this.origin   = startPosition.clone();
        this.isActive = true;
        this.bound    = false;
        this.phase    = Math.random() * Math.PI * 2;
    }

    draw(renderer, time) {
        if (!this.isActive || this.bound) return;
        const wobble = Math.sin(time * 0.005 + this.phase) * 2;
        renderer.drawCircle(
            this.position.x,
            this.position.y + wobble,
            4, CONFIG.colors.ligand, 'rgba(230,126,34,0.9)', 1.2
        );
    }

    update(dt, speed) {
        if (this.bound || !this.isActive) return;
        this.progress += speed * dt * 0.0006;
        if (this.progress >= 1) {
            this.progress = 1;
            this.position = this.target.clone();
            this.bound = true;
        } else {
            this.position = this.origin.lerpTo(this.target, this.progress);
        }
    }
}

/* ─── CoatedPit ─── the clathrin-coated pit that forms during receptor-mediated endo ─── */
class CoatedPit {
    constructor(angle, cellCenter, cellRadius) {
        this.angle      = angle;
        this.cellCenter = cellCenter;
        this.cellRadius = cellRadius;
        this.progress   = 0;    // 0 = flat, 1 = pinched off
        this.isActive   = true;
        this.opacity    = 0;
    }

    draw(renderer, time) {
        if (!this.isActive || this.opacity <= 0) return;
        const cx = this.cellCenter.x, cy = this.cellCenter.y;

        // The pit is a curved indentation at `angle`
        const pitDepth  = 30 * this.progress;
        const pitSpan   = 0.35;  // radians
        const steps     = 24;

        renderer.ctx.save();
        renderer.ctx.globalAlpha = this.opacity;

        // Clathrin coat dots
        const c = renderer.ctx;
        const coatColor = 'rgba(180,140,80,0.7)';
        for (let i = 0; i <= steps; i++) {
            const t     = i / steps;
            const angle = this.angle - pitSpan + t * pitSpan * 2;
            const bump  = Math.exp(-((t - 0.5) ** 2) / 0.06) * pitDepth;
            const r     = this.cellRadius - bump;
            const px    = cx + Math.cos(angle) * r;
            const py    = cy + Math.sin(angle) * r;
            // Only draw coat when pit is forming (progress < 0.8)
            if (this.progress < 0.85) {
                renderer.drawCircle(px, py, 2.8, coatColor, null);
            }
        }

        // Pit membrane curve
        c.beginPath();
        for (let i = 0; i <= steps; i++) {
            const t     = i / steps;
            const angle = this.angle - pitSpan + t * pitSpan * 2;
            const bump  = Math.exp(-((t - 0.5) ** 2) / 0.06) * pitDepth;
            const r     = this.cellRadius - bump;
            const px    = cx + Math.cos(angle) * r;
            const py    = cy + Math.sin(angle) * r;
            i === 0 ? c.moveTo(px, py) : c.lineTo(px, py);
        }
        c.strokeStyle = CONFIG.colors.endoVesicle;
        c.lineWidth   = 3;
        c.stroke();

        renderer.ctx.restore();
    }

    update(dt) {
        if (!this.isActive) return;
        this.progress += dt * 0.0009;
        if (this.progress >= 1) this.isActive = false;
    }
}

/* ─── PseudoPod ─── membrane extension for phagocytosis ─── */
class PseudoPod {
    constructor(angle, cellCenter, cellRadius) {
        this.angle      = angle;
        this.cellCenter = cellCenter;
        this.cellRadius = cellRadius;
        this.progress   = 0;   // 0 = retracted, 1 = fully extended & wrapped
        this.isActive   = true;
        this.opacity    = 1;
    }

    draw(renderer, time) {
        if (!this.isActive || this.opacity <= 0) return;
        const cx = this.cellCenter.x, cy = this.cellCenter.y;
        const extendLen = 55 * this.progress;  // how far the pod reaches out
        const spreadAngle = 0.4 * (1 - this.progress * 0.6); // narrows as it wraps

        renderer.ctx.save();
        renderer.ctx.globalAlpha = this.opacity;

        // Two "arms" of the pseudopod
        const armAngles = [this.angle - spreadAngle, this.angle + spreadAngle];
        armAngles.forEach(a => {
            const baseX = cx + Math.cos(a) * this.cellRadius;
            const baseY = cy + Math.sin(a) * this.cellRadius;
            const tipX  = cx + Math.cos(this.angle) * (this.cellRadius + extendLen);
            const tipY  = cy + Math.sin(this.angle) * (this.cellRadius + extendLen);

            // Bezier arm
            renderer.drawBezier(
                new Vector2D(baseX, baseY),
                new Vector2D(baseX + (tipX - baseX) * 0.3, baseY + (tipY - baseY) * 0.1),
                new Vector2D(tipX - (tipX - baseX) * 0.1, tipY - (tipY - baseY) * 0.3),
                new Vector2D(tipX, tipY),
                CONFIG.colors.endoVesicle, 4
            );
        });

        // Fill between arms (translucent membrane)
        const steps = 18;
        const points = [];
        for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            const a = armAngles[0] + t * (armAngles[1] - armAngles[0]);
            const r = this.cellRadius + Math.sin(t * Math.PI) * extendLen;
            points.push(new Vector2D(cx + Math.cos(a) * r, cy + Math.sin(a) * r));
        }
        renderer.fillPolygon(points, 'rgba(255,107,107,0.12)');

        renderer.ctx.restore();
    }

    update(dt) {
        if (!this.isActive) return;
        this.progress += dt * 0.0007;
        if (this.progress >= 1) {
            // Pod has fully engulfed — signal back
            this.isActive = false;
        }
    }
}

/* ─── ExternalParticle ─── bacteria / nutrient drop floating outside the cell ─── */
class ExternalParticle {
    constructor(position, type) {
        this.position = position.clone();
        this.type     = type;   // 'bacteria' | 'nutrient' | 'ligand'
        this.isActive = true;
        this.phase    = Math.random() * Math.PI * 2;
        this.drift    = new Vector2D(
            (Math.random() - 0.5) * 0.3,
            (Math.random() - 0.5) * 0.3
        );
    }

    get size()  { return this.type === 'bacteria' ? 9 : 4; }
    get color() { return this.type === 'bacteria' ? '#e74c3c' : '#82e0aa'; }

    draw(renderer, time) {
        if (!this.isActive) return;
        const wobble = Math.sin(time * 0.003 + this.phase) * 2;

        if (this.type === 'bacteria') {
            // Rod shape
            const c = renderer.ctx;
            c.save();
            c.translate(this.position.x, this.position.y + wobble);
            c.rotate(time * 0.001 + this.phase);
            c.beginPath();
            c.roundRect(-8, -3, 16, 6, 3);
            c.fillStyle = this.color + 'cc';
            c.fill();
            c.strokeStyle = this.color;
            c.lineWidth = 1;
            c.stroke();
            c.restore();
        } else {
            renderer.drawCircle(this.position.x, this.position.y + wobble,
                this.size, this.color + 'bb', this.color, 1);
        }
    }

    update(dt) {
        if (!this.isActive) return;
        this.position.x += this.drift.x * dt * 0.05;
        this.position.y += this.drift.y * dt * 0.05;
    }
}

// ==================== CARGO SYSTEM (≡ ParticleSystem) ====================
class CargoSystem {
    constructor() {
        this.vesicles       = [];
        this.externalParts  = [];   // floating outside
        this.ligands        = [];
        this.coatedPits     = [];
        this.pseudoPods     = [];
        this.flowSpeed      = CONFIG.vesicle.speed;
        this.isPaused       = false;

        // stats counters
        this.endoEvents     = 0;
        this.exoEvents      = 0;
        this.cargoDelivered = 0;
    }

    addVesicle(v)         { this.vesicles.push(v); }
    addExternalParticle(p){ this.externalParts.push(p); }
    addLigand(l)          { this.ligands.push(l); }
    addCoatedPit(cp)      { this.coatedPits.push(cp); }
    addPseudoPod(pp)      { this.pseudoPods.push(pp); }

    pause()  { this.isPaused = true; }
    resume() { this.isPaused = false; }
    clear()  {
        this.vesicles      = [];
        this.externalParts = [];
        this.ligands       = [];
        this.coatedPits    = [];
        this.pseudoPods    = [];
    }

    update(dt) {
        if (this.isPaused) return;

        this.vesicles.forEach(v => v.update(dt, this.flowSpeed));
        this.externalParts.forEach(p => p.update(dt));
        this.ligands.forEach(l => l.update(dt, this.flowSpeed));
        this.coatedPits.forEach(cp => cp.update(dt));
        this.pseudoPods.forEach(pp => pp.update(dt));

        // Prune completed vesicles & count deliveries
        this.vesicles = this.vesicles.filter(v => {
            if (!v.isActive) {
                this.cargoDelivered += v.cargo.length;
                return false;
            }
            return true;
        });
        // Prune completed pits / pods
        this.coatedPits = this.coatedPits.filter(cp => cp.isActive);
        this.pseudoPods = this.pseudoPods.filter(pp => pp.isActive);
        this.ligands    = this.ligands.filter(l  => l.isActive && !l.bound);
    }

    draw(renderer, time) {
        // External particles first (behind membrane)
        this.externalParts.forEach(p => p.draw(renderer, time));
        this.ligands.forEach(l => l.draw(renderer, time));

        // Coated pits & pseudopods (on-membrane features)
        this.coatedPits.forEach(cp => cp.draw(renderer, time));
        this.pseudoPods.forEach(pp => pp.draw(renderer, time));

        // Vesicles (inside cell mostly)
        this.vesicles.forEach(v => v.draw(renderer, time));
    }

    getActiveVesicleCount() { return this.vesicles.filter(v => v.isActive).length; }
}

// ==================== TRANSPORT SYSTEM (≡ CirculatorySystem) ====================
// Owns: cell structure, membrane, organelles, cargo system
class TransportSystem {
    constructor() {
        this.membrane      = null;
        this.organelles    = {};   // { nucleus, er, golgi, lysosome }
        this.receptors     = [];
        this.cargoSystem   = new CargoSystem();
        this.center        = new Vector2D(CONFIG.cell.centerX, CONFIG.cell.centerY);
        this.cellRadius    = CONFIG.cell.radius;
        this.activeProcess = 'both';  // 'both' | 'endocytosis' | 'exocytosis'
    }

    initialize() {
        // Build membrane
        this.membrane = new CellMembrane(this.center, this.cellRadius);

        // Build organelles
        this.organelles.nucleus = new Organelle(
            'Nucleus',
            new Vector2D(this.center.x - 30, this.center.y + 20),
            58, 50,
            CONFIG.colors.nucleus, CONFIG.colors.nucleusStroke
        );
        this.organelles.er = new Organelle(
            'ER',
            new Vector2D(this.center.x + 60, this.center.y + 40),
            70, 30,
            CONFIG.colors.er, CONFIG.colors.er
        );
        this.organelles.golgi = new Organelle(
            'Golgi',
            new Vector2D(this.center.x + 20, this.center.y - 60),
            35, 12,
            CONFIG.colors.golgi, CONFIG.colors.golgi
        );
        this.organelles.lysosome = new Organelle(
            'Lysosome',
            new Vector2D(this.center.x - 80, this.center.y - 30),
            22, 22,
            CONFIG.colors.lysosome, 'rgba(192,57,43,0.9)'
        );

        // Seed a few receptors around the membrane
        const receptorAngles = [-0.6, -0.2, 0.3, 0.8, 1.4];
        receptorAngles.forEach(a => {
            this.receptors.push(new Receptor(a, this.center, this.cellRadius));
        });

        // Seed some external particles
        this._seedExternalParticles();
    }

    _seedExternalParticles() {
        const angles = [0, 0.7, 1.4, 2.2, 3.0, 3.8, 4.5, 5.3];
        angles.forEach(a => {
            const dist = this.cellRadius + 60 + Math.random() * 60;
            this.cargoSystem.addExternalParticle(new ExternalParticle(
                new Vector2D(
                    this.center.x + Math.cos(a) * dist,
                    this.center.y + Math.sin(a) * dist
                ),
                Math.random() < 0.25 ? 'bacteria' : 'nutrient'
            ));
        });
    }

    // ── spawn helpers called by SceneManager ──

    spawnReceptorMediatedEndo(angle) {
        // 1. Ligand drifts in
        const ligandStart = new Vector2D(
            this.center.x + Math.cos(angle) * (this.cellRadius + 80),
            this.center.y + Math.sin(angle) * (this.cellRadius + 80)
        );
        const ligand = new Ligand(ligandStart, angle, this.center, this.cellRadius);
        this.cargoSystem.addLigand(ligand);

        // 2. After ligand arrives, form coated pit
        setTimeout(() => {
            const pit = new CoatedPit(angle, this.center, this.cellRadius);
            pit.opacity = 1;
            this.cargoSystem.addCoatedPit(pit);

            // Membrane bending
            this.membrane.addDeformation(angle, 40, 1);

            // 3. Pinch off → create endocytic vesicle
            setTimeout(() => {
                const vesiclePos = new Vector2D(
                    this.center.x + Math.cos(angle) * (this.cellRadius - 30),
                    this.center.y + Math.sin(angle) * (this.cellRadius - 30)
                );
                // Target: lysosome
                const lyso = this.organelles.lysosome;
                const v = new Vesicle(vesiclePos, 24, 'endocytic', lyso.position);
                v.label = 'Early Endosome';
                // Add cargo
                for (let i = 0; i < 3; i++) {
                    const off = new Vector2D((Math.random()-0.5)*16, (Math.random()-0.5)*16);
                    v.cargo.push(new CargoParticle(vesiclePos.add(off), off, 'protein'));
                }
                this.cargoSystem.addVesicle(v);
                this.cargoSystem.endoEvents++;
            }, 1200);
        }, 1400);
    }

    spawnPhagocytosis(angle) {
        // 1. Pseudopod extends
        const pod = new PseudoPod(angle, this.center, this.cellRadius);
        this.cargoSystem.addPseudoPod(pod);

        // Mark nearest external particle as consumed
        const targetPos = new Vector2D(
            this.center.x + Math.cos(angle) * (this.cellRadius + 25),
            this.center.y + Math.sin(angle) * (this.cellRadius + 25)
        );
        // Find closest external particle
        let closest = null, closestDist = Infinity;
        this.cargoSystem.externalParts.forEach(p => {
            const d = p.position.distance(targetPos);
            if (d < closestDist) { closestDist = d; closest = p; }
        });
        if (closest) closest.isActive = false;

        // 2. After engulfment → phagosome vesicle toward lysosome
        setTimeout(() => {
            const vesiclePos = new Vector2D(
                this.center.x + Math.cos(angle) * (this.cellRadius - 20),
                this.center.y + Math.sin(angle) * (this.cellRadius - 20)
            );
            const lyso = this.organelles.lysosome;
            const v = new Vesicle(vesiclePos, 32, 'endocytic', lyso.position);
            v.label = 'Phagosome';
            v.cargo.push(new CargoParticle(vesiclePos, new Vector2D(0,0), 'pathogen'));
            this.cargoSystem.addVesicle(v);
            this.cargoSystem.endoEvents++;

            // Re-seed an external particle to replace consumed one
            const newAngle = Math.random() * Math.PI * 2;
            const dist = this.cellRadius + 60 + Math.random() * 60;
            this.cargoSystem.addExternalParticle(new ExternalParticle(
                new Vector2D(this.center.x + Math.cos(newAngle)*dist,
                             this.center.y + Math.sin(newAngle)*dist),
                'bacteria'
            ));
        }, 1600);
    }

    spawnPinocytosis(angle) {
        // Small membrane invagination → tiny vesicle
        this.membrane.addDeformation(angle, 18, 1);

        setTimeout(() => {
            const vesiclePos = new Vector2D(
                this.center.x + Math.cos(angle) * (this.cellRadius - 15),
                this.center.y + Math.sin(angle) * (this.cellRadius - 15)
            );
            // Target: near ER
            const er = this.organelles.er;
            const v  = new Vesicle(vesiclePos, 14, 'endocytic', er.position);
            v.label = 'Pinosome';
            v.cargo.push(new CargoParticle(vesiclePos, new Vector2D(0,0), 'nutrient'));
            this.cargoSystem.addVesicle(v);
            this.cargoSystem.endoEvents++;
        }, 700);
    }

    spawnConstitutiveExocytosis() {
        // Vesicle buds from Golgi → travels to membrane → fuses
        const golgi = this.organelles.golgi;
        const angle = -1.0 + Math.random() * 0.6;  // aim toward top of cell
        const target = new Vector2D(
            this.center.x + Math.cos(angle) * this.cellRadius,
            this.center.y + Math.sin(angle) * this.cellRadius
        );

        const v = new Vesicle(golgi.position.clone(), 20, 'exocytic', target);
        v.label = 'Secretory Vesicle';
        // Cargo: protein
        for (let i = 0; i < 2; i++) {
            const off = new Vector2D((Math.random()-0.5)*12, (Math.random()-0.5)*12);
            v.cargo.push(new CargoParticle(golgi.position.add(off), off, 'protein'));
        }
        this.cargoSystem.addVesicle(v);
        this.cargoSystem.exoEvents++;

        // Membrane bends outward at target
        setTimeout(() => {
            this.membrane.addDeformation(angle, 20, -1);
        }, 1200);
    }

    spawnRegulatedExocytosis() {
        // Like constitutive but bigger vesicle, neurotransmitter cargo
        const golgi = this.organelles.golgi;
        const angle = -0.8 + Math.random() * 1.2;
        const target = new Vector2D(
            this.center.x + Math.cos(angle) * this.cellRadius,
            this.center.y + Math.sin(angle) * this.cellRadius
        );

        const v = new Vesicle(golgi.position.clone(), 28, 'secretory', target);
        v.label = 'Signal Vesicle';
        for (let i = 0; i < 4; i++) {
            const off = new Vector2D((Math.random()-0.5)*20, (Math.random()-0.5)*20);
            v.cargo.push(new CargoParticle(golgi.position.add(off), off, 'neurotransmitter'));
        }
        this.cargoSystem.addVesicle(v);
        this.cargoSystem.exoEvents++;

        setTimeout(() => {
            this.membrane.addDeformation(angle, 28, -1);
        }, 1000);
    }

    // ── update / draw ──
    update(dt) {
        if (this.membrane) this.membrane.update(dt);
        this.receptors.forEach(r => r.update(dt));
        this.cargoSystem.update(dt);
    }

    draw(mainRenderer, particleRenderer, time) {
        const cx = this.center.x, cy = this.center.y;

        // ── 1. Cell interior fill ──
        mainRenderer.drawGradientCircle(cx, cy, this.cellRadius, [
            { offset: 0,    color: 'rgba(14,22,48,0.6)' },
            { offset: 0.7,  color: 'rgba(10,18,40,0.5)' },
            { offset: 1,    color: 'rgba(8,14,34,0.3)'  }
        ]);

        // ── 2. External particles (behind membrane) on particle canvas ──
        this.cargoSystem.externalParts.forEach(p => p.draw(particleRenderer, time));
        this.cargoSystem.ligands.forEach(l => l.draw(particleRenderer, time));

        // ── 3. Membrane ──
        if (this.membrane) this.membrane.draw(mainRenderer, time);

        // ── 4. Organelles (main canvas) ──
        Object.values(this.organelles).forEach(o => o.draw(mainRenderer, time));

        // ── 5. Receptors ──
        this.receptors.forEach(r => r.draw(mainRenderer, time));

        // ── 6. Coated pits / pseudopods (main canvas, on-membrane) ──
        this.cargoSystem.coatedPits.forEach(cp => cp.draw(mainRenderer, time));
        this.cargoSystem.pseudoPods.forEach(pp => pp.draw(mainRenderer, time));

        // ── 7. Vesicles on particle canvas ──
        this.cargoSystem.vesicles.forEach(v => v.draw(particleRenderer, time));

        // ── 8. Cell outline label ──
        if (window.showLabels && this.membrane && this.membrane.opacity > 0.5) {
            mainRenderer.drawText('Plasma Membrane', cx, cy - this.cellRadius - 18,
                'bold 12px Arial', 'rgba(123,140,222,0.8)');
        }
    }
}

// ==================== SCENE MANAGER ====================
// Scroll-driven narrative — identical pattern to the circulatory system
class SceneManager {
    constructor(system) {
        this.system       = system;
        this.currentScene = null;
        this.scenes       = this.defineScenes();

        // Timers for periodic spawning in later scenes
        this._periodicTimers = [];
    }

    defineScenes() {
        return [
            /* 0 */ { name:'Introduction',           scrollStart:0,    scrollEnd:350,
                      onEnter: () => this.sceneIntro(),
                      onUpdate: (p) => this.updateIntro(p) },
            /* 1 */ { name:'Cell Overview',           scrollStart:350,  scrollEnd:750,
                      onEnter: () => this.sceneCellOverview(),
                      onUpdate: (p) => this.updateCellOverview(p) },
            /* 2 */ { name:'Membrane Zoom',           scrollStart:750,  scrollEnd:1150,
                      onEnter: () => this.sceneMembrane(),
                      onUpdate: (p) => this.updateMembrane(p) },
            /* 3 */ { name:'Organelles',              scrollStart:1150, scrollEnd:1600,
                      onEnter: () => this.sceneOrganelles(),
                      onUpdate: (p) => this.updateOrganelles(p) },
            /* 4 */ { name:'Receptors & Ligands',     scrollStart:1600, scrollEnd:2050,
                      onEnter: () => this.sceneReceptors(),
                      onUpdate: (p) => this.updateReceptors(p) },
            /* 5 */ { name:'Receptor-Mediated Endo',  scrollStart:2050, scrollEnd:2600,
                      onEnter: () => this.sceneReceptorEndo(),
                      onUpdate: (p) => this.updateReceptorEndo(p) },
            /* 6 */ { name:'Phagocytosis',            scrollStart:2600, scrollEnd:3100,
                      onEnter: () => this.scenePhagocytosis(),
                      onUpdate: (p) => this.updatePhagocytosis(p) },
            /* 7 */ { name:'Pinocytosis',             scrollStart:3100, scrollEnd:3550,
                      onEnter: () => this.scenePinocytosis(),
                      onUpdate: (p) => this.updatePinocytosis(p) },
            /* 8 */ { name:'Lysosome Digestion',      scrollStart:3550, scrollEnd:4000,
                      onEnter: () => this.sceneLysosome(),
                      onUpdate: (p) => this.updateLysosome(p) },
            /* 9 */ { name:'Constitutive Exocytosis', scrollStart:4000, scrollEnd:4500,
                      onEnter: () => this.sceneConExo(),
                      onUpdate: (p) => this.updateConExo(p) },
            /*10 */ { name:'Regulated Exocytosis',    scrollStart:4500, scrollEnd:5000,
                      onEnter: () => this.sceneRegExo(),
                      onUpdate: (p) => this.updateRegExo(p) },
            /*11 */ { name:'SNARE Fusion Detail',     scrollStart:5000, scrollEnd:5450,
                      onEnter: () => this.sceneSNARE(),
                      onUpdate: (p) => this.updateSNARE(p) },
            /*12 */ { name:'Membrane Recycling',      scrollStart:5450, scrollEnd:5800,
                      onEnter: () => this.sceneRecycling(),
                      onUpdate: (p) => this.updateRecycling(p) },
            /*13 */ { name:'Complete System',         scrollStart:5800, scrollEnd:6200,
                      onEnter: () => this.sceneComplete(),
                      onUpdate: (p) => this.updateComplete(p) }
        ];
    }

    // ── helpers ──
    _setText(html) {
        document.getElementById('text').innerHTML = html;
    }
    _showPanel(id) {
        const el = document.getElementById(id);
        if (el) el.classList.add('visible');
    }
    _hidePanel(id) {
        const el = document.getElementById(id);
        if (el) el.classList.remove('visible');
    }

    // ── Scene 0: Introduction ──
    sceneIntro() {
        this._setText('Welcome — scroll to explore how cells move molecules across their membranes');
    }
    updateIntro(p) { /* gentle fade handled by body opacity in scroll handler */ }

    // ── Scene 1: Cell Overview ──
    sceneCellOverview() {
        this._setText('🧬 The Cell — a microscopic world of constant activity');
        this._showPanel('info-cell');
        if (this.system.membrane) this.system.membrane.opacity = 0;
        Object.values(this.system.organelles).forEach(o => o.opacity = 0);
    }
    updateCellOverview(p) {
        if (this.system.membrane) this.system.membrane.opacity = Math.min(1, p * 2.2);
    }

    // ── Scene 2: Membrane Zoom ──
    sceneMembrane() {
        this._setText('The Plasma Membrane — a dynamic phospholipid bilayer with embedded proteins');
    }
    updateMembrane(p) {
        if (this.system.membrane) this.system.membrane.opacity = 1;
        // Receptors fade in
        this.system.receptors.forEach((r, i) => {
            r.opacity = Math.min(1, Math.max(0, (p - i * 0.15) * 3));
        });
    }

    // ── Scene 3: Organelles ──
    sceneOrganelles() {
        this._setText('Major organelles — the cell\'s functional machinery');
        this._showPanel('info-cell');
    }
    updateOrganelles(p) {
        const order = ['nucleus','er','golgi','lysosome'];
        order.forEach((name, i) => {
            const o = this.system.organelles[name];
            if (o) {
                const start = i * 0.22;
                o.opacity = Math.min(1, Math.max(0, (p - start) * 4));
            }
        });
    }

    // ── Scene 4: Receptors & Ligands ──
    sceneReceptors() {
        this._setText('Receptors on the membrane wait for specific signal molecules (ligands)');
        this._showPanel('info-endo');
        this.system.receptors.forEach(r => r.opacity = 1);
    }
    updateReceptors(p) {
        // Show ligands drifting near receptors
        if (p > 0.4 && !this._ligandSeeded) {
            this._ligandSeeded = true;
            this.system.receptors.forEach((r, i) => {
                if (i < 3) {
                    const startAngle = r.angle + 0.8;
                    const ligandStart = new Vector2D(
                        this.system.center.x + Math.cos(startAngle) * (this.system.cellRadius + 70),
                        this.system.center.y + Math.sin(startAngle) * (this.system.cellRadius + 70)
                    );
                    this.system.cargoSystem.addLigand(
                        new Ligand(ligandStart, r.angle, this.system.center, this.system.cellRadius)
                    );
                }
            });
        }
    }

    // ── Scene 5: Receptor-Mediated Endocytosis ──
    sceneReceptorEndo() {
        this._setText('⬇️ Receptor-Mediated Endocytosis — ligand binds receptor → clathrin-coated pit forms → vesicle internalizes');
        this._showPanel('info-endo');
        this._ligandSeeded = false;
        // Trigger one event
        this.system.spawnReceptorMediatedEndo(-0.3);
    }
    updateReceptorEndo(p) {
        // Bind receptors visually
        if (p > 0.3) {
            this.system.receptors.forEach(r => { if (!r.bound) { r.bound = true; r.boundTime = 0; } });
        }
    }

    // ── Scene 6: Phagocytosis ──
    scenePhagocytosis() {
        this._setText('🦠 Phagocytosis — pseudopods extend and engulf large particles like bacteria');
        this._showPanel('info-endo');
        // Reset receptor binding
        this.system.receptors.forEach(r => { r.bound = false; });
        this.system.spawnPhagocytosis(0.2);
    }
    updatePhagocytosis(p) {
        if (p > 0.7 && !this._phago2) {
            this._phago2 = true;
            this.system.spawnPhagocytosis(2.8);
        }
    }

    // ── Scene 7: Pinocytosis ──
    scenePinocytosis() {
        this._setText('💧 Pinocytosis — the cell drinks tiny droplets of extracellular fluid');
        this._showPanel('info-endo');
        this._phago2 = false;
        // Trigger several small pinocytosis events
        const angles = [0.5, 1.8, 3.2, 4.5, 5.6];
        angles.forEach((a, i) => setTimeout(() => this.system.spawnPinocytosis(a), i * 400));
    }
    updatePinocytosis(p) { /* pinocytosis events auto-spawn in onEnter */ }

    // ── Scene 8: Lysosome Digestion ──
    sceneLysosome() {
        this._setText('🧪 Lysosomal Digestion — enzymes break down engulfed material');
        this._showPanel('info-endo');
        // Pulse the lysosome
        this.system.organelles.lysosome.opacity = 1;
    }
    updateLysosome(p) {
        // The lysosome naturally pulses via its draw() method
    }

    // ── Scene 9: Constitutive Exocytosis ──
    sceneConExo() {
        this._setText('⬆️ Constitutive Exocytosis — continuous export of proteins from the Golgi');
        this._showPanel('info-exo');
        this.system.spawnConstitutiveExocytosis();
    }
    updateConExo(p) {
        if (p > 0.5 && !this._conExo2) {
            this._conExo2 = true;
            this.system.spawnConstitutiveExocytosis();
        }
    }

    // ── Scene 10: Regulated Exocytosis ──
    sceneRegExo() {
        this._setText('⚡ Regulated Exocytosis — a signal triggers release of neurotransmitters or hormones');
        this._showPanel('info-exo');
        this._conExo2 = false;
        this.system.spawnRegulatedExocytosis();
    }
    updateRegExo(p) {
        if (p > 0.6 && !this._regExo2) {
            this._regExo2 = true;
            this.system.spawnRegulatedExocytosis();
        }
    }

    // ── Scene 11: SNARE Fusion Detail ──
    sceneSNARE() {
        this._setText('🔗 SNARE Proteins — molecular zippers that fuse the vesicle membrane with the plasma membrane');
        this._showPanel('info-exo');
        this._regExo2 = false;
        // Spawn an exo event to watch the fusion
        this.system.spawnRegulatedExocytosis();
    }
    updateSNARE(p) { /* visuals handled by vesicle fusing logic */ }

    // ── Scene 12: Membrane Recycling ──
    sceneRecycling() {
        this._setText('♻️ Membrane Recycling — endocytosed membrane is sorted and recycled back to the surface');
        this._showPanel('info-stats');
        // Show a recycling vesicle: lysosome → membrane
        const lyso = this.system.organelles.lysosome;
        const angle = 2.5;
        const target = new Vector2D(
            this.system.center.x + Math.cos(angle) * this.system.cellRadius,
            this.system.center.y + Math.sin(angle) * this.system.cellRadius
        );
        const v = new Vesicle(lyso.position.clone(), 18, 'exocytic', target);
        v.label = 'Recycled Membrane';
        v.cargo.push(new CargoParticle(lyso.position, new Vector2D(0,0), 'protein'));
        this.system.cargoSystem.addVesicle(v);
        this.system.membrane.addDeformation(angle, 15, -1);
    }
    updateRecycling(p) { /* auto */ }

    // ── Scene 13: Complete System ──
    sceneComplete() {
        this._setText('🧬 The Complete Picture — endocytosis & exocytosis in continuous balance');
        document.getElementById('text').style.fontSize  = '20px';
        document.getElementById('text').style.background = 'rgba(78,205,196,0.22)';

        // Show all controls
        document.getElementById('control-panel').style.display     = 'block';
        document.getElementById('process-selector').style.display  = 'block';
        document.getElementById('info-panels').style.display       = 'block';

        // Show all panels
        ['info-cell','info-endo','info-exo','info-stats'].forEach(id => this._showPanel(id));

        // Start periodic spawning
        this._startPeriodicSpawns();
    }
    updateComplete(p) { /* periodic timers handle spawning */ }

    _startPeriodicSpawns() {
        if (this._periodicStarted) return;
        this._periodicStarted = true;

        const sys = this.system;
        // Endocytosis cycle
        this._periodicTimers.push(setInterval(() => {
            if (sys.activeProcess === 'exocytosis') return;
            const r = Math.random();
            if (r < 0.35) {
                const a = Math.random() * Math.PI * 2;
                sys.spawnPhagocytosis(a);
            } else if (r < 0.7) {
                const a = Math.random() * Math.PI * 2;
                sys.spawnPinocytosis(a);
            } else {
                const a = Math.random() * Math.PI * 2;
                sys.spawnReceptorMediatedEndo(a);
            }
        }, 3500));

        // Exocytosis cycle
        this._periodicTimers.push(setInterval(() => {
            if (sys.activeProcess === 'endocytosis') return;
            Math.random() < 0.5
                ? sys.spawnConstitutiveExocytosis()
                : sys.spawnRegulatedExocytosis();
        }, 2800));
    }

    // ── Main update (called every frame with current scroll) ──
    update(scrollPosition) {
        const activeScene = this.scenes.find(s =>
            scrollPosition >= s.scrollStart && scrollPosition < s.scrollEnd
        );
        if (!activeScene) return;

        if (this.currentScene !== activeScene) {
            if (activeScene.onEnter) activeScene.onEnter();
            this.currentScene = activeScene;
        }
        if (activeScene.onUpdate) {
            const progress = (scrollPosition - activeScene.scrollStart) /
                           (activeScene.scrollEnd - activeScene.scrollStart);
            activeScene.onUpdate(Math.max(0, Math.min(1, progress)));
        }
    }

    cleanup() {
        this._periodicTimers.forEach(t => clearInterval(t));
        this._periodicTimers = [];
    }
}

// ==================== MAIN APPLICATION (≡ CirculatoryApp) ====================
class TransportApp {
    constructor() {
        this.mainRenderer     = null;
        this.particleRenderer = null;
        this.system           = null;
        this.sceneManager     = null;
        this.lastTime         = 0;
        this.isRunning        = false;
        this.showLabels       = true;
        this.speedMultiplier  = 1;
        window.showLabels     = true;
    }

    initialize() {
        // Renderers
        this.mainRenderer     = new CanvasRenderer('mainCanvas',     CONFIG.canvas.width, CONFIG.canvas.height);
        this.particleRenderer = new CanvasRenderer('particleCanvas', CONFIG.canvas.width, CONFIG.canvas.height);

        // Domain system
        this.system = new TransportSystem();
        this.system.initialize();

        // Scene manager
        this.sceneManager = new SceneManager(this.system);

        // Events
        this.setupEventListeners();

        // Loop
        this.isRunning = true;
        this.lastTime  = performance.now();
        this.animate();

        console.log('%c🧬 Endocytosis & Exocytosis Visualization ready', 'color:#4ecdc4; font-weight:bold');
    }

    setupEventListeners() {
        // ── Toggle Labels ──
        const labelsBtn = document.getElementById('toggle-labels');
        if (labelsBtn) {
            labelsBtn.addEventListener('click', () => {
                this.showLabels = !this.showLabels;
                window.showLabels = this.showLabels;
                labelsBtn.textContent = this.showLabels ? 'Hide Labels' : 'Show Labels';
            });
        }

        // ── Toggle Pause ──
        const flowBtn = document.getElementById('toggle-flow');
        if (flowBtn) {
            flowBtn.addEventListener('click', () => {
                if (this.system.cargoSystem.isPaused) {
                    this.system.cargoSystem.resume();
                    flowBtn.textContent = 'Pause Animation';
                } else {
                    this.system.cargoSystem.pause();
                    flowBtn.textContent = 'Resume Animation';
                }
            });
        }

        // ── Speed Toggle ──
        const speedBtn = document.getElementById('toggle-speed');
        if (speedBtn) {
            const speeds = [1, 1.5, 2, 0.5];
            let si = 0;
            speedBtn.addEventListener('click', () => {
                si = (si + 1) % speeds.length;
                this.speedMultiplier = speeds[si];
                speedBtn.textContent = `Speed: ${speeds[si]}×`;
            });
        }

        // ── Process Filter ──
        const processSelect = document.getElementById('process');
        if (processSelect) {
            processSelect.addEventListener('change', (e) => {
                this.system.activeProcess = e.target.value;
            });
        }

        // ── Subtype hint (informational — updates text banner) ──
        const subtypeSelect = document.getElementById('subtype');
        if (subtypeSelect) {
            subtypeSelect.addEventListener('change', (e) => {
                const val = e.target.value;
                const textEl = document.getElementById('text');
                if (val === 'phagocytosis')  textEl.innerHTML = '🦠 Phagocytosis — engulfing large particles';
                else if (val === 'pinocytosis')  textEl.innerHTML = '💧 Pinocytosis — drinking fluid droplets';
                else if (val === 'receptor')     textEl.innerHTML = '🔗 Receptor-Mediated — specific ligand binding';
                else textEl.innerHTML = '🧬 Endocytosis & Exocytosis — the full picture';
            });
        }
    }

    // ── Animation Loop ──
    animate() {
        if (!this.isRunning) return;

        const now = performance.now();
        let dt    = now - this.lastTime;
        this.lastTime = now;
        dt = Math.min(dt, CONFIG.animation.dtCap) * this.speedMultiplier;

        // Clear
        this.mainRenderer.clear();
        this.particleRenderer.clear();

        // Update
        this.system.update(dt);

        // Draw
        this.system.draw(this.mainRenderer, this.particleRenderer, now);

        // Stats
        this.updateStats();

        requestAnimationFrame(() => this.animate());
    }

    updateStats() {
        const cs = this.system.cargoSystem;
        const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
        set('vesicle-count', cs.getActiveVesicleCount());
        set('endo-count',    cs.endoEvents);
        set('exo-count',     cs.exoEvents);
        set('cargo-count',   cs.cargoDelivered);
        // Membrane recycled % — heuristic: delivered / (endo+exo) events
        const total = cs.endoEvents + cs.exoEvents || 1;
        set('recycle-pct', Math.min(100, Math.round((cs.cargoDelivered / total) * 100)));
    }

    handleScroll(scrollPosition) {
        this.sceneManager.update(scrollPosition);
    }

    destroy() {
        this.isRunning = false;
        if (this.sceneManager) this.sceneManager.cleanup();
        if (this.system)       this.system.cargoSystem.clear();
    }
}

// ==================== BOOTSTRAP ====================
let app = null;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;

    // Hero visibility
    if (scroll === 0) {
        document.getElementById('scroll').style.display = 'block';
        document.getElementById('arrow').style.display  = 'block';
    }
    if (scroll > 10) {
        document.getElementById('main').style.opacity  = '1';
        document.getElementById('scroll').style.display = 'none';
        document.getElementById('arrow').style.display  = 'none';
    }

    // Lazy-init app
    if (scroll > 50 && !app) {
        app = new TransportApp();
        app.initialize();
    }

    // Drive scenes
    if (app) app.handleScroll(scroll);

    // Back-to-top button
    document.getElementById('myBtn').style.display = scroll > 5200 ? 'block' : 'none';
}

// ── Welcome alert ──
window.addEventListener('load', () => {
    alert(
        'Welcome to Endocytosis & Exocytosis!\n\n' +
        'An interactive cell-biology visualization.\n\n' +
        'Features:\n' +
        '✓ Animated phospholipid bilayer membrane\n' +
        '✓ Receptor-mediated endocytosis\n' +
        '✓ Phagocytosis & Pinocytosis\n' +
        '✓ Constitutive & Regulated exocytosis\n' +
        '✓ SNARE-protein vesicle fusion\n' +
        '✓ Lysosomal digestion\n' +
        '✓ Live cargo & event statistics\n\n' +
        'Scroll slowly to explore! 🧬'
    );
});

// ── Cleanup ──
window.addEventListener('beforeunload', () => { if (app) app.destroy(); });
