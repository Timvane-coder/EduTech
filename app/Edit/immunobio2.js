Here are all the missing organ/part drawing methods:
static drawMacrophage(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.18;

  // Irregular amoeboid body
  ctx.fillStyle = '#CD853F';
  ctx.beginPath();
  const points = 12;
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2;
    const vary = r * (0.8 + 0.35 * Math.sin(i * 2.3 + 1));
    const x = cx + Math.cos(angle) * vary;
    const y = cy + Math.sin(angle) * vary;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Nucleus (kidney-shaped)
  ctx.fillStyle = '#8B4513';
  ctx.beginPath();
  ctx.ellipse(cx - r * 0.1, cy, r * 0.35, r * 0.22, -0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#A0522D';
  ctx.beginPath();
  ctx.ellipse(cx + r * 0.05, cy, r * 0.15, r * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();

  // Pseudopods
  ctx.fillStyle = 'rgba(205, 133, 63, 0.6)';
  [[0.3, -0.7], [-0.75, 0.2], [0.6, 0.55]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.ellipse(cx + dx * r, cy + dy * r, r * 0.18, r * 0.1,
      Math.atan2(dy, dx), 0, Math.PI * 2);
    ctx.fill();
  });

  // Lysosomes
  ctx.fillStyle = '#FF6347';
  [[0.3, 0.2], [-0.2, 0.35], [0.1, -0.3], [-0.35, -0.1]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, r * 0.07, 0, Math.PI * 2);
    ctx.fill();
  });
}

static drawDendriticCell(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.15;

  // Cell body
  ctx.fillStyle = '#DA70D6';
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#9400D3';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Dendritic processes (long branching projections)
  ctx.strokeStyle = '#DA70D6';
  ctx.lineWidth = 3;
  const dendrites = 8;
  for (let i = 0; i < dendrites; i++) {
    const angle = (i / dendrites) * Math.PI * 2;
    const len = r * (1.8 + 0.5 * Math.sin(i * 1.7));
    const midX = cx + Math.cos(angle + 0.3) * len * 0.55;
    const midY = cy + Math.sin(angle + 0.3) * len * 0.55;
    const endX = cx + Math.cos(angle) * len;
    const endY = cy + Math.sin(angle) * len;

    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
    ctx.quadraticCurveTo(midX, midY, endX, endY);
    ctx.stroke();

    // Branch tips
    ctx.strokeStyle = '#FF69B4';
    ctx.lineWidth = 1.5;
    const branchAngle = angle + 0.6;
    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(endX + Math.cos(branchAngle) * r * 0.4,
               endY + Math.sin(branchAngle) * r * 0.4);
    ctx.stroke();
    ctx.strokeStyle = '#DA70D6';
    ctx.lineWidth = 3;
  }

  // Nucleus
  ctx.fillStyle = '#9400D3';
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.4, 0, Math.PI * 2);
  ctx.fill();

  // MHC molecules on surface (small dots)
  ctx.fillStyle = '#FFD700';
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 3, 0, Math.PI * 2);
    ctx.fill();
  }
}

static drawNaturalKillerCell(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.17;

  // Cell body — large granular lymphocyte
  ctx.fillStyle = '#2E8B57';
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#006400';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Eccentric nucleus
  ctx.fillStyle = '#004d00';
  ctx.beginPath();
  ctx.ellipse(cx - r * 0.2, cy - r * 0.1, r * 0.45, r * 0.38, -0.3, 0, Math.PI * 2);
  ctx.fill();

  // Cytotoxic granules
  ctx.fillStyle = '#90EE90';
  [[-0.1, 0.3], [0.35, 0.1], [0.25, 0.4], [0.4, -0.25], [-0.3, 0.2]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, r * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#006400';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Kill signal spikes
  ctx.strokeStyle = '#FF4500';
  ctx.lineWidth = 2;
  [0, 1.2, 2.4, 3.6, 4.8].forEach(angle => {
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
    ctx.lineTo(cx + Math.cos(angle) * r * 1.4, cy + Math.sin(angle) * r * 1.4);
    ctx.stroke();
  });
}

static drawMastCell(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.18;

  // Large cell body
  ctx.fillStyle = '#FF8C69';
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#CC4400';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Central lobed nucleus
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.3, 0, Math.PI * 2);
  ctx.fill();

  // Dense secretory granules (many, prominent)
  ctx.fillStyle = '#9400D3';
  const granulePositions = [
    [0.45, 0.1], [-0.45, 0.1], [0.2, 0.45], [-0.2, 0.45],
    [0.45, -0.2], [-0.45, -0.2], [0.1, -0.5], [-0.1, -0.5],
    [0.55, 0.35], [-0.55, 0.35], [0.3, -0.1], [-0.3, -0.1],
    [0.15, 0.25], [-0.15, 0.25]
  ];
  granulePositions.forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, r * 0.07, 0, Math.PI * 2);
    ctx.fill();
  });

  // Degranulation release particles
  ctx.fillStyle = 'rgba(148, 0, 211, 0.4)';
  [[1.3, 0.3], [1.2, -0.5], [-1.3, 0.4], [0.2, 1.3], [-0.3, -1.3]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r * 0.6, cy + dy * r * 0.6, r * 0.05, 0, Math.PI * 2);
    ctx.fill();
  });
}

static drawPlasmaCell(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.17;

  // Oval cell body
  ctx.fillStyle = '#4682B4';
  ctx.beginPath();
  ctx.ellipse(cx, cy, r, r * 1.25, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#00008B';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Clock-face / cartwheel nucleus (eccentric)
  const nx = cx - r * 0.25, ny = cy - r * 0.25;
  const nr = r * 0.38;
  ctx.fillStyle = '#00008B';
  ctx.beginPath();
  ctx.arc(nx, ny, nr, 0, Math.PI * 2);
  ctx.fill();
  // Chromatin spokes
  ctx.strokeStyle = '#ADD8E6';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(nx, ny);
    ctx.lineTo(nx + Math.cos(a) * nr, ny + Math.sin(a) * nr);
    ctx.stroke();
  }

  // Prominent rough ER (parallel lines in cytoplasm)
  ctx.strokeStyle = 'rgba(173, 216, 230, 0.7)';
  ctx.lineWidth = 1.5;
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(cx + r * 0.1, cy + i * r * 0.18);
    ctx.lineTo(cx + r * 0.75, cy + i * r * 0.18);
    ctx.stroke();
  }

  // Antibody molecules being secreted
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  [[1.15, -0.3], [1.2, 0.2], [1.1, 0.6]].forEach(([dx, dy]) => {
    const ax = cx + dx * r, ay = cy + dy * r;
    // Y shape
    ctx.beginPath();
    ctx.moveTo(ax, ay + 8);
    ctx.lineTo(ax, ay);
    ctx.lineTo(ax - 6, ay - 6);
    ctx.moveTo(ax, ay);
    ctx.lineTo(ax + 6, ay - 6);
    ctx.stroke();
  });
}

static drawHelperTCell(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.17;

  // Cell body
  ctx.fillStyle = '#FF6B35';
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#CC3300';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Nucleus
  ctx.fillStyle = '#CC3300';
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.42, 0, Math.PI * 2);
  ctx.fill();

  // CD4 surface markers
  ctx.fillStyle = '#FFD700';
  ctx.strokeStyle = '#B8860B';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const mx = cx + Math.cos(a) * r, my = cy + Math.sin(a) * r;
    ctx.beginPath();
    ctx.arc(mx, my, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Cytokine signals radiating out
  ctx.strokeStyle = 'rgba(255, 215, 0, 0.8)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.3;
    ctx.beginPath();
    ctx.setLineDash([3, 3]);
    ctx.moveTo(cx + Math.cos(a) * r * 1.1, cy + Math.sin(a) * r * 1.1);
    ctx.lineTo(cx + Math.cos(a) * r * 1.7, cy + Math.sin(a) * r * 1.7);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // CD4 label
  ctx.fillStyle = '#FFF';
  ctx.font = `bold ${Math.floor(r * 0.3)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CD4', cx, cy);
}

static drawCytotoxicTCell(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.17;

  // Cell body
  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#8B0000';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Nucleus
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.4, 0, Math.PI * 2);
  ctx.fill();

  // CD8 surface markers
  ctx.fillStyle = '#00CED1';
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Perforin/granzyme granules
  ctx.fillStyle = '#FF69B4';
  [[-0.3, 0.25], [0.3, 0.3], [0.1, -0.35], [-0.35, -0.15], [0.4, -0.1]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, r * 0.08, 0, Math.PI * 2);
    ctx.fill();
  });

  // Attack arrow toward edge
  ctx.strokeStyle = '#FF4500';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx + r * 0.5, cy);
  ctx.lineTo(cx + r * 1.4, cy);
  ctx.stroke();
  ctx.fillStyle = '#FF4500';
  ctx.beginPath();
  ctx.moveTo(cx + r * 1.4, cy);
  ctx.lineTo(cx + r * 1.15, cy - 6);
  ctx.lineTo(cx + r * 1.15, cy + 6);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#FFF';
  ctx.font = `bold ${Math.floor(r * 0.3)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CD8', cx, cy);
}

static drawRegulatoryTCell(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.17;

  // Cell body — muted green for suppression
  ctx.fillStyle = '#3CB371';
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#006400';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Nucleus
  ctx.fillStyle = '#006400';
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.42, 0, Math.PI * 2);
  ctx.fill();

  // FoxP3 marker (represented as square inside nucleus)
  ctx.fillStyle = '#90EE90';
  ctx.fillRect(cx - r * 0.15, cy - r * 0.15, r * 0.3, r * 0.3);

  // Suppression halos — dashed inhibitory rings
  ctx.strokeStyle = 'rgba(0, 100, 0, 0.5)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.arc(cx, cy, r * 1.4, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy, r * 1.8, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Inhibitory symbol (minus signs around border)
  ctx.strokeStyle = '#FF6347';
  ctx.lineWidth = 2.5;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const mx = cx + Math.cos(a) * r * 1.25;
    const my = cy + Math.sin(a) * r * 1.25;
    ctx.beginPath();
    ctx.moveTo(mx - 5, my);
    ctx.lineTo(mx + 5, my);
    ctx.stroke();
  }

  ctx.fillStyle = '#FFF';
  ctx.font = `bold ${Math.floor(r * 0.28)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Treg', cx, cy);
}

static drawBCell(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.17;

  // Cell body
  ctx.fillStyle = '#1E90FF';
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#00008B';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Nucleus
  ctx.fillStyle = '#00008B';
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.42, 0, Math.PI * 2);
  ctx.fill();

  // BCR (B cell receptors) — Y shapes on surface
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const bx = cx + Math.cos(a) * r;
    const by = cy + Math.sin(a) * r;
    const ox = Math.cos(a), oy = Math.sin(a);
    const px = -oy, py = ox; // perpendicular
    ctx.beginPath();
    ctx.moveTo(bx + ox * 10, by + oy * 10);
    ctx.lineTo(bx + ox * 4, by + oy * 4);
    ctx.lineTo(bx + (ox - px) * 8, by + (oy - py) * 8);
    ctx.moveTo(bx + ox * 4, by + oy * 4);
    ctx.lineTo(bx + (ox + px) * 8, by + (oy + py) * 8);
    ctx.stroke();
  }

  ctx.fillStyle = '#FFF';
  ctx.font = `bold ${Math.floor(r * 0.32)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('B', cx, cy);
}

static drawNeutrophilExtracellularTrap(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.35;

  // NET web fibers — chromatin strands
  ctx.strokeStyle = 'rgba(255, 165, 0, 0.7)';
  ctx.lineWidth = 2;
  const fiberCount = 14;
  for (let i = 0; i < fiberCount; i++) {
    const a1 = (i / fiberCount) * Math.PI * 2;
    const a2 = ((i + 3) / fiberCount) * Math.PI * 2;
    const x1 = cx + Math.cos(a1) * r * (0.5 + 0.5 * Math.random());
    const y1 = cy + Math.sin(a1) * r * (0.5 + 0.5 * Math.random());
    const x2 = cx + Math.cos(a2) * r * (0.4 + 0.6 * Math.random());
    const y2 = cy + Math.sin(a2) * r * (0.4 + 0.6 * Math.random());
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(cx + (Math.random() - 0.5) * r, cy + (Math.random() - 0.5) * r, x2, y2);
    ctx.stroke();
  }

  // Histone proteins along fibers (small dots)
  ctx.fillStyle = '#FF8C00';
  for (let i = 0; i < 20; i++) {
    const a = Math.random() * Math.PI * 2;
    const dist = r * (0.2 + 0.7 * Math.random());
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a) * dist, cy + Math.sin(a) * dist, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Trapped pathogens
  ctx.fillStyle = 'rgba(139, 0, 0, 0.75)';
  ctx.strokeStyle = '#8B0000';
  ctx.lineWidth = 1.5;
  [[0.4, 0.2], [-0.3, 0.5], [0.5, -0.4], [-0.5, -0.3], [0.1, 0.6]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Neutrophil nucleus remnant at center
  ctx.fillStyle = 'rgba(255, 140, 0, 0.5)';
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 2;
  ctx.stroke();
}

static drawComplementProtein(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.15;

  // C3 globular domain — two lobed structure
  ctx.fillStyle = '#00CED1';
  ctx.beginPath();
  ctx.arc(cx - r * 0.3, cy, r * 0.55, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx + r * 0.35, cy, r * 0.45, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#008B8B';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx - r * 0.3, cy, r * 0.55, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx + r * 0.35, cy, r * 0.45, 0, Math.PI * 2);
  ctx.stroke();

  // Thioester bond indicator
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx + r * 0.1, cy - r * 0.15);
  ctx.lineTo(cx + r * 0.1, cy + r * 0.15);
  ctx.stroke();

  // Cleavage site arrow
  ctx.strokeStyle = '#FF4500';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.3, cy - r * 0.85);
  ctx.lineTo(cx - r * 0.3, cy - r * 0.6);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#FF4500';
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.3, cy - r * 0.55);
  ctx.lineTo(cx - r * 0.45, cy - r * 0.75);
  ctx.lineTo(cx - r * 0.15, cy - r * 0.75);
  ctx.closePath();
  ctx.fill();

  // Label
  ctx.fillStyle = '#FFF';
  ctx.font = `bold ${Math.floor(r * 0.38)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C3', cx, cy);
}

static drawMHCMolecule(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.18;

  // Transmembrane region
  ctx.fillStyle = '#708090';
  ctx.fillRect(cx - r * 0.3, cy + r * 0.5, r * 0.6, r * 0.8);

  // Alpha helices forming peptide-binding groove
  ctx.fillStyle = '#4169E1';
  ctx.beginPath();
  ctx.ellipse(cx - r * 0.4, cy, r * 0.18, r * 0.55, 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#6495ED';
  ctx.beginPath();
  ctx.ellipse(cx + r * 0.4, cy, r * 0.18, r * 0.55, -0.15, 0, Math.PI * 2);
  ctx.fill();

  // Beta-sheet floor
  ctx.fillStyle = '#B0C4DE';
  ctx.beginPath();
  ctx.ellipse(cx, cy + r * 0.15, r * 0.55, r * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();

  // Peptide in groove
  ctx.strokeStyle = '#FF6347';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.4, cy - r * 0.05);
  ctx.bezierCurveTo(
    cx - r * 0.15, cy - r * 0.35,
    cx + r * 0.15, cy - r * 0.35,
    cx + r * 0.4, cy - r * 0.05
  );
  ctx.stroke();

  // Beta-2 microglobulin (MHC-I) or beta chain (MHC-II)
  ctx.fillStyle = '#9370DB';
  ctx.beginPath();
  ctx.arc(cx + r * 0.7, cy + r * 0.3, r * 0.22, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#6A0DAD';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = '#FFF';
  ctx.font = `bold ${Math.floor(r * 0.28)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('MHC', cx, cy + r * 0.15);
}

static drawTCellReceptor(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.2;

  // Membrane base
  ctx.fillStyle = '#A9A9A9';
  ctx.fillRect(cx - r * 1.1, cy + r * 0.6, r * 2.2, r * 0.35);

  // TCR alpha chain
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.3, cy + r * 0.6);
  ctx.bezierCurveTo(cx - r * 0.3, cy, cx - r * 0.5, cy - r * 0.3, cx - r * 0.35, cy - r * 0.8);
  ctx.stroke();

  // TCR beta chain
  ctx.strokeStyle = '#1E90FF';
  ctx.beginPath();
  ctx.moveTo(cx + r * 0.3, cy + r * 0.6);
  ctx.bezierCurveTo(cx + r * 0.3, cy, cx + r * 0.5, cy - r * 0.3, cx + r * 0.35, cy - r * 0.8);
  ctx.stroke();

  // Variable regions at top (antigen binding)
  ctx.fillStyle = '#FF8C00';
  ctx.beginPath();
  ctx.arc(cx - r * 0.35, cy - r * 0.8, r * 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#1E90FF';
  ctx.beginPath();
  ctx.arc(cx + r * 0.35, cy - r * 0.8, r * 0.2, 0, Math.PI * 2);
  ctx.fill();

  // CDR3 loop (binding groove)
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy - r * 0.9, r * 0.28, Math.PI, 0);
  ctx.stroke();

  // CD3 signaling complex
  ctx.fillStyle = '#9370DB';
  [[-0.6, 0.2], [0.6, 0.2], [-0.75, -0.1], [0.75, -0.1]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, r * 0.12, 0, Math.PI * 2);
    ctx.fill();
  });
}

static drawBCellReceptor(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.2;

  // Membrane
  ctx.fillStyle = '#A9A9A9';
  ctx.fillRect(cx - r * 1.1, cy + r * 0.7, r * 2.2, r * 0.35);

  // Fc region (stem of Y)
  ctx.strokeStyle = '#1E90FF';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx, cy + r * 0.7);
  ctx.lineTo(cx, cy + r * 0.1);
  ctx.stroke();

  // Hinge region
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, cy + r * 0.1);
  ctx.lineTo(cx - r * 0.5, cy - r * 0.4);
  ctx.moveTo(cx, cy + r * 0.1);
  ctx.lineTo(cx + r * 0.5, cy - r * 0.4);
  ctx.stroke();

  // Fab regions
  ctx.strokeStyle = '#00BFFF';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.5, cy - r * 0.4);
  ctx.lineTo(cx - r * 0.65, cy - r * 0.9);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + r * 0.5, cy - r * 0.4);
  ctx.lineTo(cx + r * 0.65, cy - r * 0.9);
  ctx.stroke();

  // Antigen binding sites
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(cx - r * 0.65, cy - r * 0.9, r * 0.13, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx + r * 0.65, cy - r * 0.9, r * 0.13, 0, Math.PI * 2);
  ctx.fill();

  // Igα/Igβ signaling
  ctx.fillStyle = '#9370DB';
  [[-0.3, 0.45], [0.3, 0.45]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, r * 0.12, 0, Math.PI * 2);
    ctx.fill();
  });
}

static drawCytokine(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.12;

  // Small signaling protein — four-helix bundle
  const helixColors = ['#FF6347', '#FF8C69', '#FFB6A3', '#FF4500'];
  const helixPositions = [
    [cx - r * 0.35, cy - r * 0.2],
    [cx + r * 0.35, cy - r * 0.2],
    [cx - r * 0.2, cy + r * 0.35],
    [cx + r * 0.2, cy + r * 0.35]
  ];

  helixPositions.forEach(([hx, hy], i) => {
    ctx.fillStyle = helixColors[i];
    ctx.beginPath();
    ctx.ellipse(hx, hy, r * 0.22, r * 0.45, i < 2 ? -0.3 : 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#CC2200';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // Connecting loops
  ctx.strokeStyle = '#CC4400';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.35, cy - r * 0.2);
  ctx.quadraticCurveTo(cx, cy - r * 0.8, cx + r * 0.35, cy - r * 0.2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + r * 0.35, cy - r * 0.2);
  ctx.quadraticCurveTo(cx + r * 0.8, cy, cx + r * 0.2, cy + r * 0.35);
  ctx.stroke();

  // Receptor binding site glow
  ctx.fillStyle = 'rgba(255, 215, 0, 0.35)';
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.6, 0, Math.PI * 2);
  ctx.fill();

  // Diffusion halos
  ctx.strokeStyle = 'rgba(255, 99, 71, 0.3)';
  ctx.lineWidth = 1;
  [1.8, 2.5, 3.2].forEach(scale => {
    ctx.beginPath();
    ctx.arc(cx, cy, r * scale, 0, Math.PI * 2);
    ctx.stroke();
  });
}

static drawFibrinClot(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.38;

  // Fibrin mesh — interlocking strands
  ctx.strokeStyle = 'rgba(210, 180, 140, 0.85)';
  ctx.lineWidth = 2.5;
  const strandCount = 12;
  for (let i = 0; i < strandCount; i++) {
    const a = (i / strandCount) * Math.PI;
    const x1 = cx - r + Math.cos(a) * r * 0.2;
    const y1 = cy - r * Math.sin(a) * 1.2;
    const x2 = cx + r - Math.cos(a) * 0.15 * r;
    const y2 = cy + r * Math.sin(a) * 1.2;
    const cpx = cx + (Math.random() - 0.5) * r * 0.8;
    const cpy = cy + (Math.random() - 0.5) * r * 0.8;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(cpx, cpy, x2, y2);
    ctx.stroke();
  }

  // Cross-links (factor XIII)
  ctx.strokeStyle = 'rgba(139, 90, 43, 0.7)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 18; i++) {
    const a1 = Math.random() * Math.PI * 2;
    const a2 = a1 + (Math.random() - 0.5) * 1.5;
    const d1 = r * (0.15 + Math.random() * 0.75);
    const d2 = r * (0.15 + Math.random() * 0.75);
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a1) * d1, cy + Math.sin(a1) * d1);
    ctx.lineTo(cx + Math.cos(a2) * d2, cy + Math.sin(a2) * d2);
    ctx.stroke();
  }

  // Trapped red blood cells
  ctx.fillStyle = 'rgba(178, 34, 34, 0.7)';
  [[0.3, 0.1], [-0.35, 0.25], [0.1, -0.4], [-0.15, -0.2], [0.45, -0.3]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.ellipse(cx + dx * r, cy + dy * r, r * 0.1, r * 0.07, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  });

  // Platelet aggregates
  ctx.fillStyle = 'rgba(255, 165, 0, 0.8)';
  [[-0.4, -0.35], [0.2, 0.45], [-0.1, 0.5]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, r * 0.08, 0, Math.PI * 2);
    ctx.fill();
  });
}

static drawLymphNode(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.3;

  // Bean/kidney shaped capsule
  ctx.fillStyle = '#F5DEB3';
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.3, cy - r);
  ctx.bezierCurveTo(cx + r * 0.8, cy - r * 1.1, cx + r * 1.1, cy, cx + r * 0.8, cy + r);
  ctx.bezierCurveTo(cx + r * 0.4, cy + r * 1.15, cx - r * 0.5, cy + r, cx - r * 0.3, cy - r);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#D2B48C';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Cortex (outer B cell zone) — darker rim
  ctx.fillStyle = 'rgba(70, 130, 180, 0.3)';
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.25, cy - r * 0.85);
  ctx.bezierCurveTo(cx + r * 0.7, cy - r * 0.95, cx + r * 0.9, cy, cx + r * 0.65, cy + r * 0.85);
  ctx.bezierCurveTo(cx + r * 0.3, cy + r, cx - r * 0.4, cy + r * 0.85, cx - r * 0.25, cy - r * 0.85);
  ctx.closePath();
  ctx.fill();

  // Germinal centers (follicles)
  ctx.fillStyle = 'rgba(100, 149, 237, 0.6)';
  [[0.3, -0.55], [0.55, 0.1], [0.3, 0.65]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, r * 0.18, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // Paracortex (T cell zone) — center
  ctx.fillStyle = 'rgba(255, 140, 0, 0.3)';
  ctx.beginPath();
  ctx.ellipse(cx + r * 0.15, cy, r * 0.28, r * 0.45, 0, 0, Math.PI * 2);
  ctx.fill();

  // Medulla and hilum
  ctx.fillStyle = '#DEB887';
  ctx.beginPath();
  ctx.arc(cx - r * 0.1, cy + r * 0.2, r * 0.18, 0, Math.PI * 2);
  ctx.fill();

  // Afferent lymph vessels
  ctx.strokeStyle = '#8FBC8F';
  ctx.lineWidth = 3;
  [[0.7, -0.9], [1.0, -0.3], [0.95, 0.8]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.moveTo(cx + dx * r, cy + dy * r);
    ctx.lineTo(cx + dx * r * 0.7, cy + dy * r * 0.7);
    ctx.stroke();
  });

  // Efferent vessel at hilum
  ctx.strokeStyle = '#3CB371';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.25, cy);
  ctx.lineTo(cx - r * 0.85, cy + r * 0.15);
  ctx.stroke();
}

static drawSpleen(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.32;

  // Spleen shape — curved triangular
  ctx.fillStyle = '#8B1A4A';
  ctx.beginPath();
  ctx.moveTo(cx, cy - r * 1.0);
  ctx.bezierCurveTo(cx + r * 1.1, cy - r * 0.9, cx + r * 1.2, cy + r * 0.4, cx + r * 0.3, cy + r);
  ctx.bezierCurveTo(cx - r * 0.4, cy + r * 1.1, cx - r * 1.1, cy + r * 0.5, cx - r * 0.9, cy - r * 0.3);
  ctx.bezierCurveTo(cx - r * 0.7, cy - r * 0.8, cx - r * 0.2, cy - r * 1.05, cx, cy - r * 1.0);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#5C0A2E';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Red pulp (sinusoids)
  ctx.fillStyle = 'rgba(180, 50, 80, 0.5)';
  const sinusoids = [[-0.1, 0], [0.3, -0.2], [-0.3, 0.3], [0.2, 0.4], [0.05, -0.5]];
  sinusoids.forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.ellipse(cx + dx * r, cy + dy * r, r * 0.25, r * 0.12, dx * 1.2, 0, Math.PI * 2);
    ctx.fill();
  });

  // White pulp (Malpighian corpuscles)
  ctx.fillStyle = 'rgba(200, 200, 255, 0.7)';
  ctx.strokeStyle = '#9999DD';
  ctx.lineWidth = 1.5;
  [[0.1, -0.3], [-0.25, 0.1], [0.3, 0.25], [-0.05, 0.5]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, r * 0.12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Hilum (vessels entering)
  ctx.strokeStyle = '#3D0018';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.5, cy + r * 0.15);
  ctx.bezierCurveTo(cx - r * 0.6, cy, cx - r * 0.7, cy + r * 0.1, cx - r * 0.85, cy);
  ctx.stroke();

  // Fibrous trabeculae
  ctx.strokeStyle = 'rgba(120, 20, 60, 0.5)';
  ctx.lineWidth = 1.5;
  [[-0.2, -0.6], [0.4, 0.1], [-0.3, 0.5]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.moveTo(cx + dx * r, cy + dy * r);
    ctx.lineTo(cx + dx * r * 0.3, cy + dy * r * 0.3);
    ctx.stroke();
  });
}

static drawThymus(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.28;

  // Two-lobed structure
  const lobeOffsets = [-0.28, 0.28];
  lobeOffsets.forEach(dx => {
    ctx.fillStyle = '#FFB6C1';
    ctx.beginPath();
    ctx.ellipse(cx + dx * r, cy, r * 0.5, r * 0.9, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#FF69B4';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Cortex (outer, darker)
    ctx.fillStyle = 'rgba(255, 20, 147, 0.2)';
    ctx.beginPath();
    ctx.ellipse(cx + dx * r, cy, r * 0.5, r * 0.9, 0, 0, Math.PI * 2);
    ctx.fill();

    // Medulla (inner, lighter)
    ctx.fillStyle = 'rgba(255, 182, 193, 0.7)';
    ctx.beginPath();
    ctx.ellipse(cx + dx * r, cy, r * 0.28, r * 0.55, 0, 0, Math.PI * 2);
    ctx.fill();

    // Hassal's corpuscles
    ctx.fillStyle = '#FF1493';
    ctx.strokeStyle = '#C71585';
    ctx.lineWidth = 1;
    [[0, -0.3], [0, 0.25]].forEach(([ox, oy]) => {
      ctx.beginPath();
      ctx.arc(cx + dx * r + ox * r, cy + oy * r, r * 0.07, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Concentric ring
      ctx.strokeStyle = 'rgba(199, 21, 133, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx + dx * r + ox * r, cy + oy * r, r * 0.12, 0, Math.PI * 2);
      ctx.stroke();
    });
  });

  // Connecting bridge
  ctx.fillStyle = '#FFB6C1';
  ctx.fillRect(cx - r * 0.08, cy - r * 0.25, r * 0.16, r * 0.5);

  // Blood vessels into each lobe
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2;
  lobeOffsets.forEach(dx => {
    ctx.beginPath();
    ctx.moveTo(cx + dx * r, cy - r);
    ctx.lineTo(cx + dx * r, cy - r * 1.3);
    ctx.stroke();
  });
}

static drawBoneMarrow(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.35;

  // Bone cortex
  ctx.fillStyle = '#F5F5DC';
  ctx.beginPath();
  ctx.ellipse(cx, cy, r * 1.05, r * 0.85, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D2B48C';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Marrow cavity
  ctx.fillStyle = '#FFE4E1';
  ctx.beginPath();
  ctx.ellipse(cx, cy, r * 0.8, r * 0.62, 0, 0, Math.PI * 2);
  ctx.fill();

  // Trabecular bone
  ctx.strokeStyle = 'rgba(210, 180, 140, 0.6)';
  ctx.lineWidth = 2;
  [0.3, 0.9, 1.5, 2.2, 2.8].forEach(a => {
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * r * 0.82, cy + Math.sin(a) * r * 0.63);
    ctx.lineTo(cx + Math.cos(a + 0.5) * r * 0.5, cy + Math.sin(a + 0.5) * r * 0.38);
    ctx.stroke();
  });

  // Hematopoietic cells
  const cellTypes = [
    { color: '#FF6B6B', r: 0.07, positions: [[0.3, -0.1], [-0.4, 0.2], [0.1, 0.4]] },
    { color: '#4169E1', r: 0.065, positions: [[-0.2, -0.3], [0.45, 0.3], [-0.1, 0.5]] },
    { color: '#FFD700', r: 0.055, positions: [[0.0, -0.45], [-0.5, -0.1], [0.3, -0.4]] }
  ];
  cellTypes.forEach(({ color, r: cr, positions }) => {
    ctx.fillStyle = color;
    positions.forEach(([dx, dy]) => {
      ctx.beginPath();
      ctx.arc(cx + dx * r, cy + dy * r, cr * r, 0, Math.PI * 2);
      ctx.fill();
    });
  });

  // Sinusoid (blood vessel within marrow)
  ctx.strokeStyle = 'rgba(178, 34, 34, 0.5)';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.6, cy + r * 0.1);
  ctx.bezierCurveTo(cx - r * 0.2, cy - r * 0.3, cx + r * 0.2, cy + r * 0.3, cx + r * 0.6, cy);
  ctx.stroke();
}

static drawTonsil(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.28;

  // Almond-shaped body
  ctx.fillStyle = '#FFB6C1';
  ctx.beginPath();
  ctx.ellipse(cx, cy, r * 0.7, r, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Crypts (invaginations)
  ctx.strokeStyle = '#FF1493';
  ctx.lineWidth = 2;
  [[-0.3, -0.5], [0.1, -0.6], [0.35, -0.2], [0.2, 0.3], [-0.25, 0.55], [-0.4, 0.1]].forEach(([dx, dy]) => {
    const cx2 = cx + dx * r, cy2 = cy + dy * r;
    ctx.beginPath();
    ctx.moveTo(cx2, cy2);
    ctx.lineTo(cx2 + dx * r * 0.35, cy2 + dy * r * 0.35);
    ctx.stroke();
    // Crypt opening
    ctx.beginPath();
    ctx.arc(cx2, cy2, r * 0.06, 0, Math.PI * 2);
    ctx.fillStyle = '#C71585';
    ctx.fill();
  });

  // Lymphoid follicles
  ctx.fillStyle = 'rgba(100, 149, 237, 0.5)';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 1.5;
  [[0.0, -0.2], [-0.2, 0.25], [0.25, 0.1]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, r * 0.18, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Epithelial surface
  ctx.strokeStyle = 'rgba(255, 20, 147, 0.4)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, r * 0.7, r, 0, 0, Math.PI * 2);
  ctx.stroke();
}

static drawAppendix(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.12;
  const len = h * 0.6;

  // Tubular body — finger-like projection
  ctx.fillStyle = '#DEB887';
  ctx.beginPath();
  ctx.moveTo(cx - r, cy - len * 0.4);
  ctx.lineTo(cx - r, cy + len * 0.3);
  ctx.quadraticCurveTo(cx - r, cy + len * 0.4, cx, cy + len * 0.4);
  ctx.quadraticCurveTo(cx + r, cy + len * 0.4, cx + r, cy + len * 0.3);
  ctx.lineTo(cx + r, cy - len * 0.4);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#C4A265';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Lumen
  ctx.fillStyle = '#F5DEB3';
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.5, cy - len * 0.38);
  ctx.lineTo(cx - r * 0.5, cy + len * 0.28);
  ctx.quadraticCurveTo(cx - r * 0.5, cy + len * 0.35, cx, cy + len * 0.35);
  ctx.quadraticCurveTo(cx + r * 0.5, cy + len * 0.35, cx + r * 0.5, cy + len * 0.28);
  ctx.lineTo(cx + r * 0.5, cy - len * 0.38);
  ctx.closePath();
  ctx.fill();

  // Lymphoid follicles in wall
  ctx.fillStyle = 'rgba(100, 149, 237, 0.55)';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 1;
  [[-0.28, -0.15], [0.28, 0.1], [-0.28, 0.28], [0.28, -0.3]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * h * 0.5, cy + dy * h * 0.5, r * 0.7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Connection to cecum at top
  ctx.fillStyle = '#D2B48C';
  ctx.fillRect(cx - r * 1.8, cy - len * 0.42, r * 3.6, r * 0.8);
  ctx.strokeStyle = '#C4A265';
  ctx.lineWidth = 2;
  ctx.strokeRect(cx - r * 1.8, cy - len * 0.42, r * 3.6, r * 0.8);
}

static drawPeyersPatch(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.35;

  // Intestinal wall cross-section
  ctx.fillStyle = '#FFDEAD';
  ctx.beginPath();
  ctx.roundRect(cx - r, cy - r * 0.85, r * 2, r * 1.7, 8);
  ctx.fill();
  ctx.strokeStyle = '#DEB887';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Villi on luminal surface
  ctx.fillStyle = '#F4A460';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 1.5;
  for (let i = -3; i <= 3; i++) {
    const vx = cx + i * r * 0.25;
    ctx.beginPath();
    ctx.moveTo(vx - r * 0.07, cy - r * 0.7);
    ctx.lineTo(vx - r * 0.07, cy - r * 0.85);
    ctx.quadraticCurveTo(vx, cy - r * 0.98, vx + r * 0.07, cy - r * 0.85);
    ctx.lineTo(vx + r * 0.07, cy - r * 0.7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  // FAE (follicle-associated epithelium) — dome region
  ctx.fillStyle = 'rgba(255, 140, 0, 0.3)';
  ctx.beginPath();
  ctx.ellipse(cx, cy - r * 0.45, r * 0.7, r * 0.25, 0, 0, Math.PI * 2);
  ctx.fill();

  // Lymphoid follicles (germinal centers)
  ctx.fillStyle = 'rgba(70, 130, 180, 0.55)';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 1.5;
  [[-0.35, 0.1], [0.0, 0.15], [0.35, 0.1]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, r * 0.22, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Germinal center lighter core
    ctx.fillStyle = 'rgba(135, 206, 235, 0.5)';
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, r * 0.12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(70, 130, 180, 0.55)';
  });

  // M cells in FAE
  ctx.fillStyle = '#FF8C00';
  [[-0.2, -0.42], [0.0, -0.44], [0.2, -0.42]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r, cy + dy * r, r * 0.07, 0, Math.PI * 2);
    ctx.fill();
  });

  // Subepithelial dome
  ctx.fillStyle = 'rgba(255, 165, 0, 0.2)';
  ctx.beginPath();
  ctx.ellipse(cx, cy - r * 0.25, r * 0.65, r * 0.18, 0, 0, Math.PI * 2);
  ctx.fill();
}

static drawLymphVessel(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  const r = Math.min(w, h) * 0.12;
  const len = Math.min(w, h) * 0.75;

  // Vessel walls
  ctx.strokeStyle = '#90EE90';
  ctx.lineWidth = r * 0.9;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx, cy - len * 0.5);
  ctx.bezierCurveTo(
    cx - r * 1.5, cy - len * 0.15,
    cx + r * 1.5, cy + len * 0.15,
    cx, cy + len * 0.5
  );
  ctx.stroke();

  // Lumen
  ctx.strokeStyle = '#E0FFE0';
  ctx.lineWidth = r * 0.5;
  ctx.beginPath();
  ctx.moveTo(cx, cy - len * 0.5);
  ctx.bezierCurveTo(
    cx - r * 1.5, cy - len * 0.15,
    cx + r * 1.5, cy + len * 0.15,
    cx, cy + len * 0.5
  );
  ctx.stroke();

  // Valves (bicuspid, every ~20% of vessel length)
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 2.5;
  ctx.fillStyle = 'rgba(144, 238, 144, 0.6)';

  const valvePositions = [0.2, 0.45, 0.7];
  valvePositions.forEach(t => {
    // Interpolate along bezier (linear approx)
    const vx = cx + (t - 0.5) * r * 0.8;
    const vy = cy - len * (0.5 - t);

    // Left cusp
    ctx.beginPath();
    ctx.moveTo(vx, vy);
    ctx.quadraticCurveTo(vx - r * 0.8, vy - r * 0.5, vx - r, vy);
    ctx.quadraticCurveTo(vx - r * 0.8, vy + r * 0.5, vx, vy);
    ctx.fill();
    ctx.stroke();

    // Right cusp
    ctx.beginPath();
    ctx.moveTo(vx, vy);
    ctx.quadraticCurveTo(vx + r * 0.8, vy - r * 0.5, vx + r, vy);
    ctx.quadraticCurveTo(vx + r * 0.8, vy + r * 0.5, vx, vy);
    ctx.fill();
    ctx.stroke();
  });

  // Lymph fluid flow arrow
  ctx.fillStyle = '#2E8B57';
  ctx.strokeStyle = '#2E8B57';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy - r * 1.5);
  ctx.lineTo(cx, cy + r * 1.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx, cy + r * 1.5);
  ctx.lineTo(cx - 6, cy + r * 0.8);
  ctx.lineTo(cx + 6, cy + r * 0.8);
  ctx.closePath();
  ctx.fill();

  // Endothelial cell nuclei along wall
  ctx.fillStyle = 'rgba(34, 139, 34, 0.6)';
  [[-0.4], [0.0], [0.4]].forEach(([t]) => {
    ctx.beginPath();
    ctx.ellipse(cx - r * 0.85, cy + t * len * 0.4, r * 0.22, r * 0.1, 0.4, 0, Math.PI * 2);
    ctx.fill();
  });
}
