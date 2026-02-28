

static drawLPS(ctx, color, w, h) {
  ctx.fillStyle = '#1A1A2E';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const baseY = h * 0.88;
  const lipidAY = baseY - h * 0.06;
  const coreY = lipidAY - h * 0.12;
  const oAgY = coreY - h * 0.38;

  // Background membrane bilayer
  ctx.fillStyle = '#16213E';
  ctx.fillRect(0, h * 0.82, w, h * 0.18);

  // Hydrophobic tails (Lipid A fatty acids)
  const tailCount = 18;
  for (let i = 0; i < tailCount; i++) {
    const tx = w * 0.05 + i * (w * 0.9 / tailCount);
    ctx.strokeStyle = i % 2 === 0 ? '#F39C12' : '#E67E22';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(tx, baseY);
    ctx.lineTo(tx, lipidAY + h * 0.02);
    ctx.stroke();
    // Kink in some tails
    if (i % 3 === 1) {
      ctx.beginPath();
      ctx.moveTo(tx, baseY - h * 0.03);
      ctx.lineTo(tx + w * 0.015, baseY - h * 0.05);
      ctx.lineTo(tx, baseY - h * 0.07);
      ctx.strokeStyle = '#F39C12';
      ctx.stroke();
    }
  }

  // Lipid A glucosamine backbone
  ctx.fillStyle = '#E74C3C';
  ctx.fillRect(w * 0.05, lipidAY - h * 0.035, w * 0.9, h * 0.035);
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, lipidAY - h * 0.035, w * 0.9, h * 0.035);
  ctx.fillStyle = '#FDFEFE';
  ctx.font = `bold ${w * 0.032}px Arial`;
  ctx.fillText('Lipid A (Glucosamine backbone)', w * 0.15, lipidAY - h * 0.01);

  // Inner core sugars (KDO + Heptose)
  const coreSugars = [
    { x: 0.2, label: 'KDO', col: '#8E44AD' },
    { x: 0.4, label: 'KDO', col: '#8E44AD' },
    { x: 0.3, label: 'Hep', col: '#2980B9' },
    { x: 0.5, label: 'Hep', col: '#2980B9' },
    { x: 0.6, label: 'Hep', col: '#2980B9' },
  ];
  coreSugars.forEach(({ x, label, col }) => {
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.rect(w * x - w * 0.04, coreY - h * 0.045, w * 0.08, h * 0.045);
    ctx.fill();
    ctx.strokeStyle = '#FDFEFE';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = '#FDFEFE';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText(label, w * x - w * 0.025, coreY - h * 0.015);
  });

  // Connect Lipid A to core
  ctx.strokeStyle = '#ECF0F1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, lipidAY - h * 0.035);
  ctx.lineTo(w * 0.3, coreY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.55, lipidAY - h * 0.035);
  ctx.lineTo(w * 0.55, coreY);
  ctx.stroke();

  // O-antigen repeating units
  const oaColors = ['#27AE60', '#2ECC71', '#1E8449', '#58D68D'];
  const unitW = w * 0.055;
  const unitH = h * 0.055;
  const unitsPerRow = 14;
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < unitsPerRow; col++) {
      const ux = w * 0.04 + col * (w * 0.065);
      const uy = oAgY + row * (unitH + h * 0.01);
      if (ux + unitW > w * 0.96) continue;
      ctx.fillStyle = oaColors[(row + col) % oaColors.length];
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(ux, uy, unitW, unitH, 4);
        ctx.fill();
      } else {
        ctx.fillRect(ux, uy, unitW, unitH);
      }
      ctx.strokeStyle = '#0B6623';
      ctx.lineWidth = 1;
      ctx.strokeRect(ux, uy, unitW, unitH);
    }
  }

  // O-antigen label
  ctx.fillStyle = '#2ECC71';
  ctx.font = `bold ${w * 0.032}px Arial`;
  ctx.fillText('O-Antigen (Repeating polysaccharide units)', w * 0.05, oAgY - h * 0.02);

  // Labels
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.04}px Arial`;
  ctx.fillText('LPS Structure', w * 0.05, h * 0.05);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillText('Inner Core', w * 0.68, coreY - h * 0.02);
  ctx.fillText('Lipid A region', w * 0.72, lipidAY + h * 0.04);
}


static drawRibosomes(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  // Draw multiple 70S ribosomes scattered
  const positions = [
    [0.2, 0.3], [0.45, 0.25], [0.7, 0.3],
    [0.15, 0.55], [0.4, 0.6], [0.65, 0.55],
    [0.3, 0.8], [0.6, 0.78], [0.8, 0.65]
  ];

  positions.forEach(([px, py]) => {
    const cx = w * px;
    const cy = h * py;
    const r = w * 0.055;

    // 50S large subunit
    ctx.fillStyle = '#2980B9';
    ctx.beginPath();
    ctx.ellipse(cx, cy - r * 0.3, r, r * 0.65, 0, Math.PI, 0);
    ctx.fill();
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // 30S small subunit
    ctx.fillStyle = '#5DADE2';
    ctx.beginPath();
    ctx.ellipse(cx, cy + r * 0.2, r * 0.75, r * 0.45, 0, 0, Math.PI);
    ctx.fill();
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Interface cleft line
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - r * 0.75, cy);
    ctx.lineTo(cx + r * 0.75, cy);
    ctx.stroke();

    // mRNA thread
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - r * 1.1, cy + r * 0.1);
    ctx.lineTo(cx + r * 1.1, cy + r * 0.1);
    ctx.stroke();
  });

  // Polysome chain example
  const polyCx = w * 0.5;
  const polyCy = h * 0.92;
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 2]);
  ctx.beginPath();
  ctx.moveTo(w * 0.05, polyCy);
  ctx.lineTo(w * 0.95, polyCy);
  ctx.stroke();
  ctx.setLineDash([]);

  // Labels
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.045}px Arial`;
  ctx.fillText('70S Ribosomes', w * 0.05, h * 0.08);
  ctx.font = `${w * 0.032}px Arial`;
  ctx.fillStyle = '#2980B9';
  ctx.fillText('50S', w * 0.72, h * 0.15);
  ctx.fillStyle = '#5DADE2';
  ctx.fillText('30S', w * 0.72, h * 0.22);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('mRNA', w * 0.72, h * 0.29);
}

static drawCapsule(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const cy = h * 0.52;
  const bw = w * 0.22;
  const bh = h * 0.18;

  // Capsule (outermost)
  ctx.strokeStyle = '#A9CCE3';
  ctx.lineWidth = 18;
  ctx.globalAlpha = 0.35;
  ctx.fillStyle = '#D6EAF8';
  ctx.beginPath();
  ctx.ellipse(cx, cy, bw + w * 0.15, bh + h * 0.22, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.globalAlpha = 1;

  ctx.strokeStyle = '#5DADE2';
  ctx.lineWidth = 3;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.ellipse(cx, cy, bw + w * 0.15, bh + h * 0.22, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Cell wall
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 6;
  ctx.fillStyle = '#D7BDE2';
  ctx.beginPath();
  ctx.ellipse(cx, cy, bw + w * 0.05, bh + h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Cell membrane
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 4;
  ctx.fillStyle = '#AED6F1';
  ctx.beginPath();
  ctx.ellipse(cx, cy, bw, bh, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Nucleoid region
  ctx.fillStyle = '#F9E79F';
  ctx.beginPath();
  ctx.ellipse(cx, cy, bw * 0.45, bh * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Polysaccharide fibers in capsule
  ctx.strokeStyle = '#2E86C1';
  ctx.lineWidth = 1;
  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2;
    const innerR = bw + w * 0.06;
    const outerR = bw + w * 0.13;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * (bh + h * 0.09));
    ctx.lineTo(cx + Math.cos(angle) * outerR, cy + Math.sin(angle) * (bh + h * 0.19));
    ctx.stroke();
  }

  // Annotations
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.045}px Arial`;
  ctx.fillText('Polysaccharide Capsule', w * 0.05, h * 0.08);

  const labels = [
    [cx + bw + w * 0.18, cy - h * 0.06, '#5DADE2', 'Capsule'],
    [cx + bw + w * 0.08, cy + h * 0.14, '#884EA0', 'Cell Wall'],
    [cx + bw + w * 0.01, cy + h * 0.22, '#1A5276', 'Membrane'],
  ];
  labels.forEach(([lx, ly, col, txt]) => {
    ctx.fillStyle = col;
    ctx.font = `${w * 0.033}px Arial`;
    ctx.fillText(txt, lx, ly);
  });
}

static drawEndospore(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const cy = h * 0.52;

  // Exosporium (outermost)
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 3;
  ctx.setLineDash([5, 3]);
  ctx.fillStyle = 'rgba(215,189,226,0.3)';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.34, h * 0.38, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.setLineDash([]);

  // Spore coat
  ctx.fillStyle = '#A04000';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.28, h * 0.32, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#6E2F1A';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Outer spore coat ridges
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    ctx.strokeStyle = '#6E2F1A';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * w * 0.22, cy + Math.sin(angle) * h * 0.25);
    ctx.lineTo(cx + Math.cos(angle) * w * 0.27, cy + Math.sin(angle) * h * 0.31);
    ctx.stroke();
  }

  // Cortex
  ctx.fillStyle = '#F5CBA7';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.2, h * 0.23, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#E59866';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Inner membrane
  ctx.fillStyle = '#AED6F1';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.14, h * 0.17, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2E86C1';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Core (spore protoplast)
  ctx.fillStyle = '#F9E79F';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.09, h * 0.11, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D4AC0D';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Core DNA
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, w * 0.05, 0, Math.PI * 2);
  ctx.stroke();

  // Labels
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.045}px Arial`;
  ctx.fillText('Endospore Structure', w * 0.05, h * 0.08);

  const labels = [
    [w * 0.03, h * 0.2, '#884EA0', 'Exosporium'],
    [w * 0.03, h * 0.28, '#A04000', 'Spore Coat'],
    [w * 0.03, h * 0.36, '#E59866', 'Cortex'],
    [w * 0.03, h * 0.44, '#2E86C1', 'Inner Membrane'],
    [w * 0.03, h * 0.52, '#D4AC0D', 'Core'],
  ];
  labels.forEach(([lx, ly, col, txt]) => {
    ctx.fillStyle = col;
    ctx.font = `${w * 0.03}px Arial`;
    ctx.fillText(txt, lx, ly);
  });
}

static drawMesosomes(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const cy = h * 0.5;
  const bw = w * 0.3;
  const bh = h * 0.3;

  // Cell wall
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 8;
  ctx.fillStyle = '#D7BDE2';
  ctx.beginPath();
  ctx.ellipse(cx, cy, bw + w * 0.04, bh + h * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Plasma membrane
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 4;
  ctx.fillStyle = '#EAF2F8';
  ctx.beginPath();
  ctx.ellipse(cx, cy, bw, bh, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Mesosome invagination 1 - lamellar type
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(cx, cy, bw, bh, 0, 0, Math.PI * 2);
  ctx.clip();

  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 3;
  ctx.fillStyle = '#AED6F1';

  // Draw infolded membrane loops
  for (let i = 0; i < 5; i++) {
    const loopX = cx - bw * 0.1;
    const loopY = cy - bh * 0.4 + i * bh * 0.18;
    const lr = bw * 0.12 - i * bw * 0.01;
    ctx.beginPath();
    ctx.ellipse(loopX, loopY, lr, lr * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Vesicular mesosome on other side
  ctx.fillStyle = '#85C1E9';
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 0.8 + Math.PI * 0.1;
    const vx = cx + bw * 0.55 * Math.cos(angle);
    const vy = cy + bh * 0.7 * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(vx, vy, bw * 0.07, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  ctx.restore();

  // Nucleoid
  ctx.fillStyle = '#F9E79F';
  ctx.beginPath();
  ctx.ellipse(cx + bw * 0.15, cy, bw * 0.35, bh * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();

  // Labels
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.045}px Arial`;
  ctx.fillText('Mesosomes', w * 0.05, h * 0.08);
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillStyle = '#1A5276';
  ctx.fillText('Lamellar mesosome', w * 0.03, h * 0.85);
  ctx.fillStyle = '#2E86C1';
  ctx.fillText('Vesicular mesosome', w * 0.55, h * 0.85);
}

static drawInclusionBodies(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const cy = h * 0.5;

  // Cell outline
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 6;
  ctx.fillStyle = '#EAF2F8';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.4, h * 0.38, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // PHB (polyhydroxybutyrate) granules - bright yellow refractile
  const phbPositions = [[0.35, 0.4, 0.055], [0.55, 0.35, 0.06], [0.62, 0.58, 0.05]];
  phbPositions.forEach(([px, py, r]) => {
    const gx = w * px, gy = h * py;
    ctx.fillStyle = '#F4D03F';
    ctx.beginPath();
    ctx.arc(gx, gy, w * r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#B7950B';
    ctx.lineWidth = 2;
    ctx.stroke();
    // Shine
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.beginPath();
    ctx.arc(gx - w * r * 0.3, gy - w * r * 0.3, w * r * 0.3, 0, Math.PI * 2);
    ctx.fill();
  });

  // Glycogen granules - smaller, brownish
  const glycogenPos = [[0.38, 0.62, 0.035], [0.44, 0.55, 0.03], [0.48, 0.68, 0.032]];
  glycogenPos.forEach(([px, py, r]) => {
    ctx.fillStyle = '#E59866';
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#873600';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Sulfur granules - small, bright orange
  const sulfurPos = [[0.6, 0.45, 0.025], [0.65, 0.38, 0.028], [0.58, 0.52, 0.022]];
  sulfurPos.forEach(([px, py, r]) => {
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#D35400';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // Gas vacuoles - elongated, pale
  ctx.fillStyle = 'rgba(174,214,241,0.7)';
  ctx.strokeStyle = '#2E86C1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.42, h * 0.38, w * 0.07, h * 0.03, Math.PI / 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.43, w * 0.065, h * 0.025, -Math.PI / 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Legend
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Inclusion Bodies', w * 0.05, h * 0.08);

  const legend = [
    ['#F4D03F', 'PHB granules', h * 0.88],
    ['#E59866', 'Glycogen granules', h * 0.92],
    ['#F39C12', 'Sulfur granules', h * 0.96],
  ];
  legend.forEach(([col, txt, ly]) => {
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(w * 0.07, ly - h * 0.01, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.03}px Arial`;
    ctx.fillText(txt, w * 0.11, ly);
  });
  ctx.fillStyle = '#2E86C1';
  ctx.fillRect(w * 0.55, h * 0.875, w * 0.04, h * 0.02);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillText('Gas vacuoles', w * 0.61, h * 0.89);
}

static drawPeriplasm(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const cy = h * 0.52;
  const outerR = w * 0.36;
  const innerR = w * 0.24;

  // Outer membrane
  ctx.fillStyle = '#E8DAEF';
  ctx.beginPath();
  ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#7D3C98';
  ctx.lineWidth = 8;
  ctx.stroke();

  // Periplasmic space
  ctx.fillStyle = '#D5F5E3';
  ctx.beginPath();
  ctx.arc(cx, cy, outerR - 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx, cy, innerR + 4, 0, Math.PI * 2);
  ctx.fillStyle = '#EAF2F8';
  ctx.fill();

  // Peptidoglycan layer (thin, gram-negative)
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 4;
  ctx.setLineDash([8, 4]);
  ctx.beginPath();
  ctx.arc(cx, cy, (outerR + innerR) / 2, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Inner membrane (plasma membrane)
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
  ctx.stroke();

  // Cytoplasm
  ctx.fillStyle = '#AED6F1';
  ctx.beginPath();
  ctx.arc(cx, cy, innerR - 4, 0, Math.PI * 2);
  ctx.fill();

  // Periplasmic proteins - scattered dots in the periplasmic space
  const proteinColors = ['#27AE60', '#E74C3C', '#F39C12', '#8E44AD'];
  for (let i = 0; i < 20; i++) {
    const angle = (i / 20) * Math.PI * 2;
    const r = (outerR + innerR) / 2 + (Math.random() - 0.5) * (outerR - innerR) * 0.5;
    const px = cx + Math.cos(angle) * r;
    const py = cy + Math.sin(angle) * r;
    ctx.fillStyle = proteinColors[i % proteinColors.length];
    ctx.beginPath();
    ctx.arc(px, py, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
  }

  // Lipoprotein connecting outer membrane to PG
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    ctx.strokeStyle = '#1E8449';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * (outerR - 8), cy + Math.sin(angle) * (outerR - 8));
    ctx.lineTo(cx + Math.cos(angle) * ((outerR + innerR) / 2), cy + Math.sin(angle) * ((outerR + innerR) / 2));
    ctx.stroke();
  }

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.04}px Arial`;
  ctx.fillText('Periplasmic Space (Gram-negative)', w * 0.04, h * 0.08);

  const labels = [
    [w * 0.03, h * 0.88, '#7D3C98', 'Outer Membrane'],
    [w * 0.03, h * 0.92, '#884EA0', 'Peptidoglycan'],
    [w * 0.03, h * 0.96, '#1A5276', 'Inner Membrane'],
    [w * 0.55, h * 0.88, '#27AE60', 'Periplasmic proteins'],
  ];
  labels.forEach(([lx, ly, col, txt]) => {
    ctx.fillStyle = col;
    ctx.font = `${w * 0.028}px Arial`;
    ctx.fillText(txt, lx, ly);
  });
}



static drawTeichoicAcids(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  const wallTop = h * 0.25;
  const wallBot = h * 0.75;
  const wallLeft = w * 0.2;
  const wallRight = w * 0.8;
  const memTop = wallBot;
  const memBot = h * 0.85;

  // Thick peptidoglycan wall
  ctx.fillStyle = '#FDEBD0';
  ctx.fillRect(wallLeft, wallTop, wallRight - wallLeft, wallBot - wallTop);
  ctx.strokeStyle = '#E59866';
  ctx.lineWidth = 3;
  ctx.strokeRect(wallLeft, wallTop, wallRight - wallLeft, wallBot - wallTop);

  // Peptidoglycan mesh lines
  ctx.strokeStyle = '#E59866';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  for (let x = wallLeft + 20; x < wallRight; x += 20) {
    ctx.beginPath(); ctx.moveTo(x, wallTop); ctx.lineTo(x, wallBot); ctx.stroke();
  }
  for (let y = wallTop + 15; y < wallBot; y += 15) {
    ctx.beginPath(); ctx.moveTo(wallLeft, y); ctx.lineTo(wallRight, y); ctx.stroke();
  }
  ctx.setLineDash([]);

  // Plasma membrane
  ctx.fillStyle = '#AED6F1';
  ctx.fillRect(wallLeft, memTop, wallRight - wallLeft, memBot - memTop);
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 3;
  ctx.strokeRect(wallLeft, memTop, wallRight - wallLeft, memBot - memTop);

  // Wall teichoic acids - extend from wall surface outward
  const wtaCount = 10;
  for (let i = 0; i < wtaCount; i++) {
    const tx = wallLeft + (i + 0.5) * ((wallRight - wallLeft) / wtaCount);
    // Repeating phosphate-sugar chain
    const chainLength = 6;
    for (let j = 0; j < chainLength; j++) {
      const sy = wallTop - j * h * 0.055;
      // Ribitol/glycerol unit
      ctx.fillStyle = j % 2 === 0 ? '#2ECC71' : '#27AE60';
      ctx.beginPath();
      ctx.arc(tx, sy, w * 0.018, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#1E8449';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // Phosphate link
      if (j < chainLength - 1) {
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(tx, sy - w * 0.018);
        ctx.lineTo(tx, sy - h * 0.055 + w * 0.018);
        ctx.stroke();
        // Phosphate circle
        ctx.fillStyle = '#E74C3C';
        ctx.beginPath();
        ctx.arc(tx, sy - h * 0.028, w * 0.01, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    // Anchor into wall
    ctx.strokeStyle = '#873600';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(tx, wallTop);
    ctx.lineTo(tx, wallTop + h * 0.05);
    ctx.stroke();
  }

  // Lipoteichoic acids - span from membrane through wall
  const ltaCount = 6;
  for (let i = 0; i < ltaCount; i++) {
    const tx = wallLeft + (i + 0.5) * ((wallRight - wallLeft) / ltaCount) + w * 0.03;
    const chainLength = 9;
    for (let j = 0; j < chainLength; j++) {
      const sy = memTop - j * h * 0.052 + h * 0.01;
      ctx.fillStyle = j % 2 === 0 ? '#F39C12' : '#E67E22';
      ctx.beginPath();
      ctx.arc(tx, sy, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      if (j < chainLength - 1) {
        ctx.strokeStyle = '#8E44AD';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(tx, sy - w * 0.015);
        ctx.lineTo(tx, sy - h * 0.052 + w * 0.015);
        ctx.stroke();
      }
    }
    // Lipid anchor in membrane
    ctx.fillStyle = '#1A5276';
    ctx.beginPath();
    ctx.ellipse(tx, memTop + h * 0.03, w * 0.015, h * 0.015, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Labels
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Teichoic Acids (Gram-positive)', w * 0.05, h * 0.07);

  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillStyle = '#27AE60';
  ctx.fillText('Wall Teichoic Acid (WTA)', w * 0.04, h * 0.13);
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Lipoteichoic Acid (LTA)', w * 0.54, h * 0.13);
  ctx.fillStyle = '#E59866';
  ctx.fillText('Peptidoglycan Wall', w * 0.32, h * 0.5);
  ctx.fillStyle = '#1A5276';
  ctx.fillText('Plasma Membrane', w * 0.33, h * 0.82);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('● Phosphate', w * 0.04, h * 0.93);
  ctx.fillStyle = '#27AE60';
  ctx.fillText('● Ribitol unit', w * 0.25, h * 0.93);
  ctx.fillStyle = '#F39C12';
  ctx.fillText('● Glycerol unit (LTA)', w * 0.5, h * 0.93);
}
VIRUS MISSING PARTS:
static drawMatrixProteins(ctx, color, w, h) {
  ctx.fillStyle = '#1A1A2E';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const cy = h * 0.52;
  const envR = w * 0.36;
  const matR = w * 0.3;
  const capR = w * 0.22;

  // Envelope (lipid bilayer)
  ctx.fillStyle = '#2C3E50';
  ctx.beginPath();
  ctx.arc(cx, cy, envR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 10;
  ctx.stroke();

  // Spike proteins on envelope
  for (let i = 0; i < 18; i++) {
    const angle = (i / 18) * Math.PI * 2;
    const bx = cx + Math.cos(angle) * envR;
    const by = cy + Math.sin(angle) * envR;
    const tx = cx + Math.cos(angle) * (envR + w * 0.07);
    const ty = cy + Math.sin(angle) * (envR + w * 0.07);
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(tx, ty);
    ctx.stroke();
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(tx, ty, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }

  // Matrix protein layer
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(cx, cy, matR + 2, 0, Math.PI * 2);
  ctx.fill();

  // Matrix protein units (bricks)
  const mpCount = 28;
  for (let i = 0; i < mpCount; i++) {
    const angle = (i / mpCount) * Math.PI * 2;
    const mx = cx + Math.cos(angle) * matR;
    const my = cy + Math.sin(angle) * matR;
    ctx.save();
    ctx.translate(mx, my);
    ctx.rotate(angle);
    ctx.fillStyle = i % 2 === 0 ? '#F39C12' : '#E67E22';
    ctx.fillRect(-w * 0.03, -h * 0.025, w * 0.06, h * 0.05);
    ctx.strokeStyle = '#D35400';
    ctx.lineWidth = 1;
    ctx.strokeRect(-w * 0.03, -h * 0.025, w * 0.06, h * 0.05);
    ctx.restore();
  }

  // Capsid
  ctx.fillStyle = '#2E86C1';
  ctx.beginPath();
  ctx.arc(cx, cy, capR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Nucleic acid core
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.arc(cx, cy, capR * 0.6, 0, Math.PI * 2);
  ctx.fill();

  // Labels
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Matrix Protein Layer', w * 0.05, h * 0.07);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Envelope', w * 0.05, h * 0.88);
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Matrix proteins (M1)', w * 0.05, h * 0.92);
  ctx.fillStyle = '#2E86C1';
  ctx.fillText('Capsid', w * 0.05, h * 0.96);
  ctx.fillStyle = '#27AE60';
  ctx.fillText('RNA genome', w * 0.55, h * 0.96);
}

static drawReverseTranscriptase(ctx, color, w, h) {
  ctx.fillStyle = '#0D1117';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const cy = h * 0.48;

  // p66 subunit (large, fingers/palm/thumb/RNase H)
  ctx.fillStyle = '#2980B9';
  // Palm domain
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.05, cy, w * 0.18, h * 0.22, -0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Fingers domain
  ctx.fillStyle = '#3498DB';
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.22, cy - h * 0.1, w * 0.1, h * 0.15, -0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Thumb domain
  ctx.fillStyle = '#5DADE2';
  ctx.beginPath();
  ctx.ellipse(cx + w * 0.08, cy - h * 0.15, w * 0.09, h * 0.12, 0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // RNase H domain (p66)
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.ellipse(cx + w * 0.2, cy + h * 0.05, w * 0.1, h * 0.14, 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.stroke();

  // p51 subunit (smaller, structural)
  ctx.fillStyle = 'rgba(39,174,96,0.7)';
  ctx.beginPath();
  ctx.ellipse(cx + w * 0.05, cy + h * 0.18, w * 0.2, h * 0.12, 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#1E8449';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Active site / polymerase active site
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(cx - w * 0.05, cy + h * 0.02, w * 0.03, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D35400';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Template RNA/DNA hybrid in cleft
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.3, cy - h * 0.05);
  ctx.bezierCurveTo(cx - w * 0.1, cy - h * 0.05, cx - w * 0.1, cy + h * 0.05, cx + w * 0.15, cy + h * 0.05);
  ctx.stroke();

  ctx.strokeStyle = '#2ECC71';
  ctx.lineWidth = 3;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.3, cy);
  ctx.bezierCurveTo(cx - w * 0.1, cy, cx - w * 0.1, cy + h * 0.1, cx + w * 0.15, cy + h * 0.1);
  ctx.stroke();
  ctx.setLineDash([]);

  // Mg2+ ions at active site
  ctx.fillStyle = '#F1C40F';
  ctx.beginPath();
  ctx.arc(cx - w * 0.07, cy + h * 0.04, w * 0.012, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx - w * 0.02, cy + h * 0.04, w * 0.012, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.04}px Arial`;
  ctx.fillText('Reverse Transcriptase (RT)', w * 0.05, h * 0.07);
  ctx.font = `${w * 0.027}px Arial`;
  ctx.fillStyle = '#2980B9';
  ctx.fillText('p66 Fingers', w * 0.03, h * 0.88);
  ctx.fillStyle = '#5DADE2';
  ctx.fillText('Thumb', w * 0.22, h * 0.88);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('RNase H (p66)', w * 0.4, h * 0.88);
  ctx.fillStyle = '#27AE60';
  ctx.fillText('p51 subunit', w * 0.65, h * 0.88);
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Active site', w * 0.03, h * 0.93);
  ctx.fillStyle = '#F1C40F';
  ctx.fillText('Mg²⁺ ions', w * 0.22, h * 0.93);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('RNA template', w * 0.45, h * 0.93);
  ctx.fillStyle = '#2ECC71';
  ctx.fillText('DNA strand', w * 0.68, h * 0.93);
}

static drawBasalBody(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const flagTop = h * 0.04;
  const lRingY = h * 0.3;
  const pRingY = h * 0.4;
  const msRingY = h * 0.55;
  const cRingY = h * 0.7;
  const hookY = h * 0.18;
  const ringW = w * 0.18;

  // Flagellar filament
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx, flagTop);
  ctx.lineTo(cx, hookY - h * 0.04);
  ctx.stroke();

  // Hook
  ctx.strokeStyle = '#8E44AD';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(cx + w * 0.04, hookY, w * 0.04, Math.PI, Math.PI * 1.6);
  ctx.stroke();

  // Rod connecting hook to basal body
  ctx.strokeStyle = '#7F8C8D';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(cx, hookY + h * 0.02);
  ctx.lineTo(cx, cRingY + h * 0.02);
  ctx.stroke();

  // Outer membrane
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 5;
  ctx.fillStyle = 'rgba(215,189,226,0.4)';
  ctx.fillRect(w * 0.15, lRingY - h * 0.015, w * 0.7, h * 0.03);
  ctx.strokeRect(w * 0.15, lRingY - h * 0.015, w * 0.7, h * 0.03);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillText('Outer membrane', w * 0.72, lRingY + h * 0.008);

  // Peptidoglycan layer
  ctx.fillStyle = 'rgba(245,176,65,0.4)';
  ctx.strokeStyle = '#D4A017';
  ctx.lineWidth = 3;
  ctx.fillRect(w * 0.15, pRingY - h * 0.01, w * 0.7, h * 0.02);
  ctx.strokeRect(w * 0.15, pRingY - h * 0.01, w * 0.7, h * 0.02);
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Peptidoglycan', w * 0.72, pRingY + h * 0.008);

  // Inner membrane
  ctx.fillStyle = 'rgba(174,214,241,0.4)';
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 4;
  ctx.fillRect(w * 0.15, msRingY - h * 0.018, w * 0.7, h * 0.036);
  ctx.strokeRect(w * 0.15, msRingY - h * 0.018, w * 0.7, h * 0.036);
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Inner membrane', w * 0.72, msRingY + h * 0.008);

  // L ring
  const rings = [
    { y: lRingY, col: '#884EA0', label: 'L ring' },
    { y: pRingY, col: '#D4A017', label: 'P ring' },
    { y: msRingY, col: '#1A5276', label: 'MS ring' },
    { y: cRingY, col: '#E74C3C', label: 'C ring (switch)' },
  ];

  rings.forEach(({ y, col, label }) => {
    ctx.fillStyle = col;
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx, y, ringW, h * 0.035, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Hole
    ctx.fillStyle = '#ECF0F1';
    ctx.beginPath();
    ctx.ellipse(cx, y, w * 0.025, h * 0.02, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.028}px Arial`;
    ctx.fillText(label, w * 0.04, y + h * 0.008);
  });

  // Mot proteins around MS ring
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const mx = cx + Math.cos(angle) * (ringW + w * 0.04);
    const my = msRingY + Math.sin(angle) * h * 0.07;
    ctx.fillStyle = '#27AE60';
    ctx.beginPath();
    ctx.arc(mx, my, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1E8449';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Flagellar Basal Body', w * 0.05, h * 0.07);
  ctx.font = `${w * 0.027}px Arial`;
  ctx.fillStyle = '#27AE60';
  ctx.fillText('MotA/MotB (stator)', w * 0.04, h * 0.88);
  ctx.fillStyle = '#8E44AD';
  ctx.fillText('Hook', w * 0.04, h * 0.93);
  ctx.fillStyle = '#2980B9';
  ctx.fillText('Filament', w * 0.04, h * 0.98);
}

static drawTailFibers(ctx, color, w, h) {
  ctx.fillStyle = '#0D1117';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const baseY = h * 0.3;

  // Baseplate
  ctx.fillStyle = '#884EA0';
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.12, baseY);
  ctx.lineTo(cx + w * 0.12, baseY);
  ctx.lineTo(cx + w * 0.08, baseY + h * 0.06);
  ctx.lineTo(cx - w * 0.08, baseY + h * 0.06);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#6C3483';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Central spike
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx, baseY + h * 0.06);
  ctx.lineTo(cx, baseY + h * 0.15);
  ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.moveTo(cx, baseY + h * 0.18);
  ctx.lineTo(cx - w * 0.02, baseY + h * 0.13);
  ctx.lineTo(cx + w * 0.02, baseY + h * 0.13);
  ctx.closePath();
  ctx.fill();

  // Long tail fibers (6 total - 3 visible on each side)
  const fiberAngles = [
    -Math.PI * 0.25, -Math.PI * 0.4, -Math.PI * 0.15,
    Math.PI * 0.25, Math.PI * 0.4, Math.PI * 0.15
  ];
  const fiberColors = ['#F39C12', '#E67E22', '#F9C74F'];

  fiberAngles.forEach((angle, i) => {
    const side = angle < 0 ? -1 : 1;
    const bx = cx + side * w * 0.09;
    const by = baseY + h * 0.04;
    const fLen = h * 0.42;

    // Fiber segments with kink
    const kinkX = bx + Math.cos(angle) * fLen * 0.45;
    const kinkY = by + Math.sin(Math.abs(angle)) * fLen * 0.45;
    const tipX = kinkX + Math.cos(angle * 0.5) * fLen * 0.55;
    const tipY = kinkY + fLen * 0.35;

    ctx.strokeStyle = fiberColors[i % 3];
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(kinkX, kinkY);
    ctx.stroke();

    ctx.strokeStyle = fiberColors[(i + 1) % 3];
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(kinkX, kinkY);
    ctx.lineTo(tipX, tipY);
    ctx.stroke();

    // Receptor binding tip
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(tipX, tipY, w * 0.022, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Kink joint
    ctx.fillStyle = '#F1C40F';
    ctx.beginPath();
    ctx.arc(kinkX, kinkY, w * 0.015, 0, Math.PI * 2);
    ctx.fill();

    // Short tail fibers attached to baseplate corners
    const stfX = cx + side * w * 0.05 * (1 + i * 0.1 % 0.15);
    ctx.strokeStyle = '#2ECC71';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(stfX, baseY + h * 0.06);
    ctx.lineTo(stfX + side * w * 0.08, baseY + h * 0.12);
    ctx.stroke();
  });

  // Host receptor (LPS surface)
  ctx.fillStyle = '#1E8449';
  ctx.fillRect(w * 0.05, h * 0.88, w * 0.9, h * 0.06);
  ctx.strokeStyle = '#145A32';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, h * 0.88, w * 0.9, h * 0.06);
  // LPS spikes
  for (let i = 0; i < 20; i++) {
    const lx = w * 0.07 + i * (w * 0.87 / 19);
    ctx.strokeStyle = '#58D68D';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(lx, h * 0.88);
    ctx.lineTo(lx, h * 0.82);
    ctx.stroke();
  }

  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Phage Tail Fibers', w * 0.05, h * 0.07);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Long tail fibers', w * 0.05, h * 0.78);
  ctx.fillStyle = '#2ECC71';
  ctx.fillText('Short tail fibers', w * 0.45, h * 0.78);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('Receptor binding tip', w * 0.05, h * 0.83);
  ctx.fillStyle = '#1E8449';
  ctx.fillText('Host surface (LPS)', w * 0.45, h * 0.83);
}

static drawProhead(ctx, color, w, h) {
  ctx.fillStyle = '#0D1117';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const cy = h * 0.46;
  const r = w * 0.28;
  const sides = 6;

  // Helper to draw hexagon
  const hexPath = (hcx, hcy, hr, rotation = 0) => {
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const a = (i / sides) * Math.PI * 2 + rotation;
      i === 0 ? ctx.moveTo(hcx + Math.cos(a) * hr, hcy + Math.sin(a) * hr)
               : ctx.lineTo(hcx + Math.cos(a) * hr, hcy + Math.sin(a) * hr);
    }
    ctx.closePath();
  };

  // Procapsid shell (rounded hexagonal, slightly distorted)
  ctx.fillStyle = '#2980B9';
  hexPath(cx, cy, r, Math.PI / 6);
  ctx.fill();
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Portal vertex (darker face)
  ctx.fillStyle = '#8E44AD';
  hexPath(cx, cy + r * 0.6, r * 0.22, 0);
  ctx.fill();
  ctx.strokeStyle = '#6C3483';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.fillText('Portal', cx - w * 0.03, cy + r * 0.65);

  // Scaffolding proteins inside
  const scCount = 22;
  for (let i = 0; i < scCount; i++) {
    const angle = (i / scCount) * Math.PI * 2;
    const scR = r * 0.7;
    const sx = cx + Math.cos(angle) * scR * 0.8;
    const sy = cy + Math.sin(angle) * scR * 0.7;
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(sx, sy, w * 0.016, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#E67E22';
    ctx.lineWidth = 1;
    ctx.stroke();
    // Spoke to center
    ctx.strokeStyle = 'rgba(243,156,18,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(cx, cy);
    ctx.stroke();
  }

  // Immature capsomers on surface
  for (let i = 0; i < sides; i++) {
    const angle = (i / sides) * Math.PI * 2 + Math.PI / 6;
    const faceX = cx + Math.cos(angle) * r * 0.65;
    const faceY = cy + Math.sin(angle) * r * 0.65;
    ctx.fillStyle = '#5DADE2';
    ctx.beginPath();
    hexPath(faceX, faceY, r * 0.22, 0);
    ctx.fill();
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // DNA packaging motor at portal
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.ellipse(cx, cy + r + h * 0.05, w * 0.06, h * 0.035, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.fillText('Packaging motor', cx - w * 0.08, cy + r + h * 0.07);

  // Partially packaged DNA
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy + r + h * 0.07);
  for (let i = 0; i < 30; i++) {
    const t = i / 30;
    const dnaX = cx + Math.cos(i * 1.8) * r * 0.3 * t;
    const dnaY = cy + h * 0.12 - t * r * 0.5;
    ctx.lineTo(dnaX, dnaY);
  }
  ctx.stroke();

  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Prohead (Procapsid)', w * 0.05, h * 0.07);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Scaffolding proteins', w * 0.04, h * 0.88);
  ctx.fillStyle = '#5DADE2';
  ctx.fillText('Immature capsomers', w * 0.04, h * 0.92);
  ctx.fillStyle = '#8E44AD';
  ctx.fillText('Portal vertex', w * 0.55, h * 0.88);
  ctx.fillStyle = '#27AE60';
  ctx.fillText('Entering DNA', w * 0.55, h * 0.92);
}
FUNGI MISSING PARTS:
static drawChitinWall(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  const wallLeft = w * 0.1;
  const wallRight = w * 0.9;
  const layers = [
    { top: h * 0.15, bot: h * 0.32, col: '#FDFEFE', strokeCol: '#BDC3C7', label: 'External glycoproteins / mannoproteins', labelCol: '#7F8C8D' },
    { top: h * 0.32, bot: h * 0.47, col: '#F9E79F', strokeCol: '#D4AC0D', label: 'β-1,3-glucan + β-1,6-glucan network', labelCol: '#B7950B' },
    { top: h * 0.47, bot: h * 0.62, col: '#FDEBD0', strokeCol: '#E59866', label: 'Chitin microfibrils layer', labelCol: '#A04000' },
    { top: h * 0.62, bot: h * 0.72, col: '#AED6F1', strokeCol: '#1A5276', label: 'Plasma membrane', labelCol: '#1A5276' },
  ];

  layers.forEach(({ top, bot, col, strokeCol, label, labelCol }) => {
    ctx.fillStyle = col;
    ctx.fillRect(wallLeft, top, wallRight - wallLeft, bot - top);
    ctx.strokeStyle = strokeCol;
    ctx.lineWidth = 2;
    ctx.strokeRect(wallLeft, top, wallRight - wallLeft, bot - top);
    ctx.fillStyle = labelCol;
    ctx.font = `${w * 0.03}px Arial`;
    ctx.fillText(label, wallLeft + w * 0.02, top + (bot - top) / 2 + h * 0.01);
  });

  // Chitin fibril detail in chitin layer
  ctx.save();
  ctx.beginPath();
  ctx.rect(wallLeft, h * 0.47, wallRight - wallLeft, h * 0.15);
  ctx.clip();
  for (let i = 0; i < 30; i++) {
    const fx = wallLeft + (i / 30) * (wallRight - wallLeft);
    ctx.strokeStyle = '#A04000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(fx, h * 0.47);
    ctx.lineTo(fx + w * 0.04, h * 0.62);
    ctx.stroke();
  }
  ctx.restore();

  // Glucan network in glucan layer
  ctx.save();
  ctx.beginPath();
  ctx.rect(wallLeft, h * 0.32, wallRight - wallLeft, h * 0.15);
  ctx.clip();
  ctx.strokeStyle = 'rgba(180,150,0,0.4)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.arc(wallLeft + (i + 0.5) * ((wallRight - wallLeft) / 12), h * 0.395, w * 0.04, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  // Mannoprotein spikes on outer surface
  for (let i = 0; i < 16; i++) {
    const mx = wallLeft + (i + 0.5) * ((wallRight - wallLeft) / 16);
    ctx.strokeStyle = '#7F8C8D';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(mx, h * 0.15);
    ctx.lineTo(mx, h * 0.08);
    ctx.stroke();
    ctx.fillStyle = '#BDC3C7';
    ctx.beginPath();
    ctx.arc(mx, h * 0.07, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Fungal Cell Wall (Chitin/Glucan)', w * 0.05, h * 0.06);
}

static drawSeptum(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;

  // Hypha tube
  ctx.fillStyle = '#FDEBD0';
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 5;
  // Top compartment
  ctx.fillRect(w * 0.2, h * 0.05, w * 0.6, h * 0.4);
  ctx.strokeRect(w * 0.2, h * 0.05, w * 0.6, h * 0.4);
  // Bottom compartment
  ctx.fillRect(w * 0.2, h * 0.55, w * 0.6, h * 0.4);
  ctx.strokeRect(w * 0.2, h * 0.55, w * 0.6, h * 0.4);

  // Septum cross-wall
  const sepY = h * 0.455;
  ctx.fillStyle = '#884EA0';
  ctx.fillRect(w * 0.2, sepY, w * 0.6, h * 0.09);
  ctx.strokeStyle = '#6C3483';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.2, sepY, w * 0.6, h * 0.09);

  // Septal pore (central opening)
  const poreR = w * 0.04;
  ctx.fillStyle = '#FDEBD0';
  ctx.beginPath();
  ctx.arc(cx, sepY + h * 0.045, poreR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Woronin body (plugging pore) - octa/hexagonal
  ctx.fillStyle = '#E74C3C';
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.beginPath();
  const wbSides = 8;
  for (let i = 0; i < wbSides; i++) {
    const angle = (i / wbSides) * Math.PI * 2;
    i === 0 ? ctx.moveTo(cx + Math.cos(angle) * poreR * 0.85, sepY + h * 0.045 + Math.sin(angle) * poreR * 0.85)
             : ctx.lineTo(cx + Math.cos(angle) * poreR * 0.85, sepY + h * 0.045 + Math.sin(angle) * poreR * 0.85);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Second Woronin body (unattached, nearby)
  ctx.fillStyle = 'rgba(231,76,60,0.6)';
  ctx.beginPath();
  for (let i = 0; i < wbSides; i++) {
    const angle = (i / wbSides) * Math.PI * 2;
    i === 0 ? ctx.moveTo(cx + w * 0.12 + Math.cos(angle) * poreR * 0.8, sepY + h * 0.02 + Math.sin(angle) * poreR * 0.8)
             : ctx.lineTo(cx + w * 0.12 + Math.cos(angle) * poreR * 0.8, sepY + h * 0.02 + Math.sin(angle) * poreR * 0.8);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Nuclei in each compartment
  ctx.fillStyle = '#F9E79F';
  ctx.strokeStyle = '#D4AC0D';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.08, h * 0.22, w * 0.07, h * 0.07, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(cx + w * 0.08, h * 0.72, w * 0.07, h * 0.07, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Mitochondria (small)
  ctx.fillStyle = '#E74C3C';
  [[cx - w * 0.15, h * 0.12], [cx + w * 0.12, h * 0.3], [cx - w * 0.1, h * 0.65]].forEach(([mx, my]) => {
    ctx.beginPath();
    ctx.ellipse(mx, my, w * 0.04, h * 0.025, 0.3, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Septal Pore Apparatus', w * 0.05, h * 0.04);
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Septum', w * 0.73, sepY + h * 0.05);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('Woronin body (pore plug)', w * 0.05, h * 0.92);
  ctx.fillStyle = '#F9E79F';
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Septal pore', cx + poreR + w * 0.02, sepY + h * 0.065);
}

static drawConidiophore(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  // Substrate hypha
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 6;
  ctx.fillStyle = '#D7BDE2';
  ctx.beginPath();
  ctx.moveTo(0, h * 0.9);
  ctx.lineTo(w, h * 0.9);
  ctx.stroke();

  // Conidiophore stalk
  const stalkX = w * 0.5;
  ctx.fillStyle = '#884EA0';
  ctx.fillRect(stalkX - w * 0.03, h * 0.3, w * 0.06, h * 0.6);
  ctx.strokeStyle = '#6C3483';
  ctx.lineWidth = 2;
  ctx.strokeRect(stalkX - w * 0.03, h * 0.3, w * 0.06, h * 0.6);

  // Vesicle (swollen apex)
  ctx.fillStyle = '#8E44AD';
  ctx.beginPath();
  ctx.arc(stalkX, h * 0.27, w * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#6C3483';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Metulae (primary sterigmata)
  const metulaeCount = 12;
  for (let i = 0; i < metulaeCount; i++) {
    const angle = (i / metulaeCount) * Math.PI * 2;
    const mx = stalkX + Math.cos(angle) * w * 0.1;
    const my = h * 0.27 + Math.sin(angle) * w * 0.1;
    const metX = stalkX + Math.cos(angle) * w * 0.17;
    const metY = h * 0.27 + Math.sin(angle) * w * 0.17;

    ctx.strokeStyle = '#9B59B6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.lineTo(metX, metY);
    ctx.stroke();

    // Phialides
    const phiX = stalkX + Math.cos(angle) * w * 0.21;
    const phiY = h * 0.27 + Math.sin(angle) * w * 0.21;
    ctx.fillStyle = '#A569BD';
    ctx.beginPath();
    ctx.ellipse(metX + (phiX - metX) * 0.5, metY + (phiY - metY) * 0.5, w * 0.025, w * 0.015, angle, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#7D3C98';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Conidia chain (3-4 spores per phialide)
    for (let c = 0; c < 4; c++) {
      const cDist = w * 0.22 + c * w * 0.065;
      const cxc = stalkX + Math.cos(angle) * cDist;
      const cyc = h * 0.27 + Math.sin(angle) * cDist;
      const greenVal = Math.floor(180 + c * 18);
      ctx.fillStyle = `rgb(46, ${greenVal}, 70)`;
      ctx.beginPath();
      ctx.arc(cxc, cyc, w * 0.022, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#145A32';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Conidiophore & Conidia', w * 0.05, h * 0.06);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#8E44AD';
  ctx.fillText('Vesicle', w * 0.73, h * 0.24);
  ctx.fillStyle = '#A569BD';
  ctx.fillText('Phialides', w * 0.73, h * 0.3);
  ctx.fillStyle = '#27AE60';
  ctx.fillText('Conidia chains', w * 0.73, h * 0.36);
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Stalk', w * 0.73, h * 0.42);
}

static drawSporangium(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  // Sporangiophore stalk
  const sx = w * 0.5;
  ctx.fillStyle = '#884EA0';
  ctx.fillRect(sx - w * 0.025, h * 0.42, w * 0.05, h * 0.52);
  ctx.strokeStyle = '#6C3483';
  ctx.lineWidth = 2;
  ctx.strokeRect(sx - w * 0.025, h * 0.42, w * 0.05, h * 0.52);

  // Columella (dome inside sporangium)
  ctx.fillStyle = '#D7BDE2';
  ctx.beginPath();
  ctx.arc(sx, h * 0.34, w * 0.075, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Sporangium wall
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 5;
  ctx.fillStyle = 'rgba(215,189,226,0.3)';
  ctx.beginPath();
  ctx.arc(sx, h * 0.28, w * 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Sporangiospores inside
  const sporeColors = ['#27AE60', '#2ECC71', '#1E8449', '#58D68D', '#A9DFBF'];
  for (let i = 0; i < 22; i++) {
    const angle = (i / 22) * Math.PI * 2;
    const dist = w * 0.06 + Math.random() * w * 0.1;
    const spx = sx + Math.cos(angle) * dist;
    const spy = h * 0.24 + Math.sin(angle) * dist * 0.85;
    if (Math.sqrt((spx - sx) ** 2 + (spy - h * 0.28) ** 2) > w * 0.17) continue;
    ctx.fillStyle = sporeColors[i % 5];
    ctx.beginPath();
    ctx.ellipse(spx, spy, w * 0.022, h * 0.018, angle * 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Sporangiospores being released (burst)
  const released = [[0.2, 0.12], [0.15, 0.22], [0.78, 0.15], [0.82, 0.28], [0.88, 0.1], [0.12, 0.32]];
  released.forEach(([px, py]) => {
    ctx.fillStyle = '#27AE60';
    ctx.beginPath();
    ctx.ellipse(w * px, h * py, w * 0.022, h * 0.018, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#145A32';
    ctx.lineWidth = 1;
    ctx.stroke();
    // Motion lines
    ctx.strokeStyle = 'rgba(39,174,96,0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(w * px, h * py);
    ctx.lineTo(sx, h * 0.25);
    ctx.stroke();
  });

  // Rhizoid base
  ctx.strokeStyle = '#A04000';
  ctx.lineWidth = 3;
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(sx + i * w * 0.02, h * 0.94);
    ctx.bezierCurveTo(sx + i * w * 0.04, h * 0.96, sx + i * w * 0.06, h * 0.98, sx + i * w * 0.08, h * 0.99);
    ctx.stroke();
  }

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Sporangium', w * 0.05, h * 0.06);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Sporangium wall', w * 0.73, h * 0.12);
  ctx.fillStyle = '#D7BDE2';
  ctx.fillText('Columella', w * 0.73, h * 0.18);
  ctx.fillStyle = '#27AE60';
  ctx.fillText('Sporangiospores', w * 0.73, h * 0.24);
  ctx.fillStyle = '#A04000';
  ctx.fillText('Rhizoid', w * 0.73, h * 0.3);
}

static drawRhizoid(ctx, color, w, h) {
  ctx.fillStyle = '#F5F0E8';
  ctx.fillRect(0, 0, w, h);

  // Substrate (agar/bread)
  const subY = h * 0.45;
  ctx.fillStyle = '#D5B896';
  ctx.fillRect(0, subY, w, h - subY);
  ctx.strokeStyle = '#A0785A';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, subY);
  ctx.lineTo(w, subY);
  ctx.stroke();

  // Substrate texture
  ctx.fillStyle = 'rgba(160,120,90,0.2)';
  for (let i = 0; i < 30; i++) {
    const rx = Math.random() * w;
    const ry = subY + Math.random() * (h - subY);
    ctx.beginPath();
    ctx.arc(rx, ry, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }

  // Main stolon (horizontal hypha above substrate)
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 5;
  ctx.fillStyle = '#D7BDE2';
  ctx.beginPath();
  ctx.moveTo(w * 0.05, subY - h * 0.02);
  ctx.lineTo(w * 0.95, subY - h * 0.02);
  ctx.stroke();

  // Sporangiophores arising from stolon
  [0.25, 0.5, 0.75].forEach(px => {
    ctx.strokeStyle = '#8E44AD';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * px, subY - h * 0.02);
    ctx.lineTo(w * px, h * 0.08);
    ctx.stroke();
    // Mini sporangium
    ctx.fillStyle = '#8E44AD';
    ctx.beginPath();
    ctx.arc(w * px, h * 0.06, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
  });

  // Rhizoid branches descending into substrate
  const rhizoidColors = ['#A04000', '#873600', '#7B241C', '#6E2F1A'];
  const rhizoidBases = [0.25, 0.5, 0.75];
  rhizoidBases.forEach((px, ri) => {
    // Main rhizoid trunk
    const fractalBranch = (bx, by, angle, length, depth) => {
      if (depth === 0 || length < h * 0.015) return;
      const ex = bx + Math.cos(angle) * length;
      const ey = by + Math.sin(angle) * length;
      ctx.strokeStyle = rhizoidColors[Math.min(depth - 1, 3)];
      ctx.lineWidth = Math.max(depth * 1.5, 0.5);
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(ex, ey);
      ctx.stroke();
      // Branch
      fractalBranch(ex, ey, angle - 0.4, length * 0.65, depth - 1);
      fractalBranch(ex, ey, angle + 0.3, length * 0.6, depth - 1);
      fractalBranch(ex, ey, angle + 0.05, length * 0.7, depth - 1);
    };
    fractalBranch(w * px, subY, Math.PI / 2, h * 0.12, 4);
  });

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Rhizoid Structure', w * 0.05, h * 0.04);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Stolon', w * 0.73, subY - h * 0.05);
  ctx.fillStyle = '#8E44AD';
  ctx.fillText('Sporangiophore', w * 0.58, h * 0.12);
  ctx.fillStyle = '#A04000';
  ctx.fillText('Rhizoids', w * 0.73, subY + h * 0.12);
  ctx.fillStyle = '#D5B896';
  ctx.fillText('Substrate', w * 0.73, subY + h * 0.25);
}

static drawHaustoria(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  // Host plant cell
  const hcx = w * 0.5;
  const hcy = h * 0.55;
  const hcw = w * 0.38;
  const hch = h * 0.32;

  ctx.fillStyle = '#E8F8E8';
  ctx.beginPath();
  ctx.roundRect ? ctx.roundRect(hcx - hcw, hcy - hch, hcw * 2, hch * 2, w * 0.04)
    : ctx.rect(hcx - hcw, hcy - hch, hcw * 2, hch * 2);
  ctx.fill();

  // Host cell wall
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 8;
  ctx.stroke();

  // Host membrane (inside wall)
  ctx.strokeStyle = '#1E8449';
  ctx.lineWidth = 3;
  ctx.setLineDash([5, 2]);
  ctx.beginPath();
  ctx.roundRect ? ctx.roundRect(hcx - hcw + 8, hcy - hch + 8, hcw * 2 - 16, hch * 2 - 16, w * 0.03)
    : ctx.rect(hcx - hcw + 8, hcy - hch + 8, hcw * 2 - 16, hch * 2 - 16);
  ctx.stroke();
  ctx.setLineDash([]);

  // Extrahaustorial membrane (EHM) - host-derived membrane around haustorium
  ctx.fillStyle = 'rgba(200,235,200,0.7)';
  ctx.strokeStyle = '#58D68D';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(hcx, hcy - h * 0.04, w * 0.16, h * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Haustorial body
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.ellipse(hcx, hcy - h * 0.04, w * 0.12, h * 0.15, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Haustorial neck (penetration peg through cell wall)
  ctx.fillStyle = '#C0392B';
  ctx.fillRect(hcx - w * 0.02, hcy - hch - h * 0.01, w * 0.04, h * 0.1);
  ctx.strokeStyle = '#922B21';
  ctx.lineWidth = 2;
  ctx.strokeRect(hcx - w * 0.02, hcy - hch - h * 0.01, w * 0.04, h * 0.1);

  // Collar / neckband
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.ellipse(hcx, hcy - hch + h * 0.04, w * 0.045, h * 0.022, 0, 0, Math.PI * 2);
  ctx.fill();

  // Fungal hyphae outside host cell
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 5;
  ctx.fillStyle = '#D7BDE2';
  // Spreading hypha on cell surface
  ctx.beginPath();
  ctx.moveTo(w * 0.08, hcy - hch - h * 0.05);
  ctx.bezierCurveTo(w * 0.2, hcy - hch - h * 0.08, w * 0.35, hcy - hch - h * 0.06, hcx, hcy - hch - h * 0.01);
  ctx.bezierCurveTo(w * 0.65, hcy - hch + h * 0.04, w * 0.78, hcy - hch - h * 0.06, w * 0.92, hcy - hch - h * 0.05);
  ctx.stroke();

  // Nutrient flow arrows (from host to haustorium)
  const arrowPositions = [[-0.08, 0.02], [0.08, 0.02], [0, 0.06], [-0.06, -0.06], [0.06, -0.06]];
  arrowPositions.forEach(([dx, dy]) => {
    const ax = hcx + w * dx;
    const ay = hcy + h * dy + h * 0.05;
    const ex = hcx + w * dx * 0.4;
    const ey = hcy - h * 0.04 + h * dy * 0.4;
    ctx.strokeStyle = 'rgba(39,174,96,0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(ex, ey);
    ctx.stroke();
    // Arrowhead
    const angle = Math.atan2(ey - ay, ex - ax);
    ctx.fillStyle = 'rgba(39,174,96,0.5)';
    ctx.beginPath();
    ctx.moveTo(ex, ey);
    ctx.lineTo(ex - w * 0.02 * Math.cos(angle - 0.4), ey - h * 0.02 * Math.sin(angle - 0.4));
    ctx.lineTo(ex - w * 0.02 * Math.cos(angle + 0.4), ey - h * 0.02 * Math.sin(angle + 0.4));
    ctx.closePath();
    ctx.fill();
  });

  // Host nucleus
  ctx.fillStyle = '#F9E79F';
  ctx.beginPath();
  ctx.ellipse(hcx + w * 0.2, hcy + h * 0.1, w * 0.07, h * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D4AC0D';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Haustorial Feeding Structure', w * 0.05, h * 0.06);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('Haustorium', w * 0.04, h * 0.87);
  ctx.fillStyle = '#58D68D';
  ctx.fillText('Extrahaustorial membrane', w * 0.04, h * 0.91);
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Collar/neckband', w * 0.04, h * 0.95);
  ctx.fillStyle = '#27AE60';
  ctx.fillText('Host cell wall', w * 0.55, h * 0.87);
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Fungal hypha', w * 0.55, h * 0.91);
}

static drawClampConnection(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  // Main hypha (dikaryotic - two nuclei per cell)
  const hW = w * 0.12;
  const hY1 = h * 0.35;
  const hY2 = h * 0.65;

  // Draw hypha tube
  ctx.fillStyle = '#FDEBD0';
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 4;
  ctx.fillRect(w * 0.15, hY1, w * 0.7, hY2 - hY1);
  ctx.strokeRect(w * 0.15, hY1, w * 0.7, hY2 - hY1);

  // Septum in middle
  const sepX = w * 0.52;
  ctx.fillStyle = '#884EA0';
  ctx.fillRect(sepX - w * 0.015, hY1, w * 0.03, hY2 - hY1);
  ctx.strokeStyle = '#6C3483';
  ctx.lineWidth = 1;
  ctx.strokeRect(sepX - w * 0.015, hY1, w * 0.03, hY2 - hY1);

  // Clamp bypass tube
  ctx.fillStyle = '#F39C12';
  ctx.strokeStyle = '#D35400';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(sepX, h * 0.5, w * 0.12, -Math.PI * 0.9, -Math.PI * 0.1);
  ctx.stroke();
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(sepX, h * 0.5, w * 0.12, -Math.PI * 0.9, -Math.PI * 0.1);
  ctx.fill();

  // Clamp tube filled
  ctx.fillStyle = '#FDEBD0';
  ctx.strokeStyle = '#D35400';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(sepX, h * 0.5, w * 0.09, -Math.PI * 0.85, -Math.PI * 0.15);
  ctx.stroke();

  // Nuclei - dikaryon (2 per compartment, different colors)
  const nucleiPairs = [
    // Left compartment
    { x: w * 0.3, y: h * 0.45, col1: '#2980B9', col2: '#E74C3C' },
    // Right compartment
    { x: w * 0.7, y: h * 0.45, col1: '#2980B9', col2: '#E74C3C' },
  ];

  nucleiPairs.forEach(({ x, y, col1, col2 }) => {
    // Nucleus 1
    ctx.fillStyle = col1;
    ctx.beginPath();
    ctx.ellipse(x - w * 0.05, y + h * 0.04, w * 0.05, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // Nucleus 2
    ctx.fillStyle = col2;
    ctx.beginPath();
    ctx.ellipse(x + w * 0.04, y + h * 0.04, w * 0.05, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#922B21';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // Nucleus in clamp
  ctx.fillStyle = '#2980B9';
  ctx.beginPath();
  ctx.arc(sepX - w * 0.06, h * 0.39, w * 0.03, 0, Math.PI * 2);
  ctx.fill();

  // Division arrows showing mitosis
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  [[w * 0.28, h * 0.42], [w * 0.68, h * 0.42]].forEach(([ax, ay]) => {
    ctx.beginPath();
    ctx.moveTo(ax - w * 0.04, ay);
    ctx.lineTo(ax + w * 0.04, ay);
    ctx.stroke();
    // Arrow head
    ctx.beginPath();
    ctx.moveTo(ax + w * 0.04, ay);
    ctx.lineTo(ax + w * 0.01, ay - h * 0.015);
    ctx.lineTo(ax + w * 0.01, ay + h * 0.015);
    ctx.closePath();
    ctx.fill();
  });

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Clamp Connection', w * 0.05, h * 0.08);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Clamp bypass', w * 0.73, h * 0.45);
  ctx.fillStyle = '#2980B9';
  ctx.fillText('Nucleus A', w * 0.05, h * 0.88);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('Nucleus B', w * 0.05, h * 0.92);
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Dikaryotic hypha', w * 0.5, h * 0.88);
}

static drawAscus(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  // Paraphyses (sterile filaments)
  const parasCount = 6;
  for (let i = 0; i < parasCount; i++) {
    const px = w * (0.1 + i * 0.14);
    if (i === 2 || i === 3) continue; // leave gap for ascus
    ctx.strokeStyle = '#A569BD';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(px, h * 0.85);
    ctx.bezierCurveTo(px + w * 0.01, h * 0.6, px - w * 0.01, h * 0.3, px, h * 0.1);
    ctx.stroke();
    ctx.fillStyle = '#A569BD';
    ctx.beginPath();
    ctx.arc(px, h * 0.09, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }

  // Ascus body
  const acx = w * 0.5;
  const acy = h * 0.48;
  const aw = w * 0.1;
  const ah = h * 0.38;

  ctx.fillStyle = '#FDEBD0';
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(acx, acy, aw, ah, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Operculum (apical pore/lid)
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(acx, acy - ah + h * 0.03, aw * 0.7, Math.PI, 0);
  ctx.fill();
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.fillText('Operculum', acx + aw + w * 0.02, acy - ah + h * 0.03);

  // 8 ascospores arranged in ascus
  const sporePositions = [];
  for (let i = 0; i < 8; i++) {
    const t = (i / 7.5) - 0.1;
    sporePositions.push([acx + Math.sin(i * 0.3) * aw * 0.5, acy - ah * 0.7 + i * ah * 0.18]);
  }
  sporePositions.forEach(([sx, sy], i) => {
    ctx.fillStyle = i % 2 === 0 ? '#2980B9' : '#27AE60';
    ctx.beginPath();
    ctx.ellipse(sx, sy, aw * 0.45, h * 0.065, Math.sin(i * 0.5) * 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Ascospores being discharged
  const discharged = [[0.3, 0.05], [0.4, 0.02], [0.6, 0.03], [0.7, 0.06], [0.25, 0.09]];
  discharged.forEach(([px, py]) => {
    ctx.fillStyle = '#2980B9';
    ctx.beginPath();
    ctx.ellipse(w * px, h * py, aw * 0.4, h * 0.05, -0.3, 0, Math.PI * 2);
    ctx.fill();
    // Motion trail
    ctx.strokeStyle = 'rgba(41,128,185,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(w * px, h * py);
    ctx.lineTo(acx, acy - ah);
    ctx.stroke();
  });

  // Base / ascogenous hyphae
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(acx, acy + ah);
  ctx.bezierCurveTo(acx - w * 0.08, h * 0.92, acx + w * 0.08, h * 0.95, acx, h * 0.97);
  ctx.stroke();

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Ascus with Ascospores', w * 0.05, h * 0.06);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#2980B9';
  ctx.fillText('Ascospores (8)', w * 0.73, h * 0.45);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('Operculum', w * 0.73, h * 0.51);
  ctx.fillStyle = '#A569BD';
  ctx.fillText('Paraphyses', w * 0.73, h * 0.57);
}

static drawBasidium(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  // Supporting hyphae
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.45, h * 0.95);
  ctx.bezierCurveTo(w * 0.43, h * 0.82, w * 0.47, h * 0.78, w * 0.5, h * 0.72);
  ctx.stroke();

  // Basidium body (club-shaped)
  ctx.fillStyle = '#F5CBA7';
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.38, h * 0.7);
  ctx.bezierCurveTo(w * 0.3, h * 0.6, w * 0.3, h * 0.35, w * 0.5, h * 0.28);
  ctx.bezierCurveTo(w * 0.7, h * 0.35, w * 0.7, h * 0.6, w * 0.62, h * 0.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Sterigmata (4 prongs at apex)
  const sterigmataPositions = [
    [-0.18, -0.06], [-0.06, -0.1], [0.06, -0.1], [0.18, -0.06]
  ];
  const basidiosporeColors = ['#E74C3C', '#2980B9', '#27AE60', '#F39C12'];
  sterigmataPositions.forEach(([dx, dy], i) => {
    const sx = w * (0.5 + dx);
    const sy = h * (0.28 + dy);
    const tipX = w * (0.5 + dx * 1.5);
    const tipY = h * (0.28 + dy * 2.2);

    // Sterigma
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.bezierCurveTo(sx + w * dx * 0.3, sy + h * dy * 0.8, tipX - w * dx * 0.1, tipY + h * 0.02, tipX, tipY);
    ctx.stroke();

    // Basidiospore at tip
    ctx.fillStyle = basidiosporeColors[i];
    ctx.beginPath();
    ctx.ellipse(tipX, tipY - h * 0.04, w * 0.05, h * 0.06, dx * 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Hilar appendix (attachment scar)
    ctx.fillStyle = '#2C3E50';
    ctx.beginPath();
    ctx.arc(tipX, tipY, w * 0.008, 0, Math.PI * 2);
    ctx.fill();
  });

  // Nuclei inside basidium (after meiosis - 4)
  const nucleiY = [h * 0.38, h * 0.46, h * 0.54, h * 0.62];
  const nucleiCols = ['#E74C3C', '#2980B9', '#27AE60', '#F39C12'];
  nucleiY.forEach((ny, i) => {
    ctx.fillStyle = nucleiCols[i];
    ctx.beginPath();
    ctx.ellipse(w * 0.5 + (i % 2 === 0 ? -w * 0.06 : w * 0.06), ny, w * 0.04, h * 0.04, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Clamp connection at base
  ctx.fillStyle = '#F39C12';
  ctx.strokeStyle = '#D35400';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(w * 0.42, h * 0.72, w * 0.04, Math.PI * 1.1, Math.PI * 2.0);
  ctx.stroke();

  // Discharged spores floating away
  [[0.15, 0.05], [0.78, 0.08], [0.88, 0.2], [0.1, 0.18]].forEach(([px, py], i) => {
    ctx.fillStyle = basidiosporeColors[i % 4];
    ctx.beginPath();
    ctx.ellipse(w * px, h * py, w * 0.04, h * 0.05, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Basidium & Basidiospores', w * 0.05, h * 0.06);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Basidium', w * 0.73, h * 0.5);
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Sterigmata', w * 0.73, h * 0.56);
  ctx.font = `${w * 0.024}px Arial`;
  basidiosporeColors.forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.fillText(`Spore ${i + 1}`, w * (0.04 + i * 0.24), h * 0.88);
  });
}
PROTISTS MISSING PARTS:
static drawContractileVacuole(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const cy = h * 0.5;
  const cellR = w * 0.38;

  // Cell outline
  ctx.fillStyle = '#EAF2F8';
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(cx, cy, cellR, cellR * 0.85, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Contractile vacuole (CV) - large, central
  const cvPhase = 'diastole'; // show filled state
  ctx.fillStyle = 'rgba(133,195,232,0.7)';
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(cx + w * 0.08, cy - h * 0.12, w * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // CV pore (fusion site with membrane)
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(cx + w * 0.18, cy - h * 0.17, w * 0.018, 0, Math.PI * 2);
  ctx.fill();

  // Radiating canals (collecting from cytoplasm)
  const canalCount = 8;
  for (let i = 0; i < canalCount; i++) {
    const angle = (i / canalCount) * Math.PI * 2;
    const innerR = w * 0.1;
    const outerR = w * 0.2;
    const cvX = cx + w * 0.08;
    const cvY = cy - h * 0.12;

    ctx.strokeStyle = '#2E86C1';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cvX + Math.cos(angle) * innerR, cvY + Math.sin(angle) * innerR);
    ctx.lineTo(cvX + Math.cos(angle) * outerR, cvY + Math.sin(angle) * outerR);
    ctx.stroke();

    // Ampullae (swellings at canal tips)
    ctx.fillStyle = '#AED6F1';
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cvX + Math.cos(angle) * outerR, cvY + Math.sin(angle) * outerR, w * 0.022, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Spongiome (tubular network around CV)
  ctx.strokeStyle = 'rgba(46,134,193,0.4)';
  ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.arc(cx + w * 0.08, cy - h * 0.12, w * 0.14, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Second CV (many protists have 2)
  ctx.fillStyle = 'rgba(133,195,232,0.5)';
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx - w * 0.1, cy + h * 0.15, w * 0.065, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Small radiating canals for second CV
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    ctx.strokeStyle = '#2E86C1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.1 + Math.cos(angle) * w * 0.065, cy + h * 0.15 + Math.sin(angle) * w * 0.065);
    ctx.lineTo(cx - w * 0.1 + Math.cos(angle) * w * 0.13, cy + h * 0.15 + Math.sin(angle) * w * 0.13);
    ctx.stroke();
  }

  // Nucleus
  ctx.fillStyle = '#F9E79F';
  ctx.strokeStyle = '#D4AC0D';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.08, cy - h * 0.05, w * 0.1, h * 0.09, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Expulsion arrow
  ctx.fillStyle = '#E74C3C';
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.2, cy - h * 0.2);
  ctx.lineTo(cx + w * 0.3, cy - h * 0.28);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.3, cy - h * 0.28);
  ctx.lineTo(cx + w * 0.25, cy - h * 0.27);
  ctx.lineTo(cx + w * 0.29, cy - h * 0.23);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.fillText('H₂O expelled', cx + w * 0.28, cy - h * 0.3);

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Contractile Vacuole System', w * 0.05, h * 0.07);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#2980B9';
  ctx.fillText('CV (diastole)', w * 0.04, h * 0.88);
  ctx.fillStyle = '#AED6F1';
  ctx.fillText('Ampullae', w * 0.04, h * 0.92);
  ctx.fillStyle = '#2E86C1';
  ctx.fillText('Radiating canals', w * 0.04, h * 0.96];
}

static drawTrichocyst(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  // Pellicle surface
  const pellY = h * 0.35;
  ctx.fillStyle = '#AED6F1';
  ctx.fillRect(0, 0, w, pellY);
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, pellY);
  ctx.lineTo(w, pellY);
  ctx.stroke();

  // Outer alveolar membrane
  ctx.fillStyle = 'rgba(174,214,241,0.5)';
  ctx.strokeStyle = '#2E86C1';
  ctx.lineWidth = 2;
  ctx.fillRect(0, pellY, w, h * 0.04);
  ctx.beginPath();
  ctx.moveTo(0, pellY + h * 0.04);
  ctx.lineTo(w, pellY + h * 0.04);
  ctx.stroke();

  // Cytoplasm region
  ctx.fillStyle = '#FDFEFE';
  ctx.fillRect(0, pellY + h * 0.04, w, h - pellY - h * 0.04);

  // Undischarged trichocysts (stored in rows)
  const trichPositions = [0.15, 0.3, 0.5, 0.7, 0.85];
  trichPositions.forEach((px, i) => {
    const tx = w * px;
    const ty = pellY + h * 0.06;
    const tH = h * 0.18;
    const tW = w * 0.04;

    // Trichocyst body (elongated, paracrystalline)
    ctx.fillStyle = '#D7BDE2';
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(tx - tW / 2, ty, tW, tH, tW * 0.3)
      : ctx.rect(tx - tW / 2, ty, tW, tH);
    ctx.fill();
    ctx.stroke();

    // Internal striations (paracrystalline lattice)
    ctx.strokeStyle = '#A569BD';
    ctx.lineWidth = 1;
    for (let s = 0; s < 6; s++) {
      ctx.beginPath();
      ctx.moveTo(tx - tW / 2, ty + s * tH / 6);
      ctx.lineTo(tx + tW / 2, ty + s * tH / 6);
      ctx.stroke();
    }

    // Trichocyst tip
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    ctx.lineTo(tx - tW * 0.6, ty + tH * 0.15);
    ctx.lineTo(tx + tW * 0.6, ty + tH * 0.15);
    ctx.closePath();
    ctx.fill();
  });

  // Discharged trichocyst - extended filament (one example)
  const dischX = w * 0.5;
  // Long discharged shaft
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(dischX, pellY - h * 0.02);
  ctx.lineTo(dischX, h * 0.04);
  ctx.stroke();

  // Barbed tip
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.moveTo(dischX, h * 0.02);
  ctx.lineTo(dischX - w * 0.02, h * 0.05);
  ctx.lineTo(dischX + w * 0.02, h * 0.05);
  ctx.closePath();
  ctx.fill();

  // Cross-striations on discharged trichocyst
  ctx.strokeStyle = '#A569BD';
  ctx.lineWidth = 1;
  for (let s = 0; s < 8; s++) {
    const lineY = h * 0.04 + s * (pellY - h * 0.06) / 8;
    ctx.beginPath();
    ctx.moveTo(dischX - w * 0.018, lineY);
    ctx.lineTo(dischX + w * 0.018, lineY);
    ctx.stroke();
  }

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Trichocysts (Paramecium)', w * 0.05, h * 0.07);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Undischarged', w * 0.04, h * 0.87);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('Discharge tip', w * 0.04, h * 0.92);
  ctx.fillStyle = '#1A5276';
  ctx.fillText('Pellicle', w * 0.04, h * 0.97);
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Discharged trichocyst →', w * 0.5, h * 0.15);
}

static drawAxopod(ctx, color, w, h) {
  ctx.fillStyle = '#0D1B2A';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const cy = h * 0.55;
  const cellR = w * 0.14;

  // Cell body (heliozoan)
  ctx.fillStyle = '#2C3E50';
  ctx.beginPath();
  ctx.arc(cx, cy, cellR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#AED6F1';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Nucleus
  ctx.fillStyle = '#F9E79F';
  ctx.beginPath();
  ctx.arc(cx, cy, cellR * 0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D4AC0D';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Axopods radiating outward
  const axopodCount = 16;
  for (let i = 0; i < axopodCount; i++) {
    const angle = (i / axopodCount) * Math.PI * 2;
    const axLen = w * (0.2 + Math.random() * 0.2);

    const axEndX = cx + Math.cos(angle) * (cellR + axLen);
    const axEndY = cy + Math.sin(angle) * (cellR + axLen);
    const axStartX = cx + Math.cos(angle) * cellR;
    const axStartY = cy + Math.sin(angle) * cellR;

    // Outer membrane tube
    ctx.strokeStyle = 'rgba(174,214,241,0.4)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(axStartX, axStartY);
    ctx.lineTo(axEndX, axEndY);
    ctx.stroke();

    // Axoneme (microtubule bundle - inner core)
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(axStartX, axStartY);
    ctx.lineTo(axEndX, axEndY);
    ctx.stroke();

    // Microtubule cross-sectional dots along shaft
    const steps = 5;
    for (let s = 1; s < steps; s++) {
      const t = s / steps;
      const mx = axStartX + (axEndX - axStartX) * t;
      const my = axStartY + (axEndY - axStartY) * t;
      ctx.fillStyle = '#F39C12';
      ctx.beginPath();
      ctx.arc(mx, my, w * 0.008, 0, Math.PI * 2);
      ctx.fill();
    }

    // Tip
    ctx.fillStyle = '#AED6F1';
    ctx.beginPath();
    ctx.arc(axEndX, axEndY, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  }

  // Prey particle being captured
  ctx.fillStyle = '#E74C3C';
  const preyX = cx + w * 0.35;
  const preyY = cy - h * 0.25;
  ctx.beginPath();
  ctx.arc(preyX, preyY, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#922B21';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Axopod cross-section inset
  const insetX = w * 0.15;
  const insetY = h * 0.15;
  const insetR = w * 0.06;
  ctx.fillStyle = 'rgba(174,214,241,0.2)';
  ctx.strokeStyle = '#AED6F1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(insetX, insetY, insetR, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // 12 microtubules in conus pattern
  const mtCount = 12;
  for (let m = 0; m < mtCount; m++) {
    const ma = (m / mtCount) * Math.PI * 2;
    const mr = insetR * 0.6;
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(insetX + Math.cos(ma) * mr, insetY + Math.sin(ma) * mr, w * 0.01, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(insetX, insetY, w * 0.01, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#AED6F1';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.fillText('Cross-section', insetX - w * 0.07, insetY + insetR + h * 0.03);

  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Axopodium (Heliozoa)', w * 0.05, h * 0.06);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('Axoneme (microtubules)', w * 0.55, h * 0.88];
  ctx.fillStyle = '#AED6F1';
  ctx.fillText('Axopod membrane', w * 0.55, h * 0.92);
  ctx.fillStyle = '#F39C12';
  ctx.fillText('MT crosslinks', w * 0.55, h * 0.96);
}

static drawFrustule(ctx, color, w, h) {
  ctx.fillStyle = '#1A1A2E';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const cy = h * 0.5;

  // Girdle view (side view) on left
  const gvCx = w * 0.28;
  const gvCy = cy;
  const eW = w * 0.18;
  const eH = h * 0.28;

  // Hypotheca (lower valve)
  ctx.fillStyle = '#5DADE2';
  ctx.beginPath();
  ctx.ellipse(gvCx, gvCy + eH * 0.15, eW, eH * 0.55, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Epitheca (upper valve)
  ctx.fillStyle = '#AED6F1';
  ctx.beginPath();
  ctx.ellipse(gvCx, gvCy - eH * 0.15, eW, eH * 0.55, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Girdle bands (cingulum)
  ctx.fillStyle = '#F39C12';
  ctx.fillRect(gvCx - eW, gvCy - h * 0.03, eW * 2, h * 0.06);
  ctx.strokeStyle = '#D35400';
  ctx.lineWidth = 2;
  ctx.strokeRect(gvCx - eW, gvCy - h * 0.03, eW * 2, h * 0.06);

  // Pore striae on side
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 1;
  for (let i = 0; i < 12; i++) {
    const y = gvCy - eH * 0.45 + i * eH * 0.09;
    ctx.beginPath();
    ctx.moveTo(gvCx - eW * 0.8, y);
    ctx.lineTo(gvCx + eW * 0.8, y);
    ctx.stroke();
  }

  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillText('Girdle view', gvCx - w * 0.09, gvCy + eH + h * 0.03);

  // Valve view (top view) on right
  const vvCx = w * 0.72;
  const vvR = w * 0.2;

  // Outer edge
  ctx.fillStyle = '#2E86C1';
  ctx.beginPath();
  ctx.ellipse(vvCx, cy, vvR, vvR * 0.7, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Raphe (central slit)
  ctx.strokeStyle = '#FDFEFE';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(vvCx, cy - vvR * 0.55);
  ctx.lineTo(vvCx, cy + vvR * 0.55);
  ctx.stroke();
  // Raphe ends (nodules)
  ctx.fillStyle = '#FDFEFE';
  ctx.beginPath();
  ctx.arc(vvCx, cy - vvR * 0.55, w * 0.015, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(vvCx, cy + vvR * 0.55, w * 0.015, 0, Math.PI * 2);
  ctx.fill();
  // Central nodule
  ctx.beginPath();
  ctx.arc(vvCx, cy, w * 0.02, 0, Math.PI * 2);
  ctx.fill();

  // Stria pattern (parallel rows of pores)
  for (let side = -1; side <= 1; side += 2) {
    for (let row = 0; row < 8; row++) {
      const rowX = vvCx + side * (w * 0.025 + row * w * 0.022);
      const rowLen = Math.sqrt(Math.max(0, 1 - (rowX - vvCx) ** 2 / vvR ** 2)) * vvR * 0.65;
      // Stria line
      ctx.strokeStyle = 'rgba(255,255,255,0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(rowX, cy - rowLen);
      ctx.lineTo(rowX, cy + rowLen);
      ctx.stroke();
      // Pores along stria
      const poreCount = Math.floor(rowLen * 2 / (h * 0.04));
      for (let p = 0; p < poreCount; p++) {
        const py2 = cy - rowLen + p * (rowLen * 2 / poreCount);
        ctx.fillStyle = '#1A5276';
        ctx.beginPath();
        ctx.arc(rowX, py2, w * 0.006, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillText('Valve view', vvCx - w * 0.07, cy + vvR * 0.7 + h * 0.04);

  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Diatom Frustule', w * 0.05, h * 0.07);
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#AED6F1';
  ctx.fillText('Epitheca', w * 0.03, h * 0.88);
  ctx.fillStyle = '#5DADE2';
  ctx.fillText('Hypotheca', w * 0.03, h * 0.92);
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Cingulum', w * 0.03, h * 0.96);
  ctx.fillStyle = '#FDFEFE';
  ctx.fillText('Raphe', w * 0.55, h * 0.88);
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillText('Striae/pores', w * 0.55, h * 0.92);
}

static drawApicalComplex(ctx, color, w, h) {
  ctx.fillStyle = '#0D1117';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const tipY = h * 0.08;
  const baseY = h * 0.72;

  // Sporozoite cell outline
  ctx.fillStyle = '#1E3A5F';
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, tipY);
  ctx.bezierCurveTo(cx + w * 0.25, h * 0.2, cx + w * 0.22, h * 0.6, cx, baseY);
  ctx.bezierCurveTo(cx - w * 0.22, h * 0.6, cx - w * 0.25, h * 0.2, cx, tipY);
  ctx.fill();
  ctx.stroke();

  // Polar rings
  const polarRings = [
    { y: tipY + h * 0.06, r: w * 0.04, col: '#F39C12', label: 'Polar ring 1' },
    { y: tipY + h * 0.1, r: w * 0.06, col: '#E67E22', label: 'Polar ring 2' },
  ];
  polarRings.forEach(({ y, r, col, label }) => {
    ctx.strokeStyle = col;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(cx, y, r, r * 0.35, 0, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Conoid (truncated cone of microtubules)
  ctx.strokeStyle = '#F1C40F';
  ctx.lineWidth = 3;
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * w * 0.02, tipY + h * 0.06);
    ctx.lineTo(cx + Math.cos(angle) * w * 0.05, tipY + h * 0.1);
    ctx.stroke();
  }
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.fillStyle = '#F1C40F';
  ctx.fillText('Conoid', cx + w * 0.07, tipY + h * 0.08);

  // Micronemes (small vesicles, tip region)
  const micronemeY = tipY + h * 0.12;
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const mx = cx + Math.cos(angle) * w * 0.08;
    const my = micronemeY + Math.sin(angle) * h * 0.06;
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.ellipse(mx, my, w * 0.018, h * 0.012, angle, 0, Math.PI * 2);
    ctx.fill();
  }

  // Rhoptries (elongated secretory organelles)
  const rhoptryColor = ['#8E44AD', '#9B59B6'];
  [[-0.1, 0.28], [0.1, 0.28], [-0.05, 0.3], [0.05, 0.3]].forEach(([dx, relY], i) => {
    const rx = cx + w * dx;
    const ry = tipY + h * relY;
    ctx.fillStyle = rhoptryColor[i % 2];
    // Elongated tear-drop shape
    ctx.beginPath();
    ctx.moveTo(rx, tipY + h * 0.12);
    ctx.bezierCurveTo(rx - w * 0.03, ry - h * 0.04, rx - w * 0.04, ry, rx, ry + h * 0.08);
    ctx.bezierCurveTo(rx + w * 0.04, ry, rx + w * 0.03, ry - h * 0.04, rx, tipY + h * 0.12);
    ctx.fill();
    ctx.strokeStyle = '#6C3483';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // Dense granules (smaller, posterior)
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    const dgX = cx + Math.cos(angle) * w * 0.1;
    const dgY = h * 0.5 + Math.sin(angle) * h * 0.08;
    ctx.fillStyle = '#27AE60';
    ctx.beginPath();
    ctx.arc(dgX, dgY, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  }

  // Subpellicular microtubules
  for (let i = -1; i <= 1; i += 0.5) {
    const offset = i * w * 0.07;
    ctx.strokeStyle = 'rgba(241,196,15,0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx + offset * 0.3, tipY + h * 0.1);
    ctx.lineTo(cx + offset, baseY - h * 0.1);
    ctx.stroke();
  }

  // Nucleus
  ctx.fillStyle = '#F9E79F';
  ctx.beginPath();
  ctx.ellipse(cx, h * 0.62, w * 0.1, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D4AC0D';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Host cell membrane being penetrated
  ctx.strokeStyle = '#2ECC71';
  ctx.lineWidth = 4;
  ctx.setLineDash([8, 4]);
  ctx.beginPath();
  ctx.moveTo(w * 0.1, tipY + h * 0.02);
  ctx.lineTo(w * 0.9, tipY + h * 0.02);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.fillText('Apical Complex (Apicomplexa)', w * 0.04, h * 0.05);
  ctx.font = `${w * 0.025}px Arial`;
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Polar rings', w * 0.04, h * 0.8];
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('Micronemes', w * 0.04, h * 0.84);
  ctx.fillStyle = '#8E44AD';
  ctx.fillText('Rhoptries', w * 0.04, h * 0.88);
  ctx.fillStyle = '#27AE60';
  ctx.fillText('Dense granules', w * 0.04, h * 0.92);
  ctx.fillStyle = '#2ECC71';
  ctx.fillText('Host membrane', w * 0.55, h * 0.8);
}

static drawUndulipodium(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  // Cross-section view (left panel)
  const csCx = w * 0.25;
  const csCy = h * 0.35;
  const csR = w * 0.14;

  ctx.fillStyle = '#EAF2F8';
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(csCx, csCy, csR, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Outer membrane
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(csCx, csCy, csR * 0.9, 0, Math.PI * 2);
  ctx.stroke();

  // 9 outer doublets
  for (let i = 0; i < 9; i++) {
    const angle = (i / 9) * Math.PI * 2 - Math.PI / 2;
    const doubletR = csR * 0.65;
    const dx = csCx + Math.cos(angle) * doubletR;
    const dy = csCy + Math.sin(angle) * doubletR;

    // A tubule
    ctx.fillStyle = '#2980B9';
    ctx.beginPath();
    ctx.arc(dx, dy, csR * 0.12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // B tubule (crescent attached to A)
    const bAngle = angle + 0.35;
    const bDist = csR * 0.1;
    ctx.fillStyle = '#5DADE2';
    ctx.beginPath();
    ctx.arc(dx + Math.cos(bAngle) * bDist, dy + Math.sin(bAngle) * bDist, csR * 0.09, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Inner arm dynein
    const inArmAngle = angle + Math.PI;
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(dx + Math.cos(inArmAngle) * csR * 0.12, dy + Math.sin(inArmAngle) * csR * 0.12, csR * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // Outer arm dynein
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(dx + Math.cos(angle) * csR * 0.19, dy + Math.sin(angle) * csR * 0.19, csR * 0.04, 0, Math.PI * 2);
    ctx.fill();
  }

  // 2 central singlets (central pair)
  [[csCx - csR * 0.1, csCy], [csCx + csR * 0.1, csCy]].forEach(([cx2, cy2]) => {
    ctx.fillStyle = '#27AE60';
    ctx.beginPath();
    ctx.arc(cx2, cy2, csR * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1E8449';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // Central sheath
  ctx.strokeStyle = '#A9DFBF';
  ctx.lineWidth = 2;
  ctx.setLineDash([3, 2]);
  ctx.beginPath();
  ctx.ellipse(csCx, csCy, csR * 0.28, csR * 0.28, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Nexin links between doublets
  ctx.strokeStyle = 'rgba(150,100,200,0.5)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 9; i++) {
    const a1 = (i / 9) * Math.PI * 2 - Math.PI / 2;
    const a2 = ((i + 1) / 9) * Math.PI * 2 - Math.PI / 2;
    const doubletR = csR * 0.65;
    ctx.beginPath();
    ctx.moveTo(csCx + Math.cos(a1) * doubletR, csCy + Math.sin(a1) * doubletR);
    ctx.lineTo(csCx + Math.cos(a2) * doubletR, csCy + Math.sin(a2) * doubletR);
    ctx.stroke();
  }

  // Cross-section label
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillText('9+2 axoneme', csCx - w * 0.1, csCy + csR + h * 0.04);
  ctx.fillText('cross-section', csCx - w * 0.1, csCy + csR + h * 0.07);

  // Longitudinal view (right panel)
  const lvCx = w * 0.72;
  const lvTop = h * 0.06;
  const lvLen = h * 0.7;
  const lvW = w * 0.06;

  // Outer membrane
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 4;
  ctx.fillStyle = 'rgba(215,189,226,0.3)';
  ctx.beginPath();
  ctx.roundRect ? ctx.roundRect(lvCx - lvW, lvTop, lvW * 2, lvLen, lvW * 0.5)
    : ctx.rect(lvCx - lvW, lvTop, lvW * 2, lvLen);
  ctx.fill();
  ctx.stroke();

  // Central pair (vertical lines)
  [[lvCx - lvW * 0.2, '#27AE60'], [lvCx + lvW * 0.2, '#27AE60']].forEach(([lx, col]) => {
    ctx.strokeStyle = col;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(lx, lvTop + h * 0.02);
    ctx.lineTo(lx, lvTop + lvLen - h * 0.02);
    ctx.stroke();
  });

  // Outer doublets (simplified as dashed lines)
  for (let d = 0; d < 4; d++) {
    const offset = (d - 1.5) * lvW * 0.35;
    ctx.strokeStyle = '#2980B9';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(lvCx + offset, lvTop + h * 0.02);
    ctx.lineTo(lvCx + offset, lvTop + lvLen - h * 0.02);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Dynein arm "walking" visualization
  const armY = h * 0.3;
  for (let a = 0; a < 5; a++) {
    const ay = lvTop + h * 0.1 + a * h * 0.13;
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(lvCx - lvW * 0.55, ay);
    ctx.bezierCurveTo(lvCx - lvW * 0.3, ay - h * 0.03, lvCx - lvW * 0.1, ay + h * 0.03, lvCx + lvW * 0.1, ay);
    ctx.stroke();
    // Arrow
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.moveTo(lvCx + lvW * 0.1, ay);
    ctx.lineTo(lvCx - lvW * 0.05, ay - h * 0.02);
    ctx.lineTo(lvCx - lvW * 0.05, ay + h * 0.02);
    ctx.closePath();
    ctx.fill();
  }

  // Basal body at base
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.rect(lvCx - lvW, lvTop + lvLen, lvW * 2, h * 0.07);
  ctx.fill();
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.fillText('Basal body', lvCx - lvW * 0.8, lvTop + lvLen + h * 0.05);

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Undulipodium (9+2 Axoneme)', w * 0.05, h * 0.05);
  ctx.font = `${w * 0.026}px Arial`;
  ctx.fillStyle = '#2980B9';
  ctx.fillText('Outer doublets', w * 0.03, h * 0.88);
  ctx.fillStyle = '#27AE60';
  ctx.fillText('Central pair', w * 0.03, h * 0.92);
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Dynein arms', w * 0.03, h * 0.96);
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Outer membrane', w * 0.5, h * 0.88);
  ctx.fillStyle = 'rgba(150,100,200,0.9)';
  ctx.fillText('Nexin links', w * 0.5, h * 0.92);
}
