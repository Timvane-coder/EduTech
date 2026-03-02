// ============================================================
// ANIMAL CELL — UPDATED WITH ALL ORGANELLES
// ============================================================

static drawAnimalCell(ctx, x, y, width, height, view, organelleHighlight) {
  ctx.save();
  ctx.translate(x, y);

  const colors = {
    membrane:      { base: '#E8D4B8', dark: '#C9A97C', light: '#F8EAD8' },
    cytoplasm:     { base: '#F5E6D3', light: '#FFF8F0' },
    nucleus:       { base: '#7B68A6', light: '#9B88C6', dark: '#5B4886' },
    mitochondria:  { base: '#E67E73', light: '#FF9E93', dark: '#C65E53' },
    er:            { base: '#8BC6EC', light: '#ABE6FF', dark: '#6BA6CC' },
    golgi:         { base: '#F4A460', light: '#FFC480', dark: '#D48440' },
    lysosome:      { base: '#9ACD32', light: '#BAED52', dark: '#7AAD12' },
    ribosome:      { base: '#8B7D6B', light: '#AB9D8B', dark: '#6B5D4B' },
    centriole:     { base: '#9B7BB8', light: '#BB9BD8', dark: '#7B5B98' },
    cytoskeleton:  { base: '#C8A078', light: '#E8C098', dark: '#A88058' },
    peroxisome:    { base: '#DAA520', light: '#FAC540', dark: '#BA8500' },
    vesicle:       { base: '#B0C4DE', light: '#D0E4FE', dark: '#90A4BE' },
    chromatin:     { base: '#6A5ACD', light: '#8A7AED', dark: '#4A3AAD' },
    lamina:        { base: '#9370DB', light: '#B390FB', dark: '#7350BB' },
  };

  switch (view) {
    case 'complete':
      this.drawCompleteAnimalCell(ctx, colors, width, height, organelleHighlight);
      break;
    case 'nucleus':
      this.drawNucleus(ctx, colors.nucleus, width, height);
      break;
    case 'mitochondria':
      this.drawMitochondria(ctx, colors.mitochondria, width, height);
      break;
    case 'endoplasmicReticulum':
      this.drawEndoplasmicReticulum(ctx, colors.er, width, height);
      break;
    case 'golgiApparatus':
      this.drawGolgiApparatus(ctx, colors.golgi, width, height);
      break;
    case 'lysosome':
      this.drawLysosome(ctx, colors.lysosome, width, height);
      break;
    case 'ribosome':
      this.drawRibosome(ctx, colors.ribosome, width, height);
      break;
    case 'centriole':
      this.drawCentriole(ctx, colors.centriole, width, height);
      break;
    case 'cytoskeleton':
      this.drawCytoskeleton(ctx, colors.cytoskeleton, width, height);
      break;
    case 'peroxisome':
      this.drawPeroxisome(ctx, colors.peroxisome, width, height);
      break;
    case 'vesicle':
      this.drawVesicle(ctx, colors.vesicle, width, height);
      break;
    case 'actinFilament':
      this.drawActinFilament(ctx, colors.cytoskeleton, width, height);
      break;
    case 'microtubule':
      this.drawMicrotubule(ctx, colors.cytoskeleton, width, height);
      break;
    case 'cytoplasm':
      this.drawCytoplasm(ctx, colors.cytoplasm, width, height);
      break;
    case 'nuclearPore':
      this.drawNuclearPore(ctx, colors.nucleus, width, height);
      break;
    case 'chromatinFiber':
      this.drawChromatinFiber(ctx, colors.chromatin, width, height);
      break;
    case 'nuclearLamina':
      this.drawNuclearLamina(ctx, colors.lamina, width, height);
      break;
    default:
      this.drawCompleteAnimalCell(ctx, colors, width, height, organelleHighlight);
  }

  ctx.restore();
}

static drawCompleteAnimalCell(ctx, colors, width, height, highlight) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  // ── Cell membrane ──────────────────────────────────────────
  const membraneGradient = ctx.createRadialGradient(
    centerX, centerY, w * 0.1,
    centerX, centerY, w * 0.48
  );
  membraneGradient.addColorStop(0, colors.cytoplasm.light);
  membraneGradient.addColorStop(0.7, colors.cytoplasm.base);
  membraneGradient.addColorStop(1, colors.membrane.base);

  ctx.fillStyle = membraneGradient;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.46, h * 0.44, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = colors.membrane.dark;
  ctx.lineWidth = highlight === 'membrane' ? 5 : 3;
  ctx.stroke();

  // ── Cytoskeleton network (background layer) ───────────────
  const cytoHL = highlight === 'cytoskeleton' || highlight === 'all';
  ctx.strokeStyle = cytoHL ? 'rgba(200,150,80,0.55)' : 'rgba(200,150,80,0.22)';
  ctx.lineWidth = cytoHL ? 2 : 1;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.cos(a) * w * 0.42, centerY + Math.sin(a) * h * 0.4);
    ctx.stroke();
  }

  // ── Endoplasmic Reticulum ─────────────────────────────────
  const erHL = highlight === 'endoplasmicReticulum' || highlight === 'all';
  ctx.strokeStyle = erHL ? colors.er.light : colors.er.base;
  ctx.lineWidth = erHL ? 4 : 2;
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const startR = w * 0.18;
    const endR   = w * 0.34;
    ctx.beginPath();
    ctx.moveTo(centerX + Math.cos(angle) * startR, centerY + Math.sin(angle) * startR);
    ctx.quadraticCurveTo(
      centerX + Math.cos(angle + 0.3) * (startR + endR) / 2,
      centerY + Math.sin(angle + 0.3) * (startR + endR) / 2,
      centerX + Math.cos(angle) * endR,
      centerY + Math.sin(angle) * endR
    );
    ctx.stroke();
  }

  // ── Nucleus ───────────────────────────────────────────────
  const nucHL = highlight === 'nucleus' || highlight === 'all';
  const nucGrad = ctx.createRadialGradient(centerX - w * 0.04, centerY - h * 0.04, 0, centerX, centerY, w * 0.16);
  nucGrad.addColorStop(0, nucHL ? colors.nucleus.light : colors.nucleus.base);
  nucGrad.addColorStop(1, colors.nucleus.dark);
  ctx.fillStyle = nucGrad;
  ctx.beginPath();
  ctx.arc(centerX, centerY, w * 0.155, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = colors.nucleus.dark;
  ctx.lineWidth = nucHL ? 4 : 2;
  ctx.stroke();

  // Nuclear pore hints
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    ctx.fillStyle = 'rgba(200,180,255,0.8)';
    ctx.beginPath();
    ctx.arc(
      centerX + Math.cos(a) * w * 0.155,
      centerY + Math.sin(a) * h * 0.155,
      w * 0.012, 0, Math.PI * 2
    );
    ctx.fill();
  }

  // Nucleolus
  ctx.fillStyle = colors.nucleus.dark;
  ctx.beginPath();
  ctx.arc(centerX + w * 0.03, centerY - h * 0.02, w * 0.04, 0, Math.PI * 2);
  ctx.fill();

  // ── Mitochondria ──────────────────────────────────────────
  const mitoHL = highlight === 'mitochondria' || highlight === 'all';
  const mitoPositions = [
    [centerX + w * 0.21, centerY - h * 0.15, 0.4],
    [centerX - w * 0.23, centerY + h * 0.10, -0.3],
    [centerX + w * 0.05, centerY + h * 0.26,  0.1],
    [centerX - w * 0.16, centerY - h * 0.22,  0.6],
  ];
  mitoPositions.forEach(([mx, my, rot]) => {
    ctx.save();
    ctx.translate(mx, my);
    ctx.rotate(rot);
    ctx.fillStyle = mitoHL ? colors.mitochondria.light : colors.mitochondria.base;
    ctx.beginPath();
    ctx.ellipse(0, 0, w * 0.065, h * 0.032, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = colors.mitochondria.dark;
    ctx.lineWidth = mitoHL ? 2.5 : 1.5;
    ctx.stroke();
    // Cristae
    ctx.strokeStyle = colors.mitochondria.dark;
    ctx.lineWidth = 0.8;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(-w * 0.04, -h * 0.015 + i * h * 0.015);
      ctx.lineTo(w * 0.04,  -h * 0.015 + i * h * 0.015);
      ctx.stroke();
    }
    ctx.restore();
  });

  // ── Golgi Apparatus ───────────────────────────────────────
  const golgiHL = highlight === 'golgiApparatus' || highlight === 'all';
  ctx.save();
  ctx.translate(centerX + w * 0.25, centerY + h * 0.15);
  ctx.strokeStyle = golgiHL ? colors.golgi.light : colors.golgi.base;
  ctx.lineWidth = golgiHL ? 3 : 2;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(0, i * h * 0.015, w * 0.075, Math.PI * 0.2, Math.PI * 0.8);
    ctx.stroke();
  }
  // Golgi vesicles budding
  ctx.fillStyle = golgiHL ? colors.golgi.light : colors.golgi.base;
  ctx.strokeStyle = colors.golgi.dark;
  ctx.lineWidth = 1;
  [[w * 0.09, h * 0.01], [w * 0.1, h * 0.04], [-w * 0.09, h * 0.02]].forEach(([vx, vy]) => {
    ctx.beginPath();
    ctx.arc(vx, vy, w * 0.016, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
  ctx.restore();

  // ── Lysosomes ─────────────────────────────────────────────
  const lysoHL = highlight === 'lysosome' || highlight === 'all';
  const lysoPositions = [
    [centerX - w * 0.10, centerY + h * 0.20],
    [centerX + w * 0.30, centerY - h * 0.05],
    [centerX - w * 0.26, centerY - h * 0.10],
  ];
  lysoPositions.forEach(([lx, ly]) => {
    ctx.fillStyle = lysoHL ? colors.lysosome.light : colors.lysosome.base;
    ctx.beginPath();
    ctx.arc(lx, ly, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = colors.lysosome.dark;
    ctx.lineWidth = lysoHL ? 2 : 1;
    ctx.stroke();
  });

  // ── Peroxisomes ───────────────────────────────────────────
  const peroHL = highlight === 'peroxisome' || highlight === 'all';
  [[centerX + w * 0.15, centerY + h * 0.30], [centerX - w * 0.32, centerY - h * 0.02]].forEach(([px, py]) => {
    ctx.fillStyle = peroHL ? colors.peroxisome.light : colors.peroxisome.base;
    ctx.beginPath();
    ctx.arc(px, py, w * 0.022, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = colors.peroxisome.dark;
    ctx.lineWidth = peroHL ? 2 : 1;
    ctx.stroke();
    // Crystal core
    ctx.strokeStyle = 'rgba(180,140,0,0.7)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(px - w * 0.01, py);
    ctx.lineTo(px + w * 0.01, py);
    ctx.stroke();
  });

  // ── Vesicles ──────────────────────────────────────────────
  const vesHL = highlight === 'vesicle' || highlight === 'all';
  [[centerX + w * 0.33, centerY + h * 0.1], [centerX - w * 0.3, centerY + h * 0.25]].forEach(([vx, vy]) => {
    ctx.fillStyle = vesHL ? colors.vesicle.light : colors.vesicle.base;
    ctx.beginPath();
    ctx.arc(vx, vy, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = colors.vesicle.dark;
    ctx.lineWidth = vesHL ? 2 : 1;
    ctx.stroke();
  });

  // ── Centrioles (pair) ─────────────────────────────────────
  const centrHL = highlight === 'centriole' || highlight === 'all';
  ctx.save();
  ctx.translate(centerX - w * 0.08, centerY + h * 0.32);
  ctx.fillStyle = centrHL ? colors.centriole.light : colors.centriole.base;
  ctx.strokeStyle = colors.centriole.dark;
  ctx.lineWidth = centrHL ? 2.5 : 1.5;
  // Centriole 1
  ctx.beginPath();
  ctx.ellipse(-w * 0.04, 0, w * 0.045, h * 0.018, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  // Centriole 2 (perpendicular)
  ctx.beginPath();
  ctx.ellipse(w * 0.03, h * 0.008, w * 0.022, h * 0.028, Math.PI / 3, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.restore();

  // ── Ribosomes ─────────────────────────────────────────────
  const riboHL = highlight === 'ribosome' || highlight === 'all';
  ctx.fillStyle = riboHL ? colors.ribosome.light : colors.ribosome.base;
  const riboSeed = [0.12,0.85,0.43,0.67,0.29,0.91,0.55,0.18,0.74,0.38,
                    0.62,0.06,0.47,0.83,0.25,0.71,0.33,0.58,0.96,0.14];
  for (let i = 0; i < 20; i++) {
    const angle  = riboSeed[i] * Math.PI * 2;
    const radius = w * 0.19 + riboSeed[(i + 3) % 20] * w * 0.22;
    ctx.beginPath();
    ctx.arc(
      centerX + Math.cos(angle) * radius,
      centerY + Math.sin(angle) * radius,
      w * 0.008, 0, Math.PI * 2
    );
    ctx.fill();
  }

  // ── Labels ────────────────────────────────────────────────
  if (highlight === 'all' || !highlight) {
    const labels = [
      { text: 'Nucleus',        x: centerX + w * 0.18,  y: centerY - h * 0.04 },
      { text: 'Mitochondria',   x: centerX + w * 0.31,  y: centerY - h * 0.20 },
      { text: 'Golgi',          x: centerX + w * 0.38,  y: centerY + h * 0.10 },
      { text: 'ER',             x: centerX - w * 0.38,  y: centerY + h * 0.05 },
      { text: 'Lysosome',       x: centerX - w * 0.04,  y: centerY + h * 0.30 },
      { text: 'Centriole',      x: centerX - w * 0.18,  y: centerY + h * 0.42 },
      { text: 'Peroxisome',     x: centerX + w * 0.18,  y: centerY + h * 0.40 },
    ];
    ctx.fillStyle = 'rgba(0,0,0,0.65)';
    ctx.font = `${w * 0.028}px Arial`;
    ctx.textAlign = 'center';
    labels.forEach(({ text, x, y }) => ctx.fillText(text, x, y));
  }
}

// ============================================================
// PLANT CELL — UPDATED WITH ALL COMPONENTS
// ============================================================

static drawPlantCell(ctx, x, y, width, height, view, processHighlight) {
  ctx.save();
  ctx.translate(x, y);

  const colors = {
    cellWall:     { base: '#8FBC8F', dark: '#6B8E6B', light: '#AFDCAF' },
    membrane:     { base: '#E8D4B8', dark: '#C9A97C', light: '#F8EAD8' },
    cytoplasm:    { base: '#F5F5DC', light: '#FFFEF0' },
    chloroplast:  { base: '#228B22', light: '#32CD32', dark: '#006400' },
    vacuole:      { base: '#87CEEB', light: '#B0E0E6', dark: '#4682B4' },
    nucleus:      { base: '#7B68A6', light: '#9B88C6', dark: '#5B4886' },
    amyloplast:   { base: '#D4C4A0', light: '#F4E4C0', dark: '#B4A480' },
    chromoplast:  { base: '#FF8C00', light: '#FFA830', dark: '#CC6600' },
    leucoplast:   { base: '#E8E8E8', light: '#F8F8F8', dark: '#C8C8C8' },
    lamella:      { base: '#A0C878', light: '#C0E898', dark: '#80A858' },
    secondaryWall:{ base: '#C8A060', light: '#E8C080', dark: '#A88040' },
  };

  switch (view) {
    case 'complete':
      this.drawCompletePlantCell(ctx, colors, width, height, processHighlight);
      break;
    case 'cellWall':
      this.drawCellWall(ctx, colors.cellWall, width, height);
      break;
    case 'chloroplast':
      this.drawChloroplast(ctx, colors.chloroplast, width, height);
      break;
    case 'vacuole':
      this.drawVacuole(ctx, colors.vacuole, width, height);
      break;
    case 'plasmodesmata':
      this.drawPlasmodesmata(ctx, colors, width, height);
      break;
    case 'chloroplastGranum':
      this.drawChloroplastGranum(ctx, colors.chloroplast, width, height);
      break;
    case 'middleLamella':
      this.drawMiddleLamella(ctx, colors.lamella, width, height);
      break;
    case 'primaryPit':
      this.drawPrimaryPit(ctx, colors.cellWall, width, height);
      break;
    case 'secondaryWall':
      this.drawSecondaryWall(ctx, colors.secondaryWall, width, height);
      break;
    case 'amyloplast':
      this.drawAmyloplast(ctx, colors.amyloplast, width, height);
      break;
    case 'chromoplast':
      this.drawChromoplast(ctx, colors.chromoplast, width, height);
      break;
    case 'leucoplast':
      this.drawLeucoplast(ctx, colors.leucoplast, width, height);
      break;
    case 'cytoplasmicStreaming':
      this.drawCytoplasticStreaming(ctx, colors.cytoplasm, width, height);
      break;
    default:
      this.drawCompletePlantCell(ctx, colors, width, height, processHighlight);
  }

  ctx.restore();
}

static drawCompletePlantCell(ctx, colors, width, height, highlight) {
  const w = width, h = height;

  // ── Middle lamella (outermost) ────────────────────────────
  ctx.fillStyle = 'rgba(160,200,120,0.35)';
  ctx.fillRect(w * 0.03, h * 0.03, w * 0.94, h * 0.94);

  // ── Cell wall ─────────────────────────────────────────────
  const wallHL = highlight === 'cellWallFormation' || highlight === 'turgorPressure' || highlight === 'cellWall' || highlight === 'all';
  ctx.fillStyle = wallHL ? colors.cellWall.light : colors.cellWall.base;
  ctx.fillRect(w * 0.05, h * 0.05, w * 0.90, h * 0.90);
  ctx.strokeStyle = colors.cellWall.dark;
  ctx.lineWidth = wallHL ? 5 : 3;
  ctx.strokeRect(w * 0.05, h * 0.05, w * 0.90, h * 0.90);

  // Cellulose microfibril texture
  ctx.strokeStyle = 'rgba(107,142,107,0.3)';
  ctx.lineWidth = 1;
  const fibSeed = [0.08,0.2,0.34,0.47,0.61,0.75,0.88,0.15,0.42,0.69,0.92,0.27,0.54,0.81,0.06,0.38,0.65,0.91,0.23,0.5];
  for (let i = 0; i < 20; i++) {
    const fx = w * 0.05 + fibSeed[i] * w * 0.90;
    ctx.beginPath();
    ctx.moveTo(fx, h * 0.05);
    ctx.lineTo(fx + w * 0.015, h * 0.95);
    ctx.stroke();
  }

  // ── Cell membrane ─────────────────────────────────────────
  ctx.strokeStyle = colors.membrane.dark;
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.08, h * 0.08, w * 0.84, h * 0.84);

  // ── Large central vacuole ─────────────────────────────────
  const vacHL = highlight === 'turgorPressure' || highlight === 'vacuole' || highlight === 'all';
  const vacGradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.33);
  vacGradient.addColorStop(0, vacHL ? colors.vacuole.light : colors.vacuole.base);
  vacGradient.addColorStop(1, colors.vacuole.dark);
  ctx.fillStyle = vacGradient;
  ctx.fillRect(w * 0.16, h * 0.16, w * 0.68, h * 0.68);
  ctx.strokeStyle = colors.vacuole.dark;
  ctx.lineWidth = vacHL ? 3 : 1.5;
  ctx.strokeRect(w * 0.16, h * 0.16, w * 0.68, h * 0.68);

  // ── Cytoplasm strips ──────────────────────────────────────
  ctx.fillStyle = colors.cytoplasm.base;
  ctx.fillRect(w * 0.08, h * 0.08, w * 0.08, h * 0.84); // left
  ctx.fillRect(w * 0.84, h * 0.08, w * 0.08, h * 0.84); // right
  ctx.fillRect(w * 0.08, h * 0.08, w * 0.84, h * 0.08); // top
  ctx.fillRect(w * 0.08, h * 0.84, w * 0.84, h * 0.08); // bottom

  // ── Cytoplasmic streaming arrows ──────────────────────────
  const streamHL = highlight === 'cytoplasmicStreaming' || highlight === 'all';
  ctx.strokeStyle = streamHL ? 'rgba(0,140,0,0.7)' : 'rgba(0,140,0,0.3)';
  ctx.lineWidth = streamHL ? 2 : 1;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.moveTo(w * 0.09, h * 0.12);
  ctx.lineTo(w * 0.91, h * 0.12);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.91, h * 0.88);
  ctx.lineTo(w * 0.09, h * 0.88);
  ctx.stroke();
  ctx.setLineDash([]);

  // ── Nucleus ───────────────────────────────────────────────
  const nucHL = highlight === 'nucleus' || highlight === 'all';
  ctx.fillStyle = nucHL ? colors.nucleus.light : colors.nucleus.base;
  ctx.beginPath();
  ctx.arc(w * 0.20, h * 0.20, w * 0.075, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = colors.nucleus.dark;
  ctx.lineWidth = nucHL ? 3 : 2;
  ctx.stroke();
  // Nucleolus
  ctx.fillStyle = colors.nucleus.dark;
  ctx.beginPath();
  ctx.arc(w * 0.21, h * 0.19, w * 0.025, 0, Math.PI * 2);
  ctx.fill();

  // ── Chloroplasts ──────────────────────────────────────────
  const chloroHL = highlight === 'photosynthesis' || highlight === 'chloroplast' || highlight === 'all';
  const chloroPositions = [
    [w * 0.115, h * 0.50,  0.2],
    [w * 0.885, h * 0.30,  -0.1],
    [w * 0.885, h * 0.70,  0.3],
    [w * 0.50,  h * 0.115, 0.0],
    [w * 0.30,  h * 0.885, -0.2],
    [w * 0.70,  h * 0.885, 0.1],
    [w * 0.885, h * 0.50,  0.15],
    [w * 0.115, h * 0.75,  -0.1],
  ];
  chloroPositions.forEach(([cx, cy, rot]) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);
    ctx.fillStyle = chloroHL ? colors.chloroplast.light : colors.chloroplast.base;
    ctx.beginPath();
    ctx.ellipse(0, 0, w * 0.038, h * 0.022, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = colors.chloroplast.dark;
    ctx.lineWidth = chloroHL ? 2 : 1;
    ctx.stroke();
    // Grana hint
    ctx.fillStyle = colors.chloroplast.dark;
    ctx.fillRect(-w * 0.01, -h * 0.008, w * 0.02, h * 0.016);
    ctx.restore();
  });

  // ── Amyloplasts ───────────────────────────────────────────
  const amyHL = highlight === 'amyloplast' || highlight === 'all';
  [[w * 0.88, h * 0.20]].forEach(([ax, ay]) => {
    ctx.fillStyle = amyHL ? colors.amyloplast.light : colors.amyloplast.base;
    ctx.beginPath();
    ctx.ellipse(ax, ay, w * 0.032, h * 0.038, 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = colors.amyloplast.dark;
    ctx.lineWidth = amyHL ? 2 : 1;
    ctx.stroke();
    // Starch grain
    ctx.fillStyle = 'rgba(200,180,120,0.7)';
    ctx.beginPath();
    ctx.arc(ax, ay, w * 0.016, 0, Math.PI * 2);
    ctx.fill();
  });

  // ── Leucoplast ────────────────────────────────────────────
  const leucoHL = highlight === 'leucoplast' || highlight === 'all';
  [[w * 0.115, h * 0.30]].forEach(([lx, ly]) => {
    ctx.fillStyle = leucoHL ? colors.leucoplast.light : colors.leucoplast.base;
    ctx.beginPath();
    ctx.ellipse(lx, ly, w * 0.028, h * 0.035, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = colors.leucoplast.dark;
    ctx.lineWidth = leucoHL ? 2 : 1;
    ctx.stroke();
  });

  // ── Plasmodesmata ─────────────────────────────────────────
  const plasmoHL = highlight === 'plasmodesmata' || highlight === 'all';
  ctx.fillStyle = plasmoHL ? colors.membrane.light : colors.membrane.dark;
  const plasmoPositions = [
    [w * 0.055, h * 0.30], [w * 0.055, h * 0.50], [w * 0.055, h * 0.70],
    [w * 0.945, h * 0.35], [w * 0.945, h * 0.55], [w * 0.945, h * 0.75],
    [w * 0.35, h * 0.055], [w * 0.60, h * 0.055],
    [w * 0.40, h * 0.945], [w * 0.65, h * 0.945],
  ];
  plasmoPositions.forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(px, py, plasmoHL ? w * 0.014 : w * 0.01, 0, Math.PI * 2);
    ctx.fill();
  });

  // ── Golgi (plant cells have many small dictyosomes) ───────
  const golgiHL = highlight === 'golgi' || highlight === 'all';
  ctx.save();
  ctx.translate(w * 0.84, h * 0.20);
  ctx.strokeStyle = golgiHL ? '#FFC480' : '#F4A460';
  ctx.lineWidth = golgiHL ? 2.5 : 1.5;
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.arc(0, i * h * 0.012, w * 0.04, Math.PI * 0.2, Math.PI * 0.8);
    ctx.stroke();
  }
  ctx.restore();

  // ── Mitochondria (plant cells have them too) ──────────────
  const mitoHL = highlight === 'mitochondria' || highlight === 'all';
  [[w * 0.115, h * 0.88], [w * 0.88, h * 0.85]].forEach(([mx, my]) => {
    ctx.fillStyle = mitoHL ? '#FF9E93' : '#E67E73';
    ctx.beginPath();
    ctx.ellipse(mx, my, w * 0.038, h * 0.02, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#C65E53';
    ctx.lineWidth = mitoHL ? 2 : 1;
    ctx.stroke();
  });

  // ── Ribosomes ─────────────────────────────────────────────
  const riboHL = highlight === 'ribosome' || highlight === 'all';
  ctx.fillStyle = riboHL ? '#AB9D8B' : '#8B7D6B';
  const riboSeed2 = [0.1,0.9,0.3,0.7,0.5,0.2,0.8,0.4,0.6,0.15,0.85,0.45,0.65];
  for (let i = 0; i < 12; i++) {
    const s = riboSeed2[i % riboSeed2.length];
    ctx.beginPath();
    ctx.arc(
      w * 0.09 + s * w * 0.04,
      h * 0.09 + (i / 12) * h * 0.84,
      w * 0.006, 0, Math.PI * 2
    );
    ctx.fill();
  }

  // ── Labels ────────────────────────────────────────────────
  if (highlight === 'all' || !highlight) {
    ctx.fillStyle = 'rgba(0,0,0,0.65)';
    ctx.font = `${w * 0.028}px Arial`;
    ctx.textAlign = 'center';
    [
      { text: 'Nucleus',      x: w * 0.22, y: h * 0.08 },
      { text: 'Vacuole',      x: w * 0.50, y: h * 0.50 },
      { text: 'Cell Wall',    x: w * 0.50, y: h * 0.02 },
      { text: 'Chloroplast',  x: w * 0.115,y: h * 0.60 },
      { text: 'Amyloplast',   x: w * 0.88, y: h * 0.12 },
    ].forEach(({ text, x, y }) => ctx.fillText(text, x, y));
  }
}

// ============================================================
// CELL MEMBRANE SWITCH
// ============================================================

static drawCellMembrane(ctx, x, y, width, height, view) {
  ctx.save();
  ctx.translate(x, y);

  const colors = {
    membrane:    { base: '#E8C890', dark: '#C8A870', light: '#F8E8B0' },
    protein:     { base: '#9B78C8', light: '#BB98E8', dark: '#7B58A8' },
    phospholipid:{ base: '#F0C080', dark: '#D0A060', light: '#FFE0A0' },
  };

  switch (view) {
    case 'fluidMosaicModel':
      this.drawFluidMosaicModel(ctx, colors, width, height);
      break;
    case 'phospholipidBilayer':
      this.drawPhospholipidBilayer(ctx, colors.phospholipid, width, height);
      break;
    case 'membraneProteins':
      this.drawMembraneProteins(ctx, colors, width, height);
      break;
    case 'transportMechanisms':
      this.drawTransportMechanisms(ctx, colors, width, height);
      break;
    case 'endocytosis':
      this.drawEndocytosis(ctx, colors.membrane, width, height);
      break;
    case 'exocytosis':
      this.drawExocytosis(ctx, colors.membrane, width, height);
      break;
    case 'osmosis':
      this.drawOsmosis(ctx, colors.membrane, width, height);
      break;
    case 'facilitatedDiffusion':
      this.drawFacilitatedDiffusion(ctx, colors.membrane, width, height);
      break;
    case 'ionChannel':
      this.drawIonChannel(ctx, colors.membrane, width, height);
      break;
    case 'atpase':
      this.drawATPase(ctx, colors.membrane, width, height);
      break;
    case 'cotransporter':
      this.drawCotransporter(ctx, colors.membrane, width, height);
      break;
    case 'aquaporin':
      this.drawAquaporin(ctx, colors.membrane, width, height);
      break;
    case 'junctionProteins':
      this.drawJunctionProteins(ctx, colors.membrane, width, height);
      break;
    case 'receptorProtein':
      this.drawReceptorProtein(ctx, colors.membrane, width, height);
      break;
    case 'enzymeProtein':
      this.drawEnzymeProtein(ctx, colors.membrane, width, height);
      break;
    default:
      this.drawFluidMosaicModel(ctx, colors, width, height);
  }

  ctx.restore();
}

// ============================================================
// CELL DIVISION SWITCH
// ============================================================

static drawCellDivision(ctx, x, y, width, height, view) {
  ctx.save();
  ctx.translate(x, y);

  const colors = {
    chromosome: { base: '#6080E0', light: '#80A0FF', dark: '#4060C0' },
    spindle:    { base: '#60C060', light: '#80E080', dark: '#40A040' },
    cell:       { base: '#C0D8F0', light: '#E0F0FF', dark: '#90B8D0' },
    nuclear:    { base: '#9B78C8', light: '#BB98E8', dark: '#7B58A8' },
  };

  switch (view) {
    case 'chromosome':
      this.drawChromosome(ctx, colors.chromosome, width, height);
      break;
    case 'spindleFiber':
      this.drawSpindleFiber(ctx, colors.spindle, width, height);
      break;
    case 'centrosome':
      this.drawCentrosome(ctx, colors.nuclear, width, height);
      break;
    case 'cleavageFurrow':
      this.drawCleavageFurrow(ctx, colors.cell, width, height);
      break;
    case 'cellPlate':
      this.drawCellPlate(ctx, colors.cell, width, height);
      break;
    case 'cellCycle':
      this.drawCellCycle(ctx, colors.cell, width, height);
      break;
    case 'prophase':
      this.drawMitosisPhase(ctx, colors.chromosome, width, height, 'prophase');
      break;
    case 'metaphase':
      this.drawMitosisPhase(ctx, colors.chromosome, width, height, 'metaphase');
      break;
    case 'anaphase':
      this.drawMitosisPhase(ctx, colors.chromosome, width, height, 'anaphase');
      break;
    case 'telophase':
      this.drawMitosisPhase(ctx, colors.chromosome, width, height, 'telophase');
      break;
    case 'meiosisProphase1':
      this.drawMeiosisPhase(ctx, colors.chromosome, width, height, 'prophase1');
      break;
    case 'meiosisMetaphase1':
      this.drawMeiosisPhase(ctx, colors.chromosome, width, height, 'metaphase1');
      break;
    case 'meiosisAnaphase1':
      this.drawMeiosisPhase(ctx, colors.chromosome, width, height, 'anaphase1');
      break;
    case 'meiosis2':
      this.drawMeiosisPhase(ctx, colors.chromosome, width, height, 'meiosis2');
      break;
    case 'complete':
      this.drawCompleteCellDivision(ctx, colors, width, height);
      break;
    default:
      this.drawCellCycle(ctx, colors.cell, width, height);
  }

  ctx.restore();
}

// ============================================================
// CELLULAR RESPIRATION SWITCH
// ============================================================

static drawCellularRespiration(ctx, x, y, width, height, view) {
  ctx.save();
  ctx.translate(x, y);

  const colors = {
    glycolysis: { base: '#60B0E0', light: '#80D0FF', dark: '#4090C0' },
    krebs:      { base: '#E08060', light: '#FFA080', dark: '#C06040' },
    etc:        { base: '#60C090', light: '#80E0B0', dark: '#40A070' },
    atp:        { base: '#F0C040', light: '#FFE060', dark: '#D0A020' },
  };

  switch (view) {
    case 'glycolysis':
      this.drawGlycolysis(ctx, colors.glycolysis, width, height);
      break;
    case 'krebsCycle':
      this.drawKrebsCycle(ctx, colors.krebs, width, height);
      break;
    case 'electronTransportChain':
      this.drawElectronTransportChain(ctx, colors.etc, width, height);
      break;
    case 'atpSynthase':
      this.drawATPSynthase(ctx, colors.atp, width, height);
      break;
    case 'complete':
      this.drawCompleteCellularRespiration(ctx, colors, width, height);
      break;
    default:
      this.drawCompleteCellularRespiration(ctx, colors, width, height);
  }

  ctx.restore();
}

// ============================================================
// PHOTOSYNTHESIS SWITCH
// ============================================================

static drawPhotosynthesis(ctx, x, y, width, height, view) {
  ctx.save();
  ctx.translate(x, y);

  const colors = {
    light:     { base: '#60C060', light: '#80E080', dark: '#40A040' },
    calvin:    { base: '#90C840', light: '#B0E860', dark: '#70A820' },
    thylakoid: { base: '#208820', light: '#30C030', dark: '#106010' },
    photosystem:{ base: '#F0A020', light: '#FFB840', dark: '#D08000' },
  };

  switch (view) {
    case 'lightReactions':
      this.drawLightReactions(ctx, colors.light, width, height);
      break;
    case 'calvinCycle':
      this.drawCalvinCycle(ctx, colors.calvin, width, height);
      break;
    case 'thylakoidMembrane':
      this.drawThylakoidMembrane(ctx, colors.thylakoid, width, height);
      break;
    case 'photosystem1':
      this.drawPhotosystem(ctx, colors.photosystem, width, height, 'I');
      break;
    case 'photosystem2':
      this.drawPhotosystem(ctx, colors.photosystem, width, height, 'II');
      break;
    case 'complete':
      this.drawCompletePhotosynthesis(ctx, colors, width, height);
      break;
    default:
      this.drawCompletePhotosynthesis(ctx, colors, width, height);
  }

  ctx.restore();
}

// ============================================================
// MISSING COMPLETE SYSTEM DRAWING METHODS
// ============================================================

static drawCompleteCellDivision(ctx, colors, width, height) {
  const w = width, h = height;

  // Title
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cell Division — Mitosis Sequence', w / 2, h * 0.05);

  // 4 phase panels in 2×2 grid
  const panels = [
    { phase: 'prophase',   label: 'Prophase',   col: 0, row: 0 },
    { phase: 'metaphase',  label: 'Metaphase',  col: 1, row: 0 },
    { phase: 'anaphase',   label: 'Anaphase',   col: 0, row: 1 },
    { phase: 'telophase',  label: 'Telophase',  col: 1, row: 1 },
  ];

  const panelW = w * 0.46, panelH = h * 0.42;
  const colX   = [w * 0.02, w * 0.52];
  const rowY   = [h * 0.07, h * 0.53];

  panels.forEach(({ phase, label, col, row }) => {
    const px = colX[col], py = rowY[row];

    // Panel border
    ctx.strokeStyle = 'rgba(80,80,200,0.4)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(px, py, panelW, panelH);

    // Clip to panel
    ctx.save();
    ctx.beginPath();
    ctx.rect(px, py, panelW, panelH);
    ctx.clip();
    ctx.translate(px, py);
    this.drawMitosisPhase(ctx, colors.chromosome, panelW, panelH, phase);
    ctx.restore();

    // Panel label
    ctx.fillStyle = 'rgba(60,60,180,0.85)';
    ctx.font = `bold ${w * 0.028}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, px + panelW / 2, py + panelH - h * 0.01);
  });

  // Circular arrows between panels
  const arrowData = [
    { x1: colX[0] + panelW, y1: rowY[0] + panelH / 2, x2: colX[1], y2: rowY[0] + panelH / 2, label: '' },
    { x1: colX[1] + panelW / 2, y1: rowY[0] + panelH, x2: colX[1] + panelW / 2, y2: rowY[1], label: '' },
    { x1: colX[1], y1: rowY[1] + panelH / 2, x2: colX[0] + panelW, y2: rowY[1] + panelH / 2, label: '' },
  ];
  ctx.strokeStyle = 'rgba(80,80,200,0.6)';
  ctx.lineWidth = 2;
  arrowData.forEach(({ x1, y1, x2, y2 }) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    // Arrowhead
    const angle = Math.atan2(y2 - y1, x2 - x1);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - w * 0.02 * Math.cos(angle - 0.4), y2 - h * 0.02 * Math.sin(angle - 0.4));
    ctx.lineTo(x2 - w * 0.02 * Math.cos(angle + 0.4), y2 - h * 0.02 * Math.sin(angle + 0.4));
    ctx.closePath();
    ctx.fillStyle = 'rgba(80,80,200,0.6)';
    ctx.fill();
  });

  // Cytokinesis note at bottom-left panel
  ctx.fillStyle = 'rgba(200,50,50,0.8)';
  ctx.font = `italic ${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('→ Cytokinesis', colX[0] + panelW / 2, rowY[1] + panelH + h * 0.025);
}

static drawCompleteCellularRespiration(ctx, colors, width, height) {
  const w = width, h = height;

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cellular Respiration', w / 2, h * 0.05);

  // ── Stage 1: Glycolysis (Cytoplasm) ──────────────────────
  ctx.fillStyle = 'rgba(96,176,224,0.18)';
  ctx.fillRect(w * 0.02, h * 0.08, w * 0.3, h * 0.85);
  ctx.strokeStyle = colors.glycolysis.dark;
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.02, h * 0.08, w * 0.3, h * 0.85);
  ctx.fillStyle = colors.glycolysis.dark;
  ctx.font = `bold ${w * 0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Glycolysis', w * 0.17, h * 0.13);
  ctx.font = `italic ${w * 0.026}px Arial`;
  ctx.fillText('(Cytoplasm)', w * 0.17, h * 0.18);

  // Glucose → 2 Pyruvate pathway
  const glycSteps = [
    { label: 'Glucose (C₆)', y: h * 0.24 },
    { label: '+ 2 ATP', y: h * 0.31, small: true },
    { label: 'Fructose-1,6-BP', y: h * 0.38 },
    { label: '2× G3P', y: h * 0.50 },
    { label: '+ 4 ATP + 2 NADH', y: h * 0.57, small: true },
    { label: '2× Pyruvate', y: h * 0.66 },
  ];
  glycSteps.forEach(({ label, y, small }) => {
    ctx.fillStyle = small ? 'rgba(0,100,180,0.7)' : colors.glycolysis.base;
    if (!small) {
      ctx.beginPath();
      ctx.roundRect(w * 0.04, y - h * 0.025, w * 0.26, h * 0.05, [6]);
      ctx.fill();
      ctx.strokeStyle = colors.glycolysis.dark;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.fillStyle = small ? 'rgba(0,100,180,0.85)' : '#000';
    ctx.font = small ? `${w * 0.024}px Arial` : `bold ${w * 0.028}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, w * 0.17, y + h * 0.008);
    // Arrow
    if (!small) {
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(w * 0.17, y + h * 0.025);
      ctx.lineTo(w * 0.17, y + h * 0.055);
      ctx.stroke();
    }
  });

  // Net yield
  ctx.fillStyle = 'rgba(0,120,0,0.15)';
  ctx.fillRect(w * 0.04, h * 0.74, w * 0.26, h * 0.14);
  ctx.fillStyle = 'rgba(0,120,0,0.9)';
  ctx.font = `bold ${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Net: 2 ATP', w * 0.17, h * 0.80);
  ctx.fillText('2 NADH', w * 0.17, h * 0.86);

  // ── Stage 2: Krebs Cycle (Mitochondrial Matrix) ───────────
  ctx.fillStyle = 'rgba(224,128,96,0.18)';
  ctx.fillRect(w * 0.35, h * 0.08, w * 0.3, h * 0.85);
  ctx.strokeStyle = colors.krebs.dark;
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.35, h * 0.08, w * 0.3, h * 0.85);
  ctx.fillStyle = colors.krebs.dark;
  ctx.font = `bold ${w * 0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Krebs Cycle', w * 0.50, h * 0.13);
  ctx.font = `italic ${w * 0.026}px Arial`;
  ctx.fillText('(Mito. Matrix)', w * 0.50, h * 0.18);

  // Pyruvate → Acetyl-CoA
  ctx.fillStyle = 'rgba(200,100,60,0.15)';
  ctx.beginPath();
  ctx.roundRect(w * 0.37, h * 0.22, w * 0.26, h * 0.05, [5]);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.027}px Arial`;
  ctx.fillText('Pyruvate → Acetyl-CoA', w * 0.50, h * 0.248);
  ctx.fillStyle = 'rgba(0,100,180,0.7)';
  ctx.font = `${w * 0.023}px Arial`;
  ctx.fillText('+CO₂ +NADH', w * 0.50, h * 0.285);

  // Krebs cycle circle
  const krebs_cx = w * 0.50, krebs_cy = h * 0.58, krebs_r = w * 0.105;
  ctx.strokeStyle = colors.krebs.base;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(krebs_cx, krebs_cy, krebs_r, 0, Math.PI * 2);
  ctx.stroke();

  const krebsSteps = [
    { label: 'Oxalo-\nacetate', a: -Math.PI / 2 },
    { label: 'Citrate', a: -Math.PI / 2 + Math.PI / 3 },
    { label: 'Isocitrate', a: -Math.PI / 2 + (2 * Math.PI) / 3 },
    { label: 'α-Keto-\nglutarate', a: -Math.PI / 2 + Math.PI },
    { label: 'Succinyl-\nCoA', a: -Math.PI / 2 + (4 * Math.PI) / 3 },
    { label: 'Fumarate\n/Malate', a: -Math.PI / 2 + (5 * Math.PI) / 3 },
  ];

  krebsSteps.forEach(({ label, a }) => {
    const kx = krebs_cx + Math.cos(a) * krebs_r;
    const ky = krebs_cy + Math.sin(a) * krebs_r;
    ctx.fillStyle = colors.krebs.light;
    ctx.beginPath();
    ctx.arc(kx, ky, w * 0.022, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = colors.krebs.dark;
    ctx.lineWidth = 1;
    ctx.stroke();
    const lx = krebs_cx + Math.cos(a) * (krebs_r + w * 0.055);
    const ly = krebs_cy + Math.sin(a) * (krebs_r + w * 0.055);
    ctx.fillStyle = '#000';
    ctx.font = `${w * 0.022}px Arial`;
    ctx.textAlign = 'center';
    label.split('\n').forEach((line, li) => ctx.fillText(line, lx, ly + li * h * 0.028));
  });

  // Krebs yields
  ctx.fillStyle = 'rgba(0,120,0,0.15)';
  ctx.fillRect(w * 0.37, h * 0.80, w * 0.26, h * 0.08);
  ctx.fillStyle = 'rgba(0,120,0,0.9)';
  ctx.font = `bold ${w * 0.024}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('×2: 2ATP, 6NADH', w * 0.50, h * 0.84);
  ctx.fillText('2FADH₂, 4CO₂', w * 0.50, h * 0.87);

  // ── Stage 3: ETC + Oxidative Phosphorylation ──────────────
  ctx.fillStyle = 'rgba(96,192,144,0.18)';
  ctx.fillRect(w * 0.68, h * 0.08, w * 0.30, h * 0.85);
  ctx.strokeStyle = colors.etc.dark;
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.68, h * 0.08, w * 0.30, h * 0.85);
  ctx.fillStyle = colors.etc.dark;
  ctx.font = `bold ${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('ETC + Ox. Phos.', w * 0.83, h * 0.13);
  ctx.font = `italic ${w * 0.024}px Arial`;
  ctx.fillText('(Inner Mito. Membrane)', w * 0.83, h * 0.18);

  // Membrane band
  ctx.fillStyle = colors.etc.base;
  ctx.fillRect(w * 0.70, h * 0.22, w * 0.26, h * 0.35);
  ctx.strokeStyle = colors.etc.dark;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(w * 0.70, h * 0.22, w * 0.26, h * 0.35);

  // Complex labels I–IV + ATP synthase
  const complexes = [
    { label: 'I', x: w * 0.725, sublabel: 'NADH\ndehy.' },
    { label: 'II', x: w * 0.763, sublabel: 'Succ.\ndeh.' },
    { label: 'III', x: w * 0.801, sublabel: 'Cyt bc₁' },
    { label: 'IV', x: w * 0.839, sublabel: 'Cyt c\nox.' },
    { label: 'V', x: w * 0.90, sublabel: 'ATP\nsyn.' },
  ];

  complexes.forEach(({ label, x, sublabel }) => {
    const isV = label === 'V';
    ctx.fillStyle = isV ? 'rgba(240,192,64,0.85)' : colors.etc.dark;
    ctx.beginPath();
    ctx.rect(x - w * 0.016, isV ? h * 0.26 : h * 0.24, w * 0.032, isV ? h * 0.27 : h * 0.31);
    ctx.fill();
    ctx.strokeStyle = isV ? 'rgba(180,120,0,0.8)' : 'rgba(20,100,60,0.8)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${w * 0.026}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, x, h * 0.285 + (isV ? h * 0.02 : 0));
    ctx.fillStyle = '#000';
    ctx.font = `${w * 0.020}px Arial`;
    sublabel.split('\n').forEach((line, li) => {
      ctx.fillText(line, x, h * 0.60 + li * h * 0.03);
    });
  });

  // Electron flow arrows
  ctx.strokeStyle = 'rgba(200,80,80,0.8)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.70, h * 0.26);
  ctx.lineTo(w * 0.875, h * 0.26);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.87, h * 0.24);
  ctx.lineTo(w * 0.875, h * 0.26);
  ctx.lineTo(w * 0.87, h * 0.28);
  ctx.stroke();
  ctx.fillStyle = 'rgba(200,80,80,0.8)';
  ctx.font = `${w * 0.022}px Arial`;
  ctx.fillText('e⁻ flow', w * 0.785, h * 0.24);

  // H+ pumping arrows
  ctx.strokeStyle = 'rgba(0,100,200,0.7)';
  ctx.lineWidth = 1.5;
  [w * 0.725, w * 0.801, w * 0.839].forEach(cx => {
    ctx.beginPath();
    ctx.moveTo(cx, h * 0.38);
    ctx.lineTo(cx, h * 0.22);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.01, h * 0.24);
    ctx.lineTo(cx, h * 0.22);
    ctx.lineTo(cx + w * 0.01, h * 0.24);
    ctx.stroke();
  });
  ctx.fillStyle = 'rgba(0,100,200,0.75)';
  ctx.font = `${w * 0.022}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('H⁺ pumped out', w * 0.775, h * 0.20);

  // H2O + O2 sink
  ctx.fillStyle = 'rgba(0,160,0,0.7)';
  ctx.font = `${w * 0.024}px Arial`;
  ctx.fillText('O₂ + 4H⁺ → 2H₂O', w * 0.83, h * 0.68);

  // ATP synthase output arrow
  ctx.strokeStyle = 'rgba(180,120,0,0.8)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.90, h * 0.53);
  ctx.lineTo(w * 0.90, h * 0.65);
  ctx.stroke();

  // Large ATP yield
  ctx.fillStyle = 'rgba(0,120,0,0.15)';
  ctx.fillRect(w * 0.70, h * 0.72, w * 0.26, h * 0.14);
  ctx.fillStyle = 'rgba(0,120,0,0.9)';
  ctx.font = `bold ${w * 0.03}px Arial`;
  ctx.fillText('~32 ATP', w * 0.83, h * 0.78);
  ctx.font = `${w * 0.024}px Arial`;
  ctx.fillText('(Oxidative Phos.)', w * 0.83, h * 0.83);

  // Stage arrows between boxes
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2.5;
  [[w * 0.32, h * 0.50, w * 0.35, h * 0.50],
   [w * 0.65, h * 0.50, w * 0.68, h * 0.50]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x2 - w * 0.015, y2 - h * 0.015);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2 - w * 0.015, y2 + h * 0.015);
    ctx.stroke();
  });

  // Overall equation
  ctx.fillStyle = 'rgba(0,0,0,0.75)';
  ctx.font = `bold ${w * 0.028}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~36 ATP', w / 2, h * 0.97);
}

static drawCompletePhotosynthesis(ctx, colors, width, height) {
  const w = width, h = height;

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Photosynthesis', w / 2, h * 0.05);

  // ── Thylakoid membrane (top half) ────────────────────────
  ctx.fillStyle = 'rgba(32,136,32,0.12)';
  ctx.fillRect(w * 0.02, h * 0.08, w * 0.96, h * 0.44);
  ctx.strokeStyle = colors.thylakoid.dark;
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.02, h * 0.08, w * 0.96, h * 0.44);
  ctx.fillStyle = colors.thylakoid.dark;
  ctx.font = `bold ${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Thylakoid Membrane — Light Reactions', w / 2, h * 0.13);

  // Membrane band
  ctx.fillStyle = 'rgba(32,136,32,0.4)';
  ctx.fillRect(w * 0.04, h * 0.28, w * 0.92, h * 0.08);

  // Photosystem II
  const ps2x = w * 0.18;
  ctx.fillStyle = 'rgba(240,160,32,0.85)';
  ctx.beginPath();
  ctx.roundRect(ps2x - w * 0.065, h * 0.26, w * 0.13, h * 0.12, [5]);
  ctx.fill();
  ctx.strokeStyle = colors.photosystem.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.028}px Arial`;
  ctx.fillText('PS II', ps2x, h * 0.335);
  ctx.font = `${w * 0.022}px Arial`;
  ctx.fillText('P680', ps2x, h * 0.363);

  // Water splitting
  ctx.fillStyle = 'rgba(0,120,200,0.8)';
  ctx.font = `${w * 0.024}px Arial`;
  ctx.fillText('2H₂O → O₂ + 4H⁺ + 4e⁻', ps2x, h * 0.21);
  ctx.strokeStyle = 'rgba(0,120,200,0.7)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(ps2x, h * 0.22);
  ctx.lineTo(ps2x, h * 0.26);
  ctx.stroke();

  // Plastoquinone (electron shuttle)
  ctx.fillStyle = 'rgba(180,100,200,0.7)';
  ctx.beginPath();
  ctx.arc(w * 0.33, h * 0.32, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.022}px Arial`;
  ctx.fillText('PQ', w * 0.33, h * 0.323);
  ctx.fillText('e⁻', w * 0.33, h * 0.28);

  // Complex b6f
  ctx.fillStyle = 'rgba(100,180,100,0.75)';
  ctx.beginPath();
  ctx.roundRect(w * 0.40, h * 0.26, w * 0.10, h * 0.12, [4]);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.024}px Arial`;
  ctx.fillText('b6f', w * 0.45, h * 0.335);

  // H+ arrow from b6f
  ctx.strokeStyle = 'rgba(0,100,200,0.7)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.45, h * 0.26);
  ctx.lineTo(w * 0.45, h * 0.18);
  ctx.stroke();
  ctx.fillStyle = 'rgba(0,100,200,0.8)';
  ctx.font = `${w * 0.024}px Arial`;
  ctx.fillText('H⁺', w * 0.47, h * 0.22);

  // Plastocyanin
  ctx.fillStyle = 'rgba(100,180,220,0.7)';
  ctx.beginPath();
  ctx.arc(w * 0.57, h * 0.32, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.022}px Arial`;
  ctx.fillText('PC', w * 0.57, h * 0.323);

  // Photosystem I
  const ps1x = w * 0.70;
  ctx.fillStyle = 'rgba(240,160,32,0.85)';
  ctx.beginPath();
  ctx.roundRect(ps1x - w * 0.065, h * 0.26, w * 0.13, h * 0.12, [5]);
  ctx.fill();
  ctx.strokeStyle = colors.photosystem.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.028}px Arial`;
  ctx.fillText('PS I', ps1x, h * 0.335);
  ctx.font = `${w * 0.022}px Arial`;
  ctx.fillText('P700', ps1x, h * 0.363);

  // Ferredoxin → NADP reductase
  ctx.fillStyle = 'rgba(180,100,80,0.7)';
  ctx.beginPath();
  ctx.roundRect(w * 0.82, h * 0.26, w * 0.12, h * 0.12, [4]);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.022}px Arial`;
  ctx.fillText('NADP⁺', w * 0.88, h * 0.32);
  ctx.fillText('→ NADPH', w * 0.88, h * 0.35);

  // ATP synthase in thylakoid
  ctx.fillStyle = 'rgba(240,192,64,0.75)';
  ctx.beginPath();
  ctx.roundRect(w * 0.04, h * 0.24, w * 0.06, h * 0.16, [4]);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.022}px Arial`;
  ctx.fillText('ATP', w * 0.07, h * 0.32);
  ctx.fillText('syn.', w * 0.07, h * 0.35);
  ctx.fillStyle = 'rgba(240,192,64,0.8)';
  ctx.font = `${w * 0.024}px Arial`;
  ctx.fillText('ADP+Pᵢ→ATP', w * 0.07, h * 0.40);

  // Light arrows hitting PS I and PS II
  ctx.strokeStyle = 'rgba(255,220,0,0.9)';
  ctx.lineWidth = 2;
  [[ps2x, 0.14], [ps1x, 0.14]].forEach(([px, starty]) => {
    ctx.beginPath();
    ctx.moveTo(px, h * starty);
    ctx.lineTo(px, h * 0.26);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(px - w * 0.015, h * 0.245);
    ctx.lineTo(px, h * 0.26);
    ctx.lineTo(px + w * 0.015, h * 0.245);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,200,0,0.9)';
    ctx.font = `bold ${w * 0.024}px Arial`;
    ctx.fillText('Light', px, h * 0.16);
  });

  // Electron flow arrows
  ctx.strokeStyle = 'rgba(200,80,80,0.8)';
  ctx.lineWidth = 2;
  const eflow = [
    [ps2x + w * 0.065, h * 0.32, w * 0.33 - w * 0.025, h * 0.32],
    [w * 0.33 + w * 0.025, h * 0.32, w * 0.40, h * 0.32],
    [w * 0.50, h * 0.32, w * 0.57 - w * 0.025, h * 0.32],
    [w * 0.57 + w * 0.025, h * 0.32, ps1x - w * 0.065, h * 0.32],
    [ps1x + w * 0.065, h * 0.32, w * 0.82, h * 0.32],
  ];
  eflow.forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    const angle = Math.atan2(y2 - y1, x2 - x1);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - w * 0.015 * Math.cos(angle - 0.5), y2 - h * 0.015 * Math.sin(angle - 0.5));
    ctx.lineTo(x2 - w * 0.015 * Math.cos(angle + 0.5), y2 - h * 0.015 * Math.sin(angle + 0.5));
    ctx.closePath();
    ctx.fillStyle = 'rgba(200,80,80,0.8)';
    ctx.fill();
  });

  // Products summary
  ctx.fillStyle = 'rgba(240,192,64,0.8)';
  ctx.font = `bold ${w * 0.026}px Arial`;
  ctx.fillText('Outputs: ATP + NADPH + O₂', w / 2, h * 0.49);

  // ── Stroma — Calvin Cycle (bottom half) ───────────────────
  ctx.fillStyle = 'rgba(144,200,64,0.12)';
  ctx.fillRect(w * 0.02, h * 0.54, w * 0.96, h * 0.43);
  ctx.strokeStyle = colors.calvin.dark;
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.02, h * 0.54, w * 0.96, h * 0.43);
  ctx.fillStyle = colors.calvin.dark;
  ctx.font = `bold ${w * 0.03}px Arial`;
  ctx.fillText('Stroma — Calvin Cycle (Dark Reactions)', w / 2, h * 0.59);

  // Calvin cycle circle
  const cc_cx = w * 0.38, cc_cy = h * 0.76, cc_r = w * 0.14;
  ctx.strokeStyle = colors.calvin.base;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cc_cx, cc_cy, cc_r, 0, Math.PI * 2);
  ctx.stroke();

  // Arrow direction
  ctx.fillStyle = colors.calvin.dark;
  const ccArrow = -Math.PI / 6;
  ctx.beginPath();
  ctx.moveTo(cc_cx + Math.cos(ccArrow) * cc_r, cc_cy + Math.sin(ccArrow) * cc_r);
  ctx.lineTo(cc_cx + Math.cos(ccArrow + 0.3) * (cc_r - w * 0.02), cc_cy + Math.sin(ccArrow + 0.3) * (cc_r - w * 0.02));
  ctx.lineTo(cc_cx + Math.cos(ccArrow - 0.15) * (cc_r - w * 0.02), cc_cy + Math.sin(ccArrow - 0.15) * (cc_r - w * 0.02));
  ctx.closePath();
  ctx.fill();

  // Calvin steps
  const calvinSteps = [
    { label: 'CO₂ + RuBP', a: -Math.PI / 2, color: 'rgba(144,200,64,0.8)' },
    { label: '3-PGA (×2)', a: -Math.PI / 2 + (2 * Math.PI) / 3, color: 'rgba(100,180,64,0.8)' },
    { label: 'G3P (×2)', a: -Math.PI / 2 + (4 * Math.PI) / 3, color: 'rgba(60,160,40,0.85)' },
  ];
  calvinSteps.forEach(({ label, a, color: sc }) => {
    const sx = cc_cx + Math.cos(a) * cc_r;
    const sy = cc_cy + Math.sin(a) * cc_r;
    ctx.fillStyle = sc;
    ctx.beginPath();
    ctx.arc(sx, sy, w * 0.026, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = colors.calvin.dark;
    ctx.lineWidth = 1;
    ctx.stroke();
    const lx = cc_cx + Math.cos(a) * (cc_r + w * 0.065);
    const ly = cc_cy + Math.sin(a) * (cc_r + w * 0.065);
    ctx.fillStyle = '#000';
    ctx.font = `bold ${w * 0.026}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, lx, ly);
  });

  // RuBisCO
  ctx.fillStyle = 'rgba(100,180,64,0.6)';
  ctx.beginPath();
  ctx.arc(cc_cx, cc_cy, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.024}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('RuBisCO', cc_cx, cc_cy + h * 0.01);

  // Calvin inputs (ATP + NADPH from light reactions)
  const calvInX = w * 0.65;
  ctx.fillStyle = 'rgba(0,0,0,0.08)';
  ctx.fillRect(calvInX, h * 0.60, w * 0.30, h * 0.33);
  ctx.strokeStyle = 'rgba(0,0,0,0.2)';
  ctx.lineWidth = 1;
  ctx.strokeRect(calvInX, h * 0.60, w * 0.30, h * 0.33);

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.028}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Calvin Cycle uses:', calvInX + w * 0.15, h * 0.65);

  [
    { text: '3 CO₂', color: 'rgba(180,80,0,0.8)' },
    { text: '9 ATP', color: 'rgba(240,160,0,0.8)' },
    { text: '6 NADPH', color: 'rgba(0,100,180,0.8)' },
  ].forEach(({ text, color: ic }, i) => {
    ctx.fillStyle = ic;
    ctx.font = `${w * 0.028}px Arial`;
    ctx.fillText(text, calvInX + w * 0.15, h * 0.71 + i * h * 0.06);
  });

  ctx.fillStyle = 'rgba(60,160,40,0.85)';
  ctx.font = `bold ${w * 0.03}px Arial`;
  ctx.fillText('→ 1 G3P', calvInX + w * 0.15, h * 0.88);
  ctx.font = `${w * 0.024}px Arial`;
  ctx.fillText('(Glucose building block)', calvInX + w * 0.15, h * 0.93);

  // Connector arrow: light reactions → calvin
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w / 2, h * 0.52);
  ctx.lineTo(w / 2, h * 0.54);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w / 2 - w * 0.015, h * 0.52);
  ctx.lineTo(w / 2, h * 0.54);
  ctx.lineTo(w / 2 + w * 0.015, h * 0.52);
  ctx.stroke();
  ctx.fillStyle = '#555';
  ctx.font = `italic ${w * 0.024}px Arial`;
  ctx.fillText('ATP + NADPH', w / 2 + w * 0.10, h * 0.53);

  // Overall equation
  ctx.fillStyle = 'rgba(0,0,0,0.75)';
  ctx.font = `bold ${w * 0.028}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂', w / 2, h * 0.975);
}

static drawCompleteCellSignaling(ctx, colors, width, height) {
  const w = width, h = height;

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cell Signaling Pathway', w / 2, h * 0.05);

  // ── Extracellular zone ────────────────────────────────────
  ctx.fillStyle = 'rgba(180,220,255,0.2)';
  ctx.fillRect(0, h * 0.07, w, h * 0.22);
  ctx.fillStyle = 'rgba(80,120,200,0.6)';
  ctx.font = `italic ${w * 0.028}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Extracellular', w * 0.02, h * 0.12);

  // ── Plasma membrane ───────────────────────────────────────
  ctx.fillStyle = 'rgba(230,200,140,0.7)';
  ctx.fillRect(0, h * 0.29, w, h * 0.08);
  ctx.strokeStyle = 'rgba(180,130,60,0.7)';
  ctx.lineWidth = 2;
  [h * 0.29, h * 0.37].forEach(y => {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  });
  ctx.fillStyle = 'rgba(100,80,40,0.5)';
  ctx.font = `italic ${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Plasma Membrane', w / 2, h * 0.338);

  // ── Cytoplasm zone ────────────────────────────────────────
  ctx.fillStyle = 'rgba(240,235,220,0.3)';
  ctx.fillRect(0, h * 0.37, w, h * 0.56);
  ctx.fillStyle = 'rgba(80,60,40,0.5)';
  ctx.font = `italic ${w * 0.028}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Cytoplasm', w * 0.02, h * 0.42);

  // Signal cascade: 5 steps in a flow
  const steps = [
    {
      x: w * 0.10, y: h * 0.16,
      label: '① Signal\n(Ligand)',
      color: 'rgba(255,80,80,0.85)',
      shape: 'circle', r: w * 0.055,
    },
    {
      x: w * 0.30, y: h * 0.325,
      label: '② Receptor\nActivation',
      color: 'rgba(150,80,220,0.85)',
      shape: 'rect', rw: w * 0.12, rh: h * 0.1,
    },
    {
      x: w * 0.50, y: h * 0.50,
      label: '③ G-Protein /\n2nd Messenger',
      color: 'rgba(80,180,80,0.85)',
      shape: 'circle', r: w * 0.065,
    },
    {
      x: w * 0.70, y: h * 0.65,
      label: '④ Kinase\nCascade',
      color: 'rgba(80,160,220,0.85)',
      shape: 'rect', rw: w * 0.12, rh: h * 0.1,
    },
    {
      x: w * 0.88, y: h * 0.82,
      label: '⑤ Cellular\nResponse',
      color: 'rgba(220,160,40,0.85)',
      shape: 'circle', r: w * 0.065,
    },
  ];

  // Draw connectors first
  for (let i = 0; i < steps.length - 1; i++) {
    const s = steps[i], t = steps[i + 1];
    ctx.strokeStyle = 'rgba(80,80,80,0.5)';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(t.x, t.y);
    ctx.stroke();
    ctx.setLineDash([]);
    // Arrowhead
    const angle = Math.atan2(t.y - s.y, t.x - s.x);
    const ax = t.x - w * 0.025 * Math.cos(angle);
    const ay = t.y - h * 0.025 * Math.sin(angle);
    ctx.fillStyle = 'rgba(80,80,80,0.6)';
    ctx.beginPath();
    ctx.moveTo(ax + w * 0.02 * Math.cos(angle), ay + h * 0.02 * Math.sin(angle));
    ctx.lineTo(ax + w * 0.02 * Math.cos(angle + 2.4), ay + h * 0.02 * Math.sin(angle + 2.4));
    ctx.lineTo(ax + w * 0.02 * Math.cos(angle - 2.4), ay + h * 0.02 * Math.sin(angle - 2.4));
    ctx.closePath();
    ctx.fill();
  }

  // Draw step nodes
  steps.forEach(({ x, y, label, color, shape, r, rw, rh }) => {
    ctx.fillStyle = color;
    if (shape === 'circle') {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.roundRect(x - rw / 2, y - rh / 2, rw, rh, [8]);
      ctx.fill();
    }
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${w * 0.026}px Arial`;
    ctx.textAlign = 'center';
    label.split('\n').forEach((line, li) => {
      ctx.fillText(line, x, y + (li - (label.split('\n').length - 1) / 2) * h * 0.036);
    });
  });

  // Second messengers detail box
  ctx.fillStyle = 'rgba(80,180,80,0.1)';
  ctx.beginPath();
  ctx.roundRect(w * 0.02, h * 0.52, w * 0.30, h * 0.18, [6]);
  ctx.fill();
  ctx.strokeStyle = 'rgba(80,180,80,0.5)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = 'rgba(40,140,40,0.8)';
  ctx.font = `bold ${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('2nd Messengers', w * 0.17, h * 0.57);
  ctx.font = `${w * 0.023}px Arial`;
  ['cAMP, IP₃', 'DAG, Ca²⁺', 'cGMP'].forEach((m, i) => {
    ctx.fillStyle = 'rgba(0,120,0,0.8)';
    ctx.fillText(m, w * 0.17, h * 0.605 + i * h * 0.032);
  });
  // Dashed line connecting to step 3
  ctx.strokeStyle = 'rgba(80,180,80,0.5)';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.32, h * 0.61);
  ctx.lineTo(w * 0.435, h * 0.50);
  ctx.stroke();
  ctx.setLineDash([]);

  // Nuclear response (gene expression)
  ctx.fillStyle = 'rgba(180,150,255,0.55)';
  ctx.beginPath();
  ctx.arc(w / 2, h * 0.83, w * 0.065, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(120,80,200,0.7)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Nucleus', w / 2, h * 0.828);
  ctx.fillText('(Gene exp.)', w / 2, h * 0.86);

  // Arrow from kinase to nucleus
  ctx.strokeStyle = 'rgba(80,160,220,0.5)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.70, h * 0.70);
  ctx.lineTo(w * 0.565, h * 0.80);
  ctx.stroke();
  ctx.setLineDash([]);

  // Feedback arrow
  ctx.strokeStyle = 'rgba(200,80,80,0.4)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.moveTo(w * 0.82, h * 0.82);
  ctx.bezierCurveTo(w * 0.95, h * 0.50, w * 0.95, h * 0.20, w * 0.20, h * 0.20);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(200,80,80,0.6)';
  ctx.font = `italic ${w * 0.024}px Arial`;
  ctx.fillText('Feedback', w * 0.90, h * 0.50);
}

static drawCompleteEndomembraneSystem(ctx, colors, width, height) {
  const w = width, h = height;

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Endomembrane System', w / 2, h * 0.05);

  // ── Nuclear Envelope → ER ─────────────────────────────────
  // Nuclear envelope
  ctx.fillStyle = 'rgba(120,90,200,0.2)';
  ctx.beginPath();
  ctx.arc(w * 0.14, h * 0.28, w * 0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(90,60,170,0.8)';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(w * 0.14, h * 0.28, w * 0.065, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.027}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Nuclear', w * 0.14, h * 0.27);
  ctx.fillText('Envelope', w * 0.14, h * 0.31);

  // Rough ER (connected to NE)
  ctx.strokeStyle = 'rgba(100,180,230,0.8)';
  ctx.lineWidth = 3;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(w * 0.22 + i * w * 0.03, h * 0.18);
    ctx.bezierCurveTo(
      w * 0.22 + i * w * 0.03, h * 0.18,
      w * 0.25 + i * w * 0.03, h * 0.30,
      w * 0.22 + i * w * 0.03, h * 0.38
    );
    ctx.stroke();
  }
  // Ribosomes on RER
  ctx.fillStyle = 'rgba(100,80,60,0.8)';
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(w * 0.215 + i * w * 0.03, h * 0.22 + (i % 2) * h * 0.04, w * 0.008, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(100,180,230,0.9)';
  ctx.font = `bold ${w * 0.026}px Arial`;
  ctx.fillText('Rough ER', w * 0.28, h * 0.14);

  // Smooth ER
  ctx.strokeStyle = 'rgba(80,160,220,0.6)';
  ctx.lineWidth = 2.5;
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI;
    ctx.beginPath();
    ctx.arc(w * 0.38, h * 0.30, w * 0.06 + i * w * 0.01, angle, angle + Math.PI * 0.8);
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(80,160,220,0.8)';
  ctx.font = `bold ${w * 0.026}px Arial`;
  ctx.fillText('Smooth ER', w * 0.38, h * 0.44);

  // ── ER → Vesicle budding ───────────────────────────────────
  ctx.fillStyle = 'rgba(180,200,230,0.7)';
  ctx.beginPath();
  ctx.arc(w * 0.47, h * 0.28, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(100,140,200,0.8)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#555';
  ctx.font = `${w * 0.022}px Arial`;
  ctx.fillText('COP II', w * 0.47, h * 0.24);
  ctx.fillText('vesicle', w * 0.47, h * 0.27);

  // Arrow
  ctx.strokeStyle = '#666';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.495, h * 0.28);
  ctx.lineTo(w * 0.52, h * 0.33);
  ctx.stroke();

  // ── Golgi Apparatus ───────────────────────────────────────
  const gx = w * 0.57, gy = h * 0.35;
  ctx.fillStyle = 'rgba(244,164,96,0.25)';
  ctx.fillRect(gx - w * 0.1, gy - h * 0.1, w * 0.2, h * 0.2);

  for (let i = 0; i < 6; i++) {
    const scale = 1 - i * 0.08;
    const yOff = i * h * 0.025;
    const isFirst = i === 0, isLast = i === 5;
    ctx.strokeStyle = isFirst ? 'rgba(200,100,0,0.8)' : isLast ? 'rgba(244,164,96,0.9)' : 'rgba(244,164,96,0.8)';
    ctx.lineWidth = isFirst || isLast ? 3 : 2;
    ctx.beginPath();
    ctx.ellipse(gx, gy - h * 0.08 + yOff, w * 0.09 * scale, h * 0.025, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.03}px Arial`;
  ctx.fillText('Golgi', gx, gy - h * 0.12);
  ctx.font = `${w * 0.024}px Arial`;
  ctx.fillText('cis', gx - w * 0.12, gy - h * 0.08);
  ctx.fillText('trans', gx - w * 0.12, gy + h * 0.06);

  // ── Golgi → various destinations ─────────────────────────
  const destinations = [
    { x: w * 0.75, y: h * 0.20, label: 'Secretory\nVesicle', color: 'rgba(200,200,255,0.8)', arrow: '→ Plasma\nMembrane' },
    { x: w * 0.78, y: h * 0.42, label: 'Lysosome', color: 'rgba(154,205,50,0.8)', arrow: '→ Digestion' },
    { x: w * 0.90, y: h * 0.30, label: 'Exocytosis\nVesicle', color: 'rgba(220,200,255,0.8)', arrow: '' },
  ];

  destinations.forEach(({ x, y, label, color, arrow }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, w * 0.045, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(100,80,180,0.7)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#000';
    ctx.font = `${w * 0.024}px Arial`;
    ctx.textAlign = 'center';
    label.split('\n').forEach((line, li) => ctx.fillText(line, x, y + h * 0.065 + li * h * 0.032));
    if (arrow) {
      ctx.fillStyle = 'rgba(100,80,180,0.7)';
      ctx.font = `italic ${w * 0.022}px Arial`;
      arrow.split('\n').forEach((line, li) => ctx.fillText(line, x, y + h * 0.13 + li * h * 0.028));
    }
    // Arrow from Golgi to destination
    ctx.strokeStyle = 'rgba(150,100,50,0.5)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(gx + w * 0.09, gy);
    ctx.lineTo(x - w * 0.045, y);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  // ── Plasma membrane at right edge ─────────────────────────
  ctx.fillStyle = 'rgba(230,190,120,0.5)';
  ctx.fillRect(w * 0.96, h * 0.10, w * 0.03, h * 0.55);
  ctx.strokeStyle = 'rgba(180,130,60,0.7)';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.96, h * 0.10, w * 0.03, h * 0.55);
  ctx.save();
  ctx.translate(w * 0.975, h * 0.375);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = 'rgba(120,80,40,0.8)';
  ctx.font = `bold ${w * 0.025}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Plasma Membrane', 0, 0);
  ctx.restore();

  // Exocytosis arrow to plasma membrane
  ctx.strokeStyle = 'rgba(200,100,200,0.7)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.945, h * 0.30);
  ctx.lineTo(w * 0.96, h * 0.30);
  ctx.stroke();

  // ── Retrograde transport arrow ─────────────────────────────
  ctx.strokeStyle = 'rgba(200,80,80,0.4)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.moveTo(gx - w * 0.09, gy - h * 0.05);
  ctx.bezierCurveTo(w * 0.40, h * 0.15, w * 0.30, h * 0.15, w * 0.31, h * 0.22);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(200,80,80,0.65)';
  ctx.font = `italic ${w * 0.023}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('COP I (retrograde)', w * 0.40, h * 0.13);

  // ── Flow summary at bottom ────────────────────────────────
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Flow: NE → RER → Smooth ER → Golgi (cis→trans) → Lysosome / Secretion / Plasma Membrane', w / 2, h * 0.96);
}

static drawCompleteProteinSynthesis(ctx, colors, width, height) {
  const w = width, h = height;

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Protein Synthesis', w / 2, h * 0.05);

  // ── TRANSCRIPTION (nucleus, top half) ─────────────────────
  ctx.fillStyle = 'rgba(120,90,200,0.12)';
  ctx.fillRect(w * 0.01, h * 0.07, w * 0.98, h * 0.40);
  ctx.strokeStyle = 'rgba(90,60,170,0.5)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(w * 0.01, h * 0.07, w * 0.98, h * 0.40);
  ctx.fillStyle = 'rgba(90,60,170,0.8)';
  ctx.font = `bold ${w * 0.03}px Arial`;
  ctx.fillText('TRANSCRIPTION (Nucleus)', w / 2, h * 0.12);

  // DNA double helix (simplified)
  const dnaStartX = w * 0.05, dnaY = h * 0.26, dnaLen = w * 0.45;
  for (let i = 0; i < 20; i++) {
    const t = i / 19;
    const x = dnaStartX + t * dnaLen;
    const y1 = dnaY + Math.sin(t * Math.PI * 4) * h * 0.055;
    const y2 = dnaY - Math.sin(t * Math.PI * 4) * h * 0.055;
    ctx.fillStyle = i % 2 === 0 ? 'rgba(80,120,220,0.8)' : 'rgba(220,80,80,0.8)';
    ctx.beginPath();
    ctx.arc(x, y1, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y2, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
    if (i < 19) {
      ctx.strokeStyle = 'rgba(150,150,150,0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2); ctx.stroke();
    }
  }
  // Strand labels
  ctx.fillStyle = 'rgba(80,120,220,0.8)';
  ctx.font = `${w * 0.026}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Template strand (3\'→5\')', dnaStartX, dnaY + h * 0.10);
  ctx.fillStyle = 'rgba(220,80,80,0.8)';
  ctx.fillText('Coding strand (5\'→3\')', dnaStartX, dnaY - h * 0.11);

  // RNA Polymerase
  const rnapX = w * 0.38;
  ctx.fillStyle = 'rgba(80,200,80,0.8)';
  ctx.beginPath();
  ctx.ellipse(rnapX, dnaY, w * 0.055, h * 0.085, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(40,160,40,0.8)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${w * 0.024}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('RNA', rnapX, dnaY - h * 0.01);
  ctx.fillText('Pol II', rnapX, dnaY + h * 0.03);

  // mRNA emerging
  ctx.strokeStyle = 'rgba(240,160,0,0.9)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(rnapX + w * 0.04, dnaY + h * 0.08);
  ctx.bezierCurveTo(rnapX + w * 0.08, dnaY + h * 0.14, rnapX + w * 0.18, dnaY + h * 0.14, rnapX + w * 0.22, dnaY + h * 0.08);
  ctx.stroke();
  ctx.fillStyle = 'rgba(200,120,0,0.8)';
  ctx.font = `bold ${w * 0.026}px Arial`;
  ctx.fillText('pre-mRNA', rnapX + w * 0.14, dnaY + h * 0.18);

  // mRNA processing
  const procX = w * 0.62;
  ctx.fillStyle = 'rgba(0,0,0,0.07)';
  ctx.beginPath();
  ctx.roundRect(procX, h * 0.14, w * 0.34, h * 0.30, [6]);
  ctx.fill();
  ctx.strokeStyle = 'rgba(100,100,100,0.3)';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `bold ${w * 0.026}px Arial`;
  ctx.fillText('mRNA Processing', procX + w * 0.17, h * 0.19);

  const procSteps = ["5' Cap added", 'Poly-A tail added', 'Introns spliced (spliceosome)', 'Exons joined'];
  procSteps.forEach((step, i) => {
    ctx.fillStyle = 'rgba(240,160,0,0.8)';
    ctx.beginPath();
    ctx.arc(procX + w * 0.03, h * 0.23 + i * h * 0.056, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.font = `${w * 0.024}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText(step, procX + w * 0.055, h * 0.234 + i * h * 0.056);
  });

  // Nuclear pore export
  ctx.strokeStyle = 'rgba(90,60,170,0.5)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(w / 2, h * 0.47);
  ctx.lineTo(w / 2, h * 0.49);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#333';
  ctx.font = `italic ${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Nuclear pore export ↓', w / 2, h * 0.49);

  // ── TRANSLATION (cytoplasm, bottom half) ──────────────────
  ctx.fillStyle = 'rgba(240,200,150,0.12)';
  ctx.fillRect(w * 0.01, h * 0.50, w * 0.98, h * 0.47);
  ctx.strokeStyle = 'rgba(180,130,60,0.5)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(w * 0.01, h * 0.50, w * 0.98, h * 0.47);
  ctx.fillStyle = 'rgba(180,130,60,0.8)';
  ctx.font = `bold ${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('TRANSLATION (Cytoplasm / ER)', w / 2, h * 0.55);

  // mRNA strand (horizontal)
  const mrnaY = h * 0.68;
  ctx.strokeStyle = 'rgba(240,160,0,0.8)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.04, mrnaY);
  ctx.lineTo(w * 0.96, mrnaY);
  ctx.stroke();
  // Codons
  for (let i = 0; i < 18; i++) {
    const cx = w * 0.04 + i * w * 0.052;
    ctx.fillStyle = i % 3 === 0 ? 'rgba(240,160,0,0.6)' : 'rgba(200,120,0,0.4)';
    ctx.fillRect(cx, mrnaY - h * 0.012, w * 0.048, h * 0.024);
    ctx.strokeStyle = 'rgba(160,80,0,0.3)';
    ctx.lineWidth = 0.5;
    ctx.strokeRect(cx, mrnaY - h * 0.012, w * 0.048, h * 0.024);
  }
  ctx.fillStyle = 'rgba(160,80,0,0.7)';
  ctx.font = `italic ${w * 0.024}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText("5'", w * 0.01, mrnaY + h * 0.01);
  ctx.textAlign = 'right';
  ctx.fillText("3'", w * 0.99, mrnaY + h * 0.01);

  // Ribosome (large + small subunit)
  const ribX = w * 0.40;
  // Small subunit (40S)
  ctx.fillStyle = 'rgba(120,100,80,0.8)';
  ctx.beginPath();
  ctx.ellipse(ribX, mrnaY - h * 0.075, w * 0.095, h * 0.055, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(60,40,20,0.7)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${w * 0.024}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('40S', ribX, mrnaY - h * 0.072);
  // Large subunit (60S)
  ctx.fillStyle = 'rgba(90,75,60,0.85)';
  ctx.beginPath();
  ctx.ellipse(ribX, mrnaY - h * 0.16, w * 0.115, h * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(60,40,20,0.7)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${w * 0.024}px Arial`;
  ctx.fillText('60S', ribX, mrnaY - h * 0.157);
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.024}px Arial`;
  ctx.fillText('Ribosome', ribX, mrnaY - h * 0.26);

  // tRNA with amino acid
  const trnaPositions = [
    { x: ribX - w * 0.08, aa: 'Met', color: 'rgba(100,200,200,0.8)' },
    { x: ribX,            aa: 'Ala', color: 'rgba(100,180,255,0.8)' },
    { x: ribX + w * 0.08, aa: 'Gly', color: 'rgba(200,100,200,0.8)' },
  ];
  trnaPositions.forEach(({ x, aa, color }) => {
    // tRNA clover shape (simplified inverted Y)
    ctx.strokeStyle = color.replace('0.8', '0.9');
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, mrnaY - h * 0.085);
    ctx.lineTo(x, mrnaY - h * 0.22);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, mrnaY - h * 0.16);
    ctx.lineTo(x - w * 0.03, mrnaY - h * 0.22);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, mrnaY - h * 0.16);
    ctx.lineTo(x + w * 0.03, mrnaY - h * 0.22);
    ctx.stroke();
    // Amino acid
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, mrnaY - h * 0.245, w * 0.022, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.font = `${w * 0.02}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(aa, x, mrnaY - h * 0.24);
  });

  // Growing polypeptide chain
  ctx.strokeStyle = 'rgba(200,100,200,0.7)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const px = w * 0.08 + i * w * 0.038;
    const py = mrnaY - h * 0.30 - (i % 2) * h * 0.04;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.stroke();
  // AA dots on polypeptide
  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = `hsl(${200 + i * 20},70%,60%)`;
    ctx.beginPath();
    ctx.arc(w * 0.08 + i * w * 0.038, mrnaY - h * 0.30 - (i % 2) * h * 0.04, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.024}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Polypeptide chain', w * 0.04, mrnaY - h * 0.38);

  // Stop/Start codons
  ctx.fillStyle = 'rgba(220,50,50,0.7)';
  ctx.font = `bold ${w * 0.024}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('AUG (Start)', w * 0.10, mrnaY + h * 0.05);
  ctx.fillText('UAA (Stop)', w * 0.88, mrnaY + h * 0.05);

  // Overall summary
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.font = `bold ${w * 0.026}px Arial`;
  ctx.fillText('DNA → pre-mRNA → mRNA (processing) → Polypeptide → Protein', w / 2, h * 0.975);
}

static drawCompleteCytoskeleton(ctx, colors, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cytoskeleton', w / 2, h * 0.05);

  // Cell outline
  ctx.fillStyle = 'rgba(245,235,220,0.5)';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.46, h * 0.43, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(180,140,100,0.6)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // ── Microtubules ──────────────────────────────────────────
  ctx.strokeStyle = 'rgba(0,160,0,0.75)';
  ctx.lineWidth = 3;
  const mtAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  mtAngles.forEach(deg => {
    const rad = (deg * Math.PI) / 180;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.cos(rad) * w * 0.43, centerY + Math.sin(rad) * h * 0.40);
    ctx.stroke();
    // Plus end cap
    ctx.fillStyle = 'rgba(0,200,0,0.8)';
    ctx.beginPath();
    ctx.arc(centerX + Math.cos(rad) * w * 0.43, centerY + Math.sin(rad) * h * 0.40, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  });

  // MTOC / Centrosome
  ctx.fillStyle = 'rgba(180,140,255,0.8)';
  ctx.beginPath();
  ctx.arc(centerX, centerY, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(120,80,220,0.9)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${w * 0.024}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('MTOC', centerX, centerY + h * 0.01);

  // ── Actin microfilaments ──────────────────────────────────
  ctx.strokeStyle = 'rgba(220,50,50,0.7)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 14; i++) {
    const a1 = (i / 14) * Math.PI * 2;
    const a2 = a1 + Math.PI * 0.7;
    ctx.beginPath();
    ctx.moveTo(centerX + Math.cos(a1) * w * 0.40, centerY + Math.sin(a1) * h * 0.37);
    const cp1x = centerX + Math.cos(a1 + 0.2) * w * 0.28;
    const cp1y = centerY + Math.sin(a1 + 0.2) * h * 0.26;
    const cp2x = centerX + Math.cos(a2 - 0.2) * w * 0.28;
    const cp2y = centerY + Math.sin(a2 - 0.2) * h * 0.26;
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y,
      centerX + Math.cos(a2) * w * 0.40, centerY + Math.sin(a2) * h * 0.37);
    ctx.stroke();
  }

  // Actin cortex ring (sub-membrane network)
  ctx.strokeStyle = 'rgba(220,50,50,0.35)';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.42, h * 0.39, 0, 0, Math.PI * 2);
  ctx.stroke();

  // ── Intermediate filaments ────────────────────────────────
  ctx.strokeStyle = 'rgba(200,130,0,0.65)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 8; i++) {
    const a1 = (i / 8) * Math.PI * 2 + 0.2;
    const a2 = a1 + Math.PI * 0.65;
    ctx.beginPath();
    ctx.moveTo(centerX + Math.cos(a1) * w * 0.35, centerY + Math.sin(a1) * h * 0.32);
    ctx.bezierCurveTo(
      centerX + Math.cos(a1 + 0.3) * w * 0.18, centerY + Math.sin(a1 + 0.3) * h * 0.17,
      centerX + Math.cos(a2 - 0.3) * w * 0.18, centerY + Math.sin(a2 - 0.3) * h * 0.17,
      centerX + Math.cos(a2) * w * 0.35, centerY + Math.sin(a2) * h * 0.32
    );
    ctx.stroke();
  }

  // Nucleus (with nuclear lamina intermediate filaments)
  ctx.fillStyle = 'rgba(180,160,240,0.4)';
  ctx.beginPath();
  ctx.arc(centerX + w * 0.06, centerY - h * 0.05, w * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(120,80,200,0.7)';
  ctx.lineWidth = 2;
  ctx.stroke();
  // Lamina ring
  ctx.strokeStyle = 'rgba(200,130,0,0.6)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(centerX + w * 0.06, centerY - h * 0.05, w * 0.085, 0, Math.PI * 2);
  ctx.stroke();

  // ── Legend ────────────────────────────────────────────────
  const legend = [
    { color: 'rgba(0,160,0,0.8)',    thick: 3,   label: 'Microtubules (~25 nm)' },
    { color: 'rgba(220,50,50,0.8)',  thick: 1.5, label: 'Actin microfilaments (~7 nm)' },
    { color: 'rgba(200,130,0,0.8)',  thick: 2,   label: 'Intermediate filaments (~10 nm)' },
  ];
  legend.forEach(({ color, thick, label }, i) => {
    const ly = h * 0.88 + i * h * 0.038;
    ctx.strokeStyle = color;
    ctx.lineWidth = thick;
    ctx.beginPath();
    ctx.moveTo(w * 0.04, ly);
    ctx.lineTo(w * 0.11, ly);
    ctx.stroke();
    ctx.fillStyle = '#000';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText(label, w * 0.13, ly + h * 0.005);
  });
}

static drawCompleteProkaryoticCell(ctx, colors, width, height) {
  const w = width, h = height;
  const centerX = w / 2, centerY = h / 2;

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Prokaryotic Cell (Bacterium)', w / 2, h * 0.05);

  // ── Cell wall layers ──────────────────────────────────────
  // Outer membrane (Gram-negative)
  ctx.fillStyle = 'rgba(180,200,100,0.4)';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.46, h * 0.36, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(120,150,40,0.8)';
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = 'rgba(120,150,40,0.7)';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Outer membrane (LPS)', centerX - w * 0.44, centerY - h * 0.28);

  // Peptidoglycan (cell wall)
  ctx.fillStyle = 'rgba(160,180,80,0.5)';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.42, h * 0.33, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(100,130,20,0.7)';
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.fillStyle = 'rgba(100,130,20,0.7)';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Peptidoglycan', centerX - w * 0.40, centerY - h * 0.22);

  // Plasma membrane
  ctx.fillStyle = 'rgba(230,200,140,0.55)';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.38, h * 0.30, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(180,130,60,0.8)';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = 'rgba(150,100,40,0.7)';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Plasma membrane', centerX - w * 0.36, centerY - h * 0.16);

  // Cytoplasm
  ctx.fillStyle = 'rgba(245,240,220,0.6)';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.36, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── Nucleoid (circular DNA) ───────────────────────────────
  ctx.strokeStyle = 'rgba(60,80,200,0.7)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(centerX, centerY, w * 0.14, 0, Math.PI * 2);
  ctx.stroke();
  // DNA supercoiling
  ctx.strokeStyle = 'rgba(60,80,200,0.4)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(
      centerX + Math.cos(a) * w * 0.08,
      centerY + Math.sin(a) * h * 0.08,
      w * 0.04, 0, Math.PI * 2
    );
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(60,80,200,0.7)';
  ctx.font = `bold ${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Nucleoid', centerX, centerY + h * 0.01);
  ctx.font = `${w * 0.022}px Arial`;
  ctx.fillText('(Circular DNA)', centerX, centerY + h * 0.055);

  // ── Plasmids ──────────────────────────────────────────────
  ctx.strokeStyle = 'rgba(120,60,180,0.7)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(centerX + w * 0.22, centerY - h * 0.12, w * 0.03, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(centerX - w * 0.20, centerY + h * 0.10, w * 0.025, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = 'rgba(120,60,180,0.8)';
  ctx.font = `${w * 0.024}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Plasmid', centerX + w * 0.22, centerY - h * 0.18);

  // ── Ribosomes (70S) ───────────────────────────────────────
  ctx.fillStyle = 'rgba(80,60,40,0.7)';
  const riboSeed = [0.1,0.4,0.7,0.2,0.6,0.9,0.3,0.5,0.8,0.15,0.55,0.85,0.25,0.65];
  for (let i = 0; i < 14; i++) {
    const a = riboSeed[i] * Math.PI * 2;
    const r = w * 0.16 + riboSeed[(i + 4) % 14] * w * 0.17;
    ctx.beginPath();
    ctx.arc(
      centerX + Math.cos(a) * r,
      centerY + Math.sin(a) * r * 0.75,
      w * 0.009, 0, Math.PI * 2
    );
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(80,60,40,0.7)';
  ctx.font = `${w * 0.023}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('70S Ribosomes', centerX + w * 0.18, centerY + h * 0.22);

  // ── Inclusion bodies ──────────────────────────────────────
  ctx.fillStyle = 'rgba(255,180,0,0.65)';
  ctx.beginPath();
  ctx.arc(centerX - w * 0.14, centerY + h * 0.10, w * 0.028, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(180,120,0,0.6)';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = 'rgba(180,120,0,0.8)';
  ctx.font = `${w * 0.023}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Inclusion', centerX - w * 0.14, centerY + h * 0.19);
  ctx.fillText('body', centerX - w * 0.14, centerY + h * 0.23);

  // ── Flagellum ─────────────────────────────────────────────
  ctx.strokeStyle = 'rgba(100,80,220,0.7)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(centerX + w * 0.46, centerY);
  for (let i = 1; i <= 20; i++) {
    const t = i / 20;
    ctx.lineTo(
      centerX + w * 0.46 + t * w * 0.30,
      centerY + Math.sin(t * Math.PI * 4) * h * 0.08
    );
  }
  ctx.stroke();
  // Basal body
  ctx.fillStyle = 'rgba(80,60,180,0.7)';
  ctx.beginPath();
  ctx.arc(centerX + w * 0.44, centerY, w * 0.018, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Flagellum', centerX + w * 0.54, centerY - h * 0.10);

  // ── Pili ──────────────────────────────────────────────────
  ctx.strokeStyle = 'rgba(200,100,100,0.6)';
  ctx.lineWidth = 1.5;
  [[-0.3, -0.28], [-0.1, -0.34], [0.15, -0.32], [-0.42, 0.05], [-0.4, -0.1]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.moveTo(centerX + dx * w, centerY + dy * h);
    ctx.lineTo(centerX + dx * w * 1.4, centerY + dy * h * 1.4);
    ctx.stroke();
  });
  ctx.fillStyle = 'rgba(180,70,70,0.7)';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Pili', centerX - w * 0.35, centerY - h * 0.30);

  // ── Capsule (outermost) ───────────────────────────────────
  ctx.strokeStyle = 'rgba(200,220,150,0.5)';
  ctx.lineWidth = 6;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, w * 0.48, h * 0.40, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(160,180,80,0.6)';
  ctx.font = `italic ${w * 0.025}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Capsule (optional)', w * 0.02, h * 0.68);

  // Size label
  ctx.fillStyle = '#555';
  ctx.font = `italic ${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('~1–10 μm | No membrane-bound organelles | 70S ribosomes', w / 2, h * 0.96);
}

static drawCompleteViralInfection(ctx, colors, width, height) {
  const w = width, h = height;

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Viral Infection Cycle (Lytic)', w / 2, h * 0.05);

  // Host cell body
  ctx.fillStyle = 'rgba(200,225,255,0.4)';
  ctx.beginPath();
  ctx.ellipse(w * 0.55, h * 0.60, w * 0.40, h * 0.35, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(80,120,200,0.7)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Host nucleus
  ctx.fillStyle = 'rgba(180,150,250,0.4)';
  ctx.beginPath();
  ctx.arc(w * 0.55, h * 0.60, w * 0.10, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(120,80,200,0.7)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.024}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Host Nucleus', w * 0.55, h * 0.60);

  // ── Steps ─────────────────────────────────────────────────
  const steps = [
    {
      num: '①', label: 'Attachment',
      x: w * 0.08, y: h * 0.18,
      desc: 'Viral surface\nproteins bind\nhost receptor',
    },
    {
      num: '②', label: 'Penetration',
      x: w * 0.25, y: h * 0.40,
      desc: 'Viral genome\ninjected into\ncytoplasm',
    },
    {
      num: '③', label: 'Biosynthesis',
      x: w * 0.52, y: h * 0.28,
      desc: 'Viral genes\nhijack host\nribosomes',
    },
    {
      num: '④', label: 'Assembly',
      x: w * 0.75, y: h * 0.48,
      desc: 'New virions\nassembled in\ncytoplasm',
    },
    {
      num: '⑤', label: 'Release',
      x: w * 0.88, y: h * 0.25,
      desc: 'Cell lyses;\nvirions released\nto infect others',
    },
  ];

  // Draw flow path
  ctx.strokeStyle = 'rgba(200,80,80,0.5)';
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(steps[0].x, steps[0].y);
  steps.forEach(({ x, y }) => ctx.lineTo(x, y));
  ctx.stroke();
  ctx.setLineDash([]);

  steps.forEach(({ num, label, x, y, desc }) => {
    // Connector arrowhead
    ctx.fillStyle = 'rgba(200,80,80,0.6)';

    // Step bubble
    ctx.fillStyle = 'rgba(255,220,200,0.9)';
    ctx.beginPath();
    ctx.arc(x, y, w * 0.052, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(200,80,80,0.7)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = 'rgba(180,40,0,0.9)';
    ctx.font = `bold ${w * 0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(num, x, y - h * 0.012);
    ctx.fillStyle = '#000';
    ctx.font = `bold ${w * 0.024}px Arial`;
    ctx.fillText(label, x, y + h * 0.025);

    // Description below bubble
    ctx.font = `${w * 0.021}px Arial`;
    ctx.fillStyle = '#333';
    desc.split('\n').forEach((line, li) => {
      ctx.fillText(line, x, y + h * 0.075 + li * h * 0.032);
    });
  });

  // Virus particle drawings at step 1 (incoming)
  const drawVirus = (vx, vy, scale, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(vx, vy, w * 0.03 * scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(180,0,0,0.7)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // Spikes
    for (let i = 0; i < 8; i++) {
      const sa = (i / 8) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(vx + Math.cos(sa) * w * 0.03 * scale, vy + Math.sin(sa) * w * 0.03 * scale);
      ctx.lineTo(vx + Math.cos(sa) * w * 0.045 * scale, vy + Math.sin(sa) * w * 0.045 * scale);
      ctx.strokeStyle = 'rgba(200,50,50,0.8)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    // Viral genome dot
    ctx.fillStyle = 'rgba(80,0,120,0.7)';
    ctx.beginPath();
    ctx.arc(vx, vy, w * 0.012 * scale, 0, Math.PI * 2);
    ctx.fill();
  };

  // Viruses at various stages
  drawVirus(w * 0.07, h * 0.12, 1, 'rgba(255,120,120,0.8)');
  drawVirus(w * 0.14, h * 0.10, 0.8, 'rgba(255,120,120,0.7)');
  // Released viruses at step 5
  [[-0.06, -0.08], [0.06, -0.10], [0.12, -0.04]].forEach(([dx, dy]) => {
    drawVirus(steps[4].x + dx * w, steps[4].y + dy * h, 0.75, 'rgba(255,100,100,0.8)');
  });

  // Receptor on host cell surface near step 1 arrow end
  ctx.fillStyle = 'rgba(100,180,255,0.8)';
  ctx.beginPath();
  ctx.arc(w * 0.17, h * 0.46, w * 0.018, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.022}px Arial`;
  ctx.fillText('Receptor', w * 0.17, h * 0.50);

  // Cycle type label
  ctx.fillStyle = 'rgba(200,50,50,0.7)';
  ctx.font = `bold italic ${w * 0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Lytic Cycle: attachment → penetration → biosynthesis → assembly → lysis/release', w / 2, h * 0.96);
}

static drawCompleteDNAReplication(ctx, colors, width, height) {
  const w = width, h = height;

  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('DNA Replication (Semi-Conservative)', w / 2, h * 0.05);

  const drawHelix = (startX, startY, length, label, colors2, showFork) => {
    const numBases = 24;
    const amplitude = h * 0.055;

    for (let s = 0; s < 2; s++) {
      const phase = s === 0 ? 0 : Math.PI;
      const strandColor = s === 0 ? colors2[0] : colors2[1];
      ctx.strokeStyle = strandColor;
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = 0; i <= numBases * 3; i++) {
        const t = i / (numBases * 3);
        const x = startX + t * length;
        const y = startY + Math.sin(t * Math.PI * 4 + phase) * amplitude;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Base pairs (rungs)
    for (let i = 0; i <= numBases; i++) {
      const t = i / numBases;
      const x = startX + t * length;
      const y1 = startY + Math.sin(t * Math.PI * 4) * amplitude;
      const y2 = startY - Math.sin(t * Math.PI * 4) * amplitude;
      ctx.strokeStyle = i % 3 === 0 ? 'rgba(200,50,200,0.6)' : 'rgba(100,200,100,0.6)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x, y1);
      ctx.lineTo(x, y2);
      ctx.stroke();
    }

    if (showFork) {
      // Replication fork
      const forkX = startX + length * 0.55;
      ctx.strokeStyle = 'rgba(255,140,0,0.9)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(forkX, startY - amplitude * 1.5);
      ctx.lineTo(forkX, startY + amplitude * 1.5);
      ctx.stroke();
      ctx.fillStyle = 'rgba(255,140,0,0.8)';
      ctx.font = `bold ${w * 0.026}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('Replication Fork', forkX, startY - amplitude * 1.8);
    }

    ctx.fillStyle = '#000';
    ctx.font = `bold ${w * 0.028}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText(label, startX, startY - amplitude * 2.2);
  };

  // ── Original DNA ──────────────────────────────────────────
  drawHelix(w * 0.04, h * 0.18, w * 0.92, 'Parent DNA (original)', ['rgba(80,120,220,0.9)', 'rgba(220,80,80,0.9)'], false);

  // Unwinding arrow
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w / 2, h * 0.26);
  ctx.lineTo(w / 2, h * 0.32);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w / 2 - w * 0.015, h * 0.30);
  ctx.lineTo(w / 2, h * 0.32);
  ctx.lineTo(w / 2 + w * 0.015, h * 0.30);
  ctx.stroke();
  ctx.fillStyle = '#555';
  ctx.font = `italic ${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Helicase unwinds; Primase adds primers', w / 2, h * 0.38);

  // ── Replication fork detail (middle section) ──────────────
  const forkX = w * 0.52, forkY = h * 0.55;

  // Leading strand (continuous synthesis left)
  ctx.strokeStyle = 'rgba(80,120,220,0.85)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(forkX, forkY - h * 0.05);
  ctx.lineTo(w * 0.10, forkY - h * 0.10);
  ctx.stroke();

  // Template
  ctx.strokeStyle = 'rgba(220,80,80,0.85)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(forkX, forkY - h * 0.05);
  ctx.lineTo(w * 0.10, forkY - h * 0.00);
  ctx.stroke();

  // Lagging strand template
  ctx.strokeStyle = 'rgba(80,120,220,0.85)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(forkX, forkY + h * 0.05);
  ctx.lineTo(w * 0.10, forkY + h * 0.10);
  ctx.stroke();

  // Okazaki fragments
  ctx.strokeStyle = 'rgba(0,180,0,0.8)';
  ctx.lineWidth = 3;
  ctx.setLineDash([w * 0.04, w * 0.015]);
  ctx.beginPath();
  ctx.moveTo(forkX - w * 0.05, forkY + h * 0.05);
  ctx.lineTo(w * 0.10, forkY + h * 0.00);
  ctx.stroke();
  ctx.setLineDash([]);

  // DNA Pol III (leading)
  ctx.fillStyle = 'rgba(100,160,255,0.85)';
  ctx.beginPath();
  ctx.arc(forkX - w * 0.12, forkY - h * 0.075, w * 0.035, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(40,80,200,0.7)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.022}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Pol III', forkX - w * 0.12, forkY - h * 0.072);
  ctx.fillText('(leading)', forkX - w * 0.12, forkY - h * 0.04);

  // DNA Pol III (lagging)
  ctx.fillStyle = 'rgba(100,220,100,0.85)';
  ctx.beginPath();
  ctx.arc(forkX - w * 0.12, forkY + h * 0.06, w * 0.035, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,160,0,0.7)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#000';
  ctx.fillText('Pol III', forkX - w * 0.12, forkY + h * 0.063);
  ctx.fillText('(lagging)', forkX - w * 0.12, forkY + h * 0.095);

  // Helicase at fork
  ctx.fillStyle = 'rgba(255,160,0,0.85)';
  ctx.beginPath();
  ctx.arc(forkX + w * 0.01, forkY, w * 0.038, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = `bold ${w * 0.024}px Arial`;
  ctx.fillText('Heli-', forkX + w * 0.01, forkY - h * 0.012);
  ctx.fillText('case', forkX + w * 0.01, forkY + h * 0.022);

  // SSB proteins
  ctx.fillStyle = 'rgba(200,150,255,0.7)';
  [[-0.08, -0.18], [0.05, -0.18], [-0.04, 0.18], [0.07, 0.18]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(forkX + dx * w, forkY + dy * h, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = '#555';
  ctx.font = `${w * 0.022}px Arial`;
  ctx.fillText('SSB', forkX + w * 0.10, forkY - h * 0.22);
  ctx.fillText('proteins', forkX + w * 0.10, forkY - h * 0.19);

  // ── Daughter strands (right side) ─────────────────────────
  drawHelix(w * 0.60, h * 0.55, w * 0.38, 'Daughter DNA (×2)', ['rgba(80,120,220,0.9)', 'rgba(0,180,0,0.8)'], false);

  // Legend — semi-conservative
  ctx.fillStyle = 'rgba(80,120,220,0.9)';
  ctx.fillRect(w * 0.05, h * 0.90, w * 0.04, h * 0.018);
  ctx.fillStyle = '#000';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Original strand', w * 0.11, h * 0.912);

  ctx.fillStyle = 'rgba(0,180,0,0.9)';
  ctx.fillRect(w * 0.05, h * 0.94, w * 0.04, h * 0.018);
  ctx.fillText('New strand', w * 0.11, h * 0.952);

  ctx.fillStyle = 'rgba(0,180,0,0.8)';
  ctx.lineWidth = 3;
  ctx.setLineDash([8, 5]);
  ctx.beginPath();
  ctx.moveTo(w * 0.52, h * 0.94);
  ctx.lineTo(w * 0.56, h * 0.94);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#000';
  ctx.fillText('Okazaki fragments (lagging strand)', w * 0.57, h * 0.945);

  ctx.fillStyle = '#555';
  ctx.font = `italic ${w * 0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Each daughter DNA has 1 original + 1 new strand (semi-conservative)', w / 2, h * 0.975);
}
