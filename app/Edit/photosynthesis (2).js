// ====================================================================
// PHOTOSYNTHESIS VISUALIZATION — MODULAR OOP ARCHITECTURE
// Mirrors the circulatory-system pattern exactly:
//   CONFIG → Utilities → Renderer → Structures → Particles →
//   Domain orchestrator → SceneManager → App → Init
// ====================================================================

// ==================== CONFIGURATION ====================
const CONFIG = {
    canvas: {
        width: 1200,
        height: 800,
        backgroundColor: 'transparent'
    },
    chloroplast: {
        centerX: 600,
        centerY: 400,
        outerRadiusX: 180,
        outerRadiusY: 130,
        stromaColor: 'rgba(30, 90, 45, 0.55)',
        membraneColor: 'rgba(60, 160, 80, 0.75)'
    },
    thylakoid: {
        granaCount: 3,               // number of grana stacks
        thylakoidPerGranum: 4,       // discs per stack
        discRadiusX: 38,
        discRadiusY: 10,
        color: 'rgba(40, 130, 70, 0.85)',
        strokeColor: 'rgba(80, 200, 100, 0.9)'
    },
    molecules: {
        maxCount: 160,
        baseSpeed: 1.8,
        sizes: { water: 5, oxygen: 4, co2: 5, atp: 6, nadph: 6, g3p: 5, glucose: 7, electron: 3, proton: 3 }
    },
    light: {
        rayCount: 18,
        intensity: 0.75,         // 0–1, synced with slider
        photonCount: 50,
        photonSize: 3
    },
    conditions: {
        drought: {
            stomataClosed: true,
            co2Supply: 0.15,
            lightFactor: 1.0
        },
        shade: {
            stomataClosed: false,
            co2Supply: 1.0,
            lightFactor: 0.2
        },
        highco2: {
            stomataClosed: false,
            co2Supply: 2.5,
            lightFactor: 1.0
        }
    },
    animation: {
        fps: 60,
        moleculeUpdateInterval: 16
    }
};

// ==================== UTILITY CLASSES ====================
class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) { return new Vector2D(this.x + v.x, this.y + v.y); }
    subtract(v) { return new Vector2D(this.x - v.x, this.y - v.y); }
    multiply(s) { return new Vector2D(this.x * s, this.y * s); }
    magnitude() { return Math.sqrt(this.x * this.x + this.y * this.y); }
    normalize() {
        const m = this.magnitude();
        return m > 0 ? new Vector2D(this.x / m, this.y / m) : new Vector2D(0, 0);
    }
    distance(v) { return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2); }
    clone() { return new Vector2D(this.x, this.y); }
}

class Color {
    constructor(r, g, b, a = 1) {
        this.r = r; this.g = g; this.b = b; this.a = a;
    }
    toString() { return `rgba(${Math.round(this.r)},${Math.round(this.g)},${Math.round(this.b)},${this.a.toFixed(3)})`; }

    static fromHex(hex) {
        const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return res ? new Color(parseInt(res[1],16), parseInt(res[2],16), parseInt(res[3],16)) : null;
    }

    lerp(target, t) {
        return new Color(
            this.r + (target.r - this.r) * t,
            this.g + (target.g - this.g) * t,
            this.b + (target.b - this.b) * t,
            this.a + (target.a - this.a) * t
        );
    }
}

// ==================== CANVAS RENDERER ====================
class CanvasRenderer {
    constructor(canvasId, width, height) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.width = width;
        this.height = height;
        this.canvas.width = width;
        this.canvas.height = height;
    }

    clear() { this.ctx.clearRect(0, 0, this.width, this.height); }

    drawCircle(x, y, r, fill, stroke = null, lw = 1) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, Math.PI * 2);
        if (fill) { this.ctx.fillStyle = fill; this.ctx.fill(); }
        if (stroke) { this.ctx.strokeStyle = stroke; this.ctx.lineWidth = lw; this.ctx.stroke(); }
    }

    drawEllipse(x, y, rx, ry, fill, stroke = null, lw = 1, rot = 0) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(rot);
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        if (fill) { this.ctx.fillStyle = fill; this.ctx.fill(); }
        if (stroke) { this.ctx.strokeStyle = stroke; this.ctx.lineWidth = lw; this.ctx.stroke(); }
        this.ctx.restore();
    }

    drawPath(points, strokeColor, lw = 2, closed = false) {
        if (points.length < 2) return;
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) this.ctx.lineTo(points[i].x, points[i].y);
        if (closed) this.ctx.closePath();
        this.ctx.strokeStyle = strokeColor;
        this.ctx.lineWidth = lw;
        this.ctx.stroke();
    }

    fillPolygon(points, fill) {
        if (points.length < 3) return;
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) this.ctx.lineTo(points[i].x, points[i].y);
        this.ctx.closePath();
        this.ctx.fillStyle = fill;
        this.ctx.fill();
    }

    drawText(text, x, y, font = '14px Arial', color = '#fff', align = 'center') {
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = align;
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(text, x, y);
    }

    drawGradientCircle(x, y, r, stops) {
        const g = this.ctx.createRadialGradient(x, y, 0, x, y, r);
        stops.forEach(s => g.addColorStop(s.offset, s.color));
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, Math.PI * 2);
        this.ctx.fillStyle = g;
        this.ctx.fill();
    }

    drawLinearGradientRect(x, y, w, h, stops, angle = 0) {
        this.ctx.save();
        this.ctx.translate(x + w / 2, y + h / 2);
        this.ctx.rotate(angle);
        const g = this.ctx.createLinearGradient(-w/2, 0, w/2, 0);
        stops.forEach(s => g.addColorStop(s.offset, s.color));
        this.ctx.fillStyle = g;
        this.ctx.fillRect(-w/2, -h/2, w, h);
        this.ctx.restore();
    }

    bezierCurve(sx,sy, cx1,cy1, cx2,cy2, ex,ey, stroke, lw = 2) {
        this.ctx.beginPath();
        this.ctx.moveTo(sx, sy);
        this.ctx.bezierCurveTo(cx1,cy1, cx2,cy2, ex, ey);
        this.ctx.strokeStyle = stroke;
        this.ctx.lineWidth = lw;
        this.ctx.stroke();
    }
}

// ==================== ANATOMICAL STRUCTURES ====================

/* ── Photon (sunlight particle on lightCanvas) ── */
class Photon {
    constructor(x, y) {
        this.position = new Vector2D(x, y);
        this.size = CONFIG.light.photonSize + Math.random() * 2;
        this.speed = 2.2 + Math.random() * 1.5;
        // Aim toward chloroplast center with slight scatter
        const cx = CONFIG.chloroplast.centerX;
        const cy = CONFIG.chloroplast.centerY;
        const angle = Math.atan2(cy - y, cx - x) + (Math.random() - 0.5) * 0.55;
        this.velocity = new Vector2D(Math.cos(angle) * this.speed, Math.sin(angle) * this.speed);
        this.opacity = 0.7 + Math.random() * 0.3;
        this.life = 1;
        this.absorbed = false;
    }

    update() {
        if (this.absorbed) return;
        this.position = this.position.add(this.velocity);
        // Check if reached chloroplast envelope
        const dx = (this.position.x - CONFIG.chloroplast.centerX) / CONFIG.chloroplast.outerRadiusX;
        const dy = (this.position.y - CONFIG.chloroplast.centerY) / CONFIG.chloroplast.outerRadiusY;
        if (dx * dx + dy * dy < 1.1) {
            this.absorbed = true;
        }
        // Off-screen
        if (this.position.x > CONFIG.canvas.width || this.position.y > CONFIG.canvas.height ||
            this.position.x < 0 || this.position.y < 0) {
            this.life = 0;
        }
    }

    draw(renderer) {
        if (this.life <= 0) return;
        const alpha = this.absorbed ? Math.max(0, this.opacity - 0.08) : this.opacity;
        if (this.absorbed) this.opacity -= 0.06;
        if (this.opacity <= 0) this.life = 0;

        renderer.drawGradientCircle(this.position.x, this.position.y, this.size, [
            { offset: 0, color: `rgba(255,230,80,${alpha})` },
            { offset: 0.6, color: `rgba(255,200,50,${alpha * 0.6})` },
            { offset: 1,   color: `rgba(255,180,30,0)` }
        ]);
    }
}

/* ── Sunlight Ray (static background lines on lightCanvas) ── */
class LightRaySystem {
    constructor() {
        this.rays = [];
        this.photons = [];
        this.intensity = CONFIG.light.intensity;
        this.active = true;
        this.generateRays();
    }

    generateRays() {
        this.rays = [];
        const count = CONFIG.light.rayCount;
        // Rays come from upper-right quadrant (sun position)
        for (let i = 0; i < count; i++) {
            const t = i / (count - 1);
            // Fan of rays across the top-right
            const startX = CONFIG.canvas.width * (0.55 + t * 0.45);
            const startY = -20 + t * 60;
            const endX = startX - CONFIG.canvas.width * 0.7;
            const endY = startY + CONFIG.canvas.height * 0.9;
            this.rays.push({ start: new Vector2D(startX, startY), end: new Vector2D(endX, endY) });
        }
    }

    spawnPhotons() {
        if (!this.active) return;
        const count = Math.floor(CONFIG.light.photonCount * this.intensity);
        for (let i = 0; i < count; i++) {
            // Spawn along the ray fan edge
            const t = Math.random();
            const startX = CONFIG.canvas.width * (0.55 + t * 0.45);
            const startY = -10 + t * 50;
            this.photons.push(new Photon(startX, startY));
        }
    }

    update() {
        this.photons.forEach(p => p.update());
        this.photons = this.photons.filter(p => p.life > 0);

        // Spawn new photons each frame
        if (this.active && Math.random() < 0.7) {
            const count = Math.max(1, Math.floor(3 * this.intensity));
            for (let i = 0; i < count; i++) {
                const t = Math.random();
                const startX = CONFIG.canvas.width * (0.55 + t * 0.45);
                const startY = -10 + t * 50;
                this.photons.push(new Photon(startX, startY));
            }
        }
        // Cap photon count
        while (this.photons.length > CONFIG.light.photonCount * 2) {
            this.photons.shift();
        }
    }

    draw(renderer) {
        const ctx = renderer.ctx;
        // Background rays (subtle gradient lines)
        this.rays.forEach((ray, i) => {
            ctx.save();
            const g = ctx.createLinearGradient(ray.start.x, ray.start.y, ray.end.x, ray.end.y);
            g.addColorStop(0, `rgba(255,220,80,${0.12 * this.intensity})`);
            g.addColorStop(0.4, `rgba(255,200,60,${0.07 * this.intensity})`);
            g.addColorStop(1, `rgba(255,180,40,0)`);
            ctx.strokeStyle = g;
            ctx.lineWidth = 8 + (i % 3) * 5;
            ctx.globalAlpha = this.intensity;
            ctx.beginPath();
            ctx.moveTo(ray.start.x, ray.start.y);
            ctx.lineTo(ray.end.x, ray.end.y);
            ctx.stroke();
            ctx.restore();
        });

        // Photon particles
        this.photons.forEach(p => p.draw(renderer));
    }
}

/* ── Stomata (pore pair on leaf surface) ── */
class Stomata {
    constructor(position, size = 18) {
        this.position = position;
        this.size = size;
        this.isOpen = true;
        this.openness = 1;           // 0 closed → 1 open
        this.targetOpenness = 1;
        this.opacity = 0;
    }

    setOpen(open) { this.targetOpenness = open ? 1 : 0; }

    update(dt) {
        // Smooth transition
        this.openness += (this.targetOpenness - this.openness) * 0.04;
    }

    draw(renderer) {
        if (this.opacity <= 0) return;
        const x = this.position.x, y = this.position.y;
        const s = this.size;
        const ctx = renderer.ctx;

        ctx.save();
        ctx.globalAlpha = this.opacity;

        // Outer guard-cell outline
        ctx.beginPath();
        ctx.ellipse(x, y, s, s * 0.55, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(40,100,55,0.7)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(80,180,90,0.85)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Two guard cells (bean shapes) with opening gap
        const gap = s * 0.18 * this.openness;
        // Left guard cell
        ctx.beginPath();
        ctx.ellipse(x - gap, y, s * 0.55, s * 0.42, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(60,150,75,0.8)';
        ctx.fill();
        // Right guard cell
        ctx.beginPath();
        ctx.ellipse(x + gap, y, s * 0.55, s * 0.42, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(60,150,75,0.8)';
        ctx.fill();

        // Central pore (dark opening)
        if (this.openness > 0.05) {
            ctx.beginPath();
            ctx.ellipse(x, y, s * 0.22 * this.openness, s * 0.35, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(15,40,20,0.9)';
            ctx.fill();
        }

        // Label
        if (window.showLabels && this.opacity > 0.6) {
            renderer.drawText(
                this.openness > 0.5 ? 'Stomata (open)' : 'Stomata (closed)',
                x, y + s + 14,
                '11px Arial',
                this.openness > 0.5 ? '#a8f5b0' : '#f5a8a8'
            );
        }
        ctx.restore();
    }
}

/* ── LeafSurface (the big green leaf behind everything) ── */
class LeafSurface {
    constructor(cx, cy) {
        this.center = new Vector2D(cx, cy);
        this.opacity = 0;
        this.stomataList = [];
        this.veins = [];   // midrib + lateral veins as path arrays
        this.generateVeins();
        this.generateStomata();
    }

    generateVeins() {
        const cx = this.center.x, cy = this.center.y;
        // Midrib
        this.veins.push({
            points: [
                new Vector2D(cx, cy + 260),
                new Vector2D(cx, cy + 100),
                new Vector2D(cx, cy - 100),
                new Vector2D(cx, cy - 260)
            ],
            width: 3, color: 'rgba(60,140,70,0.55)'
        });
        // Lateral veins (left & right)
        for (let i = -3; i <= 3; i++) {
            if (i === 0) continue;
            const yBase = cy + i * 70;
            const dir = i < 0 ? -1 : 1; // left veins go left, right go right
            this.veins.push({
                points: [
                    new Vector2D(cx, yBase),
                    new Vector2D(cx + dir * 60, yBase - dir * 20),
                    new Vector2D(cx + dir * 130, yBase - dir * 45)
                ],
                width: 1.5, color: 'rgba(60,140,70,0.35)'
            });
        }
    }

    generateStomata() {
        // Scatter stomata on lower half of leaf
        const cx = this.center.x, cy = this.center.y;
        const positions = [
            new Vector2D(cx - 80, cy + 60),
            new Vector2D(cx + 90, cy + 40),
            new Vector2D(cx - 50, cy + 130),
            new Vector2D(cx + 70, cy + 110),
            new Vector2D(cx - 10, cy + 180),
            new Vector2D(cx + 40, cy + 170),
            new Vector2D(cx - 100, cy + 150),
        ];
        positions.forEach(p => this.stomataList.push(new Stomata(p, 16 + Math.random() * 6)));
    }

    setStomataOpen(open) {
        this.stomataList.forEach(s => s.setOpen(open));
    }

    update(dt) {
        this.stomataList.forEach(s => s.update(dt));
    }

    draw(renderer) {
        if (this.opacity <= 0) return;
        const ctx = renderer.ctx;
        const cx = this.center.x, cy = this.center.y;

        ctx.save();
        ctx.globalAlpha = this.opacity;

        // Leaf shape (smooth ellipse with pointed tips)
        ctx.beginPath();
        ctx.moveTo(cx, cy - 270);
        ctx.bezierCurveTo(cx + 140, cy - 220, cx + 160, cy - 50, cx + 140, cy + 60);
        ctx.bezierCurveTo(cx + 100, cy + 180, cx + 40, cy + 250, cx, cy + 270);
        ctx.bezierCurveTo(cx - 40, cy + 250, cx - 100, cy + 180, cx - 140, cy + 60);
        ctx.bezierCurveTo(cx - 160, cy - 50, cx - 140, cy - 220, cx, cy - 270);
        ctx.closePath();

        // Fill with gradient
        const grad = ctx.createRadialGradient(cx - 20, cy - 40, 20, cx, cy, 280);
        grad.addColorStop(0, 'rgba(55,140,65,0.38)');
        grad.addColorStop(0.6, 'rgba(35,100,48,0.28)');
        grad.addColorStop(1, 'rgba(25,70,35,0.12)');
        ctx.fillStyle = grad;
        ctx.fill();

        // Leaf edge
        ctx.strokeStyle = 'rgba(70,170,80,0.45)';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.restore();

        // Veins
        ctx.save();
        ctx.globalAlpha = this.opacity;
        this.veins.forEach(v => renderer.drawPath(v.points, v.color, v.width));
        ctx.restore();

        // Stomata
        this.stomataList.forEach(s => {
            s.opacity = this.opacity;
            s.draw(renderer);
        });
    }
}

/* ── Thylakoid Disc (single membrane disc in a granum) ── */
class ThylakoidDisc {
    constructor(cx, cy, index, total) {
        this.center = new Vector2D(cx, cy);
        this.index = index;
        this.total = total;
        this.rx = CONFIG.thylakoid.discRadiusX;
        this.ry = CONFIG.thylakoid.discRadiusY;
        // Slight y offset per disc for stacking
        this.center.y = cy - (total / 2 - index) * (CONFIG.thylakoid.discRadiusY * 1.6);
        this.hasETC = (index === Math.floor(total / 2)); // one disc hosts ETC
        this.pulsePhase = Math.random() * Math.PI * 2;
    }

    draw(renderer, time) {
        const pulse = 1 + Math.sin(time * 0.003 + this.pulsePhase) * 0.04;
        const rx = this.rx * pulse;
        const ry = this.ry * pulse;

        // Shadow / depth
        renderer.drawEllipse(
            this.center.x + 2, this.center.y + 2,
            rx, ry,
            'rgba(0,0,0,0.25)', null, 0
        );

        // Main disc fill
        renderer.drawEllipse(
            this.center.x, this.center.y,
            rx, ry,
            CONFIG.thylakoid.color,
            CONFIG.thylakoid.strokeColor, 2
        );

        // Inner highlight
        renderer.drawEllipse(
            this.center.x - 4, this.center.y - 2,
            rx * 0.55, ry * 0.45,
            'rgba(80,200,110,0.2)', null, 0
        );
    }
}

/* ── Granum (stack of thylakoids) ── */
class Granum {
    constructor(position, index) {
        this.position = position;
        this.index = index;
        this.discs = [];
        this.opacity = 0;
        const count = CONFIG.thylakoid.thylakoidPerGranum;
        for (let i = 0; i < count; i++) {
            this.discs.push(new ThylakoidDisc(position.x, position.y, i, count));
        }
    }

    draw(renderer, time) {
        if (this.opacity <= 0) return;
        const ctx = renderer.ctx;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        // Draw discs bottom-to-top
        for (let i = 0; i < this.discs.length; i++) {
            this.discs[i].draw(renderer, time);
        }
        ctx.restore();

        // Label
        if (window.showLabels && this.opacity > 0.6) {
            renderer.drawText('Granum', this.position.x, this.position.y + 42,
                '11px Arial', 'rgba(160,240,180,0.9)');
        }
    }
}

/* ── Electron Transport Chain visualization (on thylakoid membrane) ── */
class ElectronTransportChain {
    constructor(position) {
        this.position = position;           // center of the thylakoid hosting ETC
        this.complexes = [];                // PS-II, PQ, Cyt-b6f, PC, PS-I, Ferr
        this.opacity = 0;
        this.electronPhase = 0;
        this.setup();
    }

    setup() {
        // Place complexes along an arc on the thylakoid membrane
        const cx = this.position.x, cy = this.position.y;
        const labels = ['PS II', 'PQ', 'Cyt b6f', 'PC', 'PS I', 'Fd'];
        const colors = [
            'rgba(255,120,80,0.85)',   // PS II – orange
            'rgba(200,180,60,0.85)',   // PQ   – yellow-brown
            'rgba(100,170,220,0.85)',  // Cyt  – steel blue
            'rgba(180,140,220,0.85)',  // PC   – purple
            'rgba(80,190,130,0.85)',   // PS I – teal
            'rgba(220,200,80,0.85)'   // Ferr – gold
        ];
        const count = labels.length;
        for (let i = 0; i < count; i++) {
            const t = i / (count - 1);
            // Spread along x with slight y arc
            const x = cx - 90 + t * 180;
            const y = cy - 8 + Math.sin(t * Math.PI) * 12;
            this.complexes.push({ pos: new Vector2D(x, y), label: labels[i], color: colors[i], r: 7 });
        }
    }

    draw(renderer, time) {
        if (this.opacity <= 0) return;
        const ctx = renderer.ctx;
        ctx.save();
        ctx.globalAlpha = this.opacity;

        // Connecting arcs between complexes
        for (let i = 0; i < this.complexes.length - 1; i++) {
            const a = this.complexes[i], b = this.complexes[i + 1];
            ctx.beginPath();
            ctx.moveTo(a.pos.x, a.pos.y);
            ctx.quadraticCurveTo(
                (a.pos.x + b.pos.x) / 2, a.pos.y - 14,
                b.pos.x, b.pos.y
            );
            ctx.strokeStyle = 'rgba(180,220,180,0.35)';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        // Complexes
        this.complexes.forEach((c, i) => {
            // Glow
            renderer.drawGradientCircle(c.pos.x, c.pos.y, c.r + 5, [
                { offset: 0, color: c.color },
                { offset: 0.6, color: c.color.replace('0.85', '0.3') },
                { offset: 1,  color: 'rgba(0,0,0,0)' }
            ]);
            // Core
            renderer.drawCircle(c.pos.x, c.pos.y, c.r, c.color, 'rgba(255,255,255,0.3)', 1.5);
            // Label
            if (window.showLabels) {
                renderer.drawText(c.label, c.pos.x, c.pos.y - c.r - 7,
                    '9px Arial', 'rgba(220,240,220,0.9)');
            }
        });

        // Animated electron dot traveling along the chain
        this.electronPhase = (this.electronPhase + 0.012) % 1;
        const idx = this.electronPhase * (this.complexes.length - 1);
        const i0 = Math.floor(idx);
        const i1 = Math.min(i0 + 1, this.complexes.length - 1);
        const frac = idx - i0;
        const ex = this.complexes[i0].pos.x + (this.complexes[i1].pos.x - this.complexes[i0].pos.x) * frac;
        const ey = this.complexes[i0].pos.y + (this.complexes[i1].pos.y - this.complexes[i0].pos.y) * frac
                   - Math.sin(frac * Math.PI) * 10;

        renderer.drawGradientCircle(ex, ey, 4, [
            { offset: 0, color: 'rgba(180,220,255,1)' },
            { offset: 0.5, color: 'rgba(120,180,255,0.7)' },
            { offset: 1,  color: 'rgba(80,140,255,0)' }
        ]);

        ctx.restore();
    }
}

/* ── Chloroplast (central organelle — mirrors Heart) ── */
class Chloroplast {
    constructor(cx, cy) {
        this.center = new Vector2D(cx, cy);
        this.outerRx = CONFIG.chloroplast.outerRadiusX;
        this.outerRy = CONFIG.chloroplast.outerRadiusY;
        this.opacity = 0;
        this.grana = [];
        this.etc = null;          // ElectronTransportChain
        this.pulsePhase = 0;
        this.createGrana();
    }

    createGrana() {
        const cx = this.center.x, cy = this.center.y;
        // Three grana positioned inside chloroplast
        const positions = [
            new Vector2D(cx - 65, cy - 15),
            new Vector2D(cx + 10, cy + 25),
            new Vector2D(cx + 70, cy - 30)
        ];
        positions.forEach((p, i) => this.grana.push(new Granum(p, i)));

        // ETC on the middle granum's central disc
        const midGranum = this.grana[1];
        const midDisc = midGranum.discs[Math.floor(midGranum.discs.length / 2)];
        this.etc = new ElectronTransportChain(midDisc.center);
    }

    draw(renderer, time) {
        if (this.opacity <= 0) return;
        const ctx = renderer.ctx;
        ctx.save();
        ctx.globalAlpha = this.opacity;

        const cx = this.center.x, cy = this.center.y;

        // Subtle pulsing (chloroplast metabolic activity)
        this.pulsePhase += 0.02;
        const pulse = 1 + Math.sin(this.pulsePhase) * 0.008;
        const rx = this.outerRx * pulse;
        const ry = this.outerRy * pulse;

        // Outer membrane shadow
        renderer.drawEllipse(cx + 3, cy + 3, rx, ry,
            'rgba(0,0,0,0.25)', null);

        // Outer membrane (double layer illusion)
        renderer.drawEllipse(cx, cy, rx, ry,
            'rgba(25,65,35,0.45)',
            'rgba(70,180,85,0.6)', 3);
        // Inner membrane
        renderer.drawEllipse(cx, cy, rx - 6, ry - 5,
            null,
            'rgba(90,200,100,0.35)', 1.5);

        // Stroma fill (fluid matrix)
        renderer.drawEllipse(cx, cy, rx - 10, ry - 9,
            CONFIG.chloroplast.stromaColor, null);

        // "Stroma" label
        if (window.showLabels) {
            renderer.drawText('Stroma', cx - rx + 38, cy + ry - 25,
                'italic 12px Arial', 'rgba(180,240,190,0.7)');
        }

        ctx.restore();

        // Grana (inside stroma)
        this.grana.forEach(g => {
            g.opacity = this.opacity;
            g.draw(renderer, time);
        });

        // ETC
        if (this.etc) {
            this.etc.opacity = this.opacity;
            this.etc.draw(renderer, time);
        }

        // Outer membrane label
        if (window.showLabels && this.opacity > 0.6) {
            renderer.drawText('Chloroplast', cx, cy - ry - 16,
                'bold 14px Arial', 'rgba(140,240,160,0.95)');
        }
    }
}

// ==================== MOLECULE / PARTICLE SYSTEM ====================

/* Molecule types & colours */
const MOLECULE_COLORS = {
    water:     new Color(80,  180, 255, 1),   // cyan
    oxygen:    new Color(180, 230, 255, 1),   // light cyan
    co2:       new Color(160, 140, 200, 1),   // lavender
    atp:       new Color(255, 200,  50, 1),   // gold
    nadph:     new Color(255, 160,  80, 1),   // amber
    g3p:       new Color(120, 220, 150, 1),   // spring green
    glucose:   new Color(255, 120,  60, 1),   // orange
    electron:  new Color(100, 180, 255, 1),   // sky blue
    proton:    new Color(255, 100, 100, 1)    // red
};

const MOLECULE_LABELS = {
    water: 'H₂O', oxygen: 'O₂', co2: 'CO₂', atp: 'ATP',
    nadph: 'NADPH', g3p: 'G3P', glucose: 'C₆H₁₂O₆', electron: 'e⁻', proton: 'H⁺'
};

class Molecule {
    constructor(type, position, target, vessel = null) {
        this.type = type;
        this.position = position.clone();
        this.target = target.clone();
        this.vessel = vessel;          // optional pathway reference
        this.size = CONFIG.molecules.sizes[type] || 4;
        this.opacity = 1;
        this.life = 1;
        this.isActive = true;
        this.speed = CONFIG.molecules.baseSpeed * (0.7 + Math.random() * 0.6);
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleAmp = 1.5 + Math.random() * 2;
        // Trail
        this.trail = [];
        this.trailMax = 6;
    }

    getColor() {
        const base = MOLECULE_COLORS[this.type] || new Color(255,255,255,1);
        return new Color(base.r, base.g, base.b, base.a * this.opacity);
    }

    update(dt, time) {
        if (!this.isActive) return;

        // Record trail
        this.trail.push(this.position.clone());
        if (this.trail.length > this.trailMax) this.trail.shift();

        // Move toward target with wobble
        const dir = this.target.subtract(this.position);
        const dist = dir.magnitude();
        if (dist < 3) {
            // Arrived
            this.isActive = false;
            this.life = 0;
            return;
        }
        const norm = dir.normalize();
        // Perpendicular wobble
        const perp = new Vector2D(-norm.y, norm.x);
        const wobbleOffset = Math.sin(time * 0.006 + this.wobble) * this.wobbleAmp;
        const move = norm.multiply(this.speed).add(perp.multiply(wobbleOffset * 0.15));
        this.position = this.position.add(move);
    }

    draw(renderer) {
        if (!this.isActive && this.life <= 0) return;
        const color = this.getColor();
        const x = this.position.x, y = this.position.y;

        // Trail
        for (let i = 0; i < this.trail.length; i++) {
            const a = (i / this.trail.length) * 0.35 * this.opacity;
            renderer.drawCircle(
                this.trail[i].x, this.trail[i].y,
                this.size * (i / this.trail.length) * 0.7,
                `rgba(${color.r|0},${color.g|0},${color.b|0},${a})`,
                null
            );
        }

        // Glow
        renderer.drawGradientCircle(x, y, this.size + 4, [
            { offset: 0, color: color.toString() },
            { offset: 0.5, color: `rgba(${color.r|0},${color.g|0},${color.b|0},${this.opacity * 0.4})` },
            { offset: 1,  color: 'rgba(0,0,0,0)' }
        ]);

        // Core
        renderer.drawCircle(x, y, this.size, color.toString(), 'rgba(255,255,255,0.25)', 1);

        // Label (only for larger molecules)
        if (window.showLabels && this.size >= 5) {
            renderer.drawText(
                MOLECULE_LABELS[this.type] || this.type,
                x, y - this.size - 6,
                '9px Arial',
                `rgba(${color.r|0},${color.g|0},${color.b|0},${this.opacity * 0.9})`
            );
        }
    }
}

/* ── Pathway (connects two points; molecules travel along it) ── */
class MolecularPathway {
    constructor(name, points, color, width = 2) {
        this.name = name;
        this.points = points;
        this.color = color;
        this.width = width;
        this.opacity = 0;
    }

    getPointAtT(t) {
        // Clamp
        t = Math.max(0, Math.min(1, t));
        const idx = Math.floor(t * (this.points.length - 1));
        const next = Math.min(idx + 1, this.points.length - 1);
        const frac = (t * (this.points.length - 1)) - idx;
        return new Vector2D(
            this.points[idx].x + (this.points[next].x - this.points[idx].x) * frac,
            this.points[idx].y + (this.points[next].y - this.points[idx].y) * frac
        );
    }

    draw(renderer) {
        if (this.opacity <= 0) return;
        const ctx = renderer.ctx;
        ctx.save();
        ctx.globalAlpha = this.opacity;

        // Dashed glow line
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.setLineDash([8, 6]);
        ctx.lineDashOffset = -Date.now() * 0.04; // animated dash
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.restore();

        // Label at midpoint
        if (window.showLabels && this.opacity > 0.5) {
            const mid = this.getPointAtT(0.5);
            renderer.drawText(this.name, mid.x, mid.y - 10,
                '10px Arial', this.color);
        }
    }
}

/* ── MoleculeSystem (mirrors ParticleSystem exactly) ── */
class MoleculeSystem {
    constructor() {
        this.molecules = [];
        this.maxMolecules = CONFIG.molecules.maxCount;
        this.isPaused = false;
        // Counters
        this.atpProduced = 0;
        this.o2Released = 0;
        this.glucoseFormed = 0;
    }

    addMolecule(mol) {
        if (this.molecules.length < this.maxMolecules) {
            this.molecules.push(mol);
        }
    }

    update(dt, time) {
        if (this.isPaused) return;
        this.molecules.forEach(m => m.update(dt, time));
        // Remove dead molecules
        this.molecules = this.molecules.filter(m => m.isActive);
    }

    draw(renderer) {
        this.molecules.forEach(m => m.draw(renderer));
    }

    pause() { this.isPaused = true; }
    resume() { this.isPaused = false; }
    clear() { this.molecules = []; }

    getActiveCount() { return this.molecules.length; }
}

// ==================== PHOTOSYNTHESIS SYSTEM (mirrors CirculatorySystem) ====================
class PhotosynthesisSystem {
    constructor() {
        this.leaf = null;
        this.chloroplast = null;
        this.lightRays = null;
        this.pathways = {};
        this.moleculeSystem = new MoleculeSystem();
        this.currentCondition = 'normal';
        this.lightActive = true;
        this.lightIntensity = CONFIG.light.intensity;
    }

    initialize(cx, cy) {
        this.leaf = new LeafSurface(cx, cy);
        this.chloroplast = new Chloroplast(cx, cy);
        this.lightRays = new LightRaySystem();
        this.createPathways(cx, cy);
    }

    createPathways(cx, cy) {
        // ── Water uptake path (from below into chloroplast) ──
        this.pathways.waterUptake = new MolecularPathway(
            'H₂O uptake',
            [
                new Vector2D(cx - 60, cy + 300),   // leaf base
                new Vector2D(cx - 60, cy + 180),
                new Vector2D(cx - 60, cy + 80),
                new Vector2D(cx - 50, cy + 10),
                new Vector2D(cx - 40, cy)           // chloroplast edge
            ],
            'rgba(80,180,255,0.7)', 2
        );

        // ── CO₂ intake path (through stomata into chloroplast) ──
        this.pathways.co2Intake = new MolecularPathway(
            'CO₂ intake',
            [
                new Vector2D(cx + 180, cy + 100),  // outside leaf
                new Vector2D(cx + 90, cy + 40),    // through stomata
                new Vector2D(cx + 50, cy + 10),
                new Vector2D(cx + 20, cy + 5)      // stroma
            ],
            'rgba(160,140,200,0.7)', 2
        );

        // ── Light reaction pathway (thylakoid → produces ATP + NADPH) ──
        this.pathways.lightReaction = new MolecularPathway(
            'Light Reactions',
            [
                new Vector2D(cx + 10, cy + 25),    // granum center
                new Vector2D(cx + 30, cy + 10),
                new Vector2D(cx + 50, cy - 5),
                new Vector2D(cx + 65, cy - 25)     // exits toward stroma
            ],
            'rgba(255,200,50,0.75)', 2.5
        );

        // ── O₂ release path (thylakoid → out of chloroplast → out of leaf) ──
        this.pathways.o2Release = new MolecularPathway(
            'O₂ release',
            [
                new Vector2D(cx - 65, cy - 15),    // PS II location (water splitting)
                new Vector2D(cx - 90, cy - 40),
                new Vector2D(cx - 130, cy - 60),
                new Vector2D(cx - 170, cy - 90),   // exits chloroplast
                new Vector2D(cx - 200, cy - 140),  // exits leaf
                new Vector2D(cx - 240, cy - 200)   // atmosphere
            ],
            'rgba(180,230,255,0.7)', 2
        );

        // ── Calvin Cycle pathway (stroma loop: CO₂ fixation → G3P) ──
        this.pathways.calvinCycle = new MolecularPathway(
            'Calvin Cycle',
            [
                new Vector2D(cx + 20, cy + 5),     // CO₂ enters stroma
                new Vector2D(cx + 40, cy - 30),    // RuBisCO fixes CO₂
                new Vector2D(cx + 55, cy - 55),    // 3-PGA formed
                new Vector2D(cx + 30, cy - 70),    // G3P produced
                new Vector2D(cx, cy - 50)           // G3P exits
            ],
            'rgba(120,220,150,0.75)', 2.5
        );

        // ── Glucose export path (G3P → glucose → out of leaf) ──
        this.pathways.glucoseExport = new MolecularPathway(
            'Glucose export',
            [
                new Vector2D(cx, cy - 50),         // G3P in stroma
                new Vector2D(cx - 30, cy - 40),    // leaves chloroplast
                new Vector2D(cx - 60, cy - 20),
                new Vector2D(cx - 80, cy + 30),    // enters phloem vein
                new Vector2D(cx - 70, cy + 100),
                new Vector2D(cx - 40, cy + 200)    // down the leaf vein
            ],
            'rgba(255,120,60,0.7)', 2
        );

        // ── ATP/NADPH shuttle (thylakoid → stroma for Calvin) ──
        this.pathways.atpShuttle = new MolecularPathway(
            'ATP/NADPH → Stroma',
            [
                new Vector2D(cx + 65, cy - 25),    // exits thylakoid
                new Vector2D(cx + 50, cy - 45),
                new Vector2D(cx + 35, cy - 60),    // arrives at Calvin cycle
                new Vector2D(cx + 25, cy - 55)
            ],
            'rgba(255,180,60,0.7)', 2
        );
    }

    // ── Molecule spawning helpers ──
    spawnMolecule(type, startPos, endPos) {
        const mol = new Molecule(type, startPos, endPos);
        this.moleculeSystem.addMolecule(mol);
        return mol;
    }

    spawnAlongPathway(pathway, type) {
        const start = pathway.getPointAtT(0);
        const end   = pathway.getPointAtT(1);
        return this.spawnMolecule(type, start, end);
    }

    // ── Condition / scenario application (mirrors applyScenario) ──
    applyCondition(condition) {
        this.currentCondition = condition;

        // Reset to normal first
        this.lightIntensity = CONFIG.light.intensity;
        this.leaf.setStomataOpen(true);
        this.lightRays.active = true;

        switch (condition) {
            case 'drought':
                this.leaf.setStomataOpen(false);
                // CO₂ intake blocked → reduce Calvin cycle spawning
                break;
            case 'shade':
                this.lightIntensity = 0.2;
                this.lightRays.intensity = 0.2;
                this.lightRays.active = true;
                break;
            case 'highco2':
                // Stomata wide open, extra CO₂
                this.leaf.setStomataOpen(true);
                break;
            case 'normal':
            default:
                break;
        }
        this.lightRays.intensity = this.lightIntensity;
        CONFIG.light.intensity = this.lightIntensity;
    }

    setLight(on) {
        this.lightActive = on;
        this.lightRays.active = on;
        if (!on) {
            this.lightRays.intensity = 0;
        } else {
            this.lightRays.intensity = this.lightIntensity;
        }
    }

    setLightIntensity(val) {
        this.lightIntensity = val;
        this.lightRays.intensity = val;
        CONFIG.light.intensity = val;
    }

    update(dt, time) {
        if (this.leaf) this.leaf.update(dt);
        if (this.lightRays) this.lightRays.update();
        this.moleculeSystem.update(dt, time);
    }

    draw(lightRenderer, mainRenderer, particleRenderer, time) {
        // 1. Light rays (background canvas)
        if (this.lightRays) this.lightRays.draw(lightRenderer);

        // 2. Leaf surface
        if (this.leaf) this.leaf.draw(mainRenderer);

        // 3. Pathways (dashed animated lines)
        Object.values(this.pathways).forEach(p => p.draw(mainRenderer));

        // 4. Chloroplast (main structure)
        if (this.chloroplast) this.chloroplast.draw(mainRenderer, time);

        // 5. Molecules (particle canvas)
        this.moleculeSystem.draw(particleRenderer);
    }
}

// ==================== SCENE MANAGER ====================
class SceneManager {
    constructor(system) {
        this.system = system;
        this.currentScene = null;
        this.scenes = this.defineScenes();
        this.spawnTimers = {};     // per-scene molecule spawn throttles
    }

    defineScenes() {
        return [
            {
                name: 'Introduction',
                scrollStart: 0,
                scrollEnd: 350,
                onEnter: () => this.sceneIntro(),
                onUpdate: (p) => this.updateIntro(p)
            },
            {
                name: 'Leaf Appears',
                scrollStart: 350,
                scrollEnd: 750,
                onEnter: () => this.sceneLeafAppears(),
                onUpdate: (p) => this.updateLeafAppears(p)
            },
            {
                name: 'Sunlight Arrives',
                scrollStart: 750,
                scrollEnd: 1150,
                onEnter: () => this.sceneSunlight(),
                onUpdate: (p) => this.updateSunlight(p)
            },
            {
                name: 'Chloroplast Zoom',
                scrollStart: 1150,
                scrollEnd: 1600,
                onEnter: () => this.sceneChloroplast(),
                onUpdate: (p) => this.updateChloroplast(p)
            },
            {
                name: 'Thylakoid & Grana',
                scrollStart: 1600,
                scrollEnd: 2000,
                onEnter: () => this.sceneThylakoid(),
                onUpdate: (p) => this.updateThylakoid(p)
            },
            {
                name: 'Water Splitting',
                scrollStart: 2000,
                scrollEnd: 2500,
                onEnter: () => this.sceneWaterSplitting(),
                onUpdate: (p) => this.updateWaterSplitting(p)
            },
            {
                name: 'Electron Transport',
                scrollStart: 2500,
                scrollEnd: 3000,
                onEnter: () => this.sceneElectronTransport(),
                onUpdate: (p) => this.updateElectronTransport(p)
            },
            {
                name: 'ATP & NADPH Produced',
                scrollStart: 3000,
                scrollEnd: 3500,
                onEnter: () => this.sceneATPProduction(),
                onUpdate: (p) => this.updateATPProduction(p)
            },
            {
                name: 'CO₂ Fixation',
                scrollStart: 3500,
                scrollEnd: 4000,
                onEnter: () => this.sceneCO2Fixation(),
                onUpdate: (p) => this.updateCO2Fixation(p)
            },
            {
                name: 'Calvin Cycle',
                scrollStart: 4000,
                scrollEnd: 4600,
                onEnter: () => this.sceneCalvinCycle(),
                onUpdate: (p) => this.updateCalvinCycle(p)
            },
            {
                name: 'Glucose Production',
                scrollStart: 4600,
                scrollEnd: 5200,
                onEnter: () => this.sceneGlucose(),
                onUpdate: (p) => this.updateGlucose(p)
            },
            {
                name: 'Complete Photosynthesis',
                scrollStart: 5200,
                scrollEnd: 6200,
                onEnter: () => this.sceneComplete(),
                onUpdate: (p) => this.updateComplete(p)
            }
        ];
    }

    // ─── Scene implementations ───

    sceneIntro() {
        document.getElementById('text').innerHTML =
            'Photosynthesis — the engine of life on Earth 🌱';
        document.getElementById('text').style.background = 'rgba(10,25,15,0.82)';
    }
    updateIntro(p) { /* ambient */ }

    // ── Leaf ──
    sceneLeafAppears() {
        document.getElementById('text').innerHTML =
            'A leaf — nature\'s solar panel 🍃';
        document.getElementById('info-chloroplast').classList.add('visible');
    }
    updateLeafAppears(p) {
        if (this.system.leaf) this.system.leaf.opacity = Math.min(1, p * 2);
    }

    // ── Sunlight ──
    sceneSunlight() {
        document.getElementById('text').innerHTML =
            'Sunlight strikes the leaf surface ☀️';
    }
    updateSunlight(p) {
        if (this.system.lightRays) {
            this.system.lightRays.intensity = Math.min(CONFIG.light.intensity, p * 1.5);
            this.system.lightRays.active = p > 0.1;
        }
    }

    // ── Chloroplast ──
    sceneChloroplast() {
        document.getElementById('text').innerHTML =
            'Inside the cell: the <strong>Chloroplast</strong> — where photosynthesis happens';
    }
    updateChloroplast(p) {
        if (this.system.chloroplast) {
            this.system.chloroplast.opacity = Math.min(1, p * 2);
        }
    }

    // ── Thylakoid ──
    sceneThylakoid() {
        document.getElementById('text').innerHTML =
            'The <strong>Thylakoid membranes</strong> (grana stacks) host the Light Reactions';
        document.getElementById('info-reactions').classList.add('visible');
    }
    updateThylakoid(p) {
        if (this.system.chloroplast) {
            this.system.chloroplast.grana.forEach((g, i) => {
                const start = i / this.system.chloroplast.grana.length;
                g.opacity = Math.min(1, Math.max(0, (p - start) * 3));
            });
        }
    }

    // ── Water Splitting ──
    sceneWaterSplitting() {
        document.getElementById('text').innerHTML =
            'Water is split at <strong>Photosystem II</strong>: 2H₂O → O₂ + 4H⁺ + 4e⁻';
        // Show water uptake pathway
        this.system.pathways.waterUptake.opacity = 1;
        this.system.pathways.o2Release.opacity = 0;
    }
    updateWaterSplitting(p) {
        this.system.pathways.waterUptake.opacity = Math.min(1, p * 2);
        // Spawn water molecules
        if (p > 0.2 && Math.random() < 0.25) {
            const pw = this.system.pathways.waterUptake;
            this.system.spawnAlongPathway(pw, 'water');
        }
        // After water arrives, O₂ starts releasing
        if (p > 0.6) {
            this.system.pathways.o2Release.opacity = Math.min(1, (p - 0.6) * 3);
            if (Math.random() < 0.15) {
                this.system.spawnAlongPathway(this.system.pathways.o2Release, 'oxygen');
                this.system.moleculeSystem.o2Released++;
            }
        }
    }

    // ── ETC ──
    sceneElectronTransport() {
        document.getElementById('text').innerHTML =
            'Electrons flow through the <strong>Electron Transport Chain</strong> — energy builds up as a proton gradient';
        document.getElementById('info-stats').classList.add('visible');
        // Show ETC
        if (this.system.chloroplast && this.system.chloroplast.etc) {
            this.system.chloroplast.etc.opacity = 1;
        }
    }
    updateElectronTransport(p) {
        // Keep O₂ flowing
        if (Math.random() < 0.1) {
            this.system.spawnAlongPathway(this.system.pathways.o2Release, 'oxygen');
            this.system.moleculeSystem.o2Released++;
        }
        // Spawn electrons + protons
        if (p > 0.3 && Math.random() < 0.2) {
            const cx = CONFIG.chloroplast.centerX;
            const cy = CONFIG.chloroplast.centerY;
            this.system.spawnMolecule('electron',
                new Vector2D(cx - 65, cy - 15),
                new Vector2D(cx + 70, cy - 30)
            );
        }
        if (p > 0.5 && Math.random() < 0.18) {
            const cx = CONFIG.chloroplast.centerX;
            const cy = CONFIG.chloroplast.centerY;
            this.system.spawnMolecule('proton',
                new Vector2D(cx - 40, cy - 10),
                new Vector2D(cx + 30, cy - 20)
            );
        }
    }

    // ── ATP Production ──
    sceneATPProduction() {
        document.getElementById('text').innerHTML =
            'The proton gradient drives <strong>ATP Synthase</strong> → ATP + NADPH are produced';
        this.system.pathways.lightReaction.opacity = 1;
        this.system.pathways.atpShuttle.opacity = 0;
    }
    updateATPProduction(p) {
        this.system.pathways.lightReaction.opacity = Math.min(1, p * 2);
        // Spawn ATP
        if (p > 0.25 && Math.random() < 0.2) {
            this.system.spawnAlongPathway(this.system.pathways.lightReaction, 'atp');
            this.system.moleculeSystem.atpProduced++;
        }
        // Spawn NADPH
        if (p > 0.45 && Math.random() < 0.15) {
            const cx = CONFIG.chloroplast.centerX;
            const cy = CONFIG.chloroplast.centerY;
            this.system.spawnMolecule('nadph',
                new Vector2D(cx + 10, cy + 25),
                new Vector2D(cx + 35, cy - 60)
            );
        }
        // ATP shuttle to Calvin
        if (p > 0.7) {
            this.system.pathways.atpShuttle.opacity = Math.min(1, (p - 0.7) * 3);
            if (Math.random() < 0.12) {
                this.system.spawnAlongPathway(this.system.pathways.atpShuttle, 'atp');
            }
        }
    }

    // ── CO₂ Fixation ──
    sceneCO2Fixation() {
        document.getElementById('text').innerHTML =
            'CO₂ enters through <strong>stomata</strong> and is fixed by <strong>RuBisCO</strong> in the stroma';
        this.system.pathways.co2Intake.opacity = 0;
    }
    updateCO2Fixation(p) {
        this.system.pathways.co2Intake.opacity = Math.min(1, p * 2.5);
        // Spawn CO₂ — respect drought (stomata closed = very low)
        const rate = this.system.currentCondition === 'drought' ? 0.04 : 0.22;
        if (p > 0.2 && Math.random() < rate) {
            this.system.spawnAlongPathway(this.system.pathways.co2Intake, 'co2');
        }
    }

    // ── Calvin Cycle ──
    sceneCalvinCycle() {
        document.getElementById('text').innerHTML =
            'The <strong>Calvin Cycle</strong>: CO₂ + ATP + NADPH → G3P (3-carbon sugar)';
        this.system.pathways.calvinCycle.opacity = 0;
    }
    updateCalvinCycle(p) {
        this.system.pathways.calvinCycle.opacity = Math.min(1, p * 2);
        // CO₂ continues
        const co2Rate = this.system.currentCondition === 'drought' ? 0.05 : 0.15;
        if (Math.random() < co2Rate) {
            this.system.spawnAlongPathway(this.system.pathways.co2Intake, 'co2');
        }
        // G3P produced
        if (p > 0.4 && Math.random() < 0.18) {
            this.system.spawnAlongPathway(this.system.pathways.calvinCycle, 'g3p');
        }
        // ATP consumed in cycle (show moving toward Calvin)
        if (p > 0.3 && Math.random() < 0.1) {
            this.system.spawnAlongPathway(this.system.pathways.atpShuttle, 'atp');
            this.system.moleculeSystem.atpProduced++;
        }
    }

    // ── Glucose ──
    sceneGlucose() {
        document.getElementById('text').innerHTML =
            'Two G3P molecules combine to form <strong>Glucose</strong> (C₆H₁₂O₆) — stored energy! 🍬';
        this.system.pathways.glucoseExport.opacity = 0;
    }
    updateGlucose(p) {
        this.system.pathways.glucoseExport.opacity = Math.min(1, p * 2);
        // G3P still produced
        if (Math.random() < 0.12) {
            this.system.spawnAlongPathway(this.system.pathways.calvinCycle, 'g3p');
        }
        // Glucose exported
        if (p > 0.35 && Math.random() < 0.1) {
            this.system.spawnAlongPathway(this.system.pathways.glucoseExport, 'glucose');
            this.system.moleculeSystem.glucoseFormed++;
        }
    }

    // ── Complete ──
    sceneComplete() {
        document.getElementById('text').innerHTML =
            '🌿 <strong>The Complete Equation</strong><br><small style="opacity:0.8">6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂</small>';
        document.getElementById('text').style.background = 'rgba(40,100,55,0.55)';
        document.getElementById('text').style.fontSize = '20px';

        // Show all controls
        document.getElementById('control-panel').style.display = 'block';
        document.getElementById('condition-selector').style.display = 'block';
        document.getElementById('info-panels').style.display = 'block';
        // All panels visible
        document.querySelectorAll('.info-panel').forEach(el => el.classList.add('visible'));
    }
    updateComplete(p) {
        // All pathways fully visible
        Object.values(this.system.pathways).forEach(pw => pw.opacity = 1);

        // Continuous molecule spawning (full cycle)
        const cond = this.system.currentCondition;
        const lightOn = this.system.lightActive;

        // Water in (always if leaf has water)
        if (Math.random() < 0.12) {
            this.system.spawnAlongPathway(this.system.pathways.waterUptake, 'water');
        }
        // CO₂ in (blocked if drought)
        if (cond !== 'drought' && Math.random() < 0.15) {
            this.system.spawnAlongPathway(this.system.pathways.co2Intake, 'co2');
        } else if (cond === 'drought' && Math.random() < 0.03) {
            this.system.spawnAlongPathway(this.system.pathways.co2Intake, 'co2');
        }
        // Light reactions (only if light is on)
        if (lightOn && this.system.lightRays.intensity > 0.1) {
            if (Math.random() < 0.14) {
                this.system.spawnAlongPathway(this.system.pathways.o2Release, 'oxygen');
                this.system.moleculeSystem.o2Released++;
            }
            if (Math.random() < 0.12) {
                this.system.spawnAlongPathway(this.system.pathways.lightReaction, 'atp');
                this.system.moleculeSystem.atpProduced++;
            }
            if (Math.random() < 0.08) {
                const cx = CONFIG.chloroplast.centerX, cy = CONFIG.chloroplast.centerY;
                this.system.spawnMolecule('nadph',
                    new Vector2D(cx + 10, cy + 25),
                    new Vector2D(cx + 35, cy - 60)
                );
            }
        }
        // Calvin cycle (needs ATP/NADPH — check light)
        if (lightOn || cond === 'highco2') {
            if (Math.random() < 0.13) {
                this.system.spawnAlongPathway(this.system.pathways.calvinCycle, 'g3p');
            }
        }
        // Glucose export
        if (Math.random() < 0.07) {
            this.system.spawnAlongPathway(this.system.pathways.glucoseExport, 'glucose');
            this.system.moleculeSystem.glucoseFormed++;
        }
    }

    // ── Generic update (called every frame with scroll pos) ──
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
}

// ==================== MAIN APPLICATION ====================
class PhotosynthesisApp {
    constructor() {
        this.lightRenderer = null;
        this.mainRenderer = null;
        this.particleRenderer = null;
        this.system = null;
        this.sceneManager = null;
        this.lastTime = 0;
        this.isRunning = false;
        this.showLabels = true;
        window.showLabels = true;
    }

    initialize() {
        // Renderers
        this.lightRenderer    = new CanvasRenderer('lightCanvas',    CONFIG.canvas.width, CONFIG.canvas.height);
        this.mainRenderer     = new CanvasRenderer('mainCanvas',     CONFIG.canvas.width, CONFIG.canvas.height);
        this.particleRenderer = new CanvasRenderer('particleCanvas', CONFIG.canvas.width, CONFIG.canvas.height);

        // System
        this.system = new PhotosynthesisSystem();
        this.system.initialize(CONFIG.chloroplast.centerX, CONFIG.chloroplast.centerY);

        // Scene manager
        this.sceneManager = new SceneManager(this.system);

        // Events
        this.setupEventListeners();

        // Animation loop
        this.isRunning = true;
        this.lastTime = performance.now();
        this.animate();

        console.log('Photosynthesis Visualization initialized.');
    }

    setupEventListeners() {
        // Toggle labels
        const labelsBtn = document.getElementById('toggle-labels');
        if (labelsBtn) {
            labelsBtn.addEventListener('click', () => {
                this.showLabels = !this.showLabels;
                window.showLabels = this.showLabels;
                labelsBtn.textContent = this.showLabels ? 'Hide Labels' : 'Show Labels';
            });
        }

        // Toggle molecules (pause/resume)
        const flowBtn = document.getElementById('toggle-flow');
        if (flowBtn) {
            flowBtn.addEventListener('click', () => {
                if (this.system.moleculeSystem.isPaused) {
                    this.system.moleculeSystem.resume();
                    flowBtn.textContent = 'Pause Molecules';
                } else {
                    this.system.moleculeSystem.pause();
                    flowBtn.textContent = 'Resume Molecules';
                }
            });
        }

        // Toggle light
        const lightBtn = document.getElementById('toggle-light');
        if (lightBtn) {
            lightBtn.addEventListener('click', () => {
                const on = !this.system.lightActive;
                this.system.setLight(on);
                lightBtn.textContent = on ? 'Turn Off Light' : 'Turn On Light';
                lightBtn.style.background = on ? 'rgba(255,200,50,0.25)' : 'rgba(80,80,80,0.3)';
                lightBtn.style.borderColor = on ? 'rgba(255,200,50,0.6)' : 'rgba(180,180,180,0.4)';
                document.getElementById('light-intensity').disabled = !on;
            });
        }

        // Light intensity slider
        const slider = document.getElementById('light-intensity');
        if (slider) {
            slider.addEventListener('input', (e) => {
                const val = e.target.value / 100;
                this.system.setLightIntensity(val);
            });
        }

        // Condition selector
        const condSelect = document.getElementById('condition');
        if (condSelect) {
            condSelect.addEventListener('change', (e) => {
                this.system.applyCondition(e.target.value);
                this.updateConditionInfo(e.target.value);
                // Sync slider
                if (e.target.value === 'shade') {
                    slider && (slider.value = 20);
                } else {
                    slider && (slider.value = 75);
                }
            });
        }
    }

    updateConditionInfo(condition) {
        const text = document.getElementById('text');
        const messages = {
            drought: '🏜️ <strong>Drought:</strong> Stomata close to conserve water → CO₂ intake drops sharply',
            shade:   '🌑 <strong>Deep Shade:</strong> Very little light → Light Reactions slow dramatically',
            highco2: '💨 <strong>High CO₂:</strong> Extra carbon dioxide accelerates the Calvin Cycle',
            normal:  '☀️ <strong>Normal Conditions:</strong> Optimal photosynthesis in progress'
        };
        text.innerHTML = messages[condition] || messages.normal;
        text.style.background = condition !== 'normal'
            ? 'rgba(100, 80, 20, 0.5)'
            : 'rgba(10,25,15,0.82)';
    }

    // ── Animation loop (mirrors CirculatoryApp.animate) ──
    animate() {
        if (!this.isRunning) return;
        const now = performance.now();
        const dt = now - this.lastTime;
        this.lastTime = now;

        // Clear all canvases
        this.lightRenderer.clear();
        this.mainRenderer.clear();
        this.particleRenderer.clear();

        // Update
        this.system.update(dt, now);

        // Draw
        this.system.draw(this.lightRenderer, this.mainRenderer, this.particleRenderer, now);

        // Stats
        this.updateStats();

        requestAnimationFrame(() => this.animate());
    }

    updateStats() {
        const ms = this.system.moleculeSystem;
        const el = (id) => document.getElementById(id);

        const molCount = el('mol-count');
        if (molCount) molCount.textContent = ms.getActiveCount();

        const atpCount = el('atp-count');
        if (atpCount) atpCount.textContent = ms.atpProduced;

        const o2Count = el('o2-count');
        if (o2Count) o2Count.textContent = ms.o2Released;

        const glucCount = el('glucose-count');
        if (glucCount) glucCount.textContent = ms.glucoseFormed;

        // Photosynthesis rate (synthetic metric)
        const rateEl = el('rate-value');
        if (rateEl) {
            const lightFactor = this.system.lightActive ? this.system.lightIntensity : 0;
            const co2Factor  = this.system.currentCondition === 'drought' ? 0.15 : 1;
            const rate = (12.5 * lightFactor * co2Factor).toFixed(1);
            rateEl.textContent = rate;
        }
    }

    handleScroll(scrollPosition) {
        this.sceneManager.update(scrollPosition);
    }

    destroy() {
        this.isRunning = false;
        this.system.moleculeSystem.clear();
    }
}

// ==================== INITIALIZATION ====================
let app = null;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;

    // Show/hide initial prompt
    if (scroll === 0) {
        document.getElementById('scroll').style.display = 'block';
        document.getElementById('arrow').style.display  = 'block';
    }

    // Fade in
    if (scroll > 10) {
        document.getElementById('main').style.opacity = '1';
        document.body.classList.add('active');
        document.getElementById('scroll').style.display = 'none';
        document.getElementById('arrow').style.display  = 'none';
    }

    // Lazy-init app
    if (scroll > 50 && !app) {
        app = new PhotosynthesisApp();
        app.initialize();
    }

    // Drive scenes
    if (app) {
        app.handleScroll(scroll);
    }

    // Back-to-top button
    document.getElementById('myBtn').style.display = scroll > 5200 ? 'block' : 'none';
}

// ── Welcome alert (mirrors circulatory system's welcome) ──
alert(
    'Welcome to Photosynthesis!\n\n' +
    'An interactive, scientifically accurate visualization.\n\n' +
    'Features:\n' +
    '✓ Leaf surface with animated stomata\n' +
    '✓ Chloroplast with grana & thylakoids\n' +
    '✓ Electron Transport Chain\n' +
    '✓ Light Reactions & Calvin Cycle\n' +
    '✓ Real molecule flow (H₂O, O₂, CO₂, ATP, NADPH, Glucose)\n' +
    '✓ Environmental conditions (Drought, Shade, High CO₂)\n' +
    '✓ Light intensity control\n\n' +
    'Scroll slowly to explore! 🌿'
);

// Cleanup
window.addEventListener('beforeunload', () => {
    if (app) app.destroy();
});
