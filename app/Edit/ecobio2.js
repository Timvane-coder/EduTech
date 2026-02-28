static drawSoilProfile(ctx, color, w, h) {
  const horizons = [
    { label: 'O – Organic litter', color: '#3d2b1f', frac: 0.12 },
    { label: 'A – Topsoil',        color: '#5c3d1e', frac: 0.22 },
    { label: 'B – Subsoil',        color: '#8b6040', frac: 0.28 },
    { label: 'C – Parent material', color: '#b89060', frac: 0.24 },
    { label: 'R – Bedrock',        color: '#9e9e9e', frac: 0.14 },
  ];

  let y = h * 0.05;
  const x0 = w * 0.15, bw = w * 0.55;

  horizons.forEach(hz => {
    const hh = h * hz.frac;
    ctx.fillStyle = hz.color;
    ctx.fillRect(x0, y, bw, hh);

    // texture dots
    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.arc(
        x0 + Math.random() * bw,
        y  + Math.random() * hh,
        w * 0.004, 0, Math.PI * 2
      );
      ctx.fill();
    }

    // border
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x0, y, bw, hh);

    // label
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.028}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText(hz.label, x0 + bw + w * 0.02, y + hh * 0.6);

    y += hh;
  });

  ctx.fillStyle = '#333';
  ctx.font = `bold ${h * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Soil Profile', w * 0.5, h * 0.97);
}

static drawBacteriumCell(ctx, color, w, h) {
  const cx = w * 0.5, cy = h * 0.48;
  const rx = w * 0.22, ry = h * 0.14;

  // cell wall
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = w * 0.012;
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx + w * 0.015, ry + h * 0.018, 0, 0, Math.PI * 2);
  ctx.stroke();

  // cell membrane
  const grad = ctx.createRadialGradient(cx - rx * 0.3, cy - ry * 0.3, 0, cx, cy, rx);
  grad.addColorStop(0, color.light);
  grad.addColorStop(1, color.base);
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = w * 0.006;
  ctx.stroke();

  // nucleoid region
  ctx.fillStyle = 'rgba(255,220,50,0.55)';
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx * 0.38, ry * 0.55, 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(180,140,0,0.7)';
  ctx.lineWidth = w * 0.003;
  ctx.stroke();

  // plasmid
  ctx.strokeStyle = 'rgba(255,100,100,0.8)';
  ctx.lineWidth = w * 0.004;
  ctx.beginPath();
  ctx.ellipse(cx + rx * 0.5, cy - ry * 0.25, rx * 0.12, ry * 0.18, 0.5, 0, Math.PI * 2);
  ctx.stroke();

  // ribosomes
  ctx.fillStyle = 'rgba(80,180,80,0.8)';
  [[-0.15,0.3],[0.2,-0.25],[-0.4,0.1],[0.45,0.2],[0.1,0.45],[-0.3,-0.35]].forEach(([dx,dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * rx, cy + dy * ry, w * 0.007, 0, Math.PI * 2);
    ctx.fill();
  });

  // flagella
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = w * 0.004;
  [0.6, 0.2, -0.2].forEach(dy => {
    ctx.beginPath();
    ctx.moveTo(cx + rx, cy + dy * ry);
    ctx.bezierCurveTo(
      cx + rx * 1.5, cy + dy * ry - h * 0.05,
      cx + rx * 1.8, cy + dy * ry + h * 0.08,
      cx + rx * 2.2, cy + dy * ry - h * 0.04
    );
    ctx.stroke();
  });

  // pili
  ctx.strokeStyle = color.base;
  ctx.lineWidth = w * 0.002;
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 5) {
    const px = cx + rx * Math.cos(a), py = cy + ry * Math.sin(a);
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px + Math.cos(a) * w * 0.06, py + Math.sin(a) * h * 0.06);
    ctx.stroke();
  }

  // labels
  const labels = [
    [cx, cy - ry * 1.6, 'Cell Wall'],
    [cx + rx * 0.5, cy, 'Nucleoid'],
    [cx + rx * 0.5, cy - ry * 0.25, 'Plasmid'],
    [cx + rx * 1.9, cy - ry * 0.8, 'Flagella'],
  ];
  ctx.fillStyle = '#111';
  ctx.font = `${h * 0.03}px Arial`;
  ctx.textAlign = 'center';
  labels.forEach(([lx, ly, txt]) => ctx.fillText(txt, lx, ly));
}

static drawFungusHypha(ctx, color, w, h) {
  const segments = 10;
  const pts = [];
  for (let i = 0; i <= segments; i++) {
    pts.push({
      x: w * (0.05 + 0.9 * i / segments),
      y: h * (0.45 + 0.15 * Math.sin(i * 0.9)),
    });
  }

  // draw hypha tube
  ctx.lineWidth = h * 0.045;
  ctx.strokeStyle = color.light;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  pts.slice(1).forEach(p => ctx.lineTo(p.x, p.y));
  ctx.stroke();

  ctx.lineWidth = h * 0.038;
  ctx.strokeStyle = color.base;
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  pts.slice(1).forEach(p => ctx.lineTo(p.x, p.y));
  ctx.stroke();

  // septa (cross walls)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = w * 0.005;
  for (let i = 1; i < segments; i += 2) {
    const p = pts[i];
    const angle = Math.atan2(pts[i+1].y - pts[i-1].y, pts[i+1].x - pts[i-1].x) + Math.PI/2;
    const r = h * 0.023;
    ctx.beginPath();
    ctx.moveTo(p.x + Math.cos(angle)*r, p.y + Math.sin(angle)*r);
    ctx.lineTo(p.x - Math.cos(angle)*r, p.y - Math.sin(angle)*r);
    ctx.stroke();
  }

  // nuclei
  ctx.fillStyle = 'rgba(255,200,0,0.75)';
  [2, 5, 8].forEach(i => {
    ctx.beginPath();
    ctx.arc(pts[i].x, pts[i].y, h * 0.018, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = w * 0.003;
    ctx.stroke();
  });

  // branch hyphae
  [[3, -1], [7, 1]].forEach(([idx, dir]) => {
    const p = pts[idx];
    ctx.lineWidth = h * 0.025;
    ctx.strokeStyle = color.base;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.quadraticCurveTo(p.x + w*0.04, p.y + dir*h*0.12, p.x + w*0.09, p.y + dir*h*0.18);
    ctx.stroke();
  });

  ctx.fillStyle = '#111';
  ctx.font = `${h * 0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Hypha', w*0.5, h*0.1);
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('Septum', w*0.28, h*0.22);
  ctx.fillText('Nucleus', w*0.52, h*0.28);
}

static drawMycorrhiza(ctx, color, w, h) {
  // root
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = h * 0.03;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.05);
  ctx.bezierCurveTo(w*0.5, h*0.3, w*0.48, h*0.5, w*0.5, h*0.65);
  ctx.stroke();

  // lateral roots
  [[0.2, 0.3, -1],[0.2, 0.5, 1],[0.15, 0.45, -1]].forEach(([dx, dy, dir]) => {
    ctx.lineWidth = h * 0.018;
    ctx.beginPath();
    ctx.moveTo(w*0.5, h*dy);
    ctx.quadraticCurveTo(w*(0.5+dir*dx*0.5), h*(dy+0.05), w*(0.5+dir*dx), h*(dy+0.08));
    ctx.stroke();
  });

  // fungal hyphae network around root
  ctx.strokeStyle = color.base;
  ctx.lineWidth = w * 0.003;
  for (let i = 0; i < 18; i++) {
    const startY = h * (0.15 + i * 0.028);
    const side = (i % 2 === 0 ? 1 : -1);
    ctx.beginPath();
    ctx.moveTo(w*0.5 + side*w*0.015, startY);
    ctx.bezierCurveTo(
      w*0.5 + side*w*0.08, startY - h*0.02,
      w*0.5 + side*w*0.14, startY + h*0.03,
      w*0.5 + side*w*0.18, startY
    );
    ctx.stroke();
  }

  // mantle sheath
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = w * 0.006;
  ctx.setLineDash([w*0.01, w*0.007]);
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.4, w*0.06, h*0.32, 0, 0, Math.PI*2);
  ctx.stroke();
  ctx.setLineDash([]);

  // labels
  ctx.fillStyle = '#111';
  ctx.font = `${h*0.03}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Plant Root', w*0.56, h*0.12);
  ctx.fillText('Fungal Hyphae', w*0.56, h*0.4);
  ctx.fillText('Mantle', w*0.56, h*0.65);
  ctx.font = `bold ${h*0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Mycorrhizal Association', w*0.5, h*0.95);
}

static drawRootNodule(ctx, color, w, h) {
  const cx = w*0.5, cy = h*0.5;

  // root
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = h*0.035;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx, h*0.05);
  ctx.lineTo(cx, h*0.95);
  ctx.stroke();

  // nodule
  const ng = ctx.createRadialGradient(cx + w*0.08, cy - h*0.04, 0, cx + w*0.1, cy, w*0.1);
  ng.addColorStop(0, color.light);
  ng.addColorStop(0.6, color.base);
  ng.addColorStop(1, color.dark);
  ctx.fillStyle = ng;
  ctx.beginPath();
  ctx.ellipse(cx + w*0.1, cy, w*0.1, h*0.1, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = w*0.005;
  ctx.stroke();

  // bacteroids inside nodule
  ctx.fillStyle = 'rgba(255,180,50,0.8)';
  [[-0.03,-0.03],[0.03,0.02],[-0.01,0.05],[0.06,-0.01],[0.04,0.05]].forEach(([dx,dy]) => {
    ctx.beginPath();
    ctx.ellipse(cx + w*(0.1+dx), cy + h*dy, w*0.016, h*0.01, 0.5, 0, Math.PI*2);
    ctx.fill();
  });

  // N2 arrows
  ctx.strokeStyle = '#3366cc';
  ctx.lineWidth = w*0.004;
  ctx.fillStyle = '#3366cc';
  [[cx+w*0.24, cy-h*0.05],[cx+w*0.24, cy+h*0.05]].forEach(([ax,ay]) => {
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(cx+w*0.2, ay);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx+w*0.2, ay);
    ctx.lineTo(cx+w*0.21, ay-h*0.015);
    ctx.lineTo(cx+w*0.21, ay+h*0.015);
    ctx.closePath();
    ctx.fill();
  });

  ctx.fillStyle = '#3366cc';
  ctx.font = `${h*0.028}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('N₂ (in)', cx+w*0.25, cy-h*0.02);

  ctx.fillStyle = '#111';
  ctx.font = `${h*0.028}px Arial`;
  ctx.fillText('Rhizobium', cx+w*0.22, cy+h*0.14);
  ctx.fillText('bacteroids', cx+w*0.22, cy+h*0.18);
  ctx.textAlign = 'center';
  ctx.font = `bold ${h*0.03}px Arial`;
  ctx.fillText('Root Nodule', w*0.5, h*0.06);
}

static drawPhytoplanktonCell(ctx, color, w, h) {
  // diatom (left)
  {
    const cx = w*0.28, cy = h*0.45;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = w*0.005;
    // frustule (box-like)
    const g = ctx.createLinearGradient(cx-w*0.1, cy, cx+w*0.1, cy);
    g.addColorStop(0, color.light);
    g.addColorStop(1, color.base);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.roundRect(cx-w*0.1, cy-h*0.12, w*0.2, h*0.24, w*0.015);
    ctx.fill(); ctx.stroke();
    // striae
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = w*0.002;
    for (let i = 1; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(cx-w*0.1, cy-h*0.12+i*(h*0.24/6));
      ctx.lineTo(cx+w*0.1, cy-h*0.12+i*(h*0.24/6));
      ctx.stroke();
    }
    // chloroplast
    ctx.fillStyle = 'rgba(50,180,50,0.6)';
    ctx.beginPath();
    ctx.ellipse(cx, cy, w*0.06, h*0.06, 0, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = '#111';
    ctx.font = `${h*0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Diatom', cx, cy+h*0.22);
  }

  // dinoflagellate (right)
  {
    const cx = w*0.72, cy = h*0.45;
    const g2 = ctx.createRadialGradient(cx-w*0.03, cy-h*0.05, 0, cx, cy, w*0.12);
    g2.addColorStop(0, color.light);
    g2.addColorStop(1, color.base);
    ctx.fillStyle = g2;
    ctx.beginPath();
    ctx.ellipse(cx, cy, w*0.12, h*0.15, 0, 0, Math.PI*2);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = w*0.005;
    ctx.stroke();

    // cingulum groove
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = w*0.004;
    ctx.beginPath();
    ctx.ellipse(cx, cy, w*0.12, h*0.04, 0, 0, Math.PI*2);
    ctx.stroke();

    // transverse flagellum
    ctx.strokeStyle = '#555';
    ctx.lineWidth = w*0.003;
    ctx.beginPath();
    ctx.arc(cx, cy, w*0.12, 0, Math.PI);
    ctx.stroke();

    // longitudinal flagellum
    ctx.beginPath();
    ctx.moveTo(cx, cy+h*0.15);
    ctx.bezierCurveTo(cx+w*0.04, cy+h*0.22, cx-w*0.02, cy+h*0.28, cx+w*0.01, cy+h*0.34);
    ctx.stroke();

    ctx.fillStyle = '#111';
    ctx.font = `${h*0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Dinoflagellate', cx, cy+h*0.22);
  }

  ctx.font = `bold ${h*0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillStyle = '#111';
  ctx.fillText('Phytoplankton Cell Types', w*0.5, h*0.1);
}

static drawZooplanktonCell(ctx, color, w, h) {
  const cx = w*0.5, cy = h*0.5;

  // main body (teardrop/oval)
  const g = ctx.createRadialGradient(cx-w*0.04, cy-h*0.06, 0, cx, cy, w*0.16);
  g.addColorStop(0, color.light);
  g.addColorStop(1, color.base);
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w*0.1, h*0.2, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = w*0.005;
  ctx.stroke();

  // head shield
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.ellipse(cx, cy-h*0.12, w*0.08, h*0.1, 0, 0, Math.PI*2);
  ctx.fill();

  // eye
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(cx, cy-h*0.15, w*0.025, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = '#111';
  ctx.beginPath();
  ctx.arc(cx+w*0.005, cy-h*0.15, w*0.012, 0, Math.PI*2);
  ctx.fill();

  // antennae
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = w*0.004;
  [[-1,1],[1,1]].forEach(([dir, len]) => {
    ctx.beginPath();
    ctx.moveTo(cx, cy-h*0.2);
    ctx.bezierCurveTo(cx+dir*w*0.05, cy-h*0.3, cx+dir*w*0.12, cy-h*0.25, cx+dir*w*0.18, cy-h*0.38);
    ctx.stroke();
    // setae on antennae
    for(let i = 0; i < 4; i++) {
      const t = 0.3 + i*0.2;
      const ax = cx + dir*w*0.18*t;
      const ay = cy - h*(0.2 + 0.18*t);
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(ax + dir*w*0.025, ay - h*0.02);
      ctx.stroke();
    }
  });

  // swimming legs (thoracopods)
  for(let i = 0; i < 4; i++) {
    const legY = cy - h*0.05 + i*h*0.07;
    [-1,1].forEach(side => {
      ctx.beginPath();
      ctx.moveTo(cx + side*w*0.1, legY);
      ctx.quadraticCurveTo(cx+side*w*0.16, legY+h*0.02, cx+side*w*0.2, legY+h*0.06);
      ctx.stroke();
    });
  }

  // egg sac
  ctx.fillStyle = 'rgba(255,220,100,0.7)';
  ctx.beginPath();
  ctx.ellipse(cx, cy+h*0.26, w*0.045, h*0.06, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = w*0.003;
  ctx.stroke();

  // labels
  ctx.fillStyle = '#111';
  ctx.font = `${h*0.028}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Antenna', cx+w*0.2, cy-h*0.3);
  ctx.fillText('Eye', cx+w*0.08, cy-h*0.17);
  ctx.fillText('Egg sac', cx+w*0.07, cy+h*0.28);
  ctx.font = `bold ${h*0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Copepod (Zooplankton)', w*0.5, h*0.08);
}

static drawWaterMolecule(ctx, color, w, h) {
  const cx = w*0.5, cy = h*0.5;
  const bondAngle = 104.5 * Math.PI / 180;
  const bondLen = w*0.2;

  const hx1 = cx + bondLen * Math.cos(Math.PI/2 + bondAngle/2);
  const hy1 = cy - bondLen * Math.sin(Math.PI/2 + bondAngle/2);
  const hx2 = cx + bondLen * Math.cos(Math.PI/2 - bondAngle/2);
  const hy2 = cy - bondLen * Math.sin(Math.PI/2 - bondAngle/2);

  // bonds
  ctx.strokeStyle = '#666';
  ctx.lineWidth = w*0.012;
  ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(hx1,hy1); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(hx2,hy2); ctx.stroke();

  // oxygen
  const og = ctx.createRadialGradient(cx-w*0.02, cy-h*0.02, 0, cx, cy, w*0.1);
  og.addColorStop(0, '#ff8888'); og.addColorStop(1, '#cc0000');
  ctx.fillStyle = og;
  ctx.beginPath(); ctx.arc(cx, cy, w*0.1, 0, Math.PI*2); ctx.fill();

  // hydrogen atoms
  const hg1 = ctx.createRadialGradient(hx1-w*0.01, hy1-h*0.01, 0, hx1, hy1, w*0.065);
  hg1.addColorStop(0, '#aaddff'); hg1.addColorStop(1, '#4488cc');
  ctx.fillStyle = hg1;
  ctx.beginPath(); ctx.arc(hx1, hy1, w*0.065, 0, Math.PI*2); ctx.fill();

  const hg2 = ctx.createRadialGradient(hx2-w*0.01, hy2-h*0.01, 0, hx2, hy2, w*0.065);
  hg2.addColorStop(0, '#aaddff'); hg2.addColorStop(1, '#4488cc');
  ctx.fillStyle = hg2;
  ctx.beginPath(); ctx.arc(hx2, hy2, w*0.065, 0, Math.PI*2); ctx.fill();

  // lone pair dots
  ctx.fillStyle = '#aa0000';
  [[-0.06,-0.06],[0.06,-0.06]].forEach(([dx,dy]) => {
    ctx.beginPath(); ctx.arc(cx+dx*w, cy+dy*h, w*0.012, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx+dx*w+w*0.025, cy+dy*h, w*0.012, 0, Math.PI*2); ctx.fill();
  });

  // bond angle arc
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = w*0.003;
  ctx.setLineDash([w*0.006, w*0.006]);
  ctx.beginPath();
  ctx.arc(cx, cy, bondLen*0.45, -(Math.PI/2 + bondAngle/2), -(Math.PI/2 - bondAngle/2));
  ctx.stroke();
  ctx.setLineDash([]);

  // labels
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('O', cx, cy+h*0.02);
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${h*0.04}px Arial`;
  ctx.fillText('H', hx1, hy1+h*0.015);
  ctx.fillText('H', hx2, hy2+h*0.015);

  ctx.fillStyle = '#333';
  ctx.font = `${h*0.03}px Arial`;
  ctx.fillText('104.5°', cx+w*0.01, cy+h*0.16);
  ctx.font = `bold ${h*0.03}px Arial`;
  ctx.fillText('Water Molecule (H₂O)', w*0.5, h*0.92);
}

static drawMethaneEmission(ctx, color, w, h) {
  const cx = w*0.5, cy = h*0.48;
  const bondLen = w*0.18;
  const dirs = [
    [0, -1],
    [Math.cos(-Math.PI/6), Math.sin(-Math.PI/6) * 0.7 + 0.6],
    [Math.cos(Math.PI + Math.PI/6), Math.sin(Math.PI + Math.PI/6) * 0.7 + 0.3],
    [1, 0.4],
  ];
  // tetrahedral approximation (2D projection)
  const hPos = [
    [cx, cy - bondLen],
    [cx + bondLen*0.94, cy + bondLen*0.35],
    [cx - bondLen*0.94, cy + bondLen*0.35],
    [cx, cy + bondLen*0.7],
  ];

  // bonds
  ctx.strokeStyle = '#666';
  ctx.lineWidth = w*0.01;
  ctx.lineCap = 'round';
  hPos.forEach(([hx,hy]) => {
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(hx,hy); ctx.stroke();
  });

  // carbon
  const cg = ctx.createRadialGradient(cx-w*0.02, cy-h*0.02, 0, cx, cy, w*0.09);
  cg.addColorStop(0, '#888'); cg.addColorStop(1, '#222');
  ctx.fillStyle = cg;
  ctx.beginPath(); ctx.arc(cx, cy, w*0.09, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${h*0.05}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('C', cx, cy+h*0.018);

  // hydrogens
  hPos.forEach(([hx,hy]) => {
    const hg = ctx.createRadialGradient(hx-w*0.01, hy-h*0.01, 0, hx, hy, w*0.055);
    hg.addColorStop(0, '#aaddff'); hg.addColorStop(1, '#4488cc');
    ctx.fillStyle = hg;
    ctx.beginPath(); ctx.arc(hx, hy, w*0.055, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${h*0.04}px Arial`;
    ctx.fillText('H', hx, hy+h*0.014);
  });

  // emission wavy arrows (from bottom)
  ctx.strokeStyle = color.base;
  ctx.lineWidth = w*0.004;
  [w*0.3, w*0.5, w*0.7].forEach((ax, i) => {
    ctx.beginPath();
    ctx.moveTo(ax, h*0.9);
    ctx.bezierCurveTo(ax+w*0.03, h*0.85, ax-w*0.03, h*0.8, ax, h*0.75);
    ctx.stroke();
    // arrowhead
    ctx.fillStyle = color.base;
    ctx.beginPath();
    ctx.moveTo(ax, h*0.75);
    ctx.lineTo(ax-w*0.015, h*0.78);
    ctx.lineTo(ax+w*0.015, h*0.78);
    ctx.closePath();
    ctx.fill();
  });

  ctx.fillStyle = '#333';
  ctx.font = `${h*0.028}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('CH₄ emission (e.g. wetlands, livestock)', w*0.5, h*0.96);
  ctx.font = `bold ${h*0.03}px Arial`;
  ctx.fillText('Methane (CH₄)', w*0.5, h*0.06);
}

static drawNitrogenMoleculeDetail(ctx, color, w, h) {
  const cx = w*0.5, cy = h*0.48;
  const r = w*0.09;
  const sep = w*0.22;

  const n1x = cx - sep/2, n2x = cx + sep/2;

  // triple bond (3 lines)
  ctx.lineCap = 'round';
  [-h*0.025, 0, h*0.025].forEach(offset => {
    ctx.strokeStyle = '#333';
    ctx.lineWidth = w*0.006;
    ctx.beginPath();
    ctx.moveTo(n1x + r, cy + offset);
    ctx.lineTo(n2x - r, cy + offset);
    ctx.stroke();
  });

  // nitrogen atoms
  [n1x, n2x].forEach(nx => {
    const g = ctx.createRadialGradient(nx-r*0.3, cy-r*0.3, 0, nx, cy, r);
    g.addColorStop(0, '#aac4ff');
    g.addColorStop(1, '#3355bb');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(nx, cy, r, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${h*0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('N', nx, cy + h*0.018);
  });

  // lone pair electrons
  ctx.fillStyle = '#ff8800';
  [
    [n1x - r - w*0.04, cy],
    [n2x + r + w*0.04, cy],
  ].forEach(([lpx, lpy]) => {
    ctx.beginPath(); ctx.arc(lpx, lpy, w*0.013, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(lpx, lpy + h*0.035, w*0.013, 0, Math.PI*2); ctx.fill();
  });

  // triple bond label
  ctx.fillStyle = '#333';
  ctx.font = `${h*0.028}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Triple Bond (≡)', cx, cy - h*0.12);
  ctx.fillText('Lone pair', n1x - w*0.1, cy + h*0.14);
  ctx.fillText('Lone pair', n2x + w*0.1, cy + h*0.14);

  // bond energy note
  ctx.font = `${h*0.025}px Arial`;
  ctx.fillStyle = '#555';
  ctx.fillText('Bond energy: 945 kJ/mol (very strong)', cx, cy + h*0.26);

  ctx.font = `bold ${h*0.032}px Arial`;
  ctx.fillStyle = '#111';
  ctx.fillText('Nitrogen Molecule (N₂)', w*0.5, h*0.1);
}

static drawATPMolecule(ctx, color, w, h) {
  const adenineX = w*0.18, riboseX = w*0.42, p1x = w*0.58, p2x = w*0.7, p3x = w*0.82;
  const cy = h*0.48;

  // Adenine base (simplified hexagon + pentagon)
  ctx.fillStyle = '#7a4fcf';
  ctx.strokeStyle = '#4a2a9f';
  ctx.lineWidth = w*0.004;
  // hexagon
  const hex = [];
  for(let i=0;i<6;i++) hex.push([adenineX + w*0.07*Math.cos(i*Math.PI/3), cy + h*0.12*Math.sin(i*Math.PI/3)]);
  ctx.beginPath(); ctx.moveTo(hex[0][0], hex[0][1]); hex.forEach(p=>ctx.lineTo(p[0],p[1])); ctx.closePath(); ctx.fill(); ctx.stroke();
  // pentagon
  const pent = [];
  for(let i=0;i<5;i++) pent.push([adenineX + w*0.07 + w*0.055*Math.cos(i*2*Math.PI/5 - Math.PI/2), cy + h*0.085*Math.sin(i*2*Math.PI/5 - Math.PI/2)]);
  ctx.fillStyle = '#9a6fef';
  ctx.beginPath(); ctx.moveTo(pent[0][0], pent[0][1]); pent.forEach(p=>ctx.lineTo(p[0],p[1])); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${h*0.028}px Arial`; ctx.textAlign='center';
  ctx.fillText('Adenine', adenineX, cy+h*0.22);

  // Ribose sugar
  ctx.fillStyle = '#e8a020';
  ctx.strokeStyle = '#b07010';
  ctx.lineWidth = w*0.004;
  const rpts = [];
  for(let i=0;i<5;i++) rpts.push([riboseX + w*0.065*Math.cos(i*2*Math.PI/5-Math.PI/2), cy + h*0.09*Math.sin(i*2*Math.PI/5-Math.PI/2)]);
  ctx.beginPath(); ctx.moveTo(rpts[0][0],rpts[0][1]); rpts.forEach(p=>ctx.lineTo(p[0],p[1])); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle='#fff'; ctx.fillText('Ribose', riboseX, cy+h*0.22);

  // connector
  ctx.strokeStyle='#555'; ctx.lineWidth=w*0.006;
  ctx.beginPath(); ctx.moveTo(adenineX+w*0.12, cy); ctx.lineTo(riboseX-w*0.07, cy); ctx.stroke();

  // 3 phosphate groups
  const pxs = [p1x, p2x, p3x];
  const pColors = ['#cc2222','#cc5522','#cc8822'];
  pxs.forEach((px,i) => {
    const g = ctx.createRadialGradient(px-w*0.02, cy-h*0.03, 0, px, cy, w*0.06);
    g.addColorStop(0, pColors[i]+'cc'); g.addColorStop(1, pColors[i]);
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(px, cy, w*0.055, 0, Math.PI*2); ctx.fill();
    ctx.strokeStyle='#800000'; ctx.lineWidth=w*0.003; ctx.stroke();
    ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.028}px Arial`; ctx.textAlign='center';
    ctx.fillText('P', px, cy+h*0.01);
    // bond
    if(i===0) { ctx.strokeStyle='#555'; ctx.lineWidth=w*0.006; ctx.beginPath(); ctx.moveTo(riboseX+w*0.065,cy); ctx.lineTo(px-w*0.055,cy); ctx.stroke(); }
    else { ctx.beginPath(); ctx.moveTo(pxs[i-1]+w*0.055,cy); ctx.lineTo(px-w*0.055,cy); ctx.stroke(); }
    // high-energy bond markers (~)
    if(i>0) {
      ctx.strokeStyle='#ffcc00'; ctx.lineWidth=w*0.004;
      const bx=(pxs[i-1]+px)/2;
      ctx.beginPath(); ctx.moveTo(bx-w*0.01,cy-h*0.02); ctx.bezierCurveTo(bx-w*0.005,cy+h*0.02,bx+w*0.005,cy-h*0.02,bx+w*0.01,cy+h*0.02); ctx.stroke();
    }
    ctx.fillStyle='#333'; ctx.font=`${h*0.024}px Arial`;
    ctx.fillText(`PO₄`, px, cy+h*0.2);
  });

  // legend
  ctx.fillStyle='#ffcc00'; ctx.fillRect(w*0.62,h*0.75,w*0.04,h*0.025);
  ctx.fillStyle='#333'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='left';
  ctx.fillText('~ High-energy bond', w*0.68, h*0.77);

  ctx.font=`bold ${h*0.032}px Arial`; ctx.textAlign='center';
  ctx.fillText('ATP (Adenosine Triphosphate)', w*0.5, h*0.1);
}

static drawChlorophyllMolecule(ctx, color, w, h) {
  const cx = w*0.5, cy = h*0.45;
  const pRadius = w*0.18;

  // porphyrin ring (simplified as 4 pyrrole groups around Mg)
  ctx.strokeStyle = '#2a8a2a';
  ctx.lineWidth = w*0.007;
  ctx.beginPath();
  ctx.arc(cx, cy, pRadius, 0, Math.PI*2);
  ctx.stroke();

  // 4 pyrrole rings at cardinal points
  [[0,-1],[1,0],[0,1],[-1,0]].forEach(([dx,dy], i) => {
    const px = cx + dx*pRadius, py = cy + dy*pRadius;
    ctx.fillStyle = i===3 ? '#4a9a4a' : '#3a8a3a';
    ctx.strokeStyle = '#1a6a1a'; ctx.lineWidth=w*0.004;
    ctx.beginPath();
    ctx.ellipse(px, py, w*0.055, h*0.055, i%2===0?0:Math.PI/2, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
  });

  // nitrogen atoms
  ctx.fillStyle = '#2244cc';
  [[0,-1],[1,0],[0,1],[-1,0]].forEach(([dx,dy]) => {
    ctx.beginPath();
    ctx.arc(cx+dx*pRadius*0.55, cy+dy*pRadius*0.55, w*0.022, 0, Math.PI*2);
    ctx.fill();
  });

  // central Mg
  const mg = ctx.createRadialGradient(cx-w*0.015, cy-h*0.015, 0, cx, cy, w*0.065);
  mg.addColorStop(0,'#aaffaa'); mg.addColorStop(1,'#22aa22');
  ctx.fillStyle = mg;
  ctx.beginPath(); ctx.arc(cx, cy, w*0.065, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.04}px Arial`; ctx.textAlign='center';
  ctx.fillText('Mg', cx, cy+h*0.015);

  // phytol tail (long hydrocarbon chain)
  ctx.strokeStyle='#888'; ctx.lineWidth=w*0.004;
  const tailStart = [cx, cy+pRadius];
  ctx.beginPath(); ctx.moveTo(tailStart[0], tailStart[1]);
  for(let i=0;i<8;i++) {
    ctx.lineTo(tailStart[0]+(i%2===0?w*0.04:-w*0.04), tailStart[1]+h*0.055*(i+1));
  }
  ctx.stroke();

  ctx.fillStyle='#333'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='left';
  ctx.fillText('N', cx+pRadius*0.55+w*0.015, cy+h*0.015);
  ctx.fillText('Phytol tail', cx+w*0.06, cy+pRadius+h*0.18);
  ctx.fillText('Porphyrin ring', cx+pRadius+w*0.02, cy);
  ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Chlorophyll (simplified)', w*0.5, h*0.07);
}

static drawPollenGrain(ctx, color, w, h) {
  const cx = w*0.5, cy = h*0.5;
  const r = w*0.22;

  // outer exine wall texture
  const g = ctx.createRadialGradient(cx-r*0.3, cy-r*0.3, 0, cx, cy, r);
  g.addColorStop(0, color.light);
  g.addColorStop(0.7, color.base);
  g.addColorStop(1, color.dark);
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.fill();
  ctx.strokeStyle = color.dark; ctx.lineWidth = w*0.005; ctx.stroke();

  // surface spines/sculptured exine
  const numSpines = 20;
  for(let i=0;i<numSpines;i++) {
    const a = i * 2*Math.PI / numSpines;
    const sx = cx + r*Math.cos(a), sy = cy + r*Math.sin(a);
    const ex = cx + (r+w*0.04)*Math.cos(a), ey = cy + (r+w*0.04)*Math.sin(a);
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = w*0.005;
    ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke();
    // spine tip
    ctx.fillStyle = color.dark;
    ctx.beginPath(); ctx.arc(ex, ey, w*0.007, 0, Math.PI*2); ctx.fill();
  }

  // apertures (colpi/pores) — 3 at equator
  ctx.fillStyle = color.dark;
  for(let i=0;i<3;i++) {
    const a = i * 2*Math.PI/3;
    const ax = cx + r*0.95*Math.cos(a), ay = cy + r*0.95*Math.sin(a);
    ctx.beginPath();
    ctx.ellipse(ax, ay, w*0.025, h*0.045, a, 0, Math.PI*2);
    ctx.fill();
  }

  // intine (inner wall)
  ctx.strokeStyle='rgba(255,255,255,0.4)';
  ctx.lineWidth=w*0.007;
  ctx.setLineDash([w*0.01, w*0.01]);
  ctx.beginPath(); ctx.arc(cx, cy, r*0.78, 0, Math.PI*2); ctx.stroke();
  ctx.setLineDash([]);

  // generative cell and tube cell nuclei
  ctx.fillStyle='rgba(255,220,50,0.8)';
  ctx.beginPath(); ctx.ellipse(cx, cy, w*0.06, h*0.07, 0, 0, Math.PI*2); ctx.fill();
  ctx.strokeStyle='rgba(180,140,0,0.8)'; ctx.lineWidth=w*0.003; ctx.stroke();
  ctx.fillStyle='rgba(255,150,50,0.7)';
  ctx.beginPath(); ctx.ellipse(cx+w*0.07, cy+h*0.05, w*0.035, h*0.04, 0.5, 0, Math.PI*2); ctx.fill();

  // labels
  ctx.fillStyle='#111'; ctx.font=`${h*0.027}px Arial`; ctx.textAlign='left';
  ctx.fillText('Spine', cx+r+w*0.05, cy-r*0.3);
  ctx.fillText('Aperture', cx+r*0.4, cy-r+h*0.01);
  ctx.fillText('Vegetative', cx-r-w*0.22, cy-h*0.04);
  ctx.fillText('nucleus', cx-r-w*0.22, cy+h*0.02);
  ctx.fillText('Generative cell', cx-r-w*0.22, cy+h*0.1);

  // pointer lines
  ctx.strokeStyle='#666'; ctx.lineWidth=w*0.002;
  ctx.beginPath(); ctx.moveTo(cx-r-w*0.01, cy); ctx.lineTo(cx-w*0.06, cy); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx-r-w*0.01, cy+h*0.12); ctx.lineTo(cx+w*0.04, cy+h*0.08); ctx.stroke();

  ctx.font=`bold ${h*0.032}px Arial`; ctx.textAlign='center';
  ctx.fillText('Pollen Grain', w*0.5, h*0.1);
}

static drawSedimentLayer(ctx, color, w, h) {
  const layers = [
    { label:'Clay / fine silt',  color:'#b0a080', pattern:'fine',   frac:0.18 },
    { label:'Sand',              color:'#d4b96a', pattern:'dots',   frac:0.16 },
    { label:'Gravel',            color:'#c49a4a', pattern:'coarse', frac:0.14 },
    { label:'Organic-rich mud',  color:'#5c4020', pattern:'organic',frac:0.18 },
    { label:'Limestone / chalk', color:'#e8e0c0', pattern:'fine',   frac:0.16 },
    { label:'Shale',             color:'#888070', pattern:'lines',  frac:0.18 },
  ];

  let y = h*0.06;
  const x0=w*0.1, bw=w*0.6;
  ctx.font=`${h*0.027}px Arial`;

  layers.forEach((layer,idx) => {
    const lh = h*layer.frac;
    ctx.fillStyle = layer.color;
    ctx.fillRect(x0, y, bw, lh);

    // pattern overlay
    if(layer.pattern==='dots') {
      ctx.fillStyle='rgba(180,140,50,0.4)';
      for(let i=0;i<40;i++) { ctx.beginPath(); ctx.arc(x0+Math.random()*bw, y+Math.random()*lh, w*0.006, 0, Math.PI*2); ctx.fill(); }
    } else if(layer.pattern==='coarse') {
      ctx.fillStyle='rgba(100,70,20,0.3)';
      for(let i=0;i<20;i++) { ctx.beginPath(); ctx.ellipse(x0+Math.random()*bw, y+Math.random()*lh, w*0.018, h*0.012, Math.random(), 0, Math.PI*2); ctx.fill(); }
    } else if(layer.pattern==='lines') {
      ctx.strokeStyle='rgba(0,0,0,0.15)'; ctx.lineWidth=1;
      for(let i=1;i<5;i++) { ctx.beginPath(); ctx.moveTo(x0,y+i*lh/5); ctx.lineTo(x0+bw,y+i*lh/5); ctx.stroke(); }
    } else if(layer.pattern==='organic') {
      ctx.fillStyle='rgba(100,60,10,0.3)';
      for(let i=0;i<15;i++) { ctx.beginPath(); ctx.arc(x0+Math.random()*bw, y+Math.random()*lh, w*0.01, 0, Math.PI*2); ctx.fill(); }
    }

    ctx.strokeStyle='rgba(0,0,0,0.25)'; ctx.lineWidth=1;
    ctx.strokeRect(x0, y, bw, lh);

    // age marker
    ctx.fillStyle='#111'; ctx.textAlign='left';
    ctx.fillText(layer.label, x0+bw+w*0.02, y+lh*0.6);

    // depth marker
    ctx.fillStyle='#555'; ctx.textAlign='right';
    ctx.fillText(`${Math.round((y-h*0.06)/(h*0.88)*100)}m`, x0-w*0.01, y+lh*0.6);

    y += lh;
  });

  // depth arrow
  ctx.strokeStyle='#333'; ctx.lineWidth=w*0.005;
  ctx.beginPath(); ctx.moveTo(x0-w*0.07, h*0.06); ctx.lineTo(x0-w*0.07, h*0.94); ctx.stroke();
  ctx.fillStyle='#333';
  ctx.beginPath(); ctx.moveTo(x0-w*0.07,h*0.94); ctx.lineTo(x0-w*0.1,h*0.88); ctx.lineTo(x0-w*0.04,h*0.88); ctx.closePath(); ctx.fill();
  ctx.save(); ctx.translate(x0-w*0.1, h*0.5); ctx.rotate(-Math.PI/2);
  ctx.font=`${h*0.028}px Arial`; ctx.textAlign='center'; ctx.fillStyle='#333';
  ctx.fillText('Depth', 0, 0); ctx.restore();

  ctx.font=`bold ${h*0.032}px Arial`; ctx.textAlign='center'; ctx.fillStyle='#111';
  ctx.fillText('Sediment / Rock Column', w*0.5, h*0.04);
}

static drawIceCore(ctx, color, w, h) {
  const cx = w*0.5, coreW = w*0.28;
  const x0 = cx - coreW/2, y0 = h*0.06, coreH = h*0.86;

  // core body
  const g = ctx.createLinearGradient(x0, 0, x0+coreW, 0);
  g.addColorStop(0,'#d0eeff'); g.addColorStop(0.4,'#eaf6ff'); g.addColorStop(1,'#a8d8f0');
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.roundRect(x0, y0, coreW, coreH, w*0.02); ctx.fill();
  ctx.strokeStyle='#6699bb'; ctx.lineWidth=w*0.006; ctx.stroke();

  // annual ice layers with slight colour variation
  const numLayers = 18;
  const lh = coreH / numLayers;
  const layerColors = ['rgba(200,235,255,0.6)','rgba(220,245,255,0.3)','rgba(180,220,245,0.5)'];
  for(let i=0;i<numLayers;i++) {
    const ly = y0 + i*lh;
    ctx.fillStyle = layerColors[i%3];
    ctx.fillRect(x0+2, ly+1, coreW-4, lh-1);
    ctx.strokeStyle='rgba(100,170,220,0.4)'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(x0, ly+lh); ctx.lineTo(x0+coreW, ly+lh); ctx.stroke();
  }

  // trapped air bubbles
  ctx.fillStyle='rgba(255,255,255,0.7)';
  for(let i=0;i<30;i++) {
    ctx.beginPath();
    ctx.arc(x0 + w*0.02 + Math.random()*coreW*0.8, y0 + Math.random()*coreH, w*0.008, 0, Math.PI*2);
    ctx.fill();
    ctx.strokeStyle='rgba(150,200,240,0.5)'; ctx.lineWidth=1; ctx.stroke();
  }

  // labels on right
  const labelData = [
    [y0 + lh*1.5, 'Recent (~10 yrs)'],
    [y0 + lh*6,   '100 years BP'],
    [y0 + lh*12,  '500 years BP'],
    [y0 + lh*17,  '1000+ years BP'],
  ];
  ctx.strokeStyle='#888'; ctx.lineWidth=w*0.002;
  ctx.fillStyle='#333'; ctx.font=`${h*0.028}px Arial`; ctx.textAlign='left';
  labelData.forEach(([ly, txt]) => {
    ctx.beginPath(); ctx.moveTo(x0+coreW, ly); ctx.lineTo(x0+coreW+w*0.03, ly); ctx.stroke();
    ctx.fillText(txt, x0+coreW+w*0.04, ly+h*0.01);
  });

  // air bubble callout
  ctx.strokeStyle='#666'; ctx.lineWidth=w*0.002;
  ctx.beginPath(); ctx.moveTo(x0-w*0.01, y0+coreH*0.5); ctx.lineTo(x0-w*0.08, y0+coreH*0.5); ctx.stroke();
  ctx.fillStyle='#333'; ctx.textAlign='right';
  ctx.fillText('Air bubble', x0-w*0.09, y0+coreH*0.5+h*0.01);
  ctx.fillText('(CO₂, CH₄)', x0-w*0.09, y0+coreH*0.5+h*0.04);

  ctx.font=`bold ${h*0.032}px Arial`; ctx.textAlign='center'; ctx.fillStyle='#111';
  ctx.fillText('Ice Core Cross-Section', w*0.5, h*0.04);
}

static drawWatershed(ctx, color, w, h) {
  // terrain fill
  const terrainG = ctx.createLinearGradient(0, 0, 0, h);
  terrainG.addColorStop(0,'#5a9a3a'); terrainG.addColorStop(0.5,'#7ab050'); terrainG.addColorStop(1,'#4a7a2a');
  ctx.fillStyle='#cde8f0'; ctx.fillRect(0,0,w,h);

  // ridgeline / watershed boundary
  const ridgeX = [0, w*0.1, w*0.22, w*0.35, w*0.5, w*0.65, w*0.78, w*0.9, w];
  const ridgeY = [h*0.5, h*0.25, h*0.15, h*0.2, h*0.12, h*0.18, h*0.22, h*0.3, h*0.55];
  ctx.fillStyle = terrainG;
  ctx.beginPath(); ctx.moveTo(0, h);
  ridgeX.forEach((rx,i) => ctx.lineTo(rx, ridgeY[i]));
  ctx.lineTo(w, h); ctx.closePath(); ctx.fill();

  // watershed boundary dashed
  ctx.strokeStyle='#cc3300'; ctx.lineWidth=w*0.005; ctx.setLineDash([w*0.015,w*0.01]);
  ctx.beginPath(); ctx.moveTo(ridgeX[0], ridgeY[0]);
  ridgeX.forEach((rx,i) => ctx.lineTo(rx, ridgeY[i]));
  ctx.stroke(); ctx.setLineDash([]);

  // main river channel
  ctx.strokeStyle='#2255cc'; ctx.lineWidth=w*0.012;
  ctx.beginPath();
  ctx.moveTo(w*0.5, h*0.18);
  ctx.bezierCurveTo(w*0.48, h*0.35, w*0.52, h*0.5, w*0.5, h*0.68);
  ctx.bezierCurveTo(w*0.49, h*0.78, w*0.47, h*0.86, w*0.45, h*0.95);
  ctx.stroke();

  // tributaries
  const tribs = [
    [w*0.2, h*0.25, w*0.42, h*0.45],
    [w*0.78, h*0.28, w*0.56, h*0.5],
    [w*0.3, h*0.55, w*0.47, h*0.62],
    [w*0.7, h*0.52, w*0.53, h*0.6],
  ];
  ctx.strokeStyle='#5588dd'; ctx.lineWidth=w*0.006;
  tribs.forEach(([x1,y1,x2,y2]) => {
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.bezierCurveTo(x1+(x2-x1)*0.4,y1,x2,y1+(y2-y1)*0.6,x2,y2); ctx.stroke();
  });

  // lake / outlet
  ctx.fillStyle='rgba(30,100,220,0.5)';
  ctx.beginPath(); ctx.ellipse(w*0.45, h*0.9, w*0.07, h*0.05, 0, 0, Math.PI*2); ctx.fill();

  // contour lines (simplified)
  ctx.strokeStyle='rgba(80,120,40,0.35)'; ctx.lineWidth=1; ctx.setLineDash([w*0.008,w*0.008]);
  [0.3,0.45,0.6].forEach(t => {
    ctx.beginPath(); ctx.ellipse(w*0.5, h*0.5, w*(0.1+t*0.3), h*(0.08+t*0.2), 0, 0, Math.PI*2); ctx.stroke();
  }); ctx.setLineDash([]);

  // labels
  ctx.fillStyle='#cc3300'; ctx.font=`bold ${h*0.028}px Arial`; ctx.textAlign='center';
  ctx.fillText('Watershed / Drainage Divide', w*0.5, h*0.09);
  ctx.fillStyle='#2255cc'; ctx.font=`${h*0.026}px Arial`;
  ctx.fillText('River', w*0.56, h*0.55);
  ctx.fillText('Tributary', w*0.2, h*0.22);
  ctx.fillText('Outlet / Lake', w*0.45, h*0.97);
  ctx.fillStyle='#333'; ctx.font=`${h*0.024}px Arial`;
  ctx.fillText('Contour lines', w*0.75, h*0.72);

  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.032}px Arial`; ctx.textAlign='center';
  ctx.fillText('Watershed (Catchment Area)', w*0.5, h*0.04);
}

