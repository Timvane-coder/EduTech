Here are the drawing methods for all missing organs/parts:
// ============================================================
// ANIMAL CELL — MISSING ORGANELLES
// ============================================================

static drawCentriole(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Draw two barrel-shaped centrioles arranged perpendicular to each other
  // Centriole 1 (horizontal)
  const c1x = centerX - w * 0.15, c1y = centerY;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Outer barrel
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.ellipse(c1x, c1y, w * 0.18, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // 9 triplet microtubule cross-section dots
  for (let i = 0; i < 9; i++) {
    const angle = (i / 9) * Math.PI * 2 - Math.PI / 2;
    const tx = c1x + Math.cos(angle) * w * 0.12;
    const ty = c1y + Math.sin(angle) * h * 0.065;
    ctx.fillStyle = color.base;
    ctx.beginPath();
    ctx.arc(tx, ty, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1;
    ctx.stroke();
    // inner A-tubule dot
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.arc(tx, ty, w * 0.007, 0, Math.PI * 2);
    ctx.fill();
  }

  // Centriole 2 (perpendicular — shown as foreshortened circle)
  const c2x = centerX + w * 0.2, c2y = centerY + h * 0.05;
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.ellipse(c2x, c2y, w * 0.09, h * 0.1, Math.PI / 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.stroke();

  for (let i = 0; i < 9; i++) {
    const angle = (i / 9) * Math.PI * 2 - Math.PI / 2;
    const tx = c2x + Math.cos(angle) * w * 0.055;
    const ty = c2y + Math.sin(angle) * h * 0.065;
    ctx.fillStyle = color.base;
    ctx.beginPath();
    ctx.arc(tx, ty, w * 0.014, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.arc(tx, ty, w * 0.005, 0, Math.PI * 2);
    ctx.fill();
  }

  // Pericentriolar material halo
  ctx.strokeStyle = 'rgba(200,180,255,0.4)';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.38, h * 0.22, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.04}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Centriole', centerX, h * 0.1);
  ctx.font = `${w * 0.032}px Arial`;
  ctx.fillText('9 Triplet Microtubules', centerX, h * 0.9);
}

static drawCytoskeleton(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Background cell outline
  ctx.strokeStyle = 'rgba(150,150,150,0.4)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.45, h * 0.45, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Microtubules (thick, straight, green)
  ctx.strokeStyle = 'rgba(0,180,80,0.85)';
  ctx.lineWidth = 3;
  const mtAngles = [0, 35, 70, 110, 150, 200, 250, 300, 340];
  mtAngles.forEach(deg => {
    const rad = (deg * Math.PI) / 180;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.cos(rad) * w * 0.44, centerY + Math.sin(rad) * h * 0.44);
    ctx.stroke();
  });

  // Actin microfilaments (thin, red, wavy)
  ctx.strokeStyle = 'rgba(220,50,50,0.75)';
  ctx.lineWidth = 1.5;
  for (let f = 0; f < 12; f++) {
    const startAngle = (f / 12) * Math.PI * 2;
    const ex = centerX + Math.cos(startAngle) * w * 0.43;
    const ey = centerY + Math.sin(startAngle) * h * 0.43;
    const crossAngle = startAngle + Math.PI * 0.6;
    const tx = centerX + Math.cos(crossAngle) * w * 0.35;
    const ty = centerY + Math.sin(crossAngle) * h * 0.35;
    const cp1x = (centerX + ex) / 2 + Math.cos(startAngle + 0.5) * w * 0.08;
    const cp1y = (centerY + ey) / 2 + Math.sin(startAngle + 0.5) * h * 0.08;
    ctx.beginPath();
    ctx.moveTo(ex, ey);
    ctx.quadraticCurveTo(cp1x, cp1y, tx, ty);
    ctx.stroke();
  }

  // Intermediate filaments (medium, orange, rope-like)
  ctx.strokeStyle = 'rgba(230,140,0,0.7)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 8; i++) {
    const a1 = (i / 8) * Math.PI * 2;
    const a2 = a1 + Math.PI * 0.55;
    ctx.beginPath();
    ctx.moveTo(centerX + Math.cos(a1) * w * 0.42, centerY + Math.sin(a1) * h * 0.42);
    ctx.bezierCurveTo(
      centerX + Math.cos(a1) * w * 0.2, centerY + Math.sin(a1) * h * 0.2,
      centerX + Math.cos(a2) * w * 0.2, centerY + Math.sin(a2) * h * 0.2,
      centerX + Math.cos(a2) * w * 0.42, centerY + Math.sin(a2) * h * 0.42
    );
    ctx.stroke();
  }

  // Legend
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.fillStyle = 'rgba(0,180,80,1)';
  ctx.textAlign = 'left';
  ctx.fillText('— Microtubules', w * 0.05, h * 0.08);
  ctx.fillStyle = 'rgba(220,50,50,1)';
  ctx.fillText('— Microfilaments', w * 0.05, h * 0.15);
  ctx.fillStyle = 'rgba(230,140,0,1)';
  ctx.fillText('— Intermediate Filaments', w * 0.05, h * 0.22);
}

static drawPeroxisome(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Single membrane (no double membrane unlike mitochondria)
  const grad = ctx.createRadialGradient(centerX - w * 0.05, centerY - h * 0.05, w * 0.02, centerX, centerY, w * 0.28);
  grad.addColorStop(0, color.light);
  grad.addColorStop(0.6, color.base);
  grad.addColorStop(1, color.dark);

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(centerX, centerY, w * 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 3;
  ctx.stroke();

  // Crystalline urate oxidase core (angular crystal shape)
  ctx.fillStyle = 'rgba(255,255,200,0.85)';
  ctx.strokeStyle = 'rgba(180,160,0,0.9)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - h * 0.14);
  ctx.lineTo(centerX + w * 0.12, centerY);
  ctx.lineTo(centerX, centerY + h * 0.14);
  ctx.lineTo(centerX - w * 0.12, centerY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Enzyme matrix dots (catalase, oxidase)
  const enzymePositions = [
    [centerX + w * 0.15, centerY - h * 0.1],
    [centerX - w * 0.17, centerY - h * 0.08],
    [centerX + w * 0.18, centerY + h * 0.1],
    [centerX - w * 0.15, centerY + h * 0.12],
    [centerX, centerY - h * 0.2],
    [centerX, centerY + h * 0.2],
  ];
  enzymePositions.forEach(([x, y]) => {
    ctx.fillStyle = 'rgba(255,100,100,0.8)';
    ctx.beginPath();
    ctx.arc(x, y, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(180,0,0,0.6)';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // H2O2 decomposition label
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Peroxisome', centerX, h * 0.1);
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillText('Catalase Core', centerX, centerY + h * 0.3);
  ctx.fillText('H₂O₂ → H₂O + O₂', centerX, h * 0.92);
}

static drawVesicle(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Phospholipid bilayer vesicle
  // Outer leaflet
  const grad = ctx.createRadialGradient(centerX - w * 0.06, centerY - h * 0.06, w * 0.01, centerX, centerY, w * 0.32);
  grad.addColorStop(0, 'rgba(255,220,180,0.9)');
  grad.addColorStop(0.7, color.base);
  grad.addColorStop(1, color.dark);

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(centerX, centerY, w * 0.32, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 4;
  ctx.stroke();

  // Inner leaflet ring
  ctx.strokeStyle = 'rgba(180,120,60,0.6)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, w * 0.27, 0, Math.PI * 2);
  ctx.stroke();

  // Lumen content
  ctx.fillStyle = 'rgba(230,240,255,0.5)';
  ctx.beginPath();
  ctx.arc(centerX, centerY, w * 0.24, 0, Math.PI * 2);
  ctx.fill();

  // Cargo molecules inside
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const r = w * 0.13;
    const cx = centerX + Math.cos(angle) * r;
    const cy = centerY + Math.sin(angle) * r * 0.8;
    ctx.fillStyle = 'rgba(100,150,255,0.7)';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.03, 0, Math.PI * 2);
    ctx.fill();
  }

  // Membrane proteins (bumps on surface)
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const px = centerX + Math.cos(angle) * w * 0.32;
    const py = centerY + Math.sin(angle) * w * 0.32;
    ctx.fillStyle = 'rgba(150,80,200,0.8)';
    ctx.beginPath();
    ctx.arc(px, py, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.04}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Vesicle', centerX, h * 0.1);
  ctx.font = `${w * 0.032}px Arial`;
  ctx.fillText('Cargo', centerX, centerY + h * 0.02);
}

static drawActinFilament(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Draw a double helical actin (F-actin) strand across the canvas
  // Two intertwined strands of G-actin monomers
  const numMonomers = 20;
  const amplitude = h * 0.1;
  const strand1Color = 'rgba(220,60,60,0.9)';
  const strand2Color = 'rgba(180,30,30,0.9)';

  for (let s = 0; s < 2; s++) {
    const phaseOffset = s === 0 ? 0 : Math.PI;
    ctx.strokeStyle = s === 0 ? strand1Color : strand2Color;
    ctx.lineWidth = w * 0.018;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    for (let i = 0; i <= numMonomers * 4; i++) {
      const t = i / (numMonomers * 4);
      const x = w * 0.05 + t * w * 0.9;
      const y = centerY + Math.sin(t * Math.PI * 4 + phaseOffset) * amplitude;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // G-actin monomer discs along strands
  for (let i = 0; i < numMonomers; i++) {
    for (let s = 0; s < 2; s++) {
      const phaseOffset = s === 0 ? 0 : Math.PI;
      const t = i / numMonomers;
      const x = w * 0.05 + t * w * 0.9;
      const y = centerY + Math.sin(t * Math.PI * 4 + phaseOffset) * amplitude;
      const grad = ctx.createRadialGradient(x - w * 0.01, y - h * 0.01, 0, x, y, w * 0.03);
      grad.addColorStop(0, 'rgba(255,160,160,1)');
      grad.addColorStop(1, 'rgba(180,30,30,0.9)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.028, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(120,0,0,0.7)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  // Barbed (+) and pointed (-) end labels
  ctx.fillStyle = '#333';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('(+) Barbed End', w * 0.13, h * 0.15);
  ctx.fillText('(−) Pointed End', w * 0.87, h * 0.15);

  // Arrow showing polymerization direction
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.85);
  ctx.lineTo(w * 0.85, h * 0.85);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.82, h * 0.82);
  ctx.lineTo(w * 0.85, h * 0.85);
  ctx.lineTo(w * 0.82, h * 0.88);
  ctx.stroke();
  ctx.font = `${w * 0.035}px Arial`;
  ctx.fillText('Polymerization →', centerX, h * 0.93);

  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.04}px Arial`;
  ctx.fillText('Actin Filament (F-actin)', centerX, h * 0.06);
}

static drawMicrotubule(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Microtubule cross-section (13 protofilaments arranged in ring) at left
  const csX = w * 0.2, csY = centerY;
  ctx.fillStyle = 'rgba(200,240,200,0.5)';
  ctx.beginPath();
  ctx.arc(csX, csY, w * 0.14, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,150,0,0.3)';
  ctx.lineWidth = 1;
  ctx.stroke();

  for (let i = 0; i < 13; i++) {
    const angle = (i / 13) * Math.PI * 2;
    const tx = csX + Math.cos(angle) * w * 0.11;
    const ty = csY + Math.sin(angle) * w * 0.11;
    const tg = ctx.createRadialGradient(tx - w * 0.008, ty - w * 0.008, 0, tx, ty, w * 0.022);
    tg.addColorStop(0, 'rgba(180,255,180,1)');
    tg.addColorStop(1, 'rgba(0,160,0,0.9)');
    ctx.fillStyle = tg;
    ctx.beginPath();
    ctx.arc(tx, ty, w * 0.022, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,100,0,0.8)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cross-section', csX, csY + w * 0.2);
  ctx.fillText('13 Protofilaments', csX, csY + w * 0.25);

  // Longitudinal view (hollow tube) at right
  const ltX = w * 0.65, ltY = centerY;
  const tubeW = w * 0.25, tubeH = h * 0.22;

  // Tube body
  ctx.fillStyle = 'rgba(180,230,180,0.6)';
  ctx.beginPath();
  ctx.rect(ltX - tubeW / 2, ltY - tubeH / 2, tubeW, tubeH);
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,120,0,0.8)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Protofilament lines along length
  ctx.strokeStyle = 'rgba(0,140,0,0.5)';
  ctx.lineWidth = 1;
  for (let i = 1; i < 13; i++) {
    const lx = ltX - tubeW / 2 + (i / 13) * tubeW;
    ctx.beginPath();
    ctx.moveTo(lx, ltY - tubeH / 2);
    ctx.lineTo(lx, ltY + tubeH / 2);
    ctx.stroke();
  }

  // Tubulin dimer markers (α/β alternating)
  for (let col = 0; col < 5; col++) {
    for (let row = 0; row < 2; row++) {
      const bx = ltX - tubeW / 2 + (col + 0.5) * (tubeW / 5);
      const by = ltY - tubeH / 4 + row * (tubeH / 2);
      ctx.fillStyle = row === 0 ? 'rgba(0,180,0,0.7)' : 'rgba(0,100,0,0.7)';
      ctx.beginPath();
      ctx.arc(bx, by, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.032}px Arial`;
  ctx.fillText('Longitudinal view', ltX, ltY + tubeH / 2 + h * 0.08);

  // (+) and (-) end labels
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.fillText('(+)', ltX + tubeW / 2 + w * 0.06, ltY);
  ctx.fillText('(−)', ltX - tubeW / 2 - w * 0.06, ltY);

  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Microtubule', centerX, h * 0.07);
}

static drawCytoplasm(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Cytoplasm fill with gradient to show gel-sol regions
  const bgGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, w * 0.46);
  bgGrad.addColorStop(0, 'rgba(240,248,255,0.95)');
  bgGrad.addColorStop(0.6, 'rgba(210,230,250,0.8)');
  bgGrad.addColorStop(1, 'rgba(180,210,240,0.6)');
  ctx.fillStyle = bgGrad;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.46, h * 0.46, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(100,150,200,0.5)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Cytosol flow lines (streaming)
  ctx.strokeStyle = 'rgba(100,160,220,0.3)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 8; i++) {
    const startAngle = (i / 8) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(centerX + Math.cos(startAngle) * w * 0.1, centerY + Math.sin(startAngle) * h * 0.1);
    const cp1x = centerX + Math.cos(startAngle + 0.8) * w * 0.25;
    const cp1y = centerY + Math.sin(startAngle + 0.8) * h * 0.25;
    const cp2x = centerX + Math.cos(startAngle + 1.4) * w * 0.35;
    const cp2y = centerY + Math.sin(startAngle + 1.4) * h * 0.35;
    const ex = centerX + Math.cos(startAngle + 1.8) * w * 0.2;
    const ey = centerY + Math.sin(startAngle + 1.8) * h * 0.2;
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, ex, ey);
    ctx.stroke();
  }

  // Dissolved ions/molecules (small colored dots)
  const ionColors = ['rgba(255,100,100,0.7)', 'rgba(100,100,255,0.7)', 'rgba(100,200,100,0.7)', 'rgba(255,200,0,0.7)'];
  for (let i = 0; i < 40; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * w * 0.38;
    const ix = centerX + Math.cos(angle) * r;
    const iy = centerY + Math.sin(angle) * r * (h / w);
    ctx.fillStyle = ionColors[i % ionColors.length];
    ctx.beginPath();
    ctx.arc(ix, iy, w * 0.008 + Math.random() * w * 0.008, 0, Math.PI * 2);
    ctx.fill();
  }

  // Nucleus placeholder
  ctx.fillStyle = 'rgba(200,180,255,0.5)';
  ctx.beginPath();
  ctx.arc(centerX, centerY, w * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(120,80,200,0.7)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Nucleus', centerX, centerY + w * 0.005);

  // Sol/gel region labels
  ctx.font = `italic ${w * 0.032}px Arial`;
  ctx.fillStyle = 'rgba(60,100,180,0.8)';
  ctx.fillText('Cytosol (sol region)', centerX + w * 0.2, centerY - h * 0.3);
  ctx.fillText('Ectoplasm (gel region)', centerX - w * 0.15, h * 0.88);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Cytoplasm', centerX, h * 0.07);
}

static drawNuclearPore(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Nuclear envelope cross section (double membrane)
  // Outer membrane
  ctx.fillStyle = 'rgba(200,180,255,0.2)';
  ctx.fillRect(0, centerY - h * 0.35, w, h * 0.7);

  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(0, centerY - h * 0.2);
  ctx.lineTo(w, centerY - h * 0.2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, centerY + h * 0.2);
  ctx.lineTo(w, centerY + h * 0.2);
  ctx.stroke();

  // Inner membrane
  ctx.strokeStyle = 'rgba(120,80,200,0.6)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, centerY - h * 0.13);
  ctx.lineTo(w, centerY - h * 0.13);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, centerY + h * 0.13);
  ctx.lineTo(w, centerY + h * 0.13);
  ctx.stroke();

  // Pore complex — central channel
  const poreW = w * 0.2;
  ctx.fillStyle = 'rgba(240,240,255,0.9)';
  ctx.beginPath();
  ctx.rect(centerX - poreW / 2, centerY - h * 0.2, poreW, h * 0.4);
  ctx.fill();

  // Spoke/ring subunits (8-fold symmetry shown as 2D)
  const numSpokes = 8;
  for (let i = 0; i < numSpokes; i++) {
    const spokeX = centerX - poreW / 2 + (i / (numSpokes - 1)) * poreW;
    // Cytoplasmic ring
    ctx.fillStyle = 'rgba(100,60,200,0.85)';
    ctx.beginPath();
    ctx.arc(spokeX, centerY - h * 0.2, w * 0.016, 0, Math.PI * 2);
    ctx.fill();
    // Nuclear ring
    ctx.beginPath();
    ctx.arc(spokeX, centerY + h * 0.2, w * 0.016, 0, Math.PI * 2);
    ctx.fill();
  }

  // Central transporter
  ctx.fillStyle = 'rgba(180,120,255,0.7)';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, poreW * 0.2, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(100,60,200,0.8)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // FG nucleoporins (filaments into channel)
  ctx.strokeStyle = 'rgba(200,100,255,0.5)';
  ctx.lineWidth = 1.5;
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(centerX + i * poreW * 0.15, centerY - h * 0.12);
    ctx.lineTo(centerX + i * poreW * 0.15 * 0.5, centerY - h * 0.02);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX + i * poreW * 0.15, centerY + h * 0.12);
    ctx.lineTo(centerX + i * poreW * 0.15 * 0.5, centerY + h * 0.02);
    ctx.stroke();
  }

  // Nuclear basket filaments
  ctx.strokeStyle = 'rgba(80,40,180,0.5)';
  ctx.lineWidth = 1.5;
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(centerX + i * poreW * 0.18, centerY + h * 0.2);
    ctx.quadraticCurveTo(
      centerX + i * poreW * 0.12, centerY + h * 0.32,
      centerX, centerY + h * 0.38
    );
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(centerX, centerY + h * 0.38, w * 0.02, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(80,40,180,0.6)';
  ctx.fill();

  // Labels
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.035}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Cytoplasm', w * 0.02, centerY - h * 0.3);
  ctx.fillText('Nucleus', w * 0.02, centerY + h * 0.4);
  ctx.fillText('Outer membrane', centerX + poreW * 0.6, centerY - h * 0.22);
  ctx.fillText('Inner membrane', centerX + poreW * 0.6, centerY - h * 0.15);
  ctx.fillText('Nuclear basket', centerX + poreW * 0.6, centerY + h * 0.38);
  ctx.font = `bold ${w * 0.04}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Nuclear Pore Complex', centerX, h * 0.07);
}

static drawChromatinFiber(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Draw nucleosomes along a DNA linker strand
  // DNA backbone (two strands)
  const numNucleosomes = 6;
  const spacing = w / (numNucleosomes + 1);

  // Linker DNA path
  ctx.strokeStyle = 'rgba(30,100,200,0.7)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  let prevX = w * 0.05, prevY = centerY;
  for (let i = 0; i < numNucleosomes; i++) {
    const nx = spacing * (i + 1);
    const ny = centerY + Math.sin(i * 1.2) * h * 0.08;
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(nx - w * 0.05, ny);
    prevX = nx + w * 0.05;
    prevY = ny;
  }
  ctx.lineTo(w * 0.95, centerY);
  ctx.stroke();

  // Nucleosomes
  for (let i = 0; i < numNucleosomes; i++) {
    const nx = spacing * (i + 1);
    const ny = centerY + Math.sin(i * 1.2) * h * 0.08;

    // Histone octamer core
    const hGrad = ctx.createRadialGradient(nx - w * 0.01, ny - h * 0.01, 0, nx, ny, w * 0.055);
    hGrad.addColorStop(0, 'rgba(255,220,100,1)');
    hGrad.addColorStop(0.6, 'rgba(220,160,40,0.9)');
    hGrad.addColorStop(1, 'rgba(160,100,0,0.8)');
    ctx.fillStyle = hGrad;
    ctx.beginPath();
    ctx.arc(nx, ny, w * 0.055, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(120,70,0,0.8)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // DNA wrapped around nucleosome (1.65 turns)
    ctx.strokeStyle = 'rgba(30,100,200,0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let t = 0; t <= Math.PI * 3.3; t += 0.1) {
      const r = w * 0.065;
      const wx = nx + Math.cos(t) * r;
      const wy = ny + Math.sin(t) * r * 0.5;
      if (t === 0) ctx.moveTo(wx, wy);
      else ctx.lineTo(wx, wy);
    }
    ctx.stroke();

    // H1 histone (linker histone)
    ctx.fillStyle = 'rgba(255,100,100,0.7)';
    ctx.beginPath();
    ctx.arc(nx + w * 0.04, ny - h * 0.07, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
  }

  // Condensed chromatin blob (heterochromatin) at right
  ctx.fillStyle = 'rgba(80,80,160,0.5)';
  ctx.beginPath();
  ctx.ellipse(w * 0.88, h * 0.75, w * 0.08, h * 0.1, 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(80,80,160,0.8)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Legend
  ctx.font = `${w * 0.032}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(220,160,40,1)';
  ctx.fillText('● Histone Octamer', w * 0.05, h * 0.88);
  ctx.fillStyle = 'rgba(30,100,200,1)';
  ctx.fillText('~ DNA (146 bp/nucleosome)', w * 0.05, h * 0.94);
  ctx.fillStyle = 'rgba(255,100,100,1)';
  ctx.fillText('● H1 (Linker Histone)', w * 0.5, h * 0.88);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Chromatin Fiber', centerX, h * 0.07);
}

static drawNuclearLamina(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Nuclear envelope
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.42, h * 0.42, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Nuclear lamina meshwork just inside envelope
  const numRings = 2;
  for (let r = 0; r < numRings; r++) {
    const rx = w * (0.38 - r * 0.04), ry = h * (0.38 - r * 0.04);
    ctx.strokeStyle = r === 0 ? 'rgba(180,100,255,0.8)' : 'rgba(140,60,220,0.5)';
    ctx.lineWidth = r === 0 ? 3 : 2;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, rx, ry, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Lamin filaments (meshwork pattern on the lamina ring)
  const meshPoints = [];
  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2;
    meshPoints.push([
      centerX + Math.cos(angle) * w * 0.38,
      centerY + Math.sin(angle) * h * 0.38
    ]);
  }
  ctx.strokeStyle = 'rgba(180,100,255,0.5)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < meshPoints.length; i++) {
    const next = meshPoints[(i + 3) % meshPoints.length];
    ctx.beginPath();
    ctx.moveTo(meshPoints[i][0], meshPoints[i][1]);
    ctx.lineTo(next[0], next[1]);
    ctx.stroke();
  }

  // Lamin B receptor (LBR) proteins anchoring lamina to envelope
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const px = centerX + Math.cos(angle) * w * 0.4;
    const py = centerY + Math.sin(angle) * h * 0.4;
    ctx.fillStyle = 'rgba(255,140,0,0.8)';
    ctx.beginPath();
    ctx.arc(px, py, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
  }

  // Chromatin tethered to lamina
  ctx.strokeStyle = 'rgba(30,100,200,0.4)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 + 0.3;
    ctx.beginPath();
    ctx.moveTo(
      centerX + Math.cos(angle) * w * 0.36,
      centerY + Math.sin(angle) * h * 0.36
    );
    ctx.lineTo(
      centerX + Math.cos(angle) * w * 0.22,
      centerY + Math.sin(angle) * h * 0.22
    );
    ctx.stroke();
    ctx.fillStyle = 'rgba(30,100,200,0.5)';
    ctx.beginPath();
    ctx.arc(
      centerX + Math.cos(angle) * w * 0.2,
      centerY + Math.sin(angle) * h * 0.2,
      w * 0.025, 0, Math.PI * 2
    );
    ctx.fill();
  }

  // Nuclear pore openings
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 + Math.PI / 6;
    const px = centerX + Math.cos(angle) * w * 0.42;
    const py = centerY + Math.sin(angle) * h * 0.42;
    ctx.fillStyle = 'rgba(240,240,255,0.9)';
    ctx.beginPath();
    ctx.arc(px, py, w * 0.022, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(100,60,200,0.8)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // Labels
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.032}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(180,100,255,1)';
  ctx.fillText('Nuclear Lamina', w * 0.04, h * 0.88);
  ctx.fillStyle = 'rgba(255,140,0,1)';
  ctx.fillText('LBR Anchor Proteins', w * 0.04, h * 0.94);
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Nuclear Lamina', centerX, h * 0.07);
}

// ============================================================
// PLANT CELL — MISSING COMPONENTS
// ============================================================

static drawChloroplastGranum(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  const numDiscs = 10;
  const discW = w * 0.35, discH = h * 0.028;
  const stackSpacing = h * 0.035;
  const stackTop = centerY - (numDiscs * stackSpacing) / 2;

  for (let i = 0; i < numDiscs; i++) {
    const dy = stackTop + i * stackSpacing;
    const lightness = 0.4 + (i % 2) * 0.2;

    // Thylakoid lumen fill
    const tGrad = ctx.createLinearGradient(centerX - discW / 2, dy, centerX + discW / 2, dy);
    tGrad.addColorStop(0, `rgba(0,${Math.floor(120 + lightness * 80)},0,0.9)`);
    tGrad.addColorStop(0.5, `rgba(0,${Math.floor(180 + lightness * 40)},0,0.7)`);
    tGrad.addColorStop(1, `rgba(0,${Math.floor(120 + lightness * 80)},0,0.9)`);

    ctx.fillStyle = tGrad;
    ctx.beginPath();
    ctx.ellipse(centerX, dy, discW / 2, discH / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#004000';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Thylakoid membrane detail (double line top)
    ctx.strokeStyle = 'rgba(0,80,0,0.6)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(centerX - discW * 0.45, dy - discH * 0.2);
    ctx.lineTo(centerX + discW * 0.45, dy - discH * 0.2);
    ctx.stroke();

    // Protein complexes (PSII, PSI, ATP synthase) as small bumps
    const complexPositions = [-0.3, -0.1, 0.1, 0.3];
    complexPositions.forEach(offset => {
      ctx.fillStyle = i % 3 === 0 ? 'rgba(255,200,0,0.8)' : 'rgba(100,200,255,0.7)';
      ctx.beginPath();
      ctx.arc(centerX + offset * discW, dy, w * 0.012, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  // Stroma lamella connecting top and bottom
  ctx.strokeStyle = 'rgba(0,100,0,0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(centerX + discW / 2, stackTop);
  ctx.lineTo(centerX + discW * 0.65, stackTop - h * 0.05);
  ctx.lineTo(centerX + discW * 0.65, stackTop + numDiscs * stackSpacing + h * 0.05);
  ctx.lineTo(centerX + discW / 2, stackTop + numDiscs * stackSpacing);
  ctx.stroke();

  // Labels
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.033}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Thylakoid discs', w * 0.72, centerY - h * 0.05);
  ctx.fillText('(stacked → Granum)', w * 0.72, centerY + h * 0.02);
  ctx.fillText('Stroma lamella', w * 0.72, stackTop - h * 0.04);
  ctx.fillStyle = 'rgba(255,200,0,1)';
  ctx.fillText('● ATP synthase/PS', w * 0.05, h * 0.92);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Chloroplast Granum', centerX, h * 0.07);
}

static drawMiddleLamella(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Two adjacent plant cells
  const cellW = w * 0.38, cellH = h * 0.7;

  // Cell 1 (left)
  ctx.fillStyle = 'rgba(200,240,200,0.4)';
  ctx.fillRect(w * 0.06, centerY - cellH / 2, cellW, cellH);
  ctx.strokeStyle = 'rgba(0,120,0,0.7)';
  ctx.lineWidth = 6;
  ctx.strokeRect(w * 0.06, centerY - cellH / 2, cellW, cellH);

  // Cell 2 (right)
  ctx.fillStyle = 'rgba(200,240,200,0.4)';
  ctx.fillRect(w * 0.56, centerY - cellH / 2, cellW, cellH);
  ctx.strokeStyle = 'rgba(0,120,0,0.7)';
  ctx.lineWidth = 6;
  ctx.strokeRect(w * 0.56, centerY - cellH / 2, cellW, cellH);

  // Middle lamella (pectin — between the two primary walls)
  const mlGrad = ctx.createLinearGradient(centerX - w * 0.05, 0, centerX + w * 0.05, 0);
  mlGrad.addColorStop(0, 'rgba(255,180,50,0.3)');
  mlGrad.addColorStop(0.5, 'rgba(255,150,0,0.9)');
  mlGrad.addColorStop(1, 'rgba(255,180,50,0.3)');
  ctx.fillStyle = mlGrad;
  ctx.fillRect(centerX - w * 0.04, centerY - cellH / 2, w * 0.08, cellH);

  // Primary cell walls (on either side of middle lamella)
  const wallColors = ['rgba(180,220,100,0.8)', 'rgba(180,220,100,0.8)'];
  [-1, 1].forEach((side, idx) => {
    ctx.fillStyle = wallColors[idx];
    ctx.fillRect(centerX + side * w * 0.04, centerY - cellH / 2, side * w * 0.06, cellH);
    ctx.strokeStyle = 'rgba(80,160,0,0.6)';
    ctx.lineWidth = 1;
    ctx.strokeRect(centerX + side * w * 0.04, centerY - cellH / 2, side * w * 0.06, cellH);
  });

  // Cellulose microfibrils pattern in primary wall
  ctx.strokeStyle = 'rgba(80,160,0,0.5)';
  ctx.lineWidth = 1;
  for (let y = centerY - cellH / 2 + 10; y < centerY + cellH / 2; y += 12) {
    [[-1, w * 0.04, w * 0.1], [1, w * 0.04, w * 0.1]].forEach(([side, start, width2]) => {
      ctx.beginPath();
      ctx.moveTo(centerX + side * start, y);
      ctx.lineTo(centerX + side * (start + width2), y + 4);
      ctx.stroke();
    });
  }

  // Pectin dots in middle lamella
  for (let py = centerY - cellH / 2 + 20; py < centerY + cellH / 2 - 10; py += 22) {
    ctx.fillStyle = 'rgba(220,100,0,0.7)';
    ctx.beginPath();
    ctx.arc(centerX, py, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  }

  // Labels
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.033}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Middle', centerX, centerY - h * 0.38);
  ctx.fillText('Lamella', centerX, centerY - h * 0.32);
  ctx.fillText('(Pectin)', centerX, centerY - h * 0.26);

  ctx.textAlign = 'left';
  ctx.fillText('Primary', w * 0.08, centerY - h * 0.38);
  ctx.fillText('Cell Wall', w * 0.08, centerY - h * 0.32);

  ctx.textAlign = 'right';
  ctx.fillText('Primary', w * 0.92, centerY - h * 0.38);
  ctx.fillText('Cell Wall', w * 0.92, centerY - h * 0.32);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Middle Lamella', centerX, h * 0.07);
}

static drawPrimaryPit(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Two adjacent cell walls with a pit pair
  const wallThickness = w * 0.08;

  // Left cell wall
  ctx.fillStyle = 'rgba(180,220,100,0.7)';
  ctx.fillRect(w * 0.1, centerY - h * 0.35, wallThickness, h * 0.7);
  ctx.strokeStyle = 'rgba(0,100,0,0.7)';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.1, centerY - h * 0.35, wallThickness, h * 0.7);

  // Right cell wall
  ctx.fillStyle = 'rgba(180,220,100,0.7)';
  ctx.fillRect(w * 0.82, centerY - h * 0.35, wallThickness, h * 0.7);
  ctx.strokeStyle = 'rgba(0,100,0,0.7)';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.82, centerY - h * 0.35, wallThickness, h * 0.7);

  // Central cavity between cells
  ctx.fillStyle = 'rgba(220,240,255,0.3)';
  ctx.fillRect(w * 0.18, centerY - h * 0.35, w * 0.64, h * 0.7);

  // Pit pair in left wall
  const pitW = w * 0.04, pitH = h * 0.18;
  // Pit cavity (thin area)
  ctx.fillStyle = 'rgba(240,255,240,0.9)';
  ctx.fillRect(w * 0.1, centerY - pitH / 2, wallThickness, pitH);
  ctx.strokeStyle = 'rgba(0,150,0,0.8)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(w * 0.1, centerY - pitH / 2, wallThickness, pitH);

  // Pit membrane (primary cell wall remnant in pit)
  ctx.fillStyle = 'rgba(150,200,80,0.7)';
  ctx.fillRect(w * 0.1 + wallThickness * 0.35, centerY - pitH / 2, wallThickness * 0.3, pitH);

  // Pit pair in right wall
  ctx.fillStyle = 'rgba(240,255,240,0.9)';
  ctx.fillRect(w * 0.82, centerY - pitH / 2, wallThickness, pitH);
  ctx.strokeStyle = 'rgba(0,150,0,0.8)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(w * 0.82, centerY - pitH / 2, wallThickness, pitH);

  ctx.fillStyle = 'rgba(150,200,80,0.7)';
  ctx.fillRect(w * 0.82 + wallThickness * 0.35, centerY - pitH / 2, wallThickness * 0.3, pitH);

  // Plasmodesmata through pit membrane
  ctx.strokeStyle = 'rgba(255,100,50,0.9)';
  ctx.lineWidth = 2;
  for (let i = -2; i <= 2; i++) {
    const py = centerY + i * pitH * 0.15;
    ctx.beginPath();
    ctx.moveTo(w * 0.18, py);
    ctx.lineTo(w * 0.82, py);
    ctx.stroke();
  }

  // Middle lamella
  ctx.fillStyle = 'rgba(255,150,0,0.5)';
  ctx.fillRect(w * 0.18, centerY - h * 0.35, w * 0.02, h * 0.7);
  ctx.fillRect(w * 0.8, centerY - h * 0.35, w * 0.02, h * 0.7);

  // Labels
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.033}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Pit Field', centerX, centerY + h * 0.4);
  ctx.fillStyle = 'rgba(255,100,50,1)';
  ctx.fillText('Plasmodesmata', centerX, centerY + h * 0.47);
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Primary Pit Field', centerX, h * 0.07);
}

static drawSecondaryWall(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Cross-section of tracheid/fiber showing 3-layered secondary wall
  const outerR = w * 0.42, midR = w * 0.28, innerR = w * 0.16, lumenR = w * 0.1;

  // S3 layer (innermost secondary wall)
  ctx.fillStyle = 'rgba(160,100,40,0.7)';
  ctx.beginPath();
  ctx.arc(centerX, centerY, outerR, 0, Math.PI * 2);
  ctx.fill();

  // S2 layer (thickest, main strength)
  ctx.fillStyle = 'rgba(200,140,60,0.8)';
  ctx.beginPath();
  ctx.arc(centerX, centerY, midR + w * 0.08, 0, Math.PI * 2);
  ctx.fill();

  // S1 layer
  ctx.fillStyle = 'rgba(220,180,100,0.8)';
  ctx.beginPath();
  ctx.arc(centerX, centerY, midR, 0, Math.PI * 2);
  ctx.fill();

  // Primary wall + middle lamella
  ctx.fillStyle = 'rgba(180,220,100,0.8)';
  ctx.beginPath();
  ctx.arc(centerX, centerY, innerR + w * 0.035, 0, Math.PI * 2);
  ctx.fill();

  // Lumen
  ctx.fillStyle = 'rgba(240,248,255,0.95)';
  ctx.beginPath();
  ctx.arc(centerX, centerY, lumenR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Cellulose microfibril angles per layer
  const layers = [
    { r: outerR - w * 0.04, angle: 75, color: 'rgba(120,60,0,0.6)', label: 'S3 (65-90°)' },
    { r: midR + w * 0.04, angle: 15, color: 'rgba(160,100,0,0.5)', label: 'S2 (10-30°)' },
    { r: midR - w * 0.04, angle: 60, color: 'rgba(180,140,40,0.5)', label: 'S1 (50-70°)' },
  ];

  layers.forEach(layer => {
    ctx.strokeStyle = layer.color;
    ctx.lineWidth = 1.5;
    const radAngle = (layer.angle * Math.PI) / 180;
    for (let i = 0; i < 12; i++) {
      const baseAngle = (i / 12) * Math.PI * 2;
      const bx = centerX + Math.cos(baseAngle) * layer.r;
      const by = centerY + Math.sin(baseAngle) * layer.r;
      ctx.beginPath();
      ctx.moveTo(bx - Math.cos(radAngle) * w * 0.04, by - Math.sin(radAngle) * w * 0.04);
      ctx.lineTo(bx + Math.cos(radAngle) * w * 0.04, by + Math.sin(radAngle) * w * 0.04);
      ctx.stroke();
    }
  });

  // Ring outlines
  [outerR, midR + w * 0.08, midR, innerR + w * 0.035, lumenR].forEach(r => {
    ctx.strokeStyle = 'rgba(80,40,0,0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Labels with lines
  const labelData = [
    { r: outerR - w * 0.04, angle: -30, text: 'S3 Layer' },
    { r: midR + w * 0.04, angle: 50, text: 'S2 Layer (thick)' },
    { r: midR - w * 0.04, angle: 130, text: 'S1 Layer' },
    { r: innerR, angle: 200, text: 'Primary Wall' },
    { r: 0, angle: 0, text: 'Lumen' },
  ];
  ctx.font = `${w * 0.032}px Arial`;
  ctx.fillStyle = '#000';
  labelData.forEach(ld => {
    if (ld.r === 0) {
      ctx.textAlign = 'center';
      ctx.fillText(ld.text, centerX, centerY + h * 0.025);
      return;
    }
    const a = (ld.angle * Math.PI) / 180;
    const lx = centerX + Math.cos(a) * (ld.r + w * 0.06);
    const ly = centerY + Math.sin(a) * (ld.r + w * 0.06);
    const tx = centerX + Math.cos(a) * (ld.r + w * 0.15);
    const ty = centerY + Math.sin(a) * (ld.r + w * 0.15);
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(lx, ly);
    ctx.lineTo(tx, ty);
    ctx.stroke();
    ctx.textAlign = Math.cos(a) > 0 ? 'left' : 'right';
    ctx.fillText(ld.text, tx + (Math.cos(a) > 0 ? 3 : -3), ty);
  });

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Secondary Cell Wall', centerX, h * 0.07);
}

static drawAmyloplast(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Outer membrane
  const grad = ctx.createRadialGradient(centerX - w * 0.05, centerY - h * 0.05, 0, centerX, centerY, w * 0.32);
  grad.addColorStop(0, 'rgba(255,250,220,0.95)');
  grad.addColorStop(0.7, 'rgba(240,230,180,0.9)');
  grad.addColorStop(1, 'rgba(200,180,120,0.8)');

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.38, h * 0.38, 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(180,140,60,0.9)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Starch grains (amyloplasts store starch)
  const grainPositions = [
    [centerX - w * 0.12, centerY - h * 0.1, w * 0.1, h * 0.14, 0.3],
    [centerX + w * 0.1, centerY - h * 0.05, w * 0.09, h * 0.12, -0.2],
    [centerX - w * 0.05, centerY + h * 0.1, w * 0.11, h * 0.13, 0.1],
    [centerX + w * 0.15, centerY + h * 0.1, w * 0.08, h * 0.1, 0.4],
  ];

  grainPositions.forEach(([gx, gy, grx, gry, rot]) => {
    // Layered starch grain with concentric rings
    for (let ring = 3; ring >= 0; ring--) {
      const scale = 1 - ring * 0.18;
      const lightness = 180 + ring * 18;
      ctx.fillStyle = `rgba(${lightness},${lightness - 20},${lightness - 60},${0.7 + ring * 0.07})`;
      ctx.beginPath();
      ctx.ellipse(gx, gy, grx * scale, gry * scale, rot, 0, Math.PI * 2);
      ctx.fill();
      if (ring < 3) {
        ctx.strokeStyle = 'rgba(180,140,60,0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    // Hilum (central point of grain)
    ctx.fillStyle = 'rgba(120,80,0,0.8)';
    ctx.beginPath();
    ctx.arc(gx, gy, w * 0.01, 0, Math.PI * 2);
    ctx.fill();
  });

  // Starch molecular structure dots (amylose helix hint)
  ctx.strokeStyle = 'rgba(180,140,60,0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let t = 0; t < Math.PI * 4; t += 0.2) {
    const r = w * 0.04;
    const sx = centerX + Math.cos(t) * r;
    const sy = centerY - h * 0.18 + Math.sin(t) * r * 0.4;
    if (t < 0.1) ctx.moveTo(sx, sy);
    else ctx.lineTo(sx, sy);
  }
  ctx.stroke();

  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.033}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Starch Grains', centerX + w * 0.15, centerY + h * 0.38);
  ctx.fillText('(Amylose + Amylopectin)', centerX, h * 0.92);
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Amyloplast', centerX, h * 0.07);
}

static drawChromoplast(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Outer envelope
  const grad = ctx.createRadialGradient(centerX - w * 0.05, centerY - h * 0.06, 0, centerX, centerY, w * 0.35);
  grad.addColorStop(0, 'rgba(255,240,80,0.95)');
  grad.addColorStop(0.5, 'rgba(255,160,0,0.9)');
  grad.addColorStop(1, 'rgba(200,80,0,0.85)');

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.4, h * 0.35, 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(180,60,0,0.9)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Carotenoid crystal structures (needle/globule types)
  // Globular chromoplasts (oil droplets with carotenoids)
  const globuleColors = ['rgba(255,60,0,0.8)', 'rgba(255,140,0,0.8)', 'rgba(255,220,0,0.8)', 'rgba(255,100,0,0.8)'];
  const globulePos = [
    [centerX - w * 0.18, centerY - h * 0.1],
    [centerX + w * 0.12, centerY - h * 0.12],
    [centerX, centerY + h * 0.08],
    [centerX - w * 0.08, centerY + h * 0.12],
    [centerX + w * 0.2, centerY + h * 0.06],
    [centerX - w * 0.22, centerY + h * 0.05],
  ];
  globulePos.forEach(([gx, gy], idx) => {
    ctx.fillStyle = globuleColors[idx % globuleColors.length];
    ctx.beginPath();
    ctx.arc(gx, gy, w * 0.04 + (idx % 3) * w * 0.01, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(180,40,0,0.5)';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Carotenoid needle crystals
  ctx.strokeStyle = 'rgba(255,80,0,0.7)';
  ctx.lineWidth = 2;
  const crystalAngles = [20, 60, 110, 145, 170, 200, 240, 290];
  crystalAngles.forEach(deg => {
    const rad = (deg * Math.PI) / 180;
    const cx = centerX + Math.cos(rad) * w * 0.1;
    const cy = centerY + Math.sin(rad) * h * 0.1;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(rad) * w * 0.12, cy + Math.sin(rad) * h * 0.1);
    ctx.stroke();
  });

  // Inner membrane
  ctx.strokeStyle = 'rgba(200,80,0,0.4)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.37, h * 0.32, 0.1, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.033}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Carotenoid Globules', centerX, h * 0.88);
  ctx.fillText('(β-carotene, lycopene, xanthophyll)', centerX, h * 0.94);
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Chromoplast', centerX, h * 0.07);
}

static drawLeucoplast(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Colorless/white plastid — three subtypes shown
  const types = [
    { x: w * 0.2, y: centerY - h * 0.05, label: 'Amyloplast', sublabel: '(starch)', fillColor: 'rgba(240,235,200,0.9)', strokeColor: 'rgba(180,160,80,0.8)' },
    { x: centerX, y: centerY + h * 0.08, label: 'Elaioplast', sublabel: '(oils/fats)', fillColor: 'rgba(255,245,200,0.9)', strokeColor: 'rgba(200,160,40,0.8)' },
    { x: w * 0.8, y: centerY - h * 0.05, label: 'Proteinoplast', sublabel: '(proteins)', fillColor: 'rgba(240,240,255,0.9)', strokeColor: 'rgba(160,160,200,0.8)' },
  ];

  types.forEach(t => {
    // Outer envelope
    ctx.fillStyle = t.fillColor;
    ctx.beginPath();
    ctx.ellipse(t.x, t.y, w * 0.13, h * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = t.strokeColor;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Inner membrane
    ctx.strokeStyle = t.strokeColor.replace('0.8', '0.5');
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(t.x, t.y, w * 0.11, h * 0.15, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Stroma content dots
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      ctx.fillStyle = t.strokeColor;
      ctx.beginPath();
      ctx.arc(t.x + Math.cos(angle) * w * 0.06, t.y + Math.sin(angle) * h * 0.08, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = '#000';
    ctx.font = `bold ${w * 0.033}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(t.label, t.x, t.y + h * 0.24);
    ctx.font = `${w * 0.028}px Arial`;
    ctx.fillText(t.sublabel, t.x, t.y + h * 0.31);
  });

  // Proplastid (undifferentiated) in center-top
  ctx.fillStyle = 'rgba(230,230,230,0.7)';
  ctx.beginPath();
  ctx.arc(centerX, h * 0.22, w * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(150,150,150,0.8)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#666';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Proplastid', centerX, h * 0.22 + h * 0.04);
  ctx.fillText('(undifferentiated)', centerX, h * 0.22 + h * 0.09);

  // Arrows from proplastid to each type
  ctx.strokeStyle = 'rgba(100,100,100,0.5)';
  ctx.lineWidth = 1.5;
  [[w * 0.2, centerY - h * 0.23], [centerX, centerY - h * 0.08], [w * 0.8, centerY - h * 0.23]].forEach(([tx, ty]) => {
    ctx.beginPath();
    ctx.moveTo(centerX, h * 0.29);
    ctx.lineTo(tx, ty);
    ctx.stroke();
  });

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Leucoplast Types', centerX, h * 0.07);
}

static drawCytoplasticStreaming(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Plant cell outline
  ctx.fillStyle = 'rgba(200,240,200,0.2)';
  ctx.beginPath();
  ctx.roundRect(w * 0.05, h * 0.05, w * 0.9, h * 0.9, [w * 0.05]);
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,120,0,0.7)';
  ctx.lineWidth = 5;
  ctx.stroke();

  // Large central vacuole
  ctx.fillStyle = 'rgba(180,220,255,0.4)';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.3, h * 0.35, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(100,160,220,0.6)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = 'rgba(100,160,220,0.6)';
  ctx.font = `${w * 0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Vacuole', centerX, centerY);

  // Streaming arrows (rotational cyclosis pattern)
  const streamPath = [
    [w * 0.12, h * 0.15], [w * 0.5, h * 0.1], [w * 0.88, h * 0.15],
    [w * 0.88, h * 0.5], [w * 0.88, h * 0.85], [w * 0.5, h * 0.9],
    [w * 0.12, h * 0.85], [w * 0.12, h * 0.5],
  ];

  // Draw stream line
  ctx.strokeStyle = 'rgba(50,150,50,0.6)';
  ctx.lineWidth = 3;
  ctx.setLineDash([8, 4]);
  ctx.beginPath();
  streamPath.forEach(([px, py], i) => {
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  });
  ctx.closePath();
  ctx.stroke();
  ctx.setLineDash([]);

  // Arrows along the stream
  const arrowPositions = [1, 3, 5, 7];
  arrowPositions.forEach(idx => {
    const [x1, y1] = streamPath[idx];
    const [x2, y2] = streamPath[(idx + 1) % streamPath.length];
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    ctx.fillStyle = 'rgba(0,140,0,0.8)';
    ctx.beginPath();
    ctx.moveTo(mx + Math.cos(angle) * w * 0.03, my + Math.sin(angle) * h * 0.03);
    ctx.lineTo(mx + Math.cos(angle + 2.4) * w * 0.025, my + Math.sin(angle + 2.4) * h * 0.025);
    ctx.lineTo(mx + Math.cos(angle - 2.4) * w * 0.025, my + Math.sin(angle - 2.4) * h * 0.025);
    ctx.closePath();
    ctx.fill();
  });

  // Organelles moving in stream
  const organelles = [
    [w * 0.2, h * 0.2, 'rgba(0,180,0,0.8)'],
    [w * 0.75, h * 0.25, 'rgba(220,160,40,0.8)'],
    [w * 0.82, h * 0.65, 'rgba(255,100,100,0.7)'],
    [w * 0.25, h * 0.75, 'rgba(100,100,255,0.7)'],
    [w * 0.15, h * 0.45, 'rgba(0,180,0,0.8)'],
  ];
  organelles.forEach(([ox, oy, oc]) => {
    ctx.fillStyle = oc;
    ctx.beginPath();
    ctx.ellipse(ox, oy, w * 0.04, h * 0.025, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.033}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Cyclosis direction →', w * 0.95, h * 0.08);
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cytoplasmic Streaming', centerX, h * 0.97);
}

// ============================================================
// CELL MEMBRANE — MISSING COMPONENTS
// ============================================================

static drawEndocytosis(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Extracellular space (top)
  ctx.fillStyle = 'rgba(200,230,255,0.3)';
  ctx.fillRect(0, 0, w, h * 0.45);
  ctx.fillStyle = 'rgba(200,200,220,0.15)';
  ctx.fillRect(0, h * 0.45, w, h * 0.55);

  // Membrane (horizontal)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 5;

  // Stage 1: flat membrane with ligand binding
  const s1x = w * 0.08;
  // Outer leaflet
  ctx.beginPath();
  ctx.moveTo(s1x, h * 0.43);
  ctx.lineTo(s1x + w * 0.18, h * 0.43);
  ctx.stroke();
  // Inner leaflet
  ctx.beginPath();
  ctx.moveTo(s1x, h * 0.5);
  ctx.lineTo(s1x + w * 0.18, h * 0.5);
  ctx.stroke();
  // Receptor proteins
  for (let i = 0; i < 3; i++) {
    const rx = s1x + w * 0.03 + i * w * 0.06;
    ctx.fillStyle = 'rgba(150,80,200,0.8)';
    ctx.beginPath();
    ctx.rect(rx - w * 0.01, h * 0.43, w * 0.02, h * 0.07);
    ctx.fill();
    // Ligand (red dot)
    ctx.fillStyle = 'rgba(255,80,80,0.9)';
    ctx.beginPath();
    ctx.arc(rx, h * 0.38, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = '#333';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('1. Ligand binding', s1x + w * 0.09, h * 0.62);

  // Stage 2: membrane invaginating
  const s2x = w * 0.32;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(s2x, h * 0.43);
  ctx.bezierCurveTo(s2x + w * 0.05, h * 0.43, s2x + w * 0.05, h * 0.62, s2x + w * 0.09, h * 0.62);
  ctx.bezierCurveTo(s2x + w * 0.13, h * 0.62, s2x + w * 0.13, h * 0.43, s2x + w * 0.18, h * 0.43);
  ctx.stroke();
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(s2x + w * 0.01, h * 0.5);
  ctx.bezierCurveTo(s2x + w * 0.05, h * 0.5, s2x + w * 0.05, h * 0.68, s2x + w * 0.09, h * 0.68);
  ctx.bezierCurveTo(s2x + w * 0.13, h * 0.68, s2x + w * 0.13, h * 0.5, s2x + w * 0.17, h * 0.5);
  ctx.stroke();
  // Clathrin coat (dots on cytoplasmic side)
  ctx.fillStyle = 'rgba(255,160,0,0.8)';
  for (let i = 0; i < 6; i++) {
    const t = i / 5;
    const pathX = s2x + w * 0.01 + t * w * 0.16;
    ctx.beginPath();
    ctx.arc(pathX, h * 0.53 + Math.sin(t * Math.PI) * h * 0.17, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(255,80,80,0.9)';
  ctx.beginPath();
  ctx.arc(s2x + w * 0.09, h * 0.58, w * 0.015, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#333';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('2. Invagination', s2x + w * 0.09, h * 0.85);
  ctx.fillText('(Clathrin-coated pit)', s2x + w * 0.09, h * 0.91);

  // Stage 3: vesicle pinched off
  const s3x = w * 0.62;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(s3x, h * 0.43);
  ctx.lineTo(s3x + w * 0.18, h * 0.43);
  ctx.stroke();
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(s3x, h * 0.5);
  ctx.lineTo(s3x + w * 0.18, h * 0.5);
  ctx.stroke();
  // Early endosome
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 4;
  ctx.fillStyle = 'rgba(220,210,255,0.7)';
  ctx.beginPath();
  ctx.arc(s3x + w * 0.09, h * 0.72, w * 0.065, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(180,150,220,0.5)';
  ctx.beginPath();
  ctx.arc(s3x + w * 0.09, h * 0.72, w * 0.053, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,80,80,0.9)';
  ctx.beginPath();
  ctx.arc(s3x + w * 0.09, h * 0.72, w * 0.02, 0, Math.PI * 2);
  ctx.fill();
  // Dynamin ring (pinching protein)
  ctx.strokeStyle = 'rgba(0,180,180,0.8)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(s3x + w * 0.09, h * 0.52, w * 0.018, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('3. Endosome', s3x + w * 0.09, h * 0.85);
  ctx.fillText('formation', s3x + w * 0.09, h * 0.91);

  // Arrows between stages
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2;
  [[s1x + w * 0.19, s2x - w * 0.01], [s2x + w * 0.19, s3x - w * 0.01]].forEach(([from, to]) => {
    ctx.beginPath();
    ctx.moveTo(from, h * 0.47);
    ctx.lineTo(to, h * 0.47);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(to - w * 0.015, h * 0.44);
    ctx.lineTo(to, h * 0.47);
    ctx.lineTo(to - w * 0.015, h * 0.5);
    ctx.stroke();
  });

  // Extracellular / cytoplasm labels
  ctx.fillStyle = 'rgba(80,120,200,0.7)';
  ctx.font = `italic ${w * 0.033}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Extracellular', w * 0.02, h * 0.12);
  ctx.fillText('Cytoplasm', w * 0.02, h * 0.78);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Endocytosis', centerX, h * 0.07);
}

static drawExocytosis(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Labels background zones
  ctx.fillStyle = 'rgba(200,230,255,0.3)';
  ctx.fillRect(0, 0, w, h * 0.45);
  ctx.fillStyle = 'rgba(200,200,220,0.15)';
  ctx.fillRect(0, h * 0.45, w, h * 0.55);

  ctx.fillStyle = 'rgba(80,120,200,0.7)';
  ctx.font = `italic ${w * 0.033}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Extracellular', w * 0.02, h * 0.12);
  ctx.fillText('Cytoplasm', w * 0.02, h * 0.9);

  // Draw 3 stages of exocytosis
  const stages = [
    { x: w * 0.1, label: '1. Secretory\nVesicle', phase: 0 },
    { x: w * 0.4, label: '2. Docking\n& Fusion', phase: 0.5 },
    { x: w * 0.7, label: '3. Content\nRelease', phase: 1 },
  ];

  stages.forEach(({ x, label, phase }) => {
    const stageCenter = x + w * 0.12;

    // Plasma membrane
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 5;
    ctx.beginPath();
    if (phase < 1) {
      ctx.moveTo(x, h * 0.43);
      ctx.lineTo(x + w * 0.24, h * 0.43);
    } else {
      // Fused — omega shape
      ctx.moveTo(x, h * 0.43);
      ctx.lineTo(x + w * 0.08, h * 0.43);
      ctx.bezierCurveTo(x + w * 0.08, h * 0.43, x + w * 0.07, h * 0.32, stageCenter, h * 0.32);
      ctx.bezierCurveTo(stageCenter + w * 0.05, h * 0.32, x + w * 0.17, h * 0.43, x + w * 0.16, h * 0.43);
      ctx.lineTo(x + w * 0.24, h * 0.43);
    }
    ctx.stroke();
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (phase < 1) {
      ctx.moveTo(x, h * 0.5);
      ctx.lineTo(x + w * 0.24, h * 0.5);
    } else {
      ctx.moveTo(x, h * 0.5);
      ctx.lineTo(x + w * 0.07, h * 0.5);
      ctx.bezierCurveTo(x + w * 0.07, h * 0.5, x + w * 0.065, h * 0.37, stageCenter, h * 0.37);
      ctx.bezierCurveTo(stageCenter + w * 0.045, h * 0.37, x + w * 0.175, h * 0.5, x + w * 0.17, h * 0.5);
      ctx.lineTo(x + w * 0.24, h * 0.5);
    }
    ctx.stroke();

    // Vesicle
    const vesicleY = phase === 0 ? h * 0.68 : phase === 0.5 ? h * 0.58 : h * 0.5;
    if (phase < 1) {
      ctx.fillStyle = 'rgba(220,210,255,0.8)';
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(stageCenter, vesicleY, w * 0.065, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Cargo inside
      ctx.fillStyle = 'rgba(255,160,80,0.8)';
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(stageCenter + Math.cos(a) * w * 0.03, vesicleY + Math.sin(a) * w * 0.03, w * 0.012, 0, Math.PI * 2);
        ctx.fill();
      }
      // SNARE proteins
      if (phase === 0.5) {
        ctx.strokeStyle = 'rgba(0,180,180,0.8)';
        ctx.lineWidth = 2;
        for (let i = -1; i <= 1; i++) {
          ctx.beginPath();
          ctx.moveTo(stageCenter + i * w * 0.03, vesicleY - w * 0.065);
          ctx.lineTo(stageCenter + i * w * 0.02, h * 0.5);
          ctx.stroke();
        }
      }
    } else {
      // Released cargo dots extracellularly
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        const dist = 0.06 + (i % 3) * 0.04;
        ctx.fillStyle = 'rgba(255,160,80,0.8)';
        ctx.beginPath();
        ctx.arc(stageCenter + Math.cos(a) * w * dist, h * 0.3 - Math.sin(a) * h * 0.04, w * 0.012, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Stage label
    ctx.fillStyle = '#333';
    ctx.font = `${w * 0.028}px Arial`;
    ctx.textAlign = 'center';
    label.split('\n').forEach((line, li) => {
      ctx.fillText(line, stageCenter, h * 0.85 + li * h * 0.06);
    });
  });

  // Arrows
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2;
  [[w * 0.34, w * 0.4], [w * 0.64, w * 0.7]].forEach(([from, to]) => {
    ctx.beginPath();
    ctx.moveTo(from, h * 0.47);
    ctx.lineTo(to, h * 0.47);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(to - w * 0.015, h * 0.44);
    ctx.lineTo(to, h * 0.47);
    ctx.lineTo(to - w * 0.015, h * 0.5);
    ctx.stroke();
  });

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Exocytosis', centerX, h * 0.07);
}

static drawOsmosis(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Two compartments separated by semipermeable membrane
  // Low solute (hypotonic) left, high solute (hypertonic) right
  ctx.fillStyle = 'rgba(200,230,255,0.5)';
  ctx.fillRect(w * 0.04, h * 0.15, centerX - w * 0.06, h * 0.7);
  ctx.fillStyle = 'rgba(150,190,255,0.7)';
  ctx.fillRect(centerX + w * 0.02, h * 0.15, centerX - w * 0.06, h * 0.7);

  // Membrane (vertical)
  ctx.fillStyle = color.base;
  ctx.fillRect(centerX - w * 0.025, h * 0.12, w * 0.05, h * 0.76);
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.strokeRect(centerX - w * 0.025, h * 0.12, w * 0.05, h * 0.76);

  // Pore channels in membrane
  for (let py = h * 0.2; py < h * 0.85; py += h * 0.12) {
    ctx.fillStyle = 'rgba(240,248,255,0.9)';
    ctx.fillRect(centerX - w * 0.012, py, w * 0.024, h * 0.04);
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1;
    ctx.strokeRect(centerX - w * 0.012, py, w * 0.024, h * 0.04);
  }

  // Water molecules (small blue circles)
  // Left side — many water molecules (low solute)
  for (let i = 0; i < 20; i++) {
    const wx = w * 0.06 + (i % 5) * w * 0.08;
    const wy = h * 0.2 + Math.floor(i / 5) * h * 0.14;
    ctx.fillStyle = 'rgba(100,180,255,0.8)';
    ctx.beginPath();
    ctx.arc(wx, wy, w * 0.022, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(30,100,200,0.5)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${w * 0.018}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('H₂O', wx, wy + h * 0.006);
  }

  // Right side — fewer water molecules + solute
  for (let i = 0; i < 10; i++) {
    const wx = centerX + w * 0.05 + (i % 4) * w * 0.1;
    const wy = h * 0.2 + Math.floor(i / 4) * h * 0.18;
    ctx.fillStyle = 'rgba(100,180,255,0.8)';
    ctx.beginPath();
    ctx.arc(wx, wy, w * 0.022, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(30,100,200,0.5)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${w * 0.018}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('H₂O', wx, wy + h * 0.006);
  }
  // Solute particles (right side)
  const soluteColors = ['rgba(255,100,100,0.8)', 'rgba(255,160,0,0.8)', 'rgba(200,50,200,0.8)'];
  for (let i = 0; i < 12; i++) {
    const sx = centerX + w * 0.06 + (i % 4) * w * 0.1;
    const sy = h * 0.33 + Math.floor(i / 4) * h * 0.14;
    ctx.fillStyle = soluteColors[i % 3];
    ctx.beginPath();
    ctx.arc(sx, sy, w * 0.024, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(150,0,0,0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Osmosis arrows (net flow: left → right through pores)
  ctx.strokeStyle = 'rgba(30,100,200,0.9)';
  ctx.lineWidth = 3;
  for (let ay = h * 0.22; ay < h * 0.82; ay += h * 0.15) {
    ctx.beginPath();
    ctx.moveTo(centerX - w * 0.06, ay);
    ctx.lineTo(centerX + w * 0.06, ay);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX + w * 0.045, ay - h * 0.025);
    ctx.lineTo(centerX + w * 0.06, ay);
    ctx.lineTo(centerX + w * 0.045, ay + h * 0.025);
    ctx.stroke();
  }

  // Labels
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.036}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Hypotonic', w * 0.23, h * 0.12);
  ctx.fillText('(Low solute)', w * 0.23, h * 0.18);
  ctx.fillText('Hypertonic', w * 0.77, h * 0.12);
  ctx.fillText('(High solute)', w * 0.77, h * 0.18);
  ctx.fillText('Semipermeable', centerX, h * 0.09);
  ctx.fillText('Membrane', centerX, h * 0.14);

  ctx.fillStyle = 'rgba(30,100,200,0.9)';
  ctx.font = `bold ${w * 0.034}px Arial`;
  ctx.fillText('Net H₂O flow →', centerX, h * 0.93);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Osmosis', centerX, h * 0.04);
}

static drawFacilitatedDiffusion(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Membrane (horizontal band)
  const memY = centerY;
  ctx.fillStyle = color.base;
  ctx.beginPath();
  ctx.rect(0, memY - h * 0.1, w, h * 0.2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Phospholipid head detail
  for (let i = 0; i < 16; i++) {
    const hx = w * 0.03 + i * w * 0.06;
    ctx.fillStyle = 'rgba(255,220,150,0.8)';
    ctx.beginPath();
    ctx.arc(hx, memY - h * 0.08, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(hx, memY + h * 0.08, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
  }

  // Channel protein (left)
  const chanX = w * 0.25;
  ctx.fillStyle = 'rgba(100,180,255,0.85)';
  ctx.beginPath();
  ctx.moveTo(chanX - w * 0.045, memY - h * 0.12);
  ctx.lineTo(chanX - w * 0.025, memY - h * 0.05);
  ctx.lineTo(chanX - w * 0.025, memY + h * 0.05);
  ctx.lineTo(chanX - w * 0.045, memY + h * 0.12);
  ctx.lineTo(chanX + w * 0.045, memY + h * 0.12);
  ctx.lineTo(chanX + w * 0.025, memY + h * 0.05);
  ctx.lineTo(chanX + w * 0.025, memY - h * 0.05);
  ctx.lineTo(chanX + w * 0.045, memY - h * 0.12);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(30,100,200,0.8)';
  ctx.lineWidth = 2;
  ctx.stroke();
  // Open channel pore
  ctx.fillStyle = 'rgba(230,245,255,0.9)';
  ctx.fillRect(chanX - w * 0.015, memY - h * 0.05, w * 0.03, h * 0.1);

  // Ions moving through channel
  for (let i = -1; i <= 1; i++) {
    ctx.fillStyle = i === 0 ? 'rgba(255,100,100,0.9)' : 'rgba(100,100,255,0.9)';
    ctx.beginPath();
    ctx.arc(chanX + i * w * 0.01, memY + i * h * 0.18, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${w * 0.016}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(i === 0 ? 'Na⁺' : 'K⁺', chanX + i * w * 0.01, memY + i * h * 0.18 + h * 0.007);
  }

  ctx.fillStyle = '#333';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Ion Channel', chanX, memY + h * 0.22);

  // Carrier protein (right)
  const carrX = w * 0.72;

  // Unloaded (open outward)
  ctx.fillStyle = 'rgba(150,100,255,0.8)';
  ctx.beginPath();
  ctx.moveTo(carrX - w * 0.05, memY - h * 0.12);
  ctx.bezierCurveTo(carrX - w * 0.04, memY - h * 0.04, carrX, memY - h * 0.15, carrX + w * 0.04, memY - h * 0.04);
  ctx.lineTo(carrX + w * 0.05, memY - h * 0.12);
  ctx.lineTo(carrX + w * 0.04, memY + h * 0.04);
  ctx.bezierCurveTo(carrX, memY + h * 0.04, carrX - w * 0.04, memY + h * 0.04, carrX - w * 0.04, memY + h * 0.04);
  ctx.lineTo(carrX - w * 0.05, memY + h * 0.12);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(80,0,200,0.8)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Substrate
  ctx.fillStyle = 'rgba(255,180,0,0.9)';
  ctx.beginPath();
  ctx.arc(carrX, memY - h * 0.22, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(180,100,0,0.7)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Conformational change arrow
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(carrX, memY + h * 0.15);
  ctx.lineTo(carrX, memY + h * 0.28);
  ctx.stroke();
  ctx.fillStyle = '#555';
  ctx.beginPath();
  ctx.moveTo(carrX - w * 0.015, memY + h * 0.25);
  ctx.lineTo(carrX, memY + h * 0.28);
  ctx.lineTo(carrX + w * 0.015, memY + h * 0.25);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#333';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Carrier Protein', carrX, memY + h * 0.35);
  ctx.fillText('(conformational change)', carrX, memY + h * 0.41);

  // Concentration gradient arrows
  ctx.strokeStyle = 'rgba(50,150,50,0.6)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.03, memY - h * 0.35);
  ctx.lineTo(w * 0.03, memY + h * 0.35);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(50,150,50,0.8)';
  ctx.font = `${w * 0.026}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('High [C]', w * 0.04, memY - h * 0.28);
  ctx.fillText('Low [C]', w * 0.04, memY + h * 0.28);
  ctx.strokeStyle = 'rgba(50,150,50,0.6)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.04, memY - h * 0.2);
  ctx.lineTo(w * 0.04, memY + h * 0.2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.025, memY + h * 0.17);
  ctx.lineTo(w * 0.04, memY + h * 0.2);
  ctx.lineTo(w * 0.055, memY + h * 0.17);
  ctx.stroke();

  // Zone labels
  ctx.fillStyle = 'rgba(80,120,200,0.7)';
  ctx.font = `italic ${w * 0.033}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Extracellular', w * 0.97, memY - h * 0.3);
  ctx.fillText('Cytoplasm', w * 0.97, memY + h * 0.3);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Facilitated Diffusion', centerX, h * 0.07);
}

static drawIonChannel(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Three ion channel types side by side
  const types = [
    { x: w * 0.17, label: 'Leak Channel', sublabel: '(always open)', gated: false, open: true },
    { x: w * 0.5, label: 'Voltage-Gated', sublabel: '(opens at −55mV)', gated: true, open: true, gateColor: 'rgba(255,100,0,0.85)' },
    { x: w * 0.83, label: 'Ligand-Gated', sublabel: '(opens w/ ligand)', gated: true, open: false, gateColor: 'rgba(50,200,50,0.85)', hasLigand: true },
  ];

  // Membrane bands
  ctx.fillStyle = color.base;
  ctx.fillRect(0, centerY - h * 0.12, w, h * 0.24);
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  for (let l = 0; l < 2; l++) {
    const ly = l === 0 ? centerY - h * 0.12 : centerY + h * 0.12;
    ctx.beginPath();
    ctx.moveTo(0, ly);
    ctx.lineTo(w, ly);
    ctx.stroke();
  }

  types.forEach(({ x, label, sublabel, gated, open, gateColor, hasLigand }) => {
    const channelW = w * 0.1, channelH = h * 0.26;
    const cx = x;

    // Protein subunits (two halves)
    [-1, 1].forEach(side => {
      ctx.fillStyle = 'rgba(100,150,220,0.85)';
      ctx.beginPath();
      ctx.moveTo(cx + side * channelW * 0.15, centerY - channelH / 2);
      ctx.lineTo(cx + side * channelW * 0.5, centerY - channelH * 0.1);
      ctx.lineTo(cx + side * channelW * 0.5, centerY + channelH * 0.1);
      ctx.lineTo(cx + side * channelW * 0.15, centerY + channelH / 2);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = 'rgba(30,80,180,0.7)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Selectivity filter
    ctx.fillStyle = 'rgba(180,210,255,0.7)';
    ctx.fillRect(cx - channelW * 0.12, centerY - h * 0.02, channelW * 0.24, h * 0.04);

    // Pore (open or closed)
    if (open) {
      ctx.fillStyle = 'rgba(220,240,255,0.9)';
      ctx.fillRect(cx - channelW * 0.12, centerY - channelH * 0.35, channelW * 0.24, channelH * 0.7);
    }

    // Gate mechanism
    if (gated) {
      if (open) {
        // Gate is swung open (to side)
        ctx.fillStyle = gateColor;
        ctx.beginPath();
        ctx.rect(cx + channelW * 0.2, centerY - h * 0.04, channelW * 0.3, h * 0.08);
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,0,0,0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
      } else {
        // Gate is closed (blocking pore)
        ctx.fillStyle = gateColor;
        ctx.beginPath();
        ctx.rect(cx - channelW * 0.14, centerY - h * 0.045, channelW * 0.28, h * 0.09);
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,0,0,0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Voltage sensor or ligand binding site
      if (!hasLigand) {
        // Voltage sensor (charged helices — +/- symbols)
        ctx.fillStyle = 'rgba(255,200,0,0.8)';
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(cx - channelW * 0.65, centerY - h * 0.06 + i * h * 0.06, w * 0.013, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = '#333';
        ctx.font = `bold ${w * 0.022}px Arial`;
        ctx.textAlign = 'center';
        ['+', '+', '+'].forEach((c, i) => ctx.fillText(c, cx - channelW * 0.65, centerY - h * 0.055 + i * h * 0.06));
      } else {
        // Ligand binding site
        ctx.fillStyle = 'rgba(50,200,50,0.9)';
        ctx.beginPath();
        ctx.arc(cx, centerY - channelH * 0.45, w * 0.028, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,120,0,0.7)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = '#fff';
        ctx.font = `bold ${w * 0.018}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('L', cx, centerY - channelH * 0.44);
      }
    }

    // Ion passing through (if open)
    if (open) {
      for (let i = -1; i <= 1; i++) {
        const ionY = centerY + i * channelH * 0.2;
        ctx.fillStyle = 'rgba(255,80,80,0.85)';
        ctx.beginPath();
        ctx.arc(cx, ionY, w * 0.018, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = `bold ${w * 0.014}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('Na⁺', cx, ionY + h * 0.005);
      }
    }

    // Labels
    ctx.fillStyle = '#000';
    ctx.font = `bold ${w * 0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, cx, centerY + channelH / 2 + h * 0.1);
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(sublabel, cx, centerY + channelH / 2 + h * 0.17);
  });

  // Zone labels
  ctx.fillStyle = 'rgba(80,120,200,0.7)';
  ctx.font = `italic ${w * 0.033}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Extracellular', w * 0.02, centerY - h * 0.22);
  ctx.fillText('Cytoplasm', w * 0.02, centerY + h * 0.22);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Ion Channels', centerX, h * 0.07);
}

static drawATPase(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Membrane context
  ctx.fillStyle = color.base;
  ctx.fillRect(0, centerY - h * 0.1, w, h * 0.2);
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  [centerY - h * 0.1, centerY + h * 0.1].forEach(y => {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  });

  // F0 subunit (membrane-spanning proton channel — c-ring)
  const f0X = centerX, f0Y = centerY;
  const cRingR = w * 0.12;
  ctx.fillStyle = 'rgba(100,180,120,0.8)';
  ctx.beginPath();
  ctx.arc(f0X, f0Y, cRingR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,120,40,0.8)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // c-ring subunits (10-14 c subunits)
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const cx = f0X + Math.cos(angle) * cRingR * 0.78;
    const cy = f0Y + Math.sin(angle) * cRingR * 0.78;
    ctx.fillStyle = 'rgba(80,200,100,0.9)';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.016, 0, Math.PI * 2);
    ctx.fill();
  }

  // Central a-subunit
  ctx.fillStyle = 'rgba(150,220,160,0.7)';
  ctx.beginPath();
  ctx.arc(f0X, f0Y, cRingR * 0.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.025}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('a', f0X, f0Y + h * 0.01);

  // F1 subunit (stalk + catalytic head — matrix side)
  // Stalk (γ subunit)
  ctx.fillStyle = 'rgba(255,160,50,0.85)';
  ctx.beginPath();
  ctx.rect(f0X - w * 0.025, centerY - h * 0.1, w * 0.05, h * 0.2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(180,80,0,0.7)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `bold ${w * 0.025}px Arial`;
  ctx.fillText('γ', f0X, centerY + h * 0.04);

  // α3β3 hexameric head
  const headY = centerY - h * 0.28, headR = w * 0.15;
  ctx.fillStyle = 'rgba(200,180,255,0.7)';
  ctx.beginPath();
  ctx.arc(f0X, headY, headR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(120,80,200,0.8)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // α and β subunits (alternating)
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 6;
    const sx = f0X + Math.cos(angle) * headR * 0.7;
    const sy = headY + Math.sin(angle) * headR * 0.7;
    ctx.fillStyle = i % 2 === 0 ? 'rgba(150,120,255,0.9)' : 'rgba(220,200,255,0.9)';
    ctx.beginPath();
    ctx.arc(sx, sy, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.font = `bold ${w * 0.022}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(i % 2 === 0 ? 'β' : 'α', sx, sy + h * 0.008);
  }

  // ATP being synthesized label in head
  ctx.fillStyle = 'rgba(255,220,0,0.9)';
  ctx.beginPath();
  ctx.arc(f0X, headY, w * 0.035, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.02}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('ATP', f0X, headY + h * 0.008);

  // Proton flow arrows (H+ from intermembrane space → matrix)
  ctx.strokeStyle = 'rgba(255,80,80,0.8)';
  ctx.lineWidth = 2.5;
  for (let i = -1; i <= 1; i++) {
    const arrowX = f0X - w * 0.3 + i * w * 0.1;
    ctx.beginPath();
    ctx.moveTo(arrowX, centerY - h * 0.25);
    ctx.lineTo(arrowX, centerY + h * 0.25);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(arrowX - w * 0.015, centerY + h * 0.22);
    ctx.lineTo(arrowX, centerY + h * 0.25);
    ctx.lineTo(arrowX + w * 0.015, centerY + h * 0.22);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,80,80,0.9)';
    ctx.font = `bold ${w * 0.024}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('H⁺', arrowX, centerY - h * 0.28);
  }

  // ADP + Pi → ATP label
  ctx.fillStyle = '#333';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('ADP + Pᵢ', f0X + w * 0.38, headY - h * 0.05);
  ctx.fillText('→ ATP', f0X + w * 0.38, headY + h * 0.02);

  // Zone labels
  ctx.fillStyle = 'rgba(80,120,200,0.7)';
  ctx.font = `italic ${w * 0.03}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Intermembrane space (H⁺ high)', w * 0.97, centerY - h * 0.22);
  ctx.fillText('Matrix (H⁺ low)', w * 0.97, centerY + h * 0.22);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('ATP Synthase (F₀F₁-ATPase)', centerX, h * 0.07);
}

static drawCotransporter(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Membrane
  ctx.fillStyle = color.base;
  ctx.fillRect(0, centerY - h * 0.1, w, h * 0.2);
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  [centerY - h * 0.1, centerY + h * 0.1].forEach(y => {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  });

  // Symporter (left)
  const symX = w * 0.28;
  ctx.fillStyle = 'rgba(100,180,255,0.85)';
  ctx.beginPath();
  ctx.ellipse(symX, centerY, w * 0.1, h * 0.18, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(30,100,200,0.8)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Binding sites (two, for Na+ and glucose)
  ctx.fillStyle = 'rgba(255,80,80,0.9)';
  ctx.beginPath();
  ctx.arc(symX - w * 0.04, centerY - h * 0.28, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${w * 0.018}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Na⁺', symX - w * 0.04, centerY - h * 0.273);

  ctx.fillStyle = 'rgba(255,200,0,0.9)';
  ctx.beginPath();
  ctx.arc(symX + w * 0.04, centerY - h * 0.3, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#333';
  ctx.font = `bold ${w * 0.016}px Arial`;
  ctx.fillText('Gluc', symX + w * 0.04, centerY - h * 0.293);

  // Both arrows pointing same direction (symport)
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 2.5;
  [-1, 1].forEach(side => {
    const ax = symX + side * w * 0.04;
    ctx.beginPath();
    ctx.moveTo(ax, centerY - h * 0.22);
    ctx.lineTo(ax, centerY + h * 0.22);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ax - w * 0.012, centerY + h * 0.18);
    ctx.lineTo(ax, centerY + h * 0.22);
    ctx.lineTo(ax + w * 0.012, centerY + h * 0.18);
    ctx.stroke();
  });

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Symporter', symX, centerY + h * 0.35);
  ctx.font = `${w * 0.026}px Arial`;
  ctx.fillText('(Na⁺ + Glucose)', symX, centerY + h * 0.42);

  // Antiporter (right)
  const antX = w * 0.72;
  ctx.fillStyle = 'rgba(255,150,100,0.85)';
  ctx.beginPath();
  ctx.ellipse(antX, centerY, w * 0.1, h * 0.18, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(180,60,0,0.8)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Na+ going in, K+ going out (Na/K exchanger example)
  ctx.fillStyle = 'rgba(255,80,80,0.9)';
  ctx.beginPath();
  ctx.arc(antX - w * 0.04, centerY - h * 0.28, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${w * 0.018}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Na⁺', antX - w * 0.04, centerY - h * 0.273);

  ctx.fillStyle = 'rgba(100,100,255,0.9)';
  ctx.beginPath();
  ctx.arc(antX + w * 0.04, centerY + h * 0.28, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${w * 0.018}px Arial`;
  ctx.fillText('K⁺', antX + w * 0.04, centerY + h * 0.287);

  // Arrows in opposite directions (antiport)
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(antX - w * 0.04, centerY - h * 0.22);
  ctx.lineTo(antX - w * 0.04, centerY + h * 0.22);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(antX - w * 0.052, centerY + h * 0.18);
  ctx.lineTo(antX - w * 0.04, centerY + h * 0.22);
  ctx.lineTo(antX - w * 0.028, centerY + h * 0.18);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(antX + w * 0.04, centerY + h * 0.22);
  ctx.lineTo(antX + w * 0.04, centerY - h * 0.22);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(antX + w * 0.028, centerY - h * 0.18);
  ctx.lineTo(antX + w * 0.04, centerY - h * 0.22);
  ctx.lineTo(antX + w * 0.052, centerY - h * 0.18);
  ctx.stroke();

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Antiporter', antX, centerY + h * 0.35);
  ctx.font = `${w * 0.026}px Arial`;
  ctx.fillText('(Na⁺ ↔ K⁺)', antX, centerY + h * 0.42);

  // Na⁺ gradient label (drives symporter — secondary active)
  ctx.fillStyle = 'rgba(255,80,80,0.8)';
  ctx.font = `italic ${w * 0.028}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('[Na⁺] high outside → drives cotransport', centerX, h * 0.1);

  // Zone labels
  ctx.fillStyle = 'rgba(80,120,200,0.7)';
  ctx.font = `italic ${w * 0.03}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Extracellular', w * 0.02, centerY - h * 0.22);
  ctx.fillText('Cytoplasm', w * 0.02, centerY + h * 0.22);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cotransporter', centerX, h * 0.07);
}

static drawAquaporin(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Membrane
  ctx.fillStyle = color.base;
  ctx.fillRect(0, centerY - h * 0.12, w, h * 0.24);
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  [centerY - h * 0.12, centerY + h * 0.12].forEach(y => {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  });

  // Aquaporin tetrameric structure
  const aqX = centerX, aqY = centerY;
  // 4 subunits in 2x2 arrangement
  const subunitOffsets = [[-1, -1], [1, -1], [-1, 1], [1, 1]];
  subunitOffsets.forEach(([dx, dy]) => {
    const sx = aqX + dx * w * 0.065;
    const sy = aqY + dy * h * 0.065;

    // Subunit body (6 alpha helices — shown as ovals)
    const aqGrad = ctx.createRadialGradient(sx - w * 0.01, sy - h * 0.01, 0, sx, sy, w * 0.07);
    aqGrad.addColorStop(0, 'rgba(150,220,255,1)');
    aqGrad.addColorStop(0.7, 'rgba(80,160,220,0.9)');
    aqGrad.addColorStop(1, 'rgba(30,100,180,0.8)');

    ctx.fillStyle = aqGrad;
    ctx.beginPath();
    ctx.ellipse(sx, sy, w * 0.065, h * 0.09, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(20,80,160,0.8)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Water pore (narrow channel through each subunit)
    ctx.fillStyle = 'rgba(220,245,255,0.9)';
    ctx.beginPath();
    ctx.ellipse(sx, sy, w * 0.018, h * 0.07, 0, 0, Math.PI * 2);
    ctx.fill();

    // NPA motifs (selectivity filter — two key constrictions)
    ctx.fillStyle = 'rgba(255,200,0,0.8)';
    [-0.03, 0.03].forEach(offset => {
      ctx.beginPath();
      ctx.arc(sx, sy + offset * h * 2, w * 0.01, 0, Math.PI * 2);
      ctx.fill();
    });
  });

  // Central 5th pore (between the 4 subunits — non-selective)
  ctx.fillStyle = 'rgba(180,230,255,0.5)';
  ctx.beginPath();
  ctx.ellipse(aqX, aqY, w * 0.03, h * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();

  // Water molecules flowing through
  const waterFlowPositions = [
    [aqX - w * 0.065, aqY, -h * 0.28, h * 0.28],
    [aqX + w * 0.065, aqY, -h * 0.28, h * 0.28],
  ];
  waterFlowPositions.forEach(([wx, wy, fromY, toY]) => {
    [-0.7, -0.3, 0, 0.3, 0.7].forEach(t => {
      const wmy = wy + t * h * 0.22;
      if (Math.abs(wmy - wy) < h * 0.1) return; // skip membrane
      ctx.fillStyle = 'rgba(100,180,255,0.85)';
      ctx.beginPath();
      ctx.arc(wx, wmy, w * 0.018, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(30,100,200,0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = 'rgba(0,60,140,0.8)';
      ctx.font = `${w * 0.014}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('H₂O', wx, wmy + h * 0.006);
    });
    // Arrow indicating flow direction
    ctx.strokeStyle = 'rgba(30,100,200,0.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(wx, wy - h * 0.32);
    ctx.lineTo(wx, wy + h * 0.32);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(wx - w * 0.013, wy + h * 0.28);
    ctx.lineTo(wx, wy + h * 0.32);
    ctx.lineTo(wx + w * 0.013, wy + h * 0.28);
    ctx.stroke();
  });

  // Labels
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('NPA motifs', aqX - w * 0.04, aqY + h * 0.18);
  ctx.fillText('(selectivity filter)', aqX - w * 0.04, aqY + h * 0.25);

  ctx.fillStyle = 'rgba(80,120,200,0.7)';
  ctx.font = `italic ${w * 0.03}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Extracellular', w * 0.02, centerY - h * 0.28);
  ctx.fillText('Cytoplasm', w * 0.02, centerY + h * 0.28);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Aquaporin (AQP)', centerX, h * 0.07);
}

static drawJunctionProteins(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Three junction types
  const junctions = [
    { x: w * 0.17, label: 'Tight Junction', sublabel: 'Occludin/Claudin' },
    { x: w * 0.5, label: 'Gap Junction', sublabel: 'Connexons (Cx26)' },
    { x: w * 0.83, label: 'Desmosome', sublabel: 'Cadherins/Plakoglobin' },
  ];

  junctions.forEach(({ x, label, sublabel }, jIdx) => {
    // Two cell membranes (vertical pair)
    const memH = h * 0.55;
    const gap = jIdx === 0 ? w * 0.008 : jIdx === 1 ? w * 0.02 : w * 0.04;

    [-1, 1].forEach(side => {
      ctx.fillStyle = color.base;
      ctx.fillRect(x + side * (w * 0.06 + gap / 2) - w * 0.025, centerY - memH / 2, w * 0.025, memH);
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(x + side * (w * 0.06 + gap / 2) - w * 0.025, centerY - memH / 2, w * 0.025, memH);
    });

    if (jIdx === 0) {
      // Tight junction — claudin/occludin strands sealing the gap
      ctx.strokeStyle = 'rgba(255,100,100,0.9)';
      ctx.lineWidth = 3;
      for (let i = -3; i <= 3; i++) {
        const ty = centerY + i * h * 0.07;
        ctx.beginPath();
        ctx.moveTo(x - w * 0.06, ty);
        ctx.lineTo(x + w * 0.06, ty);
        ctx.stroke();
        // Protein kiss-seals
        ctx.fillStyle = 'rgba(200,50,50,0.85)';
        ctx.beginPath();
        ctx.arc(x, ty, w * 0.016, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (jIdx === 1) {
      // Gap junction — connexon hexamers with central pore
      for (let i = -2; i <= 2; i++) {
        const gy = centerY + i * h * 0.1;
        // Left connexon
        ctx.fillStyle = 'rgba(100,200,255,0.8)';
        ctx.beginPath();
        ctx.arc(x - gap / 2 - w * 0.018, gy, w * 0.022, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,120,200,0.7)';
        ctx.lineWidth = 1;
        ctx.stroke();
        // Right connexon
        ctx.beginPath();
        ctx.arc(x + gap / 2 + w * 0.018, gy, w * 0.022, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Connecting pore
        ctx.strokeStyle = 'rgba(0,120,200,0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x - gap / 2, gy);
        ctx.lineTo(x + gap / 2, gy);
        ctx.stroke();
        // 6 connexin dots
        for (let c = 0; c < 6; c++) {
          const ca = (c / 6) * Math.PI * 2;
          ctx.fillStyle = 'rgba(30,160,220,0.7)';
          ctx.beginPath();
          ctx.arc(x - gap / 2 - w * 0.018 + Math.cos(ca) * w * 0.015, gy + Math.sin(ca) * h * 0.015, w * 0.007, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    } else {
      // Desmosome — dense plaque + cadherin arms
      // Dense plaques (cytoplasmic)
      [-1, 1].forEach(side => {
        ctx.fillStyle = 'rgba(200,180,80,0.7)';
        ctx.fillRect(x + side * w * 0.09, centerY - h * 0.2, w * 0.03 * side, h * 0.4);
        ctx.strokeStyle = 'rgba(160,120,0,0.6)';
        ctx.lineWidth = 1;
        ctx.strokeRect(x + side * w * 0.09, centerY - h * 0.2, w * 0.03 * side, h * 0.4);
      });

      // Desmoglein/desmocollin (cadherin) trans dimers
      ctx.strokeStyle = 'rgba(180,100,200,0.8)';
      ctx.lineWidth = 2;
      for (let i = -3; i <= 3; i++) {
        const dy = centerY + i * h * 0.065;
        ctx.beginPath();
        ctx.moveTo(x - w * 0.09, dy);
        ctx.bezierCurveTo(x - w * 0.04, dy - h * 0.02, x + w * 0.04, dy - h * 0.02, x + w * 0.09, dy);
        ctx.stroke();
        ctx.fillStyle = 'rgba(200,100,220,0.8)';
        ctx.beginPath();
        ctx.arc(x, dy, w * 0.015, 0, Math.PI * 2);
        ctx.fill();
      }
      // Keratin IF attachment
      ctx.strokeStyle = 'rgba(255,150,0,0.5)';
      ctx.lineWidth = 2;
      for (let i = -1; i <= 1; i++) {
        ctx.beginPath();
        ctx.moveTo(x - w * 0.12, centerY + i * h * 0.15);
        ctx.lineTo(x - w * 0.09, centerY + i * h * 0.05);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + w * 0.12, centerY + i * h * 0.15);
        ctx.lineTo(x + w * 0.09, centerY + i * h * 0.05);
        ctx.stroke();
      }
    }

    ctx.fillStyle = '#000';
    ctx.font = `bold ${w * 0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, x, centerY + h * 0.38);
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(sublabel, x, centerY + h * 0.45);
  });

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Junction Proteins', centerX, h * 0.07);
}

static drawReceptorProtein(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Membrane
  ctx.fillStyle = color.base;
  ctx.fillRect(0, centerY - h * 0.1, w, h * 0.2);
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  [centerY - h * 0.1, centerY + h * 0.1].forEach(y => {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  });

  // GPCR (7-TM receptor) — main feature
  // 7 transmembrane helices (shown as vertical barrels)
  const tmStartX = centerX - w * 0.21;
  for (let i = 0; i < 7; i++) {
    const tmX = tmStartX + i * w * 0.07;
    const tilt = (i % 2 === 0 ? 1 : -1) * w * 0.01;
    const helixGrad = ctx.createLinearGradient(tmX - w * 0.025, 0, tmX + w * 0.025, 0);
    helixGrad.addColorStop(0, 'rgba(100,180,255,0.9)');
    helixGrad.addColorStop(0.5, 'rgba(180,220,255,0.95)');
    helixGrad.addColorStop(1, 'rgba(100,180,255,0.9)');
    ctx.fillStyle = helixGrad;
    ctx.beginPath();
    ctx.rect(tmX - w * 0.025 + tilt, centerY - h * 0.09, w * 0.05, h * 0.18);
    ctx.fill();
    ctx.strokeStyle = 'rgba(30,100,200,0.7)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.font = `${w * 0.02}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(`TM${i + 1}`, tmX + tilt / 2, centerY + h * 0.005);
  }

  // Extracellular loops connecting TMs
  ctx.strokeStyle = 'rgba(80,150,220,0.8)';
  ctx.lineWidth = 2.5;
  for (let i = 0; i < 3; i++) {
    const loop1X = tmStartX + (i * 2) * w * 0.07;
    const loop2X = tmStartX + (i * 2 + 1) * w * 0.07;
    const loopMidX = (loop1X + loop2X) / 2;
    ctx.beginPath();
    ctx.moveTo(loop1X, centerY - h * 0.09);
    ctx.quadraticCurveTo(loopMidX, centerY - h * 0.24, loop2X, centerY - h * 0.09);
    ctx.stroke();
  }

  // Intracellular loops
  ctx.strokeStyle = 'rgba(150,80,200,0.7)';
  ctx.lineWidth = 2.5;
  for (let i = 0; i < 3; i++) {
    const loop1X = tmStartX + (i * 2 + 1) * w * 0.07;
    const loop2X = tmStartX + (i * 2 + 2) * w * 0.07;
    const loopMidX = (loop1X + loop2X) / 2;
    ctx.beginPath();
    ctx.moveTo(loop1X, centerY + h * 0.09);
    ctx.quadraticCurveTo(loopMidX, centerY + h * 0.22, loop2X, centerY + h * 0.09);
    ctx.stroke();
  }

  // Ligand (hormone/neurotransmitter binding)
  const ligandX = centerX - w * 0.07, ligandY = centerY - h * 0.36;
  ctx.fillStyle = 'rgba(255,80,80,0.9)';
  ctx.beginPath();
  ctx.arc(ligandX, ligandY, w * 0.03, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(180,0,0,0.7)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  // Dashed binding arrow
  ctx.setLineDash([4, 3]);
  ctx.strokeStyle = 'rgba(180,0,0,0.5)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(ligandX, ligandY + h * 0.04);
  ctx.lineTo(ligandX, centerY - h * 0.24);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#333';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Ligand', ligandX + w * 0.04, ligandY);

  // G-protein coupling (intracellular)
  const gpX = centerX + w * 0.2, gpY = centerY + h * 0.32;
  ctx.fillStyle = 'rgba(100,200,100,0.8)';
  ctx.beginPath();
  ctx.arc(gpX, gpY, w * 0.05, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(50,180,50,0.7)';
  ctx.beginPath();
  ctx.arc(gpX - w * 0.06, gpY + h * 0.04, w * 0.035, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(gpX + w * 0.03, gpY + h * 0.06, w * 0.03, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Gα', gpX, gpY + h * 0.01);
  ctx.fillText('Gβ', gpX - w * 0.06, gpY + h * 0.05);
  ctx.fillText('Gγ', gpX + w * 0.03, gpY + h * 0.07);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillText('G-Protein', gpX, gpY + h * 0.14);

  // Zone labels
  ctx.fillStyle = 'rgba(80,120,200,0.7)';
  ctx.font = `italic ${w * 0.03}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Extracellular', w * 0.02, centerY - h * 0.28);
  ctx.fillText('Cytoplasm', w * 0.02, centerY + h * 0.28);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Receptor Protein (GPCR)', centerX, h * 0.07);
}

static drawEnzymeProtein(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Enzyme body — large protein with active site
  const enzymeGrad = ctx.createRadialGradient(centerX - w * 0.04, centerY - h * 0.06, 0, centerX, centerY, w * 0.28);
  enzymeGrad.addColorStop(0, 'rgba(180,230,255,1)');
  enzymeGrad.addColorStop(0.5, 'rgba(100,180,255,0.9)');
  enzymeGrad.addColorStop(1, 'rgba(40,120,200,0.85)');

  ctx.fillStyle = enzymeGrad;
  ctx.beginPath();
  ctx.moveTo(centerX - w * 0.28, centerY + h * 0.05);
  ctx.bezierCurveTo(
    centerX - w * 0.32, centerY - h * 0.2,
    centerX - w * 0.1, centerY - h * 0.3,
    centerX, centerY - h * 0.28
  );
  ctx.bezierCurveTo(
    centerX + w * 0.15, centerY - h * 0.26,
    centerX + w * 0.3, centerY - h * 0.15,
    centerX + w * 0.28, centerY + h * 0.1
  );
  ctx.bezierCurveTo(
    centerX + w * 0.26, centerY + h * 0.28,
    centerX + w * 0.05, centerY + h * 0.32,
    centerX - w * 0.05, centerY + h * 0.3
  );
  ctx.bezierCurveTo(
    centerX - w * 0.2, centerY + h * 0.28,
    centerX - w * 0.26, centerY + h * 0.22,
    centerX - w * 0.28, centerY + h * 0.05
  );
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(20,80,180,0.8)';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Active site cleft
  ctx.fillStyle = 'rgba(220,245,255,0.95)';
  ctx.beginPath();
  ctx.moveTo(centerX - w * 0.08, centerY - h * 0.15);
  ctx.bezierCurveTo(
    centerX - w * 0.12, centerY - h * 0.05,
    centerX - w * 0.02, centerY + h * 0.05,
    centerX + w * 0.08, centerY - h * 0.02
  );
  ctx.bezierCurveTo(
    centerX + w * 0.14, centerY - h * 0.1,
    centerX + w * 0.1, centerY - h * 0.2,
    centerX - w * 0.08, centerY - h * 0.15
  );
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(20,80,180,0.5)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#666';
  ctx.font = `italic ${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Active Site', centerX + w * 0.03, centerY - h * 0.04);

  // Substrate (complementary shape) approaching
  ctx.fillStyle = 'rgba(255,180,0,0.9)';
  ctx.beginPath();
  ctx.moveTo(centerX - w * 0.08, centerY - h * 0.32);
  ctx.bezierCurveTo(
    centerX - w * 0.12, centerY - h * 0.24,
    centerX - w * 0.02, centerY - h * 0.2,
    centerX + w * 0.08, centerY - h * 0.26
  );
  ctx.bezierCurveTo(
    centerX + w * 0.12, centerY - h * 0.32,
    centerX + w * 0.05, centerY - h * 0.4,
    centerX - w * 0.08, centerY - h * 0.32
  );
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(180,100,0,0.7)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `bold ${w * 0.028}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Substrate', centerX, centerY - h * 0.4);

  // Products (after catalysis — smaller pieces)
  ctx.fillStyle = 'rgba(255,100,100,0.8)';
  ctx.beginPath();
  ctx.arc(centerX + w * 0.35, centerY - h * 0.08, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(100,200,100,0.8)';
  ctx.beginPath();
  ctx.arc(centerX + w * 0.42, centerY + h * 0.08, w * 0.035, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#333';
  ctx.font = `${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Products', centerX + w * 0.39, centerY + h * 0.22);

  // Reaction arrow
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(centerX + w * 0.2, centerY - h * 0.04);
  ctx.lineTo(centerX + w * 0.33, centerY - h * 0.04);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX + w * 0.3, centerY - h * 0.08);
  ctx.lineTo(centerX + w * 0.33, centerY - h * 0.04);
  ctx.lineTo(centerX + w * 0.3, centerY);
  ctx.stroke();

  // Cofactor binding site
  ctx.fillStyle = 'rgba(200,100,255,0.8)';
  ctx.beginPath();
  ctx.arc(centerX - w * 0.2, centerY + h * 0.12, w * 0.035, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(140,0,200,0.6)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cofactor', centerX - w * 0.2, centerY + h * 0.24);

  // Allosteric site
  ctx.fillStyle = 'rgba(255,150,50,0.7)';
  ctx.beginPath();
  ctx.arc(centerX + w * 0.22, centerY + h * 0.2, w * 0.03, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(180,80,0,0.6)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `${w * 0.026}px Arial`;
  ctx.fillText('Allosteric', centerX + w * 0.22, centerY + h * 0.33);
  ctx.fillText('Site', centerX + w * 0.22, centerY + h * 0.4);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Enzyme Protein', centerX, h * 0.07);
}

// ============================================================
// CELL DIVISION — MISSING ENTIRELY
// ============================================================

static drawChromosome(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Draw a condensed metaphase chromosome pair (sister chromatids)
  const drawChromatid = (cx, cy, tilt, chromColor) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(tilt);

    const armGrad = ctx.createLinearGradient(-w * 0.04, -h * 0.25, w * 0.04, h * 0.25);
    armGrad.addColorStop(0, chromColor.replace('1)', '0.7)'));
    armGrad.addColorStop(0.5, chromColor);
    armGrad.addColorStop(1, chromColor.replace('1)', '0.7)'));

    ctx.fillStyle = armGrad;
    ctx.strokeStyle = 'rgba(30,30,80,0.7)';
    ctx.lineWidth = 1.5;

    // Short arm (p)
    ctx.beginPath();
    ctx.roundRect(-w * 0.035, -h * 0.26, w * 0.07, h * 0.14, [w * 0.03]);
    ctx.fill();
    ctx.stroke();

    // Long arm (q)
    ctx.beginPath();
    ctx.roundRect(-w * 0.035, h * 0.12, w * 0.07, h * 0.2, [w * 0.03]);
    ctx.fill();
    ctx.stroke();

    // Centromere constriction
    ctx.fillStyle = armGrad;
    ctx.beginPath();
    ctx.ellipse(0, 0, w * 0.025, h * 0.05, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Chromomere banding (G-bands)
    ctx.fillStyle = 'rgba(20,20,60,0.3)';
    const bands = [-h * 0.2, -h * 0.14, -h * 0.08, h * 0.16, h * 0.22, h * 0.28];
    bands.forEach(by => {
      ctx.fillRect(-w * 0.033, by, w * 0.066, h * 0.025);
    });

    ctx.restore();
  };

  // Sister chromatids (joined at centromere)
  drawChromatid(centerX - w * 0.06, centerY, 0.08, 'rgba(100,160,255,1)');
  drawChromatid(centerX + w * 0.06, centerY, -0.08, 'rgba(100,160,255,1)');

  // Centromere connecting bridge
  ctx.fillStyle = 'rgba(80,120,220,0.6)';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.06, h * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();

  // Kinetochore (protein complex at centromere)
  ctx.fillStyle = 'rgba(255,200,0,0.9)';
  ctx.beginPath();
  ctx.arc(centerX - w * 0.07, centerY, w * 0.02, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(centerX + w * 0.07, centerY, w * 0.02, 0, Math.PI * 2);
  ctx.fill();

  // Telomeres
  ctx.fillStyle = 'rgba(255,100,100,0.8)';
  [
    [centerX - w * 0.06, centerY - h * 0.3],
    [centerX + w * 0.06, centerY - h * 0.3],
    [centerX - w * 0.06, centerY + h * 0.3],
    [centerX + w * 0.06, centerY + h * 0.3],
  ].forEach(([tx, ty]) => {
    ctx.beginPath();
    ctx.arc(tx, ty, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
  });

  // Labels
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Short arm (p)', centerX + w * 0.15, centerY - h * 0.15);
  ctx.fillText('Long arm (q)', centerX + w * 0.15, centerY + h * 0.2);
  ctx.fillText('Centromere', centerX + w * 0.15, centerY + h * 0.04);
  ctx.fillStyle = 'rgba(255,200,0,0.9)';
  ctx.fillText('Kinetochore', centerX + w * 0.15, centerY - h * 0.04);
  ctx.fillStyle = 'rgba(255,100,100,0.9)';
  ctx.fillText('Telomere', centerX + w * 0.15, centerY - h * 0.28);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Metaphase Chromosome', centerX, h * 0.07);
  ctx.font = `${w * 0.032}px Arial`;
  ctx.fillText('(Sister Chromatids)', centerX, h * 0.13);
}

static drawSpindleFiber(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Mitotic spindle during metaphase
  // Two poles
  const poleY1 = h * 0.1, poleY2 = h * 0.9;

  // Pole 1 (top)
  ctx.fillStyle = 'rgba(200,180,255,0.8)';
  ctx.beginPath();
  ctx.arc(centerX, poleY1, w * 0.05, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(120,80,200,0.9)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Pole (+)', centerX, poleY1 - h * 0.05);

  // Pole 2 (bottom)
  ctx.fillStyle = 'rgba(200,180,255,0.8)';
  ctx.beginPath();
  ctx.arc(centerX, poleY2, w * 0.05, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(120,80,200,0.9)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.fillText('Pole (+)', centerX, poleY2 + h * 0.06);

  // Kinetochore microtubules (K-fibers)
  const chromosomePairs = [
    { x: centerX - w * 0.15, color: 'rgba(255,100,100,0.8)' },
    { x: centerX, color: 'rgba(100,200,100,0.8)' },
    { x: centerX + w * 0.15, color: 'rgba(100,100,255,0.8)' },
  ];

  chromosomePairs.forEach(({ x, color: chrColor }) => {
    // Kinetochore fiber from top pole
    ctx.strokeStyle = chrColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, poleY1 + w * 0.05);
    ctx.lineTo(x, centerY - h * 0.04);
    ctx.stroke();

    // Kinetochore fiber from bottom pole
    ctx.beginPath();
    ctx.moveTo(centerX, poleY2 - w * 0.05);
    ctx.lineTo(x, centerY + h * 0.04);
    ctx.stroke();

    // Chromosome (simple oval at metaphase plate)
    ctx.fillStyle = chrColor.replace('0.8', '0.85');
    ctx.beginPath();
    ctx.ellipse(x, centerY, w * 0.032, h * 0.055, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = chrColor.replace('0.8', '1');
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // Polar/astral microtubules
  ctx.strokeStyle = 'rgba(150,150,150,0.5)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  for (let i = -3; i <= 3; i++) {
    if (i === 0) continue;
    ctx.beginPath();
    ctx.moveTo(centerX, poleY1 + w * 0.05);
    ctx.lineTo(centerX + i * w * 0.18, centerY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX, poleY2 - w * 0.05);
    ctx.lineTo(centerX + i * w * 0.18, centerY);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // Interpolar microtubules (overlap in center)
  ctx.strokeStyle = 'rgba(0,180,180,0.5)';
  ctx.lineWidth = 2;
  for (let i = -1; i <= 1; i++) {
    const ox = centerX + i * w * 0.07;
    ctx.beginPath();
    ctx.moveTo(ox, poleY1 + h * 0.1);
    ctx.lineTo(ox, centerY + h * 0.08);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ox, poleY2 - h * 0.1);
    ctx.lineTo(ox, centerY - h * 0.08);
    ctx.stroke();
  }

  // Metaphase plate line
  ctx.strokeStyle = 'rgba(200,150,0,0.5)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(w * 0.05, centerY);
  ctx.lineTo(w * 0.95, centerY);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(200,150,0,0.7)';
  ctx.font = `italic ${w * 0.028}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Metaphase plate', w * 0.95, centerY - h * 0.02);

  // Legend
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.026}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(150,150,150,0.8)';
  ctx.fillText('--- Astral MT', w * 0.03, h * 0.45);
  ctx.fillStyle = 'rgba(0,180,180,0.8)';
  ctx.fillText('─── Interpolar MT', w * 0.03, h * 0.52);
  ctx.fillStyle = 'rgba(255,100,100,0.9)';
  ctx.fillText('─── Kinetochore MT (K-fiber)', w * 0.03, h * 0.59);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Mitotic Spindle Fibers', centerX, h * 0.04);
}

static drawCentrosome(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // PCM halo
  const pcmGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, w * 0.38);
  pcmGrad.addColorStop(0, 'rgba(220,200,255,0.7)');
  pcmGrad.addColorStop(0.6, 'rgba(180,150,255,0.3)');
  pcmGrad.addColorStop(1, 'rgba(160,120,255,0)');
  ctx.fillStyle = pcmGrad;
  ctx.beginPath();
  ctx.arc(centerX, centerY, w * 0.38, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(140,100,220,0.4)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, w * 0.38, 0, Math.PI * 2);
  ctx.stroke();

  // γ-TuRC (gamma-tubulin ring complex — MT nucleation sites)
  ctx.fillStyle = 'rgba(255,180,0,0.8)';
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(centerX + Math.cos(a) * w * 0.28, centerY + Math.sin(a) * w * 0.28, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(255,180,0,0.6)';
  ctx.font = `${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('γ-TuRC', centerX + w * 0.28, centerY - w * 0.36);

  // Microtubule asters radiating from centrosome
  ctx.strokeStyle = 'rgba(0,160,0,0.6)';
  ctx.lineWidth = 2;
  const mtAngles = [15, 45, 80, 115, 150, 185, 220, 255, 290, 325];
  mtAngles.forEach(deg => {
    const rad = (deg * Math.PI) / 180;
    ctx.beginPath();
    ctx.moveTo(centerX + Math.cos(rad) * w * 0.12, centerY + Math.sin(rad) * w * 0.12);
    ctx.lineTo(centerX + Math.cos(rad) * w * 0.46, centerY + Math.sin(rad) * w * 0.46);
    ctx.stroke();
    // Plus end cap
    ctx.fillStyle = 'rgba(0,200,0,0.8)';
    ctx.beginPath();
    ctx.arc(centerX + Math.cos(rad) * w * 0.46, centerY + Math.sin(rad) * w * 0.46, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  });

  // Two centrioles (mother and daughter, perpendicular)
  // Mother centriole (horizontal)
  const mc = { x: centerX - w * 0.04, y: centerY };
  ctx.fillStyle = 'rgba(120,80,200,0.85)';
  ctx.beginPath();
  ctx.ellipse(mc.x, mc.y, w * 0.08, h * 0.055, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(60,20,140,0.8)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Subdistal/distal appendages (mother only)
  for (let a = 0; a < 5; a++) {
    const aa = (a / 5) * Math.PI * 2;
    ctx.strokeStyle = 'rgba(255,200,0,0.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(mc.x + Math.cos(aa) * w * 0.08, mc.y + Math.sin(aa) * h * 0.055);
    ctx.lineTo(mc.x + Math.cos(aa) * w * 0.11, mc.y + Math.sin(aa) * h * 0.08);
    ctx.stroke();
  }

  // 9 triplet pattern inside mother centriole
  for (let i = 0; i < 9; i++) {
    const ca = (i / 9) * Math.PI * 2;
    ctx.fillStyle = 'rgba(80,40,180,0.8)';
    ctx.beginPath();
    ctx.arc(mc.x + Math.cos(ca) * w * 0.055, mc.y + Math.sin(ca) * h * 0.037, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  }

  // Daughter centriole (perpendicular)
  const dc = { x: centerX + w * 0.05, y: centerY + h * 0.02 };
  ctx.fillStyle = 'rgba(160,120,240,0.75)';
  ctx.beginPath();
  ctx.ellipse(dc.x, dc.y, w * 0.04, h * 0.07, Math.PI / 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(80,40,180,0.7)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  for (let i = 0; i < 9; i++) {
    const ca = (i / 9) * Math.PI * 2;
    ctx.fillStyle = 'rgba(80,40,180,0.7)';
    ctx.beginPath();
    ctx.arc(dc.x + Math.cos(ca) * w * 0.025, dc.y + Math.sin(ca) * h * 0.05, w * 0.009, 0, Math.PI * 2);
    ctx.fill();
  }

  // Labels
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Mother centriole', mc.x - w * 0.1, mc.y - h * 0.08);
  ctx.fillText('(9 triplet MTs)', mc.x - w * 0.1, mc.y - h * 0.02);
  ctx.textAlign = 'left';
  ctx.fillText('Daughter centriole', dc.x + w * 0.08, dc.y + h * 0.12);
  ctx.fillText('PCM (γ-TuRC)', centerX + w * 0.22, centerY - h * 0.3);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Centrosome', centerX, h * 0.06);
}

static drawCleavageFurrow(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Two daughter cells pinching apart
  // Cleavage progress (partial constriction)
  const neckWidth = w * 0.08;
  const cellR = w * 0.3;

  // Cell body shape (figure-8 pinching)
  const cellGrad = ctx.createRadialGradient(centerX, centerY - h * 0.28, 0, centerX, centerY - h * 0.28, cellR);
  cellGrad.addColorStop(0, 'rgba(200,230,255,0.9)');
  cellGrad.addColorStop(0.8, 'rgba(150,190,240,0.7)');
  cellGrad.addColorStop(1, 'rgba(100,150,220,0.5)');

  // Upper daughter cell
  ctx.fillStyle = cellGrad;
  ctx.beginPath();
  ctx.arc(centerX, centerY - h * 0.28, cellR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(60,100,200,0.8)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Lower daughter cell
  const cellGrad2 = ctx.createRadialGradient(centerX, centerY + h * 0.28, 0, centerX, centerY + h * 0.28, cellR);
  cellGrad2.addColorStop(0, 'rgba(255,220,200,0.9)');
  cellGrad2.addColorStop(0.8, 'rgba(240,180,150,0.7)');
  cellGrad2.addColorStop(1, 'rgba(220,140,110,0.5)');
  ctx.fillStyle = cellGrad2;
  ctx.beginPath();
  ctx.arc(centerX, centerY + h * 0.28, cellR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(180,80,40,0.7)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Cleavage furrow constriction (hourglass neck)
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillRect(centerX - w * 0.32, centerY - h * 0.07, w * 0.64, h * 0.14);

  // Neck region
  ctx.fillStyle = 'rgba(220,200,240,0.8)';
  ctx.beginPath();
  ctx.moveTo(centerX - neckWidth / 2, centerY - h * 0.06);
  ctx.bezierCurveTo(centerX - neckWidth * 0.3, centerY, centerX - neckWidth * 0.3, centerY, centerX - neckWidth / 2, centerY + h * 0.06);
  ctx.lineTo(centerX + neckWidth / 2, centerY + h * 0.06);
  ctx.bezierCurveTo(centerX + neckWidth * 0.3, centerY, centerX + neckWidth * 0.3, centerY, centerX + neckWidth / 2, centerY - h * 0.06);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(120,80,180,0.8)';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Contractile ring (actin + myosin II)
  ctx.strokeStyle = 'rgba(255,80,80,0.9)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY - h * 0.06, neckWidth / 2 + w * 0.015, h * 0.025, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(centerX, centerY + h * 0.06, neckWidth / 2 + w * 0.015, h * 0.025, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Midbody remnant (central dark bar)
  ctx.fillStyle = 'rgba(80,40,120,0.6)';
  ctx.fillRect(centerX - w * 0.015, centerY - h * 0.015, w * 0.03, h * 0.03);

  // Actin/myosin arrows (inward constriction forces)
  const arrowAngles = [0, 60, 120, 180, 240, 300];
  arrowAngles.forEach(deg => {
    const rad = (deg * Math.PI) / 180;
    const fromR = neckWidth * 0.9;
    const toR = neckWidth * 0.45;
    ctx.strokeStyle = 'rgba(255,80,80,0.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX + Math.cos(rad) * fromR, centerY + Math.sin(rad) * h * 0.02);
    ctx.lineTo(centerX + Math.cos(rad) * toR, centerY + Math.sin(rad) * h * 0.015);
    ctx.stroke();
  });

  // Nuclei in daughter cells
  [centerY - h * 0.28, centerY + h * 0.28].forEach(ny => {
    ctx.fillStyle = 'rgba(180,150,255,0.5)';
    ctx.beginPath();
    ctx.arc(centerX, ny, w * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(120,80,200,0.7)';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Labels
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillStyle = 'rgba(255,80,80,0.9)';
  ctx.fillText('Contractile ring', centerX - neckWidth / 2 - w * 0.02, centerY - h * 0.08);
  ctx.fillText('(Actin + Myosin II)', centerX - neckWidth / 2 - w * 0.02, centerY - h * 0.02);
  ctx.fillStyle = 'rgba(80,40,120,0.8)';
  ctx.textAlign = 'left';
  ctx.fillText('Midbody', centerX + neckWidth / 2 + w * 0.02, centerY + h * 0.02);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cleavage Furrow', centerX, h * 0.06);
}

static drawCellPlate(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Plant cell division — cell plate formation
  // Two daughter nuclei
  [centerY - h * 0.3, centerY + h * 0.3].forEach(ny => {
    ctx.fillStyle = 'rgba(180,150,255,0.5)';
    ctx.beginPath();
    ctx.arc(centerX, ny, w * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(120,80,200,0.7)';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Cell outline (rectangular — plant cell)
  ctx.strokeStyle = 'rgba(0,140,0,0.6)';
  ctx.lineWidth = 4;
  ctx.strokeRect(w * 0.05, h * 0.04, w * 0.9, h * 0.92);

  // Phragmoplast microtubules (barrel-shaped array)
  ctx.strokeStyle = 'rgba(0,180,0,0.5)';
  ctx.lineWidth = 1.5;
  for (let i = -4; i <= 4; i++) {
    const mtX = centerX + i * w * 0.07;
    ctx.beginPath();
    ctx.moveTo(mtX, centerY - h * 0.18);
    ctx.lineTo(mtX, centerY - h * 0.06);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(mtX, centerY + h * 0.06);
    ctx.lineTo(mtX, centerY + h * 0.18);
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(0,180,0,0.5)';
  ctx.font = `italic ${w * 0.026}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Phragmoplast MTs', w * 0.07, centerY - h * 0.22);

  // Cell plate (Golgi-derived vesicles fusing in center)
  // Vesicle trail from each side leading to plate
  const vesicleTrail = [-0.35, -0.28, -0.21, -0.14, -0.07, 0, 0.07, 0.14, 0.21, 0.28, 0.35];
  vesicleTrail.forEach(offset => {
    const vx = centerX + offset * w;
    const isFused = Math.abs(offset) < 0.22;

    if (isFused) {
      // Fused vesicles forming plate
      ctx.fillStyle = 'rgba(255,200,100,0.85)';
      ctx.strokeStyle = 'rgba(180,100,0,0.7)';
    } else {
      // Approaching vesicles
      ctx.fillStyle = 'rgba(200,220,255,0.7)';
      ctx.strokeStyle = 'rgba(80,100,200,0.5)';
    }
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(vx, centerY, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Cell plate membrane (forming new wall)
  ctx.strokeStyle = 'rgba(180,100,0,0.8)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(centerX - w * 0.25, centerY);
  ctx.lineTo(centerX + w * 0.25, centerY);
  ctx.stroke();

  // Callose deposition (β-1,3-glucan) at plate
  ctx.strokeStyle = 'rgba(255,220,0,0.6)';
  ctx.lineWidth = 5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(centerX - w * 0.2, centerY);
  ctx.lineTo(centerX + w * 0.2, centerY);
  ctx.stroke();
  ctx.setLineDash([]);

  // Golgi vesicle sources (top and bottom)
  [centerY - h * 0.15, centerY + h * 0.15].forEach((gy, idx) => {
    const gx = centerX + (idx === 0 ? w * 0.3 : -w * 0.3);
    ctx.fillStyle = 'rgba(150,220,150,0.7)';
    for (let s = 0; s < 3; s++) {
      ctx.beginPath();
      ctx.ellipse(gx, gy + s * h * 0.025, w * 0.06, h * 0.015, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,120,0,0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(0,120,0,0.6)';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Golgi', gx, gy + h * 0.09);

    // Vesicle arrows toward plate
    ctx.strokeStyle = 'rgba(100,100,200,0.5)';
    ctx.lineWidth = 1.5;
    const toX = centerX + (idx === 0 ? w * 0.2 : -w * 0.2);
    ctx.beginPath();
    ctx.moveTo(gx + (idx === 0 ? -w * 0.06 : w * 0.06), gy + h * 0.02);
    ctx.lineTo(toX, centerY);
    ctx.stroke();
  });

  // Growing new cell wall label
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cell Plate (new primary wall forming)', centerX, centerY + h * 0.1);

  ctx.fillStyle = 'rgba(255,200,0,0.8)';
  ctx.fillText('Callose → Cellulose (maturation)', centerX, centerY + h * 0.17);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Cell Plate Formation', centerX, h * 0.04);
}

static drawMitosisPhase(ctx, color, width, height, phase = 'metaphase') {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  const phases = {
    prophase: () => {
      // Condensing chromosomes, nuclear envelope breaking down
      ctx.fillStyle = 'rgba(200,220,255,0.5)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, w * 0.38, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(80,100,200,0.4)';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Condensing chromosomes (irregular shapes)
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const cx = centerX + Math.cos(angle) * w * 0.2;
        const cy = centerY + Math.sin(angle) * h * 0.2;
        ctx.fillStyle = `rgba(${100 + i * 20},${80 + i * 15},255,0.8)`;
        ctx.beginPath();
        ctx.ellipse(cx, cy, w * 0.04, h * 0.055, angle, 0, Math.PI * 2);
        ctx.fill();
      }

      // Centrosomes migrating
      [[-w * 0.35, 0], [w * 0.35, 0]].forEach(([dx, dy]) => {
        ctx.fillStyle = 'rgba(200,180,255,0.8)';
        ctx.beginPath();
        ctx.arc(centerX + dx, centerY + dy, w * 0.04, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(120,80,200,0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      ctx.fillStyle = '#000';
      ctx.font = `bold ${w * 0.045}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('PROPHASE', centerX, h * 0.06);
      ctx.font = `${w * 0.03}px Arial`;
      ctx.fillText('Chromatin condenses; nuclear envelope breaks down', centerX, h * 0.94);
    },
    metaphase: () => {
      // Chromosomes aligned at metaphase plate
      ctx.strokeStyle = 'rgba(200,150,0,0.5)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(centerX, h * 0.12);
      ctx.lineTo(centerX, h * 0.88);
      ctx.stroke();
      ctx.setLineDash([]);

      // Poles
      [h * 0.12, h * 0.88].forEach(py => {
        ctx.fillStyle = 'rgba(200,180,255,0.8)';
        ctx.beginPath();
        ctx.arc(centerX, py, w * 0.04, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(120,80,200,0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Spindle fibers
      ctx.strokeStyle = 'rgba(0,160,0,0.5)';
      ctx.lineWidth = 1.5;
      for (let i = -3; i <= 3; i++) {
        const cx = centerX + i * w * 0.07;
        ctx.beginPath();
        ctx.moveTo(centerX, h * 0.16);
        ctx.lineTo(cx, centerY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(centerX, h * 0.84);
        ctx.lineTo(cx, centerY);
        ctx.stroke();
      }

      // Chromosomes at plate
      for (let i = -2; i <= 2; i++) {
        const cy = centerY + i * h * 0.1;
        ctx.fillStyle = 'rgba(100,120,255,0.85)';
        ctx.beginPath();
        ctx.ellipse(centerX, cy, w * 0.032, h * 0.04, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(50,60,200,0.8)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      ctx.fillStyle = '#000';
      ctx.font = `bold ${w * 0.045}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('METAPHASE', centerX, h * 0.06);
      ctx.font = `${w * 0.03}px Arial`;
      ctx.fillText('Chromosomes align at metaphase plate', centerX, h * 0.94);
    },
    anaphase: () => {
      // Sister chromatids separating toward poles
      [h * 0.12, h * 0.88].forEach(py => {
        ctx.fillStyle = 'rgba(200,180,255,0.8)';
        ctx.beginPath();
        ctx.arc(centerX, py, w * 0.04, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(120,80,200,0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Elongating cell outline
      ctx.strokeStyle = 'rgba(80,100,200,0.6)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, w * 0.32, h * 0.46, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Chromosomes moving to poles
      const topChroms = [centerY - h * 0.2, centerY - h * 0.28, centerY - h * 0.36];
      const botChroms = [centerY + h * 0.2, centerY + h * 0.28, centerY + h * 0.36];
      [...topChroms, ...botChroms].forEach((cy, i) => {
        const cx = centerX + (i % 3 - 1) * w * 0.08;
        ctx.fillStyle = 'rgba(100,120,255,0.85)';
        ctx.beginPath();
        ctx.ellipse(cx, cy, w * 0.028, h * 0.035, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      // Spindle fibers (shortening kinetochore, elongating interpolar)
      ctx.strokeStyle = 'rgba(0,160,0,0.4)';
      ctx.lineWidth = 1.5;
      topChroms.forEach((cy, i) => {
        const cx = centerX + (i - 1) * w * 0.08;
        ctx.beginPath();
        ctx.moveTo(centerX, h * 0.16);
        ctx.lineTo(cx, cy);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(centerX, h * 0.84);
        ctx.lineTo(cx, cy + h * 0.4);
        ctx.stroke();
      });

      ctx.fillStyle = '#000';
      ctx.font = `bold ${w * 0.045}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('ANAPHASE', centerX, h * 0.06);
      ctx.font = `${w * 0.03}px Arial`;
      ctx.fillText('Sister chromatids pulled to opposite poles', centerX, h * 0.94);
    },
    telophase: () => {
      // Two daughter nuclei reforming, cytokinesis beginning
      [centerY - h * 0.28, centerY + h * 0.28].forEach(ny => {
        // Nuclear envelope reforming
        ctx.strokeStyle = 'rgba(80,100,200,0.5)';
        ctx.lineWidth = 2.5;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.arc(centerX, ny, w * 0.2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Decondensing chromatin
        for (let i = 0; i < 5; i++) {
          const a = (i / 5) * Math.PI * 2;
          ctx.fillStyle = 'rgba(120,140,255,0.5)';
          ctx.beginPath();
          ctx.ellipse(
            centerX + Math.cos(a) * w * 0.1,
            ny + Math.sin(a) * h * 0.1,
            w * 0.04, h * 0.025, a, 0, Math.PI * 2
          );
          ctx.fill();
        }
      });

      // Elongated cell
      ctx.strokeStyle = 'rgba(80,100,200,0.6)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, w * 0.3, h * 0.46, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Cleavage furrow beginning
      ctx.strokeStyle = 'rgba(255,80,80,0.8)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(centerX - w * 0.32, centerY);
      ctx.lineTo(centerX - w * 0.15, centerY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(centerX + w * 0.32, centerY);
      ctx.lineTo(centerX + w * 0.15, centerY);
      ctx.stroke();

      ctx.fillStyle = '#000';
      ctx.font = `bold ${w * 0.045}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('TELOPHASE', centerX, h * 0.06);
      ctx.font = `${w * 0.03}px Arial`;
      ctx.fillText('Nuclear envelopes reform; cytokinesis begins', centerX, h * 0.94);
    },
  };

  const phaseFn = phases[phase] || phases.metaphase;
  phaseFn();
}

static drawMeiosisPhase(ctx, color, width, height, phase = 'prophase1') {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  const drawPhase = () => {
    if (phase === 'prophase1') {
      // Homologous chromosomes synapsing (synapsis/bivalents)
      ctx.fillStyle = 'rgba(200,220,255,0.4)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, w * 0.38, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(80,100,200,0.5)';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Bivalents (tetrads — 2 homologs × 2 chromatids)
      const bivalentPos = [
        [centerX - w * 0.18, centerY - h * 0.15],
        [centerX + w * 0.18, centerY - h * 0.12],
        [centerX, centerY + h * 0.12],
      ];

      bivalentPos.forEach(([bx, by]) => {
        // Homolog 1 (maternal — blue)
        ctx.fillStyle = 'rgba(80,120,255,0.85)';
        ctx.beginPath();
        ctx.ellipse(bx - w * 0.04, by, w * 0.025, h * 0.055, 0.2, 0, Math.PI * 2);
        ctx.fill();
        // Homolog 2 (paternal — red)
        ctx.fillStyle = 'rgba(255,80,80,0.85)';
        ctx.beginPath();
        ctx.ellipse(bx + w * 0.04, by, w * 0.025, h * 0.055, -0.2, 0, Math.PI * 2);
        ctx.fill();
        // Chiasmata (crossover point)
        ctx.strokeStyle = 'rgba(200,100,200,0.9)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(bx - w * 0.02, by - h * 0.025);
        ctx.lineTo(bx + w * 0.02, by + h * 0.025);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(bx + w * 0.02, by - h * 0.025);
        ctx.lineTo(bx - w * 0.02, by + h * 0.025);
        ctx.stroke();
        ctx.fillStyle = 'rgba(200,100,200,0.9)';
        ctx.font = `${w * 0.022}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('X', bx, by + h * 0.005);
      });

      ctx.fillStyle = '#000';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('PROPHASE I', centerX, h * 0.06);
      ctx.font = `${w * 0.028}px Arial`;
      ctx.fillText('Homologs synapse; crossing over at chiasmata', centerX, h * 0.94);

    } else if (phase === 'metaphase1') {
      // Bivalents at plate (homolog pairs)
      ctx.strokeStyle = 'rgba(200,150,0,0.5)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(centerX, h * 0.12);
      ctx.lineTo(centerX, h * 0.88);
      ctx.stroke();
      ctx.setLineDash([]);

      [h * 0.12, h * 0.88].forEach(py => {
        ctx.fillStyle = 'rgba(200,180,255,0.8)';
        ctx.beginPath();
        ctx.arc(centerX, py, w * 0.04, 0, Math.PI * 2);
        ctx.fill();
      });

      // Bivalents aligned (homologs facing opposite poles)
      const bivalentY = [centerY - h * 0.18, centerY, centerY + h * 0.18];
      bivalentY.forEach(by => {
        ctx.fillStyle = 'rgba(80,120,255,0.85)';
        ctx.beginPath();
        ctx.ellipse(centerX - w * 0.04, by, w * 0.025, h * 0.045, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,80,80,0.85)';
        ctx.beginPath();
        ctx.ellipse(centerX + w * 0.04, by, w * 0.025, h * 0.045, 0, 0, Math.PI * 2);
        ctx.fill();
        // Kinetochore fibers
        ctx.strokeStyle = 'rgba(0,160,0,0.5)';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(centerX, h * 0.16); ctx.lineTo(centerX - w * 0.04, by); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(centerX, h * 0.84); ctx.lineTo(centerX + w * 0.04, by); ctx.stroke();
      });

      ctx.fillStyle = '#000';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('METAPHASE I', centerX, h * 0.06);
      ctx.font = `${w * 0.028}px Arial`;
      ctx.fillText('Bivalents align; homologs face opposite poles', centerX, h * 0.94);

    } else if (phase === 'anaphase1') {
      // Homologs separating (still joined sister chromatids)
      [h * 0.12, h * 0.88].forEach(py => {
        ctx.fillStyle = 'rgba(200,180,255,0.8)';
        ctx.beginPath();
        ctx.arc(centerX, py, w * 0.04, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.strokeStyle = 'rgba(80,100,200,0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, w * 0.32, h * 0.45, 0, 0, Math.PI * 2);
      ctx.stroke();

      [[-1, 'rgba(80,120,255,0.85)', centerY - h * 0.3], [1, 'rgba(255,80,80,0.85)', centerY + h * 0.3]].forEach(([side, col, cy]) => {
        for (let i = -1; i <= 1; i++) {
          const cx = centerX + i * w * 0.1;
          ctx.fillStyle = col;
          ctx.beginPath();
          ctx.ellipse(cx, cy + side * i * h * 0.03, w * 0.03, h * 0.05, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.fillStyle = '#000';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('ANAPHASE I', centerX, h * 0.06);
      ctx.font = `${w * 0.028}px Arial`;
      ctx.fillText('Homologs separate (sister chromatids remain joined)', centerX, h * 0.94);

    } else if (phase === 'meiosis2') {
      // Second division — 4 haploid cells forming
      const quadrants = [
        [w * 0.25, h * 0.28], [w * 0.75, h * 0.28],
        [w * 0.25, h * 0.72], [w * 0.75, h * 0.72],
      ];
      const cellColors = [
        'rgba(80,120,255,0.5)', 'rgba(80,120,255,0.5)',
        'rgba(255,80,80,0.5)', 'rgba(255,80,80,0.5)',
      ];
      quadrants.forEach(([qx, qy], idx) => {
        ctx.fillStyle = cellColors[idx];
        ctx.beginPath();
        ctx.arc(qx, qy, w * 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(80,80,200,0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();
        // Nucleus
        ctx.fillStyle = 'rgba(180,150,255,0.5)';
        ctx.beginPath();
        ctx.arc(qx, qy, w * 0.07, 0, Math.PI * 2);
        ctx.fill();
        // Chromosome (1n)
        ctx.fillStyle = cellColors[idx].replace('0.5', '0.9');
        ctx.beginPath();
        ctx.ellipse(qx, qy, w * 0.025, h * 0.04, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.font = `${w * 0.028}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('n', qx, qy + h * 0.16);
      });

      ctx.fillStyle = '#000';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('MEIOSIS II COMPLETE', centerX, h * 0.06);
      ctx.font = `${w * 0.028}px Arial`;
      ctx.fillText('4 haploid daughter cells (n)', centerX, h * 0.94);
    }
  };

  drawPhase();
}

static drawCellCycle(ctx, color, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // Draw circular cell cycle diagram
  const radius = w * 0.36;

  // Phase segments
  const phases = [
    { name: 'G₁', start: -Math.PI / 2, end: Math.PI * 0.3, color: 'rgba(100,200,255,0.75)', sublabel: 'Cell growth' },
    { name: 'S', start: Math.PI * 0.3, end: Math.PI * 0.85, color: 'rgba(100,255,150,0.75)', sublabel: 'DNA replication' },
    { name: 'G₂', start: Math.PI * 0.85, end: Math.PI * 1.2, color: 'rgba(255,220,100,0.75)', sublabel: 'Prep for division' },
    { name: 'M', start: Math.PI * 1.2, end: Math.PI * 1.5, color: 'rgba(255,120,120,0.75)', sublabel: 'Mitosis' },
    { name: 'G₀', start: null, end: null, color: 'rgba(200,200,200,0.6)', sublabel: 'Quiescence' },
  ];

  // Draw pie segments (G1, S, G2, M)
  const mainPhases = phases.slice(0, 4);
  mainPhases.forEach(({ name, start, end, color: phaseColor, sublabel }) => {
    ctx.fillStyle = phaseColor;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, start, end);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = 'rgba(80,80,80,0.7)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Label inside segment
    const midAngle = (start + end) / 2;
    const labelR = radius * 0.65;
    const lx = centerX + Math.cos(midAngle) * labelR;
    const ly = centerY + Math.sin(midAngle) * labelR;
    ctx.fillStyle = '#000';
    ctx.font = `bold ${w * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(name, lx, ly);
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(sublabel, lx, ly + h * 0.045);
  });

  // Outer ring decoration
  ctx.strokeStyle = 'rgba(80,80,80,0.3)';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius + w * 0.04, 0, Math.PI * 2);
  ctx.stroke();

  // Arrow showing direction
  const arrowAngle = Math.PI * 1.6;
  const arrowR = radius + w * 0.04;
  ctx.fillStyle = '#333';
  ctx.beginPath();
  ctx.moveTo(
    centerX + Math.cos(arrowAngle) * arrowR,
    centerY + Math.sin(arrowAngle) * arrowR
  );
  ctx.lineTo(
    centerX + Math.cos(arrowAngle + 0.25) * (arrowR - w * 0.02),
    centerY + Math.sin(arrowAngle + 0.25) * (arrowR - w * 0.02)
  );
  ctx.lineTo(
    centerX + Math.cos(arrowAngle - 0.05) * (arrowR - w * 0.035),
    centerY + Math.sin(arrowAngle - 0.05) * (arrowR - w * 0.035)
  );
  ctx.closePath();
  ctx.fill();

  // Checkpoints
  const checkpoints = [
    { angle: Math.PI * 0.3, name: 'G₁/S\nCheckpoint', color: 'rgba(255,50,50,0.9)' },
    { angle: Math.PI * 1.2, name: 'G₂/M\nCheckpoint', color: 'rgba(255,50,50,0.9)' },
    { angle: Math.PI * 1.4, name: 'Spindle\nCheckpoint', color: 'rgba(255,100,0,0.9)' },
  ];

  checkpoints.forEach(({ angle, name, color: cpColor }) => {
    const cpX = centerX + Math.cos(angle) * (radius + w * 0.02);
    const cpY = centerY + Math.sin(angle) * (radius + w * 0.02);
    ctx.fillStyle = cpColor;
    ctx.beginPath();
    ctx.arc(cpX, cpY, w * 0.022, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(180,0,0,0.8)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    const labelDist = radius + w * 0.14;
    const lx = centerX + Math.cos(angle) * labelDist;
    const ly = centerY + Math.sin(angle) * labelDist;
    ctx.fillStyle = 'rgba(180,0,0,0.9)';
    ctx.font = `bold ${w * 0.026}px Arial`;
    ctx.textAlign = 'center';
    name.split('\n').forEach((line, li) => {
      ctx.fillText(line, lx, ly + li * h * 0.04 - h * 0.02);
    });
  });

  // G0 (exit arrow)
  const g0Angle = -Math.PI * 0.15;
  ctx.strokeStyle = 'rgba(120,120,120,0.6)';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.moveTo(centerX + Math.cos(g0Angle) * radius * 0.6, centerY + Math.sin(g0Angle) * radius * 0.6);
  ctx.lineTo(centerX + Math.cos(g0Angle) * radius * 0.95, centerY + Math.sin(g0Angle) * radius * 0.95);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(120,120,120,0.8)';
  ctx.font = `italic ${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('G₀ (quiescence)', centerX + Math.cos(g0Angle) * radius * 1.2, centerY + Math.sin(g0Angle) * radius * 1.2 - h * 0.02);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cell Cycle', centerX, centerY - h * 0.02);
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillText('(Interphase + Mitosis)', centerX, centerY + h * 0.04);
}

