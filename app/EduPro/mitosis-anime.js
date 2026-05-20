/* mitosis-anime.js
   Full mitosis cycle animation engine using Canvas 2D.
   Phases: Welcome → Interphase → S-Phase → Prophase →
           Prometaphase → Metaphase → Anaphase →
           Telophase → Cytokinesis → Complete
*/

(function () {
  'use strict';

  // ── Config ────────────────────────────────────────────────────────
  var CFG = {
    CHROMOSOME_PAIRS: 4,   // simplified (human=23, we use 4 for clarity)
    PHASE_DURATION: 5000,  // ms per phase at speed=1
    SPEEDS: [0.5, 1, 2, 3],
    speedIdx: 1,
    paused: false,
  };

  // ── State ─────────────────────────────────────────────────────────
  var S = {
    phase: -1,
    t: 0,          // 0-1 normalised time within phase
    elapsed: 0,
    running: false,
    raf: null,
    lastTs: null,
  };

  // ── Phase definitions ─────────────────────────────────────────────
  var PHASES = [
    {
      id: 'welcome',
      name: 'Cell Biology',
      sub: 'The Mitosis Cycle',
      info: 'A eukaryotic cell prepares to divide. Watch as one cell becomes two identical daughter cells.',
      duration: 4000,
      color: '#00ccff',
    },
    {
      id: 'interphase',
      name: 'Interphase',
      sub: 'G1 · S · G2 phases',
      info: 'The cell grows, replicates organelles and synthesises proteins. Chromatin is diffuse inside the nucleus.',
      duration: 5500,
      color: '#44aaff',
    },
    {
      id: 'sphase',
      name: 'S-Phase',
      sub: 'DNA Replication',
      info: 'Each chromosome is copied → sister chromatids form, joined at the centromere. DNA content doubles.',
      duration: 7000,
      color: '#66ffcc',
    },
    {
      id: 'prophase',
      name: 'Prophase',
      sub: 'Chromatin condensation',
      info: 'Chromatin condenses into visible chromosomes. The nuclear envelope begins to break down. Centrosomes migrate to poles.',
      duration: 6000,
      color: '#ffcc44',
    },
    {
      id: 'prometaphase',
      name: 'Prometaphase',
      sub: 'Spindle attachment',
      info: 'Nuclear envelope dissolves. Spindle fibers attach to kinetochores on each sister chromatid.',
      duration: 5500,
      color: '#ff9944',
    },
    {
      id: 'metaphase',
      name: 'Metaphase',
      sub: 'Chromosomes align',
      info: 'All chromosomes align at the metaphase plate (cell equator). Spindle checkpoint ensures correct attachment.',
      duration: 5000,
      color: '#ff6688',
    },
    {
      id: 'anaphase',
      name: 'Anaphase',
      sub: 'Chromatids separate',
      info: 'Sister chromatids are pulled to opposite poles. The cell elongates. Each pole receives one complete set.',
      duration: 6000,
      color: '#cc44ff',
    },
    {
      id: 'telophase',
      name: 'Telophase',
      sub: 'Nuclear envelopes reform',
      info: 'Chromosomes decondense. Two new nuclear envelopes form. Spindle fibers disassemble.',
      duration: 5500,
      color: '#44ffaa',
    },
    {
      id: 'cytokinesis',
      name: 'Cytokinesis',
      sub: 'Membrane pinch',
      info: 'The contractile ring of actin filaments pinches the cell membrane at the cleavage furrow, producing two daughter cells.',
      duration: 6000,
      color: '#00eeff',
    },
    {
      id: 'complete',
      name: 'Complete',
      sub: 'Two daughter cells',
      info: 'Mitosis is complete. Two genetically identical daughter cells, each with a diploid set of chromosomes.',
      duration: 4500,
      color: '#88ffcc',
    },
  ];

  // ── Canvas setup ──────────────────────────────────────────────────
  var bgCanvas, bgCtx, canvas, ctx, W, H, CX, CY, CELL_R;

  function initCanvas() {
    bgCanvas = document.getElementById('mitosis-bg-canvas');
    canvas   = document.getElementById('mitosis-canvas');
    resize();
    window.addEventListener('resize', resize);
    drawStarfield();
  }

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    CX = W / 2;
    CY = H / 2;
    CELL_R = Math.min(W, H) * 0.65;

    bgCanvas.width  = canvas.width  = W;
    bgCanvas.height = canvas.height = H;
    bgCtx = bgCanvas.getContext('2d');
    ctx   = canvas.getContext('2d');
    drawStarfield();
  }

  // ── Starfield background ───────────────────────────────────────────
  var STARS = [];
  function drawStarfield() {
    STARS = [];
    for (var i = 0; i < 220; i++) {
      STARS.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        a: Math.random() * 0.7 + 0.1,
        speed: Math.random() * 0.003 + 0.001,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  function renderBg(ts) {
    bgCtx.clearRect(0, 0, W, H);

    // deep space gradient
    var g = bgCtx.createRadialGradient(CX, CY, 0, CX, CY, Math.max(W, H) * 0.8);
    g.addColorStop(0,   'rgba(4,12,28,1)');
    g.addColorStop(0.5, 'rgba(2,8,20,1)');
    g.addColorStop(1,   'rgba(0,2,8,1)');
    bgCtx.fillStyle = g;
    bgCtx.fillRect(0, 0, W, H);

    // stars
    STARS.forEach(function (s) {
      var alpha = s.a * (0.6 + 0.4 * Math.sin(ts * s.speed + s.phase));
      bgCtx.beginPath();
      bgCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      bgCtx.fillStyle = 'rgba(180,220,255,' + alpha + ')';
      bgCtx.fill();
    });

    // ambient nebula blobs
    var nb = [
      { x: W*0.15, y: H*0.2,  r: W*0.22, c: 'rgba(30,80,180,0.06)' },
      { x: W*0.82, y: H*0.75, r: W*0.28, c: 'rgba(80,20,160,0.05)' },
      { x: W*0.5,  y: H*0.88, r: W*0.20, c: 'rgba(0,120,140,0.05)' },
    ];
    nb.forEach(function (n) {
      var ng = bgCtx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
      ng.addColorStop(0, n.c);
      ng.addColorStop(1, 'transparent');
      bgCtx.fillStyle = ng;
      bgCtx.beginPath();
      bgCtx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      bgCtx.fill();
    });
  }

  // ── Organelle image cache ─────────────────────────────────────────
  var IMGS = {};
  var IMG_KEYS = ['mitochondria','golgi','er','ribosome','lysosome','centrosome','nucleus_img'];
  var IMG_SRCS = {
    mitochondria: 'res/img/mitochondria.jpg',
    golgi:        'res/img/golgi.jpeg',
    er:           'res/img/er.jpeg',
    ribosome:     'res/img/ribosome.jpg',
    lysosome:     'res/img/lysosome.jpg',
    centrosome:   'res/img/centrosome.jpeg',
    nucleus_img:  'res/img/nucleus_img.png',
  };

  function preloadImages(cb) {
    var loaded = 0;
    var total  = IMG_KEYS.length;
    IMG_KEYS.forEach(function (k) {
      var img = new Image();
      img.onload  = function () { loaded++; if (loaded === total) cb(); };
      img.onerror = function () { loaded++; if (loaded === total) cb(); };
      img.src = IMG_SRCS[k];
      IMGS[k] = img;
    });
  }

  // ── Draw helpers ──────────────────────────────────────────────────
  function drawImg(key, x, y, w, h, alpha) {
    if (!IMGS[key] || !IMGS[key].complete || !IMGS[key].naturalWidth) return;
    ctx.save();
    ctx.globalAlpha = alpha != null ? alpha : 1;
    ctx.drawImage(IMGS[key], x - w/2, y - h/2, w, h);
    ctx.restore();
  }

  function ease(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }
  function lerp(a, b, t) { return a + (b-a)*t; }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  // glowing circle
  function glowCircle(x, y, r, fillColor, glowColor, glowSize, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha != null ? alpha : 1;
    var g = ctx.createRadialGradient(x, y, r*0.1, x, y, r + glowSize);
    g.addColorStop(0,   glowColor.replace(')', ',0.25)').replace('rgb','rgba'));
    g.addColorStop(0.5, 'transparent');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r + glowSize, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.restore();
  }

  // membrane — slightly wobbly ellipse
  function drawMembrane(cx, cy, rx, ry, color, alpha, wobble, ts) {
    ctx.save();
    ctx.globalAlpha = alpha != null ? alpha : 1;
    ctx.beginPath();
    var steps = 80;
    for (var i = 0; i <= steps; i++) {
      var angle = (i / steps) * Math.PI * 2;
      var w = wobble ? wobble * Math.sin(angle * 3 + ts * 0.002) : 0;
      var px = cx + (rx + w) * Math.cos(angle);
      var py = cy + (ry + w) * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.lineWidth   = 2.5;
    ctx.stroke();

    // inner glow fill
    var grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry));
    grad.addColorStop(0,   'rgba(20,80,120,0.18)');
    grad.addColorStop(0.7, 'rgba(10,40,80,0.12)');
    grad.addColorStop(1,   'transparent');
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();
  }

  // nuclear envelope
  function drawNuclearEnvelope(cx, cy, r, alpha, poreDots) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(180,220,255,0.7)';
    ctx.lineWidth   = 1.8;
    ctx.setLineDash([4,3]);
    ctx.stroke();
    ctx.setLineDash([]);

    // nuclear pores
    if (poreDots) {
      var pores = 12;
      for (var i = 0; i < pores; i++) {
        var a = (i / pores) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(cx + r * Math.cos(a), cy + r * Math.sin(a), 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100,200,255,0.6)';
        ctx.fill();
      }
    }

    // nucleolus
    ctx.beginPath();
    ctx.arc(cx - r * 0.18, cy + r * 0.1, r * 0.28, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(80,160,220,0.35)';
    ctx.fill();
    ctx.restore();
  }

  // chromosome (single, condensed)
  function drawChromosome(cx, cy, len, angle, color, alpha, thick) {
    ctx.save();
    ctx.globalAlpha = alpha || 1;
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    var t = thick || 7;
    // two arms
    ctx.beginPath();
    ctx.moveTo(0, -len * 0.55);
    ctx.lineTo(0,  len * 0.55);
    ctx.strokeStyle = color;
    ctx.lineWidth   = t;
    ctx.lineCap     = 'round';
    ctx.stroke();
    // centromere pinch
    ctx.beginPath();
    ctx.arc(0, 0, t * 0.55, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fill();
    ctx.restore();
  }

  // sister chromatid pair (X shape)
  function drawSisterChromatids(cx, cy, len, angle, color, alpha, thick, separation) {
    ctx.save();
    ctx.globalAlpha = alpha || 1;
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    var t   = thick || 6;
    var sep = separation || 5;
    // left chromatid
    ctx.beginPath();
    ctx.moveTo(-sep, -len * 0.55);
    ctx.lineTo(-sep,  len * 0.55);
    ctx.strokeStyle = color;
    ctx.lineWidth   = t;
    ctx.lineCap     = 'round';
    ctx.stroke();
    // right chromatid
    ctx.beginPath();
    ctx.moveTo(sep, -len * 0.55);
    ctx.lineTo(sep,  len * 0.55);
    ctx.stroke();
    // centromere connection
    ctx.beginPath();
    ctx.arc(0, 0, sep + t*0.4, 0, Math.PI * 2);
    ctx.fillStyle = color.replace(')', ',0.4)').replace('rgb', 'rgba');
    ctx.fill();
    ctx.restore();
  }

  // spindle fiber
  function drawSpindleFiber(x1, y1, x2, y2, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha || 0.5;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    var g = ctx.createLinearGradient(x1, y1, x2, y2);
    g.addColorStop(0,   'rgba(200,240,255,0.8)');
    g.addColorStop(0.5, 'rgba(100,200,255,0.3)');
    g.addColorStop(1,   'rgba(200,240,255,0.8)');
    ctx.strokeStyle = g;
    ctx.lineWidth   = 1.2;
    ctx.stroke();
    ctx.restore();
  }

  // centrosome
  function drawCentrosome(x, y, r, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha || 1;
    // try image first
    if (IMGS.centrosome && IMGS.centrosome.complete && IMGS.centrosome.naturalWidth) {
      ctx.drawImage(IMGS.centrosome, x - r, y - r, r*2, r*2);
    } else {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,180,60,0.9)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,220,100,0.8)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // rays
      for (var i = 0; i < 8; i++) {
        var a = (i/8)*Math.PI*2;
        ctx.beginPath();
        ctx.moveTo(x + r*Math.cos(a), y + r*Math.sin(a));
        ctx.lineTo(x + (r+8)*Math.cos(a), y + (r+8)*Math.sin(a));
        ctx.strokeStyle = 'rgba(255,220,100,0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  // floating cytoplasm particles
  var PARTICLES = [];
  function initParticles() {
    PARTICLES = [];
    for (var i = 0; i < 28; i++) {
      var a = Math.random() * Math.PI * 2;
      var d = Math.random() * 0.78;
      PARTICLES.push({
        angle:   a,
        dist:    d,
        speed:   (Math.random() - 0.5) * 0.0006,
        dspeed:  (Math.random() - 0.5) * 0.0002,
        r:       Math.random() * 2.5 + 0.8,
        color:   'rgba(' + [
          Math.floor(Math.random()*80+120),
          Math.floor(Math.random()*80+160),
          Math.floor(Math.random()*60+180),
        ].join(',') + ',0.55)',
        bob:     Math.random() * Math.PI * 2,
        bobSpeed: Math.random() * 0.004 + 0.001,
      });
    }
  }

  function drawParticles(cx, cy, cellR, alpha, ts) {
    ctx.save();
    ctx.globalAlpha = alpha || 0.7;
    PARTICLES.forEach(function (p) {
      p.angle += p.speed;
      p.dist  = clamp(p.dist + p.dspeed, 0.1, 0.88);
      p.bob   += p.bobSpeed;
      var r   = p.dist * cellR;
      var x   = cx + r * Math.cos(p.angle);
      var y   = cy + r * Math.sin(p.angle) + Math.sin(p.bob) * 2;
      ctx.beginPath();
      ctx.arc(x, y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    ctx.restore();
  }

  // organelle placement ring (for interphase cell)
  var ORGANELLES = [];
  function initOrganelles() {
    var slots = [
      { key:'mitochondria', label:'Mitochondria', angle:0.3,     dist:0.52, w:0.20, h:0.10, color:'rgba(255,120,60,0.7)' },
      { key:'mitochondria', label:'Mitochondria', angle:3.5,     dist:0.48, w:0.18, h:0.09, color:'rgba(255,120,60,0.7)' },
      { key:'golgi',        label:'Golgi',        angle:1.2,     dist:0.55, w:0.22, h:0.12, color:'rgba(255,200,60,0.7)' },
      { key:'er',           label:'ER',           angle:2.1,     dist:0.50, w:0.24, h:0.11, color:'rgba(120,180,255,0.7)' },
      { key:'lysosome',     label:'Lysosome',     angle:4.8,     dist:0.58, w:0.10, h:0.10, color:'rgba(180,80,200,0.7)' },
      { key:'lysosome',     label:'Lysosome',     angle:5.5,     dist:0.45, w:0.09, h:0.09, color:'rgba(180,80,200,0.7)' },
      { key:'ribosome',     label:'Ribosome',     angle:0.9,     dist:0.38, w:0.06, h:0.06, color:'rgba(80,255,160,0.7)' },
      { key:'ribosome',     label:'Ribosome',     angle:3.0,     dist:0.40, w:0.06, h:0.06, color:'rgba(80,255,160,0.7)' },
    ];
    ORGANELLES = slots.map(function (s) {
      return Object.assign({}, s, { wobble: Math.random()*Math.PI*2, wobbleSpeed: 0.001+Math.random()*0.002 });
    });
  }

  function drawOrganelles(cx, cy, cellR, alpha, ts) {
    ORGANELLES.forEach(function (o) {
      o.wobble += o.wobbleSpeed;
      var r   = o.dist * cellR;
      var x   = cx + r * Math.cos(o.angle + Math.sin(o.wobble)*0.08);
      var y   = cy + r * Math.sin(o.angle + Math.sin(o.wobble)*0.08);
      var iw  = o.w * cellR * 2;
      var ih  = o.h * cellR * 2;
      var hasImg = IMGS[o.key] && IMGS[o.key].complete && IMGS[o.key].naturalWidth;
      ctx.save();
      ctx.globalAlpha = alpha || 0.85;
      if (hasImg) {
        ctx.drawImage(IMGS[o.key], x-iw/2, y-ih/2, iw, ih);
      } else {
        ctx.beginPath();
        ctx.ellipse(x, y, iw/2, ih/2, 0, 0, Math.PI*2);
        ctx.fillStyle = o.color;
        ctx.fill();
      }
      ctx.restore();
    });
  }

  // chromosome colour palette
  var CHR_COLORS = [
    'rgb(255,100,130)',
    'rgb(100,200,255)',
    'rgb(255,200,60)',
    'rgb(120,255,160)',
    'rgb(220,100,255)',
    'rgb(255,150,60)',
    'rgb(60,220,220)',
    'rgb(255,80,80)',
  ];

  // build chromosome positions for metaphase plate
  function chrPositions(cx, cy, n) {
    var positions = [];
    var spacing   = Math.min(CELL_R * 0.14, 26);
    var totalH    = (n-1) * spacing;
    for (var i = 0; i < n; i++) {
      positions.push({ x: cx, y: cy - totalH/2 + i*spacing });
    }
    return positions;
  }

  // ── Phase renderers ───────────────────────────────────────────────
  var renderers = {};

  // WELCOME
  renderers.welcome = function (t, ts) {
    var alpha = Math.min(1, t * 3);
    // large glowing cell outline
    drawMembrane(CX, CY, CELL_R*0.85, CELL_R*0.85, 'rgba(100,220,255,0.5)', alpha*0.8, CELL_R*0.015, ts);
    drawParticles(CX, CY, CELL_R*0.82, alpha*0.5, ts);
    drawOrganelles(CX, CY, CELL_R*0.82, alpha*0.6, ts);
    drawNuclearEnvelope(CX, CY, CELL_R*0.32, alpha*0.7, true);

    // title text
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.textAlign   = 'center';
    ctx.fillStyle   = 'rgba(200,240,255,0.9)';
    ctx.font        = 'bold ' + Math.round(CELL_R*0.12) + 'px Courier New';
    ctx.fillText('MITOSIS', CX, CY + CELL_R * 1.2);
    ctx.font    = Math.round(CELL_R*0.065) + 'px Courier New';
    ctx.fillStyle = 'rgba(140,220,255,0.7)';
    ctx.fillText('Cell Division Cycle', CX, CY + CELL_R * 1.35);
    ctx.restore();
  };

  // INTERPHASE
  renderers.interphase = function (t, ts) {
    var alpha   = Math.min(1, t * 2);
    var wobble  = CELL_R * 0.018;
    drawMembrane(CX, CY, CELL_R, CELL_R*0.96, 'rgba(80,180,255,0.7)', alpha, wobble, ts);
    drawParticles(CX, CY, CELL_R*0.92, alpha*0.8, ts);
    drawOrganelles(CX, CY, CELL_R*0.88, alpha*0.9, ts);

    // nucleus
    var nAlpha = alpha;
    drawNuclearEnvelope(CX, CY, CELL_R*0.32, nAlpha, true);

    // loose chromatin threads inside nucleus
    ctx.save();
    ctx.globalAlpha = nAlpha * 0.5;
    for (var i = 0; i < 8; i++) {
      var a  = (i/8)*Math.PI*2 + ts*0.0003;
      var r2 = CELL_R * (0.1 + 0.14*Math.sin(a*2+ts*0.001));
      ctx.beginPath();
      ctx.moveTo(CX + r2*Math.cos(a), CY + r2*Math.sin(a));
      ctx.bezierCurveTo(
        CX + r2*1.3*Math.cos(a+0.5), CY + r2*1.3*Math.sin(a+0.5),
        CX + r2*0.9*Math.cos(a+1.0), CY + r2*0.9*Math.sin(a+1.0),
        CX + r2*1.1*Math.cos(a+1.5), CY + r2*1.1*Math.sin(a+1.5)
      );
      ctx.strokeStyle = CHR_COLORS[i % CHR_COLORS.length];
      ctx.lineWidth   = 1.5;
      ctx.stroke();
    }
    ctx.restore();

    // centrosome pair (small, near nucleus)
    drawCentrosome(CX + CELL_R*0.37, CY - CELL_R*0.08, CELL_R*0.04, alpha*0.8);
  };

  // S-PHASE — DNA replication
  renderers.sphase = function (t, ts) {
    var alpha  = Math.min(1, t * 1.8);
    var repT   = clamp((t - 0.1) / 0.75, 0, 1); // replication progress 0→1
    drawMembrane(CX, CY, CELL_R, CELL_R*0.96, 'rgba(100,255,200,0.6)', alpha, CELL_R*0.012, ts);
    drawParticles(CX, CY, CELL_R*0.92, alpha*0.6, ts);
    drawOrganelles(CX, CY, CELL_R*0.88, alpha*0.5*(1-repT*0.4), ts);

    // nuclear envelope (fading slightly at end)
    drawNuclearEnvelope(CX, CY, CELL_R*0.34, alpha, true);

    var n       = CFG.CHROMOSOME_PAIRS * 2; // total chromosomes
    var nRadius = CELL_R * 0.28;
    var chrLen  = CELL_R * 0.14;

    for (var i = 0; i < n; i++) {
      var baseAngle = (i / n) * Math.PI * 2 + ts * 0.0002;
      var chrAngle  = baseAngle + Math.PI / 2;
      var dx = nRadius * Math.cos(baseAngle);
      var dy = nRadius * Math.sin(baseAngle);
      var cx2 = CX + dx;
      var cy2 = CY + dy;

      var color = CHR_COLORS[i % CHR_COLORS.length];

      if (repT < 0.5) {
        // single strands first half
        drawChromosome(cx2, cy2, chrLen*(0.7+0.3*repT), chrAngle, color, alpha*0.85, 5);
      } else {
        // sister chromatids emerging
        var sep = lerp(0, 5, (repT - 0.5) * 2);
        drawSisterChromatids(cx2, cy2, chrLen, chrAngle, color, alpha*0.85, 5, sep);
      }

      // replication fork glow at progress front
      if (repT > 0 && repT < 0.98) {
        var forkAlpha = (1 - Math.abs(repT - i/n - 0.02)) * 0.8;
        if (forkAlpha > 0.1) {
          ctx.save();
          ctx.globalAlpha = forkAlpha * alpha;
          ctx.beginPath();
          ctx.arc(cx2, cy2, chrLen*0.35, 0, Math.PI*2);
          ctx.fillStyle = 'rgba(120,255,180,0.4)';
          ctx.fill();
          ctx.restore();
        }
      }
    }

    // replication progress label
    ctx.save();
    ctx.globalAlpha = alpha * 0.85;
    ctx.textAlign   = 'center';
    ctx.font        = Math.round(CELL_R*0.06) + 'px Courier New';
    ctx.fillStyle   = 'rgba(120,255,180,0.9)';
    ctx.fillText(Math.round(repT*100) + '% replicated', CX, CY + CELL_R*1.15);
    ctx.restore();
  };

  // PROPHASE
  renderers.prophase = function (t, ts) {
    var alpha   = Math.min(1, t * 2);
    var condense = ease(clamp(t*2, 0, 1)); // condensation 0→1
    var envFade  = clamp(1 - (t-0.6)/0.4, 0, 1); // envelope fades end

    drawMembrane(CX, CY, CELL_R, CELL_R*0.96, 'rgba(255,200,60,0.6)', alpha, CELL_R*0.02, ts);
    drawParticles(CX, CY, CELL_R*0.92, alpha*0.5*(1-condense*0.6), ts);

    // nuclear envelope dissolving
    drawNuclearEnvelope(CX, CY, CELL_R*0.34, alpha*envFade, true);

    // centrosomes migrating to poles
    var poleOffset = lerp(CELL_R*0.3, CELL_R*0.82, ease(t));
    drawCentrosome(CX, CY - poleOffset, CELL_R*0.045, alpha*0.9);
    drawCentrosome(CX, CY + poleOffset, CELL_R*0.045, alpha*0.9);

    // early spindle fibers
    if (t > 0.4) {
      var sfAlpha = (t - 0.4) / 0.6;
      for (var i = 0; i < 6; i++) {
        var a  = (i/6)*Math.PI*2;
        var mx = CX + CELL_R*0.25*Math.cos(a);
        var my = CY + CELL_R*0.25*Math.sin(a)*0.3;
        drawSpindleFiber(CX, CY - poleOffset, mx, my, sfAlpha * 0.5);
        drawSpindleFiber(CX, CY + poleOffset, mx, my, sfAlpha * 0.5);
      }
    }

    // condensed chromosomes
    var n       = CFG.CHROMOSOME_PAIRS * 2;
    var nRadius = lerp(CELL_R*0.28, CELL_R*0.18, condense);
    var chrLen  = lerp(CELL_R*0.14, CELL_R*0.10, condense);
    var thick   = lerp(5, 9, condense);

    for (var i = 0; i < n; i++) {
      var baseAngle = (i/n)*Math.PI*2 + ts*0.0001;
      var dx  = nRadius * Math.cos(baseAngle);
      var dy  = nRadius * Math.sin(baseAngle);
      drawSisterChromatids(CX+dx, CY+dy, chrLen, baseAngle+Math.PI/2,
        CHR_COLORS[i%CHR_COLORS.length], alpha, thick, 4+condense*3);
    }
  };

  // PROMETAPHASE
  renderers.prometaphase = function (t, ts) {
    var alpha = Math.min(1, t*2);
    var poleOffset = CELL_R * 0.84;

    drawMembrane(CX, CY, CELL_R, CELL_R*0.96, 'rgba(255,160,60,0.65)', alpha, CELL_R*0.022, ts);

    // no nuclear envelope
    drawCentrosome(CX, CY - poleOffset, CELL_R*0.05, alpha);
    drawCentrosome(CX, CY + poleOffset, CELL_R*0.05, alpha);

    // chromosomes moving toward equator
    var n = CFG.CHROMOSOME_PAIRS * 2;
    var equatorY = CY;
    var chrLen   = CELL_R * 0.10;

    for (var i = 0; i < n; i++) {
      var startAngle = (i/n)*Math.PI*2;
      var startR     = CELL_R * 0.18;
      var startX     = CX + startR * Math.cos(startAngle);
      var startY     = CY + startR * Math.sin(startAngle);
      var targetX    = CX + (i - n/2 + 0.5) * (CELL_R*0.12);
      var targetY    = equatorY;
      var cx2 = lerp(startX, targetX, ease(t));
      var cy2 = lerp(startY, targetY, ease(t));

      // spindle fibers to this chromosome
      var sfA = clamp(t*2, 0, 1) * 0.65;
      drawSpindleFiber(CX, CY-poleOffset, cx2, cy2, sfA);
      drawSpindleFiber(CX, CY+poleOffset, cx2, cy2, sfA);

      drawSisterChromatids(cx2, cy2, chrLen, Math.PI/2,
        CHR_COLORS[i%CHR_COLORS.length], alpha, 8, 5);
    }
  };

  // METAPHASE
  renderers.metaphase = function (t, ts) {
    var alpha      = Math.min(1, t*2);
    var poleOffset = CELL_R * 0.84;
    var n          = CFG.CHROMOSOME_PAIRS * 2;
    var chrLen     = CELL_R * 0.105;
    var spacing    = Math.min(CELL_R*0.13, 22);
    var totalH     = (n-1)*spacing;

    drawMembrane(CX, CY, CELL_R, CELL_R*0.96, 'rgba(255,100,130,0.65)', alpha, CELL_R*0.018, ts);

    drawCentrosome(CX, CY - poleOffset, CELL_R*0.05, alpha);
    drawCentrosome(CX, CY + poleOffset, CELL_R*0.05, alpha);

    // metaphase plate line
    ctx.save();
    ctx.globalAlpha = alpha * 0.4;
    ctx.setLineDash([6,4]);
    ctx.beginPath();
    ctx.moveTo(CX - CELL_R*0.9, CY);
    ctx.lineTo(CX + CELL_R*0.9, CY);
    ctx.strokeStyle = 'rgba(255,200,100,0.6)';
    ctx.lineWidth   = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    // spindle fibers — full complement
    for (var i = 0; i < n; i++) {
      var cy2 = CY - totalH/2 + i*spacing;
      var pulse = 0.5 + 0.15 * Math.sin(ts*0.004 + i);
      drawSpindleFiber(CX, CY-poleOffset, CX, cy2, alpha*pulse);
      drawSpindleFiber(CX, CY+poleOffset, CX, cy2, alpha*pulse);
    }

    // aligned chromosomes
    for (var i = 0; i < n; i++) {
      var cy2 = CY - totalH/2 + i*spacing;
      drawSisterChromatids(CX, cy2, chrLen, Math.PI/2,
        CHR_COLORS[i%CHR_COLORS.length], alpha, 8, 5);
    }

    ctx.save();
    ctx.globalAlpha = alpha * 0.7;
    ctx.textAlign   = 'center';
    ctx.font        = Math.round(CELL_R*0.055) + 'px Courier New';
    ctx.fillStyle   = 'rgba(255,200,100,0.8)';
    ctx.fillText('Metaphase Plate', CX + CELL_R*0.68, CY + 4);
    ctx.restore();
  };

  // ANAPHASE
  renderers.anaphase = function (t, ts) {
    var alpha      = Math.min(1, t*2);
    var sep        = ease(t);              // separation 0→1
    var poleOffset = CELL_R * 0.84;
    var n          = CFG.CHROMOSOME_PAIRS * 2;
    var chrLen     = CELL_R * 0.10;
    var spacing    = Math.min(CELL_R*0.13, 22);
    var totalH     = (n-1)*spacing;

    // cell elongates
    var elongate = lerp(1, 1.22, sep);
    drawMembrane(CX, CY, CELL_R*lerp(1,0.88,sep), CELL_R*elongate,
      'rgba(180,80,255,0.6)', alpha, CELL_R*0.02, ts);

    drawCentrosome(CX, CY - poleOffset*elongate, CELL_R*0.05, alpha);
    drawCentrosome(CX, CY + poleOffset*elongate, CELL_R*0.05, alpha);

    for (var i = 0; i < n; i++) {
      var equY = CY - totalH/2 + i*spacing;
      var pull = sep * CELL_R * 0.55;
      var topY = equY - pull;
      var botY = equY + pull;
      var sfA  = (1 - sep*0.5) * alpha;

      drawSpindleFiber(CX, CY - poleOffset*elongate, CX, topY, sfA);
      drawSpindleFiber(CX, CY + poleOffset*elongate, CX, botY, sfA);

      // individual chromatids pulled apart
      drawChromosome(CX, topY, chrLen, Math.PI/2,
        CHR_COLORS[i%CHR_COLORS.length], alpha, 7);
      drawChromosome(CX, botY, chrLen, Math.PI/2,
        CHR_COLORS[i%CHR_COLORS.length], alpha, 7);
    }

    ctx.save();
    ctx.globalAlpha = alpha*0.75;
    ctx.textAlign   = 'center';
    ctx.font        = Math.round(CELL_R*0.055) + 'px Courier New';
    ctx.fillStyle   = 'rgba(200,120,255,0.85)';
    ctx.fillText('← Chromatids pulled to poles →', CX, CY);
    ctx.restore();
  };

  // TELOPHASE
  renderers.telophase = function (t, ts) {
    var alpha    = Math.min(1, t*2);
    var progress = ease(t);
    var elongate = lerp(1.22, 1.05, progress);
    var squish   = lerp(0.88, 1.0, progress);

    drawMembrane(CX, CY, CELL_R*squish, CELL_R*elongate,
      'rgba(60,255,160,0.65)', alpha, CELL_R*0.015, ts);

    // two nuclei reforming
    var nucOffset = lerp(CELL_R*0.55, CELL_R*0.38, progress);
    drawNuclearEnvelope(CX, CY - nucOffset, CELL_R*(0.15+0.12*progress), alpha*progress, true);
    drawNuclearEnvelope(CX, CY + nucOffset, CELL_R*(0.15+0.12*progress), alpha*progress, true);

    // chromosomes decondensing
    var n      = CFG.CHROMOSOME_PAIRS * 2;
    var chrLen = CELL_R * lerp(0.10, 0.05, progress);
    var thick  = lerp(7, 2, progress);

    for (var i = 0; i < n; i++) {
      var a  = (i/n)*Math.PI*2;
      var nR = CELL_R * 0.22 * (1-progress*0.4);
      var topX = CX + nR*Math.cos(a)*0.5;
      var topY = (CY - nucOffset) + nR*Math.sin(a);
      var botX = CX + nR*Math.cos(a)*0.5;
      var botY = (CY + nucOffset) + nR*Math.sin(a);

      drawChromosome(topX, topY, chrLen, a+Math.PI/2,
        CHR_COLORS[i%CHR_COLORS.length], alpha*(1-progress*0.6), thick);
      drawChromosome(botX, botY, chrLen, a+Math.PI/2,
        CHR_COLORS[i%CHR_COLORS.length], alpha*(1-progress*0.6), thick);
    }

    // cleavage furrow hint
    if (t > 0.7) {
      var fw = lerp(0, CELL_R*0.3, (t-0.7)/0.3);
      ctx.save();
      ctx.globalAlpha = alpha * ((t-0.7)/0.3) * 0.6;
      ctx.beginPath();
      ctx.moveTo(CX - fw, CY);
      ctx.lineTo(CX + fw, CY);
      ctx.strokeStyle = 'rgba(60,255,180,0.8)';
      ctx.lineWidth   = 3;
      ctx.stroke();
      ctx.restore();
    }
  };

  // CYTOKINESIS
  renderers.cytokinesis = function (t, ts) {
    var alpha   = Math.min(1, t*2);
    var pinch   = ease(t);               // 0=intact → 1=fully separated
    var midPinch = lerp(0, CELL_R, pinch);
    var topCY   = CY - lerp(0, CELL_R*0.52, pinch);
    var botCY   = CY + lerp(0, CELL_R*0.52, pinch);
    var childR  = lerp(CELL_R, CELL_R*0.68, pinch);

    if (pinch < 0.95) {
      // draw pinching cell
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();

      // top lobe
      ctx.arc(CX, topCY, childR * lerp(1, 0.75, pinch), Math.PI, Math.PI*2, false);
      // constriction
      var neckW = CELL_R * lerp(0.9, 0.04, pinch);
      ctx.lineTo(CX + neckW, CY);
      // bottom lobe
      ctx.arc(CX, botCY, childR * lerp(1, 0.75, pinch), 0, Math.PI, false);
      ctx.lineTo(CX - neckW, CY);
      ctx.closePath();

      ctx.strokeStyle = 'rgba(60,220,255,0.7)';
      ctx.lineWidth   = 2.5;
      ctx.stroke();
      var gf = ctx.createLinearGradient(CX, topCY - childR, CX, botCY + childR);
      gf.addColorStop(0,   'rgba(20,80,120,0.15)');
      gf.addColorStop(0.5, 'rgba(0,30,60,0.08)');
      gf.addColorStop(1,   'rgba(20,80,120,0.15)');
      ctx.fillStyle = gf;
      ctx.fill();
      ctx.restore();

      // cleavage furrow ring
      ctx.save();
      ctx.globalAlpha = alpha * pinch * 0.85;
      ctx.beginPath();
      ctx.ellipse(CX, CY, neckW + 4, CELL_R*0.04, 0, 0, Math.PI*2);
      ctx.strokeStyle = 'rgba(0,255,200,0.9)';
      ctx.lineWidth   = 2;
      ctx.stroke();
      ctx.restore();
    } else {
      // two separate daughter cells
      [topCY, botCY].forEach(function (cy2, idx) {
        drawMembrane(CX, cy2, childR*0.72, childR*0.72,
          'rgba(60,220,255,0.75)', alpha, CELL_R*0.01, ts + idx*1000);
        drawNuclearEnvelope(CX, cy2, childR*0.26, alpha*0.9, true);
        drawParticles(CX, cy2, childR*0.65, alpha*0.5, ts + idx*500);
        drawOrganelles(CX, cy2, childR*0.62, alpha*0.55, ts + idx*300);
      });
    }

    ctx.save();
    ctx.globalAlpha = alpha * clamp(pinch*3, 0, 1) * 0.8;
    ctx.textAlign   = 'center';
    ctx.font        = Math.round(CELL_R*0.055) + 'px Courier New';
    ctx.fillStyle   = 'rgba(60,255,200,0.9)';
    ctx.fillText('Contractile Ring', CX, CY - CELL_R*0.06);
    ctx.restore();
  };

  // COMPLETE
  renderers.complete = function (t, ts) {
    var alpha  = Math.min(1, t*2);
    var childR = CELL_R * 0.68;
    var offset = CELL_R * 0.52;
    var pulse  = 0.95 + 0.05 * Math.sin(ts * 0.004);

    [CY - offset, CY + offset].forEach(function (cy2, idx) {
      drawMembrane(CX, cy2, childR*0.72*pulse, childR*0.72*pulse,
        'rgba(130,255,200,0.7)', alpha, CELL_R*0.01, ts + idx*800);
      drawNuclearEnvelope(CX, cy2, childR*0.27, alpha, true);
      drawParticles(CX, cy2, childR*0.65, alpha*0.65, ts + idx*400);
      drawOrganelles(CX, cy2, childR*0.62, alpha*0.7, ts + idx*200);
    });

    // = sign
    ctx.save();
    ctx.globalAlpha = alpha * 0.8;
    ctx.textAlign   = 'center';
    ctx.font        = 'bold ' + Math.round(CELL_R*0.09) + 'px Courier New';
    ctx.fillStyle   = 'rgba(150,255,220,0.9)';
    ctx.textAlign   = 'center';
    ctx.fillText('×2 Daughter Cells', CX, CY);
    ctx.font        = Math.round(CELL_R*0.055) + 'px Courier New';
    ctx.fillStyle   = 'rgba(120,220,200,0.7)';
    ctx.fillText('Genetically Identical · Diploid (2n)', CX, CY + CELL_R*0.1);
    ctx.restore();
  };

  // ── Render dispatch ───────────────────────────────────────────────
  function renderPhase(ts) {
    var ph = PHASES[S.phase];
    if (!ph) return;
    ctx.clearRect(0, 0, W, H);
    var renderer = renderers[ph.id];
    if (renderer) renderer(S.t, ts);
  }

  // ── Animation loop ────────────────────────────────────────────────
// ── Animation loop ────────────────────────────────────────────────
  function loop(ts) {
    if (!S.running) return;
    S.raf = requestAnimationFrame(loop);

    renderBg(ts);

    if (!CFG.paused && S.lastTs !== null) {
      var dt  = (ts - S.lastTs) * CFG.SPEEDS[CFG.speedIdx];
      var dur = PHASES[S.phase] ? PHASES[S.phase].duration : 5000;

      if (S.reversing) {
        S.elapsed -= dt;
        S.t = clamp(S.elapsed / dur, 0, 1);
        if (S.elapsed <= 0) {
          if (S.phase > 0) {
            S.phase--;
            S.elapsed = PHASES[S.phase].duration;
            S.t = 1;
            updatePhaseBadge();
          } else {
            // reached the very beginning — signal complete
            S.t = 0;
            S.elapsed = 0;
            renderPhase(ts);
            updateHUD();
            S.running = false;
            cancelAnimationFrame(S.raf);
            S.raf = null;
            if (typeof S.onReverseDone === 'function') S.onReverseDone();
            return;
          }
        }
      } else {
        S.elapsed += dt;
        S.t = clamp(S.elapsed / dur, 0, 1);
        if (S.elapsed >= dur) {
          nextPhase();
        }
      }
    }
    S.lastTs = ts;

    renderPhase(ts);
    updateHUD();
  }

  function nextPhase() {
    if (S.phase >= PHASES.length - 1) {
      S.t = 1;
      return;
    }
    S.phase++;
    S.elapsed = 0;
    S.t       = 0;
    flashTransition();
    updatePhaseBadge();
  }

  // ── HUD updates ───────────────────────────────────────────────────
  function updateHUD() {
    var total  = PHASES.length;
    var pct    = Math.round(((S.phase + S.t) / total) * 100);
    var fillEl = document.getElementById('mitosis-progress-fill');
    var pctEl  = document.getElementById('mitosis-progress-pct');
    if (fillEl) fillEl.style.width = pct + '%';
    if (pctEl)  pctEl.textContent  = pct + '%';
  }

  function updatePhaseBadge() {
    var ph = PHASES[S.phase];
    if (!ph) return;
    var nameEl = document.getElementById('mitosis-phase-name');
    var subEl  = document.getElementById('mitosis-phase-sub');
    var infoEl = document.getElementById('mitosis-info-text');
    if (nameEl) {
      nameEl.textContent = ph.name;
      nameEl.style.color = ph.color;
      nameEl.style.textShadow = '0 0 20px ' + ph.color + ',0 0 40px ' + ph.color;
      nameEl.classList.remove('mitosis-phase-animate');
      void nameEl.offsetWidth;
      nameEl.classList.add('mitosis-phase-animate');
    }
    if (subEl)  subEl.textContent  = ph.sub;
    if (infoEl) infoEl.textContent = ph.info;
    updateDots();
  }

  function updateDots() {
    var dots = document.querySelectorAll('.mitosis-dot');
    dots.forEach(function (d, i) {
      d.classList.remove('active', 'done');
      if (i < S.phase)  d.classList.add('done');
      if (i === S.phase) d.classList.add('active');
    });
  }

  function flashTransition() {
    var el = document.getElementById('mitosis-flash');
    if (!el) return;
    el.classList.add('flash');
    setTimeout(function () { el.classList.remove('flash'); }, 350);
  }

  // ── Build HUD dots ────────────────────────────────────────────────
  function buildDots() {
    var wrap = document.getElementById('mitosis-phase-dots');
    if (!wrap) return;
    wrap.innerHTML = '';
    PHASES.forEach(function (_, i) {
      var d = document.createElement('div');
      d.className = 'mitosis-dot';
      wrap.appendChild(d);
    });
  }

  // ── Public API ────────────────────────────────────────────────────
  window.MitosisAnim = {

    init: function () {
      initCanvas();
      initParticles();
      initOrganelles();
      buildDots();
    },

    start: function () {
      S.phase      = 0;
      S.elapsed    = 0;
      S.t          = 0;
      S.running    = true;
      S.reversing  = false;
      S.lastTs     = null;
      S.onReverseDone = null;
      updatePhaseBadge();
      document.getElementById('mitosis-back-btn').classList.add('visible');
      S.raf = requestAnimationFrame(loop);
    },

    // Reverse playback from current position back to phase 0 t=0,
    // then call cb when done.
    reverse: function (cb) {
      if (!S.running) {
        // already stopped — call cb immediately
        if (typeof cb === 'function') cb();
        return;
      }
      S.reversing     = true;
      S.onReverseDone = cb;
      // Hide the back button immediately to prevent double-tap
      var backBtn = document.getElementById('mitosis-back-btn');
      if (backBtn) backBtn.classList.remove('visible');
    },

    stop: function (cb) {
      S.running = false;
      if (S.raf) { cancelAnimationFrame(S.raf); S.raf = null; }
      var canvas   = document.getElementById('mitosis-canvas');
      var bgCanvas = document.getElementById('mitosis-bg-canvas');
      if (canvas)   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      if (bgCanvas) bgCanvas.getContext('2d').clearRect(0, 0, bgCanvas.width, bgCanvas.height);
      document.getElementById('mitosis-back-btn').classList.remove('visible');
      if (typeof cb === 'function') cb();
    },

    preload: preloadImages,
  };

})();
